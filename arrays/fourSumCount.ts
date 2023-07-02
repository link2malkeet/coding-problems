// Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:

// 0 <= i, j, k, l < n
// nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

// Example 1:

// Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
// Output: 2
// Explanation:
// The two tuples are:
// 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
// 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
(() => {
  function fourSumCount(
    nums1: number[],
    nums2: number[],
    nums3: number[],
    nums4: number[]
  ): number {
    const map = new Map();
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
        const sum = nums1[i] + nums2[j];
        if (map.has(sum)) {
          map.set(sum, map.get(sum) + 1);
        } else {
          map.set(sum, 1);
        }
      }
    }
    let count = 0;
    for (let k = 0; k < nums3.length; k++) {
      for (let l = 0; l < nums4.length; l++) {
        const sum = -(nums3[k] + nums4[l]);
        if (map.has(sum)) {
          count += map.get(sum);
        }
      }
    }
    return count;
  }
  const nums1 = [1, 2];
  const nums2 = [-2, -1];
  const nums3 = [-1, 2];
  const nums4 = [0, 2];
  const count = fourSumCount(nums1, nums2, nums3, nums4);
  console.log(count);
})();
