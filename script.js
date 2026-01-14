document.getElementById('contratar-btn').addEventListener('click', () => {
  alert('Entre em contato conosco para personalizar seu PWA!');
  window.location.href = 'mailto:luis.contato@email.com';
});

// Contagem regressiva fixa para demonstração
const targetDate = new Date("May 31, 2026 06:55:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById('countdown').innerHTML = '🎉 Chegou!';
    return;
  }

  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;

  const days = Math.floor(diff / day);
  const hours = Math.floor((diff % day) / hour);
  const minutes = Math.floor((diff % hour) / min);
  const seconds = Math.floor((diff % min) / sec);

  document.getElementById('countdown').innerHTML = `
    ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos
  `;
}

setInterval(updateCountdown, 1000);