
# **CSS Functions – Complete Notes**

CSS functions are built-in methods that allow us to **manipulate values**, **calculate sizes**, **apply effects**, and **control layouts** dynamically.  
They make CSS **more powerful, flexible, and responsive**.

---

## **1. Why We Need CSS Functions**
- To **calculate values dynamically** (`calc()`)
- To **add effects & filters** (`blur()`, `drop-shadow()`)
- To **manipulate colors** (`rgb()`, `hsl()`, `opacity()`)
- To **create responsive designs** (`min()`, `max()`, `clamp()`)
- To **set images & gradients** (`url()`, `linear-gradient()`)
- To **reuse variables** (`var()`)

---

## **2. Common CSS Functions with Examples**

### **2.1 `calc()` → Perform Calculations**
Used to **dynamically calculate** values.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>calc() Example</title>
  <style>
    .box {
      width: calc(100% - 50px);
      height: 100px;
      background-color: lightgreen;
    }
  </style>
</head>
<body>
  <div class="box">Using calc()</div>
</body>
</html>
```

---

### **2.2 `rgb()` & `rgba()` → Set Colors**
`rgb()` defines solid colors, `rgba()` adds transparency.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>rgb() & rgba()</title>
  <style>
    .rgb-box {
      background-color: rgb(255, 0, 0); /* Red */
      height: 100px;
    }
    .rgba-box {
      background-color: rgba(0, 0, 255, 0.5); /* Blue with 50% opacity */
      height: 100px;
    }
  </style>
</head>
<body>
  <div class="rgb-box"></div>
  <div class="rgba-box"></div>
</body>
</html>
```

---

### **2.3 `var()` → Use CSS Variables**
Used to **store and reuse** values.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>var() Example</title>
  <style>
    :root {
      --main-color: orange;
      --padding: 20px;
    }
    .container {
      background-color: var(--main-color);
      padding: var(--padding);
      color: white;
    }
  </style>
</head>
<body>
  <div class="container">Using var()</div>
</body>
</html>
```

---

### **2.4 `url()` → Set Background Images**
Used to **add images** to backgrounds.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>url() Example</title>
  <style>
    .bg {
      height: 200px;
      background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb');
      background-size: cover;
      background-position: center;
    }
  </style>
</head>
<body>
  <div class="bg"></div>
</body>
</html>
```

---

### **2.5 `min()`, `max()` & `clamp()` → Responsive Sizing**
Used for **responsive layouts**.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>min() & max()</title>
  <style>
    .box {
      width: min(80%, 400px);
      height: 100px;
      background-color: lightcoral;
    }
    .box2 {
      width: clamp(200px, 50%, 600px);
      height: 100px;
      background-color: lightblue;
    }
  </style>
</head>
<body>
  <div class="box">Using min()</div>
  <div class="box2">Using clamp()</div>
</body>
</html>
```

---

### **2.6 `hsl()` & `hsla()` → Define Colors via Hue**
Alternative to RGB for better control.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>hsl() Example</title>
  <style>
    .hsl-box {
      background-color: hsl(200, 100%, 50%);
      height: 100px;
    }
    .hsla-box {
      background-color: hsla(120, 100%, 40%, 0.5);
      height: 100px;
    }
  </style>
</head>
<body>
  <div class="hsl-box"></div>
  <div class="hsla-box"></div>
</body>
</html>
```

---

### **2.7 `linear-gradient()` & `radial-gradient()`**
Used for **gradient backgrounds**.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gradient Example</title>
  <style>
    .gradient-box {
      height: 150px;
      background: linear-gradient(to right, red, blue);
    }
    .radial-box {
      height: 150px;
      background: radial-gradient(circle, yellow, green);
    }
  </style>
</head>
<body>
  <div class="gradient-box"></div>
  <div class="radial-box"></div>
</body>
</html>
```

---

## **3. Where We Use CSS Functions**
✅ Responsive layouts  
✅ Dynamic calculations  
✅ Animations & transformations  
✅ Color manipulation  
✅ Gradients & filters  
✅ Background images  

---

## **4. Conclusion**
CSS functions make styles **dynamic, powerful, and reusable**.  
They are essential for **modern web design** and **responsive layouts**.

---
