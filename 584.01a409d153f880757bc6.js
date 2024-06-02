"use strict";(self.webpackChunkwebpack_react_ts_preset_1=self.webpackChunkwebpack_react_ts_preset_1||[]).push([[584],{3913:(e,s,r)=>{r.d(s,{A:()=>t});var n=r(4848);const a={link:"WWbseSOQ",shadow:"qPf1KUkR",primary:"EhyyJqDL",filled:"yQYZSKm2",secondary:"AoChoFaF",outlined:"XGcduZrw",none:"xge20BlT"};var i=r(4976),c=function(){return c=Object.assign||function(e){for(var s,r=1,n=arguments.length;r<n;r++)for(var a in s=arguments[r])Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);return e},c.apply(this,arguments)};const t=function(e){var s=e.variant,r=void 0===s?"filled":s,t=e.color,o=void 0===t?"primary":t,l=e.shadow,d=void 0===l||l,m=e.icon,u=void 0===m?null:m,h=e.className,v=void 0===h?"":h,j=e.children,p=e.to,x=function(e,s){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&s.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)s.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["variant","color","shadow","icon","className","children","to"]);return(0,n.jsxs)(i.N_,c({to:p,className:[a.link,a[o],a[r],d&&a.shadow,v].join(" ")},x,{children:[u,j]}))}},2865:(e,s,r)=>{r.d(s,{A:()=>a});var n=r(4848);const a=function(){return(0,n.jsxs)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("title",{}),(0,n.jsx)("g",{"data-name":"Layer 2",id:"Layer_2",children:(0,n.jsx)("path",{d:"M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z"})})]})}},5898:(e,s,r)=>{r.d(s,{A:()=>a});var n=r(4848);const a=function(){return(0,n.jsxs)("svg",{viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("rect",{fill:"none",height:"256",width:"256"}),(0,n.jsx)("path",{d:"M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})}},1549:(e,s,r)=>{r.d(s,{L:()=>n});var n=[{name:"all",value:"Все"},{name:"food",value:"Корм и лакомства"},{name:"leashesAndCollars",value:"Поводки и ошейники"},{name:"toys",value:"Игрушки"},{name:"care",value:"Забота и уход"}]},6584:(e,s,r)=>{r.r(s),r.d(s,{default:()=>O});var n=r(4848),a=r(3393);var i=r(8023),c=r(7767),t=r(7494);const o=function(e){var s=e.parameters;return(0,n.jsx)(n.Fragment,{children:s&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h3",{className:"p1lurThx",children:"О товаре"}),(0,n.jsx)("table",{className:"Zw48htN4",children:(0,n.jsx)("tbody",{children:s.map((function(e){var s=e[0],r=e[1];return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:s}),(0,n.jsx)("td",{children:r})]},s)}))})})]})})};var l=r(6540);const d=(0,l.memo)((function(e){var s=e.name,r=e.description,a=e.parameters;return(0,n.jsxs)("div",{className:"info",children:[(0,n.jsx)("h2",{className:"zytTsttm",children:s}),(0,n.jsx)("p",{className:"AEFCXygE",children:r}),(0,n.jsx)(o,{parameters:a})]})}));var m=r(8324),u=r(2374);const h={cardDiscount:"ILn2ch5d",discount:"l4o6iGj9",cardDiscountLabel:"gp3bFFpm",priceWrap:"F8OUgpxD",price:"JA0mZAfK",priceWithoutCard:"aZlIduav",info:"BT18um1_",addBtn:"vxFgHL0V",cartLink:"bPeUlhbx",favouriteBtn:"b4_wPZrU",inFavourites:"yA_2BCMT",buttons:"Gu8vNs4k",deliveryInfo:"afVGV0aV",deliveryTitle:"chK9MyW0",setDataLink:"l_S39kvF",content:"nfSROruF"};var v=r(4303),j=r(9395),p=r(2865),x=r(3913),f=r(5898),N=r(1349),g=r(4976);const y=function(e){var s=e.product,r=(0,v.j)(),a=(0,v.G)((function(e){return e.cart.products})),i=(0,v.G)((function(e){return e.favourites.favourites})),c=a.some((function(e){return e._id===s._id})),t=.89*s.price;t=Number.isInteger(t)?t:+t.toFixed(1);var o=i.includes(s._id),l=[h.favouriteBtn,o?h.inFavourites:""].join(" ");return(0,n.jsx)("div",{className:h.order,children:(0,n.jsxs)("div",{className:h.content,children:[(0,n.jsxs)("div",{className:h.info,children:[(0,n.jsxs)("div",{className:h.cardDiscount,children:[(0,n.jsxs)("p",{className:h.discount,children:[t," ₽"]}),(0,n.jsx)("p",{className:h.cardDiscountLabel,children:"С картой YoDoggo"})]}),(0,n.jsxs)("div",{className:h.priceWrap,children:[(0,n.jsxs)("p",{className:h.price,children:[s.price," ₽"]}),(0,n.jsx)("p",{className:h.priceWithoutCard,children:"(Без карты)"})]}),(0,n.jsxs)("div",{className:h.buttons,children:[c?(0,n.jsxs)(x.A,{to:"/shop/cart",className:h.cartLink,children:["В корзине",(0,n.jsx)(p.A,{})]}):(0,n.jsx)(u.A,{className:h.addBtn,color:"secondary",variant:"filled",onClick:function(){r((0,j.Bj)(s))},children:"Добавить в корзину"}),(0,n.jsx)(u.A,{className:l,icon:(0,n.jsx)(f.A,{}),onClick:function(){r((0,N.n)(s._id))}})]})]}),(0,n.jsxs)("div",{className:h.deliveryInfo,children:[(0,n.jsx)("h4",{className:h.deliveryTitle,children:"Информация о доставке"}),(0,n.jsx)(g.N_,{to:"",className:h.setDataLink,children:"Укажите информацию о пункте получения, чтобы увидеть время и прочие данные"})]})]})})},b=function(e){var s=e.img;return(0,n.jsx)("div",{className:"db4fm7Xv",children:(0,n.jsx)("img",{src:s,alt:"Изображение товара"})})};var w=r(3880),_=r(2466);const A={similarProducts:"d1ePUZQL",more:"EVepJGK3",moreLabel:"ebl3_A_v"};var L=r(1549),k=r(5522);const C=function(e){var s=e.id,r=e.productCategory,a=(0,v.j)(),c=(0,i.Vf)(r),t=c.data,o=c.isLoading;return c.isError?(0,n.jsx)("p",{children:"Ошибка!"}):(0,n.jsxs)("div",{className:A.similar,children:[(0,n.jsx)("h2",{className:A.similarTitle,children:"Похожее"}),o&&(0,n.jsx)(_.A,{limit:10}),t&&(0,n.jsxs)("div",{className:A.similarProducts,children:[t.map((function(e){return e._id!==s&&(0,n.jsx)(w.A,{id:e._id,category:e.category,name:e.name,description:e.description,price:e.price,img:e.img},e._id)})),(0,n.jsxs)(g.N_,{to:"/shop",className:A.more,onClick:function(){var e=L.L.find((function(e){return e.name===r}));a((0,k.Fb)(e.name))},children:[(0,n.jsx)("p",{className:A.moreLabel,children:"Больше"}),(0,n.jsx)(p.A,{})]})]})]})},O=function(){var e,s,r=(0,c.g)().id,o=(0,i.d4)(r),u=o.data,h=o.isLoading,v=o.isError;e=[u],void 0===(s="smooth")&&(s="instant"),(0,l.useEffect)((function(){window.scrollTo({top:0,behavior:s})}),e);var j=(0,l.useMemo)((function(){return u?Object.entries(u.details).map((function(e){var s=e[0],r=e[1];return[m.SC[s]||s,r]})):[]}),[u]);return h?(0,n.jsx)(t.A,{}):v?(0,n.jsx)("p",{children:"Ошибка :("}):(0,n.jsx)(a.A,{children:u&&(0,n.jsxs)("div",{className:"gE_tyZu1",children:[(0,n.jsxs)("div",{className:"zOs4pByi",children:[(0,n.jsxs)("div",{className:"h3H3gmUB",children:[(0,n.jsx)(b,{img:u.img}),(0,n.jsx)(d,{name:u.name,description:u.description,parameters:j})]}),(0,n.jsx)(y,{product:u})]}),(0,n.jsx)(C,{id:u._id,productCategory:u.category})]})})}},3880:(e,s,r)=>{r.d(s,{A:()=>c});var n=r(4848),a=r(4976);var i=r(1549);const c=(0,r(6540).memo)((function(e){var s,r,c=e.id,t=e.name,o=e.category,l=e.description,d=e.price,m=e.img,u=(s=o,(r=i.L.find((function(e){return e.name===s})))?r.value:"другое");return(0,n.jsx)(a.N_,{to:"/shop/".concat(c),children:(0,n.jsxs)("div",{className:"suwGZlwT",children:[(0,n.jsxs)("div",{className:"TZUiCYt8",children:[(0,n.jsx)("p",{className:"e9MoX2IC",children:u}),(0,n.jsx)("img",{src:m,alt:"Обложка"})]}),(0,n.jsxs)("div",{className:"_bGspT5k",children:[(0,n.jsx)("p",{className:"InYorDwc",children:t}),(0,n.jsx)("p",{className:"CMLo1tra",children:l}),(0,n.jsxs)("p",{className:"YC_SocrO",children:[d," ₽"]})]})]})})}))},2466:(e,s,r)=>{r.d(s,{A:()=>a});var n=r(4848);const a=function(e){var s=e.limit,r=Array.from({length:s},(function(e,s){return(0,n.jsx)("div",{className:"KKSNkqYG"},s)}));return(0,n.jsx)("div",{className:"plQqWGqc",children:r})}}}]);