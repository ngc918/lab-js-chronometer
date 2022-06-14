class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (arguments.length > 0) printTimeCallback()
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value > 9) {
      return value.toString()
    } else {
      return "0" + value
    }
  }

  stop() {
    // ... your code goes here
    return clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
