/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given
 * number of rows like this: (you may want to display this pattern in a
 * fixed font for better legibility)
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows:
 *
 * @param s - input string where (1 <= s.length <= 1000) s consists of English letters
 *            (lower-case and upper-case), ',' and '.'.
 * @param numRows - given number of rows where (1 <= numRows <= 1000)
 * @returns The converted string
 */
function convert(s: string, numRows: number): string {
  if (s.length === 1 || numRows >= s.length) {
    return s;
  }
  let index = 0;
  let step = 1;
  const arr = Array(numRows).fill("");
  for (let i = 0; i < s.length; i++) {
    arr[index] += s[i];
    if (index === 0) {
      step = 1;
    } else if (index === numRows - 1) {
      step = -1;
    }
    index += step;
  }
  return arr.join("");
}

const s = "PAYPALISHIRING";
const numRows = 3;
console.log(convert(s, numRows)); // Output: "PAHN APLSIIG YIR"
