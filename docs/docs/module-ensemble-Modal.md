---
title: ensemble.Modal
slug: /module-ensemble-Modal
---
<a name="module_ensemble"></a>

## ensemble

* [ensemble](#module_ensemble)
    * [~Modal](#module_ensemble..Modal) ⇐ <code>base</code>
        * [new Modal([element], options)](#new_module_ensemble..Modal_new)
        * [._defaults()](#module_ensemble..Modal+_defaults) ⇒ <code>object</code>
        * [._bindings()](#module_ensemble..Modal+_bindings)
        * [.generator()](#module_ensemble..Modal+generator)
        * [.populate(target)](#module_ensemble..Modal+populate)
        * [.resume(target)](#module_ensemble..Modal+resume)
        * [.content(node, clone)](#module_ensemble..Modal+content) ⇒ <code>Element</code>
        * [.destroy()](#module_ensemble..Modal+destroy)
        * [.open(e, target)](#module_ensemble..Modal+open)
        * [.close(e, target)](#module_ensemble..Modal+close)
        * [.show(target)](#module_ensemble..Modal+show)
        * [.hide(target)](#module_ensemble..Modal+hide)
        * [.backx(e)](#module_ensemble..Modal+backx)
        * [.keyboard(e)](#module_ensemble..Modal+keyboard)

<a name="module_ensemble..Modal"></a>

### ensemble~Modal ⇐ <code>base</code>
ensemble.Modal component.

**Kind**: inner class of [<code>ensemble</code>](#module_ensemble)  
**Extends**: <code>base</code>  
**Todo**

- [ ] arguments


* [~Modal](#module_ensemble..Modal) ⇐ <code>base</code>
    * [new Modal([element], options)](#new_module_ensemble..Modal_new)
    * [._defaults()](#module_ensemble..Modal+_defaults) ⇒ <code>object</code>
    * [._bindings()](#module_ensemble..Modal+_bindings)
    * [.generator()](#module_ensemble..Modal+generator)
    * [.populate(target)](#module_ensemble..Modal+populate)
    * [.resume(target)](#module_ensemble..Modal+resume)
    * [.content(node, clone)](#module_ensemble..Modal+content) ⇒ <code>Element</code>
    * [.destroy()](#module_ensemble..Modal+destroy)
    * [.open(e, target)](#module_ensemble..Modal+open)
    * [.close(e, target)](#module_ensemble..Modal+close)
    * [.show(target)](#module_ensemble..Modal+show)
    * [.hide(target)](#module_ensemble..Modal+hide)
    * [.backx(e)](#module_ensemble..Modal+backx)
    * [.keyboard(e)](#module_ensemble..Modal+keyboard)

<a name="new_module_ensemble..Modal_new"></a>

#### new Modal([element], options)
Constructor method.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [element] | <code>Element</code> |  | A valid Element node to display in the modal dialog |
| options | <code>object</code> |  | Options object |
| [options.ns] | <code>string</code> | <code>&quot;modal&quot;</code> | The namespace for modal |
| [options.root] | <code>string</code> | <code>&quot;body&quot;</code> | The root Element node |
| [options.className] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <code>&quot;modal&quot;</code> | The component CSS class name |
| [options.fx] | <code>boolean</code> | <code>true</code> | Switch for allow effects |
| [options.windowed] | <code>boolean</code> | <code>false</code> | Switch for framing in a window |
| [options.cloning] | <code>boolean</code> | <code>true</code> | Allow cloning of passed element(s) |
| [options.backClose] | <code>boolean</code> | <code>true</code> | Switch for closing on tap/click outside the content |
| [options.keyboard] | <code>boolean</code> | <code>true</code> | Switch for keyboard navigation |
| [options.close] | <code>object</code> |  | Custom parameters for close button |
| [options.onOpen] | <code>function</code> |  | onOpen callback, fires when open modal |
| [options.onClose] | <code>function</code> |  | onOpen callback, fires when close modal |
| [options.onShow] | <code>function</code> |  | onShow callback, fires when show modal, after it openes |
| [options.onHide] | <code>function</code> |  | onHide callback, fires when hide modal, before it closes |
| [options.onContent] | <code>function</code> |  | onContent callback, fires when a content will be shown |

**Example**  
```js
var modal = new ensemble.Modal(document.getElementById('inline-content-to-display'), {});
modal.open();
modal.close();
```
<a name="module_ensemble..Modal+_defaults"></a>

#### modal.\_defaults() ⇒ <code>object</code>
Options object default properties.

**Kind**: instance method of [<code>Modal</code>](#module_ensemble..Modal)  
<a name="module_ensemble..Modal+_bindings"></a>

#### modal.\_bindings()
Methods binding.

**Kind**: instance method of [<code>Modal</code>](#module_ensemble..Modal)  
<a name="module_ensemble..Modal+generator"></a>

#### modal.generator()
The generator creates the container box with almost everything the component needs.

**Kind**: instance method of [<code>Modal</code>](#module_ensemble..Modal)  
**Todo**

- [ ] TODO

<a name="module_ensemble..Modal+populate"></a>

#### modal.populate(target)
In this stage the component is populated with all the content progeny.

**Kind**: instance method of [<code>Modal</code>](#module_ensemble..Modal)  
**Todo**

- [ ] TODO


| Param | Type | Description |
| --- | --- | --- |
| target | <code>Element</code> | The element that is invoking |

<a name="module_ensemble..Modal+resume"></a>

#### modal.resume(target)
Processing when the component is resumed.

**Kind**: instance method of [<code>Modal</code>](#module_ensemble..Modal)  
**Todo**

- [ ] TODO


| Param | Type | Description |
| --- | --- | --- |
| target | <code>Element</code> | The element that is invoking |

<a name="module_ensemble..Modal+content"></a>

#### modal.content(node, clone) ⇒ <code>Element</code>
The single content.

**Kind**: instance method of [<code>Modal</code>](#module_ensemble..Modal)  
**Returns**: <code>Element</code> - wrap - The wrapped (cloned) Element node  
**Todo**

- [ ] TODO


| Param | Type | Description |
| --- | --- | --- |
| node | <code>Element</code> | A valid Element node |
| clone | <code>boolean</code> | Eventually clones Element nodes |

<a name="module_ensemble..Modal+destroy"></a>

#### modal.destroy()
**Kind**: instance method of [<code>Modal</code>](#module_ensemble..Modal)  
**Todo**

- [ ] TODO

<a name="module_ensemble..Modal+open"></a>

#### modal.open(e, target)
Opens the modal.

**Kind**: instance method of [<code>Modal</code>](#module_ensemble..Modal)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | An Event |
| target | <code>Element</code> | The element that is invoking |

<a name="module_ensemble..Modal+close"></a>

#### modal.close(e, target)
Closes the modal.

**Kind**: instance method of [<code>Modal</code>](#module_ensemble..Modal)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | An Event |
| target | <code>Element</code> | The element that is invoking |

<a name="module_ensemble..Modal+show"></a>

#### modal.show(target)
Shows the modal.

**Kind**: instance method of [<code>Modal</code>](#module_ensemble..Modal)  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Element</code> | The element that is invoking |

<a name="module_ensemble..Modal+hide"></a>

#### modal.hide(target)
Hides the modal.

**Kind**: instance method of [<code>Modal</code>](#module_ensemble..Modal)  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Element</code> | The element that is invoking |

<a name="module_ensemble..Modal+backx"></a>

#### modal.backx(e)
Handles the close on tap/click outside the content.

**Kind**: instance method of [<code>Modal</code>](#module_ensemble..Modal)  
**Todo**

- [ ] test


| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | An Event |

<a name="module_ensemble..Modal+keyboard"></a>

#### modal.keyboard(e)
Captures keyboard codes corresponding to functions to be triggered.

**Kind**: instance method of [<code>Modal</code>](#module_ensemble..Modal)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | An Event |

