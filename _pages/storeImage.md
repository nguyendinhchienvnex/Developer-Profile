---
layout: default
title: "Store Image"
permalink: /storeImage/
---

<style>
  .store-back-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    color: #38bdf8;
    text-decoration: none;
    font-size: 0.92rem;
    font-weight: 500;
    padding: 0.45rem 0.95rem;
    border-radius: 999px;
    background: rgba(2, 6, 23, 0.75);
    border: 1px solid rgba(56, 189, 248, 0.3);
    margin-bottom: 1.25rem;
    transition: all 0.18s ease;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }

  @media (hover: hover) and (pointer: fine) {
    .store-back-btn:hover {
      background: rgba(56, 189, 248, 0.15);
      border-color: rgba(56, 189, 248, 0.75);
      color: #e0f7fa;
      transform: translateX(-3px);
    }
  }

  .album-title {
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: -0.4px;
    background: linear-gradient(135deg, #38bdf8, #22d3ee, #4ade80);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .album-date-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.85rem;
    color: #94a3b8;
    margin-top: 0.25rem;
  }

  .album-date-badge i {
    color: #38bdf8;
  }

  .photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 1.1rem;
    margin-top: 1.5rem;
  }

  .photo-item {
    position: relative;
    overflow: hidden;
    border-radius: 0.95rem;
    background: rgba(15, 23, 42, 0.95);
    border: 1px solid rgba(148, 163, 184, 0.18);
    aspect-ratio: 4 / 3;
    cursor: zoom-in;
    box-shadow: 0 10px 25px rgba(15, 23, 42, 0.8);
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  @media (hover: hover) and (pointer: fine) {
    .photo-item:hover {
      transform: translateY(-3px);
      border-color: rgba(56, 189, 248, 0.65);
      box-shadow: 0 16px 36px rgba(15, 23, 42, 1);
    }
    .photo-item:hover .photo-bg {
      transform: scale(1.05);
    }
  }

  /* Hiển thị ảnh dạng nền CSS để trình duyệt PC không nhận diện là thẻ <img> */
  .photo-bg {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: transform 0.28s ease;
    pointer-events: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Lớp khiên nằm đè lên trên cùng */
  .img-shield {
    position: absolute;
    inset: 0;
    z-index: 100005;
    background: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Lightbox phủ đen mờ toàn màn hình */
  .lightbox-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    inset: 0;
    z-index: 99999;
    background: rgba(2, 6, 23, 0.92);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }

  .lightbox-overlay.active {
    display: flex;
  }

  .lightbox-img-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100000;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }

  .lightbox-bg {
    border-radius: 0.75rem;
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.95);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    pointer-events: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }

  .lightbox-close,
  .lightbox-prev,
  .lightbox-next {
    position: fixed;
    z-index: 100010;
    background: rgba(15, 23, 42, 0.9);
    color: #e0f7fa;
    border: 1px solid rgba(56, 189, 248, 0.45);
    border-radius: 999px;
    width: 44px;
    height: 44px;
    font-size: 1.15rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    user-select: none;
    transition: background 0.15s ease, transform 0.12s ease;
  }

  @media (hover: hover) and (pointer: fine) {
    .lightbox-close:hover,
    .lightbox-prev:hover,
    .lightbox-next:hover {
      background: rgba(56, 189, 248, 0.3);
      color: #ffffff;
    }
  }

  .lightbox-close:active {
    background: rgba(56, 189, 248, 0.35);
    transform: scale(0.92);
  }

  .lightbox-prev:active,
  .lightbox-next:active {
    background: rgba(56, 189, 248, 0.35);
    transform: translateY(-50%) scale(0.92);
  }

  .lightbox-close { top: 20px; right: 24px; }
  .lightbox-prev  { left: 20px; top: 50%; transform: translateY(-50%); }
  .lightbox-next  { right: 20px; top: 50%; transform: translateY(-50%); }

  .lightbox-counter {
    position: fixed;
    z-index: 100010;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: #e0f7fa;
    font-size: 0.9rem;
    font-weight: 500;
    background: rgba(15, 23, 42, 0.9);
    padding: 0.35rem 1rem;
    border-radius: 999px;
    border: 1px solid rgba(56, 189, 248, 0.3);
  }

  @media (max-width: 640px) {
    .album-title { font-size: 1.65rem; }
    .photo-grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 0.75rem; }
    .lightbox-prev { left: 10px; }
    .lightbox-next { right: 10px; }
    .lightbox-close { top: 14px; right: 14px; }
  }
</style>

<a href="{{ site.baseurl }}/memories" class="store-back-btn">
  <i class="bi bi-arrow-left"></i>
  <span class="lang-vi">Quay lại Kỉ niệm</span>
  <span class="lang-en">Back to Memories</span>
</a>

{% for item in site.data.memories %}
{% assign folder_path = "/assets/images/memories/" | append: item.id | append: "/" %}

  <section class="album-container" data-album-id="{{ item.id }}" style="display: none;">
    <div class="mb-3">
      <h1 class="album-title mb-2">
        <span class="lang-vi">{{ item.title_vi | default: item.title }}</span>
        <span class="lang-en">{{ item.title_en | default: item.title }}</span>
      </h1>

      <p class="text-muted-soft" style="font-size:1rem; line-height:1.65; margin-bottom: 0.35rem;">
        <span class="lang-vi">{{ item.description_vi | default: item.description }}</span>
        <span class="lang-en">{{ item.description_en | default: item.description }}</span>
      </p>

      <div class="album-date-badge">
        <i class="bi bi-calendar-event"></i>
        <span>
          <span class="lang-vi">Thời gian: {{ item.date_vi | default: item.date }}</span>
          <span class="lang-en">Date: {{ item.date_en | default: item.date }}</span>
        </span>
      </div>
    </div>

    <hr style="border-color: rgba(148, 163, 184, 0.18); margin: 1.25rem 0;">

    <div class="photo-grid">
      {% assign sorted_files = site.static_files | sort: "name" %}
      {% for file in sorted_files %}
        {% if file.path contains folder_path %}
          {% assign ext = file.extname | downcase %}
          {% if ext == '.jpg' or ext == '.jpeg' or ext == '.png' or ext == '.webp' %}
            <div
              class="photo-item"
              data-src="{{ site.baseurl }}{{ file.path }}"
              onclick="openLightbox(this)"
            >
              <div
                class="photo-bg"
                data-bg="{{ site.baseurl }}{{ file.path }}"
              ></div>
              <div class="img-shield"></div>
            </div>
          {% endif %}
        {% endif %}
      {% endfor %}
    </div>

  </section>
{% endfor %}

<!-- Lightbox xem ảnh phóng to (100% Bootstrap Icons) -->
<div class="lightbox-overlay" id="lightbox" onclick="closeLightboxOnBg(event)">
  <button type="button" class="lightbox-close" onclick="closeLightbox()" aria-label="Close">
    <i class="bi bi-x-lg"></i>
  </button>
  <button type="button" class="lightbox-prev" onclick="changePhoto(-1)" aria-label="Previous photo">
    <i class="bi bi-chevron-left"></i>
  </button>

  <div class="lightbox-img-wrapper">
    <div class="lightbox-bg" id="lightbox-bg"></div>
    <div class="img-shield"></div>
  </div>

  <button type="button" class="lightbox-next" onclick="changePhoto(1)" aria-label="Next photo">
    <i class="bi bi-chevron-right"></i>
  </button>
  <div class="lightbox-counter" id="lightbox-counter"></div>
</div>

<script>
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
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.style.backgroundImage = 'url("' + el.dataset.bg + '")';
            el.removeAttribute("data-bg");
            obs.unobserve(el);
          }
        });
      }, { rootMargin: "250px" });

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
      (currentIndex + 1) + " / " + currentPhotos.length;
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
</script>
