/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\xampp\\htdocs\\3_12_2020\\resources\\js\\app.js: Unexpected token (145:0)\n\n\u001b[0m \u001b[90m 143 | \u001b[39m            \u001b[90m//     $('.dz-preview:first').hide();\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 144 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 145 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 146 | \u001b[39m            }\u001b[0m\n\u001b[0m \u001b[90m 147 | \u001b[39m            console\u001b[33m.\u001b[39mlog(myDropZone\u001b[33m.\u001b[39mfile\u001b[33m.\u001b[39mlength)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 148 | \u001b[39m\u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\u001b[0m\n    at Parser.raise (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:7012:17)\n    at Parser.unexpected (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:8405:16)\n    at Parser.parseExprAtom (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:9661:20)\n    at Parser.parseExprSubscripts (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:9237:23)\n    at Parser.parseMaybeUnary (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:9217:21)\n    at Parser.parseExprOps (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:9083:23)\n    at Parser.parseMaybeConditional (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:9056:23)\n    at Parser.parseMaybeAssign (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:9015:21)\n    at Parser.parseExpression (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:8965:23)\n    at Parser.parseStatementContent (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:10819:23)\n    at Parser.parseStatement (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:10690:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:11266:25)\n    at Parser.parseBlockBody (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:11253:10)\n    at Parser.parseBlock (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:11237:10)\n    at Parser.parseFunctionBody (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:10256:24)\n    at Parser.parseFunctionBodyAndFinish (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:10226:10)\n    at withTopicForbiddingContext (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:11398:12)\n    at Parser.withTopicForbiddingContext (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:10565:14)\n    at Parser.parseFunction (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:11397:10)\n    at Parser.parseFunctionExpression (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:9697:17)\n    at Parser.parseExprAtom (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:9610:21)\n    at Parser.parseExprSubscripts (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:9237:23)\n    at Parser.parseMaybeUnary (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:9217:21)\n    at Parser.parseExprOps (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:9083:23)\n    at Parser.parseMaybeConditional (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:9056:23)\n    at Parser.parseMaybeAssign (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:9015:21)\n    at Parser.parseExprListItem (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:10331:18)\n    at Parser.parseCallExpressionArguments (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:9434:22)\n    at Parser.parseSubscript (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:9342:29)\n    at Parser.parseSubscripts (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:9258:19)\n    at Parser.parseExprSubscripts (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:9247:17)\n    at Parser.parseMaybeUnary (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:9217:21)\n    at Parser.parseExprOps (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:9083:23)\n    at Parser.parseMaybeConditional (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:9056:23)\n    at Parser.parseMaybeAssign (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:9015:21)\n    at Parser.parseExpression (C:\\xampp\\htdocs\\3_12_2020\\node_modules\\@babel\\parser\\lib\\index.js:8965:23)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\3_12_2020\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\3_12_2020\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });