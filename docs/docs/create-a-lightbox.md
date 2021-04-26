---
title: Create a lightbox
---

TODO

## Example of lightbox

Example:

```js
var lightbox = new ensemble.Lightbox({
  contents: [
    {
      type: 'image',
      src: '../img/docusaurus.png'
    }
  ]
});

```

```js
lightbox.open();

lightbox.close();
```

import { ExampleLightbox } from './Example-component.js';

<ExampleLightbox/>

