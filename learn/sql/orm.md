---
title: Object Relational Mapper
date: '2018-03-19T19:00:56-05:00'
module: sql
order: 8
---

## Introduction

Programmers would prefer to exercise their creative muscles rather than type and retype data access and parameterized queries over and over. Enter Object Relational Mappers (ORM).

ORM's are the plumbers of the programing world. They help get data out of and back into databases from our data models. Additionally, ORM's like Dapper will handle parameterizing your SQL statements for you.

## Dapper

[Dapper](https://github.com/StackExchange/Dapper) is a .NET compatible, NuGet library ORM that you can add into your project that will extend your `IDbConnection` interface.

Dapper has no DB specific implementation details; it works across SQLite, Oracle, MySQL, PostgreSQL, and SQL Server, to name a few.

Dapper adds a variety of things to the `IDbConnection` interface, but mostly you'll interact with `Query` and `Execute`:

### Query

Query is designed for any database reads, like `SELECT`.

Query returns an `IEnumerable<T>`, so a select statement will return one `T` for each record in the database.

### Execute

Execute is designed for any database writes, like `INSERT`, `UPDATE`, and `DELETE`.

Execute only returns the number of records affected, so it can be ignored if you aren't interested in the affected records.
