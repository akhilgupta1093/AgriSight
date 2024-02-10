"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./src/api/farmonaut.ts":
/*!******************************!*\
  !*** ./src/api/farmonaut.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createField: function() { return /* binding */ createField; },\n/* harmony export */   deleteField: function() { return /* binding */ deleteField; },\n/* harmony export */   diseaseAI: function() { return /* binding */ diseaseAI; },\n/* harmony export */   getField: function() { return /* binding */ getField; },\n/* harmony export */   getFields: function() { return /* binding */ getFields; },\n/* harmony export */   getWeatherForecast: function() { return /* binding */ getWeatherForecast; },\n/* harmony export */   irrigationAI: function() { return /* binding */ irrigationAI; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CONSTANTS */ \"./src/CONSTANTS.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/api/utils.ts\");\n\n\n\n\nvar CROP_CODE_GRAPE = 24;\nvar createField = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(name, points) {\n        var uri, response, data;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    uri = \"https://us-central1-farmbase-b2f7e.cloudfunctions.net/submitField\";\n                    return [\n                        4,\n                        fetch(uri, {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                FieldName: name,\n                                PaymentType: 2,\n                                CropCode: CROP_CODE_GRAPE,\n                                Points: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.transformPoints)(points),\n                                UID: _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__.UID\n                            })\n                        })\n                    ];\n                case 1:\n                    response = _state.sent();\n                    if (!response.ok) {\n                        throw new Error(\"Server (apiCreateField) error: \".concat(response.status));\n                    }\n                    return [\n                        4,\n                        response.json()\n                    ];\n                case 2:\n                    data = _state.sent();\n                    return [\n                        2,\n                        data.fieldId\n                    ];\n            }\n        });\n    });\n    return function createField(name, points) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar deleteField = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(fieldID) {\n        var uri, response, data;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    uri = \"https://us-central1-farmbase-b2f7e.cloudfunctions.net/deleteField\";\n                    return [\n                        4,\n                        fetch(uri, {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                FieldID: fieldID,\n                                UID: _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__.UID\n                            })\n                        })\n                    ];\n                case 1:\n                    response = _state.sent();\n                    if (!response.ok) {\n                        throw new Error(\"Server (deleteField) error: \".concat(response.status));\n                    }\n                    return [\n                        4,\n                        response.json()\n                    ];\n                case 2:\n                    data = _state.sent();\n                    return [\n                        2,\n                        data\n                    ];\n            }\n        });\n    });\n    return function deleteField(fieldID) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar getFields = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n        var uri, response, data;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    uri = \"https://us-central1-farmbase-b2f7e.cloudfunctions.net/getAllFarmersData\";\n                    return [\n                        4,\n                        fetch(uri, {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                UID: _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__.UID\n                            })\n                        })\n                    ];\n                case 1:\n                    response = _state.sent();\n                    if (!response.ok) {\n                        throw new Error(\"Server (getFields) error: \".concat(response.status));\n                    }\n                    return [\n                        4,\n                        response.json()\n                    ];\n                case 2:\n                    data = _state.sent();\n                    return [\n                        2,\n                        data\n                    ];\n            }\n        });\n    });\n    return function getFields() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar getField = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(fieldID) {\n        var uri, response, data;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    uri = \"https://us-central1-farmbase-b2f7e.cloudfunctions.net/getFarmerData\";\n                    return [\n                        4,\n                        fetch(uri, {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                FieldID: fieldID,\n                                UID: _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__.UID\n                            })\n                        })\n                    ];\n                case 1:\n                    response = _state.sent();\n                    if (!response.ok) {\n                        throw new Error(\"Server (getFarmerData) error: \".concat(response.status));\n                    }\n                    return [\n                        4,\n                        response.json()\n                    ];\n                case 2:\n                    data = _state.sent();\n                    return [\n                        2,\n                        data\n                    ];\n            }\n        });\n    });\n    return function getField(fieldID) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar getWeatherForecast = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(fieldID) {\n        var uri, response, data;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    uri = \"https://us-central1-farmbase-b2f7e.cloudfunctions.net/getForecastWeather\";\n                    return [\n                        4,\n                        fetch(uri, {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                FieldID: fieldID,\n                                UID: _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__.UID\n                            })\n                        })\n                    ];\n                case 1:\n                    response = _state.sent();\n                    if (!response.ok) {\n                        throw new Error(\"Server (getWeatherForecast) error: \".concat(response.status));\n                    }\n                    return [\n                        4,\n                        response.json()\n                    ];\n                case 2:\n                    data = _state.sent();\n                    return [\n                        2,\n                        data\n                    ];\n            }\n        });\n    });\n    return function getWeatherForecast(fieldID) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar askFarmonautAI = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(fieldID, recommendationType) {\n        var uri, crop, response, data;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    uri = \"https://us-central1-farmbase-b2f7e.cloudfunctions.net/askJeevnAPI\";\n                    crop = \"grape\";\n                    return [\n                        4,\n                        fetch(uri, {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                FieldID: fieldID,\n                                RecommendationType: recommendationType,\n                                Crop: crop,\n                                SowingMonth: new Date().getMonth() + 1,\n                                UID: _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__.UID\n                            })\n                        })\n                    ];\n                case 1:\n                    response = _state.sent();\n                    if (!response.ok) {\n                        throw new Error(\"Server (aiFarmAdvisory) error: \".concat(response.status));\n                    }\n                    return [\n                        4,\n                        response.text()\n                    ];\n                case 2:\n                    data = _state.sent();\n                    console.log(\"ai response processed\", aiResponseToArr(data));\n                    return [\n                        2,\n                        aiResponseToArr(data)\n                    ];\n            }\n        });\n    });\n    return function askFarmonautAI(fieldID, recommendationType) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar aiResponseToArr = function(response) {\n    return response.split(\"\\n\");\n};\nvar diseaseAI = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(fieldID) {\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            return [\n                2,\n                askFarmonautAI(fieldID, \"pest & disease\")\n            ];\n        });\n    });\n    return function diseaseAI(fieldID) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar irrigationAI = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(fieldID) {\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            return [\n                2,\n                askFarmonautAI(fieldID, \"irrigation\")\n            ];\n        });\n    });\n    return function irrigationAI(fieldID) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN2QixPQUFPQSxTQUFTbUMsS0FBSyxDQUFDO0FBQ3hCO0FBRU8sSUFBTUM7ZUFBWSw0RUFBT2xCOztZQUM5Qjs7Z0JBQU9LLGVBQWVMLFNBQVM7OztJQUNqQztvQkFGYWtCLFVBQW1CbEI7OztJQUU5QjtBQUVLLElBQU1tQjtlQUFlLDRFQUFPbkI7O1lBQ2pDOztnQkFBT0ssZUFBZUwsU0FBUzs7O0lBQ2pDO29CQUZhbUIsYUFBc0JuQjs7O0lBRWpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcGkvZmFybW9uYXV0LnRzPzIxYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlEIH0gZnJvbSBcIi4uL0NPTlNUQU5UU1wiO1xuaW1wb3J0IHsgRmllbGREYXRhLCBXZWF0aGVyRm9yZWNhc3REYXRhLCBQb2ludCB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyB0cmFuc2Zvcm1Qb2ludHMgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCBDUk9QX0NPREVfR1JBUEUgPSAyNDtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUZpZWxkID0gYXN5bmMgKFxuICBuYW1lOiBzdHJpbmcsXG4gIHBvaW50czogUG9pbnRbXVxuKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGNvbnN0IHVyaSA9XG4gICAgXCJodHRwczovL3VzLWNlbnRyYWwxLWZhcm1iYXNlLWIyZjdlLmNsb3VkZnVuY3Rpb25zLm5ldC9zdWJtaXRGaWVsZFwiO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVyaSwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBGaWVsZE5hbWU6IG5hbWUsXG4gICAgICBQYXltZW50VHlwZTogMixcbiAgICAgIENyb3BDb2RlOiBDUk9QX0NPREVfR1JBUEUsXG4gICAgICBQb2ludHM6IHRyYW5zZm9ybVBvaW50cyhwb2ludHMpLFxuICAgICAgVUlEOiBVSUQsXG4gICAgfSksXG4gIH0pO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBTZXJ2ZXIgKGFwaUNyZWF0ZUZpZWxkKSBlcnJvcjogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGEuZmllbGRJZDtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVGaWVsZCA9IGFzeW5jIChmaWVsZElEOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgY29uc3QgdXJpID1cbiAgICBcImh0dHBzOi8vdXMtY2VudHJhbDEtZmFybWJhc2UtYjJmN2UuY2xvdWRmdW5jdGlvbnMubmV0L2RlbGV0ZUZpZWxkXCI7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJpLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIEZpZWxkSUQ6IGZpZWxkSUQsXG4gICAgICBVSUQ6IFVJRCxcbiAgICB9KSxcbiAgfSk7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNlcnZlciAoZGVsZXRlRmllbGQpIGVycm9yOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRGaWVsZHMgPSBhc3luYyAoKTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgY29uc3QgdXJpID1cbiAgICBcImh0dHBzOi8vdXMtY2VudHJhbDEtZmFybWJhc2UtYjJmN2UuY2xvdWRmdW5jdGlvbnMubmV0L2dldEFsbEZhcm1lcnNEYXRhXCI7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJpLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIFVJRDogVUlELFxuICAgIH0pLFxuICB9KTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihgU2VydmVyIChnZXRGaWVsZHMpIGVycm9yOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRGaWVsZCA9IGFzeW5jIChmaWVsZElEOiBudW1iZXIpOiBQcm9taXNlPEZpZWxkRGF0YT4gPT4ge1xuICBjb25zdCB1cmkgPVxuICAgIFwiaHR0cHM6Ly91cy1jZW50cmFsMS1mYXJtYmFzZS1iMmY3ZS5jbG91ZGZ1bmN0aW9ucy5uZXQvZ2V0RmFybWVyRGF0YVwiO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVyaSwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBGaWVsZElEOiBmaWVsZElELFxuICAgICAgVUlEOiBVSUQsXG4gICAgfSksXG4gIH0pO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBTZXJ2ZXIgKGdldEZhcm1lckRhdGEpIGVycm9yOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgfVxuICBjb25zdCBkYXRhOiBGaWVsZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFdlYXRoZXJGb3JlY2FzdCA9IGFzeW5jIChcbiAgZmllbGRJRDogbnVtYmVyXG4pOiBQcm9taXNlPFdlYXRoZXJGb3JlY2FzdERhdGE+ID0+IHtcbiAgY29uc3QgdXJpID1cbiAgICBcImh0dHBzOi8vdXMtY2VudHJhbDEtZmFybWJhc2UtYjJmN2UuY2xvdWRmdW5jdGlvbnMubmV0L2dldEZvcmVjYXN0V2VhdGhlclwiO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVyaSwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBGaWVsZElEOiBmaWVsZElELFxuICAgICAgVUlEOiBVSUQsXG4gICAgfSksXG4gIH0pO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBTZXJ2ZXIgKGdldFdlYXRoZXJGb3JlY2FzdCkgZXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICB9XG4gIGNvbnN0IGRhdGE6IFdlYXRoZXJGb3JlY2FzdERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgYXNrRmFybW9uYXV0QUkgPSBhc3luYyAoXG4gIGZpZWxkSUQ6IG51bWJlcixcbiAgcmVjb21tZW5kYXRpb25UeXBlOiBzdHJpbmdcbik6IFByb21pc2U8c3RyaW5nW10+ID0+IHtcbiAgY29uc3QgdXJpID1cbiAgICBcImh0dHBzOi8vdXMtY2VudHJhbDEtZmFybWJhc2UtYjJmN2UuY2xvdWRmdW5jdGlvbnMubmV0L2Fza0plZXZuQVBJXCI7XG4gIGNvbnN0IGNyb3AgPSBcImdyYXBlXCI7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJpLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIEZpZWxkSUQ6IGZpZWxkSUQsXG4gICAgICBSZWNvbW1lbmRhdGlvblR5cGU6IHJlY29tbWVuZGF0aW9uVHlwZSxcbiAgICAgIENyb3A6IGNyb3AsXG4gICAgICBTb3dpbmdNb250aDogbmV3IERhdGUoKS5nZXRNb250aCgpICsgMSxcbiAgICAgIFVJRDogVUlELFxuICAgIH0pLFxuICB9KTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihgU2VydmVyIChhaUZhcm1BZHZpc29yeSkgZXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICB9XG4gIGNvbnN0IGRhdGE6IHN0cmluZyA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgY29uc29sZS5sb2coXCJhaSByZXNwb25zZSBwcm9jZXNzZWRcIiwgYWlSZXNwb25zZVRvQXJyKGRhdGEpKTtcbiAgcmV0dXJuIGFpUmVzcG9uc2VUb0FycihkYXRhKTtcbn07XG5cbmNvbnN0IGFpUmVzcG9uc2VUb0FyciA9IChyZXNwb25zZTogc3RyaW5nKTogc3RyaW5nW10gPT4ge1xuICByZXR1cm4gcmVzcG9uc2Uuc3BsaXQoXCJcXG5cIik7XG59O1xuXG5leHBvcnQgY29uc3QgZGlzZWFzZUFJID0gYXN5bmMgKGZpZWxkSUQ6IG51bWJlcik6IFByb21pc2U8c3RyaW5nW10+ID0+IHtcbiAgcmV0dXJuIGFza0Zhcm1vbmF1dEFJKGZpZWxkSUQsIFwicGVzdCAmIGRpc2Vhc2VcIik7XG59O1xuXG5leHBvcnQgY29uc3QgaXJyaWdhdGlvbkFJID0gYXN5bmMgKGZpZWxkSUQ6IG51bWJlcik6IFByb21pc2U8c3RyaW5nW10+ID0+IHtcbiAgcmV0dXJuIGFza0Zhcm1vbmF1dEFJKGZpZWxkSUQsIFwiaXJyaWdhdGlvblwiKTtcbn07XG4iXSwibmFtZXMiOlsiVUlEIiwidHJhbnNmb3JtUG9pbnRzIiwiQ1JPUF9DT0RFX0dSQVBFIiwiY3JlYXRlRmllbGQiLCJuYW1lIiwicG9pbnRzIiwidXJpIiwicmVzcG9uc2UiLCJkYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJGaWVsZE5hbWUiLCJQYXltZW50VHlwZSIsIkNyb3BDb2RlIiwiUG9pbnRzIiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJmaWVsZElkIiwiZGVsZXRlRmllbGQiLCJmaWVsZElEIiwiRmllbGRJRCIsImdldEZpZWxkcyIsImdldEZpZWxkIiwiZ2V0V2VhdGhlckZvcmVjYXN0IiwiYXNrRmFybW9uYXV0QUkiLCJyZWNvbW1lbmRhdGlvblR5cGUiLCJjcm9wIiwiUmVjb21tZW5kYXRpb25UeXBlIiwiQ3JvcCIsIlNvd2luZ01vbnRoIiwiRGF0ZSIsImdldE1vbnRoIiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJhaVJlc3BvbnNlVG9BcnIiLCJzcGxpdCIsImRpc2Vhc2VBSSIsImlycmlnYXRpb25BSSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/farmonaut.ts\n"));

/***/ })

});