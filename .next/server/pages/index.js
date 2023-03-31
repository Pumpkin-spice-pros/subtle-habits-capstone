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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/auth-ui-react */ \"@supabase/auth-ui-react\");\n/* harmony import */ var _supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/auth-ui-shared */ \"@supabase/auth-ui-shared\");\n/* harmony import */ var _supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"@supabase/auth-helpers-react\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_1__]);\n_supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n// import { supabaseServer } from \"../client\";\nconst LoginPage = ()=>{\n    const supabaseClient = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__.useSupabaseClient)();\n    const user = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__.useUser)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const session = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const setUserInformation = async ()=>{\n        const user = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__.useUser)();\n        const { user_metadata  } = user;\n        const { full_name , email , email_verified  } = user_metadata;\n        const first_name = full_name.split(\" \")[0];\n        const last_name = full_name.split(\" \")[1];\n        const { data , error  } = await supabaseClient.from(\"accounts\").insert([\n            {\n                \"firstName\": first_name\n            },\n            {\n                \"lastName\": last_name\n            },\n            {\n                \"email\": email\n            }\n        ]);\n        if (!error) {\n            let info = {\n                firstName: first_name,\n                lastName: last_name,\n                email: email\n            };\n            return info;\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        async function loadData() {\n            const { data  } = await supabaseClient.from(\"Users\").select(\"id\").eq(user.id);\n            setData(data);\n        }\n        // Only run query once user is logged in.\n        if (user) loadData();\n    }, [\n        user\n    ]);\n    const getURL = ()=>{\n        let url = process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.\n        process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.\n        \"http://localhost:3000/\";\n        // Make sure to include `https://` when not localhost.\n        url = url.includes(\"http\") ? url : `https://${url}`;\n        // Make sure to including trailing `/`.\n        url = url.charAt(url.length - 1) === \"/\" ? url : `${url}/`;\n        return url;\n    };\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_1__.Auth, {\n            redirectTo: getURL,\n            appearance: {\n                theme: _supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_2__.ThemeSupa\n            },\n            supabaseClient: supabaseClient,\n            providers: [\n                \"google\"\n            ],\n            socialLayout: \"horizontal\"\n        }, void 0, false, {\n            fileName: \"/Users/aaroncelia/Documents/Code/Personal Projects/Portfolio/capstone/pages/index.js\",\n            lineNumber: 62,\n            columnNumber: 4\n        }, undefined);\n    } else {\n        // let info = setUserInformation();\n        router.push(\"/authorized/profile\");\n    //  console.log('user: ', user);\n    //  console.log('session: ', session)\n    }\n};\n// export const getServerSideProps = () => {\n// logic function to get users info from their google account and paste it in their profile via insert into the accounts table (pre-rendering it before they get to the page) goes here\n// const user = useUser();\n// const { user_metadata } = user;\n// const { full_name, email, email_verified} = user_metadata;\n// const first_name = full_name.split(' ')[0];\n// const last_name = full_name.split(' ')[1];\n// }\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ007QUFDaUM7QUFDMUM7QUFDSjtBQUN4Qyw4Q0FBOEM7QUFHOUMsTUFBTVEsWUFBWSxJQUFNO0lBQ3ZCLE1BQU1DLGlCQUFpQk4sK0VBQWlCQTtJQUN4QyxNQUFNTyxPQUFPUixxRUFBT0E7SUFDcEIsTUFBTSxDQUFDUyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQTtJQUMvQixNQUFNTyxTQUFTTixzREFBU0E7SUFDeEIsTUFBTU8sVUFBVVYsd0VBQVVBO0lBRTFCLE1BQU1XLHFCQUFxQixVQUFZO1FBQ3JDLE1BQU1MLE9BQU9SLHFFQUFPQTtRQUN0QixNQUFNLEVBQUVjLGNBQWEsRUFBRSxHQUFHTjtRQUMxQixNQUFNLEVBQUVPLFVBQVMsRUFBRUMsTUFBSyxFQUFFQyxlQUFjLEVBQUUsR0FBR0g7UUFDN0MsTUFBTUksYUFBYUgsVUFBVUksS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzFDLE1BQU1DLFlBQVlMLFVBQVVJLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN2QyxNQUFNLEVBQUVWLEtBQUksRUFBRVksTUFBSyxFQUFFLEdBQUcsTUFBTWQsZUFDN0JlLElBQUksQ0FBQyxZQUNMQyxNQUFNLENBQUM7WUFDTjtnQkFBRSxhQUFhTDtZQUFXO1lBQzNCO2dCQUFFLFlBQVlFO1lBQVU7WUFDeEI7Z0JBQUUsU0FBU0o7WUFBTTtTQUNqQjtRQUNELElBQUcsQ0FBQ0ssT0FBTztZQUNULElBQUlHLE9BQU87Z0JBQ1RDLFdBQVdQO2dCQUNYUSxVQUFVTjtnQkFDVkosT0FBT0E7WUFDVDtZQUNBLE9BQU9RO1FBQ1QsQ0FBQztJQUNIO0lBRURyQixnREFBU0EsQ0FBQyxJQUFNO1FBQ2YsZUFBZXdCLFdBQVc7WUFDekIsTUFBTSxFQUFFbEIsS0FBSSxFQUFFLEdBQUcsTUFBTUYsZUFBZWUsSUFBSSxDQUFDLFNBQVNNLE1BQU0sQ0FBQyxNQUFNQyxFQUFFLENBQUNyQixLQUFLc0IsRUFBRTtZQUMzRXBCLFFBQVFEO1FBQ1Q7UUFDQSx5Q0FBeUM7UUFDekMsSUFBSUQsTUFBTW1CO0lBQ1gsR0FBRztRQUFDbkI7S0FBSztJQUVSLE1BQU11QixTQUFTLElBQU07UUFDckIsSUFBSUMsTUFDSEMsU0FBU0MsS0FBS0Msd0JBQXdCLCtDQUErQztRQUNyRkYsU0FBU0MsS0FBS0UsMEJBQTBCLCtCQUErQjtRQUN2RTtRQUNELHNEQUFzRDtRQUN0REosTUFBTUEsSUFBSUssUUFBUSxDQUFDLFVBQVVMLE1BQU0sQ0FBQyxRQUFRLEVBQUVBLElBQUksQ0FBQztRQUNuRCx1Q0FBdUM7UUFDdkNBLE1BQU1BLElBQUlNLE1BQU0sQ0FBQ04sSUFBSU8sTUFBTSxHQUFHLE9BQU8sTUFBTVAsTUFBTSxDQUFDLEVBQUVBLElBQUksQ0FBQyxDQUFDO1FBQzFELE9BQU9BO0lBQ1I7SUFFQSxJQUFJLENBQUN4QixNQUFLO1FBQ1QscUJBQ0MsOERBQUNWLHlEQUFJQTtZQUNKMEMsWUFBWVQ7WUFDWlUsWUFBWTtnQkFBRUMsT0FBTzNDLCtEQUFTQTtZQUFDO1lBQy9CUSxnQkFBZ0JBO1lBQ2hCb0MsV0FBVztnQkFBQzthQUFTO1lBQ3JCQyxjQUFhOzs7Ozs7SUFHWixPQUFPO1FBQ04sbUNBQW1DO1FBQ2xDakMsT0FBT2tDLElBQUksQ0FBQztJQUNiLGdDQUFnQztJQUNoQyxxQ0FBcUM7SUFDckMsQ0FBQztBQUNQO0FBRUEsNENBQTRDO0FBQzFDLHVMQUF1TDtBQUN2TCwwQkFBMEI7QUFDMUIsa0NBQWtDO0FBQ2xDLDZEQUE2RDtBQUM3RCw4Q0FBOEM7QUFDOUMsNkNBQTZDO0FBQy9DLElBQUk7QUFFSixpRUFBZXZDLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXBzdG9uZS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aCB9IGZyb20gXCJAc3VwYWJhc2UvYXV0aC11aS1yZWFjdFwiO1xuaW1wb3J0IHsgVGhlbWVTdXBhIH0gZnJvbSBcIkBzdXBhYmFzZS9hdXRoLXVpLXNoYXJlZFwiO1xuaW1wb3J0IHsgdXNlVXNlciwgdXNlU3VwYWJhc2VDbGllbnQsIHVzZVNlc3Npb24gfSBmcm9tIFwiQHN1cGFiYXNlL2F1dGgtaGVscGVycy1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG4vLyBpbXBvcnQgeyBzdXBhYmFzZVNlcnZlciB9IGZyb20gXCIuLi9jbGllbnRcIjtcblxuXG5jb25zdCBMb2dpblBhZ2UgPSAoKSA9PiB7XG5cdGNvbnN0IHN1cGFiYXNlQ2xpZW50ID0gdXNlU3VwYWJhc2VDbGllbnQoKTtcblx0Y29uc3QgdXNlciA9IHVzZVVzZXIoKTtcblx0Y29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKCk7XG5cbiAgY29uc3Qgc2V0VXNlckluZm9ybWF0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSB1c2VVc2VyKCk7XG5cdFx0Y29uc3QgeyB1c2VyX21ldGFkYXRhIH0gPSB1c2VyO1xuXHRcdGNvbnN0IHsgZnVsbF9uYW1lLCBlbWFpbCwgZW1haWxfdmVyaWZpZWQgfSA9IHVzZXJfbWV0YWRhdGE7XG5cdFx0Y29uc3QgZmlyc3RfbmFtZSA9IGZ1bGxfbmFtZS5zcGxpdChcIiBcIilbMF07XG5cdFx0Y29uc3QgbGFzdF9uYW1lID0gZnVsbF9uYW1lLnNwbGl0KFwiIFwiKVsxXTtcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUNsaWVudFxuICAgIC5mcm9tKCdhY2NvdW50cycpXG4gICAgLmluc2VydChbXG4gICAgICB7ICdmaXJzdE5hbWUnOiBmaXJzdF9uYW1lIH0sXG4gICAgIHsgJ2xhc3ROYW1lJzogbGFzdF9uYW1lIH0sXG4gICAgIHsgJ2VtYWlsJzogZW1haWwgfVxuICAgIF0pO1xuICAgIGlmKCFlcnJvcikge1xuICAgICAgbGV0IGluZm8gPSB7XG4gICAgICAgIGZpcnN0TmFtZTogZmlyc3RfbmFtZSxcbiAgICAgICAgbGFzdE5hbWU6IGxhc3RfbmFtZSxcbiAgICAgICAgZW1haWw6IGVtYWlsXG4gICAgICB9XG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG4gIH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGFzeW5jIGZ1bmN0aW9uIGxvYWREYXRhKCkge1xuXHRcdFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZUNsaWVudC5mcm9tKFwiVXNlcnNcIikuc2VsZWN0KFwiaWRcIikuZXEodXNlci5pZCk7XG5cdFx0XHRzZXREYXRhKGRhdGEpO1xuXHRcdH1cblx0XHQvLyBPbmx5IHJ1biBxdWVyeSBvbmNlIHVzZXIgaXMgbG9nZ2VkIGluLlxuXHRcdGlmICh1c2VyKSBsb2FkRGF0YSgpO1xuXHR9LCBbdXNlcl0pO1xuXG4gIGNvbnN0IGdldFVSTCA9ICgpID0+IHtcblx0XHRsZXQgdXJsID1cblx0XHRcdHByb2Nlc3M/LmVudj8uTkVYVF9QVUJMSUNfU0lURV9VUkwgPz8gLy8gU2V0IHRoaXMgdG8geW91ciBzaXRlIFVSTCBpbiBwcm9kdWN0aW9uIGVudi5cblx0XHRcdHByb2Nlc3M/LmVudj8uTkVYVF9QVUJMSUNfVkVSQ0VMX1VSTCA/PyAvLyBBdXRvbWF0aWNhbGx5IHNldCBieSBWZXJjZWwuXG5cdFx0XHRcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIjtcblx0XHQvLyBNYWtlIHN1cmUgdG8gaW5jbHVkZSBgaHR0cHM6Ly9gIHdoZW4gbm90IGxvY2FsaG9zdC5cblx0XHR1cmwgPSB1cmwuaW5jbHVkZXMoXCJodHRwXCIpID8gdXJsIDogYGh0dHBzOi8vJHt1cmx9YDtcblx0XHQvLyBNYWtlIHN1cmUgdG8gaW5jbHVkaW5nIHRyYWlsaW5nIGAvYC5cblx0XHR1cmwgPSB1cmwuY2hhckF0KHVybC5sZW5ndGggLSAxKSA9PT0gXCIvXCIgPyB1cmwgOiBgJHt1cmx9L2A7XG5cdFx0cmV0dXJuIHVybDtcblx0fTtcblxuXHRpZiAoIXVzZXIpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8QXV0aFxuXHRcdFx0XHRyZWRpcmVjdFRvPXtnZXRVUkx9XG5cdFx0XHRcdGFwcGVhcmFuY2U9e3sgdGhlbWU6IFRoZW1lU3VwYSB9fVxuXHRcdFx0XHRzdXBhYmFzZUNsaWVudD17c3VwYWJhc2VDbGllbnR9XG5cdFx0XHRcdHByb3ZpZGVycz17Wydnb29nbGUnXX1cblx0XHRcdFx0c29jaWFsTGF5b3V0PVwiaG9yaXpvbnRhbFwiXG5cdFx0XHQvPlxuXHRcdClcbiAgICAgfSBlbHNlIHtcbiAgICAgIC8vIGxldCBpbmZvID0gc2V0VXNlckluZm9ybWF0aW9uKCk7XG4gICAgICAgcm91dGVyLnB1c2goXCIvYXV0aG9yaXplZC9wcm9maWxlXCIpO1xuICAgICAgLy8gIGNvbnNvbGUubG9nKCd1c2VyOiAnLCB1c2VyKTtcbiAgICAgIC8vICBjb25zb2xlLmxvZygnc2Vzc2lvbjogJywgc2Vzc2lvbilcbiAgICAgIH1cbn07XG4gICAgXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gKCkgPT4ge1xuICAvLyBsb2dpYyBmdW5jdGlvbiB0byBnZXQgdXNlcnMgaW5mbyBmcm9tIHRoZWlyIGdvb2dsZSBhY2NvdW50IGFuZCBwYXN0ZSBpdCBpbiB0aGVpciBwcm9maWxlIHZpYSBpbnNlcnQgaW50byB0aGUgYWNjb3VudHMgdGFibGUgKHByZS1yZW5kZXJpbmcgaXQgYmVmb3JlIHRoZXkgZ2V0IHRvIHRoZSBwYWdlKSBnb2VzIGhlcmVcbiAgLy8gY29uc3QgdXNlciA9IHVzZVVzZXIoKTtcbiAgLy8gY29uc3QgeyB1c2VyX21ldGFkYXRhIH0gPSB1c2VyO1xuICAvLyBjb25zdCB7IGZ1bGxfbmFtZSwgZW1haWwsIGVtYWlsX3ZlcmlmaWVkfSA9IHVzZXJfbWV0YWRhdGE7XG4gIC8vIGNvbnN0IGZpcnN0X25hbWUgPSBmdWxsX25hbWUuc3BsaXQoJyAnKVswXTtcbiAgLy8gY29uc3QgbGFzdF9uYW1lID0gZnVsbF9uYW1lLnNwbGl0KCcgJylbMV07XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luUGFnZTtcbiJdLCJuYW1lcyI6WyJBdXRoIiwiVGhlbWVTdXBhIiwidXNlVXNlciIsInVzZVN1cGFiYXNlQ2xpZW50IiwidXNlU2Vzc2lvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTG9naW5QYWdlIiwic3VwYWJhc2VDbGllbnQiLCJ1c2VyIiwiZGF0YSIsInNldERhdGEiLCJyb3V0ZXIiLCJzZXNzaW9uIiwic2V0VXNlckluZm9ybWF0aW9uIiwidXNlcl9tZXRhZGF0YSIsImZ1bGxfbmFtZSIsImVtYWlsIiwiZW1haWxfdmVyaWZpZWQiLCJmaXJzdF9uYW1lIiwic3BsaXQiLCJsYXN0X25hbWUiLCJlcnJvciIsImZyb20iLCJpbnNlcnQiLCJpbmZvIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJsb2FkRGF0YSIsInNlbGVjdCIsImVxIiwiaWQiLCJnZXRVUkwiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0lURV9VUkwiLCJORVhUX1BVQkxJQ19WRVJDRUxfVVJMIiwiaW5jbHVkZXMiLCJjaGFyQXQiLCJsZW5ndGgiLCJyZWRpcmVjdFRvIiwiYXBwZWFyYW5jZSIsInRoZW1lIiwicHJvdmlkZXJzIiwic29jaWFsTGF5b3V0IiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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