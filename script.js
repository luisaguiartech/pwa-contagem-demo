// Ação do botão: abre e-mail com assunto pré-preenchido
document.getElementById("contratar-btn").addEventListener("click", () => {
  const email = "luisaguiartech@gmail.com";
  const subject = encodeURIComponent("Quero meu PWA personalizado");
  const body = encodeURIComponent(
    "Olá! Vi sua demonstração e gostaria de encomendar um PWA com contador regressivo para meu evento."
  );
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
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

// Atualiza a cada segundo
setInterval(updateCountdown, 1000);

// Registra Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(console.warn);
  });
}