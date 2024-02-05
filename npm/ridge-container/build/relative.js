(()=>{"use strict";var t={d:(e,i)=>{for(var n in i)t.o(i,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:i[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{default:()=>n});class i{constructor(t){this.props=t,this.isRuntime="edit"!==t.__mode}getContainerStyle(){}getChildStyle(t){}getShadowStyle(){}isSlot(t){return!1}getSlotProps(){return{}}getAfterNode(t,e){return null}mounted(){}async mount(t){this.el=t;const e=document.createElement("div");if(this.containerEl=e,this.containerEl.className=(this.props.classNames||[]).join(" "),t.appendChild(e),this.wrapper=this.props.__elementWrapper,this.mode=this.props.__mode,Object.assign(this.containerEl.style,{width:"100%",height:"100%"},this.getContainerStyle()),this.props.children)for(const t of this.props.children){const e=document.createElement("div");this.containerEl.appendChild(e),await t.loadAndMount(e),this.updateChildStyle(t)}await this.mounted()}updateChildStyle(t,e){const i=Object.assign({},t.getResetStyle(),this.getChildStyle(t,e));Object.assign(t.el.style,i)}appendChild(t,e,i){const n=t.el;let o=n.getBoundingClientRect();return null==n.parentElement&&(o={x:e-(t.config.style.width||100)/2,y:i-(t.config.style.height||100)/2,width:t.config.style.width||100,height:t.config.style.height||100}),n.parentElement!==this.containerEl&&(this.containerEl.querySelector(":scope > .drop-shadow")?(this.containerEl.insertBefore(n,this.containerEl.querySelector(":scope > .drop-shadow")),this.containerEl.removeChild(this.containerEl.querySelector(":scope > .drop-shadow"))):this.containerEl.appendChild(n),this.updateChildStyle(t,o)),{children:this.getChildren()}}removeChild(t,e){return t.el.parentElement===this.containerEl?(e||this.checkInsertDropShadowEl(t.el.getBoundingClientRect(),t.el,t.config.style),this.containerEl.removeChild(t.el)):console.warn("not children "),{children:this.getChildren()}}checkInsertDropShadowEl(t,e,i){const n=this.containerEl.querySelector(":scope > .drop-shadow");if(n&&n.nextElementSibling===e)return;n&&this.containerEl.removeChild(n);const o=document.createElement("div");o.classList.add("drop-shadow"),o.style.width=t.width+"px",o.style.height=t.height+"px",o.style.borderRadius="var(--semi-border-radius-small)",o.style.border="2px dashed var(--semi-color-primary)",o.style.backgroundColor="var(--semi-color-primary-light-default)",Object.assign(o.style,this.getShadowStyle(i)),null==e?this.containerEl.appendChild(o):this.containerEl.insertBefore(o,e)}onDragOver(t){if(t.el){const e=this.getAfterNode(t.el.getBoundingClientRect(),this.containerEl.childNodes);this.checkInsertDropShadowEl(t.getConfig().style,e,t.config.style)}else{const e=this.getAfterNode(t,this.containerEl.childNodes);this.checkInsertDropShadowEl(t,e,t)}}onDragOut(){this.containerEl.querySelector(":scope > .drop-shadow")&&this.containerEl.removeChild(this.containerEl.querySelector(":scope > .drop-shadow"))}updateChild(t){this.updateChildStyle(t)}getChildren(){return Array.from(this.containerEl.childNodes).filter((t=>t.classList.contains("ridge-element"))).map((t=>t.elementWrapper.id)).filter((t=>null!=t))}update(t){if(this.props=t,Object.assign(this.containerEl.style,this.getContainerStyle()),this.containerEl.className=(this.props.classNames||[]).join(" "),this.props.children)for(const t of this.props.children)t.forceUpdate()}}const n={name:"relative-container",component:class extends i{getContainerStyle(){return{width:"100%",height:"100%",boxSizing:"border-box",position:"relative"}}getChildStyle(t,e){if(e){const i=this.containerEl.getBoundingClientRect(),n=i.width/this.wrapper.config.style.width,o=window.getComputedStyle(this.containerEl),l=parseInt(o.borderTopWidth)||0,s=parseInt(o.borderLeftWidth)||0;return t.config.style.position="absolute",t.config.style.x=(e.x-i.x-l)/n,t.config.style.y=(e.y-i.y-s)/n,{position:"absolute",transform:`translate(${t.config.style.x}px, ${t.config.style.y}px)`}}if(this.isRuntime){const e=this.position(this.wrapper.config.style,t.config.style,this.containerEl.getBoundingClientRect(),t.config.style.relative||[]);return{position:"absolute",width:e.width+"px",height:e.height+"px",transform:`translate(${e.x}px, ${e.y}px)`}}return{position:"absolute",transform:`translate(${t.config.style.x}px, ${t.config.style.y}px)`,width:t.config.style.width+"px",height:t.config.style.height+"px"}}getShadowStyle(t){return{width:"100%",height:"100%"}}updateStyle(t){console.log("update style",t),this.sizeChanged()}mounted(){this.lastWidth=this.wrapper.config.style.width,this.lastHeight=this.wrapper.config.style.height}sizeChanged(){const t=this.wrapper.config.style.width,e=this.wrapper.config.style.height;Array.from(this.containerEl.childNodes).forEach((i=>{if(i.wrapper){const n=this.position({width:this.lastWidth,height:this.lastHeight},i.wrapper.config.style,{width:t,height:e},i.wrapper.config.style.relative);i.wrapper.setConfigStyle(n)}})),this.lastWidth=t,this.lastHeight=e}position(t,e,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=JSON.parse(JSON.stringify(n));const l={};if(o.indexOf("hcenter")>-1){o=o.filter((t=>"left"!==t||"right"!==t));const n=t.width/2-(e.width/2+e.x);l.x=i.width/2-e.width/2-n,l.width=e.width}if(o.indexOf("vcenter")>-1){o=o.filter((t=>"top"!==t||"bottom"!==t));const n=t.height/2-(e.height/2+e.y);l.y=i.height/2-e.height/2-n,l.height=e.height}return o.indexOf("left")>-1&&o.indexOf("right")>-1?(l.x=e.x,l.width=e.width+(i.width-t.width)):o.indexOf("left")>-1?(l.x=e.x,l.width=e.width):o.indexOf("right")>-1?(l.x=i.width-(t.width-e.x),l.width=e.width):(l.x||(l.x=e.x),l.width||(l.width=e.width)),o.indexOf("top")>-1&&o.indexOf("bottom")>-1?(l.y=e.y,l.height=e.height+(i.height-t.height)):o.indexOf("top")>-1?(l.y=e.y,l.height=e.height):o.indexOf("bottom")>-1?(l.y=i.height-t.height+e.y,l.height=e.height):(l.y||(l.y=e.y),l.height||(l.height=e.height)),l}positionChild(t,e){const i=t.config.style,n=this.containerEl.getBoundingClientRect(),o=t.config.style.relative||[],l=this.position(e,i,n,o);"edit"===this.mode?t.setConfigStyle(l):Object.assign(t.style,l)}updateChild(t,e){const i=e||t.el.getBoundingClientRect(),n=this.containerEl.getBoundingClientRect(),o=parseInt(window.getComputedStyle(this.containerEl).borderWidth)||0;t.setConfigStyle({position:"absolute",x:i.x-n.x-o,y:i.y-n.y-o})}},label:"绝对容器",type:"vanilla",order:4,icon:"bi bi-pip",props:[{name:"children",hidden:!0,type:"children"}],childStyle:[{label:"X",width:"50%",control:"number",field:"style.x",fieldEx:"styleEx.x"},{label:"Y",width:"50%",control:"number",field:"style.y",fieldEx:"styleEx.y"},{label:"W",width:"50%",control:"number",field:"style.width",fieldEx:"styleEx.width"},{label:"H",width:"50%",control:"number",field:"style.height",fieldEx:"styleEx.height"},{field:"style.relative",type:"array",label:"定位",control:"checkboxgroup",bindable:!1,optionList:[{label:"靠左固定",icon:"IconAlignHLeftStroked",value:"left"},{label:"靠上固定",icon:"IconAlignVTopStroked",value:"top"},{label:"靠下固定",icon:"IconAlignVBottomStroked",value:"bottom"},{label:"靠右固定",icon:"IconAlignHRightStroked",value:"right"},{label:"相对垂直中线固定",icon:"IconAlignHCenterStroked",value:"hcenter"},{label:"相对水平中线固定",icon:"IconAlignVCenterStroked",value:"vcenter"}]},{name:"classNames",label:"样式",type:"class",value:[]}],width:540,height:360};this["ridge-container/relative"]=e})();