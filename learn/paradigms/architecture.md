---
title: Architecture
date: '2018-03-19T19:00:56-05:00'
module: paradigms
order: 2
---

## Documentation and Resources

As we go into details of any programming resource, you'll find that documentation is your best friend for learning and improving your tool skill set:

* [Microsoft: ASP.NET MVC Overview](https://msdn.microsoft.com/en-us/library/dd381412%28v=vs.108%29.aspx?f=255&MSPPError=-2147217396)
* [Microsoft: Understanding MVC](https://docs.microsoft.com/en-us/aspnet/mvc/overview/older-versions-1/overview/understanding-models-views-and-controllers-cs)
* [Microsoft: Intro to ASP.NET MVC](https://mva.microsoft.com/en-US/training-courses/introduction-to-asp-net-mvc-8322?l=nKZwZ8Zy_3504984382)
* [Tutorials Teacher: ASP.NET MVC](http://www.tutorialsteacher.com/mvc/create-first-asp.net-mvc-application)

## Introduction

We're going to dive into how to build from the ground up with best practices in mind, and it starts with architecture.

Think of software architecture as the foundation for your project's structure and organization. Once chosen and implemented, it can greatly increase your productivity, or slow you down, and it's very costly to change it once implemented. So, choose wisely.

You should design your architecture with a few things in mind:

* Your project/app WILL change. Build your architecture to be flexible, easily supporting change.
* Your architecture should make your app's purpose and intent apparent quickly.
* Your architecture should make abstraction and testing a normal, simple process.
* Your architecture should always support best practices.

## Model View Controller

Model View Controller (MVC) is a very well established architecture that fulfills all of the goals pf good architecture. MVC is supported/encouraged within various other platforms and languages, including ASP.NET MVC, so it will follow you wherever you go.

![MVC](../images/mvc.png "MVC")

MVC works by defining three different abstractions (Model, View, and Controller), allowing good separation of concern:

### Model

Model objects are the parts of the application that implement the logic for the application's data domain. Often, model objects retrieve and store model state in a database. For example, a Product object might retrieve information from a database, operate on it, and then write updated information back to a Products table in a SQL Server database.

In small applications, the model is often a conceptual separation instead of a physical one. For example, if the application only reads a dataset and sends it to the view, the application does not have a physical model layer and associated classes. In that case, the dataset takes on the role of a model object.

### View

Views are the components that display the application's user interface (UI). Typically, this UI is created from the model data. An example would be an edit view of a Products table that displays text boxes, drop-down lists, and checkboxes based on the current state of a Product object.

### Controller

Controllers are the components that handle user interaction, work with the model, and ultimately select a view to render that displays UI. In an MVC application, the view only displays information; the controller handles and responds to user input and interaction. For example, the controller handles query-string values, and passes these values to the model, which in turn might use these values to query the database.
