# HƯỚNG DẪN NHANH - CUSTOM CV WEB

## 🎯 THAY ĐỔI THÔNG TIN CƠ BẢN

### 1. Tên và Chức Danh
Tìm và sửa trong `index.html`:
```html
<h1 class="name">NGUYỄN VĂN A</h1>          <!-- Đổi tên -->
<h2 class="job-title">Full Stack Developer</h2>  <!-- Đổi chức danh -->
```

### 2. Thông Tin Liên Hệ
```html
<!-- Số điện thoại -->
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>+84 123 456 789</span>  <!-- Đổi SĐT -->
</div>

<!-- Email -->
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>email@example.com</span>  <!-- Đổi email -->
</div>

<!-- Địa chỉ -->
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>Hà Nội, Việt Nam</span>  <!-- Đổi địa chỉ -->
</div>
```

### 3. Ảnh Đại Diện
Cách 1: Dùng ảnh từ máy tính
```html
<img src="my-photo.jpg" alt="Profile Picture">
```

Cách 2: Dùng link ảnh online
```html
<img src="https://example.com/photo.jpg" alt="Profile Picture">
```

Cách 3: Click vào ảnh trên web để upload

---

## 🎨 ĐỔI MÀU SẮC

Mở file `style.css`, tìm `:root` và đổi màu:

```css
:root {
    --primary-color: #2c3e50;     /* Màu tiêu đề */
    --secondary-color: #3498db;   /* Màu nút, icon */
    --accent-color: #e74c3c;      /* Màu nhấn */
}
```

### Gợi ý màu đẹp:

**Professional Blue:**
```css
--primary-color: #1e3a8a;
--secondary-color: #3b82f6;
--accent-color: #60a5fa;
```

**Modern Green:**
```css
--primary-color: #065f46;
--secondary-color: #10b981;
--accent-color: #34d399;
```

**Creative Purple:**
```css
--primary-color: #581c87;
--secondary-color: #a855f7;
--accent-color: #c084fc;
```

**Classic Black:**
```css
--primary-color: #000000;
--secondary-color: #374151;
--accent-color: #6b7280;
```

---

## ✏️ SỬA NỘI DUNG

### Giới Thiệu
```html
<p class="about-text">
    Viết giới thiệu về bản thân ở đây...
</p>
```

### Thêm/Sửa Kỹ Năng
```html
<div class="skill-item">
    <div class="skill-name">Tên Kỹ Năng</div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%;"></div>  <!-- 0-100% -->
    </div>
</div>
```

### Thêm Kinh Nghiệm
```html
<div class="timeline-item">
    <div class="timeline-date">01/2023 - Hiện tại</div>
    <div class="timeline-content">
        <h4>Chức vụ</h4>
        <p class="company-name">Tên Công ty</p>
        <ul class="responsibilities">
            <li>Công việc 1</li>
            <li>Công việc 2</li>
            <li>Công việc 3</li>
        </ul>
    </div>
</div>
```

### Thêm Dự Án
```html
<div class="project-card">
    <h4>Tên Dự Án</h4>
    <p class="project-tech">React, Node.js, MongoDB</p>
    <p class="project-desc">Mô tả ngắn gọn về dự án...</p>
    <a href="https://demo-link.com" class="project-link">
        <i class="fas fa-external-link-alt"></i> Xem demo
    </a>
</div>
```

---

## 🔧 TÍNH NĂNG NHANH

### Chế Độ Chỉnh Sửa
1. Click nút **"Chỉnh sửa"** (góc trên phải)
2. Click vào bất kỳ text nào để sửa
3. Click **"Lưu"** khi xong

### Đổi Chế Độ Tối
- Click nút **🌙** (góc dưới trái)

### In/Lưu PDF
- Click nút **"In CV"** (góc dưới phải)
- Hoặc nhấn `Ctrl + P`
- Chọn "Save as PDF"

---

## 📱 KIỂM TRA RESPONSIVE

Test trên nhiều kích thước:
1. Mở Developer Tools (F12)
2. Click icon điện thoại
3. Chọn các thiết bị khác nhau

---

## 🚀 DEPLOY LÊN WEB

### GitHub Pages (Miễn phí)
```bash
1. Tạo repo mới trên GitHub
2. Upload các file
3. Settings → Pages → Enable
4. Truy cập: yourusername.github.io/repo-name
```

### Netlify (Drag & Drop)
```
1. Truy cập netlify.com
2. Drag thư mục cv-web vào
3. Nhận link ngay lập tức
```

---

## ⚡ TIPS NHANH

### Làm CV Nổi Bật
- ✅ Dùng số liệu cụ thể: "Tăng 30% hiệu suất"
- ✅ Động từ hành động: "Phát triển", "Thiết kế", "Quản lý"
- ✅ Giữ CV ngắn gọn: Tối đa 2 trang
- ✅ Kiểm tra chính tả kỹ

### Màu Sắc
- 🎨 Dùng tối đa 3 màu chính
- 🎨 Màu phải hài hòa, dễ đọc
- 🎨 Tránh màu quá chói

### Nội Dung
- 📝 Ưu tiên kinh nghiệm gần nhất
- 📝 Liệt kê kỹ năng phù hợp với công việc
- 📝 Thêm link portfolio, GitHub

---

## 🆘 XỬ LÝ LỖI NHANH

**Lỗi: Không thấy thay đổi**
→ Nhấn Ctrl + F5 để refresh

**Lỗi: Màu không đổi**
→ Kiểm tra đã lưu file CSS chưa

**Lỗi: Font-awesome không hiện**
→ Kiểm tra kết nối internet

**Lỗi: Layout bị vỡ**
→ Kiểm tra đã đóng đúng thẻ HTML

---

## 📋 CHECKLIST TRƯỚC KHI GỬI CV

- [ ] Đã đổi tên và thông tin liên hệ
- [ ] Đã thay ảnh đại diện
- [ ] Đã sửa tất cả nội dung mẫu
- [ ] Đã kiểm tra chính tả
- [ ] Đã test trên điện thoại
- [ ] Đã test in PDF
- [ ] Link LinkedIn, GitHub hoạt động
- [ ] Màu sắc phù hợp
- [ ] Nội dung ngắn gọn, súc tích

---

## 🎓 TÀI LIỆU THAM KHẢO

- Font Awesome Icons: https://fontawesome.com/icons
- Màu sắc: https://colorhunt.co
- Google Fonts: https://fonts.google.com
- Cảm hứng thiết kế: https://dribbble.com/tags/cv

---

**Chúc bạn thành công! 🎉**

*Lưu file này để tham khảo nhanh khi cần!*

