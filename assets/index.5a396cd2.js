var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(t,r,l)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[r]=l,o=(e,o)=>{for(var a in o||(o={}))r.call(o,a)&&n(e,a,o[a]);if(t)for(var a of t(o))l.call(o,a)&&n(e,a,o[a]);return e};import{c as a,p as i,s,C as m,r as c,T as d,B as p,R as u,F as g,a as f,b as x,S as E,d as y,u as h,e as b,f as v,g as S,h as w}from"./vendor.a341caa7.js";const C=a((z=e=>({name:"Robert L. Sarvis",role:"Software Engineer",phone:"702-216-9084",website:"belekgrup.com",setData:t=>e((e=>{e.name=t.name,e.role=t.role,e.phone=t.phone,e.website=t.website})),setValue:(t,r)=>e((e=>{e[t]=r})),styles:{fontSize:13,imageSize:100,fontColor:"#000",isBorder:!0},setStyle:t=>e((e=>{e.styles=o(o({},e.styles),t)}))}),(e,t,r)=>z(((t,r)=>{const l="function"==typeof t?i(t):t;return e(l,r)}),t,r)));var z;const B=s(m)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: auto;
`,k=()=>{const{name:e,phone:t,role:r,website:l,setValue:n}=C();return c.exports.createElement(B,null,c.exports.createElement("form",null,c.exports.createElement(d,{fullWidth:!0,label:"name",name:"name",onChange:e=>n("name",e.target.value),value:e}),c.exports.createElement(d,{fullWidth:!0,label:"phone",name:"phone",onChange:e=>n("phone",e.target.value),value:t}),c.exports.createElement(d,{fullWidth:!0,label:"role",name:"role",onChange:e=>n("role",e.target.value),value:r}),c.exports.createElement(d,{fullWidth:!0,label:"website",name:"website",onChange:e=>n("website",e.target.value),value:l}),c.exports.createElement(p,{variant:"contained",component:"label"},"Upload Logo",c.exports.createElement("input",{onChange:async e=>{var t;const r=(null==(t=e.target.files)?void 0:t.length)?e.target.files[0]:void 0;r&&n("logo",await(async e=>new Promise(((t,r)=>{const l=new FileReader;l.readAsDataURL(e),l.onload=()=>t(l.result),l.onerror=e=>r(e)})))(r))},type:"file",hidden:!0}))))};const j=s.table`
  margin: 0px;
  padding: 10px;
  border: ${e=>e.emailStyles.fontColor} ${e=>e.emailStyles.isBorder?"1px":0} solid;
  word-break: break-all;
`,$=s.img`
  width: ${e=>e.emailStyles.imageSize}px;;
  height: ${e=>e.emailStyles.imageSize}px;;
  align-self: center;
  margin-right: 20px;
`,O=s.div`
  border-left: ${e=>e.emailStyles.fontColor} solid 1px;
  color: ${e=>e.emailStyles.fontColor};
  padding-left: 20px;
  font-size: ${e=>e.emailStyles.fontSize}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,P=s(m)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  overflow: auto;
`,R=s(p)`
  margin-top: 10px;
`,F=c.exports.forwardRef(((e,t)=>{const{name:r,phone:l,role:n,website:o,logo:a,styles:i}=C(),s={fontSize:i.fontSize,imageSize:i.imageSize,fontColor:i.fontColor,isBorder:i.isBorder};return c.exports.createElement(j,{emailStyles:s,ref:t},c.exports.createElement("tbody",null,c.exports.createElement("tr",null,c.exports.createElement("td",null,c.exports.createElement($,{src:a||"/oms/assets/defaultBg.122dac80.jpeg",emailStyles:s})),c.exports.createElement("td",null,c.exports.createElement(O,{emailStyles:s},c.exports.createElement("div",null,r),c.exports.createElement("div",null,l),c.exports.createElement("div",null,n),c.exports.createElement("div",null,o))))))})),I=s.div`
  position: fixed;
  z-index: 1000;
  top: -100vh;
  bottom: -100vh;
  width: 200vw;
  height: 200vh;
`,W=({onCopyDone:e})=>{const t=c.exports.useRef(null);return c.exports.useEffect((()=>{const r=t.current;r&&(document.getElementById("root").style.userSelect="none",r.contentEditable="true",r.click(),r.focus(),document.execCommand("selectAll"),document.execCommand("copy"),r.contentEditable="false",getSelection().empty(),document.getElementById("root").style.userSelect="all",e())}),[]),u.createPortal(c.exports.createElement(I,null,c.exports.createElement("div",null,c.exports.createElement(F,{ref:t}))),document.querySelector("body"))},D=()=>{const[e,t]=c.exports.useState(!1);return c.exports.createElement(P,null,e&&c.exports.createElement(W,{onCopyDone:()=>t(!1)}),c.exports.createElement(F,null),c.exports.createElement(R,{onClick:()=>{t(!0)},color:"primary",variant:"contained",fullWidth:!0},"Get Signature"))},L=s(m)`
  grid-column: 1 / 3;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));;
  grid-gap: 4rem;
  padding: 2rem;
`,A=()=>{const{styles:e,setStyle:t}=C();return c.exports.createElement(L,null,c.exports.createElement("div",null,c.exports.createElement(g,{control:c.exports.createElement(f,{checked:e.isBorder,onChange:e=>t({isBorder:e.target.checked}),name:"Border",color:"primary"}),label:"Border"})),c.exports.createElement("div",null,c.exports.createElement(x,{id:"fontSize-slider",gutterBottom:!0},"Font Size"),c.exports.createElement(E,{min:1,max:100,value:e.fontSize,onChange:(e,r)=>t({fontSize:r}),"aria-labelledby":"fontSize-slider"})),c.exports.createElement("div",null,c.exports.createElement(x,{id:"imgSize-slider",gutterBottom:!0},"Image Size"),c.exports.createElement(E,{min:1,max:1e3,value:e.imageSize,onChange:(e,r)=>t({imageSize:r}),"aria-labelledby":"imgSize-slider"})),c.exports.createElement("div",null,c.exports.createElement(x,{id:"colorPicker",gutterBottom:!0},"Font Color"),c.exports.createElement(y,{color:e.fontColor,onChange:e=>t({fontColor:e.hex})})))},M=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 100vh;
  padding: 5rem;
  grid-gap: 5rem;
  background: ${e=>e.theme.palette.background.default};
`,U=()=>{const e=h("(prefers-color-scheme: dark)"),t=b.useMemo((()=>v({palette:{type:e?"dark":"light"}})),[e]);return b.createElement(S,{theme:t},b.createElement(w,{injectFirst:!0},b.createElement(M,{theme:t},b.createElement(D,null),b.createElement(k,null),b.createElement(A,null))))};u.render(b.createElement(b.StrictMode,null,b.createElement(U,null)),document.getElementById("root"));
