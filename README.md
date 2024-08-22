# Frontend Mentor - Recipe page solution

This is a solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
  **Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### Screenshot

#### Desktop result

![desktop result](./public/images/desktop-result.png)

#### Mobile result

![mobile result](./public/images/mobile-result.png)

### Links

- Solution URL: [FrontEndMentor](https://jameslaviron.github.io/qr-code-component-main/)
- Live Site URL: [Github pages](https://jameslaviron.github.io/JamesLaviron/recipe-page-main)

## My process

### Built with

- Semantic HTML5 markup
- SASS
- BEM methodology
- CSS custom properties
- Flexbox
- CSS Grid
- CSS mixins
- [Vue](https://vuejs.org/) - JS library

### What I learned

I learned how to use BEM methodology in order to structure my code. I tried to mutualize the code as much as possible.

```html
<section class="card__section card__section--preparation-time">
  <h2 class="card__section-title card__section-title--preparation-time">
    Preparation time
  </h2>
  <ul class="card__list">
    <li class="card__list-item card__list-item--total-time">
      <span class="card__list-content">
        <strong class="card__strong">Total:</strong> Approximately 10 minutes
      </span>
    </li>
    <li class="card__list-item card__list-item--preparation-time">
      <span class="card__list-content">
        <strong class="card__strong">Preparation:</strong> 5 minutes
      </span>
    </li>
    <li class="card__list-item card__list-item--cooking-time">
      <span class="card__list-content">
        <strong class="card__strong">Cooking:</strong> 5 minutes
      </span>
    </li>
  </ul>
</section>
```

As I use BEM, I'm proud of my use of SASS mixins that allow less code writing and make it easier to understand.

```css
.card__list-item {
  list-style-position: outside;
  margin-left: $spacing-200;

  &--instruction::marker {
    @include text-preset-4--bold;
  }
}
```

I'm also proud of the way I tried to stick with semantic html even if I struggled with lists spacing.

### Continued development

I still need to focus on assets handling inside vue/react projects. I'm looking forward to see what others did.

### Useful resources

- [BEM cheat sheet](https://bem-cheat-sheet.9elements.com/) - This helped me to understand BEM methodology.
- [BEM article](https://sparkbox.com/foundry/bem_by_example) - Nice article usefull to understand BEM.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
