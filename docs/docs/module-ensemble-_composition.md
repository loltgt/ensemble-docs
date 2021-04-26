---
title: ensemble._composition
slug: /module-ensemble-_composition
---
## Classes

<dl>
<dt><a href="#_composition">_composition</a></dt>
<dd><p>Base class for ensemble.Compo and ensemble.Snap composition elements.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#REJECTED_TAGS">REJECTED_TAGS</a> ⇒ <code>boolean</code></dt>
<dd><p>Inject an element node inside this composition.
Note that any inner element contained will be removed.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#upCallback">upCallback</a> : <code>function</code></dt>
<dd><p>up callback</p>
</dd>
</dl>

<a name="_composition"></a>

## *\_composition*
Base class for ensemble.Compo and ensemble.Snap composition elements.

**Kind**: global abstract class  

* *[_composition](#_composition)*
    * *[.children](#_composition+children) ⇒ <code>array</code>*
    * *[.first](#_composition+first) ⇒ <code>ensemble.Compo</code>*
    * *[.last](#_composition+last) ⇒ <code>ensemble.Compo</code>*
    * *[._renderer()](#_composition+_renderer)*
    * *[.install(root, cb)](#_composition+install) ⇒ <code>boolean</code>*
    * *[.uninstall(root, cb)](#_composition+uninstall) ⇒ <code>boolean</code>*
    * *[.up(pholder, cb)](#_composition+up) ⇒ <code>boolean</code>*
    * *[.append(compo)](#_composition+append) ⇒ <code>boolean</code>*
    * *[.prepend(compo)](#_composition+prepend) ⇒ <code>boolean</code>*
    * *[.remove(compo)](#_composition+remove) ⇒ <code>boolean</code>*
    * *[.empty()](#_composition+empty)*

<a name="_composition+children"></a>

### *_composition.children ⇒ <code>array</code>*
Getter for children property, intended as children compo of this composition.

**Kind**: instance property of [<code>\_composition</code>](#_composition)  
<a name="_composition+first"></a>

### *_composition.first ⇒ <code>ensemble.Compo</code>*
Getter for first property, intended as the first compo contained inside of this composition.

**Kind**: instance property of [<code>\_composition</code>](#_composition)  
<a name="_composition+last"></a>

### *_composition.last ⇒ <code>ensemble.Compo</code>*
Getter for last property, intended as the last compo contained inside of this composition.

**Kind**: instance property of [<code>\_composition</code>](#_composition)  
<a name="_composition+_renderer"></a>

### *_composition.\_renderer()*
Element renderer.

**Kind**: instance method of [<code>\_composition</code>](#_composition)  
**Todo**

- [ ] TODO

<a name="_composition+install"></a>

### *_composition.install(root, cb) ⇒ <code>boolean</code>*
Install the composition.

**Kind**: instance method of [<code>\_composition</code>](#_composition)  
**See**: Node.appendChild()  

| Param | Type | Description |
| --- | --- | --- |
| root | <code>Element</code> | A valid Element node |
| cb | <code>function</code> | A function callback |

<a name="_composition+uninstall"></a>

### *_composition.uninstall(root, cb) ⇒ <code>boolean</code>*
Uninstall the composition.

**Kind**: instance method of [<code>\_composition</code>](#_composition)  
**See**: Node.removeChild()  

| Param | Type | Description |
| --- | --- | --- |
| root | <code>Element</code> | A valid Element node |
| cb | <code>function</code> | A function callback |

<a name="_composition+up"></a>

### *_composition.up(pholder, cb) ⇒ <code>boolean</code>*
Loads the composition replacing a placeholder element.

**Kind**: instance method of [<code>\_composition</code>](#_composition)  
**See**: Node.replaceWith()  
**Todo**

- [ ] backward compatibility


| Param | Type | Description |
| --- | --- | --- |
| pholder | <code>Element</code> | A valid Element node |
| cb | [<code>upCallback</code>](#upCallback) | A function callback |

<a name="_composition+append"></a>

### *_composition.append(compo) ⇒ <code>boolean</code>*
Appends a compo inside this composition.

**Kind**: instance method of [<code>\_composition</code>](#_composition)  
**See**: Node.appendChild()  

| Param | Type | Description |
| --- | --- | --- |
| compo | <code>ensemble.Compo</code> | An ensemble.Compo composition |

<a name="_composition+prepend"></a>

### *_composition.prepend(compo) ⇒ <code>boolean</code>*
Prepends a compo inside this composition.

**Kind**: instance method of [<code>\_composition</code>](#_composition)  
**See**: Node.prependChild()  

| Param | Type | Description |
| --- | --- | --- |
| compo | <code>ensemble.Compo</code> | An ensemble.Compo composition |

<a name="_composition+remove"></a>

### *_composition.remove(compo) ⇒ <code>boolean</code>*
Removes a compo from this composition.

**Kind**: instance method of [<code>\_composition</code>](#_composition)  
**See**: Node.removeChild()  

| Param | Type | Description |
| --- | --- | --- |
| compo | <code>ensemble.Compo</code> | An ensemble.Compo composition |

<a name="_composition+empty"></a>

### *_composition.empty()*
Empty this composition.
Any inner element contained will be removed.

**Kind**: instance method of [<code>\_composition</code>](#_composition)  
<a name="REJECTED_TAGS"></a>

## REJECTED\_TAGS ⇒ <code>boolean</code>
Inject an element node inside this composition.
Note that any inner element contained will be removed.

**Kind**: global constant  
**See**: Node.appendChild()  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Element</code> | A valid Element node |

<a name="upCallback"></a>

## upCallback : <code>function</code>
up callback

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| compo | <code>ensemble.Compo</code> | 

