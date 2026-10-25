#!/bin/bash
# KOLAI - chạy Remote Control 24/7 trên máy DESKTOP (Mac). Tự khởi động lại nếu bị ngắt.
cd "$HOME/Documents/KOLAI" || exit 1
caffeinate -dimsu &   # giữ máy không ngủ
while true; do
  git pull --rebase --autostash
  claude remote-control --name "KOLAI Desktop" --chrome
  echo "Bị ngắt, thử lại sau 30 giây..."; sleep 30
done
