# MY Personal Porfolio

## Who Am I?

## What is this?

## Contact me

## What I learn

### packet.json

- can add new script to work with the project
- `"compile:sass": "sass --watch scss:assets/css"` the code will compile sass into css file and also creating Source maps which are files that tell browser or other tools that consume CSS how that CSS correspongds to the Sass files which was generated
- `--watch` tell the the process to watch for change in the files `style.scss` to update and not terminate the process.
- creating new file with underscore `_custom.scss` which is to keep all the variables which we override in bootstrap. The underscore indicate the parcel file and not generated into a style sheet
- Created a layout for scss which divide into sections and components
- all of them would be import through `@use` in `style.scss`
- building slowly from the top to the bottom of the page.

### index Page

- using `navbar` example from Bootstrap using container class instead of container-fluid
- adding justify content to move the items to the

#### navbar
-  making it gradient with 
-  when adding new class, `@use` with the file path need to be included in order to apply the custom styles
-  example `@use '../custom' as *;` to import the custom and the * is just remove name space

#### buttons

- working with font, padding, margin and border.
- adding hover effect with `&:hover` within the `.btn-rounded{}`bracket
- to make the buttons `display:none` when changing into mobile view.  
  
``` sass
@include media-breakpoint-down(sm) {
        display: none;
}
```

## Resources

https://thenextweb.com/news/guide-crafting-visual-elements-online-portfolio  
