
# ✨ CSS Pseudo-Classes – Complete Notes

## **1. Introduction**
CSS **pseudo-classes** define a special state of an HTML element without adding extra classes or IDs.  

They are commonly used for:
- **Hover effects**  
- **Visited links**  
- **First or last child elements**  
- **Form input states**  

---

## **2. Syntax**
```css
selector:pseudo-class {
  property: value;
}
```

---

## **3. Common Pseudo-Classes**

| Pseudo-Class       | Description | Example |
|-------------------|-------------|---------|
| `:hover`           | When mouse hovers over an element | `a:hover { color: red; }` |
| `:active`          | When an element is being clicked | `button:active { background: blue; }` |
| `:focus`           | When an element (input, textarea) is focused | `input:focus { border: 2px solid green; }` |
| `:visited`         | Links the user has visited | `a:visited { color: purple; }` |
| `:first-child`     | First child element of its parent | `p:first-child { font-weight: bold; }` |
| `:last-child`      | Last child element of its parent | `p:last-child { color: gray; }` |
| `:nth-child(n)`    | Selects the nth child element | `li:nth-child(2) { color: red; }` |
| `:not(selector)`   | Selects elements not matching the selector | `div:not(.special) { background: yellow; }` |
| `:checked`         | Selected checkboxes or radio buttons | `input:checked { background: green; }` |
| `:disabled`        | Disabled form elements | `input:disabled { opacity: 0.5; }` |

---

## **4. Example Code**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Pseudo-Classes Example</title>
  <style>
    a:link {
      color: blue;
    }
    a:visited {
      color: purple;
    }
    a:hover {
      color: red;
    }
    a:active {
      color: orange;
    }

    p:first-child {
      font-weight: bold;
    }

    p:last-child {
      color: gray;
    }

    li:nth-child(2) {
      color: green;
    }

    input:focus {
      border: 2px solid green;
    }

    input:disabled {
      opacity: 0.5;
    }
  </style>
</head>
<body>
  <h1>CSS Pseudo-Classes Demo</h1>
  
  <a href="#">Normal Link</a><br>
  <a href="#">Another Link</a><br>

  <p>First paragraph</p>
  <p>Second paragraph</p>
  <p>Third paragraph</p>

  <ul>
    <li>Item 1</li>
    <li>Item 2 (Green)</li>
    <li>Item 3</li>
  </ul>

  <input type="text" placeholder="Focus me">
  <input type="text" disabled placeholder="Disabled">
</body>
</html>
```

---

## **5. Tips**
- Combine pseudo-classes: `a:hover:active { color: yellow; }`  
- Use **`not()`** to exclude specific elements  
- `:nth-child()` is powerful for styling tables, lists, or grids  
