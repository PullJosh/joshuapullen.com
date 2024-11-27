---
date: 2023-07-22 14:00:00
title: Link to Websites in Scratch Projects with Leopard
author: "Josh Pullen"
---

So you’re building a Scratch project, and you want to include a link to a website. What can you do?

<figure style="max-width: 485px; margin: 0 auto;">
  <iframe src="https://scratch.mit.edu/projects/876650860/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
  <figcaption>I want to make a Scratch project showcasing my cool new website, <a href="https://joshuapullen.com/">joshuapullen.com</a>, but I need a way to make the button actually work.</figcaption>
</figure>

**Scratch doesn’t allow you to open links to websites using code.** But that’s okay! There’s a solution.

# Convert Your Project to JavaScript with Leopard

Since Scratch can’t open links, we need to convert our project to a different programming language: JavaScript. Fortunately, there’s an easy tool for this.

You can use [Leopard](https://leopardjs.com/) to convert your project to JavaScript automatically. Enter your project URL or upload an .sb3 file on [the Leopard website](https://leopardjs.com/):

![Leopard URL Input](/images/posts/links-in-scratch-projects-with-leopard/leopard-url-input.jpg)

You’ll be taken to a JavaScript code editor with your project inside. In the left sidebar, you will see folders of code, costumes, and sounds for each of the sprites in your project. Find the sprite you want to edit and open its JavaScript file, which ends in .js.

<figure>
  <img src="/images/posts/links-in-scratch-projects-with-leopard/code-start.jpg" alt="Project converted to JavaScript code" />
  <figcaption>I want to make the button sprite open my website when you click it, so I am opening the Button/Button.js file using the left sidebar.</figcaption>
</figure>

Now we can edit the code! Find the script in your project that you’d like to change. In my case, I want to replace this `sayAndWait` block with some code to actually open the website:

```jsx
// In Button/Button.js
// ...

export default class Button extends Sprite {
  constructor(...args) {
    // ...
  }

  *whenthisspriteclicked() {
    yield* this.sayAndWait("Go to joshuapullen.com", 2);
  }
}
```

## Open a Website Using JavaScript

**To open a website using JavaScript, you write the following line:**

```jsx
window.open("https://joshuapullen.com");
```

Of course, you can change the URL to be any website you want. ([You can learn more about the window.open function here.](https://www.w3schools.com/jsref/met_win_open.asp))

In my example, the final code looks like this:

```jsx
// In Button/Button.js
// ...

export default class Button extends Sprite {
  constructor(...args) {
    // ...
  }

  *whenthisspriteclicked() {
    window.open("https://joshuapullen.com");
  }
}
```

When the button sprite is clicked, this code will open the webpage in a new tab.

<iframe src="https://codesandbox.io/embed/cocky-bogdan-8zdw6w?fontsize=14&hidenavigation=1&module=%2FButton%2FButton.js&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="cocky-bogdan-8zdw6w"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

And that’s it! You can now open URLs using JavaScript in your Scratch projects.
