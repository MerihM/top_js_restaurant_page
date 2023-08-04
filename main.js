/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const tablinks = document.getElementsByClassName("tablinks");
const tabcontent = document.querySelectorAll('.tabcontent');

for (tab of tablinks) {
    tab.addEventListener("click", openTab)
}

function openTab(tab) {

    for (e of tablinks)
        e.classList.remove('active');
    tab.srcElement.classList.add('active');
    for (cont of tabcontent) {
        cont.style.display = 'none';
        if ((tab.srcElement.innerHTML) == cont.id)
            cont.style.display = 'block'
    }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX2pzX3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0YWJsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJsaW5rc1wiKTtcbmNvbnN0IHRhYmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiY29udGVudCcpO1xuXG5mb3IgKHRhYiBvZiB0YWJsaW5rcykge1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlblRhYilcbn1cblxuZnVuY3Rpb24gb3BlblRhYih0YWIpIHtcblxuICAgIGZvciAoZSBvZiB0YWJsaW5rcylcbiAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB0YWIuc3JjRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBmb3IgKGNvbnQgb2YgdGFiY29udGVudCkge1xuICAgICAgICBjb250LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGlmICgodGFiLnNyY0VsZW1lbnQuaW5uZXJIVE1MKSA9PSBjb250LmlkKVxuICAgICAgICAgICAgY29udC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=