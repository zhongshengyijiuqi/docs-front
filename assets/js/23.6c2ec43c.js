(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{466:function(t,i,n){var e=n(2),o=n(55),r=n(7),s=n(81),a=n(82),f=n(246),h=/MSIE .\./.test(s),u=e.Function,c=function(t){return h?function(i,n){var e=f(arguments.length,1)>2,s=r(i)?i:u(i),h=e?a(arguments,2):void 0;return t(e?function(){o(s,this,h)}:s,n)}:t};t.exports={setTimeout:c(e.setTimeout),setInterval:c(e.setInterval)}},467:function(t,i,n){n(468),n(469)},468:function(t,i,n){var e=n(4),o=n(2),r=n(466).setInterval;e({global:!0,bind:!0,forced:o.setInterval!==r},{setInterval:r})},469:function(t,i,n){var e=n(4),o=n(2),r=n(466).setTimeout;e({global:!0,bind:!0,forced:o.setTimeout!==r},{setTimeout:r})},487:function(t,i,n){},510:function(t,i,n){"use strict";n(487)},583:function(t,i,n){"use strict";n.r(i);n(243),n(467);var e={name:"yyNotification",props:{width:{type:Number,default:376},height:{type:Number,default:30},backgroundColor:{type:String,default:"#02173D"},informations:{type:Array,default:function(){return[]}}},computed:{},data:function(){return{timer:0,translateX:376,information:""}},watch:{width:{handler:function(){this.translateX=this.width},immediate:!0},informations:{handler:function(){var t=this;if(this.informations.length){this.timer&&(clearInterval(this.timer),this.timer=0),this.translateX=this.width;var i=-1;this.information=this.informations[++i],this.$nextTick((function(){t.offsetWidth=t.$refs.information.offsetWidth})),this.timer=setInterval((function(){t.translateX<-t.offsetWidth&&(i>=t.informations.length-1&&(i=-1),t.information=t.informations[++i],t.translateX=t.width,t.$nextTick((function(){t.offsetWidth=t.$refs.information.offsetWidth}))),t.translateX-=2}),100)}},immediate:!0}},beforeDestroy:function(){this.timer&&(clearInterval(this.timer),this.timer=0)},created:function(){},mounted:function(){},methods:{}},o=(n(510),n(80)),r=Object(o.a)(e,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"notification-container",style:"width:"+this.width+"px;height:"+this.height+"px;background:"+this.backgroundColor},[i("div",{ref:"information",staticClass:"notification-information",style:"transform:translateX("+this.translateX+"px);"},[this._v(this._s(this.information))])])}),[],!1,null,"5ed2ee04",null);i.default=r.exports}}]);