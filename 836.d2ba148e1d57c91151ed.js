"use strict";(self.webpackChunkwebpack_react_ts_preset_1=self.webpackChunkwebpack_react_ts_preset_1||[]).push([[836],{77:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(4848),a=r(6540);const c={input:"qIxXL6mW"};var i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)};const o=(0,a.forwardRef)((function(e,t){var r=e.className,a=void 0===r?"":r,o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["className"]),l=[c.input,a].join(" ");return(0,n.jsx)("input",i({type:"text",className:l},o,{ref:t}))}))},1394:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(4848),a=r(2374);const c=function(e){var t=e.tag,r=e.handleRemove;return(0,n.jsx)(a.A,{className:"WDYhK9vV",onClick:r,children:t})};var i=r(9785),o=r(6540),l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},s=function(e,t,r){if(r||2===arguments.length)for(var n,a=0,c=t.length;a<c;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))};const u=function(e){var t=e.setItemList,r=(0,i.mN)(),a=r.register,u=r.getValues,f=r.resetField,p=(0,o.useState)([]),h=p[0],d=p[1];return(0,o.useEffect)((function(){t(h)}),[h]),(0,n.jsxs)("div",{className:"IQu64fxn",children:[!!h.length&&(0,n.jsx)(n.Fragment,{children:h.map((function(e,t){return(0,n.jsx)(c,{tag:e,handleRemove:(r=e,function(){d(h.filter((function(e){return e!==r})))})},e+t);var r}))}),(0,n.jsx)("input",l({type:"text"},a("tag",{required:!1,minLength:3,maxLength:25}),{onBlur:function(){var e=u("tag");e.trim().length&&(d(s(s([],h,!0),[e],!1)),f("tag"))},placeholder:"Тег"}))]})}},9726:(e,t,r)=>{r.d(t,{w:()=>c});var n=r(6540),a=r(7767),c=function(e,t,r){void 0===r&&(r=[]);var c=(0,a.Zp)();(0,n.useEffect)((function(){e||c(t)}),function(e,t,r){if(r||2===arguments.length)for(var n,a=0,c=t.length;a<c;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))}([e],r,!0))}},9836:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var n=r(4848),a=r(3393);const c={wrapper:"Xlx2KH49",content:"k1gr_uRn",title:"bPTSm7Ww",textWrap:"HkUw5Xe7",tagsWrap:"YMMMwa9r",input:"KvmgTSPk",error:"dczX35Bp",publish:"SWcLovCt"};var i=r(77),o=r(2374),l=r(3996),s=r(4303),u=r(148),f=r(9726),p=r(9785),h=r(7767),d=r(1394);const g={info:"mX13icG0",textWrap:"nWRr5Uza",panel:"SLR7Kvjr",textContent:"QnhpC4NW"};var v=r(6540);const y=function(){return(0,n.jsx)("textarea",{className:"Q6ksk8pf",placeholder:"Блок текста"})},m=function(){return(0,n.jsx)("input",{type:"text",className:"gMVGWigI",placeholder:"Заголовок"})},x=function(){var e=(0,v.useState)(""),t=e[0],r=e[1],a=(0,v.useState)(!1),c=a[0],i=a[1];return(0,n.jsxs)("div",{className:"AwlDxyMU",children:[(0,n.jsx)("input",{type:"text",placeholder:"Вставьте ссылку на изображение",value:t,onChange:function(e){r(e.target.value),i(!1)}}),t&&(0,n.jsx)("img",{src:t,alt:"Иллюстрация",onLoad:function(){i(!1)},onError:function(){i(!0)}}),c&&(0,n.jsx)("p",{children:"Ошибка загрузки изображения. Проверьте ссылку."})]})};var j=function(e,t,r){if(r||2===arguments.length)for(var n,a=0,c=t.length;a<c;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))};const b=(0,v.forwardRef)((function(e,t){var r=(0,v.useState)([]),a=r[0],c=r[1];return(0,n.jsxs)("div",{className:g.content,children:[(0,n.jsx)("p",{className:g.info,children:"Добавьте текст, загаловки и изображения"}),(0,n.jsxs)("div",{className:g.textWrap,children:[(0,n.jsxs)("div",{className:g.panel,children:[(0,n.jsx)(o.A,{title:"Текст",onClick:function(){c(j(j([],a,!0),[(0,n.jsx)(y,{},a.length)],!1))},children:"T"}),(0,n.jsx)(o.A,{title:"Заголовок",onClick:function(){c(j(j([],a,!0),[(0,n.jsx)(m,{},a.length)],!1))},children:"H"}),(0,n.jsx)(o.A,{title:"Изображение",onClick:function(){c(j(j([],a,!0),[(0,n.jsx)(x,{},a.length)],!1))},children:"IMG"})]}),(0,n.jsx)("div",{className:g.textContent,ref:t,children:a&&a.map((function(e){return e}))})]})]})}));var A=function(e){return e.replace(/[&<>"']/g,(function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]||e}))};console.log(A("<div>hi</div>"));var w=function(){return w=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},w.apply(this,arguments)},O=u.Q.Signin,N=u.Q.Articles;const k=function(){var e=(0,h.Zp)(),t=(0,p.mN)(),r=t.register,u=t.handleSubmit,g=t.formState,y=g.errors,m=g.isSubmitting,x=t.getValues,j=(0,l.jd)()[0],k=(0,s.G)((function(e){return e.auth.userId})),S=(0,v.useRef)(null),I=[];return(0,f.w)(!!k,"/".concat(O)),(0,n.jsx)(a.A,{additionalStyles:c.wrapper,children:(0,n.jsxs)("section",{className:c.content,children:[(0,n.jsx)("h1",{className:c.title,children:"Создание статьи"}),(0,n.jsxs)("form",{className:c.form,onSubmit:u((function(t){return r=void 0,n=void 0,c=function(){var t,r,n,a;return function(e,t){var r,n,a,c,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function o(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;c&&(c=0,o[0]&&(i=0)),i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}(this,(function(c){switch(c.label){case 0:return t=x("title"),r=x("imgLink"),n=function(e){var t="";if(e.current)for(var r=e.current.children,n=0;n<r.length;n++){var a=r[n];if("TEXTAREA"===a.tagName)t+="<p>".concat(A(a.value),"</p>");else if("INPUT"===a.tagName&&"text"===a.type)t+="<b>".concat(A(a.value),"</b>");else if("DIV"===a.tagName&&a.querySelector("img")){var c=a.querySelector("img");c&&(t+='<img src="'.concat(c.src,'" alt="').concat(A(c.alt),'"/>'))}}return console.log(t),t}(S),[4,j({userId:k,title:t,imgLink:r,tags:I,text:n})];case 1:return"data"in(a=c.sent())&&e("/".concat(N,"/").concat(a.data._id)),[2]}}))},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{l(c.next(e))}catch(e){t(e)}}function o(e){try{l(c.throw(e))}catch(e){t(e)}}function l(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(i,o)}l((c=c.apply(r,n||[])).next())}));var r,n,a,c})),children:[(0,n.jsx)(i.A,w({placeholder:"Название статьи",className:c.input},r("title",{required:"Заголовок должен быть не менее 10 не более 70 символов",minLength:{value:10,message:"Заголовок должен быть не менее 10 не более 70 символов"},maxLength:{value:70,message:"Заголовок должен быть не менее 10 не более 70 символов"}}))),(0,n.jsx)("p",{className:c.error,children:y.title&&"".concat(y.title.message)}),(0,n.jsx)(i.A,w({placeholder:"Картинка превью (ссылка)",className:c.input},r("imgLink",{required:"Это поле не должно быть пустым",minLength:1}))),(0,n.jsx)("p",{className:c.error,children:y.imgLink&&"".concat(y.imgLink.message)}),(0,n.jsx)(b,{ref:S}),(0,n.jsx)("p",{className:c.error,children:y.text&&"".concat(y.text.message)}),(0,n.jsx)(d.A,{setItemList:function(e){I=function(e,t,r){if(r||2===arguments.length)for(var n,a=0,c=t.length;a<c;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))}([],e,!0)}}),(0,n.jsx)(o.A,{type:"submit",className:c.publish,disabled:m,children:"Опубликовать"})]})]})})}},3996:(e,t,r)=>{r.d(t,{E6:()=>f,IP:()=>u,jd:()=>p});var n=r(8324),a=r(8023),c=r(6327),i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},o=n.BH.ARTICLES,l=n.BH.CREATE,s=a.s.injectEndpoints({endpoints:function(e){return{fetchAllArticles:e.query({query:function(e){var t=e.limit,r=e.page,n=e.userLogin,a=e.userId,c=e.authUserId,i=e.textQuery,l=e.liked;return{url:"".concat(o,"/?sortByDate=true"),method:"POST",params:{limit:t,page:r,userLogin:n,search:i,liked:l||"",userId:a},body:{authUserId:c||""}}},transformResponse:function(e,t){var r,n,a=null===(n=null===(r=null==t?void 0:t.response)||void 0===r?void 0:r.headers)||void 0===n?void 0:n.get("X-Total-Count");return{data:e,totalCount:a?+a:1}},serializeQueryArgs:function(e){e.endpointName;var t=e.queryArgs;return t.page,i(t,["page"]),{queryArgs:t}},forceRefetch:function(e){var t=e.currentArg,r=e.previousArg;if(!t||!r)return!0;t.page;var n=i(t,["page"]),a=(r.page,i(r,["page"]));return(0,c.A)(n,a)}}),fetchArticleById:e.query({query:function(e){var t=e.id,r=e.userLogin,n=e.authUserId;return{url:"".concat(o,"/").concat(t),method:"POST",params:{userLogin:r},body:{authUserId:n||""}}}}),createArticle:e.mutation({query:function(e){return{url:"".concat(o).concat(l),method:"POST",body:e}}})}}}),u=s.useFetchAllArticlesQuery,f=s.useFetchArticleByIdQuery,p=s.useCreateArticleMutation;s.useLazyFetchAllArticlesQuery,s.useLazyFetchArticleByIdQuery},6327:(e,t,r)=>{function n(e,t){var r=Object.entries(e),n=Object.entries(t);if(r.length!==n.length)return!1;for(var a=0;a<r.length;++a)if(r[a][0]!==n[a][0]||r[a][1]!==n[a][1])return!1;return!0}r.d(t,{A:()=>n})}}]);