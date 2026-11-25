---
layout: default
title: "Home"
title_vi: "Trang chủ"
custom_css: "home"
---

{% assign home_data = site.data.home %}

<!-- HERO SECTION -->
<div class="hero mb-4">
  <span class="badge-soft mb-3">
    <i class="bi bi-terminal-fill"></i>
    <span class="lang-vi">Sẵn sàng cho cơ hội Full Stack / Backend Engineering</span>
    <span class="lang-en">Open to Full Stack / Backend Engineering Roles</span>
  </span>

  <h1 class="hero-title mb-1">
    <span class="lang-vi">Nguyễn Đình Chiến</span>
    <span class="lang-en">Nguyen Dinh Chien (Chris Nguyen)</span>
  </h1>

  <p class="hero-sub mb-3">
    <span class="lang-vi">
      <i class="bi bi-code-slash text-info me-1"></i> Full Stack Software Engineer · Kỹ sư Công nghệ Thông tin
    </span>
    <span class="lang-en">
      <i class="bi bi-code-slash text-info me-1"></i> Full Stack Software Engineer · B.Eng. in Information Technology
    </span>
  </p>

  <p class="home-lead mb-3">
    <span class="lang-vi">
      Kỹ sư phần mềm với <strong>2 năm kinh nghiệm phát triển Web</strong> và <strong>1 năm xây dựng ứng dụng phần mềm</strong> thực tế.
      Mình chuyên thiết kế các hệ thống Backend chịu tải cao với <strong>Python (Django, FastAPI)</strong>, kết hợp giao diện <strong>ReactJS &amp; TypeScript</strong> mượt mà, tối ưu hiệu năng truy vấn cơ sở dữ liệu và tích hợp quy trình AI hiện đại vào sản phẩm.
    </span>
    <span class="lang-en">
      Full Stack Software Engineer with <strong>2 years of experience in Web Development</strong> and <strong>1 year in Software Application Engineering</strong>.
      Specialized in architecting scalable backend services with <strong>Python (Django, FastAPI)</strong>, crafting responsive <strong>ReactJS &amp; TypeScript</strong> interfaces, optimizing database throughput, and integrating AI-driven workflows into production systems.
    </span>
  </p>

  <!-- Highlight Metrics (Render từ _data/home.yml) -->
  <div class="metric-strip">
    {% for metric in home_data.metrics %}
      <div class="metric-box">
        <div class="metric-value">{{ metric.value }}</div>
        <div class="metric-label">
          <span class="lang-vi">{{ metric.label_vi }}</span>
          <span class="lang-en">{{ metric.label_en }}</span>
        </div>
      </div>
    {% endfor %}
  </div>

  <!-- CTA Buttons -->
  <div class="d-flex flex-wrap gap-2 mt-3">
    <a class="btn btn-primary d-inline-flex align-items-center gap-2" href="{{ site.baseurl }}/cv">
      <i class="bi bi-file-earmark-person"></i>
      <span class="lang-vi">Xem CV chi tiết</span>
      <span class="lang-en">View Resume / CV</span>
    </a>
    <a class="btn btn-outline-light d-inline-flex align-items-center gap-2" href="{{ site.baseurl }}/projects">
      <i class="bi bi-kanban"></i>
      <span class="lang-vi">Dự án thực chiến</span>
      <span class="lang-en">Explore Projects</span>
    </a>
    <a class="btn btn-outline-light d-inline-flex align-items-center gap-2" href="{{ site.baseurl }}/books">
      <i class="bi bi-journal-bookmark"></i>
      <span class="lang-vi">Sách &amp; Tư duy</span>
      <span class="lang-en">Reading List</span>
    </a>
  </div>
</div>

<img
  src="{{ site.baseurl }}/assets/images/home-1.jpg"
  alt="Nguyễn Đình Chiến - Full Stack Software Engineer"
  class="img-fluid rounded-4 shadow-sm mb-4"
/>

<hr class="home-divider">

<!-- ABOUT SECTION -->
<h2 class="section-heading">
  <i class="bi bi-person-badge"></i>
  <span class="lang-vi">Giá trị cốt lõi &amp; Thế mạnh</span>
  <span class="lang-en">Core Value &amp; Engineering Mindset</span>
</h2>

<p class="home-lead">
  <span class="lang-vi">
    Được đào tạo bài bản về Kỹ thuật phần mềm và An toàn thông tin tại <strong>Học viện Kỹ thuật Mật mã</strong>, cùng kinh nghiệm trực tiếp triển khai hệ thống <strong>ERP/CRM doanh nghiệp</strong> và hạ tầng <strong>IoT thời gian thực</strong>, mình tiếp cận bài toán từ góc nhìn kiến trúc tổng thể (End-to-End) đến trải nghiệm người dùng cuối:
  </span>
  <span class="lang-en">
    Grounded in Software Engineering and Information Security at the <strong>Academy of Cryptography Techniques</strong>, with hands-on production experience in <strong>Enterprise ERP/CRM suites</strong> and <strong>real-time IoT backends</strong>, I approach engineering from end-to-end system architecture down to intuitive user experience:
  </span>
</p>

<ul class="custom-list">
  <li>
    <span class="lang-vi"><strong>Kiến trúc Backend chịu tải &amp; Bảo mật:</strong> Chuyển đổi hệ thống đồng bộ sang bất đồng bộ (Async FastAPI), phân quyền chi tiết RBAC, đảm bảo toàn vẹn giao dịch chuẩn ACID và chống nghẽn cổ chai cơ sở dữ liệu.</span>
    <span class="lang-en"><strong>Scalable &amp; Secure Backend Architecture:</strong> Migrating legacy synchronous services to async FastAPI, implementing granular RBAC, ensuring ACID-compliant transactions, and eliminating database bottlenecks.</span>
  </li>
  <li>
    <span class="lang-vi"><strong>Tối ưu hiệu năng từ Database đến UI:</strong> Xử lý triệt để lỗi N+1 query trên ORM, thiết kế Table Partitioning trên PostgreSQL, kết hợp Redis caching và phân trang động trên ReactJS cho tập dữ liệu lớn.</span>
    <span class="lang-en"><strong>Full-Stack Performance Optimization:</strong> Resolving ORM N+1 query issues, implementing PostgreSQL table partitioning, leveraging Redis caching, and building non-blocking ReactJS data grids.</span>
  </li>
  <li>
    <span class="lang-vi"><strong>Tư duy sản phẩm &amp; Tích hợp AI:</strong> Am hiểu thiết kế UI/UX, chủ động ứng dụng các mô hình AI và công cụ lập trình tự động để rút ngắn chu kỳ phát triển mà vẫn giữ chuẩn Clean Architecture &amp; SOLID.</span>
    <span class="lang-en"><strong>Product Mindset &amp; AI Integration:</strong> Strong grasp of UI/UX design principles, leveraging AI models and AI-assisted workflows to accelerate delivery while strictly upholding Clean Architecture &amp; SOLID standards.</span>
  </li>
</ul>

<img
  src="{{ site.baseurl }}/assets/images/home-2.jpg"
  alt="System Architecture and Presentation"
  class="img-fluid rounded-4 shadow-sm my-3"
/>

<hr class="home-divider">

<!-- TECHNICAL SKILLS (Render từ _data/home.yml) -->
<h2 class="section-heading">
  <i class="bi bi-cpu"></i>
  <span class="lang-vi">Năng lực công nghệ (Tech Stack)</span>
  <span class="lang-en">Technical Expertise</span>
</h2>

{% for group in home_data.tech_groups %}

  <p class="sub-heading-cyan">
    <i class="bi {{ group.icon }}"></i>
    <span class="lang-vi">{{ group.title_vi }}</span>
    <span class="lang-en">{{ group.title_en }}</span>
  </p>
  <div class="tech-pill-group">
    {% for tech in group.items %}
      <span class="tech-pill">{{ tech }}</span>
    {% endfor %}
  </div>
{% endfor %}

<img
  src="{{ site.baseurl }}/assets/images/home-3.jpg"
  alt="Engineering Teamwork"
  class="img-fluid rounded-4 shadow-sm my-3"
/>

<hr class="home-divider">

<!-- ROADMAP & GOALS -->
<h2 class="section-heading">
  <i class="bi bi-compass"></i>
  <span class="lang-vi">Định hướng phát triển</span>
  <span class="lang-en">Career Direction &amp; Focus</span>
</h2>

<ol class="custom-list custom-list--relaxed">
  <li>
    <span class="lang-vi">
      <strong>Kiến tạo sản phẩm phần mềm quy mô lớn:</strong> Đảm nhận vai trò Full Stack / Backend Engineer trong các hệ thống có lượng truy cập cao, giải quyết trực tiếp bài toán hiệu năng, bảo mật và tích hợp dữ liệu thông minh.
    </span>
    <span class="lang-en">
      <strong>Building High-Impact Software Products:</strong> Contributing as a Full Stack / Backend Engineer on high-traffic platforms, tackling complex performance, security, and intelligent data integration challenges.
    </span>
  </li>
  <li>
    <span class="lang-vi">
      <strong>Chuyên sâu hóa kiến trúc phân tán &amp; Cloud-Native:</strong> Mở rộng năng lực thiết kế microservices, hàng đợi thông điệp (message brokers), container orchestration và quy trình vận hành tự động hóa.
    </span>
    <span class="lang-en">
      <strong>Mastering Distributed &amp; Cloud-Native Systems:</strong> Deepening expertise in microservices design, message brokering, container orchestration, and automated deployment pipelines.
    </span>
  </li>
  <li>
    <span class="lang-vi">
      <strong>Kết nối kỹ thuật với giá trị nghiệp vụ:</strong> Tư duy phân tích yêu cầu bài bản (Business Analysis) để chuyển hóa bài toán vận hành của doanh nghiệp thành giải pháp phần mềm tinh gọn, tối ưu chi phí.
    </span>
    <span class="lang-en">
      <strong>Bridging Engineering with Business Value:</strong> Combining strong analytical thinking with technical execution to translate complex operational needs into lean, cost-effective software solutions.
    </span>
  </li>
</ol>

<hr class="home-divider">

<!-- SITE NAVIGATION GUIDE -->
<h2 class="section-heading">
  <i class="bi bi-grid-1x2"></i>
  <span class="lang-vi">Khám phá Portfolio</span>
  <span class="lang-en">Explore This Portfolio</span>
</h2>

<ul class="custom-list">
  <li>
    <span class="lang-vi"><strong>Dự án (Projects):</strong> Chi tiết kiến trúc, bài toán kỹ thuật và kết quả đo lường từ các dự án thực tế (AP-Enterprise Management Suite, HI-Nexus IoT Core, Logitrack...).</span>
    <span class="lang-en"><strong>Projects:</strong> Deep dives into system architecture, technical challenges, and measurable outcomes from production projects (AP-Enterprise Management Suite, HI-Nexus IoT Core, Logitrack...).</span>
  </li>
  <li>
    <span class="lang-vi"><strong>Bài viết (Blog):</strong> Ghi chú chuyên sâu về tối ưu hiệu năng Backend, kiến trúc hệ thống và kinh nghiệm lập trình thực chiến.</span>
    <span class="lang-en"><strong>Blog:</strong> Technical notes on backend performance tuning, system architecture, and hands-on engineering insights.</span>
  </li>
  <li>
    <span class="lang-vi"><strong>Sách &amp; Kỉ niệm (Books &amp; Memories):</strong> Những cuốn sách định hình tư duy kỹ thuật và dấu ấn trên hành trình phát triển nghề nghiệp.</span>
    <span class="lang-en"><strong>Books &amp; Memories:</strong> Technical books shaping my engineering mindset and milestones along my career journey.</span>
  </li>
  <li>
    <span class="lang-vi"><strong>CV:</strong> Hồ sơ năng lực đầy đủ, kinh nghiệm làm việc và thông tin liên hệ trực tiếp.</span>
    <span class="lang-en"><strong>CV:</strong> Full curriculum vitae, work history, and direct contact channels.</span>
  </li>
</ul>

<div class="home-cta-note mt-4 p-3 rounded-4">
  <p class="mb-0">
    <i class="bi bi-send-check me-2"></i>
    <span class="lang-vi">
      Cảm ơn anh/chị nhà tuyển dụng và quý đồng nghiệp đã ghé thăm. Rất hân hạnh được kết nối và trao đổi về các cơ hội hợp tác kỹ thuật!
    </span>
    <span class="lang-en">
      Thank you for visiting. I welcome the opportunity to connect and discuss how my engineering skills can contribute to your team!
    </span>
  </p>
</div>
