var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,n=(e,n)=>{for(var a in n||(n={}))r.call(n,a)&&l(e,a,n[a]);if(t)for(var a of t(n))o.call(n,a)&&l(e,a,n[a]);return e};import{c as a,p as i,s,C as c,r as d,T as m,B as p,R as u,a as g,F as x,b as f,d as E,S as h,e as v,w as b,u as y,f as S,g as C,h as B,i as z,I as w,j as k,k as j}from"./vendor.631bc117.js";const $=a((I=e=>({name:"Robert L. Sarvis",role:"Software Engineer",phone:"702-216-9084",website:"belekgrup.com",setData:t=>e((e=>{e.name=t.name,e.role=t.role,e.phone=t.phone,e.website=t.website})),setValue:(t,r)=>e((e=>{e[t]=r})),styles:{fontSize:13,innerBorderSize:1,imageSize:100,fontColor:"#000",innerBorderColor:"#000",isBorder:!0},setStyle:t=>e((e=>{e.styles=n(n({},e.styles),t)}))}),(e,t,r)=>I(((t,r)=>{const o="function"==typeof t?i(t):t;return e(o,r)}),t,r)));var I;const P=s(c)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: auto;
`,M=()=>{const{name:e,phone:t,role:r,website:o,setValue:l}=$();return d.exports.createElement(P,null,d.exports.createElement("form",null,d.exports.createElement(m,{variant:"standard",fullWidth:!0,label:"name",name:"name",onChange:e=>l("name",e.target.value),value:e}),d.exports.createElement(m,{variant:"standard",fullWidth:!0,label:"phone",name:"phone",onChange:e=>l("phone",e.target.value),value:t}),d.exports.createElement(m,{variant:"standard",fullWidth:!0,label:"role",name:"role",onChange:e=>l("role",e.target.value),value:r}),d.exports.createElement(m,{variant:"standard",fullWidth:!0,label:"website",name:"website",onChange:e=>l("website",e.target.value),value:o}),d.exports.createElement(p,{variant:"contained",component:"label"},"Upload Logo",d.exports.createElement("input",{onChange:async e=>{var t;const r=(null==(t=e.target.files)?void 0:t.length)?e.target.files[0]:void 0;r&&l("logo",await(async e=>new Promise(((t,r)=>{const o=new FileReader;o.readAsDataURL(e),o.onload=()=>t(o.result),o.onerror=e=>r(e)})))(r))},type:"file",hidden:!0}))))};const O=s.table`
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
  border-left: ${e=>e.emailStyles.innerBorderColor} solid
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
`,L=d.exports.forwardRef(((e,t)=>{const{name:r,phone:o,role:l,website:n,logo:a,styles:i}=$(),s={fontSize:i.fontSize,imageSize:i.imageSize,fontColor:i.fontColor,isBorder:i.isBorder,innerBorderSize:i.innerBorderSize,innerBorderColor:i.innerBorderColor};return d.exports.createElement(O,{emailStyles:s,ref:t},d.exports.createElement("tbody",null,d.exports.createElement("tr",null,d.exports.createElement("td",null,d.exports.createElement(R,{src:a||"/oms/assets/defaultBg.122dac80.jpeg",emailStyles:s})),d.exports.createElement("td",null,d.exports.createElement(F,{emailStyles:s},d.exports.createElement("div",null,r),d.exports.createElement("div",null,o),d.exports.createElement("div",null,l),d.exports.createElement("div",null,n))))))})),A=s.div`
  position: fixed;
  z-index: 1000;
  top: -100vh;
  bottom: -100vh;
  width: 200vw;
  height: 200vh;
`,U=({onCopyDone:e})=>{const t=d.exports.useRef(null);return d.exports.useEffect((()=>{const r=t.current;r&&(document.getElementById("root").style.userSelect="none",r.contentEditable="true",r.click(),r.focus(),document.execCommand("selectAll"),document.execCommand("copy"),r.contentEditable="false",getSelection().empty(),document.getElementById("root").style.userSelect="all",e())}),[]),u.createPortal(d.exports.createElement(A,null,d.exports.createElement("div",null,d.exports.createElement(L,{ref:t}))),document.querySelector("body"))},V=()=>{const[e,t]=d.exports.useState(!1);return d.exports.createElement(W,null,e&&d.exports.createElement(U,{onCopyDone:()=>t(!1)}),d.exports.createElement(L,null),d.exports.createElement(D,{onClick:()=>{t(!0)},color:"primary",variant:"contained",fullWidth:!0},"Get Signature"))},q=s.div`
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
`,H=({onChange:e,color:t})=>{const[r,o]=d.exports.useState(!1);return d.exports.createElement("div",null,d.exports.createElement(q,{onClick:()=>o(!r)},d.exports.createElement(G,{color:t})," "),r?d.exports.createElement(T,null,d.exports.createElement(Y,{onClick:()=>o(!1)}),d.exports.createElement(g,{onChange:e,color:t})):null)},J=s(c)`
  grid-column: 1 / 3;
  display: grid;
  overflow: auto;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  grid-gap: 4rem;
  padding: 2rem;
`,K=()=>{const{styles:e,setStyle:t}=$();return d.exports.createElement(J,null,d.exports.createElement("div",null,d.exports.createElement(x,{control:d.exports.createElement(f,{checked:e.isBorder,onChange:e=>t({isBorder:e.target.checked}),name:"Border",color:"primary"}),label:"Border"})),d.exports.createElement("div",null,d.exports.createElement(E,{id:"fontSize-slider",gutterBottom:!0},"Font Size"),d.exports.createElement(h,{min:1,max:100,value:e.fontSize,onChange:(e,r)=>t({fontSize:r}),"aria-labelledby":"fontSize-slider"})),d.exports.createElement("div",null,d.exports.createElement(E,{id:"imgSize-slider",gutterBottom:!0},"Image Size"),d.exports.createElement(h,{min:1,max:1e3,value:e.imageSize,onChange:(e,r)=>t({imageSize:r}),"aria-labelledby":"imgSize-slider"})),d.exports.createElement("div",null,d.exports.createElement(E,{id:"colorPicker",gutterBottom:!0},"Font Color"),d.exports.createElement(H,{color:e.fontColor,onChange:e=>t({fontColor:e.hex})})),d.exports.createElement("div",null,d.exports.createElement(E,{id:"innerBorderSize-slider",gutterBottom:!0},"Inner Border Size"),d.exports.createElement(h,{min:0,max:10,value:e.innerBorderSize,onChange:(e,r)=>t({innerBorderSize:r}),"aria-labelledby":"innerBorderSize-slider"})),d.exports.createElement("div",null,d.exports.createElement(E,{id:"colorPicker",gutterBottom:!0},"Inner Border Color"),d.exports.createElement(H,{color:e.innerBorderColor,onChange:e=>t({innerBorderColor:e.hex})})))},N=v.createContext({toggleColorMode:()=>{}}),Q=b(s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 100vh;
  padding: 5rem;
  grid-gap: 5rem;
  background: ${e=>e.theme.palette.background.default};
`),X=()=>{const e=B(),t=v.useContext(N);return v.createElement(z,{injectFirst:!0},v.createElement(Q,null,v.createElement(w,{sx:{position:"absolute",top:0,left:0},onClick:t.toggleColorMode,color:"inherit"},"dark"===e.palette.mode?v.createElement(k,null):v.createElement(j,null)),v.createElement(V,null),v.createElement(M,null),v.createElement(K,null)))},Z=()=>{const e=y("(prefers-color-scheme: dark)"),[t,r]=v.useState("light");v.useEffect((()=>{r(e?"dark":"light")}),[e]);const o=v.useMemo((()=>({toggleColorMode:()=>{r((e=>"light"===e?"dark":"light"))}})),[]),l=v.useMemo((()=>S({palette:{mode:t}})),[t]);return v.createElement(N.Provider,{value:o},v.createElement(C,{theme:l},v.createElement(X,null)))};u.render(v.createElement(v.StrictMode,null,v.createElement(Z,null)),document.getElementById("root"));
