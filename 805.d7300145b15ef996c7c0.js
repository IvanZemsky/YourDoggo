"use strict";(self.webpackChunkyourdoggo=self.webpackChunkyourdoggo||[]).push([[805],{5904:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(4848);var a=t(3393);const i=function(e){var n=e.input,t=e.children;return(0,r.jsx)("header",{className:"Kw0QhqY2",children:(0,r.jsx)(a.A,{children:(0,r.jsxs)("div",{className:"uMYuABUa",children:[n,(0,r.jsx)("div",{className:"bihhdsiy",children:t})]})})})}},2040:(e,n,t)=>{t.d(n,{A:()=>s});var r=t(4848);const a={wrap:"KhOtAWFz"};var i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},i.apply(this,arguments)};const s=function(e){var n=e.text,t=e.textStyle,s=e.className,o=e.handleClick,l=(e.defaultChecked,function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t}(e,["text","textStyle","className","handleClick","defaultChecked"]));return(0,r.jsxs)("div",{className:[a.wrap,s].join(" "),children:[(0,r.jsx)("input",i({className:a.check,type:"checkbox"},l)),(0,r.jsx)("label",{className:t,htmlFor:l.id,onClick:o,children:n})]})}},8699:(e,n,t)=>{t.d(n,{A:()=>d});var r=t(4848),a=t(780),i=t(5898),s=t(6540),o=t(9164),l=t(8788),c=t(4303),u=function(){return u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},u.apply(this,arguments)};const d=function(e){var n=e.isLiked,t=e.likedItemId,d=(e.className,e.unlikedStyles),f=e.likedStyles,h=e.endpoint,p=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t}(e,["isLiked","likedItemId","className","unlikedStyles","likedStyles","endpoint"]),v=(0,c.G)((function(e){return e.auth.userId})),g=(0,l.p)(t,v,n,h),y=g.toggleLike,m=g.liked,j=(0,s.useCallback)((function(e){return n=void 0,t=void 0,a=function(){return function(e,n){var t,r,a,i,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(o){return function(l){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,o[0]&&(s=0)),s;)try{if(t=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((a=(a=s.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){s.label=o[1];break}if(6===o[0]&&s.label<a[1]){s.label=a[1],a=o;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(o);break}a[2]&&s.ops.pop(),s.trys.pop();continue}o=n.call(e,s)}catch(e){o=[6,e],r=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}(this,(function(n){switch(n.label){case 0:return e.stopPropagation(),e.preventDefault(),v?[4,y()]:[2];case 1:return n.sent(),[2]}}))},new((r=void 0)||(r=Promise))((function(e,i){function s(e){try{l(a.next(e))}catch(e){i(e)}}function o(e){try{l(a.throw(e))}catch(e){i(e)}}function l(n){var t;n.done?e(n.value):(t=n.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,o)}l((a=a.apply(n,t||[])).next())}));var n,t,r,a}),[]),x=(0,o.p)(m,d,f);return(0,r.jsx)(a.A,u({variant:"none",onClick:j,className:x},p,{children:(0,r.jsx)(i.A,{})}))}},2995:(e,n,t)=>{t.d(n,{A:()=>s});var r=t(4848),a=t(4303),i=t(8788);const s=function(e){var n=e.id,t=e.likes,s=e.isLiked,o=e.endpoint,l=e.className,c=(0,a.G)((function(e){return e.auth.userId})),u=(0,i.p)(n,c,s,o).like,d=u?u.likes:t;return(0,r.jsx)("p",{className:l,children:d})}},3136:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(4848);const a={modal:"a9AN6Ppf"};var i=t(961),s=t(4303),o=t(5880),l=function(){return l=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},l.apply(this,arguments)};const c=function(e){var n=e.modalContent,t=e.className,c=e.children,u=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t}(e,["modalContent","className","children"]),d=function(e){var n=(0,s.G)((function(e){return e.modalSlice.opened}))===e,t=window.scrollY;return(0,o.M)(window,"scroll",(function(){scrollTo({top:t})}),n,[n,e]),n}(n);return d?(0,i.createPortal)((0,r.jsx)("div",l({className:[a.modal,t].join(" ")},u,{children:c})),document.getElementById("modal")):null}},3429:(e,n,t)=>{t.d(n,{A:()=>l});var r=t(4848),a=t(4303),i=t(780);const s=function(){return(0,r.jsxs)("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("title",{}),(0,r.jsx)("path",{d:"M456.69,421.39,362.6,327.3a173.81,173.81,0,0,0,34.84-104.58C397.44,126.38,319.06,48,222.72,48S48,126.38,48,222.72s78.38,174.72,174.72,174.72A173.81,173.81,0,0,0,327.3,362.6l94.09,94.09a25,25,0,0,0,35.3-35.3ZM97.92,222.72a124.8,124.8,0,1,1,124.8,124.8A124.95,124.95,0,0,1,97.92,222.72Z"})]})};var o=t(6540);const l=(0,o.memo)((function(e){var n=e.dispatchFunc,t=e.defaultValue,l=void 0===t?"":t,c=(0,a.j)(),u=(0,o.useState)(l),d=u[0],f=u[1];return(0,o.useEffect)((function(){f(l)}),[l]),(0,r.jsxs)("div",{className:"GY_Ndh9z",children:[(0,r.jsx)("input",{type:"text",className:"xe0Pw4gw",onChange:function(e){f(e.target.value)},value:d,placeholder:"Поиск"}),(0,r.jsx)(i.A,{variant:"outlined",icon:(0,r.jsx)(s,{}),className:"owRk9PLZ",onClick:function(){c(n(d))}})]})}))},1796:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(4848),a=t(780);const i=function(e){var n=e.tags,t=e.handleTagClick;return(0,r.jsx)(r.Fragment,{children:n.map((function(e,n){return(0,r.jsx)(a.A,{variant:"filled",className:"i8AxVFnz",onClick:t&&t(e),children:e},n)}))})}},5898:(e,n,t)=>{t.d(n,{A:()=>a});var r=t(4848);const a=function(){return(0,r.jsxs)("svg",{viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("rect",{fill:"none",height:"256",width:"256"}),(0,r.jsx)("path",{d:"M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})}},2226:(e,n,t)=>{t.d(n,{A:()=>a});var r=t(4848);const a=function(){return(0,r.jsxs)("svg",{viewBox:"0 0 68 68",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M0 34C0 31.7909 1.79086 30 4 30H64C66.2091 30 68 31.7909 68 34C68 36.2091 66.2091 38 64 38H4C1.79086 38 0 36.2091 0 34Z"}),(0,r.jsx)("path",{d:"M34 68C31.7909 68 30 66.2091 30 64V4C30 1.79086 31.7909 0 34 0C36.2091 0 38 1.79086 38 4V64C38 66.2091 36.2091 68 34 68Z"})]})}},29:(e,n,t)=>{t.d(n,{B:()=>i});var r=t(6540),a={threshold:.7},i=function(e,n,t){void 0===t&&(t=a);var i=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&n()}))}),t);(0,r.useEffect)((function(){return e.current&&i.observe(e.current),function(){i.disconnect()}}),[e,n])}},6149:(e,n,t)=>{t.d(n,{p:()=>o});var r=t(148),a=t(4303),i=r.Q.User,s=r.Q.Profile,o=function(e){return(0,a.G)((function(e){return e.auth.userId}))===e?"/".concat(s):"/".concat(i,"/").concat(e)}},6805:(e,n,t)=>{t.r(n),t.d(n,{default:()=>Y});var r=t(4848),a=t(3393);var i=t(3049),s=t(6540),o=t(4303),l=t(1757),c=t(3136);const u={imageModal:"ZMct_6RL",fadeIn:"evFwfH6q",content:"LJ7fbD_w",imageInfo:"Urr0nxpy",header:"JrIFODUZ",headerBtns:"ByTNjh0w",user:"bLmQM_Wf",likes:"SH56KZXv",likeBtn:"yETy5U8g",liked:"Wgx5oRDe",closeBtn:"bF5eh0L4",imgWrap:"bNCsANCL",titleWrap:"x64rSihh",title:"mLno7j0_",publiches:"ZWUsa8u9",tags:"aMmGufKi"};var d=t(4976),f=t(780);const h=function(){return(0,r.jsxs)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M1.12129 36.4766C-0.0502785 35.3051 -0.0502784 33.4056 1.12129 32.234L32.234 1.12129C33.4056 -0.0502778 35.3051 -0.0502788 36.4766 1.12129C37.6482 2.29287 37.6482 4.19236 36.4766 5.36393L5.36393 36.4766C4.19236 37.6482 2.29287 37.6482 1.12129 36.4766Z"}),(0,r.jsx)("path",{d:"M1.21325 1.21317C2.38482 0.0416008 4.28432 0.0416009 5.45589 1.21317L36.5686 32.3259C37.7402 33.4974 37.7402 35.3969 36.5686 36.5685C35.397 37.7401 33.4975 37.7401 32.3259 36.5685L1.21325 5.45581C0.0416757 4.28424 0.0416756 2.38475 1.21325 1.21317Z"})]})};var p=t(148),v=t(1796),g=t(8699),y=t(8324),m=t(2995),j=t(9377),x=y.BH.GALLERY,k=p.Q.User;const b=function(e){var n=e.id,t=e.title,p=e.tags,y=e.userId,b=e.imgLink,w=e.datetime,O=e.login,I=e.likes,N=e.isLiked,A=(0,o.j)(),C="imageModal".concat(n),L=(0,i.Y)(w,"text").split(",").join(""),S=(0,s.useCallback)((function(e){e.stopPropagation(),A((0,l.Oo)())}),[]);return(0,r.jsx)(c.A,{modalContent:C,className:u.imageModal,onClick:S,children:(0,r.jsx)(a.A,{children:(0,r.jsx)("div",{className:u.content,onClick:function(e){e.stopPropagation()},children:(0,r.jsxs)("div",{className:u.imageInfo,children:[(0,r.jsxs)("header",{className:u.header,children:[(0,r.jsxs)(d.N_,{to:"/".concat(k,"/").concat(y),className:u.user,children:["@ ",O]}),(0,r.jsxs)("div",{className:u.headerBtns,children:[(0,r.jsx)(m.A,{className:u.likes,id:n,likes:I,isLiked:N,endpoint:x}),(0,r.jsx)(g.A,{likedItemId:n,isLiked:N,endpoint:x,likedStyles:u.liked,unlikedStyles:u.likeBtn}),(0,r.jsx)(f.A,{variant:"none",icon:(0,r.jsx)(h,{}),className:u.closeBtn,onClick:S})]})]}),(0,r.jsx)("div",{className:u.imgWrap,children:(0,r.jsx)("img",{src:b,alt:"Изображение"})}),(0,r.jsxs)("div",{className:u.desc,children:[(0,r.jsxs)("div",{className:u.titleWrap,children:[t&&(0,r.jsx)("h3",{className:u.title,children:t}),(0,r.jsxs)("p",{className:u.published,children:["Опубликовано ",L," года"]})]}),!!p.length&&(0,r.jsx)("div",{className:u.tags,children:(0,r.jsx)(v.A,{tags:p,handleTagClick:function(e){return function(n){A((0,l.Oo)()),A((0,j.Ud)(e))}}})})]})]})})})})};var w=t(6149),O=function(){return O=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},O.apply(this,arguments)},I=y.BH.GALLERY;const N=function(e){var n=e.id,t=e.title,a=e.imgLink,c=e.datetime,u=e.userId,f=e.login,h=e.isLiked,p=e.hasModal,v=void 0===p||p,y=(0,o.j)(),m=(0,s.useState)(""),j=m[0],x=m[1],k="imageModal".concat(n),N=(0,w.p)(u),A=(0,i.Y)(c,"text"),C=(0,s.useCallback)((function(e){e.target instanceof HTMLAnchorElement||y((0,l.qf)(k))}),[]);return(0,r.jsxs)("div",{className:"zwWu6DWA",onClick:v?C:void 0,children:[(0,r.jsxs)("div",{className:"q5pBEzec",children:[f&&(0,r.jsxs)(d.N_,{to:N,className:"WHHYoXgg",children:["@",f]}),(0,r.jsx)(g.A,{likedItemId:n,endpoint:I,isLiked:h,likedStyles:"PkxF6PPD",unlikedStyles:"lVk6SPCD"}),(0,r.jsx)(b,O({},e))]}),(0,r.jsx)("img",{src:a,alt:t,className:j,onLoad:function(){x("Ia3SjXf5")}}),(0,r.jsxs)("div",{className:"UE6xMsni",children:[(0,r.jsx)("div",{className:"KGpFM3Ay",children:A}),(0,r.jsx)("p",{className:"_rnsHZji",children:t})]})]})};var A=t(7494),C=t(4833),L=function(){return L=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},L.apply(this,arguments)},S=t(29),P=function(){return P=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},P.apply(this,arguments)};const G=function(){var e,n,t=(e=(0,o.G)((function(e){return e.galleryFilter})),n=(0,o.G)((function(e){return e.auth.userId})),(0,C.VL)(L(L({},e),{authUserId:n}))),a=t.data,i=t.isLoading,l=t.isFetching,c=t.isError,u=(0,o.j)(),d=null==a?void 0:a.data,f=null==a?void 0:a.totalCount,h=(0,o.G)((function(e){return e.galleryFilter.limit}))||12,p=(0,o.G)((function(e){return e.galleryFilter.page}))||1,v=(0,s.useRef)(null),g=Math.ceil(f/h)<=p;return(0,S.B)(v,(function(){g||u((0,j.Ir)())})),c?(0,r.jsx)("p",{children:"Ошибка"}):(i||l)&&1===p?(0,r.jsx)(A.A,{}):(0,r.jsx)(s.Fragment,{children:(0,r.jsxs)("div",{className:"Iq2X_ZZS",children:[(null==d?void 0:d.length)?(0,r.jsx)("div",{className:"IVcZorXz",children:d.map((function(e){return(0,r.jsx)(N,P({id:e._id},e),e._id)}))}):(0,r.jsx)("p",{children:"Ничего не найдено"}),(i||l)&&1!==p?(0,r.jsx)("div",{className:"_0QH8_sgj",children:(0,r.jsx)(A.A,{})}):(0,r.jsx)("div",{ref:v,className:"Ra7IKZV3"})]})})};var B=t(5904),E=t(3429),M=t(2040),F=t(488),Q=t(3913),Z=t(2226),H=t(6231);const R="tVPQk8RD";var T=p.Q.Gallery,U=p.Q.Create;const W=function(){var e=(0,o.j)(),n=(0,H.Ub)({maxWidth:950}),t=(0,o.G)((function(e){return e.auth.userId})),a=(0,o.G)((function(e){return e.galleryFilter.userId})),i=(0,o.G)((function(e){return e.galleryFilter.liked})),l=a===t,c=""!==a&&!l;return(0,r.jsxs)(F.A,{isOpen:n,children:[!!t&&(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)(M.A,{className:R,text:"Понравишиеся",handleClick:function(){e((0,j.ow)())},name:"filters",id:"liked",checked:i,readOnly:!0}),(0,r.jsx)(M.A,{className:R,text:c?"Все фото":"Ваша галерея",handleClick:function(){e((0,j.JN)(t))},name:"filters",id:"your-gallery",checked:l,readOnly:!0})]}),(0,r.jsx)(Q.A,{to:"/".concat(T,"/").concat(U),icon:(0,r.jsx)(Z.A,{}),className:"ohpM3WQh",children:"Добавить"})]})},q=function(){return(0,r.jsx)(B.A,{input:(0,r.jsx)(E.A,{dispatchFunc:j.Ud}),children:(0,r.jsx)(W,{})})},Y=function(){return(0,r.jsxs)("div",{className:"Q4jgJvSa",children:[(0,r.jsx)(q,{}),(0,r.jsx)(a.A,{children:(0,r.jsx)(G,{})})]})}},4833:(e,n,t)=>{t.d(n,{VL:()=>u,g0:()=>d});var r=t(6327),a=t(8023),i=t(8324),s=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},o=i.BH.GALLERY,l=i.BH.CREATE,c=a.s.injectEndpoints({endpoints:function(e){return{fetchAllGalleryImages:e.query({query:function(e){var n=e.limit,t=e.page,r=e.userLogin,a=e.userId,i=e.authUserId,s=e.textQuery,l=e.liked;return{url:"".concat(o),method:"POST",params:{sortByDate:!0,limit:n,page:t,userLogin:r,search:s,liked:l||"",userId:a},body:{authUserId:i}}},transformResponse:function(e,n){var t,r,a=null===(r=null===(t=null==n?void 0:n.response)||void 0===t?void 0:t.headers)||void 0===r?void 0:r.get("X-Total-Count");return{data:e,totalCount:a?+a:1}},serializeQueryArgs:function(e){var n=e.endpointName,t=e.queryArgs,r=(t.page,s(t,["page"]));return JSON.stringify(r)+n},merge:function(e,n,t){var r,a=t.arg,i=t.requestId;1===a.page?e.data=n.data:i&&(r=e.data).push.apply(r,n.data)},forceRefetch:function(e){var n=e.currentArg,t=e.previousArg;if(!n||!t)return!0;var a=n.page,i=s(n,["page"]),o=t.page,l=s(t,["page"]);return(0,r.A)(i,l)&&a!==o}}),fetchGalleryImageById:e.query({query:function(e){return{url:"".concat(o,"/").concat(e)}}}),createGalleryImg:e.mutation({query:function(e){return{url:"".concat(o).concat(l),method:"POST",body:e}}})}}}),u=c.useFetchAllGalleryImagesQuery,d=(c.useFetchGalleryImageByIdQuery,c.useCreateGalleryImgMutation);c.useLazyFetchAllGalleryImagesQuery,c.useLazyFetchGalleryImageByIdQuery},8788:(e,n,t)=>{t.d(n,{p:()=>d});var r=t(8324),a=t(8023),i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},i.apply(this,arguments)},s=r.BH.ARTICLES,o=r.BH.GALLERY,l=r.BH.LIKES,c=a.s.injectEndpoints({endpoints:function(e){return{toggleLike:e.mutation({query:function(e){var n=e.userId,t=e.likedItemId,r=e.endpoint;return{url:"".concat(r).concat(l),method:"POST",body:i(i({userId:n},r===s&&{articleId:t}),r===o&&{galleryimgId:t})}}})}}}).useToggleLikeMutation,u=t(6540),d=function(e,n,t,r){var a=c({fixedCacheKey:r+e}),i=a[0],s=a[1].data,o={userId:n||"",likedItemId:e,endpoint:r},l=(0,u.useState)(t),d=l[0],f=l[1];return(0,u.useEffect)((function(){s&&f(s.liked)}),[s]),{toggleLike:function(){return i(o)},liked:d,like:s}}},6327:(e,n,t)=>{function r(e,n){var t=Object.entries(e),r=Object.entries(n);if(t.length!==r.length)return!1;for(var a=0;a<t.length;++a)if(t[a][0]!==r[a][0]||t[a][1]!==r[a][1])return!1;return!0}t.d(n,{A:()=>r})},3049:(e,n,t)=>{t.d(n,{Y:()=>a});var r=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],a=function(e,n){var t=new Date(e),a=t.getDate(),i=t.getMonth(),s=t.getFullYear(),o=i<10?"0".concat(i+1):i+1,l=a<10?"0".concat(a):a;switch(n){case"text":return"".concat(a," ").concat(r[i],", ").concat(s);case"date":return"".concat(l,".").concat(o,".").concat(s)}}}}]);