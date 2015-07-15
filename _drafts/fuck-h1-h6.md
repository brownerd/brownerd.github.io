---
---

Fuck h1 through h6!

I say this because it marries style with structure. H1-H6 are elements to semantically mark up your HTML. There should be NO default style related to any of them. I understand they are relics of the early web, but today they cause a shit load of problems.

## 1.  CSS Specificity nightmares
Holy shit! Stop writing styles to H1-H6! Style classes to add to them instead.

I say this because on one page, the h1 could be super huge, bold and have a text shadow. Yet on an internal page, it might be smaller, normal and not have a text shadow. And then in an Article element the H1 could have a totally different treatment. And then, in a WP site (since the WYSIWYG editor sucks) people use the H1 setting throughout their article just because it has the bigger bolder style.

This is madness. H1 - H6 are for semantics. Size, color, styling is irrelevant.

Keep you heading tags free of specific styling.

## 2. Clients and non-technical users
Buy subscribing to this belief that H1-H6 need

http://codepen.io/brownerd/pen/c94df6eb092eb11692aaa750de93c27e?editors=110


## WP
In a WP environment (I'm not sure about the other CMS') there are default H1-H6 elements that the user can select through the WYSIWYG. The client now uses the the element that has the 'style' they want instead of the semantics that are correct. Before you know it, you have 10 H1s in a blog post.

## Dev
On the other end, devs think or are expected to have a default styling for H1-H6 that resembles the default styling where H1 is the biggest and boldest and H6 is the smallest.

## H1-H6 should be unstyled by default and styled to the module instead
