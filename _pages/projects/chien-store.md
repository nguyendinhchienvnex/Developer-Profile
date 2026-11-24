---
layout: default
title: "Chien Store"
permalink: /projects/chien-store/
---

<style>
  .cs-hero {
    background: radial-gradient(circle at 0 0, rgba(56, 189, 248, 0.14), transparent 55%),
                rgba(2, 6, 23, 0.72);
    border: 1px solid rgba(56, 189, 248, 0.28);
    border-radius: 1.25rem;
    padding: 1.65rem;
    margin-bottom: 1.75rem;
  }
  .cs-title {
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: -0.4px;
    background: linear-gradient(135deg, #38bdf8, #22d3ee, #4ade80);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .cs-section-heading {
    font-weight: 600;
    font-size: 1.35rem;
    color: #38bdf8;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.55rem;
  }
  .cs-card {
    background: rgba(2, 6, 23, 0.62);
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 1.1rem;
    padding: 1.3rem 1.4rem;
    margin-bottom: 1.35rem;
  }
  .cs-sub-heading {
    font-size: 1.05rem;
    font-weight: 600;
    color: #22d3ee;
    margin-bottom: 0.65rem;
    display: flex;
    align-items: center;
    gap: 0.45rem;
  }
  .cs-pill-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-top: 1rem;
  }
  .cs-pill {
    font-size: 0.78rem;
    font-weight: 500;
    padding: 0.25rem 0.65rem;
    border-radius: 999px;
    background: rgba(15, 23, 42, 0.95);
    border: 1px solid rgba(56, 189, 248, 0.28);
    color: #7dd3fc;
  }
  .cs-table-wrap {
    overflow-x: auto;
    border-radius: 0.95rem;
    border: 1px solid rgba(148, 163, 184, 0.2);
    background: rgba(2, 6, 23, 0.68);
    margin-bottom: 1.35rem;
  }
  .cs-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.89rem;
    color: #cbd5e1;
  }
  .cs-table th {
    background: rgba(15, 23, 42, 0.95);
    color: #38bdf8;
    font-weight: 600;
    text-align: left;
    padding: 0.75rem 0.95rem;
    border-bottom: 1px solid rgba(56, 189, 248, 0.25);
    white-space: nowrap;
  }
  .cs-table td {
    padding: 0.7rem 0.95rem;
    border-bottom: 1px solid rgba(148, 163, 184, 0.12);
    vertical-align: top;
    line-height: 1.55;
  }
  .cs-table tr:last-child td {
    border-bottom: none;
  }
  .cs-table code {
    color: #7dd3fc;
    background: rgba(56, 189, 248, 0.1);
    padding: 0.12rem 0.38rem;
    border-radius: 5px;
    font-size: 0.82rem;
  }
  .cs-method {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 700;
    padding: 0.15rem 0.45rem;
    border-radius: 5px;
    font-family: monospace;
  }
  .cs-method.get { background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.35); }
  .cs-method.post { background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.35); }
  .cs-method.patch { background: rgba(250, 204, 21, 0.15); color: #fde047; border: 1px solid rgba(250, 204, 21, 0.35); }
  .cs-list {
    color: #cbd5e1;
    padding-left: 1.2rem;
    line-height: 1.7;
    font-size: 0.92rem;
    margin-bottom: 0;
  }
  .cs-list li {
    margin-bottom: 0.4rem;
  }
  .cs-code-block {
    background: #020617;
    border: 1px solid rgba(56, 189, 248, 0.22);
    border-radius: 0.9rem;
    padding: 1rem 1.15rem;
    color: #e2e8f0;
    font-size: 0.83rem;
    line-height: 1.6;
    overflow-x: auto;
    margin-bottom: 0;
  }
  @media (max-width: 640px) {
    .cs-title { font-size: 1.65rem; }
    .cs-hero { padding: 1.25rem; }
  }
</style>

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
    <div style="flex: 1; min-width: 260px;">
      <h1 class="cs-title mb-2">
        <span class="lang-vi">Chien Store — Nền tảng Thương mại Điện tử Full-Stack</span>
        <span class="lang-en">Chien Store — Full-Stack E-Commerce Platform</span>
      </h1>
      <p style="color: #cbd5e1; font-size: 0.97rem; line-height: 1.7; margin-bottom: 0;">
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
      <a href="http://localhost:5073" target="_blank" rel="noopener noreferrer" class="btn btn-primary d-inline-flex align-items-center gap-2">
        <i class="bi bi-box-arrow-up-right"></i>
        <span class="lang-vi">Truy cập Ứng dụng (Local)</span>
        <span class="lang-en">Open Live App (Local)</span>
      </a>
      <a href="https://github.com/nguyendinhchienvnex/Web-BanHang" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light d-inline-flex align-items-center gap-2">
        <i class="bi bi-github"></i>
        <span>Source Code</span>
      </a>
    </div>

  </div>

  <div class="cs-pill-row">
    <span class="cs-pill">Django 5.2.18 &amp; DRF</span>
    <span class="cs-pill">React 19 &amp; TypeScript</span>
    <span class="cs-pill">PostgreSQL 15+</span>
    <span class="cs-pill">Zustand State</span>
    <span class="cs-pill">Axios Interceptors</span>
    <span class="cs-pill">JWT + Google OAuth 2.0</span>
    <span class="cs-pill">MoMo QR &amp; VNPay</span>
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
      <tr>
        <td><strong>Backend API</strong></td>
        <td>Django 5.2.18, DRF, SimpleJWT</td>
        <td>
          <span class="lang-vi">Kiến trúc RESTful API chia thành 6 ứng dụng nghiệp vụ độc lập, chạy mặc định tại cổng <code>8000</code>.</span>
          <span class="lang-en">RESTful API modularized into 6 independent business Django apps, running by default on port <code>8000</code>.</span>
        </td>
      </tr>
      <tr>
        <td><strong>Frontend SPA</strong></td>
        <td>React 19, TypeScript, Vite, Tailwind CSS</td>
        <td>
          <span class="lang-vi">Ứng dụng đơn trang (SPA) gồm 14 trang chức năng, đóng gói nhanh với Vite.</span>
          <span class="lang-en">Single-Page Application (SPA) comprising 14 functional views bundled with Vite.</span>
        </td>
      </tr>
      <tr>
        <td><strong>State Management</strong></td>
        <td>Zustand</td>
        <td>
          <span class="lang-vi">Quản lý trạng thái toàn cục gọn nhẹ cho <code>auth</code>, <code>cart</code>, <code>wishlist</code>, <code>language</code> và <code>location</code>.</span>
          <span class="lang-en">Lightweight global stores for <code>auth</code>, <code>cart</code>, <code>wishlist</code>, <code>language</code>, and <code>location</code>.</span>
        </td>
      </tr>
      <tr>
        <td><strong>HTTP Client</strong></td>
        <td>Axios</td>
        <td>
          <span class="lang-vi">Cấu hình <code>axiosClient</code> tích hợp Interceptor tự động gắn <code>Bearer Token</code> và làm mới token khi hết hạn.</span>
          <span class="lang-en">Configured <code>axiosClient</code> with request/response interceptors for automatic <code>Bearer Token</code> attachment and silent refresh.</span>
        </td>
      </tr>
      <tr>
        <td><strong><span class="lang-vi">Xác thực &amp; Bảo mật</span><span class="lang-en">Auth &amp; Security</span></strong></td>
        <td>JWT + Google OAuth 2.0 + CORS</td>
        <td>
          <span class="lang-vi">Xác thực phi trạng thái: Access Token (<code>1 giờ</code>), Refresh Token (<code>30 ngày</code>), hỗ trợ <code>django-cors-headers</code>.</span>
          <span class="lang-en">Stateless authentication: Access Token (<code>1 hour</code>), Refresh Token (<code>30 days</code>), protected via <code>django-cors-headers</code>.</span>
        </td>
      </tr>
      <tr>
        <td><strong><span class="lang-vi">Cơ sở dữ liệu</span><span class="lang-en">Database</span></strong></td>
        <td>PostgreSQL 15+ (<code>psycopg[binary]</code>)</td>
        <td>
          <span class="lang-vi">Cơ sở dữ liệu quan hệ chuẩn ACID, tối ưu truy vấn đồng thời cao, đánh chỉ mục và mở rộng quy mô Production.</span>
          <span class="lang-en">ACID-compliant relational database optimized for high concurrency, indexing, and production scalability.</span>
        </td>
      </tr>
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
      <tr>
        <td><code>users</code></td>
        <td><span class="lang-vi">Đăng ký, đăng nhập truyền thống, Google OAuth 2.0, quản lý hồ sơ và sổ địa chỉ</span><span class="lang-en">Registration, JWT login, Google OAuth 2.0, user profiles, and address book</span></td>
        <td><code>User</code> (<code>ADMIN</code> / <code>SELLER</code> / <code>CUSTOMER</code>), <code>Address</code></td>
      </tr>
      <tr>
        <td><code>catalog</code></td>
        <td><span class="lang-vi">Quản lý danh mục, thương hiệu, sản phẩm, biến thể và danh sách yêu thích</span><span class="lang-en">Categories, brands, products, product variants, and wishlists</span></td>
        <td><code>Category</code>, <code>Brand</code>, <code>Product</code>, <code>ProductVariant</code>, <code>Wishlist</code></td>
      </tr>
      <tr>
        <td><code>cart</code></td>
        <td><span class="lang-vi">Quản lý giỏ hàng, thêm/sửa/xóa sản phẩm và đồng bộ từ <code>localStorage</code></span><span class="lang-en">Cart operations and guest-to-user synchronization from <code>localStorage</code></span></td>
        <td><code>Cart</code>, <code>CartItem</code></td>
      </tr>
      <tr>
        <td><code>orders</code></td>
        <td><span class="lang-vi">Xử lý đặt hàng (checkout), lịch sử đơn hàng, cập nhật trạng thái và thống kê doanh thu</span><span class="lang-en">Checkout workflows, order history, status lifecycle, and revenue analytics</span></td>
        <td><code>Order</code>, <code>OrderItem</code></td>
      </tr>
      <tr>
        <td><code>payments</code></td>
        <td><span class="lang-vi">Khởi tạo và xác thực giao dịch thanh toán COD, MoMo QR, VNPay</span><span class="lang-en">Transaction initialization and verification for COD, MoMo QR, and VNPay</span></td>
        <td><code>Payment</code></td>
      </tr>
      <tr>
        <td><code>inventory</code></td>
        <td><span class="lang-vi">Quản lý kho bãi, điều chỉnh tồn kho và ghi nhận biến động nhập/xuất</span><span class="lang-en">Warehouse management, stock adjustments, and inbound/outbound movement logs</span></td>
        <td><code>Warehouse</code>, <code>StockMovement</code></td>
      </tr>
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
  <div class="col-md-6">
    <div class="cs-card h-100 mb-0">
      <div class="cs-sub-heading">
        <i class="bi bi-person-heart"></i>
        <span class="lang-vi">Khách hàng (<code>CUSTOMER</code>)</span>
        <span class="lang-en">Customer Experience (<code>CUSTOMER</code>)</span>
      </div>
      <ul class="cs-list">
        <li>
          <span class="lang-vi"><strong>Xác thực &amp; Tài khoản:</strong> Đăng ký, đăng nhập nội bộ hoặc một chạm qua <strong>Google OAuth 2.0</strong>; quản lý nhiều địa chỉ nhận hàng.</span>
          <span class="lang-en"><strong>Auth &amp; Profile:</strong> Standard registration/login or one-tap <strong>Google OAuth 2.0</strong>; multi-address shipping management.</span>
        </li>
        <li>
          <span class="lang-vi"><strong>Khám phá Sản phẩm:</strong> Lọc theo thương hiệu, mức giá, tìm kiếm từ khóa, sắp xếp và chọn biến thể (<code>ProductVariant</code>).</span>
          <span class="lang-en"><strong>Product Discovery:</strong> Filter by brand/price, keyword search, sorting, and granular variant selection (<code>ProductVariant</code>).</span>
        </li>
        <li>
          <span class="lang-vi"><strong>Giỏ hàng Đồng bộ Thông minh:</strong> Lưu cục bộ trên <code>localStorage</code> khi chưa đăng nhập và tự động hợp nhất (<code>merge</code>) lên PostgreSQL sau khi đăng nhập.</span>
          <span class="lang-en"><strong>Smart Cart Sync:</strong> Persists guest items in <code>localStorage</code> and automatically merges into PostgreSQL upon login.</span>
        </li>
        <li>
          <span class="lang-vi"><strong>Thanh toán Đa kênh &amp; Wishlist:</strong> Hỗ trợ <strong>COD</strong>, quét mã <strong>MoMo QR</strong>, cổng <strong>VNPay</strong>, lưu danh sách yêu thích và theo dõi tiến độ đơn hàng.</span>
          <span class="lang-en"><strong>Multi-Channel Checkout &amp; Wishlist:</strong> Supports <strong>COD</strong>, <strong>MoMo QR</strong>, <strong>VNPay</strong>, wishlists, and real-time order tracking.</span>
        </li>
      </ul>
    </div>
  </div>

  <div class="col-md-6">
    <div class="cs-card h-100 mb-0">
      <div class="cs-sub-heading">
        <i class="bi bi-shop"></i>
        <span class="lang-vi">Người bán (<code>SELLER</code>) &amp; Quản trị (<code>ADMIN</code>)</span>
        <span class="lang-en">Seller Operations (<code>SELLER</code>) &amp; Admin (<code>ADMIN</code>)</span>
      </div>
      <ul class="cs-list">
        <li>
          <span class="lang-vi"><strong>Bảng điều khiển Người bán (<code>SellerDashboard</code>):</strong> Quản lý danh mục sản phẩm đăng bán, tạo mới và cập nhật giá/biến thể.</span>
          <span class="lang-en"><strong>Seller Dashboard (<code>SellerDashboard</code>):</strong> Manage product listings, create items, and update pricing/variants.</span>
        </li>
        <li>
          <span class="lang-vi"><strong>Vận hành Đơn hàng &amp; Doanh thu:</strong> Tiếp nhận đơn hàng, cập nhật trạng thái giao vận và theo dõi thống kê doanh thu trực quan.</span>
          <span class="lang-en"><strong>Order Fulfillment &amp; Revenue:</strong> Process incoming orders, update shipping statuses, and monitor revenue metrics.</span>
        </li>
        <li>
          <span class="lang-vi"><strong>Quản trị Kho vận (<code>Inventory</code>):</strong> Quản lý nhiều kho hàng (<code>Warehouse</code>), điều chỉnh tồn kho và giám sát nhật ký nhập/xuất (<code>StockMovement</code>).</span>
          <span class="lang-en"><strong>Inventory Control (<code>Inventory</code>):</strong> Multi-warehouse tracking (<code>Warehouse</code>), stock adjustments, and audit trails (<code>StockMovement</code>).</span>
        </li>
        <li>
          <span class="lang-vi"><strong>Kiểm soát Hệ thống (<code>ADMIN</code>):</strong> Phân quyền vai trò (<code>ADMIN</code>, <code>SELLER</code>, <code>CUSTOMER</code>), kiểm duyệt danh mục gốc và thương hiệu qua Django Admin.</span>
          <span class="lang-en"><strong>System Administration (<code>ADMIN</code>):</strong> Role assignment (<code>ADMIN</code>, <code>SELLER</code>, <code>CUSTOMER</code>) and global catalog moderation via Django Admin.</span>
        </li>
      </ul>
    </div>
  </div>
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
      <tr>
        <td><code>users</code></td>
        <td><span class="cs-method post">POST</span></td>
        <td><code>/api/v1/auth/login/</code> · <code>/google/callback/</code></td>
        <td><span class="lang-vi">Đăng nhập JWT (Access 1h / Refresh 30d) &amp; Google OAuth 2.0</span><span class="lang-en">JWT login (1h access / 30d refresh) &amp; Google OAuth 2.0 callback</span></td>
      </tr>
      <tr>
        <td><code>catalog</code></td>
        <td><span class="cs-method get">GET</span></td>
        <td><code>/api/v1/catalog/products/</code> · <code>/{slug}/</code></td>
        <td><span class="lang-vi">Danh sách sản phẩm (lọc, tìm kiếm, sắp xếp) &amp; chi tiết biến thể</span><span class="lang-en">Filtered product listing &amp; detailed variant lookup by slug</span></td>
      </tr>
      <tr>
        <td><code>cart</code></td>
        <td><span class="cs-method post">POST</span></td>
        <td><code>/api/v1/cart/add/</code> · <code>/cart/merge/</code></td>
        <td><span class="lang-vi">Thêm sản phẩm &amp; hợp nhất giỏ hàng từ <code>localStorage</code> lên server</span><span class="lang-en">Add items &amp; merge guest <code>localStorage</code> cart to server</span></td>
      </tr>
      <tr>
        <td><code>orders</code></td>
        <td><span class="cs-method post">POST</span> <span class="cs-method get">GET</span></td>
        <td><code>/api/v1/orders/checkout/</code> · <code>/orders/</code></td>
        <td><span class="lang-vi">Tạo đơn hàng từ giỏ hàng và truy xuất lịch sử đơn hàng</span><span class="lang-en">Create order from cart checkout &amp; retrieve order history</span></td>
      </tr>
      <tr>
        <td><code>payments</code></td>
        <td><span class="cs-method post">POST</span></td>
        <td><code>/api/v1/payments/create/</code></td>
        <td><span class="lang-vi">Khởi tạo giao dịch thanh toán đa kênh (COD, MoMo QR, VNPay)</span><span class="lang-en">Initialize multi-channel payment transactions (COD, MoMo QR, VNPay)</span></td>
      </tr>
      <tr>
        <td><code>inventory</code></td>
        <td><span class="cs-method post">POST</span></td>
        <td><code>/api/v1/inventory/adjust/</code></td>
        <td><span class="lang-vi">Điều chỉnh tồn kho trực tiếp và ghi log <code>StockMovement</code> (Seller/Admin)</span><span class="lang-en">Adjust stock quantities &amp; log <code>StockMovement</code> (Seller/Admin)</span></td>
      </tr>
    </tbody>
  </table>
</div>

<!-- 5. HƯỚNG DẪN KHỞI CHẠY CỤC BỘ -->
<h2 class="cs-section-heading">
  <i class="bi bi-terminal-fill"></i>
  <span class="lang-vi">5. Hướng dẫn Cài đặt &amp; Khởi chạy Cục bộ</span>
  <span class="lang-en">5. Local Setup &amp; Quick Start</span>
</h2>

<div class="cs-card">
<pre class="cs-code-block"># 1. Khởi tạo Database PostgreSQL
psql -U postgres -c "CREATE DATABASE chien_store_db ENCODING 'UTF8';"

# 2. Thiết lập &amp; chạy Backend (Django - Cổng 8000)

cd backend
python -m venv venv &amp;&amp; venv\Scripts\activate
pip install -r requirements.txt &amp;&amp; pip install "psycopg[binary]" python-dotenv
cp .env.example .env
python manage.py migrate
python manage.py runserver

# 3. Thiết lập &amp; chạy Frontend (React + Vite)

cd frontend
npm install
npm run dev</pre>

</div>
