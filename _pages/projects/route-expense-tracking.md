---
layout: default
title: "Route-Expense-Tracking"
permalink: /projects/route-expense-tracking/
custom_css: "project-detail"
---

{% assign ret = site.data.route_expense_tracking %}

<!-- TOP NAVIGATION BAR -->
<div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
  <a href="{{ site.baseurl }}/projects" class="btn btn-outline-light btn-sm d-inline-flex align-items-center gap-2">
    <i class="bi bi-arrow-left"></i>
    <span class="lang-vi">Quay lại Danh sách Dự án</span>
    <span class="lang-en">Back to Projects</span>
  </a>

  <span class="badge-soft">
    <i class="bi bi-geo-alt-fill"></i>
    <span>Desktop GIS &amp; Logistics Optimization</span>
  </span>
</div>

<!-- HERO OVERVIEW + SOURCE LINK -->
<div class="cs-hero">
  <div class="d-flex flex-wrap align-items-start justify-content-between gap-3">
    <div class="cs-hero-intro">
      <h1 class="cs-title mb-2">
        <span class="lang-vi">Route-Expense-Tracking — DC Smart Logistics Pro System</span>
        <span class="lang-en">Route-Expense-Tracking — DC Smart Logistics Pro System</span>
      </h1>
      <p class="cs-hero-desc">
        <span class="lang-vi">
          Phần mềm ứng dụng Desktop chuyên dụng phát triển bằng <strong>Python 3</strong> và <strong>PyQt6</strong>, hỗ trợ doanh nghiệp vận tải tính toán chi phí nhiên liệu, tối ưu hóa lộ trình giao hàng đa điểm (<strong>Multi-stop Route Optimization</strong>) bằng thuật toán <strong>Greedy TSP + 2-opt</strong> kết hợp <strong>OSRM API</strong>, và quản trị điều phối kho bãi trên bản đồ vệ tinh thời gian thực.
        </span>
        <span class="lang-en">
          A dedicated Desktop application built with <strong>Python 3</strong> and <strong>PyQt6</strong> that empowers logistics enterprises to calculate fuel expenses, optimize multi-stop delivery routes using <strong>Greedy TSP + 2-opt</strong> heuristics combined with the <strong>OSRM API</strong>, and manage warehouse dispatching on interactive satellite maps.
        </span>
      </p>
    </div>

    <!-- PROJECT ACTION LINKS -->
    <div class="d-flex flex-wrap gap-2">
      <a href="{{ ret.repo_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-primary d-inline-flex align-items-center gap-2">
        <i class="bi bi-github"></i>
        <span class="lang-vi">Mã nguồn GitHub</span>
        <span class="lang-en">GitHub Repository</span>
      </a>
    </div>

  </div>

  <div class="cs-pill-row">
    {% for pill in ret.pills %}
      <span class="cs-pill">{{ pill }}</span>
    {% endfor %}
  </div>
</div>

<!-- 1. CÔNG NGHỆ & THƯ VIỆN SỬ DỤNG -->
<h2 class="cs-section-heading">
  <i class="bi bi-stack"></i>
  <span class="lang-vi">1. Công nghệ &amp; Kiến trúc Kỹ thuật</span>
  <span class="lang-en">1. Technology Stack &amp; Architecture</span>
</h2>

<div class="cs-table-wrap mb-4">
  <table class="cs-table">
    <thead>
      <tr>
        <th><span class="lang-vi">Thành phần</span><span class="lang-en">Component</span></th>
        <th><span class="lang-vi">Công nghệ / Thư viện</span><span class="lang-en">Tech / Library</span></th>
        <th><span class="lang-vi">Vai trò trong hệ thống</span><span class="lang-en">Role in System</span></th>
      </tr>
    </thead>
    <tbody>
      {% for item in ret.tech_stack %}
        <tr>
          <td>
            <strong>
              <span class="lang-vi">{{ item.component_vi }}</span>
              <span class="lang-en">{{ item.component_en }}</span>
            </strong>
          </td>
          <td>{{ item.library }}</td>
          <td>
            <span class="lang-vi">{{ item.role_vi }}</span>
            <span class="lang-en">{{ item.role_en }}</span>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<!-- 2. TÍNH NĂNG NỔI BẬT -->
<h2 class="cs-section-heading">
  <i class="bi bi-stars"></i>
  <span class="lang-vi">2. Tính năng Nổi bật theo Phân hệ</span>
  <span class="lang-en">2. Core Functional Modules</span>
</h2>

<div class="row g-3 mb-4">
  {% for mod in ret.modules %}
    <div class="col-md-6">
      <div class="cs-card h-100 mb-0">
        <div class="cs-sub-heading">
          <i class="bi {{ mod.icon }}"></i>
          <span class="lang-vi">{{ mod.title_vi }}</span>
          <span class="lang-en">{{ mod.title_en }}</span>
        </div>
        <ul class="cs-list">
          {% for f in mod.items %}
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

<!-- 3. THUẬT TOÁN & CÔNG THỨC TÍNH CHI PHÍ -->
<h2 class="cs-section-heading">
  <i class="bi bi-calculator-fill"></i>
  <span class="lang-vi">3. Thuật toán Tối ưu Lộ trình &amp; Công thức Chi phí</span>
  <span class="lang-en">3. Route Optimization Algorithm &amp; Cost Formula</span>
</h2>

<div class="cs-card mb-4">
  <div class="cs-sub-heading">
    <i class="bi bi-cpu"></i>
    <span class="lang-vi">Quy trình Giải thuật Đa điểm (Greedy TSP + 2-opt + OSRM)</span>
    <span class="lang-en">Multi-Stop Optimization Pipeline (Greedy TSP + 2-opt + OSRM)</span>
  </div>
  <ol class="cs-list mb-3">
    {% for step in ret.algorithm_steps %}
      <li>
        <span class="lang-vi">{{ step.vi }}</span>
        <span class="lang-en">{{ step.en }}</span>
      </li>
    {% endfor %}
  </ol>

  <div class="cs-sub-heading">
    <i class="bi bi-fuel-pump-fill"></i>
    <span class="lang-vi">Công thức Tính Chi phí Nhiên liệu</span>
    <span class="lang-en">Fuel Cost Calculation Formula</span>
  </div>

  <div class="cs-formula-box">
    $$\text{Tổng chi phí (VNĐ)} = \left( \frac{D}{100} \right) \times C_{\text{fuel}} \times P_{\text{fuel}}$$
  </div>

  <ul class="cs-list">
    {% for v in ret.formula_vars %}
      <li>
        {{ v.symbol }}:
        <span class="lang-vi">{{ v.vi }}</span>
        <span class="lang-en">{{ v.en }}</span>
      </li>
    {% endfor %}
  </ul>
</div>

<!-- 4. KIẾN TRÚC THƯ MỤC & CƠ SỞ DỮ LIỆU -->
<h2 class="cs-section-heading">
  <i class="bi bi-folder-symlink-fill"></i>
  <span class="lang-vi">4. Cấu trúc Dự án &amp; Lược đồ SQLite (<code>logistics_system.db</code>)</span>
  <span class="lang-en">4. Project Structure &amp; SQLite Schema (<code>logistics_system.db</code>)</span>
</h2>

<div class="row g-3 mb-4">
  <div class="col-md-6">
    <div class="cs-card h-100 mb-0">
      <div class="cs-sub-heading">
        <i class="bi bi-diagram-2-fill"></i>
        <span class="lang-vi">Kiến trúc Phân tầng (GUI &amp; Core)</span>
        <span class="lang-en">Layered Architecture (GUI &amp; Core)</span>
      </div>
<pre class="cs-code-block">DC Smart Logistics Pro/
├── main.py                  # Entry point (QStackedWidget)
├── logistics_system.db      # SQLite DB (WAL Mode)
├── session.txt              # Persistent login session
├── map_cache.html           # Rendered Folium map HTML
├── GUI/                     # Presentation Layer
│   ├── login_window.py      # Auth &amp; Registration UI
│   ├── menu_window.py       # Main Navigation Hub
│   ├── main_window.py       # Route Dispatch &amp; Reports
│   ├── management_window.py # Fleet, Warehouse &amp; Customer UI
│   └── canvas.py            # QWebEngineView Map Wrapper
└── core/                    # Business &amp; Data Layer
    ├── database.py          # Schema, Triggers &amp; Seed Data
    ├── workers.py           # OptimizeWorker &amp; GeocodeWorker
    └── algorithms.py        # TSP + 2-opt &amp; Cost Engine</pre>
    </div>
  </div>

  <div class="col-md-6">
    <div class="cs-table-wrap h-100 mb-0">
      <table class="cs-table">
        <thead>
          <tr>
            <th><span class="lang-vi">Bảng</span><span class="lang-en">Table</span></th>
            <th><span class="lang-vi">Chức năng &amp; Trường dữ liệu chính</span><span class="lang-en">Role &amp; Key Columns</span></th>
          </tr>
        </thead>
        <tbody>
          {% for tbl in ret.db_tables %}
            <tr>
              <td><code>{{ tbl.name }}</code></td>
              <td>
                <span class="lang-vi">{{ tbl.desc_vi }}</span>
                <span class="lang-en">{{ tbl.desc_en }}</span>
              </td>
            </tr>
          {% endfor %}
        </tbody>
      </table>
    </div>
  </div>
</div>

<!-- 5. HƯỚNG DẪN CÀI ĐẶT & KHỞI CHẠY -->
<h2 class="cs-section-heading">
  <i class="bi bi-terminal-fill"></i>
  <span class="lang-vi">5. Cài đặt &amp; Khởi chạy Ứng dụng</span>
  <span class="lang-en">5. Installation &amp; Quick Start</span>
</h2>

<div class="cs-card mb-0">
<pre class="cs-code-block"># 1. Tạo và kích hoạt môi trường ảo Python (Windows)
python -m venv venv
venv\Scripts\activate

# 2. Cài đặt các thư viện phụ thuộc (PyQt6, WebEngine, Folium, OSRM &amp; Geocoding)

pip install PyQt6 PyQt6-WebEngine folium requests geopy

# 3. Khởi chạy ứng dụng (tích hợp sẵn cờ chống lỗi render GPU cho WebEngine)

set QTWEBENGINE_DISABLE_GPU=1
python main.py</pre>

</div>
