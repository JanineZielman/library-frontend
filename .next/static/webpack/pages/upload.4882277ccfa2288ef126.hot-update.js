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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/janinezielman/Documents/Sites/Strapi/library/components/upload.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar UploadForm = function UploadForm(_ref) {\n  _s();\n\n  var objects = _ref.objects,\n      fieldId = _ref.fieldId,\n      fileName = _ref.fileName;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      objectId = _useState[0],\n      setObjectId = _useState[1];\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {\n      var _objectId$;\n\n      var formData, res;\n      return _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log('handleSubmit');\n              e.preventDefault();\n              formData = new FormData(); // pure javascript nothing to do with react\n\n              formData.append('files', fileName);\n              formData.append('ref', 'api::object.object');\n              formData.append('refId', (_objectId$ = objectId[0]) === null || _objectId$ === void 0 ? void 0 : _objectId$.id); //'refId' The event Id\n\n              formData.append('field', fieldId); //'field' the image field we called 'image'\n\n              _context.next = 9;\n              return fetch(\"https://cms.thenewlibrary.org/api/upload\", {\n                method: 'POST',\n                body: formData\n              });\n\n            case 9:\n              res = _context.sent;\n\n              if (res.ok) {\n                console.log('res.ok');\n                console.log('res', res);\n                console.log(formData);\n              }\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var handleTextChange = function handleTextChange(e) {\n    console.log('handleTextChange');\n    setObjectId(objects.filter(function (object) {\n      return object.attributes.object_id == e.target.value;\n    }));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        onChange: handleTextChange,\n        className: \"text-input\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"submit\",\n        value: \"Upload\",\n        className: \"btn\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 4\n    }, _this), fileName && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"preview-image\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: \"/export/\".concat(fileName.name)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 6\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(UploadForm, \"GemApAYgbhF1kaZ7qD0y9O3FDSw=\");\n\n_c = UploadForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UploadForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"UploadForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91cGxvYWQuanM/OWZiNCJdLCJuYW1lcyI6WyJVcGxvYWRGb3JtIiwib2JqZWN0cyIsImZpZWxkSWQiLCJmaWxlTmFtZSIsInVzZVN0YXRlIiwib2JqZWN0SWQiLCJzZXRPYmplY3RJZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiaWQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJyZXMiLCJvayIsImhhbmRsZVRleHRDaGFuZ2UiLCJmaWx0ZXIiLCJvYmplY3QiLCJhdHRyaWJ1dGVzIiwib2JqZWN0X2lkIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFtQztBQUFBOztBQUFBLE1BQWhDQyxPQUFnQyxRQUFoQ0EsT0FBZ0M7QUFBQSxNQUF2QkMsT0FBdUIsUUFBdkJBLE9BQXVCO0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjOztBQUFBLGtCQUNyQkMsK0NBQVEsQ0FBQyxJQUFELENBRGE7QUFBQSxNQUM5Q0MsUUFEOEM7QUFBQSxNQUNwQ0MsV0FEb0M7O0FBR3JELE1BQU1DLFlBQVk7QUFBQSwwVEFBRyxpQkFBT0MsQ0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FGLGVBQUMsQ0FBQ0csY0FBRjtBQUdNQyxzQkFMYyxHQUtILElBQUlDLFFBQUosRUFMRyxFQUtZOztBQUVoQ0Qsc0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQixPQUFoQixFQUF5QlgsUUFBekI7QUFDQVMsc0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQixLQUFoQixFQUF1QixvQkFBdkI7QUFDQUYsc0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQixPQUFoQixnQkFBeUJULFFBQVEsQ0FBQyxDQUFELENBQWpDLCtDQUF5QixXQUFhVSxFQUF0QyxFQVRvQixDQVNzQjs7QUFDMUNILHNCQUFRLENBQUNFLE1BQVQsQ0FBZ0IsT0FBaEIsRUFBeUJaLE9BQXpCLEVBVm9CLENBVWM7O0FBVmQ7QUFBQSxxQkFhRmMsS0FBSyw2Q0FBNkM7QUFDbEVDLHNCQUFNLEVBQUUsTUFEMEQ7QUFFbEVDLG9CQUFJLEVBQUVOO0FBRjRELGVBQTdDLENBYkg7O0FBQUE7QUFhZE8saUJBYmM7O0FBa0JwQixrQkFBSUEsR0FBRyxDQUFDQyxFQUFSLEVBQVk7QUFDVlgsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQUQsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJTLEdBQW5CO0FBQ0FWLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUUsUUFBWjtBQUNEOztBQXRCbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWkwsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUF5QkEsTUFBTWMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDYixDQUFELEVBQU87QUFDOUJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0FKLGVBQVcsQ0FBQ0wsT0FBTyxDQUFDcUIsTUFBUixDQUFlLFVBQUFDLE1BQU07QUFBQSxhQUFJQSxNQUFNLENBQUNDLFVBQVAsQ0FBa0JDLFNBQWxCLElBQStCakIsQ0FBQyxDQUFDa0IsTUFBRixDQUFTQyxLQUE1QztBQUFBLEtBQXJCLENBQUQsQ0FBWDtBQUNELEdBSEQ7O0FBSUEsc0JBQ0M7QUFBQSw0QkFDQztBQUFNLGNBQVEsRUFBRXBCLFlBQWhCO0FBQUEsOEJBQ0M7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixnQkFBUSxFQUFFYyxnQkFBN0I7QUFBK0MsaUJBQVMsRUFBQztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQztBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGFBQUssRUFBQyxRQUEzQjtBQUFvQyxpQkFBUyxFQUFDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxFQUtFbEIsUUFBUSxpQkFDUjtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUEsNkJBQ0M7QUFBSyxXQUFHLG9CQUFhQSxRQUFRLENBQUN5QixJQUF0QjtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQSxrQkFERDtBQWFBLENBN0NEOztHQUFNNUIsVTs7S0FBQUEsVTtBQStDTiwrREFBZUEsVUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdXBsb2FkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgVXBsb2FkRm9ybSA9ICh7IG9iamVjdHMsIGZpZWxkSWQsIGZpbGVOYW1lfSkgPT4ge1xuXHRjb25zdCBbb2JqZWN0SWQsIHNldE9iamVjdElkXSA9IHVzZVN0YXRlKG51bGwpO1xuXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coJ2hhbmRsZVN1Ym1pdCcpXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cblxuXHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCkgLy8gcHVyZSBqYXZhc2NyaXB0IG5vdGhpbmcgdG8gZG8gd2l0aCByZWFjdFxuXG5cdFx0Zm9ybURhdGEuYXBwZW5kKCdmaWxlcycsIGZpbGVOYW1lKVxuXHRcdGZvcm1EYXRhLmFwcGVuZCgncmVmJywgJ2FwaTo6b2JqZWN0Lm9iamVjdCcpXG5cdFx0Zm9ybURhdGEuYXBwZW5kKCdyZWZJZCcsIG9iamVjdElkWzBdPy5pZCkgLy8ncmVmSWQnIFRoZSBldmVudCBJZFxuXHRcdGZvcm1EYXRhLmFwcGVuZCgnZmllbGQnLCBmaWVsZElkKSAvLydmaWVsZCcgdGhlIGltYWdlIGZpZWxkIHdlIGNhbGxlZCAnaW1hZ2UnXG5cblxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2Ntcy50aGVuZXdsaWJyYXJ5Lm9yZy9hcGkvdXBsb2FkYCwge1xuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0Ym9keTogZm9ybURhdGEsXG5cdFx0fSlcblxuXHRcdGlmIChyZXMub2spIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3Jlcy5vaycpXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdyZXMnLCByZXMpXG5cdFx0XHRcdGNvbnNvbGUubG9nKGZvcm1EYXRhKVxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGhhbmRsZVRleHRDaGFuZ2UgPSAoZSkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ2hhbmRsZVRleHRDaGFuZ2UnKVxuXHRcdFx0c2V0T2JqZWN0SWQob2JqZWN0cy5maWx0ZXIob2JqZWN0ID0+IG9iamVjdC5hdHRyaWJ1dGVzLm9iamVjdF9pZCA9PSBlLnRhcmdldC52YWx1ZSkpO1xuXHR9XG5cdHJldHVybihcblx0XHQ8PlxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPSd0ZXh0JyBvbkNoYW5nZT17aGFuZGxlVGV4dENoYW5nZX0gY2xhc3NOYW1lPVwidGV4dC1pbnB1dFwiLz5cblx0XHRcdFx0PGlucHV0IHR5cGU9J3N1Ym1pdCcgdmFsdWU9J1VwbG9hZCcgY2xhc3NOYW1lPSdidG4nIC8+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0XHR7ZmlsZU5hbWUgJiYgXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcmV2aWV3LWltYWdlJz5cblx0XHRcdFx0XHQ8aW1nIHNyYz17YC9leHBvcnQvJHtmaWxlTmFtZS5uYW1lfWB9Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHR9XG5cdFx0PC8+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkRm9ybVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/upload.js\n");

/***/ })

});