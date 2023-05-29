# CSS Cheat Sheet

## Unite:
1. Size Unite
  - vh/vw: always base on entire screen size
  - %: base on parent size
2. Font Unite / Size Unite
  - rem: relative for Root font size (default: 16px)
  - em: relative for parent font size
  - %: same as em

## Flexbox:
  - manage containers in one direction(basic use)
  - Main axis: controlled by justify-content
  - Cross axis: controlled by align-item
  - flex-basis: set base width of element
  - flex-grow: distribute extra space (default: 0)
  - flex-shrink: shrink width (default: 1)
  - shortcut: ```flex: grow shrink basis```

## Grid:
  - manager containers in two direction
  - container: wrap all subcontainers
  - gap: gap between container
  - grid-column === grid-column-start / grid-column-end === ```grid-coumen: span [number]```
