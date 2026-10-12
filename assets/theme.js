try { const t = localStorage.getItem('ct-theme'); if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t; } catch {}
