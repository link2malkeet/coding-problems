// The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.
// The Proxy object allows you to create an object that can be used in place of the original object, but which may redefine fundamental Object operations like getting, setting, and defining properties. Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs, and so on.
(() => {
  const target = {
    message1: "hello",
    message2: "everyone",
  };

  const handler1 = {};

  const proxy1 = new Proxy(target, handler1);

  console.log("proxy1:", proxy1);

  const handler2 = {
    get(target, prop, receiver) {
      console.log("target:", target);
      console.log("prop:", prop);
      console.log("receiver:", receiver);
      return "world";
    },
  };
  const proxy2 = new Proxy(target, handler2);

  console.log("proxy2:", proxy2.message2);
})();
