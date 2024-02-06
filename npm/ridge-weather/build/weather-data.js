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

/***/ "./src/weather-data/WeatherStore.js":
/*!******************************************!*\
  !*** ./src/weather-data/WeatherStore.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  state: ({\n    location\n  }) => {\n    return {\n      location: location ?? 'Beijing',\n      last_updated_epoch: 1705019400,\n      last_updated: '--',\n      temp_c: -8.0,\n      temp_f: 17.6,\n      is_day: 1,\n      icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',\n      text: 'Sunny',\n      wind_mph: 4.3,\n      wind_kph: 6.8,\n      wind_degree: 360,\n      wind_dir: 'N',\n      pressure_mb: 1021.0,\n      pressure_in: 30.15,\n      precip_mm: 0.0,\n      precip_in: 0.0,\n      humidity: 79,\n      cloud: 0,\n      feelslike_c: -10.9,\n      feelslike_f: 12.4,\n      vis_km: 10.0,\n      vis_miles: 6.0,\n      uv: 2.0,\n      gust_mph: 6.0,\n      gust_kph: 9.6\n    };\n  },\n  setup() {\n    this.updateCurrentRealtime();\n    this.debounceUpdate = lodash__WEBPACK_IMPORTED_MODULE_1___default().debounce(this.updateCurrentRealtime, 500);\n    this.timer = setTimeout(() => {\n      this.updateCurrentRealtime();\n    }, 60 * 60 * 1000);\n  },\n  exit() {\n    window.clearTimeout(this.timer);\n  },\n  watch: {\n    location() {\n      this.debounceUpdate();\n    }\n  },\n  actions: {\n    // 获取实时天气\n    async updateCurrentRealtime() {\n      if (this.state.location && this.properties.token) {\n        try {\n          const result = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`//api.weatherapi.com/v1/current.json?q=${this.state.location}&aqi=no&key=${this.properties.token}&lang=zh`);\n          Object.assign(this.state, result.data.current);\n          this.state.temp_c = this.state.temp_c + '°';\n          Object.assign(this.state, result.data.current.condition);\n          console.log(result);\n        } catch (e) {}\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWF0aGVyLy8uL3NyYy93ZWF0aGVyLWRhdGEvV2VhdGhlclN0b3JlLmpzPzQ4MjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgc3RhdGU6ICh7IGxvY2F0aW9uIH0pID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbiA/PyAnQmVpamluZycsXHJcbiAgICAgIGxhc3RfdXBkYXRlZF9lcG9jaDogMTcwNTAxOTQwMCxcclxuICAgICAgbGFzdF91cGRhdGVkOiAnLS0nLFxyXG4gICAgICB0ZW1wX2M6IC04LjAsXHJcbiAgICAgIHRlbXBfZjogMTcuNixcclxuICAgICAgaXNfZGF5OiAxLFxyXG4gICAgICBpY29uOiAnLy9jZG4ud2VhdGhlcmFwaS5jb20vd2VhdGhlci82NHg2NC9kYXkvMTEzLnBuZycsXHJcbiAgICAgIHRleHQ6ICdTdW5ueScsXHJcbiAgICAgIHdpbmRfbXBoOiA0LjMsXHJcbiAgICAgIHdpbmRfa3BoOiA2LjgsXHJcbiAgICAgIHdpbmRfZGVncmVlOiAzNjAsXHJcbiAgICAgIHdpbmRfZGlyOiAnTicsXHJcbiAgICAgIHByZXNzdXJlX21iOiAxMDIxLjAsXHJcbiAgICAgIHByZXNzdXJlX2luOiAzMC4xNSxcclxuICAgICAgcHJlY2lwX21tOiAwLjAsXHJcbiAgICAgIHByZWNpcF9pbjogMC4wLFxyXG4gICAgICBodW1pZGl0eTogNzksXHJcbiAgICAgIGNsb3VkOiAwLFxyXG4gICAgICBmZWVsc2xpa2VfYzogLTEwLjksXHJcbiAgICAgIGZlZWxzbGlrZV9mOiAxMi40LFxyXG4gICAgICB2aXNfa206IDEwLjAsXHJcbiAgICAgIHZpc19taWxlczogNi4wLFxyXG4gICAgICB1djogMi4wLFxyXG4gICAgICBndXN0X21waDogNi4wLFxyXG4gICAgICBndXN0X2twaDogOS42XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgc2V0dXAgKCkge1xyXG4gICAgdGhpcy51cGRhdGVDdXJyZW50UmVhbHRpbWUoKVxyXG4gICAgdGhpcy5kZWJvdW5jZVVwZGF0ZSA9IF8uZGVib3VuY2UodGhpcy51cGRhdGVDdXJyZW50UmVhbHRpbWUsIDUwMClcclxuXHJcbiAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ3VycmVudFJlYWx0aW1lKClcclxuICAgIH0sIDYwICogNjAgKiAxMDAwKVxyXG4gIH0sXHJcblxyXG4gIGV4aXQgKCkge1xyXG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxyXG4gIH0sXHJcblxyXG4gIHdhdGNoOiB7XHJcbiAgICBsb2NhdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuZGVib3VuY2VVcGRhdGUoKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGFjdGlvbnM6IHtcclxuICAgIC8vIOiOt+WPluWunuaXtuWkqeawlFxyXG4gICAgYXN5bmMgdXBkYXRlQ3VycmVudFJlYWx0aW1lICgpIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUubG9jYXRpb24gJiYgdGhpcy5wcm9wZXJ0aWVzLnRva2VuKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChgLy9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP3E9JHt0aGlzLnN0YXRlLmxvY2F0aW9ufSZhcWk9bm8ma2V5PSR7dGhpcy5wcm9wZXJ0aWVzLnRva2VufSZsYW5nPXpoYClcclxuICBcclxuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgcmVzdWx0LmRhdGEuY3VycmVudClcclxuICAgICAgICAgIHRoaXMuc3RhdGUudGVtcF9jID0gdGhpcy5zdGF0ZS50ZW1wX2MgKyAnwrAnXHJcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsIHJlc3VsdC5kYXRhLmN1cnJlbnQuY29uZGl0aW9uKVxyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIl8iLCJzdGF0ZSIsImxvY2F0aW9uIiwibGFzdF91cGRhdGVkX2Vwb2NoIiwibGFzdF91cGRhdGVkIiwidGVtcF9jIiwidGVtcF9mIiwiaXNfZGF5IiwiaWNvbiIsInRleHQiLCJ3aW5kX21waCIsIndpbmRfa3BoIiwid2luZF9kZWdyZWUiLCJ3aW5kX2RpciIsInByZXNzdXJlX21iIiwicHJlc3N1cmVfaW4iLCJwcmVjaXBfbW0iLCJwcmVjaXBfaW4iLCJodW1pZGl0eSIsImNsb3VkIiwiZmVlbHNsaWtlX2MiLCJmZWVsc2xpa2VfZiIsInZpc19rbSIsInZpc19taWxlcyIsInV2IiwiZ3VzdF9tcGgiLCJndXN0X2twaCIsInNldHVwIiwidXBkYXRlQ3VycmVudFJlYWx0aW1lIiwiZGVib3VuY2VVcGRhdGUiLCJkZWJvdW5jZSIsInRpbWVyIiwic2V0VGltZW91dCIsImV4aXQiLCJ3aW5kb3ciLCJjbGVhclRpbWVvdXQiLCJ3YXRjaCIsImFjdGlvbnMiLCJwcm9wZXJ0aWVzIiwidG9rZW4iLCJyZXN1bHQiLCJnZXQiLCJPYmplY3QiLCJhc3NpZ24iLCJkYXRhIiwiY3VycmVudCIsImNvbmRpdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/weather-data/WeatherStore.js\n");

/***/ }),

/***/ "./src/weather-data/index.d.js":
/*!*************************************!*\
  !*** ./src/weather-data/index.d.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _WeatherStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeatherStore */ \"./src/weather-data/WeatherStore.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'WeatherData',\n  icon: 'svgs/weatherapi_logo.webp',\n  title: '天气数据',\n  type: 'store',\n  component: _WeatherStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  props: [{\n    name: 'location',\n    label: '城市/位置',\n    connect: true,\n    type: 'string'\n  }, {\n    name: 'token',\n    label: 'API Token',\n    type: 'string',\n    value: '6cfe4cf6818d420581703248241201'\n  }]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2VhdGhlci1kYXRhL2luZGV4LmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUM7QUFFekMsaUVBQWU7RUFDYkMsSUFBSSxFQUFFLGFBQWE7RUFDbkJDLElBQUksRUFBRSwyQkFBMkI7RUFDakNDLEtBQUssRUFBRSxNQUFNO0VBQ2JDLElBQUksRUFBRSxPQUFPO0VBQ2JDLFNBQVMsRUFBRUwscURBQVk7RUFDdkJNLEtBQUssRUFBRSxDQUFDO0lBQ05MLElBQUksRUFBRSxVQUFVO0lBQ2hCTSxLQUFLLEVBQUUsT0FBTztJQUNkQyxPQUFPLEVBQUUsSUFBSTtJQUNiSixJQUFJLEVBQUU7RUFDUixDQUFDLEVBQUU7SUFDREgsSUFBSSxFQUFFLE9BQU87SUFDYk0sS0FBSyxFQUFFLFdBQVc7SUFDbEJILElBQUksRUFBRSxRQUFRO0lBQ2RLLEtBQUssRUFBRTtFQUNULENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmlkZ2Utd2VhdGhlci8vLi9zcmMvd2VhdGhlci1kYXRhL2luZGV4LmQuanM/MTNhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2VhdGhlclN0b3JlIGZyb20gJy4vV2VhdGhlclN0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdXZWF0aGVyRGF0YScsXHJcbiAgaWNvbjogJ3N2Z3Mvd2VhdGhlcmFwaV9sb2dvLndlYnAnLFxyXG4gIHRpdGxlOiAn5aSp5rCU5pWw5o2uJyxcclxuICB0eXBlOiAnc3RvcmUnLFxyXG4gIGNvbXBvbmVudDogV2VhdGhlclN0b3JlLFxyXG4gIHByb3BzOiBbe1xyXG4gICAgbmFtZTogJ2xvY2F0aW9uJyxcclxuICAgIGxhYmVsOiAn5Z+O5biCL+S9jee9ricsXHJcbiAgICBjb25uZWN0OiB0cnVlLFxyXG4gICAgdHlwZTogJ3N0cmluZydcclxuICB9LCB7XHJcbiAgICBuYW1lOiAndG9rZW4nLFxyXG4gICAgbGFiZWw6ICdBUEkgVG9rZW4nLFxyXG4gICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICB2YWx1ZTogJzZjZmU0Y2Y2ODE4ZDQyMDU4MTcwMzI0ODI0MTIwMSdcclxuICB9XVxyXG59XHJcbiJdLCJuYW1lcyI6WyJXZWF0aGVyU3RvcmUiLCJuYW1lIiwiaWNvbiIsInRpdGxlIiwidHlwZSIsImNvbXBvbmVudCIsInByb3BzIiwibGFiZWwiLCJjb25uZWN0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/weather-data/index.d.js\n");

/***/ }),

/***/ "lodash":
/*!********************!*\
  !*** external "_" ***!
  \********************/
/***/ ((module) => {

module.exports = (function() { return this["_"]; }());

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = (function() { return this["axios"]; }());

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/weather-data/index.d.js");
/******/ 	this["ridge-weather/weather-data"] = __webpack_exports__;
/******/ 	
/******/ })()
;