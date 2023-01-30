"use strict";
(self["webpackChunkyummy_yearnings"] = self["webpackChunkyummy_yearnings"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./background.jpg */ "./src/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Itim&family=Paprika&family=Quantico:ital@1&family=Quicksand&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    text-align: center;\n    font-size: 1.2rem;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n#content {\n    font-family: 'Quicksand', sans-serif;\n    font-weight:bolder;\n    width: 100vw;\n    height: 100vh;\n    max-width:100%;\n}\n\ndiv[class^=\"top_\"] {\n    font-family: 'Paprika', cursive;\n    margin: 0 2rem;\n    padding: 0.35rem;\n    border: 0.25rem solid black;\n    position: relative;\n}\n\n@keyframes changeColor {\n    0% {\n        border: 0.25rem solid rgb(181, 141, 255);\n    }\n    25% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n    50% {\n        border: 0.25rem solid rgb(249, 41, 62);\n    }\n    75% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n}\n\ndiv[class^=\"top_\"]:hover {\n    border: 0.25rem solid rgb(158, 105, 255);\n\n    animation-name: changeColor;\n    animation-iteration-count: infinite;\n    animation-duration: 3s;\n}\n\n/**/\n\ndiv[class^=\"top_\"]::before, div[class^=\"top_\"]::after {\n    content: '';\n    display: block;\n    position: absolute;\n    background: aquamarine;\n}\n\ndiv[class^=\"top_\"]::before {\n    top: -0.3em; \n    bottom: -0.3em;\n    left: 1em;\n    right: 1em;\n}\n\ndiv[class^=\"top_\"]::after {\n    left: -0.3em;\n    right: -0.3em;\n    top: 1em;\n    bottom: 1em;\n}\n\ndiv[class^=\"corner_\"] {\n    position: relative;\n    z-index: 1;\n}\n\n.topheader {\n    top: 0;\n    width: 100%;\n    height: 7vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: aquamarine;\n}\n\n.bottom_foot {\n    color: white;\n    bottom: 0;\n    width: 100%;\n    height: 5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(98, 74, 255);\n    opacity: 0.6;\n}\n\n.under_topheader {\n    background-color: rgb(188, 117, 255);\n}\n\n.biggest_box {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    gap: 0.5rem;\n    height: 100vh;\n    grid-template-columns: clamp(20%, 25%, 28%);\n    grid-template-rows: clamp(12%, 20%, 25%), clamp(25%, 39%, 40%), clamp(25%, 39%, 40%), clamp(12%, 20%, 25%);\n    background-color: rgb(188, 117, 255);\n}\n\ndiv[class^=\"section\"] {\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    display: flex;\n    width: 40vw;\n    flex-direction: column;\n    justify-content: center;\n    justify-self: center;\n    opacity: 0.85;\n    margin-top:1rem;\n    padding-top: 0.3rem;\n    padding-bottom: 0.3rem;\n}\n\ndiv[class^=\"section\"] > div {\n    padding-bottom: 0.4rem;\n}\n\n.headliner_box {\n    font-family: 'Itim', cursive;\n    padding: 0.5rem;\n    grid-row: 1 / 2;\n    display: flex;\n    margin-top: 1rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n}\n\n.section_1 {\n    grid-row: 2 / 3;\n}\n\n.section_1 > div {\n    text-align: left;\n    padding: 0.2rem 1.2rem;\n}\n\n.section_2 {\n    grid-row: 3 / 4;\n}\n\n.section_3 {\n    grid-row: 4 / 5;\n    margin-bottom: 1rem;\n}\n\nh1 {\n    font-size: 2rem;\n    margin: 0 1rem;\n}\n\nh2 {\n    font-family: 'Itim', cursive;\n    font-size: 1.5rem;\n    margin: 0 1rem;\n}\n\n.title-text {\n    font-family: 'Quantico', sans-serif;\n    font-size: 1.8rem;\n    font-weight: bold;\n}\n\nimg {\n    border: 2px solid black;\n    border-radius: 12px;\n    width: 5rem;\n    height: 5rem;\n}\n\na, a:link, a:visited {\n    color: white;\n}\n\na:hover {\n    color:rgb(248, 165, 255) ;\n}\n\na:active {\n    color:aquamarine\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,oCAAoC;IACpC,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,+BAA+B;IAC/B,cAAc;IACd,gBAAgB;IAChB,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI;QACI,wCAAwC;IAC5C;IACA;QACI,uCAAuC;IAC3C;IACA;QACI,sCAAsC;IAC1C;IACA;QACI,uCAAuC;IAC3C;AACJ;;AAEA;IACI,wCAAwC;;IAExC,2BAA2B;IAC3B,mCAAmC;IACnC,sBAAsB;AAC1B;;AAEA,GAAG;;AAEH;IACI,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,cAAc;IACd,SAAS;IACT,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,QAAQ;IACR,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,MAAM;IACN,WAAW;IACX,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,4BAA4B;AAChC;;AAEA;IACI,YAAY;IACZ,SAAS;IACT,WAAW;IACX,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,yDAAyC;IACzC,4BAA4B;IAC5B,2BAA2B;IAC3B,aAAa;IACb,uBAAuB;IACvB,WAAW;IACX,aAAa;IACb,2CAA2C;IAC3C,0GAA0G;IAC1G,oCAAoC;AACxC;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,WAAW;IACX,sBAAsB;IACtB,uBAAuB;IACvB,oBAAoB;IACpB,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,4BAA4B;IAC5B,eAAe;IACf,eAAe;IACf,aAAa;IACb,gBAAgB;IAChB,uBAAuB;IACvB,oBAAoB;IACpB,mBAAmB;IACnB,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,4BAA4B;IAC5B,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,mCAAmC;IACnC,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Itim&family=Paprika&family=Quantico:ital@1&family=Quicksand&display=swap');\n\n:root {\n    text-align: center;\n    font-size: 1.2rem;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n#content {\n    font-family: 'Quicksand', sans-serif;\n    font-weight:bolder;\n    width: 100vw;\n    height: 100vh;\n    max-width:100%;\n}\n\ndiv[class^=\"top_\"] {\n    font-family: 'Paprika', cursive;\n    margin: 0 2rem;\n    padding: 0.35rem;\n    border: 0.25rem solid black;\n    position: relative;\n}\n\n@keyframes changeColor {\n    0% {\n        border: 0.25rem solid rgb(181, 141, 255);\n    }\n    25% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n    50% {\n        border: 0.25rem solid rgb(249, 41, 62);\n    }\n    75% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n}\n\ndiv[class^=\"top_\"]:hover {\n    border: 0.25rem solid rgb(158, 105, 255);\n\n    animation-name: changeColor;\n    animation-iteration-count: infinite;\n    animation-duration: 3s;\n}\n\n/**/\n\ndiv[class^=\"top_\"]::before, div[class^=\"top_\"]::after {\n    content: '';\n    display: block;\n    position: absolute;\n    background: aquamarine;\n}\n\ndiv[class^=\"top_\"]::before {\n    top: -0.3em; \n    bottom: -0.3em;\n    left: 1em;\n    right: 1em;\n}\n\ndiv[class^=\"top_\"]::after {\n    left: -0.3em;\n    right: -0.3em;\n    top: 1em;\n    bottom: 1em;\n}\n\ndiv[class^=\"corner_\"] {\n    position: relative;\n    z-index: 1;\n}\n\n.topheader {\n    top: 0;\n    width: 100%;\n    height: 7vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: aquamarine;\n}\n\n.bottom_foot {\n    color: white;\n    bottom: 0;\n    width: 100%;\n    height: 5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(98, 74, 255);\n    opacity: 0.6;\n}\n\n.under_topheader {\n    background-color: rgb(188, 117, 255);\n}\n\n.biggest_box {\n    background-image: url('./background.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    gap: 0.5rem;\n    height: 100vh;\n    grid-template-columns: clamp(20%, 25%, 28%);\n    grid-template-rows: clamp(12%, 20%, 25%), clamp(25%, 39%, 40%), clamp(25%, 39%, 40%), clamp(12%, 20%, 25%);\n    background-color: rgb(188, 117, 255);\n}\n\ndiv[class^=\"section\"] {\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    display: flex;\n    width: 40vw;\n    flex-direction: column;\n    justify-content: center;\n    justify-self: center;\n    opacity: 0.85;\n    margin-top:1rem;\n    padding-top: 0.3rem;\n    padding-bottom: 0.3rem;\n}\n\ndiv[class^=\"section\"] > div {\n    padding-bottom: 0.4rem;\n}\n\n.headliner_box {\n    font-family: 'Itim', cursive;\n    padding: 0.5rem;\n    grid-row: 1 / 2;\n    display: flex;\n    margin-top: 1rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n}\n\n.section_1 {\n    grid-row: 2 / 3;\n}\n\n.section_1 > div {\n    text-align: left;\n    padding: 0.2rem 1.2rem;\n}\n\n.section_2 {\n    grid-row: 3 / 4;\n}\n\n.section_3 {\n    grid-row: 4 / 5;\n    margin-bottom: 1rem;\n}\n\nh1 {\n    font-size: 2rem;\n    margin: 0 1rem;\n}\n\nh2 {\n    font-family: 'Itim', cursive;\n    font-size: 1.5rem;\n    margin: 0 1rem;\n}\n\n.title-text {\n    font-family: 'Quantico', sans-serif;\n    font-size: 1.8rem;\n    font-weight: bold;\n}\n\nimg {\n    border: 2px solid black;\n    border-radius: 12px;\n    width: 5rem;\n    height: 5rem;\n}\n\na, a:link, a:visited {\n    color: white;\n}\n\na:hover {\n    color:rgb(248, 165, 255) ;\n}\n\na:active {\n    color:aquamarine\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageload.js */ "./src/pageload.js");


  
(0,_pageload_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _chef_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chef.jpg */ "./src/chef.jpg");


function pageLoad() {

    const headlinerbox = document.createElement("div");
    headlinerbox.className = "headliner_box";
    const header = document.createElement("div");
    header.className = "topheader";
    const underheader = document.createElement("div");
    underheader.className = "under_topheader";
    const container = document.createElement("div");
    container.className = "biggest_box";
    const section1 = document.createElement("div");
    section1.className = "section_1";
    const section2 = document.createElement("div");
    section2.className = "section_2";
    const section3 = document.createElement("div");
    section3.className = "section_3";

    const header_home = document.createElement("div");
    header_home.className = "top_home";
    const home_text = document.createElement("div");
    home_text.className = "corner_texthome";
    home_text.innerHTML = "Home";

    const header_menu = document.createElement("div");
    header_menu.className = "top_menu";
    const menu_text = document.createElement("div");
    menu_text.className = "corner_textmenu";
    menu_text.innerHTML = "Menu";

    const footer = document.createElement("div");
    footer.className = "bottom_foot";
    footer.innerHTML = 'Photo by&nbsp;<a href="https://unsplash.com/@krisroller?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kristopher Roller</a>&nbsp;on&nbsp;<a href="https://unsplash.com/images/nature/galaxy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';

    const header_contact = document.createElement("div");
    header_contact.className = "top_contact";
    const contact_text = document.createElement("div");
    contact_text.className = "corner_textcontact";
    contact_text.innerHTML = "Contact";

    const headline = document.createElement("h1");
    headline.className = "headliner"
    headline.innerHTML = "Yummy Yearnings";

    const underHeadline = document.createElement("h2");
    underHeadline.innerHTML = "Craving something yummy? <br>Look no further!";

    const intro = document.createElement("div");
    intro.innerHTML = "Welcome to Yummy Yearnings, a place where you can find everything that you (or I) have been yearning for! Here you'll find the most satisfying foods that money can buy in this galaxy. I hope you enjoy!"

    const hoursMain = document.createElement("div");
    hoursMain.innerHTML = "Hours"
    hoursMain.className = "title-text"

    const hours = document.createElement("div");
    hours.innerHTML = "Monday: 7am - 7pm <br> Tuesday: 7am - 7pm <br> Wednesday: 7am - 7pm <br> Thursday: 7am - 7pm <br> Friday: 7am - 10pm <br> Saturday: 7am - 10pm <br> Sunday: 8am - 10pm"

    const locationMain = document.createElement("div");
    locationMain.innerHTML = "Location"
    locationMain.className = "title-text"

    const location = document.createElement("div");
    location.innerHTML = "999 Taste Bud Avenue, Delicious, TX 99999"

    const chefIcon = new Image();
    chefIcon.src = _chef_jpg__WEBPACK_IMPORTED_MODULE_0__;

    const contentDiv = document.getElementById("content");
    contentDiv.appendChild(header);
    contentDiv.appendChild(underheader);
    contentDiv.appendChild(footer);
    header_home.appendChild(home_text);
    header_menu.appendChild(menu_text);
    header_contact.appendChild(contact_text);
    header.appendChild(header_home);
    header.appendChild(header_menu);
    header.appendChild(header_contact);
    underheader.appendChild(container);
    container.appendChild(headlinerbox);
    headlinerbox.appendChild(chefIcon);
    headlinerbox.appendChild(headline);
    container.appendChild(section1);
    container.appendChild(section2);
    container.appendChild(section3);
    
    section1.appendChild(underHeadline);
    section1.appendChild(intro);
    section2.appendChild(hoursMain);
    section2.appendChild(hours);
    section3.appendChild(locationMain);
    section3.appendChild(location);
}


/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc1335dde247c0fcd27d.jpg";

/***/ }),

/***/ "./src/chef.jpg":
/*!**********************!*\
  !*** ./src/chef.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60d551524b662ba67d0f.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ2dCO0FBQ3JDO0FBQ0Esd0RBQVE7Ozs7Ozs7Ozs7Ozs7OztBQ0hzQjs7QUFFZjs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLHlJQUF5SSxRQUFROztBQUV2TDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsc0NBQUk7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL3NyYy9wYWdlbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SXRpbSZmYW1pbHk9UGFwcmlrYSZmYW1pbHk9UXVhbnRpY286aXRhbEAxJmZhbWlseT1RdWlja3NhbmQmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXgtd2lkdGg6MTAwJTtcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwidG9wX1xcXCJdIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQYXByaWthJywgY3Vyc2l2ZTtcXG4gICAgbWFyZ2luOiAwIDJyZW07XFxuICAgIHBhZGRpbmc6IDAuMzVyZW07XFxuICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCBibGFjaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNoYW5nZUNvbG9yIHtcXG4gICAgMCUge1xcbiAgICAgICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigxODEsIDE0MSwgMjU1KTtcXG4gICAgfVxcbiAgICAyNSUge1xcbiAgICAgICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigyNTUsIDQyLCAyMTIpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDI0OSwgNDEsIDYyKTtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigyNTUsIDQyLCAyMTIpO1xcbiAgICB9XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXTpob3ZlciB7XFxuICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCByZ2IoMTU4LCAxMDUsIDI1NSk7XFxuXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2VDb2xvcjtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XFxufVxcblxcbi8qKi9cXG5cXG5kaXZbY2xhc3NePVxcXCJ0b3BfXFxcIl06OmJlZm9yZSwgZGl2W2NsYXNzXj1cXFwidG9wX1xcXCJdOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJ0b3BfXFxcIl06OmJlZm9yZSB7XFxuICAgIHRvcDogLTAuM2VtOyBcXG4gICAgYm90dG9tOiAtMC4zZW07XFxuICAgIGxlZnQ6IDFlbTtcXG4gICAgcmlnaHQ6IDFlbTtcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwidG9wX1xcXCJdOjphZnRlciB7XFxuICAgIGxlZnQ6IC0wLjNlbTtcXG4gICAgcmlnaHQ6IC0wLjNlbTtcXG4gICAgdG9wOiAxZW07XFxuICAgIGJvdHRvbTogMWVtO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJjb3JuZXJfXFxcIl0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi50b3BoZWFkZXIge1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDd2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcbi5ib3R0b21fZm9vdCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTgsIDc0LCAyNTUpO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi51bmRlcl90b3BoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg4LCAxMTcsIDI1NSk7XFxufVxcblxcbi5iaWdnZXN0X2JveCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNsYW1wKDIwJSwgMjUlLCAyOCUpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGNsYW1wKDEyJSwgMjAlLCAyNSUpLCBjbGFtcCgyNSUsIDM5JSwgNDAlKSwgY2xhbXAoMjUlLCAzOSUsIDQwJSksIGNsYW1wKDEyJSwgMjAlLCAyNSUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg4LCAxMTcsIDI1NSk7XFxufVxcblxcbmRpdltjbGFzc149XFxcInNlY3Rpb25cXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNDB2dztcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbiAgICBtYXJnaW4tdG9wOjFyZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjNyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XFxufVxcblxcbmRpdltjbGFzc149XFxcInNlY3Rpb25cXFwiXSA+IGRpdiB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XFxufVxcblxcbi5oZWFkbGluZXJfYm94IHtcXG4gICAgZm9udC1mYW1pbHk6ICdJdGltJywgY3Vyc2l2ZTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbi5zZWN0aW9uXzEge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5zZWN0aW9uXzEgPiBkaXYge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAwLjJyZW0gMS4ycmVtO1xcbn1cXG5cXG4uc2VjdGlvbl8yIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uc2VjdGlvbl8zIHtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJdGltJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG4udGl0bGUtdGV4dCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVhbnRpY28nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmltZyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbn1cXG5cXG5hLCBhOmxpbmssIGE6dmlzaXRlZCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICAgIGNvbG9yOnJnYigyNDgsIDE2NSwgMjU1KSA7XFxufVxcblxcbmE6YWN0aXZlIHtcXG4gICAgY29sb3I6YXF1YW1hcmluZVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLHdDQUF3QztJQUM1QztJQUNBO1FBQ0ksdUNBQXVDO0lBQzNDO0lBQ0E7UUFDSSxzQ0FBc0M7SUFDMUM7SUFDQTtRQUNJLHVDQUF1QztJQUMzQztBQUNKOztBQUVBO0lBQ0ksd0NBQXdDOztJQUV4QywyQkFBMkI7SUFDM0IsbUNBQW1DO0lBQ25DLHNCQUFzQjtBQUMxQjs7QUFFQSxHQUFHOztBQUVIO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixRQUFRO0lBQ1IsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLE1BQU07SUFDTixXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHlEQUF5QztJQUN6Qyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGFBQWE7SUFDYiwyQ0FBMkM7SUFDM0MsMEdBQTBHO0lBQzFHLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SXRpbSZmYW1pbHk9UGFwcmlrYSZmYW1pbHk9UXVhbnRpY286aXRhbEAxJmZhbWlseT1RdWlja3NhbmQmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1heC13aWR0aDoxMDAlO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJ0b3BfXFxcIl0ge1xcbiAgICBmb250LWZhbWlseTogJ1BhcHJpa2EnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDAgMnJlbTtcXG4gICAgcGFkZGluZzogMC4zNXJlbTtcXG4gICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIGJsYWNrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbkBrZXlmcmFtZXMgY2hhbmdlQ29sb3Ige1xcbiAgICAwJSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDE4MSwgMTQxLCAyNTUpO1xcbiAgICB9XFxuICAgIDI1JSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDI1NSwgNDIsIDIxMik7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCByZ2IoMjQ5LCA0MSwgNjIpO1xcbiAgICB9XFxuICAgIDc1JSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDI1NSwgNDIsIDIxMik7XFxuICAgIH1cXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwidG9wX1xcXCJdOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigxNTgsIDEwNSwgMjU1KTtcXG5cXG4gICAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUNvbG9yO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXG59XFxuXFxuLyoqL1xcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXTo6YmVmb3JlLCBkaXZbY2xhc3NePVxcXCJ0b3BfXFxcIl06OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6IGFxdWFtYXJpbmU7XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXTo6YmVmb3JlIHtcXG4gICAgdG9wOiAtMC4zZW07IFxcbiAgICBib3R0b206IC0wLjNlbTtcXG4gICAgbGVmdDogMWVtO1xcbiAgICByaWdodDogMWVtO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJ0b3BfXFxcIl06OmFmdGVyIHtcXG4gICAgbGVmdDogLTAuM2VtO1xcbiAgICByaWdodDogLTAuM2VtO1xcbiAgICB0b3A6IDFlbTtcXG4gICAgYm90dG9tOiAxZW07XFxufVxcblxcbmRpdltjbGFzc149XFxcImNvcm5lcl9cXFwiXSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnRvcGhlYWRlciB7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogN3ZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxuXFxuLmJvdHRvbV9mb290IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5OCwgNzQsIDI1NSk7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnVuZGVyX3RvcGhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODgsIDExNywgMjU1KTtcXG59XFxuXFxuLmJpZ2dlc3RfYm94IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2JhY2tncm91bmQuanBnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNsYW1wKDIwJSwgMjUlLCAyOCUpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGNsYW1wKDEyJSwgMjAlLCAyNSUpLCBjbGFtcCgyNSUsIDM5JSwgNDAlKSwgY2xhbXAoMjUlLCAzOSUsIDQwJSksIGNsYW1wKDEyJSwgMjAlLCAyNSUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg4LCAxMTcsIDI1NSk7XFxufVxcblxcbmRpdltjbGFzc149XFxcInNlY3Rpb25cXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNDB2dztcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbiAgICBtYXJnaW4tdG9wOjFyZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjNyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XFxufVxcblxcbmRpdltjbGFzc149XFxcInNlY3Rpb25cXFwiXSA+IGRpdiB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XFxufVxcblxcbi5oZWFkbGluZXJfYm94IHtcXG4gICAgZm9udC1mYW1pbHk6ICdJdGltJywgY3Vyc2l2ZTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbi5zZWN0aW9uXzEge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5zZWN0aW9uXzEgPiBkaXYge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAwLjJyZW0gMS4ycmVtO1xcbn1cXG5cXG4uc2VjdGlvbl8yIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uc2VjdGlvbl8zIHtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJdGltJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG4udGl0bGUtdGV4dCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVhbnRpY28nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmltZyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbn1cXG5cXG5hLCBhOmxpbmssIGE6dmlzaXRlZCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICAgIGNvbG9yOnJnYigyNDgsIDE2NSwgMjU1KSA7XFxufVxcblxcbmE6YWN0aXZlIHtcXG4gICAgY29sb3I6YXF1YW1hcmluZVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgcGFnZUxvYWQgZnJvbSAnLi9wYWdlbG9hZC5qcyc7XG4gIFxucGFnZUxvYWQoKTsiLCJpbXBvcnQgSWNvbiBmcm9tICcuL2NoZWYuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG5cbiAgICBjb25zdCBoZWFkbGluZXJib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRsaW5lcmJveC5jbGFzc05hbWUgPSBcImhlYWRsaW5lcl9ib3hcIjtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSBcInRvcGhlYWRlclwiO1xuICAgIGNvbnN0IHVuZGVyaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB1bmRlcmhlYWRlci5jbGFzc05hbWUgPSBcInVuZGVyX3RvcGhlYWRlclwiO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYmlnZ2VzdF9ib3hcIjtcbiAgICBjb25zdCBzZWN0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VjdGlvbjEuY2xhc3NOYW1lID0gXCJzZWN0aW9uXzFcIjtcbiAgICBjb25zdCBzZWN0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VjdGlvbjIuY2xhc3NOYW1lID0gXCJzZWN0aW9uXzJcIjtcbiAgICBjb25zdCBzZWN0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VjdGlvbjMuY2xhc3NOYW1lID0gXCJzZWN0aW9uXzNcIjtcblxuICAgIGNvbnN0IGhlYWRlcl9ob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfaG9tZS5jbGFzc05hbWUgPSBcInRvcF9ob21lXCI7XG4gICAgY29uc3QgaG9tZV90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lX3RleHQuY2xhc3NOYW1lID0gXCJjb3JuZXJfdGV4dGhvbWVcIjtcbiAgICBob21lX3RleHQuaW5uZXJIVE1MID0gXCJIb21lXCI7XG5cbiAgICBjb25zdCBoZWFkZXJfbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyX21lbnUuY2xhc3NOYW1lID0gXCJ0b3BfbWVudVwiO1xuICAgIGNvbnN0IG1lbnVfdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudV90ZXh0LmNsYXNzTmFtZSA9IFwiY29ybmVyX3RleHRtZW51XCI7XG4gICAgbWVudV90ZXh0LmlubmVySFRNTCA9IFwiTWVudVwiO1xuXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXIuY2xhc3NOYW1lID0gXCJib3R0b21fZm9vdFwiO1xuICAgIGZvb3Rlci5pbm5lckhUTUwgPSAnUGhvdG8gYnkmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGtyaXNyb2xsZXI/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+S3Jpc3RvcGhlciBSb2xsZXI8L2E+Jm5ic3A7b24mbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vaW1hZ2VzL25hdHVyZS9nYWxheHk/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+VW5zcGxhc2g8L2E+JztcblxuICAgIGNvbnN0IGhlYWRlcl9jb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfY29udGFjdC5jbGFzc05hbWUgPSBcInRvcF9jb250YWN0XCI7XG4gICAgY29uc3QgY29udGFjdF90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0X3RleHQuY2xhc3NOYW1lID0gXCJjb3JuZXJfdGV4dGNvbnRhY3RcIjtcbiAgICBjb250YWN0X3RleHQuaW5uZXJIVE1MID0gXCJDb250YWN0XCI7XG5cbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkbGluZS5jbGFzc05hbWUgPSBcImhlYWRsaW5lclwiXG4gICAgaGVhZGxpbmUuaW5uZXJIVE1MID0gXCJZdW1teSBZZWFybmluZ3NcIjtcblxuICAgIGNvbnN0IHVuZGVySGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdW5kZXJIZWFkbGluZS5pbm5lckhUTUwgPSBcIkNyYXZpbmcgc29tZXRoaW5nIHl1bW15PyA8YnI+TG9vayBubyBmdXJ0aGVyIVwiO1xuXG4gICAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGludHJvLmlubmVySFRNTCA9IFwiV2VsY29tZSB0byBZdW1teSBZZWFybmluZ3MsIGEgcGxhY2Ugd2hlcmUgeW91IGNhbiBmaW5kIGV2ZXJ5dGhpbmcgdGhhdCB5b3UgKG9yIEkpIGhhdmUgYmVlbiB5ZWFybmluZyBmb3IhIEhlcmUgeW91J2xsIGZpbmQgdGhlIG1vc3Qgc2F0aXNmeWluZyBmb29kcyB0aGF0IG1vbmV5IGNhbiBidXkgaW4gdGhpcyBnYWxheHkuIEkgaG9wZSB5b3UgZW5qb3khXCJcblxuICAgIGNvbnN0IGhvdXJzTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG91cnNNYWluLmlubmVySFRNTCA9IFwiSG91cnNcIlxuICAgIGhvdXJzTWFpbi5jbGFzc05hbWUgPSBcInRpdGxlLXRleHRcIlxuXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXJzLmlubmVySFRNTCA9IFwiTW9uZGF5OiA3YW0gLSA3cG0gPGJyPiBUdWVzZGF5OiA3YW0gLSA3cG0gPGJyPiBXZWRuZXNkYXk6IDdhbSAtIDdwbSA8YnI+IFRodXJzZGF5OiA3YW0gLSA3cG0gPGJyPiBGcmlkYXk6IDdhbSAtIDEwcG0gPGJyPiBTYXR1cmRheTogN2FtIC0gMTBwbSA8YnI+IFN1bmRheTogOGFtIC0gMTBwbVwiXG5cbiAgICBjb25zdCBsb2NhdGlvbk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvY2F0aW9uTWFpbi5pbm5lckhUTUwgPSBcIkxvY2F0aW9uXCJcbiAgICBsb2NhdGlvbk1haW4uY2xhc3NOYW1lID0gXCJ0aXRsZS10ZXh0XCJcblxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2NhdGlvbi5pbm5lckhUTUwgPSBcIjk5OSBUYXN0ZSBCdWQgQXZlbnVlLCBEZWxpY2lvdXMsIFRYIDk5OTk5XCJcblxuICAgIGNvbnN0IGNoZWZJY29uID0gbmV3IEltYWdlKCk7XG4gICAgY2hlZkljb24uc3JjID0gSWNvbjtcblxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodW5kZXJoZWFkZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgICBoZWFkZXJfaG9tZS5hcHBlbmRDaGlsZChob21lX3RleHQpO1xuICAgIGhlYWRlcl9tZW51LmFwcGVuZENoaWxkKG1lbnVfdGV4dCk7XG4gICAgaGVhZGVyX2NvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdF90ZXh0KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX2hvbWUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJfbWVudSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9jb250YWN0KTtcbiAgICB1bmRlcmhlYWRlci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkbGluZXJib3gpO1xuICAgIGhlYWRsaW5lcmJveC5hcHBlbmRDaGlsZChjaGVmSWNvbik7XG4gICAgaGVhZGxpbmVyYm94LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbjEpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uMik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb24zKTtcbiAgICBcbiAgICBzZWN0aW9uMS5hcHBlbmRDaGlsZCh1bmRlckhlYWRsaW5lKTtcbiAgICBzZWN0aW9uMS5hcHBlbmRDaGlsZChpbnRybyk7XG4gICAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQoaG91cnNNYWluKTtcbiAgICBzZWN0aW9uMi5hcHBlbmRDaGlsZChob3Vycyk7XG4gICAgc2VjdGlvbjMuYXBwZW5kQ2hpbGQobG9jYXRpb25NYWluKTtcbiAgICBzZWN0aW9uMy5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=