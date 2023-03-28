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
exports.id = "pages/authorized/sign-out";
exports.ids = ["pages/authorized/sign-out"];
exports.modules = {

/***/ "./components/SignOutButton.js":
/*!*************************************!*\
  !*** ./components/SignOutButton.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SignOutButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"@supabase/auth-helpers-react\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction SignOutButton() {\n    const supabaseClient = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__.useSupabaseClient)();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    async function handleLogout() {\n        setError(\"\");\n        const { error  } = await supabaseClient.auth.signOut();\n        if (error) {\n            setError(error.toString());\n        } else {\n            router.push(\"/\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex w-full gap-2 items-center justify-center p-4 border-b border-b-gray-100 hover:bg-emerald-200 hover:scale-110 transition-all\",\n                onClick: handleLogout,\n                children: \"Sign Out\"\n            }, void 0, false, {\n                fileName: \"/Users/aaroncelia/Documents/Code/Personal Projects/Portfolio/capstone/components/SignOutButton.js\",\n                lineNumber: 21,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    style: {\n                        color: \"red\"\n                    },\n                    children: error\n                }, void 0, false, {\n                    fileName: \"/Users/aaroncelia/Documents/Code/Personal Projects/Portfolio/capstone/components/SignOutButton.js\",\n                    lineNumber: 26,\n                    columnNumber: 19\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/aaroncelia/Documents/Code/Personal Projects/Portfolio/capstone/components/SignOutButton.js\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aaroncelia/Documents/Code/Personal Projects/Portfolio/capstone/components/SignOutButton.js\",\n        lineNumber: 20,\n        columnNumber: 3\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ25PdXRCdXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNQO0FBQ2dDO0FBRWxELFNBQVNHLGdCQUFnQjtJQUN2QyxNQUFNQyxpQkFBaUJGLCtFQUFpQkE7SUFDeEMsTUFBTSxDQUFDRyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1NLFNBQVNQLHNEQUFTQTtJQUN4QixlQUFlUSxlQUFlO1FBQzdCRixTQUFTO1FBQ1QsTUFBTSxFQUFFRCxNQUFLLEVBQUUsR0FBRyxNQUFNRCxlQUFlSyxJQUFJLENBQUNDLE9BQU87UUFDbkQsSUFBR0wsT0FBTTtZQUNSQyxTQUFTRCxNQUFNTSxRQUFRO1FBQ3hCLE9BQU87WUFDTkosT0FBT0ssSUFBSSxDQUFDO1FBQ2IsQ0FBQztJQUNGO0lBRUEscUJBQ0MsOERBQUNDOzswQkFDQSw4REFBQ0M7Z0JBQ0FDLFdBQVU7Z0JBQ1ZDLFNBQVNSOzBCQUFjOzs7Ozs7MEJBR3hCLDhEQUFDSzswQkFBS1IsdUJBQVMsOERBQUNZO29CQUFHQyxPQUFPO3dCQUFFQyxPQUFPO29CQUFNOzhCQUFJZDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHaEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcHN0b25lLy4vY29tcG9uZW50cy9TaWduT3V0QnV0dG9uLmpzPzgxYTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3VwYWJhc2VDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL2F1dGgtaGVscGVycy1yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduT3V0QnV0dG9uKCkge1xuXHRjb25zdCBzdXBhYmFzZUNsaWVudCA9IHVzZVN1cGFiYXNlQ2xpZW50KCk7XG5cdGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0YXN5bmMgZnVuY3Rpb24gaGFuZGxlTG9nb3V0KCkge1xuXHRcdHNldEVycm9yKCcnKTtcblx0XHRjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUNsaWVudC5hdXRoLnNpZ25PdXQoKTtcblx0XHRpZihlcnJvcil7XG5cdFx0XHRzZXRFcnJvcihlcnJvci50b1N0cmluZygpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cm91dGVyLnB1c2goJy8nKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGdhcC0yIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTQgYm9yZGVyLWIgYm9yZGVyLWItZ3JheS0xMDAgaG92ZXI6YmctZW1lcmFsZC0yMDAgaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24tYWxsXCJcblx0XHRcdFx0b25DbGljaz17aGFuZGxlTG9nb3V0fT5cblx0XHRcdFx0U2lnbiBPdXRcblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PGRpdj57ZXJyb3IgJiYgPGgxIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PntlcnJvcn08L2gxPn08L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZVN1cGFiYXNlQ2xpZW50IiwiU2lnbk91dEJ1dHRvbiIsInN1cGFiYXNlQ2xpZW50IiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsImhhbmRsZUxvZ291dCIsImF1dGgiLCJzaWduT3V0IiwidG9TdHJpbmciLCJwdXNoIiwiZGl2IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsImgxIiwic3R5bGUiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SignOutButton.js\n");

/***/ }),

/***/ "./pages/authorized/sign-out.js":
/*!**************************************!*\
  !*** ./pages/authorized/sign-out.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SignOut)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SignOutButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/SignOutButton */ \"./components/SignOutButton.js\");\n\n\nfunction SignOut() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignOutButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/aaroncelia/Documents/Code/Personal Projects/Portfolio/capstone/pages/authorized/sign-out.js\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRob3JpemVkL3NpZ24tb3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBEO0FBRzNDLFNBQVNDLFVBQVU7SUFDaEMscUJBQU8sOERBQUNELGlFQUFhQTs7Ozs7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcHN0b25lLy4vcGFnZXMvYXV0aG9yaXplZC9zaWduLW91dC5qcz9kZjRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaWduT3V0QnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NpZ25PdXRCdXR0b25cIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25PdXQoKSB7XG4gIHJldHVybiA8U2lnbk91dEJ1dHRvbiAvPlxufVxuIl0sIm5hbWVzIjpbIlNpZ25PdXRCdXR0b24iLCJTaWduT3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/authorized/sign-out.js\n");

/***/ }),

/***/ "@supabase/auth-helpers-react":
/*!***********************************************!*\
  !*** external "@supabase/auth-helpers-react" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@supabase/auth-helpers-react");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/authorized/sign-out.js"));
module.exports = __webpack_exports__;

})();