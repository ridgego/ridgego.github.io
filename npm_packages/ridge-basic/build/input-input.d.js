(()=>{"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>o});const r={style:e=>{const t={background:e.background,padding:e.padding,borderRadius:e.radius,boxShadow:e.shadow};return"object"==typeof e.border?(t.borderTop=e.border[0],t.borderRight=e.border[1],t.borderBottom=e.border[2],t.borderLeft=e.border[3]):"string"==typeof e.border&&(t.border=e.border),t},props:[{name:"border",label:"边框",type:"object",control:"border",value:"1px solid #ccc"},{name:"radius",label:"圆角",type:"string",control:"px4",value:"3px"},{name:"padding",label:"内边",type:"string",control:"px4",value:"2px"},{name:"background",label:"背景",type:"string",control:"background"},{name:"shadow",label:"阴影",type:"string",control:"boxshadow",value:""}]},o={name:"input",component:class{constructor(e){this.props=e}async mount(e){this.el=e,this.input=document.createElement("input"),this.el.append(this.input),this.input.oninput=e=>{this.props.input&&this.props.input(e.currentTarget.value)},this.input.onkeydown=e=>{"Enter"===e.code&&this.props.onPressEnter&&this.props.onPressEnter(e.currentTarget.value)},this.render()}update(e){Object.assign(this.props,e),this.render()}render(){this.props.placeholder&&(this.input.placeholder=this.props.placeholder),null!=this.props.value?this.input.value=this.props.value:this.input.value="",Object.assign(this.input.style,this.getStyle())}getStyle(){const e={width:"100%",height:"100%",boxSizing:"border-box"};return this.props.color&&(e.color=this.props.color),this.props.fontSize&&(e.fontSize=this.props.fontSize+"px"),Object.assign(e,r.style(this.props)),e}},icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNiA5SDRhMiAyIDAgMDAtMiAydjhhMiAyIDAgMDAyIDJoMjJhMiAyIDAgMDAyLTJ2LThhMiAyIDAgMDAtMi0yek00IDdhNCA0IDAgMDAtNCA0djhhNCA0IDAgMDA0IDRoMjJhNCA0IDAgMDA0LTR2LThhNCA0IDAgMDAtNC00SDR6IiBmaWxsPSIjNjY2Ij48L3BhdGg+PHBhdGggZD0iTTUgMTJhMSAxIDAgMTEyIDB2NmExIDEgMCAxMS0yIDB2LTZ6IiBmaWxsPSIjNjY2Ij48L3BhdGg+PC9zdmc+",type:"vanilla",title:"输入框",width:160,height:28,props:[{label:"内容",name:"value",type:"string",value:""},{label:"占位提示",name:"placeholder",type:"string",value:"请输入文本"},{label:"字号",name:"fontSize",type:"number",value:""},{name:"color",label:"颜色",type:"string",control:"colorpicker",value:""},...r.props],events:[{label:"输入值变化",name:"onChange"},{label:"按下回车键",name:"onPressEnter"}]};this["ridge-basic/input-input.d"]=t})();