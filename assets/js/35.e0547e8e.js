(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{476:function(e,t,n){"use strict";var i=n(55),c=n(11),l=n(5),r=n(159),o=n(251),p=n(16),s=n(35),f=n(158),a=n(160),u=n(86),v=n(22),d=n(58),h=n(252),g=n(161),x=n(115),m=n(250),w=n(6),b=m.UNSUPPORTED_Y,_=Math.min,C=[].push,k=l(/./.exec),O=l(C),M=l("".slice);r("split",(function(e,t,n){var l;return l="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var l=v(s(this)),r=void 0===n?4294967295:n>>>0;if(0===r)return[];if(void 0===e)return[l];if(!o(e))return c(t,l,e,r);for(var p,f,a,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,m=new RegExp(e.source,d+"g");(p=c(x,m,l))&&!((f=m.lastIndex)>g&&(O(u,M(l,g,p.index)),p.length>1&&p.index<l.length&&i(C,u,h(p,1)),a=p[0].length,g=f,u.length>=r));)m.lastIndex===p.index&&m.lastIndex++;return g===l.length?!a&&k(m,"")||O(u,""):O(u,M(l,g)),u.length>r?h(u,0,r):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:c(t,this,e,n)}:t,[function(t,n){var i=s(this),r=null==t?void 0:d(t,e);return r?c(r,t,i,n):c(l,v(i),t,n)},function(e,i){var c=p(this),r=v(e),o=n(l,c,r,i,l!==t);if(o.done)return o.value;var s=f(c,RegExp),d=c.unicode,h=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(b?"g":"y"),x=new s(b?"^(?:"+c.source+")":c,h),m=void 0===i?4294967295:i>>>0;if(0===m)return[];if(0===r.length)return null===g(x,r)?[r]:[];for(var w=0,C=0,k=[];C<r.length;){x.lastIndex=b?0:C;var Q,y=g(x,b?M(r,C):r);if(null===y||(Q=_(u(x.lastIndex+(b?C:0)),r.length))===w)C=a(r,C,d);else{if(O(k,M(r,w,C)),k.length===m)return k;for(var I=1;I<=y.length-1;I++)if(O(k,y[I]),k.length===m)return k;C=w=Q}}return O(k,M(r,w)),k}]}),!!w((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),b)},570:function(e,t,n){},737:function(e,t,n){"use strict";n(570)},773:function(e,t,n){"use strict";n.r(t);n(39),n(476);var i={name:"index",data:function(){return{}},methods:{getFileType:function(e){var t=e.split(".");return t[t.length-1]},previewOffice:function(e){switch(this.getFileType(e)){case"doc":case"docx":case"xls":case"xlsx":case"ppt":case"pptx":window.open("https://view.officeapps.live.com/op/view.aspx?src=".concat(e));break;case"pdf":case"png":case"jpg":case"jpeg":default:window.open(e)}}}},c=(n(737),n(80)),l=Object(c.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[n("div",{staticClass:"demo-option"},[n("div",{staticClass:"demo-container"},[n("el-button",{on:{click:function(t){return e.previewOffice("https://dl-platform.effio.cn/3eCv1dMQ9v7/platform-app-inspect/1617258481275.doc")}}},[e._v("预览doc")]),e._v(" "),n("el-button",{on:{click:function(t){return e.previewOffice("https://dl-platform.effio.cn/3eCv1dMQ9v7/platform-app-inspect/1617258485689.docx")}}},[e._v("预览docx")]),e._v(" "),n("el-button",{on:{click:function(t){return e.previewOffice("https://dl-platform.effio.cn/3eCv1dMQ9v7/platform-app-inspect/1617258426666.xls")}}},[e._v("预览xls")]),e._v(" "),n("el-button",{on:{click:function(t){return e.previewOffice("https://dl-platform.effio.cn/3eCv1dMQ9v7/platform-app-inspect/1617258434014.xlsx")}}},[e._v("预览xlsx")]),e._v(" "),n("el-button",{on:{click:function(t){return e.previewOffice("https://dl-platform.effio.cn/3eCv1dMQ9v7/platform-app-inspect/1617258463291.ppt")}}},[e._v("预览ppt")]),e._v(" "),n("el-button",{on:{click:function(t){return e.previewOffice("https://dl-platform.effio.cn/3eCv1dMQ9v7/platform-app-inspect/1617258468365.pptx")}}},[e._v("预览pptx")]),e._v(" "),n("el-button",{on:{click:function(t){return e.previewOffice("https://dl-platform.effio.cn/3eCv1dMQ9v7/platform-app-inspect/1617258451264.pdf")}}},[e._v("预览pdf")])],1)])])}),[],!1,null,"aeb77236",null);t.default=l.exports}}]);