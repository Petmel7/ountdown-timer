
// Отримуємо посилання на елементи таймера
const timerContainer = document.getElementById('timer-1');
const daysElement = timerContainer.querySelector('[data-value="days"]');
const hoursElement = timerContainer.querySelector('[data-value="hours"]');
const minsElement = timerContainer.querySelector('[data-value="mins"]');
const secsElement = timerContainer.querySelector('[data-value="secs"]');

// Задаємо початкову дату та час, до якого відлік буде проводитись
const targetDate = new Date('2023-06-31T23:59:59');

// Функція, яка оновлює значення таймера
function updateTimer() {
  // Отримуємо поточну дату та час
  const currentDate = new Date();

  // Визначаємо різницю між поточною датою та цільовою датою
  const timeDiff = targetDate - currentDate;

  // Переводимо різницю в мілісекунди в дні, години, хвилини та секунди
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Оновлюємо значення елементів таймера
  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minsElement.textContent = mins;
  secsElement.textContent = secs;
}

// Оновлюємо таймер кожну секунду
setInterval(updateTimer, 1000);