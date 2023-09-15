/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/base/HTMLComponent.js":
/*!***********************************!*\
  !*** ./src/base/HTMLComponent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HTMLComponent)\n/* harmony export */ });\nclass HTMLComponent {\n  constructor(props) {\n    this.props = props;\n  }\n  random() {\n    let length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;\n    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';\n    let str = '';\n    for (let i = 0; i < length; i++) {\n      str += chars.charAt(Math.floor(Math.random() * chars.length));\n    }\n    return str;\n  }\n  mounted() {}\n  updateRuntime() {}\n  innerHTML(props) {\n    return /*#__PURE__*/React.createElement(\"div\", null, \"Should Extend innerHTML\");\n  }\n  mount(el) {\n    if (el) this.el = el;\n    this.el.innerHTML = this.innerHTML(this.props);\n    this.mounted();\n  }\n  update(props) {\n    this.props = props;\n    if (this.props.__mode === 'edit') {\n      this.mount();\n    } else {\n      if (this.runtimeUpdate) {\n        this.runtimeUpdate();\n      } else {\n        this.mount();\n      }\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFzZS9IVE1MQ29tcG9uZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxNQUFNQSxhQUFhLENBQUM7RUFDakNDLFdBQVdBLENBQUVDLEtBQUssRUFBRTtJQUNsQixJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSztFQUNwQjtFQUVBQyxNQUFNQSxDQUFBLEVBQWM7SUFBQSxJQUFaQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQUQsTUFBQSxRQUFBQyxTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFHLENBQUM7SUFDaEIsTUFBTUUsS0FBSyxHQUFHLHNEQUFzRDtJQUVwRSxJQUFJQyxHQUFHLEdBQUcsRUFBRTtJQUNaLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHTCxNQUFNLEVBQUVLLENBQUMsRUFBRSxFQUFFO01BQy9CRCxHQUFHLElBQUlELEtBQUssQ0FBQ0csTUFBTSxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDUixNQUFNLENBQUMsQ0FBQyxHQUFHSSxLQUFLLENBQUNILE1BQU0sQ0FBQyxDQUFDO0lBQy9EO0lBQ0EsT0FBT0ksR0FBRztFQUNaO0VBRUFLLE9BQU9BLENBQUEsRUFBSSxDQUFDO0VBQ1pDLGFBQWFBLENBQUEsRUFBSSxDQUFDO0VBQ2xCQyxTQUFTQSxDQUFFYixLQUFLLEVBQUU7SUFDaEIsb0JBQU9jLEtBQUEsQ0FBQUMsYUFBQSxjQUFLLHlCQUE0QixDQUFDO0VBQzNDO0VBRUFDLEtBQUtBLENBQUVDLEVBQUUsRUFBRTtJQUNULElBQUlBLEVBQUUsRUFBRSxJQUFJLENBQUNBLEVBQUUsR0FBR0EsRUFBRTtJQUVwQixJQUFJLENBQUNBLEVBQUUsQ0FBQ0osU0FBUyxHQUFHLElBQUksQ0FBQ0EsU0FBUyxDQUFDLElBQUksQ0FBQ2IsS0FBSyxDQUFDO0lBQzlDLElBQUksQ0FBQ1csT0FBTyxDQUFDLENBQUM7RUFDaEI7RUFFQU8sTUFBTUEsQ0FBRWxCLEtBQUssRUFBRTtJQUNiLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksSUFBSSxDQUFDQSxLQUFLLENBQUNtQixNQUFNLEtBQUssTUFBTSxFQUFFO01BQ2hDLElBQUksQ0FBQ0gsS0FBSyxDQUFDLENBQUM7SUFDZCxDQUFDLE1BQU07TUFDTCxJQUFJLElBQUksQ0FBQ0ksYUFBYSxFQUFFO1FBQ3RCLElBQUksQ0FBQ0EsYUFBYSxDQUFDLENBQUM7TUFDdEIsQ0FBQyxNQUFNO1FBQ0wsSUFBSSxDQUFDSixLQUFLLENBQUMsQ0FBQztNQUNkO0lBQ0Y7RUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmlkZ2UtYnVsbWEvLy4vc3JjL2Jhc2UvSFRNTENvbXBvbmVudC5qcz8wNmI1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhUTUxDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgdGhpcy5wcm9wcyA9IHByb3BzXHJcbiAgfVxyXG5cclxuICByYW5kb20gKGxlbmd0aCA9IDgpIHtcclxuICAgIGNvbnN0IGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonXHJcblxyXG4gICAgbGV0IHN0ciA9ICcnXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHN0ciArPSBjaGFycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKSlcclxuICAgIH1cclxuICAgIHJldHVybiBzdHJcclxuICB9XHJcblxyXG4gIG1vdW50ZWQgKCkge31cclxuICB1cGRhdGVSdW50aW1lICgpIHt9XHJcbiAgaW5uZXJIVE1MIChwcm9wcykge1xyXG4gICAgcmV0dXJuIDxkaXY+U2hvdWxkIEV4dGVuZCBpbm5lckhUTUw8L2Rpdj5cclxuICB9XHJcblxyXG4gIG1vdW50IChlbCkge1xyXG4gICAgaWYgKGVsKSB0aGlzLmVsID0gZWxcclxuXHJcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuaW5uZXJIVE1MKHRoaXMucHJvcHMpXHJcbiAgICB0aGlzLm1vdW50ZWQoKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlIChwcm9wcykge1xyXG4gICAgdGhpcy5wcm9wcyA9IHByb3BzXHJcbiAgICBpZiAodGhpcy5wcm9wcy5fX21vZGUgPT09ICdlZGl0Jykge1xyXG4gICAgICB0aGlzLm1vdW50KClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLnJ1bnRpbWVVcGRhdGUpIHtcclxuICAgICAgICB0aGlzLnJ1bnRpbWVVcGRhdGUoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubW91bnQoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJIVE1MQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJhbmRvbSIsImxlbmd0aCIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImNoYXJzIiwic3RyIiwiaSIsImNoYXJBdCIsIk1hdGgiLCJmbG9vciIsIm1vdW50ZWQiLCJ1cGRhdGVSdW50aW1lIiwiaW5uZXJIVE1MIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwibW91bnQiLCJlbCIsInVwZGF0ZSIsIl9fbW9kZSIsInJ1bnRpbWVVcGRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/base/HTMLComponent.js\n");

/***/ }),

/***/ "./src/text/Text.js":
/*!**************************!*\
  !*** ./src/text/Text.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var _base_HTMLComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/HTMLComponent */ \"./src/base/HTMLComponent.js\");\n\nclass Button extends _base_HTMLComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  innerHTML(_ref) {\n    let {\n      text\n    } = _ref;\n    return `<div style=\"width:100%; height: 100%;\" class=\"text\">\n      ${text == null ? '' : text}\n    </div>`;\n  }\n  mounted() {\n    Object.assign(this.el.querySelector('div.text').style, this.props.fontStyle, {\n      padding: this.props.padding\n    });\n  }\n  updated() {\n    Object.assign(this.el.querySelector('div.text').style, this.props.fontStyle, {\n      padding: this.props.padding\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGV4dC9UZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlEO0FBQ2xDLE1BQU1DLE1BQU0sU0FBU0QsMkRBQWEsQ0FBQztFQUNoREUsU0FBU0EsQ0FBQUMsSUFBQSxFQUVOO0lBQUEsSUFGUTtNQUNUQztJQUNGLENBQUMsR0FBQUQsSUFBQTtJQUNDLE9BQVE7QUFDWixRQUFRQyxJQUFJLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBR0EsSUFBSztBQUNqQyxXQUFXO0VBQ1Q7RUFFQUMsT0FBT0EsQ0FBQSxFQUFJO0lBQ1RDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQ0MsRUFBRSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUNDLEtBQUssRUFBRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsU0FBUyxFQUFFO01BQzNFQyxPQUFPLEVBQUUsSUFBSSxDQUFDRixLQUFLLENBQUNFO0lBQ3RCLENBQUMsQ0FBQztFQUNKO0VBRUFDLE9BQU9BLENBQUEsRUFBSTtJQUNUUixNQUFNLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUNDLEVBQUUsQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDQyxLQUFLLEVBQUUsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFNBQVMsRUFBRTtNQUMzRUMsT0FBTyxFQUFFLElBQUksQ0FBQ0YsS0FBSyxDQUFDRTtJQUN0QixDQUFDLENBQUM7RUFDSjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmlkZ2UtYnVsbWEvLy4vc3JjL3RleHQvVGV4dC5qcz8yYTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIVE1MQ29tcG9uZW50IGZyb20gJy4uL2Jhc2UvSFRNTENvbXBvbmVudCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgSFRNTENvbXBvbmVudCB7XHJcbiAgaW5uZXJIVE1MICh7XHJcbiAgICB0ZXh0XHJcbiAgfSkge1xyXG4gICAgcmV0dXJuIGA8ZGl2IHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OiAxMDAlO1wiIGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAke3RleHQgPT0gbnVsbCA/ICcnIDogdGV4dH1cclxuICAgIDwvZGl2PmBcclxuICB9XHJcblxyXG4gIG1vdW50ZWQgKCkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi50ZXh0Jykuc3R5bGUsIHRoaXMucHJvcHMuZm9udFN0eWxlLCB7XHJcbiAgICAgIHBhZGRpbmc6IHRoaXMucHJvcHMucGFkZGluZ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHVwZGF0ZWQgKCkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi50ZXh0Jykuc3R5bGUsIHRoaXMucHJvcHMuZm9udFN0eWxlLCB7XHJcbiAgICAgIHBhZGRpbmc6IHRoaXMucHJvcHMucGFkZGluZ1xyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkhUTUxDb21wb25lbnQiLCJCdXR0b24iLCJpbm5lckhUTUwiLCJfcmVmIiwidGV4dCIsIm1vdW50ZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJlbCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsInByb3BzIiwiZm9udFN0eWxlIiwicGFkZGluZyIsInVwZGF0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/text/Text.js\n");

/***/ }),

/***/ "./src/text/index.d.js":
/*!*****************************!*\
  !*** ./src/text/index.d.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text */ \"./src/text/Text.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'text',\n  title: '文本',\n  component: _Text__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  icon: 'IconTextRectangle',\n  type: 'vanilla',\n  props: [{\n    name: 'text',\n    label: '内容',\n    connect: true,\n    type: 'string',\n    value: '文字'\n  }, {\n    name: 'fontStyle',\n    label: '样式',\n    type: 'font',\n    value: {}\n  }],\n  events: [],\n  width: 160,\n  height: 32\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGV4dC9pbmRleC5kLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlCO0FBQ3pCLGlFQUFlO0VBQ2JDLElBQUksRUFBRSxNQUFNO0VBQ1pDLEtBQUssRUFBRSxJQUFJO0VBQ1hDLFNBQVMsRUFBRUgsNkNBQUk7RUFDZkksSUFBSSxFQUFFLG1CQUFtQjtFQUN6QkMsSUFBSSxFQUFFLFNBQVM7RUFDZkMsS0FBSyxFQUFFLENBQUM7SUFDTkwsSUFBSSxFQUFFLE1BQU07SUFDWk0sS0FBSyxFQUFFLElBQUk7SUFDWEMsT0FBTyxFQUFFLElBQUk7SUFDYkgsSUFBSSxFQUFFLFFBQVE7SUFDZEksS0FBSyxFQUFFO0VBQ1QsQ0FBQyxFQUFFO0lBQ0RSLElBQUksRUFBRSxXQUFXO0lBQ2pCTSxLQUFLLEVBQUUsSUFBSTtJQUNYRixJQUFJLEVBQUUsTUFBTTtJQUNaSSxLQUFLLEVBQUUsQ0FBQztFQUNWLENBQUMsQ0FBQztFQUNGQyxNQUFNLEVBQUUsRUFBRTtFQUNWQyxLQUFLLEVBQUUsR0FBRztFQUNWQyxNQUFNLEVBQUU7QUFDVixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmlkZ2UtYnVsbWEvLy4vc3JjL3RleHQvaW5kZXguZC5qcz9mZjk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZXh0IGZyb20gJy4vVGV4dCdcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICd0ZXh0JyxcclxuICB0aXRsZTogJ+aWh+acrCcsXHJcbiAgY29tcG9uZW50OiBUZXh0LFxyXG4gIGljb246ICdJY29uVGV4dFJlY3RhbmdsZScsXHJcbiAgdHlwZTogJ3ZhbmlsbGEnLFxyXG4gIHByb3BzOiBbe1xyXG4gICAgbmFtZTogJ3RleHQnLFxyXG4gICAgbGFiZWw6ICflhoXlrrknLFxyXG4gICAgY29ubmVjdDogdHJ1ZSxcclxuICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgdmFsdWU6ICfmloflrZcnXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ2ZvbnRTdHlsZScsXHJcbiAgICBsYWJlbDogJ+agt+W8jycsXHJcbiAgICB0eXBlOiAnZm9udCcsXHJcbiAgICB2YWx1ZToge31cclxuICB9XSxcclxuICBldmVudHM6IFtdLFxyXG4gIHdpZHRoOiAxNjAsXHJcbiAgaGVpZ2h0OiAzMlxyXG59XHJcbiJdLCJuYW1lcyI6WyJUZXh0IiwibmFtZSIsInRpdGxlIiwiY29tcG9uZW50IiwiaWNvbiIsInR5cGUiLCJwcm9wcyIsImxhYmVsIiwiY29ubmVjdCIsInZhbHVlIiwiZXZlbnRzIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/text/index.d.js\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/text/index.d.js");
/******/ 	this["ridge-bulma/text"] = __webpack_exports__;
/******/ 	
/******/ })()
;