/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/upload",{

/***/ "./components/upload.js":
/*!******************************!*\
  !*** ./components/upload.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/janinezielman/Documents/Sites/Strapi/library/components/upload.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar UploadForm = function UploadForm(_ref) {\n  _s();\n\n  var objects = _ref.objects,\n      fieldId = _ref.fieldId;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      image = _useState[0],\n      setImage = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      images = _useState2[0],\n      setImages = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      objectId = _useState3[0],\n      setObjectId = _useState3[1];\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {\n      var _objectId$;\n\n      var formData, res;\n      return _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log('handleSubmit');\n              e.preventDefault();\n              formData = new FormData(); // pure javascript nothing to do with react\n\n              if (image) {\n                formData.append('files', image);\n              }\n\n              if (images) {\n                console.log(images); // images.forEach(({ file }) => formData.append(`files.images`, file, file.name))\n              }\n\n              formData.append('ref', 'api::object.object');\n              formData.append('refId', (_objectId$ = objectId[0]) === null || _objectId$ === void 0 ? void 0 : _objectId$.id); //'refId' The event Id\n\n              formData.append('field', fieldId); //'field' the image field we called 'image'\n              // fieldId.forEach(({ file }) => formData.append(`files.images`, file, file.name))\n\n              _context.next = 10;\n              return fetch(\"https://cms.thenewlibrary.org/api/upload\", {\n                method: 'POST',\n                body: formData\n              });\n\n            case 10:\n              res = _context.sent;\n\n              if (res.ok) {\n                console.log('res.ok');\n                console.log('res', res);\n              }\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var handleFileChange = function handleFileChange(e) {\n    console.log('handleFileChange');\n    console.log(e.target.files); //this will give us an array and we want the first wone so we add 0\n\n    if (e.target.files.length > 1) {\n      setImages(e.target.files);\n      console.log(e.target.files);\n    } else {\n      setImage(e.target.files[0]);\n    } // setImage(e.target.files[0])\n\n  };\n\n  var handleTextChange = function handleTextChange(e) {\n    console.log('handleTextChange');\n    setObjectId(objects.filter(function (object) {\n      return object.attributes.object_id == e.target.value;\n    }));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    onSubmit: handleSubmit,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"file\",\n        onChange: handleFileChange,\n        multiple: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 6\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        onChange: handleTextChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"submit\",\n      value: \"Upload\",\n      className: \"btn\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(UploadForm, \"TtDtVNsRjMYxekdh0MJfBOz6LmQ=\");\n\n_c = UploadForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UploadForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"UploadForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91cGxvYWQuanM/OWZiNCJdLCJuYW1lcyI6WyJVcGxvYWRGb3JtIiwib2JqZWN0cyIsImZpZWxkSWQiLCJ1c2VTdGF0ZSIsImltYWdlIiwic2V0SW1hZ2UiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJvYmplY3RJZCIsInNldE9iamVjdElkIiwiaGFuZGxlU3VibWl0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJpZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInJlcyIsIm9rIiwiaGFuZGxlRmlsZUNoYW5nZSIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwiaGFuZGxlVGV4dENoYW5nZSIsImZpbHRlciIsIm9iamVjdCIsImF0dHJpYnV0ZXMiLCJvYmplY3RfaWQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUEwQjtBQUFBOztBQUFBLE1BQXZCQyxPQUF1QixRQUF2QkEsT0FBdUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsa0JBQ2xCQywrQ0FBUSxDQUFDLElBQUQsQ0FEVTtBQUFBLE1BQ3JDQyxLQURxQztBQUFBLE1BQzlCQyxRQUQ4Qjs7QUFBQSxtQkFFaEJGLCtDQUFRLENBQUMsSUFBRCxDQUZRO0FBQUEsTUFFckNHLE1BRnFDO0FBQUEsTUFFN0JDLFNBRjZCOztBQUFBLG1CQUdaSiwrQ0FBUSxDQUFDLElBQUQsQ0FISTtBQUFBLE1BR3JDSyxRQUhxQztBQUFBLE1BRzNCQyxXQUgyQjs7QUFLNUMsTUFBTUMsWUFBWTtBQUFBLDBUQUFHLGlCQUFPQyxDQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwQkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDQUYsZUFBQyxDQUFDRyxj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QUEsV0FERDtBQVdBLENBM0REOztHQUFNNUIsVTs7S0FBQUEsVTtBQTZETiwrREFBZUEsVUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdXBsb2FkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgVXBsb2FkRm9ybSA9ICh7IG9iamVjdHMsIGZpZWxkSWQgfSkgPT4ge1xuXHRjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKG51bGwpXG5cdGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShudWxsKVxuXHRjb25zdCBbb2JqZWN0SWQsIHNldE9iamVjdElkXSA9IHVzZVN0YXRlKG51bGwpXG5cblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcblx0XHRjb25zb2xlLmxvZygnaGFuZGxlU3VibWl0Jylcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblxuXHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCkgLy8gcHVyZSBqYXZhc2NyaXB0IG5vdGhpbmcgdG8gZG8gd2l0aCByZWFjdFxuXHRcdGlmIChpbWFnZSkge1xuXHRcdFx0Zm9ybURhdGEuYXBwZW5kKCdmaWxlcycsIGltYWdlKVxuXHRcdH1cblx0XHRpZiAoaW1hZ2VzKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhpbWFnZXMpXG5cdFx0XHQvLyBpbWFnZXMuZm9yRWFjaCgoeyBmaWxlIH0pID0+IGZvcm1EYXRhLmFwcGVuZChgZmlsZXMuaW1hZ2VzYCwgZmlsZSwgZmlsZS5uYW1lKSlcblx0XHR9XG5cdFx0Zm9ybURhdGEuYXBwZW5kKCdyZWYnLCAnYXBpOjpvYmplY3Qub2JqZWN0Jylcblx0XHRmb3JtRGF0YS5hcHBlbmQoJ3JlZklkJywgb2JqZWN0SWRbMF0/LmlkKSAvLydyZWZJZCcgVGhlIGV2ZW50IElkXG5cdFx0Zm9ybURhdGEuYXBwZW5kKCdmaWVsZCcsIGZpZWxkSWQpIC8vJ2ZpZWxkJyB0aGUgaW1hZ2UgZmllbGQgd2UgY2FsbGVkICdpbWFnZSdcblx0XHQvLyBmaWVsZElkLmZvckVhY2goKHsgZmlsZSB9KSA9PiBmb3JtRGF0YS5hcHBlbmQoYGZpbGVzLmltYWdlc2AsIGZpbGUsIGZpbGUubmFtZSkpXG5cblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9jbXMudGhlbmV3bGlicmFyeS5vcmcvYXBpL3VwbG9hZGAsIHtcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdGJvZHk6IGZvcm1EYXRhLFxuXHRcdH0pXG5cblx0XHRpZiAocmVzLm9rKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdyZXMub2snKVxuXHRcdFx0XHRjb25zb2xlLmxvZygncmVzJywgcmVzKVxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ2hhbmRsZUZpbGVDaGFuZ2UnKVxuXHRcdFx0Y29uc29sZS5sb2coZS50YXJnZXQuZmlsZXMpIC8vdGhpcyB3aWxsIGdpdmUgdXMgYW4gYXJyYXkgYW5kIHdlIHdhbnQgdGhlIGZpcnN0IHdvbmUgc28gd2UgYWRkIDBcblx0XHRcdGlmIChlLnRhcmdldC5maWxlcy5sZW5ndGggPiAxKXtcblx0XHRcdFx0c2V0SW1hZ2VzKGUudGFyZ2V0LmZpbGVzKVxuXHRcdFx0XHRjb25zb2xlLmxvZyhlLnRhcmdldC5maWxlcylcblx0XHRcdH0gZWxzZXtcblx0XHRcdFx0c2V0SW1hZ2UoZS50YXJnZXQuZmlsZXNbMF0pXG5cdFx0XHR9XG5cdFx0XHQvLyBzZXRJbWFnZShlLnRhcmdldC5maWxlc1swXSlcblx0fVxuXHRjb25zdCBoYW5kbGVUZXh0Q2hhbmdlID0gKGUpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdoYW5kbGVUZXh0Q2hhbmdlJylcblx0XHRcdHNldE9iamVjdElkKG9iamVjdHMuZmlsdGVyKG9iamVjdCA9PiBvYmplY3QuYXR0cmlidXRlcy5vYmplY3RfaWQgPT0gZS50YXJnZXQudmFsdWUpKTtcblx0fVxuXHRyZXR1cm4oXG5cdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPSdmaWxlJyBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX0gbXVsdGlwbGUvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT0ndGV4dCcgb25DaGFuZ2U9e2hhbmRsZVRleHRDaGFuZ2V9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxpbnB1dCB0eXBlPSdzdWJtaXQnIHZhbHVlPSdVcGxvYWQnIGNsYXNzTmFtZT0nYnRuJyAvPlxuXHRcdDwvZm9ybT5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRGb3JtXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/upload.js\n");

/***/ })

});