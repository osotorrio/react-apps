let id;
let currentTimerSeconds = 1500; // 25 minutes

const pomodoro = (callback) => {
  currentTimerSeconds = 1500;
  createTimer(callback);
};

const shortBreak = (callback) => {
  currentTimerSeconds = 300;
  createTimer(callback);
};

const longBreak = (callback) => {
  currentTimerSeconds = 600;
  createTimer(callback);
};

const startTimer = (callback) => {
  createTimer(callback);
};

const stopTimer = () => {
  if (id) clearInterval(id);
};

function createTimer(callback) {
  if (id) clearInterval(id);

  id = setInterval(function () {
    const time = convertSecsToMinsSecs(currentTimerSeconds);
    currentTimerSeconds--;
    callback(formatTime(time.minutes, time.seconds));

    if (currentTimerSeconds < 0) {
      clearInterval(id);
      callback('00:00');
    }
  }, 1000);
}

function convertSecsToMinsSecs(secs) {
  const minutes = Math.floor(secs / 60);
  const seconds = secs - minutes * 60;
  return { minutes: minutes, seconds: seconds };
}

function formatTime(minutes, seconds) {
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;
  return `${minutes}:${seconds}`;
}

export { pomodoro, shortBreak, longBreak, startTimer, stopTimer };
