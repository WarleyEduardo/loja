/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/@swc/helpers/lib/_async_to_generator.js":
/*!**************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_async_to_generator.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = _asyncToGenerator;\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9fYXN5bmNfdG9fZ2VuZXJhdG9yLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9qYXZpcnR1YWwvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9fYXN5bmNfdG9fZ2VuZXJhdG9yLmpzPzBlMzAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBfYXN5bmNUb0dlbmVyYXRvcjtcbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/lib/_async_to_generator.js\n");

/***/ }),

/***/ "./node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = _interopRequireDefault;\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2phdmlydHVhbC8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvbGliL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5qcz85YjdjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsdUdBQTZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9qYXZpcnR1YWwvLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/NjZlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = void 0;\nvar _async_to_generator = (__webpack_require__(/*! @swc/helpers/lib/_async_to_generator.js */ \"./node_modules/@swc/helpers/lib/_async_to_generator.js\")[\"default\"]);\nvar _interop_require_default = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nvar _react = _interop_require_default(__webpack_require__(/*! react */ \"react\"));\nvar _utils = __webpack_require__(/*! ../shared/lib/utils */ \"../shared/lib/utils\");\nfunction appGetInitialProps(_) {\n    return _appGetInitialProps.apply(this, arguments);\n}\nfunction _appGetInitialProps() {\n    _appGetInitialProps = /**\n * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n * This allows for keeping state between navigation, custom error handling, injecting additional data.\n */ _async_to_generator(function*({ Component , ctx  }) {\n        const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);\n        return {\n            pageProps\n        };\n    });\n    return _appGetInitialProps.apply(this, arguments);\n}\nvar _Component;\nclass App extends (_Component = _react.default.Component) {\n    render() {\n        const { Component , pageProps  } = this.props;\n        return /*#__PURE__*/ _react.default.createElement(Component, Object.assign({}, pageProps));\n    }\n}\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nexports[\"default\"] = App; //# sourceMappingURL=_app.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQ3pDRyxPQUFPLElBQUk7QUFDZixDQUFDLEVBQUM7QUFDRkQsa0JBQWUsR0FBRyxLQUFLO0FBQ3ZCLElBQUlHLHNCQUFzQkMseUlBQTBEO0FBQ3BGLElBQUlDLDJCQUEyQkQsbUpBQStEO0FBQzlGLElBQUlFLFNBQVNELHlCQUF5QkQsbUJBQU9BLENBQUMsb0JBQU87QUFDckQsSUFBSUcsU0FBU0gsbUJBQU9BLENBQUMsZ0RBQXFCO0FBQzFDLFNBQVNJLG1CQUFtQkMsQ0FBQyxFQUFFO0lBQzNCLE9BQU9DLG9CQUFvQkMsS0FBSyxDQUFDLElBQUksRUFBRUM7QUFDM0M7QUFDQSxTQUFTRixzQkFBc0I7SUFDM0JBLHNCQUFzQjs7O0NBR3pCLEdBQUdQLG9CQUFvQixVQUFVLEVBQUVVLFVBQVMsRUFBR0MsSUFBRyxFQUFHLEVBQUU7UUFDaEQsTUFBTUMsWUFBWSxNQUFNLENBQUMsR0FBR1IsTUFBTSxFQUFFUyxtQkFBbUIsQ0FBQ0gsV0FBV0M7UUFDbkUsT0FBTztZQUNIQztRQUNKO0lBQ0o7SUFDQSxPQUFPTCxvQkFBb0JDLEtBQUssQ0FBQyxJQUFJLEVBQUVDO0FBQzNDO0FBQ0EsSUFBSUs7QUFDSixNQUFNQyxZQUFhRCxDQUFBQSxhQUFhWCxPQUFPSixPQUFPLENBQUNXLFNBQVM7SUFDcERNLFNBQVM7UUFDTCxNQUFNLEVBQUVOLFVBQVMsRUFBR0UsVUFBUyxFQUFHLEdBQUcsSUFBSSxDQUFDSyxLQUFLO1FBQzdDLE9BQU8sV0FBVyxHQUFHZCxPQUFPSixPQUFPLENBQUNtQixhQUFhLENBQUNSLFdBQVdmLE9BQU93QixNQUFNLENBQUMsQ0FBQyxHQUFHUDtJQUNuRjtBQUNKO0FBQ0FHLElBQUlLLG1CQUFtQixHQUFHZjtBQUMxQlUsSUFBSU0sZUFBZSxHQUFHaEI7QUFDdEJSLGtCQUFlLEdBQUdrQixLQUVsQixnQ0FBZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2phdmlydHVhbC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcz85NjFkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9hc3luY190b19nZW5lcmF0b3IgPSByZXF1aXJlKFwiQHN3Yy9oZWxwZXJzL2xpYi9fYXN5bmNfdG9fZ2VuZXJhdG9yLmpzXCIpLmRlZmF1bHQ7XG52YXIgX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0ID0gcmVxdWlyZShcIkBzd2MvaGVscGVycy9saWIvX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0LmpzXCIpLmRlZmF1bHQ7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdXRpbHNcIik7XG5mdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoXykge1xuICAgIHJldHVybiBfYXBwR2V0SW5pdGlhbFByb3BzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiBfYXBwR2V0SW5pdGlhbFByb3BzKCkge1xuICAgIF9hcHBHZXRJbml0aWFsUHJvcHMgPSAvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovIF9hc3luY190b19nZW5lcmF0b3IoZnVuY3Rpb24qKHsgQ29tcG9uZW50ICwgY3R4ICB9KSB7XG4gICAgICAgIGNvbnN0IHBhZ2VQcm9wcyA9IHlpZWxkICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFnZVByb3BzXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIF9hcHBHZXRJbml0aWFsUHJvcHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbnZhciBfQ29tcG9uZW50O1xuY2xhc3MgQXBwIGV4dGVuZHMgKF9Db21wb25lbnQgPSBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQpIHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50ICwgcGFnZVByb3BzICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe30sIHBhZ2VQcm9wcykpO1xuICAgIH1cbn1cbkFwcC5vcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzO1xuQXBwLmdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMuZGVmYXVsdCA9IEFwcDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2FwcC5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiX2FzeW5jX3RvX2dlbmVyYXRvciIsInJlcXVpcmUiLCJfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQiLCJfcmVhY3QiLCJfdXRpbHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfIiwiX2FwcEdldEluaXRpYWxQcm9wcyIsImFwcGx5IiwiYXJndW1lbnRzIiwiQ29tcG9uZW50IiwiY3R4IiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIl9Db21wb25lbnQiLCJBcHAiLCJyZW5kZXIiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJhc3NpZ24iLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux */ \"./redux/index.js\");\n/*modulo 41 - loja virtual - criando arquivo base  das paginas */ /* ao renomear o arquivos como _app  o \"next\" reconhece automaticamente\r\n o arquivo como base para todas as demais paginas */ \n\n\n\n\nclass Principal extends (next_app__WEBPACK_IMPORTED_MODULE_2___default()) {\n    static async getInitialProps({ Component , ctx  }) {\n        return {\n            pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}\n        };\n    }\n    render() {\n        const { Component , pageProps , store  } = this.props;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n            store: store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\javaScript\\\\lojavirtual\\\\lojavirtual\\\\pages\\\\_app.js\",\n                lineNumber: 23,\n                columnNumber: 6\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\javaScript\\\\lojavirtual\\\\lojavirtual\\\\pages\\\\_app.js\",\n            lineNumber: 22,\n            columnNumber: 5\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_redux__WEBPACK_IMPORTED_MODULE_4__.initStore)(Principal));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBK0QsR0FFL0Q7QUFHQSxTQUFTQSxRQUFRLFFBQVEsY0FBYztBQUNSO0FBQ1Q7QUFDZTtBQUdiQztJQUN2QixhQUFhSyxPQUFBQSxpREFBQUE7UUFDWixPQUFPO1lBQUVHO1FBQWlGO0lBQzNGO0lBRUFDO1FBQ0MsTUFBTTtRQUVOLHFCQUVFLFFBQUNWO1lBQVNXLE9BQU9BLFVBQUFBLDZEQUFBQSxDQUFBQSxpREFBQUE7c0JBQ2hCO2dCQUFZLEdBQUdGLFNBQVM7Ozs7Ozs7Ozs7O0lBSTVCO0FBa0JEO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2phdmlydHVhbC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKm1vZHVsbyA0MSAtIGxvamEgdmlydHVhbCAtIGNyaWFuZG8gYXJxdWl2byBiYXNlICBkYXMgcGFnaW5hcyAqL1xyXG5cclxuLyogYW8gcmVub21lYXIgbyBhcnF1aXZvcyBjb21vIF9hcHAgIG8gXCJuZXh0XCIgcmVjb25oZWNlIGF1dG9tYXRpY2FtZW50ZVxyXG4gbyBhcnF1aXZvIGNvbW8gYmFzZSBwYXJhIHRvZGFzIGFzIGRlbWFpcyBwYWdpbmFzICovXHJcblxyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tICduZXh0L2FwcCc7IFxyXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gJy4uL3JlZHV4JztcclxuXHJcblxyXG5jbGFzcyBQcmluY2lwYWwgZXh0ZW5kcyBBcHAge1xyXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIGN0eCB9KSB7XHJcblx0XHRyZXR1cm4geyBwYWdlUHJvcHM6IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPyBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCkgOiB7fSB9O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgc3RvcmUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0XHJcblx0XHRcdFx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcblx0XHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcblx0XHRcdFx0PC9Qcm92aWRlcj5cclxuXHRcdFx0XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0LypcclxuXHQgIFx0cmVuZGVyKCkge1xyXG5cdFx0XHJcblx0XHRjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCBzdG9yZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG5cdFx0XHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG5cdFx0XHRcdDwvUHJvdmlkZXI+XHJcblx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0KTtcclxuXHR9XHJcblx0ICBcclxuXHQgXHJcblx0ICovXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChpbml0U3RvcmUpKFByaW5jaXBhbCk7XHJcblxyXG4iXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJBcHAiLCJDb250YWluZXIiLCJ3aXRoUmVkdXgiLCJpbml0U3RvcmUiLCJQcmluY2lwYWwiLCJnZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJyZW5kZXIiLCJzdG9yZSIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./redux/index.js":
/*!************************!*\
  !*** ./redux/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initStore\": () => (/* binding */ initStore)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ \"./redux/reducers/index.js\");\n/* modulo 39 - loja virtual -  desenvolvimento a configuração base do redux  */ \n\n\nconst initStore = (initialState = {})=>(0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2RUFBNkUsR0FDeEI7QUFDckI7QUFDQztBQUUxQixNQUFNSSxZQUFZLENBQUNDLGVBQWUsQ0FBQyxDQUFDLEdBQUtMLGtEQUFXQSxDQUFDRyxpREFBT0EsRUFBRUUsY0FBY0osc0RBQWVBLENBQUNDLG9EQUFLQSxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9qYXZpcnR1YWwvLi9yZWR1eC9pbmRleC5qcz80N2I1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIG1vZHVsbyAzOSAtIGxvamEgdmlydHVhbCAtICBkZXNlbnZvbHZpbWVudG8gYSBjb25maWd1cmHDp8OjbyBiYXNlIGRvIHJlZHV4ICAqL1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJztcdFxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRTdG9yZSA9IChpbml0aWFsU3RhdGUgPSB7fSkgPT4gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBhcHBseU1pZGRsZXdhcmUodGh1bmspKVxyXG5cdFxyXG5cdFxyXG5cdCJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwicmVkdWNlciIsImluaXRTdG9yZSIsImluaXRpYWxTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/index.js\n");

/***/ }),

/***/ "./redux/reducers/authReducers.js":
/*!****************************************!*\
  !*** ./redux/reducers/authReducers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./redux/types.js\");\n/* modulo 40 - loja virtual - criando helper para inicialização*/ \nconst initialState = {\n    token: null,\n    usuario: null\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = initialState, action)=>{\n    switch(action.type){\n        case _types__WEBPACK_IMPORTED_MODULE_0__.AUTENTICAR_TOKEN:\n            return {\n                ...state,\n                token: action.payload\n            };\n        default:\n            return state;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9hdXRoUmVkdWNlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrREFBK0QsR0FDbkI7QUFFNUMsTUFBTUMsZUFBZTtJQUFFQyxPQUFPLElBQUk7SUFBRUMsU0FBUyxJQUFJO0FBQUM7QUFFbEQsaUVBQWUsQ0FBQ0MsUUFBUUgsWUFBWSxFQUFFSSxTQUFXO0lBRWhELE9BQVFBLE9BQU9DLElBQUk7UUFFbEIsS0FBS04sb0RBQWdCQTtZQUNwQixPQUFPO2dCQUNOLEdBQUdJLEtBQUs7Z0JBQ1JGLE9BQU9HLE9BQU9FLE9BQU87WUFDdEI7UUFDRDtZQUFTLE9BQU9IO0lBQ2pCO0FBQ0QsR0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xvamF2aXJ0dWFsLy4vcmVkdXgvcmVkdWNlcnMvYXV0aFJlZHVjZXJzLmpzPzMyMzYiXSwic291cmNlc0NvbnRlbnQiOlsiLyogbW9kdWxvIDQwIC0gbG9qYSB2aXJ0dWFsIC0gY3JpYW5kbyBoZWxwZXIgcGFyYSBpbmljaWFsaXphw6fDo28qL1xyXG5pbXBvcnQgeyBBVVRFTlRJQ0FSX1RPS0VOIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0geyB0b2tlbjogbnVsbCwgdXN1YXJpbzogbnVsbCB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRcclxuXHRcdGNhc2UgQVVURU5USUNBUl9UT0tFTjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHR0b2tlbjogYWN0aW9uLnBheWxvYWRcclxuXHRcdFx0fVxyXG5cdFx0ZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsiQVVURU5USUNBUl9UT0tFTiIsImluaXRpYWxTdGF0ZSIsInRva2VuIiwidXN1YXJpbyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/authReducers.js\n");

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _authReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authReducers */ \"./redux/reducers/authReducers.js\");\n/* modulo 39 - loja virtual -  desenvolvimento a configuração base do redux  */ \n/* modulo 40 - loja virtual - criando helper para inicialização*/ \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    auth: _authReducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsNkVBQTZFLEdBRXJDO0FBRXhDLCtEQUErRCxHQUN0QjtBQUV6QyxpRUFBZUEsc0RBQWVBLENBQUM7SUFDOUJFLE1BQU1ELHFEQUFXQTtBQUNsQixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9qYXZpcnR1YWwvLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcz9mYzY0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIG1vZHVsbyAzOSAtIGxvamEgdmlydHVhbCAtICBkZXNlbnZvbHZpbWVudG8gYSBjb25maWd1cmHDp8OjbyBiYXNlIGRvIHJlZHV4ICAqL1xyXG5cclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLyogbW9kdWxvIDQwIC0gbG9qYSB2aXJ0dWFsIC0gY3JpYW5kbyBoZWxwZXIgcGFyYSBpbmljaWFsaXphw6fDo28qL1xyXG5pbXBvcnQgYXV0aFJlZHVjZXIgIGZyb20gJy4vYXV0aFJlZHVjZXJzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuXHRhdXRoOiBhdXRoUmVkdWNlclxyXG59KSJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJhdXRoUmVkdWNlciIsImF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/index.js\n");

/***/ }),

/***/ "./redux/types.js":
/*!************************!*\
  !*** ./redux/types.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AUTENTICAR_TOKEN\": () => (/* binding */ AUTENTICAR_TOKEN)\n/* harmony export */ });\n/* modulo 40 - loja virtual - criando helper para inicialização*/ const AUTENTICAR_TOKEN = \"AUTENTICAR_TOKEN\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC90eXBlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsK0RBQStELEdBRXhELE1BQU1BLG1CQUFtQixtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2phdmlydHVhbC8uL3JlZHV4L3R5cGVzLmpzPzYwZDIiXSwic291cmNlc0NvbnRlbnQiOlsiLyogbW9kdWxvIDQwIC0gbG9qYSB2aXJ0dWFsIC0gY3JpYW5kbyBoZWxwZXIgcGFyYSBpbmljaWFsaXphw6fDo28qL1xyXG5cclxuZXhwb3J0IGNvbnN0IEFVVEVOVElDQVJfVE9LRU4gPSAnQVVURU5USUNBUl9UT0tFTic7XHJcbiJdLCJuYW1lcyI6WyJBVVRFTlRJQ0FSX1RPS0VOIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/types.js\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();