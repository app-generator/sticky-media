# [Sticky Media](https://github.com/app-generator/sticky-media)

Simple Vanilla JS library for `Sticky Media` content (YouTube videos) - actively supported by [AppSeed](https://appseed.us/).

- NPM Page: [Sticky Media](https://www.npmjs.com/package/sticky-media)
- Free [Support](https://appseed.us/support/) via `Email` & `Discord`

<br />

![Sticky Media - Simple Vanilla JS library for media content.](https://user-images.githubusercontent.com/51070104/219112822-feec1d21-1d3e-4c99-856c-99ccd4d8014c.png)

<br />

## Table of contents

- [Environment](#environment)
- [Manual Preview](#manual-preview)
- [Quick use](#quick-use)
- [License](#license)

<br />

## Environment

Project create with:

- Node JS >= 14x

<br />

## Manual Preview 

> Using **Python** 

`$ python -m http.server 9999`

> Using **PHP**

`$ php -S localhost:9999`

<br />

## Setup

Install it locally using PyPI:

```bash
$ npm i sticky-media
```

<br />

## Quick use

Simply and functional example/s of use.

> Step 1: Import the JS (local storage)

```javascript
<script src="dist/index.js"></script>
```

Or you can simply use CDN storage: 

```javascript
<script type="text/javascript" src="//cdn.jsdelivr.net/gh/app-generator/sticky-media@latest/dist/index.min.js"></script>
```

<br />

> Step 2: Init the library 

```javascript
// Default -> "sticky-popup" CSS class is used
var strickyMediaInstance = new StrickyMedia();

// Custom -> "my-sticky-class" is used to trigger the popup
var strickyMediaInstance = new StrickyMedia( {'cssClass':'my-sticky-class'} );
```

<br />

> Step 3: Use it in the code

- `Video ID`: **GET parameter**

```javascript
<!--  -->
<a class="sticky-popup" href="https://www.youtube.com/watch?v=G1OM2L7XK5Y">Video_1</a>
```

- `Video ID`: **URI segment**

```javascript
<a class="sticky-popup" href="https://www.youtube.com/embed/wWY_clozJlU">Video_2</a>
```

<br />

## License

@MIT License

<br />

## Resources 

- More [Tools for developers](https://appseed.us/developer-tools/) - `all free`
- Free [Support](https://appseed.us/support/) via `Email` & `Discord`

<br />

---
[Sticky Media](https://github.com/app-generator/sticky-media) - Simple Vanilla JS library provided by [AppSeed](https://appseed.us)
