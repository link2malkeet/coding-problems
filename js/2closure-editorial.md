# Overview

This question is intended as an introduction to closures. In JavaScript, functions have a reference to all variables declared in the same scope as well as any outer scopes. These scopes are known as the function's lexical environment. The combination of the function and it's environment is known as a closure.

### Closure Example

In Javascript, you can declare functions within other functions and return them. The inner function has access to any variables declared above it.

```
function createAdder(a) {
    return function add(b) {
        const sum = a + b;
        return sum;
    }
}
const addTo2 = createAdder(2);
addTo2(5); // 7
```

The inner function add has access to a. This allows the outer function to serve as a factory of new functions, each with different behavior.

### Closures Versus Classes

You may notice that in the above example createAdder is very similar to a class constructor.

```
class Adder {
    constructor(a) {
        this.a = a;
    }

    add(b) {
        const sum = this.a + b;
        return sum;
    }
}
const addTo2 = new Adder(2);
addTo2.add(5); // 7
```

Besides differences in syntax, both code examples essentially serve the same purpose. They both allow you to pass in some state in a "constructor" and have "methods" that access this state.

One key difference is that closures allow for true encapsulation. In the class example, there is nothing stopping you from writing addTo2.a = 3; and breaking it's expected behavior. However, in the closure example, it is theoretically impossible to access a. Note that as of 2022, true encapsulation is achievable in classes with # [prefix syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields). Or you can use Typescript to create classes with private variables.

Another difference is how the functions are stored in memory. If you create many instances of a class, each instance stores a single reference to the prototype object where all the methods are stored. Whereas for closures, all the "methods" are generated and a "copy" of each is stored in memory each time the outer function is called. For this reason, classes can be more efficient, particularly in the case where there are many methods.

Unlike in languages like Java, you will tend to see code written with functions rather than with classes. But since JavaScript is a multi-paradigm language, it will depend on the particular project you are working on.

# JavaScript Objects

At their core, objects are just mappings from strings to other values. The values can be anything: strings, functions, other objects, etc. The string that maps to the value is called the key.

```
const object = {
    "num": 1,
    "str": "Hello World",
    "obj": {
        "x": 5
    }
};
```

There are three ways to access values on an object:

```
Dot Notation.
    const val = object.obj.x;
    console.log(val); // 5
Bracket Notation. This is used when the key isn't valid variable name. For example ".123".
    const val = object["obj"]["x"];
    console.log(val); // 5
Destructuring Syntax. This is most useful when accessing multiple values at once. You can read more about the syntax here.
    const { num, str} = object;
    console.log(num, str); // 1 "Hello World"
```

### Classes and Prototypes

You can also define classes in JavaScript. The classes's constructor returns an object which is an instance of that class.

```
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
            console.log("My name is", this.name);
    }
}

const alice = new Person("Alice", 25);
alice.greet(); // Logs: "My name is Alice"
```

JavaScript implements classes with special objects call prototypes. All the methods (in this case greet) are functions stored on the object's prototype.

To make this concrete, the behavior of the above code could be replicated with the following code:

```
const alice = {
    name: "Alice",
    age: 25,
    __proto__: {
        greet: function() {
            console.log("My name is", this.name);
        }
    }
};
alice.greet(); // Logs: "My name is Alice"
```

Looking at this code, you might wonder "How can you access the greet method even though it's not a key on the alice object"?

The reason is that accessing keys on an object is actually slightly more complicated than just looking at the object's keys. There is actually an algorithm that traverse the prototype chain. First, JavaScript looks at the keys on the object. If the requested key wasn't found, it then looks on the keys of the prototype object. If it still wasn't found, it looks at the prototype's prototype, and so on. This is how inheritance is implemented in JavaScript!

You might also wonder why JavaScript has this strange prototype concept at all. Why not just store the functions on the object itself? The answer is efficiency. Every time a new Person is created, age and name fields are added to the object. However only a single reference to the prototype object is added. So no matter how many instances of Person are created or how many methods are on the class, only a single prototype object is generated.

You can read more about classes here.

### Proxies

An infrequently used but powerful feature of javascript is the proxy. They allow you to override the default behavior of objects.

For example, to implement the alice object with proxies:

```
const alice = new Proxy({name: "Alice", age: 25}, {
    get: (target, key) => {
        if (key === 'greet') {
            return () => console.log("My name is", target.name);
        } else {
            return target[key];
        }
    },
});
alice.greet(); // Logs: "My name is Alice"
```

Examples
Here are some examples of potentially practical use-cases for proxies.

Perform validation to guarantee bad data is never entered into a form.
Code Example

```
const validator = {
    set: (obj, prop, value) => {
        if (prop === "age") {
            if (typeof value !== "number" || value < 0) {
                throw new TypeError("Age must be a positive number");
            }
        }
        obj[prop] = value;
    },
};

const person = new Proxy({}, validator);
person.age = 25; // Works fine
person.age = -5; // Throws an error
```

Create a log any time a key is accessed. This could be useful as a developer tool.

Code Example

Throw an error if a an attempt was made to write to a readonly value.
Code Example
const READONLY_KEYS = ['name'];

```
const person = new Proxy({ name: "Alice", age: 25 }, {
    set: (target, key, value) => {
        if (READONLY_KEYS.includes(key)) {
            throw Error("Cannot write to key");
        }
        target[key] = value;
        return true;
    }
});
person.name = "Bob"; // Throws Error
```

Create a modified version of an immutable object by writing to it's proxy.
