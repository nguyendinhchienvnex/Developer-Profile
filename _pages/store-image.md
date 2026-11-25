---
layout: default
title: "Store Image"
title_vi: "Ảnh lưu trữ"
permalink: /storeImage/
custom_css: "store-image"
---

<a href="{{ site.baseurl }}/memories" class="store-back-btn">
  <i class="bi bi-arrow-left"></i>
  <span class="lang-vi">Quay lại Kỉ niệm</span>
  <span class="lang-en">Back to Memories</span>
</a>

{% for item in site.data.memories %}
{% assign folder_path = "/assets/images/memories/" | append: item.id | append: "/" %}

  <section class="album-container" data-album-id="{{ item.id }}">
    <div class="mb-3">
      <h1 class="album-title mb-2">
        <span class="lang-vi">{{ item.title_vi | default: item.title }}</span>
        <span class="lang-en">{{ item.title_en | default: item.title }}</span>
      </h1>

      <p class="text-muted-soft album-desc">
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

    <hr class="album-divider">

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

<script src="{{ site.baseurl }}/assets/js/pages/store-image.js" defer></script>
