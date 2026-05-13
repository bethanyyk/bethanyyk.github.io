# Work project images

Drop project hero images here, named by project id. The `id` matches the
`id` field in `src/data/projects.js`.

## Naming

```
public/images/work/<id>.<ext>      # e.g. 1.jpg, 2.png, 3.webp
```

## Recommended dimensions

| Project `imgH` (in data) | Image height | Width |
|--------------------------|--------------|-------|
| 240                      | 480 px (2x)  | ~1100 px |
| 220                      | 440 px (2x)  | ~1100 px |
| 200                      | 400 px (2x)  | ~1100 px |
| 180                      | 360 px (2x)  | ~1100 px |

Cards span ~half the main column, which is roughly 480–560 px wide on
desktop. Export at 2x (so ~1100 px wide) for retina displays. Aspect
ratio should match the card's `imgH` so the image fills without
cropping unexpectedly.

## File format

- **Photos:** `.jpg` (quality 80–85) or `.webp` (quality 80).
- **Diagrams / mocks with flat color:** `.png` or `.webp`.
- Keep individual files under ~250 KB.

## Wiring it up

Add an `image` field to the project entry in
`src/data/projects.js`:

```js
{
  id: 1,
  title: "Wayfinder",
  // ...
  image: "/images/work/1.jpg",
}
```

`ProjectCard` passes `image` through to `DiagramPlaceholder` as `src`.
When `src` is set, the SVG placeholder is replaced with an `<img>`
covering the same area. If `image` is absent, the SVG placeholder
continues to render as before.
