// Given a string s, find the length of the longest substring without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

// brute force
function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    const set = new Set<string>();
    for (let j = i; j < s.length; j++) {
      const char = s[j];
      if (set.has(char)) {
        break;
      }
      set.add(char);
    }
    maxLength = Math.max(maxLength, set.size);
  }
  return maxLength;
}

console.assert(
  lengthOfLongestSubstring("abcabcdbb") === 4,
  "implementation is not right"
);

// brute force use hash map
function lengthOfLongestSubstring_1(s: string): number {
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    const map = new Map<string, number>();
    let length = 0;
    for (let j = i; j < s.length; j++) {
      const char = s[j];
      if (map.has(char) && map.get(char) >= i) {
        i = map.get(char);
        break;
      }
      map.set(char, j);
      length++;
    }
    maxLength = Math.max(maxLength, length);
  }
  return maxLength;
}

console.assert(
  lengthOfLongestSubstring_1("abcabcbb") === 3,
  "implementation is not right"
);

// sliding window
function lengthOfLongestSubstring_2(s: string): number {
  let maxLength = 0;
  let start = 0;
  const charIndexMap = new Map<string, number>();

  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
      start = charIndexMap.get(char) + 1;
    }
    charIndexMap.set(char, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.assert(
  lengthOfLongestSubstring_2("abcabcbb") === 3,
  "implementation is not right"
);
