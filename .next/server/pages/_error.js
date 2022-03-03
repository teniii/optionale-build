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
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ \"../shared/lib/head\"));\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    default: obj\n  };\n}\n\nconst statusCodes = {\n  400: 'Bad Request',\n  404: 'This page could not be found',\n  405: 'Method Not Allowed',\n  500: 'Internal Server Error'\n};\n\nfunction _getInitialProps({\n  res,\n  err\n}) {\n  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n  return {\n    statusCode\n  };\n}\n\nclass ErrorComponent extends _react.default.Component {\n  render() {\n    const {\n      statusCode\n    } = this.props;\n    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';\n    return /*#__PURE__*/_react.default.createElement(\"div\", {\n      style: styles.error\n    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement(\"title\", null, statusCode ? `${statusCode}: ${title}` : 'Application error: a client-side exception has occurred')), /*#__PURE__*/_react.default.createElement(\"div\", null, /*#__PURE__*/_react.default.createElement(\"style\", {\n      dangerouslySetInnerHTML: {\n        __html: 'body { margin: 0 }'\n      }\n    }), statusCode ? /*#__PURE__*/_react.default.createElement(\"h1\", {\n      style: styles.h1\n    }, statusCode) : null, /*#__PURE__*/_react.default.createElement(\"div\", {\n      style: styles.desc\n    }, /*#__PURE__*/_react.default.createElement(\"h2\", {\n      style: styles.h2\n    }, this.props.title || statusCode ? title : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, \"Application error: a client-side exception has occurred (see the browser console for more information)\"), \".\"))));\n  }\n\n}\n\nexports.ErrorComponent = ErrorComponent;\nErrorComponent.displayName = 'ErrorPage';\nErrorComponent.getInitialProps = _getInitialProps;\nErrorComponent.origGetInitialProps = _getInitialProps;\nvar _default = ErrorComponent;\nexports.default = _default;\nconst styles = {\n  error: {\n    color: '#000',\n    background: '#fff',\n    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif',\n    height: '100vh',\n    textAlign: 'center',\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center',\n    justifyContent: 'center'\n  },\n  desc: {\n    display: 'inline-block',\n    textAlign: 'left',\n    lineHeight: '49px',\n    height: '49px',\n    verticalAlign: 'middle'\n  },\n  h1: {\n    display: 'inline-block',\n    borderRight: '1px solid rgba(0, 0, 0,.3)',\n    margin: 0,\n    marginRight: '20px',\n    padding: '10px 23px 10px 0',\n    fontSize: '24px',\n    fontWeight: 500,\n    verticalAlign: 'top'\n  },\n  h2: {\n    fontSize: '14px',\n    fontWeight: 'normal',\n    lineHeight: 'inherit',\n    margin: 0,\n    padding: 0\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFDYkEsOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsZUFBQSxHQUFrQixLQUFLLENBQXZCOztBQUNBLElBQUlHLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJQyxLQUFLLEdBQUdGLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDhDQUFELENBQVIsQ0FBbEM7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NHLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtBQUNqQ0wsSUFBQUEsT0FBTyxFQUFFSztBQUR3QixHQUFyQztBQUdIOztBQUNELE1BQU1FLFdBQVcsR0FBRztBQUNoQixPQUFLLGFBRFc7QUFFaEIsT0FBSyw4QkFGVztBQUdoQixPQUFLLG9CQUhXO0FBSWhCLE9BQUs7QUFKVyxDQUFwQjs7QUFNQSxTQUFTQyxnQkFBVCxDQUEwQjtBQUFFQyxFQUFBQSxHQUFGO0FBQVFDLEVBQUFBO0FBQVIsQ0FBMUIsRUFBMEM7QUFDdEMsUUFBTUMsVUFBVSxHQUFHRixHQUFHLElBQUlBLEdBQUcsQ0FBQ0UsVUFBWCxHQUF3QkYsR0FBRyxDQUFDRSxVQUE1QixHQUF5Q0QsR0FBRyxHQUFHQSxHQUFHLENBQUNDLFVBQVAsR0FBb0IsR0FBbkY7QUFDQSxTQUFPO0FBQ0hBLElBQUFBO0FBREcsR0FBUDtBQUdIOztBQUNELE1BQU1DLGNBQU4sU0FBNkJYLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlYSxTQUE1QyxDQUFzRDtBQUNsREMsRUFBQUEsTUFBTSxHQUFHO0FBQ0wsVUFBTTtBQUFFSCxNQUFBQTtBQUFGLFFBQWtCLEtBQUtJLEtBQTdCO0FBQ0EsVUFBTUMsS0FBSyxHQUFHLEtBQUtELEtB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QUUsRUFBRTtBQUNBYSxJQUFBQSxPQUFPLEVBQUUsY0FEVDtBQUVBTSxJQUFBQSxXQUFXLEVBQUUsNEJBRmI7QUFHQUMsSUFBQUEsTUFBTSxFQUFFLENBSFI7QUFJQUMsSUFBQUEsV0FBVyxFQUFFLE1BSmI7QUFLQUMsSUFBQUEsT0FBTyxFQUFFLGtCQUxUO0FBTUFDLElBQUFBLFFBQVEsRUFBRSxNQU5WO0FBT0FDLElBQUFBLFVBQVUsRUFBRSxHQVBaO0FBUUFOLElBQUFBLGFBQWEsRUFBRTtBQVJmLEdBbkJPO0FBNkJYaEIsRUFBQUEsRUFBRSxFQUFFO0FBQ0FxQixJQUFBQSxRQUFRLEVBQUUsTUFEVjtBQUVBQyxJQUFBQSxVQUFVLEVBQUUsUUFGWjtBQUdBUCxJQUFBQSxVQUFVLEVBQUUsU0FIWjtBQUlBRyxJQUFBQSxNQUFNLEVBQUUsQ0FKUjtBQUtBRSxJQUFBQSxPQUFPLEVBQUU7QUFMVDtBQTdCTyxDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxpdHpUZXN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fZXJyb3IuanM/ZmRhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2hlYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc3RhdHVzQ29kZXMgPSB7XG4gICAgNDAwOiAnQmFkIFJlcXVlc3QnLFxuICAgIDQwNDogJ1RoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQnLFxuICAgIDQwNTogJ01ldGhvZCBOb3QgQWxsb3dlZCcsXG4gICAgNTAwOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJ1xufTtcbmZ1bmN0aW9uIF9nZXRJbml0aWFsUHJvcHMoeyByZXMgLCBlcnIgIH0pIHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzICYmIHJlcy5zdGF0dXNDb2RlID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IDQwNDtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXNDb2RlXG4gICAgfTtcbn1cbmNsYXNzIEVycm9yQ29tcG9uZW50IGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzQ29kZSAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZSB8fCBzdGF0dXNDb2Rlc1tzdGF0dXNDb2RlXSB8fCAnQW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWQnO1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuZXJyb3JcbiAgICAgICAgfSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIG51bGwsIHN0YXR1c0NvZGUgPyBgJHtzdGF0dXNDb2RlfTogJHt0aXRsZX1gIDogJ0FwcGxpY2F0aW9uIGVycm9yOiBhIGNsaWVudC1zaWRlIGV4Y2VwdGlvbiBoYXMgb2NjdXJyZWQnKSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogJ2JvZHkgeyBtYXJnaW46IDAgfSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksIHN0YXR1c0NvZGUgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7XG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmgxXG4gICAgICAgIH0sIHN0YXR1c0NvZGUpIDogbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuZGVzY1xuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7XG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmgyXG4gICAgICAgIH0sIHRoaXMucHJvcHMudGl0bGUgfHwgc3RhdHVzQ29kZSA/IHRpdGxlIDogLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCBcIkFwcGxpY2F0aW9uIGVycm9yOiBhIGNsaWVudC1zaWRlIGV4Y2VwdGlvbiBoYXMgb2NjdXJyZWQgKHNlZSB0aGUgYnJvd3NlciBjb25zb2xlIGZvciBtb3JlIGluZm9ybWF0aW9uKVwiKSwgXCIuXCIpKSkpKTtcbiAgICB9XG59XG5leHBvcnRzLkVycm9yQ29tcG9uZW50ID0gRXJyb3JDb21wb25lbnQ7XG5FcnJvckNvbXBvbmVudC5kaXNwbGF5TmFtZSA9ICdFcnJvclBhZ2UnO1xuRXJyb3JDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wcztcbkVycm9yQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzO1xudmFyIF9kZWZhdWx0ID0gRXJyb3JDb21wb25lbnQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBlcnJvcjoge1xuICAgICAgICBjb2xvcjogJyMwMDAnLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICAgIGZvbnRGYW1pbHk6ICctYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBcIkZpcmEgU2Fuc1wiLCBBdmVuaXIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWYnLFxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgICB9LFxuICAgIGRlc2M6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDlweCcsXG4gICAgICAgIGhlaWdodDogJzQ5cHgnLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xuICAgIH0sXG4gICAgaDE6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwuMyknLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMjBweCcsXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4IDIzcHggMTBweCAwJyxcbiAgICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJ1xuICAgIH0sXG4gICAgaDI6IHtcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBwYWRkaW5nOiAwXG4gICAgfVxufTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2Vycm9yLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oZWFkIiwib2JqIiwiX19lc01vZHVsZSIsInN0YXR1c0NvZGVzIiwiX2dldEluaXRpYWxQcm9wcyIsInJlcyIsImVyciIsInN0YXR1c0NvZGUiLCJFcnJvckNvbXBvbmVudCIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwidGl0bGUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJzdHlsZXMiLCJlcnJvciIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiaDEiLCJkZXNjIiwiaDIiLCJGcmFnbWVudCIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIl9kZWZhdWx0IiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiZm9udEZhbWlseSIsImhlaWdodCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibGluZUhlaWdodCIsInZlcnRpY2FsQWxpZ24iLCJib3JkZXJSaWdodCIsIm1hcmdpbiIsIm1hcmdpblJpZ2h0IiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_error.js\n");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_error.js"));
module.exports = __webpack_exports__;

})();