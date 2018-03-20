---
title: SQL Modifiers
date: '2018-03-19T19:00:56-05:00'
module: sql
order: 3
---

* [Operators](#operators)
* [WHERE](#where)
* [AND, OR, NOT](#and-or-not)
* [ORDER BY](#order-by)
* [IS NULL, IS NOT NULL](#is-null-is-not-null)
* [SELECT DISTINCT](#select-distinct)
* [LIKE](#like)
* [COUNT, SUM, AVG](#count-sum-avg)
* [Aliases](#aliases)

ANSI SQL provides additional statement keywords that can be used in tandem with the four CRUD statements to modify the results. We've included several below, but there are a ton of other modifiers available in ANSI SQL. Check it out on [W3 Schools](https://www.w3schools.com/sql/default.asp).

## Operators

In SQL, there are several operators that are used:

| Operator     | Definition                                                 |
| ------------ | ---------------------------------------------------------- |
| `=`          | Equal                                                      |
| `<>` or `!=` | Not equal                                                  |
| `>`          | Greater than                                               |
| `<`          | Less than                                                  |
| `>=`         | Greater than or equal                                      |
| `<=`         | Less than or equal                                         |
| `%`          | Wildcard that represents zero, one, or multiple characters |
| `_` or `?`   | Wildcard that represents a single character                |

**Note:** Choose the operator wisely based on the SQL implementation you're using.

## WHERE

In SQL statements, the `WHERE` clause allows you to filter your data based on a certain conditional. The `SELECT`, `UPDATE`, and `DELETE` statements support adding the `WHERE` clause:

```sql
-- Select the Name and Address columns from the phone_book table where the id equals 42
SELECT Name, Address FROM phone_book WHERE id = 42;
```

## AND, OR, NOT

In SQL statements, you can chain conditionals together for the `WHERE` clause, allowing for logical operations with `AND`, `OR`, and `NOT`.

The `AND` operator displays a record if all the conditionals separated by `AND` are `TRUE`:

```sql
SELECT * FROM Customers WHERE Country='USA' AND City='Birmingham';
```

The `OR` operator displays a record if any of the conditionals separated by `OR` are `TRUE`:

```sql
SELECT * FROM Customers WHERE City='Birmingham' OR City='Atlanta';
```

The `NOT` operator displays a record if the condition(s) is `NOT TRUE`:

```sql
SELECT * FROM Customers WHERE NOT City='Atlanta';
```

You can also combine `AND`, `OR`, and `NOT` operators. Similar to mathematics, parens can be used to form complex expressions:

```sql
-- And Or combination
SELECT * FROM Customers
WHERE Country='USA' AND (City='Birmingham' OR City='Atlanta');

-- And Not combination
SELECT * FROM Customers
WHERE NOT Country='Germany' AND NOT Country='USA';
```

## ORDER BY

In SQL statements, the `ORDER BY` keyword can be used to sort the records returned by your `SELECT` statement. The `ORDER BY` follows this syntax:

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;

-- Select all from the Customers table
-- sorted ascending (the default sort) by the Country
SELECT * FROM Customers ORDER BY Country;

-- Select all from the Customers table
-- sorted ascending by the Country column and
-- descending by the CustomerName column
SELECT * FROM Customers ORDER BY Country ASC, CustomerName DESC;
```

## IS NULL, IS NOT NULL

In SQL statements, the keyword `NULL` represents the absence of value:

```sql
-- Select where Address is absent of value
SELECT LastName, FirstName FROM Persons
WHERE Address IS NULL;

-- Select where Address isn't absent of value
SELECT LastName, FirstName, Address FROM Persons
WHERE Address IS NOT NULL;
```

## SELECT DISTINCT

The `SELECT DISTINCT` statement will only return records with different values in the provided columns:

```sql
SELECT DISTINCT column1, column2, ...
FROM table_name;

-- Select the records that have a different Country value from the Customers table
SELECT DISTINCT Country FROM Customers;
```

## LIKE

The `LIKE` statement is used in a WHERE clause to search for a specified pattern in a column:

```sql
SELECT column1, column2, ...
FROM table_name
WHERE columnN LIKE pattern;

-- Select the records where the customer's name starts with "a"
SELECT * FROM Customers WHERE CustomerName LIKE 'a%';
```

Here are some examples showing different LIKE operators with '%' and '_' wildcards:

| LIKE Operator                     | Definition                                                              |
| --------------------------------- | ----------------------------------------------------------------------- |
| `WHERE CustomerName LIKE 'a%'`    | Any values that starts with "a"                                         |
| `WHERE CustomerName LIKE '%a'`    | Any values that ends with "a"                                           |
| `WHERE CustomerName LIKE '%a%'`   | Any values that have "a" in any position                                |
| `WHERE CustomerName LIKE '_a%'`   | Any values that have "a" in the second position                         |
| `WHERE CustomerName LIKE 'a_%_%'` | Any values that starts with "a" and are at least 3 characters in length |
| `WHERE ContactName LIKE 'a%e'`    | Any values that starts with "a" and ends with "e"                       |

## COUNT, SUM, AVG

The `COUNT` operator will return the count of records based on the query:

```sql
SELECT COUNT(column_name)
FROM table_name
WHERE condition;

-- Count all the products
SELECT COUNT(ProductID) FROM Products;
```

The `SUM` operator will return the sum of values in records based on the query:

```sql
SELECT SUM(column_name)
FROM table_name
WHERE condition;

-- Sum all the quantities available in order details
SELECT SUM(Quantity) FROM OrderDetails;
```

The `AVG` operator will return the average of values in records based on the query:

```sql
SELECT AVG(column_name)
FROM table_name
WHERE condition;

-- Average all the prices available in products
SELECT AVG(Price) FROM Products;
```

## Aliases

In SQL, you can use an alias to give your table or column a temporary name. An alias only exists for the duration of the query.

Column aliases are often used to make columns more clear, concise, and readable in the return:

```sql
-- Column alias syntax
SELECT column_name AS alias_name
FROM table_name;

SELECT CustomerID as ID, CustomerName AS Customer
FROM Customers;
```

Table aliases are often used to make queries more clear, concise, and readable in the statement:

```sql
-- Table alias syntax
SELECT column_name(s)
FROM table_name AS alias_name;

SELECT o.OrderID, o.OrderDate, c.CustomerName
FROM Customers AS c, Orders AS o
WHERE c.CustomerName = "Around the Horn" AND c.CustomerID = o.CustomerID;
```

**Previous:** [Statements](statements.markdown) |
**Next:** [Data](data.markdown)
