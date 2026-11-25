---
layout: default
title: "Projects"
title_vi: "Dự án"
custom_css: "projects"
---

{% assign proj_data = site.data.projects %}

<!-- HEADER -->
<div class="mb-4">
  <span class="badge-soft mb-3">
    <i class="bi bi-folder2-open"></i>
    <span class="lang-vi">Danh mục Hệ thống &amp; Sản phẩm</span>
    <span class="lang-en">Engineering &amp; Product Directory</span>
  </span>

  <h1 class="proj-main-title mb-2">
    <span class="lang-vi">Dự Án Nổi Bật</span>
    <span class="lang-en">Featured Projects</span>
  </h1>

  <p class="text-muted-soft proj-lead">
    <span class="lang-vi">
      Tổng hợp các hệ thống phần mềm thực tế trong doanh nghiệp, nền tảng IoT chịu tải cao và các sản phẩm cá nhân mình trực tiếp thiết kế kiến trúc, phát triển Full Stack và triển khai vận hành.
    </span>
    <span class="lang-en">
      A showcase of enterprise production systems, high-throughput IoT backends, and personal software products where I architected, engineered full-stack features, and optimized performance.
    </span>
  </p>
</div>

<hr class="proj-divider">

<!-- MỤC I: DỰ ÁN DOANH NGHIỆP (Render từ _data/projects.yml) -->
<h2 class="proj-section-heading">
  <i class="bi bi-collection-fill"></i>
  <span class="lang-vi">I. Dự Án Doanh Nghiệp</span>
  <span class="lang-en">I. Enterprise Projects</span>
</h2>

<div class="repo-grid">
  {% for item in proj_data.enterprise %}
    <a href="{{ site.baseurl }}{{ item.url }}" class="repo-card">
      <div>
        <div class="repo-card-top">
          <span class="repo-folder-icon"><i class="bi {{ item.icon }}"></i></span>
          <span class="repo-badge">
            <i class="bi bi-briefcase me-1"></i> {{ item.badge }}
          </span>
        </div>
        <div class="repo-title">{{ item.title }}</div>
        <p class="repo-desc">
          <span class="lang-vi">{{ item.desc_vi }}</span>
          <span class="lang-en">{{ item.desc_en }}</span>
        </p>
        <div class="repo-metrics">
          <i class="bi {{ item.metric_icon }} me-1"></i>
          <span class="lang-vi">{{ item.metric_vi }}</span>
          <span class="lang-en">{{ item.metric_en }}</span>
        </div>
      </div>
      <div>
        <div class="repo-tech-row">
          {% for tech in item.tech %}
            <span class="repo-tech">{{ tech }}</span>
          {% endfor %}
        </div>
        <span class="repo-cta">
          <span class="lang-vi">Xem chi tiết</span>
          <span class="lang-en">View details</span>
          <i class="bi bi-arrow-right"></i>
        </span>
      </div>
    </a>
  {% endfor %}
</div>

<hr class="proj-divider">

<!-- MỤC II: DỰ ÁN CÁ NHÂN (Render từ _data/projects.yml) -->
<h2 class="proj-section-heading">
  <i class="bi bi-terminal-fill"></i>
  <span class="lang-vi">II. Dự Án Cá Nhân</span>
  <span class="lang-en">II. Personal Projects</span>
</h2>

<div class="proj-folder-grid">
  {% for item in proj_data.personal %}
    <div class="proj-folder-wrap">
      {% if item.coming_soon %}
        <div class="proj-folder-card is-coming-soon">
          <div class="proj-folder-header">
            <span class="repo-folder-icon"><i class="bi {{ item.icon }}"></i></span>
            <span class="proj-folder-badge is-soon">
              <i class="bi bi-hourglass-split me-1"></i> {{ item.badge }}
            </span>
          </div>
          <div class="proj-folder-title">{{ item.title }}</div>
          <p class="proj-folder-desc">
            <span class="lang-vi">{{ item.desc_vi }}</span>
            <span class="lang-en">{{ item.desc_en }}</span>
          </p>
          <div class="proj-folder-action is-soon">
            <span class="lang-vi">Sắp ra mắt</span>
            <span class="lang-en">Coming soon</span>
            <i class="bi bi-arrow-right"></i>
          </div>
        </div>
      {% else %}
        <a href="{{ site.baseurl }}{{ item.url }}" class="proj-folder-card">
          <div class="proj-folder-header">
            <span class="repo-folder-icon"><i class="bi {{ item.icon }}"></i></span>
            <span class="proj-folder-badge">{{ item.badge }}</span>
          </div>
          <div class="proj-folder-title">{{ item.title }}</div>
          <p class="proj-folder-desc">
            <span class="lang-vi">{{ item.desc_vi }}</span>
            <span class="lang-en">{{ item.desc_en }}</span>
          </p>
          <div class="proj-folder-action">
            <span class="lang-vi">Xem dự án</span>
            <span class="lang-en">View project</span>
            <i class="bi bi-arrow-right"></i>
          </div>
        </a>
      {% endif %}
    </div>
  {% endfor %}
</div>

<hr class="proj-divider">

<!-- MỤC III: ĐỀ TÀI HỌC PHẦN & KỸ THUẬT -->
<h2 class="proj-section-heading">
  <i class="bi bi-mortarboard-fill"></i>
  <span class="lang-vi">III. Đề tài Kỹ thuật &amp; Nền tảng Hệ thống</span>
  <span class="lang-en">III. Academic Engineering &amp; Core System Labs</span>
</h2>

<div class="case-box mb-4">
  <div class="row g-4 align-items-center">
    <div class="col-md-7">
      <h3 class="case-title">
        <span class="lang-vi">Hệ thống Backend Quản lý Dữ liệu Sinh viên</span>
        <span class="lang-en">Academic Data Management Backend System</span>
      </h3>

      <p class="case-desc">
        <span class="lang-vi">
          Xây dựng kiến trúc backend chuẩn hóa phục vụ nghiệp vụ quản lý hồ sơ, điểm số và tra cứu dữ liệu tập trung với đầy đủ các thao tác CRUD, phân trang và kiểm soát tính toàn vẹn dữ liệu.
        </span>
        <span class="lang-en">
          Engineered a structured backend service for centralized academic record management, supporting full CRUD workflows, search filtering, and relational data integrity.
        </span>
      </p>

      <blockquote class="case-quote">
        <span class="lang-vi">
          <strong>Trọng tâm kỹ thuật:</strong> Thiết kế lược đồ cơ sở dữ liệu chuẩn hóa, tách lớp xử lý nghiệp vụ theo mô hình MVT/MVC và đảm bảo khả năng mở rộng tính năng về sau.
        </span>
        <span class="lang-en">
          <strong>Technical Focus:</strong> Normalized relational schema design, clean MVT/MVC separation of concerns, and extensible API endpoints.
        </span>
      </blockquote>

      <ul class="proj-list mb-2">
        <li>Python &amp; Django / Flask (Backend business logic &amp; routing)</li>
        <li>MySQL / SQLite (Relational schema design &amp; indexing)</li>
      </ul>

      <p class="mb-0 case-meta">
        <i class="bi bi-person-check me-1"></i>
        <span class="lang-vi"><strong>Vai trò:</strong> Thiết kế Database, phát triển Backend API và kiểm thử chức năng.</span>
        <span class="lang-en"><strong>Role:</strong> Database modeling, backend implementation, and functional testing.</span>
      </p>
    </div>

    <div class="col-md-5">
      <img src="{{ site.baseurl }}/assets/images/project-1.jpg"
           alt="Backend Data Management System"
           class="img-fluid rounded-4 shadow-lg" />
    </div>

  </div>
</div>

<!-- MỤC IV: TRIỂN KHAI DEVOPS & CI/CD -->
<h2 class="proj-section-heading">
  <i class="bi bi-hdd-rack-fill"></i>
  <span class="lang-vi">IV. Hạ tầng Triển khai &amp; Tự động hóa CI/CD</span>
  <span class="lang-en">IV. Deployment Infrastructure &amp; CI/CD Automation</span>
</h2>

<div class="case-box mb-4">
  <div class="row g-4 align-items-center">
    <div class="col-md-5">
      <img src="{{ site.baseurl }}/assets/images/project-2.jpg"
           alt="DevOps and CI/CD Pipeline"
           class="img-fluid rounded-4 shadow-lg" />
    </div>

    <div class="col-md-7">
      <h3 class="case-title">
        <span class="lang-vi">Đóng gói Container &amp; Quy trình Triển khai Tự động</span>
        <span class="lang-en">Containerized Deployment &amp; Automated CI/CD Pipeline</span>
      </h3>

      <p class="case-desc">
        <span class="lang-vi">
          Thiết lập luồng vận hành hoàn chỉnh từ quản lý mã nguồn trên GitHub đến tự động kiểm thử, đóng gói Docker image và triển khai lên môi trường Linux Server.
        </span>
        <span class="lang-en">
          Built an end-to-end delivery pipeline from GitHub source control to automated testing, Docker containerization, and zero-friction deployment on Linux servers.
        </span>
      </p>

      <blockquote class="case-quote">
        <span class="lang-vi">
          <strong>Trọng tâm kỹ thuật:</strong> Loại bỏ sự sai lệch môi trường giữa máy cá nhân và server thực tế, tự động hóa quy trình cập nhật phiên bản an toàn.
        </span>
        <span class="lang-en">
          <strong>Technical Focus:</strong> Eliminating environment drift between local development and production servers while automating safe release rollouts.
        </span>
      </blockquote>

      <ul class="proj-list mb-2">
        <li>Docker &amp; Docker Compose (Multi-container orchestration)</li>
        <li>Git &amp; GitHub Actions (Automated build &amp; deployment workflows)</li>
        <li>Linux Server Administration (Process management &amp; reverse proxy)</li>
      </ul>

      <p class="mb-0 case-meta">
        <i class="bi bi-check2-circle me-1"></i>
        <span class="lang-vi"><strong>Kết quả:</strong> Rút ngắn thời gian triển khai và đảm bảo tính ổn định xuyên suốt vòng đời ứng dụng.</span>
        <span class="lang-en"><strong>Outcome:</strong> Streamlined release cycles and ensured consistent runtime stability across environments.</span>
      </p>
    </div>

  </div>
</div>

<!-- CALL TO ACTION -->
<div class="proj-cta-banner p-3 rounded-4 d-flex flex-wrap align-items-center justify-content-between gap-2">
  <span class="proj-cta-text">
    <i class="bi bi-chat-square-text me-2"></i>
    <span class="lang-vi">Quan tâm đến kiến trúc kỹ thuật của các dự án trên? Hãy xem hồ sơ năng lực hoặc liên hệ trực tiếp với mình.</span>
    <span class="lang-en">Interested in the technical architecture behind these projects? Feel free to review my CV or reach out directly.</span>
  </span>
  <a href="{{ site.baseurl }}/cv" class="btn btn-primary btn-sm d-inline-flex align-items-center gap-1">
    <i class="bi bi-file-earmark-text"></i>
    <span class="lang-vi">Xem CV chi tiết</span>
    <span class="lang-en">View Full CV</span>
  </a>
</div>
