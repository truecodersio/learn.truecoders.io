---
title: CSS
date: '2018-04-10T19:00:56-05:00'
module: web
order: 2
---

Cascading Style Sheets: Making Your Web Pages Look Beautiful

## Introduction

CSS stands for Cascading Style Sheets:

* CSS describes how HTML elements are to be displayed on screen, paper, or in other media.
* CSS saves a lot of work. It can control the layout of multiple web pages all at once.
* External stylesheets are stored in CSS files.

## Syntax

A CSS rule-set consists of a selector and a declaration block:

* The selector points to the HTML element you want to style.
* The declaration block contains one or more declarations separated by semicolons.
* Each declaration includes a CSS property name and a value, separated by a colon.
* A CSS declaration always ends with a semicolon, and declaration blocks are surrounded by curly braces.

In the following example all `<p>` elements will be center-aligned, with a red text color:

```css
p {
    color: red;
    text-align: center;
}
```

## Selectors

CSS selectors are used to "find" (or select) HTML elements based on their element name, id, class, attribute, and more. Here are just a few ways to select HTML elements:

### Element Selector

```css
p {
    color: red;
    text-align: center;
}
```

### Id Selector

```css
#id-name {
    color: red;
    text-align: center;
}
```

### Class Selector

```css
.class-name {
    color: red;
    text-align: center;
}
```

### Class Selector for Element

```css
p.class-name {
    color: red;
    text-align: center;
}
```
