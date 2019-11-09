webpackHotUpdate("main",{

/***/ "./src/components/ProfileDetail.js":
/*!*****************************************!*\
  !*** ./src/components/ProfileDetail.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/freddy/Documents/code/homework/10-1-final-project-fthomp8044/frontend/static/src/components/ProfileDetail.js";


axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.xsrfCookieName = 'csrftoken';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.xsrfHeaderName = 'X-CSRFToken';

class ProfileDetail extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/v1/profile/".concat(this.props.match.params.id, "/")).then(res => {
      console.log('res', res.data);
      this.setState(res.data);
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: this.state.avatar,
      alt: "profileimage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProfileDetail);

/***/ })

})
//# sourceMappingURL=main.6a1a21b53d2cd674067b.hot-update.js.map