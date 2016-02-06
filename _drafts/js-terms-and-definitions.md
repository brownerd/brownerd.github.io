---
---



## Closure




--

## Declaritive



---



## Errors

- [null, undefined, and undeclared](http://lucybain.com/blog/2014/null-undefined-undeclared/)
- [TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)

---

## Explicit

It's obvious from the code that you're doing it. (- Kyle Simpson)

```js

// Explicit to Number
var foo = "123"
var baz = parseInt(foo, 10); // 123 not really a coercion

baz = Number(foo;)           // 123 coercion for sure

baz = +foo;                  // 123   using a unary operator


// Explicit coercion to String
baz = 456;
foo = baz.toString();        // "456"

foo = String(baz);           // "456"


// Explicit coercion to Boolean

var foo = "123";
var baz = Boolean(foo);     // true

baz = !!foo;                // true

baz = foo ? true : false;   // true don't do this


// Explicit coercion to Date
var now = +new Date();

// now = Date.now();  // ES5 only!

var foo = "foo";
// ~N -> -(N+1)
if (~foo.indexOf("f")) {
  alert("Found it!")
}
```

---



## Factory Functions

Don't need to use the "this" keyword





---

## Falsy

values that evaluate to false

- ""
- 0, +0, -0
- false
- null
- undefined
- NaN
- undefined

---

## for loop

Take 3 parts

- initialization expression
- contitional/test epression
- update clause

`for (i = 5; i < 10; i += 1) {...}`

---

## Function declaration

`function chop () {}`

---

## Function Expression

`var chop = function () {}`

---


## Function Invocation or "calling" a function
A function is invocated using the parenthesis syntax `()`:

invokeMe()

---


## Functor
Is an object or data structor you can map over (- Brian Lonsdorf, FrontEndMasters)


---


## Hashtables

 in JavaScript, objects essentially are hashtables; i.e., collections of name-value pairs


---

## Higher Order Functions

A higher order function is a function that:

1. takes one or more functions as arguments
2. returns a function as a result
3. or both 1 and 2

References:

- [Higher order functions in ES6:
Easy as a => b => c;](https://strongloop.com/strongblog/higher-order-functions-in-es6easy-as-a-b-c/)


---

## Hoisting

- [JavaScript Hoisting Explained](http://www.i-programmer.info/programming/javascript/5364-javascript-hoisting-explained.html)

---

## Inheritance - Class & Prototypal

References:

- [Master the JavaScript Interview: What’s the Difference Between Class & Prototypal Inheritance?](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9#.hk55asq9a)


---

## Interviewing

- [The Vital Guide to JavaScript Interviewing](http://www.toptal.com/javascript#hiring-guide)



---


## Imperative


---

## Implicit

Happens as a side-effect of some other opperation (- Kyle Simpson)

`a = a + ""`

```js

// Implicit String to Number
var foo = "123";
var baz = foo - 0;          // 123

baz = foo - "0"             // 123
baz = foo foo / 1;          // 123

// Implicit Number to String
baz = 456;
foo = baz + "";             // "456"   string concatenation happens

foo = baz - "";             // 456


// Implicit Boolean coercion
var foo = "123";              // true
if (foo) {
  alert("Sure")
}

foo = 0;                    // false    0 is falsy
if (foo) {
  alert("Right")
}


if (foo == false) {           // true, but don't ever do this
  alert("Yeah.")
}

var baz = foo || "foo";       // "foo"
```

---

## Iterator
A pull Mechanism ( - Jafar, Front End Masters Asynchronous JS lecture )

---

## I/O

- [I/O - input/output](http://www.webopedia.com/TERM/I/I_O.html) Short for input/output (pronounced "eye-oh"). The term I/O is used to describe any program, operation or device that transfers data to or from a computer and to or from a peripheral device. Every transfer is an output from one device and an input into another. Devices such as keyboards and mouses are input-only devices while devices such as printers are output-only. A writable CD-ROM is both an input and an output device.

---


## Generator

- A push and a pull mechanism ( - Jafar, Front End Masters Asynchronous JS lecture )


---

## Lambdas

- [Javascript Jems - Lambda expressions](http://www.i-programmer.info/programming/javascript/1031-javascript-jems-lambda-expressions.html)


---


## .map()

.map() transforms an object, and returns a new transfromed object

---


## Natives (FRONS BEAD)

- Function
- RegEx
- Object
- Number
- String

- Boolean
- Array
- Error
- Date




---


## Node

The main idea of Node.js: use non-blocking, event-driven I/O to remain lightweight and efficient in the face of data-intensive real-time applications that run across distributed devices.

Where Node really shines is in building fast, scalable network applications, as it’s capable of handling a huge number of simultaneous connections with high throughput, which equates to high scalability.

- [Why The Hell Would I Use Node.js?](http://blog.apcelent.com/why-use-nodejs-tutorial.html)

---

## Object Literal

This is when you create an object with its literal syntax

```
const obj = {}
```

The old-school way to create an object is

```
const obj = new Object();

// obj = {}
```

Another way to create and object is to use Object.create()

```
const obj = Object.create(null);

// obj = {}
```


References:

- [Object.create(): the New Way to Create Objects in JavaScript](http://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html)
- [3 ways to define a JavaScript class](http://www.phpied.com/3-ways-to-define-a-javascript-class/)


---

## Observable

A collection that arrives over time ( - Jafar, Front End Masters Asynchronous JS lecture )

- a push mechanism



--

## Patterns

- [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)


---

## Polymorphic

---

## Predicate
A predicate is a function that accepts an item in the array, and returns a boolean indicating whether the item should be retained in the new array. ( - Jafar, Front End Masters Asynchronous JS lecture )

---


## Primitives (NUBOSS)

- Number
- Undefined
- Boolean
- Object
  - Function
  - Null
- String
- Symbol


---


## Projection

Applying a function to a value and creating a new value is called a projection ( - Jafar, Front End Masters Asynchronous JS lecture )

---

## Scope
  - var is function scoped
  - let and const are block scoped




---


## Side-effects

Side effects happen when a fucntion modifies a value outside of it's self


```js

// function with a side-effect
var x = 10;

function sideEffect () {
  // this will modify the value of x on the outer scope
  x = x + 10;
};
sideEffect();
console.log(x)

// function without a side-effect
function noSideEffect () {

  // x is no longer 10 because the function above modified it.
  // these side-effects can cause confusion
  return x + 10;
};

console.log(noSideEffect())
```


---


## Truthy

- "foo"
- 23
- {a: 1}
- [1, 2]
- []
- true
- function () {..}

and more

---


## typeof

the result is always expressed as a string inside quotation marks

- `typeof foo;    // "undefined"`
- `typeof "foo";  // "string"`
- `typeof 123;    // "number"`
- `typeof true;   // "boolean"`
- `typeof {a: 1}; // "object"`
- `typeof function() {alert(e)};    // "function"`

---

## valueOf()
  - returns a primitive, else it falls bak toString()

---

## Variable
 4 kinds of variable to use for assignment

- var
- let
- const
- function




---



## == vs ===


== allows coercion (most say that == checks value, but are wrongish)
=== disallows coercion (most say that === checks value and type, but are wrongish too)
