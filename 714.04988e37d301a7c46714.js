"use strict";(self.webpackChunkwebpack_react_ts_preset_1=self.webpackChunkwebpack_react_ts_preset_1||[]).push([[714],{413:(s,e,a)=>{a.d(e,{Y:()=>n});var r=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],n=function(s){var e=new Date(s),a=e.getDate(),n=r[e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(n,", ").concat(c)}},714:(s,e,a)=>{a.r(e),a.d(e,{default:()=>f});var r=a(848),n=a(303);var c=a(767),l=a(148),i=a(540),t=a(393),d=a(23),o=a(494),h=a(807),m=a(976);const u="yz7qBlEs",j=function(s){var e=s.hasCard;return(0,r.jsx)("div",{className:"lZWzD3U8",children:e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"elyNcX1X",children:"Завести карту"}),(0,r.jsx)("p",{className:u,children:"Ваша карта Doggo"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.N_,{to:"",className:"JorWgu27",children:"Завести карту"}),(0,r.jsx)("p",{className:u,children:"У вас еще нет карты Doggo"})]})})},x={userPersonalData:"NPWFx1FJ",name:"UNyu8E0b"};var N=a(413);const p=function(s){var e=s.user,a=(0,N.Y)(e.registrationDate);return(0,r.jsxs)("div",{className:x.userPersonalData,children:[(0,r.jsxs)("p",{className:x.name,children:[e.name," ",e.surname]}),(0,r.jsx)("p",{className:x.personalDataText,children:e.email}),(0,r.jsx)("p",{className:x.personalDataText,children:e.phone}),(0,r.jsxs)("p",{className:x.personalDataText,children:["В сообществе с ",a]})]})},g={sectionTitle:"c83_DvTG",galleryBlock:"M3MgKLms",imgWrap:"wuXhdGu7"},v=function(s){var e=s.userId,a=(0,d.XN)({id:e,limit:5}),n=a.data,c=a.isLoading,l=a.isError;return c?(0,r.jsx)(o.A,{}):l?(0,r.jsx)("p",{children:"Ошибка"}):n&&(0,r.jsx)("div",{className:g.communityInfo,children:(0,r.jsxs)("section",{className:g.gallery,children:[(0,r.jsx)("h2",{className:g.sectionTitle,children:"Ваша галерея"}),(0,r.jsx)("div",{className:g.galleryBlock,children:n.map((function(s){return(0,r.jsx)("div",{className:g.imgWrap,children:(0,r.jsx)("img",{src:s.imgLink,alt:"Изображение"})},s._id)}))})]})})},f=function(){var s=(0,c.Zp)(),e=(0,n.G)((function(s){return s.auth.userId}));if((0,i.useEffect)((function(){e||s("/".concat(l.Q.Signin))}),[e]),!e)return null;var a=(0,d.Dp)(e),m=a.data,u=a.isLoading,x=a.isError;return u?(0,r.jsx)(o.A,{}):x?(0,r.jsx)("p",{children:"Ошибка"}):m&&(0,r.jsx)(t.A,{children:(0,r.jsxs)("div",{className:"fd_INTh4",children:[(0,r.jsxs)("div",{className:"moMGtBe3",children:[(0,r.jsxs)("div",{className:"whviXukW",children:[(0,r.jsxs)("div",{className:"NlT_jIdn",children:[(0,r.jsx)("div",{className:"_8lrW2ts",children:(0,r.jsx)("div",{className:"jpqaP2_j",children:(0,r.jsx)(h.A,{})})}),(0,r.jsx)(p,{user:m})]}),(0,r.jsxs)("p",{className:"Gs7qjL3E",children:["@",m.login]})]}),(0,r.jsx)(j,{hasCard:m.hasCard})]}),(0,r.jsx)(v,{userId:e})]})})}}}]);