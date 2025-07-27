
# ✨Curvia — Declarative Animation Library Powered by GSAP

[![npm version](https://img.shields.io/npm/v/curvia.svg)](https://www.npmjs.com/package/curvia)


**Curvia** is a lightweight, plug-and-play animation library built with **GSAP** and **Vite**, designed to work seamlessly with **React** and **Vanilla JavaScript**. It allows developers to use a simple `animate` attribute or hook to trigger smooth, production-ready animations — no boilerplate required.

---


##  Features

- Simple animate="" attribute (no JS needed for basic animations)
- React Hook (useAnimation) & Vanilla JS (Animation) support
- Powered by GSAP and ScrollTrigger
- Supports scroll-based animations, text effects, hover effects, and more
- Built-in effects: Fade, Slide, Zoom, Rotate, Magnet, Heartbeat, Typewriter
- Works with preloaders (via loading flag)
- Ultra-light and extendable

---

##  Installation

To use Curvia in your project, you can either:
- Import it via CDN directly in your HTML file, or
- Use npm with React or Vanilla JS builds.

### Using npm (Recommended for React/Vite/Modern Apps)

```npm
npm install curvia
```
Make sure GSAP is also installed:
```
npm install gsap
```
and require
```
import { useAnimation } from "curvia";

useAnimation(); // call the function
```
### CDN version
```
<script type="module">
  import { Animation } from "https://cdn.jsdelivr.net/npm/curvia@1.0.0-beta.0.0.1/+esm";
  Animation(); // Call on load

// Animation({ loading: true }); // if you want to delay until preloader ends
</script>
```

## ⚙️ Setup

### React

```js
// src/App.jsx
import { useAnimation } from "curvia";

function App() {
  useAnimation(); // Initializes animations on mount
//or
  useAnimation(loading);  // if you want to delay until preloader ends

  return (
    <div animate="fade-in slide-up delay:0.3 duration:1">
      Hello Curvia!
    </div>
  );
}

```

### Vanilla JS

```js
<div animate="zoom-in, delay:0.5">Zoom Me</div>

<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>

<script type="module">
  import { Animation } from "https://cdn.jsdelivr.net/npm/curvia@1.0.0-beta.0.0.1/+esm";
  Animation(); // Call on load

// Animation({ loading: true }); // if you want to delay until preloader ends
</script>

```
## Usage

Just add the `animate` attribute to any element:
```
<div animate="fade-in, slide-up, delay:0.3">Hello Animation</div>
```



## SUPPORTED EFFECTS

| Effect                           | Description                                  |
| -------------------------------- | -------------------------------------------- |
| `fade-in`                        | Fades element in                             |
| `fade-out`                       | Fades element out                            |
| `slide-up`                       | Slides element upward                        |
| `slide-down`                     | Slides element downward                      |
| `slide-left`                     | Slides element from the right to the left    |
| `slide-right`                    | Slides element from the left to the right    |
| `zoom-in`                        | Scales element in (zoom effect)              |
| `zoom-out`                       | Scales element out (zoom effect)             |
| `rotate:30`                      | Rotates the element by the given degrees     |
| `delay:0.3`                      | Adds a delay before animation starts         |
| `duration:1.5`                   | Sets the duration of the animation           |
| `ease:power3.out`                | Applies a custom GSAP easing function        |
| `repeat:2`                       | Repeats the animation for the given count    |
| `magnet`                         | Adds a magnetic hover effect                 |
| `heartbeat`                      | Adds a pulsing/heartbeat scaling effect      |
| `typewriter`                     | Simulates typing effect with blinking cursor |
| `direction:center/left/right`    | Aligns text during typewriter animation      |




## Syntax:

- fade-in 
```
<H1 animate="fade-in duration:2 delay:0.5">
```
- fade-out
```
<H1 animate="fade-out duration:2 delay:0.5">
```
- slide-up
```
<H1 animate="slide-up duration:2 delay:0.5">  //default
<H1 animate="slide-up y:60 duration:2 delay:0.5">

❎ y:[60]       ✅ y:60
// value of "y" should be like this if used
```
- slide-down
```
<h1 animate="slide-down y:-60 delay:0.5 duration:1">

❎ y:[-60]      ✅ y:-60
// value of "y" with -ve sign needed if given
```
- slide-right
```
<h1 animate="slide-right x:-60 delay:0.5 duration:1">
```
- slide-left
```
<h1 animate="slide-left y:60 delay:0.5 duration:1">
```
- zoom-in
```
<H1 animate="zoom-in delay:1 duration:2">
```
- zoom-out
```
<p animate="zoom-out delay:1 scale:2 duration:2">
```
- magnet
```
<h1 animate="magnet"
```
- heartbeat
```
<h1 animate="heartbeat"
```
- typewriter
```
<h1 animate="typewriter direction:left"
```

## ScrollTrigger Integration

Curvia internally uses GSAP ScrollTrigger to detect when elements enter the viewport.
- By default, animations play when the element enters 90% of the viewport.
- Animations can be replayed by setting once:false (React version supports this fully).


## 🧾 License

Curvia is released under the MIT License. Feel free to use it in both personal and commercial projects.


## 👤 Author

Made by **Prateek Singh**  
  
**Connect with Me**
- [Instagram](https://www.instagram.com/_._raghuvanshi_._)
- [LinkedIn](https://www.linkedin.com/in/prateeksingh9861)
- [GitHub](https://github.com/PrateekSingh-9861)

