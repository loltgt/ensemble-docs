---
title: ensemble.Snap
slug: /module-ensemble-Snap
---
<a name="module_ensemble"></a>

## ensemble

* [ensemble](#module_ensemble)
    * [~Snap](#module_ensemble..Snap) ⇐ <code>\_composition</code>
        * [new Snap(ns)](#new_module_ensemble..Snap_new)
        * _instance_
            * [._Symbol.toStringTag](#module_ensemble..Snap+_Symbol.toStringTag) ⇒ <code>string</code>
            * [._element(ns)](#module_ensemble..Snap+_element)
        * _static_
            * [.isSnap()](#module_ensemble..Snap.isSnap) ⇒ <code>boolean</code>

<a name="module_ensemble..Snap"></a>

### ensemble~Snap ⇐ <code>\_composition</code>
Snap is an empty skeleton composition with shorthands method and utils.

It is a wrapper around a DocumentFragment [DOM].
It could be used as base for abstraction of a custom component element.

**Kind**: inner class of [<code>ensemble</code>](#module_ensemble)  
**Extends**: <code>\_composition</code>  

* [~Snap](#module_ensemble..Snap) ⇐ <code>\_composition</code>
    * [new Snap(ns)](#new_module_ensemble..Snap_new)
    * _instance_
        * [._Symbol.toStringTag](#module_ensemble..Snap+_Symbol.toStringTag) ⇒ <code>string</code>
        * [._element(ns)](#module_ensemble..Snap+_element)
    * _static_
        * [.isSnap()](#module_ensemble..Snap.isSnap) ⇒ <code>boolean</code>

<a name="new_module_ensemble..Snap_new"></a>

#### new Snap(ns)
Constructor method.


| Param | Type | Description |
| --- | --- | --- |
| ns | <code>string</code> | Component namespace |

**Example**  
```js
new ensemble.Snap('namespace-of-my-foo-component');
```
<a name="module_ensemble..Snap+_Symbol.toStringTag"></a>

#### snap.\_Symbol.toStringTag ⇒ <code>string</code>
Getter for Symbol property, returns the symbolic name for ensemble.Snap class.

**Kind**: instance property of [<code>Snap</code>](#module_ensemble..Snap)  
**See**: Symbol.toStringTag  
**Todo**

- [ ] return undef
- [ ] backward compatibility

<a name="module_ensemble..Snap+_element"></a>

#### snap.\_element(ns)
Element wrapper.

**Kind**: instance method of [<code>Snap</code>](#module_ensemble..Snap)  
**See**: document.createDocumentFragment()  

| Param | Type | Description |
| --- | --- | --- |
| ns | <code>string</code> | Component namespace |

<a name="module_ensemble..Snap.isSnap"></a>

#### Snap.isSnap() ⇒ <code>boolean</code>
Check if passed object is an ensemble.Snap instance.

**Kind**: static method of [<code>Snap</code>](#module_ensemble..Snap)  
**Todo**

- [ ] backward compatibility

