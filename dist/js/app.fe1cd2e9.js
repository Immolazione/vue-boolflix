(function(e){function i(i){for(var n,o,s=i[0],c=i[1],I=i[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(i);while(f.length)f.shift()();return a.push.apply(a,I||[]),t()}function t(){for(var e,i=0;i<a.length;i++){for(var t=a[i],n=!0,s=1;s<t.length;s++){var c=t[s];0!==r[c]&&(n=!1)}n&&(a.splice(i--,1),e=o(o.s=t[0]))}return e}var n={},r={app:0},a=[];function o(i){if(n[i])return n[i].exports;var t=n[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=n,o.d=function(e,i,t){o.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,i){if(1&i&&(e=o(e)),8&i)return e;if(4&i&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var n in e)o.d(t,n,function(i){return e[i]}.bind(null,n));return t},o.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(i,"a",i),i},o.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=i,s=s.slice();for(var I=0;I<s.length;I++)i(s[I]);var l=c;a.push([0,"chunk-vendors"]),t()})({0:function(e,i,t){e.exports=t("56d7")},"17b5":function(e,i){e.exports="data:image/png;base64,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"},"1a31":function(e,i,t){"use strict";t("5f03")},"56d7":function(e,i,t){"use strict";t.r(i);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),r=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("header",{staticClass:"d-flex justify-content-between align-items-center"},[t("h1",{staticClass:"text-danger ps-4"},[e._v("BOOLFLIX")]),t("Search",{staticClass:"pe-4",attrs:{placeholder:"Cerca un film..."},on:{search:e.searchItem}})],1),t("Main",{attrs:{movies:e.movies,series:e.series}})],1)},a=[],o=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("section",[t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.term,expression:"term",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:e.placeholder||"Cerca..."},domProps:{value:e.term},on:{keyup:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.emitSearch.apply(null,arguments)},input:function(i){i.target.composing||(e.term=i.target.value.trim())},blur:function(i){return e.$forceUpdate()}}}),t("button",{attrs:{type:"button"},on:{click:e.emitSearch}},[e._v("Search")])])},s=[],c={name:"Search",props:["placeholder"],data:function(){return{term:""}},methods:{emitSearch:function(){this.$emit("search",this.term)}}},I=c,l=t("2877"),u=Object(l["a"])(I,o,s,!1,null,null,null),f=u.exports,g=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("main",[t("Results",{attrs:{items:e.movies,title:"Movies"}}),t("Results",{attrs:{items:e.series,title:"Series"}})],1)},A=[],m=function(){var e=this,i=e.$createElement,t=e._self._c||i;return e.items.length?t("section",[t("h1",[e._v(e._s(e.title)+": ")]),e._l(e.items,(function(e){return t("Card",{key:e.id,attrs:{item:e}})}))],2):e._e()},p=[],v=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("ul",[n("li",[n("img",{attrs:{id:"card-bg",src:e.getImage,alt:e.item.title||e.item.name}})]),n("li",[n("strong",[e._v("Title: ")]),e._v(e._s(e.item.title||e.item.name))]),n("li",[n("strong",[e._v("Original Title: ")]),e._v(e._s(e.item.original_title||e.item.original_name))]),e.hasFlag?n("li",[n("strong",[e._v("Language: ")]),n("img",{attrs:{id:"card-lang",src:t("b967")("./"+e.item.original_language+".png"),alt:e.item.original_language}})]):e._e(),n("li",[n("strong",[e._v("Voto: ")]),e._l(5,(function(i){return n("i",{key:i,staticClass:"far fa-star",class:{fas:i<=e.getVote}})}))],2)])},h=[],d={name:"Card",props:["items","title","item"],languages:["en","it"],data:function(){return{images:{placeholder:"https://www.altavod.com/assets/images/poster-placeholder.png",imgUrl:"https://image.tmdb.org/t/p/w92"}}},computed:{getImage:function(){return this.item.poster_path?this.images.imgUrl+this.item.poster_path:this.images.placeholder},getVote:function(){return Math.ceil(this.item.vote_average/2)},hasFlag:function(){return"en"==this.item.original_language||"it"==this.item.original_language}}},w=d,b=(t("fab5"),Object(l["a"])(w,v,h,!1,null,"2b04624d",null)),O=b.exports,C={name:"Results",components:{Card:O},props:["items","title"]},E=C,y=(t("1a31"),Object(l["a"])(E,m,p,!1,null,"d376ce10",null)),j=y.exports,M={name:"Main",components:{Results:j},props:["movies","series"]},x=M,B=Object(l["a"])(x,g,A,!1,null,null,null),P=B.exports,F=t("bc3a"),S=t.n(F),U={name:"App",components:{Search:f,Main:P},data:function(){return{movies:[],series:[],api:{baseUri:"https://api.themoviedb.org/3",key:"0d07b420b3a9f7101c92e8e8e3e0ee15",language:"it-IT"}}},methods:{searchItem:function(e){var i=this;if(!e)return this.movies=[],void(this.series=[]);var t=this.api,n=t.key,r=t.baseUri,a=t.language,o={params:{api_key:n,language:a,query:e}};S.a.get("".concat(r,"/search/movie"),o).then((function(e){i.movies=e.data.results,console.log(i.movies)})),S.a.get("".concat(r,"/search/tv"),o).then((function(e){i.series=e.data.results,console.log(i.series)}))}}},Q=U,X=(t("5c0b"),Object(l["a"])(Q,r,a,!1,null,null,null)),D=X.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(D)}}).$mount("#app")},"5c0b":function(e,i,t){"use strict";t("9c0c")},"5f03":function(e,i,t){},"857c":function(e,i,t){},"9c0c":function(e,i,t){},b967:function(e,i,t){var n={"./en.png":"17b5","./it.png":"e33f"};function r(e){var i=a(e);return t(i)}function a(e){if(!t.o(n,e)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id="b967"},e33f:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAELBAMAAAAFMM1/AAAAFVBMVEX///8AkkbOKzf10tWY07QAjT7NJTJXwIMQAAAA8UlEQVR42u3PwQAAAAgEsBRSCCKS/FmCuO9msOrYVWwnJiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIikniFNUdjvhgMbwAAAABJRU5ErkJggg=="},fab5:function(e,i,t){"use strict";t("857c")}});
//# sourceMappingURL=app.fe1cd2e9.js.map