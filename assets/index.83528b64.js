var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(t,r,l)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[r]=l,n=(e,n)=>{for(var a in n||(n={}))r.call(n,a)&&o(e,a,n[a]);if(t)for(var a of t(n))l.call(n,a)&&o(e,a,n[a]);return e};import{c as a,p as i,s,C as c,r as m,T as d,B as p,R as u,a as g,F as x,b as f,d as E,S as y,w as h,u as b,e as v,f as S,g as w,h as C}from"./vendor.1d4417a7.js";const z=a((k=e=>({name:"Robert L. Sarvis",role:"Software Engineer",phone:"702-216-9084",website:"belekgrup.com",setData:t=>e((e=>{e.name=t.name,e.role=t.role,e.phone=t.phone,e.website=t.website})),setValue:(t,r)=>e((e=>{e[t]=r})),styles:{fontSize:13,imageSize:100,fontColor:"#000",isBorder:!0},setStyle:t=>e((e=>{e.styles=n(n({},e.styles),t)}))}),(e,t,r)=>k(((t,r)=>{const l="function"==typeof t?i(t):t;return e(l,r)}),t,r)));var k;const B=s(c)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: auto;
`,j=()=>{const{name:e,phone:t,role:r,website:l,setValue:o}=z();return m.exports.createElement(B,null,m.exports.createElement("form",null,m.exports.createElement(d,{fullWidth:!0,label:"name",name:"name",onChange:e=>o("name",e.target.value),value:e}),m.exports.createElement(d,{fullWidth:!0,label:"phone",name:"phone",onChange:e=>o("phone",e.target.value),value:t}),m.exports.createElement(d,{fullWidth:!0,label:"role",name:"role",onChange:e=>o("role",e.target.value),value:r}),m.exports.createElement(d,{fullWidth:!0,label:"website",name:"website",onChange:e=>o("website",e.target.value),value:l}),m.exports.createElement(p,{variant:"contained",component:"label"},"Upload Logo",m.exports.createElement("input",{onChange:async e=>{var t;const r=(null==(t=e.target.files)?void 0:t.length)?e.target.files[0]:void 0;r&&o("logo",await(async e=>new Promise(((t,r)=>{const l=new FileReader;l.readAsDataURL(e),l.onload=()=>t(l.result),l.onerror=e=>r(e)})))(r))},type:"file",hidden:!0}))))};const $=s.table`
  margin: 0px;
  padding: 10px;
  border: ${e=>e.emailStyles.fontColor} ${e=>e.emailStyles.isBorder?"1px":0} solid;
  word-break: break-all;
`,O=s.img`
  width: ${e=>e.emailStyles.imageSize}px;;
  height: ${e=>e.emailStyles.imageSize}px;;
  align-self: center;
  margin-right: 20px;
`,P=s.div`
  border-left: ${e=>e.emailStyles.fontColor} solid 1px;
  color: ${e=>e.emailStyles.fontColor};
  padding-left: 20px;
  font-size: ${e=>e.emailStyles.fontSize}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,R=s(c)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  overflow: auto;
`,F=s(p)`
  margin-top: 10px;
`,I=m.exports.forwardRef(((e,t)=>{const{name:r,phone:l,role:o,website:n,logo:a,styles:i}=z(),s={fontSize:i.fontSize,imageSize:i.imageSize,fontColor:i.fontColor,isBorder:i.isBorder};return m.exports.createElement($,{emailStyles:s,ref:t},m.exports.createElement("tbody",null,m.exports.createElement("tr",null,m.exports.createElement("td",null,m.exports.createElement(O,{src:a||"/oms/assets/defaultBg.122dac80.jpeg",emailStyles:s})),m.exports.createElement("td",null,m.exports.createElement(P,{emailStyles:s},m.exports.createElement("div",null,r),m.exports.createElement("div",null,l),m.exports.createElement("div",null,o),m.exports.createElement("div",null,n))))))})),W=s.div`
  position: fixed;
  z-index: 1000;
  top: -100vh;
  bottom: -100vh;
  width: 200vw;
  height: 200vh;
`,D=({onCopyDone:e})=>{const t=m.exports.useRef(null);return m.exports.useEffect((()=>{const r=t.current;r&&(document.getElementById("root").style.userSelect="none",r.contentEditable="true",r.click(),r.focus(),document.execCommand("selectAll"),document.execCommand("copy"),r.contentEditable="false",getSelection().empty(),document.getElementById("root").style.userSelect="all",e())}),[]),u.createPortal(m.exports.createElement(W,null,m.exports.createElement("div",null,m.exports.createElement(I,{ref:t}))),document.querySelector("body"))},L=()=>{const[e,t]=m.exports.useState(!1);return m.exports.createElement(R,null,e&&m.exports.createElement(D,{onCopyDone:()=>t(!1)}),m.exports.createElement(I,null),m.exports.createElement(F,{onClick:()=>{t(!0)},color:"primary",variant:"contained",fullWidth:!0},"Get Signature"))},A=s.div`
  padding: 5px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.1);
  display: inline-block;
  cursor: pointer;
`,M=s.div`
  width: 36px;
  height: 14px;
  border-radius: 2px;
  background: ${({color:e})=>e};

`,U=s.div`
    position: absolute;
    z-index: 2;
    transform: translateY(-111%);
`,V=s.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`,q=({onChange:e,color:t})=>{const[r,l]=m.exports.useState(!1);return m.exports.createElement("div",null,m.exports.createElement(A,{onClick:()=>l(!r)},m.exports.createElement(M,{color:t})," "),r?m.exports.createElement(U,null,m.exports.createElement(V,{onClick:()=>l(!1)}),m.exports.createElement(g,{onChange:e,color:t})):null)},G=s(c)`
  grid-column: 1 / 3;
  display: grid;
  overflow: auto;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));;
  grid-gap: 4rem;
  padding: 2rem;
`,T=()=>{const{styles:e,setStyle:t}=z();return m.exports.createElement(G,null,m.exports.createElement("div",null,m.exports.createElement(x,{control:m.exports.createElement(f,{checked:e.isBorder,onChange:e=>t({isBorder:e.target.checked}),name:"Border",color:"primary"}),label:"Border"})),m.exports.createElement("div",null,m.exports.createElement(E,{id:"fontSize-slider",gutterBottom:!0},"Font Size"),m.exports.createElement(y,{min:1,max:100,value:e.fontSize,onChange:(e,r)=>t({fontSize:r}),"aria-labelledby":"fontSize-slider"})),m.exports.createElement("div",null,m.exports.createElement(E,{id:"imgSize-slider",gutterBottom:!0},"Image Size"),m.exports.createElement(y,{min:1,max:1e3,value:e.imageSize,onChange:(e,r)=>t({imageSize:r}),"aria-labelledby":"imgSize-slider"})),m.exports.createElement("div",null,m.exports.createElement(E,{id:"colorPicker",gutterBottom:!0},"Font Color"),m.exports.createElement(q,{color:e.fontColor,onChange:e=>t({fontColor:e.hex})})))},Y=h(s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 100vh;
  padding: 5rem;
  grid-gap: 5rem;
  background: ${e=>e.theme.palette.background.default};
`),H=()=>{const e=b("(prefers-color-scheme: dark)"),t=v.useMemo((()=>S({palette:{type:e?"dark":"light"}})),[e]);return v.createElement(w,{theme:t},v.createElement(C,{injectFirst:!0},v.createElement(Y,null,v.createElement(L,null),v.createElement(j,null),v.createElement(T,null))))};u.render(v.createElement(v.StrictMode,null,v.createElement(H,null)),document.getElementById("root"));
