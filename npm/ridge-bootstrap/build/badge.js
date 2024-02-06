/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/badge/Badge.jsx":
/*!*****************************!*\
  !*** ./src/badge/Badge.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({\n  text = '',\n  icon = '',\n  type = 'text-bg-primary',\n  pill = false,\n  showClose = false,\n  classNames = [],\n  onClose,\n  onClick\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    style: {\n      width: '100%',\n      height: '100%'\n    },\n    onClick: onClick,\n    className: [...classNames, 'badge', 'd-flex', 'justify-content-center', 'align-items-center', type, pill ? 'rounded-pill' : ''].join(' ')\n  }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: 'bi me-1 ' + icon\n  }), text, showClose && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    class: \"bi bi-x-circle-fill ms-1\",\n    style: {\n      cursor: 'pointer'\n    },\n    onClick: e => {\n      e.stopPropagation();\n      onClose && onClose();\n    }\n  }));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFkZ2UvQmFkZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUN6QixpRUFBZSxDQUFDO0VBQ2RDLElBQUksR0FBRyxFQUFFO0VBQ1RDLElBQUksR0FBRyxFQUFFO0VBQ1RDLElBQUksR0FBRyxpQkFBaUI7RUFDeEJDLElBQUksR0FBRyxLQUFLO0VBQ1pDLFNBQVMsR0FBRyxLQUFLO0VBQ2pCQyxVQUFVLEdBQUcsRUFBRTtFQUNmQyxPQUFPO0VBQ1BDO0FBQ0YsQ0FBQyxLQUFLO0VBQ0osb0JBQ0VSLDBEQUFBO0lBQ0VVLEtBQUssRUFBRTtNQUFFQyxLQUFLLEVBQUUsTUFBTTtNQUFFQyxNQUFNLEVBQUU7SUFBTyxDQUFFO0lBQ3pDSixPQUFPLEVBQUVBLE9BQVE7SUFDakJLLFNBQVMsRUFBRSxDQUFDLEdBQUdQLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFFLG9CQUFvQixFQUFFSCxJQUFJLEVBQUVDLElBQUksR0FBRyxjQUFjLEdBQUcsRUFBRSxDQUFDLENBQUNVLElBQUksQ0FBQyxHQUFHO0VBQUUsR0FFeklaLElBQUksaUJBQUlGLDBEQUFBO0lBQUdhLFNBQVMsRUFBRSxVQUFVLEdBQUdYO0VBQUssQ0FBRSxDQUFDLEVBQUVELElBQUksRUFDakRJLFNBQVMsaUJBQ1JMLDBEQUFBO0lBQ0VlLEtBQUssRUFBQywwQkFBMEI7SUFBQ0wsS0FBSyxFQUFFO01BQUVNLE1BQU0sRUFBRTtJQUFVLENBQUU7SUFBQ1IsT0FBTyxFQUFFUyxDQUFDLElBQUk7TUFDM0VBLENBQUMsQ0FBQ0MsZUFBZSxDQUFDLENBQUM7TUFDbkJYLE9BQU8sSUFBSUEsT0FBTyxDQUFDLENBQUM7SUFDdEI7RUFBRSxDQUNILENBQ0MsQ0FBQztBQUVYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaWRnZS1ib290c3RyYXAvLy4vc3JjL2JhZGdlL0JhZGdlLmpzeD83NjUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuZXhwb3J0IGRlZmF1bHQgKHtcclxuICB0ZXh0ID0gJycsXHJcbiAgaWNvbiA9ICcnLFxyXG4gIHR5cGUgPSAndGV4dC1iZy1wcmltYXJ5JyxcclxuICBwaWxsID0gZmFsc2UsXHJcbiAgc2hvd0Nsb3NlID0gZmFsc2UsXHJcbiAgY2xhc3NOYW1lcyA9IFtdLFxyXG4gIG9uQ2xvc2UsXHJcbiAgb25DbGlja1xyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuXHJcbiAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH19XHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgIGNsYXNzTmFtZT17Wy4uLmNsYXNzTmFtZXMsICdiYWRnZScsICdkLWZsZXgnLCAnanVzdGlmeS1jb250ZW50LWNlbnRlcicsICdhbGlnbi1pdGVtcy1jZW50ZXInLCB0eXBlLCBwaWxsID8gJ3JvdW5kZWQtcGlsbCcgOiAnJ10uam9pbignICcpfVxyXG4gICAgPlxyXG4gICAgICB7aWNvbiAmJiA8aSBjbGFzc05hbWU9eydiaSBtZS0xICcgKyBpY29ufSAvPn17dGV4dH1cclxuICAgICAge3Nob3dDbG9zZSAmJlxyXG4gICAgICAgIDxpXHJcbiAgICAgICAgICBjbGFzcz0nYmkgYmkteC1jaXJjbGUtZmlsbCBtcy0xJyBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICBvbkNsb3NlICYmIG9uQ2xvc2UoKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPn1cclxuICAgIDwvc3Bhbj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidGV4dCIsImljb24iLCJ0eXBlIiwicGlsbCIsInNob3dDbG9zZSIsImNsYXNzTmFtZXMiLCJvbkNsb3NlIiwib25DbGljayIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2xhc3NOYW1lIiwiam9pbiIsImNsYXNzIiwiY3Vyc29yIiwiZSIsInN0b3BQcm9wYWdhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/badge/Badge.jsx\n");

/***/ }),

/***/ "./src/badge/index.d.js":
/*!******************************!*\
  !*** ./src/badge/index.d.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Badge_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Badge.jsx */ \"./src/badge/Badge.jsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'badge',\n  component: _Badge_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  title: '标签',\n  icon: 'bi bi-info-square',\n  order: 2,\n  type: 'react',\n  props: [{\n    name: 'text',\n    label: '文本',\n    connect: true,\n    type: 'string',\n    value: '标签'\n  }, {\n    name: 'type',\n    label: '类型',\n    type: 'string',\n    control: 'select',\n    options: [{\n      label: '主色',\n      value: 'text-bg-primary'\n    }, {\n      label: '次要色',\n      value: 'text-bg-secondary'\n    }, {\n      label: '成功色',\n      value: 'text-bg-success'\n    }, {\n      label: '危险色',\n      value: 'text-bg-danger'\n    }]\n  }, {\n    name: 'icon',\n    label: '图标',\n    width: '50%',\n    type: 'string'\n  }, {\n    name: 'pill',\n    label: '圆形',\n    width: '50%',\n    type: 'boolean',\n    value: false\n  }, {\n    name: 'showClose',\n    label: '可关闭',\n    width: '50%',\n    type: 'boolean',\n    value: false\n  }, {\n    name: 'classNames',\n    label: '样式',\n    type: 'style',\n    value: []\n  }],\n  events: [{\n    label: '点击',\n    name: 'onClick'\n  }, {\n    label: '关闭',\n    name: 'onClose'\n  }],\n  width: 44,\n  height: 20\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFkZ2UvaW5kZXguZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUErQjtBQUMvQixpRUFBZTtFQUNiQyxJQUFJLEVBQUUsT0FBTztFQUNiQyxTQUFTLEVBQUVGLGtEQUFLO0VBQ2hCRyxLQUFLLEVBQUUsSUFBSTtFQUNYQyxJQUFJLEVBQUUsbUJBQW1CO0VBQ3pCQyxLQUFLLEVBQUUsQ0FBQztFQUNSQyxJQUFJLEVBQUUsT0FBTztFQUNiQyxLQUFLLEVBQUUsQ0FBQztJQUNOTixJQUFJLEVBQUUsTUFBTTtJQUNaTyxLQUFLLEVBQUUsSUFBSTtJQUNYQyxPQUFPLEVBQUUsSUFBSTtJQUNiSCxJQUFJLEVBQUUsUUFBUTtJQUNkSSxLQUFLLEVBQUU7RUFDVCxDQUFDLEVBQUU7SUFDRFQsSUFBSSxFQUFFLE1BQU07SUFDWk8sS0FBSyxFQUFFLElBQUk7SUFDWEYsSUFBSSxFQUFFLFFBQVE7SUFDZEssT0FBTyxFQUFFLFFBQVE7SUFDakJDLE9BQU8sRUFBRSxDQUFDO01BQ1JKLEtBQUssRUFBRSxJQUFJO01BQ1hFLEtBQUssRUFBRTtJQUNULENBQUMsRUFBRTtNQUNERixLQUFLLEVBQUUsS0FBSztNQUNaRSxLQUFLLEVBQUU7SUFDVCxDQUFDLEVBQUU7TUFDREYsS0FBSyxFQUFFLEtBQUs7TUFDWkUsS0FBSyxFQUFFO0lBQ1QsQ0FBQyxFQUFFO01BQ0RGLEtBQUssRUFBRSxLQUFLO01BQ1pFLEtBQUssRUFBRTtJQUNULENBQUM7RUFDSCxDQUFDLEVBQUU7SUFDRFQsSUFBSSxFQUFFLE1BQU07SUFDWk8sS0FBSyxFQUFFLElBQUk7SUFDWEssS0FBSyxFQUFFLEtBQUs7SUFDWlAsSUFBSSxFQUFFO0VBQ1IsQ0FBQyxFQUFFO0lBQ0RMLElBQUksRUFBRSxNQUFNO0lBQ1pPLEtBQUssRUFBRSxJQUFJO0lBQ1hLLEtBQUssRUFBRSxLQUFLO0lBQ1pQLElBQUksRUFBRSxTQUFTO0lBQ2ZJLEtBQUssRUFBRTtFQUNULENBQUMsRUFBRTtJQUNEVCxJQUFJLEVBQUUsV0FBVztJQUNqQk8sS0FBSyxFQUFFLEtBQUs7SUFDWkssS0FBSyxFQUFFLEtBQUs7SUFDWlAsSUFBSSxFQUFFLFNBQVM7SUFDZkksS0FBSyxFQUFFO0VBQ1QsQ0FBQyxFQUFFO0lBQ0RULElBQUksRUFBRSxZQUFZO0lBQ2xCTyxLQUFLLEVBQUUsSUFBSTtJQUNYRixJQUFJLEVBQUUsT0FBTztJQUNiSSxLQUFLLEVBQUU7RUFDVCxDQUFDLENBQUM7RUFDRkksTUFBTSxFQUFFLENBQUM7SUFDUE4sS0FBSyxFQUFFLElBQUk7SUFDWFAsSUFBSSxFQUFFO0VBQ1IsQ0FBQyxFQUFFO0lBQ0RPLEtBQUssRUFBRSxJQUFJO0lBQ1hQLElBQUksRUFBRTtFQUNSLENBQUMsQ0FBQztFQUNGWSxLQUFLLEVBQUUsRUFBRTtFQUNURSxNQUFNLEVBQUU7QUFDVixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmlkZ2UtYm9vdHN0cmFwLy8uL3NyYy9iYWRnZS9pbmRleC5kLmpzPzQ2MDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhZGdlIGZyb20gJy4vQmFkZ2UuanN4J1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ2JhZGdlJyxcclxuICBjb21wb25lbnQ6IEJhZGdlLFxyXG4gIHRpdGxlOiAn5qCH562+JyxcclxuICBpY29uOiAnYmkgYmktaW5mby1zcXVhcmUnLFxyXG4gIG9yZGVyOiAyLFxyXG4gIHR5cGU6ICdyZWFjdCcsXHJcbiAgcHJvcHM6IFt7XHJcbiAgICBuYW1lOiAndGV4dCcsXHJcbiAgICBsYWJlbDogJ+aWh+acrCcsXHJcbiAgICBjb25uZWN0OiB0cnVlLFxyXG4gICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICB2YWx1ZTogJ+agh+etvidcclxuICB9LCB7XHJcbiAgICBuYW1lOiAndHlwZScsXHJcbiAgICBsYWJlbDogJ+exu+WeiycsXHJcbiAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgIGNvbnRyb2w6ICdzZWxlY3QnLFxyXG4gICAgb3B0aW9uczogW3tcclxuICAgICAgbGFiZWw6ICfkuLvoibInLFxyXG4gICAgICB2YWx1ZTogJ3RleHQtYmctcHJpbWFyeSdcclxuICAgIH0sIHtcclxuICAgICAgbGFiZWw6ICfmrKHopoHoibInLFxyXG4gICAgICB2YWx1ZTogJ3RleHQtYmctc2Vjb25kYXJ5J1xyXG4gICAgfSwge1xyXG4gICAgICBsYWJlbDogJ+aIkOWKn+iJsicsXHJcbiAgICAgIHZhbHVlOiAndGV4dC1iZy1zdWNjZXNzJ1xyXG4gICAgfSwge1xyXG4gICAgICBsYWJlbDogJ+WNsemZqeiJsicsXHJcbiAgICAgIHZhbHVlOiAndGV4dC1iZy1kYW5nZXInXHJcbiAgICB9XVxyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdpY29uJyxcclxuICAgIGxhYmVsOiAn5Zu+5qCHJyxcclxuICAgIHdpZHRoOiAnNTAlJyxcclxuICAgIHR5cGU6ICdzdHJpbmcnXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ3BpbGwnLFxyXG4gICAgbGFiZWw6ICflnIblvaInLFxyXG4gICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxyXG4gICAgdmFsdWU6IGZhbHNlXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ3Nob3dDbG9zZScsXHJcbiAgICBsYWJlbDogJ+WPr+WFs+mXrScsXHJcbiAgICB3aWR0aDogJzUwJScsXHJcbiAgICB0eXBlOiAnYm9vbGVhbicsXHJcbiAgICB2YWx1ZTogZmFsc2VcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnY2xhc3NOYW1lcycsXHJcbiAgICBsYWJlbDogJ+agt+W8jycsXHJcbiAgICB0eXBlOiAnc3R5bGUnLFxyXG4gICAgdmFsdWU6IFtdXHJcbiAgfV0sXHJcbiAgZXZlbnRzOiBbe1xyXG4gICAgbGFiZWw6ICfngrnlh7snLFxyXG4gICAgbmFtZTogJ29uQ2xpY2snXHJcbiAgfSwge1xyXG4gICAgbGFiZWw6ICflhbPpl60nLFxyXG4gICAgbmFtZTogJ29uQ2xvc2UnXHJcbiAgfV0sXHJcbiAgd2lkdGg6IDQ0LFxyXG4gIGhlaWdodDogMjBcclxufVxyXG4iXSwibmFtZXMiOlsiQmFkZ2UiLCJuYW1lIiwiY29tcG9uZW50IiwidGl0bGUiLCJpY29uIiwib3JkZXIiLCJ0eXBlIiwicHJvcHMiLCJsYWJlbCIsImNvbm5lY3QiLCJ2YWx1ZSIsImNvbnRyb2wiLCJvcHRpb25zIiwid2lkdGgiLCJldmVudHMiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/badge/index.d.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = (function() { return this["React"]; }());

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/badge/index.d.js");
/******/ 	this["ridge-bootstrap/badge"] = __webpack_exports__;
/******/ 	
/******/ })()
;