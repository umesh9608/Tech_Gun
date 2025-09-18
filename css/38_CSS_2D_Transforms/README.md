# 2D Transform in CSS

This project demonstrates how to use **CSS 2D Transform** properties to manipulate HTML elements like links (`<a>` tags).  
Using CSS transforms, we can **move**, **rotate**, **scale**, and **skew** elements without affecting the document flow.

---

## 📂 Project Structure

```
2d-transform/
│── index.html
│── README.md
```

---

## 📌 Features

### 1. **translate(x, y)**
Moves the element from its current position along the **X** and **Y** axes.

```css
a {
  transform: translate(50px, 50px);
}
```
🔹 **50px right** and **50px down**.

---

### 2. **rotate(angle)**
Rotates the element clockwise or counterclockwise.

```css
a {
  transform: rotate(20deg);
}
```
🔹 Rotates the element **20 degrees clockwise**.

---

### 3. **scale(x, y)**
Resizes the element by scaling it horizontally and vertically.

```css
a {
  transform: scale(2, 3);
}
```
🔹 The element becomes **2 times wider** and **3 times taller**.

---

### 4. **scaleX(value) & scaleY(value)**
- **scaleX()** → Scales only horizontally.
- **scaleY()** → Scales only vertically.

```css
a {
  transform: scaleX(4);
}
```
🔹 Makes the element **4 times wider**.

---

### 5. **skew(x-angle, y-angle)**
Tilts the element along the X and Y axes.

```css
a {
  transform: skew(20deg, 20deg);
}
```
🔹 Skews the element **20 degrees** horizontally and vertically.

---

### 6. **transform-origin**
Defines the **pivot point** for rotation, scaling, and skewing.

```css
a {
  transform: rotate(20deg);
  transform-origin: 0% 100%;
}
```
🔹 Rotates the element **20 degrees** around its **bottom-left corner**.

---

## 🧩 Hover Effects

You can also apply transformations **on hover**:

```css
a:hover {
  transform: scale(1.5);
}
```
🔹 When you hover, the button **zooms in**.

---

## 🎨 Output Preview

- A button labeled **"Click Here"**
- Background color: **blue**
- Text color: **white**
- Different 2D transformations can be applied by uncommenting the code.

---

## 🚀 How to Use

1. Clone the repository or copy the code.
2. Open `index.html` in your browser.
3. Uncomment any **transform** property in CSS to see the effect.

---

## 📖 Reference

- [MDN CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [W3Schools CSS Transform Tutorial](https://www.w3schools.com/css/css3_2dtransforms.asp)
