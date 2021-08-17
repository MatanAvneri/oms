var e=Object.defineProperty,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(t,l,r)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[l]=r,o=(e,o)=>{for(var a in o||(o={}))l.call(o,a)&&n(e,a,o[a]);if(t)for(var a of t(o))r.call(o,a)&&n(e,a,o[a]);return e};import{c as a,p as i,s,C as m,r as c,T as d,B as p,R as u,F as g,a as x,b as f,S as E,d as y,e as h,f as v}from"./vendor.ee455c2d.js";const S=a((b=e=>({name:"Robert L. Sarvis",role:"Software Engineer",phone:"702-216-9084",website:"belekgrup.com",setData:t=>e((e=>{e.name=t.name,e.role=t.role,e.phone=t.phone,e.website=t.website})),setValue:(t,l)=>e((e=>{e[t]=l})),styles:{fontSize:13,imageSize:100,fontColor:"#000",isBorder:!0},setStyle:t=>e((e=>{e.styles=o(o({},e.styles),t)}))}),(e,t,l)=>b(((t,l)=>{const r="function"==typeof t?i(t):t;return e(r,l)}),t,l)));var b;const w=s(m)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: auto;
`,C=()=>{const{name:e,phone:t,role:l,website:r,setValue:n}=S();return c.exports.createElement(w,null,c.exports.createElement("form",null,c.exports.createElement(d,{fullWidth:!0,label:"name",name:"name",onChange:e=>n("name",e.target.value),value:e}),c.exports.createElement(d,{fullWidth:!0,label:"phone",name:"phone",onChange:e=>n("phone",e.target.value),value:t}),c.exports.createElement(d,{fullWidth:!0,label:"role",name:"role",onChange:e=>n("role",e.target.value),value:l}),c.exports.createElement(d,{fullWidth:!0,label:"website",name:"website",onChange:e=>n("website",e.target.value),value:r}),c.exports.createElement(p,{variant:"contained",component:"label"},"Upload Logo",c.exports.createElement("input",{onChange:async e=>{var t;const l=(null==(t=e.target.files)?void 0:t.length)?e.target.files[0]:void 0;l&&n("logo",await(async e=>new Promise(((t,l)=>{const r=new FileReader;r.readAsDataURL(e),r.onload=()=>t(r.result),r.onerror=e=>l(e)})))(l))},type:"file",hidden:!0}))))};const z=s.table`
  margin: 0px;
  padding: 10px;
  border: ${e=>e.emailStyles.fontColor} ${e=>e.emailStyles.isBorder?"1px":0} solid;
  word-break: break-all;
`,B=s.img`
  width: ${e=>e.emailStyles.imageSize}px;;
  height: ${e=>e.emailStyles.imageSize}px;;
  align-self: center;
  margin-right: 20px;
`,j=s.div`
  border-left: ${e=>e.emailStyles.fontColor} solid 1px;
  color: ${e=>e.emailStyles.fontColor};
  padding-left: 20px;
  font-size: ${e=>e.emailStyles.fontSize}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,k=s(m)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  overflow: auto;
`,$=s(p)`
  margin-top: 10px;
`,O=c.exports.forwardRef(((e,t)=>{const{name:l,phone:r,role:n,website:o,logo:a,styles:i}=S(),s={fontSize:i.fontSize,imageSize:i.imageSize,fontColor:i.fontColor,isBorder:i.isBorder};return c.exports.createElement(z,{emailStyles:s,ref:t},c.exports.createElement("tbody",null,c.exports.createElement("tr",null,c.exports.createElement("td",null,c.exports.createElement(B,{src:a||"/oms/assets/defaultBg.122dac80.jpeg",emailStyles:s})),c.exports.createElement("td",null,c.exports.createElement(j,{emailStyles:s},c.exports.createElement("div",null,l),c.exports.createElement("div",null,r),c.exports.createElement("div",null,n),c.exports.createElement("div",null,o))))))})),P=s.div`
  position: fixed;
  z-index: 1000;
  top: -100vh;
  bottom: -100vh;
  width: 200vw;
  height: 200vh;
`,R=({onCopyDone:e})=>{const t=c.exports.useRef(null);return c.exports.useEffect((()=>{const l=t.current;l&&(document.getElementById("root").style.userSelect="none",l.contentEditable="true",l.click(),l.focus(),document.execCommand("selectAll"),document.execCommand("copy"),l.contentEditable="false",getSelection().empty(),document.getElementById("root").style.userSelect="all",e())}),[]),u.createPortal(c.exports.createElement(P,null,c.exports.createElement("div",null,c.exports.createElement(O,{ref:t}))),document.querySelector("body"))},F=()=>{const[e,t]=c.exports.useState(!1);return c.exports.createElement(k,null,e&&c.exports.createElement(R,{onCopyDone:()=>t(!1)}),c.exports.createElement(O,null),c.exports.createElement($,{onClick:()=>{t(!0)},color:"primary",variant:"contained",fullWidth:!0},"Get Signature"))},I=s(m)`
  grid-column: 1 / 3;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));;
  grid-gap: 4rem;
  padding: 2rem;
`,W=()=>{const{styles:e,setStyle:t}=S();return c.exports.createElement(I,null,c.exports.createElement("div",null,c.exports.createElement(g,{control:c.exports.createElement(x,{checked:e.isBorder,onChange:e=>t({isBorder:e.target.checked}),name:"Border",color:"primary"}),label:"Border"})),c.exports.createElement("div",null,c.exports.createElement(f,{id:"fontSize-slider",gutterBottom:!0},"Font Size"),c.exports.createElement(E,{min:1,max:100,value:e.fontSize,onChange:(e,l)=>t({fontSize:l}),"aria-labelledby":"fontSize-slider"})),c.exports.createElement("div",null,c.exports.createElement(f,{id:"imgSize-slider",gutterBottom:!0},"Image Size"),c.exports.createElement(E,{min:1,max:1e3,value:e.imageSize,onChange:(e,l)=>t({imageSize:l}),"aria-labelledby":"imgSize-slider"})),c.exports.createElement("div",null,c.exports.createElement(f,{id:"colorPicker",gutterBottom:!0},"Font Color"),c.exports.createElement(y,{color:e.fontColor,onChange:e=>t({fontColor:e.hex})})))},D=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 100vh;
  padding: 5rem;
  grid-gap: 5rem;
`,L=()=>h.createElement(v,{injectFirst:!0},h.createElement(D,null,h.createElement(F,null),h.createElement(C,null),h.createElement(W,null)));u.render(h.createElement(h.StrictMode,null,h.createElement(L,null)),document.getElementById("root"));
