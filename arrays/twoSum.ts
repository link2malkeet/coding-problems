// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.
(() => {
  function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (map.has(diff)) {
        return [map.get(diff), i];
      } else {
        map.set(nums[i], i);
      }
    }
  }
  console.log(twoSum([2, 7, 11, 15], 9));
  console.log(twoSum([3, 3], 6));
})();
