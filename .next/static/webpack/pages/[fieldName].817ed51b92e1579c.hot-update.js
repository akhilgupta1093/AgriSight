"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[fieldName]",{

/***/ "./src/pages/[fieldName].tsx":
/*!***********************************!*\
  !*** ./src/pages/[fieldName].tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/App */ \"./src/components/App.tsx\");\n/* harmony import */ var _api_farmonaut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/farmonaut */ \"./src/api/farmonaut.ts\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar FieldPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var _router_query = router.query, fieldNameQuery = _router_query.fieldName; // Access the URL parameter\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), fieldId = _useState[0], setFieldId = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), fieldName = _useState1[0], setFieldName = _useState1[1];\n    // Get all fields, and find the field with the name fieldName\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(\"query\", fieldNameQuery);\n        console.log(fieldName);\n        (0,_api_farmonaut__WEBPACK_IMPORTED_MODULE_4__.getFields)().then(function(fieldsResp) {\n            // Find the field with the name fieldName\n            var field = Object.entries(fieldsResp).find(function(param) {\n                var _param = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)(param, 2), key = _param[0], value = _param[1];\n                return key === fieldNameQuery;\n            });\n            console.log(\"field found\", field);\n            if (field != null) {\n                setFieldId(parseInt(field[0]));\n            }\n        });\n    }, [\n        fieldNameQuery\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: fieldName != null && fieldId != null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_App__WEBPACK_IMPORTED_MODULE_3__.App, {\n            fieldId: fieldId,\n            fieldName: fieldName\n        }, void 0, false, {\n            fileName: \"/Users/akhilgupta/Documents/Projects/AgriSight/agrisight/src/pages/[fieldName].tsx\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Not Found\"\n        }, void 0, false, {\n            fileName: \"/Users/akhilgupta/Documents/Projects/AgriSight/agrisight/src/pages/[fieldName].tsx\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/akhilgupta/Documents/Projects/AgriSight/agrisight/src/pages/[fieldName].tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_s(FieldPage, \"2qNgQwbbsEOm5PkiTehq7WgC6wg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = FieldPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FieldPage);\nvar _c;\n$RefreshReg$(_c, \"FieldPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW2ZpZWxkTmFtZV0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0k7QUFDUDtBQUVPO0FBRTVDLElBQU1LLFlBQVk7O0lBQ2hCLElBQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixJQUFzQ00sZ0JBQUFBLE9BQU9DLEtBQUssRUFBMUNDLGlCQUE4QkYsY0FBOUJFLFdBQTRDLDJCQUEyQjtJQUMvRSxJQUE4Qk4sWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFnQixXQUEvQ1EsVUFBdUJSLGNBQWRTLGFBQWNUO0lBQzlCLElBQWtDQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQWdCLFdBQW5ETSxZQUEyQk4sZUFBaEJVLGVBQWdCVjtJQUVsQyw2REFBNkQ7SUFDN0RELGdEQUFTQSxDQUFDO1FBQ1JZLFFBQVFDLEdBQUcsQ0FBQyxTQUFTTDtRQUNyQkksUUFBUUMsR0FBRyxDQUFDTjtRQUNaSix5REFBU0EsR0FBR1csSUFBSSxDQUFDLFNBQUNDO1lBQ2hCLHlDQUF5QztZQUN6QyxJQUFNQyxRQUFRQyxPQUFPQyxPQUFPLENBQUNILFlBQVlJLElBQUksQ0FDM0M7d0dBQUVDLGlCQUFLQzt1QkFBV0QsUUFBUVo7O1lBRTVCSSxRQUFRQyxHQUFHLENBQUMsZUFBZUc7WUFDM0IsSUFBSUEsU0FBUyxNQUFNO2dCQUNqQk4sV0FBV1ksU0FBU04sS0FBSyxDQUFDLEVBQUU7WUFDOUI7UUFDRjtJQUNGLEdBQUc7UUFBQ1I7S0FBZTtJQUVuQixxQkFDRSw4REFBQ2U7a0JBQ0VoQixhQUFhLFFBQVFFLFdBQVcscUJBQy9CLDhEQUFDUCwrQ0FBR0E7WUFBQ08sU0FBU0E7WUFBU0YsV0FBV0E7Ozs7O2tDQUVsQyw4REFBQ2dCO3NCQUFJOzs7Ozs7Ozs7OztBQUliO0dBL0JNbkI7O1FBQ1dMLGtEQUFTQTs7O0tBRHBCSztBQWlDTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW2ZpZWxkTmFtZV0udHN4PzkyODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiY29tcG9uZW50cy9BcHBcIjtcbmltcG9ydCB7IEFsbEZpZWxkRGF0YSB9IGZyb20gXCJhcGkvdHlwZXNcIjtcbmltcG9ydCB7IGdldEZpZWxkcyB9IGZyb20gXCJAL2FwaS9mYXJtb25hdXRcIjtcblxuY29uc3QgRmllbGRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBmaWVsZE5hbWU6IGZpZWxkTmFtZVF1ZXJ5IH0gPSByb3V0ZXIucXVlcnk7IC8vIEFjY2VzcyB0aGUgVVJMIHBhcmFtZXRlclxuICBjb25zdCBbZmllbGRJZCwgc2V0RmllbGRJZF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2ZpZWxkTmFtZSwgc2V0RmllbGROYW1lXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIC8vIEdldCBhbGwgZmllbGRzLCBhbmQgZmluZCB0aGUgZmllbGQgd2l0aCB0aGUgbmFtZSBmaWVsZE5hbWVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInF1ZXJ5XCIsIGZpZWxkTmFtZVF1ZXJ5KTtcbiAgICBjb25zb2xlLmxvZyhmaWVsZE5hbWUpO1xuICAgIGdldEZpZWxkcygpLnRoZW4oKGZpZWxkc1Jlc3A6IEFsbEZpZWxkRGF0YSkgPT4ge1xuICAgICAgLy8gRmluZCB0aGUgZmllbGQgd2l0aCB0aGUgbmFtZSBmaWVsZE5hbWVcbiAgICAgIGNvbnN0IGZpZWxkID0gT2JqZWN0LmVudHJpZXMoZmllbGRzUmVzcCkuZmluZChcbiAgICAgICAgKFtrZXksIHZhbHVlXSkgPT4ga2V5ID09PSBmaWVsZE5hbWVRdWVyeVxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZmllbGQgZm91bmRcIiwgZmllbGQpO1xuICAgICAgaWYgKGZpZWxkICE9IG51bGwpIHtcbiAgICAgICAgc2V0RmllbGRJZChwYXJzZUludChmaWVsZFswXSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbZmllbGROYW1lUXVlcnldKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7ZmllbGROYW1lICE9IG51bGwgJiYgZmllbGRJZCAhPSBudWxsID8gKFxuICAgICAgICA8QXBwIGZpZWxkSWQ9e2ZpZWxkSWR9IGZpZWxkTmFtZT17ZmllbGROYW1lfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj5Ob3QgRm91bmQ8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWVsZFBhZ2U7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcHAiLCJnZXRGaWVsZHMiLCJGaWVsZFBhZ2UiLCJyb3V0ZXIiLCJxdWVyeSIsImZpZWxkTmFtZSIsImZpZWxkTmFtZVF1ZXJ5IiwiZmllbGRJZCIsInNldEZpZWxkSWQiLCJzZXRGaWVsZE5hbWUiLCJjb25zb2xlIiwibG9nIiwidGhlbiIsImZpZWxkc1Jlc3AiLCJmaWVsZCIsIk9iamVjdCIsImVudHJpZXMiLCJmaW5kIiwia2V5IiwidmFsdWUiLCJwYXJzZUludCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/[fieldName].tsx\n"));

/***/ })

});