/* CẤU HÌNH CHUNG — một file điều khiển tất cả các web KOLAI.
   Anh không cần sửa tay: nhắn AI Tổng "đổi số tài khoản", "tắt web X"… là em sửa file này. */
window.KOLAI_CFG = {
  xemThu: true,                 // true = bản xem thử (hiện nút quay về Trung tâm). Lên sóng thì đổi thành false.
  hq: '../index.html',          // đường về Trung tâm điều hành
  nganHang: { bin: '', soTk: '', chuTk: '', tenNh: '' },   // tài khoản nhận tiền (chưa cài)
  zalo: '',                     // số Zalo nhận đơn (chưa cài)
  webs: [
    { id: 'vuot',    ten: 'VƯỢT',     moHinh: 'Khoá học giá trị cao',            moTa: 'Bán chương trình đào tạo chuyên sâu, thu cọc giữ chỗ',        mau: '#ff5a1f' },
    { id: 'taynghe', ten: 'TAY NGHỀ', moHinh: 'Bán skill cho AI',                moTa: 'Chợ skill cài vào Claude, Codex, ChatGPT',                    mau: '#ff2a1a' },
    { id: 'soi',     ten: 'SOI',      moHinh: 'Blog chuyên gia + affiliate',     moTa: 'Bài đánh giá công nghệ, kiếm hoa hồng liên kết',              mau: '#c9a400' },
    { id: 'minhoi',  ten: 'MÌNH ƠI',  moHinh: 'Quà in theo yêu cầu (POD)',       moTa: 'Khách tự dựng nhân vật, in lên cốc, áo, tranh',               mau: '#e4572e' },
    { id: 'not',     ten: 'NỐT',      moHinh: 'Tặng sheet nhạc',                 moTa: 'Tặng bản nhạc miễn phí để thu email khách',                   mau: '#e8a0a0' },
    { id: 'tramai',  ten: 'TRẠM AI',  moHinh: 'Chợ công cụ & API AI',            moTa: 'Bán quyền dùng công cụ AI, API, bot mạng xã hội',             mau: '#111111' },
    { id: 'keso',    ten: 'KỆ SỐ',    moHinh: 'Sàn sản phẩm số',                 moTa: 'Bán script, template, preset — làm một lần bán mãi',          mau: '#1a1a1a' },
    { id: 'coi',     ten: 'CÕI',      moHinh: 'Cổng AR/VR & mô hình 3D',         moTa: 'Mua bán mô hình 3D, có AI tạo mô hình từ mô tả',              mau: '#2f6f5e' },
    { id: 'doi',     ten: 'ĐỘI',      moHinh: 'Chợ AI Agent tự hành',            moTa: 'Thuê agent, chỉ trả tiền khi chạy thành công',                mau: '#1f3a5f' },
    { id: 'chenh',   ten: 'CHÊNH',    moHinh: 'Săn chênh lệch giá xuyên biên giới', moTa: 'Quét giá giữa các sàn, tìm món lời khi mua đi bán lại',    mau: '#f5a524' }
  ]
};
