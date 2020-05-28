# CSS-Theming

### [A 5-minute approach to implement themes/dark mode in your front-end]

This repository is an example of a framework/library agnostic way to implement themes using CSS and some Javascript.
I've used React along with Semantic UI in this example.

You know the drill:

```sh
$ git clone https://github.com/bearded-impala/CSS-Theming.git
$ yarn
$ yarn start
```

OR

```sh
$ git clone https://github.com/bearded-impala/CSS-Theming.git
$ npm
$ npm start
```

## Overview

Here's what we are doing:

- Writing a CSS [mixin] containing classes of the DOM elements we want to style as a part of our theme
- Including our mixin in the stylesheet meant to be imported in the entry javascript(index.js) or the topmost component(App.js) along with color [variables] as its arguments.
- Writing a short script to change the class of the "body element" using a dropdown in our App component

[mixin]: http://lesscss.org/features/#mixins-feature
[variables]: http://lesscss.org/features/#variables-feature
[a 5-minute approach to implement themes/dark mode in your front-end]: https://medium.com/@siddheshmr83/a-5-minute-approach-to-implement-themes-dark-mode-in-your-front-end-69f67d538cf7
