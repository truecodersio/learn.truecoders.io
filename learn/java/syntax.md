---
title: Java Syntax
date: '2018-03-19T19:00:56-05:00'
module: java
order: 9
---

## Introduction

We're going to go over some syntax that are used for a number of reasons:

* Best Practices: this is syntax that is not required, but is considered the best thing to do. Using type inference with the `var` keyword is considered best practice.
* Syntax Sugar: this is syntax that is not required and not necessarily best practice, but merely makes coding more convenient or concise.
* CCR: an acronym that stands for Clear, Concise, Readable:
  * Clear: Code should have clear purpose and meaning
  * Concise: Code should not be unnecessarily verbose
  * Readable: Code should be easy to read and understand

## Inline If/Ternary Operator

Inline If is syntax sugar. Remember the almighty if? Well it was only a matter of time before someone thought that 2 characters was too much to type.

An inline if (also called a ternary operator) has a few parts, following this format:

`(conditional) ? true-scope : false-scope;`

Option 1: Normal if statement

```java
int i = 1;
String positiveMessage = "You're not positive. Hmm...";

if (i > 0)
{
    positiveMessage = "You are positive!";
}
```

Option 2: Inline If/Ternary Operator

```java
int i = 1;
String positiveMessage = (i > 0) ? "You are positive!" : "You're not positive. Hmm...";
```

Option 2 is clear and readable, like Option 1, yet Option 2 is far more concise.

**Previous:** [Interfaces](interfaces.markdown)
