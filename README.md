# jQuery countChar plugin

> A simple counter of characters for multiple form fields based on jQuery

### Demo

Example is located [here](http://fedotov.work/jquery-countchar/).

### Usage

Install via bower:

```
$ bower install jquery-countchar --save
```

or via npm:

```
$ npm install jquery-countchar --save
```

or download the `jquery.countchar.min.js` file into your repo.

Then, include script file after the jQuery library and initialize the plugin:

```js
$('.selector').countChar();
```

### Options

You can use the following options as plugin params:

* `text` — Text for the counter;
* `textPosition` — Text position for the counter: `before` or `after`. Defaults to `before`;
* `limit` — Maximum number of characters for each field;
* `limitErrorClass` — Error class name for limit. Defaults to `countchar-limit-error`;
* `outputContainer` — Container for output text and counter. Defaults to `#countchar-output`;
* `onLimitCallback(el, value)` — Callback function called when limit condition worked;
* `onCounterCallback(number)` — Callback function called each time when it counted the number of characters.

Also, you can add `data-countchar` and `data-countchar-limit` attributes to set a regular expression and a characters limit for the current form field. For example:

```html
<input type="text" name="example" data-countchar="[\d]+" data-countchar-limit="10">
```

It will count only numbers and the maximum number of characters will 10. If the characters will be more, it will add error class to the `input` element. The priority `data-countchar-limit` more than the `limit` parameter.

### Release History

* 1.1.0 — Added npm support.
* 1.0.0 — Added bower support.

### License

MIT © [Ilya Fedotov](http://fedotov.me)