import{c,j as e,A as L,T as N,a as i,F as T,b as A,d as C,C as v,e as R,f as O,g as w,h as x,i as y,k as l,l as M,m as I,n as P,o as B,p as z,R as d,H as F,q as $,r as h,s as j}from"./vendor-1fef1dff.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const q={root:"/",list:"/list"},g={...q},H=c({name:"vtxs8z",styles:"margin:1rem"}),S="/assets/logo-b86690b5.png",E=c({name:"ho1qnd",styles:"display:flex;flex-direction:row"}),G=c({name:"a88p1",styles:"width:3rem"}),U=()=>e(L,{position:"static",children:e(N,{variant:"dense",className:E,children:e("img",{className:G,src:S})})}),V=t=>{const{children:s}=t;return i(T,{children:[e(U,{}),e("main",{children:s({className:H})})]})},Z={ORGANIZATION:"lemoncode"},D=async t=>{const{data:s}=await A.get(`https://api.github.com/orgs/${t}/members`);return s},K=(t,s)=>Array.isArray(t)?t.map(s):[],_=t=>({id:t.id,name:t.login,imageUrl:t.avatar_url}),J=t=>K(t,_),Q=C({palette:{primary:{main:"#006A7B"}}}),u=Q,W=t=>{const{children:s}=t;return e(v,{value:R,children:i(O,{theme:u,children:[e(w,{}),s]})})},p=c("padding:0.5rem;background-color:",u.palette.primary.main,";color:",u.palette.primary.contrastText,";",""),X=t=>e(x,{children:i(y,{children:[e(l,{className:p,children:"ID"}),e(l,{className:p,children:"Name"}),e(l,{className:p,children:"Avatar"})]})}),Y=c({name:"67t0gq",styles:"width:5rem"}),k=t=>{const{member:s}=t;return i(y,{children:[e(l,{children:s.id}),e(l,{children:s.name}),e(l,{children:e("img",{className:Y,src:s.imageUrl})})]})},ee=t=>{const{memberList:s,className:a}=t;return e(M,{className:a,children:i(I,{children:[e(X,{}),e(P,{children:s.map(o=>e(k,{member:o},o.id))})]})})},te=c({name:"1d3xsmy",styles:"display:grid;grid-template-columns:1fr;grid-template-areas:'title' 'memberList';grid-column-gap:1rem;grid-row-gap:1rem"}),se=c({name:"16824ea",styles:"grid-area:title;justify-self:center;text-transform:capitalize"}),re=c({name:"16pc8yg",styles:"grid-area:memberList"}),ne=t=>{const{organization:s,memberList:a,className:o}=t;return i("div",{className:B(te,o),children:[i(z,{className:se,variant:"h2",children:["Organization: ",s]}),e(ee,{className:re,memberList:a})]})},ae=t=>{const{className:s}=t,[a]=d.useState(Z.ORGANIZATION),[o,r]=d.useState([]),n=async()=>{const m=await D(a),b=J(m);r(b)};return d.useEffect(()=>{n()},[a]),e(ne,{className:s,organization:a,memberList:o})},f=()=>e(V,{children:({className:t})=>e(ae,{className:t})}),oe=()=>e(F,{children:i($,{children:[e(h,{path:g.root,element:e(f,{})}),e(h,{path:g.list,element:e(f,{})})]})}),ie=()=>e(W,{children:e(oe,{})}),ce=j(document.getElementById("root"));ce.render(e(ie,{}));
