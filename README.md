# [Sticky Media](https://github.com/app-generator/sticky-media)

Simple Vanilla JS library for `Sticky Media` content (YouTube videos) - actively supported by [AppSeed](https://appseed.us/).

- NPM Page: [Sticky Media](https://www.npmjs.com/package/sticky-media)
- Free [Support](https://appseed.us/support/) via Email & Discord

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

Example:

```javascript
<a class="sticky-popup" href="https://www.youtube.com/watch?v=G1OM2L7XK5Y">Video_1</a>
<a class="my-sticky-class" href="https://www.youtube.com/embed/wWY_clozJlU">Video_2</a>
<a class="" target="_blank" href="https://www.youtube.com/watch?v=G1OM2L7XK5Y">Video_3</a>

<script src="dist/index.js"></script>

<script>
// Default -> "sticky-popup" CSS class is used
var strickyMediaInstance = new StrickyMedia();

// Custom -> "my-sticky-class" is used to trigger the popup
var strickyMediaInstance = new StrickyMedia( {'cssClass':'my-sticky-class'} );
</script>
```

<br />

## License

@MIT License

<br />

---
[Sticky Media](https://github.com/app-generator/sticky-media) - Simple Vanilla JS library provided by [AppSeed](https://appseed.us)
