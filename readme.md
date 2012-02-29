# Grids.less

Borrowing heavily from the 960 grid system I wanted something similar but with some responsive-ness to it, along with some flexibility of overall width and possible changes to the gutters.

Checkout the [Many Grids demo](http://kalisjoshua.github.com/ManyGrids.LESS)

Easily define a grid system for your site; to define the standard 12 column 960 grid system, use:

```less
.container_12 {
    #grid > #system(12, 20px, 960px);
}
```