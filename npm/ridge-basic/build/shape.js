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

/***/ "./src/shape/Shape.js":
/*!****************************!*\
  !*** ./src/shape/Shape.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Shape)\n/* harmony export */ });\nclass Shape {\n  constructor(props) {\n    this.props = props;\n  }\n  mount(el) {\n    this.el = el;\n    this.render();\n  }\n  render() {\n    const {\n      color,\n      clippath,\n      className = []\n    } = this.props;\n    this.el.innerHTML = `<div style='background: ${color}; clip-path:${clippath}; width: 100%; height: 100%;' class='${className.join(' ')}'></div>`;\n  }\n  update(props) {\n    this.props = props;\n    this.render();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hhcGUvU2hhcGUuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLEtBQUssQ0FBQztFQUN6QkMsV0FBV0EsQ0FBRUMsS0FBSyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0VBQ3BCO0VBRUFDLEtBQUtBLENBQUVDLEVBQUUsRUFBRTtJQUNULElBQUksQ0FBQ0EsRUFBRSxHQUFHQSxFQUFFO0lBRVosSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQztFQUNmO0VBRUFBLE1BQU1BLENBQUEsRUFBSTtJQUNSLE1BQU07TUFDSkMsS0FBSztNQUNMQyxRQUFRO01BQ1JDLFNBQVMsR0FBRztJQUNkLENBQUMsR0FBRyxJQUFJLENBQUNOLEtBQUs7SUFDZCxJQUFJLENBQUNFLEVBQUUsQ0FBQ0ssU0FBUyxHQUFJLDJCQUEwQkgsS0FBTSxlQUFjQyxRQUFTLHdDQUF1Q0MsU0FBUyxDQUFDRSxJQUFJLENBQUMsR0FBRyxDQUFFLFVBQVM7RUFDbEo7RUFFQUMsTUFBTUEsQ0FBRVQsS0FBSyxFQUFFO0lBQ2IsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDRyxNQUFNLENBQUMsQ0FBQztFQUNmO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaWRnZS1iYXNpYy8vLi9zcmMvc2hhcGUvU2hhcGUuanM/NDIxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFwZSB7XHJcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICB0aGlzLnByb3BzID0gcHJvcHNcclxuICB9XHJcblxyXG4gIG1vdW50IChlbCkge1xyXG4gICAgdGhpcy5lbCA9IGVsXHJcblxyXG4gICAgdGhpcy5yZW5kZXIoKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgY29sb3IsXHJcbiAgICAgIGNsaXBwYXRoLFxyXG4gICAgICBjbGFzc05hbWUgPSBbXVxyXG4gICAgfSA9IHRoaXMucHJvcHNcclxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYDxkaXYgc3R5bGU9J2JhY2tncm91bmQ6ICR7Y29sb3J9OyBjbGlwLXBhdGg6JHtjbGlwcGF0aH07IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7JyBjbGFzcz0nJHtjbGFzc05hbWUuam9pbignICcpfSc+PC9kaXY+YFxyXG4gIH1cclxuXHJcbiAgdXBkYXRlIChwcm9wcykge1xyXG4gICAgdGhpcy5wcm9wcyA9IHByb3BzXHJcbiAgICB0aGlzLnJlbmRlcigpXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJTaGFwZSIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJtb3VudCIsImVsIiwicmVuZGVyIiwiY29sb3IiLCJjbGlwcGF0aCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImpvaW4iLCJ1cGRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/shape/Shape.js\n");

/***/ }),

/***/ "./src/shape/shape.d.js":
/*!******************************!*\
  !*** ./src/shape/shape.d.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Shape_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shape.js */ \"./src/shape/Shape.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'image',\n  component: _Shape_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  icon: 'bi bi-circle-square',\n  title: '形状',\n  type: 'vanilla',\n  order: 3,\n  width: 160,\n  height: 160,\n  props: [{\n    name: 'color',\n    type: 'color',\n    label: '颜色',\n    connect: true,\n    value: '#BBB'\n  }, {\n    name: 'clippath',\n    type: 'string',\n    label: '裁剪',\n    connect: true\n  }, {\n    name: 'className',\n    label: '样式',\n    type: 'style',\n    value: []\n  }]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hhcGUvc2hhcGUuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QjtBQUU5QixpRUFBZTtFQUNiQyxJQUFJLEVBQUUsT0FBTztFQUNiQyxTQUFTLEVBQUVGLGlEQUFLO0VBQ2hCRyxJQUFJLEVBQUUscUJBQXFCO0VBQzNCQyxLQUFLLEVBQUUsSUFBSTtFQUNYQyxJQUFJLEVBQUUsU0FBUztFQUNmQyxLQUFLLEVBQUUsQ0FBQztFQUNSQyxLQUFLLEVBQUUsR0FBRztFQUNWQyxNQUFNLEVBQUUsR0FBRztFQUNYQyxLQUFLLEVBQUUsQ0FBQztJQUNOUixJQUFJLEVBQUUsT0FBTztJQUNiSSxJQUFJLEVBQUUsT0FBTztJQUNiSyxLQUFLLEVBQUUsSUFBSTtJQUNYQyxPQUFPLEVBQUUsSUFBSTtJQUNiQyxLQUFLLEVBQUU7RUFDVCxDQUFDLEVBQUU7SUFDRFgsSUFBSSxFQUFFLFVBQVU7SUFDaEJJLElBQUksRUFBRSxRQUFRO0lBQ2RLLEtBQUssRUFBRSxJQUFJO0lBQ1hDLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtJQUNEVixJQUFJLEVBQUUsV0FBVztJQUNqQlMsS0FBSyxFQUFFLElBQUk7SUFDWEwsSUFBSSxFQUFFLE9BQU87SUFDYk8sS0FBSyxFQUFFO0VBQ1QsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaWRnZS1iYXNpYy8vLi9zcmMvc2hhcGUvc2hhcGUuZC5qcz85ODFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGFwZSBmcm9tICcuL1NoYXBlLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdpbWFnZScsXHJcbiAgY29tcG9uZW50OiBTaGFwZSxcclxuICBpY29uOiAnYmkgYmktY2lyY2xlLXNxdWFyZScsXHJcbiAgdGl0bGU6ICflvaLnirYnLFxyXG4gIHR5cGU6ICd2YW5pbGxhJyxcclxuICBvcmRlcjogMyxcclxuICB3aWR0aDogMTYwLFxyXG4gIGhlaWdodDogMTYwLFxyXG4gIHByb3BzOiBbe1xyXG4gICAgbmFtZTogJ2NvbG9yJyxcclxuICAgIHR5cGU6ICdjb2xvcicsXHJcbiAgICBsYWJlbDogJ+minOiJsicsXHJcbiAgICBjb25uZWN0OiB0cnVlLFxyXG4gICAgdmFsdWU6ICcjQkJCJ1xyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdjbGlwcGF0aCcsXHJcbiAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgIGxhYmVsOiAn6KOB5YmqJyxcclxuICAgIGNvbm5lY3Q6IHRydWVcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnY2xhc3NOYW1lJyxcclxuICAgIGxhYmVsOiAn5qC35byPJyxcclxuICAgIHR5cGU6ICdzdHlsZScsXHJcbiAgICB2YWx1ZTogW11cclxuICB9XVxyXG59XHJcbiJdLCJuYW1lcyI6WyJTaGFwZSIsIm5hbWUiLCJjb21wb25lbnQiLCJpY29uIiwidGl0bGUiLCJ0eXBlIiwib3JkZXIiLCJ3aWR0aCIsImhlaWdodCIsInByb3BzIiwibGFiZWwiLCJjb25uZWN0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/shape/shape.d.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/shape/shape.d.js");
/******/ 	this["ridge-basic/shape"] = __webpack_exports__;
/******/ 	
/******/ })()
;