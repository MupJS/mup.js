# mup.js
A simple JS library

## What is MUP?
Mup is a simple solution to a simple problem. I wanted a light-JavaScript option for a components library to make better, more powerful websites in an easier, faster, and simple way. Mup - **Mu**lti-**P**age - works by rendering with JavaScript and adds minimal load times. I made Mup because I didn't need complex, powerful tools. Just something I can make a navigation bar and footer component with, and have everything else be customizable. It just makes life easier for smaller front-end websites.

Is Mup super simple? Yes, but I needed something simple and without too many unwanted features. Mup is specifically designed for GitHub Pages front-end only websites that have an ever-growing number of pages with components that need to exist on most if not all pages.

## How to use Mup?
Start by defining a component file. For example `/components/Hello.mup`. The file exension ***MUST*** end in `.mup` for Mup to work properly. In that file, add your HTML:
```html
<p>Hello</p>
```
Next in the config file (`mup.conf.js`), add your Mup file:
```js
export let Components = [
    "/components/Hello.mup"
]
```
Since it's a simple array, you can add as many as you want and Mup will automagically run it. Now onto your HTML file. Import the module using `<script src="/mup.js" type="module"></script>` to the bottom of your `<body>`, and it will automatically grab your config file. 

Now make a div with the ID of your component, for example `<div id="Hello"></div>`, and it Mup will display the HTML. 

Your HTML should look like this:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Mup Test</title>
    </head>
    <body>
        <div id="Hello"></div>

        <script src="/mup.js" type="module"></script>
    </body>
</html>
```