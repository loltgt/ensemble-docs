---
title: ensemble.SocialShare
slug: /module-ensemble-SocialShare
---
<a name="module_ensemble"></a>

## ensemble

* [ensemble](#module_ensemble)
    * [~SocialShare](#module_ensemble..SocialShare) ⇐ <code>base</code>
        * [new SocialShare([element], options)](#new_module_ensemble..SocialShare_new)
        * [._defaults()](#module_ensemble..SocialShare+_defaults) ⇒ <code>object</code>
        * [._bindings()](#module_ensemble..SocialShare+_bindings)
        * [.generator()](#module_ensemble..SocialShare+generator)
        * [.init()](#module_ensemble..SocialShare+init)
        * [.populate()](#module_ensemble..SocialShare+populate)
        * [.action(intent, title)](#module_ensemble..SocialShare+action)
        * [.intent(e, target)](#module_ensemble..SocialShare+intent)
        * [.text(data)](#module_ensemble..SocialShare+text) ⇒ <code>string</code>
        * [.social(e, data)](#module_ensemble..SocialShare+social)
        * [.sendEmail(e, data)](#module_ensemble..SocialShare+sendEmail)
        * [.copyLink(e, data)](#module_ensemble..SocialShare+copyLink)
        * [.webShare()](#module_ensemble..SocialShare+webShare)

<a name="module_ensemble..SocialShare"></a>

### ensemble~SocialShare ⇐ <code>base</code>
ensemble.SocialShare component.

**Kind**: inner class of [<code>ensemble</code>](#module_ensemble)  
**Extends**: <code>base</code>  
**Todo**

- [ ] arguments


* [~SocialShare](#module_ensemble..SocialShare) ⇐ <code>base</code>
    * [new SocialShare([element], options)](#new_module_ensemble..SocialShare_new)
    * [._defaults()](#module_ensemble..SocialShare+_defaults) ⇒ <code>object</code>
    * [._bindings()](#module_ensemble..SocialShare+_bindings)
    * [.generator()](#module_ensemble..SocialShare+generator)
    * [.init()](#module_ensemble..SocialShare+init)
    * [.populate()](#module_ensemble..SocialShare+populate)
    * [.action(intent, title)](#module_ensemble..SocialShare+action)
    * [.intent(e, target)](#module_ensemble..SocialShare+intent)
    * [.text(data)](#module_ensemble..SocialShare+text) ⇒ <code>string</code>
    * [.social(e, data)](#module_ensemble..SocialShare+social)
    * [.sendEmail(e, data)](#module_ensemble..SocialShare+sendEmail)
    * [.copyLink(e, data)](#module_ensemble..SocialShare+copyLink)
    * [.webShare()](#module_ensemble..SocialShare+webShare)

<a name="new_module_ensemble..SocialShare_new"></a>

#### new SocialShare([element], options)
Constructor method.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [element] | <code>Element</code> |  | A valid Element node that will be replaced with this component |
| options | <code>object</code> |  | Options object |
| [options.ns] | <code>string</code> | <code>&quot;share&quot;</code> | The namespace for social share |
| [options.root] | <code>string</code> | <code>&quot;body&quot;</code> | The root Element node |
| [options.className] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <code>&quot;social-share&quot;</code> | The component CSS class name |
| [options.link] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The link, leave empty to auto-discover with selector or location.href |
| [options.title] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The title, leave empty to auto-discover with selector or window.title |
| [options.description] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The description, leave empty to auto-discover with selector |
| [options.displays] | <code>object</code> | <code>null</code> | Actions to display, default to all |
| [options.intents] | <code>object</code> |  | Action intents |
| [options.uriform] | <code>object</code> |  | URI strings |
| [options.label] | <code>object</code> |  | Custom parameters for label |
| [options.selectorLink] | <code>object</code> |  | An element selector to find link |
| [options.selectorTitle] | <code>object</code> |  | An element selector to find title |
| [options.selectorDescription] | <code>object</code> |  | An element selector to find description |
| [options.locale] | <code>object</code> |  | Localization |
| [options.onInit] | <code>function</code> |  | onInit callback, fires when social share is initialized |
| [options.onIntent] | <code>function</code> |  | onIntent callback, fires when an action is called |

**Example**  
```js
new ensemble.SocialShare(document.getElementById('my-div-placeholder'), {});
```
<a name="module_ensemble..SocialShare+_defaults"></a>

#### socialShare.\_defaults() ⇒ <code>object</code>
Options object default properties.

**Kind**: instance method of [<code>SocialShare</code>](#module_ensemble..SocialShare)  
<a name="module_ensemble..SocialShare+_bindings"></a>

#### socialShare.\_bindings()
Methods binding.

**Kind**: instance method of [<code>SocialShare</code>](#module_ensemble..SocialShare)  
<a name="module_ensemble..SocialShare+generator"></a>

#### socialShare.generator()
The generator creates almost everything the component needs and replaces the element placeholder.

**Kind**: instance method of [<code>SocialShare</code>](#module_ensemble..SocialShare)  
**Todo**

- [ ] dataset

<a name="module_ensemble..SocialShare+init"></a>

#### socialShare.init()
Initializes the component.

**Kind**: instance method of [<code>SocialShare</code>](#module_ensemble..SocialShare)  
**Todo**

- [ ] TODO

<a name="module_ensemble..SocialShare+populate"></a>

#### socialShare.populate()
In this stage the component is populated with all the content progeny.

**Kind**: instance method of [<code>SocialShare</code>](#module_ensemble..SocialShare)  
**See**: window.navigator.share()  
<a name="module_ensemble..SocialShare+action"></a>

#### socialShare.action(intent, title)
Creates the whole set of buttons.

**Kind**: instance method of [<code>SocialShare</code>](#module_ensemble..SocialShare)  
**Todo**

- [ ] dataset


| Param | Type | Description |
| --- | --- | --- |
| intent | <code>string</code> | The activity name |
| title | <code>string</code> | A title for activity |

<a name="module_ensemble..SocialShare+intent"></a>

#### socialShare.intent(e, target)
The intent activity.
This method is called from each action.

**Kind**: instance method of [<code>SocialShare</code>](#module_ensemble..SocialShare)  
**See**: window.location  
**Todo**

- [ ] url validation


| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | An Event |
| target | <code>Element</code> | The element that is invoking |

<a name="module_ensemble..SocialShare+text"></a>

#### socialShare.text(data) ⇒ <code>string</code>
Makes text substitutions and encodes to an URL

**Kind**: instance method of [<code>SocialShare</code>](#module_ensemble..SocialShare)  
**Returns**: <code>string</code> - - The encoded URL text string  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | The data object |
| data.url | <code>string</code> | Shared URL |
| data.title | <code>string</code> | Shared title |
| data.text | <code>string</code> | Shared description text |
| data.summary | <code>string</code> | Shared summary |

<a name="module_ensemble..SocialShare+social"></a>

#### socialShare.social(e, data)
Generic social method for social network sharing intent.

**Kind**: instance method of [<code>SocialShare</code>](#module_ensemble..SocialShare)  
**See**: window.open()  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | An Event |
| data | <code>object</code> | The data object |
| data.url | <code>string</code> | Shared URL |
| data.title | <code>string</code> | Shared title |
| data.text | <code>string</code> | Shared description text |
| data.summary | <code>string</code> | Shared summary |

<a name="module_ensemble..SocialShare+sendEmail"></a>

#### socialShare.sendEmail(e, data)
Send email intent, it tries to open the default mail client.

**Kind**: instance method of [<code>SocialShare</code>](#module_ensemble..SocialShare)  
**See**: window.open()  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | An Event |
| data | <code>object</code> | The data object |
| data.url | <code>string</code> | Shared URL |
| data.title | <code>string</code> | Shared title |
| data.text | <code>string</code> | Shared description text |
| data.summary | <code>string</code> | Shared summary |

<a name="module_ensemble..SocialShare+copyLink"></a>

#### socialShare.copyLink(e, data)
Copy link intent, it tries to copy URL on the clipboard.

**Kind**: instance method of [<code>SocialShare</code>](#module_ensemble..SocialShare)  
**See**

- document.createElement()
- document.execCommand()

**Todo**

- [ ] TODO


| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | An Event |
| data | <code>object</code> | The data object |
| data.url | <code>string</code> | Shared URL |
| data.title | <code>string</code> | Shared title |
| data.text | <code>string</code> | Shared description text |
| data.summary | <code>string</code> | Shared summary |

<a name="module_ensemble..SocialShare+webShare"></a>

#### socialShare.webShare()
Calls the native WebShare API for sharing.

**Kind**: instance method of [<code>SocialShare</code>](#module_ensemble..SocialShare)  
**See**: window.navigator.share()  
