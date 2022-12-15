// Given an integer x, return true if x is a palindrome, and false otherwise.

function isPalindrome_1(x: number): boolean {
    return x === Number(x.toString().split('').reverse().join(''));
};

console.log(isPalindrome_1(121))
console.log(isPalindrome_1(111))
console.log(isPalindrome_1(23423))
console.log(isPalindrome_1(0))


function isPalindrome_2(x: number): boolean {
    const str = x.toString();
    for (let i = 0, j = str.length - 1; i < Math.floor(str.length / 2); i++, j--) {
        if (str[i] !== str[j]) {
            return false
        }
    }
    return true;
}


console.log(isPalindrome_2(121))
console.log(isPalindrome_2(111))
console.log(isPalindrome_2(23423))
console.log(isPalindrome_2(0))