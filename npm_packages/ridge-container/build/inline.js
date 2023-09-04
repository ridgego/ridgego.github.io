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

/***/ "./src/BaseContainer.js":
/*!******************************!*\
  !*** ./src/BaseContainer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BaseContainer)\n/* harmony export */ });\n/**\r\n * @abstract BaseContainer\r\n * 容器基础实现，包含通用配置及方法\r\n */\nclass BaseContainer {\n  constructor(props) {\n    this.props = props;\n    this.isRuntime = props.__mode !== 'edit';\n  }\n\n  /**\r\n   * 获取容器样式\r\n   * @abstract\r\n   */\n  getContainerStyle() {}\n\n  /**\r\n   * 子节点style信息\r\n   * @abstract\r\n   */\n  getChildStyle(wrapper) {}\n\n  /**\r\n   * 获取shadow样式\r\n   * @abstract\r\n   */\n  getShadowStyle() {}\n\n  /**\r\n   * 判断元素是否属于插槽节点\r\n   * @abstract\r\n   */\n  isSlot(el) {\n    return false;\n  }\n\n  /**\r\n   * 获取插槽属性\r\n   * @abstract\r\n   */\n  getSlotProps() {\n    return {};\n  }\n\n  /**\r\n     * 拖拽一个矩形到容器上，判断将其插入到哪个位置\r\n     * @param {*} droppedRect\r\n     * @param {*} siblings\r\n     * @abstract\r\n     */\n  getAfterNode(droppedRect, siblings) {\n    return null;\n  }\n  mounted() {}\n  async mount(el) {\n    this.el = el;\n    const containerDiv = document.createElement('div');\n    this.containerEl = containerDiv;\n    if (this.className) {\n      containerDiv.classList.add(this.className);\n    }\n    el.appendChild(containerDiv);\n    this.wrapper = this.props.__elementWrapper;\n    this.mode = this.props.__mode;\n    Object.assign(this.containerEl.style, {\n      width: '100%',\n      height: '100%'\n    }, this.getContainerStyle());\n    if (this.props.children) {\n      for (const childWrapper of this.props.children) {\n        const childDiv = document.createElement('div');\n        this.containerEl.appendChild(childDiv);\n        await childWrapper.loadAndMount(childDiv);\n        this.updateChildStyle(childWrapper);\n      }\n    }\n    await this.mounted();\n  }\n\n  /**\r\n   * 计算并更新子节点样式\r\n   * @param  {ElementWrapper} wrapper 封装类\r\n   */\n  updateChildStyle(wrapper, originalRect) {\n    const style = Object.assign({}, wrapper.getResetStyle(), this.getChildStyle(wrapper, originalRect));\n    Object.assign(wrapper.el.style, style);\n  }\n\n  // 追加子节点\n  appendChild(wrapper, x, y) {\n    const el = wrapper.el;\n    let originalRect = el.getBoundingClientRect();\n    if (el.parentElement == null) {\n      originalRect = {\n        x: x - (wrapper.config.style.width || 100) / 2,\n        y: y - (wrapper.config.style.height || 100) / 2,\n        width: wrapper.config.style.width || 100,\n        height: wrapper.config.style.height || 100\n      };\n    }\n    if (el.parentElement !== this.containerEl) {\n      if (this.containerEl.querySelector(':scope > .drop-shadow')) {\n        this.containerEl.insertBefore(el, this.containerEl.querySelector(':scope > .drop-shadow'));\n        this.containerEl.removeChild(this.containerEl.querySelector(':scope > .drop-shadow'));\n      } else {\n        this.containerEl.appendChild(el);\n      }\n      this.updateChildStyle(wrapper, originalRect);\n    }\n    return {\n      children: this.getChildren()\n    };\n  }\n\n  // 删除子节点\n  removeChild(wrapper, isDelete) {\n    // 原地阴影\n    if (wrapper.el.parentElement === this.containerEl) {\n      if (!isDelete) {\n        this.checkInsertDropShadowEl(wrapper.el.getBoundingClientRect(), wrapper.el, wrapper.config.style);\n      }\n      this.containerEl.removeChild(wrapper.el);\n    } else {\n      console.warn('not children ');\n    }\n    return {\n      children: this.getChildren()\n    };\n  }\n\n  // 在指定位置创建或确认现有放置阴影层\n  checkInsertDropShadowEl(rect, afterNode, configStyle) {\n    const existedNode = this.containerEl.querySelector(':scope > .drop-shadow');\n    if (existedNode && existedNode.nextElementSibling === afterNode) {\n      return;\n    }\n    if (existedNode) {\n      this.containerEl.removeChild(existedNode);\n    }\n    const shadowNode = document.createElement('div');\n    shadowNode.classList.add('drop-shadow');\n    shadowNode.style.width = rect.width + 'px';\n    shadowNode.style.height = rect.height + 'px';\n    shadowNode.style.borderRadius = 'var(--semi-border-radius-small)';\n    shadowNode.style.border = '2px dashed var(--semi-color-primary)';\n    shadowNode.style.backgroundColor = 'var(--semi-color-primary-light-default)';\n    Object.assign(shadowNode.style, this.getShadowStyle(configStyle));\n    if (afterNode == null) {\n      this.containerEl.appendChild(shadowNode);\n    } else {\n      this.containerEl.insertBefore(shadowNode, afterNode);\n    }\n  }\n\n  // 拖拽上浮\n  onDragOver(wrapper) {\n    if (wrapper.el) {\n      // 已有组件放置进入\n      // 获取当前放置的次序\n      const afterNode = this.getAfterNode(wrapper.el.getBoundingClientRect(), this.containerEl.childNodes);\n      this.checkInsertDropShadowEl(wrapper.getConfig().style, afterNode, wrapper.config.style);\n    } else {\n      // 新增组件放置, 这种情况下 Wrapper只是一个含有width/height的rect对象\n      const afterNode = this.getAfterNode(wrapper, this.containerEl.childNodes);\n      this.checkInsertDropShadowEl(wrapper, afterNode, wrapper);\n    }\n  }\n  onDragOut() {\n    if (this.containerEl.querySelector(':scope > .drop-shadow')) {\n      this.containerEl.removeChild(this.containerEl.querySelector(':scope > .drop-shadow'));\n    }\n  }\n  updateChild(wrapper) {\n    this.updateChildStyle(wrapper);\n  }\n  getChildren() {\n    return Array.from(this.containerEl.childNodes).filter(el => el.classList.contains('ridge-element')).map(el => {\n      return el.elementWrapper.id;\n    }).filter(e => e != null);\n  }\n\n  /**\r\n   * 按属性联动方法\r\n   * @param {*} props\r\n   */\n  update(props) {\n    this.props = props;\n    Object.assign(this.containerEl.style, this.getContainerStyle());\n    if (this.props.children) {\n      for (const childWrapper of this.props.children) {\n        childWrapper.forceUpdate();\n      }\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCeUIsTUFBTSxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDUixXQUFXLENBQUNTLEtBQUssRUFBRSxJQUFJLENBQUN4QixpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFFL0QsSUFBSSxJQUFJLENBQUNILEtBQUssQ0FBQzhCLFFBQVEsRUFBRTtNQUN2QixLQUFLLE1BQU1DLFlBQVksSUFBSSxJQUFJLENBQUMvQixLQUFLLENBQUM4QixRQUFRLEVBQUU7UUFDOUNDLFlBQVksQ0FBQzBDLFdBQVcsQ0FBQyxDQUFDO01BQzVCO0lBQ0Y7RUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmlkZ2UtY29udGFpbmVyLy8uL3NyYy9CYXNlQ29udGFpbmVyLmpzPzkxMDAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBhYnN0cmFjdCBCYXNlQ29udGFpbmVyXHJcbiAqIOWuueWZqOWfuuehgOWunueOsO+8jOWMheWQq+mAmueUqOmFjee9ruWPiuaWueazlVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUNvbnRhaW5lciB7XHJcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICB0aGlzLnByb3BzID0gcHJvcHNcclxuICAgIHRoaXMuaXNSdW50aW1lID0gcHJvcHMuX19tb2RlICE9PSAnZWRpdCdcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluWuueWZqOagt+W8j1xyXG4gICAqIEBhYnN0cmFjdFxyXG4gICAqL1xyXG4gIGdldENvbnRhaW5lclN0eWxlICgpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWtkOiKgueCuXN0eWxl5L+h5oGvXHJcbiAgICogQGFic3RyYWN0XHJcbiAgICovXHJcbiAgZ2V0Q2hpbGRTdHlsZSAod3JhcHBlcikge31cclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+Wc2hhZG935qC35byPXHJcbiAgICogQGFic3RyYWN0XHJcbiAgICovXHJcbiAgZ2V0U2hhZG93U3R5bGUgKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICog5Yik5pat5YWD57Sg5piv5ZCm5bGe5LqO5o+S5qe96IqC54K5XHJcbiAgICogQGFic3RyYWN0XHJcbiAgICovXHJcbiAgaXNTbG90IChlbCkgeyByZXR1cm4gZmFsc2UgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bmj5Lmp73lsZ7mgKdcclxuICAgKiBAYWJzdHJhY3RcclxuICAgKi9cclxuICBnZXRTbG90UHJvcHMgKCkgeyByZXR1cm4ge30gfVxyXG5cclxuICAvKipcclxuICAgICAqIOaLluaLveS4gOS4quefqeW9ouWIsOWuueWZqOS4iu+8jOWIpOaWreWwhuWFtuaPkuWFpeWIsOWTquS4quS9jee9rlxyXG4gICAgICogQHBhcmFtIHsqfSBkcm9wcGVkUmVjdFxyXG4gICAgICogQHBhcmFtIHsqfSBzaWJsaW5nc1xyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKi9cclxuICBnZXRBZnRlck5vZGUgKGRyb3BwZWRSZWN0LCBzaWJsaW5ncykge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIG1vdW50ZWQgKCkge31cclxuXHJcbiAgYXN5bmMgbW91bnQgKGVsKSB7XHJcbiAgICB0aGlzLmVsID0gZWxcclxuICAgIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB0aGlzLmNvbnRhaW5lckVsID0gY29udGFpbmVyRGl2XHJcblxyXG4gICAgaWYgKHRoaXMuY2xhc3NOYW1lKSB7XHJcbiAgICAgIGNvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lKVxyXG4gICAgfVxyXG4gICAgZWwuYXBwZW5kQ2hpbGQoY29udGFpbmVyRGl2KVxyXG5cclxuICAgIHRoaXMud3JhcHBlciA9IHRoaXMucHJvcHMuX19lbGVtZW50V3JhcHBlclxyXG4gICAgdGhpcy5tb2RlID0gdGhpcy5wcm9wcy5fX21vZGVcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb250YWluZXJFbC5zdHlsZSwge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJ1xyXG4gICAgfSwgdGhpcy5nZXRDb250YWluZXJTdHlsZSgpKVxyXG5cclxuICAgIGlmICh0aGlzLnByb3BzLmNoaWxkcmVuKSB7XHJcbiAgICAgIGZvciAoY29uc3QgY2hpbGRXcmFwcGVyIG9mIHRoaXMucHJvcHMuY2hpbGRyZW4pIHtcclxuICAgICAgICBjb25zdCBjaGlsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5jb250YWluZXJFbC5hcHBlbmRDaGlsZChjaGlsZERpdilcclxuICAgICAgICBhd2FpdCBjaGlsZFdyYXBwZXIubG9hZEFuZE1vdW50KGNoaWxkRGl2KVxyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hpbGRTdHlsZShjaGlsZFdyYXBwZXIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGF3YWl0IHRoaXMubW91bnRlZCgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDorqHnrpflubbmm7TmlrDlrZDoioLngrnmoLflvI9cclxuICAgKiBAcGFyYW0gIHtFbGVtZW50V3JhcHBlcn0gd3JhcHBlciDlsIHoo4XnsbtcclxuICAgKi9cclxuICB1cGRhdGVDaGlsZFN0eWxlICh3cmFwcGVyLCBvcmlnaW5hbFJlY3QpIHtcclxuICAgIGNvbnN0IHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgd3JhcHBlci5nZXRSZXNldFN0eWxlKCksIHRoaXMuZ2V0Q2hpbGRTdHlsZSh3cmFwcGVyLCBvcmlnaW5hbFJlY3QpKVxyXG5cclxuICAgIE9iamVjdC5hc3NpZ24od3JhcHBlci5lbC5zdHlsZSwgc3R5bGUpXHJcbiAgfVxyXG5cclxuICAvLyDov73liqDlrZDoioLngrlcclxuICBhcHBlbmRDaGlsZCAod3JhcHBlciwgeCwgeSkge1xyXG4gICAgY29uc3QgZWwgPSB3cmFwcGVyLmVsXHJcblxyXG4gICAgbGV0IG9yaWdpbmFsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblxyXG4gICAgaWYgKGVsLnBhcmVudEVsZW1lbnQgPT0gbnVsbCkge1xyXG4gICAgICBvcmlnaW5hbFJlY3QgPSB7XHJcbiAgICAgICAgeDogeCAtICh3cmFwcGVyLmNvbmZpZy5zdHlsZS53aWR0aCB8fCAxMDApIC8gMixcclxuICAgICAgICB5OiB5IC0gKHdyYXBwZXIuY29uZmlnLnN0eWxlLmhlaWdodCB8fCAxMDApIC8gMixcclxuICAgICAgICB3aWR0aDogd3JhcHBlci5jb25maWcuc3R5bGUud2lkdGggfHwgMTAwLFxyXG4gICAgICAgIGhlaWdodDogd3JhcHBlci5jb25maWcuc3R5bGUuaGVpZ2h0IHx8IDEwMFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZWwucGFyZW50RWxlbWVudCAhPT0gdGhpcy5jb250YWluZXJFbCkge1xyXG4gICAgICBpZiAodGhpcy5jb250YWluZXJFbC5xdWVyeVNlbGVjdG9yKCc6c2NvcGUgPiAuZHJvcC1zaGFkb3cnKSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRWwuaW5zZXJ0QmVmb3JlKGVsLCB0aGlzLmNvbnRhaW5lckVsLnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IC5kcm9wLXNoYWRvdycpKVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRWwucmVtb3ZlQ2hpbGQodGhpcy5jb250YWluZXJFbC5xdWVyeVNlbGVjdG9yKCc6c2NvcGUgPiAuZHJvcC1zaGFkb3cnKSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckVsLmFwcGVuZENoaWxkKGVsKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hpbGRTdHlsZSh3cmFwcGVyLCBvcmlnaW5hbFJlY3QpXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjaGlsZHJlbjogdGhpcy5nZXRDaGlsZHJlbigpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDliKDpmaTlrZDoioLngrlcclxuICByZW1vdmVDaGlsZCAod3JhcHBlciwgaXNEZWxldGUpIHtcclxuICAgIC8vIOWOn+WcsOmYtOW9sVxyXG4gICAgaWYgKHdyYXBwZXIuZWwucGFyZW50RWxlbWVudCA9PT0gdGhpcy5jb250YWluZXJFbCkge1xyXG4gICAgICBpZiAoIWlzRGVsZXRlKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0luc2VydERyb3BTaGFkb3dFbCh3cmFwcGVyLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCB3cmFwcGVyLmVsLCB3cmFwcGVyLmNvbmZpZy5zdHlsZSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNvbnRhaW5lckVsLnJlbW92ZUNoaWxkKHdyYXBwZXIuZWwpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ25vdCBjaGlsZHJlbiAnKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2hpbGRyZW46IHRoaXMuZ2V0Q2hpbGRyZW4oKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5Zyo5oyH5a6a5L2N572u5Yib5bu65oiW56Gu6K6k546w5pyJ5pS+572u6Zi05b2x5bGCXHJcbiAgY2hlY2tJbnNlcnREcm9wU2hhZG93RWwgKHJlY3QsIGFmdGVyTm9kZSwgY29uZmlnU3R5bGUpIHtcclxuICAgIGNvbnN0IGV4aXN0ZWROb2RlID0gdGhpcy5jb250YWluZXJFbC5xdWVyeVNlbGVjdG9yKCc6c2NvcGUgPiAuZHJvcC1zaGFkb3cnKVxyXG5cclxuICAgIGlmIChleGlzdGVkTm9kZSAmJiBleGlzdGVkTm9kZS5uZXh0RWxlbWVudFNpYmxpbmcgPT09IGFmdGVyTm9kZSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChleGlzdGVkTm9kZSkge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lckVsLnJlbW92ZUNoaWxkKGV4aXN0ZWROb2RlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNoYWRvd05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgc2hhZG93Tm9kZS5jbGFzc0xpc3QuYWRkKCdkcm9wLXNoYWRvdycpXHJcbiAgICBzaGFkb3dOb2RlLnN0eWxlLndpZHRoID0gcmVjdC53aWR0aCArICdweCdcclxuICAgIHNoYWRvd05vZGUuc3R5bGUuaGVpZ2h0ID0gcmVjdC5oZWlnaHQgKyAncHgnXHJcblxyXG4gICAgc2hhZG93Tm9kZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSAndmFyKC0tc2VtaS1ib3JkZXItcmFkaXVzLXNtYWxsKSdcclxuICAgIHNoYWRvd05vZGUuc3R5bGUuYm9yZGVyID0gJzJweCBkYXNoZWQgdmFyKC0tc2VtaS1jb2xvci1wcmltYXJ5KSdcclxuICAgIHNoYWRvd05vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLXNlbWktY29sb3ItcHJpbWFyeS1saWdodC1kZWZhdWx0KSdcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKHNoYWRvd05vZGUuc3R5bGUsIHRoaXMuZ2V0U2hhZG93U3R5bGUoY29uZmlnU3R5bGUpKVxyXG5cclxuICAgIGlmIChhZnRlck5vZGUgPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lckVsLmFwcGVuZENoaWxkKHNoYWRvd05vZGUpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lckVsLmluc2VydEJlZm9yZShzaGFkb3dOb2RlLCBhZnRlck5vZGUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDmi5bmi73kuIrmta5cclxuICBvbkRyYWdPdmVyICh3cmFwcGVyKSB7XHJcbiAgICBpZiAod3JhcHBlci5lbCkgeyAvLyDlt7LmnInnu4Tku7bmlL7nva7ov5vlhaVcclxuICAgICAgLy8g6I635Y+W5b2T5YmN5pS+572u55qE5qyh5bqPXHJcbiAgICAgIGNvbnN0IGFmdGVyTm9kZSA9IHRoaXMuZ2V0QWZ0ZXJOb2RlKHdyYXBwZXIuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHRoaXMuY29udGFpbmVyRWwuY2hpbGROb2RlcylcclxuICAgICAgdGhpcy5jaGVja0luc2VydERyb3BTaGFkb3dFbCh3cmFwcGVyLmdldENvbmZpZygpLnN0eWxlLCBhZnRlck5vZGUsIHdyYXBwZXIuY29uZmlnLnN0eWxlKVxyXG4gICAgfSBlbHNlIHsgLy8g5paw5aKe57uE5Lu25pS+572uLCDov5nnp43mg4XlhrXkuIsgV3JhcHBlcuWPquaYr+S4gOS4quWQq+aciXdpZHRoL2hlaWdodOeahHJlY3Tlr7nosaFcclxuICAgICAgY29uc3QgYWZ0ZXJOb2RlID0gdGhpcy5nZXRBZnRlck5vZGUod3JhcHBlciwgdGhpcy5jb250YWluZXJFbC5jaGlsZE5vZGVzKVxyXG4gICAgICB0aGlzLmNoZWNrSW5zZXJ0RHJvcFNoYWRvd0VsKHdyYXBwZXIsIGFmdGVyTm9kZSwgd3JhcHBlcilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRHJhZ091dCAoKSB7XHJcbiAgICBpZiAodGhpcy5jb250YWluZXJFbC5xdWVyeVNlbGVjdG9yKCc6c2NvcGUgPiAuZHJvcC1zaGFkb3cnKSkge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lckVsLnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyRWwucXVlcnlTZWxlY3RvcignOnNjb3BlID4gLmRyb3Atc2hhZG93JykpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGlsZCAod3JhcHBlcikge1xyXG4gICAgdGhpcy51cGRhdGVDaGlsZFN0eWxlKHdyYXBwZXIpXHJcbiAgfVxyXG5cclxuICBnZXRDaGlsZHJlbiAoKSB7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmNvbnRhaW5lckVsLmNoaWxkTm9kZXMpLmZpbHRlcihlbCA9PiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3JpZGdlLWVsZW1lbnQnKSkubWFwKGVsID0+IHtcclxuICAgICAgcmV0dXJuIGVsLmVsZW1lbnRXcmFwcGVyLmlkXHJcbiAgICB9KS5maWx0ZXIoZSA9PiBlICE9IG51bGwpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmjInlsZ7mgKfogZTliqjmlrnms5VcclxuICAgKiBAcGFyYW0geyp9IHByb3BzXHJcbiAgICovXHJcbiAgdXBkYXRlIChwcm9wcykge1xyXG4gICAgdGhpcy5wcm9wcyA9IHByb3BzXHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuY29udGFpbmVyRWwuc3R5bGUsIHRoaXMuZ2V0Q29udGFpbmVyU3R5bGUoKSlcclxuXHJcbiAgICBpZiAodGhpcy5wcm9wcy5jaGlsZHJlbikge1xyXG4gICAgICBmb3IgKGNvbnN0IGNoaWxkV3JhcHBlciBvZiB0aGlzLnByb3BzLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgY2hpbGRXcmFwcGVyLmZvcmNlVXBkYXRlKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiQmFzZUNvbnRhaW5lciIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJpc1J1bnRpbWUiLCJfX21vZGUiLCJnZXRDb250YWluZXJTdHlsZSIsImdldENoaWxkU3R5bGUiLCJ3cmFwcGVyIiwiZ2V0U2hhZG93U3R5bGUiLCJpc1Nsb3QiLCJlbCIsImdldFNsb3RQcm9wcyIsImdldEFmdGVyTm9kZSIsImRyb3BwZWRSZWN0Iiwic2libGluZ3MiLCJtb3VudGVkIiwibW91bnQiLCJjb250YWluZXJEaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb250YWluZXJFbCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiX19lbGVtZW50V3JhcHBlciIsIm1vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2hpbGRyZW4iLCJjaGlsZFdyYXBwZXIiLCJjaGlsZERpdiIsImxvYWRBbmRNb3VudCIsInVwZGF0ZUNoaWxkU3R5bGUiLCJvcmlnaW5hbFJlY3QiLCJnZXRSZXNldFN0eWxlIiwieCIsInkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRFbGVtZW50IiwiY29uZmlnIiwicXVlcnlTZWxlY3RvciIsImluc2VydEJlZm9yZSIsInJlbW92ZUNoaWxkIiwiZ2V0Q2hpbGRyZW4iLCJpc0RlbGV0ZSIsImNoZWNrSW5zZXJ0RHJvcFNoYWRvd0VsIiwiY29uc29sZSIsIndhcm4iLCJyZWN0IiwiYWZ0ZXJOb2RlIiwiY29uZmlnU3R5bGUiLCJleGlzdGVkTm9kZSIsIm5leHRFbGVtZW50U2libGluZyIsInNoYWRvd05vZGUiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvbkRyYWdPdmVyIiwiY2hpbGROb2RlcyIsImdldENvbmZpZyIsIm9uRHJhZ091dCIsInVwZGF0ZUNoaWxkIiwiQXJyYXkiLCJmcm9tIiwiZmlsdGVyIiwiY29udGFpbnMiLCJtYXAiLCJlbGVtZW50V3JhcHBlciIsImlkIiwiZSIsInVwZGF0ZSIsImZvcmNlVXBkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/BaseContainer.js\n");

/***/ }),

/***/ "./src/inline/InlineContainer.js":
/*!***************************************!*\
  !*** ./src/inline/InlineContainer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RowContainer)\n/* harmony export */ });\n/* harmony import */ var _BaseContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseContainer */ \"./src/BaseContainer.js\");\n\n/**\r\n * 流式容器，HTML默认的布局方式\r\n */\nclass RowContainer extends _BaseContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  getContainerStyle(props) {\n    const containerStyle = {\n      width: '100%',\n      lineHeight: this.props.lineHeight + 'px',\n      height: '100%'\n    };\n    Object.assign(containerStyle, this.props.rectStyle);\n    return containerStyle;\n  }\n  getChildStyle(wrapper) {\n    return this.getShadowStyle(wrapper.config.style);\n  }\n  getShadowStyle(configStyle) {\n    const shadowStyle = {};\n    shadowStyle.display = 'inline-block';\n    shadowStyle.height = configStyle.height + 'px';\n    shadowStyle.width = configStyle.width + 'px';\n    shadowStyle.marginLeft = configStyle.marginLeft + 'px';\n    return shadowStyle;\n  }\n  getAfterNode(droppedRect, siblings) {\n    return null;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5saW5lL0lubGluZUNvbnRhaW5lci5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDZSxNQUFNQyxZQUFZLFNBQVNELHNEQUFhLENBQUM7RUFDdERFLGlCQUFpQkEsQ0FBRUMsS0FBSyxFQUFFO0lBQ3hCLE1BQU1DLGNBQWMsR0FBRztNQUNyQkMsS0FBSyxFQUFFLE1BQU07TUFDYkMsVUFBVSxFQUFFLElBQUksQ0FBQ0gsS0FBSyxDQUFDRyxVQUFVLEdBQUcsSUFBSTtNQUN4Q0MsTUFBTSxFQUFFO0lBQ1YsQ0FBQztJQUNEQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0wsY0FBYyxFQUFFLElBQUksQ0FBQ0QsS0FBSyxDQUFDTyxTQUFTLENBQUM7SUFDbkQsT0FBT04sY0FBYztFQUN2QjtFQUVBTyxhQUFhQSxDQUFFQyxPQUFPLEVBQUU7SUFDdEIsT0FBTyxJQUFJLENBQUNDLGNBQWMsQ0FBQ0QsT0FBTyxDQUFDRSxNQUFNLENBQUNDLEtBQUssQ0FBQztFQUNsRDtFQUVBRixjQUFjQSxDQUFFRyxXQUFXLEVBQUU7SUFDM0IsTUFBTUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUV0QkEsV0FBVyxDQUFDQyxPQUFPLEdBQUcsY0FBYztJQUNwQ0QsV0FBVyxDQUFDVixNQUFNLEdBQUdTLFdBQVcsQ0FBQ1QsTUFBTSxHQUFHLElBQUk7SUFDOUNVLFdBQVcsQ0FBQ1osS0FBSyxHQUFHVyxXQUFXLENBQUNYLEtBQUssR0FBRyxJQUFJO0lBQzVDWSxXQUFXLENBQUNFLFVBQVUsR0FBR0gsV0FBVyxDQUFDRyxVQUFVLEdBQUcsSUFBSTtJQUV0RCxPQUFPRixXQUFXO0VBQ3BCO0VBRUFHLFlBQVlBLENBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFO0lBQ25DLE9BQU8sSUFBSTtFQUNiO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaWRnZS1jb250YWluZXIvLy4vc3JjL2lubGluZS9JbmxpbmVDb250YWluZXIuanM/ZTEzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZUNvbnRhaW5lciBmcm9tICcuLi9CYXNlQ29udGFpbmVyJ1xyXG4vKipcclxuICog5rWB5byP5a655Zmo77yMSFRNTOm7mOiupOeahOW4g+WxgOaWueW8j1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm93Q29udGFpbmVyIGV4dGVuZHMgQmFzZUNvbnRhaW5lciB7XHJcbiAgZ2V0Q29udGFpbmVyU3R5bGUgKHByb3BzKSB7XHJcbiAgICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgbGluZUhlaWdodDogdGhpcy5wcm9wcy5saW5lSGVpZ2h0ICsgJ3B4JyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJSdcclxuICAgIH1cclxuICAgIE9iamVjdC5hc3NpZ24oY29udGFpbmVyU3R5bGUsIHRoaXMucHJvcHMucmVjdFN0eWxlKVxyXG4gICAgcmV0dXJuIGNvbnRhaW5lclN0eWxlXHJcbiAgfVxyXG5cclxuICBnZXRDaGlsZFN0eWxlICh3cmFwcGVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRTaGFkb3dTdHlsZSh3cmFwcGVyLmNvbmZpZy5zdHlsZSlcclxuICB9XHJcblxyXG4gIGdldFNoYWRvd1N0eWxlIChjb25maWdTdHlsZSkge1xyXG4gICAgY29uc3Qgc2hhZG93U3R5bGUgPSB7fVxyXG5cclxuICAgIHNoYWRvd1N0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xyXG4gICAgc2hhZG93U3R5bGUuaGVpZ2h0ID0gY29uZmlnU3R5bGUuaGVpZ2h0ICsgJ3B4J1xyXG4gICAgc2hhZG93U3R5bGUud2lkdGggPSBjb25maWdTdHlsZS53aWR0aCArICdweCdcclxuICAgIHNoYWRvd1N0eWxlLm1hcmdpbkxlZnQgPSBjb25maWdTdHlsZS5tYXJnaW5MZWZ0ICsgJ3B4J1xyXG5cclxuICAgIHJldHVybiBzaGFkb3dTdHlsZVxyXG4gIH1cclxuXHJcbiAgZ2V0QWZ0ZXJOb2RlIChkcm9wcGVkUmVjdCwgc2libGluZ3MpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJCYXNlQ29udGFpbmVyIiwiUm93Q29udGFpbmVyIiwiZ2V0Q29udGFpbmVyU3R5bGUiLCJwcm9wcyIsImNvbnRhaW5lclN0eWxlIiwid2lkdGgiLCJsaW5lSGVpZ2h0IiwiaGVpZ2h0IiwiT2JqZWN0IiwiYXNzaWduIiwicmVjdFN0eWxlIiwiZ2V0Q2hpbGRTdHlsZSIsIndyYXBwZXIiLCJnZXRTaGFkb3dTdHlsZSIsImNvbmZpZyIsInN0eWxlIiwiY29uZmlnU3R5bGUiLCJzaGFkb3dTdHlsZSIsImRpc3BsYXkiLCJtYXJnaW5MZWZ0IiwiZ2V0QWZ0ZXJOb2RlIiwiZHJvcHBlZFJlY3QiLCJzaWJsaW5ncyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/inline/InlineContainer.js\n");

/***/ }),

/***/ "./src/inline/index.d.js":
/*!*******************************!*\
  !*** ./src/inline/index.d.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _InlineContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InlineContainer */ \"./src/inline/InlineContainer.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'inline-container',\n  component: _InlineContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  label: '行内容器',\n  type: 'vanilla',\n  icon: 'bi bi-text-wrap',\n  order: 2,\n  props: [{\n    name: 'children',\n    hidden: true,\n    type: 'children'\n  }, {\n    label: '行高',\n    name: 'lineHeight',\n    type: 'number',\n    value: 24\n  }, {\n    name: 'rectStyle',\n    label: '块样式',\n    type: 'rect',\n    value: {}\n  }],\n  childStyle: [{\n    label: 'W',\n    width: '50%',\n    control: 'number',\n    field: 'style.width',\n    fieldEx: 'styleEx.width'\n  }, {\n    label: 'H',\n    width: '50%',\n    control: 'number',\n    field: 'style.height',\n    fieldEx: 'styleEx.height'\n  }, {\n    label: '左间距',\n    field: 'style.marginLeft',\n    type: 'number',\n    width: '50%',\n    value: 5\n  }],\n  width: 180,\n  height: 60\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5saW5lL2luZGV4LmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0M7QUFDL0MsaUVBQWU7RUFDYkMsSUFBSSxFQUFFLGtCQUFrQjtFQUN4QkMsU0FBUyxFQUFFRix3REFBZTtFQUMxQkcsS0FBSyxFQUFFLE1BQU07RUFDYkMsSUFBSSxFQUFFLFNBQVM7RUFDZkMsSUFBSSxFQUFFLGlCQUFpQjtFQUN2QkMsS0FBSyxFQUFFLENBQUM7RUFDUkMsS0FBSyxFQUFFLENBQUM7SUFDTk4sSUFBSSxFQUFFLFVBQVU7SUFDaEJPLE1BQU0sRUFBRSxJQUFJO0lBQ1pKLElBQUksRUFBRTtFQUNSLENBQUMsRUFBRTtJQUNERCxLQUFLLEVBQUUsSUFBSTtJQUNYRixJQUFJLEVBQUUsWUFBWTtJQUNsQkcsSUFBSSxFQUFFLFFBQVE7SUFDZEssS0FBSyxFQUFFO0VBQ1QsQ0FBQyxFQUFFO0lBQ0RSLElBQUksRUFBRSxXQUFXO0lBQ2pCRSxLQUFLLEVBQUUsS0FBSztJQUNaQyxJQUFJLEVBQUUsTUFBTTtJQUNaSyxLQUFLLEVBQUUsQ0FBQztFQUNWLENBQUMsQ0FBQztFQUNGQyxVQUFVLEVBQUUsQ0FBQztJQUNYUCxLQUFLLEVBQUUsR0FBRztJQUNWUSxLQUFLLEVBQUUsS0FBSztJQUNaQyxPQUFPLEVBQUUsUUFBUTtJQUNqQkMsS0FBSyxFQUFFLGFBQWE7SUFDcEJDLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtJQUNEWCxLQUFLLEVBQUUsR0FBRztJQUNWUSxLQUFLLEVBQUUsS0FBSztJQUNaQyxPQUFPLEVBQUUsUUFBUTtJQUNqQkMsS0FBSyxFQUFFLGNBQWM7SUFDckJDLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFBRTtJQUNEWCxLQUFLLEVBQUUsS0FBSztJQUNaVSxLQUFLLEVBQUUsa0JBQWtCO0lBQ3pCVCxJQUFJLEVBQUUsUUFBUTtJQUNkTyxLQUFLLEVBQUUsS0FBSztJQUNaRixLQUFLLEVBQUU7RUFDVCxDQUFDLENBQUM7RUFDRkUsS0FBSyxFQUFFLEdBQUc7RUFDVkksTUFBTSxFQUFFO0FBQ1YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JpZGdlLWNvbnRhaW5lci8vLi9zcmMvaW5saW5lL2luZGV4LmQuanM/MTJkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5saW5lQ29udGFpbmVyIGZyb20gJy4vSW5saW5lQ29udGFpbmVyJ1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ2lubGluZS1jb250YWluZXInLFxyXG4gIGNvbXBvbmVudDogSW5saW5lQ29udGFpbmVyLFxyXG4gIGxhYmVsOiAn6KGM5YaF5a655ZmoJyxcclxuICB0eXBlOiAndmFuaWxsYScsXHJcbiAgaWNvbjogJ2JpIGJpLXRleHQtd3JhcCcsXHJcbiAgb3JkZXI6IDIsXHJcbiAgcHJvcHM6IFt7XHJcbiAgICBuYW1lOiAnY2hpbGRyZW4nLFxyXG4gICAgaGlkZGVuOiB0cnVlLFxyXG4gICAgdHlwZTogJ2NoaWxkcmVuJ1xyXG4gIH0sIHtcclxuICAgIGxhYmVsOiAn6KGM6auYJyxcclxuICAgIG5hbWU6ICdsaW5lSGVpZ2h0JyxcclxuICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgdmFsdWU6IDI0XHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ3JlY3RTdHlsZScsXHJcbiAgICBsYWJlbDogJ+Wdl+agt+W8jycsXHJcbiAgICB0eXBlOiAncmVjdCcsXHJcbiAgICB2YWx1ZToge31cclxuICB9XSxcclxuICBjaGlsZFN0eWxlOiBbe1xyXG4gICAgbGFiZWw6ICdXJyxcclxuICAgIHdpZHRoOiAnNTAlJyxcclxuICAgIGNvbnRyb2w6ICdudW1iZXInLFxyXG4gICAgZmllbGQ6ICdzdHlsZS53aWR0aCcsXHJcbiAgICBmaWVsZEV4OiAnc3R5bGVFeC53aWR0aCdcclxuICB9LCB7XHJcbiAgICBsYWJlbDogJ0gnLFxyXG4gICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgY29udHJvbDogJ251bWJlcicsXHJcbiAgICBmaWVsZDogJ3N0eWxlLmhlaWdodCcsXHJcbiAgICBmaWVsZEV4OiAnc3R5bGVFeC5oZWlnaHQnXHJcbiAgfSwge1xyXG4gICAgbGFiZWw6ICflt6bpl7Tot50nLFxyXG4gICAgZmllbGQ6ICdzdHlsZS5tYXJnaW5MZWZ0JyxcclxuICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgdmFsdWU6IDVcclxuICB9XSxcclxuICB3aWR0aDogMTgwLFxyXG4gIGhlaWdodDogNjBcclxufVxyXG4iXSwibmFtZXMiOlsiSW5saW5lQ29udGFpbmVyIiwibmFtZSIsImNvbXBvbmVudCIsImxhYmVsIiwidHlwZSIsImljb24iLCJvcmRlciIsInByb3BzIiwiaGlkZGVuIiwidmFsdWUiLCJjaGlsZFN0eWxlIiwid2lkdGgiLCJjb250cm9sIiwiZmllbGQiLCJmaWVsZEV4IiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/inline/index.d.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/inline/index.d.js");
/******/ 	this["ridge-container/inline"] = __webpack_exports__;
/******/ 	
/******/ })()
;