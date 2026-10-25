# Hướng dẫn Remote Control — Điều khiển máy tính ở nhà bằng điện thoại

**Để làm gì:** máy tính ở nhà chạy Claude (dựng video, mở Chrome soi đối thủ, đăng bài),
anh ra lệnh từ điện thoại ở bất kỳ đâu. Chạy được đủ 31 skill.

**Điều kiện:** gói Claude Pro/Max/Team · máy tính Windows hoặc Mac · máy phải **bật và không ngủ**.

---

## Phần A — Cài trên máy tính (làm 1 lần, ~20 phút)

### Bước 1. Cài app Claude Desktop
1. Vào **https://claude.com/download** → tải bản Windows hoặc Mac → cài như phần mềm bình thường.
2. Mở app → đăng nhập **đúng tài khoản đang dùng trên điện thoại**.

### Bước 2. Tải dự án KOLAI về máy
1. Cài **GitHub Desktop**: https://desktop.github.com → đăng nhập GitHub (quanghoa04).
2. Bấm **File → Clone repository** → chọn **quanghoa04/KOLAI** → chọn thư mục, ví dụ `Documents\KOLAI` → **Clone**.

### Bước 3. Mở dự án trong Claude Desktop
1. Trong app Claude, chọn tab **Code**.
2. Chọn phiên **chạy trên máy (local)** và chọn thư mục `KOLAI` vừa tải.
3. Sẽ thấy lời chào của AI Tổng Minh An → gõ `/bat-dau` để thử.

### Bước 4. Bật Remote Control
- Bật luôn cho mọi phiên: **Settings → Claude Code → Connect new sessions to Remote Control** (bật ON).
- Hoặc chỉ phiên đang mở: gõ `/remote-control KOLAI` vào ô chat → bấm **Enable Remote Control**.

### Bước 5. Bật các công cụ cho skill
1. **Connector The Skill**: Settings → Connectors → bật **The Skill** (để có 31 skill đã mua).
2. **Claude in Chrome**: cài tiện ích Claude cho Chrome, đăng nhập cùng tài khoản.
   Trong Chrome, đăng nhập sẵn TikTok, YouTube, Facebook, Threads của kênh @kolai.vn.

### Bước 6. Không cho máy ngủ
- **Windows:** Settings → System → Power → *Screen and sleep* → "When plugged in, put my device to sleep after" = **Never**.
- **Mac:** System Settings → Battery (hoặc Energy) → bật *Prevent automatic sleeping when the display is off*.
- Cắm sạc, để mạng ổn định. Tắt app Claude = điện thoại mất kết nối.

---

## Phần B — Dùng trên điện thoại (hằng ngày)
1. Mở app **Claude** → bấm **Code**.
2. Tìm phiên **KOLAI** có **biểu tượng máy tính + chấm xanh** (= máy ở nhà đang online).
3. Ra lệnh bình thường: `/bat-dau`, `/lam-video ...`, "teardown kênh TikTok này: <link>".
4. Gửi ảnh/video từ điện thoại vào chat → file được chuyển về máy tính để xử lý.

## Chia việc
| Việc | Dùng |
|---|---|
| Kế hoạch, kịch bản, caption, SEO, tư vấn khách | Phiên **cloud** (không cần máy ở nhà) |
| Dựng video, xử lý ảnh, soi đối thủ, đăng/lên lịch bài | Phiên **Remote Control** (máy ở nhà) |

## Lỗi thường gặp
| Hiện tượng | Cách xử lý |
|---|---|
| Không thấy chấm xanh | Máy ngủ / tắt app / mất mạng → mở lại app Claude trên máy |
| "Remote Control is disabled…" | Kiểm tra đăng nhập đúng gói Pro/Max; Team thì nhờ Owner bật |
| Skill không thấy trình duyệt | Kiểm tra tiện ích Claude in Chrome đã bật và đăng nhập |
| Dữ liệu 2 nơi lệch nhau | Cuối buổi gõ `/ket-thuc` (đẩy lên GitHub); đầu buổi trên máy bấm **Fetch/Pull** trong GitHub Desktop |

Tài liệu gốc: https://code.claude.com/docs/en/remote-control
