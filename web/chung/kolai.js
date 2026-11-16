/* KOLAI — lõi dùng chung cho mọi web: lưu trữ, giỏ hàng, đặt đơn, QR chuyển khoản, thu email, thống kê.
   Bản xem thử lưu dữ liệu trên trình duyệt. Khi lên sóng chỉ cần thay phần "KHO" bằng máy chủ thật. */
(function () {
  'use strict';
  var CFG = window.KOLAI_CFG || { webs: [], nganHang: {} };
  var mem = {};
  /* ---------- KHO (lưu trữ) ---------- */
  var KHO = {
    doc: function (k, d) { try { var v = localStorage.getItem('kolai.' + k); return v ? JSON.parse(v) : (k in mem ? mem[k] : d); } catch (e) { return k in mem ? mem[k] : d; } },
    ghi: function (k, v) { mem[k] = v; try { localStorage.setItem('kolai.' + k, JSON.stringify(v)); } catch (e) {} }
  };
  var site = null, opt = {};
  function vnd(n) { return Math.round(n).toLocaleString('vi-VN') + 'đ'; }
  function ngay(d) { d = d || new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function el(html) { var t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; }
  function caiDat() { var c = KHO.doc('cfg', {}); return { webs: c.webs || {}, nganHang: Object.assign({}, CFG.nganHang, c.nganHang || {}), zalo: c.zalo || CFG.zalo || '' }; }
  function webCfg(id) { return caiDat().webs[id || site] || {}; }
  function suKien(loai, noiDung, giaTri, s) {
    var a = KHO.doc('events', []); a.unshift({ site: s || site, loai: loai, noiDung: noiDung, giaTri: giaTri || 0, ts: Date.now() });
    KHO.ghi('events', a.slice(0, 300));
  }

  /* ---------- Giao diện chung (ăn theo biến màu của từng web) ---------- */
  var CSS = '.k-x{all:unset;cursor:pointer;font-size:22px;line-height:1;padding:6px 10px}' +
    '.k-ov{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9000;display:flex;justify-content:flex-end;opacity:0;pointer-events:none;transition:opacity .2s}' +
    '.k-ov.mo{opacity:1;pointer-events:auto}.k-ov.giua{justify-content:center;align-items:center;padding:16px}' +
    '.k-pan{background:var(--k-bg,#fff);color:var(--k-fg,#111);font-family:var(--k-font,system-ui,sans-serif);width:min(420px,100%);height:100%;display:flex;flex-direction:column;transform:translateX(30px);transition:transform .25s;box-sizing:border-box}' +
    '.k-ov.mo .k-pan{transform:none}.k-ov.giua .k-pan{height:auto;max-height:calc(100% - 16px);width:min(460px,100%);border-radius:min(var(--k-radius,10px),16px);overflow:auto}' +
    '.k-hd{display:flex;justify-content:space-between;align-items:center;padding:16px 18px;border-bottom:1px solid var(--k-line,rgba(128,128,128,.3));font-weight:700;font-size:17px}' +
    '.k-bd{padding:16px 18px;overflow:auto;flex:1;display:flex;flex-direction:column;gap:12px;font-size:15px;line-height:1.5}' +
    '.k-ft{padding:16px 18px;border-top:1px solid var(--k-line,rgba(128,128,128,.3));display:flex;flex-direction:column;gap:10px}' +
    '.k-it{display:flex;gap:10px;justify-content:space-between;align-items:flex-start;padding-bottom:12px;border-bottom:1px dashed var(--k-line,rgba(128,128,128,.3))}' +
    '.k-it b{display:block}.k-it small{opacity:.7;display:block}.k-it .k-r{text-align:right;white-space:nowrap}' +
    '.k-sl{display:inline-flex;align-items:center;gap:8px;margin-top:6px}.k-sl button{all:unset;cursor:pointer;width:26px;height:26px;text-align:center;border:1px solid var(--k-line,rgba(128,128,128,.4));border-radius:4px}' +
    '.k-tong{display:flex;justify-content:space-between;font-weight:700;font-size:17px}' +
    '.k-btn{all:unset;box-sizing:border-box;cursor:pointer;text-align:center;background:var(--k-accent,#111);color:var(--k-on,#fff);padding:14px 18px;font-weight:700;border-radius:var(--k-radius,10px);width:100%;font-size:16px}' +
    '.k-btn:focus-visible,.k-x:focus-visible,.k-in:focus-visible{outline:2px solid var(--k-accent,#111);outline-offset:2px}' +
    '.k-btn.phu{background:transparent;color:inherit;border:1px solid var(--k-line,rgba(128,128,128,.5))}' +
    '.k-in{box-sizing:border-box;width:100%;padding:12px;font:inherit;color:inherit;background:transparent;border:1px solid var(--k-line,rgba(128,128,128,.5));border-radius:min(var(--k-radius,10px),14px)}' +
    '.k-lb{font-size:13px;opacity:.8;display:flex;flex-direction:column;gap:5px}' +
    '.k-note{font-size:13px;opacity:.75;line-height:1.5}.k-loi{color:#d92d20;font-size:13px}' +
    '.k-qr{background:#fff;padding:10px;border-radius:8px;align-self:center;line-height:0}.k-qr svg{width:210px;height:210px;max-width:100%}' +
    '.k-ma{font-family:ui-monospace,Menlo,monospace;font-size:20px;font-weight:700;letter-spacing:.06em;padding:10px;border:1px dashed var(--k-line,rgba(128,128,128,.6));text-align:center;border-radius:6px}' +
    '.k-kv{display:grid;grid-template-columns:auto 1fr;gap:4px 14px;font-size:14px}.k-kv dt{opacity:.7}.k-kv dd{margin:0;font-weight:600;text-align:right;word-break:break-word}' +
    '.k-toast{position:fixed;left:50%;bottom:calc(22px + env(safe-area-inset-bottom,0px));transform:translate(-50%,20px);background:#111;color:#fff;padding:12px 18px;border-radius:999px;font:600 14px/1.3 system-ui,sans-serif;z-index:9500;opacity:0;transition:all .25s;max-width:calc(100% - 32px);text-align:center;pointer-events:none}' +
    '.k-toast.mo{opacity:1;transform:translate(-50%,0)}' +
    '.k-bn{background:var(--k-accent,#111);color:var(--k-on,#fff);text-align:center;font:600 14px/1.4 var(--k-font,system-ui,sans-serif);padding:9px 16px;position:relative;z-index:50}' +
    '.k-bt{position:fixed;inset:0;z-index:9900;background:var(--k-bg,#fff);color:var(--k-fg,#111);display:flex;flex-direction:column;gap:14px;align-items:center;justify-content:center;text-align:center;padding:24px;font-family:var(--k-font,system-ui,sans-serif)}' +
    '.k-bt h1{font-size:28px;margin:0}.k-bt a{color:inherit}' +
    '.k-hq{position:fixed;left:max(12px,env(safe-area-inset-left,0px));bottom:calc(12px + env(safe-area-inset-bottom,0px));z-index:8000;background:#111;color:#fff;font:600 12px/1 system-ui,sans-serif;padding:9px 12px;border-radius:999px;text-decoration:none;box-shadow:0 2px 10px rgba(0,0,0,.3);opacity:.85}' +
    '.k-hq:hover{opacity:1}';

  var toastT;
  function toast(msg) {
    var t = document.querySelector('.k-toast') || document.body.appendChild(el('<div class="k-toast" role="status"></div>'));
    t.textContent = msg; t.classList.add('mo'); clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove('mo'); }, 2600);
  }
  function mo(html, giua) {
    dong();
    var ov = el('<div class="k-ov' + (giua ? ' giua' : '') + '" role="dialog" aria-modal="true"><div class="k-pan">' + html + '</div></div>');
    document.body.appendChild(ov);
    ov.addEventListener('click', function (e) { if (e.target === ov || e.target.closest('[data-k-dong]')) dong(); });
    requestAnimationFrame(function () { ov.classList.add('mo'); });
    return ov;
  }
  function dong() { var o = document.querySelectorAll('.k-ov'); for (var i = 0; i < o.length; i++) o[i].remove(); }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') dong(); });

  /* ---------- Giỏ hàng ---------- */
  var gio = {
    ds: function () { return KHO.doc('cart.' + site, []); },
    luu: function (a) { KHO.ghi('cart.' + site, a); gio.dem(); },
    tong: function () { return gio.ds().reduce(function (s, i) { return s + i.gia * i.sl; }, 0); },
    soMon: function () { return gio.ds().reduce(function (s, i) { return s + i.sl; }, 0); },
    co: function (id) { return gio.ds().some(function (i) { return i.id === id; }); },
    them: function (it, im) {
      var a = gio.ds(), c = a.filter(function (i) { return i.id === it.id; })[0];
      if (c && !it.rieng) c.sl += 1; else a.push({ id: it.id + (it.rieng ? '-' + Date.now() : ''), ten: it.ten, gia: it.gia, sl: 1, ghiChu: it.ghiChu || '' });
      gio.luu(a); if (!im) toast('Đã thêm vào giỏ: ' + it.ten);
    },
    bo: function (id) { gio.luu(gio.ds().filter(function (i) { return i.id !== id; })); },
    doiSl: function (id, d) { var a = gio.ds(); a.forEach(function (i) { if (i.id === id) i.sl = Math.max(0, i.sl + d); }); gio.luu(a.filter(function (i) { return i.sl > 0; })); },
    xoa: function () { gio.luu([]); },
    dem: function () {
      var n = gio.soMon(), t = gio.tong(), a = document.querySelectorAll('[data-k-dem]'), b = document.querySelectorAll('[data-k-tong]'), i;
      for (i = 0; i < a.length; i++) a[i].textContent = n;
      for (i = 0; i < b.length; i++) b[i].textContent = vnd(t);
      document.dispatchEvent(new CustomEvent('kolai:gio', { detail: { soMon: n, tong: t } }));
    },
    mo: function () {
      var a = gio.ds();
      var body = a.length ? a.map(function (i) {
        return '<div class="k-it"><div><b>' + esc(i.ten) + '</b>' + (i.ghiChu ? '<small>' + esc(i.ghiChu) + '</small>' : '') +
          '<span class="k-sl"><button data-k-sl="-1" data-id="' + esc(i.id) + '" aria-label="Bớt">−</button>' + i.sl + '<button data-k-sl="1" data-id="' + esc(i.id) + '" aria-label="Thêm">+</button></span></div>' +
          '<div class="k-r"><b>' + vnd(i.gia * i.sl) + '</b></div></div>';
      }).join('') : '<p class="k-note">Giỏ đang trống. Anh/chị chọn món rồi quay lại đây nhé.</p>';
      var ov = mo('<div class="k-hd"><span>Giỏ hàng (' + gio.soMon() + ')</span><button class="k-x" data-k-dong aria-label="Đóng">×</button></div><div class="k-bd">' + body + '</div>' +
        (a.length ? '<div class="k-ft"><div class="k-tong"><span>Tạm tính</span><span>' + vnd(gio.tong()) + '</span></div><button class="k-btn" data-k-tt>Đặt hàng</button></div>' : ''));
      ov.addEventListener('click', function (e) {
        var b = e.target.closest('[data-k-sl]'); if (b) { gio.doiSl(b.dataset.id, +b.dataset.kSl); gio.mo(); return; }
        if (e.target.closest('[data-k-tt]')) datHang();
      });
    }
  };

  /* ---------- QR chuyển khoản chuẩn VietQR (tự sinh, không gọi dịch vụ ngoài) ---------- */
  function tlv(id, v) { v = String(v); return id + ('0' + v.length).slice(-2) + v; }
  function crc16(s) { var c = 0xFFFF, i, j; for (i = 0; i < s.length; i++) { c ^= s.charCodeAt(i) << 8; for (j = 0; j < 8; j++) c = (c & 0x8000) ? ((c << 1) ^ 0x1021) & 0xFFFF : (c << 1) & 0xFFFF; } return ('000' + c.toString(16).toUpperCase()).slice(-4); }
  function vietqr(bin, soTk, soTien, noiDung) {
    var nh = tlv('00', 'A000000727') + tlv('01', tlv('00', bin) + tlv('01', soTk)) + tlv('02', 'QRIBFTTA');
    var s = tlv('00', '01') + tlv('01', '12') + tlv('38', nh) + tlv('53', '704') + tlv('54', Math.round(soTien)) + tlv('58', 'VN') + tlv('62', tlv('08', noiDung)) + '6304';
    return s + crc16(s);
  }
  function napQr(cb) {
    if (window.qrcode) return cb();
    var s = document.createElement('script'); s.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js';
    s.onload = function () { cb(); }; s.onerror = function () { cb(true); }; document.head.appendChild(s);
  }

  /* ---------- Đặt hàng ---------- */
  function taoDon(items, khach, giam, extra) {
    var tam = items.reduce(function (s, i) { return s + i.gia * i.sl; }, 0);
    var don = Object.assign({ id: 'DH' + String(Math.floor(100000 + Math.random() * 900000)), site: site, items: items, tamTinh: tam, giam: giam || 0, tong: Math.max(0, tam - (giam || 0)), khach: khach, ts: Date.now(), trangThai: 'cho' }, extra || {});
    var a = KHO.doc('orders', []); a.unshift(don); KHO.ghi('orders', a);
    suKien('don', 'Đơn ' + don.id + ' — ' + items.map(function (i) { return i.ten; }).join(', '), don.tong);
    return don;
  }
  /* datHang({items, tieuDe, nut, xong(don)}) — bỏ trống items thì lấy giỏ hàng */
  function datHang(o) {
    o = o || {};
    var items = o.items || gio.ds(); if (!items.length) { toast('Giỏ đang trống'); return; }
    items = items.map(function (i) { return { id: i.id, ten: i.ten, gia: i.gia, sl: i.sl || 1, ghiChu: i.ghiChu || '' }; });
    var tam = items.reduce(function (s, i) { return s + i.gia * i.sl; }, 0), wc = webCfg(), giam = 0;
    var ov = mo('<div class="k-hd"><span>' + esc(o.tieuDe || 'Đặt hàng') + '</span><button class="k-x" data-k-dong aria-label="Đóng">×</button></div>' +
      '<form class="k-bd" id="k-form" novalidate>' +
      items.map(function (i) { return '<div class="k-it"><div><b>' + esc(i.ten) + (i.sl > 1 ? ' × ' + i.sl : '') + '</b>' + (i.ghiChu ? '<small>' + esc(i.ghiChu) + '</small>' : '') + '</div><div class="k-r"><b>' + vnd(i.gia * i.sl) + '</b></div></div>'; }).join('') +
      '<label class="k-lb">Họ tên<input class="k-in" id="k-ten" autocomplete="name" required></label>' +
      '<label class="k-lb">Số điện thoại / Zalo<input class="k-in" id="k-sdt" inputmode="tel" autocomplete="tel" required></label>' +
      '<label class="k-lb">Email nhận hàng<input class="k-in" id="k-email" type="email" autocomplete="email" required></label>' +
      '<label class="k-lb">Mã giảm giá (nếu có)<input class="k-in" id="k-ma" autocomplete="off"></label>' +
      '<div class="k-loi" id="k-loi" hidden></div>' +
      '<div class="k-tong"><span>Tổng thanh toán</span><span id="k-tongtt">' + vnd(tam) + '</span></div>' +
      '<button class="k-btn" type="submit">' + esc(o.nut || 'Xác nhận đặt hàng') + '</button>' +
      '<p class="k-note">Thanh toán bằng chuyển khoản ngân hàng qua mã QR ở bước sau.</p></form>', true);
    var f = ov.querySelector('#k-form'), ma = ov.querySelector('#k-ma');
    ma.addEventListener('input', function () {
      giam = (wc.ma && ma.value.trim().toUpperCase() === String(wc.ma).toUpperCase()) ? Math.round(tam * (wc.pt || 0) / 100) : 0;
      ov.querySelector('#k-tongtt').textContent = vnd(tam - giam) + (giam ? ' (đã giảm ' + wc.pt + '%)' : '');
    });
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var ten = f.querySelector('#k-ten').value.trim(), sdt = f.querySelector('#k-sdt').value.trim(), email = f.querySelector('#k-email').value.trim(), loi = f.querySelector('#k-loi');
      var thieu = !ten ? 'Anh/chị điền họ tên giúp em.' : !/^[0-9+ .]{8,15}$/.test(sdt) ? 'Số điện thoại chưa đúng (8–15 chữ số).' : !/^\S+@\S+\.\S+$/.test(email) ? 'Email chưa đúng định dạng, ví dụ ten@gmail.com.' : '';
      if (thieu) { loi.textContent = thieu; loi.hidden = false; return; }
      var don = taoDon(items, { ten: ten, sdt: sdt, email: email }, giam, o.them);
      if (!o.items) gio.xoa();
      manQr(don, o.xong);
    });
  }
  function manQr(don, xong) {
    var nh = caiDat().nganHang, coNh = nh.bin && nh.soTk;
    var ov = mo('<div class="k-hd"><span>Đã ghi đơn ' + don.id + '</span><button class="k-x" data-k-dong aria-label="Đóng">×</button></div><div class="k-bd">' +
      (coNh ? '<p>Mở app ngân hàng, quét mã để chuyển khoản. Số tiền và nội dung đã điền sẵn.</p><div class="k-qr" id="k-qr"></div>' +
        '<dl class="k-kv"><dt>Ngân hàng</dt><dd>' + esc(nh.tenNh || nh.bin) + '</dd><dt>Số tài khoản</dt><dd>' + esc(nh.soTk) + '</dd><dt>Chủ tài khoản</dt><dd>' + esc(nh.chuTk || '') + '</dd><dt>Số tiền</dt><dd>' + vnd(don.tong) + '</dd><dt>Nội dung</dt><dd>' + don.id + '</dd></dl>'
        : '<div class="k-ma">' + don.id + '</div><dl class="k-kv"><dt>Số tiền</dt><dd>' + vnd(don.tong) + '</dd></dl><p class="k-note">Bản xem thử: chủ web chưa cài tài khoản nhận tiền nên chưa hiện mã QR. Vào Trung tâm điều hành → Cài đặt để nhập tài khoản ngân hàng, mã QR sẽ tự hiện ở đây.</p>') +
      '</div><div class="k-ft"><button class="k-btn" id="k-dack">' + (coNh ? 'Tôi đã chuyển khoản' : 'Xong') + '</button></div>', true);
    if (coNh) napQr(function (loi) {
      var box = ov.querySelector('#k-qr'); if (!box) return;
      if (loi || !window.qrcode) { box.textContent = 'Không tải được mã QR — anh/chị chuyển khoản theo thông tin bên dưới.'; box.style.lineHeight = '1.4'; return; }
      var q = window.qrcode(0, 'M'); q.addData(vietqr(nh.bin, nh.soTk, don.tong, don.id)); q.make(); box.innerHTML = q.createSvgTag({ cellSize: 4, margin: 0, scalable: true });
    });
    ov.querySelector('#k-dack').addEventListener('click', function () {
      if (coNh) { var a = KHO.doc('orders', []); a.forEach(function (d) { if (d.id === don.id) d.khachBaoCk = true; }); KHO.ghi('orders', a); }
      dong(); toast(coNh ? 'Cảm ơn anh/chị. Shop kiểm tra và gửi hàng qua email.' : 'Đơn ' + don.id + ' đã nằm trong Trung tâm điều hành');
      if (xong) xong(don);
    });
    document.dispatchEvent(new CustomEvent('kolai:don', { detail: don }));
  }

  /* ---------- Thu email khách (lead) ---------- */
  function lead(d) {
    if (!/^\S+@\S+\.\S+$/.test(d.email || '')) { toast('Email chưa đúng định dạng, ví dụ ten@gmail.com'); return false; }
    var a = KHO.doc('leads', []); a.unshift({ site: site, email: d.email.trim(), ten: d.ten || '', sdt: d.sdt || '', nguon: d.nguon || '', ts: Date.now() }); KHO.ghi('leads', a);
    suKien('lead', 'Đăng ký: ' + d.email.trim() + (d.nguon ? ' — ' + d.nguon : '')); return true;
  }

  /* ---------- Khởi động cho từng web ---------- */
  function khoiDong(o) {
    opt = o || {}; site = opt.site;
    document.head.appendChild(el('<style>' + CSS + '</style>'));
    var v = KHO.doc('visits', {}), d = ngay(); v[site] = v[site] || {}; v[site][d] = (v[site][d] || 0) + 1; KHO.ghi('visits', v);
    var wc = webCfg();
    if (wc.tat) document.body.appendChild(el('<div class="k-bt"><h1>Web đang tạm nghỉ để nâng cấp</h1><p>Anh/chị quay lại sau ít phút nhé.</p>' + (CFG.xemThu ? '<a href="' + CFG.hq + '">← Về Trung tâm điều hành để bật lại</a>' : '') + '</div>'));
    if (wc.banner) document.body.insertBefore(el('<div class="k-bn">' + esc(wc.banner) + (wc.ma ? ' — nhập mã <b>' + esc(wc.ma) + '</b> giảm ' + (wc.pt || 0) + '%' : '') + '</div>'), document.body.firstChild);
    if (CFG.xemThu) document.body.appendChild(el('<a class="k-hq" href="' + CFG.hq + '">← Trung tâm KOLAI</a>'));
    document.addEventListener('click', function (e) { if (e.target.closest('[data-k-gio]')) { e.preventDefault(); gio.mo(); } });
    gio.dem();
  }

  window.KOLAI = { khoiDong: khoiDong, KHO: KHO, vnd: vnd, ngay: ngay, esc: esc, el: el, toast: toast, mo: mo, dong: dong, gio: gio, datHang: datHang, taoDon: taoDon, lead: lead, suKien: suKien, caiDat: caiDat, webCfg: webCfg, vietqr: vietqr, CFG: CFG };
})();
