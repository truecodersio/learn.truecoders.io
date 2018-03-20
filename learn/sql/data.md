---
title: SQL Data
date: '2018-03-19T19:00:56-05:00'
module: sql
order: 4
---

## Statement Data

Data is often included in [SQL Statements](statements.markdown) like `SELECT` and almost always included in `INSERT`, `UPDATE`, and `DELETE` statements. Here's the data you'll use:

### String

A string is a sequence of zero or more unicode characters. In SQL statements, a String is surrounded by single quotes, referred to as the string delimiter:

```sql
SELECT * FROM Customers WHERE Country = 'USA';
```

### Numeric

In SQL statements, a numeric value is used without modification:

```sql
SELECT * FROM Customers WHERE Id = 42;
```

### Null

In SQL statements, the keyword `NULL` represents the absence of value:

```sql
-- Select where Address is null
SELECT LastName, FirstName FROM Persons
WHERE Address IS NULL;

-- Select where Address isn't null
SELECT LastName, FirstName, Address FROM Persons
WHERE Address IS NOT NULL;
```

**Note:** `NULL` is not the same as `0` or an empty string: `''`

* `0` and `''` are actual values, stored in your database as `0` or `''`
* `NULL` represents the absence of value: nothing is stored in your database

## Table Data

In ANSI SQL, data tends to resolve to 1 of 4 data types:

* Primary Keys
* Text Types
* Numeric Types
* Date Types

### Primary Keys

While not technically required for a table, best practice demands a primary key. Your best two options are:

* `INT` or `LONGINT`: an integer that increments for you as you insert your data
* `GUID` (Globaly Unique IDentifier): a generated value that is extremely mathematically likely to be unique in the universe

### Microsoft SQL Data Types

| Type                               | Description                                                                                         |
| ---------------------------------- | --------------------------------------------------------------------------------------------------- |
| `int`                              | Used for Primary Keys, Foreign Keys, and Whole number values                                        |
| `uniqueidentifier`                 | GUID (Globaly Unique IDentifier), used as Primary and Foreign Keys                                  |
| `varchar(255)` and `nvarchar(255)` | Used for strings. Length is indicated.                                                              |
| `decimal(t,d)`                     | Used for decimal values. `t` is total digits. `d` is total digits to the right of the decimal point |
| `text` and `ntext`                 | Used for large text of unspecified length                                                           |
| `datetime`                         | Used for dates                                                                                      |
| `xml`                              | Used for XML. Not ANSI                                                                              |

* `varchar`: used when there is no multilingual need
* `nvarchar`: In today's world of globalization, I consider `nvarchar` to be best practice

`nvarchar` can represent a larger character set because it uses 2 bytes per character instead of 1.

**Note:** In MySQL there is no `nvarchar` or `nchar`. This is because the encoding type is handled on a field by field basis in MySQL so it is unnecessary.
Without a deeper understanding of encoding, you should always use UTF-8 which can represent all characters from all languages.
For a deeper understanding [click here](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/).

### Other Data Types

Here is a list of [SQL Data Types](https://www.w3schools.com/sql/sql_datatypes.asp) available to you in MySQL, SQL Server, and MS Access.

**Previous:** [Modifiers](modifiers.markdown) |
**Next:** [Injection](injection.markdown)
