# Web CV - Hồ Sơ Cá Nhân Trực Tuyến

## 📋 Giới Thiệu

Web CV chuyên nghiệp với thiết kế hiện đại, responsive và nhiều tính năng tương tác. Dễ dàng tùy chỉnh thông tin cá nhân và xuất ra PDF.

## ✨ Tính Năng

### 🎨 Giao Diện
- ✅ Thiết kế hiện đại, chuyên nghiệp
- ✅ Responsive - tương thích mọi thiết bị
- ✅ Chế độ sáng/tối (Dark/Light mode)
- ✅ Animations mượt mà
- ✅ Màu sắc và layout đẹp mắt

### 🛠️ Tính Năng Tương Tác
- ✅ **Chế độ chỉnh sửa**: Click nút "Chỉnh sửa" để sửa trực tiếp trên trang
- ✅ **Tải ảnh đại diện**: Click vào ảnh để thay đổi
- ✅ **Lưu thông tin**: Dữ liệu được lưu tự động vào trình duyệt
- ✅ **In/Xuất PDF**: Click nút "In CV" hoặc Ctrl+P
- ✅ **Thanh tiến trình kỹ năng**: Hiển thị trực quan mức độ kỹ năng

### ⌨️ Phím Tắt
- `Ctrl/Cmd + P`: In CV hoặc lưu PDF
- `Ctrl/Cmd + E`: Bật/tắt chế độ chỉnh sửa

## 🚀 Cách Sử Dụng

### Bước 1: Mở File
Mở file `index.html` bằng trình duyệt web (Chrome, Firefox, Edge, Safari...)

### Bước 2: Chỉnh Sửa Thông Tin

#### Cách 1: Chỉnh sửa trực tiếp trên trang
1. Click nút **"Chỉnh sửa"** ở góc trên bên phải
2. Click vào bất kỳ phần nào để chỉnh sửa
3. Click **"Lưu"** khi hoàn tất

#### Cách 2: Chỉnh sửa file HTML
Mở file `index.html` bằng trình soạn thảo code và sửa các phần sau:

**Thông Tin Cá Nhân:**
```html
<h1 class="name">TÊN CỦA BẠN</h1>
<h2 class="job-title">Vị trí công việc</h2>
```

**Thông Tin Liên Hệ:**
```html
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>Số điện thoại của bạn</span>
</div>
```

**Giới Thiệu:**
```html
<p class="about-text">
    Viết giới thiệu về bản thân...
</p>
```

**Kỹ Năng:**
```html
<div class="skill-item">
    <div class="skill-name">Tên kỹ năng</div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 90%;"></div>
    </div>
</div>
```
*Thay đổi giá trị `width` từ 0% đến 100% để điều chỉnh mức độ kỹ năng*

### Bước 3: Thay Đổi Ảnh Đại Diện

#### Cách 1: Click vào ảnh trên trang web
- Click vào ảnh đại diện
- Chọn file ảnh từ máy tính
- Ảnh sẽ được lưu tự động

#### Cách 2: Thay thế trong code
```html
<img src="đường-dẫn-ảnh-của-bạn.jpg" alt="Profile Picture">
```

### Bước 4: Tùy Chỉnh Màu Sắc

Mở file `style.css` và chỉnh sửa các biến màu:

```css
:root {
    --primary-color: #2c3e50;     /* Màu chính */
    --secondary-color: #3498db;   /* Màu phụ */
    --accent-color: #e74c3c;      /* Màu nhấn */
    --text-color: #333;           /* Màu chữ */
    --light-bg: #f8f9fa;          /* Màu nền sáng */
}
```

## 📱 Responsive Design

CV tự động điều chỉnh để hiển thị đẹp trên:
- 💻 Desktop (máy tính)
- 📱 Tablet (máy tính bảng)
- 📱 Mobile (điện thoại)

## 🖨️ In và Xuất PDF

### Cách 1: Sử dụng nút trên trang
Click nút **"In CV"** ở góc dưới bên phải

### Cách 2: Phím tắt
Nhấn `Ctrl + P` (Windows) hoặc `Cmd + P` (Mac)

### Cách 3: Menu trình duyệt
File → Print → Chọn "Save as PDF"

**Lưu ý khi in:**
- Chọn giấy A4
- Orientation: Portrait (dọc)
- Margins: Default hoặc None
- Background graphics: Bật (để in màu nền)

## 🎨 Tùy Chỉnh Nâng Cao

### Thêm/Bớt Section
Bạn có thể thêm hoặc xóa các phần như:
- Giải thưởng
- Hoạt động tình nguyện
- Tham khảo
- Portfolio

Template:
```html
<section class="cv-section">
    <h3 class="section-title">
        <i class="fas fa-award"></i>
        Tên Section
    </h3>
    <div class="section-content">
        Nội dung...
    </div>
</section>
```

### Thêm Dự Án Mới
```html
<div class="project-card">
    <h4>Tên Dự Án</h4>
    <p class="project-tech">Công nghệ sử dụng</p>
    <p class="project-desc">Mô tả dự án...</p>
    <a href="link" class="project-link">
        <i class="fas fa-external-link-alt"></i> Xem demo
    </a>
</div>
```

### Thay Đổi Font Chữ
Thêm vào `style.css`:
```css
body {
    font-family: 'Tên Font', sans-serif;
}
```

Hoặc import Google Fonts trong `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
```

## 🌐 Deploy Lên Web

### Cách 1: GitHub Pages
1. Tạo repository trên GitHub
2. Upload 3 files: `index.html`, `style.css`, `script.js`
3. Settings → Pages → Enable GitHub Pages
4. Truy cập: `username.github.io/repository-name`

### Cách 2: Netlify
1. Đăng ký tài khoản Netlify
2. Drag & drop thư mục chứa CV
3. Nhận link miễn phí

### Cách 3: Vercel
1. Đăng ký tài khoản Vercel
2. Import project từ GitHub
3. Deploy tự động

## 📂 Cấu Trúc File

```
cv-web/
├── index.html      # File HTML chính
├── style.css       # File CSS cho giao diện
├── script.js       # File JavaScript cho tính năng tương tác
└── README.md       # Hướng dẫn sử dụng
```

## 🔧 Yêu Cầu

- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- Không cần cài đặt thêm gì

## 📝 Checklist Hoàn Thiện CV

- [ ] Thay đổi tên và vị trí công việc
- [ ] Cập nhật thông tin liên hệ
- [ ] Thay ảnh đại diện
- [ ] Viết phần giới thiệu
- [ ] Liệt kê kỹ năng và điều chỉnh mức độ
- [ ] Thêm kinh nghiệm làm việc
- [ ] Cập nhật học vấn
- [ ] Thêm dự án tiêu biểu
- [ ] Liệt kê chứng chỉ
- [ ] Cập nhật sở thích
- [ ] Thêm link LinkedIn, GitHub
- [ ] Kiểm tra chính tả
- [ ] Test trên điện thoại
- [ ] In thử và kiểm tra PDF
- [ ] Deploy lên web (nếu muốn)

## 💡 Tips

1. **Giữ CV ngắn gọn**: Tối đa 2 trang khi in
2. **Sử dụng động từ hành động**: "Phát triển", "Thiết kế", "Quản lý"...
3. **Số liệu cụ thể**: "Tăng hiệu suất 30%", "Quản lý team 5 người"
4. **Cập nhật thường xuyên**: Thêm dự án và kỹ năng mới
5. **Chọn màu phù hợp**: Màu chuyên nghiệp, không quá rực rỡ
6. **Kiểm tra responsive**: Mở trên nhiều thiết bị

## 🎯 Các Section Thường Dùng

### Bắt Buộc
- ✅ Thông tin cá nhân
- ✅ Giới thiệu/Mục tiêu
- ✅ Kinh nghiệm làm việc
- ✅ Học vấn
- ✅ Kỹ năng

### Tùy Chọn
- 📌 Dự án
- 📌 Chứng chỉ
- 📌 Giải thưởng
- 📌 Hoạt động tình nguyện
- 📌 Sở thích
- 📌 Ngôn ngữ
- 📌 Tham khảo

## 🐛 Troubleshooting

**Vấn đề: Ảnh không hiển thị**
- Kiểm tra đường dẫn ảnh
- Đảm bảo file ảnh cùng thư mục hoặc dùng URL đầy đủ

**Vấn đề: Màu sắc không đúng**
- Xóa cache trình duyệt (Ctrl + F5)
- Kiểm tra file CSS đã được link đúng

**Vấn đề: Không in được màu nền**
- Bật "Background graphics" trong print settings

**Vấn đề: Không lưu được thông tin**
- Kiểm tra trình duyệt có cho phép localStorage
- Thử trình duyệt khác

## 📞 Hỗ Trợ

Nếu gặp vấn đề, bạn có thể:
1. Kiểm tra Console trong Developer Tools (F12)
2. Đọc lại hướng dẫn
3. Search Google với từ khóa liên quan

## 📜 License

Free to use - Tự do sử dụng và chỉnh sửa theo nhu cầu!

## ⭐ Tính Năng Nổi Bật

- 🎨 Thiết kế đẹp mắt, chuyên nghiệp
- 📱 Responsive hoàn hảo
- ⚡ Tải nhanh, không cần server
- 🌙 Dark mode
- ✏️ Edit mode - chỉnh sửa trực tiếp
- 💾 Tự động lưu
- 🖨️ In/Export PDF dễ dàng
- 🎯 Dễ tùy chỉnh
- 🚀 Deploy lên web miễn phí

---

**Chúc bạn tạo CV thành công! 🎉**

*Tip: Hãy cá nhân hóa CV của bạn để nổi bật hơn so với người khác!*

