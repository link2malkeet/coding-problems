// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.
const arr = [1, 2, 3];
const fn = (n: number, i: number = 1) => {
  return n + i;
};
(function map(arr: number[], fn: (n: number, i?: number) => number): number[] {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    newArray.push(fn(element));
  }
  return newArray;
})(arr, fn);
(() => {
  function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const newArr = new Int32Array(arr.length);
    for (let i = 0; i < arr.length; ++i) {
      newArr[i] = fn(arr[i], i);
    }
    return newArr as unknown as number[];
  }
})();
