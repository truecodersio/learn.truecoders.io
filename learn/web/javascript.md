---
title: JavaScript
date: '2018-04-10T19:00:56-05:00'
module: web
order: 3
---

JavaScript: Change Content, Update Style, and Add Power to Your Web Pages

## Introduction

There are some things HTML and CSS can do. For everything else, there's JavaScript. JavaScript brings programmatic power to your web pages.

**Note:** JavaScript is a mature, full-featured language that is impossible to cover in detail within this page. This is designed to be a short introduction to JavaScript in the context of basic web development.

## Change HTML Content

One of many JavaScript HTML functions is `getElementById()`. This example uses the function to "find" an HTML element (with `id="demo"`) and changes the element content (`innerHTML`) to `"Hello JavaScript"`:

```js
document.getElementById("demo").innerHTML = "Hello JavaScript";
```

JavaScript accepts both double and single quotes for strings:

```js
document.getElementById('demo').innerHTML = 'Hello JavaScript';
```

## Change HTML Attributes and Styles

Changing the style or attributes of an HTML element is very similar in syntax:

```js
document.getElementById('demo').style.fontSize = '25px';
document.getElementById('myImage').src = 'pic_bulboff.gif';
```

## Show or Hide HTML Elements

Hiding and showing HTML elements can be done by changing the display style:

```js
document.getElementById("demo").style.display = "none";
document.getElementById("demo").style.display = "block";
```
