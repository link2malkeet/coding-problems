const MAX_NUMBER = Math.pow(2, 31) - 1;
const MIN_NUMBER = Math.pow(-2, 31);
function reverse(nn: number): number {
  let revNum = 0;
  let n = Math.abs(nn);
  while (n !== 0) {
    revNum = revNum * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  if (revNum > MAX_NUMBER || revNum < MIN_NUMBER) {
    return 0;
  } else {
    return Math.sign(nn) * revNum;
  }
}

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(320));
