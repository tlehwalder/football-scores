webpackHotUpdate("static/development/pages/scores.js",{

/***/ "./pages/scores.js":
/*!*************************!*\
  !*** ./pages/scores.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/home/tobias/dev/football-scores/pages/scores.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var Scores = function Scores(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("h1", {
    className: "jsx-4103031820",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Latest Bundesliga Scores"), __jsx("ul", {
    className: "jsx-4103031820",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.matches.map(function (match) {
    var pointsTeam1 = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(match, "MatchResults[0].PointsTeam1", "-");
    var pointsTeam2 = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(match, "MatchResults[0].PointsTeam2", "-");
    return __jsx("li", {
      className: "jsx-4103031820",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-4103031820" + " " + "score-line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-4103031820" + " " + "home-team",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, match.Team1.TeamName), __jsx("img", {
      src: match.Team1.TeamIconUrl,
      className: "jsx-4103031820",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-4103031820",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, pointsTeam1, ":", pointsTeam2), __jsx("img", {
      src: match.Team2.TeamIconUrl,
      className: "jsx-4103031820",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-4103031820",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, match.Team2.TeamName)));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3885001861",
    __self: this
  }, "body{font-family:sans;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvYmlhcy9kZXYvZm9vdGJhbGwtc2NvcmVzL3BhZ2VzL3Njb3Jlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQnlCLEFBRzRCLGlCQUNuQiIsImZpbGUiOiIvaG9tZS90b2JpYXMvZGV2L2Zvb3RiYWxsLXNjb3Jlcy9wYWdlcy9zY29yZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IGdldCBmcm9tIFwibG9kYXNoL2dldFwiO1xuXG5jb25zdCBTY29yZXMgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5MYXRlc3QgQnVuZGVzbGlnYSBTY29yZXM8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICB7cHJvcHMubWF0Y2hlcy5tYXAobWF0Y2ggPT4ge1xuICAgICAgICAgIGNvbnN0IHBvaW50c1RlYW0xID0gZ2V0KG1hdGNoLCBcIk1hdGNoUmVzdWx0c1swXS5Qb2ludHNUZWFtMVwiLCBcIi1cIik7XG4gICAgICAgICAgY29uc3QgcG9pbnRzVGVhbTIgPSBnZXQobWF0Y2gsIFwiTWF0Y2hSZXN1bHRzWzBdLlBvaW50c1RlYW0yXCIsIFwiLVwiKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlLWxpbmVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJob21lLXRlYW1cIj57bWF0Y2guVGVhbTEuVGVhbU5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXttYXRjaC5UZWFtMS5UZWFtSWNvblVybH0gLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIHtwb2ludHNUZWFtMX06e3BvaW50c1RlYW0yfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17bWF0Y2guVGVhbTIuVGVhbUljb25Vcmx9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+e21hdGNoLlRlYW0yLlRlYW1OYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2NvcmUtbGluZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMmZyIDQycHggMzBweCAwLjAxZnIgMC4yZnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGk6bnRoLW9mLXR5cGUob2RkKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMS4zZW07XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxLjNlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhvbWUtdGVhbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY29yZXM7XG5cblNjb3Jlcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3d3dy5vcGVubGlnYWRiLmRlL2FwaS9nZXRtYXRjaGRhdGEvYmwxXCIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIG1hdGNoZXM6IGRhdGFcbiAgfTtcbn07XG4iXX0= */\n/*@ sourceURL=/home/tobias/dev/football-scores/pages/scores.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1388253856",
    __self: this
  }, "ul.jsx-4103031820{padding:0;}li.jsx-4103031820{list-style:none;}.score-line.jsx-4103031820{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:5px 0;display:grid;grid-template-columns:0.2fr 42px 30px 0.01fr 0.2fr;}li.jsx-4103031820:nth-of-type(odd){background-color:#eee;}img.jsx-4103031820{margin:0 10px;max-width:1.3em;max-height:1.3em;}.home-team.jsx-4103031820{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvYmlhcy9kZXYvZm9vdGJhbGwtc2NvcmVzL3BhZ2VzL3Njb3Jlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ1MsQUFHdUIsQUFJTSxBQUlILEFBT1MsQUFJUixBQUtELFVBdkJmLElBbUJrQixFQWZsQixNQVdBLFFBS21CLGlCQUNuQiwyQkFiZSxBQWdCYyxhQWZkLGFBQ3NDLG1EQUNyRCxnQkFjQSIsImZpbGUiOiIvaG9tZS90b2JpYXMvZGV2L2Zvb3RiYWxsLXNjb3Jlcy9wYWdlcy9zY29yZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IGdldCBmcm9tIFwibG9kYXNoL2dldFwiO1xuXG5jb25zdCBTY29yZXMgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5MYXRlc3QgQnVuZGVzbGlnYSBTY29yZXM8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICB7cHJvcHMubWF0Y2hlcy5tYXAobWF0Y2ggPT4ge1xuICAgICAgICAgIGNvbnN0IHBvaW50c1RlYW0xID0gZ2V0KG1hdGNoLCBcIk1hdGNoUmVzdWx0c1swXS5Qb2ludHNUZWFtMVwiLCBcIi1cIik7XG4gICAgICAgICAgY29uc3QgcG9pbnRzVGVhbTIgPSBnZXQobWF0Y2gsIFwiTWF0Y2hSZXN1bHRzWzBdLlBvaW50c1RlYW0yXCIsIFwiLVwiKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlLWxpbmVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJob21lLXRlYW1cIj57bWF0Y2guVGVhbTEuVGVhbU5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXttYXRjaC5UZWFtMS5UZWFtSWNvblVybH0gLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIHtwb2ludHNUZWFtMX06e3BvaW50c1RlYW0yfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17bWF0Y2guVGVhbTIuVGVhbUljb25Vcmx9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+e21hdGNoLlRlYW0yLlRlYW1OYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2NvcmUtbGluZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMmZyIDQycHggMzBweCAwLjAxZnIgMC4yZnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGk6bnRoLW9mLXR5cGUob2RkKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMS4zZW07XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxLjNlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhvbWUtdGVhbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY29yZXM7XG5cblNjb3Jlcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3d3dy5vcGVubGlnYWRiLmRlL2FwaS9nZXRtYXRjaGRhdGEvYmwxXCIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIG1hdGNoZXM6IGRhdGFcbiAgfTtcbn07XG4iXX0= */\n/*@ sourceURL=/home/tobias/dev/football-scores/pages/scores.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Scores);
Scores.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://www.openligadb.de/api/getmatchdata/bl1");

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            matches: data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));

/***/ })

})
//# sourceMappingURL=scores.js.02e5928b48b6ed16779c.hot-update.js.map