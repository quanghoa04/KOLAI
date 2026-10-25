# KOLAI — Phòng ban AI tự động cho doanh nghiệp SME

Một "công ty AI" chạy trong Claude Code: **1 AI Tổng (Minh An) + 11 phòng ban AI** tự nghiên cứu,
viết kịch bản, sản xuất và đóng gói nội dung cho **TikTok · YouTube · Facebook · Threads**,
đồng thời tư vấn giải pháp AI cho khách SME. Người mới chỉ cần gõ lệnh tiếng Việt.

## Vào làm việc mỗi ngày (vào thẳng màn hình này)
**Cách 1 — Trên web / điện thoại (khuyên dùng):**
1. Mở **https://claude.ai/code** (hoặc app Claude → mục Code).
2. Chọn repo **quanghoa04/KOLAI** → bấm bắt đầu phiên.
3. Màn hình tự hiện lời chào của AI Tổng + việc cần làm. Gõ `/bat-dau`.
4. Mẹo: lưu `claude.ai/code` vào màn hình chính điện thoại / thanh dấu trang để 1 chạm là vào.

**Cách 2 — Trên máy tính (Claude Code CLI):**
```bash
git clone https://github.com/quanghoa04/KOLAI.git
cd KOLAI
claude
```
Lần sau chỉ cần `cd KOLAI && git pull && claude`.

> Điều khiển máy tính ở nhà bằng điện thoại: `HUONG-DAN-REMOTE-CONTROL.md` · Đồng bộ Desktop + Laptop + Điện thoại: `HUONG-DAN-DONG-BO.md`.

## Lệnh nhanh
| Lệnh | Việc |
|---|---|
| `/bat-dau` | AI Tổng chào, tóm tắt, giao 3 việc hôm nay |
| `/ke-hoach-tuan [chủ đề]` | Sản xuất trọn gói nội dung tuần cho 4 kênh |
| `/lam-video <chủ đề>` | Làm 1 nội dung cho cả 4 kênh |
| `/bao-cao <số liệu>` | Phân tích kết quả, đề xuất tuần sau |
| `/tu-van <khách hàng>` | Đề xuất giải pháp AI + báo giá cho khách SME |
| `/ket-thuc` | Lưu tiến độ, đẩy lên GitHub |

Hoặc cứ nói tự nhiên: *"Minh An, làm cho anh 3 video TikTok về chatbot bán hàng"*.

## Cấu trúc
```
CLAUDE.md              ← "bộ não" AI Tổng Minh An
.claude/agents/        ← 11 phòng ban (sub agent)
.claude/commands/      ← các lệnh nhanh
.claude/hooks/         ← lời chào tự động khi mở phiên
cong-ty/               ← hồ sơ công ty, sơ đồ tổ chức
cong-viec/             ← việc cần làm
noi-dung/              ← gói nội dung từng tuần
bao-cao/               ← nhật ký, phân tích, hồ sơ khách hàng
```
