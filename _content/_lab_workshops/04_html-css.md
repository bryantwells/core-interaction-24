---
title: "Semantic HTML and CSS"
class: lab
start_week: 2
start_date: 2024-02-02 10:30:00
---

This is a continuation of [Story Style](/workshops/03_story-style.html)


## Semantic HTML
Semantic elements in HTML5 allow us to clearly describe the meaning of an element. Using tags appropriately helps collaborators, screen-readers, and web crawlers better understand the content on a page. Outside of that, using semantic markup gives you more flexibility in tareting elements in CSS and JS.

We will be using the following semantic elements in today's workshop ([view the full list here](https://www.w3schools.com/html/html5_semantic_elements.asp)):

| Tag | Description |
| :--- | :--- |
| `<header>` | Specifies a header for a document or section |
| `<nav>` | Defines navigation links |
| `<main>` | Specifies the main content of a document |
| `<section>` | Defines a section in a document |

In addition, we will be using the following multimedia tags:

| Tag | Description |
| :--- | :--- |
| `<img>` | embeds an image into the document |
| `<audio>` | embeds an audio player into the document |
| `<video>` | embeds a video player into the document |
| `<object>` | embeds an external resource into the document |


## Linking an External Stylesheet
Link to your CSS styles using the following syntax:

```
<head>

    [...]

    <link rel="stylesheet" type="text/css" href="assets/style.css">

</head>
```

## The CSS Syntax
Like HTML, CSS has a specific 'syntax'. It looks like this:

```
selector { property: value; }
```

## CSS Classes
CSS Classes allow us to target an element by a specific name:

```
<div class="MyClassName"></header>
```
```
.MyClassName { color: blue; }
```

## CSS ID's
ID's allow us to target an element even more specifically than classes. An ID represents the singular instance of an element on a page:

```
<div id="MyIdName"></header>
```
```
#MyIdName { color: red; }
```


## CSS Naming Best Practices
Classnames and ID's have some restrictions (they cannot start with a number, for example) but are otherwise lax. [SUIT CSS](https://suitcss.github.io/) is a CSS naming style that prioritizes legibility:

```
.MyComponent {}
.MyComponent-part {}
.MyComponent-anotherPart {}
```

## Spacing Properties: The CSS Box Model
Every element on a page has a box around it. The box model describes how CSS spacing properties (`padding`, `margin`, and `border`) are applied:

![](/files/lab/story-style_3.png)


## The Display Property
The `display` property allows you to control how/if an element is displayed:

```
display: block;
display: inline-block;
display: inline;
display: none;
```

## The Position Property
Positions in a web document are calculated from the top-left corner of the page. The `position` property describes how an element is positioned:

```
position: static;
position: relative;
position: absolute;
position: fixed;
```

**Position: Static**  
This is the default value for an element in the DOM. Nothing special here. An element is placed right below or to the right of it’s sibling.

**Position: Relative**  
Positions an element relative to where it would normally be placed within the DOM.

**Position: Absolute**  
Positions an element relative to its nearest positioned ancestor. That means relative to an ancestor that has a position value other than static. An Absolutely positioned element’s siblings will be positioned as if they were unaware of it’s existence.

**Position: Fixed**  
Positions an element relative to the viewport. An element with a fixed position will always stay in the same place, even if the window is scaled or scrolled.