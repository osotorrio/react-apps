
const pomodoro = (callback) => {
    const countDownDate = new Date(new Date().getTime() + 25*60000).getTime();

    const id = setInterval(function() {
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

export default {pomodoro};

