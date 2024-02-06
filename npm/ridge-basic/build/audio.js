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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Audio)\n/* harmony export */ });\nclass Audio {\n  constructor(props) {\n    this.props = props;\n  }\n  mount(el) {\n    this.el = el;\n    this.audio = document.createElement('audio');\n    this.audioDiv = document.createElement('div');\n    this.audioDiv.style.width = '100%';\n    this.audioDiv.style.height = '100%';\n    this.audioDiv.style.fontSize = '22px';\n    this.audioDiv.style.display = 'flex';\n    this.audioDiv.style.justifyContent = 'center';\n    this.audioDiv.style.alignItems = 'center';\n    this.audioDiv.style.color = '#999';\n    this.audioDiv.style.border = '1px solid #ccc';\n    this.audioDiv.className = 'bi bi-volume-up';\n    this.el.append(this.audio);\n    this.el.append(this.audioDiv);\n    this.render();\n  }\n  render() {\n    const {\n      autoPlay,\n      src,\n      playing,\n      onLoaded,\n      onTimeUpdated,\n      currentTime,\n      __mode\n    } = this.props;\n    this.audio.className = 'ridge-audio';\n    this.audio.preload = 'auto';\n    this.audio.autoPlay = autoPlay;\n    this.audio.src = src;\n    if (src) {\n      this.audio.addEventListener('loadeddata', () => {\n        onLoaded({\n          duration: this.audio.duration\n        });\n        // duration 变量现在存放音频的播放时长（单位秒）\n      });\n      this.audio.addEventListener('timeupdate', event => {\n        onTimeUpdated && onTimeUpdated({\n          currentTime: this.audio.currentTime\n        });\n      });\n    }\n    if (currentTime) {\n      this.audio.currentTime = currentTime;\n      console.log('currentTime', currentTime);\n      onTimeUpdated && onTimeUpdated({\n        currentTime\n      });\n    }\n    if (playing && src && __mode !== 'edit') {\n      this.audio.play();\n    } else {\n      this.audio.pause();\n    }\n  }\n  setCurrentTime(time) {\n    this.audio.currentTime = time;\n  }\n  update(props) {\n    this.props = props;\n    this.render();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUlELEdBQUcsSUFBSUssTUFBTSxLQUFLLE1BQU0sRUFBRTtNQUN2QyxJQUFJLENBQUN0QixLQUFLLENBQUM2QixJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDLE1BQU07TUFDTCxJQUFJLENBQUM3QixLQUFLLENBQUM4QixLQUFLLENBQUMsQ0FBQztJQUNwQjtFQUNGO0VBRUFDLGNBQWNBLENBQUVDLElBQUksRUFBRTtJQUNwQixJQUFJLENBQUNoQyxLQUFLLENBQUNxQixXQUFXLEdBQUdXLElBQUk7RUFDL0I7RUFFQUMsTUFBTUEsQ0FBRXBDLEtBQUssRUFBRTtJQUNiLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ2tCLE1BQU0sQ0FBQyxDQUFDO0VBQ2Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3JpZGdlLWJhc2ljLy8uL3NyYy9hdWRpby9BdWRpby5qcz8yZDQ2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvIHtcclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHRoaXMucHJvcHMgPSBwcm9wc1xyXG4gIH1cclxuXHJcbiAgbW91bnQgKGVsKSB7XHJcbiAgICB0aGlzLmVsID0gZWxcclxuICAgIHRoaXMuYXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpXHJcblxyXG4gICAgdGhpcy5hdWRpb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gICAgdGhpcy5hdWRpb0Rpdi5zdHlsZS53aWR0aCA9ICcxMDAlJ1xyXG4gICAgdGhpcy5hdWRpb0Rpdi5zdHlsZS5oZWlnaHQgPSAnMTAwJSdcclxuICAgIHRoaXMuYXVkaW9EaXYuc3R5bGUuZm9udFNpemUgPSAnMjJweCdcclxuICAgIHRoaXMuYXVkaW9EaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgdGhpcy5hdWRpb0Rpdi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInXHJcbiAgICB0aGlzLmF1ZGlvRGl2LnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJ1xyXG4gICAgdGhpcy5hdWRpb0Rpdi5zdHlsZS5jb2xvciA9ICcjOTk5J1xyXG4gICAgdGhpcy5hdWRpb0Rpdi5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkICNjY2MnXHJcblxyXG4gICAgdGhpcy5hdWRpb0Rpdi5jbGFzc05hbWUgPSAnYmkgYmktdm9sdW1lLXVwJ1xyXG5cclxuICAgIHRoaXMuZWwuYXBwZW5kKHRoaXMuYXVkaW8pXHJcbiAgICB0aGlzLmVsLmFwcGVuZCh0aGlzLmF1ZGlvRGl2KVxyXG4gICAgdGhpcy5yZW5kZXIoKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHsgYXV0b1BsYXksIHNyYywgcGxheWluZywgb25Mb2FkZWQsIG9uVGltZVVwZGF0ZWQsIGN1cnJlbnRUaW1lLCBfX21vZGUgfSA9IHRoaXMucHJvcHNcclxuICAgIHRoaXMuYXVkaW8uY2xhc3NOYW1lID0gJ3JpZGdlLWF1ZGlvJ1xyXG4gICAgdGhpcy5hdWRpby5wcmVsb2FkID0gJ2F1dG8nXHJcbiAgICB0aGlzLmF1ZGlvLmF1dG9QbGF5ID0gYXV0b1BsYXlcclxuXHJcbiAgICB0aGlzLmF1ZGlvLnNyYyA9IHNyY1xyXG5cclxuICAgIGlmIChzcmMpIHtcclxuICAgICAgdGhpcy5hdWRpby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRkYXRhJywgKCkgPT4ge1xyXG4gICAgICAgIG9uTG9hZGVkKHtcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmF1ZGlvLmR1cmF0aW9uXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBkdXJhdGlvbiDlj5jph4/njrDlnKjlrZjmlL7pn7PpopHnmoTmkq3mlL7ml7bplb/vvIjljZXkvY3np5LvvIlcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHRoaXMuYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgIG9uVGltZVVwZGF0ZWQgJiYgb25UaW1lVXBkYXRlZCh7XHJcbiAgICAgICAgICBjdXJyZW50VGltZTogdGhpcy5hdWRpby5jdXJyZW50VGltZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1cnJlbnRUaW1lKSB7XHJcbiAgICAgIHRoaXMuYXVkaW8uY3VycmVudFRpbWUgPSBjdXJyZW50VGltZVxyXG4gICAgICBjb25zb2xlLmxvZygnY3VycmVudFRpbWUnLCBjdXJyZW50VGltZSlcclxuICAgICAgb25UaW1lVXBkYXRlZCAmJiBvblRpbWVVcGRhdGVkKHtcclxuICAgICAgICBjdXJyZW50VGltZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYgKHBsYXlpbmcgJiYgc3JjICYmIF9fbW9kZSAhPT0gJ2VkaXQnKSB7XHJcbiAgICAgIHRoaXMuYXVkaW8ucGxheSgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmF1ZGlvLnBhdXNlKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEN1cnJlbnRUaW1lICh0aW1lKSB7XHJcbiAgICB0aGlzLmF1ZGlvLmN1cnJlbnRUaW1lID0gdGltZVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlIChwcm9wcykge1xyXG4gICAgdGhpcy5wcm9wcyA9IHByb3BzXHJcbiAgICB0aGlzLnJlbmRlcigpXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJBdWRpbyIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJtb3VudCIsImVsIiwiYXVkaW8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhdWRpb0RpdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJjb2xvciIsImJvcmRlciIsImNsYXNzTmFtZSIsImFwcGVuZCIsInJlbmRlciIsImF1dG9QbGF5Iiwic3JjIiwicGxheWluZyIsIm9uTG9hZGVkIiwib25UaW1lVXBkYXRlZCIsImN1cnJlbnRUaW1lIiwiX19tb2RlIiwicHJlbG9hZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkdXJhdGlvbiIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInBsYXkiLCJwYXVzZSIsInNldEN1cnJlbnRUaW1lIiwidGltZSIsInVwZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/audio/Audio.js\n");

/***/ }),

/***/ "./src/audio/index.d.js":
/*!******************************!*\
  !*** ./src/audio/index.d.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Audio */ \"./src/audio/Audio.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'audio',\n  component: _Audio__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  icon: 'bi bi-soundwave',\n  type: 'vanilla',\n  title: '音频',\n  order: 10,\n  width: 120,\n  height: 28,\n  props: [{\n    name: 'src',\n    label: '地址',\n    type: 'audio'\n  }, {\n    name: 'playing',\n    label: '播放',\n    connect: true,\n    type: 'boolean'\n  }, {\n    name: 'currentTime',\n    label: '进度',\n    connect: true,\n    type: 'number'\n  }],\n  events: [{\n    label: '音频加载',\n    name: 'onLoaded'\n  }, {\n    label: '播放',\n    name: 'onTimeUpdated'\n  }],\n  methods: [{\n    label: '跳转进度',\n    name: 'setCurrentTime'\n  }]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXVkaW8vaW5kZXguZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQjtBQUMzQixpRUFBZTtFQUNiQyxJQUFJLEVBQUUsT0FBTztFQUNiQyxTQUFTLEVBQUVGLDhDQUFLO0VBQ2hCRyxJQUFJLEVBQUUsaUJBQWlCO0VBQ3ZCQyxJQUFJLEVBQUUsU0FBUztFQUNmQyxLQUFLLEVBQUUsSUFBSTtFQUNYQyxLQUFLLEVBQUUsRUFBRTtFQUNUQyxLQUFLLEVBQUUsR0FBRztFQUNWQyxNQUFNLEVBQUUsRUFBRTtFQUNWQyxLQUFLLEVBQUUsQ0FBQztJQUNOUixJQUFJLEVBQUUsS0FBSztJQUNYUyxLQUFLLEVBQUUsSUFBSTtJQUNYTixJQUFJLEVBQUU7RUFDUixDQUFDLEVBQUU7SUFDREgsSUFBSSxFQUFFLFNBQVM7SUFDZlMsS0FBSyxFQUFFLElBQUk7SUFDWEMsT0FBTyxFQUFFLElBQUk7SUFDYlAsSUFBSSxFQUFFO0VBQ1IsQ0FBQyxFQUFFO0lBQ0RILElBQUksRUFBRSxhQUFhO0lBQ25CUyxLQUFLLEVBQUUsSUFBSTtJQUNYQyxPQUFPLEVBQUUsSUFBSTtJQUNiUCxJQUFJLEVBQUU7RUFDUixDQUFDLENBQUM7RUFDRlEsTUFBTSxFQUFFLENBQUM7SUFDUEYsS0FBSyxFQUFFLE1BQU07SUFDYlQsSUFBSSxFQUFFO0VBQ1IsQ0FBQyxFQUFFO0lBQ0RTLEtBQUssRUFBRSxJQUFJO0lBQ1hULElBQUksRUFBRTtFQUNSLENBQUMsQ0FBQztFQUNGWSxPQUFPLEVBQUUsQ0FBQztJQUNSSCxLQUFLLEVBQUUsTUFBTTtJQUNiVCxJQUFJLEVBQUU7RUFDUixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JpZGdlLWJhc2ljLy8uL3NyYy9hdWRpby9pbmRleC5kLmpzPzgxZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1ZGlvIGZyb20gJy4vQXVkaW8nXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnYXVkaW8nLFxyXG4gIGNvbXBvbmVudDogQXVkaW8sXHJcbiAgaWNvbjogJ2JpIGJpLXNvdW5kd2F2ZScsXHJcbiAgdHlwZTogJ3ZhbmlsbGEnLFxyXG4gIHRpdGxlOiAn6Z+z6aKRJyxcclxuICBvcmRlcjogMTAsXHJcbiAgd2lkdGg6IDEyMCxcclxuICBoZWlnaHQ6IDI4LFxyXG4gIHByb3BzOiBbe1xyXG4gICAgbmFtZTogJ3NyYycsXHJcbiAgICBsYWJlbDogJ+WcsOWdgCcsXHJcbiAgICB0eXBlOiAnYXVkaW8nXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ3BsYXlpbmcnLFxyXG4gICAgbGFiZWw6ICfmkq3mlL4nLFxyXG4gICAgY29ubmVjdDogdHJ1ZSxcclxuICAgIHR5cGU6ICdib29sZWFuJ1xyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdjdXJyZW50VGltZScsXHJcbiAgICBsYWJlbDogJ+i/m+W6picsXHJcbiAgICBjb25uZWN0OiB0cnVlLFxyXG4gICAgdHlwZTogJ251bWJlcidcclxuICB9XSxcclxuICBldmVudHM6IFt7XHJcbiAgICBsYWJlbDogJ+mfs+mikeWKoOi9vScsXHJcbiAgICBuYW1lOiAnb25Mb2FkZWQnXHJcbiAgfSwge1xyXG4gICAgbGFiZWw6ICfmkq3mlL4nLFxyXG4gICAgbmFtZTogJ29uVGltZVVwZGF0ZWQnXHJcbiAgfV0sXHJcbiAgbWV0aG9kczogW3tcclxuICAgIGxhYmVsOiAn6Lez6L2s6L+b5bqmJyxcclxuICAgIG5hbWU6ICdzZXRDdXJyZW50VGltZSdcclxuICB9XVxyXG59XHJcbiJdLCJuYW1lcyI6WyJBdWRpbyIsIm5hbWUiLCJjb21wb25lbnQiLCJpY29uIiwidHlwZSIsInRpdGxlIiwib3JkZXIiLCJ3aWR0aCIsImhlaWdodCIsInByb3BzIiwibGFiZWwiLCJjb25uZWN0IiwiZXZlbnRzIiwibWV0aG9kcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/audio/index.d.js\n");

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