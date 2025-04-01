# Primer React Bundle

[primer](https://primer.style/) is a design system, released by Github under the MIT license. It is the design system that github itself is [built on](https://motiff.com/design-system-wiki/design-systems-overview/primer).

Primer contains design guidelines and a set of components which can be consumed by React or Ruby on Rails.

This repo bundles up Primer and React for browser use.

## Getting Started

To reference this library
```html

```

The easiest way to get started is to:
- Copy this repo's 'test.html' file to your local machine
- Open it in a browser
- You should see four Primer React components. From there you can import and add Primer components to your heart's content


## Why?

I created this bundle as I prefer to work with HTML and CSS directly, rather than having to do things the "React Way". In fact I would prefer not to use React at all truth be told :-O However the Primer component library contains so many simple, elegant and powerful controls that the good vibes I was getting from Primer outweighed the misgivings I have towards React.

I could not find a bundle like this (perhaps it exists already but I couldn't find one), hence created this one.

It is useful to get a quick start with the Primer components, i.e. no installation or bundling, just write JSX code within an HTML file.

Some folks may even be brave enough to take an approach like this all the way to production. This is my current intention.

## References

This bundle requires some additional references.  These references can all be found in `test.html` and are re-printed below

```html
  <!-- include babel. This is so we can use JSX in our html page -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <!-- Although primer builds in CSS is still needs a stylesheet -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@primer/css@21.5.1/dist/primer.min.css">
```

## What size is all of this?

This bundle is almost exactly 1 Mb.  Babel seems to be approx 2.88 Mb. The CSS adds another 728 Kb.

## Development

This is a very simple webpack project.  To build the bundle clone the repo and run `webpack`, which will build to `/dist/primer-react-bundle.js`. Test your build by opening `test-internal.html` in a modern browser

## Improvements

I'd love to see better ways of doing this. This is a starting point to enable me, and whoever else to develop in a sane, HTML-first way and still benefit from the great work the Primer team have done.  Specifically:

- Primer bundles in a lot of CSS, why is a separate CSS library required?
- Surely there is a better way to enable JSX to be run in the browser than having to reference almost 3 Mb of Babel??!!
- React runtime libraries are really all that are needed. Is there a lighter-weight React runtime library that could be used?


