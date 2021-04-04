
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

        callback(`${minutes}:${seconds}`);

        if (distance < 0) {
            clearInterval(id);
            callback(null);
        }
    }, 1000);
}

export {pomodoro, shortBreak, longBreak};

