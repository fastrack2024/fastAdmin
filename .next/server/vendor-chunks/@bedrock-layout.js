"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@bedrock-layout";
exports.ids = ["vendor-chunks/@bedrock-layout"];
exports.modules = {

/***/ "(ssr)/./node_modules/@bedrock-layout/use-forwarded-ref/lib/index.m.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@bedrock-layout/use-forwarded-ref/lib/index.m.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ o),\n/* harmony export */   useForwardedRef: () => (/* binding */ o)\n/* harmony export */ });\n/* harmony import */ var _bedrock_layout_use_stateful_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bedrock-layout/use-stateful-ref */ \"(ssr)/./node_modules/@bedrock-layout/use-stateful-ref/lib/index.m.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction o(t, u = { isStateful: !0 }) {\n  const n = (0,_bedrock_layout_use_stateful_ref__WEBPACK_IMPORTED_MODULE_1__.useStatefulRef)(null), f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null), e = u.isStateful ? n : f;\n  return react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {\n    !t || (typeof t == \"function\" ? t(e.current) : t.current = e.current);\n  }), e;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQGJlZHJvY2stbGF5b3V0L3VzZS1mb3J3YXJkZWQtcmVmL2xpYi9pbmRleC5tLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVFO0FBQ2hDO0FBQ3ZDLG9CQUFvQixnQkFBZ0I7QUFDcEMsWUFBWSxnRkFBQyxZQUFZLDZDQUFDO0FBQzFCLFNBQVMsc0RBQVc7QUFDcEI7QUFDQSxHQUFHO0FBQ0g7QUFJRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zhc3RyYWNrLWFkbWluLy4vbm9kZV9tb2R1bGVzL0BiZWRyb2NrLWxheW91dC91c2UtZm9yd2FyZGVkLXJlZi9saWIvaW5kZXgubS5qcz8yYTA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlZnVsUmVmIGFzIHIgfSBmcm9tIFwiQGJlZHJvY2stbGF5b3V0L3VzZS1zdGF0ZWZ1bC1yZWZcIjtcbmltcG9ydCBzLCB7IHVzZVJlZiBhcyBjIH0gZnJvbSBcInJlYWN0XCI7XG5mdW5jdGlvbiBvKHQsIHUgPSB7IGlzU3RhdGVmdWw6ICEwIH0pIHtcbiAgY29uc3QgbiA9IHIobnVsbCksIGYgPSBjKG51bGwpLCBlID0gdS5pc1N0YXRlZnVsID8gbiA6IGY7XG4gIHJldHVybiBzLnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgIXQgfHwgKHR5cGVvZiB0ID09IFwiZnVuY3Rpb25cIiA/IHQoZS5jdXJyZW50KSA6IHQuY3VycmVudCA9IGUuY3VycmVudCk7XG4gIH0pLCBlO1xufVxuZXhwb3J0IHtcbiAgbyBhcyBkZWZhdWx0LFxuICBvIGFzIHVzZUZvcndhcmRlZFJlZlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@bedrock-layout/use-forwarded-ref/lib/index.m.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@bedrock-layout/use-stateful-ref/lib/index.m.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@bedrock-layout/use-stateful-ref/lib/index.m.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ s),\n/* harmony export */   useStatefulRef: () => (/* binding */ s)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction s(c = null) {\n  let [e, f] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(c);\n  const { current: r } = react__WEBPACK_IMPORTED_MODULE_0___default().useRef({\n    current: e\n  });\n  return Object.defineProperty(r, \"current\", {\n    get: () => e,\n    set: (t) => {\n      Object.is(e, t) || (e = t, f(t));\n    }\n  }), r;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQGJlZHJvY2stbGF5b3V0L3VzZS1zdGF0ZWZ1bC1yZWYvbGliL2luZGV4Lm0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFzQjtBQUN0QjtBQUNBLGVBQWUscURBQVU7QUFDekIsVUFBVSxhQUFhLEVBQUUsbURBQVE7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUlFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFzdHJhY2stYWRtaW4vLi9ub2RlX21vZHVsZXMvQGJlZHJvY2stbGF5b3V0L3VzZS1zdGF0ZWZ1bC1yZWYvbGliL2luZGV4Lm0uanM/MzdkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdSBmcm9tIFwicmVhY3RcIjtcbmZ1bmN0aW9uIHMoYyA9IG51bGwpIHtcbiAgbGV0IFtlLCBmXSA9IHUudXNlU3RhdGUoYyk7XG4gIGNvbnN0IHsgY3VycmVudDogciB9ID0gdS51c2VSZWYoe1xuICAgIGN1cnJlbnQ6IGVcbiAgfSk7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkociwgXCJjdXJyZW50XCIsIHtcbiAgICBnZXQ6ICgpID0+IGUsXG4gICAgc2V0OiAodCkgPT4ge1xuICAgICAgT2JqZWN0LmlzKGUsIHQpIHx8IChlID0gdCwgZih0KSk7XG4gICAgfVxuICB9KSwgcjtcbn1cbmV4cG9ydCB7XG4gIHMgYXMgZGVmYXVsdCxcbiAgcyBhcyB1c2VTdGF0ZWZ1bFJlZlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@bedrock-layout/use-stateful-ref/lib/index.m.js\n");

/***/ })

};
;