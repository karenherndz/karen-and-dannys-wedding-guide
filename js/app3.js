// Countdown
function updateCountdown() {
    const weddingDate = new Date('2026-04-11T00:00:00');
    const now = new Date();
    const diff = weddingDate - now;
    const el = document.getElementById('countdown');
    if (!el) return;

    if (diff <= 0) {
        el.textContent = "Today is the day!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days === 1) {
        el.textContent = "Tomorrow is the day!";
    } else {
        el.textContent = `${days} days to go`;
    }
}

updateCountdown();
setInterval(updateCountdown, 60000);
