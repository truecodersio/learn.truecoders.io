---
title: Object Oriented Programming
date: '2018-03-19T19:00:56-05:00'
module: paradigms
order: 1
---

## Introduction

Object Oriented Programming (OOP) is a programming paradigm based on the concept of objects, which may contain data, known as variables, properties, or fields, and possess the ability to call code and/or perform procedures, known as methods or functions.

OOP is a big subject, but the majority of its concepts can be boiled down to four main priciples:

* [Inheritance](#inheritance)
* [Polymorphism](#polymorphism)
* [Encapsulation](#encapsulation)
* [Abstraction](#abstraction)

**Note:** We'll be using C# as our language of choice for examples of OOP in action.

## Inheritance

In OOP, inheritance is the concept that a child class or type can inherit functionality from its parent.

Let's say you had a class called person:

```csharp
public class Person
{
    public string Name { get; set; }

    public virtual void SayName()
    {
        Console.WriteLine("My name is: " + this.Name);
    }
}
```

You also want to add a class called Employee:

```csharp
public class Employee
{
    public string Name { get; set; }
    public int Id { get; set; }

    public void SayName()
    {
        Console.WriteLine("My name is: " + this.Name + "and my Id is:" + this.Id);
    }
}
```

We can see that we're repeating ourselves unnecessarily. Let's refactor our Employee class:

```csharp
public class Employee : Person
{
    public int Id { get; set; }

    public override void SayName()
    {
        Console.WriteLine("My name is: " + this.Name + "and my Id is:" + this.Id);
    }
}
```

We automatically get the `Name` property from our `Person` parent class, and we can override the `SayName` functionality to provide the data that we want for our employee.

## Look for Nouns and Verbs

OOP is a big idea and it can be difficult at times to break down the concepts when building your software. Here are a few tips to help you out:

When you're examing the problem that you're trying to solve, break the problem into a statement or paragraph and look for nouns and verbs. Then, use the nouns to create your classes and verbs to define your methods/functions:

> As a user, I need to be able to log in, view my profile, and log out.

Nouns:

* User

Verbs:

* Log In
* Sign Out

With this in mind, we can start building our classes and methods:

```csharp
// Basic implementation
public class User
{
    public bool LogIn()
    {
        // Perform Log In Action Here
        // return `true` for successful log in
        // else return `false`
    }

    public bool LogOut()
    {
        // Perform Log Out Action Here
        // return `true` for successful log out
        // else return `false`
    }
}
```

## OOP Benefits

OOP helps you conform to some other key principles of programming:

* Don't Repeat Yourself (DRY): Writing the exact same code multiple times doesn't make sense. Use OOP to help you avoid repetition
* Clear Concise Readable (CCR): Your code should be extremely clear, should avoid unnecessary verbosity, and maintain good readablility
* Keep it Simple, Stupid (KISS): Pretty self explainitory; don't add unnecessary complexity.
