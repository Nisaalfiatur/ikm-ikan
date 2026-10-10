<div class="modal-backdrop" id="sale-modal" hidden>
    <section class="sale-modal" role="dialog" aria-modal="true" aria-labelledby="sale-title">
        <div class="modal-heading"><div><span class="kicker">CATAT CEPAT</span><h2 id="sale-title">Penjualan baru</h2></div><button class="close-modal" type="button" aria-label="Tutup">×</button></div>
        <form id="sale-form">
            <label>Pelanggan <input name="customer" placeholder="Contoh: Bu Rina" required></label>
            <label>Produk <select name="product"><option>Abon ikan tenggiri</option><option>Nugget ayam</option><option>Bakso ikan</option></select></label>
            <div class="form-row"><label>Jumlah <input name="quantity" type="number" min="1" value="1" required></label><label>Total <input name="total" inputmode="numeric" placeholder="Rp 0" required></label></div>
            <label>Status pembayaran <select name="payment"><option>Lunas</option><option>Belum lunas</option></select></label>
            <button class="primary-button" type="submit">Simpan penjualan</button>
        </form>
    </section>
</div>
<div class="modal-backdrop" id="expense-modal" hidden>
    <section class="sale-modal" role="dialog" aria-modal="true" aria-labelledby="expense-title">
        <div class="modal-heading"><div><span class="kicker">CATAT CEPAT</span><h2 id="expense-title">Pengeluaran baru</h2></div><button class="close-expense" type="button" aria-label="Tutup">×</button></div>
        <form id="expense-form">
            <label>Keperluan <input name="description" placeholder="Contoh: Belanja bahan baku" required></label>
            <label>Kategori <select name="category"><option>Bahan baku</option><option>Operasional</option><option>Distribusi</option></select></label>
            <label>Jumlah <input name="amount" inputmode="numeric" placeholder="Rp 0" required></label>
            <button class="primary-button" type="submit">Simpan pengeluaran</button>
        </form>
    </section>
</div>
<div class="toast" id="toast" role="status" aria-live="polite">Data berhasil disimpan.</div>
