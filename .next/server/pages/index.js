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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/auth-ui-react */ \"@supabase/auth-ui-react\");\n/* harmony import */ var _supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/auth-ui-shared */ \"@supabase/auth-ui-shared\");\n/* harmony import */ var _supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"@supabase/auth-helpers-react\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_1__]);\n_supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst LoginPage = ()=>{\n    const supabaseClient = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__.useSupabaseClient)();\n    const user = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__.useUser)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        async function loadData() {\n            const { data  } = await supabaseClient.from(\"Users\").select(\"id\").eq(user.id);\n            setData(data);\n        }\n        // Only run query once user is logged in.\n        if (user) loadData();\n    }, [\n        user\n    ]);\n    const getURL = ()=>{\n        let url = process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.\n        process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.\n        \"http://localhost:3000/\";\n        // Make sure to include `https://` when not localhost.\n        url = url.includes(\"http\") ? url : `https://${url}`;\n        // Make sure to including trailing `/`.\n        url = url.charAt(url.length - 1) === \"/\" ? url : `${url}/`;\n        return url;\n    };\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_1__.Auth, {\n            redirectTo: getURL,\n            appearance: {\n                theme: _supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_2__.ThemeSupa\n            },\n            supabaseClient: supabaseClient,\n            providers: [\n                \"google\"\n            ],\n            socialLayout: \"horizontal\"\n        }, void 0, false, {\n            fileName: \"/Users/aaroncelia/Documents/Code/Personal Projects/Portfolio/capstone/pages/index.js\",\n            lineNumber: 37,\n            columnNumber: 4\n        }, undefined);\n    } else {\n        router.push(\"/authorized/profile\");\n        console.log(\"user: \", user);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ007QUFDcUI7QUFDOUI7QUFDSjtBQUd4QyxNQUFNTyxZQUFZLElBQU07SUFDdkIsTUFBTUMsaUJBQWlCTCwrRUFBaUJBO0lBQ3hDLE1BQU1NLE9BQU9QLHFFQUFPQTtJQUNwQixNQUFNLENBQUNRLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBO0lBQy9CLE1BQU1PLFNBQVNOLHNEQUFTQTtJQUV6QkYsZ0RBQVNBLENBQUMsSUFBTTtRQUNmLGVBQWVTLFdBQVc7WUFDekIsTUFBTSxFQUFFSCxLQUFJLEVBQUUsR0FBRyxNQUFNRixlQUFlTSxJQUFJLENBQUMsU0FBU0MsTUFBTSxDQUFDLE1BQU1DLEVBQUUsQ0FBQ1AsS0FBS1EsRUFBRTtZQUMzRU4sUUFBUUQ7UUFDVDtRQUNBLHlDQUF5QztRQUN6QyxJQUFJRCxNQUFNSTtJQUNYLEdBQUc7UUFBQ0o7S0FBSztJQUVSLE1BQU1TLFNBQVMsSUFBTTtRQUNyQixJQUFJQyxNQUNIQyxTQUFTQyxLQUFLQyx3QkFBd0IsK0NBQStDO1FBQ3JGRixTQUFTQyxLQUFLRSwwQkFBMEIsK0JBQStCO1FBQ3ZFO1FBQ0Qsc0RBQXNEO1FBQ3RESixNQUFNQSxJQUFJSyxRQUFRLENBQUMsVUFBVUwsTUFBTSxDQUFDLFFBQVEsRUFBRUEsSUFBSSxDQUFDO1FBQ25ELHVDQUF1QztRQUN2Q0EsTUFBTUEsSUFBSU0sTUFBTSxDQUFDTixJQUFJTyxNQUFNLEdBQUcsT0FBTyxNQUFNUCxNQUFNLENBQUMsRUFBRUEsSUFBSSxDQUFDLENBQUM7UUFDMUQsT0FBT0E7SUFDUjtJQUVBLElBQUksQ0FBQ1YsTUFBSztRQUNULHFCQUNDLDhEQUFDVCx5REFBSUE7WUFDSjJCLFlBQVlUO1lBQ1pVLFlBQVk7Z0JBQUVDLE9BQU81QiwrREFBU0E7WUFBQztZQUMvQk8sZ0JBQWdCQTtZQUNoQnNCLFdBQVc7Z0JBQUM7YUFBUztZQUNyQkMsY0FBYTs7Ozs7O0lBR1osT0FBTztRQUNObkIsT0FBT29CLElBQUksQ0FBQztRQUNaQyxRQUFRQyxHQUFHLENBQUMsVUFBVXpCO0lBQ3hCLENBQUM7QUFDTDtBQUVBLGlFQUFlRixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fwc3RvbmUvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGggfSBmcm9tIFwiQHN1cGFiYXNlL2F1dGgtdWktcmVhY3RcIjtcbmltcG9ydCB7IFRoZW1lU3VwYSB9IGZyb20gXCJAc3VwYWJhc2UvYXV0aC11aS1zaGFyZWRcIjtcbmltcG9ydCB7IHVzZVVzZXIsIHVzZVN1cGFiYXNlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9hdXRoLWhlbHBlcnMtcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5cbmNvbnN0IExvZ2luUGFnZSA9ICgpID0+IHtcblx0Y29uc3Qgc3VwYWJhc2VDbGllbnQgPSB1c2VTdXBhYmFzZUNsaWVudCgpO1xuXHRjb25zdCB1c2VyID0gdXNlVXNlcigpO1xuXHRjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGFzeW5jIGZ1bmN0aW9uIGxvYWREYXRhKCkge1xuXHRcdFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZUNsaWVudC5mcm9tKFwiVXNlcnNcIikuc2VsZWN0KFwiaWRcIikuZXEodXNlci5pZCk7XG5cdFx0XHRzZXREYXRhKGRhdGEpO1xuXHRcdH1cblx0XHQvLyBPbmx5IHJ1biBxdWVyeSBvbmNlIHVzZXIgaXMgbG9nZ2VkIGluLlxuXHRcdGlmICh1c2VyKSBsb2FkRGF0YSgpO1xuXHR9LCBbdXNlcl0pO1xuXG4gIGNvbnN0IGdldFVSTCA9ICgpID0+IHtcblx0XHRsZXQgdXJsID1cblx0XHRcdHByb2Nlc3M/LmVudj8uTkVYVF9QVUJMSUNfU0lURV9VUkwgPz8gLy8gU2V0IHRoaXMgdG8geW91ciBzaXRlIFVSTCBpbiBwcm9kdWN0aW9uIGVudi5cblx0XHRcdHByb2Nlc3M/LmVudj8uTkVYVF9QVUJMSUNfVkVSQ0VMX1VSTCA/PyAvLyBBdXRvbWF0aWNhbGx5IHNldCBieSBWZXJjZWwuXG5cdFx0XHRcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIjtcblx0XHQvLyBNYWtlIHN1cmUgdG8gaW5jbHVkZSBgaHR0cHM6Ly9gIHdoZW4gbm90IGxvY2FsaG9zdC5cblx0XHR1cmwgPSB1cmwuaW5jbHVkZXMoXCJodHRwXCIpID8gdXJsIDogYGh0dHBzOi8vJHt1cmx9YDtcblx0XHQvLyBNYWtlIHN1cmUgdG8gaW5jbHVkaW5nIHRyYWlsaW5nIGAvYC5cblx0XHR1cmwgPSB1cmwuY2hhckF0KHVybC5sZW5ndGggLSAxKSA9PT0gXCIvXCIgPyB1cmwgOiBgJHt1cmx9L2A7XG5cdFx0cmV0dXJuIHVybDtcblx0fTtcblxuXHRpZiAoIXVzZXIpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8QXV0aFxuXHRcdFx0XHRyZWRpcmVjdFRvPXtnZXRVUkx9XG5cdFx0XHRcdGFwcGVhcmFuY2U9e3sgdGhlbWU6IFRoZW1lU3VwYSB9fVxuXHRcdFx0XHRzdXBhYmFzZUNsaWVudD17c3VwYWJhc2VDbGllbnR9XG5cdFx0XHRcdHByb3ZpZGVycz17Wydnb29nbGUnXX1cblx0XHRcdFx0c29jaWFsTGF5b3V0PVwiaG9yaXpvbnRhbFwiXG5cdFx0XHQvPlxuXHRcdClcbiAgICAgfSBlbHNlIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL2F1dGhvcml6ZWQvcHJvZmlsZVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKCd1c2VyOiAnLCB1c2VyKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7XG4iXSwibmFtZXMiOlsiQXV0aCIsIlRoZW1lU3VwYSIsInVzZVVzZXIiLCJ1c2VTdXBhYmFzZUNsaWVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTG9naW5QYWdlIiwic3VwYWJhc2VDbGllbnQiLCJ1c2VyIiwiZGF0YSIsInNldERhdGEiLCJyb3V0ZXIiLCJsb2FkRGF0YSIsImZyb20iLCJzZWxlY3QiLCJlcSIsImlkIiwiZ2V0VVJMIiwidXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NJVEVfVVJMIiwiTkVYVF9QVUJMSUNfVkVSQ0VMX1VSTCIsImluY2x1ZGVzIiwiY2hhckF0IiwibGVuZ3RoIiwicmVkaXJlY3RUbyIsImFwcGVhcmFuY2UiLCJ0aGVtZSIsInByb3ZpZGVycyIsInNvY2lhbExheW91dCIsInB1c2giLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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