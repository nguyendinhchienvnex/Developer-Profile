---
layout: default
title: "Chien Store"
permalink: /projects/chien-store/
custom_css: "project-detail"
---

{% assign cs = site.data.chien_store %}

<!-- TOP NAVIGATION BAR -->
<div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
  <a href="{{ site.baseurl }}/projects" class="btn btn-outline-light btn-sm d-inline-flex align-items-center gap-2">
    <i class="bi bi-arrow-left"></i>
    <span class="lang-vi">Quay lại Danh sách Dự án</span>
    <span class="lang-en">Back to Projects</span>
  </a>

  <span class="badge-soft">
    <i class="bi bi-layers-fill"></i>
    <span>Decoupled Full-Stack Architecture</span>
  </span>
</div>

<!-- HERO OVERVIEW + LIVE LINK -->
<div class="cs-hero">
  <div class="d-flex flex-wrap align-items-start justify-content-between gap-3">
    <div class="cs-hero-intro">
      <h1 class="cs-title mb-2">
        <span class="lang-vi">Chien Store — Nền tảng Thương mại Điện tử Full-Stack</span>
        <span class="lang-en">Chien Store — Full-Stack E-Commerce Platform</span>
      </h1>
      <p class="cs-hero-desc">
        <span class="lang-vi">
          Hệ thống thương mại điện tử Full-Stack thiết kế theo kiến trúc <strong>Client-Server tách biệt (Decoupled Architecture)</strong>. Kết hợp backend <strong>Django 5.2.18 + Django REST Framework</strong> xử lý nghiệp vụ đa vai trò, xác thực bảo mật và cổng thanh toán trực tuyến cùng giao diện <strong>React 19 + TypeScript + Zustand</strong> tối ưu tốc độ phản hồi, vận hành trên hệ quản trị cơ sở dữ liệu quan hệ <strong>PostgreSQL</strong>.
        </span>
        <span class="lang-en">
          A complete full-stack e-commerce platform engineered with a <strong>Decoupled Client-Server Architecture</strong>. Combines a <strong>Django 5.2.18 + Django REST Framework</strong> backend handling multi-role business workflows, stateless JWT/OAuth security, and payment gateways with a responsive <strong>React 19 + TypeScript + Zustand</strong> storefront backed by <strong>PostgreSQL</strong>.
        </span>
      </p>
    </div>

    <!-- PROJECT ACTION LINKS -->
    <div class="d-flex flex-wrap gap-2">
      <a href="{{ cs.live_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-primary d-inline-flex align-items-center gap-2">
        <i class="bi bi-box-arrow-up-right"></i>
        <span class="lang-vi">Truy cập Ứng dụng (Local)</span>
        <span class="lang-en">Open Live App (Local)</span>
      </a>
      <a href="{{ cs.repo_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light d-inline-flex align-items-center gap-2">
        <i class="bi bi-github"></i>
        <span>Source Code</span>
      </a>
    </div>

  </div>

  <div class="cs-pill-row">
    {% for pill in cs.pills %}
      <span class="cs-pill">{{ pill }}</span>
    {% endfor %}
  </div>
</div>

<!-- 1. TỔNG QUAN KIẾN TRÚC HỆ THỐNG -->
<h2 class="cs-section-heading">
  <i class="bi bi-diagram-3-fill"></i>
  <span class="lang-vi">1. Tổng quan Kiến trúc Hệ thống</span>
  <span class="lang-en">1. System Architecture Overview</span>
</h2>

<div class="cs-table-wrap">
  <table class="cs-table">
    <thead>
      <tr>
        <th><span class="lang-vi">Thành phần</span><span class="lang-en">Layer / Component</span></th>
        <th><span class="lang-vi">Công nghệ sử dụng</span><span class="lang-en">Tech Stack</span></th>
        <th><span class="lang-vi">Mô tả chi tiết</span><span class="lang-en">Technical Details</span></th>
      </tr>
    </thead>
    <tbody>
      {% for row in cs.architecture %}
        <tr>
          <td>
            <strong>
              <span class="lang-vi">{{ row.layer_vi }}</span>
              <span class="lang-en">{{ row.layer_en }}</span>
            </strong>
          </td>
          <td>{{ row.stack }}</td>
          <td>
            <span class="lang-vi">{{ row.desc_vi }}</span>
            <span class="lang-en">{{ row.desc_en }}</span>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<h3 class="cs-sub-heading">
  <i class="bi bi-boxes"></i>
  <span class="lang-vi">Kiến trúc 6 Ứng dụng Backend (Django Apps)</span>
  <span class="lang-en">Modular Backend Architecture (6 Django Apps)</span>
</h3>

<div class="cs-table-wrap mb-4">
  <table class="cs-table">
    <thead>
      <tr>
        <th>App</th>
        <th><span class="lang-vi">Chức năng chính</span><span class="lang-en">Core Responsibilities</span></th>
        <th><span class="lang-vi">Models cốt lõi</span><span class="lang-en">Core Models</span></th>
      </tr>
    </thead>
    <tbody>
      {% for app in cs.django_apps %}
        <tr>
          <td><code>{{ app.name }}</code></td>
          <td>
            <span class="lang-vi">{{ app.desc_vi }}</span>
            <span class="lang-en">{{ app.desc_en }}</span>
          </td>
          <td>{{ app.models }}</td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<!-- 2. TÍNH NĂNG NỔI BẬT THEO VAI TRÒ -->
<h2 class="cs-section-heading">
  <i class="bi bi-stars"></i>
  <span class="lang-vi">2. Tính năng Nổi bật &amp; Phân quyền RBAC</span>
  <span class="lang-en">2. Key Features &amp; Role-Based Access Control (RBAC)</span>
</h2>

<div class="row g-3 mb-4">
  {% for role in cs.roles %}
    <div class="col-md-6">
      <div class="cs-card h-100 mb-0">
        <div class="cs-sub-heading">
          <i class="bi {{ role.icon }}"></i>
          <span class="lang-vi">{{ role.title_vi }}</span>
          <span class="lang-en">{{ role.title_en }}</span>
        </div>
        <ul class="cs-list">
          {% for f in role.features %}
            <li>
              <span class="lang-vi">{{ f.vi }}</span>
              <span class="lang-en">{{ f.en }}</span>
            </li>
          {% endfor %}
        </ul>
      </div>
    </div>
  {% endfor %}
</div>

<!-- 3. CẤU TRÚC THƯ MỤC DỰ ÁN -->
<h2 class="cs-section-heading">
  <i class="bi bi-folder-symlink-fill"></i>
  <span class="lang-vi">3. Cấu trúc Thư mục Dự án</span>
  <span class="lang-en">3. Project Directory Structure</span>
</h2>

<div class="cs-card">
<pre class="cs-code-block">Web-BanHang/
├── backend/                        # Django 5.2.18 + DRF Backend
│   ├── config/                     # Core settings (settings.py, urls.py, wsgi.py)
│   ├── users/                      # JWT Auth, Google OAuth 2.0, User &amp; Address
│   ├── catalog/                    # Category, Brand, Product, ProductVariant, Wishlist
│   ├── cart/                       # Cart, CartItem &amp; localStorage Merge API
│   ├── orders/                     # Order, OrderItem, Checkout &amp; Revenue Stats
│   ├── payments/                   # Payment Gateway Integration (COD, MoMo QR, VNPay)
│   ├── inventory/                  # Warehouse &amp; StockMovement Tracking
│   └── requirements.txt            # Python dependencies (psycopg[binary], SimpleJWT, ...)
│
├── frontend/                       # React 19 + TypeScript + Vite SPA
│   └── src/
│       ├── api/                    # axiosClient &amp; JWT Auto-Refresh Interceptors
│       ├── components/             # Shared UI Components
│       ├── pages/                  # 14 Pages (Home, ProductDetail, Cart, Checkout,
│       │                           # Orders, SellerDashboard, MoMoQRCode, VNPayReturn, ...)
│       ├── store/                  # Zustand Stores (auth, cart, wishlist, language, location)
│       └── App.tsx                 # React Router &amp; Layout Configuration
└── README.md</pre>
</div>

<!-- 4. TÀI LIỆU API CỐT LÕI -->
<h2 class="cs-section-heading">
  <i class="bi bi-hdd-network-fill"></i>
  <span class="lang-vi">4. Tài liệu RESTful API Cốt lõi (<code>/api/v1/</code>)</span>
  <span class="lang-en">4. Core RESTful API Reference (<code>/api/v1/</code>)</span>
</h2>

<div class="cs-table-wrap mb-4">
  <table class="cs-table">
    <thead>
      <tr>
        <th>Module</th>
        <th>Method</th>
        <th>Endpoint</th>
        <th><span class="lang-vi">Chức năng</span><span class="lang-en">Description</span></th>
      </tr>
    </thead>
    <tbody>
      {% for api in cs.apis %}
        <tr>
          <td><code>{{ api.module }}</code></td>
          <td>
            {% for m in api.methods %}
              <span class="cs-method {{ m.type }}">{{ m.label }}</span>
            {% endfor %}
          </td>
          <td>{{ api.endpoint }}</td>
          <td>
            <span class="lang-vi">{{ api.desc_vi }}</span>
            <span class="lang-en">{{ api.desc_en }}</span>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
