# Sass way of using :hover to show a pseudo-element ::after

You gotta use `:hover::after {}`.

```sass
.foo {
  //...stuff

  &__bar {
    //...stuff

    &::after {
      //...stuff
    }

    &:hover::after {
      //...stuff
    }
  }
```

I used this answer on Stackoverflow to figure it out.

[Show :after when hovering over the parent element via CSS](http://stackoverflow.com/questions/15488827/show-after-when-hovering-over-the-parent-element-via-css)
