# Play project images

Drop side-project / experiment images here, named by play id from
`src/data/playProjects.js`.

## Naming

```
public/images/play/<id>.<ext>      # e.g. 1.jpg, 2.png, 9.webp
```

## Recommended dimensions

The play grid is a 3-column tile grid; each tile is roughly 380–460 px
wide on desktop. Match the data file's `imgH` for height:

| Play `imgH` | Image height | Width |
|-------------|--------------|-------|
| 220         | 440 px (2x)  | ~900 px |
| 200         | 400 px (2x)  | ~900 px |
| 180         | 360 px (2x)  | ~900 px |
| 140         | 280 px (2x)  | ~900 px |

## File format

- **Photography (8, 9):** `.jpg` quality 80 or `.webp` quality 80.
- **Screen/mock previews:** `.png` or `.webp`.
- Target < 250 KB per file.

## Wiring it up

Today the play tiles render a colored block (`p.bg`) with a pale
overlay rectangle. To swap in real imagery, either:

1. Add `image` fields to entries in `src/data/playProjects.js` and
   render `<img src={p.image}/>` inside `pages/Play.jsx`, **or**
2. Set the tile's `background-image: url(/images/play/<id>.jpg)` via
   inline style.

Keep `bg` as a fallback color for the brief moment before the image
loads.
