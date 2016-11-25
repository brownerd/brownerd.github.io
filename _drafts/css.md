---
---

Let's finally learn how to write Intuitive CSS


1.  Write your HTML "semantically". This means, wrap a paragraph in a <p> tag not a <div> tag. Do not use an <h1> because you want the text to be bigger! Use the HTML tag that best describes the content. Semantic coding evolved from the table-based layout era where all text was commonly wrapped in a <td> tag.

Good
```html
<div>
  <h2>Write CSS</h2>
  <h3>The intuitive way</h3>
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
  <a href="#">Contact us</a>
</div>
```

Bad
```html
<td>
  <span>Write CSS</span>
  <small>The intuitive way</small>
  <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
  <button href="#">Contact us</button>
</td>
```

2. Don't style basic HTML elements! HTML was intended for "marking up text" for the browser to tell what the content was. Markup is not styling. Let's not use any of the HTML tags for styling with CSS.

Good
```css
h1 {}
p {}
li {}
```

Bad
```css
h1 {
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 20px
}
p {
  font-size: 1.5em;
  padding: .5em
}
li {
  color: #ccc;
  margin-left: 20px;
}
```

Yet there are TWO  caveats:

a. You can style them to reset the browser's default stylesheet.
```less
// example
h1, h2, h3, h4, h5, h6 {
  font-size: 1rem;
  font-weight: normal
}
```

b. The `<body>` tag can be styled to set `font-family, font-color and line-height`.
```scss
body {
  color: #333;
  font-family: source-sans;
  line-height: 1.5;
}
```

3. Set a "root" font size. `:root {}` selects your document's root. This allows you to set a bass font size to be used throughout the all your styles. Your base font size should be set to size that you want all of your paragraph text to be. From here on out, use `rem` units to indicate font size

```scss
// example
:root {
  font-size: 20px;
}

.headline {
  font-size: 2rem; // this is equal to 40px
}

.legal {
  font-size: .5rem; // this is equal to 10px
}
```


After reading this article, [If CSS is so easy why does everyone suck?](https://hackernoon.com/if-css-is-so-easy-why-does-everyone-suck-e4442cc9428a#.kb5ekhp61) I decided it was time to quit what I'm doing to help people write good clean "intuitive" CSS. We CAN write CSS that makes sense and is also maintainable. Let's start at the beginning.

CSS is the language used to STYLE the elements of a webpage. There is a beautiful one-to-one match between HTML and CSS. A paragraph in HTML is a humble "p" wrapped inside diamond tags "<>". We will call this a paragraph tag, or simply call it a "p" tag. This "p" tag tells the browser that it's reading a paragraph. Well, using the "p" selector in CSS tells the browser that it's styling all paragraphs.

A paragraph

HTML: <p></p>  (HTML uses diamond tag syntax <></> to markup text )
CSS:   p {}    (CSS uses curly braces {} to assign styles to it's selector)

If you know HTML, you also know how to style(select) all HTML tags in CSS. This part of CSS is in fact "intuitive." If your HTML tag is a <h1>, then your CSS selector for that tag is h1 {}.

## Now here is where it all goes to shit
HTML is for MARKING UP TEXT! HTML tells the browser what it's looking at. It helps search engines make sense of the content. Without HTML tags, text renders as one big huge blob of text.

`add example`

Yes, HTML is great for the browser, but that isn't enough for us. We need more visual cues for differentiating between heading/titles and paragraphs. Thus, the browser style was enacted and THUS, came the notion that <h1></h1>s are bigger and bolder than <h6><h6>s. I doubt that anyone is catching the magnitude of what this set into motion.

THE PROBLEM IS THAT HTML TAGS RECEIVED A DEFAULT STYLING.

As a result, we have a massive majority that still writes STYLES on the base HTML elements. I'd argue strongly that most HTML tags SHOULD NOT be styled directly. This feels like an unnatural suggestion, because HTML tags have been fed to us a styled since the CSS movement 10 years ago.

Yes, we need to style the elements in our webpages, but the approach for doing so has been wrong all along. Let me list all the bad practices that have been around from the beginning:

1. A browser specific stylesheet that sets default styles on HTML elements. We fight this every day by using resets and normalize.

2. Overqualified selectors. In stead of using `.someClass {}` early CSS practice told us to include the entire DOM path to that class selector `#container div#main-content ul#feature-list li span.someClass {}`. We still see this alive and well in pre-processor stylesheets where people do this crap

[Nested selectors: the inception rule](http://thesassway.com/beginner/the-inception-rule)
```scss
#container {
  div#main-content {
    ul#feature-list {
      span {
        .someClass {

        }
      }
    }
  }
}
```

3. Styling IDs. Ugh. An old practice was to give a section of your code an ID and then select all of it's children after the ID.

```css
div#feature h2 {}
div#feature p.first {}
div#feature div img {}
```

4. Then there is the shit storm of utility classes that came from the misuse of OOCSS. OOCSS isn't bad, but making EVERY STYLE a single class is fucking nuts.

```css
.pt-35 {padding-top: 35px}
.m10 {margin: 10px}
.m-lg-tb {margin: 20px 0 20px 0}
.lg-text {font-size: 30px}
.red-text {color: red:}
.bold {font-weight: bold}
.hel {font-family: helvetica}
```
Thus making this gross piece of HTML possile `<h2 class="pt-35 m-lg-tb lg-text red-text bold hel">Hello</h2>`.


5. Inlining CSS styles for save on file size. Seriously, this used to be considered cool:

```css
.main-heading {color: #333; font-size: 30px; font-weight: bold; padding: 20px; font-family: helvetica, arial, sans-serif; text-transform: uppercase;}
```

6. Abstracting the shit out of simple CSS with pre-processors:
```scss
@mixin col($col, $sum, $gap: 1em, $align: top, $first: false, $last: false) {
  width: percentage($col/$sum);
  font-size: 16px;
  display: inline-block;
  vertical-align: $align;
  box-sizing: border-box;
  padding-left: if($first, 0, $gap);
  padding-right: if($last, 0, $gap);
}
```

7. Using Bootstrap. So, instead of simply writing the CSS that I need, I am forever bound to the Bootstrap documentation to do anything.


8.


We also like pretty pictures.


Like JS, CSS has had a massive explosion in tooling and best practices. As a result, Bootstrap like thinking has killed the learning of CSS. Seriously, why write CSS when Bootstrap has done all the thinking for you? Why get a CSS expert when we can get a bunch of Devs to simply learn and use Bootstrap?
Truth be told, demand to get shit out the door has superseded mastering the use of the language. It’s not that CSS is a pain in the ass, it’s that responsive CSS and x-browser requirements have ballooned! Addressing these needs makes a CSS codebase SHITY to manage. 



CSS is dead. Seriously. It was a living language when standards based practices killed table-based front-end dev. But then responsive and pre-processors happened. Programming logic killed vanilla CSS. And with it, came programmatic BS

- [If CSS is so easy why does everyone suck?](https://hackernoon.com/if-css-is-so-easy-why-does-everyone-suck-e4442cc9428a#.kb5ekhp61)
