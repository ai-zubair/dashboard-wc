// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/ts/components/FancyTabs/fancyTabsContent.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FancyTabContent = void 0;
var FancyTabContent = "\n  <style>\n    :host {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      height: 100%;\n      contain: content;\n      border-radius: 6px;\n      box-shadow: 0px 0px 10px 0px #b4b4b4;\n    }\n    .tab-container {\n      display: flex;\n      flex-direction: row;\n      width: 100%;\n      flex-basis: 10%;\n      overflow: scroll;\n      scrollbar-width: none;\n\n    }\n    .tab-container::-webkit-scrollbar{\n      display: none;\n      width: 0px;\n    }\n    ::slotted([slot=\"tab\"]){\n      width: auto;\n      padding: 10px;\n      border: none;\n      flex-basis: calc(100%/3);\n      color: black;\n      font-size: 20px;\n      background-color: #a9ece8;\n      font-weight: 300;\n      font-family: 'Roboto', sans-serif;\n      transition: font-size 0.5s ease;\n      color : white;\n      outline: none;\n    }\n    ::slotted([slot=\"tab\"][active]){\n      font-weight: bolder;\n      background-color: white;\n      color: black;\n    }\n    ::slotted(:not([active])[slot=\"tab\"]:hover){\n      cursor: pointer;\n      background-color: #c9f1ee;\n      font-size: 21px;\n      font-weight: bolder;\n    }\n    .panel-container {\n      flex-basis: 90%;\n      background-color: #fff;\n      padding: 10px;\n    }\n    ::slotted([slot=\"panel\"][active]){\n      width: 100%;\n      height: 100%;\n    }\n    ::slotted(:not([active])[slot=\"panel\"]){\n      display: none;\n    }\n  </style>\n\n  <div class=\"tab-container\" id=\"tab-container\">\n    <slot id=\"tab-slot\" name=\"tab\"></slot>\n  </div>\n  <div class=\"panel-container\" id=\"panel-container\">\n    <slot id=\"panel-slot\" name=\"panel\"></slot>\n  </div>\n";
exports.FancyTabContent = FancyTabContent;
},{}],"src/ts/components/FancyTabs/FancyTabs.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FancyTabs = void 0;

var _fancyTabsContent = require("./fancyTabsContent");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FancyTabs = /*#__PURE__*/function (_HTMLElement) {
  _inherits(FancyTabs, _HTMLElement);

  var _super = _createSuper(FancyTabs);

  function FancyTabs() {
    var _this;

    _classCallCheck(this, FancyTabs);

    _this = _super.call(this);
    _this.tabMap = {};
    _this.domContent = _fancyTabsContent.FancyTabContent;
    _this.activeTabId = "";
    _this.defaultActiveTabId = "";
    _this.tabTitle = [];
    _this.tabPanel = [];

    _this.bindDomContent = function () {
      var contentTemplate = document.createElement("template");
      contentTemplate.innerHTML = _this.domContent;

      var shadowRoot = _this.attachShadow({
        mode: "open"
      });

      shadowRoot.appendChild(contentTemplate.content.cloneNode(true));
    };

    _this.createTabMap = function () {
      _this.tabTitle.forEach(function (tabTitle, tabTitleIndex) {
        var tabId = tabTitle.getAttribute("tabId");

        if (tabId) {
          if (tabTitleIndex === 0) {
            _this.defaultActiveTabId = tabId;
          }

          var isTabActive = tabTitle.hasAttribute("active") ? true : false;
          _this.tabMap[tabId] = {
            tabTitle: tabTitle,
            tabPanel: _this.tabPanel[tabTitleIndex]
          };

          if (isTabActive) {
            _this.setActiveTab(tabId);
          }
        }
      });

      if (!_this.activeTabId) {
        _this.setActiveTab();
      }
    };

    _this.bindClickHandlers = function () {
      _this.tabTitle.forEach(function (tabTitle) {
        tabTitle.addEventListener("click", _this.handleTabTitleClick);
      });
    };

    _this.unsetActiveTab = function () {
      var _this$getActiveTab = _this.getActiveTab(),
          _this$getActiveTab2 = _slicedToArray(_this$getActiveTab, 2),
          activeTabTitle = _this$getActiveTab2[0],
          activeTabPanel = _this$getActiveTab2[1];

      activeTabTitle.removeAttribute("active");
      activeTabPanel.removeAttribute("active");
    };

    _this.setActiveTab = function () {
      var tabId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.defaultActiveTabId;

      if (_this.activeTabId) {
        _this.unsetActiveTab();
      }

      _this.activeTabId = tabId;

      var _this$getActiveTab3 = _this.getActiveTab(),
          _this$getActiveTab4 = _slicedToArray(_this$getActiveTab3, 2),
          activeTabTitle = _this$getActiveTab4[0],
          activeTabPanel = _this$getActiveTab4[1];

      activeTabTitle.setAttribute("active", "true");
      activeTabPanel.setAttribute("active", "true");
    };

    _this.getActiveTab = function () {
      return [_this.tabMap[_this.activeTabId].tabTitle, _this.tabMap[_this.activeTabId].tabPanel];
    };

    _this.handleTabTitleClick = function (event) {
      _this.unsetActiveTab();

      var targetTab = event.target;
      var targetTabId = targetTab.getAttribute("tabId");

      if (targetTabId) {
        _this.setActiveTab(targetTabId);
      }
    };

    _this.bindDomContent();

    return _this;
  }

  _createClass(FancyTabs, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this$shadowRoot, _this$shadowRoot2;

      var tabSlot = (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 ? void 0 : _this$shadowRoot.getElementById("tab-slot");
      var panelSlot = (_this$shadowRoot2 = this.shadowRoot) === null || _this$shadowRoot2 === void 0 ? void 0 : _this$shadowRoot2.getElementById("panel-slot");
      this.tabTitle = tabSlot.assignedNodes({
        flatten: true
      });
      this.tabPanel = panelSlot.assignedNodes({
        flatten: true
      });
      this.createTabMap();
      this.bindClickHandlers();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this2 = this;

      this.tabTitle.forEach(function (tabTitle) {
        tabTitle.removeEventListener("click", _this2.handleTabTitleClick);
      });
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback() {}
  }]);

  return FancyTabs;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

exports.FancyTabs = FancyTabs;
},{"./fancyTabsContent":"src/ts/components/FancyTabs/fancyTabsContent.ts"}],"src/ts/index.ts":[function(require,module,exports) {
"use strict";

var _FancyTabs = require("./components/FancyTabs/FancyTabs");

customElements.define("fancy-tabs", _FancyTabs.FancyTabs);
},{"./components/FancyTabs/FancyTabs":"src/ts/components/FancyTabs/FancyTabs.ts"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58200" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/ts/index.ts"], null)
//# sourceMappingURL=/ts.93153e6d.js.map