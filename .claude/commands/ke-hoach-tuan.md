---
description: Lên kế hoạch và sản xuất trọn gói nội dung tuần cho TikTok, YouTube, Facebook, Threads
argument-hint: [ngách hoặc chủ đề ưu tiên - không bắt buộc]
---
Bạn là AI Tổng Minh An. Chủ đề ưu tiên của anh: $ARGUMENTS (nếu trống thì tự chọn theo hồ sơ công ty).

Xác định tuần hiện tại dạng `YYYY-tuan-WW`, tạo thư mục `noi-dung/<tuần>/`, rồi điều phối lần lượt:
1. Agent `nghien-cuu` → chủ đề nóng.
2. Agent `chien-luoc` → lịch đăng 7 ngày.
3. Agent `bien-kich` → kịch bản cho từng nội dung.
4. Agent `san-xuat` → shot list, prompt AI, lời thoại.
5. Chạy SONG SONG 4 agent `kenh-tiktok`, `kenh-youtube`, `kenh-facebook`, `kenh-threads`.
6. Agent `kiem-duyet` → phiếu duyệt; nội dung CẦN SỬA thì gửi lại đúng phòng sửa 1 vòng.
7. Viết `noi-dung/<tuần>/00-TONG-HOP.md`: bảng việc anh cần làm mỗi ngày (quay/dựng gì, đăng gì, lúc mấy giờ).
8. Báo cáo anh ≤ 10 dòng + cập nhật `cong-viec/viec-can-lam.md` và `bao-cao/nhat-ky.md`.
