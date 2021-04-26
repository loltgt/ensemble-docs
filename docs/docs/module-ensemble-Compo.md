---
title: ensemble.Compo
slug: /module-ensemble-Compo
---
<a name="module_ensemble"></a>

## ensemble

* [ensemble](#module_ensemble)
    * [~Compo](#module_ensemble..Compo) ⇐ <code>\_composition</code>
        * _instance_
            * [.node](#module_ensemble..Compo+node) ⇒ <code>Element</code>
            * [.parent](#module_ensemble..Compo+parent) ⇒ <code>ensemble.Compo</code>
            * [.previous](#module_ensemble..Compo+previous) ⇒ <code>ensemble.Compo</code>
            * [.next](#module_ensemble..Compo+next) ⇒ <code>ensemble.Compo</code>
            * [.classList](#module_ensemble..Compo+classList) ⇒ <code>DOMTokenList</code>
            * [._Symbol.toStringTag](#module_ensemble..Compo+_Symbol.toStringTag) ⇒ <code>string</code>
            * [._element(ns, tag, name, props, [options], [elementNS])](#module_ensemble..Compo+_element)
            * [.hasAttr(attr)](#module_ensemble..Compo+hasAttr) ⇒ <code>boolean</code>
            * [.getAttr(attr)](#module_ensemble..Compo+getAttr) ⇒ <code>string</code>
            * [.setAttr(attr, value)](#module_ensemble..Compo+setAttr)
            * [.delAttr(attr)](#module_ensemble..Compo+delAttr)
            * [.getStyle(prop)](#module_ensemble..Compo+getStyle) ⇒ <code>mixed</code>
            * [.show()](#module_ensemble..Compo+show)
            * [.hide()](#module_ensemble..Compo+hide)
            * [.enable()](#module_ensemble..Compo+enable)
            * [.disable()](#module_ensemble..Compo+disable)
        * _static_
            * [.isCompo()](#module_ensemble..Compo.isCompo) ⇒ <code>boolean</code>
    * [~DENIED_PROPS](#module_ensemble..DENIED_PROPS) : <code>RegExp</code>

<a name="module_ensemble..Compo"></a>

### ensemble~Compo ⇐ <code>\_composition</code>
Compo is a composition element with shorthands method and utils.

It is a wrapper around an Element node [DOM].
It could be used as base for abstraction of a custom component element.

**Kind**: inner class of [<code>ensemble</code>](#module_ensemble)  
**Extends**: <code>\_composition</code>  

* [~Compo](#module_ensemble..Compo) ⇐ <code>\_composition</code>
    * _instance_
        * [.node](#module_ensemble..Compo+node) ⇒ <code>Element</code>
        * [.parent](#module_ensemble..Compo+parent) ⇒ <code>ensemble.Compo</code>
        * [.previous](#module_ensemble..Compo+previous) ⇒ <code>ensemble.Compo</code>
        * [.next](#module_ensemble..Compo+next) ⇒ <code>ensemble.Compo</code>
        * [.classList](#module_ensemble..Compo+classList) ⇒ <code>DOMTokenList</code>
        * [._Symbol.toStringTag](#module_ensemble..Compo+_Symbol.toStringTag) ⇒ <code>string</code>
        * [._element(ns, tag, name, props, [options], [elementNS])](#module_ensemble..Compo+_element)
        * [.hasAttr(attr)](#module_ensemble..Compo+hasAttr) ⇒ <code>boolean</code>
        * [.getAttr(attr)](#module_ensemble..Compo+getAttr) ⇒ <code>string</code>
        * [.setAttr(attr, value)](#module_ensemble..Compo+setAttr)
        * [.delAttr(attr)](#module_ensemble..Compo+delAttr)
        * [.getStyle(prop)](#module_ensemble..Compo+getStyle) ⇒ <code>mixed</code>
        * [.show()](#module_ensemble..Compo+show)
        * [.hide()](#module_ensemble..Compo+hide)
        * [.enable()](#module_ensemble..Compo+enable)
        * [.disable()](#module_ensemble..Compo+disable)
    * _static_
        * [.isCompo()](#module_ensemble..Compo.isCompo) ⇒ <code>boolean</code>

<a name="module_ensemble..Compo+node"></a>

#### compo.node ⇒ <code>Element</code>
Getter for node property, intended as the Element node inside this composition.
Note that a direct access to the node is discouraged.

**Kind**: instance property of [<code>Compo</code>](#module_ensemble..Compo)  
<a name="module_ensemble..Compo+parent"></a>

#### compo.parent ⇒ <code>ensemble.Compo</code>
Getter for parent property, intended as the parent compo of this composition.

**Kind**: instance property of [<code>Compo</code>](#module_ensemble..Compo)  
<a name="module_ensemble..Compo+previous"></a>

#### compo.previous ⇒ <code>ensemble.Compo</code>
Getter for previous property, intended as the previous sibling of this composition.

**Kind**: instance property of [<code>Compo</code>](#module_ensemble..Compo)  
<a name="module_ensemble..Compo+next"></a>

#### compo.next ⇒ <code>ensemble.Compo</code>
Getter for next property, intended as the next sibling of this composition.

**Kind**: instance property of [<code>Compo</code>](#module_ensemble..Compo)  
<a name="module_ensemble..Compo+classList"></a>

#### compo.classList ⇒ <code>DOMTokenList</code>
Getter for classList property, intended as the classList of the Element node inside this composition.

**Kind**: instance property of [<code>Compo</code>](#module_ensemble..Compo)  
**See**: DOMTokenList  
<a name="module_ensemble..Compo+_Symbol.toStringTag"></a>

#### compo.\_Symbol.toStringTag ⇒ <code>string</code>
Getter for Symbol property, returns the symbolic name for ensemble.Compo class.

**Kind**: instance property of [<code>Compo</code>](#module_ensemble..Compo)  
**See**: Symbol.toStringTag()  
**Todo**

- [ ] return undef
- [ ] backward compatibility

<a name="module_ensemble..Compo+_element"></a>

#### compo.\_element(ns, tag, name, props, [options], [elementNS])
Element wrapper.

**Kind**: instance method of [<code>Compo</code>](#module_ensemble..Compo)  
**See**

- document.createElement()
- document.createElementNS()


| Param | Type | Description |
| --- | --- | --- |
| ns | <code>string</code> | Component namespace |
| tag | <code>string</code> | The element Node tag -or- component name |
| name | <code>string</code> | Name for composition, used for CSS className |
| props | <code>object</code> | Properties for composition |
| [options] | <code>object</code> | An optional ElementCreationOptions object [DOM] |
| [elementNS] | <code>object</code> | Options for namespaced Element node [DOM] |
| [elementNS.namespaceURI] | <code>string</code> | A valid namespace URI |
| [elementNS.qualifiedName] | <code>string</code> | A valid qualified name |

<a name="module_ensemble..Compo+hasAttr"></a>

#### compo.hasAttr(attr) ⇒ <code>boolean</code>
Check for an attribute of this composition.

**Kind**: instance method of [<code>Compo</code>](#module_ensemble..Compo)  
**See**: Element.hasAttribute()  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>string</code> | An attribute |

<a name="module_ensemble..Compo+getAttr"></a>

#### compo.getAttr(attr) ⇒ <code>string</code>
Gets an attribute from this composition.

**Kind**: instance method of [<code>Compo</code>](#module_ensemble..Compo)  
**See**: Element.getAttribute()  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>string</code> | An attribute |

<a name="module_ensemble..Compo+setAttr"></a>

#### compo.setAttr(attr, value)
Sets an attribute in this composition.

**Kind**: instance method of [<code>Compo</code>](#module_ensemble..Compo)  
**See**: Element.setAttribute()  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>string</code> | An attribute |
| value | <code>string</code> | The value |

<a name="module_ensemble..Compo+delAttr"></a>

#### compo.delAttr(attr)
Removes an attribute from this composition.

**Kind**: instance method of [<code>Compo</code>](#module_ensemble..Compo)  
**See**: Element.removeAttribute()  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>string</code> | An attribute |

<a name="module_ensemble..Compo+getStyle"></a>

#### compo.getStyle(prop) ⇒ <code>mixed</code>
Gets a current style property.

**Kind**: instance method of [<code>Compo</code>](#module_ensemble..Compo)  
**See**: window.getComputedStyle()  

| Param | Type | Description |
| --- | --- | --- |
| prop | <code>string</code> | A style property |

<a name="module_ensemble..Compo+show"></a>

#### compo.show()
Time to show this composition.

**Kind**: instance method of [<code>Compo</code>](#module_ensemble..Compo)  
<a name="module_ensemble..Compo+hide"></a>

#### compo.hide()
Time to hide this composition.

**Kind**: instance method of [<code>Compo</code>](#module_ensemble..Compo)  
<a name="module_ensemble..Compo+enable"></a>

#### compo.enable()
Util to set attribute disabled to true

**Kind**: instance method of [<code>Compo</code>](#module_ensemble..Compo)  
<a name="module_ensemble..Compo+disable"></a>

#### compo.disable()
Util to set attribute disabled to false

**Kind**: instance method of [<code>Compo</code>](#module_ensemble..Compo)  
<a name="module_ensemble..Compo.isCompo"></a>

#### Compo.isCompo() ⇒ <code>boolean</code>
Check if passed object is an ensemble.Compo instance.

**Kind**: static method of [<code>Compo</code>](#module_ensemble..Compo)  
**Todo**

- [ ] backward compatibility

<a name="module_ensemble..DENIED_PROPS"></a>

### ensemble~DENIED\_PROPS : <code>RegExp</code>
Constructor method.

**Kind**: inner constant of [<code>ensemble</code>](#module_ensemble)  
**Todo**

- [ ] props.dataset


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| ns | <code>string</code> |  | Component namespace |
| [tag] | <code>string</code> | <code>&quot;&#x27;div&#x27;&quot;</code> | The [DOM] Element node tag -or- component name |
| [name] | <code>string</code> \| <code>Array.&lt;string&gt;</code> |  | The composition name, used for CSS className |
| [props] | <code>object</code> |  | Properties for composition |
| [options] | <code>object</code> |  | An optional ElementCreationOptions object [DOM] |
| [elementNS] | <code>object</code> |  | Options for namespaced Element node [DOM] |
| [elementNS.namespaceURI] | <code>string</code> |  | A valid namespace URI |
| [elementNS.qualifiedName] | <code>string</code> |  | A valid qualified name |

