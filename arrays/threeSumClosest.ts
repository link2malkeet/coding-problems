// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
(() => {
  function threeSumClosest(nums: number[], target: number): number {
    const n = nums.length;
    nums.sort((a, b) => a - b);

    let closestSum = Infinity;
    let minDiff = Infinity;

    for (let i = 0; i < n - 2; i++) {
      let left = i + 1;
      let right = n - 1;

      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        const diff = Math.abs(target - sum);
        if (diff < minDiff) {
          minDiff = diff;
          closestSum = sum;
        }

        if (sum === target) {
          return sum;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
    return closestSum;
  }
  console.log(threeSumClosest([-1, 2, 1, -4], 1));
})();
