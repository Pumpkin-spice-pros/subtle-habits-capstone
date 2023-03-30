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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/auth-ui-react */ \"@supabase/auth-ui-react\");\n/* harmony import */ var _supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/auth-ui-shared */ \"@supabase/auth-ui-shared\");\n/* harmony import */ var _supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"@supabase/auth-helpers-react\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_1__]);\n_supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst LoginPage = ()=>{\n    const supabaseClient = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__.useSupabaseClient)();\n    const user = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__.useUser)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        async function loadData() {\n            const { data  } = await supabaseClient.from(\"Users\").select(\"id\").eq(user.id);\n            setData(data);\n        }\n        // Only run query once user is logged in.\n        if (user) loadData();\n    }, [\n        user\n    ]);\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_1__.Auth, {\n            redirectTo: \"https://mysubtlehabits.vercel.app/\",\n            appearance: {\n                theme: _supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_2__.ThemeSupa\n            },\n            supabaseClient: supabaseClient,\n            providers: [\n                \"google\"\n            ],\n            socialLayout: \"horizontal\"\n        }, void 0, false, {\n            fileName: \"/Users/aaroncelia/Documents/Code/Personal Projects/Portfolio/capstone/pages/index.js\",\n            lineNumber: 25,\n            columnNumber: 4\n        }, undefined);\n    } else {\n        router.push(\"/authorized/profile\");\n        console.log(\"user: \", user);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ007QUFDcUI7QUFDOUI7QUFDSjtBQUd4QyxNQUFNTyxZQUFZLElBQU07SUFDdkIsTUFBTUMsaUJBQWlCTCwrRUFBaUJBO0lBQ3hDLE1BQU1NLE9BQU9QLHFFQUFPQTtJQUNwQixNQUFNLENBQUNRLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBO0lBQy9CLE1BQU1PLFNBQVNOLHNEQUFTQTtJQUV6QkYsZ0RBQVNBLENBQUMsSUFBTTtRQUNmLGVBQWVTLFdBQVc7WUFDekIsTUFBTSxFQUFFSCxLQUFJLEVBQUUsR0FBRyxNQUFNRixlQUFlTSxJQUFJLENBQUMsU0FBU0MsTUFBTSxDQUFDLE1BQU1DLEVBQUUsQ0FBQ1AsS0FBS1EsRUFBRTtZQUMzRU4sUUFBUUQ7UUFDVDtRQUNBLHlDQUF5QztRQUN6QyxJQUFJRCxNQUFNSTtJQUNYLEdBQUc7UUFBQ0o7S0FBSztJQUVULElBQUksQ0FBQ0EsTUFBSztRQUNULHFCQUNDLDhEQUFDVCx5REFBSUE7WUFDSmtCLFlBQVc7WUFDWEMsWUFBWTtnQkFBRUMsT0FBT25CLCtEQUFTQTtZQUFDO1lBQy9CTyxnQkFBZ0JBO1lBQ2hCYSxXQUFXO2dCQUFDO2FBQVM7WUFDckJDLGNBQWE7Ozs7OztJQUdaLE9BQU87UUFDTlYsT0FBT1csSUFBSSxDQUFDO1FBQ1pDLFFBQVFDLEdBQUcsQ0FBQyxVQUFVaEI7SUFDeEIsQ0FBQztBQUNMO0FBRUEsaUVBQWVGLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXBzdG9uZS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aCB9IGZyb20gXCJAc3VwYWJhc2UvYXV0aC11aS1yZWFjdFwiO1xuaW1wb3J0IHsgVGhlbWVTdXBhIH0gZnJvbSBcIkBzdXBhYmFzZS9hdXRoLXVpLXNoYXJlZFwiO1xuaW1wb3J0IHsgdXNlVXNlciwgdXNlU3VwYWJhc2VDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL2F1dGgtaGVscGVycy1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblxuY29uc3QgTG9naW5QYWdlID0gKCkgPT4ge1xuXHRjb25zdCBzdXBhYmFzZUNsaWVudCA9IHVzZVN1cGFiYXNlQ2xpZW50KCk7XG5cdGNvbnN0IHVzZXIgPSB1c2VVc2VyKCk7XG5cdGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0YXN5bmMgZnVuY3Rpb24gbG9hZERhdGEoKSB7XG5cdFx0XHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlQ2xpZW50LmZyb20oXCJVc2Vyc1wiKS5zZWxlY3QoXCJpZFwiKS5lcSh1c2VyLmlkKTtcblx0XHRcdHNldERhdGEoZGF0YSk7XG5cdFx0fVxuXHRcdC8vIE9ubHkgcnVuIHF1ZXJ5IG9uY2UgdXNlciBpcyBsb2dnZWQgaW4uXG5cdFx0aWYgKHVzZXIpIGxvYWREYXRhKCk7XG5cdH0sIFt1c2VyXSk7XG5cblx0aWYgKCF1c2VyKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEF1dGhcblx0XHRcdFx0cmVkaXJlY3RUbz1cImh0dHBzOi8vbXlzdWJ0bGVoYWJpdHMudmVyY2VsLmFwcC9cIlxuXHRcdFx0XHRhcHBlYXJhbmNlPXt7IHRoZW1lOiBUaGVtZVN1cGEgfX1cblx0XHRcdFx0c3VwYWJhc2VDbGllbnQ9e3N1cGFiYXNlQ2xpZW50fVxuXHRcdFx0XHRwcm92aWRlcnM9e1snZ29vZ2xlJ119XG5cdFx0XHRcdHNvY2lhbExheW91dD1cImhvcml6b250YWxcIlxuXHRcdFx0Lz5cblx0XHQpXG4gICAgIH0gZWxzZSB7XG4gICAgICByb3V0ZXIucHVzaChcIi9hdXRob3JpemVkL3Byb2ZpbGVcIik7XG4gICAgICBjb25zb2xlLmxvZygndXNlcjogJywgdXNlcik7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW5QYWdlO1xuIl0sIm5hbWVzIjpbIkF1dGgiLCJUaGVtZVN1cGEiLCJ1c2VVc2VyIiwidXNlU3VwYWJhc2VDbGllbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkxvZ2luUGFnZSIsInN1cGFiYXNlQ2xpZW50IiwidXNlciIsImRhdGEiLCJzZXREYXRhIiwicm91dGVyIiwibG9hZERhdGEiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJpZCIsInJlZGlyZWN0VG8iLCJhcHBlYXJhbmNlIiwidGhlbWUiLCJwcm92aWRlcnMiLCJzb2NpYWxMYXlvdXQiLCJwdXNoIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@supabase/auth-helpers-react":
/*!***********************************************!*\
  !*** external "@supabase/auth-helpers-react" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@supabase/auth-helpers-react");

/***/ }),

/***/ "@supabase/auth-ui-shared":
/*!*******************************************!*\
  !*** external "@supabase/auth-ui-shared" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@supabase/auth-ui-shared");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@supabase/auth-ui-react":
/*!******************************************!*\
  !*** external "@supabase/auth-ui-react" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("@supabase/auth-ui-react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();