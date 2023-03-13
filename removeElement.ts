// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.

// int k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.
function removeElement(nums: number[], val: number): number {
  let i = 0;
  while (nums.includes(val)) {
    const index = nums.indexOf(val);
    if (index > -1) {
      nums.splice(index, 1);
    }
  }
  return nums.length;
}

console.log(removeElement([3, 2, 2, 3], 3));

//  this would work but the filter method creates a new array, the instructions indicate that nums should be changed in place.
function removeElement2(nums: number[], val: number): number {
  const newArray = nums.filter((n) => n !== val);
  return newArray.length;
}

console.log(removeElement2([3, 2, 2, 3], 3));

function removeElement3(nums: number[], val: number): number {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element === val) {
    } else {
      nums[k++] == element;
    }
  }
  return k;
}

console.log(removeElement3([3, 2, 2, 3], 3));
