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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    text-align: center;\n    font-size: 1.2rem;\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    background-color: black;\n    height: 100%;\n}\n\n#content {\n    font-family: 'Quicksand', sans-serif;\n    font-weight:bolder;\n    width: 100vw;\n    max-width: 100%;\n}\n\ndiv[class^=\"top_\"] {\n    font-family: 'Paprika', cursive;\n    margin: 0;\n    padding: 0.35rem;\n    border: 0.25rem solid black;\n    position: relative;\n}\n\n@keyframes changeColor {\n    0% {\n        border: 0.25rem solid rgb(181, 141, 255);\n    }\n    25% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n    50% {\n        border: 0.25rem solid rgb(249, 41, 62);\n    }\n    75% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n}\n\ndiv[class^=\"top_\"]:hover {\n    border: 0.25rem solid rgb(158, 105, 255);\n\n    animation-name: changeColor;\n    animation-iteration-count: infinite;\n    animation-duration: 3s;\n}\n\ndiv[class^=\"top_\"]::before, div[class^=\"top_\"]::after {\n    content: '';\n    display: block;\n    position: absolute;\n    background: aquamarine;\n}\n\ndiv[class^=\"top_\"]::before {\n    top: -0.3em; \n    bottom: -0.3em;\n    left: 1em;\n    right: 1em;\n}\n\ndiv[class^=\"top_\"]::after {\n    left: -0.3em;\n    right: -0.3em;\n    top: 1em;\n    bottom: 1em;\n}\n\ndiv[class^=\"corner_\"] {\n    position: relative;\n    z-index: 1;\n}\n\n.topheader {\n    top: 0;\n    width: 100%;\n    height: 9vh;\n    display: flex;\n    justify-content: center;\n    gap: 2rem;\n    align-items: center;\n    background-color: aquamarine;\n}\n\n.bottom_foot {\n    color: white;\n    bottom: 0;\n    width: 100%;\n    height: 5vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: rgb(98, 74, 255);\n    opacity: 0.6;\n    position: relative;\n}\n\n.under_topheader {\n    background-color: black;\n}\n\n.biggest_box {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    gap: 0.5rem;\n    min-height: 100%;\n    background-attachment: fixed;\n    grid-template-columns: clamp(20%, 22%, 27%);\n    grid-template-rows: clamp(12%, 20%, 21%) clamp(22%, 28%, 1fr) clamp(22%, 28%, 1fr) clamp(12%, 20%, 21%);\n    background-color: black;\n    margin-bottom: -5vh;\n    padding-bottom: 5vh;\n}\n\ndiv[class^=\"section\"] {\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    display: flex;\n    width: 40vw;\n    flex-direction: column;\n    justify-content: center;\n    justify-self: center;\n    opacity: 0.85;\n    margin-top:1rem;\n    padding-top: 0.3rem;\n    padding-bottom: 0.3rem;\n}\n\ndiv[class^=\"section\"] > div {\n    padding-bottom: 0.4rem;\n}\n\n#menu_tip_box {\n    display: flex;\n    flex-direction: column;\n}\n\n#hoverText {\n    font-size: 0.85rem;\n    text-align: center;\n    padding: 0 0.3rem;\n}\n\n#clickText {\n    display: none;\n}\n\n.headliner_box {\n    font-family: 'Itim', cursive;\n    grid-row: 1 / 2;\n    display: flex;\n    margin-top: 1rem;\n    padding: 0.5rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n}\n\n.section_1 {\n    grid-row: 2 / 3;\n}\n\n.section_1 > div {\n    padding: 0.2rem 1.2rem;\n}\n\n.section_2 {\n    grid-row: 3 / 4;\n}\n\n.section_3 {\n    grid-row: 4 / 5;\n    margin-bottom: 1rem;\n}\n\nh1 {\n    font-size: 2rem;\n    margin: 0 1rem;\n}\n\nh2 {\n    font-family: 'Itim', cursive;\n    font-size: 1.5rem;\n    margin: 0 1rem;\n}\n\n.title-text {\n    font-family: 'Quantico', sans-serif;\n    font-size: 1.8rem;\n    font-weight: bold;\n}\n\nimg {\n    border: 2px solid black;\n    border-radius: 12px;\n    width: 5rem;\n    height: 5rem;\n}\n\na, a:link, a:visited {\n    color: white;\n    text-decoration: none;\n}\n\na:hover {\n    color:rgb(248, 165, 255);\n    text-decoration: underline;\n}\n\na:active {\n    color:aquamarine;\n}\n\n/*underneath is page2Load CSS*/\n\n.headliner_box_2 {\n    font-family: 'Itim', cursive;\n    padding: 0.5rem;\n    display: flex;\n    margin-top: 1rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n    grid-row: 1 / 2;\n}\n\nh2[class^=\"title\"] {\n    font-family: 'Quantico', sans-serif;\n    font-size: 1.8rem;\n    font-weight: bold;\n    padding: 0.5rem;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n}\n\n.biggest_box_2 {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n    min-height: 100%;\n    background-attachment: fixed;\n    grid-template-columns: clamp(20%, 25%, 28%);\n    grid-template-rows: clamp(4%, 5%, 7%) clamp(25%, 39%, 1fr) clamp(25%, 39%, 1fr) clamp(25%, 39%, 1fr);\n    margin-bottom: -5vh;\n    padding-bottom: 5vh;\n}\n\n.box_apps, .box_entrees, .box_desserts {\n    display: grid;\n    grid-template-columns: repeat(2, 50%);\n    grid-template-rows: repeat(2, 50%);\n}\n\n.box_apps img, .box_entrees img, .box_desserts img {\n    object-fit: cover;\n    width: 98.8%;\n    height: 21rem;\n}\n\ndiv[id^=\"ent_\"], div[id^=\"app_\"], div[id^=\"dess_\"] {\n    background-color: rgb(255, 255, 255);\n    border: 2px solid black;\n    border-radius: 22px;\n    display: flex;\n    padding: 0.2rem 0.4rem;\n    justify-content: center;\n    margin: 0.2rem auto;\n    min-width: 55%;\n    max-width: 65%;\n}\n\ndiv[id^=\"appbox_\"], div[id^=\"entbox_\"], div[id^=\"dessbox_\"] {\n    border: 0.25rem solid transparent;\n    justify-content: center;\n    border-radius: 10px;\n}\n\ndiv[id^=\"appbox_\"]:hover, div[id^=\"entbox_\"]:hover, div[id^=\"dessbox_\"]:hover {\n    border: 0.25rem solid rgb(230, 0, 255);\n    border-radius: 10px;\n    animation-name: changeColor;\n    animation-iteration-count: infinite;\n    animation-duration: 3s;\n}\n\ndiv[class*=\"_p2\"] > div {    \n    padding-bottom: 0.4rem;\n    font-family: 'Quicksand', sans-serif;\n    font-size: 1.1rem;\n}\n\ndiv[class*=\"_p2\"] {\n    border: none;\n    background-color: transparent;\n}\n\n.section_1_p2 {\n    grid-row: 2 / 3;\n}\n\n.section_2_p2 {\n    grid-row: 3 / 4;\n}\n\n.section_3_p2 {\n    margin-bottom: 0.7rem;\n    grid-row: 4 / 5;\n}\n\ndiv[id^=\"imgwrapper_\"] {\n    position: relative;\n    display:flex;\n    justify-content: center;\n}\n  \ndiv[id^=\"overlayapp_wrap_\"], div[id^=\"overlayent_wrap_\"], div[id^=\"overlaydess_wrap_\"] {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(36, 62, 206, 0.6);\n    color: #fff;\n    visibility: hidden;\n    opacity: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    justify-self: center;\n    border: 2px solid transparent;\n    border-radius: 12px;\n    transition: opacity .2s, visibility .2s;\n}\n  \ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayapp_wrap_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayent_wrap_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlaydess_wrap_\"] {\n    visibility: visible;\n    opacity: 1;\n}\n  \ndiv[id^=\"overlayapp_\"], div[id^=\"overlayent_\"], div[id^=\"overlaydess_\"] {\n    transition: .2s;\n    transform: translateY(1em);\n}\n  \ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayapp_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayent_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlaydess_\"] {\n    transform: translateY(0);\n}\n\ndiv#longfooter {\n    font-size: calc(6px + .5vw);\n    margin: 0.2rem, 0.4rem;\n}\n\n/*underneath is page3Load CSS*/\n\n.biggest_box_3 {\n    display: grid;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n    min-height: 100%;\n    background-attachment: fixed;\n    grid-template-rows: 15vh repeat(3, 1fr);\n    margin-bottom: -5vh;\n    padding-bottom: 5vh;\n}\n\ndiv[class^=\"contactsep\"] {\n    margin-bottom: 1rem;\n    width: 100%;\n}\n\n.headliner_box_3 {\n    font-family: 'Itim', cursive;\n    padding: 0.5rem;\n    display: flex;\n    margin-top: 1rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n    grid-row: 1 / 2;\n    margin-bottom: 1rem;\n}\n\n.section_1_p3 {\n    grid-row: 2 / 3;\n}\n\n.section_2_p3 {\n    grid-row: 3 / 4;\n}\n\n.section_3_p3 {\n    margin-bottom: 0.7rem;\n    grid-row: 4 / 5;\n}\n\ndiv[class^=\"leftof\"] {\n    display: flex;\n    flex-direction: column;\n    align-content: left;\n}\n\ndiv[class^=\"boxcontact_\"] {\n    padding: 0.5rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    gap: 0.5rem;\n    opacity: 0.85;\n    display: flex;\n    justify-content: space-between;\n}\n\nh2[class^=\"title_p\"] {\n    text-align: left;\n    font-size: 1.2rem;\n    border: none;\n    background-color:transparent;\n    padding: 0;\n    margin: 0 0.2rem;\n}\n\ndiv[class^=\"detailsP\"] {\n    text-align: left;\n    margin: 0 0.2rem;\n}\n\n/*Phone CSS*/\n\n@media only screen and (max-width: 600px) {\n    div.topheader {\n        height: 12vh;\n        font-size: smaller;\n    }\n    .headliner_box, .headliner_box_2 {\n        margin: 1rem 2rem 0 2rem;\n    }\n    .biggest_box, .biggest_box_2 {\n        grid-template-columns: 100%;\n    }\n    .section_1, .section_2, .section_3, \n    div[class^=\"grid_sep_\"] {\n        min-width: 60%;\n        max-width: 100%;\n    }\n    div[id^=\"appbox_\"], div[id^=\"entbox_\"], div[id^=\"dessbox_\"] {\n        height: 100%;\n    }\n    div[class^=\"grid_sep_\"] {\n        display: flex;\n        justify-content: center;\n        width: 100%;\n    }\n    div.section_1_p2, div.section_2_p2, div.section_3_p2 {\n        width: 95%;\n    }\n    h2[class^=\"title\"] {\n        text-align: center;\n        font-size: 1.1rem;\n        font-weight: bold;\n        padding: 0.3rem 0.5rem;\n        background-color: gray;\n        border-radius: 10px;\n        border: 2px solid black;\n    }\n    div[id^=\"appbox_\"]:hover, div[id^=\"entbox_\"]:hover, div[id^=\"dessbox_\"]:hover {\n        z-index: 2;\n    }\n    div[id^=\"ent_\"], div[id^=\"app_\"], div[id^=\"dess_\"] {\n        font-size: 0.8rem;\n        align-content: center;\n        flex-wrap: wrap;\n        margin-top: 0;\n        margin-bottom: 0.2rem;\n        min-height: 11%;\n        max-width: 100%;\n    }\n    .box_apps img, .box_entrees img, .box_desserts img {\n        object-fit: cover;\n        width: 98.8%;\n        height: 12rem;\n    }\n    .box_apps, .box_entrees, .box_desserts {\n        display: grid;\n        gap: 0.4rem;\n        padding: 0.3rem;\n        grid-template-columns: repeat(2, 50%);\n        grid-template-rows: repeat(2, 50%);\n    }\n    div[id^=\"overlayapp_wrap_\"], div[id^=\"overlayent_wrap_\"], div[id^=\"overlaydess_wrap_\"] {\n        font-size: 0.7rem;\n    }\n    div[class^=\"leftof\"] > h2 {\n        text-align: left;\n        border: none;\n        padding: 0;\n    }\n    .bottom_foot {\n        font-size: calc(6.4px + .5vw);\n    }\n    #hoverText {\n        display: none;\n    }\n    #clickText {\n        display: inline;\n        font-size: calc(11px + .5vw);\n        margin-left: 0.5rem;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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EA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,oBAAoB;IACpB,mBAAmB;IACnB,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,aAAa;IACb,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;IACZ,4BAA4B;IAC5B,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA,YAAY;;AAEZ;IACI;QACI,YAAY;QACZ,kBAAkB;IACtB;IACA;QACI,wBAAwB;IAC5B;IACA;QACI,2BAA2B;IAC/B;IACA;;QAEI,cAAc;QACd,eAAe;IACnB;IACA;QACI,YAAY;IAChB;IACA;QACI,aAAa;QACb,uBAAuB;QACvB,WAAW;IACf;IACA;QACI,UAAU;IACd;IACA;QACI,kBAAkB;QAClB,iBAAiB;QACjB,iBAAiB;QACjB,sBAAsB;QACtB,sBAAsB;QACtB,mBAAmB;QACnB,uBAAuB;IAC3B;IACA;QACI,UAAU;IACd;IACA;QACI,iBAAiB;QACjB,qBAAqB;QACrB,eAAe;QACf,aAAa;QACb,qBAAqB;QACrB,eAAe;QACf,eAAe;IACnB;IACA;QACI,iBAAiB;QACjB,YAAY;QACZ,aAAa;IACjB;IACA;QACI,aAAa;QACb,WAAW;QACX,eAAe;QACf,qCAAqC;QACrC,kCAAkC;IACtC;IACA;QACI,iBAAiB;IACrB;IACA;QACI,gBAAgB;QAChB,YAAY;QACZ,UAAU;IACd;IACA;QACI,6BAA6B;IACjC;IACA;QACI,aAAa;IACjB;IACA;QACI,eAAe;QACf,4BAA4B;QAC5B,mBAAmB;IACvB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Itim&family=Paprika&family=Quantico:ital@1&family=Quicksand&display=swap');\n\n:root {\n    text-align: center;\n    font-size: 1.2rem;\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    background-color: black;\n    height: 100%;\n}\n\n#content {\n    font-family: 'Quicksand', sans-serif;\n    font-weight:bolder;\n    width: 100vw;\n    max-width: 100%;\n}\n\ndiv[class^=\"top_\"] {\n    font-family: 'Paprika', cursive;\n    margin: 0;\n    padding: 0.35rem;\n    border: 0.25rem solid black;\n    position: relative;\n}\n\n@keyframes changeColor {\n    0% {\n        border: 0.25rem solid rgb(181, 141, 255);\n    }\n    25% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n    50% {\n        border: 0.25rem solid rgb(249, 41, 62);\n    }\n    75% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n}\n\ndiv[class^=\"top_\"]:hover {\n    border: 0.25rem solid rgb(158, 105, 255);\n\n    animation-name: changeColor;\n    animation-iteration-count: infinite;\n    animation-duration: 3s;\n}\n\ndiv[class^=\"top_\"]::before, div[class^=\"top_\"]::after {\n    content: '';\n    display: block;\n    position: absolute;\n    background: aquamarine;\n}\n\ndiv[class^=\"top_\"]::before {\n    top: -0.3em; \n    bottom: -0.3em;\n    left: 1em;\n    right: 1em;\n}\n\ndiv[class^=\"top_\"]::after {\n    left: -0.3em;\n    right: -0.3em;\n    top: 1em;\n    bottom: 1em;\n}\n\ndiv[class^=\"corner_\"] {\n    position: relative;\n    z-index: 1;\n}\n\n.topheader {\n    top: 0;\n    width: 100%;\n    height: 9vh;\n    display: flex;\n    justify-content: center;\n    gap: 2rem;\n    align-items: center;\n    background-color: aquamarine;\n}\n\n.bottom_foot {\n    color: white;\n    bottom: 0;\n    width: 100%;\n    height: 5vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: rgb(98, 74, 255);\n    opacity: 0.6;\n    position: relative;\n}\n\n.under_topheader {\n    background-color: black;\n}\n\n.biggest_box {\n    background-image: url('./background.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    gap: 0.5rem;\n    min-height: 100%;\n    background-attachment: fixed;\n    grid-template-columns: clamp(20%, 22%, 27%);\n    grid-template-rows: clamp(12%, 20%, 21%) clamp(22%, 28%, 1fr) clamp(22%, 28%, 1fr) clamp(12%, 20%, 21%);\n    background-color: black;\n    margin-bottom: -5vh;\n    padding-bottom: 5vh;\n}\n\ndiv[class^=\"section\"] {\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    display: flex;\n    width: 40vw;\n    flex-direction: column;\n    justify-content: center;\n    justify-self: center;\n    opacity: 0.85;\n    margin-top:1rem;\n    padding-top: 0.3rem;\n    padding-bottom: 0.3rem;\n}\n\ndiv[class^=\"section\"] > div {\n    padding-bottom: 0.4rem;\n}\n\n#menu_tip_box {\n    display: flex;\n    flex-direction: column;\n}\n\n#hoverText {\n    font-size: 0.85rem;\n    text-align: center;\n    padding: 0 0.3rem;\n}\n\n#clickText {\n    display: none;\n}\n\n.headliner_box {\n    font-family: 'Itim', cursive;\n    grid-row: 1 / 2;\n    display: flex;\n    margin-top: 1rem;\n    padding: 0.5rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n}\n\n.section_1 {\n    grid-row: 2 / 3;\n}\n\n.section_1 > div {\n    padding: 0.2rem 1.2rem;\n}\n\n.section_2 {\n    grid-row: 3 / 4;\n}\n\n.section_3 {\n    grid-row: 4 / 5;\n    margin-bottom: 1rem;\n}\n\nh1 {\n    font-size: 2rem;\n    margin: 0 1rem;\n}\n\nh2 {\n    font-family: 'Itim', cursive;\n    font-size: 1.5rem;\n    margin: 0 1rem;\n}\n\n.title-text {\n    font-family: 'Quantico', sans-serif;\n    font-size: 1.8rem;\n    font-weight: bold;\n}\n\nimg {\n    border: 2px solid black;\n    border-radius: 12px;\n    width: 5rem;\n    height: 5rem;\n}\n\na, a:link, a:visited {\n    color: white;\n    text-decoration: none;\n}\n\na:hover {\n    color:rgb(248, 165, 255);\n    text-decoration: underline;\n}\n\na:active {\n    color:aquamarine;\n}\n\n/*underneath is page2Load CSS*/\n\n.headliner_box_2 {\n    font-family: 'Itim', cursive;\n    padding: 0.5rem;\n    display: flex;\n    margin-top: 1rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n    grid-row: 1 / 2;\n}\n\nh2[class^=\"title\"] {\n    font-family: 'Quantico', sans-serif;\n    font-size: 1.8rem;\n    font-weight: bold;\n    padding: 0.5rem;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n}\n\n.biggest_box_2 {\n    background-image: url('./background.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n    min-height: 100%;\n    background-attachment: fixed;\n    grid-template-columns: clamp(20%, 25%, 28%);\n    grid-template-rows: clamp(4%, 5%, 7%) clamp(25%, 39%, 1fr) clamp(25%, 39%, 1fr) clamp(25%, 39%, 1fr);\n    margin-bottom: -5vh;\n    padding-bottom: 5vh;\n}\n\n.box_apps, .box_entrees, .box_desserts {\n    display: grid;\n    grid-template-columns: repeat(2, 50%);\n    grid-template-rows: repeat(2, 50%);\n}\n\n.box_apps img, .box_entrees img, .box_desserts img {\n    object-fit: cover;\n    width: 98.8%;\n    height: 21rem;\n}\n\ndiv[id^=\"ent_\"], div[id^=\"app_\"], div[id^=\"dess_\"] {\n    background-color: rgb(255, 255, 255);\n    border: 2px solid black;\n    border-radius: 22px;\n    display: flex;\n    padding: 0.2rem 0.4rem;\n    justify-content: center;\n    margin: 0.2rem auto;\n    min-width: 55%;\n    max-width: 65%;\n}\n\ndiv[id^=\"appbox_\"], div[id^=\"entbox_\"], div[id^=\"dessbox_\"] {\n    border: 0.25rem solid transparent;\n    justify-content: center;\n    border-radius: 10px;\n}\n\ndiv[id^=\"appbox_\"]:hover, div[id^=\"entbox_\"]:hover, div[id^=\"dessbox_\"]:hover {\n    border: 0.25rem solid rgb(230, 0, 255);\n    border-radius: 10px;\n    animation-name: changeColor;\n    animation-iteration-count: infinite;\n    animation-duration: 3s;\n}\n\ndiv[class*=\"_p2\"] > div {    \n    padding-bottom: 0.4rem;\n    font-family: 'Quicksand', sans-serif;\n    font-size: 1.1rem;\n}\n\ndiv[class*=\"_p2\"] {\n    border: none;\n    background-color: transparent;\n}\n\n.section_1_p2 {\n    grid-row: 2 / 3;\n}\n\n.section_2_p2 {\n    grid-row: 3 / 4;\n}\n\n.section_3_p2 {\n    margin-bottom: 0.7rem;\n    grid-row: 4 / 5;\n}\n\ndiv[id^=\"imgwrapper_\"] {\n    position: relative;\n    display:flex;\n    justify-content: center;\n}\n  \ndiv[id^=\"overlayapp_wrap_\"], div[id^=\"overlayent_wrap_\"], div[id^=\"overlaydess_wrap_\"] {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(36, 62, 206, 0.6);\n    color: #fff;\n    visibility: hidden;\n    opacity: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    justify-self: center;\n    border: 2px solid transparent;\n    border-radius: 12px;\n    transition: opacity .2s, visibility .2s;\n}\n  \ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayapp_wrap_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayent_wrap_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlaydess_wrap_\"] {\n    visibility: visible;\n    opacity: 1;\n}\n  \ndiv[id^=\"overlayapp_\"], div[id^=\"overlayent_\"], div[id^=\"overlaydess_\"] {\n    transition: .2s;\n    transform: translateY(1em);\n}\n  \ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayapp_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayent_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlaydess_\"] {\n    transform: translateY(0);\n}\n\ndiv#longfooter {\n    font-size: calc(6px + .5vw);\n    margin: 0.2rem, 0.4rem;\n}\n\n/*underneath is page3Load CSS*/\n\n.biggest_box_3 {\n    display: grid;\n    background-image: url('./background.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n    min-height: 100%;\n    background-attachment: fixed;\n    grid-template-rows: 15vh repeat(3, 1fr);\n    margin-bottom: -5vh;\n    padding-bottom: 5vh;\n}\n\ndiv[class^=\"contactsep\"] {\n    margin-bottom: 1rem;\n    width: 100%;\n}\n\n.headliner_box_3 {\n    font-family: 'Itim', cursive;\n    padding: 0.5rem;\n    display: flex;\n    margin-top: 1rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n    grid-row: 1 / 2;\n    margin-bottom: 1rem;\n}\n\n.section_1_p3 {\n    grid-row: 2 / 3;\n}\n\n.section_2_p3 {\n    grid-row: 3 / 4;\n}\n\n.section_3_p3 {\n    margin-bottom: 0.7rem;\n    grid-row: 4 / 5;\n}\n\ndiv[class^=\"leftof\"] {\n    display: flex;\n    flex-direction: column;\n    align-content: left;\n}\n\ndiv[class^=\"boxcontact_\"] {\n    padding: 0.5rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    gap: 0.5rem;\n    opacity: 0.85;\n    display: flex;\n    justify-content: space-between;\n}\n\nh2[class^=\"title_p\"] {\n    text-align: left;\n    font-size: 1.2rem;\n    border: none;\n    background-color:transparent;\n    padding: 0;\n    margin: 0 0.2rem;\n}\n\ndiv[class^=\"detailsP\"] {\n    text-align: left;\n    margin: 0 0.2rem;\n}\n\n/*Phone CSS*/\n\n@media only screen and (max-width: 600px) {\n    div.topheader {\n        height: 12vh;\n        font-size: smaller;\n    }\n    .headliner_box, .headliner_box_2 {\n        margin: 1rem 2rem 0 2rem;\n    }\n    .biggest_box, .biggest_box_2 {\n        grid-template-columns: 100%;\n    }\n    .section_1, .section_2, .section_3, \n    div[class^=\"grid_sep_\"] {\n        min-width: 60%;\n        max-width: 100%;\n    }\n    div[id^=\"appbox_\"], div[id^=\"entbox_\"], div[id^=\"dessbox_\"] {\n        height: 100%;\n    }\n    div[class^=\"grid_sep_\"] {\n        display: flex;\n        justify-content: center;\n        width: 100%;\n    }\n    div.section_1_p2, div.section_2_p2, div.section_3_p2 {\n        width: 95%;\n    }\n    h2[class^=\"title\"] {\n        text-align: center;\n        font-size: 1.1rem;\n        font-weight: bold;\n        padding: 0.3rem 0.5rem;\n        background-color: gray;\n        border-radius: 10px;\n        border: 2px solid black;\n    }\n    div[id^=\"appbox_\"]:hover, div[id^=\"entbox_\"]:hover, div[id^=\"dessbox_\"]:hover {\n        z-index: 2;\n    }\n    div[id^=\"ent_\"], div[id^=\"app_\"], div[id^=\"dess_\"] {\n        font-size: 0.8rem;\n        align-content: center;\n        flex-wrap: wrap;\n        margin-top: 0;\n        margin-bottom: 0.2rem;\n        min-height: 11%;\n        max-width: 100%;\n    }\n    .box_apps img, .box_entrees img, .box_desserts img {\n        object-fit: cover;\n        width: 98.8%;\n        height: 12rem;\n    }\n    .box_apps, .box_entrees, .box_desserts {\n        display: grid;\n        gap: 0.4rem;\n        padding: 0.3rem;\n        grid-template-columns: repeat(2, 50%);\n        grid-template-rows: repeat(2, 50%);\n    }\n    div[id^=\"overlayapp_wrap_\"], div[id^=\"overlayent_wrap_\"], div[id^=\"overlaydess_wrap_\"] {\n        font-size: 0.7rem;\n    }\n    div[class^=\"leftof\"] > h2 {\n        text-align: left;\n        border: none;\n        padding: 0;\n    }\n    .bottom_foot {\n        font-size: calc(6.4px + .5vw);\n    }\n    #hoverText {\n        display: none;\n    }\n    #clickText {\n        display: inline;\n        font-size: calc(11px + .5vw);\n        margin-left: 0.5rem;\n    }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _tabswitch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabswitch.js */ "./src/tabswitch.js");





  
(0,_pageload_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

if (document.readyState !== 'loading') {
    (0,_tabswitch_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        (0,_tabswitch_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
    });
}


/* const homeBtn = document.getElementsByClassName("top_home")[0];
homeBtn.addEventListener('click', () => {
    console.log("page1 works");
    const allTheContent = document.getElementById("content")
    allTheContent.textContent = '';
    pageLoad();
})

const menuBtn = document.getElementsByClassName("top_menu")[0];
menuBtn.addEventListener('click', () => {
    console.log("page2 works");
    const allTheContent = document.getElementById("content")
    allTheContent.textContent = '';
    page2Load();
})

const contactBtn = document.getElementsByClassName("top_contact")[0];
contactBtn.addEventListener('click', () => {
    console.log("page3 works");
    const allTheContent = document.getElementById("content")
    allTheContent.textContent = '';
    page3Load();
}) */

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
/* harmony import */ var _tabswitch_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tabswitch.js */ "./src/tabswitch.js");















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

        /* document.addEventListener("DOMContentLoaded", function(e){
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
          }); */
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

        /* document.addEventListener("DOMContentLoaded", function(e){
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
          }); */
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

        /* document.addEventListener("DOMContentLoaded", function(e){
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
          }); */
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

    if (document.readyState !== 'loading') {
        console.log('document is already ready, just execute code here');
        myWait4DOMCode();
        (0,_tabswitch_js__WEBPACK_IMPORTED_MODULE_13__["default"])();
    } else {
        document.addEventListener('DOMContentLoaded', function () {
            console.log('document was not ready, place code here');
            myWait4DOMCode();
            (0,_tabswitch_js__WEBPACK_IMPORTED_MODULE_13__["default"])();
        });
    }
    
    function myWait4DOMCode() {
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
    }
}


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
/* harmony import */ var _cook_p3_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cook_p3.jpg */ "./src/cook_p3.jpg");
/* harmony import */ var _host_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./host.jpg */ "./src/host.jpg");
/* harmony import */ var _manager_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manager.jpg */ "./src/manager.jpg");
/* harmony import */ var _tabswitch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabswitch.js */ "./src/tabswitch.js");






function page3Load() {

    const headlinerbox = document.createElement("div");
    headlinerbox.className = "headliner_box_3";
    const header = document.createElement("div");
    header.className = "topheader";
    const underheader = document.createElement("div");
    underheader.className = "under_topheader";
    const container = document.createElement("div");
    container.className = "biggest_box_3";
    const section1 = document.createElement("div");
    section1.className = "section_1_p3";
    const section2 = document.createElement("div");
    section2.className = "section_2_p3";
    const section3 = document.createElement("div");
    section3.className = "section_3_p3";

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
    footer2.innerHTML = 'Image by&nbsp;<a href="https://www.freepik.com/free-vector/cute-panda-writing-book-with-pencil-cartoon-icon-illustration_12158331.htm#query=catalyststuff%20write&position=0&from_view=search&track=sph">catalyststuff</a>&nbsp;on Freepik';

    const header_contact = document.createElement("div");
    header_contact.className = "top_contact";
    const contact_text = document.createElement("div");
    contact_text.className = "corner_textcontact";
    contact_text.innerHTML = "Contact";

    const headline = document.createElement("h1");
    headline.className = "headliner"
    headline.innerHTML = "Contact Us";

    const contact_sep_1 = document.createElement("div");
    contact_sep_1.className = "contactsep_1";
    const contact_sep_2 = document.createElement("div");
    contact_sep_2.className = "contactsep_2";
    const contact_sep_3 = document.createElement("div");
    contact_sep_3.className = "contactsep_3";


    const contactbox_1 = document.createElement("div");
    contactbox_1.className = "boxcontact_1";
    const contactbox_2 = document.createElement("div");
    contactbox_2.className = "boxcontact_2";
    const contactbox_3 = document.createElement("div");
    contactbox_3.className = "boxcontact_3";

    const p1_title = document.createElement("h2");
    p1_title.className = "title_p1";
    p1_title.innerHTML = "Father Falafel";

    const p2_title = document.createElement("h2");
    p2_title.className = "title_p2";
    p2_title.innerHTML = "Mother Macaroni";

    const p3_title = document.createElement("h2");
    p3_title.className = "title_p3";
    p3_title.innerHTML = "Teenage Tapioca";

    const notImage_1 = document.createElement("div");
    notImage_1.className = "leftofimage";

    const notImage_2 = document.createElement("div");
    notImage_2.className = "leftofimage";

    const notImage_3 = document.createElement("div");
    notImage_3.className = "leftofimage";

    const details_p1 = document.createElement("div");
    details_p1.className = "detailsP1";
    details_p1.innerHTML = "Manager<br>123-456-7890<br>2InfinityN@Beyond.Com";

    const details_p2 = document.createElement("div");
    details_p2.className = "detailsP3";
    details_p2.innerHTML = "Chef<br>123-456-7891<br>Interstellar@Foodie.Com";

    const details_p3 = document.createElement("div");
    details_p3.className = "detailsP3";
    details_p3.innerHTML = "Host/Waiter<br>123-456-7892<br>Totally.Rad@Dude.Com";

    const cook3Icon = new Image();
    cook3Icon.src = _cook_p3_jpg__WEBPACK_IMPORTED_MODULE_0__;

    const hostIcon = new Image();
    hostIcon.src = _host_jpg__WEBPACK_IMPORTED_MODULE_1__;

    const managerIcon = new Image();
    managerIcon.src = _manager_jpg__WEBPACK_IMPORTED_MODULE_2__;

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
    container.appendChild(contact_sep_1);
    container.appendChild(contact_sep_2);
    container.appendChild(contact_sep_3);
    contact_sep_1.appendChild(contactbox_1);
    contactbox_1.appendChild(notImage_1);
    notImage_1.appendChild(p1_title);
    notImage_1.appendChild(details_p1);
    contactbox_1.appendChild(managerIcon);
    contact_sep_2.appendChild(contactbox_2);
    contactbox_2.appendChild(notImage_2);
    notImage_2.appendChild(p2_title);
    notImage_2.appendChild(details_p2);
    contactbox_2.appendChild(cook3Icon);
    contact_sep_3.appendChild(contactbox_3);
    contactbox_3.appendChild(notImage_3);
    notImage_3.appendChild(p3_title);
    notImage_3.appendChild(details_p3);
    contactbox_3.appendChild(hostIcon);
    headlinerbox.appendChild(headline);

    if (document.readyState !== 'loading') {
        (0,_tabswitch_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    } else {
        document.addEventListener('DOMContentLoaded', function () {
            (0,_tabswitch_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
        });
    }
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
/* harmony import */ var _tabswitch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabswitch.js */ "./src/tabswitch.js");



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
    footer1.innerHTML = 'Background photo by&nbsp;<a href="https://unsplash.com/@krisroller?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kristopher Roller</a>&nbsp;on&nbsp;<a href="https://unsplash.com/images/nature/galaxy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';


    const footer2 = document.createElement("div");
    footer2.innerHTML = 'Astronaut image by&nbsp;<a href="https://www.freepik.com/free-vector/cute-astronaut-chef-serving-food-cartoon-vector-icon-illustration-science-food-icon-isolated-flat_31348450.htm#query=astronaut%20chef&position=4&from_view=search&track=sph">catalyststuff</a> on Freepik';

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

    (0,_tabswitch_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
}


/***/ }),

/***/ "./src/tabswitch.js":
/*!**************************!*\
  !*** ./src/tabswitch.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tabSwitchCode)
/* harmony export */ });
/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload.js */ "./src/pageload.js");
/* harmony import */ var _page2load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page2load.js */ "./src/page2load.js");
/* harmony import */ var _page3load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page3load.js */ "./src/page3load.js");




function tabSwitchCode() {
    const btns = document.querySelector('.topheader');
    btns.addEventListener('click', (e) => {
        if (e.target.className.slice(0,8) === 'top_home' || e.target.className.slice(0,15) === 'corner_texthome') {
            const allTheContent = document.getElementById("content")
            allTheContent.textContent = '';
            (0,_pageload_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
        } else if (e.target.className.slice(0,8) === 'top_menu' || e.target.className.slice(0,15) === 'corner_textmenu') {
            const allTheContent = document.getElementById("content")
            allTheContent.textContent = '';
            (0,_page2load_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        } else if (e.target.className.slice(0,11) === 'top_contact' || e.target.className.slice(0,18) === 'corner_textcontact') {
            const allTheContent = document.getElementById("content")
            allTheContent.textContent = '';
            (0,_page3load_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        }
    })
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

/***/ "./src/cook_p3.jpg":
/*!*************************!*\
  !*** ./src/cook_p3.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f780b293d825d0e571e5.jpg";

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

/***/ "./src/host.jpg":
/*!**********************!*\
  !*** ./src/host.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8305eeb31b5175ff1b33.jpg";

/***/ }),

/***/ "./src/icecream.jpg":
/*!**************************!*\
  !*** ./src/icecream.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8561f18dc0e14e6f978.jpg";

/***/ }),

/***/ "./src/manager.jpg":
/*!*************************!*\
  !*** ./src/manager.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2bfe393e888c0766be7d.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyw2R0FBbUM7QUFDL0UsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5S0FBeUs7QUFDeksseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLGlEQUFpRCx5QkFBeUIsd0JBQXdCLEdBQUcsZ0JBQWdCLGdCQUFnQixpQkFBaUIsOEJBQThCLG1CQUFtQixHQUFHLGNBQWMsMkNBQTJDLHlCQUF5QixtQkFBbUIsc0JBQXNCLEdBQUcsMEJBQTBCLHNDQUFzQyxnQkFBZ0IsdUJBQXVCLGtDQUFrQyx5QkFBeUIsR0FBRyw0QkFBNEIsVUFBVSxtREFBbUQsT0FBTyxXQUFXLGtEQUFrRCxPQUFPLFdBQVcsaURBQWlELE9BQU8sV0FBVyxrREFBa0QsT0FBTyxHQUFHLGdDQUFnQywrQ0FBK0Msb0NBQW9DLDBDQUEwQyw2QkFBNkIsR0FBRywrREFBK0Qsa0JBQWtCLHFCQUFxQix5QkFBeUIsNkJBQTZCLEdBQUcsa0NBQWtDLG1CQUFtQixxQkFBcUIsZ0JBQWdCLGlCQUFpQixHQUFHLGlDQUFpQyxtQkFBbUIsb0JBQW9CLGVBQWUsa0JBQWtCLEdBQUcsNkJBQTZCLHlCQUF5QixpQkFBaUIsR0FBRyxnQkFBZ0IsYUFBYSxrQkFBa0Isa0JBQWtCLG9CQUFvQiw4QkFBOEIsZ0JBQWdCLDBCQUEwQixtQ0FBbUMsR0FBRyxrQkFBa0IsbUJBQW1CLGdCQUFnQixrQkFBa0Isa0JBQWtCLG9CQUFvQixvQ0FBb0MsMEJBQTBCLHlDQUF5QyxtQkFBbUIseUJBQXlCLEdBQUcsc0JBQXNCLDhCQUE4QixHQUFHLGtCQUFrQix3RUFBd0UsbUNBQW1DLGtDQUFrQyxvQkFBb0IsOEJBQThCLGtCQUFrQix1QkFBdUIsbUNBQW1DLGtEQUFrRCw4R0FBOEcsOEJBQThCLDBCQUEwQiwwQkFBMEIsR0FBRyw2QkFBNkIsNkJBQTZCLDBCQUEwQiw4QkFBOEIsb0JBQW9CLGtCQUFrQiw2QkFBNkIsOEJBQThCLDJCQUEyQixvQkFBb0Isc0JBQXNCLDBCQUEwQiw2QkFBNkIsR0FBRyxtQ0FBbUMsNkJBQTZCLEdBQUcsbUJBQW1CLG9CQUFvQiw2QkFBNkIsR0FBRyxnQkFBZ0IseUJBQXlCLHlCQUF5Qix3QkFBd0IsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsb0JBQW9CLG1DQUFtQyxzQkFBc0Isb0JBQW9CLHVCQUF1QixzQkFBc0IsOEJBQThCLDJCQUEyQiwwQkFBMEIsNkJBQTZCLDBCQUEwQiw4QkFBOEIsb0JBQW9CLEdBQUcsZ0JBQWdCLHNCQUFzQixHQUFHLHNCQUFzQiw2QkFBNkIsR0FBRyxnQkFBZ0Isc0JBQXNCLEdBQUcsZ0JBQWdCLHNCQUFzQiwwQkFBMEIsR0FBRyxRQUFRLHNCQUFzQixxQkFBcUIsR0FBRyxRQUFRLG1DQUFtQyx3QkFBd0IscUJBQXFCLEdBQUcsaUJBQWlCLDBDQUEwQyx3QkFBd0Isd0JBQXdCLEdBQUcsU0FBUyw4QkFBOEIsMEJBQTBCLGtCQUFrQixtQkFBbUIsR0FBRywwQkFBMEIsbUJBQW1CLDRCQUE0QixHQUFHLGFBQWEsK0JBQStCLGlDQUFpQyxHQUFHLGNBQWMsdUJBQXVCLEdBQUcseURBQXlELG1DQUFtQyxzQkFBc0Isb0JBQW9CLHVCQUF1Qiw4QkFBOEIsMkJBQTJCLDBCQUEwQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixvQkFBb0Isc0JBQXNCLEdBQUcsMEJBQTBCLDBDQUEwQyx3QkFBd0Isd0JBQXdCLHNCQUFzQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixHQUFHLG9CQUFvQix3RUFBd0UsbUNBQW1DLGtDQUFrQyxvQkFBb0IsOEJBQThCLDRCQUE0Qix1QkFBdUIsbUNBQW1DLGtEQUFrRCwyR0FBMkcsMEJBQTBCLDBCQUEwQixHQUFHLDRDQUE0QyxvQkFBb0IsNENBQTRDLHlDQUF5QyxHQUFHLHdEQUF3RCx3QkFBd0IsbUJBQW1CLG9CQUFvQixHQUFHLDhEQUE4RCwyQ0FBMkMsOEJBQThCLDBCQUEwQixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIscUJBQXFCLHFCQUFxQixHQUFHLHVFQUF1RSx3Q0FBd0MsOEJBQThCLDBCQUEwQixHQUFHLHlGQUF5Riw2Q0FBNkMsMEJBQTBCLGtDQUFrQywwQ0FBMEMsNkJBQTZCLEdBQUcsbUNBQW1DLDZCQUE2QiwyQ0FBMkMsd0JBQXdCLEdBQUcseUJBQXlCLG1CQUFtQixvQ0FBb0MsR0FBRyxtQkFBbUIsc0JBQXNCLEdBQUcsbUJBQW1CLHNCQUFzQixHQUFHLG1CQUFtQiw0QkFBNEIsc0JBQXNCLEdBQUcsOEJBQThCLHlCQUF5QixtQkFBbUIsOEJBQThCLEdBQUcsb0dBQW9HLHlCQUF5QixhQUFhLGdCQUFnQixjQUFjLGVBQWUseUNBQXlDLGtCQUFrQix5QkFBeUIsaUJBQWlCLG9CQUFvQiwwQkFBMEIsOEJBQThCLDJCQUEyQixvQ0FBb0MsMEJBQTBCLDhDQUE4QyxHQUFHLG1NQUFtTSwwQkFBMEIsaUJBQWlCLEdBQUcscUZBQXFGLHNCQUFzQixpQ0FBaUMsR0FBRyxvTEFBb0wsK0JBQStCLEdBQUcsb0JBQW9CLGtDQUFrQyw2QkFBNkIsR0FBRyx1REFBdUQsb0JBQW9CLHdFQUF3RSxtQ0FBbUMsa0NBQWtDLG9CQUFvQiw4QkFBOEIsNEJBQTRCLHVCQUF1QixtQ0FBbUMsOENBQThDLDBCQUEwQiwwQkFBMEIsR0FBRyxnQ0FBZ0MsMEJBQTBCLGtCQUFrQixHQUFHLHNCQUFzQixtQ0FBbUMsc0JBQXNCLG9CQUFvQix1QkFBdUIsOEJBQThCLDJCQUEyQiwwQkFBMEIsNkJBQTZCLDBCQUEwQiw4QkFBOEIsb0JBQW9CLHNCQUFzQiwwQkFBMEIsR0FBRyxtQkFBbUIsc0JBQXNCLEdBQUcsbUJBQW1CLHNCQUFzQixHQUFHLG1CQUFtQiw0QkFBNEIsc0JBQXNCLEdBQUcsNEJBQTRCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLEdBQUcsaUNBQWlDLHNCQUFzQiw4QkFBOEIsMkJBQTJCLDBCQUEwQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixrQkFBa0Isb0JBQW9CLG9CQUFvQixxQ0FBcUMsR0FBRyw0QkFBNEIsdUJBQXVCLHdCQUF3QixtQkFBbUIsbUNBQW1DLGlCQUFpQix1QkFBdUIsR0FBRyw4QkFBOEIsdUJBQXVCLHVCQUF1QixHQUFHLGdFQUFnRSxxQkFBcUIsdUJBQXVCLDZCQUE2QixPQUFPLHdDQUF3QyxtQ0FBbUMsT0FBTyxvQ0FBb0Msc0NBQXNDLE9BQU8sMkVBQTJFLHlCQUF5QiwwQkFBMEIsT0FBTyx5RUFBeUUsdUJBQXVCLE9BQU8saUNBQWlDLHdCQUF3QixrQ0FBa0Msc0JBQXNCLE9BQU8sNERBQTRELHFCQUFxQixPQUFPLDRCQUE0Qiw2QkFBNkIsNEJBQTRCLDRCQUE0QixpQ0FBaUMsaUNBQWlDLDhCQUE4QixrQ0FBa0MsT0FBTywyRkFBMkYscUJBQXFCLE9BQU8sZ0VBQWdFLDRCQUE0QixnQ0FBZ0MsMEJBQTBCLHdCQUF3QixnQ0FBZ0MsMEJBQTBCLDBCQUEwQixPQUFPLDBEQUEwRCw0QkFBNEIsdUJBQXVCLHdCQUF3QixPQUFPLDhDQUE4Qyx3QkFBd0Isc0JBQXNCLDBCQUEwQixnREFBZ0QsNkNBQTZDLE9BQU8sb0dBQW9HLDRCQUE0QixPQUFPLG1DQUFtQywyQkFBMkIsdUJBQXVCLHFCQUFxQixPQUFPLG9CQUFvQix3Q0FBd0MsT0FBTyxrQkFBa0Isd0JBQXdCLE9BQU8sa0JBQWtCLDBCQUEwQix1Q0FBdUMsOEJBQThCLE9BQU8sR0FBRyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLDBKQUEwSixXQUFXLHlCQUF5Qix3QkFBd0IsR0FBRyxnQkFBZ0IsZ0JBQWdCLGlCQUFpQiw4QkFBOEIsbUJBQW1CLEdBQUcsY0FBYywyQ0FBMkMseUJBQXlCLG1CQUFtQixzQkFBc0IsR0FBRywwQkFBMEIsc0NBQXNDLGdCQUFnQix1QkFBdUIsa0NBQWtDLHlCQUF5QixHQUFHLDRCQUE0QixVQUFVLG1EQUFtRCxPQUFPLFdBQVcsa0RBQWtELE9BQU8sV0FBVyxpREFBaUQsT0FBTyxXQUFXLGtEQUFrRCxPQUFPLEdBQUcsZ0NBQWdDLCtDQUErQyxvQ0FBb0MsMENBQTBDLDZCQUE2QixHQUFHLCtEQUErRCxrQkFBa0IscUJBQXFCLHlCQUF5Qiw2QkFBNkIsR0FBRyxrQ0FBa0MsbUJBQW1CLHFCQUFxQixnQkFBZ0IsaUJBQWlCLEdBQUcsaUNBQWlDLG1CQUFtQixvQkFBb0IsZUFBZSxrQkFBa0IsR0FBRyw2QkFBNkIseUJBQXlCLGlCQUFpQixHQUFHLGdCQUFnQixhQUFhLGtCQUFrQixrQkFBa0Isb0JBQW9CLDhCQUE4QixnQkFBZ0IsMEJBQTBCLG1DQUFtQyxHQUFHLGtCQUFrQixtQkFBbUIsZ0JBQWdCLGtCQUFrQixrQkFBa0Isb0JBQW9CLG9DQUFvQywwQkFBMEIseUNBQXlDLG1CQUFtQix5QkFBeUIsR0FBRyxzQkFBc0IsOEJBQThCLEdBQUcsa0JBQWtCLGdEQUFnRCxtQ0FBbUMsa0NBQWtDLG9CQUFvQiw4QkFBOEIsa0JBQWtCLHVCQUF1QixtQ0FBbUMsa0RBQWtELDhHQUE4Ryw4QkFBOEIsMEJBQTBCLDBCQUEwQixHQUFHLDZCQUE2Qiw2QkFBNkIsMEJBQTBCLDhCQUE4QixvQkFBb0Isa0JBQWtCLDZCQUE2Qiw4QkFBOEIsMkJBQTJCLG9CQUFvQixzQkFBc0IsMEJBQTBCLDZCQUE2QixHQUFHLG1DQUFtQyw2QkFBNkIsR0FBRyxtQkFBbUIsb0JBQW9CLDZCQUE2QixHQUFHLGdCQUFnQix5QkFBeUIseUJBQXlCLHdCQUF3QixHQUFHLGdCQUFnQixvQkFBb0IsR0FBRyxvQkFBb0IsbUNBQW1DLHNCQUFzQixvQkFBb0IsdUJBQXVCLHNCQUFzQiw4QkFBOEIsMkJBQTJCLDBCQUEwQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixvQkFBb0IsR0FBRyxnQkFBZ0Isc0JBQXNCLEdBQUcsc0JBQXNCLDZCQUE2QixHQUFHLGdCQUFnQixzQkFBc0IsR0FBRyxnQkFBZ0Isc0JBQXNCLDBCQUEwQixHQUFHLFFBQVEsc0JBQXNCLHFCQUFxQixHQUFHLFFBQVEsbUNBQW1DLHdCQUF3QixxQkFBcUIsR0FBRyxpQkFBaUIsMENBQTBDLHdCQUF3Qix3QkFBd0IsR0FBRyxTQUFTLDhCQUE4QiwwQkFBMEIsa0JBQWtCLG1CQUFtQixHQUFHLDBCQUEwQixtQkFBbUIsNEJBQTRCLEdBQUcsYUFBYSwrQkFBK0IsaUNBQWlDLEdBQUcsY0FBYyx1QkFBdUIsR0FBRyx5REFBeUQsbUNBQW1DLHNCQUFzQixvQkFBb0IsdUJBQXVCLDhCQUE4QiwyQkFBMkIsMEJBQTBCLDZCQUE2QiwwQkFBMEIsOEJBQThCLG9CQUFvQixzQkFBc0IsR0FBRywwQkFBMEIsMENBQTBDLHdCQUF3Qix3QkFBd0Isc0JBQXNCLDZCQUE2QiwwQkFBMEIsOEJBQThCLEdBQUcsb0JBQW9CLGdEQUFnRCxtQ0FBbUMsa0NBQWtDLG9CQUFvQiw4QkFBOEIsNEJBQTRCLHVCQUF1QixtQ0FBbUMsa0RBQWtELDJHQUEyRywwQkFBMEIsMEJBQTBCLEdBQUcsNENBQTRDLG9CQUFvQiw0Q0FBNEMseUNBQXlDLEdBQUcsd0RBQXdELHdCQUF3QixtQkFBbUIsb0JBQW9CLEdBQUcsOERBQThELDJDQUEyQyw4QkFBOEIsMEJBQTBCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixxQkFBcUIscUJBQXFCLEdBQUcsdUVBQXVFLHdDQUF3Qyw4QkFBOEIsMEJBQTBCLEdBQUcseUZBQXlGLDZDQUE2QywwQkFBMEIsa0NBQWtDLDBDQUEwQyw2QkFBNkIsR0FBRyxtQ0FBbUMsNkJBQTZCLDJDQUEyQyx3QkFBd0IsR0FBRyx5QkFBeUIsbUJBQW1CLG9DQUFvQyxHQUFHLG1CQUFtQixzQkFBc0IsR0FBRyxtQkFBbUIsc0JBQXNCLEdBQUcsbUJBQW1CLDRCQUE0QixzQkFBc0IsR0FBRyw4QkFBOEIseUJBQXlCLG1CQUFtQiw4QkFBOEIsR0FBRyxvR0FBb0cseUJBQXlCLGFBQWEsZ0JBQWdCLGNBQWMsZUFBZSx5Q0FBeUMsa0JBQWtCLHlCQUF5QixpQkFBaUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsMkJBQTJCLG9DQUFvQywwQkFBMEIsOENBQThDLEdBQUcsbU1BQW1NLDBCQUEwQixpQkFBaUIsR0FBRyxxRkFBcUYsc0JBQXNCLGlDQUFpQyxHQUFHLG9MQUFvTCwrQkFBK0IsR0FBRyxvQkFBb0Isa0NBQWtDLDZCQUE2QixHQUFHLHVEQUF1RCxvQkFBb0IsZ0RBQWdELG1DQUFtQyxrQ0FBa0Msb0JBQW9CLDhCQUE4Qiw0QkFBNEIsdUJBQXVCLG1DQUFtQyw4Q0FBOEMsMEJBQTBCLDBCQUEwQixHQUFHLGdDQUFnQywwQkFBMEIsa0JBQWtCLEdBQUcsc0JBQXNCLG1DQUFtQyxzQkFBc0Isb0JBQW9CLHVCQUF1Qiw4QkFBOEIsMkJBQTJCLDBCQUEwQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixvQkFBb0Isc0JBQXNCLDBCQUEwQixHQUFHLG1CQUFtQixzQkFBc0IsR0FBRyxtQkFBbUIsc0JBQXNCLEdBQUcsbUJBQW1CLDRCQUE0QixzQkFBc0IsR0FBRyw0QkFBNEIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsR0FBRyxpQ0FBaUMsc0JBQXNCLDhCQUE4QiwyQkFBMkIsMEJBQTBCLDZCQUE2QiwwQkFBMEIsOEJBQThCLGtCQUFrQixvQkFBb0Isb0JBQW9CLHFDQUFxQyxHQUFHLDRCQUE0Qix1QkFBdUIsd0JBQXdCLG1CQUFtQixtQ0FBbUMsaUJBQWlCLHVCQUF1QixHQUFHLDhCQUE4Qix1QkFBdUIsdUJBQXVCLEdBQUcsZ0VBQWdFLHFCQUFxQix1QkFBdUIsNkJBQTZCLE9BQU8sd0NBQXdDLG1DQUFtQyxPQUFPLG9DQUFvQyxzQ0FBc0MsT0FBTywyRUFBMkUseUJBQXlCLDBCQUEwQixPQUFPLHlFQUF5RSx1QkFBdUIsT0FBTyxpQ0FBaUMsd0JBQXdCLGtDQUFrQyxzQkFBc0IsT0FBTyw0REFBNEQscUJBQXFCLE9BQU8sNEJBQTRCLDZCQUE2Qiw0QkFBNEIsNEJBQTRCLGlDQUFpQyxpQ0FBaUMsOEJBQThCLGtDQUFrQyxPQUFPLDJGQUEyRixxQkFBcUIsT0FBTyxnRUFBZ0UsNEJBQTRCLGdDQUFnQywwQkFBMEIsd0JBQXdCLGdDQUFnQywwQkFBMEIsMEJBQTBCLE9BQU8sMERBQTBELDRCQUE0Qix1QkFBdUIsd0JBQXdCLE9BQU8sOENBQThDLHdCQUF3QixzQkFBc0IsMEJBQTBCLGdEQUFnRCw2Q0FBNkMsT0FBTyxvR0FBb0csNEJBQTRCLE9BQU8sbUNBQW1DLDJCQUEyQix1QkFBdUIscUJBQXFCLE9BQU8sb0JBQW9CLHdDQUF3QyxPQUFPLGtCQUFrQix3QkFBd0IsT0FBTyxrQkFBa0IsMEJBQTBCLHVDQUF1Qyw4QkFBOEIsT0FBTyxHQUFHLG1CQUFtQjtBQUN0NzNCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDWDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ2dCO0FBQ0U7QUFDQTtBQUNJO0FBQzNDO0FBQ0Esd0RBQVE7O0FBRVI7QUFDQSxJQUFJLHlEQUFhO0FBQ2pCLEVBQUU7QUFDRjtBQUNBLFFBQVEseURBQWE7QUFDckIsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDNkI7QUFDVztBQUNQO0FBQ0k7QUFDSjtBQUNHO0FBQ0U7QUFDRDtBQUNWO0FBQ0k7QUFDRjtBQUNBO0FBQ1M7QUFDSTs7QUFFNUI7O0FBRWY7QUFDQSxtQkFBbUIsc0NBQUk7QUFDdkI7QUFDQSxnQkFBZ0IsZ0RBQUs7QUFDckI7QUFDQSxlQUFlLHdDQUFNO0FBQ3JCO0FBQ0EsZUFBZSw4Q0FBSTtBQUNuQjtBQUNBLGlCQUFpQix3Q0FBTTtBQUN2QjtBQUNBLGNBQWMsMENBQU87QUFDckI7QUFDQSxpQkFBaUIsNkNBQU07QUFDdkI7QUFDQSxjQUFjLDBDQUFRO0FBQ3RCO0FBQ0EsY0FBYyxxQ0FBRztBQUNqQjtBQUNBLGdCQUFnQix1Q0FBSztBQUNyQjtBQUNBLGVBQWUsdUNBQUk7QUFDbkI7QUFDQSxlQUFlLHVDQUFJO0FBQ25CO0FBQ0EsZ0JBQWdCLCtDQUFLOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrS0FBK0ssNklBQTZJLGtJQUFrSSw0SUFBNEksOElBQThJLHVKQUF1Siw4SEFBOEgsc0lBQXNJLDhJQUE4SSw0SUFBNEksT0FBTzs7O0FBR3A1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBEQUFhO0FBQ3JCLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUFhO0FBQ3pCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4VGtDO0FBQ0o7QUFDTTtBQUNPOzs7QUFHNUI7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVDQUF1Qyx5SUFBeUksUUFBUTs7O0FBR3hMO0FBQ0EsdUNBQXVDLGtOQUFrTjs7QUFFelA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IseUNBQUs7O0FBRXpCO0FBQ0EsbUJBQW1CLHNDQUFJOztBQUV2QjtBQUNBLHNCQUFzQix5Q0FBTzs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx5REFBYTtBQUNyQixNQUFNO0FBQ047QUFDQSxZQUFZLHlEQUFhO0FBQ3pCLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pKOEI7QUFDYTs7QUFFNUI7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCx5SUFBeUksUUFBUTs7O0FBR25NO0FBQ0EsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsc0NBQUk7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSx5REFBYTtBQUNqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdxQztBQUNFO0FBQ0E7O0FBRXhCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQVE7QUFDcEIsVUFBVTtBQUNWO0FBQ0E7QUFDQSxZQUFZLHlEQUFTO0FBQ3JCLFVBQVU7QUFDVjtBQUNBO0FBQ0EsWUFBWSx5REFBUztBQUNyQjtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9zcmMvcGFnZTJsb2FkLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL3NyYy9wYWdlM2xvYWQuanMiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vc3JjL3BhZ2Vsb2FkLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL3NyYy90YWJzd2l0Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUl0aW0mZmFtaWx5PVBhcHJpa2EmZmFtaWx5PVF1YW50aWNvOml0YWxAMSZmYW1pbHk9UXVpY2tzYW5kJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDpib2xkZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJ0b3BfXFxcIl0ge1xcbiAgICBmb250LWZhbWlseTogJ1BhcHJpa2EnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAuMzVyZW07XFxuICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCBibGFjaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNoYW5nZUNvbG9yIHtcXG4gICAgMCUge1xcbiAgICAgICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigxODEsIDE0MSwgMjU1KTtcXG4gICAgfVxcbiAgICAyNSUge1xcbiAgICAgICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigyNTUsIDQyLCAyMTIpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDI0OSwgNDEsIDYyKTtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigyNTUsIDQyLCAyMTIpO1xcbiAgICB9XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXTpob3ZlciB7XFxuICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCByZ2IoMTU4LCAxMDUsIDI1NSk7XFxuXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2VDb2xvcjtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXTo6YmVmb3JlLCBkaXZbY2xhc3NePVxcXCJ0b3BfXFxcIl06OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6IGFxdWFtYXJpbmU7XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXTo6YmVmb3JlIHtcXG4gICAgdG9wOiAtMC4zZW07IFxcbiAgICBib3R0b206IC0wLjNlbTtcXG4gICAgbGVmdDogMWVtO1xcbiAgICByaWdodDogMWVtO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJ0b3BfXFxcIl06OmFmdGVyIHtcXG4gICAgbGVmdDogLTAuM2VtO1xcbiAgICByaWdodDogLTAuM2VtO1xcbiAgICB0b3A6IDFlbTtcXG4gICAgYm90dG9tOiAxZW07XFxufVxcblxcbmRpdltjbGFzc149XFxcImNvcm5lcl9cXFwiXSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnRvcGhlYWRlciB7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG4uYm90dG9tX2Zvb3Qge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk4LCA3NCwgMjU1KTtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi51bmRlcl90b3BoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmJpZ2dlc3RfYm94IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2xhbXAoMjAlLCAyMiUsIDI3JSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogY2xhbXAoMTIlLCAyMCUsIDIxJSkgY2xhbXAoMjIlLCAyOCUsIDFmcikgY2xhbXAoMjIlLCAyOCUsIDFmcikgY2xhbXAoMTIlLCAyMCUsIDIxJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtNXZoO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXZoO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJzZWN0aW9uXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMC44NTtcXG4gICAgbWFyZ2luLXRvcDoxcmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJzZWN0aW9uXFxcIl0gPiBkaXYge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xcbn1cXG5cXG4jbWVudV90aXBfYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2hvdmVyVGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDAuM3JlbTtcXG59XFxuXFxuI2NsaWNrVGV4dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oZWFkbGluZXJfYm94IHtcXG4gICAgZm9udC1mYW1pbHk6ICdJdGltJywgY3Vyc2l2ZTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbi5zZWN0aW9uXzEge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5zZWN0aW9uXzEgPiBkaXYge1xcbiAgICBwYWRkaW5nOiAwLjJyZW0gMS4ycmVtO1xcbn1cXG5cXG4uc2VjdGlvbl8yIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uc2VjdGlvbl8zIHtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJdGltJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG4udGl0bGUtdGV4dCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVhbnRpY28nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmltZyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbn1cXG5cXG5hLCBhOmxpbmssIGE6dmlzaXRlZCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gICAgY29sb3I6cmdiKDI0OCwgMTY1LCAyNTUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuYTphY3RpdmUge1xcbiAgICBjb2xvcjphcXVhbWFyaW5lO1xcbn1cXG5cXG4vKnVuZGVybmVhdGggaXMgcGFnZTJMb2FkIENTUyovXFxuXFxuLmhlYWRsaW5lcl9ib3hfMiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSXRpbScsIGN1cnNpdmU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgb3BhY2l0eTogMC44NTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG5oMltjbGFzc149XFxcInRpdGxlXFxcIl0ge1xcbiAgICBmb250LWZhbWlseTogJ1F1YW50aWNvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYmlnZ2VzdF9ib3hfMiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjbGFtcCgyMCUsIDI1JSwgMjglKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBjbGFtcCg0JSwgNSUsIDclKSBjbGFtcCgyNSUsIDM5JSwgMWZyKSBjbGFtcCgyNSUsIDM5JSwgMWZyKSBjbGFtcCgyNSUsIDM5JSwgMWZyKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTV2aDtcXG4gICAgcGFkZGluZy1ib3R0b206IDV2aDtcXG59XFxuXFxuLmJveF9hcHBzLCAuYm94X2VudHJlZXMsIC5ib3hfZGVzc2VydHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA1MCUpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA1MCUpO1xcbn1cXG5cXG4uYm94X2FwcHMgaW1nLCAuYm94X2VudHJlZXMgaW1nLCAuYm94X2Rlc3NlcnRzIGltZyB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogOTguOCU7XFxuICAgIGhlaWdodDogMjFyZW07XFxufVxcblxcbmRpdltpZF49XFxcImVudF9cXFwiXSwgZGl2W2lkXj1cXFwiYXBwX1xcXCJdLCBkaXZbaWRePVxcXCJkZXNzX1xcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMC4ycmVtIDAuNHJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMC4ycmVtIGF1dG87XFxuICAgIG1pbi13aWR0aDogNTUlO1xcbiAgICBtYXgtd2lkdGg6IDY1JTtcXG59XFxuXFxuZGl2W2lkXj1cXFwiYXBwYm94X1xcXCJdLCBkaXZbaWRePVxcXCJlbnRib3hfXFxcIl0sIGRpdltpZF49XFxcImRlc3Nib3hfXFxcIl0ge1xcbiAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5kaXZbaWRePVxcXCJhcHBib3hfXFxcIl06aG92ZXIsIGRpdltpZF49XFxcImVudGJveF9cXFwiXTpob3ZlciwgZGl2W2lkXj1cXFwiZGVzc2JveF9cXFwiXTpob3ZlciB7XFxuICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCByZ2IoMjMwLCAwLCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBhbmltYXRpb24tbmFtZTogY2hhbmdlQ29sb3I7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xcbn1cXG5cXG5kaXZbY2xhc3MqPVxcXCJfcDJcXFwiXSA+IGRpdiB7ICAgIFxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5kaXZbY2xhc3MqPVxcXCJfcDJcXFwiXSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zZWN0aW9uXzFfcDIge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5zZWN0aW9uXzJfcDIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5zZWN0aW9uXzNfcDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG59XFxuXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuICBcXG5kaXZbaWRePVxcXCJvdmVybGF5YXBwX3dyYXBfXFxcIl0sIGRpdltpZF49XFxcIm92ZXJsYXllbnRfd3JhcF9cXFwiXSwgZGl2W2lkXj1cXFwib3ZlcmxheWRlc3Nfd3JhcF9cXFwiXSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM2LCA2MiwgMjA2LCAwLjYpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycywgdmlzaWJpbGl0eSAuMnM7XFxufVxcbiAgXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXTpob3ZlciBkaXZbaWRePVxcXCJvdmVybGF5YXBwX3dyYXBfXFxcIl0sXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXTpob3ZlciBkaXZbaWRePVxcXCJvdmVybGF5ZW50X3dyYXBfXFxcIl0sXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXTpob3ZlciBkaXZbaWRePVxcXCJvdmVybGF5ZGVzc193cmFwX1xcXCJdIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuICBcXG5kaXZbaWRePVxcXCJvdmVybGF5YXBwX1xcXCJdLCBkaXZbaWRePVxcXCJvdmVybGF5ZW50X1xcXCJdLCBkaXZbaWRePVxcXCJvdmVybGF5ZGVzc19cXFwiXSB7XFxuICAgIHRyYW5zaXRpb246IC4ycztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFlbSk7XFxufVxcbiAgXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXTpob3ZlciBkaXZbaWRePVxcXCJvdmVybGF5YXBwX1xcXCJdLFxcbmRpdltpZF49XFxcImltZ3dyYXBwZXJfXFxcIl06aG92ZXIgZGl2W2lkXj1cXFwib3ZlcmxheWVudF9cXFwiXSxcXG5kaXZbaWRePVxcXCJpbWd3cmFwcGVyX1xcXCJdOmhvdmVyIGRpdltpZF49XFxcIm92ZXJsYXlkZXNzX1xcXCJdIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG5cXG5kaXYjbG9uZ2Zvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyg2cHggKyAuNXZ3KTtcXG4gICAgbWFyZ2luOiAwLjJyZW0sIDAuNHJlbTtcXG59XFxuXFxuLyp1bmRlcm5lYXRoIGlzIHBhZ2UzTG9hZCBDU1MqL1xcblxcbi5iaWdnZXN0X2JveF8zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1dmggcmVwZWF0KDMsIDFmcik7XFxuICAgIG1hcmdpbi1ib3R0b206IC01dmg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1dmg7XFxufVxcblxcbmRpdltjbGFzc149XFxcImNvbnRhY3RzZXBcXFwiXSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVhZGxpbmVyX2JveF8zIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJdGltJywgY3Vyc2l2ZTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5zZWN0aW9uXzFfcDMge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5zZWN0aW9uXzJfcDMge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5zZWN0aW9uXzNfcDMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwibGVmdG9mXFxcIl0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0O1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJib3hjb250YWN0X1xcXCJdIHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgb3BhY2l0eTogMC44NTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5oMltjbGFzc149XFxcInRpdGxlX3BcXFwiXSB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMCAwLjJyZW07XFxufVxcblxcbmRpdltjbGFzc149XFxcImRldGFpbHNQXFxcIl0ge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW46IDAgMC4ycmVtO1xcbn1cXG5cXG4vKlBob25lIENTUyovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBkaXYudG9waGVhZGVyIHtcXG4gICAgICAgIGhlaWdodDogMTJ2aDtcXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcXG4gICAgfVxcbiAgICAuaGVhZGxpbmVyX2JveCwgLmhlYWRsaW5lcl9ib3hfMiB7XFxuICAgICAgICBtYXJnaW46IDFyZW0gMnJlbSAwIDJyZW07XFxuICAgIH1cXG4gICAgLmJpZ2dlc3RfYm94LCAuYmlnZ2VzdF9ib3hfMiB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuICAgIH1cXG4gICAgLnNlY3Rpb25fMSwgLnNlY3Rpb25fMiwgLnNlY3Rpb25fMywgXFxuICAgIGRpdltjbGFzc149XFxcImdyaWRfc2VwX1xcXCJdIHtcXG4gICAgICAgIG1pbi13aWR0aDogNjAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIGRpdltpZF49XFxcImFwcGJveF9cXFwiXSwgZGl2W2lkXj1cXFwiZW50Ym94X1xcXCJdLCBkaXZbaWRePVxcXCJkZXNzYm94X1xcXCJdIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbiAgICBkaXZbY2xhc3NePVxcXCJncmlkX3NlcF9cXFwiXSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICBkaXYuc2VjdGlvbl8xX3AyLCBkaXYuc2VjdGlvbl8yX3AyLCBkaXYuc2VjdGlvbl8zX3AyIHtcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgIH1cXG4gICAgaDJbY2xhc3NePVxcXCJ0aXRsZVxcXCJdIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgfVxcbiAgICBkaXZbaWRePVxcXCJhcHBib3hfXFxcIl06aG92ZXIsIGRpdltpZF49XFxcImVudGJveF9cXFwiXTpob3ZlciwgZGl2W2lkXj1cXFwiZGVzc2JveF9cXFwiXTpob3ZlciB7XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICB9XFxuICAgIGRpdltpZF49XFxcImVudF9cXFwiXSwgZGl2W2lkXj1cXFwiYXBwX1xcXCJdLCBkaXZbaWRePVxcXCJkZXNzX1xcXCJdIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDExJTtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICAuYm94X2FwcHMgaW1nLCAuYm94X2VudHJlZXMgaW1nLCAuYm94X2Rlc3NlcnRzIGltZyB7XFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgIHdpZHRoOiA5OC44JTtcXG4gICAgICAgIGhlaWdodDogMTJyZW07XFxuICAgIH1cXG4gICAgLmJveF9hcHBzLCAuYm94X2VudHJlZXMsIC5ib3hfZGVzc2VydHMge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdhcDogMC40cmVtO1xcbiAgICAgICAgcGFkZGluZzogMC4zcmVtO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNTAlKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDUwJSk7XFxuICAgIH1cXG4gICAgZGl2W2lkXj1cXFwib3ZlcmxheWFwcF93cmFwX1xcXCJdLCBkaXZbaWRePVxcXCJvdmVybGF5ZW50X3dyYXBfXFxcIl0sIGRpdltpZF49XFxcIm92ZXJsYXlkZXNzX3dyYXBfXFxcIl0ge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIH1cXG4gICAgZGl2W2NsYXNzXj1cXFwibGVmdG9mXFxcIl0gPiBoMiB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcbiAgICAuYm90dG9tX2Zvb3Qge1xcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDYuNHB4ICsgLjV2dyk7XFxuICAgIH1cXG4gICAgI2hvdmVyVGV4dCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgICNjbGlja1RleHQge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDExcHggKyAuNXZ3KTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hC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SSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUEsWUFBWTs7QUFFWjtJQUNJO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTs7UUFFSSxjQUFjO1FBQ2QsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixXQUFXO0lBQ2Y7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsZUFBZTtRQUNmLGFBQWE7UUFDYixxQkFBcUI7UUFDckIsZUFBZTtRQUNmLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLFdBQVc7UUFDWCxlQUFlO1FBQ2YscUNBQXFDO1FBQ3JDLGtDQUFrQztJQUN0QztJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLFVBQVU7SUFDZDtJQUNBO1FBQ0ksNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsNEJBQTRCO1FBQzVCLG1CQUFtQjtJQUN2QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUl0aW0mZmFtaWx5PVBhcHJpa2EmZmFtaWx5PVF1YW50aWNvOml0YWxAMSZmYW1pbHk9UXVpY2tzYW5kJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUGFwcmlrYScsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMC4zNXJlbTtcXG4gICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIGJsYWNrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbkBrZXlmcmFtZXMgY2hhbmdlQ29sb3Ige1xcbiAgICAwJSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDE4MSwgMTQxLCAyNTUpO1xcbiAgICB9XFxuICAgIDI1JSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDI1NSwgNDIsIDIxMik7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCByZ2IoMjQ5LCA0MSwgNjIpO1xcbiAgICB9XFxuICAgIDc1JSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDI1NSwgNDIsIDIxMik7XFxuICAgIH1cXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwidG9wX1xcXCJdOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigxNTgsIDEwNSwgMjU1KTtcXG5cXG4gICAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUNvbG9yO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwidG9wX1xcXCJdOjpiZWZvcmUsIGRpdltjbGFzc149XFxcInRvcF9cXFwiXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogYXF1YW1hcmluZTtcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwidG9wX1xcXCJdOjpiZWZvcmUge1xcbiAgICB0b3A6IC0wLjNlbTsgXFxuICAgIGJvdHRvbTogLTAuM2VtO1xcbiAgICBsZWZ0OiAxZW07XFxuICAgIHJpZ2h0OiAxZW07XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXTo6YWZ0ZXIge1xcbiAgICBsZWZ0OiAtMC4zZW07XFxuICAgIHJpZ2h0OiAtMC4zZW07XFxuICAgIHRvcDogMWVtO1xcbiAgICBib3R0b206IDFlbTtcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwiY29ybmVyX1xcXCJdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udG9waGVhZGVyIHtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA5dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcbi5ib3R0b21fZm9vdCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTgsIDc0LCAyNTUpO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnVuZGVyX3RvcGhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYmlnZ2VzdF9ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYmFja2dyb3VuZC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2xhbXAoMjAlLCAyMiUsIDI3JSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogY2xhbXAoMTIlLCAyMCUsIDIxJSkgY2xhbXAoMjIlLCAyOCUsIDFmcikgY2xhbXAoMjIlLCAyOCUsIDFmcikgY2xhbXAoMTIlLCAyMCUsIDIxJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtNXZoO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXZoO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJzZWN0aW9uXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMC44NTtcXG4gICAgbWFyZ2luLXRvcDoxcmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJzZWN0aW9uXFxcIl0gPiBkaXYge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xcbn1cXG5cXG4jbWVudV90aXBfYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2hvdmVyVGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDAuM3JlbTtcXG59XFxuXFxuI2NsaWNrVGV4dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oZWFkbGluZXJfYm94IHtcXG4gICAgZm9udC1mYW1pbHk6ICdJdGltJywgY3Vyc2l2ZTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbi5zZWN0aW9uXzEge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5zZWN0aW9uXzEgPiBkaXYge1xcbiAgICBwYWRkaW5nOiAwLjJyZW0gMS4ycmVtO1xcbn1cXG5cXG4uc2VjdGlvbl8yIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uc2VjdGlvbl8zIHtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJdGltJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG4udGl0bGUtdGV4dCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVhbnRpY28nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmltZyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbn1cXG5cXG5hLCBhOmxpbmssIGE6dmlzaXRlZCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gICAgY29sb3I6cmdiKDI0OCwgMTY1LCAyNTUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuYTphY3RpdmUge1xcbiAgICBjb2xvcjphcXVhbWFyaW5lO1xcbn1cXG5cXG4vKnVuZGVybmVhdGggaXMgcGFnZTJMb2FkIENTUyovXFxuXFxuLmhlYWRsaW5lcl9ib3hfMiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSXRpbScsIGN1cnNpdmU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgb3BhY2l0eTogMC44NTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG5oMltjbGFzc149XFxcInRpdGxlXFxcIl0ge1xcbiAgICBmb250LWZhbWlseTogJ1F1YW50aWNvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYmlnZ2VzdF9ib3hfMiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9iYWNrZ3JvdW5kLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2xhbXAoMjAlLCAyNSUsIDI4JSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogY2xhbXAoNCUsIDUlLCA3JSkgY2xhbXAoMjUlLCAzOSUsIDFmcikgY2xhbXAoMjUlLCAzOSUsIDFmcikgY2xhbXAoMjUlLCAzOSUsIDFmcik7XFxuICAgIG1hcmdpbi1ib3R0b206IC01dmg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1dmg7XFxufVxcblxcbi5ib3hfYXBwcywgLmJveF9lbnRyZWVzLCAuYm94X2Rlc3NlcnRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNTAlKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNTAlKTtcXG59XFxuXFxuLmJveF9hcHBzIGltZywgLmJveF9lbnRyZWVzIGltZywgLmJveF9kZXNzZXJ0cyBpbWcge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgd2lkdGg6IDk4LjglO1xcbiAgICBoZWlnaHQ6IDIxcmVtO1xcbn1cXG5cXG5kaXZbaWRePVxcXCJlbnRfXFxcIl0sIGRpdltpZF49XFxcImFwcF9cXFwiXSwgZGl2W2lkXj1cXFwiZGVzc19cXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDAuMnJlbSBhdXRvO1xcbiAgICBtaW4td2lkdGg6IDU1JTtcXG4gICAgbWF4LXdpZHRoOiA2NSU7XFxufVxcblxcbmRpdltpZF49XFxcImFwcGJveF9cXFwiXSwgZGl2W2lkXj1cXFwiZW50Ym94X1xcXCJdLCBkaXZbaWRePVxcXCJkZXNzYm94X1xcXCJdIHtcXG4gICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuZGl2W2lkXj1cXFwiYXBwYm94X1xcXCJdOmhvdmVyLCBkaXZbaWRePVxcXCJlbnRib3hfXFxcIl06aG92ZXIsIGRpdltpZF49XFxcImRlc3Nib3hfXFxcIl06aG92ZXIge1xcbiAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDIzMCwgMCwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUNvbG9yO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXG59XFxuXFxuZGl2W2NsYXNzKj1cXFwiX3AyXFxcIl0gPiBkaXYgeyAgICBcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuZGl2W2NsYXNzKj1cXFwiX3AyXFxcIl0ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2VjdGlvbl8xX3AyIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uc2VjdGlvbl8yX3AyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uc2VjdGlvbl8zX3AyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxufVxcblxcbmRpdltpZF49XFxcImltZ3dyYXBwZXJfXFxcIl0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiAgXFxuZGl2W2lkXj1cXFwib3ZlcmxheWFwcF93cmFwX1xcXCJdLCBkaXZbaWRePVxcXCJvdmVybGF5ZW50X3dyYXBfXFxcIl0sIGRpdltpZF49XFxcIm92ZXJsYXlkZXNzX3dyYXBfXFxcIl0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgzNiwgNjIsIDIwNiwgMC42KTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMsIHZpc2liaWxpdHkgLjJzO1xcbn1cXG4gIFxcbmRpdltpZF49XFxcImltZ3dyYXBwZXJfXFxcIl06aG92ZXIgZGl2W2lkXj1cXFwib3ZlcmxheWFwcF93cmFwX1xcXCJdLFxcbmRpdltpZF49XFxcImltZ3dyYXBwZXJfXFxcIl06aG92ZXIgZGl2W2lkXj1cXFwib3ZlcmxheWVudF93cmFwX1xcXCJdLFxcbmRpdltpZF49XFxcImltZ3dyYXBwZXJfXFxcIl06aG92ZXIgZGl2W2lkXj1cXFwib3ZlcmxheWRlc3Nfd3JhcF9cXFwiXSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbiAgXFxuZGl2W2lkXj1cXFwib3ZlcmxheWFwcF9cXFwiXSwgZGl2W2lkXj1cXFwib3ZlcmxheWVudF9cXFwiXSwgZGl2W2lkXj1cXFwib3ZlcmxheWRlc3NfXFxcIl0ge1xcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxZW0pO1xcbn1cXG4gIFxcbmRpdltpZF49XFxcImltZ3dyYXBwZXJfXFxcIl06aG92ZXIgZGl2W2lkXj1cXFwib3ZlcmxheWFwcF9cXFwiXSxcXG5kaXZbaWRePVxcXCJpbWd3cmFwcGVyX1xcXCJdOmhvdmVyIGRpdltpZF49XFxcIm92ZXJsYXllbnRfXFxcIl0sXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXTpob3ZlciBkaXZbaWRePVxcXCJvdmVybGF5ZGVzc19cXFwiXSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuXFxuZGl2I2xvbmdmb290ZXIge1xcbiAgICBmb250LXNpemU6IGNhbGMoNnB4ICsgLjV2dyk7XFxuICAgIG1hcmdpbjogMC4ycmVtLCAwLjRyZW07XFxufVxcblxcbi8qdW5kZXJuZWF0aCBpcyBwYWdlM0xvYWQgQ1NTKi9cXG5cXG4uYmlnZ2VzdF9ib3hfMyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9iYWNrZ3JvdW5kLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTV2aCByZXBlYXQoMywgMWZyKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTV2aDtcXG4gICAgcGFkZGluZy1ib3R0b206IDV2aDtcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwiY29udGFjdHNlcFxcXCJdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oZWFkbGluZXJfYm94XzMge1xcbiAgICBmb250LWZhbWlseTogJ0l0aW0nLCBjdXJzaXZlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnNlY3Rpb25fMV9wMyB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLnNlY3Rpb25fMl9wMyB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLnNlY3Rpb25fM19wMyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJsZWZ0b2ZcXFwiXSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IGxlZnQ7XFxufVxcblxcbmRpdltjbGFzc149XFxcImJveGNvbnRhY3RfXFxcIl0ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmgyW2NsYXNzXj1cXFwidGl0bGVfcFxcXCJdIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwIDAuMnJlbTtcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwiZGV0YWlsc1BcXFwiXSB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbjogMCAwLjJyZW07XFxufVxcblxcbi8qUGhvbmUgQ1NTKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIGRpdi50b3BoZWFkZXIge1xcbiAgICAgICAgaGVpZ2h0OiAxMnZoO1xcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xcbiAgICB9XFxuICAgIC5oZWFkbGluZXJfYm94LCAuaGVhZGxpbmVyX2JveF8yIHtcXG4gICAgICAgIG1hcmdpbjogMXJlbSAycmVtIDAgMnJlbTtcXG4gICAgfVxcbiAgICAuYmlnZ2VzdF9ib3gsIC5iaWdnZXN0X2JveF8yIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG4gICAgfVxcbiAgICAuc2VjdGlvbl8xLCAuc2VjdGlvbl8yLCAuc2VjdGlvbl8zLCBcXG4gICAgZGl2W2NsYXNzXj1cXFwiZ3JpZF9zZXBfXFxcIl0ge1xcbiAgICAgICAgbWluLXdpZHRoOiA2MCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgZGl2W2lkXj1cXFwiYXBwYm94X1xcXCJdLCBkaXZbaWRePVxcXCJlbnRib3hfXFxcIl0sIGRpdltpZF49XFxcImRlc3Nib3hfXFxcIl0ge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuICAgIGRpdltjbGFzc149XFxcImdyaWRfc2VwX1xcXCJdIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIGRpdi5zZWN0aW9uXzFfcDIsIGRpdi5zZWN0aW9uXzJfcDIsIGRpdi5zZWN0aW9uXzNfcDIge1xcbiAgICAgICAgd2lkdGg6IDk1JTtcXG4gICAgfVxcbiAgICBoMltjbGFzc149XFxcInRpdGxlXFxcIl0ge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICB9XFxuICAgIGRpdltpZF49XFxcImFwcGJveF9cXFwiXTpob3ZlciwgZGl2W2lkXj1cXFwiZW50Ym94X1xcXCJdOmhvdmVyLCBkaXZbaWRePVxcXCJkZXNzYm94X1xcXCJdOmhvdmVyIHtcXG4gICAgICAgIHotaW5kZXg6IDI7XFxuICAgIH1cXG4gICAgZGl2W2lkXj1cXFwiZW50X1xcXCJdLCBkaXZbaWRePVxcXCJhcHBfXFxcIl0sIGRpdltpZF49XFxcImRlc3NfXFxcIl0ge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcbiAgICAgICAgbWluLWhlaWdodDogMTElO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIC5ib3hfYXBwcyBpbWcsIC5ib3hfZW50cmVlcyBpbWcsIC5ib3hfZGVzc2VydHMgaW1nIHtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgd2lkdGg6IDk4LjglO1xcbiAgICAgICAgaGVpZ2h0OiAxMnJlbTtcXG4gICAgfVxcbiAgICAuYm94X2FwcHMsIC5ib3hfZW50cmVlcywgLmJveF9kZXNzZXJ0cyB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ2FwOiAwLjRyZW07XFxuICAgICAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA1MCUpO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNTAlKTtcXG4gICAgfVxcbiAgICBkaXZbaWRePVxcXCJvdmVybGF5YXBwX3dyYXBfXFxcIl0sIGRpdltpZF49XFxcIm92ZXJsYXllbnRfd3JhcF9cXFwiXSwgZGl2W2lkXj1cXFwib3ZlcmxheWRlc3Nfd3JhcF9cXFwiXSB7XFxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgfVxcbiAgICBkaXZbY2xhc3NePVxcXCJsZWZ0b2ZcXFwiXSA+IGgyIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuICAgIC5ib3R0b21fZm9vdCB7XFxuICAgICAgICBmb250LXNpemU6IGNhbGMoNi40cHggKyAuNXZ3KTtcXG4gICAgfVxcbiAgICAjaG92ZXJUZXh0IHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgI2NsaWNrVGV4dCB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgICAgICBmb250LXNpemU6IGNhbGMoMTFweCArIC41dncpO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgcGFnZUxvYWQgZnJvbSAnLi9wYWdlbG9hZC5qcyc7XG5pbXBvcnQgcGFnZTJMb2FkIGZyb20gJy4vcGFnZTJsb2FkLmpzJztcbmltcG9ydCBwYWdlM0xvYWQgZnJvbSAnLi9wYWdlM2xvYWQuanMnO1xuaW1wb3J0IHRhYlN3aXRjaENvZGUgZnJvbSAnLi90YWJzd2l0Y2guanMnO1xuICBcbnBhZ2VMb2FkKCk7XG5cbmlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgICB0YWJTd2l0Y2hDb2RlKCk7XG59IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRhYlN3aXRjaENvZGUoKTtcbiAgICB9KTtcbn1cblxuXG4vKiBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvcF9ob21lXCIpWzBdO1xuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInBhZ2UxIHdvcmtzXCIpO1xuICAgIGNvbnN0IGFsbFRoZUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcbiAgICBhbGxUaGVDb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgcGFnZUxvYWQoKTtcbn0pXG5cbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9wX21lbnVcIilbMF07XG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicGFnZTIgd29ya3NcIik7XG4gICAgY29uc3QgYWxsVGhlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuICAgIGFsbFRoZUNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICBwYWdlMkxvYWQoKTtcbn0pXG5cbmNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9wX2NvbnRhY3RcIilbMF07XG5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicGFnZTMgd29ya3NcIik7XG4gICAgY29uc3QgYWxsVGhlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuICAgIGFsbFRoZUNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICBwYWdlM0xvYWQoKTtcbn0pICovIiwiaW1wb3J0IEljb24gZnJvbSAnLi9jb29rLmpwZyc7XG5pbXBvcnQgQnJ1c3MgZnJvbSAnLi9icnVzc2Vsc3Byb3V0cy5qcGcnO1xuaW1wb3J0IEJ1cmdlciBmcm9tICcuL2J1cmdlci5qcGcnO1xuaW1wb3J0IENpbm4gZnJvbSAnLi9jaW5uYW1vbnJvbGwuanBnJztcbmltcG9ydCBDb29raWUgZnJvbSAnLi9jb29raWUuanBnJztcbmltcG9ydCBFZ2dyb2xsIGZyb20gJy4vZWdncm9sbHMuanBnJztcbmltcG9ydCBGcmVuY2ggZnJvbSAnLi9mcmVuY2h0b2FzdC5qcGcnO1xuaW1wb3J0IEljZWNyZWFtIGZyb20gJy4vaWNlY3JlYW0uanBnJztcbmltcG9ydCBQaG8gZnJvbSAnLi9waG8uanBnJztcbmltcG9ydCBQaXp6YSBmcm9tICcuL3BpenphLmpwZyc7XG5pbXBvcnQgUG9rZSBmcm9tICcuL3Bva2UuanBnJztcbmltcG9ydCBTb3VwIGZyb20gJy4vc291cC5qcGcnO1xuaW1wb3J0IFN0ZWFrIGZyb20gJy4vc3RlYWtza2V3ZXJzLmpwZyc7XG5pbXBvcnQgdGFiU3dpdGNoQ29kZSBmcm9tICcuL3RhYnN3aXRjaC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2UyTG9hZCgpIHtcblxuICAgIGNvbnN0IGNvb2tJY29uID0gbmV3IEltYWdlKCk7XG4gICAgY29va0ljb24uc3JjID0gSWNvbjtcbiAgICBjb25zdCBicnVzcyA9IG5ldyBJbWFnZSgpO1xuICAgIGJydXNzLnNyYyA9IEJydXNzO1xuICAgIGNvbnN0IGJ1cmcgPSBuZXcgSW1hZ2UoKTtcbiAgICBidXJnLnNyYyA9IEJ1cmdlcjtcbiAgICBjb25zdCBjaW5uID0gbmV3IEltYWdlKCk7XG4gICAgY2lubi5zcmMgPSBDaW5uO1xuICAgIGNvbnN0IGNvb2tpZSA9IG5ldyBJbWFnZSgpO1xuICAgIGNvb2tpZS5zcmMgPSBDb29raWU7XG4gICAgY29uc3QgZWdnID0gbmV3IEltYWdlKCk7XG4gICAgZWdnLnNyYyA9IEVnZ3JvbGw7XG4gICAgY29uc3QgZnJlbmNoID0gbmV3IEltYWdlKCk7XG4gICAgZnJlbmNoLnNyYyA9IEZyZW5jaDtcbiAgICBjb25zdCBpY2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpY2Uuc3JjID0gSWNlY3JlYW07XG4gICAgY29uc3QgcGhvID0gbmV3IEltYWdlKCk7XG4gICAgcGhvLnNyYyA9IFBobztcbiAgICBjb25zdCBwaXp6YSA9IG5ldyBJbWFnZSgpO1xuICAgIHBpenphLnNyYyA9IFBpenphO1xuICAgIGNvbnN0IHBva2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBwb2tlLnNyYyA9IFBva2U7XG4gICAgY29uc3Qgc291cCA9IG5ldyBJbWFnZSgpO1xuICAgIHNvdXAuc3JjID0gU291cDtcbiAgICBjb25zdCBzdGVhayA9IG5ldyBJbWFnZSgpO1xuICAgIHN0ZWFrLnNyYyA9IFN0ZWFrO1xuXG4gICAgY29uc3QgaGVhZGxpbmVyYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkbGluZXJib3guY2xhc3NOYW1lID0gXCJoZWFkbGluZXJfYm94XzJcIjtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSBcInRvcGhlYWRlclwiO1xuICAgIGNvbnN0IHVuZGVyaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB1bmRlcmhlYWRlci5jbGFzc05hbWUgPSBcInVuZGVyX3RvcGhlYWRlclwiO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYmlnZ2VzdF9ib3hfMlwiO1xuICAgIGNvbnN0IHNlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMS5jbGFzc05hbWUgPSBcInNlY3Rpb25fMV9wMlwiO1xuICAgIGNvbnN0IHNlY3Rpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMi5jbGFzc05hbWUgPSBcInNlY3Rpb25fMl9wMlwiO1xuICAgIGNvbnN0IHNlY3Rpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMy5jbGFzc05hbWUgPSBcInNlY3Rpb25fM19wMlwiO1xuXG4gICAgY29uc3QgaGVhZGVyX21lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcl9tZW51LmNsYXNzTmFtZSA9IFwidG9wX21lbnVcIjtcbiAgICBjb25zdCBtZW51X3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVfdGV4dC5jbGFzc05hbWUgPSBcImNvcm5lcl90ZXh0bWVudVwiO1xuICAgIG1lbnVfdGV4dC5pbm5lckhUTUwgPSBcIk1lbnVcIjtcblxuICAgIGNvbnN0IGhlYWRlcl9ob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfaG9tZS5jbGFzc05hbWUgPSBcInRvcF9ob21lXCI7XG4gICAgY29uc3QgaG9tZV90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lX3RleHQuY2xhc3NOYW1lID0gXCJjb3JuZXJfdGV4dGhvbWVcIjtcbiAgICBob21lX3RleHQuaW5uZXJIVE1MID0gXCJIb21lXCI7XG5cbiAgICBjb25zdCBmb290ZXJfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXJfYm94LmNsYXNzTmFtZSA9IFwiYm90dG9tX2Zvb3RcIjtcblxuICAgIGNvbnN0IGZvb3RlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3RlcjEuaWQgPSBcImxvbmdmb290ZXJcIjtcbiAgICBmb290ZXIxLmlubmVySFRNTCA9ICdQaG90b3MgYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0ByYXBoYWVsbG92YXNraT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5SYXBoYWVsIExvdmFza2k8L2E+LCZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AYW1pcl92X2FsaT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5hbWlyYWxpIG1pcmhhc2hlbWlhbjwvYT4sJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BvdGplcD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5Zb3NlcCBTdWdpYXJ0bzwvYT4sJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BwaG90b3Bob3Rvc3RvY2s/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+S2lyaWxsIFRvbmtpa2g8L2E+LCZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AcGhvdG90YXN0eWZvb2Q/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+Rm9vZCBQaG90b2dyYXBoZXI8L2E+LCZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9qYS9AYXVyZWxfX2xlbnM/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+QXVyw6lsaWVuIExlbWFzc29uLVRow6lvYmFsZDwvYT4sJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0Brb3JpZT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5Lb3JpZSBDdWxsPC9hPiwmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQG1vbmlxYT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5Nb25pa2EgR3JhYmtvd3NrYTwvYT4sJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BtaXJhY2xldHdlbnR5b25lP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPkpvc2VwaCBHb256YWxlejwvYT4sJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BreW5kYWxscmFtaXJlej91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5LeW5kYWxsIFJhbWlyZXo8L2E+LCZuYnNwOyYmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQHNlYmFzdGlhbmNvbWFuP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlNlYmFzdGlhbiBDb21hbiBQaG90b2dyYXBoeTwvYT4gb24gVW5zcGxhc2gnO1xuXG5cbiAgICBjb25zdCBoZWFkZXJfY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyX2NvbnRhY3QuY2xhc3NOYW1lID0gXCJ0b3BfY29udGFjdFwiO1xuICAgIGNvbnN0IGNvbnRhY3RfdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdF90ZXh0LmNsYXNzTmFtZSA9IFwiY29ybmVyX3RleHRjb250YWN0XCI7XG4gICAgY29udGFjdF90ZXh0LmlubmVySFRNTCA9IFwiQ29udGFjdFwiO1xuXG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGxpbmUuY2xhc3NOYW1lID0gXCJoZWFkbGluZXJcIlxuICAgIGhlYWRsaW5lLmlubmVySFRNTCA9IFwiTWVudVwiO1xuICAgIGNvbnN0IG1lbnVBbmRUaXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVBbmRUaXBCb3guaWQgPSBcIm1lbnVfdGlwX2JveFwiO1xuICAgIGNvbnN0IGhvdmVyVGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob3ZlclRpcC5pZCA9IFwiaG92ZXJUZXh0XCI7XG4gICAgaG92ZXJUaXAuaW5uZXJIVE1MID0gXCJGb3IgbW9yZSBpbmZvcm1hdGlvbiwgPGJyPnBsZWFzZSBob3ZlciBvdmVyIHRoZSBpdGVtIVwiXG4gICAgY29uc3QgY2xpY2tUaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNsaWNrVGlwLmlkID0gXCJjbGlja1RleHRcIjtcbiAgICBjbGlja1RpcC5pbm5lckhUTUwgPSBcIkZvciBtb3JlIGluZm9ybWF0aW9uLCA8YnI+cGxlYXNlIGNsaWNrIG9uIHRoZSBpdGVtIVwiXG5cbiAgICBjb25zdCBncmlkX2FwcF9zZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdyaWRfYXBwX3NlcC5jbGFzc05hbWUgPSBcImdyaWRfc2VwX2FwcFwiO1xuICAgIGNvbnN0IGdyaWRfZW50X3NlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3JpZF9lbnRfc2VwLmNsYXNzTmFtZSA9IFwiZ3JpZF9zZXBfZW50XCI7XG4gICAgY29uc3QgZ3JpZF9kZXNzX3NlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3JpZF9kZXNzX3NlcC5jbGFzc05hbWUgPSBcImdyaWRfc2VwX2Rlc3NcIjtcblxuICAgIGNvbnN0IGFwcF9ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFwcF9ib3guY2xhc3NOYW1lID0gXCJib3hfYXBwc1wiO1xuICAgIGNvbnN0IGVudHJlZXNfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlbnRyZWVzX2JveC5jbGFzc05hbWUgPSBcImJveF9lbnRyZWVzXCI7XG4gICAgY29uc3QgZGVzc2VydHNfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNzZXJ0c19ib3guY2xhc3NOYW1lID0gXCJib3hfZGVzc2VydHNcIjtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgIGxldCBib3hlc19zMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveGVzX3MxLmlkID0gXCJhcHBib3hfXCIgKyBpO1xuICAgICAgICBsZXQgYXBwX2luZGl2aWR1YWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhcHBfaW5kaXZpZHVhbC5pZCA9IFwiYXBwX1wiICsgaTtcbiAgICAgICAgbGV0IG92ZXJsYXlfYXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgb3ZlcmxheV9hcHAuaWQgPSBcIm92ZXJsYXlhcHBfXCIgKyBpO1xuICAgICAgICBsZXQgb3ZlcmxheV9hcHBfd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG92ZXJsYXlfYXBwX3dyYXAuaWQgPSBcIm92ZXJsYXlhcHBfd3JhcF9cIiArIGk7XG4gICAgICAgIGxldCBpbWdfd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGltZ193cmFwLmlkID0gXCJpbWd3cmFwcGVyX1wiICsgaTtcblxuICAgICAgICBib3hlc19zMS5hcHBlbmRDaGlsZChhcHBfaW5kaXZpZHVhbCk7XG4gICAgICAgIGltZ193cmFwLmFwcGVuZENoaWxkKG92ZXJsYXlfYXBwX3dyYXApO1xuICAgICAgICBvdmVybGF5X2FwcF93cmFwLmFwcGVuZENoaWxkKG92ZXJsYXlfYXBwKTtcbiAgICAgICAgYm94ZXNfczEuYXBwZW5kQ2hpbGQoaW1nX3dyYXApO1xuICAgICAgICBhcHBfYm94LmFwcGVuZENoaWxkKGJveGVzX3MxKTtcblxuICAgICAgICAvKiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGltZ3dyYXBwZXJfMS5hcHBlbmRDaGlsZChicnVzcyk7XG4gICAgICAgICAgICBpbWd3cmFwcGVyXzIuYXBwZW5kQ2hpbGQoc291cCk7XG4gICAgICAgICAgICBpbWd3cmFwcGVyXzMuYXBwZW5kQ2hpbGQoc3RlYWspO1xuICAgICAgICAgICAgaW1nd3JhcHBlcl80LmFwcGVuZENoaWxkKGVnZyk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcF8xXCIpLmlubmVySFRNTCA9IFwiQnJ1c3NlbCBTcHJvdXRzXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcF8yXCIpLmlubmVySFRNTCA9IFwiRGFpbHkgU291cFwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBfM1wiKS5pbm5lckhUTUwgPSBcIlN0ZWFrIFNrZXdlcnNcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXzRcIikuaW5uZXJIVE1MID0gXCJFZ2cgUm9sbHNcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWFwcF8xXCIpLmlubmVySFRNTCA9IFwiQnJ1c3NlbCBzcHJvdXRzIGFyZSBoZWFsdGh5IGZvciB5b3UsIHJpZ2h0PyBXcm9uZy4gT3VycyBhcmUgZnJpZWQgd2l0aCB0aGUgaGlnaGVzdCB0cmFucy1mYXQgcGVyY2VudCBvaWwgaW4gdGhlIHVuaXZlcnNlLiBBbmQgdGhhdCdzIHdoeSB0aGV5J3JlIHNvIGRhcm4gZGVsaWNpb3VzLlwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5YXBwXzJcIikuaW5uZXJIVE1MID0gXCJUaGUgZGFpbHkgc291cCBpcyBzb21ldGhpbmcgb2YgYSBteXN0ZXJ5LCBtYWRlIG9mIHJhcmUgcGxhbnRzLCBhbmltYWxzLCBhbmQgdW5pcXVlIGFsaWVuIGxpZmUgZm9ybXMuXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlhcHBfM1wiKS5pbm5lckhUTUwgPSBcIk91ciBza2V3ZXJzIHdpbGwgaGF2ZSB5b3VyIG1vdXRoIHdhdGVyaW5nIGJlZm9yZSB5b3UgZXZlbiBzZWUgdGhlbSEgVHJ5IG9uZSBvbiBmb3Igc2l6ZS4gT3IgdHdvLiBPciBmaXZlLiBXZSdyZSBub3QganVkZ2luZy5cIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWFwcF80XCIpLmlubmVySFRNTCA9IFwiTWFkZSBpbiB0aGUgc3R5bGUgb2YgbXkgbW90aGVybGFuZCwgdGhlc2UgVGFpd2FuZXNlIGVnZyByb2xscyB3aWxsIGhhdmUgd29uZGVyaW5nIGlmIHlvdSBzaG91bGQganVzdCBoYXZlIG1vcmUgZWdnIHJvbGxzIGFzIHlvdXIgZW50aXJlIG1lYWwuXCI7XG4gICAgICAgICAgfSk7ICovXG4gICAgfVxuXG4gICAgZm9yIChsZXQgeCA9IDE7IHggPCA1OyB4KyspIHtcbiAgICAgICAgbGV0IGJveGVzX3MyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94ZXNfczIuaWQgPSBcImVudGJveF9cIiArIHg7XG4gICAgICAgIGxldCBlbnRfaW5kaXZpZHVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGVudF9pbmRpdmlkdWFsLmlkID0gXCJlbnRfXCIgKyB4O1xuICAgICAgICBsZXQgb3ZlcmxheV9lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvdmVybGF5X2VudC5pZCA9IFwib3ZlcmxheWVudF9cIiArIHg7XG4gICAgICAgIGxldCBvdmVybGF5X2VudF93cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgb3ZlcmxheV9lbnRfd3JhcC5pZCA9IFwib3ZlcmxheWVudF93cmFwX1wiICsgeDtcbiAgICAgICAgbGV0IGltZ193cmFwX2VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGltZ193cmFwX2VudC5pZCA9IFwiaW1nd3JhcHBlcl9lbnRfXCIgKyB4O1xuXG5cbiAgICAgICAgYm94ZXNfczIuYXBwZW5kQ2hpbGQoZW50X2luZGl2aWR1YWwpO1xuICAgICAgICBpbWdfd3JhcF9lbnQuYXBwZW5kQ2hpbGQob3ZlcmxheV9lbnRfd3JhcCk7XG4gICAgICAgIG92ZXJsYXlfZW50X3dyYXAuYXBwZW5kQ2hpbGQob3ZlcmxheV9lbnQpO1xuICAgICAgICBib3hlc19zMi5hcHBlbmRDaGlsZChpbWdfd3JhcF9lbnQpO1xuICAgICAgICBlbnRyZWVzX2JveC5hcHBlbmRDaGlsZChib3hlc19zMik7XG5cbiAgICAgICAgLyogZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBpbWd3cmFwcGVyX2VudF8xLmFwcGVuZENoaWxkKGJ1cmcpO1xuICAgICAgICAgICAgaW1nd3JhcHBlcl9lbnRfMi5hcHBlbmRDaGlsZChwaG8pO1xuICAgICAgICAgICAgaW1nd3JhcHBlcl9lbnRfMy5hcHBlbmRDaGlsZChwb2tlKTtcbiAgICAgICAgICAgIGltZ3dyYXBwZXJfZW50XzQuYXBwZW5kQ2hpbGQocGl6emEpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbnRfMVwiKS5pbm5lckhUTUwgPSBcIkJhY29uIEJ1cmdlclwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbnRfMlwiKS5pbm5lckhUTUwgPSBcIlBob1wiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbnRfM1wiKS5pbm5lckhUTUwgPSBcIlBva2UgQm93bFwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbnRfNFwiKS5pbm5lckhUTUwgPSBcIlBpenphXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXllbnRfMVwiKS5pbm5lckhUTUwgPSBcIkV2ZXIgaGVhcmQgb2Ygc3BhY2UgcGlncz8gV2VsbCwgbm93IHlvdSBoYXZlLiBPdXIgYnVyZ2VycyBhcmUgbWFkZSB3aXRoIGludGVyZ2FsYWN0aWMgcGlncyBhbmQgY293cyBmb3IgdGhlIG1vc3QgZGVsZWN0YWJsZSByZXN1bHRzLiBUaGUganVpY2luZXNzIGhlcmUgd291bGQgcHV0IEJpZ2dpZSBTbWFsbHMgdG8gc2hhbWUuXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXllbnRfMlwiKS5pbm5lckhUTUwgPSBcIlRyeSB0aGlzIHBpcGluJyBob3QgYm93bCBvZiBwaG8gaWYgeW91IGZlZWwgbGlrZSB5b3UncmUgZ2V0dGluZyB0aGUgc3BhY2UgY2hpbGxzLiBJdCBjYW4gZ2V0IHF1aXRlIGNvbGQgb3V0IHRoZXJlIHNvIG1ha2Ugc3VyZSB5b3Ugd2FybSB1cCFcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWVudF8zXCIpLmlubmVySFRNTCA9IFwiRnVsbCBvZiBvbWVnYSBmYXR0eSBhY2lkcywgdGhpcyBib3dsIG9mIHBva2Ugd2lsbCByZWp1dmVuYXRlIHlvdSBpbiB3YXlzIHRoYXQgY2FubmVkIHR1bmEganVzdCBjYW4ndC4gWW91J2xsIGZlZWwgbGlrZSB5b3UncmUgb24gdGhlIGJlYWNoZXMgb2YgSGF3YWlpIVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5ZW50XzRcIikuaW5uZXJIVE1MID0gXCJZb3Uga25vdyB3aGF0IHRpbWUgaXQgaXMuIEl0J3MgcGl6emEgdGltZS4gRGlnIGluISA8YnI+JiMxMjc4MjkgJiMxMjc4MjkgJiMxMjc4MjkgJiMxMjc4MjkgJiMxMjc4MjlcIjtcbiAgICAgICAgICB9KTsgKi9cbiAgICB9XG5cbiAgICBmb3IgKGxldCB5ID0gMTsgeSA8IDU7IHkrKykge1xuICAgICAgICBsZXQgYm94ZXNfczMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3hlc19zMy5pZCA9IFwiZGVzc2JveF9cIiArIHk7XG4gICAgICAgIGxldCBkZXNzX2luZGl2aWR1YWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkZXNzX2luZGl2aWR1YWwuaWQgPSBcImRlc3NfXCIgKyB5O1xuICAgICAgICBsZXQgb3ZlcmxheV9kZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgb3ZlcmxheV9kZXNzLmlkID0gXCJvdmVybGF5ZGVzc19cIiArIHk7XG4gICAgICAgIGxldCBvdmVybGF5X2Rlc3Nfd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG92ZXJsYXlfZGVzc193cmFwLmlkID0gXCJvdmVybGF5ZGVzc193cmFwX1wiICsgeTtcbiAgICAgICAgbGV0IGltZ193cmFwX2Rlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbWdfd3JhcF9kZXNzLmlkID0gXCJpbWd3cmFwcGVyX2Rlc3NfXCIgKyB5O1xuXG4gICAgICAgIGJveGVzX3MzLmFwcGVuZENoaWxkKGRlc3NfaW5kaXZpZHVhbCk7XG4gICAgICAgIGltZ193cmFwX2Rlc3MuYXBwZW5kQ2hpbGQob3ZlcmxheV9kZXNzX3dyYXApO1xuICAgICAgICBvdmVybGF5X2Rlc3Nfd3JhcC5hcHBlbmRDaGlsZChvdmVybGF5X2Rlc3MpO1xuICAgICAgICBib3hlc19zMy5hcHBlbmRDaGlsZChpbWdfd3JhcF9kZXNzKTtcbiAgICAgICAgZGVzc2VydHNfYm94LmFwcGVuZENoaWxkKGJveGVzX3MzKTtcblxuICAgICAgICAvKiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGltZ3dyYXBwZXJfZGVzc18xLmFwcGVuZENoaWxkKGZyZW5jaCk7XG4gICAgICAgICAgICBpbWd3cmFwcGVyX2Rlc3NfMi5hcHBlbmRDaGlsZChjb29raWUpO1xuICAgICAgICAgICAgaW1nd3JhcHBlcl9kZXNzXzMuYXBwZW5kQ2hpbGQoaWNlKTtcbiAgICAgICAgICAgIGltZ3dyYXBwZXJfZGVzc180LmFwcGVuZENoaWxkKGNpbm4pO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNzXzFcIikuaW5uZXJIVE1MID0gXCJGcmVuY2ggVG9hc3RcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzc18yXCIpLmlubmVySFRNTCA9IFwiQ29va2llc1wiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNzXzNcIikuaW5uZXJIVE1MID0gXCJJY2UgQ3JlYW1cIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzc180XCIpLmlubmVySFRNTCA9IFwiQ2lubmFtb24gUm9sbFwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5ZGVzc18xXCIpLmlubmVySFRNTCA9IFwiUGVyaGFwcyB0aGUgZ3JlYXRlc3QgYnJlYWtmYXN0IGNyZWF0aW9uIGV2ZXIuIFdpdGgganVzdCB0aGUgcmlnaHQgYW1vdW50IG9mIGNydW5jaCwgc29mdG5lc3MsIGFuZCBzd2VldG5lc3MsIG91ciBmcmVuY2ggdG9hc3QgaXMgdGhlIHBlcmZlY3Qgd2F5IHRvIHRvcCBvZmYgeW91ciBtZWFsLlwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5ZGVzc18yXCIpLmlubmVySFRNTCA9IFwiSWYgeW91IGRvbid0IGxpa2UgYSBnb29kIGNob2NvbGF0ZSBjaGlwIGNvb2tpZSwgbGV0IG91cnMgY2hhbmdlIHlvdXIgbWluZC4gVGhlIHJpY2ggZmxhdm9yIGFuZCBnb29leW5lc3MgaXMgc29tZXRoaW5nIHlvdSBoYXZlIHRvIHRyeSwgYXQgbGVhc3Qgb25jZSFcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWRlc3NfM1wiKS5pbm5lckhUTUwgPSBcIlRoZXJlJ3Mgc29tZXRoaW5nIGFib3V0IGljZSBjcmVhbSBzY29vcHMgb24gYSB3YWZmbGUgY29uZS4gU29tZXRoaW5nIGFib3V0IG91cnMgaXMganVzdCBzbyBnb29kLiBJdCdzIG9uIHRoZSB0aXAgb2Ygb3VyIHRvbmd1ZXMuLi5cIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWRlc3NfNFwiKS5pbm5lckhUTUwgPSBcIkEgZ29vZCBvbGUgY2lubmFtb24gcm9sbCB3aWxsIGdldCB5b3UgZmFyIGluIGxpZmUuIFRoaXMgd2lsbCB3YXJtIHRoZSBjb2NrbGVzIG9mIHlvdXIgaGVhcnQuIE9yIGF0IHRoZSB2ZXJ5IGxlYXN0LCB5b3VyIHN0b21hY2guXCJcbiAgICAgICAgICB9KTsgKi9cbiAgICB9XG5cbiAgICBjb25zdCBhcHBldGl6ZXJzX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGFwcGV0aXplcnNfdGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZV9hcHBzXCI7XG4gICAgYXBwZXRpemVyc190aXRsZS5pbm5lckhUTUwgPSBcIkFwcGV0aXplcnNcIjtcblxuICAgIGNvbnN0IGVudHJlZXNfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgZW50cmVlc190aXRsZS5jbGFzc05hbWUgPSBcInRpdGxlX2VudHJlZXNcIjtcbiAgICBlbnRyZWVzX3RpdGxlLmlubmVySFRNTCA9IFwiRW50cmVlc1wiO1xuXG4gICAgY29uc3QgZGVzc2VydHNfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgZGVzc2VydHNfdGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZV9kZXNzZXJ0c1wiO1xuICAgIGRlc3NlcnRzX3RpdGxlLmlubmVySFRNTCA9IFwiRGVzc2VydHNcIjtcblxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodW5kZXJoZWFkZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyX2JveCk7XG4gICAgZm9vdGVyX2JveC5hcHBlbmRDaGlsZChmb290ZXIxKTtcbiAgICBoZWFkZXJfaG9tZS5hcHBlbmRDaGlsZChob21lX3RleHQpO1xuICAgIGhlYWRlcl9tZW51LmFwcGVuZENoaWxkKG1lbnVfdGV4dCk7XG4gICAgaGVhZGVyX2NvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdF90ZXh0KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX2hvbWUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJfbWVudSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9jb250YWN0KTtcbiAgICB1bmRlcmhlYWRlci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkbGluZXJib3gpO1xuICAgIGhlYWRsaW5lcmJveC5hcHBlbmRDaGlsZChjb29rSWNvbik7XG4gICAgaGVhZGxpbmVyYm94LmFwcGVuZENoaWxkKG1lbnVBbmRUaXBCb3gpO1xuICAgIG1lbnVBbmRUaXBCb3guYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICAgIG1lbnVBbmRUaXBCb3guYXBwZW5kQ2hpbGQoaG92ZXJUaXApO1xuICAgIG1lbnVBbmRUaXBCb3guYXBwZW5kQ2hpbGQoY2xpY2tUaXApO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRfYXBwX3NlcCk7XG4gICAgZ3JpZF9hcHBfc2VwLmFwcGVuZENoaWxkKHNlY3Rpb24xKTtcbiAgICBzZWN0aW9uMS5hcHBlbmRDaGlsZChhcHBldGl6ZXJzX3RpdGxlKTtcbiAgICBzZWN0aW9uMS5hcHBlbmRDaGlsZChhcHBfYm94KTtcbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZF9lbnRfc2VwKTtcbiAgICBncmlkX2VudF9zZXAuYXBwZW5kQ2hpbGQoc2VjdGlvbjIpO1xuICAgIHNlY3Rpb24yLmFwcGVuZENoaWxkKGVudHJlZXNfdGl0bGUpO1xuICAgIHNlY3Rpb24yLmFwcGVuZENoaWxkKGVudHJlZXNfYm94KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkX2Rlc3Nfc2VwKTtcbiAgICBncmlkX2Rlc3Nfc2VwLmFwcGVuZENoaWxkKHNlY3Rpb24zKTtcbiAgICBzZWN0aW9uMy5hcHBlbmRDaGlsZChkZXNzZXJ0c190aXRsZSk7XG4gICAgc2VjdGlvbjMuYXBwZW5kQ2hpbGQoZGVzc2VydHNfYm94KTtcblxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RvY3VtZW50IGlzIGFscmVhZHkgcmVhZHksIGp1c3QgZXhlY3V0ZSBjb2RlIGhlcmUnKTtcbiAgICAgICAgbXlXYWl0NERPTUNvZGUoKTtcbiAgICAgICAgdGFiU3dpdGNoQ29kZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZG9jdW1lbnQgd2FzIG5vdCByZWFkeSwgcGxhY2UgY29kZSBoZXJlJyk7XG4gICAgICAgICAgICBteVdhaXQ0RE9NQ29kZSgpO1xuICAgICAgICAgICAgdGFiU3dpdGNoQ29kZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gbXlXYWl0NERPTUNvZGUoKSB7XG4gICAgICAgIGltZ3dyYXBwZXJfMS5hcHBlbmRDaGlsZChicnVzcyk7XG4gICAgICAgIGltZ3dyYXBwZXJfMi5hcHBlbmRDaGlsZChzb3VwKTtcbiAgICAgICAgaW1nd3JhcHBlcl8zLmFwcGVuZENoaWxkKHN0ZWFrKTtcbiAgICAgICAgaW1nd3JhcHBlcl80LmFwcGVuZENoaWxkKGVnZyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXzFcIikuaW5uZXJIVE1MID0gXCJCcnVzc2VsIFNwcm91dHNcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBfMlwiKS5pbm5lckhUTUwgPSBcIkRhaWx5IFNvdXBcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBfM1wiKS5pbm5lckhUTUwgPSBcIlN0ZWFrIFNrZXdlcnNcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBfNFwiKS5pbm5lckhUTUwgPSBcIkVnZyBSb2xsc1wiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlhcHBfMVwiKS5pbm5lckhUTUwgPSBcIkJydXNzZWwgc3Byb3V0cyBhcmUgaGVhbHRoeSBmb3IgeW91LCByaWdodD8gV3JvbmcuIE91cnMgYXJlIGZyaWVkIHdpdGggdGhlIGhpZ2hlc3QgdHJhbnMtZmF0IHBlcmNlbnQgb2lsIGluIHRoZSB1bml2ZXJzZS4gQW5kIHRoYXQncyB3aHkgdGhleSdyZSBzbyBkYXJuIGRlbGljaW91cy5cIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5YXBwXzJcIikuaW5uZXJIVE1MID0gXCJUaGUgZGFpbHkgc291cCBpcyBzb21ldGhpbmcgb2YgYSBteXN0ZXJ5LCBtYWRlIG9mIHJhcmUgcGxhbnRzLCBhbmltYWxzLCBhbmQgdW5pcXVlIGFsaWVuIGxpZmUgZm9ybXMuXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWFwcF8zXCIpLmlubmVySFRNTCA9IFwiT3VyIHNrZXdlcnMgd2lsbCBoYXZlIHlvdXIgbW91dGggd2F0ZXJpbmcgYmVmb3JlIHlvdSBldmVuIHNlZSB0aGVtISBUcnkgb25lIG9uIGZvciBzaXplLiBPciB0d28uIE9yIGZpdmUuIFdlJ3JlIG5vdCBqdWRnaW5nLlwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlhcHBfNFwiKS5pbm5lckhUTUwgPSBcIk1hZGUgaW4gdGhlIHN0eWxlIG9mIG15IG1vdGhlcmxhbmQsIHRoZXNlIFRhaXdhbmVzZSBlZ2cgcm9sbHMgd2lsbCBoYXZlIHdvbmRlcmluZyBpZiB5b3Ugc2hvdWxkIGp1c3QgaGF2ZSBtb3JlIGVnZyByb2xscyBhcyB5b3VyIGVudGlyZSBtZWFsLlwiO1xuXG4gICAgICAgIGltZ3dyYXBwZXJfZW50XzEuYXBwZW5kQ2hpbGQoYnVyZyk7XG4gICAgICAgIGltZ3dyYXBwZXJfZW50XzIuYXBwZW5kQ2hpbGQocGhvKTtcbiAgICAgICAgaW1nd3JhcHBlcl9lbnRfMy5hcHBlbmRDaGlsZChwb2tlKTtcbiAgICAgICAgaW1nd3JhcHBlcl9lbnRfNC5hcHBlbmRDaGlsZChwaXp6YSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW50XzFcIikuaW5uZXJIVE1MID0gXCJCYWNvbiBCdXJnZXJcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbnRfMlwiKS5pbm5lckhUTUwgPSBcIlBob1wiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVudF8zXCIpLmlubmVySFRNTCA9IFwiUG9rZSBCb3dsXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW50XzRcIikuaW5uZXJIVE1MID0gXCJQaXp6YVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXllbnRfMVwiKS5pbm5lckhUTUwgPSBcIkV2ZXIgaGVhcmQgb2Ygc3BhY2UgcGlncz8gV2VsbCwgbm93IHlvdSBoYXZlLiBPdXIgYnVyZ2VycyBhcmUgbWFkZSB3aXRoIGludGVyZ2FsYWN0aWMgcGlncyBhbmQgY293cyBmb3IgdGhlIG1vc3QgZGVsZWN0YWJsZSByZXN1bHRzLiBUaGUganVpY2luZXNzIGhlcmUgd291bGQgcHV0IEJpZ2dpZSBTbWFsbHMgdG8gc2hhbWUuXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWVudF8yXCIpLmlubmVySFRNTCA9IFwiVHJ5IHRoaXMgcGlwaW4nIGhvdCBib3dsIG9mIHBobyBpZiB5b3UgZmVlbCBsaWtlIHlvdSdyZSBnZXR0aW5nIHRoZSBzcGFjZSBjaGlsbHMuIEl0IGNhbiBnZXQgcXVpdGUgY29sZCBvdXQgdGhlcmUgc28gbWFrZSBzdXJlIHlvdSB3YXJtIHVwIVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXllbnRfM1wiKS5pbm5lckhUTUwgPSBcIkZ1bGwgb2Ygb21lZ2EgZmF0dHkgYWNpZHMsIHRoaXMgYm93bCBvZiBwb2tlIHdpbGwgcmVqdXZlbmF0ZSB5b3UgaW4gd2F5cyB0aGF0IGNhbm5lZCB0dW5hIGp1c3QgY2FuJ3QuIFlvdSdsbCBmZWVsIGxpa2UgeW91J3JlIG9uIHRoZSBiZWFjaGVzIG9mIEhhd2FpaSFcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5ZW50XzRcIikuaW5uZXJIVE1MID0gXCJZb3Uga25vdyB3aGF0IHRpbWUgaXQgaXMuIEl0J3MgcGl6emEgdGltZS4gRGlnIGluISA8YnI+JiMxMjc4MjkgJiMxMjc4MjkgJiMxMjc4MjkgJiMxMjc4MjkgJiMxMjc4MjlcIjtcblxuICAgICAgICBpbWd3cmFwcGVyX2Rlc3NfMS5hcHBlbmRDaGlsZChmcmVuY2gpO1xuICAgICAgICBpbWd3cmFwcGVyX2Rlc3NfMi5hcHBlbmRDaGlsZChjb29raWUpO1xuICAgICAgICBpbWd3cmFwcGVyX2Rlc3NfMy5hcHBlbmRDaGlsZChpY2UpO1xuICAgICAgICBpbWd3cmFwcGVyX2Rlc3NfNC5hcHBlbmRDaGlsZChjaW5uKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNzXzFcIikuaW5uZXJIVE1MID0gXCJGcmVuY2ggVG9hc3RcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNzXzJcIikuaW5uZXJIVE1MID0gXCJDb29raWVzXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzc18zXCIpLmlubmVySFRNTCA9IFwiSWNlIENyZWFtXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzc180XCIpLmlubmVySFRNTCA9IFwiQ2lubmFtb24gUm9sbFwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlkZXNzXzFcIikuaW5uZXJIVE1MID0gXCJQZXJoYXBzIHRoZSBncmVhdGVzdCBicmVha2Zhc3QgY3JlYXRpb24gZXZlci4gV2l0aCBqdXN0IHRoZSByaWdodCBhbW91bnQgb2YgY3J1bmNoLCBzb2Z0bmVzcywgYW5kIHN3ZWV0bmVzcywgb3VyIGZyZW5jaCB0b2FzdCBpcyB0aGUgcGVyZmVjdCB3YXkgdG8gdG9wIG9mZiB5b3VyIG1lYWwuXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWRlc3NfMlwiKS5pbm5lckhUTUwgPSBcIklmIHlvdSBkb24ndCBsaWtlIGEgZ29vZCBjaG9jb2xhdGUgY2hpcCBjb29raWUsIGxldCBvdXJzIGNoYW5nZSB5b3VyIG1pbmQuIFRoZSByaWNoIGZsYXZvciBhbmQgZ29vZXluZXNzIGlzIHNvbWV0aGluZyB5b3UgaGF2ZSB0byB0cnksIGF0IGxlYXN0IG9uY2UhXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWRlc3NfM1wiKS5pbm5lckhUTUwgPSBcIlRoZXJlJ3Mgc29tZXRoaW5nIGFib3V0IGljZSBjcmVhbSBzY29vcHMgb24gYSB3YWZmbGUgY29uZS4gU29tZXRoaW5nIGFib3V0IG91cnMgaXMganVzdCBzbyBnb29kLiBJdCdzIG9uIHRoZSB0aXAgb2Ygb3VyIHRvbmd1ZXMuLi5cIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5ZGVzc180XCIpLmlubmVySFRNTCA9IFwiQSBnb29kIG9sZSBjaW5uYW1vbiByb2xsIHdpbGwgZ2V0IHlvdSBmYXIgaW4gbGlmZS4gVGhpcyB3aWxsIHdhcm0gdGhlIGNvY2tsZXMgb2YgeW91ciBoZWFydC4gT3IgYXQgdGhlIHZlcnkgbGVhc3QsIHlvdXIgc3RvbWFjaC5cIlxuICAgIH1cbn1cbiIsImltcG9ydCBDb29rMyBmcm9tICcuL2Nvb2tfcDMuanBnJztcbmltcG9ydCBIb3N0IGZyb20gJy4vaG9zdC5qcGcnO1xuaW1wb3J0IE1hbmFnZXIgZnJvbSAnLi9tYW5hZ2VyLmpwZyc7XG5pbXBvcnQgdGFiU3dpdGNoQ29kZSBmcm9tICcuL3RhYnN3aXRjaC5qcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZTNMb2FkKCkge1xuXG4gICAgY29uc3QgaGVhZGxpbmVyYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkbGluZXJib3guY2xhc3NOYW1lID0gXCJoZWFkbGluZXJfYm94XzNcIjtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSBcInRvcGhlYWRlclwiO1xuICAgIGNvbnN0IHVuZGVyaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB1bmRlcmhlYWRlci5jbGFzc05hbWUgPSBcInVuZGVyX3RvcGhlYWRlclwiO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYmlnZ2VzdF9ib3hfM1wiO1xuICAgIGNvbnN0IHNlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMS5jbGFzc05hbWUgPSBcInNlY3Rpb25fMV9wM1wiO1xuICAgIGNvbnN0IHNlY3Rpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMi5jbGFzc05hbWUgPSBcInNlY3Rpb25fMl9wM1wiO1xuICAgIGNvbnN0IHNlY3Rpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMy5jbGFzc05hbWUgPSBcInNlY3Rpb25fM19wM1wiO1xuXG4gICAgY29uc3QgaGVhZGVyX21lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcl9tZW51LmNsYXNzTmFtZSA9IFwidG9wX21lbnVcIjtcbiAgICBjb25zdCBtZW51X3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVfdGV4dC5jbGFzc05hbWUgPSBcImNvcm5lcl90ZXh0bWVudVwiO1xuICAgIG1lbnVfdGV4dC5pbm5lckhUTUwgPSBcIk1lbnVcIjtcblxuICAgIGNvbnN0IGhlYWRlcl9ob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfaG9tZS5jbGFzc05hbWUgPSBcInRvcF9ob21lXCI7XG4gICAgY29uc3QgaG9tZV90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lX3RleHQuY2xhc3NOYW1lID0gXCJjb3JuZXJfdGV4dGhvbWVcIjtcbiAgICBob21lX3RleHQuaW5uZXJIVE1MID0gXCJIb21lXCI7XG5cbiAgICBjb25zdCBmb290ZXJfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXJfYm94LmNsYXNzTmFtZSA9IFwiYm90dG9tX2Zvb3RcIjtcblxuICAgIGNvbnN0IGZvb3RlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3RlcjEuaW5uZXJIVE1MID0gJ1Bob3RvIGJ5Jm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0Brcmlzcm9sbGVyP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPktyaXN0b3BoZXIgUm9sbGVyPC9hPiZuYnNwO29uJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL2ltYWdlcy9uYXR1cmUvZ2FsYXh5P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPic7XG5cblxuICAgIGNvbnN0IGZvb3RlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3RlcjIuaW5uZXJIVE1MID0gJ0ltYWdlIGJ5Jm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL2N1dGUtcGFuZGEtd3JpdGluZy1ib29rLXdpdGgtcGVuY2lsLWNhcnRvb24taWNvbi1pbGx1c3RyYXRpb25fMTIxNTgzMzEuaHRtI3F1ZXJ5PWNhdGFseXN0c3R1ZmYlMjB3cml0ZSZwb3NpdGlvbj0wJmZyb21fdmlldz1zZWFyY2gmdHJhY2s9c3BoXCI+Y2F0YWx5c3RzdHVmZjwvYT4mbmJzcDtvbiBGcmVlcGlrJztcblxuICAgIGNvbnN0IGhlYWRlcl9jb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfY29udGFjdC5jbGFzc05hbWUgPSBcInRvcF9jb250YWN0XCI7XG4gICAgY29uc3QgY29udGFjdF90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0X3RleHQuY2xhc3NOYW1lID0gXCJjb3JuZXJfdGV4dGNvbnRhY3RcIjtcbiAgICBjb250YWN0X3RleHQuaW5uZXJIVE1MID0gXCJDb250YWN0XCI7XG5cbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkbGluZS5jbGFzc05hbWUgPSBcImhlYWRsaW5lclwiXG4gICAgaGVhZGxpbmUuaW5uZXJIVE1MID0gXCJDb250YWN0IFVzXCI7XG5cbiAgICBjb25zdCBjb250YWN0X3NlcF8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0X3NlcF8xLmNsYXNzTmFtZSA9IFwiY29udGFjdHNlcF8xXCI7XG4gICAgY29uc3QgY29udGFjdF9zZXBfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdF9zZXBfMi5jbGFzc05hbWUgPSBcImNvbnRhY3RzZXBfMlwiO1xuICAgIGNvbnN0IGNvbnRhY3Rfc2VwXzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3Rfc2VwXzMuY2xhc3NOYW1lID0gXCJjb250YWN0c2VwXzNcIjtcblxuXG4gICAgY29uc3QgY29udGFjdGJveF8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0Ym94XzEuY2xhc3NOYW1lID0gXCJib3hjb250YWN0XzFcIjtcbiAgICBjb25zdCBjb250YWN0Ym94XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3Rib3hfMi5jbGFzc05hbWUgPSBcImJveGNvbnRhY3RfMlwiO1xuICAgIGNvbnN0IGNvbnRhY3Rib3hfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdGJveF8zLmNsYXNzTmFtZSA9IFwiYm94Y29udGFjdF8zXCI7XG5cbiAgICBjb25zdCBwMV90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBwMV90aXRsZS5jbGFzc05hbWUgPSBcInRpdGxlX3AxXCI7XG4gICAgcDFfdGl0bGUuaW5uZXJIVE1MID0gXCJGYXRoZXIgRmFsYWZlbFwiO1xuXG4gICAgY29uc3QgcDJfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgcDJfdGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZV9wMlwiO1xuICAgIHAyX3RpdGxlLmlubmVySFRNTCA9IFwiTW90aGVyIE1hY2Fyb25pXCI7XG5cbiAgICBjb25zdCBwM190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBwM190aXRsZS5jbGFzc05hbWUgPSBcInRpdGxlX3AzXCI7XG4gICAgcDNfdGl0bGUuaW5uZXJIVE1MID0gXCJUZWVuYWdlIFRhcGlvY2FcIjtcblxuICAgIGNvbnN0IG5vdEltYWdlXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5vdEltYWdlXzEuY2xhc3NOYW1lID0gXCJsZWZ0b2ZpbWFnZVwiO1xuXG4gICAgY29uc3Qgbm90SW1hZ2VfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbm90SW1hZ2VfMi5jbGFzc05hbWUgPSBcImxlZnRvZmltYWdlXCI7XG5cbiAgICBjb25zdCBub3RJbWFnZV8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBub3RJbWFnZV8zLmNsYXNzTmFtZSA9IFwibGVmdG9maW1hZ2VcIjtcblxuICAgIGNvbnN0IGRldGFpbHNfcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRldGFpbHNfcDEuY2xhc3NOYW1lID0gXCJkZXRhaWxzUDFcIjtcbiAgICBkZXRhaWxzX3AxLmlubmVySFRNTCA9IFwiTWFuYWdlcjxicj4xMjMtNDU2LTc4OTA8YnI+MkluZmluaXR5TkBCZXlvbmQuQ29tXCI7XG5cbiAgICBjb25zdCBkZXRhaWxzX3AyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXRhaWxzX3AyLmNsYXNzTmFtZSA9IFwiZGV0YWlsc1AzXCI7XG4gICAgZGV0YWlsc19wMi5pbm5lckhUTUwgPSBcIkNoZWY8YnI+MTIzLTQ1Ni03ODkxPGJyPkludGVyc3RlbGxhckBGb29kaWUuQ29tXCI7XG5cbiAgICBjb25zdCBkZXRhaWxzX3AzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXRhaWxzX3AzLmNsYXNzTmFtZSA9IFwiZGV0YWlsc1AzXCI7XG4gICAgZGV0YWlsc19wMy5pbm5lckhUTUwgPSBcIkhvc3QvV2FpdGVyPGJyPjEyMy00NTYtNzg5Mjxicj5Ub3RhbGx5LlJhZEBEdWRlLkNvbVwiO1xuXG4gICAgY29uc3QgY29vazNJY29uID0gbmV3IEltYWdlKCk7XG4gICAgY29vazNJY29uLnNyYyA9IENvb2szO1xuXG4gICAgY29uc3QgaG9zdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBob3N0SWNvbi5zcmMgPSBIb3N0O1xuXG4gICAgY29uc3QgbWFuYWdlckljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBtYW5hZ2VySWNvbi5zcmMgPSBNYW5hZ2VyO1xuXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZCh1bmRlcmhlYWRlcik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChmb290ZXJfYm94KTtcbiAgICBmb290ZXJfYm94LmFwcGVuZENoaWxkKGZvb3RlcjEpO1xuICAgIGZvb3Rlcl9ib3guYXBwZW5kQ2hpbGQoZm9vdGVyMik7XG4gICAgaGVhZGVyX2hvbWUuYXBwZW5kQ2hpbGQoaG9tZV90ZXh0KTtcbiAgICBoZWFkZXJfbWVudS5hcHBlbmRDaGlsZChtZW51X3RleHQpO1xuICAgIGhlYWRlcl9jb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RfdGV4dCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9ob21lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX21lbnUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJfY29udGFjdCk7XG4gICAgdW5kZXJoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmVyYm94KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdF9zZXBfMSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3Rfc2VwXzIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0X3NlcF8zKTtcbiAgICBjb250YWN0X3NlcF8xLmFwcGVuZENoaWxkKGNvbnRhY3Rib3hfMSk7XG4gICAgY29udGFjdGJveF8xLmFwcGVuZENoaWxkKG5vdEltYWdlXzEpO1xuICAgIG5vdEltYWdlXzEuYXBwZW5kQ2hpbGQocDFfdGl0bGUpO1xuICAgIG5vdEltYWdlXzEuYXBwZW5kQ2hpbGQoZGV0YWlsc19wMSk7XG4gICAgY29udGFjdGJveF8xLmFwcGVuZENoaWxkKG1hbmFnZXJJY29uKTtcbiAgICBjb250YWN0X3NlcF8yLmFwcGVuZENoaWxkKGNvbnRhY3Rib3hfMik7XG4gICAgY29udGFjdGJveF8yLmFwcGVuZENoaWxkKG5vdEltYWdlXzIpO1xuICAgIG5vdEltYWdlXzIuYXBwZW5kQ2hpbGQocDJfdGl0bGUpO1xuICAgIG5vdEltYWdlXzIuYXBwZW5kQ2hpbGQoZGV0YWlsc19wMik7XG4gICAgY29udGFjdGJveF8yLmFwcGVuZENoaWxkKGNvb2szSWNvbik7XG4gICAgY29udGFjdF9zZXBfMy5hcHBlbmRDaGlsZChjb250YWN0Ym94XzMpO1xuICAgIGNvbnRhY3Rib3hfMy5hcHBlbmRDaGlsZChub3RJbWFnZV8zKTtcbiAgICBub3RJbWFnZV8zLmFwcGVuZENoaWxkKHAzX3RpdGxlKTtcbiAgICBub3RJbWFnZV8zLmFwcGVuZENoaWxkKGRldGFpbHNfcDMpO1xuICAgIGNvbnRhY3Rib3hfMy5hcHBlbmRDaGlsZChob3N0SWNvbik7XG4gICAgaGVhZGxpbmVyYm94LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcblxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgICAgICAgdGFiU3dpdGNoQ29kZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0YWJTd2l0Y2hDb2RlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBJY29uIGZyb20gJy4vY2hlZi5qcGcnO1xuaW1wb3J0IHRhYlN3aXRjaENvZGUgZnJvbSAnLi90YWJzd2l0Y2guanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZCgpIHtcblxuICAgIGNvbnN0IGhlYWRsaW5lcmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGxpbmVyYm94LmNsYXNzTmFtZSA9IFwiaGVhZGxpbmVyX2JveFwiO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9IFwidG9waGVhZGVyXCI7XG4gICAgY29uc3QgdW5kZXJoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHVuZGVyaGVhZGVyLmNsYXNzTmFtZSA9IFwidW5kZXJfdG9waGVhZGVyXCI7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJiaWdnZXN0X2JveFwiO1xuICAgIGNvbnN0IHNlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMS5jbGFzc05hbWUgPSBcInNlY3Rpb25fMVwiO1xuICAgIGNvbnN0IHNlY3Rpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMi5jbGFzc05hbWUgPSBcInNlY3Rpb25fMlwiO1xuICAgIGNvbnN0IHNlY3Rpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uMy5jbGFzc05hbWUgPSBcInNlY3Rpb25fM1wiO1xuXG4gICAgY29uc3QgaGVhZGVyX2hvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcl9ob21lLmNsYXNzTmFtZSA9IFwidG9wX2hvbWVcIjtcbiAgICBjb25zdCBob21lX3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWVfdGV4dC5jbGFzc05hbWUgPSBcImNvcm5lcl90ZXh0aG9tZVwiO1xuICAgIGhvbWVfdGV4dC5pbm5lckhUTUwgPSBcIkhvbWVcIjtcblxuICAgIGNvbnN0IGhlYWRlcl9tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfbWVudS5jbGFzc05hbWUgPSBcInRvcF9tZW51XCI7XG4gICAgY29uc3QgbWVudV90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51X3RleHQuY2xhc3NOYW1lID0gXCJjb3JuZXJfdGV4dG1lbnVcIjtcbiAgICBtZW51X3RleHQuaW5uZXJIVE1MID0gXCJNZW51XCI7XG5cbiAgICBjb25zdCBmb290ZXJfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXJfYm94LmNsYXNzTmFtZSA9IFwiYm90dG9tX2Zvb3RcIjtcblxuICAgIGNvbnN0IGZvb3RlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3RlcjEuaW5uZXJIVE1MID0gJ0JhY2tncm91bmQgcGhvdG8gYnkmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGtyaXNyb2xsZXI/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+S3Jpc3RvcGhlciBSb2xsZXI8L2E+Jm5ic3A7b24mbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vaW1hZ2VzL25hdHVyZS9nYWxheHk/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+VW5zcGxhc2g8L2E+JztcblxuXG4gICAgY29uc3QgZm9vdGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyMi5pbm5lckhUTUwgPSAnQXN0cm9uYXV0IGltYWdlIGJ5Jm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL2N1dGUtYXN0cm9uYXV0LWNoZWYtc2VydmluZy1mb29kLWNhcnRvb24tdmVjdG9yLWljb24taWxsdXN0cmF0aW9uLXNjaWVuY2UtZm9vZC1pY29uLWlzb2xhdGVkLWZsYXRfMzEzNDg0NTAuaHRtI3F1ZXJ5PWFzdHJvbmF1dCUyMGNoZWYmcG9zaXRpb249NCZmcm9tX3ZpZXc9c2VhcmNoJnRyYWNrPXNwaFwiPmNhdGFseXN0c3R1ZmY8L2E+IG9uIEZyZWVwaWsnO1xuXG4gICAgY29uc3QgaGVhZGVyX2NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcl9jb250YWN0LmNsYXNzTmFtZSA9IFwidG9wX2NvbnRhY3RcIjtcbiAgICBjb25zdCBjb250YWN0X3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RfdGV4dC5jbGFzc05hbWUgPSBcImNvcm5lcl90ZXh0Y29udGFjdFwiO1xuICAgIGNvbnRhY3RfdGV4dC5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcblxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRsaW5lLmNsYXNzTmFtZSA9IFwiaGVhZGxpbmVyXCJcbiAgICBoZWFkbGluZS5pbm5lckhUTUwgPSBcIll1bW15IFllYXJuaW5nc1wiO1xuXG4gICAgY29uc3QgdW5kZXJIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB1bmRlckhlYWRsaW5lLmlubmVySFRNTCA9IFwiQ3JhdmluZyBzb21ldGhpbmcgeXVtbXk/IDxicj5Mb29rIG5vIGZ1cnRoZXIhXCI7XG5cbiAgICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW50cm8uaW5uZXJIVE1MID0gXCJXZWxjb21lIHRvIFl1bW15IFllYXJuaW5ncywgYSBwbGFjZSB3aGVyZSB5b3UgY2FuIGZpbmQgZXZlcnl0aGluZyB0aGF0IHlvdSAob3IgSSkgaGF2ZSBiZWVuIHllYXJuaW5nIGZvciEgSGVyZSB5b3UnbGwgZmluZCB0aGUgbW9zdCBzYXRpc2Z5aW5nIGZvb2RzIHRoYXQgbW9uZXkgY2FuIGJ1eSBpbiB0aGlzIGdhbGF4eS4gSSBob3BlIHlvdSBlbmpveSFcIlxuXG4gICAgY29uc3QgaG91cnNNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob3Vyc01haW4uaW5uZXJIVE1MID0gXCJIb3Vyc1wiXG4gICAgaG91cnNNYWluLmNsYXNzTmFtZSA9IFwidGl0bGUtdGV4dFwiXG5cbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG91cnMuaW5uZXJIVE1MID0gXCJNb25kYXk6IDdhbSAtIDdwbSA8YnI+IFR1ZXNkYXk6IDdhbSAtIDdwbSA8YnI+IFdlZG5lc2RheTogN2FtIC0gN3BtIDxicj4gVGh1cnNkYXk6IDdhbSAtIDdwbSA8YnI+IEZyaWRheTogN2FtIC0gMTBwbSA8YnI+IFNhdHVyZGF5OiA3YW0gLSAxMHBtIDxicj4gU3VuZGF5OiA4YW0gLSAxMHBtXCJcblxuICAgIGNvbnN0IGxvY2F0aW9uTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9jYXRpb25NYWluLmlubmVySFRNTCA9IFwiTG9jYXRpb25cIlxuICAgIGxvY2F0aW9uTWFpbi5jbGFzc05hbWUgPSBcInRpdGxlLXRleHRcIlxuXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvY2F0aW9uLmlubmVySFRNTCA9IFwiOTk5IFRhc3RlIEJ1ZCBBdmVudWUsIERlbGljaW91cywgVFggOTk5OTlcIlxuXG4gICAgY29uc3QgY2hlZkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBjaGVmSWNvbi5zcmMgPSBJY29uO1xuXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZCh1bmRlcmhlYWRlcik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChmb290ZXJfYm94KTtcbiAgICBmb290ZXJfYm94LmFwcGVuZENoaWxkKGZvb3RlcjEpO1xuICAgIGZvb3Rlcl9ib3guYXBwZW5kQ2hpbGQoZm9vdGVyMik7XG4gICAgaGVhZGVyX2hvbWUuYXBwZW5kQ2hpbGQoaG9tZV90ZXh0KTtcbiAgICBoZWFkZXJfbWVudS5hcHBlbmRDaGlsZChtZW51X3RleHQpO1xuICAgIGhlYWRlcl9jb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RfdGV4dCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9ob21lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX21lbnUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJfY29udGFjdCk7XG4gICAgdW5kZXJoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmVyYm94KTtcbiAgICBoZWFkbGluZXJib3guYXBwZW5kQ2hpbGQoY2hlZkljb24pO1xuICAgIGhlYWRsaW5lcmJveC5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb24xKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbjIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uMyk7XG4gICAgXG4gICAgc2VjdGlvbjEuYXBwZW5kQ2hpbGQodW5kZXJIZWFkbGluZSk7XG4gICAgc2VjdGlvbjEuYXBwZW5kQ2hpbGQoaW50cm8pO1xuICAgIHNlY3Rpb24yLmFwcGVuZENoaWxkKGhvdXJzTWFpbik7XG4gICAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICAgIHNlY3Rpb24zLmFwcGVuZENoaWxkKGxvY2F0aW9uTWFpbik7XG4gICAgc2VjdGlvbjMuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuXG4gICAgdGFiU3dpdGNoQ29kZSgpO1xufVxuIiwiaW1wb3J0IHBhZ2VMb2FkIGZyb20gJy4vcGFnZWxvYWQuanMnO1xuaW1wb3J0IHBhZ2UyTG9hZCBmcm9tICcuL3BhZ2UybG9hZC5qcyc7XG5pbXBvcnQgcGFnZTNMb2FkIGZyb20gJy4vcGFnZTNsb2FkLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFiU3dpdGNoQ29kZSgpIHtcbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcGhlYWRlcicpO1xuICAgIGJ0bnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lLnNsaWNlKDAsOCkgPT09ICd0b3BfaG9tZScgfHwgZS50YXJnZXQuY2xhc3NOYW1lLnNsaWNlKDAsMTUpID09PSAnY29ybmVyX3RleHRob21lJykge1xuICAgICAgICAgICAgY29uc3QgYWxsVGhlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuICAgICAgICAgICAgYWxsVGhlQ29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgcGFnZUxvYWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUuc2xpY2UoMCw4KSA9PT0gJ3RvcF9tZW51JyB8fCBlLnRhcmdldC5jbGFzc05hbWUuc2xpY2UoMCwxNSkgPT09ICdjb3JuZXJfdGV4dG1lbnUnKSB7XG4gICAgICAgICAgICBjb25zdCBhbGxUaGVDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXG4gICAgICAgICAgICBhbGxUaGVDb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICBwYWdlMkxvYWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUuc2xpY2UoMCwxMSkgPT09ICd0b3BfY29udGFjdCcgfHwgZS50YXJnZXQuY2xhc3NOYW1lLnNsaWNlKDAsMTgpID09PSAnY29ybmVyX3RleHRjb250YWN0Jykge1xuICAgICAgICAgICAgY29uc3QgYWxsVGhlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuICAgICAgICAgICAgYWxsVGhlQ29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgcGFnZTNMb2FkKCk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9