/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/upload",{

/***/ "./pages/upload.js":
/*!*************************!*\
  !*** ./pages/upload.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/upload */ \"./components/upload.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/janinezielman/Documents/Sites/Strapi/library/pages/upload.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Upload = function Upload(_ref) {\n  _s();\n\n  var objects = _ref.objects;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      fieldId = _useState[0],\n      setFieldId = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      fileName = _useState2[0],\n      setFileName = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var button = document.getElementsByClassName(\"button\");\n\n    var addSelectClass = function addSelectClass() {\n      removeSelectClass();\n      this.classList.add('selected');\n      setFieldId(this.id);\n\n      function createFile() {\n        return _createFile.apply(this, arguments);\n      }\n\n      function _createFile() {\n        _createFile = (0,_Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n          var response, data, metadata;\n          return _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  _context.next = 2;\n                  return fetch('/export/scan001.jpg');\n\n                case 2:\n                  response = _context.sent;\n                  _context.next = 5;\n                  return response.blob();\n\n                case 5:\n                  data = _context.sent;\n                  metadata = {\n                    type: 'image/jpeg'\n                  };\n                  setFileName(new File([data], \"scan001.jpg\", metadata));\n                  console.log(fileName);\n\n                case 9:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee);\n        }));\n        return _createFile.apply(this, arguments);\n      }\n\n      createFile();\n    };\n\n    var removeSelectClass = function removeSelectClass() {\n      for (var i = 0; i < button.length; i++) {\n        button[i].classList.remove('selected');\n      }\n    };\n\n    for (var i = 0; i < button.length; i++) {\n      button[i].addEventListener(\"click\", addSelectClass);\n    }\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"upload-page\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"interface\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \" Upload your scan!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Select:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"buttons\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"button\",\n          id: \"cover_image\",\n          children: \"Front Cover\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"button\",\n          id: \"spines\",\n          children: \"Spine\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"button\",\n          id: \"back_cover\",\n          children: \"Back Cover\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"button\",\n          id: \"colophon\",\n          children: \"Colophon\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"button\",\n          id: \"content\",\n          children: \"Content\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 15\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_upload__WEBPACK_IMPORTED_MODULE_4__.default, {\n        objects: objects,\n        fieldId: fieldId,\n        fileName: fileName\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 7\n  }, _this);\n};\n\n_s(Upload, \"vPBaMLlm5+iQDh/wyCyvqfg7MI0=\");\n\n_c = Upload;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Upload);\n\nvar _c;\n\n$RefreshReg$(_c, \"Upload\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXBsb2FkLmpzP2NmZjYiXSwibmFtZXMiOlsiVXBsb2FkIiwib2JqZWN0cyIsInVzZVN0YXRlIiwiZmllbGRJZCIsInNldEZpZWxkSWQiLCJmaWxlTmFtZSIsInNldEZpbGVOYW1lIiwidXNlRWZmZWN0IiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYWRkU2VsZWN0Q2xhc3MiLCJyZW1vdmVTZWxlY3RDbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsImlkIiwiY3JlYXRlRmlsZSIsImZldGNoIiwicmVzcG9uc2UiLCJibG9iIiwiZGF0YSIsIm1ldGFkYXRhIiwidHlwZSIsIkZpbGUiLCJjb25zb2xlIiwibG9nIiwiaSIsImxlbmd0aCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBZTtBQUFBOztBQUFBLE1BQWJDLE9BQWEsUUFBYkEsT0FBYTs7QUFBQSxrQkFDRUMsK0NBQVEsQ0FBQyxJQUFELENBRFY7QUFBQSxNQUNyQkMsT0FEcUI7QUFBQSxNQUNaQyxVQURZOztBQUFBLG1CQUVLRiwrQ0FBUSxDQUFDLElBQUQsQ0FGYjtBQUFBLE1BRXBCRyxRQUZvQjtBQUFBLE1BRVZDLFdBRlU7O0FBSTVCQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsUUFBaEMsQ0FBYjs7QUFFQSxRQUFJQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQVU7QUFDN0JDLHVCQUFpQjtBQUNqQixXQUFLQyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsVUFBbkI7QUFDQVYsZ0JBQVUsQ0FBQyxLQUFLVyxFQUFOLENBQVY7O0FBSDZCLGVBSWRDLFVBSmM7QUFBQTtBQUFBOztBQUFBO0FBQUEsZ1VBSTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQ3VCQyxLQUFLLENBQUMscUJBQUQsQ0FENUI7O0FBQUE7QUFDTUMsMEJBRE47QUFBQTtBQUFBLHlCQUVtQkEsUUFBUSxDQUFDQyxJQUFULEVBRm5COztBQUFBO0FBRU1DLHNCQUZOO0FBR01DLDBCQUhOLEdBR2lCO0FBQ2JDLHdCQUFJLEVBQUU7QUFETyxtQkFIakI7QUFNRWhCLDZCQUFXLENBQUMsSUFBSWlCLElBQUosQ0FBUyxDQUFDSCxJQUFELENBQVQsRUFBaUIsYUFBakIsRUFBZ0NDLFFBQWhDLENBQUQsQ0FBWDtBQUNBRyx5QkFBTyxDQUFDQyxHQUFSLENBQVlwQixRQUFaOztBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSjZCO0FBQUE7QUFBQTs7QUFhN0JXLGdCQUFVO0FBQ1gsS0FkRDs7QUFnQkEsUUFBSUosaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFVO0FBQ2hDLFdBQUssSUFBSWMsQ0FBQyxHQUFFLENBQVosRUFBZUEsQ0FBQyxHQUFHbEIsTUFBTSxDQUFDbUIsTUFBMUIsRUFBa0NELENBQUMsRUFBbkMsRUFBdUM7QUFDckNsQixjQUFNLENBQUNrQixDQUFELENBQU4sQ0FBVWIsU0FBVixDQUFvQmUsTUFBcEIsQ0FBMkIsVUFBM0I7QUFDRDtBQUNGLEtBSkQ7O0FBTUEsU0FBSyxJQUFJRixDQUFDLEdBQUUsQ0FBWixFQUFlQSxDQUFDLEdBQUdsQixNQUFNLENBQUNtQixNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUNyQ2xCLFlBQU0sQ0FBQ2tCLENBQUQsQ0FBTixDQUFVRyxnQkFBVixDQUEyQixPQUEzQixFQUFtQ2xCLGNBQW5DO0FBQ0Q7QUFDRixHQTVCUSxDQUFUO0FBK0JFLHNCQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxRQUFmO0FBQXdCLFlBQUUsRUFBQyxhQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssbUJBQVMsRUFBQyxRQUFmO0FBQXdCLFlBQUUsRUFBQyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUssbUJBQVMsRUFBQyxRQUFmO0FBQXdCLFlBQUUsRUFBQyxZQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQUlFO0FBQUssbUJBQVMsRUFBQyxRQUFmO0FBQXdCLFlBQUUsRUFBQyxVQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQUtFO0FBQUssbUJBQVMsRUFBQyxRQUFmO0FBQXdCLFlBQUUsRUFBQyxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISixlQVdJLDhEQUFDLHVEQUFEO0FBQVksZUFBTyxFQUFFVixPQUFyQjtBQUE4QixlQUFPLEVBQUVFLE9BQXZDO0FBQWdELGdCQUFRLEVBQUVFO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkgsQ0FwREQ7O0dBQU1MLE07O0tBQUFBLE07O0FBb0VOLCtEQUFlQSxNQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdXBsb2FkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIlxuaW1wb3J0IFVwbG9hZEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy91cGxvYWQnXG5cbmNvbnN0IFVwbG9hZCA9ICh7b2JqZWN0c30pID0+IHtcbiAgY29uc3QgW2ZpZWxkSWQsIHNldEZpZWxkSWRdID0gdXNlU3RhdGUobnVsbClcbiAgXHRjb25zdCBbZmlsZU5hbWUsIHNldEZpbGVOYW1lXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ1dHRvblwiKTtcblxuICAgIHZhciBhZGRTZWxlY3RDbGFzcyA9IGZ1bmN0aW9uKCl7XG4gICAgICByZW1vdmVTZWxlY3RDbGFzcygpO1xuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1x0XG4gICAgICBzZXRGaWVsZElkKHRoaXMuaWQpXG4gICAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVGaWxlKCl7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvZXhwb3J0L3NjYW4wMDEuanBnJyk7XG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuICAgICAgICBsZXQgbWV0YWRhdGEgPSB7XG4gICAgICAgICAgdHlwZTogJ2ltYWdlL2pwZWcnXG4gICAgICAgIH07XG4gICAgICAgIHNldEZpbGVOYW1lKG5ldyBGaWxlKFtkYXRhXSwgXCJzY2FuMDAxLmpwZ1wiLCBtZXRhZGF0YSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhmaWxlTmFtZSlcbiAgICAgIH1cbiAgICAgIGNyZWF0ZUZpbGUoKTtcbiAgICB9XG5cbiAgICB2YXIgcmVtb3ZlU2VsZWN0Q2xhc3MgPSBmdW5jdGlvbigpe1xuICAgICAgZm9yICh2YXIgaSA9MDsgaSA8IGJ1dHRvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBidXR0b25baV0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmb3IgKHZhciBpID0wOyBpIDwgYnV0dG9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBidXR0b25baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsYWRkU2VsZWN0Q2xhc3MpO1xuICAgIH1cbiAgfSlcblxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndXBsb2FkLXBhZ2UnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW50ZXJmYWNlJz5cbiAgICAgICAgICAgIDxoMT4gVXBsb2FkIHlvdXIgc2NhbiE8L2gxPlxuICAgICAgICAgICAgPHA+U2VsZWN0OjwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbicgaWQ9XCJjb3Zlcl9pbWFnZVwiPkZyb250IENvdmVyPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b24nIGlkPVwic3BpbmVzXCI+U3BpbmU8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbicgaWQ9XCJiYWNrX2NvdmVyXCI+QmFjayBDb3ZlcjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uJyBpZD1cImNvbG9waG9uXCI+Q29sb3Bob248L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbicgaWQ9XCJjb250ZW50XCI+Q29udGVudDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxVcGxvYWRGb3JtIG9iamVjdHM9e29iamVjdHN9IGZpZWxkSWQ9e2ZpZWxkSWR9IGZpbGVOYW1lPXtmaWxlTmFtZX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiBcbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcblxuICBjb25zdCBbb2JqZWN0UmVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBmZXRjaEFQSShcIi9vYmplY3RzXCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICBdKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG9iamVjdHM6IG9iamVjdFJlcy5kYXRhLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVcGxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/upload.js\n");

/***/ })

});