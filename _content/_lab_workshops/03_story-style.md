---
title: "Story Style"
class: lab
start_week: 2
start_date: 2024-02-02
---

We will be making a page using HTML, CSS, and embedded media based on the [5 part story](https://docs.google.com/document/d/1ohuinwbARQGmQKHuL748cEAd888F3HOlnbw31WdQFYU) you developed in studio.

## Setup
Download [this boilerplate](/files/lab/boilerplates/workshops/01_story-style.zip) to get started. Put it in your website's `📁lab/workshops/` folder. It should look like this:

~~~
📂 01_story-style/
│
├─ 📄 index.html 
│
├─ 📂 assets/
│  └─ 📄 style.css 
│
└─ 📂 media/ 
~~~

Go ahead and create a basic `📄index.html` file:

~~~
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    </body>
</html>
~~~

## Using Comments for Notes
Comment are hidden HTML elements made using the `<!-- -->` tag. Comments do not render when visiting a website in a browser. Use a comment to make note of your story's parts in the top of your `📄index.html` `<body>` tag:

```
<body>
    <!--
        1. A dark Arizona warehouse hums with conditioned air.

        2. With barely a sound – a small, black box lights up.

        3. A disembodied request: a metallic disc spins flush against a laser, reading a sequence of ones and zeros, sent across a rhizome of copper wire.

        4. The figure appears, "vegeta.jpeg".

        5. It's too humid to go outside today. Our printer renders light to ink, line by line. The result is added to my collection, pasted on the eggshell wall.
    -->
</body>
```

## Collecting Media
Take a moment to collect **4 pieces of media**, each corresponding to one of your story's 5 parts (one part will be text only). You should have one of each of the following file types :

1. An image file (.jpg, .png, etc.)
2. A video file (.mp4)
3. An audio file (.mp3)
4. A PDF file (.pdf)

You can keep track of them in your comment, like this:
```
<!--
    1. A dark Arizona warehouse hums with conditioned air.

    2. With barely a sound – a small, black box lights up.
    (light.mp4)

    3. A disembodied request: a metallic disc spins flush against a laser, reading a sequence of ones and zeros, sent across a rhizome of copper wire.
    (dialup.mp3)

    4. The figure appears, "vegeta.jpeg".
    (vegeta.jpg)

    5. It's too humid to go outside today. Our printer renders light to ink, line by line. The result is added to my collection, pasted on the eggshell wall.
    (printer.pdf)
-->
```

### Tips for Finding Video and Audio
You can use youtube to find appropriate video and/or audio for your story. Use [YT5S](https://yt5s.best) to download it from the platform:

![](/files/lab/story-style_1.png)

### Tips for Finding a PDF
You can use google to find an appropriate PDF for your story. Just perform a search ending in `filetype:pdf`. For example...

![](/files/lab/story-style_2.png)

## [Next: Semantic HTML and CSS](/workshops/04_html-css.html)
