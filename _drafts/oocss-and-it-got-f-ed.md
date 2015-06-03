---
---
OOCSS and how I got it wrong.


FIRST, OOCSS is awesome. I love it. I saw it's importance instantly, and I love what it did for me.

That said, I think that I got it wrong trying to turn all my needed styles into classes. Under OOCSS I started to look at using css classes as 'objects' that did really simple Things

```
.bold { font-weight: bold;}
.left {float: left;}

//etc
```

 I created a shit ton of utility classes.

 But under the light of using BEM (Block Element Modifier) Methodology I now know that the first "O" in OOCSS refers to the Block being created in BEM. The block is the Object.

 I don't need utility classes and the mishmash that ensues with tons of fucking classes on each element.

 Instead, it need my blocks/objecs to override base attribute selectors. Specificity nightmare over.
