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

/***/ "./src/range/Range.js":
/*!****************************!*\
  !*** ./src/range/Range.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Input)\n/* harmony export */ });\nclass Input {\n  constructor(props) {\n    this.props = props;\n  }\n  async mount(el) {\n    this.el = el;\n    this.input = document.createElement('input');\n    this.el.append(this.input);\n    this.input.type = 'range';\n    this.input.style.width = '100%';\n    this.input.style.height = '100%';\n    this.input.onchange = e => {\n      this.props.onChange && this.props.onChange(e.currentTarget.value);\n    };\n    this.render();\n  }\n  update(props) {\n    this.props = props;\n    this.render();\n  }\n  render() {\n    const {\n      value,\n      min,\n      max,\n      className\n    } = this.props;\n    this.input.value = value;\n    this.input.min = min;\n    this.input.max = max;\n    this.input.className = className;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmFuZ2UvUmFuZ2UuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLEtBQUssQ0FBQztFQUN6QkMsV0FBV0EsQ0FBRUMsS0FBSyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0VBQ3BCO0VBRUEsTUFBTUMsS0FBS0EsQ0FBRUMsRUFBRSxFQUFFO0lBQ2YsSUFBSSxDQUFDQSxFQUFFLEdBQUdBLEVBQUU7SUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQzVDLElBQUksQ0FBQ0gsRUFBRSxDQUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDSCxLQUFLLENBQUM7SUFDMUIsSUFBSSxDQUFDQSxLQUFLLENBQUNJLElBQUksR0FBRyxPQUFPO0lBQ3pCLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxLQUFLLENBQUNDLEtBQUssR0FBRyxNQUFNO0lBQy9CLElBQUksQ0FBQ04sS0FBSyxDQUFDSyxLQUFLLENBQUNFLE1BQU0sR0FBRyxNQUFNO0lBRWhDLElBQUksQ0FBQ1AsS0FBSyxDQUFDUSxRQUFRLEdBQUlDLENBQUMsSUFBSztNQUMzQixJQUFJLENBQUNaLEtBQUssQ0FBQ2EsUUFBUSxJQUFJLElBQUksQ0FBQ2IsS0FBSyxDQUFDYSxRQUFRLENBQUNELENBQUMsQ0FBQ0UsYUFBYSxDQUFDQyxLQUFLLENBQUM7SUFDbkUsQ0FBQztJQUNELElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUM7RUFDZjtFQUVBQyxNQUFNQSxDQUFFakIsS0FBSyxFQUFFO0lBQ2IsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDZ0IsTUFBTSxDQUFDLENBQUM7RUFDZjtFQUVBQSxNQUFNQSxDQUFBLEVBQUk7SUFDUixNQUFNO01BQUVELEtBQUs7TUFBRUcsR0FBRztNQUFFQyxHQUFHO01BQUVDO0lBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQ3BCLEtBQUs7SUFDakQsSUFBSSxDQUFDRyxLQUFLLENBQUNZLEtBQUssR0FBR0EsS0FBSztJQUN4QixJQUFJLENBQUNaLEtBQUssQ0FBQ2UsR0FBRyxHQUFHQSxHQUFHO0lBQ3BCLElBQUksQ0FBQ2YsS0FBSyxDQUFDZ0IsR0FBRyxHQUFHQSxHQUFHO0lBQ3BCLElBQUksQ0FBQ2hCLEtBQUssQ0FBQ2lCLFNBQVMsR0FBR0EsU0FBUztFQUNsQztBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmlkZ2UtYmFzaWMvLy4vc3JjL3JhbmdlL1JhbmdlLmpzPzdmNjQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQge1xyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgdGhpcy5wcm9wcyA9IHByb3BzXHJcbiAgfVxyXG5cclxuICBhc3luYyBtb3VudCAoZWwpIHtcclxuICAgIHRoaXMuZWwgPSBlbFxyXG4gICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgIHRoaXMuZWwuYXBwZW5kKHRoaXMuaW5wdXQpXHJcbiAgICB0aGlzLmlucHV0LnR5cGUgPSAncmFuZ2UnXHJcbiAgICB0aGlzLmlucHV0LnN0eWxlLndpZHRoID0gJzEwMCUnXHJcbiAgICB0aGlzLmlucHV0LnN0eWxlLmhlaWdodCA9ICcxMDAlJ1xyXG5cclxuICAgIHRoaXMuaW5wdXQub25jaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXIoKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlIChwcm9wcykge1xyXG4gICAgdGhpcy5wcm9wcyA9IHByb3BzXHJcbiAgICB0aGlzLnJlbmRlcigpXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3QgeyB2YWx1ZSwgbWluLCBtYXgsIGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHZhbHVlXHJcbiAgICB0aGlzLmlucHV0Lm1pbiA9IG1pblxyXG4gICAgdGhpcy5pbnB1dC5tYXggPSBtYXhcclxuICAgIHRoaXMuaW5wdXQuY2xhc3NOYW1lID0gY2xhc3NOYW1lXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbnB1dCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJtb3VudCIsImVsIiwiaW5wdXQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmQiLCJ0eXBlIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIm9uY2hhbmdlIiwiZSIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwicmVuZGVyIiwidXBkYXRlIiwibWluIiwibWF4IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/range/Range.js\n");

/***/ }),

/***/ "./src/range/range.d.js":
/*!******************************!*\
  !*** ./src/range/range.d.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Range */ \"./src/range/Range.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'range',\n  component: _Range__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  icon: 'bi bi-sliders',\n  type: 'vanilla',\n  title: '滑块',\n  width: 160,\n  height: 28,\n  props: [{\n    name: 'value',\n    label: '取值',\n    connect: true,\n    type: 'number'\n  }, {\n    name: 'min',\n    label: '最小值',\n    width: '50%',\n    type: 'number'\n  }, {\n    name: 'max',\n    label: '最大值',\n    width: '50%',\n    type: 'number'\n  }, {\n    name: 'className',\n    label: '样式',\n    type: 'class',\n    value: []\n  }],\n  events: [{\n    label: '输入值变化',\n    name: 'onChange'\n  }]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmFuZ2UvcmFuZ2UuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQjtBQUMzQixpRUFBZTtFQUNiQyxJQUFJLEVBQUUsT0FBTztFQUNiQyxTQUFTLEVBQUVGLDhDQUFLO0VBQ2hCRyxJQUFJLEVBQUUsZUFBZTtFQUNyQkMsSUFBSSxFQUFFLFNBQVM7RUFDZkMsS0FBSyxFQUFFLElBQUk7RUFDWEMsS0FBSyxFQUFFLEdBQUc7RUFDVkMsTUFBTSxFQUFFLEVBQUU7RUFDVkMsS0FBSyxFQUFFLENBQUM7SUFDTlAsSUFBSSxFQUFFLE9BQU87SUFDYlEsS0FBSyxFQUFFLElBQUk7SUFDWEMsT0FBTyxFQUFFLElBQUk7SUFDYk4sSUFBSSxFQUFFO0VBQ1IsQ0FBQyxFQUNEO0lBQ0VILElBQUksRUFBRSxLQUFLO0lBQ1hRLEtBQUssRUFBRSxLQUFLO0lBQ1pILEtBQUssRUFBRSxLQUFLO0lBQ1pGLElBQUksRUFBRTtFQUNSLENBQUMsRUFDRDtJQUNFSCxJQUFJLEVBQUUsS0FBSztJQUNYUSxLQUFLLEVBQUUsS0FBSztJQUNaSCxLQUFLLEVBQUUsS0FBSztJQUNaRixJQUFJLEVBQUU7RUFDUixDQUFDLEVBQ0Q7SUFDRUgsSUFBSSxFQUFFLFdBQVc7SUFDakJRLEtBQUssRUFBRSxJQUFJO0lBQ1hMLElBQUksRUFBRSxPQUFPO0lBQ2JPLEtBQUssRUFBRTtFQUNULENBQUMsQ0FBQztFQUNGQyxNQUFNLEVBQUUsQ0FBQztJQUNQSCxLQUFLLEVBQUUsT0FBTztJQUNkUixJQUFJLEVBQUU7RUFDUixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JpZGdlLWJhc2ljLy8uL3NyYy9yYW5nZS9yYW5nZS5kLmpzP2M2NzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJhbmdlIGZyb20gJy4vUmFuZ2UnXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAncmFuZ2UnLFxyXG4gIGNvbXBvbmVudDogUmFuZ2UsXHJcbiAgaWNvbjogJ2JpIGJpLXNsaWRlcnMnLFxyXG4gIHR5cGU6ICd2YW5pbGxhJyxcclxuICB0aXRsZTogJ+a7keWdlycsXHJcbiAgd2lkdGg6IDE2MCxcclxuICBoZWlnaHQ6IDI4LFxyXG4gIHByb3BzOiBbe1xyXG4gICAgbmFtZTogJ3ZhbHVlJyxcclxuICAgIGxhYmVsOiAn5Y+W5YC8JyxcclxuICAgIGNvbm5lY3Q6IHRydWUsXHJcbiAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ21pbicsXHJcbiAgICBsYWJlbDogJ+acgOWwj+WAvCcsXHJcbiAgICB3aWR0aDogJzUwJScsXHJcbiAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ21heCcsXHJcbiAgICBsYWJlbDogJ+acgOWkp+WAvCcsXHJcbiAgICB3aWR0aDogJzUwJScsXHJcbiAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ2NsYXNzTmFtZScsXHJcbiAgICBsYWJlbDogJ+agt+W8jycsXHJcbiAgICB0eXBlOiAnY2xhc3MnLFxyXG4gICAgdmFsdWU6IFtdXHJcbiAgfV0sXHJcbiAgZXZlbnRzOiBbe1xyXG4gICAgbGFiZWw6ICfovpPlhaXlgLzlj5jljJYnLFxyXG4gICAgbmFtZTogJ29uQ2hhbmdlJ1xyXG4gIH1dXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJhbmdlIiwibmFtZSIsImNvbXBvbmVudCIsImljb24iLCJ0eXBlIiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsInByb3BzIiwibGFiZWwiLCJjb25uZWN0IiwidmFsdWUiLCJldmVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/range/range.d.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/range/range.d.js");
/******/ 	this["ridge-basic/range"] = __webpack_exports__;
/******/ 	
/******/ })()
;