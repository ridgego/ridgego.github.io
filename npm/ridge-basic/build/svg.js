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

/***/ "./src/svg/Icon.js":
/*!*************************!*\
  !*** ./src/svg/Icon.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Icon)\n/* harmony export */ });\nclass Icon {\n  constructor(props) {\n    this.props = props;\n  }\n  async mount(el) {\n    this.el = el;\n    this.render();\n  }\n  async render() {\n    if (this.props.src) {\n      this.el.innerHTML = this.props.src;\n    }\n    this.el.onclick = () => {\n      this.props.onClick && this.props.onClick(this.props);\n    };\n    const svg = this.el.querySelector('svg');\n    if (svg) {\n      svg.style.width = '100%';\n      svg.style.height = '100%';\n      svg.style.fill = this.props.color;\n      svg.style.cursor = this.props.cursor;\n    }\n  }\n  getStyle() {\n    const style = {\n      width: '100%',\n      height: '100%',\n      cursor: 'pointer',\n      boxSizing: 'border-box',\n      appearance: 'button',\n      borderRadius: this.props.borderRadius + 'px',\n      border: this.props.border,\n      color: this.props.color,\n      backgroundColor: this.props.backgroundColor\n    };\n    if (this.props.fontSize) {\n      style.fontSize = this.props.fontSize + 'px';\n    }\n    return style;\n  }\n  update(props) {\n    if (props) {\n      Object.assign(this.props, props);\n    }\n    this.render();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnL0ljb24uanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLElBQUksQ0FBQztFQUN4QkMsV0FBV0EsQ0FBRUMsS0FBSyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0VBQ3BCO0VBRUEsTUFBTUMsS0FBS0EsQ0FBRUMsRUFBRSxFQUFFO0lBQ2YsSUFBSSxDQUFDQSxFQUFFLEdBQUdBLEVBQUU7SUFDWixJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0VBQ2Y7RUFFQSxNQUFNQSxNQUFNQSxDQUFBLEVBQUk7SUFDZCxJQUFJLElBQUksQ0FBQ0gsS0FBSyxDQUFDSSxHQUFHLEVBQUU7TUFDbEIsSUFBSSxDQUFDRixFQUFFLENBQUNHLFNBQVMsR0FBRyxJQUFJLENBQUNMLEtBQUssQ0FBQ0ksR0FBRztJQUNwQztJQUNBLElBQUksQ0FBQ0YsRUFBRSxDQUFDSSxPQUFPLEdBQUcsTUFBTTtNQUN0QixJQUFJLENBQUNOLEtBQUssQ0FBQ08sT0FBTyxJQUFJLElBQUksQ0FBQ1AsS0FBSyxDQUFDTyxPQUFPLENBQUMsSUFBSSxDQUFDUCxLQUFLLENBQUM7SUFDdEQsQ0FBQztJQUNELE1BQU1RLEdBQUcsR0FBRyxJQUFJLENBQUNOLEVBQUUsQ0FBQ08sYUFBYSxDQUFDLEtBQUssQ0FBQztJQUV4QyxJQUFJRCxHQUFHLEVBQUU7TUFDUEEsR0FBRyxDQUFDRSxLQUFLLENBQUNDLEtBQUssR0FBRyxNQUFNO01BQ3hCSCxHQUFHLENBQUNFLEtBQUssQ0FBQ0UsTUFBTSxHQUFHLE1BQU07TUFDekJKLEdBQUcsQ0FBQ0UsS0FBSyxDQUFDRyxJQUFJLEdBQUcsSUFBSSxDQUFDYixLQUFLLENBQUNjLEtBQUs7TUFDakNOLEdBQUcsQ0FBQ0UsS0FBSyxDQUFDSyxNQUFNLEdBQUcsSUFBSSxDQUFDZixLQUFLLENBQUNlLE1BQU07SUFDdEM7RUFDRjtFQUVBQyxRQUFRQSxDQUFBLEVBQUk7SUFDVixNQUFNTixLQUFLLEdBQUc7TUFDWkMsS0FBSyxFQUFFLE1BQU07TUFDYkMsTUFBTSxFQUFFLE1BQU07TUFDZEcsTUFBTSxFQUFFLFNBQVM7TUFDakJFLFNBQVMsRUFBRSxZQUFZO01BQ3ZCQyxVQUFVLEVBQUUsUUFBUTtNQUNwQkMsWUFBWSxFQUFFLElBQUksQ0FBQ25CLEtBQUssQ0FBQ21CLFlBQVksR0FBRyxJQUFJO01BQzVDQyxNQUFNLEVBQUUsSUFBSSxDQUFDcEIsS0FBSyxDQUFDb0IsTUFBTTtNQUN6Qk4sS0FBSyxFQUFFLElBQUksQ0FBQ2QsS0FBSyxDQUFDYyxLQUFLO01BQ3ZCTyxlQUFlLEVBQUUsSUFBSSxDQUFDckIsS0FBSyxDQUFDcUI7SUFDOUIsQ0FBQztJQUNELElBQUksSUFBSSxDQUFDckIsS0FBSyxDQUFDc0IsUUFBUSxFQUFFO01BQ3ZCWixLQUFLLENBQUNZLFFBQVEsR0FBRyxJQUFJLENBQUN0QixLQUFLLENBQUNzQixRQUFRLEdBQUcsSUFBSTtJQUM3QztJQUVBLE9BQU9aLEtBQUs7RUFDZDtFQUVBYSxNQUFNQSxDQUFFdkIsS0FBSyxFQUFFO0lBQ2IsSUFBSUEsS0FBSyxFQUFFO01BQ1R3QixNQUFNLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUN6QixLQUFLLEVBQUVBLEtBQUssQ0FBQztJQUNsQztJQUNBLElBQUksQ0FBQ0csTUFBTSxDQUFDLENBQUM7RUFDZjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmlkZ2UtYmFzaWMvLy4vc3JjL3N2Zy9JY29uLmpzP2RmNDYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbiB7XHJcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICB0aGlzLnByb3BzID0gcHJvcHNcclxuICB9XHJcblxyXG4gIGFzeW5jIG1vdW50IChlbCkge1xyXG4gICAgdGhpcy5lbCA9IGVsXHJcbiAgICB0aGlzLnJlbmRlcigpXHJcbiAgfVxyXG5cclxuICBhc3luYyByZW5kZXIgKCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuc3JjKSB7XHJcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5wcm9wcy5zcmNcclxuICAgIH1cclxuICAgIHRoaXMuZWwub25jbGljayA9ICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayh0aGlzLnByb3BzKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3ZnID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdzdmcnKVxyXG5cclxuICAgIGlmIChzdmcpIHtcclxuICAgICAgc3ZnLnN0eWxlLndpZHRoID0gJzEwMCUnXHJcbiAgICAgIHN2Zy5zdHlsZS5oZWlnaHQgPSAnMTAwJSdcclxuICAgICAgc3ZnLnN0eWxlLmZpbGwgPSB0aGlzLnByb3BzLmNvbG9yXHJcbiAgICAgIHN2Zy5zdHlsZS5jdXJzb3IgPSB0aGlzLnByb3BzLmN1cnNvclxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U3R5bGUgKCkge1xyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIGFwcGVhcmFuY2U6ICdidXR0b24nLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IHRoaXMucHJvcHMuYm9yZGVyUmFkaXVzICsgJ3B4JyxcclxuICAgICAgYm9yZGVyOiB0aGlzLnByb3BzLmJvcmRlcixcclxuICAgICAgY29sb3I6IHRoaXMucHJvcHMuY29sb3IsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5wcm9wcy5iYWNrZ3JvdW5kQ29sb3JcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb3BzLmZvbnRTaXplKSB7XHJcbiAgICAgIHN0eWxlLmZvbnRTaXplID0gdGhpcy5wcm9wcy5mb250U2l6ZSArICdweCdcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3R5bGVcclxuICB9XHJcblxyXG4gIHVwZGF0ZSAocHJvcHMpIHtcclxuICAgIGlmIChwcm9wcykge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMucHJvcHMsIHByb3BzKVxyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXIoKVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiSWNvbiIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJtb3VudCIsImVsIiwicmVuZGVyIiwic3JjIiwiaW5uZXJIVE1MIiwib25jbGljayIsIm9uQ2xpY2siLCJzdmciLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImZpbGwiLCJjb2xvciIsImN1cnNvciIsImdldFN0eWxlIiwiYm94U2l6aW5nIiwiYXBwZWFyYW5jZSIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwidXBkYXRlIiwiT2JqZWN0IiwiYXNzaWduIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg/Icon.js\n");

/***/ }),

/***/ "./src/svg/index.d.js":
/*!****************************!*\
  !*** ./src/svg/index.d.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ \"./src/svg/Icon.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'icon',\n  component: _Icon__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  type: 'vanilla',\n  icon: 'bi bi-bag',\n  title: '图标',\n  width: 64,\n  height: 64,\n  props: [{\n    name: 'src',\n    type: 'icon',\n    label: '图标',\n    value: ''\n  }, {\n    name: 'color',\n    label: '颜色',\n    type: 'string',\n    control: 'colorpicker'\n  }],\n  events: [{\n    label: '点击事件',\n    name: 'onClick'\n  }]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnL2luZGV4LmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUI7QUFFekIsaUVBQWU7RUFDYkMsSUFBSSxFQUFFLE1BQU07RUFDWkMsU0FBUyxFQUFFRiw2Q0FBSTtFQUNmRyxJQUFJLEVBQUUsU0FBUztFQUNmQyxJQUFJLEVBQUUsV0FBVztFQUNqQkMsS0FBSyxFQUFFLElBQUk7RUFDWEMsS0FBSyxFQUFFLEVBQUU7RUFDVEMsTUFBTSxFQUFFLEVBQUU7RUFDVkMsS0FBSyxFQUFFLENBQUM7SUFDTlAsSUFBSSxFQUFFLEtBQUs7SUFDWEUsSUFBSSxFQUFFLE1BQU07SUFDWk0sS0FBSyxFQUFFLElBQUk7SUFDWEMsS0FBSyxFQUFFO0VBQ1QsQ0FBQyxFQUFFO0lBQ0RULElBQUksRUFBRSxPQUFPO0lBQ2JRLEtBQUssRUFBRSxJQUFJO0lBQ1hOLElBQUksRUFBRSxRQUFRO0lBQ2RRLE9BQU8sRUFBRTtFQUNYLENBQUMsQ0FBQztFQUNGQyxNQUFNLEVBQUUsQ0FBQztJQUNQSCxLQUFLLEVBQUUsTUFBTTtJQUNiUixJQUFJLEVBQUU7RUFDUixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JpZGdlLWJhc2ljLy8uL3NyYy9zdmcvaW5kZXguZC5qcz82ZWM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJY29uIGZyb20gJy4vSWNvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnaWNvbicsXHJcbiAgY29tcG9uZW50OiBJY29uLFxyXG4gIHR5cGU6ICd2YW5pbGxhJyxcclxuICBpY29uOiAnYmkgYmktYmFnJyxcclxuICB0aXRsZTogJ+WbvuaghycsXHJcbiAgd2lkdGg6IDY0LFxyXG4gIGhlaWdodDogNjQsXHJcbiAgcHJvcHM6IFt7XHJcbiAgICBuYW1lOiAnc3JjJyxcclxuICAgIHR5cGU6ICdpY29uJyxcclxuICAgIGxhYmVsOiAn5Zu+5qCHJyxcclxuICAgIHZhbHVlOiAnJ1xyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdjb2xvcicsXHJcbiAgICBsYWJlbDogJ+minOiJsicsXHJcbiAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgIGNvbnRyb2w6ICdjb2xvcnBpY2tlcidcclxuICB9XSxcclxuICBldmVudHM6IFt7XHJcbiAgICBsYWJlbDogJ+eCueWHu+S6i+S7ticsXHJcbiAgICBuYW1lOiAnb25DbGljaydcclxuICB9XVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJY29uIiwibmFtZSIsImNvbXBvbmVudCIsInR5cGUiLCJpY29uIiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsInByb3BzIiwibGFiZWwiLCJ2YWx1ZSIsImNvbnRyb2wiLCJldmVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg/index.d.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/svg/index.d.js");
/******/ 	this["ridge-basic/svg"] = __webpack_exports__;
/******/ 	
/******/ })()
;