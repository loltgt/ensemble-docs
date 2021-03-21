---
title: ensemble.Event
slug: /module-ensemble-Event
---
<a name="module_ensemble"></a>

## ensemble

* [ensemble](#module_ensemble)
    * [~Event](#module_ensemble..Event)
        * [new Event(ns, name, node)](#new_module_ensemble..Event_new)
        * _instance_
            * [._Symbol.toStringTag](#module_ensemble..Event+_Symbol.toStringTag) ⇒ <code>string</code>
            * [.add(handle, options)](#module_ensemble..Event+add)
            * [.remove(handle)](#module_ensemble..Event+remove)
        * _static_
            * [.isEvent()](#module_ensemble..Event.isEvent) ⇒ <code>boolean</code>
    * [~_Symbol](#module_ensemble.._Symbol)

<a name="module_ensemble..Event"></a>

### ensemble~Event
Event is an event manager.

It is a wrapper around the native Event [DOM].

**Kind**: inner class of [<code>ensemble</code>](#module_ensemble)  
**See**

- Element.addEventListener()
- Element.removeElementListener()

//global ensemble.Compo


* [~Event](#module_ensemble..Event)
    * [new Event(ns, name, node)](#new_module_ensemble..Event_new)
    * _instance_
        * [._Symbol.toStringTag](#module_ensemble..Event+_Symbol.toStringTag) ⇒ <code>string</code>
        * [.add(handle, options)](#module_ensemble..Event+add)
        * [.remove(handle)](#module_ensemble..Event+remove)
    * _static_
        * [.isEvent()](#module_ensemble..Event.isEvent) ⇒ <code>boolean</code>

<a name="new_module_ensemble..Event_new"></a>

#### new Event(ns, name, node)
Constructor method.


| Param | Type | Description |
| --- | --- | --- |
| ns | <code>string</code> | Event namespace |
| name | <code>string</code> | The [DOM] Event type name |
| node | <code>Element</code> | A valid Element node -or- component |

**Example**  
```js
new ensemble.Event('namespace-of-my-foo-component', 'mousewheel', node)
  .add(func, {
    capture: true
  });

  .remove(func);
```
<a name="module_ensemble..Event+_Symbol.toStringTag"></a>

#### event.\_Symbol.toStringTag ⇒ <code>string</code>
Getter for Symbol property, returns the symbolic name for ensemble.Event class.

**Kind**: instance property of [<code>Event</code>](#module_ensemble..Event)  
**See**: Symbol.toStringTag  
**Todo**

- [ ] return undef
- [ ] backward compatibility

<a name="module_ensemble..Event+add"></a>

#### event.add(handle, options)
Adds an event for this composition.

**Kind**: instance method of [<code>Event</code>](#module_ensemble..Event)  
**See**: Element.addEventListener()  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| handle | <code>function</code> |  | The function handler |
| options | <code>mixed</code> | <code>false</code> | An options Object -or- useCapture boolean |

<a name="module_ensemble..Event+remove"></a>

#### event.remove(handle)
Removes an event from this composition.

**Kind**: instance method of [<code>Event</code>](#module_ensemble..Event)  
**See**: Element.removeElementListener()  
**Todo**

- [ ] ? removes handle ref.


| Param | Type | Description |
| --- | --- | --- |
| handle | <code>function</code> | The function handler |

<a name="module_ensemble..Event.isEvent"></a>

#### Event.isEvent() ⇒ <code>boolean</code>
Check if passed object is an ensemble.Event instance.

**Kind**: static method of [<code>Event</code>](#module_ensemble..Event)  
**Todo**

- [ ] backward compatibility

<a name="module_ensemble.._Symbol"></a>

### ensemble~\_Symbol
**Kind**: inner constant of [<code>ensemble</code>](#module_ensemble)  
**Todo**

- [ ] backward compatibility

