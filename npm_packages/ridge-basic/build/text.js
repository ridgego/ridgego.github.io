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

/***/ "./src/text/Text.js":
/*!**************************!*\
  !*** ./src/text/Text.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Text)\n/* harmony export */ });\nclass Text {\n  constructor(props) {\n    this.props = props;\n  }\n  async mount(el) {\n    this.el = el;\n    this.textDiv = document.createElement('div');\n    this.textDiv.style.width = '100%';\n    this.textDiv.style.height = '100%';\n    this.el.append(this.textDiv);\n    this.render();\n  }\n  render() {\n    const {\n      text,\n      textAlign,\n      fontFamily,\n      fontSize,\n      color,\n      fontWeight,\n      fontItalic,\n      borderWidth,\n      borderStyle,\n      borderColor,\n      padding,\n      borderRadius,\n      verticalAlign,\n      backgroundColor,\n      backgroundImage\n    } = this.props;\n    this.textDiv.innerHTML = text || '';\n    this.textDiv.style.fontFamily = fontFamily;\n    if (fontWeight) {\n      this.textDiv.style.fontWeight = 'bold';\n    } else {\n      this.textDiv.style.fontWeight = 'normal';\n    }\n    if (fontItalic) {\n      this.textDiv.style.fontStyle = 'italic';\n    } else {\n      this.textDiv.style.fontStyle = 'normal';\n    }\n    this.textDiv.style.display = 'flex';\n    this.textDiv.style.alignItems = verticalAlign;\n    this.textDiv.style.justifyContent = textAlign;\n    this.textDiv.style.fontSize = fontSize + 'px';\n    this.textDiv.style.color = color;\n    this.textDiv.style.border = `${borderWidth}px ${borderStyle} ${borderColor}`;\n    this.textDiv.style.padding = padding;\n    this.textDiv.style.borderRadius = borderRadius || 0;\n    this.textDiv.style.backgroundColor = backgroundColor;\n    this.textDiv.style.backgroundSize = '100%';\n    this.textDiv.style.backgroundRepeat = 'no-repeat';\n    this.textDiv.style.backgroundImage = `url(${backgroundImage})`;\n  }\n  update(props) {\n    this.props = props;\n    this.render();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxDQUFDRyxLQUFLLENBQUNtQixlQUFlLEdBQUksT0FBTUEsZUFBZ0IsR0FBRTtFQUNoRTtFQUVBUyxNQUFNQSxDQUFFbEMsS0FBSyxFQUFFO0lBQ2IsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDVSxNQUFNLENBQUMsQ0FBQztFQUNmO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaWRnZS1iYXNpYy8vLi9zcmMvdGV4dC9UZXh0LmpzPzJhMGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCB7XHJcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICB0aGlzLnByb3BzID0gcHJvcHNcclxuICB9XHJcblxyXG4gIGFzeW5jIG1vdW50IChlbCkge1xyXG4gICAgdGhpcy5lbCA9IGVsXHJcbiAgICB0aGlzLnRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdGhpcy50ZXh0RGl2LnN0eWxlLndpZHRoID0gJzEwMCUnXHJcbiAgICB0aGlzLnRleHREaXYuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnXHJcbiAgICB0aGlzLmVsLmFwcGVuZCh0aGlzLnRleHREaXYpXHJcblxyXG4gICAgdGhpcy5yZW5kZXIoKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdGV4dCwgdGV4dEFsaWduLFxyXG4gICAgICBmb250RmFtaWx5LCBmb250U2l6ZSwgY29sb3IsIGZvbnRXZWlnaHQsIGZvbnRJdGFsaWMsIGJvcmRlcldpZHRoLFxyXG4gICAgICBib3JkZXJTdHlsZSwgYm9yZGVyQ29sb3IsIHBhZGRpbmcsIGJvcmRlclJhZGl1cywgdmVydGljYWxBbGlnbiwgYmFja2dyb3VuZENvbG9yLCBiYWNrZ3JvdW5kSW1hZ2VcclxuICAgIH0gPSB0aGlzLnByb3BzXHJcbiAgICB0aGlzLnRleHREaXYuaW5uZXJIVE1MID0gdGV4dCB8fCAnJ1xyXG4gICAgdGhpcy50ZXh0RGl2LnN0eWxlLmZvbnRGYW1pbHkgPSBmb250RmFtaWx5XHJcbiAgICBpZiAoZm9udFdlaWdodCkge1xyXG4gICAgICB0aGlzLnRleHREaXYuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50ZXh0RGl2LnN0eWxlLmZvbnRXZWlnaHQgPSAnbm9ybWFsJ1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmb250SXRhbGljKSB7XHJcbiAgICAgIHRoaXMudGV4dERpdi5zdHlsZS5mb250U3R5bGUgPSAnaXRhbGljJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50ZXh0RGl2LnN0eWxlLmZvbnRTdHlsZSA9ICdub3JtYWwnXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50ZXh0RGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIHRoaXMudGV4dERpdi5zdHlsZS5hbGlnbkl0ZW1zID0gdmVydGljYWxBbGlnblxyXG4gICAgdGhpcy50ZXh0RGl2LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gdGV4dEFsaWduXHJcblxyXG4gICAgdGhpcy50ZXh0RGl2LnN0eWxlLmZvbnRTaXplID0gZm9udFNpemUgKyAncHgnXHJcbiAgICB0aGlzLnRleHREaXYuc3R5bGUuY29sb3IgPSBjb2xvclxyXG4gICAgdGhpcy50ZXh0RGl2LnN0eWxlLmJvcmRlciA9IGAke2JvcmRlcldpZHRofXB4ICR7Ym9yZGVyU3R5bGV9ICR7Ym9yZGVyQ29sb3J9YFxyXG4gICAgdGhpcy50ZXh0RGl2LnN0eWxlLnBhZGRpbmcgPSBwYWRkaW5nXHJcbiAgICB0aGlzLnRleHREaXYuc3R5bGUuYm9yZGVyUmFkaXVzID0gYm9yZGVyUmFkaXVzIHx8IDBcclxuICAgIHRoaXMudGV4dERpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3JcclxuICAgIHRoaXMudGV4dERpdi5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICcxMDAlJ1xyXG4gICAgdGhpcy50ZXh0RGl2LnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0J1xyXG4gICAgdGhpcy50ZXh0RGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2V9KWBcclxuICB9XHJcblxyXG4gIHVwZGF0ZSAocHJvcHMpIHtcclxuICAgIHRoaXMucHJvcHMgPSBwcm9wc1xyXG4gICAgdGhpcy5yZW5kZXIoKVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiVGV4dCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJtb3VudCIsImVsIiwidGV4dERpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJhcHBlbmQiLCJyZW5kZXIiLCJ0ZXh0IiwidGV4dEFsaWduIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZm9udEl0YWxpYyIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJDb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJ2ZXJ0aWNhbEFsaWduIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZEltYWdlIiwiaW5uZXJIVE1MIiwiZm9udFN0eWxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJvcmRlciIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCIsInVwZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/text/Text.js\n");

/***/ }),

/***/ "./src/text/text.d.js":
/*!****************************!*\
  !*** ./src/text/text.d.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Text_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text.js */ \"./src/text/Text.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'text',\n  title: '文本',\n  type: 'vanilla',\n  icon: 'bi bi-fonts',\n  order: 2,\n  width: 100,\n  height: 32,\n  component: _Text_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  props: [{\n    label: '内容',\n    connect: true,\n    name: 'text',\n    type: 'string',\n    value: '文本'\n  }, {\n    name: 'fontFamily',\n    label: '字体',\n    type: 'fontFamily',\n    width: '50%',\n    value: 'default'\n  }, {\n    name: 'fontSize',\n    label: '字号',\n    type: 'number',\n    width: '50%',\n    value: 16\n  }, {\n    name: 'color',\n    label: '颜色',\n    width: '50%',\n    type: 'color',\n    value: '#333'\n  }, {\n    name: 'fontWeight',\n    label: '样式',\n    width: 80,\n    type: 'boolean',\n    icon: 'bi bi-type-bold'\n  }, {\n    name: 'fontItalic',\n    width: 28,\n    type: 'boolean',\n    icon: 'bi bi-type-italic'\n  }, {\n    name: 'textAlign',\n    label: '对齐',\n    width: '50%',\n    type: 'string',\n    value: 'left',\n    control: 'radiogroup',\n    optionList: [{\n      label: '靠左',\n      icon: 'bi bi-text-left',\n      value: 'start'\n    }, {\n      label: '居中',\n      icon: 'bi bi-text-center',\n      value: 'center'\n    }, {\n      label: '靠右',\n      icon: 'bi bi-text-right',\n      value: 'end'\n    }]\n  }, {\n    name: 'verticalAlign',\n    label: '垂直',\n    width: '50%',\n    type: 'string',\n    value: 'top',\n    control: 'radiogroup',\n    optionList: [{\n      label: '顶端',\n      icon: 'bi bi-align-top',\n      value: 'start'\n    }, {\n      label: '居中',\n      icon: 'bi bi-align-middle',\n      value: 'center'\n    }, {\n      label: '底端',\n      icon: 'bi bi-align-bottom',\n      value: 'end'\n    }]\n  }, {\n    name: 'borderWidth',\n    label: '边框',\n    type: 'number',\n    width: 96,\n    value: 0\n  }, {\n    name: 'borderStyle',\n    type: 'select',\n    value: 'solid',\n    width: 72,\n    options: [{\n      label: '实线',\n      value: 'solid'\n    }, {\n      label: '虚线',\n      value: 'dashed'\n    }, {\n      label: '点线',\n      value: 'dotted'\n    }, {\n      label: '双实线',\n      value: 'double'\n    }]\n  }, {\n    name: 'borderColor',\n    width: 28,\n    type: 'color',\n    value: '#AAA'\n  }, {\n    name: 'padding',\n    label: '内边',\n    width: '50%',\n    type: 'string',\n    value: '0 0 0 0'\n  }, {\n    name: 'borderRadius',\n    label: '圆角',\n    width: '50%',\n    type: 'string',\n    value: '0px'\n  }, {\n    name: 'backgroundColor',\n    label: '背景色',\n    width: '40%',\n    type: 'color'\n  }, {\n    name: 'backgroundImage',\n    label: '图片',\n    width: '60%',\n    type: 'image'\n  }]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vcmlkZ2UtYmFzaWMvLy4vc3JjL3RleHQvdGV4dC5kLmpzP2M4ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJ1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ3RleHQnLFxyXG4gIHRpdGxlOiAn5paH5pysJyxcclxuICB0eXBlOiAndmFuaWxsYScsXHJcbiAgaWNvbjogJ2JpIGJpLWZvbnRzJyxcclxuICBvcmRlcjogMixcclxuICB3aWR0aDogMTAwLFxyXG4gIGhlaWdodDogMzIsXHJcbiAgY29tcG9uZW50OiBUZXh0LFxyXG4gIHByb3BzOiBbe1xyXG4gICAgbGFiZWw6ICflhoXlrrknLFxyXG4gICAgY29ubmVjdDogdHJ1ZSxcclxuICAgIG5hbWU6ICd0ZXh0JyxcclxuICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgdmFsdWU6ICfmlofmnKwnXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ2ZvbnRGYW1pbHknLFxyXG4gICAgbGFiZWw6ICflrZfkvZMnLFxyXG4gICAgdHlwZTogJ2ZvbnRGYW1pbHknLFxyXG4gICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgdmFsdWU6ICdkZWZhdWx0J1xyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdmb250U2l6ZScsXHJcbiAgICBsYWJlbDogJ+Wtl+WPtycsXHJcbiAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgIHdpZHRoOiAnNTAlJyxcclxuICAgIHZhbHVlOiAxNlxyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdjb2xvcicsXHJcbiAgICBsYWJlbDogJ+minOiJsicsXHJcbiAgICB3aWR0aDogJzUwJScsXHJcbiAgICB0eXBlOiAnY29sb3InLFxyXG4gICAgdmFsdWU6ICcjMzMzJ1xyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdmb250V2VpZ2h0JyxcclxuICAgIGxhYmVsOiAn5qC35byPJyxcclxuICAgIHdpZHRoOiA4MCxcclxuICAgIHR5cGU6ICdib29sZWFuJyxcclxuICAgIGljb246ICdiaSBiaS10eXBlLWJvbGQnXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnZm9udEl0YWxpYycsXHJcbiAgICB3aWR0aDogMjgsXHJcbiAgICB0eXBlOiAnYm9vbGVhbicsXHJcbiAgICBpY29uOiAnYmkgYmktdHlwZS1pdGFsaWMnXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAndGV4dEFsaWduJyxcclxuICAgIGxhYmVsOiAn5a+56b2QJyxcclxuICAgIHdpZHRoOiAnNTAlJyxcclxuICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgdmFsdWU6ICdsZWZ0JyxcclxuICAgIGNvbnRyb2w6ICdyYWRpb2dyb3VwJyxcclxuICAgIG9wdGlvbkxpc3Q6IFt7XHJcbiAgICAgIGxhYmVsOiAn6Z2g5bemJyxcclxuICAgICAgaWNvbjogJ2JpIGJpLXRleHQtbGVmdCcsXHJcbiAgICAgIHZhbHVlOiAnc3RhcnQnXHJcbiAgICB9LCB7XHJcbiAgICAgIGxhYmVsOiAn5bGF5LitJyxcclxuICAgICAgaWNvbjogJ2JpIGJpLXRleHQtY2VudGVyJyxcclxuICAgICAgdmFsdWU6ICdjZW50ZXInXHJcbiAgICB9LCB7XHJcbiAgICAgIGxhYmVsOiAn6Z2g5Y+zJyxcclxuICAgICAgaWNvbjogJ2JpIGJpLXRleHQtcmlnaHQnLFxyXG4gICAgICB2YWx1ZTogJ2VuZCdcclxuICAgIH1dXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ3ZlcnRpY2FsQWxpZ24nLFxyXG4gICAgbGFiZWw6ICflnoLnm7QnLFxyXG4gICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICB2YWx1ZTogJ3RvcCcsXHJcbiAgICBjb250cm9sOiAncmFkaW9ncm91cCcsXHJcbiAgICBvcHRpb25MaXN0OiBbe1xyXG4gICAgICBsYWJlbDogJ+mhtuerrycsXHJcbiAgICAgIGljb246ICdiaSBiaS1hbGlnbi10b3AnLFxyXG4gICAgICB2YWx1ZTogJ3N0YXJ0J1xyXG4gICAgfSwge1xyXG4gICAgICBsYWJlbDogJ+WxheS4rScsXHJcbiAgICAgIGljb246ICdiaSBiaS1hbGlnbi1taWRkbGUnLFxyXG4gICAgICB2YWx1ZTogJ2NlbnRlcidcclxuICAgIH0sIHtcclxuICAgICAgbGFiZWw6ICflupXnq68nLFxyXG4gICAgICBpY29uOiAnYmkgYmktYWxpZ24tYm90dG9tJyxcclxuICAgICAgdmFsdWU6ICdlbmQnXHJcbiAgICB9XVxyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdib3JkZXJXaWR0aCcsXHJcbiAgICBsYWJlbDogJ+i+ueahhicsXHJcbiAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgIHdpZHRoOiA5NixcclxuICAgIHZhbHVlOiAwXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ2JvcmRlclN0eWxlJyxcclxuICAgIHR5cGU6ICdzZWxlY3QnLFxyXG4gICAgdmFsdWU6ICdzb2xpZCcsXHJcbiAgICB3aWR0aDogNzIsXHJcbiAgICBvcHRpb25zOiBbe1xyXG4gICAgICBsYWJlbDogJ+Wunue6vycsXHJcbiAgICAgIHZhbHVlOiAnc29saWQnXHJcbiAgICB9LCB7XHJcbiAgICAgIGxhYmVsOiAn6Jma57q/JyxcclxuICAgICAgdmFsdWU6ICdkYXNoZWQnXHJcbiAgICB9LCB7XHJcbiAgICAgIGxhYmVsOiAn54K557q/JyxcclxuICAgICAgdmFsdWU6ICdkb3R0ZWQnXHJcbiAgICB9LCB7XHJcbiAgICAgIGxhYmVsOiAn5Y+M5a6e57q/JyxcclxuICAgICAgdmFsdWU6ICdkb3VibGUnXHJcbiAgICB9XVxyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdib3JkZXJDb2xvcicsXHJcbiAgICB3aWR0aDogMjgsXHJcbiAgICB0eXBlOiAnY29sb3InLFxyXG4gICAgdmFsdWU6ICcjQUFBJ1xyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdwYWRkaW5nJyxcclxuICAgIGxhYmVsOiAn5YaF6L65JyxcclxuICAgIHdpZHRoOiAnNTAlJyxcclxuICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgdmFsdWU6ICcwIDAgMCAwJ1xyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdib3JkZXJSYWRpdXMnLFxyXG4gICAgbGFiZWw6ICflnIbop5InLFxyXG4gICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICB2YWx1ZTogJzBweCdcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnYmFja2dyb3VuZENvbG9yJyxcclxuICAgIGxhYmVsOiAn6IOM5pmv6ImyJyxcclxuICAgIHdpZHRoOiAnNDAlJyxcclxuICAgIHR5cGU6ICdjb2xvcidcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnYmFja2dyb3VuZEltYWdlJyxcclxuICAgIGxhYmVsOiAn5Zu+54mHJyxcclxuICAgIHdpZHRoOiAnNjAlJyxcclxuICAgIHR5cGU6ICdpbWFnZSdcclxuICB9XVxyXG59XHJcbiJdLCJuYW1lcyI6WyJUZXh0IiwibmFtZSIsInRpdGxlIiwidHlwZSIsImljb24iLCJvcmRlciIsIndpZHRoIiwiaGVpZ2h0IiwiY29tcG9uZW50IiwicHJvcHMiLCJsYWJlbCIsImNvbm5lY3QiLCJ2YWx1ZSIsImNvbnRyb2wiLCJvcHRpb25MaXN0Iiwib3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/text/text.d.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/text/text.d.js");
/******/ 	this["ridge-basic/text"] = __webpack_exports__;
/******/ 	
/******/ })()
;