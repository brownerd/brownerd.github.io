---
---



## Closure


---


## Compose

 to place together - Rich Hickey (http://www.infoq.com/presentations/Simple-Made-Easy)

---

## Declarative

Tell the compiler "what" to do instead of "how" to do it.

This is a definition that still confuses me. It requires you to know both styles to understand the difference.

I might say that declarative programming is a layer of abstraction that allows you to program in "concepts" (using function helpers that do the lower level stuff for you). Where imperative programming is similar to writing all the lower level stuff.

I still think that this is confusing. Here are some examples

```js
const arr = [1, 2, 3]

// Declarative
const declarativeDouble = arr.map(item => item * 2)

console.log(declarativeDouble)  // [2, 3, 6]


// Imperative
const imperativeDouble = list => {
  var result = []
  for (var i = 0, l = list.length; i < l; i++) {
    result.push(list[i] * 2)
  }
  return result
}

console.log(imperativeDouble(arr))  // [2, 3, 6]
```

---

## Encapsulation

Encapsulation is about hiding implementation details
- http://blog.jenkster.com/2015/12/what-is-functional-programming.html






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

## Functional programming

Functional programming is about writing pure functions, about removing hidden inputs and outputs as far as we can, so that as much of our code as possible just describes a relationship between inputs and outputs.

Let's not hide what a piece of code needs, nor what results it will yield. If a piece of code needs something to run correctly, let it say so. If it does something useful, let it declare it as an output. When we do this, our code will be clearer. Complexity will come to the surface, where we can break it down and deal with it.

A functional programming language is one that supports and encourages programming without side-effects.

Or more specifically: A functional language actively helps you eliminate side-effects wherever possible, and tightly control them wherever it's not.

Or more dramatically: A functional language is actively hostile to side-effects. Side-effects are complexity and complexity is bugs and bugs are the devil. A functional language will help you be hostile to side-effects too. Together you will beat them into submission.

 http://blog.jenkster.com/2015/12/what-is-functional-programming.html


  A functional language is a language that has functions as first-class citizens, enforces referential transparency by eliminating assignment, and maintains data history with persistent data structures.

http://blog.8thlight.com/uncle-bob/2013/01/02/FPBE2-Whys-it-called-functional.html


Functional programming is about programming using mathematical/pure functions. Where the same input(agrument) always returns the same output - Erik Meijer


---


## Functor
Is an object or data structor you can map over (- Brian Lonsdorf, FrontEndMasters)


---


## Hashtables

 in JavaScript, objects essentially are hashtables; i.e., collections of name-value pairs

---

## Hindley-Milner Type Signatures

Once you’re doing everything in pointfree, it does leave the question, of how to communicate to other programmers what type of parameter they should pass to your function. To facilitate this, functional programmers have developed a special notation for specifying what types of parameter a function takes, and what it returns. The notation is called Hindley-Milner type signatures. We write them as comments where we define the function. Let’s look at some examples:
```js
// instruction :: String -> String
var instruction = function(verb) {
    return verb + ' me';
}
```

- http://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-style/

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

A lambda expression is a delegate - Erik Meijer
Lambda expressions give you closures - Erik Meijer
With Lambda expressions you can capture things in the outer scope. Lambdas are about closures - Erik Meijer



---

## Loop

A tool for iteration that requires three parts:

1. State
2. Condition
3. Increment


---

## .map()

.map() transforms an object, and returns a new transfromed object

---


## Monads




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

An Observable is a lot like an Event. Like an Event, an Observable is a sequence of values that a data producer pushes to the consumer. However unlike an Event, an Observable can signal to a listener that it has completed, and will send no more data.

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

## Pure-function
A function is called 'pure' if all its inputs are declared as inputs - none of them are hidden - and likewise all its outputs are declared as outputs.
http://blog.jenkster.com/2015/12/what-is-functional-programming.html

Calling the function with the same inputs always returns the same output.
Calling the function produces no side-effects: No network calls; no files read or written; no database queries; no DOM elements modified; no global variables modified; and no console output. Nothing.

- http://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-style/


---

## referential transparency
When a function is called twice with the same parameters, and ALWAYS returns the same result.



---


## Scope
  - var is function scoped
  - let and const are block scoped




---


## Side-effects

Side effects happen when a function modifies a value outside of it's self

Side-effects aren't about "hiding implementation details" - they're about hiding the code's relationship with the outside world. A function with side-causes has undocumented assumptions about what external factors it's depending on. A function with side-effects has undocumented assumptions about what external factors it's going to change.

If there were an I-Spy book of side-effects, the two easiest targets to spot would be functions that take no arguments, and functions that return no value.

http://blog.jenkster.com/2015/12/what-is-functional-programming.html


Side effects may include, but are not limited to:

- changing the file system
- inserting a record into a database
- making an http call
- mutations
- printing to the screen / logging
- obtaining user input
- querying the DOM
- accessing system state”

- Excerpt From: drboolean. “mostly-adequate-guide.” iBooks.

```js
// I'm not sure about these examples any more. I need to clarify this after learning a little FP



// function with a side-effect
var x = 10;

function sideEffect () {
  // this will modify the value of x on the outer scope
  x = x + 10;
};
sideEffect();
console.log(x)

// function without a side-effect
function noSideEffect (y) {
  return y + 10;
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


## type inference
That means that you don't have to explicitly label every piece of code with a type because the type system can intelligently figure out a lot about it
- http://learnyouahaskell.com/introduction#about-this-tutorial



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
