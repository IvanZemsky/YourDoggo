"use strict";(self.webpackChunkwebpack_react_ts_preset_1=self.webpackChunkwebpack_react_ts_preset_1||[]).push([[402],{5904:(e,r,n)=>{n.d(r,{A:()=>c});var t=n(4848);var a=n(3393);const c=function(e){var r=e.input,n=e.children;return(0,t.jsx)("header",{className:"Kw0QhqY2",children:(0,t.jsx)(a.A,{children:(0,t.jsxs)("div",{className:"uMYuABUa",children:[r,(0,t.jsx)("div",{className:"bihhdsiy",children:n})]})})})}},7963:(e,r,n)=>{n.d(r,{A:()=>s});var t=n(4848),a=n(2374);const c={button:"aI5ByLm8",active:"K7Nm01XW"},s=function(e){var r=e.currentPage,n=e.pageAmount,s=e.handleClick,i=Array.from({length:n},(function(e,r){return r+1})),o=function(e){return[c.button,r===e?c.active:void 0].join(" ")};return(0,t.jsx)(t.Fragment,{children:i.map((function(e){return(0,t.jsx)(a.A,{onClick:s(e),className:o(e),children:e},e)}))})}},3913:(e,r,n)=>{n.d(r,{A:()=>o});var t=n(4848);const a={link:"WWbseSOQ",shadow:"qPf1KUkR",primary:"EhyyJqDL",filled:"yQYZSKm2",secondary:"AoChoFaF",outlined:"XGcduZrw",none:"xge20BlT"};var c=n(4976),s=n(6359),i=function(){return i=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var a in r=arguments[n])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},i.apply(this,arguments)};const o=function(e){var r=e.variant,n=void 0===r?"filled":r,o=e.color,l=void 0===o?"primary":o,u=e.shadow,d=void 0===u||u,p=e.icon,v=void 0===p?null:p,h=e.className,m=void 0===h?"":h,f=(e.setTopScroll,e.children),x=e.to,j=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]])}return n}(e,["variant","color","shadow","icon","className","setTopScroll","children","to"]);return s.e&&(0,s.e)(),(0,t.jsxs)(c.N_,i({to:x,className:[a.link,a[l],a[n],d&&a.shadow,m].join(" ")},j,{children:[v,f]}))}},3429:(e,r,n)=>{n.d(r,{A:()=>o});var t=n(4848),a=n(4303),c=n(2374);const s=function(){return(0,t.jsxs)("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("title",{}),(0,t.jsx)("path",{d:"M456.69,421.39,362.6,327.3a173.81,173.81,0,0,0,34.84-104.58C397.44,126.38,319.06,48,222.72,48S48,126.38,48,222.72s78.38,174.72,174.72,174.72A173.81,173.81,0,0,0,327.3,362.6l94.09,94.09a25,25,0,0,0,35.3-35.3ZM97.92,222.72a124.8,124.8,0,1,1,124.8,124.8A124.95,124.95,0,0,1,97.92,222.72Z"})]})};var i=n(6540);const o=(0,i.memo)((function(e){var r=e.dispatchFunc,n=e.defaultValue,o=void 0===n?"":n,l=(0,a.j)(),u=(0,i.useState)(o),d=u[0],p=u[1];return(0,i.useEffect)((function(){p(o)}),[o]),(0,t.jsxs)("div",{className:"GY_Ndh9z",children:[(0,t.jsx)("input",{type:"text",className:"xe0Pw4gw",onChange:function(e){p(e.target.value)},value:d,placeholder:"Поиск"}),(0,t.jsx)(c.A,{variant:"outlined",icon:(0,t.jsx)(s,{}),className:"owRk9PLZ",onClick:function(){l(r(d))}})]})}))},2865:(e,r,n)=>{n.d(r,{A:()=>a});var t=n(4848);const a=function(){return(0,t.jsxs)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("title",{}),(0,t.jsx)("g",{"data-name":"Layer 2",id:"Layer_2",children:(0,t.jsx)("path",{d:"M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z"})})]})}},1549:(e,r,n)=>{n.d(r,{L:()=>t});var t=[{name:"all",value:"Все"},{name:"food",value:"Корм и лакомства"},{name:"leashesAndCollars",value:"Поводки и ошейники"},{name:"toys",value:"Игрушки"},{name:"care",value:"Забота и уход"}]},3880:(e,r,n)=>{n.d(r,{A:()=>s});var t=n(4848),a=n(4976);var c=n(1549);const s=(0,n(6540).memo)((function(e){var r,n,s=e.id,i=e.name,o=e.category,l=e.description,u=e.price,d=e.img,p=(r=o,(n=c.L.find((function(e){return e.name===r})))?n.value:"другое");return(0,t.jsx)(a.N_,{to:"/shop/".concat(s),children:(0,t.jsxs)("div",{className:"suwGZlwT",children:[(0,t.jsxs)("div",{className:"TZUiCYt8",children:[(0,t.jsx)("p",{className:"e9MoX2IC",children:p}),(0,t.jsx)("img",{src:d,alt:"Обложка"})]}),(0,t.jsxs)("div",{className:"_bGspT5k",children:[(0,t.jsx)("p",{className:"InYorDwc",children:i}),(0,t.jsx)("p",{className:"CMLo1tra",children:l}),(0,t.jsxs)("p",{className:"YC_SocrO",children:[u," ₽"]})]})]})})}))},2466:(e,r,n)=>{n.d(r,{A:()=>a});var t=n(4848);const a=function(e){var r=e.limit,n=Array.from({length:r},(function(e,r){return(0,t.jsx)("div",{className:"KKSNkqYG"},r)}));return(0,t.jsx)("div",{className:"plQqWGqc",children:n})}},8402:(e,r,n)=>{n.r(r),n.d(r,{default:()=>q});var t=n(4848);var a=n(3393);var c=n(4303),s=n(5522);const i={wrap:"u2yK6RQF",radio:"Er0L7WHE"};var o=function(){return o=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var a in r=arguments[n])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},o.apply(this,arguments)};const l=function(e){var r=e.text,n=e.textStyle,a=e.className,c=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]])}return n}(e,["text","textStyle","className"]);return(0,t.jsxs)("div",{className:[i.wrap,a].join(" "),children:[(0,t.jsx)("input",o({className:i.radio,type:"radio"},c)),(0,t.jsx)("label",{className:n,htmlFor:c.id,children:r})]})},u=function(e){var r=e.category,n=(0,c.j)(),a=(0,c.G)((function(e){return e.productFilter.category}))===r.name||"all"===r.name;return(0,t.jsx)(l,{className:"KM0NLFdQ",textStyle:"ERm6ux28",onClick:function(){window.scrollTo({top:0});var e="all"===r.name?"":r.name;n((0,s.Ud)("")),n((0,s.Fb)(e))},text:r.value,value:r.name,id:r.name,name:"category",defaultChecked:a})};var d=n(1549);var p=n(6540),v=n(2374),h=n(2865),m=function(){return m=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var a in r=arguments[n])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},m.apply(this,arguments)};const f=function(){var e=(0,p.useState)({minPrice:"",maxPrice:""}),r=e[0],n=e[1],a=(0,c.j)();return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"gh7e42vj",children:"Цена"}),(0,t.jsxs)("form",{className:"Fldkfan9",onSubmit:function(e){e.preventDefault(),a((0,s.oc)(r))},children:[(0,t.jsx)("input",{type:"number",value:r.minPrice,placeholder:"От...",min:0,max:1e5,onChange:function(e){n(m(m({},r),{minPrice:e.target.value}))}}),(0,t.jsx)("input",{type:"number",value:r.maxPrice,placeholder:"До...",min:0,max:1e5,onChange:function(e){n(m(m({},r),{maxPrice:e.target.value}))}}),(0,t.jsx)(v.A,{type:"submit",shadow:!1,className:"YqUtulBg",children:(0,t.jsx)(h.A,{})})]})]})};var x=n(9164);const j=(0,p.memo)((function(){var e=(0,c.G)((function(e){return e.shopSlice.isFiltersOpened})),r=(0,x.p)(e,"zwWPlKkg","GBjtVfMV");return(0,t.jsx)("div",{className:r,children:(0,t.jsxs)("div",{className:"oVaTHY5Z",children:[(0,t.jsx)("div",{className:"i1IVdoFu",children:d.L.map((function(e){return(0,t.jsx)(u,{category:e},e.name)}))}),(0,t.jsx)(f,{})]})})}));var y=n(5904);const g=function(){return(0,t.jsxs)("svg",{version:"1.1",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("title",{}),(0,t.jsx)("desc",{}),(0,t.jsx)("defs",{}),(0,t.jsx)("g",{fillRule:"evenodd",id:"Page-1",stroke:"none",strokeWidth:"1",children:(0,t.jsx)("g",{id:"Core",transform:"translate(-212.000000, -422.000000)",children:(0,t.jsx)("g",{id:"shopping-cart",transform:"translate(212.000000, 422.000000)",children:(0,t.jsx)("path",{d:"M6,16 C4.9,16 4,16.9 4,18 C4,19.1 4.9,20 6,20 C7.1,20 8,19.1 8,18 C8,16.9 7.1,16 6,16 L6,16 Z M0,0 L0,2 L2,2 L5.6,9.6 L4.2,12 C4.1,12.3 4,12.7 4,13 C4,14.1 4.9,15 6,15 L18,15 L18,13 L6.4,13 C6.3,13 6.2,12.9 6.2,12.8 L6.2,12.7 L7.1,11 L14.5,11 C15.3,11 15.9,10.6 16.2,10 L19.8,3.5 C20,3.3 20,3.2 20,3 C20,2.4 19.6,2 19,2 L4.2,2 L3.3,0 L0,0 L0,0 Z M16,16 C14.9,16 14,16.9 14,18 C14,19.1 14.9,20 16,20 C17.1,20 18,19.1 18,18 C18,16.9 17.1,16 16,16 L16,16 Z",id:"Shape"})})})})]})};var w=n(3429),N=n(3913),b=n(148),O=n(7165),P=n(6231),C=b.Q.Cart;const A=function(e){var r=(0,c.j)(),n=(0,P.Ub)({maxWidth:800});return(0,t.jsxs)(y.A,{input:(0,t.jsx)(w.A,{dispatchFunc:s.Ud}),children:[n&&(0,t.jsx)(v.A,{variant:"outlined",className:"RRzkb3la",onClick:function(){r((0,O.M)())},children:"Фильтры"}),(0,t.jsx)(N.A,{to:"".concat(C),variant:"outlined",icon:(0,t.jsx)(g,{}),className:"rxKHONas"})]})};var L=n(3880),F=n(9243),k=n(2466),S=n(6359),B=n(7963);const Q=function(){var e,r=(0,c.j)(),n=(e=(0,c.G)((function(e){return e.productFilter})),(0,F.N0)(e)),a=n.data,i=n.isLoading,o=n.isFetching,l=n.isError,u=(0,c.G)((function(e){return e.productFilter.page})),d=null==a?void 0:a.data,p=null==a?void 0:a.totalCount,v=(0,c.G)((function(e){return e.productFilter.limit})),h=p?Math.ceil(p/v):1;return i||o?(0,t.jsx)(k.A,{limit:12}):l?(0,t.jsx)("p",{children:"Ошибка :("}):(0,t.jsx)("div",{className:"SIHl_mz5",children:(null==d?void 0:d.length)?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"DDL0s6ej",children:d.map((function(e){return(0,t.jsx)(L.A,{id:e._id,category:e.category,name:e.name,description:e.description,price:e.price,img:e.img},e._id)}))}),(0,t.jsx)("div",{className:"tFlpduKv",children:(0,t.jsx)(B.A,{pageAmount:h,currentPage:u,handleClick:function(e){return function(){r((0,s.Ir)(e)),(0,S.e)()}}})})]}):(0,t.jsx)("p",{children:"Ничего не найдено"})})},q=function(){return(0,t.jsxs)("div",{className:"QVxaPo8h",children:[(0,t.jsx)(A,{}),(0,t.jsx)(a.A,{children:(0,t.jsxs)("div",{className:"iMnvoNdk",children:[(0,t.jsx)(j,{}),(0,t.jsx)(Q,{})]})})]})}},9243:(e,r,n)=>{n.d(r,{N0:()=>u,Vf:()=>p,d4:()=>d});var t=n(6327),a=n(8023),c=n(8324),s=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]])}return n},i=c.BH.PRODUCTS,o=c.BH.CATEGORIES,l=a.s.injectEndpoints({endpoints:function(e){return{fetchAllProducts:e.query({query:function(e){var r=e.page,n=e.limit,t=e.textQuery,a=e.category,c=e.minPrice,s=e.maxPrice;return{url:"".concat(i),params:{search:t,category:a,minPrice:c,maxPrice:s,page:r,limit:n}}},transformResponse:function(e,r){var n,t,a=null===(t=null===(n=null==r?void 0:r.response)||void 0===n?void 0:n.headers)||void 0===t?void 0:t.get("X-Total-Count");return{data:e,totalCount:a?+a:1}},serializeQueryArgs:function(e){e.endpointName;var r=e.queryArgs;return r.page,s(r,["page"]),{queryArgs:r}},forceRefetch:function(e){var r=e.currentArg,n=e.previousArg;if(!r||!n)return!0;r.page;var a=s(r,["page"]),c=(n.page,s(n,["page"]));return(0,t.A)(a,c)}}),fetchProductById:e.query({query:function(e){return{url:"".concat(i,"/").concat(e)}}}),fetchProductsByIds:e.query({query:function(e){return{url:"".concat(i),method:"POST",body:{ids:e}}}}),fetchProductsByCategory:e.query({query:function(e){return{url:"".concat(i).concat(o,"/").concat(e)}}})}}}),u=l.useFetchAllProductsQuery,d=l.useFetchProductByIdQuery,p=l.useFetchProductsByCategoryQuery;l.useFetchProductsByIdsQuery,l.useLazyFetchAllProductsQuery,l.useLazyFetchProductByIdQuery,l.useLazyFetchProductsByCategoryQuery,l.useLazyFetchProductsByIdsQuery},6327:(e,r,n)=>{function t(e,r){var n=Object.entries(e),t=Object.entries(r);if(n.length!==t.length)return!1;for(var a=0;a<n.length;++a)if(n[a][0]!==t[a][0]||n[a][1]!==t[a][1])return!1;return!0}n.d(r,{A:()=>t})},6359:(e,r,n)=>{n.d(r,{e:()=>t});var t=function(e){void 0===e&&(e="instant"),window.scrollTo({top:0,behavior:e})}}}]);