(()=>{"use strict";var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>n});const n={name:"dropdown",title:"下拉选项",component:class extends class{constructor(e){this.props=e}isDroppable(){return!1}onDragOver(){}random(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let n="";for(let i=0;i<e;i++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}async mount(e){this.el=e,this.el.innerHTML=this.innerHTML(this.props),this.mounted()}innerHTML(e){return React.createElement("div",null,"Should Extend innerHTML")}update(e){this.props=e,this.el.innerHTML=this.innerHTML(e),this.mounted()}mounted(){}}{innerHTML(e){return`<div class="dropdown ${e.isActive} ${e.hoverable?"is-hoverable":""}">\n    <div class="dropdown-trigger">\n      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">\n        <span>${e.text}</span>\n        <span class="icon is-small">\n          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" focusable="false" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.08045 7.59809C4.66624 7.01231 5.61599 7.01231 6.20177 7.59809L11.8586 13.2549L17.5155 7.59809C18.1013 7.01231 19.051 7.01231 19.6368 7.59809C20.2226 8.18388 20.2226 9.13363 19.6368 9.71941L12.9193 16.4369C12.3335 17.0227 11.3838 17.0227 10.798 16.4369L4.08045 9.71941C3.49467 9.13363 3.49467 8.18388 4.08045 7.59809Z" fill="currentColor"></path></svg>\n          <i class="fas fa-angle-down" aria-hidden="true"></i>\n        </span>\n      </button>\n    </div>\n    <div class="dropdown-menu" role="menu">\n      <div class="dropdown-content">\n        ${(e.menus||["选项1","选项2","-","C"]).map((t=>"-"===t?'<hr class="dropdown-divider">':`<a href="#" class="dropdown-item ${e.value===t?"is-active":""}">${t}</a>`)).join("")}\n      </div>\n    </div>\n  </div>`}mounted(){this.container=this.el.querySelector(".dropdown"),this.props.hoverable||(this.active=!1,this.container.onclick=()=>{this.active=!this.active,this.toggleActive()},document.body.addEventListener("click",(e=>{this.container.contains(e.target)||(this.active=!1,this.toggleActive())}))),this.container.querySelectorAll(".dropdown-item").forEach((e=>{e.onclick=()=>{this.props.onClick&&this.props.onClick(e.innerHTML),this.props.input&&this.props.input(e.innerHTML)}}))}toggleActive(){this.active?this.container.classList.add("is-active"):this.container.classList.remove("is-active")}},icon:"IconChevronDown",type:"vanilla",adjustSize:"all",resizable:!1,props:[{name:"text",label:"文本",type:"string",value:"按钮"},{name:"hoverable",label:"自动下拉",type:"boolean",value:!0},{name:"menus",label:"下拉列表",type:"array",value:[]},{name:"value",label:"活动项",type:"string",value:""}],events:[{label:"点击事件",name:"onClick"}],width:80,height:40};this["ridge-bulma/dropdown-index.d"]=t})();