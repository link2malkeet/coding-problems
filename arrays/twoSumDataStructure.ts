// Design a data structure that accepts a stream of integers and checks if it has a pair of integers that sum up to a particular value.

// Implement the TwoSum class:

// TwoSum() Initializes the TwoSum object, with an empty array initially.
// void add(int number) Adds number to the data structure.
// boolean find(int value) Returns true if there exists any pair of numbers whose sum is equal to value, otherwise, it returns false.
(() => {
  class TwoSum {
    private nums;
    constructor() {
      this.nums = new Array<number>();
    }
    add(n: number) {
      this.nums.push(n);
      return this.nums;
    }
    find(target: number) {
      const set = new Set();
      let found = false;
      for (let i = 0; i < this.nums.length; i++) {
        const diff = target - this.nums[i];
        if (set.has(diff)) {
          found = true;
        }
        set.add(this.nums[i]);
      }
      return found;
    }
  }

  const twoSum = new TwoSum();
  console.log(twoSum.add(1));
  console.log(twoSum.add(3));
  console.log(twoSum.add(5));
  console.log(twoSum.find(4));
})();
