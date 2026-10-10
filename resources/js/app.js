const storageKey = 'ikm-catat-v1';
const saleModal = document.querySelector('#sale-modal');
const expenseModal = document.querySelector('#expense-modal');
const saleForm = document.querySelector('#sale-form');
const expenseForm = document.querySelector('#expense-form');
const toast = document.querySelector('#toast');
const sidebar = document.querySelector('.sidebar');

const seed = {
    sales: [
        { id: 'INV-0261', customer: 'Bu Rina', product: 'Abon ikan tenggiri', quantity: 4, total: 420000, payment: 'Lunas', createdAt: '2026-10-07T09:42:00' },
        { id: 'INV-0260', customer: 'Warung Berkah', product: 'Nugget ayam', quantity: 10, total: 780000, payment: 'Belum lunas', createdAt: '2026-10-07T08:15:00' },
        { id: 'INV-0259', customer: 'Pak Dedi', product: 'Bakso ikan', quantity: 5, total: 265000, payment: 'Lunas', createdAt: '2026-10-06T16:20:00' },
    ],
    expenses: [
        { description: 'Belanja bahan baku', category: 'Bahan baku', amount: 280000, createdAt: '2026-10-06T10:00:00' },
        { description: 'Gas dan kemasan', category: 'Operasional', amount: 165000, createdAt: '2026-10-05T13:00:00' },
        { description: 'Ongkos kirim', category: 'Distribusi', amount: 90000, createdAt: '2026-10-04T15:00:00' },
    ],
    checklist: [true, true, false, false],
    role: 'Pemilik',
};

const loadState = () => {
    try { return { ...seed, ...JSON.parse(localStorage.getItem(storageKey) || '{}') }; } catch { return seed; }
};
let state = loadState();
const saveState = () => localStorage.setItem(storageKey, JSON.stringify(state));
const formatCurrency = (value) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
const parseAmount = (value) => Number(String(value).replace(/[^0-9]/g, '')) || 0;
const formatDate = (value) => new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(value));
const showToast = (message) => { if (!toast) return; toast.textContent = message; toast.classList.add('show'); window.setTimeout(() => toast.classList.remove('show'), 2800); };
const setModal = (modal, open) => { if (!modal) return; modal.hidden = !open; document.body.classList.toggle('modal-open', open); if (open) modal.querySelector('input')?.focus(); };

const renderDashboard = () => {
    const salesTotal = state.sales.reduce((total, sale) => total + sale.total, 0);
    const expenseTotal = state.expenses.reduce((total, expense) => total + expense.amount, 0);
    ['dashboard-sales', 'dashboard-expenses', 'dashboard-profit'].forEach((className, index) => { const element = document.querySelector(`.${className}`); if (element) element.textContent = formatCurrency([salesTotal, expenseTotal, salesTotal - expenseTotal][index]); });
};
const renderSales = () => {
    const table = document.querySelector('.sale-table');
    if (!table) return;
    table.innerHTML = '<div class="table-head"><span>No. bill</span><span>Pelanggan</span><span>Total</span><span>Status</span></div>' + state.sales.map((sale) => `<div class="table-row"><span><strong>#${sale.id}</strong><small>${formatDate(sale.createdAt)}</small></span><span>${sale.customer}</span><span>${formatCurrency(sale.total)}</span><span class="status ${sale.payment === 'Lunas' ? 'paid' : 'warning'}">${sale.payment}</span></div>`).join('');
    const summary = document.querySelectorAll('.summary-strip strong');
    if (summary.length >= 3) { summary[0].textContent = formatCurrency(state.sales.reduce((total, sale) => total + sale.total, 0)); summary[1].textContent = state.sales.length; summary[2].textContent = state.sales.filter((sale) => sale.payment !== 'Lunas').length; }
    const badge = document.querySelector('.sales-badge');
    if (badge) badge.textContent = state.sales.filter((sale) => sale.payment !== 'Lunas').length;
};
const renderFinance = () => {
    const salesTotal = state.sales.reduce((total, sale) => total + sale.total, 0);
    const expenseTotal = state.expenses.reduce((total, expense) => total + expense.amount, 0);
    const profitTotal = salesTotal - expenseTotal;
    document.querySelectorAll('.finance-card strong').forEach((element, index) => { element.textContent = formatCurrency([salesTotal, expenseTotal, profitTotal][index]); });
    [['.cashflow-income', salesTotal], ['.cashflow-expense', expenseTotal], ['.cashflow-profit', profitTotal]].forEach(([selector, value]) => { const element = document.querySelector(selector); if (element) element.textContent = formatCurrency(value); });
    const list = document.querySelector('.expense-list');
    if (list) list.innerHTML = state.expenses.map((expense) => `<div class="expense-item"><span class="activity-icon expense">−</span><div><strong>${expense.description}</strong><small>${formatDate(expense.createdAt)} · ${expense.category}</small></div><b>− ${formatCurrency(expense.amount)}</b></div>`).join('');
};
const renderChecklist = () => document.querySelectorAll('.check-item input').forEach((input, index) => { input.checked = Boolean(state.checklist[index]); });
const render = () => { renderDashboard(); renderSales(); renderFinance(); renderChecklist(); saveState(); };

document.querySelector('.floating-action')?.addEventListener('click', () => setModal(saleModal, true));
document.querySelectorAll('.open-sale').forEach((button) => button.addEventListener('click', () => setModal(saleModal, true)));
document.querySelectorAll('.open-expense').forEach((button) => button.addEventListener('click', () => setModal(expenseModal, true)));
document.querySelector('.close-modal')?.addEventListener('click', () => setModal(saleModal, false));
document.querySelector('.close-expense')?.addEventListener('click', () => setModal(expenseModal, false));
[saleModal, expenseModal].forEach((modal) => modal?.addEventListener('click', (event) => { if (event.target === modal) setModal(modal, false); }));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { setModal(saleModal, false); setModal(expenseModal, false); } });
document.querySelector('.menu-button')?.addEventListener('click', () => sidebar?.classList.toggle('open'));
document.querySelectorAll('.nav-item').forEach((item) => item.addEventListener('click', () => sidebar?.classList.remove('open')));
document.querySelectorAll('.tab').forEach((tab) => tab.addEventListener('click', () => { document.querySelectorAll('.tab').forEach((item) => item.classList.remove('active')); tab.classList.add('active'); }));
document.querySelectorAll('.role').forEach((role) => role.addEventListener('click', () => { document.querySelectorAll('.role').forEach((item) => item.classList.remove('active')); role.classList.add('active'); state.role = role.querySelector('strong').textContent.replace(/^\S+\s/, ''); saveState(); showToast(`Peran diubah ke ${state.role}.`); }));
document.querySelectorAll('.check-item input').forEach((input, index) => input.addEventListener('change', () => { state.checklist[index] = input.checked; saveState(); showToast('Checklist disimpan.'); }));

saleForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(saleForm);
    const nextNumber = state.sales.reduce((highest, sale) => Math.max(highest, Number(sale.id.replace('INV-', '')) || 0), 260) + 1;
    state.sales.unshift({ id: `INV-${nextNumber}`, customer: data.get('customer'), product: data.get('product'), quantity: Number(data.get('quantity')), total: parseAmount(data.get('total')), payment: data.get('payment'), createdAt: new Date().toISOString() });
    saveState(); render(); setModal(saleModal, false); saleForm.reset(); showToast('Penjualan berhasil disimpan.');
});
expenseForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(expenseForm);
    state.expenses.unshift({ description: data.get('description'), category: data.get('category'), amount: parseAmount(data.get('amount')), createdAt: new Date().toISOString() });
    saveState(); render(); setModal(expenseModal, false); expenseForm.reset(); showToast('Pengeluaran berhasil disimpan.');
});

const exportButton = document.querySelector('.export-data');
const importButton = document.querySelector('.import-data');
const importInput = document.querySelector('.import-input');
exportButton?.addEventListener('click', () => { const blob = new Blob([JSON.stringify({ ...state, exportedAt: new Date().toISOString() }, null, 2)], { type: 'application/json' }); const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = `ikm-catat-${new Date().toISOString().slice(0, 10)}.json`; link.click(); URL.revokeObjectURL(url); showToast('Cadangan data berhasil diunduh.'); });
importButton?.addEventListener('click', () => importInput?.click());
importInput?.addEventListener('change', () => { const file = importInput.files?.[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => { try { const imported = JSON.parse(reader.result); if (!Array.isArray(imported.sales) || !Array.isArray(imported.expenses)) throw new Error(); state = { ...seed, ...imported }; render(); showToast('Data berhasil dipulihkan.'); } catch { showToast('File cadangan tidak valid.'); } }; reader.readAsText(file); });

render();
