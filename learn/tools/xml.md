---
title: XML
date: '2018-03-19T19:00:56-05:00'
module: tools
order: 6
---

eXtensible Markup Language: Machine and Human Readable Data Storage

## Introduction

XML stands for eXtensible Markup Language:

* XML is a markup language much like HTML.
* XML was designed to store and transport data.
* XML was designed to be self-descriptive.

## Syntax

Here's how a basic XML document looks:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>
```

## XML and HTML

You can see that both HTML and XML look similar, and for good reason:

* They're both markup languages ("ML").
* They're both subsets of SGML ("Standard Generalized Markup Language").

However, they have some key differences:

* XML was designed to carry data - with focus on what data is.
* HTML was designed to display data - with focus on how data looks.
* XML tags are not predefined like HTML tags are.

## Prolog

This line is called the XML prolog:

```xml
<?xml version="1.0" encoding="UTF-8"?>
```

The XML prolog is optional. If it exists, it must come first in the document. You can specify general document values, like version and encoding, within the prolog.

## Document Root Element

XML documents **must contain one root element** that is the parent of all other elements. In this example, `<note>` is the root element:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>
```

## Closing Tag

In HTML, some elements might work well, even with a missing closing tag. In XML, it is illegal to omit the closing tag. All elements **must have a closing tag**.

```xml
<!-- The </testing> tag is missing, so this would fail -->
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <testing>What is going on?
</note>

<!-- This is proper syntax -->
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <testing>What is going on?</testing>
</note>
```

**Note:** The XML prolog does not have a closing tag. This is not an error. The prolog is not a part of the XML document.

## Case Sensitive

XML tags are case sensitive. The tag `<Letter>` is different from the tag `<letter>`. Opening and closing tags must be written with the same case:

```xml
<!-- This is incorrect -->
<Message>This is incorrect</message>

<!-- This is correct -->
<message>This is correct</message>
```
