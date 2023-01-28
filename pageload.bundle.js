"use strict";
(self["webpackChunkyummy_yearnings"] = self["webpackChunkyummy_yearnings"] || []).push([["pageload"],{

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
    console.log("I get called from pageload.js!");

    const headline = document.createElement("h1")
    headline.innerHTML = "Craving something yummy?";

    const underHeadline = document.createElement("h2")
    underHeadline.innerHTML = "Look no further!";

    const intro = document.createElement("div")
    intro.innerHTML = "Welcome to Yummy Yearnings, a place where you can find everything that you (or I) have been yearning for! <br>Here you'll find the most satisfying of foods that you've been saving to have until your next cheat day. <br>I hope you enjoy!"

    const chefIcon = new Image();
    chefIcon.src = _chef_jpg__WEBPACK_IMPORTED_MODULE_0__;

    underHeadline.appendChild(intro);
    headline.appendChild(underHeadline);
    headline.appendChild(chefIcon);

    return headline;
}


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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pageload.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThCOztBQUVmO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsc0NBQUk7O0FBRXZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veXVtbXkteWVhcm5pbmdzLy4vc3JjL3BhZ2Vsb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJY29uIGZyb20gJy4vY2hlZi5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkkgZ2V0IGNhbGxlZCBmcm9tIHBhZ2Vsb2FkLmpzIVwiKTtcblxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgaGVhZGxpbmUuaW5uZXJIVE1MID0gXCJDcmF2aW5nIHNvbWV0aGluZyB5dW1teT9cIjtcblxuICAgIGNvbnN0IHVuZGVySGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcbiAgICB1bmRlckhlYWRsaW5lLmlubmVySFRNTCA9IFwiTG9vayBubyBmdXJ0aGVyIVwiO1xuXG4gICAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgaW50cm8uaW5uZXJIVE1MID0gXCJXZWxjb21lIHRvIFl1bW15IFllYXJuaW5ncywgYSBwbGFjZSB3aGVyZSB5b3UgY2FuIGZpbmQgZXZlcnl0aGluZyB0aGF0IHlvdSAob3IgSSkgaGF2ZSBiZWVuIHllYXJuaW5nIGZvciEgPGJyPkhlcmUgeW91J2xsIGZpbmQgdGhlIG1vc3Qgc2F0aXNmeWluZyBvZiBmb29kcyB0aGF0IHlvdSd2ZSBiZWVuIHNhdmluZyB0byBoYXZlIHVudGlsIHlvdXIgbmV4dCBjaGVhdCBkYXkuIDxicj5JIGhvcGUgeW91IGVuam95IVwiXG5cbiAgICBjb25zdCBjaGVmSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNoZWZJY29uLnNyYyA9IEljb247XG5cbiAgICB1bmRlckhlYWRsaW5lLmFwcGVuZENoaWxkKGludHJvKTtcbiAgICBoZWFkbGluZS5hcHBlbmRDaGlsZCh1bmRlckhlYWRsaW5lKTtcbiAgICBoZWFkbGluZS5hcHBlbmRDaGlsZChjaGVmSWNvbik7XG5cbiAgICByZXR1cm4gaGVhZGxpbmU7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=