---
title: "Collection Object"
class: lab
start_week: 6
end_week: 7
start_date: 2024-03-01
end_date: 2024-03-08
---

Use [this boilerplate](/files/lab/boilerplates/projects/04_collection-object.zip) to create a JS variable containing the entries for your collection project. Your folder structure should look like this:

~~~
📂 core-2-interaction/
└─ 📂 lab/ 
   └─ 📁 projects/
      └─ 📁 04_collection-object
         ├─ 📄 index.html
         └─ 📁 assets
            ├─ 📄 data.js
            └─ 📄 scripts.js
~~~

## Object Structure

**Your `📄 data.js` should only have an array named "data" containing your collection's dataset**. Each array element should be an object representing a single entry and containing whatever metadata you decide is relevant to your project. Consider this example dataset describing the cars parked on the street outside of my studio...

```
var data = [
    {
        make: 'Dodge',
        model: 'Charger',
        year: 2019,
    },
    {
        make: 'Honda',
        model: 'Element',
        year: 2008,
    },
    {
        make: 'Ford',
        model: 'Escort',
        year: 2013,
    },
];
```

Your page should run without errors upon submission. Remember to use the console log to check for syntax errors!

## Resources
[Codecademy – Javascript](https://www.codecademy.com/learn/introduction-to-javascript)  
[Eloquent Javascript](https://eloquentjavascript.net/)  
