<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Filter Property</title>
  <style>
    /* 
    =========================================
          📘 CSS FILTER PROPERTY NOTES
    =========================================

    1. Definition:
       → The CSS `filter` property is used to apply **visual effects** to images, backgrounds, and HTML elements.

    2. Commonly Used Filter Functions:
       • blur(px)      → Blurs the image.
       • brightness(%) → Adjusts brightness (100% = normal).
       • contrast(%)   → Adjusts contrast (100% = normal).
       • grayscale(%)  → Converts image to black & white (100% = fully gray).
       • hue-rotate(deg) → Rotates the colors (0deg = original).
       • invert(%)     → Inverts the colors (100% = full inversion).
       • opacity(%)    → Controls transparency (100% = visible, 0% = invisible).
       • saturate(%)   → Increases/decreases color intensity.
       • sepia(%)      → Gives a brownish/old-photo effect.
       • drop-shadow(x y blur color) → Adds shadow like box-shadow but works on images and shapes.

    3. Syntax:
       selector {
         filter: filter-function(value);
       }

    4. Multiple Filters:
       → You can apply multiple filters together:
         filter: brightness(120%) contrast(90%) blur(2px);

    5. Browser Support:
       ✅ Supported in all modern browsers.
    */

    body {
      text-align: center;
      background-color: #f7f7f7;
      font-family: Arial, sans-serif;
    }

    img {
      width: 200px;
      height: 200px;
      margin: 20px;
      border-radius: 10px;
      transition: all 0.4s ease-in-out;
    }

    /* Applying different filters */
    .blur        { filter: blur(5px); }
    .brightness  { filter: brightness(150%); }
    .contrast    { filter: contrast(200%); }
    .grayscale   { filter: grayscale(100%); }
    .hue         { filter: hue-rotate(180deg); }
    .invert      { filter: invert(100%); }
    .opacity     { filter: opacity(50%); }
    .saturate    { filter: saturate(300%); }
    .sepia       { filter: sepia(100%); }
    .shadow      { filter: drop-shadow(10px 10px 10px gray); }

    /* Hover effect using multiple filters */
    img:hover {
      filter: brightness(120%) contrast(120%) saturate(150%);
      transform: scale(1.1);
    }
  </style>
</head>
<body>

  <h1>CSS Filter Property Examples</h1>

  <!-- Different filter examples -->
  <img src="https://via.placeholder.com/200" class="blur" alt="Blur">
  <img src="https://via.placeholder.com/200" class="brightness" alt="Brightness">
  <img src="https://via.placeholder.com/200" class="contrast" alt="Contrast">
  <img src="https://via.placeholder.com/200" class="grayscale" alt="Grayscale">
  <img src="https://via.placeholder.com/200" class="hue" alt="Hue Rotate">
  <img src="https://via.placeholder.com/200" class="invert" alt="Invert">
  <img src="https://via.placeholder.com/200" class="opacity" alt="Opacity">
  <img src="https://via.placeholder.com/200" class="saturate" alt="Saturate">
  <img src="https://via.placeholder.com/200" class="sepia" alt="Sepia">
  <img src="https://via.placeholder.com/200" class="shadow" alt="Drop Shadow">

</body>
</html>
