---
layout: default
title: "Memories"
title_vi: "Kỉ niệm"
permalink: /memories/
custom_css: "memories"
---

<!-- HEADER -->
<div class="mb-4">
  <span class="badge-soft mb-3">
    <i class="bi bi-camera2"></i>
    <span class="lang-vi">Kho lưu trữ Cột mốc &amp; Hành trình</span>
    <span class="lang-en">Milestones &amp; Visual Archive</span>
  </span>

  <h1 class="memories-main-title mb-2">
    <span class="lang-vi">Kỉ niệm &amp; Dấu ấn</span>
    <span class="lang-en">Memories &amp; Milestones</span>
  </h1>

  <p class="text-muted-soft memories-lead mb-0">
    <span class="lang-vi">
      Không gian lưu giữ những cột mốc đáng nhớ — từ những buổi thuyết trình kỹ thuật, làm việc nhóm dự án tại Học viện Kỹ thuật Mật mã đến các trải nghiệm trưởng thành trên hành trình nghề nghiệp.
    </span>
    <span class="lang-en">
      A curated visual archive preserving meaningful milestones—from technical presentations and team sprints at the Academy of Cryptography Techniques to memorable moments along my engineering journey.
    </span>
  </p>
</div>

<hr class="memories-divider">

<!-- LƯỚI ALBUM THƯ MỤC (Render từ _data/memories.yml) -->
<div class="row folder-grid">
  {% for item in site.data.memories %}
    {% assign folder_path = "/assets/images/memories/" | append: item.id | append: "/" %}
    {% assign photo_count = 0 %}
    {% for file in site.static_files %}
      {% if file.path contains folder_path %}
        {% assign ext = file.extname | downcase %}
        {% if ext == '.jpg' or ext == '.jpeg' or ext == '.png' or ext == '.webp' %}
          {% assign photo_count = photo_count | plus: 1 %}
        {% endif %}
      {% endif %}
    {% endfor %}

    <div class="col-md-4 col-sm-6">
      <div class="folder-card-wrap">
        <a
          class="folder-card"
          href="{{ site.baseurl }}/storeImage?album={{ item.id }}"
        >
          <div class="folder-cover-wrap">
            <img
              src="{{ site.baseurl }}/assets/images/memories/{{ item.id }}/{{ item.cover }}"
              alt="{{ item.title_vi | default: item.title }}"
              class="folder-cover"
              loading="lazy"
            />
            <span class="folder-count-badge">
              <i class="bi bi-images"></i>
              <span class="lang-vi">{{ photo_count }} ảnh</span>
              <span class="lang-en">{{ photo_count }} photos</span>
            </span>
          </div>

          <div class="folder-title">
            <span class="lang-vi">{{ item.title_vi | default: item.title }}</span>
            <span class="lang-en">{{ item.title_en | default: item.title }}</span>
          </div>

          <div class="folder-meta">
            <i class="bi bi-calendar-event"></i>
            <span class="lang-vi">{{ item.date_vi | default: item.date }}</span>
            <span class="lang-en">{{ item.date_en | default: item.date }}</span>
          </div>

          <div class="folder-action">
            <span class="lang-vi">Mở không gian lưu trữ</span>
            <span class="lang-en">Open photo archive</span>
            <i class="bi bi-arrow-right"></i>
          </div>
        </a>
      </div>
    </div>

{% endfor %}

</div>
