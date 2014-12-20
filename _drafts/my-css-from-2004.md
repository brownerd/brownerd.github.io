**Date: July, 31 2014**

# My CSS from the 2004


I started writing CSS right at the time of the popularity of "Web Stardars." Yall remember that shit. Remember back when all sites had that badge of code "validation" in the footer? Well that was the Wild Wild West of fronted end development back then. This is back when HTLM elements would be capatilized:

`<P> <H3> <DIV>`

Here is a list of all the crazy shit I used to do that would make someone want to puke at my code.

___


## Overview

**CSS was not polular yet!**

Tables ruled the layout world, and most CSS was actually writen by Photoshop and or Dreamweaver. And all CSS appeared to be some kind of hack.**



## Style Guide

**There was none.**

Here are some examples of FrankenStyleSheets:

**1. Full path selectors**

```css
div div ol li ul li div h1 a:link {}
div div ol li ul li div h1 a:hover {}
div div ol li ul li div h1 a:active {}
div div ol li ul li div h1 a:visited {}
```
*We did this*

**2. IDs on errthang**
```css
div#container div#about h2#mainHeading {}
```

**3. Star selector reset**
```css
* {
margin:0;
padding:0;
}
```

**4. One liners**
```css
div#rightColumn div#sidebar { background-color:#e6e6e8; font-size:10px; font-family:georgia; padding-top:23px; margin:0 20px; color:#666; }
```
**5. IE 6 & 7 Hacks**
```css
h2#specialStyles {
color: rgba(130,32,45,.5);
_color: blue; /* IE6 */
*color: blue; /* IE7 */
}
```

**6. Horrible naming conventions**
```css
#brighterRedandBolder,
#left-column-about-page-sidebar-highlighter,
.greenish-brown-undelined-hover-state {}
```


## Architecture

**One long ass page or tons or imports**

Back then you'd either have one turbo long stylesheet, or one stylesheet that imported dozens more. Both sucked.

I remember that WordPress used to split one stylesheet into two sections: presentation and structure. So then you ended up with identical selectors doing two different things:

```css
#entry {
    color: red;
    font-size: 18px;
    text-transform: uppercase;
}
```

and then

```css
#entry {
    margin: 10px 0 0 0;
    width: 250px;
    clear:both;
}
```

## WC3-Processor

**WC3 baby**

You processed code through the WC3 validator. It had to validate for you to look smart.




## Lessons learned

**Code ages like bread, not like wine**

Best practices stay in flux. Validators died because they choked on HTML5 and CSS3. CSS used to be writtin on multi-lines, then some fuckers popularized "one-line" css (smaller files over legibility). I'm glad that Pre-Processers can minify css for us now.

The old days showed us that managing css had these problems:

1. Organization
2. Managability
3. File size
4.

As it stands, the future is gonna be pre-processor based.
