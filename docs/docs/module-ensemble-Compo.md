---
title: ensemble.Compo
slug: /module-ensemble-Compo
---
<a name="module_ensemble"></a>

## ensemble

* [ensemble](#module_ensemble)
    * [~Compo](#module_ensemble..Compo)
        * _instance_
            * [.node](#module_ensemble..Compo+node) ⇒ <code>Element</code>
            * [.parent](#module_ensemble..Compo+parent) ⇒ <code>ensemble.Compo</code>
            * [.children](#module_ensemble..Compo+children) ⇒ <code>array</code>
            * [.first](#module_ensemble..Compo+first) ⇒ <code>ensemble.Compo</code>
            * [.last](#module_ensemble..Compo+last) ⇒ <code>ensemble.Compo</code>
            * [.previous](#module_ensemble..Compo+previous) ⇒ <code>ensemble.Compo</code>
            * [.next](#module_ensemble..Compo+next) ⇒ <code>ensemble.Compo</code>
            * [.classList](#module_ensemble..Compo+classList) ⇒ <code>DOMTokenList</code>
            * [._Symbol.toStringTag](#module_ensemble..Compo+_Symbol.toStringTag) ⇒ <code>string</code>
            * [.install(root, cb)](#module_ensemble..Compo+install) ⇒ <code>boolean</code>
            * [.uninstall(root, cb)](#module_ensemble..Compo+uninstall) ⇒ <code>boolean</code>
            * [.up(pholder, cb)](#module_ensemble..Compo+up) ⇒ <code>boolean</code>
            * [.append(compo)](#module_ensemble..Compo+append) ⇒ <code>boolean</code>
            * [.prepend(compo)](#module_ensemble..Compo+prepend) ⇒ <code>boolean</code>
            * [.remove(compo)](#module_ensemble..Compo+remove) ⇒ <code>boolean</code>
            * [.replace(compo)](#module_ensemble..Compo+replace)
            * [.clone(deep)](#module_ensemble..Compo+clone)
            * [.inject(node)](#module_ensemble..Compo+inject) ⇒ <code>boolean</code>
            * [.empty()](#module_ensemble..Compo+empty)
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
    * [~_Symbol](#module_ensemble.._Symbol)
    * [~DENIED_PROPS](#module_ensemble..DENIED_PROPS) : <code>RegExp</code>

<a name="module_ensemble..Compo"></a>

### ensemble~Compo
Compo is a composition element with shorthands method and utils.

It is a wrapper around an Element node [DOM].
It could be used as a base for abstraction of a custom component element.

**Kind**: inner class of [<code>ensemble</code>](#module_ensemble)  

* [~Compo](#module_ensemble..Compo)
    * _instance_
        * [.node](#module_ensemble..Compo+node) ⇒ <code>Element</code>
        * [.parent](#module_ensemble..Compo+parent) ⇒ <code>ensemble.Compo</code>
        * [.children](#module_ensemble..Compo+children) ⇒ <code>array</code>
        * [.first](#module_ensemble..Compo+first) ⇒ <code>ensemble.Compo</code>
        * [.last](#module_ensemble..Compo+last) ⇒ <code>ensemble.Compo</code>
        * [.previous](#module_ensemble..Compo+previous) ⇒ <code>ensemble.Compo</code>
        * [.next](#module_ensemble..Compo+next) ⇒ <code>ensemble.Compo</code>
        * [.classList](#module_ensemble..Compo+classList) ⇒ <code>DOMTokenList</code>
        * [._Symbol.toStringTag](#module_ensemble..Compo+_Symbol.toStringTag) ⇒ <code>string</code>
        * [.install(root, cb)](#module_ensemble..Compo+install) ⇒ <code>boolean</code>
        * [.uninstall(root, cb)](#module_ensemble..Compo+uninstall) ⇒ <code>boolean</code>
        * [.up(pholder, cb)](#module_ensemble..Compo+up) ⇒ <code>boolean</code>
        * [.append(compo)](#module_ensemble..Compo+append) ⇒ <code>boolean</code>
        * [.prepend(compo)](#module_ensemble..Compo+prepend) ⇒ <code>boolean</code>
        * [.remove(compo)](#module_ensemble..Compo+remove) ⇒ <code>boolean</code>
        * [.replace(compo)](#module_ensemble..Compo+replace)
        * [.clone(deep)](#module_ensemble..Compo+clone)
        * [.inject(node)](#module_ensemble..Compo+inject) ⇒ <code>boolean</code>
        * [.empty()](#module_ensemble..Compo+empty)
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
Note that a direct access to the Element node is discouraged.

**Kind**: instance property of [<code>Compo</code>](#module_ensemble..Compo)  
<a name="module_ensemble..Compo+parent"></a>

#### compo.parent ⇒ <code>ensemble.Compo</code>
Getter for parent property, intended as the parent compo of this composition.

**Kind**: instance property of [<code>Compo</code>](#module_ensemble..Compo)  
<a name="module_ensemble..Compo+children"></a>

#### compo.children ⇒ <code>array</code>
Getter for children property, intended as children compo of this composition.

**Kind**: instance property of [<code>Compo</code>](#module_ensemble..Compo)  
<a name="module_ensemble..Compo+first"></a>

#### compo.first ⇒ <code>ensemble.Compo</code>
Getter for first property, intended as the first compo contained inside of this composition.

**Kind**: instance property of [<code>Compo</code>](#module_ensemble..Compo)  
<a name="module_ensemble..Compo+last"></a>

#### compo.last ⇒ <code>ensemble.Compo</code>
Getter for last property, intended as the last compo contained inside of this composition.

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
<a name="module_ensemble..Compo+_Symbol.toStringTag"></a>

#### compo.\_Symbol.toStringTag ⇒ <code>string</code>
Getter for Symbol property, returns the symbolic name for ensemble.Compo class.

**Kind**: instance property of [<code>Compo</code>](#module_ensemble..Compo)  
**See**: Symbol.toStringTag  
**Todo**

- [ ] return undef
- [ ] backward compatibility

<a name="module_ensemble..Compo+install"></a>

#### compo.install(root, cb) ⇒ <code>boolean</code>
Install the composition.

**Kind**: instance method of [<code>Compo</code>](#module_ensemble..Compo)  
**See**: HTMLElement.appendChild()  

| Param | Type | Description |
| --- | --- | --- |
| root | <code>Element</code> | A valid Element node |
| cb | <code>function</code> | A function callback |

<a name="module_ensemble..Compo+uninstall"></a>

#### compo.uninstall(root, cb) ⇒ <code>boolean</code>
Uninstall the composition.

**Kind**: instance method of [<code>Compo</code>](#module_ensemble..Compo)  
**See**: Element.removeChild()  

| Param | Type | Description |
| --- | --- | --- |
| root | <code>Element</code> | A valid Element node |
| cb | <code>function</code> | A function callback |

<a name="module_ensemble..Compo+up"></a>

#### compo.up(pholder, cb) ⇒ <code>boolean</code>
Loads the composition replacing a placeholder element.

**Kind**: instance method of [<code>Compo</code>](#module_ensemble..Compo)  
**See**: Element.replaceWith()  
**Todo**

- [ ] backward compatibility


| Param | Type | Description |
| --- | --- | --- |
| pholder | <code>Element</code> | A valid Element node |
| cb | <code>function</code> | A function callback |

<a name="module_ensemble..Compo+append"></a>

#### compo.append(compo) ⇒ <code>boolean</code>
Appends a compo inside this composition.

**Kind**: instance method of [<code>Compo</code>](#module_ensemble..Compo)  
**See**: Element.appendChild()  

| Param | Type | Description |
| --- | --- | --- |
| compo | <code>ensemble.Compo</code> | An ensemble.Compo composition |

<a name="module_ensemble..Compo+prepend"></a>

#### compo.prepend(compo) ⇒ <code>boolean</code>
Prepends a compo inside this composition.

**Kind**: instance method of [<code>Compo</code>](#module_ensemble..Compo)  
**See**: Element.prependChild()  

| Param | Type | Description |
| --- | --- | --- |
| compo | <code>ensemble.Compo</code> | An ensemble.Compo composition |

<a name="module_ensemble..Compo+remove"></a>

#### compo.remove(compo) ⇒ <code>boolean</code>
Removes a compo from this composition.

**Kind**: instance method of [<code>Compo</code>](#module_ensemble..Compo)  
**See**: Element.removeChild()  

| Param | Type | Description |
| --- | --- | --- |
| compo | <code>ensemble.Compo</code> | An ensemble.Compo composition |

<a name="module_ensemble..Compo+replace"></a>

#### compo.replace(compo)
Replace this composition with another compo.

**Kind**: instance method of [<code>Compo</code>](#module_ensemble..Compo)  
**Todo**

- [ ] TODO


| Param | Type | Description |
| --- | --- | --- |
| compo | <code>ensemble.Compo</code> | An ensemble.Compo composition |

<a name="module_ensemble..Compo+clone"></a>

#### compo.clone(deep)
Clones this composition.

**Kind**: instance method of [<code>Compo</code>](#module_ensemble..Compo)  
**Todo**

- [ ] TODO


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| deep | <code>boolean</code> | <code>false</code> | Clone also all compo inside this composition |

<a name="module_ensemble..Compo+inject"></a>

#### compo.inject(node) ⇒ <code>boolean</code>
Inject an element node inside this composition.
Note that any inner element contained will be removed.

**Kind**: instance method of [<code>Compo</code>](#module_ensemble..Compo)  
**See**: Element.appendChild()  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Element</code> | A valid Element node |

<a name="module_ensemble..Compo+empty"></a>

#### compo.empty()
Empty this composition.
Any inner element contained will be removed.

**Kind**: instance method of [<code>Compo</code>](#module_ensemble..Compo)  
**See**: Element.remove()  
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

//global window.getComputedStyle  

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

<a name="module_ensemble.._Symbol"></a>

### ensemble~\_Symbol
**Kind**: inner constant of [<code>ensemble</code>](#module_ensemble)  
**Todo**

- [ ] backward compatibility

<a name="module_ensemble..DENIED_PROPS"></a>

### ensemble~DENIED\_PROPS : <code>RegExp</code>
Constructor method.

**Kind**: inner constant of [<code>ensemble</code>](#module_ensemble)  
**See**

- document.createElement()
- document.createElementNS()

//global document.createElement

**Todo**

- [ ] tag, name


| Param | Type | Description |
| --- | --- | --- |
| ns | <code>string</code> | Composition namespace |
| tag | <code>string</code> | The [DOM] Element node tag -or- component name |
| name | <code>string</code> |  |
| props | <code>object</code> | Properties for Element node -or- component |

