(()=>{"use strict";var e={d:(l,a)=>{for(var t in a)e.o(a,t)&&!e.o(l,t)&&Object.defineProperty(l,t,{enumerable:!0,get:a[t]})},o:(e,l)=>Object.prototype.hasOwnProperty.call(e,l),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},l={};e.r(l),e.d(l,{default:()=>a});const a={name:"select",title:"下拉选项",component:class extends class{constructor(e){this.props=e}isDroppable(){return!1}onDragOver(){}random(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;const l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let a="";for(let t=0;t<e;t++)a+=l.charAt(Math.floor(Math.random()*l.length));return a}async mount(e){this.el=e,this.el.innerHTML=this.innerHTML(this.props),this.mounted()}innerHTML(e){return React.createElement("div",null,"Should Extend innerHTML")}update(e){this.props=e,this.el.innerHTML=this.innerHTML(e),this.mounted()}mounted(){}}{innerHTML(e){let{color:l,size:a,round:t,options:n,placeholder:i,disabled:r,readonly:o}=e;return`<div class="select ${l} ${a} ${t?"is-rounded":""}">\n      <select placeholder="${i}" ${r?"disabled":""}>\n        ${n.map((e=>`<option ${e.value}>${e.label}</option>`)).join("")}\n      </select>\n    </div>`}},icon:"IconServer",type:"vanilla",adjustSize:"all",resizable:!1,props:[{name:"value",label:"取值",type:"string",value:""},{name:"options",label:"选项",type:"array",value:[]},{name:"placeholder",label:"提示",type:"string",value:"请输入内容"},{name:"color",label:"颜色",type:"array",control:"select",bindable:!1,value:"is-primary",width:"50%",optionList:[{label:"白色",value:"is-white"},{label:"暗色",value:"is-dark"},{label:"黑色",value:"is-black"},{label:"文本",value:"is-text"},{label:"主色",value:"is-primary"},{label:"链接色",value:"is-link"},{label:"信息色",value:"is-info"},{label:"成功色",value:"is-success"},{label:"警告色",value:"is-warning"},{label:"危险色",value:"is-danger"}]},{name:"size",label:"大小",type:"string",control:"select",bindable:!1,value:"is-normal",width:"50%",optionList:[{label:"小号",value:"is-small"},{label:"普通",value:"is-normal"},{label:"中号",value:"is-medium"},{label:"大号",value:"is-large"}]},{name:"round",label:"圆角",width:"50%",type:"boolean",value:!1},{name:"disabled",label:"禁用",type:"boolean",width:"50%",value:!1}],events:[{name:"onChange",label:"值改变"}],width:160,height:40};this["ridge-bulma/select-index.d"]=l})();