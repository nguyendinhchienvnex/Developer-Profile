---
layout: default
title: "Store Image"
permalink: /storeImage/
---

<style>
  .store-back-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: #4dd0e1;
    text-decoration: none;
    font-size: 0.92rem;
    font-weight: 500;
    padding: 0.4rem 0.85rem;
    border-radius: 999px;
    background: rgba(15, 23, 42, 0.9);
    border: 1px solid rgba(56, 189, 248, 0.3);
    margin-bottom: 1.2rem;
    transition: all 0.18s ease;
  }

  .store-back-btn:hover {
    background: rgba(56, 189, 248, 0.15);
    border-color: rgba(56, 189, 248, 0.7);
    color: #e0f7fa;
    transform: translateX(-3px);
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
  }

  .photo-item:hover {
    transform: translateY(-3px);
    border-color: rgba(56, 189, 248, 0.65);
    box-shadow: 0 16px 36px rgba(15, 23, 42, 1);
  }

  .photo-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.28s ease;
  }

  .photo-item:hover img {
    transform: scale(1.05);
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
  }

  .lightbox-overlay.active {
    display: flex;
  }

  .lightbox-img {
    max-width: 90vw;
    max-height: 85vh;
    border-radius: 0.75rem;
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.95);
    object-fit: contain;
    z-index: 100000;
  }

  .lightbox-close,
  .lightbox-prev,
  .lightbox-next {
    position: fixed;
    z-index: 100001;
    background: rgba(15, 23, 42, 0.9);
    color: #e0f7fa;
    border: 1px solid rgba(56, 189, 248, 0.45);
    border-radius: 999px;
    width: 44px;
    height: 44px;
    font-size: 1.25rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.18s ease;
  }

  .lightbox-close:hover,
  .lightbox-prev:hover,
  .lightbox-next:hover {
    background: rgba(56, 189, 248, 0.3);
  }

  .lightbox-close { top: 20px; right: 24px; }
  .lightbox-prev  { left: 20px; top: 50%; transform: translateY(-50%); }
  .lightbox-next  { right: 20px; top: 50%; transform: translateY(-50%); }

  .lightbox-counter {
    position: fixed;
    z-index: 100001;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: #e0f7fa;
    font-size: 0.9rem;
    background: rgba(15, 23, 42, 0.9);
    padding: 0.35rem 1rem;
    border-radius: 999px;
    border: 1px solid rgba(148, 163, 184, 0.25);
  }
</style>

<a href="{{ site.baseurl }}/memories" class="store-back-btn">
  ← Quay lại Kỉ Niệm
</a>

{% for item in site.data.memories %}
{% assign folder_path = "/assets/images/memories/" | append: item.id | append: "/" %}

  <section class="album-container" data-album-id="{{ item.id }}" style="display: none;">
    <div class="mb-3">
      <h1 style="font-weight:700; font-size:2rem; letter-spacing:-0.4px; color:#4dd0e1;">
        {{ item.title }}
      </h1>
      <p class="text-muted-soft" style="font-size:1rem; line-height:1.6; margin-bottom: 0.25rem;">
        {{ item.description }}
      </p>
      <span style="font-size: 0.85rem; color: #9ca3af;">Thời gian: {{ item.date }}</span>
    </div>

    <div class="photo-grid">
      {% assign sorted_files = site.static_files | sort: "name" %}
      {% for file in sorted_files %}
        {% if file.path contains folder_path %}
          {% assign ext = file.extname | downcase %}
          {% if ext == '.jpg' or ext == '.jpeg' or ext == '.png' or ext == '.webp' %}
            <div class="photo-item" onclick="openLightbox(this)">
              <img
                src="{{ site.baseurl }}{{ file.path }}"
                alt="{{ item.title }}"
                loading="lazy"
              />
            </div>
          {% endif %}
        {% endif %}
      {% endfor %}
    </div>

  </section>
{% endfor %}

<!-- Lightbox xem ảnh phóng to -->
<div class="lightbox-overlay" id="lightbox" onclick="closeLightboxOnBg(event)">
  <button class="lightbox-close" onclick="closeLightbox()" title="Đóng (Esc)">✕</button>
  <button class="lightbox-prev" onclick="changePhoto(-1)" title="Ảnh trước">‹</button>
  <img class="lightbox-img" id="lightbox-img" src="" alt="Preview" />
  <button class="lightbox-next" onclick="changePhoto(1)" title="Ảnh tiếp theo">›</button>
  <div class="lightbox-counter" id="lightbox-counter"></div>
</div>

<script>
  let currentPhotos = [];
  let currentIndex = 0;

  document.addEventListener("DOMContentLoaded", function () {
    // Đưa khung Lightbox ra ngoài cùng (vào thẳng <body>) để che phủ cả Navbar và cột ABOUT ME
    const lightboxEl = document.getElementById("lightbox");
    if (lightboxEl) {
      document.body.appendChild(lightboxEl);
    }

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
  });

  function openLightbox(el) {
    const grid = el.closest(".photo-grid");
    currentPhotos = Array.from(grid.querySelectorAll("img")).map((img) => img.src);
    currentIndex = currentPhotos.indexOf(el.querySelector("img").src);
    updateLightbox();
    document.getElementById("lightbox").classList.add("active");
    document.body.style.overflow = "hidden"; // Khóa cuộn trang nền phía sau
  }

  function updateLightbox() {
    document.getElementById("lightbox-img").src = currentPhotos[currentIndex];
    document.getElementById("lightbox-counter").textContent =
      (currentIndex + 1) + " / " + currentPhotos.length;
  }

  function changePhoto(step) {
    currentIndex = (currentIndex + step + currentPhotos.length) % currentPhotos.length;
    updateLightbox();
  }

  function closeLightbox() {
    document.getElementById("lightbox").classList.remove("active");
    document.body.style.overflow = ""; // Mở lại cuộn trang
  }

  function closeLightboxOnBg(e) {
    if (e.target.id === "lightbox") closeLightbox();
  }

  document.addEventListener("keydown", function (e) {
    const lb = document.getElementById("lightbox");
    if (!lb.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") changePhoto(-1);
    if (e.key === "ArrowRight") changePhoto(1);
  });
</script>
