---
---

## Naming, Specificity and organization
### CSSs' threatening threesome

In today's CS world, we have great tools like Pre-Procesors, Post-Processors and build tools like Gulp. We have helpful practices like OOCSS, SMACCS and DoCSSA. We can forgo writing most of our CSS with BootStrap. And we have Harry Roberts!

Yet, we still struggle with naming, specificity and organization in our CSS. I'd argue that these are a struggle because each project we face requires tweaking our naming, specificity and organization a bit. These problems cause our CSS to go stale really quickly in a code base that requires growth and management. I, like everyone else, have some solutions for these problems.

## Naming practices
I think that BEM is the only way to go in today's modular world. Start looking at your


## The trick to naming stuff in your CSS
Use BEM for everything that isn't a simple CodePen.

It's important to use BEM because it gives us a method for "naming" things. Naming things is a nightmare unless you have a strict pattern to adhere to. Sticking to this pattern help make your code predictable and easy to follow. I'd argue that modular patterns are the best practice we have at the moment. So here's how it works

1. Everything is a module. Your webpage/app is a collection of different modules such as a header, nav, slider, sidebar and footer.
2. Every module gets it's own name in the HTML that follows through to the CSS. Example

HTML
```
<header class="home-header">
  <div class="home-header__container">
    
  </div>
</header>
```

Sass
```
.home-header

&__container

```


compliments modular coding practices, and it set you up for better specificity and extendability practices at the same time. So these practices are out:

Strict OOCSS Utility Classes
```

```












---


Writing CSS is fun. This is where our sites become visually appealing. This is where we get to flex our designer skills from a developer's chair. Writing "good" CSS has been a journey, let's revisit that history for some of the younger people and see ow that informs us today.

## Tables turn to CSS
There was a time when all layout was handled with html tables and CSS was writen inline. We did it because tables offered the only consistancy between IE and NetScape for layout. We inline CSS because no one knew shit about stylesheets yet. We lived in PhotoShop for design and sliced our designs into a table of blocks. That slice matrix became our table-based layout.

The Good, Bad and the Ugly
```
<table>
  <tr>
    <td>
      <p STYLE="color: red; font-family:arial, helvetica, sans-serif; font-size: 18px; >HELLO!</p>
    <td>
  <tr>
</table>
```
Just looking at CSS cave paintings above.

## Standards based valid CSS or you suck
Between, IE for Mac, FireFox, Jeffery Zeldman, Dave Shea (CSS Zen Garden), CSS Mastery we learned that layout and styles could be better managed and constructed with Stylesheets! Layout because simpler once you learned how to clear floats. We started using CSS for :hover states instead of JavaScript. Inline CSS disappeared. And XHTML emerged as a best practice to thwart inconsistent HTML practices. Now all tags HAD to be closed. And to prove that you weren't a joke, you had to validate your XHTML and CSS and display your passing badges in the footer of your website.

### The Good, Bad and the Ugly
```
body.home div div#grid div.column {
  float: left;
  width: 300px;
}

body.home div div#grid div.column-clear {
  clear: both;
  height: 0;
  width: 0;
}
```
We still didn't know how CSS worked yet, but it was valid!


## CSS Zen Garden and WordPress
The most popular sources of CSS inspiration and organization were CSS Zen Garden and WordPress. We plundered CSS Zen Garden for the latest techniques of what CSS could do. We thought that "good" CSS was a stylesheet with no error in it. WordPress took this a step further and asserted that a good stylesheet also separated style from structure. Thus, it was encouraged write code like this:

### The Good, Bad and the Ugly
```
#content {
  padding: 20px 40px;
  width: 450px;
}

#content {
  background-color: yellow
  color: black
  border: 1px dotted black
}
```

After working on a WP site from a hacked theme, you'd spend half your time scrolling back and forth between the style from structure selectors. But we were killin it!

## OOCSS
Nichole Sullivan (Stubbornella) presented "Object Oriented CSS" and how she cleaned up Facebooks codebase and that pretty much sealed the deal for those that were CSS nerds. However, may were not. At this point most of the CSS people were designers tasked with styling their designs, or people still dependent on PhotoShop and Dreamweaver to generate their styles for them. People were either deigners or developers. There wasn't a UX/UI role yet. Designers learned CSS and developers avoided CSS if they could. Regardless, OOCSS was the first real best practice for all things CSS.

For those that were in on it, we bailed on our random names for everything and broke our CSS into little "utility" classes that fullfilled simple tasks. Our HTML became filled with multiple classes and our one mega stylesheet turned in to several organized around a simple purpose. In a way, I really enjoyed this. Building and prototyping a site became really fast since I was pushing my own library instead of remaking everything. This practice eventually gave way to BootStarp and Foundations.

### The Good, Bad and the Ugly
```
.mtb {
  margin-top: 20px;
  margin-bottom: 30px;
}

.bold {
  font-weight: bold;
}

.float-left {
  float: left;
}

.bg-yellow {
  background-color: yellow;
}
```

```
<div class="mbt bold float-left bg-yellow">
  ...
</div>
```
We were starting to write smaller [rule sets](http://codepen.io/brownerd/pen/3ea87effa37a6baf3447b0a190d11971) and everything was a class now. IDs were frowned upon and this made specificity issues a little better.


## Pre-Processors
The first pre-processor I used was called Scaffold by Anthony Short. Pre-Processors were great because you could have variables and mixins in your code and build one stylesheet for production from all of your utility style sheets. Thus, you had fewer CSS assets to load. Scaffold eventually lost out to Sass and LESS, but pre-processors had found their place. CSS now had logic, functions and variables. Writing Sass or LESS favored the developers, and setting it up did as well too.

If you were one of the early few that knew how to set up Sass and LESS, variables and mixins were everywhere. Stylesheets were separated into simple modularized pieces. So while CSS was getting more organized and powerful to write, nesting styles got really messy.

### The Good, Bad and the Ugly
```
.container {
  width: 100%;

  div.main {
    background-color: $yellow;
    padding: $base-padding;

    heading.primary {
      @include master-heading(20, bold)

      h2 {
        @extend %base-heading
        font-color: blue !important;
      }
    }
  }
}
```
Nesting madness, but it's Sass!

## Houston, we have a naming and specificity problem
Alright, we have tools like Sass, LESS and Stylus to help our CSS. We have OOCSS for creating modular CSS, but it's still a fucking mess. SCMACCS, BEM, Harry Roberts and DOCssa and Atomic design emerge to help us write maintainable CSS. Jonathan Snook's SMACSS provided us with a logic for naming and organizing our CSS. As awesome as this is, I don't know anyone that uses it strictly. Although, it is has importantly helped further the practice of writing modular CSS.

Harry Roberts has helped us with standards and killing problematic practices.

BEM has emerged to give logic to the way that we name our modules and their innards.

## Building better


## Mobile first


## BootStrap and Foundations


## Today Problems
This CSS space has evolved quickly and it iterates rapidly as well. It is impossible to keep up, and it impossible to expect everyone to get it.


## What I'd like to see
I'd like to see everyone get back to writing their own CSS from start to finish.

I'd like to see everyone develop naming practices around their project, and not let BootStrap call all the shots.

I want people to stop using Compass and Bourbon, and use Gulp instead.

I want people to create their own grids. This is so fucking easy.

I want to see people use attribute selectors for base styles, and over-ride them in the module.










Today, I think that we still do a crap job of naming stuff, and relying on



Just before Stubornella's OOCSS
Before OOCSS (more on that later)


I like clean CSS as much as the next person. I want my CSS to be easy to extend, clear to read, easy to manage and performant as well. But writing code is a durrty (stl spelling) job. We do not get perfect code ever. At best, we get the best solution for the moment, and the fuse is lit to our codebase. It will blowup, become unmanageable and stale. This is the nature of the beast. We have to make decsions for today and the foreseeable future, but the future seldom calls before it shows up at our doorstep. We work in a turbulent field of moving targets. Developers, I salute you.

Ugh, had to get that off of my chest. Seriously! WTF are we doing? We are surrounded by web-based bone yards and we are forced to learn the next new thing only to ditch it of the next best thing.

```
[class*='__button']
```

That's it! "I've solved the CSS!

Actually—I haven't, but I think I've found a more manageable way to write the CSSz.

This solves these problems:

- Naming
- Library
- Hidden mixin code
- Compass BS
- Cascade
- Extending / Overwriting

Let me explain


## BootStrap (or any CSS framework for that matter)
Hint, I'm going to bad mouth BootStrap. I dislike bootstrap because:

1. the level to entry is becoming familiar with it first
2. the code base is managed by someone else
3. you got to solve your problems through a bootstrap first approach
4. people are no longer writing the easy stuff anymore

That said, BootStrap fucking rocks. It has made the internetz look better, and it has helped countless dev build sites that aren't fucking painful to look at. And it's given a clean place for noobs to start out.

## Compass, Bourbon/Neat, etc.
Hint, I'm going to hate on these too. I dislike Compass and Bourbon because:

1. The code base is outside of my code base. I hate tracking down Compass/Bourbon mixins to figure out what they do. Or worse, depending on them instead of writing CSS on my own.
2. Using Compass/Bourbon to handle browser pre-fixes

## Strict OOCSS
1. I love what I learned from OOCSS, but ending up with a crap ton of utility classes gets crazy.


Follow these rules and your CSS will be problem free!"

If you ever hear this, then you know that the author is full of shit.

The attribute selector.
