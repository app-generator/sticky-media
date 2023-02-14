# Sticky Media

Simple Vanilla JS library for Sticky Media content (Youtube videos).

- NPM Page: [Sticky Media](https://www.npmjs.com/package/sticky-media)
- **Support**: 24/7 LIVE Support via [Discord] (registered users)

## Table of contents

- [Technologies](#technologies)
- [Setup](#setup)
- [Quick use](#quick-use)
- [License](#license)

<br />

## Technologies

Project create with:

- Node JS >= 14x

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

Sticky Media (JS Interface) - Provided by [AppSeed](https://appseed.us)
