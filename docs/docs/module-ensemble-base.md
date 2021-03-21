---
title: ensemble.base
slug: /module-ensemble-base
---
<a name="module_ensemble"></a>

## ensemble

* [ensemble](#module_ensemble)
    * *[~base](#module_ensemble..base)*
        * *[new base()](#new_module_ensemble..base_new)*
        * *[.defaults(defaults, options)](#module_ensemble..base+defaults) ⇒ <code>object</code>*
        * *[.compo(ns, tag, name)](#module_ensemble..base+compo) ⇒ <code>mixed</code>*
        * *[.data(obj)](#module_ensemble..base+data) ⇒ <code>mixed</code>*
        * *[.event(obj)](#module_ensemble..base+event) ⇒ <code>mixed</code>*
        * *[.selector(query, node, all)](#module_ensemble..base+selector) ⇒ <code>mixed</code>*
        * *[.appendNode(parent, node)](#module_ensemble..base+appendNode) ⇒ <code>boolean</code>*
        * *[.prependNode(parent, node)](#module_ensemble..base+prependNode) ⇒ <code>boolean</code>*
        * *[.removeNode(parent, node)](#module_ensemble..base+removeNode) ⇒ <code>boolean</code>*
        * *[.cloneNode(node, deep)](#module_ensemble..base+cloneNode) ⇒ <code>boolean</code>*
        * *[.hasAttr(node, attr)](#module_ensemble..base+hasAttr) ⇒ <code>boolean</code>*
        * *[.getAttr(node, attr)](#module_ensemble..base+getAttr) ⇒ <code>string</code>*
        * *[.setAttr(node, attr, value)](#module_ensemble..base+setAttr)*
        * *[.delAttr(node, attr)](#module_ensemble..base+delAttr)*
        * *[.binds(method)](#module_ensemble..base+binds) ⇒ <code>function</code>*
        * *[.delay(func, node, dtime)](#module_ensemble..base+delay)*
        * *[.timing(node, prop)](#module_ensemble..base+timing) ⇒ <code>int</code>*

<a name="module_ensemble..base"></a>

### *ensemble~base*
A base class for ensemble components.

**Kind**: inner abstract class of [<code>ensemble</code>](#module_ensemble)  

* *[~base](#module_ensemble..base)*
    * *[new base()](#new_module_ensemble..base_new)*
    * *[.defaults(defaults, options)](#module_ensemble..base+defaults) ⇒ <code>object</code>*
    * *[.compo(ns, tag, name)](#module_ensemble..base+compo) ⇒ <code>mixed</code>*
    * *[.data(obj)](#module_ensemble..base+data) ⇒ <code>mixed</code>*
    * *[.event(obj)](#module_ensemble..base+event) ⇒ <code>mixed</code>*
    * *[.selector(query, node, all)](#module_ensemble..base+selector) ⇒ <code>mixed</code>*
    * *[.appendNode(parent, node)](#module_ensemble..base+appendNode) ⇒ <code>boolean</code>*
    * *[.prependNode(parent, node)](#module_ensemble..base+prependNode) ⇒ <code>boolean</code>*
    * *[.removeNode(parent, node)](#module_ensemble..base+removeNode) ⇒ <code>boolean</code>*
    * *[.cloneNode(node, deep)](#module_ensemble..base+cloneNode) ⇒ <code>boolean</code>*
    * *[.hasAttr(node, attr)](#module_ensemble..base+hasAttr) ⇒ <code>boolean</code>*
    * *[.getAttr(node, attr)](#module_ensemble..base+getAttr) ⇒ <code>string</code>*
    * *[.setAttr(node, attr, value)](#module_ensemble..base+setAttr)*
    * *[.delAttr(node, attr)](#module_ensemble..base+delAttr)*
    * *[.binds(method)](#module_ensemble..base+binds) ⇒ <code>function</code>*
    * *[.delay(func, node, dtime)](#module_ensemble..base+delay)*
    * *[.timing(node, prop)](#module_ensemble..base+timing) ⇒ <code>int</code>*

<a name="new_module_ensemble..base_new"></a>

#### *new base()*
Constructor method.

<a name="module_ensemble..base+defaults"></a>

#### *base.defaults(defaults, options) ⇒ <code>object</code>*
Creates an options Object from a defaults object of pre-defined properties.

Note it supports only the first level of depth.

**Kind**: instance method of [<code>base</code>](#module_ensemble..base)  

| Param | Type | Description |
| --- | --- | --- |
| defaults | <code>object</code> | The default options Object |
| options | <code>object</code> | An options Object that would extends |

<a name="module_ensemble..base+compo"></a>

#### *base.compo(ns, tag, name) ⇒ <code>mixed</code>*
Shorthand method for ensemble.Compo class.

When passed the first argument it makes a new Compo instance, 
otherwise it returns a reference to the Compo class.

//global ensemble.Compo

**Kind**: instance method of [<code>base</code>](#module_ensemble..base)  

| Param | Type | Description |
| --- | --- | --- |
| ns | <code>string</code> | Composition namespace |
| tag | <code>string</code> | The [DOM] Element node tag -or- component name |
| name | <code>string</code> |  |

<a name="module_ensemble..base+data"></a>

#### *base.data(obj) ⇒ <code>mixed</code>*
Shorthand method for ensemble.Data class.

When passed the first argument it makes a new Data instance, 
otherwise it returns a reference to the Data class.

//global ensemble.Data

**Kind**: instance method of [<code>base</code>](#module_ensemble..base)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | A starter Object |

<a name="module_ensemble..base+event"></a>

#### *base.event(obj) ⇒ <code>mixed</code>*
Shorthand method for ensemble.Event class.

When the passed first argument is a string it makes a new Event instance, 
if you pass an Event as the first argument, a preventDefault and blur will be performed, 
otherwise it returns a reference to the Event class.

//global ensemble.Event

**Kind**: instance method of [<code>base</code>](#module_ensemble..base)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | A starter Object |

<a name="module_ensemble..base+selector"></a>

#### *base.selector(query, node, all) ⇒ <code>mixed</code>*
Shortcut to querySelectorAll() and querySelector() [DOM].

**Kind**: instance method of [<code>base</code>](#module_ensemble..base)  
**Returns**: <code>mixed</code> - - Element -or- ElementCollection  
**See**

- Element.querySelectorAll()
- Element.querySelector()

//global document


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| query | <code>string</code> |  | A text query |
| node | <code>Element</code> |  | An Element node where find |
| all | <code>boolean</code> | <code>false</code> | Find single or multiple elements |

<a name="module_ensemble..base+appendNode"></a>

#### *base.appendNode(parent, node) ⇒ <code>boolean</code>*
Shortcut to appendChild() [DOM].

**Kind**: instance method of [<code>base</code>](#module_ensemble..base)  
**See**: Element.appendChild()  

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>Element</code> | An Element parent |
| node | <code>Element</code> | An Element node to append |

<a name="module_ensemble..base+prependNode"></a>

#### *base.prependNode(parent, node) ⇒ <code>boolean</code>*
Shortcut to prependChild() [DOM].

**Kind**: instance method of [<code>base</code>](#module_ensemble..base)  
**See**: Element.prependChild()  

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>Element</code> | An Element parent |
| node | <code>Element</code> | An Element node to prepend |

<a name="module_ensemble..base+removeNode"></a>

#### *base.removeNode(parent, node) ⇒ <code>boolean</code>*
Shortcut to cloneNode() [DOM].

**Kind**: instance method of [<code>base</code>](#module_ensemble..base)  
**See**: Element.removeNode()  

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>Element</code> | An Element parent |
| node | <code>Element</code> | An Element node to remove |

<a name="module_ensemble..base+cloneNode"></a>

#### *base.cloneNode(node, deep) ⇒ <code>boolean</code>*
Shortcut to Element.cloneNode() [DOM].

**Kind**: instance method of [<code>base</code>](#module_ensemble..base)  
**See**: Element.cloneNode()  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| node | <code>Element</code> |  | An Element node to clone |
| deep | <code>boolean</code> | <code>false</code> | Clone also all children inside the Element node |

<a name="module_ensemble..base+hasAttr"></a>

#### *base.hasAttr(node, attr) ⇒ <code>boolean</code>*
Shortcut to Element.hasAttribute() [DOM].

**Kind**: instance method of [<code>base</code>](#module_ensemble..base)  
**See**: Element.hasAttribute()  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Element</code> | An Element node |
| attr | <code>string</code> | An attribute |

<a name="module_ensemble..base+getAttr"></a>

#### *base.getAttr(node, attr) ⇒ <code>string</code>*
Shortcut to Element.getAttribute() [DOM].

**Kind**: instance method of [<code>base</code>](#module_ensemble..base)  
**See**: Element.getAttribute()  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Element</code> | An Element node |
| attr | <code>string</code> | An attribute |

<a name="module_ensemble..base+setAttr"></a>

#### *base.setAttr(node, attr, value)*
Shortcut to Element.setAttribute() [DOM].

**Kind**: instance method of [<code>base</code>](#module_ensemble..base)  
**See**: Element.setAttribute()  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Element</code> | An Element node |
| attr | <code>string</code> | An attribute |
| value | <code>string</code> | The value |

<a name="module_ensemble..base+delAttr"></a>

#### *base.delAttr(node, attr)*
Shortcut to Element.removettribute() [DOM].

**Kind**: instance method of [<code>base</code>](#module_ensemble..base)  
**See**: Element.removeAttribute()  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Element</code> | An Element node |
| attr | <code>string</code> | An attribute |

<a name="module_ensemble..base+binds"></a>

#### *base.binds(method) ⇒ <code>function</code>*
Creates a proxy function with bindings to instance and optionally an event.

**Kind**: instance method of [<code>base</code>](#module_ensemble..base)  
**Todo**

- [ ] untrusted method


| Param | Type | Description |
| --- | --- | --- |
| method | <code>function</code> | A method from the current instance |

<a name="module_ensemble..base+delay"></a>

#### *base.delay(func, node, dtime)*
Provides a delay and executes a callback function

**Kind**: instance method of [<code>base</code>](#module_ensemble..base)  
**See**: setTimeout()

//global window.setTimeout  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | A function callback |
| node | <code>mixed</code> | An Element node -or- an ensemble.Compo composition |
| dtime | <code>int</code> | A default value of time in milliseconds |

<a name="module_ensemble..base+timing"></a>

#### *base.timing(node, prop) ⇒ <code>int</code>*
Calculates a time, based on a time property of the style of an element

//global ensemble.Compo
//global window.getComputedStyle

**Kind**: instance method of [<code>base</code>](#module_ensemble..base)  
**Returns**: <code>int</code> - time - Number of time in milliseconds  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| node | <code>mixed</code> |  | An Element node -or- an ensemble.Compo composition |
| prop | <code>string</code> | <code>&quot;transitionDuration&quot;</code> | A style property |

