@echo off
chcp 65001 >nul
REM KOLAI - cài đủ công cụ cho các skill (watch, watch-video, last30days, claude-mem) trên Windows.
REM Bấm đúp để chạy. Chạy lại nhiều lần cũng không sao.
cd /d "%USERPROFILE%\Documents\KOLAI"

echo === 1/5 Cai Python, FFmpeg, Node.js, yt-dlp, Deno ===
winget install -e --id Python.Python.3.12 --accept-source-agreements --accept-package-agreements
winget install -e --id Gyan.FFmpeg --accept-source-agreements --accept-package-agreements
winget install -e --id OpenJS.NodeJS.LTS --accept-source-agreements --accept-package-agreements
winget install -e --id yt-dlp.yt-dlp --accept-source-agreements --accept-package-agreements
winget install -e --id DenoLand.Deno --accept-source-agreements --accept-package-agreements

echo === 2/5 Dong bo du an KOLAI ===
git pull --rebase --autostash

echo === 3/5 Cai bo nho claude-mem ===
claude plugin marketplace add thedotmack/claude-mem
claude plugin install claude-mem@thedotmack

echo === 4/5 Key Gemini cho skill watch (mien phi: https://aistudio.google.com/apikey) ===
set "GEMINI="
set /p GEMINI="Dan key Gemini roi bam Enter (bo trong de bo qua): "
if not "%GEMINI%"=="" (
  if not exist "%USERPROFILE%\.config\watch" mkdir "%USERPROFILE%\.config\watch"
  >"%USERPROFILE%\.config\watch\.env" echo GEMINI_API_KEY=%GEMINI%
  echo Da luu key Gemini.
)

echo === 5/5 Key ScrapeCreators cho skill last30days (https://scrapecreators.com) ===
set "SC="
set /p SC="Dan key ScrapeCreators roi bam Enter (bo trong de bo qua): "
if not "%SC%"=="" (
  if not exist "%USERPROFILE%\.config\last30days" mkdir "%USERPROFILE%\.config\last30days"
  >"%USERPROFILE%\.config\last30days\.env" echo SCRAPECREATORS_API_KEY=%SC%
  echo Da luu key ScrapeCreators.
)

echo.
echo XONG. Hay TAT va MO LAI cua so Claude Code de nhan cong cu moi.
echo Key duoc luu rieng tren may nay, KHONG day len GitHub.
pause
