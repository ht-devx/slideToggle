### slideToggle

A plugin that replicates jQuery's `slideToggle()` function in pure JavaScript by utilizing CSS transitions with `grid-template-rows`.

**Preview / Demo:** [ht-devx.github.io/slideToggle](ht-devx.github.io/slideToggle)\
**Demo code:** [jsfiddle.net/ht_dev/fua53ngr](https://jsfiddle.net/ht_dev/fua53ngr)\
**Author:** HT ([@ ht-devx](https://github.com/ht-devx))\
**Release date:** 2024-06-13\
**Last updated:** 2024-03-13 7:31PM [GMT-7]

---

#### Table of Contents:
* [About](#slidetoggle)
* [How to Use](#how-to-use)
* [Usage Notes](#usage-notes)
* [Attribution](#attribution)
* [Troubleshooting](#troubleshooting)
* [Credits](#credits)

---

#### How to use:

Include the following after `<head>`:
```html
<!----- 【 slideToggle: @ht-devx 】 ----->
<link href="https://ht-devx.github.io/slideToggle/slideToggle.css" rel="stylesheet">
<script src="https://ht-devx.github.io/slideToggle/slideToggle.min.js"></script>

<script>
slideToggle({
    trigger: "#your_button", // change this to your trigger's selector
    content: "#your_content" // change this to your content's selector
})
</script>

<style>
:root {
    --SlideToggle-Speed-1: 500ms;
    --SlideToggle-Speed-2: 1s;
}

/* in the next line, change .content to your content's selector */
.content:not(.slidetoggle-content){
    display:none;
}
</style>
```

What's happening in this example:
- Clicking an element called `#your_button` will cause an element called `#your_content` to slide toggle.
- On the 1st slide animation (revealing the content), it expands at the speed of `--SlideToggle-Speed-1`, which is set to `500ms`.
- On the 2nd slide animation (hiding the content), it retracts at the speed of `--SlideToggle-Speed-2`, which is set to `1s`.
- [optional] `.content:not(.slidetoggle-content)` with the CSS `display:none` hides content until the user interacts with it.

---

#### Usage notes:
If you have multiple contents you want to slide toggle, and want to auto-generate your **trigger** and **content** pairings based on naming patterns (e.g. numbered elements), with this HTML markup as an example (here, the numbered pattern is assigned in the `data-id` attribute):
```html
<button class="button" data-id="1">one's button</button>
<div class="content" data-id="1">one's content</div>

<button class="button" data-id="2">one's button</button>
<div class="content" data-id="2">one's content</div>
```

You can call the plugin like this:
```javascript
let triggerName = "button"; // change this to your trigger selector
let attrName = "data-id"; //  change this to your numbered attribute
let contentName = ".content"; // change this to your content selector

// if you modify the 3 lines above, you don't need to touch anything here
document.querySelectorAll(triggerName)?.forEach(btn => {
    let getID = btn.getAttribute(attrName);
    slideToggle({
        trigger: btn,
        content: [...document.querySelectorAll(contentName)].find(x => x.getAttribute(attrName) == getID)
    })
})
```

---

#### Attribution:
No visible credit/attribution is required, but please do not remove the existing credits in the code. A link to this repository would be appreciated.

---

#### Troubleshooting:
If you need further assistance, please contact me at: [hello.ht.dev@gmail.com](mailto:hello.ht.dev@gmail.com)

---

#### Credits:

`height:auto` animation via `grid-template-rows` by [Nelson Menezes](https://nemzes.net/posts/animating-height-auto).
