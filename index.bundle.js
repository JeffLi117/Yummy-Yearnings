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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    text-align: center;\n    font-size: 1.2rem;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n#content {\n    font-family: 'Quicksand', sans-serif;\n    font-weight:bolder;\n    width: 100vw;\n    height: 100vh;\n    max-width:100%;\n}\n\ndiv[class^=\"top_\"] {\n    font-family: 'Paprika', cursive;\n    margin: 0;\n    padding: 0.35rem;\n    border: 0.25rem solid black;\n    position: relative;\n}\n\n@keyframes changeColor {\n    0% {\n        border: 0.25rem solid rgb(181, 141, 255);\n    }\n    25% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n    50% {\n        border: 0.25rem solid rgb(249, 41, 62);\n    }\n    75% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n}\n\ndiv[class^=\"top_\"]:hover {\n    border: 0.25rem solid rgb(158, 105, 255);\n\n    animation-name: changeColor;\n    animation-iteration-count: infinite;\n    animation-duration: 3s;\n}\n\ndiv[class^=\"top_\"]::before, div[class^=\"top_\"]::after {\n    content: '';\n    display: block;\n    position: absolute;\n    background: aquamarine;\n}\n\ndiv[class^=\"top_\"]::before {\n    top: -0.3em; \n    bottom: -0.3em;\n    left: 1em;\n    right: 1em;\n}\n\ndiv[class^=\"top_\"]::after {\n    left: -0.3em;\n    right: -0.3em;\n    top: 1em;\n    bottom: 1em;\n}\n\ndiv[class^=\"corner_\"] {\n    position: relative;\n    z-index: 1;\n}\n\n.topheader {\n    top: 0;\n    width: 100%;\n    height: 9vh;\n    display: flex;\n    justify-content: center;\n    gap: 2rem;\n    align-items: center;\n    background-color: aquamarine;\n}\n\n.bottom_foot {\n    color: white;\n    bottom: 0;\n    width: 100%;\n    height: 5vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: rgb(98, 74, 255);\n    opacity: 0.6;\n}\n\n.under_topheader {\n    background-color: rgb(188, 117, 255);\n}\n\n.biggest_box {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    gap: 0.5rem;\n    height: 100vh;\n    grid-template-columns: clamp(20%, 25%, 28%);\n    grid-template-rows: clamp(12%, 20%, 25%), clamp(25%, 39%, 40%), clamp(25%, 39%, 40%), clamp(12%, 20%, 25%);\n    background-color: rgb(188, 117, 255);\n}\n\ndiv[class^=\"section\"] {\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    display: flex;\n    width: 40vw;\n    flex-direction: column;\n    justify-content: center;\n    justify-self: center;\n    opacity: 0.85;\n    margin-top:1rem;\n    padding-top: 0.3rem;\n    padding-bottom: 0.3rem;\n}\n\ndiv[class^=\"section\"] > div {\n    padding-bottom: 0.4rem;\n}\n\n.headliner_box {\n    font-family: 'Itim', cursive;\n    padding: 0.5rem;\n    grid-row: 1 / 2;\n    display: flex;\n    margin-top: 1rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n}\n\n.section_1 {\n    grid-row: 2 / 3;\n}\n\n.section_1 > div {\n    padding: 0.2rem 1.2rem;\n}\n\n.section_2 {\n    grid-row: 3 / 4;\n}\n\n.section_3 {\n    grid-row: 4 / 5;\n    margin-bottom: 1rem;\n}\n\nh1 {\n    font-size: 2rem;\n    margin: 0 1rem;\n}\n\nh2 {\n    font-family: 'Itim', cursive;\n    font-size: 1.5rem;\n    margin: 0 1rem;\n}\n\n.title-text {\n    font-family: 'Quantico', sans-serif;\n    font-size: 1.8rem;\n    font-weight: bold;\n}\n\nimg {\n    border: 2px solid black;\n    border-radius: 12px;\n    width: 5rem;\n    height: 5rem;\n}\n\na, a:link, a:visited {\n    color: white;\n}\n\na:hover {\n    color:rgb(248, 165, 255) ;\n}\n\na:active {\n    color:aquamarine\n}\n\n/*underneath is page2Load CSS*/\n\n.headliner_box_2 {\n    font-family: 'Itim', cursive;\n    padding: 0.5rem;\n    display: flex;\n    margin-top: 1rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n    grid-row: 1 / 2;\n}\n\nh2[class^=\"title\"] {\n    font-family: 'Quantico', sans-serif;\n    font-size: 1.8rem;\n    font-weight: bold;\n    padding: 0.5rem;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n}\n\n.biggest_box_2 {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n    height: 100vh;\n    grid-template-columns: clamp(20%, 25%, 28%);\n    grid-template-rows: clamp(12%, 20%, 25%), clamp(25%, 39%, 40%), clamp(25%, 39%, 40%), clamp(25%, 39%, 40%);\n    background-color: rgb(188, 117, 255);\n}\n\n.box_apps, .box_entrees, .box_desserts {\n    display: grid;\n    grid-template-columns: repeat(2, 50%);\n    grid-template-rows: repeat(2, 50%);\n}\n\ndiv[id^=\"ent_\"], div[id^=\"app_\"], div[id^=\"dess_\"] {\n    background-color: yellow;\n}\n\ndiv[class*=\"_p2\"] > div {    \n    padding-bottom: 0.4rem;\n    font-family: 'Quicksand', sans-serif;\n    font-size: 1.1rem;\n}\n\ndiv[class*=\"_p2\"] {\n    border: none;\n    background-color: transparent;\n}\n\n.section_1_p2 {\n    grid-row: 2 / 3;\n}\n\n.section_2_p2 {\n    grid-row: 3 / 4;\n}\n\n.section_3_p2 {\n    margin-bottom: 0.7rem;\n    grid-row: 4 / 5;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Itim&family=Paprika&family=Quantico:ital@1&family=Quicksand&display=swap');\n\n:root {\n    text-align: center;\n    font-size: 1.2rem;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n#content {\n    font-family: 'Quicksand', sans-serif;\n    font-weight:bolder;\n    width: 100vw;\n    height: 100vh;\n    max-width:100%;\n}\n\ndiv[class^=\"top_\"] {\n    font-family: 'Paprika', cursive;\n    margin: 0;\n    padding: 0.35rem;\n    border: 0.25rem solid black;\n    position: relative;\n}\n\n@keyframes changeColor {\n    0% {\n        border: 0.25rem solid rgb(181, 141, 255);\n    }\n    25% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n    50% {\n        border: 0.25rem solid rgb(249, 41, 62);\n    }\n    75% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n}\n\ndiv[class^=\"top_\"]:hover {\n    border: 0.25rem solid rgb(158, 105, 255);\n\n    animation-name: changeColor;\n    animation-iteration-count: infinite;\n    animation-duration: 3s;\n}\n\ndiv[class^=\"top_\"]::before, div[class^=\"top_\"]::after {\n    content: '';\n    display: block;\n    position: absolute;\n    background: aquamarine;\n}\n\ndiv[class^=\"top_\"]::before {\n    top: -0.3em; \n    bottom: -0.3em;\n    left: 1em;\n    right: 1em;\n}\n\ndiv[class^=\"top_\"]::after {\n    left: -0.3em;\n    right: -0.3em;\n    top: 1em;\n    bottom: 1em;\n}\n\ndiv[class^=\"corner_\"] {\n    position: relative;\n    z-index: 1;\n}\n\n.topheader {\n    top: 0;\n    width: 100%;\n    height: 9vh;\n    display: flex;\n    justify-content: center;\n    gap: 2rem;\n    align-items: center;\n    background-color: aquamarine;\n}\n\n.bottom_foot {\n    color: white;\n    bottom: 0;\n    width: 100%;\n    height: 5vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: rgb(98, 74, 255);\n    opacity: 0.6;\n}\n\n.under_topheader {\n    background-color: rgb(188, 117, 255);\n}\n\n.biggest_box {\n    background-image: url('./background.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    gap: 0.5rem;\n    height: 100vh;\n    grid-template-columns: clamp(20%, 25%, 28%);\n    grid-template-rows: clamp(12%, 20%, 25%), clamp(25%, 39%, 40%), clamp(25%, 39%, 40%), clamp(12%, 20%, 25%);\n    background-color: rgb(188, 117, 255);\n}\n\ndiv[class^=\"section\"] {\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    display: flex;\n    width: 40vw;\n    flex-direction: column;\n    justify-content: center;\n    justify-self: center;\n    opacity: 0.85;\n    margin-top:1rem;\n    padding-top: 0.3rem;\n    padding-bottom: 0.3rem;\n}\n\ndiv[class^=\"section\"] > div {\n    padding-bottom: 0.4rem;\n}\n\n.headliner_box {\n    font-family: 'Itim', cursive;\n    padding: 0.5rem;\n    grid-row: 1 / 2;\n    display: flex;\n    margin-top: 1rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n}\n\n.section_1 {\n    grid-row: 2 / 3;\n}\n\n.section_1 > div {\n    padding: 0.2rem 1.2rem;\n}\n\n.section_2 {\n    grid-row: 3 / 4;\n}\n\n.section_3 {\n    grid-row: 4 / 5;\n    margin-bottom: 1rem;\n}\n\nh1 {\n    font-size: 2rem;\n    margin: 0 1rem;\n}\n\nh2 {\n    font-family: 'Itim', cursive;\n    font-size: 1.5rem;\n    margin: 0 1rem;\n}\n\n.title-text {\n    font-family: 'Quantico', sans-serif;\n    font-size: 1.8rem;\n    font-weight: bold;\n}\n\nimg {\n    border: 2px solid black;\n    border-radius: 12px;\n    width: 5rem;\n    height: 5rem;\n}\n\na, a:link, a:visited {\n    color: white;\n}\n\na:hover {\n    color:rgb(248, 165, 255) ;\n}\n\na:active {\n    color:aquamarine\n}\n\n/*underneath is page2Load CSS*/\n\n.headliner_box_2 {\n    font-family: 'Itim', cursive;\n    padding: 0.5rem;\n    display: flex;\n    margin-top: 1rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n    grid-row: 1 / 2;\n}\n\nh2[class^=\"title\"] {\n    font-family: 'Quantico', sans-serif;\n    font-size: 1.8rem;\n    font-weight: bold;\n    padding: 0.5rem;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n}\n\n.biggest_box_2 {\n    background-image: url('./background.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n    height: 100vh;\n    grid-template-columns: clamp(20%, 25%, 28%);\n    grid-template-rows: clamp(12%, 20%, 25%), clamp(25%, 39%, 40%), clamp(25%, 39%, 40%), clamp(25%, 39%, 40%);\n    background-color: rgb(188, 117, 255);\n}\n\n.box_apps, .box_entrees, .box_desserts {\n    display: grid;\n    grid-template-columns: repeat(2, 50%);\n    grid-template-rows: repeat(2, 50%);\n}\n\ndiv[id^=\"ent_\"], div[id^=\"app_\"], div[id^=\"dess_\"] {\n    background-color: yellow;\n}\n\ndiv[class*=\"_p2\"] > div {    \n    padding-bottom: 0.4rem;\n    font-family: 'Quicksand', sans-serif;\n    font-size: 1.1rem;\n}\n\ndiv[class*=\"_p2\"] {\n    border: none;\n    background-color: transparent;\n}\n\n.section_1_p2 {\n    grid-row: 2 / 3;\n}\n\n.section_2_p2 {\n    grid-row: 3 / 4;\n}\n\n.section_3_p2 {\n    margin-bottom: 0.7rem;\n    grid-row: 4 / 5;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _page2load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page2load.js */ "./src/page2load.js");
/* harmony import */ var _page3load_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page3load.js */ "./src/page3load.js");




  
(0,_page2load_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

const homeBtn = document.getElementsByClassName("top_home")[0];
homeBtn.addEventListener('click', () => {
    console.log("page1 works");
    const allTheContent = document.getElementById("content")
    allTheContent.textContent = '';
    (0,_pageload_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
})

const menuBtn = document.getElementsByClassName("top_menu")[0];
menuBtn.addEventListener('click', () => {
    console.log("page2 works");
    const allTheContent = document.getElementById("content")
    allTheContent.textContent = '';
    (0,_page2load_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
})

const contactBtn = document.getElementsByClassName("top_contact")[0];
contactBtn.addEventListener('click', () => {
    console.log("page3 works");
    const allTheContent = document.getElementById("content")
    allTheContent.textContent = '';
    (0,_page3load_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
})

/***/ }),

/***/ "./src/page2load.js":
/*!**************************!*\
  !*** ./src/page2load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ page2Load)
/* harmony export */ });
/* harmony import */ var _cook_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cook.jpg */ "./src/cook.jpg");
/* harmony import */ var _brusselsprouts_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brusselsprouts.jpg */ "./src/brusselsprouts.jpg");
/* harmony import */ var _burger_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./burger.jpg */ "./src/burger.jpg");
/* harmony import */ var _cinnamonroll_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cinnamonroll.jpg */ "./src/cinnamonroll.jpg");
/* harmony import */ var _cookie_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cookie.jpg */ "./src/cookie.jpg");
/* harmony import */ var _eggrolls_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eggrolls.jpg */ "./src/eggrolls.jpg");
/* harmony import */ var _frenchtoast_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./frenchtoast.jpg */ "./src/frenchtoast.jpg");
/* harmony import */ var _icecream_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icecream.jpg */ "./src/icecream.jpg");
/* harmony import */ var _pho_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pho.jpg */ "./src/pho.jpg");
/* harmony import */ var _pizza_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pizza.jpg */ "./src/pizza.jpg");
/* harmony import */ var _poke_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./poke.jpg */ "./src/poke.jpg");
/* harmony import */ var _soup_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./soup.jpg */ "./src/soup.jpg");
/* harmony import */ var _steakskewers_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./steakskewers.jpg */ "./src/steakskewers.jpg");














function page2Load() {

    const cookIcon = new Image();
    cookIcon.src = _cook_jpg__WEBPACK_IMPORTED_MODULE_0__;
    const bruss = new Image();
    bruss.src = _brusselsprouts_jpg__WEBPACK_IMPORTED_MODULE_1__;
    const burg = new Image();
    burg.src = _burger_jpg__WEBPACK_IMPORTED_MODULE_2__;
    const cinn = new Image();
    cinn.src = _cinnamonroll_jpg__WEBPACK_IMPORTED_MODULE_3__;
    const cookie = new Image();
    cookie.src = _cookie_jpg__WEBPACK_IMPORTED_MODULE_4__;
    const egg = new Image();
    egg.src = _eggrolls_jpg__WEBPACK_IMPORTED_MODULE_5__;
    const french = new Image();
    french.src = _frenchtoast_jpg__WEBPACK_IMPORTED_MODULE_6__;
    const ice = new Image();
    ice.src = _icecream_jpg__WEBPACK_IMPORTED_MODULE_7__;
    const pho = new Image();
    pho.src = _pho_jpg__WEBPACK_IMPORTED_MODULE_8__;
    const pizza = new Image();
    pizza.src = _pizza_jpg__WEBPACK_IMPORTED_MODULE_9__;
    const poke = new Image();
    poke.src = _poke_jpg__WEBPACK_IMPORTED_MODULE_10__;
    const soup = new Image();
    soup.src = _soup_jpg__WEBPACK_IMPORTED_MODULE_11__;
    const steak = new Image();
    steak.src = _steakskewers_jpg__WEBPACK_IMPORTED_MODULE_12__;

    const headlinerbox = document.createElement("div");
    headlinerbox.className = "headliner_box_2";
    const header = document.createElement("div");
    header.className = "topheader";
    const underheader = document.createElement("div");
    underheader.className = "under_topheader";
    const container = document.createElement("div");
    container.className = "biggest_box_2";
    const section1 = document.createElement("div");
    section1.className = "section_1_p2";
    const section2 = document.createElement("div");
    section2.className = "section_2_p2";
    const section3 = document.createElement("div");
    section3.className = "section_3_p2";

    const header_menu = document.createElement("div");
    header_menu.className = "top_menu";
    const menu_text = document.createElement("div");
    menu_text.className = "corner_textmenu";
    menu_text.innerHTML = "Menu";

    const header_home = document.createElement("div");
    header_home.className = "top_home";
    const home_text = document.createElement("div");
    home_text.className = "corner_texthome";
    home_text.innerHTML = "Home";

    const footer_box = document.createElement("div");
    footer_box.className = "bottom_foot";

    const footer1 = document.createElement("div");
    footer1.innerHTML = 'Photo by&nbsp;<a href="https://unsplash.com/@krisroller?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kristopher Roller</a>&nbsp;on&nbsp;<a href="https://unsplash.com/images/nature/galaxy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';


    const footer2 = document.createElement("div");
    footer2.innerHTML = 'Image by&nbsp;<a href="https://www.freepik.com/free-vector/cute-astronaut-chef-serving-food-cartoon-vector-icon-illustration-science-food-icon-isolated-flat_31348450.htm#query=astronaut%20chef&position=4&from_view=search&track=sph">catalyststuff</a> on Freepik';

    const header_contact = document.createElement("div");
    header_contact.className = "top_contact";
    const contact_text = document.createElement("div");
    contact_text.className = "corner_textcontact";
    contact_text.innerHTML = "Contact";

    const headline = document.createElement("h1");
    headline.className = "headliner"
    headline.innerHTML = "Menu";

    const grid_app_sep = document.createElement("div");
    grid_app_sep.className = "grid_sep_app";
    const grid_ent_sep = document.createElement("div");
    grid_ent_sep.className = "grid_sep_app_ent";
    const grid_dess_sep = document.createElement("div");
    grid_dess_sep.className = "grid_sep_dess";

    const app_box = document.createElement("div");
    app_box.className = "box_apps";
    const entrees_box = document.createElement("div");
    entrees_box.className = "box_entrees";
    const desserts_box = document.createElement("div");
    desserts_box.className = "box_desserts";

    for (let i = 1; i < 5; i++) {
        let boxes_s1 = document.createElement("div");
        boxes_s1.id = "appbox_" + i;
        let app_individual = document.createElement("div");
        app_individual.id = "app_" + i;

        boxes_s1.appendChild(app_individual);
        app_box.appendChild(boxes_s1);

        document.addEventListener("DOMContentLoaded", function(e){
            appbox_1.appendChild(bruss);
            appbox_2.appendChild(soup);
            appbox_3.appendChild(steak);
            appbox_4.appendChild(egg);
            document.getElementById("app_1").innerHTML = "Brussel Sprouts";
            document.getElementById("app_2").innerHTML = "Daily Soup";
            document.getElementById("app_3").innerHTML = "Steak Skewers";
            document.getElementById("app_4").innerHTML = "Egg Rolls";
          });
    }

    for (let x = 1; x < 5; x++) {
        let boxes_s2 = document.createElement("div");
        boxes_s2.id = "entbox_" + x;
        let ent_individual = document.createElement("div");
        ent_individual.id = "ent_" + x;

        boxes_s2.appendChild(ent_individual);
        entrees_box.appendChild(boxes_s2);

        document.addEventListener("DOMContentLoaded", function(e){
            entbox_1.appendChild(burg);
            entbox_2.appendChild(pho);
            entbox_3.appendChild(poke);
            entbox_4.appendChild(pizza);
            document.getElementById("ent_1").innerHTML = "Bacon Burger";
            document.getElementById("ent_2").innerHTML = "Pho";
            document.getElementById("ent_3").innerHTML = "Poke Bowl";
            document.getElementById("ent_4").innerHTML = "Pizza";
          });
    }

    for (let y = 1; y < 5; y++) {
        let boxes_s3 = document.createElement("div");
        boxes_s3.id = "dessbox_" + y;
        let dess_individual = document.createElement("div");
        dess_individual.id = "dess_" + y;

        boxes_s3.appendChild(dess_individual);
        desserts_box.appendChild(boxes_s3);

        document.addEventListener("DOMContentLoaded", function(e){
            dessbox_1.appendChild(french);
            dessbox_2.appendChild(cookie);
            dessbox_3.appendChild(ice);
            dessbox_4.appendChild(cinn);
            document.getElementById("dess_1").innerHTML = "Bacon Burger";
            document.getElementById("dess_2").innerHTML = "Pho";
            document.getElementById("dess_3").innerHTML = "Poke Bowl";
            document.getElementById("dess_4").innerHTML = "Pizza";
          });
    }

    const appetizers_title = document.createElement("h2");
    appetizers_title.className = "title_apps";
    appetizers_title.innerHTML = "Appetizers";

    const entrees_title = document.createElement("h2");
    entrees_title.className = "title_entrees";
    entrees_title.innerHTML = "Entrees";

    const desserts_title = document.createElement("h2");
    desserts_title.className = "title_desserts";
    desserts_title.innerHTML = "Desserts";

    const ent_1 = document.createElement("div");
    ent_1.innerHTML = "EEEE Scrumptious stuff 1";
    const ent_2 = document.createElement("div");
    ent_2.innerHTML = "EEEE Scrumptious stuff 2";
    const ent_3 = document.createElement("div");
    ent_3.innerHTML = "EEEE Scrumptious stuff 3";
    const ent_4 = document.createElement("div");
    ent_4.innerHTML = "EEEE Scrumptious stuff 4";

    const dess_1 = document.createElement("div");
    dess_1.innerHTML = "DDD Scrumptious stuff 1";
    const dess_2 = document.createElement("div");
    dess_2.innerHTML = "DDD Scrumptious stuff 2";
    const dess_3 = document.createElement("div");
    dess_3.innerHTML = "DDD Scrumptious stuff 3";
    const dess_4 = document.createElement("div");
    dess_4.innerHTML = "DDD Scrumptious stuff 4";

    const contentDiv = document.getElementById("content");
    contentDiv.appendChild(header);
    contentDiv.appendChild(underheader);
    contentDiv.appendChild(footer_box);
    footer_box.appendChild(footer1);
    footer_box.appendChild(footer2);
    header_home.appendChild(home_text);
    header_menu.appendChild(menu_text);
    header_contact.appendChild(contact_text);
    header.appendChild(header_home);
    header.appendChild(header_menu);
    header.appendChild(header_contact);
    underheader.appendChild(container);
    container.appendChild(headlinerbox);
    headlinerbox.appendChild(cookIcon);
    headlinerbox.appendChild(headline);

    container.appendChild(grid_app_sep);
    grid_app_sep.appendChild(section1);
    section1.appendChild(appetizers_title);
    section1.appendChild(app_box);
    
    container.appendChild(grid_ent_sep);
    grid_ent_sep.appendChild(section2);
    section2.appendChild(entrees_title);
    section2.appendChild(entrees_box);

    container.appendChild(grid_dess_sep);
    grid_dess_sep.appendChild(section3);
    section3.appendChild(desserts_title);
    section3.appendChild(desserts_box);
}

/* 
Photo by <a href="https://unsplash.com/@raphaellovaski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Raphael Lovaski</a> on <a href="https://unsplash.com/photos/Nag3E3yzygU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>


Photo by <a href="https://unsplash.com/@amir_v_ali?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">amirali mirhashemian</a> on <a href="https://unsplash.com/photos/x6VuEH2npHw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

Photo by <a href="https://unsplash.com/@otjep?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Yosep Sugiarto</a> on <a href="https://unsplash.com/photos/1PEqqv4i2iM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Photo by <a href="https://unsplash.com/@photophotostock?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kirill Tonkikh</a> on <a href="https://unsplash.com/photos/NFQi_2HUNRI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

Photo by <a href="https://unsplash.com/@phototastyfood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Food Photographer</a> on <a href="https://unsplash.com/photos/Sekm9_nC2BM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Photo by <a href="https://unsplash.com/ja/@aurel__lens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aurélien Lemasson-Théobald</a> on <a href="https://unsplash.com/photos/x00CzBt4Dfk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

Photo by <a href="https://unsplash.com/@korie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Korie Cull</a> on <a href="https://unsplash.com/photos/lfhBa3Ye3lo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Photo by <a href="https://unsplash.com/@moniqa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Monika Grabkowska</a> on <a href="https://unsplash.com/photos/_y6A9bhILkM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Photo by <a href="https://unsplash.com/@miracletwentyone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joseph Gonzalez</a> on <a href="https://unsplash.com/photos/zcUgjyqEwe8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Photo by <a href="https://unsplash.com/@kyndallramirez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kyndall Ramirez</a> on <a href="https://unsplash.com/photos/3HpyvyPCjPA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

Photo by <a href="https://unsplash.com/@sebastiancoman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sebastian Coman Photography</a> on <a href="https://unsplash.com/photos/RCyXyaim87Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
   */

/***/ }),

/***/ "./src/page3load.js":
/*!**************************!*\
  !*** ./src/page3load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ page3Load)
/* harmony export */ });
//import Icon from './cook.jpg';

function page3Load() {

    const headlinerbox = document.createElement("div");
    headlinerbox.className = "headliner_box_2";
    const header = document.createElement("div");
    header.className = "topheader";
    const underheader = document.createElement("div");
    underheader.className = "under_topheader";
    const container = document.createElement("div");
    container.className = "biggest_box_2";
    const section1 = document.createElement("div");
    section1.className = "section_1_p2";
    const section2 = document.createElement("div");
    section2.className = "section_2_p2";
    const section3 = document.createElement("div");
    section3.className = "section_3_p2";

    const header_menu = document.createElement("div");
    header_menu.className = "top_menu";
    const menu_text = document.createElement("div");
    menu_text.className = "corner_textmenu";
    menu_text.innerHTML = "Menu";

    const header_home = document.createElement("div");
    header_home.className = "top_home";
    const home_text = document.createElement("div");
    home_text.className = "corner_texthome";
    home_text.innerHTML = "Home";

    const footer_box = document.createElement("div");
    footer_box.className = "bottom_foot";

    const footer1 = document.createElement("div");
    footer1.innerHTML = 'Photo by&nbsp;<a href="https://unsplash.com/@krisroller?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kristopher Roller</a>&nbsp;on&nbsp;<a href="https://unsplash.com/images/nature/galaxy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';


    const footer2 = document.createElement("div");
    footer2.innerHTML = 'Image by&nbsp;<a href="https://www.freepik.com/free-vector/cute-astronaut-chef-serving-food-cartoon-vector-icon-illustration-science-food-icon-isolated-flat_31348450.htm#query=astronaut%20chef&position=4&from_view=search&track=sph">catalyststuff</a> on Freepik';

    const header_contact = document.createElement("div");
    header_contact.className = "top_contact";
    const contact_text = document.createElement("div");
    contact_text.className = "corner_textcontact";
    contact_text.innerHTML = "Contact";

    const headline = document.createElement("h1");
    headline.className = "headliner"
    headline.innerHTML = "Menu";

    const grid_app_sep = document.createElement("div");
    grid_app_sep.className = "grid_sep_app";
    const grid_ent_sep = document.createElement("div");
    grid_ent_sep.className = "grid_sep_app_ent";
    const grid_dess_sep = document.createElement("div");
    grid_dess_sep.className = "grid_sep_dess";


    const app_box = document.createElement("div");
    app_box.className = "box_apps";
    const entrees_box = document.createElement("div");
    entrees_box.className = "box_entrees";
    const desserts_box = document.createElement("div");
    desserts_box.className = "box_desserts";

    const appetizers_title = document.createElement("h2");
    appetizers_title.className = "title_apps";
    appetizers_title.innerHTML = "Appetizers";

    const entrees_title = document.createElement("h2");
    entrees_title.className = "title_entrees";
    entrees_title.innerHTML = "Entrees";

    const desserts_title = document.createElement("h2");
    desserts_title.className = "title_desserts";
    desserts_title.innerHTML = "Desserts";

    const app_1 = document.createElement("div");
    app_1.innerHTML = "Scrumptious stuff 1";
    const app_2 = document.createElement("div");
    app_2.innerHTML = "Scrumptious stuff 2";
    const app_3 = document.createElement("div");
    app_3.innerHTML = "Scrumptious stuff 3";
    const app_4 = document.createElement("div");
    app_4.innerHTML = "Scrumptious stuff 4";

    const ent_1 = document.createElement("div");
    ent_1.innerHTML = "EEEE Scrumptious stuff 1";
    const ent_2 = document.createElement("div");
    ent_2.innerHTML = "EEEE Scrumptious stuff 2";
    const ent_3 = document.createElement("div");
    ent_3.innerHTML = "EEEE Scrumptious stuff 3";
    const ent_4 = document.createElement("div");
    ent_4.innerHTML = "EEEE Scrumptious stuff 4";

    const dess_1 = document.createElement("div");
    dess_1.innerHTML = "DDD Scrumptious stuff 1";
    const dess_2 = document.createElement("div");
    dess_2.innerHTML = "DDD Scrumptious stuff 2";
    const dess_3 = document.createElement("div");
    dess_3.innerHTML = "DDD Scrumptious stuff 3";
    const dess_4 = document.createElement("div");
    dess_4.innerHTML = "DDD Scrumptious stuff 4";

    const cookIcon = new Image();
    cookIcon.src = Icon;

    const contentDiv = document.getElementById("content");
    contentDiv.appendChild(header);
    contentDiv.appendChild(underheader);
    contentDiv.appendChild(footer_box);
    footer_box.appendChild(footer1);
    footer_box.appendChild(footer2);
    header_home.appendChild(home_text);
    header_menu.appendChild(menu_text);
    header_contact.appendChild(contact_text);
    header.appendChild(header_home);
    header.appendChild(header_menu);
    header.appendChild(header_contact);
    underheader.appendChild(container);
    container.appendChild(headlinerbox);
    headlinerbox.appendChild(cookIcon);
    headlinerbox.appendChild(headline);
    //

    container.appendChild(grid_app_sep);
    grid_app_sep.appendChild(section1);
    section1.appendChild(appetizers_title);
    section1.appendChild(app_box);
    app_box.appendChild(app_1);
    app_box.appendChild(app_2);
    app_box.appendChild(app_3);
    app_box.appendChild(app_4);
    
    
    container.appendChild(grid_ent_sep);
    grid_ent_sep.appendChild(section2);
    section2.appendChild(entrees_title);
    section2.appendChild(entrees_box);
    entrees_box.appendChild(ent_1);
    entrees_box.appendChild(ent_2);
    entrees_box.appendChild(ent_3);
    entrees_box.appendChild(ent_4);

    container.appendChild(grid_dess_sep);
    grid_dess_sep.appendChild(section3);
    section3.appendChild(desserts_title);
    section3.appendChild(desserts_box);
    desserts_box.appendChild(dess_1);
    desserts_box.appendChild(dess_2);
    desserts_box.appendChild(dess_3);
    desserts_box.appendChild(dess_4);
}


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

    const footer_box = document.createElement("div");
    footer_box.className = "bottom_foot";

    const footer1 = document.createElement("div");
    footer1.innerHTML = 'Photo by&nbsp;<a href="https://unsplash.com/@krisroller?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kristopher Roller</a>&nbsp;on&nbsp;<a href="https://unsplash.com/images/nature/galaxy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';


    const footer2 = document.createElement("div");
    footer2.innerHTML = 'Image by&nbsp;<a href="https://www.freepik.com/free-vector/cute-astronaut-chef-serving-food-cartoon-vector-icon-illustration-science-food-icon-isolated-flat_31348450.htm#query=astronaut%20chef&position=4&from_view=search&track=sph">catalyststuff</a> on Freepik';

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
    contentDiv.appendChild(footer_box);
    footer_box.appendChild(footer1);
    footer_box.appendChild(footer2);
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

/***/ "./src/brusselsprouts.jpg":
/*!********************************!*\
  !*** ./src/brusselsprouts.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b686e56b495564c45d86.jpg";

/***/ }),

/***/ "./src/burger.jpg":
/*!************************!*\
  !*** ./src/burger.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf75db6223724e1659bc.jpg";

/***/ }),

/***/ "./src/chef.jpg":
/*!**********************!*\
  !*** ./src/chef.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60d551524b662ba67d0f.jpg";

/***/ }),

/***/ "./src/cinnamonroll.jpg":
/*!******************************!*\
  !*** ./src/cinnamonroll.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f8c4c78fd4c4b725a205.jpg";

/***/ }),

/***/ "./src/cook.jpg":
/*!**********************!*\
  !*** ./src/cook.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11e4c84ddd5b4a3e7638.jpg";

/***/ }),

/***/ "./src/cookie.jpg":
/*!************************!*\
  !*** ./src/cookie.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ea7db092e2d670a9533.jpg";

/***/ }),

/***/ "./src/eggrolls.jpg":
/*!**************************!*\
  !*** ./src/eggrolls.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc30d43513aabe129880.jpg";

/***/ }),

/***/ "./src/frenchtoast.jpg":
/*!*****************************!*\
  !*** ./src/frenchtoast.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa06a4e8816ba3341b9c.jpg";

/***/ }),

/***/ "./src/icecream.jpg":
/*!**************************!*\
  !*** ./src/icecream.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8561f18dc0e14e6f978.jpg";

/***/ }),

/***/ "./src/pho.jpg":
/*!*********************!*\
  !*** ./src/pho.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a51c5c784e2772158a48.jpg";

/***/ }),

/***/ "./src/pizza.jpg":
/*!***********************!*\
  !*** ./src/pizza.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c1a16baefa44c8fa9264.jpg";

/***/ }),

/***/ "./src/poke.jpg":
/*!**********************!*\
  !*** ./src/poke.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9708a09c0fead0f6de63.jpg";

/***/ }),

/***/ "./src/soup.jpg":
/*!**********************!*\
  !*** ./src/soup.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b1876af837306de8da68.jpg";

/***/ }),

/***/ "./src/steakskewers.jpg":
/*!******************************!*\
  !*** ./src/steakskewers.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f35e899da75d66af517a.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLE1BQU0sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxh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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsUUE7O0FBRWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVDQUF1Qyx5SUFBeUksUUFBUTs7O0FBR3hMO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pKOEI7O0FBRWY7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVDQUF1Qyx5SUFBeUksUUFBUTs7O0FBR3hMO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsc0NBQUk7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9zcmMvcGFnZTJsb2FkLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL3NyYy9wYWdlM2xvYWQuanMiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vc3JjL3BhZ2Vsb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JdGltJmZhbWlseT1QYXByaWthJmZhbWlseT1RdWFudGljbzppdGFsQDEmZmFtaWx5PVF1aWNrc2FuZCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1heC13aWR0aDoxMDAlO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJ0b3BfXFxcIl0ge1xcbiAgICBmb250LWZhbWlseTogJ1BhcHJpa2EnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAuMzVyZW07XFxuICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCBibGFjaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNoYW5nZUNvbG9yIHtcXG4gICAgMCUge1xcbiAgICAgICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigxODEsIDE0MSwgMjU1KTtcXG4gICAgfVxcbiAgICAyNSUge1xcbiAgICAgICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigyNTUsIDQyLCAyMTIpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDI0OSwgNDEsIDYyKTtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigyNTUsIDQyLCAyMTIpO1xcbiAgICB9XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXTpob3ZlciB7XFxuICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCByZ2IoMTU4LCAxMDUsIDI1NSk7XFxuXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2VDb2xvcjtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXTo6YmVmb3JlLCBkaXZbY2xhc3NePVxcXCJ0b3BfXFxcIl06OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6IGFxdWFtYXJpbmU7XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXTo6YmVmb3JlIHtcXG4gICAgdG9wOiAtMC4zZW07IFxcbiAgICBib3R0b206IC0wLjNlbTtcXG4gICAgbGVmdDogMWVtO1xcbiAgICByaWdodDogMWVtO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJ0b3BfXFxcIl06OmFmdGVyIHtcXG4gICAgbGVmdDogLTAuM2VtO1xcbiAgICByaWdodDogLTAuM2VtO1xcbiAgICB0b3A6IDFlbTtcXG4gICAgYm90dG9tOiAxZW07XFxufVxcblxcbmRpdltjbGFzc149XFxcImNvcm5lcl9cXFwiXSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnRvcGhlYWRlciB7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG4uYm90dG9tX2Zvb3Qge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk4LCA3NCwgMjU1KTtcXG4gICAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG4udW5kZXJfdG9waGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OCwgMTE3LCAyNTUpO1xcbn1cXG5cXG4uYmlnZ2VzdF9ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjbGFtcCgyMCUsIDI1JSwgMjglKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBjbGFtcCgxMiUsIDIwJSwgMjUlKSwgY2xhbXAoMjUlLCAzOSUsIDQwJSksIGNsYW1wKDI1JSwgMzklLCA0MCUpLCBjbGFtcCgxMiUsIDIwJSwgMjUlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OCwgMTE3LCAyNTUpO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJzZWN0aW9uXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMC44NTtcXG4gICAgbWFyZ2luLXRvcDoxcmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJzZWN0aW9uXFxcIl0gPiBkaXYge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xcbn1cXG5cXG4uaGVhZGxpbmVyX2JveCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSXRpbScsIGN1cnNpdmU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbn1cXG5cXG4uc2VjdGlvbl8xIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uc2VjdGlvbl8xID4gZGl2IHtcXG4gICAgcGFkZGluZzogMC4ycmVtIDEuMnJlbTtcXG59XFxuXFxuLnNlY3Rpb25fMiB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLnNlY3Rpb25fMyB7XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSXRpbScsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG59XFxuXFxuLnRpdGxlLXRleHQge1xcbiAgICBmb250LWZhbWlseTogJ1F1YW50aWNvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5pbWcge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGhlaWdodDogNXJlbTtcXG59XFxuXFxuYSwgYTpsaW5rLCBhOnZpc2l0ZWQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgICBjb2xvcjpyZ2IoMjQ4LCAxNjUsIDI1NSkgO1xcbn1cXG5cXG5hOmFjdGl2ZSB7XFxuICAgIGNvbG9yOmFxdWFtYXJpbmVcXG59XFxuXFxuLyp1bmRlcm5lYXRoIGlzIHBhZ2UyTG9hZCBDU1MqL1xcblxcbi5oZWFkbGluZXJfYm94XzIge1xcbiAgICBmb250LWZhbWlseTogJ0l0aW0nLCBjdXJzaXZlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuaDJbY2xhc3NePVxcXCJ0aXRsZVxcXCJdIHtcXG4gICAgZm9udC1mYW1pbHk6ICdRdWFudGljbycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmJpZ2dlc3RfYm94XzIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2xhbXAoMjAlLCAyNSUsIDI4JSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogY2xhbXAoMTIlLCAyMCUsIDI1JSksIGNsYW1wKDI1JSwgMzklLCA0MCUpLCBjbGFtcCgyNSUsIDM5JSwgNDAlKSwgY2xhbXAoMjUlLCAzOSUsIDQwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODgsIDExNywgMjU1KTtcXG59XFxuXFxuLmJveF9hcHBzLCAuYm94X2VudHJlZXMsIC5ib3hfZGVzc2VydHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA1MCUpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA1MCUpO1xcbn1cXG5cXG5kaXZbaWRePVxcXCJlbnRfXFxcIl0sIGRpdltpZF49XFxcImFwcF9cXFwiXSwgZGl2W2lkXj1cXFwiZGVzc19cXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuZGl2W2NsYXNzKj1cXFwiX3AyXFxcIl0gPiBkaXYgeyAgICBcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuZGl2W2NsYXNzKj1cXFwiX3AyXFxcIl0ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2VjdGlvbl8xX3AyIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uc2VjdGlvbl8yX3AyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uc2VjdGlvbl8zX3AyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksd0NBQXdDO0lBQzVDO0lBQ0E7UUFDSSx1Q0FBdUM7SUFDM0M7SUFDQTtRQUNJLHNDQUFzQztJQUMxQztJQUNBO1FBQ0ksdUNBQXVDO0lBQzNDO0FBQ0o7O0FBRUE7SUFDSSx3Q0FBd0M7O0lBRXhDLDJCQUEyQjtJQUMzQixtQ0FBbUM7SUFDbkMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lB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IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JdGltJmZhbWlseT1QYXByaWthJmZhbWlseT1RdWFudGljbzppdGFsQDEmZmFtaWx5PVF1aWNrc2FuZCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDpib2xkZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWF4LXdpZHRoOjEwMCU7XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUGFwcmlrYScsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMC4zNXJlbTtcXG4gICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIGJsYWNrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbkBrZXlmcmFtZXMgY2hhbmdlQ29sb3Ige1xcbiAgICAwJSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDE4MSwgMTQxLCAyNTUpO1xcbiAgICB9XFxuICAgIDI1JSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDI1NSwgNDIsIDIxMik7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCByZ2IoMjQ5LCA0MSwgNjIpO1xcbiAgICB9XFxuICAgIDc1JSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDI1NSwgNDIsIDIxMik7XFxuICAgIH1cXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwidG9wX1xcXCJdOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigxNTgsIDEwNSwgMjU1KTtcXG5cXG4gICAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUNvbG9yO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwidG9wX1xcXCJdOjpiZWZvcmUsIGRpdltjbGFzc149XFxcInRvcF9cXFwiXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogYXF1YW1hcmluZTtcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwidG9wX1xcXCJdOjpiZWZvcmUge1xcbiAgICB0b3A6IC0wLjNlbTsgXFxuICAgIGJvdHRvbTogLTAuM2VtO1xcbiAgICBsZWZ0OiAxZW07XFxuICAgIHJpZ2h0OiAxZW07XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXTo6YWZ0ZXIge1xcbiAgICBsZWZ0OiAtMC4zZW07XFxuICAgIHJpZ2h0OiAtMC4zZW07XFxuICAgIHRvcDogMWVtO1xcbiAgICBib3R0b206IDFlbTtcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwiY29ybmVyX1xcXCJdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udG9waGVhZGVyIHtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA5dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcbi5ib3R0b21fZm9vdCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTgsIDc0LCAyNTUpO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi51bmRlcl90b3BoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg4LCAxMTcsIDI1NSk7XFxufVxcblxcbi5iaWdnZXN0X2JveCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9iYWNrZ3JvdW5kLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjbGFtcCgyMCUsIDI1JSwgMjglKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBjbGFtcCgxMiUsIDIwJSwgMjUlKSwgY2xhbXAoMjUlLCAzOSUsIDQwJSksIGNsYW1wKDI1JSwgMzklLCA0MCUpLCBjbGFtcCgxMiUsIDIwJSwgMjUlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OCwgMTE3LCAyNTUpO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJzZWN0aW9uXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMC44NTtcXG4gICAgbWFyZ2luLXRvcDoxcmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJzZWN0aW9uXFxcIl0gPiBkaXYge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xcbn1cXG5cXG4uaGVhZGxpbmVyX2JveCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSXRpbScsIGN1cnNpdmU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbn1cXG5cXG4uc2VjdGlvbl8xIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uc2VjdGlvbl8xID4gZGl2IHtcXG4gICAgcGFkZGluZzogMC4ycmVtIDEuMnJlbTtcXG59XFxuXFxuLnNlY3Rpb25fMiB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLnNlY3Rpb25fMyB7XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSXRpbScsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG59XFxuXFxuLnRpdGxlLXRleHQge1xcbiAgICBmb250LWZhbWlseTogJ1F1YW50aWNvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5pbWcge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGhlaWdodDogNXJlbTtcXG59XFxuXFxuYSwgYTpsaW5rLCBhOnZpc2l0ZWQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgICBjb2xvcjpyZ2IoMjQ4LCAxNjUsIDI1NSkgO1xcbn1cXG5cXG5hOmFjdGl2ZSB7XFxuICAgIGNvbG9yOmFxdWFtYXJpbmVcXG59XFxuXFxuLyp1bmRlcm5lYXRoIGlzIHBhZ2UyTG9hZCBDU1MqL1xcblxcbi5oZWFkbGluZXJfYm94XzIge1xcbiAgICBmb250LWZhbWlseTogJ0l0aW0nLCBjdXJzaXZlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuaDJbY2xhc3NePVxcXCJ0aXRsZVxcXCJdIHtcXG4gICAgZm9udC1mYW1pbHk6ICdRdWFudGljbycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmJpZ2dlc3RfYm94XzIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYmFja2dyb3VuZC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNsYW1wKDIwJSwgMjUlLCAyOCUpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGNsYW1wKDEyJSwgMjAlLCAyNSUpLCBjbGFtcCgyNSUsIDM5JSwgNDAlKSwgY2xhbXAoMjUlLCAzOSUsIDQwJSksIGNsYW1wKDI1JSwgMzklLCA0MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg4LCAxMTcsIDI1NSk7XFxufVxcblxcbi5ib3hfYXBwcywgLmJveF9lbnRyZWVzLCAuYm94X2Rlc3NlcnRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNTAlKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNTAlKTtcXG59XFxuXFxuZGl2W2lkXj1cXFwiZW50X1xcXCJdLCBkaXZbaWRePVxcXCJhcHBfXFxcIl0sIGRpdltpZF49XFxcImRlc3NfXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbmRpdltjbGFzcyo9XFxcIl9wMlxcXCJdID4gZGl2IHsgICAgXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmRpdltjbGFzcyo9XFxcIl9wMlxcXCJdIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNlY3Rpb25fMV9wMiB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLnNlY3Rpb25fMl9wMiB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLnNlY3Rpb25fM19wMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgcGFnZUxvYWQgZnJvbSAnLi9wYWdlbG9hZC5qcyc7XG5pbXBvcnQgcGFnZTJMb2FkIGZyb20gJy4vcGFnZTJsb2FkLmpzJztcbmltcG9ydCBwYWdlM0xvYWQgZnJvbSAnLi9wYWdlM2xvYWQuanMnO1xuICBcbnBhZ2UyTG9hZCgpO1xuXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvcF9ob21lXCIpWzBdO1xuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInBhZ2UxIHdvcmtzXCIpO1xuICAgIGNvbnN0IGFsbFRoZUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcbiAgICBhbGxUaGVDb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgcGFnZUxvYWQoKTtcbn0pXG5cbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9wX21lbnVcIilbMF07XG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicGFnZTIgd29ya3NcIik7XG4gICAgY29uc3QgYWxsVGhlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuICAgIGFsbFRoZUNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICBwYWdlMkxvYWQoKTtcbn0pXG5cbmNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9wX2NvbnRhY3RcIilbMF07XG5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicGFnZTMgd29ya3NcIik7XG4gICAgY29uc3QgYWxsVGhlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuICAgIGFsbFRoZUNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICBwYWdlM0xvYWQoKTtcbn0pIiwiaW1wb3J0IEljb24gZnJvbSAnLi9jb29rLmpwZyc7XG5pbXBvcnQgQnJ1c3MgZnJvbSAnLi9icnVzc2Vsc3Byb3V0cy5qcGcnO1xuaW1wb3J0IEJ1cmdlciBmcm9tICcuL2J1cmdlci5qcGcnO1xuaW1wb3J0IENpbm4gZnJvbSAnLi9jaW5uYW1vbnJvbGwuanBnJztcbmltcG9ydCBDb29raWUgZnJvbSAnLi9jb29raWUuanBnJztcbmltcG9ydCBFZ2dyb2xsIGZyb20gJy4vZWdncm9sbHMuanBnJztcbmltcG9ydCBGcmVuY2ggZnJvbSAnLi9mcmVuY2h0b2FzdC5qcGcnO1xuaW1wb3J0IEljZWNyZWFtIGZyb20gJy4vaWNlY3JlYW0uanBnJztcbmltcG9ydCBQaG8gZnJvbSAnLi9waG8uanBnJztcbmltcG9ydCBQaXp6YSBmcm9tICcuL3BpenphLmpwZyc7XG5pbXBvcnQgUG9rZSBmcm9tICcuL3Bva2UuanBnJztcbmltcG9ydCBTb3VwIGZyb20gJy4vc291cC5qcGcnO1xuaW1wb3J0IFN0ZWFrIGZyb20gJy4vc3RlYWtza2V3ZXJzLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2UyTG9hZCgpIHtcblxuICAgIGNvbnN0IGNvb2tJY29uID0gbmV3IEltYWdlKCk7XG4gICAgY29va0ljb24uc3JjID0gSWNvbjtcbiAgICBjb25zdCBicnVzcyA9IG5ldyBJbWFnZSgpO1xuICAgIGJydXNzLnNyYyA9IEJydXNzO1xuICAgIGNvbnN0IGJ1cmcgPSBuZXcgSW1hZ2UoKTtcbiAgICBidXJnLnNyYyA9IEJ1cmdlcjtcbiAgICBjb25zdCBjaW5uID0gbmV3IEltYWdlKCk7XG4gICAgY2lubi5zcmMgPSBDaW5uO1xuICAgIGNvbnN0IGNvb2tpZSA9IG5ldyBJbWFnZSgpO1xuICAgIGNvb2tpZS5zcmMgPSBDb29raWU7XG4gICAgY29uc3QgZWdnID0gbmV3IEltYWdlKCk7XG4gICAgZWdnLnNyYyA9IEVnZ3JvbGw7XG4gICAgY29uc3QgZnJlbmNoID0gbmV3IEltYWdlKCk7XG4gICAgZnJlbmNoLnNyYyA9IEZyZW5jaDtcbiAgICBjb25zdCBpY2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpY2Uuc3JjID0gSWNlY3JlYW07XG4gICAgY29uc3QgcGhvID0gbmV3IEltYWdlKCk7XG4gICAgcGhvLnNyYyA9IFBobztcbiAgICBjb25zdCBwaXp6YSA9IG5ldyBJbWFnZSgpO1xuICAgIHBpenphLnNyYyA9IFBpenphO1xuICAgIGNvbnN0IHBva2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBwb2tlLnNyYyA9IFBva2U7XG4gICAgY29uc3Qgc291cCA9IG5ldyBJbWFnZSgpO1xuICAgIHNvdXAuc3JjID0gU291cDtcbiAgICBjb25zdCBzdGVhayA9IG5ldyBJbWFnZSgpO1xuICAgIHN0ZWFrLnNyYyA9IFN0ZWFrO1xuXG4gICAgY29uc3QgaGVhZGxpbmVyYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkbGluZXJib3guY2xhc3NOYW1lID0gXCJoZWFkbGluZXJfYm94XzJcIjtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSBcInRvcGhlYWRlclwiO1xuICAgIGNvbnN0IHVuZGVyaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB1bmRlcmhlYWRlci5jbGFzc05hbWUgPSBcInVuZGVyX3RvcGhlYWRlclwiO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYmlnZ2VzdF9ib3hfMlwiO1xuICAgIGNvbnN0IHNlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMS5jbGFzc05hbWUgPSBcInNlY3Rpb25fMV9wMlwiO1xuICAgIGNvbnN0IHNlY3Rpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMi5jbGFzc05hbWUgPSBcInNlY3Rpb25fMl9wMlwiO1xuICAgIGNvbnN0IHNlY3Rpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMy5jbGFzc05hbWUgPSBcInNlY3Rpb25fM19wMlwiO1xuXG4gICAgY29uc3QgaGVhZGVyX21lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcl9tZW51LmNsYXNzTmFtZSA9IFwidG9wX21lbnVcIjtcbiAgICBjb25zdCBtZW51X3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVfdGV4dC5jbGFzc05hbWUgPSBcImNvcm5lcl90ZXh0bWVudVwiO1xuICAgIG1lbnVfdGV4dC5pbm5lckhUTUwgPSBcIk1lbnVcIjtcblxuICAgIGNvbnN0IGhlYWRlcl9ob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfaG9tZS5jbGFzc05hbWUgPSBcInRvcF9ob21lXCI7XG4gICAgY29uc3QgaG9tZV90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lX3RleHQuY2xhc3NOYW1lID0gXCJjb3JuZXJfdGV4dGhvbWVcIjtcbiAgICBob21lX3RleHQuaW5uZXJIVE1MID0gXCJIb21lXCI7XG5cbiAgICBjb25zdCBmb290ZXJfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXJfYm94LmNsYXNzTmFtZSA9IFwiYm90dG9tX2Zvb3RcIjtcblxuICAgIGNvbnN0IGZvb3RlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3RlcjEuaW5uZXJIVE1MID0gJ1Bob3RvIGJ5Jm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0Brcmlzcm9sbGVyP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPktyaXN0b3BoZXIgUm9sbGVyPC9hPiZuYnNwO29uJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL2ltYWdlcy9uYXR1cmUvZ2FsYXh5P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPic7XG5cblxuICAgIGNvbnN0IGZvb3RlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3RlcjIuaW5uZXJIVE1MID0gJ0ltYWdlIGJ5Jm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL2N1dGUtYXN0cm9uYXV0LWNoZWYtc2VydmluZy1mb29kLWNhcnRvb24tdmVjdG9yLWljb24taWxsdXN0cmF0aW9uLXNjaWVuY2UtZm9vZC1pY29uLWlzb2xhdGVkLWZsYXRfMzEzNDg0NTAuaHRtI3F1ZXJ5PWFzdHJvbmF1dCUyMGNoZWYmcG9zaXRpb249NCZmcm9tX3ZpZXc9c2VhcmNoJnRyYWNrPXNwaFwiPmNhdGFseXN0c3R1ZmY8L2E+IG9uIEZyZWVwaWsnO1xuXG4gICAgY29uc3QgaGVhZGVyX2NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcl9jb250YWN0LmNsYXNzTmFtZSA9IFwidG9wX2NvbnRhY3RcIjtcbiAgICBjb25zdCBjb250YWN0X3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RfdGV4dC5jbGFzc05hbWUgPSBcImNvcm5lcl90ZXh0Y29udGFjdFwiO1xuICAgIGNvbnRhY3RfdGV4dC5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcblxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRsaW5lLmNsYXNzTmFtZSA9IFwiaGVhZGxpbmVyXCJcbiAgICBoZWFkbGluZS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcblxuICAgIGNvbnN0IGdyaWRfYXBwX3NlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3JpZF9hcHBfc2VwLmNsYXNzTmFtZSA9IFwiZ3JpZF9zZXBfYXBwXCI7XG4gICAgY29uc3QgZ3JpZF9lbnRfc2VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncmlkX2VudF9zZXAuY2xhc3NOYW1lID0gXCJncmlkX3NlcF9hcHBfZW50XCI7XG4gICAgY29uc3QgZ3JpZF9kZXNzX3NlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3JpZF9kZXNzX3NlcC5jbGFzc05hbWUgPSBcImdyaWRfc2VwX2Rlc3NcIjtcblxuICAgIGNvbnN0IGFwcF9ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFwcF9ib3guY2xhc3NOYW1lID0gXCJib3hfYXBwc1wiO1xuICAgIGNvbnN0IGVudHJlZXNfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlbnRyZWVzX2JveC5jbGFzc05hbWUgPSBcImJveF9lbnRyZWVzXCI7XG4gICAgY29uc3QgZGVzc2VydHNfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNzZXJ0c19ib3guY2xhc3NOYW1lID0gXCJib3hfZGVzc2VydHNcIjtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgIGxldCBib3hlc19zMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveGVzX3MxLmlkID0gXCJhcHBib3hfXCIgKyBpO1xuICAgICAgICBsZXQgYXBwX2luZGl2aWR1YWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhcHBfaW5kaXZpZHVhbC5pZCA9IFwiYXBwX1wiICsgaTtcblxuICAgICAgICBib3hlc19zMS5hcHBlbmRDaGlsZChhcHBfaW5kaXZpZHVhbCk7XG4gICAgICAgIGFwcF9ib3guYXBwZW5kQ2hpbGQoYm94ZXNfczEpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgYXBwYm94XzEuYXBwZW5kQ2hpbGQoYnJ1c3MpO1xuICAgICAgICAgICAgYXBwYm94XzIuYXBwZW5kQ2hpbGQoc291cCk7XG4gICAgICAgICAgICBhcHBib3hfMy5hcHBlbmRDaGlsZChzdGVhayk7XG4gICAgICAgICAgICBhcHBib3hfNC5hcHBlbmRDaGlsZChlZ2cpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBfMVwiKS5pbm5lckhUTUwgPSBcIkJydXNzZWwgU3Byb3V0c1wiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBfMlwiKS5pbm5lckhUTUwgPSBcIkRhaWx5IFNvdXBcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXzNcIikuaW5uZXJIVE1MID0gXCJTdGVhayBTa2V3ZXJzXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcF80XCIpLmlubmVySFRNTCA9IFwiRWdnIFJvbGxzXCI7XG4gICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgeCA9IDE7IHggPCA1OyB4KyspIHtcbiAgICAgICAgbGV0IGJveGVzX3MyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94ZXNfczIuaWQgPSBcImVudGJveF9cIiArIHg7XG4gICAgICAgIGxldCBlbnRfaW5kaXZpZHVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGVudF9pbmRpdmlkdWFsLmlkID0gXCJlbnRfXCIgKyB4O1xuXG4gICAgICAgIGJveGVzX3MyLmFwcGVuZENoaWxkKGVudF9pbmRpdmlkdWFsKTtcbiAgICAgICAgZW50cmVlc19ib3guYXBwZW5kQ2hpbGQoYm94ZXNfczIpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZW50Ym94XzEuYXBwZW5kQ2hpbGQoYnVyZyk7XG4gICAgICAgICAgICBlbnRib3hfMi5hcHBlbmRDaGlsZChwaG8pO1xuICAgICAgICAgICAgZW50Ym94XzMuYXBwZW5kQ2hpbGQocG9rZSk7XG4gICAgICAgICAgICBlbnRib3hfNC5hcHBlbmRDaGlsZChwaXp6YSk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVudF8xXCIpLmlubmVySFRNTCA9IFwiQmFjb24gQnVyZ2VyXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVudF8yXCIpLmlubmVySFRNTCA9IFwiUGhvXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVudF8zXCIpLmlubmVySFRNTCA9IFwiUG9rZSBCb3dsXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVudF80XCIpLmlubmVySFRNTCA9IFwiUGl6emFcIjtcbiAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCB5ID0gMTsgeSA8IDU7IHkrKykge1xuICAgICAgICBsZXQgYm94ZXNfczMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3hlc19zMy5pZCA9IFwiZGVzc2JveF9cIiArIHk7XG4gICAgICAgIGxldCBkZXNzX2luZGl2aWR1YWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkZXNzX2luZGl2aWR1YWwuaWQgPSBcImRlc3NfXCIgKyB5O1xuXG4gICAgICAgIGJveGVzX3MzLmFwcGVuZENoaWxkKGRlc3NfaW5kaXZpZHVhbCk7XG4gICAgICAgIGRlc3NlcnRzX2JveC5hcHBlbmRDaGlsZChib3hlc19zMyk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBkZXNzYm94XzEuYXBwZW5kQ2hpbGQoZnJlbmNoKTtcbiAgICAgICAgICAgIGRlc3Nib3hfMi5hcHBlbmRDaGlsZChjb29raWUpO1xuICAgICAgICAgICAgZGVzc2JveF8zLmFwcGVuZENoaWxkKGljZSk7XG4gICAgICAgICAgICBkZXNzYm94XzQuYXBwZW5kQ2hpbGQoY2lubik7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc3NfMVwiKS5pbm5lckhUTUwgPSBcIkJhY29uIEJ1cmdlclwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNzXzJcIikuaW5uZXJIVE1MID0gXCJQaG9cIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzc18zXCIpLmlubmVySFRNTCA9IFwiUG9rZSBCb3dsXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc3NfNFwiKS5pbm5lckhUTUwgPSBcIlBpenphXCI7XG4gICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYXBwZXRpemVyc190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBhcHBldGl6ZXJzX3RpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVfYXBwc1wiO1xuICAgIGFwcGV0aXplcnNfdGl0bGUuaW5uZXJIVE1MID0gXCJBcHBldGl6ZXJzXCI7XG5cbiAgICBjb25zdCBlbnRyZWVzX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGVudHJlZXNfdGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZV9lbnRyZWVzXCI7XG4gICAgZW50cmVlc190aXRsZS5pbm5lckhUTUwgPSBcIkVudHJlZXNcIjtcblxuICAgIGNvbnN0IGRlc3NlcnRzX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGRlc3NlcnRzX3RpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVfZGVzc2VydHNcIjtcbiAgICBkZXNzZXJ0c190aXRsZS5pbm5lckhUTUwgPSBcIkRlc3NlcnRzXCI7XG5cbiAgICBjb25zdCBlbnRfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW50XzEuaW5uZXJIVE1MID0gXCJFRUVFIFNjcnVtcHRpb3VzIHN0dWZmIDFcIjtcbiAgICBjb25zdCBlbnRfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW50XzIuaW5uZXJIVE1MID0gXCJFRUVFIFNjcnVtcHRpb3VzIHN0dWZmIDJcIjtcbiAgICBjb25zdCBlbnRfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW50XzMuaW5uZXJIVE1MID0gXCJFRUVFIFNjcnVtcHRpb3VzIHN0dWZmIDNcIjtcbiAgICBjb25zdCBlbnRfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW50XzQuaW5uZXJIVE1MID0gXCJFRUVFIFNjcnVtcHRpb3VzIHN0dWZmIDRcIjtcblxuICAgIGNvbnN0IGRlc3NfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzc18xLmlubmVySFRNTCA9IFwiREREIFNjcnVtcHRpb3VzIHN0dWZmIDFcIjtcbiAgICBjb25zdCBkZXNzXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc3NfMi5pbm5lckhUTUwgPSBcIkRERCBTY3J1bXB0aW91cyBzdHVmZiAyXCI7XG4gICAgY29uc3QgZGVzc18zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNzXzMuaW5uZXJIVE1MID0gXCJEREQgU2NydW1wdGlvdXMgc3R1ZmYgM1wiO1xuICAgIGNvbnN0IGRlc3NfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzc180LmlubmVySFRNTCA9IFwiREREIFNjcnVtcHRpb3VzIHN0dWZmIDRcIjtcblxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodW5kZXJoZWFkZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyX2JveCk7XG4gICAgZm9vdGVyX2JveC5hcHBlbmRDaGlsZChmb290ZXIxKTtcbiAgICBmb290ZXJfYm94LmFwcGVuZENoaWxkKGZvb3RlcjIpO1xuICAgIGhlYWRlcl9ob21lLmFwcGVuZENoaWxkKGhvbWVfdGV4dCk7XG4gICAgaGVhZGVyX21lbnUuYXBwZW5kQ2hpbGQobWVudV90ZXh0KTtcbiAgICBoZWFkZXJfY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0X3RleHQpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJfaG9tZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9tZW51KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX2NvbnRhY3QpO1xuICAgIHVuZGVyaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRsaW5lcmJveCk7XG4gICAgaGVhZGxpbmVyYm94LmFwcGVuZENoaWxkKGNvb2tJY29uKTtcbiAgICBoZWFkbGluZXJib3guYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRfYXBwX3NlcCk7XG4gICAgZ3JpZF9hcHBfc2VwLmFwcGVuZENoaWxkKHNlY3Rpb24xKTtcbiAgICBzZWN0aW9uMS5hcHBlbmRDaGlsZChhcHBldGl6ZXJzX3RpdGxlKTtcbiAgICBzZWN0aW9uMS5hcHBlbmRDaGlsZChhcHBfYm94KTtcbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZF9lbnRfc2VwKTtcbiAgICBncmlkX2VudF9zZXAuYXBwZW5kQ2hpbGQoc2VjdGlvbjIpO1xuICAgIHNlY3Rpb24yLmFwcGVuZENoaWxkKGVudHJlZXNfdGl0bGUpO1xuICAgIHNlY3Rpb24yLmFwcGVuZENoaWxkKGVudHJlZXNfYm94KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkX2Rlc3Nfc2VwKTtcbiAgICBncmlkX2Rlc3Nfc2VwLmFwcGVuZENoaWxkKHNlY3Rpb24zKTtcbiAgICBzZWN0aW9uMy5hcHBlbmRDaGlsZChkZXNzZXJ0c190aXRsZSk7XG4gICAgc2VjdGlvbjMuYXBwZW5kQ2hpbGQoZGVzc2VydHNfYm94KTtcbn1cblxuLyogXG5QaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQHJhcGhhZWxsb3Zhc2tpP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlJhcGhhZWwgTG92YXNraTwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9OYWczRTN5enlnVT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5VbnNwbGFzaDwvYT5cblxuXG5QaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGFtaXJfdl9hbGk/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+YW1pcmFsaSBtaXJoYXNoZW1pYW48L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MveDZWdUVIMm5wSHc/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+VW5zcGxhc2g8L2E+XG4gIFxuXG5QaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQG90amVwP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPllvc2VwIFN1Z2lhcnRvPC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zLzFQRXFxdjRpMmlNP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPlxuICBcblBob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AcGhvdG9waG90b3N0b2NrP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPktpcmlsbCBUb25raWtoPC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL05GUWlfMkhVTlJJP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPlxuICBcblxuUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BwaG90b3Rhc3R5Zm9vZD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5Gb29kIFBob3RvZ3JhcGhlcjwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9TZWttOV9uQzJCTT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5VbnNwbGFzaDwvYT5cbiAgXG5QaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vamEvQGF1cmVsX19sZW5zP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPkF1csOpbGllbiBMZW1hc3Nvbi1UaMOpb2JhbGQ8L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MveDAwQ3pCdDREZms/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+VW5zcGxhc2g8L2E+XG4gIFxuXG5QaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGtvcmllP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPktvcmllIEN1bGw8L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvbGZoQmEzWWUzbG8/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+VW5zcGxhc2g8L2E+XG4gIFxuUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0Btb25pcWE/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+TW9uaWthIEdyYWJrb3dza2E8L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvX3k2QTliaElMa00/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+VW5zcGxhc2g8L2E+XG4gIFxuUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BtaXJhY2xldHdlbnR5b25lP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPkpvc2VwaCBHb256YWxlejwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy96Y1VnanlxRXdlOD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5VbnNwbGFzaDwvYT5cbiAgXG5QaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGt5bmRhbGxyYW1pcmV6P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPkt5bmRhbGwgUmFtaXJlejwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy8zSHB5dnlQQ2pQQT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5VbnNwbGFzaDwvYT5cbiAgXG5cblBob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9Ac2ViYXN0aWFuY29tYW4/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+U2ViYXN0aWFuIENvbWFuIFBob3RvZ3JhcGh5PC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL1JDeVh5YWltODdZP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPlxuICBcbiAgICovIiwiLy9pbXBvcnQgSWNvbiBmcm9tICcuL2Nvb2suanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZTNMb2FkKCkge1xuXG4gICAgY29uc3QgaGVhZGxpbmVyYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkbGluZXJib3guY2xhc3NOYW1lID0gXCJoZWFkbGluZXJfYm94XzJcIjtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSBcInRvcGhlYWRlclwiO1xuICAgIGNvbnN0IHVuZGVyaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB1bmRlcmhlYWRlci5jbGFzc05hbWUgPSBcInVuZGVyX3RvcGhlYWRlclwiO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYmlnZ2VzdF9ib3hfMlwiO1xuICAgIGNvbnN0IHNlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMS5jbGFzc05hbWUgPSBcInNlY3Rpb25fMV9wMlwiO1xuICAgIGNvbnN0IHNlY3Rpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMi5jbGFzc05hbWUgPSBcInNlY3Rpb25fMl9wMlwiO1xuICAgIGNvbnN0IHNlY3Rpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMy5jbGFzc05hbWUgPSBcInNlY3Rpb25fM19wMlwiO1xuXG4gICAgY29uc3QgaGVhZGVyX21lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcl9tZW51LmNsYXNzTmFtZSA9IFwidG9wX21lbnVcIjtcbiAgICBjb25zdCBtZW51X3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVfdGV4dC5jbGFzc05hbWUgPSBcImNvcm5lcl90ZXh0bWVudVwiO1xuICAgIG1lbnVfdGV4dC5pbm5lckhUTUwgPSBcIk1lbnVcIjtcblxuICAgIGNvbnN0IGhlYWRlcl9ob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfaG9tZS5jbGFzc05hbWUgPSBcInRvcF9ob21lXCI7XG4gICAgY29uc3QgaG9tZV90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lX3RleHQuY2xhc3NOYW1lID0gXCJjb3JuZXJfdGV4dGhvbWVcIjtcbiAgICBob21lX3RleHQuaW5uZXJIVE1MID0gXCJIb21lXCI7XG5cbiAgICBjb25zdCBmb290ZXJfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXJfYm94LmNsYXNzTmFtZSA9IFwiYm90dG9tX2Zvb3RcIjtcblxuICAgIGNvbnN0IGZvb3RlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3RlcjEuaW5uZXJIVE1MID0gJ1Bob3RvIGJ5Jm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0Brcmlzcm9sbGVyP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPktyaXN0b3BoZXIgUm9sbGVyPC9hPiZuYnNwO29uJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL2ltYWdlcy9uYXR1cmUvZ2FsYXh5P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPic7XG5cblxuICAgIGNvbnN0IGZvb3RlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3RlcjIuaW5uZXJIVE1MID0gJ0ltYWdlIGJ5Jm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL2N1dGUtYXN0cm9uYXV0LWNoZWYtc2VydmluZy1mb29kLWNhcnRvb24tdmVjdG9yLWljb24taWxsdXN0cmF0aW9uLXNjaWVuY2UtZm9vZC1pY29uLWlzb2xhdGVkLWZsYXRfMzEzNDg0NTAuaHRtI3F1ZXJ5PWFzdHJvbmF1dCUyMGNoZWYmcG9zaXRpb249NCZmcm9tX3ZpZXc9c2VhcmNoJnRyYWNrPXNwaFwiPmNhdGFseXN0c3R1ZmY8L2E+IG9uIEZyZWVwaWsnO1xuXG4gICAgY29uc3QgaGVhZGVyX2NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcl9jb250YWN0LmNsYXNzTmFtZSA9IFwidG9wX2NvbnRhY3RcIjtcbiAgICBjb25zdCBjb250YWN0X3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RfdGV4dC5jbGFzc05hbWUgPSBcImNvcm5lcl90ZXh0Y29udGFjdFwiO1xuICAgIGNvbnRhY3RfdGV4dC5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcblxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRsaW5lLmNsYXNzTmFtZSA9IFwiaGVhZGxpbmVyXCJcbiAgICBoZWFkbGluZS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcblxuICAgIGNvbnN0IGdyaWRfYXBwX3NlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3JpZF9hcHBfc2VwLmNsYXNzTmFtZSA9IFwiZ3JpZF9zZXBfYXBwXCI7XG4gICAgY29uc3QgZ3JpZF9lbnRfc2VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncmlkX2VudF9zZXAuY2xhc3NOYW1lID0gXCJncmlkX3NlcF9hcHBfZW50XCI7XG4gICAgY29uc3QgZ3JpZF9kZXNzX3NlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3JpZF9kZXNzX3NlcC5jbGFzc05hbWUgPSBcImdyaWRfc2VwX2Rlc3NcIjtcblxuXG4gICAgY29uc3QgYXBwX2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXBwX2JveC5jbGFzc05hbWUgPSBcImJveF9hcHBzXCI7XG4gICAgY29uc3QgZW50cmVlc19ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVudHJlZXNfYm94LmNsYXNzTmFtZSA9IFwiYm94X2VudHJlZXNcIjtcbiAgICBjb25zdCBkZXNzZXJ0c19ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc3NlcnRzX2JveC5jbGFzc05hbWUgPSBcImJveF9kZXNzZXJ0c1wiO1xuXG4gICAgY29uc3QgYXBwZXRpemVyc190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBhcHBldGl6ZXJzX3RpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVfYXBwc1wiO1xuICAgIGFwcGV0aXplcnNfdGl0bGUuaW5uZXJIVE1MID0gXCJBcHBldGl6ZXJzXCI7XG5cbiAgICBjb25zdCBlbnRyZWVzX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGVudHJlZXNfdGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZV9lbnRyZWVzXCI7XG4gICAgZW50cmVlc190aXRsZS5pbm5lckhUTUwgPSBcIkVudHJlZXNcIjtcblxuICAgIGNvbnN0IGRlc3NlcnRzX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGRlc3NlcnRzX3RpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVfZGVzc2VydHNcIjtcbiAgICBkZXNzZXJ0c190aXRsZS5pbm5lckhUTUwgPSBcIkRlc3NlcnRzXCI7XG5cbiAgICBjb25zdCBhcHBfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXBwXzEuaW5uZXJIVE1MID0gXCJTY3J1bXB0aW91cyBzdHVmZiAxXCI7XG4gICAgY29uc3QgYXBwXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFwcF8yLmlubmVySFRNTCA9IFwiU2NydW1wdGlvdXMgc3R1ZmYgMlwiO1xuICAgIGNvbnN0IGFwcF8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhcHBfMy5pbm5lckhUTUwgPSBcIlNjcnVtcHRpb3VzIHN0dWZmIDNcIjtcbiAgICBjb25zdCBhcHBfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXBwXzQuaW5uZXJIVE1MID0gXCJTY3J1bXB0aW91cyBzdHVmZiA0XCI7XG5cbiAgICBjb25zdCBlbnRfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW50XzEuaW5uZXJIVE1MID0gXCJFRUVFIFNjcnVtcHRpb3VzIHN0dWZmIDFcIjtcbiAgICBjb25zdCBlbnRfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW50XzIuaW5uZXJIVE1MID0gXCJFRUVFIFNjcnVtcHRpb3VzIHN0dWZmIDJcIjtcbiAgICBjb25zdCBlbnRfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW50XzMuaW5uZXJIVE1MID0gXCJFRUVFIFNjcnVtcHRpb3VzIHN0dWZmIDNcIjtcbiAgICBjb25zdCBlbnRfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW50XzQuaW5uZXJIVE1MID0gXCJFRUVFIFNjcnVtcHRpb3VzIHN0dWZmIDRcIjtcblxuICAgIGNvbnN0IGRlc3NfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzc18xLmlubmVySFRNTCA9IFwiREREIFNjcnVtcHRpb3VzIHN0dWZmIDFcIjtcbiAgICBjb25zdCBkZXNzXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc3NfMi5pbm5lckhUTUwgPSBcIkRERCBTY3J1bXB0aW91cyBzdHVmZiAyXCI7XG4gICAgY29uc3QgZGVzc18zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNzXzMuaW5uZXJIVE1MID0gXCJEREQgU2NydW1wdGlvdXMgc3R1ZmYgM1wiO1xuICAgIGNvbnN0IGRlc3NfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzc180LmlubmVySFRNTCA9IFwiREREIFNjcnVtcHRpb3VzIHN0dWZmIDRcIjtcblxuICAgIGNvbnN0IGNvb2tJY29uID0gbmV3IEltYWdlKCk7XG4gICAgY29va0ljb24uc3JjID0gSWNvbjtcblxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodW5kZXJoZWFkZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyX2JveCk7XG4gICAgZm9vdGVyX2JveC5hcHBlbmRDaGlsZChmb290ZXIxKTtcbiAgICBmb290ZXJfYm94LmFwcGVuZENoaWxkKGZvb3RlcjIpO1xuICAgIGhlYWRlcl9ob21lLmFwcGVuZENoaWxkKGhvbWVfdGV4dCk7XG4gICAgaGVhZGVyX21lbnUuYXBwZW5kQ2hpbGQobWVudV90ZXh0KTtcbiAgICBoZWFkZXJfY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0X3RleHQpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJfaG9tZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9tZW51KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX2NvbnRhY3QpO1xuICAgIHVuZGVyaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRsaW5lcmJveCk7XG4gICAgaGVhZGxpbmVyYm94LmFwcGVuZENoaWxkKGNvb2tJY29uKTtcbiAgICBoZWFkbGluZXJib3guYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICAgIC8vXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZF9hcHBfc2VwKTtcbiAgICBncmlkX2FwcF9zZXAuYXBwZW5kQ2hpbGQoc2VjdGlvbjEpO1xuICAgIHNlY3Rpb24xLmFwcGVuZENoaWxkKGFwcGV0aXplcnNfdGl0bGUpO1xuICAgIHNlY3Rpb24xLmFwcGVuZENoaWxkKGFwcF9ib3gpO1xuICAgIGFwcF9ib3guYXBwZW5kQ2hpbGQoYXBwXzEpO1xuICAgIGFwcF9ib3guYXBwZW5kQ2hpbGQoYXBwXzIpO1xuICAgIGFwcF9ib3guYXBwZW5kQ2hpbGQoYXBwXzMpO1xuICAgIGFwcF9ib3guYXBwZW5kQ2hpbGQoYXBwXzQpO1xuICAgIFxuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkX2VudF9zZXApO1xuICAgIGdyaWRfZW50X3NlcC5hcHBlbmRDaGlsZChzZWN0aW9uMik7XG4gICAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQoZW50cmVlc190aXRsZSk7XG4gICAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQoZW50cmVlc19ib3gpO1xuICAgIGVudHJlZXNfYm94LmFwcGVuZENoaWxkKGVudF8xKTtcbiAgICBlbnRyZWVzX2JveC5hcHBlbmRDaGlsZChlbnRfMik7XG4gICAgZW50cmVlc19ib3guYXBwZW5kQ2hpbGQoZW50XzMpO1xuICAgIGVudHJlZXNfYm94LmFwcGVuZENoaWxkKGVudF80KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkX2Rlc3Nfc2VwKTtcbiAgICBncmlkX2Rlc3Nfc2VwLmFwcGVuZENoaWxkKHNlY3Rpb24zKTtcbiAgICBzZWN0aW9uMy5hcHBlbmRDaGlsZChkZXNzZXJ0c190aXRsZSk7XG4gICAgc2VjdGlvbjMuYXBwZW5kQ2hpbGQoZGVzc2VydHNfYm94KTtcbiAgICBkZXNzZXJ0c19ib3guYXBwZW5kQ2hpbGQoZGVzc18xKTtcbiAgICBkZXNzZXJ0c19ib3guYXBwZW5kQ2hpbGQoZGVzc18yKTtcbiAgICBkZXNzZXJ0c19ib3guYXBwZW5kQ2hpbGQoZGVzc18zKTtcbiAgICBkZXNzZXJ0c19ib3guYXBwZW5kQ2hpbGQoZGVzc180KTtcbn1cbiIsImltcG9ydCBJY29uIGZyb20gJy4vY2hlZi5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZCgpIHtcblxuICAgIGNvbnN0IGhlYWRsaW5lcmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGxpbmVyYm94LmNsYXNzTmFtZSA9IFwiaGVhZGxpbmVyX2JveFwiO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9IFwidG9waGVhZGVyXCI7XG4gICAgY29uc3QgdW5kZXJoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHVuZGVyaGVhZGVyLmNsYXNzTmFtZSA9IFwidW5kZXJfdG9waGVhZGVyXCI7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJiaWdnZXN0X2JveFwiO1xuICAgIGNvbnN0IHNlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMS5jbGFzc05hbWUgPSBcInNlY3Rpb25fMVwiO1xuICAgIGNvbnN0IHNlY3Rpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMi5jbGFzc05hbWUgPSBcInNlY3Rpb25fMlwiO1xuICAgIGNvbnN0IHNlY3Rpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMy5jbGFzc05hbWUgPSBcInNlY3Rpb25fM1wiO1xuXG4gICAgY29uc3QgaGVhZGVyX2hvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcl9ob21lLmNsYXNzTmFtZSA9IFwidG9wX2hvbWVcIjtcbiAgICBjb25zdCBob21lX3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWVfdGV4dC5jbGFzc05hbWUgPSBcImNvcm5lcl90ZXh0aG9tZVwiO1xuICAgIGhvbWVfdGV4dC5pbm5lckhUTUwgPSBcIkhvbWVcIjtcblxuICAgIGNvbnN0IGhlYWRlcl9tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfbWVudS5jbGFzc05hbWUgPSBcInRvcF9tZW51XCI7XG4gICAgY29uc3QgbWVudV90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51X3RleHQuY2xhc3NOYW1lID0gXCJjb3JuZXJfdGV4dG1lbnVcIjtcbiAgICBtZW51X3RleHQuaW5uZXJIVE1MID0gXCJNZW51XCI7XG5cbiAgICBjb25zdCBmb290ZXJfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXJfYm94LmNsYXNzTmFtZSA9IFwiYm90dG9tX2Zvb3RcIjtcblxuICAgIGNvbnN0IGZvb3RlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3RlcjEuaW5uZXJIVE1MID0gJ1Bob3RvIGJ5Jm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0Brcmlzcm9sbGVyP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPktyaXN0b3BoZXIgUm9sbGVyPC9hPiZuYnNwO29uJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL2ltYWdlcy9uYXR1cmUvZ2FsYXh5P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPic7XG5cblxuICAgIGNvbnN0IGZvb3RlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3RlcjIuaW5uZXJIVE1MID0gJ0ltYWdlIGJ5Jm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL2N1dGUtYXN0cm9uYXV0LWNoZWYtc2VydmluZy1mb29kLWNhcnRvb24tdmVjdG9yLWljb24taWxsdXN0cmF0aW9uLXNjaWVuY2UtZm9vZC1pY29uLWlzb2xhdGVkLWZsYXRfMzEzNDg0NTAuaHRtI3F1ZXJ5PWFzdHJvbmF1dCUyMGNoZWYmcG9zaXRpb249NCZmcm9tX3ZpZXc9c2VhcmNoJnRyYWNrPXNwaFwiPmNhdGFseXN0c3R1ZmY8L2E+IG9uIEZyZWVwaWsnO1xuXG4gICAgY29uc3QgaGVhZGVyX2NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcl9jb250YWN0LmNsYXNzTmFtZSA9IFwidG9wX2NvbnRhY3RcIjtcbiAgICBjb25zdCBjb250YWN0X3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RfdGV4dC5jbGFzc05hbWUgPSBcImNvcm5lcl90ZXh0Y29udGFjdFwiO1xuICAgIGNvbnRhY3RfdGV4dC5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcblxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRsaW5lLmNsYXNzTmFtZSA9IFwiaGVhZGxpbmVyXCJcbiAgICBoZWFkbGluZS5pbm5lckhUTUwgPSBcIll1bW15IFllYXJuaW5nc1wiO1xuXG4gICAgY29uc3QgdW5kZXJIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB1bmRlckhlYWRsaW5lLmlubmVySFRNTCA9IFwiQ3JhdmluZyBzb21ldGhpbmcgeXVtbXk/IDxicj5Mb29rIG5vIGZ1cnRoZXIhXCI7XG5cbiAgICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW50cm8uaW5uZXJIVE1MID0gXCJXZWxjb21lIHRvIFl1bW15IFllYXJuaW5ncywgYSBwbGFjZSB3aGVyZSB5b3UgY2FuIGZpbmQgZXZlcnl0aGluZyB0aGF0IHlvdSAob3IgSSkgaGF2ZSBiZWVuIHllYXJuaW5nIGZvciEgSGVyZSB5b3UnbGwgZmluZCB0aGUgbW9zdCBzYXRpc2Z5aW5nIGZvb2RzIHRoYXQgbW9uZXkgY2FuIGJ1eSBpbiB0aGlzIGdhbGF4eS4gSSBob3BlIHlvdSBlbmpveSFcIlxuXG4gICAgY29uc3QgaG91cnNNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob3Vyc01haW4uaW5uZXJIVE1MID0gXCJIb3Vyc1wiXG4gICAgaG91cnNNYWluLmNsYXNzTmFtZSA9IFwidGl0bGUtdGV4dFwiXG5cbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG91cnMuaW5uZXJIVE1MID0gXCJNb25kYXk6IDdhbSAtIDdwbSA8YnI+IFR1ZXNkYXk6IDdhbSAtIDdwbSA8YnI+IFdlZG5lc2RheTogN2FtIC0gN3BtIDxicj4gVGh1cnNkYXk6IDdhbSAtIDdwbSA8YnI+IEZyaWRheTogN2FtIC0gMTBwbSA8YnI+IFNhdHVyZGF5OiA3YW0gLSAxMHBtIDxicj4gU3VuZGF5OiA4YW0gLSAxMHBtXCJcblxuICAgIGNvbnN0IGxvY2F0aW9uTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9jYXRpb25NYWluLmlubmVySFRNTCA9IFwiTG9jYXRpb25cIlxuICAgIGxvY2F0aW9uTWFpbi5jbGFzc05hbWUgPSBcInRpdGxlLXRleHRcIlxuXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvY2F0aW9uLmlubmVySFRNTCA9IFwiOTk5IFRhc3RlIEJ1ZCBBdmVudWUsIERlbGljaW91cywgVFggOTk5OTlcIlxuXG4gICAgY29uc3QgY2hlZkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBjaGVmSWNvbi5zcmMgPSBJY29uO1xuXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZCh1bmRlcmhlYWRlcik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChmb290ZXJfYm94KTtcbiAgICBmb290ZXJfYm94LmFwcGVuZENoaWxkKGZvb3RlcjEpO1xuICAgIGZvb3Rlcl9ib3guYXBwZW5kQ2hpbGQoZm9vdGVyMik7XG4gICAgaGVhZGVyX2hvbWUuYXBwZW5kQ2hpbGQoaG9tZV90ZXh0KTtcbiAgICBoZWFkZXJfbWVudS5hcHBlbmRDaGlsZChtZW51X3RleHQpO1xuICAgIGhlYWRlcl9jb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RfdGV4dCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9ob21lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX21lbnUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJfY29udGFjdCk7XG4gICAgdW5kZXJoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmVyYm94KTtcbiAgICBoZWFkbGluZXJib3guYXBwZW5kQ2hpbGQoY2hlZkljb24pO1xuICAgIGhlYWRsaW5lcmJveC5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb24xKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbjIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uMyk7XG4gICAgXG4gICAgc2VjdGlvbjEuYXBwZW5kQ2hpbGQodW5kZXJIZWFkbGluZSk7XG4gICAgc2VjdGlvbjEuYXBwZW5kQ2hpbGQoaW50cm8pO1xuICAgIHNlY3Rpb24yLmFwcGVuZENoaWxkKGhvdXJzTWFpbik7XG4gICAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICAgIHNlY3Rpb24zLmFwcGVuZENoaWxkKGxvY2F0aW9uTWFpbik7XG4gICAgc2VjdGlvbjMuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9