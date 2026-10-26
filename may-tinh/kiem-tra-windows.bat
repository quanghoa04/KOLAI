@echo off
chcp 65001 >nul
REM KOLAI - kiem tra may nay da du cong cu, skill, key chua. Ket qua gui len GitHub de AI Tong so sanh cac may.
REM KHONG ghi noi dung key, chi ghi CO / CHUA.
cd /d "%~dp0.."
git pull --rebase --autostash
if not exist "bao-cao\may-tinh" mkdir "bao-cao\may-tinh"
set "OUT=bao-cao\may-tinh\%COMPUTERNAME%.txt"

> "%OUT%" echo May: %COMPUTERNAME% (Windows) - kiem tra luc %date% %time%
>>"%OUT%" echo.
>>"%OUT%" echo == Dong bo GitHub ==
git fetch -q origin
git status -sb | findstr /n "^" | findstr "^1:" >>"%OUT%"
>>"%OUT%" echo.
>>"%OUT%" echo == Phan mem ==
for %%c in (git python node yt-dlp deno claude) do (
  where %%c >nul 2>&1 && (for /f "delims=" %%v in ('%%c --version 2^>^&1') do >>"%OUT%" echo %%c: %%v) || >>"%OUT%" echo %%c: CHUA CAI
)
where ffmpeg >nul 2>&1 && (ffmpeg -version 2>&1 | findstr /b "ffmpeg version" >>"%OUT%") || >>"%OUT%" echo ffmpeg: CHUA CAI
>>"%OUT%" echo.
>>"%OUT%" echo == Skill trong du an ==
dir /b ".claude\skills" >>"%OUT%"
>>"%OUT%" echo.
>>"%OUT%" echo == Plugin ==
claude plugin list 2>&1 | findstr /i "claude-mem" >>"%OUT%" || >>"%OUT%" echo claude-mem: CHUA CAI
>>"%OUT%" echo.
>>"%OUT%" echo == Key (chi ghi co/chua) ==
if exist "%USERPROFILE%\.config\watch\.env" (>>"%OUT%" echo Gemini: CO) else (>>"%OUT%" echo Gemini: CHUA)
if exist "%USERPROFILE%\.config\last30days\.env" (>>"%OUT%" echo ScrapeCreators: CO) else (>>"%OUT%" echo ScrapeCreators: CHUA)

type "%OUT%"
git add "%OUT%"
git commit -q -m "Kiem tra may %COMPUTERNAME%"
git push -q
echo.
echo Da gui ket qua len GitHub. Nhan cho AI Tong: "so sanh 2 may".
pause
