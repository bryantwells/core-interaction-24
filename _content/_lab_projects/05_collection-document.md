---
title: "Collection Document"
class: lab
start_week: 7
end_week: 9
start_date: 2024-03-08
end_date: 2024-03-22
---

Building on [last week's homework](/projects/04_collection-object.html) and [this week's workshop](/workshops/07_js-dom.html), make a website that inserts your collection's data into an HTML document using javascript.

Use [this boilerplate](/files/lab/boilerplates/projects/05_collection-dom.zip) as a starting point for your work. Your folder structure should look like this:

~~~
📂 core-2-interaction/
└─ 📂 lab/ 
   └─ 📁 projects/
      └─ 📁 05_collection-dom
         ├─ 📄 index.html
         ├─ 📁 media
         └─ 📁 assets
            ├─ 📄 data.js
            ├─ 📄 scripts.js
            └─ 📄 style.css
~~~

## The `📄data.js` File

**Your `📄 data.js` should only have an array containing your collection's dataset**. Each array element should be an object representing a single entry and containing whatever metadata you decide is relevant to your project. Like so...

```
var data = [
    {
        make: 'Dodge',
        model: 'Charger',
        year: 2019,
        color: 'red'
    },
    {
        make: 'Honda',
        model: 'Element',
        year: 2008,
        color: 'blue'
    },
    {
        make: 'Ford',
        model: 'Escort',
        year: 2013,
        color: 'yellow'
    },
];
```

## The `📄scripts.js` File

Your `📄scripts.js` file should create a new element within the DOM for every element within your collection's array. The following code may be used as a basis: 

```
    // Select your container element.
    var containerElement = document.querySelector('.Container');

    // Define the insert function with a parameter.
    function insertDataItem(dataItem) {

        // Update this to your match your collection's metadata.
        containerElement.innerHTML += `
            <div class="Car" style="background: ${ dataItem['color'] }">
                <p>Make: ${ dataItem['make'] }</p>
                <p>Model: ${ dataItem['model'] }</p>
                <p>Year: ${ dataItem['year'] }</p>
            </div>
        `;
    }

    // Run the insert function for every element in the collection array
    data.forEach((dataItem) => {
        insertDataItem(dataItem)
    });
```

Add any additional HTML, CSS, and JS as needed to represent your collection's design intent. Your page should run without errors upon submission. Remember to use the console log to check for syntax errors!

## Resources
[Codecademy – Javascript Functions](https://www.codecademy.com/courses/introduction-to-javascript/lessons/functions/exercises/intro-to-functions)  
[Eloquent Javascript – Functions](https://eloquentjavascript.net/03_functions.html)  
