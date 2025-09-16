
# ✨ CSS Pseudo-Elements – Complete Notes

## **1. Introduction**
CSS **pseudo-elements** allow you to style **specific parts of an element** without adding extra HTML markup.  
They are different from pseudo-classes, as they **create a virtual element** inside the actual element.

Common use cases:
- Styling the **first letter** of a paragraph
- Adding content **before or after** an element
- Highlighting the **first line** of text

---

## **2. Syntax**
```css
selector::pseudo-element {
  property: value;
}
```

**Note:** Modern CSS uses **double colons `::`**, but single colon `:` also works for backward compatibility.

---

## **3. Common Pseudo-Elements**

| Pseudo-Element        | Description | Example |
|----------------------|-------------|---------|
| `::before`           | Insert content **before** an element | `p::before { content: "Note: "; }` |
| `::after`            | Insert content **after** an element | `p::after { content: " ✔"; }` |
| `::first-letter`     | Style the **first letter** of a block | `p::first-letter { font-size: 2em; }` |
| `::first-line`       | Style the **first line** of a block | `p::first-line { color: red; }` |
| `::selection`        | Style **selected text** | `p::selection { background: yellow; }` |
| `::placeholder`      | Style **placeholder text** in input | `input::placeholder { color: gray; }` |

---

## **4. Example Code**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Pseudo-Elements Example</title>
  <style>
    p::first-letter {
      font-size: 2em;
      color: red;
    }

    p::first-line {
      font-weight: bold;
      color: green;
    }

    p::before {
      content: "Note: ";
      color: blue;
    }

    p::after {
      content: " ✔";
      color: orange;
    }

    input::placeholder {
      color: gray;
      font-style: italic;
    }

    ::selection {
      background-color: yellow;
      color: black;
    }
  </style>
</head>
<body>
  <h1>CSS Pseudo-Elements Demo</h1>

  <p>This is an example paragraph to demonstrate pseudo-elements in CSS.</p>

  <input type="text" placeholder="Type here...">
</body>
</html>
```

---

## **5. Tips**
- Combine pseudo-elements with pseudo-classes: `p::first-letter:hover { color: purple; }`  
- Use `::before` and `::after` to add decorative content without extra HTML  
- `::selection` works only with text selected by the user  
