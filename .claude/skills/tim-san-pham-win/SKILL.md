---
name: tim-san-pham-win
description: Săn sản phẩm win để làm affiliate TikTok Shop cho KOLAI. Dùng khi anh Hòa muốn tìm sản phẩm win, sản phẩm hot, sản phẩm đáng làm affiliate, chấm điểm một sản phẩm, đọc file Kalodata/FastMoss, hoặc chạy báo cáo sản phẩm win hằng ngày. Ra Top 5 sản phẩm có điểm, lý do, video mẫu và góc quay gợi ý.
---

# Tìm sản phẩm win (affiliate TikTok Shop)

Kiến thức nền nằm ở `references/cam-nang.md`. **Đọc cẩm nang trước khi làm.** Cẩm nang được học một lần từ TikTok, YouTube và web; không học lại từ đầu mỗi lần chạy.

## Đầu vào
- Ngách hoặc từ khoá (nếu anh không nói: quét tất cả, ưu tiên đồ gia dụng thông minh, làm đẹp không cần công bố, phụ kiện).
- File xuất từ Kalodata / FastMoss trong `du-lieu/kalodata/` (CSV hoặc Excel), nếu có. Dùng file mới nhất.
- Thị trường mặc định: Việt Nam; tham khảo Trung Quốc và Mỹ để tìm sản phẩm "đón đầu".

## Quy trình
1. **Gom ứng viên (15–30 sản phẩm)**
   - Có file Kalodata: lọc theo tăng trưởng 7 ngày và tổng lượt bán (xem ngưỡng trong cẩm nang mục 3).
   - Không có file: dùng TikTok Creative Center Top Products, skill `last30days` (TikTok, YouTube, Xiaohongshu), trang Khám phá TikTok, Shopee "Bắt trend", WebSearch.
   - Tham khảo Trung Quốc/Mỹ: sản phẩm đang nổi ở Douyin, Xiaohongshu, TikTok Mỹ, Amazon Movers & Shakers mà VN còn ít người bán.
2. **Chấm điểm từng ứng viên** theo thang dưới đây. Thiếu dữ liệu thì cho 0 điểm ở tiêu chí đó và ghi "cần kiểm chứng". **Không bịa số.**
3. **Với Top 5**: tìm 2–3 video gắn giỏ đang thắng (ưu tiên kênh nhỏ view gấp nhiều lần follow). Nếu có file video hoặc link xem được, dùng skill `watch` để mổ xẻ hook, cấu trúc, phần demo, và đọc bình luận.
4. **Gửi Changmakeup (`kiem-duyet`)** soát rủi ro pháp lý của Top 5.
5. **Ghi báo cáo** theo mẫu dưới đây vào `bao-cao/san-pham-win/YYYY-MM-DD.md`. Cập nhật `bao-cao/san-pham-win/theo-doi.md` (bảng sản phẩm đang theo dõi, lượt bán theo ngày) để lần sau biết sản phẩm nào đang tăng tốc.

## Thang điểm (100)
| Tiêu chí | Điểm | Cách chấm |
|---|---|---|
| Nhu cầu & đà tăng | 25 | Đã có lượt bán thật; lượt bán 7 ngày tăng mạnh so với tuần trước |
| Mức cạnh tranh | 20 | Tổng lượt bán trong vùng 10.000–20.000 được điểm cao nhất; ít kênh affiliate đang bán |
| Bằng chứng video | 15 | Có kênh nhỏ (< 20.000 follow) mà video gắn giỏ có view gấp nhiều lần follow |
| Dễ demo, giải quyết vấn đề rõ | 15 | Nhìn hình là hiểu, có khoảnh khắc "wow" trong 3 giây |
| Hoa hồng & giá | 10 | Mức "Kiếm" mỗi đơn đáng công; giá dễ chốt (ngưỡng cụ thể: anh Hòa quyết, hiện **cần kiểm chứng**) |
| Đánh giá & bình luận | 5 | ≥ 4,5 sao; bình luận hỏi mua, ít chê chất lượng |
| An toàn pháp lý | 10 | Không phải TPCN, thuốc, mỹ phẩm chưa công bố; không cần nói công dụng y tế |

**≥ 70 điểm**: vào Top. **Sản phẩm > 20.000 lượt bán** chỉ vào Top khi có lợi thế riêng (voucher độc quyền, góc nội dung khác).

## Mẫu báo cáo
```markdown
# Sản phẩm win — DD/MM/YYYY
Nguồn dữ liệu hôm nay: [Kalodata ngày …/ Creative Center / last30days / …]. Thiếu: […]

## Top 5
### 1. <Tên sản phẩm> — <điểm>/100
- Giá: … | Hoa hồng: … | Đã bán: … | Tăng 7 ngày: … | Sao: … (ghi "cần kiểm chứng" nếu chưa có)
- Vì sao win: …
- Video mẫu đang thắng: <link> — hook: …, cấu trúc: …
- Khách đang hỏi/lo: …
- Góc quay gợi ý cho KOLAI: …
- Kiểm duyệt: ĐẠT / LƯU Ý …

## Đón đầu (đang nổi ở Trung Quốc/Mỹ, VN còn ít)
- …

## Việc anh cần làm
- …
```

## Cập nhật cẩm nang
Chỉ sửa `references/cam-nang.md` khi có bằng chứng mới (anh Hòa sửa, video mới mổ xẻ được, số liệu thực tế của kênh KOLAI). Ghi rõ nguồn và ngày. Không xoá kiến thức cũ mà chưa báo anh.
