---
---
# SASS vs SCSS vs Stylus ?LESS?

Here’s what I like and dislike about all the pre-processors


## .SCSS
I hate .scss. I hate writing all the semi-colons and curly braces. I also hate all the syntax bloat with @extend, @indlude, % etc.

That said, I like that .scss can do Sass maps. However, it is a major pain in the ass to get keys and values out of a multi-level Sass map.


## .SASS
I love .sass. I love the clean minimal syntax. Indentation works fine for me, it’s just fucking nesting (we already do this).

I love how easy it is to do mixins using “= , +.” Soo, simple. But I hate that I can’t use Sass maps and other technical mixins.

I also love how comments work in Sass.

//
/*

I hate how Sass maps have to be done on one line with .sass. Due to the nature of the indented syntax, you can't nest or break the key value pairs into their own lines.


## Best of both flavors
I get the best of both Sass flavors by using Gulp to compile my Sass. I write a Gulpfile that allows me to use .scss and .sass at the same time. This way I get to use the fast and clear syntax of .sass and keep the power features of .scss.

## Ruby Sass / LibSass
I use LibSass with my gulp files because it’s wicked fast. I use an auto reloading feature called ‘browser-sync’ and LibSass keeps the reloader from lagging. Libsass is never up to date with Ruby Sass, but I haven’t missed any latest Ruby Sass features yet.


## Stylus
If I get to pick my favorite Pre-Processor, I pick Stylus.

I can write even less with Stylus, even the colons are optional.
Stylus Hashes syntax kick the shit out of Sass maps’.

Loops are awesome

JS logic

### Bugs.
You have to use colons when doing content: "someThing". You can't do content "something."



## LESS
I use LESS all the time when making thees for ATOM. 
