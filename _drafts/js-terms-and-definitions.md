---
---


## ~~

coerce a string into a number


That `~~`` is a double NOT bitwise operator. It is used as a faster substitute for Math.floor().

```js
~(5.5)   // => -6
~(-6)    // => 5
~~5.5    // => 5  (same as Math.floor(5.5))
~~(-5.5) // => -5 (NOT the same as Math.floor(-5.5), which would give -6 )
```

http://stackoverflow.com/questions/5971645/what-is-the-double-tilde-operator-in-javascript

http://www.joezimjs.com/javascript/great-mystery-of-the-tilde/


---


## algorithm

An algorithm is just any method for arriving at the answer to a problem. It doesn't have to be a computer problem, either. A method for finding your cat to bring him to the vet or finding your way through a cornfield maze is just as much an algorithm as a method to find all the palindromes in a word.

- https://www.codecademy.com/courses/big-o/0/1

---

## Arity

Arity refers to the amount of parameters that a function has. The more parameters a functions has, the greater it's arity.
---

## Assignment Expressions

```js
var a = 3 * 6;
var b = a;
b;
```
The a = 3 * 6 and b = a assignments (minus the vars) are called assignment expressions.

- https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/ch5.md


---

## Attribute

An attribute is a property of an object
\- http://www.freecodecamp.com/challenges/make-object-properties-private

---

## automatic/implicit global variable creation

By contrast, if the Engine is performing an LHS look-up and arrives at the top floor (global Scope) without finding it, and if the program is not running in "Strict Mode" [^note-strictmode], then the global Scope will create a new variable of that name in the global scope, and hand it back to Engine.




---

## Block

In JavaScript, a block is defined by wrapping one or more statements inside a curly-brace pair { .. }

**Note**: Unlike most other statements like console.log(amount);, a block statement does not need a semicolon (;) to conclude it.

---

## Bound function
A bound function is a function bind with an object. Usually it is created from the original function using .bind() method. The original and bound functions share the same code and scope, but different contexts on execution.

- http://rainsoft.io/gentle-explanation-of-this-in-javascript/

---

## Business logic

rules for how data is manipulated

- https://medium.com/javascript-scene/the-best-way-to-learn-to-code-is-to-code-learn-app-architecture-by-building-apps-7ec029db6e00#.jliaa3f48


---

## Built-in Types

JavaScript defines seven built-in types:

1. null
2. undefined
3. boolean
4. number
5. string
6. object
7. symbol -- added in ES6!

*Note: All of these types except object are called "primitives".*

The `typeof` operator inspects the type of the given value, and always returns one of seven string values -- surprisingly, there's not an exact 1-to-1 match with the seven built-in types we just listed.

```js
typeof undefined     === "undefined"; // true
typeof true          === "boolean";   // true
typeof 42            === "number";    // true
typeof "42"          === "string";    // true
typeof { life: 42 }  === "object";    // true

typeof [1,2,3]       === "object"; // true

// special way to check null values
var a = null;

(!a && typeof a      === "object"); // true


// A function is a subtype of object. it's a callable object
typeof function a(){ /* .. */ } === "function"; // true

// added in ES6!
typeof Symbol()      === "symbol";    // true

```

 - https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/ch1.md

---


## Call-stack

call-stack (the stack of functions that have been called to get us to the current moment in execution

- https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/ch2.md


---

## Category Theory

In category theory, we have something called... a category. It is defined as a collection with the following components:

- A collection of objects
- A collection of morphisms
- A notion of composition on the morphisms
- A distinguished morphism called identity

Category theory is abstract enough to model many things, but let's apply this to types and functions, which is what we care about at the moment.

- Excerpt From: drboolean. “mostly-adequate-guide.” iBooks.

---

## class

the class keyword is a declarative way to write functions and prototypes.

- https://leanpub.com/javascriptallongesix/read

---

## Closure

Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

- https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch5.md



---


## Coercion

Forcing a primitive into another primitive. Like turnig a String into a Number.  


---


## Compose

 to place together - Rich Hickey (http://www.infoq.com/presentations/Simple-Made-Easy)

 ```js
 var compose = function(f,g) {
  return function(x) {
    return f(g(x));
  };
};
```

Excerpt From: drboolean. “mostly-adequate-guide.” iBooks.

---

## Compound Assignment

Compound Assignment: `+=``, `-=``, `*=`, and `/=` are compound operators that combine a math operation with assignment, as in `a += 2 (same as a = a + 2)``.

---

## console

The console object is provided by the hosting environment specifically so your code can interact with it for various development-related output tasks.

In browsers, console hooks up to the developer tools' console display, whereas in node.js and other server-side JS environments, console is generally connected to the standard-output (stdout) and standard-error (stderr) streams of the JavaScript environment system process.

- https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/apA.md

---

## Controller

Controllers sit sort of in the middle of a web request. We get to the controller by way of the routing, and it’s the controller’s job to basically convert incoming request (and its params) into a response. It does so by interacting with the Model layer and then passing that data to a view who presents the data as HTML or JSON.

- https://blog.codeship.com/comparing-rails-and-phoenix-part-ii/

---

## COPE (Create Once, Publish Everywhere)







---


## Curry


Currying is a special form of partial application where the arity is reduced to 1, with a chain of successive chained function calls, each which takes one argument. Once all arguments have been specified by these function calls, the original function is executed with all the collected arguments. You can also undo a currying.

https://github.com/getify/Functional-Light-JS/blob/master/ch3.md






---

## Debouncing and Throttling

Debounce and throttle are two similar (but different!) techniques to control how many times we allow a function to be executed over time.

- [:+1: Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/)





---

## declaration statements

```js
var a = 3 * 6;
var b = a;
b;
```

`var a = 3 * 6` and `var b = a` are called "declaration statements" because they each declare a variable (and optionally assign a value to it).


- https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/ch5.md



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

## delegation vs. forwarding
Delegation and forwarding are both very similar. One metaphor that might help distinguish them is to think of receiving an email asking you to donate some money to a worthy charity.

- If you forward the email to a friend, and the friend donates money, the friend is donating their own money and getting their own tax receipt.

- If you delegate responding to your accountant, the accountant donates your money to the charity and you receive the tax receipt.

In both cases, the other entity does the work when you receive the email.

Delegation is a many-to-many relationship.

- https://leanpub.com/javascriptallongesix/read

---

## delegation (behavior delegation)

```js
var foo = {
    a: 42
};

// create `bar` and link it to `foo`
var bar = Object.create( foo );

bar.b = "hello world";

bar.b;      // "hello world"
bar.a;      // 42 <-- delegated to `foo`
```



---
## Dependency Injection

Dependency Injection is a simple solution to inversion of control that involves injecting the dependencies into the components that require them. There are many reasons why this is beneficial to modern web applications.

- [Three D’s of Web Development #3: Dependency Injection](http://developer.telerik.com/featured/three-ds-web-development-3-dependency-injection/)



## DSL

Domain Specific langauge



---
## Duck typing

Another common, but perhaps less robust, pattern for type introspection, which many devs seem to prefer over instanceof, is called "duck typing". This term comes from the adage, "if it looks like a duck, and it quacks like a duck, it must be a duck".

Example:

```js
if (a1.something) {
    a1.something();
}
```

Rather than inspecting for a relationship between a1 and an object that holds the delegatable something() function, we assume that the test for a1.something passing means a1 has the capability to call .something() (regardless of if it found the method directly on a1 or delegated to some other object). In and of itself, that assumption isn't so risky.


- https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/ch6.md



The general term for "type checks" that make assumptions about a value's "type" based on its shape (what properties are present) is called "duck typing"


- https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/ch3.md

---

## Dunder

double-underscore, specifically the leading one in properties like __proto__: "dunder"

- https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/ch5.md


---

## Encapsulation

Encapsulation is about hiding implementation details
- http://blog.jenkster.com/2015/12/what-is-functional-programming.html


---

## encodeURIComponent

- [encodeURIComponent()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)

```javascript
// encodeURIComponent escapes all characters except the following: alphabetic, decimal digits, - _ . ! ~ * ' ( )

var x = encodeURIComponent('hello there');
console.log(x);

// hello%20there
// notice that the space gets replaced with %20
```
---

## "enumerable"
basically means "will be included if the object's properties are iterated through

- https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/ch3.md

---

## Errors

- [null, undefined, and undeclared](http://lucybain.com/blog/2014/null-undefined-undeclared/)
- [TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)



ReferenceError is Scope resolution-failure related, whereas TypeError implies that Scope resolution was successful, but that there was an illegal/impossible action attempted against the result.

https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch1.md


1. Error
2. RangeError
3. Syntax Error
4. TypeError
5. URIError
6. EvalError
- http://www.sitepoint.com/exceptional-exception-handling-in-javascript/

---

## Eval

The eval(..) function in JavaScript takes a string as an argument, and treats the contents of the string as if it had actually been authored code at that point in the program. In other words, you can programmatically generate code inside of your authored code, and run the generated code as if it had been there at author time.



```js
function foo(str, a) {
    eval( str ); // cheating!
    console.log( a, b );
}

var b = 2;

foo( "var b = 3;", 1 ); // 1, 3

```







---

## Events




---

## Event-driven programming
Event-driven programming is a programming paradigm in which the flow of the program is determined by events such as user actions (mouse clicks, key presses), sensor outputs, or messages from other programs/threads.

In practice, it means that applications act on events.

- [Node Hero: Understanding Async Programming in Node.js](https://blog.risingstack.com/node-hero-async-programming-in-node-js/)




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

## Expression

An expression is any valid unit of code that resolves to a value.
— Mozilla Development Network: Expressions and operators


An expression returns a value and can be used in place of any other expression

- http://lisperator.net/pltut/dream


---

## Expression Statement

```js
var a = 3 * 6;
var b = a;
b;
```

The third line contains just the expression b, but it's also a statement all by itself (though not a terribly interesting one!). This is generally referred to as an "expression statement."

- https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/ch5.md

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

## Fetch



---

## for loop

Take 3 parts

- initialization expression
- contitional/test epression
- update clause

`for (i = 5; i < 10; i += 1) {...}`

---

## For .. in loop

loops over the indexes of an array

```js
var a = ["a","b","c","d","e"];

for (var idx in a) {
    console.log( idx );
}
// 0 1 2 3 4
```




---

## for .. of loop

loops over the values in an array

```js
var a = ["a","b","c","d","e"];

for (var val of a) {
    console.log( val );
}
// "a" "b" "c" "d" "e"
```

The for..of loop asks a for its iterator, and automatically uses it to iterate over a's values.

- https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/ch4.md



```js

// Here's the pre-ES6 version of the for..of from that previous

var a = ["a","b","c","d","e"],
    k = Object.keys( a );

for (var val, i = 0; i < k.length; i++) {
    val = a[ k[i] ];
    console.log( val );
}
// "a" "b" "c" "d" "e"

```

```js
// The "hello" primitive string value is coerced/boxed to the String object wrapper equivalent, which is an iterable by default.

for (var c of "hello") {
    console.log( c );
}
// "h" "e" "l" "l" "o"

```
---

## function combinator

“A combinator is a higher-order function that uses only function application and earlier defined combinators to define a result from its arguments.”–Wikipedia

If we were learning Combinatorial Logic, we’d start with the most basic combinators like S, K, and I, and work up from there to practical combinators. We’d learn that the fundamental combinators are named after birds following the example of Raymond Smullyan’s famous book To Mock a Mockingbird.

In this book, we will be using a looser definition of “combinator:” Higher-order pure functions that take only functions as arguments and return a function. We won’t be strict about using only previously defined combinators in their construction.

Let’s start with a useful combinator: Most programmers call it Compose, although the logicians call it the B combinator or “Bluebird.” Here is the typical15 programming implementation:

```js
const compose = (a, b) =>
  (c) => a(b(c))
```
Let’s say we have:

```js
const addOne = (number) => number + 1;

const doubleOf = (number) => number * 2;
```

With compose, anywhere you would write

```js
const doubleOfAddOne = (number) => doubleOf(addOne(number));
```

You could also write:

```js
const doubleOfAddOne = compose(doubleOf, addOne);
```

---



## Function composition

Function composition is a pattern for defining a function that routes the output of one function call into another function call, and its output to another, and so on.




https://github.com/getify/Functional-Light-JS/blob/master/ch4.md




---

## Function declaration

`function chop () {}`

Note: The easiest way to distinguish declaration vs. expression is the position of the word "function" in the statement (not just a line, but a distinct statement). If "function" is the very first thing in the statement, then it's a function declaration. Otherwise, it's a function expression.

- https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch3.md

---

## function decorators
A function decorator is a higher-order function that takes one function as an argument, returns another function, and the returned function is a variation of the argument function. Here’s a ridiculously simple decorator:16

```js
const not = (fn) => (x) => !fn(x)
```

So instead of writing `!someFunction(42)`, we can write `not(someFunction)(42)`. Hardly progress. But like compose, we could write either:

```js
const something = (x) => x != null;
```

And elsewhere, write:

```js
const nothing = (x) => !something(x);
```
Or we could write:

```js
const nothing = not(something);
```

not is a function decorator because it modifies a function while remaining strongly related to the original function’s semantics. You’ll see other function decorators in the recipes, like once and maybe. Function decorators aren’t strict about being pure functions, so there’s more latitude for making decorators than combinators.


other decorators:
- not
- once
- maybe



- https://leanpub.com/javascriptallongesix/read


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




Functional Programming deals with changes to values in a record by making a copy of the record with the values changed.
- https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536#.9btdgof0e



---


## Functor
Is an object or data structor you can map over (- Brian Lonsdorf, FrontEndMasters)

---

## Gate


The `if (a && b)` conditional around the baz() call is traditionally called a "gate," because we're not sure what order a and b will arrive, but we wait for both of them to get there before we proceed to open the gate (call baz()).


- https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/ch1.md


---

## Generator

 a generator is merely a function that returns an iterator.

 - http://greim.github.io/gen/dist/04-generators.html



- A push and a pull mechanism ( - Jafar, Front End Masters Asynchronous JS lecture )




---


## Hashtables

 in JavaScript, objects essentially are hashtables; i.e., collections of name-value pairs


---

## Heap

"heap" -- which is just a fancy term for a reserved spot in memory where variables can already be used without asking for more memory or releasing previously used memory

- https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/ch5.md



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

What this leads to is that all declarations in a scope, regardless of where they appear, are processed first before the code itself is executed. You can visualize this as declarations (variables and functions) being "moved" to the top of their respective scopes, which we call "hoisting".


function declarations are hoisted before normal variables

f before v

functions are first class
- https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch4.md


- [JavaScript Hoisting Explained](http://www.i-programmer.info/programming/javascript/5364-javascript-hoisting-explained.html)


---

## Host Object (document object)

The most common non-JavaScript JavaScript you'll encounter is the DOM API. For example:

var el = document.getElementById( "foo" );
The document variable exists as a global variable when your code is running in a browser. It's not provided by the JS engine, nor is it particularly controlled by the JavaScript specification. It takes the form of something that looks an awful lot like a normal JS object, but it's not really exactly that.

 It's a special object, often called a "host object."

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

## IndexOf trick

One extremely common task JS developers need to perform is searching for a value inside an array of values. The way this has always been done is:

```js
var vals = [ "foo", "bar", 42, "baz" ];

if (vals.indexOf( 42 ) >= 0) {
    // found it!
}
```

The reason for the >= 0 check is because indexOf(..) returns a numeric value of 0 or greater if found, or -1 if not found. In other words, we're using an index-returning function in a boolean context. But because -1 is truthy instead of falsy, we have to be more manual with our checks.

In the Types & Grammar title of this series, I explored another pattern that I slightly prefer:

```js
var vals = [ "foo", "bar", 42, "baz" ];

if (~vals.indexOf( 42 )) {
    // found it!
}
```

The `~`` operator here conforms the return value of `indexOf(..)` to a value range that is suitably boolean coercible. That is, -1 produces 0 (falsy), and anything else produces a non-zero (truthy) value, which is what we for deciding if we found the value or not.

While I think that's an improvement, others strongly disagree. However, no one can argue that indexOf(..)'s searching logic is perfect. It fails to find NaN values in the array, for example.


- https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch8.md
---

## Inequality / relational comparison

`<, >, <=, and >= `



---

## Indirect invocation

Indirect invocation is performed when a function is called using .call() or .apply() methods.

- http://rainsoft.io/gentle-explanation-of-this-in-javascript/



---

## Inheritance - Class & Prototypal

References:

- [Master the JavaScript Interview: What’s the Difference Between Class & Prototypal Inheritance?](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9#.hk55asq9a)


---

## Interviewing

- [The Vital Guide to JavaScript Interviewing](http://www.toptal.com/javascript#hiring-guide)
- [:+1: Interview Cake](https://www.interviewcake.com/)
- [:+1: 10 Interview Questions Every JavaScript Developer Should Know](https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95#.yb40i6cte)
- [Master the JavaScript Interview: What is a Pure Function?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976#.pxxi6f9pn)
- [Master the JavaScript Interview: What’s the Difference Between Class & Prototypal Inheritance?](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9#.3rdrvjkvo)
- [Master the JavaScript Interview: What is a Closure?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36#.u71thsd06)

---



# I/O
Reading and Writing from the filesystem



Most of the backends behind websites don’t need to do complicated computations. Our programs spend most of their time waiting for the disk to read & write , or waiting for the wire to transmit our message and send back the answer.

IO operations can be orders of magnitude slower than data processing. Take this for example: SSD-s can have a read speed of 200-730 MB/s - at least a high-end one. Reading just one kilobyte of data would take 1.4 microseconds, but during this time a CPU clocked at 2GHz could have performed 28 000 of instruction-processing cycles.
---


## Iterator
A pull Mechanism ( - Jafar, Front End Masters Asynchronous JS lecture )


Recaiterators are stateful objects.


### Things that are iterables:

- Arrays
- Strings
- Maps
- Sets
- Function arguments objects
- DOM collections



### Things that accept iterables:


#### Spread operators

```js
function* foo() { yield 'a', yield 'b', yield 'c'; }

function bar() { console.log(arguments); }
bar(...foo()); // => { 0: 'a', 1: 'b', 2: 'c' }

function* foo() { yield 1, yield 2, yield 3; }
console.log([...foo()]); // => [ 1, 2, 3 ]

```


#### Destructuring

```js
function* foo() { yield 1, yield 2, yield 3; }
const [ x, y, z ] = foo();
console.log(x); // => 1
console.log(y); // => 2
console.log(z); // => 3
```


#### Construction of maps and sets

```js
function* foo() { yield 1, yield 2, yield 3; }
const set = new Set(foo());
console.log(set.has(1)); // => true
console.log(set.has(2)); // => true
console.log(set.has(3)); // => true
```

```js
function* foo() { yield ['a', 1], yield ['b', 2]; }
const map = new Map(foo());
console.log(map.get('a')); // => 1
console.log(map.get('b')); // => 2
```

#### Array.from()

```js
function* foo() { yield 1, yield 2, yield 3; }
console.log(Array.from(foo())); // => [ 1, 2, 3 ]
```


#### Promise.all()

```js
function* foo() {
  yield Promise.resolve(1);
  yield Promise.resolve(2);
  yield Promise.resolve(3);
}
Promise.all(foo()).then(arr => {
  console.log(arr); // => [ 1, 2, 3 ]
});
```


#### Generator delegation

```js
function* foo() { yield 1, yield 2, yield 3; }
function* bar() { yield* foo(); }
const arr = Array.from(bar());
console.log(arr); // => [ 1, 2, 3 ]
```





- http://greim.github.io/gen/dist/06-iteration-everywhere.html



---

## I/O

 I/O, e.g. downloading things, reading files, talking to databases, etc.

 - http://callbackhell.com/

- [I/O - input/output](http://www.webopedia.com/TERM/I/I_O.html) Short for input/output. The term I/O is used to describe any program, operation or device that transfers data to or from a computer and to or from a peripheral device. Every transfer is an output from one device and an input into another. Devices such as keyboards and mouses are input-only devices while devices such as printers are output-only. A writable CD-ROM is both an input and an output device.




---

## Value immutability

Value immutability means that when we need to change the state in our program, we must create and track a new value rather than mutate an existing value.




---

## Lambdas

- [Javascript Jems - Lambda expressions](http://www.i-programmer.info/programming/javascript/1031-javascript-jems-lambda-expressions.html)

A lambda expression is a delegate - Erik Meijer
Lambda expressions give you closures - Erik Meijer
With Lambda expressions you can capture things in the outer scope. Lambdas are about closures - Erik Meijer

---

## Lazy (computation)

I don't know. Computation doesn't happen until it's needed?


---

## lexical scope

Lexical scope means that scope is defined by author-time decisions of where functions are declared. The lexing phase of compilation is essentially able to know where and how all identifiers are declared, and thus predict how they will be looked-up during execution.


In JavaScript, each function gets its own scope.

Scope is basically a collection of variables as well as the rules for how those variables are accessed by name. Only code inside that function can access that function's scoped variables.

Lexical scope rules say that code in one scope can access variables of either that scope or any scope outside of it.


lexical scope is only defined by where the function was declared.

Scope look-up stops once it finds the first match.


- https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/ch1.md



lexical scoping — ‘this’ refers to it’s current surrounding scope

- https://medium.freecodecamp.com/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881#.56g09srr5
---

## Lexing (tokenizing)

lexing process examines a string of source code characters and assigns semantic meaning to the tokens as a result of some stateful parsing.

- https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch2.md


---

## Lifting

“a function can be surrounded by map, which transforms it from a non-functory function to a functory one, in informal terms. We call this process lifting. Functions tend to be better off working with normal data types rather than container types, then lifted into the right container as deemed necessary. This leads to simpler, more reusable functions that can be altered to work with any functor on demand.”

Excerpt From: drboolean. “mostly-adequate-guide.” iBooks.




---

## Linked by reference

The answer is that they are what you use all the time without ever really thinking about it.
When you store a value in a variable e.g.
var a=10;
then you are doing just that - storing the value 10 in the variable a.
However when you do the same thing but with an object you don't store the object in the variable but a reference to the object.
For example:
var a={x:20,y:10};
doesn't store the object in the variable a. It stores a reference, which you can think of as a safe "pointer" to the object.
To see that this is true all you have to do is store a in another variable b say:
var b=a;
If the object {x:20,y:10} was stored in variable a then a copy of the object would now be stored in variable b. Of course this isn't what happens. A reference to the object is stored in a and the assignment stores a copy of the reference in variable b. After the assignment both a and b reference or "point" to the same object. You can prove this quite easily
b.y=20;
alert(a.y);
and you will see at once that storing something in b.y modifies a.y. Both a and b reference the same object.

- http://www.i-programmer.info/programming/javascript/5328-javascript-data-structures-the-linked-list.html






---

## Loop

A tool for iteration that requires three parts:

1. State
2. Condition
3. Increment

or

The for loop has three clauses:

1. the **initialization** clause (var i=0),
2. the **conditional test** clause (i <= 9),
3. and the **update** clause (i = i + 1).

- https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/ch1.md


---

## .map()

.map() transforms an object, and returns a new transfromed object

---

## Memory leaks

In essence, memory leaks can be defined as memory that is not required by an application anymore that for some reason is not returned to the operating system or the pool of free memory.

Leaks are the cause of whole class of problems: slowdowns, crashes, high latency, and even problems with other applications.

The main cause for leaks in garbage collected languages are unwanted references.

https://auth0.com/blog/2016/01/26/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/


---


## Method
A method is a function of an object
- http://www.freecodecamp.com/challenges/make-object-properties-private

---

## Mixin

The simplest possible metaobject in JavaScript is a mixin. Consider our naïve object:

```js
const sam = {
  firstName: 'Sam',
  lastName: 'Lowry',
  fullName () {
    return this.firstName + " " + this.lastName;
  },
  rename (first, last) {
    this.firstName = first;
    this.lastName = last;
    return this;
  }
}
```

We can separate its domain properties from its behaviour:

```js
const sam = {
  firstName: 'Sam',
  lastName: 'Lowry'
};

const Person = {
  fullName () {
    return this.firstName + " " + this.lastName;
  },
  rename (first, last) {
    this.firstName = first;
    this.lastName = last;
    return this;
  }
};
```
And use `Object.assign` to mix the behaviour in:

```js
Object.assign(sam, Person);

sam.rename
```
  //=> [Function]
This allows us to separate the behaviour from the properties in our code.

Our Person object is a mixin, it provides functionality to be mixed into an object with a function like Object.assign. Mixins are not “copied” into objects in the sense of making brand new versions of each of their functions: Object.assign copies references to each function from the mixin into the target object.

- https://leanpub.com/javascriptallongesix/read

---

## Monads

“Monads are pointed functors that can flatten”

Excerpt From: drboolean. “mostly-adequate-guide.” iBooks.




---


## MVC (Model, View, Controller)

A pattern for creating software

Model: Represents domain-specific knowledge and data


---

## Naive object

We call this a “naïve” object. It has state and behaviour, but it lacks division of responsibility between its state and its behaviour.

```js
const sam = {
  firstName: 'Sam',
  lastName: 'Lowry',
  fullName () {
    return this.firstName + " " + this.lastName;
  },
  rename (first, last) {
    this.firstName = first;
    this.lastName = last;
    return this;
  }
}
```
The simplest possible metaobject in JavaScript is a mixin.

- https://leanpub.com/javascriptallongesix/read

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

String()
Number()
Boolean()
Array()
Object()
Function()
RegExp()
Date()
Error()
Symbol() -- added in ES6!

As you can see, these natives are actually built-in functions.

- https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/ch3.md


---


## Node

Nodejs is basically a way to run js outside the context of  the browser. Powered by V8. We can use node for many things like tooling and servers.

- Scott Moss, FrontEndMasters (API design with node js)


The main idea of Node.js: use non-blocking, event-driven I/O to remain lightweight and efficient in the face of data-intensive real-time applications that run across distributed devices.

Where Node really shines is in building fast, scalable network applications, as it’s capable of handling a huge number of simultaneous connections with high throughput, which equates to high scalability.

- [Why The Hell Would I Use Node.js?](http://blog.apcelent.com/why-use-nodejs-tutorial.html)

---

## Null check

The coercion between null and undefined is safe and predictable, and no other values can give false positives in such a check. I recommend using this coercion to allow null and undefined to be indistinguishable and thus treated as the same value.

For example:

```js
var a = doSomething();

if (a == null) {
    // ..
}
```

The `a == null` check will pass only if doSomething() returns either null or undefined, and will fail with any other value, even other falsy values like 0, false, and "".

The explicit form of the check, which disallows any such coercion, is (I think) unnecessarily much uglier (and perhaps a tiny bit less performant!):

```js
var a = doSomething();

if (a === undefined || a === null) {
    // ..
}
```

In my opinion, the form `a == null` is yet another example where implicit coercion improves code readability, but does so in a reliably safe way.

- https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/ch4.md








---
# Object.keys(..)

`Object.keys(..)`  returns an array of all enumerable properties, whereas `Object.getOwnPropertyNames(..)` returns an array of all properties, enumerable or not.

- https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/ch3.md

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

### Object Property Access:

`.` as in `console.log()`.


---

## Observable

A collection that arrives over time ( - Jafar, Front End Masters Asynchronous JS lecture )

- a push mechanism

An Observable is a lot like an Event. Like an Event, an Observable is a sequence of values that a data producer pushes to the consumer. However unlike an Event, an Observable can signal to a listener that it has completed, and will send no more data.





---

## OOP vs FP

In the section on Small Functions on common structures, we discuss how having a large number of common functions that will run consistently against simple resuable data structures -- an idea very much at odds with Object Oriented programming's notion of having many data structures, each with a small number of custom functions -- how this idea makes thinking about our systems significantly easier.

- http://ramdajs.com/0.17/manual/01-intro/index.html






---

## Parameters

Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.

Here is a function with two parameters, param1 and param2:

function testFun(param1, param2) {
  console.log(param1, param2);
}
Then we can call testFun:

testFun("Hello", "World");

We have passed two arguments, "Hello" and "World". Inside the function, param1 will equal "Hello" and param2 will equal "World". Note that you could call testFun again with different arguments and the parameters would take on the value of the new arguments.

- http://www.freecodecamp.com/challenges/passing-values-to-functions-with-arguments#

---

## partial application

Another basic building block is partial application. When a function takes multiple arguments, we “apply” the function to the arguments by evaluating it with all of the arguments, producing a value. But what if we only supply some of the arguments? In that case, we can’t get the final value, but we can get a function that represents part of our application.




Partial Application is a technique for reducing the arity -- expected number of arguments to a function -- by creating a new function where some of the arguments are preset.

https://github.com/getify/Functional-Light-JS/blob/master/ch3.md



---


## Patterns

- [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

---


## Point-free
Functions without arguments.

Instead of hard coding our data/arguments into the function, we use Currying instead.

---

## Plain Ol JavaScript Object (POJO)

Any object created with object literal notation like this

```js
var myObj = {"name" : "Phil Dunphy"}
```

- http://blog.dreasgrech.com/2012/02/creating-pojos-in-javascript.html


---

## Polymorphism


You learned how polymorphism works in JavaScript with the concept of duck typing, the idea that an object is not defined by what it is but by what it can do. Thus if something walks like a duck, swims like a duck and quacks like a duck then you treat it like a duck.

- http://www.barbarianmeetscoding.com/blog/2015/12/09/summoning-fundamentals-a-three-part-introduction-to-oop-in-javascript-for-csharp-developers-iii-polymorphism/

---

## Predicate

predicate (a function that returns a boolean)
- https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-6-db502830403#.mhwvcoi8t




A predicate is a test function that returns True or False. It test items for true or false and returns the items that pass the test.

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

## Programming

Here are some of the essential programming building blocks:

You need operators to perform actions on values.
You need values and types to perform different kinds of actions like math on numbers or output with strings.
You need variables to store data (aka state) during your program's execution.
You need conditionals like if statements to make decisions.
You need loops to repeat tasks until a condition stops being true.
You need functions to organize your code into logical and reusable chunks.

- https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/ch1.md



---

## Projection

Applying a function to a value and creating a new value is called a projection

// projection function is a function that you apply to every result and you forward that along

( - Jafar, Front End Masters Asynchronous JS lecture )

---

## Promises

It’s a trust that a promise is a wrapper for a piece of state (which predictably will transition from “pending” to either — not both — “resolved” or “rejected”) along with a completion-value (success message or error message). It’s a trust that once a promise is in a “resolved” or “rejected” state, along with that message, it cannot and will not change. It’s a trust that completed promises are immutable.

You see, using promises is based on trust. And that trust is based on the state of the promise being protected from outside influence, except only by the creator.


- https://blog.getify.com/promises-part-3/
- https://blog.getify.com/promises-part-4/

A promise is really just a container for a value. That value may be present now, or it may be a future value. But nevertheless, it’s just a value.

Promises are like tiny, self-contained representations of state. They’re ultimately composable, which means your entire program can be represented by them. In that sense, the observation that Promises are really functional concepts — they’re monads — bears itself out.

- https://blog.getify.com/promises-part-5/

Promises are about making asynchronous code retain most of the lost properties of synchronous code such as flat indentation and one exception channel.

- [Promise Patterns & Anti-Patterns](http://www.datchley.name/promise-patterns-anti-patterns/)


A promise is an object that encapsulates the result of an asynchronous operation.

- [ES6 Promises are here!](http://blog.shinetech.com/2015/05/08/es6-promises-are-here/)


A promise can be:
1. fulfilled - The action relating to the promise succeeded
2. rejected - The action relating to the promise failed
3. pending - Hasn’t fulfilled or rejected yet
4. settled - Has fulfilled or rejected

- [Promises](https://developers.google.com/web/fundamentals/primers/promises/)


To avoid such nuanced nightmares, you should never rely on anything about the ordering/scheduling of callbacks across Promises. In fact, a good practice is not to code in such a way where the ordering of multiple callbacks matters at all. Avoid that if you can.

- https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/ch3.md




Let's clear up some misconceptions: Promises are not about replacing callbacks. Promises provide a trustable intermediary -- that is, between your calling code and the async code that will perform the task -- to manage callbacks.

Another way of thinking about a Promise is as an event listener, on which you can register to listen for an event that lets you know when a task has completed. It's an event that will only ever fire once, but it can be thought of as an event nonetheless.

- https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch4.md

---

## Prototypes

Prototypes late bind the method bodies and they late bind the identities of the methods being delegated. So you can add and remove methods to a prototype, and the behaviour of all of the objects bound to that prototype will be changed.

We say that prototypes are open for extension, because you can extend their behaviour after creating objects with them. We say that mixins are closed for extension, because behaviour added to a mixin does not change any of the objects that have already incorporated it.


- Late bound on method bodies, just like delegation through method proxies;

- Late bound on the method identities, which is superior to delegation through method proxies;

- Evaluated in the receiver’s context, just like delegation.

- Open for extension, unlike mixins, forwarding, and explicit delegation.

Prototypes are usually the first form of metaobject that many developers learn in JavaScript, and quite often the last.

```js
const Person = {
  fullName () {
    return this.firstName + " " + this.lastName;
  },
  rename (first, last) {
    this.firstName = first;
    this.lastName = last;
    return this;
  }
};

const sam = Object.create(Person);
This associates behaviour with our object:

sam.rename('sam', 'hill');
sam.fullName();
  //=> 'sam hill'
```


Let’s work from two principles:

1. Any object can have an object as its prototype, and any object can be a prototype.

2. he behaviour of an object consists of all of its own behaviour, plus all the behaviour of its prototype.





- https://leanpub.com/javascriptallongesix/read





---

## Pure-function
A function is called 'pure' if all its inputs are declared as inputs - none of them are hidden - and likewise all its outputs are declared as outputs.
http://blog.jenkster.com/2015/12/what-is-functional-programming.html

Calling the function with the same inputs always returns the same output.
Calling the function produces no side-effects: No network calls; no files read or written; no database queries; no DOM elements modified; no global variables modified; and no console output. Nothing.

- http://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-style/


It doesn’t have any side effects, that is, it doesn’t affect (change, mutate) any state external to the function

- http://www.barbarianmeetscoding.com/blog/2016/06/14/functional-programming-in-javascript/



ME!
A pure function has inputs and outputs, and it does not change anything outside of itself.  NO external storage/containers get modified (ex: vars files, )



Wow - There are no variables in Functional Programming. Stored values are still called variables because of history but they are constants, i.e. once x takes on a value, it’s that value for life.
- https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536#.9btdgof0e

---

## Recursion

- https://www.natashatherobot.com/factorials-javascript-recursion/
- https://msdn.microsoft.com/en-us/library/wwbyhkx4(v=vs.94).aspx


---

## referential transparency
When a function is called twice with the same parameters, and ALWAYS returns the same result.


Referential transparency is the assertion that a function call could be replaced by its output value, and the overall program behavior wouldn't change.
- https://github.com/getify/Functional-Light-JS/blob/master/ch5.md


---


### Routing

Routing means doing something in response to a change in the browser’s current URL. There are two ways you can accomplish this:

pushState routing, using the HTML5 History API

hash-based routing, using the portion of the page’s URL starting with #, i.e. the hash.

- http://jamesknelson.com/routing-with-raw-react/

---


## Scope

Scope is the set of rules that determines where and how a variable (identifier) can be looked-up. This look-up may be for the purposes of assigning to the variable, which is an LHS (left-hand-side) reference, or it may be for the purposes of retrieving its value, which is an RHS (right-hand-side) reference.

LHS references result from assignment operations. Scope-related assignments can occur either with the = operator or by passing arguments to (assign to) function parameters.

The JavaScript Engine first compiles code before it executes, and in so doing, it splits up statements like var a = 2; into two separate steps:

First, var a to declare it in that Scope. This is performed at the beginning, before code execution.

Later, a = 2 to look up the variable (LHS reference) and assign to it if found.

Both LHS and RHS reference look-ups start at the currently executing Scope, and if need be (that is, they don't find what they're looking for there), they work their way up the nested Scope, one scope (floor) at a time, looking for the identifier, until they get to the global (top floor) and stop, and either find it, or don't.

Unfulfilled RHS references result in ReferenceErrors being thrown. Unfulfilled LHS references result in an automatic, implicitly-created global of that name (if not in "Strict Mode" [^note-strictmode]), or a ReferenceError (if in "Strict Mode" [^note-strictmode]).

```js
//Quiz Answers

function foo(a) {
    var b = a;
    return a + b;
}

var c = foo( 2 );
```

Identify all the LHS look-ups (there are 3!).

c = .., a = 2 (implicit param assignment) and b = ..

Identify all the RHS look-ups (there are 4!).

foo(2.., = a;, a + .. and .. + b


- https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch1.md



- var is function scoped
- let and const are block scoped

___

## Shadowing

When a variable has the same name as an ancestor environment’s binding, it is said to shadow the ancestor.

- https://leanpub.com/javascriptallongesix/read

If the property name foo ends up both on myObject itself and at a higher level of the [[Prototype]] chain that starts at myObject, this is called shadowing. The foo property directly on myObject shadows any foo property which appears higher in the chain, because the myObject.foo look-up would always find the foo property that's lowest in the chain.

- https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md

---

## Short Circuiting with conditionals

In Chapter 4, we mentioned in a side note the "short circuiting" nature of operators like && and ||. Let's revisit that in more detail now.

For both && and || operators, the right-hand operand will not be evaluated if the left-hand operand is sufficient to determine the outcome of the operation. Hence, the name "short circuited" (in that if possible, it will take an early shortcut out).

For example, with a && b, b is not evaluated if a is falsy, because the result of the && operand is already certain, so there's no point in bothering to check b. Likewise, with a || b, if a is truthy, the result of the operand is already certain, so there's no reason to check b.

This short circuiting can be very helpful and is commonly used:

```js
function doSomething(opts) {
    if (opts && opts.cool) {
        // ..
    }
}
```

The opts part of the opts && opts.cool test acts as sort of a guard, because if opts is unset (or is not an object), the expression opts.cool would throw an error. The opts test failing plus the short circuiting means that opts.cool won't even be evaluated, thus no error!

Similarly, you can use || short circuiting:

```js
function doSomething(opts) {
    if (opts.cache || primeCache()) {
        // ..
    }
}
```

- https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/ch5.md

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

## Statements, expressions

Statements are sentences, expressions are phrases, and operators are conjunctions/punctuation.

- https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/ch5.md



---
## Strict Mode

"Strict Mode" [^note-strictmode], which was added in ES5, has a number of different behaviors from normal/relaxed/lazy mode. One such behavior is that it disallows the automatic/implicit global variable creation.

- https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch1.md





---


## Tail call

In other words, the function call is the last thing to execute in the function, and whatever value it returns is explicitly returned.

https://github.com/getify/Functional-Light-JS/blob/master/ch8.md




---
## this

If a function has a this reference inside it, that this reference usually points to an object. But which object it points to depends on how the function was called.

- https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/ch2.md


Because ‘this’, always references the owner of the function it is in, for this case — since it is now out of scope — the window/global object.

- https://medium.freecodecamp.com/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881#.56g09srr5


So this in JavaScript is weird, and unlike other languages this depends on the context in which a function is invoked. This basically means that depending on how you call a function this will have a value or another:

this and objects
this unbound
this explicitly
this bound

- http://www.barbarianmeetscoding.com/blog/2015/05/03/mastering-the-arcane-art-of-javascript-mancy-for-c-sharp-developers-chapter-1-the-many-a-one-javascript-quirks/




Because the function invocation has the biggest impart on this, from now on do not ask yourself:

Where is this taken from?
but do ask yourself:

How is the function invoked?
For an arrow function ask yourself:

What is this where the arrow function is defined?

- http://rainsoft.io/gentle-explanation-of-this-in-javascript/
---

## Thunk

Without getting bogged down in the historical nature, a narrow expression of a thunk in JS is a function that -- without any parameters -- is wired to call another function.

In other words, you wrap a function definition around function call -- with any parameters it needs -- to defer the execution of that call, and that wrapping function is a thunk. When you later execute the thunk, you end up calling the original function.

```js
// Example
function foo(x,y) {
    return x + y;
}

function fooThunk() {
    return foo( 3, 4 );
}

// later

console.log( fooThunk() );  // 7
```




```js
// Thunk maker fn
function thunkify(fn) {
    var args = [].slice.call( arguments, 1 );
    return function(cb) {
        args.push( cb );
        return fn.apply( null, args );
    };
}

var fooThunk = thunkify( foo, 3, 4 );

// later

fooThunk( function(sum) {
    console.log( sum );     // 7
} );
```

- https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/ch4.md


---

## Transpiling

transforming + compiling = transpiling

- https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/ch2.md




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

## type casting

Converting a value from one type to another is often called "type casting," when done explicitly, and "coercion" when done implicitly (forced by the rules of how a value is used).

However, in JavaScript, most people refer to all these types of conversions as coercion, so the way I prefer to distinguish is to say "implicit coercion" vs. "explicit coercion."

- https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/ch4.md


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

## undefined

undefined means missing. That is, there's no difference between undefined and missing, at least as far as function arguments go.

- https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md


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


## Variable lifecycle

- declaration phase
- initialization phase
- assignment phase


---

## void 0

void 0 (aka undefined)

```js
function foo(a = 2) {
    console.log( a );
}

foo();      // 2
foo( 42 );  // 42

// Simple, right? Helpful, too! But it's new syntax that's invalid in pre-ES6 engines. So what will a transpiler do with that code to make it run in older environments?

function foo() {
    var a = arguments[0] !== (void 0) ? arguments[0] : 2;
    console.log( a );
}
```


---

## Weak typing

otherwise known as dynamic typing, allows a variable to hold any type of value at any time. It's typically cited as a benefit for program flexibility by allowing a single variable to represent a value no matter what type form that value may take at any given moment in the program's logic flow.

JavaScript has typed values, not typed variables.

- https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/ch1.md


---



## == vs ===


== allows coercion (most say that == checks value, but are wrongish)
=== disallows coercion (most say that === checks value and type, but are wrongish too)
