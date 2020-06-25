(function(e){function t(t){for(var r,s,i=t[0],l=t[1],u=t[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},o=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"0d7d":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("Header"),a("router-view")],1)},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("img",{attrs:{src:e.image}})])},i=[],l={name:"Header",data:function(){return{image:a("cf05")}}},u=l,c=(a("e585"),a("2877")),p=Object(c["a"])(u,s,i,!1,null,"012eff89",null),f=p.exports,d={name:"App",components:{Header:f}},m=d,v=(a("034f"),Object(c["a"])(m,n,o,!1,null,null,null)),g=v.exports,_=a("8c4f"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"search"},[a("h1",[e._v("Find Your Apex Stats")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"platform"}},[e._v("Platform")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.platform,expression:"platform"}],attrs:{name:"platform",id:"platform"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.platform=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"origin"}},[e._v("Origin")]),a("option",{attrs:{value:"psn"}},[e._v("Playstation")]),a("option",{attrs:{value:"xbl"}},[e._v("Xbox")])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"userid"}},[e._v("Profile Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userid,expression:"userid"}],attrs:{type:"text",name:"userid",id:"userid",placeholder:"Origin ID, Xbox Live gamertag, PSN ID"},domProps:{value:e.userid},on:{input:function(t){t.target.composing||(e.userid=t.target.value)}}})]),e._m(0)])])},b=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-group"},[a("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])}],y=(a("99af"),{name:"Search",data:function(){return{platform:"origin",userid:""}},beforeCreate:function(){document.body.className="body-bg-image"},methods:{onSubmit:function(){this.userid?this.$router.push("/profile/".concat(this.platform,"/").concat(this.userid)):this.$toasted.show("Please enter a profile name",{duration:3e3})}}}),x=y,D=Object(c["a"])(x,h,b,!1,null,null,null),w=D.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[e.loading?a("div",[a("h3",[e._v("Loading...")])]):e._e(),e.error?a("div",[a("h1",[e._v(e._s(e.error))]),a("router-link",{attrs:{to:"/"}},[e._v("Go Back")])],1):e._e(),e.profileData?a("div",{staticClass:"container"},[a("h1",{staticClass:"userid"},[a("img",{staticClass:"platform-avatar",attrs:{src:e.profileData.platformInfo.avatarUrl,alt:""}}),e._v(" "+e._s(e.profileData.platformInfo.platformUserId)+" "),e.profileData.segments[0].stats.rankScore?a("img",{staticClass:"rank-icon",attrs:{src:e.profileData.segments[0].stats.rankScore.metadata.iconUrl,alt:""}}):e._e()]),a("div",{staticClass:"grid"},[a("div",[a("img",{attrs:{src:e.profileData.segments[1].metadata.imageUrl,alt:""}})]),a("div",[a("ul",[a("li",[a("h4",[e._v("Legend")]),a("p",[e._v(e._s(e.profileData.metadata.activeLegendName))])]),e.profileData.segments[0].stats.level?a("li",[a("h4",[e._v("Apex Level")]),a("p",[e._v(e._s(e.profileData.segments[0].stats.level.displayValue))])]):e._e(),e.profileData.segments[0].stats.season5Wins?a("li",[a("h4",[e._v("Season 5 Wins")]),a("p",[e._v(" "+e._s(e.profileData.segments[0].stats.season5Wins.displayValue)+" ")])]):e._e(),e.profileData.segments[0].stats.kills?a("li",[a("h4",[e._v("Lifetime Kills")]),a("p",[e._v(" "+e._s(e.profileData.segments[0].stats.kills.displayValue)+" ")])]):e._e(),e.profileData.segments[0].stats.damage?a("li",[a("h4",[e._v("Damage Done")]),a("p",[e._v(" "+e._s(e.profileData.segments[0].stats.damage.displayValue)+" ")])]):e._e()])])]),a("router-link",{attrs:{to:"/"}},[e._v("Go Back")])],1):e._e()])},j=[],k=(a("96cf"),a("1da1")),P=a("bc3a"),S=a.n(P),C={name:"Profile",data:function(){return{loading:!1,error:null,profileData:null}},beforeCreate:function(){document.body.className="body-bg-no-image"},created:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,S.a.get("/api/profile/".concat(e.$route.params.platform,"/").concat(e.$route.params.userid));case 4:a=t.sent,e.profileData=a.data.data,e.loading=!1,t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](1),e.loading=!1,e.error=t.t0.response.data.message;case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()}},$=C,N=(a("5d69"),Object(c["a"])($,O,j,!1,null,"34025383",null)),L=N.exports;r["a"].use(_["a"]);var E=new _["a"]({mode:"history",routes:[{path:"/",name:"search",component:w},{path:"/profile/:platform/:userid",name:"profile",component:L}]}),I=a("a65d"),A=a.n(I);r["a"].config.productionTip=!1,r["a"].use(A.a),new r["a"]({router:E,render:function(e){return e(g)}}).$mount("#app")},"5d69":function(e,t,a){"use strict";var r=a("0d7d"),n=a.n(r);n.a},"5e3d":function(e,t,a){},"85ec":function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.3e9b5709.png"},e585:function(e,t,a){"use strict";var r=a("5e3d"),n=a.n(r);n.a}});
//# sourceMappingURL=app.65d40d4a.js.map