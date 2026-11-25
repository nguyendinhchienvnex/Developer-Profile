---
layout: default
title: "CV"
custom_css: "cv"
---

{% assign cv_data = site.data.cv %}
{% assign profile = cv_data.profile %}

<!-- HEADER + DOWNLOAD BUTTON -->
<div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
  <div>
    <span class="badge-soft mb-2">
      <i class="bi bi-patch-check-fill"></i>
      <span class="lang-vi">Hồ sơ Năng lực Chuyên nghiệp</span>
      <span class="lang-en">Curriculum Vitae</span>
    </span>
    <h1 class="cv-main-title mb-0">
      <span class="lang-vi">CV · Kinh nghiệm &amp; Kỹ năng</span>
      <span class="lang-en">CV · Experience &amp; Qualifications</span>
    </h1>
  </div>

<a
class="btn btn-primary d-inline-flex align-items-center gap-2"
href="{{ site.baseurl }}{{ cv_data.pdf_file }}"
download

>

    <i class="bi bi-file-earmark-arrow-down-fill"></i>
    <span class="lang-vi">Tải xuống CV (PDF)</span>
    <span class="lang-en">Download CV (PDF)</span>

  </a>
</div>

<!-- PROFILE HEADER CARD -->
<div class="cv-profile-card">
  <div class="cv-avatar-wrap">
    <img
      src="{{ site.baseurl }}{{ profile.avatar }}"
      alt="{{ profile.name_vi }} - {{ profile.role }}"
      class="cv-avatar-img"
    />
  </div>

  <div class="cv-info-wrap">
    <h2 class="cv-profile-name mb-1">
      <span class="lang-vi">{{ profile.name_vi }}</span>
      <span class="lang-en">{{ profile.name_en }}</span>
    </h2>
    <div class="cv-profile-role">
      {{ profile.role }}
    </div>

    <ul class="cv-contact-list">
      {% for item in profile.contacts %}
        <li>
          <i class="bi {{ item.icon }}"></i>
          {% if item.url != "" %}
            <a href="{{ item.url }}" target="_blank" rel="noopener noreferrer" title="{{ item.text_en }}">
              {{ item.text_en }}
            </a>
          {% elsif item.text_vi == item.text_en %}
            <span title="{{ item.text_en }}">{{ item.text_en }}</span>
          {% else %}
            <span class="lang-vi" title="{{ item.text_vi }}">{{ item.text_vi }}</span>
            <span class="lang-en" title="{{ item.text_en }}">{{ item.text_en }}</span>
          {% endif %}
        </li>
      {% endfor %}
    </ul>

    <div class="cv-status-pill" title="{{ profile.status_vi }}">
      <i class="bi bi-briefcase-fill"></i>
      <span class="lang-vi">{{ profile.status_vi }}</span>
      <span class="lang-en">{{ profile.status_en }}</span>
    </div>

  </div>
</div>

<!-- SUMMARY -->
<h2 class="cv-section-heading">
  <i class="bi bi-person-lines-fill"></i>
  <span class="lang-vi">Tóm tắt Chuyên môn</span>
  <span class="lang-en">Professional Summary</span>
</h2>

<p class="cv-summary-text">
  <span class="lang-vi">
    Kỹ sư phần mềm Full Stack với <strong>2 năm kinh nghiệm phát triển Web (Web Development)</strong> và <strong>1 năm kinh nghiệm xây dựng ứng dụng phần mềm (Software Applications)</strong>. Thành thạo trong việc phát triển các dịch vụ Backend chịu tải cao (<strong>Python, Django, FastAPI</strong>) và giao diện Frontend tương tác linh hoạt (<strong>ReactJS, TypeScript</strong>). Với nền tảng tư duy thiết kế <strong>UI/UX</strong>, mình đam mê giải quyết các bài toán hiệu năng từ hệ thống đến trải nghiệm người dùng, đồng thời liên tục cập nhật các công nghệ mới, mô hình AI và chuẩn mực kỹ thuật tốt nhất.
  </span>
  <span class="lang-en">
    Full Stack Software Engineer with <strong>2 years of experience in Web Development</strong> and <strong>1 year of experience in building Software Applications</strong>. Proficient in developing robust backend services (<strong>Python, Django, FastAPI</strong>) and dynamic front-end interfaces (<strong>ReactJS, TypeScript</strong>). Backed by strong <strong>UI/UX design</strong> knowledge, I enjoy solving complex engineering challenges to deliver optimal user experiences while continuously integrating emerging technologies, AI models, and industry best practices.
  </span>
</p>

<hr class="cv-divider">

<!-- PROFESSIONAL EXPERIENCE (Render từ _data/cv.yml) -->
<h2 class="cv-section-heading">
  <i class="bi bi-briefcase-fill"></i>
  <span class="lang-vi">Kinh nghiệm Làm việc</span>
  <span class="lang-en">Professional Experience</span>
</h2>

{% for exp in cv_data.experiences %}

  <div id="{{ exp.id }}" class="exp-card">
    <div class="exp-header">
      <div>
        <span class="exp-company">{{ exp.company }}</span> — <span class="exp-role">{{ exp.role }}</span>
      </div>
      <span class="exp-period">
        <i class="bi bi-calendar3"></i> {{ exp.period }}
      </span>
    </div>

    <div class="exp-project-title">
      <i class="bi bi-folder2-open text-info me-1"></i>
      <span class="lang-vi">{{ exp.project_vi }}</span>
      <span class="lang-en">{{ exp.project_en }}</span>
    </div>

    <p class="exp-desc">
      <span class="lang-vi">{{ exp.desc_vi }}</span>
      <span class="lang-en">{{ exp.desc_en }}</span>
    </p>

    <div class="exp-tech-stack">
      {% for tech in exp.tech %}
        <span class="exp-tech-pill">{{ tech }}</span>
      {% endfor %}
    </div>

    <ul class="cv-list">
      {% for b in exp.bullets %}
        <li>
          <span class="lang-vi">{{ b.vi }}</span>
          <span class="lang-en">{{ b.en }}</span>
        </li>
      {% endfor %}
    </ul>

  </div>
{% endfor %}

<hr class="cv-divider">

<!-- TECHNICAL SKILLS (Render từ _data/cv.yml) -->
<h2 class="cv-section-heading">
  <i class="bi bi-cpu-fill"></i>
  <span class="lang-vi">Kỹ năng Chuyên môn</span>
  <span class="lang-en">Technical Skills</span>
</h2>

<div class="row g-3 mb-4">
  {% for skill in cv_data.skills %}
    <div class="col-md-6">
      <div class="skill-box">
        <div class="skill-box-title">
          <i class="bi {{ skill.icon }}"></i>
          <span class="lang-vi">{{ skill.title_vi }}</span>
          <span class="lang-en">{{ skill.title_en }}</span>
        </div>
        {% if skill.type == "text" %}
          <p class="skill-box-text mb-0">{{ skill.text }}</p>
        {% else %}
          <ul class="cv-list">
            {% for b in skill.bullets %}
              <li>
                <span class="lang-vi">{{ b.vi }}</span>
                <span class="lang-en">{{ b.en }}</span>
              </li>
            {% endfor %}
          </ul>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>

<hr class="cv-divider">

<!-- EDUCATION (Render từ _data/cv.yml) -->
<h2 class="cv-section-heading">
  <i class="bi bi-mortarboard-fill"></i>
  <span class="lang-vi">Học vấn</span>
  <span class="lang-en">Education</span>
</h2>

{% for edu in cv_data.education %}

  <div class="edu-box mb-4">
    <div class="d-flex flex-wrap align-items-baseline justify-content-between gap-2 mb-1">
      <h3 class="edu-school">
        <span class="lang-vi">{{ edu.school_vi }}</span>
        <span class="lang-en">{{ edu.school_en }}</span>
      </h3>
      <span class="exp-period">
        <i class="bi bi-calendar-check"></i> {{ edu.period }}
      </span>
    </div>
    <p class="edu-degree mb-0">
      <span class="lang-vi">{{ edu.degree_vi }}</span>
      <span class="lang-en">{{ edu.degree_en }}</span>
    </p>
  </div>
{% endfor %}

<!-- BOTTOM DOWNLOAD CTA -->
<div class="mt-4 text-center">
  <a
    class="btn btn-outline-light d-inline-flex align-items-center gap-2"
    href="{{ site.baseurl }}{{ cv_data.pdf_file }}"
    download
  >
    <i class="bi bi-file-earmark-pdf-fill text-info"></i>
    <span class="lang-vi">Tải bản CV PDF đầy đủ</span>
    <span class="lang-en">Download Full PDF Resume</span>
  </a>
</div>
