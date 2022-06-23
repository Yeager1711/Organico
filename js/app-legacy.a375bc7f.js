(function(){"use strict";var t={5517:function(t,e,a){a(6992),a(8674),a(9601),a(7727);var n=a(9567),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("comp-header"),a("comp-home"),a("comp-about"),a("comp-product"),a("comp-event"),a("comp-content"),a("comp-news")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[t._l(t.logoItem,(function(t,e){return n("a",{key:"logo - "+e,class:t.class_logo,attrs:{href:t.href}},[n("img",{attrs:{src:a(9110),alt:""}})])})),n("nav",{staticClass:"navbar"},[n("div",{attrs:{id:"marker"}}),t._l(t.navItem,(function(e,a){return n("a",{key:"nav - "+a,attrs:{href:e.href},on:{click:function(e){return t.showNavIndicator()}}},[t._v(" "+t._s(e.text)+" ")])}))],2),n("div",{staticClass:"icons"},[n("div",{staticClass:"fa-solid fa-bars",attrs:{id:"btn-bar"},on:{click:function(e){return t.slideNavBar()}}}),t._l(t.iconItem,(function(t,e){return n("div",{key:"icons - "+e,class:t.icon,attrs:{id:t.id}})}))],2)],2)},r=[],c=(a(1539),a(4747),{name:"comp-header",data:function(){return{logoItem:[{class_logo:"logo",href:"#"}],navItem:[{text:"Home",href:"#home"},{text:"About",href:"#about"},{text:"Product",href:"#product"},{text:"Event",href:"#event"},{text:"News",href:"#news"}],iconItem:[{id:"btn-cart",icon:"fa-solid fa-cart-shopping"},{id:"btn-search",icon:"fa-solid fa-magnifying-glass"}]}},methods:{showNavIndicator:function(){var t=document.querySelector("#marker"),e=document.querySelectorAll(".navbar a");function a(e){t.style.left=e.offsetLeft+"px",t.style.width=e.offsetWidth+"px"}e.forEach((function(t){t.addEventListener("click",(function(t){a(t.target)}))}))},slideNavBar:function(){var t=document.querySelector(".navbar"),e=document.querySelector("#btn-bar");function a(){t.classList.toggle("active")}e.addEventListener("click",a),window.onscroll=function(){t.classList.remove("active")}}}}),l=c,d=a(1001),u=(0,d.Z)(l,s,r,!1,null,null,null),p=u.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"home",attrs:{id:"home"},on:{mousemove:function(e){return t.mouseHover()}}},[t._m(0),t._l(t.homeContent,(function(e,n){return a("div",{key:"content - "+n,staticClass:"content"},[a("span",{staticClass:"title",attrs:{"data-aos":"fade-up"}},[t._v(t._s(e.span_text))]),a("h3",{staticClass:"description"},[t._v(" "+t._s(e.title_text1)+" "),a("span",[t._v(" "+t._s(e.clorgreen))]),t._v(" "+t._s(e.title_text2)+" "),a("p",[t._v(t._s(e.p_text))])]),t._l(t.button,(function(e,n){return a("div",{key:"btn - "+n,staticClass:"btn-flex"},[a("a",{class:e.class,attrs:{href:e.href1}},[t._v(" "+t._s(e.btn1)+" ")]),a("a",{class:e.class2,attrs:{href:e.href2}},[t._v(" "+t._s(e.btn2)+" ")])])}))],2)}))],2)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image"},[n("img",{staticClass:"img-1",attrs:{src:a(6981),alt:""}}),n("img",{staticClass:"img-2",attrs:{src:a(6608),alt:""}}),n("img",{staticClass:"img-3",attrs:{src:a(8390),alt:""}})])}],h=(a(2222),{name:"comp-home",data:function(){return{button:[{class:"btn",class2:"btn2",btn1:"Shop now",href1:"# shop now",btn2:"About us",href2:" #about us"}],homeContent:[{span_text:"Were are organio",title_text1:"We are the ",clorgreen:"best",title_text2:"service provider",p_text:"Organic food is at the heart of what we do. Our organic whole foods are high quality"}]}},methods:{mouseHover:function(){document.querySelector(".home").onmousemove=function(t){var e=(window.innerWidth-2*t.pageX)/90,a=(window.innerHeight-2*t.pageY)/90;document.querySelector(".home .img-3").style.transform="translateX(".concat(a,"px) translateY(").concat(e,"px)")},document.querySelector(".home").onmouseleave=function(){document.querySelector(".home .img-3").style.transform="translateX(0px) translateY(0px)"}}}}),_=h,g=(0,d.Z)(_,m,f,!1,null,null,null),v=g.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"about",attrs:{id:"about"}},[a("div",{staticClass:"wraper"},[t._l(t.contentItem,(function(e,n){return a("div",{key:"content-"+n,staticClass:"content"},[a("h3",{staticClass:"title",attrs:{"data-aos":"fade-right","data-aos-deplay":"250"}},[t._v(" "+t._s(e.text1)+" "),a("span",[t._v(" "+t._s(e.span_green))]),t._v(" "+t._s(e.text2)+" ")]),a("p",{staticClass:"description",attrs:{"data-aos":"fade-right","data-aos-deplay":"1250"}},[t._v(t._s(e.text3))])])})),a("div",{staticClass:"box-container"},t._l(t.boxItems,(function(e,n){return a("div",{key:"box-container-"+n,class:e.class,attrs:{"data-aos":"fade-up","data-aos-deplay":"250"}},[a("div",{staticClass:"title"},[a("h3",[t._v(t._s(e.title))]),a("div",{staticClass:"flex"},[a("p",[t._v(t._s(e.text))]),a("img",{attrs:{src:e.image,alt:""}})]),a("a",{staticClass:"btn-about",attrs:{href:e.href}},[t._v(t._s(e.Button))])])])})),0)],2)])},x=[],y={name:"comp-about",data:function(){return{contentItem:[{text1:"What We ",span_green:"Offer",text2:"For You",text3:"We Connect buyers and Sellers of Naturals Organic Environmentally sound products. We find the best and makers natural and organic."}],boxItems:[{image:a(8150),class:"box1",title:"Get 10% off on Fruits Item",text:"Shop our selection of organic fresh vegetables in a discounted price. 10% off.",href:"#Shop now",Button:"Shop now"},{image:a(6559),class:"box2",title:"Get 15% Organic Vegetable",text:"Shop our selection of organic fresh vegetables in a discounted price. 10% off.",href:"#Shop now",Url:"../image/about-img2.png",Button:"Shop now"},{image:a(6410),class:"box3",title:"Get 10% off on Special Item",text:"Shop our selection of organic fresh vegetables in a discounted price. 10% off.",href:"#Shop now",Url:"../image/about-img3.png",Button:"Shop now"}]}}},w=y,C=(0,d.Z)(w,b,x,!1,null,null,null),k=C.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"product",attrs:{id:"product"}},[t._m(0),a("div",{staticClass:"box-container"},t._l(t.boxItem,(function(e,n){return a("div",{key:"box-"+n,class:e.id,attrs:{"data-aos":"fade-left","ata-aos-deplay":"250"}},[a("img",{attrs:{src:e.image,alt:""}}),a("h3",[t._v(t._s(e.title))]),a("div",{staticClass:"price"},[a("span",{staticClass:"price-old"},[t._v(" "+t._s(e.price_old))]),a("span",{staticClass:"price-new"},[t._v(" "+t._s(e.price_current)+" ")])]),t._l(t.popUp,(function(e,n){return a("div",{key:"popup-"+n,class:e.id,attrs:{"data-aos":"fade-left","ata-aos-deplay":"500"}},[a("a",{staticClass:"btn-popup"},[t._v(" "+t._s(e.text))])])}))],2)})),0),a("div",{staticClass:"box-container"},t._l(t.boxItem,(function(e,n){return a("div",{key:"box-"+n,class:e.id},[a("img",{attrs:{src:e.image,alt:""}}),a("h3",[t._v(t._s(e.title))]),a("div",{staticClass:"price"},[a("span",{staticClass:"price-old"},[t._v(" "+t._s(e.price_old))]),a("span",{staticClass:"price-new"},[t._v(" "+t._s(e.price_current)+" ")])]),t._l(t.popUp,(function(e,n){return a("div",{key:"popup-"+n,class:e.id},[a("a",{staticClass:"btn-popup"},[t._v(" "+t._s(e.text))])])}))],2)})),0)])},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"heading",attrs:{"data-aos":"fade-right","data-aos-deplay":"250"}},[t._v(" our "),a("span",[t._v("product")])])}],E={name:"comp-product",data:function(){return{boxItem:[{id:"box",image:a(9207),title:"Name",price_current:"666.66",price_old:"999.999"},{id:"box",image:a(1681),title:"Name",price_current:"666.66",price_old:"999.999"},{id:"box",image:a(4635),title:"Name",price_current:"666.66",price_old:"999.999"},{id:"box",image:a(5273),title:"Name",price_current:"666.66",price_old:"999.999"},{id:"box",image:a(9207),title:"Name",price_current:"666.66",price_old:"999.999"},{id:"box",image:a(1681),title:"Name",price_current:"666.66",price_old:"999.999"}],popUp:[{id:"list-model",text:"popup"}]}}},S=E,N=(0,d.Z)(S,I,O,!1,null,null,null),T=N.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"deal",attrs:{id:"event"}},[a("div",{staticClass:"content"},[a("h3",{staticClass:"title",attrs:{"data-aos":"fade-down","data-aos-deplay":"150"}},[t._v(" "+t._s(t.title)+" "),a("b",[t._v(t._s(t.title_orange))])]),a("p",{attrs:{"data-aos":"fade-right","data-aos-deplay":"300"}},[t._v(t._s(t.text))]),a("div",{staticClass:"count-down",attrs:{"data-aos":"flip-up","data-aos-deplay":"450"}},t._l(t.contentItems,(function(e,n){return a("div",{key:"count-"+n,class:e.class},[t._v(" "+t._s(t.countEvent())+" "),a("h3",{attrs:{id:e.id}},[t._v(t._s(e.id_tx))]),a("span",[t._v(" "+t._s(e.text)+" ")])])})),0)]),a("div",{staticClass:"discount"},[a("carousel",{attrs:{autoplay:!0,autoHeight:!0,margin:15,responsive:t.responsive}},t._l(t.boxItem,(function(e,n){return a("div",{key:"box-"+n,class:e.id},[a("img",{attrs:{src:e.image,alt:""}}),a("h3",[t._v(t._s(e.name))]),a("div",{staticClass:"price"},[a("span",{staticClass:"price-old"},[t._v(" "+t._s(e.price_new)+" ")]),a("span",{staticClass:"price-new"},[t._v(" "+t._s(e.price_old)+" ")])]),t._l(t.popUp,(function(e,n){return a("div",{key:"popup-"+n,class:e.id},[a("a",{staticClass:"btn-popup"},[t._v(" "+t._s(e.text))])])}))],2)})),0)],1)])},H=[],j=a(2751),B=a.n(j),Z={data:function(){return{title:" Deals Of The ",title_orange:"Weeks",text:" The sale day has come, what are you waiting for, look for healthy foods in this discount. ",contentItems:[{class:"box",id:"day",id_tx:"00",text:"day"},{class:"box",id:"hour",id_tx:"00",text:"hour"},{class:"box",id:"minute",id_tx:"00",text:"minute"},{class:"box",id:"second",id_tx:"00",text:"second"}],responsive:{0:{items:2.1,nav:!1},600:{items:3.1,nav:!0},900:{items:3.2,nav:!0}},boxItem:[{id:"box",image:a(9207),name:"Chanh Tươi",price_new:"666.66",price_old:"999.99"},{id:"box",image:a(1681),name:"Chanh Tươi",price_new:"666.66",price_old:"999.99"},{id:"box",image:a(4635),name:"Chanh Tươi",price_new:"666.66",price_old:"999.99"},{id:"box",image:a(9207),name:"Chanh Tươi",price_new:"666.66",price_old:"999.99"},{id:"box",image:a(1681),name:"Chanh Tươi",price_new:"666.66",price_old:"999.99"},{id:"box",image:a(9207),name:"Chanh Tươi",price_new:"666.66",price_old:"999.99"},{id:"box",image:a(4635),name:"Chanh Tươi",price_new:"666.66",price_old:"999.99"},{id:"box",image:a(1681),name:"Chanh Tươi",price_new:"666.66",price_old:"999.99"}],popUp:[{id:"list-model",text:"popup"}]}},methods:{countEvent:function(){var t=new Date("june 30, 2022 00:00:00").getTime();function e(){var e=(new Date).getTime(),a=t-e,n=1e3,i=60*n,o=60*i,s=24*o,r=Math.floor(a/s),c=Math.floor(a%s/o),l=Math.floor(a%o/i),d=Math.floor(a%i/n);document.getElementById("day").innerText=r,document.getElementById("hour").innerText=c,document.getElementById("minute").innerText=l,document.getElementById("second").innerText=d}setInterval((function(){e()}),1e3)}},components:{carousel:B()}},$=Z,q=(0,d.Z)($,W,H,!1,null,null,null),Y=q.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"WhyChoose"},[a("div",{staticClass:"content"},[a("div",{staticClass:"title",attrs:{"data-aos":"fade-up"}},[t._v(" "+t._s(t.title)+" "),a("h3",{attrs:{"data-aos":"fade-up"}},[t._v(t._s(t.title1))]),a("p",{attrs:{"data-aos":"fade-up"}},[t._v(t._s(t.text1))]),a("p",{attrs:{"data-aos":"fade-up"}},[t._v(t._s(t.text2))]),a("div",{staticClass:"list-content"},t._l(t.chooseItem,(function(e,n){return a("div",{key:"choose-"+n,class:e.id,attrs:{"data-aos":"fade-up","data-aos-deplay":"200"}},[a("h3",[a("i",{class:e.icon}),t._v(" "+t._s(e.title))]),a("p",[t._v(t._s(e.text))])])})),0)])]),t._l(t.imageItem,(function(t,e){return a("div",{key:"img-"+e,staticClass:"image"},[a("img",{attrs:{src:t.image,alt:""}})])}))],2)},D=[],U={name:"comp-content",data:function(){return{imageItem:[{image:a(4145)}],title:"~ Why Choose us? ~",title1:"We do not buy from the open market & traders.",text1:"Buy from family farmers who choose to farm organically because they believe it, and so do we.",text2:"Organic Foods is a family-run website that offers fresh and quality produce bought on vegetable farms.",chooseItem:[{id:"box",icon:"fa-solid fa-caret-right",title:"100% Payment Secure",text:"Dolor sit amet, consectetur adipiscing elit, sed eiusmod temporincididunt ut labore et."},{id:"box",icon:"fa-solid fa-caret-right",title:"Fast Delivery Just",text:"Dolor sit amet, consectetur adipiscing elit, sed eiusmod temporincididunt ut labore et."},{id:"box",icon:"fa-solid fa-caret-right",title:"Completly 100% Fresh & Organic Food",text:"Dolor sit amet, consectetur adipiscing elit, sed eiusmod temporincididunt ut labore et."},{id:"box",icon:"fa-solid fa-caret-right",title:"Skip or Cancel Anytime",text:"Dolor sit amet, consectetur adipiscing elit, sed eiusmod temporincididunt ut labore et."}],popUp:[{id:"list-model",text:"popup"}]}}},M=U,A=(0,d.Z)(M,F,D,!1,null,null,null),L=A.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"news",attrs:{id:"news"}},[a("h1",{staticClass:"heading",attrs:{"data-aos":"zoom-in"}},[t._v("Our Last News")]),a("p",{attrs:{"data-aos":"zoom-in"}},[t._v(" Follow our latest news and thoughts which focuses exclusively on design, art, vintage, and also work updates. ")]),a("div",{staticClass:"list-news",attrs:{"data-aos":"fade-up"}},[a("carousel",{attrs:{autoHeight:!0,autoplay:!0,margin:15,responsive:t.responsive}},t._l(t.boxItems,(function(e,n){return a("div",{key:"box-"+n,class:e.id},[a("div",{staticClass:"image"},[a("img",{attrs:{src:e.image,alt:""}}),a("div",{staticClass:"content-img"},[a("div",{staticClass:"cadenlar"},[a("i",{class:e.ic_calendar},[a("span",[t._v(" "+t._s(e.calender_date))])])]),a("div",{staticClass:"user"},[a("i",{class:e.ic_user},[a("span",[t._v(" "+t._s(e.user_name))])])])])]),a("div",{staticClass:"content"},[a("h3",[t._v(t._s(e.title)+" ")]),a("span",[t._v(" "+t._s(e.text)+" ")])]),a("a",{staticClass:"btn-news",attrs:{href:"#"}},[t._v("Read More")])])})),0)],1)])},G=[],X={name:"comp-news",data:function(){return{boxItems:[{id:"box",image:a(9556),ic_calendar:"fa-solid fa-calendar-days",ic_user:"fa-solid fa-user",calender_date:"November 17, 2022",user_name:"Yeager Huynh",title:"Hunching over desk can cause pain",text:"We understand the importance of approaching each work integrally and believe in the power of simple and easy communication. Our purpose is to solutions ..."},{id:"box",image:a(868),ic_calendar:"fa-solid fa-calendar-days",ic_user:"fa-solid fa-user",calender_date:"November 17, 2022",user_name:"Yeager Huynh",title:"We advocate swapping screen time for crafting",text:"We understand the importance of approaching each work integrally and believe in the power of simple and easy communication. Our purpose is to solutions ..."},{id:"box",image:a(7552),ic_calendar:"fa-solid fa-calendar-days",ic_user:"fa-solid fa-user",calender_date:"November 17, 2022",user_name:"Yeager Huynh",title:"Our 6 of the best Organic Chocolates to Buy.",text:"We understand the importance of approaching each work integrally and believe in the power of simple and easy communication. Our purpose is to solutions ..."},{id:"box",image:a(9452),ic_calendar:"fa-solid fa-calendar-days",ic_user:"fa-solid fa-user",calender_date:"November 17, 2022",user_name:"Yeager Huynh",title:"Best guide tho shopping for organic ingredients.",text:"We understand the importance of approaching each work integrally and believe in the power of simple and easy communication. Our purpose is to solutions ..."},{id:"box",image:a(3969),ic_calendar:"fa-solid fa-calendar-days",ic_user:"fa-solid fa-user",calender_date:"November 17, 2022",user_name:"Yeager Huynh",title:"Zechsal Magnesium flaskes especially made.",text:"We understand the importance of approaching each work integrally and believe in the power of simple and easy communication. Our purpose is to solutions ..."},{id:"box",image:a(2667),ic_calendar:"fa-solid fa-calendar-days",ic_user:"fa-solid fa-user",calender_date:"November 17, 2022",user_name:"Yeager Huynh",title:"Finding a way to separate 'work to do a business'",text:"We understand the importance of approaching each work integrally and believe in the power of simple and easy communication. Our purpose is to solutions ..."}],responsive:{0:{items:1,nav:!1},600:{items:2,nav:!0},900:{items:2,nav:!0}}}},components:{carousel:B()}},z=X,J=(0,d.Z)(z,P,G,!1,null,null,null),R=J.exports,V={name:"App",components:{CompHeader:p,CompHome:v,CompAbout:k,CompProduct:T,CompEvent:Y,CompContent:L,CompNews:R}},K=V,Q=(0,d.Z)(K,i,o,!1,null,null,null),tt=Q.exports,et=a(5892),at=a.n(et);new n.Z({mounted:function(){at().init({offset:300,delay:0,duration:700,easing:"ease-in-out",once:!1,anchorPlacement:"top-bottom"})},render:function(t){return t(tt)}}).$mount("#app"),n.Z.config.productionTip=!1},8150:function(t,e,a){t.exports=a.p+"img/about-img1.dda66cb8.png"},6559:function(t,e,a){t.exports=a.p+"img/about-img2.01733bf0.png"},6410:function(t,e,a){t.exports=a.p+"img/about-img3.7a38ae33.png"},1681:function(t,e,a){t.exports=a.p+"img/chanh.10a3a874.png"},9207:function(t,e,a){t.exports=a.p+"img/cr.a21d6fb8.png"},4635:function(t,e,a){t.exports=a.p+"img/db.c170b4f9.png"},6608:function(t,e,a){t.exports=a.p+"img/h3-layer1.7c9fb24b.png"},6981:function(t,e,a){t.exports=a.p+"img/h3-slider-banner1.97435ab8.png"},4145:function(t,e,a){t.exports=a.p+"img/h4-banner1.f2daaf3a.jpg"},8390:function(t,e,a){t.exports=a.p+"img/home-parallax-img.b0c9b769.png"},9110:function(t,e,a){t.exports=a.p+"img/logo.54793fa9.png"},7552:function(t,e,a){t.exports=a.p+"img/new1.4348489f.jpg"},9452:function(t,e,a){t.exports=a.p+"img/new2.c8a02824.jpg"},3969:function(t,e,a){t.exports=a.p+"img/new3.23f2dba3.jpg"},2667:function(t,e,a){t.exports=a.p+"img/new4.5e027e1f.jpg"},9556:function(t,e,a){t.exports=a.p+"img/new5.f2e99210.jpg"},868:function(t,e,a){t.exports=a.p+"img/new6.a2b1bed0.jpg"},5273:function(t,e,a){t.exports=a.p+"img/tao.0fbb84ca.png"}},e={};function a(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=t,function(){var t=[];a.O=function(e,n,i,o){if(!n){var s=1/0;for(d=0;d<t.length;d++){n=t[d][0],i=t[d][1],o=t[d][2];for(var r=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(a.O).every((function(t){return a.O[t](n[c])}))?n.splice(c--,1):(r=!1,o<s&&(s=o));if(r){t.splice(d--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[n,i,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){a.p="/Organico/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,o,s=n[0],r=n[1],c=n[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(c)var d=c(a)}for(e&&e(n);l<s.length;l++)o=s[l],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},n=self["webpackChunkplant"]=self["webpackChunkplant"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(5517)}));n=a.O(n)})();
//# sourceMappingURL=app-legacy.a375bc7f.js.map