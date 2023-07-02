// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

// Constraints:

// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109

(() => {
  function fourSum(nums: number[], target: number): number[][] {
    const n = nums.length;
    const result = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < n - 3; i++) {
      if (i > 0 && nums[i - 1] === nums[i]) {
        continue;
      }
      for (let j = i + 1; j < n - 2; j++) {
        if (j > i + 1 && nums[j - 1] === nums[j]) {
          continue;
        }
        let left = j + 1;
        let right = n - 1;
        while (left < right) {
          const sum = nums[i] + nums[j] + nums[left] + nums[right];

          if (sum === target) {
            result.push([nums[i], nums[j], nums[left], nums[right]]);
            while (left < right && nums[left] === nums[left + 1]) {
              left++;
            }
            while (left < right && nums[right] === nums[right - 1]) {
              right--;
            }
            left++;
            right--;
          } else if (sum < target) {
            left++;
          } else {
            right--;
          }
        }
      }
    }
    return result;
  }
  const nums = [1, 0, -1, 0, -2, 2];
  const target = 0;
  const quadruplets = fourSum(nums, target);
  console.log(quadruplets);
})();
