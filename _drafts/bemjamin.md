---
---
BEMSON


My name is Ben and I love Bem. It was hard to adopt Bem after years of slanging utility classes everywhere, but now I've got it down. As a result, I've come up with several practices that make using Bem easy, powerful and logical.

First off, Bem stands for **B** lock **E** lement **M** odifier, and it's simply a method for:

1. Organizing things
1. Naming things
1. Specificity

Believe it or not, mishandling these three items listed above can turn a newly launched site into an instant nightmare to manage and scale.








I'm not a fan of this.
[Structuring CSS Class Selectors with Sass](http://www.sitepoint.com/structuring-css-class-selectors-with-sass/)

## When to use Bem
We use Bem when we have more than one module. A module is any chunk of code that performs one primary function. General modules in a website are:
- Header
- Nav
- Article
- Sidebar
- Slider
- Accordian
- Gallery
- Footer

Since a site requires many modules, we need to use Bem ALL the time.

## Why Bem?
We need to use Bem because it helps solve these nasty CSS problems:

1. Organizing things
1. Naming things
1. Specificity

Yeah, anyone can write CSS. CSS is a breeze. But naming, organizing and specificity problems can wreck the manageability of your CSS instantly.

Bem gives us a process for handling all of these CSS problems.

## How do you Bem
Bem requires us to start looking at our sites as a collection of individual modules. When we do this, we create organization in our code. No more spaghetti sandwiches yall! Yes, all sites have a header and a footer, but what's between shouldn't be spaghetti code.

So this is the "B" in Bem part. The "B" stands for Block in Bem. And a block is a module of code that has one main purpose.

So each module should now have it's own name. While you can use any naming convention that you want, I'd argue that you'd want to use something obvious and semantic.

What's great about renting a car is that I can rely on the pedals being in the same place. What sucks about renting a car is that sometimes it's a pain in the ass to figure out how the A/C works. This is because the pedals are standardized and the A/C interface is not.

My point is this, if it's a footer, just call it footer. Don't call it endingBlocker.




Here are some example of problematic CSS without Bem...

### Naming without Bem
Let's say you have a heading and you name it `.mainHeading`


```CSS

.mainHeading {
  color: #333;
  font-size: 24px;
  font-weight: bold;
}
```
