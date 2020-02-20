---
title: Classes
date: '2018-03-19T19:00:56-05:00'
module: csharp
order: 7
---

## Fundamentals

A class is a construct that enables the creation of custom types by grouping together variables of other types, as well as custom methods and/or events. A class is like a blueprint or a cookie cutter. It defines the data and behavior of a type.

Like variables and methods, classes have a few basic parts:

* Modifiers: an optional list of keywords that give certain qualities to the class
* Keyword `class`: required to define a class
* Name: a descriptive class name
* Scope: the scope of the class definition
  * Variables: class or instance variables associated with the class
  * Methods: class or instance methods associated with the class

Here, we have defined a class called `Animal`:

```csharp
public class Animal
{
    // We'll define a variable of type string called `Name`
    public string Name { get; set; }

    // We'll define a method called `SayName`
    public void SayName()
    {
        // Use `this` to reference the current Animal instance
        Console.WriteLine("My name is " + this.Name);

        // The code can also infer that you're accessing `this`
        Console.WriteLine("My name is " + Name);
    }
}
```

## Instances

If a class is like a cookie cutter, an "instance" of that class is like an actual cut-out cookie. The below code creates a new instance of the `Animal` class:

```csharp
var animal = new Animal();
animal.Name = "Fido"; // animal.name equals "Fido"
var name = animal.Name; // `name` equals "Fido"

// Calling the SayName method will execute the SayName code
animal.SayName(); // Writes "My name is Fido" to the console
```

## Class Methods and Variables

Within the class scope, a class can contain variables and methods that have the `static` modifier, meaning that the variable or method is associated with the class itself, not an instance of the class.

If we think of a class as a cookie cutter, and an instance of the class as a cookie, a `static` method is a method that belongs to the cookie cutter, not the cookie.

```csharp
public class Animal
{
    public static int NumberOfAnimals { get; set; }
    public string Name { get; set; }

    public static void ListAllAnimals()
    {
        Console.WriteLine(NumberOfAnimals + " animals");
    }

    public void SayName()
    {
        Console.WriteLine("My name is " + Name);
    }
}
```

Later in code, you can call your class variables and methods on the `Animal` class:

```csharp
var animalCount = Animal.NumberOfAnimals;
Animal.ListAllAnimals();
```

## Inheritance

A class can also be a subclass of another class and "inherit" some of the parent class's functionality. In Object Oriented Programming (OOP), we call this Inheritance. A class can only inherit from one parent class:

```csharp
public class Animal
{
    public string Name { get; set; }

    public void SayName()
    {
        Console.WriteLine("My name is " + Name);
    }
}

// The Dog class is a child class of the parent Animal class
public class Dog : Animal
{

}
```

This instance of the Dog class has all the functionality of an instance of the Animal class:

```csharp
var dog = new Dog();
dog.Name = "Fido";
dog.SayName();
```

### Inheritance Exercise

* [Codewars: Subclasses](https://www.codewars.com/kata/basic-subclasses-adam-and-eve/train/csharp)

## Object Initializer

An object initializer allows you to assign property values when you create the instance of a class. This makes code cleaner and allows us to ensure that every value is properly set at the time of initialization:

```csharp
public class Animal
{
    public string Name { get; set; }

    public void SayName()
    {
        Console.WriteLine("My name is " + Name);
    }
}
```

```csharp
var animal = new Animal { Name = "Fido" }; // created with Name equal to "Fido"
animal.SayName(); // Writes "My name is Fido" to the console
```

## Constructor

A constructor allows you to assign property values when you create the instance of a class. This makes code cleaner and allows us to ensure that every value is properly set at the time of initialization.

In addition, you can also execute other necessary "setup" code at the time of constructing an instance:

```csharp
public class Animal
{
    public string Name { get; set; }

    // Default, standard constructor
    public Animal() : this("Fido")
    {
        // Handle some default execution
        // this("Fido") calls the constructor below
    }

    // Specific constructor, called above as well
    public Animal(string name)
    {
        Name = name;
    }
}
```

Later in your code:

```csharp
var aAnimal = new Animal(); // created with Name equal to "Fido"
var bAnimal = new Animal("Fluffy"); // created with Name equal to "Fluffy"
```
