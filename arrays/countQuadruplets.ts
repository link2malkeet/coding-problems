// Given a 0-indexed integer array nums, return the number of distinct quadruplets (a, b, c, d) such that:

// nums[a] + nums[b] + nums[c] == nums[d], and
// a < b < c < d

// Example 1:

// Input: nums = [1,2,3,6]
// Output: 1
// Explanation: The only quadruplet that satisfies the requirement is (0, 1, 2, 3) because 1 + 2 + 3 == 6.

(() => {
  function countQuadruplets(nums: number[]): number {
    const n = nums.length;
    let count = 0;

    for (let a = 0; a < n; a++) {
      for (let b = a + 1; b < n; b++) {
        for (let c = b + 1; c < n; c++) {
          for (let d = c + 1; d < n; d++) {
            if (nums[a] + nums[b] + nums[c] === nums[d]) {
              count++;
            }
          }
        }
      }
    }

    return count;
  }
  const nums = [1, 2, 3, 6];
  const distinctQuadruplets = countQuadruplets(nums);
  console.log(distinctQuadruplets);
})();
