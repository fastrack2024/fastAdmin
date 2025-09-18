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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fbriggiz%2FDesktop%2Ffastrack-admin%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbriggiz%2FDesktop%2Ffastrack-admin&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fbriggiz%2FDesktop%2Ffastrack-admin%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbriggiz%2FDesktop%2Ffastrack-admin&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_briggiz_Desktop_fastrack_admin_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/briggiz/Desktop/fastrack-admin/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_briggiz_Desktop_fastrack_admin_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmJyaWdnaXolMkZEZXNrdG9wJTJGZmFzdHJhY2stYWRtaW4lMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGYnJpZ2dpeiUyRkRlc2t0b3AlMkZmYXN0cmFjay1hZG1pbiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDeUI7QUFDdEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXN0cmFjay1hZG1pbi8/YjEzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvYnJpZ2dpei9EZXNrdG9wL2Zhc3RyYWNrLWFkbWluL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9icmlnZ2l6L0Rlc2t0b3AvZmFzdHJhY2stYWRtaW4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fbriggiz%2FDesktop%2Ffastrack-admin%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbriggiz%2FDesktop%2Ffastrack-admin&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/database */ \"(rsc)/./utils/database.ts\");\n/* harmony import */ var _models_admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/admin */ \"(rsc)/./models/admin.ts\");\n\n\n\n\n\nconst options = {\n    session: {\n        strategy: \"jwt\",\n        maxAge: 60 * 60\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                console.log(\"authorized fired\", credentials);\n                if (!credentials) {\n                    return null;\n                }\n                try {\n                    await (0,_utils_database__WEBPACK_IMPORTED_MODULE_3__.connectToDatabase)();\n                    const admin = await _models_admin__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                        email: credentials?.email\n                    });\n                    if (!admin) {\n                        const error = new Error();\n                        error.message = \"Admin not found\";\n                        error.status = 404;\n                        throw error;\n                    }\n                    const isValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, admin.password);\n                    if (!isValid) {\n                        const error = new Error();\n                        error.message = \"Invalid password\";\n                        error.status = 403;\n                        throw error;\n                    }\n                    return {\n                        email: admin.email,\n                        id: admin._id\n                    };\n                } catch (error) {\n                    const { message, status } = error;\n                    console.log(\"error in authorize\", message, status);\n                    const customError = new Error();\n                    customError.message = message;\n                    customError.status = status;\n                    throw customError;\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            user && (token.user = user);\n            return token;\n        },\n        async session ({ session, token, user }) {\n            // Send properties to the client, like an access_token and user id from a provider.\n            session.user = token.user;\n            return session;\n        }\n    }\n};\nconst handler = (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(options);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNzQztBQUNvQjtBQUM1QjtBQUN1QjtBQUNsQjtBQUduQyxNQUFNSyxVQUF1QjtJQUMzQkMsU0FBUztRQUNQQyxVQUFVO1FBQ1ZDLFFBQVEsS0FBSztJQUNmO0lBRUFDLFdBQVc7UUFDVFIsMkVBQVdBLENBQUM7WUFDVlMsTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFRO2dCQUN2Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3pCTSxRQUFRQyxHQUFHLENBQUMsb0JBQW9CUDtnQkFDaEMsSUFBSSxDQUFDQSxhQUFhO29CQUNoQixPQUFPO2dCQUNUO2dCQUNBLElBQUk7b0JBQ0YsTUFBTVIsa0VBQWlCQTtvQkFDdkIsTUFBTWdCLFFBQVEsTUFBTWYscURBQUtBLENBQUNnQixPQUFPLENBQUM7d0JBQUVSLE9BQU9ELGFBQWFDO29CQUFNO29CQUU5RCxJQUFJLENBQUNPLE9BQU87d0JBQ1YsTUFBTUUsUUFBUSxJQUFJQzt3QkFDbEJELE1BQU1FLE9BQU8sR0FBRzt3QkFDaEJGLE1BQU1HLE1BQU0sR0FBRzt3QkFDZixNQUFNSDtvQkFDUjtvQkFFQSxNQUFNSSxVQUFVLE1BQU12Qix1REFBYyxDQUNsQ1MsWUFBWUksUUFBUSxFQUNwQkksTUFBTUosUUFBUTtvQkFHaEIsSUFBSSxDQUFDVSxTQUFTO3dCQUNaLE1BQU1KLFFBQVEsSUFBSUM7d0JBQ2xCRCxNQUFNRSxPQUFPLEdBQUc7d0JBQ2hCRixNQUFNRyxNQUFNLEdBQUc7d0JBQ2YsTUFBTUg7b0JBQ1I7b0JBRUEsT0FBTzt3QkFBRVQsT0FBT08sTUFBTVAsS0FBSzt3QkFBRWUsSUFBSVIsTUFBTVMsR0FBRztvQkFBQztnQkFDN0MsRUFBRSxPQUFPUCxPQUFPO29CQUNkLE1BQU0sRUFBRUUsT0FBTyxFQUFFQyxNQUFNLEVBQUUsR0FBR0g7b0JBQzVCSixRQUFRQyxHQUFHLENBQUMsc0JBQXNCSyxTQUFTQztvQkFDM0MsTUFBTUssY0FBYyxJQUFJUDtvQkFDeEJPLFlBQVlOLE9BQU8sR0FBR0E7b0JBQ3RCTSxZQUFZTCxNQUFNLEdBQUdBO29CQUNyQixNQUFNSztnQkFDUjtZQUNGO1FBQ0Y7S0FDRDtJQUNEQyxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRTtZQUN2QkEsUUFBU0QsQ0FBQUEsTUFBTUMsSUFBSSxHQUFHQSxJQUFHO1lBQ3pCLE9BQU9EO1FBQ1Q7UUFDQSxNQUFNMUIsU0FBUSxFQUFFQSxPQUFPLEVBQUUwQixLQUFLLEVBQUVDLElBQUksRUFBRTtZQUNwQyxtRkFBbUY7WUFFbkYzQixRQUFRMkIsSUFBSSxHQUFHRCxNQUFNQyxJQUFJO1lBR3pCLE9BQU8zQjtRQUNUO0lBQ0Y7QUFDRjtBQUVBLE1BQU00QixVQUFVbEMsMERBQVFBLENBQUNLO0FBRWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFzdHJhY2stYWRtaW4vLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz9jOGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhPcHRpb25zLCBEZWZhdWx0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiQC91dGlscy9kYXRhYmFzZVwiO1xyXG5pbXBvcnQgQWRtaW4gZnJvbSBcIkAvbW9kZWxzL2FkbWluXCI7XHJcbmltcG9ydCB7IEVycm9yV2l0aE1lc3NhZ2VBbmRTdGF0dXMgfSBmcm9tIFwiQC90eXBlc1wiO1xyXG5cclxuY29uc3Qgb3B0aW9uczogQXV0aE9wdGlvbnMgPSB7XHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXHJcbiAgICBtYXhBZ2U6IDYwICogNjAsIC8vIDEgaG91clxyXG4gIH0sXHJcblxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ3JlZGVudGlhbHMoe1xyXG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJlbWFpbFwiIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhdXRob3JpemVkIGZpcmVkXCIsIGNyZWRlbnRpYWxzKTtcclxuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzKSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcbiAgICAgICAgICBjb25zdCBhZG1pbiA9IGF3YWl0IEFkbWluLmZpbmRPbmUoeyBlbWFpbDogY3JlZGVudGlhbHM/LmVtYWlsIH0pO1xyXG5cclxuICAgICAgICAgIGlmICghYWRtaW4pIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoKSBhcyBFcnJvcldpdGhNZXNzYWdlQW5kU3RhdHVzO1xyXG4gICAgICAgICAgICBlcnJvci5tZXNzYWdlID0gXCJBZG1pbiBub3QgZm91bmRcIjtcclxuICAgICAgICAgICAgZXJyb3Iuc3RhdHVzID0gNDA0O1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICBhZG1pbi5wYXNzd29yZFxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoKSBhcyBFcnJvcldpdGhNZXNzYWdlQW5kU3RhdHVzO1xyXG4gICAgICAgICAgICBlcnJvci5tZXNzYWdlID0gXCJJbnZhbGlkIHBhc3N3b3JkXCI7XHJcbiAgICAgICAgICAgIGVycm9yLnN0YXR1cyA9IDQwMztcclxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHsgZW1haWw6IGFkbWluLmVtYWlsLCBpZDogYWRtaW4uX2lkIH07XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnN0IHsgbWVzc2FnZSwgc3RhdHVzIH0gPSBlcnJvciBhcyBFcnJvcldpdGhNZXNzYWdlQW5kU3RhdHVzO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBpbiBhdXRob3JpemVcIiwgbWVzc2FnZSwgc3RhdHVzKTtcclxuICAgICAgICAgIGNvbnN0IGN1c3RvbUVycm9yID0gbmV3IEVycm9yKCkgYXMgRXJyb3JXaXRoTWVzc2FnZUFuZFN0YXR1cztcclxuICAgICAgICAgIGN1c3RvbUVycm9yLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgICAgICAgY3VzdG9tRXJyb3Iuc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgICAgICAgdGhyb3cgY3VzdG9tRXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcclxuICAgICAgdXNlciAmJiAodG9rZW4udXNlciA9IHVzZXIpO1xyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuLCB1c2VyIH0pIHtcclxuICAgICAgLy8gU2VuZCBwcm9wZXJ0aWVzIHRvIHRoZSBjbGllbnQsIGxpa2UgYW4gYWNjZXNzX3Rva2VuIGFuZCB1c2VyIGlkIGZyb20gYSBwcm92aWRlci5cclxuXHJcbiAgICAgIHNlc3Npb24udXNlciA9IHRva2VuLnVzZXIgYXMge1xyXG4gICAgICAgIGlkOiBzdHJpbmc7XHJcbiAgICAgIH0gJiBEZWZhdWx0U2Vzc2lvbltcInVzZXJcIl07XHJcbiAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKG9wdGlvbnMpO1xyXG5cclxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFscyIsImJjcnlwdCIsImNvbm5lY3RUb0RhdGFiYXNlIiwiQWRtaW4iLCJvcHRpb25zIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwibWF4QWdlIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsImNvbnNvbGUiLCJsb2ciLCJhZG1pbiIsImZpbmRPbmUiLCJlcnJvciIsIkVycm9yIiwibWVzc2FnZSIsInN0YXR1cyIsImlzVmFsaWQiLCJjb21wYXJlIiwiaWQiLCJfaWQiLCJjdXN0b21FcnJvciIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidXNlciIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./models/admin.ts":
/*!*************************!*\
  !*** ./models/admin.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// const adminSchema: Schema<AdminMethods>\nconst adminSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    fullName: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nconst Admin = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.Admin || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Admin\", adminSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Admin);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvYWRtaW4udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtFO0FBWWxFLDBDQUEwQztBQUUxQyxNQUFNRyxjQUFvQyxJQUFJSCw0Q0FBTUEsQ0FDbEQ7SUFDRUksVUFBVTtRQUNSQyxNQUFNQztRQUNOQyxVQUFVO0lBQ1o7SUFDQUMsT0FBTztRQUNMSCxNQUFNQztRQUNOQyxVQUFVO1FBQ1ZFLFFBQVE7SUFDVjtJQUNBQyxVQUFVO1FBQ1JMLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtBQUNGLEdBQ0E7SUFBRUksWUFBWTtBQUFLO0FBR3JCLE1BQU1DLFFBQ0pWLDRDQUFNQSxFQUFFVSxTQUFTWCwrQ0FBS0EsQ0FBMkIsU0FBU0U7QUFFNUQsaUVBQWVTLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXN0cmFjay1hZG1pbi8uL21vZGVscy9hZG1pbi50cz82MThlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGVsLCBTY2hlbWEsIG1vZGVsLCBEb2N1bWVudCwgbW9kZWxzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5leHBvcnQgdHlwZSBBZG1pblQgPSB7XHJcbiAgZnVsbE5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBBZG1pbk1ldGhvZHMgPSBBZG1pblQgJiBEb2N1bWVudDtcclxuXHJcbmV4cG9ydCB0eXBlIEFkbWluTW9kZWwgPSBNb2RlbDxBZG1pbk1ldGhvZHM+O1xyXG5cclxuLy8gY29uc3QgYWRtaW5TY2hlbWE6IFNjaGVtYTxBZG1pbk1ldGhvZHM+XHJcblxyXG5jb25zdCBhZG1pblNjaGVtYTogU2NoZW1hPEFkbWluTWV0aG9kcz4gPSBuZXcgU2NoZW1hKFxyXG4gIHtcclxuICAgIGZ1bGxOYW1lOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cclxuKTtcclxuXHJcbmNvbnN0IEFkbWluID1cclxuICBtb2RlbHM/LkFkbWluIHx8IG1vZGVsPEFkbWluTWV0aG9kcywgQWRtaW5Nb2RlbD4oXCJBZG1pblwiLCBhZG1pblNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbjtcclxuIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwiYWRtaW5TY2hlbWEiLCJmdWxsTmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJ0aW1lc3RhbXBzIiwiQWRtaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/admin.ts\n");

/***/ }),

/***/ "(rsc)/./utils/database.ts":
/*!***************************!*\
  !*** ./utils/database.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false; // this is a global variable that will be used to check if the user is connected to the database or not\nconst connectToDatabase = async ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", true);\n    if (isConnected) {\n        console.log(\"using existing database connection\");\n        return;\n    }\n    // Connect to our database\n    try {\n        const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n            dbName: \"kudizen\"\n        });\n        isConnected = true;\n        console.log(\"new database connection\");\n    } catch (error) {\n        console.log(\"error connecting to database\");\n        console.log(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9kYXRhYmFzZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsSUFBSUMsY0FBYyxPQUFPLHVHQUF1RztBQUV6SCxNQUFNQyxvQkFBb0I7SUFDL0JGLG1EQUFZLENBQUMsZUFBZTtJQUU1QixJQUFJQyxhQUFhO1FBQ2ZHLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0Y7SUFFQSwwQkFBMEI7SUFFMUIsSUFBSTtRQUNGLE1BQU1DLEtBQUssTUFBTU4sdURBQWdCLENBQUNRLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFZO1lBQ25FQyxRQUFRO1FBSVY7UUFFQVYsY0FBYztRQUNkRyxRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9PLE9BQU87UUFDZFIsUUFBUUMsR0FBRyxDQUFDO1FBQ1pELFFBQVFDLEdBQUcsQ0FBQ087SUFDZDtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXN0cmFjay1hZG1pbi8uL3V0aWxzL2RhdGFiYXNlLnRzPzZhZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxubGV0IGlzQ29ubmVjdGVkID0gZmFsc2U7IC8vIHRoaXMgaXMgYSBnbG9iYWwgdmFyaWFibGUgdGhhdCB3aWxsIGJlIHVzZWQgdG8gY2hlY2sgaWYgdGhlIHVzZXIgaXMgY29ubmVjdGVkIHRvIHRoZSBkYXRhYmFzZSBvciBub3RcclxuXHJcbmV4cG9ydCBjb25zdCBjb25uZWN0VG9EYXRhYmFzZSA9IGFzeW5jICgpID0+IHtcclxuICBtb25nb29zZS5zZXQoXCJzdHJpY3RRdWVyeVwiLCB0cnVlKTtcclxuXHJcbiAgaWYgKGlzQ29ubmVjdGVkKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInVzaW5nIGV4aXN0aW5nIGRhdGFiYXNlIGNvbm5lY3Rpb25cIik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBDb25uZWN0IHRvIG91ciBkYXRhYmFzZVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIGFzIHN0cmluZywge1xyXG4gICAgICBkYk5hbWU6IFwia3VkaXplblwiLFxyXG5cclxuICAgICAgLy8gICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgIC8vICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaXNDb25uZWN0ZWQgPSB0cnVlO1xyXG4gICAgY29uc29sZS5sb2coXCJuZXcgZGF0YWJhc2UgY29ubmVjdGlvblwiKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coXCJlcnJvciBjb25uZWN0aW5nIHRvIGRhdGFiYXNlXCIpO1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiaXNDb25uZWN0ZWQiLCJjb25uZWN0VG9EYXRhYmFzZSIsInNldCIsImNvbnNvbGUiLCJsb2ciLCJkYiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJkYk5hbWUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./utils/database.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fbriggiz%2FDesktop%2Ffastrack-admin%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbriggiz%2FDesktop%2Ffastrack-admin&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();