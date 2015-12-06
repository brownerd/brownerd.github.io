---
---

[Building and shipping functional CSS](https://blog.colepeters.com/building-and-shipping-functional-css/)


Dude. This is not the answer. This is just another OOCSS approach. A ton of utility classes is not the answer.



Ok. We all have the liberty to figure out this CSS stuff however we want. Yes, there are many approaches. And i have another one to add to the mix.

Love it hate it.

Personally, I just think we need a better way to override stuff.

Here's my approach, attribute selectors mutha fuckas!

[class*='header'] {
  color: green;
  font-size: 3rem;
}

.article-header {
  color: red;
}



```html
<div class='u-relative u-mt1 u-p2 v-bg-white v-bs2'>  
  <!-- The contents of the card -->
</div>  
```


Managing utility classes is just nuts.
```html
<div class='u-relative u-mt1 u-p2 v-bg-white v-bs2'>  
  <!-- The contents of the card -->
</div>  
```


Repeating base classes sux too.
```html
<div class='nav nav-large'>  
  <!-- The contents of the card -->
</div>  
```

The cool thing about Attribute selectors is that they have a lower specificity than classes, but you can match patterns. 
