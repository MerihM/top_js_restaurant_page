/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTabContent: () => (/* binding */ addTabContent),
/* harmony export */   createTabList: () => (/* binding */ createTabList),
/* harmony export */   openTab: () => (/* binding */ openTab)
/* harmony export */ });
function createTabList() {
    const tabDiv = document.createElement('div');
    const cities = ['London', 'Paris', 'Tokyo'];
    tabDiv.classList.add('tab');
    for (let city of cities) {
        let tempBtn = document.createElement('button');
        tempBtn.classList.add('tablinks');
        tempBtn.innerText = city;
        tabDiv.appendChild(tempBtn);
    }
    return tabDiv;
}

function addTabContent() {
    const tablinks = document.querySelectorAll(".tablinks");
    let para = document.createElement('div');
    const kvTest = { 'London': 'England', 'Paris': 'France', 'Tokyo': 'Japan' };
    for (let city in kvTest) {
        let newDiv = document.createElement('div');
        let newHeading = document.createElement('h3');
        let newPara = document.createElement('p');
        newDiv.classList.add('tabcontent');
        newDiv.id = `${city}`;
        newHeading.innerText = `${city}`;
        newDiv.appendChild(newHeading);
        newPara.innerText = `${city} is capital city of ${kvTest[city]}`;
        newDiv.appendChild(newPara);
        para.appendChild(newDiv);
    }
    return para;
}

function openTab(tab) {
    const tablinks = document.getElementsByClassName("tablinks");
    const tabcontent = document.querySelectorAll('.tabcontent');
    for (let e of tablinks)
        e.classList.remove('active');
    tab.srcElement.classList.add('active');
    for (let cont of tabcontent) {
        cont.style.display = 'none';
        if ((tab.srcElement.innerHTML) == cont.id)
            cont.style.display = 'block'
    }
}


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ "./src/tabs.js");




const content = document.querySelector('.content');
let tablinks = document.getElementsByClassName("tablinks");
window.addEventListener("load", (event) => {
    content.appendChild((0,_tabs__WEBPACK_IMPORTED_MODULE_0__.createTabList)());
    content.appendChild((0,_tabs__WEBPACK_IMPORTED_MODULE_0__.addTabContent)());
    for (let e of tablinks) {
        e.addEventListener("click", _tabs__WEBPACK_IMPORTED_MODULE_0__.openTab)
    }
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsS0FBSztBQUM1QixrQ0FBa0MsS0FBSztBQUN2QztBQUNBLCtCQUErQixNQUFNLHFCQUFxQixhQUFhO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDM0NBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOaUM7QUFDTTtBQUNBOztBQUV2QztBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0RBQWE7QUFDckMsd0JBQXdCLG9EQUFhO0FBQ3JDO0FBQ0Esb0NBQW9DLDBDQUFPO0FBQzNDO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcF9qc19yZXN0YXVyYW50X3BhZ2UvLi9zcmMvdGFicy5qcyIsIndlYnBhY2s6Ly90b3BfanNfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcF9qc19yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcF9qc19yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3BfanNfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wX2pzX3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFiTGlzdCgpIHtcbiAgICBjb25zdCB0YWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjaXRpZXMgPSBbJ0xvbmRvbicsICdQYXJpcycsICdUb2t5byddO1xuICAgIHRhYkRpdi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICBmb3IgKGxldCBjaXR5IG9mIGNpdGllcykge1xuICAgICAgICBsZXQgdGVtcEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0ZW1wQnRuLmNsYXNzTGlzdC5hZGQoJ3RhYmxpbmtzJyk7XG4gICAgICAgIHRlbXBCdG4uaW5uZXJUZXh0ID0gY2l0eTtcbiAgICAgICAgdGFiRGl2LmFwcGVuZENoaWxkKHRlbXBCdG4pO1xuICAgIH1cbiAgICByZXR1cm4gdGFiRGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFiQ29udGVudCgpIHtcbiAgICBjb25zdCB0YWJsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFibGlua3NcIik7XG4gICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBrdlRlc3QgPSB7ICdMb25kb24nOiAnRW5nbGFuZCcsICdQYXJpcyc6ICdGcmFuY2UnLCAnVG9reW8nOiAnSmFwYW4nIH07XG4gICAgZm9yIChsZXQgY2l0eSBpbiBrdlRlc3QpIHtcbiAgICAgICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgbmV3SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGxldCBuZXdQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZCgndGFiY29udGVudCcpO1xuICAgICAgICBuZXdEaXYuaWQgPSBgJHtjaXR5fWA7XG4gICAgICAgIG5ld0hlYWRpbmcuaW5uZXJUZXh0ID0gYCR7Y2l0eX1gO1xuICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3SGVhZGluZyk7XG4gICAgICAgIG5ld1BhcmEuaW5uZXJUZXh0ID0gYCR7Y2l0eX0gaXMgY2FwaXRhbCBjaXR5IG9mICR7a3ZUZXN0W2NpdHldfWA7XG4gICAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXdQYXJhKTtcbiAgICAgICAgcGFyYS5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5UYWIodGFiKSB7XG4gICAgY29uc3QgdGFibGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFibGlua3NcIik7XG4gICAgY29uc3QgdGFiY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJjb250ZW50Jyk7XG4gICAgZm9yIChsZXQgZSBvZiB0YWJsaW5rcylcbiAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB0YWIuc3JjRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBmb3IgKGxldCBjb250IG9mIHRhYmNvbnRlbnQpIHtcbiAgICAgICAgY29udC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBpZiAoKHRhYi5zcmNFbGVtZW50LmlubmVySFRNTCkgPT0gY29udC5pZClcbiAgICAgICAgICAgIGNvbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IG9wZW5UYWIgfSBmcm9tIFwiLi90YWJzXCI7XG5pbXBvcnQgeyBjcmVhdGVUYWJMaXN0IH0gZnJvbSBcIi4vdGFic1wiO1xuaW1wb3J0IHsgYWRkVGFiQ29udGVudCB9IGZyb20gXCIuL3RhYnNcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5sZXQgdGFibGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFibGlua3NcIik7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKGV2ZW50KSA9PiB7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVUYWJMaXN0KCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFiQ29udGVudCgpKTtcbiAgICBmb3IgKGxldCBlIG9mIHRhYmxpbmtzKSB7XG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5UYWIpXG4gICAgfVxufSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==