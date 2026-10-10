<aside class="sidebar">
    <div class="brand"><span class="brand-mark">✦</span><div><strong>IKM Catat</strong><small>Olahan ikan & ayam</small></div></div>
    <span class="nav-label">MENU UTAMA</span>
    <nav class="nav-list" aria-label="Navigasi utama">
        <a class="nav-item {{ request()->routeIs('dashboard') ? 'active' : '' }}" href="{{ route('dashboard') }}"><span class="nav-icon">⌂</span><span>Beranda</span></a>
        <a class="nav-item {{ request()->routeIs('sales') ? 'active' : '' }}" href="{{ route('sales') }}"><span class="nav-icon">▣</span><span>Penjualan</span><b class="sales-badge">3</b></a>
        <a class="nav-item {{ request()->routeIs('stock') ? 'active' : '' }}" href="{{ route('stock') }}"><span class="nav-icon">◈</span><span>Stok & produksi</span></a>
        <a class="nav-item {{ request()->routeIs('finance') ? 'active' : '' }}" href="{{ route('finance') }}"><span class="nav-icon">↗</span><span>Keuangan</span></a>
        <a class="nav-item {{ request()->routeIs('master') ? 'active' : '' }}" href="{{ route('master') }}"><span class="nav-icon">☷</span><span>Master data</span></a>
        <a class="nav-item {{ request()->routeIs('settings') ? 'active' : '' }}" href="{{ route('settings') }}"><span class="nav-icon">⚙</span><span>Pengaturan</span></a>
    </nav>
    <div class="sidebar-note"><span>☀</span><div><strong>Selamat pagi!</strong><small>Catatan kecil hari ini membantu usaha tumbuh.</small></div></div>
</aside>
