---
title: "JS API's"
class: lab
start_week: 11
start_date: 2024-04-11
---

1. Make an account with [Open Weather Map](https://home.openweathermap.org/users/sign_up) to get an [API key](https://home.openweathermap.org/api_keys)

## About JSON API's

API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you’re using an API.

### Query Strings  

Information from a JSON API is usually accessed via a *URL Query String*. This is a method of adding search terms to a URL.

A query String for an imaginary API that hosts a database of turtles may look something like this:
~~~
api.turtles.org/turtle?type=seaTurtle&color=purple
~~~

This is the *query string* from that URL:

~~~
?type=seaTurtle&color=purple
~~~

You can tell it's a query string because it starts with a `?` mark and has `&`'s separating values. Here, we are looking in our turtle database for information regarding a specific turtle. These are our parameters:

* type = sea turtle
* color = purple


### Accessing Weather Data

Here is a real world example of an API request to Open Weather Map. Try it out, copy and paste the following URL in your browser and see what you get. This requires an authenticated request so just remember to replace `{{yourApiKey}}` with your actual API key.

~~~
https://api.openweathermap.org/data/2.5/weather?zip=10011&units=imperial&appid=${ key }
~~~

Here, we are asking for information about the current weather in the are. These are our parameters:

* zip = 10011
* units = imperial
* app ID = {{ Whatever your API key is }}

You should get some JSON back in response. Now it's time to work with that JSON. Once parsed it will behave just like any other object in Javascript. We will use a Fetch Request in Javascript to get the data:

~~~
// Insert your actual API request URL below
fetch('api.turtles.org/turtle?type=seaTurtle&color=purple')
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        console.log(jsonData);
    });
~~~

## Resources

* [Workshop Boilerplate](/files/lab/boilerplates/workshops/07_api.zip)
* [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)