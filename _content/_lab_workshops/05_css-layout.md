---
title: "Layouts with CSS"
class: lab
start_week: 5
start_date: 2024-02-22
---

## When To Use Flexbox
Flexbox is helpful when you're layout requires:

* Vertical alignment (esp. centering)
* The ability to evenly space items within a container
* The ability to change order/direction of items within a container without altering the markup (HTML)

## Parent Properties: Align, Justify and Wrap
The `align-items`  determines how a flex-item is positioned relative to it's *cross axis*. The `justify-content` property determines how a flex-item is positioned relative to it's *main-axis*. The `flex-wrap` property determines wether items within a flex container wrap, or not.

~~~
align-items: start;
align-items: end;
align-items: center;
align-items: stretch;
align-items: baseline;
~~~

~~~
justify-content: start;
justify-content: end;
justify-content: center;
justify-content: space-around;
justify-content: space-between;
~~~

~~~
flex-wrap: wrap;
~~~

## Child Properties: Grow, Shrink and Basis

`flex-grow` defines the ability for a flex item to grow, if necessary. `flex-shrink` defines the ability for a flex item to shrink, if necessary. `flex-basis` defines the default size of an element before the remaining space is distributed.

~~~
flex-grow: 0;
flex-shrink: 0;
flex-basis: 50%;
~~~

Shorthand for setting these three values looks like this...

~~~
flex: 0 0 50%;
~~~

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
[Boilerplate](/files/lab/boilerplates/workshops/02_layout.zip)  