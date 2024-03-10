---
title: "Javascript DOM"
class: lab
start_week: 7
start_date: 2024-03-07
---

[Download the boilerplate here!](/files/lab/boilerplates/workshops/04_js-dom_complete.zip)  

By connecting to the Document Object, JavaScript has the ability to...

- Alter HTML elements
- Alter HTML attributes
- Alter CSS styles
- Remove existing HTML elements and attributes
- Create new HTML elements and attributes
- React to events (click, scroll, device motion, etc.)

## Document Object Methods & Properties

The document object comes along with various properties, and functions (called methods). Most frequently, we will use the document object to retrieve HTML elements...

| Method/Property | Description |
|--------|-------------|
| document.querySelector() | Returns the first element that matches specified CSS selector |
| document.querySelectorAll() | Returns all elements that match specified CSS selector |

[Full List of Methods & Properties](https://www.w3schools.com/jsref/dom_obj_document.asp)  


## Element Object Methods & Properties

Just like the Document Object, elements come with some handy methods and properties for use in JS:

| Method/Property | Description |
|--------|-------------|
| element.innerHTML | the HTML inside of a specified element |
| element.style | the inline styles attached to a specified element |

[Full List of Methods & Properties](https://www.w3schools.com/jsref/dom_obj_all.asp) 


## Array Methods & Properties

Even arrays have methods and properties!

| Method/Property | Description |
|--------|-------------|
| array.length | the length of a given array |
| array.forEach() | executes a function for each element in an array |

[Basic Array Methods](https://www.w3schools.com/js/js_array_methods.asp)  
[Array Iteration Methods](https://www.w3schools.com/js/js_array_iteration.asp) 


### Further Reading
[Eloquent JS](http://eloquentjavascript.net/00_intro.html)  
[Eloquent JS: The Document Object Model](http://eloquentjavascript.net/13_dom.html)  


### Completed Exercise Files

[04-js-dom_complete.zip](/files/lab/boilerplates/workshops/04_js-dom.zip)