# markdown-it-inline-wrapper

There are already markdown-it plugins for adding `div`s or containers, but those require line breaks and that breaks how lists work in markdown. There isn't a TON of need for this specific plugin, and in most cases I'd recommend using `markdown-it-span`. That said, I needed this plugin to make more lists a little more semantic. I wanted to wrap the contents of a list item to work with a `::before` pseudo-element in a grid layout. A `span` would have worked fine here, but really this should be a block level element and not an inline element.

In the future, I'd like to build this to allow you to pass the element that you'd like to use `div` or `span`.

## Quick Look

`==this is wrapped in a div==` will output `<div>this is wrapped in a div</div>`

Markup uses the same conditions as CommonMark [emphasis](http://spec.commonmark.org/0.15/#emphasis-and-strong-emphasis). Basically, that means, you can wrap `div`s inside of `div`s, but you can also use `====` to get two `div`s.


## Install

node.js

```bash
npm install markdown-it-inline-wrapper --save
```

## Use

```js
var md = require('markdown-it')()
            .use(require('markdown-it-inline-wrapper'));

md.render('==this is wrapped in a div==') // => '<p><div>this is wrapped in a div</div></p>'
```

OR

```js
const markdownIt = require('markdown-it');
const markdownItInlineWrapper = require('markdown-it-inline-wrapper');

var md = markdownIt().use(markdownItInlineDiv);

md.render('==this is wrapped in a div==') // => '<p><div>this is wrapped in a div</div></p>'
```

_Differences in browser._ If you load script directly into the page, without
package system, module will add itself globally as `window.markdownItInlineWrapper`.


## License

[MIT](https://github.com/markdown-it/markdown-it-inline-wrapper/blob/master/LICENSE)
