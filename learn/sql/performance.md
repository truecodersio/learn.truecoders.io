---
title: SQL Performance
date: '2018-03-19T19:00:56-05:00'
module: sql
order: 7
---

* [Indexes](#indexes)
  * [Trade-offs](#trade-offs)

## Indexes

Suppose you're using a real world dictionary and you're trying to find a word:

* How long would it take you to find a word that starts with the letters "bac"? No problem, right?
* How long would it take you to find a word that ends with the letters "bac"? My gosh, that's awful.

Computing has essentially the same problem, but, given that computers are so fast, it's not obvious until your result sets are large and/or multiple join criteria are present.

### Trade-offs

There is no right and wrong in using indexes, only trade-offs:

* Benefits:
  * Faster selects and queries
* Costs:
  * Slower inserts and updates
  * More storage required to store indexes

In most cases, a `SELECT` statement will be returning many records, while an `INSERT` statement only inserts a single record and an `UPDATE` statement may only be updating a single record.

In general, it's a no brainer to trade a few milliseconds on the write of an individual record for a read of your reports and other queries to be lightning fast.

**Previous:** [Joins](joins.markdown)
