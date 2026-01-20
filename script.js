// Redireciona para seu portfólio
document.getElementById("contratar-btn").addEventListener("click", () => {
  window.location.href = "https://luisaguiartech.github.io/luisaguiar/";
});

// Contador fixo para demonstração (não personalizável)
const targetDate = new Date("May 31, 2026 06:55:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").textContent = "Chegou!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("countdown").textContent =
    `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

setInterval(updateCountdown, 1000);

// Registra Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(console.warn);
  });
}