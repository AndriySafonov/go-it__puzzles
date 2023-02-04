
const timer = document.getElementById('timer');
const stopBtn = document.getElementById('stopBtn');
const startBtn = document.getElementById('startBtn');

//  задати дату наступного Нового року (поточний рік + 1)
const countDownDate = new Date(`Jan 1, ${new Date().getFullYear() + 1}`);


let intervalId = setInterval(countDownTimeToNY, 1000);

stopBtn.addEventListener('click', stopTimer);
startBtn.addEventListener('click', startTimer);

function countDownTimeToNY() {
  //  задати поточну дату і відняти її від дати Нового року (отримаємо різницю дат в мілісекундах)
  const now = Date.now();
  // const now1 = new Date().getTime(); - второй вариант задать текущую дату
  const diff = countDownDate - now;
  console.log('diff', diff);

  //  витягнемо з кількості мілісекуд дні, години, хвилини і секунди
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  //    запихнути ці дані у параграф
  timer.textContent = `${days} d. ${addZero(hours)} h. ${addZero(
    minutes
  )} m. ${addZero(seconds)} s.`;
}
function startTimer() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  intervalId = setInterval(countDownTimeToNY, 1000);
}

//  оcстановити таймер по натисканню на кнопку стоп
function stopTimer() {
  stopBtn.disabled = true;
  startBtn.disabled = false;
  clearInterval(intervalId);
  // alert('The timer has been stopped!');
}

//  добавляем 0 к часам минутам и секундам
function addZero(number) {
  return String(number).padStart(2, 0);
  // alert('The timer has been started!');
}
