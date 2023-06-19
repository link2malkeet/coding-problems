function equalPairs(grid: number[][]): number {
  const rowMap = new Map<string, number>();
  for (let row of grid) {
    const key = row.join(",");
    rowMap.set(key, (rowMap.get(key) || 0) + 1);
  }

  let res = 0;
  for (let c = 0; c < grid.length; c++) {
    const column = [];
    for (let r = 0; r < grid[0].length; r++) {
      column.push(grid[r][c]);
    }
    const columnKey = column.join(",");
    if (rowMap.has(columnKey)) {
      res += rowMap.get(columnKey);
    }
  }

  return res;
}

const grid1 = [
  [3, 2, 1],
  [1, 7, 6],
  [2, 7, 7],
];
console.log(equalPairs(grid1)); // Output: 1
