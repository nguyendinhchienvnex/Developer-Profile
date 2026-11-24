---
layout: default
title: "Route-Expense-Tracking"
permalink: /projects/route-expense-tracking/
---

<style>
  .ret-hero {
    background: radial-gradient(circle at 0 0, rgba(56, 189, 248, 0.14), transparent 55%),
                rgba(2, 6, 23, 0.72);
    border: 1px solid rgba(56, 189, 248, 0.28);
    border-radius: 1.25rem;
    padding: 1.65rem;
    margin-bottom: 1.75rem;
  }
  .ret-title {
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: -0.4px;
    background: linear-gradient(135deg, #38bdf8, #22d3ee, #4ade80);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .ret-section-heading {
    font-weight: 600;
    font-size: 1.35rem;
    color: #38bdf8;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.55rem;
  }
  .ret-card {
    background: rgba(2, 6, 23, 0.62);
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 1.1rem;
    padding: 1.3rem 1.4rem;
    margin-bottom: 1.35rem;
  }
  .ret-sub-heading {
    font-size: 1.05rem;
    font-weight: 600;
    color: #22d3ee;
    margin-bottom: 0.65rem;
    display: flex;
    align-items: center;
    gap: 0.45rem;
  }
  .ret-pill-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-top: 1rem;
  }
  .ret-pill {
    font-size: 0.78rem;
    font-weight: 500;
    padding: 0.25rem 0.65rem;
    border-radius: 999px;
    background: rgba(15, 23, 42, 0.95);
    border: 1px solid rgba(56, 189, 248, 0.28);
    color: #7dd3fc;
  }
  .ret-table-wrap {
    overflow-x: auto;
    border-radius: 0.95rem;
    border: 1px solid rgba(148, 163, 184, 0.2);
    background: rgba(2, 6, 23, 0.68);
    margin-bottom: 1.35rem;
  }
  .ret-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.89rem;
    color: #cbd5e1;
  }
  .ret-table th {
    background: rgba(15, 23, 42, 0.95);
    color: #38bdf8;
    font-weight: 600;
    text-align: left;
    padding: 0.75rem 0.95rem;
    border-bottom: 1px solid rgba(56, 189, 248, 0.25);
    white-space: nowrap;
  }
  .ret-table td {
    padding: 0.7rem 0.95rem;
    border-bottom: 1px solid rgba(148, 163, 184, 0.12);
    vertical-align: top;
    line-height: 1.55;
  }
  .ret-table tr:last-child td {
    border-bottom: none;
  }
  .ret-table code,
  .ret-card code {
    color: #7dd3fc;
    background: rgba(56, 189, 248, 0.1);
    padding: 0.12rem 0.38rem;
    border-radius: 5px;
    font-size: 0.82rem;
  }
  .ret-list {
    color: #cbd5e1;
    padding-left: 1.2rem;
    line-height: 1.7;
    font-size: 0.92rem;
    margin-bottom: 0;
  }
  .ret-list li {
    margin-bottom: 0.4rem;
  }
  .ret-formula-box {
    background: rgba(15, 23, 42, 0.9);
    border: 1px solid rgba(56, 189, 248, 0.3);
    border-left: 4px solid #22d3ee;
    border-radius: 0.85rem;
    padding: 1rem 1.25rem;
    margin: 0.85rem 0;
    color: #f1f5f9;
    font-size: 1rem;
    overflow-x: auto;
  }
  .ret-code-block {
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
    .ret-title { font-size: 1.65rem; }
    .ret-hero { padding: 1.25rem; }
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
    <i class="bi bi-geo-alt-fill"></i>
    <span>Desktop GIS &amp; Logistics Optimization</span>
  </span>
</div>

<!-- HERO OVERVIEW + SOURCE LINK -->
<div class="ret-hero">
  <div class="d-flex flex-wrap align-items-start justify-content-between gap-3">
    <div style="flex: 1; min-width: 260px;">
      <h1 class="ret-title mb-2">
        <span class="lang-vi">Route-Expense-Tracking — DC Smart Logistics Pro System</span>
        <span class="lang-en">Route-Expense-Tracking — DC Smart Logistics Pro System</span>
      </h1>
      <p style="color: #cbd5e1; font-size: 0.97rem; line-height: 1.7; margin-bottom: 0;">
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
      <a href="https://github.com/nguyendinhchienvnex/Route-Expense-Tracking" target="_blank" rel="noopener noreferrer" class="btn btn-primary d-inline-flex align-items-center gap-2">
        <i class="bi bi-github"></i>
        <span class="lang-vi">Mã nguồn GitHub</span>
        <span class="lang-en">GitHub Repository</span>
      </a>
    </div>

  </div>

  <div class="ret-pill-row">
    <span class="ret-pill">Python 3.10+</span>
    <span class="ret-pill">PyQt6 &amp; WebEngine</span>
    <span class="ret-pill">Folium + Google Satellite</span>
    <span class="ret-pill">OSRM Routing API</span>
    <span class="ret-pill">TSP + 2-opt Algorithm</span>
    <span class="ret-pill">Geopy (Nominatim)</span>
    <span class="ret-pill">SQLite3 (WAL Mode)</span>
  </div>
</div>

<!-- 1. CÔNG NGHỆ & THƯ VIỆN SỬ DỤNG -->
<h2 class="ret-section-heading">
  <i class="bi bi-stack"></i>
  <span class="lang-vi">1. Công nghệ &amp; Kiến trúc Kỹ thuật</span>
  <span class="lang-en">1. Technology Stack &amp; Architecture</span>
</h2>

<div class="ret-table-wrap mb-4">
  <table class="ret-table">
    <thead>
      <tr>
        <th><span class="lang-vi">Thành phần</span><span class="lang-en">Component</span></th>
        <th><span class="lang-vi">Công nghệ / Thư viện</span><span class="lang-en">Tech / Library</span></th>
        <th><span class="lang-vi">Vai trò trong hệ thống</span><span class="lang-en">Role in System</span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong><span class="lang-vi">Ngôn ngữ lõi</span><span class="lang-en">Core Language</span></strong></td>
        <td>Python 3 (<code>3.10+</code>)</td>
        <td>
          <span class="lang-vi">Xử lý logic nghiệp vụ, thuật toán tối ưu lộ trình và đa luồng bất đồng bộ (<code>QThread</code>).</span>
          <span class="lang-en">Business logic, route optimization algorithms, and asynchronous multithreading (<code>QThread</code>).</span>
        </td>
      </tr>
      <tr>
        <td><strong><span class="lang-vi">Giao diện Desktop</span><span class="lang-en">Desktop GUI</span></strong></td>
        <td>PyQt6 (<code>QtWidgets</code>, <code>QtWebEngineWidgets</code>, <code>QtSvg</code>)</td>
        <td>
          <span class="lang-vi">Giao diện Dark Mode (Fusion), nhúng trình duyệt bản đồ tương tác và render biểu tượng SVG.</span>
          <span class="lang-en">Dark Mode (Fusion) UI, embedded interactive map browser, and SVG icon rendering.</span>
        </td>
      </tr>
      <tr>
        <td><strong><span class="lang-vi">Bản đồ &amp; Trực quan hóa</span><span class="lang-en">Mapping &amp; GIS</span></strong></td>
        <td>Folium + Google Satellite Tiles</td>
        <td>
          <span class="lang-vi">Kết xuất bản đồ vệ tinh tương tác ra HTML (<code>map_cache.html</code>) và hiển thị qua <code>QWebEngineView</code>.</span>
          <span class="lang-en">Renders interactive satellite maps to HTML (<code>map_cache.html</code>) displayed via <code>QWebEngineView</code>.</span>
        </td>
      </tr>
      <tr>
        <td><strong><span class="lang-vi">Tính toán Lộ trình</span><span class="lang-en">Routing Engine</span></strong></td>
        <td>OSRM API (<code>router.project-osrm.org</code>)</td>
        <td>
          <span class="lang-vi">Truy vấn khoảng cách và hình học tuyến đường lái xe thực tế theo mạng lưới giao thông.</span>
          <span class="lang-en">Queries real-world road-network driving distances and route geometries.</span>
        </td>
      </tr>
      <tr>
        <td><strong><span class="lang-vi">Định vị Địa lý</span><span class="lang-en">Geocoding</span></strong></td>
        <td><code>geopy</code> (Nominatim / OpenStreetMap)</td>
        <td>
          <span class="lang-vi">Chuyển đổi địa chỉ văn bản sang tọa độ địa lý <code>(latitude, longitude)</code> trên luồng nền <code>GeocodeWorker</code>.</span>
          <span class="lang-en">Converts text addresses into <code>(latitude, longitude)</code> coordinates on background <code>GeocodeWorker</code> threads.</span>
        </td>
      </tr>
      <tr>
        <td><strong><span class="lang-vi">Cơ sở dữ liệu</span><span class="lang-en">Database</span></strong></td>
        <td>SQLite3 (<code>WAL Mode</code>)</td>
        <td>
          <span class="lang-vi">Lưu trữ dữ liệu cục bộ hiệu năng cao với Triggers ràng buộc toàn vẹn và hỗ trợ truy cập đa luồng.</span>
          <span class="lang-en">High-performance local persistence with integrity Triggers and concurrent read/write support.</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<!-- 2. TÍNH NĂNG NỔI BẬT -->
<h2 class="ret-section-heading">
  <i class="bi bi-stars"></i>
  <span class="lang-vi">2. Tính năng Nổi bật theo Phân hệ</span>
  <span class="lang-en">2. Core Functional Modules</span>
</h2>

<div class="row g-3 mb-4">
  <div class="col-md-6">
    <div class="ret-card h-100 mb-0">
      <div class="ret-sub-heading">
        <i class="bi bi-map-fill"></i>
        <span class="lang-vi">Điều phối Lộ trình &amp; Bản đồ Vệ tinh</span>
        <span class="lang-en">Route Dispatching &amp; Satellite Mapping</span>
      </div>
      <ul class="ret-list">
        <li>
          <span class="lang-vi"><strong>Gom đơn thông minh:</strong> Chọn nhiều khách hàng từ CSDL; tự động tổng hợp danh mục và khối lượng hàng hóa cần giao.</span>
          <span class="lang-en"><strong>Smart Order Consolidation:</strong> Select multiple customers from the DB to automatically aggregate item quantities.</span>
        </li>
        <li>
          <span class="lang-vi"><strong>Bản đồ vệ tinh trực quan:</strong> Phân biệt màu sắc <strong>Kho hàng</strong> (tím), <strong>Xe sẵn sàng</strong> (xanh dương), <strong>Điểm giao</strong> (đỏ) và cho phép click trực tiếp lên bản đồ để thêm điểm giao tùy chỉnh.</span>
          <span class="lang-en"><strong>Interactive Satellite Map:</strong> Color-coded markers for <strong>Warehouses</strong> (purple), <strong>Available Trucks</strong> (blue), and <strong>Drop-offs</strong> (red), supporting direct map-click waypoints.</span>
        </li>
        <li>
          <span class="lang-vi"><strong>Tối ưu cặp (Xe + Kho xuất):</strong> Đối chiếu tải trọng xe, tồn kho thực tế và định mức nhiên liệu để đề xuất phương án tiết kiệm nhất.</span>
          <span class="lang-en"><strong>Optimal (Truck + Warehouse) Matching:</strong> Cross-checks vehicle capacity, warehouse stock, and fuel consumption to recommend the lowest-cost dispatch plan.</span>
        </li>
        <li>
          <span class="lang-vi"><strong>Xác nhận Xuất kho tự động:</strong> Tự động trừ tồn kho, chuyển trạng thái xe sang <code>In Delivery</code> và lưu biên bản vào bảng <code>reports</code>.</span>
          <span class="lang-en"><strong>Automated Dispatch &amp; Stock Deduction:</strong> Automatically deducts warehouse inventory, updates truck status to <code>In Delivery</code>, and logs records into <code>reports</code>.</span>
        </li>
      </ul>
    </div>
  </div>

  <div class="col-md-6">
    <div class="ret-card h-100 mb-0">
      <div class="ret-sub-heading">
        <i class="bi bi-truck"></i>
        <span class="lang-vi">Quản trị Tài nguyên, Bảo mật &amp; Báo cáo</span>
        <span class="lang-en">Resource Management, Security &amp; Reports</span>
      </div>
      <ul class="ret-list">
        <li>
          <span class="lang-vi"><strong>3 Tab quản trị độc lập:</strong> Quản lý <strong>ĐỘI XE</strong>, <strong>KHO HÀNG</strong> và <strong>KHÁCH HÀNG</strong> kèm định vị tọa độ tự động từ địa chỉ văn bản.</span>
          <span class="lang-en"><strong>3 Dedicated Admin Tabs:</strong> Manage <strong>TRUCKS</strong>, <strong>WAREHOUSES</strong>, and <strong>CUSTOMERS</strong> with automatic text-to-coordinate geocoding.</span>
        </li>
        <li>
          <span class="lang-vi"><strong>Toàn vẹn dữ liệu &amp; Khôi phục:</strong> Trigger CSDL tự động dọn dẹp tồn kho liên quan khi xóa tài nguyên; tích hợp nút <strong>FORCE RESET DATABASE</strong> khôi phục dữ liệu mẫu TP.HCM.</span>
          <span class="lang-en"><strong>Data Integrity &amp; Reset:</strong> SQLite Triggers automatically clean up orphaned inventory records; includes a <strong>FORCE RESET DATABASE</strong> utility with HCMC seed data.</span>
        </li>
        <li>
          <span class="lang-vi"><strong>Xác thực &amp; Duy trì phiên:</strong> Bảo mật mật khẩu bằng thuật toán băm <strong>SHA-256</strong> và ghi nhớ đăng nhập an toàn qua tệp <code>session.txt</code>.</span>
          <span class="lang-en"><strong>Authentication &amp; Session Persistence:</strong> Passwords hashed with <strong>SHA-256</strong> and persistent login sessions managed via <code>session.txt</code>.</span>
        </li>
        <li>
          <span class="lang-vi"><strong>Nhật ký Xuất kho:</strong> Theo dõi toàn bộ lịch sử điều phối (mã giao dịch, thời gian, loại hàng, khối lượng, biển số xe, kho xuất và đối tác nhận).</span>
          <span class="lang-en"><strong>Outbound Dispatch Logs:</strong> Full audit trail of transaction IDs, timestamps, cargo weights, assigned vehicles, origin warehouses, and recipients.</span>
        </li>
      </ul>
    </div>
  </div>
</div>

<!-- 3. THUẬT TOÁN & CÔNG THỨC TÍNH CHI PHÍ -->
<h2 class="ret-section-heading">
  <i class="bi bi-calculator-fill"></i>
  <span class="lang-vi">3. Thuật toán Tối ưu Lộ trình &amp; Công thức Chi phí</span>
  <span class="lang-en">3. Route Optimization Algorithm &amp; Cost Formula</span>
</h2>

<div class="ret-card mb-4">
  <div class="ret-sub-heading">
    <i class="bi bi-cpu"></i>
    <span class="lang-vi">Quy trình Giải thuật Đa điểm (Greedy TSP + 2-opt + OSRM)</span>
    <span class="lang-en">Multi-Stop Optimization Pipeline (Greedy TSP + 2-opt + OSRM)</span>
  </div>
  <ol class="ret-list mb-3">
    <li>
      <span class="lang-vi"><strong>Lọc điều kiện ràng buộc:</strong> Loại bỏ xe đang bận (<code>In Delivery</code>), xe thiếu tải trọng và các kho không đủ tồn kho cho toàn bộ đơn hàng gom.</span>
      <span class="lang-en"><strong>Constraint Filtering:</strong> Excludes busy trucks (<code>In Delivery</code>), under-capacity vehicles, and warehouses lacking required item stock.</span>
    </li>
    <li>
      <span class="lang-vi"><strong>Tối ưu thứ tự điểm dừng (TSP + 2-opt):</strong> Dựng lộ trình khởi tạo bằng giải thuật tham lam <strong>Nearest Neighbor (Greedy TSP)</strong> từ kho qua các điểm giao, sau đó hoán đổi cạnh bằng thuật toán <strong>2-opt</strong> để loại bỏ các đoạn đường giao chéo.</span>
      <span class="lang-en"><strong>Stop Ordering (TSP + 2-opt):</strong> Generates an initial route via <strong>Nearest Neighbor (Greedy TSP)</strong> and refines it with <strong>2-opt</strong> edge swaps to eliminate crossing paths.</span>
    </li>
    <li>
      <span class="lang-vi"><strong>Đo khoảng cách đường bộ thực tế &amp; Chọn phương án rẻ nhất:</strong> Truy vấn tổng quãng đường thực tế $D$ ($\text{km}$) qua <strong>OSRM API</strong>, tính chi phí nhiên liệu cho mọi cặp $(\text{Xe}_i, \text{Kho}_j)$ hợp lệ và chọn phương án tối ưu nhất.</span>
      <span class="lang-en"><strong>Real Road Distance &amp; Cost Selection:</strong> Fetches real-world driving distance $D$ ($\text{km}$) via <strong>OSRM API</strong>, evaluates fuel cost across all valid $(\text{Truck}_i, \text{Warehouse}_j)$ pairs, and selects the minimum-cost plan.</span>
    </li>
  </ol>

  <div class="ret-sub-heading">
    <i class="bi bi-fuel-pump-fill"></i>
    <span class="lang-vi">Công thức Tính Chi phí Nhiên liệu</span>
    <span class="lang-en">Fuel Cost Calculation Formula</span>
  </div>

  <div class="ret-formula-box">
    $$\text{Tổng chi phí (VNĐ)} = \left( \frac{D}{100} \right) \times C_{\text{fuel}} \times P_{\text{fuel}}$$
  </div>

  <ul class="ret-list">
    <li>$D$: <span class="lang-vi">Tổng quãng đường di chuyển thực tế tính theo mạng lưới đường bộ ($\text{km}$).</span><span class="lang-en">Total actual road-network driving distance ($\text{km}$).</span></li>
    <li>$C_{\text{fuel}}$: <span class="lang-vi">Định mức tiêu hao nhiên liệu của từng xe ($\text{lít} / 100\text{km}$).</span><span class="lang-en">Vehicle fuel consumption rate ($\text{liters} / 100\text{km}$).</span></li>
    <li>$P_{\text{fuel}}$: <span class="lang-vi">Đơn giá nhiên liệu cấu hình trong <code>core/algorithms.py</code> (<code>FUEL_PRICE_VND = 23500</code> $\text{VNĐ/lít}$).</span><span class="lang-en">Configured fuel unit price in <code>core/algorithms.py</code> (<code>FUEL_PRICE_VND = 23500</code> $\text{VND/liter}$).</span></li>
  </ul>
</div>

<!-- 4. KIẾN TRÚC THƯ MỤC & CƠ SỞ DỮ LIỆU -->
<h2 class="ret-section-heading">
  <i class="bi bi-folder-symlink-fill"></i>
  <span class="lang-vi">4. Cấu trúc Dự án &amp; Lược đồ SQLite (<code>logistics_system.db</code>)</span>
  <span class="lang-en">4. Project Structure &amp; SQLite Schema (<code>logistics_system.db</code>)</span>
</h2>

<div class="row g-3 mb-4">
  <div class="col-md-6">
    <div class="ret-card h-100 mb-0">
      <div class="ret-sub-heading">
        <i class="bi bi-diagram-2-fill"></i>
        <span class="lang-vi">Kiến trúc Phân tầng (GUI &amp; Core)</span>
        <span class="lang-en">Layered Architecture (GUI &amp; Core)</span>
      </div>
<pre class="ret-code-block">DC Smart Logistics Pro/
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
    <div class="ret-table-wrap h-100 mb-0">
      <table class="ret-table">
        <thead>
          <tr>
            <th><span class="lang-vi">Bảng</span><span class="lang-en">Table</span></th>
            <th><span class="lang-vi">Chức năng &amp; Trường dữ liệu chính</span><span class="lang-en">Role &amp; Key Columns</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>users</code></td>
            <td><span class="lang-vi">Tài khoản điều phối viên (<code>username</code>, <code>password</code> băm SHA-256).</span><span class="lang-en">Coordinator accounts (<code>username</code>, SHA-256 hashed <code>password</code>).</span></td>
          </tr>
          <tr>
            <td><code>trucks</code></td>
            <td><span class="lang-vi">Đội xe (<code>name</code>, <code>capacity</code>, <code>fuel_consumption</code>, <code>lat</code>, <code>lon</code>, <code>status</code>).</span><span class="lang-en">Fleet records (<code>name</code>, <code>capacity</code>, <code>fuel_consumption</code>, <code>lat</code>, <code>lon</code>, <code>status</code>).</span></td>
          </tr>
          <tr>
            <td><code>warehouses</code></td>
            <td><span class="lang-vi">Hệ thống kho bãi (<code>name</code>, <code>capacity</code>, <code>address</code>, <code>lat</code>, <code>lon</code>).</span><span class="lang-en">Warehouse facilities (<code>name</code>, <code>capacity</code>, <code>address</code>, <code>lat</code>, <code>lon</code>).</span></td>
          </tr>
          <tr>
            <td><code>customers</code></td>
            <td><span class="lang-vi">Điểm giao hàng (<code>name</code>, <code>address</code>, <code>lat</code>, <code>lon</code>).</span><span class="lang-en">Customer delivery nodes (<code>name</code>, <code>address</code>, <code>lat</code>, <code>lon</code>).</span></td>
          </tr>
          <tr>
            <td><code>inventory</code></td>
            <td><span class="lang-vi">Tồn kho xe/kho &amp; nhu cầu khách (<code>owner_type</code>, <code>owner_id</code>, <code>item_name</code>, <code>quantity</code>).</span><span class="lang-en">Vehicle/warehouse stock &amp; order demand (<code>owner_type</code>, <code>owner_id</code>, <code>item_name</code>, <code>quantity</code>).</span></td>
          </tr>
          <tr>
            <td><code>reports</code></td>
            <td><span class="lang-vi">Lịch sử lệnh điều phối và biên bản xuất kho đã xác nhận.</span><span class="lang-en">Confirmed dispatch orders and outbound warehouse logs.</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<!-- 5. HƯỚNG DẪN CÀI ĐẶT & KHỞI CHẠY -->
<h2 class="ret-section-heading">
  <i class="bi bi-terminal-fill"></i>
  <span class="lang-vi">5. Cài đặt &amp; Khởi chạy Ứng dụng</span>
  <span class="lang-en">5. Installation &amp; Quick Start</span>
</h2>

<div class="ret-card mb-0">
<pre class="ret-code-block"># 1. Tạo và kích hoạt môi trường ảo Python (Windows)
python -m venv venv
venv\Scripts\activate

# 2. Cài đặt các thư viện phụ thuộc (PyQt6, WebEngine, Folium, OSRM &amp; Geocoding)

pip install PyQt6 PyQt6-WebEngine folium requests geopy

# 3. Khởi chạy ứng dụng (tích hợp sẵn cờ chống lỗi render GPU cho WebEngine)

set QTWEBENGINE_DISABLE_GPU=1
python main.py</pre>

</div>
