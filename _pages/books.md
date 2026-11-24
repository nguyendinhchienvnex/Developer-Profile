---
layout: default
title: "Books"
---

<style>
  .books-main-title {
    font-weight: 700;
    font-size: 2.1rem;
    letter-spacing: -0.4px;
    background: linear-gradient(135deg, #38bdf8, #22d3ee, #4ade80);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .books-section-heading {
    font-weight: 600;
    font-size: 1.4rem;
    color: #38bdf8;
    margin-bottom: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.55rem;
  }

  .book-grid {
    row-gap: 1.5rem;
  }

  .book-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    text-decoration: none;
    color: inherit;
    background: rgba(2, 6, 23, 0.65);
    border-radius: 1.2rem;
    border: 1px solid rgba(148, 163, 184, 0.18);
    padding: 1.15rem;
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.85);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease,
      border-color 0.2s ease,
      background 0.2s ease;
  }

  .book-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 22px 55px rgba(2, 6, 23, 0.95);
    border-color: rgba(56, 189, 248, 0.6);
    background: radial-gradient(circle at 0 0, rgba(56, 189, 248, 0.1), transparent 60%),
                rgba(15, 23, 42, 0.95);
  }

  .book-cover-wrap {
    overflow: hidden;
    border-radius: 0.9rem;
    margin-bottom: 0.85rem;
    position: relative;
  }

  .book-cover {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
    border-radius: 0.9rem;
    transition: transform 0.25s ease;
  }

  .book-card:hover .book-cover {
    transform: scale(1.03);
  }

  .book-category-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.72rem;
    font-weight: 600;
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    background: rgba(56, 189, 248, 0.12);
    border: 1px solid rgba(56, 189, 248, 0.3);
    color: #38bdf8;
    margin-bottom: 0.5rem;
  }

  .book-title {
    font-size: 1.08rem;
    font-weight: 700;
    margin-bottom: 0.2rem;
    color: #f1f5f9;
    transition: color 0.18s ease;
  }

  .book-card:hover .book-title {
    color: #22d3ee;
  }

  .book-author {
    font-size: 0.85rem;
    color: var(--text-muted, #9ca3af);
    margin-bottom: 0.55rem;
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }

  .book-note {
    font-size: 0.9rem;
    color: #cbd5e1;
    line-height: 1.6;
    margin-bottom: 0.85rem;
  }

  .book-link-hint {
    font-size: 0.84rem;
    font-weight: 600;
    color: #38bdf8;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    margin-top: auto;
    transition: gap 0.18s ease, color 0.18s ease;
  }

  .book-card:hover .book-link-hint {
    color: #22d3ee;
    gap: 0.55rem;
  }

  .reading-goal-box {
    background: rgba(2, 6, 23, 0.55);
    border: 1px solid rgba(56, 189, 248, 0.22);
    border-radius: 1.15rem;
    padding: 1.35rem 1.45rem;
  }

  @media (max-width: 640px) {
    .books-main-title { font-size: 1.75rem; }
  }
</style>

<!-- HEADER -->
<div class="mb-4">
  <span class="badge-soft mb-3">
    <i class="bi bi-book-half"></i>
    <span class="lang-vi">Tủ sách &amp; Tư duy Phát triển</span>
    <span class="lang-en">Reading List &amp; Mental Models</span>
  </span>

  <h1 class="books-main-title mb-2">
    <span class="lang-vi">Sách định hình tư duy</span>
    <span class="lang-en">Books That Shape My Thinking</span>
  </h1>

  <p class="text-muted-soft mb-0" style="font-size:1.02rem; line-height:1.7;">
    <span class="lang-vi">
      Bên cạnh tài liệu chuyên ngành về kỹ thuật phần mềm, đọc sách là cách mình mở rộng góc nhìn về <strong>tư duy chiến lược</strong>, <strong>kỷ luật vận hành</strong> và <strong>kỹ năng giao tiếp đội nhóm</strong> — những yếu tố cốt lõi để xây dựng sản phẩm công nghệ bền vững.
    </span>
    <span class="lang-en">
      Alongside software engineering documentation, reading broadens my perspective on <strong>strategic thinking</strong>, <strong>operational discipline</strong>, and <strong>team collaboration</strong>—essential foundations for building enduring technology products.
    </span>
  </p>
</div>

<hr style="border-color: rgba(148, 163, 184, 0.18); margin-bottom: 1.6rem;">

<!-- DANH SÁCH SÁCH -->
<div class="row book-grid mb-4">

  <!-- Book 1: The Alchemist -->
  <div class="col-md-4 col-sm-6">
    <a
      class="book-card"
      href="https://breakdownblogs.wordpress.com/wp-content/uploads/2018/02/nha_gia_kim__paulo_coelho.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <div class="book-cover-wrap">
          <img
            src="{{ site.baseurl }}/assets/images/nhagiakim.jpg"
            alt="Nhà giả kim - The Alchemist"
            class="book-cover"
          />
        </div>
        <span class="book-category-tag">
          <i class="bi bi-compass"></i>
          <span class="lang-vi">Tư duy &amp; Mục tiêu</span>
          <span class="lang-en">Purpose &amp; Grit</span>
        </span>
        <div class="book-title">
          <span class="lang-vi">Nhà giả kim</span>
          <span class="lang-en">The Alchemist</span>
        </div>
        <div class="book-author">
          <i class="bi bi-pen"></i> Paulo Coelho
        </div>
        <div class="book-note">
          <span class="lang-vi">
            Bài học về sự kiên định theo đuổi mục tiêu dài hạn, vượt qua vùng an toàn và khả năng thích nghi linh hoạt trước những biến số trên hành trình phát triển bản thân.
          </span>
          <span class="lang-en">
            A timeless lesson on perseverance toward long-term vision, stepping beyond comfort zones, and adapting resiliently to unexpected challenges.
          </span>
        </div>
      </div>
      <div class="book-link-hint">
        <span class="lang-vi">Đọc tài liệu sách</span>
        <span class="lang-en">Read book resource</span>
        <i class="bi bi-arrow-right"></i>
      </div>
    </a>
  </div>

  <!-- Book 2: How to Win Friends & Influence People -->
  <div class="col-md-4 col-sm-6">
    <a
      class="book-card"
      href="https://file.mentor.vn/files/lessons/file-1617004361169.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <div class="book-cover-wrap">
          <img
            src="{{ site.baseurl }}/assets/images/dacnhantam.jpg"
            alt="Đắc nhân tâm - How to Win Friends and Influence People"
            class="book-cover"
          />
        </div>
        <span class="book-category-tag">
          <i class="bi bi-people"></i>
          <span class="lang-vi">Giao tiếp &amp; Đội nhóm</span>
          <span class="lang-en">Communication &amp; Empathy</span>
        </span>
        <div class="book-title">
          <span class="lang-vi">Đắc nhân tâm</span>
          <span class="lang-en">How to Win Friends &amp; Influence People</span>
        </div>
        <div class="book-author">
          <i class="bi bi-pen"></i> Dale Carnegie
        </div>
        <div class="book-note">
          <span class="lang-vi">
            Nền tảng của nghệ thuật lắng nghe thấu cảm và giao tiếp hiệu quả — chìa khóa giúp mình phối hợp mượt mà trong các team kỹ thuật (4–5 thành viên) và thấu hiểu bài toán của khách hàng.
          </span>
          <span class="lang-en">
            Foundational principles of active listening and constructive communication—key to collaborating smoothly across engineering squads and understanding stakeholder needs.
          </span>
        </div>
      </div>
      <div class="book-link-hint">
        <span class="lang-vi">Đọc tài liệu sách</span>
        <span class="lang-en">Read book resource</span>
        <i class="bi bi-arrow-right"></i>
      </div>
    </a>
  </div>

  <!-- Book 3: Good to Great -->
  <div class="col-md-4 col-sm-6">
    <a
      class="book-card"
      href="https://mekongstartup.vn/public/upload/files/tu-tot-den-vi-dai-jim-collins.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <div class="book-cover-wrap">
          <img
            src="{{ site.baseurl }}/assets/images/vidai.jpg"
            alt="Từ tốt đến vĩ đại - Good to Great"
            class="book-cover"
          />
        </div>
        <span class="book-category-tag">
          <i class="bi bi-graph-up-arrow"></i>
          <span class="lang-vi">Chiến lược &amp; Kỷ luật</span>
          <span class="lang-en">Strategy &amp; Execution</span>
        </span>
        <div class="book-title">
          <span class="lang-vi">Từ tốt đến vĩ đại</span>
          <span class="lang-en">Good to Great</span>
        </div>
        <div class="book-author">
          <i class="bi bi-pen"></i> Jim Collins
        </div>
        <div class="book-note">
          <span class="lang-vi">
            Phân tích cách các tổ chức tạo bước nhảy vọt bền vững nhờ tư duy kỷ luật, chọn đúng người vào đúng vị trí và dùng công nghệ làm đòn bẩy tăng trưởng thay vì chạy theo trào lưu.
          </span>
          <span class="lang-en">
            Examines how organizations achieve enduring breakthroughs through disciplined execution, getting the right people on the bus, and using technology as an accelerator.
          </span>
        </div>
      </div>
      <div class="book-link-hint">
        <span class="lang-vi">Đọc tài liệu sách</span>
        <span class="lang-en">Read book resource</span>
        <i class="bi bi-arrow-right"></i>
      </div>
    </a>
  </div>

</div>

<hr style="border-color: rgba(148, 163, 184, 0.18); margin: 1.75rem 0;">

<!-- MỤC TIÊU ĐỌC SÁCH -->
<h2 class="books-section-heading">
  <i class="bi bi-bullseye"></i>
  <span class="lang-vi">Thói quen &amp; Mục tiêu đọc sách</span>
  <span class="lang-en">Reading Discipline &amp; Annual Goal</span>
</h2>

<div class="reading-goal-box">
  <p class="mb-0" style="color:#cbd5e1; font-size:0.96rem; line-height:1.7;">
    <i class="bi bi-bookmark-check-fill text-info me-2"></i>
    <span class="lang-vi">
      Mình duy trì mục tiêu hoàn thành ít nhất <strong>10 cuốn sách mỗi năm</strong> xoay quanh kiến trúc hệ thống, tư duy sản phẩm, quản trị và tâm lý học hành vi. Mỗi cuốn sách đều được đúc kết thành ghi chú ngắn gọn để áp dụng trực tiếp vào cách thiết kế phần mềm và làm việc hằng ngày.
    </span>
    <span class="lang-en">
      I maintain an annual goal of reading at least <strong>10 books per year</strong> spanning system architecture, product mindset, management, and behavioral psychology—distilling each into actionable takeaways applied directly to my daily engineering workflow.
    </span>
  </p>
</div>
