# 🎨 CSS Layers & z-index – Complete Notes

The **z-index** property in CSS is used to **control the stacking order** of elements.  
It decides **which element appears on top** when multiple elements overlap.

---

## **1. What are Layers in CSS?**
Every element on a webpage exists in a **stacking context** (like layers in Photoshop).  
The higher the layer → the **closer to the user**.

**Default Behavior:**
- Elements are drawn **in the order they appear in the HTML**.
- Later elements **appear on top** of earlier ones.

---

## **2. z-index Property**
```css
element {
  position: relative; /* or absolute, fixed, sticky */
  z-index: 5;
}
```

### **🔹 Important Points**
- **z-index** works **only on positioned elements** → `relative`, `absolute`, `fixed`, or `sticky`.
- **Higher z-index** = **closer to the user**.
- **Negative z-index** = element goes **behind** others.
- If two elements have the **same z-index**, the one **later in HTML** appears on top.

---

## **3. Example 1 – Basic z-index Usage**
```html
<!DOCTYPE html>
<html>
<head>
<style>
.box1 {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: lightblue;
  z-index: 1; /* Lower layer */
}

.box2 {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: orange;
  top: -150px;
  left: 50px;
  z-index: 2; /* On top */
}
</style>
</head>
<body>
  <div class="box1">Box 1</div>
  <div class="box2">Box 2</div>
</body>
</html>
```

✅ Here, **Box 2** overlaps **Box 1** because **z-index: 2 > z-index: 1**.

---

## **4. Example 2 – Negative z-index**
```html
<!DOCTYPE html>
<html>
<head>
<style>
.background {
  position: relative;
  width: 300px;
  height: 150px;
  background-color: lightgreen;
  z-index: -1; /* Goes behind */
}

.text {
  position: relative;
  font-size: 24px;
  padding: 20px;
  background-color: white;
}
</style>
</head>
<body>
  <div class="background"></div>
  <div class="text">Text is on top!</div>
</body>
</html>
```
✅ The **green box** stays **behind the text**.

---

## **5. Example 3 – Without Positioning (z-index Won’t Work)**
```html
<!DOCTYPE html>
<html>
<head>
<style>
.box1 {
  width: 200px;
  height: 200px;
  background-color: blue;
  z-index: 999; /* ❌ Won’t work */
}

.box2 {
  width: 200px;
  height: 200px;
  background-color: red;
  margin-top: -150px;
}
</style>
</head>
<body>
  <div class="box1"></div>
  <div class="box2"></div>
</body>
</html>
```

⚠️ **Important:**  
`z-index` **doesn’t work** because elements **don’t have position** (`static` by default).

---

## **6. Real-Life Use Cases of z-index**
✅ **Navigation bars** → Always on top of content  
✅ **Modals / Popups** → Overlay above everything  
✅ **Tooltips & dropdown menus** → Stay above buttons  
✅ **Sticky ads or banners** → Keep above normal content  

---

## **7. Quick Summary Table**
| **z-index Value** | **Layer Position**  | **Example Use Case** |
|--------------------|---------------------|-----------------------|
| Negative (`-1`)   | Behind all elements | Background images     |
| `0` (default)     | Normal stacking     | Regular content       |
| Positive (`1+`)   | Above lower layers  | Headers, tooltips     |
| Higher number     | Topmost layer       | Modals, popups        |
