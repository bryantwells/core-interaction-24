---
title: "CSS Grid"
class: lab
start_week: 3
start_date: 2024-02-09
---

## When To Use CSS Grid
The CSS Grid property gives us to layout content in two dimensions, whereas flexbox only allows a single dimension (rows vs. columns). CSS grid is good for:

* Resonsive, column-based layouts
* Managing the horizontal and vertical space elements take up, as well as the space between them

## Parent Properties: Columns, Rows, Gap

The `grid-template-columns` property defines the size of the grid columns. The `grid-template-rows` property defines the size of the grid columns. The `gap` property defines the space between rows and columns.

~~~
display: grid
~~~

~~~
gap: 10px;
gap: 10px 5px;
~~~

~~~
grid-template-columns: 1fr 2fr 1fr;
grid-template-columns: 250px 500px 250px;
grid-template-columns: 25% 50% 25%;
grid-template-columns: repeat(3, 1fr);
~~~

~~~
grid-template-rows: 1fr 2fr 1fr;
grid-template-rows: 250px 500px 250px;
grid-template-rows: 25% 50% 25%;
grid-template-columns: repeat(3, 1fr);
~~~

## Child Properties: Grid Column, Grid Row

The `grid-template-columns` property defines the size of the grid columns. The `grid-template-rows` property defines the size of the grid columns. The `gap` property defines the space between rows and columns.

~~~
grid-column: 1 / 2;
grid-column: 1 / -1;
grid-column: span 2;
~~~

~~~
grid-row: 1 / 2;
grid-row: 1 / -1;
grid-row: span 2;
~~~

## Resources
[Boilerplate](/files/lab/boilerplates/workshops/02_css-grid.zip)  
[Grid Garden](https://codepip.com/games/grid-garden/)  
[CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)