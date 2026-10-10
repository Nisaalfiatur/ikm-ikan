<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'pages.dashboard', ['pageTitle' => 'Beranda'])->name('dashboard');
Route::view('/dashboard', 'pages.dashboard', ['pageTitle' => 'Beranda']);
Route::view('/penjualan', 'pages.sales', ['pageTitle' => 'Penjualan'])->name('sales');
Route::view('/stok', 'pages.stock', ['pageTitle' => 'Stok & produksi'])->name('stock');
Route::view('/keuangan', 'pages.finance', ['pageTitle' => 'Keuangan'])->name('finance');
Route::view('/master-data', 'pages.master', ['pageTitle' => 'Master data'])->name('master');
Route::view('/pengaturan', 'pages.settings', ['pageTitle' => 'Pengaturan'])->name('settings');
