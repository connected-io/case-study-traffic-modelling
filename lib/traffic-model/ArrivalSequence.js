

class ArrivalSequence {
  constructor({ durationInTicks, arrivalProbability }) {
    this.durationInTicks = durationInTicks;
    this.arrivalProbability = arrivalProbability;
  }

  isArrival() {
    return Math.random() < this.arrivalProbability;
  }

  generate() {
    const arrivalSequence = [];

    for (let i = 0; i < this.durationInTicks; i += 1) {
      if (this.isArrival()) arrivalSequence.push(true);
      else arrivalSequence.push(false);
    }

    return arrivalSequence;
  }
}

module.exports = ArrivalSequence;
