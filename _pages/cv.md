---
layout: default
title: "CV"
---

<style>
  .cv-main-title {
    font-weight: 700;
    font-size: 2.1rem;
    letter-spacing: -0.4px;
    background: linear-gradient(135deg, #38bdf8, #22d3ee, #4ade80);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .cv-section-heading {
    font-weight: 600;
    font-size: 1.4rem;
    color: #38bdf8;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.55rem;
  }

  /* Profile Header Card - Cắt dấu ... trên 1 dòng, không tràn div */
  .cv-profile-card {
    background: rgba(2, 6, 23, 0.65);
    border: 1px solid rgba(56, 189, 248, 0.25);
    border-radius: 1.25rem;
    padding: 1.4rem;
    margin-bottom: 1.75rem;
    display: flex;
    align-items: center;
    gap: 1.45rem;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }

  .cv-avatar-wrap {
    flex-shrink: 0;
  }

  .cv-avatar-img {
    width: 138px;
    height: 172px;
    object-fit: cover;
    object-position: center top;
    border-radius: 1rem;
    border: 2px solid rgba(56, 189, 248, 0.35);
    box-shadow: 0 10px 25px rgba(2, 6, 23, 0.75);
    display: block;
  }

  .cv-info-wrap {
    flex: 1 1 0%;
    min-width: 0;
    max-width: 100%;
  }

  .cv-contact-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.55rem 1.15rem;
    list-style: none;
    padding: 0;
    margin: 0.85rem 0 1rem 0;
    font-size: 0.88rem;
    color: #cbd5e1;
    width: 100%;
  }

  .cv-contact-list li {
    display: flex;
    align-items: center;
    gap: 0.48rem;
    line-height: 1.45;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
  }

  .cv-contact-list i {
    color: #38bdf8;
    font-size: 0.95rem;
    flex-shrink: 0;
  }

  .cv-contact-list a,
  .cv-contact-list span {
    display: block;
    flex: 1 1 auto;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .cv-contact-list a {
    color: #7dd3fc;
    text-decoration: none;
  }

  .cv-contact-list span {
    color: #cbd5e1;
  }

  .cv-contact-list a:hover {
    text-decoration: underline;
    color: #22d3ee;
  }

  .cv-status-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    font-size: 0.8rem;
    font-weight: 500;
    padding: 0.35rem 0.85rem;
    border-radius: 999px;
    background: rgba(56, 189, 248, 0.1);
    border: 1px solid rgba(56, 189, 248, 0.32);
    color: #bae6fd;
    max-width: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }

  .cv-status-pill i {
    color: #38bdf8;
    flex-shrink: 0;
  }

  .cv-status-pill span {
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Experience Timeline Cards */
  .exp-card {
    scroll-margin-top: 90px;
    background: rgba(2, 6, 23, 0.58);
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-left: 3.5px solid #38bdf8;
    border-radius: 1.1rem;
    padding: 1.4rem 1.45rem;
    margin-bottom: 1.35rem;
    transition: border-color 0.2s ease, transform 0.2s ease;
  }

  .exp-card:hover {
    border-color: rgba(56, 189, 248, 0.55);
    transform: translateY(-2px);
  }

  .exp-header {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 0.35rem;
  }

  .exp-company {
    font-size: 1.15rem;
    font-weight: 700;
    color: #f1f5f9;
  }

  .exp-role {
    color: #22d3ee;
    font-weight: 600;
  }

  .exp-period {
    font-size: 0.82rem;
    font-weight: 600;
    padding: 0.22rem 0.7rem;
    border-radius: 999px;
    background: rgba(56, 189, 248, 0.12);
    border: 1px solid rgba(56, 189, 248, 0.3);
    color: #38bdf8;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  }

  .exp-project-title {
    font-size: 0.96rem;
    font-weight: 600;
    color: #e2e8f0;
    margin-bottom: 0.45rem;
  }

  .exp-desc {
    font-size: 0.92rem;
    color: #94a3b8;
    line-height: 1.6;
    margin-bottom: 0.75rem;
  }

  .exp-tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.38rem;
    margin-bottom: 0.85rem;
  }

  .exp-tech-pill {
    font-size: 0.76rem;
    font-weight: 500;
    padding: 0.2rem 0.6rem;
    border-radius: 6px;
    background: rgba(15, 23, 42, 0.95);
    border: 1px solid rgba(56, 189, 248, 0.25);
    color: #7dd3fc;
  }

  .cv-list {
    color: #cbd5e1;
    padding-left: 1.2rem;
    line-height: 1.7;
    font-size: 0.93rem;
    margin-bottom: 0;
  }

  .cv-list li {
    margin-bottom: 0.4rem;
  }

  /* Technical Skills Grid */
  .skill-box {
    background: rgba(2, 6, 23, 0.55);
    border: 1px solid rgba(148, 163, 184, 0.16);
    border-radius: 1rem;
    padding: 1.15rem 1.25rem;
    height: 100%;
  }

  .skill-box-title {
    font-size: 0.95rem;
    font-weight: 600;
    color: #22d3ee;
    margin-bottom: 0.55rem;
    display: flex;
    align-items: center;
    gap: 0.45rem;
  }

  .edu-box {
    background: rgba(2, 6, 23, 0.55);
    border: 1px solid rgba(148, 163, 184, 0.16);
    border-radius: 1.1rem;
    padding: 1.35rem 1.45rem;
  }

  /* Responsive Breakpoints */
  @media (max-width: 992px) {
    .cv-contact-list {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  @media (max-width: 640px) {
    .cv-main-title {
      font-size: 1.75rem;
    }
    .cv-profile-card {
      flex-direction: column;
      text-align: center;
      padding: 1.25rem 1rem;
      gap: 1.1rem;
    }
    .cv-avatar-img {
      width: 125px;
      height: 155px;
      margin: 0 auto;
    }
    .cv-contact-list {
      text-align: left;
      width: 100%;
      max-width: 340px;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>

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
href="{{ site.baseurl }}/Nguyen_Dinh_Chien_CV.pdf"
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
      src="{{ site.baseurl }}/assets/images/avatar.jpg"
      alt="Nguyễn Đình Chiến - Full Stack Software Engineer"
      class="cv-avatar-img"
    />
  </div>

  <div class="cv-info-wrap">
    <h2 class="mb-1" style="font-size: 1.45rem; font-weight: 700; color: #f1f5f9; line-height: 1.3; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
      <span class="lang-vi">Nguyễn Đình Chiến (Chris Nguyen)</span>
      <span class="lang-en">Nguyen Dinh Chien (Chris Nguyen)</span>
    </h2>
    <div style="font-size: 1rem; font-weight: 600; color: #38bdf8; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
      Full Stack Software Engineer
    </div>

    <ul class="cv-contact-list">
      <li>
        <i class="bi bi-telephone-fill"></i>
        <span title="+84 981646705">+84 981646705</span>
      </li>
      <li>
        <i class="bi bi-envelope-fill"></i>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nguyendinhchienvnex@gmail.com" target="_blank" rel="noopener noreferrer" title="nguyendinhchienvnex@gmail.com">
          nguyendinhchienvnex@gmail.com
        </a>
      </li>
      <li>
        <i class="bi bi-geo-alt-fill"></i>
        <span class="lang-vi" title="TP. Hồ Chí Minh, Việt Nam">TP. Hồ Chí Minh, Việt Nam</span>
        <span class="lang-en" title="Ho Chi Minh City, Vietnam">Ho Chi Minh City, Vietnam</span>
      </li>
      <li>
        <i class="bi bi-translate"></i>
        <span title="TOEIC 800">TOEIC 800</span>
      </li>
      <li>
        <i class="bi bi-linkedin"></i>
        <a href="https://www.linkedin.com/in/chien-nguyen-dinh" target="_blank" rel="noopener noreferrer" title="linkedin.com/in/chien-nguyen-dinh">
          linkedin.com/in/chien-nguyen-dinh
        </a>
      </li>
      <li>
        <i class="bi bi-github"></i>
        <a href="https://github.com/nguyendinhchienvnex" target="_blank" rel="noopener noreferrer" title="github.com/nguyendinhchienvnex">
          github.com/nguyendinhchienvnex
        </a>
      </li>
    </ul>

    <div class="cv-status-pill" title="Sẵn sàng cho vị trí Full Stack / Backend Software Engineer">
      <i class="bi bi-briefcase-fill"></i>
      <span class="lang-vi">Sẵn sàng cho vị trí Full Stack / Backend Software Engineer</span>
      <span class="lang-en">Open to Full Stack / Backend Software Engineer Roles</span>
    </div>

  </div>
</div>

<!-- SUMMARY -->
<h2 class="cv-section-heading">
  <i class="bi bi-person-lines-fill"></i>
  <span class="lang-vi">Tóm tắt Chuyên môn</span>
  <span class="lang-en">Professional Summary</span>
</h2>

<p style="color:#cbd5e1; line-height:1.75; margin-bottom: 1.75rem;">
  <span class="lang-vi">
    Kỹ sư phần mềm Full Stack với <strong>2 năm kinh nghiệm phát triển Web (Web Development)</strong> và <strong>1 năm kinh nghiệm xây dựng ứng dụng phần mềm (Software Applications)</strong>. Thành thạo trong việc phát triển các dịch vụ Backend chịu tải cao (<strong>Python, Django, FastAPI</strong>) và giao diện Frontend tương tác linh hoạt (<strong>ReactJS, TypeScript</strong>). Với nền tảng tư duy thiết kế <strong>UI/UX</strong>, mình đam mê giải quyết các bài toán hiệu năng từ hệ thống đến trải nghiệm người dùng, đồng thời liên tục cập nhật các công nghệ mới, mô hình AI và chuẩn mực kỹ thuật tốt nhất.
  </span>
  <span class="lang-en">
    Full Stack Software Engineer with <strong>2 years of experience in Web Development</strong> and <strong>1 year of experience in building Software Applications</strong>. Proficient in developing robust backend services (<strong>Python, Django, FastAPI</strong>) and dynamic front-end interfaces (<strong>ReactJS, TypeScript</strong>). Backed by strong <strong>UI/UX design</strong> knowledge, I enjoy solving complex engineering challenges to deliver optimal user experiences while continuously integrating emerging technologies, AI models, and industry best practices.
  </span>
</p>

<hr style="border-color: rgba(148, 163, 184, 0.18); margin: 1.75rem 0;">

<!-- PROFESSIONAL EXPERIENCE -->
<h2 class="cv-section-heading">
  <i class="bi bi-briefcase-fill"></i>
  <span class="lang-vi">Kinh nghiệm Làm việc</span>
  <span class="lang-en">Professional Experience</span>
</h2>

<!-- JOB 1: AI POWER -->
<div id="exp-ai-power" class="exp-card">
  <div class="exp-header">
    <div>
      <span class="exp-company">AI Power (HCM)</span> — <span class="exp-role">Software Engineer</span>
    </div>
    <span class="exp-period">
      <i class="bi bi-calendar3"></i> 03/2026 – 08/2026
    </span>
  </div>

  <div class="exp-project-title">
    <i class="bi bi-folder2-open text-info me-1"></i>
    <span class="lang-vi">Dự án: AP-Enterprise Management Suite (ERP/CRM) · Quy mô: 4 thành viên</span>
    <span class="lang-en">Project: AP-Enterprise Management Suite (ERP/CRM) · Team size: 4 members</span>
  </div>

  <p class="exp-desc">
    <span class="lang-vi">
      Nền tảng hoạch định nguồn lực doanh nghiệp (ERP) và quản trị khách hàng (CRM) toàn diện nhằm số hóa vận hành, tích hợp cổng thanh toán bảo mật và đóng vai trò hạ tầng backend lõi cho hệ sinh thái các module AI của công ty.
    </span>
    <span class="lang-en">
      A comprehensive enterprise resource planning (ERP) and CRM platform designed to digitize business operations, featuring secure payment integrations and serving as the core backend infrastructure for the company's AI module ecosystem.
    </span>
  </p>

  <div class="exp-tech-stack">
    <span class="exp-tech-pill">Python</span>
    <span class="exp-tech-pill">Django</span>
    <span class="exp-tech-pill">ReactJS</span>
    <span class="exp-tech-pill">TypeScript</span>
    <span class="exp-tech-pill">PostgreSQL</span>
    <span class="exp-tech-pill">MySQL</span>
    <span class="exp-tech-pill">RESTful APIs</span>
    <span class="exp-tech-pill">Git</span>
  </div>

  <ul class="cv-list">
    <li>
      <span class="lang-vi">Thiết kế và xây dựng kiến trúc End-to-End cho hệ thống quản trị doanh nghiệp, kết nối liền mạch backend <strong>Django REST</strong> với giao diện <strong>ReactJS</strong> để tự động hóa các quy trình nghiệp vụ phức tạp.</span>
      <span class="lang-en">Engineered the end-to-end architecture for the enterprise management system, seamlessly integrating a robust <strong>Django REST</strong> backend with a responsive <strong>ReactJS</strong> front-end to automate complex client workflows.</span>
    </li>
    <li>
      <span class="lang-vi">Phát triển các bảng điều khiển (dashboard) trực quan hóa dữ liệu lớn bằng ReactJS, tối ưu quản lý trạng thái để hiển thị mượt mà <strong>10.000+ bản ghi</strong> mà không gây nghẽn giao diện (UI blocking).</span>
      <span class="lang-en">Developed dynamic, data-intensive administrative dashboards using ReactJS to visualize operational metrics, utilizing efficient state management to render <strong>10,000+ records</strong> without UI blocking.</span>
    </li>
    <li>
      <span class="lang-vi">Thiết kế và cung cấp các RESTful APIs có khả năng mở rộng cao để tiếp nhận, xử lý luồng dữ liệu từ các module AI nội bộ (phân tích tự động, camera thông minh), kết nối trực tiếp lõi AI với giao diện người dùng cuối.</span>
      <span class="lang-en">Designed and exposed scalable RESTful APIs to ingest and process data streams from internal AI modules (automated analytics, smart cameras), bridging AI engines with the end-user interface.</span>
    </li>
    <li>
      <span class="lang-vi">Triển khai cơ chế phân quyền chi tiết theo vai trò (<strong>RBAC</strong>) trên backend Django, đảm bảo cô lập dữ liệu nghiêm ngặt và tuân thủ quy tắc phân quyền qua nhiều cấp tổ chức.</span>
      <span class="lang-en">Implemented a granular Role-Based Access Control (<strong>RBAC</strong>) mechanism on the Django backend, enforcing strict data isolation and permission rules across multiple organizational tiers.</span>
    </li>
    <li>
      <span class="lang-vi">Tích hợp cổng thanh toán bên thứ ba và giao thức đồng bộ dữ liệu POS, đảm bảo tuân thủ nghiêm ngặt tính toàn vẹn giao dịch chuẩn <strong>ACID</strong>.</span>
      <span class="lang-en">Integrated secure third-party payment gateways and POS data synchronization protocols, ensuring strict <strong>ACID</strong> compliance for financial transactions.</span>
    </li>
    <li>
      <span class="lang-vi">Xử lý triệt để nút thắt cổ chai <strong>N+1 query</strong> trên Django ORM kết hợp phân trang động phía Frontend, giảm thời gian tải dashboard chính từ <strong>4 giây xuống dưới 1.5 giây</strong>.</span>
      <span class="lang-en">Resolved <strong>N+1 query</strong> bottlenecks in the Django ORM and implemented front-end dynamic pagination, reducing the main dashboard's data load time from <strong>4 seconds to under 1.5 seconds</strong>.</span>
    </li>
  </ul>
</div>

<!-- JOB 2: HI-TECH SOLUTION -->
<div id="exp-hitech" class="exp-card">
  <div class="exp-header">
    <div>
      <span class="exp-company">HI-TECH SOLUTION (HCM)</span> — <span class="exp-role">Backend Engineer</span>
    </div>
    <span class="exp-period">
      <i class="bi bi-calendar3"></i> 06/2025 – 03/2026
    </span>
  </div>

  <div class="exp-project-title">
    <i class="bi bi-folder2-open text-info me-1"></i>
    <span class="lang-vi">Dự án: HI-Nexus IoT Core · Quy mô: 5 thành viên</span>
    <span class="lang-en">Project: HI-Nexus IoT Core · Team size: 5 members</span>
  </div>

  <p class="exp-desc">
    <span class="lang-vi">
      Hạ tầng backend IoT có khả năng mở rộng cao được thiết kế để thay thế hệ thống monolithic cũ, đáp ứng xử lý đồng thời dữ liệu đo lường (telemetry) từ hàng nghìn thiết bị thông minh mà không gây nghẽn cơ sở dữ liệu.
    </span>
    <span class="lang-en">
      Scalable IoT backend infrastructure designed to replace the client's legacy monolithic system, capable of processing concurrent telemetry data from thousands of smart devices without database bottlenecking.
    </span>
  </p>

  <div class="exp-tech-stack">
    <span class="exp-tech-pill">Python</span>
    <span class="exp-tech-pill">FastAPI</span>
    <span class="exp-tech-pill">PostgreSQL</span>
    <span class="exp-tech-pill">Redis</span>
    <span class="exp-tech-pill">MQTT / WebSockets</span>
    <span class="exp-tech-pill">Docker</span>
    <span class="exp-tech-pill">Git</span>
  </div>

  <ul class="cv-list">
    <li>
      <span class="lang-vi">Chuyển đổi kiến trúc REST đồng bộ cũ sang backend bất đồng bộ <strong>FastAPI</strong>, giải quyết triệt để lỗi timeout kết nối và xử lý thành công <strong>500+ yêu cầu thiết bị đồng thời</strong>.</span>
      <span class="lang-en">Migrated the legacy synchronous REST architecture to an asynchronous <strong>FastAPI</strong> backend, resolving connection timeout issues and successfully handling <strong>500+ concurrent device requests</strong>.</span>
    </li>
    <li>
      <span class="lang-vi">Thiết kế lại lược đồ cơ sở dữ liệu PostgreSQL áp dụng kỹ thuật phân vùng bảng (<strong>Table Partitioning</strong>) và ghi theo lô (<strong>Batch Inserts</strong>), loại bỏ hoàn toàn hiện tượng khóa bảng (DB locking) khi nạp dữ liệu chuỗi thời gian tần suất cao.</span>
      <span class="lang-en">Redesigned PostgreSQL database schemas utilizing <strong>table partitioning</strong> and <strong>batch inserts</strong>, eliminating database locking issues during high-frequency time-series telemetry data ingestion.</span>
    </li>
    <li>
      <span class="lang-vi">Triển khai cơ chế truyền tin <strong>MQTT với các mức QoS</strong> đảm bảo không thất thoát dữ liệu (zero data loss) đối với các gói tin quan trọng trong điều kiện mạng không ổn định.</span>
      <span class="lang-en">Implemented <strong>QoS-level MQTT</strong> message brokering to guarantee zero data loss for critical device telemetry during unstable network conditions.</span>
    </li>
    <li>
      <span class="lang-vi">Chuyển tải các truy vấn trạng thái thiết bị lặp lại từ PostgreSQL sang bộ nhớ đệm <strong>Redis Cache</strong>, giảm đáng kể tải đọc cơ sở dữ liệu và ngăn ngừa nghẽn truy vấn vào giờ cao điểm.</span>
      <span class="lang-en">Offloaded repetitive device state queries from PostgreSQL to <strong>Redis cache</strong>, significantly reducing database read load and preventing query bottlenecking during peak traffic.</span>
    </li>
    <li>
      <span class="lang-vi">Chuẩn hóa môi trường phát triển bằng <strong>Docker Compose</strong>, giải quyết xung đột môi trường giữa 5 thành viên trong nhóm và đảm bảo tính đồng nhất giữa Local, Staging và Production.</span>
      <span class="lang-en">Standardized the development environment using <strong>Docker Compose</strong>, resolving environment conflicts across the 5-member team and ensuring strict parity between local, staging, and production.</span>
    </li>
    <li>
      <span class="lang-vi">Áp dụng kiến trúc <strong>Clean Architecture</strong> và cơ chế xử lý ngoại lệ chặt chẽ, giảm tỷ lệ sập API và tối thiểu hóa thời gian gián đoạn hệ thống khi thiết bị ngắt kết nối đột ngột.</span>
      <span class="lang-en">Enforced <strong>clean architecture</strong> and robust error handling, reducing API crash rates and minimizing system downtime during unhandled device disconnects.</span>
    </li>
  </ul>
</div>

<hr style="border-color: rgba(148, 163, 184, 0.18); margin: 1.75rem 0;">

<!-- TECHNICAL SKILLS -->
<h2 class="cv-section-heading">
  <i class="bi bi-cpu-fill"></i>
  <span class="lang-vi">Kỹ năng Chuyên môn</span>
  <span class="lang-en">Technical Skills</span>
</h2>

<div class="row g-3 mb-4">
  <div class="col-md-6">
    <div class="skill-box">
      <div class="skill-box-title">
        <i class="bi bi-code-square"></i>
        <span class="lang-vi">Ngôn ngữ Lập trình</span>
        <span class="lang-en">Programming Languages</span>
      </div>
      <p class="mb-0" style="color:#cbd5e1; font-size:0.93rem; line-height:1.6;">
        Python, C++, C#, JavaScript &amp; TypeScript
      </p>
    </div>
  </div>

  <div class="col-md-6">
    <div class="skill-box">
      <div class="skill-box-title">
        <i class="bi bi-database-fill-gear"></i>
        <span class="lang-vi">Cơ sở dữ liệu &amp; Caching</span>
        <span class="lang-en">Databases &amp; Cache</span>
      </div>
      <p class="mb-0" style="color:#cbd5e1; font-size:0.93rem; line-height:1.6;">
        PostgreSQL, MS SQL Server, MySQL, Redis
      </p>
    </div>
  </div>

  <div class="col-md-6">
    <div class="skill-box">
      <div class="skill-box-title">
        <i class="bi bi-layers-fill"></i>
        <span class="lang-vi">Frameworks &amp; Nền tảng</span>
        <span class="lang-en">Frameworks &amp; Platforms</span>
      </div>
      <ul class="cv-list">
        <li><strong>Backend:</strong> Django, FastAPI, RESTful APIs, WebAPI</li>
        <li><strong>Frontend:</strong> ReactJS, AngularJS, jQuery, Bootstrap, BulmaCSS</li>
      </ul>
    </div>
  </div>

  <div class="col-md-6">
    <div class="skill-box">
      <div class="skill-box-title">
        <i class="bi bi-award-fill"></i>
        <span class="lang-vi">Kiến trúc, Ngoại ngữ &amp; Công cụ</span>
        <span class="lang-en">Architecture, Languages &amp; Tools</span>
      </div>
      <ul class="cv-list">
        <li>
          <span class="lang-vi"><strong>Ngoại ngữ:</strong> TOEIC 800 (Đọc hiểu tài liệu kỹ thuật thành thạo)</span>
          <span class="lang-en"><strong>Foreign Language:</strong> TOEIC 800 (Strong technical reading comprehension)</span>
        </li>
        <li>
          <span class="lang-vi"><strong>Kỹ thuật &amp; AI:</strong> OOP, SOLID, Docker, MQTT/WebSockets, ứng dụng AI-assisted tools tối ưu quy trình phát triển</span>
          <span class="lang-en"><strong>Engineering &amp; AI:</strong> OOP, SOLID, Docker, MQTT/WebSockets, integrating AI-assisted tools into development workflows</span>
        </li>
      </ul>
    </div>
  </div>
</div>

<hr style="border-color: rgba(148, 163, 184, 0.18); margin: 1.75rem 0;">

<!-- EDUCATION -->
<h2 class="cv-section-heading">
  <i class="bi bi-mortarboard-fill"></i>
  <span class="lang-vi">Học vấn</span>
  <span class="lang-en">Education</span>
</h2>

<div class="edu-box mb-4">
  <div class="d-flex flex-wrap align-items-baseline justify-content-between gap-2 mb-1">
    <h3 style="font-size: 1.12rem; font-weight: 700; color: #f1f5f9; margin: 0;">
      <span class="lang-vi">Học viện Kỹ thuật Mật mã (Academy of Cryptography Techniques)</span>
      <span class="lang-en">Academy of Cryptography Techniques</span>
    </h3>
    <span class="exp-period">
      <i class="bi bi-calendar-check"></i> 2022 – 2026
    </span>
  </div>
  <p class="mb-0" style="color: #22d3ee; font-weight: 500; font-size: 0.96rem;">
    <span class="lang-vi">Kỹ sư Công nghệ Thông tin · Chuyên ngành Công nghệ Phần mềm</span>
    <span class="lang-en">Bachelor of Engineering in Information Technology</span>
  </p>
</div>

<!-- BOTTOM DOWNLOAD CTA -->
<div class="mt-4 text-center">
  <a
    class="btn btn-outline-light d-inline-flex align-items-center gap-2"
    href="{{ site.baseurl }}/Nguyen_Dinh_Chien_CV.pdf"
    download
  >
    <i class="bi bi-file-earmark-pdf-fill text-info"></i>
    <span class="lang-vi">Tải bản CV PDF đầy đủ</span>
    <span class="lang-en">Download Full PDF Resume</span>
  </a>
</div>
