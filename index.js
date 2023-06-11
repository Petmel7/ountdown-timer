class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.timerRef = document.querySelector(selector);
    this.daysRef = this.timerRef.querySelector('[data-value="days"]');
    this.hoursRef = this.timerRef.querySelector('[data-value="hours"]');
    this.minsRef = this.timerRef.querySelector('[data-value="mins"]');
    this.secsRef = this.timerRef.querySelector('[data-value="secs"]');
    this.targetDate = targetDate;

    this.start();
  }

  start() {
    this.updateTimer();

    this.intervalId = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  updateTimer() {
    const time = this.targetDate - Date.now();

    if (time <= 0) {
      this.stop();
      return;
    }

    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    );
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.updateUI(days, hours, mins, secs);
  }

  updateUI(days, hours, mins, secs) {
    this.daysRef.textContent = days;
    this.hoursRef.textContent = hours;
    this.minsRef.textContent = mins;
    this.secsRef.textContent = secs;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  stop() {
    clearInterval(this.intervalId);
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});
