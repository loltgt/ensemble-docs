/*! * loltgt/ensemble.Modal * * @version 0.0.2 * @link https://github.com/loltgt/ensemble-modal * @copyright Copyright (C) Leonardo Laureti * @license MIT License */(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.ensemble = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  'use strict';
  /*!
   * loltgt ensemble _Symbol
   *
   * @version 0.0.2
   * @link https://github.com/loltgt/ensemble
   * @copyright Copyright (C) Leonardo Laureti
   * @license MIT License
   */

  /**
   * @see Symbol()
   *
   * @borrows Symbol as _Symbol
   * @todo backward compatibility
   */

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Modal = void 0;

  const _Symbol = typeof Symbol == 'undefined' ? 0 : Symbol;
  /*!
   * loltgt ensemble _composition
   *
   * @version 0.0.2
   * @link https://github.com/loltgt/ensemble
   * @copyright Copyright (C) Leonardo Laureti
   * @license MIT License
   */


  const REJECTED_TAG_NAMES$1 = /html|head|body|meta|link|style|script/i;
  const REJECTED_TAGS = /(<(html|head|body|meta|link|style|script)*>)/i;
  /**
   * Base class for ensemble.Compo and ensemble.Snap composition elements.
   *
   * @class
   * @abstract
   */

  class _composition {
    /**
     * Element renderer.
     *
     * @todo TODO
     */
    _renderer() {
      delete this._element;
      delete this._renderer;
    }
    /**
     * Install the composition.
     *
     * @see Node.appendChild()
     *
     * @param {Element} root - A valid Element node
     * @param {function} cb - A function callback
     * @returns {boolean}
     */


    install(root, cb) {
      typeof cb == 'function' && cb.call(this, this[this._ns]);
      return !!root.appendChild(this[this._ns]);
    }
    /**
     * Uninstall the composition.
     *
     * @see Node.removeChild()
     *
     * @param {Element} root - A valid Element node
     * @param {function} cb - A function callback
     * @returns {boolean}
     */


    uninstall(root, cb) {
      typeof cb == 'function' && cb.call(this, this[this._ns]);
      return !!root.removeChild(this[this._ns]);
    }
    /**
     * Loads the composition replacing a placeholder element.
     *
     * @see Node.replaceWith()
     *
     * @param {Element} pholder - A valid Element node
     * @param {upCallback} cb - A function callback
     * @returns {boolean}
     * @todo backward compatibility
     */


    up(pholder, cb) {
      typeof cb == 'function' && cb.call(this, this[this._ns]);
      return !!pholder.replaceWith(this[this._ns]);
    }
    /**
     * Appends a compo inside this composition.
     *
     * @see Node.appendChild()
     *
     * @param {ensemble.Compo} compo - An ensemble.Compo composition
     * @returns {boolean}
     */


    append(compo) {
      const _ns = this._ns;
      return !!this[_ns].appendChild(compo[_ns]);
    }
    /**
     * Prepends a compo inside this composition.
     *
     * @see Node.prependChild()
     *
     * @param {ensemble.Compo} compo - An ensemble.Compo composition
     * @returns {boolean}
     */


    prepend(compo) {
      const _ns = this._ns;
      return !!this[_ns].prependChild(compo[_ns]);
    }
    /**
     * Removes a compo from this composition.
     *
     * @see Node.removeChild()
     *
     * @param {ensemble.Compo} compo - An ensemble.Compo composition
     * @returns {boolean}
     */


    remove(compo) {
      const _ns = this._ns;
      return !!this[_ns].removeChild(compo[_ns]);
    }
    /**
     * Inject an element node inside this composition.
     * Note that any inner element contained will be removed.
     *
     * @see Node.appendChild()
     *
     * @constant {RegExp} REJECTED_TAG_NAMES - A regular expression for rejected tag names
     * @constant {RegExp} REJECTED_TAGS - A regular expression for rejected tag
     * @param {Element} node - A valid Element node
     * @returns {boolean}
     */


    inject(node) {
      if (node instanceof Element == false || REJECTED_TAG_NAMES$1.test(node.tagName) || REJECTED_TAGS.test(node.innerHTML)) {
        throw new Error('ensemble.Compo error: The remote object could not be resolved into a valid node.');
      }

      this.empty();
      return !!this[this._ns].appendChild(node);
    }
    /**
     * Empty this composition.
     * Any inner element contained will be removed.
     */


    empty() {
      while (this.first) {
        this.remove(this.first);
      }
    }
    /**
     * Getter for children property, intended as children compo of this composition.
     *
     * @var {getter}
     * @returns {array}
     */


    get children() {
      return Array.prototype.map.call(this[this._ns].children, node => {
        return node.__compo;
      });
    }
    /**
     * Getter for first property, intended as the first compo contained inside of this composition.
     *
     * @var {getter}
     * @returns {ensemble.Compo}
     */


    get first() {
      const _ns = this._ns;
      return this[_ns].firstElementChild ? this[_ns].firstElementChild.__compo : null;
    }
    /**
     * Getter for last property, intended as the last compo contained inside of this composition.
     *
     * @var {getter}
     * @returns {ensemble.Compo}
     */


    get last() {
      const _ns = this._ns;
      return this[_ns].lastElementChild ? this[_ns].lastElementChild.__compo : null;
    }

  }
  /*!
   * loltgt ensemble.Compo
   *
   * @version 0.0.2
   * @link https://github.com/loltgt/ensemble
   * @copyright Copyright (C) Leonardo Laureti
   * @license MIT License
   */


  const REJECTED_TAG_NAMES = /html|head|body|meta|link|style|script/i;
  const DENIED_PROPS = /attributes|classList|innerHTML|outerHTML|nodeName|nodeType/;
  /**
   * Compo is a composition element with shorthands method and utils.
   * 
   * It is a wrapper around an Element node [DOM].
   * It could be used as base for abstraction of a custom component element.
   *
   * @class
   * @extends _composition
   * @inheritdoc
   * @example
   * new ensemble.Compo('namespace-of-my-foo-component', 'div', 'foo', { id: 'fooDiv', tabIndex: 1 });
   */

  class Compo extends _composition {
    /**
     * Constructor method.
     *
     * @constructs
     * @constant {RegExp} REJECTED_TAG_NAMES - A regular expression for rejected tag names
     * @constant {RegExp} REJECTED_TAGS - A regular expression for rejected tag
     * @constant {RegExp} DENIED_PROPS - A regular expression for denied properties
     * @param {string} ns - Component namespace
     * @param {string} [tag='div'] - The [DOM] Element node tag -or- component name
     * @param {(string|string[])} [name] - The composition name, used for CSS className
     * @param {object} [props] - Properties for composition
     * @param {object} [options] - An optional ElementCreationOptions object [DOM]
     * @param {object} [elementNS] - Options for namespaced Element node [DOM]
     * @param {string} [elementNS.namespaceURI] - A valid namespace URI
     * @param {string} [elementNS.qualifiedName] - A valid qualified name
     * @todo props.dataset
     */
    constructor(ns, tag, name, props, options, elementNS) {
      if (!new.target) {
        throw 'ensemble.Compo error: Bad invocation, must be called with new.';
      }

      super();

      const _ns = this._ns = '_' + ns;

      const ctag = tag ? tag.toString() : 'div';

      if (REJECTED_TAG_NAMES.test(tag)) {
        throw new Error("ensemble.Compo error: The tag name provided ('".concat(ctag, "') is not a valid name."));
      }

      const node = this[_ns] = this._element(ns, ctag, name, props, options, elementNS);

      this.__Compo = true;
      this[_ns].__compo = this;

      if (props && typeof props == 'object') {
        for (const prop in props) {
          const cprop = prop.toString();

          if (DENIED_PROPS.test(cprop)) {
            throw new Error("ensemble.Compo error: The property name provided ('".concat(cprop, "') is not a valid name."));
          }

          if (cprop.indexOf('on') === 0 && props[cprop] && typeof props[cprop] == 'function') {
            node[cprop] = props[cprop].bind(this); //TODO
            // } else if (cprop == 'dataset' && typeof props[cprop] == 'object') {
            //   node.dataset = Object.assign(node.dataset, props[cprop]);
          } else if (typeof props[cprop] != 'object') {
            node[cprop] = props[cprop];
          } else if (cprop == 'children') {
            if (typeof props[cprop] == 'object' && props[cprop].length) {
              for (const child of props.children) {
                const tag = child.tag;
                const name = child.name;
                const props = child.props;
                this.append(new Compo(ns, tag, name, props));
              }
            }
          }
        }
      }

      if (name) {
        const _name = node.className;
        node.className = '';

        if (typeof name == 'string') {
          node.className = ns + '-' + name;
        } else if (typeof name == 'object') {
          node.className = name.map(a => ns + '-' + a).join(' ');
        }

        if (_name) {
          node.className += ' ' + _name;
        }
      }

      this._renderer();
    }
    /**
     * Element wrapper.
     *
     * @see document.createElement()
     * @see document.createElementNS()
     *
     * @param {string} ns - Component namespace
     * @param {string} tag - The element Node tag -or- component name
     * @param {string} name - Name for composition, used for CSS className
     * @param {object} props - Properties for composition
     * @param {object} [options] - An optional ElementCreationOptions object [DOM]
     * @param {object} [elementNS] - Options for namespaced Element node [DOM]
     * @param {string} [elementNS.namespaceURI] - A valid namespace URI
     * @param {string} [elementNS.qualifiedName] - A valid qualified name
     */


    _element(ns, tag, name, props, options, elementNS) {
      if (elementNS) return document.createElementNS(tag, [...elementNS, ...options]);else return document.createElement(tag, options);
    }
    /**
     * Check for an attribute of this composition.
     *
     * @see Element.hasAttribute()
     *
     * @param {string} attr - An attribute
     * @returns {boolean}
     */


    hasAttr(attr) {
      return this[this._ns].hasAttribute(attr);
    }
    /**
     * Gets an attribute from this composition.
     *
     * @see Element.getAttribute()
     *
     * @param {string} attr - An attribute
     * @returns {string}
     */


    getAttr(attr) {
      return this[this._ns].getAttribute(attr);
    }
    /**
     * Sets an attribute in this composition.
     *
     * @see Element.setAttribute()
     *
     * @param {string} attr - An attribute
     * @param {string} value - The value
     */


    setAttr(attr, value) {
      this[this._ns].setAttribute(attr, value);
    }
    /**
     * Removes an attribute from this composition. 
     *
     * @see Element.removeAttribute()
     *
     * @param {string} attr - An attribute
     */


    delAttr(attr) {
      this[this._ns].removeAttribute(attr);
    }
    /**
     * Gets a current style property.
     *
     * @see window.getComputedStyle()
     *
     * @param {string} prop - A style property
     * @returns {mixed}
     */


    getStyle(prop) {
      return window.getComputedStyle(this[this._ns])[prop];
    }
    /**
     * Time to show this composition.
     */


    show() {
      this[this._ns].hidden = false;
    }
    /**
     * Time to hide this composition.
     */


    hide() {
      this[this._ns].hidden = true;
    }
    /**
     * Util to set attribute disabled to true
     */


    enable() {
      this[this._ns].disabled = false;
    }
    /**
     * Util to set attribute disabled to false
     */


    disable() {
      this[this._ns].disabled = true;
    }
    /**
     * Getter for node property, intended as the Element node inside this composition.
     * Note that a direct access to the node is discouraged.
     *
     * @var {getter}
     * @returns {Element}
     */


    get node() {
      console.warn('ensemble.Compo', 'Direct access to the node is strongly discouraged.');
      return this[this._ns];
    }
    /**
     * Getter for parent property, intended as the parent compo of this composition.
     *
     * @var {getter}
     * @returns {ensemble.Compo}
     */


    get parent() {
      const _ns = this._ns;
      return this[_ns].parentElement && '__compo' in this[_ns].parentElement ? this[_ns].parentElement.__compo : null;
    }
    /**
     * Getter for previous property, intended as the previous sibling of this composition.
     *
     * @var {getter}
     * @returns {ensemble.Compo}
     */


    get previous() {
      const _ns = this._ns;
      return this[_ns].previousElementSibling ? this[_ns].previousElementSibling.__compo : null;
    }
    /**
     * Getter for next property, intended as the next sibling of this composition.
     *
     * @var {getter}
     * @returns {ensemble.Compo}
     */


    get next() {
      const _ns = this._ns;
      return this[_ns].nextElementSibling ? this[_ns].nextElementSibling.__compo : null;
    }
    /**
     * Getter for classList property, intended as the classList of the Element node inside this composition.
     *
     * @see DOMTokenList
     *
     * @var {getter}
     * @returns {DOMTokenList}
     */


    get classList() {
      return this[this._ns].classList;
    }
    /**
     * Check if passed object is an ensemble.Compo instance.
     *
     * @static
     * @returns {boolean}
     * @todo backward compatibility
     */


    static isCompo(obj) {
      if (_Symbol) return _Symbol.for(obj) === _Symbol.for(Compo.prototype);else return obj && typeof obj == 'object' && '__Compo' in obj;
    }
    /**
     * Getter for Symbol property, returns the symbolic name for ensemble.Compo class.
     *
     * @see Symbol.toStringTag()
     *
     * @override
     * @returns {string}
     * @todo return undef
     * @todo backward compatibility
     */


    get [_Symbol.toStringTag]() {
      return 'ensemble.Compo';
    }

  }
  /*!
   * loltgt ensemble.Data
   *
   * @version 0.0.2
   * @link https://github.com/loltgt/ensemble
   * @copyright Copyright (C) Leonardo Laureti
   * @license MIT License
   */

  /**
   * Data is a multi-purpose utility object.
   * 
   * It could be used as a wrapper around a Compo composition, 
   * this object can store any kind of properties. 
   *
   * @class
   * @example
   * new ensemble.Data('namespace-of-my-foo-component', { compo: ensemble.Compo, foo: 'a text string', fooObj: 'an object' });
   */


  class Data {
    /**
     * Constructor method.
     *
     * @constructs
     * @param {string} ns - Data namespace
     * @param {object} obj - A starter Object
     */
    constructor(ns, obj) {
      if (!new.target) {
        throw 'ensemble.Data error: Bad invocation, must be called with new.';
      }

      if (obj && typeof obj == 'object') {
        Object.assign(this, {}, obj);
      }

      const _ns = this._ns = '_' + ns;

      this.__Data = true;
      this[_ns] = {
        ns
      };
    }
    /**
     * The compo method is a utility render.
     * 
     * When you create a composition with this method, it will create a Compo composition or simply an Object placeholder.
     * With the defer render you can have it rendered in place, refresh, or freeze.
     *
     * @param {string} tag - Element node tag -or- component name
     * @param {string} name
     * @param {object} props - Properties for Element node -or- component
     * @param {boolean} defer - Defer render for composition
     * @param {mixed} fresh - A function callback, called when is loaded the compo
     * @param {mixed} stale - A function callback, called when is unloaded the compo
     * @returns {mixed} compo - An ensemble.Compo element -or- an Object placeholder 
     */


    compo(tag, name, props) {
      let defer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      let fresh = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      let stale = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      const ns = this[this._ns].ns;
      let compo;

      if (defer) {
        compo = {
          ns,
          tag,
          name,
          props,
          fresh,
          stale
        };
      } else {
        compo = new Compo(ns, tag, name, props);
      }

      if (fresh && typeof fresh == 'function') {
        compo.fresh = props.onfresh = fresh;
      }

      if (stale && typeof stale == 'function') {
        compo.stale = props.onstale = stale;
      }

      return compo;
    }
    /**
     * Renderizes a composition, passed by reference.
     *
     * @async
     * @param {mixed} slot - Reference of the element that will be rendered
     */


    async render(slot) {
      const _ns = this._ns;

      if (this[_ns][slot] && this[_ns][slot].rendered) {
        this[_ns][slot].fresh();
      } else {
        this[_ns][slot] = {
          rendered: true,
          fresh: this[slot].fresh,
          stale: this[slot].stale,
          params: this[slot]
        };
        this[slot] = new Compo(this[slot].ns, this[slot].tag, this[slot].name, this[slot].props);

        this[_ns][slot].fresh();
      }
    }
    /**
     * Freezes a composition, passed by reference.
     *
     * @async
     * @param {mixed} slot - Reference of the element that will be rendered
     */


    async stale(slot) {
      const _ns = this._ns;

      if (this[_ns][slot] && this[_ns][slot].rendered) {
        this[_ns][slot].stale();
      }
    }
    /**
     * Refresh a composition, passed by reference.
     *
     * @async
     * @param {mixed} slot - Reference of the element that will be rendered.
     * @param {boolean} force - It forces the reflow.
     */


    async reflow(slot, force) {
      const _ns = this._ns;

      if (force) {
        this[_ns][slot] = this.compo(this[_ns][slot].params.ns, this[_ns][slot].params.name, this[_ns][slot].params.props);
      } else if (this[_ns][slot] && this[_ns][slot].rendered) {
        this[_ns][slot].fresh();
      }
    }
    /**
     * Check if passed object is an ensemble.Data instance.
     *
     * @static
     * @returns {boolean}
     * @todo backward compatibility
     */


    static isData(obj) {
      if (_Symbol) return _Symbol.for(obj) === _Symbol.for(Data.prototype);else return obj && typeof obj == 'object' && '__Data' in obj;
    }
    /**
     * Getter for Symbol property, returns the symbolic name for ensemble.Data class.
     *
     * @see Symbol.toStringTag
     *
     * @override
     * @returns {string}
     * @todo return undef
     * @todo backward compatibility
     */


    get [_Symbol.toStringTag]() {
      return 'ensemble.Data';
    }

  }
  /*!
   * loltgt ensemble.Event
   *
   * @version 0.0.2
   * @link https://github.com/loltgt/ensemble
   * @copyright Copyright (C) Leonardo Laureti
   * @license MIT License
   */

  /**
   * Event is an event manager.
   * 
   * It is a wrapper around the native Event [DOM].
   *
   * @class
   * @example
   * new ensemble.Event('namespace-of-my-foo-component', 'mousewheel', node).add(func, { capture: true });
   */


  class Event {
    /**
     * Constructor method.
     *
     * @see Element.addEventListener()
     * @see Element.removeElementListener()
     *
     * @constructs
     * @param {string} ns - Event namespace
     * @param {string} name - The [DOM] Event type name
     * @param {Element} node - A valid Element node -or- component
     */
    constructor(ns, name, node) {
      if (!new.target) {
        throw 'ensemble.Event error: Bad invocation, must be called with new.';
      }

      const _ns = this._ns = '_' + ns;

      node = (Compo.isCompo(node) ? node.node : node) || document;
      this.__Event = true;
      this[_ns] = {
        name,
        node
      };
    }
    /**
     * Adds an event for this composition.
     *
     * @see Element.addEventListener()
     *
     * @param {function} handle - The function handler
     * @param {mixed} options - An options Object -or- useCapture boolean
     */


    add(handle) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      this[this._ns].node.addEventListener(this[this._ns].name, handle, options);
    }
    /**
     * Removes an event from this composition.
     *
     * @see Element.removeElementListener()
     *
     * @param {function} handle - The function handler
     * @todo ? removes handle ref.
     */


    remove(handle) {
      this[this._ns].node.removeEventListener(this[this._ns].name, handle);
    }
    /**
     * Check if passed object is an ensemble.Event instance.
     *
     * @static
     * @returns {boolean}
     * @todo backward compatibility
     */


    static isEvent(obj) {
      if (_Symbol) return _Symbol.for(obj) === _Symbol.for(Event.prototype);else return obj && typeof obj == 'object' && '__Event' in obj;
    }
    /**
     * Getter for Symbol property, returns the symbolic name for ensemble.Event class.
     *
     * @see Symbol.toStringTag
     *
     * @override
     * @returns {string}
     * @todo return undef
     * @todo backward compatibility
     */


    get [_Symbol.toStringTag]() {
      return 'ensemble.Event';
    }

  }
  /*!
   * loltgt ensemble.base
   *
   * @version 0.0.2
   * @link https://github.com/loltgt/ensemble-stack-d1
   * @copyright Copyright (C) Leonardo Laureti
   * @license MIT License
   */

  /**
   * A base class for ensemble components.
   *
   * @class
   * @abstract
   * @param {Element} [element] - A valid element, could be used within the extending class
   * @param {object} options - Options object
   * @example
   * new base([, element], options)
   */


  class base {
    /**
     * Constructor method.
     */
    constructor() {
      const tname = 'ensemble' + (new.target && new.target.name ? '.' + new.target.name : '');
      let element, options;

      if (arguments.length > 1) {
        element = arguments[0];
        options = arguments[1];
      } else {
        options = arguments[0];
      }

      if (options && typeof options != 'object') {
        throw new TypeError("".concat(tname, " error: The passed argument 'options' is not of type Object."));
      }

      if (element && typeof element != 'object') {
        throw new TypeError("".concat(tname, " error: The passed argument 'element' is not of type Object."));
      }

      this._bindings();

      this.options = this.defaults(this._defaults(), options);
      Object.freeze(this.options);
      this.element = element;
    }
    /**
     * Creates an options Object from a defaults object of pre-defined properties.
     * 
     * Note it supports only the first level of depth.
     *
     * @param {object} defaults - The default options Object
     * @param {object} options - An options Object that would extends
     * @returns {object}
     */


    defaults(defaults, options) {
      const j = {};

      for (const k in defaults) {
        if (defaults[k] != null && typeof defaults[k] == 'object') {
          j[k] = Object.assign(defaults[k], options[k]);
        } else {
          j[k] = typeof options[k] != 'undefined' ? options[k] : defaults[k];
        }
      }

      return j;
    }
    /**
     * Shorthand method for ensemble.Compo class.
     *
     * When passed the first argument it makes a new Compo instance, 
     * otherwise it returns a reference to the Compo class.
     *
     * @param {string} ns - Composition namespace
     * @param {string} [tag='div'] - The [DOM] Element node tag -or- component name, empty for ensemble.Compo class reference
     * @param {mixed} [name] - The composition name, used for CSS className
     * @returns {mixed} Instance of ensemble.Data -or- ensemble.Data class reference
     */


    compo(tag, name, props) {
      return tag != undefined ? new Compo(this.options.ns, tag, name, props) : Compo;
    }
    /**
     * Shorthand method for ensemble.Data class.
     *
     * When passed the first argument it makes a new Data instance, 
     * otherwise it returns a reference to the Data class.
     *
     * @param {object} obj - A starter Object, empty for ensemble.Data class reference
     * @returns {mixed} Instance of ensemble.Data -or- ensemble.Data class reference
     */


    data(obj) {
      return obj != undefined ? new Data(this.options.ns, obj) : Data;
    }
    /**
     * Shorthand method for ensemble.Event class.
     *
     * When the passed first argument is a string it makes a new Event instance, 
     * if you pass an Event as the first argument, a preventDefault and blur will be performed, 
     * otherwise it returns a reference to the Event class.
     *
     * @param {object} obj - A starter Object, empty for ensemble.Event class reference
     * @returns {mixed}
     */


    event(event, node) {
      if (typeof event == 'string') {
        return new Event(this.options.ns, event, node);
      } else if (event) {
        event.preventDefault();
        event.target.blur();
      } else {
        return Event;
      }
    }
    /**
     * Shortcut to querySelectorAll() and querySelector() [DOM].
     *
     * @see Element.querySelectorAll()
     * @see Element.querySelector()
     *
     * @param {string} query - A text query
     * @param {Element} node - An Element node where find
     * @param {boolean} all - Find single or multiple elements
     * @return {mixed} - Element -or- ElementCollection
     */


    selector(query, node) {
      let all = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      node = node || document;
      return all ? node.querySelectorAll(query) : node.querySelector(query);
    }
    /**
     * Shortcut to appendChild() [DOM].
     *
     * @see Element.appendChild()
     *
     * @param {Element} parent - An Element parent
     * @param {Element} node - An Element node to append
     * @returns {boolean}
     */


    appendNode(parent, node) {
      return !!parent.appendChild(node);
    }
    /**
     * Shortcut to prependChild() [DOM].
     *
     * @see Element.prependChild()
     *
     * @param {Element} parent - An Element parent
     * @param {Element} node - An Element node to prepend
     * @returns {boolean}
     */


    prependNode(parent, node) {
      return !!parent.prependChild(node);
    }
    /**
     * Shortcut to cloneNode() [DOM].
     *
     * @see Element.removeNode()
     *
     * @param {Element} parent - An Element parent
     * @param {Element} node - An Element node to remove
     * @returns {boolean}
     */


    removeNode(root, node) {
      return !!root.removeChild(node);
    }
    /**
     * Shortcut to Element.cloneNode() [DOM].
     *
     * @see Element.cloneNode()
     *
     * @param {Element} node - An Element node to clone
     * @param {boolean} deep - Clone also all children inside the Element node
     * @returns {boolean}
     */


    cloneNode(node) {
      let deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return node.cloneNode(deep);
    }
    /**
     * Shortcut to Element.hasAttribute() [DOM].
     *
     * @see Element.hasAttribute()
     *
     * @param {Element} node - An Element node
     * @param {string} attr - An attribute
     * @returns {boolean}
     */


    hasAttr(node, attr) {
      return node.hasAttribute(attr);
    }
    /**
     * Shortcut to Element.getAttribute() [DOM].
     *
     * @see Element.getAttribute()
     *
     * @param {Element} node - An Element node
     * @param {string} attr - An attribute
     * @returns {string}
     */


    getAttr(node, attr) {
      return node.getAttribute(attr);
    }
    /**
     * Shortcut to Element.setAttribute() [DOM].
     *
     * @see Element.setAttribute()
     *
     * @param {Element} node - An Element node
     * @param {string} attr - An attribute
     * @param {string} value - The value
     */


    setAttr(node, attr, value) {
      node.setAttribute(attr, value);
    }
    /**
     * Shortcut to Element.removettribute() [DOM].
     *
     * @see Element.removeAttribute()
     *
     * @param {Element} node - An Element node
     * @param {string} attr - An attribute
     */


    delAttr(node, attr) {
      node.removeAttribute(attr);
    }
    /**
     * Creates a proxy function with bindings to instance and optionally an event.
     *
     * @param {function} method - A method from the current instance
     * @returns {function}
     * @todo untrusted method
     */


    binds(method) {
      const self = this;
      return function (e) {
        method.call(self, e, this);
      };
    }
    /**
     * Provides a delay and executes a callback function
     *
     * @see window.setTimeout()
     *
     * @param {function} func - A function callback
     * @param {mixed} node - An Element node -or- an ensemble.Compo composition
     * @param {int} dtime - A default value of time in milliseconds
     */


    delay(func, node, dtime) {
      const delay = node ? this.timing(node) : 0;
      setTimeout(func, delay || dtime);
    }
    /**
     * Calculates a time, based on a time property of the style of an element
     *
     * @see window.getComputedStyle()
     *
     * @param {mixed} node - An Element node -or- an ensemble.Compo composition
     * @param {string} prop - A style property
     * @returns {int} time - Number of time in milliseconds
     */


    timing(node) {
      let prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'transitionDuration';
      let time = Compo.isCompo(node) ? node.getStyle(prop) : window.getComputedStyle(node)[prop];

      if (time) {
        time = time.indexOf('s') ? parseFloat(time) * 1e3 : parseInt(time);
      }

      return time || 0;
    }

  }
  /*!
   * loltgt ensemble.Modal
   *
   * @version 0.0.2
   * @link https://github.com/loltgt/ensemble-modal
   * @copyright Copyright (C) Leonardo Laureti
   * @license MIT License
   */

  /**
   * ensemble.Modal component.
   *
   * @class
   * @extends base
   * @inheritdoc
   * @param {Element} [element] - A valid Element node to display in the modal dialog
   * @param {object} options - Options object
   * @param {string} [options.ns=modal] - The namespace for modal
   * @param {string} [options.root=body] - The root Element node
   * @param {(string|string[])} [options.className=modal] - The component CSS class name
   * @param {boolean} [options.fx=true] - Switch for allow effects
   * @param {boolean} [options.windowed=false] - Switch for framing in a window
   * @param {boolean} [options.cloning=true] - Allow cloning of passed element(s)
   * @param {boolean} [options.backClose=true] - Switch for closing on tap/click outside the content
   * @param {boolean} [options.keyboard=true] - Switch for keyboard navigation
   * @param {object} [options.close] - Custom parameters for close button
   * @param {function} [options.onOpen] - onOpen callback, fires when open modal
   * @param {function} [options.onClose] - onOpen callback, fires when close modal
   * @param {function} [options.onShow] - onShow callback, fires when show modal, after it openes
   * @param {function} [options.onHide] - onHide callback, fires when hide modal, before it closes
   * @param {function} [options.onContent] - onContent callback, fires when a content will be shown
   * @example
   * var modal = new ensemble.Modal(document.getElementById('inline-content-to-display'), {});
   * modal.open();
   * modal.close();
   * @todo arguments
   */


  class Modal extends base {
    /**
     * Options object default properties.
     *
     * @returns {object}
     */
    _defaults() {
      return {
        ns: 'modal',
        root: 'body',
        className: 'modal',
        fx: true,
        windowed: false,
        cloning: true,
        backClose: true,
        keyboard: true,
        close: {
          onclick: this.close,
          innerText: '\u00D7',
          ariaLabel: 'Close'
        },
        onOpen: function () {},
        onClose: function () {},
        onShow: function () {},
        onHide: function () {},
        onContent: function () {}
      };
    }
    /**
     * Methods binding.
     */


    _bindings() {
      this.open = this.binds(this.open);
      this.close = this.binds(this.close);
      this.backx = this.binds(this.backx);
      this.keyboard = this.binds(this.keyboard);
    }
    /**
     * Constructor method.
     */


    constructor() {
      if (!new.target) {
        throw 'ensemble.Modal error: Bad invocation, must be called with new.';
      }

      super(...arguments);
    }
    /**
     * The generator creates the container box with almost everything the component needs.
     *
     * @todo TODO
     */


    generator() {
      const opts = this.options;
      const data = this.box = this.data({
        onclick: false
      });
      const box = this.box.wrap = this.compo('dialog', false, {
        className: typeof opts.className == 'object' ? opts.className.join(' ') : opts.className,
        hidden: true,
        ariaModal: true,
        role: 'dialog',
        onclick: function () {
          data.onclick && typeof data.onclick == 'function' && data.onclick.apply(this, arguments);
        }
      }); //TODO
      // data.cnt

      const cnt = this.cnt = this.compo(false, 'content');
      const close = this.compo('button', ['button', 'close'], opts.close);
      box.append(cnt);

      if (opts.windowed) {
        box.classList.add(opts.ns + '-windowed');
        cnt.append(close);
      } else {
        box.append(close);
      }

      if (opts.backClose) {
        this.box.onclick = this.backx;
      }

      if (opts.fx) {
        box.classList.add(opts.ns + '-fx');
      }

      this.root = this.selector(opts.root);
      this.built = true;
    }
    /**
     * In this stage the component is populated with all the content progeny.
     *
     * @param {Element} target - The element that is invoking
     * @todo TODO
     */


    populate(target) {
      console.log('ensemble.Modal', 'populate()', target);
      if (!this.element) return;
      const content = this.content(this.element);
      this.cnt.append(content);
    }
    /**
     * Processing when the component is resumed.
     *
     * @param {Element} target - The element that is invoking
     * @todo TODO
     */


    resume(target) {
      console.log('ensemble.Modal', 'resume()', target);
    }
    /**
     * The single content.
     *
     * @param {Element} node - A valid Element node
     * @param {boolean} clone - Eventually clones Element nodes
     * @returns {Element} wrap - The wrapped (cloned) Element node
     * @todo TODO
     */


    content(node, clone) {
      const opts = this.options;
      const wrap = this.compo(false, 'object');
      clone = typeof clone != 'undefined' ? clone : opts.cloning;
      let inner = clone ? this.cloneNode(node, true) : node;
      opts.onContent.call(this, this, wrap, inner);

      if (inner) {
        wrap.inject(inner);
      }

      return wrap;
    }
    /**
     * @todo TODO
     */


    destroy() {
      const root = this.root;
      const box = this.box.wrap;
      this.removeNode(root, box);
      this.built = false;
    }
    /**
     * Opens the modal.
     *
     * @param {Event} e - An Event
     * @param {Element} target - The element that is invoking
     */


    open(e, target) {
      this.event(e);
      if (this.opened) return;
      const opts = this.options;

      if (this.built) {
        this.resume(target);
      } else {
        this.generator();
        this.populate(target);
      }

      this.opened = true;
      opts.onOpen.call(this, this, target, e);
      this.show(target);

      if (opts.keyboard) {
        this.event('keydown').add(this.keyboard);
      }

      console.log('ensemble.Modal', 'open()', this);
    }
    /**
     * Closes the modal.
     *
     * @param {Event} e - An Event
     * @param {Element} target - The element that is invoking
     */


    close(e, target) {
      this.event(e);
      if (!this.opened) return;
      const opts = this.options;
      this.opened = false;
      opts.onClose.call(this, this, target, e);
      this.hide(target);

      if (opts.keyboard) {
        this.event('keydown').remove(this.keyboard);
      }

      console.log('ensemble.Modal', 'close()', this);
    }
    /**
     * Shows the modal.
     *
     * @param {Element} target - The element that is invoking
     */


    show(target) {
      const opts = this.options;
      const root = this.root;
      this.box;
      const box = this.box.wrap;
      box.install(root);
      this.delay(function () {
        box.show();
        opts.onShow.call(self, self, target);
      });
    }
    /**
     * Hides the modal.
     *
     * @param {Element} target - The element that is invoking
     */


    hide(target) {
      const opts = this.options;
      const root = this.root;
      this.box;
      const box = this.box.wrap;
      box.hide();
      this.delay(function () {
        box.uninstall(root);
        opts.onHide.call(self, self, target);
      }, box, 3e2);
    }
    /**
     * Handles the close on tap/click outside the content.
     *
     * @param {Event} e - An Event
     * @todo test
     */


    backx(e) {
      this.event(e);
      const target = e.target;
      const parent = target.parentElement;
      const ns = this.options.ns;
      var regex;
      regex = new RegExp(ns + '-content');

      if (regex.test(target.className) || regex.test(parent.className)) {
        console.log('ensemble.Modal', 'backx()', 'outside cropbox area', ':then: close', parent, target);
        this.close(e);
      }

      regex = new RegExp(ns + '-object');

      if (!regex.test(target.className)) {
        console.log('ensemble.Modal', 'backx()', 'outside cropbox area', ':then: skip', parent, target);
        return;
      }

      const inner = target.firstElementChild;
      const inner_w = inner.offsetWidth;
      const inner_h = inner.offsetHeight;
      const target_t = target.offsetTop;
      const target_l = target.offsetLeft;
      const target_w = target.offsetWidth;
      const target_h = target.offsetHeight;
      const x = event.x;
      const y = event.y;
      const crop_t = (target_h - inner_h) / 2;
      const crop_l = (target_w - inner_w) / 2;
      const crop_b = crop_t + inner_h;
      const crop_r = crop_l + inner_w;
      console.log('ensemble.Modal', 'backx()', 'coords', {
        x,
        y
      }, {
        target_t,
        target_l,
        target_w,
        target_h
      }, {
        crop_t,
        crop_r,
        crop_b,
        crop_l
      });

      if ((y > target_t || x > target_l || x < target_w || y < target_h) && (y < crop_t || x > crop_r || y > crop_b || x < crop_l)) {
        console.log('ensemble.Modal', 'backx()', 'outside cropbox area', ':then: close', parent, target);
        this.close(e);
      }
    }
    /**
     * Captures keyboard codes corresponding to functions to be triggered.
     *
     * @param {Event} e - An Event
     */


    keyboard(e) {
      this.event(e);
      const kcode = e.keyCode || 0; // Escape

      if (kcode == 27) this.close(e);
    }

  }

  _exports.Modal = Modal;
});