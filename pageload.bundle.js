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
    header_home.innerHTML = "Home";

    const header_menu = document.createElement("div");
    header_menu.className = "top_menu";
    header_menu.innerHTML = "Menu";

    const footer = document.createElement("div");
    footer.className = "bottom_foot";
    footer.innerHTML = 'Photo by&nbsp;<a href="https://unsplash.com/@krisroller?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kristopher Roller</a>&nbsp;on&nbsp;<a href="https://unsplash.com/images/nature/galaxy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';

    const header_contact = document.createElement("div");
    header_contact.className = "top_contact";
    header_contact.innerHTML = "Contact";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThCOztBQUVmOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLHlJQUF5SSxRQUFROztBQUV2TDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixzQ0FBSTs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95dW1teS15ZWFybmluZ3MvLi9zcmMvcGFnZWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEljb24gZnJvbSAnLi9jaGVmLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuXG4gICAgY29uc3QgaGVhZGxpbmVyYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkbGluZXJib3guY2xhc3NOYW1lID0gXCJoZWFkbGluZXJfYm94XCI7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gXCJ0b3BoZWFkZXJcIjtcbiAgICBjb25zdCB1bmRlcmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdW5kZXJoZWFkZXIuY2xhc3NOYW1lID0gXCJ1bmRlcl90b3BoZWFkZXJcIjtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImJpZ2dlc3RfYm94XCI7XG4gICAgY29uc3Qgc2VjdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlY3Rpb24xLmNsYXNzTmFtZSA9IFwic2VjdGlvbl8xXCI7XG4gICAgY29uc3Qgc2VjdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlY3Rpb24yLmNsYXNzTmFtZSA9IFwic2VjdGlvbl8yXCI7XG4gICAgY29uc3Qgc2VjdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlY3Rpb24zLmNsYXNzTmFtZSA9IFwic2VjdGlvbl8zXCI7XG5cbiAgICBjb25zdCBoZWFkZXJfaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyX2hvbWUuY2xhc3NOYW1lID0gXCJ0b3BfaG9tZVwiO1xuICAgIGhlYWRlcl9ob21lLmlubmVySFRNTCA9IFwiSG9tZVwiO1xuXG4gICAgY29uc3QgaGVhZGVyX21lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcl9tZW51LmNsYXNzTmFtZSA9IFwidG9wX21lbnVcIjtcbiAgICBoZWFkZXJfbWVudS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyLmNsYXNzTmFtZSA9IFwiYm90dG9tX2Zvb3RcIjtcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gJ1Bob3RvIGJ5Jm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0Brcmlzcm9sbGVyP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPktyaXN0b3BoZXIgUm9sbGVyPC9hPiZuYnNwO29uJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL2ltYWdlcy9uYXR1cmUvZ2FsYXh5P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPic7XG5cbiAgICBjb25zdCBoZWFkZXJfY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyX2NvbnRhY3QuY2xhc3NOYW1lID0gXCJ0b3BfY29udGFjdFwiO1xuICAgIGhlYWRlcl9jb250YWN0LmlubmVySFRNTCA9IFwiQ29udGFjdFwiO1xuXG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGxpbmUuY2xhc3NOYW1lID0gXCJoZWFkbGluZXJcIlxuICAgIGhlYWRsaW5lLmlubmVySFRNTCA9IFwiWXVtbXkgWWVhcm5pbmdzXCI7XG5cbiAgICBjb25zdCB1bmRlckhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHVuZGVySGVhZGxpbmUuaW5uZXJIVE1MID0gXCJDcmF2aW5nIHNvbWV0aGluZyB5dW1teT8gPGJyPkxvb2sgbm8gZnVydGhlciFcIjtcblxuICAgIGNvbnN0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbnRyby5pbm5lckhUTUwgPSBcIldlbGNvbWUgdG8gWXVtbXkgWWVhcm5pbmdzLCBhIHBsYWNlIHdoZXJlIHlvdSBjYW4gZmluZCBldmVyeXRoaW5nIHRoYXQgeW91IChvciBJKSBoYXZlIGJlZW4geWVhcm5pbmcgZm9yISBIZXJlIHlvdSdsbCBmaW5kIHRoZSBtb3N0IHNhdGlzZnlpbmcgZm9vZHMgdGhhdCBtb25leSBjYW4gYnV5IGluIHRoaXMgZ2FsYXh5LiBJIGhvcGUgeW91IGVuam95IVwiXG5cbiAgICBjb25zdCBob3Vyc01haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXJzTWFpbi5pbm5lckhUTUwgPSBcIkhvdXJzXCJcbiAgICBob3Vyc01haW4uY2xhc3NOYW1lID0gXCJ0aXRsZS10ZXh0XCJcblxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob3Vycy5pbm5lckhUTUwgPSBcIk1vbmRheTogN2FtIC0gN3BtIDxicj4gVHVlc2RheTogN2FtIC0gN3BtIDxicj4gV2VkbmVzZGF5OiA3YW0gLSA3cG0gPGJyPiBUaHVyc2RheTogN2FtIC0gN3BtIDxicj4gRnJpZGF5OiA3YW0gLSAxMHBtIDxicj4gU2F0dXJkYXk6IDdhbSAtIDEwcG0gPGJyPiBTdW5kYXk6IDhhbSAtIDEwcG1cIlxuXG4gICAgY29uc3QgbG9jYXRpb25NYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2NhdGlvbk1haW4uaW5uZXJIVE1MID0gXCJMb2NhdGlvblwiXG4gICAgbG9jYXRpb25NYWluLmNsYXNzTmFtZSA9IFwidGl0bGUtdGV4dFwiXG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9jYXRpb24uaW5uZXJIVE1MID0gXCI5OTkgVGFzdGUgQnVkIEF2ZW51ZSwgRGVsaWNpb3VzLCBUWCA5OTk5OVwiXG5cbiAgICBjb25zdCBjaGVmSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNoZWZJY29uLnNyYyA9IEljb247XG5cbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHVuZGVyaGVhZGVyKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9ob21lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX21lbnUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJfY29udGFjdCk7XG4gICAgdW5kZXJoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmVyYm94KTtcbiAgICBoZWFkbGluZXJib3guYXBwZW5kQ2hpbGQoY2hlZkljb24pO1xuICAgIGhlYWRsaW5lcmJveC5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb24xKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbjIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uMyk7XG4gICAgXG4gICAgc2VjdGlvbjEuYXBwZW5kQ2hpbGQodW5kZXJIZWFkbGluZSk7XG4gICAgc2VjdGlvbjEuYXBwZW5kQ2hpbGQoaW50cm8pO1xuICAgIHNlY3Rpb24yLmFwcGVuZENoaWxkKGhvdXJzTWFpbik7XG4gICAgc2VjdGlvbjIuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICAgIHNlY3Rpb24zLmFwcGVuZENoaWxkKGxvY2F0aW9uTWFpbik7XG4gICAgc2VjdGlvbjMuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9