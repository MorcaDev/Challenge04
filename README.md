# Challenge 03  

![coin](https://github.com/MorcaDev/Challenge04/blob/master/Assets/icon.png)

### Developer Information 👋:
___
>*Hi, I'm MorcaDev, a junior front-end developer, who wants to learn new tech topics and improve his own code skills, and here, I'm going to explain which steps I have had followed in order to complete this new challenge.*
*See you 🤙*

### General Information 📚:
___
- Challenge's name : 
    -   **Interactive pricing component**
-  Users should be able to:
    -   View the optimal layout for the app depending on their device's screen size
    -   See hover states for all interactive elements on the page
    -   Use the slider and toggle to see prices for different page view numbers


### Skills to improve ✍
___
This "challenge" has the target to improve JS skills , especially in interactive section in a "real & commun" situations with more than one design (responsive design).

### Built with 🛠:
___
| Technologies | Info |
| ------ | ------ |
| JS | DOM handling - Listeners |
| HTML | Semantic - BEM methodology - Input range |
| CSS | Flexbox - Custom Propeties - Media queries - Linear gradient |
| Libraries | [SweetAlert](https://sweetalert.js.org "SweetAlert") |

### Continued development 🚀
___
Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### What I learned 🧐
___
I've learned a new type of input "range", which is important for interactivity with users, specially to collect and show info with variations. I've also seen 2 important events from these kind of input tags "input, changed events" and finally, I'd like to add that I have applied an interesting way to make an "animation" with linear-gradient.

```html
<input type="range" min="0" max="4" step="1" />
```

```js
const barElement = getElementById("barItself")

barElement.addEventListeener("input", changeInformation)
```

```css
#barItself{
    background-image: linear-gradient(to right, 
        hsla(174, 86%, 45%, 0.37) 0%, 
        hsla(174, 86%, 45%, 0.37) 25%, /*Here's the trick*/
        rgba(255, 255, 255, 0.37)0%
    );
}
```

### Important Links
___
- Website - [Challenge 04](https://morcadev.github.io/Challenge04/)
- Git-hub - [MorcaDev](https://github.com/MorcaDev)
- Frontend Mentor - [Original Idea](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8)
