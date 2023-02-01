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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    text-align: center;\n    font-size: 1.2rem;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n#content {\n    font-family: 'Quicksand', sans-serif;\n    font-weight:bolder;\n    width: 100vw;\n    height: 100vh;\n    max-width:100%;\n}\n\ndiv[class^=\"top_\"] {\n    font-family: 'Paprika', cursive;\n    margin: 0;\n    padding: 0.35rem;\n    border: 0.25rem solid black;\n    position: relative;\n}\n\n@keyframes changeColor {\n    0% {\n        border: 0.25rem solid rgb(181, 141, 255);\n    }\n    25% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n    50% {\n        border: 0.25rem solid rgb(249, 41, 62);\n    }\n    75% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n}\n\ndiv[class^=\"top_\"]:hover {\n    border: 0.25rem solid rgb(158, 105, 255);\n\n    animation-name: changeColor;\n    animation-iteration-count: infinite;\n    animation-duration: 3s;\n}\n\ndiv[class^=\"top_\"]::before, div[class^=\"top_\"]::after {\n    content: '';\n    display: block;\n    position: absolute;\n    background: aquamarine;\n}\n\ndiv[class^=\"top_\"]::before {\n    top: -0.3em; \n    bottom: -0.3em;\n    left: 1em;\n    right: 1em;\n}\n\ndiv[class^=\"top_\"]::after {\n    left: -0.3em;\n    right: -0.3em;\n    top: 1em;\n    bottom: 1em;\n}\n\ndiv[class^=\"corner_\"] {\n    position: relative;\n    z-index: 1;\n}\n\n.topheader {\n    top: 0;\n    width: 100%;\n    height: 9vh;\n    display: flex;\n    justify-content: center;\n    gap: 2rem;\n    align-items: center;\n    background-color: aquamarine;\n}\n\n.bottom_foot {\n    color: white;\n    bottom: 0;\n    width: 100%;\n    height: 5vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: rgb(98, 74, 255);\n    opacity: 0.6;\n}\n\n.under_topheader {\n    background-color: black;\n}\n\n.biggest_box {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    gap: 0.5rem;\n    min-height: 100%;\n    background-attachment: fixed;\n    grid-template-columns: clamp(20%, 25%, 28%);\n    grid-template-rows: clamp(12%, 20%, 25%), clamp(25%, 39%, 40%), clamp(25%, 39%, 40%), clamp(12%, 20%, 25%);\n    background-color: black;\n}\n\ndiv[class^=\"section\"] {\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    display: flex;\n    width: 40vw;\n    flex-direction: column;\n    justify-content: center;\n    justify-self: center;\n    opacity: 0.85;\n    margin-top:1rem;\n    padding-top: 0.3rem;\n    padding-bottom: 0.3rem;\n}\n\ndiv[class^=\"section\"] > div {\n    padding-bottom: 0.4rem;\n}\n\n.headliner_box {\n    font-family: 'Itim', cursive;\n    padding: 0.5rem;\n    grid-row: 1 / 2;\n    display: flex;\n    margin-top: 1rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n}\n\n.section_1 {\n    grid-row: 2 / 3;\n}\n\n.section_1 > div {\n    padding: 0.2rem 1.2rem;\n}\n\n.section_2 {\n    grid-row: 3 / 4;\n}\n\n.section_3 {\n    grid-row: 4 / 5;\n    margin-bottom: 1rem;\n}\n\nh1 {\n    font-size: 2rem;\n    margin: 0 1rem;\n}\n\nh2 {\n    font-family: 'Itim', cursive;\n    font-size: 1.5rem;\n    margin: 0 1rem;\n}\n\n.title-text {\n    font-family: 'Quantico', sans-serif;\n    font-size: 1.8rem;\n    font-weight: bold;\n}\n\nimg {\n    border: 2px solid black;\n    border-radius: 12px;\n    width: 5rem;\n    height: 5rem;\n}\n\na, a:link, a:visited {\n    color: white;\n    text-decoration: none;\n}\n\na:hover {\n    color:rgb(248, 165, 255);\n    text-decoration: underline;\n}\n\na:active {\n    color:aquamarine;\n}\n\n/*underneath is page2Load CSS*/\n\n.headliner_box_2 {\n    font-family: 'Itim', cursive;\n    padding: 0.5rem;\n    display: flex;\n    margin-top: 1rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n    grid-row: 1 / 2;\n}\n\nh2[class^=\"title\"] {\n    font-family: 'Quantico', sans-serif;\n    font-size: 1.8rem;\n    font-weight: bold;\n    padding: 0.5rem;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n}\n\n.biggest_box_2 {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n    min-height: 100%;\n    background-attachment: fixed;\n    grid-template-columns: clamp(20%, 25%, 28%);\n    grid-template-rows: clamp(12%, 20%, 25%), clamp(25%, 39%, 40%), clamp(25%, 39%, 40%), clamp(25%, 39%, 40%);\n}\n\n.box_apps, .box_entrees, .box_desserts {\n    display: grid;\n    grid-template-columns: repeat(2, 50%);\n    grid-template-rows: repeat(2, 50%);\n}\n\n.box_apps img, .box_entrees img, .box_desserts img {\n    object-fit: cover;\n    width: 98.8%;\n    height: 21rem;\n}\n\ndiv[id^=\"ent_\"], div[id^=\"app_\"], div[id^=\"dess_\"] {\n    background-color: rgb(255, 255, 255);\n    border: 2px solid black;\n    border-radius: 22px;\n    display: flex;\n    padding: 0.2rem 0.4rem;\n    justify-content: center;\n    margin: 0.2rem auto;\n    width: 55%;\n}\n\ndiv[id^=\"appbox_\"], div[id^=\"entbox_\"], div[id^=\"dessbox_\"] {\n    border: 0.25rem solid transparent;\n    justify-content: center;\n    border-radius: 10px;\n}\n\ndiv[id^=\"appbox_\"]:hover, div[id^=\"entbox_\"]:hover, div[id^=\"dessbox_\"]:hover {\n    border: 0.25rem solid rgb(230, 0, 255);\n    border-radius: 10px;\n    animation-name: changeColor;\n    animation-iteration-count: infinite;\n    animation-duration: 3s;\n}\n\ndiv[class*=\"_p2\"] > div {    \n    padding-bottom: 0.4rem;\n    font-family: 'Quicksand', sans-serif;\n    font-size: 1.1rem;\n}\n\ndiv[class*=\"_p2\"] {\n    border: none;\n    background-color: transparent;\n}\n\n.section_1_p2 {\n    grid-row: 2 / 3;\n}\n\n.section_2_p2 {\n    grid-row: 3 / 4;\n}\n\n.section_3_p2 {\n    margin-bottom: 0.7rem;\n    grid-row: 4 / 5;\n}\n\ndiv[id^=\"imgwrapper_\"] {\n    position: relative;\n    display:flex;\n    justify-content: center;\n}\n  \ndiv[id^=\"overlayapp_wrap_\"], div[id^=\"overlayent_wrap_\"], div[id^=\"overlaydess_wrap_\"] {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(36, 62, 206, 0.6);\n    color: #fff;\n    visibility: hidden;\n    opacity: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    justify-self: center;\n    border: 2px solid transparent;\n    border-radius: 12px;\n    transition: opacity .2s, visibility .2s;\n}\n  \ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayapp_wrap_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayent_wrap_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlaydess_wrap_\"] {\n    visibility: visible;\n    opacity: 1;\n}\n  \ndiv[id^=\"overlayapp_\"], div[id^=\"overlayent_\"], div[id^=\"overlaydess_\"] {\n    transition: .2s;\n    transform: translateY(1em);\n}\n  \ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayapp_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayent_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlaydess_\"] {\n    transform: translateY(0);\n}\n\ndiv#longfooter {\n    font-size: calc(6px + .5vw);\n    margin: 0.2rem, 0.4rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Itim&family=Paprika&family=Quantico:ital@1&family=Quicksand&display=swap');\n\n:root {\n    text-align: center;\n    font-size: 1.2rem;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n#content {\n    font-family: 'Quicksand', sans-serif;\n    font-weight:bolder;\n    width: 100vw;\n    height: 100vh;\n    max-width:100%;\n}\n\ndiv[class^=\"top_\"] {\n    font-family: 'Paprika', cursive;\n    margin: 0;\n    padding: 0.35rem;\n    border: 0.25rem solid black;\n    position: relative;\n}\n\n@keyframes changeColor {\n    0% {\n        border: 0.25rem solid rgb(181, 141, 255);\n    }\n    25% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n    50% {\n        border: 0.25rem solid rgb(249, 41, 62);\n    }\n    75% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n}\n\ndiv[class^=\"top_\"]:hover {\n    border: 0.25rem solid rgb(158, 105, 255);\n\n    animation-name: changeColor;\n    animation-iteration-count: infinite;\n    animation-duration: 3s;\n}\n\ndiv[class^=\"top_\"]::before, div[class^=\"top_\"]::after {\n    content: '';\n    display: block;\n    position: absolute;\n    background: aquamarine;\n}\n\ndiv[class^=\"top_\"]::before {\n    top: -0.3em; \n    bottom: -0.3em;\n    left: 1em;\n    right: 1em;\n}\n\ndiv[class^=\"top_\"]::after {\n    left: -0.3em;\n    right: -0.3em;\n    top: 1em;\n    bottom: 1em;\n}\n\ndiv[class^=\"corner_\"] {\n    position: relative;\n    z-index: 1;\n}\n\n.topheader {\n    top: 0;\n    width: 100%;\n    height: 9vh;\n    display: flex;\n    justify-content: center;\n    gap: 2rem;\n    align-items: center;\n    background-color: aquamarine;\n}\n\n.bottom_foot {\n    color: white;\n    bottom: 0;\n    width: 100%;\n    height: 5vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: rgb(98, 74, 255);\n    opacity: 0.6;\n}\n\n.under_topheader {\n    background-color: black;\n}\n\n.biggest_box {\n    background-image: url('./background.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    gap: 0.5rem;\n    min-height: 100%;\n    background-attachment: fixed;\n    grid-template-columns: clamp(20%, 25%, 28%);\n    grid-template-rows: clamp(12%, 20%, 25%), clamp(25%, 39%, 40%), clamp(25%, 39%, 40%), clamp(12%, 20%, 25%);\n    background-color: black;\n}\n\ndiv[class^=\"section\"] {\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    display: flex;\n    width: 40vw;\n    flex-direction: column;\n    justify-content: center;\n    justify-self: center;\n    opacity: 0.85;\n    margin-top:1rem;\n    padding-top: 0.3rem;\n    padding-bottom: 0.3rem;\n}\n\ndiv[class^=\"section\"] > div {\n    padding-bottom: 0.4rem;\n}\n\n.headliner_box {\n    font-family: 'Itim', cursive;\n    padding: 0.5rem;\n    grid-row: 1 / 2;\n    display: flex;\n    margin-top: 1rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n}\n\n.section_1 {\n    grid-row: 2 / 3;\n}\n\n.section_1 > div {\n    padding: 0.2rem 1.2rem;\n}\n\n.section_2 {\n    grid-row: 3 / 4;\n}\n\n.section_3 {\n    grid-row: 4 / 5;\n    margin-bottom: 1rem;\n}\n\nh1 {\n    font-size: 2rem;\n    margin: 0 1rem;\n}\n\nh2 {\n    font-family: 'Itim', cursive;\n    font-size: 1.5rem;\n    margin: 0 1rem;\n}\n\n.title-text {\n    font-family: 'Quantico', sans-serif;\n    font-size: 1.8rem;\n    font-weight: bold;\n}\n\nimg {\n    border: 2px solid black;\n    border-radius: 12px;\n    width: 5rem;\n    height: 5rem;\n}\n\na, a:link, a:visited {\n    color: white;\n    text-decoration: none;\n}\n\na:hover {\n    color:rgb(248, 165, 255);\n    text-decoration: underline;\n}\n\na:active {\n    color:aquamarine;\n}\n\n/*underneath is page2Load CSS*/\n\n.headliner_box_2 {\n    font-family: 'Itim', cursive;\n    padding: 0.5rem;\n    display: flex;\n    margin-top: 1rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n    grid-row: 1 / 2;\n}\n\nh2[class^=\"title\"] {\n    font-family: 'Quantico', sans-serif;\n    font-size: 1.8rem;\n    font-weight: bold;\n    padding: 0.5rem;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n}\n\n.biggest_box_2 {\n    background-image: url('./background.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n    min-height: 100%;\n    background-attachment: fixed;\n    grid-template-columns: clamp(20%, 25%, 28%);\n    grid-template-rows: clamp(12%, 20%, 25%), clamp(25%, 39%, 40%), clamp(25%, 39%, 40%), clamp(25%, 39%, 40%);\n}\n\n.box_apps, .box_entrees, .box_desserts {\n    display: grid;\n    grid-template-columns: repeat(2, 50%);\n    grid-template-rows: repeat(2, 50%);\n}\n\n.box_apps img, .box_entrees img, .box_desserts img {\n    object-fit: cover;\n    width: 98.8%;\n    height: 21rem;\n}\n\ndiv[id^=\"ent_\"], div[id^=\"app_\"], div[id^=\"dess_\"] {\n    background-color: rgb(255, 255, 255);\n    border: 2px solid black;\n    border-radius: 22px;\n    display: flex;\n    padding: 0.2rem 0.4rem;\n    justify-content: center;\n    margin: 0.2rem auto;\n    width: 55%;\n}\n\ndiv[id^=\"appbox_\"], div[id^=\"entbox_\"], div[id^=\"dessbox_\"] {\n    border: 0.25rem solid transparent;\n    justify-content: center;\n    border-radius: 10px;\n}\n\ndiv[id^=\"appbox_\"]:hover, div[id^=\"entbox_\"]:hover, div[id^=\"dessbox_\"]:hover {\n    border: 0.25rem solid rgb(230, 0, 255);\n    border-radius: 10px;\n    animation-name: changeColor;\n    animation-iteration-count: infinite;\n    animation-duration: 3s;\n}\n\ndiv[class*=\"_p2\"] > div {    \n    padding-bottom: 0.4rem;\n    font-family: 'Quicksand', sans-serif;\n    font-size: 1.1rem;\n}\n\ndiv[class*=\"_p2\"] {\n    border: none;\n    background-color: transparent;\n}\n\n.section_1_p2 {\n    grid-row: 2 / 3;\n}\n\n.section_2_p2 {\n    grid-row: 3 / 4;\n}\n\n.section_3_p2 {\n    margin-bottom: 0.7rem;\n    grid-row: 4 / 5;\n}\n\ndiv[id^=\"imgwrapper_\"] {\n    position: relative;\n    display:flex;\n    justify-content: center;\n}\n  \ndiv[id^=\"overlayapp_wrap_\"], div[id^=\"overlayent_wrap_\"], div[id^=\"overlaydess_wrap_\"] {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(36, 62, 206, 0.6);\n    color: #fff;\n    visibility: hidden;\n    opacity: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    justify-self: center;\n    border: 2px solid transparent;\n    border-radius: 12px;\n    transition: opacity .2s, visibility .2s;\n}\n  \ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayapp_wrap_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayent_wrap_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlaydess_wrap_\"] {\n    visibility: visible;\n    opacity: 1;\n}\n  \ndiv[id^=\"overlayapp_\"], div[id^=\"overlayent_\"], div[id^=\"overlaydess_\"] {\n    transition: .2s;\n    transform: translateY(1em);\n}\n  \ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayapp_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayent_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlaydess_\"] {\n    transform: translateY(0);\n}\n\ndiv#longfooter {\n    font-size: calc(6px + .5vw);\n    margin: 0.2rem, 0.4rem;\n}"],"sourceRoot":""}]);
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
    footer1.id = "longfooter";
    footer1.innerHTML = 'Photos by <a href="https://unsplash.com/@raphaellovaski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Raphael Lovaski</a>,&nbsp;<a href="https://unsplash.com/@amir_v_ali?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">amirali mirhashemian</a>,&nbsp;<a href="https://unsplash.com/@otjep?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Yosep Sugiarto</a>,&nbsp;<a href="https://unsplash.com/@photophotostock?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kirill Tonkikh</a>,&nbsp;<a href="https://unsplash.com/@phototastyfood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Food Photographer</a>,&nbsp;<a href="https://unsplash.com/ja/@aurel__lens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aurélien Lemasson-Théobald</a>,&nbsp;<a href="https://unsplash.com/@korie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Korie Cull</a>,&nbsp;<a href="https://unsplash.com/@moniqa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Monika Grabkowska</a>,&nbsp;<a href="https://unsplash.com/@miracletwentyone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joseph Gonzalez</a>,&nbsp;<a href="https://unsplash.com/@kyndallramirez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kyndall Ramirez</a>,&nbsp;&&nbsp;<a href="https://unsplash.com/@sebastiancoman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sebastian Coman Photography</a> on Unsplash';


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
        let overlay_app = document.createElement("div");
        overlay_app.id = "overlayapp_" + i;
        let overlay_app_wrap = document.createElement("div");
        overlay_app_wrap.id = "overlayapp_wrap_" + i;
        let img_wrap = document.createElement("div");
        img_wrap.id = "imgwrapper_" + i;

        boxes_s1.appendChild(app_individual);
        img_wrap.appendChild(overlay_app_wrap);
        overlay_app_wrap.appendChild(overlay_app);
        boxes_s1.appendChild(img_wrap);
        app_box.appendChild(boxes_s1);

        document.addEventListener("DOMContentLoaded", function(e){
            imgwrapper_1.appendChild(bruss);
            imgwrapper_2.appendChild(soup);
            imgwrapper_3.appendChild(steak);
            imgwrapper_4.appendChild(egg);
            document.getElementById("app_1").innerHTML = "Brussel Sprouts";
            document.getElementById("app_2").innerHTML = "Daily Soup";
            document.getElementById("app_3").innerHTML = "Steak Skewers";
            document.getElementById("app_4").innerHTML = "Egg Rolls";
            document.getElementById("overlayapp_1").innerHTML = "Brussel sprouts are healthy for you, right? Wrong. Ours are fried with the highest trans-fat percent oil in the universe. And that's why they're so darn delicious.";
            document.getElementById("overlayapp_2").innerHTML = "The daily soup is something of a mystery, made of rare plants, animals, and unique alien life forms.";
            document.getElementById("overlayapp_3").innerHTML = "Our skewers will have your mouth watering before you even see them! Try one on for size. Or two. Or five. We're not judging.";
            document.getElementById("overlayapp_4").innerHTML = "Made in the style of my motherland, these Taiwanese egg rolls will have wondering if you should just have more egg rolls as your entire meal.";
          });
    }

    for (let x = 1; x < 5; x++) {
        let boxes_s2 = document.createElement("div");
        boxes_s2.id = "entbox_" + x;
        let ent_individual = document.createElement("div");
        ent_individual.id = "ent_" + x;
        let overlay_ent = document.createElement("div");
        overlay_ent.id = "overlayent_" + x;
        let overlay_ent_wrap = document.createElement("div");
        overlay_ent_wrap.id = "overlayent_wrap_" + x;
        let img_wrap_ent = document.createElement("div");
        img_wrap_ent.id = "imgwrapper_ent_" + x;


        boxes_s2.appendChild(ent_individual);
        img_wrap_ent.appendChild(overlay_ent_wrap);
        overlay_ent_wrap.appendChild(overlay_ent);
        boxes_s2.appendChild(img_wrap_ent);
        entrees_box.appendChild(boxes_s2);

        document.addEventListener("DOMContentLoaded", function(e){
            imgwrapper_ent_1.appendChild(burg);
            imgwrapper_ent_2.appendChild(pho);
            imgwrapper_ent_3.appendChild(poke);
            imgwrapper_ent_4.appendChild(pizza);
            document.getElementById("ent_1").innerHTML = "Bacon Burger";
            document.getElementById("ent_2").innerHTML = "Pho";
            document.getElementById("ent_3").innerHTML = "Poke Bowl";
            document.getElementById("ent_4").innerHTML = "Pizza";
            document.getElementById("overlayent_1").innerHTML = "Ever heard of space pigs? Well, now you have. Our burgers are made with intergalactic pigs and cows for the most delectable results. The juiciness here would put Biggie Smalls to shame.";
            document.getElementById("overlayent_2").innerHTML = "Try this pipin' hot bowl of pho if you feel like you're getting the space chills. It can get quite cold out there so make sure you warm up!";
            document.getElementById("overlayent_3").innerHTML = "Full of omega fatty acids, this bowl of poke will rejuvenate you in ways that canned tuna just can't. You'll feel like you're on the beaches of Hawaii!";
            document.getElementById("overlayent_4").innerHTML = "You know what time it is. It's pizza time. Dig in! <br>&#127829 &#127829 &#127829 &#127829 &#127829";
          });
    }

    for (let y = 1; y < 5; y++) {
        let boxes_s3 = document.createElement("div");
        boxes_s3.id = "dessbox_" + y;
        let dess_individual = document.createElement("div");
        dess_individual.id = "dess_" + y;
        let overlay_dess = document.createElement("div");
        overlay_dess.id = "overlaydess_" + y;
        let overlay_dess_wrap = document.createElement("div");
        overlay_dess_wrap.id = "overlaydess_wrap_" + y;
        let img_wrap_dess = document.createElement("div");
        img_wrap_dess.id = "imgwrapper_dess_" + y;

        boxes_s3.appendChild(dess_individual);
        img_wrap_dess.appendChild(overlay_dess_wrap);
        overlay_dess_wrap.appendChild(overlay_dess);
        boxes_s3.appendChild(img_wrap_dess);
        desserts_box.appendChild(boxes_s3);

        document.addEventListener("DOMContentLoaded", function(e){
            imgwrapper_dess_1.appendChild(french);
            imgwrapper_dess_2.appendChild(cookie);
            imgwrapper_dess_3.appendChild(ice);
            imgwrapper_dess_4.appendChild(cinn);
            document.getElementById("dess_1").innerHTML = "French Toast Burger";
            document.getElementById("dess_2").innerHTML = "Cookies";
            document.getElementById("dess_3").innerHTML = "Ice Cream";
            document.getElementById("dess_4").innerHTML = "Cinnamon Roll";
            document.getElementById("overlaydess_1").innerHTML = "Perhaps the greatest breakfast creation ever. With just the right amount of crunch, softness, and sweetness, our french toast is the perfect way to top off your meal.";
            document.getElementById("overlaydess_2").innerHTML = "If you don't like a good chocolate chip cookie, let ours change your mind. The rich flavor and gooeyness is something you have to try, at least once!";
            document.getElementById("overlaydess_3").innerHTML = "There's something about ice cream scoops on a waffle cone. Something about ours is just so good. It's on the tip of our tongues...";
            document.getElementById("overlaydess_4").innerHTML = "A good ole cinnamon roll will get you far in life. This will warm the cockles of your heart. Or at the very least, your stomach."
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

    const contentDiv = document.getElementById("content");
    contentDiv.appendChild(header);
    contentDiv.appendChild(underheader);
    contentDiv.appendChild(footer_box);
    footer_box.appendChild(footer1);
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
Photos by <a href="https://unsplash.com/@raphaellovaski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Raphael Lovaski</a>,&nbsp;<a href="https://unsplash.com/@amir_v_ali?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">amirali mirhashemian</a>,&nbsp;<a href="https://unsplash.com/@otjep?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Yosep Sugiarto</a>,&nbsp;<a href="https://unsplash.com/@photophotostock?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kirill Tonkikh</a>,&nbsp;<a href="https://unsplash.com/@phototastyfood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Food Photographer</a>,&nbsp;<a href="https://unsplash.com/ja/@aurel__lens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aurélien Lemasson-Théobald</a>,&nbsp;<a href="https://unsplash.com/@korie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Korie Cull</a>,&nbsp;<a href="https://unsplash.com/@moniqa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Monika Grabkowska</a>,&nbsp;<a href="https://unsplash.com/@miracletwentyone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joseph Gonzalez</a>,&nbsp;<a href="https://unsplash.com/@kyndallramirez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kyndall Ramirez</a>,&nbsp;&<a href="https://unsplash.com/@sebastiancoman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sebastian Coman Photography</a> on Unsplash


//Photo by <a href="https://unsplash.com/@amir_v_ali?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">amirali mirhashemian</a> on <a href="https://unsplash.com/photos/x6VuEH2npHw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

//Photo by <a href="https://unsplash.com/@otjep?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Yosep Sugiarto</a> on <a href="https://unsplash.com/photos/1PEqqv4i2iM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
//Photo by <a href="https://unsplash.com/@photophotostock?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kirill Tonkikh</a> on <a href="https://unsplash.com/photos/NFQi_2HUNRI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

//Photo by <a href="https://unsplash.com/@phototastyfood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Food Photographer</a> on <a href="https://unsplash.com/photos/Sekm9_nC2BM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
//Photo by <a href="https://unsplash.com/ja/@aurel__lens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aurélien Lemasson-Théobald</a> on <a href="https://unsplash.com/photos/x00CzBt4Dfk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

//Photo by <a href="https://unsplash.com/@korie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Korie Cull</a> on <a href="https://unsplash.com/photos/lfhBa3Ye3lo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
//Photo by <a href="https://unsplash.com/@moniqa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Monika Grabkowska</a> on <a href="https://unsplash.com/photos/_y6A9bhILkM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
//Photo by <a href="https://unsplash.com/@miracletwentyone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joseph Gonzalez</a> on <a href="https://unsplash.com/photos/zcUgjyqEwe8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
//Photo by <a href="https://unsplash.com/@kyndallramirez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kyndall Ramirez</a> on <a href="https://unsplash.com/photos/3HpyvyPCjPA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

//Photo by <a href="https://unsplash.com/@sebastiancoman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sebastian Coman Photography</a> on <a href="https://unsplash.com/photos/RCyXyaim87Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsMkpBQTJKLFdBQVcseUJBQXlCLHdCQUF3QixHQUFHLFVBQVUsZ0JBQWdCLGlCQUFpQixHQUFHLGNBQWMsMkNBQTJDLHlCQUF5QixtQkFBbUIsb0JBQW9CLHFCQUFxQixHQUFHLDBCQUEwQixzQ0FBc0MsZ0JBQWdCLHVCQUF1QixrQ0FBa0MseUJBQXlCLEdBQUcsNEJBQTRCLFVBQVUsbURBQW1ELE9BQU8sV0FBVyxrREFBa0QsT0FBTyxXQUFXLGlEQUFpRCxPQUFPLFdBQVcsa0RBQWtELE9BQU8sR0FBRyxnQ0FBZ0MsK0NBQStDLG9DQUFvQywwQ0FBMEMsNkJBQTZCLEdBQUcsK0RBQStELGtCQUFrQixxQkFBcUIseUJBQXlCLDZCQUE2QixHQUFHLGtDQUFrQyxtQkFBbUIscUJBQXFCLGdCQUFnQixpQkFBaUIsR0FBRyxpQ0FBaUMsbUJBQW1CLG9CQUFvQixlQUFlLGtCQUFrQixHQUFHLDZCQUE2Qix5QkFBeUIsaUJBQWlCLEdBQUcsZ0JBQWdCLGFBQWEsa0JBQWtCLGtCQUFrQixvQkFBb0IsOEJBQThCLGdCQUFnQiwwQkFBMEIsbUNBQW1DLEdBQUcsa0JBQWtCLG1CQUFtQixnQkFBZ0Isa0JBQWtCLGtCQUFrQixvQkFBb0Isb0NBQW9DLDBCQUEwQix5Q0FBeUMsbUJBQW1CLEdBQUcsc0JBQXNCLDhCQUE4QixHQUFHLGtCQUFrQixnREFBZ0QsbUNBQW1DLGtDQUFrQyxvQkFBb0IsOEJBQThCLGtCQUFrQix1QkFBdUIsbUNBQW1DLGtEQUFrRCxpSEFBaUgsOEJBQThCLEdBQUcsNkJBQTZCLDZCQUE2QiwwQkFBMEIsOEJBQThCLG9CQUFvQixrQkFBa0IsNkJBQTZCLDhCQUE4QiwyQkFBMkIsb0JBQW9CLHNCQUFzQiwwQkFBMEIsNkJBQTZCLEdBQUcsbUNBQW1DLDZCQUE2QixHQUFHLG9CQUFvQixtQ0FBbUMsc0JBQXNCLHNCQUFzQixvQkFBb0IsdUJBQXVCLDhCQUE4QiwyQkFBMkIsMEJBQTBCLDZCQUE2QiwwQkFBMEIsOEJBQThCLG9CQUFvQixHQUFHLGdCQUFnQixzQkFBc0IsR0FBRyxzQkFBc0IsNkJBQTZCLEdBQUcsZ0JBQWdCLHNCQUFzQixHQUFHLGdCQUFnQixzQkFBc0IsMEJBQTBCLEdBQUcsUUFBUSxzQkFBc0IscUJBQXFCLEdBQUcsUUFBUSxtQ0FBbUMsd0JBQXdCLHFCQUFxQixHQUFHLGlCQUFpQiwwQ0FBMEMsd0JBQXdCLHdCQUF3QixHQUFHLFNBQVMsOEJBQThCLDBCQUEwQixrQkFBa0IsbUJBQW1CLEdBQUcsMEJBQTBCLG1CQUFtQiw0QkFBNEIsR0FBRyxhQUFhLCtCQUErQixpQ0FBaUMsR0FBRyxjQUFjLHVCQUF1QixHQUFHLHlEQUF5RCxtQ0FBbUMsc0JBQXNCLG9CQUFvQix1QkFBdUIsOEJBQThCLDJCQUEyQiwwQkFBMEIsNkJBQTZCLDBCQUEwQiw4QkFBOEIsb0JBQW9CLHNCQUFzQixHQUFHLDBCQUEwQiwwQ0FBMEMsd0JBQXdCLHdCQUF3QixzQkFBc0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsR0FBRyxvQkFBb0IsZ0RBQWdELG1DQUFtQyxrQ0FBa0Msb0JBQW9CLDhCQUE4Qiw0QkFBNEIsdUJBQXVCLG1DQUFtQyxrREFBa0QsaUhBQWlILEdBQUcsNENBQTRDLG9CQUFvQiw0Q0FBNEMseUNBQXlDLEdBQUcsd0RBQXdELHdCQUF3QixtQkFBbUIsb0JBQW9CLEdBQUcsOERBQThELDJDQUEyQyw4QkFBOEIsMEJBQTBCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixpQkFBaUIsR0FBRyx1RUFBdUUsd0NBQXdDLDhCQUE4QiwwQkFBMEIsR0FBRyx5RkFBeUYsNkNBQTZDLDBCQUEwQixrQ0FBa0MsMENBQTBDLDZCQUE2QixHQUFHLG1DQUFtQyw2QkFBNkIsMkNBQTJDLHdCQUF3QixHQUFHLHlCQUF5QixtQkFBbUIsb0NBQW9DLEdBQUcsbUJBQW1CLHNCQUFzQixHQUFHLG1CQUFtQixzQkFBc0IsR0FBRyxtQkFBbUIsNEJBQTRCLHNCQUFzQixHQUFHLDhCQUE4Qix5QkFBeUIsbUJBQW1CLDhCQUE4QixHQUFHLG9HQUFvRyx5QkFBeUIsYUFBYSxnQkFBZ0IsY0FBYyxlQUFlLHlDQUF5QyxrQkFBa0IseUJBQXlCLGlCQUFpQixvQkFBb0IsMEJBQTBCLDhCQUE4QiwyQkFBMkIsb0NBQW9DLDBCQUEwQiw4Q0FBOEMsR0FBRyxtTUFBbU0sMEJBQTBCLGlCQUFpQixHQUFHLHFGQUFxRixzQkFBc0IsaUNBQWlDLEdBQUcsb0xBQW9MLCtCQUErQixHQUFHLG9CQUFvQixrQ0FBa0MsNkJBQTZCLEdBQUcsbUJBQW1CO0FBQ3QyakI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNYMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNnQjtBQUNFO0FBQ0E7QUFDdkM7QUFDQSx5REFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBUTtBQUNaLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQVM7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFTO0FBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0I2QjtBQUNXO0FBQ1A7QUFDSTtBQUNKO0FBQ0c7QUFDRTtBQUNEO0FBQ1Y7QUFDSTtBQUNGO0FBQ0E7QUFDUzs7QUFFeEI7O0FBRWY7QUFDQSxtQkFBbUIsc0NBQUk7QUFDdkI7QUFDQSxnQkFBZ0IsZ0RBQUs7QUFDckI7QUFDQSxlQUFlLHdDQUFNO0FBQ3JCO0FBQ0EsZUFBZSw4Q0FBSTtBQUNuQjtBQUNBLGlCQUFpQix3Q0FBTTtBQUN2QjtBQUNBLGNBQWMsMENBQU87QUFDckI7QUFDQSxpQkFBaUIsNkNBQU07QUFDdkI7QUFDQSxjQUFjLDBDQUFRO0FBQ3RCO0FBQ0EsY0FBYyxxQ0FBRztBQUNqQjtBQUNBLGdCQUFnQix1Q0FBSztBQUNyQjtBQUNBLGVBQWUsdUNBQUk7QUFDbkI7QUFDQSxlQUFlLHVDQUFJO0FBQ25CO0FBQ0EsZ0JBQWdCLCtDQUFLOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrS0FBK0ssNklBQTZJLGtJQUFrSSw0SUFBNEksOElBQThJLHVKQUF1Siw4SEFBOEgsc0lBQXNJLDhJQUE4SSw0SUFBNEksT0FBTzs7O0FBR3A1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzSkFBc0osNklBQTZJLGtJQUFrSSw0SUFBNEksOElBQThJLHVKQUF1Siw4SEFBOEgsc0lBQXNJLDhJQUE4SSw0SUFBNEk7OztBQUdwM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyUkE7O0FBRWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVDQUF1Qyx5SUFBeUksUUFBUTs7O0FBR3hMO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pKOEI7O0FBRWY7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVDQUF1Qyx5SUFBeUksUUFBUTs7O0FBR3hMO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsc0NBQUk7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9zcmMvcGFnZTJsb2FkLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL3NyYy9wYWdlM2xvYWQuanMiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vc3JjL3BhZ2Vsb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JdGltJmZhbWlseT1QYXByaWthJmZhbWlseT1RdWFudGljbzppdGFsQDEmZmFtaWx5PVF1aWNrc2FuZCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1heC13aWR0aDoxMDAlO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJ0b3BfXFxcIl0ge1xcbiAgICBmb250LWZhbWlseTogJ1BhcHJpa2EnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAuMzVyZW07XFxuICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCBibGFjaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNoYW5nZUNvbG9yIHtcXG4gICAgMCUge1xcbiAgICAgICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigxODEsIDE0MSwgMjU1KTtcXG4gICAgfVxcbiAgICAyNSUge1xcbiAgICAgICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigyNTUsIDQyLCAyMTIpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDI0OSwgNDEsIDYyKTtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigyNTUsIDQyLCAyMTIpO1xcbiAgICB9XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXTpob3ZlciB7XFxuICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCByZ2IoMTU4LCAxMDUsIDI1NSk7XFxuXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2VDb2xvcjtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXTo6YmVmb3JlLCBkaXZbY2xhc3NePVxcXCJ0b3BfXFxcIl06OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6IGFxdWFtYXJpbmU7XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXTo6YmVmb3JlIHtcXG4gICAgdG9wOiAtMC4zZW07IFxcbiAgICBib3R0b206IC0wLjNlbTtcXG4gICAgbGVmdDogMWVtO1xcbiAgICByaWdodDogMWVtO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJ0b3BfXFxcIl06OmFmdGVyIHtcXG4gICAgbGVmdDogLTAuM2VtO1xcbiAgICByaWdodDogLTAuM2VtO1xcbiAgICB0b3A6IDFlbTtcXG4gICAgYm90dG9tOiAxZW07XFxufVxcblxcbmRpdltjbGFzc149XFxcImNvcm5lcl9cXFwiXSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnRvcGhlYWRlciB7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG4uYm90dG9tX2Zvb3Qge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk4LCA3NCwgMjU1KTtcXG4gICAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG4udW5kZXJfdG9waGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5iaWdnZXN0X2JveCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNsYW1wKDIwJSwgMjUlLCAyOCUpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGNsYW1wKDEyJSwgMjAlLCAyNSUpLCBjbGFtcCgyNSUsIDM5JSwgNDAlKSwgY2xhbXAoMjUlLCAzOSUsIDQwJSksIGNsYW1wKDEyJSwgMjAlLCAyNSUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwic2VjdGlvblxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxuICAgIG1hcmdpbi10b3A6MXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuM3JlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwic2VjdGlvblxcXCJdID4gZGl2IHtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcXG59XFxuXFxuLmhlYWRsaW5lcl9ib3gge1xcbiAgICBmb250LWZhbWlseTogJ0l0aW0nLCBjdXJzaXZlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgb3BhY2l0eTogMC44NTtcXG59XFxuXFxuLnNlY3Rpb25fMSB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLnNlY3Rpb25fMSA+IGRpdiB7XFxuICAgIHBhZGRpbmc6IDAuMnJlbSAxLjJyZW07XFxufVxcblxcbi5zZWN0aW9uXzIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5zZWN0aW9uXzMge1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LWZhbWlseTogJ0l0aW0nLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbi50aXRsZS10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdRdWFudGljbycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBoZWlnaHQ6IDVyZW07XFxufVxcblxcbmEsIGE6bGluaywgYTp2aXNpdGVkIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgICBjb2xvcjpyZ2IoMjQ4LCAxNjUsIDI1NSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5hOmFjdGl2ZSB7XFxuICAgIGNvbG9yOmFxdWFtYXJpbmU7XFxufVxcblxcbi8qdW5kZXJuZWF0aCBpcyBwYWdlMkxvYWQgQ1NTKi9cXG5cXG4uaGVhZGxpbmVyX2JveF8yIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJdGltJywgY3Vyc2l2ZTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbmgyW2NsYXNzXj1cXFwidGl0bGVcXFwiXSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVhbnRpY28nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5iaWdnZXN0X2JveF8yIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNsYW1wKDIwJSwgMjUlLCAyOCUpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGNsYW1wKDEyJSwgMjAlLCAyNSUpLCBjbGFtcCgyNSUsIDM5JSwgNDAlKSwgY2xhbXAoMjUlLCAzOSUsIDQwJSksIGNsYW1wKDI1JSwgMzklLCA0MCUpO1xcbn1cXG5cXG4uYm94X2FwcHMsIC5ib3hfZW50cmVlcywgLmJveF9kZXNzZXJ0cyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDUwJSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDUwJSk7XFxufVxcblxcbi5ib3hfYXBwcyBpbWcsIC5ib3hfZW50cmVlcyBpbWcsIC5ib3hfZGVzc2VydHMgaW1nIHtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIHdpZHRoOiA5OC44JTtcXG4gICAgaGVpZ2h0OiAyMXJlbTtcXG59XFxuXFxuZGl2W2lkXj1cXFwiZW50X1xcXCJdLCBkaXZbaWRePVxcXCJhcHBfXFxcIl0sIGRpdltpZF49XFxcImRlc3NfXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC40cmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwLjJyZW0gYXV0bztcXG4gICAgd2lkdGg6IDU1JTtcXG59XFxuXFxuZGl2W2lkXj1cXFwiYXBwYm94X1xcXCJdLCBkaXZbaWRePVxcXCJlbnRib3hfXFxcIl0sIGRpdltpZF49XFxcImRlc3Nib3hfXFxcIl0ge1xcbiAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5kaXZbaWRePVxcXCJhcHBib3hfXFxcIl06aG92ZXIsIGRpdltpZF49XFxcImVudGJveF9cXFwiXTpob3ZlciwgZGl2W2lkXj1cXFwiZGVzc2JveF9cXFwiXTpob3ZlciB7XFxuICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCByZ2IoMjMwLCAwLCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBhbmltYXRpb24tbmFtZTogY2hhbmdlQ29sb3I7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xcbn1cXG5cXG5kaXZbY2xhc3MqPVxcXCJfcDJcXFwiXSA+IGRpdiB7ICAgIFxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5kaXZbY2xhc3MqPVxcXCJfcDJcXFwiXSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zZWN0aW9uXzFfcDIge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5zZWN0aW9uXzJfcDIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5zZWN0aW9uXzNfcDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG59XFxuXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuICBcXG5kaXZbaWRePVxcXCJvdmVybGF5YXBwX3dyYXBfXFxcIl0sIGRpdltpZF49XFxcIm92ZXJsYXllbnRfd3JhcF9cXFwiXSwgZGl2W2lkXj1cXFwib3ZlcmxheWRlc3Nfd3JhcF9cXFwiXSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM2LCA2MiwgMjA2LCAwLjYpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycywgdmlzaWJpbGl0eSAuMnM7XFxufVxcbiAgXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXTpob3ZlciBkaXZbaWRePVxcXCJvdmVybGF5YXBwX3dyYXBfXFxcIl0sXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXTpob3ZlciBkaXZbaWRePVxcXCJvdmVybGF5ZW50X3dyYXBfXFxcIl0sXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXTpob3ZlciBkaXZbaWRePVxcXCJvdmVybGF5ZGVzc193cmFwX1xcXCJdIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuICBcXG5kaXZbaWRePVxcXCJvdmVybGF5YXBwX1xcXCJdLCBkaXZbaWRePVxcXCJvdmVybGF5ZW50X1xcXCJdLCBkaXZbaWRePVxcXCJvdmVybGF5ZGVzc19cXFwiXSB7XFxuICAgIHRyYW5zaXRpb246IC4ycztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFlbSk7XFxufVxcbiAgXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXTpob3ZlciBkaXZbaWRePVxcXCJvdmVybGF5YXBwX1xcXCJdLFxcbmRpdltpZF49XFxcImltZ3dyYXBwZXJfXFxcIl06aG92ZXIgZGl2W2lkXj1cXFwib3ZlcmxheWVudF9cXFwiXSxcXG5kaXZbaWRePVxcXCJpbWd3cmFwcGVyX1xcXCJdOmhvdmVyIGRpdltpZF49XFxcIm92ZXJsYXlkZXNzX1xcXCJdIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG5cXG5kaXYjbG9uZ2Zvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyg2cHggKyAuNXZ3KTtcXG4gICAgbWFyZ2luOiAwLjJyZW0sIDAuNHJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsU0FBUztJQUNULGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSx3Q0FBd0M7SUFDNUM7SUFDQTtRQUNJLHVDQUF1QztJQUMzQztJQUNBO1FBQ0ksc0NBQXNDO0lBQzFDO0lBQ0E7UUFDSSx1Q0FBdUM7SUFDM0M7QUFDSjs7QUFFQTtJQUNJLHdDQUF3Qzs7SUFFeEMsMkJBQTJCO0lBQzNCLG1DQUFtQztJQUNuQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxX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O0lBQ3BDLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUNBQW1DO0lBQ25DLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1Isa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLHVDQUF1QztBQUMzQzs7QUFFQTs7O0lBR0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBRUE7OztJQUdJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SXRpbSZmYW1pbHk9UGFwcmlrYSZmYW1pbHk9UXVhbnRpY286aXRhbEAxJmZhbWlseT1RdWlja3NhbmQmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1heC13aWR0aDoxMDAlO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJ0b3BfXFxcIl0ge1xcbiAgICBmb250LWZhbWlseTogJ1BhcHJpa2EnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAuMzVyZW07XFxuICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCBibGFjaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNoYW5nZUNvbG9yIHtcXG4gICAgMCUge1xcbiAgICAgICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigxODEsIDE0MSwgMjU1KTtcXG4gICAgfVxcbiAgICAyNSUge1xcbiAgICAgICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigyNTUsIDQyLCAyMTIpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDI0OSwgNDEsIDYyKTtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigyNTUsIDQyLCAyMTIpO1xcbiAgICB9XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXTpob3ZlciB7XFxuICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCByZ2IoMTU4LCAxMDUsIDI1NSk7XFxuXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2VDb2xvcjtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXTo6YmVmb3JlLCBkaXZbY2xhc3NePVxcXCJ0b3BfXFxcIl06OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6IGFxdWFtYXJpbmU7XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXTo6YmVmb3JlIHtcXG4gICAgdG9wOiAtMC4zZW07IFxcbiAgICBib3R0b206IC0wLjNlbTtcXG4gICAgbGVmdDogMWVtO1xcbiAgICByaWdodDogMWVtO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJ0b3BfXFxcIl06OmFmdGVyIHtcXG4gICAgbGVmdDogLTAuM2VtO1xcbiAgICByaWdodDogLTAuM2VtO1xcbiAgICB0b3A6IDFlbTtcXG4gICAgYm90dG9tOiAxZW07XFxufVxcblxcbmRpdltjbGFzc149XFxcImNvcm5lcl9cXFwiXSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnRvcGhlYWRlciB7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG4uYm90dG9tX2Zvb3Qge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk4LCA3NCwgMjU1KTtcXG4gICAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG4udW5kZXJfdG9waGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5iaWdnZXN0X2JveCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9iYWNrZ3JvdW5kLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjbGFtcCgyMCUsIDI1JSwgMjglKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBjbGFtcCgxMiUsIDIwJSwgMjUlKSwgY2xhbXAoMjUlLCAzOSUsIDQwJSksIGNsYW1wKDI1JSwgMzklLCA0MCUpLCBjbGFtcCgxMiUsIDIwJSwgMjUlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbmRpdltjbGFzc149XFxcInNlY3Rpb25cXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNDB2dztcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbiAgICBtYXJnaW4tdG9wOjFyZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjNyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XFxufVxcblxcbmRpdltjbGFzc149XFxcInNlY3Rpb25cXFwiXSA+IGRpdiB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XFxufVxcblxcbi5oZWFkbGluZXJfYm94IHtcXG4gICAgZm9udC1mYW1pbHk6ICdJdGltJywgY3Vyc2l2ZTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbi5zZWN0aW9uXzEge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5zZWN0aW9uXzEgPiBkaXYge1xcbiAgICBwYWRkaW5nOiAwLjJyZW0gMS4ycmVtO1xcbn1cXG5cXG4uc2VjdGlvbl8yIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uc2VjdGlvbl8zIHtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJdGltJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG4udGl0bGUtdGV4dCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVhbnRpY28nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmltZyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbn1cXG5cXG5hLCBhOmxpbmssIGE6dmlzaXRlZCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gICAgY29sb3I6cmdiKDI0OCwgMTY1LCAyNTUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuYTphY3RpdmUge1xcbiAgICBjb2xvcjphcXVhbWFyaW5lO1xcbn1cXG5cXG4vKnVuZGVybmVhdGggaXMgcGFnZTJMb2FkIENTUyovXFxuXFxuLmhlYWRsaW5lcl9ib3hfMiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSXRpbScsIGN1cnNpdmU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgb3BhY2l0eTogMC44NTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG5oMltjbGFzc149XFxcInRpdGxlXFxcIl0ge1xcbiAgICBmb250LWZhbWlseTogJ1F1YW50aWNvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYmlnZ2VzdF9ib3hfMiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9iYWNrZ3JvdW5kLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2xhbXAoMjAlLCAyNSUsIDI4JSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogY2xhbXAoMTIlLCAyMCUsIDI1JSksIGNsYW1wKDI1JSwgMzklLCA0MCUpLCBjbGFtcCgyNSUsIDM5JSwgNDAlKSwgY2xhbXAoMjUlLCAzOSUsIDQwJSk7XFxufVxcblxcbi5ib3hfYXBwcywgLmJveF9lbnRyZWVzLCAuYm94X2Rlc3NlcnRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNTAlKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNTAlKTtcXG59XFxuXFxuLmJveF9hcHBzIGltZywgLmJveF9lbnRyZWVzIGltZywgLmJveF9kZXNzZXJ0cyBpbWcge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgd2lkdGg6IDk4LjglO1xcbiAgICBoZWlnaHQ6IDIxcmVtO1xcbn1cXG5cXG5kaXZbaWRePVxcXCJlbnRfXFxcIl0sIGRpdltpZF49XFxcImFwcF9cXFwiXSwgZGl2W2lkXj1cXFwiZGVzc19cXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDAuMnJlbSBhdXRvO1xcbiAgICB3aWR0aDogNTUlO1xcbn1cXG5cXG5kaXZbaWRePVxcXCJhcHBib3hfXFxcIl0sIGRpdltpZF49XFxcImVudGJveF9cXFwiXSwgZGl2W2lkXj1cXFwiZGVzc2JveF9cXFwiXSB7XFxuICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmRpdltpZF49XFxcImFwcGJveF9cXFwiXTpob3ZlciwgZGl2W2lkXj1cXFwiZW50Ym94X1xcXCJdOmhvdmVyLCBkaXZbaWRePVxcXCJkZXNzYm94X1xcXCJdOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigyMzAsIDAsIDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2VDb2xvcjtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XFxufVxcblxcbmRpdltjbGFzcyo9XFxcIl9wMlxcXCJdID4gZGl2IHsgICAgXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmRpdltjbGFzcyo9XFxcIl9wMlxcXCJdIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNlY3Rpb25fMV9wMiB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLnNlY3Rpb25fMl9wMiB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLnNlY3Rpb25fM19wMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cXG5kaXZbaWRePVxcXCJpbWd3cmFwcGVyX1xcXCJdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4gIFxcbmRpdltpZF49XFxcIm92ZXJsYXlhcHBfd3JhcF9cXFwiXSwgZGl2W2lkXj1cXFwib3ZlcmxheWVudF93cmFwX1xcXCJdLCBkaXZbaWRePVxcXCJvdmVybGF5ZGVzc193cmFwX1xcXCJdIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzYsIDYyLCAyMDYsIDAuNik7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzLCB2aXNpYmlsaXR5IC4ycztcXG59XFxuICBcXG5kaXZbaWRePVxcXCJpbWd3cmFwcGVyX1xcXCJdOmhvdmVyIGRpdltpZF49XFxcIm92ZXJsYXlhcHBfd3JhcF9cXFwiXSxcXG5kaXZbaWRePVxcXCJpbWd3cmFwcGVyX1xcXCJdOmhvdmVyIGRpdltpZF49XFxcIm92ZXJsYXllbnRfd3JhcF9cXFwiXSxcXG5kaXZbaWRePVxcXCJpbWd3cmFwcGVyX1xcXCJdOmhvdmVyIGRpdltpZF49XFxcIm92ZXJsYXlkZXNzX3dyYXBfXFxcIl0ge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4gIFxcbmRpdltpZF49XFxcIm92ZXJsYXlhcHBfXFxcIl0sIGRpdltpZF49XFxcIm92ZXJsYXllbnRfXFxcIl0sIGRpdltpZF49XFxcIm92ZXJsYXlkZXNzX1xcXCJdIHtcXG4gICAgdHJhbnNpdGlvbjogLjJzO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMWVtKTtcXG59XFxuICBcXG5kaXZbaWRePVxcXCJpbWd3cmFwcGVyX1xcXCJdOmhvdmVyIGRpdltpZF49XFxcIm92ZXJsYXlhcHBfXFxcIl0sXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXTpob3ZlciBkaXZbaWRePVxcXCJvdmVybGF5ZW50X1xcXCJdLFxcbmRpdltpZF49XFxcImltZ3dyYXBwZXJfXFxcIl06aG92ZXIgZGl2W2lkXj1cXFwib3ZlcmxheWRlc3NfXFxcIl0ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxufVxcblxcbmRpdiNsb25nZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDZweCArIC41dncpO1xcbiAgICBtYXJnaW46IDAuMnJlbSwgMC40cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgcGFnZUxvYWQgZnJvbSAnLi9wYWdlbG9hZC5qcyc7XG5pbXBvcnQgcGFnZTJMb2FkIGZyb20gJy4vcGFnZTJsb2FkLmpzJztcbmltcG9ydCBwYWdlM0xvYWQgZnJvbSAnLi9wYWdlM2xvYWQuanMnO1xuICBcbnBhZ2UyTG9hZCgpO1xuXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvcF9ob21lXCIpWzBdO1xuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInBhZ2UxIHdvcmtzXCIpO1xuICAgIGNvbnN0IGFsbFRoZUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcbiAgICBhbGxUaGVDb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgcGFnZUxvYWQoKTtcbn0pXG5cbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9wX21lbnVcIilbMF07XG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicGFnZTIgd29ya3NcIik7XG4gICAgY29uc3QgYWxsVGhlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuICAgIGFsbFRoZUNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICBwYWdlMkxvYWQoKTtcbn0pXG5cbmNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9wX2NvbnRhY3RcIilbMF07XG5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicGFnZTMgd29ya3NcIik7XG4gICAgY29uc3QgYWxsVGhlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuICAgIGFsbFRoZUNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICBwYWdlM0xvYWQoKTtcbn0pIiwiaW1wb3J0IEljb24gZnJvbSAnLi9jb29rLmpwZyc7XG5pbXBvcnQgQnJ1c3MgZnJvbSAnLi9icnVzc2Vsc3Byb3V0cy5qcGcnO1xuaW1wb3J0IEJ1cmdlciBmcm9tICcuL2J1cmdlci5qcGcnO1xuaW1wb3J0IENpbm4gZnJvbSAnLi9jaW5uYW1vbnJvbGwuanBnJztcbmltcG9ydCBDb29raWUgZnJvbSAnLi9jb29raWUuanBnJztcbmltcG9ydCBFZ2dyb2xsIGZyb20gJy4vZWdncm9sbHMuanBnJztcbmltcG9ydCBGcmVuY2ggZnJvbSAnLi9mcmVuY2h0b2FzdC5qcGcnO1xuaW1wb3J0IEljZWNyZWFtIGZyb20gJy4vaWNlY3JlYW0uanBnJztcbmltcG9ydCBQaG8gZnJvbSAnLi9waG8uanBnJztcbmltcG9ydCBQaXp6YSBmcm9tICcuL3BpenphLmpwZyc7XG5pbXBvcnQgUG9rZSBmcm9tICcuL3Bva2UuanBnJztcbmltcG9ydCBTb3VwIGZyb20gJy4vc291cC5qcGcnO1xuaW1wb3J0IFN0ZWFrIGZyb20gJy4vc3RlYWtza2V3ZXJzLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2UyTG9hZCgpIHtcblxuICAgIGNvbnN0IGNvb2tJY29uID0gbmV3IEltYWdlKCk7XG4gICAgY29va0ljb24uc3JjID0gSWNvbjtcbiAgICBjb25zdCBicnVzcyA9IG5ldyBJbWFnZSgpO1xuICAgIGJydXNzLnNyYyA9IEJydXNzO1xuICAgIGNvbnN0IGJ1cmcgPSBuZXcgSW1hZ2UoKTtcbiAgICBidXJnLnNyYyA9IEJ1cmdlcjtcbiAgICBjb25zdCBjaW5uID0gbmV3IEltYWdlKCk7XG4gICAgY2lubi5zcmMgPSBDaW5uO1xuICAgIGNvbnN0IGNvb2tpZSA9IG5ldyBJbWFnZSgpO1xuICAgIGNvb2tpZS5zcmMgPSBDb29raWU7XG4gICAgY29uc3QgZWdnID0gbmV3IEltYWdlKCk7XG4gICAgZWdnLnNyYyA9IEVnZ3JvbGw7XG4gICAgY29uc3QgZnJlbmNoID0gbmV3IEltYWdlKCk7XG4gICAgZnJlbmNoLnNyYyA9IEZyZW5jaDtcbiAgICBjb25zdCBpY2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpY2Uuc3JjID0gSWNlY3JlYW07XG4gICAgY29uc3QgcGhvID0gbmV3IEltYWdlKCk7XG4gICAgcGhvLnNyYyA9IFBobztcbiAgICBjb25zdCBwaXp6YSA9IG5ldyBJbWFnZSgpO1xuICAgIHBpenphLnNyYyA9IFBpenphO1xuICAgIGNvbnN0IHBva2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBwb2tlLnNyYyA9IFBva2U7XG4gICAgY29uc3Qgc291cCA9IG5ldyBJbWFnZSgpO1xuICAgIHNvdXAuc3JjID0gU291cDtcbiAgICBjb25zdCBzdGVhayA9IG5ldyBJbWFnZSgpO1xuICAgIHN0ZWFrLnNyYyA9IFN0ZWFrO1xuXG4gICAgY29uc3QgaGVhZGxpbmVyYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkbGluZXJib3guY2xhc3NOYW1lID0gXCJoZWFkbGluZXJfYm94XzJcIjtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSBcInRvcGhlYWRlclwiO1xuICAgIGNvbnN0IHVuZGVyaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB1bmRlcmhlYWRlci5jbGFzc05hbWUgPSBcInVuZGVyX3RvcGhlYWRlclwiO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYmlnZ2VzdF9ib3hfMlwiO1xuICAgIGNvbnN0IHNlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMS5jbGFzc05hbWUgPSBcInNlY3Rpb25fMV9wMlwiO1xuICAgIGNvbnN0IHNlY3Rpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMi5jbGFzc05hbWUgPSBcInNlY3Rpb25fMl9wMlwiO1xuICAgIGNvbnN0IHNlY3Rpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMy5jbGFzc05hbWUgPSBcInNlY3Rpb25fM19wMlwiO1xuXG4gICAgY29uc3QgaGVhZGVyX21lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcl9tZW51LmNsYXNzTmFtZSA9IFwidG9wX21lbnVcIjtcbiAgICBjb25zdCBtZW51X3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVfdGV4dC5jbGFzc05hbWUgPSBcImNvcm5lcl90ZXh0bWVudVwiO1xuICAgIG1lbnVfdGV4dC5pbm5lckhUTUwgPSBcIk1lbnVcIjtcblxuICAgIGNvbnN0IGhlYWRlcl9ob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfaG9tZS5jbGFzc05hbWUgPSBcInRvcF9ob21lXCI7XG4gICAgY29uc3QgaG9tZV90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lX3RleHQuY2xhc3NOYW1lID0gXCJjb3JuZXJfdGV4dGhvbWVcIjtcbiAgICBob21lX3RleHQuaW5uZXJIVE1MID0gXCJIb21lXCI7XG5cbiAgICBjb25zdCBmb290ZXJfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXJfYm94LmNsYXNzTmFtZSA9IFwiYm90dG9tX2Zvb3RcIjtcblxuICAgIGNvbnN0IGZvb3RlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3RlcjEuaWQgPSBcImxvbmdmb290ZXJcIjtcbiAgICBmb290ZXIxLmlubmVySFRNTCA9ICdQaG90b3MgYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0ByYXBoYWVsbG92YXNraT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5SYXBoYWVsIExvdmFza2k8L2E+LCZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AYW1pcl92X2FsaT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5hbWlyYWxpIG1pcmhhc2hlbWlhbjwvYT4sJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BvdGplcD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5Zb3NlcCBTdWdpYXJ0bzwvYT4sJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BwaG90b3Bob3Rvc3RvY2s/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+S2lyaWxsIFRvbmtpa2g8L2E+LCZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AcGhvdG90YXN0eWZvb2Q/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+Rm9vZCBQaG90b2dyYXBoZXI8L2E+LCZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9qYS9AYXVyZWxfX2xlbnM/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+QXVyw6lsaWVuIExlbWFzc29uLVRow6lvYmFsZDwvYT4sJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0Brb3JpZT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5Lb3JpZSBDdWxsPC9hPiwmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQG1vbmlxYT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5Nb25pa2EgR3JhYmtvd3NrYTwvYT4sJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BtaXJhY2xldHdlbnR5b25lP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPkpvc2VwaCBHb256YWxlejwvYT4sJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BreW5kYWxscmFtaXJlej91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5LeW5kYWxsIFJhbWlyZXo8L2E+LCZuYnNwOyYmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQHNlYmFzdGlhbmNvbWFuP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlNlYmFzdGlhbiBDb21hbiBQaG90b2dyYXBoeTwvYT4gb24gVW5zcGxhc2gnO1xuXG5cbiAgICBjb25zdCBoZWFkZXJfY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyX2NvbnRhY3QuY2xhc3NOYW1lID0gXCJ0b3BfY29udGFjdFwiO1xuICAgIGNvbnN0IGNvbnRhY3RfdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdF90ZXh0LmNsYXNzTmFtZSA9IFwiY29ybmVyX3RleHRjb250YWN0XCI7XG4gICAgY29udGFjdF90ZXh0LmlubmVySFRNTCA9IFwiQ29udGFjdFwiO1xuXG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGxpbmUuY2xhc3NOYW1lID0gXCJoZWFkbGluZXJcIlxuICAgIGhlYWRsaW5lLmlubmVySFRNTCA9IFwiTWVudVwiO1xuXG4gICAgY29uc3QgZ3JpZF9hcHBfc2VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncmlkX2FwcF9zZXAuY2xhc3NOYW1lID0gXCJncmlkX3NlcF9hcHBcIjtcbiAgICBjb25zdCBncmlkX2VudF9zZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdyaWRfZW50X3NlcC5jbGFzc05hbWUgPSBcImdyaWRfc2VwX2FwcF9lbnRcIjtcbiAgICBjb25zdCBncmlkX2Rlc3Nfc2VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncmlkX2Rlc3Nfc2VwLmNsYXNzTmFtZSA9IFwiZ3JpZF9zZXBfZGVzc1wiO1xuXG4gICAgY29uc3QgYXBwX2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXBwX2JveC5jbGFzc05hbWUgPSBcImJveF9hcHBzXCI7XG4gICAgY29uc3QgZW50cmVlc19ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVudHJlZXNfYm94LmNsYXNzTmFtZSA9IFwiYm94X2VudHJlZXNcIjtcbiAgICBjb25zdCBkZXNzZXJ0c19ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc3NlcnRzX2JveC5jbGFzc05hbWUgPSBcImJveF9kZXNzZXJ0c1wiO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgbGV0IGJveGVzX3MxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94ZXNfczEuaWQgPSBcImFwcGJveF9cIiArIGk7XG4gICAgICAgIGxldCBhcHBfaW5kaXZpZHVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFwcF9pbmRpdmlkdWFsLmlkID0gXCJhcHBfXCIgKyBpO1xuICAgICAgICBsZXQgb3ZlcmxheV9hcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvdmVybGF5X2FwcC5pZCA9IFwib3ZlcmxheWFwcF9cIiArIGk7XG4gICAgICAgIGxldCBvdmVybGF5X2FwcF93cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgb3ZlcmxheV9hcHBfd3JhcC5pZCA9IFwib3ZlcmxheWFwcF93cmFwX1wiICsgaTtcbiAgICAgICAgbGV0IGltZ193cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW1nX3dyYXAuaWQgPSBcImltZ3dyYXBwZXJfXCIgKyBpO1xuXG4gICAgICAgIGJveGVzX3MxLmFwcGVuZENoaWxkKGFwcF9pbmRpdmlkdWFsKTtcbiAgICAgICAgaW1nX3dyYXAuYXBwZW5kQ2hpbGQob3ZlcmxheV9hcHBfd3JhcCk7XG4gICAgICAgIG92ZXJsYXlfYXBwX3dyYXAuYXBwZW5kQ2hpbGQob3ZlcmxheV9hcHApO1xuICAgICAgICBib3hlc19zMS5hcHBlbmRDaGlsZChpbWdfd3JhcCk7XG4gICAgICAgIGFwcF9ib3guYXBwZW5kQ2hpbGQoYm94ZXNfczEpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgaW1nd3JhcHBlcl8xLmFwcGVuZENoaWxkKGJydXNzKTtcbiAgICAgICAgICAgIGltZ3dyYXBwZXJfMi5hcHBlbmRDaGlsZChzb3VwKTtcbiAgICAgICAgICAgIGltZ3dyYXBwZXJfMy5hcHBlbmRDaGlsZChzdGVhayk7XG4gICAgICAgICAgICBpbWd3cmFwcGVyXzQuYXBwZW5kQ2hpbGQoZWdnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXzFcIikuaW5uZXJIVE1MID0gXCJCcnVzc2VsIFNwcm91dHNcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXzJcIikuaW5uZXJIVE1MID0gXCJEYWlseSBTb3VwXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcF8zXCIpLmlubmVySFRNTCA9IFwiU3RlYWsgU2tld2Vyc1wiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBfNFwiKS5pbm5lckhUTUwgPSBcIkVnZyBSb2xsc1wiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5YXBwXzFcIikuaW5uZXJIVE1MID0gXCJCcnVzc2VsIHNwcm91dHMgYXJlIGhlYWx0aHkgZm9yIHlvdSwgcmlnaHQ/IFdyb25nLiBPdXJzIGFyZSBmcmllZCB3aXRoIHRoZSBoaWdoZXN0IHRyYW5zLWZhdCBwZXJjZW50IG9pbCBpbiB0aGUgdW5pdmVyc2UuIEFuZCB0aGF0J3Mgd2h5IHRoZXkncmUgc28gZGFybiBkZWxpY2lvdXMuXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlhcHBfMlwiKS5pbm5lckhUTUwgPSBcIlRoZSBkYWlseSBzb3VwIGlzIHNvbWV0aGluZyBvZiBhIG15c3RlcnksIG1hZGUgb2YgcmFyZSBwbGFudHMsIGFuaW1hbHMsIGFuZCB1bmlxdWUgYWxpZW4gbGlmZSBmb3Jtcy5cIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWFwcF8zXCIpLmlubmVySFRNTCA9IFwiT3VyIHNrZXdlcnMgd2lsbCBoYXZlIHlvdXIgbW91dGggd2F0ZXJpbmcgYmVmb3JlIHlvdSBldmVuIHNlZSB0aGVtISBUcnkgb25lIG9uIGZvciBzaXplLiBPciB0d28uIE9yIGZpdmUuIFdlJ3JlIG5vdCBqdWRnaW5nLlwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5YXBwXzRcIikuaW5uZXJIVE1MID0gXCJNYWRlIGluIHRoZSBzdHlsZSBvZiBteSBtb3RoZXJsYW5kLCB0aGVzZSBUYWl3YW5lc2UgZWdnIHJvbGxzIHdpbGwgaGF2ZSB3b25kZXJpbmcgaWYgeW91IHNob3VsZCBqdXN0IGhhdmUgbW9yZSBlZ2cgcm9sbHMgYXMgeW91ciBlbnRpcmUgbWVhbC5cIjtcbiAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8IDU7IHgrKykge1xuICAgICAgICBsZXQgYm94ZXNfczIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3hlc19zMi5pZCA9IFwiZW50Ym94X1wiICsgeDtcbiAgICAgICAgbGV0IGVudF9pbmRpdmlkdWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZW50X2luZGl2aWR1YWwuaWQgPSBcImVudF9cIiArIHg7XG4gICAgICAgIGxldCBvdmVybGF5X2VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG92ZXJsYXlfZW50LmlkID0gXCJvdmVybGF5ZW50X1wiICsgeDtcbiAgICAgICAgbGV0IG92ZXJsYXlfZW50X3dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvdmVybGF5X2VudF93cmFwLmlkID0gXCJvdmVybGF5ZW50X3dyYXBfXCIgKyB4O1xuICAgICAgICBsZXQgaW1nX3dyYXBfZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW1nX3dyYXBfZW50LmlkID0gXCJpbWd3cmFwcGVyX2VudF9cIiArIHg7XG5cblxuICAgICAgICBib3hlc19zMi5hcHBlbmRDaGlsZChlbnRfaW5kaXZpZHVhbCk7XG4gICAgICAgIGltZ193cmFwX2VudC5hcHBlbmRDaGlsZChvdmVybGF5X2VudF93cmFwKTtcbiAgICAgICAgb3ZlcmxheV9lbnRfd3JhcC5hcHBlbmRDaGlsZChvdmVybGF5X2VudCk7XG4gICAgICAgIGJveGVzX3MyLmFwcGVuZENoaWxkKGltZ193cmFwX2VudCk7XG4gICAgICAgIGVudHJlZXNfYm94LmFwcGVuZENoaWxkKGJveGVzX3MyKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGltZ3dyYXBwZXJfZW50XzEuYXBwZW5kQ2hpbGQoYnVyZyk7XG4gICAgICAgICAgICBpbWd3cmFwcGVyX2VudF8yLmFwcGVuZENoaWxkKHBobyk7XG4gICAgICAgICAgICBpbWd3cmFwcGVyX2VudF8zLmFwcGVuZENoaWxkKHBva2UpO1xuICAgICAgICAgICAgaW1nd3JhcHBlcl9lbnRfNC5hcHBlbmRDaGlsZChwaXp6YSk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVudF8xXCIpLmlubmVySFRNTCA9IFwiQmFjb24gQnVyZ2VyXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVudF8yXCIpLmlubmVySFRNTCA9IFwiUGhvXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVudF8zXCIpLmlubmVySFRNTCA9IFwiUG9rZSBCb3dsXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVudF80XCIpLmlubmVySFRNTCA9IFwiUGl6emFcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWVudF8xXCIpLmlubmVySFRNTCA9IFwiRXZlciBoZWFyZCBvZiBzcGFjZSBwaWdzPyBXZWxsLCBub3cgeW91IGhhdmUuIE91ciBidXJnZXJzIGFyZSBtYWRlIHdpdGggaW50ZXJnYWxhY3RpYyBwaWdzIGFuZCBjb3dzIGZvciB0aGUgbW9zdCBkZWxlY3RhYmxlIHJlc3VsdHMuIFRoZSBqdWljaW5lc3MgaGVyZSB3b3VsZCBwdXQgQmlnZ2llIFNtYWxscyB0byBzaGFtZS5cIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWVudF8yXCIpLmlubmVySFRNTCA9IFwiVHJ5IHRoaXMgcGlwaW4nIGhvdCBib3dsIG9mIHBobyBpZiB5b3UgZmVlbCBsaWtlIHlvdSdyZSBnZXR0aW5nIHRoZSBzcGFjZSBjaGlsbHMuIEl0IGNhbiBnZXQgcXVpdGUgY29sZCBvdXQgdGhlcmUgc28gbWFrZSBzdXJlIHlvdSB3YXJtIHVwIVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5ZW50XzNcIikuaW5uZXJIVE1MID0gXCJGdWxsIG9mIG9tZWdhIGZhdHR5IGFjaWRzLCB0aGlzIGJvd2wgb2YgcG9rZSB3aWxsIHJlanV2ZW5hdGUgeW91IGluIHdheXMgdGhhdCBjYW5uZWQgdHVuYSBqdXN0IGNhbid0LiBZb3UnbGwgZmVlbCBsaWtlIHlvdSdyZSBvbiB0aGUgYmVhY2hlcyBvZiBIYXdhaWkhXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXllbnRfNFwiKS5pbm5lckhUTUwgPSBcIllvdSBrbm93IHdoYXQgdGltZSBpdCBpcy4gSXQncyBwaXp6YSB0aW1lLiBEaWcgaW4hIDxicj4mIzEyNzgyOSAmIzEyNzgyOSAmIzEyNzgyOSAmIzEyNzgyOSAmIzEyNzgyOVwiO1xuICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvciAobGV0IHkgPSAxOyB5IDwgNTsgeSsrKSB7XG4gICAgICAgIGxldCBib3hlc19zMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveGVzX3MzLmlkID0gXCJkZXNzYm94X1wiICsgeTtcbiAgICAgICAgbGV0IGRlc3NfaW5kaXZpZHVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRlc3NfaW5kaXZpZHVhbC5pZCA9IFwiZGVzc19cIiArIHk7XG4gICAgICAgIGxldCBvdmVybGF5X2Rlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvdmVybGF5X2Rlc3MuaWQgPSBcIm92ZXJsYXlkZXNzX1wiICsgeTtcbiAgICAgICAgbGV0IG92ZXJsYXlfZGVzc193cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgb3ZlcmxheV9kZXNzX3dyYXAuaWQgPSBcIm92ZXJsYXlkZXNzX3dyYXBfXCIgKyB5O1xuICAgICAgICBsZXQgaW1nX3dyYXBfZGVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGltZ193cmFwX2Rlc3MuaWQgPSBcImltZ3dyYXBwZXJfZGVzc19cIiArIHk7XG5cbiAgICAgICAgYm94ZXNfczMuYXBwZW5kQ2hpbGQoZGVzc19pbmRpdmlkdWFsKTtcbiAgICAgICAgaW1nX3dyYXBfZGVzcy5hcHBlbmRDaGlsZChvdmVybGF5X2Rlc3Nfd3JhcCk7XG4gICAgICAgIG92ZXJsYXlfZGVzc193cmFwLmFwcGVuZENoaWxkKG92ZXJsYXlfZGVzcyk7XG4gICAgICAgIGJveGVzX3MzLmFwcGVuZENoaWxkKGltZ193cmFwX2Rlc3MpO1xuICAgICAgICBkZXNzZXJ0c19ib3guYXBwZW5kQ2hpbGQoYm94ZXNfczMpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgaW1nd3JhcHBlcl9kZXNzXzEuYXBwZW5kQ2hpbGQoZnJlbmNoKTtcbiAgICAgICAgICAgIGltZ3dyYXBwZXJfZGVzc18yLmFwcGVuZENoaWxkKGNvb2tpZSk7XG4gICAgICAgICAgICBpbWd3cmFwcGVyX2Rlc3NfMy5hcHBlbmRDaGlsZChpY2UpO1xuICAgICAgICAgICAgaW1nd3JhcHBlcl9kZXNzXzQuYXBwZW5kQ2hpbGQoY2lubik7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc3NfMVwiKS5pbm5lckhUTUwgPSBcIkZyZW5jaCBUb2FzdCBCdXJnZXJcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzc18yXCIpLmlubmVySFRNTCA9IFwiQ29va2llc1wiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNzXzNcIikuaW5uZXJIVE1MID0gXCJJY2UgQ3JlYW1cIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzc180XCIpLmlubmVySFRNTCA9IFwiQ2lubmFtb24gUm9sbFwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5ZGVzc18xXCIpLmlubmVySFRNTCA9IFwiUGVyaGFwcyB0aGUgZ3JlYXRlc3QgYnJlYWtmYXN0IGNyZWF0aW9uIGV2ZXIuIFdpdGgganVzdCB0aGUgcmlnaHQgYW1vdW50IG9mIGNydW5jaCwgc29mdG5lc3MsIGFuZCBzd2VldG5lc3MsIG91ciBmcmVuY2ggdG9hc3QgaXMgdGhlIHBlcmZlY3Qgd2F5IHRvIHRvcCBvZmYgeW91ciBtZWFsLlwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5ZGVzc18yXCIpLmlubmVySFRNTCA9IFwiSWYgeW91IGRvbid0IGxpa2UgYSBnb29kIGNob2NvbGF0ZSBjaGlwIGNvb2tpZSwgbGV0IG91cnMgY2hhbmdlIHlvdXIgbWluZC4gVGhlIHJpY2ggZmxhdm9yIGFuZCBnb29leW5lc3MgaXMgc29tZXRoaW5nIHlvdSBoYXZlIHRvIHRyeSwgYXQgbGVhc3Qgb25jZSFcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWRlc3NfM1wiKS5pbm5lckhUTUwgPSBcIlRoZXJlJ3Mgc29tZXRoaW5nIGFib3V0IGljZSBjcmVhbSBzY29vcHMgb24gYSB3YWZmbGUgY29uZS4gU29tZXRoaW5nIGFib3V0IG91cnMgaXMganVzdCBzbyBnb29kLiBJdCdzIG9uIHRoZSB0aXAgb2Ygb3VyIHRvbmd1ZXMuLi5cIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWRlc3NfNFwiKS5pbm5lckhUTUwgPSBcIkEgZ29vZCBvbGUgY2lubmFtb24gcm9sbCB3aWxsIGdldCB5b3UgZmFyIGluIGxpZmUuIFRoaXMgd2lsbCB3YXJtIHRoZSBjb2NrbGVzIG9mIHlvdXIgaGVhcnQuIE9yIGF0IHRoZSB2ZXJ5IGxlYXN0LCB5b3VyIHN0b21hY2guXCJcbiAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBhcHBldGl6ZXJzX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGFwcGV0aXplcnNfdGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZV9hcHBzXCI7XG4gICAgYXBwZXRpemVyc190aXRsZS5pbm5lckhUTUwgPSBcIkFwcGV0aXplcnNcIjtcblxuICAgIGNvbnN0IGVudHJlZXNfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgZW50cmVlc190aXRsZS5jbGFzc05hbWUgPSBcInRpdGxlX2VudHJlZXNcIjtcbiAgICBlbnRyZWVzX3RpdGxlLmlubmVySFRNTCA9IFwiRW50cmVlc1wiO1xuXG4gICAgY29uc3QgZGVzc2VydHNfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgZGVzc2VydHNfdGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZV9kZXNzZXJ0c1wiO1xuICAgIGRlc3NlcnRzX3RpdGxlLmlubmVySFRNTCA9IFwiRGVzc2VydHNcIjtcblxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodW5kZXJoZWFkZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyX2JveCk7XG4gICAgZm9vdGVyX2JveC5hcHBlbmRDaGlsZChmb290ZXIxKTtcbiAgICBoZWFkZXJfaG9tZS5hcHBlbmRDaGlsZChob21lX3RleHQpO1xuICAgIGhlYWRlcl9tZW51LmFwcGVuZENoaWxkKG1lbnVfdGV4dCk7XG4gICAgaGVhZGVyX2NvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdF90ZXh0KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX2hvbWUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJfbWVudSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9jb250YWN0KTtcbiAgICB1bmRlcmhlYWRlci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkbGluZXJib3gpO1xuICAgIGhlYWRsaW5lcmJveC5hcHBlbmRDaGlsZChjb29rSWNvbik7XG4gICAgaGVhZGxpbmVyYm94LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkX2FwcF9zZXApO1xuICAgIGdyaWRfYXBwX3NlcC5hcHBlbmRDaGlsZChzZWN0aW9uMSk7XG4gICAgc2VjdGlvbjEuYXBwZW5kQ2hpbGQoYXBwZXRpemVyc190aXRsZSk7XG4gICAgc2VjdGlvbjEuYXBwZW5kQ2hpbGQoYXBwX2JveCk7XG4gICAgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRfZW50X3NlcCk7XG4gICAgZ3JpZF9lbnRfc2VwLmFwcGVuZENoaWxkKHNlY3Rpb24yKTtcbiAgICBzZWN0aW9uMi5hcHBlbmRDaGlsZChlbnRyZWVzX3RpdGxlKTtcbiAgICBzZWN0aW9uMi5hcHBlbmRDaGlsZChlbnRyZWVzX2JveCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZF9kZXNzX3NlcCk7XG4gICAgZ3JpZF9kZXNzX3NlcC5hcHBlbmRDaGlsZChzZWN0aW9uMyk7XG4gICAgc2VjdGlvbjMuYXBwZW5kQ2hpbGQoZGVzc2VydHNfdGl0bGUpO1xuICAgIHNlY3Rpb24zLmFwcGVuZENoaWxkKGRlc3NlcnRzX2JveCk7XG59XG5cbi8qIFxuUGhvdG9zIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AcmFwaGFlbGxvdmFza2k/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+UmFwaGFlbCBMb3Zhc2tpPC9hPiwmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGFtaXJfdl9hbGk/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+YW1pcmFsaSBtaXJoYXNoZW1pYW48L2E+LCZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9Ab3RqZXA/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+WW9zZXAgU3VnaWFydG88L2E+LCZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AcGhvdG9waG90b3N0b2NrP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPktpcmlsbCBUb25raWtoPC9hPiwmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQHBob3RvdGFzdHlmb29kP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPkZvb2QgUGhvdG9ncmFwaGVyPC9hPiwmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vamEvQGF1cmVsX19sZW5zP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPkF1csOpbGllbiBMZW1hc3Nvbi1UaMOpb2JhbGQ8L2E+LCZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9Aa29yaWU/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+S29yaWUgQ3VsbDwvYT4sJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0Btb25pcWE/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+TW9uaWthIEdyYWJrb3dza2E8L2E+LCZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AbWlyYWNsZXR3ZW50eW9uZT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5Kb3NlcGggR29uemFsZXo8L2E+LCZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9Aa3luZGFsbHJhbWlyZXo/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+S3luZGFsbCBSYW1pcmV6PC9hPiwmbmJzcDsmPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BzZWJhc3RpYW5jb21hbj91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5TZWJhc3RpYW4gQ29tYW4gUGhvdG9ncmFwaHk8L2E+IG9uIFVuc3BsYXNoXG5cblxuLy9QaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGFtaXJfdl9hbGk/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+YW1pcmFsaSBtaXJoYXNoZW1pYW48L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MveDZWdUVIMm5wSHc/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+VW5zcGxhc2g8L2E+XG4gIFxuXG4vL1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9Ab3RqZXA/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+WW9zZXAgU3VnaWFydG88L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvMVBFcXF2NGkyaU0/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+VW5zcGxhc2g8L2E+XG4gIFxuLy9QaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQHBob3RvcGhvdG9zdG9jaz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5LaXJpbGwgVG9ua2lraDwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9ORlFpXzJIVU5SST91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5VbnNwbGFzaDwvYT5cbiAgXG5cbi8vUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BwaG90b3Rhc3R5Zm9vZD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5Gb29kIFBob3RvZ3JhcGhlcjwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9TZWttOV9uQzJCTT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5VbnNwbGFzaDwvYT5cbiAgXG4vL1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9qYS9AYXVyZWxfX2xlbnM/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+QXVyw6lsaWVuIExlbWFzc29uLVRow6lvYmFsZDwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy94MDBDekJ0NERmaz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5VbnNwbGFzaDwvYT5cbiAgXG5cbi8vUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0Brb3JpZT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5Lb3JpZSBDdWxsPC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL2xmaEJhM1llM2xvP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPlxuICBcbi8vUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0Btb25pcWE/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+TW9uaWthIEdyYWJrb3dza2E8L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvX3k2QTliaElMa00/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+VW5zcGxhc2g8L2E+XG4gIFxuLy9QaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQG1pcmFjbGV0d2VudHlvbmU/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+Sm9zZXBoIEdvbnphbGV6PC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL3pjVWdqeXFFd2U4P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPlxuICBcbi8vUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BreW5kYWxscmFtaXJlej91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5LeW5kYWxsIFJhbWlyZXo8L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvM0hweXZ5UENqUEE/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+VW5zcGxhc2g8L2E+XG4gIFxuXG4vL1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9Ac2ViYXN0aWFuY29tYW4/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+U2ViYXN0aWFuIENvbWFuIFBob3RvZ3JhcGh5PC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL1JDeVh5YWltODdZP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPlxuICBcbiAgICovIiwiLy9pbXBvcnQgSWNvbiBmcm9tICcuL2Nvb2suanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZTNMb2FkKCkge1xuXG4gICAgY29uc3QgaGVhZGxpbmVyYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkbGluZXJib3guY2xhc3NOYW1lID0gXCJoZWFkbGluZXJfYm94XzJcIjtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSBcInRvcGhlYWRlclwiO1xuICAgIGNvbnN0IHVuZGVyaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB1bmRlcmhlYWRlci5jbGFzc05hbWUgPSBcInVuZGVyX3RvcGhlYWRlclwiO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYmlnZ2VzdF9ib3hfMlwiO1xuICAgIGNvbnN0IHNlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMS5jbGFzc05hbWUgPSBcInNlY3Rpb25fMV9wMlwiO1xuICAgIGNvbnN0IHNlY3Rpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMi5jbGFzc05hbWUgPSBcInNlY3Rpb25fMl9wMlwiO1xuICAgIGNvbnN0IHNlY3Rpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMy5jbGFzc05hbWUgPSBcInNlY3Rpb25fM19wMlwiO1xuXG4gICAgY29uc3QgaGVhZGVyX21lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcl9tZW51LmNsYXNzTmFtZSA9IFwidG9wX21lbnVcIjtcbiAgICBjb25zdCBtZW51X3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVfdGV4dC5jbGFzc05hbWUgPSBcImNvcm5lcl90ZXh0bWVudVwiO1xuICAgIG1lbnVfdGV4dC5pbm5lckhUTUwgPSBcIk1lbnVcIjtcblxuICAgIGNvbnN0IGhlYWRlcl9ob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfaG9tZS5jbGFzc05hbWUgPSBcInRvcF9ob21lXCI7XG4gICAgY29uc3QgaG9tZV90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lX3RleHQuY2xhc3NOYW1lID0gXCJjb3JuZXJfdGV4dGhvbWVcIjtcbiAgICBob21lX3RleHQuaW5uZXJIVE1MID0gXCJIb21lXCI7XG5cbiAgICBjb25zdCBmb290ZXJfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXJfYm94LmNsYXNzTmFtZSA9IFwiYm90dG9tX2Zvb3RcIjtcblxuICAgIGNvbnN0IGZvb3RlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3RlcjEuaW5uZXJIVE1MID0gJ1Bob3RvIGJ5Jm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0Brcmlzcm9sbGVyP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPktyaXN0b3BoZXIgUm9sbGVyPC9hPiZuYnNwO29uJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL2ltYWdlcy9uYXR1cmUvZ2FsYXh5P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPic7XG5cblxuICAgIGNvbnN0IGZvb3RlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3RlcjIuaW5uZXJIVE1MID0gJ0ltYWdlIGJ5Jm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL2N1dGUtYXN0cm9uYXV0LWNoZWYtc2VydmluZy1mb29kLWNhcnRvb24tdmVjdG9yLWljb24taWxsdXN0cmF0aW9uLXNjaWVuY2UtZm9vZC1pY29uLWlzb2xhdGVkLWZsYXRfMzEzNDg0NTAuaHRtI3F1ZXJ5PWFzdHJvbmF1dCUyMGNoZWYmcG9zaXRpb249NCZmcm9tX3ZpZXc9c2VhcmNoJnRyYWNrPXNwaFwiPmNhdGFseXN0c3R1ZmY8L2E+IG9uIEZyZWVwaWsnO1xuXG4gICAgY29uc3QgaGVhZGVyX2NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcl9jb250YWN0LmNsYXNzTmFtZSA9IFwidG9wX2NvbnRhY3RcIjtcbiAgICBjb25zdCBjb250YWN0X3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RfdGV4dC5jbGFzc05hbWUgPSBcImNvcm5lcl90ZXh0Y29udGFjdFwiO1xuICAgIGNvbnRhY3RfdGV4dC5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcblxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRsaW5lLmNsYXNzTmFtZSA9IFwiaGVhZGxpbmVyXCJcbiAgICBoZWFkbGluZS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcblxuICAgIGNvbnN0IGdyaWRfYXBwX3NlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3JpZF9hcHBfc2VwLmNsYXNzTmFtZSA9IFwiZ3JpZF9zZXBfYXBwXCI7XG4gICAgY29uc3QgZ3JpZF9lbnRfc2VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncmlkX2VudF9zZXAuY2xhc3NOYW1lID0gXCJncmlkX3NlcF9hcHBfZW50XCI7XG4gICAgY29uc3QgZ3JpZF9kZXNzX3NlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3JpZF9kZXNzX3NlcC5jbGFzc05hbWUgPSBcImdyaWRfc2VwX2Rlc3NcIjtcblxuXG4gICAgY29uc3QgYXBwX2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXBwX2JveC5jbGFzc05hbWUgPSBcImJveF9hcHBzXCI7XG4gICAgY29uc3QgZW50cmVlc19ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVudHJlZXNfYm94LmNsYXNzTmFtZSA9IFwiYm94X2VudHJlZXNcIjtcbiAgICBjb25zdCBkZXNzZXJ0c19ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc3NlcnRzX2JveC5jbGFzc05hbWUgPSBcImJveF9kZXNzZXJ0c1wiO1xuXG4gICAgY29uc3QgYXBwZXRpemVyc190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBhcHBldGl6ZXJzX3RpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVfYXBwc1wiO1xuICAgIGFwcGV0aXplcnNfdGl0bGUuaW5uZXJIVE1MID0gXCJBcHBldGl6ZXJzXCI7XG5cbiAgICBjb25zdCBlbnRyZWVzX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGVudHJlZXNfdGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZV9lbnRyZWVzXCI7XG4gICAgZW50cmVlc190aXRsZS5pbm5lckhUTUwgPSBcIkVudHJlZXNcIjtcblxuICAgIGNvbnN0IGRlc3NlcnRzX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGRlc3NlcnRzX3RpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVfZGVzc2VydHNcIjtcbiAgICBkZXNzZXJ0c190aXRsZS5pbm5lckhUTUwgPSBcIkRlc3NlcnRzXCI7XG5cbiAgICBjb25zdCBhcHBfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXBwXzEuaW5uZXJIVE1MID0gXCJTY3J1bXB0aW91cyBzdHVmZiAxXCI7XG4gICAgY29uc3QgYXBwXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFwcF8yLmlubmVySFRNTCA9IFwiU2NydW1wdGlvdXMgc3R1ZmYgMlwiO1xuICAgIGNvbnN0IGFwcF8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhcHBfMy5pbm5lckhUTUwgPSBcIlNjcnVtcHRpb3VzIHN0dWZmIDNcIjtcbiAgICBjb25zdCBhcHBfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXBwXzQuaW5uZXJIVE1MID0gXCJTY3J1bXB0aW91cyBzdHVmZiA0XCI7XG5cbiAgICBjb25zdCBlbnRfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW50XzEuaW5uZXJIVE1MID0gXCJFRUVFIFNjcnVtcHRpb3VzIHN0dWZmIDFcIjtcbiAgICBjb25zdCBlbnRfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW50XzIuaW5uZXJIVE1MID0gXCJFRUVFIFNjcnVtcHRpb3VzIHN0dWZmIDJcIjtcbiAgICBjb25zdCBlbnRfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW50XzMuaW5uZXJIVE1MID0gXCJFRUVFIFNjcnVtcHRpb3VzIHN0dWZmIDNcIjtcbiAgICBjb25zdCBlbnRfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW50XzQuaW5uZXJIVE1MID0gXCJFRUVFIFNjcnVtcHRpb3VzIHN0dWZmIDRcIjtcblxuICAgIGNvbnN0IGRlc3NfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzc18xLmlubmVySFRNTCA9IFwiREREIFNjcnVtcHRpb3VzIHN0dWZmIDFcIjtcbiAgICBjb25zdCBkZXNzXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc3NfMi5pbm5lckhUTUwgPSBcIkRERCBTY3J1bXB0aW91cyBzdHVmZiAyXCI7XG4gICAgY29uc3QgZGVzc18zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNzXzMuaW5uZXJIVE1MID0gXCJEREQgU2NydW1wdGlvdXMgc3R1ZmYgM1wiO1xuICAgIGNvbnN0IGRlc3NfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzc180LmlubmVySFRNTCA9IFwiREREIFNjcnVtcHRpb3VzIHN0dWZmIDRcIjtcblxuICAgIGNvbnN0IGNvb2tJY29uID0gbmV3IEltYWdlKCk7XG4gICAgY29va0ljb24uc3JjID0gSWNvbjtcblxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodW5kZXJoZWFkZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyX2JveCk7XG4gICAgZm9vdGVyX2JveC5hcHBlbmRDaGlsZChmb290ZXIxKTtcbiAgICBmb290ZXJfYm94LmFwcGVuZENoaWxkKGZvb3RlcjIpO1xuICAgIGhlYWRlcl9ob21lLmFwcGVuZENoaWxkKGhvbWVfdGV4dCk7XG4gICAgaGVhZGVyX21lbnUuYXBwZW5kQ2hpbGQobWVudV90ZXh0KTtcbiAgICBoZWFkZXJfY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0X3RleHQpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJfaG9tZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9tZW51KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX2NvbnRhY3QpO1xuICAgIHVuZGVyaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRsaW5lcmJveCk7XG4gICAgaGVhZGxpbmVyYm94LmFwcGVuZENoaWxkKGNvb2tJY29uKTtcbiAgICBoZWFkbGluZXJib3guYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICAgIC8vXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZF9hcHBfc2VwKTtcbiAgICBncmlkX2FwcF9zZXAuYXBwZW5kQ2hpbGQoc2VjdGlvbjEpO1xuICAgIHNlY3Rpb24xLmFwcGVuZENoaWxkKGFwcGV0aXplcnNfdGl0bGUpO1xuICAgIHNlY3Rpb24xLmFwcGVuZENoaWxkKGFwcF9ib3gpO1xuICAgIGFwcF9ib3guYXBwZW5kQ2hpbGQoYXBwXzEpO1xuICAgIGFwcF9ib3guYXBwZW5kQ2hpbGQoYXBwXzIpO1xuICAgIGFwcF9ib3guYXBwZW5kQ2hpbGQoYXBwXzMpO1xuICAgIGFwcF9ib3guYXBwZW5kQ2hpbGQoYXBwXzQpO1xuICAgIFxuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkX2VudF9zZXApO1xuICAgIGdyaWRfZW50X3NlcC5hcHBlbmRDaGlsZChzZWN0aW9uMik7XG4gICAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQoZW50cmVlc190aXRsZSk7XG4gICAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQoZW50cmVlc19ib3gpO1xuICAgIGVudHJlZXNfYm94LmFwcGVuZENoaWxkKGVudF8xKTtcbiAgICBlbnRyZWVzX2JveC5hcHBlbmRDaGlsZChlbnRfMik7XG4gICAgZW50cmVlc19ib3guYXBwZW5kQ2hpbGQoZW50XzMpO1xuICAgIGVudHJlZXNfYm94LmFwcGVuZENoaWxkKGVudF80KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkX2Rlc3Nfc2VwKTtcbiAgICBncmlkX2Rlc3Nfc2VwLmFwcGVuZENoaWxkKHNlY3Rpb24zKTtcbiAgICBzZWN0aW9uMy5hcHBlbmRDaGlsZChkZXNzZXJ0c190aXRsZSk7XG4gICAgc2VjdGlvbjMuYXBwZW5kQ2hpbGQoZGVzc2VydHNfYm94KTtcbiAgICBkZXNzZXJ0c19ib3guYXBwZW5kQ2hpbGQoZGVzc18xKTtcbiAgICBkZXNzZXJ0c19ib3guYXBwZW5kQ2hpbGQoZGVzc18yKTtcbiAgICBkZXNzZXJ0c19ib3guYXBwZW5kQ2hpbGQoZGVzc18zKTtcbiAgICBkZXNzZXJ0c19ib3guYXBwZW5kQ2hpbGQoZGVzc180KTtcbn1cbiIsImltcG9ydCBJY29uIGZyb20gJy4vY2hlZi5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZCgpIHtcblxuICAgIGNvbnN0IGhlYWRsaW5lcmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGxpbmVyYm94LmNsYXNzTmFtZSA9IFwiaGVhZGxpbmVyX2JveFwiO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9IFwidG9waGVhZGVyXCI7XG4gICAgY29uc3QgdW5kZXJoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHVuZGVyaGVhZGVyLmNsYXNzTmFtZSA9IFwidW5kZXJfdG9waGVhZGVyXCI7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJiaWdnZXN0X2JveFwiO1xuICAgIGNvbnN0IHNlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMS5jbGFzc05hbWUgPSBcInNlY3Rpb25fMVwiO1xuICAgIGNvbnN0IHNlY3Rpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMi5jbGFzc05hbWUgPSBcInNlY3Rpb25fMlwiO1xuICAgIGNvbnN0IHNlY3Rpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMy5jbGFzc05hbWUgPSBcInNlY3Rpb25fM1wiO1xuXG4gICAgY29uc3QgaGVhZGVyX2hvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcl9ob21lLmNsYXNzTmFtZSA9IFwidG9wX2hvbWVcIjtcbiAgICBjb25zdCBob21lX3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWVfdGV4dC5jbGFzc05hbWUgPSBcImNvcm5lcl90ZXh0aG9tZVwiO1xuICAgIGhvbWVfdGV4dC5pbm5lckhUTUwgPSBcIkhvbWVcIjtcblxuICAgIGNvbnN0IGhlYWRlcl9tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfbWVudS5jbGFzc05hbWUgPSBcInRvcF9tZW51XCI7XG4gICAgY29uc3QgbWVudV90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51X3RleHQuY2xhc3NOYW1lID0gXCJjb3JuZXJfdGV4dG1lbnVcIjtcbiAgICBtZW51X3RleHQuaW5uZXJIVE1MID0gXCJNZW51XCI7XG5cbiAgICBjb25zdCBmb290ZXJfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXJfYm94LmNsYXNzTmFtZSA9IFwiYm90dG9tX2Zvb3RcIjtcblxuICAgIGNvbnN0IGZvb3RlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3RlcjEuaW5uZXJIVE1MID0gJ1Bob3RvIGJ5Jm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0Brcmlzcm9sbGVyP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPktyaXN0b3BoZXIgUm9sbGVyPC9hPiZuYnNwO29uJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL2ltYWdlcy9uYXR1cmUvZ2FsYXh5P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPic7XG5cblxuICAgIGNvbnN0IGZvb3RlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3RlcjIuaW5uZXJIVE1MID0gJ0ltYWdlIGJ5Jm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL2N1dGUtYXN0cm9uYXV0LWNoZWYtc2VydmluZy1mb29kLWNhcnRvb24tdmVjdG9yLWljb24taWxsdXN0cmF0aW9uLXNjaWVuY2UtZm9vZC1pY29uLWlzb2xhdGVkLWZsYXRfMzEzNDg0NTAuaHRtI3F1ZXJ5PWFzdHJvbmF1dCUyMGNoZWYmcG9zaXRpb249NCZmcm9tX3ZpZXc9c2VhcmNoJnRyYWNrPXNwaFwiPmNhdGFseXN0c3R1ZmY8L2E+IG9uIEZyZWVwaWsnO1xuXG4gICAgY29uc3QgaGVhZGVyX2NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcl9jb250YWN0LmNsYXNzTmFtZSA9IFwidG9wX2NvbnRhY3RcIjtcbiAgICBjb25zdCBjb250YWN0X3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RfdGV4dC5jbGFzc05hbWUgPSBcImNvcm5lcl90ZXh0Y29udGFjdFwiO1xuICAgIGNvbnRhY3RfdGV4dC5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcblxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRsaW5lLmNsYXNzTmFtZSA9IFwiaGVhZGxpbmVyXCJcbiAgICBoZWFkbGluZS5pbm5lckhUTUwgPSBcIll1bW15IFllYXJuaW5nc1wiO1xuXG4gICAgY29uc3QgdW5kZXJIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB1bmRlckhlYWRsaW5lLmlubmVySFRNTCA9IFwiQ3JhdmluZyBzb21ldGhpbmcgeXVtbXk/IDxicj5Mb29rIG5vIGZ1cnRoZXIhXCI7XG5cbiAgICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW50cm8uaW5uZXJIVE1MID0gXCJXZWxjb21lIHRvIFl1bW15IFllYXJuaW5ncywgYSBwbGFjZSB3aGVyZSB5b3UgY2FuIGZpbmQgZXZlcnl0aGluZyB0aGF0IHlvdSAob3IgSSkgaGF2ZSBiZWVuIHllYXJuaW5nIGZvciEgSGVyZSB5b3UnbGwgZmluZCB0aGUgbW9zdCBzYXRpc2Z5aW5nIGZvb2RzIHRoYXQgbW9uZXkgY2FuIGJ1eSBpbiB0aGlzIGdhbGF4eS4gSSBob3BlIHlvdSBlbmpveSFcIlxuXG4gICAgY29uc3QgaG91cnNNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob3Vyc01haW4uaW5uZXJIVE1MID0gXCJIb3Vyc1wiXG4gICAgaG91cnNNYWluLmNsYXNzTmFtZSA9IFwidGl0bGUtdGV4dFwiXG5cbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG91cnMuaW5uZXJIVE1MID0gXCJNb25kYXk6IDdhbSAtIDdwbSA8YnI+IFR1ZXNkYXk6IDdhbSAtIDdwbSA8YnI+IFdlZG5lc2RheTogN2FtIC0gN3BtIDxicj4gVGh1cnNkYXk6IDdhbSAtIDdwbSA8YnI+IEZyaWRheTogN2FtIC0gMTBwbSA8YnI+IFNhdHVyZGF5OiA3YW0gLSAxMHBtIDxicj4gU3VuZGF5OiA4YW0gLSAxMHBtXCJcblxuICAgIGNvbnN0IGxvY2F0aW9uTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9jYXRpb25NYWluLmlubmVySFRNTCA9IFwiTG9jYXRpb25cIlxuICAgIGxvY2F0aW9uTWFpbi5jbGFzc05hbWUgPSBcInRpdGxlLXRleHRcIlxuXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvY2F0aW9uLmlubmVySFRNTCA9IFwiOTk5IFRhc3RlIEJ1ZCBBdmVudWUsIERlbGljaW91cywgVFggOTk5OTlcIlxuXG4gICAgY29uc3QgY2hlZkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBjaGVmSWNvbi5zcmMgPSBJY29uO1xuXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZCh1bmRlcmhlYWRlcik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChmb290ZXJfYm94KTtcbiAgICBmb290ZXJfYm94LmFwcGVuZENoaWxkKGZvb3RlcjEpO1xuICAgIGZvb3Rlcl9ib3guYXBwZW5kQ2hpbGQoZm9vdGVyMik7XG4gICAgaGVhZGVyX2hvbWUuYXBwZW5kQ2hpbGQoaG9tZV90ZXh0KTtcbiAgICBoZWFkZXJfbWVudS5hcHBlbmRDaGlsZChtZW51X3RleHQpO1xuICAgIGhlYWRlcl9jb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RfdGV4dCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9ob21lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX21lbnUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJfY29udGFjdCk7XG4gICAgdW5kZXJoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmVyYm94KTtcbiAgICBoZWFkbGluZXJib3guYXBwZW5kQ2hpbGQoY2hlZkljb24pO1xuICAgIGhlYWRsaW5lcmJveC5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb24xKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbjIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uMyk7XG4gICAgXG4gICAgc2VjdGlvbjEuYXBwZW5kQ2hpbGQodW5kZXJIZWFkbGluZSk7XG4gICAgc2VjdGlvbjEuYXBwZW5kQ2hpbGQoaW50cm8pO1xuICAgIHNlY3Rpb24yLmFwcGVuZENoaWxkKGhvdXJzTWFpbik7XG4gICAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICAgIHNlY3Rpb24zLmFwcGVuZENoaWxkKGxvY2F0aW9uTWFpbik7XG4gICAgc2VjdGlvbjMuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9