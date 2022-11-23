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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/janinezielman/Documents/Sites/Strapi/library/components/upload.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar UploadForm = function UploadForm(_ref) {\n  _s();\n\n  var objects = _ref.objects,\n      fieldId = _ref.fieldId;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      image = _useState[0],\n      setImage = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      images = _useState2[0],\n      setImages = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      objectId = _useState3[0],\n      setObjectId = _useState3[1];\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {\n      var _objectId$;\n\n      var formData, res;\n      return _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log('handleSubmit');\n              e.preventDefault();\n              formData = new FormData(); // pure javascript nothing to do with react\n\n              if (image) {\n                formData.append('files', image);\n              }\n\n              if (images) {\n                Object.keys(images).forEach(function (_ref3) {\n                  var file = _ref3.file;\n                  console.log(images); // formData.append(`files.images`, file)\n                });\n              }\n\n              formData.append('ref', 'api::object.object');\n              formData.append('refId', (_objectId$ = objectId[0]) === null || _objectId$ === void 0 ? void 0 : _objectId$.id); //'refId' The event Id\n\n              formData.append('field', fieldId); //'field' the image field we called 'image'\n              // fieldId.forEach(({ file }) => formData.append(`files.images`, file, file.name))\n\n              _context.next = 10;\n              return fetch(\"https://cms.thenewlibrary.org/api/upload\", {\n                method: 'POST',\n                body: formData\n              });\n\n            case 10:\n              res = _context.sent;\n\n              if (res.ok) {\n                console.log('res.ok');\n                console.log('res', res);\n              }\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var handleFileChange = function handleFileChange(e) {\n    console.log('handleFileChange');\n    console.log(e.target.files); //this will give us an array and we want the first wone so we add 0\n\n    if (e.target.files.length > 1) {\n      setImages(e.target.files);\n      console.log(e.target.files);\n    } else {\n      setImage(e.target.files[0]);\n    } // setImage(e.target.files[0])\n\n  };\n\n  var handleTextChange = function handleTextChange(e) {\n    console.log('handleTextChange');\n    setObjectId(objects.filter(function (object) {\n      return object.attributes.object_id == e.target.value;\n    }));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    onSubmit: handleSubmit,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"file\",\n        onChange: handleFileChange,\n        multiple: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 6\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        onChange: handleTextChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"submit\",\n      value: \"Upload\",\n      className: \"btn\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(UploadForm, \"TtDtVNsRjMYxekdh0MJfBOz6LmQ=\");\n\n_c = UploadForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UploadForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"UploadForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91cGxvYWQuanM/OWZiNCJdLCJuYW1lcyI6WyJVcGxvYWRGb3JtIiwib2JqZWN0cyIsImZpZWxkSWQiLCJ1c2VTdGF0ZSIsImltYWdlIiwic2V0SW1hZ2UiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJvYmplY3RJZCIsInNldE9iamVjdElkIiwiaGFuZGxlU3VibWl0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImZpbGUiLCJpZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInJlcyIsIm9rIiwiaGFuZGxlRmlsZUNoYW5nZSIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwiaGFuZGxlVGV4dENoYW5nZSIsImZpbHRlciIsIm9iamVjdCIsImF0dHJpYnV0ZXMiLCJvYmplY3RfaWQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUEwQjtBQUFBOztBQUFBLE1BQXZCQyxPQUF1QixRQUF2QkEsT0FBdUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsa0JBQ2xCQywrQ0FBUSxDQUFDLElBQUQsQ0FEVTtBQUFBLE1BQ3JDQyxLQURxQztBQUFBLE1BQzlCQyxRQUQ4Qjs7QUFBQSxtQkFFaEJGLCtDQUFRLENBQUMsSUFBRCxDQUZRO0FBQUEsTUFFckNHLE1BRnFDO0FBQUEsTUFFN0JDLFNBRjZCOztBQUFBLG1CQUdaSiwrQ0FBUSxDQUFDLElBQUQsQ0FISTtBQUFBLE1BR3JDSyxRQUhxQztBQUFBLE1BRzNCQyxXQUgyQjs7QUFLNUMsTUFBTUMsWUFBWTtBQUFBLDBUQUFHLGlCQUFPQyxDQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwQkMscUJBQU8sQ0FBQ0Ms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QUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkQsZUFPQztBQUFPLFVBQUksRUFBQyxRQUFaO0FBQXFCLFdBQUssRUFBQyxRQUEzQjtBQUFvQyxlQUFTLEVBQUM7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBV0EsQ0E3REQ7O0dBQU1oQyxVOztLQUFBQSxVO0FBK0ROLCtEQUFlQSxVQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91cGxvYWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBVcGxvYWRGb3JtID0gKHsgb2JqZWN0cywgZmllbGRJZCB9KSA9PiB7XG5cdGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUobnVsbClcblx0Y29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKG51bGwpXG5cdGNvbnN0IFtvYmplY3RJZCwgc2V0T2JqZWN0SWRdID0gdXNlU3RhdGUobnVsbClcblxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKCdoYW5kbGVTdWJtaXQnKVxuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXG5cdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKSAvLyBwdXJlIGphdmFzY3JpcHQgbm90aGluZyB0byBkbyB3aXRoIHJlYWN0XG5cdFx0aWYgKGltYWdlKSB7XG5cdFx0XHRmb3JtRGF0YS5hcHBlbmQoJ2ZpbGVzJywgaW1hZ2UpXG5cdFx0fVxuXHRcdGlmIChpbWFnZXMpIHtcblx0XHRcdE9iamVjdC5rZXlzKGltYWdlcykuZm9yRWFjaCgoeyBmaWxlIH0pID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coaW1hZ2VzKVxuXHRcdFx0XHQvLyBmb3JtRGF0YS5hcHBlbmQoYGZpbGVzLmltYWdlc2AsIGZpbGUpXG5cdFx0XHR9KVxuXHRcdH1cblx0XHRmb3JtRGF0YS5hcHBlbmQoJ3JlZicsICdhcGk6Om9iamVjdC5vYmplY3QnKVxuXHRcdGZvcm1EYXRhLmFwcGVuZCgncmVmSWQnLCBvYmplY3RJZFswXT8uaWQpIC8vJ3JlZklkJyBUaGUgZXZlbnQgSWRcblx0XHRmb3JtRGF0YS5hcHBlbmQoJ2ZpZWxkJywgZmllbGRJZCkgLy8nZmllbGQnIHRoZSBpbWFnZSBmaWVsZCB3ZSBjYWxsZWQgJ2ltYWdlJ1xuXHRcdC8vIGZpZWxkSWQuZm9yRWFjaCgoeyBmaWxlIH0pID0+IGZvcm1EYXRhLmFwcGVuZChgZmlsZXMuaW1hZ2VzYCwgZmlsZSwgZmlsZS5uYW1lKSlcblxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2Ntcy50aGVuZXdsaWJyYXJ5Lm9yZy9hcGkvdXBsb2FkYCwge1xuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0Ym9keTogZm9ybURhdGEsXG5cdFx0fSlcblxuXHRcdGlmIChyZXMub2spIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3Jlcy5vaycpXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdyZXMnLCByZXMpXG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChlKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnaGFuZGxlRmlsZUNoYW5nZScpXG5cdFx0XHRjb25zb2xlLmxvZyhlLnRhcmdldC5maWxlcykgLy90aGlzIHdpbGwgZ2l2ZSB1cyBhbiBhcnJheSBhbmQgd2Ugd2FudCB0aGUgZmlyc3Qgd29uZSBzbyB3ZSBhZGQgMFxuXHRcdFx0aWYgKGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDEpe1xuXHRcdFx0XHRzZXRJbWFnZXMoZS50YXJnZXQuZmlsZXMpXG5cdFx0XHRcdGNvbnNvbGUubG9nKGUudGFyZ2V0LmZpbGVzKVxuXHRcdFx0fSBlbHNle1xuXHRcdFx0XHRzZXRJbWFnZShlLnRhcmdldC5maWxlc1swXSlcblx0XHRcdH1cblx0XHRcdC8vIHNldEltYWdlKGUudGFyZ2V0LmZpbGVzWzBdKVxuXHR9XG5cdGNvbnN0IGhhbmRsZVRleHRDaGFuZ2UgPSAoZSkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ2hhbmRsZVRleHRDaGFuZ2UnKVxuXHRcdFx0c2V0T2JqZWN0SWQob2JqZWN0cy5maWx0ZXIob2JqZWN0ID0+IG9iamVjdC5hdHRyaWJ1dGVzLm9iamVjdF9pZCA9PSBlLnRhcmdldC52YWx1ZSkpO1xuXHR9XG5cdHJldHVybihcblx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9J2ZpbGUnIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfSBtdWx0aXBsZS8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPSd0ZXh0JyBvbkNoYW5nZT17aGFuZGxlVGV4dENoYW5nZX0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGlucHV0IHR5cGU9J3N1Ym1pdCcgdmFsdWU9J1VwbG9hZCcgY2xhc3NOYW1lPSdidG4nIC8+XG5cdFx0PC9mb3JtPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEZvcm1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/upload.js\n");

/***/ })

});