module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ "lodash/get");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/tobias/dev/football-scores/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Scores = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h1", {
    className: "jsx-4103031820",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Latest Bundesliga Scores"), __jsx("ul", {
    className: "jsx-4103031820",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, props.matches.map(match => {
    const pointsTeam1 = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(match, "MatchResults[0].PointsTeam1", "-");
    const pointsTeam2 = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(match, "MatchResults[0].PointsTeam2", "-");
    return __jsx("li", {
      className: "jsx-4103031820",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    }, __jsx("div", {
      className: "jsx-4103031820" + " " + "score-line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }, __jsx("span", {
      className: "jsx-4103031820" + " " + "home-team",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }, match.Team1.TeamName), __jsx("img", {
      src: match.Team1.TeamIconUrl,
      className: "jsx-4103031820",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }), __jsx("span", {
      className: "jsx-4103031820",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    }, pointsTeam1, ":", pointsTeam2), __jsx("img", {
      src: match.Team2.TeamIconUrl,
      className: "jsx-4103031820",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    }), __jsx("span", {
      className: "jsx-4103031820",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: undefined
    }, match.Team2.TeamName)));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3885001861",
    __self: undefined
  }, "body{font-family:sans;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvYmlhcy9kZXYvZm9vdGJhbGwtc2NvcmVzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCeUIsQUFHNEIsaUJBQ25CIiwiZmlsZSI6Ii9ob21lL3RvYmlhcy9kZXYvZm9vdGJhbGwtc2NvcmVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCBnZXQgZnJvbSBcImxvZGFzaC9nZXRcIjtcblxuY29uc3QgU2NvcmVzID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+TGF0ZXN0IEJ1bmRlc2xpZ2EgU2NvcmVzPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAge3Byb3BzLm1hdGNoZXMubWFwKG1hdGNoID0+IHtcbiAgICAgICAgICBjb25zdCBwb2ludHNUZWFtMSA9IGdldChtYXRjaCwgXCJNYXRjaFJlc3VsdHNbMF0uUG9pbnRzVGVhbTFcIiwgXCItXCIpO1xuICAgICAgICAgIGNvbnN0IHBvaW50c1RlYW0yID0gZ2V0KG1hdGNoLCBcIk1hdGNoUmVzdWx0c1swXS5Qb2ludHNUZWFtMlwiLCBcIi1cIik7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZS1saW5lXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaG9tZS10ZWFtXCI+e21hdGNoLlRlYW0xLlRlYW1OYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17bWF0Y2guVGVhbTEuVGVhbUljb25Vcmx9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICB7cG9pbnRzVGVhbTF9Ontwb2ludHNUZWFtMn1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e21hdGNoLlRlYW0yLlRlYW1JY29uVXJsfSAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPnttYXRjaC5UZWFtMi5UZWFtTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBmb250LWZhbWlseTogc2FucztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNjb3JlLWxpbmUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciA0MnB4IDMwcHggMC4wMWZyIDAuMmZyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpOm50aC1vZi10eXBlKG9kZCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEuM2VtO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMS4zZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ob21lLXRlYW0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NvcmVzO1xuXG5TY29yZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly93d3cub3BlbmxpZ2FkYi5kZS9hcGkvZ2V0bWF0Y2hkYXRhL2JsMVwiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBtYXRjaGVzOiBkYXRhXG4gIH07XG59O1xuIl19 */\n/*@ sourceURL=/home/tobias/dev/football-scores/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1388253856",
    __self: undefined
  }, "ul.jsx-4103031820{padding:0;}li.jsx-4103031820{list-style:none;}.score-line.jsx-4103031820{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:5px 0;display:grid;grid-template-columns:0.2fr 42px 30px 0.01fr 0.2fr;}li.jsx-4103031820:nth-of-type(odd){background-color:#eee;}img.jsx-4103031820{margin:0 10px;max-width:1.3em;max-height:1.3em;}.home-team.jsx-4103031820{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvYmlhcy9kZXYvZm9vdGJhbGwtc2NvcmVzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDUyxBQUd1QixBQUlNLEFBSUgsQUFPUyxBQUlSLEFBS0QsVUF2QmYsSUFtQmtCLEVBZmxCLE1BV0EsUUFLbUIsaUJBQ25CLDJCQWJlLEFBZ0JjLGFBZmQsYUFDc0MsbURBQ3JELGdCQWNBIiwiZmlsZSI6Ii9ob21lL3RvYmlhcy9kZXYvZm9vdGJhbGwtc2NvcmVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCBnZXQgZnJvbSBcImxvZGFzaC9nZXRcIjtcblxuY29uc3QgU2NvcmVzID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+TGF0ZXN0IEJ1bmRlc2xpZ2EgU2NvcmVzPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAge3Byb3BzLm1hdGNoZXMubWFwKG1hdGNoID0+IHtcbiAgICAgICAgICBjb25zdCBwb2ludHNUZWFtMSA9IGdldChtYXRjaCwgXCJNYXRjaFJlc3VsdHNbMF0uUG9pbnRzVGVhbTFcIiwgXCItXCIpO1xuICAgICAgICAgIGNvbnN0IHBvaW50c1RlYW0yID0gZ2V0KG1hdGNoLCBcIk1hdGNoUmVzdWx0c1swXS5Qb2ludHNUZWFtMlwiLCBcIi1cIik7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZS1saW5lXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaG9tZS10ZWFtXCI+e21hdGNoLlRlYW0xLlRlYW1OYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17bWF0Y2guVGVhbTEuVGVhbUljb25Vcmx9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICB7cG9pbnRzVGVhbTF9Ontwb2ludHNUZWFtMn1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e21hdGNoLlRlYW0yLlRlYW1JY29uVXJsfSAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPnttYXRjaC5UZWFtMi5UZWFtTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBmb250LWZhbWlseTogc2FucztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNjb3JlLWxpbmUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciA0MnB4IDMwcHggMC4wMWZyIDAuMmZyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpOm50aC1vZi10eXBlKG9kZCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEuM2VtO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMS4zZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ob21lLXRlYW0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NvcmVzO1xuXG5TY29yZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly93d3cub3BlbmxpZ2FkYi5kZS9hcGkvZ2V0bWF0Y2hkYXRhL2JsMVwiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBtYXRjaGVzOiBkYXRhXG4gIH07XG59O1xuIl19 */\n/*@ sourceURL=/home/tobias/dev/football-scores/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Scores);

Scores.getInitialProps = async function () {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("https://www.openligadb.de/api/getmatchdata/bl1");
  const data = await res.json();
  return {
    matches: data
  };
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tobias/dev/football-scores/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "lodash/get":
/*!*****************************!*\
  !*** external "lodash/get" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map