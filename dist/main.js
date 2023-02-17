/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-size: 25px;\n  background-color: #263159;\n  display: flex;\n  flex-direction: column;\n}\n\nh1,\nh3 {\n  color: #fffbeb;\n}\n\nh1 {\n  font-weight: bolder;\n  font-size: 70px;\n  margin: 50px;\n}\n\nh3 {\n  font-weight: bold;\n  font-size: 40px;\n}\n\n.content {\n  display: flex;\n  gap: 150px;\n  justify-content: center;\n  align-items: center;\n  margin: 100px;\n}\n\n.add-score,\n.score-board {\n  width: 40%;\n}\n\n.board {\n  border: 5px solid #ccc;\n  background-color: #495579;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: 8px 5px 8px 8px #888;\n  overflow-y: scroll;\n  max-height: 560px;\n}\n\n.score-board {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  padding-top: 15px;\n}\n\n.add-score {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  position: relative;\n}\n\n.score-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.board-item {\n  display: flex;\n  height: 50px;\n  align-items: center;\n  padding-left: 10px;\n}\n\ninput {\n  display: flex;\n  width: 500px;\n  height: 40px;\n  padding: 5px;\n  font-size: 25px;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n}\n\n.submit {\n  width: 100px;\n  display: flex;\n  justify-content: center;\n  align-self: flex-end;\n}\n\n.refresh-btn {\n  width: 150px;\n  font-size: 25px;\n  height: 50px;\n}\n\n/* special feature 1 */\n#snackbar {\n  visibility: hidden;\n  min-width: 300px;\n  background-color: #92b4ec;\n  color: #fff;\n  text-align: center;\n  border-radius: 5px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 70%;\n  font-size: 25px;\n  font-weight: bold;\n  top: 100px;\n}\n\n#snackbar.show {\n  visibility: visible;\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    top: 0;\n    opacity: 0;\n  }\n\n  to {\n    top: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    right: 0;\n    opacity: 0;\n  }\n\n  to {\n    left: 60%;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeout {\n  from {\n    right: 30px;\n    opacity: 1;\n  }\n\n  to {\n    right: 0;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    right: 30px;\n    opacity: 1;\n  }\n\n  to {\n    right: 0;\n    opacity: 0;\n  }\n}\n\n/* special feature2 */\n\n/* add css  */\n.bouncing-text {\n  position: relative;\n  display: flex;\n  font-size: 70px;\n  color: #fffbeb;\n  font-weight: bolder;\n  margin-top: 20px;\n}\n\n/* Style the letters: */\n.l,\n.e,\n.a,\n.d,\n.r,\n.b,\n.o {\n  color: #fffbeb;\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\n}\n\n/* Add the bounce effect animation: */\n\n@keyframes bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n\n  10% {\n    transform: scale(1.1, 0.9) translateY(0);\n  }\n\n  30% {\n    transform: scale(0.9, 1.1) translateY(-55px);\n  }\n\n  50% {\n    transform: scale(1.05, 0.95) translateY(0);\n  }\n\n  58% {\n    transform: scale(1, 1) translateY(-7px);\n  }\n\n  65% {\n    transform: scale(1, 1) translateY(0);\n  }\n\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n\n.l {\n  animation: bounce 1s ease infinite;\n}\n\n.e {\n  animation: bounce 1s ease infinite 0.1s;\n}\n\n.a {\n  animation: bounce 1s ease infinite 0.2s;\n}\n\n.d {\n  animation: bounce 1s ease infinite 0.3s;\n}\n\n.r {\n  animation: bounce 1s ease infinite 0.4s;\n}\n\n.b {\n  animation: bounce 1s ease infinite 0.5s;\n}\n\n.o {\n  animation: bounce 1s ease infinite 0.6s;\n}\n\n/* add shadow */\n.bouncing-text::before,\n.bouncing-text::after {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.4);\n  width: 50px;\n  height: 5px;\n  border-radius: 50%;\n  top: 82px;\n  z-index: -1;\n}\n\n.shadow,\n.shadow-two {\n  position: absolute;\n  top: 82px;\n  z-index: -1;\n}\n\n.shadow::before,\n.shadow::after,\n.shadow-two::before,\n.shadow-two::after {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.4);\n  width: 50px;\n  height: 5px;\n  border-radius: 50%;\n  top: 0;\n}\n\n.bouncing-text::before {\n  left: 0;\n  animation: scale 1s linear infinite;\n}\n\n@keyframes scale {\n  0% {\n    transform: scaleX(1);\n  }\n\n  25% {\n    transform: scaleX(0.4);\n  }\n\n  50% {\n    transform: scaleX(1);\n  }\n\n  75% {\n    transform: scaleX(0.9);\n  }\n\n  100% {\n    transform: scaleX(1);\n  }\n}\n\n.bouncing-text::after {\n  left: 57px;\n  animation: scale 1s linear infinite 0.1s;\n}\n\n.shadow::before {\n  left: 116px;\n  animation: scale 1s linear infinite 0.2s;\n}\n\n.shadow::after {\n  left: 175px;\n  animation: scale 1s linear infinite 0.3s;\n}\n\n.shadow-two::before {\n  left: 232px;\n  animation: scale 1s linear infinite 0.4s;\n}\n\n.shadow-two::after {\n  left: 285px;\n  animation: scale 1s linear infinite 0.5s;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-size: 25px;\n  background-color: #263159;\n  display: flex;\n  flex-direction: column;\n}\n\nh1,\nh3 {\n  color: #fffbeb;\n}\n\nh1 {\n  font-weight: bolder;\n  font-size: 70px;\n  margin: 50px;\n}\n\nh3 {\n  font-weight: bold;\n  font-size: 40px;\n}\n\n.content {\n  display: flex;\n  gap: 150px;\n  justify-content: center;\n  align-items: center;\n  margin: 100px;\n}\n\n.add-score,\n.score-board {\n  width: 40%;\n}\n\n.board {\n  border: 5px solid #ccc;\n  background-color: #495579;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: 8px 5px 8px 8px #888;\n  overflow-y: scroll;\n  max-height: 560px;\n}\n\n.score-board {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  padding-top: 15px;\n}\n\n.add-score {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  position: relative;\n}\n\n.score-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.board-item {\n  display: flex;\n  height: 50px;\n  align-items: center;\n  padding-left: 10px;\n}\n\ninput {\n  display: flex;\n  width: 500px;\n  height: 40px;\n  padding: 5px;\n  font-size: 25px;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n}\n\n.submit {\n  width: 100px;\n  display: flex;\n  justify-content: center;\n  align-self: flex-end;\n}\n\n.refresh-btn {\n  width: 150px;\n  font-size: 25px;\n  height: 50px;\n}\n\n/* special feature 1 */\n#snackbar {\n  visibility: hidden;\n  min-width: 300px;\n  background-color: #92b4ec;\n  color: #fff;\n  text-align: center;\n  border-radius: 5px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 70%;\n  font-size: 25px;\n  font-weight: bold;\n  top: 100px;\n}\n\n#snackbar.show {\n  visibility: visible;\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    top: 0;\n    opacity: 0;\n  }\n\n  to {\n    top: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    right: 0;\n    opacity: 0;\n  }\n\n  to {\n    left: 60%;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeout {\n  from {\n    right: 30px;\n    opacity: 1;\n  }\n\n  to {\n    right: 0;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    right: 30px;\n    opacity: 1;\n  }\n\n  to {\n    right: 0;\n    opacity: 0;\n  }\n}\n\n/* special feature2 */\n\n/* add css  */\n.bouncing-text {\n  position: relative;\n  display: flex;\n  font-size: 70px;\n  color: #fffbeb;\n  font-weight: bolder;\n  margin-top: 20px;\n}\n\n/* Style the letters: */\n.l,\n.e,\n.a,\n.d,\n.r,\n.b,\n.o {\n  color: #fffbeb;\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\n}\n\n/* Add the bounce effect animation: */\n\n@keyframes bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n\n  10% {\n    transform: scale(1.1, 0.9) translateY(0);\n  }\n\n  30% {\n    transform: scale(0.9, 1.1) translateY(-55px);\n  }\n\n  50% {\n    transform: scale(1.05, 0.95) translateY(0);\n  }\n\n  58% {\n    transform: scale(1, 1) translateY(-7px);\n  }\n\n  65% {\n    transform: scale(1, 1) translateY(0);\n  }\n\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n\n.l {\n  animation: bounce 1s ease infinite;\n}\n\n.e {\n  animation: bounce 1s ease infinite 0.1s;\n}\n\n.a {\n  animation: bounce 1s ease infinite 0.2s;\n}\n\n.d {\n  animation: bounce 1s ease infinite 0.3s;\n}\n\n.r {\n  animation: bounce 1s ease infinite 0.4s;\n}\n\n.b {\n  animation: bounce 1s ease infinite 0.5s;\n}\n\n.o {\n  animation: bounce 1s ease infinite 0.6s;\n}\n\n/* add shadow */\n.bouncing-text::before,\n.bouncing-text::after {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.4);\n  width: 50px;\n  height: 5px;\n  border-radius: 50%;\n  top: 82px;\n  z-index: -1;\n}\n\n.shadow,\n.shadow-two {\n  position: absolute;\n  top: 82px;\n  z-index: -1;\n}\n\n.shadow::before,\n.shadow::after,\n.shadow-two::before,\n.shadow-two::after {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.4);\n  width: 50px;\n  height: 5px;\n  border-radius: 50%;\n  top: 0;\n}\n\n.bouncing-text::before {\n  left: 0;\n  animation: scale 1s linear infinite;\n}\n\n@keyframes scale {\n  0% {\n    transform: scaleX(1);\n  }\n\n  25% {\n    transform: scaleX(0.4);\n  }\n\n  50% {\n    transform: scaleX(1);\n  }\n\n  75% {\n    transform: scaleX(0.9);\n  }\n\n  100% {\n    transform: scaleX(1);\n  }\n}\n\n.bouncing-text::after {\n  left: 57px;\n  animation: scale 1s linear infinite 0.1s;\n}\n\n.shadow::before {\n  left: 116px;\n  animation: scale 1s linear infinite 0.2s;\n}\n\n.shadow::after {\n  left: 175px;\n  animation: scale 1s linear infinite 0.3s;\n}\n\n.shadow-two::before {\n  left: 232px;\n  animation: scale 1s linear infinite 0.4s;\n}\n\n.shadow-two::after {\n  left: 285px;\n  animation: scale 1s linear infinite 0.5s;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/add_score.js":
/*!**********************************!*\
  !*** ./src/modules/add_score.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _score_keeper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score_keeper.js */ "./src/modules/score_keeper.js");


// get form data...
const formDetails = () => {
  const userName = document.querySelector('.name');
  const userScore = document.querySelector('.score');

  document.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = userName.value;
    const score = userScore.value;
    const newPlayer = new _score_keeper_js__WEBPACK_IMPORTED_MODULE_0__["default"](name, score);
    newPlayer.saveScore(newPlayer);

    // toast notification ...
    const x = document.getElementById('snackbar');
    x.className = 'show';
    setTimeout(() => { x.className = x.className.replace('show', ''); }, 3000);

    userName.value = '';
    userScore.value = '';
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formDetails);

/***/ }),

/***/ "./src/modules/page_loader.js":
/*!************************************!*\
  !*** ./src/modules/page_loader.js ***!
  \************************************/
/***/ ((module) => {

const scoreManager = async () => {
  const endPoint = 'games/yC6mXPc1Vo4spRm9XUzx/scores/';
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/${endPoint}`;
  const response = await fetch(url);
  const res = await response.json();
  const scoreList = res.result;

  // display scores on the scoreboard to users...
  const scoreboard = document.querySelector('.board');
  scoreboard.innerHTML += scoreList
    .map(
      (item) => `<div class="board-item">
                    <p class="score-text">${item.user}: ${item.score}</p>
                </div>`,
    )
    .join('');

  // change color of book div if index is not even
  const boardItems = document.querySelectorAll('.board-item');
  for (let i = 0; i < boardItems.length; i += 1) {
    const index = parseInt(i, 10) + 1;
    if (index % 2 === 0) {
      boardItems[i].style.backgroundColor = '#EEEEEE';
    } else {
      boardItems[i].style.color = '#CE7777';
    }
  }
};

module.exports = scoreManager;


/***/ }),

/***/ "./src/modules/refresh_page.js":
/*!*************************************!*\
  !*** ./src/modules/refresh_page.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-restricted-globals */

// get all current scores from api..
const refreshBtn = () => {
  const refresh = document.querySelector('.refresh-btn');
  refresh.addEventListener('click', () => {
    location.reload();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refreshBtn);


/***/ }),

/***/ "./src/modules/score_keeper.js":
/*!*************************************!*\
  !*** ./src/modules/score_keeper.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable class-methods-use-this */

class Player {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }

  // create new player...
    saveScore = async (playerObject) => {
      const endPoint = 'games/yC6mXPc1Vo4spRm9XUzx/scores/';
      const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/${endPoint}`;
      const response = await fetch(url, {
        method: 'post',
        body: JSON.stringify(playerObject),
        headers: { 'Content-Type': 'application/json' },
      });
      await response.json();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_page_loader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/page_loader.js */ "./src/modules/page_loader.js");
/* harmony import */ var _modules_page_loader_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_page_loader_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_add_score_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/add_score.js */ "./src/modules/add_score.js");
/* harmony import */ var _modules_refresh_page_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/refresh_page.js */ "./src/modules/refresh_page.js");





_modules_page_loader_js__WEBPACK_IMPORTED_MODULE_1___default()();
(0,_modules_add_score_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_refresh_page_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map