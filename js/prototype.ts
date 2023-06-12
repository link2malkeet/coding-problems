// Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

// There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.

// In JavaScript, an object is considered an instance of a constructor function (or class) if it has been created using the new keyword with that constructor function, or if it inherits from the prototype of the constructor function. In other words, an object is an instance of a constructor function if it is linked to the constructor's prototype in its prototype chain.
function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (
    obj === null ||
    obj === undefined ||
    typeof classFunction !== "function"
  ) {
    return false;
  }

  return Object(obj) instanceof classFunction;
}

function checkIfInstanceOf_1(obj: any, classFunction: any): boolean {
  if (
    obj === null ||
    obj === undefined ||
    typeof classFunction !== "function"
  ) {
    return false;
  }
  let currentPrototypeObj = Object.getPrototypeOf(obj);
  while (currentPrototypeObj !== null) {
    if (currentPrototypeObj === (classFunction as Function).prototype) {
      return true;
    }
    currentPrototypeObj = Object.getPrototypeOf(currentPrototypeObj);
  }
  return false;
}
