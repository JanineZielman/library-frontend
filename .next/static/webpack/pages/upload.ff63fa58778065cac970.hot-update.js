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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/janinezielman/Documents/Sites/Strapi/library/components/upload.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar UploadForm = function UploadForm(_ref) {\n  _s();\n\n  var objects = _ref.objects,\n      fieldId = _ref.fieldId;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      image = _useState[0],\n      setImage = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      images = _useState2[0],\n      setImages = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      objectId = _useState3[0],\n      setObjectId = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      fileName = _useState4[0],\n      setFileName = _useState4[1];\n\n  function fetchFiles() {\n    function createFile() {\n      return _createFile.apply(this, arguments);\n    }\n\n    function _createFile() {\n      _createFile = (0,_Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var response, data, metadata;\n        return _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch('/export/scan001.jpg');\n\n              case 2:\n                response = _context.sent;\n                _context.next = 5;\n                return response.blob();\n\n              case 5:\n                data = _context.sent;\n                metadata = {\n                  type: 'image/jpeg'\n                };\n                setFileName(new File([data], \"scan001.jpg\", metadata));\n                console.log(fileName); // formData.append('files', file)\n                // ... do something with the file or return it\n\n              case 9:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _createFile.apply(this, arguments);\n    }\n\n    createFile();\n  }\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(e) {\n      var _objectId$;\n\n      var formData, res;\n      return _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              console.log('handleSubmit');\n              e.preventDefault();\n              formData = new FormData(); // pure javascript nothing to do with react\n              // if (image) {\n              // \tformData.append('files', image)\n              // }\n              // if (images) {\n              // \tObject.entries(images).forEach(entry => {\n              // \t\tconsole.log(entry[1])\n              // \t\tformData.append(`files`, entry[1])\n              // \t});\n              // }\n\n              formData.append('files', fileName);\n              formData.append('ref', 'api::object.object');\n              formData.append('refId', (_objectId$ = objectId[0]) === null || _objectId$ === void 0 ? void 0 : _objectId$.id); //'refId' The event Id\n\n              formData.append('field', fieldId); //'field' the image field we called 'image'\n\n              _context2.next = 9;\n              return fetch(\"https://cms.thenewlibrary.org/api/upload\", {\n                method: 'POST',\n                body: formData\n              });\n\n            case 9:\n              res = _context2.sent;\n\n              if (res.ok) {\n                console.log('res.ok');\n                console.log('res', res);\n                console.log(formData);\n              }\n\n            case 11:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }(); // const handleFileChange = (e) => {\n  // \t\tconsole.log('handleFileChange')\n  // \t\tconsole.log(e.target.files) //this will give us an array and we want the first wone so we add 0\n  // \t\tif (e.target.files.length > 1){\n  // \t\t\tsetImages(e.target.files)\n  // \t\t\tconsole.log(e.target.files)\n  // \t\t} else{\n  // \t\t\tsetImage(e.target.files[0])\n  // \t\t}\n  // }\n\n\n  var handleTextChange = function handleTextChange(e) {\n    console.log('handleTextChange');\n    setObjectId(objects.filter(function (object) {\n      return object.attributes.object_id == e.target.value;\n    }));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: fetchFiles,\n      children: \"click\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 4\n    }, _this), fileName && fileName, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        onChange: handleTextChange,\n        className: \"text-input\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"submit\",\n        value: \"Upload\",\n        className: \"btn\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(UploadForm, \"+I/NK1+4HzetryvEnxkMTuU3ANQ=\");\n\n_c = UploadForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UploadForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"UploadForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91cGxvYWQuanM/OWZiNCJdLCJuYW1lcyI6WyJVcGxvYWRGb3JtIiwib2JqZWN0cyIsImZpZWxkSWQiLCJ1c2VTdGF0ZSIsImltYWdlIiwic2V0SW1hZ2UiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJvYmplY3RJZCIsInNldE9iamVjdElkIiwiZmlsZU5hbWUiLCJzZXRGaWxlTmFtZSIsImZldGNoRmlsZXMiLCJjcmVhdGVGaWxlIiwiZmV0Y2giLCJyZXNwb25zZSIsImJsb2IiLCJkYXRhIiwibWV0YWRhdGEiLCJ0eXBlIiwiRmlsZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiaWQiLCJtZXRob2QiLCJib2R5IiwicmVzIiwib2siLCJoYW5kbGVUZXh0Q2hhbmdlIiwiZmlsdGVyIiwib2JqZWN0IiwiYXR0cmlidXRlcyIsIm9iamVjdF9pZCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUEwQjtBQUFBOztBQUFBLE1BQXZCQyxPQUF1QixRQUF2QkEsT0FBdUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsa0JBQ2xCQywrQ0FBUSxDQUFDLElBQUQsQ0FEVTtBQUFBLE1BQ3JDQyxLQURxQztBQUFBLE1BQzlCQyxRQUQ4Qjs7QUFBQSxtQkFFaEJGLCtDQUFRLENBQUMsSUFBRCxDQUZRO0FBQUEsTUFFckNHLE1BRnFDO0FBQUEsTUFFN0JDLFNBRjZCOztBQUFBLG1CQUdaSiwrQ0FBUSxDQUFDLElBQUQsQ0FISTtBQUFBLE1BR3JDSyxRQUhxQztBQUFBLE1BRzNCQyxXQUgyQjs7QUFBQSxtQkFJWk4sK0NBQVEsQ0FBQyxJQUFELENBSkk7QUFBQSxNQUlyQ08sUUFKcUM7QUFBQSxN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O0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRCxlQUdDO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsYUFBSyxFQUFDLFFBQTNCO0FBQW9DLGlCQUFTLEVBQUM7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhEO0FBQUEsa0JBREQ7QUFXQSxDQWpGRDs7R0FBTWxDLFU7O0tBQUFBLFU7QUFtRk4sK0RBQWVBLFVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3VwbG9hZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IFVwbG9hZEZvcm0gPSAoeyBvYmplY3RzLCBmaWVsZElkIH0pID0+IHtcblx0Y29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShudWxsKVxuXHRjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUobnVsbClcblx0Y29uc3QgW29iamVjdElkLCBzZXRPYmplY3RJZF0gPSB1c2VTdGF0ZShudWxsKVxuXHRjb25zdCBbZmlsZU5hbWUsIHNldEZpbGVOYW1lXSA9IHVzZVN0YXRlKG51bGwpXG5cblxuXHRmdW5jdGlvbiBmZXRjaEZpbGVzKCl7XG5cdFx0YXN5bmMgZnVuY3Rpb24gY3JlYXRlRmlsZSgpe1xuXHRcdFx0bGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9leHBvcnQvc2NhbjAwMS5qcGcnKTtcblx0XHRcdGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuXHRcdFx0bGV0IG1ldGFkYXRhID0ge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UvanBlZydcblx0XHRcdH07XG5cdFx0XHRzZXRGaWxlTmFtZShuZXcgRmlsZShbZGF0YV0sIFwic2NhbjAwMS5qcGdcIiwgbWV0YWRhdGEpKTtcblx0XHRcdGNvbnNvbGUubG9nKGZpbGVOYW1lKVxuXHRcdFx0Ly8gZm9ybURhdGEuYXBwZW5kKCdmaWxlcycsIGZpbGUpXG5cdFx0XHQvLyAuLi4gZG8gc29tZXRoaW5nIHdpdGggdGhlIGZpbGUgb3IgcmV0dXJuIGl0XG5cdFx0fVxuXHRcdGNyZWF0ZUZpbGUoKTtcblx0fVxuXG5cblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcblx0XHRjb25zb2xlLmxvZygnaGFuZGxlU3VibWl0Jylcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblxuXG5cdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKSAvLyBwdXJlIGphdmFzY3JpcHQgbm90aGluZyB0byBkbyB3aXRoIHJlYWN0XG5cdFx0Ly8gaWYgKGltYWdlKSB7XG5cdFx0Ly8gXHRmb3JtRGF0YS5hcHBlbmQoJ2ZpbGVzJywgaW1hZ2UpXG5cdFx0Ly8gfVxuXHRcdC8vIGlmIChpbWFnZXMpIHtcblx0XHQvLyBcdE9iamVjdC5lbnRyaWVzKGltYWdlcykuZm9yRWFjaChlbnRyeSA9PiB7XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKGVudHJ5WzFdKVxuXHRcdC8vIFx0XHRmb3JtRGF0YS5hcHBlbmQoYGZpbGVzYCwgZW50cnlbMV0pXG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9XG5cdFx0Zm9ybURhdGEuYXBwZW5kKCdmaWxlcycsIGZpbGVOYW1lKVxuXHRcdGZvcm1EYXRhLmFwcGVuZCgncmVmJywgJ2FwaTo6b2JqZWN0Lm9iamVjdCcpXG5cdFx0Zm9ybURhdGEuYXBwZW5kKCdyZWZJZCcsIG9iamVjdElkWzBdPy5pZCkgLy8ncmVmSWQnIFRoZSBldmVudCBJZFxuXHRcdGZvcm1EYXRhLmFwcGVuZCgnZmllbGQnLCBmaWVsZElkKSAvLydmaWVsZCcgdGhlIGltYWdlIGZpZWxkIHdlIGNhbGxlZCAnaW1hZ2UnXG5cblxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2Ntcy50aGVuZXdsaWJyYXJ5Lm9yZy9hcGkvdXBsb2FkYCwge1xuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0Ym9keTogZm9ybURhdGEsXG5cdFx0fSlcblxuXHRcdGlmIChyZXMub2spIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3Jlcy5vaycpXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdyZXMnLCByZXMpXG5cdFx0XHRcdGNvbnNvbGUubG9nKGZvcm1EYXRhKVxuXHRcdH1cblx0fVxuXG5cdC8vIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xuXHQvLyBcdFx0Y29uc29sZS5sb2coJ2hhbmRsZUZpbGVDaGFuZ2UnKVxuXHQvLyBcdFx0Y29uc29sZS5sb2coZS50YXJnZXQuZmlsZXMpIC8vdGhpcyB3aWxsIGdpdmUgdXMgYW4gYXJyYXkgYW5kIHdlIHdhbnQgdGhlIGZpcnN0IHdvbmUgc28gd2UgYWRkIDBcblx0Ly8gXHRcdGlmIChlLnRhcmdldC5maWxlcy5sZW5ndGggPiAxKXtcblx0Ly8gXHRcdFx0c2V0SW1hZ2VzKGUudGFyZ2V0LmZpbGVzKVxuXHQvLyBcdFx0XHRjb25zb2xlLmxvZyhlLnRhcmdldC5maWxlcylcblx0Ly8gXHRcdH0gZWxzZXtcblx0Ly8gXHRcdFx0c2V0SW1hZ2UoZS50YXJnZXQuZmlsZXNbMF0pXG5cdC8vIFx0XHR9XG5cdC8vIH1cblx0Y29uc3QgaGFuZGxlVGV4dENoYW5nZSA9IChlKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnaGFuZGxlVGV4dENoYW5nZScpXG5cdFx0XHRzZXRPYmplY3RJZChvYmplY3RzLmZpbHRlcihvYmplY3QgPT4gb2JqZWN0LmF0dHJpYnV0ZXMub2JqZWN0X2lkID09IGUudGFyZ2V0LnZhbHVlKSk7XG5cdH1cblx0cmV0dXJuKFxuXHRcdDw+XG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2ZldGNoRmlsZXN9PmNsaWNrPC9idXR0b24+XG5cdFx0XHR7ZmlsZU5hbWUgJiYgZmlsZU5hbWV9XG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cblx0XHRcdFx0ey8qIDxpbnB1dCB0eXBlPSdmaWxlJyBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX0gbXVsdGlwbGUgY2xhc3NOYW1lPSdmaWxlLWlucHV0JyBpZD1cImZpbGUtaW5wdXRcIi8+ICovfVxuXHRcdFx0XHQ8aW5wdXQgdHlwZT0ndGV4dCcgb25DaGFuZ2U9e2hhbmRsZVRleHRDaGFuZ2V9IGNsYXNzTmFtZT1cInRleHQtaW5wdXRcIi8+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPSdzdWJtaXQnIHZhbHVlPSdVcGxvYWQnIGNsYXNzTmFtZT0nYnRuJyAvPlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEZvcm1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/upload.js\n");

/***/ })

});