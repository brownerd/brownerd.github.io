---
---

Let's finally learn how to write Intuitive CSS


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

3. Styling IDs. 


We also like pretty pictures.


Like JS, CSS has had a massive explosion in tooling and best practices. As a result, Bootstrap like thinking has killed the learning of CSS. Seriously, why write CSS when Bootstrap has done all the thinking for you? Why get a CSS expert when we can get a bunch of Devs to simply learn and use Bootstrap?
Truth be told, demand to get shit out the door has superseded mastering the use of the language. It’s not that CSS is a pain in the ass, it’s that responsive CSS and x-browser requirements have ballooned! Addressing these needs makes a CSS codebase SHITY to manage. 



CSS is dead. Seriously. It was a living language when standards based practices killed table-based front-end dev. But then responsive and pre-processors happened. Programming logic killed vanilla CSS. And with it, came programmatic BS

- [If CSS is so easy why does everyone suck?](https://hackernoon.com/if-css-is-so-easy-why-does-everyone-suck-e4442cc9428a#.kb5ekhp61)
