# 📏 CSS Units – Complete Notes

## **1. Introduction**
CSS units define the size of elements like **font size**, **width**, **height**, **margin**, **padding**, etc.  
There are **two main types** of CSS units:

- **Absolute Units** → Fixed size, does not change.
- **Relative Units** → Size depends on parent or viewport.

---

## **2. Absolute Units**
Absolute units are **fixed** and **do not scale** based on screen size.

| Unit | Name         | Description             | Example            |
|------|-------------|------------------------|---------------------|
| px   | Pixels      | Most common, fixed size | `font-size: 16px;` |
| pt   | Points      | 1pt = 1/72 inch         | `font-size: 12pt;` |
| pc   | Picas       | 1pc = 12pt              | `font-size: 1pc;`  |
| in   | Inches      | Physical inch           | `width: 2in;`      |
| cm   | Centimeters | Real-world cm           | `width: 5cm;`      |
| mm   | Millimeters | Real-world mm           | `width: 50mm;`     |

> **Tip:** For web design, mostly use **px**. Other units are used in **print media**.

---

## **3. Relative Units**
Relative units **scale** based on **parent element**, **viewport size**, or **root font size**.

| Unit | Description                       | Example             | Depends On             |
|------|----------------------------------|---------------------|------------------------|
| %    | Percentage                       | `width: 50%;`      | Parent element size    |
| em   | Relative to **parent font size** | `font-size: 2em;`  | Parent font size       |
| rem  | Relative to **root font size**   | `font-size: 2rem;` | `<html>` font size     |
| vw   | Viewport Width                   | `width: 50vw;`     | Browser window width   |
| vh   | Viewport Height                  | `height: 50vh;`    | Browser window height  |
| vmin | Minimum of vw & vh               | `font-size: 5vmin;`| Smaller viewport dim.  |
| vmax | Maximum of vw & vh               | `font-size: 5vmax;`| Larger viewport dim.   |
| ex   | Relative to x-height of font     | Rarely used        | Current font height    |
| ch   | Width of "0" character          | Rarely used        | Current font width     |

---

## **4. Difference Between `em` and `rem`**

<!-- em is related to parent and rem is related to html -->
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    html {
      font-size: 16px; /* Root font size */
    }

    .parent {
      font-size: 20px; /* Parent font size */
    }

    .child-em {
      font-size: 2em;  /* 2 * parent font size = 40px */
    }

    .child-rem {
      font-size: 2rem; /* 2 * root font size = 32px */
    }
  </style>
</head>
<body>
  <div class="parent">
    Parent Text
    <p class="child-em">Child with em</p>
    <p class="child-rem">Child with rem</p>
  </div>
</body>
</html>



<!-- part 2 em vs rem -->
 ## **. Difference Between `em` and `rem`**

In CSS, both **`em`** and **`rem`** are **relative units** used to set sizes like **font-size**, **padding**, **margin**, etc.

---

### **🔹 1. `em` (Relative to Parent Element)**
- `1em` = **100% of the font size of the parent element**.
- If the parent font size changes, **child size also changes**.
- Used when you want **nested scaling**.

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .parent {
      font-size: 20px;
    }

    .child {
      font-size: 2em; /* 2 × parent font size = 40px */
    }
  </style>
</head>
<body>
  <div class="parent">
    Parent Text
    <p class="child">Child with 2em → 40px</p>
  </div>
</body>
</html>
