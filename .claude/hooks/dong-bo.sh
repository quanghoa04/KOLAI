#!/usr/bin/env bash
# Tự đồng bộ dự án KOLAI với GitHub.
#   bash dong-bo.sh keo   → tải bản mới nhất về (chạy khi mở phiên)
#   bash dong-bo.sh luu   → lưu thay đổi và đẩy lên (chạy sau mỗi lượt làm việc)
# Không bao giờ ghi đè dữ liệu: gặp xung đột thì dừng và báo.
cd "${CLAUDE_PROJECT_DIR:-$(dirname "$0")/../..}" || exit 0
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || exit 0
nhanh=$(git branch --show-current)
[ -z "$nhanh" ] && exit 0

case "$1" in
  keo)
    if git pull --rebase --autostash -q origin "$nhanh" 2>/dev/null; then
      echo "Đồng bộ: đã tải bản mới nhất từ GitHub."
    else
      git rebase --abort 2>/dev/null
      echo "⚠️ Đồng bộ: chưa tải được bản mới (mất mạng hoặc xung đột). Nhờ AI Tổng kiểm tra."
    fi
    ;;
  luu)
    [ -z "$(git status --porcelain)" ] && exit 0
    git add -A
    git commit -q -m "Tự lưu $(hostname) $(date '+%d/%m/%Y %H:%M')"
    git pull --rebase -q origin "$nhanh" 2>/dev/null || { git rebase --abort 2>/dev/null; echo "⚠️ Tự lưu: có xung đột, chưa đẩy lên GitHub." >&2; exit 0; }
    git push -q origin "$nhanh" 2>/dev/null || echo "⚠️ Tự lưu: chưa đẩy được lên GitHub (mất mạng?)." >&2
    ;;
esac
exit 0
