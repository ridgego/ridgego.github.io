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

/***/ "./src/composite/CompositeWrapper.js":
/*!*******************************************!*\
  !*** ./src/composite/CompositeWrapper.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CompositeWrapper)\n/* harmony export */ });\nclass CompositeWrapper {\n  constructor(props) {\n    this.props = props;\n  }\n  getRidge() {\n    return window.ridge ?? this.props.ridge;\n  }\n  async mount(el) {\n    this.el = el;\n    this.loadMountComposite();\n  }\n  async loadMountComposite() {\n    const {\n      ridge,\n      composite,\n      app,\n      page\n    } = this.props;\n    // 页面改变了重新挂载\n    if (this.el.composite) {\n      this.el.composite.unmount();\n    }\n    if (page) {\n      const compositeCreated = await ridge.createComposite(app || composite.appBaseUrl, page, {});\n      if (compositeCreated) {\n        compositeCreated.mount(this.el);\n        this.el.composite = compositeCreated;\n      }\n    }\n  }\n  update(props) {\n    if (this.props.app !== props.app || this.props.page !== props.page) {\n      Object.assign(this.props, props);\n      this.loadMountComposite();\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9zaXRlL0NvbXBvc2l0ZVdyYXBwZXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLGdCQUFnQixDQUFDO0VBQ3BDQyxXQUFXQSxDQUFFQyxLQUFLLEVBQUU7SUFDbEIsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUs7RUFDcEI7RUFFQUMsUUFBUUEsQ0FBQSxFQUFJO0lBQ1YsT0FBT0MsTUFBTSxDQUFDQyxLQUFLLElBQUksSUFBSSxDQUFDSCxLQUFLLENBQUNHLEtBQUs7RUFDekM7RUFFQSxNQUFNQyxLQUFLQSxDQUFFQyxFQUFFLEVBQUU7SUFDZixJQUFJLENBQUNBLEVBQUUsR0FBR0EsRUFBRTtJQUVaLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMsQ0FBQztFQUMzQjtFQUVBLE1BQU1BLGtCQUFrQkEsQ0FBQSxFQUFJO0lBQzFCLE1BQU07TUFBRUgsS0FBSztNQUFFSSxTQUFTO01BQUVDLEdBQUc7TUFBRUM7SUFBSyxDQUFDLEdBQUcsSUFBSSxDQUFDVCxLQUFLO0lBQ2xEO0lBQ0EsSUFBSSxJQUFJLENBQUNLLEVBQUUsQ0FBQ0UsU0FBUyxFQUFFO01BQ3JCLElBQUksQ0FBQ0YsRUFBRSxDQUFDRSxTQUFTLENBQUNHLE9BQU8sQ0FBQyxDQUFDO0lBQzdCO0lBRUEsSUFBSUQsSUFBSSxFQUFFO01BQ1IsTUFBTUUsZ0JBQWdCLEdBQUcsTUFBTVIsS0FBSyxDQUFDUyxlQUFlLENBQUNKLEdBQUcsSUFBSUQsU0FBUyxDQUFDTSxVQUFVLEVBQUVKLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztNQUUzRixJQUFJRSxnQkFBZ0IsRUFBRTtRQUNwQkEsZ0JBQWdCLENBQUNQLEtBQUssQ0FBQyxJQUFJLENBQUNDLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUNBLEVBQUUsQ0FBQ0UsU0FBUyxHQUFHSSxnQkFBZ0I7TUFDdEM7SUFDRjtFQUNGO0VBRUFHLE1BQU1BLENBQUVkLEtBQUssRUFBRTtJQUNiLElBQUksSUFBSSxDQUFDQSxLQUFLLENBQUNRLEdBQUcsS0FBS1IsS0FBSyxDQUFDUSxHQUFHLElBQUksSUFBSSxDQUFDUixLQUFLLENBQUNTLElBQUksS0FBS1QsS0FBSyxDQUFDUyxJQUFJLEVBQUU7TUFDbEVNLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQ2hCLEtBQUssRUFBRUEsS0FBSyxDQUFDO01BQ2hDLElBQUksQ0FBQ00sa0JBQWtCLENBQUMsQ0FBQztJQUMzQjtFQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaWRnZS1iYXNpYy8vLi9zcmMvY29tcG9zaXRlL0NvbXBvc2l0ZVdyYXBwZXIuanM/OGY5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb3NpdGVXcmFwcGVyIHtcclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHRoaXMucHJvcHMgPSBwcm9wc1xyXG4gIH1cclxuXHJcbiAgZ2V0UmlkZ2UgKCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5yaWRnZSA/PyB0aGlzLnByb3BzLnJpZGdlXHJcbiAgfVxyXG5cclxuICBhc3luYyBtb3VudCAoZWwpIHtcclxuICAgIHRoaXMuZWwgPSBlbFxyXG5cclxuICAgIHRoaXMubG9hZE1vdW50Q29tcG9zaXRlKClcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRNb3VudENvbXBvc2l0ZSAoKSB7XHJcbiAgICBjb25zdCB7IHJpZGdlLCBjb21wb3NpdGUsIGFwcCwgcGFnZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgLy8g6aG16Z2i5pS55Y+Y5LqG6YeN5paw5oyC6L29XHJcbiAgICBpZiAodGhpcy5lbC5jb21wb3NpdGUpIHtcclxuICAgICAgdGhpcy5lbC5jb21wb3NpdGUudW5tb3VudCgpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhZ2UpIHtcclxuICAgICAgY29uc3QgY29tcG9zaXRlQ3JlYXRlZCA9IGF3YWl0IHJpZGdlLmNyZWF0ZUNvbXBvc2l0ZShhcHAgfHwgY29tcG9zaXRlLmFwcEJhc2VVcmwsIHBhZ2UsIHt9KVxyXG5cclxuICAgICAgaWYgKGNvbXBvc2l0ZUNyZWF0ZWQpIHtcclxuICAgICAgICBjb21wb3NpdGVDcmVhdGVkLm1vdW50KHRoaXMuZWwpXHJcbiAgICAgICAgdGhpcy5lbC5jb21wb3NpdGUgPSBjb21wb3NpdGVDcmVhdGVkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZSAocHJvcHMpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmFwcCAhPT0gcHJvcHMuYXBwIHx8IHRoaXMucHJvcHMucGFnZSAhPT0gcHJvcHMucGFnZSkge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMucHJvcHMsIHByb3BzKVxyXG4gICAgICB0aGlzLmxvYWRNb3VudENvbXBvc2l0ZSgpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDb21wb3NpdGVXcmFwcGVyIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImdldFJpZGdlIiwid2luZG93IiwicmlkZ2UiLCJtb3VudCIsImVsIiwibG9hZE1vdW50Q29tcG9zaXRlIiwiY29tcG9zaXRlIiwiYXBwIiwicGFnZSIsInVubW91bnQiLCJjb21wb3NpdGVDcmVhdGVkIiwiY3JlYXRlQ29tcG9zaXRlIiwiYXBwQmFzZVVybCIsInVwZGF0ZSIsIk9iamVjdCIsImFzc2lnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/composite/CompositeWrapper.js\n");

/***/ }),

/***/ "./src/composite/index.d.js":
/*!**********************************!*\
  !*** ./src/composite/index.d.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _CompositeWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompositeWrapper */ \"./src/composite/CompositeWrapper.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'composite',\n  component: _CompositeWrapper__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  title: '组合',\n  icon: 'bi bi-box-seam',\n  type: 'vanilla',\n  order: 9,\n  width: 150,\n  height: 60,\n  props: [{\n    name: 'app',\n    label: '程序包名',\n    type: 'string'\n  }, {\n    name: 'page',\n    label: '组件路径',\n    type: 'page'\n  }],\n  events: [],\n  requiredProperties: ['ridge', 'composite']\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9zaXRlL2luZGV4LmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEM7QUFFMUMsaUVBQWU7RUFDYkMsSUFBSSxFQUFFLFdBQVc7RUFDakJDLFNBQVMsRUFBRUYseURBQVM7RUFDcEJHLEtBQUssRUFBRSxJQUFJO0VBQ1hDLElBQUksRUFBRSxnQkFBZ0I7RUFDdEJDLElBQUksRUFBRSxTQUFTO0VBQ2ZDLEtBQUssRUFBRSxDQUFDO0VBQ1JDLEtBQUssRUFBRSxHQUFHO0VBQ1ZDLE1BQU0sRUFBRSxFQUFFO0VBQ1ZDLEtBQUssRUFBRSxDQUFDO0lBQ05SLElBQUksRUFBRSxLQUFLO0lBQ1hTLEtBQUssRUFBRSxNQUFNO0lBQ2JMLElBQUksRUFBRTtFQUNSLENBQUMsRUFBRTtJQUNESixJQUFJLEVBQUUsTUFBTTtJQUNaUyxLQUFLLEVBQUUsTUFBTTtJQUNiTCxJQUFJLEVBQUU7RUFDUixDQUFDLENBQUM7RUFDRk0sTUFBTSxFQUFFLEVBQUU7RUFDVkMsa0JBQWtCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsV0FBVztBQUMzQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmlkZ2UtYmFzaWMvLy4vc3JjL2NvbXBvc2l0ZS9pbmRleC5kLmpzPzRhZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL0NvbXBvc2l0ZVdyYXBwZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ2NvbXBvc2l0ZScsXHJcbiAgY29tcG9uZW50OiBDb21wb3NpdGUsXHJcbiAgdGl0bGU6ICfnu4TlkIgnLFxyXG4gIGljb246ICdiaSBiaS1ib3gtc2VhbScsXHJcbiAgdHlwZTogJ3ZhbmlsbGEnLFxyXG4gIG9yZGVyOiA5LFxyXG4gIHdpZHRoOiAxNTAsXHJcbiAgaGVpZ2h0OiA2MCxcclxuICBwcm9wczogW3tcclxuICAgIG5hbWU6ICdhcHAnLFxyXG4gICAgbGFiZWw6ICfnqIvluo/ljIXlkI0nLFxyXG4gICAgdHlwZTogJ3N0cmluZydcclxuICB9LCB7XHJcbiAgICBuYW1lOiAncGFnZScsXHJcbiAgICBsYWJlbDogJ+e7hOS7tui3r+W+hCcsXHJcbiAgICB0eXBlOiAncGFnZSdcclxuICB9XSxcclxuICBldmVudHM6IFtdLFxyXG4gIHJlcXVpcmVkUHJvcGVydGllczogWydyaWRnZScsICdjb21wb3NpdGUnXVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDb21wb3NpdGUiLCJuYW1lIiwiY29tcG9uZW50IiwidGl0bGUiLCJpY29uIiwidHlwZSIsIm9yZGVyIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9wcyIsImxhYmVsIiwiZXZlbnRzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/composite/index.d.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/composite/index.d.js");
/******/ 	this["ridge-basic/composite"] = __webpack_exports__;
/******/ 	
/******/ })()
;