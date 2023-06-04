// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

function counter2(n: number) {
  let count = n;
  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
    reset() {
      count = n;
      return count;
    },
  };
}

const counter2var = counter2(5);
console.log(counter2var.increment()); // 6
console.log(counter2var.reset()); // 5
console.log(counter2var.decrement()); // 4

class Counter2 {
  private count;
  private initVal;
  constructor(n) {
    this.count = n;
    this.initVal = n;
  }
  increment() {
    return ++this.count;
  }
  decrement() {
    return --this.count;
  }
  reset() {
    this.count = this.initVal;
    return this.count;
  }
}

const counter2class = function (n) {
  return new Counter2(n);
};
const counter2instance = counter2class(5);
console.log(counter2instance.increment()); // 6
console.log(counter2instance.reset()); // 5
console.log(counter2instance.decrement()); // 4
