
let id;

const pomodoro = (callback) => {
    createTimer(25, callback)
}

const shortBreak = (callback) => {
    createTimer(5, callback)
}

const longBreak = (callback) => {
    createTimer(10, callback)
}

const createTimer = (minutes, callback) => {
    const countDownDate = new Date(new Date().getTime() + minutes*60000).getTime();

    if (id) clearInterval(id);
    
    id = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        callback(formatTime(minutes, seconds));

        if (distance < 0) {
            clearInterval(id);
            callback("00:00");
        }
    }, 1000);
}

function formatTime(minutes, seconds){
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;
    return `${minutes}:${seconds}`
}

export {pomodoro, shortBreak, longBreak};

