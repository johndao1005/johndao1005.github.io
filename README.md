# MY Personal Porfolio

Check it  out here [link](https://johndao1005.github.io/)

## Who Am I?

## What is this?

## Contact me

## What I learn

## Useful

- checking between different display after finish each sections
- look at the spacing

## Creating multiple elements

syntax `.container>.row>(.col-md-4>.company__logo-box>img[src="src/company/company-$.png"][alt="Company $ logo"][title="Company $ Logo"].img-fluid)*6`  
Result

```html
<div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="company__logo-box"><img src="src/company/company-1.png" alt="Company 1 logo" title="Company 1 Logo" class="img-fluid"></div>
            </div>
            <div class="col-md-4">
                <div class="company__logo-box"><img src="src/company/company-2.png" alt="Company 2 logo" title="Company 2 Logo" class="img-fluid"></div>
            </div>
            <div class="col-md-4">
                <div class="company__logo-box"><img src="src/company/company-3.png" alt="Company 3 logo" title="Company 3 Logo" class="img-fluid"></div>
            </div>
            <div class="col-md-4">
                <div class="company__logo-box"><img src="src/company/company-4.png" alt="Company 4 logo" title="Company 4 Logo" class="img-fluid"></div>
            </div>
            <div class="col-md-4">
                <div class="company__logo-box"><img src="src/company/company-5.png" alt="Company 5 logo" title="Company 5 Logo" class="img-fluid"></div>
            </div>
            <div class="col-md-4">
                <div class="company__logo-box"><img src="src/company/company-6.png" alt="Company 6 logo" title="Company 6 Logo" class="img-fluid"></div>
            </div>
        </div>
    </div>
```

### packet.json

- can add new script to work with the project
- `"compile:sass": "sass --watch scss:assets/css"` the code will compile sass into css file and also creating Source maps which are files that tell browser or other tools that consume CSS how that CSS correspongds to the Sass files which was generated
- `--watch` tell the the process to watch for change in the files `style.scss` to update and not terminate the process.
- creating new file with underscore `_custom.scss` which is to keep all the variables which we override in bootstrap. The underscore indicate the parcel file and not generated into a style sheet
- Created a layout for scss which divide into sections and components
- all of them would be import through `@use` in `style.scss`
- building slowly from the top to the bottom of the page.
- Changing the font-size and display type between normal view point and media-breakpoint-up in css

```sass
&--description {
        font-size: 1.2rem;
        text-transform: none;
        display: block;
        margin-top: 1.2rem;
        @include media-breakpoint-up(lg) {
            font-size: 1.5rem;
            display: inline-block;
        }
    }
```

### scss

- using `navbar` example from Bootstrap using container class instead of container-fluid
- adding justify content to move the items to the

#### navbar

- making it gradient with 
- when adding new class, `@use` with the file path need to be included in order to apply the custom styles
- example `@use '../custom' as *;` to import the custom and the * is just remove name space
- putting `text-start` and `text-end` to position side way

#### buttons

- working with font, padding, margin and border.
- adding hover effect with `&:hover` within the `.btn-rounded{}`bracket
- to make the buttons `display:none` when changing into mobile view.  
  
``` sass
@include media-breakpoint-down(sm) {
        display: none;
}
```


## Optional

### Animation button

- animation choice

``` sass
@keyframes pulse-border {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.5)
    }
}
```

- animation setup

``` sass
.border-animation{
    position:absolute
    top:0;
    left:0;
    width:6rem;
    height: 6rem;
border: 0.55rem solid $white;
border radius: 50%;
animation: pulse-border 1s linear infinite;
}
```

-multiple animation

```html
<span class="border-animation border-animation--border-1"></span>
<span class="border-animation border-animation--border-2"></span>
```

```sass
.border-animation{
    position:absolute
    top:0;
    left:0;
    width:6rem;
    height: 6rem;
border: 0.55rem solid $white;
border radius: 50%;
animation: pulse-border 1.5s linear infinite;
&--border-1{
    animation-delay: 1s;
}
&--border-2{
    animation-delay:1.5s
}

```

### Grayscale

- using the `filter` property to switch between grayscale to normal color

## Resources

https://thenextweb.com/news/guide-crafting-visual-elements-online-portfolio  
