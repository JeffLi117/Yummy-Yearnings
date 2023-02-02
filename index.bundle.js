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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    text-align: center;\n    font-size: 1.2rem;\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    background-color: black;\n    height: 100%;\n}\n\n#content {\n    font-family: 'Quicksand', sans-serif;\n    font-weight:bolder;\n    width: 100vw;\n    max-width: 100%;\n}\n\ndiv[class^=\"top_\"] {\n    font-family: 'Paprika', cursive;\n    margin: 0;\n    padding: 0.35rem;\n    border: 0.25rem solid black;\n    position: relative;\n}\n\n@keyframes changeColor {\n    0% {\n        border: 0.25rem solid rgb(181, 141, 255);\n    }\n    25% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n    50% {\n        border: 0.25rem solid rgb(249, 41, 62);\n    }\n    75% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n}\n\ndiv[class^=\"top_\"]:hover {\n    border: 0.25rem solid rgb(158, 105, 255);\n\n    animation-name: changeColor;\n    animation-iteration-count: infinite;\n    animation-duration: 3s;\n}\n\ndiv[class^=\"top_\"]::before, div[class^=\"top_\"]::after {\n    content: '';\n    display: block;\n    position: absolute;\n    background: aquamarine;\n}\n\ndiv[class^=\"top_\"]::before {\n    top: -0.3em; \n    bottom: -0.3em;\n    left: 1em;\n    right: 1em;\n}\n\ndiv[class^=\"top_\"]::after {\n    left: -0.3em;\n    right: -0.3em;\n    top: 1em;\n    bottom: 1em;\n}\n\ndiv[class^=\"corner_\"] {\n    position: relative;\n    z-index: 1;\n}\n\n.topheader {\n    top: 0;\n    width: 100%;\n    height: 9vh;\n    display: flex;\n    justify-content: center;\n    gap: 2rem;\n    align-items: center;\n    background-color: aquamarine;\n}\n\n.bottom_foot {\n    color: white;\n    bottom: 0;\n    width: 100%;\n    height: 5vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: rgb(98, 74, 255);\n    opacity: 0.6;\n    position: relative;\n}\n\n.under_topheader {\n    background-color: black;\n}\n\n.biggest_box {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    gap: 0.5rem;\n    min-height: 100%;\n    background-attachment: fixed;\n    grid-template-columns: clamp(20%, 22%, 27%);\n    grid-template-rows: clamp(12%, 20%, 21%) clamp(22%, 28%, 1fr) clamp(22%, 28%, 1fr) clamp(12%, 20%, 21%);\n    background-color: black;\n    margin-bottom: -5vh;\n    padding-bottom: 5vh;\n}\n\ndiv[class^=\"section\"] {\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    display: flex;\n    width: 40vw;\n    flex-direction: column;\n    justify-content: center;\n    justify-self: center;\n    opacity: 0.85;\n    margin-top:1rem;\n    padding-top: 0.3rem;\n    padding-bottom: 0.3rem;\n}\n\ndiv[class^=\"section\"] > div {\n    padding-bottom: 0.4rem;\n}\n\n#menu_tip_box {\n    display: flex;\n    flex-direction: column;\n}\n\n#hoverText {\n    font-size: 0.85rem;\n    text-align: center;\n    padding: 0 0.3rem;\n}\n\n#clickText {\n    display: none;\n}\n\n.headliner_box {\n    font-family: 'Itim', cursive;\n    grid-row: 1 / 2;\n    display: flex;\n    margin-top: 1rem;\n    padding: 0.5rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n}\n\n.section_1 {\n    grid-row: 2 / 3;\n}\n\n.section_1 > div {\n    padding: 0.2rem 1.2rem;\n}\n\n.section_2 {\n    grid-row: 3 / 4;\n}\n\n.section_3 {\n    grid-row: 4 / 5;\n    margin-bottom: 1rem;\n}\n\nh1 {\n    font-size: 2rem;\n    margin: 0 1rem;\n}\n\nh2 {\n    font-family: 'Itim', cursive;\n    font-size: 1.5rem;\n    margin: 0 1rem;\n}\n\n.title-text {\n    font-family: 'Quantico', sans-serif;\n    font-size: 1.8rem;\n    font-weight: bold;\n}\n\nimg {\n    border: 2px solid black;\n    border-radius: 12px;\n    width: 5rem;\n    height: 5rem;\n}\n\na, a:link, a:visited {\n    color: white;\n    text-decoration: none;\n}\n\na:hover {\n    color:rgb(248, 165, 255);\n    text-decoration: underline;\n}\n\na:active {\n    color:aquamarine;\n}\n\n/*underneath is page2Load CSS*/\n\n.headliner_box_2 {\n    font-family: 'Itim', cursive;\n    padding: 0.5rem;\n    display: flex;\n    margin-top: 1rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n    grid-row: 1 / 2;\n}\n\nh2[class^=\"title\"] {\n    font-family: 'Quantico', sans-serif;\n    font-size: 1.8rem;\n    font-weight: bold;\n    padding: 0.5rem;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n}\n\n.biggest_box_2 {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n    min-height: 100%;\n    background-attachment: fixed;\n    grid-template-columns: clamp(20%, 25%, 28%);\n    grid-template-rows: clamp(4%, 5%, 7%) clamp(25%, 39%, 1fr) clamp(25%, 39%, 1fr) clamp(25%, 39%, 1fr);\n    margin-bottom: -5vh;\n    padding-bottom: 5vh;\n}\n\n.box_apps, .box_entrees, .box_desserts {\n    display: grid;\n    grid-template-columns: repeat(2, 50%);\n    grid-template-rows: repeat(2, 50%);\n}\n\n.box_apps img, .box_entrees img, .box_desserts img {\n    object-fit: cover;\n    width: 98.8%;\n    height: 21rem;\n}\n\ndiv[id^=\"ent_\"], div[id^=\"app_\"], div[id^=\"dess_\"] {\n    background-color: rgb(255, 255, 255);\n    border: 2px solid black;\n    border-radius: 22px;\n    display: flex;\n    padding: 0.2rem 0.4rem;\n    justify-content: center;\n    margin: 0.2rem auto;\n    min-width: 55%;\n    max-width: 65%;\n}\n\ndiv[id^=\"appbox_\"], div[id^=\"entbox_\"], div[id^=\"dessbox_\"] {\n    border: 0.25rem solid transparent;\n    justify-content: center;\n    border-radius: 10px;\n}\n\ndiv[id^=\"appbox_\"]:hover, div[id^=\"entbox_\"]:hover, div[id^=\"dessbox_\"]:hover {\n    border: 0.25rem solid rgb(230, 0, 255);\n    border-radius: 10px;\n    animation-name: changeColor;\n    animation-iteration-count: infinite;\n    animation-duration: 3s;\n}\n\ndiv[class*=\"_p2\"] > div {    \n    padding-bottom: 0.4rem;\n    font-family: 'Quicksand', sans-serif;\n    font-size: 1.1rem;\n}\n\ndiv[class*=\"_p2\"] {\n    border: none;\n    background-color: transparent;\n}\n\n.section_1_p2 {\n    grid-row: 2 / 3;\n}\n\n.section_2_p2 {\n    grid-row: 3 / 4;\n}\n\n.section_3_p2 {\n    margin-bottom: 0.7rem;\n    grid-row: 4 / 5;\n}\n\ndiv[id^=\"imgwrapper_\"] {\n    position: relative;\n    display:flex;\n    justify-content: center;\n}\n  \ndiv[id^=\"overlayapp_wrap_\"], div[id^=\"overlayent_wrap_\"], div[id^=\"overlaydess_wrap_\"] {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(36, 62, 206, 0.6);\n    color: #fff;\n    visibility: hidden;\n    opacity: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    justify-self: center;\n    border: 2px solid transparent;\n    border-radius: 12px;\n    transition: opacity .2s, visibility .2s;\n}\n  \ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayapp_wrap_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayent_wrap_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlaydess_wrap_\"] {\n    visibility: visible;\n    opacity: 1;\n}\n  \ndiv[id^=\"overlayapp_\"], div[id^=\"overlayent_\"], div[id^=\"overlaydess_\"] {\n    transition: .2s;\n    transform: translateY(1em);\n}\n  \ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayapp_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayent_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlaydess_\"] {\n    transform: translateY(0);\n}\n\ndiv#longfooter {\n    font-size: calc(6px + .5vw);\n    margin: 0.2rem, 0.4rem;\n}\n\n/*underneath is page3Load CSS*/\n\n.biggest_box_3 {\n    display: grid;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n    min-height: 100%;\n    background-attachment: fixed;\n    grid-template-rows: 15vh repeat(3, 1fr);\n    margin-bottom: -5vh;\n    padding-bottom: 5vh;\n}\n\ndiv[class^=\"contactsep\"] {\n    margin-bottom: 1rem;\n    width: 100%;\n}\n\n.headliner_box_3 {\n    font-family: 'Itim', cursive;\n    padding: 0.5rem;\n    display: flex;\n    margin-top: 1rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n    grid-row: 1 / 2;\n    margin-bottom: 1rem;\n}\n\n.section_1_p3 {\n    grid-row: 2 / 3;\n}\n\n.section_2_p3 {\n    grid-row: 3 / 4;\n}\n\n.section_3_p3 {\n    margin-bottom: 0.7rem;\n    grid-row: 4 / 5;\n}\n\ndiv[class^=\"leftof\"] {\n    display: flex;\n    flex-direction: column;\n    align-content: left;\n}\n\ndiv[class^=\"boxcontact_\"] {\n    padding: 0.5rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    gap: 0.5rem;\n    opacity: 0.85;\n    display: flex;\n    justify-content: space-between;\n}\n\nh2[class^=\"title_p\"] {\n    text-align: left;\n    font-size: 1.2rem;\n    border: none;\n    background-color:transparent;\n    padding: 0;\n    margin: 0 0.2rem;\n}\n\ndiv[class^=\"detailsP\"] {\n    text-align: left;\n    margin: 0 0.2rem;\n}\n\n/*Phone CSS*/\n\n@media only screen and (max-width: 600px) {\n    div.topheader {\n        height: 12vh;\n        font-size: smaller;\n    }\n    .headliner_box, .headliner_box_2 {\n        margin: 1rem 2rem 0 2rem;\n    }\n    .biggest_box, .biggest_box_2 {\n        grid-template-columns: 100%;\n    }\n    .biggest_box_3 {\n        gap: 1rem;\n    }\n    .section_1, .section_2, .section_3, \n    div[class^=\"grid_sep_\"] {\n        min-width: 60%;\n        max-width: 100%;\n    }\n    div[id^=\"appbox_\"], div[id^=\"entbox_\"], div[id^=\"dessbox_\"] {\n        height: 100%;\n    }\n    div[class^=\"grid_sep_\"] {\n        display: flex;\n        justify-content: center;\n        width: 100%;\n    }\n    div.section_1_p2, div.section_2_p2, div.section_3_p2 {\n        width: 95%;\n    }\n    h2[class^=\"title\"] {\n        text-align: center;\n        font-size: 1.1rem;\n        font-weight: bold;\n        padding: 0.3rem 0.5rem;\n        background-color: gray;\n        border-radius: 10px;\n        border: 2px solid black;\n    }\n    div[id^=\"appbox_\"]:hover, div[id^=\"entbox_\"]:hover, div[id^=\"dessbox_\"]:hover {\n        z-index: 2;\n    }\n    div[id^=\"ent_\"], div[id^=\"app_\"], div[id^=\"dess_\"] {\n        font-size: 0.8rem;\n        align-content: center;\n        flex-wrap: wrap;\n        margin-top: 0;\n        margin-bottom: 0.2rem;\n        min-height: 11%;\n        max-width: 100%;\n    }\n    .box_apps img, .box_entrees img, .box_desserts img {\n        object-fit: cover;\n        width: 98.8%;\n        height: 12rem;\n    }\n    .box_apps, .box_entrees, .box_desserts {\n        display: grid;\n        gap: 0.4rem;\n        padding: 0.3rem;\n        grid-template-columns: repeat(2, 50%);\n        grid-template-rows: repeat(2, 50%);\n    }\n    div[id^=\"overlayapp_wrap_\"], div[id^=\"overlayent_wrap_\"], div[id^=\"overlaydess_wrap_\"] {\n        font-size: 0.7rem;\n    }\n    div[class^=\"leftof\"] > h2 {\n        font-size: 1.4rem;\n        font-weight: 600;\n        text-align: left;\n        border: none;\n        padding: 0;\n        margin-bottom: 0.4rem;\n    }\n    div[class^=\"contactsep_3\"] {\n        margin-bottom: 2rem;\n    }\n    img {\n        width: 6rem;\n        height: 6rem;\n    }\n    .bottom_foot {\n        font-size: calc(6.4px + .5vw);\n    }\n    #hoverText {\n        display: none;\n    }\n    #clickText {\n        display: inline;\n        font-size: calc(11px + .5vw);\n        margin-left: 0.5rem;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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EA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,oBAAoB;IACpB,mBAAmB;IACnB,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,aAAa;IACb,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;IACZ,4BAA4B;IAC5B,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA,YAAY;;AAEZ;IACI;QACI,YAAY;QACZ,kBAAkB;IACtB;IACA;QACI,wBAAwB;IAC5B;IACA;QACI,2BAA2B;IAC/B;IACA;QACI,SAAS;IACb;IACA;;QAEI,cAAc;QACd,eAAe;IACnB;IACA;QACI,YAAY;IAChB;IACA;QACI,aAAa;QACb,uBAAuB;QACvB,WAAW;IACf;IACA;QACI,UAAU;IACd;IACA;QACI,kBAAkB;QAClB,iBAAiB;QACjB,iBAAiB;QACjB,sBAAsB;QACtB,sBAAsB;QACtB,mBAAmB;QACnB,uBAAuB;IAC3B;IACA;QACI,UAAU;IACd;IACA;QACI,iBAAiB;QACjB,qBAAqB;QACrB,eAAe;QACf,aAAa;QACb,qBAAqB;QACrB,eAAe;QACf,eAAe;IACnB;IACA;QACI,iBAAiB;QACjB,YAAY;QACZ,aAAa;IACjB;IACA;QACI,aAAa;QACb,WAAW;QACX,eAAe;QACf,qCAAqC;QACrC,kCAAkC;IACtC;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;QACjB,gBAAgB;QAChB,gBAAgB;QAChB,YAAY;QACZ,UAAU;QACV,qBAAqB;IACzB;IACA;QACI,mBAAmB;IACvB;IACA;QACI,WAAW;QACX,YAAY;IAChB;IACA;QACI,6BAA6B;IACjC;IACA;QACI,aAAa;IACjB;IACA;QACI,eAAe;QACf,4BAA4B;QAC5B,mBAAmB;IACvB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Itim&family=Paprika&family=Quantico:ital@1&family=Quicksand&display=swap');\n\n:root {\n    text-align: center;\n    font-size: 1.2rem;\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    background-color: black;\n    height: 100%;\n}\n\n#content {\n    font-family: 'Quicksand', sans-serif;\n    font-weight:bolder;\n    width: 100vw;\n    max-width: 100%;\n}\n\ndiv[class^=\"top_\"] {\n    font-family: 'Paprika', cursive;\n    margin: 0;\n    padding: 0.35rem;\n    border: 0.25rem solid black;\n    position: relative;\n}\n\n@keyframes changeColor {\n    0% {\n        border: 0.25rem solid rgb(181, 141, 255);\n    }\n    25% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n    50% {\n        border: 0.25rem solid rgb(249, 41, 62);\n    }\n    75% {\n        border: 0.25rem solid rgb(255, 42, 212);\n    }\n}\n\ndiv[class^=\"top_\"]:hover {\n    border: 0.25rem solid rgb(158, 105, 255);\n\n    animation-name: changeColor;\n    animation-iteration-count: infinite;\n    animation-duration: 3s;\n}\n\ndiv[class^=\"top_\"]::before, div[class^=\"top_\"]::after {\n    content: '';\n    display: block;\n    position: absolute;\n    background: aquamarine;\n}\n\ndiv[class^=\"top_\"]::before {\n    top: -0.3em; \n    bottom: -0.3em;\n    left: 1em;\n    right: 1em;\n}\n\ndiv[class^=\"top_\"]::after {\n    left: -0.3em;\n    right: -0.3em;\n    top: 1em;\n    bottom: 1em;\n}\n\ndiv[class^=\"corner_\"] {\n    position: relative;\n    z-index: 1;\n}\n\n.topheader {\n    top: 0;\n    width: 100%;\n    height: 9vh;\n    display: flex;\n    justify-content: center;\n    gap: 2rem;\n    align-items: center;\n    background-color: aquamarine;\n}\n\n.bottom_foot {\n    color: white;\n    bottom: 0;\n    width: 100%;\n    height: 5vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: rgb(98, 74, 255);\n    opacity: 0.6;\n    position: relative;\n}\n\n.under_topheader {\n    background-color: black;\n}\n\n.biggest_box {\n    background-image: url('./background.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    gap: 0.5rem;\n    min-height: 100%;\n    background-attachment: fixed;\n    grid-template-columns: clamp(20%, 22%, 27%);\n    grid-template-rows: clamp(12%, 20%, 21%) clamp(22%, 28%, 1fr) clamp(22%, 28%, 1fr) clamp(12%, 20%, 21%);\n    background-color: black;\n    margin-bottom: -5vh;\n    padding-bottom: 5vh;\n}\n\ndiv[class^=\"section\"] {\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    display: flex;\n    width: 40vw;\n    flex-direction: column;\n    justify-content: center;\n    justify-self: center;\n    opacity: 0.85;\n    margin-top:1rem;\n    padding-top: 0.3rem;\n    padding-bottom: 0.3rem;\n}\n\ndiv[class^=\"section\"] > div {\n    padding-bottom: 0.4rem;\n}\n\n#menu_tip_box {\n    display: flex;\n    flex-direction: column;\n}\n\n#hoverText {\n    font-size: 0.85rem;\n    text-align: center;\n    padding: 0 0.3rem;\n}\n\n#clickText {\n    display: none;\n}\n\n.headliner_box {\n    font-family: 'Itim', cursive;\n    grid-row: 1 / 2;\n    display: flex;\n    margin-top: 1rem;\n    padding: 0.5rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n}\n\n.section_1 {\n    grid-row: 2 / 3;\n}\n\n.section_1 > div {\n    padding: 0.2rem 1.2rem;\n}\n\n.section_2 {\n    grid-row: 3 / 4;\n}\n\n.section_3 {\n    grid-row: 4 / 5;\n    margin-bottom: 1rem;\n}\n\nh1 {\n    font-size: 2rem;\n    margin: 0 1rem;\n}\n\nh2 {\n    font-family: 'Itim', cursive;\n    font-size: 1.5rem;\n    margin: 0 1rem;\n}\n\n.title-text {\n    font-family: 'Quantico', sans-serif;\n    font-size: 1.8rem;\n    font-weight: bold;\n}\n\nimg {\n    border: 2px solid black;\n    border-radius: 12px;\n    width: 5rem;\n    height: 5rem;\n}\n\na, a:link, a:visited {\n    color: white;\n    text-decoration: none;\n}\n\na:hover {\n    color:rgb(248, 165, 255);\n    text-decoration: underline;\n}\n\na:active {\n    color:aquamarine;\n}\n\n/*underneath is page2Load CSS*/\n\n.headliner_box_2 {\n    font-family: 'Itim', cursive;\n    padding: 0.5rem;\n    display: flex;\n    margin-top: 1rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n    grid-row: 1 / 2;\n}\n\nh2[class^=\"title\"] {\n    font-family: 'Quantico', sans-serif;\n    font-size: 1.8rem;\n    font-weight: bold;\n    padding: 0.5rem;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n}\n\n.biggest_box_2 {\n    background-image: url('./background.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n    min-height: 100%;\n    background-attachment: fixed;\n    grid-template-columns: clamp(20%, 25%, 28%);\n    grid-template-rows: clamp(4%, 5%, 7%) clamp(25%, 39%, 1fr) clamp(25%, 39%, 1fr) clamp(25%, 39%, 1fr);\n    margin-bottom: -5vh;\n    padding-bottom: 5vh;\n}\n\n.box_apps, .box_entrees, .box_desserts {\n    display: grid;\n    grid-template-columns: repeat(2, 50%);\n    grid-template-rows: repeat(2, 50%);\n}\n\n.box_apps img, .box_entrees img, .box_desserts img {\n    object-fit: cover;\n    width: 98.8%;\n    height: 21rem;\n}\n\ndiv[id^=\"ent_\"], div[id^=\"app_\"], div[id^=\"dess_\"] {\n    background-color: rgb(255, 255, 255);\n    border: 2px solid black;\n    border-radius: 22px;\n    display: flex;\n    padding: 0.2rem 0.4rem;\n    justify-content: center;\n    margin: 0.2rem auto;\n    min-width: 55%;\n    max-width: 65%;\n}\n\ndiv[id^=\"appbox_\"], div[id^=\"entbox_\"], div[id^=\"dessbox_\"] {\n    border: 0.25rem solid transparent;\n    justify-content: center;\n    border-radius: 10px;\n}\n\ndiv[id^=\"appbox_\"]:hover, div[id^=\"entbox_\"]:hover, div[id^=\"dessbox_\"]:hover {\n    border: 0.25rem solid rgb(230, 0, 255);\n    border-radius: 10px;\n    animation-name: changeColor;\n    animation-iteration-count: infinite;\n    animation-duration: 3s;\n}\n\ndiv[class*=\"_p2\"] > div {    \n    padding-bottom: 0.4rem;\n    font-family: 'Quicksand', sans-serif;\n    font-size: 1.1rem;\n}\n\ndiv[class*=\"_p2\"] {\n    border: none;\n    background-color: transparent;\n}\n\n.section_1_p2 {\n    grid-row: 2 / 3;\n}\n\n.section_2_p2 {\n    grid-row: 3 / 4;\n}\n\n.section_3_p2 {\n    margin-bottom: 0.7rem;\n    grid-row: 4 / 5;\n}\n\ndiv[id^=\"imgwrapper_\"] {\n    position: relative;\n    display:flex;\n    justify-content: center;\n}\n  \ndiv[id^=\"overlayapp_wrap_\"], div[id^=\"overlayent_wrap_\"], div[id^=\"overlaydess_wrap_\"] {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(36, 62, 206, 0.6);\n    color: #fff;\n    visibility: hidden;\n    opacity: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    justify-self: center;\n    border: 2px solid transparent;\n    border-radius: 12px;\n    transition: opacity .2s, visibility .2s;\n}\n  \ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayapp_wrap_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayent_wrap_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlaydess_wrap_\"] {\n    visibility: visible;\n    opacity: 1;\n}\n  \ndiv[id^=\"overlayapp_\"], div[id^=\"overlayent_\"], div[id^=\"overlaydess_\"] {\n    transition: .2s;\n    transform: translateY(1em);\n}\n  \ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayapp_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlayent_\"],\ndiv[id^=\"imgwrapper_\"]:hover div[id^=\"overlaydess_\"] {\n    transform: translateY(0);\n}\n\ndiv#longfooter {\n    font-size: calc(6px + .5vw);\n    margin: 0.2rem, 0.4rem;\n}\n\n/*underneath is page3Load CSS*/\n\n.biggest_box_3 {\n    display: grid;\n    background-image: url('./background.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n    min-height: 100%;\n    background-attachment: fixed;\n    grid-template-rows: 15vh repeat(3, 1fr);\n    margin-bottom: -5vh;\n    padding-bottom: 5vh;\n}\n\ndiv[class^=\"contactsep\"] {\n    margin-bottom: 1rem;\n    width: 100%;\n}\n\n.headliner_box_3 {\n    font-family: 'Itim', cursive;\n    padding: 0.5rem;\n    display: flex;\n    margin-top: 1rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    opacity: 0.85;\n    grid-row: 1 / 2;\n    margin-bottom: 1rem;\n}\n\n.section_1_p3 {\n    grid-row: 2 / 3;\n}\n\n.section_2_p3 {\n    grid-row: 3 / 4;\n}\n\n.section_3_p3 {\n    margin-bottom: 0.7rem;\n    grid-row: 4 / 5;\n}\n\ndiv[class^=\"leftof\"] {\n    display: flex;\n    flex-direction: column;\n    align-content: left;\n}\n\ndiv[class^=\"boxcontact_\"] {\n    padding: 0.5rem;\n    justify-content: center;\n    justify-self: center;\n    align-items: center;\n    background-color: gray;\n    border-radius: 10px;\n    border: 2px solid black;\n    gap: 0.5rem;\n    opacity: 0.85;\n    display: flex;\n    justify-content: space-between;\n}\n\nh2[class^=\"title_p\"] {\n    text-align: left;\n    font-size: 1.2rem;\n    border: none;\n    background-color:transparent;\n    padding: 0;\n    margin: 0 0.2rem;\n}\n\ndiv[class^=\"detailsP\"] {\n    text-align: left;\n    margin: 0 0.2rem;\n}\n\n/*Phone CSS*/\n\n@media only screen and (max-width: 600px) {\n    div.topheader {\n        height: 12vh;\n        font-size: smaller;\n    }\n    .headliner_box, .headliner_box_2 {\n        margin: 1rem 2rem 0 2rem;\n    }\n    .biggest_box, .biggest_box_2 {\n        grid-template-columns: 100%;\n    }\n    .biggest_box_3 {\n        gap: 1rem;\n    }\n    .section_1, .section_2, .section_3, \n    div[class^=\"grid_sep_\"] {\n        min-width: 60%;\n        max-width: 100%;\n    }\n    div[id^=\"appbox_\"], div[id^=\"entbox_\"], div[id^=\"dessbox_\"] {\n        height: 100%;\n    }\n    div[class^=\"grid_sep_\"] {\n        display: flex;\n        justify-content: center;\n        width: 100%;\n    }\n    div.section_1_p2, div.section_2_p2, div.section_3_p2 {\n        width: 95%;\n    }\n    h2[class^=\"title\"] {\n        text-align: center;\n        font-size: 1.1rem;\n        font-weight: bold;\n        padding: 0.3rem 0.5rem;\n        background-color: gray;\n        border-radius: 10px;\n        border: 2px solid black;\n    }\n    div[id^=\"appbox_\"]:hover, div[id^=\"entbox_\"]:hover, div[id^=\"dessbox_\"]:hover {\n        z-index: 2;\n    }\n    div[id^=\"ent_\"], div[id^=\"app_\"], div[id^=\"dess_\"] {\n        font-size: 0.8rem;\n        align-content: center;\n        flex-wrap: wrap;\n        margin-top: 0;\n        margin-bottom: 0.2rem;\n        min-height: 11%;\n        max-width: 100%;\n    }\n    .box_apps img, .box_entrees img, .box_desserts img {\n        object-fit: cover;\n        width: 98.8%;\n        height: 12rem;\n    }\n    .box_apps, .box_entrees, .box_desserts {\n        display: grid;\n        gap: 0.4rem;\n        padding: 0.3rem;\n        grid-template-columns: repeat(2, 50%);\n        grid-template-rows: repeat(2, 50%);\n    }\n    div[id^=\"overlayapp_wrap_\"], div[id^=\"overlayent_wrap_\"], div[id^=\"overlaydess_wrap_\"] {\n        font-size: 0.7rem;\n    }\n    div[class^=\"leftof\"] > h2 {\n        font-size: 1.4rem;\n        font-weight: 600;\n        text-align: left;\n        border: none;\n        padding: 0;\n        margin-bottom: 0.4rem;\n    }\n    div[class^=\"contactsep_3\"] {\n        margin-bottom: 2rem;\n    }\n    img {\n        width: 6rem;\n        height: 6rem;\n    }\n    .bottom_foot {\n        font-size: calc(6.4px + .5vw);\n    }\n    #hoverText {\n        display: none;\n    }\n    #clickText {\n        display: inline;\n        font-size: calc(11px + .5vw);\n        margin-left: 0.5rem;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUss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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCx5SUFBeUksUUFBUTs7O0FBR25NO0FBQ0EsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsc0NBQUk7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSx5REFBYTtBQUNqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdxQztBQUNFO0FBQ0E7O0FBRXhCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQVE7QUFDcEIsVUFBVTtBQUNWO0FBQ0E7QUFDQSxZQUFZLHlEQUFTO0FBQ3JCLFVBQVU7QUFDVjtBQUNBO0FBQ0EsWUFBWSx5REFBUztBQUNyQjtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9zcmMvcGFnZTJsb2FkLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL3NyYy9wYWdlM2xvYWQuanMiLCJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vc3JjL3BhZ2Vsb2FkLmpzIiwid2VicGFjazovL3l1bW15LXllYXJuaW5ncy8uL3NyYy90YWJzd2l0Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUl0aW0mZmFtaWx5PVBhcHJpa2EmZmFtaWx5PVF1YW50aWNvOml0YWxAMSZmYW1pbHk9UXVpY2tzYW5kJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDpib2xkZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJ0b3BfXFxcIl0ge1xcbiAgICBmb250LWZhbWlseTogJ1BhcHJpa2EnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAuMzVyZW07XFxuICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCBibGFjaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNoYW5nZUNvbG9yIHtcXG4gICAgMCUge1xcbiAgICAgICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigxODEsIDE0MSwgMjU1KTtcXG4gICAgfVxcbiAgICAyNSUge1xcbiAgICAgICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigyNTUsIDQyLCAyMTIpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDI0OSwgNDEsIDYyKTtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigyNTUsIDQyLCAyMTIpO1xcbiAgICB9XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXTpob3ZlciB7XFxuICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCByZ2IoMTU4LCAxMDUsIDI1NSk7XFxuXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2VDb2xvcjtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXTo6YmVmb3JlLCBkaXZbY2xhc3NePVxcXCJ0b3BfXFxcIl06OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6IGFxdWFtYXJpbmU7XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXTo6YmVmb3JlIHtcXG4gICAgdG9wOiAtMC4zZW07IFxcbiAgICBib3R0b206IC0wLjNlbTtcXG4gICAgbGVmdDogMWVtO1xcbiAgICByaWdodDogMWVtO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJ0b3BfXFxcIl06OmFmdGVyIHtcXG4gICAgbGVmdDogLTAuM2VtO1xcbiAgICByaWdodDogLTAuM2VtO1xcbiAgICB0b3A6IDFlbTtcXG4gICAgYm90dG9tOiAxZW07XFxufVxcblxcbmRpdltjbGFzc149XFxcImNvcm5lcl9cXFwiXSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnRvcGhlYWRlciB7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG4uYm90dG9tX2Zvb3Qge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk4LCA3NCwgMjU1KTtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi51bmRlcl90b3BoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmJpZ2dlc3RfYm94IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2xhbXAoMjAlLCAyMiUsIDI3JSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogY2xhbXAoMTIlLCAyMCUsIDIxJSkgY2xhbXAoMjIlLCAyOCUsIDFmcikgY2xhbXAoMjIlLCAyOCUsIDFmcikgY2xhbXAoMTIlLCAyMCUsIDIxJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtNXZoO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXZoO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJzZWN0aW9uXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMC44NTtcXG4gICAgbWFyZ2luLXRvcDoxcmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJzZWN0aW9uXFxcIl0gPiBkaXYge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xcbn1cXG5cXG4jbWVudV90aXBfYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2hvdmVyVGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDAuM3JlbTtcXG59XFxuXFxuI2NsaWNrVGV4dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oZWFkbGluZXJfYm94IHtcXG4gICAgZm9udC1mYW1pbHk6ICdJdGltJywgY3Vyc2l2ZTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbi5zZWN0aW9uXzEge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5zZWN0aW9uXzEgPiBkaXYge1xcbiAgICBwYWRkaW5nOiAwLjJyZW0gMS4ycmVtO1xcbn1cXG5cXG4uc2VjdGlvbl8yIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uc2VjdGlvbl8zIHtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJdGltJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG4udGl0bGUtdGV4dCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVhbnRpY28nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmltZyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbn1cXG5cXG5hLCBhOmxpbmssIGE6dmlzaXRlZCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gICAgY29sb3I6cmdiKDI0OCwgMTY1LCAyNTUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuYTphY3RpdmUge1xcbiAgICBjb2xvcjphcXVhbWFyaW5lO1xcbn1cXG5cXG4vKnVuZGVybmVhdGggaXMgcGFnZTJMb2FkIENTUyovXFxuXFxuLmhlYWRsaW5lcl9ib3hfMiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSXRpbScsIGN1cnNpdmU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgb3BhY2l0eTogMC44NTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG5oMltjbGFzc149XFxcInRpdGxlXFxcIl0ge1xcbiAgICBmb250LWZhbWlseTogJ1F1YW50aWNvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYmlnZ2VzdF9ib3hfMiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjbGFtcCgyMCUsIDI1JSwgMjglKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBjbGFtcCg0JSwgNSUsIDclKSBjbGFtcCgyNSUsIDM5JSwgMWZyKSBjbGFtcCgyNSUsIDM5JSwgMWZyKSBjbGFtcCgyNSUsIDM5JSwgMWZyKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTV2aDtcXG4gICAgcGFkZGluZy1ib3R0b206IDV2aDtcXG59XFxuXFxuLmJveF9hcHBzLCAuYm94X2VudHJlZXMsIC5ib3hfZGVzc2VydHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA1MCUpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA1MCUpO1xcbn1cXG5cXG4uYm94X2FwcHMgaW1nLCAuYm94X2VudHJlZXMgaW1nLCAuYm94X2Rlc3NlcnRzIGltZyB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogOTguOCU7XFxuICAgIGhlaWdodDogMjFyZW07XFxufVxcblxcbmRpdltpZF49XFxcImVudF9cXFwiXSwgZGl2W2lkXj1cXFwiYXBwX1xcXCJdLCBkaXZbaWRePVxcXCJkZXNzX1xcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMC4ycmVtIDAuNHJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMC4ycmVtIGF1dG87XFxuICAgIG1pbi13aWR0aDogNTUlO1xcbiAgICBtYXgtd2lkdGg6IDY1JTtcXG59XFxuXFxuZGl2W2lkXj1cXFwiYXBwYm94X1xcXCJdLCBkaXZbaWRePVxcXCJlbnRib3hfXFxcIl0sIGRpdltpZF49XFxcImRlc3Nib3hfXFxcIl0ge1xcbiAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5kaXZbaWRePVxcXCJhcHBib3hfXFxcIl06aG92ZXIsIGRpdltpZF49XFxcImVudGJveF9cXFwiXTpob3ZlciwgZGl2W2lkXj1cXFwiZGVzc2JveF9cXFwiXTpob3ZlciB7XFxuICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCByZ2IoMjMwLCAwLCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBhbmltYXRpb24tbmFtZTogY2hhbmdlQ29sb3I7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xcbn1cXG5cXG5kaXZbY2xhc3MqPVxcXCJfcDJcXFwiXSA+IGRpdiB7ICAgIFxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5kaXZbY2xhc3MqPVxcXCJfcDJcXFwiXSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zZWN0aW9uXzFfcDIge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5zZWN0aW9uXzJfcDIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5zZWN0aW9uXzNfcDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG59XFxuXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuICBcXG5kaXZbaWRePVxcXCJvdmVybGF5YXBwX3dyYXBfXFxcIl0sIGRpdltpZF49XFxcIm92ZXJsYXllbnRfd3JhcF9cXFwiXSwgZGl2W2lkXj1cXFwib3ZlcmxheWRlc3Nfd3JhcF9cXFwiXSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM2LCA2MiwgMjA2LCAwLjYpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycywgdmlzaWJpbGl0eSAuMnM7XFxufVxcbiAgXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXTpob3ZlciBkaXZbaWRePVxcXCJvdmVybGF5YXBwX3dyYXBfXFxcIl0sXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXTpob3ZlciBkaXZbaWRePVxcXCJvdmVybGF5ZW50X3dyYXBfXFxcIl0sXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXTpob3ZlciBkaXZbaWRePVxcXCJvdmVybGF5ZGVzc193cmFwX1xcXCJdIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuICBcXG5kaXZbaWRePVxcXCJvdmVybGF5YXBwX1xcXCJdLCBkaXZbaWRePVxcXCJvdmVybGF5ZW50X1xcXCJdLCBkaXZbaWRePVxcXCJvdmVybGF5ZGVzc19cXFwiXSB7XFxuICAgIHRyYW5zaXRpb246IC4ycztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFlbSk7XFxufVxcbiAgXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXTpob3ZlciBkaXZbaWRePVxcXCJvdmVybGF5YXBwX1xcXCJdLFxcbmRpdltpZF49XFxcImltZ3dyYXBwZXJfXFxcIl06aG92ZXIgZGl2W2lkXj1cXFwib3ZlcmxheWVudF9cXFwiXSxcXG5kaXZbaWRePVxcXCJpbWd3cmFwcGVyX1xcXCJdOmhvdmVyIGRpdltpZF49XFxcIm92ZXJsYXlkZXNzX1xcXCJdIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG5cXG5kaXYjbG9uZ2Zvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyg2cHggKyAuNXZ3KTtcXG4gICAgbWFyZ2luOiAwLjJyZW0sIDAuNHJlbTtcXG59XFxuXFxuLyp1bmRlcm5lYXRoIGlzIHBhZ2UzTG9hZCBDU1MqL1xcblxcbi5iaWdnZXN0X2JveF8zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1dmggcmVwZWF0KDMsIDFmcik7XFxuICAgIG1hcmdpbi1ib3R0b206IC01dmg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1dmg7XFxufVxcblxcbmRpdltjbGFzc149XFxcImNvbnRhY3RzZXBcXFwiXSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVhZGxpbmVyX2JveF8zIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJdGltJywgY3Vyc2l2ZTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5zZWN0aW9uXzFfcDMge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5zZWN0aW9uXzJfcDMge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5zZWN0aW9uXzNfcDMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwibGVmdG9mXFxcIl0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0O1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJib3hjb250YWN0X1xcXCJdIHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgb3BhY2l0eTogMC44NTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5oMltjbGFzc149XFxcInRpdGxlX3BcXFwiXSB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMCAwLjJyZW07XFxufVxcblxcbmRpdltjbGFzc149XFxcImRldGFpbHNQXFxcIl0ge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW46IDAgMC4ycmVtO1xcbn1cXG5cXG4vKlBob25lIENTUyovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBkaXYudG9waGVhZGVyIHtcXG4gICAgICAgIGhlaWdodDogMTJ2aDtcXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcXG4gICAgfVxcbiAgICAuaGVhZGxpbmVyX2JveCwgLmhlYWRsaW5lcl9ib3hfMiB7XFxuICAgICAgICBtYXJnaW46IDFyZW0gMnJlbSAwIDJyZW07XFxuICAgIH1cXG4gICAgLmJpZ2dlc3RfYm94LCAuYmlnZ2VzdF9ib3hfMiB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuICAgIH1cXG4gICAgLmJpZ2dlc3RfYm94XzMge1xcbiAgICAgICAgZ2FwOiAxcmVtO1xcbiAgICB9XFxuICAgIC5zZWN0aW9uXzEsIC5zZWN0aW9uXzIsIC5zZWN0aW9uXzMsIFxcbiAgICBkaXZbY2xhc3NePVxcXCJncmlkX3NlcF9cXFwiXSB7XFxuICAgICAgICBtaW4td2lkdGg6IDYwJTtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICBkaXZbaWRePVxcXCJhcHBib3hfXFxcIl0sIGRpdltpZF49XFxcImVudGJveF9cXFwiXSwgZGl2W2lkXj1cXFwiZGVzc2JveF9cXFwiXSB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG4gICAgZGl2W2NsYXNzXj1cXFwiZ3JpZF9zZXBfXFxcIl0ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgZGl2LnNlY3Rpb25fMV9wMiwgZGl2LnNlY3Rpb25fMl9wMiwgZGl2LnNlY3Rpb25fM19wMiB7XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICB9XFxuICAgIGgyW2NsYXNzXj1cXFwidGl0bGVcXFwiXSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIH1cXG4gICAgZGl2W2lkXj1cXFwiYXBwYm94X1xcXCJdOmhvdmVyLCBkaXZbaWRePVxcXCJlbnRib3hfXFxcIl06aG92ZXIsIGRpdltpZF49XFxcImRlc3Nib3hfXFxcIl06aG92ZXIge1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgfVxcbiAgICBkaXZbaWRePVxcXCJlbnRfXFxcIl0sIGRpdltpZF49XFxcImFwcF9cXFwiXSwgZGl2W2lkXj1cXFwiZGVzc19cXFwiXSB7XFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMSU7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgLmJveF9hcHBzIGltZywgLmJveF9lbnRyZWVzIGltZywgLmJveF9kZXNzZXJ0cyBpbWcge1xcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgICB3aWR0aDogOTguOCU7XFxuICAgICAgICBoZWlnaHQ6IDEycmVtO1xcbiAgICB9XFxuICAgIC5ib3hfYXBwcywgLmJveF9lbnRyZWVzLCAuYm94X2Rlc3NlcnRzIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBnYXA6IDAuNHJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDUwJSk7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA1MCUpO1xcbiAgICB9XFxuICAgIGRpdltpZF49XFxcIm92ZXJsYXlhcHBfd3JhcF9cXFwiXSwgZGl2W2lkXj1cXFwib3ZlcmxheWVudF93cmFwX1xcXCJdLCBkaXZbaWRePVxcXCJvdmVybGF5ZGVzc193cmFwX1xcXCJdIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgICB9XFxuICAgIGRpdltjbGFzc149XFxcImxlZnRvZlxcXCJdID4gaDIge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxuICAgIH1cXG4gICAgZGl2W2NsYXNzXj1cXFwiY29udGFjdHNlcF8zXFxcIl0ge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgfVxcbiAgICBpbWcge1xcbiAgICAgICAgd2lkdGg6IDZyZW07XFxuICAgICAgICBoZWlnaHQ6IDZyZW07XFxuICAgIH1cXG4gICAgLmJvdHRvbV9mb290IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYyg2LjRweCArIC41dncpO1xcbiAgICB9XFxuICAgICNob3ZlclRleHQge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAjY2xpY2tUZXh0IHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMXB4ICsgLjV2dyk7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsU0FBUztJQUNULGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSx3Q0FBd0M7SUFDNUM7SUFDQTtRQUNJLHVDQUF1QztJQUMzQztJQUNBO1FBQ0ksc0NBQXNDO0lBQzFDO0lBQ0E7UUFDSSx1Q0FBdUM7SUFDM0M7QUFDSjs7QUFFQTtJQUNJLHdDQUF3Qzs7SUFFeEMsMkJBQTJCO0lBQzNCLG1DQUFtQztJQUNuQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFFBQVE7SUFDUixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFB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QkFBaUI7UUFDakIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsZUFBZTtRQUNmLGFBQWE7UUFDYixxQkFBcUI7UUFDckIsZUFBZTtRQUNmLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLFdBQVc7UUFDWCxlQUFlO1FBQ2YscUNBQXFDO1FBQ3JDLGtDQUFrQztJQUN0QztJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osVUFBVTtRQUNWLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsNEJBQTRCO1FBQzVCLG1CQUFtQjtJQUN2QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUl0aW0mZmFtaWx5PVBhcHJpa2EmZmFtaWx5PVF1YW50aWNvOml0YWxAMSZmYW1pbHk9UXVpY2tzYW5kJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUGFwcmlrYScsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMC4zNXJlbTtcXG4gICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIGJsYWNrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbkBrZXlmcmFtZXMgY2hhbmdlQ29sb3Ige1xcbiAgICAwJSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDE4MSwgMTQxLCAyNTUpO1xcbiAgICB9XFxuICAgIDI1JSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDI1NSwgNDIsIDIxMik7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCByZ2IoMjQ5LCA0MSwgNjIpO1xcbiAgICB9XFxuICAgIDc1JSB7XFxuICAgICAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDI1NSwgNDIsIDIxMik7XFxuICAgIH1cXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwidG9wX1xcXCJdOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYigxNTgsIDEwNSwgMjU1KTtcXG5cXG4gICAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUNvbG9yO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwidG9wX1xcXCJdOjpiZWZvcmUsIGRpdltjbGFzc149XFxcInRvcF9cXFwiXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogYXF1YW1hcmluZTtcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwidG9wX1xcXCJdOjpiZWZvcmUge1xcbiAgICB0b3A6IC0wLjNlbTsgXFxuICAgIGJvdHRvbTogLTAuM2VtO1xcbiAgICBsZWZ0OiAxZW07XFxuICAgIHJpZ2h0OiAxZW07XFxufVxcblxcbmRpdltjbGFzc149XFxcInRvcF9cXFwiXTo6YWZ0ZXIge1xcbiAgICBsZWZ0OiAtMC4zZW07XFxuICAgIHJpZ2h0OiAtMC4zZW07XFxuICAgIHRvcDogMWVtO1xcbiAgICBib3R0b206IDFlbTtcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwiY29ybmVyX1xcXCJdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udG9waGVhZGVyIHtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA5dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcbi5ib3R0b21fZm9vdCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTgsIDc0LCAyNTUpO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnVuZGVyX3RvcGhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYmlnZ2VzdF9ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYmFja2dyb3VuZC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2xhbXAoMjAlLCAyMiUsIDI3JSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogY2xhbXAoMTIlLCAyMCUsIDIxJSkgY2xhbXAoMjIlLCAyOCUsIDFmcikgY2xhbXAoMjIlLCAyOCUsIDFmcikgY2xhbXAoMTIlLCAyMCUsIDIxJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtNXZoO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXZoO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJzZWN0aW9uXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMC44NTtcXG4gICAgbWFyZ2luLXRvcDoxcmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJzZWN0aW9uXFxcIl0gPiBkaXYge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xcbn1cXG5cXG4jbWVudV90aXBfYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2hvdmVyVGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDAuM3JlbTtcXG59XFxuXFxuI2NsaWNrVGV4dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oZWFkbGluZXJfYm94IHtcXG4gICAgZm9udC1mYW1pbHk6ICdJdGltJywgY3Vyc2l2ZTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbi5zZWN0aW9uXzEge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5zZWN0aW9uXzEgPiBkaXYge1xcbiAgICBwYWRkaW5nOiAwLjJyZW0gMS4ycmVtO1xcbn1cXG5cXG4uc2VjdGlvbl8yIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uc2VjdGlvbl8zIHtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJdGltJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG4udGl0bGUtdGV4dCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUXVhbnRpY28nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmltZyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbn1cXG5cXG5hLCBhOmxpbmssIGE6dmlzaXRlZCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gICAgY29sb3I6cmdiKDI0OCwgMTY1LCAyNTUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuYTphY3RpdmUge1xcbiAgICBjb2xvcjphcXVhbWFyaW5lO1xcbn1cXG5cXG4vKnVuZGVybmVhdGggaXMgcGFnZTJMb2FkIENTUyovXFxuXFxuLmhlYWRsaW5lcl9ib3hfMiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSXRpbScsIGN1cnNpdmU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgb3BhY2l0eTogMC44NTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG5oMltjbGFzc149XFxcInRpdGxlXFxcIl0ge1xcbiAgICBmb250LWZhbWlseTogJ1F1YW50aWNvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYmlnZ2VzdF9ib3hfMiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9iYWNrZ3JvdW5kLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2xhbXAoMjAlLCAyNSUsIDI4JSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogY2xhbXAoNCUsIDUlLCA3JSkgY2xhbXAoMjUlLCAzOSUsIDFmcikgY2xhbXAoMjUlLCAzOSUsIDFmcikgY2xhbXAoMjUlLCAzOSUsIDFmcik7XFxuICAgIG1hcmdpbi1ib3R0b206IC01dmg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1dmg7XFxufVxcblxcbi5ib3hfYXBwcywgLmJveF9lbnRyZWVzLCAuYm94X2Rlc3NlcnRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNTAlKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNTAlKTtcXG59XFxuXFxuLmJveF9hcHBzIGltZywgLmJveF9lbnRyZWVzIGltZywgLmJveF9kZXNzZXJ0cyBpbWcge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgd2lkdGg6IDk4LjglO1xcbiAgICBoZWlnaHQ6IDIxcmVtO1xcbn1cXG5cXG5kaXZbaWRePVxcXCJlbnRfXFxcIl0sIGRpdltpZF49XFxcImFwcF9cXFwiXSwgZGl2W2lkXj1cXFwiZGVzc19cXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDAuMnJlbSBhdXRvO1xcbiAgICBtaW4td2lkdGg6IDU1JTtcXG4gICAgbWF4LXdpZHRoOiA2NSU7XFxufVxcblxcbmRpdltpZF49XFxcImFwcGJveF9cXFwiXSwgZGl2W2lkXj1cXFwiZW50Ym94X1xcXCJdLCBkaXZbaWRePVxcXCJkZXNzYm94X1xcXCJdIHtcXG4gICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuZGl2W2lkXj1cXFwiYXBwYm94X1xcXCJdOmhvdmVyLCBkaXZbaWRePVxcXCJlbnRib3hfXFxcIl06aG92ZXIsIGRpdltpZF49XFxcImRlc3Nib3hfXFxcIl06aG92ZXIge1xcbiAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiKDIzMCwgMCwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUNvbG9yO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXG59XFxuXFxuZGl2W2NsYXNzKj1cXFwiX3AyXFxcIl0gPiBkaXYgeyAgICBcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuZGl2W2NsYXNzKj1cXFwiX3AyXFxcIl0ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2VjdGlvbl8xX3AyIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uc2VjdGlvbl8yX3AyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uc2VjdGlvbl8zX3AyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxufVxcblxcbmRpdltpZF49XFxcImltZ3dyYXBwZXJfXFxcIl0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiAgXFxuZGl2W2lkXj1cXFwib3ZlcmxheWFwcF93cmFwX1xcXCJdLCBkaXZbaWRePVxcXCJvdmVybGF5ZW50X3dyYXBfXFxcIl0sIGRpdltpZF49XFxcIm92ZXJsYXlkZXNzX3dyYXBfXFxcIl0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgzNiwgNjIsIDIwNiwgMC42KTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMsIHZpc2liaWxpdHkgLjJzO1xcbn1cXG4gIFxcbmRpdltpZF49XFxcImltZ3dyYXBwZXJfXFxcIl06aG92ZXIgZGl2W2lkXj1cXFwib3ZlcmxheWFwcF93cmFwX1xcXCJdLFxcbmRpdltpZF49XFxcImltZ3dyYXBwZXJfXFxcIl06aG92ZXIgZGl2W2lkXj1cXFwib3ZlcmxheWVudF93cmFwX1xcXCJdLFxcbmRpdltpZF49XFxcImltZ3dyYXBwZXJfXFxcIl06aG92ZXIgZGl2W2lkXj1cXFwib3ZlcmxheWRlc3Nfd3JhcF9cXFwiXSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbiAgXFxuZGl2W2lkXj1cXFwib3ZlcmxheWFwcF9cXFwiXSwgZGl2W2lkXj1cXFwib3ZlcmxheWVudF9cXFwiXSwgZGl2W2lkXj1cXFwib3ZlcmxheWRlc3NfXFxcIl0ge1xcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxZW0pO1xcbn1cXG4gIFxcbmRpdltpZF49XFxcImltZ3dyYXBwZXJfXFxcIl06aG92ZXIgZGl2W2lkXj1cXFwib3ZlcmxheWFwcF9cXFwiXSxcXG5kaXZbaWRePVxcXCJpbWd3cmFwcGVyX1xcXCJdOmhvdmVyIGRpdltpZF49XFxcIm92ZXJsYXllbnRfXFxcIl0sXFxuZGl2W2lkXj1cXFwiaW1nd3JhcHBlcl9cXFwiXTpob3ZlciBkaXZbaWRePVxcXCJvdmVybGF5ZGVzc19cXFwiXSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuXFxuZGl2I2xvbmdmb290ZXIge1xcbiAgICBmb250LXNpemU6IGNhbGMoNnB4ICsgLjV2dyk7XFxuICAgIG1hcmdpbjogMC4ycmVtLCAwLjRyZW07XFxufVxcblxcbi8qdW5kZXJuZWF0aCBpcyBwYWdlM0xvYWQgQ1NTKi9cXG5cXG4uYmlnZ2VzdF9ib3hfMyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9iYWNrZ3JvdW5kLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTV2aCByZXBlYXQoMywgMWZyKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTV2aDtcXG4gICAgcGFkZGluZy1ib3R0b206IDV2aDtcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwiY29udGFjdHNlcFxcXCJdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oZWFkbGluZXJfYm94XzMge1xcbiAgICBmb250LWZhbWlseTogJ0l0aW0nLCBjdXJzaXZlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuODU7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnNlY3Rpb25fMV9wMyB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLnNlY3Rpb25fMl9wMyB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLnNlY3Rpb25fM19wMyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cXG5kaXZbY2xhc3NePVxcXCJsZWZ0b2ZcXFwiXSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IGxlZnQ7XFxufVxcblxcbmRpdltjbGFzc149XFxcImJveGNvbnRhY3RfXFxcIl0ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmgyW2NsYXNzXj1cXFwidGl0bGVfcFxcXCJdIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwIDAuMnJlbTtcXG59XFxuXFxuZGl2W2NsYXNzXj1cXFwiZGV0YWlsc1BcXFwiXSB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbjogMCAwLjJyZW07XFxufVxcblxcbi8qUGhvbmUgQ1NTKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIGRpdi50b3BoZWFkZXIge1xcbiAgICAgICAgaGVpZ2h0OiAxMnZoO1xcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xcbiAgICB9XFxuICAgIC5oZWFkbGluZXJfYm94LCAuaGVhZGxpbmVyX2JveF8yIHtcXG4gICAgICAgIG1hcmdpbjogMXJlbSAycmVtIDAgMnJlbTtcXG4gICAgfVxcbiAgICAuYmlnZ2VzdF9ib3gsIC5iaWdnZXN0X2JveF8yIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG4gICAgfVxcbiAgICAuYmlnZ2VzdF9ib3hfMyB7XFxuICAgICAgICBnYXA6IDFyZW07XFxuICAgIH1cXG4gICAgLnNlY3Rpb25fMSwgLnNlY3Rpb25fMiwgLnNlY3Rpb25fMywgXFxuICAgIGRpdltjbGFzc149XFxcImdyaWRfc2VwX1xcXCJdIHtcXG4gICAgICAgIG1pbi13aWR0aDogNjAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIGRpdltpZF49XFxcImFwcGJveF9cXFwiXSwgZGl2W2lkXj1cXFwiZW50Ym94X1xcXCJdLCBkaXZbaWRePVxcXCJkZXNzYm94X1xcXCJdIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbiAgICBkaXZbY2xhc3NePVxcXCJncmlkX3NlcF9cXFwiXSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICBkaXYuc2VjdGlvbl8xX3AyLCBkaXYuc2VjdGlvbl8yX3AyLCBkaXYuc2VjdGlvbl8zX3AyIHtcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgIH1cXG4gICAgaDJbY2xhc3NePVxcXCJ0aXRsZVxcXCJdIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgfVxcbiAgICBkaXZbaWRePVxcXCJhcHBib3hfXFxcIl06aG92ZXIsIGRpdltpZF49XFxcImVudGJveF9cXFwiXTpob3ZlciwgZGl2W2lkXj1cXFwiZGVzc2JveF9cXFwiXTpob3ZlciB7XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICB9XFxuICAgIGRpdltpZF49XFxcImVudF9cXFwiXSwgZGl2W2lkXj1cXFwiYXBwX1xcXCJdLCBkaXZbaWRePVxcXCJkZXNzX1xcXCJdIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDExJTtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICAuYm94X2FwcHMgaW1nLCAuYm94X2VudHJlZXMgaW1nLCAuYm94X2Rlc3NlcnRzIGltZyB7XFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgIHdpZHRoOiA5OC44JTtcXG4gICAgICAgIGhlaWdodDogMTJyZW07XFxuICAgIH1cXG4gICAgLmJveF9hcHBzLCAuYm94X2VudHJlZXMsIC5ib3hfZGVzc2VydHMge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdhcDogMC40cmVtO1xcbiAgICAgICAgcGFkZGluZzogMC4zcmVtO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNTAlKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDUwJSk7XFxuICAgIH1cXG4gICAgZGl2W2lkXj1cXFwib3ZlcmxheWFwcF93cmFwX1xcXCJdLCBkaXZbaWRePVxcXCJvdmVybGF5ZW50X3dyYXBfXFxcIl0sIGRpdltpZF49XFxcIm92ZXJsYXlkZXNzX3dyYXBfXFxcIl0ge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIH1cXG4gICAgZGl2W2NsYXNzXj1cXFwibGVmdG9mXFxcIl0gPiBoMiB7XFxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXG4gICAgfVxcbiAgICBkaXZbY2xhc3NePVxcXCJjb250YWN0c2VwXzNcXFwiXSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICB9XFxuICAgIGltZyB7XFxuICAgICAgICB3aWR0aDogNnJlbTtcXG4gICAgICAgIGhlaWdodDogNnJlbTtcXG4gICAgfVxcbiAgICAuYm90dG9tX2Zvb3Qge1xcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDYuNHB4ICsgLjV2dyk7XFxuICAgIH1cXG4gICAgI2hvdmVyVGV4dCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgICNjbGlja1RleHQge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDExcHggKyAuNXZ3KTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHBhZ2VMb2FkIGZyb20gJy4vcGFnZWxvYWQuanMnO1xuaW1wb3J0IHBhZ2UyTG9hZCBmcm9tICcuL3BhZ2UybG9hZC5qcyc7XG5pbXBvcnQgcGFnZTNMb2FkIGZyb20gJy4vcGFnZTNsb2FkLmpzJztcbmltcG9ydCB0YWJTd2l0Y2hDb2RlIGZyb20gJy4vdGFic3dpdGNoLmpzJztcbiAgXG5wYWdlTG9hZCgpO1xuXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XG4gICAgdGFiU3dpdGNoQ29kZSgpO1xufSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB0YWJTd2l0Y2hDb2RlKCk7XG4gICAgfSk7XG59XG5cblxuLyogY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b3BfaG9tZVwiKVswXTtcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJwYWdlMSB3b3Jrc1wiKTtcbiAgICBjb25zdCBhbGxUaGVDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXG4gICAgYWxsVGhlQ29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIHBhZ2VMb2FkKCk7XG59KVxuXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvcF9tZW51XCIpWzBdO1xubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInBhZ2UyIHdvcmtzXCIpO1xuICAgIGNvbnN0IGFsbFRoZUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcbiAgICBhbGxUaGVDb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgcGFnZTJMb2FkKCk7XG59KVxuXG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvcF9jb250YWN0XCIpWzBdO1xuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInBhZ2UzIHdvcmtzXCIpO1xuICAgIGNvbnN0IGFsbFRoZUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcbiAgICBhbGxUaGVDb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgcGFnZTNMb2FkKCk7XG59KSAqLyIsImltcG9ydCBJY29uIGZyb20gJy4vY29vay5qcGcnO1xuaW1wb3J0IEJydXNzIGZyb20gJy4vYnJ1c3NlbHNwcm91dHMuanBnJztcbmltcG9ydCBCdXJnZXIgZnJvbSAnLi9idXJnZXIuanBnJztcbmltcG9ydCBDaW5uIGZyb20gJy4vY2lubmFtb25yb2xsLmpwZyc7XG5pbXBvcnQgQ29va2llIGZyb20gJy4vY29va2llLmpwZyc7XG5pbXBvcnQgRWdncm9sbCBmcm9tICcuL2VnZ3JvbGxzLmpwZyc7XG5pbXBvcnQgRnJlbmNoIGZyb20gJy4vZnJlbmNodG9hc3QuanBnJztcbmltcG9ydCBJY2VjcmVhbSBmcm9tICcuL2ljZWNyZWFtLmpwZyc7XG5pbXBvcnQgUGhvIGZyb20gJy4vcGhvLmpwZyc7XG5pbXBvcnQgUGl6emEgZnJvbSAnLi9waXp6YS5qcGcnO1xuaW1wb3J0IFBva2UgZnJvbSAnLi9wb2tlLmpwZyc7XG5pbXBvcnQgU291cCBmcm9tICcuL3NvdXAuanBnJztcbmltcG9ydCBTdGVhayBmcm9tICcuL3N0ZWFrc2tld2Vycy5qcGcnO1xuaW1wb3J0IHRhYlN3aXRjaENvZGUgZnJvbSAnLi90YWJzd2l0Y2guanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlMkxvYWQoKSB7XG5cbiAgICBjb25zdCBjb29rSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNvb2tJY29uLnNyYyA9IEljb247XG4gICAgY29uc3QgYnJ1c3MgPSBuZXcgSW1hZ2UoKTtcbiAgICBicnVzcy5zcmMgPSBCcnVzcztcbiAgICBjb25zdCBidXJnID0gbmV3IEltYWdlKCk7XG4gICAgYnVyZy5zcmMgPSBCdXJnZXI7XG4gICAgY29uc3QgY2lubiA9IG5ldyBJbWFnZSgpO1xuICAgIGNpbm4uc3JjID0gQ2lubjtcbiAgICBjb25zdCBjb29raWUgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb29raWUuc3JjID0gQ29va2llO1xuICAgIGNvbnN0IGVnZyA9IG5ldyBJbWFnZSgpO1xuICAgIGVnZy5zcmMgPSBFZ2dyb2xsO1xuICAgIGNvbnN0IGZyZW5jaCA9IG5ldyBJbWFnZSgpO1xuICAgIGZyZW5jaC5zcmMgPSBGcmVuY2g7XG4gICAgY29uc3QgaWNlID0gbmV3IEltYWdlKCk7XG4gICAgaWNlLnNyYyA9IEljZWNyZWFtO1xuICAgIGNvbnN0IHBobyA9IG5ldyBJbWFnZSgpO1xuICAgIHBoby5zcmMgPSBQaG87XG4gICAgY29uc3QgcGl6emEgPSBuZXcgSW1hZ2UoKTtcbiAgICBwaXp6YS5zcmMgPSBQaXp6YTtcbiAgICBjb25zdCBwb2tlID0gbmV3IEltYWdlKCk7XG4gICAgcG9rZS5zcmMgPSBQb2tlO1xuICAgIGNvbnN0IHNvdXAgPSBuZXcgSW1hZ2UoKTtcbiAgICBzb3VwLnNyYyA9IFNvdXA7XG4gICAgY29uc3Qgc3RlYWsgPSBuZXcgSW1hZ2UoKTtcbiAgICBzdGVhay5zcmMgPSBTdGVhaztcblxuICAgIGNvbnN0IGhlYWRsaW5lcmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGxpbmVyYm94LmNsYXNzTmFtZSA9IFwiaGVhZGxpbmVyX2JveF8yXCI7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gXCJ0b3BoZWFkZXJcIjtcbiAgICBjb25zdCB1bmRlcmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdW5kZXJoZWFkZXIuY2xhc3NOYW1lID0gXCJ1bmRlcl90b3BoZWFkZXJcIjtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImJpZ2dlc3RfYm94XzJcIjtcbiAgICBjb25zdCBzZWN0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VjdGlvbjEuY2xhc3NOYW1lID0gXCJzZWN0aW9uXzFfcDJcIjtcbiAgICBjb25zdCBzZWN0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VjdGlvbjIuY2xhc3NOYW1lID0gXCJzZWN0aW9uXzJfcDJcIjtcbiAgICBjb25zdCBzZWN0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VjdGlvbjMuY2xhc3NOYW1lID0gXCJzZWN0aW9uXzNfcDJcIjtcblxuICAgIGNvbnN0IGhlYWRlcl9tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfbWVudS5jbGFzc05hbWUgPSBcInRvcF9tZW51XCI7XG4gICAgY29uc3QgbWVudV90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51X3RleHQuY2xhc3NOYW1lID0gXCJjb3JuZXJfdGV4dG1lbnVcIjtcbiAgICBtZW51X3RleHQuaW5uZXJIVE1MID0gXCJNZW51XCI7XG5cbiAgICBjb25zdCBoZWFkZXJfaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyX2hvbWUuY2xhc3NOYW1lID0gXCJ0b3BfaG9tZVwiO1xuICAgIGNvbnN0IGhvbWVfdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZV90ZXh0LmNsYXNzTmFtZSA9IFwiY29ybmVyX3RleHRob21lXCI7XG4gICAgaG9tZV90ZXh0LmlubmVySFRNTCA9IFwiSG9tZVwiO1xuXG4gICAgY29uc3QgZm9vdGVyX2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyX2JveC5jbGFzc05hbWUgPSBcImJvdHRvbV9mb290XCI7XG5cbiAgICBjb25zdCBmb290ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXIxLmlkID0gXCJsb25nZm9vdGVyXCI7XG4gICAgZm9vdGVyMS5pbm5lckhUTUwgPSAnUGhvdG9zIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AcmFwaGFlbGxvdmFza2k/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+UmFwaGFlbCBMb3Zhc2tpPC9hPiwmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGFtaXJfdl9hbGk/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+YW1pcmFsaSBtaXJoYXNoZW1pYW48L2E+LCZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9Ab3RqZXA/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+WW9zZXAgU3VnaWFydG88L2E+LCZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AcGhvdG9waG90b3N0b2NrP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPktpcmlsbCBUb25raWtoPC9hPiwmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQHBob3RvdGFzdHlmb29kP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPkZvb2QgUGhvdG9ncmFwaGVyPC9hPiwmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vamEvQGF1cmVsX19sZW5zP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPkF1csOpbGllbiBMZW1hc3Nvbi1UaMOpb2JhbGQ8L2E+LCZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9Aa29yaWU/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+S29yaWUgQ3VsbDwvYT4sJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0Btb25pcWE/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+TW9uaWthIEdyYWJrb3dza2E8L2E+LCZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AbWlyYWNsZXR3ZW50eW9uZT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5Kb3NlcGggR29uemFsZXo8L2E+LCZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9Aa3luZGFsbHJhbWlyZXo/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+S3luZGFsbCBSYW1pcmV6PC9hPiwmbmJzcDsmJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BzZWJhc3RpYW5jb21hbj91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5TZWJhc3RpYW4gQ29tYW4gUGhvdG9ncmFwaHk8L2E+IG9uIFVuc3BsYXNoJztcblxuXG4gICAgY29uc3QgaGVhZGVyX2NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcl9jb250YWN0LmNsYXNzTmFtZSA9IFwidG9wX2NvbnRhY3RcIjtcbiAgICBjb25zdCBjb250YWN0X3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RfdGV4dC5jbGFzc05hbWUgPSBcImNvcm5lcl90ZXh0Y29udGFjdFwiO1xuICAgIGNvbnRhY3RfdGV4dC5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcblxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRsaW5lLmNsYXNzTmFtZSA9IFwiaGVhZGxpbmVyXCJcbiAgICBoZWFkbGluZS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcbiAgICBjb25zdCBtZW51QW5kVGlwQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51QW5kVGlwQm94LmlkID0gXCJtZW51X3RpcF9ib3hcIjtcbiAgICBjb25zdCBob3ZlclRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG92ZXJUaXAuaWQgPSBcImhvdmVyVGV4dFwiO1xuICAgIGhvdmVyVGlwLmlubmVySFRNTCA9IFwiRm9yIG1vcmUgaW5mb3JtYXRpb24sIDxicj5wbGVhc2UgaG92ZXIgb3ZlciB0aGUgaXRlbSFcIlxuICAgIGNvbnN0IGNsaWNrVGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjbGlja1RpcC5pZCA9IFwiY2xpY2tUZXh0XCI7XG4gICAgY2xpY2tUaXAuaW5uZXJIVE1MID0gXCJGb3IgbW9yZSBpbmZvcm1hdGlvbiwgPGJyPnBsZWFzZSBjbGljayBvbiB0aGUgaXRlbSFcIlxuXG4gICAgY29uc3QgZ3JpZF9hcHBfc2VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncmlkX2FwcF9zZXAuY2xhc3NOYW1lID0gXCJncmlkX3NlcF9hcHBcIjtcbiAgICBjb25zdCBncmlkX2VudF9zZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdyaWRfZW50X3NlcC5jbGFzc05hbWUgPSBcImdyaWRfc2VwX2VudFwiO1xuICAgIGNvbnN0IGdyaWRfZGVzc19zZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdyaWRfZGVzc19zZXAuY2xhc3NOYW1lID0gXCJncmlkX3NlcF9kZXNzXCI7XG5cbiAgICBjb25zdCBhcHBfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhcHBfYm94LmNsYXNzTmFtZSA9IFwiYm94X2FwcHNcIjtcbiAgICBjb25zdCBlbnRyZWVzX2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW50cmVlc19ib3guY2xhc3NOYW1lID0gXCJib3hfZW50cmVlc1wiO1xuICAgIGNvbnN0IGRlc3NlcnRzX2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzc2VydHNfYm94LmNsYXNzTmFtZSA9IFwiYm94X2Rlc3NlcnRzXCI7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDU7IGkrKykge1xuICAgICAgICBsZXQgYm94ZXNfczEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3hlc19zMS5pZCA9IFwiYXBwYm94X1wiICsgaTtcbiAgICAgICAgbGV0IGFwcF9pbmRpdmlkdWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYXBwX2luZGl2aWR1YWwuaWQgPSBcImFwcF9cIiArIGk7XG4gICAgICAgIGxldCBvdmVybGF5X2FwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG92ZXJsYXlfYXBwLmlkID0gXCJvdmVybGF5YXBwX1wiICsgaTtcbiAgICAgICAgbGV0IG92ZXJsYXlfYXBwX3dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvdmVybGF5X2FwcF93cmFwLmlkID0gXCJvdmVybGF5YXBwX3dyYXBfXCIgKyBpO1xuICAgICAgICBsZXQgaW1nX3dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbWdfd3JhcC5pZCA9IFwiaW1nd3JhcHBlcl9cIiArIGk7XG5cbiAgICAgICAgYm94ZXNfczEuYXBwZW5kQ2hpbGQoYXBwX2luZGl2aWR1YWwpO1xuICAgICAgICBpbWdfd3JhcC5hcHBlbmRDaGlsZChvdmVybGF5X2FwcF93cmFwKTtcbiAgICAgICAgb3ZlcmxheV9hcHBfd3JhcC5hcHBlbmRDaGlsZChvdmVybGF5X2FwcCk7XG4gICAgICAgIGJveGVzX3MxLmFwcGVuZENoaWxkKGltZ193cmFwKTtcbiAgICAgICAgYXBwX2JveC5hcHBlbmRDaGlsZChib3hlc19zMSk7XG5cbiAgICAgICAgLyogZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBpbWd3cmFwcGVyXzEuYXBwZW5kQ2hpbGQoYnJ1c3MpO1xuICAgICAgICAgICAgaW1nd3JhcHBlcl8yLmFwcGVuZENoaWxkKHNvdXApO1xuICAgICAgICAgICAgaW1nd3JhcHBlcl8zLmFwcGVuZENoaWxkKHN0ZWFrKTtcbiAgICAgICAgICAgIGltZ3dyYXBwZXJfNC5hcHBlbmRDaGlsZChlZ2cpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBfMVwiKS5pbm5lckhUTUwgPSBcIkJydXNzZWwgU3Byb3V0c1wiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBfMlwiKS5pbm5lckhUTUwgPSBcIkRhaWx5IFNvdXBcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXzNcIikuaW5uZXJIVE1MID0gXCJTdGVhayBTa2V3ZXJzXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcF80XCIpLmlubmVySFRNTCA9IFwiRWdnIFJvbGxzXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlhcHBfMVwiKS5pbm5lckhUTUwgPSBcIkJydXNzZWwgc3Byb3V0cyBhcmUgaGVhbHRoeSBmb3IgeW91LCByaWdodD8gV3JvbmcuIE91cnMgYXJlIGZyaWVkIHdpdGggdGhlIGhpZ2hlc3QgdHJhbnMtZmF0IHBlcmNlbnQgb2lsIGluIHRoZSB1bml2ZXJzZS4gQW5kIHRoYXQncyB3aHkgdGhleSdyZSBzbyBkYXJuIGRlbGljaW91cy5cIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWFwcF8yXCIpLmlubmVySFRNTCA9IFwiVGhlIGRhaWx5IHNvdXAgaXMgc29tZXRoaW5nIG9mIGEgbXlzdGVyeSwgbWFkZSBvZiByYXJlIHBsYW50cywgYW5pbWFscywgYW5kIHVuaXF1ZSBhbGllbiBsaWZlIGZvcm1zLlwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5YXBwXzNcIikuaW5uZXJIVE1MID0gXCJPdXIgc2tld2VycyB3aWxsIGhhdmUgeW91ciBtb3V0aCB3YXRlcmluZyBiZWZvcmUgeW91IGV2ZW4gc2VlIHRoZW0hIFRyeSBvbmUgb24gZm9yIHNpemUuIE9yIHR3by4gT3IgZml2ZS4gV2UncmUgbm90IGp1ZGdpbmcuXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlhcHBfNFwiKS5pbm5lckhUTUwgPSBcIk1hZGUgaW4gdGhlIHN0eWxlIG9mIG15IG1vdGhlcmxhbmQsIHRoZXNlIFRhaXdhbmVzZSBlZ2cgcm9sbHMgd2lsbCBoYXZlIHdvbmRlcmluZyBpZiB5b3Ugc2hvdWxkIGp1c3QgaGF2ZSBtb3JlIGVnZyByb2xscyBhcyB5b3VyIGVudGlyZSBtZWFsLlwiO1xuICAgICAgICAgIH0pOyAqL1xuICAgIH1cblxuICAgIGZvciAobGV0IHggPSAxOyB4IDwgNTsgeCsrKSB7XG4gICAgICAgIGxldCBib3hlc19zMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveGVzX3MyLmlkID0gXCJlbnRib3hfXCIgKyB4O1xuICAgICAgICBsZXQgZW50X2luZGl2aWR1YWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBlbnRfaW5kaXZpZHVhbC5pZCA9IFwiZW50X1wiICsgeDtcbiAgICAgICAgbGV0IG92ZXJsYXlfZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgb3ZlcmxheV9lbnQuaWQgPSBcIm92ZXJsYXllbnRfXCIgKyB4O1xuICAgICAgICBsZXQgb3ZlcmxheV9lbnRfd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG92ZXJsYXlfZW50X3dyYXAuaWQgPSBcIm92ZXJsYXllbnRfd3JhcF9cIiArIHg7XG4gICAgICAgIGxldCBpbWdfd3JhcF9lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbWdfd3JhcF9lbnQuaWQgPSBcImltZ3dyYXBwZXJfZW50X1wiICsgeDtcblxuXG4gICAgICAgIGJveGVzX3MyLmFwcGVuZENoaWxkKGVudF9pbmRpdmlkdWFsKTtcbiAgICAgICAgaW1nX3dyYXBfZW50LmFwcGVuZENoaWxkKG92ZXJsYXlfZW50X3dyYXApO1xuICAgICAgICBvdmVybGF5X2VudF93cmFwLmFwcGVuZENoaWxkKG92ZXJsYXlfZW50KTtcbiAgICAgICAgYm94ZXNfczIuYXBwZW5kQ2hpbGQoaW1nX3dyYXBfZW50KTtcbiAgICAgICAgZW50cmVlc19ib3guYXBwZW5kQ2hpbGQoYm94ZXNfczIpO1xuXG4gICAgICAgIC8qIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgaW1nd3JhcHBlcl9lbnRfMS5hcHBlbmRDaGlsZChidXJnKTtcbiAgICAgICAgICAgIGltZ3dyYXBwZXJfZW50XzIuYXBwZW5kQ2hpbGQocGhvKTtcbiAgICAgICAgICAgIGltZ3dyYXBwZXJfZW50XzMuYXBwZW5kQ2hpbGQocG9rZSk7XG4gICAgICAgICAgICBpbWd3cmFwcGVyX2VudF80LmFwcGVuZENoaWxkKHBpenphKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW50XzFcIikuaW5uZXJIVE1MID0gXCJCYWNvbiBCdXJnZXJcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW50XzJcIikuaW5uZXJIVE1MID0gXCJQaG9cIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW50XzNcIikuaW5uZXJIVE1MID0gXCJQb2tlIEJvd2xcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW50XzRcIikuaW5uZXJIVE1MID0gXCJQaXp6YVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5ZW50XzFcIikuaW5uZXJIVE1MID0gXCJFdmVyIGhlYXJkIG9mIHNwYWNlIHBpZ3M/IFdlbGwsIG5vdyB5b3UgaGF2ZS4gT3VyIGJ1cmdlcnMgYXJlIG1hZGUgd2l0aCBpbnRlcmdhbGFjdGljIHBpZ3MgYW5kIGNvd3MgZm9yIHRoZSBtb3N0IGRlbGVjdGFibGUgcmVzdWx0cy4gVGhlIGp1aWNpbmVzcyBoZXJlIHdvdWxkIHB1dCBCaWdnaWUgU21hbGxzIHRvIHNoYW1lLlwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5ZW50XzJcIikuaW5uZXJIVE1MID0gXCJUcnkgdGhpcyBwaXBpbicgaG90IGJvd2wgb2YgcGhvIGlmIHlvdSBmZWVsIGxpa2UgeW91J3JlIGdldHRpbmcgdGhlIHNwYWNlIGNoaWxscy4gSXQgY2FuIGdldCBxdWl0ZSBjb2xkIG91dCB0aGVyZSBzbyBtYWtlIHN1cmUgeW91IHdhcm0gdXAhXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXllbnRfM1wiKS5pbm5lckhUTUwgPSBcIkZ1bGwgb2Ygb21lZ2EgZmF0dHkgYWNpZHMsIHRoaXMgYm93bCBvZiBwb2tlIHdpbGwgcmVqdXZlbmF0ZSB5b3UgaW4gd2F5cyB0aGF0IGNhbm5lZCB0dW5hIGp1c3QgY2FuJ3QuIFlvdSdsbCBmZWVsIGxpa2UgeW91J3JlIG9uIHRoZSBiZWFjaGVzIG9mIEhhd2FpaSFcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWVudF80XCIpLmlubmVySFRNTCA9IFwiWW91IGtub3cgd2hhdCB0aW1lIGl0IGlzLiBJdCdzIHBpenphIHRpbWUuIERpZyBpbiEgPGJyPiYjMTI3ODI5ICYjMTI3ODI5ICYjMTI3ODI5ICYjMTI3ODI5ICYjMTI3ODI5XCI7XG4gICAgICAgICAgfSk7ICovXG4gICAgfVxuXG4gICAgZm9yIChsZXQgeSA9IDE7IHkgPCA1OyB5KyspIHtcbiAgICAgICAgbGV0IGJveGVzX3MzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94ZXNfczMuaWQgPSBcImRlc3Nib3hfXCIgKyB5O1xuICAgICAgICBsZXQgZGVzc19pbmRpdmlkdWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGVzc19pbmRpdmlkdWFsLmlkID0gXCJkZXNzX1wiICsgeTtcbiAgICAgICAgbGV0IG92ZXJsYXlfZGVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG92ZXJsYXlfZGVzcy5pZCA9IFwib3ZlcmxheWRlc3NfXCIgKyB5O1xuICAgICAgICBsZXQgb3ZlcmxheV9kZXNzX3dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBvdmVybGF5X2Rlc3Nfd3JhcC5pZCA9IFwib3ZlcmxheWRlc3Nfd3JhcF9cIiArIHk7XG4gICAgICAgIGxldCBpbWdfd3JhcF9kZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW1nX3dyYXBfZGVzcy5pZCA9IFwiaW1nd3JhcHBlcl9kZXNzX1wiICsgeTtcblxuICAgICAgICBib3hlc19zMy5hcHBlbmRDaGlsZChkZXNzX2luZGl2aWR1YWwpO1xuICAgICAgICBpbWdfd3JhcF9kZXNzLmFwcGVuZENoaWxkKG92ZXJsYXlfZGVzc193cmFwKTtcbiAgICAgICAgb3ZlcmxheV9kZXNzX3dyYXAuYXBwZW5kQ2hpbGQob3ZlcmxheV9kZXNzKTtcbiAgICAgICAgYm94ZXNfczMuYXBwZW5kQ2hpbGQoaW1nX3dyYXBfZGVzcyk7XG4gICAgICAgIGRlc3NlcnRzX2JveC5hcHBlbmRDaGlsZChib3hlc19zMyk7XG5cbiAgICAgICAgLyogZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBpbWd3cmFwcGVyX2Rlc3NfMS5hcHBlbmRDaGlsZChmcmVuY2gpO1xuICAgICAgICAgICAgaW1nd3JhcHBlcl9kZXNzXzIuYXBwZW5kQ2hpbGQoY29va2llKTtcbiAgICAgICAgICAgIGltZ3dyYXBwZXJfZGVzc18zLmFwcGVuZENoaWxkKGljZSk7XG4gICAgICAgICAgICBpbWd3cmFwcGVyX2Rlc3NfNC5hcHBlbmRDaGlsZChjaW5uKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzc18xXCIpLmlubmVySFRNTCA9IFwiRnJlbmNoIFRvYXN0XCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc3NfMlwiKS5pbm5lckhUTUwgPSBcIkNvb2tpZXNcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzc18zXCIpLmlubmVySFRNTCA9IFwiSWNlIENyZWFtXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc3NfNFwiKS5pbm5lckhUTUwgPSBcIkNpbm5hbW9uIFJvbGxcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWRlc3NfMVwiKS5pbm5lckhUTUwgPSBcIlBlcmhhcHMgdGhlIGdyZWF0ZXN0IGJyZWFrZmFzdCBjcmVhdGlvbiBldmVyLiBXaXRoIGp1c3QgdGhlIHJpZ2h0IGFtb3VudCBvZiBjcnVuY2gsIHNvZnRuZXNzLCBhbmQgc3dlZXRuZXNzLCBvdXIgZnJlbmNoIHRvYXN0IGlzIHRoZSBwZXJmZWN0IHdheSB0byB0b3Agb2ZmIHlvdXIgbWVhbC5cIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWRlc3NfMlwiKS5pbm5lckhUTUwgPSBcIklmIHlvdSBkb24ndCBsaWtlIGEgZ29vZCBjaG9jb2xhdGUgY2hpcCBjb29raWUsIGxldCBvdXJzIGNoYW5nZSB5b3VyIG1pbmQuIFRoZSByaWNoIGZsYXZvciBhbmQgZ29vZXluZXNzIGlzIHNvbWV0aGluZyB5b3UgaGF2ZSB0byB0cnksIGF0IGxlYXN0IG9uY2UhXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlkZXNzXzNcIikuaW5uZXJIVE1MID0gXCJUaGVyZSdzIHNvbWV0aGluZyBhYm91dCBpY2UgY3JlYW0gc2Nvb3BzIG9uIGEgd2FmZmxlIGNvbmUuIFNvbWV0aGluZyBhYm91dCBvdXJzIGlzIGp1c3Qgc28gZ29vZC4gSXQncyBvbiB0aGUgdGlwIG9mIG91ciB0b25ndWVzLi4uXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlkZXNzXzRcIikuaW5uZXJIVE1MID0gXCJBIGdvb2Qgb2xlIGNpbm5hbW9uIHJvbGwgd2lsbCBnZXQgeW91IGZhciBpbiBsaWZlLiBUaGlzIHdpbGwgd2FybSB0aGUgY29ja2xlcyBvZiB5b3VyIGhlYXJ0LiBPciBhdCB0aGUgdmVyeSBsZWFzdCwgeW91ciBzdG9tYWNoLlwiXG4gICAgICAgICAgfSk7ICovXG4gICAgfVxuXG4gICAgY29uc3QgYXBwZXRpemVyc190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBhcHBldGl6ZXJzX3RpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVfYXBwc1wiO1xuICAgIGFwcGV0aXplcnNfdGl0bGUuaW5uZXJIVE1MID0gXCJBcHBldGl6ZXJzXCI7XG5cbiAgICBjb25zdCBlbnRyZWVzX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGVudHJlZXNfdGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZV9lbnRyZWVzXCI7XG4gICAgZW50cmVlc190aXRsZS5pbm5lckhUTUwgPSBcIkVudHJlZXNcIjtcblxuICAgIGNvbnN0IGRlc3NlcnRzX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGRlc3NlcnRzX3RpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVfZGVzc2VydHNcIjtcbiAgICBkZXNzZXJ0c190aXRsZS5pbm5lckhUTUwgPSBcIkRlc3NlcnRzXCI7XG5cbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHVuZGVyaGVhZGVyKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGZvb3Rlcl9ib3gpO1xuICAgIGZvb3Rlcl9ib3guYXBwZW5kQ2hpbGQoZm9vdGVyMSk7XG4gICAgaGVhZGVyX2hvbWUuYXBwZW5kQ2hpbGQoaG9tZV90ZXh0KTtcbiAgICBoZWFkZXJfbWVudS5hcHBlbmRDaGlsZChtZW51X3RleHQpO1xuICAgIGhlYWRlcl9jb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RfdGV4dCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9ob21lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX21lbnUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJfY29udGFjdCk7XG4gICAgdW5kZXJoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmVyYm94KTtcbiAgICBoZWFkbGluZXJib3guYXBwZW5kQ2hpbGQoY29va0ljb24pO1xuICAgIGhlYWRsaW5lcmJveC5hcHBlbmRDaGlsZChtZW51QW5kVGlwQm94KTtcbiAgICBtZW51QW5kVGlwQm94LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcbiAgICBtZW51QW5kVGlwQm94LmFwcGVuZENoaWxkKGhvdmVyVGlwKTtcbiAgICBtZW51QW5kVGlwQm94LmFwcGVuZENoaWxkKGNsaWNrVGlwKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkX2FwcF9zZXApO1xuICAgIGdyaWRfYXBwX3NlcC5hcHBlbmRDaGlsZChzZWN0aW9uMSk7XG4gICAgc2VjdGlvbjEuYXBwZW5kQ2hpbGQoYXBwZXRpemVyc190aXRsZSk7XG4gICAgc2VjdGlvbjEuYXBwZW5kQ2hpbGQoYXBwX2JveCk7XG4gICAgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRfZW50X3NlcCk7XG4gICAgZ3JpZF9lbnRfc2VwLmFwcGVuZENoaWxkKHNlY3Rpb24yKTtcbiAgICBzZWN0aW9uMi5hcHBlbmRDaGlsZChlbnRyZWVzX3RpdGxlKTtcbiAgICBzZWN0aW9uMi5hcHBlbmRDaGlsZChlbnRyZWVzX2JveCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZF9kZXNzX3NlcCk7XG4gICAgZ3JpZF9kZXNzX3NlcC5hcHBlbmRDaGlsZChzZWN0aW9uMyk7XG4gICAgc2VjdGlvbjMuYXBwZW5kQ2hpbGQoZGVzc2VydHNfdGl0bGUpO1xuICAgIHNlY3Rpb24zLmFwcGVuZENoaWxkKGRlc3NlcnRzX2JveCk7XG5cbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkb2N1bWVudCBpcyBhbHJlYWR5IHJlYWR5LCBqdXN0IGV4ZWN1dGUgY29kZSBoZXJlJyk7XG4gICAgICAgIG15V2FpdDRET01Db2RlKCk7XG4gICAgICAgIHRhYlN3aXRjaENvZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvY3VtZW50IHdhcyBub3QgcmVhZHksIHBsYWNlIGNvZGUgaGVyZScpO1xuICAgICAgICAgICAgbXlXYWl0NERPTUNvZGUoKTtcbiAgICAgICAgICAgIHRhYlN3aXRjaENvZGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIG15V2FpdDRET01Db2RlKCkge1xuICAgICAgICBpbWd3cmFwcGVyXzEuYXBwZW5kQ2hpbGQoYnJ1c3MpO1xuICAgICAgICBpbWd3cmFwcGVyXzIuYXBwZW5kQ2hpbGQoc291cCk7XG4gICAgICAgIGltZ3dyYXBwZXJfMy5hcHBlbmRDaGlsZChzdGVhayk7XG4gICAgICAgIGltZ3dyYXBwZXJfNC5hcHBlbmRDaGlsZChlZ2cpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcF8xXCIpLmlubmVySFRNTCA9IFwiQnJ1c3NlbCBTcHJvdXRzXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXzJcIikuaW5uZXJIVE1MID0gXCJEYWlseSBTb3VwXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXzNcIikuaW5uZXJIVE1MID0gXCJTdGVhayBTa2V3ZXJzXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXzRcIikuaW5uZXJIVE1MID0gXCJFZ2cgUm9sbHNcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5YXBwXzFcIikuaW5uZXJIVE1MID0gXCJCcnVzc2VsIHNwcm91dHMgYXJlIGhlYWx0aHkgZm9yIHlvdSwgcmlnaHQ/IFdyb25nLiBPdXJzIGFyZSBmcmllZCB3aXRoIHRoZSBoaWdoZXN0IHRyYW5zLWZhdCBwZXJjZW50IG9pbCBpbiB0aGUgdW5pdmVyc2UuIEFuZCB0aGF0J3Mgd2h5IHRoZXkncmUgc28gZGFybiBkZWxpY2lvdXMuXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWFwcF8yXCIpLmlubmVySFRNTCA9IFwiVGhlIGRhaWx5IHNvdXAgaXMgc29tZXRoaW5nIG9mIGEgbXlzdGVyeSwgbWFkZSBvZiByYXJlIHBsYW50cywgYW5pbWFscywgYW5kIHVuaXF1ZSBhbGllbiBsaWZlIGZvcm1zLlwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlhcHBfM1wiKS5pbm5lckhUTUwgPSBcIk91ciBza2V3ZXJzIHdpbGwgaGF2ZSB5b3VyIG1vdXRoIHdhdGVyaW5nIGJlZm9yZSB5b3UgZXZlbiBzZWUgdGhlbSEgVHJ5IG9uZSBvbiBmb3Igc2l6ZS4gT3IgdHdvLiBPciBmaXZlLiBXZSdyZSBub3QganVkZ2luZy5cIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5YXBwXzRcIikuaW5uZXJIVE1MID0gXCJNYWRlIGluIHRoZSBzdHlsZSBvZiBteSBtb3RoZXJsYW5kLCB0aGVzZSBUYWl3YW5lc2UgZWdnIHJvbGxzIHdpbGwgaGF2ZSB3b25kZXJpbmcgaWYgeW91IHNob3VsZCBqdXN0IGhhdmUgbW9yZSBlZ2cgcm9sbHMgYXMgeW91ciBlbnRpcmUgbWVhbC5cIjtcblxuICAgICAgICBpbWd3cmFwcGVyX2VudF8xLmFwcGVuZENoaWxkKGJ1cmcpO1xuICAgICAgICBpbWd3cmFwcGVyX2VudF8yLmFwcGVuZENoaWxkKHBobyk7XG4gICAgICAgIGltZ3dyYXBwZXJfZW50XzMuYXBwZW5kQ2hpbGQocG9rZSk7XG4gICAgICAgIGltZ3dyYXBwZXJfZW50XzQuYXBwZW5kQ2hpbGQocGl6emEpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVudF8xXCIpLmlubmVySFRNTCA9IFwiQmFjb24gQnVyZ2VyXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW50XzJcIikuaW5uZXJIVE1MID0gXCJQaG9cIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbnRfM1wiKS5pbm5lckhUTUwgPSBcIlBva2UgQm93bFwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVudF80XCIpLmlubmVySFRNTCA9IFwiUGl6emFcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5ZW50XzFcIikuaW5uZXJIVE1MID0gXCJFdmVyIGhlYXJkIG9mIHNwYWNlIHBpZ3M/IFdlbGwsIG5vdyB5b3UgaGF2ZS4gT3VyIGJ1cmdlcnMgYXJlIG1hZGUgd2l0aCBpbnRlcmdhbGFjdGljIHBpZ3MgYW5kIGNvd3MgZm9yIHRoZSBtb3N0IGRlbGVjdGFibGUgcmVzdWx0cy4gVGhlIGp1aWNpbmVzcyBoZXJlIHdvdWxkIHB1dCBCaWdnaWUgU21hbGxzIHRvIHNoYW1lLlwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXllbnRfMlwiKS5pbm5lckhUTUwgPSBcIlRyeSB0aGlzIHBpcGluJyBob3QgYm93bCBvZiBwaG8gaWYgeW91IGZlZWwgbGlrZSB5b3UncmUgZ2V0dGluZyB0aGUgc3BhY2UgY2hpbGxzLiBJdCBjYW4gZ2V0IHF1aXRlIGNvbGQgb3V0IHRoZXJlIHNvIG1ha2Ugc3VyZSB5b3Ugd2FybSB1cCFcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5ZW50XzNcIikuaW5uZXJIVE1MID0gXCJGdWxsIG9mIG9tZWdhIGZhdHR5IGFjaWRzLCB0aGlzIGJvd2wgb2YgcG9rZSB3aWxsIHJlanV2ZW5hdGUgeW91IGluIHdheXMgdGhhdCBjYW5uZWQgdHVuYSBqdXN0IGNhbid0LiBZb3UnbGwgZmVlbCBsaWtlIHlvdSdyZSBvbiB0aGUgYmVhY2hlcyBvZiBIYXdhaWkhXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWVudF80XCIpLmlubmVySFRNTCA9IFwiWW91IGtub3cgd2hhdCB0aW1lIGl0IGlzLiBJdCdzIHBpenphIHRpbWUuIERpZyBpbiEgPGJyPiYjMTI3ODI5ICYjMTI3ODI5ICYjMTI3ODI5ICYjMTI3ODI5ICYjMTI3ODI5XCI7XG5cbiAgICAgICAgaW1nd3JhcHBlcl9kZXNzXzEuYXBwZW5kQ2hpbGQoZnJlbmNoKTtcbiAgICAgICAgaW1nd3JhcHBlcl9kZXNzXzIuYXBwZW5kQ2hpbGQoY29va2llKTtcbiAgICAgICAgaW1nd3JhcHBlcl9kZXNzXzMuYXBwZW5kQ2hpbGQoaWNlKTtcbiAgICAgICAgaW1nd3JhcHBlcl9kZXNzXzQuYXBwZW5kQ2hpbGQoY2lubik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzc18xXCIpLmlubmVySFRNTCA9IFwiRnJlbmNoIFRvYXN0XCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzc18yXCIpLmlubmVySFRNTCA9IFwiQ29va2llc1wiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc3NfM1wiKS5pbm5lckhUTUwgPSBcIkljZSBDcmVhbVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc3NfNFwiKS5pbm5lckhUTUwgPSBcIkNpbm5hbW9uIFJvbGxcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5ZGVzc18xXCIpLmlubmVySFRNTCA9IFwiUGVyaGFwcyB0aGUgZ3JlYXRlc3QgYnJlYWtmYXN0IGNyZWF0aW9uIGV2ZXIuIFdpdGgganVzdCB0aGUgcmlnaHQgYW1vdW50IG9mIGNydW5jaCwgc29mdG5lc3MsIGFuZCBzd2VldG5lc3MsIG91ciBmcmVuY2ggdG9hc3QgaXMgdGhlIHBlcmZlY3Qgd2F5IHRvIHRvcCBvZmYgeW91ciBtZWFsLlwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlkZXNzXzJcIikuaW5uZXJIVE1MID0gXCJJZiB5b3UgZG9uJ3QgbGlrZSBhIGdvb2QgY2hvY29sYXRlIGNoaXAgY29va2llLCBsZXQgb3VycyBjaGFuZ2UgeW91ciBtaW5kLiBUaGUgcmljaCBmbGF2b3IgYW5kIGdvb2V5bmVzcyBpcyBzb21ldGhpbmcgeW91IGhhdmUgdG8gdHJ5LCBhdCBsZWFzdCBvbmNlIVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlkZXNzXzNcIikuaW5uZXJIVE1MID0gXCJUaGVyZSdzIHNvbWV0aGluZyBhYm91dCBpY2UgY3JlYW0gc2Nvb3BzIG9uIGEgd2FmZmxlIGNvbmUuIFNvbWV0aGluZyBhYm91dCBvdXJzIGlzIGp1c3Qgc28gZ29vZC4gSXQncyBvbiB0aGUgdGlwIG9mIG91ciB0b25ndWVzLi4uXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheWRlc3NfNFwiKS5pbm5lckhUTUwgPSBcIkEgZ29vZCBvbGUgY2lubmFtb24gcm9sbCB3aWxsIGdldCB5b3UgZmFyIGluIGxpZmUuIFRoaXMgd2lsbCB3YXJtIHRoZSBjb2NrbGVzIG9mIHlvdXIgaGVhcnQuIE9yIGF0IHRoZSB2ZXJ5IGxlYXN0LCB5b3VyIHN0b21hY2guXCJcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29vazMgZnJvbSAnLi9jb29rX3AzLmpwZyc7XG5pbXBvcnQgSG9zdCBmcm9tICcuL2hvc3QuanBnJztcbmltcG9ydCBNYW5hZ2VyIGZyb20gJy4vbWFuYWdlci5qcGcnO1xuaW1wb3J0IHRhYlN3aXRjaENvZGUgZnJvbSAnLi90YWJzd2l0Y2guanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2UzTG9hZCgpIHtcblxuICAgIGNvbnN0IGhlYWRsaW5lcmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGxpbmVyYm94LmNsYXNzTmFtZSA9IFwiaGVhZGxpbmVyX2JveF8zXCI7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gXCJ0b3BoZWFkZXJcIjtcbiAgICBjb25zdCB1bmRlcmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdW5kZXJoZWFkZXIuY2xhc3NOYW1lID0gXCJ1bmRlcl90b3BoZWFkZXJcIjtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImJpZ2dlc3RfYm94XzNcIjtcbiAgICBjb25zdCBzZWN0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VjdGlvbjEuY2xhc3NOYW1lID0gXCJzZWN0aW9uXzFfcDNcIjtcbiAgICBjb25zdCBzZWN0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VjdGlvbjIuY2xhc3NOYW1lID0gXCJzZWN0aW9uXzJfcDNcIjtcbiAgICBjb25zdCBzZWN0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VjdGlvbjMuY2xhc3NOYW1lID0gXCJzZWN0aW9uXzNfcDNcIjtcblxuICAgIGNvbnN0IGhlYWRlcl9tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfbWVudS5jbGFzc05hbWUgPSBcInRvcF9tZW51XCI7XG4gICAgY29uc3QgbWVudV90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51X3RleHQuY2xhc3NOYW1lID0gXCJjb3JuZXJfdGV4dG1lbnVcIjtcbiAgICBtZW51X3RleHQuaW5uZXJIVE1MID0gXCJNZW51XCI7XG5cbiAgICBjb25zdCBoZWFkZXJfaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyX2hvbWUuY2xhc3NOYW1lID0gXCJ0b3BfaG9tZVwiO1xuICAgIGNvbnN0IGhvbWVfdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZV90ZXh0LmNsYXNzTmFtZSA9IFwiY29ybmVyX3RleHRob21lXCI7XG4gICAgaG9tZV90ZXh0LmlubmVySFRNTCA9IFwiSG9tZVwiO1xuXG4gICAgY29uc3QgZm9vdGVyX2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyX2JveC5jbGFzc05hbWUgPSBcImJvdHRvbV9mb290XCI7XG5cbiAgICBjb25zdCBmb290ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXIxLmlubmVySFRNTCA9ICdQaG90byBieSZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9Aa3Jpc3JvbGxlcj91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5LcmlzdG9waGVyIFJvbGxlcjwvYT4mbmJzcDtvbiZuYnNwOzxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9pbWFnZXMvbmF0dXJlL2dhbGF4eT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5VbnNwbGFzaDwvYT4nO1xuXG5cbiAgICBjb25zdCBmb290ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXIyLmlubmVySFRNTCA9ICdJbWFnZSBieSZuYnNwOzxhIGhyZWY9XCJodHRwczovL3d3dy5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9jdXRlLXBhbmRhLXdyaXRpbmctYm9vay13aXRoLXBlbmNpbC1jYXJ0b29uLWljb24taWxsdXN0cmF0aW9uXzEyMTU4MzMxLmh0bSNxdWVyeT1jYXRhbHlzdHN0dWZmJTIwd3JpdGUmcG9zaXRpb249MCZmcm9tX3ZpZXc9c2VhcmNoJnRyYWNrPXNwaFwiPmNhdGFseXN0c3R1ZmY8L2E+Jm5ic3A7b24gRnJlZXBpayc7XG5cbiAgICBjb25zdCBoZWFkZXJfY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyX2NvbnRhY3QuY2xhc3NOYW1lID0gXCJ0b3BfY29udGFjdFwiO1xuICAgIGNvbnN0IGNvbnRhY3RfdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdF90ZXh0LmNsYXNzTmFtZSA9IFwiY29ybmVyX3RleHRjb250YWN0XCI7XG4gICAgY29udGFjdF90ZXh0LmlubmVySFRNTCA9IFwiQ29udGFjdFwiO1xuXG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGxpbmUuY2xhc3NOYW1lID0gXCJoZWFkbGluZXJcIlxuICAgIGhlYWRsaW5lLmlubmVySFRNTCA9IFwiQ29udGFjdCBVc1wiO1xuXG4gICAgY29uc3QgY29udGFjdF9zZXBfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdF9zZXBfMS5jbGFzc05hbWUgPSBcImNvbnRhY3RzZXBfMVwiO1xuICAgIGNvbnN0IGNvbnRhY3Rfc2VwXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3Rfc2VwXzIuY2xhc3NOYW1lID0gXCJjb250YWN0c2VwXzJcIjtcbiAgICBjb25zdCBjb250YWN0X3NlcF8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0X3NlcF8zLmNsYXNzTmFtZSA9IFwiY29udGFjdHNlcF8zXCI7XG5cblxuICAgIGNvbnN0IGNvbnRhY3Rib3hfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdGJveF8xLmNsYXNzTmFtZSA9IFwiYm94Y29udGFjdF8xXCI7XG4gICAgY29uc3QgY29udGFjdGJveF8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0Ym94XzIuY2xhc3NOYW1lID0gXCJib3hjb250YWN0XzJcIjtcbiAgICBjb25zdCBjb250YWN0Ym94XzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3Rib3hfMy5jbGFzc05hbWUgPSBcImJveGNvbnRhY3RfM1wiO1xuXG4gICAgY29uc3QgcDFfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgcDFfdGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZV9wMVwiO1xuICAgIHAxX3RpdGxlLmlubmVySFRNTCA9IFwiRmF0aGVyIEZhbGFmZWxcIjtcblxuICAgIGNvbnN0IHAyX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHAyX3RpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVfcDJcIjtcbiAgICBwMl90aXRsZS5pbm5lckhUTUwgPSBcIk1vdGhlciBNYWNhcm9uaVwiO1xuXG4gICAgY29uc3QgcDNfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgcDNfdGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZV9wM1wiO1xuICAgIHAzX3RpdGxlLmlubmVySFRNTCA9IFwiVGVlbmFnZSBUYXBpb2NhXCI7XG5cbiAgICBjb25zdCBub3RJbWFnZV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBub3RJbWFnZV8xLmNsYXNzTmFtZSA9IFwibGVmdG9maW1hZ2VcIjtcblxuICAgIGNvbnN0IG5vdEltYWdlXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5vdEltYWdlXzIuY2xhc3NOYW1lID0gXCJsZWZ0b2ZpbWFnZVwiO1xuXG4gICAgY29uc3Qgbm90SW1hZ2VfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbm90SW1hZ2VfMy5jbGFzc05hbWUgPSBcImxlZnRvZmltYWdlXCI7XG5cbiAgICBjb25zdCBkZXRhaWxzX3AxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXRhaWxzX3AxLmNsYXNzTmFtZSA9IFwiZGV0YWlsc1AxXCI7XG4gICAgZGV0YWlsc19wMS5pbm5lckhUTUwgPSBcIk1hbmFnZXI8YnI+MTIzLTQ1Ni03ODkwPGJyPjJJbmZpbml0eU5AQmV5b25kLkNvbVwiO1xuXG4gICAgY29uc3QgZGV0YWlsc19wMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlsc19wMi5jbGFzc05hbWUgPSBcImRldGFpbHNQM1wiO1xuICAgIGRldGFpbHNfcDIuaW5uZXJIVE1MID0gXCJDaGVmPGJyPjEyMy00NTYtNzg5MTxicj5JbnRlcnN0ZWxsYXJARm9vZGllLkNvbVwiO1xuXG4gICAgY29uc3QgZGV0YWlsc19wMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlsc19wMy5jbGFzc05hbWUgPSBcImRldGFpbHNQM1wiO1xuICAgIGRldGFpbHNfcDMuaW5uZXJIVE1MID0gXCJIb3N0L1dhaXRlcjxicj4xMjMtNDU2LTc4OTI8YnI+VG90YWxseS5SYWRARHVkZS5Db21cIjtcblxuICAgIGNvbnN0IGNvb2szSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNvb2szSWNvbi5zcmMgPSBDb29rMztcblxuICAgIGNvbnN0IGhvc3RJY29uID0gbmV3IEltYWdlKCk7XG4gICAgaG9zdEljb24uc3JjID0gSG9zdDtcblxuICAgIGNvbnN0IG1hbmFnZXJJY29uID0gbmV3IEltYWdlKCk7XG4gICAgbWFuYWdlckljb24uc3JjID0gTWFuYWdlcjtcblxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodW5kZXJoZWFkZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyX2JveCk7XG4gICAgZm9vdGVyX2JveC5hcHBlbmRDaGlsZChmb290ZXIxKTtcbiAgICBmb290ZXJfYm94LmFwcGVuZENoaWxkKGZvb3RlcjIpO1xuICAgIGhlYWRlcl9ob21lLmFwcGVuZENoaWxkKGhvbWVfdGV4dCk7XG4gICAgaGVhZGVyX21lbnUuYXBwZW5kQ2hpbGQobWVudV90ZXh0KTtcbiAgICBoZWFkZXJfY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0X3RleHQpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJfaG9tZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9tZW51KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX2NvbnRhY3QpO1xuICAgIHVuZGVyaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRsaW5lcmJveCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3Rfc2VwXzEpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0X3NlcF8yKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdF9zZXBfMyk7XG4gICAgY29udGFjdF9zZXBfMS5hcHBlbmRDaGlsZChjb250YWN0Ym94XzEpO1xuICAgIGNvbnRhY3Rib3hfMS5hcHBlbmRDaGlsZChub3RJbWFnZV8xKTtcbiAgICBub3RJbWFnZV8xLmFwcGVuZENoaWxkKHAxX3RpdGxlKTtcbiAgICBub3RJbWFnZV8xLmFwcGVuZENoaWxkKGRldGFpbHNfcDEpO1xuICAgIGNvbnRhY3Rib3hfMS5hcHBlbmRDaGlsZChtYW5hZ2VySWNvbik7XG4gICAgY29udGFjdF9zZXBfMi5hcHBlbmRDaGlsZChjb250YWN0Ym94XzIpO1xuICAgIGNvbnRhY3Rib3hfMi5hcHBlbmRDaGlsZChub3RJbWFnZV8yKTtcbiAgICBub3RJbWFnZV8yLmFwcGVuZENoaWxkKHAyX3RpdGxlKTtcbiAgICBub3RJbWFnZV8yLmFwcGVuZENoaWxkKGRldGFpbHNfcDIpO1xuICAgIGNvbnRhY3Rib3hfMi5hcHBlbmRDaGlsZChjb29rM0ljb24pO1xuICAgIGNvbnRhY3Rfc2VwXzMuYXBwZW5kQ2hpbGQoY29udGFjdGJveF8zKTtcbiAgICBjb250YWN0Ym94XzMuYXBwZW5kQ2hpbGQobm90SW1hZ2VfMyk7XG4gICAgbm90SW1hZ2VfMy5hcHBlbmRDaGlsZChwM190aXRsZSk7XG4gICAgbm90SW1hZ2VfMy5hcHBlbmRDaGlsZChkZXRhaWxzX3AzKTtcbiAgICBjb250YWN0Ym94XzMuYXBwZW5kQ2hpbGQoaG9zdEljb24pO1xuICAgIGhlYWRsaW5lcmJveC5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG5cbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgIHRhYlN3aXRjaENvZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGFiU3dpdGNoQ29kZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgSWNvbiBmcm9tICcuL2NoZWYuanBnJztcbmltcG9ydCB0YWJTd2l0Y2hDb2RlIGZyb20gJy4vdGFic3dpdGNoLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG5cbiAgICBjb25zdCBoZWFkbGluZXJib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRsaW5lcmJveC5jbGFzc05hbWUgPSBcImhlYWRsaW5lcl9ib3hcIjtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSBcInRvcGhlYWRlclwiO1xuICAgIGNvbnN0IHVuZGVyaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB1bmRlcmhlYWRlci5jbGFzc05hbWUgPSBcInVuZGVyX3RvcGhlYWRlclwiO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYmlnZ2VzdF9ib3hcIjtcbiAgICBjb25zdCBzZWN0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VjdGlvbjEuY2xhc3NOYW1lID0gXCJzZWN0aW9uXzFcIjtcbiAgICBjb25zdCBzZWN0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VjdGlvbjIuY2xhc3NOYW1lID0gXCJzZWN0aW9uXzJcIjtcbiAgICBjb25zdCBzZWN0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VjdGlvbjMuY2xhc3NOYW1lID0gXCJzZWN0aW9uXzNcIjtcblxuICAgIGNvbnN0IGhlYWRlcl9ob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfaG9tZS5jbGFzc05hbWUgPSBcInRvcF9ob21lXCI7XG4gICAgY29uc3QgaG9tZV90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lX3RleHQuY2xhc3NOYW1lID0gXCJjb3JuZXJfdGV4dGhvbWVcIjtcbiAgICBob21lX3RleHQuaW5uZXJIVE1MID0gXCJIb21lXCI7XG5cbiAgICBjb25zdCBoZWFkZXJfbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyX21lbnUuY2xhc3NOYW1lID0gXCJ0b3BfbWVudVwiO1xuICAgIGNvbnN0IG1lbnVfdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudV90ZXh0LmNsYXNzTmFtZSA9IFwiY29ybmVyX3RleHRtZW51XCI7XG4gICAgbWVudV90ZXh0LmlubmVySFRNTCA9IFwiTWVudVwiO1xuXG4gICAgY29uc3QgZm9vdGVyX2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyX2JveC5jbGFzc05hbWUgPSBcImJvdHRvbV9mb290XCI7XG5cbiAgICBjb25zdCBmb290ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXIxLmlubmVySFRNTCA9ICdCYWNrZ3JvdW5kIHBob3RvIGJ5Jm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0Brcmlzcm9sbGVyP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPktyaXN0b3BoZXIgUm9sbGVyPC9hPiZuYnNwO29uJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL2ltYWdlcy9uYXR1cmUvZ2FsYXh5P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPic7XG5cblxuICAgIGNvbnN0IGZvb3RlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3RlcjIuaW5uZXJIVE1MID0gJ0FzdHJvbmF1dCBpbWFnZSBieSZuYnNwOzxhIGhyZWY9XCJodHRwczovL3d3dy5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9jdXRlLWFzdHJvbmF1dC1jaGVmLXNlcnZpbmctZm9vZC1jYXJ0b29uLXZlY3Rvci1pY29uLWlsbHVzdHJhdGlvbi1zY2llbmNlLWZvb2QtaWNvbi1pc29sYXRlZC1mbGF0XzMxMzQ4NDUwLmh0bSNxdWVyeT1hc3Ryb25hdXQlMjBjaGVmJnBvc2l0aW9uPTQmZnJvbV92aWV3PXNlYXJjaCZ0cmFjaz1zcGhcIj5jYXRhbHlzdHN0dWZmPC9hPiBvbiBGcmVlcGlrJztcblxuICAgIGNvbnN0IGhlYWRlcl9jb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfY29udGFjdC5jbGFzc05hbWUgPSBcInRvcF9jb250YWN0XCI7XG4gICAgY29uc3QgY29udGFjdF90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0X3RleHQuY2xhc3NOYW1lID0gXCJjb3JuZXJfdGV4dGNvbnRhY3RcIjtcbiAgICBjb250YWN0X3RleHQuaW5uZXJIVE1MID0gXCJDb250YWN0XCI7XG5cbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkbGluZS5jbGFzc05hbWUgPSBcImhlYWRsaW5lclwiXG4gICAgaGVhZGxpbmUuaW5uZXJIVE1MID0gXCJZdW1teSBZZWFybmluZ3NcIjtcblxuICAgIGNvbnN0IHVuZGVySGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdW5kZXJIZWFkbGluZS5pbm5lckhUTUwgPSBcIkNyYXZpbmcgc29tZXRoaW5nIHl1bW15PyA8YnI+TG9vayBubyBmdXJ0aGVyIVwiO1xuXG4gICAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGludHJvLmlubmVySFRNTCA9IFwiV2VsY29tZSB0byBZdW1teSBZZWFybmluZ3MsIGEgcGxhY2Ugd2hlcmUgeW91IGNhbiBmaW5kIGV2ZXJ5dGhpbmcgdGhhdCB5b3UgKG9yIEkpIGhhdmUgYmVlbiB5ZWFybmluZyBmb3IhIEhlcmUgeW91J2xsIGZpbmQgdGhlIG1vc3Qgc2F0aXNmeWluZyBmb29kcyB0aGF0IG1vbmV5IGNhbiBidXkgaW4gdGhpcyBnYWxheHkuIEkgaG9wZSB5b3UgZW5qb3khXCJcblxuICAgIGNvbnN0IGhvdXJzTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG91cnNNYWluLmlubmVySFRNTCA9IFwiSG91cnNcIlxuICAgIGhvdXJzTWFpbi5jbGFzc05hbWUgPSBcInRpdGxlLXRleHRcIlxuXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXJzLmlubmVySFRNTCA9IFwiTW9uZGF5OiA3YW0gLSA3cG0gPGJyPiBUdWVzZGF5OiA3YW0gLSA3cG0gPGJyPiBXZWRuZXNkYXk6IDdhbSAtIDdwbSA8YnI+IFRodXJzZGF5OiA3YW0gLSA3cG0gPGJyPiBGcmlkYXk6IDdhbSAtIDEwcG0gPGJyPiBTYXR1cmRheTogN2FtIC0gMTBwbSA8YnI+IFN1bmRheTogOGFtIC0gMTBwbVwiXG5cbiAgICBjb25zdCBsb2NhdGlvbk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvY2F0aW9uTWFpbi5pbm5lckhUTUwgPSBcIkxvY2F0aW9uXCJcbiAgICBsb2NhdGlvbk1haW4uY2xhc3NOYW1lID0gXCJ0aXRsZS10ZXh0XCJcblxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2NhdGlvbi5pbm5lckhUTUwgPSBcIjk5OSBUYXN0ZSBCdWQgQXZlbnVlLCBEZWxpY2lvdXMsIFRYIDk5OTk5XCJcblxuICAgIGNvbnN0IGNoZWZJY29uID0gbmV3IEltYWdlKCk7XG4gICAgY2hlZkljb24uc3JjID0gSWNvbjtcblxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodW5kZXJoZWFkZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyX2JveCk7XG4gICAgZm9vdGVyX2JveC5hcHBlbmRDaGlsZChmb290ZXIxKTtcbiAgICBmb290ZXJfYm94LmFwcGVuZENoaWxkKGZvb3RlcjIpO1xuICAgIGhlYWRlcl9ob21lLmFwcGVuZENoaWxkKGhvbWVfdGV4dCk7XG4gICAgaGVhZGVyX21lbnUuYXBwZW5kQ2hpbGQobWVudV90ZXh0KTtcbiAgICBoZWFkZXJfY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0X3RleHQpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJfaG9tZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9tZW51KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX2NvbnRhY3QpO1xuICAgIHVuZGVyaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRsaW5lcmJveCk7XG4gICAgaGVhZGxpbmVyYm94LmFwcGVuZENoaWxkKGNoZWZJY29uKTtcbiAgICBoZWFkbGluZXJib3guYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uMSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb24yKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbjMpO1xuICAgIFxuICAgIHNlY3Rpb24xLmFwcGVuZENoaWxkKHVuZGVySGVhZGxpbmUpO1xuICAgIHNlY3Rpb24xLmFwcGVuZENoaWxkKGludHJvKTtcbiAgICBzZWN0aW9uMi5hcHBlbmRDaGlsZChob3Vyc01haW4pO1xuICAgIHNlY3Rpb24yLmFwcGVuZENoaWxkKGhvdXJzKTtcbiAgICBzZWN0aW9uMy5hcHBlbmRDaGlsZChsb2NhdGlvbk1haW4pO1xuICAgIHNlY3Rpb24zLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcblxuICAgIHRhYlN3aXRjaENvZGUoKTtcbn1cbiIsImltcG9ydCBwYWdlTG9hZCBmcm9tICcuL3BhZ2Vsb2FkLmpzJztcbmltcG9ydCBwYWdlMkxvYWQgZnJvbSAnLi9wYWdlMmxvYWQuanMnO1xuaW1wb3J0IHBhZ2UzTG9hZCBmcm9tICcuL3BhZ2UzbG9hZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhYlN3aXRjaENvZGUoKSB7XG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BoZWFkZXInKTtcbiAgICBidG5zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZS5zbGljZSgwLDgpID09PSAndG9wX2hvbWUnIHx8IGUudGFyZ2V0LmNsYXNzTmFtZS5zbGljZSgwLDE1KSA9PT0gJ2Nvcm5lcl90ZXh0aG9tZScpIHtcbiAgICAgICAgICAgIGNvbnN0IGFsbFRoZUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcbiAgICAgICAgICAgIGFsbFRoZUNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIHBhZ2VMb2FkKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lLnNsaWNlKDAsOCkgPT09ICd0b3BfbWVudScgfHwgZS50YXJnZXQuY2xhc3NOYW1lLnNsaWNlKDAsMTUpID09PSAnY29ybmVyX3RleHRtZW51Jykge1xuICAgICAgICAgICAgY29uc3QgYWxsVGhlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuICAgICAgICAgICAgYWxsVGhlQ29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgcGFnZTJMb2FkKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lLnNsaWNlKDAsMTEpID09PSAndG9wX2NvbnRhY3QnIHx8IGUudGFyZ2V0LmNsYXNzTmFtZS5zbGljZSgwLDE4KSA9PT0gJ2Nvcm5lcl90ZXh0Y29udGFjdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGFsbFRoZUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcbiAgICAgICAgICAgIGFsbFRoZUNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIHBhZ2UzTG9hZCgpO1xuICAgICAgICB9XG4gICAgfSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==