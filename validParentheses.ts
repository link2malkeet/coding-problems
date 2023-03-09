// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
const LEGENDS: Record<string, string> = {
  "[": "]",
  "(": ")",
  "{": "}",
} as const;
function isValidParentheses(str: string) {
  if (str.length <= 1) {
    return false;
  }
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element in LEGENDS) {
      stack.push(element);
    } else {
      if (LEGENDS[stack.pop()] !== element) return false;
    }
  }
  return true;
}

console.log(isValidParentheses("()[]{}"));
console.log(isValidParentheses("("));
console.log(isValidParentheses("(((())))"));

function isValidParentheses2(str: string) {
  if (str.length <= 1) {
    return false;
  }
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    switch (element) {
      case "(":
      case "{":
      case "[":
        stack.push(element);
        continue;
      case ")":
      case "]":
      case "}":
        if (LEGENDS[stack.pop()] !== element) return false;
    }
  }
  return true;
}

console.log(isValidParentheses2("()[]{}"));
console.log(isValidParentheses2("("));
console.log(isValidParentheses2("(((())))"));
