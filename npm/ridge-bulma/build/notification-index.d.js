(()=>{"use strict";var e={d:(l,t)=>{for(var a in t)e.o(t,a)&&!e.o(l,a)&&Object.defineProperty(l,a,{enumerable:!0,get:t[a]})},o:(e,l)=>Object.prototype.hasOwnProperty.call(e,l),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},l={};e.r(l),e.d(l,{default:()=>t});const t={name:"notification",title:"通知栏",component:class extends class{constructor(e){this.props=e}isDroppable(){return!1}onDragOver(){}random(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;const l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let a=0;a<e;a++)t+=l.charAt(Math.floor(Math.random()*l.length));return t}async mount(e){this.el=e,this.el.innerHTML=this.innerHTML(this.props),this.mounted()}innerHTML(e){return React.createElement("div",null,"Should Extend innerHTML")}update(e){this.props=e,this.el.innerHTML=this.innerHTML(e),this.mounted()}mounted(){}}{innerHTML(e){let{color:l,size:t,light:a,hasDelete:i,text:n}=e;return`<div class="notification ${l} ${a?"is-light":""}">\n      ${i?'<button class="delete"></button>':""}\n      ${n}\n  </div>`}},icon:"IconBellStroked",type:"vanilla",adjustSize:"all",resizable:!1,props:[{name:"text",label:"内容",type:"string",value:"通知正文"},{name:"color",label:"颜色",type:"array",control:"select",bindable:!1,value:"is-primary",width:"50%",optionList:[{label:"白色",value:"is-white"},{label:"暗色",value:"is-dark"},{label:"黑色",value:"is-black"},{label:"文本",value:"is-text"},{label:"主色",value:"is-primary"},{label:"链接色",value:"is-link"},{label:"信息色",value:"is-info"},{label:"成功色",value:"is-success"},{label:"警告色",value:"is-warning"},{label:"危险色",value:"is-danger"}]},{name:"size",label:"大小",type:"string",control:"select",bindable:!1,value:"is-normal",width:"50%",optionList:[{label:"小号",value:"is-small"},{label:"普通",value:"is-normal"},{label:"中号",value:"is-medium"},{label:"大号",value:"is-large"}]},{name:"light",label:"浅色",width:"50%",type:"boolean"},{name:"hasDelete",label:"可关闭",type:"boolean",width:"50%",value:!1}],events:[{name:"onClose",label:"关闭"}],width:160,height:80};this["ridge-bulma/notification-index.d"]=l})();