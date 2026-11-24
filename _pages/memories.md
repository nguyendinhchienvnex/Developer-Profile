---
layout: default
title: "Memories"
permalink: /memories/
---

<style>
  .memories-main-title {
    font-weight: 700;
    font-size: 2.1rem;
    letter-spacing: -0.4px;
    background: linear-gradient(135deg, #38bdf8, #22d3ee, #4ade80);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .folder-grid {
    row-gap: 2.2rem;
    margin-top: 1.5rem;
  }

  .folder-card-wrap {
    position: relative;
    padding-top: 10px;
    height: 100%;
  }

  /* Tạo gáy thư mục phía sau thẻ */
  .folder-card-wrap::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 18px;
    width: 38%;
    height: 16px;
    background: rgba(56, 189, 248, 0.22);
    border: 1px solid rgba(56, 189, 248, 0.35);
    border-bottom: none;
    border-radius: 0.65rem 0.65rem 0 0;
    transition: background 0.2s ease, transform 0.2s ease;
  }

  .folder-card-wrap:hover::before {
    background: rgba(56, 189, 248, 0.45);
    transform: translateY(-4px);
  }

  .folder-card {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    text-decoration: none;
    color: inherit;
    background: rgba(2, 6, 23, 0.68);
    border-radius: 1.2rem;
    border: 1px solid rgba(148, 163, 184, 0.18);
    padding: 1rem 1rem 1.2rem 1rem;
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.85);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease,
      border-color 0.2s ease,
      background 0.2s ease;
  }

  .folder-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 22px 60px rgba(2, 6, 23, 0.95);
    border-color: rgba(56, 189, 248, 0.65);
    background: radial-gradient(circle at 0 0, rgba(56, 189, 248, 0.12), transparent 60%),
                rgba(15, 23, 42, 0.96);
  }

  .folder-cover-wrap {
    position: relative;
    overflow: hidden;
    border-radius: 0.9rem;
    margin-bottom: 0.9rem;
  }

  .folder-cover {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
    border-radius: 0.9rem;
    transition: transform 0.25s ease;
  }

  .folder-card:hover .folder-cover {
    transform: scale(1.04);
  }

  .folder-count-badge {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: rgba(2, 6, 23, 0.85);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    color: #e0f7fa;
    font-size: 0.78rem;
    font-weight: 500;
    padding: 0.25rem 0.65rem;
    border-radius: 999px;
    border: 1px solid rgba(56, 189, 248, 0.35);
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  }

  .folder-count-badge i {
    color: #38bdf8;
  }

  .folder-title {
    font-size: 1.06rem;
    font-weight: 600;
    color: #f1f5f9;
    margin-bottom: 0.25rem;
    line-height: 1.4;
    transition: color 0.18s ease;
  }

  .folder-card:hover .folder-title {
    color: #22d3ee;
  }

  .folder-meta {
    font-size: 0.84rem;
    color: var(--text-muted, #9ca3af);
    margin-bottom: 0.65rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .folder-meta i {
    color: #38bdf8;
  }

  .folder-action {
    margin-top: auto;
    font-size: 0.84rem;
    color: #38bdf8;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    transition: gap 0.18s ease, color 0.18s ease;
  }

  .folder-card:hover .folder-action {
    color: #22d3ee;
    gap: 0.55rem;
  }

  @media (max-width: 640px) {
    .memories-main-title { font-size: 1.75rem; }
  }
</style>

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

  <p class="text-muted-soft mb-0" style="font-size:1.02rem; line-height:1.7;">
    <span class="lang-vi">
      Không gian lưu giữ những cột mốc đáng nhớ — từ những buổi thuyết trình kỹ thuật, làm việc nhóm dự án tại Học viện Kỹ thuật Mật mã đến các trải nghiệm trưởng thành trên hành trình nghề nghiệp.
    </span>
    <span class="lang-en">
      A curated visual archive preserving meaningful milestones—from technical presentations and team sprints at the Academy of Cryptography Techniques to memorable moments along my engineering journey.
    </span>
  </p>
</div>

<hr style="border-color: rgba(148, 163, 184, 0.18); margin-bottom: 1.5rem;">

<!-- LƯỚI ALBUM THƯ MỤC -->
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
