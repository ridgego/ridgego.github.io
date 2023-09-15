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

/***/ "./src/checkbox/Checkbox.js":
/*!**********************************!*\
  !*** ./src/checkbox/Checkbox.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CheckBox)\n/* harmony export */ });\n/* harmony import */ var _base_HTMLComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/HTMLComponent */ \"./src/base/HTMLComponent.js\");\n\nclass CheckBox extends _base_HTMLComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  innerHTML(_ref) {\n    let {\n      label,\n      value\n    } = _ref;\n    return `<label class=\"checkbox\">\n      <input type=\"checkbox\" ${value ? 'checked' : ''}>\n      ${label}\n    </label>`;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2hlY2tib3gvQ2hlY2tib3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUQ7QUFDbEMsTUFBTUMsUUFBUSxTQUFTRCwyREFBYSxDQUFDO0VBQ2xERSxTQUFTQSxDQUFBQyxJQUFBLEVBQW9CO0lBQUEsSUFBbEI7TUFBRUMsS0FBSztNQUFFQztJQUFNLENBQUMsR0FBQUYsSUFBQTtJQUN6QixPQUFRO0FBQ1osK0JBQStCRSxLQUFLLEdBQUcsU0FBUyxHQUFHLEVBQUc7QUFDdEQsUUFBUUQsS0FBTTtBQUNkLGFBQWE7RUFDWDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmlkZ2UtYnVsbWEvLy4vc3JjL2NoZWNrYm94L0NoZWNrYm94LmpzPzVkOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhUTUxDb21wb25lbnQgZnJvbSAnLi4vYmFzZS9IVE1MQ29tcG9uZW50J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja0JveCBleHRlbmRzIEhUTUxDb21wb25lbnQge1xyXG4gIGlubmVySFRNTCAoeyBsYWJlbCwgdmFsdWUgfSkge1xyXG4gICAgcmV0dXJuIGA8bGFiZWwgY2xhc3M9XCJjaGVja2JveFwiPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgJHt2YWx1ZSA/ICdjaGVja2VkJyA6ICcnfT5cclxuICAgICAgJHtsYWJlbH1cclxuICAgIDwvbGFiZWw+YFxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiSFRNTENvbXBvbmVudCIsIkNoZWNrQm94IiwiaW5uZXJIVE1MIiwiX3JlZiIsImxhYmVsIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/checkbox/Checkbox.js\n");

/***/ }),

/***/ "./src/checkbox/index.d.js":
/*!*********************************!*\
  !*** ./src/checkbox/index.d.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Checkbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox.js */ \"./src/checkbox/Checkbox.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'checkbox',\n  title: '切换框',\n  component: _Checkbox_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  icon: 'IconTickCircle',\n  type: 'vanilla',\n  adjustSize: 'all',\n  resizable: false,\n  props: [{\n    name: 'value',\n    label: '是否选中',\n    type: 'boolean',\n    value: false\n  }, {\n    name: 'label',\n    label: '内容',\n    type: 'string',\n    value: '我已同意'\n  }],\n  events: [{\n    name: 'onChange',\n    label: '值改变'\n  }],\n  width: 130,\n  height: 32\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2hlY2tib3gvaW5kZXguZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFvQztBQUNwQyxpRUFBZTtFQUNiQyxJQUFJLEVBQUUsVUFBVTtFQUNoQkMsS0FBSyxFQUFFLEtBQUs7RUFDWkMsU0FBUyxFQUFFSCxvREFBUTtFQUNuQkksSUFBSSxFQUFFLGdCQUFnQjtFQUN0QkMsSUFBSSxFQUFFLFNBQVM7RUFDZkMsVUFBVSxFQUFFLEtBQUs7RUFDakJDLFNBQVMsRUFBRSxLQUFLO0VBQ2hCQyxLQUFLLEVBQUUsQ0FBQztJQUNOUCxJQUFJLEVBQUUsT0FBTztJQUNiUSxLQUFLLEVBQUUsTUFBTTtJQUNiSixJQUFJLEVBQUUsU0FBUztJQUNmSyxLQUFLLEVBQUU7RUFDVCxDQUFDLEVBQUU7SUFDRFQsSUFBSSxFQUFFLE9BQU87SUFDYlEsS0FBSyxFQUFFLElBQUk7SUFDWEosSUFBSSxFQUFFLFFBQVE7SUFDZEssS0FBSyxFQUFFO0VBQ1QsQ0FBQyxDQUFDO0VBQ0ZDLE1BQU0sRUFBRSxDQUFDO0lBQ1BWLElBQUksRUFBRSxVQUFVO0lBQ2hCUSxLQUFLLEVBQUU7RUFDVCxDQUFDLENBQUM7RUFDRkcsS0FBSyxFQUFFLEdBQUc7RUFDVkMsTUFBTSxFQUFFO0FBQ1YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JpZGdlLWJ1bG1hLy8uL3NyYy9jaGVja2JveC9pbmRleC5kLmpzP2RiNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoZWNrYm94IGZyb20gJy4vQ2hlY2tib3guanMnXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnY2hlY2tib3gnLFxyXG4gIHRpdGxlOiAn5YiH5o2i5qGGJyxcclxuICBjb21wb25lbnQ6IENoZWNrYm94LFxyXG4gIGljb246ICdJY29uVGlja0NpcmNsZScsXHJcbiAgdHlwZTogJ3ZhbmlsbGEnLFxyXG4gIGFkanVzdFNpemU6ICdhbGwnLFxyXG4gIHJlc2l6YWJsZTogZmFsc2UsXHJcbiAgcHJvcHM6IFt7XHJcbiAgICBuYW1lOiAndmFsdWUnLFxyXG4gICAgbGFiZWw6ICfmmK/lkKbpgInkuK0nLFxyXG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxyXG4gICAgdmFsdWU6IGZhbHNlXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ2xhYmVsJyxcclxuICAgIGxhYmVsOiAn5YaF5a65JyxcclxuICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgdmFsdWU6ICfmiJHlt7LlkIzmhI8nXHJcbiAgfV0sXHJcbiAgZXZlbnRzOiBbe1xyXG4gICAgbmFtZTogJ29uQ2hhbmdlJyxcclxuICAgIGxhYmVsOiAn5YC85pS55Y+YJ1xyXG4gIH1dLFxyXG4gIHdpZHRoOiAxMzAsXHJcbiAgaGVpZ2h0OiAzMlxyXG59XHJcbiJdLCJuYW1lcyI6WyJDaGVja2JveCIsIm5hbWUiLCJ0aXRsZSIsImNvbXBvbmVudCIsImljb24iLCJ0eXBlIiwiYWRqdXN0U2l6ZSIsInJlc2l6YWJsZSIsInByb3BzIiwibGFiZWwiLCJ2YWx1ZSIsImV2ZW50cyIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/checkbox/index.d.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/checkbox/index.d.js");
/******/ 	this["ridge-bulma/checkbox"] = __webpack_exports__;
/******/ 	
/******/ })()
;