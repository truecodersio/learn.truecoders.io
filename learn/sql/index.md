---
title: Introduction
date: '2018-03-19T19:00:56-05:00'
module: sql
order: 0
---

## Documentation and Resources

As we go into details of any programming tool, you'll find that documentation is your best friend for learning and improving your tool skill set:

* [W3 Schools](https://www.w3schools.com/sql/default.asp)
* [Wikipedia](https://en.wikipedia.org/wiki/SQL)
* [SQL Joins](https://www.codeproject.com/Articles/33052/Visual-Representation-of-SQL-Joins)
* [SQL Interview Questions](https://www.technojobs.co.uk/info/interview-tips/sql-interview-answers.phtml)

## Introduction

SQL, pronounced "Sequel", stands for Structured Query Languange. From [Wikipedia's](https://en.wikipedia.org/wiki/SQL) article on SQL:

> SQL was initially developed at IBM by Donald D. Chamberlin and Raymond F. Boyce in the early 1970s. This version, initially called SEQUEL (Structured English Query Language), was designed to manipulate and retrieve data stored in IBM's original quasi-relational database management system, System R, which a group at IBM San Jose Research Laboratory had developed during the 1970s. The acronym SEQUEL was later changed to SQL because "SEQUEL" was a trademark of the UK-based Hawker Siddeley aircraft company.
>
> In the late 1970s, Relational Software, Inc. (now Oracle Corporation) saw the potential of the concepts described by Codd, Chamberlin, and Boyce, and developed their own SQL-based RDBMS with aspirations of selling it to the U.S. Navy, Central Intelligence Agency, and other U.S. government agencies. In June 1979, Relational Software, Inc. introduced the first commercially available implementation of SQL, Oracle V2 (Version2) for VAX computers.

## SQL Implementations

There are a many different flavors of SQL, such as:

* MySQL
* Microsoft SQL
* PostgreSQL
* SQLite

## ANSI SQL

SQL is **NOT** guaranteed to be portable between systems, but many SQL flavors comply with the ANSI standard. To be compliant with the ANSI standard, a flavor of SQL must support at least the major commands, like `SELECT`, `UPDATE`, `DELETE`, and `INSERT` in a similar manner.

Since the introduction of ANSI SQL, the standard has been revised to include a larger set of features. This is the skillset we'll be focusing on so that you'll have the most portable base of knowledge across all platforms and be able to pick up new ones with ease.

## Source Code Comments

A comment is a programmer-readable explanation or annotation in the source code of a computer program. Anything within comments will be ignored by a compiler and are just there to help us programmers understand the code better.

You'll use comments for documentation and explanation of your code. Anytime you see comments, just know it's there for clarity.

### Line Comment

Also known as single-line comment, line comment syntax is prepended with `--`

```sql
-- Example line comment
```

### Block Comment

Also known as multi-line comment, block comment syntax is surrounded with `/* */`

```sql
/* Example
block
comment
*/
```

## Source Code Line Termination

Unless otherwise specified, each line of source code, called a statement, must be terminated with a `;`:

```sql
-- Here is a select statement
SELECT * FROM Customers;
```

## Case Sensitivity

Unless otherwise specified, SQL **IS NOT** case sensitive. For example, `select` is synonymous with `SELECT`.

However, SQL naming convention usually has keywords in ALL CAPS. We will do the same.
