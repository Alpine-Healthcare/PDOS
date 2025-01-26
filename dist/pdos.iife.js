var pdos = function(exports) {
  "use strict";var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});

  var _listener, _listeners, _cancelled, _allowInsecure, _gzip, _headers, _method, _timeout, _url, _body, _bodyType, _creds, _preflight, _process, _retry, _signal, _throttle, _getUrlFunc, _FetchRequest_instances, send_fn, _statusCode, _statusMessage, _headers2, _body2, _request, _error, _names, _data, _dataLength, _Writer_instances, writeData_fn, _data2, _offset, _bytesRead, _parent, _maxInflation, _Reader_instances, incrementBytesRead_fn, peekBytes_fn, _r, _s, _v, _networkV, _privateKey, _options, _type, _to, _data3, _nonce, _gasLimit, _gasPrice, _maxPriorityFeePerGas, _maxFeePerGas, _value, _chainId, _sig, _accessList, _maxFeePerBlobGas, _blobVersionedHashes, _kzg, _blobs, _Transaction_instances, getSerialized_fn, _types, _fullTypes, _encoderCache, _TypedDataEncoder_instances, getEncoder_fn, _offset2, _tokens, _TokenString_instances, subTokenString_fn, _ParamType_instances, walkAsync_fn, _AbiCoder_instances, getCoder_fn, _errors, _events, _functions, _abiCoder, _Interface_instances, getFunction_fn, getEvent_fn, _transactions, _logs, _startBlock, _iface, _iface2, _filter, _a, _supports2544, _resolver, _EnsResolver_instances, fetch_fn, _EnsResolver_static, getResolver_fn, _url2, _processFunc, _name, _chainId2, _plugins, _provider, _poller, _interval, _blockNumber, _PollingBlockSubscriber_instances, poll_fn, _provider2, _poll, _running, _tag, _lastBlock, _filter2, _hash, _provider3, _filter3, _poller2, _running2, _blockNumber2, _PollingEventSubscriber_instances, poll_fn2, _subs, _plugins2, _pausedState, _destroyed, _networkPromise, _anyNetwork, _performCache, _lastBlockNumber, _nextTimer, _timers, _disableCcipRead, _options2, _AbstractProvider_instances, perform_fn, call_fn, checkNetwork_fn, getAccountValue_fn, getBlock_fn, hasSub_fn, getSub_fn, _provider4, _filterIdPromise, _poller3, _running3, _network, _hault, _FilterIdSubscriber_instances, poll_fn3, teardown_fn, _event, _options3, _nextId, _payloads, _drainTimer, _notReady, _network2, _pendingDetectNetwork, _JsonRpcApiProvider_instances, scheduleDrain_fn, _pollingInterval, _request2;
  var niceErrors = {
    0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
    1: function _(prop) {
      return "Cannot decorate undefined property: '" + prop.toString() + "'";
    },
    2: function _(prop) {
      return "invalid decorator for '" + prop.toString() + "'";
    },
    3: function _(prop) {
      return "Cannot decorate '" + prop.toString() + "': action can only be used on properties with a function value.";
    },
    4: function _(prop) {
      return "Cannot decorate '" + prop.toString() + "': computed can only be used on getter properties.";
    },
    5: "'keys()' can only be used on observable objects, arrays, sets and maps",
    6: "'values()' can only be used on observable objects, arrays, sets and maps",
    7: "'entries()' can only be used on observable objects, arrays and maps",
    8: "'set()' can only be used on observable objects, arrays and maps",
    9: "'remove()' can only be used on observable objects, arrays and maps",
    10: "'has()' can only be used on observable objects, arrays and maps",
    11: "'get()' can only be used on observable objects, arrays and maps",
    12: "Invalid annotation",
    13: "Dynamic observable objects cannot be frozen",
    14: "Intercept handlers should return nothing or a change object",
    15: "Observable arrays cannot be frozen",
    16: "Modification exception: the internal structure of an observable array was changed.",
    17: function _(index, length) {
      return "[mobx.array] Index out of bounds, " + index + " is larger than " + length;
    },
    18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
    19: function _(other) {
      return "Cannot initialize from classes that inherit from Map: " + other.constructor.name;
    },
    20: function _(other) {
      return "Cannot initialize map from " + other;
    },
    21: function _(dataStructure) {
      return "Cannot convert to map from '" + dataStructure + "'";
    },
    22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
    23: "It is not possible to get index atoms from arrays",
    24: function _(thing) {
      return "Cannot obtain administration from " + thing;
    },
    25: function _(property, name) {
      return "the entry '" + property + "' does not exist in the observable map '" + name + "'";
    },
    26: "please specify a property",
    27: function _(property, name) {
      return "no observable property '" + property.toString() + "' found on the observable object '" + name + "'";
    },
    28: function _(thing) {
      return "Cannot obtain atom from " + thing;
    },
    29: "Expecting some object",
    30: "invalid action stack. did you forget to finish an action?",
    31: "missing option for computed: get",
    32: function _(name, derivation) {
      return "Cycle detected in computation " + name + ": " + derivation;
    },
    33: function _(name) {
      return "The setter of computed value '" + name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
    },
    34: function _(name) {
      return "[ComputedValue '" + name + "'] It is not possible to assign a new value to a computed value.";
    },
    35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
    36: "isolateGlobalState should be called before MobX is running any reactions",
    37: function _(method) {
      return "[mobx] `observableArray." + method + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + method + "()` instead";
    }
  };
  var errors = process.env.NODE_ENV !== "production" ? niceErrors : {};
  function die(error) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (process.env.NODE_ENV !== "production") {
      var e = typeof error === "string" ? error : errors[error];
      if (typeof e === "function") e = e.apply(null, args);
      throw new Error("[MobX] " + e);
    }
    throw new Error(typeof error === "number" ? "[MobX] minified error nr: " + error + (args.length ? " " + args.join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/mobx6/src/errors.ts" : "[MobX] " + error);
  }
  var mockGlobal = {};
  function getGlobal$1() {
    if (typeof window !== "undefined") {
      return window;
    }
    if (typeof global !== "undefined") {
      return global;
    }
    if (typeof self !== "undefined") {
      return self;
    }
    return mockGlobal;
  }
  var assign = Object.assign;
  var getDescriptor = Object.getOwnPropertyDescriptor;
  var defineProperty = Object.defineProperty;
  var objectPrototype = Object.prototype;
  var EMPTY_ARRAY = [];
  Object.freeze(EMPTY_ARRAY);
  var EMPTY_OBJECT = {};
  Object.freeze(EMPTY_OBJECT);
  var hasProxy = typeof Proxy !== "undefined";
  var plainObjectString = /* @__PURE__ */ Object.toString();
  function assertProxies() {
    if (!hasProxy) {
      die(process.env.NODE_ENV !== "production" ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : "Proxy not available");
    }
  }
  function warnAboutProxyRequirement(msg) {
    if (process.env.NODE_ENV !== "production" && globalState.verifyProxies) {
      die("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + msg);
    }
  }
  function getNextId() {
    return ++globalState.mobxGuid;
  }
  function once(func) {
    var invoked = false;
    return function() {
      if (invoked) return;
      invoked = true;
      return func.apply(this, arguments);
    };
  }
  var noop$1 = function noop2() {
  };
  function isFunction$1(fn) {
    return typeof fn === "function";
  }
  function isStringish(value) {
    var t = typeof value;
    switch (t) {
      case "string":
      case "symbol":
      case "number":
        return true;
    }
    return false;
  }
  function isObject$1(value) {
    return value !== null && typeof value === "object";
  }
  function isPlainObject$1(value) {
    var _proto$constructor;
    if (!isObject$1(value)) return false;
    var proto = Object.getPrototypeOf(value);
    if (proto == null) return true;
    return ((_proto$constructor = proto.constructor) == null ? void 0 : _proto$constructor.toString()) === plainObjectString;
  }
  function isGenerator(obj) {
    var constructor = obj == null ? void 0 : obj.constructor;
    if (!constructor) return false;
    if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) return true;
    return false;
  }
  function addHiddenProp(object2, propName, value) {
    defineProperty(object2, propName, {
      enumerable: false,
      writable: true,
      configurable: true,
      value
    });
  }
  function addHiddenFinalProp(object2, propName, value) {
    defineProperty(object2, propName, {
      enumerable: false,
      writable: false,
      configurable: true,
      value
    });
  }
  function assertPropertyConfigurable(object2, prop) {
    if (process.env.NODE_ENV !== "production") {
      var descriptor = getDescriptor(object2, prop);
      if ((descriptor == null ? void 0 : descriptor.configurable) === false || (descriptor == null ? void 0 : descriptor.writable) === false) die("Cannot make property '" + stringifyKey(prop) + "' observable, it is not configurable and writable in the target object");
    }
  }
  function createInstanceofPredicate(name, theClass) {
    var propName = "isMobX" + name;
    theClass.prototype[propName] = true;
    return function(x) {
      return isObject$1(x) && x[propName] === true;
    };
  }
  function isES6Map(thing) {
    return thing instanceof Map;
  }
  function isES6Set(thing) {
    return thing instanceof Set;
  }
  var hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";
  function getPlainObjectKeys(object2) {
    var keys = Object.keys(object2);
    if (!hasGetOwnPropertySymbols) return keys;
    var symbols = Object.getOwnPropertySymbols(object2);
    if (!symbols.length) return keys;
    return [].concat(keys, symbols.filter(function(s) {
      return objectPrototype.propertyIsEnumerable.call(object2, s);
    }));
  }
  var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols ? function(obj) {
    return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
  } : (
    /* istanbul ignore next */
    Object.getOwnPropertyNames
  );
  function stringifyKey(key) {
    if (typeof key === "string") return key;
    if (typeof key === "symbol") return key.toString();
    return new String(key).toString();
  }
  function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
  }
  function hasProp(target, prop) {
    return objectPrototype.hasOwnProperty.call(target, prop);
  }
  var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(target) {
    var res = {};
    ownKeys(target).forEach(function(key) {
      res[key] = getDescriptor(target, key);
    });
    return res;
  };
  var mobxDecoratorsSymbol = /* @__PURE__ */ Symbol("mobx-decorators");
  var mobxAppliedDecoratorsSymbol = /* @__PURE__ */ Symbol("mobx-applied-decorators");
  function createDecorator(type) {
    return assign(function(target, property) {
      if (property === void 0) {
        createDecoratorAndAnnotation(type, target);
      } else {
        storeDecorator(target, property, type);
      }
    }, {
      annotationType_: type
    });
  }
  function createDecoratorAndAnnotation(type, arg_) {
    return assign(function(target, property) {
      storeDecorator(target, property, type, arg_);
    }, {
      annotationType_: type,
      arg_
    });
  }
  function storeDecorator(target, property, type, arg_) {
    var desc = getDescriptor(target, mobxDecoratorsSymbol);
    var map;
    if (desc) {
      map = desc.value;
    } else {
      map = {};
      addHiddenProp(target, mobxDecoratorsSymbol, map);
    }
    map[property] = {
      annotationType_: type,
      arg_
    };
  }
  function applyDecorators(target) {
    if (target[mobxAppliedDecoratorsSymbol]) return true;
    var current = target;
    var annotations = [];
    while (current && current !== objectPrototype) {
      var desc = getDescriptor(current, mobxDecoratorsSymbol);
      if (desc) {
        if (!annotations.length) {
          for (var key in desc.value) {
            if (!hasProp(target, key) && !hasProp(current, key)) {
              return true;
            }
          }
        }
        annotations.unshift(desc.value);
      }
      current = Object.getPrototypeOf(current);
    }
    annotations.forEach(function(a) {
      makeObservable(target, a);
    });
    addHiddenProp(target, mobxAppliedDecoratorsSymbol, true);
    return annotations.length > 0;
  }
  var $mobx = /* @__PURE__ */ Symbol("mobx administration");
  var Atom = /* @__PURE__ */ function() {
    function Atom2(name_) {
      if (name_ === void 0) {
        name_ = "Atom@" + getNextId();
      }
      this.name_ = void 0;
      this.isPendingUnobservation_ = false;
      this.isBeingObserved_ = false;
      this.observers_ = /* @__PURE__ */ new Set();
      this.diffValue_ = 0;
      this.lastAccessedBy_ = 0;
      this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
      this.onBOL = void 0;
      this.onBUOL = void 0;
      this.name_ = name_;
    }
    var _proto = Atom2.prototype;
    _proto.onBO = function onBO() {
      if (this.onBOL) {
        this.onBOL.forEach(function(listener) {
          return listener();
        });
      }
    };
    _proto.onBUO = function onBUO() {
      if (this.onBUOL) {
        this.onBUOL.forEach(function(listener) {
          return listener();
        });
      }
    };
    _proto.reportObserved = function reportObserved$1() {
      return reportObserved(this);
    };
    _proto.reportChanged = function reportChanged() {
      startBatch();
      propagateChanged(this);
      endBatch();
    };
    _proto.toString = function toString2() {
      return this.name_;
    };
    return Atom2;
  }();
  var isAtom = /* @__PURE__ */ createInstanceofPredicate("Atom", Atom);
  function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) {
      onBecomeObservedHandler = noop$1;
    }
    if (onBecomeUnobservedHandler === void 0) {
      onBecomeUnobservedHandler = noop$1;
    }
    var atom = new Atom(name);
    if (onBecomeObservedHandler !== noop$1) {
      onBecomeObserved(atom, onBecomeObservedHandler);
    }
    if (onBecomeUnobservedHandler !== noop$1) {
      onBecomeUnobserved(atom, onBecomeUnobservedHandler);
    }
    return atom;
  }
  function identityComparer(a, b2) {
    return a === b2;
  }
  function structuralComparer(a, b2) {
    return deepEqual(a, b2);
  }
  function shallowComparer(a, b2) {
    return deepEqual(a, b2, 1);
  }
  function defaultComparer(a, b2) {
    return Object.is(a, b2);
  }
  var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    "default": defaultComparer,
    shallow: shallowComparer
  };
  function deepEnhancer(v, _, name) {
    if (isObservable(v)) return v;
    if (Array.isArray(v)) return observable.array(v, {
      name
    });
    if (isPlainObject$1(v)) return observable.object(v, void 0, {
      name
    });
    if (isES6Map(v)) return observable.map(v, {
      name
    });
    if (isES6Set(v)) return observable.set(v, {
      name
    });
    return v;
  }
  function shallowEnhancer(v, _, name) {
    if (v === void 0 || v === null) return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) return v;
    if (Array.isArray(v)) return observable.array(v, {
      name,
      deep: false
    });
    if (isPlainObject$1(v)) return observable.object(v, void 0, {
      name,
      deep: false
    });
    if (isES6Map(v)) return observable.map(v, {
      name,
      deep: false
    });
    if (isES6Set(v)) return observable.set(v, {
      name,
      deep: false
    });
    if (process.env.NODE_ENV !== "production") die("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
  }
  function referenceEnhancer(newValue) {
    return newValue;
  }
  function refStructEnhancer(v, oldValue) {
    if (process.env.NODE_ENV !== "production" && isObservable(v)) die("observable.struct should not be used with observable values");
    if (deepEqual(v, oldValue)) return oldValue;
    return v;
  }
  var _annotationToEnhancer;
  var OBSERVABLE = "observable";
  var OBSERVABLE_REF = "observable.ref";
  var OBSERVABLE_SHALLOW = "observable.shallow";
  var OBSERVABLE_STRUCT = "observable.struct";
  var defaultCreateObservableOptions = {
    deep: true,
    name: void 0,
    defaultDecorator: void 0,
    proxy: true
  };
  Object.freeze(defaultCreateObservableOptions);
  function asCreateObservableOptions(thing) {
    return thing || defaultCreateObservableOptions;
  }
  function getEnhancerFromOption(options) {
    return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
  }
  var annotationToEnhancer = (_annotationToEnhancer = {}, _annotationToEnhancer[OBSERVABLE] = deepEnhancer, _annotationToEnhancer[OBSERVABLE_REF] = referenceEnhancer, _annotationToEnhancer[OBSERVABLE_SHALLOW] = shallowEnhancer, _annotationToEnhancer[OBSERVABLE_STRUCT] = refStructEnhancer, _annotationToEnhancer);
  function getEnhancerFromAnnotation(annotation) {
    var _annotationToEnhancer2;
    return !annotation ? deepEnhancer : (_annotationToEnhancer2 = annotationToEnhancer[annotation.annotationType_]) != null ? _annotationToEnhancer2 : die(12);
  }
  function createObservable(v, arg2, arg3) {
    if (isStringish(arg2)) {
      storeDecorator(v, arg2, OBSERVABLE);
      return;
    }
    if (isObservable(v)) return v;
    var res = isPlainObject$1(v) ? observable.object(v, arg2, arg3) : Array.isArray(v) ? observable.array(v, arg2) : isES6Map(v) ? observable.map(v, arg2) : isES6Set(v) ? observable.set(v, arg2) : v;
    if (res !== v) return res;
    return observable.box(v);
  }
  createObservable.annotationType_ = OBSERVABLE;
  var observableFactories = {
    box: function box(value, options) {
      var o = asCreateObservableOptions(options);
      return new ObservableValue(value, getEnhancerFromOption(o), o.name, true, o.equals);
    },
    array: function array(initialValues, options) {
      var o = asCreateObservableOptions(options);
      return (globalState.useProxies === false || o.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOption(o), o.name);
    },
    map: function map(initialValues, options) {
      var o = asCreateObservableOptions(options);
      return new ObservableMap(initialValues, getEnhancerFromOption(o), o.name);
    },
    set: function set2(initialValues, options) {
      var o = asCreateObservableOptions(options);
      return new ObservableSet(initialValues, getEnhancerFromOption(o), o.name);
    },
    object: function object2(props, decorators, options) {
      var o = asCreateObservableOptions(options);
      var base = {};
      asObservableObject(base, options == null ? void 0 : options.name, getEnhancerFromOption(o));
      return extendObservable(globalState.useProxies === false || o.proxy === false ? base : createDynamicObservableObject(base), props, decorators, options);
    },
    ref: /* @__PURE__ */ createDecorator(OBSERVABLE_REF),
    shallow: /* @__PURE__ */ createDecorator(OBSERVABLE_SHALLOW),
    deep: /* @__PURE__ */ createDecorator(OBSERVABLE),
    struct: /* @__PURE__ */ createDecorator(OBSERVABLE_STRUCT)
  };
  var observable = /* @__PURE__ */ assign(createObservable, observableFactories);
  var COMPUTED = "computed";
  var COMPUTED_STRUCT = "computed.struct";
  var computed = function computed2(arg1, arg2, arg3) {
    if (isStringish(arg2)) {
      return storeDecorator(arg1, arg2, COMPUTED);
    }
    if (isPlainObject$1(arg1)) {
      return createDecoratorAndAnnotation(COMPUTED, arg1);
    }
    if (process.env.NODE_ENV !== "production") {
      if (!isFunction$1(arg1)) die("First argument to `computed` should be an expression.");
      if (isFunction$1(arg2)) die("A setter as second argument is no longer supported, use `{set: fn }` option instead");
    }
    var opts = isPlainObject$1(arg2) ? arg2 : {};
    opts.get = arg1;
    opts.name = opts.name || arg1.name || "";
    return new ComputedValue(opts);
  };
  computed.annotationType_ = COMPUTED;
  computed.struct = /* @__PURE__ */ assign(function(target, property) {
    storeDecorator(target, property, COMPUTED_STRUCT);
  }, {
    annotationType_: COMPUTED_STRUCT
  });
  var _getDescriptor$config, _getDescriptor;
  var currentActionId = 0;
  var nextActionId = 1;
  var isFunctionNameConfigurable = (_getDescriptor$config = (_getDescriptor = /* @__PURE__ */ getDescriptor(function() {
  }, "name")) == null ? void 0 : _getDescriptor.configurable) != null ? _getDescriptor$config : false;
  var tmpNameDescriptor = {
    value: "action",
    configurable: true,
    writable: false,
    enumerable: false
  };
  function createAction(actionName, fn, autoAction2, ref) {
    if (autoAction2 === void 0) {
      autoAction2 = false;
    }
    if (process.env.NODE_ENV !== "production") {
      if (!isFunction$1(fn)) die("`action` can only be invoked on functions");
      if (typeof actionName !== "string" || !actionName) die("actions should have valid names, got: '" + actionName + "'");
    }
    function res() {
      return executeAction(actionName, autoAction2, fn, this, arguments);
    }
    res.isMobxAction = true;
    if (isFunctionNameConfigurable) {
      tmpNameDescriptor.value = actionName;
      Object.defineProperty(res, "name", tmpNameDescriptor);
    }
    return res;
  }
  function executeAction(actionName, canRunAsDerivation, fn, scope, args) {
    var runInfo = _startAction(actionName, canRunAsDerivation, scope, args);
    try {
      return fn.apply(scope, args);
    } catch (err) {
      runInfo.error_ = err;
      throw err;
    } finally {
      _endAction(runInfo);
    }
  }
  function _startAction(actionName, canRunAsDerivation, scope, args) {
    var notifySpy_ = process.env.NODE_ENV !== "production" && isSpyEnabled() && !!actionName;
    var startTime_ = 0;
    if (process.env.NODE_ENV !== "production" && notifySpy_) {
      startTime_ = Date.now();
      var flattenedArgs = args ? Array.from(args) : EMPTY_ARRAY;
      spyReportStart({
        type: ACTION,
        name: actionName,
        object: scope,
        arguments: flattenedArgs
      });
    }
    var prevDerivation_ = globalState.trackingDerivation;
    var runAsAction = !canRunAsDerivation || !prevDerivation_;
    startBatch();
    var prevAllowStateChanges_ = globalState.allowStateChanges;
    if (runAsAction) {
      untrackedStart();
      prevAllowStateChanges_ = allowStateChangesStart(true);
    }
    var prevAllowStateReads_ = allowStateReadsStart(true);
    var runInfo = {
      runAsAction_: runAsAction,
      prevDerivation_,
      prevAllowStateChanges_,
      prevAllowStateReads_,
      notifySpy_,
      startTime_,
      actionId_: nextActionId++,
      parentActionId_: currentActionId
    };
    currentActionId = runInfo.actionId_;
    return runInfo;
  }
  function _endAction(runInfo) {
    if (currentActionId !== runInfo.actionId_) {
      die(30);
    }
    currentActionId = runInfo.parentActionId_;
    if (runInfo.error_ !== void 0) {
      globalState.suppressReactionErrors = true;
    }
    allowStateChangesEnd(runInfo.prevAllowStateChanges_);
    allowStateReadsEnd(runInfo.prevAllowStateReads_);
    endBatch();
    if (runInfo.runAsAction_) untrackedEnd(runInfo.prevDerivation_);
    if (process.env.NODE_ENV !== "production" && runInfo.notifySpy_) {
      spyReportEnd({
        time: Date.now() - runInfo.startTime_
      });
    }
    globalState.suppressReactionErrors = false;
  }
  function allowStateChanges(allowStateChanges2, func) {
    var prev = allowStateChangesStart(allowStateChanges2);
    try {
      return func();
    } finally {
      allowStateChangesEnd(prev);
    }
  }
  function allowStateChangesStart(allowStateChanges2) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges2;
    return prev;
  }
  function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    return Constructor;
  }
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n2 = Object.prototype.toString.call(o).slice(8, -1);
    if (n2 === "Object" && o.constructor) n2 = o.constructor.name;
    if (n2 === "Map" || n2 === "Set") return Array.from(o);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike) {
        if (it) o = it;
        var i = 0;
        return function() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    it = o[Symbol.iterator]();
    return it.next.bind(it);
  }
  var _Symbol$toPrimitive;
  var CREATE = "create";
  _Symbol$toPrimitive = Symbol.toPrimitive;
  var ObservableValue = /* @__PURE__ */ function(_Atom) {
    _inheritsLoose(ObservableValue2, _Atom);
    function ObservableValue2(value, enhancer, name_, notifySpy, equals) {
      var _this;
      if (name_ === void 0) {
        name_ = "ObservableValue@" + getNextId();
      }
      if (notifySpy === void 0) {
        notifySpy = true;
      }
      if (equals === void 0) {
        equals = comparer["default"];
      }
      _this = _Atom.call(this, name_) || this;
      _this.enhancer = void 0;
      _this.name_ = void 0;
      _this.equals = void 0;
      _this.hasUnreportedChange_ = false;
      _this.interceptors_ = void 0;
      _this.changeListeners_ = void 0;
      _this.value_ = void 0;
      _this.dehancer = void 0;
      _this.enhancer = enhancer;
      _this.name_ = name_;
      _this.equals = equals;
      _this.value_ = enhancer(value, void 0, name_);
      if (process.env.NODE_ENV !== "production" && notifySpy && isSpyEnabled()) {
        spyReport({
          type: CREATE,
          object: _assertThisInitialized(_this),
          observableKind: "value",
          debugObjectName: _this.name_,
          newValue: "" + _this.value_
        });
      }
      return _this;
    }
    var _proto = ObservableValue2.prototype;
    _proto.dehanceValue = function dehanceValue(value) {
      if (this.dehancer !== void 0) return this.dehancer(value);
      return value;
    };
    _proto.set = function set2(newValue) {
      var oldValue = this.value_;
      newValue = this.prepareNewValue_(newValue);
      if (newValue !== globalState.UNCHANGED) {
        var notifySpy = isSpyEnabled();
        if (process.env.NODE_ENV !== "production" && notifySpy) {
          spyReportStart({
            type: UPDATE,
            object: this,
            observableKind: "value",
            debugObjectName: this.name_,
            newValue,
            oldValue
          });
        }
        this.setNewValue_(newValue);
        if (process.env.NODE_ENV !== "production" && notifySpy) spyReportEnd();
      }
    };
    _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
      checkIfStateModificationsAreAllowed(this);
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this,
          type: UPDATE,
          newValue
        });
        if (!change) return globalState.UNCHANGED;
        newValue = change.newValue;
      }
      newValue = this.enhancer(newValue, this.value_, this.name_);
      return this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue;
    };
    _proto.setNewValue_ = function setNewValue_(newValue) {
      var oldValue = this.value_;
      this.value_ = newValue;
      this.reportChanged();
      if (hasListeners(this)) {
        notifyListeners(this, {
          type: UPDATE,
          object: this,
          newValue,
          oldValue
        });
      }
    };
    _proto.get = function get() {
      this.reportObserved();
      return this.dehanceValue(this.value_);
    };
    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
      if (fireImmediately) listener({
        observableKind: "value",
        debugObjectName: this.name_,
        object: this,
        type: UPDATE,
        newValue: this.value_,
        oldValue: void 0
      });
      return registerListener(this, listener);
    };
    _proto.raw = function raw() {
      return this.value_;
    };
    _proto.toJSON = function toJSON() {
      return this.get();
    };
    _proto.toString = function toString2() {
      return this.name_ + "[" + this.value_ + "]";
    };
    _proto.valueOf = function valueOf() {
      return toPrimitive(this.get());
    };
    _proto[_Symbol$toPrimitive] = function() {
      return this.valueOf();
    };
    return ObservableValue2;
  }(Atom);
  var _Symbol$toPrimitive$1;
  _Symbol$toPrimitive$1 = Symbol.toPrimitive;
  var ComputedValue = /* @__PURE__ */ function() {
    function ComputedValue2(options) {
      this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
      this.observing_ = [];
      this.newObserving_ = null;
      this.isBeingObserved_ = false;
      this.isPendingUnobservation_ = false;
      this.observers_ = /* @__PURE__ */ new Set();
      this.diffValue_ = 0;
      this.runId_ = 0;
      this.lastAccessedBy_ = 0;
      this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
      this.unboundDepsCount_ = 0;
      this.mapid_ = "#" + getNextId();
      this.value_ = new CaughtException(null);
      this.name_ = void 0;
      this.triggeredBy_ = void 0;
      this.isComputing_ = false;
      this.isRunningSetter_ = false;
      this.derivation = void 0;
      this.setter_ = void 0;
      this.isTracing_ = TraceMode.NONE;
      this.scope_ = void 0;
      this.equals_ = void 0;
      this.requiresReaction_ = void 0;
      this.keepAlive_ = void 0;
      this.onBOL = void 0;
      this.onBUOL = void 0;
      if (!options.get) die(31);
      this.derivation = options.get;
      this.name_ = options.name || "ComputedValue@" + getNextId();
      if (options.set) this.setter_ = createAction(this.name_ + "-setter", options.set);
      this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer["default"]);
      this.scope_ = options.context;
      this.requiresReaction_ = !!options.requiresReaction;
      this.keepAlive_ = !!options.keepAlive;
    }
    var _proto = ComputedValue2.prototype;
    _proto.onBecomeStale_ = function onBecomeStale_() {
      propagateMaybeChanged(this);
    };
    _proto.onBO = function onBO() {
      if (this.onBOL) {
        this.onBOL.forEach(function(listener) {
          return listener();
        });
      }
    };
    _proto.onBUO = function onBUO() {
      if (this.onBUOL) {
        this.onBUOL.forEach(function(listener) {
          return listener();
        });
      }
    };
    _proto.get = function get() {
      if (this.isComputing_) die(32, this.name_, this.derivation);
      if (globalState.inBatch === 0 && // !globalState.trackingDerivatpion &&
      this.observers_.size === 0 && !this.keepAlive_) {
        if (shouldCompute(this)) {
          this.warnAboutUntrackedRead_();
          startBatch();
          this.value_ = this.computeValue_(false);
          endBatch();
        }
      } else {
        reportObserved(this);
        if (shouldCompute(this)) {
          var prevTrackingContext = globalState.trackingContext;
          if (this.keepAlive_ && !prevTrackingContext) globalState.trackingContext = this;
          if (this.trackAndCompute()) propagateChangeConfirmed(this);
          globalState.trackingContext = prevTrackingContext;
        }
      }
      var result = this.value_;
      if (isCaughtException(result)) throw result.cause;
      return result;
    };
    _proto.set = function set2(value) {
      if (this.setter_) {
        if (this.isRunningSetter_) die(33, this.name_);
        this.isRunningSetter_ = true;
        try {
          this.setter_.call(this.scope_, value);
        } finally {
          this.isRunningSetter_ = false;
        }
      } else die(34, this.name_);
    };
    _proto.trackAndCompute = function trackAndCompute() {
      var oldValue = this.value_;
      var wasSuspended = (
        /* see #1208 */
        this.dependenciesState_ === IDerivationState_.NOT_TRACKING_
      );
      var newValue = this.computeValue_(true);
      if (process.env.NODE_ENV !== "production" && isSpyEnabled()) {
        spyReport({
          observableKind: "computed",
          debugObjectName: this.name_,
          object: this.scope_,
          type: "update",
          oldValue: this.value_,
          newValue
        });
      }
      var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);
      if (changed) {
        this.value_ = newValue;
      }
      return changed;
    };
    _proto.computeValue_ = function computeValue_(track) {
      this.isComputing_ = true;
      var prev = allowStateChangesStart(false);
      var res;
      if (track) {
        res = trackDerivedFunction(this, this.derivation, this.scope_);
      } else {
        if (globalState.disableErrorBoundaries === true) {
          res = this.derivation.call(this.scope_);
        } else {
          try {
            res = this.derivation.call(this.scope_);
          } catch (e) {
            res = new CaughtException(e);
          }
        }
      }
      allowStateChangesEnd(prev);
      this.isComputing_ = false;
      return res;
    };
    _proto.suspend_ = function suspend_() {
      if (!this.keepAlive_) {
        clearObserving(this);
        this.value_ = void 0;
      }
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
      var _this = this;
      var firstTime = true;
      var prevValue = void 0;
      return autorun(function() {
        var newValue = _this.get();
        if (!firstTime || fireImmediately) {
          var prevU = untrackedStart();
          listener({
            observableKind: "computed",
            debugObjectName: _this.name_,
            type: UPDATE,
            object: _this,
            newValue,
            oldValue: prevValue
          });
          untrackedEnd(prevU);
        }
        firstTime = false;
        prevValue = newValue;
      });
    };
    _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {
      if (!(process.env.NODE_ENV !== "production")) return;
      if (this.requiresReaction_ === true) {
        die("[mobx] Computed value " + this.name_ + " is read outside a reactive context");
      }
      if (this.isTracing_ !== TraceMode.NONE) {
        console.log("[mobx.trace] '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute");
      }
      if (globalState.computedRequiresReaction) {
        console.warn("[mobx] Computed value " + this.name_ + " is being read outside a reactive context. Doing a full recompute");
      }
    };
    _proto.toString = function toString2() {
      return this.name_ + "[" + this.derivation.toString() + "]";
    };
    _proto.valueOf = function valueOf() {
      return toPrimitive(this.get());
    };
    _proto[_Symbol$toPrimitive$1] = function() {
      return this.valueOf();
    };
    return ComputedValue2;
  }();
  var isComputedValue = /* @__PURE__ */ createInstanceofPredicate("ComputedValue", ComputedValue);
  var IDerivationState_;
  (function(IDerivationState_2) {
    IDerivationState_2[IDerivationState_2["NOT_TRACKING_"] = -1] = "NOT_TRACKING_";
    IDerivationState_2[IDerivationState_2["UP_TO_DATE_"] = 0] = "UP_TO_DATE_";
    IDerivationState_2[IDerivationState_2["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_";
    IDerivationState_2[IDerivationState_2["STALE_"] = 2] = "STALE_";
  })(IDerivationState_ || (IDerivationState_ = {}));
  var TraceMode;
  (function(TraceMode2) {
    TraceMode2[TraceMode2["NONE"] = 0] = "NONE";
    TraceMode2[TraceMode2["LOG"] = 1] = "LOG";
    TraceMode2[TraceMode2["BREAK"] = 2] = "BREAK";
  })(TraceMode || (TraceMode = {}));
  var CaughtException = function CaughtException2(cause) {
    this.cause = void 0;
    this.cause = cause;
  };
  function isCaughtException(e) {
    return e instanceof CaughtException;
  }
  function shouldCompute(derivation) {
    switch (derivation.dependenciesState_) {
      case IDerivationState_.UP_TO_DATE_:
        return false;
      case IDerivationState_.NOT_TRACKING_:
      case IDerivationState_.STALE_:
        return true;
      case IDerivationState_.POSSIBLY_STALE_: {
        var prevAllowStateReads = allowStateReadsStart(true);
        var prevUntracked = untrackedStart();
        var obs = derivation.observing_, l = obs.length;
        for (var i = 0; i < l; i++) {
          var obj = obs[i];
          if (isComputedValue(obj)) {
            if (globalState.disableErrorBoundaries) {
              obj.get();
            } else {
              try {
                obj.get();
              } catch (e) {
                untrackedEnd(prevUntracked);
                allowStateReadsEnd(prevAllowStateReads);
                return true;
              }
            }
            if (derivation.dependenciesState_ === IDerivationState_.STALE_) {
              untrackedEnd(prevUntracked);
              allowStateReadsEnd(prevAllowStateReads);
              return true;
            }
          }
        }
        changeDependenciesStateTo0(derivation);
        untrackedEnd(prevUntracked);
        allowStateReadsEnd(prevAllowStateReads);
        return false;
      }
    }
  }
  function checkIfStateModificationsAreAllowed(atom) {
    if (!(process.env.NODE_ENV !== "production")) {
      return;
    }
    var hasObservers = atom.observers_.size > 0;
    if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "always")) console.warn("[MobX] " + (globalState.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + atom.name_);
  }
  function checkIfStateReadsAreAllowed(observable2) {
    if (process.env.NODE_ENV !== "production" && !globalState.allowStateReads && globalState.observableRequiresReaction) {
      console.warn("[mobx] Observable " + observable2.name_ + " being read outside a reactive context");
    }
  }
  function trackDerivedFunction(derivation, f, context) {
    var prevAllowStateReads = allowStateReadsStart(true);
    changeDependenciesStateTo0(derivation);
    derivation.newObserving_ = new Array(derivation.observing_.length + 100);
    derivation.unboundDepsCount_ = 0;
    derivation.runId_ = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    globalState.inBatch++;
    var result;
    if (globalState.disableErrorBoundaries === true) {
      result = f.call(context);
    } else {
      try {
        result = f.call(context);
      } catch (e) {
        result = new CaughtException(e);
      }
    }
    globalState.inBatch--;
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    warnAboutDerivationWithoutDependencies(derivation);
    allowStateReadsEnd(prevAllowStateReads);
    return result;
  }
  function warnAboutDerivationWithoutDependencies(derivation) {
    if (!(process.env.NODE_ENV !== "production")) return;
    if (derivation.observing_.length !== 0) return;
    if (globalState.reactionRequiresObservable || derivation.requiresObservable_) {
      console.warn("[mobx] Derivation " + derivation.name_ + " is created/updated without reading any observable value");
    }
  }
  function bindDependencies(derivation) {
    var prevObserving = derivation.observing_;
    var observing = derivation.observing_ = derivation.newObserving_;
    var lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_;
    var i0 = 0, l = derivation.unboundDepsCount_;
    for (var i = 0; i < l; i++) {
      var dep = observing[i];
      if (dep.diffValue_ === 0) {
        dep.diffValue_ = 1;
        if (i0 !== i) observing[i0] = dep;
        i0++;
      }
      if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
        lowestNewObservingDerivationState = dep.dependenciesState_;
      }
    }
    observing.length = i0;
    derivation.newObserving_ = null;
    l = prevObserving.length;
    while (l--) {
      var _dep = prevObserving[l];
      if (_dep.diffValue_ === 0) {
        removeObserver(_dep, derivation);
      }
      _dep.diffValue_ = 0;
    }
    while (i0--) {
      var _dep2 = observing[i0];
      if (_dep2.diffValue_ === 1) {
        _dep2.diffValue_ = 0;
        addObserver(_dep2, derivation);
      }
    }
    if (lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_) {
      derivation.dependenciesState_ = lowestNewObservingDerivationState;
      derivation.onBecomeStale_();
    }
  }
  function clearObserving(derivation) {
    var obs = derivation.observing_;
    derivation.observing_ = [];
    var i = obs.length;
    while (i--) {
      removeObserver(obs[i], derivation);
    }
    derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
  }
  function untracked(action2) {
    var prev = untrackedStart();
    try {
      return action2();
    } finally {
      untrackedEnd(prev);
    }
  }
  function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
  }
  function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
  }
  function allowStateReadsStart(allowStateReads) {
    var prev = globalState.allowStateReads;
    globalState.allowStateReads = allowStateReads;
    return prev;
  }
  function allowStateReadsEnd(prev) {
    globalState.allowStateReads = prev;
  }
  function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState_ === IDerivationState_.UP_TO_DATE_) return;
    derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
    var obs = derivation.observing_;
    var i = obs.length;
    while (i--) {
      obs[i].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    }
  }
  var MobXGlobals = function MobXGlobals2() {
    this.version = 6;
    this.UNCHANGED = {};
    this.trackingDerivation = null;
    this.trackingContext = null;
    this.runId = 0;
    this.mobxGuid = 0;
    this.inBatch = 0;
    this.pendingUnobservations = [];
    this.pendingReactions = [];
    this.isRunningReactions = false;
    this.allowStateChanges = false;
    this.allowStateReads = true;
    this.enforceActions = true;
    this.spyListeners = [];
    this.globalReactionErrorHandlers = [];
    this.computedRequiresReaction = false;
    this.reactionRequiresObservable = false;
    this.observableRequiresReaction = false;
    this.disableErrorBoundaries = false;
    this.suppressReactionErrors = false;
    this.useProxies = true;
    this.verifyProxies = false;
  };
  var canMergeGlobalState = true;
  var isolateCalled = false;
  var globalState = /* @__PURE__ */ function() {
    var global2 = /* @__PURE__ */ getGlobal$1();
    if (global2.__mobxInstanceCount > 0 && !global2.__mobxGlobals) canMergeGlobalState = false;
    if (global2.__mobxGlobals && global2.__mobxGlobals.version !== new MobXGlobals().version) canMergeGlobalState = false;
    if (!canMergeGlobalState) {
      setTimeout(function() {
        if (!isolateCalled) {
          die(35);
        }
      }, 1);
      return new MobXGlobals();
    } else if (global2.__mobxGlobals) {
      global2.__mobxInstanceCount += 1;
      if (!global2.__mobxGlobals.UNCHANGED) global2.__mobxGlobals.UNCHANGED = {};
      return global2.__mobxGlobals;
    } else {
      global2.__mobxInstanceCount = 1;
      return global2.__mobxGlobals = /* @__PURE__ */ new MobXGlobals();
    }
  }();
  function isolateGlobalState() {
    if (globalState.pendingReactions.length || globalState.inBatch || globalState.isRunningReactions) die(36);
    isolateCalled = true;
    if (canMergeGlobalState) {
      var global2 = getGlobal$1();
      if (--global2.__mobxInstanceCount === 0) global2.__mobxGlobals = void 0;
      globalState = new MobXGlobals();
    }
  }
  function addObserver(observable2, node) {
    observable2.observers_.add(node);
    if (observable2.lowestObserverState_ > node.dependenciesState_) observable2.lowestObserverState_ = node.dependenciesState_;
  }
  function removeObserver(observable2, node) {
    observable2.observers_["delete"](node);
    if (observable2.observers_.size === 0) {
      queueForUnobservation(observable2);
    }
  }
  function queueForUnobservation(observable2) {
    if (observable2.isPendingUnobservation_ === false) {
      observable2.isPendingUnobservation_ = true;
      globalState.pendingUnobservations.push(observable2);
    }
  }
  function startBatch() {
    globalState.inBatch++;
  }
  function endBatch() {
    if (--globalState.inBatch === 0) {
      runReactions();
      var list = globalState.pendingUnobservations;
      for (var i = 0; i < list.length; i++) {
        var observable2 = list[i];
        observable2.isPendingUnobservation_ = false;
        if (observable2.observers_.size === 0) {
          if (observable2.isBeingObserved_) {
            observable2.isBeingObserved_ = false;
            observable2.onBUO();
          }
          if (observable2 instanceof ComputedValue) {
            observable2.suspend_();
          }
        }
      }
      globalState.pendingUnobservations = [];
    }
  }
  function reportObserved(observable2) {
    checkIfStateReadsAreAllowed(observable2);
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
      if (derivation.runId_ !== observable2.lastAccessedBy_) {
        observable2.lastAccessedBy_ = derivation.runId_;
        derivation.newObserving_[derivation.unboundDepsCount_++] = observable2;
        if (!observable2.isBeingObserved_ && globalState.trackingContext) {
          observable2.isBeingObserved_ = true;
          observable2.onBO();
        }
      }
      return true;
    } else if (observable2.observers_.size === 0 && globalState.inBatch > 0) {
      queueForUnobservation(observable2);
    }
    return false;
  }
  function propagateChanged(observable2) {
    if (observable2.lowestObserverState_ === IDerivationState_.STALE_) return;
    observable2.lowestObserverState_ = IDerivationState_.STALE_;
    observable2.observers_.forEach(function(d) {
      if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
        if (process.env.NODE_ENV !== "production" && d.isTracing_ !== TraceMode.NONE) {
          logTraceInfo(d, observable2);
        }
        d.onBecomeStale_();
      }
      d.dependenciesState_ = IDerivationState_.STALE_;
    });
  }
  function propagateChangeConfirmed(observable2) {
    if (observable2.lowestObserverState_ === IDerivationState_.STALE_) return;
    observable2.lowestObserverState_ = IDerivationState_.STALE_;
    observable2.observers_.forEach(function(d) {
      if (d.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) d.dependenciesState_ = IDerivationState_.STALE_;
      else if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) observable2.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    });
  }
  function propagateMaybeChanged(observable2) {
    if (observable2.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_) return;
    observable2.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
    observable2.observers_.forEach(function(d) {
      if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
        d.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;
        if (process.env.NODE_ENV !== "production" && d.isTracing_ !== TraceMode.NONE) {
          logTraceInfo(d, observable2);
        }
        d.onBecomeStale_();
      }
    });
  }
  function logTraceInfo(derivation, observable2) {
    console.log("[mobx.trace] '" + derivation.name_ + "' is invalidated due to a change in: '" + observable2.name_ + "'");
    if (derivation.isTracing_ === TraceMode.BREAK) {
      var lines = [];
      printDepTree(getDependencyTree(derivation), lines, 1);
      new Function("debugger;\n/*\nTracing '" + derivation.name_ + "'\n\nYou are entering this break point because derivation '" + derivation.name_ + "' is being traced and '" + observable2.name_ + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
  }
  function printDepTree(tree, lines, depth) {
    if (lines.length >= 1e3) {
      lines.push("(and many more)");
      return;
    }
    lines.push("" + new Array(depth).join("	") + tree.name);
    if (tree.dependencies) tree.dependencies.forEach(function(child) {
      return printDepTree(child, lines, depth + 1);
    });
  }
  var Reaction = /* @__PURE__ */ function() {
    function Reaction2(name_, onInvalidate_, errorHandler_, requiresObservable_) {
      if (name_ === void 0) {
        name_ = "Reaction@" + getNextId();
      }
      if (requiresObservable_ === void 0) {
        requiresObservable_ = false;
      }
      this.name_ = void 0;
      this.onInvalidate_ = void 0;
      this.errorHandler_ = void 0;
      this.requiresObservable_ = void 0;
      this.observing_ = [];
      this.newObserving_ = [];
      this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
      this.diffValue_ = 0;
      this.runId_ = 0;
      this.unboundDepsCount_ = 0;
      this.mapid_ = "#" + getNextId();
      this.isDisposed_ = false;
      this.isScheduled_ = false;
      this.isTrackPending_ = false;
      this.isRunning_ = false;
      this.isTracing_ = TraceMode.NONE;
      this.name_ = name_;
      this.onInvalidate_ = onInvalidate_;
      this.errorHandler_ = errorHandler_;
      this.requiresObservable_ = requiresObservable_;
    }
    var _proto = Reaction2.prototype;
    _proto.onBecomeStale_ = function onBecomeStale_() {
      this.schedule_();
    };
    _proto.schedule_ = function schedule_() {
      if (!this.isScheduled_) {
        this.isScheduled_ = true;
        globalState.pendingReactions.push(this);
        runReactions();
      }
    };
    _proto.isScheduled = function isScheduled() {
      return this.isScheduled_;
    };
    _proto.runReaction_ = function runReaction_() {
      if (!this.isDisposed_) {
        startBatch();
        this.isScheduled_ = false;
        if (shouldCompute(this)) {
          this.isTrackPending_ = true;
          try {
            this.onInvalidate_();
            if (process.env.NODE_ENV !== "production" && this.isTrackPending_ && isSpyEnabled()) {
              spyReport({
                name: this.name_,
                type: "scheduled-reaction"
              });
            }
          } catch (e) {
            this.reportExceptionInDerivation_(e);
          }
        }
        endBatch();
      }
    };
    _proto.track = function track(fn) {
      if (this.isDisposed_) {
        return;
      }
      startBatch();
      var notify = isSpyEnabled();
      var startTime;
      if (process.env.NODE_ENV !== "production" && notify) {
        startTime = Date.now();
        spyReportStart({
          name: this.name_,
          type: "reaction"
        });
      }
      this.isRunning_ = true;
      var prevReaction = globalState.trackingContext;
      globalState.trackingContext = this;
      var result = trackDerivedFunction(this, fn, void 0);
      globalState.trackingContext = prevReaction;
      this.isRunning_ = false;
      this.isTrackPending_ = false;
      if (this.isDisposed_) {
        clearObserving(this);
      }
      if (isCaughtException(result)) this.reportExceptionInDerivation_(result.cause);
      if (process.env.NODE_ENV !== "production" && notify) {
        spyReportEnd({
          time: Date.now() - startTime
        });
      }
      endBatch();
    };
    _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
      var _this = this;
      if (this.errorHandler_) {
        this.errorHandler_(error, this);
        return;
      }
      if (globalState.disableErrorBoundaries) throw error;
      var message = process.env.NODE_ENV !== "production" ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : "[mobx] uncaught error in '" + this + "'";
      if (!globalState.suppressReactionErrors) {
        console.error(message, error);
      } else if (process.env.NODE_ENV !== "production") console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)");
      if (process.env.NODE_ENV !== "production" && isSpyEnabled()) {
        spyReport({
          type: "error",
          name: this.name_,
          message,
          error: "" + error
        });
      }
      globalState.globalReactionErrorHandlers.forEach(function(f) {
        return f(error, _this);
      });
    };
    _proto.dispose = function dispose() {
      if (!this.isDisposed_) {
        this.isDisposed_ = true;
        if (!this.isRunning_) {
          startBatch();
          clearObserving(this);
          endBatch();
        }
      }
    };
    _proto.getDisposer_ = function getDisposer_() {
      var r = this.dispose.bind(this);
      r[$mobx] = this;
      return r;
    };
    _proto.toString = function toString2() {
      return "Reaction[" + this.name_ + "]";
    };
    _proto.trace = function trace$1(enterBreakPoint) {
      if (enterBreakPoint === void 0) {
        enterBreakPoint = false;
      }
      trace(this, enterBreakPoint);
    };
    return Reaction2;
  }();
  var MAX_REACTION_ITERATIONS = 100;
  var reactionScheduler = function reactionScheduler2(f) {
    return f();
  };
  function runReactions() {
    if (globalState.inBatch > 0 || globalState.isRunningReactions) return;
    reactionScheduler(runReactionsHelper);
  }
  function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    while (allReactions.length > 0) {
      if (++iterations === MAX_REACTION_ITERATIONS) {
        console.error(process.env.NODE_ENV !== "production" ? "Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]) : "[mobx] cycle in reaction: " + allReactions[0]);
        allReactions.splice(0);
      }
      var remainingReactions = allReactions.splice(0);
      for (var i = 0, l = remainingReactions.length; i < l; i++) {
        remainingReactions[i].runReaction_();
      }
    }
    globalState.isRunningReactions = false;
  }
  var isReaction = /* @__PURE__ */ createInstanceofPredicate("Reaction", Reaction);
  function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function reactionScheduler2(f) {
      return fn(function() {
        return baseScheduler(f);
      });
    };
  }
  function isSpyEnabled() {
    return process.env.NODE_ENV !== "production" && !!globalState.spyListeners.length;
  }
  function spyReport(event) {
    if (!(process.env.NODE_ENV !== "production")) return;
    if (!globalState.spyListeners.length) return;
    var listeners = globalState.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++) {
      listeners[i](event);
    }
  }
  function spyReportStart(event) {
    if (!(process.env.NODE_ENV !== "production")) return;
    var change = _extends({}, event, {
      spyReportStart: true
    });
    spyReport(change);
  }
  var END_EVENT = {
    type: "report-end",
    spyReportEnd: true
  };
  function spyReportEnd(change) {
    if (!(process.env.NODE_ENV !== "production")) return;
    if (change) spyReport(_extends({}, change, {
      type: "report-end",
      spyReportEnd: true
    }));
    else spyReport(END_EVENT);
  }
  function spy(listener) {
    if (!(process.env.NODE_ENV !== "production")) {
      console.warn("[mobx.spy] Is a no-op in production builds");
      return function() {
      };
    } else {
      globalState.spyListeners.push(listener);
      return once(function() {
        globalState.spyListeners = globalState.spyListeners.filter(function(l) {
          return l !== listener;
        });
      });
    }
  }
  var ACTION = "action";
  var ACTION_BOUND = "action.bound";
  var AUTOACTION = "autoAction";
  var AUTOACTION_BOUND = "autoAction.bound";
  var ACTION_UNNAMED = "<unnamed action>";
  function createActionFactory(autoAction2, annotation) {
    var res = function action2(arg1, arg2) {
      if (isFunction$1(arg1)) return createAction(arg1.name || ACTION_UNNAMED, arg1, autoAction2);
      if (isFunction$1(arg2)) return createAction(arg1, arg2, autoAction2);
      if (isStringish(arg2)) {
        return storeDecorator(arg1, arg2, annotation);
      }
      if (isStringish(arg1)) {
        return createDecoratorAndAnnotation(annotation, arg1);
      }
      if (process.env.NODE_ENV !== "production") die("Invalid arguments for `action`");
    };
    res.annotationType_ = annotation;
    return res;
  }
  var action = /* @__PURE__ */ createActionFactory(false, ACTION);
  var autoAction = /* @__PURE__ */ createActionFactory(true, AUTOACTION);
  action.bound = /* @__PURE__ */ createDecorator(ACTION_BOUND);
  autoAction.bound = /* @__PURE__ */ createDecorator(AUTOACTION_BOUND);
  function isAction(thing) {
    return isFunction$1(thing) && thing.isMobxAction === true;
  }
  function autorun(view, opts) {
    if (opts === void 0) {
      opts = EMPTY_OBJECT;
    }
    if (process.env.NODE_ENV !== "production") {
      if (!isFunction$1(view)) die("Autorun expects a function as first argument");
      if (isAction(view)) die("Autorun does not accept actions since actions are untrackable");
    }
    var name = opts && opts.name || view.name || "Autorun@" + getNextId();
    var runSync = !opts.scheduler && !opts.delay;
    var reaction2;
    if (runSync) {
      reaction2 = new Reaction(name, function() {
        this.track(reactionRunner);
      }, opts.onError, opts.requiresObservable);
    } else {
      var scheduler = createSchedulerFromOptions(opts);
      var isScheduled = false;
      reaction2 = new Reaction(name, function() {
        if (!isScheduled) {
          isScheduled = true;
          scheduler(function() {
            isScheduled = false;
            if (!reaction2.isDisposed_) reaction2.track(reactionRunner);
          });
        }
      }, opts.onError, opts.requiresObservable);
    }
    function reactionRunner() {
      view(reaction2);
    }
    reaction2.schedule_();
    return reaction2.getDisposer_();
  }
  var run = function run2(f) {
    return f();
  };
  function createSchedulerFromOptions(opts) {
    return opts.scheduler ? opts.scheduler : opts.delay ? function(f) {
      return setTimeout(f, opts.delay);
    } : run;
  }
  function reaction(expression, effect, opts) {
    if (opts === void 0) {
      opts = EMPTY_OBJECT;
    }
    if (process.env.NODE_ENV !== "production") {
      if (!isFunction$1(expression) || !isFunction$1(effect)) die("First and second argument to reaction should be functions");
      if (!isPlainObject$1(opts)) die("Third argument of reactions should be an object");
    }
    var name = opts.name || "Reaction@" + getNextId();
    var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var oldValue = void 0;
    var equals = opts.compareStructural ? comparer.structural : opts.equals || comparer["default"];
    var r = new Reaction(name, function() {
      if (firstTime || runSync) {
        reactionRunner();
      } else if (!isScheduled) {
        isScheduled = true;
        scheduler(reactionRunner);
      }
    }, opts.onError, opts.requiresObservable);
    function reactionRunner() {
      isScheduled = false;
      if (r.isDisposed_) return;
      var changed = false;
      r.track(function() {
        var nextValue = allowStateChanges(false, function() {
          return expression(r);
        });
        changed = firstTime || !equals(value, nextValue);
        oldValue = value;
        value = nextValue;
      });
      if (firstTime && opts.fireImmediately) effectAction(value, oldValue, r);
      else if (!firstTime && changed) effectAction(value, oldValue, r);
      firstTime = false;
    }
    r.schedule_();
    return r.getDisposer_();
  }
  function wrapErrorHandler(errorHandler, baseFn) {
    return function() {
      try {
        return baseFn.apply(this, arguments);
      } catch (e) {
        errorHandler.call(this, e);
      }
    };
  }
  var ON_BECOME_OBSERVED = "onBO";
  var ON_BECOME_UNOBSERVED = "onBUO";
  function onBecomeObserved(thing, arg2, arg3) {
    return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
  }
  function onBecomeUnobserved(thing, arg2, arg3) {
    return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
  }
  function interceptHook(hook, thing, arg2, arg3) {
    var atom = getAtom(thing);
    var cb = isFunction$1(arg3) ? arg3 : arg2;
    var listenersKey = hook + "L";
    if (atom[listenersKey]) {
      atom[listenersKey].add(cb);
    } else {
      atom[listenersKey] = /* @__PURE__ */ new Set([cb]);
    }
    return function() {
      var hookListeners = atom[listenersKey];
      if (hookListeners) {
        hookListeners["delete"](cb);
        if (hookListeners.size === 0) {
          delete atom[listenersKey];
        }
      }
    };
  }
  var NEVER = "never";
  var ALWAYS = "always";
  var OBSERVED = "observed";
  function configure(options) {
    if (options.isolateGlobalState === true) {
      isolateGlobalState();
    }
    var useProxies = options.useProxies, enforceActions = options.enforceActions;
    if (useProxies !== void 0) {
      globalState.useProxies = useProxies === ALWAYS ? true : useProxies === NEVER ? false : typeof Proxy !== "undefined";
    }
    if (useProxies === "ifavailable") globalState.verifyProxies = true;
    if (enforceActions !== void 0) {
      var ea = enforceActions === ALWAYS ? ALWAYS : enforceActions === OBSERVED;
      globalState.enforceActions = ea;
      globalState.allowStateChanges = ea === true || ea === ALWAYS ? false : true;
    }
    ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries"].forEach(function(key) {
      if (key in options) globalState[key] = !!options[key];
    });
    globalState.allowStateReads = !globalState.observableRequiresReaction;
    if (process.env.NODE_ENV !== "production" && globalState.disableErrorBoundaries === true) {
      console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
    }
    if (options.reactionScheduler) {
      setReactionScheduler(options.reactionScheduler);
    }
  }
  function extendObservable(target, properties, annotations, options) {
    if (process.env.NODE_ENV !== "production") {
      if (arguments.length > 4) die("'extendObservable' expected 2-4 arguments");
      if (typeof target !== "object") die("'extendObservable' expects an object as first argument");
      if (isObservableMap(target)) die("'extendObservable' should not be used on maps, use map.merge instead");
      if (!isPlainObject$1(properties)) die("'extendObservabe' only accepts plain objects as second argument");
      if (isObservable(properties) || isObservable(annotations)) die("Extending an object with another observable (object) is not supported");
    }
    var o = asCreateObservableOptions(options);
    var adm = asObservableObject(target, o.name, getEnhancerFromOption(o));
    startBatch();
    try {
      var descs = getOwnPropertyDescriptors(properties);
      getPlainObjectKeys(descs).forEach(function(key) {
        makeProperty(adm, target, key, descs[key], !annotations ? true : key in annotations ? annotations[key] : true, true, !!(options == null ? void 0 : options.autoBind));
      });
    } finally {
      endBatch();
    }
    return target;
  }
  function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
  }
  function nodeToDependencyTree(node) {
    var result = {
      name: node.name_
    };
    if (node.observing_ && node.observing_.length > 0) result.dependencies = unique(node.observing_).map(nodeToDependencyTree);
    return result;
  }
  function unique(list) {
    return Array.from(new Set(list));
  }
  var FLOW = "flow";
  var generatorId = 0;
  function FlowCancellationError() {
    this.message = "FLOW_CANCELLED";
  }
  FlowCancellationError.prototype = /* @__PURE__ */ Object.create(Error.prototype);
  var flow = /* @__PURE__ */ Object.assign(function flow2(arg1, arg2) {
    if (isStringish(arg2)) {
      return storeDecorator(arg1, arg2, "flow");
    }
    if (process.env.NODE_ENV !== "production" && arguments.length !== 1) die("Flow expects 1 argument and cannot be used as decorator");
    var generator = arg1;
    var name = generator.name || "<unnamed flow>";
    var res = function res2() {
      var ctx = this;
      var args = arguments;
      var runId = ++generatorId;
      var gen2 = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
      var rejector;
      var pendingPromise = void 0;
      var promise = new Promise(function(resolve, reject) {
        var stepId = 0;
        rejector = reject;
        function onFulfilled(res3) {
          pendingPromise = void 0;
          var ret;
          try {
            ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen2.next).call(gen2, res3);
          } catch (e) {
            return reject(e);
          }
          next(ret);
        }
        function onRejected(err) {
          pendingPromise = void 0;
          var ret;
          try {
            ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen2["throw"]).call(gen2, err);
          } catch (e) {
            return reject(e);
          }
          next(ret);
        }
        function next(ret) {
          if (isFunction$1(ret == null ? void 0 : ret.then)) {
            ret.then(next, reject);
            return;
          }
          if (ret.done) return resolve(ret.value);
          pendingPromise = Promise.resolve(ret.value);
          return pendingPromise.then(onFulfilled, onRejected);
        }
        onFulfilled(void 0);
      });
      promise.cancel = action(name + " - runid: " + runId + " - cancel", function() {
        try {
          if (pendingPromise) cancelPromise(pendingPromise);
          var _res = gen2["return"](void 0);
          var yieldedPromise = Promise.resolve(_res.value);
          yieldedPromise.then(noop$1, noop$1);
          cancelPromise(yieldedPromise);
          rejector(new FlowCancellationError());
        } catch (e) {
          rejector(e);
        }
      });
      return promise;
    };
    res.isMobXFlow = true;
    return res;
  }, {
    annotationType_: "flow"
  });
  function cancelPromise(promise) {
    if (isFunction$1(promise.cancel)) promise.cancel();
  }
  function isFlow(fn) {
    return (fn == null ? void 0 : fn.isMobXFlow) === true;
  }
  function _isObservable(value, property) {
    if (!value) return false;
    if (property !== void 0) {
      if (process.env.NODE_ENV !== "production" && (isObservableMap(value) || isObservableArray(value))) return die("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
      if (isObservableObject(value)) {
        return value[$mobx].values_.has(property);
      }
      return false;
    }
    return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
  }
  function isObservable(value) {
    if (process.env.NODE_ENV !== "production" && arguments.length !== 1) die("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isObservable(value);
  }
  function isObservableProp(value, propName) {
    if (process.env.NODE_ENV !== "production" && !isStringish(propName)) return die("expected a property name as second argument");
    return _isObservable(value, propName);
  }
  function set(obj, key, value) {
    if (arguments.length === 2 && !isObservableSet(obj)) {
      startBatch();
      var _values = key;
      try {
        for (var _key in _values) {
          set(obj, _key, _values[_key]);
        }
      } finally {
        endBatch();
      }
      return;
    }
    if (isObservableObject(obj)) {
      var adm = obj[$mobx];
      var existingObservable = adm.values_.get(key);
      if (existingObservable) {
        adm.write_(key, value);
      } else {
        adm.addObservableProp_(key, value, adm.defaultEnhancer_);
      }
    } else if (isObservableMap(obj)) {
      obj.set(key, value);
    } else if (isObservableSet(obj)) {
      obj.add(key);
    } else if (isObservableArray(obj)) {
      if (typeof key !== "number") key = parseInt(key, 10);
      if (key < 0) die("Invalid index: '" + key + "'");
      startBatch();
      if (key >= obj.length) obj.length = key + 1;
      obj[key] = value;
      endBatch();
    } else die(8);
  }
  function trace() {
    if (!(process.env.NODE_ENV !== "production")) die("trace() is not available in production builds");
    var enterBreakPoint = false;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (typeof args[args.length - 1] === "boolean") enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
      return die("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing_ === TraceMode.NONE) {
      console.log("[mobx.trace] '" + derivation.name_ + "' tracing enabled");
    }
    derivation.isTracing_ = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
  }
  function getAtomFromArgs(args) {
    switch (args.length) {
      case 0:
        return globalState.trackingDerivation;
      case 1:
        return getAtom(args[0]);
      case 2:
        return getAtom(args[0], args[1]);
    }
  }
  function transaction(action2, thisArg) {
    if (thisArg === void 0) {
      thisArg = void 0;
    }
    startBatch();
    try {
      return action2.apply(thisArg);
    } finally {
      endBatch();
    }
  }
  function getAdm(target) {
    return target[$mobx];
  }
  var objectProxyTraps = {
    has: function has(target, name) {
      if (name === $mobx || name === "constructor") return true;
      if (process.env.NODE_ENV !== "production" && globalState.trackingDerivation) warnAboutProxyRequirement("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead.");
      var adm = getAdm(target);
      if (isStringish(name)) return adm.has_(name);
      return name in target;
    },
    get: function get(target, name) {
      if (name === $mobx || name === "constructor") return target[name];
      var adm = getAdm(target);
      var observable2 = adm.values_.get(name);
      if (observable2 instanceof Atom) {
        var result = observable2.get();
        if (result === void 0) {
          adm.has_(name);
        }
        return result;
      }
      if (isStringish(name)) adm.has_(name);
      return target[name];
    },
    set: function set$1(target, name, value) {
      if (!isStringish(name)) return false;
      if (process.env.NODE_ENV !== "production" && !getAdm(target).values_.has(name)) {
        warnAboutProxyRequirement("add a new observable property through direct assignment. Use 'set' from 'mobx' instead.");
      }
      set(target, name, value);
      return true;
    },
    deleteProperty: function deleteProperty(target, name) {
      if (process.env.NODE_ENV !== "production") warnAboutProxyRequirement("delete properties from an observable object. Use 'remove' from 'mobx' instead.");
      if (!isStringish(name)) return false;
      var adm = getAdm(target);
      adm.remove_(name);
      return true;
    },
    ownKeys: function ownKeys2(target) {
      if (process.env.NODE_ENV !== "production" && globalState.trackingDerivation) warnAboutProxyRequirement("iterate keys to detect added / removed properties. Use `keys` from 'mobx' instead.");
      var adm = getAdm(target);
      adm.keysAtom_.reportObserved();
      return Reflect.ownKeys(target);
    },
    preventExtensions: function preventExtensions(target) {
      die(13);
    }
  };
  function createDynamicObservableObject(base) {
    assertProxies();
    var proxy = new Proxy(base, objectProxyTraps);
    base[$mobx].proxy_ = proxy;
    return proxy;
  }
  function hasInterceptors(interceptable) {
    return interceptable.interceptors_ !== void 0 && interceptable.interceptors_.length > 0;
  }
  function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
    interceptors.push(handler);
    return once(function() {
      var idx = interceptors.indexOf(handler);
      if (idx !== -1) interceptors.splice(idx, 1);
    });
  }
  function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
      var interceptors = [].concat(interceptable.interceptors_ || []);
      for (var i = 0, l = interceptors.length; i < l; i++) {
        change = interceptors[i](change);
        if (change && !change.type) die(14);
        if (!change) break;
      }
      return change;
    } finally {
      untrackedEnd(prevU);
    }
  }
  function hasListeners(listenable) {
    return listenable.changeListeners_ !== void 0 && listenable.changeListeners_.length > 0;
  }
  function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
    listeners.push(handler);
    return once(function() {
      var idx = listeners.indexOf(handler);
      if (idx !== -1) listeners.splice(idx, 1);
    });
  }
  function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners_;
    if (!listeners) return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
      listeners[i](change);
    }
    untrackedEnd(prevU);
  }
  var CACHED_ANNOTATIONS = /* @__PURE__ */ Symbol("mobx-cached-annotations");
  function makeAction(target, key, name, fn, asAutoAction) {
    addHiddenProp(target, key, asAutoAction ? autoAction(name || key, fn) : action(name || key, fn));
  }
  function getInferredAnnotation(desc, defaultAnnotation, autoBind) {
    if (desc.get) return computed;
    if (desc.set) return false;
    if (isFunction$1(desc.value)) return isGenerator(desc.value) ? flow : isAction(desc.value) ? false : autoBind ? autoAction.bound : autoAction;
    return defaultAnnotation != null ? defaultAnnotation : observable.deep;
  }
  function getDescriptorInChain(target, prop) {
    var current = target;
    while (current && current !== objectPrototype) {
      var desc = getDescriptor(current, prop);
      if (desc) {
        return [desc, current];
      }
      current = Object.getPrototypeOf(current);
    }
    die(1, prop);
  }
  function makeProperty(adm, owner, key, descriptor, annotation, forceCopy, autoBind) {
    var _annotation$annotatio;
    var target = adm.target_;
    var defaultAnnotation = observable;
    var originAnnotation = annotation;
    if (annotation === true) {
      annotation = getInferredAnnotation(descriptor, defaultAnnotation, autoBind);
    }
    if (annotation === false) {
      if (forceCopy) {
        defineProperty(target, key, descriptor);
      }
      return;
    }
    if (!annotation || annotation === true || !annotation.annotationType_) {
      return die(2, key);
    }
    var type = annotation.annotationType_;
    switch (type) {
      case AUTOACTION:
      case ACTION: {
        var fn = descriptor.value;
        if (!isFunction$1(fn)) die(3, key);
        if (owner !== target && !forceCopy) {
          if (!isAction(owner[key])) makeAction(owner, key, annotation.arg_, fn, type === AUTOACTION);
        } else {
          makeAction(target, key, annotation.arg_, fn, type === AUTOACTION);
        }
        break;
      }
      case AUTOACTION_BOUND:
      case ACTION_BOUND: {
        var _fn = descriptor.value;
        if (!isFunction$1(_fn)) die(3, key);
        makeAction(target, key, annotation.arg_, _fn.bind(adm.proxy_ || target), type === AUTOACTION_BOUND);
        break;
      }
      case FLOW: {
        if (owner !== target && !forceCopy) {
          if (!isFlow(owner[key])) addHiddenProp(owner, key, flow(descriptor.value));
        } else {
          addHiddenProp(target, key, flow(descriptor.value));
        }
        break;
      }
      case COMPUTED:
      case COMPUTED_STRUCT: {
        if (!descriptor.get) die(4, key);
        adm.addComputedProp_(target, key, _extends({
          get: descriptor.get,
          set: descriptor.set,
          compareStructural: annotation.annotationType_ === COMPUTED_STRUCT
        }, annotation.arg_));
        break;
      }
      case OBSERVABLE:
      case OBSERVABLE_REF:
      case OBSERVABLE_SHALLOW:
      case OBSERVABLE_STRUCT: {
        if (process.env.NODE_ENV !== "production" && isObservableProp(target, key)) die("Cannot decorate '" + key.toString() + "': the property is already decorated as observable.");
        if (process.env.NODE_ENV !== "production" && !("value" in descriptor)) die("Cannot decorate '" + key.toString() + "': observable cannot be used on setter / getter properties.");
        var enhancer = originAnnotation === true ? adm.defaultEnhancer_ : getEnhancerFromAnnotation(annotation);
        adm.addObservableProp_(key, descriptor.value, enhancer);
        break;
      }
      default:
        if (process.env.NODE_ENV !== "production") die("invalid decorator '" + ((_annotation$annotatio = annotation.annotationType_) != null ? _annotation$annotatio : annotation) + "' for '" + key.toString() + "'");
    }
  }
  function makeObservable(target, annotations, options) {
    var autoBind = false;
    var adm = asObservableObject(target, void 0, getEnhancerFromAnnotation(void 0));
    startBatch();
    try {
      if (!annotations) {
        var didDecorate = applyDecorators(target);
        if (process.env.NODE_ENV !== "production" && !didDecorate) die("No annotations were passed to makeObservable, but no decorator members have been found either");
        return target;
      }
      var make = function make2(key) {
        var annotation = annotations[key];
        var _getDescriptorInChain = getDescriptorInChain(target, key), desc = _getDescriptorInChain[0], owner = _getDescriptorInChain[1];
        makeProperty(adm, owner, key, desc, annotation, false, autoBind);
      };
      ownKeys(annotations).forEach(make);
    } finally {
      endBatch();
    }
    return target;
  }
  function makeAutoObservable(target, overrides, options) {
    var proto = Object.getPrototypeOf(target);
    var isPlain = proto == null || proto === objectPrototype;
    if (process.env.NODE_ENV !== "production") {
      if (!isPlain && !isPlainObject$1(proto)) die("'makeAutoObservable' can only be used for classes that don't have a superclass");
      if (isObservableObject(target)) die("makeAutoObservable can only be used on objects not already made observable");
    }
    var annotations;
    if (!isPlain && hasProp(proto, CACHED_ANNOTATIONS)) {
      annotations = proto[CACHED_ANNOTATIONS];
    } else {
      annotations = _extends({}, overrides);
      extractAnnotationsFromObject(target, annotations);
      if (!isPlain) {
        extractAnnotationsFromProto(proto, annotations);
        addHiddenProp(proto, CACHED_ANNOTATIONS, annotations);
      }
    }
    makeObservable(target, annotations);
    return target;
  }
  function extractAnnotationsFromObject(target, collector, options) {
    var _options$defaultDecor;
    var autoBind = false;
    var defaultAnnotation = (_options$defaultDecor = void 0) != null ? _options$defaultDecor : observable.deep;
    Object.entries(getOwnPropertyDescriptors(target)).forEach(function(_ref) {
      var key = _ref[0], descriptor = _ref[1];
      if (key in collector || key === "constructor") return;
      collector[key] = getInferredAnnotation(descriptor, defaultAnnotation, autoBind);
    });
  }
  function extractAnnotationsFromProto(proto, collector, options) {
    Object.entries(getOwnPropertyDescriptors(proto)).forEach(function(_ref2) {
      var key = _ref2[0], prop = _ref2[1];
      if (key in collector || key === "constructor") return;
      if (prop.get) {
        collector[key] = computed;
      } else if (isFunction$1(prop.value)) {
        collector[key] = isGenerator(prop.value) ? flow : autoAction;
      }
    });
  }
  var SPLICE = "splice";
  var UPDATE = "update";
  var MAX_SPLICE_SIZE = 1e4;
  var arrayTraps = {
    get: function get(target, name) {
      var adm = target[$mobx];
      if (name === $mobx) return adm;
      if (name === "length") return adm.getArrayLength_();
      if (typeof name === "string" && !isNaN(name)) {
        return adm.get_(parseInt(name));
      }
      if (hasProp(arrayExtensions, name)) {
        return arrayExtensions[name];
      }
      return target[name];
    },
    set: function set2(target, name, value) {
      var adm = target[$mobx];
      if (name === "length") {
        adm.setArrayLength_(value);
      }
      if (typeof name === "symbol" || isNaN(name)) {
        target[name] = value;
      } else {
        adm.set_(parseInt(name), value);
      }
      return true;
    },
    preventExtensions: function preventExtensions() {
      die(15);
    }
  };
  var ObservableArrayAdministration = /* @__PURE__ */ function() {
    function ObservableArrayAdministration2(name, enhancer, owned_, legacyMode_) {
      this.owned_ = void 0;
      this.legacyMode_ = void 0;
      this.atom_ = void 0;
      this.values_ = [];
      this.interceptors_ = void 0;
      this.changeListeners_ = void 0;
      this.enhancer_ = void 0;
      this.dehancer = void 0;
      this.proxy_ = void 0;
      this.lastKnownLength_ = 0;
      this.owned_ = owned_;
      this.legacyMode_ = legacyMode_;
      this.atom_ = new Atom(name || "ObservableArray@" + getNextId());
      this.enhancer_ = function(newV, oldV) {
        return enhancer(newV, oldV, name + "[..]");
      };
    }
    var _proto = ObservableArrayAdministration2.prototype;
    _proto.dehanceValue_ = function dehanceValue_(value) {
      if (this.dehancer !== void 0) return this.dehancer(value);
      return value;
    };
    _proto.dehanceValues_ = function dehanceValues_(values) {
      if (this.dehancer !== void 0 && values.length > 0) return values.map(this.dehancer);
      return values;
    };
    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
      if (fireImmediately === void 0) {
        fireImmediately = false;
      }
      if (fireImmediately) {
        listener({
          observableKind: "array",
          object: this.proxy_,
          debugObjectName: this.atom_.name_,
          type: "splice",
          index: 0,
          added: this.values_.slice(),
          addedCount: this.values_.length,
          removed: [],
          removedCount: 0
        });
      }
      return registerListener(this, listener);
    };
    _proto.getArrayLength_ = function getArrayLength_() {
      this.atom_.reportObserved();
      return this.values_.length;
    };
    _proto.setArrayLength_ = function setArrayLength_(newLength) {
      if (typeof newLength !== "number" || newLength < 0) die("Out of range: " + newLength);
      var currentLength = this.values_.length;
      if (newLength === currentLength) return;
      else if (newLength > currentLength) {
        var newItems = new Array(newLength - currentLength);
        for (var i = 0; i < newLength - currentLength; i++) {
          newItems[i] = void 0;
        }
        this.spliceWithArray_(currentLength, 0, newItems);
      } else this.spliceWithArray_(newLength, currentLength - newLength);
    };
    _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
      if (oldLength !== this.lastKnownLength_) die(16);
      this.lastKnownLength_ += delta;
      if (this.legacyMode_ && delta > 0) reserveArrayBuffer(oldLength + delta + 1);
    };
    _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
      var _this = this;
      checkIfStateModificationsAreAllowed(this.atom_);
      var length = this.values_.length;
      if (index === void 0) index = 0;
      else if (index > length) index = length;
      else if (index < 0) index = Math.max(0, length + index);
      if (arguments.length === 1) deleteCount = length - index;
      else if (deleteCount === void 0 || deleteCount === null) deleteCount = 0;
      else deleteCount = Math.max(0, Math.min(deleteCount, length - index));
      if (newItems === void 0) newItems = EMPTY_ARRAY;
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_,
          type: SPLICE,
          index,
          removedCount: deleteCount,
          added: newItems
        });
        if (!change) return EMPTY_ARRAY;
        deleteCount = change.removedCount;
        newItems = change.added;
      }
      newItems = newItems.length === 0 ? newItems : newItems.map(function(v) {
        return _this.enhancer_(v, void 0);
      });
      if (this.legacyMode_ || process.env.NODE_ENV !== "production") {
        var lengthDelta = newItems.length - deleteCount;
        this.updateArrayLength_(length, lengthDelta);
      }
      var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
      if (deleteCount !== 0 || newItems.length !== 0) this.notifyArraySplice_(index, newItems, res);
      return this.dehanceValues_(res);
    };
    _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
      if (newItems.length < MAX_SPLICE_SIZE) {
        var _this$values_;
        return (_this$values_ = this.values_).splice.apply(_this$values_, [index, deleteCount].concat(newItems));
      } else {
        var res = this.values_.slice(index, index + deleteCount);
        var oldItems = this.values_.slice(index + deleteCount);
        this.values_.length = index + newItems.length - deleteCount;
        for (var i = 0; i < newItems.length; i++) {
          this.values_[index + i] = newItems[i];
        }
        for (var _i = 0; _i < oldItems.length; _i++) {
          this.values_[index + newItems.length + _i] = oldItems[_i];
        }
        return res;
      }
    };
    _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
      var notifySpy = !this.owned_ && isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "array",
        object: this.proxy_,
        type: UPDATE,
        debugObjectName: this.atom_.name_,
        index,
        newValue,
        oldValue
      } : null;
      if (process.env.NODE_ENV !== "production" && notifySpy) spyReportStart(change);
      this.atom_.reportChanged();
      if (notify) notifyListeners(this, change);
      if (process.env.NODE_ENV !== "production" && notifySpy) spyReportEnd();
    };
    _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
      var notifySpy = !this.owned_ && isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "array",
        object: this.proxy_,
        debugObjectName: this.atom_.name_,
        type: SPLICE,
        index,
        removed,
        added,
        removedCount: removed.length,
        addedCount: added.length
      } : null;
      if (process.env.NODE_ENV !== "production" && notifySpy) spyReportStart(change);
      this.atom_.reportChanged();
      if (notify) notifyListeners(this, change);
      if (process.env.NODE_ENV !== "production" && notifySpy) spyReportEnd();
    };
    _proto.get_ = function get_(index) {
      if (index < this.values_.length) {
        this.atom_.reportObserved();
        return this.dehanceValue_(this.values_[index]);
      }
      console.warn(process.env.NODE_ENV !== "production" ? "[mobx] Out of bounds read: " + index : "[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
    };
    _proto.set_ = function set_(index, newValue) {
      var values = this.values_;
      if (index < values.length) {
        checkIfStateModificationsAreAllowed(this.atom_);
        var oldValue = values[index];
        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            type: UPDATE,
            object: this.proxy_,
            index,
            newValue
          });
          if (!change) return;
          newValue = change.newValue;
        }
        newValue = this.enhancer_(newValue, oldValue);
        var changed = newValue !== oldValue;
        if (changed) {
          values[index] = newValue;
          this.notifyArrayChildUpdate_(index, newValue, oldValue);
        }
      } else if (index === values.length) {
        this.spliceWithArray_(index, 0, [newValue]);
      } else {
        die(17, index, values.length);
      }
    };
    return ObservableArrayAdministration2;
  }();
  function createObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) {
      name = "ObservableArray@" + getNextId();
    }
    if (owned === void 0) {
      owned = false;
    }
    assertProxies();
    var adm = new ObservableArrayAdministration(name, enhancer, owned, false);
    addHiddenFinalProp(adm.values_, $mobx, adm);
    var proxy = new Proxy(adm.values_, arrayTraps);
    adm.proxy_ = proxy;
    if (initialValues && initialValues.length) {
      var prev = allowStateChangesStart(true);
      adm.spliceWithArray_(0, 0, initialValues);
      allowStateChangesEnd(prev);
    }
    return proxy;
  }
  var arrayExtensions = {
    clear: function clear() {
      return this.splice(0);
    },
    replace: function replace(newItems) {
      var adm = this[$mobx];
      return adm.spliceWithArray_(0, adm.values_.length, newItems);
    },
    // Used by JSON.stringify
    toJSON: function toJSON() {
      return this.slice();
    },
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    splice: function splice(index, deleteCount) {
      for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        newItems[_key - 2] = arguments[_key];
      }
      var adm = this[$mobx];
      switch (arguments.length) {
        case 0:
          return [];
        case 1:
          return adm.spliceWithArray_(index);
        case 2:
          return adm.spliceWithArray_(index, deleteCount);
      }
      return adm.spliceWithArray_(index, deleteCount, newItems);
    },
    spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
      return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
    },
    push: function push() {
      var adm = this[$mobx];
      for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        items[_key2] = arguments[_key2];
      }
      adm.spliceWithArray_(adm.values_.length, 0, items);
      return adm.values_.length;
    },
    pop: function pop() {
      return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
    },
    shift: function shift() {
      return this.splice(0, 1)[0];
    },
    unshift: function unshift() {
      var adm = this[$mobx];
      for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        items[_key3] = arguments[_key3];
      }
      adm.spliceWithArray_(0, 0, items);
      return adm.values_.length;
    },
    reverse: function reverse() {
      if (globalState.trackingDerivation) {
        die(37, "reverse");
      }
      this.replace(this.slice().reverse());
      return this;
    },
    sort: function sort() {
      if (globalState.trackingDerivation) {
        die(37, "sort");
      }
      var copy2 = this.slice();
      copy2.sort.apply(copy2, arguments);
      this.replace(copy2);
      return this;
    },
    remove: function remove(value) {
      var adm = this[$mobx];
      var idx = adm.dehanceValues_(adm.values_).indexOf(value);
      if (idx > -1) {
        this.splice(idx, 1);
        return true;
      }
      return false;
    }
  };
  addArrayExtension("concat", simpleFunc);
  addArrayExtension("flat", simpleFunc);
  addArrayExtension("includes", simpleFunc);
  addArrayExtension("indexOf", simpleFunc);
  addArrayExtension("join", simpleFunc);
  addArrayExtension("lastIndexOf", simpleFunc);
  addArrayExtension("slice", simpleFunc);
  addArrayExtension("toString", simpleFunc);
  addArrayExtension("toLocaleString", simpleFunc);
  addArrayExtension("every", mapLikeFunc);
  addArrayExtension("filter", mapLikeFunc);
  addArrayExtension("find", mapLikeFunc);
  addArrayExtension("findIndex", mapLikeFunc);
  addArrayExtension("flatMap", mapLikeFunc);
  addArrayExtension("forEach", mapLikeFunc);
  addArrayExtension("map", mapLikeFunc);
  addArrayExtension("some", mapLikeFunc);
  addArrayExtension("reduce", reduceLikeFunc);
  addArrayExtension("reduceRight", reduceLikeFunc);
  function addArrayExtension(funcName, funcFactory) {
    if (typeof Array.prototype[funcName] === "function") {
      arrayExtensions[funcName] = funcFactory(funcName);
    }
  }
  function simpleFunc(funcName) {
    return function() {
      var adm = this[$mobx];
      adm.atom_.reportObserved();
      var dehancedValues = adm.dehanceValues_(adm.values_);
      return dehancedValues[funcName].apply(dehancedValues, arguments);
    };
  }
  function mapLikeFunc(funcName) {
    return function(callback, thisArg) {
      var _this2 = this;
      var adm = this[$mobx];
      adm.atom_.reportObserved();
      var dehancedValues = adm.dehanceValues_(adm.values_);
      return dehancedValues[funcName](function(element, index) {
        return callback.call(thisArg, element, index, _this2);
      });
    };
  }
  function reduceLikeFunc(funcName) {
    return function() {
      var _this3 = this;
      var adm = this[$mobx];
      adm.atom_.reportObserved();
      var dehancedValues = adm.dehanceValues_(adm.values_);
      var callback = arguments[0];
      arguments[0] = function(accumulator, currentValue, index) {
        return callback(accumulator, currentValue, index, _this3);
      };
      return dehancedValues[funcName].apply(dehancedValues, arguments);
    };
  }
  var isObservableArrayAdministration = /* @__PURE__ */ createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
  function isObservableArray(thing) {
    return isObject$1(thing) && isObservableArrayAdministration(thing[$mobx]);
  }
  var _Symbol$iterator, _Symbol$toStringTag;
  var ObservableMapMarker = {};
  var ADD = "add";
  var DELETE = "delete";
  _Symbol$iterator = Symbol.iterator;
  _Symbol$toStringTag = Symbol.toStringTag;
  var ObservableMap = /* @__PURE__ */ function() {
    function ObservableMap2(initialData, enhancer_, name_) {
      if (enhancer_ === void 0) {
        enhancer_ = deepEnhancer;
      }
      if (name_ === void 0) {
        name_ = "ObservableMap@" + getNextId();
      }
      this.enhancer_ = void 0;
      this.name_ = void 0;
      this[$mobx] = ObservableMapMarker;
      this.data_ = void 0;
      this.hasMap_ = void 0;
      this.keysAtom_ = void 0;
      this.interceptors_ = void 0;
      this.changeListeners_ = void 0;
      this.dehancer = void 0;
      this.enhancer_ = enhancer_;
      this.name_ = name_;
      if (!isFunction$1(Map)) {
        die(18);
      }
      this.keysAtom_ = createAtom(this.name_ + ".keys()");
      this.data_ = /* @__PURE__ */ new Map();
      this.hasMap_ = /* @__PURE__ */ new Map();
      this.merge(initialData);
    }
    var _proto = ObservableMap2.prototype;
    _proto.has_ = function has_(key) {
      return this.data_.has(key);
    };
    _proto.has = function has(key) {
      var _this = this;
      if (!globalState.trackingDerivation) return this.has_(key);
      var entry = this.hasMap_.get(key);
      if (!entry) {
        var newEntry = entry = new ObservableValue(this.has_(key), referenceEnhancer, this.name_ + "." + stringifyKey(key) + "?", false);
        this.hasMap_.set(key, newEntry);
        onBecomeUnobserved(newEntry, function() {
          return _this.hasMap_["delete"](key);
        });
      }
      return entry.get();
    };
    _proto.set = function set2(key, value) {
      var hasKey = this.has_(key);
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: hasKey ? UPDATE : ADD,
          object: this,
          newValue: value,
          name: key
        });
        if (!change) return this;
        value = change.newValue;
      }
      if (hasKey) {
        this.updateValue_(key, value);
      } else {
        this.addValue_(key, value);
      }
      return this;
    };
    _proto["delete"] = function _delete(key) {
      var _this2 = this;
      checkIfStateModificationsAreAllowed(this.keysAtom_);
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: DELETE,
          object: this,
          name: key
        });
        if (!change) return false;
      }
      if (this.has_(key)) {
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var _change = notify || notifySpy ? {
          observableKind: "map",
          debugObjectName: this.name_,
          type: DELETE,
          object: this,
          oldValue: this.data_.get(key).value_,
          name: key
        } : null;
        if (process.env.NODE_ENV !== "production" && notifySpy) spyReportStart(_change);
        transaction(function() {
          _this2.keysAtom_.reportChanged();
          _this2.updateHasMapEntry_(key, false);
          var observable2 = _this2.data_.get(key);
          observable2.setNewValue_(void 0);
          _this2.data_["delete"](key);
        });
        if (notify) notifyListeners(this, _change);
        if (process.env.NODE_ENV !== "production" && notifySpy) spyReportEnd();
        return true;
      }
      return false;
    };
    _proto.updateHasMapEntry_ = function updateHasMapEntry_(key, value) {
      var entry = this.hasMap_.get(key);
      if (entry) {
        entry.setNewValue_(value);
      }
    };
    _proto.updateValue_ = function updateValue_(key, newValue) {
      var observable2 = this.data_.get(key);
      newValue = observable2.prepareNewValue_(newValue);
      if (newValue !== globalState.UNCHANGED) {
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
          observableKind: "map",
          debugObjectName: this.name_,
          type: UPDATE,
          object: this,
          oldValue: observable2.value_,
          name: key,
          newValue
        } : null;
        if (process.env.NODE_ENV !== "production" && notifySpy) spyReportStart(change);
        observable2.setNewValue_(newValue);
        if (notify) notifyListeners(this, change);
        if (process.env.NODE_ENV !== "production" && notifySpy) spyReportEnd();
      }
    };
    _proto.addValue_ = function addValue_(key, newValue) {
      var _this3 = this;
      checkIfStateModificationsAreAllowed(this.keysAtom_);
      transaction(function() {
        var observable2 = new ObservableValue(newValue, _this3.enhancer_, _this3.name_ + "." + stringifyKey(key), false);
        _this3.data_.set(key, observable2);
        newValue = observable2.value_;
        _this3.updateHasMapEntry_(key, true);
        _this3.keysAtom_.reportChanged();
      });
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: ADD,
        object: this,
        name: key,
        newValue
      } : null;
      if (process.env.NODE_ENV !== "production" && notifySpy) spyReportStart(change);
      if (notify) notifyListeners(this, change);
      if (process.env.NODE_ENV !== "production" && notifySpy) spyReportEnd();
    };
    _proto.get = function get(key) {
      if (this.has(key)) return this.dehanceValue_(this.data_.get(key).get());
      return this.dehanceValue_(void 0);
    };
    _proto.dehanceValue_ = function dehanceValue_(value) {
      if (this.dehancer !== void 0) {
        return this.dehancer(value);
      }
      return value;
    };
    _proto.keys = function keys() {
      this.keysAtom_.reportObserved();
      return this.data_.keys();
    };
    _proto.values = function values() {
      var self2 = this;
      var keys = this.keys();
      return makeIterable({
        next: function next() {
          var _keys$next = keys.next(), done = _keys$next.done, value = _keys$next.value;
          return {
            done,
            value: done ? void 0 : self2.get(value)
          };
        }
      });
    };
    _proto.entries = function entries() {
      var self2 = this;
      var keys = this.keys();
      return makeIterable({
        next: function next() {
          var _keys$next2 = keys.next(), done = _keys$next2.done, value = _keys$next2.value;
          return {
            done,
            value: done ? void 0 : [value, self2.get(value)]
          };
        }
      });
    };
    _proto[_Symbol$iterator] = function() {
      return this.entries();
    };
    _proto.forEach = function forEach2(callback, thisArg) {
      for (var _iterator = _createForOfIteratorHelperLoose(this), _step; !(_step = _iterator()).done; ) {
        var _step$value = _step.value, key = _step$value[0], value = _step$value[1];
        callback.call(thisArg, value, key, this);
      }
    };
    _proto.merge = function merge2(other) {
      var _this4 = this;
      if (isObservableMap(other)) {
        other = new Map(other);
      }
      transaction(function() {
        if (isPlainObject$1(other)) getPlainObjectKeys(other).forEach(function(key) {
          return _this4.set(key, other[key]);
        });
        else if (Array.isArray(other)) other.forEach(function(_ref) {
          var key = _ref[0], value = _ref[1];
          return _this4.set(key, value);
        });
        else if (isES6Map(other)) {
          if (other.constructor !== Map) die(19, other);
          other.forEach(function(value, key) {
            return _this4.set(key, value);
          });
        } else if (other !== null && other !== void 0) die(20, other);
      });
      return this;
    };
    _proto.clear = function clear() {
      var _this5 = this;
      transaction(function() {
        untracked(function() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(_this5.keys()), _step2; !(_step2 = _iterator2()).done; ) {
            var key = _step2.value;
            _this5["delete"](key);
          }
        });
      });
    };
    _proto.replace = function replace(values) {
      var _this6 = this;
      transaction(function() {
        var replacementMap = convertToMap(values);
        var orderedData = /* @__PURE__ */ new Map();
        var keysReportChangedCalled = false;
        for (var _iterator3 = _createForOfIteratorHelperLoose(_this6.data_.keys()), _step3; !(_step3 = _iterator3()).done; ) {
          var key = _step3.value;
          if (!replacementMap.has(key)) {
            var deleted = _this6["delete"](key);
            if (deleted) {
              keysReportChangedCalled = true;
            } else {
              var value = _this6.data_.get(key);
              orderedData.set(key, value);
            }
          }
        }
        for (var _iterator4 = _createForOfIteratorHelperLoose(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done; ) {
          var _step4$value = _step4.value, _key = _step4$value[0], _value2 = _step4$value[1];
          var keyExisted = _this6.data_.has(_key);
          _this6.set(_key, _value2);
          if (_this6.data_.has(_key)) {
            var _value22 = _this6.data_.get(_key);
            orderedData.set(_key, _value22);
            if (!keyExisted) {
              keysReportChangedCalled = true;
            }
          }
        }
        if (!keysReportChangedCalled) {
          if (_this6.data_.size !== orderedData.size) {
            _this6.keysAtom_.reportChanged();
          } else {
            var iter1 = _this6.data_.keys();
            var iter2 = orderedData.keys();
            var next1 = iter1.next();
            var next2 = iter2.next();
            while (!next1.done) {
              if (next1.value !== next2.value) {
                _this6.keysAtom_.reportChanged();
                break;
              }
              next1 = iter1.next();
              next2 = iter2.next();
            }
          }
        }
        _this6.data_ = orderedData;
      });
      return this;
    };
    _proto.toString = function toString2() {
      return "[object ObservableMap]";
    };
    _proto.toJSON = function toJSON() {
      return Array.from(this);
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
      if (process.env.NODE_ENV !== "production" && fireImmediately === true) die("`observe` doesn't support fireImmediately=true in combination with maps.");
      return registerListener(this, listener);
    };
    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };
    _createClass(ObservableMap2, [{
      key: "size",
      get: function get() {
        this.keysAtom_.reportObserved();
        return this.data_.size;
      }
    }, {
      key: _Symbol$toStringTag,
      get: function get() {
        return "Map";
      }
    }]);
    return ObservableMap2;
  }();
  var isObservableMap = /* @__PURE__ */ createInstanceofPredicate("ObservableMap", ObservableMap);
  function convertToMap(dataStructure) {
    if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
      return dataStructure;
    } else if (Array.isArray(dataStructure)) {
      return new Map(dataStructure);
    } else if (isPlainObject$1(dataStructure)) {
      var map = /* @__PURE__ */ new Map();
      for (var key in dataStructure) {
        map.set(key, dataStructure[key]);
      }
      return map;
    } else {
      return die(21, dataStructure);
    }
  }
  var _Symbol$iterator$1, _Symbol$toStringTag$1;
  var ObservableSetMarker = {};
  _Symbol$iterator$1 = Symbol.iterator;
  _Symbol$toStringTag$1 = Symbol.toStringTag;
  var ObservableSet = /* @__PURE__ */ function() {
    function ObservableSet2(initialData, enhancer, name_) {
      if (enhancer === void 0) {
        enhancer = deepEnhancer;
      }
      if (name_ === void 0) {
        name_ = "ObservableSet@" + getNextId();
      }
      this.name_ = void 0;
      this[$mobx] = ObservableSetMarker;
      this.data_ = /* @__PURE__ */ new Set();
      this.atom_ = void 0;
      this.changeListeners_ = void 0;
      this.interceptors_ = void 0;
      this.dehancer = void 0;
      this.enhancer_ = void 0;
      this.name_ = name_;
      if (!isFunction$1(Set)) {
        die(22);
      }
      this.atom_ = createAtom(this.name_);
      this.enhancer_ = function(newV, oldV) {
        return enhancer(newV, oldV, name_);
      };
      if (initialData) {
        this.replace(initialData);
      }
    }
    var _proto = ObservableSet2.prototype;
    _proto.dehanceValue_ = function dehanceValue_(value) {
      if (this.dehancer !== void 0) {
        return this.dehancer(value);
      }
      return value;
    };
    _proto.clear = function clear() {
      var _this = this;
      transaction(function() {
        untracked(function() {
          for (var _iterator = _createForOfIteratorHelperLoose(_this.data_.values()), _step; !(_step = _iterator()).done; ) {
            var value = _step.value;
            _this["delete"](value);
          }
        });
      });
    };
    _proto.forEach = function forEach2(callbackFn, thisArg) {
      for (var _iterator2 = _createForOfIteratorHelperLoose(this), _step2; !(_step2 = _iterator2()).done; ) {
        var value = _step2.value;
        callbackFn.call(thisArg, value, value, this);
      }
    };
    _proto.add = function add2(value) {
      var _this2 = this;
      checkIfStateModificationsAreAllowed(this.atom_);
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: ADD,
          object: this,
          newValue: value
        });
        if (!change) return this;
      }
      if (!this.has(value)) {
        transaction(function() {
          _this2.data_.add(_this2.enhancer_(value, void 0));
          _this2.atom_.reportChanged();
        });
        var notifySpy = process.env.NODE_ENV !== "production" && isSpyEnabled();
        var notify = hasListeners(this);
        var _change = notify || notifySpy ? {
          observableKind: "set",
          debugObjectName: this.name_,
          type: ADD,
          object: this,
          newValue: value
        } : null;
        if (notifySpy && process.env.NODE_ENV !== "production") spyReportStart(_change);
        if (notify) notifyListeners(this, _change);
        if (notifySpy && process.env.NODE_ENV !== "production") spyReportEnd();
      }
      return this;
    };
    _proto["delete"] = function _delete(value) {
      var _this3 = this;
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: DELETE,
          object: this,
          oldValue: value
        });
        if (!change) return false;
      }
      if (this.has(value)) {
        var notifySpy = process.env.NODE_ENV !== "production" && isSpyEnabled();
        var notify = hasListeners(this);
        var _change2 = notify || notifySpy ? {
          observableKind: "set",
          debugObjectName: this.name_,
          type: DELETE,
          object: this,
          oldValue: value
        } : null;
        if (notifySpy && process.env.NODE_ENV !== "production") spyReportStart(_change2);
        transaction(function() {
          _this3.atom_.reportChanged();
          _this3.data_["delete"](value);
        });
        if (notify) notifyListeners(this, _change2);
        if (notifySpy && process.env.NODE_ENV !== "production") spyReportEnd();
        return true;
      }
      return false;
    };
    _proto.has = function has(value) {
      this.atom_.reportObserved();
      return this.data_.has(this.dehanceValue_(value));
    };
    _proto.entries = function entries() {
      var nextIndex = 0;
      var keys = Array.from(this.keys());
      var values = Array.from(this.values());
      return makeIterable({
        next: function next() {
          var index = nextIndex;
          nextIndex += 1;
          return index < values.length ? {
            value: [keys[index], values[index]],
            done: false
          } : {
            done: true
          };
        }
      });
    };
    _proto.keys = function keys() {
      return this.values();
    };
    _proto.values = function values() {
      this.atom_.reportObserved();
      var self2 = this;
      var nextIndex = 0;
      var observableValues = Array.from(this.data_.values());
      return makeIterable({
        next: function next() {
          return nextIndex < observableValues.length ? {
            value: self2.dehanceValue_(observableValues[nextIndex++]),
            done: false
          } : {
            done: true
          };
        }
      });
    };
    _proto.replace = function replace(other) {
      var _this4 = this;
      if (isObservableSet(other)) {
        other = new Set(other);
      }
      transaction(function() {
        if (Array.isArray(other)) {
          _this4.clear();
          other.forEach(function(value) {
            return _this4.add(value);
          });
        } else if (isES6Set(other)) {
          _this4.clear();
          other.forEach(function(value) {
            return _this4.add(value);
          });
        } else if (other !== null && other !== void 0) {
          die("Cannot initialize set from " + other);
        }
      });
      return this;
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
      if (process.env.NODE_ENV !== "production" && fireImmediately === true) die("`observe` doesn't support fireImmediately=true in combination with sets.");
      return registerListener(this, listener);
    };
    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };
    _proto.toJSON = function toJSON() {
      return Array.from(this);
    };
    _proto.toString = function toString2() {
      return "[object ObservableSet]";
    };
    _proto[_Symbol$iterator$1] = function() {
      return this.values();
    };
    _createClass(ObservableSet2, [{
      key: "size",
      get: function get() {
        this.atom_.reportObserved();
        return this.data_.size;
      }
    }, {
      key: _Symbol$toStringTag$1,
      get: function get() {
        return "Set";
      }
    }]);
    return ObservableSet2;
  }();
  var isObservableSet = /* @__PURE__ */ createInstanceofPredicate("ObservableSet", ObservableSet);
  var REMOVE = "remove";
  var ObservableObjectAdministration = /* @__PURE__ */ function() {
    function ObservableObjectAdministration2(target_, values_, name_, defaultEnhancer_) {
      if (values_ === void 0) {
        values_ = /* @__PURE__ */ new Map();
      }
      this.target_ = void 0;
      this.values_ = void 0;
      this.name_ = void 0;
      this.defaultEnhancer_ = void 0;
      this.keysAtom_ = void 0;
      this.changeListeners_ = void 0;
      this.interceptors_ = void 0;
      this.proxy_ = void 0;
      this.pendingKeys_ = void 0;
      this.keysValue_ = [];
      this.isStaledKeysValue_ = true;
      this.target_ = target_;
      this.values_ = values_;
      this.name_ = name_;
      this.defaultEnhancer_ = defaultEnhancer_;
      this.keysAtom_ = new Atom(name_ + ".keys");
    }
    var _proto = ObservableObjectAdministration2.prototype;
    _proto.read_ = function read_(key) {
      return this.values_.get(key).get();
    };
    _proto.write_ = function write_(key, newValue) {
      var instance = this.target_;
      var observable2 = this.values_.get(key);
      if (observable2 instanceof ComputedValue) {
        observable2.set(newValue);
        return;
      }
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: UPDATE,
          object: this.proxy_ || instance,
          name: key,
          newValue
        });
        if (!change) return;
        newValue = change.newValue;
      }
      newValue = observable2.prepareNewValue_(newValue);
      if (newValue !== globalState.UNCHANGED) {
        var notify = hasListeners(this);
        var notifySpy = process.env.NODE_ENV !== "production" && isSpyEnabled();
        var _change = notify || notifySpy ? {
          type: UPDATE,
          observableKind: "object",
          debugObjectName: this.name_,
          object: this.proxy_ || instance,
          oldValue: observable2.value_,
          name: key,
          newValue
        } : null;
        if (process.env.NODE_ENV !== "production" && notifySpy) spyReportStart(_change);
        observable2.setNewValue_(newValue);
        if (notify) notifyListeners(this, _change);
        if (process.env.NODE_ENV !== "production" && notifySpy) spyReportEnd();
      }
    };
    _proto.has_ = function has_(key) {
      var map = this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
      var entry = map.get(key);
      if (entry) return entry.get();
      else {
        var exists2 = !!this.values_.get(key);
        entry = new ObservableValue(exists2, referenceEnhancer, this.name_ + "." + stringifyKey(key) + "?", false);
        map.set(key, entry);
        return entry.get();
      }
    };
    _proto.addObservableProp_ = function addObservableProp_(propName, newValue, enhancer) {
      if (enhancer === void 0) {
        enhancer = this.defaultEnhancer_;
      }
      var target = this.target_;
      if (process.env.NODE_ENV !== "production") assertPropertyConfigurable(target, propName);
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || target,
          name: propName,
          type: ADD,
          newValue
        });
        if (!change) return;
        newValue = change.newValue;
      }
      var observable2 = new ObservableValue(newValue, enhancer, this.name_ + "." + stringifyKey(propName), false);
      this.values_.set(propName, observable2);
      newValue = observable2.value_;
      defineProperty(target, propName, generateObservablePropConfig(propName));
      this.notifyPropertyAddition_(propName, newValue);
    };
    _proto.addComputedProp_ = function addComputedProp_(propertyOwner, propName, options) {
      var target = this.target_;
      options.name = options.name || this.name_ + "." + stringifyKey(propName);
      options.context = this.proxy_ || target;
      this.values_.set(propName, new ComputedValue(options));
      defineProperty(propertyOwner, propName, generateComputedPropConfig(propName));
    };
    _proto.remove_ = function remove_(key) {
      if (!this.values_.has(key)) return;
      var target = this.target_;
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || target,
          name: key,
          type: REMOVE
        });
        if (!change) return;
      }
      try {
        startBatch();
        var notify = hasListeners(this);
        var notifySpy = process.env.NODE_ENV !== "production" && isSpyEnabled();
        var oldObservable = this.values_.get(key);
        var oldValue = oldObservable && oldObservable.get();
        oldObservable && oldObservable.set(void 0);
        this.reportKeysChanged();
        this.values_["delete"](key);
        if (this.pendingKeys_) {
          var entry = this.pendingKeys_.get(key);
          if (entry) entry.set(false);
        }
        delete this.target_[key];
        var _change2 = notify || notifySpy ? {
          type: REMOVE,
          observableKind: "object",
          object: this.proxy_ || target,
          debugObjectName: this.name_,
          oldValue,
          name: key
        } : null;
        if (process.env.NODE_ENV !== "production" && notifySpy) spyReportStart(_change2);
        if (notify) notifyListeners(this, _change2);
        if (process.env.NODE_ENV !== "production" && notifySpy) spyReportEnd();
      } finally {
        endBatch();
      }
    };
    _proto.observe_ = function observe_(callback, fireImmediately) {
      if (process.env.NODE_ENV !== "production" && fireImmediately === true) die("`observe` doesn't support the fire immediately property for observable objects.");
      return registerListener(this, callback);
    };
    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };
    _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, newValue) {
      var notify = hasListeners(this);
      var notifySpy = process.env.NODE_ENV !== "production" && isSpyEnabled();
      var change = notify || notifySpy ? {
        type: ADD,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: key,
        newValue
      } : null;
      if (process.env.NODE_ENV !== "production" && notifySpy) spyReportStart(change);
      if (notify) notifyListeners(this, change);
      if (process.env.NODE_ENV !== "production" && notifySpy) spyReportEnd();
      if (this.pendingKeys_) {
        var entry = this.pendingKeys_.get(key);
        if (entry) entry.set(true);
      }
      this.reportKeysChanged();
    };
    _proto.getKeys_ = function getKeys_() {
      this.keysAtom_.reportObserved();
      if (!this.isStaledKeysValue_) {
        return this.keysValue_;
      }
      this.keysValue_ = [];
      for (var _iterator = _createForOfIteratorHelperLoose(this.values_), _step; !(_step = _iterator()).done; ) {
        var _step$value = _step.value, key = _step$value[0], value = _step$value[1];
        if (value instanceof ObservableValue) this.keysValue_.push(key);
      }
      if (process.env.NODE_ENV !== "production") Object.freeze(this.keysValue_);
      this.isStaledKeysValue_ = false;
      return this.keysValue_;
    };
    _proto.reportKeysChanged = function reportKeysChanged() {
      this.isStaledKeysValue_ = true;
      this.keysAtom_.reportChanged();
    };
    return ObservableObjectAdministration2;
  }();
  function asObservableObject(target, name, defaultEnhancer) {
    if (name === void 0) {
      name = "";
    }
    if (defaultEnhancer === void 0) {
      defaultEnhancer = deepEnhancer;
    }
    if (hasProp(target, $mobx)) return target[$mobx];
    if (process.env.NODE_ENV !== "production" && !Object.isExtensible(target)) die("Cannot make the designated object observable; it is not extensible");
    if (!name) {
      if (isPlainObject$1(target)) {
        name = "ObservableObject@" + getNextId();
      } else {
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
      }
    }
    var adm = new ObservableObjectAdministration(target, /* @__PURE__ */ new Map(), stringifyKey(name), defaultEnhancer);
    addHiddenProp(target, $mobx, adm);
    return adm;
  }
  var observablePropertyConfigs = /* @__PURE__ */ Object.create(null);
  var computedPropertyConfigs = /* @__PURE__ */ Object.create(null);
  function generateObservablePropConfig(propName) {
    return observablePropertyConfigs[propName] || (observablePropertyConfigs[propName] = {
      configurable: true,
      enumerable: true,
      get: function get() {
        return this[$mobx].read_(propName);
      },
      set: function set2(v) {
        this[$mobx].write_(propName, v);
      }
    });
  }
  function generateComputedPropConfig(propName) {
    return computedPropertyConfigs[propName] || (computedPropertyConfigs[propName] = {
      configurable: true,
      enumerable: false,
      get: function get() {
        return this[$mobx].read_(propName);
      },
      set: function set2(v) {
        this[$mobx].write_(propName, v);
      }
    });
  }
  var isObservableObjectAdministration = /* @__PURE__ */ createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
  function isObservableObject(thing) {
    if (isObject$1(thing)) {
      return isObservableObjectAdministration(thing[$mobx]);
    }
    return false;
  }
  var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
  var StubArray = function StubArray2() {
  };
  function inherit(ctor, proto) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(ctor.prototype, proto);
    } else if (ctor.prototype.__proto__ !== void 0) {
      ctor.prototype.__proto__ = proto;
    } else {
      ctor.prototype = proto;
    }
  }
  inherit(StubArray, Array.prototype);
  var LegacyObservableArray = /* @__PURE__ */ function(_StubArray) {
    _inheritsLoose(LegacyObservableArray2, _StubArray);
    function LegacyObservableArray2(initialValues, enhancer, name, owned) {
      var _this;
      if (name === void 0) {
        name = "ObservableArray@" + getNextId();
      }
      if (owned === void 0) {
        owned = false;
      }
      _this = _StubArray.call(this) || this;
      var adm = new ObservableArrayAdministration(name, enhancer, owned, true);
      adm.proxy_ = _assertThisInitialized(_this);
      addHiddenFinalProp(_assertThisInitialized(_this), $mobx, adm);
      if (initialValues && initialValues.length) {
        var prev = allowStateChangesStart(true);
        _this.spliceWithArray(0, 0, initialValues);
        allowStateChangesEnd(prev);
      }
      return _this;
    }
    var _proto = LegacyObservableArray2.prototype;
    _proto.concat = function concat2() {
      this[$mobx].atom_.reportObserved();
      for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
        arrays[_key] = arguments[_key];
      }
      return Array.prototype.concat.apply(
        this.slice(),
        //@ts-ignore
        arrays.map(function(a) {
          return isObservableArray(a) ? a.slice() : a;
        })
      );
    };
    _proto[Symbol.iterator] = function() {
      var self2 = this;
      var nextIndex = 0;
      return makeIterable({
        next: function next() {
          return nextIndex < self2.length ? {
            value: self2[nextIndex++],
            done: false
          } : {
            done: true,
            value: void 0
          };
        }
      });
    };
    _createClass(LegacyObservableArray2, [{
      key: "length",
      get: function get() {
        return this[$mobx].getArrayLength_();
      },
      set: function set2(newLength) {
        this[$mobx].setArrayLength_(newLength);
      }
    }, {
      key: Symbol.toStringTag,
      get: function get() {
        return "Array";
      }
    }]);
    return LegacyObservableArray2;
  }(StubArray);
  Object.entries(arrayExtensions).forEach(function(_ref) {
    var prop = _ref[0], fn = _ref[1];
    if (prop !== "concat") addHiddenProp(LegacyObservableArray.prototype, prop, fn);
  });
  function createArrayEntryDescriptor(index) {
    return {
      enumerable: false,
      configurable: true,
      get: function get() {
        return this[$mobx].get_(index);
      },
      set: function set2(value) {
        this[$mobx].set_(index, value);
      }
    };
  }
  function createArrayBufferItem(index) {
    defineProperty(LegacyObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
  }
  function reserveArrayBuffer(max) {
    if (max > OBSERVABLE_ARRAY_BUFFER_SIZE) {
      for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++) {
        createArrayBufferItem(index);
      }
      OBSERVABLE_ARRAY_BUFFER_SIZE = max;
    }
  }
  reserveArrayBuffer(1e3);
  function createLegacyArray(initialValues, enhancer, name) {
    return new LegacyObservableArray(initialValues, enhancer, name);
  }
  function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
      if (isObservableArray(thing)) {
        if (property !== void 0) die(23);
        return thing[$mobx].atom_;
      }
      if (isObservableSet(thing)) {
        return thing[$mobx];
      }
      if (isObservableMap(thing)) {
        if (property === void 0) return thing.keysAtom_;
        var observable2 = thing.data_.get(property) || thing.hasMap_.get(property);
        if (!observable2) die(25, property, getDebugName(thing));
        return observable2;
      }
      if (isObservableObject(thing)) {
        if (!property) return die(26);
        var _observable = thing[$mobx].values_.get(property);
        if (!_observable) die(27, property, getDebugName(thing));
        return _observable;
      }
      if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
        return thing;
      }
    } else if (isFunction$1(thing)) {
      if (isReaction(thing[$mobx])) {
        return thing[$mobx];
      }
    }
    die(28);
  }
  function getAdministration(thing, property) {
    if (!thing) die(29);
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) return thing;
    if (isObservableMap(thing) || isObservableSet(thing)) return thing;
    if (thing[$mobx]) return thing[$mobx];
    die(24, thing);
  }
  function getDebugName(thing, property) {
    var named;
    if (property !== void 0) named = getAtom(thing, property);
    else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) named = getAdministration(thing);
    else named = getAtom(thing);
    return named.name_;
  }
  var toString$1 = objectPrototype.toString;
  function deepEqual(a, b2, depth) {
    if (depth === void 0) {
      depth = -1;
    }
    return eq(a, b2, depth);
  }
  function eq(a, b2, depth, aStack, bStack) {
    if (a === b2) return a !== 0 || 1 / a === 1 / b2;
    if (a == null || b2 == null) return false;
    if (a !== a) return b2 !== b2;
    var type = typeof a;
    if (!isFunction$1(type) && type !== "object" && typeof b2 != "object") return false;
    var className = toString$1.call(a);
    if (className !== toString$1.call(b2)) return false;
    switch (className) {
      case "[object RegExp]":
      case "[object String]":
        return "" + a === "" + b2;
      case "[object Number]":
        if (+a !== +a) return +b2 !== +b2;
        return +a === 0 ? 1 / +a === 1 / b2 : +a === +b2;
      case "[object Date]":
      case "[object Boolean]":
        return +a === +b2;
      case "[object Symbol]":
        return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b2);
      case "[object Map]":
      case "[object Set]":
        if (depth >= 0) {
          depth++;
        }
        break;
    }
    a = unwrap(a);
    b2 = unwrap(b2);
    var areArrays = className === "[object Array]";
    if (!areArrays) {
      if (typeof a != "object" || typeof b2 != "object") return false;
      var aCtor = a.constructor, bCtor = b2.constructor;
      if (aCtor !== bCtor && !(isFunction$1(aCtor) && aCtor instanceof aCtor && isFunction$1(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b2) {
        return false;
      }
    }
    if (depth === 0) {
      return false;
    } else if (depth < 0) {
      depth = -1;
    }
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      if (aStack[length] === a) return bStack[length] === b2;
    }
    aStack.push(a);
    bStack.push(b2);
    if (areArrays) {
      length = a.length;
      if (length !== b2.length) return false;
      while (length--) {
        if (!eq(a[length], b2[length], depth - 1, aStack, bStack)) return false;
      }
    } else {
      var keys = Object.keys(a);
      var key;
      length = keys.length;
      if (Object.keys(b2).length !== length) return false;
      while (length--) {
        key = keys[length];
        if (!(hasProp(b2, key) && eq(a[key], b2[key], depth - 1, aStack, bStack))) return false;
      }
    }
    aStack.pop();
    bStack.pop();
    return true;
  }
  function unwrap(a) {
    if (isObservableArray(a)) return a.slice();
    if (isES6Map(a) || isObservableMap(a)) return Array.from(a.entries());
    if (isES6Set(a) || isObservableSet(a)) return Array.from(a.entries());
    return a;
  }
  function makeIterable(iterator) {
    iterator[Symbol.iterator] = getSelf;
    return iterator;
  }
  function getSelf() {
    return this;
  }
  ["Symbol", "Map", "Set", "Symbol"].forEach(function(m) {
    var g = getGlobal$1();
    if (typeof g[m] === "undefined") {
      die("MobX requires global '" + m + "' to be available or polyfilled");
    }
  });
  if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
      spy,
      extras: {
        getDebugName
      },
      $mobx
    });
  }
  var LifecycleState = /* @__PURE__ */ ((LifecycleState2) => {
    LifecycleState2[LifecycleState2["active"] = 0] = "active";
    LifecycleState2[LifecycleState2["inactive"] = 1] = "inactive";
    return LifecycleState2;
  })(LifecycleState || {});
  class Lifecycle {
    constructor() {
      __publicField(this, "state", 1);
      __publicField(this, "initCallbacks", new Array());
      __publicField(this, "foregroundCallbacks", new Array());
      __publicField(this, "backgroundCallbacks", new Array());
      __publicField(this, "addInitCallback", (cb) => this.initCallbacks.push(cb));
      __publicField(this, "addForegroundCallback", (cb) => this.foregroundCallbacks.push(cb));
      __publicField(this, "addBackgroundCallback", (cb) => this.backgroundCallbacks.push(cb));
    }
    start() {
    }
  }
  class MobileLifecycle extends Lifecycle {
    constructor(dependencies) {
      super();
      this.dependencies = dependencies;
    }
    start() {
      this.initCallbacks.forEach((cb) => cb());
      if (this.dependencies.AppState.currentState === "active") {
        this.foregroundCallbacks.forEach((cb) => cb());
      }
      this.dependencies.AppState.addEventListener("change", async (state) => {
        switch (state) {
          case "active":
            this.foregroundCallbacks.forEach((cb) => cb());
            this.state = LifecycleState.active;
            break;
          case "inactive":
            this.backgroundCallbacks.forEach((cb) => cb());
            this.state = LifecycleState.inactive;
            break;
        }
      });
    }
  }
  class WebLifecycle extends Lifecycle {
    constructor() {
      super();
    }
    start() {
      this.initCallbacks.forEach((cb) => cb());
      if (document.visibilityState === "visible") {
        this.foregroundCallbacks.forEach((cb) => cb());
      }
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          this.backgroundCallbacks.forEach((cb) => cb());
          this.state = LifecycleState.inactive;
        } else {
          this.foregroundCallbacks.forEach((cb) => cb());
          this.state = LifecycleState.active;
        }
      });
    }
  }
  class Module {
    constructor(core) {
      __publicField(this, "isReady", false);
      this.core = core;
      makeObservable(this, {
        isReady: observable
      });
    }
    static async init(core, name, config, dependencies) {
      const ModuleClass = this;
      core.modules[name] = new ModuleClass(core, config, dependencies);
    }
    async start(isRPCServer) {
    }
    async postStart() {
    }
    async restart() {
    }
    async stop() {
    }
  }
  class Constant {
  }
  var PlatformState = /* @__PURE__ */ ((PlatformState2) => {
    PlatformState2[PlatformState2["Web"] = 0] = "Web";
    PlatformState2[PlatformState2["Mobile"] = 1] = "Mobile";
    PlatformState2[PlatformState2["Node"] = 2] = "Node";
    return PlatformState2;
  })(PlatformState || {});
  class Platform extends Constant {
    constructor() {
      super();
      __publicField(this, "state");
      if (typeof document != "undefined") {
        this.state = 0;
      } else if (typeof navigator != "undefined" && navigator.product == "ReactNative") {
        this.state = 1;
      } else {
        this.state = 2;
      }
    }
    update() {
    }
  }
  class AppManager extends Module {
    constructor(core, config, dependencyInjection) {
      super(core);
      __publicField(this, "lifecycle");
      this.config = config;
      this.dependencyInjection = dependencyInjection;
      if (this.core.constants.platform.state === PlatformState.Mobile) {
        this.lifecycle = new MobileLifecycle(dependencyInjection);
      } else if (this.core.constants.platform.state === PlatformState.Web) {
        this.lifecycle = new WebLifecycle();
      }
    }
    async postStart() {
      this.lifecycle.start();
    }
    async restart() {
    }
  }
  class NotificationInterface {
    constructor() {
      __publicField(this, "hasPermission", false);
      __publicField(this, "listeners", []);
    }
  }
  class ExpoNotification extends NotificationInterface {
    constructor(core, config, expoDependencies) {
      super();
      __publicField(this, "hasPermission", false);
      __publicField(this, "listeners", []);
      __publicField(this, "Notifications");
      __publicField(this, "Permissions");
      __publicField(this, "Platform");
      this.core = core;
      this.config = config;
      this.Notifications = expoDependencies.Notifications;
      this.Permissions = expoDependencies.Permissions;
      this.Platform = expoDependencies.Platform;
    }
    async checkPermission() {
      const { status } = await this.Permissions.getAsync(this.Permissions.NOTIFICATIONS);
      if (status === "granted") {
        this.hasPermission = true;
        this.createChannels();
        return true;
      } else {
        this.hasPermission = false;
        return false;
      }
    }
    async createChannels() {
      if (this.Platform.OS === "android") {
        this.Notifications.createChannelAndroidAsync("default", {
          name: "default",
          sound: true,
          priority: "max",
          vibrate: [0, 250, 250, 250]
        });
      }
    }
    async requestPermission() {
      const { status } = await this.Permissions.askAsync(this.Permissions.NOTIFICATIONS);
      if (status === "granted") {
        this.hasPermission = true;
        this.createChannels();
        this.updateToken();
        return;
      }
    }
    async getToken() {
      if (this.hasPermission) {
        const token = await this.Notifications.getExpoPushTokenAsync();
        return token;
      }
    }
    async updateToken() {
    }
    addEventListener(cb) {
      this.Notifications.addEventListener(cb);
    }
    newNotification() {
    }
  }
  class WebNotification extends NotificationInterface {
    constructor(core, config) {
      super();
      __publicField(this, "hasPermission", false);
      __publicField(this, "listeners", []);
      this.core = core;
      this.config = config;
    }
    async checkPermission() {
      if (Notification.permission === "granted") {
        this.hasPermission = true;
        return true;
      } else {
        return false;
      }
    }
    async requestPermission() {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        this.hasPermission = true;
      } else {
        this.hasPermission = false;
      }
    }
    addEventListener(cb) {
    }
    updateToken() {
    }
    newNotification(data) {
      if (this.hasPermission) {
        let n2 = new Notification(data.title, { body: data.text });
        n2.onclick = () => {
        };
        n2.onclose = () => {
        };
      }
    }
  }
  let Notification$1 = class Notification extends Module {
    constructor(core, config, dependencyInjection) {
      super(core);
      __publicField(this, "notify");
      this.config = config;
      this.dependencyInjection = dependencyInjection;
    }
    async start() {
      switch (PlatformState[this.config.platform]) {
        case PlatformState.Web:
          this.notify = new WebNotification(this.core, this.config);
          break;
        case PlatformState.Mobile:
          this.notify = new ExpoNotification(this.core, this.config, this.dependencyInjection);
          break;
        default:
          console.error("Not supported platform passed to Notification Module!");
          break;
      }
      if (!this.notify)
        return;
      if (!await this.notify.checkPermission()) {
        await this.notify.requestPermission();
      }
    }
    async addListener(listener) {
      var _a2;
      (_a2 = this.notify) == null ? void 0 : _a2.addEventListener(listener);
    }
  };
  function bind(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }
  const { toString } = Object.prototype;
  const { getPrototypeOf } = Object;
  const kindOf = /* @__PURE__ */ ((cache) => (thing) => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null));
  const kindOfTest = (type) => {
    type = type.toLowerCase();
    return (thing) => kindOf(thing) === type;
  };
  const typeOfTest = (type) => (thing) => typeof thing === type;
  const { isArray } = Array;
  const isUndefined = typeOfTest("undefined");
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }
  const isArrayBuffer = kindOfTest("ArrayBuffer");
  function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  const isString = typeOfTest("string");
  const isFunction = typeOfTest("function");
  const isNumber = typeOfTest("number");
  const isObject = (thing) => thing !== null && typeof thing === "object";
  const isBoolean = (thing) => thing === true || thing === false;
  const isPlainObject = (val) => {
    if (kindOf(val) !== "object") {
      return false;
    }
    const prototype2 = getPrototypeOf(val);
    return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
  };
  const isDate = kindOfTest("Date");
  const isFile = kindOfTest("File");
  const isBlob = kindOfTest("Blob");
  const isFileList = kindOfTest("FileList");
  const isStream = (val) => isObject(val) && isFunction(val.pipe);
  const isFormData = (thing) => {
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
  };
  const isURLSearchParams = kindOfTest("URLSearchParams");
  const [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest);
  const trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function forEach(obj, fn, { allOwnKeys = false } = {}) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    let i;
    let l;
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys.length;
      let key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while (i-- > 0) {
      _key = keys[i];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  const _global = (() => {
    if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
  })();
  const isContextDefined = (context) => !isUndefined(context) && context !== _global;
  function merge() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key) => {
      const targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (let i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
  }
  const extend = (a, b2, thisArg, { allOwnKeys } = {}) => {
    forEach(b2, (val, key) => {
      if (thisArg && isFunction(val)) {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    }, { allOwnKeys });
    return a;
  };
  const stripBOM = (content) => {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  };
  const inherits = (constructor, superConstructor, props, descriptors2) => {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
      value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
  };
  const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    if (sourceObj == null) return destObj;
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i = props.length;
      while (i-- > 0) {
        prop = props[i];
        if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = filter !== false && getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  };
  const endsWith = (str, searchString, position) => {
    str = String(str);
    if (position === void 0 || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
  const toArray = (thing) => {
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  };
  const isTypedArray = /* @__PURE__ */ ((TypedArray) => {
    return (thing) => {
      return TypedArray && thing instanceof TypedArray;
    };
  })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
  const forEachEntry = (obj, fn) => {
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while ((result = iterator.next()) && !result.done) {
      const pair = result.value;
      fn.call(obj, pair[0], pair[1]);
    }
  };
  const matchAll = (regExp, str) => {
    let matches;
    const arr = [];
    while ((matches = regExp.exec(str)) !== null) {
      arr.push(matches);
    }
    return arr;
  };
  const isHTMLForm = kindOfTest("HTMLFormElement");
  const toCamelCase = (str) => {
    return str.toLowerCase().replace(
      /[-_\s]([a-z\d])(\w*)/g,
      function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
      }
    );
  };
  const hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
  const isRegExp = kindOfTest("RegExp");
  const reduceDescriptors = (obj, reducer) => {
    const descriptors2 = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors2, (descriptor, name) => {
      let ret;
      if ((ret = reducer(descriptor, name, obj)) !== false) {
        reducedDescriptors[name] = ret || descriptor;
      }
    });
    Object.defineProperties(obj, reducedDescriptors);
  };
  const freezeMethods = (obj) => {
    reduceDescriptors(obj, (descriptor, name) => {
      if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
        return false;
      }
      const value = obj[name];
      if (!isFunction(value)) return;
      descriptor.enumerable = false;
      if ("writable" in descriptor) {
        descriptor.writable = false;
        return;
      }
      if (!descriptor.set) {
        descriptor.set = () => {
          throw Error("Can not rewrite read-only method '" + name + "'");
        };
      }
    });
  };
  const toObjectSet = (arrayOrString, delimiter) => {
    const obj = {};
    const define = (arr) => {
      arr.forEach((value) => {
        obj[value] = true;
      });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
  };
  const noop = () => {
  };
  const toFiniteNumber = (value, defaultValue) => {
    return value != null && Number.isFinite(value = +value) ? value : defaultValue;
  };
  const ALPHA = "abcdefghijklmnopqrstuvwxyz";
  const DIGIT = "0123456789";
  const ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
  };
  const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
    let str = "";
    const { length } = alphabet;
    while (size--) {
      str += alphabet[Math.random() * length | 0];
    }
    return str;
  };
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
  }
  const toJSONObject = (obj) => {
    const stack = new Array(10);
    const visit = (source, i) => {
      if (isObject(source)) {
        if (stack.indexOf(source) >= 0) {
          return;
        }
        if (!("toJSON" in source)) {
          stack[i] = source;
          const target = isArray(source) ? [] : {};
          forEach(source, (value, key) => {
            const reducedValue = visit(value, i + 1);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });
          stack[i] = void 0;
          return target;
        }
      }
      return source;
    };
    return visit(obj, 0);
  };
  const isAsyncFn = kindOfTest("AsyncFunction");
  const isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
  const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
    if (setImmediateSupported) {
      return setImmediate;
    }
    return postMessageSupported ? ((token, callbacks) => {
      _global.addEventListener("message", ({ source, data }) => {
        if (source === _global && data === token) {
          callbacks.length && callbacks.shift()();
        }
      }, false);
      return (cb) => {
        callbacks.push(cb);
        _global.postMessage(token, "*");
      };
    })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
  })(
    typeof setImmediate === "function",
    isFunction(_global.postMessage)
  );
  const asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
  const utils$1 = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isReadableStream,
    isRequest,
    isResponse,
    isHeaders,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable,
    setImmediate: _setImmediate,
    asap
  };
  function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
  }
  utils$1.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: utils$1.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  const prototype$1 = AxiosError.prototype;
  const descriptors = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
    // eslint-disable-next-line func-names
  ].forEach((code) => {
    descriptors[code] = { value: code };
  });
  Object.defineProperties(AxiosError, descriptors);
  Object.defineProperty(prototype$1, "isAxiosError", { value: true });
  AxiosError.from = (error, code, config, request, response, customProps) => {
    const axiosError = Object.create(prototype$1);
    utils$1.toFlatObject(error, axiosError, function filter(obj) {
      return obj !== Error.prototype;
    }, (prop) => {
      return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };
  const httpAdapter = null;
  function isVisitable(thing) {
    return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
  }
  function removeBrackets(key) {
    return utils$1.endsWith(key, "[]") ? key.slice(0, -2) : key;
  }
  function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
      token = removeBrackets(token);
      return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
  }
  function isFlatArray(arr) {
    return utils$1.isArray(arr) && !arr.some(isVisitable);
  }
  const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
  });
  function toFormData(obj, formData, options) {
    if (!utils$1.isObject(obj)) {
      throw new TypeError("target must be an object");
    }
    formData = formData || new FormData();
    options = utils$1.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      return !utils$1.isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
    if (!utils$1.isFunction(visitor)) {
      throw new TypeError("visitor must be a function");
    }
    function convertValue(value) {
      if (value === null) return "";
      if (utils$1.isDate(value)) {
        return value.toISOString();
      }
      if (!useBlob && utils$1.isBlob(value)) {
        throw new AxiosError("Blob is not supported. Use a Buffer instead.");
      }
      if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
        return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }
    function defaultVisitor(value, key, path) {
      let arr = value;
      if (value && !path && typeof value === "object") {
        if (utils$1.endsWith(key, "{}")) {
          key = metaTokens ? key : key.slice(0, -2);
          value = JSON.stringify(value);
        } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, "[]")) && (arr = utils$1.toArray(value))) {
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            !(utils$1.isUndefined(el) || el === null) && formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
              convertValue(el)
            );
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });
    function build(value, path) {
      if (utils$1.isUndefined(value)) return;
      if (stack.indexOf(value) !== -1) {
        throw Error("Circular reference detected in " + path.join("."));
      }
      stack.push(value);
      utils$1.forEach(value, function each(el, key) {
        const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils$1.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        );
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils$1.isObject(obj)) {
      throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
  }
  function encode$1(str) {
    const charMap = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData(params, this, options);
  }
  const prototype = AxiosURLSearchParams.prototype;
  prototype.append = function append(name, value) {
    this._pairs.push([name, value]);
  };
  prototype.toString = function toString2(encoder) {
    const _encode2 = encoder ? function(value) {
      return encoder.call(this, value, encode$1);
    } : encode$1;
    return this._pairs.map(function each(pair) {
      return _encode2(pair[0]) + "=" + _encode2(pair[1]);
    }, "").join("&");
  };
  function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url, params, options) {
    if (!params) {
      return url;
    }
    const _encode2 = options && options.encode || encode;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode2);
    }
    if (serializedParams) {
      const hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  }
  class InterceptorManager {
    constructor() {
      this.handlers = [];
    }
    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    }
    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
    eject(id2) {
      if (this.handlers[id2]) {
        this.handlers[id2] = null;
      }
    }
    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
    clear() {
      if (this.handlers) {
        this.handlers = [];
      }
    }
    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
    forEach(fn) {
      utils$1.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    }
  }
  const transitionalDefaults = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };
  const URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
  const FormData$1 = typeof FormData !== "undefined" ? FormData : null;
  const Blob$1 = typeof Blob !== "undefined" ? Blob : null;
  const platform$1 = {
    isBrowser: true,
    classes: {
      URLSearchParams: URLSearchParams$1,
      FormData: FormData$1,
      Blob: Blob$1
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };
  const hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
  const hasStandardBrowserEnv = ((product) => {
    return hasBrowserEnv && ["ReactNative", "NativeScript", "NS"].indexOf(product) < 0;
  })(typeof navigator !== "undefined" && navigator.product);
  const hasStandardBrowserWebWorkerEnv = (() => {
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
  })();
  const origin = hasBrowserEnv && window.location.href || "http://localhost";
  const utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    hasBrowserEnv,
    hasStandardBrowserEnv,
    hasStandardBrowserWebWorkerEnv,
    origin
  }, Symbol.toStringTag, { value: "Module" }));
  const platform = {
    ...utils,
    ...platform$1
  };
  function toURLEncodedForm(data, options) {
    return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
      visitor: function(value, key, path, helpers) {
        if (platform.isNode && utils$1.isBuffer(value)) {
          this.append(key, value.toString("base64"));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options));
  }
  function parsePropPath(name) {
    return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
      return match[0] === "[]" ? "" : match[1] || match[0];
    });
  }
  function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = arr[key];
    }
    return obj;
  }
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      let name = path[index++];
      if (name === "__proto__") return true;
      const isNumericKey = Number.isFinite(+name);
      const isLast = index >= path.length;
      name = !name && utils$1.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils$1.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils$1.isObject(target[name])) {
        target[name] = [];
      }
      const result = buildPath(path, value, target[name], index);
      if (result && utils$1.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
      const obj = {};
      utils$1.forEachEntry(formData, (name, value) => {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }
  function stringifySafely(rawValue, parser, encoder) {
    if (utils$1.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils$1.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  const defaults = {
    transitional: transitionalDefaults,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function transformRequest(data, headers) {
      const contentType = headers.getContentType() || "";
      const hasJSONContentType = contentType.indexOf("application/json") > -1;
      const isObjectPayload = utils$1.isObject(data);
      if (isObjectPayload && utils$1.isHTMLForm(data)) {
        data = new FormData(data);
      }
      const isFormData2 = utils$1.isFormData(data);
      if (isFormData2) {
        return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
      }
      if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data) || utils$1.isReadableStream(data)) {
        return data;
      }
      if (utils$1.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils$1.isURLSearchParams(data)) {
        headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return data.toString();
      }
      let isFileList2;
      if (isObjectPayload) {
        if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }
        if ((isFileList2 = utils$1.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
          const _FormData = this.env && this.env.FormData;
          return toFormData(
            isFileList2 ? { "files[]": data } : data,
            _FormData && new _FormData(),
            this.formSerializer
          );
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType("application/json", false);
        return stringifySafely(data);
      }
      return data;
    }],
    transformResponse: [function transformResponse(data) {
      const transitional = this.transitional || defaults.transitional;
      const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
      const JSONRequested = this.responseType === "json";
      if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
        return data;
      }
      if (data && utils$1.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
        const silentJSONParsing = transitional && transitional.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: platform.classes.FormData,
      Blob: platform.classes.Blob
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  utils$1.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
    defaults.headers[method] = {};
  });
  const ignoreDuplicateOf = utils$1.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ]);
  const parseHeaders = (rawHeaders) => {
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
      i = line.indexOf(":");
      key = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();
      if (!key || parsed[key] && ignoreDuplicateOf[key]) {
        return;
      }
      if (key === "set-cookie") {
        if (parsed[key]) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    });
    return parsed;
  };
  const $internals = Symbol("internals");
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
  }
  function parseTokens(str) {
    const tokens = /* @__PURE__ */ Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
  function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if (utils$1.isFunction(filter)) {
      return filter.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils$1.isString(value)) return;
    if (utils$1.isString(filter)) {
      return value.indexOf(filter) !== -1;
    }
    if (utils$1.isRegExp(filter)) {
      return filter.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    const accessorName = utils$1.toCamelCase(" " + header);
    ["get", "set", "has"].forEach((methodName) => {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  class AxiosHeaders {
    constructor(headers) {
      headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
      const self2 = this;
      function setHeader(_value2, _header, _rewrite) {
        const lHeader = normalizeHeader(_header);
        if (!lHeader) {
          throw new Error("header name must be a non-empty string");
        }
        const key = utils$1.findKey(self2, lHeader);
        if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
          self2[key || _header] = normalizeValue(_value2);
        }
      }
      const setHeaders = (headers, _rewrite) => utils$1.forEach(headers, (_value2, _header) => setHeader(_value2, _header, _rewrite));
      if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
        setHeaders(header, valueOrRewrite);
      } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
        setHeaders(parseHeaders(header), valueOrRewrite);
      } else if (utils$1.isHeaders(header)) {
        for (const [key, value] of header.entries()) {
          setHeader(value, key, rewrite);
        }
      } else {
        header != null && setHeader(valueOrRewrite, header, rewrite);
      }
      return this;
    }
    get(header, parser) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils$1.findKey(this, header);
        if (key) {
          const value = this[key];
          if (!parser) {
            return value;
          }
          if (parser === true) {
            return parseTokens(value);
          }
          if (utils$1.isFunction(parser)) {
            return parser.call(this, value, key);
          }
          if (utils$1.isRegExp(parser)) {
            return parser.exec(value);
          }
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(header, matcher) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils$1.findKey(this, header);
        return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
      }
      return false;
    }
    delete(header, matcher) {
      const self2 = this;
      let deleted = false;
      function deleteHeader(_header) {
        _header = normalizeHeader(_header);
        if (_header) {
          const key = utils$1.findKey(self2, _header);
          if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
            delete self2[key];
            deleted = true;
          }
        }
      }
      if (utils$1.isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }
      return deleted;
    }
    clear(matcher) {
      const keys = Object.keys(this);
      let i = keys.length;
      let deleted = false;
      while (i--) {
        const key = keys[i];
        if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
          delete this[key];
          deleted = true;
        }
      }
      return deleted;
    }
    normalize(format) {
      const self2 = this;
      const headers = {};
      utils$1.forEach(this, (value, header) => {
        const key = utils$1.findKey(headers, header);
        if (key) {
          self2[key] = normalizeValue(value);
          delete self2[header];
          return;
        }
        const normalized = format ? formatHeader(header) : String(header).trim();
        if (normalized !== header) {
          delete self2[header];
        }
        self2[normalized] = normalizeValue(value);
        headers[normalized] = true;
      });
      return this;
    }
    concat(...targets) {
      return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
      const obj = /* @__PURE__ */ Object.create(null);
      utils$1.forEach(this, (value, header) => {
        value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(", ") : value);
      });
      return obj;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(thing) {
      return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
      const computed2 = new this(first);
      targets.forEach((target) => computed2.set(target));
      return computed2;
    }
    static accessor(header) {
      const internals = this[$internals] = this[$internals] = {
        accessors: {}
      };
      const accessors = internals.accessors;
      const prototype2 = this.prototype;
      function defineAccessor(_header) {
        const lHeader = normalizeHeader(_header);
        if (!accessors[lHeader]) {
          buildAccessors(prototype2, _header);
          accessors[lHeader] = true;
        }
      }
      utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
      return this;
    }
  }
  AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
  utils$1.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
    let mapped = key[0].toUpperCase() + key.slice(1);
    return {
      get: () => value,
      set(headerValue) {
        this[mapped] = headerValue;
      }
    };
  });
  utils$1.freezeMethods(AxiosHeaders);
  function transformData(fns, response) {
    const config = this || defaults;
    const context = response || config;
    const headers = AxiosHeaders.from(context.headers);
    let data = context.data;
    utils$1.forEach(fns, function transform(fn) {
      data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
    });
    headers.normalize();
    return data;
  }
  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }
  function CanceledError(message, config, request) {
    AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED, config, request);
    this.name = "CanceledError";
  }
  utils$1.inherits(CanceledError, AxiosError, {
    __CANCEL__: true
  });
  function settle(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError(
        "Request failed with status code " + response.status,
        [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  }
  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
  }
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes2 = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== void 0 ? min : 1e3;
    return function push(chunkLength) {
      const now = Date.now();
      const startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now;
      }
      bytes2[head] = chunkLength;
      timestamps[head] = now;
      let i = tail;
      let bytesCount = 0;
      while (i !== head) {
        bytesCount += bytes2[i++];
        i = i % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now - firstSampleTS < min) {
        return;
      }
      const passed = startedAt && now - startedAt;
      return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
    };
  }
  function throttle(fn, freq) {
    let timestamp = 0;
    let threshold = 1e3 / freq;
    let lastArgs;
    let timer;
    const invoke = (args, now = Date.now()) => {
      timestamp = now;
      lastArgs = null;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      fn.apply(null, args);
    };
    const throttled = (...args) => {
      const now = Date.now();
      const passed = now - timestamp;
      if (passed >= threshold) {
        invoke(args, now);
      } else {
        lastArgs = args;
        if (!timer) {
          timer = setTimeout(() => {
            timer = null;
            invoke(lastArgs);
          }, threshold - passed);
        }
      }
    };
    const flush = () => lastArgs && invoke(lastArgs);
    return [throttled, flush];
  }
  const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
    let bytesNotified = 0;
    const _speedometer = speedometer(50, 250);
    return throttle((e) => {
      const loaded = e.loaded;
      const total = e.lengthComputable ? e.total : void 0;
      const progressBytes = loaded - bytesNotified;
      const rate = _speedometer(progressBytes);
      const inRange = loaded <= total;
      bytesNotified = loaded;
      const data = {
        loaded,
        total,
        progress: total ? loaded / total : void 0,
        bytes: progressBytes,
        rate: rate ? rate : void 0,
        estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
        event: e,
        lengthComputable: total != null,
        [isDownloadStream ? "download" : "upload"]: true
      };
      listener(data);
    }, freq);
  };
  const progressEventDecorator = (total, throttled) => {
    const lengthComputable = total != null;
    return [(loaded) => throttled[0]({
      lengthComputable,
      total,
      loaded
    }), throttled[1]];
  };
  const asyncDecorator = (fn) => (...args) => utils$1.asap(() => fn(...args));
  const isURLSameOrigin = platform.hasStandardBrowserEnv ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function standardBrowserEnv() {
      const msie = /(msie|trident)/i.test(navigator.userAgent);
      const urlParsingNode = document.createElement("a");
      let originURL;
      function resolveURL(url) {
        let href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin2(requestURL) {
        const parsed = utils$1.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    /* @__PURE__ */ function nonStandardBrowserEnv() {
      return function isURLSameOrigin2() {
        return true;
      };
    }()
  );
  const cookies = platform.hasStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    {
      write(name, value, expires, path, domain, secure) {
        const cookie = [name + "=" + encodeURIComponent(value)];
        utils$1.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
        utils$1.isString(path) && cookie.push("path=" + path);
        utils$1.isString(domain) && cookie.push("domain=" + domain);
        secure === true && cookie.push("secure");
        document.cookie = cookie.join("; ");
      },
      read(name) {
        const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove(name) {
        this.write(name, "", Date.now() - 864e5);
      }
    }
  ) : (
    // Non-standard browser env (web workers, react-native) lack needed support.
    {
      write() {
      },
      read() {
        return null;
      },
      remove() {
      }
    }
  );
  function isAbsoluteURL(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  }
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }
  const headersToObject = (thing) => thing instanceof AxiosHeaders ? { ...thing } : thing;
  function mergeConfig(config1, config2) {
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
      if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
        return utils$1.merge.call({ caseless }, target, source);
      } else if (utils$1.isPlainObject(source)) {
        return utils$1.merge({}, source);
      } else if (utils$1.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(a, b2, caseless) {
      if (!utils$1.isUndefined(b2)) {
        return getMergedValue(a, b2, caseless);
      } else if (!utils$1.isUndefined(a)) {
        return getMergedValue(void 0, a, caseless);
      }
    }
    function valueFromConfig2(a, b2) {
      if (!utils$1.isUndefined(b2)) {
        return getMergedValue(void 0, b2);
      }
    }
    function defaultToConfig2(a, b2) {
      if (!utils$1.isUndefined(b2)) {
        return getMergedValue(void 0, b2);
      } else if (!utils$1.isUndefined(a)) {
        return getMergedValue(void 0, a);
      }
    }
    function mergeDirectKeys(a, b2, prop) {
      if (prop in config2) {
        return getMergedValue(a, b2);
      } else if (prop in config1) {
        return getMergedValue(void 0, a);
      }
    }
    const mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      withXSRFToken: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: (a, b2) => mergeDeepProperties(headersToObject(a), headersToObject(b2), true)
    };
    utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
      const merge2 = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge2(config1[prop], config2[prop], prop);
      utils$1.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  }
  const resolveConfig = (config) => {
    const newConfig = mergeConfig({}, config);
    let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
    newConfig.headers = headers = AxiosHeaders.from(headers);
    newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);
    if (auth) {
      headers.set(
        "Authorization",
        "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : ""))
      );
    }
    let contentType;
    if (utils$1.isFormData(data)) {
      if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
        headers.setContentType(void 0);
      } else if ((contentType = headers.getContentType()) !== false) {
        const [type, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
        headers.setContentType([type || "multipart/form-data", ...tokens].join("; "));
      }
    }
    if (platform.hasStandardBrowserEnv) {
      withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
      if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin(newConfig.url)) {
        const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
        if (xsrfValue) {
          headers.set(xsrfHeaderName, xsrfValue);
        }
      }
    }
    return newConfig;
  };
  const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
  const xhrAdapter = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      const _config = resolveConfig(config);
      let requestData = _config.data;
      const requestHeaders = AxiosHeaders.from(_config.headers).normalize();
      let { responseType, onUploadProgress, onDownloadProgress } = _config;
      let onCanceled;
      let uploadThrottled, downloadThrottled;
      let flushUpload, flushDownload;
      function done() {
        flushUpload && flushUpload();
        flushDownload && flushDownload();
        _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
        _config.signal && _config.signal.removeEventListener("abort", onCanceled);
      }
      let request = new XMLHttpRequest();
      request.open(_config.method.toUpperCase(), _config.url, true);
      request.timeout = _config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        const responseHeaders = AxiosHeaders.from(
          "getAllResponseHeaders" in request && request.getAllResponseHeaders()
        );
        const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        };
        settle(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);
        request = null;
      }
      if ("onloadend" in request) {
        request.onloadend = onloadend;
      } else {
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request));
        request = null;
      };
      request.onerror = function handleError() {
        reject(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request));
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
        const transitional = _config.transitional || transitionalDefaults;
        if (_config.timeoutErrorMessage) {
          timeoutErrorMessage = _config.timeoutErrorMessage;
        }
        reject(new AxiosError(
          timeoutErrorMessage,
          transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
          config,
          request
        ));
        request = null;
      };
      requestData === void 0 && requestHeaders.setContentType(null);
      if ("setRequestHeader" in request) {
        utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }
      if (!utils$1.isUndefined(_config.withCredentials)) {
        request.withCredentials = !!_config.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request.responseType = _config.responseType;
      }
      if (onDownloadProgress) {
        [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
        request.addEventListener("progress", downloadThrottled);
      }
      if (onUploadProgress && request.upload) {
        [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
        request.upload.addEventListener("progress", uploadThrottled);
        request.upload.addEventListener("loadend", flushUpload);
      }
      if (_config.cancelToken || _config.signal) {
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
          request.abort();
          request = null;
        };
        _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
        if (_config.signal) {
          _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
        }
      }
      const protocol = parseProtocol(_config.url);
      if (protocol && platform.protocols.indexOf(protocol) === -1) {
        reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config));
        return;
      }
      request.send(requestData || null);
    });
  };
  const composeSignals = (signals, timeout) => {
    let controller = new AbortController();
    let aborted;
    const onabort = function(cancel) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = cancel instanceof Error ? cancel : this.reason;
        controller.abort(err instanceof AxiosError ? err : new CanceledError(err instanceof Error ? err.message : err));
      }
    };
    let timer = timeout && setTimeout(() => {
      onabort(new AxiosError(`timeout ${timeout} of ms exceeded`, AxiosError.ETIMEDOUT));
    }, timeout);
    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach((signal2) => {
          signal2 && (signal2.removeEventListener ? signal2.removeEventListener("abort", onabort) : signal2.unsubscribe(onabort));
        });
        signals = null;
      }
    };
    signals.forEach((signal2) => signal2 && signal2.addEventListener && signal2.addEventListener("abort", onabort));
    const { signal } = controller;
    signal.unsubscribe = unsubscribe;
    return [signal, () => {
      timer && clearTimeout(timer);
      timer = null;
    }];
  };
  const streamChunk = function* (chunk, chunkSize) {
    let len = chunk.byteLength;
    if (!chunkSize || len < chunkSize) {
      yield chunk;
      return;
    }
    let pos = 0;
    let end;
    while (pos < len) {
      end = pos + chunkSize;
      yield chunk.slice(pos, end);
      pos = end;
    }
  };
  const readBytes = async function* (iterable, chunkSize, encode2) {
    for await (const chunk of iterable) {
      yield* streamChunk(ArrayBuffer.isView(chunk) ? chunk : await encode2(String(chunk)), chunkSize);
    }
  };
  const trackStream = (stream, chunkSize, onProgress, onFinish, encode2) => {
    const iterator = readBytes(stream, chunkSize, encode2);
    let bytes2 = 0;
    let done;
    let _onFinish = (e) => {
      if (!done) {
        done = true;
        onFinish && onFinish(e);
      }
    };
    return new ReadableStream({
      async pull(controller) {
        try {
          const { done: done2, value } = await iterator.next();
          if (done2) {
            _onFinish();
            controller.close();
            return;
          }
          let len = value.byteLength;
          if (onProgress) {
            let loadedBytes = bytes2 += len;
            onProgress(loadedBytes);
          }
          controller.enqueue(new Uint8Array(value));
        } catch (err) {
          _onFinish(err);
          throw err;
        }
      },
      cancel(reason) {
        _onFinish(reason);
        return iterator.return();
      }
    }, {
      highWaterMark: 2
    });
  };
  const isFetchSupported = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function";
  const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === "function";
  const encodeText = isFetchSupported && (typeof TextEncoder === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : async (str) => new Uint8Array(await new Response(str).arrayBuffer()));
  const test = (fn, ...args) => {
    try {
      return !!fn(...args);
    } catch (e) {
      return false;
    }
  };
  const supportsRequestStream = isReadableStreamSupported && test(() => {
    let duplexAccessed = false;
    const hasContentType = new Request(platform.origin, {
      body: new ReadableStream(),
      method: "POST",
      get duplex() {
        duplexAccessed = true;
        return "half";
      }
    }).headers.has("Content-Type");
    return duplexAccessed && !hasContentType;
  });
  const DEFAULT_CHUNK_SIZE = 64 * 1024;
  const supportsResponseStream = isReadableStreamSupported && test(() => utils$1.isReadableStream(new Response("").body));
  const resolvers = {
    stream: supportsResponseStream && ((res) => res.body)
  };
  isFetchSupported && ((res) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
      !resolvers[type] && (resolvers[type] = utils$1.isFunction(res[type]) ? (res2) => res2[type]() : (_, config) => {
        throw new AxiosError(`Response type '${type}' is not supported`, AxiosError.ERR_NOT_SUPPORT, config);
      });
    });
  })(new Response());
  const getBodyLength = async (body) => {
    if (body == null) {
      return 0;
    }
    if (utils$1.isBlob(body)) {
      return body.size;
    }
    if (utils$1.isSpecCompliantForm(body)) {
      return (await new Request(body).arrayBuffer()).byteLength;
    }
    if (utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
      return body.byteLength;
    }
    if (utils$1.isURLSearchParams(body)) {
      body = body + "";
    }
    if (utils$1.isString(body)) {
      return (await encodeText(body)).byteLength;
    }
  };
  const resolveBodyLength = async (headers, body) => {
    const length = utils$1.toFiniteNumber(headers.getContentLength());
    return length == null ? getBodyLength(body) : length;
  };
  const fetchAdapter = isFetchSupported && (async (config) => {
    let {
      url,
      method,
      data,
      signal,
      cancelToken,
      timeout,
      onDownloadProgress,
      onUploadProgress,
      responseType,
      headers,
      withCredentials = "same-origin",
      fetchOptions
    } = resolveConfig(config);
    responseType = responseType ? (responseType + "").toLowerCase() : "text";
    let [composedSignal, stopTimeout] = signal || cancelToken || timeout ? composeSignals([signal, cancelToken], timeout) : [];
    let finished, request;
    const onFinish = () => {
      !finished && setTimeout(() => {
        composedSignal && composedSignal.unsubscribe();
      });
      finished = true;
    };
    let requestContentLength;
    try {
      if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
        let _request3 = new Request(url, {
          method: "POST",
          body: data,
          duplex: "half"
        });
        let contentTypeHeader;
        if (utils$1.isFormData(data) && (contentTypeHeader = _request3.headers.get("content-type"))) {
          headers.setContentType(contentTypeHeader);
        }
        if (_request3.body) {
          const [onProgress, flush] = progressEventDecorator(
            requestContentLength,
            progressEventReducer(asyncDecorator(onUploadProgress))
          );
          data = trackStream(_request3.body, DEFAULT_CHUNK_SIZE, onProgress, flush, encodeText);
        }
      }
      if (!utils$1.isString(withCredentials)) {
        withCredentials = withCredentials ? "include" : "omit";
      }
      request = new Request(url, {
        ...fetchOptions,
        signal: composedSignal,
        method: method.toUpperCase(),
        headers: headers.normalize().toJSON(),
        body: data,
        duplex: "half",
        credentials: withCredentials
      });
      let response = await fetch(request);
      const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
      if (supportsResponseStream && (onDownloadProgress || isStreamResponse)) {
        const options = {};
        ["status", "statusText", "headers"].forEach((prop) => {
          options[prop] = response[prop];
        });
        const responseContentLength = utils$1.toFiniteNumber(response.headers.get("content-length"));
        const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
          responseContentLength,
          progressEventReducer(asyncDecorator(onDownloadProgress), true)
        ) || [];
        response = new Response(
          trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
            flush && flush();
            isStreamResponse && onFinish();
          }, encodeText),
          options
        );
      }
      responseType = responseType || "text";
      let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || "text"](response, config);
      !isStreamResponse && onFinish();
      stopTimeout && stopTimeout();
      return await new Promise((resolve, reject) => {
        settle(resolve, reject, {
          data: responseData,
          headers: AxiosHeaders.from(response.headers),
          status: response.status,
          statusText: response.statusText,
          config,
          request
        });
      });
    } catch (err) {
      onFinish();
      if (err && err.name === "TypeError" && /fetch/i.test(err.message)) {
        throw Object.assign(
          new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request),
          {
            cause: err.cause || err
          }
        );
      }
      throw AxiosError.from(err, err && err.code, config, request);
    }
  });
  const knownAdapters = {
    http: httpAdapter,
    xhr: xhrAdapter,
    fetch: fetchAdapter
  };
  utils$1.forEach(knownAdapters, (fn, value) => {
    if (fn) {
      try {
        Object.defineProperty(fn, "name", { value });
      } catch (e) {
      }
      Object.defineProperty(fn, "adapterName", { value });
    }
  });
  const renderReason = (reason) => `- ${reason}`;
  const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;
  const adapters = {
    getAdapter: (adapters2) => {
      adapters2 = utils$1.isArray(adapters2) ? adapters2 : [adapters2];
      const { length } = adapters2;
      let nameOrAdapter;
      let adapter;
      const rejectedReasons = {};
      for (let i = 0; i < length; i++) {
        nameOrAdapter = adapters2[i];
        let id2;
        adapter = nameOrAdapter;
        if (!isResolvedHandle(nameOrAdapter)) {
          adapter = knownAdapters[(id2 = String(nameOrAdapter)).toLowerCase()];
          if (adapter === void 0) {
            throw new AxiosError(`Unknown adapter '${id2}'`);
          }
        }
        if (adapter) {
          break;
        }
        rejectedReasons[id2 || "#" + i] = adapter;
      }
      if (!adapter) {
        const reasons = Object.entries(rejectedReasons).map(
          ([id2, state]) => `adapter ${id2} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
        );
        let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
        throw new AxiosError(
          `There is no suitable adapter to dispatch the request ` + s,
          "ERR_NOT_SUPPORT"
        );
      }
      return adapter;
    },
    adapters: knownAdapters
  };
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError(null, config);
    }
  }
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders.from(config.headers);
    config.data = transformData.call(
      config,
      config.transformRequest
    );
    if (["post", "put", "patch"].indexOf(config.method) !== -1) {
      config.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    const adapter = adapters.getAdapter(config.adapter || defaults.adapter);
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData.call(
        config,
        config.transformResponse,
        response
      );
      response.headers = AxiosHeaders.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            config.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }
  const VERSION = "1.7.3";
  const validators$1 = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
    validators$1[type] = function validator2(thing) {
      return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
  });
  const deprecatedWarnings = {};
  validators$1.transitional = function transitional(validator2, version2, message) {
    function formatMessage(opt, desc) {
      return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    return (value, opt, opts) => {
      if (validator2 === false) {
        throw new AxiosError(
          formatMessage(opt, " has been removed" + (version2 ? " in " + version2 : "")),
          AxiosError.ERR_DEPRECATED
        );
      }
      if (version2 && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        console.warn(
          formatMessage(
            opt,
            " has been deprecated since v" + version2 + " and will be removed in the near future"
          )
        );
      }
      return validator2 ? validator2(value, opt, opts) : true;
    };
  };
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
      throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while (i-- > 0) {
      const opt = keys[i];
      const validator2 = schema[opt];
      if (validator2) {
        const value = options[opt];
        const result = value === void 0 || validator2(value, opt, options);
        if (result !== true) {
          throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
      }
    }
  }
  const validator = {
    assertOptions,
    validators: validators$1
  };
  const validators = validator.validators;
  class Axios {
    constructor(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    async request(configOrUrl, config) {
      try {
        return await this._request(configOrUrl, config);
      } catch (err) {
        if (err instanceof Error) {
          let dummy;
          Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : dummy = new Error();
          const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
          try {
            if (!err.stack) {
              err.stack = stack;
            } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
              err.stack += "\n" + stack;
            }
          } catch (e) {
          }
        }
        throw err;
      }
    }
    _request(configOrUrl, config) {
      if (typeof configOrUrl === "string") {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = mergeConfig(this.defaults, config);
      const { transitional, paramsSerializer, headers } = config;
      if (transitional !== void 0) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
      }
      if (paramsSerializer != null) {
        if (utils$1.isFunction(paramsSerializer)) {
          config.paramsSerializer = {
            serialize: paramsSerializer
          };
        } else {
          validator.assertOptions(paramsSerializer, {
            encode: validators.function,
            serialize: validators.function
          }, true);
        }
      }
      config.method = (config.method || this.defaults.method || "get").toLowerCase();
      let contextHeaders = headers && utils$1.merge(
        headers.common,
        headers[config.method]
      );
      headers && utils$1.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (method) => {
          delete headers[method];
        }
      );
      config.headers = AxiosHeaders.concat(contextHeaders, headers);
      const requestInterceptorChain = [];
      let synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      const responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      let promise;
      let i = 0;
      let len;
      if (!synchronousRequestInterceptors) {
        const chain = [dispatchRequest.bind(this), void 0];
        chain.unshift.apply(chain, requestInterceptorChain);
        chain.push.apply(chain, responseInterceptorChain);
        len = chain.length;
        promise = Promise.resolve(config);
        while (i < len) {
          promise = promise.then(chain[i++], chain[i++]);
        }
        return promise;
      }
      len = requestInterceptorChain.length;
      let newConfig = config;
      i = 0;
      while (i < len) {
        const onFulfilled = requestInterceptorChain[i++];
        const onRejected = requestInterceptorChain[i++];
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected.call(this, error);
          break;
        }
      }
      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      i = 0;
      len = responseInterceptorChain.length;
      while (i < len) {
        promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
      }
      return promise;
    }
    getUri(config) {
      config = mergeConfig(this.defaults, config);
      const fullPath = buildFullPath(config.baseURL, config.url);
      return buildURL(fullPath, config.params, config.paramsSerializer);
    }
  }
  utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
    Axios.prototype[method] = function(url, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        url,
        data: (config || {}).data
      }));
    };
  });
  utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          headers: isForm ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url,
          data
        }));
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
  });
  class CancelToken {
    constructor(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      let resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      const token = this;
      this.promise.then((cancel) => {
        if (!token._listeners) return;
        let i = token._listeners.length;
        while (i-- > 0) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = (onfulfilled) => {
        let _resolve;
        const promise = new Promise((resolve) => {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message, config, request) {
        if (token.reason) {
          return;
        }
        token.reason = new CanceledError(message, config, request);
        resolvePromise(token.reason);
      });
    }
    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }
    /**
     * Subscribe to the cancel signal
     */
    subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    }
    /**
     * Unsubscribe from the cancel signal
     */
    unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      const index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    }
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let cancel;
      const token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    }
  }
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }
  function isAxiosError(payload) {
    return utils$1.isObject(payload) && payload.isAxiosError === true;
  }
  const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(HttpStatusCode).forEach(([key, value]) => {
    HttpStatusCode[value] = key;
  });
  function createInstance(defaultConfig) {
    const context = new Axios(defaultConfig);
    const instance = bind(Axios.prototype.request, context);
    utils$1.extend(instance, Axios.prototype, context, { allOwnKeys: true });
    utils$1.extend(instance, context, null, { allOwnKeys: true });
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }
  const axios = createInstance(defaults);
  axios.Axios = Axios;
  axios.CanceledError = CanceledError;
  axios.CancelToken = CancelToken;
  axios.isCancel = isCancel;
  axios.VERSION = VERSION;
  axios.toFormData = toFormData;
  axios.AxiosError = AxiosError;
  axios.Cancel = axios.CanceledError;
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;
  axios.isAxiosError = isAxiosError;
  axios.mergeConfig = mergeConfig;
  axios.AxiosHeaders = AxiosHeaders;
  axios.formToJSON = (thing) => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
  axios.getAdapter = adapters.getAdapter;
  axios.HttpStatusCode = HttpStatusCode;
  axios.default = axios;
  const version = "6.13.5";
  function checkType(value, type, name) {
    const types = type.split("|").map((t) => t.trim());
    for (let i = 0; i < types.length; i++) {
      switch (type) {
        case "any":
          return;
        case "bigint":
        case "boolean":
        case "number":
        case "string":
          if (typeof value === type) {
            return;
          }
      }
    }
    const error = new Error(`invalid value for type ${type}`);
    error.code = "INVALID_ARGUMENT";
    error.argument = `value.${name}`;
    error.value = value;
    throw error;
  }
  async function resolveProperties(value) {
    const keys = Object.keys(value);
    const results = await Promise.all(keys.map((k) => Promise.resolve(value[k])));
    return results.reduce((accum, v, index) => {
      accum[keys[index]] = v;
      return accum;
    }, {});
  }
  function defineProperties(target, values, types) {
    for (let key in values) {
      let value = values[key];
      const type = types ? types[key] : null;
      if (type) {
        checkType(value, type, key);
      }
      Object.defineProperty(target, key, { enumerable: true, value, writable: false });
    }
  }
  function stringify(value) {
    if (value == null) {
      return "null";
    }
    if (Array.isArray(value)) {
      return "[ " + value.map(stringify).join(", ") + " ]";
    }
    if (value instanceof Uint8Array) {
      const HEX = "0123456789abcdef";
      let result = "0x";
      for (let i = 0; i < value.length; i++) {
        result += HEX[value[i] >> 4];
        result += HEX[value[i] & 15];
      }
      return result;
    }
    if (typeof value === "object" && typeof value.toJSON === "function") {
      return stringify(value.toJSON());
    }
    switch (typeof value) {
      case "boolean":
      case "symbol":
        return value.toString();
      case "bigint":
        return BigInt(value).toString();
      case "number":
        return value.toString();
      case "string":
        return JSON.stringify(value);
      case "object": {
        const keys = Object.keys(value);
        keys.sort();
        return "{ " + keys.map((k) => `${stringify(k)}: ${stringify(value[k])}`).join(", ") + " }";
      }
    }
    return `[ COULD NOT SERIALIZE ]`;
  }
  function isError(error, code) {
    return error && error.code === code;
  }
  function isCallException(error) {
    return isError(error, "CALL_EXCEPTION");
  }
  function makeError(message, code, info) {
    let shortMessage = message;
    {
      const details = [];
      if (info) {
        if ("message" in info || "code" in info || "name" in info) {
          throw new Error(`value will overwrite populated values: ${stringify(info)}`);
        }
        for (const key in info) {
          if (key === "shortMessage") {
            continue;
          }
          const value = info[key];
          details.push(key + "=" + stringify(value));
        }
      }
      details.push(`code=${code}`);
      details.push(`version=${version}`);
      if (details.length) {
        message += " (" + details.join(", ") + ")";
      }
    }
    let error;
    switch (code) {
      case "INVALID_ARGUMENT":
        error = new TypeError(message);
        break;
      case "NUMERIC_FAULT":
      case "BUFFER_OVERRUN":
        error = new RangeError(message);
        break;
      default:
        error = new Error(message);
    }
    defineProperties(error, { code });
    if (info) {
      Object.assign(error, info);
    }
    if (error.shortMessage == null) {
      defineProperties(error, { shortMessage });
    }
    return error;
  }
  function assert(check, message, code, info) {
    if (!check) {
      throw makeError(message, code, info);
    }
  }
  function assertArgument(check, message, name, value) {
    assert(check, message, "INVALID_ARGUMENT", { argument: name, value });
  }
  function assertArgumentCount(count, expectedCount, message) {
    if (message == null) {
      message = "";
    }
    if (message) {
      message = ": " + message;
    }
    assert(count >= expectedCount, "missing argument" + message, "MISSING_ARGUMENT", {
      count,
      expectedCount
    });
    assert(count <= expectedCount, "too many arguments" + message, "UNEXPECTED_ARGUMENT", {
      count,
      expectedCount
    });
  }
  ["NFD", "NFC", "NFKD", "NFKC"].reduce((accum, form) => {
    try {
      if ("test".normalize(form) !== "test") {
        throw new Error("bad");
      }
      ;
      if (form === "NFD") {
        const check = String.fromCharCode(233).normalize("NFD");
        const expected = String.fromCharCode(101, 769);
        if (check !== expected) {
          throw new Error("broken");
        }
      }
      accum.push(form);
    } catch (error) {
    }
    return accum;
  }, []);
  function assertPrivate(givenGuard, guard, className) {
    if (className == null) {
      className = "";
    }
    if (givenGuard !== guard) {
      let method = className, operation = "new";
      if (className) {
        method += ".";
        operation += " " + className;
      }
      assert(false, `private constructor; use ${method}from* methods`, "UNSUPPORTED_OPERATION", {
        operation
      });
    }
  }
  function _getBytes(value, name, copy2) {
    if (value instanceof Uint8Array) {
      if (copy2) {
        return new Uint8Array(value);
      }
      return value;
    }
    if (typeof value === "string" && value.match(/^0x(?:[0-9a-f][0-9a-f])*$/i)) {
      const result = new Uint8Array((value.length - 2) / 2);
      let offset = 2;
      for (let i = 0; i < result.length; i++) {
        result[i] = parseInt(value.substring(offset, offset + 2), 16);
        offset += 2;
      }
      return result;
    }
    assertArgument(false, "invalid BytesLike value", name || "value", value);
  }
  function getBytes(value, name) {
    return _getBytes(value, name, false);
  }
  function getBytesCopy(value, name) {
    return _getBytes(value, name, true);
  }
  function isHexString(value, length) {
    if (typeof value !== "string" || !value.match(/^0x[0-9A-Fa-f]*$/)) {
      return false;
    }
    if (typeof length === "number" && value.length !== 2 + 2 * length) {
      return false;
    }
    if (length === true && value.length % 2 !== 0) {
      return false;
    }
    return true;
  }
  function isBytesLike(value) {
    return isHexString(value, true) || value instanceof Uint8Array;
  }
  const HexCharacters = "0123456789abcdef";
  function hexlify(data) {
    const bytes2 = getBytes(data);
    let result = "0x";
    for (let i = 0; i < bytes2.length; i++) {
      const v = bytes2[i];
      result += HexCharacters[(v & 240) >> 4] + HexCharacters[v & 15];
    }
    return result;
  }
  function concat(datas) {
    return "0x" + datas.map((d) => hexlify(d).substring(2)).join("");
  }
  function dataLength(data) {
    if (isHexString(data, true)) {
      return (data.length - 2) / 2;
    }
    return getBytes(data).length;
  }
  function dataSlice(data, start, end) {
    const bytes2 = getBytes(data);
    if (end != null && end > bytes2.length) {
      assert(false, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
        buffer: bytes2,
        length: bytes2.length,
        offset: end
      });
    }
    return hexlify(bytes2.slice(start == null ? 0 : start, end == null ? bytes2.length : end));
  }
  function zeroPad(data, length, left) {
    const bytes2 = getBytes(data);
    assert(length >= bytes2.length, "padding exceeds data length", "BUFFER_OVERRUN", {
      buffer: new Uint8Array(bytes2),
      length,
      offset: length + 1
    });
    const result = new Uint8Array(length);
    result.fill(0);
    if (left) {
      result.set(bytes2, length - bytes2.length);
    } else {
      result.set(bytes2, 0);
    }
    return hexlify(result);
  }
  function zeroPadValue(data, length) {
    return zeroPad(data, length, true);
  }
  function zeroPadBytes(data, length) {
    return zeroPad(data, length, false);
  }
  const BN_0$8 = BigInt(0);
  const BN_1$3 = BigInt(1);
  const maxValue = 9007199254740991;
  function fromTwos(_value2, _width) {
    const value = getUint(_value2, "value");
    const width = BigInt(getNumber(_width, "width"));
    assert(value >> width === BN_0$8, "overflow", "NUMERIC_FAULT", {
      operation: "fromTwos",
      fault: "overflow",
      value: _value2
    });
    if (value >> width - BN_1$3) {
      const mask2 = (BN_1$3 << width) - BN_1$3;
      return -((~value & mask2) + BN_1$3);
    }
    return value;
  }
  function toTwos(_value2, _width) {
    let value = getBigInt(_value2, "value");
    const width = BigInt(getNumber(_width, "width"));
    const limit = BN_1$3 << width - BN_1$3;
    if (value < BN_0$8) {
      value = -value;
      assert(value <= limit, "too low", "NUMERIC_FAULT", {
        operation: "toTwos",
        fault: "overflow",
        value: _value2
      });
      const mask2 = (BN_1$3 << width) - BN_1$3;
      return (~value & mask2) + BN_1$3;
    } else {
      assert(value < limit, "too high", "NUMERIC_FAULT", {
        operation: "toTwos",
        fault: "overflow",
        value: _value2
      });
    }
    return value;
  }
  function mask(_value2, _bits) {
    const value = getUint(_value2, "value");
    const bits = BigInt(getNumber(_bits, "bits"));
    return value & (BN_1$3 << bits) - BN_1$3;
  }
  function getBigInt(value, name) {
    switch (typeof value) {
      case "bigint":
        return value;
      case "number":
        assertArgument(Number.isInteger(value), "underflow", name || "value", value);
        assertArgument(value >= -maxValue && value <= maxValue, "overflow", name || "value", value);
        return BigInt(value);
      case "string":
        try {
          if (value === "") {
            throw new Error("empty string");
          }
          if (value[0] === "-" && value[1] !== "-") {
            return -BigInt(value.substring(1));
          }
          return BigInt(value);
        } catch (e) {
          assertArgument(false, `invalid BigNumberish string: ${e.message}`, name || "value", value);
        }
    }
    assertArgument(false, "invalid BigNumberish value", name || "value", value);
  }
  function getUint(value, name) {
    const result = getBigInt(value, name);
    assert(result >= BN_0$8, "unsigned value cannot be negative", "NUMERIC_FAULT", {
      fault: "overflow",
      operation: "getUint",
      value
    });
    return result;
  }
  const Nibbles = "0123456789abcdef";
  function toBigInt(value) {
    if (value instanceof Uint8Array) {
      let result = "0x0";
      for (const v of value) {
        result += Nibbles[v >> 4];
        result += Nibbles[v & 15];
      }
      return BigInt(result);
    }
    return getBigInt(value);
  }
  function getNumber(value, name) {
    switch (typeof value) {
      case "bigint":
        assertArgument(value >= -maxValue && value <= maxValue, "overflow", name || "value", value);
        return Number(value);
      case "number":
        assertArgument(Number.isInteger(value), "underflow", name || "value", value);
        assertArgument(value >= -maxValue && value <= maxValue, "overflow", name || "value", value);
        return value;
      case "string":
        try {
          if (value === "") {
            throw new Error("empty string");
          }
          return getNumber(BigInt(value), name);
        } catch (e) {
          assertArgument(false, `invalid numeric string: ${e.message}`, name || "value", value);
        }
    }
    assertArgument(false, "invalid numeric value", name || "value", value);
  }
  function toNumber(value) {
    return getNumber(toBigInt(value));
  }
  function toBeHex(_value2, _width) {
    const value = getUint(_value2, "value");
    let result = value.toString(16);
    if (_width == null) {
      if (result.length % 2) {
        result = "0" + result;
      }
    } else {
      const width = getNumber(_width, "width");
      assert(width * 2 >= result.length, `value exceeds width (${width} bytes)`, "NUMERIC_FAULT", {
        operation: "toBeHex",
        fault: "overflow",
        value: _value2
      });
      while (result.length < width * 2) {
        result = "0" + result;
      }
    }
    return "0x" + result;
  }
  function toBeArray(_value2) {
    const value = getUint(_value2, "value");
    if (value === BN_0$8) {
      return new Uint8Array([]);
    }
    let hex = value.toString(16);
    if (hex.length % 2) {
      hex = "0" + hex;
    }
    const result = new Uint8Array(hex.length / 2);
    for (let i = 0; i < result.length; i++) {
      const offset = i * 2;
      result[i] = parseInt(hex.substring(offset, offset + 2), 16);
    }
    return result;
  }
  function toQuantity(value) {
    let result = hexlify(isBytesLike(value) ? value : toBeArray(value)).substring(2);
    while (result.startsWith("0")) {
      result = result.substring(1);
    }
    if (result === "") {
      result = "0";
    }
    return "0x" + result;
  }
  const Alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  BigInt(0);
  const BN_58 = BigInt(58);
  function encodeBase58(_value2) {
    const bytes2 = getBytes(_value2);
    let value = toBigInt(bytes2);
    let result = "";
    while (value) {
      result = Alphabet[Number(value % BN_58)] + result;
      value /= BN_58;
    }
    for (let i = 0; i < bytes2.length; i++) {
      if (bytes2[i]) {
        break;
      }
      result = Alphabet[0] + result;
    }
    return result;
  }
  function decodeBase64(textData) {
    textData = atob(textData);
    const data = new Uint8Array(textData.length);
    for (let i = 0; i < textData.length; i++) {
      data[i] = textData.charCodeAt(i);
    }
    return getBytes(data);
  }
  function encodeBase64(_data4) {
    const data = getBytes(_data4);
    let textData = "";
    for (let i = 0; i < data.length; i++) {
      textData += String.fromCharCode(data[i]);
    }
    return btoa(textData);
  }
  class EventPayload {
    /**
     *  Create a new **EventPayload** for %%emitter%% with
     *  the %%listener%% and for %%filter%%.
     */
    constructor(emitter, listener, filter) {
      /**
       *  The event filter.
       */
      __publicField(this, "filter");
      /**
       *  The **EventEmitterable**.
       */
      __publicField(this, "emitter");
      __privateAdd(this, _listener);
      __privateSet(this, _listener, listener);
      defineProperties(this, { emitter, filter });
    }
    /**
     *  Unregister the triggered listener for future events.
     */
    async removeListener() {
      if (__privateGet(this, _listener) == null) {
        return;
      }
      await this.emitter.off(this.filter, __privateGet(this, _listener));
    }
  }
  _listener = new WeakMap();
  function errorFunc(reason, offset, bytes2, output2, badCodepoint) {
    assertArgument(false, `invalid codepoint at offset ${offset}; ${reason}`, "bytes", bytes2);
  }
  function ignoreFunc(reason, offset, bytes2, output2, badCodepoint) {
    if (reason === "BAD_PREFIX" || reason === "UNEXPECTED_CONTINUE") {
      let i = 0;
      for (let o = offset + 1; o < bytes2.length; o++) {
        if (bytes2[o] >> 6 !== 2) {
          break;
        }
        i++;
      }
      return i;
    }
    if (reason === "OVERRUN") {
      return bytes2.length - offset - 1;
    }
    return 0;
  }
  function replaceFunc(reason, offset, bytes2, output2, badCodepoint) {
    if (reason === "OVERLONG") {
      assertArgument(typeof badCodepoint === "number", "invalid bad code point for replacement", "badCodepoint", badCodepoint);
      output2.push(badCodepoint);
      return 0;
    }
    output2.push(65533);
    return ignoreFunc(reason, offset, bytes2);
  }
  const Utf8ErrorFuncs = Object.freeze({
    error: errorFunc,
    ignore: ignoreFunc,
    replace: replaceFunc
  });
  function getUtf8CodePoints(_bytes, onError) {
    if (onError == null) {
      onError = Utf8ErrorFuncs.error;
    }
    const bytes2 = getBytes(_bytes, "bytes");
    const result = [];
    let i = 0;
    while (i < bytes2.length) {
      const c = bytes2[i++];
      if (c >> 7 === 0) {
        result.push(c);
        continue;
      }
      let extraLength = null;
      let overlongMask = null;
      if ((c & 224) === 192) {
        extraLength = 1;
        overlongMask = 127;
      } else if ((c & 240) === 224) {
        extraLength = 2;
        overlongMask = 2047;
      } else if ((c & 248) === 240) {
        extraLength = 3;
        overlongMask = 65535;
      } else {
        if ((c & 192) === 128) {
          i += onError("UNEXPECTED_CONTINUE", i - 1, bytes2, result);
        } else {
          i += onError("BAD_PREFIX", i - 1, bytes2, result);
        }
        continue;
      }
      if (i - 1 + extraLength >= bytes2.length) {
        i += onError("OVERRUN", i - 1, bytes2, result);
        continue;
      }
      let res = c & (1 << 8 - extraLength - 1) - 1;
      for (let j = 0; j < extraLength; j++) {
        let nextChar = bytes2[i];
        if ((nextChar & 192) != 128) {
          i += onError("MISSING_CONTINUE", i, bytes2, result);
          res = null;
          break;
        }
        res = res << 6 | nextChar & 63;
        i++;
      }
      if (res === null) {
        continue;
      }
      if (res > 1114111) {
        i += onError("OUT_OF_RANGE", i - 1 - extraLength, bytes2, result, res);
        continue;
      }
      if (res >= 55296 && res <= 57343) {
        i += onError("UTF16_SURROGATE", i - 1 - extraLength, bytes2, result, res);
        continue;
      }
      if (res <= overlongMask) {
        i += onError("OVERLONG", i - 1 - extraLength, bytes2, result, res);
        continue;
      }
      result.push(res);
    }
    return result;
  }
  function toUtf8Bytes(str, form) {
    assertArgument(typeof str === "string", "invalid string value", "str", str);
    let result = [];
    for (let i = 0; i < str.length; i++) {
      const c = str.charCodeAt(i);
      if (c < 128) {
        result.push(c);
      } else if (c < 2048) {
        result.push(c >> 6 | 192);
        result.push(c & 63 | 128);
      } else if ((c & 64512) == 55296) {
        i++;
        const c2 = str.charCodeAt(i);
        assertArgument(i < str.length && (c2 & 64512) === 56320, "invalid surrogate pair", "str", str);
        const pair = 65536 + ((c & 1023) << 10) + (c2 & 1023);
        result.push(pair >> 18 | 240);
        result.push(pair >> 12 & 63 | 128);
        result.push(pair >> 6 & 63 | 128);
        result.push(pair & 63 | 128);
      } else {
        result.push(c >> 12 | 224);
        result.push(c >> 6 & 63 | 128);
        result.push(c & 63 | 128);
      }
    }
    return new Uint8Array(result);
  }
  function _toUtf8String(codePoints) {
    return codePoints.map((codePoint) => {
      if (codePoint <= 65535) {
        return String.fromCharCode(codePoint);
      }
      codePoint -= 65536;
      return String.fromCharCode((codePoint >> 10 & 1023) + 55296, (codePoint & 1023) + 56320);
    }).join("");
  }
  function toUtf8String(bytes2, onError) {
    return _toUtf8String(getUtf8CodePoints(bytes2, onError));
  }
  function createGetUrl(options) {
    async function getUrl(req, _signal2) {
      assert(_signal2 == null || !_signal2.cancelled, "request cancelled before sending", "CANCELLED");
      const protocol = req.url.split(":")[0].toLowerCase();
      assert(protocol === "http" || protocol === "https", `unsupported protocol ${protocol}`, "UNSUPPORTED_OPERATION", {
        info: { protocol },
        operation: "request"
      });
      assert(protocol === "https" || !req.credentials || req.allowInsecureAuthentication, "insecure authorized connections unsupported", "UNSUPPORTED_OPERATION", {
        operation: "request"
      });
      let error = null;
      const controller = new AbortController();
      const timer = setTimeout(() => {
        error = makeError("request timeout", "TIMEOUT");
        controller.abort();
      }, req.timeout);
      if (_signal2) {
        _signal2.addListener(() => {
          error = makeError("request cancelled", "CANCELLED");
          controller.abort();
        });
      }
      const init2 = {
        method: req.method,
        headers: new Headers(Array.from(req)),
        body: req.body || void 0,
        signal: controller.signal
      };
      let resp;
      try {
        resp = await fetch(req.url, init2);
      } catch (_error2) {
        clearTimeout(timer);
        if (error) {
          throw error;
        }
        throw _error2;
      }
      clearTimeout(timer);
      const headers = {};
      resp.headers.forEach((value, key) => {
        headers[key.toLowerCase()] = value;
      });
      const respBody = await resp.arrayBuffer();
      const body = respBody == null ? null : new Uint8Array(respBody);
      return {
        statusCode: resp.status,
        statusMessage: resp.statusText,
        headers,
        body
      };
    }
    return getUrl;
  }
  const MAX_ATTEMPTS = 12;
  const SLOT_INTERVAL = 250;
  let defaultGetUrlFunc = createGetUrl();
  const reData = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i");
  const reIpfs = new RegExp("^ipfs://(ipfs/)?(.*)$", "i");
  let locked$1 = false;
  async function dataGatewayFunc(url, signal) {
    try {
      const match = url.match(reData);
      if (!match) {
        throw new Error("invalid data");
      }
      return new FetchResponse(200, "OK", {
        "content-type": match[1] || "text/plain"
      }, match[2] ? decodeBase64(match[3]) : unpercent(match[3]));
    } catch (error) {
      return new FetchResponse(599, "BAD REQUEST (invalid data: URI)", {}, null, new FetchRequest(url));
    }
  }
  function getIpfsGatewayFunc(baseUrl) {
    async function gatewayIpfs(url, signal) {
      try {
        const match = url.match(reIpfs);
        if (!match) {
          throw new Error("invalid link");
        }
        return new FetchRequest(`${baseUrl}${match[2]}`);
      } catch (error) {
        return new FetchResponse(599, "BAD REQUEST (invalid IPFS URI)", {}, null, new FetchRequest(url));
      }
    }
    return gatewayIpfs;
  }
  const Gateways = {
    "data": dataGatewayFunc,
    "ipfs": getIpfsGatewayFunc("https://gateway.ipfs.io/ipfs/")
  };
  const fetchSignals = /* @__PURE__ */ new WeakMap();
  class FetchCancelSignal {
    constructor(request) {
      __privateAdd(this, _listeners);
      __privateAdd(this, _cancelled);
      __privateSet(this, _listeners, []);
      __privateSet(this, _cancelled, false);
      fetchSignals.set(request, () => {
        if (__privateGet(this, _cancelled)) {
          return;
        }
        __privateSet(this, _cancelled, true);
        for (const listener of __privateGet(this, _listeners)) {
          setTimeout(() => {
            listener();
          }, 0);
        }
        __privateSet(this, _listeners, []);
      });
    }
    addListener(listener) {
      assert(!__privateGet(this, _cancelled), "singal already cancelled", "UNSUPPORTED_OPERATION", {
        operation: "fetchCancelSignal.addCancelListener"
      });
      __privateGet(this, _listeners).push(listener);
    }
    get cancelled() {
      return __privateGet(this, _cancelled);
    }
    checkSignal() {
      assert(!this.cancelled, "cancelled", "CANCELLED", {});
    }
  }
  _listeners = new WeakMap();
  _cancelled = new WeakMap();
  function checkSignal(signal) {
    if (signal == null) {
      throw new Error("missing signal; should not happen");
    }
    signal.checkSignal();
    return signal;
  }
  const _FetchRequest = class _FetchRequest {
    /**
     *  Create a new FetchRequest instance with default values.
     *
     *  Once created, each property may be set before issuing a
     *  ``.send()`` to make the request.
     */
    constructor(url) {
      __privateAdd(this, _FetchRequest_instances);
      __privateAdd(this, _allowInsecure);
      __privateAdd(this, _gzip);
      __privateAdd(this, _headers);
      __privateAdd(this, _method);
      __privateAdd(this, _timeout);
      __privateAdd(this, _url);
      __privateAdd(this, _body);
      __privateAdd(this, _bodyType);
      __privateAdd(this, _creds);
      // Hooks
      __privateAdd(this, _preflight);
      __privateAdd(this, _process);
      __privateAdd(this, _retry);
      __privateAdd(this, _signal);
      __privateAdd(this, _throttle);
      __privateAdd(this, _getUrlFunc);
      __privateSet(this, _url, String(url));
      __privateSet(this, _allowInsecure, false);
      __privateSet(this, _gzip, true);
      __privateSet(this, _headers, {});
      __privateSet(this, _method, "");
      __privateSet(this, _timeout, 3e5);
      __privateSet(this, _throttle, {
        slotInterval: SLOT_INTERVAL,
        maxAttempts: MAX_ATTEMPTS
      });
      __privateSet(this, _getUrlFunc, null);
    }
    /**
     *  The fetch URL to request.
     */
    get url() {
      return __privateGet(this, _url);
    }
    set url(url) {
      __privateSet(this, _url, String(url));
    }
    /**
     *  The fetch body, if any, to send as the request body. //(default: null)//
     *
     *  When setting a body, the intrinsic ``Content-Type`` is automatically
     *  set and will be used if **not overridden** by setting a custom
     *  header.
     *
     *  If %%body%% is null, the body is cleared (along with the
     *  intrinsic ``Content-Type``).
     *
     *  If %%body%% is a string, the intrinsic ``Content-Type`` is set to
     *  ``text/plain``.
     *
     *  If %%body%% is a Uint8Array, the intrinsic ``Content-Type`` is set to
     *  ``application/octet-stream``.
     *
     *  If %%body%% is any other object, the intrinsic ``Content-Type`` is
     *  set to ``application/json``.
     */
    get body() {
      if (__privateGet(this, _body) == null) {
        return null;
      }
      return new Uint8Array(__privateGet(this, _body));
    }
    set body(body) {
      if (body == null) {
        __privateSet(this, _body, void 0);
        __privateSet(this, _bodyType, void 0);
      } else if (typeof body === "string") {
        __privateSet(this, _body, toUtf8Bytes(body));
        __privateSet(this, _bodyType, "text/plain");
      } else if (body instanceof Uint8Array) {
        __privateSet(this, _body, body);
        __privateSet(this, _bodyType, "application/octet-stream");
      } else if (typeof body === "object") {
        __privateSet(this, _body, toUtf8Bytes(JSON.stringify(body)));
        __privateSet(this, _bodyType, "application/json");
      } else {
        throw new Error("invalid body");
      }
    }
    /**
     *  Returns true if the request has a body.
     */
    hasBody() {
      return __privateGet(this, _body) != null;
    }
    /**
     *  The HTTP method to use when requesting the URI. If no method
     *  has been explicitly set, then ``GET`` is used if the body is
     *  null and ``POST`` otherwise.
     */
    get method() {
      if (__privateGet(this, _method)) {
        return __privateGet(this, _method);
      }
      if (this.hasBody()) {
        return "POST";
      }
      return "GET";
    }
    set method(method) {
      if (method == null) {
        method = "";
      }
      __privateSet(this, _method, String(method).toUpperCase());
    }
    /**
     *  The headers that will be used when requesting the URI. All
     *  keys are lower-case.
     *
     *  This object is a copy, so any changes will **NOT** be reflected
     *  in the ``FetchRequest``.
     *
     *  To set a header entry, use the ``setHeader`` method.
     */
    get headers() {
      const headers = Object.assign({}, __privateGet(this, _headers));
      if (__privateGet(this, _creds)) {
        headers["authorization"] = `Basic ${encodeBase64(toUtf8Bytes(__privateGet(this, _creds)))}`;
      }
      if (this.allowGzip) {
        headers["accept-encoding"] = "gzip";
      }
      if (headers["content-type"] == null && __privateGet(this, _bodyType)) {
        headers["content-type"] = __privateGet(this, _bodyType);
      }
      if (this.body) {
        headers["content-length"] = String(this.body.length);
      }
      return headers;
    }
    /**
     *  Get the header for %%key%%, ignoring case.
     */
    getHeader(key) {
      return this.headers[key.toLowerCase()];
    }
    /**
     *  Set the header for %%key%% to %%value%%. All values are coerced
     *  to a string.
     */
    setHeader(key, value) {
      __privateGet(this, _headers)[String(key).toLowerCase()] = String(value);
    }
    /**
     *  Clear all headers, resetting all intrinsic headers.
     */
    clearHeaders() {
      __privateSet(this, _headers, {});
    }
    [Symbol.iterator]() {
      const headers = this.headers;
      const keys = Object.keys(headers);
      let index = 0;
      return {
        next: () => {
          if (index < keys.length) {
            const key = keys[index++];
            return {
              value: [key, headers[key]],
              done: false
            };
          }
          return { value: void 0, done: true };
        }
      };
    }
    /**
     *  The value that will be sent for the ``Authorization`` header.
     *
     *  To set the credentials, use the ``setCredentials`` method.
     */
    get credentials() {
      return __privateGet(this, _creds) || null;
    }
    /**
     *  Sets an ``Authorization`` for %%username%% with %%password%%.
     */
    setCredentials(username, password) {
      assertArgument(!username.match(/:/), "invalid basic authentication username", "username", "[REDACTED]");
      __privateSet(this, _creds, `${username}:${password}`);
    }
    /**
     *  Enable and request gzip-encoded responses. The response will
     *  automatically be decompressed. //(default: true)//
     */
    get allowGzip() {
      return __privateGet(this, _gzip);
    }
    set allowGzip(value) {
      __privateSet(this, _gzip, !!value);
    }
    /**
     *  Allow ``Authentication`` credentials to be sent over insecure
     *  channels. //(default: false)//
     */
    get allowInsecureAuthentication() {
      return !!__privateGet(this, _allowInsecure);
    }
    set allowInsecureAuthentication(value) {
      __privateSet(this, _allowInsecure, !!value);
    }
    /**
     *  The timeout (in milliseconds) to wait for a complete response.
     *  //(default: 5 minutes)//
     */
    get timeout() {
      return __privateGet(this, _timeout);
    }
    set timeout(timeout) {
      assertArgument(timeout >= 0, "timeout must be non-zero", "timeout", timeout);
      __privateSet(this, _timeout, timeout);
    }
    /**
     *  This function is called prior to each request, for example
     *  during a redirection or retry in case of server throttling.
     *
     *  This offers an opportunity to populate headers or update
     *  content before sending a request.
     */
    get preflightFunc() {
      return __privateGet(this, _preflight) || null;
    }
    set preflightFunc(preflight) {
      __privateSet(this, _preflight, preflight);
    }
    /**
     *  This function is called after each response, offering an
     *  opportunity to provide client-level throttling or updating
     *  response data.
     *
     *  Any error thrown in this causes the ``send()`` to throw.
     *
     *  To schedule a retry attempt (assuming the maximum retry limit
     *  has not been reached), use [[response.throwThrottleError]].
     */
    get processFunc() {
      return __privateGet(this, _process) || null;
    }
    set processFunc(process2) {
      __privateSet(this, _process, process2);
    }
    /**
     *  This function is called on each retry attempt.
     */
    get retryFunc() {
      return __privateGet(this, _retry) || null;
    }
    set retryFunc(retry) {
      __privateSet(this, _retry, retry);
    }
    /**
     *  This function is called to fetch content from HTTP and
     *  HTTPS URLs and is platform specific (e.g. nodejs vs
     *  browsers).
     *
     *  This is by default the currently registered global getUrl
     *  function, which can be changed using [[registerGetUrl]].
     *  If this has been set, setting is to ``null`` will cause
     *  this FetchRequest (and any future clones) to revert back to
     *  using the currently registered global getUrl function.
     *
     *  Setting this is generally not necessary, but may be useful
     *  for developers that wish to intercept requests or to
     *  configurege a proxy or other agent.
     */
    get getUrlFunc() {
      return __privateGet(this, _getUrlFunc) || defaultGetUrlFunc;
    }
    set getUrlFunc(value) {
      __privateSet(this, _getUrlFunc, value);
    }
    toString() {
      return `<FetchRequest method=${JSON.stringify(this.method)} url=${JSON.stringify(this.url)} headers=${JSON.stringify(this.headers)} body=${__privateGet(this, _body) ? hexlify(__privateGet(this, _body)) : "null"}>`;
    }
    /**
     *  Update the throttle parameters used to determine maximum
     *  attempts and exponential-backoff properties.
     */
    setThrottleParams(params) {
      if (params.slotInterval != null) {
        __privateGet(this, _throttle).slotInterval = params.slotInterval;
      }
      if (params.maxAttempts != null) {
        __privateGet(this, _throttle).maxAttempts = params.maxAttempts;
      }
    }
    /**
     *  Resolves to the response by sending the request.
     */
    send() {
      assert(__privateGet(this, _signal) == null, "request already sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.send" });
      __privateSet(this, _signal, new FetchCancelSignal(this));
      return __privateMethod(this, _FetchRequest_instances, send_fn).call(this, 0, getTime$1() + this.timeout, 0, this, new FetchResponse(0, "", {}, null, this));
    }
    /**
     *  Cancels the inflight response, causing a ``CANCELLED``
     *  error to be rejected from the [[send]].
     */
    cancel() {
      assert(__privateGet(this, _signal) != null, "request has not been sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.cancel" });
      const signal = fetchSignals.get(this);
      if (!signal) {
        throw new Error("missing signal; should not happen");
      }
      signal();
    }
    /**
     *  Returns a new [[FetchRequest]] that represents the redirection
     *  to %%location%%.
     */
    redirect(location) {
      const current = this.url.split(":")[0].toLowerCase();
      const target = location.split(":")[0].toLowerCase();
      assert(this.method === "GET" && (current !== "https" || target !== "http") && location.match(/^https?:/), `unsupported redirect`, "UNSUPPORTED_OPERATION", {
        operation: `redirect(${this.method} ${JSON.stringify(this.url)} => ${JSON.stringify(location)})`
      });
      const req = new _FetchRequest(location);
      req.method = "GET";
      req.allowGzip = this.allowGzip;
      req.timeout = this.timeout;
      __privateSet(req, _headers, Object.assign({}, __privateGet(this, _headers)));
      if (__privateGet(this, _body)) {
        __privateSet(req, _body, new Uint8Array(__privateGet(this, _body)));
      }
      __privateSet(req, _bodyType, __privateGet(this, _bodyType));
      return req;
    }
    /**
     *  Create a new copy of this request.
     */
    clone() {
      const clone = new _FetchRequest(this.url);
      __privateSet(clone, _method, __privateGet(this, _method));
      if (__privateGet(this, _body)) {
        __privateSet(clone, _body, __privateGet(this, _body));
      }
      __privateSet(clone, _bodyType, __privateGet(this, _bodyType));
      __privateSet(clone, _headers, Object.assign({}, __privateGet(this, _headers)));
      __privateSet(clone, _creds, __privateGet(this, _creds));
      if (this.allowGzip) {
        clone.allowGzip = true;
      }
      clone.timeout = this.timeout;
      if (this.allowInsecureAuthentication) {
        clone.allowInsecureAuthentication = true;
      }
      __privateSet(clone, _preflight, __privateGet(this, _preflight));
      __privateSet(clone, _process, __privateGet(this, _process));
      __privateSet(clone, _retry, __privateGet(this, _retry));
      __privateSet(clone, _throttle, Object.assign({}, __privateGet(this, _throttle)));
      __privateSet(clone, _getUrlFunc, __privateGet(this, _getUrlFunc));
      return clone;
    }
    /**
     *  Locks all static configuration for gateways and FetchGetUrlFunc
     *  registration.
     */
    static lockConfig() {
      locked$1 = true;
    }
    /**
     *  Get the current Gateway function for %%scheme%%.
     */
    static getGateway(scheme) {
      return Gateways[scheme.toLowerCase()] || null;
    }
    /**
     *  Use the %%func%% when fetching URIs using %%scheme%%.
     *
     *  This method affects all requests globally.
     *
     *  If [[lockConfig]] has been called, no change is made and this
     *  throws.
     */
    static registerGateway(scheme, func) {
      scheme = scheme.toLowerCase();
      if (scheme === "http" || scheme === "https") {
        throw new Error(`cannot intercept ${scheme}; use registerGetUrl`);
      }
      if (locked$1) {
        throw new Error("gateways locked");
      }
      Gateways[scheme] = func;
    }
    /**
     *  Use %%getUrl%% when fetching URIs over HTTP and HTTPS requests.
     *
     *  This method affects all requests globally.
     *
     *  If [[lockConfig]] has been called, no change is made and this
     *  throws.
     */
    static registerGetUrl(getUrl) {
      if (locked$1) {
        throw new Error("gateways locked");
      }
      defaultGetUrlFunc = getUrl;
    }
    /**
     *  Creates a getUrl function that fetches content from HTTP and
     *  HTTPS URLs.
     *
     *  The available %%options%% are dependent on the platform
     *  implementation of the default getUrl function.
     *
     *  This is not generally something that is needed, but is useful
     *  when trying to customize simple behaviour when fetching HTTP
     *  content.
     */
    static createGetUrlFunc(options) {
      return createGetUrl();
    }
    /**
     *  Creates a function that can "fetch" data URIs.
     *
     *  Note that this is automatically done internally to support
     *  data URIs, so it is not necessary to register it.
     *
     *  This is not generally something that is needed, but may
     *  be useful in a wrapper to perfom custom data URI functionality.
     */
    static createDataGateway() {
      return dataGatewayFunc;
    }
    /**
     *  Creates a function that will fetch IPFS (unvalidated) from
     *  a custom gateway baseUrl.
     *
     *  The default IPFS gateway used internally is
     *  ``"https:/\/gateway.ipfs.io/ipfs/"``.
     */
    static createIpfsGatewayFunc(baseUrl) {
      return getIpfsGatewayFunc(baseUrl);
    }
  };
  _allowInsecure = new WeakMap();
  _gzip = new WeakMap();
  _headers = new WeakMap();
  _method = new WeakMap();
  _timeout = new WeakMap();
  _url = new WeakMap();
  _body = new WeakMap();
  _bodyType = new WeakMap();
  _creds = new WeakMap();
  _preflight = new WeakMap();
  _process = new WeakMap();
  _retry = new WeakMap();
  _signal = new WeakMap();
  _throttle = new WeakMap();
  _getUrlFunc = new WeakMap();
  _FetchRequest_instances = new WeakSet();
  send_fn = async function(attempt, expires, delay, _request3, _response) {
    var _a2, _b, _c;
    if (attempt >= __privateGet(this, _throttle).maxAttempts) {
      return _response.makeServerError("exceeded maximum retry limit");
    }
    assert(getTime$1() <= expires, "timeout", "TIMEOUT", {
      operation: "request.send",
      reason: "timeout",
      request: _request3
    });
    if (delay > 0) {
      await wait(delay);
    }
    let req = this.clone();
    const scheme = (req.url.split(":")[0] || "").toLowerCase();
    if (scheme in Gateways) {
      const result = await Gateways[scheme](req.url, checkSignal(__privateGet(_request3, _signal)));
      if (result instanceof FetchResponse) {
        let response2 = result;
        if (this.processFunc) {
          checkSignal(__privateGet(_request3, _signal));
          try {
            response2 = await this.processFunc(req, response2);
          } catch (error) {
            if (error.throttle == null || typeof error.stall !== "number") {
              response2.makeServerError("error in post-processing function", error).assertOk();
            }
          }
        }
        return response2;
      }
      req = result;
    }
    if (this.preflightFunc) {
      req = await this.preflightFunc(req);
    }
    const resp = await this.getUrlFunc(req, checkSignal(__privateGet(_request3, _signal)));
    let response = new FetchResponse(resp.statusCode, resp.statusMessage, resp.headers, resp.body, _request3);
    if (response.statusCode === 301 || response.statusCode === 302) {
      try {
        const location = response.headers.location || "";
        return __privateMethod(_a2 = req.redirect(location), _FetchRequest_instances, send_fn).call(_a2, attempt + 1, expires, 0, _request3, response);
      } catch (error) {
      }
      return response;
    } else if (response.statusCode === 429) {
      if (this.retryFunc == null || await this.retryFunc(req, response, attempt)) {
        const retryAfter = response.headers["retry-after"];
        let delay2 = __privateGet(this, _throttle).slotInterval * Math.trunc(Math.random() * Math.pow(2, attempt));
        if (typeof retryAfter === "string" && retryAfter.match(/^[1-9][0-9]*$/)) {
          delay2 = parseInt(retryAfter);
        }
        return __privateMethod(_b = req.clone(), _FetchRequest_instances, send_fn).call(_b, attempt + 1, expires, delay2, _request3, response);
      }
    }
    if (this.processFunc) {
      checkSignal(__privateGet(_request3, _signal));
      try {
        response = await this.processFunc(req, response);
      } catch (error) {
        if (error.throttle == null || typeof error.stall !== "number") {
          response.makeServerError("error in post-processing function", error).assertOk();
        }
        let delay2 = __privateGet(this, _throttle).slotInterval * Math.trunc(Math.random() * Math.pow(2, attempt));
        if (error.stall >= 0) {
          delay2 = error.stall;
        }
        return __privateMethod(_c = req.clone(), _FetchRequest_instances, send_fn).call(_c, attempt + 1, expires, delay2, _request3, response);
      }
    }
    return response;
  };
  let FetchRequest = _FetchRequest;
  const _FetchResponse = class _FetchResponse {
    constructor(statusCode, statusMessage, headers, body, request) {
      __privateAdd(this, _statusCode);
      __privateAdd(this, _statusMessage);
      __privateAdd(this, _headers2);
      __privateAdd(this, _body2);
      __privateAdd(this, _request);
      __privateAdd(this, _error);
      __privateSet(this, _statusCode, statusCode);
      __privateSet(this, _statusMessage, statusMessage);
      __privateSet(this, _headers2, Object.keys(headers).reduce((accum, k) => {
        accum[k.toLowerCase()] = String(headers[k]);
        return accum;
      }, {}));
      __privateSet(this, _body2, body == null ? null : new Uint8Array(body));
      __privateSet(this, _request, request || null);
      __privateSet(this, _error, { message: "" });
    }
    toString() {
      return `<FetchResponse status=${this.statusCode} body=${__privateGet(this, _body2) ? hexlify(__privateGet(this, _body2)) : "null"}>`;
    }
    /**
     *  The response status code.
     */
    get statusCode() {
      return __privateGet(this, _statusCode);
    }
    /**
     *  The response status message.
     */
    get statusMessage() {
      return __privateGet(this, _statusMessage);
    }
    /**
     *  The response headers. All keys are lower-case.
     */
    get headers() {
      return Object.assign({}, __privateGet(this, _headers2));
    }
    /**
     *  The response body, or ``null`` if there was no body.
     */
    get body() {
      return __privateGet(this, _body2) == null ? null : new Uint8Array(__privateGet(this, _body2));
    }
    /**
     *  The response body as a UTF-8 encoded string, or the empty
     *  string (i.e. ``""``) if there was no body.
     *
     *  An error is thrown if the body is invalid UTF-8 data.
     */
    get bodyText() {
      try {
        return __privateGet(this, _body2) == null ? "" : toUtf8String(__privateGet(this, _body2));
      } catch (error) {
        assert(false, "response body is not valid UTF-8 data", "UNSUPPORTED_OPERATION", {
          operation: "bodyText",
          info: { response: this }
        });
      }
    }
    /**
     *  The response body, decoded as JSON.
     *
     *  An error is thrown if the body is invalid JSON-encoded data
     *  or if there was no body.
     */
    get bodyJson() {
      try {
        return JSON.parse(this.bodyText);
      } catch (error) {
        assert(false, "response body is not valid JSON", "UNSUPPORTED_OPERATION", {
          operation: "bodyJson",
          info: { response: this }
        });
      }
    }
    [Symbol.iterator]() {
      const headers = this.headers;
      const keys = Object.keys(headers);
      let index = 0;
      return {
        next: () => {
          if (index < keys.length) {
            const key = keys[index++];
            return {
              value: [key, headers[key]],
              done: false
            };
          }
          return { value: void 0, done: true };
        }
      };
    }
    /**
     *  Return a Response with matching headers and body, but with
     *  an error status code (i.e. 599) and %%message%% with an
     *  optional %%error%%.
     */
    makeServerError(message, error) {
      let statusMessage;
      if (!message) {
        message = `${this.statusCode} ${this.statusMessage}`;
        statusMessage = `CLIENT ESCALATED SERVER ERROR (${message})`;
      } else {
        statusMessage = `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${message})`;
      }
      const response = new _FetchResponse(599, statusMessage, this.headers, this.body, __privateGet(this, _request) || void 0);
      __privateSet(response, _error, { message, error });
      return response;
    }
    /**
     *  If called within a [request.processFunc](FetchRequest-processFunc)
     *  call, causes the request to retry as if throttled for %%stall%%
     *  milliseconds.
     */
    throwThrottleError(message, stall2) {
      if (stall2 == null) {
        stall2 = -1;
      } else {
        assertArgument(Number.isInteger(stall2) && stall2 >= 0, "invalid stall timeout", "stall", stall2);
      }
      const error = new Error(message || "throttling requests");
      defineProperties(error, { stall: stall2, throttle: true });
      throw error;
    }
    /**
     *  Get the header value for %%key%%, ignoring case.
     */
    getHeader(key) {
      return this.headers[key.toLowerCase()];
    }
    /**
     *  Returns true if the response has a body.
     */
    hasBody() {
      return __privateGet(this, _body2) != null;
    }
    /**
     *  The request made for this response.
     */
    get request() {
      return __privateGet(this, _request);
    }
    /**
     *  Returns true if this response was a success statusCode.
     */
    ok() {
      return __privateGet(this, _error).message === "" && this.statusCode >= 200 && this.statusCode < 300;
    }
    /**
     *  Throws a ``SERVER_ERROR`` if this response is not ok.
     */
    assertOk() {
      if (this.ok()) {
        return;
      }
      let { message, error } = __privateGet(this, _error);
      if (message === "") {
        message = `server response ${this.statusCode} ${this.statusMessage}`;
      }
      let requestUrl = null;
      if (this.request) {
        requestUrl = this.request.url;
      }
      let responseBody = null;
      try {
        if (__privateGet(this, _body2)) {
          responseBody = toUtf8String(__privateGet(this, _body2));
        }
      } catch (e) {
      }
      assert(false, message, "SERVER_ERROR", {
        request: this.request || "unknown request",
        response: this,
        error,
        info: {
          requestUrl,
          responseBody,
          responseStatus: `${this.statusCode} ${this.statusMessage}`
        }
      });
    }
  };
  _statusCode = new WeakMap();
  _statusMessage = new WeakMap();
  _headers2 = new WeakMap();
  _body2 = new WeakMap();
  _request = new WeakMap();
  _error = new WeakMap();
  let FetchResponse = _FetchResponse;
  function getTime$1() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  function unpercent(value) {
    return toUtf8Bytes(value.replace(/%([0-9a-f][0-9a-f])/gi, (all, code) => {
      return String.fromCharCode(parseInt(code, 16));
    }));
  }
  function wait(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
  }
  function hexlifyByte(value) {
    let result = value.toString(16);
    while (result.length < 2) {
      result = "0" + result;
    }
    return "0x" + result;
  }
  function unarrayifyInteger(data, offset, length) {
    let result = 0;
    for (let i = 0; i < length; i++) {
      result = result * 256 + data[offset + i];
    }
    return result;
  }
  function _decodeChildren(data, offset, childOffset, length) {
    const result = [];
    while (childOffset < offset + 1 + length) {
      const decoded = _decode(data, childOffset);
      result.push(decoded.result);
      childOffset += decoded.consumed;
      assert(childOffset <= offset + 1 + length, "child data too short", "BUFFER_OVERRUN", {
        buffer: data,
        length,
        offset
      });
    }
    return { consumed: 1 + length, result };
  }
  function _decode(data, offset) {
    assert(data.length !== 0, "data too short", "BUFFER_OVERRUN", {
      buffer: data,
      length: 0,
      offset: 1
    });
    const checkOffset = (offset2) => {
      assert(offset2 <= data.length, "data short segment too short", "BUFFER_OVERRUN", {
        buffer: data,
        length: data.length,
        offset: offset2
      });
    };
    if (data[offset] >= 248) {
      const lengthLength = data[offset] - 247;
      checkOffset(offset + 1 + lengthLength);
      const length = unarrayifyInteger(data, offset + 1, lengthLength);
      checkOffset(offset + 1 + lengthLength + length);
      return _decodeChildren(data, offset, offset + 1 + lengthLength, lengthLength + length);
    } else if (data[offset] >= 192) {
      const length = data[offset] - 192;
      checkOffset(offset + 1 + length);
      return _decodeChildren(data, offset, offset + 1, length);
    } else if (data[offset] >= 184) {
      const lengthLength = data[offset] - 183;
      checkOffset(offset + 1 + lengthLength);
      const length = unarrayifyInteger(data, offset + 1, lengthLength);
      checkOffset(offset + 1 + lengthLength + length);
      const result = hexlify(data.slice(offset + 1 + lengthLength, offset + 1 + lengthLength + length));
      return { consumed: 1 + lengthLength + length, result };
    } else if (data[offset] >= 128) {
      const length = data[offset] - 128;
      checkOffset(offset + 1 + length);
      const result = hexlify(data.slice(offset + 1, offset + 1 + length));
      return { consumed: 1 + length, result };
    }
    return { consumed: 1, result: hexlifyByte(data[offset]) };
  }
  function decodeRlp(_data4) {
    const data = getBytes(_data4, "data");
    const decoded = _decode(data, 0);
    assertArgument(decoded.consumed === data.length, "unexpected junk after rlp payload", "data", _data4);
    return decoded.result;
  }
  function arrayifyInteger(value) {
    const result = [];
    while (value) {
      result.unshift(value & 255);
      value >>= 8;
    }
    return result;
  }
  function _encode(object2) {
    if (Array.isArray(object2)) {
      let payload = [];
      object2.forEach(function(child) {
        payload = payload.concat(_encode(child));
      });
      if (payload.length <= 55) {
        payload.unshift(192 + payload.length);
        return payload;
      }
      const length2 = arrayifyInteger(payload.length);
      length2.unshift(247 + length2.length);
      return length2.concat(payload);
    }
    const data = Array.prototype.slice.call(getBytes(object2, "object"));
    if (data.length === 1 && data[0] <= 127) {
      return data;
    } else if (data.length <= 55) {
      data.unshift(128 + data.length);
      return data;
    }
    const length = arrayifyInteger(data.length);
    length.unshift(183 + length.length);
    return length.concat(data);
  }
  const nibbles = "0123456789abcdef";
  function encodeRlp(object2) {
    let result = "0x";
    for (const v of _encode(object2)) {
      result += nibbles[v >> 4];
      result += nibbles[v & 15];
    }
    return result;
  }
  const WordSize = 32;
  const Padding = new Uint8Array(WordSize);
  const passProperties$1 = ["then"];
  const _guard$2 = {};
  const resultNames = /* @__PURE__ */ new WeakMap();
  function getNames(result) {
    return resultNames.get(result);
  }
  function setNames(result, names) {
    resultNames.set(result, names);
  }
  function throwError(name, error) {
    const wrapped = new Error(`deferred error during ABI decoding triggered accessing ${name}`);
    wrapped.error = error;
    throw wrapped;
  }
  function toObject(names, items, deep) {
    if (names.indexOf(null) >= 0) {
      return items.map((item, index) => {
        if (item instanceof Result) {
          return toObject(getNames(item), item, deep);
        }
        return item;
      });
    }
    return names.reduce((accum, name, index) => {
      let item = items.getValue(name);
      if (!(name in accum)) {
        if (deep && item instanceof Result) {
          item = toObject(getNames(item), item, deep);
        }
        accum[name] = item;
      }
      return accum;
    }, {});
  }
  const _Result = class _Result extends Array {
    /**
     *  @private
     */
    constructor(...args) {
      const guard = args[0];
      let items = args[1];
      let names = (args[2] || []).slice();
      let wrap = true;
      if (guard !== _guard$2) {
        items = args;
        names = [];
        wrap = false;
      }
      super(items.length);
      // No longer used; but cannot be removed as it will remove the
      // #private field from the .d.ts which may break backwards
      // compatibility
      __privateAdd(this, _names);
      items.forEach((item, index) => {
        this[index] = item;
      });
      const nameCounts = names.reduce((accum, name) => {
        if (typeof name === "string") {
          accum.set(name, (accum.get(name) || 0) + 1);
        }
        return accum;
      }, /* @__PURE__ */ new Map());
      setNames(this, Object.freeze(items.map((item, index) => {
        const name = names[index];
        if (name != null && nameCounts.get(name) === 1) {
          return name;
        }
        return null;
      })));
      __privateSet(this, _names, []);
      if (__privateGet(this, _names) == null) {
        void __privateGet(this, _names);
      }
      if (!wrap) {
        return;
      }
      Object.freeze(this);
      const proxy = new Proxy(this, {
        get: (target, prop, receiver) => {
          if (typeof prop === "string") {
            if (prop.match(/^[0-9]+$/)) {
              const index = getNumber(prop, "%index");
              if (index < 0 || index >= this.length) {
                throw new RangeError("out of result range");
              }
              const item = target[index];
              if (item instanceof Error) {
                throwError(`index ${index}`, item);
              }
              return item;
            }
            if (passProperties$1.indexOf(prop) >= 0) {
              return Reflect.get(target, prop, receiver);
            }
            const value = target[prop];
            if (value instanceof Function) {
              return function(...args2) {
                return value.apply(this === receiver ? target : this, args2);
              };
            } else if (!(prop in target)) {
              return target.getValue.apply(this === receiver ? target : this, [prop]);
            }
          }
          return Reflect.get(target, prop, receiver);
        }
      });
      setNames(proxy, getNames(this));
      return proxy;
    }
    /**
     *  Returns the Result as a normal Array. If %%deep%%, any children
     *  which are Result objects are also converted to a normal Array.
     *
     *  This will throw if there are any outstanding deferred
     *  errors.
     */
    toArray(deep) {
      const result = [];
      this.forEach((item, index) => {
        if (item instanceof Error) {
          throwError(`index ${index}`, item);
        }
        if (deep && item instanceof _Result) {
          item = item.toArray(deep);
        }
        result.push(item);
      });
      return result;
    }
    /**
     *  Returns the Result as an Object with each name-value pair. If
     *  %%deep%%, any children which are Result objects are also
     *  converted to an Object.
     *
     *  This will throw if any value is unnamed, or if there are
     *  any outstanding deferred errors.
     */
    toObject(deep) {
      const names = getNames(this);
      return names.reduce((accum, name, index) => {
        assert(name != null, `value at index ${index} unnamed`, "UNSUPPORTED_OPERATION", {
          operation: "toObject()"
        });
        return toObject(names, this, deep);
      }, {});
    }
    /**
     *  @_ignore
     */
    slice(start, end) {
      if (start == null) {
        start = 0;
      }
      if (start < 0) {
        start += this.length;
        if (start < 0) {
          start = 0;
        }
      }
      if (end == null) {
        end = this.length;
      }
      if (end < 0) {
        end += this.length;
        if (end < 0) {
          end = 0;
        }
      }
      if (end > this.length) {
        end = this.length;
      }
      const _names2 = getNames(this);
      const result = [], names = [];
      for (let i = start; i < end; i++) {
        result.push(this[i]);
        names.push(_names2[i]);
      }
      return new _Result(_guard$2, result, names);
    }
    /**
     *  @_ignore
     */
    filter(callback, thisArg) {
      const _names2 = getNames(this);
      const result = [], names = [];
      for (let i = 0; i < this.length; i++) {
        const item = this[i];
        if (item instanceof Error) {
          throwError(`index ${i}`, item);
        }
        if (callback.call(thisArg, item, i, this)) {
          result.push(item);
          names.push(_names2[i]);
        }
      }
      return new _Result(_guard$2, result, names);
    }
    /**
     *  @_ignore
     */
    map(callback, thisArg) {
      const result = [];
      for (let i = 0; i < this.length; i++) {
        const item = this[i];
        if (item instanceof Error) {
          throwError(`index ${i}`, item);
        }
        result.push(callback.call(thisArg, item, i, this));
      }
      return result;
    }
    /**
     *  Returns the value for %%name%%.
     *
     *  Since it is possible to have a key whose name conflicts with
     *  a method on a [[Result]] or its superclass Array, or any
     *  JavaScript keyword, this ensures all named values are still
     *  accessible by name.
     */
    getValue(name) {
      const index = getNames(this).indexOf(name);
      if (index === -1) {
        return void 0;
      }
      const value = this[index];
      if (value instanceof Error) {
        throwError(`property ${JSON.stringify(name)}`, value.error);
      }
      return value;
    }
    /**
     *  Creates a new [[Result]] for %%items%% with each entry
     *  also accessible by its corresponding name in %%keys%%.
     */
    static fromItems(items, keys) {
      return new _Result(_guard$2, items, keys);
    }
  };
  _names = new WeakMap();
  let Result = _Result;
  function getValue$1(value) {
    let bytes2 = toBeArray(value);
    assert(bytes2.length <= WordSize, "value out-of-bounds", "BUFFER_OVERRUN", { buffer: bytes2, length: WordSize, offset: bytes2.length });
    if (bytes2.length !== WordSize) {
      bytes2 = getBytesCopy(concat([Padding.slice(bytes2.length % WordSize), bytes2]));
    }
    return bytes2;
  }
  class Coder {
    constructor(name, type, localName, dynamic) {
      // The coder name:
      //   - address, uint256, tuple, array, etc.
      __publicField(this, "name");
      // The fully expanded type, including composite types:
      //   - address, uint256, tuple(address,bytes), uint256[3][4][],  etc.
      __publicField(this, "type");
      // The localName bound in the signature, in this example it is "baz":
      //   - tuple(address foo, uint bar) baz
      __publicField(this, "localName");
      // Whether this type is dynamic:
      //  - Dynamic: bytes, string, address[], tuple(boolean[]), etc.
      //  - Not Dynamic: address, uint256, boolean[3], tuple(address, uint8)
      __publicField(this, "dynamic");
      defineProperties(this, { name, type, localName, dynamic }, {
        name: "string",
        type: "string",
        localName: "string",
        dynamic: "boolean"
      });
    }
    _throwError(message, value) {
      assertArgument(false, message, this.localName, value);
    }
  }
  class Writer {
    constructor() {
      __privateAdd(this, _Writer_instances);
      // An array of WordSize lengthed objects to concatenation
      __privateAdd(this, _data);
      __privateAdd(this, _dataLength);
      __privateSet(this, _data, []);
      __privateSet(this, _dataLength, 0);
    }
    get data() {
      return concat(__privateGet(this, _data));
    }
    get length() {
      return __privateGet(this, _dataLength);
    }
    appendWriter(writer) {
      return __privateMethod(this, _Writer_instances, writeData_fn).call(this, getBytesCopy(writer.data));
    }
    // Arrayish item; pad on the right to *nearest* WordSize
    writeBytes(value) {
      let bytes2 = getBytesCopy(value);
      const paddingOffset = bytes2.length % WordSize;
      if (paddingOffset) {
        bytes2 = getBytesCopy(concat([bytes2, Padding.slice(paddingOffset)]));
      }
      return __privateMethod(this, _Writer_instances, writeData_fn).call(this, bytes2);
    }
    // Numeric item; pad on the left *to* WordSize
    writeValue(value) {
      return __privateMethod(this, _Writer_instances, writeData_fn).call(this, getValue$1(value));
    }
    // Inserts a numeric place-holder, returning a callback that can
    // be used to asjust the value later
    writeUpdatableValue() {
      const offset = __privateGet(this, _data).length;
      __privateGet(this, _data).push(Padding);
      __privateSet(this, _dataLength, __privateGet(this, _dataLength) + WordSize);
      return (value) => {
        __privateGet(this, _data)[offset] = getValue$1(value);
      };
    }
  }
  _data = new WeakMap();
  _dataLength = new WeakMap();
  _Writer_instances = new WeakSet();
  writeData_fn = function(data) {
    __privateGet(this, _data).push(data);
    __privateSet(this, _dataLength, __privateGet(this, _dataLength) + data.length);
    return data.length;
  };
  const _Reader = class _Reader {
    constructor(data, allowLoose, maxInflation) {
      __privateAdd(this, _Reader_instances);
      // Allows incomplete unpadded data to be read; otherwise an error
      // is raised if attempting to overrun the buffer. This is required
      // to deal with an old Solidity bug, in which event data for
      // external (not public thoguh) was tightly packed.
      __publicField(this, "allowLoose");
      __privateAdd(this, _data2);
      __privateAdd(this, _offset);
      __privateAdd(this, _bytesRead);
      __privateAdd(this, _parent);
      __privateAdd(this, _maxInflation);
      defineProperties(this, { allowLoose: !!allowLoose });
      __privateSet(this, _data2, getBytesCopy(data));
      __privateSet(this, _bytesRead, 0);
      __privateSet(this, _parent, null);
      __privateSet(this, _maxInflation, maxInflation != null ? maxInflation : 1024);
      __privateSet(this, _offset, 0);
    }
    get data() {
      return hexlify(__privateGet(this, _data2));
    }
    get dataLength() {
      return __privateGet(this, _data2).length;
    }
    get consumed() {
      return __privateGet(this, _offset);
    }
    get bytes() {
      return new Uint8Array(__privateGet(this, _data2));
    }
    // Create a sub-reader with the same underlying data, but offset
    subReader(offset) {
      const reader = new _Reader(__privateGet(this, _data2).slice(__privateGet(this, _offset) + offset), this.allowLoose, __privateGet(this, _maxInflation));
      __privateSet(reader, _parent, this);
      return reader;
    }
    // Read bytes
    readBytes(length, loose) {
      let bytes2 = __privateMethod(this, _Reader_instances, peekBytes_fn).call(this, 0, length, !!loose);
      __privateMethod(this, _Reader_instances, incrementBytesRead_fn).call(this, length);
      __privateSet(this, _offset, __privateGet(this, _offset) + bytes2.length);
      return bytes2.slice(0, length);
    }
    // Read a numeric values
    readValue() {
      return toBigInt(this.readBytes(WordSize));
    }
    readIndex() {
      return toNumber(this.readBytes(WordSize));
    }
  };
  _data2 = new WeakMap();
  _offset = new WeakMap();
  _bytesRead = new WeakMap();
  _parent = new WeakMap();
  _maxInflation = new WeakMap();
  _Reader_instances = new WeakSet();
  incrementBytesRead_fn = function(count) {
    var _a2;
    if (__privateGet(this, _parent)) {
      return __privateMethod(_a2 = __privateGet(this, _parent), _Reader_instances, incrementBytesRead_fn).call(_a2, count);
    }
    __privateSet(this, _bytesRead, __privateGet(this, _bytesRead) + count);
    assert(__privateGet(this, _maxInflation) < 1 || __privateGet(this, _bytesRead) <= __privateGet(this, _maxInflation) * this.dataLength, `compressed ABI data exceeds inflation ratio of ${__privateGet(this, _maxInflation)} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`, "BUFFER_OVERRUN", {
      buffer: getBytesCopy(__privateGet(this, _data2)),
      offset: __privateGet(this, _offset),
      length: count,
      info: {
        bytesRead: __privateGet(this, _bytesRead),
        dataLength: this.dataLength
      }
    });
  };
  peekBytes_fn = function(offset, length, loose) {
    let alignedLength = Math.ceil(length / WordSize) * WordSize;
    if (__privateGet(this, _offset) + alignedLength > __privateGet(this, _data2).length) {
      if (this.allowLoose && loose && __privateGet(this, _offset) + length <= __privateGet(this, _data2).length) {
        alignedLength = length;
      } else {
        assert(false, "data out-of-bounds", "BUFFER_OVERRUN", {
          buffer: getBytesCopy(__privateGet(this, _data2)),
          length: __privateGet(this, _data2).length,
          offset: __privateGet(this, _offset) + alignedLength
        });
      }
    }
    return __privateGet(this, _data2).slice(__privateGet(this, _offset), __privateGet(this, _offset) + alignedLength);
  };
  let Reader = _Reader;
  function number(n2) {
    if (!Number.isSafeInteger(n2) || n2 < 0)
      throw new Error(`Wrong positive integer: ${n2}`);
  }
  function bytes(b2, ...lengths) {
    if (!(b2 instanceof Uint8Array))
      throw new Error("Expected Uint8Array");
    if (lengths.length > 0 && !lengths.includes(b2.length))
      throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b2.length}`);
  }
  function hash(hash2) {
    if (typeof hash2 !== "function" || typeof hash2.create !== "function")
      throw new Error("Hash should be wrapped by utils.wrapConstructor");
    number(hash2.outputLen);
    number(hash2.blockLen);
  }
  function exists(instance, checkFinished = true) {
    if (instance.destroyed)
      throw new Error("Hash instance has been destroyed");
    if (checkFinished && instance.finished)
      throw new Error("Hash#digest() has already been called");
  }
  function output(out, instance) {
    bytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
      throw new Error(`digestInto() expects output buffer of length at least ${min}`);
    }
  }
  const crypto = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  const u8a$1 = (a) => a instanceof Uint8Array;
  const u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
  const createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
  const rotr = (word, shift) => word << 32 - shift | word >>> shift;
  const isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
  if (!isLE)
    throw new Error("Non little-endian hardware is not supported");
  function utf8ToBytes$1(str) {
    if (typeof str !== "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str));
  }
  function toBytes(data) {
    if (typeof data === "string")
      data = utf8ToBytes$1(data);
    if (!u8a$1(data))
      throw new Error(`expected Uint8Array, got ${typeof data}`);
    return data;
  }
  function concatBytes$1(...arrays) {
    const r = new Uint8Array(arrays.reduce((sum, a) => sum + a.length, 0));
    let pad = 0;
    arrays.forEach((a) => {
      if (!u8a$1(a))
        throw new Error("Uint8Array expected");
      r.set(a, pad);
      pad += a.length;
    });
    return r;
  }
  class Hash {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  }
  function wrapConstructor(hashCons) {
    const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashCons();
    return hashC;
  }
  function randomBytes(bytesLength = 32) {
    if (crypto && typeof crypto.getRandomValues === "function") {
      return crypto.getRandomValues(new Uint8Array(bytesLength));
    }
    throw new Error("crypto.getRandomValues must be defined");
  }
  class HMAC extends Hash {
    constructor(hash$1, _key) {
      super();
      this.finished = false;
      this.destroyed = false;
      hash(hash$1);
      const key = toBytes(_key);
      this.iHash = hash$1.create();
      if (typeof this.iHash.update !== "function")
        throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen;
      this.outputLen = this.iHash.outputLen;
      const blockLen = this.blockLen;
      const pad = new Uint8Array(blockLen);
      pad.set(key.length > blockLen ? hash$1.create().update(key).digest() : key);
      for (let i = 0; i < pad.length; i++)
        pad[i] ^= 54;
      this.iHash.update(pad);
      this.oHash = hash$1.create();
      for (let i = 0; i < pad.length; i++)
        pad[i] ^= 54 ^ 92;
      this.oHash.update(pad);
      pad.fill(0);
    }
    update(buf) {
      exists(this);
      this.iHash.update(buf);
      return this;
    }
    digestInto(out) {
      exists(this);
      bytes(out, this.outputLen);
      this.finished = true;
      this.iHash.digestInto(out);
      this.oHash.update(out);
      this.oHash.digestInto(out);
      this.destroy();
    }
    digest() {
      const out = new Uint8Array(this.oHash.outputLen);
      this.digestInto(out);
      return out;
    }
    _cloneInto(to) {
      to || (to = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
      to = to;
      to.finished = finished;
      to.destroyed = destroyed;
      to.blockLen = blockLen;
      to.outputLen = outputLen;
      to.oHash = oHash._cloneInto(to.oHash);
      to.iHash = iHash._cloneInto(to.iHash);
      return to;
    }
    destroy() {
      this.destroyed = true;
      this.oHash.destroy();
      this.iHash.destroy();
    }
  }
  const hmac = (hash2, key, message) => new HMAC(hash2, key).update(message).digest();
  hmac.create = (hash2, key) => new HMAC(hash2, key);
  function setBigUint64(view, byteOffset, value, isLE2) {
    if (typeof view.setBigUint64 === "function")
      return view.setBigUint64(byteOffset, value, isLE2);
    const _32n2 = BigInt(32);
    const _u32_max = BigInt(4294967295);
    const wh = Number(value >> _32n2 & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE2 ? 4 : 0;
    const l = isLE2 ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE2);
    view.setUint32(byteOffset + l, wl, isLE2);
  }
  class SHA2 extends Hash {
    constructor(blockLen, outputLen, padOffset, isLE2) {
      super();
      this.blockLen = blockLen;
      this.outputLen = outputLen;
      this.padOffset = padOffset;
      this.isLE = isLE2;
      this.finished = false;
      this.length = 0;
      this.pos = 0;
      this.destroyed = false;
      this.buffer = new Uint8Array(blockLen);
      this.view = createView(this.buffer);
    }
    update(data) {
      exists(this);
      const { view, buffer, blockLen } = this;
      data = toBytes(data);
      const len = data.length;
      for (let pos = 0; pos < len; ) {
        const take = Math.min(blockLen - this.pos, len - pos);
        if (take === blockLen) {
          const dataView = createView(data);
          for (; blockLen <= len - pos; pos += blockLen)
            this.process(dataView, pos);
          continue;
        }
        buffer.set(data.subarray(pos, pos + take), this.pos);
        this.pos += take;
        pos += take;
        if (this.pos === blockLen) {
          this.process(view, 0);
          this.pos = 0;
        }
      }
      this.length += data.length;
      this.roundClean();
      return this;
    }
    digestInto(out) {
      exists(this);
      output(out, this);
      this.finished = true;
      const { buffer, view, blockLen, isLE: isLE2 } = this;
      let { pos } = this;
      buffer[pos++] = 128;
      this.buffer.subarray(pos).fill(0);
      if (this.padOffset > blockLen - pos) {
        this.process(view, 0);
        pos = 0;
      }
      for (let i = pos; i < blockLen; i++)
        buffer[i] = 0;
      setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE2);
      this.process(view, 0);
      const oview = createView(out);
      const len = this.outputLen;
      if (len % 4)
        throw new Error("_sha2: outputLen should be aligned to 32bit");
      const outLen = len / 4;
      const state = this.get();
      if (outLen > state.length)
        throw new Error("_sha2: outputLen bigger than state");
      for (let i = 0; i < outLen; i++)
        oview.setUint32(4 * i, state[i], isLE2);
    }
    digest() {
      const { buffer, outputLen } = this;
      this.digestInto(buffer);
      const res = buffer.slice(0, outputLen);
      this.destroy();
      return res;
    }
    _cloneInto(to) {
      to || (to = new this.constructor());
      to.set(...this.get());
      const { blockLen, buffer, length, finished, destroyed, pos } = this;
      to.length = length;
      to.pos = pos;
      to.finished = finished;
      to.destroyed = destroyed;
      if (length % blockLen)
        to.buffer.set(buffer);
      return to;
    }
  }
  const Chi = (a, b2, c) => a & b2 ^ ~a & c;
  const Maj = (a, b2, c) => a & b2 ^ a & c ^ b2 & c;
  const SHA256_K = /* @__PURE__ */ new Uint32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  const IV = /* @__PURE__ */ new Uint32Array([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]);
  const SHA256_W = /* @__PURE__ */ new Uint32Array(64);
  class SHA256 extends SHA2 {
    constructor() {
      super(64, 32, 8, false);
      this.A = IV[0] | 0;
      this.B = IV[1] | 0;
      this.C = IV[2] | 0;
      this.D = IV[3] | 0;
      this.E = IV[4] | 0;
      this.F = IV[5] | 0;
      this.G = IV[6] | 0;
      this.H = IV[7] | 0;
    }
    get() {
      const { A, B, C, D, E, F, G, H } = this;
      return [A, B, C, D, E, F, G, H];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
      this.A = A | 0;
      this.B = B | 0;
      this.C = C | 0;
      this.D = D | 0;
      this.E = E | 0;
      this.F = F | 0;
      this.G = G | 0;
      this.H = H | 0;
    }
    process(view, offset) {
      for (let i = 0; i < 16; i++, offset += 4)
        SHA256_W[i] = view.getUint32(offset, false);
      for (let i = 16; i < 64; i++) {
        const W15 = SHA256_W[i - 15];
        const W2 = SHA256_W[i - 2];
        const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
        const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
        SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
      }
      let { A, B, C, D, E, F, G, H } = this;
      for (let i = 0; i < 64; i++) {
        const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
        const T12 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
        const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
        const T2 = sigma0 + Maj(A, B, C) | 0;
        H = G;
        G = F;
        F = E;
        E = D + T12 | 0;
        D = C;
        C = B;
        B = A;
        A = T12 + T2 | 0;
      }
      A = A + this.A | 0;
      B = B + this.B | 0;
      C = C + this.C | 0;
      D = D + this.D | 0;
      E = E + this.E | 0;
      F = F + this.F | 0;
      G = G + this.G | 0;
      H = H + this.H | 0;
      this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
      SHA256_W.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0);
      this.buffer.fill(0);
    }
  }
  const sha256$1 = /* @__PURE__ */ wrapConstructor(() => new SHA256());
  const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
  const _32n = /* @__PURE__ */ BigInt(32);
  function fromBig(n2, le = false) {
    if (le)
      return { h: Number(n2 & U32_MASK64), l: Number(n2 >> _32n & U32_MASK64) };
    return { h: Number(n2 >> _32n & U32_MASK64) | 0, l: Number(n2 & U32_MASK64) | 0 };
  }
  function split$1(lst, le = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for (let i = 0; i < lst.length; i++) {
      const { h, l } = fromBig(lst[i], le);
      [Ah[i], Al[i]] = [h, l];
    }
    return [Ah, Al];
  }
  const toBig = (h, l) => BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
  const shrSH = (h, _l, s) => h >>> s;
  const shrSL = (h, l, s) => h << 32 - s | l >>> s;
  const rotrSH = (h, l, s) => h >>> s | l << 32 - s;
  const rotrSL = (h, l, s) => h << 32 - s | l >>> s;
  const rotrBH = (h, l, s) => h << 64 - s | l >>> s - 32;
  const rotrBL = (h, l, s) => h >>> s - 32 | l << 64 - s;
  const rotr32H = (_h, l) => l;
  const rotr32L = (h, _l) => h;
  const rotlSH = (h, l, s) => h << s | l >>> 32 - s;
  const rotlSL = (h, l, s) => l << s | h >>> 32 - s;
  const rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
  const rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
  function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return { h: Ah + Bh + (l / 2 ** 32 | 0) | 0, l: l | 0 };
  }
  const add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
  const add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
  const add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
  const add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
  const add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
  const add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
  const u64 = {
    fromBig,
    split: split$1,
    toBig,
    shrSH,
    shrSL,
    rotrSH,
    rotrSL,
    rotrBH,
    rotrBL,
    rotr32H,
    rotr32L,
    rotlSH,
    rotlSL,
    rotlBH,
    rotlBL,
    add,
    add3L,
    add3H,
    add4L,
    add4H,
    add5H,
    add5L
  };
  const [SHA512_Kh, SHA512_Kl] = /* @__PURE__ */ (() => u64.split([
    "0x428a2f98d728ae22",
    "0x7137449123ef65cd",
    "0xb5c0fbcfec4d3b2f",
    "0xe9b5dba58189dbbc",
    "0x3956c25bf348b538",
    "0x59f111f1b605d019",
    "0x923f82a4af194f9b",
    "0xab1c5ed5da6d8118",
    "0xd807aa98a3030242",
    "0x12835b0145706fbe",
    "0x243185be4ee4b28c",
    "0x550c7dc3d5ffb4e2",
    "0x72be5d74f27b896f",
    "0x80deb1fe3b1696b1",
    "0x9bdc06a725c71235",
    "0xc19bf174cf692694",
    "0xe49b69c19ef14ad2",
    "0xefbe4786384f25e3",
    "0x0fc19dc68b8cd5b5",
    "0x240ca1cc77ac9c65",
    "0x2de92c6f592b0275",
    "0x4a7484aa6ea6e483",
    "0x5cb0a9dcbd41fbd4",
    "0x76f988da831153b5",
    "0x983e5152ee66dfab",
    "0xa831c66d2db43210",
    "0xb00327c898fb213f",
    "0xbf597fc7beef0ee4",
    "0xc6e00bf33da88fc2",
    "0xd5a79147930aa725",
    "0x06ca6351e003826f",
    "0x142929670a0e6e70",
    "0x27b70a8546d22ffc",
    "0x2e1b21385c26c926",
    "0x4d2c6dfc5ac42aed",
    "0x53380d139d95b3df",
    "0x650a73548baf63de",
    "0x766a0abb3c77b2a8",
    "0x81c2c92e47edaee6",
    "0x92722c851482353b",
    "0xa2bfe8a14cf10364",
    "0xa81a664bbc423001",
    "0xc24b8b70d0f89791",
    "0xc76c51a30654be30",
    "0xd192e819d6ef5218",
    "0xd69906245565a910",
    "0xf40e35855771202a",
    "0x106aa07032bbd1b8",
    "0x19a4c116b8d2d0c8",
    "0x1e376c085141ab53",
    "0x2748774cdf8eeb99",
    "0x34b0bcb5e19b48a8",
    "0x391c0cb3c5c95a63",
    "0x4ed8aa4ae3418acb",
    "0x5b9cca4f7763e373",
    "0x682e6ff3d6b2b8a3",
    "0x748f82ee5defb2fc",
    "0x78a5636f43172f60",
    "0x84c87814a1f0ab72",
    "0x8cc702081a6439ec",
    "0x90befffa23631e28",
    "0xa4506cebde82bde9",
    "0xbef9a3f7b2c67915",
    "0xc67178f2e372532b",
    "0xca273eceea26619c",
    "0xd186b8c721c0c207",
    "0xeada7dd6cde0eb1e",
    "0xf57d4f7fee6ed178",
    "0x06f067aa72176fba",
    "0x0a637dc5a2c898a6",
    "0x113f9804bef90dae",
    "0x1b710b35131c471b",
    "0x28db77f523047d84",
    "0x32caab7b40c72493",
    "0x3c9ebe0a15c9bebc",
    "0x431d67c49c100d4c",
    "0x4cc5d4becb3e42b6",
    "0x597f299cfc657e2a",
    "0x5fcb6fab3ad6faec",
    "0x6c44198c4a475817"
  ].map((n2) => BigInt(n2))))();
  const SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
  const SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
  class SHA512 extends SHA2 {
    constructor() {
      super(128, 64, 16, false);
      this.Ah = 1779033703 | 0;
      this.Al = 4089235720 | 0;
      this.Bh = 3144134277 | 0;
      this.Bl = 2227873595 | 0;
      this.Ch = 1013904242 | 0;
      this.Cl = 4271175723 | 0;
      this.Dh = 2773480762 | 0;
      this.Dl = 1595750129 | 0;
      this.Eh = 1359893119 | 0;
      this.El = 2917565137 | 0;
      this.Fh = 2600822924 | 0;
      this.Fl = 725511199 | 0;
      this.Gh = 528734635 | 0;
      this.Gl = 4215389547 | 0;
      this.Hh = 1541459225 | 0;
      this.Hl = 327033209 | 0;
    }
    // prettier-ignore
    get() {
      const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
      return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
    }
    // prettier-ignore
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
      this.Ah = Ah | 0;
      this.Al = Al | 0;
      this.Bh = Bh | 0;
      this.Bl = Bl | 0;
      this.Ch = Ch | 0;
      this.Cl = Cl | 0;
      this.Dh = Dh | 0;
      this.Dl = Dl | 0;
      this.Eh = Eh | 0;
      this.El = El | 0;
      this.Fh = Fh | 0;
      this.Fl = Fl | 0;
      this.Gh = Gh | 0;
      this.Gl = Gl | 0;
      this.Hh = Hh | 0;
      this.Hl = Hl | 0;
    }
    process(view, offset) {
      for (let i = 0; i < 16; i++, offset += 4) {
        SHA512_W_H[i] = view.getUint32(offset);
        SHA512_W_L[i] = view.getUint32(offset += 4);
      }
      for (let i = 16; i < 80; i++) {
        const W15h = SHA512_W_H[i - 15] | 0;
        const W15l = SHA512_W_L[i - 15] | 0;
        const s0h = u64.rotrSH(W15h, W15l, 1) ^ u64.rotrSH(W15h, W15l, 8) ^ u64.shrSH(W15h, W15l, 7);
        const s0l = u64.rotrSL(W15h, W15l, 1) ^ u64.rotrSL(W15h, W15l, 8) ^ u64.shrSL(W15h, W15l, 7);
        const W2h = SHA512_W_H[i - 2] | 0;
        const W2l = SHA512_W_L[i - 2] | 0;
        const s1h = u64.rotrSH(W2h, W2l, 19) ^ u64.rotrBH(W2h, W2l, 61) ^ u64.shrSH(W2h, W2l, 6);
        const s1l = u64.rotrSL(W2h, W2l, 19) ^ u64.rotrBL(W2h, W2l, 61) ^ u64.shrSL(W2h, W2l, 6);
        const SUMl = u64.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
        const SUMh = u64.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
        SHA512_W_H[i] = SUMh | 0;
        SHA512_W_L[i] = SUMl | 0;
      }
      let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
      for (let i = 0; i < 80; i++) {
        const sigma1h = u64.rotrSH(Eh, El, 14) ^ u64.rotrSH(Eh, El, 18) ^ u64.rotrBH(Eh, El, 41);
        const sigma1l = u64.rotrSL(Eh, El, 14) ^ u64.rotrSL(Eh, El, 18) ^ u64.rotrBL(Eh, El, 41);
        const CHIh = Eh & Fh ^ ~Eh & Gh;
        const CHIl = El & Fl ^ ~El & Gl;
        const T1ll = u64.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
        const T1h = u64.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
        const T1l = T1ll | 0;
        const sigma0h = u64.rotrSH(Ah, Al, 28) ^ u64.rotrBH(Ah, Al, 34) ^ u64.rotrBH(Ah, Al, 39);
        const sigma0l = u64.rotrSL(Ah, Al, 28) ^ u64.rotrBL(Ah, Al, 34) ^ u64.rotrBL(Ah, Al, 39);
        const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
        const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
        Hh = Gh | 0;
        Hl = Gl | 0;
        Gh = Fh | 0;
        Gl = Fl | 0;
        Fh = Eh | 0;
        Fl = El | 0;
        ({ h: Eh, l: El } = u64.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
        Dh = Ch | 0;
        Dl = Cl | 0;
        Ch = Bh | 0;
        Cl = Bl | 0;
        Bh = Ah | 0;
        Bl = Al | 0;
        const All = u64.add3L(T1l, sigma0l, MAJl);
        Ah = u64.add3H(All, T1h, sigma0h, MAJh);
        Al = All | 0;
      }
      ({ h: Ah, l: Al } = u64.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
      ({ h: Bh, l: Bl } = u64.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
      ({ h: Ch, l: Cl } = u64.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
      ({ h: Dh, l: Dl } = u64.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
      ({ h: Eh, l: El } = u64.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
      ({ h: Fh, l: Fl } = u64.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
      ({ h: Gh, l: Gl } = u64.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
      ({ h: Hh, l: Hl } = u64.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
      this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
      SHA512_W_H.fill(0);
      SHA512_W_L.fill(0);
    }
    destroy() {
      this.buffer.fill(0);
      this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  }
  const sha512 = /* @__PURE__ */ wrapConstructor(() => new SHA512());
  function getGlobal() {
    if (typeof self !== "undefined") {
      return self;
    }
    if (typeof window !== "undefined") {
      return window;
    }
    if (typeof global !== "undefined") {
      return global;
    }
    throw new Error("unable to locate global object");
  }
  const anyGlobal = getGlobal();
  anyGlobal.crypto || anyGlobal.msCrypto;
  function createHash(algo) {
    switch (algo) {
      case "sha256":
        return sha256$1.create();
      case "sha512":
        return sha512.create();
    }
    assertArgument(false, "invalid hashing algorithm name", "algorithm", algo);
  }
  const [SHA3_PI, SHA3_ROTL, _SHA3_IOTA] = [[], [], []];
  const _0n$4 = /* @__PURE__ */ BigInt(0);
  const _1n$5 = /* @__PURE__ */ BigInt(1);
  const _2n$3 = /* @__PURE__ */ BigInt(2);
  const _7n = /* @__PURE__ */ BigInt(7);
  const _256n = /* @__PURE__ */ BigInt(256);
  const _0x71n = /* @__PURE__ */ BigInt(113);
  for (let round = 0, R = _1n$5, x = 1, y = 0; round < 24; round++) {
    [x, y] = [y, (2 * x + 3 * y) % 5];
    SHA3_PI.push(2 * (5 * y + x));
    SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
    let t = _0n$4;
    for (let j = 0; j < 7; j++) {
      R = (R << _1n$5 ^ (R >> _7n) * _0x71n) % _256n;
      if (R & _2n$3)
        t ^= _1n$5 << (_1n$5 << /* @__PURE__ */ BigInt(j)) - _1n$5;
    }
    _SHA3_IOTA.push(t);
  }
  const [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ split$1(_SHA3_IOTA, true);
  const rotlH = (h, l, s) => s > 32 ? rotlBH(h, l, s) : rotlSH(h, l, s);
  const rotlL = (h, l, s) => s > 32 ? rotlBL(h, l, s) : rotlSL(h, l, s);
  function keccakP(s, rounds = 24) {
    const B = new Uint32Array(5 * 2);
    for (let round = 24 - rounds; round < 24; round++) {
      for (let x = 0; x < 10; x++)
        B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
      for (let x = 0; x < 10; x += 2) {
        const idx1 = (x + 8) % 10;
        const idx0 = (x + 2) % 10;
        const B0 = B[idx0];
        const B1 = B[idx0 + 1];
        const Th = rotlH(B0, B1, 1) ^ B[idx1];
        const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
        for (let y = 0; y < 50; y += 10) {
          s[x + y] ^= Th;
          s[x + y + 1] ^= Tl;
        }
      }
      let curH = s[2];
      let curL = s[3];
      for (let t = 0; t < 24; t++) {
        const shift = SHA3_ROTL[t];
        const Th = rotlH(curH, curL, shift);
        const Tl = rotlL(curH, curL, shift);
        const PI = SHA3_PI[t];
        curH = s[PI];
        curL = s[PI + 1];
        s[PI] = Th;
        s[PI + 1] = Tl;
      }
      for (let y = 0; y < 50; y += 10) {
        for (let x = 0; x < 10; x++)
          B[x] = s[y + x];
        for (let x = 0; x < 10; x++)
          s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
      }
      s[0] ^= SHA3_IOTA_H[round];
      s[1] ^= SHA3_IOTA_L[round];
    }
    B.fill(0);
  }
  class Keccak extends Hash {
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
      super();
      this.blockLen = blockLen;
      this.suffix = suffix;
      this.outputLen = outputLen;
      this.enableXOF = enableXOF;
      this.rounds = rounds;
      this.pos = 0;
      this.posOut = 0;
      this.finished = false;
      this.destroyed = false;
      number(outputLen);
      if (0 >= this.blockLen || this.blockLen >= 200)
        throw new Error("Sha3 supports only keccak-f1600 function");
      this.state = new Uint8Array(200);
      this.state32 = u32(this.state);
    }
    keccak() {
      keccakP(this.state32, this.rounds);
      this.posOut = 0;
      this.pos = 0;
    }
    update(data) {
      exists(this);
      const { blockLen, state } = this;
      data = toBytes(data);
      const len = data.length;
      for (let pos = 0; pos < len; ) {
        const take = Math.min(blockLen - this.pos, len - pos);
        for (let i = 0; i < take; i++)
          state[this.pos++] ^= data[pos++];
        if (this.pos === blockLen)
          this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished)
        return;
      this.finished = true;
      const { state, suffix, pos, blockLen } = this;
      state[pos] ^= suffix;
      if ((suffix & 128) !== 0 && pos === blockLen - 1)
        this.keccak();
      state[blockLen - 1] ^= 128;
      this.keccak();
    }
    writeInto(out) {
      exists(this, false);
      bytes(out);
      this.finish();
      const bufferOut = this.state;
      const { blockLen } = this;
      for (let pos = 0, len = out.length; pos < len; ) {
        if (this.posOut >= blockLen)
          this.keccak();
        const take = Math.min(blockLen - this.posOut, len - pos);
        out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
        this.posOut += take;
        pos += take;
      }
      return out;
    }
    xofInto(out) {
      if (!this.enableXOF)
        throw new Error("XOF is not possible for this instance");
      return this.writeInto(out);
    }
    xof(bytes2) {
      number(bytes2);
      return this.xofInto(new Uint8Array(bytes2));
    }
    digestInto(out) {
      output(out, this);
      if (this.finished)
        throw new Error("digest() was already called");
      this.writeInto(out);
      this.destroy();
      return out;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      this.destroyed = true;
      this.state.fill(0);
    }
    _cloneInto(to) {
      const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
      to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
      to.state32.set(this.state32);
      to.pos = this.pos;
      to.posOut = this.posOut;
      to.finished = this.finished;
      to.rounds = rounds;
      to.suffix = suffix;
      to.outputLen = outputLen;
      to.enableXOF = enableXOF;
      to.destroyed = this.destroyed;
      return to;
    }
  }
  const gen = (suffix, blockLen, outputLen) => wrapConstructor(() => new Keccak(blockLen, suffix, outputLen));
  const keccak_256 = /* @__PURE__ */ gen(1, 136, 256 / 8);
  let locked = false;
  const _keccak256 = function(data) {
    return keccak_256(data);
  };
  let __keccak256 = _keccak256;
  function keccak256(_data4) {
    const data = getBytes(_data4, "data");
    return hexlify(__keccak256(data));
  }
  keccak256._ = _keccak256;
  keccak256.lock = function() {
    locked = true;
  };
  keccak256.register = function(func) {
    if (locked) {
      throw new TypeError("keccak256 is locked");
    }
    __keccak256 = func;
  };
  Object.freeze(keccak256);
  const _sha256 = function(data) {
    return createHash("sha256").update(data).digest();
  };
  let __sha256 = _sha256;
  let locked256 = false;
  function sha256(_data4) {
    const data = getBytes(_data4, "data");
    return hexlify(__sha256(data));
  }
  sha256._ = _sha256;
  sha256.lock = function() {
    locked256 = true;
  };
  sha256.register = function(func) {
    if (locked256) {
      throw new Error("sha256 is locked");
    }
    __sha256 = func;
  };
  Object.freeze(sha256);
  Object.freeze(sha256);
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  const _0n$3 = BigInt(0);
  const _1n$4 = BigInt(1);
  const _2n$2 = BigInt(2);
  const u8a = (a) => a instanceof Uint8Array;
  const hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
  function bytesToHex(bytes2) {
    if (!u8a(bytes2))
      throw new Error("Uint8Array expected");
    let hex = "";
    for (let i = 0; i < bytes2.length; i++) {
      hex += hexes[bytes2[i]];
    }
    return hex;
  }
  function numberToHexUnpadded(num) {
    const hex = num.toString(16);
    return hex.length & 1 ? `0${hex}` : hex;
  }
  function hexToNumber(hex) {
    if (typeof hex !== "string")
      throw new Error("hex string expected, got " + typeof hex);
    return BigInt(hex === "" ? "0" : `0x${hex}`);
  }
  function hexToBytes(hex) {
    if (typeof hex !== "string")
      throw new Error("hex string expected, got " + typeof hex);
    const len = hex.length;
    if (len % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + len);
    const array = new Uint8Array(len / 2);
    for (let i = 0; i < array.length; i++) {
      const j = i * 2;
      const hexByte = hex.slice(j, j + 2);
      const byte = Number.parseInt(hexByte, 16);
      if (Number.isNaN(byte) || byte < 0)
        throw new Error("Invalid byte sequence");
      array[i] = byte;
    }
    return array;
  }
  function bytesToNumberBE(bytes2) {
    return hexToNumber(bytesToHex(bytes2));
  }
  function bytesToNumberLE(bytes2) {
    if (!u8a(bytes2))
      throw new Error("Uint8Array expected");
    return hexToNumber(bytesToHex(Uint8Array.from(bytes2).reverse()));
  }
  function numberToBytesBE(n2, len) {
    return hexToBytes(n2.toString(16).padStart(len * 2, "0"));
  }
  function numberToBytesLE(n2, len) {
    return numberToBytesBE(n2, len).reverse();
  }
  function numberToVarBytesBE(n2) {
    return hexToBytes(numberToHexUnpadded(n2));
  }
  function ensureBytes(title, hex, expectedLength) {
    let res;
    if (typeof hex === "string") {
      try {
        res = hexToBytes(hex);
      } catch (e) {
        throw new Error(`${title} must be valid hex string, got "${hex}". Cause: ${e}`);
      }
    } else if (u8a(hex)) {
      res = Uint8Array.from(hex);
    } else {
      throw new Error(`${title} must be hex string or Uint8Array`);
    }
    const len = res.length;
    if (typeof expectedLength === "number" && len !== expectedLength)
      throw new Error(`${title} expected ${expectedLength} bytes, got ${len}`);
    return res;
  }
  function concatBytes(...arrays) {
    const r = new Uint8Array(arrays.reduce((sum, a) => sum + a.length, 0));
    let pad = 0;
    arrays.forEach((a) => {
      if (!u8a(a))
        throw new Error("Uint8Array expected");
      r.set(a, pad);
      pad += a.length;
    });
    return r;
  }
  function equalBytes(b1, b2) {
    if (b1.length !== b2.length)
      return false;
    for (let i = 0; i < b1.length; i++)
      if (b1[i] !== b2[i])
        return false;
    return true;
  }
  function utf8ToBytes(str) {
    if (typeof str !== "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str));
  }
  function bitLen(n2) {
    let len;
    for (len = 0; n2 > _0n$3; n2 >>= _1n$4, len += 1)
      ;
    return len;
  }
  function bitGet(n2, pos) {
    return n2 >> BigInt(pos) & _1n$4;
  }
  const bitSet = (n2, pos, value) => {
    return n2 | (value ? _1n$4 : _0n$3) << BigInt(pos);
  };
  const bitMask = (n2) => (_2n$2 << BigInt(n2 - 1)) - _1n$4;
  const u8n = (data) => new Uint8Array(data);
  const u8fr = (arr) => Uint8Array.from(arr);
  function createHmacDrbg(hashLen, qByteLen, hmacFn) {
    if (typeof hashLen !== "number" || hashLen < 2)
      throw new Error("hashLen must be a number");
    if (typeof qByteLen !== "number" || qByteLen < 2)
      throw new Error("qByteLen must be a number");
    if (typeof hmacFn !== "function")
      throw new Error("hmacFn must be a function");
    let v = u8n(hashLen);
    let k = u8n(hashLen);
    let i = 0;
    const reset = () => {
      v.fill(1);
      k.fill(0);
      i = 0;
    };
    const h = (...b2) => hmacFn(k, v, ...b2);
    const reseed = (seed = u8n()) => {
      k = h(u8fr([0]), seed);
      v = h();
      if (seed.length === 0)
        return;
      k = h(u8fr([1]), seed);
      v = h();
    };
    const gen2 = () => {
      if (i++ >= 1e3)
        throw new Error("drbg: tried 1000 values");
      let len = 0;
      const out = [];
      while (len < qByteLen) {
        v = h();
        const sl = v.slice();
        out.push(sl);
        len += v.length;
      }
      return concatBytes(...out);
    };
    const genUntil = (seed, pred) => {
      reset();
      reseed(seed);
      let res = void 0;
      while (!(res = pred(gen2())))
        reseed();
      reset();
      return res;
    };
    return genUntil;
  }
  const validatorFns = {
    bigint: (val) => typeof val === "bigint",
    function: (val) => typeof val === "function",
    boolean: (val) => typeof val === "boolean",
    string: (val) => typeof val === "string",
    stringOrUint8Array: (val) => typeof val === "string" || val instanceof Uint8Array,
    isSafeInteger: (val) => Number.isSafeInteger(val),
    array: (val) => Array.isArray(val),
    field: (val, object2) => object2.Fp.isValid(val),
    hash: (val) => typeof val === "function" && Number.isSafeInteger(val.outputLen)
  };
  function validateObject(object2, validators2, optValidators = {}) {
    const checkField = (fieldName, type, isOptional) => {
      const checkVal = validatorFns[type];
      if (typeof checkVal !== "function")
        throw new Error(`Invalid validator "${type}", expected function`);
      const val = object2[fieldName];
      if (isOptional && val === void 0)
        return;
      if (!checkVal(val, object2)) {
        throw new Error(`Invalid param ${String(fieldName)}=${val} (${typeof val}), expected ${type}`);
      }
    };
    for (const [fieldName, type] of Object.entries(validators2))
      checkField(fieldName, type, false);
    for (const [fieldName, type] of Object.entries(optValidators))
      checkField(fieldName, type, true);
    return object2;
  }
  const ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    bitGet,
    bitLen,
    bitMask,
    bitSet,
    bytesToHex,
    bytesToNumberBE,
    bytesToNumberLE,
    concatBytes,
    createHmacDrbg,
    ensureBytes,
    equalBytes,
    hexToBytes,
    hexToNumber,
    numberToBytesBE,
    numberToBytesLE,
    numberToHexUnpadded,
    numberToVarBytesBE,
    utf8ToBytes,
    validateObject
  }, Symbol.toStringTag, { value: "Module" }));
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  const _0n$2 = BigInt(0), _1n$3 = BigInt(1), _2n$1 = BigInt(2), _3n$1 = BigInt(3);
  const _4n = BigInt(4), _5n = BigInt(5), _8n = BigInt(8);
  BigInt(9);
  BigInt(16);
  function mod(a, b2) {
    const result = a % b2;
    return result >= _0n$2 ? result : b2 + result;
  }
  function pow(num, power, modulo) {
    if (modulo <= _0n$2 || power < _0n$2)
      throw new Error("Expected power/modulo > 0");
    if (modulo === _1n$3)
      return _0n$2;
    let res = _1n$3;
    while (power > _0n$2) {
      if (power & _1n$3)
        res = res * num % modulo;
      num = num * num % modulo;
      power >>= _1n$3;
    }
    return res;
  }
  function pow2(x, power, modulo) {
    let res = x;
    while (power-- > _0n$2) {
      res *= res;
      res %= modulo;
    }
    return res;
  }
  function invert(number2, modulo) {
    if (number2 === _0n$2 || modulo <= _0n$2) {
      throw new Error(`invert: expected positive integers, got n=${number2} mod=${modulo}`);
    }
    let a = mod(number2, modulo);
    let b2 = modulo;
    let x = _0n$2, u = _1n$3;
    while (a !== _0n$2) {
      const q = b2 / a;
      const r = b2 % a;
      const m = x - u * q;
      b2 = a, a = r, x = u, u = m;
    }
    const gcd = b2;
    if (gcd !== _1n$3)
      throw new Error("invert: does not exist");
    return mod(x, modulo);
  }
  function tonelliShanks(P) {
    const legendreC = (P - _1n$3) / _2n$1;
    let Q, S, Z;
    for (Q = P - _1n$3, S = 0; Q % _2n$1 === _0n$2; Q /= _2n$1, S++)
      ;
    for (Z = _2n$1; Z < P && pow(Z, legendreC, P) !== P - _1n$3; Z++)
      ;
    if (S === 1) {
      const p1div4 = (P + _1n$3) / _4n;
      return function tonelliFast(Fp2, n2) {
        const root = Fp2.pow(n2, p1div4);
        if (!Fp2.eql(Fp2.sqr(root), n2))
          throw new Error("Cannot find square root");
        return root;
      };
    }
    const Q1div2 = (Q + _1n$3) / _2n$1;
    return function tonelliSlow(Fp2, n2) {
      if (Fp2.pow(n2, legendreC) === Fp2.neg(Fp2.ONE))
        throw new Error("Cannot find square root");
      let r = S;
      let g = Fp2.pow(Fp2.mul(Fp2.ONE, Z), Q);
      let x = Fp2.pow(n2, Q1div2);
      let b2 = Fp2.pow(n2, Q);
      while (!Fp2.eql(b2, Fp2.ONE)) {
        if (Fp2.eql(b2, Fp2.ZERO))
          return Fp2.ZERO;
        let m = 1;
        for (let t2 = Fp2.sqr(b2); m < r; m++) {
          if (Fp2.eql(t2, Fp2.ONE))
            break;
          t2 = Fp2.sqr(t2);
        }
        const ge = Fp2.pow(g, _1n$3 << BigInt(r - m - 1));
        g = Fp2.sqr(ge);
        x = Fp2.mul(x, ge);
        b2 = Fp2.mul(b2, g);
        r = m;
      }
      return x;
    };
  }
  function FpSqrt(P) {
    if (P % _4n === _3n$1) {
      const p1div4 = (P + _1n$3) / _4n;
      return function sqrt3mod4(Fp2, n2) {
        const root = Fp2.pow(n2, p1div4);
        if (!Fp2.eql(Fp2.sqr(root), n2))
          throw new Error("Cannot find square root");
        return root;
      };
    }
    if (P % _8n === _5n) {
      const c1 = (P - _5n) / _8n;
      return function sqrt5mod8(Fp2, n2) {
        const n22 = Fp2.mul(n2, _2n$1);
        const v = Fp2.pow(n22, c1);
        const nv = Fp2.mul(n2, v);
        const i = Fp2.mul(Fp2.mul(nv, _2n$1), v);
        const root = Fp2.mul(nv, Fp2.sub(i, Fp2.ONE));
        if (!Fp2.eql(Fp2.sqr(root), n2))
          throw new Error("Cannot find square root");
        return root;
      };
    }
    return tonelliShanks(P);
  }
  const FIELD_FIELDS = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN"
  ];
  function validateField(field) {
    const initial = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "isSafeInteger",
      BITS: "isSafeInteger"
    };
    const opts = FIELD_FIELDS.reduce((map, val) => {
      map[val] = "function";
      return map;
    }, initial);
    return validateObject(field, opts);
  }
  function FpPow(f, num, power) {
    if (power < _0n$2)
      throw new Error("Expected power > 0");
    if (power === _0n$2)
      return f.ONE;
    if (power === _1n$3)
      return num;
    let p = f.ONE;
    let d = num;
    while (power > _0n$2) {
      if (power & _1n$3)
        p = f.mul(p, d);
      d = f.sqr(d);
      power >>= _1n$3;
    }
    return p;
  }
  function FpInvertBatch(f, nums) {
    const tmp = new Array(nums.length);
    const lastMultiplied = nums.reduce((acc, num, i) => {
      if (f.is0(num))
        return acc;
      tmp[i] = acc;
      return f.mul(acc, num);
    }, f.ONE);
    const inverted = f.inv(lastMultiplied);
    nums.reduceRight((acc, num, i) => {
      if (f.is0(num))
        return acc;
      tmp[i] = f.mul(acc, tmp[i]);
      return f.mul(acc, num);
    }, inverted);
    return tmp;
  }
  function nLength(n2, nBitLength) {
    const _nBitLength = nBitLength !== void 0 ? nBitLength : n2.toString(2).length;
    const nByteLength = Math.ceil(_nBitLength / 8);
    return { nBitLength: _nBitLength, nByteLength };
  }
  function Field(ORDER, bitLen2, isLE2 = false, redef = {}) {
    if (ORDER <= _0n$2)
      throw new Error(`Expected Field ORDER > 0, got ${ORDER}`);
    const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen2);
    if (BYTES > 2048)
      throw new Error("Field lengths over 2048 bytes are not supported");
    const sqrtP = FpSqrt(ORDER);
    const f = Object.freeze({
      ORDER,
      BITS,
      BYTES,
      MASK: bitMask(BITS),
      ZERO: _0n$2,
      ONE: _1n$3,
      create: (num) => mod(num, ORDER),
      isValid: (num) => {
        if (typeof num !== "bigint")
          throw new Error(`Invalid field element: expected bigint, got ${typeof num}`);
        return _0n$2 <= num && num < ORDER;
      },
      is0: (num) => num === _0n$2,
      isOdd: (num) => (num & _1n$3) === _1n$3,
      neg: (num) => mod(-num, ORDER),
      eql: (lhs, rhs) => lhs === rhs,
      sqr: (num) => mod(num * num, ORDER),
      add: (lhs, rhs) => mod(lhs + rhs, ORDER),
      sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
      mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
      pow: (num, power) => FpPow(f, num, power),
      div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
      // Same as above, but doesn't normalize
      sqrN: (num) => num * num,
      addN: (lhs, rhs) => lhs + rhs,
      subN: (lhs, rhs) => lhs - rhs,
      mulN: (lhs, rhs) => lhs * rhs,
      inv: (num) => invert(num, ORDER),
      sqrt: redef.sqrt || ((n2) => sqrtP(f, n2)),
      invertBatch: (lst) => FpInvertBatch(f, lst),
      // TODO: do we really need constant cmov?
      // We don't have const-time bigints anyway, so probably will be not very useful
      cmov: (a, b2, c) => c ? b2 : a,
      toBytes: (num) => isLE2 ? numberToBytesLE(num, BYTES) : numberToBytesBE(num, BYTES),
      fromBytes: (bytes2) => {
        if (bytes2.length !== BYTES)
          throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes2.length}`);
        return isLE2 ? bytesToNumberLE(bytes2) : bytesToNumberBE(bytes2);
      }
    });
    return Object.freeze(f);
  }
  function getFieldBytesLength(fieldOrder) {
    if (typeof fieldOrder !== "bigint")
      throw new Error("field order must be bigint");
    const bitLength = fieldOrder.toString(2).length;
    return Math.ceil(bitLength / 8);
  }
  function getMinHashLength(fieldOrder) {
    const length = getFieldBytesLength(fieldOrder);
    return length + Math.ceil(length / 2);
  }
  function mapHashToField(key, fieldOrder, isLE2 = false) {
    const len = key.length;
    const fieldLen = getFieldBytesLength(fieldOrder);
    const minLen = getMinHashLength(fieldOrder);
    if (len < 16 || len < minLen || len > 1024)
      throw new Error(`expected ${minLen}-1024 bytes of input, got ${len}`);
    const num = isLE2 ? bytesToNumberBE(key) : bytesToNumberLE(key);
    const reduced = mod(num, fieldOrder - _1n$3) + _1n$3;
    return isLE2 ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
  }
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  const _0n$1 = BigInt(0);
  const _1n$2 = BigInt(1);
  function wNAF(c, bits) {
    const constTimeNegate = (condition, item) => {
      const neg = item.negate();
      return condition ? neg : item;
    };
    const opts = (W) => {
      const windows = Math.ceil(bits / W) + 1;
      const windowSize = 2 ** (W - 1);
      return { windows, windowSize };
    };
    return {
      constTimeNegate,
      // non-const time multiplication ladder
      unsafeLadder(elm, n2) {
        let p = c.ZERO;
        let d = elm;
        while (n2 > _0n$1) {
          if (n2 & _1n$2)
            p = p.add(d);
          d = d.double();
          n2 >>= _1n$2;
        }
        return p;
      },
      /**
       * Creates a wNAF precomputation window. Used for caching.
       * Default window size is set by `utils.precompute()` and is equal to 8.
       * Number of precomputed points depends on the curve size:
       * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
       * - 𝑊 is the window size
       * - 𝑛 is the bitlength of the curve order.
       * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
       * @returns precomputed point tables flattened to a single array
       */
      precomputeWindow(elm, W) {
        const { windows, windowSize } = opts(W);
        const points = [];
        let p = elm;
        let base = p;
        for (let window2 = 0; window2 < windows; window2++) {
          base = p;
          points.push(base);
          for (let i = 1; i < windowSize; i++) {
            base = base.add(p);
            points.push(base);
          }
          p = base.double();
        }
        return points;
      },
      /**
       * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
       * @param W window size
       * @param precomputes precomputed tables
       * @param n scalar (we don't check here, but should be less than curve order)
       * @returns real and fake (for const-time) points
       */
      wNAF(W, precomputes, n2) {
        const { windows, windowSize } = opts(W);
        let p = c.ZERO;
        let f = c.BASE;
        const mask2 = BigInt(2 ** W - 1);
        const maxNumber = 2 ** W;
        const shiftBy = BigInt(W);
        for (let window2 = 0; window2 < windows; window2++) {
          const offset = window2 * windowSize;
          let wbits = Number(n2 & mask2);
          n2 >>= shiftBy;
          if (wbits > windowSize) {
            wbits -= maxNumber;
            n2 += _1n$2;
          }
          const offset1 = offset;
          const offset2 = offset + Math.abs(wbits) - 1;
          const cond1 = window2 % 2 !== 0;
          const cond2 = wbits < 0;
          if (wbits === 0) {
            f = f.add(constTimeNegate(cond1, precomputes[offset1]));
          } else {
            p = p.add(constTimeNegate(cond2, precomputes[offset2]));
          }
        }
        return { p, f };
      },
      wNAFCached(P, precomputesMap, n2, transform) {
        const W = P._WINDOW_SIZE || 1;
        let comp = precomputesMap.get(P);
        if (!comp) {
          comp = this.precomputeWindow(P, W);
          if (W !== 1) {
            precomputesMap.set(P, transform(comp));
          }
        }
        return this.wNAF(W, comp, n2);
      }
    };
  }
  function validateBasic(curve) {
    validateField(curve.Fp);
    validateObject(curve, {
      n: "bigint",
      h: "bigint",
      Gx: "field",
      Gy: "field"
    }, {
      nBitLength: "isSafeInteger",
      nByteLength: "isSafeInteger"
    });
    return Object.freeze({
      ...nLength(curve.n, curve.nBitLength),
      ...curve,
      ...{ p: curve.Fp.ORDER }
    });
  }
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  function validatePointOpts(curve) {
    const opts = validateBasic(curve);
    validateObject(opts, {
      a: "field",
      b: "field"
    }, {
      allowedPrivateKeyLengths: "array",
      wrapPrivateKey: "boolean",
      isTorsionFree: "function",
      clearCofactor: "function",
      allowInfinityPoint: "boolean",
      fromBytes: "function",
      toBytes: "function"
    });
    const { endo, Fp: Fp2, a } = opts;
    if (endo) {
      if (!Fp2.eql(a, Fp2.ZERO)) {
        throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
      }
      if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") {
        throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
      }
    }
    return Object.freeze({ ...opts });
  }
  const { bytesToNumberBE: b2n, hexToBytes: h2b } = ut;
  const DER = {
    // asn.1 DER encoding utils
    Err: class DERErr extends Error {
      constructor(m = "") {
        super(m);
      }
    },
    _parseInt(data) {
      const { Err: E } = DER;
      if (data.length < 2 || data[0] !== 2)
        throw new E("Invalid signature integer tag");
      const len = data[1];
      const res = data.subarray(2, len + 2);
      if (!len || res.length !== len)
        throw new E("Invalid signature integer: wrong length");
      if (res[0] & 128)
        throw new E("Invalid signature integer: negative");
      if (res[0] === 0 && !(res[1] & 128))
        throw new E("Invalid signature integer: unnecessary leading zero");
      return { d: b2n(res), l: data.subarray(len + 2) };
    },
    toSig(hex) {
      const { Err: E } = DER;
      const data = typeof hex === "string" ? h2b(hex) : hex;
      if (!(data instanceof Uint8Array))
        throw new Error("ui8a expected");
      let l = data.length;
      if (l < 2 || data[0] != 48)
        throw new E("Invalid signature tag");
      if (data[1] !== l - 2)
        throw new E("Invalid signature: incorrect length");
      const { d: r, l: sBytes } = DER._parseInt(data.subarray(2));
      const { d: s, l: rBytesLeft } = DER._parseInt(sBytes);
      if (rBytesLeft.length)
        throw new E("Invalid signature: left bytes after parsing");
      return { r, s };
    },
    hexFromSig(sig) {
      const slice = (s2) => Number.parseInt(s2[0], 16) & 8 ? "00" + s2 : s2;
      const h = (num) => {
        const hex = num.toString(16);
        return hex.length & 1 ? `0${hex}` : hex;
      };
      const s = slice(h(sig.s));
      const r = slice(h(sig.r));
      const shl = s.length / 2;
      const rhl = r.length / 2;
      const sl = h(shl);
      const rl = h(rhl);
      return `30${h(rhl + shl + 4)}02${rl}${r}02${sl}${s}`;
    }
  };
  const _0n = BigInt(0), _1n$1 = BigInt(1);
  BigInt(2);
  const _3n = BigInt(3);
  BigInt(4);
  function weierstrassPoints(opts) {
    const CURVE = validatePointOpts(opts);
    const { Fp: Fp2 } = CURVE;
    const toBytes2 = CURVE.toBytes || ((_c, point, _isCompressed) => {
      const a = point.toAffine();
      return concatBytes(Uint8Array.from([4]), Fp2.toBytes(a.x), Fp2.toBytes(a.y));
    });
    const fromBytes = CURVE.fromBytes || ((bytes2) => {
      const tail = bytes2.subarray(1);
      const x = Fp2.fromBytes(tail.subarray(0, Fp2.BYTES));
      const y = Fp2.fromBytes(tail.subarray(Fp2.BYTES, 2 * Fp2.BYTES));
      return { x, y };
    });
    function weierstrassEquation(x) {
      const { a, b: b2 } = CURVE;
      const x2 = Fp2.sqr(x);
      const x3 = Fp2.mul(x2, x);
      return Fp2.add(Fp2.add(x3, Fp2.mul(x, a)), b2);
    }
    if (!Fp2.eql(Fp2.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx)))
      throw new Error("bad generator point: equation left != right");
    function isWithinCurveOrder(num) {
      return typeof num === "bigint" && _0n < num && num < CURVE.n;
    }
    function assertGE(num) {
      if (!isWithinCurveOrder(num))
        throw new Error("Expected valid bigint: 0 < bigint < curve.n");
    }
    function normPrivateKeyToScalar(key) {
      const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n: n2 } = CURVE;
      if (lengths && typeof key !== "bigint") {
        if (key instanceof Uint8Array)
          key = bytesToHex(key);
        if (typeof key !== "string" || !lengths.includes(key.length))
          throw new Error("Invalid key");
        key = key.padStart(nByteLength * 2, "0");
      }
      let num;
      try {
        num = typeof key === "bigint" ? key : bytesToNumberBE(ensureBytes("private key", key, nByteLength));
      } catch (error) {
        throw new Error(`private key must be ${nByteLength} bytes, hex or bigint, not ${typeof key}`);
      }
      if (wrapPrivateKey)
        num = mod(num, n2);
      assertGE(num);
      return num;
    }
    const pointPrecomputes = /* @__PURE__ */ new Map();
    function assertPrjPoint(other) {
      if (!(other instanceof Point))
        throw new Error("ProjectivePoint expected");
    }
    class Point {
      constructor(px, py, pz) {
        this.px = px;
        this.py = py;
        this.pz = pz;
        if (px == null || !Fp2.isValid(px))
          throw new Error("x required");
        if (py == null || !Fp2.isValid(py))
          throw new Error("y required");
        if (pz == null || !Fp2.isValid(pz))
          throw new Error("z required");
      }
      // Does not validate if the point is on-curve.
      // Use fromHex instead, or call assertValidity() later.
      static fromAffine(p) {
        const { x, y } = p || {};
        if (!p || !Fp2.isValid(x) || !Fp2.isValid(y))
          throw new Error("invalid affine point");
        if (p instanceof Point)
          throw new Error("projective point not allowed");
        const is0 = (i) => Fp2.eql(i, Fp2.ZERO);
        if (is0(x) && is0(y))
          return Point.ZERO;
        return new Point(x, y, Fp2.ONE);
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      /**
       * Takes a bunch of Projective Points but executes only one
       * inversion on all of them. Inversion is very slow operation,
       * so this improves performance massively.
       * Optimization: converts a list of projective points to a list of identical points with Z=1.
       */
      static normalizeZ(points) {
        const toInv = Fp2.invertBatch(points.map((p) => p.pz));
        return points.map((p, i) => p.toAffine(toInv[i])).map(Point.fromAffine);
      }
      /**
       * Converts hash string or Uint8Array to Point.
       * @param hex short/long ECDSA hex
       */
      static fromHex(hex) {
        const P = Point.fromAffine(fromBytes(ensureBytes("pointHex", hex)));
        P.assertValidity();
        return P;
      }
      // Multiplies generator point by privateKey.
      static fromPrivateKey(privateKey) {
        return Point.BASE.multiply(normPrivateKeyToScalar(privateKey));
      }
      // "Private method", don't use it directly
      _setWindowSize(windowSize) {
        this._WINDOW_SIZE = windowSize;
        pointPrecomputes.delete(this);
      }
      // A point on curve is valid if it conforms to equation.
      assertValidity() {
        if (this.is0()) {
          if (CURVE.allowInfinityPoint && !Fp2.is0(this.py))
            return;
          throw new Error("bad point: ZERO");
        }
        const { x, y } = this.toAffine();
        if (!Fp2.isValid(x) || !Fp2.isValid(y))
          throw new Error("bad point: x or y not FE");
        const left = Fp2.sqr(y);
        const right = weierstrassEquation(x);
        if (!Fp2.eql(left, right))
          throw new Error("bad point: equation left != right");
        if (!this.isTorsionFree())
          throw new Error("bad point: not in prime-order subgroup");
      }
      hasEvenY() {
        const { y } = this.toAffine();
        if (Fp2.isOdd)
          return !Fp2.isOdd(y);
        throw new Error("Field doesn't support isOdd");
      }
      /**
       * Compare one point to another.
       */
      equals(other) {
        assertPrjPoint(other);
        const { px: X1, py: Y1, pz: Z1 } = this;
        const { px: X2, py: Y2, pz: Z2 } = other;
        const U1 = Fp2.eql(Fp2.mul(X1, Z2), Fp2.mul(X2, Z1));
        const U2 = Fp2.eql(Fp2.mul(Y1, Z2), Fp2.mul(Y2, Z1));
        return U1 && U2;
      }
      /**
       * Flips point to one corresponding to (x, -y) in Affine coordinates.
       */
      negate() {
        return new Point(this.px, Fp2.neg(this.py), this.pz);
      }
      // Renes-Costello-Batina exception-free doubling formula.
      // There is 30% faster Jacobian formula, but it is not complete.
      // https://eprint.iacr.org/2015/1060, algorithm 3
      // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
      double() {
        const { a, b: b2 } = CURVE;
        const b3 = Fp2.mul(b2, _3n);
        const { px: X1, py: Y1, pz: Z1 } = this;
        let X3 = Fp2.ZERO, Y3 = Fp2.ZERO, Z3 = Fp2.ZERO;
        let t0 = Fp2.mul(X1, X1);
        let t1 = Fp2.mul(Y1, Y1);
        let t2 = Fp2.mul(Z1, Z1);
        let t3 = Fp2.mul(X1, Y1);
        t3 = Fp2.add(t3, t3);
        Z3 = Fp2.mul(X1, Z1);
        Z3 = Fp2.add(Z3, Z3);
        X3 = Fp2.mul(a, Z3);
        Y3 = Fp2.mul(b3, t2);
        Y3 = Fp2.add(X3, Y3);
        X3 = Fp2.sub(t1, Y3);
        Y3 = Fp2.add(t1, Y3);
        Y3 = Fp2.mul(X3, Y3);
        X3 = Fp2.mul(t3, X3);
        Z3 = Fp2.mul(b3, Z3);
        t2 = Fp2.mul(a, t2);
        t3 = Fp2.sub(t0, t2);
        t3 = Fp2.mul(a, t3);
        t3 = Fp2.add(t3, Z3);
        Z3 = Fp2.add(t0, t0);
        t0 = Fp2.add(Z3, t0);
        t0 = Fp2.add(t0, t2);
        t0 = Fp2.mul(t0, t3);
        Y3 = Fp2.add(Y3, t0);
        t2 = Fp2.mul(Y1, Z1);
        t2 = Fp2.add(t2, t2);
        t0 = Fp2.mul(t2, t3);
        X3 = Fp2.sub(X3, t0);
        Z3 = Fp2.mul(t2, t1);
        Z3 = Fp2.add(Z3, Z3);
        Z3 = Fp2.add(Z3, Z3);
        return new Point(X3, Y3, Z3);
      }
      // Renes-Costello-Batina exception-free addition formula.
      // There is 30% faster Jacobian formula, but it is not complete.
      // https://eprint.iacr.org/2015/1060, algorithm 1
      // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
      add(other) {
        assertPrjPoint(other);
        const { px: X1, py: Y1, pz: Z1 } = this;
        const { px: X2, py: Y2, pz: Z2 } = other;
        let X3 = Fp2.ZERO, Y3 = Fp2.ZERO, Z3 = Fp2.ZERO;
        const a = CURVE.a;
        const b3 = Fp2.mul(CURVE.b, _3n);
        let t0 = Fp2.mul(X1, X2);
        let t1 = Fp2.mul(Y1, Y2);
        let t2 = Fp2.mul(Z1, Z2);
        let t3 = Fp2.add(X1, Y1);
        let t4 = Fp2.add(X2, Y2);
        t3 = Fp2.mul(t3, t4);
        t4 = Fp2.add(t0, t1);
        t3 = Fp2.sub(t3, t4);
        t4 = Fp2.add(X1, Z1);
        let t5 = Fp2.add(X2, Z2);
        t4 = Fp2.mul(t4, t5);
        t5 = Fp2.add(t0, t2);
        t4 = Fp2.sub(t4, t5);
        t5 = Fp2.add(Y1, Z1);
        X3 = Fp2.add(Y2, Z2);
        t5 = Fp2.mul(t5, X3);
        X3 = Fp2.add(t1, t2);
        t5 = Fp2.sub(t5, X3);
        Z3 = Fp2.mul(a, t4);
        X3 = Fp2.mul(b3, t2);
        Z3 = Fp2.add(X3, Z3);
        X3 = Fp2.sub(t1, Z3);
        Z3 = Fp2.add(t1, Z3);
        Y3 = Fp2.mul(X3, Z3);
        t1 = Fp2.add(t0, t0);
        t1 = Fp2.add(t1, t0);
        t2 = Fp2.mul(a, t2);
        t4 = Fp2.mul(b3, t4);
        t1 = Fp2.add(t1, t2);
        t2 = Fp2.sub(t0, t2);
        t2 = Fp2.mul(a, t2);
        t4 = Fp2.add(t4, t2);
        t0 = Fp2.mul(t1, t4);
        Y3 = Fp2.add(Y3, t0);
        t0 = Fp2.mul(t5, t4);
        X3 = Fp2.mul(t3, X3);
        X3 = Fp2.sub(X3, t0);
        t0 = Fp2.mul(t3, t1);
        Z3 = Fp2.mul(t5, Z3);
        Z3 = Fp2.add(Z3, t0);
        return new Point(X3, Y3, Z3);
      }
      subtract(other) {
        return this.add(other.negate());
      }
      is0() {
        return this.equals(Point.ZERO);
      }
      wNAF(n2) {
        return wnaf.wNAFCached(this, pointPrecomputes, n2, (comp) => {
          const toInv = Fp2.invertBatch(comp.map((p) => p.pz));
          return comp.map((p, i) => p.toAffine(toInv[i])).map(Point.fromAffine);
        });
      }
      /**
       * Non-constant-time multiplication. Uses double-and-add algorithm.
       * It's faster, but should only be used when you don't care about
       * an exposed private key e.g. sig verification, which works over *public* keys.
       */
      multiplyUnsafe(n2) {
        const I = Point.ZERO;
        if (n2 === _0n)
          return I;
        assertGE(n2);
        if (n2 === _1n$1)
          return this;
        const { endo } = CURVE;
        if (!endo)
          return wnaf.unsafeLadder(this, n2);
        let { k1neg, k1, k2neg, k2 } = endo.splitScalar(n2);
        let k1p = I;
        let k2p = I;
        let d = this;
        while (k1 > _0n || k2 > _0n) {
          if (k1 & _1n$1)
            k1p = k1p.add(d);
          if (k2 & _1n$1)
            k2p = k2p.add(d);
          d = d.double();
          k1 >>= _1n$1;
          k2 >>= _1n$1;
        }
        if (k1neg)
          k1p = k1p.negate();
        if (k2neg)
          k2p = k2p.negate();
        k2p = new Point(Fp2.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
        return k1p.add(k2p);
      }
      /**
       * Constant time multiplication.
       * Uses wNAF method. Windowed method may be 10% faster,
       * but takes 2x longer to generate and consumes 2x memory.
       * Uses precomputes when available.
       * Uses endomorphism for Koblitz curves.
       * @param scalar by which the point would be multiplied
       * @returns New point
       */
      multiply(scalar) {
        assertGE(scalar);
        let n2 = scalar;
        let point, fake;
        const { endo } = CURVE;
        if (endo) {
          const { k1neg, k1, k2neg, k2 } = endo.splitScalar(n2);
          let { p: k1p, f: f1p } = this.wNAF(k1);
          let { p: k2p, f: f2p } = this.wNAF(k2);
          k1p = wnaf.constTimeNegate(k1neg, k1p);
          k2p = wnaf.constTimeNegate(k2neg, k2p);
          k2p = new Point(Fp2.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
          point = k1p.add(k2p);
          fake = f1p.add(f2p);
        } else {
          const { p, f } = this.wNAF(n2);
          point = p;
          fake = f;
        }
        return Point.normalizeZ([point, fake])[0];
      }
      /**
       * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
       * Not using Strauss-Shamir trick: precomputation tables are faster.
       * The trick could be useful if both P and Q are not G (not in our case).
       * @returns non-zero affine point
       */
      multiplyAndAddUnsafe(Q, a, b2) {
        const G = Point.BASE;
        const mul = (P, a2) => a2 === _0n || a2 === _1n$1 || !P.equals(G) ? P.multiplyUnsafe(a2) : P.multiply(a2);
        const sum = mul(this, a).add(mul(Q, b2));
        return sum.is0() ? void 0 : sum;
      }
      // Converts Projective point to affine (x, y) coordinates.
      // Can accept precomputed Z^-1 - for example, from invertBatch.
      // (x, y, z) ∋ (x=x/z, y=y/z)
      toAffine(iz) {
        const { px: x, py: y, pz: z } = this;
        const is0 = this.is0();
        if (iz == null)
          iz = is0 ? Fp2.ONE : Fp2.inv(z);
        const ax = Fp2.mul(x, iz);
        const ay = Fp2.mul(y, iz);
        const zz = Fp2.mul(z, iz);
        if (is0)
          return { x: Fp2.ZERO, y: Fp2.ZERO };
        if (!Fp2.eql(zz, Fp2.ONE))
          throw new Error("invZ was invalid");
        return { x: ax, y: ay };
      }
      isTorsionFree() {
        const { h: cofactor, isTorsionFree } = CURVE;
        if (cofactor === _1n$1)
          return true;
        if (isTorsionFree)
          return isTorsionFree(Point, this);
        throw new Error("isTorsionFree() has not been declared for the elliptic curve");
      }
      clearCofactor() {
        const { h: cofactor, clearCofactor } = CURVE;
        if (cofactor === _1n$1)
          return this;
        if (clearCofactor)
          return clearCofactor(Point, this);
        return this.multiplyUnsafe(CURVE.h);
      }
      toRawBytes(isCompressed = true) {
        this.assertValidity();
        return toBytes2(Point, this, isCompressed);
      }
      toHex(isCompressed = true) {
        return bytesToHex(this.toRawBytes(isCompressed));
      }
    }
    Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp2.ONE);
    Point.ZERO = new Point(Fp2.ZERO, Fp2.ONE, Fp2.ZERO);
    const _bits = CURVE.nBitLength;
    const wnaf = wNAF(Point, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
    return {
      CURVE,
      ProjectivePoint: Point,
      normPrivateKeyToScalar,
      weierstrassEquation,
      isWithinCurveOrder
    };
  }
  function validateOpts(curve) {
    const opts = validateBasic(curve);
    validateObject(opts, {
      hash: "hash",
      hmac: "function",
      randomBytes: "function"
    }, {
      bits2int: "function",
      bits2int_modN: "function",
      lowS: "boolean"
    });
    return Object.freeze({ lowS: true, ...opts });
  }
  function weierstrass(curveDef) {
    const CURVE = validateOpts(curveDef);
    const { Fp: Fp2, n: CURVE_ORDER } = CURVE;
    const compressedLen = Fp2.BYTES + 1;
    const uncompressedLen = 2 * Fp2.BYTES + 1;
    function isValidFieldElement(num) {
      return _0n < num && num < Fp2.ORDER;
    }
    function modN(a) {
      return mod(a, CURVE_ORDER);
    }
    function invN(a) {
      return invert(a, CURVE_ORDER);
    }
    const { ProjectivePoint: Point, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints({
      ...CURVE,
      toBytes(_c, point, isCompressed) {
        const a = point.toAffine();
        const x = Fp2.toBytes(a.x);
        const cat = concatBytes;
        if (isCompressed) {
          return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x);
        } else {
          return cat(Uint8Array.from([4]), x, Fp2.toBytes(a.y));
        }
      },
      fromBytes(bytes2) {
        const len = bytes2.length;
        const head = bytes2[0];
        const tail = bytes2.subarray(1);
        if (len === compressedLen && (head === 2 || head === 3)) {
          const x = bytesToNumberBE(tail);
          if (!isValidFieldElement(x))
            throw new Error("Point is not on curve");
          const y2 = weierstrassEquation(x);
          let y = Fp2.sqrt(y2);
          const isYOdd = (y & _1n$1) === _1n$1;
          const isHeadOdd = (head & 1) === 1;
          if (isHeadOdd !== isYOdd)
            y = Fp2.neg(y);
          return { x, y };
        } else if (len === uncompressedLen && head === 4) {
          const x = Fp2.fromBytes(tail.subarray(0, Fp2.BYTES));
          const y = Fp2.fromBytes(tail.subarray(Fp2.BYTES, 2 * Fp2.BYTES));
          return { x, y };
        } else {
          throw new Error(`Point of length ${len} was invalid. Expected ${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes`);
        }
      }
    });
    const numToNByteStr = (num) => bytesToHex(numberToBytesBE(num, CURVE.nByteLength));
    function isBiggerThanHalfOrder(number2) {
      const HALF = CURVE_ORDER >> _1n$1;
      return number2 > HALF;
    }
    function normalizeS(s) {
      return isBiggerThanHalfOrder(s) ? modN(-s) : s;
    }
    const slcNum = (b2, from, to) => bytesToNumberBE(b2.slice(from, to));
    class Signature2 {
      constructor(r, s, recovery) {
        this.r = r;
        this.s = s;
        this.recovery = recovery;
        this.assertValidity();
      }
      // pair (bytes of r, bytes of s)
      static fromCompact(hex) {
        const l = CURVE.nByteLength;
        hex = ensureBytes("compactSignature", hex, l * 2);
        return new Signature2(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
      }
      // DER encoded ECDSA signature
      // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
      static fromDER(hex) {
        const { r, s } = DER.toSig(ensureBytes("DER", hex));
        return new Signature2(r, s);
      }
      assertValidity() {
        if (!isWithinCurveOrder(this.r))
          throw new Error("r must be 0 < r < CURVE.n");
        if (!isWithinCurveOrder(this.s))
          throw new Error("s must be 0 < s < CURVE.n");
      }
      addRecoveryBit(recovery) {
        return new Signature2(this.r, this.s, recovery);
      }
      recoverPublicKey(msgHash) {
        const { r, s, recovery: rec } = this;
        const h = bits2int_modN(ensureBytes("msgHash", msgHash));
        if (rec == null || ![0, 1, 2, 3].includes(rec))
          throw new Error("recovery id invalid");
        const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
        if (radj >= Fp2.ORDER)
          throw new Error("recovery id 2 or 3 invalid");
        const prefix = (rec & 1) === 0 ? "02" : "03";
        const R = Point.fromHex(prefix + numToNByteStr(radj));
        const ir = invN(radj);
        const u1 = modN(-h * ir);
        const u2 = modN(s * ir);
        const Q = Point.BASE.multiplyAndAddUnsafe(R, u1, u2);
        if (!Q)
          throw new Error("point at infinify");
        Q.assertValidity();
        return Q;
      }
      // Signatures should be low-s, to prevent malleability.
      hasHighS() {
        return isBiggerThanHalfOrder(this.s);
      }
      normalizeS() {
        return this.hasHighS() ? new Signature2(this.r, modN(-this.s), this.recovery) : this;
      }
      // DER-encoded
      toDERRawBytes() {
        return hexToBytes(this.toDERHex());
      }
      toDERHex() {
        return DER.hexFromSig({ r: this.r, s: this.s });
      }
      // padded bytes of r, then padded bytes of s
      toCompactRawBytes() {
        return hexToBytes(this.toCompactHex());
      }
      toCompactHex() {
        return numToNByteStr(this.r) + numToNByteStr(this.s);
      }
    }
    const utils2 = {
      isValidPrivateKey(privateKey) {
        try {
          normPrivateKeyToScalar(privateKey);
          return true;
        } catch (error) {
          return false;
        }
      },
      normPrivateKeyToScalar,
      /**
       * Produces cryptographically secure private key from random of size
       * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
       */
      randomPrivateKey: () => {
        const length = getMinHashLength(CURVE.n);
        return mapHashToField(CURVE.randomBytes(length), CURVE.n);
      },
      /**
       * Creates precompute table for an arbitrary EC point. Makes point "cached".
       * Allows to massively speed-up `point.multiply(scalar)`.
       * @returns cached point
       * @example
       * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
       * fast.multiply(privKey); // much faster ECDH now
       */
      precompute(windowSize = 8, point = Point.BASE) {
        point._setWindowSize(windowSize);
        point.multiply(BigInt(3));
        return point;
      }
    };
    function getPublicKey(privateKey, isCompressed = true) {
      return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
    }
    function isProbPub(item) {
      const arr = item instanceof Uint8Array;
      const str = typeof item === "string";
      const len = (arr || str) && item.length;
      if (arr)
        return len === compressedLen || len === uncompressedLen;
      if (str)
        return len === 2 * compressedLen || len === 2 * uncompressedLen;
      if (item instanceof Point)
        return true;
      return false;
    }
    function getSharedSecret(privateA, publicB, isCompressed = true) {
      if (isProbPub(privateA))
        throw new Error("first arg must be private key");
      if (!isProbPub(publicB))
        throw new Error("second arg must be public key");
      const b2 = Point.fromHex(publicB);
      return b2.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
    }
    const bits2int = CURVE.bits2int || function(bytes2) {
      const num = bytesToNumberBE(bytes2);
      const delta = bytes2.length * 8 - CURVE.nBitLength;
      return delta > 0 ? num >> BigInt(delta) : num;
    };
    const bits2int_modN = CURVE.bits2int_modN || function(bytes2) {
      return modN(bits2int(bytes2));
    };
    const ORDER_MASK = bitMask(CURVE.nBitLength);
    function int2octets(num) {
      if (typeof num !== "bigint")
        throw new Error("bigint expected");
      if (!(_0n <= num && num < ORDER_MASK))
        throw new Error(`bigint expected < 2^${CURVE.nBitLength}`);
      return numberToBytesBE(num, CURVE.nByteLength);
    }
    function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
      if (["recovered", "canonical"].some((k) => k in opts))
        throw new Error("sign() legacy options not supported");
      const { hash: hash2, randomBytes: randomBytes2 } = CURVE;
      let { lowS, prehash, extraEntropy: ent } = opts;
      if (lowS == null)
        lowS = true;
      msgHash = ensureBytes("msgHash", msgHash);
      if (prehash)
        msgHash = ensureBytes("prehashed msgHash", hash2(msgHash));
      const h1int = bits2int_modN(msgHash);
      const d = normPrivateKeyToScalar(privateKey);
      const seedArgs = [int2octets(d), int2octets(h1int)];
      if (ent != null) {
        const e = ent === true ? randomBytes2(Fp2.BYTES) : ent;
        seedArgs.push(ensureBytes("extraEntropy", e));
      }
      const seed = concatBytes(...seedArgs);
      const m = h1int;
      function k2sig(kBytes) {
        const k = bits2int(kBytes);
        if (!isWithinCurveOrder(k))
          return;
        const ik = invN(k);
        const q = Point.BASE.multiply(k).toAffine();
        const r = modN(q.x);
        if (r === _0n)
          return;
        const s = modN(ik * modN(m + r * d));
        if (s === _0n)
          return;
        let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n$1);
        let normS = s;
        if (lowS && isBiggerThanHalfOrder(s)) {
          normS = normalizeS(s);
          recovery ^= 1;
        }
        return new Signature2(r, normS, recovery);
      }
      return { seed, k2sig };
    }
    const defaultSigOpts = { lowS: CURVE.lowS, prehash: false };
    const defaultVerOpts = { lowS: CURVE.lowS, prehash: false };
    function sign(msgHash, privKey, opts = defaultSigOpts) {
      const { seed, k2sig } = prepSig(msgHash, privKey, opts);
      const C = CURVE;
      const drbg = createHmacDrbg(C.hash.outputLen, C.nByteLength, C.hmac);
      return drbg(seed, k2sig);
    }
    Point.BASE._setWindowSize(8);
    function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
      var _a2;
      const sg = signature;
      msgHash = ensureBytes("msgHash", msgHash);
      publicKey = ensureBytes("publicKey", publicKey);
      if ("strict" in opts)
        throw new Error("options.strict was renamed to lowS");
      const { lowS, prehash } = opts;
      let _sig2 = void 0;
      let P;
      try {
        if (typeof sg === "string" || sg instanceof Uint8Array) {
          try {
            _sig2 = Signature2.fromDER(sg);
          } catch (derError) {
            if (!(derError instanceof DER.Err))
              throw derError;
            _sig2 = Signature2.fromCompact(sg);
          }
        } else if (typeof sg === "object" && typeof sg.r === "bigint" && typeof sg.s === "bigint") {
          const { r: r2, s: s2 } = sg;
          _sig2 = new Signature2(r2, s2);
        } else {
          throw new Error("PARSE");
        }
        P = Point.fromHex(publicKey);
      } catch (error) {
        if (error.message === "PARSE")
          throw new Error(`signature must be Signature instance, Uint8Array or hex string`);
        return false;
      }
      if (lowS && _sig2.hasHighS())
        return false;
      if (prehash)
        msgHash = CURVE.hash(msgHash);
      const { r, s } = _sig2;
      const h = bits2int_modN(msgHash);
      const is = invN(s);
      const u1 = modN(h * is);
      const u2 = modN(r * is);
      const R = (_a2 = Point.BASE.multiplyAndAddUnsafe(P, u1, u2)) == null ? void 0 : _a2.toAffine();
      if (!R)
        return false;
      const v = modN(R.x);
      return v === r;
    }
    return {
      CURVE,
      getPublicKey,
      getSharedSecret,
      sign,
      verify,
      ProjectivePoint: Point,
      Signature: Signature2,
      utils: utils2
    };
  }
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  function getHash(hash2) {
    return {
      hash: hash2,
      hmac: (key, ...msgs) => hmac(hash2, key, concatBytes$1(...msgs)),
      randomBytes
    };
  }
  function createCurve(curveDef, defHash) {
    const create = (hash2) => weierstrass({ ...curveDef, ...getHash(hash2) });
    return Object.freeze({ ...create(defHash), create });
  }
  /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  const secp256k1P = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
  const secp256k1N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
  const _1n = BigInt(1);
  const _2n = BigInt(2);
  const divNearest = (a, b2) => (a + b2 / _2n) / b2;
  function sqrtMod(y) {
    const P = secp256k1P;
    const _3n2 = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
    const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
    const b2 = y * y * y % P;
    const b3 = b2 * b2 * y % P;
    const b6 = pow2(b3, _3n2, P) * b3 % P;
    const b9 = pow2(b6, _3n2, P) * b3 % P;
    const b11 = pow2(b9, _2n, P) * b2 % P;
    const b22 = pow2(b11, _11n, P) * b11 % P;
    const b44 = pow2(b22, _22n, P) * b22 % P;
    const b88 = pow2(b44, _44n, P) * b44 % P;
    const b176 = pow2(b88, _88n, P) * b88 % P;
    const b220 = pow2(b176, _44n, P) * b44 % P;
    const b223 = pow2(b220, _3n2, P) * b3 % P;
    const t1 = pow2(b223, _23n, P) * b22 % P;
    const t2 = pow2(t1, _6n, P) * b2 % P;
    const root = pow2(t2, _2n, P);
    if (!Fp.eql(Fp.sqr(root), y))
      throw new Error("Cannot find square root");
    return root;
  }
  const Fp = Field(secp256k1P, void 0, void 0, { sqrt: sqrtMod });
  const secp256k1 = createCurve({
    a: BigInt(0),
    b: BigInt(7),
    Fp,
    n: secp256k1N,
    // Base point (x, y) aka generator point
    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
    h: BigInt(1),
    lowS: true,
    /**
     * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
     * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
     * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
     * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
     */
    endo: {
      beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
      splitScalar: (k) => {
        const n2 = secp256k1N;
        const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
        const b1 = -_1n * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
        const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
        const b2 = a1;
        const POW_2_128 = BigInt("0x100000000000000000000000000000000");
        const c1 = divNearest(b2 * k, n2);
        const c2 = divNearest(-b1 * k, n2);
        let k1 = mod(k - c1 * a1 - c2 * a2, n2);
        let k2 = mod(-c1 * b1 - c2 * b2, n2);
        const k1neg = k1 > POW_2_128;
        const k2neg = k2 > POW_2_128;
        if (k1neg)
          k1 = n2 - k1;
        if (k2neg)
          k2 = n2 - k2;
        if (k1 > POW_2_128 || k2 > POW_2_128) {
          throw new Error("splitScalar: Endomorphism failed, k=" + k);
        }
        return { k1neg, k1, k2neg, k2 };
      }
    }
  }, sha256$1);
  BigInt(0);
  secp256k1.ProjectivePoint;
  const ZeroAddress = "0x0000000000000000000000000000000000000000";
  const ZeroHash = "0x0000000000000000000000000000000000000000000000000000000000000000";
  const BN_0$7 = BigInt(0);
  const BN_1$2 = BigInt(1);
  const BN_2$2 = BigInt(2);
  const BN_27$1 = BigInt(27);
  const BN_28$1 = BigInt(28);
  const BN_35$1 = BigInt(35);
  const _guard$1 = {};
  function toUint256(value) {
    return zeroPadValue(toBeArray(value), 32);
  }
  const _Signature = class _Signature {
    /**
     *  @private
     */
    constructor(guard, r, s, v) {
      __privateAdd(this, _r);
      __privateAdd(this, _s);
      __privateAdd(this, _v);
      __privateAdd(this, _networkV);
      assertPrivate(guard, _guard$1, "Signature");
      __privateSet(this, _r, r);
      __privateSet(this, _s, s);
      __privateSet(this, _v, v);
      __privateSet(this, _networkV, null);
    }
    /**
     *  The ``r`` value for a signautre.
     *
     *  This represents the ``x`` coordinate of a "reference" or
     *  challenge point, from which the ``y`` can be computed.
     */
    get r() {
      return __privateGet(this, _r);
    }
    set r(value) {
      assertArgument(dataLength(value) === 32, "invalid r", "value", value);
      __privateSet(this, _r, hexlify(value));
    }
    /**
     *  The ``s`` value for a signature.
     */
    get s() {
      return __privateGet(this, _s);
    }
    set s(_value2) {
      assertArgument(dataLength(_value2) === 32, "invalid s", "value", _value2);
      const value = hexlify(_value2);
      assertArgument(parseInt(value.substring(0, 3)) < 8, "non-canonical s", "value", value);
      __privateSet(this, _s, value);
    }
    /**
     *  The ``v`` value for a signature.
     *
     *  Since a given ``x`` value for ``r`` has two possible values for
     *  its correspondin ``y``, the ``v`` indicates which of the two ``y``
     *  values to use.
     *
     *  It is normalized to the values ``27`` or ``28`` for legacy
     *  purposes.
     */
    get v() {
      return __privateGet(this, _v);
    }
    set v(value) {
      const v = getNumber(value, "value");
      assertArgument(v === 27 || v === 28, "invalid v", "v", value);
      __privateSet(this, _v, v);
    }
    /**
     *  The EIP-155 ``v`` for legacy transactions. For non-legacy
     *  transactions, this value is ``null``.
     */
    get networkV() {
      return __privateGet(this, _networkV);
    }
    /**
     *  The chain ID for EIP-155 legacy transactions. For non-legacy
     *  transactions, this value is ``null``.
     */
    get legacyChainId() {
      const v = this.networkV;
      if (v == null) {
        return null;
      }
      return _Signature.getChainId(v);
    }
    /**
     *  The ``yParity`` for the signature.
     *
     *  See ``v`` for more details on how this value is used.
     */
    get yParity() {
      return this.v === 27 ? 0 : 1;
    }
    /**
     *  The [[link-eip-2098]] compact representation of the ``yParity``
     *  and ``s`` compacted into a single ``bytes32``.
     */
    get yParityAndS() {
      const yParityAndS = getBytes(this.s);
      if (this.yParity) {
        yParityAndS[0] |= 128;
      }
      return hexlify(yParityAndS);
    }
    /**
     *  The [[link-eip-2098]] compact representation.
     */
    get compactSerialized() {
      return concat([this.r, this.yParityAndS]);
    }
    /**
     *  The serialized representation.
     */
    get serialized() {
      return concat([this.r, this.s, this.yParity ? "0x1c" : "0x1b"]);
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return `Signature { r: "${this.r}", s: "${this.s}", yParity: ${this.yParity}, networkV: ${this.networkV} }`;
    }
    /**
     *  Returns a new identical [[Signature]].
     */
    clone() {
      const clone = new _Signature(_guard$1, this.r, this.s, this.v);
      if (this.networkV) {
        __privateSet(clone, _networkV, this.networkV);
      }
      return clone;
    }
    /**
     *  Returns a representation that is compatible with ``JSON.stringify``.
     */
    toJSON() {
      const networkV = this.networkV;
      return {
        _type: "signature",
        networkV: networkV != null ? networkV.toString() : null,
        r: this.r,
        s: this.s,
        v: this.v
      };
    }
    /**
     *  Compute the chain ID from the ``v`` in a legacy EIP-155 transactions.
     *
     *  @example:
     *    Signature.getChainId(45)
     *    //_result:
     *
     *    Signature.getChainId(46)
     *    //_result:
     */
    static getChainId(v) {
      const bv = getBigInt(v, "v");
      if (bv == BN_27$1 || bv == BN_28$1) {
        return BN_0$7;
      }
      assertArgument(bv >= BN_35$1, "invalid EIP-155 v", "v", v);
      return (bv - BN_35$1) / BN_2$2;
    }
    /**
     *  Compute the ``v`` for a chain ID for a legacy EIP-155 transactions.
     *
     *  Legacy transactions which use [[link-eip-155]] hijack the ``v``
     *  property to include the chain ID.
     *
     *  @example:
     *    Signature.getChainIdV(5, 27)
     *    //_result:
     *
     *    Signature.getChainIdV(5, 28)
     *    //_result:
     *
     */
    static getChainIdV(chainId, v) {
      return getBigInt(chainId) * BN_2$2 + BigInt(35 + v - 27);
    }
    /**
     *  Compute the normalized legacy transaction ``v`` from a ``yParirty``,
     *  a legacy transaction ``v`` or a legacy [[link-eip-155]] transaction.
     *
     *  @example:
     *    // The values 0 and 1 imply v is actually yParity
     *    Signature.getNormalizedV(0)
     *    //_result:
     *
     *    // Legacy non-EIP-1559 transaction (i.e. 27 or 28)
     *    Signature.getNormalizedV(27)
     *    //_result:
     *
     *    // Legacy EIP-155 transaction (i.e. >= 35)
     *    Signature.getNormalizedV(46)
     *    //_result:
     *
     *    // Invalid values throw
     *    Signature.getNormalizedV(5)
     *    //_error:
     */
    static getNormalizedV(v) {
      const bv = getBigInt(v);
      if (bv === BN_0$7 || bv === BN_27$1) {
        return 27;
      }
      if (bv === BN_1$2 || bv === BN_28$1) {
        return 28;
      }
      assertArgument(bv >= BN_35$1, "invalid v", "v", v);
      return bv & BN_1$2 ? 27 : 28;
    }
    /**
     *  Creates a new [[Signature]].
     *
     *  If no %%sig%% is provided, a new [[Signature]] is created
     *  with default values.
     *
     *  If %%sig%% is a string, it is parsed.
     */
    static from(sig) {
      function assertError(check, message) {
        assertArgument(check, message, "signature", sig);
      }
      if (sig == null) {
        return new _Signature(_guard$1, ZeroHash, ZeroHash, 27);
      }
      if (typeof sig === "string") {
        const bytes2 = getBytes(sig, "signature");
        if (bytes2.length === 64) {
          const r2 = hexlify(bytes2.slice(0, 32));
          const s2 = bytes2.slice(32, 64);
          const v2 = s2[0] & 128 ? 28 : 27;
          s2[0] &= 127;
          return new _Signature(_guard$1, r2, hexlify(s2), v2);
        }
        if (bytes2.length === 65) {
          const r2 = hexlify(bytes2.slice(0, 32));
          const s2 = bytes2.slice(32, 64);
          assertError((s2[0] & 128) === 0, "non-canonical s");
          const v2 = _Signature.getNormalizedV(bytes2[64]);
          return new _Signature(_guard$1, r2, hexlify(s2), v2);
        }
        assertError(false, "invalid raw signature length");
      }
      if (sig instanceof _Signature) {
        return sig.clone();
      }
      const _r2 = sig.r;
      assertError(_r2 != null, "missing r");
      const r = toUint256(_r2);
      const s = function(s2, yParityAndS) {
        if (s2 != null) {
          return toUint256(s2);
        }
        if (yParityAndS != null) {
          assertError(isHexString(yParityAndS, 32), "invalid yParityAndS");
          const bytes2 = getBytes(yParityAndS);
          bytes2[0] &= 127;
          return hexlify(bytes2);
        }
        assertError(false, "missing s");
      }(sig.s, sig.yParityAndS);
      assertError((getBytes(s)[0] & 128) == 0, "non-canonical s");
      const { networkV, v } = function(_v2, yParityAndS, yParity) {
        if (_v2 != null) {
          const v2 = getBigInt(_v2);
          return {
            networkV: v2 >= BN_35$1 ? v2 : void 0,
            v: _Signature.getNormalizedV(v2)
          };
        }
        if (yParityAndS != null) {
          assertError(isHexString(yParityAndS, 32), "invalid yParityAndS");
          return { v: getBytes(yParityAndS)[0] & 128 ? 28 : 27 };
        }
        if (yParity != null) {
          switch (getNumber(yParity, "sig.yParity")) {
            case 0:
              return { v: 27 };
            case 1:
              return { v: 28 };
          }
          assertError(false, "invalid yParity");
        }
        assertError(false, "missing v");
      }(sig.v, sig.yParityAndS, sig.yParity);
      const result = new _Signature(_guard$1, r, s, v);
      if (networkV) {
        __privateSet(result, _networkV, networkV);
      }
      assertError(sig.yParity == null || getNumber(sig.yParity, "sig.yParity") === result.yParity, "yParity mismatch");
      assertError(sig.yParityAndS == null || sig.yParityAndS === result.yParityAndS, "yParityAndS mismatch");
      return result;
    }
  };
  _r = new WeakMap();
  _s = new WeakMap();
  _v = new WeakMap();
  _networkV = new WeakMap();
  let Signature = _Signature;
  const _SigningKey = class _SigningKey {
    /**
     *  Creates a new **SigningKey** for %%privateKey%%.
     */
    constructor(privateKey) {
      __privateAdd(this, _privateKey);
      assertArgument(dataLength(privateKey) === 32, "invalid private key", "privateKey", "[REDACTED]");
      __privateSet(this, _privateKey, hexlify(privateKey));
    }
    /**
     *  The private key.
     */
    get privateKey() {
      return __privateGet(this, _privateKey);
    }
    /**
     *  The uncompressed public key.
     *
     * This will always begin with the prefix ``0x04`` and be 132
     * characters long (the ``0x`` prefix and 130 hexadecimal nibbles).
     */
    get publicKey() {
      return _SigningKey.computePublicKey(__privateGet(this, _privateKey));
    }
    /**
     *  The compressed public key.
     *
     *  This will always begin with either the prefix ``0x02`` or ``0x03``
     *  and be 68 characters long (the ``0x`` prefix and 33 hexadecimal
     *  nibbles)
     */
    get compressedPublicKey() {
      return _SigningKey.computePublicKey(__privateGet(this, _privateKey), true);
    }
    /**
     *  Return the signature of the signed %%digest%%.
     */
    sign(digest) {
      assertArgument(dataLength(digest) === 32, "invalid digest length", "digest", digest);
      const sig = secp256k1.sign(getBytesCopy(digest), getBytesCopy(__privateGet(this, _privateKey)), {
        lowS: true
      });
      return Signature.from({
        r: toBeHex(sig.r, 32),
        s: toBeHex(sig.s, 32),
        v: sig.recovery ? 28 : 27
      });
    }
    /**
     *  Returns the [[link-wiki-ecdh]] shared secret between this
     *  private key and the %%other%% key.
     *
     *  The %%other%% key may be any type of key, a raw public key,
     *  a compressed/uncompressed pubic key or aprivate key.
     *
     *  Best practice is usually to use a cryptographic hash on the
     *  returned value before using it as a symetric secret.
     *
     *  @example:
     *    sign1 = new SigningKey(id("some-secret-1"))
     *    sign2 = new SigningKey(id("some-secret-2"))
     *
     *    // Notice that privA.computeSharedSecret(pubB)...
     *    sign1.computeSharedSecret(sign2.publicKey)
     *    //_result:
     *
     *    // ...is equal to privB.computeSharedSecret(pubA).
     *    sign2.computeSharedSecret(sign1.publicKey)
     *    //_result:
     */
    computeSharedSecret(other) {
      const pubKey = _SigningKey.computePublicKey(other);
      return hexlify(secp256k1.getSharedSecret(getBytesCopy(__privateGet(this, _privateKey)), getBytes(pubKey), false));
    }
    /**
     *  Compute the public key for %%key%%, optionally %%compressed%%.
     *
     *  The %%key%% may be any type of key, a raw public key, a
     *  compressed/uncompressed public key or private key.
     *
     *  @example:
     *    sign = new SigningKey(id("some-secret"));
     *
     *    // Compute the uncompressed public key for a private key
     *    SigningKey.computePublicKey(sign.privateKey)
     *    //_result:
     *
     *    // Compute the compressed public key for a private key
     *    SigningKey.computePublicKey(sign.privateKey, true)
     *    //_result:
     *
     *    // Compute the uncompressed public key
     *    SigningKey.computePublicKey(sign.publicKey, false);
     *    //_result:
     *
     *    // Compute the Compressed a public key
     *    SigningKey.computePublicKey(sign.publicKey, true);
     *    //_result:
     */
    static computePublicKey(key, compressed) {
      let bytes2 = getBytes(key, "key");
      if (bytes2.length === 32) {
        const pubKey = secp256k1.getPublicKey(bytes2, !!compressed);
        return hexlify(pubKey);
      }
      if (bytes2.length === 64) {
        const pub = new Uint8Array(65);
        pub[0] = 4;
        pub.set(bytes2, 1);
        bytes2 = pub;
      }
      const point = secp256k1.ProjectivePoint.fromHex(bytes2);
      return hexlify(point.toRawBytes(compressed));
    }
    /**
     *  Returns the public key for the private key which produced the
     *  %%signature%% for the given %%digest%%.
     *
     *  @example:
     *    key = new SigningKey(id("some-secret"))
     *    digest = id("hello world")
     *    sig = key.sign(digest)
     *
     *    // Notice the signer public key...
     *    key.publicKey
     *    //_result:
     *
     *    // ...is equal to the recovered public key
     *    SigningKey.recoverPublicKey(digest, sig)
     *    //_result:
     *
     */
    static recoverPublicKey(digest, signature) {
      assertArgument(dataLength(digest) === 32, "invalid digest length", "digest", digest);
      const sig = Signature.from(signature);
      let secpSig = secp256k1.Signature.fromCompact(getBytesCopy(concat([sig.r, sig.s])));
      secpSig = secpSig.addRecoveryBit(sig.yParity);
      const pubKey = secpSig.recoverPublicKey(getBytesCopy(digest));
      assertArgument(pubKey != null, "invalid signautre for digest", "signature", signature);
      return "0x" + pubKey.toHex(false);
    }
    /**
     *  Returns the point resulting from adding the ellipic curve points
     *  %%p0%% and %%p1%%.
     *
     *  This is not a common function most developers should require, but
     *  can be useful for certain privacy-specific techniques.
     *
     *  For example, it is used by [[HDNodeWallet]] to compute child
     *  addresses from parent public keys and chain codes.
     */
    static addPoints(p0, p1, compressed) {
      const pub0 = secp256k1.ProjectivePoint.fromHex(_SigningKey.computePublicKey(p0).substring(2));
      const pub1 = secp256k1.ProjectivePoint.fromHex(_SigningKey.computePublicKey(p1).substring(2));
      return "0x" + pub0.add(pub1).toHex(!!compressed);
    }
  };
  _privateKey = new WeakMap();
  let SigningKey = _SigningKey;
  const BN_0$6 = BigInt(0);
  const BN_36 = BigInt(36);
  function getChecksumAddress(address) {
    address = address.toLowerCase();
    const chars = address.substring(2).split("");
    const expanded = new Uint8Array(40);
    for (let i = 0; i < 40; i++) {
      expanded[i] = chars[i].charCodeAt(0);
    }
    const hashed = getBytes(keccak256(expanded));
    for (let i = 0; i < 40; i += 2) {
      if (hashed[i >> 1] >> 4 >= 8) {
        chars[i] = chars[i].toUpperCase();
      }
      if ((hashed[i >> 1] & 15) >= 8) {
        chars[i + 1] = chars[i + 1].toUpperCase();
      }
    }
    return "0x" + chars.join("");
  }
  const ibanLookup = {};
  for (let i = 0; i < 10; i++) {
    ibanLookup[String(i)] = String(i);
  }
  for (let i = 0; i < 26; i++) {
    ibanLookup[String.fromCharCode(65 + i)] = String(10 + i);
  }
  const safeDigits = 15;
  function ibanChecksum(address) {
    address = address.toUpperCase();
    address = address.substring(4) + address.substring(0, 2) + "00";
    let expanded = address.split("").map((c) => {
      return ibanLookup[c];
    }).join("");
    while (expanded.length >= safeDigits) {
      let block = expanded.substring(0, safeDigits);
      expanded = parseInt(block, 10) % 97 + expanded.substring(block.length);
    }
    let checksum = String(98 - parseInt(expanded, 10) % 97);
    while (checksum.length < 2) {
      checksum = "0" + checksum;
    }
    return checksum;
  }
  const Base36 = function() {
    const result = {};
    for (let i = 0; i < 36; i++) {
      const key = "0123456789abcdefghijklmnopqrstuvwxyz"[i];
      result[key] = BigInt(i);
    }
    return result;
  }();
  function fromBase36(value) {
    value = value.toLowerCase();
    let result = BN_0$6;
    for (let i = 0; i < value.length; i++) {
      result = result * BN_36 + Base36[value[i]];
    }
    return result;
  }
  function getAddress(address) {
    assertArgument(typeof address === "string", "invalid address", "address", address);
    if (address.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
      if (!address.startsWith("0x")) {
        address = "0x" + address;
      }
      const result = getChecksumAddress(address);
      assertArgument(!address.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || result === address, "bad address checksum", "address", address);
      return result;
    }
    if (address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
      assertArgument(address.substring(2, 4) === ibanChecksum(address), "bad icap checksum", "address", address);
      let result = fromBase36(address.substring(4)).toString(16);
      while (result.length < 40) {
        result = "0" + result;
      }
      return getChecksumAddress("0x" + result);
    }
    assertArgument(false, "invalid address", "address", address);
  }
  function getCreateAddress(tx) {
    const from = getAddress(tx.from);
    const nonce = getBigInt(tx.nonce, "tx.nonce");
    let nonceHex = nonce.toString(16);
    if (nonceHex === "0") {
      nonceHex = "0x";
    } else if (nonceHex.length % 2) {
      nonceHex = "0x0" + nonceHex;
    } else {
      nonceHex = "0x" + nonceHex;
    }
    return getAddress(dataSlice(keccak256(encodeRlp([from, nonceHex])), 12));
  }
  function isAddressable(value) {
    return value && typeof value.getAddress === "function";
  }
  async function checkAddress(target, promise) {
    const result = await promise;
    if (result == null || result === "0x0000000000000000000000000000000000000000") {
      assert(typeof target !== "string", "unconfigured name", "UNCONFIGURED_NAME", { value: target });
      assertArgument(false, "invalid AddressLike value; did not resolve to a value address", "target", target);
    }
    return getAddress(result);
  }
  function resolveAddress(target, resolver) {
    if (typeof target === "string") {
      if (target.match(/^0x[0-9a-f]{40}$/i)) {
        return getAddress(target);
      }
      assert(resolver != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", { operation: "resolveName" });
      return checkAddress(target, resolver.resolveName(target));
    } else if (isAddressable(target)) {
      return checkAddress(target, target.getAddress());
    } else if (target && typeof target.then === "function") {
      return checkAddress(target, target);
    }
    assertArgument(false, "unsupported addressable value", "target", target);
  }
  const _gaurd = {};
  function n(value, width) {
    let signed2 = false;
    if (width < 0) {
      signed2 = true;
      width *= -1;
    }
    return new Typed(_gaurd, `${signed2 ? "" : "u"}int${width}`, value, { signed: signed2, width });
  }
  function b(value, size) {
    return new Typed(_gaurd, `bytes${size ? size : ""}`, value, { size });
  }
  const _typedSymbol = Symbol.for("_ethers_typed");
  const _Typed = class _Typed {
    /**
     *  @_ignore:
     */
    constructor(gaurd, type, value, options) {
      /**
       *  The type, as a Solidity-compatible type.
       */
      __publicField(this, "type");
      /**
       *  The actual value.
       */
      __publicField(this, "value");
      __privateAdd(this, _options);
      /**
       *  @_ignore:
       */
      __publicField(this, "_typedSymbol");
      if (options == null) {
        options = null;
      }
      assertPrivate(_gaurd, gaurd, "Typed");
      defineProperties(this, { _typedSymbol, type, value });
      __privateSet(this, _options, options);
      this.format();
    }
    /**
     *  Format the type as a Human-Readable type.
     */
    format() {
      if (this.type === "array") {
        throw new Error("");
      } else if (this.type === "dynamicArray") {
        throw new Error("");
      } else if (this.type === "tuple") {
        return `tuple(${this.value.map((v) => v.format()).join(",")})`;
      }
      return this.type;
    }
    /**
     *  The default value returned by this type.
     */
    defaultValue() {
      return 0;
    }
    /**
     *  The minimum value for numeric types.
     */
    minValue() {
      return 0;
    }
    /**
     *  The maximum value for numeric types.
     */
    maxValue() {
      return 0;
    }
    /**
     *  Returns ``true`` and provides a type guard is this is a [[TypedBigInt]].
     */
    isBigInt() {
      return !!this.type.match(/^u?int[0-9]+$/);
    }
    /**
     *  Returns ``true`` and provides a type guard is this is a [[TypedData]].
     */
    isData() {
      return this.type.startsWith("bytes");
    }
    /**
     *  Returns ``true`` and provides a type guard is this is a [[TypedString]].
     */
    isString() {
      return this.type === "string";
    }
    /**
     *  Returns the tuple name, if this is a tuple. Throws otherwise.
     */
    get tupleName() {
      if (this.type !== "tuple") {
        throw TypeError("not a tuple");
      }
      return __privateGet(this, _options);
    }
    // Returns the length of this type as an array
    // - `null` indicates the length is unforced, it could be dynamic
    // - `-1` indicates the length is dynamic
    // - any other value indicates it is a static array and is its length
    /**
     *  Returns the length of the array type or ``-1`` if it is dynamic.
     *
     *  Throws if the type is not an array.
     */
    get arrayLength() {
      if (this.type !== "array") {
        throw TypeError("not an array");
      }
      if (__privateGet(this, _options) === true) {
        return -1;
      }
      if (__privateGet(this, _options) === false) {
        return this.value.length;
      }
      return null;
    }
    /**
     *  Returns a new **Typed** of %%type%% with the %%value%%.
     */
    static from(type, value) {
      return new _Typed(_gaurd, type, value);
    }
    /**
     *  Return a new ``uint8`` type for %%v%%.
     */
    static uint8(v) {
      return n(v, 8);
    }
    /**
     *  Return a new ``uint16`` type for %%v%%.
     */
    static uint16(v) {
      return n(v, 16);
    }
    /**
     *  Return a new ``uint24`` type for %%v%%.
     */
    static uint24(v) {
      return n(v, 24);
    }
    /**
     *  Return a new ``uint32`` type for %%v%%.
     */
    static uint32(v) {
      return n(v, 32);
    }
    /**
     *  Return a new ``uint40`` type for %%v%%.
     */
    static uint40(v) {
      return n(v, 40);
    }
    /**
     *  Return a new ``uint48`` type for %%v%%.
     */
    static uint48(v) {
      return n(v, 48);
    }
    /**
     *  Return a new ``uint56`` type for %%v%%.
     */
    static uint56(v) {
      return n(v, 56);
    }
    /**
     *  Return a new ``uint64`` type for %%v%%.
     */
    static uint64(v) {
      return n(v, 64);
    }
    /**
     *  Return a new ``uint72`` type for %%v%%.
     */
    static uint72(v) {
      return n(v, 72);
    }
    /**
     *  Return a new ``uint80`` type for %%v%%.
     */
    static uint80(v) {
      return n(v, 80);
    }
    /**
     *  Return a new ``uint88`` type for %%v%%.
     */
    static uint88(v) {
      return n(v, 88);
    }
    /**
     *  Return a new ``uint96`` type for %%v%%.
     */
    static uint96(v) {
      return n(v, 96);
    }
    /**
     *  Return a new ``uint104`` type for %%v%%.
     */
    static uint104(v) {
      return n(v, 104);
    }
    /**
     *  Return a new ``uint112`` type for %%v%%.
     */
    static uint112(v) {
      return n(v, 112);
    }
    /**
     *  Return a new ``uint120`` type for %%v%%.
     */
    static uint120(v) {
      return n(v, 120);
    }
    /**
     *  Return a new ``uint128`` type for %%v%%.
     */
    static uint128(v) {
      return n(v, 128);
    }
    /**
     *  Return a new ``uint136`` type for %%v%%.
     */
    static uint136(v) {
      return n(v, 136);
    }
    /**
     *  Return a new ``uint144`` type for %%v%%.
     */
    static uint144(v) {
      return n(v, 144);
    }
    /**
     *  Return a new ``uint152`` type for %%v%%.
     */
    static uint152(v) {
      return n(v, 152);
    }
    /**
     *  Return a new ``uint160`` type for %%v%%.
     */
    static uint160(v) {
      return n(v, 160);
    }
    /**
     *  Return a new ``uint168`` type for %%v%%.
     */
    static uint168(v) {
      return n(v, 168);
    }
    /**
     *  Return a new ``uint176`` type for %%v%%.
     */
    static uint176(v) {
      return n(v, 176);
    }
    /**
     *  Return a new ``uint184`` type for %%v%%.
     */
    static uint184(v) {
      return n(v, 184);
    }
    /**
     *  Return a new ``uint192`` type for %%v%%.
     */
    static uint192(v) {
      return n(v, 192);
    }
    /**
     *  Return a new ``uint200`` type for %%v%%.
     */
    static uint200(v) {
      return n(v, 200);
    }
    /**
     *  Return a new ``uint208`` type for %%v%%.
     */
    static uint208(v) {
      return n(v, 208);
    }
    /**
     *  Return a new ``uint216`` type for %%v%%.
     */
    static uint216(v) {
      return n(v, 216);
    }
    /**
     *  Return a new ``uint224`` type for %%v%%.
     */
    static uint224(v) {
      return n(v, 224);
    }
    /**
     *  Return a new ``uint232`` type for %%v%%.
     */
    static uint232(v) {
      return n(v, 232);
    }
    /**
     *  Return a new ``uint240`` type for %%v%%.
     */
    static uint240(v) {
      return n(v, 240);
    }
    /**
     *  Return a new ``uint248`` type for %%v%%.
     */
    static uint248(v) {
      return n(v, 248);
    }
    /**
     *  Return a new ``uint256`` type for %%v%%.
     */
    static uint256(v) {
      return n(v, 256);
    }
    /**
     *  Return a new ``uint256`` type for %%v%%.
     */
    static uint(v) {
      return n(v, 256);
    }
    /**
     *  Return a new ``int8`` type for %%v%%.
     */
    static int8(v) {
      return n(v, -8);
    }
    /**
     *  Return a new ``int16`` type for %%v%%.
     */
    static int16(v) {
      return n(v, -16);
    }
    /**
     *  Return a new ``int24`` type for %%v%%.
     */
    static int24(v) {
      return n(v, -24);
    }
    /**
     *  Return a new ``int32`` type for %%v%%.
     */
    static int32(v) {
      return n(v, -32);
    }
    /**
     *  Return a new ``int40`` type for %%v%%.
     */
    static int40(v) {
      return n(v, -40);
    }
    /**
     *  Return a new ``int48`` type for %%v%%.
     */
    static int48(v) {
      return n(v, -48);
    }
    /**
     *  Return a new ``int56`` type for %%v%%.
     */
    static int56(v) {
      return n(v, -56);
    }
    /**
     *  Return a new ``int64`` type for %%v%%.
     */
    static int64(v) {
      return n(v, -64);
    }
    /**
     *  Return a new ``int72`` type for %%v%%.
     */
    static int72(v) {
      return n(v, -72);
    }
    /**
     *  Return a new ``int80`` type for %%v%%.
     */
    static int80(v) {
      return n(v, -80);
    }
    /**
     *  Return a new ``int88`` type for %%v%%.
     */
    static int88(v) {
      return n(v, -88);
    }
    /**
     *  Return a new ``int96`` type for %%v%%.
     */
    static int96(v) {
      return n(v, -96);
    }
    /**
     *  Return a new ``int104`` type for %%v%%.
     */
    static int104(v) {
      return n(v, -104);
    }
    /**
     *  Return a new ``int112`` type for %%v%%.
     */
    static int112(v) {
      return n(v, -112);
    }
    /**
     *  Return a new ``int120`` type for %%v%%.
     */
    static int120(v) {
      return n(v, -120);
    }
    /**
     *  Return a new ``int128`` type for %%v%%.
     */
    static int128(v) {
      return n(v, -128);
    }
    /**
     *  Return a new ``int136`` type for %%v%%.
     */
    static int136(v) {
      return n(v, -136);
    }
    /**
     *  Return a new ``int144`` type for %%v%%.
     */
    static int144(v) {
      return n(v, -144);
    }
    /**
     *  Return a new ``int52`` type for %%v%%.
     */
    static int152(v) {
      return n(v, -152);
    }
    /**
     *  Return a new ``int160`` type for %%v%%.
     */
    static int160(v) {
      return n(v, -160);
    }
    /**
     *  Return a new ``int168`` type for %%v%%.
     */
    static int168(v) {
      return n(v, -168);
    }
    /**
     *  Return a new ``int176`` type for %%v%%.
     */
    static int176(v) {
      return n(v, -176);
    }
    /**
     *  Return a new ``int184`` type for %%v%%.
     */
    static int184(v) {
      return n(v, -184);
    }
    /**
     *  Return a new ``int92`` type for %%v%%.
     */
    static int192(v) {
      return n(v, -192);
    }
    /**
     *  Return a new ``int200`` type for %%v%%.
     */
    static int200(v) {
      return n(v, -200);
    }
    /**
     *  Return a new ``int208`` type for %%v%%.
     */
    static int208(v) {
      return n(v, -208);
    }
    /**
     *  Return a new ``int216`` type for %%v%%.
     */
    static int216(v) {
      return n(v, -216);
    }
    /**
     *  Return a new ``int224`` type for %%v%%.
     */
    static int224(v) {
      return n(v, -224);
    }
    /**
     *  Return a new ``int232`` type for %%v%%.
     */
    static int232(v) {
      return n(v, -232);
    }
    /**
     *  Return a new ``int240`` type for %%v%%.
     */
    static int240(v) {
      return n(v, -240);
    }
    /**
     *  Return a new ``int248`` type for %%v%%.
     */
    static int248(v) {
      return n(v, -248);
    }
    /**
     *  Return a new ``int256`` type for %%v%%.
     */
    static int256(v) {
      return n(v, -256);
    }
    /**
     *  Return a new ``int256`` type for %%v%%.
     */
    static int(v) {
      return n(v, -256);
    }
    /**
     *  Return a new ``bytes1`` type for %%v%%.
     */
    static bytes1(v) {
      return b(v, 1);
    }
    /**
     *  Return a new ``bytes2`` type for %%v%%.
     */
    static bytes2(v) {
      return b(v, 2);
    }
    /**
     *  Return a new ``bytes3`` type for %%v%%.
     */
    static bytes3(v) {
      return b(v, 3);
    }
    /**
     *  Return a new ``bytes4`` type for %%v%%.
     */
    static bytes4(v) {
      return b(v, 4);
    }
    /**
     *  Return a new ``bytes5`` type for %%v%%.
     */
    static bytes5(v) {
      return b(v, 5);
    }
    /**
     *  Return a new ``bytes6`` type for %%v%%.
     */
    static bytes6(v) {
      return b(v, 6);
    }
    /**
     *  Return a new ``bytes7`` type for %%v%%.
     */
    static bytes7(v) {
      return b(v, 7);
    }
    /**
     *  Return a new ``bytes8`` type for %%v%%.
     */
    static bytes8(v) {
      return b(v, 8);
    }
    /**
     *  Return a new ``bytes9`` type for %%v%%.
     */
    static bytes9(v) {
      return b(v, 9);
    }
    /**
     *  Return a new ``bytes10`` type for %%v%%.
     */
    static bytes10(v) {
      return b(v, 10);
    }
    /**
     *  Return a new ``bytes11`` type for %%v%%.
     */
    static bytes11(v) {
      return b(v, 11);
    }
    /**
     *  Return a new ``bytes12`` type for %%v%%.
     */
    static bytes12(v) {
      return b(v, 12);
    }
    /**
     *  Return a new ``bytes13`` type for %%v%%.
     */
    static bytes13(v) {
      return b(v, 13);
    }
    /**
     *  Return a new ``bytes14`` type for %%v%%.
     */
    static bytes14(v) {
      return b(v, 14);
    }
    /**
     *  Return a new ``bytes15`` type for %%v%%.
     */
    static bytes15(v) {
      return b(v, 15);
    }
    /**
     *  Return a new ``bytes16`` type for %%v%%.
     */
    static bytes16(v) {
      return b(v, 16);
    }
    /**
     *  Return a new ``bytes17`` type for %%v%%.
     */
    static bytes17(v) {
      return b(v, 17);
    }
    /**
     *  Return a new ``bytes18`` type for %%v%%.
     */
    static bytes18(v) {
      return b(v, 18);
    }
    /**
     *  Return a new ``bytes19`` type for %%v%%.
     */
    static bytes19(v) {
      return b(v, 19);
    }
    /**
     *  Return a new ``bytes20`` type for %%v%%.
     */
    static bytes20(v) {
      return b(v, 20);
    }
    /**
     *  Return a new ``bytes21`` type for %%v%%.
     */
    static bytes21(v) {
      return b(v, 21);
    }
    /**
     *  Return a new ``bytes22`` type for %%v%%.
     */
    static bytes22(v) {
      return b(v, 22);
    }
    /**
     *  Return a new ``bytes23`` type for %%v%%.
     */
    static bytes23(v) {
      return b(v, 23);
    }
    /**
     *  Return a new ``bytes24`` type for %%v%%.
     */
    static bytes24(v) {
      return b(v, 24);
    }
    /**
     *  Return a new ``bytes25`` type for %%v%%.
     */
    static bytes25(v) {
      return b(v, 25);
    }
    /**
     *  Return a new ``bytes26`` type for %%v%%.
     */
    static bytes26(v) {
      return b(v, 26);
    }
    /**
     *  Return a new ``bytes27`` type for %%v%%.
     */
    static bytes27(v) {
      return b(v, 27);
    }
    /**
     *  Return a new ``bytes28`` type for %%v%%.
     */
    static bytes28(v) {
      return b(v, 28);
    }
    /**
     *  Return a new ``bytes29`` type for %%v%%.
     */
    static bytes29(v) {
      return b(v, 29);
    }
    /**
     *  Return a new ``bytes30`` type for %%v%%.
     */
    static bytes30(v) {
      return b(v, 30);
    }
    /**
     *  Return a new ``bytes31`` type for %%v%%.
     */
    static bytes31(v) {
      return b(v, 31);
    }
    /**
     *  Return a new ``bytes32`` type for %%v%%.
     */
    static bytes32(v) {
      return b(v, 32);
    }
    /**
     *  Return a new ``address`` type for %%v%%.
     */
    static address(v) {
      return new _Typed(_gaurd, "address", v);
    }
    /**
     *  Return a new ``bool`` type for %%v%%.
     */
    static bool(v) {
      return new _Typed(_gaurd, "bool", !!v);
    }
    /**
     *  Return a new ``bytes`` type for %%v%%.
     */
    static bytes(v) {
      return new _Typed(_gaurd, "bytes", v);
    }
    /**
     *  Return a new ``string`` type for %%v%%.
     */
    static string(v) {
      return new _Typed(_gaurd, "string", v);
    }
    /**
     *  Return a new ``array`` type for %%v%%, allowing %%dynamic%% length.
     */
    static array(v, dynamic) {
      throw new Error("not implemented yet");
    }
    /**
     *  Return a new ``tuple`` type for %%v%%, with the optional %%name%%.
     */
    static tuple(v, name) {
      throw new Error("not implemented yet");
    }
    /**
     *  Return a new ``uint8`` type for %%v%%.
     */
    static overrides(v) {
      return new _Typed(_gaurd, "overrides", Object.assign({}, v));
    }
    /**
     *  Returns true only if %%value%% is a [[Typed]] instance.
     */
    static isTyped(value) {
      return value && typeof value === "object" && "_typedSymbol" in value && value._typedSymbol === _typedSymbol;
    }
    /**
     *  If the value is a [[Typed]] instance, validates the underlying value
     *  and returns it, otherwise returns value directly.
     *
     *  This is useful for functions that with to accept either a [[Typed]]
     *  object or values.
     */
    static dereference(value, type) {
      if (_Typed.isTyped(value)) {
        if (value.type !== type) {
          throw new Error(`invalid type: expecetd ${type}, got ${value.type}`);
        }
        return value.value;
      }
      return value;
    }
  };
  _options = new WeakMap();
  let Typed = _Typed;
  class AddressCoder extends Coder {
    constructor(localName) {
      super("address", "address", localName, false);
    }
    defaultValue() {
      return "0x0000000000000000000000000000000000000000";
    }
    encode(writer, _value2) {
      let value = Typed.dereference(_value2, "string");
      try {
        value = getAddress(value);
      } catch (error) {
        return this._throwError(error.message, _value2);
      }
      return writer.writeValue(value);
    }
    decode(reader) {
      return getAddress(toBeHex(reader.readValue(), 20));
    }
  }
  class AnonymousCoder extends Coder {
    constructor(coder) {
      super(coder.name, coder.type, "_", coder.dynamic);
      __publicField(this, "coder");
      this.coder = coder;
    }
    defaultValue() {
      return this.coder.defaultValue();
    }
    encode(writer, value) {
      return this.coder.encode(writer, value);
    }
    decode(reader) {
      return this.coder.decode(reader);
    }
  }
  function pack(writer, coders, values) {
    let arrayValues = [];
    if (Array.isArray(values)) {
      arrayValues = values;
    } else if (values && typeof values === "object") {
      let unique2 = {};
      arrayValues = coders.map((coder) => {
        const name = coder.localName;
        assert(name, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", { argument: "values", info: { coder }, value: values });
        assert(!unique2[name], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", { argument: "values", info: { coder }, value: values });
        unique2[name] = true;
        return values[name];
      });
    } else {
      assertArgument(false, "invalid tuple value", "tuple", values);
    }
    assertArgument(coders.length === arrayValues.length, "types/value length mismatch", "tuple", values);
    let staticWriter = new Writer();
    let dynamicWriter = new Writer();
    let updateFuncs = [];
    coders.forEach((coder, index) => {
      let value = arrayValues[index];
      if (coder.dynamic) {
        let dynamicOffset = dynamicWriter.length;
        coder.encode(dynamicWriter, value);
        let updateFunc = staticWriter.writeUpdatableValue();
        updateFuncs.push((baseOffset) => {
          updateFunc(baseOffset + dynamicOffset);
        });
      } else {
        coder.encode(staticWriter, value);
      }
    });
    updateFuncs.forEach((func) => {
      func(staticWriter.length);
    });
    let length = writer.appendWriter(staticWriter);
    length += writer.appendWriter(dynamicWriter);
    return length;
  }
  function unpack(reader, coders) {
    let values = [];
    let keys = [];
    let baseReader = reader.subReader(0);
    coders.forEach((coder) => {
      let value = null;
      if (coder.dynamic) {
        let offset = reader.readIndex();
        let offsetReader = baseReader.subReader(offset);
        try {
          value = coder.decode(offsetReader);
        } catch (error) {
          if (isError(error, "BUFFER_OVERRUN")) {
            throw error;
          }
          value = error;
          value.baseType = coder.name;
          value.name = coder.localName;
          value.type = coder.type;
        }
      } else {
        try {
          value = coder.decode(reader);
        } catch (error) {
          if (isError(error, "BUFFER_OVERRUN")) {
            throw error;
          }
          value = error;
          value.baseType = coder.name;
          value.name = coder.localName;
          value.type = coder.type;
        }
      }
      if (value == void 0) {
        throw new Error("investigate");
      }
      values.push(value);
      keys.push(coder.localName || null);
    });
    return Result.fromItems(values, keys);
  }
  class ArrayCoder extends Coder {
    constructor(coder, length, localName) {
      const type = coder.type + "[" + (length >= 0 ? length : "") + "]";
      const dynamic = length === -1 || coder.dynamic;
      super("array", type, localName, dynamic);
      __publicField(this, "coder");
      __publicField(this, "length");
      defineProperties(this, { coder, length });
    }
    defaultValue() {
      const defaultChild = this.coder.defaultValue();
      const result = [];
      for (let i = 0; i < this.length; i++) {
        result.push(defaultChild);
      }
      return result;
    }
    encode(writer, _value2) {
      const value = Typed.dereference(_value2, "array");
      if (!Array.isArray(value)) {
        this._throwError("expected array value", value);
      }
      let count = this.length;
      if (count === -1) {
        count = value.length;
        writer.writeValue(value.length);
      }
      assertArgumentCount(value.length, count, "coder array" + (this.localName ? " " + this.localName : ""));
      let coders = [];
      for (let i = 0; i < value.length; i++) {
        coders.push(this.coder);
      }
      return pack(writer, coders, value);
    }
    decode(reader) {
      let count = this.length;
      if (count === -1) {
        count = reader.readIndex();
        assert(count * WordSize <= reader.dataLength, "insufficient data length", "BUFFER_OVERRUN", { buffer: reader.bytes, offset: count * WordSize, length: reader.dataLength });
      }
      let coders = [];
      for (let i = 0; i < count; i++) {
        coders.push(new AnonymousCoder(this.coder));
      }
      return unpack(reader, coders);
    }
  }
  class BooleanCoder extends Coder {
    constructor(localName) {
      super("bool", "bool", localName, false);
    }
    defaultValue() {
      return false;
    }
    encode(writer, _value2) {
      const value = Typed.dereference(_value2, "bool");
      return writer.writeValue(value ? 1 : 0);
    }
    decode(reader) {
      return !!reader.readValue();
    }
  }
  class DynamicBytesCoder extends Coder {
    constructor(type, localName) {
      super(type, type, localName, true);
    }
    defaultValue() {
      return "0x";
    }
    encode(writer, value) {
      value = getBytesCopy(value);
      let length = writer.writeValue(value.length);
      length += writer.writeBytes(value);
      return length;
    }
    decode(reader) {
      return reader.readBytes(reader.readIndex(), true);
    }
  }
  class BytesCoder extends DynamicBytesCoder {
    constructor(localName) {
      super("bytes", localName);
    }
    decode(reader) {
      return hexlify(super.decode(reader));
    }
  }
  class FixedBytesCoder extends Coder {
    constructor(size, localName) {
      let name = "bytes" + String(size);
      super(name, name, localName, false);
      __publicField(this, "size");
      defineProperties(this, { size }, { size: "number" });
    }
    defaultValue() {
      return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
    }
    encode(writer, _value2) {
      let data = getBytesCopy(Typed.dereference(_value2, this.type));
      if (data.length !== this.size) {
        this._throwError("incorrect data length", _value2);
      }
      return writer.writeBytes(data);
    }
    decode(reader) {
      return hexlify(reader.readBytes(this.size));
    }
  }
  const Empty = new Uint8Array([]);
  class NullCoder extends Coder {
    constructor(localName) {
      super("null", "", localName, false);
    }
    defaultValue() {
      return null;
    }
    encode(writer, value) {
      if (value != null) {
        this._throwError("not null", value);
      }
      return writer.writeBytes(Empty);
    }
    decode(reader) {
      reader.readBytes(0);
      return null;
    }
  }
  const BN_0$5 = BigInt(0);
  const BN_1$1 = BigInt(1);
  const BN_MAX_UINT256$1 = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
  class NumberCoder extends Coder {
    constructor(size, signed2, localName) {
      const name = (signed2 ? "int" : "uint") + size * 8;
      super(name, name, localName, false);
      __publicField(this, "size");
      __publicField(this, "signed");
      defineProperties(this, { size, signed: signed2 }, { size: "number", signed: "boolean" });
    }
    defaultValue() {
      return 0;
    }
    encode(writer, _value2) {
      let value = getBigInt(Typed.dereference(_value2, this.type));
      let maxUintValue = mask(BN_MAX_UINT256$1, WordSize * 8);
      if (this.signed) {
        let bounds = mask(maxUintValue, this.size * 8 - 1);
        if (value > bounds || value < -(bounds + BN_1$1)) {
          this._throwError("value out-of-bounds", _value2);
        }
        value = toTwos(value, 8 * WordSize);
      } else if (value < BN_0$5 || value > mask(maxUintValue, this.size * 8)) {
        this._throwError("value out-of-bounds", _value2);
      }
      return writer.writeValue(value);
    }
    decode(reader) {
      let value = mask(reader.readValue(), this.size * 8);
      if (this.signed) {
        value = fromTwos(value, this.size * 8);
      }
      return value;
    }
  }
  class StringCoder extends DynamicBytesCoder {
    constructor(localName) {
      super("string", localName);
    }
    defaultValue() {
      return "";
    }
    encode(writer, _value2) {
      return super.encode(writer, toUtf8Bytes(Typed.dereference(_value2, "string")));
    }
    decode(reader) {
      return toUtf8String(super.decode(reader));
    }
  }
  class TupleCoder extends Coder {
    constructor(coders, localName) {
      let dynamic = false;
      const types = [];
      coders.forEach((coder) => {
        if (coder.dynamic) {
          dynamic = true;
        }
        types.push(coder.type);
      });
      const type = "tuple(" + types.join(",") + ")";
      super("tuple", type, localName, dynamic);
      __publicField(this, "coders");
      defineProperties(this, { coders: Object.freeze(coders.slice()) });
    }
    defaultValue() {
      const values = [];
      this.coders.forEach((coder) => {
        values.push(coder.defaultValue());
      });
      const uniqueNames = this.coders.reduce((accum, coder) => {
        const name = coder.localName;
        if (name) {
          if (!accum[name]) {
            accum[name] = 0;
          }
          accum[name]++;
        }
        return accum;
      }, {});
      this.coders.forEach((coder, index) => {
        let name = coder.localName;
        if (!name || uniqueNames[name] !== 1) {
          return;
        }
        if (name === "length") {
          name = "_length";
        }
        if (values[name] != null) {
          return;
        }
        values[name] = values[index];
      });
      return Object.freeze(values);
    }
    encode(writer, _value2) {
      const value = Typed.dereference(_value2, "tuple");
      return pack(writer, this.coders, value);
    }
    decode(reader) {
      return unpack(reader, this.coders);
    }
  }
  function id(value) {
    return keccak256(toUtf8Bytes(value));
  }
  var COMPRESSED$1 = "AEEUdwmgDS8BxQKKAP4BOgDjATAAngDUAIMAoABoAOAAagCOAEQAhABMAHIAOwA9ACsANgAmAGIAHgAuACgAJwAXAC0AGgAjAB8ALwAUACkAEgAeAAkAGwARABkAFgA5ACgALQArADcAFQApABAAHgAiABAAGgAeABMAGAUhBe8BFxREN8sF2wC5AK5HAW8ArQkDzQCuhzc3NzcBP68NEfMABQdHBuw5BV8FYAA9MzkI9r4ZBg7QyQAWA9CeOwLNCjcCjqkChuA/lm+RAsXTAoP6ASfnEQDytQFJAjWVCkeXAOsA6godAB/cwdAUE0WlBCN/AQUCQRjFD/MRBjHxDQSJbw0jBzUAswBxme+tnIcAYwabAysG8QAjAEMMmxcDqgPKQyDXCMMxA7kUQwD3NXOrAKmFIAAfBC0D3x4BJQDBGdUFAhEgVD8JnwmQJiNWYUzrg0oAGwAUAB0AFnNcACkAFgBP9h3gPfsDOWDKneY2ChglX1UDYD30ABsAFAAdABZzIGRAnwDD8wAjAEEMzRbDqgMB2sAFYwXqAtCnAsS4AwpUJKRtFHsadUz9AMMVbwLpABM1NJEX0ZkCgYMBEyMAxRVvAukAEzUBUFAtmUwSAy4DBTER33EftQHfSwB5MxJ/AjkWKQLzL8E/cwBB6QH9LQDPDtO9ASNriQC5DQANAwCK21EFI91zHwCoL9kBqQcHBwcHKzUDowBvAQohPvU3fAQgHwCyAc8CKQMA5zMSezr7ULgFmDp/LzVQBgEGAi8FYQVgt8AFcTtlQhpCWEmfe5tmZ6IAExsDzQ8t+X8rBKtTAltbAn0jsy8Bl6utPWMDTR8Ei2kRANkDBrNHNysDBzECQWUAcwFpJ3kAiyUhAJ0BUb8AL3EfAbfNAz81KUsFWwF3YQZtAm0A+VEfAzEJDQBRSQCzAQBlAHsAM70GD/v3IZWHBwARKQAxALsjTwHZAeMPEzmXgIHwABIAGQA8AEUAQDt3gdvIEGcQZAkGTRFMdEIVEwK0D64L7REdDNkq09PgADSxB/MDWwfzA1sDWwfzB/MDWwfzA1sDWwNbA1scEvAi28gQZw9QBHUFlgWTBN4IiyZREYkHMAjaVBV0JhxPA00BBCMtSSQ7mzMTJUpMFE0LCAQ2SmyvfUADTzGzVP2QqgPTMlc5dAkGHnkSqAAyD3skNb1OhnpPcagKU0+2tYdJak5vAsY6sEAACikJm2/Dd1YGRRAfJ6kQ+ww3AbkBPw3xS9wE9QY/BM0fgRkdD9GVoAipLeEM8SbnLqWAXiP5KocF8Uv4POELUVFsD10LaQnnOmeBUgMlAREijwrhDT0IcRD3Cs1vDekRSQc9A9lJngCpBwULFR05FbkmFGKwCw05ewb/GvoLkyazEy17AAXXGiUGUQEtGwMA0y7rhbRaNVwgT2MGBwspI8sUrFAkDSlAu3hMGh8HGSWtApVDdEqLUToelyH6PEENai4XUYAH+TwJGVMLhTyiRq9FEhHWPpE9TCJNTDAEOYMsMyePCdMPiQy9fHYBXQklCbUMdRM1ERs3yQg9Bx0xlygnGQglRplgngT7owP3E9UDDwVDCUUHFwO5HDETMhUtBRGBKNsC9zbZLrcCk1aEARsFzw8pH+MQVEfkDu0InwJpA4cl7wAxFSUAGyKfCEdnAGOP3FMJLs8Iy2pwI3gDaxTrZRF3B5UOWwerHDcVwxzlcMxeD4YMKKezCV8BeQmdAWME5wgNNV+MpCBFZ1eLXBifIGVBQ14AAjUMaRWjRMGHfAKPD28SHwE5AXcHPQ0FAnsR8RFvEJkI74YINbkz/DopBFMhhyAVCisDU2zSCysm/Qz8bQGnEmYDEDRBd/Jnr2C6KBgBBx0yyUFkIfULlk/RDKAaxRhGVDIZ6AfDA/ca9yfuQVsGAwOnBxc6UTPyBMELbQiPCUMATQ6nGwfbGG4KdYzUATWPAbudA1uVhwJzkwY7Bw8Aaw+LBX3pACECqwinAAkA0wNbAD0CsQehAB0AiUUBQQMrMwEl6QKTA5cINc8BmTMB9y0EH8cMGQD7O25OAsO1AoBuZqYF4VwCkgJNOQFRKQQJUktVA7N15QDfAE8GF+NLARmvTs8e50cB43MvAMsA/wAJOQcJRQHRAfdxALsBYws1Caa3uQFR7S0AhwAZbwHbAo0A4QA5AIP1AVcAUQVd/QXXAlNNARU1HC9bZQG/AyMBNwERAH0Gz5GpzQsjBHEH1wIQHxXlAu8yB7kFAyLjE9FCyQK94lkAMhoKPAqrCqpgX2Q3CjV2PVQAEh+sPss/UgVVO1c7XDtXO1w7VztcO1c7XDtXO1wDm8Pmw+YKcF9JYe8Mqg3YRMw6TRPfYFVgNhPMLbsUxRXSJVoZQRrAJwkl6FUNDwgt12Y0CDA0eRfAAEMpbINFY4oeNApPHOtTlVT8LR8AtUumM7MNsBsZREQFS3XxYi4WEgomAmSFAmJGX1GzAV83JAKh+wJonAJmDQKfiDgfDwJmPwJmKgRyBIMDfxcDfpY5Cjl7GzmGOicnAmwhAjI6OA4CbcsCbbLzjgM3a0kvAWsA4gDlAE4JB5wMkQECD8YAEbkCdzMCdqZDAnlPRwJ4viFg30WyRvcCfEMCeswCfQ0CfPRIBEiBZygALxlJXEpfGRtK0ALRBQLQ0EsrA4hTA4fqRMmRNgLypV0HAwOyS9JMMSkH001QTbMCi0MCitzFHwshR2sJuwKOOwKOYESbhQKO3QKOYHxRuFM5AQ5S2FSJApP/ApMQAO0AIFUiVbNV1AosHymZijLleGpFPz0Cl6MC77ZYJawAXSkClpMCloCgAK1ZsFoNhVEAPwKWuQKWUlxIXNUCmc8CmWhczl0LHQKcnznGOqECnBoCn58CnryOACETNS4TAp31Ap6WALlBYThh8wKe1wKgcgGtAp6jIwKeUqljzGQrKS8CJ7MCJoICoP8CoFDbAqYzAqXSAqgDAIECp/ZogGi1AAdNaiBq1QKs5wKssgKtawKtBgJXIQJV4AKx5dsDH1JsmwKywRECsuwbbORtZ21MYwMl0QK2YD9DbpQDKUkCuGICuUsZArkue3A6cOUCvR0DLbYDMhUCvoxyBgMzdQK+HnMmc1MCw88CwwhzhnRPOUl05AM8qwEDPJ4DPcMCxYACxksCxhSNAshtVQLISALJUwLJMgJkoQLd1nh9ZXiyeSlL1AMYp2cGAmH4GfeVKHsPXpZevxUCz28Cz3AzT1fW9xejAMqxAs93AS3uA04Wfk8JAtwrAtuOAtJTA1JgA1NjAQUDVZCAjUMEzxrxZEl5A4LSg5EC2ssC2eKEFIRNp0ADhqkAMwNkEoZ1Xf0AWQLfaQLevHd7AuIz7RgB8zQrAfSfAfLWiwLr9wLpdH0DAur9AuroAP1LAb0C7o0C66CWrpcHAu5DA4XkmH1w5HGlAvMHAG0DjhqZlwL3FwORcgOSiwL3nAL53QL4apogmq+/O5siA52HAv7+AR8APZ8gAZ+3AwWRA6ZuA6bdANXJAwZuoYyiCQ0DDE0BEwEjB3EGZb1rCQC/BG/DFY8etxEAG3k9ACcDNxJRA42DAWcrJQCM8wAlAOanC6OVCLsGI6fJBgCvBRnDBvElRUYFFoAFcD9GSDNCKUK8X3kZX8QAls0FOgCQVCGbwTsuYDoZutcONxjOGJHJ/gVfBWAFXwVgBWsFYAVfBWAFXwVgBV8FYAVfBWBOHQjfjW8KCgoKbF7xMwTRA7kGN8PDAMMEr8MA70gxFroFTj5xPnhCR0K+X30/X/AAWBkzswCNBsxzzASm70aCRS4rDDMeLz49fnXfcsH5GcoscQFz13Y4HwVnBXLJycnACNdRYwgICAqEXoWTxgA7P4kACxbZBu21Kw0AjMsTAwkVAOVtJUUsJ1JCuULESUArXy9gPi9AKwnJRQYKTD9LPoA+iT54PnkCkULEUUpDX9NWV3JVEjQAc1w3A3IBE3YnX+g7QiMJb6MKaiszRCUuQrNCxDPMCcwEX9EWJzYREBEEBwIHKn6l33JCNVIfybPJtAltydPUCmhBZw/tEKsZAJOVJU1CLRuxbUHOQAo7P0s+eEJHHA8SJVRPdGM0NVrpvBoKhfUlM0JHHGUQUhEWO1xLSj8MO0ucNAqJIzVCRxv9EFsqKyA4OQgNj2nwZgp5ZNFgE2A1K3YHS2AhQQojJmC7DgpzGG1WYFUZCQYHZO9gHWCdYIVgu2BTYJlwFh8GvRbcXbG8YgtDHrMBwzPVyQonHQgkCyYBgQJ0Ajc4nVqIAwGSCsBPIgDsK3SWEtIVBa5N8gGjAo+kVwVIZwD/AEUSCDweX4ITrRQsJ8K3TwBXFDwEAB0TvzVcAtoTS20RIwDgVgZ9BBImYgA5AL4Coi8LFnezOkCnIQFjAY4KBAPh9RcGsgZSBsEAJctdsWIRu2kTkQstRw7DAcMBKgpPBGIGMDAwKCYnKTQaLg4AKRSVAFwCdl+YUZ0JdicFD3lPAdt1F9ZZKCGxuE3yBxkFVGcA/wBFEgiCBwAOLHQSjxOtQDg1z7deFRMAZ8QTAGtKb1ApIiPHADkAvgKiLy1DFtYCmBiDAlDDWNB0eo7fpaMO/aEVRRv0ATEQZBIODyMEAc8JQhCbDRgzFD4TAEMAu9YBCgCsAOkAm5I3ABwAYxvONnR+MhXJAxgKQyxL2+kkJhMbhQKDBMkSsvF0AD9BNQ6uQC7WqSQHwxEAEEIu1hkhAH2z4iQPwyJPHNWpdyYBRSpnJALzoBAEVPPsH20MxA0CCEQKRgAFyAtFAlMNwwjEDUQJRArELtapMg7DDZgJIw+TGukEIwvDFkMAqAtDEMMMBhioe+QAO3MMRAACrgnEBSPY9Q0FDnbSBoMAB8MSYxkSxAEJAPIJAAB8FWMOFtMc/HcXwxhDAC7DAvOowwAewwJdKDKHAAHDAALrFUQVwwAbwyvzpWMWv8wA/ABpAy++bcYDUKPD0KhDCwKmJ1MAAmMA5+UZwxAagwipBRL/eADfw6fDGOMCGsOjk3l6BwOpo4sAEsMOGxMAA5sAbcMOAAvDp0MJGkMDwgipnNIPAwfIqUMGAOGDAAPzABXDAAcDAAnDAGmTABrDAA7DChjDjnEWAwABYwAOcwAuUyYABsMAF8MIKQANUgC6wy4AA8MADqMq8wCyYgAcIwAB8wqpAAXOCx0V4wAHowBCwwEKAGnDAAuDAB3DAAjDCakABdIAbqcZ3QCZCCkABdIAAAFDAAfjAB2jCCkABqIACYMAGzMAbSMA5sOIAAhjAAhDABTDBAkpAAbSAOOTAAlDC6kOzPtnAAdDAG6kQFAATwAKwwwAA0MACbUDPwAHIwAZgwACE6cDAAojAApDAAoDp/MGwwAJIwADEwAQQwgAFEMAEXMAD5MADfMADcMAGRMOFiMAFUMAbqMWuwHDAMIAE0MLAGkzEgDhUwACQwAEWgAXgwUjAAbYABjDBSYBgzBaAEFNALcQBxUMegAwMngBrA0IZgJ0KxQHBREPd1N0ZzKRJwaIHAZqNT4DqQq8BwngAB4DAwt2AX56T1ocKQNXAh1GATQGC3tOxYNagkgAMQA5CQADAQEAWxLjAIOYNAEzAH7tFRk6TglSAF8NAAlYAQ+S1ACAQwQorQBiAN4dAJ1wPyeTANVzuQDX3AIeEMp9eyMgXiUAEdkBkJizKltbVVAaRMqRAAEAhyQ/SDEz6BmfVwB6ATEsOClKIRcDOF0E/832AFNt5AByAnkCRxGCOs94NjXdAwINGBonDBwPALW2AwICAgAAAAAAAAYDBQMDARrUAwAtAAAAAgEGBgYGBgYFBQUFBQUEBQYHCAkEBQUFBQQAAAICAAAAIgCNAJAAlT0A6gC7ANwApEQAwgCyAK0AqADuAKYA2gCjAOcBCAEDAMcAgQBiANIA1AEDAN4A8gCQAKkBMQDqAN8A3AsBCQ8yO9ra2tq8xuLT1tRJOB0BUgFcNU0BWgFpAWgBWwFMUUlLbhMBUxsNEAs6PhMOACcUKy0vMj5AQENDQ0RFFEYGJFdXV1dZWVhZL1pbXVxcI2NnZ2ZoZypsbnZ1eHh4eHh4enp6enp6enp6enp8fH18e2IARPIASQCaAHgAMgBm+ACOAFcAVwA3AnbvAIsABfj4AGQAk/IAnwBPAGIAZP//sACFAIUAaQBWALEAJAC2AIMCQAJDAPwA5wD+AP4A6AD/AOkA6QDoAOYALwJ7AVEBQAE+AVQBPgE+AT4BOQE4ATgBOAEcAVgXADEQCAEAUx8SHgsdHhYAjgCWAKYAUQBqIAIxAHYAbwCXAxUDJzIDIUlGTzEAkQJPAMcCVwKkAMAClgKWApYClgKWApYCiwKWApYClgKWApYClgKVApUCmAKgApcClgKWApQClAKUApQCkgKVAnUB1AKXAp8ClgKWApUeAIETBQD+DQOfAmECOh8BVBg9AuIZEjMbAU4/G1WZAXusRAFpYQEFA0FPAQYAmTEeIJdyADFoAHEANgCRA5zMk/C2jGINwjMWygIZCaXdfDILBCs5dAE7YnQBugDlhoiHhoiGiYqKhouOjIaNkI6Ij4qQipGGkoaThpSSlYaWhpeKmIaZhpqGm4aci52QnoqfhuIC4XTpAt90AIp0LHSoAIsAdHQEQwRABEIERQRDBEkERgRBBEcESQRIBEQERgRJAJ5udACrA490ALxuAQ10ANFZdHQA13QCFHQA/mJ0AP4BIQD+APwA/AD9APwDhGZ03ASMK23HAP4A/AD8AP0A/CR0dACRYnQA/gCRASEA/gCRAvQA/gCRA4RmdNwEjCttxyR0AP9idAEhAP4A/gD8APwA/QD8AP8A/AD8AP0A/AOEZnTcBIwrbcckdHQAkWJ0ASEA/gCRAP4AkQL0AP4AkQOEZnTcBIwrbcckdAJLAT50AlIBQXQCU8l0dAJfdHQDpgL0A6YDpgOnA6cDpwOnA4RmdNwEjCttxyR0dACRYnQBIQOmAJEDpgCRAvQDpgCRA4RmdNwEjCttxyR0BDh0AJEEOQCRDpU5dSgCADR03gV2CwArdAEFAM5iCnR0AF1iAAYcOgp0dACRCnQAXAEIwWZ0CnRmdHQAkWZ0CnRmdEXgAFF03gp0dEY0tlT2u3SOAQTwscwhjZZKrhYcBSfFp9XNbKiVDOD2b+cpe4/Z17mQnbtzzhaeQtE2GGj0IDNTjRUSyTxxw/RPHW/+vS7d1NfRt9z9QPZg4X7QFfhCnkvgNPIItOsC2eV6hPannZNHlZ9xrwZXIMOlu3jSoQSq78WEjwLjw1ELSlF1aBvfzwk5ZX7AUvQzjPQKbDuQ+sm4wNOp4A6AdVuRS0t1y/DZpg4R6m7FNjM9HgvW7Bi88zaMjOo6lM8wtBBdj8LP4ylv3zCXPhebMKJc066o9sF71oFW/8JXu86HJbwDID5lzw5GWLR/LhT0Qqnp2JQxNZNfcbLIzPy+YypqRm/lBmGmex+82+PisxUumSeJkALIT6rJezxMH+CTJmQtt5uwTVbL3ptmjDUQzlSIvWi8Tl7ng1NpuRn1Ng4n14Qc+3Iil7OwkvNWogLSPkn3pihIFytyIGmMhOe3n1tWsuMy9BdKyqF4Z3v2SgggTL9KVvMXPnCbRe+oOuFFP3HejBG/w9gvmfNYvg6JuWia2lcSSN1uIjBktzoIazOHPJZ7kKHPz8mRWVdW3lA8WGF9dQF6Bm673boov3BUWDU2JNcahR23GtfHKLOz/viZ+rYnZFaIznXO67CYEJ1fXuTRpZhYZkKe54xeoagkNGLs+NTZHE0rX45/XvQ2RGADX6vcAvdxIUBV27wxGm2zjZo4X3ILgAlrOFheuZ6wtsvaIj4yLY7qqawlliaIcrz2G+c3vscAnCkCuMzMmZvMfu9lLwTvfX+3cVSyPdN9ZwgDZhfjRgNJcLiJ67b9xx8JHswprbiE3v9UphotAPIgnXVIN5KmMc0piXhc6cChPnN+MRhG9adtdttQTTwSIpl8I4/j//d3sz1326qTBTpPRM/Hgh3kzqEXs8ZAk4ErQhNO8hzrQ0DLkWMA/N+91tn2MdOJnWC2FCZehkQrwzwbKOjhvZsbM95QoeL9skYyMf4srVPVJSgg7pOLUtr/n9eT99oe9nLtFRpjA9okV2Kj8h9k5HaC0oivRD8VyXkJ81tcd4fHNXPCfloIQasxsuO18/46dR2jgul/UIet2G0kRvnyONMKhHs6J26FEoqSqd+rfYjeEGwHWVDpX1fh1jBBcKGMqRepju9Y00mDVHC+Xdij/j44rKfvfjGinNs1jO/0F3jB83XCDINN/HB84axlP+3E/klktRo+vl3U/aiyMJbIodE1XSsDn6UAzIoMtUObY2+k/4gY/l+AkZJ5Sj2vQrkyLm3FoxjhDX+31UXBFf9XrAH31fFqoBmDEZvhvvpnZ87N+oZEu7U9O/nnk+QWj3x8uyoRbEnf+O5UMr9i0nHP38IF5AvzrBW8YWBUR0mIAzIvndQq9N3v/Jto3aPjPXUPl8ASdPPyAp7jENf8bk7VMM9ol9XGmlBmeDMuGqt+WzuL6CXAxXjIhCPM5vACchgMJ/8XBGLO/D1isVvGhwwHHr1DLaI5mn2Jr/b1pUD90uciDaS8cXNDzCWvNmT/PhQe5e8nTnnnkt8Ds/SIjibcum/fqDhKopxAY8AkSrPn+IGDEKOO+U3XOP6djFs2H5N9+orhOahiQk5KnEUWa+CzkVzhp8bMHRbg81qhjjXuIKbHjSLSIBKWqockGtKinY+z4/RdBUF6pcc3JmnlxVcNgrI4SEzKUZSwcD2QCyxzKve+gAmg6ZuSRkpPFa6mfThu7LJNu3H5K42uCpNvPAsoedolKV/LHe/eJ+BbaG5MG0NaSGVPRUmNFMFFSSpXEcXwbVh7UETOZZtoVNRGOIbbkig3McEtR68cG0RZAoJevWYo7Dg/lZ1CQzblWeUvVHmr8fY4Nqd9JJiH/zEX24mJviH60fAyFr0A3c4bC1j3yZU60VgJxXn8JgJXLUIsiBnmKmMYz+7yBQFBvqb2eYnuW59joZBf56/wXvWIR4R8wTmV80i1mZy+S4+BUES+hzjk0uXpC///z/IlqHZ1monzlXp8aCfhGKMti73FI1KbL1q6IKO4fuBuZ59gagjn5xU79muMpHXg6S+e+gDM/U9BKLHbl9l6o8czQKl4RUkJJiqftQG2i3BMg/TQlUYFkJDYBOOvAugYuzYSDnZbDDd/aSd9x0Oe6F+bJcHfl9+gp6L5/TgA+BdFFovbfCrQ40s5vMPw8866pNX8zyFGeFWdxIpPVp9Rg1UPOVFbFZrvaFq/YAzHQgqMWpahMYfqHpmwXfHL1/kpYmGuHFwT55mQu0dylfNuq2Oq0hTMCPwqfxnuBIPLXfci4Y1ANy+1CUipQxld/izVh16WyG2Q0CQQ9NqtAnx1HCHwDj7sYxOSB0wopZSnOzxQOcExmxrVTF2BkOthVpGfuhaGECfCJpJKpjnihY+xOT2QJxN61+9K6QSqtv2Shr82I3jgJrqBg0wELFZPjvHpvzTtaJnLK6Vb97Yn933koO/saN7fsjwNKzp4l2lJVx2orjCGzC/4ZL4zCver6aQYtC5sdoychuFE6ufOiog+VWi5UDkbmvmtah/3aArEBIi39s5ILUnlFLgilcGuz9CQshEY7fw2ouoILAYPVT/gyAIq3TFAIwVsl+ktkRz/qGfnCDGrm5gsl/l9QdvCWGsjPz3dU7XuqKfdUrr/6XIgjp4rey6AJBmCmUJMjITHVdFb5m1p+dLMCL8t55zD42cmftmLEJC0Da04YiRCVUBLLa8D071/N5UBNBXDh0LFsmhV/5B5ExOB4j3WVG/S3lfK5o+V6ELHvy6RR9n4ac+VsK4VE4yphPvV+kG9FegTBH4ZRXL2HytUHCduJazB/KykjfetYxOXTLws267aGOd+I+JhKP//+VnXmS90OD/jvLcVu0asyqcuYN1mSb6XTlCkqv1vigZPIYwNF/zpWcT1GR/6aEIRjkh0yhg4LXJfaGobYJTY4JI58KiAKgmmgAKWdl5nYCeLqavRJGQNuYuZtZFGx+IkI4w4NS2xwbetNMunOjBu/hmKCI/w7tfiiyUd//4rbTeWt4izBY8YvGIN6vyKYmP/8X8wHKCeN+WRcKM70+tXKNGyevU9H2Dg5BsljnTf8YbsJ1TmMs74Ce2XlHisleguhyeg44rQOHZuw/6HTkhnnurK2d62q6yS7210SsAIaR+jXMQA+svkrLpsUY+F30Uw89uOdGAR6vo4FIME0EfVVeHTu6eKicfhSqOeXJhbftcd08sWEnNUL1C9fnprTgd83IMut8onVUF0hvqzZfHduPjbjwEXIcoYmy+P6tcJZHmeOv6VrvEdkHDJecjHuHeWANe79VG662qTjA/HCvumVv3qL+LrOcpqGps2ZGwQdFJ7PU4iuyRlBrwfO+xnPyr47s2cXVbWzAyznDiBGjCM3ksxjjqM62GE9C8f5U38kB3VjtabKp/nRdvMESPGDG90bWRLAt1Qk5DyLuazRR1YzdC1c+hZXvAWV8xA72S4A8B67vjVhbba3MMop293FeEXpe7zItMWrJG/LOH9ByOXmYnNJfjmfuX9KbrpgLOba4nZ+fl8Gbdv/ihv+6wFGKHCYrVwmhFC0J3V2bn2tIB1wCc1CST3d3X2OyxhguXcs4sm679UngzofuSeBewMFJboIQHbUh/m2JhW2hG9DIvG2t7yZIzKBTz9wBtnNC+2pCRYhSIuQ1j8xsz5VvqnyUIthvuoyyu7fNIrg/KQUVmGQaqkqZk/Vx5b33/gsEs8yX7SC1J+NV4icz6bvIE7C5G6McBaI8rVg56q5QBJWxn/87Q1sPK4+sQa8fLU5gXo4paaq4cOcQ4wR0VBHPGjKh+UlPCbA1nLXyEUX45qZ8J7/Ln4FPJE2TdzD0Z8MLSNQiykMMmSyOCiFfy84Rq60emYB2vD09KjYwsoIpeDcBDTElBbXxND72yhd9pC/1CMid/5HUMvAL27OtcIJDzNKpRPNqPOpyt2aPGz9QWIs9hQ9LiX5s8m9hjTUu/f7MyIatjjd+tSfQ3ufZxPpmJhTaBtZtKLUcfOCUqADuO+QoH8B9v6U+P0HV1GLQmtoNFTb3s74ivZgjES0qfK+8RdGgBbcCMSy8eBvh98+et1KIFqSe1KQPyXULBMTsIYnysIwiZBJYdI20vseV+wuJkcqGemehKjaAb9L57xZm3g2zX0bZ2xk/fU+bCo7TlnbW7JuF1YdURo/2Gw7VclDG1W7LOtas2LX4upifZ/23rzpsnY/ALfRgrcWP5hYmV9VxVOQA1fZvp9F2UNU+7d7xRyVm5wiLp3/0dlV7vdw1PMiZrbDAYzIVqEjRY2YU03sJhPnlwIPcZUG5ltL6S8XCxU1eYS5cjr34veBmXAvy7yN4ZjArIG0dfD/5UpBNlX1ZPoxJOwyqRi3wQWtOzd4oNKh0LkoTm8cwqgIfKhqqGOhwo71I+zXnMemTv2B2AUzABWyFztGgGULjDDzWYwJUVBTjKCn5K2QGMK1CQT7SzziOjo+BhAmqBjzuc3xYym2eedGeOIRJVyTwDw37iCMe4g5Vbnsb5ZBdxOAnMT7HU4DHpxWGuQ7GeiY30Cpbvzss55+5Km1YsbD5ea3NI9QNYIXol5apgSu9dZ8f8xS5dtHpido5BclDuLWY4lhik0tbJa07yJhH0BOyEut/GRbYTS6RfiTYWGMCkNpfSHi7HvdiTglEVHKZXaVhezH4kkXiIvKopYAlPusftpE4a5IZwvw1x/eLvoDIh/zpo9FiQInsTb2SAkKHV42XYBjpJDg4374XiVb3ws4qM0s9eSQ5HzsMU4OZJKuopFjBM+dAZEl8RUMx5uU2N486Kr141tVsGQfGjORYMCJAMsxELeNT4RmWjRcpdTGBwcx6XN9drWqPmJzcrGrH4+DRc7+n1w3kPZwu0BkNr6hQrqgo7JTB9A5kdJ/H7P4cWBMwsmuixAzJB3yrQpnGIq90lxAXLzDCdn1LPibsRt7rHNjgQBklRgPZ8vTbjXdgXrTWQsK5MdrXXQVPp0Rinq3frzZKJ0qD6Qhc40VzAraUXlob1gvkhK3vpmHgI6FRlQZNx6eRqkp0zy4AQlX813fAPtL3jMRaitGFFjo0zmErloC+h+YYdVQ6k4F/epxAoF0BmqEoKNTt6j4vQZNQ2BoqF9Vj53TOIoNmDiu9Xp15RkIgQIGcoLpfoIbenzpGUAtqFJp5W+LLnx38jHeECTJ/navKY1NWfN0sY1T8/pB8kIH3DU3DX+u6W3YwpypBMYOhbSxGjq84RZ84fWJow8pyHqn4S/9J15EcCMsXqrfwyd9mhiu3+rEo9pPpoJkdZqHjra4NvzFwuThNKy6hao/SlLw3ZADUcUp3w3SRVfW2rhl80zOgTYnKE0Hs2qp1J6H3xqPqIkvUDRMFDYyRbsFI3M9MEyovPk8rlw7/0a81cDVLmBsR2ze2pBuKb23fbeZC0uXoIvDppfTwIDxk1Oq2dGesGc+oJXWJLGkOha3CX+DUnzgAp9HGH9RsPZN63Hn4RMA5eSVhPHO+9RcRb/IOgtW31V1Q5IPGtoxPjC+MEJbVlIMYADd9aHYWUIQKopuPOHmoqSkubnAKnzgKHqgIOfW5RdAgotN6BN+O2ZYHkuemLnvQ8U9THVrS1RtLmKbcC7PeeDsYznvqzeg6VCNwmr0Yyx1wnLjyT84BZz3EJyCptD3yeueAyDWIs0L2qs/VQ3HUyqfrja0V1LdDzqAikeWuV4sc7RLIB69jEIBjCkyZedoUHqCrOvShVzyd73OdrJW0hPOuQv2qOoHDc9xVb6Yu6uq3Xqp2ZaH46A7lzevbxQEmfrzvAYSJuZ4WDk1Hz3QX1LVdiUK0EvlAGAYlG3Md30r7dcPN63yqBCIj25prpvZP0nI4+EgWoFG95V596CurXpKRBGRjQlHCvy5Ib/iW8nZJWwrET3mgd6mEhfP4KCuaLjopWs7h+MdXFdIv8dHQJgg1xi1eYqB0uDYjxwVmri0Sv5XKut/onqapC+FQiC2C1lvYJ9MVco6yDYsS3AANUfMtvtbYI2hfwZatiSsnoUeMZd34GVjkMMKA+XnjJpXgRW2SHTZplVowPmJsvXy6w3cfO1AK2dvtZEKTkC/TY9LFiKHCG0DnrMQdGm2lzlBHM9iEYynH2UcVMhUEjsc0oDBTgo2ZSQ1gzkAHeWeBXYFjYLuuf8yzTCy7/RFR81WDjXMbq2BOH5dURnxo6oivmxL3cKzKInlZkD31nvpHB9Kk7GfcfE1t+1V64b9LtgeJGlpRFxQCAqWJ5DoY77ski8gsOEOr2uywZaoO/NGa0X0y1pNQHBi3b2SUGNpcZxDT7rLbBf1FSnQ8guxGW3W+36BW0gBje4DOz6Ba6SVk0xiKgt+q2JOFyr4SYfnu+Ic1QZYIuwHBrgzr6UvOcSCzPTOo7D6IC4ISeS7zkl4h+2VoeHpnG/uWR3+ysNgPcOIXQbv0n4mr3BwQcdKJxgPSeyuP/z1Jjg4e9nUvoXegqQVIE30EHx5GHv+FAVUNTowYDJgyFhf5IvlYmEqRif6+WN1MkEJmDcQITx9FX23a4mxy1AQRsOHO/+eImX9l8EMJI3oPWzVXxSOeHU1dUWYr2uAA7AMb+vAEZSbU3qob9ibCyXeypEMpZ6863o6QPqlqGHZkuWABSTVNd4cOh9hv3qEpSx2Zy/DJMP6cItEmiBJ5PFqQnDEIt3NrA3COlOSgz43D7gpNFNJ5MBh4oFzhDPiglC2ypsNU4ISywY2erkyb1NC3Qh/IfWj0eDgZI4/ln8WPfBsT3meTjq1Uqt1E7Zl/qftqkx6aM9KueMCekSnMrcHj1CqTWWzEzPsZGcDe3Ue4Ws+XFYVxNbOFF8ezkvQGR6ZOtOLU2lQEnMBStx47vE6Pb7AYMBRj2OOfZXfisjJnpTfSNjo6sZ6qSvNxZNmDeS7Gk3yYyCk1HtKN2UnhMIjOXUzAqDv90lx9O/q/AT1ZMnit5XQe9wmQxnE/WSH0CqZ9/2Hy+Sfmpeg8RwsHI5Z8kC8H293m/LHVVM/BA7HaTJYg5Enk7M/xWpq0192ACfBai2LA/qrCjCr6Dh1BIMzMXINBmX96MJ5Hn2nxln/RXPFhwHxUmSV0EV2V0jm86/dxxuYSU1W7sVkEbN9EzkG0QFwPhyHKyb3t+Fj5WoUUTErcazE/N6EW6Lvp0d//SDPj7EV9UdJN+Amnf3Wwk3A0SlJ9Z00yvXZ7n3z70G47Hfsow8Wq1JXcfwnA+Yxa5mFsgV464KKP4T31wqIgzFPd3eCe3j5ory5fBF2hgCFyVFrLzI9eetNXvM7oQqyFgDo4CTp/hDV9NMX9JDHQ/nyHTLvZLNLF6ftn2OxjGm8+PqOwhxnPHWipkE/8wbtyri80Sr7pMNkQGMfo4ZYK9OcCC4ESVFFbLMIvlxSoRqWie0wxqnLfcLSXMSpMMQEJYDVObYsXIQNv4TGNwjq1kvT1UOkicTrG3IaBZ3XdScS3u8sgeZPVpOLkbiF940FjbCeNRINNvDbd01EPBrTCPpm12m43ze1bBB59Ia6Ovhnur/Nvx3IxwSWol+3H2qfCJR8df6aQf4v6WiONxkK+IqT4pKQrZK/LplgDI/PJZbOep8dtbV7oCr6CgfpWa8NczOkPx81iSHbsNhVSJBOtrLIMrL31LK9TqHqAbAHe0RLmmV806kRLDLNEhUEJfm9u0sxpkL93Zgd6rw+tqBfTMi59xqXHLXSHwSbSBl0EK0+loECOPtrl+/nsaFe197di4yUgoe4jKoAJDXc6DGDjrQOoFDWZJ9HXwt8xDrQP+7aRwWKWI1GF8s8O4KzxWBBcwnl3vnl1Oez3oh6Ea1vjR7/z7DDTrFtqU2W/KAEzAuXDNZ7MY73MF216dzdSbWmUp4lcm7keJfWaMHgut9x5C9mj66Z0lJ+yhsjVvyiWrfk1lzPOTdhG15Y7gQlXtacvI7qv/XNSscDwqkgwHT/gUsD5yB7LdRRvJxQGYINn9hTpodKFVSTPrtGvyQw+HlRFXIkodErAGu9Iy1YpfSPc3jkFh5CX3lPxv7aqjE/JAfTIpEjGb/H7MO0e2vsViSW1qa/Lmi4/n4DEI3g7lYrcanspDfEpKkdV1OjSLOy0BCUqVoECaB55vs06rXl4jqmLsPsFM/7vYJ0vrBhDCm/00A/H81l1uekJ/6Lml3Hb9+NKiLqATJmDpyzfYZFHumEjC662L0Bwkxi7E9U4cQA0XMVDuMYAIeLMPgQaMVOd8fmt5SflFIfuBoszeAw7ow5gXPE2Y/yBc/7jExARUf/BxIHQBF5Sn3i61w4z5xJdCyO1F1X3+3ax+JSvMeZ7S6QSKp1Fp/sjYz6Z+VgCZzibGeEoujryfMulH7Rai5kAft9ebcW50DyJr2uo2z97mTWIu45YsSnNSMrrNUuG1XsYBtD9TDYzQffKB87vWbkM4EbPAFgoBV4GQS+vtFDUqOFAoi1nTtmIOvg38N4hT2Sn8r8clmBCXspBlMBYTnrqFJGBT3wZOzAyJDre9dHH7+x7qaaKDOB4UQALD5ecS0DE4obubQEiuJZ0EpBVpLuYcce8Aa4PYd/V4DLDAJBYKQPCWTcrEaZ5HYbJi11Gd6hjGom1ii18VHYnG28NKpkz2UKVPxlhYSp8uZr367iOmoy7zsxehW9wzcy2zG0a80PBMCRQMb32hnaHeOR8fnNDzZhaNYhkOdDsBUZ3loDMa1YP0uS0cjUP3b/6DBlqmZOeNABDsLl5BI5QJups8uxAuWJdkUB/pO6Zax6tsg7fN5mjjDgMGngO+DPcKqiHIDbFIGudxtPTIyDi9SFMKBDcfdGQRv41q1AqmxgkVfJMnP8w/Bc7N9/TR6C7mGObFqFkIEom8sKi2xYqJLTCHK7cxzaZvqODo22c3wisBCP4HeAgcRbNPAsBkNRhSmD48dHupdBRw4mIvtS5oeF6zeT1KMCyhMnmhpkFAGWnGscoNkwvQ8ZM5lE/vgTHFYL99OuNxdFBxTEDd5v2qLR8y9WkXsWgG6kZNndFG+pO/UAkOCipqIhL3hq7cRSdrCq7YhUsTocEcnaFa6nVkhnSeRYUA1YO0z5itF9Sly3VlxYDw239TJJH6f3EUfYO5lb7bcFcz8Bp7Oo8QmnsUHOz/fagVUBtKEw1iT88j+aKkv8cscKNkMxjYr8344D1kFoZ7/td1W6LCNYN594301tUGRmFjAzeRg5vyoM1F6+bJZ/Q54jN/k8SFd3DxPTYaAUsivsBfgTn7Mx8H2SpPt4GOdYRnEJOH6jHM2p6SgB0gzIRq6fHxGMmSmqaPCmlfwxiuloaVIitLGN8wie2CDWhkzLoCJcODh7KIOAqbHEvXdUxaS4TTTs07Clzj/6GmVs9kiZDerMxEnhUB6QQPlcfqkG9882RqHoLiHGBoHfQuXIsAG8GTAtao2KVwRnvvam8jo1e312GQAKWEa4sUVEAMG4G6ckcONDwRcg1e2D3+ohXgY4UAWF8wHKQMrSnzCgfFpsxh+aHXMGtPQroQasRY4U6UdG0rz1Vjbka0MekOGRZQEvqQFlxseFor8zWFgHek3v29+WqN6gaK5gZOTOMZzpQIC1201LkMCXild3vWXSc5UX9xcFYfbRPzGFa1FDcPfPB/jUEq/FeGt419CI3YmBlVoHsa4KdcwQP5ZSwHHhFJ7/Ph/Rap/4vmG91eDwPP0lDfCDRCLszTqfzM71xpmiKi2HwS4WlqvGNwtvwF5Dqpn6KTq8ax00UMPkxDcZrEEEsIvHiUXXEphdb4GB4FymlPwBz4Gperqq5pW7TQ6/yNRhW8VT5NhuP0udlxo4gILq5ZxAZk8ZGh3g4CqxJlPKY7AQxupfUcVpWT5VItp1+30UqoyP4wWsRo3olRRgkWZZ2ZN6VC3OZFeXB8NbnUrSdikNptD1QiGuKkr8EmSR/AK9Rw+FF3s5uwuPbvHGiPeFOViltMK7AUaOsq9+x9cndk3iJEE5LKZRlWJbKOZweROzmPNVPkjE3K/TyA57Rs68TkZ3MR8akKpm7cFjnjPd/DdkWjgYoKHSr5Wu5ssoBYU4acRs5g2DHxUmdq8VXOXRbunD8QN0LhgkssgahcdoYsNvuXGUK/KXD/7oFb+VGdhqIn02veuM5bLudJOc2Ky0GMaG4W/xWBxIJcL7yliJOXOpx0AkBqUgzlDczmLT4iILXDxxtRR1oZa2JWFgiAb43obrJnG/TZC2KSK2wqOzRZTXavZZFMb1f3bXvVaNaK828w9TO610gk8JNf3gMfETzXXsbcvRGCG9JWQZ6+cDPqc4466Yo2RcKH+PILeKOqtnlbInR3MmBeGG3FH10yzkybuqEC2HSQwpA0An7d9+73BkDUTm30bZmoP/RGbgFN+GrCOfADgqr0WbI1a1okpFms8iHYw9hm0zUvlEMivBRxModrbJJ+9/p3jUdQQ9BCtQdxnOGrT5dzRUmw0593/mbRSdBg0nRvRZM5/E16m7ZHmDEtWhwvfdZCZ8J8M12W0yRMszXamWfQTwIZ4ayYktrnscQuWr8idp3PjT2eF/jmtdhIfcpMnb+IfZY2FebW6UY/AK3jP4u3Tu4zE4qlnQgLFbM19EBIsNf7KhjdbqQ/D6yiDb+NlEi2SKD+ivXVUK8ib0oBo366gXkR8ZxGjpJIDcEgZPa9TcYe0TIbiPl/rPUQDu3XBJ9X/GNq3FAUsKsll57DzaGMrjcT+gctp+9MLYXCq+sqP81eVQ0r9lt+gcQfZbACRbEjvlMskztZG8gbC8Qn9tt26Q7y7nDrbZq/LEz7kR6Jc6pg3N9rVX8Y5MJrGlML9p9lU4jbTkKqCveeZUJjHB03m2KRKR2TytoFkTXOLg7keU1s1lrPMQJpoOKLuAAC+y1HlJucU6ysB5hsXhvSPPLq5J7JtnqHKZ4vYjC4Vy8153QY+6780xDuGARsGbOs1WqzH0QS765rnSKEbbKlkO8oI/VDwUd0is13tKpqILu1mDJFNy/iJAWcvDgjxvusIT+PGz3ST/J9r9Mtfd0jpaGeiLYIqXc7DiHSS8TcjFVksi66PEkxW1z6ujbLLUGNNYnzOWpH8BZGK4bCK7iR+MbIv8ncDAz1u4StN3vTTzewr9IQjk9wxFxn+6N1ddKs0vffJiS08N3a4G1SVrlZ97Q/M+8G9fe5AP6d9/Qq4WRnORVhofPIKEdCr3llspUfE0oKIIYoByBRPh+bX1HLS3JWGJRhIvE1aW4NTd8ePi4Z+kXb+Z8snYfSNcqijhAgVsx4RCM54cXUiYkjeBmmC4ajOHrChoELscJJC7+9jjMjw5BagZKlgRMiSNYz7h7vvZIoQqbtQmspc0cUk1G/73iXtSpROl5wtLgQi0mW2Ex8i3WULhcggx6E1LMVHUsdc9GHI1PH3U2Ko0PyGdn9KdVOLm7FPBui0i9a0HpA60MsewVE4z8CAt5d401Gv6zXlIT5Ybit1VIA0FCs7wtvYreru1fUyW3oLAZ/+aTnZrOcYRNVA8spoRtlRoWflsRClFcgzkqiHOrf0/SVw+EpVaFlJ0g4Kxq1MMOmiQdpMNpte8lMMQqm6cIFXlnGbfJllysKDi+0JJMotkqgIxOSQgU9dn/lWkeVf8nUm3iwX2Nl3WDw9i6AUK3vBAbZZrcJpDQ/N64AVwjT07Jef30GSSmtNu2WlW7YoyW2FlWfZFQUwk867EdLYKk9VG6JgEnBiBxkY7LMo4YLQJJlAo9l/oTvJkSARDF/XtyAzM8O2t3eT/iXa6wDN3WewNmQHdPfsxChU/KtLG2Mn8i4ZqKdSlIaBZadxJmRzVS/o4yA65RTSViq60oa395Lqw0pzY4SipwE0SXXsKV+GZraGSkr/RW08wPRvqvSUkYBMA9lPx4m24az+IHmCbXA+0faxTRE9wuGeO06DIXa6QlKJ3puIyiuAVfPr736vzo2pBirS+Vxel3TMm3JKhz9o2ZoRvaFVpIkykb0Hcm4oHFBMcNSNj7/4GJt43ogonY2Vg4nsDQIWxAcorpXACzgBqQPjYsE/VUpXpwNManEru4NwMCFPkXvMoqvoeLN3qyu/N1eWEHttMD65v19l/0kH2mR35iv/FI+yjoHJ9gPMz67af3Mq/BoWXqu3rphiWMXVkmnPSEkpGpUI2h1MThideGFEOK6YZHPwYzMBvpNC7+ZHxPb7epfefGyIB4JzO9DTNEYnDLVVHdQyvOEVefrk6Uv5kTQYVYWWdqrdcIl7yljwwIWdfQ/y+2QB3eR/qxYObuYyB4gTbo2in4PzarU1sO9nETkmj9/AoxDA+JM3GMqQtJR4jtduHtnoCLxd1gQUscHRB/MoRYIEsP2pDZ9KvHgtlk1iTbWWbHhohwFEYX7y51fUV2nuUmnoUcqnWIQAAgl9LTVX+Bc0QGNEhChxHR4YjfE51PUdGfsSFE6ck7BL3/hTf9jLq4G1IafINxOLKeAtO7quulYvH5YOBc+zX7CrMgWnW47/jfRsWnJjYYoE7xMfWV2HN2iyIqLI";
  const FENCED = /* @__PURE__ */ new Map([[8217, "apostrophe"], [8260, "fraction slash"], [12539, "middle dot"]]);
  const NSM_MAX = 4;
  function decode_arithmetic(bytes2) {
    let pos = 0;
    function u16() {
      return bytes2[pos++] << 8 | bytes2[pos++];
    }
    let symbol_count = u16();
    let total = 1;
    let acc = [0, 1];
    for (let i = 1; i < symbol_count; i++) {
      acc.push(total += u16());
    }
    let skip = u16();
    let pos_payload = pos;
    pos += skip;
    let read_width = 0;
    let read_buffer = 0;
    function read_bit() {
      if (read_width == 0) {
        read_buffer = read_buffer << 8 | bytes2[pos++];
        read_width = 8;
      }
      return read_buffer >> --read_width & 1;
    }
    const N = 31;
    const FULL = 2 ** N;
    const HALF = FULL >>> 1;
    const QRTR = HALF >> 1;
    const MASK = FULL - 1;
    let register = 0;
    for (let i = 0; i < N; i++) register = register << 1 | read_bit();
    let symbols = [];
    let low = 0;
    let range = FULL;
    while (true) {
      let value = Math.floor(((register - low + 1) * total - 1) / range);
      let start = 0;
      let end = symbol_count;
      while (end - start > 1) {
        let mid = start + end >>> 1;
        if (value < acc[mid]) {
          end = mid;
        } else {
          start = mid;
        }
      }
      if (start == 0) break;
      symbols.push(start);
      let a = low + Math.floor(range * acc[start] / total);
      let b2 = low + Math.floor(range * acc[start + 1] / total) - 1;
      while (((a ^ b2) & HALF) == 0) {
        register = register << 1 & MASK | read_bit();
        a = a << 1 & MASK;
        b2 = b2 << 1 & MASK | 1;
      }
      while (a & ~b2 & QRTR) {
        register = register & HALF | register << 1 & MASK >>> 1 | read_bit();
        a = a << 1 ^ HALF;
        b2 = (b2 ^ HALF) << 1 | HALF | 1;
      }
      low = a;
      range = 1 + b2 - a;
    }
    let offset = symbol_count - 4;
    return symbols.map((x) => {
      switch (x - offset) {
        case 3:
          return offset + 65792 + (bytes2[pos_payload++] << 16 | bytes2[pos_payload++] << 8 | bytes2[pos_payload++]);
        case 2:
          return offset + 256 + (bytes2[pos_payload++] << 8 | bytes2[pos_payload++]);
        case 1:
          return offset + bytes2[pos_payload++];
        default:
          return x - 1;
      }
    });
  }
  function read_payload(v) {
    let pos = 0;
    return () => v[pos++];
  }
  function read_compressed_payload(s) {
    return read_payload(decode_arithmetic(unsafe_atob(s)));
  }
  function unsafe_atob(s) {
    let lookup = [];
    [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((c, i) => lookup[c.charCodeAt(0)] = i);
    let n2 = s.length;
    let ret = new Uint8Array(6 * n2 >> 3);
    for (let i = 0, pos = 0, width = 0, carry = 0; i < n2; i++) {
      carry = carry << 6 | lookup[s.charCodeAt(i)];
      width += 6;
      if (width >= 8) {
        ret[pos++] = carry >> (width -= 8);
      }
    }
    return ret;
  }
  function signed(i) {
    return i & 1 ? ~i >> 1 : i >> 1;
  }
  function read_deltas(n2, next) {
    let v = Array(n2);
    for (let i = 0, x = 0; i < n2; i++) v[i] = x += signed(next());
    return v;
  }
  function read_sorted(next, prev = 0) {
    let ret = [];
    while (true) {
      let x = next();
      let n2 = next();
      if (!n2) break;
      prev += x;
      for (let i = 0; i < n2; i++) {
        ret.push(prev + i);
      }
      prev += n2 + 1;
    }
    return ret;
  }
  function read_sorted_arrays(next) {
    return read_array_while(() => {
      let v = read_sorted(next);
      if (v.length) return v;
    });
  }
  function read_mapped(next) {
    let ret = [];
    while (true) {
      let w = next();
      if (w == 0) break;
      ret.push(read_linear_table(w, next));
    }
    while (true) {
      let w = next() - 1;
      if (w < 0) break;
      ret.push(read_replacement_table(w, next));
    }
    return ret.flat();
  }
  function read_array_while(next) {
    let v = [];
    while (true) {
      let x = next(v.length);
      if (!x) break;
      v.push(x);
    }
    return v;
  }
  function read_transposed(n2, w, next) {
    let m = Array(n2).fill().map(() => []);
    for (let i = 0; i < w; i++) {
      read_deltas(n2, next).forEach((x, j) => m[j].push(x));
    }
    return m;
  }
  function read_linear_table(w, next) {
    let dx = 1 + next();
    let dy = next();
    let vN = read_array_while(next);
    let m = read_transposed(vN.length, 1 + w, next);
    return m.flatMap((v, i) => {
      let [x, ...ys] = v;
      return Array(vN[i]).fill().map((_, j) => {
        let j_dy = j * dy;
        return [x + j * dx, ys.map((y) => y + j_dy)];
      });
    });
  }
  function read_replacement_table(w, next) {
    let n2 = 1 + next();
    let m = read_transposed(n2, 1 + w, next);
    return m.map((v) => [v[0], v.slice(1)]);
  }
  function read_trie(next) {
    let ret = [];
    let sorted = read_sorted(next);
    expand(decode([]), []);
    return ret;
    function decode(Q) {
      let S = next();
      let B = read_array_while(() => {
        let cps = read_sorted(next).map((i) => sorted[i]);
        if (cps.length) return decode(cps);
      });
      return { S, B, Q };
    }
    function expand({ S, B }, cps, saved) {
      if (S & 4 && saved === cps[cps.length - 1]) return;
      if (S & 2) saved = cps[cps.length - 1];
      if (S & 1) ret.push(cps);
      for (let br of B) {
        for (let cp of br.Q) {
          expand(br, [...cps, cp], saved);
        }
      }
    }
  }
  function hex_cp(cp) {
    return cp.toString(16).toUpperCase().padStart(2, "0");
  }
  function quote_cp(cp) {
    return `{${hex_cp(cp)}}`;
  }
  function explode_cp(s) {
    let cps = [];
    for (let pos = 0, len = s.length; pos < len; ) {
      let cp = s.codePointAt(pos);
      pos += cp < 65536 ? 1 : 2;
      cps.push(cp);
    }
    return cps;
  }
  function str_from_cps(cps) {
    const chunk = 4096;
    let len = cps.length;
    if (len < chunk) return String.fromCodePoint(...cps);
    let buf = [];
    for (let i = 0; i < len; ) {
      buf.push(String.fromCodePoint(...cps.slice(i, i += chunk)));
    }
    return buf.join("");
  }
  function compare_arrays(a, b2) {
    let n2 = a.length;
    let c = n2 - b2.length;
    for (let i = 0; c == 0 && i < n2; i++) c = a[i] - b2[i];
    return c;
  }
  var COMPRESSED = "AEUDTAHBCFQATQDRADAAcgAgADQAFAAsABQAHwAOACQADQARAAoAFwAHABIACAAPAAUACwAFAAwABAAQAAMABwAEAAoABQAIAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACgANAA0AAwAKAAkABAAdAAYAZwDSAdsDJgC0CkMB8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgsj26PTQyy8FfEQ8AY8IPAGcEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJF8AJpIBpob5AERSMAKNoAXqaQLUBMCzEiACnwRZEkkVsS7tANAsBG0RuAQLEPABv9HICTUBXigPZwRBApMDOwAamhtaABqEAY8KvKx3LQ4ArAB8UhwEBAVSagD8AEFZADkBIadVj2UMUgx5Il4ANQC9AxIB1BlbEPMAs30CGxlXAhwZKQIECBc6EbsCoxngzv7UzRQA8M0BawL6ZwkN7wABAD33OQRcsgLJCjMCjqUChtw/km+NAsXPAoP2BT84PwURAK0RAvptb6cApQS/OMMey5HJS84UdxpxTPkCogVFITaTOwERAK5pAvkNBOVyA7q3BKlOJSALAgUIBRcEdASpBXqzABXFSWZOawLCOqw//AolCZdvv3dSBkEQGyelEPcMMwG1ATsN7UvYBPEGOwTJH30ZGQ/NlZwIpS3dDO0m4y6hgFoj9SqDBe1L9DzdC01RaA9ZC2UJ4zpjgU4DIQENIosK3Q05CG0Q8wrJaw3lEUUHOQPVSZoApQcBCxEdNRW1JhBirAsJOXcG+xr2C48mrxMpevwF0xohBk0BKRr/AM8u54WwWjFcHE9fBgMLJSPHFKhQIA0lQLd4SBobBxUlqQKRQ3BKh1E2HpMh9jw9DWYuE1F8B/U8BRlPC4E8nkarRQ4R0j6NPUgiSUwsBDV/LC8niwnPD4UMuXxyAVkJIQmxDHETMREXN8UIOQcZLZckJxUIIUaVYJoE958D8xPRAwsFPwlBBxMDtRwtEy4VKQUNgSTXAvM21S6zAo9WgAEXBcsPJR/fEFBH4A7pCJsCZQODJesALRUhABcimwhDYwBfj9hTBS7LCMdqbCN0A2cU52ERcweRDlcHpxwzFb8c4XDIXguGCCijrwlbAXUJmQFfBOMICTVbjKAgQWdTi1gYmyBhQT9d/AIxDGUVn0S9h3gCiw9rEhsBNQFzBzkNAQJ3Ee0RaxCVCOuGBDW1M/g6JQRPIYMgEQonA09szgsnJvkM+GkBoxJiAww0PXfuZ6tgtiQX/QcZMsVBYCHxC5JPzQycGsEYQlQuGeQHvwPzGvMn6kFXBf8DowMTOk0z7gS9C2kIiwk/AEkOoxcH1xhqCnGM0AExiwG3mQNXkYMCb48GNwcLAGcLhwV55QAdAqcIowAFAM8DVwA5Aq0HnQAZAIVBAT0DJy8BIeUCjwOTCDHLAZUvAfMpBBvDDBUA9zduSgLDsQKAamaiBd1YAo4CSTUBTSUEBU5HUQOvceEA2wBLBhPfRwEVq0rLGuNDAd9vKwDHAPsABTUHBUEBzQHzbQC3AV8LMQmis7UBTekpAIMAFWsB1wKJAN0ANQB/8QFTAE0FWfkF0wJPSQERMRgrV2EBuwMfATMBDQB5BsuNpckHHwRtB9MCEBsV4QLvLge1AQMi3xPNQsUCvd5VoWACZIECYkJbTa9bNyACofcCaJgCZgkCn4Q4GwsCZjsCZiYEbgR/A38TA36SOQY5dxc5gjojIwJsHQIyNjgKAm3HAm2u74ozZ0UrAWcA3gDhAEoFB5gMjQD+C8IADbUCdy8CdqI/AnlLQwJ4uh1c20WuRtcCfD8CesgCfQkCfPAFWQUgSABIfWMkAoFtAoAAAoAFAn+uSVhKWxUXSswC0QEC0MxLJwOITwOH5kTFkTIC8qFdAwMDrkvOTC0lA89NTE2vAos/AorYwRsHHUNnBbcCjjcCjlxAl4ECjtkCjlx4UbRTNQpS1FSFApP7ApMMAOkAHFUeVa9V0AYsGymVhjLheGZFOzkCl58C77JYIagAWSUClo8ClnycAKlZrFoJgU0AOwKWtQKWTlxEXNECmcsCmWRcyl0HGQKcmznCOp0CnBYCn5sCnriKAB0PMSoPAp3xAp6SALU9YTRh7wKe0wKgbgGpAp6fHwKeTqVjyGQnJSsCJ68CJn4CoPsCoEwCot0CocQCpi8Cpc4Cp/8AfQKn8mh8aLEAA0lqHGrRAqzjAqyuAq1nAq0CAlcdAlXcArHh1wMfTmyXArK9DQKy6Bds4G1jbUhfAyXNArZcOz9ukAMpRQK4XgK5RxUCuSp3cDZw4QK9GQK72nCWAzIRAr6IcgIDM3ECvhpzInNPAsPLAsMEc4J0SzVFdOADPKcDPJoDPb8CxXwCxkcCxhCJAshpUQLIRALJTwLJLgJknQLd0nh5YXiueSVL0AMYo2cCAmH0GfOVJHsLXpJeuxECz2sCz2wvS1PS8xOfAMatAs9zASnqA04SfksFAtwnAtuKAtJPA1JcA1NfAQEDVYyAiT8AyxbtYEWCHILTgs6DjQLaxwLZ3oQQhEmnPAOGpQAvA2QOhnFZ+QBVAt9lAt64c3cC4i/tFAHzMCcB9JsB8tKHAuvzAulweQLq+QLq5AD5RwG5Au6JAuuclqqXAwLuPwOF4Jh5cOBxoQLzAwBpA44WmZMC9xMDkW4DkocC95gC+dkC+GaaHJqruzebHgOdgwL++gEbADmfHJ+zAwWNA6ZqA6bZANHFAwZqoYiiBQkDDEkCwAA/AwDhQRdTARHzA2sHl2cFAJMtK7evvdsBiZkUfxEEOQH7KQUhDp0JnwCS/SlXxQL3AZ0AtwW5AG8LbUEuFCaNLgFDAYD8AbUmAHUDDgRtACwCFgyhAAAKAj0CagPdA34EkQEgRQUhfAoABQBEABMANhICdwEABdUDa+8KxQIA9wqfJ7+xt+UBkSFBQgHpFH8RNMCJAAQAGwBaAkUChIsABjpTOpSNbQC4Oo860ACNOME63AClAOgAywE6gTo7Ofw5+Tt2iTpbO56JOm85GAFWATMBbAUvNV01njWtNWY1dTW2NcU1gjWRNdI14TWeNa017jX9NbI1wTYCNhE1xjXVNhY2JzXeNe02LjY9Ni41LSE2OjY9Njw2yTcIBJA8VzY4Nt03IDcPNsogN4k3MAoEsDxnNiQ3GTdsOo03IULUQwdC4EMLHA8PCZsobShRVQYA6X8A6bABFCnXAukBowC9BbcAbwNzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgBFLWZAu0BhQCjBcEAbykBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUABavAj626xQAJP0A3etzuf4NNRA7efy2Z9NQrCnC0OSyANz5BBIbJ5IFDR6miIavYS6tprjjmuKebxm5C74Q225X1pkaYYPb6f1DK4k3xMEBb9S2WMjEibTNWhsRJIA+vwNVEiXTE5iXs/wezV66oFLfp9NZGYW+Gk19J2+bCT6Ye2w6LDYdgzKMUabk595eLBCXANz9HUpWbATq9vqXVx9XDg+Pc9Xp4+bsS005SVM/BJBM4687WUuf+Uj9dEi8aDNaPxtpbDxcG1THTImUMZq4UCaaNYpsVqraNyKLJXDYsFZ/5jl7bLRtO88t7P3xZaAxhb5OdPMXqsSkp1WCieG8jXm1U99+blvLlXzPCS+M93VnJCiK+09LfaSaBAVBomyDgJua8dfUzR7ga34IvR2Nvj+A9heJ6lsl1KG4NkI1032Cnff1m1wof2B9oHJK4bi6JkEdSqeNeiuo6QoZZincoc73/TH9SXF8sCE7XyuYyW8WSgbGFCjPV0ihLKhdPs08Tx82fYAkLLc4I2wdl4apY7GU5lHRFzRWJep7Ww3wbeA3qmd59/86P4xuNaqDpygXt6M85glSBHOCGgJDnt+pN9bK7HApMguX6+06RZNjzVmcZJ+wcUrJ9//bpRNxNuKpNl9uFds+S9tdx7LaM5ZkIrPj6nIU9mnbFtVbs9s/uLgl8MVczAwet+iOEzzBlYW7RCMgE6gyNLeq6+1tIx4dpgZnd0DksJS5f+JNDpwwcPNXaaVspq1fbQajOrJgK0ofKtJ1Ne90L6VO4MOl5S886p7u6xo7OLjG8TGL+HU1JXGJgppg4nNbNJ5nlzSpuPYy21JUEcUA94PoFiZfjZue+QnyQ80ekOuZVkxx4g+cvhJfHgNl4hy1/a6+RKcKlar/J29y//EztlbVPHVUeQ1zX86eQVAjR/M3dA9w4W8LfaXp4EgM85wOWasli837PzVMOnsLzR+k3o75/lRPAJSE1xAKQzEi5v10ke+VBvRt1cwQRMd+U5mLCTGVd6XiZtgBG5cDi0w22GKcVNvHiu5LQbZEDVtz0onn7k5+heuKXVsZtSzilkLRAUmjMXEMB3J9YC50XBxPiz53SC+EhnPl9WsKCv92SM/OFFIMJZYfl0WW8tIO3UxYcwdMAj7FSmgrsZ2aAZO03BOhP1bNNZItyXYQFTpC3SG1VuPDqH9GkiCDmE+JwxyIVSO5siDErAOpEXFgjy6PQtOVDj+s6e1r8heWVvmZnTciuf4EiNZzCAd7SOMhXERIOlsHIMG399i9aLTy3m2hRLZjJVDNLS53iGIK11dPqQt0zBDyg6qc7YqkDm2M5Ve6dCWCaCbTXX2rToaIgz6+zh4lYUi/+6nqcFMAkQJKHYLK0wYk5N9szV6xihDbDDFr45lN1K4aCXBq/FitPSud9gLt5ZVn+ZqGX7cwm2z5EGMgfFpIFyhGGuDPmso6TItTMwny+7uPnLCf4W6goFQFV0oQSsc9VfMmVLcLr6ZetDZbaSFTLqnSO/bIPjA3/zAUoqgGFAEQS4IhuMzEp2I3jJzbzkk/IEmyax+rhZTwd6f+CGtwPixu8IvzACquPWPREu9ZvGkUzpRwvRRuaNN6cr0W1wWits9ICdYJ7ltbgMiSL3sTPeufgNcVqMVWFkCPDH4jG2jA0XcVgQj62Cb29v9f/z/+2KbYvIv/zzjpQAPkliaVDzNrW57TZ/ZOyZD0nlfMmAIBIAGAI0D3k/mdN4xr9v85ZbZbbqfH2jGd5hUqNZWwl5SPfoGmfElmazUIeNL1j/mkF7VNAzTq4jNt8JoQ11NQOcmhprXoxSxfRGJ9LDEOAQ+dmxAQH90iti9e2u/MoeuaGcDTHoC+xsmEeWmxEKefQuIzHbpw5Tc5cEocboAD09oipWQhtTO1wivf/O+DRe2rpl/E9wlrzBorjJsOeG1B/XPW4EaJEFdNlECEZga5ZoGRHXgYouGRuVkm8tDESiEyFNo+3s5M5puSdTyUL2llnINVHEt91XUNW4ewdMgJ4boJfEyt/iY5WXqbA+A2Fkt5Z0lutiWhe9nZIyIUjyXDC3UsaG1t+eNx6z4W/OYoTB7A6x+dNSTOi9AInctbESqm5gvOLww7OWXPrmHwVZasrl4eD113pm+JtT7JVOvnCXqdzzdTRHgJ0PiGTFYW5Gvt9R9LD6Lzfs0v/TZZHSmyVNq7viIHE6DBK7Qp07Iz55EM8SYtQvZf/obBniTWi5C2/ovHfw4VndkE5XYdjOhCMRjDeOEfXeN/CwfGduiUIfsoFeUxXeQXba7c7972XNv8w+dTjjUM0QeNAReW+J014dKAD/McQYXT7c0GQPIkn3Ll6R7gGjuiQoZD0TEeEqQpKoZ15g/0OPQI17QiSv9AUROa/V/TQN3dvLArec3RrsYlvBm1b8LWzltdugsC50lNKYLEp2a+ZZYqPejULRlOJh5zj/LVMyTDvwKhMxxwuDkxJ1QpoNI0OTWLom4Z71SNzI9TV1iXJrIu9Wcnd+MCaAw8o1jSXd94YU/1gnkrC9BUEOtQvEIQ7g0i6h+KL2JKk8Ydl7HruvgWMSAmNe+LshGhV4qnWHhO9/RIPQzY1tHRj2VqOyNsDpK0cww+56AdDC4gsWwY0XxoucIWIqs/GcwnWqlaT0KPr8mbK5U94/301i1WLt4YINTVvCFBrFZbIbY8eycOdeJ2teD5IfPLCRg7jjcFTwlMFNl9zdh/o3E/hHPwj7BWg0MU09pPrBLbrCgm54A6H+I6v27+jL5gkjWg/iYdks9jbfVP5y/n0dlgWEMlKasl7JvFZd56LfybW1eeaVO0gxTfXZwD8G4SI116yx7UKVRgui6Ya1YpixqXeNLc8IxtAwCU5IhwQgn+NqHnRaDv61CxKhOq4pOX7M6pkA+Pmpd4j1vn6ACUALoLLc4vpXci8VidLxzm7qFBe7s+quuJs6ETYmnpgS3LwSZxPIltgBDXz8M1k/W2ySNv2f9/NPhxLGK2D21dkHeSGmenRT3Yqcdl0m/h3OYr8V+lXNYGf8aCCpd4bWjE4QIPj7vUKN4Nrfs7ML6Y2OyS830JCnofg/k7lpFpt4SqZc5HGg1HCOrHvOdC8bP6FGDbE/VV0mX4IakzbdS/op+Kt3G24/8QbBV7y86sGSQ/vZzU8FXs7u6jIvwchsEP2BpIhW3G8uWNwa3HmjfH/ZjhhCWvluAcF+nMf14ClKg5hGgtPLJ98ueNAkc5Hs2WZlk2QHvfreCK1CCGO6nMZVSb99VM/ajr8WHTte9JSmkXq/i/U943HEbdzW6Re/S88dKgg8pGOLlAeNiqrcLkUR3/aClFpMXcOUP3rmETcWSfMXZE3TUOi8i+fqRnTYLflVx/Vb/6GJ7eIRZUA6k3RYR3iFSK9c4iDdNwJuZL2FKz/IK5VimcNWEqdXjSoxSgmF0UPlDoUlNrPcM7ftmA8Y9gKiqKEHuWN+AZRIwtVSxye2Kf8rM3lhJ5XcBXU9n4v0Oy1RU2M+4qM8AQPVwse8ErNSob5oFPWxuqZnVzo1qB/IBxkM3EVUKFUUlO3e51259GgNcJbCmlvrdjtoTW7rChm1wyCKzpCTwozUUEOIcWLneRLgMXh+SjGSFkAllzbGS5HK7LlfCMRNRDSvbQPjcXaenNYxCvu2Qyznz6StuxVj66SgI0T8B6/sfHAJYZaZ78thjOSIFumNWLQbeZixDCCC+v0YBtkxiBB3jefHqZ/dFHU+crbj6OvS1x/JDD7vlm7zOVPwpUC01nhxZuY/63E7g";
  const S0 = 44032;
  const L0 = 4352;
  const V0 = 4449;
  const T0 = 4519;
  const L_COUNT = 19;
  const V_COUNT = 21;
  const T_COUNT = 28;
  const N_COUNT = V_COUNT * T_COUNT;
  const S_COUNT = L_COUNT * N_COUNT;
  const S1 = S0 + S_COUNT;
  const L1 = L0 + L_COUNT;
  const V1 = V0 + V_COUNT;
  const T1 = T0 + T_COUNT;
  function unpack_cc(packed) {
    return packed >> 24 & 255;
  }
  function unpack_cp(packed) {
    return packed & 16777215;
  }
  let SHIFTED_RANK, EXCLUSIONS, DECOMP, RECOMP;
  function init$1() {
    let r = read_compressed_payload(COMPRESSED);
    SHIFTED_RANK = new Map(read_sorted_arrays(r).flatMap((v, i) => v.map((x) => [x, i + 1 << 24])));
    EXCLUSIONS = new Set(read_sorted(r));
    DECOMP = /* @__PURE__ */ new Map();
    RECOMP = /* @__PURE__ */ new Map();
    for (let [cp, cps] of read_mapped(r)) {
      if (!EXCLUSIONS.has(cp) && cps.length == 2) {
        let [a, b2] = cps;
        let bucket = RECOMP.get(a);
        if (!bucket) {
          bucket = /* @__PURE__ */ new Map();
          RECOMP.set(a, bucket);
        }
        bucket.set(b2, cp);
      }
      DECOMP.set(cp, cps.reverse());
    }
  }
  function is_hangul(cp) {
    return cp >= S0 && cp < S1;
  }
  function compose_pair(a, b2) {
    if (a >= L0 && a < L1 && b2 >= V0 && b2 < V1) {
      return S0 + (a - L0) * N_COUNT + (b2 - V0) * T_COUNT;
    } else if (is_hangul(a) && b2 > T0 && b2 < T1 && (a - S0) % T_COUNT == 0) {
      return a + (b2 - T0);
    } else {
      let recomp = RECOMP.get(a);
      if (recomp) {
        recomp = recomp.get(b2);
        if (recomp) {
          return recomp;
        }
      }
      return -1;
    }
  }
  function decomposed(cps) {
    if (!SHIFTED_RANK) init$1();
    let ret = [];
    let buf = [];
    let check_order = false;
    function add2(cp) {
      let cc = SHIFTED_RANK.get(cp);
      if (cc) {
        check_order = true;
        cp |= cc;
      }
      ret.push(cp);
    }
    for (let cp of cps) {
      while (true) {
        if (cp < 128) {
          ret.push(cp);
        } else if (is_hangul(cp)) {
          let s_index = cp - S0;
          let l_index = s_index / N_COUNT | 0;
          let v_index = s_index % N_COUNT / T_COUNT | 0;
          let t_index = s_index % T_COUNT;
          add2(L0 + l_index);
          add2(V0 + v_index);
          if (t_index > 0) add2(T0 + t_index);
        } else {
          let mapped = DECOMP.get(cp);
          if (mapped) {
            buf.push(...mapped);
          } else {
            add2(cp);
          }
        }
        if (!buf.length) break;
        cp = buf.pop();
      }
    }
    if (check_order && ret.length > 1) {
      let prev_cc = unpack_cc(ret[0]);
      for (let i = 1; i < ret.length; i++) {
        let cc = unpack_cc(ret[i]);
        if (cc == 0 || prev_cc <= cc) {
          prev_cc = cc;
          continue;
        }
        let j = i - 1;
        while (true) {
          let tmp = ret[j + 1];
          ret[j + 1] = ret[j];
          ret[j] = tmp;
          if (!j) break;
          prev_cc = unpack_cc(ret[--j]);
          if (prev_cc <= cc) break;
        }
        prev_cc = unpack_cc(ret[i]);
      }
    }
    return ret;
  }
  function composed_from_decomposed(v) {
    let ret = [];
    let stack = [];
    let prev_cp = -1;
    let prev_cc = 0;
    for (let packed of v) {
      let cc = unpack_cc(packed);
      let cp = unpack_cp(packed);
      if (prev_cp == -1) {
        if (cc == 0) {
          prev_cp = cp;
        } else {
          ret.push(cp);
        }
      } else if (prev_cc > 0 && prev_cc >= cc) {
        if (cc == 0) {
          ret.push(prev_cp, ...stack);
          stack.length = 0;
          prev_cp = cp;
        } else {
          stack.push(cp);
        }
        prev_cc = cc;
      } else {
        let composed = compose_pair(prev_cp, cp);
        if (composed >= 0) {
          prev_cp = composed;
        } else if (prev_cc == 0 && cc == 0) {
          ret.push(prev_cp);
          prev_cp = cp;
        } else {
          stack.push(cp);
          prev_cc = cc;
        }
      }
    }
    if (prev_cp >= 0) {
      ret.push(prev_cp, ...stack);
    }
    return ret;
  }
  function nfd(cps) {
    return decomposed(cps).map(unpack_cp);
  }
  function nfc(cps) {
    return composed_from_decomposed(decomposed(cps));
  }
  const HYPHEN = 45;
  const STOP_CH = ".";
  const FE0F = 65039;
  const UNIQUE_PH = 1;
  const Array_from = (x) => Array.from(x);
  function group_has_cp(g, cp) {
    return g.P.has(cp) || g.Q.has(cp);
  }
  class Emoji extends Array {
    get is_emoji() {
      return true;
    }
    // free tagging system
  }
  let MAPPED, IGNORED, CM, NSM, ESCAPE, GROUPS, WHOLE_VALID, WHOLE_MAP, VALID, EMOJI_LIST, EMOJI_ROOT;
  function init() {
    if (MAPPED) return;
    let r = read_compressed_payload(COMPRESSED$1);
    const read_sorted_array = () => read_sorted(r);
    const read_sorted_set = () => new Set(read_sorted_array());
    const set_add_many = (set2, v) => v.forEach((x) => set2.add(x));
    MAPPED = new Map(read_mapped(r));
    IGNORED = read_sorted_set();
    CM = read_sorted_array();
    NSM = new Set(read_sorted_array().map((i) => CM[i]));
    CM = new Set(CM);
    ESCAPE = read_sorted_set();
    read_sorted_set();
    let chunks = read_sorted_arrays(r);
    let unrestricted = r();
    const read_chunked = () => {
      let set2 = /* @__PURE__ */ new Set();
      read_sorted_array().forEach((i) => set_add_many(set2, chunks[i]));
      set_add_many(set2, read_sorted_array());
      return set2;
    };
    GROUPS = read_array_while((i) => {
      let N = read_array_while(r).map((x) => x + 96);
      if (N.length) {
        let R = i >= unrestricted;
        N[0] -= 32;
        N = str_from_cps(N);
        if (R) N = `Restricted[${N}]`;
        let P = read_chunked();
        let Q = read_chunked();
        let M = !r();
        return { N, P, Q, M, R };
      }
    });
    WHOLE_VALID = read_sorted_set();
    WHOLE_MAP = /* @__PURE__ */ new Map();
    let wholes = read_sorted_array().concat(Array_from(WHOLE_VALID)).sort((a, b2) => a - b2);
    wholes.forEach((cp, i) => {
      let d = r();
      let w = wholes[i] = d ? wholes[i - d] : { V: [], M: /* @__PURE__ */ new Map() };
      w.V.push(cp);
      if (!WHOLE_VALID.has(cp)) {
        WHOLE_MAP.set(cp, w);
      }
    });
    for (let { V, M } of new Set(WHOLE_MAP.values())) {
      let recs = [];
      for (let cp of V) {
        let gs = GROUPS.filter((g) => group_has_cp(g, cp));
        let rec = recs.find(({ G }) => gs.some((g) => G.has(g)));
        if (!rec) {
          rec = { G: /* @__PURE__ */ new Set(), V: [] };
          recs.push(rec);
        }
        rec.V.push(cp);
        set_add_many(rec.G, gs);
      }
      let union = recs.flatMap((x) => Array_from(x.G));
      for (let { G, V: V2 } of recs) {
        let complement = new Set(union.filter((g) => !G.has(g)));
        for (let cp of V2) {
          M.set(cp, complement);
        }
      }
    }
    VALID = /* @__PURE__ */ new Set();
    let multi = /* @__PURE__ */ new Set();
    const add_to_union = (cp) => VALID.has(cp) ? multi.add(cp) : VALID.add(cp);
    for (let g of GROUPS) {
      for (let cp of g.P) add_to_union(cp);
      for (let cp of g.Q) add_to_union(cp);
    }
    for (let cp of VALID) {
      if (!WHOLE_MAP.has(cp) && !multi.has(cp)) {
        WHOLE_MAP.set(cp, UNIQUE_PH);
      }
    }
    set_add_many(VALID, nfd(VALID));
    EMOJI_LIST = read_trie(r).map((v) => Emoji.from(v)).sort(compare_arrays);
    EMOJI_ROOT = /* @__PURE__ */ new Map();
    for (let cps of EMOJI_LIST) {
      let prev = [EMOJI_ROOT];
      for (let cp of cps) {
        let next = prev.map((node) => {
          let child = node.get(cp);
          if (!child) {
            child = /* @__PURE__ */ new Map();
            node.set(cp, child);
          }
          return child;
        });
        if (cp === FE0F) {
          prev.push(...next);
        } else {
          prev = next;
        }
      }
      for (let x of prev) {
        x.V = cps;
      }
    }
  }
  function quoted_cp(cp) {
    return (should_escape(cp) ? "" : `${bidi_qq(safe_str_from_cps([cp]))} `) + quote_cp(cp);
  }
  function bidi_qq(s) {
    return `"${s}"‎`;
  }
  function check_label_extension(cps) {
    if (cps.length >= 4 && cps[2] == HYPHEN && cps[3] == HYPHEN) {
      throw new Error(`invalid label extension: "${str_from_cps(cps.slice(0, 4))}"`);
    }
  }
  function check_leading_underscore(cps) {
    const UNDERSCORE = 95;
    for (let i = cps.lastIndexOf(UNDERSCORE); i > 0; ) {
      if (cps[--i] !== UNDERSCORE) {
        throw new Error("underscore allowed only at start");
      }
    }
  }
  function check_fenced(cps) {
    let cp = cps[0];
    let prev = FENCED.get(cp);
    if (prev) throw error_placement(`leading ${prev}`);
    let n2 = cps.length;
    let last = -1;
    for (let i = 1; i < n2; i++) {
      cp = cps[i];
      let match = FENCED.get(cp);
      if (match) {
        if (last == i) throw error_placement(`${prev} + ${match}`);
        last = i + 1;
        prev = match;
      }
    }
    if (last == n2) throw error_placement(`trailing ${prev}`);
  }
  function safe_str_from_cps(cps, max = Infinity, quoter = quote_cp) {
    let buf = [];
    if (is_combining_mark(cps[0])) buf.push("◌");
    if (cps.length > max) {
      max >>= 1;
      cps = [...cps.slice(0, max), 8230, ...cps.slice(-max)];
    }
    let prev = 0;
    let n2 = cps.length;
    for (let i = 0; i < n2; i++) {
      let cp = cps[i];
      if (should_escape(cp)) {
        buf.push(str_from_cps(cps.slice(prev, i)));
        buf.push(quoter(cp));
        prev = i + 1;
      }
    }
    buf.push(str_from_cps(cps.slice(prev, n2)));
    return buf.join("");
  }
  function is_combining_mark(cp) {
    init();
    return CM.has(cp);
  }
  function should_escape(cp) {
    init();
    return ESCAPE.has(cp);
  }
  function ens_normalize(name) {
    return flatten(split(name, nfc, filter_fe0f));
  }
  function split(name, nf, ef) {
    if (!name) return [];
    init();
    let offset = 0;
    return name.split(STOP_CH).map((label) => {
      let input = explode_cp(label);
      let info = {
        input,
        offset
        // codepoint, not substring!
      };
      offset += input.length + 1;
      try {
        let tokens = info.tokens = tokens_from_str(input, nf, ef);
        let token_count = tokens.length;
        let type;
        if (!token_count) {
          throw new Error(`empty label`);
        }
        let norm = info.output = tokens.flat();
        check_leading_underscore(norm);
        let emoji = info.emoji = token_count > 1 || tokens[0].is_emoji;
        if (!emoji && norm.every((cp) => cp < 128)) {
          check_label_extension(norm);
          type = "ASCII";
        } else {
          let chars = tokens.flatMap((x) => x.is_emoji ? [] : x);
          if (!chars.length) {
            type = "Emoji";
          } else {
            if (CM.has(norm[0])) throw error_placement("leading combining mark");
            for (let i = 1; i < token_count; i++) {
              let cps = tokens[i];
              if (!cps.is_emoji && CM.has(cps[0])) {
                throw error_placement(`emoji + combining mark: "${str_from_cps(tokens[i - 1])} + ${safe_str_from_cps([cps[0]])}"`);
              }
            }
            check_fenced(norm);
            let unique2 = Array_from(new Set(chars));
            let [g] = determine_group(unique2);
            check_group(g, chars);
            check_whole(g, unique2);
            type = g.N;
          }
        }
        info.type = type;
      } catch (err) {
        info.error = err;
      }
      return info;
    });
  }
  function check_whole(group, unique2) {
    let maker;
    let shared = [];
    for (let cp of unique2) {
      let whole = WHOLE_MAP.get(cp);
      if (whole === UNIQUE_PH) return;
      if (whole) {
        let set2 = whole.M.get(cp);
        maker = maker ? maker.filter((g) => set2.has(g)) : Array_from(set2);
        if (!maker.length) return;
      } else {
        shared.push(cp);
      }
    }
    if (maker) {
      for (let g of maker) {
        if (shared.every((cp) => group_has_cp(g, cp))) {
          throw new Error(`whole-script confusable: ${group.N}/${g.N}`);
        }
      }
    }
  }
  function determine_group(unique2) {
    let groups = GROUPS;
    for (let cp of unique2) {
      let gs = groups.filter((g) => group_has_cp(g, cp));
      if (!gs.length) {
        if (!GROUPS.some((g) => group_has_cp(g, cp))) {
          throw error_disallowed(cp);
        } else {
          throw error_group_member(groups[0], cp);
        }
      }
      groups = gs;
      if (gs.length == 1) break;
    }
    return groups;
  }
  function flatten(split2) {
    return split2.map(({ input, error, output: output2 }) => {
      if (error) {
        let msg = error.message;
        throw new Error(split2.length == 1 ? msg : `Invalid label ${bidi_qq(safe_str_from_cps(input, 63))}: ${msg}`);
      }
      return str_from_cps(output2);
    }).join(STOP_CH);
  }
  function error_disallowed(cp) {
    return new Error(`disallowed character: ${quoted_cp(cp)}`);
  }
  function error_group_member(g, cp) {
    let quoted = quoted_cp(cp);
    let gg = GROUPS.find((g2) => g2.P.has(cp));
    if (gg) {
      quoted = `${gg.N} ${quoted}`;
    }
    return new Error(`illegal mixture: ${g.N} + ${quoted}`);
  }
  function error_placement(where) {
    return new Error(`illegal placement: ${where}`);
  }
  function check_group(g, cps) {
    for (let cp of cps) {
      if (!group_has_cp(g, cp)) {
        throw error_group_member(g, cp);
      }
    }
    if (g.M) {
      let decomposed2 = nfd(cps);
      for (let i = 1, e = decomposed2.length; i < e; i++) {
        if (NSM.has(decomposed2[i])) {
          let j = i + 1;
          for (let cp; j < e && NSM.has(cp = decomposed2[j]); j++) {
            for (let k = i; k < j; k++) {
              if (decomposed2[k] == cp) {
                throw new Error(`duplicate non-spacing marks: ${quoted_cp(cp)}`);
              }
            }
          }
          if (j - i > NSM_MAX) {
            throw new Error(`excessive non-spacing marks: ${bidi_qq(safe_str_from_cps(decomposed2.slice(i - 1, j)))} (${j - i}/${NSM_MAX})`);
          }
          i = j;
        }
      }
    }
  }
  function tokens_from_str(input, nf, ef) {
    let ret = [];
    let chars = [];
    input = input.slice().reverse();
    while (input.length) {
      let emoji = consume_emoji_reversed(input);
      if (emoji) {
        if (chars.length) {
          ret.push(nf(chars));
          chars = [];
        }
        ret.push(ef(emoji));
      } else {
        let cp = input.pop();
        if (VALID.has(cp)) {
          chars.push(cp);
        } else {
          let cps = MAPPED.get(cp);
          if (cps) {
            chars.push(...cps);
          } else if (!IGNORED.has(cp)) {
            throw error_disallowed(cp);
          }
        }
      }
    }
    if (chars.length) {
      ret.push(nf(chars));
    }
    return ret;
  }
  function filter_fe0f(cps) {
    return cps.filter((cp) => cp != FE0F);
  }
  function consume_emoji_reversed(cps, eaten) {
    let node = EMOJI_ROOT;
    let emoji;
    let pos = cps.length;
    while (pos) {
      node = node.get(cps[--pos]);
      if (!node) break;
      let { V } = node;
      if (V) {
        emoji = V;
        cps.length = pos;
      }
    }
    return emoji;
  }
  const Zeros = new Uint8Array(32);
  Zeros.fill(0);
  function checkComponent(comp) {
    assertArgument(comp.length !== 0, "invalid ENS name; empty component", "comp", comp);
    return comp;
  }
  function ensNameSplit(name) {
    const bytes2 = toUtf8Bytes(ensNormalize(name));
    const comps = [];
    if (name.length === 0) {
      return comps;
    }
    let last = 0;
    for (let i = 0; i < bytes2.length; i++) {
      const d = bytes2[i];
      if (d === 46) {
        comps.push(checkComponent(bytes2.slice(last, i)));
        last = i + 1;
      }
    }
    assertArgument(last < bytes2.length, "invalid ENS name; empty component", "name", name);
    comps.push(checkComponent(bytes2.slice(last)));
    return comps;
  }
  function ensNormalize(name) {
    try {
      if (name.length === 0) {
        throw new Error("empty label");
      }
      return ens_normalize(name);
    } catch (error) {
      assertArgument(false, `invalid ENS name (${error.message})`, "name", name);
    }
  }
  function namehash(name) {
    assertArgument(typeof name === "string", "invalid ENS name; not a string", "name", name);
    assertArgument(name.length, `invalid ENS name (empty label)`, "name", name);
    let result = Zeros;
    const comps = ensNameSplit(name);
    while (comps.length) {
      result = keccak256(concat([result, keccak256(comps.pop())]));
    }
    return hexlify(result);
  }
  function dnsEncode(name, _maxLength) {
    const length = _maxLength;
    assertArgument(length <= 255, "DNS encoded label cannot exceed 255", "length", length);
    return hexlify(concat(ensNameSplit(name).map((comp) => {
      assertArgument(comp.length <= length, `label ${JSON.stringify(name)} exceeds ${length} bytes`, "name", name);
      const bytes2 = new Uint8Array(comp.length + 1);
      bytes2.set(comp, 1);
      bytes2[0] = bytes2.length - 1;
      return bytes2;
    }))) + "00";
  }
  function accessSetify(addr, storageKeys) {
    return {
      address: getAddress(addr),
      storageKeys: storageKeys.map((storageKey, index) => {
        assertArgument(isHexString(storageKey, 32), "invalid slot", `storageKeys[${index}]`, storageKey);
        return storageKey.toLowerCase();
      })
    };
  }
  function accessListify(value) {
    if (Array.isArray(value)) {
      return value.map((set2, index) => {
        if (Array.isArray(set2)) {
          assertArgument(set2.length === 2, "invalid slot set", `value[${index}]`, set2);
          return accessSetify(set2[0], set2[1]);
        }
        assertArgument(set2 != null && typeof set2 === "object", "invalid address-slot set", "value", value);
        return accessSetify(set2.address, set2.storageKeys);
      });
    }
    assertArgument(value != null && typeof value === "object", "invalid access list", "value", value);
    const result = Object.keys(value).map((addr) => {
      const storageKeys = value[addr].reduce((accum, storageKey) => {
        accum[storageKey] = true;
        return accum;
      }, {});
      return accessSetify(addr, Object.keys(storageKeys).sort());
    });
    result.sort((a, b2) => a.address.localeCompare(b2.address));
    return result;
  }
  function computeAddress(key) {
    let pubkey;
    if (typeof key === "string") {
      pubkey = SigningKey.computePublicKey(key, false);
    } else {
      pubkey = key.publicKey;
    }
    return getAddress(keccak256("0x" + pubkey.substring(4)).substring(26));
  }
  function recoverAddress(digest, signature) {
    return computeAddress(SigningKey.recoverPublicKey(digest, signature));
  }
  const BN_0$4 = BigInt(0);
  const BN_2$1 = BigInt(2);
  const BN_27 = BigInt(27);
  const BN_28 = BigInt(28);
  const BN_35 = BigInt(35);
  const BN_MAX_UINT = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
  const BLOB_SIZE = 4096 * 32;
  function getVersionedHash(version2, hash2) {
    let versioned = version2.toString(16);
    while (versioned.length < 2) {
      versioned = "0" + versioned;
    }
    versioned += sha256(hash2).substring(4);
    return "0x" + versioned;
  }
  function handleAddress(value) {
    if (value === "0x") {
      return null;
    }
    return getAddress(value);
  }
  function handleAccessList(value, param) {
    try {
      return accessListify(value);
    } catch (error) {
      assertArgument(false, error.message, param, value);
    }
  }
  function handleNumber(_value2, param) {
    if (_value2 === "0x") {
      return 0;
    }
    return getNumber(_value2, param);
  }
  function handleUint(_value2, param) {
    if (_value2 === "0x") {
      return BN_0$4;
    }
    const value = getBigInt(_value2, param);
    assertArgument(value <= BN_MAX_UINT, "value exceeds uint size", param, value);
    return value;
  }
  function formatNumber(_value2, name) {
    const value = getBigInt(_value2, "value");
    const result = toBeArray(value);
    assertArgument(result.length <= 32, `value too large`, `tx.${name}`, value);
    return result;
  }
  function formatAccessList(value) {
    return accessListify(value).map((set2) => [set2.address, set2.storageKeys]);
  }
  function formatHashes(value, param) {
    assertArgument(Array.isArray(value), `invalid ${param}`, "value", value);
    for (let i = 0; i < value.length; i++) {
      assertArgument(isHexString(value[i], 32), "invalid ${ param } hash", `value[${i}]`, value[i]);
    }
    return value;
  }
  function _parseLegacy(data) {
    const fields = decodeRlp(data);
    assertArgument(Array.isArray(fields) && (fields.length === 9 || fields.length === 6), "invalid field count for legacy transaction", "data", data);
    const tx = {
      type: 0,
      nonce: handleNumber(fields[0], "nonce"),
      gasPrice: handleUint(fields[1], "gasPrice"),
      gasLimit: handleUint(fields[2], "gasLimit"),
      to: handleAddress(fields[3]),
      value: handleUint(fields[4], "value"),
      data: hexlify(fields[5]),
      chainId: BN_0$4
    };
    if (fields.length === 6) {
      return tx;
    }
    const v = handleUint(fields[6], "v");
    const r = handleUint(fields[7], "r");
    const s = handleUint(fields[8], "s");
    if (r === BN_0$4 && s === BN_0$4) {
      tx.chainId = v;
    } else {
      let chainId = (v - BN_35) / BN_2$1;
      if (chainId < BN_0$4) {
        chainId = BN_0$4;
      }
      tx.chainId = chainId;
      assertArgument(chainId !== BN_0$4 || (v === BN_27 || v === BN_28), "non-canonical legacy v", "v", fields[6]);
      tx.signature = Signature.from({
        r: zeroPadValue(fields[7], 32),
        s: zeroPadValue(fields[8], 32),
        v
      });
    }
    return tx;
  }
  function _serializeLegacy(tx, sig) {
    const fields = [
      formatNumber(tx.nonce, "nonce"),
      formatNumber(tx.gasPrice || 0, "gasPrice"),
      formatNumber(tx.gasLimit, "gasLimit"),
      tx.to || "0x",
      formatNumber(tx.value, "value"),
      tx.data
    ];
    let chainId = BN_0$4;
    if (tx.chainId != BN_0$4) {
      chainId = getBigInt(tx.chainId, "tx.chainId");
      assertArgument(!sig || sig.networkV == null || sig.legacyChainId === chainId, "tx.chainId/sig.v mismatch", "sig", sig);
    } else if (tx.signature) {
      const legacy = tx.signature.legacyChainId;
      if (legacy != null) {
        chainId = legacy;
      }
    }
    if (!sig) {
      if (chainId !== BN_0$4) {
        fields.push(toBeArray(chainId));
        fields.push("0x");
        fields.push("0x");
      }
      return encodeRlp(fields);
    }
    let v = BigInt(27 + sig.yParity);
    if (chainId !== BN_0$4) {
      v = Signature.getChainIdV(chainId, sig.v);
    } else if (BigInt(sig.v) !== v) {
      assertArgument(false, "tx.chainId/sig.v mismatch", "sig", sig);
    }
    fields.push(toBeArray(v));
    fields.push(toBeArray(sig.r));
    fields.push(toBeArray(sig.s));
    return encodeRlp(fields);
  }
  function _parseEipSignature(tx, fields) {
    let yParity;
    try {
      yParity = handleNumber(fields[0], "yParity");
      if (yParity !== 0 && yParity !== 1) {
        throw new Error("bad yParity");
      }
    } catch (error) {
      assertArgument(false, "invalid yParity", "yParity", fields[0]);
    }
    const r = zeroPadValue(fields[1], 32);
    const s = zeroPadValue(fields[2], 32);
    const signature = Signature.from({ r, s, yParity });
    tx.signature = signature;
  }
  function _parseEip1559(data) {
    const fields = decodeRlp(getBytes(data).slice(1));
    assertArgument(Array.isArray(fields) && (fields.length === 9 || fields.length === 12), "invalid field count for transaction type: 2", "data", hexlify(data));
    const tx = {
      type: 2,
      chainId: handleUint(fields[0], "chainId"),
      nonce: handleNumber(fields[1], "nonce"),
      maxPriorityFeePerGas: handleUint(fields[2], "maxPriorityFeePerGas"),
      maxFeePerGas: handleUint(fields[3], "maxFeePerGas"),
      gasPrice: null,
      gasLimit: handleUint(fields[4], "gasLimit"),
      to: handleAddress(fields[5]),
      value: handleUint(fields[6], "value"),
      data: hexlify(fields[7]),
      accessList: handleAccessList(fields[8], "accessList")
    };
    if (fields.length === 9) {
      return tx;
    }
    _parseEipSignature(tx, fields.slice(9));
    return tx;
  }
  function _serializeEip1559(tx, sig) {
    const fields = [
      formatNumber(tx.chainId, "chainId"),
      formatNumber(tx.nonce, "nonce"),
      formatNumber(tx.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
      formatNumber(tx.maxFeePerGas || 0, "maxFeePerGas"),
      formatNumber(tx.gasLimit, "gasLimit"),
      tx.to || "0x",
      formatNumber(tx.value, "value"),
      tx.data,
      formatAccessList(tx.accessList || [])
    ];
    if (sig) {
      fields.push(formatNumber(sig.yParity, "yParity"));
      fields.push(toBeArray(sig.r));
      fields.push(toBeArray(sig.s));
    }
    return concat(["0x02", encodeRlp(fields)]);
  }
  function _parseEip2930(data) {
    const fields = decodeRlp(getBytes(data).slice(1));
    assertArgument(Array.isArray(fields) && (fields.length === 8 || fields.length === 11), "invalid field count for transaction type: 1", "data", hexlify(data));
    const tx = {
      type: 1,
      chainId: handleUint(fields[0], "chainId"),
      nonce: handleNumber(fields[1], "nonce"),
      gasPrice: handleUint(fields[2], "gasPrice"),
      gasLimit: handleUint(fields[3], "gasLimit"),
      to: handleAddress(fields[4]),
      value: handleUint(fields[5], "value"),
      data: hexlify(fields[6]),
      accessList: handleAccessList(fields[7], "accessList")
    };
    if (fields.length === 8) {
      return tx;
    }
    _parseEipSignature(tx, fields.slice(8));
    return tx;
  }
  function _serializeEip2930(tx, sig) {
    const fields = [
      formatNumber(tx.chainId, "chainId"),
      formatNumber(tx.nonce, "nonce"),
      formatNumber(tx.gasPrice || 0, "gasPrice"),
      formatNumber(tx.gasLimit, "gasLimit"),
      tx.to || "0x",
      formatNumber(tx.value, "value"),
      tx.data,
      formatAccessList(tx.accessList || [])
    ];
    if (sig) {
      fields.push(formatNumber(sig.yParity, "recoveryParam"));
      fields.push(toBeArray(sig.r));
      fields.push(toBeArray(sig.s));
    }
    return concat(["0x01", encodeRlp(fields)]);
  }
  function _parseEip4844(data) {
    let fields = decodeRlp(getBytes(data).slice(1));
    let typeName = "3";
    let blobs = null;
    if (fields.length === 4 && Array.isArray(fields[0])) {
      typeName = "3 (network format)";
      const fBlobs = fields[1], fCommits = fields[2], fProofs = fields[3];
      assertArgument(Array.isArray(fBlobs), "invalid network format: blobs not an array", "fields[1]", fBlobs);
      assertArgument(Array.isArray(fCommits), "invalid network format: commitments not an array", "fields[2]", fCommits);
      assertArgument(Array.isArray(fProofs), "invalid network format: proofs not an array", "fields[3]", fProofs);
      assertArgument(fBlobs.length === fCommits.length, "invalid network format: blobs/commitments length mismatch", "fields", fields);
      assertArgument(fBlobs.length === fProofs.length, "invalid network format: blobs/proofs length mismatch", "fields", fields);
      blobs = [];
      for (let i = 0; i < fields[1].length; i++) {
        blobs.push({
          data: fBlobs[i],
          commitment: fCommits[i],
          proof: fProofs[i]
        });
      }
      fields = fields[0];
    }
    assertArgument(Array.isArray(fields) && (fields.length === 11 || fields.length === 14), `invalid field count for transaction type: ${typeName}`, "data", hexlify(data));
    const tx = {
      type: 3,
      chainId: handleUint(fields[0], "chainId"),
      nonce: handleNumber(fields[1], "nonce"),
      maxPriorityFeePerGas: handleUint(fields[2], "maxPriorityFeePerGas"),
      maxFeePerGas: handleUint(fields[3], "maxFeePerGas"),
      gasPrice: null,
      gasLimit: handleUint(fields[4], "gasLimit"),
      to: handleAddress(fields[5]),
      value: handleUint(fields[6], "value"),
      data: hexlify(fields[7]),
      accessList: handleAccessList(fields[8], "accessList"),
      maxFeePerBlobGas: handleUint(fields[9], "maxFeePerBlobGas"),
      blobVersionedHashes: fields[10]
    };
    if (blobs) {
      tx.blobs = blobs;
    }
    assertArgument(tx.to != null, `invalid address for transaction type: ${typeName}`, "data", data);
    assertArgument(Array.isArray(tx.blobVersionedHashes), "invalid blobVersionedHashes: must be an array", "data", data);
    for (let i = 0; i < tx.blobVersionedHashes.length; i++) {
      assertArgument(isHexString(tx.blobVersionedHashes[i], 32), `invalid blobVersionedHash at index ${i}: must be length 32`, "data", data);
    }
    if (fields.length === 11) {
      return tx;
    }
    _parseEipSignature(tx, fields.slice(11));
    return tx;
  }
  function _serializeEip4844(tx, sig, blobs) {
    const fields = [
      formatNumber(tx.chainId, "chainId"),
      formatNumber(tx.nonce, "nonce"),
      formatNumber(tx.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
      formatNumber(tx.maxFeePerGas || 0, "maxFeePerGas"),
      formatNumber(tx.gasLimit, "gasLimit"),
      tx.to || ZeroAddress,
      formatNumber(tx.value, "value"),
      tx.data,
      formatAccessList(tx.accessList || []),
      formatNumber(tx.maxFeePerBlobGas || 0, "maxFeePerBlobGas"),
      formatHashes(tx.blobVersionedHashes || [], "blobVersionedHashes")
    ];
    if (sig) {
      fields.push(formatNumber(sig.yParity, "yParity"));
      fields.push(toBeArray(sig.r));
      fields.push(toBeArray(sig.s));
      if (blobs) {
        return concat([
          "0x03",
          encodeRlp([
            fields,
            blobs.map((b2) => b2.data),
            blobs.map((b2) => b2.commitment),
            blobs.map((b2) => b2.proof)
          ])
        ]);
      }
    }
    return concat(["0x03", encodeRlp(fields)]);
  }
  const _Transaction = class _Transaction {
    /**
     *  Creates a new Transaction with default values.
     */
    constructor() {
      __privateAdd(this, _Transaction_instances);
      __privateAdd(this, _type);
      __privateAdd(this, _to);
      __privateAdd(this, _data3);
      __privateAdd(this, _nonce);
      __privateAdd(this, _gasLimit);
      __privateAdd(this, _gasPrice);
      __privateAdd(this, _maxPriorityFeePerGas);
      __privateAdd(this, _maxFeePerGas);
      __privateAdd(this, _value);
      __privateAdd(this, _chainId);
      __privateAdd(this, _sig);
      __privateAdd(this, _accessList);
      __privateAdd(this, _maxFeePerBlobGas);
      __privateAdd(this, _blobVersionedHashes);
      __privateAdd(this, _kzg);
      __privateAdd(this, _blobs);
      __privateSet(this, _type, null);
      __privateSet(this, _to, null);
      __privateSet(this, _nonce, 0);
      __privateSet(this, _gasLimit, BN_0$4);
      __privateSet(this, _gasPrice, null);
      __privateSet(this, _maxPriorityFeePerGas, null);
      __privateSet(this, _maxFeePerGas, null);
      __privateSet(this, _data3, "0x");
      __privateSet(this, _value, BN_0$4);
      __privateSet(this, _chainId, BN_0$4);
      __privateSet(this, _sig, null);
      __privateSet(this, _accessList, null);
      __privateSet(this, _maxFeePerBlobGas, null);
      __privateSet(this, _blobVersionedHashes, null);
      __privateSet(this, _blobs, null);
      __privateSet(this, _kzg, null);
    }
    /**
     *  The transaction type.
     *
     *  If null, the type will be automatically inferred based on
     *  explicit properties.
     */
    get type() {
      return __privateGet(this, _type);
    }
    set type(value) {
      switch (value) {
        case null:
          __privateSet(this, _type, null);
          break;
        case 0:
        case "legacy":
          __privateSet(this, _type, 0);
          break;
        case 1:
        case "berlin":
        case "eip-2930":
          __privateSet(this, _type, 1);
          break;
        case 2:
        case "london":
        case "eip-1559":
          __privateSet(this, _type, 2);
          break;
        case 3:
        case "cancun":
        case "eip-4844":
          __privateSet(this, _type, 3);
          break;
        default:
          assertArgument(false, "unsupported transaction type", "type", value);
      }
    }
    /**
     *  The name of the transaction type.
     */
    get typeName() {
      switch (this.type) {
        case 0:
          return "legacy";
        case 1:
          return "eip-2930";
        case 2:
          return "eip-1559";
        case 3:
          return "eip-4844";
      }
      return null;
    }
    /**
     *  The ``to`` address for the transaction or ``null`` if the
     *  transaction is an ``init`` transaction.
     */
    get to() {
      const value = __privateGet(this, _to);
      if (value == null && this.type === 3) {
        return ZeroAddress;
      }
      return value;
    }
    set to(value) {
      __privateSet(this, _to, value == null ? null : getAddress(value));
    }
    /**
     *  The transaction nonce.
     */
    get nonce() {
      return __privateGet(this, _nonce);
    }
    set nonce(value) {
      __privateSet(this, _nonce, getNumber(value, "value"));
    }
    /**
     *  The gas limit.
     */
    get gasLimit() {
      return __privateGet(this, _gasLimit);
    }
    set gasLimit(value) {
      __privateSet(this, _gasLimit, getBigInt(value));
    }
    /**
     *  The gas price.
     *
     *  On legacy networks this defines the fee that will be paid. On
     *  EIP-1559 networks, this should be ``null``.
     */
    get gasPrice() {
      const value = __privateGet(this, _gasPrice);
      if (value == null && (this.type === 0 || this.type === 1)) {
        return BN_0$4;
      }
      return value;
    }
    set gasPrice(value) {
      __privateSet(this, _gasPrice, value == null ? null : getBigInt(value, "gasPrice"));
    }
    /**
     *  The maximum priority fee per unit of gas to pay. On legacy
     *  networks this should be ``null``.
     */
    get maxPriorityFeePerGas() {
      const value = __privateGet(this, _maxPriorityFeePerGas);
      if (value == null) {
        if (this.type === 2 || this.type === 3) {
          return BN_0$4;
        }
        return null;
      }
      return value;
    }
    set maxPriorityFeePerGas(value) {
      __privateSet(this, _maxPriorityFeePerGas, value == null ? null : getBigInt(value, "maxPriorityFeePerGas"));
    }
    /**
     *  The maximum total fee per unit of gas to pay. On legacy
     *  networks this should be ``null``.
     */
    get maxFeePerGas() {
      const value = __privateGet(this, _maxFeePerGas);
      if (value == null) {
        if (this.type === 2 || this.type === 3) {
          return BN_0$4;
        }
        return null;
      }
      return value;
    }
    set maxFeePerGas(value) {
      __privateSet(this, _maxFeePerGas, value == null ? null : getBigInt(value, "maxFeePerGas"));
    }
    /**
     *  The transaction data. For ``init`` transactions this is the
     *  deployment code.
     */
    get data() {
      return __privateGet(this, _data3);
    }
    set data(value) {
      __privateSet(this, _data3, hexlify(value));
    }
    /**
     *  The amount of ether (in wei) to send in this transactions.
     */
    get value() {
      return __privateGet(this, _value);
    }
    set value(value) {
      __privateSet(this, _value, getBigInt(value, "value"));
    }
    /**
     *  The chain ID this transaction is valid on.
     */
    get chainId() {
      return __privateGet(this, _chainId);
    }
    set chainId(value) {
      __privateSet(this, _chainId, getBigInt(value));
    }
    /**
     *  If signed, the signature for this transaction.
     */
    get signature() {
      return __privateGet(this, _sig) || null;
    }
    set signature(value) {
      __privateSet(this, _sig, value == null ? null : Signature.from(value));
    }
    /**
     *  The access list.
     *
     *  An access list permits discounted (but pre-paid) access to
     *  bytecode and state variable access within contract execution.
     */
    get accessList() {
      const value = __privateGet(this, _accessList) || null;
      if (value == null) {
        if (this.type === 1 || this.type === 2 || this.type === 3) {
          return [];
        }
        return null;
      }
      return value;
    }
    set accessList(value) {
      __privateSet(this, _accessList, value == null ? null : accessListify(value));
    }
    /**
     *  The max fee per blob gas for Cancun transactions.
     */
    get maxFeePerBlobGas() {
      const value = __privateGet(this, _maxFeePerBlobGas);
      if (value == null && this.type === 3) {
        return BN_0$4;
      }
      return value;
    }
    set maxFeePerBlobGas(value) {
      __privateSet(this, _maxFeePerBlobGas, value == null ? null : getBigInt(value, "maxFeePerBlobGas"));
    }
    /**
     *  The BLOb versioned hashes for Cancun transactions.
     */
    get blobVersionedHashes() {
      let value = __privateGet(this, _blobVersionedHashes);
      if (value == null && this.type === 3) {
        return [];
      }
      return value;
    }
    set blobVersionedHashes(value) {
      if (value != null) {
        assertArgument(Array.isArray(value), "blobVersionedHashes must be an Array", "value", value);
        value = value.slice();
        for (let i = 0; i < value.length; i++) {
          assertArgument(isHexString(value[i], 32), "invalid blobVersionedHash", `value[${i}]`, value[i]);
        }
      }
      __privateSet(this, _blobVersionedHashes, value);
    }
    /**
     *  The BLObs for the Transaction, if any.
     *
     *  If ``blobs`` is non-``null``, then the [[seriailized]]
     *  will return the network formatted sidecar, otherwise it
     *  will return the standard [[link-eip-2718]] payload. The
     *  [[unsignedSerialized]] is unaffected regardless.
     *
     *  When setting ``blobs``, either fully valid [[Blob]] objects
     *  may be specified (i.e. correctly padded, with correct
     *  committments and proofs) or a raw [[BytesLike]] may
     *  be provided.
     *
     *  If raw [[BytesLike]] are provided, the [[kzg]] property **must**
     *  be already set. The blob will be correctly padded and the
     *  [[KzgLibrary]] will be used to compute the committment and
     *  proof for the blob.
     *
     *  A BLOb is a sequence of field elements, each of which must
     *  be within the BLS field modulo, so some additional processing
     *  may be required to encode arbitrary data to ensure each 32 byte
     *  field is within the valid range.
     *
     *  Setting this automatically populates [[blobVersionedHashes]],
     *  overwriting any existing values. Setting this to ``null``
     *  does **not** remove the [[blobVersionedHashes]], leaving them
     *  present.
     */
    get blobs() {
      if (__privateGet(this, _blobs) == null) {
        return null;
      }
      return __privateGet(this, _blobs).map((b2) => Object.assign({}, b2));
    }
    set blobs(_blobs2) {
      if (_blobs2 == null) {
        __privateSet(this, _blobs, null);
        return;
      }
      const blobs = [];
      const versionedHashes = [];
      for (let i = 0; i < _blobs2.length; i++) {
        const blob = _blobs2[i];
        if (isBytesLike(blob)) {
          assert(__privateGet(this, _kzg), "adding a raw blob requires a KZG library", "UNSUPPORTED_OPERATION", {
            operation: "set blobs()"
          });
          let data = getBytes(blob);
          assertArgument(data.length <= BLOB_SIZE, "blob is too large", `blobs[${i}]`, blob);
          if (data.length !== BLOB_SIZE) {
            const padded = new Uint8Array(BLOB_SIZE);
            padded.set(data);
            data = padded;
          }
          const commit = __privateGet(this, _kzg).blobToKzgCommitment(data);
          const proof = hexlify(__privateGet(this, _kzg).computeBlobKzgProof(data, commit));
          blobs.push({
            data: hexlify(data),
            commitment: hexlify(commit),
            proof
          });
          versionedHashes.push(getVersionedHash(1, commit));
        } else {
          const commit = hexlify(blob.commitment);
          blobs.push({
            data: hexlify(blob.data),
            commitment: commit,
            proof: hexlify(blob.proof)
          });
          versionedHashes.push(getVersionedHash(1, commit));
        }
      }
      __privateSet(this, _blobs, blobs);
      __privateSet(this, _blobVersionedHashes, versionedHashes);
    }
    get kzg() {
      return __privateGet(this, _kzg);
    }
    set kzg(kzg) {
      __privateSet(this, _kzg, kzg);
    }
    /**
     *  The transaction hash, if signed. Otherwise, ``null``.
     */
    get hash() {
      if (this.signature == null) {
        return null;
      }
      return keccak256(__privateMethod(this, _Transaction_instances, getSerialized_fn).call(this, true, false));
    }
    /**
     *  The pre-image hash of this transaction.
     *
     *  This is the digest that a [[Signer]] must sign to authorize
     *  this transaction.
     */
    get unsignedHash() {
      return keccak256(this.unsignedSerialized);
    }
    /**
     *  The sending address, if signed. Otherwise, ``null``.
     */
    get from() {
      if (this.signature == null) {
        return null;
      }
      return recoverAddress(this.unsignedHash, this.signature);
    }
    /**
     *  The public key of the sender, if signed. Otherwise, ``null``.
     */
    get fromPublicKey() {
      if (this.signature == null) {
        return null;
      }
      return SigningKey.recoverPublicKey(this.unsignedHash, this.signature);
    }
    /**
     *  Returns true if signed.
     *
     *  This provides a Type Guard that properties requiring a signed
     *  transaction are non-null.
     */
    isSigned() {
      return this.signature != null;
    }
    /**
     *  The serialized transaction.
     *
     *  This throws if the transaction is unsigned. For the pre-image,
     *  use [[unsignedSerialized]].
     */
    get serialized() {
      return __privateMethod(this, _Transaction_instances, getSerialized_fn).call(this, true, true);
    }
    /**
     *  The transaction pre-image.
     *
     *  The hash of this is the digest which needs to be signed to
     *  authorize this transaction.
     */
    get unsignedSerialized() {
      return __privateMethod(this, _Transaction_instances, getSerialized_fn).call(this, false, false);
    }
    /**
     *  Return the most "likely" type; currently the highest
     *  supported transaction type.
     */
    inferType() {
      const types = this.inferTypes();
      if (types.indexOf(2) >= 0) {
        return 2;
      }
      return types.pop();
    }
    /**
     *  Validates the explicit properties and returns a list of compatible
     *  transaction types.
     */
    inferTypes() {
      const hasGasPrice = this.gasPrice != null;
      const hasFee = this.maxFeePerGas != null || this.maxPriorityFeePerGas != null;
      const hasAccessList = this.accessList != null;
      const hasBlob = __privateGet(this, _maxFeePerBlobGas) != null || __privateGet(this, _blobVersionedHashes);
      if (this.maxFeePerGas != null && this.maxPriorityFeePerGas != null) {
        assert(this.maxFeePerGas >= this.maxPriorityFeePerGas, "priorityFee cannot be more than maxFee", "BAD_DATA", { value: this });
      }
      assert(!hasFee || this.type !== 0 && this.type !== 1, "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas", "BAD_DATA", { value: this });
      assert(this.type !== 0 || !hasAccessList, "legacy transaction cannot have accessList", "BAD_DATA", { value: this });
      const types = [];
      if (this.type != null) {
        types.push(this.type);
      } else {
        if (hasFee) {
          types.push(2);
        } else if (hasGasPrice) {
          types.push(1);
          if (!hasAccessList) {
            types.push(0);
          }
        } else if (hasAccessList) {
          types.push(1);
          types.push(2);
        } else if (hasBlob && this.to) {
          types.push(3);
        } else {
          types.push(0);
          types.push(1);
          types.push(2);
          types.push(3);
        }
      }
      types.sort();
      return types;
    }
    /**
     *  Returns true if this transaction is a legacy transaction (i.e.
     *  ``type === 0``).
     *
     *  This provides a Type Guard that the related properties are
     *  non-null.
     */
    isLegacy() {
      return this.type === 0;
    }
    /**
     *  Returns true if this transaction is berlin hardform transaction (i.e.
     *  ``type === 1``).
     *
     *  This provides a Type Guard that the related properties are
     *  non-null.
     */
    isBerlin() {
      return this.type === 1;
    }
    /**
     *  Returns true if this transaction is london hardform transaction (i.e.
     *  ``type === 2``).
     *
     *  This provides a Type Guard that the related properties are
     *  non-null.
     */
    isLondon() {
      return this.type === 2;
    }
    /**
     *  Returns true if this transaction is an [[link-eip-4844]] BLOB
     *  transaction.
     *
     *  This provides a Type Guard that the related properties are
     *  non-null.
     */
    isCancun() {
      return this.type === 3;
    }
    /**
     *  Create a copy of this transaciton.
     */
    clone() {
      return _Transaction.from(this);
    }
    /**
     *  Return a JSON-friendly object.
     */
    toJSON() {
      const s = (v) => {
        if (v == null) {
          return null;
        }
        return v.toString();
      };
      return {
        type: this.type,
        to: this.to,
        //            from: this.from,
        data: this.data,
        nonce: this.nonce,
        gasLimit: s(this.gasLimit),
        gasPrice: s(this.gasPrice),
        maxPriorityFeePerGas: s(this.maxPriorityFeePerGas),
        maxFeePerGas: s(this.maxFeePerGas),
        value: s(this.value),
        chainId: s(this.chainId),
        sig: this.signature ? this.signature.toJSON() : null,
        accessList: this.accessList
      };
    }
    /**
     *  Create a **Transaction** from a serialized transaction or a
     *  Transaction-like object.
     */
    static from(tx) {
      if (tx == null) {
        return new _Transaction();
      }
      if (typeof tx === "string") {
        const payload = getBytes(tx);
        if (payload[0] >= 127) {
          return _Transaction.from(_parseLegacy(payload));
        }
        switch (payload[0]) {
          case 1:
            return _Transaction.from(_parseEip2930(payload));
          case 2:
            return _Transaction.from(_parseEip1559(payload));
          case 3:
            return _Transaction.from(_parseEip4844(payload));
        }
        assert(false, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: "from" });
      }
      const result = new _Transaction();
      if (tx.type != null) {
        result.type = tx.type;
      }
      if (tx.to != null) {
        result.to = tx.to;
      }
      if (tx.nonce != null) {
        result.nonce = tx.nonce;
      }
      if (tx.gasLimit != null) {
        result.gasLimit = tx.gasLimit;
      }
      if (tx.gasPrice != null) {
        result.gasPrice = tx.gasPrice;
      }
      if (tx.maxPriorityFeePerGas != null) {
        result.maxPriorityFeePerGas = tx.maxPriorityFeePerGas;
      }
      if (tx.maxFeePerGas != null) {
        result.maxFeePerGas = tx.maxFeePerGas;
      }
      if (tx.maxFeePerBlobGas != null) {
        result.maxFeePerBlobGas = tx.maxFeePerBlobGas;
      }
      if (tx.data != null) {
        result.data = tx.data;
      }
      if (tx.value != null) {
        result.value = tx.value;
      }
      if (tx.chainId != null) {
        result.chainId = tx.chainId;
      }
      if (tx.signature != null) {
        result.signature = Signature.from(tx.signature);
      }
      if (tx.accessList != null) {
        result.accessList = tx.accessList;
      }
      if (tx.blobVersionedHashes != null) {
        result.blobVersionedHashes = tx.blobVersionedHashes;
      }
      if (tx.kzg != null) {
        result.kzg = tx.kzg;
      }
      if (tx.blobs != null) {
        result.blobs = tx.blobs;
      }
      if (tx.hash != null) {
        assertArgument(result.isSigned(), "unsigned transaction cannot define '.hash'", "tx", tx);
        assertArgument(result.hash === tx.hash, "hash mismatch", "tx", tx);
      }
      if (tx.from != null) {
        assertArgument(result.isSigned(), "unsigned transaction cannot define '.from'", "tx", tx);
        assertArgument(result.from.toLowerCase() === (tx.from || "").toLowerCase(), "from mismatch", "tx", tx);
      }
      return result;
    }
  };
  _type = new WeakMap();
  _to = new WeakMap();
  _data3 = new WeakMap();
  _nonce = new WeakMap();
  _gasLimit = new WeakMap();
  _gasPrice = new WeakMap();
  _maxPriorityFeePerGas = new WeakMap();
  _maxFeePerGas = new WeakMap();
  _value = new WeakMap();
  _chainId = new WeakMap();
  _sig = new WeakMap();
  _accessList = new WeakMap();
  _maxFeePerBlobGas = new WeakMap();
  _blobVersionedHashes = new WeakMap();
  _kzg = new WeakMap();
  _blobs = new WeakMap();
  _Transaction_instances = new WeakSet();
  getSerialized_fn = function(signed2, sidecar) {
    assert(!signed2 || this.signature != null, "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
    const sig = signed2 ? this.signature : null;
    switch (this.inferType()) {
      case 0:
        return _serializeLegacy(this, sig);
      case 1:
        return _serializeEip2930(this, sig);
      case 2:
        return _serializeEip1559(this, sig);
      case 3:
        return _serializeEip4844(this, sig, sidecar ? this.blobs : null);
    }
    assert(false, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
  };
  let Transaction = _Transaction;
  const padding = new Uint8Array(32);
  padding.fill(0);
  const BN__1 = BigInt(-1);
  const BN_0$3 = BigInt(0);
  const BN_1 = BigInt(1);
  const BN_MAX_UINT256 = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
  function hexPadRight(value) {
    const bytes2 = getBytes(value);
    const padOffset = bytes2.length % 32;
    if (padOffset) {
      return concat([bytes2, padding.slice(padOffset)]);
    }
    return hexlify(bytes2);
  }
  const hexTrue = toBeHex(BN_1, 32);
  const hexFalse = toBeHex(BN_0$3, 32);
  const domainFieldTypes = {
    name: "string",
    version: "string",
    chainId: "uint256",
    verifyingContract: "address",
    salt: "bytes32"
  };
  const domainFieldNames = [
    "name",
    "version",
    "chainId",
    "verifyingContract",
    "salt"
  ];
  function checkString(key) {
    return function(value) {
      assertArgument(typeof value === "string", `invalid domain value for ${JSON.stringify(key)}`, `domain.${key}`, value);
      return value;
    };
  }
  const domainChecks = {
    name: checkString("name"),
    version: checkString("version"),
    chainId: function(_value2) {
      const value = getBigInt(_value2, "domain.chainId");
      assertArgument(value >= 0, "invalid chain ID", "domain.chainId", _value2);
      if (Number.isSafeInteger(value)) {
        return Number(value);
      }
      return toQuantity(value);
    },
    verifyingContract: function(value) {
      try {
        return getAddress(value).toLowerCase();
      } catch (error) {
      }
      assertArgument(false, `invalid domain value "verifyingContract"`, "domain.verifyingContract", value);
    },
    salt: function(value) {
      const bytes2 = getBytes(value, "domain.salt");
      assertArgument(bytes2.length === 32, `invalid domain value "salt"`, "domain.salt", value);
      return hexlify(bytes2);
    }
  };
  function getBaseEncoder(type) {
    {
      const match = type.match(/^(u?)int(\d+)$/);
      if (match) {
        const signed2 = match[1] === "";
        const width = parseInt(match[2]);
        assertArgument(width % 8 === 0 && width !== 0 && width <= 256 && match[2] === String(width), "invalid numeric width", "type", type);
        const boundsUpper = mask(BN_MAX_UINT256, signed2 ? width - 1 : width);
        const boundsLower = signed2 ? (boundsUpper + BN_1) * BN__1 : BN_0$3;
        return function(_value2) {
          const value = getBigInt(_value2, "value");
          assertArgument(value >= boundsLower && value <= boundsUpper, `value out-of-bounds for ${type}`, "value", value);
          return toBeHex(signed2 ? toTwos(value, 256) : value, 32);
        };
      }
    }
    {
      const match = type.match(/^bytes(\d+)$/);
      if (match) {
        const width = parseInt(match[1]);
        assertArgument(width !== 0 && width <= 32 && match[1] === String(width), "invalid bytes width", "type", type);
        return function(value) {
          const bytes2 = getBytes(value);
          assertArgument(bytes2.length === width, `invalid length for ${type}`, "value", value);
          return hexPadRight(value);
        };
      }
    }
    switch (type) {
      case "address":
        return function(value) {
          return zeroPadValue(getAddress(value), 32);
        };
      case "bool":
        return function(value) {
          return !value ? hexFalse : hexTrue;
        };
      case "bytes":
        return function(value) {
          return keccak256(value);
        };
      case "string":
        return function(value) {
          return id(value);
        };
    }
    return null;
  }
  function encodeType(name, fields) {
    return `${name}(${fields.map(({ name: name2, type }) => type + " " + name2).join(",")})`;
  }
  function splitArray(type) {
    const match = type.match(/^([^\x5b]*)((\x5b\d*\x5d)*)(\x5b(\d*)\x5d)$/);
    if (match) {
      return {
        base: match[1],
        index: match[2] + match[4],
        array: {
          base: match[1],
          prefix: match[1] + match[2],
          count: match[5] ? parseInt(match[5]) : -1
        }
      };
    }
    return { base: type };
  }
  const _TypedDataEncoder = class _TypedDataEncoder {
    /**
     *  Create a new **TypedDataEncoder** for %%types%%.
     *
     *  This performs all necessary checking that types are valid and
     *  do not violate the [[link-eip-712]] structural constraints as
     *  well as computes the [[primaryType]].
     */
    constructor(_types2) {
      __privateAdd(this, _TypedDataEncoder_instances);
      /**
       *  The primary type for the structured [[types]].
       *
       *  This is derived automatically from the [[types]], since no
       *  recursion is possible, once the DAG for the types is consturcted
       *  internally, the primary type must be the only remaining type with
       *  no parent nodes.
       */
      __publicField(this, "primaryType");
      __privateAdd(this, _types);
      __privateAdd(this, _fullTypes);
      __privateAdd(this, _encoderCache);
      __privateSet(this, _fullTypes, /* @__PURE__ */ new Map());
      __privateSet(this, _encoderCache, /* @__PURE__ */ new Map());
      const links = /* @__PURE__ */ new Map();
      const parents = /* @__PURE__ */ new Map();
      const subtypes = /* @__PURE__ */ new Map();
      const types = {};
      Object.keys(_types2).forEach((type) => {
        types[type] = _types2[type].map(({ name, type: type2 }) => {
          let { base, index } = splitArray(type2);
          if (base === "int" && !_types2["int"]) {
            base = "int256";
          }
          if (base === "uint" && !_types2["uint"]) {
            base = "uint256";
          }
          return { name, type: base + (index || "") };
        });
        links.set(type, /* @__PURE__ */ new Set());
        parents.set(type, []);
        subtypes.set(type, /* @__PURE__ */ new Set());
      });
      __privateSet(this, _types, JSON.stringify(types));
      for (const name in types) {
        const uniqueNames = /* @__PURE__ */ new Set();
        for (const field of types[name]) {
          assertArgument(!uniqueNames.has(field.name), `duplicate variable name ${JSON.stringify(field.name)} in ${JSON.stringify(name)}`, "types", _types2);
          uniqueNames.add(field.name);
          const baseType = splitArray(field.type).base;
          assertArgument(baseType !== name, `circular type reference to ${JSON.stringify(baseType)}`, "types", _types2);
          const encoder = getBaseEncoder(baseType);
          if (encoder) {
            continue;
          }
          assertArgument(parents.has(baseType), `unknown type ${JSON.stringify(baseType)}`, "types", _types2);
          parents.get(baseType).push(name);
          links.get(name).add(baseType);
        }
      }
      const primaryTypes = Array.from(parents.keys()).filter((n2) => parents.get(n2).length === 0);
      assertArgument(primaryTypes.length !== 0, "missing primary type", "types", _types2);
      assertArgument(primaryTypes.length === 1, `ambiguous primary types or unused types: ${primaryTypes.map((t) => JSON.stringify(t)).join(", ")}`, "types", _types2);
      defineProperties(this, { primaryType: primaryTypes[0] });
      function checkCircular(type, found) {
        assertArgument(!found.has(type), `circular type reference to ${JSON.stringify(type)}`, "types", _types2);
        found.add(type);
        for (const child of links.get(type)) {
          if (!parents.has(child)) {
            continue;
          }
          checkCircular(child, found);
          for (const subtype of found) {
            subtypes.get(subtype).add(child);
          }
        }
        found.delete(type);
      }
      checkCircular(this.primaryType, /* @__PURE__ */ new Set());
      for (const [name, set2] of subtypes) {
        const st = Array.from(set2);
        st.sort();
        __privateGet(this, _fullTypes).set(name, encodeType(name, types[name]) + st.map((t) => encodeType(t, types[t])).join(""));
      }
    }
    /**
     *  The types.
     */
    get types() {
      return JSON.parse(__privateGet(this, _types));
    }
    /**
     *  Returnthe encoder for the specific %%type%%.
     */
    getEncoder(type) {
      let encoder = __privateGet(this, _encoderCache).get(type);
      if (!encoder) {
        encoder = __privateMethod(this, _TypedDataEncoder_instances, getEncoder_fn).call(this, type);
        __privateGet(this, _encoderCache).set(type, encoder);
      }
      return encoder;
    }
    /**
     *  Return the full type for %%name%%.
     */
    encodeType(name) {
      const result = __privateGet(this, _fullTypes).get(name);
      assertArgument(result, `unknown type: ${JSON.stringify(name)}`, "name", name);
      return result;
    }
    /**
     *  Return the encoded %%value%% for the %%type%%.
     */
    encodeData(type, value) {
      return this.getEncoder(type)(value);
    }
    /**
     *  Returns the hash of %%value%% for the type of %%name%%.
     */
    hashStruct(name, value) {
      return keccak256(this.encodeData(name, value));
    }
    /**
     *  Return the fulled encoded %%value%% for the [[types]].
     */
    encode(value) {
      return this.encodeData(this.primaryType, value);
    }
    /**
     *  Return the hash of the fully encoded %%value%% for the [[types]].
     */
    hash(value) {
      return this.hashStruct(this.primaryType, value);
    }
    /**
     *  @_ignore:
     */
    _visit(type, value, callback) {
      {
        const encoder = getBaseEncoder(type);
        if (encoder) {
          return callback(type, value);
        }
      }
      const array = splitArray(type).array;
      if (array) {
        assertArgument(array.count === -1 || array.count === value.length, `array length mismatch; expected length ${array.count}`, "value", value);
        return value.map((v) => this._visit(array.prefix, v, callback));
      }
      const fields = this.types[type];
      if (fields) {
        return fields.reduce((accum, { name, type: type2 }) => {
          accum[name] = this._visit(type2, value[name], callback);
          return accum;
        }, {});
      }
      assertArgument(false, `unknown type: ${type}`, "type", type);
    }
    /**
     *  Call %%calback%% for each value in %%value%%, passing the type and
     *  component within %%value%%.
     *
     *  This is useful for replacing addresses or other transformation that
     *  may be desired on each component, based on its type.
     */
    visit(value, callback) {
      return this._visit(this.primaryType, value, callback);
    }
    /**
     *  Create a new **TypedDataEncoder** for %%types%%.
     */
    static from(types) {
      return new _TypedDataEncoder(types);
    }
    /**
     *  Return the primary type for %%types%%.
     */
    static getPrimaryType(types) {
      return _TypedDataEncoder.from(types).primaryType;
    }
    /**
     *  Return the hashed struct for %%value%% using %%types%% and %%name%%.
     */
    static hashStruct(name, types, value) {
      return _TypedDataEncoder.from(types).hashStruct(name, value);
    }
    /**
     *  Return the domain hash for %%domain%%.
     */
    static hashDomain(domain) {
      const domainFields = [];
      for (const name in domain) {
        if (domain[name] == null) {
          continue;
        }
        const type = domainFieldTypes[name];
        assertArgument(type, `invalid typed-data domain key: ${JSON.stringify(name)}`, "domain", domain);
        domainFields.push({ name, type });
      }
      domainFields.sort((a, b2) => {
        return domainFieldNames.indexOf(a.name) - domainFieldNames.indexOf(b2.name);
      });
      return _TypedDataEncoder.hashStruct("EIP712Domain", { EIP712Domain: domainFields }, domain);
    }
    /**
     *  Return the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
     */
    static encode(domain, types, value) {
      return concat([
        "0x1901",
        _TypedDataEncoder.hashDomain(domain),
        _TypedDataEncoder.from(types).hash(value)
      ]);
    }
    /**
     *  Return the hash of the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
     */
    static hash(domain, types, value) {
      return keccak256(_TypedDataEncoder.encode(domain, types, value));
    }
    // Replaces all address types with ENS names with their looked up address
    /**
     * Resolves to the value from resolving all addresses in %%value%% for
     * %%types%% and the %%domain%%.
     */
    static async resolveNames(domain, types, value, resolveName) {
      domain = Object.assign({}, domain);
      for (const key in domain) {
        if (domain[key] == null) {
          delete domain[key];
        }
      }
      const ensCache = {};
      if (domain.verifyingContract && !isHexString(domain.verifyingContract, 20)) {
        ensCache[domain.verifyingContract] = "0x";
      }
      const encoder = _TypedDataEncoder.from(types);
      encoder.visit(value, (type, value2) => {
        if (type === "address" && !isHexString(value2, 20)) {
          ensCache[value2] = "0x";
        }
        return value2;
      });
      for (const name in ensCache) {
        ensCache[name] = await resolveName(name);
      }
      if (domain.verifyingContract && ensCache[domain.verifyingContract]) {
        domain.verifyingContract = ensCache[domain.verifyingContract];
      }
      value = encoder.visit(value, (type, value2) => {
        if (type === "address" && ensCache[value2]) {
          return ensCache[value2];
        }
        return value2;
      });
      return { domain, value };
    }
    /**
     *  Returns the JSON-encoded payload expected by nodes which implement
     *  the JSON-RPC [[link-eip-712]] method.
     */
    static getPayload(domain, types, value) {
      _TypedDataEncoder.hashDomain(domain);
      const domainValues = {};
      const domainTypes = [];
      domainFieldNames.forEach((name) => {
        const value2 = domain[name];
        if (value2 == null) {
          return;
        }
        domainValues[name] = domainChecks[name](value2);
        domainTypes.push({ name, type: domainFieldTypes[name] });
      });
      const encoder = _TypedDataEncoder.from(types);
      types = encoder.types;
      const typesWithDomain = Object.assign({}, types);
      assertArgument(typesWithDomain.EIP712Domain == null, "types must not contain EIP712Domain type", "types.EIP712Domain", types);
      typesWithDomain.EIP712Domain = domainTypes;
      encoder.encode(value);
      return {
        types: typesWithDomain,
        domain: domainValues,
        primaryType: encoder.primaryType,
        message: encoder.visit(value, (type, value2) => {
          if (type.match(/^bytes(\d*)/)) {
            return hexlify(getBytes(value2));
          }
          if (type.match(/^u?int/)) {
            return getBigInt(value2).toString();
          }
          switch (type) {
            case "address":
              return value2.toLowerCase();
            case "bool":
              return !!value2;
            case "string":
              assertArgument(typeof value2 === "string", "invalid string", "value", value2);
              return value2;
          }
          assertArgument(false, "unsupported type", "type", type);
        })
      };
    }
  };
  _types = new WeakMap();
  _fullTypes = new WeakMap();
  _encoderCache = new WeakMap();
  _TypedDataEncoder_instances = new WeakSet();
  getEncoder_fn = function(type) {
    {
      const encoder = getBaseEncoder(type);
      if (encoder) {
        return encoder;
      }
    }
    const array = splitArray(type).array;
    if (array) {
      const subtype = array.prefix;
      const subEncoder = this.getEncoder(subtype);
      return (value) => {
        assertArgument(array.count === -1 || array.count === value.length, `array length mismatch; expected length ${array.count}`, "value", value);
        let result = value.map(subEncoder);
        if (__privateGet(this, _fullTypes).has(subtype)) {
          result = result.map(keccak256);
        }
        return keccak256(concat(result));
      };
    }
    const fields = this.types[type];
    if (fields) {
      const encodedType = id(__privateGet(this, _fullTypes).get(type));
      return (value) => {
        const values = fields.map(({ name, type: type2 }) => {
          const result = this.getEncoder(type2)(value[name]);
          if (__privateGet(this, _fullTypes).has(type2)) {
            return keccak256(result);
          }
          return result;
        });
        values.unshift(encodedType);
        return concat(values);
      };
    }
    assertArgument(false, `unknown type: ${type}`, "type", type);
  };
  let TypedDataEncoder = _TypedDataEncoder;
  function setify(items) {
    const result = /* @__PURE__ */ new Set();
    items.forEach((k) => result.add(k));
    return Object.freeze(result);
  }
  const _kwVisibDeploy = "external public payable override";
  const KwVisibDeploy = setify(_kwVisibDeploy.split(" "));
  const _kwVisib = "constant external internal payable private public pure view override";
  const KwVisib = setify(_kwVisib.split(" "));
  const _kwTypes = "constructor error event fallback function receive struct";
  const KwTypes = setify(_kwTypes.split(" "));
  const _kwModifiers = "calldata memory storage payable indexed";
  const KwModifiers = setify(_kwModifiers.split(" "));
  const _kwOther = "tuple returns";
  const _keywords = [_kwTypes, _kwModifiers, _kwOther, _kwVisib].join(" ");
  const Keywords = setify(_keywords.split(" "));
  const SimpleTokens = {
    "(": "OPEN_PAREN",
    ")": "CLOSE_PAREN",
    "[": "OPEN_BRACKET",
    "]": "CLOSE_BRACKET",
    ",": "COMMA",
    "@": "AT"
  };
  const regexWhitespacePrefix = new RegExp("^(\\s*)");
  const regexNumberPrefix = new RegExp("^([0-9]+)");
  const regexIdPrefix = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)");
  const regexId = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$");
  const regexType = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
  const _TokenString = class _TokenString {
    constructor(tokens) {
      __privateAdd(this, _TokenString_instances);
      __privateAdd(this, _offset2);
      __privateAdd(this, _tokens);
      __privateSet(this, _offset2, 0);
      __privateSet(this, _tokens, tokens.slice());
    }
    get offset() {
      return __privateGet(this, _offset2);
    }
    get length() {
      return __privateGet(this, _tokens).length - __privateGet(this, _offset2);
    }
    clone() {
      return new _TokenString(__privateGet(this, _tokens));
    }
    reset() {
      __privateSet(this, _offset2, 0);
    }
    // Pops and returns the value of the next token, if it is a keyword in allowed; throws if out of tokens
    popKeyword(allowed) {
      const top = this.peek();
      if (top.type !== "KEYWORD" || !allowed.has(top.text)) {
        throw new Error(`expected keyword ${top.text}`);
      }
      return this.pop().text;
    }
    // Pops and returns the value of the next token if it is `type`; throws if out of tokens
    popType(type) {
      if (this.peek().type !== type) {
        const top = this.peek();
        throw new Error(`expected ${type}; got ${top.type} ${JSON.stringify(top.text)}`);
      }
      return this.pop().text;
    }
    // Pops and returns a "(" TOKENS ")"
    popParen() {
      const top = this.peek();
      if (top.type !== "OPEN_PAREN") {
        throw new Error("bad start");
      }
      const result = __privateMethod(this, _TokenString_instances, subTokenString_fn).call(this, __privateGet(this, _offset2) + 1, top.match + 1);
      __privateSet(this, _offset2, top.match + 1);
      return result;
    }
    // Pops and returns the items within "(" ITEM1 "," ITEM2 "," ... ")"
    popParams() {
      const top = this.peek();
      if (top.type !== "OPEN_PAREN") {
        throw new Error("bad start");
      }
      const result = [];
      while (__privateGet(this, _offset2) < top.match - 1) {
        const link = this.peek().linkNext;
        result.push(__privateMethod(this, _TokenString_instances, subTokenString_fn).call(this, __privateGet(this, _offset2) + 1, link));
        __privateSet(this, _offset2, link);
      }
      __privateSet(this, _offset2, top.match + 1);
      return result;
    }
    // Returns the top Token, throwing if out of tokens
    peek() {
      if (__privateGet(this, _offset2) >= __privateGet(this, _tokens).length) {
        throw new Error("out-of-bounds");
      }
      return __privateGet(this, _tokens)[__privateGet(this, _offset2)];
    }
    // Returns the next value, if it is a keyword in `allowed`
    peekKeyword(allowed) {
      const top = this.peekType("KEYWORD");
      return top != null && allowed.has(top) ? top : null;
    }
    // Returns the value of the next token if it is `type`
    peekType(type) {
      if (this.length === 0) {
        return null;
      }
      const top = this.peek();
      return top.type === type ? top.text : null;
    }
    // Returns the next token; throws if out of tokens
    pop() {
      const result = this.peek();
      __privateWrapper(this, _offset2)._++;
      return result;
    }
    toString() {
      const tokens = [];
      for (let i = __privateGet(this, _offset2); i < __privateGet(this, _tokens).length; i++) {
        const token = __privateGet(this, _tokens)[i];
        tokens.push(`${token.type}:${token.text}`);
      }
      return `<TokenString ${tokens.join(" ")}>`;
    }
  };
  _offset2 = new WeakMap();
  _tokens = new WeakMap();
  _TokenString_instances = new WeakSet();
  subTokenString_fn = function(from = 0, to = 0) {
    return new _TokenString(__privateGet(this, _tokens).slice(from, to).map((t) => {
      return Object.freeze(Object.assign({}, t, {
        match: t.match - from,
        linkBack: t.linkBack - from,
        linkNext: t.linkNext - from
      }));
    }));
  };
  let TokenString = _TokenString;
  function lex(text) {
    const tokens = [];
    const throwError2 = (message) => {
      const token = offset < text.length ? JSON.stringify(text[offset]) : "$EOI";
      throw new Error(`invalid token ${token} at ${offset}: ${message}`);
    };
    let brackets = [];
    let commas = [];
    let offset = 0;
    while (offset < text.length) {
      let cur = text.substring(offset);
      let match = cur.match(regexWhitespacePrefix);
      if (match) {
        offset += match[1].length;
        cur = text.substring(offset);
      }
      const token = { depth: brackets.length, linkBack: -1, linkNext: -1, match: -1, type: "", text: "", offset, value: -1 };
      tokens.push(token);
      let type = SimpleTokens[cur[0]] || "";
      if (type) {
        token.type = type;
        token.text = cur[0];
        offset++;
        if (type === "OPEN_PAREN") {
          brackets.push(tokens.length - 1);
          commas.push(tokens.length - 1);
        } else if (type == "CLOSE_PAREN") {
          if (brackets.length === 0) {
            throwError2("no matching open bracket");
          }
          token.match = brackets.pop();
          tokens[token.match].match = tokens.length - 1;
          token.depth--;
          token.linkBack = commas.pop();
          tokens[token.linkBack].linkNext = tokens.length - 1;
        } else if (type === "COMMA") {
          token.linkBack = commas.pop();
          tokens[token.linkBack].linkNext = tokens.length - 1;
          commas.push(tokens.length - 1);
        } else if (type === "OPEN_BRACKET") {
          token.type = "BRACKET";
        } else if (type === "CLOSE_BRACKET") {
          let suffix = tokens.pop().text;
          if (tokens.length > 0 && tokens[tokens.length - 1].type === "NUMBER") {
            const value = tokens.pop().text;
            suffix = value + suffix;
            tokens[tokens.length - 1].value = getNumber(value);
          }
          if (tokens.length === 0 || tokens[tokens.length - 1].type !== "BRACKET") {
            throw new Error("missing opening bracket");
          }
          tokens[tokens.length - 1].text += suffix;
        }
        continue;
      }
      match = cur.match(regexIdPrefix);
      if (match) {
        token.text = match[1];
        offset += token.text.length;
        if (Keywords.has(token.text)) {
          token.type = "KEYWORD";
          continue;
        }
        if (token.text.match(regexType)) {
          token.type = "TYPE";
          continue;
        }
        token.type = "ID";
        continue;
      }
      match = cur.match(regexNumberPrefix);
      if (match) {
        token.text = match[1];
        token.type = "NUMBER";
        offset += token.text.length;
        continue;
      }
      throw new Error(`unexpected token ${JSON.stringify(cur[0])} at position ${offset}`);
    }
    return new TokenString(tokens.map((t) => Object.freeze(t)));
  }
  function allowSingle(set2, allowed) {
    let included = [];
    for (const key in allowed.keys()) {
      if (set2.has(key)) {
        included.push(key);
      }
    }
    if (included.length > 1) {
      throw new Error(`conflicting types: ${included.join(", ")}`);
    }
  }
  function consumeName(type, tokens) {
    if (tokens.peekKeyword(KwTypes)) {
      const keyword = tokens.pop().text;
      if (keyword !== type) {
        throw new Error(`expected ${type}, got ${keyword}`);
      }
    }
    return tokens.popType("ID");
  }
  function consumeKeywords(tokens, allowed) {
    const keywords = /* @__PURE__ */ new Set();
    while (true) {
      const keyword = tokens.peekType("KEYWORD");
      if (keyword == null || allowed && !allowed.has(keyword)) {
        break;
      }
      tokens.pop();
      if (keywords.has(keyword)) {
        throw new Error(`duplicate keywords: ${JSON.stringify(keyword)}`);
      }
      keywords.add(keyword);
    }
    return Object.freeze(keywords);
  }
  function consumeMutability(tokens) {
    let modifiers = consumeKeywords(tokens, KwVisib);
    allowSingle(modifiers, setify("constant payable nonpayable".split(" ")));
    allowSingle(modifiers, setify("pure view payable nonpayable".split(" ")));
    if (modifiers.has("view")) {
      return "view";
    }
    if (modifiers.has("pure")) {
      return "pure";
    }
    if (modifiers.has("payable")) {
      return "payable";
    }
    if (modifiers.has("nonpayable")) {
      return "nonpayable";
    }
    if (modifiers.has("constant")) {
      return "view";
    }
    return "nonpayable";
  }
  function consumeParams(tokens, allowIndexed) {
    return tokens.popParams().map((t) => ParamType.from(t, allowIndexed));
  }
  function consumeGas(tokens) {
    if (tokens.peekType("AT")) {
      tokens.pop();
      if (tokens.peekType("NUMBER")) {
        return getBigInt(tokens.pop().text);
      }
      throw new Error("invalid gas");
    }
    return null;
  }
  function consumeEoi(tokens) {
    if (tokens.length) {
      throw new Error(`unexpected tokens at offset ${tokens.offset}: ${tokens.toString()}`);
    }
  }
  const regexArrayType = new RegExp(/^(.*)\[([0-9]*)\]$/);
  function verifyBasicType(type) {
    const match = type.match(regexType);
    assertArgument(match, "invalid type", "type", type);
    if (type === "uint") {
      return "uint256";
    }
    if (type === "int") {
      return "int256";
    }
    if (match[2]) {
      const length = parseInt(match[2]);
      assertArgument(length !== 0 && length <= 32, "invalid bytes length", "type", type);
    } else if (match[3]) {
      const size = parseInt(match[3]);
      assertArgument(size !== 0 && size <= 256 && size % 8 === 0, "invalid numeric width", "type", type);
    }
    return type;
  }
  const _guard = {};
  const internal$1 = Symbol.for("_ethers_internal");
  const ParamTypeInternal = "_ParamTypeInternal";
  const ErrorFragmentInternal = "_ErrorInternal";
  const EventFragmentInternal = "_EventInternal";
  const ConstructorFragmentInternal = "_ConstructorInternal";
  const FallbackFragmentInternal = "_FallbackInternal";
  const FunctionFragmentInternal = "_FunctionInternal";
  const StructFragmentInternal = "_StructInternal";
  const _ParamType = class _ParamType {
    /**
     *  @private
     */
    constructor(guard, name, type, baseType, indexed, components, arrayLength, arrayChildren) {
      __privateAdd(this, _ParamType_instances);
      /**
       *  The local name of the parameter (or ``""`` if unbound)
       */
      __publicField(this, "name");
      /**
       *  The fully qualified type (e.g. ``"address"``, ``"tuple(address)"``,
       *  ``"uint256[3][]"``)
       */
      __publicField(this, "type");
      /**
       *  The base type (e.g. ``"address"``, ``"tuple"``, ``"array"``)
       */
      __publicField(this, "baseType");
      /**
       *  True if the parameters is indexed.
       *
       *  For non-indexable types this is ``null``.
       */
      __publicField(this, "indexed");
      /**
       *  The components for the tuple.
       *
       *  For non-tuple types this is ``null``.
       */
      __publicField(this, "components");
      /**
       *  The array length, or ``-1`` for dynamic-lengthed arrays.
       *
       *  For non-array types this is ``null``.
       */
      __publicField(this, "arrayLength");
      /**
       *  The type of each child in the array.
       *
       *  For non-array types this is ``null``.
       */
      __publicField(this, "arrayChildren");
      assertPrivate(guard, _guard, "ParamType");
      Object.defineProperty(this, internal$1, { value: ParamTypeInternal });
      if (components) {
        components = Object.freeze(components.slice());
      }
      if (baseType === "array") {
        if (arrayLength == null || arrayChildren == null) {
          throw new Error("");
        }
      } else if (arrayLength != null || arrayChildren != null) {
        throw new Error("");
      }
      if (baseType === "tuple") {
        if (components == null) {
          throw new Error("");
        }
      } else if (components != null) {
        throw new Error("");
      }
      defineProperties(this, {
        name,
        type,
        baseType,
        indexed,
        components,
        arrayLength,
        arrayChildren
      });
    }
    /**
     *  Return a string representation of this type.
     *
     *  For example,
     *
     *  ``sighash" => "(uint256,address)"``
     *
     *  ``"minimal" => "tuple(uint256,address) indexed"``
     *
     *  ``"full" => "tuple(uint256 foo, address bar) indexed baz"``
     */
    format(format) {
      if (format == null) {
        format = "sighash";
      }
      if (format === "json") {
        const name = this.name || "";
        if (this.isArray()) {
          const result3 = JSON.parse(this.arrayChildren.format("json"));
          result3.name = name;
          result3.type += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`;
          return JSON.stringify(result3);
        }
        const result2 = {
          type: this.baseType === "tuple" ? "tuple" : this.type,
          name
        };
        if (typeof this.indexed === "boolean") {
          result2.indexed = this.indexed;
        }
        if (this.isTuple()) {
          result2.components = this.components.map((c) => JSON.parse(c.format(format)));
        }
        return JSON.stringify(result2);
      }
      let result = "";
      if (this.isArray()) {
        result += this.arrayChildren.format(format);
        result += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`;
      } else {
        if (this.isTuple()) {
          result += "(" + this.components.map((comp) => comp.format(format)).join(format === "full" ? ", " : ",") + ")";
        } else {
          result += this.type;
        }
      }
      if (format !== "sighash") {
        if (this.indexed === true) {
          result += " indexed";
        }
        if (format === "full" && this.name) {
          result += " " + this.name;
        }
      }
      return result;
    }
    /**
     *  Returns true if %%this%% is an Array type.
     *
     *  This provides a type gaurd ensuring that [[arrayChildren]]
     *  and [[arrayLength]] are non-null.
     */
    isArray() {
      return this.baseType === "array";
    }
    /**
     *  Returns true if %%this%% is a Tuple type.
     *
     *  This provides a type gaurd ensuring that [[components]]
     *  is non-null.
     */
    isTuple() {
      return this.baseType === "tuple";
    }
    /**
     *  Returns true if %%this%% is an Indexable type.
     *
     *  This provides a type gaurd ensuring that [[indexed]]
     *  is non-null.
     */
    isIndexable() {
      return this.indexed != null;
    }
    /**
     *  Walks the **ParamType** with %%value%%, calling %%process%%
     *  on each type, destructing the %%value%% recursively.
     */
    walk(value, process2) {
      if (this.isArray()) {
        if (!Array.isArray(value)) {
          throw new Error("invalid array value");
        }
        if (this.arrayLength !== -1 && value.length !== this.arrayLength) {
          throw new Error("array is wrong length");
        }
        const _this = this;
        return value.map((v) => _this.arrayChildren.walk(v, process2));
      }
      if (this.isTuple()) {
        if (!Array.isArray(value)) {
          throw new Error("invalid tuple value");
        }
        if (value.length !== this.components.length) {
          throw new Error("array is wrong length");
        }
        const _this = this;
        return value.map((v, i) => _this.components[i].walk(v, process2));
      }
      return process2(this.type, value);
    }
    /**
     *  Walks the **ParamType** with %%value%%, asynchronously calling
     *  %%process%% on each type, destructing the %%value%% recursively.
     *
     *  This can be used to resolve ENS names by walking and resolving each
     *  ``"address"`` type.
     */
    async walkAsync(value, process2) {
      const promises = [];
      const result = [value];
      __privateMethod(this, _ParamType_instances, walkAsync_fn).call(this, promises, value, process2, (value2) => {
        result[0] = value2;
      });
      if (promises.length) {
        await Promise.all(promises);
      }
      return result[0];
    }
    /**
     *  Creates a new **ParamType** for %%obj%%.
     *
     *  If %%allowIndexed%% then the ``indexed`` keyword is permitted,
     *  otherwise the ``indexed`` keyword will throw an error.
     */
    static from(obj, allowIndexed) {
      if (_ParamType.isParamType(obj)) {
        return obj;
      }
      if (typeof obj === "string") {
        try {
          return _ParamType.from(lex(obj), allowIndexed);
        } catch (error) {
          assertArgument(false, "invalid param type", "obj", obj);
        }
      } else if (obj instanceof TokenString) {
        let type2 = "", baseType = "";
        let comps = null;
        if (consumeKeywords(obj, setify(["tuple"])).has("tuple") || obj.peekType("OPEN_PAREN")) {
          baseType = "tuple";
          comps = obj.popParams().map((t) => _ParamType.from(t));
          type2 = `tuple(${comps.map((c) => c.format()).join(",")})`;
        } else {
          type2 = verifyBasicType(obj.popType("TYPE"));
          baseType = type2;
        }
        let arrayChildren = null;
        let arrayLength = null;
        while (obj.length && obj.peekType("BRACKET")) {
          const bracket = obj.pop();
          arrayChildren = new _ParamType(_guard, "", type2, baseType, null, comps, arrayLength, arrayChildren);
          arrayLength = bracket.value;
          type2 += bracket.text;
          baseType = "array";
          comps = null;
        }
        let indexed2 = null;
        const keywords = consumeKeywords(obj, KwModifiers);
        if (keywords.has("indexed")) {
          if (!allowIndexed) {
            throw new Error("");
          }
          indexed2 = true;
        }
        const name2 = obj.peekType("ID") ? obj.pop().text : "";
        if (obj.length) {
          throw new Error("leftover tokens");
        }
        return new _ParamType(_guard, name2, type2, baseType, indexed2, comps, arrayLength, arrayChildren);
      }
      const name = obj.name;
      assertArgument(!name || typeof name === "string" && name.match(regexId), "invalid name", "obj.name", name);
      let indexed = obj.indexed;
      if (indexed != null) {
        assertArgument(allowIndexed, "parameter cannot be indexed", "obj.indexed", obj.indexed);
        indexed = !!indexed;
      }
      let type = obj.type;
      let arrayMatch = type.match(regexArrayType);
      if (arrayMatch) {
        const arrayLength = parseInt(arrayMatch[2] || "-1");
        const arrayChildren = _ParamType.from({
          type: arrayMatch[1],
          components: obj.components
        });
        return new _ParamType(_guard, name || "", type, "array", indexed, null, arrayLength, arrayChildren);
      }
      if (type === "tuple" || type.startsWith(
        "tuple("
        /* fix: ) */
      ) || type.startsWith(
        "("
        /* fix: ) */
      )) {
        const comps = obj.components != null ? obj.components.map((c) => _ParamType.from(c)) : null;
        const tuple = new _ParamType(_guard, name || "", type, "tuple", indexed, comps, null, null);
        return tuple;
      }
      type = verifyBasicType(obj.type);
      return new _ParamType(_guard, name || "", type, type, indexed, null, null, null);
    }
    /**
     *  Returns true if %%value%% is a **ParamType**.
     */
    static isParamType(value) {
      return value && value[internal$1] === ParamTypeInternal;
    }
  };
  _ParamType_instances = new WeakSet();
  walkAsync_fn = function(promises, value, process2, setValue) {
    if (this.isArray()) {
      if (!Array.isArray(value)) {
        throw new Error("invalid array value");
      }
      if (this.arrayLength !== -1 && value.length !== this.arrayLength) {
        throw new Error("array is wrong length");
      }
      const childType = this.arrayChildren;
      const result2 = value.slice();
      result2.forEach((value2, index) => {
        var _a2;
        __privateMethod(_a2 = childType, _ParamType_instances, walkAsync_fn).call(_a2, promises, value2, process2, (value3) => {
          result2[index] = value3;
        });
      });
      setValue(result2);
      return;
    }
    if (this.isTuple()) {
      const components = this.components;
      let result2;
      if (Array.isArray(value)) {
        result2 = value.slice();
      } else {
        if (value == null || typeof value !== "object") {
          throw new Error("invalid tuple value");
        }
        result2 = components.map((param) => {
          if (!param.name) {
            throw new Error("cannot use object value with unnamed components");
          }
          if (!(param.name in value)) {
            throw new Error(`missing value for component ${param.name}`);
          }
          return value[param.name];
        });
      }
      if (result2.length !== this.components.length) {
        throw new Error("array is wrong length");
      }
      result2.forEach((value2, index) => {
        var _a2;
        __privateMethod(_a2 = components[index], _ParamType_instances, walkAsync_fn).call(_a2, promises, value2, process2, (value3) => {
          result2[index] = value3;
        });
      });
      setValue(result2);
      return;
    }
    const result = process2(this.type, value);
    if (result.then) {
      promises.push(async function() {
        setValue(await result);
      }());
    } else {
      setValue(result);
    }
  };
  let ParamType = _ParamType;
  class Fragment {
    /**
     *  @private
     */
    constructor(guard, type, inputs) {
      /**
       *  The type of the fragment.
       */
      __publicField(this, "type");
      /**
       *  The inputs for the fragment.
       */
      __publicField(this, "inputs");
      assertPrivate(guard, _guard, "Fragment");
      inputs = Object.freeze(inputs.slice());
      defineProperties(this, { type, inputs });
    }
    /**
     *  Creates a new **Fragment** for %%obj%%, wich can be any supported
     *  ABI frgament type.
     */
    static from(obj) {
      if (typeof obj === "string") {
        try {
          Fragment.from(JSON.parse(obj));
        } catch (e) {
        }
        return Fragment.from(lex(obj));
      }
      if (obj instanceof TokenString) {
        const type = obj.peekKeyword(KwTypes);
        switch (type) {
          case "constructor":
            return ConstructorFragment.from(obj);
          case "error":
            return ErrorFragment.from(obj);
          case "event":
            return EventFragment.from(obj);
          case "fallback":
          case "receive":
            return FallbackFragment.from(obj);
          case "function":
            return FunctionFragment.from(obj);
          case "struct":
            return StructFragment.from(obj);
        }
      } else if (typeof obj === "object") {
        switch (obj.type) {
          case "constructor":
            return ConstructorFragment.from(obj);
          case "error":
            return ErrorFragment.from(obj);
          case "event":
            return EventFragment.from(obj);
          case "fallback":
          case "receive":
            return FallbackFragment.from(obj);
          case "function":
            return FunctionFragment.from(obj);
          case "struct":
            return StructFragment.from(obj);
        }
        assert(false, `unsupported type: ${obj.type}`, "UNSUPPORTED_OPERATION", {
          operation: "Fragment.from"
        });
      }
      assertArgument(false, "unsupported frgament object", "obj", obj);
    }
    /**
     *  Returns true if %%value%% is a [[ConstructorFragment]].
     */
    static isConstructor(value) {
      return ConstructorFragment.isFragment(value);
    }
    /**
     *  Returns true if %%value%% is an [[ErrorFragment]].
     */
    static isError(value) {
      return ErrorFragment.isFragment(value);
    }
    /**
     *  Returns true if %%value%% is an [[EventFragment]].
     */
    static isEvent(value) {
      return EventFragment.isFragment(value);
    }
    /**
     *  Returns true if %%value%% is a [[FunctionFragment]].
     */
    static isFunction(value) {
      return FunctionFragment.isFragment(value);
    }
    /**
     *  Returns true if %%value%% is a [[StructFragment]].
     */
    static isStruct(value) {
      return StructFragment.isFragment(value);
    }
  }
  class NamedFragment extends Fragment {
    /**
     *  @private
     */
    constructor(guard, type, name, inputs) {
      super(guard, type, inputs);
      /**
       *  The name of the fragment.
       */
      __publicField(this, "name");
      assertArgument(typeof name === "string" && name.match(regexId), "invalid identifier", "name", name);
      inputs = Object.freeze(inputs.slice());
      defineProperties(this, { name });
    }
  }
  function joinParams(format, params) {
    return "(" + params.map((p) => p.format(format)).join(format === "full" ? ", " : ",") + ")";
  }
  class ErrorFragment extends NamedFragment {
    /**
     *  @private
     */
    constructor(guard, name, inputs) {
      super(guard, "error", name, inputs);
      Object.defineProperty(this, internal$1, { value: ErrorFragmentInternal });
    }
    /**
     *  The Custom Error selector.
     */
    get selector() {
      return id(this.format("sighash")).substring(0, 10);
    }
    /**
     *  Returns a string representation of this fragment as %%format%%.
     */
    format(format) {
      if (format == null) {
        format = "sighash";
      }
      if (format === "json") {
        return JSON.stringify({
          type: "error",
          name: this.name,
          inputs: this.inputs.map((input) => JSON.parse(input.format(format)))
        });
      }
      const result = [];
      if (format !== "sighash") {
        result.push("error");
      }
      result.push(this.name + joinParams(format, this.inputs));
      return result.join(" ");
    }
    /**
     *  Returns a new **ErrorFragment** for %%obj%%.
     */
    static from(obj) {
      if (ErrorFragment.isFragment(obj)) {
        return obj;
      }
      if (typeof obj === "string") {
        return ErrorFragment.from(lex(obj));
      } else if (obj instanceof TokenString) {
        const name = consumeName("error", obj);
        const inputs = consumeParams(obj);
        consumeEoi(obj);
        return new ErrorFragment(_guard, name, inputs);
      }
      return new ErrorFragment(_guard, obj.name, obj.inputs ? obj.inputs.map(ParamType.from) : []);
    }
    /**
     *  Returns ``true`` and provides a type guard if %%value%% is an
     *  **ErrorFragment**.
     */
    static isFragment(value) {
      return value && value[internal$1] === ErrorFragmentInternal;
    }
  }
  class EventFragment extends NamedFragment {
    /**
     *  @private
     */
    constructor(guard, name, inputs, anonymous) {
      super(guard, "event", name, inputs);
      /**
       *  Whether this event is anonymous.
       */
      __publicField(this, "anonymous");
      Object.defineProperty(this, internal$1, { value: EventFragmentInternal });
      defineProperties(this, { anonymous });
    }
    /**
     *  The Event topic hash.
     */
    get topicHash() {
      return id(this.format("sighash"));
    }
    /**
     *  Returns a string representation of this event as %%format%%.
     */
    format(format) {
      if (format == null) {
        format = "sighash";
      }
      if (format === "json") {
        return JSON.stringify({
          type: "event",
          anonymous: this.anonymous,
          name: this.name,
          inputs: this.inputs.map((i) => JSON.parse(i.format(format)))
        });
      }
      const result = [];
      if (format !== "sighash") {
        result.push("event");
      }
      result.push(this.name + joinParams(format, this.inputs));
      if (format !== "sighash" && this.anonymous) {
        result.push("anonymous");
      }
      return result.join(" ");
    }
    /**
     *  Return the topic hash for an event with %%name%% and %%params%%.
     */
    static getTopicHash(name, params) {
      params = (params || []).map((p) => ParamType.from(p));
      const fragment = new EventFragment(_guard, name, params, false);
      return fragment.topicHash;
    }
    /**
     *  Returns a new **EventFragment** for %%obj%%.
     */
    static from(obj) {
      if (EventFragment.isFragment(obj)) {
        return obj;
      }
      if (typeof obj === "string") {
        try {
          return EventFragment.from(lex(obj));
        } catch (error) {
          assertArgument(false, "invalid event fragment", "obj", obj);
        }
      } else if (obj instanceof TokenString) {
        const name = consumeName("event", obj);
        const inputs = consumeParams(obj, true);
        const anonymous = !!consumeKeywords(obj, setify(["anonymous"])).has("anonymous");
        consumeEoi(obj);
        return new EventFragment(_guard, name, inputs, anonymous);
      }
      return new EventFragment(_guard, obj.name, obj.inputs ? obj.inputs.map((p) => ParamType.from(p, true)) : [], !!obj.anonymous);
    }
    /**
     *  Returns ``true`` and provides a type guard if %%value%% is an
     *  **EventFragment**.
     */
    static isFragment(value) {
      return value && value[internal$1] === EventFragmentInternal;
    }
  }
  class ConstructorFragment extends Fragment {
    /**
     *  @private
     */
    constructor(guard, type, inputs, payable, gas) {
      super(guard, type, inputs);
      /**
       *  Whether the constructor can receive an endowment.
       */
      __publicField(this, "payable");
      /**
       *  The recommended gas limit for deployment or ``null``.
       */
      __publicField(this, "gas");
      Object.defineProperty(this, internal$1, { value: ConstructorFragmentInternal });
      defineProperties(this, { payable, gas });
    }
    /**
     *  Returns a string representation of this constructor as %%format%%.
     */
    format(format) {
      assert(format != null && format !== "sighash", "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", { operation: "format(sighash)" });
      if (format === "json") {
        return JSON.stringify({
          type: "constructor",
          stateMutability: this.payable ? "payable" : "undefined",
          payable: this.payable,
          gas: this.gas != null ? this.gas : void 0,
          inputs: this.inputs.map((i) => JSON.parse(i.format(format)))
        });
      }
      const result = [`constructor${joinParams(format, this.inputs)}`];
      if (this.payable) {
        result.push("payable");
      }
      if (this.gas != null) {
        result.push(`@${this.gas.toString()}`);
      }
      return result.join(" ");
    }
    /**
     *  Returns a new **ConstructorFragment** for %%obj%%.
     */
    static from(obj) {
      if (ConstructorFragment.isFragment(obj)) {
        return obj;
      }
      if (typeof obj === "string") {
        try {
          return ConstructorFragment.from(lex(obj));
        } catch (error) {
          assertArgument(false, "invalid constuctor fragment", "obj", obj);
        }
      } else if (obj instanceof TokenString) {
        consumeKeywords(obj, setify(["constructor"]));
        const inputs = consumeParams(obj);
        const payable = !!consumeKeywords(obj, KwVisibDeploy).has("payable");
        const gas = consumeGas(obj);
        consumeEoi(obj);
        return new ConstructorFragment(_guard, "constructor", inputs, payable, gas);
      }
      return new ConstructorFragment(_guard, "constructor", obj.inputs ? obj.inputs.map(ParamType.from) : [], !!obj.payable, obj.gas != null ? obj.gas : null);
    }
    /**
     *  Returns ``true`` and provides a type guard if %%value%% is a
     *  **ConstructorFragment**.
     */
    static isFragment(value) {
      return value && value[internal$1] === ConstructorFragmentInternal;
    }
  }
  class FallbackFragment extends Fragment {
    constructor(guard, inputs, payable) {
      super(guard, "fallback", inputs);
      /**
       *  If the function can be sent value during invocation.
       */
      __publicField(this, "payable");
      Object.defineProperty(this, internal$1, { value: FallbackFragmentInternal });
      defineProperties(this, { payable });
    }
    /**
     *  Returns a string representation of this fallback as %%format%%.
     */
    format(format) {
      const type = this.inputs.length === 0 ? "receive" : "fallback";
      if (format === "json") {
        const stateMutability = this.payable ? "payable" : "nonpayable";
        return JSON.stringify({ type, stateMutability });
      }
      return `${type}()${this.payable ? " payable" : ""}`;
    }
    /**
     *  Returns a new **FallbackFragment** for %%obj%%.
     */
    static from(obj) {
      if (FallbackFragment.isFragment(obj)) {
        return obj;
      }
      if (typeof obj === "string") {
        try {
          return FallbackFragment.from(lex(obj));
        } catch (error) {
          assertArgument(false, "invalid fallback fragment", "obj", obj);
        }
      } else if (obj instanceof TokenString) {
        const errorObj = obj.toString();
        const topIsValid = obj.peekKeyword(setify(["fallback", "receive"]));
        assertArgument(topIsValid, "type must be fallback or receive", "obj", errorObj);
        const type = obj.popKeyword(setify(["fallback", "receive"]));
        if (type === "receive") {
          const inputs2 = consumeParams(obj);
          assertArgument(inputs2.length === 0, `receive cannot have arguments`, "obj.inputs", inputs2);
          consumeKeywords(obj, setify(["payable"]));
          consumeEoi(obj);
          return new FallbackFragment(_guard, [], true);
        }
        let inputs = consumeParams(obj);
        if (inputs.length) {
          assertArgument(inputs.length === 1 && inputs[0].type === "bytes", "invalid fallback inputs", "obj.inputs", inputs.map((i) => i.format("minimal")).join(", "));
        } else {
          inputs = [ParamType.from("bytes")];
        }
        const mutability = consumeMutability(obj);
        assertArgument(mutability === "nonpayable" || mutability === "payable", "fallback cannot be constants", "obj.stateMutability", mutability);
        if (consumeKeywords(obj, setify(["returns"])).has("returns")) {
          const outputs = consumeParams(obj);
          assertArgument(outputs.length === 1 && outputs[0].type === "bytes", "invalid fallback outputs", "obj.outputs", outputs.map((i) => i.format("minimal")).join(", "));
        }
        consumeEoi(obj);
        return new FallbackFragment(_guard, inputs, mutability === "payable");
      }
      if (obj.type === "receive") {
        return new FallbackFragment(_guard, [], true);
      }
      if (obj.type === "fallback") {
        const inputs = [ParamType.from("bytes")];
        const payable = obj.stateMutability === "payable";
        return new FallbackFragment(_guard, inputs, payable);
      }
      assertArgument(false, "invalid fallback description", "obj", obj);
    }
    /**
     *  Returns ``true`` and provides a type guard if %%value%% is a
     *  **FallbackFragment**.
     */
    static isFragment(value) {
      return value && value[internal$1] === FallbackFragmentInternal;
    }
  }
  class FunctionFragment extends NamedFragment {
    /**
     *  @private
     */
    constructor(guard, name, stateMutability, inputs, outputs, gas) {
      super(guard, "function", name, inputs);
      /**
       *  If the function is constant (e.g. ``pure`` or ``view`` functions).
       */
      __publicField(this, "constant");
      /**
       *  The returned types for the result of calling this function.
       */
      __publicField(this, "outputs");
      /**
       *  The state mutability (e.g. ``payable``, ``nonpayable``, ``view``
       *  or ``pure``)
       */
      __publicField(this, "stateMutability");
      /**
       *  If the function can be sent value during invocation.
       */
      __publicField(this, "payable");
      /**
       *  The recommended gas limit to send when calling this function.
       */
      __publicField(this, "gas");
      Object.defineProperty(this, internal$1, { value: FunctionFragmentInternal });
      outputs = Object.freeze(outputs.slice());
      const constant = stateMutability === "view" || stateMutability === "pure";
      const payable = stateMutability === "payable";
      defineProperties(this, { constant, gas, outputs, payable, stateMutability });
    }
    /**
     *  The Function selector.
     */
    get selector() {
      return id(this.format("sighash")).substring(0, 10);
    }
    /**
     *  Returns a string representation of this function as %%format%%.
     */
    format(format) {
      if (format == null) {
        format = "sighash";
      }
      if (format === "json") {
        return JSON.stringify({
          type: "function",
          name: this.name,
          constant: this.constant,
          stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
          payable: this.payable,
          gas: this.gas != null ? this.gas : void 0,
          inputs: this.inputs.map((i) => JSON.parse(i.format(format))),
          outputs: this.outputs.map((o) => JSON.parse(o.format(format)))
        });
      }
      const result = [];
      if (format !== "sighash") {
        result.push("function");
      }
      result.push(this.name + joinParams(format, this.inputs));
      if (format !== "sighash") {
        if (this.stateMutability !== "nonpayable") {
          result.push(this.stateMutability);
        }
        if (this.outputs && this.outputs.length) {
          result.push("returns");
          result.push(joinParams(format, this.outputs));
        }
        if (this.gas != null) {
          result.push(`@${this.gas.toString()}`);
        }
      }
      return result.join(" ");
    }
    /**
     *  Return the selector for a function with %%name%% and %%params%%.
     */
    static getSelector(name, params) {
      params = (params || []).map((p) => ParamType.from(p));
      const fragment = new FunctionFragment(_guard, name, "view", params, [], null);
      return fragment.selector;
    }
    /**
     *  Returns a new **FunctionFragment** for %%obj%%.
     */
    static from(obj) {
      if (FunctionFragment.isFragment(obj)) {
        return obj;
      }
      if (typeof obj === "string") {
        try {
          return FunctionFragment.from(lex(obj));
        } catch (error) {
          assertArgument(false, "invalid function fragment", "obj", obj);
        }
      } else if (obj instanceof TokenString) {
        const name = consumeName("function", obj);
        const inputs = consumeParams(obj);
        const mutability = consumeMutability(obj);
        let outputs = [];
        if (consumeKeywords(obj, setify(["returns"])).has("returns")) {
          outputs = consumeParams(obj);
        }
        const gas = consumeGas(obj);
        consumeEoi(obj);
        return new FunctionFragment(_guard, name, mutability, inputs, outputs, gas);
      }
      let stateMutability = obj.stateMutability;
      if (stateMutability == null) {
        stateMutability = "payable";
        if (typeof obj.constant === "boolean") {
          stateMutability = "view";
          if (!obj.constant) {
            stateMutability = "payable";
            if (typeof obj.payable === "boolean" && !obj.payable) {
              stateMutability = "nonpayable";
            }
          }
        } else if (typeof obj.payable === "boolean" && !obj.payable) {
          stateMutability = "nonpayable";
        }
      }
      return new FunctionFragment(_guard, obj.name, stateMutability, obj.inputs ? obj.inputs.map(ParamType.from) : [], obj.outputs ? obj.outputs.map(ParamType.from) : [], obj.gas != null ? obj.gas : null);
    }
    /**
     *  Returns ``true`` and provides a type guard if %%value%% is a
     *  **FunctionFragment**.
     */
    static isFragment(value) {
      return value && value[internal$1] === FunctionFragmentInternal;
    }
  }
  class StructFragment extends NamedFragment {
    /**
     *  @private
     */
    constructor(guard, name, inputs) {
      super(guard, "struct", name, inputs);
      Object.defineProperty(this, internal$1, { value: StructFragmentInternal });
    }
    /**
     *  Returns a string representation of this struct as %%format%%.
     */
    format() {
      throw new Error("@TODO");
    }
    /**
     *  Returns a new **StructFragment** for %%obj%%.
     */
    static from(obj) {
      if (typeof obj === "string") {
        try {
          return StructFragment.from(lex(obj));
        } catch (error) {
          assertArgument(false, "invalid struct fragment", "obj", obj);
        }
      } else if (obj instanceof TokenString) {
        const name = consumeName("struct", obj);
        const inputs = consumeParams(obj);
        consumeEoi(obj);
        return new StructFragment(_guard, name, inputs);
      }
      return new StructFragment(_guard, obj.name, obj.inputs ? obj.inputs.map(ParamType.from) : []);
    }
    // @TODO: fix this return type
    /**
     *  Returns ``true`` and provides a type guard if %%value%% is a
     *  **StructFragment**.
     */
    static isFragment(value) {
      return value && value[internal$1] === StructFragmentInternal;
    }
  }
  const PanicReasons$1 = /* @__PURE__ */ new Map();
  PanicReasons$1.set(0, "GENERIC_PANIC");
  PanicReasons$1.set(1, "ASSERT_FALSE");
  PanicReasons$1.set(17, "OVERFLOW");
  PanicReasons$1.set(18, "DIVIDE_BY_ZERO");
  PanicReasons$1.set(33, "ENUM_RANGE_ERROR");
  PanicReasons$1.set(34, "BAD_STORAGE_DATA");
  PanicReasons$1.set(49, "STACK_UNDERFLOW");
  PanicReasons$1.set(50, "ARRAY_RANGE_ERROR");
  PanicReasons$1.set(65, "OUT_OF_MEMORY");
  PanicReasons$1.set(81, "UNINITIALIZED_FUNCTION_CALL");
  const paramTypeBytes = new RegExp(/^bytes([0-9]*)$/);
  const paramTypeNumber = new RegExp(/^(u?int)([0-9]*)$/);
  let defaultCoder = null;
  let defaultMaxInflation = 1024;
  function getBuiltinCallException(action2, tx, data, abiCoder) {
    let message = "missing revert data";
    let reason = null;
    const invocation = null;
    let revert = null;
    if (data) {
      message = "execution reverted";
      const bytes2 = getBytes(data);
      data = hexlify(data);
      if (bytes2.length === 0) {
        message += " (no data present; likely require(false) occurred";
        reason = "require(false)";
      } else if (bytes2.length % 32 !== 4) {
        message += " (could not decode reason; invalid data length)";
      } else if (hexlify(bytes2.slice(0, 4)) === "0x08c379a0") {
        try {
          reason = abiCoder.decode(["string"], bytes2.slice(4))[0];
          revert = {
            signature: "Error(string)",
            name: "Error",
            args: [reason]
          };
          message += `: ${JSON.stringify(reason)}`;
        } catch (error) {
          message += " (could not decode reason; invalid string data)";
        }
      } else if (hexlify(bytes2.slice(0, 4)) === "0x4e487b71") {
        try {
          const code = Number(abiCoder.decode(["uint256"], bytes2.slice(4))[0]);
          revert = {
            signature: "Panic(uint256)",
            name: "Panic",
            args: [code]
          };
          reason = `Panic due to ${PanicReasons$1.get(code) || "UNKNOWN"}(${code})`;
          message += `: ${reason}`;
        } catch (error) {
          message += " (could not decode panic code)";
        }
      } else {
        message += " (unknown custom error)";
      }
    }
    const transaction2 = {
      to: tx.to ? getAddress(tx.to) : null,
      data: tx.data || "0x"
    };
    if (tx.from) {
      transaction2.from = getAddress(tx.from);
    }
    return makeError(message, "CALL_EXCEPTION", {
      action: action2,
      data,
      reason,
      transaction: transaction2,
      invocation,
      revert
    });
  }
  const _AbiCoder = class _AbiCoder {
    constructor() {
      __privateAdd(this, _AbiCoder_instances);
    }
    /**
     *  Get the default values for the given %%types%%.
     *
     *  For example, a ``uint`` is by default ``0`` and ``bool``
     *  is by default ``false``.
     */
    getDefaultValue(types) {
      const coders = types.map((type) => __privateMethod(this, _AbiCoder_instances, getCoder_fn).call(this, ParamType.from(type)));
      const coder = new TupleCoder(coders, "_");
      return coder.defaultValue();
    }
    /**
     *  Encode the %%values%% as the %%types%% into ABI data.
     *
     *  @returns DataHexstring
     */
    encode(types, values) {
      assertArgumentCount(values.length, types.length, "types/values length mismatch");
      const coders = types.map((type) => __privateMethod(this, _AbiCoder_instances, getCoder_fn).call(this, ParamType.from(type)));
      const coder = new TupleCoder(coders, "_");
      const writer = new Writer();
      coder.encode(writer, values);
      return writer.data;
    }
    /**
     *  Decode the ABI %%data%% as the %%types%% into values.
     *
     *  If %%loose%% decoding is enabled, then strict padding is
     *  not enforced. Some older versions of Solidity incorrectly
     *  padded event data emitted from ``external`` functions.
     */
    decode(types, data, loose) {
      const coders = types.map((type) => __privateMethod(this, _AbiCoder_instances, getCoder_fn).call(this, ParamType.from(type)));
      const coder = new TupleCoder(coders, "_");
      return coder.decode(new Reader(data, loose, defaultMaxInflation));
    }
    static _setDefaultMaxInflation(value) {
      assertArgument(typeof value === "number" && Number.isInteger(value), "invalid defaultMaxInflation factor", "value", value);
      defaultMaxInflation = value;
    }
    /**
     *  Returns the shared singleton instance of a default [[AbiCoder]].
     *
     *  On the first call, the instance is created internally.
     */
    static defaultAbiCoder() {
      if (defaultCoder == null) {
        defaultCoder = new _AbiCoder();
      }
      return defaultCoder;
    }
    /**
     *  Returns an ethers-compatible [[CallExceptionError]] Error for the given
     *  result %%data%% for the [[CallExceptionAction]] %%action%% against
     *  the Transaction %%tx%%.
     */
    static getBuiltinCallException(action2, tx, data) {
      return getBuiltinCallException(action2, tx, data, _AbiCoder.defaultAbiCoder());
    }
  };
  _AbiCoder_instances = new WeakSet();
  getCoder_fn = function(param) {
    if (param.isArray()) {
      return new ArrayCoder(__privateMethod(this, _AbiCoder_instances, getCoder_fn).call(this, param.arrayChildren), param.arrayLength, param.name);
    }
    if (param.isTuple()) {
      return new TupleCoder(param.components.map((c) => __privateMethod(this, _AbiCoder_instances, getCoder_fn).call(this, c)), param.name);
    }
    switch (param.baseType) {
      case "address":
        return new AddressCoder(param.name);
      case "bool":
        return new BooleanCoder(param.name);
      case "string":
        return new StringCoder(param.name);
      case "bytes":
        return new BytesCoder(param.name);
      case "":
        return new NullCoder(param.name);
    }
    let match = param.type.match(paramTypeNumber);
    if (match) {
      let size = parseInt(match[2] || "256");
      assertArgument(size !== 0 && size <= 256 && size % 8 === 0, "invalid " + match[1] + " bit length", "param", param);
      return new NumberCoder(size / 8, match[1] === "int", param.name);
    }
    match = param.type.match(paramTypeBytes);
    if (match) {
      let size = parseInt(match[1]);
      assertArgument(size !== 0 && size <= 32, "invalid bytes length", "param", param);
      return new FixedBytesCoder(size, param.name);
    }
    assertArgument(false, "invalid type", "type", param.type);
  };
  let AbiCoder = _AbiCoder;
  class LogDescription {
    /**
     *  @_ignore:
     */
    constructor(fragment, topic, args) {
      /**
       *  The matching fragment for the ``topic0``.
       */
      __publicField(this, "fragment");
      /**
       *  The name of the Event.
       */
      __publicField(this, "name");
      /**
       *  The full Event signature.
       */
      __publicField(this, "signature");
      /**
       *  The topic hash for the Event.
       */
      __publicField(this, "topic");
      /**
       *  The arguments passed into the Event with ``emit``.
       */
      __publicField(this, "args");
      const name = fragment.name, signature = fragment.format();
      defineProperties(this, {
        fragment,
        name,
        signature,
        topic,
        args
      });
    }
  }
  class TransactionDescription {
    /**
     *  @_ignore:
     */
    constructor(fragment, selector, args, value) {
      /**
       *  The matching fragment from the transaction ``data``.
       */
      __publicField(this, "fragment");
      /**
       *  The name of the Function from the transaction ``data``.
       */
      __publicField(this, "name");
      /**
       *  The arguments passed to the Function from the transaction ``data``.
       */
      __publicField(this, "args");
      /**
       *  The full Function signature from the transaction ``data``.
       */
      __publicField(this, "signature");
      /**
       *  The selector for the Function from the transaction ``data``.
       */
      __publicField(this, "selector");
      /**
       *  The ``value`` (in wei) from the transaction.
       */
      __publicField(this, "value");
      const name = fragment.name, signature = fragment.format();
      defineProperties(this, {
        fragment,
        name,
        args,
        signature,
        selector,
        value
      });
    }
  }
  class ErrorDescription {
    /**
     *  @_ignore:
     */
    constructor(fragment, selector, args) {
      /**
       *  The matching fragment.
       */
      __publicField(this, "fragment");
      /**
       *  The name of the Error.
       */
      __publicField(this, "name");
      /**
       *  The arguments passed to the Error with ``revert``.
       */
      __publicField(this, "args");
      /**
       *  The full Error signature.
       */
      __publicField(this, "signature");
      /**
       *  The selector for the Error.
       */
      __publicField(this, "selector");
      const name = fragment.name, signature = fragment.format();
      defineProperties(this, {
        fragment,
        name,
        args,
        signature,
        selector
      });
    }
  }
  class Indexed {
    /**
     *  @_ignore:
     */
    constructor(hash2) {
      /**
       *  The ``keccak256`` of the value logged.
       */
      __publicField(this, "hash");
      /**
       *  @_ignore:
       */
      __publicField(this, "_isIndexed");
      defineProperties(this, { hash: hash2, _isIndexed: true });
    }
    /**
     *  Returns ``true`` if %%value%% is an **Indexed**.
     *
     *  This provides a Type Guard for property access.
     */
    static isIndexed(value) {
      return !!(value && value._isIndexed);
    }
  }
  const PanicReasons = {
    "0": "generic panic",
    "1": "assert(false)",
    "17": "arithmetic overflow",
    "18": "division or modulo by zero",
    "33": "enum overflow",
    "34": "invalid encoded storage byte array accessed",
    "49": "out-of-bounds array access; popping on an empty array",
    "50": "out-of-bounds access of an array or bytesN",
    "65": "out of memory",
    "81": "uninitialized function"
  };
  const BuiltinErrors = {
    "0x08c379a0": {
      signature: "Error(string)",
      name: "Error",
      inputs: ["string"],
      reason: (message) => {
        return `reverted with reason string ${JSON.stringify(message)}`;
      }
    },
    "0x4e487b71": {
      signature: "Panic(uint256)",
      name: "Panic",
      inputs: ["uint256"],
      reason: (code) => {
        let reason = "unknown panic code";
        if (code >= 0 && code <= 255 && PanicReasons[code.toString()]) {
          reason = PanicReasons[code.toString()];
        }
        return `reverted with panic code 0x${code.toString(16)} (${reason})`;
      }
    }
  };
  const _Interface = class _Interface {
    /**
     *  Create a new Interface for the %%fragments%%.
     */
    constructor(fragments) {
      __privateAdd(this, _Interface_instances);
      /**
       *  All the Contract ABI members (i.e. methods, events, errors, etc).
       */
      __publicField(this, "fragments");
      /**
       *  The Contract constructor.
       */
      __publicField(this, "deploy");
      /**
       *  The Fallback method, if any.
       */
      __publicField(this, "fallback");
      /**
       *  If receiving ether is supported.
       */
      __publicField(this, "receive");
      __privateAdd(this, _errors);
      __privateAdd(this, _events);
      __privateAdd(this, _functions);
      //    #structs: Map<string, StructFragment>;
      __privateAdd(this, _abiCoder);
      let abi = [];
      if (typeof fragments === "string") {
        abi = JSON.parse(fragments);
      } else {
        abi = fragments;
      }
      __privateSet(this, _functions, /* @__PURE__ */ new Map());
      __privateSet(this, _errors, /* @__PURE__ */ new Map());
      __privateSet(this, _events, /* @__PURE__ */ new Map());
      const frags = [];
      for (const a of abi) {
        try {
          frags.push(Fragment.from(a));
        } catch (error) {
          console.log(`[Warning] Invalid Fragment ${JSON.stringify(a)}:`, error.message);
        }
      }
      defineProperties(this, {
        fragments: Object.freeze(frags)
      });
      let fallback = null;
      let receive = false;
      __privateSet(this, _abiCoder, this.getAbiCoder());
      this.fragments.forEach((fragment, index) => {
        let bucket;
        switch (fragment.type) {
          case "constructor":
            if (this.deploy) {
              console.log("duplicate definition - constructor");
              return;
            }
            defineProperties(this, { deploy: fragment });
            return;
          case "fallback":
            if (fragment.inputs.length === 0) {
              receive = true;
            } else {
              assertArgument(!fallback || fragment.payable !== fallback.payable, "conflicting fallback fragments", `fragments[${index}]`, fragment);
              fallback = fragment;
              receive = fallback.payable;
            }
            return;
          case "function":
            bucket = __privateGet(this, _functions);
            break;
          case "event":
            bucket = __privateGet(this, _events);
            break;
          case "error":
            bucket = __privateGet(this, _errors);
            break;
          default:
            return;
        }
        const signature = fragment.format();
        if (bucket.has(signature)) {
          return;
        }
        bucket.set(signature, fragment);
      });
      if (!this.deploy) {
        defineProperties(this, {
          deploy: ConstructorFragment.from("constructor()")
        });
      }
      defineProperties(this, { fallback, receive });
    }
    /**
     *  Returns the entire Human-Readable ABI, as an array of
     *  signatures, optionally as %%minimal%% strings, which
     *  removes parameter names and unneceesary spaces.
     */
    format(minimal) {
      const format = minimal ? "minimal" : "full";
      const abi = this.fragments.map((f) => f.format(format));
      return abi;
    }
    /**
     *  Return the JSON-encoded ABI. This is the format Solidiy
     *  returns.
     */
    formatJson() {
      const abi = this.fragments.map((f) => f.format("json"));
      return JSON.stringify(abi.map((j) => JSON.parse(j)));
    }
    /**
     *  The ABI coder that will be used to encode and decode binary
     *  data.
     */
    getAbiCoder() {
      return AbiCoder.defaultAbiCoder();
    }
    /**
     *  Get the function name for %%key%%, which may be a function selector,
     *  function name or function signature that belongs to the ABI.
     */
    getFunctionName(key) {
      const fragment = __privateMethod(this, _Interface_instances, getFunction_fn).call(this, key, null, false);
      assertArgument(fragment, "no matching function", "key", key);
      return fragment.name;
    }
    /**
     *  Returns true if %%key%% (a function selector, function name or
     *  function signature) is present in the ABI.
     *
     *  In the case of a function name, the name may be ambiguous, so
     *  accessing the [[FunctionFragment]] may require refinement.
     */
    hasFunction(key) {
      return !!__privateMethod(this, _Interface_instances, getFunction_fn).call(this, key, null, false);
    }
    /**
     *  Get the [[FunctionFragment]] for %%key%%, which may be a function
     *  selector, function name or function signature that belongs to the ABI.
     *
     *  If %%values%% is provided, it will use the Typed API to handle
     *  ambiguous cases where multiple functions match by name.
     *
     *  If the %%key%% and %%values%% do not refine to a single function in
     *  the ABI, this will throw.
     */
    getFunction(key, values) {
      return __privateMethod(this, _Interface_instances, getFunction_fn).call(this, key, values || null, true);
    }
    /**
     *  Iterate over all functions, calling %%callback%%, sorted by their name.
     */
    forEachFunction(callback) {
      const names = Array.from(__privateGet(this, _functions).keys());
      names.sort((a, b2) => a.localeCompare(b2));
      for (let i = 0; i < names.length; i++) {
        const name = names[i];
        callback(__privateGet(this, _functions).get(name), i);
      }
    }
    /**
     *  Get the event name for %%key%%, which may be a topic hash,
     *  event name or event signature that belongs to the ABI.
     */
    getEventName(key) {
      const fragment = __privateMethod(this, _Interface_instances, getEvent_fn).call(this, key, null, false);
      assertArgument(fragment, "no matching event", "key", key);
      return fragment.name;
    }
    /**
     *  Returns true if %%key%% (an event topic hash, event name or
     *  event signature) is present in the ABI.
     *
     *  In the case of an event name, the name may be ambiguous, so
     *  accessing the [[EventFragment]] may require refinement.
     */
    hasEvent(key) {
      return !!__privateMethod(this, _Interface_instances, getEvent_fn).call(this, key, null, false);
    }
    /**
     *  Get the [[EventFragment]] for %%key%%, which may be a topic hash,
     *  event name or event signature that belongs to the ABI.
     *
     *  If %%values%% is provided, it will use the Typed API to handle
     *  ambiguous cases where multiple events match by name.
     *
     *  If the %%key%% and %%values%% do not refine to a single event in
     *  the ABI, this will throw.
     */
    getEvent(key, values) {
      return __privateMethod(this, _Interface_instances, getEvent_fn).call(this, key, values || null, true);
    }
    /**
     *  Iterate over all events, calling %%callback%%, sorted by their name.
     */
    forEachEvent(callback) {
      const names = Array.from(__privateGet(this, _events).keys());
      names.sort((a, b2) => a.localeCompare(b2));
      for (let i = 0; i < names.length; i++) {
        const name = names[i];
        callback(__privateGet(this, _events).get(name), i);
      }
    }
    /**
     *  Get the [[ErrorFragment]] for %%key%%, which may be an error
     *  selector, error name or error signature that belongs to the ABI.
     *
     *  If %%values%% is provided, it will use the Typed API to handle
     *  ambiguous cases where multiple errors match by name.
     *
     *  If the %%key%% and %%values%% do not refine to a single error in
     *  the ABI, this will throw.
     */
    getError(key, values) {
      if (isHexString(key)) {
        const selector = key.toLowerCase();
        if (BuiltinErrors[selector]) {
          return ErrorFragment.from(BuiltinErrors[selector].signature);
        }
        for (const fragment of __privateGet(this, _errors).values()) {
          if (selector === fragment.selector) {
            return fragment;
          }
        }
        return null;
      }
      if (key.indexOf("(") === -1) {
        const matching = [];
        for (const [name, fragment] of __privateGet(this, _errors)) {
          if (name.split(
            "("
            /* fix:) */
          )[0] === key) {
            matching.push(fragment);
          }
        }
        if (matching.length === 0) {
          if (key === "Error") {
            return ErrorFragment.from("error Error(string)");
          }
          if (key === "Panic") {
            return ErrorFragment.from("error Panic(uint256)");
          }
          return null;
        } else if (matching.length > 1) {
          const matchStr = matching.map((m) => JSON.stringify(m.format())).join(", ");
          assertArgument(false, `ambiguous error description (i.e. ${matchStr})`, "name", key);
        }
        return matching[0];
      }
      key = ErrorFragment.from(key).format();
      if (key === "Error(string)") {
        return ErrorFragment.from("error Error(string)");
      }
      if (key === "Panic(uint256)") {
        return ErrorFragment.from("error Panic(uint256)");
      }
      const result = __privateGet(this, _errors).get(key);
      if (result) {
        return result;
      }
      return null;
    }
    /**
     *  Iterate over all errors, calling %%callback%%, sorted by their name.
     */
    forEachError(callback) {
      const names = Array.from(__privateGet(this, _errors).keys());
      names.sort((a, b2) => a.localeCompare(b2));
      for (let i = 0; i < names.length; i++) {
        const name = names[i];
        callback(__privateGet(this, _errors).get(name), i);
      }
    }
    // Get the 4-byte selector used by Solidity to identify a function
    /*
      getSelector(fragment: ErrorFragment | FunctionFragment): string {
          if (typeof(fragment) === "string") {
              const matches: Array<Fragment> = [ ];
    
              try { matches.push(this.getFunction(fragment)); } catch (error) { }
              try { matches.push(this.getError(<string>fragment)); } catch (_) { }
    
              if (matches.length === 0) {
                  logger.throwArgumentError("unknown fragment", "key", fragment);
              } else if (matches.length > 1) {
                  logger.throwArgumentError("ambiguous fragment matches function and error", "key", fragment);
              }
    
              fragment = matches[0];
          }
    
          return dataSlice(id(fragment.format()), 0, 4);
      }
          */
    // Get the 32-byte topic hash used by Solidity to identify an event
    /*
    getEventTopic(fragment: EventFragment): string {
        //if (typeof(fragment) === "string") { fragment = this.getEvent(eventFragment); }
        return id(fragment.format());
    }
    */
    _decodeParams(params, data) {
      return __privateGet(this, _abiCoder).decode(params, data);
    }
    _encodeParams(params, values) {
      return __privateGet(this, _abiCoder).encode(params, values);
    }
    /**
     *  Encodes a ``tx.data`` object for deploying the Contract with
     *  the %%values%% as the constructor arguments.
     */
    encodeDeploy(values) {
      return this._encodeParams(this.deploy.inputs, values || []);
    }
    /**
     *  Decodes the result %%data%% (e.g. from an ``eth_call``) for the
     *  specified error (see [[getError]] for valid values for
     *  %%key%%).
     *
     *  Most developers should prefer the [[parseCallResult]] method instead,
     *  which will automatically detect a ``CALL_EXCEPTION`` and throw the
     *  corresponding error.
     */
    decodeErrorResult(fragment, data) {
      if (typeof fragment === "string") {
        const f = this.getError(fragment);
        assertArgument(f, "unknown error", "fragment", fragment);
        fragment = f;
      }
      assertArgument(dataSlice(data, 0, 4) === fragment.selector, `data signature does not match error ${fragment.name}.`, "data", data);
      return this._decodeParams(fragment.inputs, dataSlice(data, 4));
    }
    /**
     *  Encodes the transaction revert data for a call result that
     *  reverted from the the Contract with the sepcified %%error%%
     *  (see [[getError]] for valid values for %%fragment%%) with the %%values%%.
     *
     *  This is generally not used by most developers, unless trying to mock
     *  a result from a Contract.
     */
    encodeErrorResult(fragment, values) {
      if (typeof fragment === "string") {
        const f = this.getError(fragment);
        assertArgument(f, "unknown error", "fragment", fragment);
        fragment = f;
      }
      return concat([
        fragment.selector,
        this._encodeParams(fragment.inputs, values || [])
      ]);
    }
    /**
     *  Decodes the %%data%% from a transaction ``tx.data`` for
     *  the function specified (see [[getFunction]] for valid values
     *  for %%fragment%%).
     *
     *  Most developers should prefer the [[parseTransaction]] method
     *  instead, which will automatically detect the fragment.
     */
    decodeFunctionData(fragment, data) {
      if (typeof fragment === "string") {
        const f = this.getFunction(fragment);
        assertArgument(f, "unknown function", "fragment", fragment);
        fragment = f;
      }
      assertArgument(dataSlice(data, 0, 4) === fragment.selector, `data signature does not match function ${fragment.name}.`, "data", data);
      return this._decodeParams(fragment.inputs, dataSlice(data, 4));
    }
    /**
     *  Encodes the ``tx.data`` for a transaction that calls the function
     *  specified (see [[getFunction]] for valid values for %%fragment%%) with
     *  the %%values%%.
     */
    encodeFunctionData(fragment, values) {
      if (typeof fragment === "string") {
        const f = this.getFunction(fragment);
        assertArgument(f, "unknown function", "fragment", fragment);
        fragment = f;
      }
      return concat([
        fragment.selector,
        this._encodeParams(fragment.inputs, values || [])
      ]);
    }
    /**
     *  Decodes the result %%data%% (e.g. from an ``eth_call``) for the
     *  specified function (see [[getFunction]] for valid values for
     *  %%key%%).
     *
     *  Most developers should prefer the [[parseCallResult]] method instead,
     *  which will automatically detect a ``CALL_EXCEPTION`` and throw the
     *  corresponding error.
     */
    decodeFunctionResult(fragment, data) {
      if (typeof fragment === "string") {
        const f = this.getFunction(fragment);
        assertArgument(f, "unknown function", "fragment", fragment);
        fragment = f;
      }
      let message = "invalid length for result data";
      const bytes2 = getBytesCopy(data);
      if (bytes2.length % 32 === 0) {
        try {
          return __privateGet(this, _abiCoder).decode(fragment.outputs, bytes2);
        } catch (error) {
          message = "could not decode result data";
        }
      }
      assert(false, message, "BAD_DATA", {
        value: hexlify(bytes2),
        info: { method: fragment.name, signature: fragment.format() }
      });
    }
    makeError(_data4, tx) {
      const data = getBytes(_data4, "data");
      const error = AbiCoder.getBuiltinCallException("call", tx, data);
      const customPrefix = "execution reverted (unknown custom error)";
      if (error.message.startsWith(customPrefix)) {
        const selector = hexlify(data.slice(0, 4));
        const ef = this.getError(selector);
        if (ef) {
          try {
            const args = __privateGet(this, _abiCoder).decode(ef.inputs, data.slice(4));
            error.revert = {
              name: ef.name,
              signature: ef.format(),
              args
            };
            error.reason = error.revert.signature;
            error.message = `execution reverted: ${error.reason}`;
          } catch (e) {
            error.message = `execution reverted (coult not decode custom error)`;
          }
        }
      }
      const parsed = this.parseTransaction(tx);
      if (parsed) {
        error.invocation = {
          method: parsed.name,
          signature: parsed.signature,
          args: parsed.args
        };
      }
      return error;
    }
    /**
     *  Encodes the result data (e.g. from an ``eth_call``) for the
     *  specified function (see [[getFunction]] for valid values
     *  for %%fragment%%) with %%values%%.
     *
     *  This is generally not used by most developers, unless trying to mock
     *  a result from a Contract.
     */
    encodeFunctionResult(fragment, values) {
      if (typeof fragment === "string") {
        const f = this.getFunction(fragment);
        assertArgument(f, "unknown function", "fragment", fragment);
        fragment = f;
      }
      return hexlify(__privateGet(this, _abiCoder).encode(fragment.outputs, values || []));
    }
    /*
        spelunk(inputs: Array<ParamType>, values: ReadonlyArray<any>, processfunc: (type: string, value: any) => Promise<any>): Promise<Array<any>> {
            const promises: Array<Promise<>> = [ ];
            const process = function(type: ParamType, value: any): any {
                if (type.baseType === "array") {
                    return descend(type.child
                }
                if (type. === "address") {
                }
            };
    
            const descend = function (inputs: Array<ParamType>, values: ReadonlyArray<any>) {
                if (inputs.length !== values.length) { throw new Error("length mismatch"); }
                
            };
    
            const result: Array<any> = [ ];
            values.forEach((value, index) => {
                if (value == null) {
                    topics.push(null);
                } else if (param.baseType === "array" || param.baseType === "tuple") {
                    logger.throwArgumentError("filtering with tuples or arrays not supported", ("contract." + param.name), value);
                } else if (Array.isArray(value)) {
                    topics.push(value.map((value) => encodeTopic(param, value)));
                } else {
                    topics.push(encodeTopic(param, value));
                }
            });
        }
    */
    // Create the filter for the event with search criteria (e.g. for eth_filterLog)
    encodeFilterTopics(fragment, values) {
      if (typeof fragment === "string") {
        const f = this.getEvent(fragment);
        assertArgument(f, "unknown event", "eventFragment", fragment);
        fragment = f;
      }
      assert(values.length <= fragment.inputs.length, `too many arguments for ${fragment.format()}`, "UNEXPECTED_ARGUMENT", { count: values.length, expectedCount: fragment.inputs.length });
      const topics = [];
      if (!fragment.anonymous) {
        topics.push(fragment.topicHash);
      }
      const encodeTopic = (param, value) => {
        if (param.type === "string") {
          return id(value);
        } else if (param.type === "bytes") {
          return keccak256(hexlify(value));
        }
        if (param.type === "bool" && typeof value === "boolean") {
          value = value ? "0x01" : "0x00";
        } else if (param.type.match(/^u?int/)) {
          value = toBeHex(value);
        } else if (param.type.match(/^bytes/)) {
          value = zeroPadBytes(value, 32);
        } else if (param.type === "address") {
          __privateGet(this, _abiCoder).encode(["address"], [value]);
        }
        return zeroPadValue(hexlify(value), 32);
      };
      values.forEach((value, index) => {
        const param = fragment.inputs[index];
        if (!param.indexed) {
          assertArgument(value == null, "cannot filter non-indexed parameters; must be null", "contract." + param.name, value);
          return;
        }
        if (value == null) {
          topics.push(null);
        } else if (param.baseType === "array" || param.baseType === "tuple") {
          assertArgument(false, "filtering with tuples or arrays not supported", "contract." + param.name, value);
        } else if (Array.isArray(value)) {
          topics.push(value.map((value2) => encodeTopic(param, value2)));
        } else {
          topics.push(encodeTopic(param, value));
        }
      });
      while (topics.length && topics[topics.length - 1] === null) {
        topics.pop();
      }
      return topics;
    }
    encodeEventLog(fragment, values) {
      if (typeof fragment === "string") {
        const f = this.getEvent(fragment);
        assertArgument(f, "unknown event", "eventFragment", fragment);
        fragment = f;
      }
      const topics = [];
      const dataTypes = [];
      const dataValues = [];
      if (!fragment.anonymous) {
        topics.push(fragment.topicHash);
      }
      assertArgument(values.length === fragment.inputs.length, "event arguments/values mismatch", "values", values);
      fragment.inputs.forEach((param, index) => {
        const value = values[index];
        if (param.indexed) {
          if (param.type === "string") {
            topics.push(id(value));
          } else if (param.type === "bytes") {
            topics.push(keccak256(value));
          } else if (param.baseType === "tuple" || param.baseType === "array") {
            throw new Error("not implemented");
          } else {
            topics.push(__privateGet(this, _abiCoder).encode([param.type], [value]));
          }
        } else {
          dataTypes.push(param);
          dataValues.push(value);
        }
      });
      return {
        data: __privateGet(this, _abiCoder).encode(dataTypes, dataValues),
        topics
      };
    }
    // Decode a filter for the event and the search criteria
    decodeEventLog(fragment, data, topics) {
      if (typeof fragment === "string") {
        const f = this.getEvent(fragment);
        assertArgument(f, "unknown event", "eventFragment", fragment);
        fragment = f;
      }
      if (topics != null && !fragment.anonymous) {
        const eventTopic = fragment.topicHash;
        assertArgument(isHexString(topics[0], 32) && topics[0].toLowerCase() === eventTopic, "fragment/topic mismatch", "topics[0]", topics[0]);
        topics = topics.slice(1);
      }
      const indexed = [];
      const nonIndexed = [];
      const dynamic = [];
      fragment.inputs.forEach((param, index) => {
        if (param.indexed) {
          if (param.type === "string" || param.type === "bytes" || param.baseType === "tuple" || param.baseType === "array") {
            indexed.push(ParamType.from({ type: "bytes32", name: param.name }));
            dynamic.push(true);
          } else {
            indexed.push(param);
            dynamic.push(false);
          }
        } else {
          nonIndexed.push(param);
          dynamic.push(false);
        }
      });
      const resultIndexed = topics != null ? __privateGet(this, _abiCoder).decode(indexed, concat(topics)) : null;
      const resultNonIndexed = __privateGet(this, _abiCoder).decode(nonIndexed, data, true);
      const values = [];
      const keys = [];
      let nonIndexedIndex = 0, indexedIndex = 0;
      fragment.inputs.forEach((param, index) => {
        let value = null;
        if (param.indexed) {
          if (resultIndexed == null) {
            value = new Indexed(null);
          } else if (dynamic[index]) {
            value = new Indexed(resultIndexed[indexedIndex++]);
          } else {
            try {
              value = resultIndexed[indexedIndex++];
            } catch (error) {
              value = error;
            }
          }
        } else {
          try {
            value = resultNonIndexed[nonIndexedIndex++];
          } catch (error) {
            value = error;
          }
        }
        values.push(value);
        keys.push(param.name || null);
      });
      return Result.fromItems(values, keys);
    }
    /**
     *  Parses a transaction, finding the matching function and extracts
     *  the parameter values along with other useful function details.
     *
     *  If the matching function cannot be found, return null.
     */
    parseTransaction(tx) {
      const data = getBytes(tx.data, "tx.data");
      const value = getBigInt(tx.value != null ? tx.value : 0, "tx.value");
      const fragment = this.getFunction(hexlify(data.slice(0, 4)));
      if (!fragment) {
        return null;
      }
      const args = __privateGet(this, _abiCoder).decode(fragment.inputs, data.slice(4));
      return new TransactionDescription(fragment, fragment.selector, args, value);
    }
    parseCallResult(data) {
      throw new Error("@TODO");
    }
    /**
     *  Parses a receipt log, finding the matching event and extracts
     *  the parameter values along with other useful event details.
     *
     *  If the matching event cannot be found, returns null.
     */
    parseLog(log) {
      const fragment = this.getEvent(log.topics[0]);
      if (!fragment || fragment.anonymous) {
        return null;
      }
      return new LogDescription(fragment, fragment.topicHash, this.decodeEventLog(fragment, log.data, log.topics));
    }
    /**
     *  Parses a revert data, finding the matching error and extracts
     *  the parameter values along with other useful error details.
     *
     *  If the matching error cannot be found, returns null.
     */
    parseError(data) {
      const hexData = hexlify(data);
      const fragment = this.getError(dataSlice(hexData, 0, 4));
      if (!fragment) {
        return null;
      }
      const args = __privateGet(this, _abiCoder).decode(fragment.inputs, dataSlice(hexData, 4));
      return new ErrorDescription(fragment, fragment.selector, args);
    }
    /**
     *  Creates a new [[Interface]] from the ABI %%value%%.
     *
     *  The %%value%% may be provided as an existing [[Interface]] object,
     *  a JSON-encoded ABI or any Human-Readable ABI format.
     */
    static from(value) {
      if (value instanceof _Interface) {
        return value;
      }
      if (typeof value === "string") {
        return new _Interface(JSON.parse(value));
      }
      if (typeof value.formatJson === "function") {
        return new _Interface(value.formatJson());
      }
      if (typeof value.format === "function") {
        return new _Interface(value.format("json"));
      }
      return new _Interface(value);
    }
  };
  _errors = new WeakMap();
  _events = new WeakMap();
  _functions = new WeakMap();
  _abiCoder = new WeakMap();
  _Interface_instances = new WeakSet();
  // Find a function definition by any means necessary (unless it is ambiguous)
  getFunction_fn = function(key, values, forceUnique) {
    if (isHexString(key)) {
      const selector = key.toLowerCase();
      for (const fragment of __privateGet(this, _functions).values()) {
        if (selector === fragment.selector) {
          return fragment;
        }
      }
      return null;
    }
    if (key.indexOf("(") === -1) {
      const matching = [];
      for (const [name, fragment] of __privateGet(this, _functions)) {
        if (name.split(
          "("
          /* fix:) */
        )[0] === key) {
          matching.push(fragment);
        }
      }
      if (values) {
        const lastValue = values.length > 0 ? values[values.length - 1] : null;
        let valueLength = values.length;
        let allowOptions = true;
        if (Typed.isTyped(lastValue) && lastValue.type === "overrides") {
          allowOptions = false;
          valueLength--;
        }
        for (let i = matching.length - 1; i >= 0; i--) {
          const inputs = matching[i].inputs.length;
          if (inputs !== valueLength && (!allowOptions || inputs !== valueLength - 1)) {
            matching.splice(i, 1);
          }
        }
        for (let i = matching.length - 1; i >= 0; i--) {
          const inputs = matching[i].inputs;
          for (let j = 0; j < values.length; j++) {
            if (!Typed.isTyped(values[j])) {
              continue;
            }
            if (j >= inputs.length) {
              if (values[j].type === "overrides") {
                continue;
              }
              matching.splice(i, 1);
              break;
            }
            if (values[j].type !== inputs[j].baseType) {
              matching.splice(i, 1);
              break;
            }
          }
        }
      }
      if (matching.length === 1 && values && values.length !== matching[0].inputs.length) {
        const lastArg = values[values.length - 1];
        if (lastArg == null || Array.isArray(lastArg) || typeof lastArg !== "object") {
          matching.splice(0, 1);
        }
      }
      if (matching.length === 0) {
        return null;
      }
      if (matching.length > 1 && forceUnique) {
        const matchStr = matching.map((m) => JSON.stringify(m.format())).join(", ");
        assertArgument(false, `ambiguous function description (i.e. matches ${matchStr})`, "key", key);
      }
      return matching[0];
    }
    const result = __privateGet(this, _functions).get(FunctionFragment.from(key).format());
    if (result) {
      return result;
    }
    return null;
  };
  // Find an event definition by any means necessary (unless it is ambiguous)
  getEvent_fn = function(key, values, forceUnique) {
    if (isHexString(key)) {
      const eventTopic = key.toLowerCase();
      for (const fragment of __privateGet(this, _events).values()) {
        if (eventTopic === fragment.topicHash) {
          return fragment;
        }
      }
      return null;
    }
    if (key.indexOf("(") === -1) {
      const matching = [];
      for (const [name, fragment] of __privateGet(this, _events)) {
        if (name.split(
          "("
          /* fix:) */
        )[0] === key) {
          matching.push(fragment);
        }
      }
      if (values) {
        for (let i = matching.length - 1; i >= 0; i--) {
          if (matching[i].inputs.length < values.length) {
            matching.splice(i, 1);
          }
        }
        for (let i = matching.length - 1; i >= 0; i--) {
          const inputs = matching[i].inputs;
          for (let j = 0; j < values.length; j++) {
            if (!Typed.isTyped(values[j])) {
              continue;
            }
            if (values[j].type !== inputs[j].baseType) {
              matching.splice(i, 1);
              break;
            }
          }
        }
      }
      if (matching.length === 0) {
        return null;
      }
      if (matching.length > 1 && forceUnique) {
        const matchStr = matching.map((m) => JSON.stringify(m.format())).join(", ");
        assertArgument(false, `ambiguous event description (i.e. matches ${matchStr})`, "key", key);
      }
      return matching[0];
    }
    const result = __privateGet(this, _events).get(EventFragment.from(key).format());
    if (result) {
      return result;
    }
    return null;
  };
  let Interface = _Interface;
  const BN_0$2 = BigInt(0);
  function getValue(value) {
    if (value == null) {
      return null;
    }
    return value;
  }
  function toJson(value) {
    if (value == null) {
      return null;
    }
    return value.toString();
  }
  class FeeData {
    /**
     *  Creates a new FeeData for %%gasPrice%%, %%maxFeePerGas%% and
     *  %%maxPriorityFeePerGas%%.
     */
    constructor(gasPrice, maxFeePerGas, maxPriorityFeePerGas) {
      /**
       *  The gas price for legacy networks.
       */
      __publicField(this, "gasPrice");
      /**
       *  The maximum fee to pay per gas.
       *
       *  The base fee per gas is defined by the network and based on
       *  congestion, increasing the cost during times of heavy load
       *  and lowering when less busy.
       *
       *  The actual fee per gas will be the base fee for the block
       *  and the priority fee, up to the max fee per gas.
       *
       *  This will be ``null`` on legacy networks (i.e. [pre-EIP-1559](link-eip-1559))
       */
      __publicField(this, "maxFeePerGas");
      /**
       *  The additional amout to pay per gas to encourage a validator
       *  to include the transaction.
       *
       *  The purpose of this is to compensate the validator for the
       *  adjusted risk for including a given transaction.
       *
       *  This will be ``null`` on legacy networks (i.e. [pre-EIP-1559](link-eip-1559))
       */
      __publicField(this, "maxPriorityFeePerGas");
      defineProperties(this, {
        gasPrice: getValue(gasPrice),
        maxFeePerGas: getValue(maxFeePerGas),
        maxPriorityFeePerGas: getValue(maxPriorityFeePerGas)
      });
    }
    /**
     *  Returns a JSON-friendly value.
     */
    toJSON() {
      const { gasPrice, maxFeePerGas, maxPriorityFeePerGas } = this;
      return {
        _type: "FeeData",
        gasPrice: toJson(gasPrice),
        maxFeePerGas: toJson(maxFeePerGas),
        maxPriorityFeePerGas: toJson(maxPriorityFeePerGas)
      };
    }
  }
  function copyRequest(req) {
    const result = {};
    if (req.to) {
      result.to = req.to;
    }
    if (req.from) {
      result.from = req.from;
    }
    if (req.data) {
      result.data = hexlify(req.data);
    }
    const bigIntKeys = "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
    for (const key of bigIntKeys) {
      if (!(key in req) || req[key] == null) {
        continue;
      }
      result[key] = getBigInt(req[key], `request.${key}`);
    }
    const numberKeys = "type,nonce".split(/,/);
    for (const key of numberKeys) {
      if (!(key in req) || req[key] == null) {
        continue;
      }
      result[key] = getNumber(req[key], `request.${key}`);
    }
    if (req.accessList) {
      result.accessList = accessListify(req.accessList);
    }
    if ("blockTag" in req) {
      result.blockTag = req.blockTag;
    }
    if ("enableCcipRead" in req) {
      result.enableCcipRead = !!req.enableCcipRead;
    }
    if ("customData" in req) {
      result.customData = req.customData;
    }
    if ("blobVersionedHashes" in req && req.blobVersionedHashes) {
      result.blobVersionedHashes = req.blobVersionedHashes.slice();
    }
    if ("kzg" in req) {
      result.kzg = req.kzg;
    }
    if ("blobs" in req && req.blobs) {
      result.blobs = req.blobs.map((b2) => {
        if (isBytesLike(b2)) {
          return hexlify(b2);
        }
        return Object.assign({}, b2);
      });
    }
    return result;
  }
  class Block {
    /**
     *  Create a new **Block** object.
     *
     *  This should generally not be necessary as the unless implementing a
     *  low-level library.
     */
    constructor(block, provider) {
      /**
       *  The provider connected to the block used to fetch additional details
       *  if necessary.
       */
      __publicField(this, "provider");
      /**
       *  The block number, sometimes called the block height. This is a
       *  sequential number that is one higher than the parent block.
       */
      __publicField(this, "number");
      /**
       *  The block hash.
       *
       *  This hash includes all properties, so can be safely used to identify
       *  an exact set of block properties.
       */
      __publicField(this, "hash");
      /**
       *  The timestamp for this block, which is the number of seconds since
       *  epoch that this block was included.
       */
      __publicField(this, "timestamp");
      /**
       *  The block hash of the parent block.
       */
      __publicField(this, "parentHash");
      /**
       *  The hash tree root of the parent beacon block for the given
       *  execution block. See [[link-eip-4788]].
       */
      __publicField(this, "parentBeaconBlockRoot");
      /**
       *  The nonce.
       *
       *  On legacy networks, this is the random number inserted which
       *  permitted the difficulty target to be reached.
       */
      __publicField(this, "nonce");
      /**
       *  The difficulty target.
       *
       *  On legacy networks, this is the proof-of-work target required
       *  for a block to meet the protocol rules to be included.
       *
       *  On modern networks, this is a random number arrived at using
       *  randao.  @TODO: Find links?
       */
      __publicField(this, "difficulty");
      /**
       *  The total gas limit for this block.
       */
      __publicField(this, "gasLimit");
      /**
       *  The total gas used in this block.
       */
      __publicField(this, "gasUsed");
      /**
       *  The root hash for the global state after applying changes
       *  in this block.
       */
      __publicField(this, "stateRoot");
      /**
       *  The hash of the transaction receipts trie.
       */
      __publicField(this, "receiptsRoot");
      /**
       *  The total amount of blob gas consumed by the transactions
       *  within the block. See [[link-eip-4844]].
       */
      __publicField(this, "blobGasUsed");
      /**
       *  The running total of blob gas consumed in excess of the
       *  target, prior to the block. See [[link-eip-4844]].
       */
      __publicField(this, "excessBlobGas");
      /**
       *  The miner coinbase address, wihch receives any subsidies for
       *  including this block.
       */
      __publicField(this, "miner");
      /**
       *  The latest RANDAO mix of the post beacon state of
       *  the previous block.
       */
      __publicField(this, "prevRandao");
      /**
       *  Any extra data the validator wished to include.
       */
      __publicField(this, "extraData");
      /**
       *  The base fee per gas that all transactions in this block were
       *  charged.
       *
       *  This adjusts after each block, depending on how congested the network
       *  is.
       */
      __publicField(this, "baseFeePerGas");
      __privateAdd(this, _transactions);
      __privateSet(this, _transactions, block.transactions.map((tx) => {
        if (typeof tx !== "string") {
          return new TransactionResponse(tx, provider);
        }
        return tx;
      }));
      defineProperties(this, {
        provider,
        hash: getValue(block.hash),
        number: block.number,
        timestamp: block.timestamp,
        parentHash: block.parentHash,
        parentBeaconBlockRoot: block.parentBeaconBlockRoot,
        nonce: block.nonce,
        difficulty: block.difficulty,
        gasLimit: block.gasLimit,
        gasUsed: block.gasUsed,
        blobGasUsed: block.blobGasUsed,
        excessBlobGas: block.excessBlobGas,
        miner: block.miner,
        prevRandao: getValue(block.prevRandao),
        extraData: block.extraData,
        baseFeePerGas: getValue(block.baseFeePerGas),
        stateRoot: block.stateRoot,
        receiptsRoot: block.receiptsRoot
      });
    }
    /**
     *  Returns the list of transaction hashes, in the order
     *  they were executed within the block.
     */
    get transactions() {
      return __privateGet(this, _transactions).map((tx) => {
        if (typeof tx === "string") {
          return tx;
        }
        return tx.hash;
      });
    }
    /**
     *  Returns the complete transactions, in the order they
     *  were executed within the block.
     *
     *  This is only available for blocks which prefetched
     *  transactions, by passing ``true`` to %%prefetchTxs%%
     *  into [[Provider-getBlock]].
     */
    get prefetchedTransactions() {
      const txs = __privateGet(this, _transactions).slice();
      if (txs.length === 0) {
        return [];
      }
      assert(typeof txs[0] === "object", "transactions were not prefetched with block request", "UNSUPPORTED_OPERATION", {
        operation: "transactionResponses()"
      });
      return txs;
    }
    /**
     *  Returns a JSON-friendly value.
     */
    toJSON() {
      const { baseFeePerGas, difficulty, extraData, gasLimit, gasUsed, hash: hash2, miner, prevRandao, nonce, number: number2, parentHash, parentBeaconBlockRoot, stateRoot, receiptsRoot, timestamp, transactions } = this;
      return {
        _type: "Block",
        baseFeePerGas: toJson(baseFeePerGas),
        difficulty: toJson(difficulty),
        extraData,
        gasLimit: toJson(gasLimit),
        gasUsed: toJson(gasUsed),
        blobGasUsed: toJson(this.blobGasUsed),
        excessBlobGas: toJson(this.excessBlobGas),
        hash: hash2,
        miner,
        prevRandao,
        nonce,
        number: number2,
        parentHash,
        timestamp,
        parentBeaconBlockRoot,
        stateRoot,
        receiptsRoot,
        transactions
      };
    }
    [Symbol.iterator]() {
      let index = 0;
      const txs = this.transactions;
      return {
        next: () => {
          if (index < this.length) {
            return {
              value: txs[index++],
              done: false
            };
          }
          return { value: void 0, done: true };
        }
      };
    }
    /**
     *  The number of transactions in this block.
     */
    get length() {
      return __privateGet(this, _transactions).length;
    }
    /**
     *  The [[link-js-date]] this block was included at.
     */
    get date() {
      if (this.timestamp == null) {
        return null;
      }
      return new Date(this.timestamp * 1e3);
    }
    /**
     *  Get the transaction at %%indexe%% within this block.
     */
    async getTransaction(indexOrHash) {
      let tx = void 0;
      if (typeof indexOrHash === "number") {
        tx = __privateGet(this, _transactions)[indexOrHash];
      } else {
        const hash2 = indexOrHash.toLowerCase();
        for (const v of __privateGet(this, _transactions)) {
          if (typeof v === "string") {
            if (v !== hash2) {
              continue;
            }
            tx = v;
            break;
          } else {
            if (v.hash !== hash2) {
              continue;
            }
            tx = v;
            break;
          }
        }
      }
      if (tx == null) {
        throw new Error("no such tx");
      }
      if (typeof tx === "string") {
        return await this.provider.getTransaction(tx);
      } else {
        return tx;
      }
    }
    /**
     *  If a **Block** was fetched with a request to include the transactions
     *  this will allow synchronous access to those transactions.
     *
     *  If the transactions were not prefetched, this will throw.
     */
    getPrefetchedTransaction(indexOrHash) {
      const txs = this.prefetchedTransactions;
      if (typeof indexOrHash === "number") {
        return txs[indexOrHash];
      }
      indexOrHash = indexOrHash.toLowerCase();
      for (const tx of txs) {
        if (tx.hash === indexOrHash) {
          return tx;
        }
      }
      assertArgument(false, "no matching transaction", "indexOrHash", indexOrHash);
    }
    /**
     *  Returns true if this block been mined. This provides a type guard
     *  for all properties on a [[MinedBlock]].
     */
    isMined() {
      return !!this.hash;
    }
    /**
     *  Returns true if this block is an [[link-eip-2930]] block.
     */
    isLondon() {
      return !!this.baseFeePerGas;
    }
    /**
     *  @_ignore:
     */
    orphanedEvent() {
      if (!this.isMined()) {
        throw new Error("");
      }
      return createOrphanedBlockFilter(this);
    }
  }
  _transactions = new WeakMap();
  class Log {
    /**
     *  @_ignore:
     */
    constructor(log, provider) {
      /**
       *  The provider connected to the log used to fetch additional details
       *  if necessary.
       */
      __publicField(this, "provider");
      /**
       *  The transaction hash of the transaction this log occurred in. Use the
       *  [[Log-getTransaction]] to get the [[TransactionResponse]].
       */
      __publicField(this, "transactionHash");
      /**
       *  The block hash of the block this log occurred in. Use the
       *  [[Log-getBlock]] to get the [[Block]].
       */
      __publicField(this, "blockHash");
      /**
       *  The block number of the block this log occurred in. It is preferred
       *  to use the [[Block-hash]] when fetching the related [[Block]],
       *  since in the case of an orphaned block, the block at that height may
       *  have changed.
       */
      __publicField(this, "blockNumber");
      /**
       *  If the **Log** represents a block that was removed due to an orphaned
       *  block, this will be true.
       *
       *  This can only happen within an orphan event listener.
       */
      __publicField(this, "removed");
      /**
       *  The address of the contract that emitted this log.
       */
      __publicField(this, "address");
      /**
       *  The data included in this log when it was emitted.
       */
      __publicField(this, "data");
      /**
       *  The indexed topics included in this log when it was emitted.
       *
       *  All topics are included in the bloom filters, so they can be
       *  efficiently filtered using the [[Provider-getLogs]] method.
       */
      __publicField(this, "topics");
      /**
       *  The index within the block this log occurred at. This is generally
       *  not useful to developers, but can be used with the various roots
       *  to proof inclusion within a block.
       */
      __publicField(this, "index");
      /**
       *  The index within the transaction of this log.
       */
      __publicField(this, "transactionIndex");
      this.provider = provider;
      const topics = Object.freeze(log.topics.slice());
      defineProperties(this, {
        transactionHash: log.transactionHash,
        blockHash: log.blockHash,
        blockNumber: log.blockNumber,
        removed: log.removed,
        address: log.address,
        data: log.data,
        topics,
        index: log.index,
        transactionIndex: log.transactionIndex
      });
    }
    /**
     *  Returns a JSON-compatible object.
     */
    toJSON() {
      const { address, blockHash, blockNumber, data, index, removed, topics, transactionHash, transactionIndex } = this;
      return {
        _type: "log",
        address,
        blockHash,
        blockNumber,
        data,
        index,
        removed,
        topics,
        transactionHash,
        transactionIndex
      };
    }
    /**
     *  Returns the block that this log occurred in.
     */
    async getBlock() {
      const block = await this.provider.getBlock(this.blockHash);
      assert(!!block, "failed to find transaction", "UNKNOWN_ERROR", {});
      return block;
    }
    /**
     *  Returns the transaction that this log occurred in.
     */
    async getTransaction() {
      const tx = await this.provider.getTransaction(this.transactionHash);
      assert(!!tx, "failed to find transaction", "UNKNOWN_ERROR", {});
      return tx;
    }
    /**
     *  Returns the transaction receipt fot the transaction that this
     *  log occurred in.
     */
    async getTransactionReceipt() {
      const receipt = await this.provider.getTransactionReceipt(this.transactionHash);
      assert(!!receipt, "failed to find transaction receipt", "UNKNOWN_ERROR", {});
      return receipt;
    }
    /**
     *  @_ignore:
     */
    removedEvent() {
      return createRemovedLogFilter(this);
    }
  }
  class TransactionReceipt {
    /**
     *  @_ignore:
     */
    constructor(tx, provider) {
      /**
       *  The provider connected to the log used to fetch additional details
       *  if necessary.
       */
      __publicField(this, "provider");
      /**
       *  The address the transaction was sent to.
       */
      __publicField(this, "to");
      /**
       *  The sender of the transaction.
       */
      __publicField(this, "from");
      /**
       *  The address of the contract if the transaction was directly
       *  responsible for deploying one.
       *
       *  This is non-null **only** if the ``to`` is empty and the ``data``
       *  was successfully executed as initcode.
       */
      __publicField(this, "contractAddress");
      /**
       *  The transaction hash.
       */
      __publicField(this, "hash");
      /**
       *  The index of this transaction within the block transactions.
       */
      __publicField(this, "index");
      /**
       *  The block hash of the [[Block]] this transaction was included in.
       */
      __publicField(this, "blockHash");
      /**
       *  The block number of the [[Block]] this transaction was included in.
       */
      __publicField(this, "blockNumber");
      /**
       *  The bloom filter bytes that represent all logs that occurred within
       *  this transaction. This is generally not useful for most developers,
       *  but can be used to validate the included logs.
       */
      __publicField(this, "logsBloom");
      /**
       *  The actual amount of gas used by this transaction.
       *
       *  When creating a transaction, the amount of gas that will be used can
       *  only be approximated, but the sender must pay the gas fee for the
       *  entire gas limit. After the transaction, the difference is refunded.
       */
      __publicField(this, "gasUsed");
      /**
       *  The gas used for BLObs. See [[link-eip-4844]].
       */
      __publicField(this, "blobGasUsed");
      /**
       *  The amount of gas used by all transactions within the block for this
       *  and all transactions with a lower ``index``.
       *
       *  This is generally not useful for developers but can be used to
       *  validate certain aspects of execution.
       */
      __publicField(this, "cumulativeGasUsed");
      /**
       *  The actual gas price used during execution.
       *
       *  Due to the complexity of [[link-eip-1559]] this value can only
       *  be caluclated after the transaction has been mined, snce the base
       *  fee is protocol-enforced.
       */
      __publicField(this, "gasPrice");
      /**
       *  The price paid per BLOB in gas. See [[link-eip-4844]].
       */
      __publicField(this, "blobGasPrice");
      /**
       *  The [[link-eip-2718]] transaction type.
       */
      __publicField(this, "type");
      //readonly byzantium!: boolean;
      /**
       *  The status of this transaction, indicating success (i.e. ``1``) or
       *  a revert (i.e. ``0``).
       *
       *  This is available in post-byzantium blocks, but some backends may
       *  backfill this value.
       */
      __publicField(this, "status");
      /**
       *  The root hash of this transaction.
       *
       *  This is no present and was only included in pre-byzantium blocks, but
       *  could be used to validate certain parts of the receipt.
       */
      __publicField(this, "root");
      __privateAdd(this, _logs);
      __privateSet(this, _logs, Object.freeze(tx.logs.map((log) => {
        return new Log(log, provider);
      })));
      let gasPrice = BN_0$2;
      if (tx.effectiveGasPrice != null) {
        gasPrice = tx.effectiveGasPrice;
      } else if (tx.gasPrice != null) {
        gasPrice = tx.gasPrice;
      }
      defineProperties(this, {
        provider,
        to: tx.to,
        from: tx.from,
        contractAddress: tx.contractAddress,
        hash: tx.hash,
        index: tx.index,
        blockHash: tx.blockHash,
        blockNumber: tx.blockNumber,
        logsBloom: tx.logsBloom,
        gasUsed: tx.gasUsed,
        cumulativeGasUsed: tx.cumulativeGasUsed,
        blobGasUsed: tx.blobGasUsed,
        gasPrice,
        blobGasPrice: tx.blobGasPrice,
        type: tx.type,
        //byzantium: tx.byzantium,
        status: tx.status,
        root: tx.root
      });
    }
    /**
     *  The logs for this transaction.
     */
    get logs() {
      return __privateGet(this, _logs);
    }
    /**
     *  Returns a JSON-compatible representation.
     */
    toJSON() {
      const {
        to,
        from,
        contractAddress,
        hash: hash2,
        index,
        blockHash,
        blockNumber,
        logsBloom,
        logs,
        //byzantium, 
        status,
        root
      } = this;
      return {
        _type: "TransactionReceipt",
        blockHash,
        blockNumber,
        //byzantium, 
        contractAddress,
        cumulativeGasUsed: toJson(this.cumulativeGasUsed),
        from,
        gasPrice: toJson(this.gasPrice),
        blobGasUsed: toJson(this.blobGasUsed),
        blobGasPrice: toJson(this.blobGasPrice),
        gasUsed: toJson(this.gasUsed),
        hash: hash2,
        index,
        logs,
        logsBloom,
        root,
        status,
        to
      };
    }
    /**
     *  @_ignore:
     */
    get length() {
      return this.logs.length;
    }
    [Symbol.iterator]() {
      let index = 0;
      return {
        next: () => {
          if (index < this.length) {
            return { value: this.logs[index++], done: false };
          }
          return { value: void 0, done: true };
        }
      };
    }
    /**
     *  The total fee for this transaction, in wei.
     */
    get fee() {
      return this.gasUsed * this.gasPrice;
    }
    /**
     *  Resolves to the block this transaction occurred in.
     */
    async getBlock() {
      const block = await this.provider.getBlock(this.blockHash);
      if (block == null) {
        throw new Error("TODO");
      }
      return block;
    }
    /**
     *  Resolves to the transaction this transaction occurred in.
     */
    async getTransaction() {
      const tx = await this.provider.getTransaction(this.hash);
      if (tx == null) {
        throw new Error("TODO");
      }
      return tx;
    }
    /**
     *  Resolves to the return value of the execution of this transaction.
     *
     *  Support for this feature is limited, as it requires an archive node
     *  with the ``debug_`` or ``trace_`` API enabled.
     */
    async getResult() {
      return await this.provider.getTransactionResult(this.hash);
    }
    /**
     *  Resolves to the number of confirmations this transaction has.
     */
    async confirmations() {
      return await this.provider.getBlockNumber() - this.blockNumber + 1;
    }
    /**
     *  @_ignore:
     */
    removedEvent() {
      return createRemovedTransactionFilter(this);
    }
    /**
     *  @_ignore:
     */
    reorderedEvent(other) {
      assert(!other || other.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", { operation: "reorderedEvent(other)" });
      return createReorderedTransactionFilter(this, other);
    }
  }
  _logs = new WeakMap();
  const _TransactionResponse = class _TransactionResponse {
    /**
     *  @_ignore:
     */
    constructor(tx, provider) {
      /**
       *  The provider this is connected to, which will influence how its
       *  methods will resolve its async inspection methods.
       */
      __publicField(this, "provider");
      /**
       *  The block number of the block that this transaction was included in.
       *
       *  This is ``null`` for pending transactions.
       */
      __publicField(this, "blockNumber");
      /**
       *  The blockHash of the block that this transaction was included in.
       *
       *  This is ``null`` for pending transactions.
       */
      __publicField(this, "blockHash");
      /**
       *  The index within the block that this transaction resides at.
       */
      __publicField(this, "index");
      /**
       *  The transaction hash.
       */
      __publicField(this, "hash");
      /**
       *  The [[link-eip-2718]] transaction envelope type. This is
       *  ``0`` for legacy transactions types.
       */
      __publicField(this, "type");
      /**
       *  The receiver of this transaction.
       *
       *  If ``null``, then the transaction is an initcode transaction.
       *  This means the result of executing the [[data]] will be deployed
       *  as a new contract on chain (assuming it does not revert) and the
       *  address may be computed using [[getCreateAddress]].
       */
      __publicField(this, "to");
      /**
       *  The sender of this transaction. It is implicitly computed
       *  from the transaction pre-image hash (as the digest) and the
       *  [[signature]] using ecrecover.
       */
      __publicField(this, "from");
      /**
       *  The nonce, which is used to prevent replay attacks and offer
       *  a method to ensure transactions from a given sender are explicitly
       *  ordered.
       *
       *  When sending a transaction, this must be equal to the number of
       *  transactions ever sent by [[from]].
       */
      __publicField(this, "nonce");
      /**
       *  The maximum units of gas this transaction can consume. If execution
       *  exceeds this, the entries transaction is reverted and the sender
       *  is charged for the full amount, despite not state changes being made.
       */
      __publicField(this, "gasLimit");
      /**
       *  The gas price can have various values, depending on the network.
       *
       *  In modern networks, for transactions that are included this is
       *  the //effective gas price// (the fee per gas that was actually
       *  charged), while for transactions that have not been included yet
       *  is the [[maxFeePerGas]].
       *
       *  For legacy transactions, or transactions on legacy networks, this
       *  is the fee that will be charged per unit of gas the transaction
       *  consumes.
       */
      __publicField(this, "gasPrice");
      /**
       *  The maximum priority fee (per unit of gas) to allow a
       *  validator to charge the sender. This is inclusive of the
       *  [[maxFeeFeePerGas]].
       */
      __publicField(this, "maxPriorityFeePerGas");
      /**
       *  The maximum fee (per unit of gas) to allow this transaction
       *  to charge the sender.
       */
      __publicField(this, "maxFeePerGas");
      /**
       *  The [[link-eip-4844]] max fee per BLOb gas.
       */
      __publicField(this, "maxFeePerBlobGas");
      /**
       *  The data.
       */
      __publicField(this, "data");
      /**
       *  The value, in wei. Use [[formatEther]] to format this value
       *  as ether.
       */
      __publicField(this, "value");
      /**
       *  The chain ID.
       */
      __publicField(this, "chainId");
      /**
       *  The signature.
       */
      __publicField(this, "signature");
      /**
       *  The [[link-eip-2930]] access list for transaction types that
       *  support it, otherwise ``null``.
       */
      __publicField(this, "accessList");
      /**
       *  The [[link-eip-4844]] BLOb versioned hashes.
       */
      __publicField(this, "blobVersionedHashes");
      __privateAdd(this, _startBlock);
      this.provider = provider;
      this.blockNumber = tx.blockNumber != null ? tx.blockNumber : null;
      this.blockHash = tx.blockHash != null ? tx.blockHash : null;
      this.hash = tx.hash;
      this.index = tx.index;
      this.type = tx.type;
      this.from = tx.from;
      this.to = tx.to || null;
      this.gasLimit = tx.gasLimit;
      this.nonce = tx.nonce;
      this.data = tx.data;
      this.value = tx.value;
      this.gasPrice = tx.gasPrice;
      this.maxPriorityFeePerGas = tx.maxPriorityFeePerGas != null ? tx.maxPriorityFeePerGas : null;
      this.maxFeePerGas = tx.maxFeePerGas != null ? tx.maxFeePerGas : null;
      this.maxFeePerBlobGas = tx.maxFeePerBlobGas != null ? tx.maxFeePerBlobGas : null;
      this.chainId = tx.chainId;
      this.signature = tx.signature;
      this.accessList = tx.accessList != null ? tx.accessList : null;
      this.blobVersionedHashes = tx.blobVersionedHashes != null ? tx.blobVersionedHashes : null;
      __privateSet(this, _startBlock, -1);
    }
    /**
     *  Returns a JSON-compatible representation of this transaction.
     */
    toJSON() {
      const { blockNumber, blockHash, index, hash: hash2, type, to, from, nonce, data, signature, accessList, blobVersionedHashes } = this;
      return {
        _type: "TransactionResponse",
        accessList,
        blockNumber,
        blockHash,
        blobVersionedHashes,
        chainId: toJson(this.chainId),
        data,
        from,
        gasLimit: toJson(this.gasLimit),
        gasPrice: toJson(this.gasPrice),
        hash: hash2,
        maxFeePerGas: toJson(this.maxFeePerGas),
        maxPriorityFeePerGas: toJson(this.maxPriorityFeePerGas),
        maxFeePerBlobGas: toJson(this.maxFeePerBlobGas),
        nonce,
        signature,
        to,
        index,
        type,
        value: toJson(this.value)
      };
    }
    /**
     *  Resolves to the Block that this transaction was included in.
     *
     *  This will return null if the transaction has not been included yet.
     */
    async getBlock() {
      let blockNumber = this.blockNumber;
      if (blockNumber == null) {
        const tx = await this.getTransaction();
        if (tx) {
          blockNumber = tx.blockNumber;
        }
      }
      if (blockNumber == null) {
        return null;
      }
      const block = this.provider.getBlock(blockNumber);
      if (block == null) {
        throw new Error("TODO");
      }
      return block;
    }
    /**
     *  Resolves to this transaction being re-requested from the
     *  provider. This can be used if you have an unmined transaction
     *  and wish to get an up-to-date populated instance.
     */
    async getTransaction() {
      return this.provider.getTransaction(this.hash);
    }
    /**
     *  Resolve to the number of confirmations this transaction has.
     */
    async confirmations() {
      if (this.blockNumber == null) {
        const { tx, blockNumber: blockNumber2 } = await resolveProperties({
          tx: this.getTransaction(),
          blockNumber: this.provider.getBlockNumber()
        });
        if (tx == null || tx.blockNumber == null) {
          return 0;
        }
        return blockNumber2 - tx.blockNumber + 1;
      }
      const blockNumber = await this.provider.getBlockNumber();
      return blockNumber - this.blockNumber + 1;
    }
    /**
     *  Resolves once this transaction has been mined and has
     *  %%confirms%% blocks including it (default: ``1``) with an
     *  optional %%timeout%%.
     *
     *  This can resolve to ``null`` only if %%confirms%% is ``0``
     *  and the transaction has not been mined, otherwise this will
     *  wait until enough confirmations have completed.
     */
    async wait(_confirms, _timeout2) {
      const confirms = _confirms == null ? 1 : _confirms;
      const timeout = _timeout2 == null ? 0 : _timeout2;
      let startBlock = __privateGet(this, _startBlock);
      let nextScan = -1;
      let stopScanning = startBlock === -1 ? true : false;
      const checkReplacement = async () => {
        if (stopScanning) {
          return null;
        }
        const { blockNumber, nonce } = await resolveProperties({
          blockNumber: this.provider.getBlockNumber(),
          nonce: this.provider.getTransactionCount(this.from)
        });
        if (nonce < this.nonce) {
          startBlock = blockNumber;
          return;
        }
        if (stopScanning) {
          return null;
        }
        const mined = await this.getTransaction();
        if (mined && mined.blockNumber != null) {
          return;
        }
        if (nextScan === -1) {
          nextScan = startBlock - 3;
          if (nextScan < __privateGet(this, _startBlock)) {
            nextScan = __privateGet(this, _startBlock);
          }
        }
        while (nextScan <= blockNumber) {
          if (stopScanning) {
            return null;
          }
          const block = await this.provider.getBlock(nextScan, true);
          if (block == null) {
            return;
          }
          for (const hash2 of block) {
            if (hash2 === this.hash) {
              return;
            }
          }
          for (let i = 0; i < block.length; i++) {
            const tx = await block.getTransaction(i);
            if (tx.from === this.from && tx.nonce === this.nonce) {
              if (stopScanning) {
                return null;
              }
              const receipt2 = await this.provider.getTransactionReceipt(tx.hash);
              if (receipt2 == null) {
                return;
              }
              if (blockNumber - receipt2.blockNumber + 1 < confirms) {
                return;
              }
              let reason = "replaced";
              if (tx.data === this.data && tx.to === this.to && tx.value === this.value) {
                reason = "repriced";
              } else if (tx.data === "0x" && tx.from === tx.to && tx.value === BN_0$2) {
                reason = "cancelled";
              }
              assert(false, "transaction was replaced", "TRANSACTION_REPLACED", {
                cancelled: reason === "replaced" || reason === "cancelled",
                reason,
                replacement: tx.replaceableTransaction(startBlock),
                hash: tx.hash,
                receipt: receipt2
              });
            }
          }
          nextScan++;
        }
        return;
      };
      const checkReceipt = (receipt2) => {
        if (receipt2 == null || receipt2.status !== 0) {
          return receipt2;
        }
        assert(false, "transaction execution reverted", "CALL_EXCEPTION", {
          action: "sendTransaction",
          data: null,
          reason: null,
          invocation: null,
          revert: null,
          transaction: {
            to: receipt2.to,
            from: receipt2.from,
            data: ""
            // @TODO: in v7, split out sendTransaction properties
          },
          receipt: receipt2
        });
      };
      const receipt = await this.provider.getTransactionReceipt(this.hash);
      if (confirms === 0) {
        return checkReceipt(receipt);
      }
      if (receipt) {
        if (await receipt.confirmations() >= confirms) {
          return checkReceipt(receipt);
        }
      } else {
        await checkReplacement();
        if (confirms === 0) {
          return null;
        }
      }
      const waiter = new Promise((resolve, reject) => {
        const cancellers = [];
        const cancel = () => {
          cancellers.forEach((c) => c());
        };
        cancellers.push(() => {
          stopScanning = true;
        });
        if (timeout > 0) {
          const timer = setTimeout(() => {
            cancel();
            reject(makeError("wait for transaction timeout", "TIMEOUT"));
          }, timeout);
          cancellers.push(() => {
            clearTimeout(timer);
          });
        }
        const txListener = async (receipt2) => {
          if (await receipt2.confirmations() >= confirms) {
            cancel();
            try {
              resolve(checkReceipt(receipt2));
            } catch (error) {
              reject(error);
            }
          }
        };
        cancellers.push(() => {
          this.provider.off(this.hash, txListener);
        });
        this.provider.on(this.hash, txListener);
        if (startBlock >= 0) {
          const replaceListener = async () => {
            try {
              await checkReplacement();
            } catch (error) {
              if (isError(error, "TRANSACTION_REPLACED")) {
                cancel();
                reject(error);
                return;
              }
            }
            if (!stopScanning) {
              this.provider.once("block", replaceListener);
            }
          };
          cancellers.push(() => {
            this.provider.off("block", replaceListener);
          });
          this.provider.once("block", replaceListener);
        }
      });
      return await waiter;
    }
    /**
     *  Returns ``true`` if this transaction has been included.
     *
     *  This is effective only as of the time the TransactionResponse
     *  was instantiated. To get up-to-date information, use
     *  [[getTransaction]].
     *
     *  This provides a Type Guard that this transaction will have
     *  non-null property values for properties that are null for
     *  unmined transactions.
     */
    isMined() {
      return this.blockHash != null;
    }
    /**
     *  Returns true if the transaction is a legacy (i.e. ``type == 0``)
     *  transaction.
     *
     *  This provides a Type Guard that this transaction will have
     *  the ``null``-ness for hardfork-specific properties set correctly.
     */
    isLegacy() {
      return this.type === 0;
    }
    /**
     *  Returns true if the transaction is a Berlin (i.e. ``type == 1``)
     *  transaction. See [[link-eip-2070]].
     *
     *  This provides a Type Guard that this transaction will have
     *  the ``null``-ness for hardfork-specific properties set correctly.
     */
    isBerlin() {
      return this.type === 1;
    }
    /**
     *  Returns true if the transaction is a London (i.e. ``type == 2``)
     *  transaction. See [[link-eip-1559]].
     *
     *  This provides a Type Guard that this transaction will have
     *  the ``null``-ness for hardfork-specific properties set correctly.
     */
    isLondon() {
      return this.type === 2;
    }
    /**
     *  Returns true if hte transaction is a Cancun (i.e. ``type == 3``)
     *  transaction. See [[link-eip-4844]].
     */
    isCancun() {
      return this.type === 3;
    }
    /**
     *  Returns a filter which can be used to listen for orphan events
     *  that evict this transaction.
     */
    removedEvent() {
      assert(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" });
      return createRemovedTransactionFilter(this);
    }
    /**
     *  Returns a filter which can be used to listen for orphan events
     *  that re-order this event against %%other%%.
     */
    reorderedEvent(other) {
      assert(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" });
      assert(!other || other.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" });
      return createReorderedTransactionFilter(this, other);
    }
    /**
     *  Returns a new TransactionResponse instance which has the ability to
     *  detect (and throw an error) if the transaction is replaced, which
     *  will begin scanning at %%startBlock%%.
     *
     *  This should generally not be used by developers and is intended
     *  primarily for internal use. Setting an incorrect %%startBlock%% can
     *  have devastating performance consequences if used incorrectly.
     */
    replaceableTransaction(startBlock) {
      assertArgument(Number.isInteger(startBlock) && startBlock >= 0, "invalid startBlock", "startBlock", startBlock);
      const tx = new _TransactionResponse(this, this.provider);
      __privateSet(tx, _startBlock, startBlock);
      return tx;
    }
  };
  _startBlock = new WeakMap();
  let TransactionResponse = _TransactionResponse;
  function createOrphanedBlockFilter(block) {
    return { orphan: "drop-block", hash: block.hash, number: block.number };
  }
  function createReorderedTransactionFilter(tx, other) {
    return { orphan: "reorder-transaction", tx, other };
  }
  function createRemovedTransactionFilter(tx) {
    return { orphan: "drop-transaction", tx };
  }
  function createRemovedLogFilter(log) {
    return { orphan: "drop-log", log: {
      transactionHash: log.transactionHash,
      blockHash: log.blockHash,
      blockNumber: log.blockNumber,
      address: log.address,
      data: log.data,
      topics: Object.freeze(log.topics.slice()),
      index: log.index
    } };
  }
  class EventLog extends Log {
    /**
     * @_ignore:
     */
    constructor(log, iface, fragment) {
      super(log, log.provider);
      /**
       *  The Contract Interface.
       */
      __publicField(this, "interface");
      /**
       *  The matching event.
       */
      __publicField(this, "fragment");
      /**
       *  The parsed arguments passed to the event by ``emit``.
       */
      __publicField(this, "args");
      const args = iface.decodeEventLog(fragment, log.data, log.topics);
      defineProperties(this, { args, fragment, interface: iface });
    }
    /**
     *  The name of the event.
     */
    get eventName() {
      return this.fragment.name;
    }
    /**
     *  The signature of the event.
     */
    get eventSignature() {
      return this.fragment.format();
    }
  }
  class UndecodedEventLog extends Log {
    /**
     * @_ignore:
     */
    constructor(log, error) {
      super(log, log.provider);
      /**
       *  The error encounted when trying to decode the log.
       */
      __publicField(this, "error");
      defineProperties(this, { error });
    }
  }
  class ContractTransactionReceipt extends TransactionReceipt {
    /**
     *  @_ignore:
     */
    constructor(iface, provider, tx) {
      super(tx, provider);
      __privateAdd(this, _iface);
      __privateSet(this, _iface, iface);
    }
    /**
     *  The parsed logs for any [[Log]] which has a matching event in the
     *  Contract ABI.
     */
    get logs() {
      return super.logs.map((log) => {
        const fragment = log.topics.length ? __privateGet(this, _iface).getEvent(log.topics[0]) : null;
        if (fragment) {
          try {
            return new EventLog(log, __privateGet(this, _iface), fragment);
          } catch (error) {
            return new UndecodedEventLog(log, error);
          }
        }
        return log;
      });
    }
  }
  _iface = new WeakMap();
  class ContractTransactionResponse extends TransactionResponse {
    /**
     *  @_ignore:
     */
    constructor(iface, provider, tx) {
      super(tx, provider);
      __privateAdd(this, _iface2);
      __privateSet(this, _iface2, iface);
    }
    /**
     *  Resolves once this transaction has been mined and has
     *  %%confirms%% blocks including it (default: ``1``) with an
     *  optional %%timeout%%.
     *
     *  This can resolve to ``null`` only if %%confirms%% is ``0``
     *  and the transaction has not been mined, otherwise this will
     *  wait until enough confirmations have completed.
     */
    async wait(confirms, timeout) {
      const receipt = await super.wait(confirms, timeout);
      if (receipt == null) {
        return null;
      }
      return new ContractTransactionReceipt(__privateGet(this, _iface2), this.provider, receipt);
    }
  }
  _iface2 = new WeakMap();
  class ContractUnknownEventPayload extends EventPayload {
    /**
     *  @_event:
     */
    constructor(contract, listener, filter, log) {
      super(contract, listener, filter);
      /**
       *  The log with no matching events.
       */
      __publicField(this, "log");
      defineProperties(this, { log });
    }
    /**
     *  Resolves to the block the event occured in.
     */
    async getBlock() {
      return await this.log.getBlock();
    }
    /**
     *  Resolves to the transaction the event occured in.
     */
    async getTransaction() {
      return await this.log.getTransaction();
    }
    /**
     *  Resolves to the transaction receipt the event occured in.
     */
    async getTransactionReceipt() {
      return await this.log.getTransactionReceipt();
    }
  }
  class ContractEventPayload extends ContractUnknownEventPayload {
    /**
     *  @_ignore:
     */
    constructor(contract, listener, filter, fragment, _log) {
      super(contract, listener, filter, new EventLog(_log, contract.interface, fragment));
      const args = contract.interface.decodeEventLog(fragment, this.log.data, this.log.topics);
      defineProperties(this, { args, fragment });
    }
    /**
     *  The event name.
     */
    get eventName() {
      return this.fragment.name;
    }
    /**
     *  The event signature.
     */
    get eventSignature() {
      return this.fragment.format();
    }
  }
  const BN_0$1 = BigInt(0);
  function canCall(value) {
    return value && typeof value.call === "function";
  }
  function canEstimate(value) {
    return value && typeof value.estimateGas === "function";
  }
  function canResolve(value) {
    return value && typeof value.resolveName === "function";
  }
  function canSend(value) {
    return value && typeof value.sendTransaction === "function";
  }
  function getResolver(value) {
    if (value != null) {
      if (canResolve(value)) {
        return value;
      }
      if (value.provider) {
        return value.provider;
      }
    }
    return void 0;
  }
  class PreparedTopicFilter {
    constructor(contract, fragment, args) {
      __privateAdd(this, _filter);
      __publicField(this, "fragment");
      defineProperties(this, { fragment });
      if (fragment.inputs.length < args.length) {
        throw new Error("too many arguments");
      }
      const runner = getRunner(contract.runner, "resolveName");
      const resolver = canResolve(runner) ? runner : null;
      __privateSet(this, _filter, async function() {
        const resolvedArgs = await Promise.all(fragment.inputs.map((param, index) => {
          const arg = args[index];
          if (arg == null) {
            return null;
          }
          return param.walkAsync(args[index], (type, value) => {
            if (type === "address") {
              if (Array.isArray(value)) {
                return Promise.all(value.map((v) => resolveAddress(v, resolver)));
              }
              return resolveAddress(value, resolver);
            }
            return value;
          });
        }));
        return contract.interface.encodeFilterTopics(fragment, resolvedArgs);
      }());
    }
    getTopicFilter() {
      return __privateGet(this, _filter);
    }
  }
  _filter = new WeakMap();
  function getRunner(value, feature) {
    if (value == null) {
      return null;
    }
    if (typeof value[feature] === "function") {
      return value;
    }
    if (value.provider && typeof value.provider[feature] === "function") {
      return value.provider;
    }
    return null;
  }
  function getProvider(value) {
    if (value == null) {
      return null;
    }
    return value.provider || null;
  }
  async function copyOverrides(arg, allowed) {
    const _overrides = Typed.dereference(arg, "overrides");
    assertArgument(typeof _overrides === "object", "invalid overrides parameter", "overrides", arg);
    const overrides = copyRequest(_overrides);
    assertArgument(overrides.to == null || (allowed || []).indexOf("to") >= 0, "cannot override to", "overrides.to", overrides.to);
    assertArgument(overrides.data == null || (allowed || []).indexOf("data") >= 0, "cannot override data", "overrides.data", overrides.data);
    if (overrides.from) {
      overrides.from = overrides.from;
    }
    return overrides;
  }
  async function resolveArgs(_runner, inputs, args) {
    const runner = getRunner(_runner, "resolveName");
    const resolver = canResolve(runner) ? runner : null;
    return await Promise.all(inputs.map((param, index) => {
      return param.walkAsync(args[index], (type, value) => {
        value = Typed.dereference(value, type);
        if (type === "address") {
          return resolveAddress(value, resolver);
        }
        return value;
      });
    }));
  }
  function buildWrappedFallback(contract) {
    const populateTransaction = async function(overrides) {
      const tx = await copyOverrides(overrides, ["data"]);
      tx.to = await contract.getAddress();
      if (tx.from) {
        tx.from = await resolveAddress(tx.from, getResolver(contract.runner));
      }
      const iface = contract.interface;
      const noValue = getBigInt(tx.value || BN_0$1, "overrides.value") === BN_0$1;
      const noData = (tx.data || "0x") === "0x";
      if (iface.fallback && !iface.fallback.payable && iface.receive && !noData && !noValue) {
        assertArgument(false, "cannot send data to receive or send value to non-payable fallback", "overrides", overrides);
      }
      assertArgument(iface.fallback || noData, "cannot send data to receive-only contract", "overrides.data", tx.data);
      const payable = iface.receive || iface.fallback && iface.fallback.payable;
      assertArgument(payable || noValue, "cannot send value to non-payable fallback", "overrides.value", tx.value);
      assertArgument(iface.fallback || noData, "cannot send data to receive-only contract", "overrides.data", tx.data);
      return tx;
    };
    const staticCall = async function(overrides) {
      const runner = getRunner(contract.runner, "call");
      assert(canCall(runner), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
      const tx = await populateTransaction(overrides);
      try {
        return await runner.call(tx);
      } catch (error) {
        if (isCallException(error) && error.data) {
          throw contract.interface.makeError(error.data, tx);
        }
        throw error;
      }
    };
    const send = async function(overrides) {
      const runner = contract.runner;
      assert(canSend(runner), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
      const tx = await runner.sendTransaction(await populateTransaction(overrides));
      const provider = getProvider(contract.runner);
      return new ContractTransactionResponse(contract.interface, provider, tx);
    };
    const estimateGas = async function(overrides) {
      const runner = getRunner(contract.runner, "estimateGas");
      assert(canEstimate(runner), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" });
      return await runner.estimateGas(await populateTransaction(overrides));
    };
    const method = async (overrides) => {
      return await send(overrides);
    };
    defineProperties(method, {
      _contract: contract,
      estimateGas,
      populateTransaction,
      send,
      staticCall
    });
    return method;
  }
  function buildWrappedMethod(contract, key) {
    const getFragment = function(...args) {
      const fragment = contract.interface.getFunction(key, args);
      assert(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key, args }
      });
      return fragment;
    };
    const populateTransaction = async function(...args) {
      const fragment = getFragment(...args);
      let overrides = {};
      if (fragment.inputs.length + 1 === args.length) {
        overrides = await copyOverrides(args.pop());
        if (overrides.from) {
          overrides.from = await resolveAddress(overrides.from, getResolver(contract.runner));
        }
      }
      if (fragment.inputs.length !== args.length) {
        throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
      }
      const resolvedArgs = await resolveArgs(contract.runner, fragment.inputs, args);
      return Object.assign({}, overrides, await resolveProperties({
        to: contract.getAddress(),
        data: contract.interface.encodeFunctionData(fragment, resolvedArgs)
      }));
    };
    const staticCall = async function(...args) {
      const result = await staticCallResult(...args);
      if (result.length === 1) {
        return result[0];
      }
      return result;
    };
    const send = async function(...args) {
      const runner = contract.runner;
      assert(canSend(runner), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
      const tx = await runner.sendTransaction(await populateTransaction(...args));
      const provider = getProvider(contract.runner);
      return new ContractTransactionResponse(contract.interface, provider, tx);
    };
    const estimateGas = async function(...args) {
      const runner = getRunner(contract.runner, "estimateGas");
      assert(canEstimate(runner), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" });
      return await runner.estimateGas(await populateTransaction(...args));
    };
    const staticCallResult = async function(...args) {
      const runner = getRunner(contract.runner, "call");
      assert(canCall(runner), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
      const tx = await populateTransaction(...args);
      let result = "0x";
      try {
        result = await runner.call(tx);
      } catch (error) {
        if (isCallException(error) && error.data) {
          throw contract.interface.makeError(error.data, tx);
        }
        throw error;
      }
      const fragment = getFragment(...args);
      return contract.interface.decodeFunctionResult(fragment, result);
    };
    const method = async (...args) => {
      const fragment = getFragment(...args);
      if (fragment.constant) {
        return await staticCall(...args);
      }
      return await send(...args);
    };
    defineProperties(method, {
      name: contract.interface.getFunctionName(key),
      _contract: contract,
      _key: key,
      getFragment,
      estimateGas,
      populateTransaction,
      send,
      staticCall,
      staticCallResult
    });
    Object.defineProperty(method, "fragment", {
      configurable: false,
      enumerable: true,
      get: () => {
        const fragment = contract.interface.getFunction(key);
        assert(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
          operation: "fragment",
          info: { key }
        });
        return fragment;
      }
    });
    return method;
  }
  function buildWrappedEvent(contract, key) {
    const getFragment = function(...args) {
      const fragment = contract.interface.getEvent(key, args);
      assert(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key, args }
      });
      return fragment;
    };
    const method = function(...args) {
      return new PreparedTopicFilter(contract, getFragment(...args), args);
    };
    defineProperties(method, {
      name: contract.interface.getEventName(key),
      _contract: contract,
      _key: key,
      getFragment
    });
    Object.defineProperty(method, "fragment", {
      configurable: false,
      enumerable: true,
      get: () => {
        const fragment = contract.interface.getEvent(key);
        assert(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
          operation: "fragment",
          info: { key }
        });
        return fragment;
      }
    });
    return method;
  }
  const internal = Symbol.for("_ethersInternal_contract");
  const internalValues = /* @__PURE__ */ new WeakMap();
  function setInternal(contract, values) {
    internalValues.set(contract[internal], values);
  }
  function getInternal(contract) {
    return internalValues.get(contract[internal]);
  }
  function isDeferred(value) {
    return value && typeof value === "object" && "getTopicFilter" in value && typeof value.getTopicFilter === "function" && value.fragment;
  }
  async function getSubInfo(contract, event) {
    let topics;
    let fragment = null;
    if (Array.isArray(event)) {
      const topicHashify = function(name) {
        if (isHexString(name, 32)) {
          return name;
        }
        const fragment2 = contract.interface.getEvent(name);
        assertArgument(fragment2, "unknown fragment", "name", name);
        return fragment2.topicHash;
      };
      topics = event.map((e) => {
        if (e == null) {
          return null;
        }
        if (Array.isArray(e)) {
          return e.map(topicHashify);
        }
        return topicHashify(e);
      });
    } else if (event === "*") {
      topics = [null];
    } else if (typeof event === "string") {
      if (isHexString(event, 32)) {
        topics = [event];
      } else {
        fragment = contract.interface.getEvent(event);
        assertArgument(fragment, "unknown fragment", "event", event);
        topics = [fragment.topicHash];
      }
    } else if (isDeferred(event)) {
      topics = await event.getTopicFilter();
    } else if ("fragment" in event) {
      fragment = event.fragment;
      topics = [fragment.topicHash];
    } else {
      assertArgument(false, "unknown event name", "event", event);
    }
    topics = topics.map((t) => {
      if (t == null) {
        return null;
      }
      if (Array.isArray(t)) {
        const items = Array.from(new Set(t.map((t2) => t2.toLowerCase())).values());
        if (items.length === 1) {
          return items[0];
        }
        items.sort();
        return items;
      }
      return t.toLowerCase();
    });
    const tag = topics.map((t) => {
      if (t == null) {
        return "null";
      }
      if (Array.isArray(t)) {
        return t.join("|");
      }
      return t;
    }).join("&");
    return { fragment, tag, topics };
  }
  async function hasSub(contract, event) {
    const { subs } = getInternal(contract);
    return subs.get((await getSubInfo(contract, event)).tag) || null;
  }
  async function getSub(contract, operation, event) {
    const provider = getProvider(contract.runner);
    assert(provider, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", { operation });
    const { fragment, tag, topics } = await getSubInfo(contract, event);
    const { addr, subs } = getInternal(contract);
    let sub = subs.get(tag);
    if (!sub) {
      const address = addr ? addr : contract;
      const filter = { address, topics };
      const listener = (log) => {
        let foundFragment = fragment;
        if (foundFragment == null) {
          try {
            foundFragment = contract.interface.getEvent(log.topics[0]);
          } catch (error) {
          }
        }
        if (foundFragment) {
          const _foundFragment = foundFragment;
          const args = fragment ? contract.interface.decodeEventLog(fragment, log.data, log.topics) : [];
          emit(contract, event, args, (listener2) => {
            return new ContractEventPayload(contract, listener2, event, _foundFragment, log);
          });
        } else {
          emit(contract, event, [], (listener2) => {
            return new ContractUnknownEventPayload(contract, listener2, event, log);
          });
        }
      };
      let starting = [];
      const start = () => {
        if (starting.length) {
          return;
        }
        starting.push(provider.on(filter, listener));
      };
      const stop = async () => {
        if (starting.length == 0) {
          return;
        }
        let started = starting;
        starting = [];
        await Promise.all(started);
        provider.off(filter, listener);
      };
      sub = { tag, listeners: [], start, stop };
      subs.set(tag, sub);
    }
    return sub;
  }
  let lastEmit = Promise.resolve();
  async function _emit(contract, event, args, payloadFunc) {
    await lastEmit;
    const sub = await hasSub(contract, event);
    if (!sub) {
      return false;
    }
    const count = sub.listeners.length;
    sub.listeners = sub.listeners.filter(({ listener, once: once2 }) => {
      const passArgs = Array.from(args);
      if (payloadFunc) {
        passArgs.push(payloadFunc(once2 ? null : listener));
      }
      try {
        listener.call(contract, ...passArgs);
      } catch (error) {
      }
      return !once2;
    });
    if (sub.listeners.length === 0) {
      sub.stop();
      getInternal(contract).subs.delete(sub.tag);
    }
    return count > 0;
  }
  async function emit(contract, event, args, payloadFunc) {
    try {
      await lastEmit;
    } catch (error) {
    }
    const resultPromise = _emit(contract, event, args, payloadFunc);
    lastEmit = resultPromise;
    return await resultPromise;
  }
  const passProperties = ["then"];
  _a = internal;
  const _BaseContract = class _BaseContract {
    /**
     *  Creates a new contract connected to %%target%% with the %%abi%% and
     *  optionally connected to a %%runner%% to perform operations on behalf
     *  of.
     */
    constructor(target, abi, runner, _deployTx) {
      /**
       *  The target to connect to.
       *
       *  This can be an address, ENS name or any [[Addressable]], such as
       *  another contract. To get the resovled address, use the ``getAddress``
       *  method.
       */
      __publicField(this, "target");
      /**
       *  The contract Interface.
       */
      __publicField(this, "interface");
      /**
       *  The connected runner. This is generally a [[Provider]] or a
       *  [[Signer]], which dictates what operations are supported.
       *
       *  For example, a **Contract** connected to a [[Provider]] may
       *  only execute read-only operations.
       */
      __publicField(this, "runner");
      /**
       *  All the Events available on this contract.
       */
      __publicField(this, "filters");
      /**
       *  @_ignore:
       */
      __publicField(this, _a);
      /**
       *  The fallback or receive function if any.
       */
      __publicField(this, "fallback");
      assertArgument(typeof target === "string" || isAddressable(target), "invalid value for Contract target", "target", target);
      if (runner == null) {
        runner = null;
      }
      const iface = Interface.from(abi);
      defineProperties(this, { target, runner, interface: iface });
      Object.defineProperty(this, internal, { value: {} });
      let addrPromise;
      let addr = null;
      let deployTx = null;
      if (_deployTx) {
        const provider = getProvider(runner);
        deployTx = new ContractTransactionResponse(this.interface, provider, _deployTx);
      }
      let subs = /* @__PURE__ */ new Map();
      if (typeof target === "string") {
        if (isHexString(target)) {
          addr = target;
          addrPromise = Promise.resolve(target);
        } else {
          const resolver = getRunner(runner, "resolveName");
          if (!canResolve(resolver)) {
            throw makeError("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
              operation: "resolveName"
            });
          }
          addrPromise = resolver.resolveName(target).then((addr2) => {
            if (addr2 == null) {
              throw makeError("an ENS name used for a contract target must be correctly configured", "UNCONFIGURED_NAME", {
                value: target
              });
            }
            getInternal(this).addr = addr2;
            return addr2;
          });
        }
      } else {
        addrPromise = target.getAddress().then((addr2) => {
          if (addr2 == null) {
            throw new Error("TODO");
          }
          getInternal(this).addr = addr2;
          return addr2;
        });
      }
      setInternal(this, { addrPromise, addr, deployTx, subs });
      const filters = new Proxy({}, {
        get: (target2, prop, receiver) => {
          if (typeof prop === "symbol" || passProperties.indexOf(prop) >= 0) {
            return Reflect.get(target2, prop, receiver);
          }
          try {
            return this.getEvent(prop);
          } catch (error) {
            if (!isError(error, "INVALID_ARGUMENT") || error.argument !== "key") {
              throw error;
            }
          }
          return void 0;
        },
        has: (target2, prop) => {
          if (passProperties.indexOf(prop) >= 0) {
            return Reflect.has(target2, prop);
          }
          return Reflect.has(target2, prop) || this.interface.hasEvent(String(prop));
        }
      });
      defineProperties(this, { filters });
      defineProperties(this, {
        fallback: iface.receive || iface.fallback ? buildWrappedFallback(this) : null
      });
      return new Proxy(this, {
        get: (target2, prop, receiver) => {
          if (typeof prop === "symbol" || prop in target2 || passProperties.indexOf(prop) >= 0) {
            return Reflect.get(target2, prop, receiver);
          }
          try {
            return target2.getFunction(prop);
          } catch (error) {
            if (!isError(error, "INVALID_ARGUMENT") || error.argument !== "key") {
              throw error;
            }
          }
          return void 0;
        },
        has: (target2, prop) => {
          if (typeof prop === "symbol" || prop in target2 || passProperties.indexOf(prop) >= 0) {
            return Reflect.has(target2, prop);
          }
          return target2.interface.hasFunction(prop);
        }
      });
    }
    /**
     *  Return a new Contract instance with the same target and ABI, but
     *  a different %%runner%%.
     */
    connect(runner) {
      return new _BaseContract(this.target, this.interface, runner);
    }
    /**
     *  Return a new Contract instance with the same ABI and runner, but
     *  a different %%target%%.
     */
    attach(target) {
      return new _BaseContract(target, this.interface, this.runner);
    }
    /**
     *  Return the resolved address of this Contract.
     */
    async getAddress() {
      return await getInternal(this).addrPromise;
    }
    /**
     *  Return the deployed bytecode or null if no bytecode is found.
     */
    async getDeployedCode() {
      const provider = getProvider(this.runner);
      assert(provider, "runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "getDeployedCode" });
      const code = await provider.getCode(await this.getAddress());
      if (code === "0x") {
        return null;
      }
      return code;
    }
    /**
     *  Resolve to this Contract once the bytecode has been deployed, or
     *  resolve immediately if already deployed.
     */
    async waitForDeployment() {
      const deployTx = this.deploymentTransaction();
      if (deployTx) {
        await deployTx.wait();
        return this;
      }
      const code = await this.getDeployedCode();
      if (code != null) {
        return this;
      }
      const provider = getProvider(this.runner);
      assert(provider != null, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "waitForDeployment" });
      return new Promise((resolve, reject) => {
        const checkCode = async () => {
          try {
            const code2 = await this.getDeployedCode();
            if (code2 != null) {
              return resolve(this);
            }
            provider.once("block", checkCode);
          } catch (error) {
            reject(error);
          }
        };
        checkCode();
      });
    }
    /**
     *  Return the transaction used to deploy this contract.
     *
     *  This is only available if this instance was returned from a
     *  [[ContractFactory]].
     */
    deploymentTransaction() {
      return getInternal(this).deployTx;
    }
    /**
     *  Return the function for a given name. This is useful when a contract
     *  method name conflicts with a JavaScript name such as ``prototype`` or
     *  when using a Contract programatically.
     */
    getFunction(key) {
      if (typeof key !== "string") {
        key = key.format();
      }
      const func = buildWrappedMethod(this, key);
      return func;
    }
    /**
     *  Return the event for a given name. This is useful when a contract
     *  event name conflicts with a JavaScript name such as ``prototype`` or
     *  when using a Contract programatically.
     */
    getEvent(key) {
      if (typeof key !== "string") {
        key = key.format();
      }
      return buildWrappedEvent(this, key);
    }
    /**
     *  @_ignore:
     */
    async queryTransaction(hash2) {
      throw new Error("@TODO");
    }
    /*
          // @TODO: this is a non-backwards compatible change, but will be added
          //        in v7 and in a potential SmartContract class in an upcoming
          //        v6 release
          async getTransactionReceipt(hash: string): Promise<null | ContractTransactionReceipt> {
              const provider = getProvider(this.runner);
              assert(provider, "contract runner does not have a provider",
                  "UNSUPPORTED_OPERATION", { operation: "queryTransaction" });
    
              const receipt = await provider.getTransactionReceipt(hash);
              if (receipt == null) { return null; }
    
              return new ContractTransactionReceipt(this.interface, provider, receipt);
          }
          */
    /**
     *  Provide historic access to event data for %%event%% in the range
     *  %%fromBlock%% (default: ``0``) to %%toBlock%% (default: ``"latest"``)
     *  inclusive.
     */
    async queryFilter(event, fromBlock, toBlock) {
      if (fromBlock == null) {
        fromBlock = 0;
      }
      if (toBlock == null) {
        toBlock = "latest";
      }
      const { addr, addrPromise } = getInternal(this);
      const address = addr ? addr : await addrPromise;
      const { fragment, topics } = await getSubInfo(this, event);
      const filter = { address, topics, fromBlock, toBlock };
      const provider = getProvider(this.runner);
      assert(provider, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", { operation: "queryFilter" });
      return (await provider.getLogs(filter)).map((log) => {
        let foundFragment = fragment;
        if (foundFragment == null) {
          try {
            foundFragment = this.interface.getEvent(log.topics[0]);
          } catch (error) {
          }
        }
        if (foundFragment) {
          try {
            return new EventLog(log, this.interface, foundFragment);
          } catch (error) {
            return new UndecodedEventLog(log, error);
          }
        }
        return new Log(log, provider);
      });
    }
    /**
     *  Add an event %%listener%% for the %%event%%.
     */
    async on(event, listener) {
      const sub = await getSub(this, "on", event);
      sub.listeners.push({ listener, once: false });
      sub.start();
      return this;
    }
    /**
     *  Add an event %%listener%% for the %%event%%, but remove the listener
     *  after it is fired once.
     */
    async once(event, listener) {
      const sub = await getSub(this, "once", event);
      sub.listeners.push({ listener, once: true });
      sub.start();
      return this;
    }
    /**
     *  Emit an %%event%% calling all listeners with %%args%%.
     *
     *  Resolves to ``true`` if any listeners were called.
     */
    async emit(event, ...args) {
      return await emit(this, event, args, null);
    }
    /**
     *  Resolves to the number of listeners of %%event%% or the total number
     *  of listeners if unspecified.
     */
    async listenerCount(event) {
      if (event) {
        const sub = await hasSub(this, event);
        if (!sub) {
          return 0;
        }
        return sub.listeners.length;
      }
      const { subs } = getInternal(this);
      let total = 0;
      for (const { listeners } of subs.values()) {
        total += listeners.length;
      }
      return total;
    }
    /**
     *  Resolves to the listeners subscribed to %%event%% or all listeners
     *  if unspecified.
     */
    async listeners(event) {
      if (event) {
        const sub = await hasSub(this, event);
        if (!sub) {
          return [];
        }
        return sub.listeners.map(({ listener }) => listener);
      }
      const { subs } = getInternal(this);
      let result = [];
      for (const { listeners } of subs.values()) {
        result = result.concat(listeners.map(({ listener }) => listener));
      }
      return result;
    }
    /**
     *  Remove the %%listener%% from the listeners for %%event%% or remove
     *  all listeners if unspecified.
     */
    async off(event, listener) {
      const sub = await hasSub(this, event);
      if (!sub) {
        return this;
      }
      if (listener) {
        const index = sub.listeners.map(({ listener: listener2 }) => listener2).indexOf(listener);
        if (index >= 0) {
          sub.listeners.splice(index, 1);
        }
      }
      if (listener == null || sub.listeners.length === 0) {
        sub.stop();
        getInternal(this).subs.delete(sub.tag);
      }
      return this;
    }
    /**
     *  Remove all the listeners for %%event%% or remove all listeners if
     *  unspecified.
     */
    async removeAllListeners(event) {
      if (event) {
        const sub = await hasSub(this, event);
        if (!sub) {
          return this;
        }
        sub.stop();
        getInternal(this).subs.delete(sub.tag);
      } else {
        const { subs } = getInternal(this);
        for (const { tag, stop } of subs.values()) {
          stop();
          subs.delete(tag);
        }
      }
      return this;
    }
    /**
     *  Alias for [on].
     */
    async addListener(event, listener) {
      return await this.on(event, listener);
    }
    /**
     *  Alias for [off].
     */
    async removeListener(event, listener) {
      return await this.off(event, listener);
    }
    /**
     *  Create a new Class for the %%abi%%.
     */
    static buildClass(abi) {
      class CustomContract extends _BaseContract {
        constructor(address, runner = null) {
          super(address, abi, runner);
        }
      }
      return CustomContract;
    }
    /**
     *  Create a new BaseContract with a specified Interface.
     */
    static from(target, abi, runner) {
      if (runner == null) {
        runner = null;
      }
      const contract = new this(target, abi, runner);
      return contract;
    }
  };
  let BaseContract = _BaseContract;
  function _ContractBase() {
    return BaseContract;
  }
  class Contract extends _ContractBase() {
  }
  function getIpfsLink(link) {
    if (link.match(/^ipfs:\/\/ipfs\//i)) {
      link = link.substring(12);
    } else if (link.match(/^ipfs:\/\//i)) {
      link = link.substring(7);
    } else {
      assertArgument(false, "unsupported IPFS format", "link", link);
    }
    return `https://gateway.ipfs.io/ipfs/${link}`;
  }
  class MulticoinProviderPlugin {
    /**
     *  Creates a new **MulticoinProviderPluing** for %%name%%.
     */
    constructor(name) {
      /**
       *  The name.
       */
      __publicField(this, "name");
      defineProperties(this, { name });
    }
    connect(proivder) {
      return this;
    }
    /**
     *  Returns ``true`` if %%coinType%% is supported by this plugin.
     */
    supportsCoinType(coinType) {
      return false;
    }
    /**
     *  Resolves to the encoded %%address%% for %%coinType%%.
     */
    async encodeAddress(coinType, address) {
      throw new Error("unsupported coin");
    }
    /**
     *  Resolves to the decoded %%data%% for %%coinType%%.
     */
    async decodeAddress(coinType, data) {
      throw new Error("unsupported coin");
    }
  }
  const matcherIpfs = new RegExp("^(ipfs)://(.*)$", "i");
  const matchers = [
    new RegExp("^(https)://(.*)$", "i"),
    new RegExp("^(data):(.*)$", "i"),
    matcherIpfs,
    new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")
  ];
  const _EnsResolver = class _EnsResolver {
    constructor(provider, address, name) {
      __privateAdd(this, _EnsResolver_instances);
      /**
       *  The connected provider.
       */
      __publicField(this, "provider");
      /**
       *  The address of the resolver.
       */
      __publicField(this, "address");
      /**
       *  The name this resolver was resolved against.
       */
      __publicField(this, "name");
      // For EIP-2544 names, the ancestor that provided the resolver
      __privateAdd(this, _supports2544);
      __privateAdd(this, _resolver);
      defineProperties(this, { provider, address, name });
      __privateSet(this, _supports2544, null);
      __privateSet(this, _resolver, new Contract(address, [
        "function supportsInterface(bytes4) view returns (bool)",
        "function resolve(bytes, bytes) view returns (bytes)",
        "function addr(bytes32) view returns (address)",
        "function addr(bytes32, uint) view returns (bytes)",
        "function text(bytes32, string) view returns (string)",
        "function contenthash(bytes32) view returns (bytes)"
      ], provider));
    }
    /**
     *  Resolves to true if the resolver supports wildcard resolution.
     */
    async supportsWildcard() {
      if (__privateGet(this, _supports2544) == null) {
        __privateSet(this, _supports2544, (async () => {
          try {
            return await __privateGet(this, _resolver).supportsInterface("0x9061b923");
          } catch (error) {
            if (isError(error, "CALL_EXCEPTION")) {
              return false;
            }
            __privateSet(this, _supports2544, null);
            throw error;
          }
        })());
      }
      return await __privateGet(this, _supports2544);
    }
    /**
     *  Resolves to the address for %%coinType%% or null if the
     *  provided %%coinType%% has not been configured.
     */
    async getAddress(coinType) {
      if (coinType == null) {
        coinType = 60;
      }
      if (coinType === 60) {
        try {
          const result = await __privateMethod(this, _EnsResolver_instances, fetch_fn).call(this, "addr(bytes32)");
          if (result == null || result === ZeroAddress) {
            return null;
          }
          return result;
        } catch (error) {
          if (isError(error, "CALL_EXCEPTION")) {
            return null;
          }
          throw error;
        }
      }
      if (coinType >= 0 && coinType < 2147483648) {
        let ethCoinType = coinType + 2147483648;
        const data2 = await __privateMethod(this, _EnsResolver_instances, fetch_fn).call(this, "addr(bytes32,uint)", [ethCoinType]);
        if (isHexString(data2, 20)) {
          return getAddress(data2);
        }
      }
      let coinPlugin = null;
      for (const plugin of this.provider.plugins) {
        if (!(plugin instanceof MulticoinProviderPlugin)) {
          continue;
        }
        if (plugin.supportsCoinType(coinType)) {
          coinPlugin = plugin;
          break;
        }
      }
      if (coinPlugin == null) {
        return null;
      }
      const data = await __privateMethod(this, _EnsResolver_instances, fetch_fn).call(this, "addr(bytes32,uint)", [coinType]);
      if (data == null || data === "0x") {
        return null;
      }
      const address = await coinPlugin.decodeAddress(coinType, data);
      if (address != null) {
        return address;
      }
      assert(false, `invalid coin data`, "UNSUPPORTED_OPERATION", {
        operation: `getAddress(${coinType})`,
        info: { coinType, data }
      });
    }
    /**
     *  Resolves to the EIP-634 text record for %%key%%, or ``null``
     *  if unconfigured.
     */
    async getText(key) {
      const data = await __privateMethod(this, _EnsResolver_instances, fetch_fn).call(this, "text(bytes32,string)", [key]);
      if (data == null || data === "0x") {
        return null;
      }
      return data;
    }
    /**
     *  Rsolves to the content-hash or ``null`` if unconfigured.
     */
    async getContentHash() {
      const data = await __privateMethod(this, _EnsResolver_instances, fetch_fn).call(this, "contenthash(bytes32)");
      if (data == null || data === "0x") {
        return null;
      }
      const ipfs = data.match(/^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
      if (ipfs) {
        const scheme = ipfs[1] === "e3010170" ? "ipfs" : "ipns";
        const length = parseInt(ipfs[4], 16);
        if (ipfs[5].length === length * 2) {
          return `${scheme}://${encodeBase58("0x" + ipfs[2])}`;
        }
      }
      const swarm = data.match(/^0xe40101fa011b20([0-9a-f]*)$/);
      if (swarm && swarm[1].length === 64) {
        return `bzz://${swarm[1]}`;
      }
      assert(false, `invalid or unsupported content hash data`, "UNSUPPORTED_OPERATION", {
        operation: "getContentHash()",
        info: { data }
      });
    }
    /**
     *  Resolves to the avatar url or ``null`` if the avatar is either
     *  unconfigured or incorrectly configured (e.g. references an NFT
     *  not owned by the address).
     *
     *  If diagnosing issues with configurations, the [[_getAvatar]]
     *  method may be useful.
     */
    async getAvatar() {
      const avatar = await this._getAvatar();
      return avatar.url;
    }
    /**
     *  When resolving an avatar, there are many steps involved, such
     *  fetching metadata and possibly validating ownership of an
     *  NFT.
     *
     *  This method can be used to examine each step and the value it
     *  was working from.
     */
    async _getAvatar() {
      const linkage = [{ type: "name", value: this.name }];
      try {
        const avatar = await this.getText("avatar");
        if (avatar == null) {
          linkage.push({ type: "!avatar", value: "" });
          return { url: null, linkage };
        }
        linkage.push({ type: "avatar", value: avatar });
        for (let i = 0; i < matchers.length; i++) {
          const match = avatar.match(matchers[i]);
          if (match == null) {
            continue;
          }
          const scheme = match[1].toLowerCase();
          switch (scheme) {
            case "https":
            case "data":
              linkage.push({ type: "url", value: avatar });
              return { linkage, url: avatar };
            case "ipfs": {
              const url = getIpfsLink(avatar);
              linkage.push({ type: "ipfs", value: avatar });
              linkage.push({ type: "url", value: url });
              return { linkage, url };
            }
            case "erc721":
            case "erc1155": {
              const selector = scheme === "erc721" ? "tokenURI(uint256)" : "uri(uint256)";
              linkage.push({ type: scheme, value: avatar });
              const owner = await this.getAddress();
              if (owner == null) {
                linkage.push({ type: "!owner", value: "" });
                return { url: null, linkage };
              }
              const comps = (match[2] || "").split("/");
              if (comps.length !== 2) {
                linkage.push({ type: `!${scheme}caip`, value: match[2] || "" });
                return { url: null, linkage };
              }
              const tokenId = comps[1];
              const contract = new Contract(comps[0], [
                // ERC-721
                "function tokenURI(uint) view returns (string)",
                "function ownerOf(uint) view returns (address)",
                // ERC-1155
                "function uri(uint) view returns (string)",
                "function balanceOf(address, uint256) view returns (uint)"
              ], this.provider);
              if (scheme === "erc721") {
                const tokenOwner = await contract.ownerOf(tokenId);
                if (owner !== tokenOwner) {
                  linkage.push({ type: "!owner", value: tokenOwner });
                  return { url: null, linkage };
                }
                linkage.push({ type: "owner", value: tokenOwner });
              } else if (scheme === "erc1155") {
                const balance = await contract.balanceOf(owner, tokenId);
                if (!balance) {
                  linkage.push({ type: "!balance", value: "0" });
                  return { url: null, linkage };
                }
                linkage.push({ type: "balance", value: balance.toString() });
              }
              let metadataUrl = await contract[selector](tokenId);
              if (metadataUrl == null || metadataUrl === "0x") {
                linkage.push({ type: "!metadata-url", value: "" });
                return { url: null, linkage };
              }
              linkage.push({ type: "metadata-url-base", value: metadataUrl });
              if (scheme === "erc1155") {
                metadataUrl = metadataUrl.replace("{id}", toBeHex(tokenId, 32).substring(2));
                linkage.push({ type: "metadata-url-expanded", value: metadataUrl });
              }
              if (metadataUrl.match(/^ipfs:/i)) {
                metadataUrl = getIpfsLink(metadataUrl);
              }
              linkage.push({ type: "metadata-url", value: metadataUrl });
              let metadata = {};
              const response = await new FetchRequest(metadataUrl).send();
              response.assertOk();
              try {
                metadata = response.bodyJson;
              } catch (error) {
                try {
                  linkage.push({ type: "!metadata", value: response.bodyText });
                } catch (error2) {
                  const bytes2 = response.body;
                  if (bytes2) {
                    linkage.push({ type: "!metadata", value: hexlify(bytes2) });
                  }
                  return { url: null, linkage };
                }
                return { url: null, linkage };
              }
              if (!metadata) {
                linkage.push({ type: "!metadata", value: "" });
                return { url: null, linkage };
              }
              linkage.push({ type: "metadata", value: JSON.stringify(metadata) });
              let imageUrl = metadata.image;
              if (typeof imageUrl !== "string") {
                linkage.push({ type: "!imageUrl", value: "" });
                return { url: null, linkage };
              }
              if (imageUrl.match(/^(https:\/\/|data:)/i)) {
              } else {
                const ipfs = imageUrl.match(matcherIpfs);
                if (ipfs == null) {
                  linkage.push({ type: "!imageUrl-ipfs", value: imageUrl });
                  return { url: null, linkage };
                }
                linkage.push({ type: "imageUrl-ipfs", value: imageUrl });
                imageUrl = getIpfsLink(imageUrl);
              }
              linkage.push({ type: "url", value: imageUrl });
              return { linkage, url: imageUrl };
            }
          }
        }
      } catch (error) {
      }
      return { linkage, url: null };
    }
    static async getEnsAddress(provider) {
      const network = await provider.getNetwork();
      const ensPlugin = network.getPlugin("org.ethers.plugins.network.Ens");
      assert(ensPlugin, "network does not support ENS", "UNSUPPORTED_OPERATION", {
        operation: "getEnsAddress",
        info: { network }
      });
      return ensPlugin.address;
    }
    /**
     *  Resolve to the ENS resolver for %%name%% using %%provider%% or
     *  ``null`` if unconfigured.
     */
    static async fromName(provider, name) {
      var _a2;
      let currentName = name;
      while (true) {
        if (currentName === "" || currentName === ".") {
          return null;
        }
        if (name !== "eth" && currentName === "eth") {
          return null;
        }
        const addr = await __privateMethod(_a2 = _EnsResolver, _EnsResolver_static, getResolver_fn).call(_a2, provider, currentName);
        if (addr != null) {
          const resolver = new _EnsResolver(provider, addr, name);
          if (currentName !== name && !await resolver.supportsWildcard()) {
            return null;
          }
          return resolver;
        }
        currentName = currentName.split(".").slice(1).join(".");
      }
    }
  };
  _supports2544 = new WeakMap();
  _resolver = new WeakMap();
  _EnsResolver_instances = new WeakSet();
  fetch_fn = async function(funcName, params) {
    params = (params || []).slice();
    const iface = __privateGet(this, _resolver).interface;
    params.unshift(namehash(this.name));
    let fragment = null;
    if (await this.supportsWildcard()) {
      fragment = iface.getFunction(funcName);
      assert(fragment, "missing fragment", "UNKNOWN_ERROR", {
        info: { funcName }
      });
      params = [
        dnsEncode(this.name, 255),
        iface.encodeFunctionData(fragment, params)
      ];
      funcName = "resolve(bytes,bytes)";
    }
    params.push({
      enableCcipRead: true
    });
    try {
      const result = await __privateGet(this, _resolver)[funcName](...params);
      if (fragment) {
        return iface.decodeFunctionResult(fragment, result)[0];
      }
      return result;
    } catch (error) {
      if (!isError(error, "CALL_EXCEPTION")) {
        throw error;
      }
    }
    return null;
  };
  _EnsResolver_static = new WeakSet();
  getResolver_fn = async function(provider, name) {
    const ensAddr = await _EnsResolver.getEnsAddress(provider);
    try {
      const contract = new Contract(ensAddr, [
        "function resolver(bytes32) view returns (address)"
      ], provider);
      const addr = await contract.resolver(namehash(name), {
        enableCcipRead: true
      });
      if (addr === ZeroAddress) {
        return null;
      }
      return addr;
    } catch (error) {
      throw error;
    }
    return null;
  };
  __privateAdd(_EnsResolver, _EnsResolver_static);
  let EnsResolver = _EnsResolver;
  const BN_0 = BigInt(0);
  function allowNull(format, nullValue) {
    return function(value) {
      if (value == null) {
        return nullValue;
      }
      return format(value);
    };
  }
  function arrayOf(format, allowNull2) {
    return (array) => {
      if (allowNull2 && array == null) {
        return null;
      }
      if (!Array.isArray(array)) {
        throw new Error("not an array");
      }
      return array.map((i) => format(i));
    };
  }
  function object(format, altNames) {
    return (value) => {
      const result = {};
      for (const key in format) {
        let srcKey = key;
        if (altNames && key in altNames && !(srcKey in value)) {
          for (const altKey of altNames[key]) {
            if (altKey in value) {
              srcKey = altKey;
              break;
            }
          }
        }
        try {
          const nv = format[key](value[srcKey]);
          if (nv !== void 0) {
            result[key] = nv;
          }
        } catch (error) {
          const message = error instanceof Error ? error.message : "not-an-error";
          assert(false, `invalid value for value.${key} (${message})`, "BAD_DATA", { value });
        }
      }
      return result;
    };
  }
  function formatBoolean(value) {
    switch (value) {
      case true:
      case "true":
        return true;
      case false:
      case "false":
        return false;
    }
    assertArgument(false, `invalid boolean; ${JSON.stringify(value)}`, "value", value);
  }
  function formatData(value) {
    assertArgument(isHexString(value, true), "invalid data", "value", value);
    return value;
  }
  function formatHash(value) {
    assertArgument(isHexString(value, 32), "invalid hash", "value", value);
    return value;
  }
  const _formatLog = object({
    address: getAddress,
    blockHash: formatHash,
    blockNumber: getNumber,
    data: formatData,
    index: getNumber,
    removed: allowNull(formatBoolean, false),
    topics: arrayOf(formatHash),
    transactionHash: formatHash,
    transactionIndex: getNumber
  }, {
    index: ["logIndex"]
  });
  function formatLog(value) {
    return _formatLog(value);
  }
  const _formatBlock = object({
    hash: allowNull(formatHash),
    parentHash: formatHash,
    parentBeaconBlockRoot: allowNull(formatHash, null),
    number: getNumber,
    timestamp: getNumber,
    nonce: allowNull(formatData),
    difficulty: getBigInt,
    gasLimit: getBigInt,
    gasUsed: getBigInt,
    stateRoot: allowNull(formatHash, null),
    receiptsRoot: allowNull(formatHash, null),
    blobGasUsed: allowNull(getBigInt, null),
    excessBlobGas: allowNull(getBigInt, null),
    miner: allowNull(getAddress),
    prevRandao: allowNull(formatHash, null),
    extraData: formatData,
    baseFeePerGas: allowNull(getBigInt)
  }, {
    prevRandao: ["mixHash"]
  });
  function formatBlock(value) {
    const result = _formatBlock(value);
    result.transactions = value.transactions.map((tx) => {
      if (typeof tx === "string") {
        return tx;
      }
      return formatTransactionResponse(tx);
    });
    return result;
  }
  const _formatReceiptLog = object({
    transactionIndex: getNumber,
    blockNumber: getNumber,
    transactionHash: formatHash,
    address: getAddress,
    topics: arrayOf(formatHash),
    data: formatData,
    index: getNumber,
    blockHash: formatHash
  }, {
    index: ["logIndex"]
  });
  function formatReceiptLog(value) {
    return _formatReceiptLog(value);
  }
  const _formatTransactionReceipt = object({
    to: allowNull(getAddress, null),
    from: allowNull(getAddress, null),
    contractAddress: allowNull(getAddress, null),
    // should be allowNull(hash), but broken-EIP-658 support is handled in receipt
    index: getNumber,
    root: allowNull(hexlify),
    gasUsed: getBigInt,
    blobGasUsed: allowNull(getBigInt, null),
    logsBloom: allowNull(formatData),
    blockHash: formatHash,
    hash: formatHash,
    logs: arrayOf(formatReceiptLog),
    blockNumber: getNumber,
    //confirmations: allowNull(getNumber, null),
    cumulativeGasUsed: getBigInt,
    effectiveGasPrice: allowNull(getBigInt),
    blobGasPrice: allowNull(getBigInt, null),
    status: allowNull(getNumber),
    type: allowNull(getNumber, 0)
  }, {
    effectiveGasPrice: ["gasPrice"],
    hash: ["transactionHash"],
    index: ["transactionIndex"]
  });
  function formatTransactionReceipt(value) {
    return _formatTransactionReceipt(value);
  }
  function formatTransactionResponse(value) {
    if (value.to && getBigInt(value.to) === BN_0) {
      value.to = "0x0000000000000000000000000000000000000000";
    }
    const result = object({
      hash: formatHash,
      // Some nodes do not return this, usually test nodes (like Ganache)
      index: allowNull(getNumber, void 0),
      type: (value2) => {
        if (value2 === "0x" || value2 == null) {
          return 0;
        }
        return getNumber(value2);
      },
      accessList: allowNull(accessListify, null),
      blobVersionedHashes: allowNull(arrayOf(formatHash, true), null),
      blockHash: allowNull(formatHash, null),
      blockNumber: allowNull(getNumber, null),
      transactionIndex: allowNull(getNumber, null),
      from: getAddress,
      // either (gasPrice) or (maxPriorityFeePerGas + maxFeePerGas) must be set
      gasPrice: allowNull(getBigInt),
      maxPriorityFeePerGas: allowNull(getBigInt),
      maxFeePerGas: allowNull(getBigInt),
      maxFeePerBlobGas: allowNull(getBigInt, null),
      gasLimit: getBigInt,
      to: allowNull(getAddress, null),
      value: getBigInt,
      nonce: getNumber,
      data: formatData,
      creates: allowNull(getAddress, null),
      chainId: allowNull(getBigInt, null)
    }, {
      data: ["input"],
      gasLimit: ["gas"],
      index: ["transactionIndex"]
    })(value);
    if (result.to == null && result.creates == null) {
      result.creates = getCreateAddress(result);
    }
    if ((value.type === 1 || value.type === 2) && value.accessList == null) {
      result.accessList = [];
    }
    if (value.signature) {
      result.signature = Signature.from(value.signature);
    } else {
      result.signature = Signature.from(value);
    }
    if (result.chainId == null) {
      const chainId = result.signature.legacyChainId;
      if (chainId != null) {
        result.chainId = chainId;
      }
    }
    if (result.blockHash && getBigInt(result.blockHash) === BN_0) {
      result.blockHash = null;
    }
    return result;
  }
  const EnsAddress = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
  class NetworkPlugin {
    /**
     *  Creates a new **NetworkPlugin**.
     */
    constructor(name) {
      /**
       *  The name of the plugin.
       *
       *  It is recommended to use reverse-domain-notation, which permits
       *  unique names with a known authority as well as hierarchal entries.
       */
      __publicField(this, "name");
      defineProperties(this, { name });
    }
    /**
     *  Creates a copy of this plugin.
     */
    clone() {
      return new NetworkPlugin(this.name);
    }
  }
  class GasCostPlugin extends NetworkPlugin {
    /**
     *  Creates a new GasCostPlugin from %%effectiveBlock%% until the
     *  latest block or another GasCostPlugin supercedes that block number,
     *  with the associated %%costs%%.
     */
    constructor(effectiveBlock, costs) {
      if (effectiveBlock == null) {
        effectiveBlock = 0;
      }
      super(`org.ethers.network.plugins.GasCost#${effectiveBlock || 0}`);
      /**
       *  The block number to treat these values as valid from.
       *
       *  This allows a hardfork to have updated values included as well as
       *  mulutiple hardforks to be supported.
       */
      __publicField(this, "effectiveBlock");
      /**
       *  The transactions base fee.
       */
      __publicField(this, "txBase");
      /**
       *  The fee for creating a new account.
       */
      __publicField(this, "txCreate");
      /**
       *  The fee per zero-byte in the data.
       */
      __publicField(this, "txDataZero");
      /**
       *  The fee per non-zero-byte in the data.
       */
      __publicField(this, "txDataNonzero");
      /**
       *  The fee per storage key in the [[link-eip-2930]] access list.
       */
      __publicField(this, "txAccessListStorageKey");
      /**
       *  The fee per address in the [[link-eip-2930]] access list.
       */
      __publicField(this, "txAccessListAddress");
      const props = { effectiveBlock };
      function set2(name, nullish) {
        let value = (costs || {})[name];
        if (value == null) {
          value = nullish;
        }
        assertArgument(typeof value === "number", `invalud value for ${name}`, "costs", costs);
        props[name] = value;
      }
      set2("txBase", 21e3);
      set2("txCreate", 32e3);
      set2("txDataZero", 4);
      set2("txDataNonzero", 16);
      set2("txAccessListStorageKey", 1900);
      set2("txAccessListAddress", 2400);
      defineProperties(this, props);
    }
    clone() {
      return new GasCostPlugin(this.effectiveBlock, this);
    }
  }
  class EnsPlugin extends NetworkPlugin {
    /**
     *  Creates a new **EnsPlugin** connected to %%address%% on the
     *  %%targetNetwork%%. The default ENS address and mainnet is used
     *  if unspecified.
     */
    constructor(address, targetNetwork) {
      super("org.ethers.plugins.network.Ens");
      /**
       *  The ENS Registrty Contract address.
       */
      __publicField(this, "address");
      /**
       *  The chain ID that the ENS contract lives on.
       */
      __publicField(this, "targetNetwork");
      defineProperties(this, {
        address: address || EnsAddress,
        targetNetwork: targetNetwork == null ? 1 : targetNetwork
      });
    }
    clone() {
      return new EnsPlugin(this.address, this.targetNetwork);
    }
  }
  class FetchUrlFeeDataNetworkPlugin extends NetworkPlugin {
    /**
     *  Creates a new **FetchUrlFeeDataNetworkPlugin** which will
     *  be used when computing the fee data for the network.
     */
    constructor(url, processFunc) {
      super("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
      __privateAdd(this, _url2);
      __privateAdd(this, _processFunc);
      __privateSet(this, _url2, url);
      __privateSet(this, _processFunc, processFunc);
    }
    /**
     *  The URL to initialize the FetchRequest with in %%processFunc%%.
     */
    get url() {
      return __privateGet(this, _url2);
    }
    /**
     *  The callback to use when computing the FeeData.
     */
    get processFunc() {
      return __privateGet(this, _processFunc);
    }
    // We are immutable, so we can serve as our own clone
    clone() {
      return this;
    }
  }
  _url2 = new WeakMap();
  _processFunc = new WeakMap();
  const Networks = /* @__PURE__ */ new Map();
  const _Network = class _Network {
    /**
     *  Creates a new **Network** for %%name%% and %%chainId%%.
     */
    constructor(name, chainId) {
      __privateAdd(this, _name);
      __privateAdd(this, _chainId2);
      __privateAdd(this, _plugins);
      __privateSet(this, _name, name);
      __privateSet(this, _chainId2, getBigInt(chainId));
      __privateSet(this, _plugins, /* @__PURE__ */ new Map());
    }
    /**
     *  Returns a JSON-compatible representation of a Network.
     */
    toJSON() {
      return { name: this.name, chainId: String(this.chainId) };
    }
    /**
     *  The network common name.
     *
     *  This is the canonical name, as networks migh have multiple
     *  names.
     */
    get name() {
      return __privateGet(this, _name);
    }
    set name(value) {
      __privateSet(this, _name, value);
    }
    /**
     *  The network chain ID.
     */
    get chainId() {
      return __privateGet(this, _chainId2);
    }
    set chainId(value) {
      __privateSet(this, _chainId2, getBigInt(value, "chainId"));
    }
    /**
     *  Returns true if %%other%% matches this network. Any chain ID
     *  must match, and if no chain ID is present, the name must match.
     *
     *  This method does not currently check for additional properties,
     *  such as ENS address or plug-in compatibility.
     */
    matches(other) {
      if (other == null) {
        return false;
      }
      if (typeof other === "string") {
        try {
          return this.chainId === getBigInt(other);
        } catch (error) {
        }
        return this.name === other;
      }
      if (typeof other === "number" || typeof other === "bigint") {
        try {
          return this.chainId === getBigInt(other);
        } catch (error) {
        }
        return false;
      }
      if (typeof other === "object") {
        if (other.chainId != null) {
          try {
            return this.chainId === getBigInt(other.chainId);
          } catch (error) {
          }
          return false;
        }
        if (other.name != null) {
          return this.name === other.name;
        }
        return false;
      }
      return false;
    }
    /**
     *  Returns the list of plugins currently attached to this Network.
     */
    get plugins() {
      return Array.from(__privateGet(this, _plugins).values());
    }
    /**
     *  Attach a new %%plugin%% to this Network. The network name
     *  must be unique, excluding any fragment.
     */
    attachPlugin(plugin) {
      if (__privateGet(this, _plugins).get(plugin.name)) {
        throw new Error(`cannot replace existing plugin: ${plugin.name} `);
      }
      __privateGet(this, _plugins).set(plugin.name, plugin.clone());
      return this;
    }
    /**
     *  Return the plugin, if any, matching %%name%% exactly. Plugins
     *  with fragments will not be returned unless %%name%% includes
     *  a fragment.
     */
    getPlugin(name) {
      return __privateGet(this, _plugins).get(name) || null;
    }
    /**
     *  Gets a list of all plugins that match %%name%%, with otr without
     *  a fragment.
     */
    getPlugins(basename) {
      return this.plugins.filter((p) => p.name.split("#")[0] === basename);
    }
    /**
     *  Create a copy of this Network.
     */
    clone() {
      const clone = new _Network(this.name, this.chainId);
      this.plugins.forEach((plugin) => {
        clone.attachPlugin(plugin.clone());
      });
      return clone;
    }
    /**
     *  Compute the intrinsic gas required for a transaction.
     *
     *  A GasCostPlugin can be attached to override the default
     *  values.
     */
    computeIntrinsicGas(tx) {
      const costs = this.getPlugin("org.ethers.plugins.network.GasCost") || new GasCostPlugin();
      let gas = costs.txBase;
      if (tx.to == null) {
        gas += costs.txCreate;
      }
      if (tx.data) {
        for (let i = 2; i < tx.data.length; i += 2) {
          if (tx.data.substring(i, i + 2) === "00") {
            gas += costs.txDataZero;
          } else {
            gas += costs.txDataNonzero;
          }
        }
      }
      if (tx.accessList) {
        const accessList = accessListify(tx.accessList);
        for (const addr in accessList) {
          gas += costs.txAccessListAddress + costs.txAccessListStorageKey * accessList[addr].storageKeys.length;
        }
      }
      return gas;
    }
    /**
     *  Returns a new Network for the %%network%% name or chainId.
     */
    static from(network) {
      injectCommonNetworks();
      if (network == null) {
        return _Network.from("mainnet");
      }
      if (typeof network === "number") {
        network = BigInt(network);
      }
      if (typeof network === "string" || typeof network === "bigint") {
        const networkFunc = Networks.get(network);
        if (networkFunc) {
          return networkFunc();
        }
        if (typeof network === "bigint") {
          return new _Network("unknown", network);
        }
        assertArgument(false, "unknown network", "network", network);
      }
      if (typeof network.clone === "function") {
        const clone = network.clone();
        return clone;
      }
      if (typeof network === "object") {
        assertArgument(typeof network.name === "string" && typeof network.chainId === "number", "invalid network object name or chainId", "network", network);
        const custom = new _Network(network.name, network.chainId);
        if (network.ensAddress || network.ensNetwork != null) {
          custom.attachPlugin(new EnsPlugin(network.ensAddress, network.ensNetwork));
        }
        return custom;
      }
      assertArgument(false, "invalid network", "network", network);
    }
    /**
     *  Register %%nameOrChainId%% with a function which returns
     *  an instance of a Network representing that chain.
     */
    static register(nameOrChainId, networkFunc) {
      if (typeof nameOrChainId === "number") {
        nameOrChainId = BigInt(nameOrChainId);
      }
      const existing = Networks.get(nameOrChainId);
      if (existing) {
        assertArgument(false, `conflicting network for ${JSON.stringify(existing.name)}`, "nameOrChainId", nameOrChainId);
      }
      Networks.set(nameOrChainId, networkFunc);
    }
  };
  _name = new WeakMap();
  _chainId2 = new WeakMap();
  _plugins = new WeakMap();
  let Network = _Network;
  function parseUnits(_value2, decimals) {
    const value = String(_value2);
    if (!value.match(/^[0-9.]+$/)) {
      throw new Error(`invalid gwei value: ${_value2}`);
    }
    const comps = value.split(".");
    if (comps.length === 1) {
      comps.push("");
    }
    if (comps.length !== 2) {
      throw new Error(`invalid gwei value: ${_value2}`);
    }
    while (comps[1].length < decimals) {
      comps[1] += "0";
    }
    if (comps[1].length > 9) {
      let frac = BigInt(comps[1].substring(0, 9));
      if (!comps[1].substring(9).match(/^0+$/)) {
        frac++;
      }
      comps[1] = frac.toString();
    }
    return BigInt(comps[0] + comps[1]);
  }
  function getGasStationPlugin(url) {
    return new FetchUrlFeeDataNetworkPlugin(url, async (fetchFeeData, provider, request) => {
      request.setHeader("User-Agent", "ethers");
      let response;
      try {
        const [_response, _feeData] = await Promise.all([
          request.send(),
          fetchFeeData()
        ]);
        response = _response;
        const payload = response.bodyJson.standard;
        const feeData = {
          gasPrice: _feeData.gasPrice,
          maxFeePerGas: parseUnits(payload.maxFee, 9),
          maxPriorityFeePerGas: parseUnits(payload.maxPriorityFee, 9)
        };
        return feeData;
      } catch (error) {
        assert(false, `error encountered with polygon gas station (${JSON.stringify(request.url)})`, "SERVER_ERROR", { request, response, error });
      }
    });
  }
  let injected = false;
  function injectCommonNetworks() {
    if (injected) {
      return;
    }
    injected = true;
    function registerEth(name, chainId, options) {
      const func = function() {
        const network = new Network(name, chainId);
        if (options.ensNetwork != null) {
          network.attachPlugin(new EnsPlugin(null, options.ensNetwork));
        }
        network.attachPlugin(new GasCostPlugin());
        (options.plugins || []).forEach((plugin) => {
          network.attachPlugin(plugin);
        });
        return network;
      };
      Network.register(name, func);
      Network.register(chainId, func);
      if (options.altNames) {
        options.altNames.forEach((name2) => {
          Network.register(name2, func);
        });
      }
    }
    registerEth("mainnet", 1, { ensNetwork: 1, altNames: ["homestead"] });
    registerEth("ropsten", 3, { ensNetwork: 3 });
    registerEth("rinkeby", 4, { ensNetwork: 4 });
    registerEth("goerli", 5, { ensNetwork: 5 });
    registerEth("kovan", 42, { ensNetwork: 42 });
    registerEth("sepolia", 11155111, { ensNetwork: 11155111 });
    registerEth("holesky", 17e3, { ensNetwork: 17e3 });
    registerEth("classic", 61, {});
    registerEth("classicKotti", 6, {});
    registerEth("arbitrum", 42161, {
      ensNetwork: 1
    });
    registerEth("arbitrum-goerli", 421613, {});
    registerEth("arbitrum-sepolia", 421614, {});
    registerEth("base", 8453, { ensNetwork: 1 });
    registerEth("base-goerli", 84531, {});
    registerEth("base-sepolia", 84532, {});
    registerEth("bnb", 56, { ensNetwork: 1 });
    registerEth("bnbt", 97, {});
    registerEth("linea", 59144, { ensNetwork: 1 });
    registerEth("linea-goerli", 59140, {});
    registerEth("linea-sepolia", 59141, {});
    registerEth("matic", 137, {
      ensNetwork: 1,
      plugins: [
        getGasStationPlugin("https://gasstation.polygon.technology/v2")
      ]
    });
    registerEth("matic-amoy", 80002, {});
    registerEth("matic-mumbai", 80001, {
      altNames: ["maticMumbai", "maticmum"],
      plugins: [
        getGasStationPlugin("https://gasstation-testnet.polygon.technology/v2")
      ]
    });
    registerEth("optimism", 10, {
      ensNetwork: 1,
      plugins: []
    });
    registerEth("optimism-goerli", 420, {});
    registerEth("optimism-sepolia", 11155420, {});
    registerEth("xdai", 100, { ensNetwork: 1 });
  }
  function copy$2(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  class PollingBlockSubscriber {
    /**
     *  Create a new **PollingBlockSubscriber** attached to %%provider%%.
     */
    constructor(provider) {
      __privateAdd(this, _PollingBlockSubscriber_instances);
      __privateAdd(this, _provider);
      __privateAdd(this, _poller);
      __privateAdd(this, _interval);
      // The most recent block we have scanned for events. The value -2
      // indicates we still need to fetch an initial block number
      __privateAdd(this, _blockNumber);
      __privateSet(this, _provider, provider);
      __privateSet(this, _poller, null);
      __privateSet(this, _interval, 4e3);
      __privateSet(this, _blockNumber, -2);
    }
    /**
     *  The polling interval.
     */
    get pollingInterval() {
      return __privateGet(this, _interval);
    }
    set pollingInterval(value) {
      __privateSet(this, _interval, value);
    }
    start() {
      if (__privateGet(this, _poller)) {
        return;
      }
      __privateSet(this, _poller, __privateGet(this, _provider)._setTimeout(__privateMethod(this, _PollingBlockSubscriber_instances, poll_fn).bind(this), __privateGet(this, _interval)));
      __privateMethod(this, _PollingBlockSubscriber_instances, poll_fn).call(this);
    }
    stop() {
      if (!__privateGet(this, _poller)) {
        return;
      }
      __privateGet(this, _provider)._clearTimeout(__privateGet(this, _poller));
      __privateSet(this, _poller, null);
    }
    pause(dropWhilePaused) {
      this.stop();
      if (dropWhilePaused) {
        __privateSet(this, _blockNumber, -2);
      }
    }
    resume() {
      this.start();
    }
  }
  _provider = new WeakMap();
  _poller = new WeakMap();
  _interval = new WeakMap();
  _blockNumber = new WeakMap();
  _PollingBlockSubscriber_instances = new WeakSet();
  poll_fn = async function() {
    try {
      const blockNumber = await __privateGet(this, _provider).getBlockNumber();
      if (__privateGet(this, _blockNumber) === -2) {
        __privateSet(this, _blockNumber, blockNumber);
        return;
      }
      if (blockNumber !== __privateGet(this, _blockNumber)) {
        for (let b2 = __privateGet(this, _blockNumber) + 1; b2 <= blockNumber; b2++) {
          if (__privateGet(this, _poller) == null) {
            return;
          }
          await __privateGet(this, _provider).emit("block", b2);
        }
        __privateSet(this, _blockNumber, blockNumber);
      }
    } catch (error) {
    }
    if (__privateGet(this, _poller) == null) {
      return;
    }
    __privateSet(this, _poller, __privateGet(this, _provider)._setTimeout(__privateMethod(this, _PollingBlockSubscriber_instances, poll_fn).bind(this), __privateGet(this, _interval)));
  };
  class OnBlockSubscriber {
    /**
     *  Create a new **OnBlockSubscriber** attached to %%provider%%.
     */
    constructor(provider) {
      __privateAdd(this, _provider2);
      __privateAdd(this, _poll);
      __privateAdd(this, _running);
      __privateSet(this, _provider2, provider);
      __privateSet(this, _running, false);
      __privateSet(this, _poll, (blockNumber) => {
        this._poll(blockNumber, __privateGet(this, _provider2));
      });
    }
    /**
     *  Called on every new block.
     */
    async _poll(blockNumber, provider) {
      throw new Error("sub-classes must override this");
    }
    start() {
      if (__privateGet(this, _running)) {
        return;
      }
      __privateSet(this, _running, true);
      __privateGet(this, _poll).call(this, -2);
      __privateGet(this, _provider2).on("block", __privateGet(this, _poll));
    }
    stop() {
      if (!__privateGet(this, _running)) {
        return;
      }
      __privateSet(this, _running, false);
      __privateGet(this, _provider2).off("block", __privateGet(this, _poll));
    }
    pause(dropWhilePaused) {
      this.stop();
    }
    resume() {
      this.start();
    }
  }
  _provider2 = new WeakMap();
  _poll = new WeakMap();
  _running = new WeakMap();
  class PollingBlockTagSubscriber extends OnBlockSubscriber {
    constructor(provider, tag) {
      super(provider);
      __privateAdd(this, _tag);
      __privateAdd(this, _lastBlock);
      __privateSet(this, _tag, tag);
      __privateSet(this, _lastBlock, -2);
    }
    pause(dropWhilePaused) {
      if (dropWhilePaused) {
        __privateSet(this, _lastBlock, -2);
      }
      super.pause(dropWhilePaused);
    }
    async _poll(blockNumber, provider) {
      const block = await provider.getBlock(__privateGet(this, _tag));
      if (block == null) {
        return;
      }
      if (__privateGet(this, _lastBlock) === -2) {
        __privateSet(this, _lastBlock, block.number);
      } else if (block.number > __privateGet(this, _lastBlock)) {
        provider.emit(__privateGet(this, _tag), block.number);
        __privateSet(this, _lastBlock, block.number);
      }
    }
  }
  _tag = new WeakMap();
  _lastBlock = new WeakMap();
  class PollingOrphanSubscriber extends OnBlockSubscriber {
    constructor(provider, filter) {
      super(provider);
      __privateAdd(this, _filter2);
      __privateSet(this, _filter2, copy$2(filter));
    }
    async _poll(blockNumber, provider) {
      throw new Error("@TODO");
    }
  }
  _filter2 = new WeakMap();
  class PollingTransactionSubscriber extends OnBlockSubscriber {
    /**
     *  Create a new **PollingTransactionSubscriber** attached to
     *  %%provider%%, listening for %%hash%%.
     */
    constructor(provider, hash2) {
      super(provider);
      __privateAdd(this, _hash);
      __privateSet(this, _hash, hash2);
    }
    async _poll(blockNumber, provider) {
      const tx = await provider.getTransactionReceipt(__privateGet(this, _hash));
      if (tx) {
        provider.emit(__privateGet(this, _hash), tx);
      }
    }
  }
  _hash = new WeakMap();
  class PollingEventSubscriber {
    /**
     *  Create a new **PollingTransactionSubscriber** attached to
     *  %%provider%%, listening for %%filter%%.
     */
    constructor(provider, filter) {
      __privateAdd(this, _PollingEventSubscriber_instances);
      __privateAdd(this, _provider3);
      __privateAdd(this, _filter3);
      __privateAdd(this, _poller2);
      __privateAdd(this, _running2);
      // The most recent block we have scanned for events. The value -2
      // indicates we still need to fetch an initial block number
      __privateAdd(this, _blockNumber2);
      __privateSet(this, _provider3, provider);
      __privateSet(this, _filter3, copy$2(filter));
      __privateSet(this, _poller2, __privateMethod(this, _PollingEventSubscriber_instances, poll_fn2).bind(this));
      __privateSet(this, _running2, false);
      __privateSet(this, _blockNumber2, -2);
    }
    start() {
      if (__privateGet(this, _running2)) {
        return;
      }
      __privateSet(this, _running2, true);
      if (__privateGet(this, _blockNumber2) === -2) {
        __privateGet(this, _provider3).getBlockNumber().then((blockNumber) => {
          __privateSet(this, _blockNumber2, blockNumber);
        });
      }
      __privateGet(this, _provider3).on("block", __privateGet(this, _poller2));
    }
    stop() {
      if (!__privateGet(this, _running2)) {
        return;
      }
      __privateSet(this, _running2, false);
      __privateGet(this, _provider3).off("block", __privateGet(this, _poller2));
    }
    pause(dropWhilePaused) {
      this.stop();
      if (dropWhilePaused) {
        __privateSet(this, _blockNumber2, -2);
      }
    }
    resume() {
      this.start();
    }
  }
  _provider3 = new WeakMap();
  _filter3 = new WeakMap();
  _poller2 = new WeakMap();
  _running2 = new WeakMap();
  _blockNumber2 = new WeakMap();
  _PollingEventSubscriber_instances = new WeakSet();
  poll_fn2 = async function(blockNumber) {
    if (__privateGet(this, _blockNumber2) === -2) {
      return;
    }
    const filter = copy$2(__privateGet(this, _filter3));
    filter.fromBlock = __privateGet(this, _blockNumber2) + 1;
    filter.toBlock = blockNumber;
    const logs = await __privateGet(this, _provider3).getLogs(filter);
    if (logs.length === 0) {
      if (__privateGet(this, _blockNumber2) < blockNumber - 60) {
        __privateSet(this, _blockNumber2, blockNumber - 60);
      }
      return;
    }
    for (const log of logs) {
      __privateGet(this, _provider3).emit(__privateGet(this, _filter3), log);
      __privateSet(this, _blockNumber2, log.blockNumber);
    }
  };
  const BN_2 = BigInt(2);
  const MAX_CCIP_REDIRECTS = 10;
  function isPromise(value) {
    return value && typeof value.then === "function";
  }
  function getTag(prefix, value) {
    return prefix + ":" + JSON.stringify(value, (k, v) => {
      if (v == null) {
        return "null";
      }
      if (typeof v === "bigint") {
        return `bigint:${v.toString()}`;
      }
      if (typeof v === "string") {
        return v.toLowerCase();
      }
      if (typeof v === "object" && !Array.isArray(v)) {
        const keys = Object.keys(v);
        keys.sort();
        return keys.reduce((accum, key) => {
          accum[key] = v[key];
          return accum;
        }, {});
      }
      return v;
    });
  }
  class UnmanagedSubscriber {
    /**
     *  Create a new UnmanagedSubscriber with %%name%%.
     */
    constructor(name) {
      /**
       *  The name fof the event.
       */
      __publicField(this, "name");
      defineProperties(this, { name });
    }
    start() {
    }
    stop() {
    }
    pause(dropWhilePaused) {
    }
    resume() {
    }
  }
  function copy$1(value) {
    return JSON.parse(JSON.stringify(value));
  }
  function concisify(items) {
    items = Array.from(new Set(items).values());
    items.sort();
    return items;
  }
  async function getSubscription(_event2, provider) {
    if (_event2 == null) {
      throw new Error("invalid event");
    }
    if (Array.isArray(_event2)) {
      _event2 = { topics: _event2 };
    }
    if (typeof _event2 === "string") {
      switch (_event2) {
        case "block":
        case "debug":
        case "error":
        case "finalized":
        case "network":
        case "pending":
        case "safe": {
          return { type: _event2, tag: _event2 };
        }
      }
    }
    if (isHexString(_event2, 32)) {
      const hash2 = _event2.toLowerCase();
      return { type: "transaction", tag: getTag("tx", { hash: hash2 }), hash: hash2 };
    }
    if (_event2.orphan) {
      const event = _event2;
      return { type: "orphan", tag: getTag("orphan", event), filter: copy$1(event) };
    }
    if (_event2.address || _event2.topics) {
      const event = _event2;
      const filter = {
        topics: (event.topics || []).map((t) => {
          if (t == null) {
            return null;
          }
          if (Array.isArray(t)) {
            return concisify(t.map((t2) => t2.toLowerCase()));
          }
          return t.toLowerCase();
        })
      };
      if (event.address) {
        const addresses = [];
        const promises = [];
        const addAddress = (addr) => {
          if (isHexString(addr)) {
            addresses.push(addr);
          } else {
            promises.push((async () => {
              addresses.push(await resolveAddress(addr, provider));
            })());
          }
        };
        if (Array.isArray(event.address)) {
          event.address.forEach(addAddress);
        } else {
          addAddress(event.address);
        }
        if (promises.length) {
          await Promise.all(promises);
        }
        filter.address = concisify(addresses.map((a) => a.toLowerCase()));
      }
      return { filter, tag: getTag("event", filter), type: "event" };
    }
    assertArgument(false, "unknown ProviderEvent", "event", _event2);
  }
  function getTime() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  const defaultOptions$1 = {
    cacheTimeout: 250,
    pollingInterval: 4e3
  };
  class AbstractProvider {
    /**
     *  Create a new **AbstractProvider** connected to %%network%%, or
     *  use the various network detection capabilities to discover the
     *  [[Network]] if necessary.
     */
    constructor(_network3, options) {
      __privateAdd(this, _AbstractProvider_instances);
      __privateAdd(this, _subs);
      __privateAdd(this, _plugins2);
      // null=unpaused, true=paused+dropWhilePaused, false=paused
      __privateAdd(this, _pausedState);
      __privateAdd(this, _destroyed);
      __privateAdd(this, _networkPromise);
      __privateAdd(this, _anyNetwork);
      __privateAdd(this, _performCache);
      // The most recent block number if running an event or -1 if no "block" event
      __privateAdd(this, _lastBlockNumber);
      __privateAdd(this, _nextTimer);
      __privateAdd(this, _timers);
      __privateAdd(this, _disableCcipRead);
      __privateAdd(this, _options2);
      __privateSet(this, _options2, Object.assign({}, defaultOptions$1, options || {}));
      if (_network3 === "any") {
        __privateSet(this, _anyNetwork, true);
        __privateSet(this, _networkPromise, null);
      } else if (_network3) {
        const network = Network.from(_network3);
        __privateSet(this, _anyNetwork, false);
        __privateSet(this, _networkPromise, Promise.resolve(network));
        setTimeout(() => {
          this.emit("network", network, null);
        }, 0);
      } else {
        __privateSet(this, _anyNetwork, false);
        __privateSet(this, _networkPromise, null);
      }
      __privateSet(this, _lastBlockNumber, -1);
      __privateSet(this, _performCache, /* @__PURE__ */ new Map());
      __privateSet(this, _subs, /* @__PURE__ */ new Map());
      __privateSet(this, _plugins2, /* @__PURE__ */ new Map());
      __privateSet(this, _pausedState, null);
      __privateSet(this, _destroyed, false);
      __privateSet(this, _nextTimer, 1);
      __privateSet(this, _timers, /* @__PURE__ */ new Map());
      __privateSet(this, _disableCcipRead, false);
    }
    get pollingInterval() {
      return __privateGet(this, _options2).pollingInterval;
    }
    /**
     *  Returns ``this``, to allow an **AbstractProvider** to implement
     *  the [[ContractRunner]] interface.
     */
    get provider() {
      return this;
    }
    /**
     *  Returns all the registered plug-ins.
     */
    get plugins() {
      return Array.from(__privateGet(this, _plugins2).values());
    }
    /**
     *  Attach a new plug-in.
     */
    attachPlugin(plugin) {
      if (__privateGet(this, _plugins2).get(plugin.name)) {
        throw new Error(`cannot replace existing plugin: ${plugin.name} `);
      }
      __privateGet(this, _plugins2).set(plugin.name, plugin.connect(this));
      return this;
    }
    /**
     *  Get a plugin by name.
     */
    getPlugin(name) {
      return __privateGet(this, _plugins2).get(name) || null;
    }
    /**
     *  Prevent any CCIP-read operation, regardless of whether requested
     *  in a [[call]] using ``enableCcipRead``.
     */
    get disableCcipRead() {
      return __privateGet(this, _disableCcipRead);
    }
    set disableCcipRead(value) {
      __privateSet(this, _disableCcipRead, !!value);
    }
    /**
     *  Resolves to the data for executing the CCIP-read operations.
     */
    async ccipReadFetch(tx, calldata, urls) {
      if (this.disableCcipRead || urls.length === 0 || tx.to == null) {
        return null;
      }
      const sender = tx.to.toLowerCase();
      const data = calldata.toLowerCase();
      const errorMessages = [];
      for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        const href = url.replace("{sender}", sender).replace("{data}", data);
        const request = new FetchRequest(href);
        if (url.indexOf("{data}") === -1) {
          request.body = { data, sender };
        }
        this.emit("debug", { action: "sendCcipReadFetchRequest", request, index: i, urls });
        let errorMessage = "unknown error";
        let resp;
        try {
          resp = await request.send();
        } catch (error) {
          errorMessages.push(error.message);
          this.emit("debug", { action: "receiveCcipReadFetchError", request, result: { error } });
          continue;
        }
        try {
          const result = resp.bodyJson;
          if (result.data) {
            this.emit("debug", { action: "receiveCcipReadFetchResult", request, result });
            return result.data;
          }
          if (result.message) {
            errorMessage = result.message;
          }
          this.emit("debug", { action: "receiveCcipReadFetchError", request, result });
        } catch (error) {
        }
        assert(resp.statusCode < 400 || resp.statusCode >= 500, `response not found during CCIP fetch: ${errorMessage}`, "OFFCHAIN_FAULT", { reason: "404_MISSING_RESOURCE", transaction: tx, info: { url, errorMessage } });
        errorMessages.push(errorMessage);
      }
      assert(false, `error encountered during CCIP fetch: ${errorMessages.map((m) => JSON.stringify(m)).join(", ")}`, "OFFCHAIN_FAULT", {
        reason: "500_SERVER_ERROR",
        transaction: tx,
        info: { urls, errorMessages }
      });
    }
    /**
     *  Provides the opportunity for a sub-class to wrap a block before
     *  returning it, to add additional properties or an alternate
     *  sub-class of [[Block]].
     */
    _wrapBlock(value, network) {
      return new Block(formatBlock(value), this);
    }
    /**
     *  Provides the opportunity for a sub-class to wrap a log before
     *  returning it, to add additional properties or an alternate
     *  sub-class of [[Log]].
     */
    _wrapLog(value, network) {
      return new Log(formatLog(value), this);
    }
    /**
     *  Provides the opportunity for a sub-class to wrap a transaction
     *  receipt before returning it, to add additional properties or an
     *  alternate sub-class of [[TransactionReceipt]].
     */
    _wrapTransactionReceipt(value, network) {
      return new TransactionReceipt(formatTransactionReceipt(value), this);
    }
    /**
     *  Provides the opportunity for a sub-class to wrap a transaction
     *  response before returning it, to add additional properties or an
     *  alternate sub-class of [[TransactionResponse]].
     */
    _wrapTransactionResponse(tx, network) {
      return new TransactionResponse(formatTransactionResponse(tx), this);
    }
    /**
     *  Resolves to the Network, forcing a network detection using whatever
     *  technique the sub-class requires.
     *
     *  Sub-classes **must** override this.
     */
    _detectNetwork() {
      assert(false, "sub-classes must implement this", "UNSUPPORTED_OPERATION", {
        operation: "_detectNetwork"
      });
    }
    /**
     *  Sub-classes should use this to perform all built-in operations. All
     *  methods sanitizes and normalizes the values passed into this.
     *
     *  Sub-classes **must** override this.
     */
    async _perform(req) {
      assert(false, `unsupported method: ${req.method}`, "UNSUPPORTED_OPERATION", {
        operation: req.method,
        info: req
      });
    }
    // State
    async getBlockNumber() {
      const blockNumber = getNumber(await __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, { method: "getBlockNumber" }), "%response");
      if (__privateGet(this, _lastBlockNumber) >= 0) {
        __privateSet(this, _lastBlockNumber, blockNumber);
      }
      return blockNumber;
    }
    /**
     *  Returns or resolves to the address for %%address%%, resolving ENS
     *  names and [[Addressable]] objects and returning if already an
     *  address.
     */
    _getAddress(address) {
      return resolveAddress(address, this);
    }
    /**
     *  Returns or resolves to a valid block tag for %%blockTag%%, resolving
     *  negative values and returning if already a valid block tag.
     */
    _getBlockTag(blockTag) {
      if (blockTag == null) {
        return "latest";
      }
      switch (blockTag) {
        case "earliest":
          return "0x0";
        case "finalized":
        case "latest":
        case "pending":
        case "safe":
          return blockTag;
      }
      if (isHexString(blockTag)) {
        if (isHexString(blockTag, 32)) {
          return blockTag;
        }
        return toQuantity(blockTag);
      }
      if (typeof blockTag === "bigint") {
        blockTag = getNumber(blockTag, "blockTag");
      }
      if (typeof blockTag === "number") {
        if (blockTag >= 0) {
          return toQuantity(blockTag);
        }
        if (__privateGet(this, _lastBlockNumber) >= 0) {
          return toQuantity(__privateGet(this, _lastBlockNumber) + blockTag);
        }
        return this.getBlockNumber().then((b2) => toQuantity(b2 + blockTag));
      }
      assertArgument(false, "invalid blockTag", "blockTag", blockTag);
    }
    /**
     *  Returns or resolves to a filter for %%filter%%, resolving any ENS
     *  names or [[Addressable]] object and returning if already a valid
     *  filter.
     */
    _getFilter(filter) {
      const topics = (filter.topics || []).map((t) => {
        if (t == null) {
          return null;
        }
        if (Array.isArray(t)) {
          return concisify(t.map((t2) => t2.toLowerCase()));
        }
        return t.toLowerCase();
      });
      const blockHash = "blockHash" in filter ? filter.blockHash : void 0;
      const resolve = (_address, fromBlock2, toBlock2) => {
        let address2 = void 0;
        switch (_address.length) {
          case 0:
            break;
          case 1:
            address2 = _address[0];
            break;
          default:
            _address.sort();
            address2 = _address;
        }
        if (blockHash) {
          if (fromBlock2 != null || toBlock2 != null) {
            throw new Error("invalid filter");
          }
        }
        const filter2 = {};
        if (address2) {
          filter2.address = address2;
        }
        if (topics.length) {
          filter2.topics = topics;
        }
        if (fromBlock2) {
          filter2.fromBlock = fromBlock2;
        }
        if (toBlock2) {
          filter2.toBlock = toBlock2;
        }
        if (blockHash) {
          filter2.blockHash = blockHash;
        }
        return filter2;
      };
      let address = [];
      if (filter.address) {
        if (Array.isArray(filter.address)) {
          for (const addr of filter.address) {
            address.push(this._getAddress(addr));
          }
        } else {
          address.push(this._getAddress(filter.address));
        }
      }
      let fromBlock = void 0;
      if ("fromBlock" in filter) {
        fromBlock = this._getBlockTag(filter.fromBlock);
      }
      let toBlock = void 0;
      if ("toBlock" in filter) {
        toBlock = this._getBlockTag(filter.toBlock);
      }
      if (address.filter((a) => typeof a !== "string").length || fromBlock != null && typeof fromBlock !== "string" || toBlock != null && typeof toBlock !== "string") {
        return Promise.all([Promise.all(address), fromBlock, toBlock]).then((result) => {
          return resolve(result[0], result[1], result[2]);
        });
      }
      return resolve(address, fromBlock, toBlock);
    }
    /**
     *  Returns or resolves to a transaction for %%request%%, resolving
     *  any ENS names or [[Addressable]] and returning if already a valid
     *  transaction.
     */
    _getTransactionRequest(_request3) {
      const request = copyRequest(_request3);
      const promises = [];
      ["to", "from"].forEach((key) => {
        if (request[key] == null) {
          return;
        }
        const addr = resolveAddress(request[key], this);
        if (isPromise(addr)) {
          promises.push(async function() {
            request[key] = await addr;
          }());
        } else {
          request[key] = addr;
        }
      });
      if (request.blockTag != null) {
        const blockTag = this._getBlockTag(request.blockTag);
        if (isPromise(blockTag)) {
          promises.push(async function() {
            request.blockTag = await blockTag;
          }());
        } else {
          request.blockTag = blockTag;
        }
      }
      if (promises.length) {
        return async function() {
          await Promise.all(promises);
          return request;
        }();
      }
      return request;
    }
    async getNetwork() {
      if (__privateGet(this, _networkPromise) == null) {
        const detectNetwork = (async () => {
          try {
            const network = await this._detectNetwork();
            this.emit("network", network, null);
            return network;
          } catch (error) {
            if (__privateGet(this, _networkPromise) === detectNetwork) {
              __privateSet(this, _networkPromise, null);
            }
            throw error;
          }
        })();
        __privateSet(this, _networkPromise, detectNetwork);
        return (await detectNetwork).clone();
      }
      const networkPromise = __privateGet(this, _networkPromise);
      const [expected, actual] = await Promise.all([
        networkPromise,
        this._detectNetwork()
        // The actual connected network
      ]);
      if (expected.chainId !== actual.chainId) {
        if (__privateGet(this, _anyNetwork)) {
          this.emit("network", actual, expected);
          if (__privateGet(this, _networkPromise) === networkPromise) {
            __privateSet(this, _networkPromise, Promise.resolve(actual));
          }
        } else {
          assert(false, `network changed: ${expected.chainId} => ${actual.chainId} `, "NETWORK_ERROR", {
            event: "changed"
          });
        }
      }
      return expected.clone();
    }
    async getFeeData() {
      const network = await this.getNetwork();
      const getFeeDataFunc = async () => {
        const { _block, gasPrice, priorityFee } = await resolveProperties({
          _block: __privateMethod(this, _AbstractProvider_instances, getBlock_fn).call(this, "latest", false),
          gasPrice: (async () => {
            try {
              const value = await __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, { method: "getGasPrice" });
              return getBigInt(value, "%response");
            } catch (error) {
            }
            return null;
          })(),
          priorityFee: (async () => {
            try {
              const value = await __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, { method: "getPriorityFee" });
              return getBigInt(value, "%response");
            } catch (error) {
            }
            return null;
          })()
        });
        let maxFeePerGas = null;
        let maxPriorityFeePerGas = null;
        const block = this._wrapBlock(_block, network);
        if (block && block.baseFeePerGas) {
          maxPriorityFeePerGas = priorityFee != null ? priorityFee : BigInt("1000000000");
          maxFeePerGas = block.baseFeePerGas * BN_2 + maxPriorityFeePerGas;
        }
        return new FeeData(gasPrice, maxFeePerGas, maxPriorityFeePerGas);
      };
      const plugin = network.getPlugin("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
      if (plugin) {
        const req = new FetchRequest(plugin.url);
        const feeData = await plugin.processFunc(getFeeDataFunc, this, req);
        return new FeeData(feeData.gasPrice, feeData.maxFeePerGas, feeData.maxPriorityFeePerGas);
      }
      return await getFeeDataFunc();
    }
    async estimateGas(_tx) {
      let tx = this._getTransactionRequest(_tx);
      if (isPromise(tx)) {
        tx = await tx;
      }
      return getBigInt(await __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, {
        method: "estimateGas",
        transaction: tx
      }), "%response");
    }
    async call(_tx) {
      const { tx, blockTag } = await resolveProperties({
        tx: this._getTransactionRequest(_tx),
        blockTag: this._getBlockTag(_tx.blockTag)
      });
      return await __privateMethod(this, _AbstractProvider_instances, checkNetwork_fn).call(this, __privateMethod(this, _AbstractProvider_instances, call_fn).call(this, tx, blockTag, _tx.enableCcipRead ? 0 : -1));
    }
    async getBalance(address, blockTag) {
      return getBigInt(await __privateMethod(this, _AbstractProvider_instances, getAccountValue_fn).call(this, { method: "getBalance" }, address, blockTag), "%response");
    }
    async getTransactionCount(address, blockTag) {
      return getNumber(await __privateMethod(this, _AbstractProvider_instances, getAccountValue_fn).call(this, { method: "getTransactionCount" }, address, blockTag), "%response");
    }
    async getCode(address, blockTag) {
      return hexlify(await __privateMethod(this, _AbstractProvider_instances, getAccountValue_fn).call(this, { method: "getCode" }, address, blockTag));
    }
    async getStorage(address, _position, blockTag) {
      const position = getBigInt(_position, "position");
      return hexlify(await __privateMethod(this, _AbstractProvider_instances, getAccountValue_fn).call(this, { method: "getStorage", position }, address, blockTag));
    }
    // Write
    async broadcastTransaction(signedTx) {
      const { blockNumber, hash: hash2, network } = await resolveProperties({
        blockNumber: this.getBlockNumber(),
        hash: this._perform({
          method: "broadcastTransaction",
          signedTransaction: signedTx
        }),
        network: this.getNetwork()
      });
      const tx = Transaction.from(signedTx);
      if (tx.hash !== hash2) {
        throw new Error("@TODO: the returned hash did not match");
      }
      return this._wrapTransactionResponse(tx, network).replaceableTransaction(blockNumber);
    }
    // Queries
    async getBlock(block, prefetchTxs) {
      const { network, params } = await resolveProperties({
        network: this.getNetwork(),
        params: __privateMethod(this, _AbstractProvider_instances, getBlock_fn).call(this, block, !!prefetchTxs)
      });
      if (params == null) {
        return null;
      }
      return this._wrapBlock(params, network);
    }
    async getTransaction(hash2) {
      const { network, params } = await resolveProperties({
        network: this.getNetwork(),
        params: __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, { method: "getTransaction", hash: hash2 })
      });
      if (params == null) {
        return null;
      }
      return this._wrapTransactionResponse(params, network);
    }
    async getTransactionReceipt(hash2) {
      const { network, params } = await resolveProperties({
        network: this.getNetwork(),
        params: __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, { method: "getTransactionReceipt", hash: hash2 })
      });
      if (params == null) {
        return null;
      }
      if (params.gasPrice == null && params.effectiveGasPrice == null) {
        const tx = await __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, { method: "getTransaction", hash: hash2 });
        if (tx == null) {
          throw new Error("report this; could not find tx or effectiveGasPrice");
        }
        params.effectiveGasPrice = tx.gasPrice;
      }
      return this._wrapTransactionReceipt(params, network);
    }
    async getTransactionResult(hash2) {
      const { result } = await resolveProperties({
        network: this.getNetwork(),
        result: __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, { method: "getTransactionResult", hash: hash2 })
      });
      if (result == null) {
        return null;
      }
      return hexlify(result);
    }
    // Bloom-filter Queries
    async getLogs(_filter4) {
      let filter = this._getFilter(_filter4);
      if (isPromise(filter)) {
        filter = await filter;
      }
      const { network, params } = await resolveProperties({
        network: this.getNetwork(),
        params: __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, { method: "getLogs", filter })
      });
      return params.map((p) => this._wrapLog(p, network));
    }
    // ENS
    _getProvider(chainId) {
      assert(false, "provider cannot connect to target network", "UNSUPPORTED_OPERATION", {
        operation: "_getProvider()"
      });
    }
    async getResolver(name) {
      return await EnsResolver.fromName(this, name);
    }
    async getAvatar(name) {
      const resolver = await this.getResolver(name);
      if (resolver) {
        return await resolver.getAvatar();
      }
      return null;
    }
    async resolveName(name) {
      const resolver = await this.getResolver(name);
      if (resolver) {
        return await resolver.getAddress();
      }
      return null;
    }
    async lookupAddress(address) {
      address = getAddress(address);
      const node = namehash(address.substring(2).toLowerCase() + ".addr.reverse");
      try {
        const ensAddr = await EnsResolver.getEnsAddress(this);
        const ensContract = new Contract(ensAddr, [
          "function resolver(bytes32) view returns (address)"
        ], this);
        const resolver = await ensContract.resolver(node);
        if (resolver == null || resolver === ZeroAddress) {
          return null;
        }
        const resolverContract = new Contract(resolver, [
          "function name(bytes32) view returns (string)"
        ], this);
        const name = await resolverContract.name(node);
        const check = await this.resolveName(name);
        if (check !== address) {
          return null;
        }
        return name;
      } catch (error) {
        if (isError(error, "BAD_DATA") && error.value === "0x") {
          return null;
        }
        if (isError(error, "CALL_EXCEPTION")) {
          return null;
        }
        throw error;
      }
      return null;
    }
    async waitForTransaction(hash2, _confirms, timeout) {
      const confirms = _confirms != null ? _confirms : 1;
      if (confirms === 0) {
        return this.getTransactionReceipt(hash2);
      }
      return new Promise(async (resolve, reject) => {
        let timer = null;
        const listener = async (blockNumber) => {
          try {
            const receipt = await this.getTransactionReceipt(hash2);
            if (receipt != null) {
              if (blockNumber - receipt.blockNumber + 1 >= confirms) {
                resolve(receipt);
                if (timer) {
                  clearTimeout(timer);
                  timer = null;
                }
                return;
              }
            }
          } catch (error) {
            console.log("EEE", error);
          }
          this.once("block", listener);
        };
        if (timeout != null) {
          timer = setTimeout(() => {
            if (timer == null) {
              return;
            }
            timer = null;
            this.off("block", listener);
            reject(makeError("timeout", "TIMEOUT", { reason: "timeout" }));
          }, timeout);
        }
        listener(await this.getBlockNumber());
      });
    }
    async waitForBlock(blockTag) {
      assert(false, "not implemented yet", "NOT_IMPLEMENTED", {
        operation: "waitForBlock"
      });
    }
    /**
     *  Clear a timer created using the [[_setTimeout]] method.
     */
    _clearTimeout(timerId) {
      const timer = __privateGet(this, _timers).get(timerId);
      if (!timer) {
        return;
      }
      if (timer.timer) {
        clearTimeout(timer.timer);
      }
      __privateGet(this, _timers).delete(timerId);
    }
    /**
     *  Create a timer that will execute %%func%% after at least %%timeout%%
     *  (in ms). If %%timeout%% is unspecified, then %%func%% will execute
     *  in the next event loop.
     *
     *  [Pausing](AbstractProvider-paused) the provider will pause any
     *  associated timers.
     */
    _setTimeout(_func, timeout) {
      if (timeout == null) {
        timeout = 0;
      }
      const timerId = __privateWrapper(this, _nextTimer)._++;
      const func = () => {
        __privateGet(this, _timers).delete(timerId);
        _func();
      };
      if (this.paused) {
        __privateGet(this, _timers).set(timerId, { timer: null, func, time: timeout });
      } else {
        const timer = setTimeout(func, timeout);
        __privateGet(this, _timers).set(timerId, { timer, func, time: getTime() });
      }
      return timerId;
    }
    /**
     *  Perform %%func%% on each subscriber.
     */
    _forEachSubscriber(func) {
      for (const sub of __privateGet(this, _subs).values()) {
        func(sub.subscriber);
      }
    }
    /**
     *  Sub-classes may override this to customize subscription
     *  implementations.
     */
    _getSubscriber(sub) {
      switch (sub.type) {
        case "debug":
        case "error":
        case "network":
          return new UnmanagedSubscriber(sub.type);
        case "block": {
          const subscriber = new PollingBlockSubscriber(this);
          subscriber.pollingInterval = this.pollingInterval;
          return subscriber;
        }
        case "safe":
        case "finalized":
          return new PollingBlockTagSubscriber(this, sub.type);
        case "event":
          return new PollingEventSubscriber(this, sub.filter);
        case "transaction":
          return new PollingTransactionSubscriber(this, sub.hash);
        case "orphan":
          return new PollingOrphanSubscriber(this, sub.filter);
      }
      throw new Error(`unsupported event: ${sub.type}`);
    }
    /**
     *  If a [[Subscriber]] fails and needs to replace itself, this
     *  method may be used.
     *
     *  For example, this is used for providers when using the
     *  ``eth_getFilterChanges`` method, which can return null if state
     *  filters are not supported by the backend, allowing the Subscriber
     *  to swap in a [[PollingEventSubscriber]].
     */
    _recoverSubscriber(oldSub, newSub) {
      for (const sub of __privateGet(this, _subs).values()) {
        if (sub.subscriber === oldSub) {
          if (sub.started) {
            sub.subscriber.stop();
          }
          sub.subscriber = newSub;
          if (sub.started) {
            newSub.start();
          }
          if (__privateGet(this, _pausedState) != null) {
            newSub.pause(__privateGet(this, _pausedState));
          }
          break;
        }
      }
    }
    async on(event, listener) {
      const sub = await __privateMethod(this, _AbstractProvider_instances, getSub_fn).call(this, event);
      sub.listeners.push({ listener, once: false });
      if (!sub.started) {
        sub.subscriber.start();
        sub.started = true;
        if (__privateGet(this, _pausedState) != null) {
          sub.subscriber.pause(__privateGet(this, _pausedState));
        }
      }
      return this;
    }
    async once(event, listener) {
      const sub = await __privateMethod(this, _AbstractProvider_instances, getSub_fn).call(this, event);
      sub.listeners.push({ listener, once: true });
      if (!sub.started) {
        sub.subscriber.start();
        sub.started = true;
        if (__privateGet(this, _pausedState) != null) {
          sub.subscriber.pause(__privateGet(this, _pausedState));
        }
      }
      return this;
    }
    async emit(event, ...args) {
      const sub = await __privateMethod(this, _AbstractProvider_instances, hasSub_fn).call(this, event, args);
      if (!sub || sub.listeners.length === 0) {
        return false;
      }
      const count = sub.listeners.length;
      sub.listeners = sub.listeners.filter(({ listener, once: once2 }) => {
        const payload = new EventPayload(this, once2 ? null : listener, event);
        try {
          listener.call(this, ...args, payload);
        } catch (error) {
        }
        return !once2;
      });
      if (sub.listeners.length === 0) {
        if (sub.started) {
          sub.subscriber.stop();
        }
        __privateGet(this, _subs).delete(sub.tag);
      }
      return count > 0;
    }
    async listenerCount(event) {
      if (event) {
        const sub = await __privateMethod(this, _AbstractProvider_instances, hasSub_fn).call(this, event);
        if (!sub) {
          return 0;
        }
        return sub.listeners.length;
      }
      let total = 0;
      for (const { listeners } of __privateGet(this, _subs).values()) {
        total += listeners.length;
      }
      return total;
    }
    async listeners(event) {
      if (event) {
        const sub = await __privateMethod(this, _AbstractProvider_instances, hasSub_fn).call(this, event);
        if (!sub) {
          return [];
        }
        return sub.listeners.map(({ listener }) => listener);
      }
      let result = [];
      for (const { listeners } of __privateGet(this, _subs).values()) {
        result = result.concat(listeners.map(({ listener }) => listener));
      }
      return result;
    }
    async off(event, listener) {
      const sub = await __privateMethod(this, _AbstractProvider_instances, hasSub_fn).call(this, event);
      if (!sub) {
        return this;
      }
      if (listener) {
        const index = sub.listeners.map(({ listener: listener2 }) => listener2).indexOf(listener);
        if (index >= 0) {
          sub.listeners.splice(index, 1);
        }
      }
      if (!listener || sub.listeners.length === 0) {
        if (sub.started) {
          sub.subscriber.stop();
        }
        __privateGet(this, _subs).delete(sub.tag);
      }
      return this;
    }
    async removeAllListeners(event) {
      if (event) {
        const { tag, started, subscriber } = await __privateMethod(this, _AbstractProvider_instances, getSub_fn).call(this, event);
        if (started) {
          subscriber.stop();
        }
        __privateGet(this, _subs).delete(tag);
      } else {
        for (const [tag, { started, subscriber }] of __privateGet(this, _subs)) {
          if (started) {
            subscriber.stop();
          }
          __privateGet(this, _subs).delete(tag);
        }
      }
      return this;
    }
    // Alias for "on"
    async addListener(event, listener) {
      return await this.on(event, listener);
    }
    // Alias for "off"
    async removeListener(event, listener) {
      return this.off(event, listener);
    }
    /**
     *  If this provider has been destroyed using the [[destroy]] method.
     *
     *  Once destroyed, all resources are reclaimed, internal event loops
     *  and timers are cleaned up and no further requests may be sent to
     *  the provider.
     */
    get destroyed() {
      return __privateGet(this, _destroyed);
    }
    /**
     *  Sub-classes may use this to shutdown any sockets or release their
     *  resources and reject any pending requests.
     *
     *  Sub-classes **must** call ``super.destroy()``.
     */
    destroy() {
      this.removeAllListeners();
      for (const timerId of __privateGet(this, _timers).keys()) {
        this._clearTimeout(timerId);
      }
      __privateSet(this, _destroyed, true);
    }
    /**
     *  Whether the provider is currently paused.
     *
     *  A paused provider will not emit any events, and generally should
     *  not make any requests to the network, but that is up to sub-classes
     *  to manage.
     *
     *  Setting ``paused = true`` is identical to calling ``.pause(false)``,
     *  which will buffer any events that occur while paused until the
     *  provider is unpaused.
     */
    get paused() {
      return __privateGet(this, _pausedState) != null;
    }
    set paused(pause) {
      if (!!pause === this.paused) {
        return;
      }
      if (this.paused) {
        this.resume();
      } else {
        this.pause(false);
      }
    }
    /**
     *  Pause the provider. If %%dropWhilePaused%%, any events that occur
     *  while paused are dropped, otherwise all events will be emitted once
     *  the provider is unpaused.
     */
    pause(dropWhilePaused) {
      __privateSet(this, _lastBlockNumber, -1);
      if (__privateGet(this, _pausedState) != null) {
        if (__privateGet(this, _pausedState) == !!dropWhilePaused) {
          return;
        }
        assert(false, "cannot change pause type; resume first", "UNSUPPORTED_OPERATION", {
          operation: "pause"
        });
      }
      this._forEachSubscriber((s) => s.pause(dropWhilePaused));
      __privateSet(this, _pausedState, !!dropWhilePaused);
      for (const timer of __privateGet(this, _timers).values()) {
        if (timer.timer) {
          clearTimeout(timer.timer);
        }
        timer.time = getTime() - timer.time;
      }
    }
    /**
     *  Resume the provider.
     */
    resume() {
      if (__privateGet(this, _pausedState) == null) {
        return;
      }
      this._forEachSubscriber((s) => s.resume());
      __privateSet(this, _pausedState, null);
      for (const timer of __privateGet(this, _timers).values()) {
        let timeout = timer.time;
        if (timeout < 0) {
          timeout = 0;
        }
        timer.time = getTime();
        setTimeout(timer.func, timeout);
      }
    }
  }
  _subs = new WeakMap();
  _plugins2 = new WeakMap();
  _pausedState = new WeakMap();
  _destroyed = new WeakMap();
  _networkPromise = new WeakMap();
  _anyNetwork = new WeakMap();
  _performCache = new WeakMap();
  _lastBlockNumber = new WeakMap();
  _nextTimer = new WeakMap();
  _timers = new WeakMap();
  _disableCcipRead = new WeakMap();
  _options2 = new WeakMap();
  _AbstractProvider_instances = new WeakSet();
  perform_fn = async function(req) {
    const timeout = __privateGet(this, _options2).cacheTimeout;
    if (timeout < 0) {
      return await this._perform(req);
    }
    const tag = getTag(req.method, req);
    let perform = __privateGet(this, _performCache).get(tag);
    if (!perform) {
      perform = this._perform(req);
      __privateGet(this, _performCache).set(tag, perform);
      setTimeout(() => {
        if (__privateGet(this, _performCache).get(tag) === perform) {
          __privateGet(this, _performCache).delete(tag);
        }
      }, timeout);
    }
    return await perform;
  };
  call_fn = async function(tx, blockTag, attempt) {
    assert(attempt < MAX_CCIP_REDIRECTS, "CCIP read exceeded maximum redirections", "OFFCHAIN_FAULT", {
      reason: "TOO_MANY_REDIRECTS",
      transaction: Object.assign({}, tx, { blockTag, enableCcipRead: true })
    });
    const transaction2 = copyRequest(tx);
    try {
      return hexlify(await this._perform({ method: "call", transaction: transaction2, blockTag }));
    } catch (error) {
      if (!this.disableCcipRead && isCallException(error) && error.data && attempt >= 0 && blockTag === "latest" && transaction2.to != null && dataSlice(error.data, 0, 4) === "0x556f1830") {
        const data = error.data;
        const txSender = await resolveAddress(transaction2.to, this);
        let ccipArgs;
        try {
          ccipArgs = parseOffchainLookup(dataSlice(error.data, 4));
        } catch (error2) {
          assert(false, error2.message, "OFFCHAIN_FAULT", {
            reason: "BAD_DATA",
            transaction: transaction2,
            info: { data }
          });
        }
        assert(ccipArgs.sender.toLowerCase() === txSender.toLowerCase(), "CCIP Read sender mismatch", "CALL_EXCEPTION", {
          action: "call",
          data,
          reason: "OffchainLookup",
          transaction: transaction2,
          invocation: null,
          revert: {
            signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
            name: "OffchainLookup",
            args: ccipArgs.errorArgs
          }
        });
        const ccipResult = await this.ccipReadFetch(transaction2, ccipArgs.calldata, ccipArgs.urls);
        assert(ccipResult != null, "CCIP Read failed to fetch data", "OFFCHAIN_FAULT", {
          reason: "FETCH_FAILED",
          transaction: transaction2,
          info: { data: error.data, errorArgs: ccipArgs.errorArgs }
        });
        const tx2 = {
          to: txSender,
          data: concat([ccipArgs.selector, encodeBytes([ccipResult, ccipArgs.extraData])])
        };
        this.emit("debug", { action: "sendCcipReadCall", transaction: tx2 });
        try {
          const result = await __privateMethod(this, _AbstractProvider_instances, call_fn).call(this, tx2, blockTag, attempt + 1);
          this.emit("debug", { action: "receiveCcipReadCallResult", transaction: Object.assign({}, tx2), result });
          return result;
        } catch (error2) {
          this.emit("debug", { action: "receiveCcipReadCallError", transaction: Object.assign({}, tx2), error: error2 });
          throw error2;
        }
      }
      throw error;
    }
  };
  checkNetwork_fn = async function(promise) {
    const { value } = await resolveProperties({
      network: this.getNetwork(),
      value: promise
    });
    return value;
  };
  getAccountValue_fn = async function(request, _address, _blockTag) {
    let address = this._getAddress(_address);
    let blockTag = this._getBlockTag(_blockTag);
    if (typeof address !== "string" || typeof blockTag !== "string") {
      [address, blockTag] = await Promise.all([address, blockTag]);
    }
    return await __privateMethod(this, _AbstractProvider_instances, checkNetwork_fn).call(this, __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, Object.assign(request, { address, blockTag })));
  };
  getBlock_fn = async function(block, includeTransactions) {
    if (isHexString(block, 32)) {
      return await __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, {
        method: "getBlock",
        blockHash: block,
        includeTransactions
      });
    }
    let blockTag = this._getBlockTag(block);
    if (typeof blockTag !== "string") {
      blockTag = await blockTag;
    }
    return await __privateMethod(this, _AbstractProvider_instances, perform_fn).call(this, {
      method: "getBlock",
      blockTag,
      includeTransactions
    });
  };
  hasSub_fn = async function(event, emitArgs) {
    let sub = await getSubscription(event, this);
    if (sub.type === "event" && emitArgs && emitArgs.length > 0 && emitArgs[0].removed === true) {
      sub = await getSubscription({ orphan: "drop-log", log: emitArgs[0] }, this);
    }
    return __privateGet(this, _subs).get(sub.tag) || null;
  };
  getSub_fn = async function(event) {
    const subscription = await getSubscription(event, this);
    const tag = subscription.tag;
    let sub = __privateGet(this, _subs).get(tag);
    if (!sub) {
      const subscriber = this._getSubscriber(subscription);
      const addressableMap = /* @__PURE__ */ new WeakMap();
      const nameMap = /* @__PURE__ */ new Map();
      sub = { subscriber, tag, addressableMap, nameMap, started: false, listeners: [] };
      __privateGet(this, _subs).set(tag, sub);
    }
    return sub;
  };
  function _parseString(result, start) {
    try {
      const bytes2 = _parseBytes(result, start);
      if (bytes2) {
        return toUtf8String(bytes2);
      }
    } catch (error) {
    }
    return null;
  }
  function _parseBytes(result, start) {
    if (result === "0x") {
      return null;
    }
    try {
      const offset = getNumber(dataSlice(result, start, start + 32));
      const length = getNumber(dataSlice(result, offset, offset + 32));
      return dataSlice(result, offset + 32, offset + 32 + length);
    } catch (error) {
    }
    return null;
  }
  function numPad(value) {
    const result = toBeArray(value);
    if (result.length > 32) {
      throw new Error("internal; should not happen");
    }
    const padded = new Uint8Array(32);
    padded.set(result, 32 - result.length);
    return padded;
  }
  function bytesPad(value) {
    if (value.length % 32 === 0) {
      return value;
    }
    const result = new Uint8Array(Math.ceil(value.length / 32) * 32);
    result.set(value);
    return result;
  }
  const empty = new Uint8Array([]);
  function encodeBytes(datas) {
    const result = [];
    let byteCount = 0;
    for (let i = 0; i < datas.length; i++) {
      result.push(empty);
      byteCount += 32;
    }
    for (let i = 0; i < datas.length; i++) {
      const data = getBytes(datas[i]);
      result[i] = numPad(byteCount);
      result.push(numPad(data.length));
      result.push(bytesPad(data));
      byteCount += 32 + Math.ceil(data.length / 32) * 32;
    }
    return concat(result);
  }
  const zeros = "0x0000000000000000000000000000000000000000000000000000000000000000";
  function parseOffchainLookup(data) {
    const result = {
      sender: "",
      urls: [],
      calldata: "",
      selector: "",
      extraData: "",
      errorArgs: []
    };
    assert(dataLength(data) >= 5 * 32, "insufficient OffchainLookup data", "OFFCHAIN_FAULT", {
      reason: "insufficient OffchainLookup data"
    });
    const sender = dataSlice(data, 0, 32);
    assert(dataSlice(sender, 0, 12) === dataSlice(zeros, 0, 12), "corrupt OffchainLookup sender", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup sender"
    });
    result.sender = dataSlice(sender, 12);
    try {
      const urls = [];
      const urlsOffset = getNumber(dataSlice(data, 32, 64));
      const urlsLength = getNumber(dataSlice(data, urlsOffset, urlsOffset + 32));
      const urlsData = dataSlice(data, urlsOffset + 32);
      for (let u = 0; u < urlsLength; u++) {
        const url = _parseString(urlsData, u * 32);
        if (url == null) {
          throw new Error("abort");
        }
        urls.push(url);
      }
      result.urls = urls;
    } catch (error) {
      assert(false, "corrupt OffchainLookup urls", "OFFCHAIN_FAULT", {
        reason: "corrupt OffchainLookup urls"
      });
    }
    try {
      const calldata = _parseBytes(data, 64);
      if (calldata == null) {
        throw new Error("abort");
      }
      result.calldata = calldata;
    } catch (error) {
      assert(false, "corrupt OffchainLookup calldata", "OFFCHAIN_FAULT", {
        reason: "corrupt OffchainLookup calldata"
      });
    }
    assert(dataSlice(data, 100, 128) === dataSlice(zeros, 0, 28), "corrupt OffchainLookup callbaackSelector", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup callbaackSelector"
    });
    result.selector = dataSlice(data, 96, 100);
    try {
      const extraData = _parseBytes(data, 128);
      if (extraData == null) {
        throw new Error("abort");
      }
      result.extraData = extraData;
    } catch (error) {
      assert(false, "corrupt OffchainLookup extraData", "OFFCHAIN_FAULT", {
        reason: "corrupt OffchainLookup extraData"
      });
    }
    result.errorArgs = "sender,urls,calldata,selector,extraData".split(/,/).map((k) => result[k]);
    return result;
  }
  function checkProvider(signer, operation) {
    if (signer.provider) {
      return signer.provider;
    }
    assert(false, "missing provider", "UNSUPPORTED_OPERATION", { operation });
  }
  async function populate(signer, tx) {
    let pop = copyRequest(tx);
    if (pop.to != null) {
      pop.to = resolveAddress(pop.to, signer);
    }
    if (pop.from != null) {
      const from = pop.from;
      pop.from = Promise.all([
        signer.getAddress(),
        resolveAddress(from, signer)
      ]).then(([address, from2]) => {
        assertArgument(address.toLowerCase() === from2.toLowerCase(), "transaction from mismatch", "tx.from", from2);
        return address;
      });
    } else {
      pop.from = signer.getAddress();
    }
    return await resolveProperties(pop);
  }
  class AbstractSigner {
    /**
     *  Creates a new Signer connected to %%provider%%.
     */
    constructor(provider) {
      /**
       *  The provider this signer is connected to.
       */
      __publicField(this, "provider");
      defineProperties(this, { provider: provider || null });
    }
    async getNonce(blockTag) {
      return checkProvider(this, "getTransactionCount").getTransactionCount(await this.getAddress(), blockTag);
    }
    async populateCall(tx) {
      const pop = await populate(this, tx);
      return pop;
    }
    async populateTransaction(tx) {
      const provider = checkProvider(this, "populateTransaction");
      const pop = await populate(this, tx);
      if (pop.nonce == null) {
        pop.nonce = await this.getNonce("pending");
      }
      if (pop.gasLimit == null) {
        pop.gasLimit = await this.estimateGas(pop);
      }
      const network = await this.provider.getNetwork();
      if (pop.chainId != null) {
        const chainId = getBigInt(pop.chainId);
        assertArgument(chainId === network.chainId, "transaction chainId mismatch", "tx.chainId", tx.chainId);
      } else {
        pop.chainId = network.chainId;
      }
      const hasEip1559 = pop.maxFeePerGas != null || pop.maxPriorityFeePerGas != null;
      if (pop.gasPrice != null && (pop.type === 2 || hasEip1559)) {
        assertArgument(false, "eip-1559 transaction do not support gasPrice", "tx", tx);
      } else if ((pop.type === 0 || pop.type === 1) && hasEip1559) {
        assertArgument(false, "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "tx", tx);
      }
      if ((pop.type === 2 || pop.type == null) && (pop.maxFeePerGas != null && pop.maxPriorityFeePerGas != null)) {
        pop.type = 2;
      } else if (pop.type === 0 || pop.type === 1) {
        const feeData = await provider.getFeeData();
        assert(feeData.gasPrice != null, "network does not support gasPrice", "UNSUPPORTED_OPERATION", {
          operation: "getGasPrice"
        });
        if (pop.gasPrice == null) {
          pop.gasPrice = feeData.gasPrice;
        }
      } else {
        const feeData = await provider.getFeeData();
        if (pop.type == null) {
          if (feeData.maxFeePerGas != null && feeData.maxPriorityFeePerGas != null) {
            pop.type = 2;
            if (pop.gasPrice != null) {
              const gasPrice = pop.gasPrice;
              delete pop.gasPrice;
              pop.maxFeePerGas = gasPrice;
              pop.maxPriorityFeePerGas = gasPrice;
            } else {
              if (pop.maxFeePerGas == null) {
                pop.maxFeePerGas = feeData.maxFeePerGas;
              }
              if (pop.maxPriorityFeePerGas == null) {
                pop.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
              }
            }
          } else if (feeData.gasPrice != null) {
            assert(!hasEip1559, "network does not support EIP-1559", "UNSUPPORTED_OPERATION", {
              operation: "populateTransaction"
            });
            if (pop.gasPrice == null) {
              pop.gasPrice = feeData.gasPrice;
            }
            pop.type = 0;
          } else {
            assert(false, "failed to get consistent fee data", "UNSUPPORTED_OPERATION", {
              operation: "signer.getFeeData"
            });
          }
        } else if (pop.type === 2 || pop.type === 3) {
          if (pop.maxFeePerGas == null) {
            pop.maxFeePerGas = feeData.maxFeePerGas;
          }
          if (pop.maxPriorityFeePerGas == null) {
            pop.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
          }
        }
      }
      return await resolveProperties(pop);
    }
    async estimateGas(tx) {
      return checkProvider(this, "estimateGas").estimateGas(await this.populateCall(tx));
    }
    async call(tx) {
      return checkProvider(this, "call").call(await this.populateCall(tx));
    }
    async resolveName(name) {
      const provider = checkProvider(this, "resolveName");
      return await provider.resolveName(name);
    }
    async sendTransaction(tx) {
      const provider = checkProvider(this, "sendTransaction");
      const pop = await this.populateTransaction(tx);
      delete pop.from;
      const txObj = Transaction.from(pop);
      return await provider.broadcastTransaction(await this.signTransaction(txObj));
    }
  }
  function copy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  class FilterIdSubscriber {
    /**
     *  Creates a new **FilterIdSubscriber** which will used [[_subscribe]]
     *  and [[_emitResults]] to setup the subscription and provide the event
     *  to the %%provider%%.
     */
    constructor(provider) {
      __privateAdd(this, _FilterIdSubscriber_instances);
      __privateAdd(this, _provider4);
      __privateAdd(this, _filterIdPromise);
      __privateAdd(this, _poller3);
      __privateAdd(this, _running3);
      __privateAdd(this, _network);
      __privateAdd(this, _hault);
      __privateSet(this, _provider4, provider);
      __privateSet(this, _filterIdPromise, null);
      __privateSet(this, _poller3, __privateMethod(this, _FilterIdSubscriber_instances, poll_fn3).bind(this));
      __privateSet(this, _running3, false);
      __privateSet(this, _network, null);
      __privateSet(this, _hault, false);
    }
    /**
     *  Sub-classes **must** override this to begin the subscription.
     */
    _subscribe(provider) {
      throw new Error("subclasses must override this");
    }
    /**
     *  Sub-classes **must** override this handle the events.
     */
    _emitResults(provider, result) {
      throw new Error("subclasses must override this");
    }
    /**
     *  Sub-classes **must** override this handle recovery on errors.
     */
    _recover(provider) {
      throw new Error("subclasses must override this");
    }
    start() {
      if (__privateGet(this, _running3)) {
        return;
      }
      __privateSet(this, _running3, true);
      __privateMethod(this, _FilterIdSubscriber_instances, poll_fn3).call(this, -2);
    }
    stop() {
      if (!__privateGet(this, _running3)) {
        return;
      }
      __privateSet(this, _running3, false);
      __privateSet(this, _hault, true);
      __privateMethod(this, _FilterIdSubscriber_instances, teardown_fn).call(this);
      __privateGet(this, _provider4).off("block", __privateGet(this, _poller3));
    }
    pause(dropWhilePaused) {
      if (dropWhilePaused) {
        __privateMethod(this, _FilterIdSubscriber_instances, teardown_fn).call(this);
      }
      __privateGet(this, _provider4).off("block", __privateGet(this, _poller3));
    }
    resume() {
      this.start();
    }
  }
  _provider4 = new WeakMap();
  _filterIdPromise = new WeakMap();
  _poller3 = new WeakMap();
  _running3 = new WeakMap();
  _network = new WeakMap();
  _hault = new WeakMap();
  _FilterIdSubscriber_instances = new WeakSet();
  poll_fn3 = async function(blockNumber) {
    try {
      if (__privateGet(this, _filterIdPromise) == null) {
        __privateSet(this, _filterIdPromise, this._subscribe(__privateGet(this, _provider4)));
      }
      let filterId = null;
      try {
        filterId = await __privateGet(this, _filterIdPromise);
      } catch (error) {
        if (!isError(error, "UNSUPPORTED_OPERATION") || error.operation !== "eth_newFilter") {
          throw error;
        }
      }
      if (filterId == null) {
        __privateSet(this, _filterIdPromise, null);
        __privateGet(this, _provider4)._recoverSubscriber(this, this._recover(__privateGet(this, _provider4)));
        return;
      }
      const network = await __privateGet(this, _provider4).getNetwork();
      if (!__privateGet(this, _network)) {
        __privateSet(this, _network, network);
      }
      if (__privateGet(this, _network).chainId !== network.chainId) {
        throw new Error("chaid changed");
      }
      if (__privateGet(this, _hault)) {
        return;
      }
      const result = await __privateGet(this, _provider4).send("eth_getFilterChanges", [filterId]);
      await this._emitResults(__privateGet(this, _provider4), result);
    } catch (error) {
      console.log("@TODO", error);
    }
    __privateGet(this, _provider4).once("block", __privateGet(this, _poller3));
  };
  teardown_fn = function() {
    const filterIdPromise = __privateGet(this, _filterIdPromise);
    if (filterIdPromise) {
      __privateSet(this, _filterIdPromise, null);
      filterIdPromise.then((filterId) => {
        if (__privateGet(this, _provider4).destroyed) {
          return;
        }
        __privateGet(this, _provider4).send("eth_uninstallFilter", [filterId]);
      });
    }
  };
  class FilterIdEventSubscriber extends FilterIdSubscriber {
    /**
     *  Creates a new **FilterIdEventSubscriber** attached to %%provider%%
     *  listening for %%filter%%.
     */
    constructor(provider, filter) {
      super(provider);
      __privateAdd(this, _event);
      __privateSet(this, _event, copy(filter));
    }
    _recover(provider) {
      return new PollingEventSubscriber(provider, __privateGet(this, _event));
    }
    async _subscribe(provider) {
      const filterId = await provider.send("eth_newFilter", [__privateGet(this, _event)]);
      return filterId;
    }
    async _emitResults(provider, results) {
      for (const result of results) {
        provider.emit(__privateGet(this, _event), provider._wrapLog(result, provider._network));
      }
    }
  }
  _event = new WeakMap();
  class FilterIdPendingSubscriber extends FilterIdSubscriber {
    async _subscribe(provider) {
      return await provider.send("eth_newPendingTransactionFilter", []);
    }
    async _emitResults(provider, results) {
      for (const result of results) {
        provider.emit("pending", result);
      }
    }
  }
  const Primitive = "bigint,boolean,function,number,string,symbol".split(/,/g);
  function deepCopy(value) {
    if (value == null || Primitive.indexOf(typeof value) >= 0) {
      return value;
    }
    if (typeof value.getAddress === "function") {
      return value;
    }
    if (Array.isArray(value)) {
      return value.map(deepCopy);
    }
    if (typeof value === "object") {
      return Object.keys(value).reduce((accum, key) => {
        accum[key] = value[key];
        return accum;
      }, {});
    }
    throw new Error(`should not happen: ${value} (${typeof value})`);
  }
  function stall(duration) {
    return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  }
  function getLowerCase(value) {
    if (value) {
      return value.toLowerCase();
    }
    return value;
  }
  function isPollable(value) {
    return value && typeof value.pollingInterval === "number";
  }
  const defaultOptions = {
    polling: false,
    staticNetwork: null,
    batchStallTime: 10,
    batchMaxSize: 1 << 20,
    batchMaxCount: 100,
    cacheTimeout: 250,
    pollingInterval: 4e3
  };
  class JsonRpcSigner extends AbstractSigner {
    constructor(provider, address) {
      super(provider);
      __publicField(this, "address");
      address = getAddress(address);
      defineProperties(this, { address });
    }
    connect(provider) {
      assert(false, "cannot reconnect JsonRpcSigner", "UNSUPPORTED_OPERATION", {
        operation: "signer.connect"
      });
    }
    async getAddress() {
      return this.address;
    }
    // JSON-RPC will automatially fill in nonce, etc. so we just check from
    async populateTransaction(tx) {
      return await this.populateCall(tx);
    }
    // Returns just the hash of the transaction after sent, which is what
    // the bare JSON-RPC API does;
    async sendUncheckedTransaction(_tx) {
      const tx = deepCopy(_tx);
      const promises = [];
      if (tx.from) {
        const _from = tx.from;
        promises.push((async () => {
          const from = await resolveAddress(_from, this.provider);
          assertArgument(from != null && from.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", _tx);
          tx.from = from;
        })());
      } else {
        tx.from = this.address;
      }
      if (tx.gasLimit == null) {
        promises.push((async () => {
          tx.gasLimit = await this.provider.estimateGas({ ...tx, from: this.address });
        })());
      }
      if (tx.to != null) {
        const _to2 = tx.to;
        promises.push((async () => {
          tx.to = await resolveAddress(_to2, this.provider);
        })());
      }
      if (promises.length) {
        await Promise.all(promises);
      }
      const hexTx = this.provider.getRpcTransaction(tx);
      return this.provider.send("eth_sendTransaction", [hexTx]);
    }
    async sendTransaction(tx) {
      const blockNumber = await this.provider.getBlockNumber();
      const hash2 = await this.sendUncheckedTransaction(tx);
      return await new Promise((resolve, reject) => {
        const timeouts = [1e3, 100];
        let invalids = 0;
        const checkTx = async () => {
          try {
            const tx2 = await this.provider.getTransaction(hash2);
            if (tx2 != null) {
              resolve(tx2.replaceableTransaction(blockNumber));
              return;
            }
          } catch (error) {
            if (isError(error, "CANCELLED") || isError(error, "BAD_DATA") || isError(error, "NETWORK_ERROR") || isError(error, "UNSUPPORTED_OPERATION")) {
              if (error.info == null) {
                error.info = {};
              }
              error.info.sendTransactionHash = hash2;
              reject(error);
              return;
            }
            if (isError(error, "INVALID_ARGUMENT")) {
              invalids++;
              if (error.info == null) {
                error.info = {};
              }
              error.info.sendTransactionHash = hash2;
              if (invalids > 10) {
                reject(error);
                return;
              }
            }
            this.provider.emit("error", makeError("failed to fetch transation after sending (will try again)", "UNKNOWN_ERROR", { error }));
          }
          this.provider._setTimeout(() => {
            checkTx();
          }, timeouts.pop() || 4e3);
        };
        checkTx();
      });
    }
    async signTransaction(_tx) {
      const tx = deepCopy(_tx);
      if (tx.from) {
        const from = await resolveAddress(tx.from, this.provider);
        assertArgument(from != null && from.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", _tx);
        tx.from = from;
      } else {
        tx.from = this.address;
      }
      const hexTx = this.provider.getRpcTransaction(tx);
      return await this.provider.send("eth_signTransaction", [hexTx]);
    }
    async signMessage(_message) {
      const message = typeof _message === "string" ? toUtf8Bytes(_message) : _message;
      return await this.provider.send("personal_sign", [
        hexlify(message),
        this.address.toLowerCase()
      ]);
    }
    async signTypedData(domain, types, _value2) {
      const value = deepCopy(_value2);
      const populated = await TypedDataEncoder.resolveNames(domain, types, value, async (value2) => {
        const address = await resolveAddress(value2);
        assertArgument(address != null, "TypedData does not support null address", "value", value2);
        return address;
      });
      return await this.provider.send("eth_signTypedData_v4", [
        this.address.toLowerCase(),
        JSON.stringify(TypedDataEncoder.getPayload(populated.domain, types, populated.value))
      ]);
    }
    async unlock(password) {
      return this.provider.send("personal_unlockAccount", [
        this.address.toLowerCase(),
        password,
        null
      ]);
    }
    // https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_sign
    async _legacySignMessage(_message) {
      const message = typeof _message === "string" ? toUtf8Bytes(_message) : _message;
      return await this.provider.send("eth_sign", [
        this.address.toLowerCase(),
        hexlify(message)
      ]);
    }
  }
  class JsonRpcApiProvider extends AbstractProvider {
    constructor(network, options) {
      super(network, options);
      __privateAdd(this, _JsonRpcApiProvider_instances);
      __privateAdd(this, _options3);
      // The next ID to use for the JSON-RPC ID field
      __privateAdd(this, _nextId);
      // Payloads are queued and triggered in batches using the drainTimer
      __privateAdd(this, _payloads);
      __privateAdd(this, _drainTimer);
      __privateAdd(this, _notReady);
      __privateAdd(this, _network2);
      __privateAdd(this, _pendingDetectNetwork);
      __privateSet(this, _nextId, 1);
      __privateSet(this, _options3, Object.assign({}, defaultOptions, options || {}));
      __privateSet(this, _payloads, []);
      __privateSet(this, _drainTimer, null);
      __privateSet(this, _network2, null);
      __privateSet(this, _pendingDetectNetwork, null);
      {
        let resolve = null;
        const promise = new Promise((_resolve) => {
          resolve = _resolve;
        });
        __privateSet(this, _notReady, { promise, resolve });
      }
      const staticNetwork = this._getOption("staticNetwork");
      if (typeof staticNetwork === "boolean") {
        assertArgument(!staticNetwork || network !== "any", "staticNetwork cannot be used on special network 'any'", "options", options);
        if (staticNetwork && network != null) {
          __privateSet(this, _network2, Network.from(network));
        }
      } else if (staticNetwork) {
        assertArgument(network == null || staticNetwork.matches(network), "staticNetwork MUST match network object", "options", options);
        __privateSet(this, _network2, staticNetwork);
      }
    }
    /**
     *  Returns the value associated with the option %%key%%.
     *
     *  Sub-classes can use this to inquire about configuration options.
     */
    _getOption(key) {
      return __privateGet(this, _options3)[key];
    }
    /**
     *  Gets the [[Network]] this provider has committed to. On each call, the network
     *  is detected, and if it has changed, the call will reject.
     */
    get _network() {
      assert(__privateGet(this, _network2), "network is not available yet", "NETWORK_ERROR");
      return __privateGet(this, _network2);
    }
    /**
     *  Resolves to the non-normalized value by performing %%req%%.
     *
     *  Sub-classes may override this to modify behavior of actions,
     *  and should generally call ``super._perform`` as a fallback.
     */
    async _perform(req) {
      if (req.method === "call" || req.method === "estimateGas") {
        let tx = req.transaction;
        if (tx && tx.type != null && getBigInt(tx.type)) {
          if (tx.maxFeePerGas == null && tx.maxPriorityFeePerGas == null) {
            const feeData = await this.getFeeData();
            if (feeData.maxFeePerGas == null && feeData.maxPriorityFeePerGas == null) {
              req = Object.assign({}, req, {
                transaction: Object.assign({}, tx, { type: void 0 })
              });
            }
          }
        }
      }
      const request = this.getRpcRequest(req);
      if (request != null) {
        return await this.send(request.method, request.args);
      }
      return super._perform(req);
    }
    /**
     *  Sub-classes may override this; it detects the *actual* network that
     *  we are **currently** connected to.
     *
     *  Keep in mind that [[send]] may only be used once [[ready]], otherwise the
     *  _send primitive must be used instead.
     */
    async _detectNetwork() {
      const network = this._getOption("staticNetwork");
      if (network) {
        if (network === true) {
          if (__privateGet(this, _network2)) {
            return __privateGet(this, _network2);
          }
        } else {
          return network;
        }
      }
      if (__privateGet(this, _pendingDetectNetwork)) {
        return await __privateGet(this, _pendingDetectNetwork);
      }
      if (this.ready) {
        __privateSet(this, _pendingDetectNetwork, (async () => {
          try {
            const result = Network.from(getBigInt(await this.send("eth_chainId", [])));
            __privateSet(this, _pendingDetectNetwork, null);
            return result;
          } catch (error) {
            __privateSet(this, _pendingDetectNetwork, null);
            throw error;
          }
        })());
        return await __privateGet(this, _pendingDetectNetwork);
      }
      __privateSet(this, _pendingDetectNetwork, (async () => {
        const payload = {
          id: __privateWrapper(this, _nextId)._++,
          method: "eth_chainId",
          params: [],
          jsonrpc: "2.0"
        };
        this.emit("debug", { action: "sendRpcPayload", payload });
        let result;
        try {
          result = (await this._send(payload))[0];
          __privateSet(this, _pendingDetectNetwork, null);
        } catch (error) {
          __privateSet(this, _pendingDetectNetwork, null);
          this.emit("debug", { action: "receiveRpcError", error });
          throw error;
        }
        this.emit("debug", { action: "receiveRpcResult", result });
        if ("result" in result) {
          return Network.from(getBigInt(result.result));
        }
        throw this.getRpcError(payload, result);
      })());
      return await __privateGet(this, _pendingDetectNetwork);
    }
    /**
     *  Sub-classes **MUST** call this. Until [[_start]] has been called, no calls
     *  will be passed to [[_send]] from [[send]]. If it is overridden, then
     *  ``super._start()`` **MUST** be called.
     *
     *  Calling it multiple times is safe and has no effect.
     */
    _start() {
      if (__privateGet(this, _notReady) == null || __privateGet(this, _notReady).resolve == null) {
        return;
      }
      __privateGet(this, _notReady).resolve();
      __privateSet(this, _notReady, null);
      (async () => {
        while (__privateGet(this, _network2) == null && !this.destroyed) {
          try {
            __privateSet(this, _network2, await this._detectNetwork());
          } catch (error) {
            if (this.destroyed) {
              break;
            }
            console.log("JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)");
            this.emit("error", makeError("failed to bootstrap network detection", "NETWORK_ERROR", { event: "initial-network-discovery", info: { error } }));
            await stall(1e3);
          }
        }
        __privateMethod(this, _JsonRpcApiProvider_instances, scheduleDrain_fn).call(this);
      })();
    }
    /**
     *  Resolves once the [[_start]] has been called. This can be used in
     *  sub-classes to defer sending data until the connection has been
     *  established.
     */
    async _waitUntilReady() {
      if (__privateGet(this, _notReady) == null) {
        return;
      }
      return await __privateGet(this, _notReady).promise;
    }
    /**
     *  Return a Subscriber that will manage the %%sub%%.
     *
     *  Sub-classes may override this to modify the behavior of
     *  subscription management.
     */
    _getSubscriber(sub) {
      if (sub.type === "pending") {
        return new FilterIdPendingSubscriber(this);
      }
      if (sub.type === "event") {
        if (this._getOption("polling")) {
          return new PollingEventSubscriber(this, sub.filter);
        }
        return new FilterIdEventSubscriber(this, sub.filter);
      }
      if (sub.type === "orphan" && sub.filter.orphan === "drop-log") {
        return new UnmanagedSubscriber("orphan");
      }
      return super._getSubscriber(sub);
    }
    /**
     *  Returns true only if the [[_start]] has been called.
     */
    get ready() {
      return __privateGet(this, _notReady) == null;
    }
    /**
     *  Returns %%tx%% as a normalized JSON-RPC transaction request,
     *  which has all values hexlified and any numeric values converted
     *  to Quantity values.
     */
    getRpcTransaction(tx) {
      const result = {};
      ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach((key) => {
        if (tx[key] == null) {
          return;
        }
        let dstKey = key;
        if (key === "gasLimit") {
          dstKey = "gas";
        }
        result[dstKey] = toQuantity(getBigInt(tx[key], `tx.${key}`));
      });
      ["from", "to", "data"].forEach((key) => {
        if (tx[key] == null) {
          return;
        }
        result[key] = hexlify(tx[key]);
      });
      if (tx.accessList) {
        result["accessList"] = accessListify(tx.accessList);
      }
      if (tx.blobVersionedHashes) {
        result["blobVersionedHashes"] = tx.blobVersionedHashes.map((h) => h.toLowerCase());
      }
      return result;
    }
    /**
     *  Returns the request method and arguments required to perform
     *  %%req%%.
     */
    getRpcRequest(req) {
      switch (req.method) {
        case "chainId":
          return { method: "eth_chainId", args: [] };
        case "getBlockNumber":
          return { method: "eth_blockNumber", args: [] };
        case "getGasPrice":
          return { method: "eth_gasPrice", args: [] };
        case "getPriorityFee":
          return { method: "eth_maxPriorityFeePerGas", args: [] };
        case "getBalance":
          return {
            method: "eth_getBalance",
            args: [getLowerCase(req.address), req.blockTag]
          };
        case "getTransactionCount":
          return {
            method: "eth_getTransactionCount",
            args: [getLowerCase(req.address), req.blockTag]
          };
        case "getCode":
          return {
            method: "eth_getCode",
            args: [getLowerCase(req.address), req.blockTag]
          };
        case "getStorage":
          return {
            method: "eth_getStorageAt",
            args: [
              getLowerCase(req.address),
              "0x" + req.position.toString(16),
              req.blockTag
            ]
          };
        case "broadcastTransaction":
          return {
            method: "eth_sendRawTransaction",
            args: [req.signedTransaction]
          };
        case "getBlock":
          if ("blockTag" in req) {
            return {
              method: "eth_getBlockByNumber",
              args: [req.blockTag, !!req.includeTransactions]
            };
          } else if ("blockHash" in req) {
            return {
              method: "eth_getBlockByHash",
              args: [req.blockHash, !!req.includeTransactions]
            };
          }
          break;
        case "getTransaction":
          return {
            method: "eth_getTransactionByHash",
            args: [req.hash]
          };
        case "getTransactionReceipt":
          return {
            method: "eth_getTransactionReceipt",
            args: [req.hash]
          };
        case "call":
          return {
            method: "eth_call",
            args: [this.getRpcTransaction(req.transaction), req.blockTag]
          };
        case "estimateGas": {
          return {
            method: "eth_estimateGas",
            args: [this.getRpcTransaction(req.transaction)]
          };
        }
        case "getLogs":
          if (req.filter && req.filter.address != null) {
            if (Array.isArray(req.filter.address)) {
              req.filter.address = req.filter.address.map(getLowerCase);
            } else {
              req.filter.address = getLowerCase(req.filter.address);
            }
          }
          return { method: "eth_getLogs", args: [req.filter] };
      }
      return null;
    }
    /**
     *  Returns an ethers-style Error for the given JSON-RPC error
     *  %%payload%%, coalescing the various strings and error shapes
     *  that different nodes return, coercing them into a machine-readable
     *  standardized error.
     */
    getRpcError(payload, _error2) {
      const { method } = payload;
      const { error } = _error2;
      if (method === "eth_estimateGas" && error.message) {
        const msg = error.message;
        if (!msg.match(/revert/i) && msg.match(/insufficient funds/i)) {
          return makeError("insufficient funds", "INSUFFICIENT_FUNDS", {
            transaction: payload.params[0],
            info: { payload, error }
          });
        }
      }
      if (method === "eth_call" || method === "eth_estimateGas") {
        const result = spelunkData(error);
        const e = AbiCoder.getBuiltinCallException(method === "eth_call" ? "call" : "estimateGas", payload.params[0], result ? result.data : null);
        e.info = { error, payload };
        return e;
      }
      const message = JSON.stringify(spelunkMessage(error));
      if (typeof error.message === "string" && error.message.match(/user denied|ethers-user-denied/i)) {
        const actionMap = {
          eth_sign: "signMessage",
          personal_sign: "signMessage",
          eth_signTypedData_v4: "signTypedData",
          eth_signTransaction: "signTransaction",
          eth_sendTransaction: "sendTransaction",
          eth_requestAccounts: "requestAccess",
          wallet_requestAccounts: "requestAccess"
        };
        return makeError(`user rejected action`, "ACTION_REJECTED", {
          action: actionMap[method] || "unknown",
          reason: "rejected",
          info: { payload, error }
        });
      }
      if (method === "eth_sendRawTransaction" || method === "eth_sendTransaction") {
        const transaction2 = payload.params[0];
        if (message.match(/insufficient funds|base fee exceeds gas limit/i)) {
          return makeError("insufficient funds for intrinsic transaction cost", "INSUFFICIENT_FUNDS", {
            transaction: transaction2,
            info: { error }
          });
        }
        if (message.match(/nonce/i) && message.match(/too low/i)) {
          return makeError("nonce has already been used", "NONCE_EXPIRED", { transaction: transaction2, info: { error } });
        }
        if (message.match(/replacement transaction/i) && message.match(/underpriced/i)) {
          return makeError("replacement fee too low", "REPLACEMENT_UNDERPRICED", { transaction: transaction2, info: { error } });
        }
        if (message.match(/only replay-protected/i)) {
          return makeError("legacy pre-eip-155 transactions not supported", "UNSUPPORTED_OPERATION", {
            operation: method,
            info: { transaction: transaction2, info: { error } }
          });
        }
      }
      let unsupported = !!message.match(/the method .* does not exist/i);
      if (!unsupported) {
        if (error && error.details && error.details.startsWith("Unauthorized method:")) {
          unsupported = true;
        }
      }
      if (unsupported) {
        return makeError("unsupported operation", "UNSUPPORTED_OPERATION", {
          operation: payload.method,
          info: { error, payload }
        });
      }
      return makeError("could not coalesce error", "UNKNOWN_ERROR", { error, payload });
    }
    /**
     *  Requests the %%method%% with %%params%% via the JSON-RPC protocol
     *  over the underlying channel. This can be used to call methods
     *  on the backend that do not have a high-level API within the Provider
     *  API.
     *
     *  This method queues requests according to the batch constraints
     *  in the options, assigns the request a unique ID.
     *
     *  **Do NOT override** this method in sub-classes; instead
     *  override [[_send]] or force the options values in the
     *  call to the constructor to modify this method's behavior.
     */
    send(method, params) {
      if (this.destroyed) {
        return Promise.reject(makeError("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: method }));
      }
      const id2 = __privateWrapper(this, _nextId)._++;
      const promise = new Promise((resolve, reject) => {
        __privateGet(this, _payloads).push({
          resolve,
          reject,
          payload: { method, params, id: id2, jsonrpc: "2.0" }
        });
      });
      __privateMethod(this, _JsonRpcApiProvider_instances, scheduleDrain_fn).call(this);
      return promise;
    }
    /**
     *  Resolves to the [[Signer]] account for  %%address%% managed by
     *  the client.
     *
     *  If the %%address%% is a number, it is used as an index in the
     *  the accounts from [[listAccounts]].
     *
     *  This can only be used on clients which manage accounts (such as
     *  Geth with imported account or MetaMask).
     *
     *  Throws if the account doesn't exist.
     */
    async getSigner(address) {
      if (address == null) {
        address = 0;
      }
      const accountsPromise = this.send("eth_accounts", []);
      if (typeof address === "number") {
        const accounts2 = await accountsPromise;
        if (address >= accounts2.length) {
          throw new Error("no such account");
        }
        return new JsonRpcSigner(this, accounts2[address]);
      }
      const { accounts } = await resolveProperties({
        network: this.getNetwork(),
        accounts: accountsPromise
      });
      address = getAddress(address);
      for (const account of accounts) {
        if (getAddress(account) === address) {
          return new JsonRpcSigner(this, address);
        }
      }
      throw new Error("invalid account");
    }
    async listAccounts() {
      const accounts = await this.send("eth_accounts", []);
      return accounts.map((a) => new JsonRpcSigner(this, a));
    }
    destroy() {
      if (__privateGet(this, _drainTimer)) {
        clearTimeout(__privateGet(this, _drainTimer));
        __privateSet(this, _drainTimer, null);
      }
      for (const { payload, reject } of __privateGet(this, _payloads)) {
        reject(makeError("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: payload.method }));
      }
      __privateSet(this, _payloads, []);
      super.destroy();
    }
  }
  _options3 = new WeakMap();
  _nextId = new WeakMap();
  _payloads = new WeakMap();
  _drainTimer = new WeakMap();
  _notReady = new WeakMap();
  _network2 = new WeakMap();
  _pendingDetectNetwork = new WeakMap();
  _JsonRpcApiProvider_instances = new WeakSet();
  scheduleDrain_fn = function() {
    if (__privateGet(this, _drainTimer)) {
      return;
    }
    const stallTime = this._getOption("batchMaxCount") === 1 ? 0 : this._getOption("batchStallTime");
    __privateSet(this, _drainTimer, setTimeout(() => {
      __privateSet(this, _drainTimer, null);
      const payloads = __privateGet(this, _payloads);
      __privateSet(this, _payloads, []);
      while (payloads.length) {
        const batch = [payloads.shift()];
        while (payloads.length) {
          if (batch.length === __privateGet(this, _options3).batchMaxCount) {
            break;
          }
          batch.push(payloads.shift());
          const bytes2 = JSON.stringify(batch.map((p) => p.payload));
          if (bytes2.length > __privateGet(this, _options3).batchMaxSize) {
            payloads.unshift(batch.pop());
            break;
          }
        }
        (async () => {
          const payload = batch.length === 1 ? batch[0].payload : batch.map((p) => p.payload);
          this.emit("debug", { action: "sendRpcPayload", payload });
          try {
            const result = await this._send(payload);
            this.emit("debug", { action: "receiveRpcResult", result });
            for (const { resolve, reject, payload: payload2 } of batch) {
              if (this.destroyed) {
                reject(makeError("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: payload2.method }));
                continue;
              }
              const resp = result.filter((r) => r.id === payload2.id)[0];
              if (resp == null) {
                const error = makeError("missing response for request", "BAD_DATA", {
                  value: result,
                  info: { payload: payload2 }
                });
                this.emit("error", error);
                reject(error);
                continue;
              }
              if ("error" in resp) {
                reject(this.getRpcError(payload2, resp));
                continue;
              }
              resolve(resp.result);
            }
          } catch (error) {
            this.emit("debug", { action: "receiveRpcError", error });
            for (const { reject } of batch) {
              reject(error);
            }
          }
        })();
      }
    }, stallTime));
  };
  class JsonRpcApiPollingProvider extends JsonRpcApiProvider {
    constructor(network, options) {
      super(network, options);
      __privateAdd(this, _pollingInterval);
      let pollingInterval = this._getOption("pollingInterval");
      if (pollingInterval == null) {
        pollingInterval = defaultOptions.pollingInterval;
      }
      __privateSet(this, _pollingInterval, pollingInterval);
    }
    _getSubscriber(sub) {
      const subscriber = super._getSubscriber(sub);
      if (isPollable(subscriber)) {
        subscriber.pollingInterval = __privateGet(this, _pollingInterval);
      }
      return subscriber;
    }
    /**
     *  The polling interval (default: 4000 ms)
     */
    get pollingInterval() {
      return __privateGet(this, _pollingInterval);
    }
    set pollingInterval(value) {
      if (!Number.isInteger(value) || value < 0) {
        throw new Error("invalid interval");
      }
      __privateSet(this, _pollingInterval, value);
      this._forEachSubscriber((sub) => {
        if (isPollable(sub)) {
          sub.pollingInterval = __privateGet(this, _pollingInterval);
        }
      });
    }
  }
  _pollingInterval = new WeakMap();
  function spelunkData(value) {
    if (value == null) {
      return null;
    }
    if (typeof value.message === "string" && value.message.match(/revert/i) && isHexString(value.data)) {
      return { message: value.message, data: value.data };
    }
    if (typeof value === "object") {
      for (const key in value) {
        const result = spelunkData(value[key]);
        if (result) {
          return result;
        }
      }
      return null;
    }
    if (typeof value === "string") {
      try {
        return spelunkData(JSON.parse(value));
      } catch (error) {
      }
    }
    return null;
  }
  function _spelunkMessage(value, result) {
    if (value == null) {
      return;
    }
    if (typeof value.message === "string") {
      result.push(value.message);
    }
    if (typeof value === "object") {
      for (const key in value) {
        _spelunkMessage(value[key], result);
      }
    }
    if (typeof value === "string") {
      try {
        return _spelunkMessage(JSON.parse(value), result);
      } catch (error) {
      }
    }
  }
  function spelunkMessage(value) {
    const result = [];
    _spelunkMessage(value, result);
    return result;
  }
  class BrowserProvider extends JsonRpcApiPollingProvider {
    /**
     *  Connect to the %%ethereum%% provider, optionally forcing the
     *  %%network%%.
     */
    constructor(ethereum, network, _options4) {
      const options = Object.assign({}, _options4 != null ? _options4 : {}, { batchMaxCount: 1 });
      assertArgument(ethereum && ethereum.request, "invalid EIP-1193 provider", "ethereum", ethereum);
      super(network, options);
      __privateAdd(this, _request2);
      __privateSet(this, _request2, async (method, params) => {
        const payload = { method, params };
        this.emit("debug", { action: "sendEip1193Request", payload });
        try {
          const result = await ethereum.request(payload);
          this.emit("debug", { action: "receiveEip1193Result", result });
          return result;
        } catch (e) {
          const error = new Error(e.message);
          error.code = e.code;
          error.data = e.data;
          error.payload = payload;
          this.emit("debug", { action: "receiveEip1193Error", error });
          throw error;
        }
      });
    }
    async send(method, params) {
      await this._start();
      return await super.send(method, params);
    }
    async _send(payload) {
      assertArgument(!Array.isArray(payload), "EIP-1193 does not support batch request", "payload", payload);
      try {
        const result = await __privateGet(this, _request2).call(this, payload.method, payload.params || []);
        return [{ id: payload.id, result }];
      } catch (e) {
        return [{
          id: payload.id,
          error: { code: e.code, data: e.data, message: e.message }
        }];
      }
    }
    getRpcError(payload, error) {
      error = JSON.parse(JSON.stringify(error));
      switch (error.error.code || -1) {
        case 4001:
          error.error.message = `ethers-user-denied: ${error.error.message}`;
          break;
        case 4200:
          error.error.message = `ethers-unsupported: ${error.error.message}`;
          break;
      }
      return super.getRpcError(payload, error);
    }
    /**
     *  Resolves to ``true`` if the provider manages the %%address%%.
     */
    async hasSigner(address) {
      if (address == null) {
        address = 0;
      }
      const accounts = await this.send("eth_accounts", []);
      if (typeof address === "number") {
        return accounts.length > address;
      }
      address = address.toLowerCase();
      return accounts.filter((a) => a.toLowerCase() === address).length !== 0;
    }
    async getSigner(address) {
      if (address == null) {
        address = 0;
      }
      if (!await this.hasSigner(address)) {
        try {
          await __privateGet(this, _request2).call(this, "eth_requestAccounts", []);
        } catch (error) {
          const payload = error.payload;
          throw this.getRpcError(payload, { id: payload.id, error });
        }
      }
      return await super.getSigner(address);
    }
  }
  _request2 = new WeakMap();
  var AuthType = /* @__PURE__ */ ((AuthType2) => {
    AuthType2[AuthType2["WALLET"] = 0] = "WALLET";
    AuthType2[AuthType2["PASSKEY"] = 1] = "PASSKEY";
    return AuthType2;
  })(AuthType || {});
  const ALPINE_HEALTHCARE = "0x20a8d2B24927166cCfb2c22848cD519A7E91Cea5";
  const ALPINE_HEALTHCARE_ABI = [{ "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "checkActive", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "getAccessPackage", "outputs": [{ "internalType": "string", "name": "", "type": "string" }, { "internalType": "string", "name": "", "type": "string" }, { "internalType": "string", "name": "", "type": "string" }, { "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "getPDOSRoot", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_key1", "type": "string" }, { "internalType": "string", "name": "_key2", "type": "string" }, { "internalType": "string", "name": "_key3", "type": "string" }, { "internalType": "string", "name": "_key4", "type": "string" }], "name": "onboard", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_newHash", "type": "string" }], "name": "updatePDOSRoot", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
  class Auth extends Module {
    constructor(core, config) {
      super(core);
      __publicField(this, "authType");
      __publicField(this, "info", {
        isAuthenticated: false,
        isActive: false,
        pdosRoot: void 0
      });
      __publicField(this, "credentialId");
      __publicField(this, "publicKey");
      __publicField(this, "ethersProvider");
      __publicField(this, "eip1193Provider");
      this.config = config;
      makeObservable(this, {
        info: observable,
        publicKey: observable
      });
      this.setProviders(config.eip1193Provider);
    }
    async initializePasskeyUser(credentialId) {
      this.authType = 1;
      await this.setCredentialId(credentialId);
      this.authType = 1;
      this.info.isAuthenticated = true;
      this.info.isActive = true;
      return;
    }
    async initializeWalletUser() {
      this.authType = 0;
      let addresses = [];
      await this.disconnectWalletUser();
      addresses = await this.eip1193Provider.request({ method: "eth_requestAccounts" });
      if (addresses.length > 0) {
        this.publicKey = addresses[0];
        await this.initInfoForWalletUser();
      }
      return;
    }
    async disconnectWalletUser() {
      await this.eip1193Provider.disconnect();
      this.info = {
        isActive: false,
        isAuthenticated: false,
        pdosRoot: void 0
      };
      this.publicKey = void 0;
    }
    /** Passkey Support */
    async setCredentialId(credentialId) {
      var _a2;
      this.credentialId = credentialId;
      if (this.credentialId === "test") {
        const initCredentialId = (_a2 = this.core.test) == null ? void 0 : _a2.initCredentialId;
        const userRes = await axios.get(this.core.gatewayURL + "/pdos/users/" + initCredentialId);
        const user = userRes.data;
        await this.core.tree.root.init(user[1].hash_id);
      } else {
        const userRes = await axios.get(this.core.gatewayURL + "/pdos/users/" + this.credentialId);
        const user = userRes.data;
        await this.core.tree.root.init(user[1].hash_id);
      }
    }
    /** Wallet Support */
    async initInfoForWalletUser() {
      this.authType = 0;
      const isActive = await this.checkIsActive();
      const pdosRoot = await this.getPDOSRoot();
      console.log("pdosroot: ", pdosRoot);
      this.info.isActive = isActive;
      if (!pdosRoot) {
        try {
          const newUser = await fetch(this.core.gatewayURL + "/auth/register-wallet-user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              publicKey: this.publicKey
            })
          });
          const newUserResponse = await newUser.json();
          const newPDOSRoot = newUserResponse.hash_id;
          console.log("onboarding with pdos root: ", newPDOSRoot);
          await this.onboard();
          this.info.pdosRoot = newPDOSRoot;
          this.info.isActive = true;
        } catch (e) {
          throw new Error("failed registering user");
        }
      } else {
        const pdosRoot2 = await this.getPDOSRoot();
        this.info.pdosRoot = pdosRoot2;
      }
      const root = await this.core.tree.root.init(this.info.pdosRoot);
      console.log("root after initalizing tree: ", root);
      if (this.info.pdosRoot !== root) {
        console.log("updating pdos root with: ", root);
        await this.updatePDOSRoot(root);
        this.info.pdosRoot = root;
      }
      this.info.isAuthenticated = true;
    }
    async getAccessPackage() {
      return {
        key1: "key1",
        key2: "key2",
        key3: "key3",
        key4: "key4"
      };
    }
    async checkIsActive() {
      if (!this.ethersProvider) {
        return;
      }
      const signer = await this.ethersProvider.getSigner();
      const contract = new Contract(ALPINE_HEALTHCARE, ALPINE_HEALTHCARE_ABI, signer);
      const isActiveReturnValue = await contract.checkActive(this.publicKey);
      return isActiveReturnValue;
    }
    async onboard() {
      if (!this.ethersProvider) {
        return;
      }
      const signer = await this.ethersProvider.getSigner();
      const contract = new Contract(ALPINE_HEALTHCARE, ALPINE_HEALTHCARE_ABI, signer);
      const tx = await contract.onboard(
        "key1",
        "key2",
        "key3",
        "key4"
      );
      const receipt = await tx.wait();
      console.log("receipt", receipt);
      console.log("hash", receipt.hash);
    }
    async getPDOSRoot() {
      if (!this.ethersProvider) {
        console.log("no ethers provider");
        return;
      }
      const signer = await this.ethersProvider.getSigner();
      const contract = new Contract(ALPINE_HEALTHCARE, ALPINE_HEALTHCARE_ABI, signer);
      const pdosRoot = await contract.getPDOSRoot(this.publicKey);
      return pdosRoot;
    }
    async updatePDOSRoot(newHash) {
      if (!this.ethersProvider) {
        return;
      }
      const signer = await this.ethersProvider.getSigner();
      const contract = new Contract(ALPINE_HEALTHCARE, ALPINE_HEALTHCARE_ABI, signer);
      const tx = await contract.updatePDOSRoot(newHash);
      const receipt = await tx.wait();
      console.log("receipt", receipt);
      console.log("hash", receipt.hash);
      this.info.pdosRoot = newHash;
    }
    async setProviders(eip1193Provider) {
      this.eip1193Provider = eip1193Provider;
      this.ethersProvider = new BrowserProvider(eip1193Provider);
    }
    async setEip1193Provider(provider) {
      this.eip1193Provider = provider;
    }
    async setEthersProvider(provider) {
      this.ethersProvider = provider;
    }
    async setPublicKey(publicKey) {
      this.publicKey = publicKey;
    }
  }
  const convertCamelCaseToSnakeCase = (str) => {
    return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  };
  class DataRequest extends Module {
    constructor(core, config, dependencyInjection) {
      super(core);
      __publicField(this, "HealthKit");
      __publicField(this, "reactNativeHealthKit");
      __publicField(this, "MetricMap", {});
      this.config = config;
      this.dependencyInjection = dependencyInjection;
      this.reactNativeHealthKit = dependencyInjection.reactNativeHealthKit;
      this.HealthKit = this.reactNativeHealthKit.default;
      Object.keys(this.reactNativeHealthKit.HKQuantityTypeIdentifier).forEach((key) => {
        const pascalCaseKey = convertCamelCaseToSnakeCase(key);
        this.MetricMap[pascalCaseKey] = this.reactNativeHealthKit.HKQuantityTypeIdentifier[key];
      });
    }
    async start() {
      const isAvailable = await this.reactNativeHealthKit.default.isHealthDataAvailable();
      if (!isAvailable) {
        console.error("Healthkit is not available on this device");
      }
    }
    async checkAccess(metrics) {
      try {
        if (metrics.length === 0) {
          return;
        }
        await this.HealthKit.requestAuthorization(metrics.map((metric) => this.MetricMap[metric]));
      } catch (e) {
        console.error("Error in getting access to metrics");
      }
    }
    async getTodaysValue(metric) {
      const today = /* @__PURE__ */ new Date();
      const startOfDay = new Date(today);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(today);
      endOfDay.setHours(23, 59, 59, 999);
      const response = await this.HealthKit.queryQuantitySamples(this.MetricMap[metric], {
        from: startOfDay,
        to: endOfDay
      });
      if (response.length > 0) {
        const quantity = response[0].quantity;
        return quantity;
      }
      return 0;
    }
  }
  const MapConfig = {
    appManager: AppManager,
    notification: Notification$1,
    auth: Auth,
    dataRequest: DataRequest
  };
  class Authentication extends Constant {
    constructor() {
      super();
      __publicField(this, "state", 4);
    }
    update(state) {
      this.state = state;
    }
  }
  class Connection extends Constant {
    constructor() {
      super(...arguments);
      __publicField(this, "state", 3);
    }
    update(state) {
      this.state = state;
    }
  }
  class ConstantsManager {
    constructor() {
      __publicField(this, "authentication", new Authentication());
      __publicField(this, "connection", new Connection());
      __publicField(this, "platform", new Platform());
    }
  }
  const logger = {
    tree: (...args) => {
    }
  };
  const getEdgeInfo = (edgeType) => {
    const edgeSplit = edgeType.split("_");
    return {
      coreType: edgeSplit[2],
      instanceType: edgeSplit.length > 3 ? edgeSplit[3] : void 0
    };
  };
  const NetworkMapper = {};
  const addNodeToNetworkMapper = (nodeType, nodeClass) => NetworkMapper[nodeType] = nodeClass;
  const traverseTree = (root, callback) => {
    callback(root);
    const edgeNodes = root.edges ? Object.values(root.edges) : void 0;
    if (edgeNodes) {
      Object.values(root.edges).forEach((node) => {
        traverseTree(node, callback);
      });
    }
  };
  const doesPDFSNodeExist = (name, root) => {
    let foundNode = false;
    traverseTree(root, (node) => {
      if (node._nodeType.toLowerCase().includes(name)) {
        foundNode = true;
      }
    });
    return foundNode;
  };
  const getFromPdfs = async (hash2) => {
    const response = await fetch(
      `${pdos2().gatewayURL + "/pdos"}?hash=${hash2}`
    );
    return JSON.parse(await response.json());
  };
  const addToPdfs = async (treePath, newNodeData, newNodeType) => {
    const node_data = JSON.stringify(newNodeData);
    const addRes = await fetch(pdos2().gatewayURL + "/pdos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        new_node_data: node_data,
        new_node_type: newNodeType,
        tree_path: treePath
      })
    });
    const addResJson = await addRes.json();
    return {
      rawNode: addResJson.new_node,
      hash: addResJson.new_node.hash_id,
      newTreePath: addResJson.new_tree_path,
      oldTreePath: [...treePath, addResJson.new_node.hash_id]
    };
  };
  class PDFSNode {
    constructor(core, treePath, nodeType, hash2) {
      __publicField(this, "_nodeType", "");
      __publicField(this, "_hash", "");
      __publicField(this, "_treePath", []);
      __publicField(this, "_treePathInclusive", []);
      __publicField(this, "_childrenRefreshMap", {});
      __publicField(this, "edges", {});
      __publicField(this, "edgeArray", []);
      __publicField(this, "_rawNode", {});
      __publicField(this, "_rawNodeUpdate", {});
      this.core = core;
      this._treePath = treePath;
      this._hash = hash2 || "";
      this._nodeType = nodeType;
      makeObservable(this, {
        edges: observable,
        _rawNode: observable,
        _treePath: observable,
        _treePathInclusive: observable
      });
      reaction(() => ({
        treePathInclusive: this._treePathInclusive
      }), ({ treePathInclusive }) => {
        Object.values(this.edges).forEach((edge) => {
          edge._treePath = treePathInclusive;
          edge._treePathInclusive = [...treePathInclusive, edge._hash];
        });
      });
    }
    getData() {
      return {
        hashId: this._hash,
        rawNode: this._rawNode
      };
    }
    getChildren() {
      return Object.values(this.edges);
    }
    onNodeLoad() {
    }
    get node() {
      return (async () => {
        if (this._hash) {
          this._rawNode = await getFromPdfs(this._hash);
          this._nodeType = this._rawNode.type;
          this._treePathInclusive = [...this._treePath, this._hash];
          logger.tree("Existing node from pdfs: ", this._nodeType);
          logger.tree("Raw node: ", this._rawNode);
          logger.tree("Node hash: ", this._hash);
          logger.tree("Node type: ", this._nodeType);
          logger.tree("Node tree path of : ", this._treePath);
        } else {
          const newNode = await addToPdfs(this._treePath, {
            ...this._rawNode,
            ...this._rawNodeUpdate
          }, this._nodeType);
          this._rawNode = newNode.rawNode;
          this._hash = newNode.hash;
          this._treePathInclusive = newNode.newTreePath;
          this._treePath = [...newNode.newTreePath].slice(0, -1);
          this._nodeType = newNode.rawNode.type;
          logger.tree("Added node to pdfs: ", this._nodeType);
          logger.tree("Raw node: ", this._rawNode);
          logger.tree("Node hash: ", this._hash);
          logger.tree("Node type: ", this._nodeType);
          logger.tree("Node tree path of : ", this._treePath);
        }
        this.onNodeLoad();
      })();
    }
    setRawNodeUpdate(rawNode) {
      this._rawNodeUpdate = rawNode;
    }
    get refreshChildren() {
      logger.tree("Parent hash: ", this._hash);
      logger.tree("Parent type: ", this._nodeType);
      logger.tree("Parent rawnode: ", this._rawNode);
      if (this._rawNode["edges"] === void 0 || this._rawNode["edges"] === null || Object.keys(this._rawNode["edges"]).length === 0) {
        return;
      }
      const hasEdges = Object.values(this._rawNode.edges ?? {}).find((edge) => edge !== null);
      if (!hasEdges) {
        logger.tree(`${this._hash} has uninitalized children`);
      }
      return (async () => {
        for (const [key, value] of Object.entries(this._rawNode.edges)) {
          const { coreType, instanceType } = getEdgeInfo(key);
          if (!NetworkMapper[coreType]) {
            continue;
          }
          let nodeName = "N_" + coreType;
          if (instanceType) {
            nodeName += "_I";
          }
          const hashId = (value == null ? void 0 : value.child_hash_id) ?? "";
          const NodeClass = NetworkMapper[coreType];
          const currentTreePath = [...this._treePath, this._hash];
          const child = new NodeClass(
            this.core,
            currentTreePath,
            nodeName,
            hashId
          );
          await child.node;
          await child.refreshTree(this._treePathInclusive);
          this.edges[key] = child;
          this.edgeArray.push(child);
          logger.tree("Finished adding child node", Object.keys(this.edges));
          await child.refreshChildren;
        }
      })();
    }
    async refreshTree(previousTreePath) {
      await this.core.tree.root.refresh(
        previousTreePath,
        this._treePathInclusive
      );
    }
    async update(rawNodeUpdate) {
      this._rawNodeUpdate = rawNodeUpdate;
      this._hash = "";
      const previousTreePath = [...this._treePathInclusive.slice(0, -1)];
      await this.node;
      await this.refreshTree(previousTreePath);
      this._rawNodeUpdate = {};
      await this.core.tree.root.syncLocalRootHash();
    }
    async addChild(ChildClass, instanceName, nodeUpdate, edgeUpdate) {
      logger.tree("tree path inclusive: ", this._treePathInclusive);
      const newChild = new ChildClass(
        this.core,
        this._treePathInclusive,
        instanceName,
        ""
      );
      const edges = {};
      if (edgeUpdate) {
        Object.entries(edgeUpdate).forEach(([key, value]) => {
          edges[key] = {
            child_hash_id: value
          };
        });
      }
      newChild.setRawNodeUpdate({
        ...nodeUpdate,
        edges
      });
      await newChild.node;
      await newChild.refreshTree(this._treePathInclusive);
      let edgeName = `e_out_${ChildClass.name}`;
      if (instanceName) {
        edgeName += `_${instanceName}`;
      }
      this.edges[edgeName] = newChild;
      this.edgeArray.push(newChild);
      await newChild.refreshChildren;
      return newChild;
    }
  }
  class DataGroup extends PDFSNode {
    constructor(core, treePath, instanceType, hash2) {
      super(core, treePath, "N_DataGroup_" + instanceType, hash2);
    }
    async updateData() {
      var _a2, _b, _c;
      const updateValue = await ((_c = (_b = (_a2 = this.core) == null ? void 0 : _a2.modules) == null ? void 0 : _b.dataRequest) == null ? void 0 : _c.getTodaysValue(this._rawNode.metric));
      if (!updateValue) {
        return;
      }
      if (updateValue !== void 0) {
        const records = this._rawNode.records;
        records[(/* @__PURE__ */ new Date()).getTime()] = updateValue;
        await this.update({
          ...this._rawNode,
          records
        });
      }
    }
  }
  __publicField(DataGroup, "_nodeType", "N_DataGroup_I");
  const toCamel = (s) => {
    const camelCase = s.replace(/([-_][a-z])/ig, ($1) => {
      return $1.toUpperCase().replace("-", "").replace("_", "");
    });
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  };
  class DataManifest extends PDFSNode {
    constructor(core, treePath, instanceType, hash2) {
      super(core, treePath, "N_DataManifest", hash2);
      addNodeToNetworkMapper("DataGroup", DataGroup);
    }
    async getDataGroup(metric) {
      return Object.values(this.edges).find((edge) => edge._rawNode.metric === metric);
    }
    async addDataGroup(dataMetric = "") {
      await this.addChild(
        DataGroup,
        toCamel(dataMetric),
        {
          "metric": dataMetric,
          "records": {}
        }
      );
    }
  }
  __publicField(DataManifest, "_nodeType", "N_DataManifest");
  class Inbox extends PDFSNode {
    constructor(core, treePath, _, hash2) {
      super(core, treePath, "N_Inbox", hash2);
    }
    async addMessage(sender, message) {
      const newMessages = [...this._rawNode.unread_messages];
      newMessages.push({
        message,
        sentOn: (/* @__PURE__ */ new Date()).toISOString(),
        sender
      });
      try {
        await this.update({
          ...this._rawNode,
          "unread_messages": newMessages
        });
      } catch (e) {
        console.log("error: ", e);
      }
    }
    async clearMessages() {
      try {
        await this.update({
          ...this._rawNode,
          "unread_messages": []
        });
      } catch (e) {
        console.log("error: ", JSON.stringify(e));
      }
    }
  }
  __publicField(Inbox, "_nodeType", "N_Inbox");
  class TreatmentBinary extends PDFSNode {
    constructor(core, treePath, instanceType, hash2) {
      super(core, treePath, "N_TreatmentBinary", hash2);
    }
    onNodeLoad() {
      this.checkDataAccess();
    }
    get dataMetrics() {
      return Object.keys(this._rawNode.data_manifest);
    }
    checkDataAccess() {
      var _a2, _b, _c;
      (_c = (_b = (_a2 = this.core) == null ? void 0 : _a2.modules) == null ? void 0 : _b.dataRequest) == null ? void 0 : _c.checkAccess(this.dataMetrics);
    }
    async createDataGroup(metric) {
      const rootNode = this.core.tree.root;
      if (!doesPDFSNodeExist(toCamel(metric), rootNode)) {
        await rootNode.edges.e_out_DataManifest.addDataGroup(
          metric
        );
      }
    }
    async syncData() {
      for (let i = 0; i < this.dataMetrics.length; i++) {
        const metric = this.dataMetrics[i];
        const dataGroups = this.core.tree.root.edges.e_out_DataManifest.edges;
        const getDataGroup = (metric2) => Object.values(dataGroups).find(
          (node) => node._nodeType.toLowerCase().includes(toCamel(metric2).toLowerCase())
        );
        if (!getDataGroup(metric)) {
          console.log("Creating data group for metric", metric);
          await this.createDataGroup(metric);
          console.log("finished creating data group", this.core.tree.root._hash);
        }
        const dataGroup = getDataGroup(metric);
        await dataGroup.updateData();
      }
    }
  }
  __publicField(TreatmentBinary, "_nodeType", "N_TreatmentBinary");
  class TreatmentInstance extends PDFSNode {
    constructor(core, treePath, instanceType, hash2) {
      super(core, treePath, "N_TreatmentInstance_" + instanceType, hash2);
    }
  }
  __publicField(TreatmentInstance, "_nodeType", "N_TreatmentInstance_I");
  class Treatment extends PDFSNode {
    constructor(core, treePath, instanceType, hash2) {
      super(core, treePath, "N_Treatment_" + instanceType, hash2);
      addNodeToNetworkMapper("TreatmentBinary", TreatmentBinary);
      addNodeToNetworkMapper("TreatmentInstance", TreatmentInstance);
    }
    async disable() {
      await this.update({
        "is_active": false
      });
    }
    async enable() {
      await this.update({
        "is_active": true
      });
    }
    async addInstance(messages = []) {
      var _a2, _b;
      const treatmentInstanceName = (/* @__PURE__ */ new Date()).toISOString();
      console.log("adding child with root hash: ", (_a2 = this.core.root) == null ? void 0 : _a2._hash);
      await this.addChild(
        TreatmentInstance,
        treatmentInstanceName,
        {
          "messages": messages.map((message) => ({ message, sender: this._nodeType, sentOn: (/* @__PURE__ */ new Date()).toISOString() })),
          "date": treatmentInstanceName
        }
      );
      console.log("added child with root hash: ", (_b = this.core.root) == null ? void 0 : _b._hash);
    }
  }
  __publicField(Treatment, "_nodeType", "N_Treatment_I");
  class TreatmentManifest extends PDFSNode {
    constructor(core, treePath, instanceType, hash2) {
      super(core, treePath, "N_TreatmentManifest", hash2);
      makeObservable(this, {
        addTreatment: action,
        treatments: computed
      });
      addNodeToNetworkMapper("Treatment", Treatment);
    }
    get treatments() {
      return Object.entries(this.edges).filter(([edgeType, edge]) => {
        if (edgeType.includes("Treatment")) {
          return true;
        }
        return false;
      }).map(([edgeType, edge]) => edge);
    }
    async addTreatment(treatmentName = "", treatmentBinaryHash = "", intakeObject = {}) {
      await this.addChild(
        Treatment,
        treatmentName,
        {
          "is_active": true,
          "active_on": (/* @__PURE__ */ new Date()).toISOString(),
          "intake": intakeObject
        },
        {
          "e_out_TreatmentBinary": treatmentBinaryHash
        }
      );
    }
  }
  __publicField(TreatmentManifest, "_nodeType", "N_TreatmentManifest");
  const getUserHashId = async (credential_id) => {
    const userRes = await axios.get(pdos2().gatewayURL + "/pdos/users/" + credential_id);
    const user = userRes.data;
    return user[1].hash_id;
  };
  class UserAccount extends PDFSNode {
    constructor(core) {
      super(core, [], "N_UserAccount");
      __publicField(this, "isRefreshing", false);
      __publicField(this, "isLoaded", false);
      __publicField(this, "lastUpdateTimestamp", 0);
      makeObservable(this, {
        isLoaded: observable,
        isRefreshing: observable
      });
      addNodeToNetworkMapper("TreatmentManifest", TreatmentManifest);
      addNodeToNetworkMapper("DataManifest", DataManifest);
      addNodeToNetworkMapper("Inbox", Inbox);
    }
    async checkPDOSTreeIsMostRecent() {
      var _a2, _b;
      let hashId;
      if (((_a2 = this.core.modules.auth) == null ? void 0 : _a2.authType) === AuthType.WALLET) {
        hashId = await ((_b = this.core.modules.auth) == null ? void 0 : _b.getPDOSRoot());
      } else {
        hashId = await getUserHashId(this._rawNode.credentials[0].id);
      }
      if (hashId === this._hash) {
        return true;
      }
      this.edges = {};
      await this.init(hashId);
      return false;
    }
    async syncLocalRootHash() {
      var _a2, _b;
      console.log("hi");
      if (((_a2 = this.core.modules.auth) == null ? void 0 : _a2.authType) === AuthType.WALLET) {
        const hashId = await ((_b = this.core.modules.auth) == null ? void 0 : _b.getPDOSRoot());
        console.log("syncing root hash");
        console.log("old hash: ", hashId);
        console.log("new hash: ", this._hash);
        if (this._hash !== hashId) {
          await this.core.modules.auth.updatePDOSRoot(this._hash);
        }
      }
    }
    async init(hash2) {
      this.isLoaded = false;
      this._hash = hash2;
      await this.node;
      await this.refreshChildren;
      this.isLoaded = true;
      return this._hash;
    }
    async refresh(oldTreePath, updateTreePath) {
      this.isRefreshing = true;
      const updateFunctions = [];
      const getTreeUpdateFunctions = (currentNode, currentDepth, oldTreePath2, updatedTreePath) => {
        updateFunctions.push(
          async () => {
            const newTreePath = updatedTreePath.slice(0, currentDepth);
            currentNode._hash = updatedTreePath[currentDepth];
            currentNode._treePath = newTreePath;
            currentNode._treePathInclusive = [...newTreePath, currentNode._hash];
            await currentNode.node;
          }
        );
        const nextDepth = currentDepth + 1;
        if (nextDepth > oldTreePath2.length - 1) {
          return;
        }
        const nextHash = oldTreePath2[nextDepth];
        const nodeInQuestion = Object.values(currentNode.edges).find((edge) => {
          return edge._hash === nextHash;
        });
        if (!nodeInQuestion) {
          throw new Error("No Edge Found");
        }
        return getTreeUpdateFunctions(
          nodeInQuestion,
          nextDepth,
          oldTreePath2,
          updateTreePath
        );
      };
      await getTreeUpdateFunctions(this, 0, oldTreePath, updateTreePath);
      for (const i in updateFunctions.reverse()) {
        await updateFunctions[i]();
      }
      this.isRefreshing = false;
      this._hash = updateTreePath[0];
      this.core.tree.root = this;
      console.log("finished refreshing tree", JSON.stringify(this.core.tree.root._hash));
    }
  }
  class ConfigValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
    }
  }
  class ModuleNotFoundError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
    }
  }
  configure({
    enforceActions: "never"
  });
  let mainCore;
  let pdos2 = () => {
    return mainCore;
  };
  const _Core = class _Core {
    constructor(config) {
      __publicField(this, "root");
      __publicField(this, "constants");
      __publicField(this, "modules", {});
      __publicField(this, "stores", {});
      __publicField(this, "delayedInit", []);
      __publicField(this, "started", false);
      __publicField(this, "isComputeNode", false);
      __publicField(this, "gatewayURL", "");
      __publicField(this, "test", {});
      this.config = config;
      this.validateConfig(config);
      mainCore = this;
      makeAutoObservable(this);
      this.constants = new ConstantsManager();
      this.constants;
      this.onAuthChanged();
      try {
        this.isComputeNode = this.config.context.isComputeNode ?? false;
        this.gatewayURL = this.config.context.gatewayURL ?? "";
        this.test = this.config.test ?? {};
      } catch {
        throw new ConfigValidationError("Failed to parse context");
      }
      console.log("# pdos config : ", config);
    }
    /**
     * Assures that the instantiation object given to pdo is valid
     * and will boot up a healthy instance of pdos
     * 
     * @param config Instantiation object given to pdos
     */
    validateConfig(config) {
      const acceptedEnvs = ["production", "development", "test", "sepolia"];
      if (config.env && !acceptedEnvs.includes(config.env)) {
        throw new ConfigValidationError("Invalid environment given.");
      }
    }
    get initConfig() {
      return this.config;
    }
    async onAuthChanged() {
      reaction(
        () => this.constants.authentication.state,
        async (arg) => {
          if (!this.started) {
            return;
          }
        }
      );
    }
    get tree() {
      return this.stores;
    }
    /*************************
     * Module Lifecycle Methods 
     *************************/
    /**
     * Initializes and starts the modules requested by the client. 
     * Then,
     * Instatiates and creates the client stores.
     *  
     * @param dependencyInjection 
     */
    async start(dependencyInjection) {
      const requestedModules = this.config.modules;
      const independentModules = [];
      const dependentModules = [];
      const missingModuleDepdendencies = (modules2) => {
        return Array.from(Object.keys(modules2)).find((moduleName) => {
          const dependencies = modules2[moduleName].dependencies;
          if (!dependencies) {
            independentModules.push(moduleName);
            return false;
          }
          return !!dependencies.find((dependency) => {
            if (!modules2[dependency.package])
              return true;
            else {
              if (modules2[dependency.package].version !== dependency.version)
                return true;
              dependentModules.push(moduleName);
              return false;
            }
          });
        });
      };
      if (missingModuleDepdendencies(requestedModules))
        throw new Error("Bad Module Configuration! Missing dependencies");
      const modules = independentModules.concat(dependentModules);
      const loadedModules = [];
      modules.forEach((moduleName) => {
        const moduleConfig = requestedModules[moduleName];
        const Module2 = MapConfig[moduleName];
        if (!Module2) {
          throw new ModuleNotFoundError(`Module ${moduleName} not found in MapConfig`);
        }
        let dependencies;
        if (dependencyInjection) {
          dependencies = dependencyInjection[moduleName];
        }
        Module2.init(this, moduleName, moduleConfig, dependencies);
        loadedModules.push((async () => {
          try {
            await this.modules[moduleName].start(false);
            console.log(`# ${moduleName} : started`);
          } catch (e) {
            console.log(`# ${moduleName} : failed to start`, "color:red", e);
          }
        })());
      });
      await Promise.all(loadedModules);
      await this.startStores();
      await this.postStart();
      this.delayedInit.forEach((func) => func());
      console.log("# pdos : successfully started");
      this.started = true;
      return this;
    }
    /**
     * Called after all modules started and stores instantiated.
     */
    async postStart() {
      return Promise.all(this.liveModules.map((m) => {
        if (m.postStart)
          m.postStart();
      }));
    }
    async reset() {
      return Promise.all(this.liveModules.map((m) => m.restart()));
    }
    /*************************
     * Module Helper Methods
     *************************/
    /**
     * Returns current modules on the core.
     */
    get liveModules() {
      return Array.from(Object.keys(this.config.modules)).map((moduleName) => {
        return this.modules[moduleName];
      });
    }
    /*************************
     * Store Lifecycle Methods 
     *************************/
    async startStores() {
      const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toLowerCase() + word.slice(1);
      };
      this.root = new _Core.rootInstance(this);
      if (_Core.rootInstance.name) {
        this.stores[capitalizeFirstLetter(_Core.rootInstance.name)] = this.root;
      } else {
        this.stores[_Core.rootInstance.constructor.name] = this.root;
        this.stores[_Core.rootInstance.constructor.name]._();
      }
      this.stores["root"] = this.root;
    }
  };
  __publicField(_Core, "rootInstance", UserAccount);
  let Core = _Core;
  const sync = async () => {
    if (pdos2().root === void 0) {
      return;
    }
    const treatmentBinaries = [];
    const metricsFound = {};
    traverseTree(pdos2().root, (node) => {
      if (node._nodeType.toLowerCase().includes("treatmentbinary")) {
        if (!metricsFound[node._rawNode.metric]) {
          treatmentBinaries.push(node);
          metricsFound[node._rawNode.metric] = true;
        }
      }
    });
    for (let i = 0; i < treatmentBinaries.length; i++) {
      const treatmentBinary = treatmentBinaries[i];
      await treatmentBinary.syncData();
      break;
    }
    await pdos2().tree.root.syncLocalRootHash();
  };
  const getAllRecords = () => {
    const dataManifest = pdos2().stores.userAccount.edges.e_out_DataManifest;
    const metrics = {};
    if (!dataManifest) {
      return {};
    }
    Object.values(dataManifest.edges).forEach((node) => {
      metrics[node._rawNode.metric] = node._rawNode.records;
    });
    return metrics;
  };
  const clearMessages = async () => {
    await pdos2().stores.userAccount.edges.e_out_Inbox.clearMessages();
  };
  const getMessages = async () => {
    return pdos2().stores.userAccount.edges.e_out_Inbox._rawNode.unread_messages;
  };
  const addTreatment = async (name, hashId, intake) => {
    await pdos2().stores.userAccount.edges.e_out_TreatmentManifest.addTreatment(name, hashId, intake);
    console.log("callign sync");
    await pdos2().tree.root.syncLocalRootHash();
  };
  const getActiveTreatments = () => {
    var _a2, _b, _c;
    const activeTreatments = ((_c = (_b = (_a2 = pdos2().stores.userAccount) == null ? void 0 : _a2.edges) == null ? void 0 : _b.e_out_TreatmentManifest) == null ? void 0 : _c.treatments) ?? [];
    return activeTreatments;
  };
  const getTreatment = (treatment) => {
    return getActiveTreatments().find((t) => {
      return t._rawNode.treatment === treatment;
    });
  };
  const getTreatmentInstances = (treatment) => {
    const activeTreatment = getTreatment(treatment);
    if (!activeTreatment) {
      return [];
    }
    const instances = Object.entries(activeTreatment.edges).filter(([key, value]) => {
      return key.startsWith("e_out_TreatmentInstance");
    });
    return instances.map(([key, value]) => {
      return value;
    });
  };
  const actions = {
    inbox: {
      getMessages,
      clearMessages
    },
    treatments: {
      getActiveTreatments,
      getTreatmentInstances,
      addTreatment
    },
    data: {
      sync,
      getAllRecords
    }
  };
  exports.Core = Core;
  exports.PDFSNode = PDFSNode;
  exports.actions = actions;
  exports.default = pdos2;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  return exports;
}({});
