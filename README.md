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

## Solution:

#### [index.html](https://github.com/bearded-impala/CSS-Theming/src/index.html)

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

#### [Theme.less](https://github.com/bearded-impala/CSS-Theming/src/styles/Theme.less)

This stylesheet contains a generic [mixin] style template for your user interface

#### [App.less](https://github.com/bearded-impala/CSS-Theming/src/styles/App.less)

The stylesheet for your App.js:

- holds all the colors in the form of [variables]
- includes the theme mixin with color variables as its arguments

[mixin]: http://lesscss.org/features/#mixins-feature
[variables]: http://lesscss.org/features/#variables-feature
