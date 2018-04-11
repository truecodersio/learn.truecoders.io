---
title: HTML
date: '2018-04-10T19:00:56-05:00'
module: web
order: 1
---

Hypertext Markup Language: The Standard for Creating Web Pages

## Introduction

HTML is the standard markup language for creating Web pages:

* HTML stands for Hypertext Markup Language.
* HTML describes the structure of Web pages using markup.
* HTML elements are the building blocks of HTML pages.
* HTML elements are represented by tags.
* HTML tags label pieces of content such as "heading", "paragraph", "table", and so on.
* Browsers do not display the HTML tags, but use them to render the content of the page.

## Documents

All HTML documents must start with a document type declaration: `<!DOCTYPE html>`. The HTML document itself begins with `<html>` and ends with `</html>`. The visible part of the HTML document is between `<body>` and `</body>`:

```html
<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
```

## Headings

HTML headings are defined with the `<h1>` to `<h6>` tags. `<h1>` defines the most important heading. `<h6>` defines the least important heading:

```html
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
```

## Paragraphs

HTML paragraphs are defined with the `<p>` tag:

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

## Links

HTML links are defined with the `<a>` tag. The link's destination is specified in the `href` attribute. Attributes are used to provide additional information about HTML elements:

```html
<a href="https://truecoders.io">TrueCoders Website</a>
```

## Images

HTML images are defined with the `<img>` tag. The source file (`src`), alternative text (`alt`), width, and height are provided as attributes:

```html
<img src="https://example.com/my-image.png">
```
