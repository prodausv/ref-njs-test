/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
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
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/App.tsx":
/*!********************************!*\
  !*** ./src/components/App.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var InputValidator_1 = __webpack_require__(/*! ./InputValidator */ "./src/components/InputValidator.tsx");
var ValueTable_1 = __webpack_require__(/*! ./ValueTable */ "./src/components/ValueTable.tsx");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { numberStorage: [] };
        _this.addToStorage = _this.addToStorage.bind(_this);
        return _this;
    }
    App.prototype.addToStorage = function (value) {
        var _this = this;
        this.setState(function (state) { return ({ numberStorage: _this.state.numberStorage.concat([value]) }); });
    };
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(InputValidator_1.InputValidator, { inputDefaultValueMessage: "Only numbers allowed", inputValidationRegex: "^[0-9]+$", action: this.addToStorage }),
            React.createElement("br", null),
            React.createElement(ValueTable_1.ValueTable, { itemsToDisplay: this.state.numberStorage })));
    };
    return App;
}(React.Component));
exports.App = App;


/***/ }),

/***/ "./src/components/InputValidator.tsx":
/*!*******************************************!*\
  !*** ./src/components/InputValidator.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var InputValidator = /** @class */ (function (_super) {
    __extends(InputValidator, _super);
    function InputValidator(props, state) {
        var _this = _super.call(this, props) || this;
        _this.inputRef = React.createRef();
        _this.validationExpression = new RegExp(_this.props.inputValidationRegex);
        _this.state = { inputValue: "", isInputValid: false };
        // This binding is necessary to make `this` work in the callback
        _this.validateInput = _this.validateInput.bind(_this);
        _this.onButtonClick = _this.onButtonClick.bind(_this);
        _this.cleanInput = _this.cleanInput.bind(_this);
        return _this;
    }
    InputValidator.prototype.validateInput = function () {
        var val = this.inputRef.current.value;
        var isMatch = this.validationExpression.test(val);
        this.setState(function (state) { return ({ inputValue: val, isInputValid: isMatch }); });
    };
    InputValidator.prototype.cleanInput = function () {
        this.inputRef.current.value = "";
        this.validateInput();
    };
    InputValidator.prototype.onButtonClick = function () {
        if (this.state.isInputValid) {
            var intVal = parseInt(this.state.inputValue);
            this.props.action(intVal);
            this.cleanInput();
        }
    };
    InputValidator.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("input", { ref: this.inputRef, onChange: this.validateInput, placeholder: this.props.inputDefaultValueMessage, style: { borderColor: (this.state.isInputValid ? 'green' : 'red') } }),
            React.createElement("button", { onClick: this.onButtonClick, disabled: !this.state.isInputValid }, "ClickMe")));
    };
    return InputValidator;
}(React.Component));
exports.InputValidator = InputValidator;


/***/ }),

/***/ "./src/components/ValueTable.tsx":
/*!***************************************!*\
  !*** ./src/components/ValueTable.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
exports.ValueTable = function (props) { return (React.createElement("table", { className: 'table table-bordered' },
    React.createElement("thead", null,
        React.createElement("tr", null,
            React.createElement("th", null, "Id"),
            React.createElement("th", null, "Value"))),
    React.createElement("tbody", null, props.itemsToDisplay.map(function (element, index) {
        return React.createElement("tr", { key: index + 1 },
            React.createElement("td", null, index + 1),
            React.createElement("td", null, element));
    })))); };


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var App_1 = __webpack_require__(/*! ./components/App */ "./src/components/App.tsx");
ReactDOM.render(React.createElement(App_1.App, { title: "React App" }), document.getElementById("reactApp"));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map