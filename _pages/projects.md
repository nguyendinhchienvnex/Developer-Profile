---
layout: default
title: "Projects"
title_vi: "Dự án"
---

<style>
  .proj-main-title {
    font-weight: 700;
    font-size: 2.15rem;
    letter-spacing: -0.5px;
    background: linear-gradient(135deg, #38bdf8, #22d3ee, #4ade80);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .proj-section-heading {
    font-weight: 600;
    font-size: 1.4rem;
    color: #38bdf8;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.55rem;
  }

  /* MỤC I: Lưới Dự án Doanh nghiệp */
  .repo-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.15rem;
    margin-bottom: 1.75rem;
  }
  .repo-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgba(2, 6, 23, 0.72);
    border: 1px solid rgba(56, 189, 248, 0.24);
    border-radius: 1.15rem;
    padding: 1.35rem;
    text-decoration: none;
    color: inherit;
    transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
  }
  .repo-card:hover {
    transform: translateY(-4px);
    border-color: #22d3ee;
    box-shadow: 0 14px 32px rgba(6, 182, 212, 0.18);
  }
  .repo-card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 0.65rem;
  }
  .repo-folder-icon {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: rgba(56, 189, 248, 0.12);
    border: 1px solid rgba(56, 189, 248, 0.3);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #38bdf8;
    font-size: 1.15rem;
    flex-shrink: 0;
  }
  .repo-badge {
    font-size: 0.72rem;
    font-weight: 600;
    padding: 0.22rem 0.6rem;
    border-radius: 999px;
    background: rgba(34, 197, 94, 0.12);
    border: 1px solid rgba(34, 197, 94, 0.35);
    color: #4ade80;
    white-space: nowrap;
  }
  .repo-title {
    font-size: 1.12rem;
    font-weight: 700;
    color: #f1f5f9;
    margin-bottom: 0.35rem;
    transition: color 0.18s ease;
  }
  .repo-card:hover .repo-title {
    color: #22d3ee;
  }
  .repo-desc {
    font-size: 0.9rem;
    color: #cbd5e1;
    line-height: 1.6;
    margin-bottom: 0.9rem;
  }
  .repo-metrics {
    font-size: 0.82rem;
    color: #7dd3fc;
    background: rgba(56, 189, 248, 0.07);
    border-left: 2.5px solid #38bdf8;
    padding: 0.4rem 0.65rem;
    border-radius: 0 6px 6px 0;
    margin-bottom: 0.9rem;
  }
  .repo-tech-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-bottom: 0.85rem;
  }
  .repo-tech {
    font-size: 0.74rem;
    padding: 0.18rem 0.55rem;
    border-radius: 6px;
    background: rgba(15, 23, 42, 0.95);
    border: 1px solid rgba(148, 163, 184, 0.22);
    color: #94a3b8;
  }
  .repo-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.84rem;
    font-weight: 600;
    color: #38bdf8;
    margin-top: auto;
  }
  .repo-card:hover .repo-cta i {
    transform: translateX(4px);
  }
  .repo-cta i {
    transition: transform 0.2s ease;
  }

  /* MỤC II: Kiểu gáy thư mục (Folder Tab) */
  .proj-folder-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem 1.15rem;
    margin-top: 0.75rem;
    margin-bottom: 1.75rem;
  }
  .proj-folder-wrap {
    position: relative;
    padding-top: 10px;
    height: 100%;
  }
  .proj-folder-wrap::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 18px;
    width: 38%;
    height: 15px;
    background: rgba(56, 189, 248, 0.22);
    border: 1px solid rgba(56, 189, 248, 0.35);
    border-bottom: none;
    border-radius: 0.65rem 0.65rem 0 0;
    transition: background 0.2s ease, transform 0.2s ease;
  }
  .proj-folder-wrap:hover::before {
    background: rgba(56, 189, 248, 0.45);
    transform: translateY(-4px);
  }
  .proj-folder-card {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    text-decoration: none;
    color: inherit;
    background: rgba(2, 6, 23, 0.68);
    border-radius: 1.15rem;
    border: 1px solid rgba(148, 163, 184, 0.2);
    padding: 1.25rem;
    box-shadow: 0 14px 35px rgba(15, 23, 42, 0.85);
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  }
  .proj-folder-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 50px rgba(2, 6, 23, 0.95);
    border-color: rgba(56, 189, 248, 0.65);
    background: radial-gradient(circle at 0 0, rgba(56, 189, 248, 0.12), transparent 60%),
                rgba(15, 23, 42, 0.96);
  }
  .proj-folder-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }
  .proj-folder-badge {
    font-size: 0.74rem;
    font-weight: 500;
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    background: rgba(56, 189, 248, 0.1);
    border: 1px solid rgba(56, 189, 248, 0.28);
    color: #7dd3fc;
    white-space: nowrap;
  }
  .proj-folder-title {
    font-size: 1.06rem;
    font-weight: 700;
    color: #f1f5f9;
    margin-bottom: 0.4rem;
    transition: color 0.18s ease;
  }
  .proj-folder-card:hover .proj-folder-title {
    color: #22d3ee;
  }
  .proj-folder-desc {
    font-size: 0.89rem;
    color: #cbd5e1;
    line-height: 1.55;
    margin-bottom: 0.85rem;
  }
  .proj-folder-action {
    margin-top: auto;
    font-size: 0.84rem;
    font-weight: 600;
    color: #38bdf8;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    transition: gap 0.18s ease, color 0.18s ease;
  }
  .proj-folder-card:hover .proj-folder-action {
    color: #22d3ee;
    gap: 0.55rem;
  }

  /* Case study cards cho học phần */
  .case-box {
    background: rgba(2, 6, 23, 0.45);
    border: 1px solid rgba(148, 163, 184, 0.15);
    border-radius: 1.15rem;
    padding: 1.35rem;
  }
  .case-quote {
    border-left: 3px solid #38bdf8;
    padding-left: 0.95rem;
    color: #bae6fd;
    line-height: 1.65;
    font-size: 0.94rem;
    margin: 0.75rem 0;
  }
  .proj-list {
    color: #cbd5e1;
    padding-left: 1.2rem;
    line-height: 1.7;
    font-size: 0.94rem;
  }

  @media (max-width: 768px) {
    .proj-main-title { font-size: 1.75rem; }
    .repo-grid,
    .proj-folder-grid {
      grid-template-columns: minmax(0, 1fr);
    }
  }
</style>

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

  <p class="text-muted-soft" style="font-size:1.02rem; line-height:1.7;">
    <span class="lang-vi">
      Tổng hợp các hệ thống phần mềm thực tế trong doanh nghiệp, nền tảng IoT chịu tải cao và các sản phẩm cá nhân mình trực tiếp thiết kế kiến trúc, phát triển Full Stack và triển khai vận hành.
    </span>
    <span class="lang-en">
      A showcase of enterprise production systems, high-throughput IoT backends, and personal software products where I architected, engineered full-stack features, and optimized performance.
    </span>
  </p>
</div>

<hr style="border-color: rgba(148, 163, 184, 0.18); margin-bottom: 1.6rem;">

<!-- MỤC I: DỰ ÁN DOANH NGHIỆP -->
<h2 class="proj-section-heading">
  <i class="bi bi-collection-fill"></i>
  <span class="lang-vi">I. Dự Án Doanh Nghiệp</span>
  <span class="lang-en">I. Enterprise Projects</span>
</h2>

<div class="repo-grid">
  <!-- DỰ ÁN 1: AP-ENTERPRISE MANAGEMENT SUITE -->
  <a href="{{ site.baseurl }}/cv/#exp-ai-power" class="repo-card">
    <div>
      <div class="repo-card-top">
        <span class="repo-folder-icon"><i class="bi bi-building-gear"></i></span>
        <span class="repo-badge">
          <i class="bi bi-briefcase me-1"></i> AI Power · 2026
        </span>
      </div>
      <div class="repo-title">AP-Enterprise Management Suite (ERP/CRM)</div>
      <p class="repo-desc">
        <span class="lang-vi">
          Nền tảng hoạch định nguồn lực doanh nghiệp (ERP/CRM) tích hợp thanh toán bảo mật chuẩn ACID, phân quyền đa tầng RBAC và kết nối luồng dữ liệu từ hệ sinh thái AI nội bộ.
        </span>
        <span class="lang-en">
          Enterprise ERP/CRM platform featuring ACID-compliant payment gateways, granular multi-tier RBAC, and real-time data ingestion from internal AI modules.
        </span>
      </p>
      <div class="repo-metrics">
        <i class="bi bi-lightning-charge-fill me-1"></i>
        <span class="lang-vi">Tối ưu ORM N+1 query: Giảm tải trang từ <strong>4s xuống &lt;1.5s</strong> (10.000+ bản ghi)</span>
        <span class="lang-en">Resolved ORM N+1 queries: Cut dashboard load time from <strong>4s to &lt;1.5s</strong> (10k+ records)</span>
      </div>
    </div>
    <div>
      <div class="repo-tech-row">
        <span class="repo-tech">Python</span>
        <span class="repo-tech">Django REST</span>
        <span class="repo-tech">ReactJS</span>
        <span class="repo-tech">TypeScript</span>
        <span class="repo-tech">PostgreSQL</span>
      </div>
      <span class="repo-cta">
        <span class="lang-vi">Xem chi tiết</span>
        <span class="lang-en">View details</span>
        <i class="bi bi-arrow-right"></i>
      </span>
    </div>
  </a>

  <!-- DỰ ÁN 2: HI-NEXUS IOT CORE -->
  <a href="{{ site.baseurl }}/cv/#exp-hitech" class="repo-card">
    <div>
      <div class="repo-card-top">
        <span class="repo-folder-icon"><i class="bi bi-cpu-fill"></i></span>
        <span class="repo-badge">
          <i class="bi bi-briefcase me-1"></i> HI-TECH SOLUTION · 2025–2026
        </span>
      </div>
      <div class="repo-title">HI-Nexus IoT Core Backend</div>
      <p class="repo-desc">
        <span class="lang-vi">
          Hạ tầng IoT bất đồng bộ thay thế hệ thống monolithic cũ, thu thập và xử lý dữ liệu chuỗi thời gian từ hàng nghìn thiết bị thông minh qua giao thức MQTT/WebSockets.
        </span>
        <span class="lang-en">
          Asynchronous IoT backend infrastructure replacing a legacy monolith, ingesting high-frequency time-series telemetry from thousands of smart devices via MQTT/WebSockets.
        </span>
      </p>
      <div class="repo-metrics">
        <i class="bi bi-speedometer2 me-1"></i>
        <span class="lang-vi">Xử lý <strong>500+ kết nối đồng thời</strong> · PostgreSQL Partitioning &amp; Redis Cache</span>
        <span class="lang-en">Handled <strong>500+ concurrent streams</strong> · PostgreSQL Partitioning &amp; Redis Cache</span>
      </div>
    </div>
    <div>
      <div class="repo-tech-row">
        <span class="repo-tech">FastAPI</span>
        <span class="repo-tech">PostgreSQL</span>
        <span class="repo-tech">Redis</span>
        <span class="repo-tech">MQTT</span>
        <span class="repo-tech">Docker Compose</span>
      </div>
      <span class="repo-cta">
        <span class="lang-vi">Xem chi tiết</span>
        <span class="lang-en">View details</span>
        <i class="bi bi-arrow-right"></i>
      </span>
    </div>
  </a>
</div>

<hr style="border-color: rgba(148, 163, 184, 0.18); margin: 2rem 0;">

<!-- MỤC II: DỰ ÁN CÁ NHÂN -->
<h2 class="proj-section-heading">
  <i class="bi bi-terminal-fill"></i>
  <span class="lang-vi">II. Dự Án Cá Nhân</span>
  <span class="lang-en">II. Personal Projects</span>
</h2>

<div class="proj-folder-grid">
  <!-- Thư mục 1: Chien Store -->
  <div class="proj-folder-wrap">
    <a href="{{ site.baseurl }}/projects/chien-store/" class="proj-folder-card">
      <div class="proj-folder-header">
        <span class="repo-folder-icon"><i class="bi bi-bag-check-fill"></i></span>
        <span class="proj-folder-badge">React · Django · PostgreSQL</span>
      </div>
      <div class="proj-folder-title">Chien Store</div>
      <p class="proj-folder-desc">
        <span class="lang-vi">Website bán hàng Full Stack xây dựng với React, Django REST API (Axios) và cơ sở dữ liệu PostgreSQL.</span>
        <span class="lang-en">Full-stack e-commerce web application built with React, Django REST API (Axios), and PostgreSQL.</span>
      </p>
      <div class="proj-folder-action">
        <span class="lang-vi">Xem dự án</span>
        <span class="lang-en">View project</span>
        <i class="bi bi-arrow-right"></i>
      </div>
    </a>
  </div>

  <!-- Thư mục 2: Route-Expense-Tracking -->
  <div class="proj-folder-wrap">
    <a href="{{ site.baseurl }}/projects/route-expense-tracking/" class="proj-folder-card">
      <div class="proj-folder-header">
        <span class="repo-folder-icon"><i class="bi bi-sign-turn-right-fill"></i></span>
        <span class="proj-folder-badge">Python · Logistics</span>
      </div>
      <div class="proj-folder-title">Route-Expense-Tracking</div>
      <p class="proj-folder-desc">
        <span class="lang-vi">Phần mềm tối ưu hóa quãng đường và chi phí vận chuyển cho doanh nghiệp phát triển bằng Python.</span>
        <span class="lang-en">Enterprise route and transportation cost optimization software developed in Python.</span>
      </p>
      <div class="proj-folder-action">
        <span class="lang-vi">Xem dự án</span>
        <span class="lang-en">View project</span>
        <i class="bi bi-arrow-right"></i>
      </div>
    </a>
  </div>

  <!-- Thư mục 3: Milk World App -->
  <div class="proj-folder-wrap">
    <a href="" class="proj-folder-card" style="opacity: 0.9;">
      <div class="proj-folder-header">
        <span class="repo-folder-icon"><i class="bi bi-box-seam-fill"></i></span>
        <span class="proj-folder-badge" style="background: rgba(250, 204, 21, 0.12); border-color: rgba(250, 204, 21, 0.35); color: #fde047;">
          <i class="bi bi-hourglass-split me-1"></i> Coming Soon
        </span>
      </div>
      <div class="proj-folder-title">Milk World App</div>
      <p class="proj-folder-desc">
        <span class="lang-vi">Ứng dụng quản lý bán lẻ và phân phối chuỗi sản phẩm sữa &amp; dinh dưỡng.</span>
        <span class="lang-en">Retail management and distribution application for dairy and nutrition products.</span>
      </p>
      <div class="proj-folder-action" style="color: #94a3b8;">
        <span class="lang-vi">Sắp ra mắt</span>
        <span class="lang-en">Coming soon</span>
        <i class="bi bi-arrow-right"></i>
      </div>
    </a>
  </div>

  <!-- Thư mục 4: TOEIC Learning Platform -->
  <div class="proj-folder-wrap">
    <a href="" class="proj-folder-card" style="opacity: 0.9;">
      <div class="proj-folder-header">
        <span class="repo-folder-icon"><i class="bi bi-mortarboard-fill"></i></span>
        <span class="proj-folder-badge" style="background: rgba(250, 204, 21, 0.12); border-color: rgba(250, 204, 21, 0.35); color: #fde047;">
          <i class="bi bi-hourglass-split me-1"></i> Coming Soon
        </span>
      </div>
      <div class="proj-folder-title">TOEIC Learning Platform</div>
      <p class="proj-folder-desc">
        <span class="lang-vi">Nền tảng web luyện thi TOEIC theo từng Part, thi thử bấm giờ và theo dõi tiến độ học tập.</span>
        <span class="lang-en">Web platform for part-by-part TOEIC practice, timed mock tests, and progress tracking.</span>
      </p>
      <div class="proj-folder-action" style="color: #94a3b8;">
        <span class="lang-vi">Sắp ra mắt</span>
        <span class="lang-en">Coming soon</span>
        <i class="bi bi-arrow-right"></i>
      </div>
    </a>
  </div>
</div>

<hr style="border-color: rgba(148, 163, 184, 0.18); margin: 2rem 0;">

<!-- MỤC III: ĐỀ TÀI HỌC PHẦN & KỸ THUẬT -->
<h2 class="proj-section-heading">
  <i class="bi bi-mortarboard-fill"></i>
  <span class="lang-vi">III. Đề tài Kỹ thuật &amp; Nền tảng Hệ thống</span>
  <span class="lang-en">III. Academic Engineering &amp; Core System Labs</span>
</h2>

<div class="case-box mb-4">
  <div class="row g-4 align-items-center">
    <div class="col-md-7">
      <h3 style="font-weight:600; font-size:1.3rem; color:#22d3ee;">
        <span class="lang-vi">Hệ thống Backend Quản lý Dữ liệu Sinh viên</span>
        <span class="lang-en">Academic Data Management Backend System</span>
      </h3>

      <p style="font-size:0.98rem; line-height:1.65; color:#cbd5e1;">
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

      <p class="mb-0" style="font-size:0.9rem; color:#38bdf8;">
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
      <h3 style="font-weight:600; font-size:1.3rem; color:#22d3ee;">
        <span class="lang-vi">Đóng gói Container &amp; Quy trình Triển khai Tự động</span>
        <span class="lang-en">Containerized Deployment &amp; Automated CI/CD Pipeline</span>
      </h3>

      <p style="font-size:0.98rem; line-height:1.65; color:#cbd5e1;">
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

      <p class="mb-0" style="font-size:0.9rem; color:#38bdf8;">
        <i class="bi bi-check2-circle me-1"></i>
        <span class="lang-vi"><strong>Kết quả:</strong> Rút ngắn thời gian triển khai và đảm bảo tính ổn định xuyên suốt vòng đời ứng dụng.</span>
        <span class="lang-en"><strong>Outcome:</strong> Streamlined release cycles and ensured consistent runtime stability across environments.</span>
      </p>
    </div>

  </div>
</div>

<!-- CALL TO ACTION -->
<div class="p-3 rounded-4 d-flex flex-wrap align-items-center justify-content-between gap-2" style="background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.25);">
  <span style="color:#7dd3fc; font-size:0.93rem;">
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
