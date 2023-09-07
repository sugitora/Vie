exports.id = 5655;
exports.ids = [5655];
exports.modules = {

/***/ 91217:
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
     true ? factory(exports) :
    0;
}(this, (function (exports) { 'use strict';

    var __assign = (undefined && undefined.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    // playground: stackblitz.com/edit/countup-typescript
    var CountUp = /** @class */ (function () {
        function CountUp(target, endVal, options) {
            var _this = this;
            this.target = target;
            this.endVal = endVal;
            this.options = options;
            this.version = '2.0.8';
            this.defaults = {
                startVal: 0,
                decimalPlaces: 0,
                duration: 2,
                useEasing: true,
                useGrouping: true,
                smartEasingThreshold: 999,
                smartEasingAmount: 333,
                separator: ',',
                decimal: '.',
                prefix: '',
                suffix: ''
            };
            this.finalEndVal = null; // for smart easing
            this.useEasing = true;
            this.countDown = false;
            this.error = '';
            this.startVal = 0;
            this.paused = true;
            this.count = function (timestamp) {
                if (!_this.startTime) {
                    _this.startTime = timestamp;
                }
                var progress = timestamp - _this.startTime;
                _this.remaining = _this.duration - progress;
                // to ease or not to ease
                if (_this.useEasing) {
                    if (_this.countDown) {
                        _this.frameVal = _this.startVal - _this.easingFn(progress, 0, _this.startVal - _this.endVal, _this.duration);
                    }
                    else {
                        _this.frameVal = _this.easingFn(progress, _this.startVal, _this.endVal - _this.startVal, _this.duration);
                    }
                }
                else {
                    if (_this.countDown) {
                        _this.frameVal = _this.startVal - ((_this.startVal - _this.endVal) * (progress / _this.duration));
                    }
                    else {
                        _this.frameVal = _this.startVal + (_this.endVal - _this.startVal) * (progress / _this.duration);
                    }
                }
                // don't go past endVal since progress can exceed duration in the last frame
                if (_this.countDown) {
                    _this.frameVal = (_this.frameVal < _this.endVal) ? _this.endVal : _this.frameVal;
                }
                else {
                    _this.frameVal = (_this.frameVal > _this.endVal) ? _this.endVal : _this.frameVal;
                }
                // decimal
                _this.frameVal = Number(_this.frameVal.toFixed(_this.options.decimalPlaces));
                // format and print value
                _this.printValue(_this.frameVal);
                // whether to continue
                if (progress < _this.duration) {
                    _this.rAF = requestAnimationFrame(_this.count);
                }
                else if (_this.finalEndVal !== null) {
                    // smart easing
                    _this.update(_this.finalEndVal);
                }
                else {
                    if (_this.callback) {
                        _this.callback();
                    }
                }
            };
            // default format and easing functions
            this.formatNumber = function (num) {
                var neg = (num < 0) ? '-' : '';
                var result, x1, x2, x3;
                result = Math.abs(num).toFixed(_this.options.decimalPlaces);
                result += '';
                var x = result.split('.');
                x1 = x[0];
                x2 = x.length > 1 ? _this.options.decimal + x[1] : '';
                if (_this.options.useGrouping) {
                    x3 = '';
                    for (var i = 0, len = x1.length; i < len; ++i) {
                        if (i !== 0 && (i % 3) === 0) {
                            x3 = _this.options.separator + x3;
                        }
                        x3 = x1[len - i - 1] + x3;
                    }
                    x1 = x3;
                }
                // optional numeral substitution
                if (_this.options.numerals && _this.options.numerals.length) {
                    x1 = x1.replace(/[0-9]/g, function (w) { return _this.options.numerals[+w]; });
                    x2 = x2.replace(/[0-9]/g, function (w) { return _this.options.numerals[+w]; });
                }
                return neg + _this.options.prefix + x1 + x2 + _this.options.suffix;
            };
            this.easeOutExpo = function (t, b, c, d) {
                return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
            };
            this.options = __assign(__assign({}, this.defaults), options);
            this.formattingFn = (this.options.formattingFn) ?
                this.options.formattingFn : this.formatNumber;
            this.easingFn = (this.options.easingFn) ?
                this.options.easingFn : this.easeOutExpo;
            this.startVal = this.validateValue(this.options.startVal);
            this.frameVal = this.startVal;
            this.endVal = this.validateValue(endVal);
            this.options.decimalPlaces = Math.max(this.options.decimalPlaces);
            this.resetDuration();
            this.options.separator = String(this.options.separator);
            this.useEasing = this.options.useEasing;
            if (this.options.separator === '') {
                this.options.useGrouping = false;
            }
            this.el = (typeof target === 'string') ? document.getElementById(target) : target;
            if (this.el) {
                this.printValue(this.startVal);
            }
            else {
                this.error = '[CountUp] target is null or undefined';
            }
        }
        // determines where easing starts and whether to count down or up
        CountUp.prototype.determineDirectionAndSmartEasing = function () {
            var end = (this.finalEndVal) ? this.finalEndVal : this.endVal;
            this.countDown = (this.startVal > end);
            var animateAmount = end - this.startVal;
            if (Math.abs(animateAmount) > this.options.smartEasingThreshold) {
                this.finalEndVal = end;
                var up = (this.countDown) ? 1 : -1;
                this.endVal = end + (up * this.options.smartEasingAmount);
                this.duration = this.duration / 2;
            }
            else {
                this.endVal = end;
                this.finalEndVal = null;
            }
            if (this.finalEndVal) {
                this.useEasing = false;
            }
            else {
                this.useEasing = this.options.useEasing;
            }
        };
        // start animation
        CountUp.prototype.start = function (callback) {
            if (this.error) {
                return;
            }
            this.callback = callback;
            if (this.duration > 0) {
                this.determineDirectionAndSmartEasing();
                this.paused = false;
                this.rAF = requestAnimationFrame(this.count);
            }
            else {
                this.printValue(this.endVal);
            }
        };
        // pause/resume animation
        CountUp.prototype.pauseResume = function () {
            if (!this.paused) {
                cancelAnimationFrame(this.rAF);
            }
            else {
                this.startTime = null;
                this.duration = this.remaining;
                this.startVal = this.frameVal;
                this.determineDirectionAndSmartEasing();
                this.rAF = requestAnimationFrame(this.count);
            }
            this.paused = !this.paused;
        };
        // reset to startVal so animation can be run again
        CountUp.prototype.reset = function () {
            cancelAnimationFrame(this.rAF);
            this.paused = true;
            this.resetDuration();
            this.startVal = this.validateValue(this.options.startVal);
            this.frameVal = this.startVal;
            this.printValue(this.startVal);
        };
        // pass a new endVal and start animation
        CountUp.prototype.update = function (newEndVal) {
            cancelAnimationFrame(this.rAF);
            this.startTime = null;
            this.endVal = this.validateValue(newEndVal);
            if (this.endVal === this.frameVal) {
                return;
            }
            this.startVal = this.frameVal;
            if (!this.finalEndVal) {
                this.resetDuration();
            }
            this.finalEndVal = null;
            this.determineDirectionAndSmartEasing();
            this.rAF = requestAnimationFrame(this.count);
        };
        CountUp.prototype.printValue = function (val) {
            var result = this.formattingFn(val);
            if (this.el.tagName === 'INPUT') {
                var input = this.el;
                input.value = result;
            }
            else if (this.el.tagName === 'text' || this.el.tagName === 'tspan') {
                this.el.textContent = result;
            }
            else {
                this.el.innerHTML = result;
            }
        };
        CountUp.prototype.ensureNumber = function (n) {
            return (typeof n === 'number' && !isNaN(n));
        };
        CountUp.prototype.validateValue = function (value) {
            var newValue = Number(value);
            if (!this.ensureNumber(newValue)) {
                this.error = "[CountUp] invalid start or end value: " + value;
                return null;
            }
            else {
                return newValue;
            }
        };
        CountUp.prototype.resetDuration = function () {
            this.startTime = null;
            this.duration = Number(this.options.duration) * 1000;
            this.remaining = this.duration;
        };
        return CountUp;
    }());

    exports.CountUp = CountUp;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ 17857:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

var React = __webpack_require__(67294);
var countup_js = __webpack_require__(91217);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/**
 * Silence SSR Warnings.
 * Borrowed from Formik v2.1.1, Licensed MIT.
 *
 * https://github.com/formium/formik/blob/9316a864478f8fcd4fa99a0735b1d37afdf507dc/LICENSE
 */

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? React.useLayoutEffect : React.useEffect;

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Create a stable reference to a callback which is updated after each render is committed.
 * Typed version borrowed from Formik v2.2.1. Licensed MIT.
 *
 * https://github.com/formium/formik/blob/9316a864478f8fcd4fa99a0735b1d37afdf507dc/LICENSE
 */

function useEventCallback(fn) {
  var ref = React.useRef(fn); // we copy a ref to the callback scoped to the current state/props on each render

  useIsomorphicLayoutEffect(function () {
    ref.current = fn;
  });
  return React.useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ref.current.apply(void 0, args);
  }, []);
}

var createCountUpInstance = function createCountUpInstance(el, props) {
  var decimal = props.decimal,
      decimals = props.decimals,
      duration = props.duration,
      easingFn = props.easingFn,
      end = props.end,
      formattingFn = props.formattingFn,
      numerals = props.numerals,
      prefix = props.prefix,
      separator = props.separator,
      start = props.start,
      suffix = props.suffix,
      useEasing = props.useEasing;
  return new countup_js.CountUp(el, end, {
    startVal: start,
    duration: duration,
    decimal: decimal,
    decimalPlaces: decimals,
    easingFn: easingFn,
    formattingFn: formattingFn,
    numerals: numerals,
    separator: separator,
    prefix: prefix,
    suffix: suffix,
    useEasing: useEasing,
    useGrouping: !!separator
  });
};

var _excluded$1 = ["ref", "startOnMount", "enableReinitialize", "delay", "onEnd", "onStart", "onPauseResume", "onReset", "onUpdate"];
var DEFAULTS = {
  decimal: '.',
  delay: null,
  prefix: '',
  suffix: '',
  start: 0,
  startOnMount: true,
  enableReinitialize: true
};

var useCountUp = function useCountUp(props) {
  var _useMemo = React.useMemo(function () {
    return _objectSpread2(_objectSpread2({}, DEFAULTS), props);
  }, [props]),
      ref = _useMemo.ref,
      startOnMount = _useMemo.startOnMount,
      enableReinitialize = _useMemo.enableReinitialize,
      delay = _useMemo.delay,
      onEnd = _useMemo.onEnd,
      onStart = _useMemo.onStart,
      onPauseResume = _useMemo.onPauseResume,
      onReset = _useMemo.onReset,
      onUpdate = _useMemo.onUpdate,
      instanceProps = _objectWithoutProperties(_useMemo, _excluded$1);

  var countUpRef = React.useRef();
  var timerRef = React.useRef();
  var isInitializedRef = React.useRef(false);
  var createInstance = useEventCallback(function () {
    return createCountUpInstance(typeof ref === 'string' ? ref : ref.current, instanceProps);
  });
  var getCountUp = useEventCallback(function (recreate) {
    var countUp = countUpRef.current;

    if (countUp && !recreate) {
      return countUp;
    }

    var newCountUp = createInstance();
    countUpRef.current = newCountUp;
    return newCountUp;
  });
  var start = useEventCallback(function () {
    var run = function run() {
      return getCountUp(true).start(function () {
        onEnd === null || onEnd === void 0 ? void 0 : onEnd({
          pauseResume: pauseResume,
          reset: reset,
          start: restart,
          update: update
        });
      });
    };

    if (delay && delay > 0) {
      timerRef.current = setTimeout(run, delay * 1000);
    } else {
      run();
    }

    onStart === null || onStart === void 0 ? void 0 : onStart({
      pauseResume: pauseResume,
      reset: reset,
      update: update
    });
  });
  var pauseResume = useEventCallback(function () {
    getCountUp().pauseResume();
    onPauseResume === null || onPauseResume === void 0 ? void 0 : onPauseResume({
      reset: reset,
      start: restart,
      update: update
    });
  });
  var reset = useEventCallback(function () {
    timerRef.current && clearTimeout(timerRef.current);
    getCountUp().reset();
    onReset === null || onReset === void 0 ? void 0 : onReset({
      pauseResume: pauseResume,
      start: restart,
      update: update
    });
  });
  var update = useEventCallback(function (newEnd) {
    getCountUp().update(newEnd);
    onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate({
      pauseResume: pauseResume,
      reset: reset,
      start: restart
    });
  });
  var restart = useEventCallback(function () {
    reset();
    start();
  });
  var maybeInitialize = useEventCallback(function (shouldReset) {
    if (startOnMount) {
      if (shouldReset) {
        reset();
      }

      start();
    }
  });
  React.useEffect(function () {
    if (!isInitializedRef.current) {
      isInitializedRef.current = true;
      maybeInitialize();
    } else if (enableReinitialize) {
      maybeInitialize(true);
    }
  }, [enableReinitialize, isInitializedRef, maybeInitialize, delay, props.start, props.suffix, props.prefix, props.duration, props.separator, props.decimals, props.decimal, props.formattingFn]);
  React.useEffect(function () {
    return function () {
      reset();
    };
  }, [reset]);
  return {
    start: restart,
    pauseResume: pauseResume,
    reset: reset,
    update: update,
    getCountUp: getCountUp
  };
};

var _excluded = ["className", "redraw", "containerProps", "children", "style"];

var CountUp = function CountUp(props) {
  var className = props.className,
      redraw = props.redraw,
      containerProps = props.containerProps,
      children = props.children,
      style = props.style,
      useCountUpProps = _objectWithoutProperties(props, _excluded);

  var containerRef = React__default["default"].useRef(null);
  var isInitializedRef = React__default["default"].useRef(false);

  var _useCountUp = useCountUp(_objectSpread2(_objectSpread2({}, useCountUpProps), {}, {
    ref: containerRef,
    startOnMount: typeof children !== 'function' || props.delay === 0,
    // component manually restarts
    enableReinitialize: false
  })),
      start = _useCountUp.start,
      reset = _useCountUp.reset,
      updateCountUp = _useCountUp.update,
      pauseResume = _useCountUp.pauseResume,
      getCountUp = _useCountUp.getCountUp;

  var restart = useEventCallback(function () {
    start();
  });
  var update = useEventCallback(function (end) {
    if (!props.preserveValue) {
      reset();
    }

    updateCountUp(end);
  });
  var initializeOnMount = useEventCallback(function () {
    if (typeof props.children === 'function') {
      // Warn when user didn't use containerRef at all
      if (!(containerRef.current instanceof Element)) {
        console.error("Couldn't find attached element to hook the CountUp instance into! Try to attach \"containerRef\" from the render prop to a an Element, eg. <span ref={containerRef} />.");
        return;
      }
    } // unlike the hook, the CountUp component initializes on mount


    getCountUp();
  });
  React.useEffect(function () {
    initializeOnMount();
  }, [initializeOnMount]);
  React.useEffect(function () {
    if (isInitializedRef.current) {
      update(props.end);
    }
  }, [props.end, update]);
  var redrawDependencies = redraw && props; // if props.redraw, call this effect on every props change

  React.useEffect(function () {
    if (redraw && isInitializedRef.current) {
      restart();
    }
  }, [restart, redraw, redrawDependencies]); // if not props.redraw, call this effect only when certain props are changed

  React.useEffect(function () {
    if (!redraw && isInitializedRef.current) {
      restart();
    }
  }, [restart, redraw, props.start, props.suffix, props.prefix, props.duration, props.separator, props.decimals, props.decimal, props.className, props.formattingFn]);
  React.useEffect(function () {
    isInitializedRef.current = true;
  }, []);

  if (typeof children === 'function') {
    // TypeScript forces functional components to return JSX.Element | null.
    return children({
      countUpRef: containerRef,
      start: start,
      reset: reset,
      update: updateCountUp,
      pauseResume: pauseResume,
      getCountUp: getCountUp
    });
  }

  return /*#__PURE__*/React__default["default"].createElement("span", _extends({
    className: className,
    ref: containerRef,
    style: style
  }, containerProps), props.start ? getCountUp().formattingFn(props.start) : '');
};

exports.ZP = CountUp;
__webpack_unused_export__ = useCountUp;


/***/ }),

/***/ 33082:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(67294), __webpack_require__(73935));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_757__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_757__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_757__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_757__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_757__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_757__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_757__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_757__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_757__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_757__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_757__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_757__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_757__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_757__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_757__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_757__(__nested_webpack_require_757__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __nested_webpack_require_4221__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __nested_webpack_require_4221__(5)();
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// Tell whether the rect is visible, given an offset
//
// return: boolean
module.exports = function (offset, rect, containmentRect) {
  var offsetDir = offset.direction;
  var offsetVal = offset.value; // Rules for checking different kind of offsets. In example if the element is
  // 90px below viewport and offsetTop is 100, it is considered visible.

  switch (offsetDir) {
    case 'top':
      return containmentRect.top + offsetVal < rect.top && containmentRect.bottom > rect.bottom && containmentRect.left < rect.left && containmentRect.right > rect.right;

    case 'left':
      return containmentRect.left + offsetVal < rect.left && containmentRect.bottom > rect.bottom && containmentRect.top < rect.top && containmentRect.right > rect.right;

    case 'bottom':
      return containmentRect.bottom - offsetVal > rect.bottom && containmentRect.left < rect.left && containmentRect.right > rect.right && containmentRect.top < rect.top;

    case 'right':
      return containmentRect.right - offsetVal > rect.right && containmentRect.left < rect.left && containmentRect.top < rect.top && containmentRect.bottom > rect.bottom;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_6122__) {

"use strict";
__nested_webpack_require_6122__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_6122__.d(__webpack_exports__, "default", function() { return VisibilitySensor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_6122__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_6122__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_6122__(2);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_6122__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_6122__(0);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_6122__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_6122__(3);
/* harmony import */ var _lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_6122__.n(_lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function normalizeRect(rect) {
  if (rect.width === undefined) {
    rect.width = rect.right - rect.left;
  }

  if (rect.height === undefined) {
    rect.height = rect.bottom - rect.top;
  }

  return rect;
}

var VisibilitySensor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VisibilitySensor, _React$Component);

  function VisibilitySensor(props) {
    var _this;

    _classCallCheck(this, VisibilitySensor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VisibilitySensor).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getContainer", function () {
      return _this.props.containment || window;
    });

    _defineProperty(_assertThisInitialized(_this), "addEventListener", function (target, event, delay, throttle) {
      if (!_this.debounceCheck) {
        _this.debounceCheck = {};
      }

      var timeout;
      var func;

      var later = function later() {
        timeout = null;

        _this.check();
      };

      if (throttle > -1) {
        func = function func() {
          if (!timeout) {
            timeout = setTimeout(later, throttle || 0);
          }
        };
      } else {
        func = function func() {
          clearTimeout(timeout);
          timeout = setTimeout(later, delay || 0);
        };
      }

      var info = {
        target: target,
        fn: func,
        getLastTimeout: function getLastTimeout() {
          return timeout;
        }
      };
      target.addEventListener(event, info.fn);
      _this.debounceCheck[event] = info;
    });

    _defineProperty(_assertThisInitialized(_this), "startWatching", function () {
      if (_this.debounceCheck || _this.interval) {
        return;
      }

      if (_this.props.intervalCheck) {
        _this.interval = setInterval(_this.check, _this.props.intervalDelay);
      }

      if (_this.props.scrollCheck) {
        _this.addEventListener(_this.getContainer(), "scroll", _this.props.scrollDelay, _this.props.scrollThrottle);
      }

      if (_this.props.resizeCheck) {
        _this.addEventListener(window, "resize", _this.props.resizeDelay, _this.props.resizeThrottle);
      } // if dont need delayed call, check on load ( before the first interval fires )


      !_this.props.delayedCall && _this.check();
    });

    _defineProperty(_assertThisInitialized(_this), "stopWatching", function () {
      if (_this.debounceCheck) {
        // clean up event listeners and their debounce callers
        for (var debounceEvent in _this.debounceCheck) {
          if (_this.debounceCheck.hasOwnProperty(debounceEvent)) {
            var debounceInfo = _this.debounceCheck[debounceEvent];
            clearTimeout(debounceInfo.getLastTimeout());
            debounceInfo.target.removeEventListener(debounceEvent, debounceInfo.fn);
            _this.debounceCheck[debounceEvent] = null;
          }
        }
      }

      _this.debounceCheck = null;

      if (_this.interval) {
        _this.interval = clearInterval(_this.interval);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "check", function () {
      var el = _this.node;
      var rect;
      var containmentRect; // if the component has rendered to null, dont update visibility

      if (!el) {
        return _this.state;
      }

      rect = normalizeRect(_this.roundRectDown(el.getBoundingClientRect()));

      if (_this.props.containment) {
        var containmentDOMRect = _this.props.containment.getBoundingClientRect();

        containmentRect = {
          top: containmentDOMRect.top,
          left: containmentDOMRect.left,
          bottom: containmentDOMRect.bottom,
          right: containmentDOMRect.right
        };
      } else {
        containmentRect = {
          top: 0,
          left: 0,
          bottom: window.innerHeight || document.documentElement.clientHeight,
          right: window.innerWidth || document.documentElement.clientWidth
        };
      } // Check if visibility is wanted via offset?


      var offset = _this.props.offset || {};
      var hasValidOffset = _typeof(offset) === "object";

      if (hasValidOffset) {
        containmentRect.top += offset.top || 0;
        containmentRect.left += offset.left || 0;
        containmentRect.bottom -= offset.bottom || 0;
        containmentRect.right -= offset.right || 0;
      }

      var visibilityRect = {
        top: rect.top >= containmentRect.top,
        left: rect.left >= containmentRect.left,
        bottom: rect.bottom <= containmentRect.bottom,
        right: rect.right <= containmentRect.right
      }; // https://github.com/joshwnj/react-visibility-sensor/pull/114

      var hasSize = rect.height > 0 && rect.width > 0;
      var isVisible = hasSize && visibilityRect.top && visibilityRect.left && visibilityRect.bottom && visibilityRect.right; // check for partial visibility

      if (hasSize && _this.props.partialVisibility) {
        var partialVisible = rect.top <= containmentRect.bottom && rect.bottom >= containmentRect.top && rect.left <= containmentRect.right && rect.right >= containmentRect.left; // account for partial visibility on a single edge

        if (typeof _this.props.partialVisibility === "string") {
          partialVisible = visibilityRect[_this.props.partialVisibility];
        } // if we have minimum top visibility set by props, lets check, if it meets the passed value
        // so if for instance element is at least 200px in viewport, then show it.


        isVisible = _this.props.minTopValue ? partialVisible && rect.top <= containmentRect.bottom - _this.props.minTopValue : partialVisible;
      } // Deprecated options for calculating offset.


      if (typeof offset.direction === "string" && typeof offset.value === "number") {
        console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }", offset.direction, offset.value);
        isVisible = _lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3___default()(offset, rect, containmentRect);
      }

      var state = _this.state; // notify the parent when the value changes

      if (_this.state.isVisible !== isVisible) {
        state = {
          isVisible: isVisible,
          visibilityRect: visibilityRect
        };

        _this.setState(state);

        if (_this.props.onChange) _this.props.onChange(isVisible);
      }

      return state;
    });

    _this.state = {
      isVisible: null,
      visibilityRect: {}
    };
    return _this;
  }

  _createClass(VisibilitySensor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.node = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this);

      if (this.props.active) {
        this.startWatching();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopWatching();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // re-register node in componentDidUpdate if children diffs [#103]
      this.node = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this);

      if (this.props.active && !prevProps.active) {
        this.setState({
          isVisible: null,
          visibilityRect: {}
        });
        this.startWatching();
      } else if (!this.props.active) {
        this.stopWatching();
      }
    }
  }, {
    key: "roundRectDown",
    value: function roundRectDown(rect) {
      return {
        top: Math.floor(rect.top),
        left: Math.floor(rect.left),
        bottom: Math.floor(rect.bottom),
        right: Math.floor(rect.right)
      };
    }
    /**
     * Check if the element is within the visible viewport
     */

  }, {
    key: "render",
    value: function render() {
      if (this.props.children instanceof Function) {
        return this.props.children({
          isVisible: this.state.isVisible,
          visibilityRect: this.state.visibilityRect
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(this.props.children);
    }
  }]);

  return VisibilitySensor;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(VisibilitySensor, "defaultProps", {
  active: true,
  partialVisibility: false,
  minTopValue: 0,
  scrollCheck: false,
  scrollDelay: 250,
  scrollThrottle: -1,
  resizeCheck: false,
  resizeDelay: 250,
  resizeThrottle: -1,
  intervalCheck: true,
  intervalDelay: 100,
  delayedCall: false,
  offset: {},
  containment: null,
  children: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null)
});

_defineProperty(VisibilitySensor, "propTypes", {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  active: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  partialVisibility: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["top", "right", "bottom", "left"])]),
  delayedCall: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    top: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    bottom: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    right: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
  }), // deprecated offset property
  prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    direction: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["top", "right", "bottom", "left"]),
    value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
  })]),
  scrollCheck: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  scrollDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  scrollThrottle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  resizeCheck: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  resizeDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  resizeThrottle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  intervalCheck: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  intervalDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  containment: typeof window !== "undefined" ? prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(window.Element) : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func]),
  minTopValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
});



/***/ }),
/* 5 */
/***/ (function(module, exports, __nested_webpack_require_20664__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __nested_webpack_require_20664__(6);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ })
/******/ ]);
});

/***/ })

};
;