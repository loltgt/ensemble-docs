---
title: ensemble.Data
slug: /module-ensemble-Data
---
<a name="module_ensemble"></a>

## ensemble

* [ensemble](#module_ensemble)
    * [~Data](#module_ensemble..Data)
        * [new Data(ns, obj)](#new_module_ensemble..Data_new)
        * _instance_
            * [._Symbol.toStringTag](#module_ensemble..Data+_Symbol.toStringTag) ⇒ <code>string</code>
            * [.compo(tag, name, props, defer, fresh, stale)](#module_ensemble..Data+compo) ⇒ <code>mixed</code>
            * [.render(slot)](#module_ensemble..Data+render)
            * [.stale(slot)](#module_ensemble..Data+stale)
            * [.reflow(slot, force)](#module_ensemble..Data+reflow)
        * _static_
            * [.isData()](#module_ensemble..Data.isData) ⇒ <code>boolean</code>

<a name="module_ensemble..Data"></a>

### ensemble~Data
Data is a multi-purpose utility object.

It could be used as a wrapper around a Compo composition, 
this object can store any kind of properties.

**Kind**: inner class of [<code>ensemble</code>](#module_ensemble)  

* [~Data](#module_ensemble..Data)
    * [new Data(ns, obj)](#new_module_ensemble..Data_new)
    * _instance_
        * [._Symbol.toStringTag](#module_ensemble..Data+_Symbol.toStringTag) ⇒ <code>string</code>
        * [.compo(tag, name, props, defer, fresh, stale)](#module_ensemble..Data+compo) ⇒ <code>mixed</code>
        * [.render(slot)](#module_ensemble..Data+render)
        * [.stale(slot)](#module_ensemble..Data+stale)
        * [.reflow(slot, force)](#module_ensemble..Data+reflow)
    * _static_
        * [.isData()](#module_ensemble..Data.isData) ⇒ <code>boolean</code>

<a name="new_module_ensemble..Data_new"></a>

#### new Data(ns, obj)
Constructor method.


| Param | Type | Description |
| --- | --- | --- |
| ns | <code>string</code> | Data namespace |
| obj | <code>object</code> | A starter Object |

**Example**  
```js
new ensemble.Data('namespace-of-my-foo-component', { compo: ensemble.Compo, foo: 'a text string', fooObj: 'an object' });
```
<a name="module_ensemble..Data+_Symbol.toStringTag"></a>

#### data.\_Symbol.toStringTag ⇒ <code>string</code>
Getter for Symbol property, returns the symbolic name for ensemble.Data class.

**Kind**: instance property of [<code>Data</code>](#module_ensemble..Data)  
**See**: Symbol.toStringTag  
**Todo**

- [ ] return undef
- [ ] backward compatibility

<a name="module_ensemble..Data+compo"></a>

#### data.compo(tag, name, props, defer, fresh, stale) ⇒ <code>mixed</code>
The compo method is a utility render.

When you create a composition with this method, it will create a Compo composition or simply an Object placeholder.
With the defer render you can have it rendered in place, refresh, or freeze.

**Kind**: instance method of [<code>Data</code>](#module_ensemble..Data)  
**Returns**: <code>mixed</code> - compo - An ensemble.Compo element -or- an Object placeholder  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| tag | <code>string</code> |  | Element node tag -or- component name |
| name | <code>string</code> |  |  |
| props | <code>object</code> |  | Properties for Element node -or- component |
| defer | <code>boolean</code> | <code>false</code> | Defer render for composition |
| fresh | <code>mixed</code> | <code>false</code> | A function callback, called when is loaded the compo |
| stale | <code>mixed</code> | <code>false</code> | A function callback, called when is unloaded the compo |

<a name="module_ensemble..Data+render"></a>

#### data.render(slot)
Renderizes a composition, passed by reference.

**Kind**: instance method of [<code>Data</code>](#module_ensemble..Data)  

| Param | Type | Description |
| --- | --- | --- |
| slot | <code>mixed</code> | Reference of the element that will be rendered |

<a name="module_ensemble..Data+stale"></a>

#### data.stale(slot)
Freezes a composition, passed by reference.

**Kind**: instance method of [<code>Data</code>](#module_ensemble..Data)  

| Param | Type | Description |
| --- | --- | --- |
| slot | <code>mixed</code> | Reference of the element that will be rendered |

<a name="module_ensemble..Data+reflow"></a>

#### data.reflow(slot, force)
Refresh a composition, passed by reference.

**Kind**: instance method of [<code>Data</code>](#module_ensemble..Data)  

| Param | Type | Description |
| --- | --- | --- |
| slot | <code>mixed</code> | Reference of the element that will be rendered. |
| force | <code>boolean</code> | It forces the reflow. |

<a name="module_ensemble..Data.isData"></a>

#### Data.isData() ⇒ <code>boolean</code>
Check if passed object is an ensemble.Data instance.

**Kind**: static method of [<code>Data</code>](#module_ensemble..Data)  
**Todo**

- [ ] backward compatibility

