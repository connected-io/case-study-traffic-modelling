'use strict';

class Car {
  constructor(totalTime) {
    this.elapsedTime = 0;
    this.totalTime = totalTime;
  }

  remainingTime() {
    return Math.abs(this.totalTime - this.elapsedTime);
  }

  tick() {
    this.elapsedTime++;
  }
}

module.exports = Car;