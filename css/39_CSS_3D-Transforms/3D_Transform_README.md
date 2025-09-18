# 3D Transform in CSS

This project demonstrates how to use **CSS 3D Transform** properties to create 3D effects like **rotation**, **translation**, and **perspective**.

---

## 📂 Project Structure

```
3d-transform/
│── index.html
│── README.md
```

---

## 📌 Features

### 1. **perspective(value)**
Defines the **distance** between the user and the 3D element.

```css
#content {
  transform: perspective(300px) rotate3d(0, 50, 50, 20deg);
}
```
🔹 The smaller the value, the more intense the 3D effect appears.

---

### 2. **rotate3d(x, y, z, angle)**
Rotates an element around the **X**, **Y**, and **Z** axes.

```css
#content {
  transform: perspective(300px) rotate3d(0, 50, 50, 20deg);
}
```
🔹 Rotates the element **20 degrees** around a **custom 3D axis**.

---

### 3. **translate3d(x, y, z)**
Moves the element in **3D space** along the **X**, **Y**, and **Z** axes.

```css
#content {
  transform: perspective(300px) translate3d(50px, 20px, 40px);
}
```
🔹 Moves the element:
- **50px** along the **X-axis**
- **20px** along the **Y-axis**
- **40px** along the **Z-axis**

---

### 4. **perspective-origin(x, y)**
Sets the **origin point** for the perspective.

```css
#content {
  perspective-origin: 50% 50%;
}
```
🔹 Defines **from which angle** the user sees the 3D object.

---

## 🎨 Output Preview

- A **200x200px** green box.
- The box can be **rotated**, **translated**, and viewed from different angles.
- Uncomment any transform property to test different effects.

---

## 🚀 How to Use

1. Clone the repository or copy the code.
2. Open `index.html` in your browser.
3. Uncomment any **transform** property in the CSS to see the effect.

---

## 🌐 Useful Link

- [CSS 3D Transforms Guide](https://3dtransforms.desandro.com/perspective)
- [MDN CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [W3Schools 3D Transform Tutorial](https://www.w3schools.com/css/css3_3dtransforms.asp)
