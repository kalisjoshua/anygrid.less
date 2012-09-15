# Grids.less

Borrowing heavily from the 960 grid system I wanted something similar but with some responsive-ness to it, along with some flexibility of overall width and possible changes to the gutters.

Checkout the [Many Grids demo](http://kalisjoshua.github.com/ManyGrids.LESS)

Easily define a grid system for your site; to define the standard 12 column 960px grid system, use:

```less
@import "anygrid";

@max_width          : 960px;

.container_12 { #anygrid > #system(12, @max_width); }
#anygrid > #responsive();
```

To add media query responsive-ness to the grid elements define a few variables for widths and call the responsive namespace.

```less
@import "anygrid";

@max_width          : 960px;
@max_less           : @max_width - 1;
@iPhone_portrait    : 300px;
@iPhone_landscape   : 480px;
@iPad_portrait      : 740px;

.container_12 { #anygrid > #system(12, @max_width); }
#anygrid > #responsive();
```
