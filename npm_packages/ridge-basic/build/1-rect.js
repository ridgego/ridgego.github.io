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

/***/ "./src/1-rect/Rect.js":
/*!****************************!*\
  !*** ./src/1-rect/Rect.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Rect)\n/* harmony export */ });\nclass Rect {\n  constructor(props) {\n    this.props = props;\n  }\n  async mount(el) {\n    this.el = el;\n    this.div = document.createElement('div');\n    this.div.style.width = '100%';\n    this.div.style.height = '100%';\n    this.el.append(this.div);\n    this.render();\n  }\n  update(props) {\n    this.props = props;\n    this.render();\n  }\n  render() {\n    const {\n      borderRadius,\n      borderColor,\n      borderStyle,\n      borderWidth,\n      backgroundColor,\n      backgroundImage\n    } = this.props;\n    this.div.style.border = `${borderWidth}px ${borderStyle} ${borderColor}`;\n    this.div.style.borderRadius = borderRadius || 0;\n    this.div.style.backgroundColor = backgroundColor;\n    this.div.style.backgroundSize = '100%';\n    this.div.style.backgroundRepeat = 'no-repeat';\n    this.div.style.backgroundImage = `url(${backgroundImage})`;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvMS1yZWN0L1JlY3QuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLElBQUksQ0FBQztFQUN4QkMsV0FBV0EsQ0FBRUMsS0FBSyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0VBQ3BCO0VBRUEsTUFBTUMsS0FBS0EsQ0FBRUMsRUFBRSxFQUFFO0lBQ2YsSUFBSSxDQUFDQSxFQUFFLEdBQUdBLEVBQUU7SUFDWixJQUFJLENBQUNDLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3hDLElBQUksQ0FBQ0YsR0FBRyxDQUFDRyxLQUFLLENBQUNDLEtBQUssR0FBRyxNQUFNO0lBQzdCLElBQUksQ0FBQ0osR0FBRyxDQUFDRyxLQUFLLENBQUNFLE1BQU0sR0FBRyxNQUFNO0lBQzlCLElBQUksQ0FBQ04sRUFBRSxDQUFDTyxNQUFNLENBQUMsSUFBSSxDQUFDTixHQUFHLENBQUM7SUFDeEIsSUFBSSxDQUFDTyxNQUFNLENBQUMsQ0FBQztFQUNmO0VBRUFDLE1BQU1BLENBQUVYLEtBQUssRUFBRTtJQUNiLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ1UsTUFBTSxDQUFDLENBQUM7RUFDZjtFQUVBQSxNQUFNQSxDQUFBLEVBQUk7SUFDUixNQUFNO01BQ0pFLFlBQVk7TUFDWkMsV0FBVztNQUNYQyxXQUFXO01BQ1hDLFdBQVc7TUFDWEMsZUFBZTtNQUNmQztJQUNGLENBQUMsR0FBRyxJQUFJLENBQUNqQixLQUFLO0lBQ2QsSUFBSSxDQUFDRyxHQUFHLENBQUNHLEtBQUssQ0FBQ1ksTUFBTSxHQUFJLEdBQUVILFdBQVksTUFBS0QsV0FBWSxJQUFHRCxXQUFZLEVBQUM7SUFDeEUsSUFBSSxDQUFDVixHQUFHLENBQUNHLEtBQUssQ0FBQ00sWUFBWSxHQUFHQSxZQUFZLElBQUksQ0FBQztJQUMvQyxJQUFJLENBQUNULEdBQUcsQ0FBQ0csS0FBSyxDQUFDVSxlQUFlLEdBQUdBLGVBQWU7SUFDaEQsSUFBSSxDQUFDYixHQUFHLENBQUNHLEtBQUssQ0FBQ2EsY0FBYyxHQUFHLE1BQU07SUFDdEMsSUFBSSxDQUFDaEIsR0FBRyxDQUFDRyxLQUFLLENBQUNjLGdCQUFnQixHQUFHLFdBQVc7SUFDN0MsSUFBSSxDQUFDakIsR0FBRyxDQUFDRyxLQUFLLENBQUNXLGVBQWUsR0FBSSxPQUFNQSxlQUFnQixHQUFFO0VBQzVEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaWRnZS1iYXNpYy8vLi9zcmMvMS1yZWN0L1JlY3QuanM/ZmE5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0IHtcclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHRoaXMucHJvcHMgPSBwcm9wc1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbW91bnQgKGVsKSB7XHJcbiAgICB0aGlzLmVsID0gZWxcclxuICAgIHRoaXMuZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHRoaXMuZGl2LnN0eWxlLndpZHRoID0gJzEwMCUnXHJcbiAgICB0aGlzLmRpdi5zdHlsZS5oZWlnaHQgPSAnMTAwJSdcclxuICAgIHRoaXMuZWwuYXBwZW5kKHRoaXMuZGl2KVxyXG4gICAgdGhpcy5yZW5kZXIoKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlIChwcm9wcykge1xyXG4gICAgdGhpcy5wcm9wcyA9IHByb3BzXHJcbiAgICB0aGlzLnJlbmRlcigpXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBib3JkZXJSYWRpdXMsXHJcbiAgICAgIGJvcmRlckNvbG9yLFxyXG4gICAgICBib3JkZXJTdHlsZSxcclxuICAgICAgYm9yZGVyV2lkdGgsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcixcclxuICAgICAgYmFja2dyb3VuZEltYWdlXHJcbiAgICB9ID0gdGhpcy5wcm9wc1xyXG4gICAgdGhpcy5kaXYuc3R5bGUuYm9yZGVyID0gYCR7Ym9yZGVyV2lkdGh9cHggJHtib3JkZXJTdHlsZX0gJHtib3JkZXJDb2xvcn1gXHJcbiAgICB0aGlzLmRpdi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBib3JkZXJSYWRpdXMgfHwgMFxyXG4gICAgdGhpcy5kaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yXHJcbiAgICB0aGlzLmRpdi5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICcxMDAlJ1xyXG4gICAgdGhpcy5kaXYuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnXHJcbiAgICB0aGlzLmRpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YmFja2dyb3VuZEltYWdlfSlgXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWN0IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsIm1vdW50IiwiZWwiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYXBwZW5kIiwicmVuZGVyIiwidXBkYXRlIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJTdHlsZSIsImJvcmRlcldpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZEltYWdlIiwiYm9yZGVyIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/1-rect/Rect.js\n");

/***/ }),

/***/ "./src/1-rect/rect.d.js":
/*!******************************!*\
  !*** ./src/1-rect/rect.d.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rect */ \"./src/1-rect/Rect.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'rect',\n  component: _Rect__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  icon: 'bi bi-square',\n  type: 'vanilla',\n  title: '矩形',\n  order: 1,\n  width: 240,\n  height: 160,\n  props: [{\n    name: 'borderWidth',\n    label: '边框',\n    type: 'number',\n    width: 96,\n    value: 1\n  }, {\n    name: 'borderStyle',\n    type: 'select',\n    value: 'solid',\n    width: 72,\n    options: [{\n      label: '实线',\n      value: 'solid'\n    }, {\n      label: '虚线',\n      value: 'dashed'\n    }, {\n      label: '点线',\n      value: 'dotted'\n    }, {\n      label: '双实线',\n      value: 'double'\n    }]\n  }, {\n    name: 'borderColor',\n    width: 28,\n    type: 'color',\n    value: '#AAA'\n  }, {\n    name: 'borderRadius',\n    label: '圆角',\n    width: '50%',\n    type: 'string',\n    value: '0px'\n  }, {\n    name: 'backgroundColor',\n    label: '背景色',\n    width: '40%',\n    type: 'color'\n  }, {\n    name: 'backgroundImage',\n    label: '图片',\n    width: '60%',\n    type: 'image'\n  }]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvMS1yZWN0L3JlY3QuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF5QjtBQUV6QixpRUFBZTtFQUNiQyxJQUFJLEVBQUUsTUFBTTtFQUNaQyxTQUFTLEVBQUVGLDZDQUFJO0VBQ2ZHLElBQUksRUFBRSxjQUFjO0VBQ3BCQyxJQUFJLEVBQUUsU0FBUztFQUNmQyxLQUFLLEVBQUUsSUFBSTtFQUNYQyxLQUFLLEVBQUUsQ0FBQztFQUNSQyxLQUFLLEVBQUUsR0FBRztFQUNWQyxNQUFNLEVBQUUsR0FBRztFQUNYQyxLQUFLLEVBQUUsQ0FBQztJQUNOUixJQUFJLEVBQUUsYUFBYTtJQUNuQlMsS0FBSyxFQUFFLElBQUk7SUFDWE4sSUFBSSxFQUFFLFFBQVE7SUFDZEcsS0FBSyxFQUFFLEVBQUU7SUFDVEksS0FBSyxFQUFFO0VBQ1QsQ0FBQyxFQUFFO0lBQ0RWLElBQUksRUFBRSxhQUFhO0lBQ25CRyxJQUFJLEVBQUUsUUFBUTtJQUNkTyxLQUFLLEVBQUUsT0FBTztJQUNkSixLQUFLLEVBQUUsRUFBRTtJQUNUSyxPQUFPLEVBQUUsQ0FBQztNQUNSRixLQUFLLEVBQUUsSUFBSTtNQUNYQyxLQUFLLEVBQUU7SUFDVCxDQUFDLEVBQUU7TUFDREQsS0FBSyxFQUFFLElBQUk7TUFDWEMsS0FBSyxFQUFFO0lBQ1QsQ0FBQyxFQUFFO01BQ0RELEtBQUssRUFBRSxJQUFJO01BQ1hDLEtBQUssRUFBRTtJQUNULENBQUMsRUFBRTtNQUNERCxLQUFLLEVBQUUsS0FBSztNQUNaQyxLQUFLLEVBQUU7SUFDVCxDQUFDO0VBQ0gsQ0FBQyxFQUFFO0lBQ0RWLElBQUksRUFBRSxhQUFhO0lBQ25CTSxLQUFLLEVBQUUsRUFBRTtJQUNUSCxJQUFJLEVBQUUsT0FBTztJQUNiTyxLQUFLLEVBQUU7RUFDVCxDQUFDLEVBQUU7SUFDRFYsSUFBSSxFQUFFLGNBQWM7SUFDcEJTLEtBQUssRUFBRSxJQUFJO0lBQ1hILEtBQUssRUFBRSxLQUFLO0lBQ1pILElBQUksRUFBRSxRQUFRO0lBQ2RPLEtBQUssRUFBRTtFQUNULENBQUMsRUFBRTtJQUNEVixJQUFJLEVBQUUsaUJBQWlCO0lBQ3ZCUyxLQUFLLEVBQUUsS0FBSztJQUNaSCxLQUFLLEVBQUUsS0FBSztJQUNaSCxJQUFJLEVBQUU7RUFDUixDQUFDLEVBQUU7SUFDREgsSUFBSSxFQUFFLGlCQUFpQjtJQUN2QlMsS0FBSyxFQUFFLElBQUk7SUFDWEgsS0FBSyxFQUFFLEtBQUs7SUFDWkgsSUFBSSxFQUFFO0VBQ1IsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaWRnZS1iYXNpYy8vLi9zcmMvMS1yZWN0L3JlY3QuZC5qcz9mMTQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWN0IGZyb20gJy4vUmVjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAncmVjdCcsXHJcbiAgY29tcG9uZW50OiBSZWN0LFxyXG4gIGljb246ICdiaSBiaS1zcXVhcmUnLFxyXG4gIHR5cGU6ICd2YW5pbGxhJyxcclxuICB0aXRsZTogJ+efqeW9oicsXHJcbiAgb3JkZXI6IDEsXHJcbiAgd2lkdGg6IDI0MCxcclxuICBoZWlnaHQ6IDE2MCxcclxuICBwcm9wczogW3tcclxuICAgIG5hbWU6ICdib3JkZXJXaWR0aCcsXHJcbiAgICBsYWJlbDogJ+i+ueahhicsXHJcbiAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgIHdpZHRoOiA5NixcclxuICAgIHZhbHVlOiAxXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ2JvcmRlclN0eWxlJyxcclxuICAgIHR5cGU6ICdzZWxlY3QnLFxyXG4gICAgdmFsdWU6ICdzb2xpZCcsXHJcbiAgICB3aWR0aDogNzIsXHJcbiAgICBvcHRpb25zOiBbe1xyXG4gICAgICBsYWJlbDogJ+Wunue6vycsXHJcbiAgICAgIHZhbHVlOiAnc29saWQnXHJcbiAgICB9LCB7XHJcbiAgICAgIGxhYmVsOiAn6Jma57q/JyxcclxuICAgICAgdmFsdWU6ICdkYXNoZWQnXHJcbiAgICB9LCB7XHJcbiAgICAgIGxhYmVsOiAn54K557q/JyxcclxuICAgICAgdmFsdWU6ICdkb3R0ZWQnXHJcbiAgICB9LCB7XHJcbiAgICAgIGxhYmVsOiAn5Y+M5a6e57q/JyxcclxuICAgICAgdmFsdWU6ICdkb3VibGUnXHJcbiAgICB9XVxyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdib3JkZXJDb2xvcicsXHJcbiAgICB3aWR0aDogMjgsXHJcbiAgICB0eXBlOiAnY29sb3InLFxyXG4gICAgdmFsdWU6ICcjQUFBJ1xyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdib3JkZXJSYWRpdXMnLFxyXG4gICAgbGFiZWw6ICflnIbop5InLFxyXG4gICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICB2YWx1ZTogJzBweCdcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnYmFja2dyb3VuZENvbG9yJyxcclxuICAgIGxhYmVsOiAn6IOM5pmv6ImyJyxcclxuICAgIHdpZHRoOiAnNDAlJyxcclxuICAgIHR5cGU6ICdjb2xvcidcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnYmFja2dyb3VuZEltYWdlJyxcclxuICAgIGxhYmVsOiAn5Zu+54mHJyxcclxuICAgIHdpZHRoOiAnNjAlJyxcclxuICAgIHR5cGU6ICdpbWFnZSdcclxuICB9XVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWN0IiwibmFtZSIsImNvbXBvbmVudCIsImljb24iLCJ0eXBlIiwidGl0bGUiLCJvcmRlciIsIndpZHRoIiwiaGVpZ2h0IiwicHJvcHMiLCJsYWJlbCIsInZhbHVlIiwib3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/1-rect/rect.d.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/1-rect/rect.d.js");
/******/ 	this["ridge-basic/1-rect"] = __webpack_exports__;
/******/ 	
/******/ })()
;