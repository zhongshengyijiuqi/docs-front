(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{476:function(e,t,a){"use strict";var n=a(55),i=a(11),r=a(5),l=a(159),c=a(251),s=a(16),p=a(35),u=a(158),o=a(160),m=a(86),g=a(22),f=a(58),d=a(252),x=a(161),v=a(115),b=a(250),h=a(6),k=b.UNSUPPORTED_Y,y=Math.min,_=[].push,C=r(/./.exec),$=r(_),N=r("".slice);l("split",(function(e,t,a){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,a){var r=g(p(this)),l=void 0===a?4294967295:a>>>0;if(0===l)return[];if(void 0===e)return[r];if(!c(e))return i(t,r,e,l);for(var s,u,o,m=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),x=0,b=new RegExp(e.source,f+"g");(s=i(v,b,r))&&!((u=b.lastIndex)>x&&($(m,N(r,x,s.index)),s.length>1&&s.index<r.length&&n(_,m,d(s,1)),o=s[0].length,x=u,m.length>=l));)b.lastIndex===s.index&&b.lastIndex++;return x===r.length?!o&&C(b,"")||$(m,""):$(m,N(r,x)),m.length>l?d(m,0,l):m}:"0".split(void 0,0).length?function(e,a){return void 0===e&&0===a?[]:i(t,this,e,a)}:t,[function(t,a){var n=p(this),l=null==t?void 0:f(t,e);return l?i(l,t,n,a):i(r,g(n),t,a)},function(e,n){var i=s(this),l=g(e),c=a(r,i,l,n,r!==t);if(c.done)return c.value;var p=u(i,RegExp),f=i.unicode,d=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(k?"g":"y"),v=new p(k?"^(?:"+i.source+")":i,d),b=void 0===n?4294967295:n>>>0;if(0===b)return[];if(0===l.length)return null===x(v,l)?[l]:[];for(var h=0,_=0,C=[];_<l.length;){v.lastIndex=k?0:_;var w,U=x(v,k?N(l,_):l);if(null===U||(w=y(m(v.lastIndex+(k?_:0)),l.length))===h)_=o(l,_,f);else{if($(C,N(l,h,_)),C.length===b)return C;for(var L=1;L<=U.length-1;L++)if($(C,U[L]),C.length===b)return C;_=h=w}}return $(C,N(l,h)),C}]}),!!h((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2!==a.length||"a"!==a[0]||"b"!==a[1]})),k)},482:function(e,t,a){},504:function(e,t,a){"use strict";a(482)},580:function(e,t,a){"use strict";a.r(t);var n=a(83),i=(a(150),a(243),a(56),a(17),a(39),a(476),a(112),a(253),a(59),a(247),{name:"upload",props:{list:{type:Array,default:function(){return[]}},accepts:{type:String,default:"image"},num:{type:Number,default:3},complex:{type:Boolean,default:!0},distinguish:{type:Boolean,default:!1},limist:{type:Number,default:2},imgName:{type:Number,default:20},captureCamera:{type:String,default:""}},data:function(){return{imgList:[],imgListData:[],imgData:"",imagesData:"",fileData:""}},components:{},mounted:function(){},methods:{removeImg:function(e){this.imgList=this.imgList.filter((function(t){return e.id!==t.id})),this.$emit("change",this.imgList)},applicationFun:function(e){var t=e.name.split("."),a=t[t.length-1];if("xlsx"==a||"docx"==a||"doc"==a||"pdf"==a||"xls"==a||"ppt"==a||"pptx"==a)return!0},attApplicationFun:function(e){if("application/msword"==e.type||"application/vnd.openxmlformats-officedocument.wordprocessingml.document"==e.type||"application/vnd.openxmlformats-officedocument.presentationml.presentation"==e.type||"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"==e.type||"application/vnd.ms-powerpoint"==e.type||"application/vnd.ms-excel"==e.type||"application/pdf"==e.type||"image/png"==e.type||"image/jpeg"==e.type)return!0},videoFun:function(e){if("video/mp4"==e.type)return!0},fileUpload:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function a(){var n,i,r,l,c,s,p,u;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,t.distinguish||(t.imgList=[]),1!=e.target.files.length){a.next=55;break}if(n=e.target.files[0],i=n.size/1024/1024<t.limist,console.log(i),"application"!=t.accepts){a.next=17;break}if(!t.applicationFun(n)){a.next=14;break}if(!(n.name.split(".").slice(0,-1).join("").length>t.imgName)){a.next=12;break}return t.$toast("上传文件名不能超过".concat(t.imgName,"字符")),e.target.value="",a.abrupt("return");case 12:a.next=17;break;case 14:return t.$toast("上传文件格式不正确"),e.target.value="",a.abrupt("return");case 17:if("attApplication"!=t.accepts){a.next=28;break}if(!t.attApplicationFun(n)){a.next=25;break}if(!(n.name.split(".").slice(0,-1).join("").length>t.imgName)){a.next=23;break}return t.$toast("上传文件名不能超过".concat(t.imgName,"字符")),e.target.value="",a.abrupt("return");case 23:a.next=28;break;case 25:return t.$toast("上传文件格式不正确"),e.target.value="",a.abrupt("return");case 28:if("video"!=t.accepts){a.next=39;break}if(!t.videoFun(n)){a.next=36;break}if(!(n.name.split(".").slice(0,-1).join("").length>t.imgName)){a.next=34;break}return t.$toast("上传文件名不能超过".concat(t.imgName,"字符")),e.target.value="",a.abrupt("return");case 34:a.next=39;break;case 36:return t.$toast("上传文件格式不正确"),e.target.value="",a.abrupt("return");case 39:if(i){a.next=43;break}return t.$toast("上传文件大小不能超过".concat(t.limist,"M!")),e.target.value="",a.abrupt("return");case 43:if(!(t.imgList.length>=t.num)){a.next=48;break}t.$toast("上传文件数量不能超过".concat(t.num,"个")),e.target.value="",a.next=53;break;case 48:return a.next=50,t.readasbase64(n);case 50:r=a.sent,t.imgList.push({src:r.result,file:n,id:"",size:n.size,name:n.name}),e.target.value="";case 53:a.next=115;break;case 55:if(!(e.target.files.length>1)){a.next=115;break}l=e.target.files,c=0;case 58:if(!(c<l.length)){a.next=99;break}if(!(l[c].size/1024/1024>t.limist)){a.next=63;break}return t.$toast("上传大小大小不能超过".concat(t.limist,"M!")),e.target.value="",a.abrupt("return");case 63:if("application"!=t.accepts){a.next=74;break}if(!t.applicationFun(l[c])){a.next=71;break}if(!(l[c].name.split(".").slice(0,-1).join("").length>t.imgName)){a.next=69;break}return t.$toast("第".concat(c,"个文件名不能超过").concat(t.imgName,"字符")),e.target.value="",a.abrupt("return");case 69:a.next=74;break;case 71:return t.$toast("上传文件格式不正确"),e.target.value="",a.abrupt("return");case 74:if("attApplication"!=t.accepts){a.next=85;break}if(!t.attApplicationFun(l)){a.next=82;break}if(!(l.name.split(".").slice(0,-1).join("").length>t.imgName)){a.next=80;break}return t.$toast("上传文件名不能超过".concat(t.imgName,"字符")),e.target.value="",a.abrupt("return");case 80:a.next=85;break;case 82:return t.$toast("上传文件格式不正确"),e.target.value="",a.abrupt("return");case 85:if("video"!=t.accepts){a.next=96;break}if(!t.videoFun(l[c])){a.next=93;break}if(!(l[c].name.split(".").slice(0,-1).join("").length>t.imgName)){a.next=91;break}return t.$toast("上传文件名不能超过".concat(t.imgName,"字符")),e.target.value="",a.abrupt("return");case 91:a.next=96;break;case 93:return t.$toast("上传文件格式不正确"),e.target.value="",a.abrupt("return");case 96:c++,a.next=58;break;case 99:if(!(t.imgList.length+e.target.files.length>t.num)){a.next=104;break}t.$toast("上传文件数量不能超过".concat(t.num,"个")),e.target.value="",a.next=115;break;case 104:s=0;case 105:if(!(s<l.length)){a.next=114;break}return p=l[s],a.next=109,t.readasbase64(p);case 109:u=a.sent,t.imgList.push({src:u.result,file:p,id:"",size:p.size,name:p.name});case 111:s++,a.next=105;break;case 114:e.target.value="";case 115:t.$emit("change",t.imgList),a.next=121;break;case 118:a.prev=118,a.t0=a.catch(0),console.log("图片上传",a.t0);case 121:case"end":return a.stop()}}),a,null,[[0,118]])})))()},readasbase64:function(e){return new Promise((function(t,a){var n=new FileReader;n.onload=function(){t(n)},n.readAsDataURL(e)}))}},watch:{list:{handler:function(e){this.imgList=e},immediate:!0,deep:!0}}}),r=(a(504),a(80)),l=Object(r.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"upload-box"},["image"!=e.accepts||e.complex||e.captureCamera?e._e():a("input",{staticClass:"upload-input",attrs:{type:"file",accept:"image/*",multiple:"",title:""},on:{change:e.fileUpload}}),e._v(" "),"image"==e.accepts&&e.complex&&!e.captureCamera?a("input",{staticClass:"upload-input",attrs:{type:"file",accept:"image/*",title:""},on:{change:e.fileUpload}}):e._e(),e._v(" "),"image"==e.accepts&&!e.complex&&e.captureCamera?a("input",{staticClass:"upload-input",attrs:{type:"file",accept:"image/*",capture:e.captureCamera,multiple:"",title:""},on:{change:e.fileUpload}}):e._e(),e._v(" "),"image"==e.accepts&&e.complex&&e.captureCamera?a("input",{staticClass:"upload-input",attrs:{type:"file",accept:"image/*",capture:e.captureCamera,title:""},on:{change:e.fileUpload}}):e._e(),e._v(" "),"attApplication"!=e.accepts||e.complex?e._e():a("input",{staticClass:"upload-input",attrs:{type:"file",multiple:"",title:""},on:{change:e.fileUpload}}),e._v(" "),"attApplication"==e.accepts&&e.complex?a("input",{staticClass:"upload-input",attrs:{type:"file",title:""},on:{change:e.fileUpload}}):e._e(),e._v(" "),"application"!=e.accepts||e.complex?e._e():a("input",{staticClass:"upload-input",attrs:{type:"file",accept:".xls,.xlsx,.docx,.doc,.pdf,.ppt,.pptx",multiple:"",title:""},on:{change:e.fileUpload}}),e._v(" "),"application"==e.accepts&&e.complex?a("input",{staticClass:"upload-input",attrs:{type:"file",accept:".xls,.xlsx,.docx,.doc,.pdf,.ppt,.pptx",title:""},on:{change:e.fileUpload}}):e._e(),e._v(" "),"video"!=e.accepts||e.complex?e._e():a("input",{staticClass:"upload-input",attrs:{type:"file",accept:"video/mp4",multiple:"",title:""},on:{change:e.fileUpload}}),e._v(" "),"video"==e.accepts&&e.complex?a("input",{staticClass:"upload-input",attrs:{type:"file",accept:"video/mp4",title:""},on:{change:e.fileUpload}}):e._e()])}),[],!1,null,"2bf158c6",null);t.default=l.exports}}]);