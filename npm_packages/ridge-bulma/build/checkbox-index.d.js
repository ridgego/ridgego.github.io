(()=>{"use strict";var e={d:(t,n)=>{for(var l in n)e.o(n,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:n[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>n});const n={name:"checkbox",title:"切换选框",component:class extends class{constructor(e){this.props=e}isDroppable(){return!1}onDragOver(){}random(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let n="";for(let l=0;l<e;l++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}async mount(e){this.el=e,this.el.innerHTML=this.innerHTML(this.props),this.mounted()}innerHTML(e){return React.createElement("div",null,"Should Extend innerHTML")}update(e){this.props=e,this.el.innerHTML=this.innerHTML(e),this.mounted()}mounted(){}}{innerHTML(e){let{label:t,value:n}=e;return`<label class="checkbox">\n      <input type="checkbox" ${n?"checked":""}>\n      ${t}\n    </label>`}},icon:"IconCheckboxTick",type:"vanilla",adjustSize:"all",resizable:!1,props:[{name:"value",label:"是否选中",type:"boolean",value:!1},{name:"label",label:"内容",type:"string",value:""}],events:[{name:"onChange",label:"值改变"}],width:160,height:40};this["ridge-bulma/checkbox-index.d"]=t})();