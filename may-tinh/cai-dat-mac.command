#!/bin/bash
# KOLAI - cài đủ công cụ cho các skill (watch, watch-video, last30days, claude-mem) trên Mac.
# Bấm đúp để chạy. Chạy lại nhiều lần cũng không sao.
# Tự tìm thư mục dự án (thư mục cha của may-tinh/), để ở đâu cũng chạy được.
cd "$(dirname "$0")/.." || { echo "Không tìm thấy thư mục KOLAI."; read -r -p "Bấm Enter để đóng."; exit 1; }
echo "Thư mục dự án: $(pwd)"

echo "=== 1/5 Cài Python, FFmpeg, Node.js, yt-dlp, Deno ==="
if ! command -v brew >/dev/null 2>&1; then
  echo "Chưa có Homebrew, đang cài (máy sẽ hỏi mật khẩu đăng nhập Mac)..."
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  eval "$(/opt/homebrew/bin/brew shellenv 2>/dev/null || /usr/local/bin/brew shellenv)"
fi
brew install python ffmpeg node yt-dlp deno

echo "=== 2/5 Đồng bộ dự án KOLAI ==="
git pull --rebase --autostash

echo "=== 3/5 Cài bộ nhớ claude-mem ==="
claude plugin marketplace add thedotmack/claude-mem
claude plugin install claude-mem@thedotmack

echo "=== 4/5 Key Gemini cho skill watch (miễn phí: https://aistudio.google.com/apikey) ==="
read -r -p "Dán key Gemini rồi bấm Enter (bỏ trống để bỏ qua): " GEMINI
if [ -n "$GEMINI" ]; then
  mkdir -p "$HOME/.config/watch"
  echo "GEMINI_API_KEY=$GEMINI" > "$HOME/.config/watch/.env"
  chmod 600 "$HOME/.config/watch/.env"
  echo "Đã lưu key Gemini."
fi

echo "=== 5/5 Key ScrapeCreators cho skill last30days (https://scrapecreators.com) ==="
read -r -p "Dán key ScrapeCreators rồi bấm Enter (bỏ trống để bỏ qua): " SC
if [ -n "$SC" ]; then
  mkdir -p "$HOME/.config/last30days"
  echo "SCRAPECREATORS_API_KEY=$SC" > "$HOME/.config/last30days/.env"
  chmod 600 "$HOME/.config/last30days/.env"
  echo "Đã lưu key ScrapeCreators."
fi

echo
echo "XONG. Hãy TẮT và MỞ LẠI Claude Code để nhận công cụ mới."
echo "Key được lưu riêng trên máy này, KHÔNG đẩy lên GitHub."
read -r -p "Bấm Enter để đóng."
