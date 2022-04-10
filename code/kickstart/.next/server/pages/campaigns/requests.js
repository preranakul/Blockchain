(function() {
var exports = {};
exports.id = "pages/campaigns/requests";
exports.ids = ["pages/campaigns/requests"];
exports.modules = {

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/campaign */ "./ethereum/campaign.js");

var _jsxFileName = "F:\\programs\\git\\git\\kickstart\\components\\RequestRow.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class RequestRow extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onApprove", async () => {
      const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__.default)(this.props.address);
      const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__.default.eth.getAccounts();
      await campaign.methods.approveRequest(this.props.id).send({
        from: accounts[0]
      });
    });
  }

  render() {
    const {
      Row,
      Cell
    } = semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table;
    const {
      id,
      request,
      approversCount
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: request.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__.default.utils.fromWei(request.value, 'ether')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: [request.approvalCount, "/", approversCount]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          color: "green",
          basic: true,
          onClick: this.onApprove,
          children: "Approve"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RequestRow);

/***/ }),

/***/ "./pages/campaigns/requests/index.js":
/*!*******************************************!*\
  !*** ./pages/campaigns/requests/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _components_RequestRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/RequestRow */ "./components/RequestRow.js");

var _jsxFileName = "F:\\programs\\git\\git\\kickstart\\pages\\campaigns\\requests\\index.js";







class RequestIndex extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps(props) {
    const {
      address
    } = props.query;
    const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__.default)(address);
    const requestCount = await campaign.methods.getRequestsCount().call();
    const approversCount = await campaign.methods.approversCount().call();
    const requests = await Promise.all(Array(parseInt(requestCount)).fill().map((element, index) => {
      return campaign.methods.requests(index).call();
    }));
    console.log(requests);
    return {
      address,
      requests,
      requestCount,
      approversCount
    };
  }

  renderRows() {
    return this.props.requests.map((request, index) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequestRow__WEBPACK_IMPORTED_MODULE_6__.default, {
        id: index,
        request: request,
        address: this.props.address,
        approversCount: this.props.approversCount
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this);
    });
  }

  render() {
    const {
      Header,
      Row,
      HeaderCell,
      Body
    } = semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: "Request List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_3__.Link, {
        route: `/campaigns/${this.props.address}/requests/new`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
            primary: true,
            children: "Add Request"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "ID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Recipient"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Approval"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Approve"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Finalize"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Body, {
          children: this.renderRows()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RequestIndex);

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-routes");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_js-ethereum_campaign_js"], function() { return __webpack_exec__("./pages/campaigns/requests/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0Ly4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL2luZGV4LmpzIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcIm5leHQtcm91dGVzXCIiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcIndlYjNcIiJdLCJuYW1lcyI6WyJSZXF1ZXN0Um93IiwiQ29tcG9uZW50IiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImFjY291bnRzIiwid2ViMyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJyZW5kZXIiLCJSb3ciLCJDZWxsIiwiVGFibGUiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwiYXBwcm92YWxDb3VudCIsIm9uQXBwcm92ZSIsIlJlcXVlc3RJbmRleCIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwicmVxdWVzdENvdW50IiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJyZXF1ZXN0cyIsIlByb21pc2UiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJSb3dzIiwiSGVhZGVyIiwiSGVhZGVyQ2VsbCIsIkJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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QUFBO0FBQUEsb0JBSkosZUFLSSw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxKLGVBTUksOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFOSixlQU9JLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVlJLDhEQUFDLElBQUQ7QUFBQSxvQkFBTyxLQUFLbUMsVUFBTDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUF3Qkg7O0FBMURnQzs7QUE2RHJDLCtEQUFlakIsWUFBZixFOzs7Ozs7Ozs7OztBQ3JFQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUYWJsZSwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uL2V0aGVyZXVtL2NhbXBhaWduJztcclxuXHJcbmNsYXNzIFJlcXVlc3RSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgb25BcHByb3ZlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlUmVxdWVzdCh0aGlzLnByb3BzLmlkKS5zZW5kKHtcclxuICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgUm93LCBDZWxsIH0gPSBUYWJsZTtcclxuICAgICAgICBjb25zdCB7IGlkLCByZXF1ZXN0LCBhcHByb3ZlcnNDb3VudCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENlbGw+e2lkfTwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPntyZXF1ZXN0LmRlc2NyaXB0aW9ufTwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPnt3ZWIzLnV0aWxzLmZyb21XZWkocmVxdWVzdC52YWx1ZSwgJ2V0aGVyJyl9PC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+e3JlcXVlc3QuYXBwcm92YWxDb3VudH0ve2FwcHJvdmVyc0NvdW50fTwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJncmVlblwiIGJhc2ljIG9uQ2xpY2s9e3RoaXMub25BcHByb3ZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwcm92ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9DZWxsPlxyXG5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJvdzsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFRhYmxlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi8uLi9ldGhlcmV1bS9jYW1wYWlnbic7XHJcbmltcG9ydCBSZXF1ZXN0Um93IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvUmVxdWVzdFJvdyc7XHJcblxyXG5cclxuY2xhc3MgUmVxdWVzdEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuICAgICAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHByb3BzLnF1ZXJ5O1xyXG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oYWRkcmVzcyk7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdENvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0c0NvdW50KCkuY2FsbCgpO1xyXG4gICAgICAgIGNvbnN0IGFwcHJvdmVyc0NvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlcnNDb3VudCgpLmNhbGwoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgICAgICAgQXJyYXkocGFyc2VJbnQocmVxdWVzdENvdW50KSlcclxuICAgICAgICAgICAgICAgIC5maWxsKClcclxuICAgICAgICAgICAgICAgIC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMucmVxdWVzdHMoaW5kZXgpLmNhbGwoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3RzKTtcclxuICAgICAgICByZXR1cm4geyBhZGRyZXNzLCByZXF1ZXN0cywgcmVxdWVzdENvdW50LCBhcHByb3ZlcnNDb3VudCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclJvd3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMucmVxdWVzdHMubWFwKChyZXF1ZXN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFJlcXVlc3RSb3dcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0PXtyZXF1ZXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICBhcHByb3ZlcnNDb3VudD17dGhpcy5wcm9wcy5hcHByb3ZlcnNDb3VudH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBIZWFkZXIsIFJvdywgSGVhZGVyQ2VsbCwgQm9keSB9ID0gVGFibGU7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8aDQ+UmVxdWVzdCBMaXN0PC9oND5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHMvbmV3YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5BZGQgUmVxdWVzdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxUYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+SUQ8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5EZXNjcmlwdGlvbjwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFtb3VudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPlJlY2lwaWVudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFwcHJvdmFsPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+QXBwcm92ZTwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkZpbmFsaXplPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8Qm9keT57dGhpcy5yZW5kZXJSb3dzKCl9PC9Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdEluZGV4OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcm91dGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9