(()=>{"use strict";var e={d:(l,a)=>{for(var n in a)e.o(a,n)&&!e.o(l,n)&&Object.defineProperty(l,n,{enumerable:!0,get:a[n]})},o:(e,l)=>Object.prototype.hasOwnProperty.call(e,l),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},l={};e.r(l),e.d(l,{default:()=>a});const a={name:"input",title:"输入框",component:class extends class{constructor(e){this.props=e}isDroppable(){return!1}onDragOver(){}random(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;const l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let a="";for(let n=0;n<e;n++)a+=l.charAt(Math.floor(Math.random()*l.length));return a}async mount(e){this.el=e,this.el.innerHTML=this.innerHTML(this.props),this.mounted()}innerHTML(e){return React.createElement("div",null,"Should Extend innerHTML")}update(e){this.props=e,this.el.innerHTML=this.innerHTML(e),this.mounted()}mounted(){}}{innerHTML(e){let{color:l,size:a,round:n,disabled:t,value:i,placeholder:o,iconLeft:r,loading:s}=e;return`<div class="control ${a} ${s?"is-loading":""} ${r?"has-icons-left":""}">\n      <input class="input ${l} ${a} ${n?"is-rounded":""}" ${t?"disabled":""} type="text" value="${i}" placeholder="${o}">\n      ${r?`<span class="icon ${a} is-left">\n                  ${r}\n              </span>`:""}\n    </div>`}},icon:"IconComponentStroked",type:"vanilla",adjustSize:"all",resizable:!1,props:[{name:"value",label:"内容",type:"string",value:""},{name:"placeholder",label:"提示",type:"string",value:"请输入内容"},{name:"color",label:"颜色",type:"array",control:"select",bindable:!1,value:"is-primary",width:"50%",optionList:[{label:"白色",value:"is-white"},{label:"暗色",value:"is-dark"},{label:"黑色",value:"is-black"},{label:"文本",value:"is-text"},{label:"主色",value:"is-primary"},{label:"链接色",value:"is-link"},{label:"信息色",value:"is-info"},{label:"成功色",value:"is-success"},{label:"警告色",value:"is-warning"},{label:"危险色",value:"is-danger"}]},{name:"size",label:"大小",type:"string",control:"select",bindable:!1,value:"is-normal",width:"50%",optionList:[{label:"小号",value:"is-small"},{label:"普通",value:"is-normal"},{label:"中号",value:"is-medium"},{label:"大号",value:"is-large"}]},{name:"round",label:"圆角",width:"50%",type:"boolean",value:!1},{name:"loading",label:"加载中",type:"boolean",width:"50%",value:!1},{name:"disabled",label:"禁用",type:"boolean",width:"50%",value:!1},{name:"readonly",label:"只读",type:"boolean",width:"50%",value:!1},{name:"iconLeft",label:"图标前",type:"icon"}],events:[{name:"onChange",label:"值改变"}],width:160,height:40};this["ridge-bulma/input-index.d"]=l})();