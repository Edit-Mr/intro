# Intro

<https://elvismao.com>

The source code of my website's homepage and about page.

<img width=300 src=https://raw.githubusercontent.com/Edit-Mr/intro/refs/heads/main/public/img/thumbnail.webp>

This website has been awarded an [Honorable Mention by Awwwards](https://www.awwwards.com/sites/elvis-mao).

## How to Run

Make sure you have node.js installed.

```bash
npm install
npm run dev
```

## How to Build

```bash
npm run build
```
## About This Project

These two pages have some cool visualization. Here's how they work.

### ASCII Avatar

The spinning avatar is made with **three.js** to turn STL module into ASCII art, and **Vite** to build it. Inspired by this [STL-to-ASCII-Generator](https://github.com/AndrewSink/STL-to-ASCII-Generator).

### Parallax Scroll / Animate on Scroll  

Everything you see moving or fading as you scroll.

Pure hand-written JavaScript. Calculate all the angles and positions you want to move, and calculate the equation of the straight line. Finally, the coordinates or status can be obtained by bringing the amount of scrolling into the calculation.

I have been talked about how these work in [SITCON 2025](https://sitcon.org/2025/agenda/aa71e5/) and my blog (Both of them are in Chinese, translation and my images should help you understand.)

* [Animate on scroll](https://emtech.cc/p/2023ironman-26)
* [Parallax Scroll](https://emtech.cc/p/2023ironman-12)

### i18n

`Ctrl + C`, `Ctrl + V`, retype.

### Spinning Earth

Inspired by Around the World by [thykka](https://codepen.io/thykka). Three.js makes the flat map wrapped into a ball shape and then renders it into ASCII by brightness.

### Other Animations

Pure CSS `@keyframes` or `transition`.

### Build

When this repo receive any updates, GitHub Actions will build and push to repo [Edit-Mr.github.io](https://github.com/Edit-Mr/Edit-Mr.github.io) (elvismao.com).
