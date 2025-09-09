
# 🎨 CSS Fonts - Complete Notes

## **1. Introduction to Fonts in CSS**
Fonts in CSS define how text is displayed on a webpage.  
CSS provides multiple properties to style and control fonts.

---

## **2. CSS Font Properties**

### **2.1 font-family**
Specifies the font of the text.

```css
p {
  font-family: Arial, Helvetica, sans-serif;
}
```
- Use multiple fonts as **fallbacks**.
- Last option is usually a **generic family** like `serif`, `sans-serif`, `monospace`.

---

### **2.2 font-size**
Sets the size of the font.

```css
h1 {
  font-size: 40px;   /* Fixed size */
}
p {
  font-size: 1.2em;  /* Relative size */
}
```
**Units:**
- `px` → Fixed pixels
- `em` → Relative to parent
- `rem` → Relative to root
- `%` → Relative to parent size

---

### **2.3 font-weight**
Controls the **thickness** of the text.

```css
p {
  font-weight: bold;   /* bold text */
}
h1 {
  font-weight: 700;    /* numeric value (100 to 900) */
}
```

---

### **2.4 font-style**
Sets the style of the font.

```css
p {
  font-style: italic; /* normal | italic | oblique */
}
```

---

### **2.5 font-variant**
Changes text to **small caps**.

```css
h2 {
  font-variant: small-caps;
}
```

---

### **2.6 line-height**
Controls the **space between lines**.

```css
p {
  line-height: 1.6;
}
```

---

### **2.7 letter-spacing & word-spacing**
Adjusts spacing between **letters** or **words**.

```css
h1 {
  letter-spacing: 3px;
  word-spacing: 10px;
}
```

---

### **2.8 text-transform**
Converts text to uppercase, lowercase, or capitalize.

```css
p {
  text-transform: uppercase; /* lowercase | capitalize */
}
```

---

### **2.9 shorthand: font**
You can combine multiple font properties into one.

```css
p {
  font: italic small-caps bold 18px/1.5 "Arial", sans-serif;
}
```

**Syntax Order:**
```
font: [font-style] [font-variant] [font-weight] [font-size]/[line-height] [font-family];
```

---

## **3. Web Safe Fonts**
Web safe fonts are commonly available on most devices.

| Font Name   | Generic Family |
|------------|----------------|
| Arial      | sans-serif     |
| Verdana    | sans-serif     |
| Times New Roman | serif     |
| Georgia    | serif         |
| Courier New| monospace     |

Example:

```css
body {
  font-family: Verdana, Geneva, sans-serif;
}
```

---

## **4. Using Google Fonts**
You can import **Google Fonts** into your CSS.

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">

<style>
body {
  font-family: 'Poppins', sans-serif;
}
</style>
```

---

## **5. Best Practices**
✅ Always provide **fallback fonts**  
✅ Use **relative units** (`em`, `rem`) for responsiveness  
✅ Prefer **Google Fonts** for better design  
✅ Don’t use too many different fonts — **keep 2 or 3 max**

---

## **6. Example Demo**
```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Fonts Example</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      line-height: 1.6;
    }

    h1 {
      font-weight: 700;
      font-size: 32px;
      letter-spacing: 2px;
    }

    p {
      font-style: italic;
      word-spacing: 5px;
    }
  </style>
</head>
<body>
  <h1>CSS Fonts Demo</h1>
  <p>This is an example of different font styles in CSS.</p>
</body>
</html>
```

---

## **Summary**
| Property         | Description                     | Example Value      |
|------------------|--------------------------------|---------------------|
| font-family      | Sets font type                 | Arial, sans-serif  |
| font-size        | Sets text size                | 16px, 1.2em        |
| font-weight      | Thickness of text             | bold, 400, 700     |
| font-style       | Italic or normal              | italic, normal     |
| font-variant     | Small caps effect             | small-caps         |
| line-height      | Space between lines           | 1.5, 2             |
| letter-spacing   | Space between letters         | 2px                |
| word-spacing     | Space between words          | 5px                |
| text-transform   | Uppercase, lowercase, etc    | uppercase          |

---

**Author:** CSS Notes by Umesh  
**Topic:** Fonts in CSS  
**Level:** Beginner to Advanced
