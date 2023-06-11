// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

function createHelloWorld() {
  return function (...args): string {
    return "Hello World";
  };
}

const f = createHelloWorld();
console.log(f());
