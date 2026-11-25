---
layout: default
title: "Blog"
title_vi: "Bài viết"
custom_css: "blog"
---

{% assign blog_data = site.data.blog %}

<!-- HEADER -->
<div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
  <h1 class="blog-main-title mb-0">
    <span class="lang-vi">Blog · Ghi chép Kỹ thuật &amp; Kiến trúc</span>
    <span class="lang-en">Blog · Engineering Notes &amp; Architecture</span>
  </h1>
  <span class="badge-soft">
    <i class="bi bi-broadcast-pin"></i>
    <span>Building &amp; Learning in Public</span>
  </span>
</div>

<p class="text-muted-soft blog-lead mb-4">
  <span class="lang-vi">
    Không gian lưu trữ các phân tích thực chiến về <strong>kiến trúc Backend (Python, Django, FastAPI)</strong>, tối ưu hiệu năng cơ sở dữ liệu, quy trình <strong>Docker/DevOps</strong> và tư duy xây dựng hệ thống phần mềm bền vững từ các dự án thực tế.
  </span>
  <span class="lang-en">
    A curated space documenting hands-on insights into <strong>Backend Architecture (Python, Django, FastAPI)</strong>, database performance tuning, <strong>Docker/DevOps</strong> workflows, and scalable software engineering from real-world production systems.
  </span>
</p>

<hr class="blog-divider">

<!-- 3 TRỤ CỘT GHI CHÉP KỸ THUẬT (Render từ _data/blog.yml) -->

{% for item in blog_data.pillars %}

  <article class="blog-card-wrap {% if forloop.last %}mb-2{% endif %}">
    <div class="blog-meta-bar">
      <span><i class="bi {{ item.category_icon }} text-info me-1"></i> {{ item.category }}</span>
      {% for tag in item.tags %}
        <span class="blog-tag-pill">{{ tag }}</span>
      {% endfor %}
    </div>

    <h2 class="blog-section-title">
      <i class="bi {{ item.number_icon }}"></i>
      <span class="lang-vi">{{ item.title_vi }}</span>
      <span class="lang-en">{{ item.title_en }}</span>
    </h2>

    {% if item.image_position == "right" %}
      <div class="row g-3 align-items-center">
        <div class="col-md-7">
          <p class="blog-body-text mb-2">
            <span class="lang-vi">{{ item.intro_vi }}</span>
            <span class="lang-en">{{ item.intro_en }}</span>
          </p>
          <ul class="blog-list mb-2">
            {% for b in item.bullets %}
              <li>
                <span class="lang-vi">{{ b.vi }}</span>
                <span class="lang-en">{{ b.en }}</span>
              </li>
            {% endfor %}
          </ul>
          {% if item.outro_vi %}
            <p class="text-muted-soft blog-outro-text mb-0">
              <span class="lang-vi">{{ item.outro_vi }}</span>
              <span class="lang-en">{{ item.outro_en }}</span>
            </p>
          {% endif %}
        </div>
        <div class="col-md-5">
          <img
            src="{{ site.baseurl }}{{ item.image }}"
            alt="{{ item.image_alt }}"
            class="img-fluid rounded-4 shadow-sm"
          />
        </div>
      </div>

    {% elsif item.image_position == "left" %}
      <div class="row g-3 align-items-center">
        <div class="col-md-5">
          <img
            src="{{ site.baseurl }}{{ item.image }}"
            alt="{{ item.image_alt }}"
            class="img-fluid rounded-4 shadow-sm"
          />
        </div>
        <div class="col-md-7">
          <p class="blog-body-text mb-2">
            <span class="lang-vi">{{ item.intro_vi }}</span>
            <span class="lang-en">{{ item.intro_en }}</span>
          </p>
          {% if item.sub_intro_vi %}
            <p class="blog-body-text mb-2">
              <span class="lang-vi">{{ item.sub_intro_vi }}</span>
              <span class="lang-en">{{ item.sub_intro_en }}</span>
            </p>
          {% endif %}
          <ul class="blog-list mb-0">
            {% for b in item.bullets %}
              <li>
                <span class="lang-vi">{{ b.vi }}</span>
                <span class="lang-en">{{ b.en }}</span>
              </li>
            {% endfor %}
          </ul>
        </div>
      </div>

    {% else %}
      <p class="blog-body-text mb-2">
        <span class="lang-vi">{{ item.intro_vi }}</span>
        <span class="lang-en">{{ item.intro_en }}</span>
      </p>
      <ul class="blog-list mb-0">
        {% for b in item.bullets %}
          <li>
            <span class="lang-vi">{{ b.vi }}</span>
            <span class="lang-en">{{ b.en }}</span>
          </li>
        {% endfor %}
      </ul>
    {% endif %}

  </article>
{% endfor %}

<!-- TỰ ĐỘNG HIỂN THỊ BÀI VIẾT MỚI TỪ _POSTS NẾU CÓ -->

{% if site.posts.size > 0 %}

  <hr class="blog-divider">
  <h2 class="blog-section-title">
    <i class="bi bi-rss-fill"></i>
    <span class="lang-vi">Bài viết mới nhất</span>
    <span class="lang-en">Latest Published Posts</span>
  </h2>
  {% for post in site.posts %}
    <div class="blog-card-wrap">
      <div class="blog-meta-bar">
        <span><i class="bi bi-calendar3 text-info me-1"></i> {{ post.date | date: "%d/%m/%Y" }}</span>
      </div>
      <h3 class="blog-post-title">
        <a href="{{ site.baseurl }}{{ post.url }}">
          <span class="lang-vi">{{ post.title_vi | default: post.title }}</span>
          <span class="lang-en">{{ post.title_en | default: post.title }}</span>
        </a>
      </h3>
      <p class="text-muted-soft blog-post-excerpt mb-2">
        <span class="lang-vi">{{ post.excerpt_vi | default: post.excerpt | strip_html | truncatewords: 32 }}</span>
        <span class="lang-en">{{ post.excerpt_en | default: post.excerpt | strip_html | truncatewords: 32 }}</span>
      </p>
      <a href="{{ site.baseurl }}{{ post.url }}" class="blog-post-link">
        <span class="lang-vi">Đọc chi tiết</span>
        <span class="lang-en">Read full post</span>
        <i class="bi bi-arrow-right"></i>
      </a>
    </div>
  {% endfor %}
{% endif %}
