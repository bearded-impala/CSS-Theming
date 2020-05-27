# CSS-Theming

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

## Overview:

Here's what we are doing:

- Writing a CSS [mixin] containing classes of the DOM elements we want to styled as a part of our theme
- Including our mixin in the stylesheet meant to be imported in the entry javascript(index.js) or the topmost component(App.js)
- Writing a short script to change the class of the <body> element using a dropdown in our App component

## Solution:

#### [Theme.less](https://github.com/bearded-impala/CSS-Theming/blob/master/src/styles/Theme.less)

This stylesheet contains a generic [mixin] style template for your user interface

#### [App.less](https://github.com/bearded-impala/CSS-Theming/blob/master/src/styles/App.less)

The stylesheet for your App.js:

- holds all the colors in the form of [variables]
- includes the theme mixin with color variables as its arguments

#### [index.html](https://github.com/bearded-impala/CSS-Theming/blob/master/index.html)

```
...
<script defer type="text/javascript">
  window.onload = function () {
    if (localStorage.getItem("theme")) {
      document.getElementById("body").className = localStorage.getItem("theme");
    }
  };
</script>
...
```

[mixin]: http://lesscss.org/features/#mixins-feature
[variables]: http://lesscss.org/features/#variables-feature
