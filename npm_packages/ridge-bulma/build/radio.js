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

/***/ "./src/radio/Radio.js":
/*!****************************!*\
  !*** ./src/radio/Radio.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Radio)\n/* harmony export */ });\n/* harmony import */ var _base_HTMLComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/HTMLComponent */ \"./src/base/HTMLComponent.js\");\n\nclass Radio extends _base_HTMLComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  innerHTML(_ref) {\n    let {\n      options,\n      value\n    } = _ref;\n    const name = 'radio' + this.random();\n    return `<div class=\"control\">\n      ${options.map(option => `<label class=\"radio\">\n        <input type=\"radio\" name=\"${name}\" value=\"${option.value}\" ${value === option.value ? 'checked' : ''}>\n        ${option.label}\n      </label>`).join('')}\n    </div>`;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmFkaW8vUmFkaW8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUQ7QUFDbEMsTUFBTUMsS0FBSyxTQUFTRCwyREFBYSxDQUFDO0VBQy9DRSxTQUFTQSxDQUFBQyxJQUFBLEVBQXNCO0lBQUEsSUFBcEI7TUFBRUMsT0FBTztNQUFFQztJQUFNLENBQUMsR0FBQUYsSUFBQTtJQUMzQixNQUFNRyxJQUFJLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUM7SUFDcEMsT0FBUTtBQUNaLFFBQVFILE9BQU8sQ0FBQ0ksR0FBRyxDQUFDQyxNQUFNLElBQUs7QUFDL0Isb0NBQW9DSCxJQUFLLFlBQVdHLE1BQU0sQ0FBQ0osS0FBTSxLQUFJQSxLQUFLLEtBQUtJLE1BQU0sQ0FBQ0osS0FBSyxHQUFHLFNBQVMsR0FBRyxFQUFHO0FBQzdHLFVBQVVJLE1BQU0sQ0FBQ0MsS0FBTTtBQUN2QixlQUFlLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBRTtBQUMxQixXQUFXO0VBQ1Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3JpZGdlLWJ1bG1hLy8uL3NyYy9yYWRpby9SYWRpby5qcz9iMzU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIVE1MQ29tcG9uZW50IGZyb20gJy4uL2Jhc2UvSFRNTENvbXBvbmVudCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW8gZXh0ZW5kcyBIVE1MQ29tcG9uZW50IHtcclxuICBpbm5lckhUTUwgKHsgb3B0aW9ucywgdmFsdWUgfSkge1xyXG4gICAgY29uc3QgbmFtZSA9ICdyYWRpbycgKyB0aGlzLnJhbmRvbSgpXHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XHJcbiAgICAgICR7b3B0aW9ucy5tYXAob3B0aW9uID0+IGA8bGFiZWwgY2xhc3M9XCJyYWRpb1wiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiJHtuYW1lfVwiIHZhbHVlPVwiJHtvcHRpb24udmFsdWV9XCIgJHt2YWx1ZSA9PT0gb3B0aW9uLnZhbHVlID8gJ2NoZWNrZWQnIDogJyd9PlxyXG4gICAgICAgICR7b3B0aW9uLmxhYmVsfVxyXG4gICAgICA8L2xhYmVsPmApLmpvaW4oJycpfVxyXG4gICAgPC9kaXY+YFxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiSFRNTENvbXBvbmVudCIsIlJhZGlvIiwiaW5uZXJIVE1MIiwiX3JlZiIsIm9wdGlvbnMiLCJ2YWx1ZSIsIm5hbWUiLCJyYW5kb20iLCJtYXAiLCJvcHRpb24iLCJsYWJlbCIsImpvaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/radio/Radio.js\n");

/***/ }),

/***/ "./src/radio/index.d.js":
/*!******************************!*\
  !*** ./src/radio/index.d.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Radio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Radio.js */ \"./src/radio/Radio.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'radio',\n  title: '单选框',\n  component: _Radio_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  icon: 'IconRadio',\n  type: 'vanilla',\n  adjustSize: 'all',\n  resizable: false,\n  props: [{\n    name: 'value',\n    label: '选中项',\n    type: 'string',\n    value: 'key1'\n  }, {\n    name: 'options',\n    label: '选项列表',\n    type: 'array',\n    item: {\n      label: '选项',\n      value: 'key'\n    },\n    value: [{\n      label: '选项1',\n      value: 'key1'\n    }, {\n      label: '选项2',\n      value: 'key2'\n    }, {\n      label: '选项3',\n      value: 'key3'\n    }]\n  }],\n  events: [{\n    name: 'onChange',\n    label: '值改变'\n  }],\n  width: 200,\n  height: 26\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmFkaW8vaW5kZXguZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QjtBQUM5QixpRUFBZTtFQUNiQyxJQUFJLEVBQUUsT0FBTztFQUNiQyxLQUFLLEVBQUUsS0FBSztFQUNaQyxTQUFTLEVBQUVILGlEQUFLO0VBQ2hCSSxJQUFJLEVBQUUsV0FBVztFQUNqQkMsSUFBSSxFQUFFLFNBQVM7RUFDZkMsVUFBVSxFQUFFLEtBQUs7RUFDakJDLFNBQVMsRUFBRSxLQUFLO0VBQ2hCQyxLQUFLLEVBQUUsQ0FBQztJQUNOUCxJQUFJLEVBQUUsT0FBTztJQUNiUSxLQUFLLEVBQUUsS0FBSztJQUNaSixJQUFJLEVBQUUsUUFBUTtJQUNkSyxLQUFLLEVBQUU7RUFDVCxDQUFDLEVBQUU7SUFDRFQsSUFBSSxFQUFFLFNBQVM7SUFDZlEsS0FBSyxFQUFFLE1BQU07SUFDYkosSUFBSSxFQUFFLE9BQU87SUFDYk0sSUFBSSxFQUFFO01BQ0pGLEtBQUssRUFBRSxJQUFJO01BQ1hDLEtBQUssRUFBRTtJQUNULENBQUM7SUFDREEsS0FBSyxFQUFFLENBQUM7TUFDTkQsS0FBSyxFQUFFLEtBQUs7TUFDWkMsS0FBSyxFQUFFO0lBQ1QsQ0FBQyxFQUFFO01BQ0RELEtBQUssRUFBRSxLQUFLO01BQ1pDLEtBQUssRUFBRTtJQUNULENBQUMsRUFBRTtNQUNERCxLQUFLLEVBQUUsS0FBSztNQUNaQyxLQUFLLEVBQUU7SUFDVCxDQUFDO0VBQ0gsQ0FBQyxDQUFDO0VBQ0ZFLE1BQU0sRUFBRSxDQUFDO0lBQ1BYLElBQUksRUFBRSxVQUFVO0lBQ2hCUSxLQUFLLEVBQUU7RUFDVCxDQUFDLENBQUM7RUFDRkksS0FBSyxFQUFFLEdBQUc7RUFDVkMsTUFBTSxFQUFFO0FBQ1YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JpZGdlLWJ1bG1hLy8uL3NyYy9yYWRpby9pbmRleC5kLmpzPzFhNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJhZGlvIGZyb20gJy4vUmFkaW8uanMnXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAncmFkaW8nLFxyXG4gIHRpdGxlOiAn5Y2V6YCJ5qGGJyxcclxuICBjb21wb25lbnQ6IFJhZGlvLFxyXG4gIGljb246ICdJY29uUmFkaW8nLFxyXG4gIHR5cGU6ICd2YW5pbGxhJyxcclxuICBhZGp1c3RTaXplOiAnYWxsJyxcclxuICByZXNpemFibGU6IGZhbHNlLFxyXG4gIHByb3BzOiBbe1xyXG4gICAgbmFtZTogJ3ZhbHVlJyxcclxuICAgIGxhYmVsOiAn6YCJ5Lit6aG5JyxcclxuICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgdmFsdWU6ICdrZXkxJ1xyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdvcHRpb25zJyxcclxuICAgIGxhYmVsOiAn6YCJ6aG55YiX6KGoJyxcclxuICAgIHR5cGU6ICdhcnJheScsXHJcbiAgICBpdGVtOiB7XHJcbiAgICAgIGxhYmVsOiAn6YCJ6aG5JyxcclxuICAgICAgdmFsdWU6ICdrZXknXHJcbiAgICB9LFxyXG4gICAgdmFsdWU6IFt7XHJcbiAgICAgIGxhYmVsOiAn6YCJ6aG5MScsXHJcbiAgICAgIHZhbHVlOiAna2V5MSdcclxuICAgIH0sIHtcclxuICAgICAgbGFiZWw6ICfpgInpobkyJyxcclxuICAgICAgdmFsdWU6ICdrZXkyJ1xyXG4gICAgfSwge1xyXG4gICAgICBsYWJlbDogJ+mAiemhuTMnLFxyXG4gICAgICB2YWx1ZTogJ2tleTMnXHJcbiAgICB9XVxyXG4gIH1dLFxyXG4gIGV2ZW50czogW3tcclxuICAgIG5hbWU6ICdvbkNoYW5nZScsXHJcbiAgICBsYWJlbDogJ+WAvOaUueWPmCdcclxuICB9XSxcclxuICB3aWR0aDogMjAwLFxyXG4gIGhlaWdodDogMjZcclxufVxyXG4iXSwibmFtZXMiOlsiUmFkaW8iLCJuYW1lIiwidGl0bGUiLCJjb21wb25lbnQiLCJpY29uIiwidHlwZSIsImFkanVzdFNpemUiLCJyZXNpemFibGUiLCJwcm9wcyIsImxhYmVsIiwidmFsdWUiLCJpdGVtIiwiZXZlbnRzIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/radio/index.d.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/radio/index.d.js");
/******/ 	this["ridge-bulma/radio"] = __webpack_exports__;
/******/ 	
/******/ })()
;