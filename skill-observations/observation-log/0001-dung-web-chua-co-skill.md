---
id: 1
title: "Dựng nhiều website: chưa có phòng ban hay skill nào phụ trách, AI Tổng phải tự làm toàn bộ"
status: open
type: internal
skill: []
proposes_skill: [dung-web]
target_file: []
siblings_checked: "none — chưa có skill nào cùng họ (không có skill dựng web trong dự án)"
area: "quy trình dựng web trong thư mục web/"
date: 2026-11-16
session_context: "Anh Hòa nhờ dựng 20 website bán hàng + 1 web quản lý; đã dựng 10 web + Trung tâm điều hành trong web/"
parked_until:
resolved:
resolution:
reference: "web/DOC-TRUOC.md"
commands_verified: none
---

**Issue:** Yêu cầu dựng hàng loạt website không khớp phòng ban nào trong CLAUDE.md (11 phòng đều là nội dung/kênh/tư vấn). AI Tổng tự làm theo một quy trình lặp lại được: (1) chụp ảnh Awwwards/SiteInspire/web đối thủ bằng Playwright để chọn phong cách khác ngành, (2) viết lõi chung `web/chung/kolai.js` (giỏ hàng, đặt đơn, VietQR, thu email, thống kê) + `cau-hinh.js`, (3) mỗi web một file HTML tự vẽ hình bằng CSS/SVG vì bản xem thử không tải được ảnh ngoài, (4) chạy thử tự động bằng Playwright rồi mới xuất bản, (5) xuất bản thành một Artifact nhiều trang để anh xem trên điện thoại. Ba lỗi lặp lại chỉ lộ ra khi chụp ảnh hoặc bấm thử: thuộc tính `hidden` bị `display:flex` đè làm lớp phủ che cả trang; `script.onload = cb` truyền Event vào tham số báo lỗi; bán kính bo `999px` dùng chung cho nút làm hộp thoại biến dạng. Awwwards chặn trình duyệt tự động, chỉ lấy được danh sách tên.

**Suggested improvement:** Tạo skill `dung-web` (hoặc phòng ban "Lập trình web") ghi lại quy trình 5 bước trên, danh sách kiểm tra trước khi báo xong (chụp máy tính + điện thoại, kiểm tra tràn ngang, bấm thử luồng đặt đơn, kiểm tra chữ tiếng Việt có dấu với từng font), và quy ước: mọi web mới phải dùng lõi `web/chung/` và khai báo trong `cau-hinh.js` để Trung tâm tự nhận.

**Principle:** Khi một loại việc nhiều bước xuất hiện mà không phòng ban nào nhận, quy trình vừa làm xong là bản nháp của skill mới; ghi lại ngay các bước và các lỗi chỉ lộ ra khi kiểm thử thật, vì lần sau sẽ lặp lại đúng những lỗi đó.
