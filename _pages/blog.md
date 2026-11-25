---
layout: default
title: "Blog"
title_vi: "Bài viết"
---

<style>
  .blog-main-title {
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: -0.5px;
    background: linear-gradient(135deg, #38bdf8, #22d3ee, #4ade80);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .blog-section-title {
    font-weight: 600;
    font-size: 1.35rem;
    color: #38bdf8;
    margin-bottom: 0.85rem;
    display: flex;
    align-items: center;
    gap: 0.55rem;
  }
  .blog-card-wrap {
    background: rgba(2, 6, 23, 0.55);
    border: 1px solid rgba(148, 163, 184, 0.16);
    border-radius: 1.15rem;
    padding: 1.35rem;
    margin-bottom: 1.5rem;
    transition: border-color 0.2s ease, transform 0.2s ease;
  }
  .blog-card-wrap:hover {
    border-color: rgba(56, 189, 248, 0.45);
    transform: translateY(-2px);
  }
  .blog-meta-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.8rem;
    color: #94a3b8;
    margin-bottom: 0.65rem;
  }
  .blog-tag-pill {
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.2rem 0.65rem;
    border-radius: 999px;
    background: rgba(56, 189, 248, 0.1);
    border: 1px solid rgba(56, 189, 248, 0.28);
    color: #7dd3fc;
  }
  .blog-list {
    color: #cbd5e1;
    padding-left: 1.2rem;
    line-height: 1.7;
  }
  .blog-list li {
    margin-bottom: 0.35rem;
  }
  @media (max-width: 640px) {
    .blog-main-title { font-size: 1.7rem; }
  }
</style>

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

<p class="text-muted-soft mb-4" style="line-height: 1.7;">
  <span class="lang-vi">
    Không gian lưu trữ các phân tích thực chiến về <strong>kiến trúc Backend (Python, Django, FastAPI)</strong>, tối ưu hiệu năng cơ sở dữ liệu, quy trình <strong>Docker/DevOps</strong> và tư duy xây dựng hệ thống phần mềm bền vững từ các dự án thực tế.
  </span>
  <span class="lang-en">
    A curated space documenting hands-on insights into <strong>Backend Architecture (Python, Django, FastAPI)</strong>, database performance tuning, <strong>Docker/DevOps</strong> workflows, and scalable software engineering from real-world production systems.
  </span>
</p>

<hr style="border-color: rgba(148, 163, 184, 0.18); margin-bottom: 1.5rem;">

<!-- BÀI 1 -->
<article class="blog-card-wrap">
  <div class="blog-meta-bar">
    <span><i class="bi bi-layers text-info me-1"></i> Architecture &amp; Clean Code</span>
    <span class="blog-tag-pill">SOLID</span>
    <span class="blog-tag-pill">System Design</span>
  </div>

  <h2 class="blog-section-title">
    <i class="bi bi-1-circle-fill"></i>
    <span class="lang-vi">Tư duy thiết kế hệ thống &amp; Viết mã nguồn bền vững</span>
    <span class="lang-en">System Design Mindset &amp; Maintainable Code Architecture</span>
  </h2>

  <div class="row g-3 align-items-center">
    <div class="col-md-7">
      <p class="mb-2" style="color:#cbd5e1; line-height:1.65;">
        <span class="lang-vi">
          Khi trực tiếp phát triển các hệ thống quy mô lớn như nền tảng <strong>ERP/CRM doanh nghiệp</strong> hay hạ tầng <strong>IoT thời gian thực</strong>, viết code chỉ để "chạy được" là chưa đủ — hệ thống bắt buộc phải đảm bảo <strong>tính rõ ràng, khả năng mở rộng (scalability) và dễ bảo trì</strong>:
        </span>
        <span class="lang-en">
          When building production platforms like an <strong>Enterprise ERP/CRM suite</strong> or a <strong>real-time IoT core</strong>, writing code that merely "works" is never enough—architecture must prioritize <strong>clarity, scalability, and long-term maintainability</strong>:
        </span>
      </p>
      <ul class="blog-list mb-2">
        <li>
          <span class="lang-vi">Phân tích luồng dữ liệu và nút thắt cổ chai trước khi triển khai mã nguồn</span>
          <span class="lang-en">Analyzing data flows and concurrency bottlenecks prior to implementation</span>
        </li>
        <li>
          <span class="lang-vi">Áp dụng nguyên lý <strong>OOP, SOLID &amp; Clean Architecture</strong> để tách biệt nghiệp vụ và hạ tầng</span>
          <span class="lang-en">Applying <strong>OOP, SOLID &amp; Clean Architecture</strong> to decouple business logic from infrastructure</span>
        </li>
        <li>
          <span class="lang-vi">Chuẩn hóa môi trường làm việc với <strong>Docker Compose</strong> để đồng bộ từ Local đến Production</span>
          <span class="lang-en">Standardizing environments with <strong>Docker Compose</strong> for strict parity from Local to Production</span>
        </li>
      </ul>
      <p class="text-muted-soft mb-0" style="font-size:0.9rem;">
        <span class="lang-vi">
          Ghi chép này tổng hợp cách mình tổ chức cấu trúc dự án, thiết kế RESTful APIs chuẩn mực và làm việc hiệu quả trong nhóm kỹ thuật.
        </span>
        <span class="lang-en">
          This note outlines how I structure repositories, design clean RESTful APIs, and collaborate effectively across engineering teams.
        </span>
      </p>
    </div>
    <div class="col-md-5">
      <img
        src="{{ site.baseurl }}/assets/images/blog-1.jpg"
        alt="System Design and Clean Architecture"
        class="img-fluid rounded-4 shadow-sm"
      />
    </div>
  </div>
</article>

<!-- BÀI 2 -->
<article class="blog-card-wrap">
  <div class="blog-meta-bar">
    <span><i class="bi bi-bug text-info me-1"></i> Post-Mortem &amp; Performance Tuning</span>
    <span class="blog-tag-pill">Django ORM</span>
    <span class="blog-tag-pill">PostgreSQL</span>
    <span class="blog-tag-pill">Redis</span>
  </div>

  <h2 class="blog-section-title">
    <i class="bi bi-2-circle-fill"></i>
    <span class="lang-vi">Phân tích Case kỹ thuật: Tối ưu hiệu năng &amp; Xử lý sự cố thực tế</span>
    <span class="lang-en">Engineering Post-Mortem: Performance Bottlenecks &amp; Root Cause Debugging</span>
  </h2>

  <div class="row g-3 align-items-center">
    <div class="col-md-5">
      <img
        src="{{ site.baseurl }}/assets/images/blog-2.jpg"
        alt="Performance Tuning and Root Cause Debugging"
        class="img-fluid rounded-4 shadow-sm"
      />
    </div>
    <div class="col-md-7">
      <p class="mb-2" style="color:#cbd5e1; line-height:1.65;">
        <span class="lang-vi">
          Những bài học đắt giá nhất luôn đến từ việc xử lý sự cố chịu tải thực tế — từ lỗi <strong>N+1 query trên Django ORM</strong> làm chậm dashboard, hiện tượng khóa bảng khi ghi dữ liệu IoT tần suất cao, cho đến lỗi timeout kết nối đồng bộ.
        </span>
        <span class="lang-en">
          The most valuable engineering lessons come from resolving real production bottlenecks—from <strong>Django ORM N+1 queries</strong> slowing down dashboards, to table locking during high-frequency IoT ingestion, and synchronous connection timeouts.
        </span>
      </p>
      <p class="mb-2" style="color:#cbd5e1;">
        <span class="lang-vi">Mỗi case kỹ thuật đều được mình hệ thống hóa theo quy trình 5 bước chuẩn:</span>
        <span class="lang-en">Each technical post-mortem follows a structured 5-step debugging framework:</span>
      </p>
      <ul class="blog-list mb-0">
        <li>
          <span class="lang-vi"><strong>Bối cảnh &amp; Chỉ số đo lường:</strong> Xác định triệu chứng (ví dụ: thời gian tải trang 4s, nghẽn 500+ kết nối)</span>
          <span class="lang-en"><strong>Context &amp; Telemetry:</strong> Quantifying symptoms (e.g., 4s dashboard latency, 500+ concurrent stream bottlenecks)</span>
        </li>
        <li>
          <span class="lang-vi"><strong>Truy vết nguyên nhân gốc (Root Cause):</strong> Profiling truy vấn SQL, kiểm tra lock DB và luồng bất đồng bộ</span>
          <span class="lang-en"><strong>Root Cause Analysis:</strong> SQL query profiling, inspecting DB locks, and tracing event-loop blocking</span>
        </li>
        <li>
          <span class="lang-vi"><strong>Kiểm chứng giả thuyết:</strong> Tái hiện tải trên môi trường cô lập và đo đạc từng phương án</span>
          <span class="lang-en"><strong>Hypothesis Verification:</strong> Reproducing load in isolated environments and benchmarking fixes</span>
        </li>
        <li>
          <span class="lang-vi"><strong>Giải pháp tối ưu:</strong> Áp dụng Batch Inserts, Table Partitioning, Redis Cache hoặc Async FastAPI</span>
          <span class="lang-en"><strong>Production Fix:</strong> Implementing Batch Inserts, Table Partitioning, Redis Caching, or Async FastAPI</span>
        </li>
        <li>
          <span class="lang-vi"><strong>Checklist phòng ngừa:</strong> Chuẩn hóa quy tắc review code và giám sát cho các dự án kế tiếp</span>
          <span class="lang-en"><strong>Preventive Checklist:</strong> Establishing code review rules and monitoring alerts for future releases</span>
        </li>
      </ul>
    </div>
  </div>
</article>

<!-- BÀI 3 -->
<article class="blog-card-wrap mb-2">
  <div class="blog-meta-bar">
    <span><i class="bi bi-journal-bookmark-fill text-info me-1"></i> Continuous Learning</span>
    <span class="blog-tag-pill">Engineering Books</span>
    <span class="blog-tag-pill">AI Workflows</span>
  </div>

  <h2 class="blog-section-title">
    <i class="bi bi-3-circle-fill"></i>
    <span class="lang-vi">Tổng hợp kiến thức từ sách kỹ thuật &amp; Công nghệ mới</span>
    <span class="lang-en">Distilling Insights from Engineering Books &amp; Emerging Tech</span>
  </h2>

  <p class="mb-2" style="color:#cbd5e1; line-height:1.65;">
    <span class="lang-vi">
      Bên cạnh việc triển khai dự án, mình duy trì thói quen đọc tài liệu chuyên sâu về kiến trúc hệ thống, cơ sở dữ liệu và ứng dụng mô hình AI vào quy trình phát triển phần mềm. Để biến kiến thức thành năng lực thực tế, mỗi ghi chú đều gói gọn trong 3 trọng tâm:
    </span>
    <span class="lang-en">
      Alongside building production software, I continuously study system architecture, database internals, and AI-assisted development workflows. To turn reading into actionable engineering skill, every note distills three core takeaways:
    </span>
  </p>

  <ul class="blog-list mb-0">
    <li>
      <span class="lang-vi"><strong>Tư tưởng cốt lõi:</strong> Mô hình hóa bài toán mà cuốn sách hoặc tài liệu kỹ thuật giải quyết</span>
      <span class="lang-en"><strong>Core Mental Model:</strong> The fundamental architectural problem the book or whitepaper addresses</span>
    </li>
    <li>
      <span class="lang-vi"><strong>3–5 nguyên lý đắt giá:</strong> Các trade-off kỹ thuật quan trọng cần cân nhắc khi thiết kế hệ thống</span>
      <span class="lang-en"><strong>3–5 Key Engineering Principles:</strong> Critical architectural trade-offs to weigh in real-world design</span>
    </li>
    <li>
      <span class="lang-vi"><strong>Hành động áp dụng ngay:</strong> Một cải tiến cụ thể đưa thẳng vào codebase hoặc quy trình làm việc hằng ngày</span>
      <span class="lang-en"><strong>Immediate Action Item:</strong> A concrete improvement applied directly to my active codebase or daily workflow</span>
    </li>
  </ul>
</article>

<!-- TỰ ĐỘNG HIỂN THỊ BÀI VIẾT MỚI TỪ _POSTS NẾU CÓ -->

{% if site.posts.size > 0 %}

  <hr style="border-color: rgba(148, 163, 184, 0.18); margin: 1.75rem 0 1.25rem 0;">
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
      <h3 style="font-size: 1.15rem; font-weight: 600;">
        <a href="{{ site.baseurl }}{{ post.url }}" style="color: #f1f5f9; text-decoration: none;">
          <span class="lang-vi">{{ post.title_vi | default: post.title }}</span>
          <span class="lang-en">{{ post.title_en | default: post.title }}</span>
        </a>
      </h3>
      <p class="text-muted-soft mb-2" style="font-size: 0.92rem;">
        <span class="lang-vi">{{ post.excerpt_vi | default: post.excerpt | strip_html | truncatewords: 32 }}</span>
        <span class="lang-en">{{ post.excerpt_en | default: post.excerpt | strip_html | truncatewords: 32 }}</span>
      </p>
      <a href="{{ site.baseurl }}{{ post.url }}" style="color: #38bdf8; font-size: 0.86rem; font-weight: 600; text-decoration: none;">
        <span class="lang-vi">Đọc chi tiết</span>
        <span class="lang-en">Read full post</span>
        <i class="bi bi-arrow-right ms-1"></i>
      </a>
    </div>
  {% endfor %}
{% endif %}
