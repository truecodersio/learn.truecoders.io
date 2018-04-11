---
title: XHTML
date: '2018-04-10T19:00:56-05:00'
module: web
order: 4
---

eXtensible Hypertext Markup Language: HTML Written as XML

## Introduction

XHTML stands for eXtensible Hypertext Markup Language:

* XHTML is almost identical to HTML.
* XHTML is stricter than HTML.
* XHTML is HTML defined as an XML application.
* XHTML is supported by all major browsers.

## Poor HTML

Why using XHTML?

Many pages on the internet contain "bad" HTML. This HTML code works fine in most browsers (even if it does not follow the HTML rules):

```html
<html>
<head>
  <title>This is bad HTML</title>

<body>
  <h1>Bad HTML
</body>
```

## Proper XHTML

XHTML has a few document structure differences from HTML:

* XHTML DOCTYPE is mandatory.
* The xmlns attribute in `<html>` is mandatory.
* `<html>`, `<head>`, `<title>`, and `<body>` are mandatory.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>Title of document</title>
</head>

<body>
  some content
</body>

</html>
```

## Other Differences

XHTML elements:

* Must be properly nested.
* Must always be closed.
* Must be in lowercase.

XHTML documents:

* Must have one root element.

XHTML attributes:

* Must have lowercase names
* Must have quoted values
* Must not be minimized
