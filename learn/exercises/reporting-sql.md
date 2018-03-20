---
title: Microsoft SQL Reporting
date: '2018-03-19T19:00:56-05:00'
module: exercises
order: 3
---

* [Introduction](#introduction)
* [Table Creation](#table-creation)
* [Column Creation](#column-creation)
* [Challenge](#challenge)
  * [Schema Creation](#schema-creation)

## Introduction

Ensure that you have [SSMS Setup](system.markdown), then follow the steps below.

## Table Creation

There is SQL syntax for Creating Tables, but it is NOT ANSI SQL. The syntax varies across implementations. So we'll teach the GUI, and talk about strategies for managing it:

* Expand AdventureWorks
* Expand Tables
* Right click the Table folder and create a new Table
* Name the table whatever you want

## Column Creation

Now that we've got our table, let's setup our schema:

* Make your first column `Id`
* Mark it a `Primary Key` by right clicking to the left of `Id`. You should now see a key icon beside it.
* Make sure the `Allows Nulls` checkbox is left unchecked

While the `Id` column is selected, go to the bottom of the screen and find the "Identity Specification" option and update:

* Is Identity: `Yes`
* Identity Increment: `1`

## Challenge

### Schema Creation

Let's make a table and insert some data.

* Since we're all using the same database for now, claim your table name before we get started
* Make sure you put a primary key on there
* Make a table that holds some data that you care about. If you're into cars, use that! Or some other hobby. Experiment with different data types.
