---
title: "Javascript Array Functions and Event Listeners"
class: lab
start_week: 8
start_date: 2024-03-21
---

[Download the boilerplate here!](/files/lab/boilerplates/workshops/05_js-events.zip)  

## Array Functions

Array functions allow us to manipulate an array based on a predetermined logic. There are [lots of them to choose from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods). For example, say you want to filter out a set of elements based on a perdetermined condition:

~~~
    var myFavNumbers = [0,3,7,8,21,23,24,32,67,999];
    var myFavNumbersOverTen = myFavNumbers.filter((number) => number > 10);
    console.log(myFavNumbersOverTen);
    // → [21,23,24,32,67,999]
~~~

## Event Listeners

Event listeners allow us to run a chunk of code (a function), dependent on the behaviour of elements within the Document. We can ‘listen’ to any element for clicks, hovers, scrolls, keyboard presses, media events (play, pause, etc) and much more. The syntax for attaching an event listener to an object is...

~~~
element.addEventLister('event', listenerFunction)
~~~

Often, that listener function will take the form of an anonymous function. We implement that syntax like this:

~~~
var element = document.querySelector('.MyElement');
element.addEventListener('click', () => {
	// some code here
});
~~~

[Full List of Events](https://developer.mozilla.org/en-US/docs/Web/Events)

## The Event Object

In some cases, you will want to know a little bit more information about the event you are listening to. The event object is automatically passed as an argument to all functions attached to an event. The event object contains a number of properties that describe the event that just occurred:

~~~
document.addEventListener('mousemove', (event) => {

    console.log(event.target)
	// → the mouse's x position

    console.log(event.y)
	// → the mouse's y position
});
~~~

### Completed Exercise Files

[05_js-events_complete](/files/lab/boilerplates/workshops/05_js-events_complete.zip)