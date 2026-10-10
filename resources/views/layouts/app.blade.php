<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Sistem pencatatan penjualan, stok, dan keuangan untuk IKM olahan ikan & ayam.">
    <title>{{ $pageTitle ?? 'IKM Catat' }} · {{ config('app.name', 'IKM Catat') }}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
    <div class="app-shell">
        @include('partials.sidebar')
        <main class="main-content">
            <header class="topbar">
                <button class="menu-button" aria-label="Buka menu">☰</button>
                <div class="topbar-copy">
                    <p class="eyebrow">{{ now()->locale('id')->translatedFormat('l, j F Y') }}</p>
                    <h1>{{ $pageTitle ?? 'Beranda' }}</h1>
                    <span class="topbar-note">✦ Catatan tersimpan aman di perangkat ini</span>
                </div>
                <div class="topbar-actions">
                    <span class="online-pill"><i></i> Lokal</span>
                    <button class="avatar" aria-label="Profil pemilik">P</button>
                </div>
            </header>
            @yield('content')
        </main>
    </div>
    @include('partials.modals')
    @stack('scripts')
</body>
</html>
