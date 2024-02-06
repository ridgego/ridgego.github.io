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

/***/ "./src/button/Button.js":
/*!******************************!*\
  !*** ./src/button/Button.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\nclass Button {\n  constructor(props) {\n    this.props = props;\n  }\n  async mount(el) {\n    this.el = el;\n    this.button = document.createElement('button');\n    this.button.setAttribute('type', 'button');\n    this.button.style.width = '100%';\n    this.button.style.height = '100%';\n    this.el.append(this.button);\n    this.button.onclick = e => {\n      this.props.onClick && this.props.onClick();\n    };\n    this.render();\n  }\n  render() {\n    const {\n      text,\n      classNames\n    } = this.props;\n    this.button.innerHTML = text;\n    this.button.className = (classNames || []).join(' ');\n  }\n  update(props) {\n    this.props = props;\n    this.render();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYnV0dG9uL0J1dHRvbi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsTUFBTSxDQUFDO0VBQzFCQyxXQUFXQSxDQUFFQyxLQUFLLEVBQUU7SUFDbEIsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUs7RUFDcEI7RUFFQSxNQUFNQyxLQUFLQSxDQUFFQyxFQUFFLEVBQUU7SUFDZixJQUFJLENBQUNBLEVBQUUsR0FBR0EsRUFBRTtJQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDOUMsSUFBSSxDQUFDRixNQUFNLENBQUNHLFlBQVksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO0lBRTFDLElBQUksQ0FBQ0gsTUFBTSxDQUFDSSxLQUFLLENBQUNDLEtBQUssR0FBRyxNQUFNO0lBQ2hDLElBQUksQ0FBQ0wsTUFBTSxDQUFDSSxLQUFLLENBQUNFLE1BQU0sR0FBRyxNQUFNO0lBQ2pDLElBQUksQ0FBQ1AsRUFBRSxDQUFDUSxNQUFNLENBQUMsSUFBSSxDQUFDUCxNQUFNLENBQUM7SUFDM0IsSUFBSSxDQUFDQSxNQUFNLENBQUNRLE9BQU8sR0FBSUMsQ0FBQyxJQUFLO01BQzNCLElBQUksQ0FBQ1osS0FBSyxDQUFDYSxPQUFPLElBQUksSUFBSSxDQUFDYixLQUFLLENBQUNhLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0VBQ2Y7RUFFQUEsTUFBTUEsQ0FBQSxFQUFJO0lBQ1IsTUFBTTtNQUFFQyxJQUFJO01BQUVDO0lBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQ2hCLEtBQUs7SUFFdkMsSUFBSSxDQUFDRyxNQUFNLENBQUNjLFNBQVMsR0FBR0YsSUFBSTtJQUU1QixJQUFJLENBQUNaLE1BQU0sQ0FBQ2UsU0FBUyxHQUFHLENBQUNGLFVBQVUsSUFBSSxFQUFFLEVBQUVHLElBQUksQ0FBQyxHQUFHLENBQUM7RUFDdEQ7RUFFQUMsTUFBTUEsQ0FBRXBCLEtBQUssRUFBRTtJQUNiLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ2MsTUFBTSxDQUFDLENBQUM7RUFDZjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmlkZ2UtYmFzaWMvLy4vc3JjL2J1dHRvbi9CdXR0b24uanM/NTliNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24ge1xyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgdGhpcy5wcm9wcyA9IHByb3BzXHJcbiAgfVxyXG5cclxuICBhc3luYyBtb3VudCAoZWwpIHtcclxuICAgIHRoaXMuZWwgPSBlbFxyXG4gICAgdGhpcy5idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgdGhpcy5idXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXHJcblxyXG4gICAgdGhpcy5idXR0b24uc3R5bGUud2lkdGggPSAnMTAwJSdcclxuICAgIHRoaXMuYnV0dG9uLnN0eWxlLmhlaWdodCA9ICcxMDAlJ1xyXG4gICAgdGhpcy5lbC5hcHBlbmQodGhpcy5idXR0b24pXHJcbiAgICB0aGlzLmJ1dHRvbi5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljaygpXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW5kZXIoKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHsgdGV4dCwgY2xhc3NOYW1lcyB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgIHRoaXMuYnV0dG9uLmlubmVySFRNTCA9IHRleHRcclxuXHJcbiAgICB0aGlzLmJ1dHRvbi5jbGFzc05hbWUgPSAoY2xhc3NOYW1lcyB8fCBbXSkuam9pbignICcpXHJcbiAgfVxyXG5cclxuICB1cGRhdGUgKHByb3BzKSB7XHJcbiAgICB0aGlzLnByb3BzID0gcHJvcHNcclxuICAgIHRoaXMucmVuZGVyKClcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJtb3VudCIsImVsIiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImFwcGVuZCIsIm9uY2xpY2siLCJlIiwib25DbGljayIsInJlbmRlciIsInRleHQiLCJjbGFzc05hbWVzIiwiaW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwiam9pbiIsInVwZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/button/Button.js\n");

/***/ }),

/***/ "./src/button/index.d.js":
/*!*******************************!*\
  !*** ./src/button/index.d.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ \"./src/button/Button.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'button',\n  component: _Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  icon: 'icon/button.svg',\n  type: 'vanilla',\n  title: '按钮',\n  order: 4,\n  width: 64,\n  height: 28,\n  props: [{\n    name: 'text',\n    label: '文本',\n    type: 'string',\n    value: '按钮'\n  }, {\n    name: 'classNames',\n    label: '样式',\n    type: 'class',\n    value: []\n  }],\n  events: [{\n    label: '点击事件',\n    name: 'onClick'\n  }]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYnV0dG9uL2luZGV4LmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkI7QUFDN0IsaUVBQWU7RUFDYkMsSUFBSSxFQUFFLFFBQVE7RUFDZEMsU0FBUyxFQUFFRiwrQ0FBTTtFQUNqQkcsSUFBSSxFQUFFLGlCQUFpQjtFQUN2QkMsSUFBSSxFQUFFLFNBQVM7RUFDZkMsS0FBSyxFQUFFLElBQUk7RUFDWEMsS0FBSyxFQUFFLENBQUM7RUFDUkMsS0FBSyxFQUFFLEVBQUU7RUFDVEMsTUFBTSxFQUFFLEVBQUU7RUFDVkMsS0FBSyxFQUFFLENBQUM7SUFDTlIsSUFBSSxFQUFFLE1BQU07SUFDWlMsS0FBSyxFQUFFLElBQUk7SUFDWE4sSUFBSSxFQUFFLFFBQVE7SUFDZE8sS0FBSyxFQUFFO0VBQ1QsQ0FBQyxFQUFFO0lBQ0RWLElBQUksRUFBRSxZQUFZO0lBQ2xCUyxLQUFLLEVBQUUsSUFBSTtJQUNYTixJQUFJLEVBQUUsT0FBTztJQUNiTyxLQUFLLEVBQUU7RUFDVCxDQUFDLENBQUM7RUFDRkMsTUFBTSxFQUFFLENBQUM7SUFDUEYsS0FBSyxFQUFFLE1BQU07SUFDYlQsSUFBSSxFQUFFO0VBQ1IsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaWRnZS1iYXNpYy8vLi9zcmMvYnV0dG9uL2luZGV4LmQuanM/NjAwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ2J1dHRvbicsXHJcbiAgY29tcG9uZW50OiBCdXR0b24sXHJcbiAgaWNvbjogJ2ljb24vYnV0dG9uLnN2ZycsXHJcbiAgdHlwZTogJ3ZhbmlsbGEnLFxyXG4gIHRpdGxlOiAn5oyJ6ZKuJyxcclxuICBvcmRlcjogNCxcclxuICB3aWR0aDogNjQsXHJcbiAgaGVpZ2h0OiAyOCxcclxuICBwcm9wczogW3tcclxuICAgIG5hbWU6ICd0ZXh0JyxcclxuICAgIGxhYmVsOiAn5paH5pysJyxcclxuICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgdmFsdWU6ICfmjInpkq4nXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ2NsYXNzTmFtZXMnLFxyXG4gICAgbGFiZWw6ICfmoLflvI8nLFxyXG4gICAgdHlwZTogJ2NsYXNzJyxcclxuICAgIHZhbHVlOiBbXVxyXG4gIH1dLFxyXG4gIGV2ZW50czogW3tcclxuICAgIGxhYmVsOiAn54K55Ye75LqL5Lu2JyxcclxuICAgIG5hbWU6ICdvbkNsaWNrJ1xyXG4gIH1dXHJcbn1cclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIm5hbWUiLCJjb21wb25lbnQiLCJpY29uIiwidHlwZSIsInRpdGxlIiwib3JkZXIiLCJ3aWR0aCIsImhlaWdodCIsInByb3BzIiwibGFiZWwiLCJ2YWx1ZSIsImV2ZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/button/index.d.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/button/index.d.js");
/******/ 	this["ridge-basic/button"] = __webpack_exports__;
/******/ 	
/******/ })()
;