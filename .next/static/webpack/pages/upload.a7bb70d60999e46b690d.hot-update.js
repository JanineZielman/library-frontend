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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/janinezielman/Documents/Sites/Strapi/library/components/upload.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar UploadForm = function UploadForm(_ref) {\n  _s();\n\n  var objects = _ref.objects,\n      fieldId = _ref.fieldId;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      image = _useState[0],\n      setImage = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      images = _useState2[0],\n      setImages = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      objectId = _useState3[0],\n      setObjectId = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      fileName = _useState4[0],\n      setFileName = _useState4[1];\n\n  function fetchFiles() {\n    function createFile() {\n      return _createFile.apply(this, arguments);\n    }\n\n    function _createFile() {\n      _createFile = (0,_Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var response, data, metadata;\n        return _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch('/export/*.jpg');\n\n              case 2:\n                response = _context.sent;\n                _context.next = 5;\n                return response.blob();\n\n              case 5:\n                data = _context.sent;\n                metadata = {\n                  type: 'image/jpeg'\n                };\n                setFileName(new File([data], \"scan001.jpg\", metadata));\n                console.log(fileName); // formData.append('files', file)\n                // ... do something with the file or return it\n\n              case 9:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _createFile.apply(this, arguments);\n    }\n\n    createFile();\n  }\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(e) {\n      var _objectId$;\n\n      var formData, res;\n      return _Users_janinezielman_Documents_Sites_Strapi_library_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              console.log('handleSubmit');\n              e.preventDefault();\n              formData = new FormData(); // pure javascript nothing to do with react\n              // if (image) {\n              // \tformData.append('files', image)\n              // }\n              // if (images) {\n              // \tObject.entries(images).forEach(entry => {\n              // \t\tconsole.log(entry[1])\n              // \t\tformData.append(`files`, entry[1])\n              // \t});\n              // }\n\n              formData.append('files', fileName);\n              formData.append('ref', 'api::object.object');\n              formData.append('refId', (_objectId$ = objectId[0]) === null || _objectId$ === void 0 ? void 0 : _objectId$.id); //'refId' The event Id\n\n              formData.append('field', fieldId); //'field' the image field we called 'image'\n\n              _context2.next = 9;\n              return fetch(\"https://cms.thenewlibrary.org/api/upload\", {\n                method: 'POST',\n                body: formData\n              });\n\n            case 9:\n              res = _context2.sent;\n\n              if (res.ok) {\n                console.log('res.ok');\n                console.log('res', res);\n                console.log(formData);\n              }\n\n            case 11:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var handleFileChange = function handleFileChange(e) {\n    console.log('handleFileChange');\n    console.log(e.target.files); //this will give us an array and we want the first wone so we add 0\n\n    if (e.target.files.length > 1) {\n      setImages(e.target.files);\n      console.log(e.target.files);\n    } else {\n      setImage(e.target.files[0]);\n    }\n  };\n\n  var handleTextChange = function handleTextChange(e) {\n    console.log('handleTextChange');\n    setObjectId(objects.filter(function (object) {\n      return object.attributes.object_id == e.target.value;\n    }));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: fetchFiles,\n      children: \"click\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"file\",\n        onChange: handleFileChange,\n        multiple: true,\n        className: \"file-input\",\n        id: \"file-input\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        onChange: handleTextChange,\n        className: \"text-input\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"submit\",\n        value: \"Upload\",\n        className: \"btn\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(UploadForm, \"+I/NK1+4HzetryvEnxkMTuU3ANQ=\");\n\n_c = UploadForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UploadForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"UploadForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91cGxvYWQuanM/OWZiNCJdLCJuYW1lcyI6WyJVcGxvYWRGb3JtIiwib2JqZWN0cyIsImZpZWxkSWQiLCJ1c2VTdGF0ZSIsImltYWdlIiwic2V0SW1hZ2UiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJvYmplY3RJZCIsInNldE9iamVjdElkIiwiZmlsZU5hbWUiLCJzZXRGaWxlTmFtZSIsImZldGNoRmlsZXMiLCJjcmVhdGVGaWxlIiwiZmV0Y2giLCJyZXNwb25zZSIsImJsb2IiLCJkYXRhIiwibWV0YWRhdGEiLCJ0eXBlIiwiRmlsZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiaWQiLCJtZXRob2QiLCJib2R5IiwicmVzIiwib2siLCJoYW5kbGVGaWxlQ2hhbmdlIiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJoYW5kbGVUZXh0Q2hhbmdlIiwiZmlsdGVyIiwib2JqZWN0IiwiYXR0cmlidXRlcyIsIm9iamVjdF9pZCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUEwQjtBQUFBOztBQUFBLE1BQXZCQyxPQUF1QixRQUF2QkEsT0FBdUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsa0JBQ2xCQywrQ0FBUSxDQUFDLElBQUQsQ0FEVTtBQUFBLE1BQ3JDQyxLQURxQztBQUFBLE1BQzlCQyxRQUQ4Qjs7QUFBQSxtQkFFaEJGLCtDQUFRLENBQUMsSUFBRCxDQUZRO0FBQUEsTUFFckNHLE1BRnFDO0FBQUEsTUFFN0JDLFNBRjZCOztBQUFBLG1CQUdaSiwrQ0FBUSxDQUFDLElBQUQsQ0FISTtBQUFBLE1BR3JDSyxRQUhxQztBQUFBLE1BRzNCQyxXQUgyQjs7QUFBQSxtQkFJWk4sK0NBQVEsQ0FB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ZCxDQUFELEVBQU87QUFDOUJILFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0FiLGVBQVcsQ0FBQ1IsT0FBTyxDQUFDc0MsTUFBUixDQUFlLFVBQUFDLE1BQU07QUFBQSxhQUFJQSxNQUFNLENBQUNDLFVBQVAsQ0FBa0JDLFNBQWxCLElBQStCbEIsQ0FBQyxDQUFDVyxNQUFGLENBQVNRLEtBQTVDO0FBQUEsS0FBckIsQ0FBRCxDQUFYO0FBQ0QsR0FIRDs7QUFJQSxzQkFDQztBQUFBLDRCQUNDO0FBQVEsYUFBTyxFQUFFL0IsVUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUVDO0FBQU0sY0FBUSxFQUFFVyxZQUFoQjtBQUFBLDhCQUNDO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsZ0JBQVEsRUFBRVcsZ0JBQTdCO0FBQStDLGdCQUFRLE1BQXZEO0FBQXdELGlCQUFTLEVBQUMsWUFBbEU7QUFBK0UsVUFBRSxFQUFDO0FBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsZ0JBQVEsRUFBRUksZ0JBQTdCO0FBQStDLGlCQUFTLEVBQUM7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZELGVBR0M7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixhQUFLLEVBQUMsUUFBM0I7QUFBb0MsaUJBQVMsRUFBQztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQ7QUFBQSxrQkFERDtBQVVBLENBaEZEOztHQUFNdEMsVTs7S0FBQUEsVTtBQWtGTiwrREFBZUEsVUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdXBsb2FkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgVXBsb2FkRm9ybSA9ICh7IG9iamVjdHMsIGZpZWxkSWQgfSkgPT4ge1xuXHRjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKG51bGwpXG5cdGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShudWxsKVxuXHRjb25zdCBbb2JqZWN0SWQsIHNldE9iamVjdElkXSA9IHVzZVN0YXRlKG51bGwpXG5cdGNvbnN0IFtmaWxlTmFtZSwgc2V0RmlsZU5hbWVdID0gdXNlU3RhdGUobnVsbClcblxuXG5cdGZ1bmN0aW9uIGZldGNoRmlsZXMoKXtcblx0XHRhc3luYyBmdW5jdGlvbiBjcmVhdGVGaWxlKCl7XG5cdFx0XHRsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2V4cG9ydC8qLmpwZycpO1xuXHRcdFx0bGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XG5cdFx0XHRsZXQgbWV0YWRhdGEgPSB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZS9qcGVnJ1xuXHRcdFx0fTtcblx0XHRcdHNldEZpbGVOYW1lKG5ldyBGaWxlKFtkYXRhXSwgXCJzY2FuMDAxLmpwZ1wiLCBtZXRhZGF0YSkpO1xuXHRcdFx0Y29uc29sZS5sb2coZmlsZU5hbWUpXG5cdFx0XHQvLyBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGVzJywgZmlsZSlcblx0XHRcdC8vIC4uLiBkbyBzb21ldGhpbmcgd2l0aCB0aGUgZmlsZSBvciByZXR1cm4gaXRcblx0XHR9XG5cdFx0Y3JlYXRlRmlsZSgpO1xuXHR9XG5cblxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKCdoYW5kbGVTdWJtaXQnKVxuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXG5cblx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpIC8vIHB1cmUgamF2YXNjcmlwdCBub3RoaW5nIHRvIGRvIHdpdGggcmVhY3Rcblx0XHQvLyBpZiAoaW1hZ2UpIHtcblx0XHQvLyBcdGZvcm1EYXRhLmFwcGVuZCgnZmlsZXMnLCBpbWFnZSlcblx0XHQvLyB9XG5cdFx0Ly8gaWYgKGltYWdlcykge1xuXHRcdC8vIFx0T2JqZWN0LmVudHJpZXMoaW1hZ2VzKS5mb3JFYWNoKGVudHJ5ID0+IHtcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coZW50cnlbMV0pXG5cdFx0Ly8gXHRcdGZvcm1EYXRhLmFwcGVuZChgZmlsZXNgLCBlbnRyeVsxXSlcblx0XHQvLyBcdH0pO1xuXHRcdC8vIH1cblx0XHRmb3JtRGF0YS5hcHBlbmQoJ2ZpbGVzJywgZmlsZU5hbWUpXG5cdFx0Zm9ybURhdGEuYXBwZW5kKCdyZWYnLCAnYXBpOjpvYmplY3Qub2JqZWN0Jylcblx0XHRmb3JtRGF0YS5hcHBlbmQoJ3JlZklkJywgb2JqZWN0SWRbMF0/LmlkKSAvLydyZWZJZCcgVGhlIGV2ZW50IElkXG5cdFx0Zm9ybURhdGEuYXBwZW5kKCdmaWVsZCcsIGZpZWxkSWQpIC8vJ2ZpZWxkJyB0aGUgaW1hZ2UgZmllbGQgd2UgY2FsbGVkICdpbWFnZSdcblxuXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vY21zLnRoZW5ld2xpYnJhcnkub3JnL2FwaS91cGxvYWRgLCB7XG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRib2R5OiBmb3JtRGF0YSxcblx0XHR9KVxuXG5cdFx0aWYgKHJlcy5vaykge1xuXHRcdFx0XHRjb25zb2xlLmxvZygncmVzLm9rJylcblx0XHRcdFx0Y29uc29sZS5sb2coJ3JlcycsIHJlcylcblx0XHRcdFx0Y29uc29sZS5sb2coZm9ybURhdGEpXG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChlKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnaGFuZGxlRmlsZUNoYW5nZScpXG5cdFx0XHRjb25zb2xlLmxvZyhlLnRhcmdldC5maWxlcykgLy90aGlzIHdpbGwgZ2l2ZSB1cyBhbiBhcnJheSBhbmQgd2Ugd2FudCB0aGUgZmlyc3Qgd29uZSBzbyB3ZSBhZGQgMFxuXHRcdFx0aWYgKGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDEpe1xuXHRcdFx0XHRzZXRJbWFnZXMoZS50YXJnZXQuZmlsZXMpXG5cdFx0XHRcdGNvbnNvbGUubG9nKGUudGFyZ2V0LmZpbGVzKVxuXHRcdFx0fSBlbHNle1xuXHRcdFx0XHRzZXRJbWFnZShlLnRhcmdldC5maWxlc1swXSlcblx0XHRcdH1cblx0fVxuXHRjb25zdCBoYW5kbGVUZXh0Q2hhbmdlID0gKGUpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdoYW5kbGVUZXh0Q2hhbmdlJylcblx0XHRcdHNldE9iamVjdElkKG9iamVjdHMuZmlsdGVyKG9iamVjdCA9PiBvYmplY3QuYXR0cmlidXRlcy5vYmplY3RfaWQgPT0gZS50YXJnZXQudmFsdWUpKTtcblx0fVxuXHRyZXR1cm4oXG5cdFx0PD5cblx0XHRcdDxidXR0b24gb25DbGljaz17ZmV0Y2hGaWxlc30+Y2xpY2s8L2J1dHRvbj5cblx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT0nZmlsZScgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2V9IG11bHRpcGxlIGNsYXNzTmFtZT0nZmlsZS1pbnB1dCcgaWQ9XCJmaWxlLWlucHV0XCIvPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT0ndGV4dCcgb25DaGFuZ2U9e2hhbmRsZVRleHRDaGFuZ2V9IGNsYXNzTmFtZT1cInRleHQtaW5wdXRcIi8+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPSdzdWJtaXQnIHZhbHVlPSdVcGxvYWQnIGNsYXNzTmFtZT0nYnRuJyAvPlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEZvcm1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/upload.js\n");

/***/ })

});