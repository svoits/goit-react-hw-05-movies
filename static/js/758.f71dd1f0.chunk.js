"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[758],{4387:function(e,r,n){n.r(r),n.d(r,{default:function(){return j}});var t,a,u,c,i=n(5861),o=n(9439),s=n(4687),p=n.n(s),f=n(8174),l=n(1362),h=n(2791),v=n(7689),d=n(9818),g=(n(5462),n(168)),b=n(5706),m=b.Z.ul(t||(t=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 15px;\n"]))),x=b.Z.li(a||(a=(0,g.Z)(["\n  padding: 10px;\n  background-color: #fde2f3;\n  border-radius: 10px;\n"]))),y=b.Z.h2(u||(u=(0,g.Z)(["\n  margin-bottom: 5px;\n"]))),w=b.Z.p(c||(c=(0,g.Z)(["\n  line-height: 1.3;\n"]))),Z=n(184),j=function(){var e=(0,v.UO)().movieId,r=(0,h.useState)([]),n=(0,o.Z)(r,2),t=n[0],a=n[1],u=(0,h.useState)(!1),c=(0,o.Z)(u,2),s=c[0],g=c[1],b=(0,h.useState)(null),j=(0,o.Z)(b,2),O=j[0],k=j[1],S=(0,h.useRef)();return(0,h.useEffect)((function(){var r=function(){var r=(0,i.Z)(p().mark((function r(){var n;return p().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return S.current&&S.current.abort(),S.current=new AbortController,r.prev=2,g(!0),k(null),r.next=7,(0,d.Jh)(e,S.current.signal);case 7:if(0!==(n=r.sent).length){r.next=10;break}return r.abrupt("return",f.Am.info("Sorry, there are no reviews for this movie yet.",{position:f.Am.POSITION.TOP_RIGHT}));case 10:a(n),k(null),r.next=17;break;case 14:r.prev=14,r.t0=r.catch(2),"ERR_CANCELED"!==r.t0.code&&k(r.t0.message);case 17:return r.prev=17,g(!1),r.finish(17);case 20:case"end":return r.stop()}}),r,null,[[2,14,17,20]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(f.Ix,{autoClose:2500}),s&&(0,Z.jsx)(l.Z,{}),O&&(0,Z.jsx)("p",{children:O}),!s&&t.length>0&&(0,Z.jsx)("div",{children:(0,Z.jsx)(m,{children:t.map((function(e){var r=e.id,n=e.author,t=e.content;return(0,Z.jsxs)(x,{children:[(0,Z.jsxs)(y,{children:["Author: ",n]}),(0,Z.jsx)(w,{children:t})]},r)}))})}),!s&&0===t.length&&(0,Z.jsx)("div",{children:"Sorry, there are no reviews for this movie yet."})]})}},9818:function(e,r,n){n.d(r,{Hg:function(){return o},IQ:function(){return f},Jh:function(){return l},TP:function(){return p},Wf:function(){return s}});var t=n(5861),a=n(4687),u=n.n(a),c=n(1243),i="4f3aaab7a430fc83aac7a26892b43341";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var e=(0,t.Z)(u().mark((function e(r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day",{signal:r,params:{api_key:i,language:"en-US"}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),s=function(){var e=(0,t.Z)(u().mark((function e(r,n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie",{signal:n,params:{api_key:i,language:"en-US",query:r,include_adult:!1,page:1}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(u().mark((function e(r,n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r),{signal:n,params:{api_key:i,language:"en-US"}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(r,n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r,"/credits"),{signal:n,params:{api_key:i,language:"en-US"}});case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(u().mark((function e(r,n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r,"/reviews"),{signal:n,params:{api_key:i,language:"en-US",page:1}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()},4942:function(e,r,n){n.d(r,{Z:function(){return a}});var t=n(9142);function a(e,r,n){return(r=(0,t.Z)(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}},1413:function(e,r,n){n.d(r,{Z:function(){return u}});var t=n(4942);function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}}}]);
//# sourceMappingURL=758.f71dd1f0.chunk.js.map