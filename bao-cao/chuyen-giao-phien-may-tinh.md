# Chuyển giao phiên đám mây → phiên máy tính

Ngày: 24/11/2026 | Nhánh: `claude/blissful-franklin-62g38w` | Người soạn: MINH AN (phiên đám mây)

## 1. Đã làm trong phiên này
- Kiểm tra skill `/last30days` có sẵn trong dự án (`.claude/skills/last30days/`, bản v3.30.0).
- Chạy cài đặt tự động (đã được anh đồng ý đọc cookie X) và chạy thử nghiên cứu chủ đề **"các thế hệ AI"** (hiểu là các thế hệ mô hình AI: GPT, Claude, Gemini).
- Báo cáo thô lưu ngoài repo, trên máy đám mây: `/root/Documents/Last30Days/ai-model-generations-gpt-claude-gemini-raw-v3.md`. File này sẽ mất khi phiên đám mây bị thu hồi, nên các kết quả chính được chép ở mục 2.

## 2. Kết quả nghiên cứu (30 ngày: 25/10 – 24/11/2026)
Nguồn dùng được: Reddit (14 luồng), Hacker News (14 bài), GitHub (12 mục) và 19 trang web. Dữ liệu 7 ngày gần nhất còn mỏng (19/40 mục).

- **Cách đặt tên "thế hệ":** số hiệu là thế hệ, tên là bậc. Các blog mâu thuẫn nhau về thứ bậc và tên (cần kiểm chứng với bài đăng chính thức của hãng).
  - OpenAI: GPT-6 / 6.1 với các bậc Astra, Sol, Terra, Luna.
  - Google: Gemini 4 là họ mới nhất (Argon, Carbon, Neon), Gemini 3 là họ dùng hằng ngày, Gemini 2.5 đang bị loại dần.
  - Anthropic: Opus 5.5, Sonnet 5.5, Haiku 5.5, cộng bậc Fable 5.2 (và Mythos theo một số bài).
- **Gemini 4 Neon (ra 18/11):** 1.070 điểm và 775 bình luận trên HN. BenchLM xếp hạng 2, sau Claude Fable 5.2. Người dùng thấy Gemini chưa bằng Opus 5.5 dù benchmark ngang nhau.
- **Không có mô hình thắng mọi mặt:** Opus 5.5 dẫn Terminal-Bench ở một số bảng, GPT-6 Astra dẫn ARC-AGI-2. Các bảng xếp hạng không thống nhất.
- **Chủ đề cộng đồng quan tâm:** chạy AI cục bộ trên Mac (Apple chuẩn bị app, 580 điểm HN), quyền riêng tư (Gemini huấn luyện trên lịch sử chat, 738 điểm HN), giới hạn bản quyền của Claude so với Gemini (r/singularity, 1.805 điểm).
- **Nghĩa học thuật:** khung AI 1.0 → 4.0 (thông tin, tác tử, vật lý, ý thức) trên PMC.

## 3. Tình trạng cài đặt (vấn đề của môi trường đám mây, không phải của dự án)
| Mục | Kết quả |
|---|---|
| Reddit | Nhiều lượt bị chặn 403 (IP máy chủ) |
| GitHub | Bị giới hạn lượt gọi (403) |
| X / Twitter | Chưa dùng được, không có cookie trình duyệt trong môi trường này |
| YouTube | Thiếu `yt-dlp` |
| Digg, arXiv, Techmeme | Cài lỗi (registry 404) |
| TikTok, Instagram | Chưa có khóa ScrapeCreators |

## 4. Việc cần làm trên máy tính (theo thứ tự)
1. Kéo nhánh này về (`git pull`).
2. Cần **Python 3.12 trở lên** và Git Bash (Windows chưa được kiểm tra).
3. Chạy lại `/last30days` trên máy, làm cài đặt lần đầu và đồng ý đọc cookie X để X và YouTube hoạt động. Cài `yt-dlp`. Cài đặt này chỉ cần làm một lần trên máy.
4. Chạy lại cùng chủ đề để so với bản đám mây (kỳ vọng Reddit, X, YouTube có dữ liệu).
5. Đề nghị: viết file `.bat` cài đặt vào `may-tinh/` giống các file cài đặt hiện có (anh chưa duyệt).

## 5. Quyết định đang chờ anh Hòa
- Thêm khóa ScrapeCreators (miễn phí 10.000 lượt) để lấy TikTok và Instagram? Chưa hỏi lại từ khi bỏ qua ở bước cài đặt.
- Dọn commit tự lưu `625c277` (có các file `__pycache__/*.pyc` do skill sinh ra): thêm `__pycache__/` và `*.pyc` vào `.gitignore` rồi xóa khỏi kho. Chưa làm.
- Chủ đề "các thế hệ AI" có dùng làm nội dung cho kênh KOLAI không? Nếu có, cho `chien-luoc` lên lịch.

## 6. Mẹo tiết kiệm token
Giao Subagent Haiku chạy `last30days` và ghi ra file, phiên chính chỉ đọc bản tóm tắt. Báo cáo thô dài hơn 500 dòng thì đẩy sang Gemini đọc trước. Dùng `--quick` cho chủ đề đơn giản.

## 7. Lưu ý
- Không đưa khóa hay mật khẩu vào dự án. Cấu hình của skill nằm ở `~/.config/last30days/` ngoài repo.
- Chưa tạo PR và chưa đăng bài hay gửi email nào.
