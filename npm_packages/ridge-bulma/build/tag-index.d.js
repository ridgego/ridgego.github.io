(()=>{"use strict";var e={d:(l,a)=>{for(var t in a)e.o(a,t)&&!e.o(l,t)&&Object.defineProperty(l,t,{enumerable:!0,get:a[t]})},o:(e,l)=>Object.prototype.hasOwnProperty.call(e,l),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},l={};e.r(l),e.d(l,{default:()=>n});const a={name:"color",label:"颜色",type:"array",control:"select",bindable:!1,value:"is-primary",width:"50%",optionList:[{label:"白色",value:"is-white"},{label:"暗色",value:"is-dark"},{label:"黑色",value:"is-black"},{label:"文本",value:"is-text"},{label:"主色",value:"is-primary"},{label:"链接色",value:"is-link"},{label:"信息色",value:"is-info"},{label:"成功色",value:"is-success"},{label:"警告色",value:"is-warning"},{label:"危险色",value:"is-danger"}]},t=JSON.parse(JSON.stringify(a));t.name="addonColor",t.hidden=e=>{let{props:l}=e;return!l.addon};const n={name:"tag",title:"标签",component:class extends class{constructor(e){this.props=e}isDroppable(){return!1}onDragOver(){}random(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;const l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let a="";for(let t=0;t<e;t++)a+=l.charAt(Math.floor(Math.random()*l.length));return a}async mount(e){this.el=e,this.el.innerHTML=this.innerHTML(this.props),this.mounted()}innerHTML(e){return React.createElement("div",null,"Should Extend innerHTML")}update(e){this.props=e,this.el.innerHTML=this.innerHTML(e),this.mounted()}mounted(){}}{innerHTML(e){return e.addon&&e.isDelete?`<div class="tags has-addons">\n        <span class="tag ${e.color} ${e.size} ${e.light?"is-light":""}">${e.text||"标签"}</span>\n        <a class="tag is-delete ${e.size}"></a>\n      </div>`:e.addon?`<div class="tags has-addons">\n        <span class="tag ${e.color} ${e.size} ${e.light?"is-light":""}">${e.text||"标签"}</span>\n        <span class="tag ${e.addonColor} ${e.size} ${e.addonLight?"is-light":""}">${e.addonText||"扩展"}</span>\n      </div>`:`<span class="tag ${e.color} ${e.size} ${e.light?"is-light":""}">\n          ${e.text}\n          ${e.isDelete?'<button class="delete '+e.size+'"></button>':""}\n      </span>`}},icon:"IconPriceTag",type:"vanilla",adjustSize:"all",resizable:!1,props:[{name:"text",label:"文本",type:"string",value:"标签"},a,{name:"size",label:"大小",type:"string",control:"select",bindable:!1,value:"is-normal",width:"50%",optionList:[{label:"小号",value:"is-small"},{label:"普通",value:"is-normal"},{label:"中号",value:"is-medium"},{label:"大号",value:"is-large"}]},{name:"light",label:"浅色",width:"50%",type:"boolean"},{name:"isDelete",label:"删除",width:"50%",type:"boolean"},{name:"addon",label:"扩展",type:"boolean"},{name:"addonText",label:"扩展文本",hidden:e=>{let{props:l}=e;return!l.addon},type:"string",value:"扩展"},t],events:[{label:"点击事件",name:"onClick"}],width:80,height:40};this["ridge-bulma/tag-index.d"]=l})();