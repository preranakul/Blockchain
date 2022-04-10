(function() {
var exports = {};
exports.id = "pages/campaigns/requests/new";
exports.ids = ["pages/campaigns/requests/new"];
exports.modules = {

/***/ "./pages/campaigns/requests/new.js":
/*!*****************************************!*\
  !*** ./pages/campaigns/requests/new.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");

var _jsxFileName = "F:\\programs\\git\\git\\kickstart\\pages\\campaigns\\requests\\new.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class RequestNew extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      value: '',
      desc: '',
      recipient: '',
      errmsg: '',
      loading: false
    });

    _defineProperty(this, "onSubmit", async event => {
      event.preventDefault();
      const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__.default)(this.props.address);
      const {
        desc,
        value,
        recipient
      } = this.state;
      this.setState({
        loading: true,
        errmsg: ''
      });

      try {
        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.eth.getAccounts();
        await campaign.methods.createRequest(desc, _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.utils.toWei(value), recipient).send({
          from: accounts[0]
        });
        _routes__WEBPACK_IMPORTED_MODULE_5__.Router.pushRoute(`/campaigns/${this.props.address}/requests`);
      } catch (err) {
        this.setState({
          errmsg: err.message
        });
      }

      this.setState({
        loading: false
      });
    });
  }

  static async getInitialProps(props) {
    const address = props.query;
    return address;
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_6__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Create Request"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
        onSubmit: this.onSubmit,
        error: !!this.state.errmsg,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
            value: this.state.desc,
            onChange: event => this.setState({
              desc: event.target.value
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "Value in ether"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
            value: this.state.value,
            onChange: event => this.setState({
              value: event.target.value
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "Recipient"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
            value: this.state.recipient,
            onChange: event => this.setState({
              recipient: event.target.value
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
          error: true,
          header: "oops!",
          content: this.state.errmsg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          primary: true,
          loading: this.state.loading,
          children: "Create Request"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RequestNew);

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_js-ethereum_campaign_js"], function() { return __webpack_exec__("./pages/campaigns/requests/new.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvbmV3LmpzIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcIm5leHQtcm91dGVzXCIiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcIndlYjNcIiJdLCJuYW1lcyI6WyJSZXF1ZXN0TmV3IiwiQ29tcG9uZW50IiwidmFsdWUiLCJkZXNjIiwicmVjaXBpZW50IiwiZXJybXNnIiwibG9hZGluZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsIkNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImFjY291bnRzIiwid2ViMyIsIm1ldGhvZHMiLCJjcmVhdGVSZXF1ZXN0Iiwic2VuZCIsImZyb20iLCJSb3V0ZXIiLCJlcnIiLCJtZXNzYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJyZW5kZXIiLCJvblN1Ym1pdCIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFVBQU4sU0FBeUJDLDRDQUF6QixDQUFtQztBQUFBO0FBQUE7O0FBQUEsbUNBQ3ZCO0FBQ0pDLFdBQUssRUFBRSxFQURIO0FBRUpDLFVBQUksRUFBRSxFQUZGO0FBR0pDLGVBQVMsRUFBRSxFQUhQO0FBSUpDLFlBQU0sRUFBRSxFQUpKO0FBS0pDLGFBQU8sRUFBRTtB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c0JJLDhEQUFDLHNEQUFEO0FBQVMsZUFBSyxNQUFkO0FBQWUsZ0JBQU0sRUFBQyxPQUF0QjtBQUE4QixpQkFBTyxFQUFFLEtBQUtXLEtBQUwsQ0FBV1I7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF0QkosZUF1QkksOERBQUMscURBQUQ7QUFBUSxpQkFBTyxNQUFmO0FBQWdCLGlCQUFPLEVBQUUsS0FBS1EsS0FBTCxDQUFXUCxPQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUErQkg7O0FBL0Q4Qjs7QUFrRW5DLCtEQUFlTixVQUFmLEU7Ozs7Ozs7Ozs7O0FDekVBLHlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIE1lc3NhZ2UsIEZvcm1GaWVsZCwgSW5wdXQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi8uLi9ldGhlcmV1bS9jYW1wYWlnbic7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5pbXBvcnQgeyBMaW5rLCBSb3V0ZXIgfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcbmNsYXNzIFJlcXVlc3ROZXcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgIGRlc2M6ICcnLFxyXG4gICAgICAgIHJlY2lwaWVudDogJycsXHJcbiAgICAgICAgZXJybXNnOiAnJyxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgfTtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuICAgICAgICBjb25zdCBhZGRyZXNzID0gcHJvcHMucXVlcnk7XHJcbiAgICAgICAgcmV0dXJuIChhZGRyZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCA9IGFzeW5jIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgICAgICBjb25zdCB7IGRlc2MsIHZhbHVlLCByZWNpcGllbnQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm1zZzogJycgfSlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHNcclxuICAgICAgICAgICAgICAgIC5jcmVhdGVSZXF1ZXN0KGRlc2MsIHdlYjMudXRpbHMudG9XZWkodmFsdWUpLCByZWNpcGllbnQpXHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG5cclxuICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHNgKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm1zZzogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuXHJcbiAgICB9O1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgzPkNyZWF0ZSBSZXF1ZXN0PC9oMz5cclxuICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm1zZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgZGVzYzogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlZhbHVlIGluIGV0aGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5SZWNpcGllbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJlY2lwaWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgcmVjaXBpZW50OiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIm9vcHMhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJtc2d9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30+Q3JlYXRlIFJlcXVlc3Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdE5ldztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=