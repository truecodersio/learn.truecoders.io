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

In OOP, inheritance is the concept that a child class or type can inherit functionality from its parent. You can think of inheritance as a parent/child relationship.

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

// Later in code
var person = new Person { Name = "Cody" };
person.SayName(); // "My name is: Cody"
```

You also want to add a class called Employee:

```csharp
public class Employee
{
    public string Name { get; set; }
    public int Id { get; set; }

    public void SayName()
    {
        Console.WriteLine("My name is: " + this.Name + " and my Id is: " + this.Id);
    }
}

// Later in code
var employee = new Employee { Name = "Cody", Id = 432 };
employee.SayName(); // "My name is: Cody and my Id is: 432"
```

We can see that we're repeating ourselves unnecessarily. Let's refactor our Employee class:

```csharp
public class Employee : Person
{
    public int Id { get; set; }

    public override void SayName()
    {
        Console.WriteLine("My name is: " + this.Name + " and my Id is: " + this.Id);
    }
}

// Later in code
var employee = new Employee { Name = "Cody", Id = 432 };
employee.SayName(); // "My name is: Cody and my Id is: 432"
```

We automatically get the `Name` property from our `Person` parent class, and we can override the `SayName` functionality to provide the data that we want for our employee.

## Polymorphism

In OOP, polymorphism is the concept that two or more different classes/types with differing implementations can be referenced or called in a similar fashion.

We already saw one example of polymorphism in the [inheritance](#inheritance) section, with our `Employee` overriding the implementation of the `SayName` method. Still the same method signature, called with the same method name, yet different implementations. Let's break down some other examples of polymorphism:

### Generics

Let's say you create a `Node` class for creating Binary Trees:

```csharp
public class Node
{
    public int Value { get; set; }
    public Node Left { get; set; }
    public Node Right { get; set; }
}

// Later in code
var left = new Node { Value = 2 };
var right = new Node { Value = 3 };
var head = new Node { Value = 1, Left = left, Right = right };
```

This Node can store a number value, a left Node, and a right Node. But, what if you want to expand the Node to store strings? We can expand our Node type to support Generics:

```csharp
public class Node<T>
{
    public T Value { get; set; }
    public Node Left { get; set; }
    public Node Right { get; set; }
}

// Later in code
var left1 = new Node<int> { Value = 2 };
var right1 = new Node<int> { Value = 3 };
var head1 = new Node<int> { Value = 1, Left = left1, Right = right1 };

var left2 = new Node<string> { Value = "Is" };
var right2 = new Node<string> { Value = "Up?" };
var head2 = new Node<string> { Value = "What", Left = left2, Right = right2 };
```

We can now use the same Node type for storing a binary tree of numbers or strings.

## Encapsulation

In OOP, encapsulation is the concept that a class or type will only expose the functionality necessary to accomplish a given goal, hiding or encapsulating any remaining functionality.

A good real world example of encapsulation is a car. A car may have a great deal of moving parts, such as the engine, brakes, and the transmission, but all of that is hidden under the hood. What is exposed to the driver is the bare essentials for driving, such as a steering wheel, gas pedal, and brake pedal.

Let's say you had a class called BankAccount:

```csharp
public class BankAccount
{
    private decimal Balance { get; set; } = 500.0m;
}

// Later in code
var account = new BankAccount();
var balance = account.Balance();

Console.WriteLine($"My account balance is: {balance}");

account.balance = 1000000.0m; // This will successfully change the balance
```

The problem with this implementation is that our Bank Account's balance can be changed by any part of our application. Our balance probably shouldn't be able to be changed in code unless that change is reflected in our server. Let's refactor:

```csharp
public class BankAccount
{
    private decimal balance = 500.0m;

    public decimal CheckBalance()
    {
        return balance;
    }
}

// Later in code
var account = new BankAccount();
var balance = account.CheckBalance();

Console.WriteLine($"My account balance is: {balance}");

account.balance = 1000000.0m; // This will fail
```

Now, we've exposed the functionality to check the Balance, yet restricted the ability to change the balance directly.

## Abstraction

In OOP, abstraction is the concept that software should be built in abstract sections that can be combined together into a cohesive whole, as opposed to building code where everything is tightly coupled and difficult to break apart.

Think of a swiss army knife vs. a chisel

* A swiss army knife can be used for a bunch of tasks, but its ability to perform is less than optimal for each one of those tasks.
* A chisel does one thing; and it does it damn well.

Build chisels; not swiss army knifes.

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

* Don't Repeat Yourself (DRY): Writing the exact same code multiple times doesn't make sense. Use OOP to help you avoid repetition.
* Clear Concise Readable (CCR): Your code should be extremely clear, should avoid unnecessary verbosity, and maintain good readablility.
* Keep it Simple, Stupid (KISS): Pretty self explainitory; don't add unnecessary complexity.
* Single Responsibility Principle (SRP): Each part of your software should do one thing, and do it really well.
