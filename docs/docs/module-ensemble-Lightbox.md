---
title: ensemble.Lightbox
slug: /module-ensemble-lightbox
---
<a name="module_ensemble"></a>

## ensemble

* [ensemble](#module_ensemble)
    * [~Lightbox](#module_ensemble..Lightbox) ⇐ <code>Modal</code>
        * [new Lightbox(element, options)](#new_module_ensemble..Lightbox_new)
        * [._defaults()](#module_ensemble..Lightbox+_defaults) ⇒ <code>object</code>
        * [._bindings()](#module_ensemble..Lightbox+_bindings)
        * [.generator()](#module_ensemble..Lightbox+generator)
        * [.populate(target)](#module_ensemble..Lightbox+populate)
        * [.resume(target)](#module_ensemble..Lightbox+resume)
        * [.add(content)](#module_ensemble..Lightbox+add)
        * [.remove(content)](#module_ensemble..Lightbox+remove)
        * [.prev(e)](#module_ensemble..Lightbox+prev)
        * [.next(e)](#module_ensemble..Lightbox+next)
        * [.slide(step)](#module_ensemble..Lightbox+slide)
        * [.navigation(way)](#module_ensemble..Lightbox+navigation)
        * [.caption(text)](#module_ensemble..Lightbox+caption)
        * [.keyboard(e)](#module_ensemble..Lightbox+keyboard)

<a name="module_ensemble..Lightbox"></a>

### ensemble~Lightbox ⇐ <code>Modal</code>
ensemble.Lightbox component.

**Kind**: inner class of [<code>ensemble</code>](#module_ensemble)  
**Extends**: <code>Modal</code>  

* [~Lightbox](#module_ensemble..Lightbox) ⇐ <code>Modal</code>
    * [new Lightbox(element, options)](#new_module_ensemble..Lightbox_new)
    * [._defaults()](#module_ensemble..Lightbox+_defaults) ⇒ <code>object</code>
    * [._bindings()](#module_ensemble..Lightbox+_bindings)
    * [.generator()](#module_ensemble..Lightbox+generator)
    * [.populate(target)](#module_ensemble..Lightbox+populate)
    * [.resume(target)](#module_ensemble..Lightbox+resume)
    * [.add(content)](#module_ensemble..Lightbox+add)
    * [.remove(content)](#module_ensemble..Lightbox+remove)
    * [.prev(e)](#module_ensemble..Lightbox+prev)
    * [.next(e)](#module_ensemble..Lightbox+next)
    * [.slide(step)](#module_ensemble..Lightbox+slide)
    * [.navigation(way)](#module_ensemble..Lightbox+navigation)
    * [.caption(text)](#module_ensemble..Lightbox+caption)
    * [.keyboard(e)](#module_ensemble..Lightbox+keyboard)

<a name="new_module_ensemble..Lightbox_new"></a>

#### new Lightbox(element, options)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>Element</code> |  | An optional Element node for lightbox grouping |
| options | <code>object</code> |  | Options object |
| [options.ns] | <code>string</code> | <code>&quot;modal&quot;</code> | The namespace for lightbox |
| [options.root] | <code>string</code> | <code>&quot;body&quot;</code> | The root Element node |
| [options.selector] | <code>string</code> |  | A selector to find elements |
| [options.contents] | <code>object</code> |  | An object of contents |
| [options.fx] | <code>boolean</code> | <code>true</code> | Switch for allow effects |
| [options.windowed] | <code>boolean</code> | <code>false</code> | Switch for framing in a window |
| [options.cloning] | <code>boolean</code> | <code>true</code> | Allow cloning of Element nodes |
| [options.backClose] | <code>boolean</code> | <code>true</code> | Switch for closing on tap/click outside the content |
| [options.keyboard] | <code>boolean</code> | <code>true</code> | Switch for keyboard navigation |
| [options.navigation] | <code>boolean</code> | <code>true</code> | Switch for navigation |
| [options.captioned] | <code>boolean</code> | <code>true</code> | Switch for captions |
| [options.infinite] | <code>boolean</code> | <code>true</code> | Switch for carousel alike loop navigation |
| [options.autoDiscover] | <code>boolean</code> | <code>true</code> | Switch for auto-discover type of contents |
| [options.autoHide] | <code>mixed</code> | <code>navigation</code> | Switch for auto-hide "navigation" or "captions", boolean or string value, true for both |
| [options.overlayed] | <code>mixed</code> | <code>false</code> | Switch for overlayed "navigation" or "captions", boolean or string value, true for both |
| [options.checkOrigin] | <code>boolean</code> | <code>true</code> | Switch for a bland control of origin capted from src url |
| [options.close] | <code>object</code> |  | Custom parameters for close button |
| [options.prev] | <code>object</code> |  | Custom parameters for button of the previous arrow |
| [options.next] | <code>object</code> |  | Custom parameters for button of the next arrow |
| [options.onOpen] | <code>function</code> |  | onOpen callback, fires when open lightbox |
| [options.onClose] | <code>function</code> |  | onOpen callback, fires when close lightbox |
| [options.onShow] | <code>function</code> |  | onShow callback, fires when show lightbox, after it openes |
| [options.onHide] | <code>function</code> |  | onHide callback, fires when hide lightbox, before it closes |
| [options.onContent] | <code>function</code> |  | onContent callback, fires when a content will be shown |
| [options.onStep] | <code>function</code> |  | onStep callback, fires when step between slides |
| [options.onSlide] | <code>function</code> |  | onSlide callback, fires when slide |
| [options.onCaption] | <code>function</code> |  | onCaption callback, fires when a caption will be shown |

<a name="module_ensemble..Lightbox+_defaults"></a>

#### lightbox.\_defaults() ⇒ <code>object</code>
Options object default properties.

**Kind**: instance method of [<code>Lightbox</code>](#module_ensemble..Lightbox)  
<a name="module_ensemble..Lightbox+_bindings"></a>

#### lightbox.\_bindings()
Methods binding.

**Kind**: instance method of [<code>Lightbox</code>](#module_ensemble..Lightbox)  
<a name="module_ensemble..Lightbox+generator"></a>

#### lightbox.generator()
The generator creates the container box with almost everything the component needs.

**Kind**: instance method of [<code>Lightbox</code>](#module_ensemble..Lightbox)  
**Todo**

- [ ] TODO

<a name="module_ensemble..Lightbox+populate"></a>

#### lightbox.populate(target)
In this stage the component is populated with all the content progeny.

**Kind**: instance method of [<code>Lightbox</code>](#module_ensemble..Lightbox)  
**Todo**

- [ ] TODO


| Param | Type | Description |
| --- | --- | --- |
| target | <code>Element</code> | The element that is invoking |

<a name="module_ensemble..Lightbox+resume"></a>

#### lightbox.resume(target)
Processing when the component is resumed.

**Kind**: instance method of [<code>Lightbox</code>](#module_ensemble..Lightbox)  
**Todo**

- [ ] TODO


| Param | Type | Description |
| --- | --- | --- |
| target | <code>Element</code> | The element that is invoking |

<a name="module_ensemble..Lightbox+add"></a>

#### lightbox.add(content)
Adds a content.

**Kind**: instance method of [<code>Lightbox</code>](#module_ensemble..Lightbox)  
**Todo**

- [ ] TODO


| Param | Type |
| --- | --- |
| content | <code>ensemble.Compo</code> | 

<a name="module_ensemble..Lightbox+remove"></a>

#### lightbox.remove(content)
Removes a content.

**Kind**: instance method of [<code>Lightbox</code>](#module_ensemble..Lightbox)  
**Todo**

- [ ] TODO


| Param | Type |
| --- | --- |
| content | <code>ensemble.Compo</code> | 

<a name="module_ensemble..Lightbox+prev"></a>

#### lightbox.prev(e)
Steps to previous slide.

**Kind**: instance method of [<code>Lightbox</code>](#module_ensemble..Lightbox)  
**Todo**

- [ ] TODO


| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | An Event |

<a name="module_ensemble..Lightbox+next"></a>

#### lightbox.next(e)
Steps to next slide.

**Kind**: instance method of [<code>Lightbox</code>](#module_ensemble..Lightbox)  
**Todo**

- [ ] TODO


| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | An Event |

<a name="module_ensemble..Lightbox+slide"></a>

#### lightbox.slide(step)
Slides to previous or next slide.

**Kind**: instance method of [<code>Lightbox</code>](#module_ensemble..Lightbox)  
**Todo**

- [ ] TODO


| Param | Type | Description |
| --- | --- | --- |
| step | <code>number</code> | Step to previous: -1, Step to next: 1 |

<a name="module_ensemble..Lightbox+navigation"></a>

#### lightbox.navigation(way)
Enable and disable the navigation.

**Kind**: instance method of [<code>Lightbox</code>](#module_ensemble..Lightbox)  
**Todo**

- [ ] TODO


| Param | Type | Description |
| --- | --- | --- |
| way | <code>number</code> | Could step both: 0, Could step to next: -1, Could step to previous: 1 |

<a name="module_ensemble..Lightbox+caption"></a>

#### lightbox.caption(text)
Inserts or overwrites caption text

**Kind**: instance method of [<code>Lightbox</code>](#module_ensemble..Lightbox)  
**Todo**

- [ ] TODO


| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text content |

<a name="module_ensemble..Lightbox+keyboard"></a>

#### lightbox.keyboard(e)
Captures keyboard codes corresponding to functions to be triggered.

**Kind**: instance method of [<code>Lightbox</code>](#module_ensemble..Lightbox)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | An Event |

