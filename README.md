# **🌐** Developer Portfolio — Nguyễn Đình Chiến

Website Portfolio cá nhân, hồ sơ năng lực trực tuyến (CV) và blog chia sẻ kiến thức kỹ thuật của **Nguyễn Đình Chiến** — Fullstack Software Engineering, định hướng phát triển chuyên sâu về **Backend Engineering & DevOps**.

## <> Link website

- **Trang chủ chính thức:** [https://nguyendinhchienvnex.github.io/Developer-Profile](https://nguyendinhchienvnex.github.io/Developer-Profile/)

## 📖 Mục lục

- [ 1. Giới thiệu Dự án](#-1-giới-thiệu-dự-án)

- [ 2. Tính năng Nổi bật](#-2-tính-năng-nổi-bật)

- [ 3. Công nghệ Sử dụng](#-3-công-nghệ-sử-dụng)

- [ 4. Cấu trúc Thư mục](#-4-cấu-trúc-thư-mục)

- [ 5. Chi tiết Các trang Chính](#-5-chi-tiết-các-trang-chính)

- [ 6. Cài đặt & Chạy Cục bộ (Local)](#-6-cài-đặt--chạy-cục-bộ-local)

- [ 7. Triển khai lên GitHub Pages](#-7-triển-khai-lên-github-pages)

- [ 8. Hướng dẫn Tùy chỉnh](#-8-hướng-dẫn-tùy-chỉnh)

- [ 9. Lộ trình Phát triển (Roadmap)](#-9-lộ-trình-phát-triển-roadmap)

- [ 10. Đóng góp](#-10-đóng-góp)

- [ 11. Liên hệ](#-11-liên-hệ)

- [ 12. Giấy phép](#-12-giấy-phép)

## 1. Giới thiệu Dự án

Dự án này được xây dựng nhằm tạo ra một không gian số chuyên nghiệp để giới thiệu bản thân, kỹ năng chuyên môn, các dự án phần mềm đã thực hiện cũng như lưu trữ những bài viết kỹ thuật và đầu sách tâm đắc.

Sử dụng kiến trúc **Static Site Generation (SSG)** của **Jekyll** kết hợp cùng **GitHub Pages**, website đảm bảo:

- **Tốc độ tải trang tức thì:** Toàn bộ nội dung được biên dịch sẵn thành các tệp HTML/CSS tĩnh tối ưu.

- **Dễ dàng bảo trì & mở rộng:** Nội dung bài viết, dự án và CV được quản lý tập trung qua dữ liệu **YAML (`_data/`)** và **Markdown**, tách biệt hoàn toàn với tầng giao diện.

- **Chi phí vận hành bằng 0:** Lưu trữ và phân phối tự động thông qua hạ tầng CDN của GitHub Pages.

## 2. Tính năng Nổi bật

- **Thiết kế Responsive Đa thiết bị:** Tương thích hoàn hảo trên máy tính để bàn, máy tính bảng và điện thoại di động nhờ hệ thống lưới của **Bootstrap 5.3.3**.

- **Giao diện Hiện đại & Tối giản:** Sử dụng bộ phông chữ **Inter** kết hợp hệ thống màu sắc tùy biến mang lại trải nghiệm đọc thoải mái, tập trung vào nội dung.

- **Hỗ trợ Song ngữ (Tiếng Việt / Tiếng Anh):** Chuyển đổi ngôn ngữ tức thì trên toàn bộ trang nhờ `lang-init.js` và `lang-switcher.js` mà không gây nháy giao diện.

- **Tích hợp CV Trực tuyến & Tải PDF:** Trình bày chi tiết học vấn, kỹ năng kỹ thuật và kinh nghiệm dự án ngay trên web, kèm nút tải nhanh bản cứng `Nguyen_Dinh_Chien_CV.pdf`.

- **Quản lý Nội dung Dạng Module:** Phân tách rõ ràng giữa Trang chủ, CV, Dự án (kèm trang chi tiết từng dự án), Blog kỹ thuật, Tủ sách và Kỷ niệm.

- **Tối ưu SEO & Chia sẻ:** Hỗ trợ cấu hình metadata chuẩn hóa qua tệp `_config.yml`.

## 3. Công nghệ Sử dụng

| Thành phần                | Công nghệ / Thư viện                | Vai trò trong hệ thống                                                              |
| ------------------------- | ----------------------------------- | ----------------------------------------------------------------------------------- |
| **Static Site Generator** | Jekyll (`4.3+`)                     | Biên dịch Markdown, Liquid templates và SCSS thành website tĩnh.                    |
| **Template Engine**       | Liquid                              | Xử lý vòng lặp, điều kiện, nhúng layout và biến cấu hình toàn cục.                  |
| **UI Framework**          | Bootstrap `5.3.3` & Icons `1.11.3`  | Xây dựng bố cục lưới (Grid), thanh điều hướng (Navbar) và hệ thống biểu tượng.      |
| **Typography & Styling**  | Google Fonts (`Inter`) + Custom CSS | Định hình phong cách thiết kế tối giản, hiện đại và module hóa theo từng trang.     |
| **Client-side Scripts**   | Vanilla JavaScript (ES6+)           | Xử lý chuyển đổi ngôn ngữ VI/EN, cuộn mượt và trình xem ảnh Lightbox.              |
| **Data & Content**        | YAML (`_data/*.yml`) & Markdown     | Lưu trữ dữ liệu có cấu trúc (profile, CV, dự án, blog, sách, kỷ niệm) và nội dung.  |
| **Hosting & CI/CD**       | GitHub Pages                        | Tự động build và triển khai website mỗi khi có commit mới lên nhánh chính.          |

## 4. Cấu trúc Thư mục

```text
github-portfolio/
├── _config.yml                      # Tệp cấu hình trung tâm của Jekyll (tiêu đề, URL, điều hướng, collections)
├── index.md                         # Trang chủ (Home) giới thiệu tổng quan về tác giả
├── Nguyen_Dinh_Chien_CV.pdf         # Tệp CV định dạng PDF cho phép nhà tuyển dụng tải trực tiếp
├── README.md                        # Tài liệu hướng dẫn và giới thiệu mã nguồn dự án
│
├── _data/                           # Kho dữ liệu nội dung có cấu trúc (YAML)
│   ├── profile.yml                  # Thông tin cá nhân, liên hệ & avatar
│   ├── home.yml                     # Chỉ số đánh giá & tech stack trang chủ
│   ├── navigation.yml               # Danh mục điều hướng thanh Navbar
│   ├── cv.yml                       # Kinh nghiệm làm việc, kỹ năng, học vấn
│   ├── projects.yml                 # Danh sách dự án (doanh nghiệp & cá nhân)
│   ├── chien_store.yml              # Chi tiết kỹ thuật dự án Chien Store
│   ├── route_expense_tracking.yml   # Chi tiết kỹ thuật dự án Route-Expense-Tracking
│   ├── blog.yml                     # Nội dung 3 trụ cột ghi chép kỹ thuật
│   ├── books.yml                    # Danh sách sách & tư duy phát triển
│   └── memories.yml                 # Dữ liệu các album kỷ niệm & cột mốc
│
├── _layouts/
│   └── default.html                 # Khung giao diện HTML gốc (Header, Navbar, Sidebar, Footer)
│
├── _includes/                       # Các thành phần giao diện tái sử dụng
│   ├── head.html                    # Thẻ <head>: meta, Bootstrap CDN, Google Fonts, CSS
│   ├── navbar.html                  # Thanh điều hướng + bộ chuyển đổi ngôn ngữ VI/EN
│   ├── sidebar.html                 # Thẻ thông tin giới thiệu tác giả
│   ├── footer.html                  # Chân trang + nút cuộn về đầu trang
│   └── scripts.html                 # Nhúng Bootstrap JS, ui-scroll, lang-switcher
│
├── _pages/                          # Thư mục chứa toàn bộ các trang nội dung chính của website
│   ├── cv.md                        # Trang Hồ sơ năng lực (Curriculum Vitae)
│   ├── projects.md                  # Trang Trưng bày các dự án tiêu biểu
│   ├── blog.md                      # Trang Danh sách bài viết & chia sẻ kỹ thuật
│   ├── books.md                     # Trang Review & tổng hợp sách chuyên ngành/kỹ năng
│   ├── memories.md                  # Trang Lưu trữ kỷ niệm & album ảnh
│   ├── store-image.md               # Trang Lightbox xem ảnh phóng to từng album
│   └── projects/                    # Các trang phân tích chi tiết từng dự án cá nhân
│       ├── chien-store.md           # Chi tiết dự án Chien Store
│       ├── route-expense-tracking.md # Chi tiết dự án Route-Expense-Tracking
│       ├── milk-world-app.md        # Dự án Milk World App (sắp ra mắt)
│       └── toeic-learning-platform.md # Dự án TOEIC Learning Platform (sắp ra mắt)
│
└── assets/                          # Tài nguyên tĩnh (CSS, JS, Hình ảnh)
    ├── css/
    │   ├── main.css                 # Stylesheet chính toàn trang
    │   └── pages/                   # CSS riêng biệt cho từng trang (home, cv, projects, ...)
    ├── js/
    │   ├── lang-init.js             # Khởi tạo ngôn ngữ sớm tránh nháy giao diện
    │   ├── lang-switcher.js         # Xử lý chuyển đổi ngôn ngữ VI/EN
    │   ├── ui-scroll.js             # Hiệu ứng cuộn mượt & nút back-to-top
    │   └── pages/store-image.js     # Xử lý hiển thị ảnh chi tiết từng album
    └── images/                      # Ảnh đại diện, favicon, ảnh minh họa dự án & album kỷ niệm
```

## 5. Chi tiết Các trang Chính

| Tệp nguồn                  | Đường dẫn (Permalink)                | Mô tả chức năng & Nội dung                                                                                                  |
| -------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `index.md`                 | `/`                                  | **Trang chủ:** Lời chào, tóm tắt định hướng nghề nghiệp (Backend/DevOps), chỉ số đánh giá, kỹ năng cốt lõi và liên kết nhanh. |
| `_pages/cv.md`             | `/cv/`                               | **Hồ sơ năng lực:** Thông tin học vấn tại HV Kỹ thuật Mật mã, kinh nghiệm làm việc, kỹ năng chuyên môn và liên kết tải PDF. |
| `_pages/projects.md`       | `/projects/`                         | **Dự án:** Trình bày chi tiết các sản phẩm phần mềm doanh nghiệp & cá nhân, kiến trúc công nghệ và liên kết mã nguồn GitHub. |
| `_pages/projects/*.md`     | `/projects/<ten-du-an>/`             | **Chi tiết Dự án:** Phân tích chuyên sâu từng dự án cá nhân (`Chien Store`, `Route-Expense-Tracking`, v.v.).                |
| `_pages/blog.md`           | `/blog/`                             | **Blog Kỹ thuật:** Nơi ghi chép kiến thức lập trình, quản trị hệ thống, Linux, Docker và kinh nghiệm giải quyết vấn đề.     |
| `_pages/books.md`          | `/books/`                            | **Tủ sách:** Tổng hợp và tóm tắt những cuốn sách hay về tư duy kỹ thuật, kiến trúc phần mềm và phát triển bản thân.         |
| `_pages/memories.md`       | `/memories/`                         | **Kỷ niệm:** Không gian lưu giữ các cột mốc đáng nhớ trong quá trình học tập (Lễ Bế Giảng, Dinh Độc Lập...).               |
| `_pages/store-image.md`    | `/storeImage/`                       | **Xem ảnh:** Trình xem ảnh Lightbox phóng to từng bức ảnh trong các album kỷ niệm.                                          |

## 6. Cài đặt & Chạy Cục bộ (Local)

Để chạy và xem trước website trên máy tính cá nhân trước khi đẩy lên GitHub, hãy thực hiện theo các bước sau:

### Bước 1: Yêu cầu Môi trường

Đảm bảo máy tính của bạn đã cài đặt:

- **Ruby** (phiên bản `3.0` trở lên) và **RubyGems**

- **Bundler** (`gem install bundler`)

- **Git**

### Bước 2: Sao chép mã nguồn & Cài đặt thư viện

```bash
# 1. Clone repository về máy
git clone https://github.com/nguyendinhchienvnex/Developer-Profile.git
cd Developer-Profile

# 2. Cài đặt Jekyll và các gem phụ thuộc (nếu có Gemfile)
bundle install
# Hoặc cài đặt trực tiếp Jekyll nếu chưa có Gemfile:
gem install jekyll bundler
```

### Bước 3: Khởi chạy máy chủ phát triển

```bash
bundle exec jekyll serve --livereload
```

Sau khi biên dịch hoàn tất, mở trình duyệt và truy cập **`http://127.0.0.1:4000/Developer-Profile/`**. Tham số `--livereload` giúp trình duyệt tự động làm mới mỗi khi bạn chỉnh sửa mã nguồn.

## 7. Triển khai lên GitHub Pages

Website được thiết kế để triển khai tự động trên **GitHub Pages** chỉ với vài thao tác đơn giản:

1. Đẩy toàn bộ mã nguồn lên repository GitHub của bạn (đặt tên repository theo định dạng `<username>.github.io` hoặc cấu hình `baseurl` tương ứng).

2. Truy cập tab **Settings** $\rightarrow$ chọn mục **Pages** ở thanh menu bên trái.

3. Tại phần **Build and deployment**:
   - **Source:** Chọn `Deploy from a branch`.

   - **Branch:** Chọn nhánh `main` (hoặc `master`), thư mục `/ (root)` và nhấn **Save**.

4. Chờ khoảng 1–2 phút để hệ thống GitHub Actions tự động build Jekyll. Khi hoàn tất, đường dẫn website trực tuyến sẽ hiển thị ngay phía trên mục cấu hình.

## 8. Hướng dẫn Tùy chỉnh

Bạn có thể dễ dàng cá nhân hóa portfolio này theo nhu cầu của riêng mình:

- **Thông tin cấu hình chung:** Chỉnh sửa tệp `_config.yml` để thay đổi tiêu đề trang (`title`), mô tả (`description`), đường dẫn gốc (`url`, `baseurl`) và cấu trúc thanh điều hướng (`_data/navigation.yml`).

- **Dữ liệu nội dung các mục:** Cập nhật trực tiếp các tệp YAML trong thư mục `_data/` (`profile.yml`, `cv.yml`, `projects.yml`, `blog.yml`, `books.yml`, `memories.yml`, ...).

- **Khung giao diện & Màu sắc:** Tùy chỉnh mã HTML tại `_layouts/default.html`, `_includes/` hoặc viết thêm CSS tại `assets/css/main.css` và `assets/css/pages/`.

- **Hình ảnh & CV:** Thay thế các hình ảnh trong thư mục `assets/images/` và cập nhật tệp `Nguyen_Dinh_Chien_CV.pdf` mới nhất tại thư mục gốc.

- **Nội dung các trang:** Chỉnh sửa trực tiếp các tệp Markdown trong thư mục `_pages/` và `index.md`.

## 9. Lộ trình Phát triển (Roadmap)

- [x] Xây dựng cấu trúc nền tảng với Jekyll & Bootstrap 5.3.3.

- [x] Hoàn thiện các trang cốt lõi: Home, CV, Projects, Blog, Books, Memories.

- [x] Tích hợp cơ chế chuyển đổi song ngữ (Tiếng Việt / Tiếng Anh).

- [x] Tích hợp tải CV định dạng PDF trực tiếp.

- [ ] Hoàn thiện nội dung chi tiết cho các dự án sắp ra mắt (`Milk World App`, `TOEIC Learning Platform`).

- [ ] Bổ sung tính năng chuyển đổi giao diện Sáng / Tối (**Dark / Light Mode Toggle**).

- [ ] Tích hợp hệ thống phân loại bài viết theo thẻ (`Tags` / `Categories`) cho trang Blog.

- [ ] Thêm biểu mẫu liên hệ nhanh trực tiếp trên website.

## 10. Đóng góp

Mọi ý kiến đóng góp, báo lỗi giao diện hoặc đề xuất cải tiến đều được hoan nghênh! Nếu bạn muốn đóng góp cho dự án:

1. **Fork** repository này về tài khoản GitHub của bạn.

2. Tạo một nhánh tính năng mới: `git checkout -b feature/ten-tinh-nang`.

3. Commit các thay đổi của bạn: `git commit -m "feat: mô tả ngắn gọn thay đổi"`.

4. Đẩy nhánh lên GitHub: `git push origin feature/ten-tinh-nang`.

5. Mở một **Pull Request** để cùng trao đổi và hợp nhất mã nguồn.

## 11. Liên hệ

Nếu bạn có bất kỳ câu hỏi nào hoặc muốn trao đổi về cơ hội hợp tác, thực tập và công việc trong lĩnh vực **Backend / DevOps**, vui lòng liên hệ với tôi qua:

- **Tác giả:** Nguyễn Đình Chiến (Chris Nguyen)

- **Email:** `nguyendinhchienvnex@gmail.com`

- **Điện thoại:** `+84 981646705`

- **GitHub:** `https://github.com/nguyendinhchienvnex`

- **LinkedIn:** `https://linkedin.com/in/chien-nguyen-dinh`

- **Địa điểm:** TP. Hồ Chí Minh, Việt Nam

## 12. Giấy phép

Dự án này được phát hành dưới giấy phép **MIT License**. Bạn được tự do sử dụng, sao chép, chỉnh sửa và phân phối lại mã nguồn cho mục đích cá nhân hoặc thương mại với điều kiện giữ lại thông báo bản quyền của tác giả.