---
layout: default
title: "Books"
title_vi: "Sách"
custom_css: "books"
---

{% assign books_data = site.data.books %}

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

  <p class="text-muted-soft books-lead mb-0">
    <span class="lang-vi">
      Bên cạnh tài liệu chuyên ngành về kỹ thuật phần mềm, đọc sách là cách mình mở rộng góc nhìn về <strong>tư duy chiến lược</strong>, <strong>kỷ luật vận hành</strong> và <strong>kỹ năng giao tiếp đội nhóm</strong> — những yếu tố cốt lõi để xây dựng sản phẩm công nghệ bền vững.
    </span>
    <span class="lang-en">
      Alongside software engineering documentation, reading broadens my perspective on <strong>strategic thinking</strong>, <strong>operational discipline</strong>, and <strong>team collaboration</strong>—essential foundations for building enduring technology products.
    </span>
  </p>
</div>

<hr class="books-divider">

<!-- DANH SÁCH SÁCH (Render từ _data/books.yml) -->
<div class="row book-grid mb-4">
  {% for book in books_data.items %}
    <div class="col-md-4 col-sm-6">
      <a
        class="book-card"
        href="{{ book.url }}"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <div class="book-cover-wrap">
            <img
              src="{{ site.baseurl }}{{ book.cover }}"
              alt="{{ book.alt }}"
              class="book-cover"
            />
          </div>
          <span class="book-category-tag">
            <i class="bi {{ book.category_icon }}"></i>
            <span class="lang-vi">{{ book.category_vi }}</span>
            <span class="lang-en">{{ book.category_en }}</span>
          </span>
          <div class="book-title">
            <span class="lang-vi">{{ book.title_vi }}</span>
            <span class="lang-en">{{ book.title_en }}</span>
          </div>
          <div class="book-author">
            <i class="bi bi-pen"></i> {{ book.author }}
          </div>
          <div class="book-note">
            <span class="lang-vi">{{ book.note_vi }}</span>
            <span class="lang-en">{{ book.note_en }}</span>
          </div>
        </div>
        <div class="book-link-hint">
          <span class="lang-vi">Đọc tài liệu sách</span>
          <span class="lang-en">Read book resource</span>
          <i class="bi bi-arrow-right"></i>
        </div>
      </a>
    </div>
  {% endfor %}
</div>

<hr class="books-divider">

<!-- MỤC TIÊU ĐỌC SÁCH -->
<h2 class="books-section-heading">
  <i class="bi bi-bullseye"></i>
  <span class="lang-vi">Thói quen &amp; Mục tiêu đọc sách</span>
  <span class="lang-en">Reading Discipline &amp; Annual Goal</span>
</h2>

<div class="reading-goal-box">
  <p class="reading-goal-text mb-0">
    <i class="bi bi-bookmark-check-fill text-info me-2"></i>
    <span class="lang-vi">
      Mình duy trì mục tiêu hoàn thành ít nhất <strong>10 cuốn sách mỗi năm</strong> xoay quanh kiến trúc hệ thống, tư duy sản phẩm, quản trị và tâm lý học hành vi. Mỗi cuốn sách đều được đúc kết thành ghi chú ngắn gọn để áp dụng trực tiếp vào cách thiết kế phần mềm và làm việc hằng ngày.
    </span>
    <span class="lang-en">
      I maintain an annual goal of reading at least <strong>10 books per year</strong> spanning system architecture, product mindset, management, and behavioral psychology—distilling each into actionable takeaways applied directly to my daily engineering workflow.
    </span>
  </p>
</div>
