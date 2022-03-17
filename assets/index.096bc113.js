var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(t,r,l)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[r]=l,n=(e,n)=>{for(var a in n||(n={}))r.call(n,a)&&o(e,a,n[a]);if(t)for(var a of t(n))l.call(n,a)&&o(e,a,n[a]);return e};import{c as a,p as i,s,C as c,r as m,T as d,B as p,R as u,a as g,F as x,b as f,d as E,S as h,e as b,w as v,u as y,f as S,g as C,h as z,i as w,I as B,j as k,k as j}from"./vendor.631bc117.js";const $=a((I=e=>({name:"Robert L. Sarvis",role:"Software Engineer",phone:"702-216-9084",website:"belekgrup.com",setData:t=>e((e=>{e.name=t.name,e.role=t.role,e.phone=t.phone,e.website=t.website})),setValue:(t,r)=>e((e=>{e[t]=r})),styles:{fontSize:13,innerBorderSize:1,imageSize:100,fontColor:"#000",isBorder:!0},setStyle:t=>e((e=>{e.styles=n(n({},e.styles),t)}))}),(e,t,r)=>I(((t,r)=>{const l="function"==typeof t?i(t):t;return e(l,r)}),t,r)));var I;const P=s(c)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: auto;
`,M=()=>{const{name:e,phone:t,role:r,website:l,setValue:o}=$();return m.exports.createElement(P,null,m.exports.createElement("form",null,m.exports.createElement(d,{variant:"standard",fullWidth:!0,label:"name",name:"name",onChange:e=>o("name",e.target.value),value:e}),m.exports.createElement(d,{variant:"standard",fullWidth:!0,label:"phone",name:"phone",onChange:e=>o("phone",e.target.value),value:t}),m.exports.createElement(d,{variant:"standard",fullWidth:!0,label:"role",name:"role",onChange:e=>o("role",e.target.value),value:r}),m.exports.createElement(d,{variant:"standard",fullWidth:!0,label:"website",name:"website",onChange:e=>o("website",e.target.value),value:l}),m.exports.createElement(p,{variant:"contained",component:"label"},"Upload Logo",m.exports.createElement("input",{onChange:async e=>{var t;const r=(null==(t=e.target.files)?void 0:t.length)?e.target.files[0]:void 0;r&&o("logo",await(async e=>new Promise(((t,r)=>{const l=new FileReader;l.readAsDataURL(e),l.onload=()=>t(l.result),l.onerror=e=>r(e)})))(r))},type:"file",hidden:!0}))))};const O=s.table`
  margin: 0px;
  padding: 10px;
  border: ${e=>e.emailStyles.fontColor}
    ${e=>e.emailStyles.isBorder?"1px":0} solid;
  word-break: break-all;
`,R=s.img`
  width: ${e=>e.emailStyles.imageSize}px;
  height: ${e=>e.emailStyles.imageSize}px;
  align-self: center;
  margin-right: 20px;
`,F=s.div`
  border-left: ${e=>e.emailStyles.fontColor} solid
    ${e=>e.emailStyles.innerBorderSize}px;
  color: ${e=>e.emailStyles.fontColor};
  padding-left: 20px;
  font-size: ${e=>e.emailStyles.fontSize}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,W=s(c)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  overflow: auto;
`,D=s(p)`
  margin-top: 10px;
`,L=m.exports.forwardRef(((e,t)=>{const{name:r,phone:l,role:o,website:n,logo:a,styles:i}=$(),s={fontSize:i.fontSize,imageSize:i.imageSize,fontColor:i.fontColor,isBorder:i.isBorder,innerBorderSize:i.innerBorderSize};return m.exports.createElement(O,{emailStyles:s,ref:t},m.exports.createElement("tbody",null,m.exports.createElement("tr",null,m.exports.createElement("td",null,m.exports.createElement(R,{src:a||"/oms/assets/defaultBg.122dac80.jpeg",emailStyles:s})),m.exports.createElement("td",null,m.exports.createElement(F,{emailStyles:s},m.exports.createElement("div",null,r),m.exports.createElement("div",null,l),m.exports.createElement("div",null,o),m.exports.createElement("div",null,n))))))})),A=s.div`
  position: fixed;
  z-index: 1000;
  top: -100vh;
  bottom: -100vh;
  width: 200vw;
  height: 200vh;
`,U=({onCopyDone:e})=>{const t=m.exports.useRef(null);return m.exports.useEffect((()=>{const r=t.current;r&&(document.getElementById("root").style.userSelect="none",r.contentEditable="true",r.click(),r.focus(),document.execCommand("selectAll"),document.execCommand("copy"),r.contentEditable="false",getSelection().empty(),document.getElementById("root").style.userSelect="all",e())}),[]),u.createPortal(m.exports.createElement(A,null,m.exports.createElement("div",null,m.exports.createElement(L,{ref:t}))),document.querySelector("body"))},V=()=>{const[e,t]=m.exports.useState(!1);return m.exports.createElement(W,null,e&&m.exports.createElement(U,{onCopyDone:()=>t(!1)}),m.exports.createElement(L,null),m.exports.createElement(D,{onClick:()=>{t(!0)},color:"primary",variant:"contained",fullWidth:!0},"Get Signature"))},q=s.div`
  padding: 5px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  display: inline-block;
  cursor: pointer;
`,G=s.div`
  width: 36px;
  height: 14px;
  border-radius: 2px;
  background: ${({color:e})=>e};
`,T=s.div`
  position: absolute;
  z-index: 2;
  transform: translateY(-111%);
`,Y=s.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,H=({onChange:e,color:t})=>{const[r,l]=m.exports.useState(!1);return m.exports.createElement("div",null,m.exports.createElement(q,{onClick:()=>l(!r)},m.exports.createElement(G,{color:t})," "),r?m.exports.createElement(T,null,m.exports.createElement(Y,{onClick:()=>l(!1)}),m.exports.createElement(g,{onChange:e,color:t})):null)},J=s(c)`
  grid-column: 1 / 3;
  display: grid;
  overflow: auto;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  grid-gap: 4rem;
  padding: 2rem;
`,K=()=>{const{styles:e,setStyle:t}=$();return m.exports.createElement(J,null,m.exports.createElement("div",null,m.exports.createElement(x,{control:m.exports.createElement(f,{checked:e.isBorder,onChange:e=>t({isBorder:e.target.checked}),name:"Border",color:"primary"}),label:"Border"})),m.exports.createElement("div",null,m.exports.createElement(E,{id:"fontSize-slider",gutterBottom:!0},"Font Size"),m.exports.createElement(h,{min:1,max:100,value:e.fontSize,onChange:(e,r)=>t({fontSize:r}),"aria-labelledby":"fontSize-slider"})),m.exports.createElement("div",null,m.exports.createElement(E,{id:"imgSize-slider",gutterBottom:!0},"Image Size"),m.exports.createElement(h,{min:1,max:1e3,value:e.imageSize,onChange:(e,r)=>t({imageSize:r}),"aria-labelledby":"imgSize-slider"})),m.exports.createElement("div",null,m.exports.createElement(E,{id:"colorPicker",gutterBottom:!0},"Font Color"),m.exports.createElement(H,{color:e.fontColor,onChange:e=>t({fontColor:e.hex})})),m.exports.createElement("div",null,m.exports.createElement(E,{id:"innerBorderSize-slider",gutterBottom:!0},"Inner Border Size"),m.exports.createElement(h,{min:0,max:10,value:e.innerBorderSize,onChange:(e,r)=>t({innerBorderSize:r}),"aria-labelledby":"innerBorderSize-slider"})))},N=b.createContext({toggleColorMode:()=>{}}),Q=v(s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 100vh;
  padding: 5rem;
  grid-gap: 5rem;
  background: ${e=>e.theme.palette.background.default};
`),X=()=>{const e=z(),t=b.useContext(N);return b.createElement(w,{injectFirst:!0},b.createElement(Q,null,b.createElement(B,{sx:{position:"absolute",top:0,left:0},onClick:t.toggleColorMode,color:"inherit"},"dark"===e.palette.mode?b.createElement(k,null):b.createElement(j,null)),b.createElement(V,null),b.createElement(M,null),b.createElement(K,null)))},Z=()=>{const e=y("(prefers-color-scheme: dark)"),[t,r]=b.useState("light");b.useEffect((()=>{r(e?"dark":"light")}),[e]);const l=b.useMemo((()=>({toggleColorMode:()=>{r((e=>"light"===e?"dark":"light"))}})),[]),o=b.useMemo((()=>S({palette:{mode:t}})),[t]);return b.createElement(N.Provider,{value:l},b.createElement(C,{theme:o},b.createElement(X,null)))};u.render(b.createElement(b.StrictMode,null,b.createElement(Z,null)),document.getElementById("root"));
