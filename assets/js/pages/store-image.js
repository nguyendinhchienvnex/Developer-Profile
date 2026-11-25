let currentPhotos = [];
let currentIndex = 0;
let currentProbe = null;

document.addEventListener("DOMContentLoaded", function () {
  const lightboxEl = document.getElementById("lightbox");
  if (lightboxEl) {
    document.body.appendChild(lightboxEl);
  }

  // Chặn chuột phải và kéo thả trên toàn bộ trang
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
  document.addEventListener("dragstart", function (e) {
    e.preventDefault();
  });

  const params = new URLSearchParams(window.location.search);
  const albumId = params.get("album");
  const sections = document.querySelectorAll(".album-container");
  let matched = false;

  sections.forEach((sec) => {
    if (albumId && sec.dataset.albumId === albumId) {
      sec.style.display = "block";
      matched = true;
    }
  });

  if (!matched) {
    sections.forEach((sec) => (sec.style.display = "block"));
  }

  initLazyImages();
});

// Tải ảnh nền mượt mà khi cuộn tới
function initLazyImages() {
  const bgEls = document.querySelectorAll(".photo-bg[data-bg]");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.style.backgroundImage = 'url("' + el.dataset.bg + '")';
            el.removeAttribute("data-bg");
            obs.unobserve(el);
          }
        });
      },
      { rootMargin: "250px" }
    );

    bgEls.forEach((el) => observer.observe(el));
  } else {
    bgEls.forEach((el) => {
      el.style.backgroundImage = 'url("' + el.dataset.bg + '")';
    });
  }
}

function fitLightboxSize(w, h) {
  const bgEl = document.getElementById("lightbox-bg");
  if (!w || !h) return;
  const maxW = window.innerWidth * 0.9;
  const maxH = window.innerHeight * 0.85;
  const ratio = Math.min(maxW / w, maxH / h);
  bgEl.style.width = Math.round(w * ratio) + "px";
  bgEl.style.height = Math.round(h * ratio) + "px";
}

function openLightbox(el) {
  const grid = el.closest(".photo-grid");
  currentPhotos = Array.from(grid.querySelectorAll(".photo-item")).map(
    (item) => item.dataset.src
  );
  currentIndex = currentPhotos.indexOf(el.dataset.src);
  updateLightbox();
  document.getElementById("lightbox").classList.add("active");
  document.body.style.overflow = "hidden";
}

function updateLightbox() {
  const url = currentPhotos[currentIndex];
  const bgEl = document.getElementById("lightbox-bg");
  const probe = new Image();
  probe.onload = function () {
    fitLightboxSize(probe.naturalWidth, probe.naturalHeight);
    bgEl.style.backgroundImage = 'url("' + url + '")';
  };
  probe.src = url;
  currentProbe = probe;

  document.getElementById("lightbox-counter").textContent =
    currentIndex + 1 + " / " + currentPhotos.length;
}

function changePhoto(step) {
  currentIndex = (currentIndex + step + currentPhotos.length) % currentPhotos.length;
  updateLightbox();
  if (document.activeElement) {
    document.activeElement.blur();
  }
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
  document.body.style.overflow = "";
}

function closeLightboxOnBg(e) {
  if (e.target.id === "lightbox") closeLightbox();
}

window.addEventListener("resize", function () {
  const lb = document.getElementById("lightbox");
  if (lb && lb.classList.contains("active") && currentProbe) {
    fitLightboxSize(currentProbe.naturalWidth, currentProbe.naturalHeight);
  }
});

document.addEventListener("keydown", function (e) {
  // Chặn phím tắt lưu trang Ctrl+S / Cmd+S và xem mã nguồn Ctrl+U
  if ((e.ctrlKey || e.metaKey) && ["s", "u"].includes(e.key.toLowerCase())) {
    e.preventDefault();
    return;
  }

  const lb = document.getElementById("lightbox");
  if (!lb.classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") changePhoto(-1);
  if (e.key === "ArrowRight") changePhoto(1);
});
