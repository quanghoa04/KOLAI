@echo off
chcp 65001 >nul
REM KOLAI - chạy Remote Control 24/7 trên máy DESKTOP (Windows).
REM Tự khởi động lại nếu bị ngắt (mất mạng, cập nhật...).
cd /d "%USERPROFILE%\Documents\KOLAI"
:lap
echo [%date% %time%] Dong bo GitHub...
git pull --rebase --autostash
echo [%date% %time%] Khoi dong Remote Control KOLAI Desktop...
claude remote-control --name "KOLAI Desktop" --chrome
echo Bi ngat, thu lai sau 30 giay...
timeout /t 30 /nobreak >nul
goto lap
