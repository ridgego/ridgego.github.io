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

/***/ "./src/video/Video.js":
/*!****************************!*\
  !*** ./src/video/Video.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Audio)\n/* harmony export */ });\nclass Audio {\n  constructor(props) {\n    this.props = props;\n  }\n  mount(el) {\n    this.el = el;\n    this.audio = document.createElement('video');\n    this.el.append(this.audio);\n    this.render();\n  }\n  render() {\n    const bcr = this.el.getBoundingClientRect();\n    const {\n      src\n    } = this.props;\n    this.audio.src = src;\n    this.audio.setAttribute('width', bcr.width);\n    this.audio.setAttribute('height', bcr.height);\n    this.audio.setAttribute('autoplay', true);\n    this.audio.setAttribute('muted', true);\n  }\n  update(props) {\n    this.props = props;\n    this.render();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlkZW8vVmlkZW8uanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLEtBQUssQ0FBQztFQUN6QkMsV0FBV0EsQ0FBRUMsS0FBSyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0VBQ3BCO0VBRUFDLEtBQUtBLENBQUVDLEVBQUUsRUFBRTtJQUNULElBQUksQ0FBQ0EsRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUM1QyxJQUFJLENBQUNILEVBQUUsQ0FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQ0gsS0FBSyxDQUFDO0lBRTFCLElBQUksQ0FBQ0ksTUFBTSxDQUFDLENBQUM7RUFDZjtFQUVBQSxNQUFNQSxDQUFBLEVBQUk7SUFDUixNQUFNQyxHQUFHLEdBQUcsSUFBSSxDQUFDTixFQUFFLENBQUNPLHFCQUFxQixDQUFDLENBQUM7SUFFM0MsTUFBTTtNQUFFQztJQUFJLENBQUMsR0FBRyxJQUFJLENBQUNWLEtBQUs7SUFDMUIsSUFBSSxDQUFDRyxLQUFLLENBQUNPLEdBQUcsR0FBR0EsR0FBRztJQUNwQixJQUFJLENBQUNQLEtBQUssQ0FBQ1EsWUFBWSxDQUFDLE9BQU8sRUFBRUgsR0FBRyxDQUFDSSxLQUFLLENBQUM7SUFDM0MsSUFBSSxDQUFDVCxLQUFLLENBQUNRLFlBQVksQ0FBQyxRQUFRLEVBQUVILEdBQUcsQ0FBQ0ssTUFBTSxDQUFDO0lBQzdDLElBQUksQ0FBQ1YsS0FBSyxDQUFDUSxZQUFZLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztJQUN6QyxJQUFJLENBQUNSLEtBQUssQ0FBQ1EsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7RUFDeEM7RUFFQUcsTUFBTUEsQ0FBRWQsS0FBSyxFQUFFO0lBQ2IsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDTyxNQUFNLENBQUMsQ0FBQztFQUNmO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaWRnZS1iYXNpYy8vLi9zcmMvdmlkZW8vVmlkZW8uanM/MWJlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpbyB7XHJcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICB0aGlzLnByb3BzID0gcHJvcHNcclxuICB9XHJcblxyXG4gIG1vdW50IChlbCkge1xyXG4gICAgdGhpcy5lbCA9IGVsXHJcbiAgICB0aGlzLmF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKVxyXG4gICAgdGhpcy5lbC5hcHBlbmQodGhpcy5hdWRpbylcclxuXHJcbiAgICB0aGlzLnJlbmRlcigpXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3QgYmNyID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cclxuICAgIGNvbnN0IHsgc3JjIH0gPSB0aGlzLnByb3BzXHJcbiAgICB0aGlzLmF1ZGlvLnNyYyA9IHNyY1xyXG4gICAgdGhpcy5hdWRpby5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYmNyLndpZHRoKVxyXG4gICAgdGhpcy5hdWRpby5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGJjci5oZWlnaHQpXHJcbiAgICB0aGlzLmF1ZGlvLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCB0cnVlKVxyXG4gICAgdGhpcy5hdWRpby5zZXRBdHRyaWJ1dGUoJ211dGVkJywgdHJ1ZSlcclxuICB9XHJcblxyXG4gIHVwZGF0ZSAocHJvcHMpIHtcclxuICAgIHRoaXMucHJvcHMgPSBwcm9wc1xyXG4gICAgdGhpcy5yZW5kZXIoKVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiQXVkaW8iLCJjb25zdHJ1Y3RvciIsInByb3BzIiwibW91bnQiLCJlbCIsImF1ZGlvIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kIiwicmVuZGVyIiwiYmNyIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic3JjIiwic2V0QXR0cmlidXRlIiwid2lkdGgiLCJoZWlnaHQiLCJ1cGRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/video/Video.js\n");

/***/ }),

/***/ "./src/video/index.d.js":
/*!******************************!*\
  !*** ./src/video/index.d.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Video */ \"./src/video/Video.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'video',\n  component: _Video__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  icon: 'bi bi-film',\n  type: 'vanilla',\n  title: '视频',\n  order: 10,\n  width: 120,\n  height: 80,\n  props: [{\n    name: 'src',\n    label: '地址',\n    type: 'string'\n  }, {\n    name: 'autoplay',\n    label: '播放',\n    connect: true,\n    type: 'boolean'\n  }],\n  events: [],\n  methods: []\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlkZW8vaW5kZXguZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQjtBQUMzQixpRUFBZTtFQUNiQyxJQUFJLEVBQUUsT0FBTztFQUNiQyxTQUFTLEVBQUVGLDhDQUFLO0VBQ2hCRyxJQUFJLEVBQUUsWUFBWTtFQUNsQkMsSUFBSSxFQUFFLFNBQVM7RUFDZkMsS0FBSyxFQUFFLElBQUk7RUFDWEMsS0FBSyxFQUFFLEVBQUU7RUFDVEMsS0FBSyxFQUFFLEdBQUc7RUFDVkMsTUFBTSxFQUFFLEVBQUU7RUFDVkMsS0FBSyxFQUFFLENBQUM7SUFDTlIsSUFBSSxFQUFFLEtBQUs7SUFDWFMsS0FBSyxFQUFFLElBQUk7SUFDWE4sSUFBSSxFQUFFO0VBQ1IsQ0FBQyxFQUFFO0lBQ0RILElBQUksRUFBRSxVQUFVO0lBQ2hCUyxLQUFLLEVBQUUsSUFBSTtJQUNYQyxPQUFPLEVBQUUsSUFBSTtJQUNiUCxJQUFJLEVBQUU7RUFDUixDQUFDLENBQUM7RUFDRlEsTUFBTSxFQUFFLEVBQUU7RUFDVkMsT0FBTyxFQUFFO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JpZGdlLWJhc2ljLy8uL3NyYy92aWRlby9pbmRleC5kLmpzP2E1MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZGVvIGZyb20gJy4vVmlkZW8nXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAndmlkZW8nLFxyXG4gIGNvbXBvbmVudDogVmlkZW8sXHJcbiAgaWNvbjogJ2JpIGJpLWZpbG0nLFxyXG4gIHR5cGU6ICd2YW5pbGxhJyxcclxuICB0aXRsZTogJ+inhumikScsXHJcbiAgb3JkZXI6IDEwLFxyXG4gIHdpZHRoOiAxMjAsXHJcbiAgaGVpZ2h0OiA4MCxcclxuICBwcm9wczogW3tcclxuICAgIG5hbWU6ICdzcmMnLFxyXG4gICAgbGFiZWw6ICflnLDlnYAnLFxyXG4gICAgdHlwZTogJ3N0cmluZydcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnYXV0b3BsYXknLFxyXG4gICAgbGFiZWw6ICfmkq3mlL4nLFxyXG4gICAgY29ubmVjdDogdHJ1ZSxcclxuICAgIHR5cGU6ICdib29sZWFuJ1xyXG4gIH1dLFxyXG4gIGV2ZW50czogW10sXHJcbiAgbWV0aG9kczogW11cclxufVxyXG4iXSwibmFtZXMiOlsiVmlkZW8iLCJuYW1lIiwiY29tcG9uZW50IiwiaWNvbiIsInR5cGUiLCJ0aXRsZSIsIm9yZGVyIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9wcyIsImxhYmVsIiwiY29ubmVjdCIsImV2ZW50cyIsIm1ldGhvZHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/video/index.d.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/video/index.d.js");
/******/ 	this["ridge-basic/video"] = __webpack_exports__;
/******/ 	
/******/ })()
;