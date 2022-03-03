"use strict";
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
exports.id = "blitz-db";
exports.ids = ["blitz-db"];
exports.modules = {

/***/ "./db/index.ts":
/*!*********************!*\
  !*** ./db/index.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/stdlib */ \"next/stdlib\");\n/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_stdlib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _prisma_client__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _prisma_client__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\nconst EnhancedPrisma = (0,next_stdlib__WEBPACK_IMPORTED_MODULE_0__.enhancePrisma)(_prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient);\n\nconst prismaClient = new EnhancedPrisma({\n  log: [{\n    emit: \"event\",\n    level: \"query\"\n  }]\n});\nprismaClient.$on(\"query\", async e => {\n  console.log(`${e.query} \\n ~~PARAMS~~ ${e.params}\\n\\n`);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prismaClient);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYi9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNRSxjQUFjLEdBQUdGLDBEQUFhLENBQUNDLHdEQUFELENBQXBDO0FBRUE7QUFFQSxNQUFNRSxZQUFZLEdBQUcsSUFBSUQsY0FBSixDQUFtQjtBQUFFRSxFQUFBQSxHQUFHLEVBQUUsQ0FBQztBQUFFQyxJQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQkMsSUFBQUEsS0FBSyxFQUFFO0FBQXhCLEdBQUQ7QUFBUCxDQUFuQixDQUFyQjtBQUVBSCxZQUFZLENBQUNJLEdBQWIsQ0FBaUIsT0FBakIsRUFBMEIsTUFBT0MsQ0FBUCxJQUFrQjtBQUMxQ0MsRUFBQUEsT0FBTyxDQUFDTCxHQUFSLENBQWEsR0FBRUksQ0FBQyxDQUFDRSxLQUFNLGtCQUFpQkYsQ0FBQyxDQUFDRyxNQUFPLE1BQWpEO0FBQ0QsQ0FGRDtBQUlBLGlFQUFlUixZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxpdHpUZXN0Ly4vZGIvaW5kZXgudHM/ZmI1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbmhhbmNlUHJpc21hIH0gZnJvbSBcImJsaXR6XCJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXG5cbmNvbnN0IEVuaGFuY2VkUHJpc21hID0gZW5oYW5jZVByaXNtYShQcmlzbWFDbGllbnQpXG5cbmV4cG9ydCAqIGZyb20gXCJAcHJpc21hL2NsaWVudFwiXG5cbmNvbnN0IHByaXNtYUNsaWVudCA9IG5ldyBFbmhhbmNlZFByaXNtYSh7IGxvZzogW3sgZW1pdDogXCJldmVudFwiLCBsZXZlbDogXCJxdWVyeVwiIH1dIH0pXG5cbnByaXNtYUNsaWVudC4kb24oXCJxdWVyeVwiLCBhc3luYyAoZTogYW55KSA9PiB7XG4gIGNvbnNvbGUubG9nKGAke2UucXVlcnl9IFxcbiB+flBBUkFNU35+ICR7ZS5wYXJhbXN9XFxuXFxuYClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYUNsaWVudFxuIl0sIm5hbWVzIjpbImVuaGFuY2VQcmlzbWEiLCJQcmlzbWFDbGllbnQiLCJFbmhhbmNlZFByaXNtYSIsInByaXNtYUNsaWVudCIsImxvZyIsImVtaXQiLCJsZXZlbCIsIiRvbiIsImUiLCJjb25zb2xlIiwicXVlcnkiLCJwYXJhbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./db/index.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/stdlib":
/*!******************************!*\
  !*** external "next/stdlib" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/stdlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./db/index.ts"));
module.exports = __webpack_exports__;

})();