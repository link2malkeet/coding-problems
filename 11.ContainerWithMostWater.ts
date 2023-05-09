function maxArea(height: number[]): number {
  let finalArea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const width = j - i;
      // rectangle area
      const rectangleHeight = Math.min(height[j], height[i]);
      const area1 = rectangleHeight * width;
      const totalArea = area1;
      finalArea = Math.max(finalArea, totalArea);
    }
  }
  return finalArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
