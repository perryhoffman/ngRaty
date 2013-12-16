# ngRaty  v0.0.1

- A simple AngularJS directive for the jQuery Raty plugin by [wbotelhos](https://github.com/wbotelhos/raty)

## Requirements

- [AngularJS](http://angularjs.org/)
- [jQuery](http://jquery.com/)
- [jQuery Raty](https://github.com/wbotelhos/raty)


## Getting Started

Include ng-raty into your html, as well as the other dependencies:

```html
  <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.0/angular.min.js"></script>
  <script type="text/javascript" src="jquery.raty.min.js"></script>
  <script type="text/javascript" src="ngraty.js"></script>
```

Add the directive to your HTML:

```html
    <div ng-raty="ratyOptions"
         ng-model="rating.current"></div>
```

Optional mouse-over and mouse-out attributes can be added by passing in functions that take two arguments:

```html
    <div ng-raty="ratyOptions"
         ng-model="rating.current"
         mouse-over="demo.mouseOver(stars, e);"
         mouse-out="demo.mouseOut(stars, e);"></div>
```
For a full list of available options, check out the [Raty Github page](https://github.com/wbotelhos/raty#options)

## Demo

http://jsfiddle.net/phoffman/x6y26/
