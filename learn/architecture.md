---
title: Architecture
module: architecture
order: 0
---

* [Documentation and Resources](#documentation-and-resources)
* [Introduction](#introduction)
* [Goals](#goals)
* [Material](#material)

## Documentation and Resources

As we go into details of any programming tool, you'll find that documentation is your best friend for learning and improving your tool skill set:

* [Microsoft: ASP.NET MVC Overview](https://msdn.microsoft.com/en-us/library/dd381412%28v=vs.108%29.aspx?f=255&MSPPError=-2147217396)
* [Microsoft: Understanding MVC](https://docs.microsoft.com/en-us/aspnet/mvc/overview/older-versions-1/overview/understanding-models-views-and-controllers-cs)
* [Microsoft: Intro to ASP.NET MVC](https://mva.microsoft.com/en-US/training-courses/introduction-to-asp-net-mvc-8322?l=nKZwZ8Zy_3504984382)
* [Tutorials Teacher: ASP.NET MVC](http://www.tutorialsteacher.com/mvc/create-first-asp.net-mvc-application)

## Introduction

We're going to dive into how to build from the ground up with best practices in mind, and it starts with architecture.

Think of software architecture as the foundation for your project's structure and organization. Once chosen and implemented, it can greatly increase your productivity, or slow you down, and it's very costly to change it once implemented. So, choose wisely.

## Goals

You should design your architecture with a few things in mind:

* Your project/app WILL change. Build your architecture to be flexible, easily supporting change.
* Your architecture should make your app's purpose and intent apparent quickly.
* Your architecture should make abstraction and testing a normal, simple process.
* Your architecture should always support best practices.

## Material

* [Model View Controller](mvc.markdown)
* [Inversion of Control](ioc.markdown)
