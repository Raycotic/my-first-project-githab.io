const btn = document.getElementById('interestBtn');
const msg = document.getElementById('thanksMsg');
const counter = document.getElementById('counter');

// Загружаем текущее количество нажатий из localStorage
let count = localStorage.getItem('interestCount') || 0;
counter.textContent = `Уже ${count} человек заинтересовались`;

btn.addEventListener('click', () => {
  msg.classList.remove('hidden');
  btn.disabled = true;
  btn.textContent = 'Отправлено!';

  // Увеличиваем счётчик и сохраняем
  count++;
  localStorage.setItem('interestCount', count);
  counter.textContent = `Уже ${count} человек заинтересовались`;
});
