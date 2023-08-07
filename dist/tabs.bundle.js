/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05PO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixLQUFLO0FBQzVCLGtDQUFrQyxLQUFLO0FBQ3ZDO0FBQ0EsK0JBQStCLE1BQU0scUJBQXFCLGFBQWE7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfanNfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcF9qc19yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcF9qc19yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3BfanNfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wX2pzX3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy90YWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhYkxpc3QoKSB7XG4gICAgY29uc3QgdGFiRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2l0aWVzID0gWydMb25kb24nLCAnUGFyaXMnLCAnVG9reW8nXTtcbiAgICB0YWJEaXYuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgZm9yIChsZXQgY2l0eSBvZiBjaXRpZXMpIHtcbiAgICAgICAgbGV0IHRlbXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGVtcEJ0bi5jbGFzc0xpc3QuYWRkKCd0YWJsaW5rcycpO1xuICAgICAgICB0ZW1wQnRuLmlubmVyVGV4dCA9IGNpdHk7XG4gICAgICAgIHRhYkRpdi5hcHBlbmRDaGlsZCh0ZW1wQnRuKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhYkRpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhYkNvbnRlbnQoKSB7XG4gICAgY29uc3QgdGFibGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxpbmtzXCIpO1xuICAgIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qga3ZUZXN0ID0geyAnTG9uZG9uJzogJ0VuZ2xhbmQnLCAnUGFyaXMnOiAnRnJhbmNlJywgJ1Rva3lvJzogJ0phcGFuJyB9O1xuICAgIGZvciAobGV0IGNpdHkgaW4ga3ZUZXN0KSB7XG4gICAgICAgIGxldCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IG5ld0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBsZXQgbmV3UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ3RhYmNvbnRlbnQnKTtcbiAgICAgICAgbmV3RGl2LmlkID0gYCR7Y2l0eX1gO1xuICAgICAgICBuZXdIZWFkaW5nLmlubmVyVGV4dCA9IGAke2NpdHl9YDtcbiAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld0hlYWRpbmcpO1xuICAgICAgICBuZXdQYXJhLmlubmVyVGV4dCA9IGAke2NpdHl9IGlzIGNhcGl0YWwgY2l0eSBvZiAke2t2VGVzdFtjaXR5XX1gO1xuICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3UGFyYSk7XG4gICAgICAgIHBhcmEuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuVGFiKHRhYikge1xuICAgIGNvbnN0IHRhYmxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYmxpbmtzXCIpO1xuICAgIGNvbnN0IHRhYmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiY29udGVudCcpO1xuICAgIGZvciAobGV0IGUgb2YgdGFibGlua3MpXG4gICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgdGFiLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgZm9yIChsZXQgY29udCBvZiB0YWJjb250ZW50KSB7XG4gICAgICAgIGNvbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgaWYgKCh0YWIuc3JjRWxlbWVudC5pbm5lckhUTUwpID09IGNvbnQuaWQpXG4gICAgICAgICAgICBjb250LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9