// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

(() => {
  // without space
  function subarraySum(nums: number[], k: number): number {
    let count = 0;
    for (let start = 0; start < nums.length; start++) {
      let sum = 0;
      for (let end = start; end < nums.length; end++) {
        sum += nums[end];
        if (sum === k) {
          count++;
        }
      }
    }

    return count;
  }

  console.log("subarraySum:", subarraySum([3, 4, 7, 2, -3, 1, 4, 2], 7));
  // brute force
  function subarraySum_2(nums: number[], k: number): number {
    let count = 0;
    for (let start = 0; start < nums.length; start++) {
      for (let end = start + 1; end <= nums.length; end++) {
        let sum = 0;
        for (let i = start; i < end; i++) {
          sum += nums[i];
        }
        if (sum === k) {
          count++;
        }
      }
    }
    return count;
  }
})();
