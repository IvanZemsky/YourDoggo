"use strict";(self.webpackChunkwebpack_react_ts_preset_1=self.webpackChunkwebpack_react_ts_preset_1||[]).push([[580],{3913:(e,a,s)=>{s.d(a,{A:()=>l});var r=s(4848);const n={link:"WWbseSOQ",shadow:"qPf1KUkR",primary:"EhyyJqDL",filled:"yQYZSKm2",secondary:"AoChoFaF",outlined:"XGcduZrw",none:"xge20BlT"};var c=s(4976),t=function(){return t=Object.assign||function(e){for(var a,s=1,r=arguments.length;s<r;s++)for(var n in a=arguments[s])Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);return e},t.apply(this,arguments)};const l=function(e){var a=e.variant,s=void 0===a?"filled":a,l=e.color,i=void 0===l?"primary":l,o=e.shadow,d=void 0===o||o,h=e.icon,u=void 0===h?null:h,j=e.className,x=void 0===j?"":j,m=e.children,p=e.to,v=function(e,a){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(s[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(s[r[n]]=e[r[n]])}return s}(e,["variant","color","shadow","icon","className","children","to"]);return(0,r.jsxs)(c.N_,t({to:p,className:[n.button,n[i],n[s],d&&n.shadow,x].join(" ")},v,{children:[u,m]}))}},2865:(e,a,s)=>{s.d(a,{A:()=>n});var r=s(4848);const n=function(){return(0,r.jsxs)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("title",{}),(0,r.jsx)("g",{"data-name":"Layer 2",id:"Layer_2",children:(0,r.jsx)("path",{d:"M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z"})})]})}},8413:(e,a,s)=>{s.d(a,{Y:()=>n});var r=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],n=function(e,a){var s=new Date(e),n=s.getDate(),c=s.getMonth(),t=s.getFullYear(),l=c<10?"0".concat(c+1):c+1,i=n<10?"0".concat(n):n;switch(a){case"text":return"".concat(n," ").concat(r[c],", ").concat(t);case"date":return"".concat(i,".").concat(l,".").concat(t)}}},1580:(e,a,s)=>{s.r(a),s.d(a,{default:()=>_});var r=s(4848),n=s(4303);var c=s(7767),t=s(148),l=s(6540),i=s(3393),o=s(8023),d=s(7494),h=s(4807),u=s(4976);const j="yz7qBlEs",x=function(e){var a=e.hasCard;return(0,r.jsx)("div",{className:"lZWzD3U8",children:a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"elyNcX1X",children:"Завести карту"}),(0,r.jsx)("p",{className:j,children:"Ваша карта Doggo"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.N_,{to:"",className:"JorWgu27",children:"Завести карту"}),(0,r.jsx)("p",{className:j,children:"У вас еще нет карты Doggo"})]})})},m={userPersonalData:"NPWFx1FJ",name:"UNyu8E0b"};var p=s(8413);const v=function(e){var a=e.user,s=(0,p.Y)(a.registrationDate,"text");return(0,r.jsxs)("div",{className:m.userPersonalData,children:[(0,r.jsxs)("p",{className:m.name,children:[a.name," ",a.surname]}),(0,r.jsx)("p",{className:m.personalDataText,children:a.email}),(0,r.jsx)("p",{className:m.personalDataText,children:a.phone}),(0,r.jsxs)("p",{className:m.personalDataText,children:["В сообществе с ",s]})]})},N={header:"NVNqGC64",sectionTitle:"c83_DvTG",galleryBlock:"M3MgKLms",imgWrap:"wuXhdGu7",allBtn:"d0v4Wpod"};var f=s(2374),g=s(3913),y=s(2865);const w=function(e){var a=e.userId,s=(0,o.XN)({id:a,limit:4}),n=s.data,c=s.isLoading,t=s.isError;return c?(0,r.jsx)(d.A,{}):t?(0,r.jsx)("p",{children:"Ошибка"}):n&&(0,r.jsx)("div",{className:N.communityInfo,children:(0,r.jsxs)("section",{className:N.gallery,children:[(0,r.jsxs)("header",{className:N.header,children:[(0,r.jsx)("h2",{className:N.sectionTitle,children:"Ваша галерея"}),(0,r.jsx)(f.A,{variant:"none",shadow:!1,children:"Понравившиеся"})]}),(0,r.jsxs)("div",{className:N.galleryBlock,children:[n.map((function(e){return(0,r.jsx)("div",{className:N.imgWrap,children:(0,r.jsx)("img",{src:e.imgLink,alt:"Изображение"})},e._id)})),(0,r.jsxs)(g.A,{to:"",className:N.allBtn,children:["Все",(0,r.jsx)(y.A,{})]})]})]})})},_=function(){var e=(0,c.Zp)(),a=(0,n.G)((function(e){return e.auth.userId}));if((0,l.useEffect)((function(){a||e("/".concat(t.Q.Signin))}),[a]),!a)return null;var s=(0,o.Dp)(a),u=s.data,j=s.isLoading,m=s.isError;return j?(0,r.jsx)(d.A,{}):m?(0,r.jsx)("p",{children:"Ошибка"}):u&&(0,r.jsx)(i.A,{children:(0,r.jsxs)("div",{className:"fd_INTh4",children:[(0,r.jsxs)("div",{className:"moMGtBe3",children:[(0,r.jsxs)("div",{className:"whviXukW",children:[(0,r.jsxs)("div",{className:"NlT_jIdn",children:[(0,r.jsx)("div",{className:"_8lrW2ts",children:(0,r.jsx)("div",{className:"jpqaP2_j",children:(0,r.jsx)(h.A,{})})}),(0,r.jsx)(v,{user:u})]}),(0,r.jsxs)("p",{className:"Gs7qjL3E",children:["@",u.login]})]}),(0,r.jsx)(x,{hasCard:u.hasCard})]}),(0,r.jsx)(w,{userId:a})]})})}}}]);