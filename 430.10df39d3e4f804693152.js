"use strict";(self.webpackChunkyourdoggo=self.webpackChunkyourdoggo||[]).push([[430],{3430:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n=r(4848),a=r(9785);const o="QhwWMwIR";var u=r(9913),s=r(9358),i=r(7767),c=r(4303),l=r(148),f=function(){return f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},f.apply(this,arguments)},p=l.Q.Forum;const g=function(){var e=(0,s.Nn)()[0],t=(0,i.Zp)(),r=(0,a.mN)(),l=r.register,g=r.handleSubmit,d=r.formState,m=(d.errors,d.isSubmitting),y=r.getValues,h=(0,c.G)((function(e){return e.auth.userId}));return(0,n.jsx)(u.mO,{additionalStyles:"Hk1stnvX",children:(0,n.jsxs)("form",{className:"HZjv2Awu",onSubmit:g((function(r){return n=void 0,a=void 0,u=function(){var r,n,a;return function(e,t){var r,n,a,o,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(i){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(u=0)),u;)try{if(r=1,n&&(a=2&s[0]?n.return:s[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,s[1])).done)return a;switch(n=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return u.label++,{value:s[1],done:!1};case 5:u.label++,n=s[1],s=[0];continue;case 7:s=u.ops.pop(),u.trys.pop();continue;default:if(!((a=(a=u.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){u=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){u.label=s[1];break}if(6===s[0]&&u.label<a[1]){u.label=a[1],a=s;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(s);break}a[2]&&u.ops.pop(),u.trys.pop();continue}s=t.call(e,u)}catch(e){s=[6,e],n=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}}(this,(function(o){switch(o.label){case 0:return r=y("title"),n=y("desc"),[4,e({userId:h,title:r,description:n})];case 1:return"data"in(a=o.sent())&&t("/".concat(p,"/").concat(a.data._id)),[2]}}))},new((o=void 0)||(o=Promise))((function(e,t){function r(e){try{i(u.next(e))}catch(e){t(e)}}function s(e){try{i(u.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(r,s)}i((u=u.apply(n,a||[])).next())}));var n,a,o,u})),children:[(0,n.jsx)(u.pd,f({placeholder:"Название статьи",className:o},l("title",{required:"Заголовок должен быть не менее 10 не более 70 символов",minLength:{value:10,message:"Заголовок должен быть не менее 10 не более 70 символов"},maxLength:{value:70,message:"Заголовок должен быть не менее 10 не более 70 символов"}}))),(0,n.jsx)("textarea",f({placeholder:"Описание",className:o},l("desc",{required:"Описание должно быть не менее 25 не более 200 символов",minLength:{value:25,message:"Описание должно быть не менее v не более 200 символов"},maxLength:{value:70,message:"Описание должно быть не менее 25 не более 200 символов"}}))),(0,n.jsx)(u.$n,{className:"rKst7kdm",disabled:m,type:"submit",children:"Отправить"})]})})}},9358:(e,t,r)=>{r.d(t,{Nn:()=>m,UF:()=>p,VP:()=>g,cL:()=>f,vb:()=>d});var n=r(8324),a=r(6327),o=r(8023),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},s=n.BH.FORUM,i=n.BH.COMMENTS,c=n.BH.CREATE,l=o.s.injectEndpoints({endpoints:function(e){return{fetchAllForumMessages:e.query({query:function(e){var t=e.page,r=e.limit,n=e.textQuery;return{url:"".concat(s),params:{sortByDate:!0,search:n,page:t,limit:r,userLogin:!0}}},transformResponse:function(e,t){var r,n,a=null===(n=null===(r=null==t?void 0:t.response)||void 0===r?void 0:r.headers)||void 0===n?void 0:n.get("X-Total-Count");return{data:e,totalCount:a?+a:1}},serializeQueryArgs:function(e){e.endpointName;var t=e.queryArgs;return t.page,u(t,["page"]),{queryArgs:t}},forceRefetch:function(e){var t=e.currentArg,r=e.previousArg;if(!t||!r)return!0;t.page;var n=u(t,["page"]),o=(r.page,u(r,["page"]));return(0,a.A)(n,o)}}),fetchForumMessageById:e.query({query:function(e){return{url:"".concat(s,"/").concat(e),params:{userLogin:!0}}}}),fetchForumCommentsByMessage:e.query({query:function(e){var t=e.id,r=e.page,n=e.limit;return{url:"".concat(s,"/").concat(t).concat(i),params:{limit:n,page:r,userLogin:!0}}},transformResponse:function(e,t){var r,n,a=null===(n=null===(r=null==t?void 0:t.response)||void 0===r?void 0:r.headers)||void 0===n?void 0:n.get("X-Total-Count");return{data:e,totalCount:a?+a:1}},serializeQueryArgs:function(e){var t=e.endpointName,r=e.queryArgs,n=(r.page,u(r,["page"]));return JSON.stringify(n)+t},merge:function(e,t,r){var n,a=r.arg,o=r.requestId;1===a.page?e.data=t.data:o&&(n=e.data).push.apply(n,t.data)},forceRefetch:function(e){var t=e.currentArg,r=e.previousArg;if(!t||!r)return!0;var n=t.page,o=u(t,["page"]),s=r.page,i=u(r,["page"]);return(0,a.A)(o,i)&&n!==s}}),createForumMessage:e.mutation({invalidatesTags:["ForumMessage"],query:function(e){return{url:"".concat(s).concat(c),method:"POST",body:e}}}),createForumComment:e.mutation({query:function(e){return{url:"".concat(s).concat(i).concat(c),method:"POST",body:e}}})}}}),f=l.useFetchAllForumMessagesQuery,p=l.useFetchForumMessageByIdQuery,g=l.useFetchForumCommentsByMessageQuery,d=l.useCreateForumCommentMutation,m=l.useCreateForumMessageMutation;l.useLazyFetchAllForumMessagesQuery,l.useLazyFetchForumCommentsByMessageQuery},6327:(e,t,r)=>{function n(e,t){var r=Object.entries(e),n=Object.entries(t);if(r.length!==n.length)return!1;for(var a=0;a<r.length;++a)if(r[a][0]!==n[a][0]||r[a][1]!==n[a][1])return!1;return!0}r.d(t,{A:()=>n})}}]);