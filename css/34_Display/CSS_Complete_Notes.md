# 📝 Complete CSS Notes

## 1. CSS Units

<!-- CSS units define the size of elements like font-size, width, height, margin, padding -->
<!-- Two main types: Absolute Units (fixed), Relative Units (depends on parent/root/viewport) -->

### Absolute Units
| Unit | Name | Description | Example |
|------|------|-------------|---------|
| px   | Pixels | Fixed size | `font-size:16px;` |
| pt   | Points | 1pt = 1/72 inch | `font-size:12pt;` |
| pc   | Picas | 1pc = 12pt | `font-size:1pc;` |
| in   | Inches | Physical inch | `width:2in;` |
| cm   | Centimeters | Real-world cm | `width:5cm;` |
| mm   | Millimeters | Real-world mm | `width:50mm;` |

### Relative Units
| Unit | Description | Example |
|------|-------------|---------|
| %    | Percentage | `width:50%;` |
| em   | Relative to parent font-size | `font-size:2em;` |
| rem  | Relative to root font-size | `font-size:2rem;` |
| vw   | Viewport width | `width:50vw;` |
| vh   | Viewport height | `height:50vh;` |
| vmin | Minimum of vw & vh | `font-size:5vmin;` |
| vmax | Maximum of vw & vh | `font-size:5vmax;` |
| ex   | x-height of font | Rarely used |
| ch   | Width of "0" character | Rarely used |

---

## 2. CSS Object-Fit

<!-- Object-fit defines how content of replaced elements like images/videos fits their container -->
```css
img {
  width: 300px;
  height: 200px;
  object-fit: cover; /* cover, contain, fill, none, scale-down */
}
```

- cover → fills container, may crop  
- contain → fits container, may leave empty space  
- fill → stretches to fill, may distort  
- none → keeps original size  
- scale-down → smaller of none & contain  

---

## 3. CSS Pseudo-Classes

<!-- Pseudo-classes style elements in special states -->
```css
a:hover { color: red; }       
button:active { background: blue; }
input:focus { border: 2px solid green; }
p:first-child { font-weight: bold; }
p:last-child { color: gray; }
li:nth-child(2) { color: green; }
div:not(.special) { background: yellow; }
input:checked { background: green; }
input:disabled { opacity: 0.5; }
```

---

## 4. CSS Pseudo-Elements

<!-- Pseudo-elements allow styling specific parts of an element -->
```css
p::first-letter { font-size: 2em; color: red; }
p::first-line { font-weight: bold; color: green; }
p::before { content: "Note: "; color: blue; }
p::after { content: " ✔"; color: orange; }
input::placeholder { color: gray; font-style: italic; }
::selection { background-color: yellow; color: black; }
```

---

## 5. CSS Display Property

<!-- Defines how an element is displayed in layout -->
```css
.block { display: block; width: 200px; height: 50px; }
.inline { display: inline; }
.inline-block { display: inline-block; width: 200px; height: 50px; }
.none { display: none; }
.flex-container { display: flex; }
.grid-container { display: grid; }
```

- block → full width  
- inline → flows inline, ignores width/height  
- inline-block → inline but respects width/height  
- none → hides element completely  
- flex/grid → modern layouts  

---

## 6. Box Model

<!-- Box model includes content, padding, border, margin -->
```css
div {
  width: 200px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
  box-sizing: border-box;
}
```

---

## 7. Backgrounds

```css
div {
  background-color: lightblue;
  background-image: url('https://picsum.photos/400/200');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
```

---

## 8. Opacity

```css
div {
  opacity: 0.5; /* 0 = fully transparent, 1 = fully opaque */
}
```

---

## 9. Cursor

```css
button {
  cursor: pointer; /* pointer, default, crosshair, text, etc. */
}
```

---

## 10. Resizable Elements

```css
textarea {
  resize: both;
  overflow: auto;
}
```

---

## 11. Box Shadow

```css
div {
  box-shadow: 5px 5px 10px gray;
}
```

---

## 12. CSS Filters

```css
img {
  filter: grayscale(50%) blur(2px);
}
```

---

## 13. Image Sprites

```css
.icon {
  background-image: url('sprite.png');
  width: 50px;
  height: 50px;
  background-position: -50px 0;
}
```

- Reduces HTTP requests for multiple icons
