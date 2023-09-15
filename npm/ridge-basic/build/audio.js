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

/***/ "./src/audio/Audio.js":
/*!****************************!*\
  !*** ./src/audio/Audio.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Audio)\n/* harmony export */ });\nclass Audio {\n  constructor(props) {\n    this.props = props;\n  }\n  mount(el) {\n    this.el = el;\n    this.audio = document.createElement('audio');\n    this.audioDiv = document.createElement('div');\n    this.audioDiv.style.width = '100%';\n    this.audioDiv.style.height = '100%';\n    this.audioDiv.style.fontSize = '22px';\n    this.audioDiv.style.display = 'flex';\n    this.audioDiv.style.justifyContent = 'center';\n    this.audioDiv.style.alignItems = 'center';\n    this.audioDiv.style.color = '#999';\n    this.audioDiv.style.border = '1px solid #ccc';\n    this.audioDiv.className = 'bi bi-volume-up';\n    this.el.append(this.audio);\n    this.el.append(this.audioDiv);\n    this.render();\n  }\n  render() {\n    const {\n      autoPlay,\n      src,\n      playing,\n      onLoaded,\n      onTimeUpdated,\n      currentTime,\n      __mode\n    } = this.props;\n    this.audio.className = 'ridge-audio';\n    this.audio.preload = 'auto';\n    this.audio.autoPlay = autoPlay;\n    this.audio.src = src;\n    if (src) {\n      this.audio.addEventListener('loadeddata', () => {\n        onLoaded({\n          duration: this.audio.duration\n        });\n        // duration 变量现在存放音频的播放时长（单位秒）\n      });\n\n      this.audio.addEventListener('timeupdate', event => {\n        onTimeUpdated && onTimeUpdated({\n          currentTime: this.audio.currentTime\n        });\n      });\n    }\n    if (currentTime) {\n      this.audio.currentTime = currentTime;\n      console.log('currentTime', currentTime);\n      onTimeUpdated && onTimeUpdated({\n        currentTime\n      });\n    }\n    if (playing && src && __mode !== 'edit') {\n      this.audio.play();\n    } else {\n      this.audio.pause();\n    }\n  }\n  setCurrentTime(time) {\n    this.audio.currentTime = time;\n  }\n  update(props) {\n    this.props = props;\n    this.render();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJRCxHQUFHLElBQUlLLE1BQU0sS0FBSyxNQUFNLEVBQUU7TUFDdkMsSUFBSSxDQUFDdEIsS0FBSyxDQUFDNkIsSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQyxNQUFNO01BQ0wsSUFBSSxDQUFDN0IsS0FBSyxDQUFDOEIsS0FBSyxDQUFDLENBQUM7SUFDcEI7RUFDRjtFQUVBQyxjQUFjQSxDQUFFQyxJQUFJLEVBQUU7SUFDcEIsSUFBSSxDQUFDaEMsS0FBSyxDQUFDcUIsV0FBVyxHQUFHVyxJQUFJO0VBQy9CO0VBRUFDLE1BQU1BLENBQUVwQyxLQUFLLEVBQUU7SUFDYixJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNrQixNQUFNLENBQUMsQ0FBQztFQUNmO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaWRnZS1iYXNpYy8vLi9zcmMvYXVkaW8vQXVkaW8uanM/MmQ0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpbyB7XHJcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICB0aGlzLnByb3BzID0gcHJvcHNcclxuICB9XHJcblxyXG4gIG1vdW50IChlbCkge1xyXG4gICAgdGhpcy5lbCA9IGVsXHJcbiAgICB0aGlzLmF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKVxyXG5cclxuICAgIHRoaXMuYXVkaW9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICAgIHRoaXMuYXVkaW9EaXYuc3R5bGUud2lkdGggPSAnMTAwJSdcclxuICAgIHRoaXMuYXVkaW9EaXYuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnXHJcbiAgICB0aGlzLmF1ZGlvRGl2LnN0eWxlLmZvbnRTaXplID0gJzIycHgnXHJcbiAgICB0aGlzLmF1ZGlvRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIHRoaXMuYXVkaW9EaXYuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJ1xyXG4gICAgdGhpcy5hdWRpb0Rpdi5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcidcclxuICAgIHRoaXMuYXVkaW9EaXYuc3R5bGUuY29sb3IgPSAnIzk5OSdcclxuICAgIHRoaXMuYXVkaW9EaXYuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCAjY2NjJ1xyXG5cclxuICAgIHRoaXMuYXVkaW9EaXYuY2xhc3NOYW1lID0gJ2JpIGJpLXZvbHVtZS11cCdcclxuXHJcbiAgICB0aGlzLmVsLmFwcGVuZCh0aGlzLmF1ZGlvKVxyXG4gICAgdGhpcy5lbC5hcHBlbmQodGhpcy5hdWRpb0RpdilcclxuICAgIHRoaXMucmVuZGVyKClcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB7IGF1dG9QbGF5LCBzcmMsIHBsYXlpbmcsIG9uTG9hZGVkLCBvblRpbWVVcGRhdGVkLCBjdXJyZW50VGltZSwgX19tb2RlIH0gPSB0aGlzLnByb3BzXHJcbiAgICB0aGlzLmF1ZGlvLmNsYXNzTmFtZSA9ICdyaWRnZS1hdWRpbydcclxuICAgIHRoaXMuYXVkaW8ucHJlbG9hZCA9ICdhdXRvJ1xyXG4gICAgdGhpcy5hdWRpby5hdXRvUGxheSA9IGF1dG9QbGF5XHJcblxyXG4gICAgdGhpcy5hdWRpby5zcmMgPSBzcmNcclxuXHJcbiAgICBpZiAoc3JjKSB7XHJcbiAgICAgIHRoaXMuYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsICgpID0+IHtcclxuICAgICAgICBvbkxvYWRlZCh7XHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhpcy5hdWRpby5kdXJhdGlvblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gZHVyYXRpb24g5Y+Y6YeP546w5Zyo5a2Y5pS+6Z+z6aKR55qE5pKt5pS+5pe26ZW/77yI5Y2V5L2N56eS77yJXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB0aGlzLmF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBvblRpbWVVcGRhdGVkICYmIG9uVGltZVVwZGF0ZWQoe1xyXG4gICAgICAgICAgY3VycmVudFRpbWU6IHRoaXMuYXVkaW8uY3VycmVudFRpbWVcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXJyZW50VGltZSkge1xyXG4gICAgICB0aGlzLmF1ZGlvLmN1cnJlbnRUaW1lID0gY3VycmVudFRpbWVcclxuICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnRUaW1lJywgY3VycmVudFRpbWUpXHJcbiAgICAgIG9uVGltZVVwZGF0ZWQgJiYgb25UaW1lVXBkYXRlZCh7XHJcbiAgICAgICAgY3VycmVudFRpbWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmIChwbGF5aW5nICYmIHNyYyAmJiBfX21vZGUgIT09ICdlZGl0Jykge1xyXG4gICAgICB0aGlzLmF1ZGlvLnBsYXkoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hdWRpby5wYXVzZSgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDdXJyZW50VGltZSAodGltZSkge1xyXG4gICAgdGhpcy5hdWRpby5jdXJyZW50VGltZSA9IHRpbWVcclxuICB9XHJcblxyXG4gIHVwZGF0ZSAocHJvcHMpIHtcclxuICAgIHRoaXMucHJvcHMgPSBwcm9wc1xyXG4gICAgdGhpcy5yZW5kZXIoKVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiQXVkaW8iLCJjb25zdHJ1Y3RvciIsInByb3BzIiwibW91bnQiLCJlbCIsImF1ZGlvIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXVkaW9EaXYiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJib3JkZXIiLCJjbGFzc05hbWUiLCJhcHBlbmQiLCJyZW5kZXIiLCJhdXRvUGxheSIsInNyYyIsInBsYXlpbmciLCJvbkxvYWRlZCIsIm9uVGltZVVwZGF0ZWQiLCJjdXJyZW50VGltZSIsIl9fbW9kZSIsInByZWxvYWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJwbGF5IiwicGF1c2UiLCJzZXRDdXJyZW50VGltZSIsInRpbWUiLCJ1cGRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/audio/Audio.js\n");

/***/ }),

/***/ "./src/audio/index.d.js":
/*!******************************!*\
  !*** ./src/audio/index.d.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Audio */ \"./src/audio/Audio.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'audio',\n  component: _Audio__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  icon: 'bi bi-volume-up',\n  type: 'vanilla',\n  title: '音频',\n  order: 10,\n  width: 120,\n  height: 28,\n  props: [{\n    name: 'src',\n    label: '地址',\n    type: 'audio'\n  }, {\n    name: 'playing',\n    label: '播放',\n    connect: true,\n    type: 'boolean'\n  }, {\n    name: 'currentTime',\n    label: '进度',\n    connect: true,\n    type: 'number'\n  }],\n  events: [{\n    label: '音频加载',\n    name: 'onLoaded'\n  }, {\n    label: '播放',\n    name: 'onTimeUpdated'\n  }],\n  methods: [{\n    label: '跳转进度',\n    name: 'setCurrentTime'\n  }]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXVkaW8vaW5kZXguZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQjtBQUMzQixpRUFBZTtFQUNiQyxJQUFJLEVBQUUsT0FBTztFQUNiQyxTQUFTLEVBQUVGLDhDQUFLO0VBQ2hCRyxJQUFJLEVBQUUsaUJBQWlCO0VBQ3ZCQyxJQUFJLEVBQUUsU0FBUztFQUNmQyxLQUFLLEVBQUUsSUFBSTtFQUNYQyxLQUFLLEVBQUUsRUFBRTtFQUNUQyxLQUFLLEVBQUUsR0FBRztFQUNWQyxNQUFNLEVBQUUsRUFBRTtFQUNWQyxLQUFLLEVBQUUsQ0FBQztJQUNOUixJQUFJLEVBQUUsS0FBSztJQUNYUyxLQUFLLEVBQUUsSUFBSTtJQUNYTixJQUFJLEVBQUU7RUFDUixDQUFDLEVBQUU7SUFDREgsSUFBSSxFQUFFLFNBQVM7SUFDZlMsS0FBSyxFQUFFLElBQUk7SUFDWEMsT0FBTyxFQUFFLElBQUk7SUFDYlAsSUFBSSxFQUFFO0VBQ1IsQ0FBQyxFQUFFO0lBQ0RILElBQUksRUFBRSxhQUFhO0lBQ25CUyxLQUFLLEVBQUUsSUFBSTtJQUNYQyxPQUFPLEVBQUUsSUFBSTtJQUNiUCxJQUFJLEVBQUU7RUFDUixDQUFDLENBQUM7RUFDRlEsTUFBTSxFQUFFLENBQUM7SUFDUEYsS0FBSyxFQUFFLE1BQU07SUFDYlQsSUFBSSxFQUFFO0VBQ1IsQ0FBQyxFQUFFO0lBQ0RTLEtBQUssRUFBRSxJQUFJO0lBQ1hULElBQUksRUFBRTtFQUNSLENBQUMsQ0FBQztFQUNGWSxPQUFPLEVBQUUsQ0FBQztJQUNSSCxLQUFLLEVBQUUsTUFBTTtJQUNiVCxJQUFJLEVBQUU7RUFDUixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JpZGdlLWJhc2ljLy8uL3NyYy9hdWRpby9pbmRleC5kLmpzPzgxZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1ZGlvIGZyb20gJy4vQXVkaW8nXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnYXVkaW8nLFxyXG4gIGNvbXBvbmVudDogQXVkaW8sXHJcbiAgaWNvbjogJ2JpIGJpLXZvbHVtZS11cCcsXHJcbiAgdHlwZTogJ3ZhbmlsbGEnLFxyXG4gIHRpdGxlOiAn6Z+z6aKRJyxcclxuICBvcmRlcjogMTAsXHJcbiAgd2lkdGg6IDEyMCxcclxuICBoZWlnaHQ6IDI4LFxyXG4gIHByb3BzOiBbe1xyXG4gICAgbmFtZTogJ3NyYycsXHJcbiAgICBsYWJlbDogJ+WcsOWdgCcsXHJcbiAgICB0eXBlOiAnYXVkaW8nXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ3BsYXlpbmcnLFxyXG4gICAgbGFiZWw6ICfmkq3mlL4nLFxyXG4gICAgY29ubmVjdDogdHJ1ZSxcclxuICAgIHR5cGU6ICdib29sZWFuJ1xyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdjdXJyZW50VGltZScsXHJcbiAgICBsYWJlbDogJ+i/m+W6picsXHJcbiAgICBjb25uZWN0OiB0cnVlLFxyXG4gICAgdHlwZTogJ251bWJlcidcclxuICB9XSxcclxuICBldmVudHM6IFt7XHJcbiAgICBsYWJlbDogJ+mfs+mikeWKoOi9vScsXHJcbiAgICBuYW1lOiAnb25Mb2FkZWQnXHJcbiAgfSwge1xyXG4gICAgbGFiZWw6ICfmkq3mlL4nLFxyXG4gICAgbmFtZTogJ29uVGltZVVwZGF0ZWQnXHJcbiAgfV0sXHJcbiAgbWV0aG9kczogW3tcclxuICAgIGxhYmVsOiAn6Lez6L2s6L+b5bqmJyxcclxuICAgIG5hbWU6ICdzZXRDdXJyZW50VGltZSdcclxuICB9XVxyXG59XHJcbiJdLCJuYW1lcyI6WyJBdWRpbyIsIm5hbWUiLCJjb21wb25lbnQiLCJpY29uIiwidHlwZSIsInRpdGxlIiwib3JkZXIiLCJ3aWR0aCIsImhlaWdodCIsInByb3BzIiwibGFiZWwiLCJjb25uZWN0IiwiZXZlbnRzIiwibWV0aG9kcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/audio/index.d.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/audio/index.d.js");
/******/ 	this["ridge-basic/audio"] = __webpack_exports__;
/******/ 	
/******/ })()
;