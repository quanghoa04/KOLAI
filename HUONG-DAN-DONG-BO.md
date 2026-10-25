# Đồng bộ 3 thiết bị: Desktop (chạy chính 24/7) · Laptop · Điện thoại

## Nguyên tắc (nhớ 1 câu)
> **Mọi việc chạy trên Desktop. Laptop và điện thoại chỉ là "màn hình điều khiển".**
> Chữ (kịch bản, kế hoạch, báo cáo) đồng bộ qua **GitHub** — tự động.
> Video/ảnh nặng đồng bộ qua **Google Drive** — tự động.

```
 ĐIỆN THOẠI ──ra lệnh / nhận kết quả──┐
                                      ├──►  DESKTOP 24/7 (Claude chạy ở đây)
 LAPTOP ─────mở trình duyệt───────────┘        │            │
                                          GitHub (chữ)  Google Drive (video/ảnh)
```

## Đồng bộ tự động đã cài sẵn trong dự án
- **Mở phiên** ở bất kỳ máy nào → tự tải bản mới nhất từ GitHub.
- **Mỗi lần AI làm xong 1 lượt** → tự lưu và đẩy lên GitHub (ghi tên máy + giờ).
- Gặp xung đột → **không ghi đè**, chỉ báo để AI Tổng xử lý.

---

## 1. DESKTOP — máy chính chạy 24/7 (cài 1 lần)
1. Cài **Git**: https://git-scm.com/downloads (Windows: bấm Next đến hết).
2. Cài **Claude Code**: mở PowerShell (Windows) hoặc Terminal (Mac), dán lệnh:
   - Windows: `irm https://claude.ai/install.ps1 | iex`
   - Mac: `curl -fsSL https://claude.ai/install.sh | bash`
3. Tải dự án: `cd Documents` rồi `git clone https://github.com/quanghoa04/KOLAI.git`
4. Chạy thử lần đầu (để trả lời các câu hỏi 1 lần):
   `cd KOLAI` → `claude` → gõ `/login` đăng nhập → thoát → `claude remote-control` → trả lời **y** khi hỏi *Trust* và *Enable Remote Control*.
5. Cài **Claude in Chrome** + đăng nhập sẵn TikTok/YouTube/Facebook/Threads trong Chrome.
6. Cài **Google Drive for desktop**, tạo thư mục `KOLAI-Media` (video thô, video thành phẩm, ảnh).
7. **Cho tự chạy khi bật máy:**
   - Windows: bấm `Win + R` → gõ `shell:startup` → Enter → copy file `may-tinh\chay-24-7-windows.bat` vào thư mục vừa mở.
   - Mac: System Settings → General → Login Items → **+** → chọn `may-tinh/chay-24-7-mac.command`.
8. **Không cho máy ngủ:** Windows → Settings → System → Power → Sleep = **Never**. Mac: file `.command` đã tự giữ máy thức.
9. Nên bật **tự đăng nhập Windows/Mac** sau khi máy khởi động lại (do cập nhật, mất điện), nếu không file tự chạy sẽ chờ đến khi anh đăng nhập.

## 2. ĐIỆN THOẠI — ra lệnh & nhận kết quả
- App Claude → **Code** → chọn **KOLAI Desktop** (biểu tượng máy tính, **chấm xanh** = đang chạy).
- Gửi video thô: tải lên **Google Drive → KOLAI-Media/tho/** rồi nhắn "dựng video vừa tải lên". Video ngắn có thể gửi thẳng vào chat.
- Nhận thành phẩm: mở **Google Drive → KOLAI-Media/thanh-pham/**.
- Việc chỉ cần chữ (kế hoạch, caption): dùng phiên cloud cũng được, kết quả tự về GitHub, Desktop tự nhận.

## 3. LAPTOP — khi nào mở thì dùng
- **Cách nhanh (khuyên dùng):** mở trình duyệt → **claude.ai/code** → chọn **KOLAI Desktop**. Điều khiển y như điện thoại, không cần cài gì, không lo lệch dữ liệu.
- **Khi cần làm trực tiếp trên laptop** (ví dụ mất mạng tại nhà, đi công tác): cài Git + Claude Code + Google Drive giống Desktop (bước 1–3, 6), mở `claude` trong thư mục KOLAI. Mở phiên là tự kéo bản mới, làm xong tự đẩy lên — Desktop lần sau tự nhận.
  ⚠️ Không làm **cùng một file** trên 2 máy cùng lúc.

## Kiểm tra nhanh mỗi sáng
| Thấy | Nghĩa là |
|---|---|
| KOLAI Desktop có chấm xanh | Desktop đang chạy tốt |
| Không có chấm xanh | Desktop tắt/ngủ/mất mạng → nhờ người ở nhà bật lại máy |
| Lời chào có "⚠️ Đồng bộ" | Có xung đột → gõ "Minh An, kiểm tra đồng bộ giúp anh" |
