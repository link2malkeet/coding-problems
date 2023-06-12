const forbiddenMethods = new Set([
  "pop",
  "push",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse",
]);

var makeImmutable = function (obj) {
  return new Proxy(obj, {
    set(target, prop) {
      if (Array.isArray(target)) {
        throw `Error Modifying Index: ${prop}`;
      }
      throw `Error Modifying: ${prop}`;
    },
    get(target, prop) {
      if (typeof target[prop] === "object" && target[prop] !== null) {
        return makeImmutable(target[prop]);
      }

      if (typeof target[prop] === "function") {
        return new Proxy(target[prop], {
          apply(...args) {
            if (!forbiddenMethods.has(prop)) {
              return Reflect.apply(...args);
            }
            throw `Error Calling Method: ${prop}`;
          },
        });
      }

      return target[prop];
    },
  });
};
