// Given a 0-indexed integer array nums, return the number of distinct quadruplets (a, b, c, d) such that:

// nums[a] + nums[b] + nums[c] == nums[d], and
// a < b < c < d

// Example 1:

// Input: nums = [1,2,3,6]
// Output: 1
// Explanation: The only quadruplet that satisfies the requirement is (0, 1, 2, 3) because 1 + 2 + 3 == 6.

(() => {
  function countQuadruplets(nums: number[]): number {
    const sumCounts: Map<number, number> = new Map();
    const n = nums.length;
    let count = 0;

    // Count the occurrences of the sums of pairs of elements
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        const sum = nums[i] + nums[j];
        if (sumCounts.has(sum)) {
          sumCounts.set(sum, sumCounts.get(sum)! + 1);
        } else {
          sumCounts.set(sum, 1);
        }
      }
    }

    // Check for quadruplets that satisfy the requirement
    for (let c = 2; c < n - 1; c++) {
      for (let d = c + 1; d < n; d++) {
        const dSum = nums[c] + nums[d];
        if (sumCounts.has(dSum)) {
          count += sumCounts.get(dSum)!;
        }
      }
    }

    return count;
  }
  const nums = [1, 2, 3, 6];
  const distinctQuadruplets = countQuadruplets(nums);
  console.log(distinctQuadruplets);
})();
