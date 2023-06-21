function minCost(nums: number[], cost: number[]): number {
  let minCost = 0;
  const costs = [];
  for (let i = 0; i < nums.length; i++) {
    const currentBase = nums[i];
    let totalCostPerBase = 0;
    for (let j = 0; j < nums.length; j++) {
      if (currentBase < nums[j]) {
        const diff = nums[j] - currentBase;
        totalCostPerBase += diff * cost[j];
      } else if (currentBase > nums[j]) {
        const diff = currentBase - nums[j];
        totalCostPerBase += diff * cost[j];
      }
    }
    costs.push(totalCostPerBase);
  }
  return Math.min.apply(null, costs);
}

console.log(minCost([1, 3, 5, 2], [2, 3, 1, 14]));
