# Senpai Merch — Design System

## Colors
```
--bg:        #0a0a0a
--surface:   #111111
--surface2:  #181818
--border:    rgba(255,255,255,0.07)
--red:       #e31c1c
--red-dark:  #b81515
--white:     #ffffff
--muted:     rgba(255,255,255,0.45)
--subtle:    rgba(255,255,255,0.18)
```

## Typography
- Display: "Bebas Neue" — hero headings, section titles, nav brand
- Body: "DM Sans" — all body copy, labels, UI text
- Heading sizes: clamp(48px,8vw,110px) for hero; clamp(36px,5vw,64px) for sections
- Uppercase + letter-spacing for labels/tags

## Spacing
- Section padding: clamp(64px,10vw,130px) vertical | clamp(20px,5vw,80px) horizontal
- Grid gap: 2px (tight editorial) or 16–24px (comfortable)

## Motions
- Hover cards: translateY(-4px) + shadow 0.25s ease
- Red underline nav: scaleX 0→1 on hover
- Mega menu: opacity + translateY(-8px) → 0 on open
- Cart drawer: translateX(100%) → 0
- Mobile menu: translateX(-100%) → 0
- Section fade-in: use IntersectionObserver for scroll reveals

## Component Rules
- Buttons: solid red (#e31c1c) for primary; white outline for secondary
- Badges: "NEW" = red bg white text; "SALE" = white bg black text; "HOT" = black bg white text
- ProductCard: dark surface, tight, hover reveals quick-add bar at bottom
- All borders: 1px solid rgba(255,255,255,0.07)
- Red hover glow: box-shadow 0 0 0 1px rgba(227,28,28,0.4)
