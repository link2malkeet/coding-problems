// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Sol 1
function twoSum(nums: number[], target: number) {
    const map: Record<number, number> = {};
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        if (map[current] === undefined) {
            map[target - current] = i;
        } else {
            return [map[current], i]
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9));


// Sol 2
function twoSum2(nums: number[], target: number) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[j] + nums[i] === target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum2([2, 7, 11, 15], 9));

// The time complexity of our solution is O(n).
