---
layout: default
title: "Kỉ Niệm"
permalink: /memories/
---

<div class="mb-4">
  <h1 style="font-weight:700; font-size:2.1rem; letter-spacing:-0.4px; color:#4dd0e1;">
    Kỉ Niệm
  </h1>
  <p class="text-muted-soft" style="font-size:1.02rem; line-height:1.6;">
    Nơi lưu giữ những dấu ấn, cột mốc và khoảnh khắc đáng nhớ trên từng chặng đường mình đã đi qua.
  </p>
</div>

<style>
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
    background: var(--bg-card-soft, rgba(15, 23, 42, 0.96));
    border-radius: 1.2rem;
    border: 1px solid var(--border-soft, rgba(148, 163, 184, 0.18));
    padding: 1rem 1rem 1.2rem 1rem;
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.9);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease,
      border-color 0.2s ease,
      background 0.2s ease;
  }

  .folder-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 22px 60px rgba(15, 23, 42, 1);
    border-color: rgba(56, 189, 248, 0.65);
    background: radial-gradient(circle at 0 0, rgba(56, 189, 248, 0.12), transparent 60%),
                var(--bg-card-soft, rgba(15, 23, 42, 0.98));
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
    background: rgba(15, 23, 42, 0.85);
    backdrop-filter: blur(6px);
    color: #e0f7fa;
    font-size: 0.78rem;
    font-weight: 500;
    padding: 0.25rem 0.65rem;
    border-radius: 999px;
    border: 1px solid rgba(56, 189, 248, 0.35);
  }

  .folder-title {
    font-size: 1.06rem;
    font-weight: 600;
    color: #e0f7fa;
    margin-bottom: 0.2rem;
    line-height: 1.4;
  }

  .folder-meta {
    font-size: 0.84rem;
    color: var(--text-muted, #9ca3af);
    margin-bottom: 0.45rem;
  }

  .folder-action {
    margin-top: auto;
    font-size: 0.82rem;
    color: #4dd0e1;
    font-weight: 500;
  }
</style>

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
              alt="{{ item.title }}"
              class="folder-cover"
              loading="lazy"
            />
            <span class="folder-count-badge">{{ photo_count }} ảnh</span>
          </div>
          <div class="folder-title">{{ item.title }}</div>
          <div class="folder-meta">{{ item.date }}</div>
          <div class="folder-action">Mở không gian lưu trữ →</div>
        </a>
      </div>
    </div>
  {% endfor %}
</div>
