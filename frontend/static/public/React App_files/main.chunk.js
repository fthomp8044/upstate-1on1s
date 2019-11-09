(this["webpackJsonpstatic"] = this["webpackJsonpstatic"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/App.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/App.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".card-list {\n  width:80vw;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 20px;\n}\n\n/* card page */\n\n.card-container {\n  display: flex;\n  flex-direction: column;\n  background-color: #676767;\n  border: 2px solid red;\n  border-radius: 5px;\n  padding: 20%;\n  cursor: pointer;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transform: translateZ(0);\n  transition: transform 0.25s ease-out;\n}\n\n.card-container:hover {\n  transform: scale(1.05);\n}\n\n#dropdown-item-button {\n\n}\n.Card-list {\n  margin-top: 10%;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-color: red;\n}\n\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/components/App.css":
/*!********************************!*\
  !*** ./src/components/App.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/App.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/App.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/freddy/Documents/code/homework/10-1-final-project-fthomp8044/frontend/static/src/components/Card.js";
 // handleClick(e) {
//   console.log('clicked athlete', this);
// }

const Card = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "card-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: props.profile.avatar,
  alt: "profileimage",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "card-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, props.profile.first_name, " ", props.profile.last_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Position:", props.profile.position), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Specialty:", props.profile.specialty), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "/profile/detail/".concat(props.profile.id, "/"),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "Book A Lesson")));

/***/ }),

/***/ "./src/components/CardList.js":
/*!************************************!*\
  !*** ./src/components/CardList.js ***!
  \************************************/
/*! exports provided: CardList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardList", function() { return CardList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./src/components/Card.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/components/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/freddy/Documents/code/homework/10-1-final-project-fthomp8044/frontend/static/src/components/CardList.js";



const CardList = props => {
  console.log('props', props);
  let profiles = props.profiles.map(profile => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    key: profile.id,
    profile: profile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, profiles); // <div className='card-list'>
  //   let profiles = props.profiles.map(profile => (
  //   <ul>
  //     <Card key={profile.id} profile={profile} /><img src={profile.avatar} alt='profileimage'/>
  //     <li key={props.profile.id}><p>{props.profile.user}</p></li>
  //   </ul>
  //   ))}
  // </div>
};

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/freddy/Documents/code/homework/10-1-final-project-fthomp8044/frontend/static/src/components/Home.js";



class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  logOutUser(e) {
    localStorage.clear();
    this.history.push('/home/');
  }

  render() {
    let appUser = JSON.parse(localStorage.getItem('my-app-user'));
    console.log('here', appUser);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "base-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "nav-bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Welcome ", appUser ? appUser.username : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: "nav-link",
      to: "/home/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Home Page")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: "nav-link",
      to: "/search/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Search")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: "nav-link",
      to: "/profile/new/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Create Profile")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: "nav-link",
      to: "/profile/edit/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Update user")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: "nav-link",
      to: "/login/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Login")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: "nav-link",
      to: "/signup/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Sign Up")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      className: "nav-link",
      to: "/logout",
      onClick: this.logOutUser,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Logout"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "jumbotron centered",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-key fa-6x",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "display-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "1on1s"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "lead",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Train with The Upstates finest!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "btn btn-light btn-lg",
      href: "/signup",
      role: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "btn btn-dark btn-lg",
      href: "/login",
      role: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Login"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/LandingPage.js":
/*!***************************************!*\
  !*** ./src/components/LandingPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "/Users/freddy/Documents/code/homework/10-1-final-project-fthomp8044/frontend/static/src/components/LandingPage.js";



function LandingPage(props) {
  let selectLesson = e => {
    props.history.push("/profile/list/".concat(e.target.value));
  };

  return (// <body id='landing-page-body'>
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
      bg: "light",
      expand: "lg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
      href: "/home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "1on1s"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Toggle, {
      "aria-controls": "basic-navbar-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Collapse, {
      id: "basic-navbar-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
      className: "mr-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
      href: "/home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
      href: "/profile/edit/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
      href: "/profile/list/:lessons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Pick your Athlete"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"], {
      title: "Lessons",
      id: "basic-nav-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
      href: "#action/3.1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
      href: "#action/3.2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Another action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
      href: "#action/3.3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Something"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Divider, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
      href: "#action/3.4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Separated link"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      inline: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"], {
      title: "Profile",
      id: "basic-nav-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
      href: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
      href: "/signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Divider, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
      href: "/logout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "logout"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-lg-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "1on1s"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Train with The Upstates Finest"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownButton"], {
      id: "dropdown-item-button",
      title: "Pick Your Lesson",
      variant: "outline-success",
      className: "btn btn-default btn-lg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
      as: "button",
      onClick: selectLesson,
      value: "pitching",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Pitching"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
      as: "button",
      onClick: selectLesson,
      value: "hitting",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Hitting"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
      as: "button",
      onClick: selectLesson,
      value: "fielding",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Fielding"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
      as: "button",
      onClick: selectLesson,
      value: "fundamentals",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Fundamentals"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
      as: "button",
      onClick: selectLesson,
      value: "Conditioning",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Conditioning Training"))))))) // </body>

  );
}

/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

/***/ }),

/***/ "./src/components/Login.js":
/*!*********************************!*\
  !*** ./src/components/Login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/freddy/Documents/code/homework/10-1-final-project-fthomp8044/frontend/static/src/components/Login.js";


axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.xsrfCookieName = 'csrftoken';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.xsrfHeaderName = 'X-CSRFToken';

class Login extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/rest-auth/login/', this.state).then(res => {
      console.log('res', res.data);
      localStorage.setItem('my-app-user', JSON.stringify(res.data));
      this.props.history.push('/home');
    }).catch(error => {
      console.log(error);
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container mt-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Username"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      id: "username",
      type: "text",
      name: "username",
      value: this.state.username,
      onChange: this.handleChange,
      placeholder: "Enter username",
      required: "required",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      id: "email",
      type: "email",
      name: "email",
      value: this.state.email,
      onChange: this.handleChange,
      placeholder: "Enter email",
      required: "required",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      id: "password",
      type: "password",
      name: "password",
      value: this.state.password,
      onChange: this.handleChange,
      placeholder: "Enter password",
      required: "required",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Login")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

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

/***/ }),

/***/ "./src/components/ProfileEdit.js":
/*!***************************************!*\
  !*** ./src/components/ProfileEdit.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/freddy/Documents/code/homework/10-1-final-project-fthomp8044/frontend/static/src/components/ProfileEdit.js";


axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.xsrfCookieName = 'csrftoken';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.xsrfHeaderName = 'X-CSRFToken';

class ProfileEdit extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      // user: '', //new
      avatar: null,
      first_name: '',
      last_name: '',
      preview: '',
      location: '',
      bats: '',
      graduation_date: '',
      throws: '',
      weight: '',
      school: '',
      position: '',
      is_professional: '',
      draft_round: '',
      draft_pick: '',
      stat_link: '',
      isEditing: false,
      isDeleteting: false
    }; // this.toggleEdit = this.toggleEdit.bind(this);
    // this.saveProfile = this.saveProfile.bind(this);
    // this.deleteProfile = this.deleteProfile.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/v1/user/profile/").then(res => {
      // console.log('res', res.data);
      this.setState(res.data);
    }).catch(error => {
      console.log(error);
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/v1/rest-auth/user/").then(res => {
      console.log('res', res.data);
      this.setState(res.data);
    }).catch(error => {
      console.log(error);
    });
  } // deleteProfile(e) {
  //   let myuserId= localStorage.getItem('user_id');
  //
  //   axios.delete(`/api/v1/user/profile/${myuserId}`, this.state)
  //   .then(res => {
  //       console.log('res', res.data)
  //       // localStorage.getItem('my-app-user', JSON.stringify(res.data)
  //       this.props.history.push('/home')
  //         localStorage.clear();
  //   })
  //   .catch(error => {
  //       console.log(error);
  //   });
  // }


  handleImageChange(e) {
    // The selected files' are returned by the element's HTMLInputElement.files property — this returns a FileList object, which contains a list of File objects
    let file = e.target.files[0]; // we'll use this value when we save the image (see _saveImage)

    this.setState({
      avatar: file
    }); // The FileReader object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read.

    let reader = new FileReader(); // A handler for the loadend event. This event is triggered each time the reading operation is completed (either in success or failure).

    reader.onloadend = () => {
      this.setState({
        preview: reader.result
      });
    }; // Starts reading the contents of the specified Blob, once finished, the result attribute contains a data: URL representing the file's data.


    reader.readAsDataURL(file);
  }

  handleSubmit(e) {
    e.preventDefault();
    let myuserId = localStorage.getItem('user_id');
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/v1/user/profile/".concat(myuserId), this.state).then(res => {
      console.log('res', res.data);
      localStorage.setItem('my-app-user', JSON.stringify(res.data) //getItem instead of setItem?
      ); // this.props.history.push('/')
    }).catch(error => {
      console.log(error);
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-area",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      styles: "clear:both",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "avatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, "Profile Picture:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "avatar",
      type: "file",
      onChange: this.handleImageChange,
      className: "form-control",
      placeholder: "Image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }), " ", this.state.avatar ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: this.state.avatar,
      alt: "preview",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "is_professional",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, "Professional Athlete"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      name: "Professional",
      value: this.state.is_professional,
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "professional",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "null",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "Select an Option"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, "Professional Athlete"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, "Student Athlete"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "first_name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, "First name:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "first_name",
      value: this.state.first_name,
      type: "text",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "First Name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "last_name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, "Last name:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "last_name",
      value: this.state.last_name,
      type: "text",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "Last Name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "location",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, "Location:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "location",
      value: this.state.location,
      type: "text",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "location",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "bats",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, "Bats:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "bats",
      value: this.state.bats,
      type: "text",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "Bats",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "throws",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, "Throws:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "throws",
      value: this.state.throws,
      type: "text",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "Throws",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "weight",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, "Weight:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "weight",
      value: this.state.weight,
      type: "number",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "Weight",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "graduation_date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, "Graduation Year:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "graduation_date",
      value: this.state.graduation_date,
      type: "number",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "Year",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "school",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, "School:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "school",
      value: this.state.school,
      type: "text",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "School",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "position",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, "Position:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "position",
      value: this.state.position,
      type: "text",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "Position",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "bio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, "draft_round:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "bio",
      value: this.state.draft_round,
      type: "number",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "draft_round",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "bio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, "draft_pick:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "draft_pick",
      value: this.state.draft_pick,
      type: "number",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "draft_pick",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "bio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, "stat link:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "stat_link",
      value: this.state.stat_link,
      type: "url",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "stat_link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "bio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, "Bio:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "bio",
      value: this.state.bio,
      type: "text",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "Bio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-primary pull-right",
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, "Save"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-primary pull-right",
      onClick: this.deleteProfile,
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, "Delete"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProfileEdit);

/***/ }),

/***/ "./src/components/ProfileForm.js":
/*!***************************************!*\
  !*** ./src/components/ProfileForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/freddy/Documents/code/homework/10-1-final-project-fthomp8044/frontend/static/src/components/ProfileForm.js";


axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.xsrfCookieName = 'csrftoken';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.xsrfHeaderName = 'X-CSRFToken';

class ProfileForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      // user: '', //new
      avatar: null,
      first_name: '',
      last_name: '',
      preview: '',
      location: '',
      bats: '',
      graduation_date: '',
      throws: '',
      weight: '',
      school: '',
      position: '',
      is_professional: '',
      draft_round: '',
      draft_pick: '',
      stat_link: '',
      isEditing: false,
      isDeleteting: false
    };
    this.toggleEdit = this.toggleEdit.bind(this); // this.saveProfile = this.saveProfile.bind(this);

    this.deleteProfile = this.deleteProfile.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  toggleEdit() {
    this.setState(state => ({
      isEditing: !state.isEditing
    }));
  } //
  // saveProfile() {
  //   console.log('here i am')
  //   // you need to add all the fields that are saved to state to a FormData object
  //   // pass the FormData object to the server
  //
  //   let formData = new FormData();
  //
  //   axios.post('/api/v1/profile/', formData)
  //   .then(res => {
  //     console.log(res)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   });
  // }


  deleteProfile() {
    this.setState(state => ({
      isDeleteting: !state.isDeleteting
    }));
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log({
      [e.target.name]: e.target.value
    });
  }

  handleImageChange(e) {
    // The selected files' are returned by the element's HTMLInputElement.files property — this returns a FileList object, which contains a list of File objects
    let file = e.target.files[0]; // we'll use this value when we save the image (see _saveImage)

    this.setState({
      avatar: file
    }); // The FileReader object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read.

    let reader = new FileReader(); // A handler for the loadend event. This event is triggered each time the reading operation is completed (either in success or failure).

    reader.onloadend = () => {
      this.setState({
        preview: reader.result
      });
    }; // Starts reading the contents of the specified Blob, once finished, the result attribute contains a data: URL representing the file's data.


    reader.readAsDataURL(file);
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(); // formData.append('users', this.state.users)

    formData.append('is_professional', this.state.is_professional);
    formData.append('draft_round', this.state.draft_round);
    formData.append('draft_pick', this.state.draft_pick);
    formData.append('stat_link', this.state.stat_link);
    formData.append('location', this.state.location);
    formData.append('graduation_date', this.state.graduation_date);
    formData.append('bats', this.state.bats);
    formData.append('throws', this.state.throws);
    formData.append('weight', this.state.weight);
    formData.append('school', this.state.school);
    formData.append('position', this.state.position); // formData.append('first name', this.state.first_name);
    // formData.append('last name', this.state.last_name);

    formData.append('avatar', this.state.avatar);
    formData.append('bio', this.state.bio);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/profile/', formData, {
      headers: {
        'content-type': 'multipart/form-data',
        'Authoriztion': "Token ".concat(JSON.parse(localStorage.getItem('my-app-user')).token)
      }
    }).then(res => {
      console.log('returned data:', res);
      console.log(res.data);
      localStorage.setItem('my-app-user', JSON.stringify(res.data));
      this.props.history.push('/home'); // let user  = [...this.state.user];
      // user.push(res.data);
      // this.setState({user});
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-area",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      styles: "clear:both",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "avatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, "Profile Picture:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "avatar",
      type: "file",
      onChange: this.handleImageChange,
      className: "form-control",
      placeholder: "Image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }), " ", this.state.avatar ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: this.state.preview,
      alt: "preview",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "is_professional",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, "Professional Athlete"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      name: "Professional",
      value: this.state.is_professional,
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "professional",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "null",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, "Select an Option"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, "Professional Athlete"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, "Student Athlete"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "first_name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, "First name:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "first_name",
      value: this.state.first_name,
      type: "text",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "First Name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "last_name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, "Last name:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "last_name",
      value: this.state.last_name,
      type: "text",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "Last Name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "location",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, "Location:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "location",
      value: this.state.location,
      type: "text",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "location",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "bats",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, "Bats:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "bats",
      value: this.state.bats,
      type: "text",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "Bats",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "throws",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, "Throws:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "throws",
      value: this.state.throws,
      type: "text",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "Throws",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "weight",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, "Weight:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "weight",
      value: this.state.weight,
      type: "number",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "Weight",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "graduation_date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, "Graduation Year:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "graduation_date",
      value: this.state.graduation_date,
      type: "number",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "Year",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "school",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, "School:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "school",
      value: this.state.school,
      type: "text",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "School",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "position",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, "Position:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "position",
      value: this.state.position,
      type: "text",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "Position",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "draft_round",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, "draft_round:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "draft_round",
      value: this.state.draft_round,
      type: "number",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "draft_round",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "draft_round",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, "draft_pick:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "draft_pick",
      value: this.state.draft_pick,
      type: "number",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "draft_pick",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "stat_link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, "stat link:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "stat_link",
      value: this.state.stat_link,
      type: "url",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "stat_link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "bio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, "Bio:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "bio",
      value: this.state.bio,
      type: "text",
      onChange: this.handleChange,
      className: "form-control",
      placeholder: "Bio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-primary pull-right",
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, "Save"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProfileForm);

/***/ }),

/***/ "./src/components/ProfileList.js":
/*!***************************************!*\
  !*** ./src/components/ProfileList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CardList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardList */ "./src/components/CardList.js");
var _jsxFileName = "/Users/freddy/Documents/code/homework/10-1-final-project-fthomp8044/frontend/static/src/components/ProfileList.js";



axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.xsrfCookieName = 'csrftoken';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.xsrfHeaderName = 'X-CSRFToken';

class ProfileList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      lessons: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let selection = this.props.match.params.lesson.toUpperCase();
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/v1/profile/".concat(selection, "/")).then(res => {
      console.log('res', res.data);
      this.setState({
        profiles: res.data
      });
    }).catch(error => {
      console.log(error);
    });
  }

  handleClick(e) {
    console.log('athlete clicked');
  } // cardlist component  is repsonsible of creating the users. not how it looks.


  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "card-list-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Pick Your Athlete"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardList__WEBPACK_IMPORTED_MODULE_2__["CardList"], {
      name: "card-list",
      profiles: this.state.profiles,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProfileList);

/***/ }),

/***/ "./src/components/SearchLessons.js":
/*!*****************************************!*\
  !*** ./src/components/SearchLessons.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/freddy/Documents/code/homework/10-1-final-project-fthomp8044/frontend/static/src/components/SearchLessons.js";


axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.xsrfCookieName = 'csrftoken';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.xsrfHeaderName = 'X-CSRFToken';

class SearchLesson extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      query: "",
      data: [],
      filteredData: []
    };

    this.handleInputChange = event => {
      const query = event.target.value;
      this.setState(prevState => {
        const filteredData = prevState.data.filter(element => {
          return element.name.toLowerCase().includes(query.toLowerCase());
        });
        return {
          query,
          filteredData
        };
      });
    };

    this.getData = () => {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/profile/', {
        headers: {
          'content-type': 'multipart/form-data',
          'Authoriztion': "Token ".concat(JSON.parse(localStorage.getItem('my-app-user')).token)
        }
      }).then(response => response.json()).then(data => {
        const query = this.state.query;
        const filteredData = data.filter(element => {
          return element.name.toLowerCase().includes(query.toLowerCase());
        });
        this.setState({
          data,
          filteredData
        });
      });
    };
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "searchForm ui segment",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "ui form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Search Lessons:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      placeholder: "Search for...",
      value: this.state.query,
      onChange: this.handleInputChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, this.state.filteredData.map(i => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, i.name))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SearchLesson);

/***/ }),

/***/ "./src/components/Signup.js":
/*!**********************************!*\
  !*** ./src/components/Signup.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/freddy/Documents/code/homework/10-1-final-project-fthomp8044/frontend/static/src/components/Signup.js";


axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.xsrfCookieName = 'csrftoken';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.xsrfHeaderName = 'X-CSRFToken';

class Signup extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/v1/rest-auth/registration/', this.state).then(res => {
      console.log('res', res.data);
      localStorage.setItem('my-app-user', JSON.stringify(res.data));
      this.props.history.push('/');
    }).catch(error => {
      console.log(error);
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container mt-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Username"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      id: "username",
      type: "text",
      name: "username",
      value: this.state.username,
      onChange: this.handleChange,
      placeholder: "Enter username",
      required: "required",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      id: "email",
      type: "email",
      name: "email",
      value: this.state.email,
      onChange: this.handleChange,
      placeholder: "Enter email",
      required: "required",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "Password1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      id: "password1",
      type: "password",
      name: "password1",
      value: this.state.password,
      onChange: this.handleChange,
      placeholder: "Enter password",
      required: "required",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "Password2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      id: "password2",
      type: "password",
      name: "password2",
      value: this.state.password,
      onChange: this.handleChange,
      placeholder: "Enter password",
      required: "required",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "Sign Up")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Signup */ "./src/components/Signup.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Home */ "./src/components/Home.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Login */ "./src/components/Login.js");
/* harmony import */ var _components_ProfileList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ProfileList */ "./src/components/ProfileList.js");
/* harmony import */ var _components_ProfileForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ProfileForm */ "./src/components/ProfileForm.js");
/* harmony import */ var _components_SearchLessons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/SearchLessons */ "./src/components/SearchLessons.js");
/* harmony import */ var _components_LandingPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/LandingPage */ "./src/components/LandingPage.js");
/* harmony import */ var _components_ProfileEdit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ProfileEdit */ "./src/components/ProfileEdit.js");
/* harmony import */ var _components_ProfileDetail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ProfileDetail */ "./src/components/ProfileDetail.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/freddy/Documents/code/homework/10-1-final-project-fthomp8044/frontend/static/src/index.js";












 // import SearchBar from './components/Search';



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Switch"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
  path: "/profile/detail/:id/",
  component: _components_ProfileDetail__WEBPACK_IMPORTED_MODULE_12__["default"],
  isAuthed: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
  path: "/profile/edit/",
  component: _components_ProfileEdit__WEBPACK_IMPORTED_MODULE_11__["default"],
  isAuthed: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
  path: "/search/",
  component: _components_SearchLessons__WEBPACK_IMPORTED_MODULE_9__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
  path: "/profile/list/:lesson",
  component: _components_ProfileList__WEBPACK_IMPORTED_MODULE_7__["default"],
  isAuthed: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
  path: "/profile/new/",
  component: _components_ProfileForm__WEBPACK_IMPORTED_MODULE_8__["default"],
  isAuthed: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
  path: "/signup/",
  component: _components_Signup__WEBPACK_IMPORTED_MODULE_4__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
  path: "/login/",
  component: _components_Login__WEBPACK_IMPORTED_MODULE_6__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
  path: "/home/",
  render: props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, props, {
    isAuthed: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  })),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
  exact: true,
  path: "/",
  component: _components_LandingPage__WEBPACK_IMPORTED_MODULE_10__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}))), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_13__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/freddy/Documents/code/homework/10-1-final-project-fthomp8044/frontend/static/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/freddy/Documents/code/homework/10-1-final-project-fthomp8044/frontend/static/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map