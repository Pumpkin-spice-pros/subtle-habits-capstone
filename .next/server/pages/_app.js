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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/auth-helpers-nextjs */ \"@supabase/auth-helpers-nextjs\");\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"@supabase/auth-helpers-react\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n// import '@/styles/globals.css'\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    // Create a new supabase browser client on every first render.\n    const [supabaseClient] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>(0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1__.createBrowserSupabaseClient)());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__.SessionContextProvider, {\n        supabaseClient: supabaseClient,\n        initialSession: pageProps.initialSession,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/aaroncelia/Documents/Code/Personal Projects/Portfolio/capstone/pages/_app.js\",\n            lineNumber: 15,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/aaroncelia/Documents/Code/Personal Projects/Portfolio/capstone/pages/_app.js\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, this);\n} // import styles from '../styles/globals.css';\n // import { useState, useEffect } from 'react'\n // import Link from 'next/link'\n // import { supabase } from '../client'\n // import { useRouter } from 'next/router'\n // export default function MyApp({ Component, pageProps}) {\n //   const [authenticatedState, setAuthenticatedState] = useState('not-authenticated');\n //   const router = useRouter();\n //   const checkUser = async () => {\n //     const { user } = await supabase.auth.getUser();\n //     if(user){\n //       setAuthenticatedState('authenticated');\n //     }\n //   }\n //   // const handleAuthChange = async (event, session) => {\n //   //   await fetch('/api/auth', {\n //   //     method: 'POST',\n //   //     headers: new Headers({ 'Content-Type': 'application/json' }),\n //   //     credentials: 'same-origin',\n //   //     body: JSON.stringify({ event, session })\n //   //   })\n //   // }\n //   useEffect(() => {\n //     const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {\n //       // handleAuthChange(event, session);\n //       if(event === 'SIGNED_IN'){\n //         setAuthenticatedState('authenticated');\n //         router.push('/profile')\n //       }\n //       if(event === 'SIGNED_OUT'){\n //         setAuthenticatedState('not-authenticated');\n //       }\n //     });\n //     checkUser();\n //     return () => {\n //       authListener.unsubscribe();\n //     }\n //   }, [])\n //   return (\n // \t\t<div>\n //       <nav style={navStyle}>\n //         <Link href='/' style={linkStyle}>Home</Link>\n //         <Link href='/profile' style={linkStyle}>Profile</Link>\n //         {\n //         authenticatedState === 'not-authenticated' &&\n //         <Link href='/sign-in' style={linkStyle}>Sign In</Link>\n //         }\n //         <Link href='/protected' style={linkStyle}>Protected</Link>\n //       </nav>\n // \t\t\t<Component {...pageProps} />\n // \t\t</div>\n // \t);\n // }\n // const linkStyle = {\n //   marginRight: 10\n // }\n // const navStyle = {\n //   margin: 20\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLGdDQUFnQzs7QUFDNEM7QUFDTjtBQUNyQztBQUdsQixTQUFTRyxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDdkQsOERBQThEO0lBQzlELE1BQU0sQ0FBQ0MsZUFBZSxHQUFHSiwrQ0FBUUEsQ0FBQyxJQUFNRiwwRkFBMkJBO0lBRW5FLHFCQUNDLDhEQUFDQyxnRkFBc0JBO1FBQ3RCSyxnQkFBZ0JBO1FBQ2hCQyxnQkFBZ0JGLFVBQVVFLGNBQWM7a0JBQ3hDLDRFQUFDSDtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzNCLENBQUMsQ0FVRCw4Q0FBOEM7Q0FDOUMsOENBQThDO0NBQzlDLCtCQUErQjtDQUMvQix1Q0FBdUM7Q0FDdkMsMENBQTBDO0NBRTFDLDJEQUEyRDtDQUMzRCx1RkFBdUY7Q0FDdkYsZ0NBQWdDO0NBRWhDLG9DQUFvQztDQUNwQyxzREFBc0Q7Q0FDdEQsZ0JBQWdCO0NBQ2hCLGdEQUFnRDtDQUNoRCxRQUFRO0NBQ1IsTUFBTTtDQUVOLDREQUE0RDtDQUM1RCxvQ0FBb0M7Q0FDcEMsMkJBQTJCO0NBQzNCLHlFQUF5RTtDQUN6RSx1Q0FBdUM7Q0FDdkMsb0RBQW9EO0NBQ3BELFlBQVk7Q0FFWixTQUFTO0NBRVQsc0JBQXNCO0NBQ3RCLDJGQUEyRjtDQUMzRiw2Q0FBNkM7Q0FDN0MsbUNBQW1DO0NBQ25DLGtEQUFrRDtDQUNsRCxrQ0FBa0M7Q0FDbEMsVUFBVTtDQUNWLG9DQUFvQztDQUNwQyxzREFBc0Q7Q0FDdEQsVUFBVTtDQUNWLFVBQVU7Q0FDVixtQkFBbUI7Q0FDbkIscUJBQXFCO0NBQ3JCLG9DQUFvQztDQUNwQyxRQUFRO0NBQ1IsV0FBVztDQUNYLGFBQWE7Q0FDYixVQUFVO0NBQ1YsK0JBQStCO0NBQy9CLHVEQUF1RDtDQUN2RCxpRUFBaUU7Q0FDakUsWUFBWTtDQUNaLHdEQUF3RDtDQUN4RCxpRUFBaUU7Q0FDakUsWUFBWTtDQUNaLHFFQUFxRTtDQUNyRSxlQUFlO0NBQ2Ysa0NBQWtDO0NBQ2xDLFdBQVc7Q0FDWCxNQUFNO0NBQ04sSUFBSTtDQUVKLHNCQUFzQjtDQUN0QixvQkFBb0I7Q0FDcEIsSUFBSTtDQUVKLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcHN0b25lLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VyU3VwYWJhc2VDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL2F1dGgtaGVscGVycy1uZXh0anNcIjtcbmltcG9ydCB7IFNlc3Npb25Db250ZXh0UHJvdmlkZXIgfSBmcm9tIFwiQHN1cGFiYXNlL2F1dGgtaGVscGVycy1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblx0Ly8gQ3JlYXRlIGEgbmV3IHN1cGFiYXNlIGJyb3dzZXIgY2xpZW50IG9uIGV2ZXJ5IGZpcnN0IHJlbmRlci5cblx0Y29uc3QgW3N1cGFiYXNlQ2xpZW50XSA9IHVzZVN0YXRlKCgpID0+IGNyZWF0ZUJyb3dzZXJTdXBhYmFzZUNsaWVudCgpKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxTZXNzaW9uQ29udGV4dFByb3ZpZGVyXG5cdFx0XHRzdXBhYmFzZUNsaWVudD17c3VwYWJhc2VDbGllbnR9XG5cdFx0XHRpbml0aWFsU2Vzc2lvbj17cGFnZVByb3BzLmluaXRpYWxTZXNzaW9ufT5cblx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblx0XHQ8L1Nlc3Npb25Db250ZXh0UHJvdmlkZXI+XG5cdCk7XG59XG5cblxuXG5cblxuXG5cblxuXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG4vLyBpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG4vLyBpbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4uL2NsaWVudCdcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzfSkge1xuLy8gICBjb25zdCBbYXV0aGVudGljYXRlZFN0YXRlLCBzZXRBdXRoZW50aWNhdGVkU3RhdGVdID0gdXNlU3RhdGUoJ25vdC1hdXRoZW50aWNhdGVkJyk7XG4vLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4vLyAgIGNvbnN0IGNoZWNrVXNlciA9IGFzeW5jICgpID0+IHtcbi8vICAgICBjb25zdCB7IHVzZXIgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xuLy8gICAgIGlmKHVzZXIpe1xuLy8gICAgICAgc2V0QXV0aGVudGljYXRlZFN0YXRlKCdhdXRoZW50aWNhdGVkJyk7XG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgLy8gY29uc3QgaGFuZGxlQXV0aENoYW5nZSA9IGFzeW5jIChldmVudCwgc2Vzc2lvbikgPT4ge1xuLy8gICAvLyAgIGF3YWl0IGZldGNoKCcvYXBpL2F1dGgnLCB7XG4vLyAgIC8vICAgICBtZXRob2Q6ICdQT1NUJyxcbi8vICAgLy8gICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbi8vICAgLy8gICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuLy8gICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBldmVudCwgc2Vzc2lvbiB9KVxuLy8gICAvLyAgIH0pXG5cbi8vICAgLy8gfVxuXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgY29uc3QgeyBkYXRhOiBhdXRoTGlzdGVuZXIgfSA9IHN1cGFiYXNlLmF1dGgub25BdXRoU3RhdGVDaGFuZ2UoKGV2ZW50LCBzZXNzaW9uKSA9PiB7XG4vLyAgICAgICAvLyBoYW5kbGVBdXRoQ2hhbmdlKGV2ZW50LCBzZXNzaW9uKTtcbi8vICAgICAgIGlmKGV2ZW50ID09PSAnU0lHTkVEX0lOJyl7XG4vLyAgICAgICAgIHNldEF1dGhlbnRpY2F0ZWRTdGF0ZSgnYXV0aGVudGljYXRlZCcpO1xuLy8gICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKVxuLy8gICAgICAgfVxuLy8gICAgICAgaWYoZXZlbnQgPT09ICdTSUdORURfT1VUJyl7XG4vLyAgICAgICAgIHNldEF1dGhlbnRpY2F0ZWRTdGF0ZSgnbm90LWF1dGhlbnRpY2F0ZWQnKTtcbi8vICAgICAgIH1cbi8vICAgICB9KTtcbi8vICAgICBjaGVja1VzZXIoKTtcbi8vICAgICByZXR1cm4gKCkgPT4ge1xuLy8gICAgICAgYXV0aExpc3RlbmVyLnVuc3Vic2NyaWJlKCk7XG4vLyAgICAgfVxuLy8gICB9LCBbXSlcbi8vICAgcmV0dXJuIChcbi8vIFx0XHQ8ZGl2PlxuLy8gICAgICAgPG5hdiBzdHlsZT17bmF2U3R5bGV9PlxuLy8gICAgICAgICA8TGluayBocmVmPScvJyBzdHlsZT17bGlua1N0eWxlfT5Ib21lPC9MaW5rPlxuLy8gICAgICAgICA8TGluayBocmVmPScvcHJvZmlsZScgc3R5bGU9e2xpbmtTdHlsZX0+UHJvZmlsZTwvTGluaz5cbi8vICAgICAgICAge1xuLy8gICAgICAgICBhdXRoZW50aWNhdGVkU3RhdGUgPT09ICdub3QtYXV0aGVudGljYXRlZCcgJiZcbi8vICAgICAgICAgPExpbmsgaHJlZj0nL3NpZ24taW4nIHN0eWxlPXtsaW5rU3R5bGV9PlNpZ24gSW48L0xpbms+XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgPExpbmsgaHJlZj0nL3Byb3RlY3RlZCcgc3R5bGU9e2xpbmtTdHlsZX0+UHJvdGVjdGVkPC9MaW5rPlxuLy8gICAgICAgPC9uYXY+XG4vLyBcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4vLyBcdFx0PC9kaXY+XG4vLyBcdCk7XG4vLyB9XG5cbi8vIGNvbnN0IGxpbmtTdHlsZSA9IHtcbi8vICAgbWFyZ2luUmlnaHQ6IDEwXG4vLyB9XG5cbi8vIGNvbnN0IG5hdlN0eWxlID0ge1xuLy8gICBtYXJnaW46IDIwXG4vLyB9XG5cbiJdLCJuYW1lcyI6WyJjcmVhdGVCcm93c2VyU3VwYWJhc2VDbGllbnQiLCJTZXNzaW9uQ29udGV4dFByb3ZpZGVyIiwidXNlU3RhdGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN1cGFiYXNlQ2xpZW50IiwiaW5pdGlhbFNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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