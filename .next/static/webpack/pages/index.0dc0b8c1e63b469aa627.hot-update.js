/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/seo */ \"./components/seo.js\");\n/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/image */ \"./components/image.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/janinezielman/Documents/Sites/Strapi/library/pages/index.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar Home = function Home(_ref) {\n  var objects = _ref.objects;\n  console.log(objects);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"grid\",\n      children: objects.map(function (item, i) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"object\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: item.attributes.object_id\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: item.attributes.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"cover-image\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_image__WEBPACK_IMPORTED_MODULE_4__.default, {\n              image: item.attributes.cover_image\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 19,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 15\n          }, _this)]\n        }, \"object\".concat(i), true, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwib2JqZWN0cyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpdGVtIiwiaSIsImF0dHJpYnV0ZXMiLCJvYmplY3RfaWQiLCJ0aXRsZSIsImNvdmVyX2ltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzVCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBLHNCQUNFLDhEQUFDLHVEQUFEO0FBQUEsMkJBRUU7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLGdCQUNHQSxPQUFPLENBQUNHLEdBQVIsQ0FBWSxVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUN4Qiw0QkFDRTtBQUFLLG1CQUFTLEVBQUMsUUFBZjtBQUFBLGtDQUNFO0FBQUEsc0JBQU9ELElBQUksQ0FBQ0UsVUFBTCxDQUFnQkM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsc0JBQUtILElBQUksQ0FBQ0UsVUFBTCxDQUFnQkU7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUsscUJBQVMsRUFBQyxhQUFmO0FBQUEsbUNBQ0UsOERBQUMsc0RBQUQ7QUFBTyxtQkFBSyxFQUFFSixJQUFJLENBQUNFLFVBQUwsQ0FBZ0JHO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUEsMkJBQXNDSixDQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBWUQsT0FiQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQkQsQ0F2QkQ7O0tBQU1OLEk7O0FBdUNOLCtEQUFlQSxJQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCJcbmltcG9ydCBTZW8gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VvXCJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIlxuaW1wb3J0IEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL2ltYWdlXCJcblxuY29uc3QgSG9tZSA9ICh7IG9iamVjdHMgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhvYmplY3RzKVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICB7LyogPFNlbyBzZW89e2hvbWVwYWdlLmF0dHJpYnV0ZXMuc2VvfSAvPiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgICB7b2JqZWN0cy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9iamVjdFwiIGtleT17YG9iamVjdCR7aX1gfT5cbiAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uYXR0cmlidXRlcy5vYmplY3RfaWR9PC9zcGFuPlxuICAgICAgICAgICAgICA8aDI+e2l0ZW0uYXR0cmlidXRlcy50aXRsZX08L2gyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIGltYWdlPXtpdGVtLmF0dHJpYnV0ZXMuY292ZXJfaW1hZ2V9Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiB7aXRlbS5hdHRyaWJ1dGVzLmNvdmVyX2ltYWdlLmRhdGEgJiYgPEltYWdlIHNyYz17aXRlbS5hdHRyaWJ1dGVzLmNvdmVyX2ltYWdlfS8+fSAqL31cbiAgICAgICAgICAgICAgey8qIDxwPntpdGVtLmF0dHJpYnV0ZXMueWVhcj8uZGF0YT8uYXR0cmlidXRlcy55ZWFyfTwvcD4gKi99XG4gICAgICAgICAgICAgIHsvKiA8cD57aXRlbS5hdHRyaWJ1dGVzLnNpemU/LmRhdGE/LmF0dHJpYnV0ZXMud2lkdGh9eHtpdGVtLmF0dHJpYnV0ZXMuc2l6ZS5kYXRhLmF0dHJpYnV0ZXMuaGVpZ2h0fWNtPC9wPiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG5cbiAgY29uc3QgW29iamVjdFJlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZmV0Y2hBUEkoXCIvb2JqZWN0c1wiLCB7IHBvcHVsYXRlOiBcIipcIiB9KSxcbiAgXSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBvYmplY3RzOiBvYmplY3RSZXMuZGF0YSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});