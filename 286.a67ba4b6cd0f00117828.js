"use strict";(self.webpackChunkwebpack_react_ts_preset_1=self.webpackChunkwebpack_react_ts_preset_1||[]).push([[286],{232:(n,e,r)=>{r.d(e,{A:()=>o});var a=r(848);var t=r(780);const s=function(){return(0,a.jsxs)("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("title",{}),(0,a.jsx)("path",{d:"M456.69,421.39,362.6,327.3a173.81,173.81,0,0,0,34.84-104.58C397.44,126.38,319.06,48,222.72,48S48,126.38,48,222.72s78.38,174.72,174.72,174.72A173.81,173.81,0,0,0,327.3,362.6l94.09,94.09a25,25,0,0,0,35.3-35.3ZM97.92,222.72a124.8,124.8,0,1,1,124.8,124.8A124.95,124.95,0,0,1,97.92,222.72Z"})]})},i=(0,r(540).memo)((function(n){var e=n.handleSearch,r=n.handleInputChange;return(0,a.jsxs)("div",{className:"GY_Ndh9z",children:[(0,a.jsx)("input",{type:"text",className:"xe0Pw4gw",onChange:r,placeholder:"Поиск"}),(0,a.jsx)(t.A,{variant:"outlined",icon:(0,a.jsx)(s,{}),className:"owRk9PLZ",onClick:e})]})}));var c=r(393);const o=function(n){var e=n.handleSearch,r=n.handleInputChange,t=n.children;return(0,a.jsx)("header",{className:"Kw0QhqY2",children:(0,a.jsx)(c.A,{children:(0,a.jsxs)("div",{className:"uMYuABUa",children:[(0,a.jsx)(i,{handleSearch:e,handleInputChange:r}),(0,a.jsx)("div",{className:"bihhdsiy",children:t})]})})})}},286:(n,e,r)=>{r.r(e),r.d(e,{default:()=>N});var a=r(848);var t=r(393);var s=r(780);const i={btn:"KM0NLFdQ",current:"d6rGMGq3"};var c=r(303),o=r(522);const l=function(n){var e=n.category,r=(0,c.j)(),t=(0,c.G)((function(n){return n.productFilter.category})),l=t==e.name,d="all"===e.name&&""===t,u=l||d?[i.btn,i.current].join(" "):i.btn;return(0,a.jsx)(s.A,{variant:"outlined",className:u,onClick:function(){window.scrollTo({top:0});var n="all"===e.name?"":e.name;r((0,o.Ud)("")),r((0,o.Fb)(n))},children:e.value})};var d=r(549);const u=function(){var n=(0,c.G)((function(n){return n.productFilter.minPrice})),e=(0,c.G)((function(n){return n.productFilter.maxPrice})),r=(0,c.j)();return(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"gh7e42vj",children:"Цена"}),(0,a.jsxs)("form",{className:"Fldkfan9",children:[(0,a.jsx)("input",{type:"number",value:n,placeholder:"От...",min:0,max:1e5,onChange:function(n){r((0,o.up)(n.target.value))}}),(0,a.jsx)("input",{type:"number",value:e,placeholder:"До...",min:0,max:1e5,onChange:function(n){r((0,o.aY)(n.target.value))}})]})]})};var h=r(540);const x=(0,h.memo)((function(){return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"oVaTHY5Z",children:[(0,a.jsx)("div",{className:"i1IVdoFu",children:d.L.map((function(n){return(0,a.jsx)(l,{category:n},n.name)}))}),(0,a.jsx)(u,{})]})})}));var j=r(232);const v=function(){return(0,a.jsxs)("svg",{version:"1.1",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("title",{}),(0,a.jsx)("desc",{}),(0,a.jsx)("defs",{}),(0,a.jsx)("g",{fillRule:"evenodd",id:"Page-1",stroke:"none",strokeWidth:"1",children:(0,a.jsx)("g",{id:"Core",transform:"translate(-212.000000, -422.000000)",children:(0,a.jsx)("g",{id:"shopping-cart",transform:"translate(212.000000, 422.000000)",children:(0,a.jsx)("path",{d:"M6,16 C4.9,16 4,16.9 4,18 C4,19.1 4.9,20 6,20 C7.1,20 8,19.1 8,18 C8,16.9 7.1,16 6,16 L6,16 Z M0,0 L0,2 L2,2 L5.6,9.6 L4.2,12 C4.1,12.3 4,12.7 4,13 C4,14.1 4.9,15 6,15 L18,15 L18,13 L6.4,13 C6.3,13 6.2,12.9 6.2,12.8 L6.2,12.7 L7.1,11 L14.5,11 C15.3,11 15.9,10.6 16.2,10 L19.8,3.5 C20,3.3 20,3.2 20,3 C20,2.4 19.6,2 19,2 L4.2,2 L3.3,0 L0,0 L0,0 Z M16,16 C14.9,16 14,16.9 14,18 C14,19.1 14.9,20 16,20 C17.1,20 18,19.1 18,18 C18,16.9 17.1,16 16,16 L16,16 Z",id:"Shape"})})})})]})};var p=r(976);const m=function(n){var e=n.handleSearch,r=n.handleInputChange;return(0,a.jsx)(j.A,{handleSearch:e,handleInputChange:r,children:(0,a.jsx)(p.N_,{to:"cart",children:(0,a.jsx)(s.A,{variant:"outlined",icon:(0,a.jsx)(v,{}),className:"rxKHONas"})})})};var f=r(880),g=r(494);const C=function(n){var e=n.data,r=n.isLoading,t=n.isError;return r?(0,a.jsx)(g.A,{}):t?(0,a.jsx)("p",{children:"Ошибка :("}):(0,a.jsx)("section",{className:"DDL0s6ej",children:(null==e?void 0:e.length)?e.map((function(n){return(0,a.jsx)(f.A,{id:n._id,category:n.category,name:n.name,description:n.description,price:n.price,img:n.img},n._id)})):(0,a.jsx)("p",{children:"Ничего не найдено"})})};var L=r(895);const N=function(){var n=function(){var n=(0,c.G)((function(n){return n.productFilter.category})),e=(0,c.G)((function(n){return n.productFilter.textQuery})),r=(0,c.G)((function(n){return n.productFilter.minPrice})),a=(0,c.G)((function(n){return n.productFilter.maxPrice})),t=(0,L.NP)(),s=t[0],i=t[1],o=function(){s({textQuery:e,category:n,minPrice:r,maxPrice:a})};return(0,h.useEffect)((function(){o()}),[n]),[o,i]}(),e=n[0],r=n[1],s=r.data,i=r.isError,l=r.isLoading,d=(0,c.j)();return(0,h.useEffect)((function(){e()}),[]),(0,a.jsxs)("div",{className:"shop",children:[(0,a.jsx)(m,{handleSearch:function(){e()},handleInputChange:function(n){d((0,o.Ud)(n.target.value))}}),(0,a.jsx)(t.A,{children:(0,a.jsxs)("div",{className:"iMnvoNdk",children:[(0,a.jsx)(x,{}),(0,a.jsx)(C,{data:s,isLoading:l,isError:i})]})})]})}}}]);