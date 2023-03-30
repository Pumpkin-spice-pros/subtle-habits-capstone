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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/auth-helpers-nextjs */ \"@supabase/auth-helpers-nextjs\");\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"@supabase/auth-helpers-react\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _supabase_supabase_js_dist_module_lib_SupabaseAuthClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @supabase/supabase-js/dist/module/lib/SupabaseAuthClient */ \"@supabase/supabase-js/dist/module/lib/SupabaseAuthClient\");\n/* harmony import */ var _supabase_supabase_js_dist_module_lib_SupabaseAuthClient__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js_dist_module_lib_SupabaseAuthClient__WEBPACK_IMPORTED_MODULE_4__);\n// import '@/styles/globals.css'\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    // Create a new supabase browser client on every first render.\n    const [supabaseClient] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>(0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1__.createBrowserSupabaseClient)());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__.SessionContextProvider, {\n        supabaseClient: supabaseClient,\n        initialSession: pageProps.initialSession,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/aaroncelia/Documents/Code/Personal Projects/Portfolio/capstone/pages/_app.js\",\n            lineNumber: 16,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/aaroncelia/Documents/Code/Personal Projects/Portfolio/capstone/pages/_app.js\",\n        lineNumber: 13,\n        columnNumber: 3\n    }, this);\n} // import styles from '../styles/globals.css';\n // import { useState, useEffect } from 'react'\n // import Link from 'next/link'\n // import { supabase } from '../client'\n // import { useRouter } from 'next/router'\n // export default function MyApp({ Component, pageProps}) {\n //   const [authenticatedState, setAuthenticatedState] = useState('not-authenticated');\n //   const router = useRouter();\n //   const checkUser = async () => {\n //     const { user } = await supabase.auth.getUser();\n //     if(user){\n //       setAuthenticatedState('authenticated');\n //     }\n //   }\n //   // const handleAuthChange = async (event, session) => {\n //   //   await fetch('/api/auth', {\n //   //     method: 'POST',\n //   //     headers: new Headers({ 'Content-Type': 'application/json' }),\n //   //     credentials: 'same-origin',\n //   //     body: JSON.stringify({ event, session })\n //   //   })\n //   // }\n //   useEffect(() => {\n //     const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {\n //       // handleAuthChange(event, session);\n //       if(event === 'SIGNED_IN'){\n //         setAuthenticatedState('authenticated');\n //         router.push('/profile')\n //       }\n //       if(event === 'SIGNED_OUT'){\n //         setAuthenticatedState('not-authenticated');\n //       }\n //     });\n //     checkUser();\n //     return () => {\n //       authListener.unsubscribe();\n //     }\n //   }, [])\n //   return (\n // \t\t<div>\n //       <nav style={navStyle}>\n //         <Link href='/' style={linkStyle}>Home</Link>\n //         <Link href='/profile' style={linkStyle}>Profile</Link>\n //         {\n //         authenticatedState === 'not-authenticated' &&\n //         <Link href='/sign-in' style={linkStyle}>Sign In</Link>\n //         }\n //         <Link href='/protected' style={linkStyle}>Protected</Link>\n //       </nav>\n // \t\t\t<Component {...pageProps} />\n // \t\t</div>\n // \t);\n // }\n // const linkStyle = {\n //   marginRight: 10\n // }\n // const navStyle = {\n //   margin: 20\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0NBQWdDOztBQUM0QztBQUNOO0FBQ3JDO0FBQzZEO0FBRy9FLFNBQVNJLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUN2RCw4REFBOEQ7SUFDOUQsTUFBTSxDQUFDQyxlQUFlLEdBQUdMLCtDQUFRQSxDQUFDLElBQU1GLDBGQUEyQkE7SUFFbkUscUJBQ0MsOERBQUNDLGdGQUFzQkE7UUFDdEJNLGdCQUFnQkE7UUFDaEJDLGdCQUFnQkYsVUFBVUUsY0FBYztrQkFDeEMsNEVBQUNIO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHM0IsQ0FBQyxDQVVELDhDQUE4QztDQUM5Qyw4Q0FBOEM7Q0FDOUMsK0JBQStCO0NBQy9CLHVDQUF1QztDQUN2QywwQ0FBMEM7Q0FFMUMsMkRBQTJEO0NBQzNELHVGQUF1RjtDQUN2RixnQ0FBZ0M7Q0FFaEMsb0NBQW9DO0NBQ3BDLHNEQUFzRDtDQUN0RCxnQkFBZ0I7Q0FDaEIsZ0RBQWdEO0NBQ2hELFFBQVE7Q0FDUixNQUFNO0NBRU4sNERBQTREO0NBQzVELG9DQUFvQztDQUNwQywyQkFBMkI7Q0FDM0IseUVBQXlFO0NBQ3pFLHVDQUF1QztDQUN2QyxvREFBb0Q7Q0FDcEQsWUFBWTtDQUVaLFNBQVM7Q0FFVCxzQkFBc0I7Q0FDdEIsMkZBQTJGO0NBQzNGLDZDQUE2QztDQUM3QyxtQ0FBbUM7Q0FDbkMsa0RBQWtEO0NBQ2xELGtDQUFrQztDQUNsQyxVQUFVO0NBQ1Ysb0NBQW9DO0NBQ3BDLHNEQUFzRDtDQUN0RCxVQUFVO0NBQ1YsVUFBVTtDQUNWLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsb0NBQW9DO0NBQ3BDLFFBQVE7Q0FDUixXQUFXO0NBQ1gsYUFBYTtDQUNiLFVBQVU7Q0FDViwrQkFBK0I7Q0FDL0IsdURBQXVEO0NBQ3ZELGlFQUFpRTtDQUNqRSxZQUFZO0NBQ1osd0RBQXdEO0NBQ3hELGlFQUFpRTtDQUNqRSxZQUFZO0NBQ1oscUVBQXFFO0NBQ3JFLGVBQWU7Q0FDZixrQ0FBa0M7Q0FDbEMsV0FBVztDQUNYLE1BQU07Q0FDTixJQUFJO0NBRUosc0JBQXNCO0NBQ3RCLG9CQUFvQjtDQUNwQixJQUFJO0NBRUoscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fwc3RvbmUvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJTdXBhYmFzZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2UvYXV0aC1oZWxwZXJzLW5leHRqc1wiO1xuaW1wb3J0IHsgU2Vzc2lvbkNvbnRleHRQcm92aWRlciB9IGZyb20gXCJAc3VwYWJhc2UvYXV0aC1oZWxwZXJzLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3VwYWJhc2VBdXRoQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qcy9kaXN0L21vZHVsZS9saWIvU3VwYWJhc2VBdXRoQ2xpZW50XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cdC8vIENyZWF0ZSBhIG5ldyBzdXBhYmFzZSBicm93c2VyIGNsaWVudCBvbiBldmVyeSBmaXJzdCByZW5kZXIuXG5cdGNvbnN0IFtzdXBhYmFzZUNsaWVudF0gPSB1c2VTdGF0ZSgoKSA9PiBjcmVhdGVCcm93c2VyU3VwYWJhc2VDbGllbnQoKSk7XG5cblx0cmV0dXJuIChcblx0XHQ8U2Vzc2lvbkNvbnRleHRQcm92aWRlclxuXHRcdFx0c3VwYWJhc2VDbGllbnQ9e3N1cGFiYXNlQ2xpZW50fVxuXHRcdFx0aW5pdGlhbFNlc3Npb249e3BhZ2VQcm9wcy5pbml0aWFsU2Vzc2lvbn0+XG5cdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cdFx0PC9TZXNzaW9uQ29udGV4dFByb3ZpZGVyPlxuXHQpO1xufVxuXG5cblxuXG5cblxuXG5cblxuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuLy8gaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuLy8gaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICcuLi9jbGllbnQnXG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wc30pIHtcbi8vICAgY29uc3QgW2F1dGhlbnRpY2F0ZWRTdGF0ZSwgc2V0QXV0aGVudGljYXRlZFN0YXRlXSA9IHVzZVN0YXRlKCdub3QtYXV0aGVudGljYXRlZCcpO1xuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuLy8gICBjb25zdCBjaGVja1VzZXIgPSBhc3luYyAoKSA9PiB7XG4vLyAgICAgY29uc3QgeyB1c2VyIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcbi8vICAgICBpZih1c2VyKXtcbi8vICAgICAgIHNldEF1dGhlbnRpY2F0ZWRTdGF0ZSgnYXV0aGVudGljYXRlZCcpO1xuLy8gICAgIH1cbi8vICAgfVxuXG4vLyAgIC8vIGNvbnN0IGhhbmRsZUF1dGhDaGFuZ2UgPSBhc3luYyAoZXZlbnQsIHNlc3Npb24pID0+IHtcbi8vICAgLy8gICBhd2FpdCBmZXRjaCgnL2FwaS9hdXRoJywge1xuLy8gICAvLyAgICAgbWV0aG9kOiAnUE9TVCcsXG4vLyAgIC8vICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSksXG4vLyAgIC8vICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbi8vICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZXZlbnQsIHNlc3Npb24gfSlcbi8vICAgLy8gICB9KVxuXG4vLyAgIC8vIH1cblxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgIGNvbnN0IHsgZGF0YTogYXV0aExpc3RlbmVyIH0gPSBzdXBhYmFzZS5hdXRoLm9uQXV0aFN0YXRlQ2hhbmdlKChldmVudCwgc2Vzc2lvbikgPT4ge1xuLy8gICAgICAgLy8gaGFuZGxlQXV0aENoYW5nZShldmVudCwgc2Vzc2lvbik7XG4vLyAgICAgICBpZihldmVudCA9PT0gJ1NJR05FRF9JTicpe1xuLy8gICAgICAgICBzZXRBdXRoZW50aWNhdGVkU3RhdGUoJ2F1dGhlbnRpY2F0ZWQnKTtcbi8vICAgICAgICAgcm91dGVyLnB1c2goJy9wcm9maWxlJylcbi8vICAgICAgIH1cbi8vICAgICAgIGlmKGV2ZW50ID09PSAnU0lHTkVEX09VVCcpe1xuLy8gICAgICAgICBzZXRBdXRoZW50aWNhdGVkU3RhdGUoJ25vdC1hdXRoZW50aWNhdGVkJyk7XG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG4vLyAgICAgY2hlY2tVc2VyKCk7XG4vLyAgICAgcmV0dXJuICgpID0+IHtcbi8vICAgICAgIGF1dGhMaXN0ZW5lci51bnN1YnNjcmliZSgpO1xuLy8gICAgIH1cbi8vICAgfSwgW10pXG4vLyAgIHJldHVybiAoXG4vLyBcdFx0PGRpdj5cbi8vICAgICAgIDxuYXYgc3R5bGU9e25hdlN0eWxlfT5cbi8vICAgICAgICAgPExpbmsgaHJlZj0nLycgc3R5bGU9e2xpbmtTdHlsZX0+SG9tZTwvTGluaz5cbi8vICAgICAgICAgPExpbmsgaHJlZj0nL3Byb2ZpbGUnIHN0eWxlPXtsaW5rU3R5bGV9PlByb2ZpbGU8L0xpbms+XG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgYXV0aGVudGljYXRlZFN0YXRlID09PSAnbm90LWF1dGhlbnRpY2F0ZWQnICYmXG4vLyAgICAgICAgIDxMaW5rIGhyZWY9Jy9zaWduLWluJyBzdHlsZT17bGlua1N0eWxlfT5TaWduIEluPC9MaW5rPlxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIDxMaW5rIGhyZWY9Jy9wcm90ZWN0ZWQnIHN0eWxlPXtsaW5rU3R5bGV9PlByb3RlY3RlZDwvTGluaz5cbi8vICAgICAgIDwvbmF2PlxuLy8gXHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuLy8gXHRcdDwvZGl2PlxuLy8gXHQpO1xuLy8gfVxuXG4vLyBjb25zdCBsaW5rU3R5bGUgPSB7XG4vLyAgIG1hcmdpblJpZ2h0OiAxMFxuLy8gfVxuXG4vLyBjb25zdCBuYXZTdHlsZSA9IHtcbi8vICAgbWFyZ2luOiAyMFxuLy8gfVxuXG4iXSwibmFtZXMiOlsiY3JlYXRlQnJvd3NlclN1cGFiYXNlQ2xpZW50IiwiU2Vzc2lvbkNvbnRleHRQcm92aWRlciIsInVzZVN0YXRlIiwiU3VwYWJhc2VBdXRoQ2xpZW50IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdXBhYmFzZUNsaWVudCIsImluaXRpYWxTZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "@supabase/auth-helpers-nextjs":
/*!************************************************!*\
  !*** external "@supabase/auth-helpers-nextjs" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@supabase/auth-helpers-nextjs");

/***/ }),

/***/ "@supabase/auth-helpers-react":
/*!***********************************************!*\
  !*** external "@supabase/auth-helpers-react" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@supabase/auth-helpers-react");

/***/ }),

/***/ "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient":
/*!***************************************************************************!*\
  !*** external "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient" ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js/dist/module/lib/SupabaseAuthClient");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();