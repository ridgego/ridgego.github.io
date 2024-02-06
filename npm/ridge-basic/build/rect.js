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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Rect)\n/* harmony export */ });\nclass Rect {\n  constructor(props) {\n    this.props = props;\n  }\n  async mount(el) {\n    this.el = el;\n    this.div = document.createElement('div');\n    this.div.style.width = '100%';\n    this.div.style.height = '100%';\n    this.el.append(this.div);\n    this.render();\n    this.div.onclick = e => {\n      this.props.onClick && this.props.onClick();\n    };\n  }\n  update(props) {\n    this.props = props;\n    this.render();\n  }\n  render() {\n    const {\n      borderRadius,\n      borderColor,\n      borderStyle,\n      borderWidth,\n      backgroundImage,\n      background\n    } = this.props;\n    this.div.style.border = `${borderWidth}px ${borderStyle} ${borderColor}`;\n    this.div.style.boxSizing = 'border-box';\n    this.div.style.borderRadius = (borderRadius || 0) + 'px';\n    this.div.style.background = background;\n    if (backgroundImage) {\n      this.div.style.backgroundImage = `url(${backgroundImage})`;\n      this.div.style.backgroundSize = '100%';\n      this.div.style.backgroundRepeat = 'no-repeat';\n    } else {\n      this.div.style.backgroundImage = '';\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVjdC9SZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxNQUFNQSxJQUFJLENBQUM7RUFDeEJDLFdBQVdBLENBQUVDLEtBQUssRUFBRTtJQUNsQixJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSztFQUNwQjtFQUVBLE1BQU1DLEtBQUtBLENBQUVDLEVBQUUsRUFBRTtJQUNmLElBQUksQ0FBQ0EsRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN4QyxJQUFJLENBQUNGLEdBQUcsQ0FBQ0csS0FBSyxDQUFDQyxLQUFLLEdBQUcsTUFBTTtJQUM3QixJQUFJLENBQUNKLEdBQUcsQ0FBQ0csS0FBSyxDQUFDRSxNQUFNLEdBQUcsTUFBTTtJQUM5QixJQUFJLENBQUNOLEVBQUUsQ0FBQ08sTUFBTSxDQUFDLElBQUksQ0FBQ04sR0FBRyxDQUFDO0lBQ3hCLElBQUksQ0FBQ08sTUFBTSxDQUFDLENBQUM7SUFDYixJQUFJLENBQUNQLEdBQUcsQ0FBQ1EsT0FBTyxHQUFHQyxDQUFDLElBQUk7TUFDdEIsSUFBSSxDQUFDWixLQUFLLENBQUNhLE9BQU8sSUFBSSxJQUFJLENBQUNiLEtBQUssQ0FBQ2EsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztFQUNIO0VBRUFDLE1BQU1BLENBQUVkLEtBQUssRUFBRTtJQUNiLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ1UsTUFBTSxDQUFDLENBQUM7RUFDZjtFQUVBQSxNQUFNQSxDQUFBLEVBQUk7SUFDUixNQUFNO01BQ0pLLFlBQVk7TUFDWkMsV0FBVztNQUNYQyxXQUFXO01BQ1hDLFdBQVc7TUFDWEMsZUFBZTtNQUNmQztJQUNGLENBQUMsR0FBRyxJQUFJLENBQUNwQixLQUFLO0lBQ2QsSUFBSSxDQUFDRyxHQUFHLENBQUNHLEtBQUssQ0FBQ2UsTUFBTSxHQUFJLEdBQUVILFdBQVksTUFBS0QsV0FBWSxJQUFHRCxXQUFZLEVBQUM7SUFDeEUsSUFBSSxDQUFDYixHQUFHLENBQUNHLEtBQUssQ0FBQ2dCLFNBQVMsR0FBRyxZQUFZO0lBQ3ZDLElBQUksQ0FBQ25CLEdBQUcsQ0FBQ0csS0FBSyxDQUFDUyxZQUFZLEdBQUcsQ0FBQ0EsWUFBWSxJQUFJLENBQUMsSUFBSSxJQUFJO0lBRXhELElBQUksQ0FBQ1osR0FBRyxDQUFDRyxLQUFLLENBQUNjLFVBQVUsR0FBR0EsVUFBVTtJQUN0QyxJQUFJRCxlQUFlLEVBQUU7TUFDbkIsSUFBSSxDQUFDaEIsR0FBRyxDQUFDRyxLQUFLLENBQUNhLGVBQWUsR0FBSSxPQUFNQSxlQUFnQixHQUFFO01BQzFELElBQUksQ0FBQ2hCLEdBQUcsQ0FBQ0csS0FBSyxDQUFDaUIsY0FBYyxHQUFHLE1BQU07TUFDdEMsSUFBSSxDQUFDcEIsR0FBRyxDQUFDRyxLQUFLLENBQUNrQixnQkFBZ0IsR0FBRyxXQUFXO0lBQy9DLENBQUMsTUFBTTtNQUNMLElBQUksQ0FBQ3JCLEdBQUcsQ0FBQ0csS0FBSyxDQUFDYSxlQUFlLEdBQUcsRUFBRTtJQUNyQztFQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaWRnZS1iYXNpYy8vLi9zcmMvcmVjdC9SZWN0LmpzPzM5MmQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdCB7XHJcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICB0aGlzLnByb3BzID0gcHJvcHNcclxuICB9XHJcblxyXG4gIGFzeW5jIG1vdW50IChlbCkge1xyXG4gICAgdGhpcy5lbCA9IGVsXHJcbiAgICB0aGlzLmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB0aGlzLmRpdi5zdHlsZS53aWR0aCA9ICcxMDAlJ1xyXG4gICAgdGhpcy5kaXYuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnXHJcbiAgICB0aGlzLmVsLmFwcGVuZCh0aGlzLmRpdilcclxuICAgIHRoaXMucmVuZGVyKClcclxuICAgIHRoaXMuZGl2Lm9uY2xpY2sgPSBlID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljaygpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGUgKHByb3BzKSB7XHJcbiAgICB0aGlzLnByb3BzID0gcHJvcHNcclxuICAgIHRoaXMucmVuZGVyKClcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGJvcmRlclJhZGl1cyxcclxuICAgICAgYm9yZGVyQ29sb3IsXHJcbiAgICAgIGJvcmRlclN0eWxlLFxyXG4gICAgICBib3JkZXJXaWR0aCxcclxuICAgICAgYmFja2dyb3VuZEltYWdlLFxyXG4gICAgICBiYWNrZ3JvdW5kXHJcbiAgICB9ID0gdGhpcy5wcm9wc1xyXG4gICAgdGhpcy5kaXYuc3R5bGUuYm9yZGVyID0gYCR7Ym9yZGVyV2lkdGh9cHggJHtib3JkZXJTdHlsZX0gJHtib3JkZXJDb2xvcn1gXHJcbiAgICB0aGlzLmRpdi5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCdcclxuICAgIHRoaXMuZGl2LnN0eWxlLmJvcmRlclJhZGl1cyA9IChib3JkZXJSYWRpdXMgfHwgMCkgKyAncHgnXHJcblxyXG4gICAgdGhpcy5kaXYuc3R5bGUuYmFja2dyb3VuZCA9IGJhY2tncm91bmRcclxuICAgIGlmIChiYWNrZ3JvdW5kSW1hZ2UpIHtcclxuICAgICAgdGhpcy5kaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2JhY2tncm91bmRJbWFnZX0pYFxyXG4gICAgICB0aGlzLmRpdi5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICcxMDAlJ1xyXG4gICAgICB0aGlzLmRpdi5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWN0IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsIm1vdW50IiwiZWwiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYXBwZW5kIiwicmVuZGVyIiwib25jbGljayIsImUiLCJvbkNsaWNrIiwidXBkYXRlIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJTdHlsZSIsImJvcmRlcldpZHRoIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZCIsImJvcmRlciIsImJveFNpemluZyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/rect/Rect.js\n");

/***/ }),

/***/ "./src/rect/rect.d.js":
/*!****************************!*\
  !*** ./src/rect/rect.d.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rect */ \"./src/rect/Rect.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'rect',\n  component: _Rect__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  icon: 'icon/rect.png',\n  type: 'vanilla',\n  title: '矩形',\n  order: 1,\n  width: 240,\n  height: 160,\n  props: [{\n    name: 'borderWidth',\n    label: '边框',\n    type: 'number',\n    width: 96,\n    value: 1\n  }, {\n    name: 'borderStyle',\n    type: 'select',\n    value: 'solid',\n    width: 86,\n    options: [{\n      label: '实线',\n      value: 'solid'\n    }, {\n      label: '虚线',\n      value: 'dashed'\n    }, {\n      label: '点线',\n      value: 'dotted'\n    }, {\n      label: '双实线',\n      value: 'double'\n    }]\n  }, {\n    name: 'borderColor',\n    width: 28,\n    type: 'color',\n    connect: true,\n    value: '#AAA'\n  }, {\n    name: 'borderRadius',\n    label: '圆角',\n    type: 'number',\n    value: 0\n  }, {\n    name: 'background',\n    label: '背景色',\n    type: 'background',\n    connect: true\n  }, {\n    name: 'backgroundImage',\n    label: '背景图片',\n    type: 'image'\n  }],\n  events: [{\n    label: '点击事件',\n    name: 'onClick'\n  }]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVjdC9yZWN0LmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUI7QUFFekIsaUVBQWU7RUFDYkMsSUFBSSxFQUFFLE1BQU07RUFDWkMsU0FBUyxFQUFFRiw2Q0FBSTtFQUNmRyxJQUFJLEVBQUUsZUFBZTtFQUNyQkMsSUFBSSxFQUFFLFNBQVM7RUFDZkMsS0FBSyxFQUFFLElBQUk7RUFDWEMsS0FBSyxFQUFFLENBQUM7RUFDUkMsS0FBSyxFQUFFLEdBQUc7RUFDVkMsTUFBTSxFQUFFLEdBQUc7RUFDWEMsS0FBSyxFQUFFLENBQUM7SUFDTlIsSUFBSSxFQUFFLGFBQWE7SUFDbkJTLEtBQUssRUFBRSxJQUFJO0lBQ1hOLElBQUksRUFBRSxRQUFRO0lBQ2RHLEtBQUssRUFBRSxFQUFFO0lBQ1RJLEtBQUssRUFBRTtFQUNULENBQUMsRUFBRTtJQUNEVixJQUFJLEVBQUUsYUFBYTtJQUNuQkcsSUFBSSxFQUFFLFFBQVE7SUFDZE8sS0FBSyxFQUFFLE9BQU87SUFDZEosS0FBSyxFQUFFLEVBQUU7SUFDVEssT0FBTyxFQUFFLENBQUM7TUFDUkYsS0FBSyxFQUFFLElBQUk7TUFDWEMsS0FBSyxFQUFFO0lBQ1QsQ0FBQyxFQUFFO01BQ0RELEtBQUssRUFBRSxJQUFJO01BQ1hDLEtBQUssRUFBRTtJQUNULENBQUMsRUFBRTtNQUNERCxLQUFLLEVBQUUsSUFBSTtNQUNYQyxLQUFLLEVBQUU7SUFDVCxDQUFDLEVBQUU7TUFDREQsS0FBSyxFQUFFLEtBQUs7TUFDWkMsS0FBSyxFQUFFO0lBQ1QsQ0FBQztFQUNILENBQUMsRUFBRTtJQUNEVixJQUFJLEVBQUUsYUFBYTtJQUNuQk0sS0FBSyxFQUFFLEVBQUU7SUFDVEgsSUFBSSxFQUFFLE9BQU87SUFDYlMsT0FBTyxFQUFFLElBQUk7SUFDYkYsS0FBSyxFQUFFO0VBQ1QsQ0FBQyxFQUFFO0lBQ0RWLElBQUksRUFBRSxjQUFjO0lBQ3BCUyxLQUFLLEVBQUUsSUFBSTtJQUNYTixJQUFJLEVBQUUsUUFBUTtJQUNkTyxLQUFLLEVBQUU7RUFDVCxDQUFDLEVBQUU7SUFDRFYsSUFBSSxFQUFFLFlBQVk7SUFDbEJTLEtBQUssRUFBRSxLQUFLO0lBQ1pOLElBQUksRUFBRSxZQUFZO0lBQ2xCUyxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQUU7SUFDRFosSUFBSSxFQUFFLGlCQUFpQjtJQUN2QlMsS0FBSyxFQUFFLE1BQU07SUFDYk4sSUFBSSxFQUFFO0VBQ1IsQ0FBQyxDQUFDO0VBQ0ZVLE1BQU0sRUFBRSxDQUFDO0lBQ1BKLEtBQUssRUFBRSxNQUFNO0lBQ2JULElBQUksRUFBRTtFQUNSLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmlkZ2UtYmFzaWMvLy4vc3JjL3JlY3QvcmVjdC5kLmpzP2MzMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlY3QgZnJvbSAnLi9SZWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdyZWN0JyxcclxuICBjb21wb25lbnQ6IFJlY3QsXHJcbiAgaWNvbjogJ2ljb24vcmVjdC5wbmcnLFxyXG4gIHR5cGU6ICd2YW5pbGxhJyxcclxuICB0aXRsZTogJ+efqeW9oicsXHJcbiAgb3JkZXI6IDEsXHJcbiAgd2lkdGg6IDI0MCxcclxuICBoZWlnaHQ6IDE2MCxcclxuICBwcm9wczogW3tcclxuICAgIG5hbWU6ICdib3JkZXJXaWR0aCcsXHJcbiAgICBsYWJlbDogJ+i+ueahhicsXHJcbiAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgIHdpZHRoOiA5NixcclxuICAgIHZhbHVlOiAxXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ2JvcmRlclN0eWxlJyxcclxuICAgIHR5cGU6ICdzZWxlY3QnLFxyXG4gICAgdmFsdWU6ICdzb2xpZCcsXHJcbiAgICB3aWR0aDogODYsXHJcbiAgICBvcHRpb25zOiBbe1xyXG4gICAgICBsYWJlbDogJ+Wunue6vycsXHJcbiAgICAgIHZhbHVlOiAnc29saWQnXHJcbiAgICB9LCB7XHJcbiAgICAgIGxhYmVsOiAn6Jma57q/JyxcclxuICAgICAgdmFsdWU6ICdkYXNoZWQnXHJcbiAgICB9LCB7XHJcbiAgICAgIGxhYmVsOiAn54K557q/JyxcclxuICAgICAgdmFsdWU6ICdkb3R0ZWQnXHJcbiAgICB9LCB7XHJcbiAgICAgIGxhYmVsOiAn5Y+M5a6e57q/JyxcclxuICAgICAgdmFsdWU6ICdkb3VibGUnXHJcbiAgICB9XVxyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdib3JkZXJDb2xvcicsXHJcbiAgICB3aWR0aDogMjgsXHJcbiAgICB0eXBlOiAnY29sb3InLFxyXG4gICAgY29ubmVjdDogdHJ1ZSxcclxuICAgIHZhbHVlOiAnI0FBQSdcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnYm9yZGVyUmFkaXVzJyxcclxuICAgIGxhYmVsOiAn5ZyG6KeSJyxcclxuICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgdmFsdWU6IDBcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnYmFja2dyb3VuZCcsXHJcbiAgICBsYWJlbDogJ+iDjOaZr+iJsicsXHJcbiAgICB0eXBlOiAnYmFja2dyb3VuZCcsXHJcbiAgICBjb25uZWN0OiB0cnVlXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ2JhY2tncm91bmRJbWFnZScsXHJcbiAgICBsYWJlbDogJ+iDjOaZr+WbvueJhycsXHJcbiAgICB0eXBlOiAnaW1hZ2UnXHJcbiAgfV0sXHJcbiAgZXZlbnRzOiBbe1xyXG4gICAgbGFiZWw6ICfngrnlh7vkuovku7YnLFxyXG4gICAgbmFtZTogJ29uQ2xpY2snXHJcbiAgfV1cclxufVxyXG4iXSwibmFtZXMiOlsiUmVjdCIsIm5hbWUiLCJjb21wb25lbnQiLCJpY29uIiwidHlwZSIsInRpdGxlIiwib3JkZXIiLCJ3aWR0aCIsImhlaWdodCIsInByb3BzIiwibGFiZWwiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJjb25uZWN0IiwiZXZlbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/rect/rect.d.js\n");

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