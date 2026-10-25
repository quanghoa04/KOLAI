#!/usr/bin/env bash
# Chạy tự động mỗi khi anh mở phiên Claude Code trong dự án KOLAI.
cd "${CLAUDE_PROJECT_DIR:-$(dirname "$0")/../..}" || exit 0
echo "=== KOLAI — AI Tổng MINH AN (minhan@kolai.vn) đã sẵn sàng ==="
echo "Hôm nay: $(date +%d/%m/%Y)"
echo "--- Việc cần làm ---"
sed -n '/## Đang làm/,/## Đã xong/p' cong-viec/viec-can-lam.md 2>/dev/null | grep -- '- \[ \]' || echo "(chưa có việc)"
echo "--- Nhật ký gần nhất ---"
grep "^- " bao-cao/nhat-ky.md 2>/dev/null | tail -n 2
echo "Gợi ý: gõ /bat-dau để AI Tổng chào và giao việc trong ngày."
