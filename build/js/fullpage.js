/*!
 * fullPage 3.0.5
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */
!function(e,t,n,o,r){"function"==typeof define&&define.amd?define(function(){return e.fullpage=o(t,n),e.fullpage}):"object"==typeof exports?module.exports=o(t,n):t.fullpage=o(t,n)}(this,window,document,function(e,t){"use strict";var n="fullpage-wrapper",o="."+n,r="fp-responsive",i="fp-notransition",l="fp-destroyed",a="fp-enabled",s="fp-viewing",c="active",u="."+c,f="fp-completely",d="."+f,v=".section",p="fp-section",h="."+p,g=h+u,m="fp-tableCell",S="."+m,b="fp-auto-height",w="fp-normal-scroll",y="fp-nav",E="#"+y,L="fp-tooltip",x="."+L,A="fp-show-active",T=".slide",k="fp-slide",M="."+k,O=M+u,C="fp-slides",H="."+C,I="fp-slidesContainer",B="."+I,R="fp-table",z="fp-slidesNav",j="."+z,N=j+" a",P=".fp-controlArrow",D="fp-prev",V="fp-controlArrow "+D,W=P+("."+D),Y="fp-controlArrow fp-next",F=P+".fp-next";function U(t,n){e.console&&e.console[t]&&e.console[t]("fullPage: "+n)}function X(e,n){return(n=arguments.length>1?n:t)?n.querySelectorAll(e):null}function _(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=_(e[r],o[r]))}return e}function K(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function $(){return"innerHeight"in e?e.innerHeight:t.documentElement.offsetHeight}function q(e,t){var n;for(n in e=oe(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function Q(e,t,n){for(var o=e[n];o&&!Le(o,t);)o=o[n];return o}function G(e,t){return Q(e,t,"previousElementSibling")}function J(e,t){return Q(e,t,"nextElementSibling")}function Z(e){return e.previousElementSibling}function ee(e){return e.nextElementSibling}function te(e){return e[e.length-1]}function ne(e,t){e=le(e)?e[0]:e;for(var n=null!=t?X(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function oe(e){return le(e)?e:[e]}function re(e){e=oe(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function ie(e){e=oe(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function le(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function ae(e,t){e=oe(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function se(e,t){e=oe(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function ce(e,t){t.appendChild(e)}function ue(e,n,o){var r;n=n||t.createElement("div");for(var i=0;i<e.length;i++){var l=e[i];(o&&!i||!o)&&(r=n.cloneNode(!0),l.parentNode.insertBefore(r,l)),r.appendChild(l)}return e}function fe(e,t){ue(e,t,!0)}function de(e,t){for("string"==typeof t&&(t=Ae(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function ve(e){for(var n=t.createDocumentFragment();e.firstChild;)n.appendChild(e.firstChild);e.parentNode.replaceChild(n,e)}function pe(e,t){return e&&1===e.nodeType?Le(e,t)?e:pe(e.parentNode,t):null}function he(e,t){me(e,e.nextSibling,t)}function ge(e,t){me(e,e,t)}function me(e,t,n){le(n)||("string"==typeof n&&(n=Ae(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function Se(){var n=t.documentElement;return(e.pageYOffset||n.scrollTop)-(n.clientTop||0)}function be(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})}function we(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function ye(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function Ee(n,o,r){var i;r=void 0===r?{}:r,"function"==typeof e.CustomEvent?i=new CustomEvent(o,{detail:r}):(i=t.createEvent("CustomEvent")).initCustomEvent(o,!0,!0,r),n.dispatchEvent(i)}function Le(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function xe(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function Ae(e){var n=t.createElement("div");return n.innerHTML=e.trim(),n.firstChild}function Te(e){e=oe(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function ke(e,t,n){for(var o=e[n],r=[];o;)(Le(o,t)||null==t)&&r.push(o),o=o[n];return r}function Me(e,t){return ke(e,t,"nextElementSibling")}function Oe(e,t){return ke(e,t,"previousElementSibling")}return e.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,n){n=n||e;for(var o=0;o<this.length;o++)t.call(n,this[o],o,this)}),e.fp_utils={$:X,deepExtend:_,hasClass:K,getWindowHeight:$,css:q,until:Q,prevUntil:G,nextUntil:J,prev:Z,next:ee,last:te,index:ne,getList:oe,hide:re,show:ie,isArrayOrList:le,addClass:ae,removeClass:se,appendTo:ce,wrap:ue,wrapAll:fe,wrapInner:de,unwrap:ve,closest:pe,after:he,before:ge,insertBefore:me,getScrollTop:Se,siblings:be,preventDefault:we,isFunction:ye,trigger:Ee,matches:Le,toggle:xe,createElementFromHTML:Ae,remove:Te,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:ke,nextAll:Me,prevAll:Oe,showError:U},function(Q,oe){var le=oe&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(oe.licenseKey)||t.domain.indexOf("alvarotrigo.com")>-1;if(!K(X("html"),a)){var ue=X("html, body"),me=X("body")[0],ke={};oe=_({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:e.fp_scrolloverflow?e.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof Q?X(Q)[0]:Q,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:v,slideSelector:T,v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},oe);var Ce,He,Ie,Be,Re=!1,ze=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),je="ontouchstart"in e||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,Ne="string"==typeof Q?X(Q)[0]:Q,Pe=$(),De=!1,Ve=!0,We=!0,Ye=[],Fe={m:{up:!0,down:!0,left:!0,right:!0}};Fe.k=_({},Fe.m);var Ue,Xe,_e,Ke,$e,qe,Qe,Ge=e.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"},Je={touchmove:"ontouchmove"in e?"touchmove":Ge.move,touchstart:"ontouchstart"in e?"touchstart":Ge.down},Ze='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',et=!1;try{var tt=Object.defineProperty({},"passive",{get:function(){et=!0}});e.addEventListener("testPassive",null,tt),e.removeEventListener("testPassive",null,tt)}catch(e){}var nt,ot=_({},oe),rt=!1,it=!0;Un(),e.fp_easings=_(e.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),Ne&&(ke.version="3.0.5",ke.setAutoScrolling=gt,ke.setRecordHistory=mt,ke.setScrollingSpeed=St,ke.setFitToSection=bt,ke.setLockAnchors=function(e){oe.lockAnchors=e},ke.setMouseWheelScrolling=wt,ke.setAllowScrolling=yt,ke.setKeyboardScrolling=Lt,ke.moveSectionUp=xt,ke.moveSectionDown=At,ke.silentMoveTo=Tt,ke.moveTo=kt,ke.moveSlideRight=Mt,ke.moveSlideLeft=Ot,ke.fitToSection=Wt,ke.reBuild=Ct,ke.setResponsive=Ht,ke.getFullpageData=function(){return oe},ke.destroy=function(n){gt(!1,"internal"),yt(!0),Et(!1),Lt(!1),ae(Ne,l),clearTimeout(Ke),clearTimeout(_e),clearTimeout(Xe),clearTimeout($e),clearTimeout(qe),e.removeEventListener("scroll",Vt),e.removeEventListener("hashchange",fn),e.removeEventListener("resize",En),t.removeEventListener("keydown",vn),t.removeEventListener("keyup",pn),["click","touchstart"].forEach(function(e){t.removeEventListener(e,It)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){t.removeEventListener(e,Rt,!0)}),clearTimeout(Ke),clearTimeout(_e),n&&(Vn(0),X("img[data-src], source[data-src], audio[data-src], iframe[data-src]",Ne).forEach(function(e){on(e,"src")}),X("img[data-srcset]").forEach(function(e){on(e,"srcset")}),Te(X(E+", "+j+", "+P)),q(X(h),{height:"","background-color":"",padding:""}),q(X(M),{width:""}),q(Ne,{height:"",position:"","-ms-touch-action":"","touch-action":""}),q(ue,{overflow:"",height:""}),se(X("html"),a),se(me,r),me.className.split(/\s+/).forEach(function(e){0===e.indexOf(s)&&se(me,e)}),X(h+", "+M).forEach(function(e){oe.scrollOverflowHandler&&oe.scrollOverflow&&oe.scrollOverflowHandler.remove(e),se(e,R+" "+c+" "+f);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles")),K(e,p)&&!rt&&e.removeAttribute("data-anchor")}),An(Ne),[S,B,H].forEach(function(e){X(e,Ne).forEach(function(e){ve(e)})}),q(Ne,{"-webkit-transition":"none",transition:"none"}),e.scrollTo(0,0),[p,k,I].forEach(function(e){se(X("."+e),e)}))},ke.getActiveSection=function(){return new $n(X(g)[0])},ke.getActiveSlide=function(){return en(X(O,X(g)[0])[0])},ke.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<X(oe.sectionSelector,Ne).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<X(oe.sectionSelector,Ne).length;t++)e.push(0);return e}(),options:oe,setAutoScrolling:gt},ke.shared={afterRenderActions:Dt},e.fullpage_api=ke,oe.$&&(oe.$.fn.fullpage=ke),oe.css3&&(oe.css3=function(){var n,o=t.createElement("p"),r={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var i in o.style.display="block",t.body.insertBefore(o,null),r)void 0!==o.style[i]&&(o.style[i]="translate3d(1px,1px,1px)",n=e.getComputedStyle(o).getPropertyValue(r[i]));return t.body.removeChild(o),void 0!==n&&n.length>0&&"none"!==n}()),oe.scrollBar=oe.scrollBar||oe.hybrid,function(){if(!oe.anchors.length){var e="[data-anchor]",t=X(oe.sectionSelector.split(",").join(e+",")+e,Ne);t.length&&(rt=!0,t.forEach(function(e){oe.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!oe.navigationTooltips.length){var e="[data-tooltip]",n=X(oe.sectionSelector.split(",").join(e+",")+e,Ne);n.length&&n.forEach(function(e){oe.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){q(Ne,{height:"100%",position:"relative"}),ae(Ne,n),ae(X("html"),a),Pe=$(),se(Ne,l),ae(X(oe.sectionSelector,Ne),p),ae(X(oe.slideSelector,Ne),k);for(var e=X(h),o=0;o<e.length;o++){var r=o,i=e[o],s=X(M,i),u=s.length;i.setAttribute("data-fp-styles",i.getAttribute("style")),jt(i,r),Nt(i,r),u>0?zt(i,s,u):oe.verticalCentered&&Mn(i)}oe.fixedElements&&oe.css3&&X(oe.fixedElements).forEach(function(e){me.appendChild(e)}),oe.navigation&&function(){var e=t.createElement("div");e.setAttribute("id",y);var n=t.createElement("ul");e.appendChild(n),ce(e,me);var o=X(E)[0];ae(o,"fp-"+oe.navigationPosition),oe.showActiveTooltip&&ae(o,A);for(var r="",i=0;i<X(h).length;i++){var l="";oe.anchors.length&&(l=oe.anchors[i]),r+='<li><a href="#'+l+'"><span class="fp-sr-only">'+Pt(i,"Section")+"</span><span></span></a>";var a=oe.navigationTooltips[i];void 0!==a&&""!==a&&(r+='<div class="'+L+" fp-"+oe.navigationPosition+'">'+a+"</div>"),r+="</li>"}X("ul",o)[0].innerHTML=r,q(X(E),{"margin-top":"-"+X(E)[0].offsetHeight/2+"px"});var s=X("li",X(E)[0])[ne(X(g)[0],h)];ae(X("a",s),c)}(),X('iframe[src*="youtube.com/embed/"]',Ne).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)}),oe.scrollOverflow&&(Ue=oe.scrollOverflowHandler.init(oe))}(),yt(!0),Et(!0),gt(oe.autoScrolling,"internal"),Ln(),Nn(),"complete"===t.readyState&&un(),e.addEventListener("load",un),oe.scrollOverflow||Dt(),e.addEventListener("scroll",Vt),e.addEventListener("hashchange",fn),e.addEventListener("blur",Sn),e.addEventListener("resize",En),t.addEventListener("keydown",vn),t.addEventListener("keyup",pn),["click","touchstart"].forEach(function(e){t.addEventListener(e,It)}),oe.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){Bt(e,!1)}),["mouseleave","touchend"].forEach(function(e){Bt(e,!0)})));var lt=!1,at=0,st=0,ct=0,ut=0,ft=0,dt=(new Date).getTime(),vt=0,pt=0,ht=Pe;return ke}function gt(e,t){e||Vn(0),Fn("autoScrolling",e,t);var n=X(g)[0];if(oe.autoScrolling&&!oe.scrollBar)q(ue,{overflow:"hidden",height:"100%"}),mt(ot.recordHistory,"internal"),q(Ne,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&Vn(n.offsetTop);else if(q(ue,{overflow:"visible",height:"initial"}),mt(!!oe.autoScrolling&&ot.recordHistory,"internal"),q(Ne,{"-ms-touch-action":"","touch-action":""}),null!=n){var o=tn(n.offsetTop);o.element.scrollTo(0,o.options)}}function mt(e,t){Fn("recordHistory",e,t)}function St(e,t){Fn("scrollingSpeed",e,t)}function bt(e,t){Fn("fitToSection",e,t)}function wt(n){n?(function(){var n,o="";e.addEventListener?n="addEventListener":(n="attachEvent",o="on");var r="onwheel"in t.createElement("div")?"wheel":void 0!==t.onmousewheel?"mousewheel":"DOMMouseScroll",i=!!et&&{passive:!1};"DOMMouseScroll"==r?t[n](o+"MozMousePixelScroll",$t,i):t[n](o+r,$t,i)}(),Ne.addEventListener("mousedown",hn),Ne.addEventListener("mouseup",gn)):(t.addEventListener?(t.removeEventListener("mousewheel",$t,!1),t.removeEventListener("wheel",$t,!1),t.removeEventListener("MozMousePixelScroll",$t,!1)):t.detachEvent("onmousewheel",$t),Ne.removeEventListener("mousedown",hn),Ne.removeEventListener("mouseup",gn))}function yt(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach(function(t){Yn(e,t,"m")}):Yn(e,"all","m")}function Et(e){e?(wt(!0),function(){if(ze||je){oe.autoScrolling&&(me.removeEventListener(Je.touchmove,Ft,{passive:!1}),me.addEventListener(Je.touchmove,Ft,{passive:!1}));var e=oe.touchWrapper;e.removeEventListener(Je.touchstart,_t),e.removeEventListener(Je.touchmove,Ut,{passive:!1}),e.addEventListener(Je.touchstart,_t),e.addEventListener(Je.touchmove,Ut,{passive:!1})}}()):(wt(!1),function(){if(ze||je){oe.autoScrolling&&(me.removeEventListener(Je.touchmove,Ut,{passive:!1}),me.removeEventListener(Je.touchmove,Ft,{passive:!1}));var e=oe.touchWrapper;e.removeEventListener(Je.touchstart,_t),e.removeEventListener(Je.touchmove,Ut,{passive:!1})}}())}function Lt(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach(function(t){Yn(e,t,"k")}):(Yn(e,"all","k"),oe.keyboardScrolling=e)}function xt(){var e=G(X(g)[0],h);e||!oe.loopTop&&!oe.continuousVertical||(e=te(X(h))),null!=e&&Gt(e,null,!0)}function At(){var e=J(X(g)[0],h);e||!oe.loopBottom&&!oe.continuousVertical||(e=X(h)[0]),null!=e&&Gt(e,null,!1)}function Tt(e,t){St(0,"internal"),kt(e,t),St(ot.scrollingSpeed,"internal")}function kt(e,t){var n=Hn(e);void 0!==t?In(e,t):null!=n&&Gt(n)}function Mt(e){qt("right",e)}function Ot(e){qt("left",e)}function Ct(t){if(!K(Ne,l)){De=!0,Pe=$();for(var n=X(h),o=0;o<n.length;++o){var r=n[o],i=X(H,r)[0],a=X(M,r);oe.verticalCentered&&q(X(S,r),{height:On(r)+"px"}),q(r,{height:Pe+"px"}),a.length>1&&wn(i,X(O,i)[0])}oe.scrollOverflow&&Ue.createScrollBarForAll();var s=ne(X(g)[0],h);s&&Tt(s+1),De=!1,ye(oe.afterResize)&&t&&oe.afterResize.call(Ne,e.innerWidth,e.innerHeight),ye(oe.afterReBuild)&&!t&&oe.afterReBuild.call(Ne)}}function Ht(e){var t=K(me,r);e?t||(gt(!1,"internal"),bt(!1,"internal"),re(X(E)),ae(me,r),ye(oe.afterResponsive)&&oe.afterResponsive.call(Ne,e),oe.scrollOverflow&&Ue.createScrollBarForAll()):t&&(gt(ot.autoScrolling,"internal"),bt(ot.autoScrolling,"internal"),ie(X(E)),se(me,r),ye(oe.afterResponsive)&&oe.afterResponsive.call(Ne,e))}function It(e){var t=e.target;t&&pe(t,E+" a")?function(e){we(e);var t=ne(pe(this,E+" li"));Gt(X(h)[t])}.call(t,e):Le(t,x)?function(){Ee(Z(this),"click")}.call(t):Le(t,P)?function(){var e=pe(this,h);K(this,D)?Fe.m.left&&Ot(e):Fe.m.right&&Mt(e)}.call(t,e):Le(t,N)||null!=pe(t,N)?function(e){we(e);var t=X(H,pe(this,h))[0],n=X(M,t)[ne(pe(this,"li"))];wn(t,n)}.call(t,e):pe(t,oe.menu+" [data-menuanchor]")&&function(e){!X(oe.menu)[0]||!oe.lockAnchors&&oe.anchors.length||(we(e),kt(this.getAttribute("data-menuanchor")))}.call(t,e)}function Bt(e,n){t["fp_"+e]=n,t.addEventListener(e,Rt,!0)}function Rt(e){e.target!=t&&("touchend"===e.type&&(it=!1,setTimeout(function(){it=!0},800)),("mouseenter"!==e.type||it)&&oe.normalScrollElements.split(",").forEach(function(n){null!=pe(e.target,n)&&Et(t["fp_"+e.type])}))}function zt(e,n,o){var r=100*o,i=100/o,l=t.createElement("div");l.className=C,fe(n,l);var a=t.createElement("div");a.className=I,fe(n,a),q(X(B,e),{width:r+"%"}),o>1&&(oe.controlArrows&&function(e){var t=[Ae('<div class="'+V+'"></div>'),Ae('<div class="'+Y+'"></div>')];he(X(H,e)[0],t),"#fff"!==oe.controlArrowColor&&(q(X(F,e),{"border-color":"transparent transparent transparent "+oe.controlArrowColor}),q(X(W,e),{"border-color":"transparent "+oe.controlArrowColor+" transparent transparent"})),oe.loopHorizontal||re(X(W,e))}(e),oe.slidesNavigation&&function(e,t){ce(Ae('<div class="'+z+'"><ul></ul></div>'),e);var n=X(j,e)[0];ae(n,"fp-"+oe.slidesNavPosition);for(var o=0;o<t;o++)ce(Ae('<li><a href="#"><span class="fp-sr-only">'+Pt(o,"Slide")+"</span><span></span></a></li>"),X("ul",n)[0]);q(n,{"margin-left":"-"+n.innerWidth/2+"px"}),ae(X("a",X("li",n)[0]),c)}(e,o)),n.forEach(function(e){q(e,{width:i+"%"}),oe.verticalCentered&&Mn(e)});var s=X(O,e)[0];null!=s&&(0!==ne(X(g),h)||0===ne(X(g),h)&&0!==ne(s))?Dn(s,"internal"):ae(n[0],c)}function jt(e,t){t||null!=X(g)[0]||ae(e,c),Be=X(g)[0],q(e,{height:Pe+"px"}),oe.paddingTop&&q(e,{"padding-top":oe.paddingTop}),oe.paddingBottom&&q(e,{"padding-bottom":oe.paddingBottom}),void 0!==oe.sectionsColor[t]&&q(e,{"background-color":oe.sectionsColor[t]}),void 0!==oe.anchors[t]&&e.setAttribute("data-anchor",oe.anchors[t])}function Nt(e,t){void 0!==oe.anchors[t]&&K(e,c)&&Tn(oe.anchors[t],t),oe.menu&&oe.css3&&null!=pe(X(oe.menu)[0],o)&&X(oe.menu).forEach(function(e){me.appendChild(e)})}function Pt(e,t){return oe.navigationTooltips[e]||oe.anchors[e]||t+" "+(e+1)}function Dt(){var e,t=X(g)[0];ae(t,f),rn(t),ln(t),oe.scrollOverflow&&oe.scrollOverflowHandler.afterLoad(),(!(e=Hn(dn().section))||void 0!==e&&ne(e)===ne(Be))&&ye(oe.afterLoad)&&Jt("afterLoad",{activeSection:null,element:t,direction:null,anchorLink:t.getAttribute("data-anchor"),sectionIndex:ne(t,h)}),ye(oe.afterRender)&&Jt("afterRender")}function Vt(){var e,t,n,o;if(!oe.autoScrolling||oe.scrollBar){var r=Se(),i=function(e){var t=e>at?"down":"up";return at=e,vt=e,t}(r),l=0,a=r+$()/2,s=me.offsetHeight-$()===r,u=X(h);if(s)l=u.length-1;else if(r)for(var d=0;d<u.length;++d)u[d].offsetTop<=a&&(l=d);else l=0;if(t=i,n=X(g)[0].offsetTop,o=n+$(),("up"==t?o>=Se()+$():n<=Se())&&(K(X(g)[0],f)||(ae(X(g)[0],f),se(be(X(g)[0]),f))),!K(e=u[l],c)){lt=!0;var v,p,m=X(g)[0],S=ne(m,h)+1,b=kn(e),w=e.getAttribute("data-anchor"),y=ne(e,h)+1,E=X(O,e)[0],L={activeSection:m,sectionIndex:y-1,anchorLink:w,element:e,leavingSection:S,direction:b};E&&(p=E.getAttribute("data-anchor"),v=ne(E)),We&&(ae(e,c),se(be(e),c),ye(oe.onLeave)&&Jt("onLeave",L),ye(oe.afterLoad)&&Jt("afterLoad",L),sn(m),rn(e),ln(e),Tn(w,y-1),oe.anchors.length&&(Ce=w),Rn(v,p,w)),clearTimeout($e),$e=setTimeout(function(){lt=!1},100)}oe.fitToSection&&(clearTimeout(qe),qe=setTimeout(function(){oe.fitToSection&&X(g)[0].offsetHeight<=Pe&&Wt()},oe.fitToSectionDelay))}}function Wt(){We&&(De=!0,Gt(X(g)[0]),De=!1)}function Yt(e){if(Fe.m[e]){var t="down"===e?At:xt;if(oe.scrollOverflow){var n=oe.scrollOverflowHandler.scrollable(X(g)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!oe.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function Ft(e){oe.autoScrolling&&Xt(e)&&Fe.m.up&&we(e)}function Ut(t){var n=pe(t.target,h)||X(g)[0];if(Xt(t)){oe.autoScrolling&&we(t);var o=Pn(t);ut=o.y,ft=o.x,X(H,n).length&&Math.abs(ct-ft)>Math.abs(st-ut)?!Re&&Math.abs(ct-ft)>e.innerWidth/100*oe.touchSensitivity&&(ct>ft?Fe.m.right&&Mt(n):Fe.m.left&&Ot(n)):oe.autoScrolling&&We&&Math.abs(st-ut)>e.innerHeight/100*oe.touchSensitivity&&(st>ut?Yt("down"):ut>st&&Yt("up"))}}function Xt(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function _t(e){if(oe.fitToSection&&(nt=!1),Xt(e)){var t=Pn(e);st=t.y,ct=t.x}}function Kt(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function $t(t){var n=(new Date).getTime(),o=K(X(d)[0],w);if(!Fe.m.down&&!Fe.m.up)return we(t),!1;if(oe.autoScrolling&&!Ie&&!o){var r=(t=t||e.event).wheelDelta||-t.deltaY||-t.detail,i=Math.max(-1,Math.min(1,r)),l=void 0!==t.wheelDeltaX||void 0!==t.deltaX,a=Math.abs(t.wheelDeltaX)<Math.abs(t.wheelDelta)||Math.abs(t.deltaX)<Math.abs(t.deltaY)||!l;Ye.length>149&&Ye.shift(),Ye.push(Math.abs(r)),oe.scrollBar&&we(t);var s=n-dt;return dt=n,s>200&&(Ye=[]),We&&Kt(Ye,10)>=Kt(Ye,70)&&a&&Yt(i<0?"down":"up"),!1}oe.fitToSection&&(nt=!1)}function qt(e,t){var n=null==t?X(g)[0]:t,o=X(H,n)[0];if(!(null==o||Re||X(M,o).length<2)){var r=X(O,o)[0],i=null;if(null==(i="left"===e?G(r,M):J(r,M))){if(!oe.loopHorizontal)return;var l=be(r);i="left"===e?l[l.length-1]:l[0]}Re=!ke.test.isTesting,wn(o,i,e)}}function Qt(){for(var e=X(O),t=0;t<e.length;t++)Dn(e[t],"internal")}function Gt(e,t,n){if(null!=e){var o,r,i={element:e,callback:t,isMovementUp:n,dtop:function(e){var t=e.offsetHeight,n=e.offsetTop,o=n,r=n>vt,i=o-Pe+t,l=oe.bigSectionsDestination;return t>Pe?(r||l)&&"bottom"!==l||(o=i):(r||De&&null==ee(e))&&(o=i),vt=o,o}(e),yMovement:kn(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:ne(e,h),activeSlide:X(O,e)[0],activeSection:X(g)[0],leavingSection:ne(X(g),h)+1,localIsResizing:De};if(!(i.activeSection==e&&!De||oe.scrollBar&&Se()===i.dtop&&!K(e,b))){if(null!=i.activeSlide&&(o=i.activeSlide.getAttribute("data-anchor"),r=ne(i.activeSlide)),!i.localIsResizing){var l=i.yMovement;if(void 0!==n&&(l=n?"up":"down"),i.direction=l,ye(oe.onLeave)&&!1===Jt("onLeave",i))return}oe.autoScrolling&&oe.continuousVertical&&void 0!==i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&(i=function(e){return e.isMovementUp?ge(X(g)[0],Me(e.activeSection,h)):he(X(g)[0],Oe(e.activeSection,h).reverse()),Vn(X(g)[0].offsetTop),Qt(),e.wrapAroundElements=e.activeSection,e.dtop=e.element.offsetTop,e.yMovement=kn(e.element),e.leavingSection=ne(e.activeSection,h)+1,e.sectionIndex=ne(e.element,h),e}(i)),i.localIsResizing||sn(i.activeSection),oe.scrollOverflow&&oe.scrollOverflowHandler.beforeLeave(),ae(e,c),se(be(e),c),rn(e),oe.scrollOverflow&&oe.scrollOverflowHandler.onLeave(),We=ke.test.isTesting,Rn(r,o,i.anchorLink,i.sectionIndex),function(e){if(oe.css3&&oe.autoScrolling&&!oe.scrollBar){var t="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";Cn(t,!0),oe.scrollingSpeed?(clearTimeout(_e),_e=setTimeout(function(){nn(e)},oe.scrollingSpeed)):nn(e)}else{var n=tn(e.dtop);ke.test.top=-e.dtop+"px",Xn(n.element,n.options,oe.scrollingSpeed,function(){oe.scrollBar?setTimeout(function(){nn(e)},30):nn(e)})}}(i),Ce=i.anchorLink,Tn(i.anchorLink,i.sectionIndex)}}}function Jt(e,t){var n,o=function(e,t){var n;return(n=oe.v2compatible?{afterRender:function(){return[Ne]},onLeave:function(){return[t.activeSection,t.leavingSection,t.sectionIndex+1,t.direction]},afterLoad:function(){return[t.element,t.anchorLink,t.sectionIndex+1]},afterSlideLoad:function(){return[t.destiny,t.anchorLink,t.sectionIndex+1,t.slideAnchor,t.slideIndex]},onSlideLeave:function(){return[t.prevSlide,t.anchorLink,t.sectionIndex+1,t.prevSlideIndex,t.direction,t.slideIndex]}}:{afterRender:function(){return{section:Zt(X(g)[0]),slide:en(X(O,X(g)[0])[0])}},onLeave:function(){return{origin:Zt(t.activeSection),destination:Zt(t.element),direction:t.direction}},afterLoad:function(){return n.onLeave()},afterSlideLoad:function(){return{section:Zt(t.section),origin:en(t.prevSlide),destination:en(t.destiny),direction:t.direction}},onSlideLeave:function(){return n.afterSlideLoad()}})[e]()}(e,t);if(oe.v2compatible){if(!1===oe[e].apply(o[0],o.slice(1)))return!1}else if(Ee(Ne,e,o),!1===oe[e].apply(o[Object.keys(o)[0]],(n=o,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function Zt(e){return e?new $n(e):null}function en(e){return e?new qn(e):null}function tn(t){var n={};return oe.autoScrolling&&!oe.scrollBar?(n.options=-t,n.element=X(o)[0]):(n.options=t,n.element=e),n}function nn(e){!function(e){null!=e.wrapAroundElements&&(e.isMovementUp?ge(X(h)[0],e.wrapAroundElements):he(X(h)[X(h).length-1],e.wrapAroundElements),Vn(X(g)[0].offsetTop),Qt())}(e),ye(oe.afterLoad)&&!e.localIsResizing&&Jt("afterLoad",e),oe.scrollOverflow&&oe.scrollOverflowHandler.afterLoad(),e.localIsResizing||ln(e.element),ae(e.element,f),se(be(e.element),f),We=!0,ye(e.callback)&&e.callback()}function on(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function rn(e){oe.lazyLoading&&X("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",cn(e)).forEach(function(e){if(["src","srcset"].forEach(function(t){var n=e.getAttribute("data-"+t);null!=n&&n&&on(e,t)}),Le(e,"source")){var t=pe(e,"video, audio");t&&t.load()}})}function ln(e){var t=cn(e);X("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),X('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&an(e),e.onload=function(){e.hasAttribute("data-autoplay")&&an(e)}})}function an(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function sn(e){var t=cn(e);X("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),X('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function cn(e){var t=X(O,e);return t.length&&(e=t[0]),e}function un(){var e=dn(),t=e.section,n=e.slide;t&&(oe.animateAnchor?In(t,n):Tt(t,n))}function fn(){if(!lt&&!oe.lockAnchors){var e=dn(),t=e.section,n=e.slide,o=void 0===Ce,r=void 0===Ce&&void 0===n&&!Re;t&&t.length&&(t&&t!==Ce&&!o||r||!Re&&He!=n)&&In(t,n)}}function dn(){var t,n,o=e.location.hash;if(o.length){var r=o.replace("#","").split("/"),i=o.indexOf("#/")>-1;t=i?"/"+r[1]:decodeURIComponent(r[0]);var l=i?r[2]:r[1];l&&l.length&&(n=decodeURIComponent(l))}return{section:t,slide:n}}function vn(e){clearTimeout(Qe);var n=t.activeElement,o=e.keyCode;9===o?function(e){var n=e.shiftKey,o=t.activeElement,r=mn(cn(X(g)[0]));function i(e){return we(e),r[0]?r[0].focus():null}(function(e){var n=mn(t),o=n.indexOf(t.activeElement),r=e.shiftKey?o-1:o+1,i=n[r],l=en(pe(i,M)),a=Zt(pe(i,h));return!l&&!a})(e)||(o?null==pe(o,g+","+g+" "+O)&&(o=i(e)):i(e),(!n&&o==r[r.length-1]||n&&o==r[0])&&we(e))}(e):Le(n,"textarea")||Le(n,"input")||Le(n,"select")||"true"===n.getAttribute("contentEditable")||""===n.getAttribute("contentEditable")||!oe.keyboardScrolling||!oe.autoScrolling||([40,38,32,33,34].indexOf(o)>-1&&we(e),Ie=e.ctrlKey,Qe=setTimeout(function(){!function(e){var t=e.shiftKey;if(We||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:Fe.k.up&&xt();break;case 32:if(t&&Fe.k.up){xt();break}case 40:case 34:Fe.k.down&&At();break;case 36:Fe.k.up&&kt(1);break;case 35:Fe.k.down&&kt(X(h).length);break;case 37:Fe.k.left&&Ot();break;case 39:Fe.k.right&&Mt()}}(e)},150))}function pn(e){Ve&&(Ie=e.ctrlKey)}function hn(e){2==e.which&&(pt=e.pageY,Ne.addEventListener("mousemove",bn))}function gn(e){2==e.which&&Ne.removeEventListener("mousemove",bn)}function mn(e){return[].slice.call(X(Ze,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function Sn(){Ve=!1,Ie=!1}function bn(e){We&&(e.pageY<pt&&Fe.m.up?xt():e.pageY>pt&&Fe.m.down&&At()),pt=e.pageY}function wn(e,t,n){var o,r,i=pe(e,h),l={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:ne(t),section:i,sectionIndex:ne(i,h),anchorLink:i.getAttribute("data-anchor"),slidesNav:X(j,i)[0],slideAnchor:jn(t),prevSlide:X(O,i)[0],prevSlideIndex:ne(X(O,i)[0]),localIsResizing:De};l.xMovement=(o=l.prevSlideIndex,r=l.slideIndex,o==r?"none":o>r?"left":"right"),l.direction=l.direction?l.direction:l.xMovement,l.localIsResizing||(We=!1),oe.onSlideLeave&&!l.localIsResizing&&"none"!==l.xMovement&&ye(oe.onSlideLeave)&&!1===Jt("onSlideLeave",l)?Re=!1:(ae(t,c),se(be(t),c),l.localIsResizing||(sn(l.prevSlide),rn(t)),!oe.loopHorizontal&&oe.controlArrows&&(xe(X(W,i),0!==l.slideIndex),xe(X(F,i),null!=ee(t))),K(i,c)&&!l.localIsResizing&&Rn(l.slideIndex,l.slideAnchor,l.anchorLink,l.sectionIndex),function(e,t,n){var o=t.destinyPos;if(oe.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";ke.test.translate3dH[t.sectionIndex]=r,q(xn(X(B,e)),Wn(r)),Ke=setTimeout(function(){n&&yn(t)},oe.scrollingSpeed)}else ke.test.left[t.sectionIndex]=Math.round(o.left),Xn(e,Math.round(o.left),oe.scrollingSpeed,function(){n&&yn(t)})}(e,l,!0))}function yn(e){var t,n;t=e.slidesNav,n=e.slideIndex,oe.slidesNavigation&&null!=t&&(se(X(u,t),c),ae(X("a",X("li",t)[n]),c)),e.localIsResizing||(ye(oe.afterSlideLoad)&&Jt("afterSlideLoad",e),We=!0,ln(e.destiny)),Re=!1}function En(){if(Ln(),ze){var e=t.activeElement;if(!Le(e,"textarea")&&!Le(e,"input")&&!Le(e,"select")){var n=$();Math.abs(n-ht)>20*Math.max(ht,n)/100&&(Xe=setTimeout(function(){Ct(!0),ht=n},navigator.userAgent.match("CriOS")?50:0))}}else clearTimeout(Xe),Xe=setTimeout(function(){Ct(!0)},350)}function Ln(){var t=oe.responsive||oe.responsiveWidth,n=oe.responsiveHeight,o=t&&e.innerWidth<t,r=n&&e.innerHeight<n;t&&n?Ht(o||r):t?Ht(o):n&&Ht(r)}function xn(e){var t="all "+oe.scrollingSpeed+"ms "+oe.easingcss3;return se(e,i),q(e,{"-webkit-transition":t,transition:t})}function An(e){return ae(e,i)}function Tn(e,t){var n;n=e,X(oe.menu).forEach(function(e){oe.menu&&null!=e&&(se(X(u,e),c),ae(X('[data-menuanchor="'+n+'"]',e),c))}),function(e,t){oe.navigation&&null!=X(E)[0]&&(se(X(u,X(E)[0]),c),ae(e?X('a[href="#'+e+'"]',X(E)[0]):X("a",X("li",X(E)[0])[t]),c))}(e,t)}function kn(e){var t=ne(X(g)[0],h),n=ne(e,h);return t==n?"none":t>n?"up":"down"}function Mn(e){if(!K(e,R)){var n=t.createElement("div");n.className=m,n.style.height=On(e)+"px",ae(e,R),de(e,n)}}function On(e){var t=Pe;if(oe.paddingTop||oe.paddingBottom){var n=e;K(n,p)||(n=pe(e,h));var o=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"]);t=Pe-o}return t}function Cn(e,t){t?xn(Ne):An(Ne),q(Ne,Wn(e)),ke.test.translate3d=e,setTimeout(function(){se(Ne,i)},10)}function Hn(e){var t=X(h+'[data-anchor="'+e+'"]',Ne)[0];if(!t){var n=void 0!==e?e-1:0;t=X(h)[n]}return t}function In(e,t){var n=Hn(e);if(null!=n){var o=function(e,t){var n=X(M+'[data-anchor="'+e+'"]',t)[0];return null==n&&(e=void 0!==e?e:0,n=X(M,t)[e]),n}(t,n);jn(n)===Ce||K(n,c)?Bn(o):Gt(n,function(){Bn(o)})}}function Bn(e){null!=e&&wn(pe(e,H),e)}function Rn(e,t,n,o){var r="";oe.anchors.length&&!oe.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),He=t,zn(r+"/"+t)):null!=e?(He=t,zn(n)):zn(n)),Nn()}function zn(t){if(oe.recordHistory)location.hash=t;else if(ze||je)e.history.replaceState(void 0,void 0,"#"+t);else{var n=e.location.href.split("#")[0];e.location.replace(n+"#"+t)}}function jn(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=ne(e);return null==t&&(t=n),t}function Nn(){var e=X(g)[0],t=X(O,e)[0],n=jn(e),o=jn(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+s+"-[^\\s]+\\b","g");me.className=me.className.replace(i,""),ae(me,s+"-"+r)}function Pn(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,je&&Xt(e)&&oe.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function Dn(e,t){St(0,"internal"),void 0!==t&&(De=!0),wn(pe(e,H),e),void 0!==t&&(De=!1),St(ot.scrollingSpeed,"internal")}function Vn(e){var t=Math.round(e);if(oe.css3&&oe.autoScrolling&&!oe.scrollBar)Cn("translate3d(0px, -"+t+"px, 0px)",!1);else if(oe.autoScrolling&&!oe.scrollBar)q(Ne,{top:-t+"px"}),ke.test.top=-t+"px";else{var n=tn(t);_n(n.element,n.options)}}function Wn(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Yn(e,t,n){"all"!==t?Fe[n][t]=e:Object.keys(Fe[n]).forEach(function(t){Fe[n][t]=e})}function Fn(e,t,n){oe[e]=t,"internal"!==n&&(ot[e]=t)}function Un(){var e=oe.licenseKey,t="font-size: 15px;background:yellow;";le?e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)):(U("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),U("error","https://github.com/alvarotrigo/fullPage.js#options.")),K(X("html"),a)?U("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(oe.continuousVertical&&(oe.loopTop||oe.loopBottom)&&(oe.continuousVertical=!1,U("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!oe.scrollOverflow||!oe.scrollBar&&oe.autoScrolling||U("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!oe.continuousVertical||!oe.scrollBar&&oe.autoScrolling||(oe.continuousVertical=!1,U("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),oe.scrollOverflow&&null==oe.scrollOverflowHandler&&(oe.scrollOverflow=!1,U("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),["fadingEffect","continuousHorizontal","scrollHorizontally","interlockedSlides","resetSliders","responsiveSlides","offsetSections","dragAndMove","scrollOverflowReset","parallax","cards"].forEach(function(e){oe[e]&&U("warn","fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: "+e)}),oe.anchors.forEach(function(e){var t=[].slice.call(X("[name]")).filter(function(t){return t.getAttribute("name")&&t.getAttribute("name").toLowerCase()==e.toLowerCase()}),n=[].slice.call(X("[id]")).filter(function(t){return t.getAttribute("id")&&t.getAttribute("id").toLowerCase()==e.toLowerCase()});(n.length||t.length)&&(U("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),n.length&&U("error",'"'+e+'" is is being used by another element `id` property'),t.length&&U("error",'"'+e+'" is is being used by another element `name` property'))}))}function Xn(t,n,o,r){var i=function(t){return t.self!=e&&K(t,C)?t.scrollLeft:!oe.autoScrolling||oe.scrollBar?Se():t.offsetTop}(t),l=n-i,a=0;nt=!0;var s=function(){if(nt){var c=n;a+=20,o&&(c=e.fp_easings[oe.easing](a,i,l,o)),_n(t,c),a<o?setTimeout(s,20):void 0!==r&&r()}else a<o&&r()};s()}function _n(t,n){!oe.autoScrolling||oe.scrollBar||t.self!=e&&K(t,C)?t.self!=e&&K(t,C)?t.scrollLeft=n:t.scrollTo(0,n):t.style.top=n+"px"}function Kn(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=ne(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function $n(e){Kn.call(this,e,h)}function qn(e){Kn.call(this,e,M)}Un()}}),window.jQuery&&window.fullpage&&function(e,t){"use strict";e&&t?e.fn.fullpage=function(n){n.$=e,new t(this[0],n)}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);