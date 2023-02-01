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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    text-align: center;\n    font-size: 1.2rem;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n#content {\n    font-family: 'Quicksand', sans-serif;\n    font-weight:bolder;\n    width: 100vw;\n    height: 100vh;\n    max-width:100%;\n}\n\ndiv[class^=\"top_\"] {\n    font-family: 'Paprika', cursive;\n    margin: 0;\n    padding: 0.35rem;\n    border: 0.25rem solid black;\n    position: relative;\n}\n\n@keyframes changeColor {\n    0% {\n        border: 0.25rem solid rgb(181, 141, 255);\n    }\n    25% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n    50% {\n        border: 0.25rem solid rgb(249, 41, 62);\n    }\n    75% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n}\n\ndiv[class^=\"top_\"]:hover {\n    border: 0.25rem solid rgb(158, 105, 255);\n\n    animation-name: changeColor;\n    animation-iteration-count: infinite;\n    animation-duration: 3s;\n}\n\ndiv[class^=\"top_\"]::before, div[class^=\"top_\"]::after {\n    content: '';\n    display: block;\n    position: absolute;\n    background: aquamarine;\n}\n\ndiv[class^=\"top_\"]::before {\n    top: -0.3em; \n    bottom: -0.3em;\n    left: 1em;\n    right: 1em;\n}\n\ndiv[class^=\"top_\"]::after {\n    left: -0.3em;\n    right: -0.3em;\n    top: 1em;\n    bottom: 1em;\n}\n\ndiv[class^=\"corner_\"] {\n    position: relative;\n    z-index: 1;\n}\n\n.topheader {\n    top: 0;\n    width: 100%;\n    height: 9vh;\n    display: flex;\n    justify-content: center;\n    gap: 2rem;\n    align-items: center;\n    background-color: aquamarine;\n}\n\n.bottom_foot {\n    color: white;\n    bottom: 0;\n    width: 100%;\n    height: 5vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: rgb(98, 74, 255);\n    opacity: 0.6;\n}\n\n.under_topheader {\n    background-color: black;\n}\n\n.biggest_box {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    gap: 0.5rem;\n    min-height: 100%;\n    background-attachment: fixed;\n    grid-template-columns: clamp(20%, 25%, 28%);\n    grid-template-rows: clamp(12%, 20%, 25%), clamp(25%, 39%, 40%), clamp(25%, 39%, 40%), clamp(12%, 20%, 25%);\n    background-color: black;\n}\n\ndiv[class^=\"section\"] {\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    display: flex;\n    width: 40vw;\n    flex-direction: column;\n    justify-content: center;\n    justify-self: center;\n    opacity: 0.85;\n    margin-top:1rem;\n    padding-top: 0.3rem;\n    padding-bottom: 0.3rem;\n}\n\ndiv[class^=\"section\"] > div {\n    padding-bottom: 0.4rem;\n}\n\n#menu_tip_box {\n    display: flex;\n    flex-direction: column;\n}\n\n#hoverText {\n    font-size: 0.85rem;\n    text-align: center;\n    padding: 0 0.3rem;\n}\n\n#clickText {\n    display: none;\n}\n\n.headliner_box {\n    font-family: 'Itim', cursive;\n    padding: 0.5rem;\n    grid-row: 1 / 2;\n    display: flex;\n    margin-top: 1rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n}\n\n.section_1 {\n    grid-row: 2 / 3;\n}\n\n.section_1 > div {\n    padding: 0.2rem 1.2rem;\n}\n\n.section_2 {\n    grid-row: 3 / 4;\n}\n\n.section_3 {\n    grid-row: 4 / 5;\n    margin-bottom: 1rem;\n}\n\nh1 {\n    font-size: 2rem;\n    margin: 0 1rem;\n}\n\nh2 {\n    font-family: 'Itim', cursive;\n    font-size: 1.5rem;\n    margin: 0 1rem;\n}\n\n.title-text {\n    font-family: 'Quantico', sans-serif;\n    font-size: 1.8rem;\n    font-weight: bold;\n}\n\nimg {\n    border: 2px solid black;\n    border-radius: 12px;\n    width: 5rem;\n    height: 5rem;\n}\n\na, a:link, a:visited {\n    color: white;\n    text-decoration: none;\n}\n\na:hover {\n    color:rgb(248, 165, 255);\n    text-decoration: underline;\n}\n\na:active {\n    color:aquamarine;\n}\n\n/*underneath is page2Load CSS*/\n\n.headliner_box_2 {\n    font-family: 'Itim', cursive;\n    padding: 0.5rem;\n    display: flex;\n    margin-top: 1rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n    grid-row: 1 / 2;\n}\n\nh2[class^=\"title\"] {\n    font-family: 'Quantico', sans-serif;\n    font-size: 1.8rem;\n    font-weight: bold;\n    padding: 0.5rem;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n}\n\n.biggest_box_2 {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n    min-height: 100%;\n    background-attachment: fixed;\n    grid-template-columns: clamp(20%, 25%, 28%);\n    grid-template-rows: clamp(12%, 20%, 25%), clamp(25%, 39%, 40%), clamp(25%, 39%, 40%), clamp(25%, 39%, 40%);\n}\n\n.box_apps, .box_entrees, .box_desserts {\n    display: grid;\n    grid-template-columns: repeat(2, 50%);\n    grid-template-rows: repeat(2, 50%);\n}\n\n.box_apps img, .box_entrees img, .box_desserts img {\n    object-fit: cover;\n    width: 98.8%;\n    height: 21rem;\n}\n\ndiv[id^=\"ent_\"], div[id^=\"app_\"], div[id^=\"dess_\"] {\n    background-color: rgb(255, 255, 255);\n    border: 2px solid black;\n    border-radius: 22px;\n    display: flex;\n    padding: 0.2rem 0.4rem;\n    justify-content: center;\n    margin: 0.2rem auto;\n    min-width: 55%;\n    max-width: 65%;\n}\n\ndiv[id^=\"appbox_\"], div[id^=\"entbox_\"], div[id^=\"dessbox_\"] {\n    border: 0.25rem solid transparent;\n    justify-content: center;\n    border-radius: 10px;\n}\n\ndiv[id^=\"appbox_\"]:hover, div[id^=\"entbox_\"]:hover, div[id^=\"dessbox_\"]:hover {\n    border: 0.25rem solid rgb(230, 0, 255);\n    border-radius: 10px;\n    animation-name: changeColor;\n    animation-iteration-count: infinite;\n    animation-duration: 3s;\n}\n\ndiv[class*=\"_p2\"] > div {    \n    padding-bottom: 0.4rem;\n    font-family: 'Quicksand', sans-serif;\n    font-size: 1.1rem;\n}\n\ndiv[class*=\"_p2\"] {\n    border: none;\n    background-color: transparent;\n}\n\n.section_1_p2 {\n    grid-row: 2 / 3;\n}\n\n.section_2_p2 {\n    grid-row: 3 / 4;\n}\n\n.section_3_p2 {\n    margin-bottom: 0.7rem;\n    grid-row: 4 / 5;\n}\n\ndiv[id^=\"imgwrapper_\"] {\n    position: relative;\n    display:flex;\n    justify-content: center;\n}\n  \ndiv[id^=\"overlayapp_wrap_\"], div[id^=\"overlayent_wrap_\"], div[id^=\"overlaydess_wrap_\"] {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(36, 62, 206, 0.6);\n    color: #fff;\n    visibility: hidden;\n    opacity: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    justify-self: center;\n    border: 2px solid transparent;\n    border-radius: 12px;\n    transition: opacity .2s, visibility .2s;\n}\n  \ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayapp_wrap_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayent_wrap_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlaydess_wrap_\"] {\n    visibility: visible;\n    opacity: 1;\n}\n  \ndiv[id^=\"overlayapp_\"], div[id^=\"overlayent_\"], div[id^=\"overlaydess_\"] {\n    transition: .2s;\n    transform: translateY(1em);\n}\n  \ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayapp_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayent_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlaydess_\"] {\n    transform: translateY(0);\n}\n\ndiv#longfooter {\n    font-size: calc(6px + .5vw);\n    margin: 0.2rem, 0.4rem;\n}\n\n/*Phone CSS*/\n\n@media only screen and (max-width: 600px) {\n    div.topheader {\n        height: 12vh;\n        font-size: smaller;\n    }\n    h2[class^=\"title\"] {\n        font-size: 1.1rem;\n        font-weight: bold;\n        padding: 0.3rem 0.5rem;\n        max-width: 100%;\n        background-color: gray;\n        border-radius: 10px;\n        border: 2px solid black;\n    }\n    div[id^=\"ent_\"], div[id^=\"app_\"], div[id^=\"dess_\"] {\n        font-size: 0.8rem;\n        min-height: 11%;\n        max-width: 100%;\n    }\n    .box_apps img, .box_entrees img, .box_desserts img {\n        width: 100%;\n        height: 14rem;\n    }\n    .box_apps, .box_entrees, .box_desserts {\n        display: flex;\n        flex-direction: column;\n    }\n    div[id^=\"overlayapp_wrap_\"], div[id^=\"overlayent_wrap_\"], div[id^=\"overlaydess_wrap_\"] {\n        font-size: 0.9rem;\n    }\n    \n    #hoverText {\n        display: none;\n    }\n    #clickText {\n        display: inline;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,oCAAoC;IACpC,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,+BAA+B;IAC/B,SAAS;IACT,gBAAgB;IAChB,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI;QACI,wCAAwC;IAC5C;IACA;QACI,uCAAuC;IAC3C;IACA;QACI,sCAAsC;IAC1C;IACA;QACI,uCAAuC;IAC3C;AACJ;;AAEA;IACI,wCAAwC;;IAExC,2BAA2B;IAC3B,mCAAmC;IACnC,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,cAAc;IACd,SAAS;IACT,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,QAAQ;IACR,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,MAAM;IACN,WAAW;IACX,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,mBAAmB;IACnB,4BAA4B;AAChC;;AAEA;IACI,YAAY;IACZ,SAAS;IACT,WAAW;IACX,WAAW;IACX,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,yDAAyC;IACzC,4BAA4B;IAC5B,2BAA2B;IAC3B,aAAa;IACb,uBAAuB;IACvB,WAAW;IACX,gBAAgB;IAChB,4BAA4B;IAC5B,2CAA2C;IAC3C,0GAA0G;IAC1G,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,WAAW;IACX,sBAAsB;IACtB,uBAAuB;IACvB,oBAAoB;IACpB,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,4BAA4B;IAC5B,eAAe;IACf,eAAe;IACf,aAAa;IACb,gBAAgB;IAChB,uBAAuB;IACvB,oBAAoB;IACpB,mBAAmB;IACnB,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,4BAA4B;IAC5B,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,mCAAmC;IACnC,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,wBAAwB;IACxB,0BAA0B;AAC9B;;AAEA;IACI,gBAAgB;AACpB;;AAEA,8BAA8B;;AAE9B;IACI,4BAA4B;IAC5B,eAAe;IACf,aAAa;IACb,gBAAgB;IAChB,uBAAuB;IACvB,oBAAoB;IACpB,mBAAmB;IACnB,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,mCAAmC;IACnC,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,yDAAyC;IACzC,4BAA4B;IAC5B,2BAA2B;IAC3B,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,gBAAgB;IAChB,4BAA4B;IAC5B,2CAA2C;IAC3C,0GAA0G;AAC9G;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;AACtC;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,oCAAoC;IACpC,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,iCAAiC;IACjC,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,sCAAsC;IACtC,mBAAmB;IACnB,2BAA2B;IAC3B,mCAAmC;IACnC,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;IACtB,oCAAoC;IACpC,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,kCAAkC;IAClC,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,oBAAoB;IACpB,6BAA6B;IAC7B,mBAAmB;IACnB,uCAAuC;AAC3C;;AAEA;;;IAGI,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,eAAe;IACf,0BAA0B;AAC9B;;AAEA;;;IAGI,wBAAwB;AAC5B;;AAEA;IACI,2BAA2B;IAC3B,sBAAsB;AAC1B;;AAEA,YAAY;;AAEZ;IACI;QACI,YAAY;QACZ,kBAAkB;IACtB;IACA;QACI,iBAAiB;QACjB,iBAAiB;QACjB,sBAAsB;QACtB,eAAe;QACf,sBAAsB;QACtB,mBAAmB;QACnB,uBAAuB;IAC3B;IACA;QACI,iBAAiB;QACjB,eAAe;QACf,eAAe;IACnB;IACA;QACI,WAAW;QACX,aAAa;IACjB;IACA;QACI,aAAa;QACb,sBAAsB;IAC1B;IACA;QACI,iBAAiB;IACrB;;IAEA;QACI,aAAa;IACjB;IACA;QACI,eAAe;IACnB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Itim&family=Paprika&family=Quantico:ital@1&family=Quicksand&display=swap');\n\n:root {\n    text-align: center;\n    font-size: 1.2rem;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n#content {\n    font-family: 'Quicksand', sans-serif;\n    font-weight:bolder;\n    width: 100vw;\n    height: 100vh;\n    max-width:100%;\n}\n\ndiv[class^=\"top_\"] {\n    font-family: 'Paprika', cursive;\n    margin: 0;\n    padding: 0.35rem;\n    border: 0.25rem solid black;\n    position: relative;\n}\n\n@keyframes changeColor {\n    0% {\n        border: 0.25rem solid rgb(181, 141, 255);\n    }\n    25% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n    50% {\n        border: 0.25rem solid rgb(249, 41, 62);\n    }\n    75% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n}\n\ndiv[class^=\"top_\"]:hover {\n    border: 0.25rem solid rgb(158, 105, 255);\n\n    animation-name: changeColor;\n    animation-iteration-count: infinite;\n    animation-duration: 3s;\n}\n\ndiv[class^=\"top_\"]::before, div[class^=\"top_\"]::after {\n    content: '';\n    display: block;\n    position: absolute;\n    background: aquamarine;\n}\n\ndiv[class^=\"top_\"]::before {\n    top: -0.3em; \n    bottom: -0.3em;\n    left: 1em;\n    right: 1em;\n}\n\ndiv[class^=\"top_\"]::after {\n    left: -0.3em;\n    right: -0.3em;\n    top: 1em;\n    bottom: 1em;\n}\n\ndiv[class^=\"corner_\"] {\n    position: relative;\n    z-index: 1;\n}\n\n.topheader {\n    top: 0;\n    width: 100%;\n    height: 9vh;\n    display: flex;\n    justify-content: center;\n    gap: 2rem;\n    align-items: center;\n    background-color: aquamarine;\n}\n\n.bottom_foot {\n    color: white;\n    bottom: 0;\n    width: 100%;\n    height: 5vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: rgb(98, 74, 255);\n    opacity: 0.6;\n}\n\n.under_topheader {\n    background-color: black;\n}\n\n.biggest_box {\n    background-image: url('./background.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    gap: 0.5rem;\n    min-height: 100%;\n    background-attachment: fixed;\n    grid-template-columns: clamp(20%, 25%, 28%);\n    grid-template-rows: clamp(12%, 20%, 25%), clamp(25%, 39%, 40%), clamp(25%, 39%, 40%), clamp(12%, 20%, 25%);\n    background-color: black;\n}\n\ndiv[class^=\"section\"] {\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    display: flex;\n    width: 40vw;\n    flex-direction: column;\n    justify-content: center;\n    justify-self: center;\n    opacity: 0.85;\n    margin-top:1rem;\n    padding-top: 0.3rem;\n    padding-bottom: 0.3rem;\n}\n\ndiv[class^=\"section\"] > div {\n    padding-bottom: 0.4rem;\n}\n\n#menu_tip_box {\n    display: flex;\n    flex-direction: column;\n}\n\n#hoverText {\n    font-size: 0.85rem;\n    text-align: center;\n    padding: 0 0.3rem;\n}\n\n#clickText {\n    display: none;\n}\n\n.headliner_box {\n    font-family: 'Itim', cursive;\n    padding: 0.5rem;\n    grid-row: 1 / 2;\n    display: flex;\n    margin-top: 1rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n}\n\n.section_1 {\n    grid-row: 2 / 3;\n}\n\n.section_1 > div {\n    padding: 0.2rem 1.2rem;\n}\n\n.section_2 {\n    grid-row: 3 / 4;\n}\n\n.section_3 {\n    grid-row: 4 / 5;\n    margin-bottom: 1rem;\n}\n\nh1 {\n    font-size: 2rem;\n    margin: 0 1rem;\n}\n\nh2 {\n    font-family: 'Itim', cursive;\n    font-size: 1.5rem;\n    margin: 0 1rem;\n}\n\n.title-text {\n    font-family: 'Quantico', sans-serif;\n    font-size: 1.8rem;\n    font-weight: bold;\n}\n\nimg {\n    border: 2px solid black;\n    border-radius: 12px;\n    width: 5rem;\n    height: 5rem;\n}\n\na, a:link, a:visited {\n    color: white;\n    text-decoration: none;\n}\n\na:hover {\n    color:rgb(248, 165, 255);\n    text-decoration: underline;\n}\n\na:active {\n    color:aquamarine;\n}\n\n/*underneath is page2Load CSS*/\n\n.headliner_box_2 {\n    font-family: 'Itim', cursive;\n    padding: 0.5rem;\n    display: flex;\n    margin-top: 1rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n    grid-row: 1 / 2;\n}\n\nh2[class^=\"title\"] {\n    font-family: 'Quantico', sans-serif;\n    font-size: 1.8rem;\n    font-weight: bold;\n    padding: 0.5rem;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n}\n\n.biggest_box_2 {\n    background-image: url('./background.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n    min-height: 100%;\n    background-attachment: fixed;\n    grid-template-columns: clamp(20%, 25%, 28%);\n    grid-template-rows: clamp(12%, 20%, 25%), clamp(25%, 39%, 40%), clamp(25%, 39%, 40%), clamp(25%, 39%, 40%);\n}\n\n.box_apps, .box_entrees, .box_desserts {\n    display: grid;\n    grid-template-columns: repeat(2, 50%);\n    grid-template-rows: repeat(2, 50%);\n}\n\n.box_apps img, .box_entrees img, .box_desserts img {\n    object-fit: cover;\n    width: 98.8%;\n    height: 21rem;\n}\n\ndiv[id^=\"ent_\"], div[id^=\"app_\"], div[id^=\"dess_\"] {\n    background-color: rgb(255, 255, 255);\n    border: 2px solid black;\n    border-radius: 22px;\n    display: flex;\n    padding: 0.2rem 0.4rem;\n    justify-content: center;\n    margin: 0.2rem auto;\n    min-width: 55%;\n    max-width: 65%;\n}\n\ndiv[id^=\"appbox_\"], div[id^=\"entbox_\"], div[id^=\"dessbox_\"] {\n    border: 0.25rem solid transparent;\n    justify-content: center;\n    border-radius: 10px;\n}\n\ndiv[id^=\"appbox_\"]:hover, div[id^=\"entbox_\"]:hover, div[id^=\"dessbox_\"]:hover {\n    border: 0.25rem solid rgb(230, 0, 255);\n    border-radius: 10px;\n    animation-name: changeColor;\n    animation-iteration-count: infinite;\n    animation-duration: 3s;\n}\n\ndiv[class*=\"_p2\"] > div {    \n    padding-bottom: 0.4rem;\n    font-family: 'Quicksand', sans-serif;\n    font-size: 1.1rem;\n}\n\ndiv[class*=\"_p2\"] {\n    border: none;\n    background-color: transparent;\n}\n\n.section_1_p2 {\n    grid-row: 2 / 3;\n}\n\n.section_2_p2 {\n    grid-row: 3 / 4;\n}\n\n.section_3_p2 {\n    margin-bottom: 0.7rem;\n    grid-row: 4 / 5;\n}\n\ndiv[id^=\"imgwrapper_\"] {\n    position: relative;\n    display:flex;\n    justify-content: center;\n}\n  \ndiv[id^=\"overlayapp_wrap_\"], div[id^=\"overlayent_wrap_\"], div[id^=\"overlaydess_wrap_\"] {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(36, 62, 206, 0.6);\n    color: #fff;\n    visibility: hidden;\n    opacity: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    justify-self: center;\n    border: 2px solid transparent;\n    border-radius: 12px;\n    transition: opacity .2s, visibility .2s;\n}\n  \ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayapp_wrap_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayent_wrap_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlaydess_wrap_\"] {\n    visibility: visible;\n    opacity: 1;\n}\n  \ndiv[id^=\"overlayapp_\"], div[id^=\"overlayent_\"], div[id^=\"overlaydess_\"] {\n    transition: .2s;\n    transform: translateY(1em);\n}\n  \ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayapp_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayent_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlaydess_\"] {\n    transform: translateY(0);\n}\n\ndiv#longfooter {\n    font-size: calc(6px + .5vw);\n    margin: 0.2rem, 0.4rem;\n}\n\n/*Phone CSS*/\n\n@media only screen and (max-width: 600px) {\n    div.topheader {\n        height: 12vh;\n        font-size: smaller;\n    }\n    h2[class^=\"title\"] {\n        font-size: 1.1rem;\n        font-weight: bold;\n        padding: 0.3rem 0.5rem;\n        max-width: 100%;\n        background-color: gray;\n        border-radius: 10px;\n        border: 2px solid black;\n    }\n    div[id^=\"ent_\"], div[id^=\"app_\"], div[id^=\"dess_\"] {\n        font-size: 0.8rem;\n        min-height: 11%;\n        max-width: 100%;\n    }\n    .box_apps img, .box_entrees img, .box_desserts img {\n        width: 100%;\n        height: 14rem;\n    }\n    .box_apps, .box_entrees, .box_desserts {\n        display: flex;\n        flex-direction: column;\n    }\n    div[id^=\"overlayapp_wrap_\"], div[id^=\"overlayent_wrap_\"], div[id^=\"overlaydess_wrap_\"] {\n        font-size: 0.9rem;\n    }\n    \n    #hoverText {\n        display: none;\n    }\n    #clickText {\n        display: inline;\n    }\n}"],"sourceRoot":""}]);
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
    const menuAndTipBox = document.createElement("div");
    menuAndTipBox.id = "menu_tip_box";
    const hoverTip = document.createElement("div");
    hoverTip.id = "hoverText";
    hoverTip.innerHTML = "For more information, <br>please hover over the item!"
    const clickTip = document.createElement("div");
    clickTip.id = "clickText";
    clickTip.innerHTML = "For more information, <br>please click on the item!"

    const grid_app_sep = document.createElement("div");
    grid_app_sep.className = "grid_sep_app";
    const grid_ent_sep = document.createElement("div");
    grid_ent_sep.className = "grid_sep_ent";
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
            document.getElementById("dess_1").innerHTML = "French Toast";
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
    headlinerbox.appendChild(menuAndTipBox);
    menuAndTipBox.appendChild(headline);
    menuAndTipBox.appendChild(hoverTip);
    menuAndTipBox.appendChild(clickTip);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSwwSkFBMEosV0FBVyx5QkFBeUIsd0JBQXdCLEdBQUcsVUFBVSxnQkFBZ0IsaUJBQWlCLEdBQUcsY0FBYywyQ0FBMkMseUJBQXlCLG1CQUFtQixvQkFBb0IscUJBQXFCLEdBQUcsMEJBQTBCLHNDQUFzQyxnQkFBZ0IsdUJBQXVCLGtDQUFrQyx5QkFBeUIsR0FBRyw0QkFBNEIsVUFBVSxtREFBbUQsT0FBTyxXQUFXLGtEQUFrRCxPQUFPLFdBQVcsaURBQWlELE9BQU8sV0FBVyxrREFBa0QsT0FBTyxHQUFHLGdDQUFnQywrQ0FBK0Msb0NBQW9DLDBDQUEwQyw2QkFBNkIsR0FBRywrREFBK0Qsa0JBQWtCLHFCQUFxQix5QkFBeUIsNkJBQTZCLEdBQUcsa0NBQWtDLG1CQUFtQixxQkFBcUIsZ0JBQWdCLGlCQUFpQixHQUFHLGlDQUFpQyxtQkFBbUIsb0JBQW9CLGVBQWUsa0JBQWtCLEdBQUcsNkJBQTZCLHlCQUF5QixpQkFBaUIsR0FBRyxnQkFBZ0IsYUFBYSxrQkFBa0Isa0JBQWtCLG9CQUFvQiw4QkFBOEIsZ0JBQWdCLDBCQUEwQixtQ0FBbUMsR0FBRyxrQkFBa0IsbUJBQW1CLGdCQUFnQixrQkFBa0Isa0JBQWtCLG9CQUFvQixvQ0FBb0MsMEJBQTBCLHlDQUF5QyxtQkFBbUIsR0FBRyxzQkFBc0IsOEJBQThCLEdBQUcsa0JBQWtCLGdEQUFnRCxtQ0FBbUMsa0NBQWtDLG9CQUFvQiw4QkFBOEIsa0JBQWtCLHVCQUF1QixtQ0FBbUMsa0RBQWtELGlIQUFpSCw4QkFBOEIsR0FBRyw2QkFBNkIsNkJBQTZCLDBCQUEwQiw4QkFBOEIsb0JBQW9CLGtCQUFrQiw2QkFBNkIsOEJBQThCLDJCQUEyQixvQkFBb0Isc0JBQXNCLDBCQUEwQiw2QkFBNkIsR0FBRyxtQ0FBbUMsNkJBQTZCLEdBQUcsbUJBQW1CLG9CQUFvQiw2QkFBNkIsR0FBRyxnQkFBZ0IseUJBQXlCLHlCQUF5Qix3QkFBd0IsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsb0JBQW9CLG1DQUFtQyxzQkFBc0Isc0JBQXNCLG9CQUFvQix1QkFBdUIsOEJBQThCLDJCQUEyQiwwQkFBMEIsNkJBQTZCLDBCQUEwQiw4QkFBOEIsb0JBQW9CLEdBQUcsZ0JBQWdCLHNCQUFzQixHQUFHLHNCQUFzQiw2QkFBNkIsR0FBRyxnQkFBZ0Isc0JBQXNCLEdBQUcsZ0JBQWdCLHNCQUFzQiwwQkFBMEIsR0FBRyxRQUFRLHNCQUFzQixxQkFBcUIsR0FBRyxRQUFRLG1DQUFtQyx3QkFBd0IscUJBQXFCLEdBQUcsaUJBQWlCLDBDQUEwQyx3QkFBd0Isd0JBQXdCLEdBQUcsU0FBUyw4QkFBOEIsMEJBQTBCLGtCQUFrQixtQkFBbUIsR0FBRywwQkFBMEIsbUJBQW1CLDRCQUE0QixHQUFHLGFBQWEsK0JBQStCLGlDQUFpQyxHQUFHLGNBQWMsdUJBQXVCLEdBQUcseURBQXlELG1DQUFtQyxzQkFBc0Isb0JBQW9CLHVCQUF1Qiw4QkFBOEIsMkJBQTJCLDBCQUEwQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixvQkFBb0Isc0JBQXNCLEdBQUcsMEJBQTBCLDBDQUEwQyx3QkFBd0Isd0JBQXdCLHNCQUFzQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixHQUFHLG9CQUFvQixnREFBZ0QsbUNBQW1DLGtDQUFrQyxvQkFBb0IsOEJBQThCLDRCQUE0Qix1QkFBdUIsbUNBQW1DLGtEQUFrRCxpSEFBaUgsR0FBRyw0Q0FBNEMsb0JBQW9CLDRDQUE0Qyx5Q0FBeUMsR0FBRyx3REFBd0Qsd0JBQXdCLG1CQUFtQixvQkFBb0IsR0FBRyw4REFBOEQsMkNBQTJDLDhCQUE4QiwwQkFBMEIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLHFCQUFxQixxQkFBcUIsR0FBRyx1RUFBdUUsd0NBQXdDLDhCQUE4QiwwQkFBMEIsR0FBRyx5RkFBeUYsNkNBQTZDLDBCQUEwQixrQ0FBa0MsMENBQTBDLDZCQUE2QixHQUFHLG1DQUFtQyw2QkFBNkIsMkNBQTJDLHdCQUF3QixHQUFHLHlCQUF5QixtQkFBbUIsb0NBQW9DLEdBQUcsbUJBQW1CLHNCQUFzQixHQUFHLG1CQUFtQixzQkFBc0IsR0FBRyxtQkFBbUIsNEJBQTRCLHNCQUFzQixHQUFHLDhCQUE4Qix5QkFBeUIsbUJBQW1CLDhCQUE4QixHQUFHLG9HQUFvRyx5QkFBeUIsYUFBYSxnQkFBZ0IsY0FBYyxlQUFlLHlDQUF5QyxrQkFBa0IseUJBQXlCLGlCQUFpQixvQkFBb0IsMEJBQTBCLDhCQUE4QiwyQkFBMkIsb0NBQW9DLDBCQUEwQiw4Q0FBOEMsR0FBRyxtTUFBbU0sMEJBQTBCLGlCQUFpQixHQUFHLHFGQUFxRixzQkFBc0IsaUNBQWlDLEdBQUcsb0xBQW9MLCtCQUErQixHQUFHLG9CQUFvQixrQ0FBa0MsNkJBQTZCLEdBQUcsZ0VBQWdFLHFCQUFxQix1QkFBdUIsNkJBQTZCLE9BQU8sNEJBQTRCLDRCQUE0Qiw0QkFBNEIsaUNBQWlDLDBCQUEwQixpQ0FBaUMsOEJBQThCLGtDQUFrQyxPQUFPLGdFQUFnRSw0QkFBNEIsMEJBQTBCLDBCQUEwQixPQUFPLDBEQUEwRCxzQkFBc0Isd0JBQXdCLE9BQU8sOENBQThDLHdCQUF3QixpQ0FBaUMsT0FBTyxvR0FBb0csNEJBQTRCLE9BQU8sd0JBQXdCLHdCQUF3QixPQUFPLGtCQUFrQiwwQkFBMEIsT0FBTyxHQUFHLG1CQUFtQjtBQUN4c3BCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDWDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDZ0I7QUFDRTtBQUNBO0FBQ3ZDO0FBQ0EseURBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQVE7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFTO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBUztBQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCNkI7QUFDVztBQUNQO0FBQ0k7QUFDSjtBQUNHO0FBQ0U7QUFDRDtBQUNWO0FBQ0k7QUFDRjtBQUNBO0FBQ1M7O0FBRXhCOztBQUVmO0FBQ0EsbUJBQW1CLHNDQUFJO0FBQ3ZCO0FBQ0EsZ0JBQWdCLGdEQUFLO0FBQ3JCO0FBQ0EsZUFBZSx3Q0FBTTtBQUNyQjtBQUNBLGVBQWUsOENBQUk7QUFDbkI7QUFDQSxpQkFBaUIsd0NBQU07QUFDdkI7QUFDQSxjQUFjLDBDQUFPO0FBQ3JCO0FBQ0EsaUJBQWlCLDZDQUFNO0FBQ3ZCO0FBQ0EsY0FBYywwQ0FBUTtBQUN0QjtBQUNBLGNBQWMscUNBQUc7QUFDakI7QUFDQSxnQkFBZ0IsdUNBQUs7QUFDckI7QUFDQSxlQUFlLHVDQUFJO0FBQ25CO0FBQ0EsZUFBZSx1Q0FBSTtBQUNuQjtBQUNBLGdCQUFnQiwrQ0FBSzs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0tBQStLLDZJQUE2SSxrSUFBa0ksNElBQTRJLDhJQUE4SSx1SkFBdUosOEhBQThILHNJQUFzSSw4SUFBOEksNElBQTRJLE9BQU87OztBQUdwNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNKQUFzSiw2SUFBNkksa0lBQWtJLDRJQUE0SSw4SUFBOEksdUpBQXVKLDhIQUE4SCxzSUFBc0ksOElBQThJLDRJQUE0STs7O0FBR3AzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hTQTs7QUFFZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLHlJQUF5SSxRQUFROzs7QUFHeEw7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeko4Qjs7QUFFZjs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLHlJQUF5SSxRQUFROzs7QUFHeEw7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixzQ0FBSTs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL3NyYy9wYWdlMmxvYWQuanMiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vc3JjL3BhZ2UzbG9hZC5qcyIsIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9zcmMvcGFnZWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUl0aW0mZmFtaWx5PVBhcHJpa2EmZmFtaWx5PVF1YW50aWNvOml0YWxAMSZmYW1pbHk9UXVpY2tzYW5kJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDpib2xkZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWF4LXdpZHRoOjEwMCU7XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUGFwcmlrYScsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMC4zNXJlbTtcXG4gICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIGJsYWNrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbkBrZXlmcmFtZXMgY2hhbmdlQ29sb3Ige1xcbiAgICAwJSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDE4MSwgMTQxLCAyNTUpO1xcbiAgICB9XFxuICAgIDI1JSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDI1NSwgNDIsIDIxMik7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCByZ2IoMjQ5LCA0MSwgNjIpO1xcbiAgICB9XFxuICAgIDc1JSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDI1NSwgNDIsIDIxMik7XFxuICAgIH1cXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwidG9wX1xcXCJdOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigxNTgsIDEwNSwgMjU1KTtcXG5cXG4gICAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUNvbG9yO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwidG9wX1xcXCJdOjpiZWZvcmUsIGRpdltjbGFzc149XFxcInRvcF9cXFwiXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogYXF1YW1hcmluZTtcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwidG9wX1xcXCJdOjpiZWZvcmUge1xcbiAgICB0b3A6IC0wLjNlbTsgXFxuICAgIGJvdHRvbTogLTAuM2VtO1xcbiAgICBsZWZ0OiAxZW07XFxuICAgIHJpZ2h0OiAxZW07XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXTo6YWZ0ZXIge1xcbiAgICBsZWZ0OiAtMC4zZW07XFxuICAgIHJpZ2h0OiAtMC4zZW07XFxuICAgIHRvcDogMWVtO1xcbiAgICBib3R0b206IDFlbTtcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwiY29ybmVyX1xcXCJdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udG9waGVhZGVyIHtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA5dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcbi5ib3R0b21fZm9vdCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTgsIDc0LCAyNTUpO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi51bmRlcl90b3BoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmJpZ2dlc3RfYm94IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2xhbXAoMjAlLCAyNSUsIDI4JSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogY2xhbXAoMTIlLCAyMCUsIDI1JSksIGNsYW1wKDI1JSwgMzklLCA0MCUpLCBjbGFtcCgyNSUsIDM5JSwgNDAlKSwgY2xhbXAoMTIlLCAyMCUsIDI1JSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJzZWN0aW9uXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMC44NTtcXG4gICAgbWFyZ2luLXRvcDoxcmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJzZWN0aW9uXFxcIl0gPiBkaXYge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xcbn1cXG5cXG4jbWVudV90aXBfYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2hvdmVyVGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDAuM3JlbTtcXG59XFxuXFxuI2NsaWNrVGV4dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oZWFkbGluZXJfYm94IHtcXG4gICAgZm9udC1mYW1pbHk6ICdJdGltJywgY3Vyc2l2ZTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbi5zZWN0aW9uXzEge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5zZWN0aW9uXzEgPiBkaXYge1xcbiAgICBwYWRkaW5nOiAwLjJyZW0gMS4ycmVtO1xcbn1cXG5cXG4uc2VjdGlvbl8yIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uc2VjdGlvbl8zIHtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJdGltJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG4udGl0bGUtdGV4dCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVhbnRpY28nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmltZyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbn1cXG5cXG5hLCBhOmxpbmssIGE6dmlzaXRlZCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gICAgY29sb3I6cmdiKDI0OCwgMTY1LCAyNTUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuYTphY3RpdmUge1xcbiAgICBjb2xvcjphcXVhbWFyaW5lO1xcbn1cXG5cXG4vKnVuZGVybmVhdGggaXMgcGFnZTJMb2FkIENTUyovXFxuXFxuLmhlYWRsaW5lcl9ib3hfMiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSXRpbScsIGN1cnNpdmU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgb3BhY2l0eTogMC44NTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG5oMltjbGFzc149XFxcInRpdGxlXFxcIl0ge1xcbiAgICBmb250LWZhbWlseTogJ1F1YW50aWNvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYmlnZ2VzdF9ib3hfMiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjbGFtcCgyMCUsIDI1JSwgMjglKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBjbGFtcCgxMiUsIDIwJSwgMjUlKSwgY2xhbXAoMjUlLCAzOSUsIDQwJSksIGNsYW1wKDI1JSwgMzklLCA0MCUpLCBjbGFtcCgyNSUsIDM5JSwgNDAlKTtcXG59XFxuXFxuLmJveF9hcHBzLCAuYm94X2VudHJlZXMsIC5ib3hfZGVzc2VydHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA1MCUpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA1MCUpO1xcbn1cXG5cXG4uYm94X2FwcHMgaW1nLCAuYm94X2VudHJlZXMgaW1nLCAuYm94X2Rlc3NlcnRzIGltZyB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogOTguOCU7XFxuICAgIGhlaWdodDogMjFyZW07XFxufVxcblxcbmRpdltpZF49XFxcImVudF9cXFwiXSwgZGl2W2lkXj1cXFwiYXBwX1xcXCJdLCBkaXZbaWRePVxcXCJkZXNzX1xcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMC4ycmVtIDAuNHJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMC4ycmVtIGF1dG87XFxuICAgIG1pbi13aWR0aDogNTUlO1xcbiAgICBtYXgtd2lkdGg6IDY1JTtcXG59XFxuXFxuZGl2W2lkXj1cXFwiYXBwYm94X1xcXCJdLCBkaXZbaWRePVxcXCJlbnRib3hfXFxcIl0sIGRpdltpZF49XFxcImRlc3Nib3hfXFxcIl0ge1xcbiAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5kaXZbaWRePVxcXCJhcHBib3hfXFxcIl06aG92ZXIsIGRpdltpZF49XFxcImVudGJveF9cXFwiXTpob3ZlciwgZGl2W2lkXj1cXFwiZGVzc2JveF9cXFwiXTpob3ZlciB7XFxuICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCByZ2IoMjMwLCAwLCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBhbmltYXRpb24tbmFtZTogY2hhbmdlQ29sb3I7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xcbn1cXG5cXG5kaXZbY2xhc3MqPVxcXCJfcDJcXFwiXSA+IGRpdiB7ICAgIFxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5kaXZbY2xhc3MqPVxcXCJfcDJcXFwiXSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zZWN0aW9uXzFfcDIge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5zZWN0aW9uXzJfcDIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5zZWN0aW9uXzNfcDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG59XFxuXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuICBcXG5kaXZbaWRePVxcXCJvdmVybGF5YXBwX3dyYXBfXFxcIl0sIGRpdltpZF49XFxcIm92ZXJsYXllbnRfd3JhcF9cXFwiXSwgZGl2W2lkXj1cXFwib3ZlcmxheWRlc3Nfd3JhcF9cXFwiXSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM2LCA2MiwgMjA2LCAwLjYpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycywgdmlzaWJpbGl0eSAuMnM7XFxufVxcbiAgXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXTpob3ZlciBkaXZbaWRePVxcXCJvdmVybGF5YXBwX3dyYXBfXFxcIl0sXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXTpob3ZlciBkaXZbaWRePVxcXCJvdmVybGF5ZW50X3dyYXBfXFxcIl0sXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXTpob3ZlciBkaXZbaWRePVxcXCJvdmVybGF5ZGVzc193cmFwX1xcXCJdIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuICBcXG5kaXZbaWRePVxcXCJvdmVybGF5YXBwX1xcXCJdLCBkaXZbaWRePVxcXCJvdmVybGF5ZW50X1xcXCJdLCBkaXZbaWRePVxcXCJvdmVybGF5ZGVzc19cXFwiXSB7XFxuICAgIHRyYW5zaXRpb246IC4ycztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFlbSk7XFxufVxcbiAgXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXTpob3ZlciBkaXZbaWRePVxcXCJvdmVybGF5YXBwX1xcXCJdLFxcbmRpdltpZF49XFxcImltZ3dyYXBwZXJfXFxcIl06aG92ZXIgZGl2W2lkXj1cXFwib3ZlcmxheWVudF9cXFwiXSxcXG5kaXZbaWRePVxcXCJpbWd3cmFwcGVyX1xcXCJdOmhvdmVyIGRpdltpZF49XFxcIm92ZXJsYXlkZXNzX1xcXCJdIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG5cXG5kaXYjbG9uZ2Zvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyg2cHggKyAuNXZ3KTtcXG4gICAgbWFyZ2luOiAwLjJyZW0sIDAuNHJlbTtcXG59XFxuXFxuLypQaG9uZSBDU1MqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgZGl2LnRvcGhlYWRlciB7XFxuICAgICAgICBoZWlnaHQ6IDEydmg7XFxuICAgICAgICBmb250LXNpemU6IHNtYWxsZXI7XFxuICAgIH1cXG4gICAgaDJbY2xhc3NePVxcXCJ0aXRsZVxcXCJdIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgfVxcbiAgICBkaXZbaWRePVxcXCJlbnRfXFxcIl0sIGRpdltpZF49XFxcImFwcF9cXFwiXSwgZGl2W2lkXj1cXFwiZGVzc19cXFwiXSB7XFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDExJTtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICAuYm94X2FwcHMgaW1nLCAuYm94X2VudHJlZXMgaW1nLCAuYm94X2Rlc3NlcnRzIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTRyZW07XFxuICAgIH1cXG4gICAgLmJveF9hcHBzLCAuYm94X2VudHJlZXMsIC5ib3hfZGVzc2VydHMge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgZGl2W2lkXj1cXFwib3ZlcmxheWFwcF93cmFwX1xcXCJdLCBkaXZbaWRePVxcXCJvdmVybGF5ZW50X3dyYXBfXFxcIl0sIGRpdltpZF49XFxcIm92ZXJsYXlkZXNzX3dyYXBfXFxcIl0ge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIH1cXG4gICAgXFxuICAgICNob3ZlclRleHQge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAjY2xpY2tUZXh0IHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLHdDQUF3QztJQUM1QztJQUNBO1FBQ0ksdUNBQXVDO0lBQzNDO0lBQ0E7UUFDSSxzQ0FBc0M7SUFDMUM7SUFDQTtRQUNJLHVDQUF1QztJQUMzQztBQUNKOztBQUVBO0lBQ0ksd0NBQXdDOztJQUV4QywyQkFBMkI7SUFDM0IsbUNBQW1DO0lBQ25DLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsUUFBUTtJQUNSLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxNQUFNO0lBQ04sV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseURBQXlDO0lBQ3pDLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QiwyQ0FBMkM7SUFDM0MsMEdBQTBHO0lBQzFHLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUEsOEJBQThCOztBQUU5QjtJQUNJLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlEQUF5QztJQUN6Qyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsMkNBQTJDO0lBQzNDLDBHQUEwRztBQUM5Rzs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixtQ0FBbUM7SUFDbkMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixrQ0FBa0M7SUFDbEMsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsdUNBQXVDO0FBQzNDOztBQUVBOzs7SUFHSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7QUFFQTs7O0lBR0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHNCQUFzQjtBQUMxQjs7QUFFQSxZQUFZOztBQUVaO0lBQ0k7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksV0FBVztRQUNYLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JdGltJmZhbWlseT1QYXByaWthJmZhbWlseT1RdWFudGljbzppdGFsQDEmZmFtaWx5PVF1aWNrc2FuZCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDpib2xkZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWF4LXdpZHRoOjEwMCU7XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUGFwcmlrYScsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMC4zNXJlbTtcXG4gICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIGJsYWNrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbkBrZXlmcmFtZXMgY2hhbmdlQ29sb3Ige1xcbiAgICAwJSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDE4MSwgMTQxLCAyNTUpO1xcbiAgICB9XFxuICAgIDI1JSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDI1NSwgNDIsIDIxMik7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCByZ2IoMjQ5LCA0MSwgNjIpO1xcbiAgICB9XFxuICAgIDc1JSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDI1NSwgNDIsIDIxMik7XFxuICAgIH1cXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwidG9wX1xcXCJdOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigxNTgsIDEwNSwgMjU1KTtcXG5cXG4gICAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUNvbG9yO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwidG9wX1xcXCJdOjpiZWZvcmUsIGRpdltjbGFzc149XFxcInRvcF9cXFwiXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogYXF1YW1hcmluZTtcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwidG9wX1xcXCJdOjpiZWZvcmUge1xcbiAgICB0b3A6IC0wLjNlbTsgXFxuICAgIGJvdHRvbTogLTAuM2VtO1xcbiAgICBsZWZ0OiAxZW07XFxuICAgIHJpZ2h0OiAxZW07XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXTo6YWZ0ZXIge1xcbiAgICBsZWZ0OiAtMC4zZW07XFxuICAgIHJpZ2h0OiAtMC4zZW07XFxuICAgIHRvcDogMWVtO1xcbiAgICBib3R0b206IDFlbTtcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwiY29ybmVyX1xcXCJdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udG9waGVhZGVyIHtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA5dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcbi5ib3R0b21fZm9vdCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTgsIDc0LCAyNTUpO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi51bmRlcl90b3BoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmJpZ2dlc3RfYm94IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2JhY2tncm91bmQuanBnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNsYW1wKDIwJSwgMjUlLCAyOCUpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGNsYW1wKDEyJSwgMjAlLCAyNSUpLCBjbGFtcCgyNSUsIDM5JSwgNDAlKSwgY2xhbXAoMjUlLCAzOSUsIDQwJSksIGNsYW1wKDEyJSwgMjAlLCAyNSUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwic2VjdGlvblxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxuICAgIG1hcmdpbi10b3A6MXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuM3JlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwic2VjdGlvblxcXCJdID4gZGl2IHtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcXG59XFxuXFxuI21lbnVfdGlwX2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNob3ZlclRleHQge1xcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAwLjNyZW07XFxufVxcblxcbiNjbGlja1RleHQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGVhZGxpbmVyX2JveCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSXRpbScsIGN1cnNpdmU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbn1cXG5cXG4uc2VjdGlvbl8xIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uc2VjdGlvbl8xID4gZGl2IHtcXG4gICAgcGFkZGluZzogMC4ycmVtIDEuMnJlbTtcXG59XFxuXFxuLnNlY3Rpb25fMiB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLnNlY3Rpb25fMyB7XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSXRpbScsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG59XFxuXFxuLnRpdGxlLXRleHQge1xcbiAgICBmb250LWZhbWlseTogJ1F1YW50aWNvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5pbWcge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGhlaWdodDogNXJlbTtcXG59XFxuXFxuYSwgYTpsaW5rLCBhOnZpc2l0ZWQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICAgIGNvbG9yOnJnYigyNDgsIDE2NSwgMjU1KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmE6YWN0aXZlIHtcXG4gICAgY29sb3I6YXF1YW1hcmluZTtcXG59XFxuXFxuLyp1bmRlcm5lYXRoIGlzIHBhZ2UyTG9hZCBDU1MqL1xcblxcbi5oZWFkbGluZXJfYm94XzIge1xcbiAgICBmb250LWZhbWlseTogJ0l0aW0nLCBjdXJzaXZlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuaDJbY2xhc3NePVxcXCJ0aXRsZVxcXCJdIHtcXG4gICAgZm9udC1mYW1pbHk6ICdRdWFudGljbycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmJpZ2dlc3RfYm94XzIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYmFja2dyb3VuZC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNsYW1wKDIwJSwgMjUlLCAyOCUpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGNsYW1wKDEyJSwgMjAlLCAyNSUpLCBjbGFtcCgyNSUsIDM5JSwgNDAlKSwgY2xhbXAoMjUlLCAzOSUsIDQwJSksIGNsYW1wKDI1JSwgMzklLCA0MCUpO1xcbn1cXG5cXG4uYm94X2FwcHMsIC5ib3hfZW50cmVlcywgLmJveF9kZXNzZXJ0cyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDUwJSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDUwJSk7XFxufVxcblxcbi5ib3hfYXBwcyBpbWcsIC5ib3hfZW50cmVlcyBpbWcsIC5ib3hfZGVzc2VydHMgaW1nIHtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIHdpZHRoOiA5OC44JTtcXG4gICAgaGVpZ2h0OiAyMXJlbTtcXG59XFxuXFxuZGl2W2lkXj1cXFwiZW50X1xcXCJdLCBkaXZbaWRePVxcXCJhcHBfXFxcIl0sIGRpdltpZF49XFxcImRlc3NfXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC40cmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwLjJyZW0gYXV0bztcXG4gICAgbWluLXdpZHRoOiA1NSU7XFxuICAgIG1heC13aWR0aDogNjUlO1xcbn1cXG5cXG5kaXZbaWRePVxcXCJhcHBib3hfXFxcIl0sIGRpdltpZF49XFxcImVudGJveF9cXFwiXSwgZGl2W2lkXj1cXFwiZGVzc2JveF9cXFwiXSB7XFxuICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmRpdltpZF49XFxcImFwcGJveF9cXFwiXTpob3ZlciwgZGl2W2lkXj1cXFwiZW50Ym94X1xcXCJdOmhvdmVyLCBkaXZbaWRePVxcXCJkZXNzYm94X1xcXCJdOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigyMzAsIDAsIDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2VDb2xvcjtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XFxufVxcblxcbmRpdltjbGFzcyo9XFxcIl9wMlxcXCJdID4gZGl2IHsgICAgXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmRpdltjbGFzcyo9XFxcIl9wMlxcXCJdIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNlY3Rpb25fMV9wMiB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLnNlY3Rpb25fMl9wMiB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLnNlY3Rpb25fM19wMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cXG5kaXZbaWRePVxcXCJpbWd3cmFwcGVyX1xcXCJdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4gIFxcbmRpdltpZF49XFxcIm92ZXJsYXlhcHBfd3JhcF9cXFwiXSwgZGl2W2lkXj1cXFwib3ZlcmxheWVudF93cmFwX1xcXCJdLCBkaXZbaWRePVxcXCJvdmVybGF5ZGVzc193cmFwX1xcXCJdIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzYsIDYyLCAyMDYsIDAuNik7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzLCB2aXNpYmlsaXR5IC4ycztcXG59XFxuICBcXG5kaXZbaWRePVxcXCJpbWd3cmFwcGVyX1xcXCJdOmhvdmVyIGRpdltpZF49XFxcIm92ZXJsYXlhcHBfd3JhcF9cXFwiXSxcXG5kaXZbaWRePVxcXCJpbWd3cmFwcGVyX1xcXCJdOmhvdmVyIGRpdltpZF49XFxcIm92ZXJsYXllbnRfd3JhcF9cXFwiXSxcXG5kaXZbaWRePVxcXCJpbWd3cmFwcGVyX1xcXCJdOmhvdmVyIGRpdltpZF49XFxcIm92ZXJsYXlkZXNzX3dyYXBfXFxcIl0ge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4gIFxcbmRpdltpZF49XFxcIm92ZXJsYXlhcHBfXFxcIl0sIGRpdltpZF49XFxcIm92ZXJsYXllbnRfXFxcIl0sIGRpdltpZF49XFxcIm92ZXJsYXlkZXNzX1xcXCJdIHtcXG4gICAgdHJhbnNpdGlvbjogLjJzO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMWVtKTtcXG59XFxuICBcXG5kaXZbaWRePVxcXCJpbWd3cmFwcGVyX1xcXCJdOmhvdmVyIGRpdltpZF49XFxcIm92ZXJsYXlhcHBfXFxcIl0sXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXTpob3ZlciBkaXZbaWRePVxcXCJvdmVybGF5ZW50X1xcXCJdLFxcbmRpdltpZF49XFxcImltZ3dyYXBwZXJfXFxcIl06aG92ZXIgZGl2W2lkXj1cXFwib3ZlcmxheWRlc3NfXFxcIl0ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxufVxcblxcbmRpdiNsb25nZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDZweCArIC41dncpO1xcbiAgICBtYXJnaW46IDAuMnJlbSwgMC40cmVtO1xcbn1cXG5cXG4vKlBob25lIENTUyovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBkaXYudG9waGVhZGVyIHtcXG4gICAgICAgIGhlaWdodDogMTJ2aDtcXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcXG4gICAgfVxcbiAgICBoMltjbGFzc149XFxcInRpdGxlXFxcIl0ge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICB9XFxuICAgIGRpdltpZF49XFxcImVudF9cXFwiXSwgZGl2W2lkXj1cXFwiYXBwX1xcXCJdLCBkaXZbaWRePVxcXCJkZXNzX1xcXCJdIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgICAgbWluLWhlaWdodDogMTElO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIC5ib3hfYXBwcyBpbWcsIC5ib3hfZW50cmVlcyBpbWcsIC5ib3hfZGVzc2VydHMgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxNHJlbTtcXG4gICAgfVxcbiAgICAuYm94X2FwcHMsIC5ib3hfZW50cmVlcywgLmJveF9kZXNzZXJ0cyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbiAgICBkaXZbaWRePVxcXCJvdmVybGF5YXBwX3dyYXBfXFxcIl0sIGRpdltpZF49XFxcIm92ZXJsYXllbnRfd3JhcF9cXFwiXSwgZGl2W2lkXj1cXFwib3ZlcmxheWRlc3Nfd3JhcF9cXFwiXSB7XFxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgI2hvdmVyVGV4dCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgICNjbGlja1RleHQge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBwYWdlTG9hZCBmcm9tICcuL3BhZ2Vsb2FkLmpzJztcbmltcG9ydCBwYWdlMkxvYWQgZnJvbSAnLi9wYWdlMmxvYWQuanMnO1xuaW1wb3J0IHBhZ2UzTG9hZCBmcm9tICcuL3BhZ2UzbG9hZC5qcyc7XG4gIFxucGFnZTJMb2FkKCk7XG5cbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9wX2hvbWVcIilbMF07XG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicGFnZTEgd29ya3NcIik7XG4gICAgY29uc3QgYWxsVGhlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuICAgIGFsbFRoZUNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICBwYWdlTG9hZCgpO1xufSlcblxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b3BfbWVudVwiKVswXTtcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJwYWdlMiB3b3Jrc1wiKTtcbiAgICBjb25zdCBhbGxUaGVDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXG4gICAgYWxsVGhlQ29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIHBhZ2UyTG9hZCgpO1xufSlcblxuY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b3BfY29udGFjdFwiKVswXTtcbmNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJwYWdlMyB3b3Jrc1wiKTtcbiAgICBjb25zdCBhbGxUaGVDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXG4gICAgYWxsVGhlQ29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIHBhZ2UzTG9hZCgpO1xufSkiLCJpbXBvcnQgSWNvbiBmcm9tICcuL2Nvb2suanBnJztcbmltcG9ydCBCcnVzcyBmcm9tICcuL2JydXNzZWxzcHJvdXRzLmpwZyc7XG5pbXBvcnQgQnVyZ2VyIGZyb20gJy4vYnVyZ2VyLmpwZyc7XG5pbXBvcnQgQ2lubiBmcm9tICcuL2Npbm5hbW9ucm9sbC5qcGcnO1xuaW1wb3J0IENvb2tpZSBmcm9tICcuL2Nvb2tpZS5qcGcnO1xuaW1wb3J0IEVnZ3JvbGwgZnJvbSAnLi9lZ2dyb2xscy5qcGcnO1xuaW1wb3J0IEZyZW5jaCBmcm9tICcuL2ZyZW5jaHRvYXN0LmpwZyc7XG5pbXBvcnQgSWNlY3JlYW0gZnJvbSAnLi9pY2VjcmVhbS5qcGcnO1xuaW1wb3J0IFBobyBmcm9tICcuL3Boby5qcGcnO1xuaW1wb3J0IFBpenphIGZyb20gJy4vcGl6emEuanBnJztcbmltcG9ydCBQb2tlIGZyb20gJy4vcG9rZS5qcGcnO1xuaW1wb3J0IFNvdXAgZnJvbSAnLi9zb3VwLmpwZyc7XG5pbXBvcnQgU3RlYWsgZnJvbSAnLi9zdGVha3NrZXdlcnMuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZTJMb2FkKCkge1xuXG4gICAgY29uc3QgY29va0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBjb29rSWNvbi5zcmMgPSBJY29uO1xuICAgIGNvbnN0IGJydXNzID0gbmV3IEltYWdlKCk7XG4gICAgYnJ1c3Muc3JjID0gQnJ1c3M7XG4gICAgY29uc3QgYnVyZyA9IG5ldyBJbWFnZSgpO1xuICAgIGJ1cmcuc3JjID0gQnVyZ2VyO1xuICAgIGNvbnN0IGNpbm4gPSBuZXcgSW1hZ2UoKTtcbiAgICBjaW5uLnNyYyA9IENpbm47XG4gICAgY29uc3QgY29va2llID0gbmV3IEltYWdlKCk7XG4gICAgY29va2llLnNyYyA9IENvb2tpZTtcbiAgICBjb25zdCBlZ2cgPSBuZXcgSW1hZ2UoKTtcbiAgICBlZ2cuc3JjID0gRWdncm9sbDtcbiAgICBjb25zdCBmcmVuY2ggPSBuZXcgSW1hZ2UoKTtcbiAgICBmcmVuY2guc3JjID0gRnJlbmNoO1xuICAgIGNvbnN0IGljZSA9IG5ldyBJbWFnZSgpO1xuICAgIGljZS5zcmMgPSBJY2VjcmVhbTtcbiAgICBjb25zdCBwaG8gPSBuZXcgSW1hZ2UoKTtcbiAgICBwaG8uc3JjID0gUGhvO1xuICAgIGNvbnN0IHBpenphID0gbmV3IEltYWdlKCk7XG4gICAgcGl6emEuc3JjID0gUGl6emE7XG4gICAgY29uc3QgcG9rZSA9IG5ldyBJbWFnZSgpO1xuICAgIHBva2Uuc3JjID0gUG9rZTtcbiAgICBjb25zdCBzb3VwID0gbmV3IEltYWdlKCk7XG4gICAgc291cC5zcmMgPSBTb3VwO1xuICAgIGNvbnN0IHN0ZWFrID0gbmV3IEltYWdlKCk7XG4gICAgc3RlYWsuc3JjID0gU3RlYWs7XG5cbiAgICBjb25zdCBoZWFkbGluZXJib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRsaW5lcmJveC5jbGFzc05hbWUgPSBcImhlYWRsaW5lcl9ib3hfMlwiO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9IFwidG9waGVhZGVyXCI7XG4gICAgY29uc3QgdW5kZXJoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHVuZGVyaGVhZGVyLmNsYXNzTmFtZSA9IFwidW5kZXJfdG9waGVhZGVyXCI7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJiaWdnZXN0X2JveF8yXCI7XG4gICAgY29uc3Qgc2VjdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlY3Rpb24xLmNsYXNzTmFtZSA9IFwic2VjdGlvbl8xX3AyXCI7XG4gICAgY29uc3Qgc2VjdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlY3Rpb24yLmNsYXNzTmFtZSA9IFwic2VjdGlvbl8yX3AyXCI7XG4gICAgY29uc3Qgc2VjdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlY3Rpb24zLmNsYXNzTmFtZSA9IFwic2VjdGlvbl8zX3AyXCI7XG5cbiAgICBjb25zdCBoZWFkZXJfbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyX21lbnUuY2xhc3NOYW1lID0gXCJ0b3BfbWVudVwiO1xuICAgIGNvbnN0IG1lbnVfdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudV90ZXh0LmNsYXNzTmFtZSA9IFwiY29ybmVyX3RleHRtZW51XCI7XG4gICAgbWVudV90ZXh0LmlubmVySFRNTCA9IFwiTWVudVwiO1xuXG4gICAgY29uc3QgaGVhZGVyX2hvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcl9ob21lLmNsYXNzTmFtZSA9IFwidG9wX2hvbWVcIjtcbiAgICBjb25zdCBob21lX3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWVfdGV4dC5jbGFzc05hbWUgPSBcImNvcm5lcl90ZXh0aG9tZVwiO1xuICAgIGhvbWVfdGV4dC5pbm5lckhUTUwgPSBcIkhvbWVcIjtcblxuICAgIGNvbnN0IGZvb3Rlcl9ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3Rlcl9ib3guY2xhc3NOYW1lID0gXCJib3R0b21fZm9vdFwiO1xuXG4gICAgY29uc3QgZm9vdGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyMS5pZCA9IFwibG9uZ2Zvb3RlclwiO1xuICAgIGZvb3RlcjEuaW5uZXJIVE1MID0gJ1Bob3RvcyBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQHJhcGhhZWxsb3Zhc2tpP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlJhcGhhZWwgTG92YXNraTwvYT4sJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BhbWlyX3ZfYWxpP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPmFtaXJhbGkgbWlyaGFzaGVtaWFuPC9hPiwmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQG90amVwP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPllvc2VwIFN1Z2lhcnRvPC9hPiwmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQHBob3RvcGhvdG9zdG9jaz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5LaXJpbGwgVG9ua2lraDwvYT4sJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BwaG90b3Rhc3R5Zm9vZD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5Gb29kIFBob3RvZ3JhcGhlcjwvYT4sJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL2phL0BhdXJlbF9fbGVucz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5BdXLDqWxpZW4gTGVtYXNzb24tVGjDqW9iYWxkPC9hPiwmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGtvcmllP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPktvcmllIEN1bGw8L2E+LCZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AbW9uaXFhP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPk1vbmlrYSBHcmFia293c2thPC9hPiwmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQG1pcmFjbGV0d2VudHlvbmU/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+Sm9zZXBoIEdvbnphbGV6PC9hPiwmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGt5bmRhbGxyYW1pcmV6P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPkt5bmRhbGwgUmFtaXJlejwvYT4sJm5ic3A7JiZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9Ac2ViYXN0aWFuY29tYW4/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+U2ViYXN0aWFuIENvbWFuIFBob3RvZ3JhcGh5PC9hPiBvbiBVbnNwbGFzaCc7XG5cblxuICAgIGNvbnN0IGhlYWRlcl9jb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfY29udGFjdC5jbGFzc05hbWUgPSBcInRvcF9jb250YWN0XCI7XG4gICAgY29uc3QgY29udGFjdF90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0X3RleHQuY2xhc3NOYW1lID0gXCJjb3JuZXJfdGV4dGNvbnRhY3RcIjtcbiAgICBjb250YWN0X3RleHQuaW5uZXJIVE1MID0gXCJDb250YWN0XCI7XG5cbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkbGluZS5jbGFzc05hbWUgPSBcImhlYWRsaW5lclwiXG4gICAgaGVhZGxpbmUuaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gICAgY29uc3QgbWVudUFuZFRpcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUFuZFRpcEJveC5pZCA9IFwibWVudV90aXBfYm94XCI7XG4gICAgY29uc3QgaG92ZXJUaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdmVyVGlwLmlkID0gXCJob3ZlclRleHRcIjtcbiAgICBob3ZlclRpcC5pbm5lckhUTUwgPSBcIkZvciBtb3JlIGluZm9ybWF0aW9uLCA8YnI+cGxlYXNlIGhvdmVyIG92ZXIgdGhlIGl0ZW0hXCJcbiAgICBjb25zdCBjbGlja1RpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2xpY2tUaXAuaWQgPSBcImNsaWNrVGV4dFwiO1xuICAgIGNsaWNrVGlwLmlubmVySFRNTCA9IFwiRm9yIG1vcmUgaW5mb3JtYXRpb24sIDxicj5wbGVhc2UgY2xpY2sgb24gdGhlIGl0ZW0hXCJcblxuICAgIGNvbnN0IGdyaWRfYXBwX3NlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3JpZF9hcHBfc2VwLmNsYXNzTmFtZSA9IFwiZ3JpZF9zZXBfYXBwXCI7XG4gICAgY29uc3QgZ3JpZF9lbnRfc2VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncmlkX2VudF9zZXAuY2xhc3NOYW1lID0gXCJncmlkX3NlcF9lbnRcIjtcbiAgICBjb25zdCBncmlkX2Rlc3Nfc2VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncmlkX2Rlc3Nfc2VwLmNsYXNzTmFtZSA9IFwiZ3JpZF9zZXBfZGVzc1wiO1xuXG4gICAgY29uc3QgYXBwX2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXBwX2JveC5jbGFzc05hbWUgPSBcImJveF9hcHBzXCI7XG4gICAgY29uc3QgZW50cmVlc19ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVudHJlZXNfYm94LmNsYXNzTmFtZSA9IFwiYm94X2VudHJlZXNcIjtcbiAgICBjb25zdCBkZXNzZXJ0c19ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc3NlcnRzX2JveC5jbGFzc05hbWUgPSBcImJveF9kZXNzZXJ0c1wiO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgbGV0IGJveGVzX3MxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94ZXNfczEuaWQgPSBcImFwcGJveF9cIiArIGk7XG4gICAgICAgIGxldCBhcHBfaW5kaXZpZHVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFwcF9pbmRpdmlkdWFsLmlkID0gXCJhcHBfXCIgKyBpO1xuICAgICAgICBsZXQgb3ZlcmxheV9hcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvdmVybGF5X2FwcC5pZCA9IFwib3ZlcmxheWFwcF9cIiArIGk7XG4gICAgICAgIGxldCBvdmVybGF5X2FwcF93cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgb3ZlcmxheV9hcHBfd3JhcC5pZCA9IFwib3ZlcmxheWFwcF93cmFwX1wiICsgaTtcbiAgICAgICAgbGV0IGltZ193cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW1nX3dyYXAuaWQgPSBcImltZ3dyYXBwZXJfXCIgKyBpO1xuXG4gICAgICAgIGJveGVzX3MxLmFwcGVuZENoaWxkKGFwcF9pbmRpdmlkdWFsKTtcbiAgICAgICAgaW1nX3dyYXAuYXBwZW5kQ2hpbGQob3ZlcmxheV9hcHBfd3JhcCk7XG4gICAgICAgIG92ZXJsYXlfYXBwX3dyYXAuYXBwZW5kQ2hpbGQob3ZlcmxheV9hcHApO1xuICAgICAgICBib3hlc19zMS5hcHBlbmRDaGlsZChpbWdfd3JhcCk7XG4gICAgICAgIGFwcF9ib3guYXBwZW5kQ2hpbGQoYm94ZXNfczEpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgaW1nd3JhcHBlcl8xLmFwcGVuZENoaWxkKGJydXNzKTtcbiAgICAgICAgICAgIGltZ3dyYXBwZXJfMi5hcHBlbmRDaGlsZChzb3VwKTtcbiAgICAgICAgICAgIGltZ3dyYXBwZXJfMy5hcHBlbmRDaGlsZChzdGVhayk7XG4gICAgICAgICAgICBpbWd3cmFwcGVyXzQuYXBwZW5kQ2hpbGQoZWdnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXzFcIikuaW5uZXJIVE1MID0gXCJCcnVzc2VsIFNwcm91dHNcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXzJcIikuaW5uZXJIVE1MID0gXCJEYWlseSBTb3VwXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcF8zXCIpLmlubmVySFRNTCA9IFwiU3RlYWsgU2tld2Vyc1wiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBfNFwiKS5pbm5lckhUTUwgPSBcIkVnZyBSb2xsc1wiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5YXBwXzFcIikuaW5uZXJIVE1MID0gXCJCcnVzc2VsIHNwcm91dHMgYXJlIGhlYWx0aHkgZm9yIHlvdSwgcmlnaHQ/IFdyb25nLiBPdXJzIGFyZSBmcmllZCB3aXRoIHRoZSBoaWdoZXN0IHRyYW5zLWZhdCBwZXJjZW50IG9pbCBpbiB0aGUgdW5pdmVyc2UuIEFuZCB0aGF0J3Mgd2h5IHRoZXkncmUgc28gZGFybiBkZWxpY2lvdXMuXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlhcHBfMlwiKS5pbm5lckhUTUwgPSBcIlRoZSBkYWlseSBzb3VwIGlzIHNvbWV0aGluZyBvZiBhIG15c3RlcnksIG1hZGUgb2YgcmFyZSBwbGFudHMsIGFuaW1hbHMsIGFuZCB1bmlxdWUgYWxpZW4gbGlmZSBmb3Jtcy5cIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWFwcF8zXCIpLmlubmVySFRNTCA9IFwiT3VyIHNrZXdlcnMgd2lsbCBoYXZlIHlvdXIgbW91dGggd2F0ZXJpbmcgYmVmb3JlIHlvdSBldmVuIHNlZSB0aGVtISBUcnkgb25lIG9uIGZvciBzaXplLiBPciB0d28uIE9yIGZpdmUuIFdlJ3JlIG5vdCBqdWRnaW5nLlwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5YXBwXzRcIikuaW5uZXJIVE1MID0gXCJNYWRlIGluIHRoZSBzdHlsZSBvZiBteSBtb3RoZXJsYW5kLCB0aGVzZSBUYWl3YW5lc2UgZWdnIHJvbGxzIHdpbGwgaGF2ZSB3b25kZXJpbmcgaWYgeW91IHNob3VsZCBqdXN0IGhhdmUgbW9yZSBlZ2cgcm9sbHMgYXMgeW91ciBlbnRpcmUgbWVhbC5cIjtcbiAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8IDU7IHgrKykge1xuICAgICAgICBsZXQgYm94ZXNfczIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3hlc19zMi5pZCA9IFwiZW50Ym94X1wiICsgeDtcbiAgICAgICAgbGV0IGVudF9pbmRpdmlkdWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZW50X2luZGl2aWR1YWwuaWQgPSBcImVudF9cIiArIHg7XG4gICAgICAgIGxldCBvdmVybGF5X2VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG92ZXJsYXlfZW50LmlkID0gXCJvdmVybGF5ZW50X1wiICsgeDtcbiAgICAgICAgbGV0IG92ZXJsYXlfZW50X3dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvdmVybGF5X2VudF93cmFwLmlkID0gXCJvdmVybGF5ZW50X3dyYXBfXCIgKyB4O1xuICAgICAgICBsZXQgaW1nX3dyYXBfZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW1nX3dyYXBfZW50LmlkID0gXCJpbWd3cmFwcGVyX2VudF9cIiArIHg7XG5cblxuICAgICAgICBib3hlc19zMi5hcHBlbmRDaGlsZChlbnRfaW5kaXZpZHVhbCk7XG4gICAgICAgIGltZ193cmFwX2VudC5hcHBlbmRDaGlsZChvdmVybGF5X2VudF93cmFwKTtcbiAgICAgICAgb3ZlcmxheV9lbnRfd3JhcC5hcHBlbmRDaGlsZChvdmVybGF5X2VudCk7XG4gICAgICAgIGJveGVzX3MyLmFwcGVuZENoaWxkKGltZ193cmFwX2VudCk7XG4gICAgICAgIGVudHJlZXNfYm94LmFwcGVuZENoaWxkKGJveGVzX3MyKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGltZ3dyYXBwZXJfZW50XzEuYXBwZW5kQ2hpbGQoYnVyZyk7XG4gICAgICAgICAgICBpbWd3cmFwcGVyX2VudF8yLmFwcGVuZENoaWxkKHBobyk7XG4gICAgICAgICAgICBpbWd3cmFwcGVyX2VudF8zLmFwcGVuZENoaWxkKHBva2UpO1xuICAgICAgICAgICAgaW1nd3JhcHBlcl9lbnRfNC5hcHBlbmRDaGlsZChwaXp6YSk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVudF8xXCIpLmlubmVySFRNTCA9IFwiQmFjb24gQnVyZ2VyXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVudF8yXCIpLmlubmVySFRNTCA9IFwiUGhvXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVudF8zXCIpLmlubmVySFRNTCA9IFwiUG9rZSBCb3dsXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVudF80XCIpLmlubmVySFRNTCA9IFwiUGl6emFcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWVudF8xXCIpLmlubmVySFRNTCA9IFwiRXZlciBoZWFyZCBvZiBzcGFjZSBwaWdzPyBXZWxsLCBub3cgeW91IGhhdmUuIE91ciBidXJnZXJzIGFyZSBtYWRlIHdpdGggaW50ZXJnYWxhY3RpYyBwaWdzIGFuZCBjb3dzIGZvciB0aGUgbW9zdCBkZWxlY3RhYmxlIHJlc3VsdHMuIFRoZSBqdWljaW5lc3MgaGVyZSB3b3VsZCBwdXQgQmlnZ2llIFNtYWxscyB0byBzaGFtZS5cIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWVudF8yXCIpLmlubmVySFRNTCA9IFwiVHJ5IHRoaXMgcGlwaW4nIGhvdCBib3dsIG9mIHBobyBpZiB5b3UgZmVlbCBsaWtlIHlvdSdyZSBnZXR0aW5nIHRoZSBzcGFjZSBjaGlsbHMuIEl0IGNhbiBnZXQgcXVpdGUgY29sZCBvdXQgdGhlcmUgc28gbWFrZSBzdXJlIHlvdSB3YXJtIHVwIVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5ZW50XzNcIikuaW5uZXJIVE1MID0gXCJGdWxsIG9mIG9tZWdhIGZhdHR5IGFjaWRzLCB0aGlzIGJvd2wgb2YgcG9rZSB3aWxsIHJlanV2ZW5hdGUgeW91IGluIHdheXMgdGhhdCBjYW5uZWQgdHVuYSBqdXN0IGNhbid0LiBZb3UnbGwgZmVlbCBsaWtlIHlvdSdyZSBvbiB0aGUgYmVhY2hlcyBvZiBIYXdhaWkhXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXllbnRfNFwiKS5pbm5lckhUTUwgPSBcIllvdSBrbm93IHdoYXQgdGltZSBpdCBpcy4gSXQncyBwaXp6YSB0aW1lLiBEaWcgaW4hIDxicj4mIzEyNzgyOSAmIzEyNzgyOSAmIzEyNzgyOSAmIzEyNzgyOSAmIzEyNzgyOVwiO1xuICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvciAobGV0IHkgPSAxOyB5IDwgNTsgeSsrKSB7XG4gICAgICAgIGxldCBib3hlc19zMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveGVzX3MzLmlkID0gXCJkZXNzYm94X1wiICsgeTtcbiAgICAgICAgbGV0IGRlc3NfaW5kaXZpZHVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRlc3NfaW5kaXZpZHVhbC5pZCA9IFwiZGVzc19cIiArIHk7XG4gICAgICAgIGxldCBvdmVybGF5X2Rlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvdmVybGF5X2Rlc3MuaWQgPSBcIm92ZXJsYXlkZXNzX1wiICsgeTtcbiAgICAgICAgbGV0IG92ZXJsYXlfZGVzc193cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgb3ZlcmxheV9kZXNzX3dyYXAuaWQgPSBcIm92ZXJsYXlkZXNzX3dyYXBfXCIgKyB5O1xuICAgICAgICBsZXQgaW1nX3dyYXBfZGVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGltZ193cmFwX2Rlc3MuaWQgPSBcImltZ3dyYXBwZXJfZGVzc19cIiArIHk7XG5cbiAgICAgICAgYm94ZXNfczMuYXBwZW5kQ2hpbGQoZGVzc19pbmRpdmlkdWFsKTtcbiAgICAgICAgaW1nX3dyYXBfZGVzcy5hcHBlbmRDaGlsZChvdmVybGF5X2Rlc3Nfd3JhcCk7XG4gICAgICAgIG92ZXJsYXlfZGVzc193cmFwLmFwcGVuZENoaWxkKG92ZXJsYXlfZGVzcyk7XG4gICAgICAgIGJveGVzX3MzLmFwcGVuZENoaWxkKGltZ193cmFwX2Rlc3MpO1xuICAgICAgICBkZXNzZXJ0c19ib3guYXBwZW5kQ2hpbGQoYm94ZXNfczMpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgaW1nd3JhcHBlcl9kZXNzXzEuYXBwZW5kQ2hpbGQoZnJlbmNoKTtcbiAgICAgICAgICAgIGltZ3dyYXBwZXJfZGVzc18yLmFwcGVuZENoaWxkKGNvb2tpZSk7XG4gICAgICAgICAgICBpbWd3cmFwcGVyX2Rlc3NfMy5hcHBlbmRDaGlsZChpY2UpO1xuICAgICAgICAgICAgaW1nd3JhcHBlcl9kZXNzXzQuYXBwZW5kQ2hpbGQoY2lubik7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc3NfMVwiKS5pbm5lckhUTUwgPSBcIkZyZW5jaCBUb2FzdFwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNzXzJcIikuaW5uZXJIVE1MID0gXCJDb29raWVzXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc3NfM1wiKS5pbm5lckhUTUwgPSBcIkljZSBDcmVhbVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNzXzRcIikuaW5uZXJIVE1MID0gXCJDaW5uYW1vbiBSb2xsXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlkZXNzXzFcIikuaW5uZXJIVE1MID0gXCJQZXJoYXBzIHRoZSBncmVhdGVzdCBicmVha2Zhc3QgY3JlYXRpb24gZXZlci4gV2l0aCBqdXN0IHRoZSByaWdodCBhbW91bnQgb2YgY3J1bmNoLCBzb2Z0bmVzcywgYW5kIHN3ZWV0bmVzcywgb3VyIGZyZW5jaCB0b2FzdCBpcyB0aGUgcGVyZmVjdCB3YXkgdG8gdG9wIG9mZiB5b3VyIG1lYWwuXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlkZXNzXzJcIikuaW5uZXJIVE1MID0gXCJJZiB5b3UgZG9uJ3QgbGlrZSBhIGdvb2QgY2hvY29sYXRlIGNoaXAgY29va2llLCBsZXQgb3VycyBjaGFuZ2UgeW91ciBtaW5kLiBUaGUgcmljaCBmbGF2b3IgYW5kIGdvb2V5bmVzcyBpcyBzb21ldGhpbmcgeW91IGhhdmUgdG8gdHJ5LCBhdCBsZWFzdCBvbmNlIVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5ZGVzc18zXCIpLmlubmVySFRNTCA9IFwiVGhlcmUncyBzb21ldGhpbmcgYWJvdXQgaWNlIGNyZWFtIHNjb29wcyBvbiBhIHdhZmZsZSBjb25lLiBTb21ldGhpbmcgYWJvdXQgb3VycyBpcyBqdXN0IHNvIGdvb2QuIEl0J3Mgb24gdGhlIHRpcCBvZiBvdXIgdG9uZ3Vlcy4uLlwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5ZGVzc180XCIpLmlubmVySFRNTCA9IFwiQSBnb29kIG9sZSBjaW5uYW1vbiByb2xsIHdpbGwgZ2V0IHlvdSBmYXIgaW4gbGlmZS4gVGhpcyB3aWxsIHdhcm0gdGhlIGNvY2tsZXMgb2YgeW91ciBoZWFydC4gT3IgYXQgdGhlIHZlcnkgbGVhc3QsIHlvdXIgc3RvbWFjaC5cIlxuICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcGV0aXplcnNfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgYXBwZXRpemVyc190aXRsZS5jbGFzc05hbWUgPSBcInRpdGxlX2FwcHNcIjtcbiAgICBhcHBldGl6ZXJzX3RpdGxlLmlubmVySFRNTCA9IFwiQXBwZXRpemVyc1wiO1xuXG4gICAgY29uc3QgZW50cmVlc190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBlbnRyZWVzX3RpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVfZW50cmVlc1wiO1xuICAgIGVudHJlZXNfdGl0bGUuaW5uZXJIVE1MID0gXCJFbnRyZWVzXCI7XG5cbiAgICBjb25zdCBkZXNzZXJ0c190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBkZXNzZXJ0c190aXRsZS5jbGFzc05hbWUgPSBcInRpdGxlX2Rlc3NlcnRzXCI7XG4gICAgZGVzc2VydHNfdGl0bGUuaW5uZXJIVE1MID0gXCJEZXNzZXJ0c1wiO1xuXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZCh1bmRlcmhlYWRlcik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChmb290ZXJfYm94KTtcbiAgICBmb290ZXJfYm94LmFwcGVuZENoaWxkKGZvb3RlcjEpO1xuICAgIGhlYWRlcl9ob21lLmFwcGVuZENoaWxkKGhvbWVfdGV4dCk7XG4gICAgaGVhZGVyX21lbnUuYXBwZW5kQ2hpbGQobWVudV90ZXh0KTtcbiAgICBoZWFkZXJfY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0X3RleHQpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJfaG9tZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9tZW51KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX2NvbnRhY3QpO1xuICAgIHVuZGVyaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRsaW5lcmJveCk7XG4gICAgaGVhZGxpbmVyYm94LmFwcGVuZENoaWxkKGNvb2tJY29uKTtcbiAgICBoZWFkbGluZXJib3guYXBwZW5kQ2hpbGQobWVudUFuZFRpcEJveCk7XG4gICAgbWVudUFuZFRpcEJveC5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gICAgbWVudUFuZFRpcEJveC5hcHBlbmRDaGlsZChob3ZlclRpcCk7XG4gICAgbWVudUFuZFRpcEJveC5hcHBlbmRDaGlsZChjbGlja1RpcCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZF9hcHBfc2VwKTtcbiAgICBncmlkX2FwcF9zZXAuYXBwZW5kQ2hpbGQoc2VjdGlvbjEpO1xuICAgIHNlY3Rpb24xLmFwcGVuZENoaWxkKGFwcGV0aXplcnNfdGl0bGUpO1xuICAgIHNlY3Rpb24xLmFwcGVuZENoaWxkKGFwcF9ib3gpO1xuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkX2VudF9zZXApO1xuICAgIGdyaWRfZW50X3NlcC5hcHBlbmRDaGlsZChzZWN0aW9uMik7XG4gICAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQoZW50cmVlc190aXRsZSk7XG4gICAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQoZW50cmVlc19ib3gpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRfZGVzc19zZXApO1xuICAgIGdyaWRfZGVzc19zZXAuYXBwZW5kQ2hpbGQoc2VjdGlvbjMpO1xuICAgIHNlY3Rpb24zLmFwcGVuZENoaWxkKGRlc3NlcnRzX3RpdGxlKTtcbiAgICBzZWN0aW9uMy5hcHBlbmRDaGlsZChkZXNzZXJ0c19ib3gpO1xufVxuXG4vKiBcblBob3RvcyBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQHJhcGhhZWxsb3Zhc2tpP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlJhcGhhZWwgTG92YXNraTwvYT4sJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BhbWlyX3ZfYWxpP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPmFtaXJhbGkgbWlyaGFzaGVtaWFuPC9hPiwmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQG90amVwP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPllvc2VwIFN1Z2lhcnRvPC9hPiwmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQHBob3RvcGhvdG9zdG9jaz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5LaXJpbGwgVG9ua2lraDwvYT4sJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BwaG90b3Rhc3R5Zm9vZD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5Gb29kIFBob3RvZ3JhcGhlcjwvYT4sJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL2phL0BhdXJlbF9fbGVucz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5BdXLDqWxpZW4gTGVtYXNzb24tVGjDqW9iYWxkPC9hPiwmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGtvcmllP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPktvcmllIEN1bGw8L2E+LCZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AbW9uaXFhP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPk1vbmlrYSBHcmFia293c2thPC9hPiwmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQG1pcmFjbGV0d2VudHlvbmU/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+Sm9zZXBoIEdvbnphbGV6PC9hPiwmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGt5bmRhbGxyYW1pcmV6P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPkt5bmRhbGwgUmFtaXJlejwvYT4sJm5ic3A7JjxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9Ac2ViYXN0aWFuY29tYW4/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+U2ViYXN0aWFuIENvbWFuIFBob3RvZ3JhcGh5PC9hPiBvbiBVbnNwbGFzaFxuXG5cbi8vUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BhbWlyX3ZfYWxpP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPmFtaXJhbGkgbWlyaGFzaGVtaWFuPC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL3g2VnVFSDJucEh3P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPlxuICBcblxuLy9QaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQG90amVwP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPllvc2VwIFN1Z2lhcnRvPC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zLzFQRXFxdjRpMmlNP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPlxuICBcbi8vUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BwaG90b3Bob3Rvc3RvY2s/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+S2lyaWxsIFRvbmtpa2g8L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvTkZRaV8ySFVOUkk/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+VW5zcGxhc2g8L2E+XG4gIFxuXG4vL1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AcGhvdG90YXN0eWZvb2Q/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+Rm9vZCBQaG90b2dyYXBoZXI8L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvU2VrbTlfbkMyQk0/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+VW5zcGxhc2g8L2E+XG4gIFxuLy9QaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vamEvQGF1cmVsX19sZW5zP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPkF1csOpbGllbiBMZW1hc3Nvbi1UaMOpb2JhbGQ8L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MveDAwQ3pCdDREZms/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+VW5zcGxhc2g8L2E+XG4gIFxuXG4vL1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9Aa29yaWU/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+S29yaWUgQ3VsbDwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9sZmhCYTNZZTNsbz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5VbnNwbGFzaDwvYT5cbiAgXG4vL1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AbW9uaXFhP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPk1vbmlrYSBHcmFia293c2thPC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL195NkE5YmhJTGtNP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPlxuICBcbi8vUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BtaXJhY2xldHdlbnR5b25lP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPkpvc2VwaCBHb256YWxlejwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy96Y1VnanlxRXdlOD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5VbnNwbGFzaDwvYT5cbiAgXG4vL1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9Aa3luZGFsbHJhbWlyZXo/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+S3luZGFsbCBSYW1pcmV6PC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zLzNIcHl2eVBDalBBP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPlxuICBcblxuLy9QaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQHNlYmFzdGlhbmNvbWFuP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlNlYmFzdGlhbiBDb21hbiBQaG90b2dyYXBoeTwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9SQ3lYeWFpbTg3WT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5VbnNwbGFzaDwvYT5cbiAgXG4gICAqLyIsIi8vaW1wb3J0IEljb24gZnJvbSAnLi9jb29rLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2UzTG9hZCgpIHtcblxuICAgIGNvbnN0IGhlYWRsaW5lcmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGxpbmVyYm94LmNsYXNzTmFtZSA9IFwiaGVhZGxpbmVyX2JveF8yXCI7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gXCJ0b3BoZWFkZXJcIjtcbiAgICBjb25zdCB1bmRlcmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdW5kZXJoZWFkZXIuY2xhc3NOYW1lID0gXCJ1bmRlcl90b3BoZWFkZXJcIjtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImJpZ2dlc3RfYm94XzJcIjtcbiAgICBjb25zdCBzZWN0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VjdGlvbjEuY2xhc3NOYW1lID0gXCJzZWN0aW9uXzFfcDJcIjtcbiAgICBjb25zdCBzZWN0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VjdGlvbjIuY2xhc3NOYW1lID0gXCJzZWN0aW9uXzJfcDJcIjtcbiAgICBjb25zdCBzZWN0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VjdGlvbjMuY2xhc3NOYW1lID0gXCJzZWN0aW9uXzNfcDJcIjtcblxuICAgIGNvbnN0IGhlYWRlcl9tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfbWVudS5jbGFzc05hbWUgPSBcInRvcF9tZW51XCI7XG4gICAgY29uc3QgbWVudV90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51X3RleHQuY2xhc3NOYW1lID0gXCJjb3JuZXJfdGV4dG1lbnVcIjtcbiAgICBtZW51X3RleHQuaW5uZXJIVE1MID0gXCJNZW51XCI7XG5cbiAgICBjb25zdCBoZWFkZXJfaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyX2hvbWUuY2xhc3NOYW1lID0gXCJ0b3BfaG9tZVwiO1xuICAgIGNvbnN0IGhvbWVfdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZV90ZXh0LmNsYXNzTmFtZSA9IFwiY29ybmVyX3RleHRob21lXCI7XG4gICAgaG9tZV90ZXh0LmlubmVySFRNTCA9IFwiSG9tZVwiO1xuXG4gICAgY29uc3QgZm9vdGVyX2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyX2JveC5jbGFzc05hbWUgPSBcImJvdHRvbV9mb290XCI7XG5cbiAgICBjb25zdCBmb290ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXIxLmlubmVySFRNTCA9ICdQaG90byBieSZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9Aa3Jpc3JvbGxlcj91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5LcmlzdG9waGVyIFJvbGxlcjwvYT4mbmJzcDtvbiZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9pbWFnZXMvbmF0dXJlL2dhbGF4eT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5VbnNwbGFzaDwvYT4nO1xuXG5cbiAgICBjb25zdCBmb290ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXIyLmlubmVySFRNTCA9ICdJbWFnZSBieSZuYnNwOzxhIGhyZWY9XCJodHRwczovL3d3dy5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9jdXRlLWFzdHJvbmF1dC1jaGVmLXNlcnZpbmctZm9vZC1jYXJ0b29uLXZlY3Rvci1pY29uLWlsbHVzdHJhdGlvbi1zY2llbmNlLWZvb2QtaWNvbi1pc29sYXRlZC1mbGF0XzMxMzQ4NDUwLmh0bSNxdWVyeT1hc3Ryb25hdXQlMjBjaGVmJnBvc2l0aW9uPTQmZnJvbV92aWV3PXNlYXJjaCZ0cmFjaz1zcGhcIj5jYXRhbHlzdHN0dWZmPC9hPiBvbiBGcmVlcGlrJztcblxuICAgIGNvbnN0IGhlYWRlcl9jb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfY29udGFjdC5jbGFzc05hbWUgPSBcInRvcF9jb250YWN0XCI7XG4gICAgY29uc3QgY29udGFjdF90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0X3RleHQuY2xhc3NOYW1lID0gXCJjb3JuZXJfdGV4dGNvbnRhY3RcIjtcbiAgICBjb250YWN0X3RleHQuaW5uZXJIVE1MID0gXCJDb250YWN0XCI7XG5cbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkbGluZS5jbGFzc05hbWUgPSBcImhlYWRsaW5lclwiXG4gICAgaGVhZGxpbmUuaW5uZXJIVE1MID0gXCJNZW51XCI7XG5cbiAgICBjb25zdCBncmlkX2FwcF9zZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdyaWRfYXBwX3NlcC5jbGFzc05hbWUgPSBcImdyaWRfc2VwX2FwcFwiO1xuICAgIGNvbnN0IGdyaWRfZW50X3NlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3JpZF9lbnRfc2VwLmNsYXNzTmFtZSA9IFwiZ3JpZF9zZXBfYXBwX2VudFwiO1xuICAgIGNvbnN0IGdyaWRfZGVzc19zZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdyaWRfZGVzc19zZXAuY2xhc3NOYW1lID0gXCJncmlkX3NlcF9kZXNzXCI7XG5cblxuICAgIGNvbnN0IGFwcF9ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFwcF9ib3guY2xhc3NOYW1lID0gXCJib3hfYXBwc1wiO1xuICAgIGNvbnN0IGVudHJlZXNfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlbnRyZWVzX2JveC5jbGFzc05hbWUgPSBcImJveF9lbnRyZWVzXCI7XG4gICAgY29uc3QgZGVzc2VydHNfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNzZXJ0c19ib3guY2xhc3NOYW1lID0gXCJib3hfZGVzc2VydHNcIjtcblxuICAgIGNvbnN0IGFwcGV0aXplcnNfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgYXBwZXRpemVyc190aXRsZS5jbGFzc05hbWUgPSBcInRpdGxlX2FwcHNcIjtcbiAgICBhcHBldGl6ZXJzX3RpdGxlLmlubmVySFRNTCA9IFwiQXBwZXRpemVyc1wiO1xuXG4gICAgY29uc3QgZW50cmVlc190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBlbnRyZWVzX3RpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVfZW50cmVlc1wiO1xuICAgIGVudHJlZXNfdGl0bGUuaW5uZXJIVE1MID0gXCJFbnRyZWVzXCI7XG5cbiAgICBjb25zdCBkZXNzZXJ0c190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBkZXNzZXJ0c190aXRsZS5jbGFzc05hbWUgPSBcInRpdGxlX2Rlc3NlcnRzXCI7XG4gICAgZGVzc2VydHNfdGl0bGUuaW5uZXJIVE1MID0gXCJEZXNzZXJ0c1wiO1xuXG4gICAgY29uc3QgYXBwXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFwcF8xLmlubmVySFRNTCA9IFwiU2NydW1wdGlvdXMgc3R1ZmYgMVwiO1xuICAgIGNvbnN0IGFwcF8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhcHBfMi5pbm5lckhUTUwgPSBcIlNjcnVtcHRpb3VzIHN0dWZmIDJcIjtcbiAgICBjb25zdCBhcHBfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXBwXzMuaW5uZXJIVE1MID0gXCJTY3J1bXB0aW91cyBzdHVmZiAzXCI7XG4gICAgY29uc3QgYXBwXzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFwcF80LmlubmVySFRNTCA9IFwiU2NydW1wdGlvdXMgc3R1ZmYgNFwiO1xuXG4gICAgY29uc3QgZW50XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVudF8xLmlubmVySFRNTCA9IFwiRUVFRSBTY3J1bXB0aW91cyBzdHVmZiAxXCI7XG4gICAgY29uc3QgZW50XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVudF8yLmlubmVySFRNTCA9IFwiRUVFRSBTY3J1bXB0aW91cyBzdHVmZiAyXCI7XG4gICAgY29uc3QgZW50XzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVudF8zLmlubmVySFRNTCA9IFwiRUVFRSBTY3J1bXB0aW91cyBzdHVmZiAzXCI7XG4gICAgY29uc3QgZW50XzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVudF80LmlubmVySFRNTCA9IFwiRUVFRSBTY3J1bXB0aW91cyBzdHVmZiA0XCI7XG5cbiAgICBjb25zdCBkZXNzXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc3NfMS5pbm5lckhUTUwgPSBcIkRERCBTY3J1bXB0aW91cyBzdHVmZiAxXCI7XG4gICAgY29uc3QgZGVzc18yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNzXzIuaW5uZXJIVE1MID0gXCJEREQgU2NydW1wdGlvdXMgc3R1ZmYgMlwiO1xuICAgIGNvbnN0IGRlc3NfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzc18zLmlubmVySFRNTCA9IFwiREREIFNjcnVtcHRpb3VzIHN0dWZmIDNcIjtcbiAgICBjb25zdCBkZXNzXzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc3NfNC5pbm5lckhUTUwgPSBcIkRERCBTY3J1bXB0aW91cyBzdHVmZiA0XCI7XG5cbiAgICBjb25zdCBjb29rSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNvb2tJY29uLnNyYyA9IEljb247XG5cbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHVuZGVyaGVhZGVyKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGZvb3Rlcl9ib3gpO1xuICAgIGZvb3Rlcl9ib3guYXBwZW5kQ2hpbGQoZm9vdGVyMSk7XG4gICAgZm9vdGVyX2JveC5hcHBlbmRDaGlsZChmb290ZXIyKTtcbiAgICBoZWFkZXJfaG9tZS5hcHBlbmRDaGlsZChob21lX3RleHQpO1xuICAgIGhlYWRlcl9tZW51LmFwcGVuZENoaWxkKG1lbnVfdGV4dCk7XG4gICAgaGVhZGVyX2NvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdF90ZXh0KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX2hvbWUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJfbWVudSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9jb250YWN0KTtcbiAgICB1bmRlcmhlYWRlci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkbGluZXJib3gpO1xuICAgIGhlYWRsaW5lcmJveC5hcHBlbmRDaGlsZChjb29rSWNvbik7XG4gICAgaGVhZGxpbmVyYm94LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcbiAgICAvL1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRfYXBwX3NlcCk7XG4gICAgZ3JpZF9hcHBfc2VwLmFwcGVuZENoaWxkKHNlY3Rpb24xKTtcbiAgICBzZWN0aW9uMS5hcHBlbmRDaGlsZChhcHBldGl6ZXJzX3RpdGxlKTtcbiAgICBzZWN0aW9uMS5hcHBlbmRDaGlsZChhcHBfYm94KTtcbiAgICBhcHBfYm94LmFwcGVuZENoaWxkKGFwcF8xKTtcbiAgICBhcHBfYm94LmFwcGVuZENoaWxkKGFwcF8yKTtcbiAgICBhcHBfYm94LmFwcGVuZENoaWxkKGFwcF8zKTtcbiAgICBhcHBfYm94LmFwcGVuZENoaWxkKGFwcF80KTtcbiAgICBcbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZF9lbnRfc2VwKTtcbiAgICBncmlkX2VudF9zZXAuYXBwZW5kQ2hpbGQoc2VjdGlvbjIpO1xuICAgIHNlY3Rpb24yLmFwcGVuZENoaWxkKGVudHJlZXNfdGl0bGUpO1xuICAgIHNlY3Rpb24yLmFwcGVuZENoaWxkKGVudHJlZXNfYm94KTtcbiAgICBlbnRyZWVzX2JveC5hcHBlbmRDaGlsZChlbnRfMSk7XG4gICAgZW50cmVlc19ib3guYXBwZW5kQ2hpbGQoZW50XzIpO1xuICAgIGVudHJlZXNfYm94LmFwcGVuZENoaWxkKGVudF8zKTtcbiAgICBlbnRyZWVzX2JveC5hcHBlbmRDaGlsZChlbnRfNCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZF9kZXNzX3NlcCk7XG4gICAgZ3JpZF9kZXNzX3NlcC5hcHBlbmRDaGlsZChzZWN0aW9uMyk7XG4gICAgc2VjdGlvbjMuYXBwZW5kQ2hpbGQoZGVzc2VydHNfdGl0bGUpO1xuICAgIHNlY3Rpb24zLmFwcGVuZENoaWxkKGRlc3NlcnRzX2JveCk7XG4gICAgZGVzc2VydHNfYm94LmFwcGVuZENoaWxkKGRlc3NfMSk7XG4gICAgZGVzc2VydHNfYm94LmFwcGVuZENoaWxkKGRlc3NfMik7XG4gICAgZGVzc2VydHNfYm94LmFwcGVuZENoaWxkKGRlc3NfMyk7XG4gICAgZGVzc2VydHNfYm94LmFwcGVuZENoaWxkKGRlc3NfNCk7XG59XG4iLCJpbXBvcnQgSWNvbiBmcm9tICcuL2NoZWYuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG5cbiAgICBjb25zdCBoZWFkbGluZXJib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRsaW5lcmJveC5jbGFzc05hbWUgPSBcImhlYWRsaW5lcl9ib3hcIjtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSBcInRvcGhlYWRlclwiO1xuICAgIGNvbnN0IHVuZGVyaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB1bmRlcmhlYWRlci5jbGFzc05hbWUgPSBcInVuZGVyX3RvcGhlYWRlclwiO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYmlnZ2VzdF9ib3hcIjtcbiAgICBjb25zdCBzZWN0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VjdGlvbjEuY2xhc3NOYW1lID0gXCJzZWN0aW9uXzFcIjtcbiAgICBjb25zdCBzZWN0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VjdGlvbjIuY2xhc3NOYW1lID0gXCJzZWN0aW9uXzJcIjtcbiAgICBjb25zdCBzZWN0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VjdGlvbjMuY2xhc3NOYW1lID0gXCJzZWN0aW9uXzNcIjtcblxuICAgIGNvbnN0IGhlYWRlcl9ob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfaG9tZS5jbGFzc05hbWUgPSBcInRvcF9ob21lXCI7XG4gICAgY29uc3QgaG9tZV90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lX3RleHQuY2xhc3NOYW1lID0gXCJjb3JuZXJfdGV4dGhvbWVcIjtcbiAgICBob21lX3RleHQuaW5uZXJIVE1MID0gXCJIb21lXCI7XG5cbiAgICBjb25zdCBoZWFkZXJfbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyX21lbnUuY2xhc3NOYW1lID0gXCJ0b3BfbWVudVwiO1xuICAgIGNvbnN0IG1lbnVfdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudV90ZXh0LmNsYXNzTmFtZSA9IFwiY29ybmVyX3RleHRtZW51XCI7XG4gICAgbWVudV90ZXh0LmlubmVySFRNTCA9IFwiTWVudVwiO1xuXG4gICAgY29uc3QgZm9vdGVyX2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyX2JveC5jbGFzc05hbWUgPSBcImJvdHRvbV9mb290XCI7XG5cbiAgICBjb25zdCBmb290ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXIxLmlubmVySFRNTCA9ICdQaG90byBieSZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9Aa3Jpc3JvbGxlcj91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5LcmlzdG9waGVyIFJvbGxlcjwvYT4mbmJzcDtvbiZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9pbWFnZXMvbmF0dXJlL2dhbGF4eT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5VbnNwbGFzaDwvYT4nO1xuXG5cbiAgICBjb25zdCBmb290ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXIyLmlubmVySFRNTCA9ICdJbWFnZSBieSZuYnNwOzxhIGhyZWY9XCJodHRwczovL3d3dy5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9jdXRlLWFzdHJvbmF1dC1jaGVmLXNlcnZpbmctZm9vZC1jYXJ0b29uLXZlY3Rvci1pY29uLWlsbHVzdHJhdGlvbi1zY2llbmNlLWZvb2QtaWNvbi1pc29sYXRlZC1mbGF0XzMxMzQ4NDUwLmh0bSNxdWVyeT1hc3Ryb25hdXQlMjBjaGVmJnBvc2l0aW9uPTQmZnJvbV92aWV3PXNlYXJjaCZ0cmFjaz1zcGhcIj5jYXRhbHlzdHN0dWZmPC9hPiBvbiBGcmVlcGlrJztcblxuICAgIGNvbnN0IGhlYWRlcl9jb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfY29udGFjdC5jbGFzc05hbWUgPSBcInRvcF9jb250YWN0XCI7XG4gICAgY29uc3QgY29udGFjdF90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0X3RleHQuY2xhc3NOYW1lID0gXCJjb3JuZXJfdGV4dGNvbnRhY3RcIjtcbiAgICBjb250YWN0X3RleHQuaW5uZXJIVE1MID0gXCJDb250YWN0XCI7XG5cbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkbGluZS5jbGFzc05hbWUgPSBcImhlYWRsaW5lclwiXG4gICAgaGVhZGxpbmUuaW5uZXJIVE1MID0gXCJZdW1teSBZZWFybmluZ3NcIjtcblxuICAgIGNvbnN0IHVuZGVySGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdW5kZXJIZWFkbGluZS5pbm5lckhUTUwgPSBcIkNyYXZpbmcgc29tZXRoaW5nIHl1bW15PyA8YnI+TG9vayBubyBmdXJ0aGVyIVwiO1xuXG4gICAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGludHJvLmlubmVySFRNTCA9IFwiV2VsY29tZSB0byBZdW1teSBZZWFybmluZ3MsIGEgcGxhY2Ugd2hlcmUgeW91IGNhbiBmaW5kIGV2ZXJ5dGhpbmcgdGhhdCB5b3UgKG9yIEkpIGhhdmUgYmVlbiB5ZWFybmluZyBmb3IhIEhlcmUgeW91J2xsIGZpbmQgdGhlIG1vc3Qgc2F0aXNmeWluZyBmb29kcyB0aGF0IG1vbmV5IGNhbiBidXkgaW4gdGhpcyBnYWxheHkuIEkgaG9wZSB5b3UgZW5qb3khXCJcblxuICAgIGNvbnN0IGhvdXJzTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG91cnNNYWluLmlubmVySFRNTCA9IFwiSG91cnNcIlxuICAgIGhvdXJzTWFpbi5jbGFzc05hbWUgPSBcInRpdGxlLXRleHRcIlxuXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXJzLmlubmVySFRNTCA9IFwiTW9uZGF5OiA3YW0gLSA3cG0gPGJyPiBUdWVzZGF5OiA3YW0gLSA3cG0gPGJyPiBXZWRuZXNkYXk6IDdhbSAtIDdwbSA8YnI+IFRodXJzZGF5OiA3YW0gLSA3cG0gPGJyPiBGcmlkYXk6IDdhbSAtIDEwcG0gPGJyPiBTYXR1cmRheTogN2FtIC0gMTBwbSA8YnI+IFN1bmRheTogOGFtIC0gMTBwbVwiXG5cbiAgICBjb25zdCBsb2NhdGlvbk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvY2F0aW9uTWFpbi5pbm5lckhUTUwgPSBcIkxvY2F0aW9uXCJcbiAgICBsb2NhdGlvbk1haW4uY2xhc3NOYW1lID0gXCJ0aXRsZS10ZXh0XCJcblxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2NhdGlvbi5pbm5lckhUTUwgPSBcIjk5OSBUYXN0ZSBCdWQgQXZlbnVlLCBEZWxpY2lvdXMsIFRYIDk5OTk5XCJcblxuICAgIGNvbnN0IGNoZWZJY29uID0gbmV3IEltYWdlKCk7XG4gICAgY2hlZkljb24uc3JjID0gSWNvbjtcblxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodW5kZXJoZWFkZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyX2JveCk7XG4gICAgZm9vdGVyX2JveC5hcHBlbmRDaGlsZChmb290ZXIxKTtcbiAgICBmb290ZXJfYm94LmFwcGVuZENoaWxkKGZvb3RlcjIpO1xuICAgIGhlYWRlcl9ob21lLmFwcGVuZENoaWxkKGhvbWVfdGV4dCk7XG4gICAgaGVhZGVyX21lbnUuYXBwZW5kQ2hpbGQobWVudV90ZXh0KTtcbiAgICBoZWFkZXJfY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0X3RleHQpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJfaG9tZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9tZW51KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX2NvbnRhY3QpO1xuICAgIHVuZGVyaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRsaW5lcmJveCk7XG4gICAgaGVhZGxpbmVyYm94LmFwcGVuZENoaWxkKGNoZWZJY29uKTtcbiAgICBoZWFkbGluZXJib3guYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uMSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb24yKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbjMpO1xuICAgIFxuICAgIHNlY3Rpb24xLmFwcGVuZENoaWxkKHVuZGVySGVhZGxpbmUpO1xuICAgIHNlY3Rpb24xLmFwcGVuZENoaWxkKGludHJvKTtcbiAgICBzZWN0aW9uMi5hcHBlbmRDaGlsZChob3Vyc01haW4pO1xuICAgIHNlY3Rpb24yLmFwcGVuZENoaWxkKGhvdXJzKTtcbiAgICBzZWN0aW9uMy5hcHBlbmRDaGlsZChsb2NhdGlvbk1haW4pO1xuICAgIHNlY3Rpb24zLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==