(window.webpackJsonp=window.webpackJsonp||[]).push([[22,33],{476:function(t,e,a){"use strict";var i=a(55),n=a(11),s=a(5),r=a(159),c=a(251),l=a(16),o=a(35),p=a(158),u=a(160),m=a(86),d=a(22),g=a(58),f=a(252),v=a(161),h=a(115),x=a(250),b=a(6),k=x.UNSUPPORTED_Y,C=Math.min,_=[].push,y=s(/./.exec),L=s(_),w=s("".slice);r("split",(function(t,e,a){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var s=d(o(this)),r=void 0===a?4294967295:a>>>0;if(0===r)return[];if(void 0===t)return[s];if(!c(t))return n(e,s,t,r);for(var l,p,u,m=[],g=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,x=new RegExp(t.source,g+"g");(l=n(h,x,s))&&!((p=x.lastIndex)>v&&(L(m,w(s,v,l.index)),l.length>1&&l.index<s.length&&i(_,m,f(l,1)),u=l[0].length,v=p,m.length>=r));)x.lastIndex===l.index&&x.lastIndex++;return v===s.length?!u&&y(x,"")||L(m,""):L(m,w(s,v)),m.length>r?f(m,0,r):m}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:n(e,this,t,a)}:e,[function(e,a){var i=o(this),r=null==e?void 0:g(e,t);return r?n(r,e,i,a):n(s,d(i),e,a)},function(t,i){var n=l(this),r=d(t),c=a(s,n,r,i,s!==e);if(c.done)return c.value;var o=p(n,RegExp),g=n.unicode,f=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(k?"g":"y"),h=new o(k?"^(?:"+n.source+")":n,f),x=void 0===i?4294967295:i>>>0;if(0===x)return[];if(0===r.length)return null===v(h,r)?[r]:[];for(var b=0,_=0,y=[];_<r.length;){h.lastIndex=k?0:_;var $,N=v(h,k?w(r,_):r);if(null===N||($=C(m(h.lastIndex+(k?_:0)),r.length))===b)_=u(r,_,g);else{if(L(y,w(r,b,_)),y.length===x)return y;for(var U=1;U<=N.length-1;U++)if(L(y,N[U]),y.length===x)return y;_=b=$}}return L(y,w(r,b)),y}]}),!!b((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]})),k)},482:function(t,e,a){},504:function(t,e,a){"use strict";a(482)},558:function(t,e,a){},580:function(t,e,a){"use strict";a.r(e);var i=a(83),n=(a(150),a(243),a(56),a(17),a(39),a(476),a(112),a(253),a(59),a(247),{name:"upload",props:{list:{type:Array,default:function(){return[]}},accepts:{type:String,default:"image"},num:{type:Number,default:3},complex:{type:Boolean,default:!0},distinguish:{type:Boolean,default:!1},limist:{type:Number,default:2},imgName:{type:Number,default:20},captureCamera:{type:String,default:""}},data:function(){return{imgList:[],imgListData:[],imgData:"",imagesData:"",fileData:""}},components:{},mounted:function(){},methods:{removeImg:function(t){this.imgList=this.imgList.filter((function(e){return t.id!==e.id})),this.$emit("change",this.imgList)},applicationFun:function(t){var e=t.name.split("."),a=e[e.length-1];if("xlsx"==a||"docx"==a||"doc"==a||"pdf"==a||"xls"==a||"ppt"==a||"pptx"==a)return!0},attApplicationFun:function(t){if("application/msword"==t.type||"application/vnd.openxmlformats-officedocument.wordprocessingml.document"==t.type||"application/vnd.openxmlformats-officedocument.presentationml.presentation"==t.type||"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"==t.type||"application/vnd.ms-powerpoint"==t.type||"application/vnd.ms-excel"==t.type||"application/pdf"==t.type||"image/png"==t.type||"image/jpeg"==t.type)return!0},videoFun:function(t){if("video/mp4"==t.type)return!0},fileUpload:function(t){var e=this;return Object(i.a)(regeneratorRuntime.mark((function a(){var i,n,s,r,c,l,o,p;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,e.distinguish||(e.imgList=[]),1!=t.target.files.length){a.next=55;break}if(i=t.target.files[0],n=i.size/1024/1024<e.limist,console.log(n),"application"!=e.accepts){a.next=17;break}if(!e.applicationFun(i)){a.next=14;break}if(!(i.name.split(".").slice(0,-1).join("").length>e.imgName)){a.next=12;break}return e.$toast("上传文件名不能超过".concat(e.imgName,"字符")),t.target.value="",a.abrupt("return");case 12:a.next=17;break;case 14:return e.$toast("上传文件格式不正确"),t.target.value="",a.abrupt("return");case 17:if("attApplication"!=e.accepts){a.next=28;break}if(!e.attApplicationFun(i)){a.next=25;break}if(!(i.name.split(".").slice(0,-1).join("").length>e.imgName)){a.next=23;break}return e.$toast("上传文件名不能超过".concat(e.imgName,"字符")),t.target.value="",a.abrupt("return");case 23:a.next=28;break;case 25:return e.$toast("上传文件格式不正确"),t.target.value="",a.abrupt("return");case 28:if("video"!=e.accepts){a.next=39;break}if(!e.videoFun(i)){a.next=36;break}if(!(i.name.split(".").slice(0,-1).join("").length>e.imgName)){a.next=34;break}return e.$toast("上传文件名不能超过".concat(e.imgName,"字符")),t.target.value="",a.abrupt("return");case 34:a.next=39;break;case 36:return e.$toast("上传文件格式不正确"),t.target.value="",a.abrupt("return");case 39:if(n){a.next=43;break}return e.$toast("上传文件大小不能超过".concat(e.limist,"M!")),t.target.value="",a.abrupt("return");case 43:if(!(e.imgList.length>=e.num)){a.next=48;break}e.$toast("上传文件数量不能超过".concat(e.num,"个")),t.target.value="",a.next=53;break;case 48:return a.next=50,e.readasbase64(i);case 50:s=a.sent,e.imgList.push({src:s.result,file:i,id:"",size:i.size,name:i.name}),t.target.value="";case 53:a.next=115;break;case 55:if(!(t.target.files.length>1)){a.next=115;break}r=t.target.files,c=0;case 58:if(!(c<r.length)){a.next=99;break}if(!(r[c].size/1024/1024>e.limist)){a.next=63;break}return e.$toast("上传大小大小不能超过".concat(e.limist,"M!")),t.target.value="",a.abrupt("return");case 63:if("application"!=e.accepts){a.next=74;break}if(!e.applicationFun(r[c])){a.next=71;break}if(!(r[c].name.split(".").slice(0,-1).join("").length>e.imgName)){a.next=69;break}return e.$toast("第".concat(c,"个文件名不能超过").concat(e.imgName,"字符")),t.target.value="",a.abrupt("return");case 69:a.next=74;break;case 71:return e.$toast("上传文件格式不正确"),t.target.value="",a.abrupt("return");case 74:if("attApplication"!=e.accepts){a.next=85;break}if(!e.attApplicationFun(r)){a.next=82;break}if(!(r.name.split(".").slice(0,-1).join("").length>e.imgName)){a.next=80;break}return e.$toast("上传文件名不能超过".concat(e.imgName,"字符")),t.target.value="",a.abrupt("return");case 80:a.next=85;break;case 82:return e.$toast("上传文件格式不正确"),t.target.value="",a.abrupt("return");case 85:if("video"!=e.accepts){a.next=96;break}if(!e.videoFun(r[c])){a.next=93;break}if(!(r[c].name.split(".").slice(0,-1).join("").length>e.imgName)){a.next=91;break}return e.$toast("上传文件名不能超过".concat(e.imgName,"字符")),t.target.value="",a.abrupt("return");case 91:a.next=96;break;case 93:return e.$toast("上传文件格式不正确"),t.target.value="",a.abrupt("return");case 96:c++,a.next=58;break;case 99:if(!(e.imgList.length+t.target.files.length>e.num)){a.next=104;break}e.$toast("上传文件数量不能超过".concat(e.num,"个")),t.target.value="",a.next=115;break;case 104:l=0;case 105:if(!(l<r.length)){a.next=114;break}return o=r[l],a.next=109,e.readasbase64(o);case 109:p=a.sent,e.imgList.push({src:p.result,file:o,id:"",size:o.size,name:o.name});case 111:l++,a.next=105;break;case 114:t.target.value="";case 115:e.$emit("change",e.imgList),a.next=121;break;case 118:a.prev=118,a.t0=a.catch(0),console.log("图片上传",a.t0);case 121:case"end":return a.stop()}}),a,null,[[0,118]])})))()},readasbase64:function(t){return new Promise((function(e,a){var i=new FileReader;i.onload=function(){e(i)},i.readAsDataURL(t)}))}},watch:{list:{handler:function(t){this.imgList=t},immediate:!0,deep:!0}}}),s=(a(504),a(80)),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"upload-box"},["image"!=t.accepts||t.complex||t.captureCamera?t._e():a("input",{staticClass:"upload-input",attrs:{type:"file",accept:"image/*",multiple:"",title:""},on:{change:t.fileUpload}}),t._v(" "),"image"==t.accepts&&t.complex&&!t.captureCamera?a("input",{staticClass:"upload-input",attrs:{type:"file",accept:"image/*",title:""},on:{change:t.fileUpload}}):t._e(),t._v(" "),"image"==t.accepts&&!t.complex&&t.captureCamera?a("input",{staticClass:"upload-input",attrs:{type:"file",accept:"image/*",capture:t.captureCamera,multiple:"",title:""},on:{change:t.fileUpload}}):t._e(),t._v(" "),"image"==t.accepts&&t.complex&&t.captureCamera?a("input",{staticClass:"upload-input",attrs:{type:"file",accept:"image/*",capture:t.captureCamera,title:""},on:{change:t.fileUpload}}):t._e(),t._v(" "),"attApplication"!=t.accepts||t.complex?t._e():a("input",{staticClass:"upload-input",attrs:{type:"file",multiple:"",title:""},on:{change:t.fileUpload}}),t._v(" "),"attApplication"==t.accepts&&t.complex?a("input",{staticClass:"upload-input",attrs:{type:"file",title:""},on:{change:t.fileUpload}}):t._e(),t._v(" "),"application"!=t.accepts||t.complex?t._e():a("input",{staticClass:"upload-input",attrs:{type:"file",accept:".xls,.xlsx,.docx,.doc,.pdf,.ppt,.pptx",multiple:"",title:""},on:{change:t.fileUpload}}),t._v(" "),"application"==t.accepts&&t.complex?a("input",{staticClass:"upload-input",attrs:{type:"file",accept:".xls,.xlsx,.docx,.doc,.pdf,.ppt,.pptx",title:""},on:{change:t.fileUpload}}):t._e(),t._v(" "),"video"!=t.accepts||t.complex?t._e():a("input",{staticClass:"upload-input",attrs:{type:"file",accept:"video/mp4",multiple:"",title:""},on:{change:t.fileUpload}}),t._v(" "),"video"==t.accepts&&t.complex?a("input",{staticClass:"upload-input",attrs:{type:"file",accept:"video/mp4",title:""},on:{change:t.fileUpload}}):t._e()])}),[],!1,null,"2bf158c6",null);e.default=r.exports},720:function(t,e,a){"use strict";a(558)},764:function(t,e,a){"use strict";a.r(e);var i=a(83),n=(a(150),{name:"index",components:{upload:a(580).default},data:function(){return{imgList:[],applicationList:[],videoList:[],dialogVisible:!1}},methods:{btn:function(){this.dialogVisible=!0},cancel:function(){this.dialogVisible=!1,this.imgList=[],this.applicationList=[],this.videoList=[]},imgChange:function(t){var e=this;return Object(i.a)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:try{console.log(t),e.imgList=t}catch(t){console.log(t)}case 1:case"end":return a.stop()}}),a)})))()},applicationChange:function(t){var e=this;return Object(i.a)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:try{console.log(t),e.applicationList=t}catch(t){console.log(t)}case 1:case"end":return a.stop()}}),a)})))()},videoChange:function(t){var e=this;return Object(i.a)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:try{console.log(t),e.videoList=t}catch(t){console.log(t)}case 1:case"end":return a.stop()}}),a)})))()}}}),s=(a(720),a(80)),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"demo"},[a("el-button",{attrs:{type:"primary"},on:{click:t.btn}},[t._v("上传")]),t._v(" "),t.dialogVisible?a("div",{staticClass:"mobile"},[a("div",{staticClass:"mask-layer",on:{click:t.cancel}}),t._v(" "),a("div",{staticClass:"mobile-content"},[a("div",{staticClass:"other-not"},[a("div",{staticClass:"add-img"},[a("div",{staticClass:"add-content"},[a("span",[t._v(" 上传图片")]),t._v(" "),a("upload",{staticClass:"add-upload",attrs:{list:t.imgList,limist:20,complex:!1,accepts:"image",num:10},on:{change:t.imgChange}})],1),t._v(" "),a("div",{staticClass:"ul"},t._l(t.imgList,(function(e,i){return a("div",{key:i,staticClass:"li"},[a("img",{attrs:{src:e.src,alt:""},on:{click:function(e){return t.imgList.splice(i,1)}}})])})),0)]),t._v(" "),a("div",{staticClass:"add-img"},[a("div",{staticClass:"add-content"},[a("span",[t._v(" 上传文件")]),t._v(" "),a("upload",{staticClass:"add-upload",attrs:{list:t.applicationList,limist:20,complex:!1,accepts:"application",num:10},on:{change:t.applicationChange}})],1),t._v(" "),a("div",{staticClass:"ul"},t._l(t.applicationList,(function(e,i){return a("div",{key:i,staticClass:"li1"},[a("span",{on:{click:function(e){return t.applicationList.splice(i,1)}}},[t._v(t._s(e.name))])])})),0)]),t._v(" "),a("div",{staticClass:"add-img"},[a("div",{staticClass:"add-content"},[a("span",[t._v(" 上传视频")]),t._v(" "),a("upload",{staticClass:"add-upload",attrs:{list:t.videoList,limist:20,complex:!1,accepts:"video",num:1},on:{change:t.videoChange}})],1),t._v(" "),a("div",{staticClass:"ul"},t._l(t.videoList,(function(e,i){return a("div",{key:i,staticClass:"li2"},[a("video",{attrs:{src:e.src,controls:"controls"}},[t._v("\n                浏览器不支持“视频”标签。")])])})),0)])])])]):t._e()],1)}),[],!1,null,"ba8f26aa",null);e.default=r.exports}}]);