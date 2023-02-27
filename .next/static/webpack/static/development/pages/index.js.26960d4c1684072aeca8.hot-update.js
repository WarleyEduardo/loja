webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./utils/cookie.js":
/*!*************************!*\
  !*** ./utils/cookie.js ***!
  \*************************/
/*! exports provided: setCookie, removeCookie, getCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* modulo 40 - loja virtual - criando helper para cookie*/


var setCookie = function setCookie(key, value) {
  if (true) js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(key, value, {
    expires: 1,
    path: "/"
  });
};
var removeCookie = function removeCookie(key) {
  if (true) js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(key, {
    expires: 1
  });
};
var getCookie = function getCookie(key, req) {
  return  true ? getCookieFromBrowser(key) : undefined;
};
var getCookieFromBrowser = function getCookieFromBrowser(key) {
  return js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(key);
};
var getCookieFromServer = function getCookieFromServer(key, req) {
  if (!req.headers.cookie) return undefined;
  var _cookie = req.headers.cookie.split(";").find(function (c) {
    return c.trim().startsWith("".concat(key, "="));
  });
  return _cookie ? _cookie.split("=")[1] : undefined;
};

/***/ })

})
//# sourceMappingURL=index.js.26960d4c1684072aeca8.hot-update.js.map