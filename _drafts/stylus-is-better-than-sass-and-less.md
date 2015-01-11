---
---
# If Sass and LESS had a baby that ended up being smarter than them, it would be called Stylus

I enjoy LESS when I'm playing with Atom themes. I have fun using Sass(scss) when working on WP projects at work. But I fucking love using Stylus (and Jade) when I get to work on my own stuff. Here's why I love Stylus so much:

## One - forgiving Syntax

All of these are valid

```stylus
// Valid
.headline {
  background: #f00;
  color: #333;
  font-family: helvetica;
}

// Valid
.headline
  background: #f00;
  color: #333;
  font-family: helvetica;

// Valid
.headline
  background: #f00
  color: #333
  font-family: helvetica

// Valid
.headline
  background #f00
  color #333
  font-family helvetica

```
You can write CSS however you like with out throwing and error. Personally, this one is my favorite:

```stylus
// Valid
.headline
  background: #f00
  color: #333
  font-family: helvetica
```
I don't need mustaches {} or semi-colons to read my CSS. Nesting, is perfectly clear, and I save time writing less characters per line. So, you already know how to write CSS in Stylus.

## Two - Variables

Again, you can make variables how ever you want:

```stylus
// Variables
$link = #000

#hover = #666

active = #00f
```
Use what ever variable sytle that suits your needs.

## Three - Objects

LESS doesn't have them. Sass has shitty ones, but Stylus has them as we already know.

```less
// Aint got 'em'
```

```sass
// Objects are called 'Maps'

$typeface-map: (
  sans: (
    config: (
      name: 'source sans pro',
      weight: (
        hairline: 200,
        light: 300,
        normal: 400,
        semi: 600,
        bold: 700,
        heavy: 900
      )
    )
  ),
  serif: (
    config: (
      name: 'source serif pro',
      weight: (
        normal: 400,
        semi: 600,
        bold: 700
      )
    )
  )
)

// And you get values our of your map like this:
map-get($typeface-map, $key);
```

...But, you can't use that to get get info out of the map above because it has 3 levels of nested maps. You have to use a [crazy function](http://sassmeister.com/gist/566686c51749d4e833ef) like this:

```sass
$config: (
  background: #000,

  links: (
    normal    : #fff,
    hover     : darken(#fff, 10%),
    focus     : darken(#fff, 20%),
    active    : darken(#fff, 15%),
    visited   : darken(#fff, 30%),

    random: (
      why: 'Just because I can!',

      deep: (
        hello: 'World!'
      )
    )
  )
);

@function map-search($map, $key) {
  $res: false;

  // Check if the target is a valid map and that the given key is a string
  @if (type-of($map) != map or type-of($key) != string) {
    $warn: if(type-of($map) != map,
    'The given value "#{$map}" isn\'t a valid map',
    'The given key "#{$key}" isn\'t a valid string');

    @warn $warn;
    @return '';
  }

  // Traverse through the given map, if an map is found run a deep search on that key
  @each $k, $v in $map {
    @if $res == false and type-of($v) == map {
      $result: map-search($v, $key);

      @if $result != false {
        $res: $result;
      }
    }
    @else if $k == $key {
      $res: $v;
    }
  }

  // Return the result otherwise nothing
  @return if($res != false, $res, '');
}

body {
  content: map-search($config, why);
  content: map-search($config, hello);
  color: map-search($config, visited);
}
```
But I can't use this function on the typeface-map above to get a 'weight' object because the weight object exist in another object as too. Well, this fucking sucks. At this point we are making our code impenetrable with all these lines and logic.

Here's how we do it in Stylus:

```stylus
// Objects are called Hashes

typeface-map: {
  sans: {
    config: {
      name: 'source sans pro',
      weight: {
        hairline: 200,
        light: 300,
        normal: 400,
        semi: 600,
        bold: 700,
        heavy: 900
      }
    }
  },
  serif: {
    config: {
      name: 'source serif pro',
      weight: {
        normal: 400,
        semi: 600,
        bold: 700
      }
    }
  }
}

// And you get values our of your map like this:
typeface-map.sans.config.weight.light

// If that is too long, then just store part of the path in a variable
$weight = typeface.slab.weight

h1
  font-weight: $weight.hairline

```
This looks and works like the objects we know and love.


## Four - Conditionals

Less has guarded mixins that look weird, and are even harder to explain to a novice user:

```less
.debug(@debug) when (@debug = true) {
  header {
    background-color: yellow;
    #title {
      background-color: orange;
    }
  }

  article {
    background-color: red;
  }
}
```

Sass at least uses familiar `if` and `else` statements, but the `@` characters are annoying:

```sass
$type: monster;
p {
  @if $type == ocean {
    color: blue;
  } @else if $type == matador {
    color: red;
  } @else if $type == monster {
    color: green;
  } @else {
    color: black;
  }
}
```

Stylus agian, looks and works like were expect it to

```stylus
box1 = red
box2 = blue


if (box2 == red)

h1
  color: box1

else

h1
  color: box2
```


## Five - Error Reporting
Error reporting is built in.

> Stylus has fantastic error reporting built-in for syntax, parse, and evaluation errors—complete with stack traces, line numbers, and filenames.


## Stylus FTW!

Stylus feels a lot like CoffeeScript.

## Getting started

Try it on [Codepen](http://codepen.io)

Use it on locally
```
$ npm install stylus -g
```


Use it with Gulp
