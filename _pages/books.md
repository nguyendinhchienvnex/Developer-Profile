---
layout: default
title: "Books"
---

<div class="mb-4">
  <h1 style="font-weight:700; font-size:2.1rem; letter-spacing:-0.4px; color:#4dd0e1;">
    Books · Sách mình đã đọc / đang đọc
  </h1>
  <p class="text-muted-soft" style="font-size:1.02rem; line-height:1.6;">
    Sách là cách mình “trò chuyện” với những người giỏi hơn. Dưới đây là vài cuốn đã
    ảnh hưởng nhiều đến cách mình nhìn về <strong>cuộc sống</strong>, <strong>kinh doanh</strong> và <strong>con người</strong>.
  </p>
</div>

<style>
  .book-grid {
    row-gap: 1.9rem;
  }

  .book-card {
    display: block;
    text-decoration: none;
    color: inherit;
    background: var(--bg-card-soft, rgba(15,23,42,0.96));
    border-radius: 1.2rem;
    border: 1px solid var(--border-soft, rgba(148,163,184,0.18));
    padding: 1.1rem 1.1rem 1.2rem 1.1rem;
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.9);
    transition:
      transform 0.18s ease,
      box-shadow 0.18s ease,
      border-color 0.18s ease,
      background 0.18s ease;
  }

  .book-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 22px 60px rgba(15,23,42,1);
    border-color: rgba(56,189,248,0.6);
    background: radial-gradient(circle at 0 0, rgba(56,189,248,0.10), transparent 55%),
                var(--bg-card-soft, rgba(15,23,42,0.98));
  }

  .book-cover-wrap {
    overflow: hidden;
    border-radius: 0.9rem;
    margin-bottom: 0.75rem;
  }

  .book-cover {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
    border-radius: 0.9rem;
    box-shadow: 0 14px 32px rgba(15,23,42,1);
    transition: transform 0.22s ease, box-shadow 0.22s ease;
  }

  .book-card:hover .book-cover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 22px 60px rgba(15,23,42,1);
  }

  .book-title {
    font-size: 1.02rem;
    font-weight: 600;
    margin-bottom: 0.1rem;
    color: #e0f7fa;
  }

  .book-author {
    font-size: 0.86rem;
    color: var(--text-muted, #9ca3af);
    margin-bottom: 0.35rem;
  }

  .book-note {
    font-size: 0.9rem;
    color: #cfd8dc;
    line-height: 1.55;
    margin-bottom: 0.35rem;
  }

  .book-link-hint {
    font-size: 0.8rem;
    color: #4dd0e1;
  }
</style>

<div class="row book-grid">

  <!-- Book 1 -->
  <div class="col-md-4 col-sm-6">
    <a
      class="book-card"
      href="https://breakdownblogs.wordpress.com/wp-content/uploads/2018/02/nha_gia_kim__paulo_coelho.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="book-cover-wrap">
        <img
          src="{{ site.baseurl }}/assets/images/nhagiakim.jpg"
          alt="Nhà giả kim"
          class="book-cover"
        />
      </div>
      <div class="book-title">Nhà giả kim</div>
      <div class="book-author">Paulo Coelho</div>
      <div class="book-note">
        Hành trình đi tìm “kho báu” nhưng thực ra là hành trình hiểu mình, hiểu ước mơ
        và đủ can đảm theo đuổi nó đến cùng.
      </div>
      <div class="book-link-hint">→ Xem chi tiết cuốn sách</div>
    </a>
  </div>

  <!-- Book 2 -->
  <div class="col-md-4 col-sm-6">
    <a
      class="book-card"
      href="https://file.mentor.vn/files/lessons/file-1617004361169.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="book-cover-wrap">
        <img
          src="{{ site.baseurl }}/assets/images/dacnhantam.jpg"
          alt="Đắc nhân tâm"
          class="book-cover"
        />
      </div>
      <div class="book-title">Đắc nhân tâm</div>
      <div class="book-author">Dale Carnegie</div>
      <div class="book-note">
        Cuốn “giao tiếp cơ bản” mà ai cũng nên đọc một lần: tôn trọng, lắng nghe
        và nhìn sự việc từ góc nhìn của người khác.
      </div>
      <div class="book-link-hint">→ Xem chi tiết cuốn sách</div>
    </a>
  </div>

  <!-- Book 3 -->
  <div class="col-md-4 col-sm-6">
    <a
      class="book-card"
      href="https://mekongstartup.vn/public/upload/files/tu-tot-den-vi-dai-jim-collins.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="book-cover-wrap">
        <img
          src="{{ site.baseurl }}/assets/images/vidai.jpg"
          alt="Từ tốt đến vĩ đại"
          class="book-cover"
        />
      </div>
      <div class="book-title">Từ tốt đến vĩ đại</div>
      <div class="book-author">Jim Collins</div>
      <div class="book-note">
        Nghiên cứu vì sao một số công ty có thể “bật lên” và giữ phong độ lâu dài,
        nhấn mạnh kỷ luật, con người và chiến lược rõ ràng.
      </div>
      <div class="book-link-hint">→ Xem chi tiết cuốn sách</div>
    </a>
  </div>

</div>

---

## Mục tiêu đọc sách

<p class="text-muted-soft" style="font-size:0.98rem; line-height:1.7;">
  Mục tiêu của mình là mỗi năm đọc ít nhất <strong>10 cuốn sách</strong> về kinh doanh, tâm lý, kỹ năng mềm
  và ghi lại vài dòng cảm nhận sau mỗi cuốn. Trang <strong>Books</strong> này giống như một “nhật ký đọc”
  nho nhỏ để sau này nhìn lại hành trình học của chính mình.
</p>
