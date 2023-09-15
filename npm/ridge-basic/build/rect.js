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

/***/ "./src/rect/Rect.js":
/*!**************************!*\
  !*** ./src/rect/Rect.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Rect)\n/* harmony export */ });\nclass Rect {\n  constructor(props) {\n    this.props = props;\n  }\n  async mount(el) {\n    this.el = el;\n    this.div = document.createElement('div');\n    this.div.style.width = '100%';\n    this.div.style.height = '100%';\n    this.el.append(this.div);\n    this.render();\n    this.div.onclick = e => {\n      this.props.onClick && this.props.onClick();\n    };\n  }\n  update(props) {\n    this.props = props;\n    this.render();\n  }\n  render() {\n    const {\n      borderRadius,\n      borderColor,\n      borderStyle,\n      borderWidth,\n      backgroundImage,\n      background\n    } = this.props;\n    this.div.style.border = `${borderWidth}px ${borderStyle} ${borderColor}`;\n    this.div.style.borderRadius = (borderRadius || 0) + 'px';\n    this.div.style.background = background;\n    if (backgroundImage) {\n      this.div.style.backgroundImage = `url(${backgroundImage})`;\n      this.div.style.backgroundSize = '100%';\n      this.div.style.backgroundRepeat = 'no-repeat';\n    } else {\n      this.div.style.backgroundImage = '';\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVjdC9SZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxNQUFNQSxJQUFJLENBQUM7RUFDeEJDLFdBQVdBLENBQUVDLEtBQUssRUFBRTtJQUNsQixJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSztFQUNwQjtFQUVBLE1BQU1DLEtBQUtBLENBQUVDLEVBQUUsRUFBRTtJQUNmLElBQUksQ0FBQ0EsRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN4QyxJQUFJLENBQUNGLEdBQUcsQ0FBQ0csS0FBSyxDQUFDQyxLQUFLLEdBQUcsTUFBTTtJQUM3QixJQUFJLENBQUNKLEdBQUcsQ0FBQ0csS0FBSyxDQUFDRSxNQUFNLEdBQUcsTUFBTTtJQUM5QixJQUFJLENBQUNOLEVBQUUsQ0FBQ08sTUFBTSxDQUFDLElBQUksQ0FBQ04sR0FBRyxDQUFDO0lBQ3hCLElBQUksQ0FBQ08sTUFBTSxDQUFDLENBQUM7SUFDYixJQUFJLENBQUNQLEdBQUcsQ0FBQ1EsT0FBTyxHQUFHQyxDQUFDLElBQUk7TUFDdEIsSUFBSSxDQUFDWixLQUFLLENBQUNhLE9BQU8sSUFBSSxJQUFJLENBQUNiLEtBQUssQ0FBQ2EsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztFQUNIO0VBRUFDLE1BQU1BLENBQUVkLEtBQUssRUFBRTtJQUNiLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ1UsTUFBTSxDQUFDLENBQUM7RUFDZjtFQUVBQSxNQUFNQSxDQUFBLEVBQUk7SUFDUixNQUFNO01BQ0pLLFlBQVk7TUFDWkMsV0FBVztNQUNYQyxXQUFXO01BQ1hDLFdBQVc7TUFDWEMsZUFBZTtNQUNmQztJQUNGLENBQUMsR0FBRyxJQUFJLENBQUNwQixLQUFLO0lBQ2QsSUFBSSxDQUFDRyxHQUFHLENBQUNHLEtBQUssQ0FBQ2UsTUFBTSxHQUFJLEdBQUVILFdBQVksTUFBS0QsV0FBWSxJQUFHRCxXQUFZLEVBQUM7SUFDeEUsSUFBSSxDQUFDYixHQUFHLENBQUNHLEtBQUssQ0FBQ1MsWUFBWSxHQUFHLENBQUNBLFlBQVksSUFBSSxDQUFDLElBQUksSUFBSTtJQUV4RCxJQUFJLENBQUNaLEdBQUcsQ0FBQ0csS0FBSyxDQUFDYyxVQUFVLEdBQUdBLFVBQVU7SUFDdEMsSUFBSUQsZUFBZSxFQUFFO01BQ25CLElBQUksQ0FBQ2hCLEdBQUcsQ0FBQ0csS0FBSyxDQUFDYSxlQUFlLEdBQUksT0FBTUEsZUFBZ0IsR0FBRTtNQUMxRCxJQUFJLENBQUNoQixHQUFHLENBQUNHLEtBQUssQ0FBQ2dCLGNBQWMsR0FBRyxNQUFNO01BQ3RDLElBQUksQ0FBQ25CLEdBQUcsQ0FBQ0csS0FBSyxDQUFDaUIsZ0JBQWdCLEdBQUcsV0FBVztJQUMvQyxDQUFDLE1BQU07TUFDTCxJQUFJLENBQUNwQixHQUFHLENBQUNHLEtBQUssQ0FBQ2EsZUFBZSxHQUFHLEVBQUU7SUFDckM7RUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmlkZ2UtYmFzaWMvLy4vc3JjL3JlY3QvUmVjdC5qcz8zOTJkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3Qge1xyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgdGhpcy5wcm9wcyA9IHByb3BzXHJcbiAgfVxyXG5cclxuICBhc3luYyBtb3VudCAoZWwpIHtcclxuICAgIHRoaXMuZWwgPSBlbFxyXG4gICAgdGhpcy5kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdGhpcy5kaXYuc3R5bGUud2lkdGggPSAnMTAwJSdcclxuICAgIHRoaXMuZGl2LnN0eWxlLmhlaWdodCA9ICcxMDAlJ1xyXG4gICAgdGhpcy5lbC5hcHBlbmQodGhpcy5kaXYpXHJcbiAgICB0aGlzLnJlbmRlcigpXHJcbiAgICB0aGlzLmRpdi5vbmNsaWNrID0gZSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlIChwcm9wcykge1xyXG4gICAgdGhpcy5wcm9wcyA9IHByb3BzXHJcbiAgICB0aGlzLnJlbmRlcigpXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBib3JkZXJSYWRpdXMsXHJcbiAgICAgIGJvcmRlckNvbG9yLFxyXG4gICAgICBib3JkZXJTdHlsZSxcclxuICAgICAgYm9yZGVyV2lkdGgsXHJcbiAgICAgIGJhY2tncm91bmRJbWFnZSxcclxuICAgICAgYmFja2dyb3VuZFxyXG4gICAgfSA9IHRoaXMucHJvcHNcclxuICAgIHRoaXMuZGl2LnN0eWxlLmJvcmRlciA9IGAke2JvcmRlcldpZHRofXB4ICR7Ym9yZGVyU3R5bGV9ICR7Ym9yZGVyQ29sb3J9YFxyXG4gICAgdGhpcy5kaXYuc3R5bGUuYm9yZGVyUmFkaXVzID0gKGJvcmRlclJhZGl1cyB8fCAwKSArICdweCdcclxuXHJcbiAgICB0aGlzLmRpdi5zdHlsZS5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZFxyXG4gICAgaWYgKGJhY2tncm91bmRJbWFnZSkge1xyXG4gICAgICB0aGlzLmRpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YmFja2dyb3VuZEltYWdlfSlgXHJcbiAgICAgIHRoaXMuZGl2LnN0eWxlLmJhY2tncm91bmRTaXplID0gJzEwMCUnXHJcbiAgICAgIHRoaXMuZGl2LnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0J1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJydcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlY3QiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwibW91bnQiLCJlbCIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJhcHBlbmQiLCJyZW5kZXIiLCJvbmNsaWNrIiwiZSIsIm9uQ2xpY2siLCJ1cGRhdGUiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJDb2xvciIsImJvcmRlclN0eWxlIiwiYm9yZGVyV2lkdGgiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/rect/Rect.js\n");

/***/ }),

/***/ "./src/rect/rect.d.js":
/*!****************************!*\
  !*** ./src/rect/rect.d.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rect */ \"./src/rect/Rect.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'rect',\n  component: _Rect__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  icon: 'bi bi-square',\n  type: 'vanilla',\n  title: '矩形',\n  order: 1,\n  width: 240,\n  height: 160,\n  props: [{\n    name: 'borderWidth',\n    label: '边框',\n    type: 'number',\n    width: 96,\n    value: 1\n  }, {\n    name: 'borderStyle',\n    type: 'select',\n    value: 'solid',\n    width: 86,\n    options: [{\n      label: '实线',\n      value: 'solid'\n    }, {\n      label: '虚线',\n      value: 'dashed'\n    }, {\n      label: '点线',\n      value: 'dotted'\n    }, {\n      label: '双实线',\n      value: 'double'\n    }]\n  }, {\n    name: 'borderColor',\n    width: 28,\n    type: 'color',\n    connect: true,\n    value: '#AAA'\n  }, {\n    name: 'borderRadius',\n    label: '圆角',\n    type: 'number',\n    value: 0\n  }, {\n    name: 'background',\n    label: '背景色',\n    type: 'background',\n    connect: true\n  }, {\n    name: 'backgroundImage',\n    label: '背景图片',\n    type: 'image'\n  }],\n  events: [{\n    label: '点击事件',\n    name: 'onClick'\n  }]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVjdC9yZWN0LmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUI7QUFFekIsaUVBQWU7RUFDYkMsSUFBSSxFQUFFLE1BQU07RUFDWkMsU0FBUyxFQUFFRiw2Q0FBSTtFQUNmRyxJQUFJLEVBQUUsY0FBYztFQUNwQkMsSUFBSSxFQUFFLFNBQVM7RUFDZkMsS0FBSyxFQUFFLElBQUk7RUFDWEMsS0FBSyxFQUFFLENBQUM7RUFDUkMsS0FBSyxFQUFFLEdBQUc7RUFDVkMsTUFBTSxFQUFFLEdBQUc7RUFDWEMsS0FBSyxFQUFFLENBQUM7SUFDTlIsSUFBSSxFQUFFLGFBQWE7SUFDbkJTLEtBQUssRUFBRSxJQUFJO0lBQ1hOLElBQUksRUFBRSxRQUFRO0lBQ2RHLEtBQUssRUFBRSxFQUFFO0lBQ1RJLEtBQUssRUFBRTtFQUNULENBQUMsRUFBRTtJQUNEVixJQUFJLEVBQUUsYUFBYTtJQUNuQkcsSUFBSSxFQUFFLFFBQVE7SUFDZE8sS0FBSyxFQUFFLE9BQU87SUFDZEosS0FBSyxFQUFFLEVBQUU7SUFDVEssT0FBTyxFQUFFLENBQUM7TUFDUkYsS0FBSyxFQUFFLElBQUk7TUFDWEMsS0FBSyxFQUFFO0lBQ1QsQ0FBQyxFQUFFO01BQ0RELEtBQUssRUFBRSxJQUFJO01BQ1hDLEtBQUssRUFBRTtJQUNULENBQUMsRUFBRTtNQUNERCxLQUFLLEVBQUUsSUFBSTtNQUNYQyxLQUFLLEVBQUU7SUFDVCxDQUFDLEVBQUU7TUFDREQsS0FBSyxFQUFFLEtBQUs7TUFDWkMsS0FBSyxFQUFFO0lBQ1QsQ0FBQztFQUNILENBQUMsRUFBRTtJQUNEVixJQUFJLEVBQUUsYUFBYTtJQUNuQk0sS0FBSyxFQUFFLEVBQUU7SUFDVEgsSUFBSSxFQUFFLE9BQU87SUFDYlMsT0FBTyxFQUFFLElBQUk7SUFDYkYsS0FBSyxFQUFFO0VBQ1QsQ0FBQyxFQUFFO0lBQ0RWLElBQUksRUFBRSxjQUFjO0lBQ3BCUyxLQUFLLEVBQUUsSUFBSTtJQUNYTixJQUFJLEVBQUUsUUFBUTtJQUNkTyxLQUFLLEVBQUU7RUFDVCxDQUFDLEVBQUU7SUFDRFYsSUFBSSxFQUFFLFlBQVk7SUFDbEJTLEtBQUssRUFBRSxLQUFLO0lBQ1pOLElBQUksRUFBRSxZQUFZO0lBQ2xCUyxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7SUFDRFosSUFBSSxFQUFFLGlCQUFpQjtJQUN2QlMsS0FBSyxFQUFFLE1BQU07SUFDYk4sSUFBSSxFQUFFO0VBQ1IsQ0FBQyxDQUFDO0VBQ0ZVLE1BQU0sRUFBRSxDQUFDO0lBQ1BKLEtBQUssRUFBRSxNQUFNO0lBQ2JULElBQUksRUFBRTtFQUNSLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmlkZ2UtYmFzaWMvLy4vc3JjL3JlY3QvcmVjdC5kLmpzP2MzMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlY3QgZnJvbSAnLi9SZWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdyZWN0JyxcclxuICBjb21wb25lbnQ6IFJlY3QsXHJcbiAgaWNvbjogJ2JpIGJpLXNxdWFyZScsXHJcbiAgdHlwZTogJ3ZhbmlsbGEnLFxyXG4gIHRpdGxlOiAn55+p5b2iJyxcclxuICBvcmRlcjogMSxcclxuICB3aWR0aDogMjQwLFxyXG4gIGhlaWdodDogMTYwLFxyXG4gIHByb3BzOiBbe1xyXG4gICAgbmFtZTogJ2JvcmRlcldpZHRoJyxcclxuICAgIGxhYmVsOiAn6L655qGGJyxcclxuICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgd2lkdGg6IDk2LFxyXG4gICAgdmFsdWU6IDFcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnYm9yZGVyU3R5bGUnLFxyXG4gICAgdHlwZTogJ3NlbGVjdCcsXHJcbiAgICB2YWx1ZTogJ3NvbGlkJyxcclxuICAgIHdpZHRoOiA4NixcclxuICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgIGxhYmVsOiAn5a6e57q/JyxcclxuICAgICAgdmFsdWU6ICdzb2xpZCdcclxuICAgIH0sIHtcclxuICAgICAgbGFiZWw6ICfomZrnur8nLFxyXG4gICAgICB2YWx1ZTogJ2Rhc2hlZCdcclxuICAgIH0sIHtcclxuICAgICAgbGFiZWw6ICfngrnnur8nLFxyXG4gICAgICB2YWx1ZTogJ2RvdHRlZCdcclxuICAgIH0sIHtcclxuICAgICAgbGFiZWw6ICflj4zlrp7nur8nLFxyXG4gICAgICB2YWx1ZTogJ2RvdWJsZSdcclxuICAgIH1dXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ2JvcmRlckNvbG9yJyxcclxuICAgIHdpZHRoOiAyOCxcclxuICAgIHR5cGU6ICdjb2xvcicsXHJcbiAgICBjb25uZWN0OiB0cnVlLFxyXG4gICAgdmFsdWU6ICcjQUFBJ1xyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdib3JkZXJSYWRpdXMnLFxyXG4gICAgbGFiZWw6ICflnIbop5InLFxyXG4gICAgdHlwZTogJ251bWJlcicsXHJcbiAgICB2YWx1ZTogMFxyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdiYWNrZ3JvdW5kJyxcclxuICAgIGxhYmVsOiAn6IOM5pmv6ImyJyxcclxuICAgIHR5cGU6ICdiYWNrZ3JvdW5kJyxcclxuICAgIGNvbm5lY3Q6IHRydWVcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnYmFja2dyb3VuZEltYWdlJyxcclxuICAgIGxhYmVsOiAn6IOM5pmv5Zu+54mHJyxcclxuICAgIHR5cGU6ICdpbWFnZSdcclxuICB9XSxcclxuICBldmVudHM6IFt7XHJcbiAgICBsYWJlbDogJ+eCueWHu+S6i+S7ticsXHJcbiAgICBuYW1lOiAnb25DbGljaydcclxuICB9XVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWN0IiwibmFtZSIsImNvbXBvbmVudCIsImljb24iLCJ0eXBlIiwidGl0bGUiLCJvcmRlciIsIndpZHRoIiwiaGVpZ2h0IiwicHJvcHMiLCJsYWJlbCIsInZhbHVlIiwib3B0aW9ucyIsImNvbm5lY3QiLCJldmVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/rect/rect.d.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/rect/rect.d.js");
/******/ 	this["ridge-basic/rect"] = __webpack_exports__;
/******/ 	
/******/ })()
;