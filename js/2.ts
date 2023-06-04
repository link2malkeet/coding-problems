// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
function createCounter(n: number): () => number {
  let count = n;
  return () => count++;
}

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());

class Counter {
  private a;
  constructor(a) {
    this.a = a;
  }

  counter() {
    return this.a++;
  }
}
const counterInstance = new Counter(10);
console.log(counterInstance.counter());
console.log(counterInstance.counter());
console.log(counterInstance.counter());
