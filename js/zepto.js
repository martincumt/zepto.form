!function(t){String.prototype.trim===t&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===t&&(Array.prototype.reduce=function(e){if(void 0===this||null===this)throw new TypeError;var n,i=Object(this),r=i.length>>>0,o=0;if("function"!=typeof e)throw new TypeError;if(0==r&&1==arguments.length)throw new TypeError;if(arguments.length>=2)n=arguments[1];else for(;;){if(o in i){n=i[o++];break}if(++o>=r)throw new TypeError}for(;r>o;)o in i&&(n=e.call(t,n,i[o],o,i)),o++;return n})}();var Zepto=function(){function t(t){return null==t?String(t):Y[J.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&t.__proto__==Object.prototype}function a(t){return t instanceof Array}function s(t){return"number"==typeof t.length}function u(t){return M.call(t,function(t){return null!=t})}function c(t){return t.length>0?S.fn.concat.apply([],t):t}function l(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function f(t){return t in _?_[t]:_[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function h(t,e){return"number"!=typeof e||D[l(t)]?e:e+"px"}function p(t){var e,n;return k[t]||(e=A.createElement(t),A.body.appendChild(e),n=$(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),k[t]=n),k[t]}function d(t){return"children"in t?O.call(t.children):S.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function m(t,e,n){for(E in e)n&&(o(e[E])||a(e[E]))?(o(e[E])&&!o(t[E])&&(t[E]={}),a(e[E])&&!a(t[E])&&(t[E]=[]),m(t[E],e[E],n)):e[E]!==T&&(t[E]=e[E])}function v(t,e){return e===T?S(t):S(t).filter(e)}function g(t,n,i,r){return e(n)?n.call(t,i,r):n}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function b(t,e){var n=t.className,i=n&&n.baseVal!==T;return e===T?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function w(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:isNaN(e=Number(t))?/^[\[\{]/.test(t)?S.parseJSON(t):t:e):t}catch(n){return t}}function x(t,e){e(t);for(var n in t.childNodes)x(t.childNodes[n],e)}var T,E,S,j,N,P,C=[],O=C.slice,M=C.filter,A=window.document,k={},_={},$=A.defaultView.getComputedStyle,D={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},R=/^\s*<(\w+|!)[^>]*>/,Z=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,L=/^(?:body|html)$/i,z=["val","css","html","text","data","width","height","offset"],U=["after","prepend","before","append"],q=A.createElement("table"),F=A.createElement("tr"),B={tr:A.createElement("tbody"),tbody:q,thead:q,tfoot:q,td:F,th:F,"*":A.createElement("div")},I=/complete|loaded|interactive/,X=/^\.([\w-]+)$/,H=/^#([\w-]*)$/,V=/^[\w-]+$/,Y={},J=Y.toString,G={},W=A.createElement("div");return G.matches=function(t,e){if(!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=W).appendChild(t),i=~G.qsa(r,e).indexOf(t),o&&W.removeChild(t),i},N=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return M.call(t,function(e,n){return t.indexOf(e)==n})},G.fragment=function(t,e,n){t.replace&&(t=t.replace(Z,"<$1></$2>")),e===T&&(e=R.test(t)&&RegExp.$1),e in B||(e="*");var i,r,a=B[e];return a.innerHTML=""+t,r=S.each(O.call(a.childNodes),function(){a.removeChild(this)}),o(n)&&(i=S(r),S.each(n,function(t,e){z.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},G.Z=function(t,e){return t=t||[],t.__proto__=S.fn,t.selector=e||"",t},G.isZ=function(t){return t instanceof G.Z},G.init=function(t,n){if(t){if(e(t))return S(A).ready(t);if(G.isZ(t))return t;var i;if(a(t))i=u(t);else if(r(t))i=[o(t)?S.extend({},t):t],t=null;else if(R.test(t))i=G.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==T)return S(n).find(t);i=G.qsa(A,t)}return G.Z(i,t)}return G.Z()},S=function(t,e){return G.init(t,e)},S.extend=function(t){var e,n=O.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){m(t,n,e)}),t},G.qsa=function(t,e){var n;return i(t)&&H.test(e)?(n=t.getElementById(RegExp.$1))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:O.call(X.test(e)?t.getElementsByClassName(RegExp.$1):V.test(e)?t.getElementsByTagName(e):t.querySelectorAll(e))},S.contains=function(t,e){return t!==e&&t.contains(e)},S.type=t,S.isFunction=e,S.isWindow=n,S.isArray=a,S.isPlainObject=o,S.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},S.inArray=function(t,e,n){return C.indexOf.call(e,t,n)},S.camelCase=N,S.trim=function(t){return t.trim()},S.uuid=0,S.support={},S.expr={},S.map=function(t,e){var n,i,r,o=[];if(s(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&o.push(n);else for(r in t)n=e(t[r],r),null!=n&&o.push(n);return c(o)},S.each=function(t,e){var n,i;if(s(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},S.grep=function(t,e){return M.call(t,e)},window.JSON&&(S.parseJSON=JSON.parse),S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){Y["[object "+e+"]"]=e.toLowerCase()}),S.fn={forEach:C.forEach,reduce:C.reduce,push:C.push,sort:C.sort,indexOf:C.indexOf,concat:C.concat,map:function(t){return S(S.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return S(O.apply(this,arguments))},ready:function(t){return I.test(A.readyState)?t(S):A.addEventListener("DOMContentLoaded",function(){t(S)},!1),this},get:function(t){return t===T?O.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return C.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):S(M.call(this,function(e){return G.matches(e,t)}))},add:function(t,e){return S(P(this.concat(S(t,e))))},is:function(t){return this.length>0&&G.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==T)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):s(t)&&e(t.item)?O.call(t):S(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return S(n)},has:function(t){return this.filter(function(){return r(t)?S.contains(this,t):S(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:S(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:S(t)},find:function(t){var e,n=this;return e="object"==typeof t?S(t).filter(function(){var t=this;return C.some.call(n,function(e){return S.contains(e,t)})}):1==this.length?S(G.qsa(this[0],t)):this.map(function(){return G.qsa(this,t)})},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=S(t));n&&!(r?r.indexOf(n)>=0:G.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return S(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=S.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return v(e,t)},parent:function(t){return v(P(this.pluck("parentNode")),t)},children:function(t){return v(this.map(function(){return d(this)}),t)},contents:function(){return this.map(function(){return O.call(this.childNodes)})},siblings:function(t){return v(this.map(function(t,e){return M.call(d(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return S.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null),"none"==$(this,"").getPropertyValue("display")&&(this.style.display=p(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=S(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){S(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){S(this[0]).before(t=S(t));for(var e;(e=t.children()).length;)t=e.first();S(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=S(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){S(this).replaceWith(S(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=S(this);(t===T?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return S(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return S(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return t===T?this.length>0?this[0].innerHTML:null:this.each(function(e){var n=this.innerHTML;S(this).empty().append(g(this,t,e,n))})},text:function(t){return t===T?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t})},attr:function(t,e){var n;return"string"==typeof t&&e===T?0==this.length||1!==this[0].nodeType?T:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:this.each(function(n){if(1===this.nodeType)if(r(t))for(E in t)y(this,E,t[E]);else y(this,t,g(this,e,n,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&y(this,t)})},prop:function(t,e){return e===T?this[0]&&this[0][t]:this.each(function(n){this[t]=g(this,e,n,this[t])})},data:function(t,e){var n=this.attr("data-"+l(t),e);return null!==n?w(n):T},val:function(t){return t===T?this[0]&&(this[0].multiple?S(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=g(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var n=S(this),i=g(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2&&"string"==typeof e)return this[0]&&(this[0].style[N(e)]||$(this[0],"").getPropertyValue(e));var i="";if("string"==t(e))n||0===n?i=l(e)+":"+h(e,n):this.each(function(){this.style.removeProperty(l(e))});else for(E in e)e[E]||0===e[E]?i+=l(E)+":"+h(E,e[E])+";":this.each(function(){this.style.removeProperty(l(E))});return this.each(function(){this.style.cssText+=";"+i})},index:function(t){return t?this.indexOf(S(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return C.some.call(this,function(t){return this.test(b(t))},f(t))},addClass:function(t){return this.each(function(e){j=[];var n=b(this),i=g(this,t,e,n);i.split(/\s+/g).forEach(function(t){S(this).hasClass(t)||j.push(t)},this),j.length&&b(this,n+(n?" ":"")+j.join(" "))})},removeClass:function(t){return this.each(function(e){return t===T?b(this,""):(j=b(this),g(this,t,e,j).split(/\s+/g).forEach(function(t){j=j.replace(f(t)," ")}),void b(this,j.trim()))})},toggleClass:function(t,e){return this.each(function(n){var i=S(this),r=g(this,t,n,b(this));r.split(/\s+/g).forEach(function(t){(e===T?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})})},scrollTop:function(){return this.length?"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY:void 0},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=L.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(S(t).css("margin-top"))||0,n.left-=parseFloat(S(t).css("margin-left"))||0,i.top+=parseFloat(S(e[0]).css("border-top-width"))||0,i.left+=parseFloat(S(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||A.body;t&&!L.test(t.nodeName)&&"static"==S(t).css("position");)t=t.offsetParent;return t})}},S.fn.detach=S.fn.remove,["width","height"].forEach(function(t){S.fn[t]=function(e){var r,o=this[0],a=t.replace(/./,function(t){return t[0].toUpperCase()});return e===T?n(o)?o["inner"+a]:i(o)?o.documentElement["offset"+a]:(r=this.offset())&&r[t]:this.each(function(n){o=S(this),o.css(t,g(this,e,n,o[t]()))})}}),U.forEach(function(e,n){var i=n%2;S.fn[e]=function(){var e,r,o=S.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:G.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null,o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!r)return S(t).remove();x(r.insertBefore(t,e),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},S.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return S(t)[e](this),this}}),G.Z.prototype=S.fn,G.uniq=P,G.deserializeValue=w,S.zepto=G,S}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(t){function e(t){var e=this.os={},n=this.browser={},i=t.match(/WebKit\/([\d.]+)/),r=t.match(/(Android)\s+([\d.]+)/),o=t.match(/(iPad).*OS\s([\d_]+)/),a=!o&&t.match(/(iPhone\sOS)\s([\d_]+)/),s=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),u=s&&t.match(/TouchPad/),c=t.match(/Kindle\/([\d.]+)/),l=t.match(/Silk\/([\d._]+)/),f=t.match(/(BlackBerry).*Version\/([\d.]+)/),h=t.match(/(BB10).*Version\/([\d.]+)/),p=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),d=t.match(/PlayBook/),m=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),v=t.match(/Firefox\/([\d.]+)/);(n.webkit=!!i)&&(n.version=i[1]),r&&(e.android=!0,e.version=r[2]),a&&(e.ios=e.iphone=!0,e.version=a[2].replace(/_/g,".")),o&&(e.ios=e.ipad=!0,e.version=o[2].replace(/_/g,".")),s&&(e.webos=!0,e.version=s[2]),u&&(e.touchpad=!0),f&&(e.blackberry=!0,e.version=f[2]),h&&(e.bb10=!0,e.version=h[2]),p&&(e.rimtabletos=!0,e.version=p[2]),d&&(n.playbook=!0),c&&(e.kindle=!0,e.version=c[1]),l&&(n.silk=!0,n.version=l[1]),!l&&e.android&&t.match(/Kindle Fire/)&&(n.silk=!0),m&&(n.chrome=!0,n.version=m[1]),v&&(n.firefox=!0,n.version=v[1]),e.tablet=!!(o||d||r&&!t.match(/Mobile/)||v&&t.match(/Tablet/)),e.phone=!(e.tablet||!(r||a||s||f||h||m&&t.match(/Android/)||m&&t.match(/CriOS\/([\d.]+)/)||v&&t.match(/Mobile/)))}e.call(t,navigator.userAgent),t.__detect=e}(Zepto),function(t){function e(t){return t._zid||(t._zid=p++)}function n(t,n,o,a){if(n=i(n),n.ns)var s=r(n.ns);return(h[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!s.test(t.ns)||o&&e(t.fn)!==e(o)||a&&t.sel!=a)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(e,n,i){"string"!=t.type(e)?t.each(e,i):e.split(/\s/).forEach(function(t){i(t,n)})}function a(t,e){return t.del&&("focus"==t.e||"blur"==t.e)||!!e}function s(t){return m[t]||t}function u(n,r,u,c,l,f){var p=e(n),d=h[p]||(h[p]=[]);o(r,u,function(e,r){var o=i(e);o.fn=r,o.sel=c,o.e in m&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?o.fn.apply(this,arguments):void 0}),o.del=l&&l(r,e);var u=o.del||r;o.proxy=function(t){var e=u.apply(n,[t].concat(t.data));return e===!1&&(t.preventDefault(),t.stopPropagation()),e},o.i=d.length,d.push(o),n.addEventListener(s(o.e),o.proxy,a(o,f))})}function c(t,i,r,u,c){var l=e(t);o(i||"",r,function(e,i){n(t,e,i,u).forEach(function(e){delete h[l][e.i],t.removeEventListener(s(e.e),e.proxy,a(e,c))})})}function l(e){var n,i={originalEvent:e};for(n in e)y.test(n)||void 0===e[n]||(i[n]=e[n]);return t.each(b,function(t,n){i[t]=function(){return this[n]=v,e[t].apply(e,arguments)},i[n]=g}),i}function f(t){if(!("defaultPrevented"in t)){t.defaultPrevented=!1;var e=t.preventDefault;t.preventDefault=function(){this.defaultPrevented=!0,e.call(this)}}}var h=(t.zepto.qsa,{}),p=1,d={},m={mouseenter:"mouseover",mouseleave:"mouseout"};d.click=d.mousedown=d.mouseup=d.mousemove="MouseEvents",t.event={add:u,remove:c},t.proxy=function(n,i){if(t.isFunction(n)){var r=function(){return n.apply(i,arguments)};return r._zid=e(n),r}if("string"==typeof i)return t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e){return this.each(function(){u(this,t,e)})},t.fn.unbind=function(t,e){return this.each(function(){c(this,t,e)})},t.fn.one=function(t,e){return this.each(function(n,i){u(this,t,e,null,function(t,e){return function(){var n=t.apply(i,arguments);return c(i,e,t),n}})})};var v=function(){return!0},g=function(){return!1},y=/^([A-Z]|layer[XY]$)/,b={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(e,n,i){return this.each(function(r,o){u(o,n,i,e,function(n){return function(i){var r,a=t(i.target).closest(e,o).get(0);return a?(r=t.extend(l(i),{currentTarget:a,liveFired:o}),n.apply(a,[r].concat([].slice.call(arguments,1)))):void 0}})})},t.fn.undelegate=function(t,e,n){return this.each(function(){c(this,e,n,t)})},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i){return!n||t.isFunction(n)?this.bind(e,n||i):this.delegate(n,e,i)},t.fn.off=function(e,n,i){return!n||t.isFunction(n)?this.unbind(e,n||i):this.undelegate(n,e,i)},t.fn.trigger=function(e,n){return("string"==typeof e||t.isPlainObject(e))&&(e=t.Event(e)),f(e),e.data=n,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(e)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(a,s){r=l("string"==typeof e?t.Event(e):e),r.data=i,r.target=s,t.each(n(s,e.type||e),function(t,e){return o=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){"string"!=typeof t&&(e=t,t=e.type);var n=document.createEvent(d[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0,null,null,null,null,null,null,null,null,null,null,null,null),n.isDefaultPrevented=function(){return this.defaultPrevented},n}}(Zepto),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.defaultPrevented}function n(t,n,i,r){return t.global?e(n||y,i,r):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,i,"ajaxSend",[t,e])}function a(t,e,i){var r=i.context,o="success";i.success.call(r,t,o,e),n(i,r,"ajaxSuccess",[e,i,t]),u(o,e,i)}function s(t,e,i,r){var o=r.context;r.error.call(o,i,e,t),n(r,o,"ajaxError",[i,r,t]),u(e,i,r)}function u(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function c(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==E?"html":t==T?"json":w.test(t)?"script":x.test(t)&&"xml")||"text"}function f(t,e){return(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data))}function p(e,n,i,r){var o=!t.isFunction(n);return{url:e,data:o?n:void 0,success:o?t.isFunction(i)?i:void 0:n,dataType:o?r||i:i}}function d(e,n,i,r){var o,a=t.isArray(n);t.each(n,function(n,s){o=t.type(s),r&&(n=i?r:r+"["+(a?"":n)+"]"),!r&&a?e.add(s.name,s.value):"array"==o||!i&&"object"==o?d(e,s,i,n):e.add(n,s)})}var m,v,g=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,w=/^(?:text|application)\/javascript/i,x=/^(?:text|application)\/xml/i,T="application/json",E="text/html",S=/^\s*$/;t.active=0,t.ajaxJSONP=function(e){if(!("type"in e))return t.ajax(e);var n,i="jsonp"+ ++g,r=y.createElement("script"),u=function(){clearTimeout(n),t(r).remove(),delete window[i]},l=function(t){u(),t&&"timeout"!=t||(window[i]=c),s(null,t||"abort",f,e)},f={abort:l};return o(f,e)===!1?(l("abort"),!1):(window[i]=function(t){u(),a(t,f,e)},r.onerror=function(){l("error")},r.src=e.url.replace(/=\?/,"="+i),t("head").append(r),e.timeout>0&&(n=setTimeout(function(){l("timeout")},e.timeout)),f)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:T,xml:"application/xml, text/xml",html:E,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{});for(m in t.ajaxSettings)void 0===n[m]&&(n[m]=t.ajaxSettings[m]);i(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),h(n),n.cache===!1&&(n.url=f(n.url,"_="+Date.now()));var r=n.dataType,u=/=\?/.test(n.url);if("jsonp"==r||u)return u||(n.url=f(n.url,"callback=?")),t.ajaxJSONP(n);var p,d=n.accepts[r],g={},y=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,b=n.xhr();n.crossDomain||(g["X-Requested-With"]="XMLHttpRequest"),d&&(g.Accept=d,d.indexOf(",")>-1&&(d=d.split(",",2)[0]),b.overrideMimeType&&b.overrideMimeType(d)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&(g["Content-Type"]=n.contentType||"application/x-www-form-urlencoded"),n.headers=t.extend(g,n.headers||{}),b.onreadystatechange=function(){if(4==b.readyState){b.onreadystatechange=c,clearTimeout(p);var e,i=!1;if(b.status>=200&&b.status<300||304==b.status||0==b.status&&"file:"==y){r=r||l(b.getResponseHeader("content-type")),e=b.responseText;try{"script"==r?(1,eval)(e):"xml"==r?e=b.responseXML:"json"==r&&(e=S.test(e)?null:t.parseJSON(e))}catch(o){i=o}i?s(i,"parsererror",b,n):a(e,b,n)}else s(null,b.status?"error":"abort",b,n)}};var w="async"in n?n.async:!0;b.open(n.type,n.url,w);for(v in n.headers)b.setRequestHeader(v,n.headers[v]);return o(b,n)===!1?(b.abort(),!1):(n.timeout>0&&(p=setTimeout(function(){b.onreadystatechange=c,b.abort(),s(null,"timeout",b,n)},n.timeout)),b.send(n.data?n.data:null),b)},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,a=e.split(/\s/),s=p(e,n,i),u=s.success;return a.length>1&&(s.url=a[0],r=a[1]),s.success=function(e){o.html(r?t("<div>").html(e.replace(b,"")).find(r):e),u&&u.apply(o,arguments)},t.ajax(s),this};var j=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(j(t)+"="+j(e))},d(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n=[];return t(Array.prototype.slice.call(this.get(0).elements)).each(function(){e=t(this);var i=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(t,e){function n(t){return i(t.replace(/([a-z])([A-Z])/,"$1-$2"))}function i(t){return t.toLowerCase()}function r(t){return o?o+t:i(t)}var o,a,s,u,c,l,f,h,p="",d={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},m=window.document,v=m.createElement("div"),g=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,y={};t.each(d,function(t,n){return v.style[t+"TransitionProperty"]!==e?(p="-"+i(t)+"-",o=n,!1):void 0}),a=p+"transform",y[s=p+"transition-property"]=y[u=p+"transition-duration"]=y[c=p+"transition-timing-function"]=y[l=p+"animation-name"]=y[f=p+"animation-duration"]=y[h=p+"animation-timing-function"]="",t.fx={off:o===e&&v.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:p,transitionEnd:r("TransitionEnd"),animationEnd:r("AnimationEnd")},t.fn.animate=function(e,n,i,r){return t.isPlainObject(n)&&(i=n.easing,r=n.complete,n=n.duration),n&&(n=("number"==typeof n?n:t.fx.speeds[n]||t.fx.speeds._default)/1e3),this.anim(e,n,i,r)},t.fn.anim=function(i,r,o,p){var d,m,v,b={},w="",x=this,T=t.fx.transitionEnd;if(r===e&&(r=.4),t.fx.off&&(r=0),"string"==typeof i)b[l]=i,b[f]=r+"s",b[h]=o||"linear",T=t.fx.animationEnd;else{m=[];for(d in i)g.test(d)?w+=d+"("+i[d]+") ":(b[d]=i[d],m.push(n(d)));w&&(b[a]=w,m.push(a)),r>0&&"object"==typeof i&&(b[s]=m.join(", "),b[u]=r+"s",b[c]=o||"linear")}return v=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(T,v)}t(this).css(y),p&&p.call(this)},r>0&&this.bind(T,v),this.size()&&this.get(0).clientLeft,this.css(b),0>=r&&setTimeout(function(){x.each(function(){v.call(this)})},0),this},v=null}(Zepto),function(t){function e(t,e,n,i){return Math.abs(t-e)>=Math.abs(n-i)?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function n(){l=null,h.last&&(h.el.trigger("longTap"),h={})}function i(){l&&clearTimeout(l),l=null}function r(){s&&clearTimeout(s),u&&clearTimeout(u),c&&clearTimeout(c),l&&clearTimeout(l),s=u=c=l=null,h={}}function o(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function a(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var s,u,c,l,f,h={},p=750;t(document).ready(function(){var d,m,v,g,y=0,b=0;"MSGesture"in window&&(f=new MSGesture,f.target=document.body),t(document).bind("MSGestureEnd",function(t){var e=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;e&&(h.el.trigger("swipe"),h.el.trigger("swipe"+e))}).on("touchstart MSPointerDown pointerdown",function(e){(!(g=a(e,"down"))||o(e))&&(v=g?e:e.touches[0],e.touches&&1===e.touches.length&&h.x2&&(h.x2=void 0,h.y2=void 0),d=Date.now(),m=d-(h.last||d),h.el=t("tagName"in v.target?v.target:v.target.parentNode),s&&clearTimeout(s),h.x1=v.pageX,h.y1=v.pageY,m>0&&250>=m&&(h.isDoubleTap=!0),h.last=d,l=setTimeout(n,p),f&&g&&f.addPointer(e.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){(!(g=a(t,"move"))||o(t))&&(v=g?t:t.touches[0],i(),h.x2=v.pageX,h.y2=v.pageY,y+=Math.abs(h.x1-h.x2),b+=Math.abs(h.y1-h.y2))}).on("touchend MSPointerUp pointerup",function(n){(!(g=a(n,"up"))||o(n))&&(i(),h.x2&&Math.abs(h.x1-h.x2)>30||h.y2&&Math.abs(h.y1-h.y2)>30?c=setTimeout(function(){h.el.trigger("swipe"),h.el.trigger("swipe"+e(h.x1,h.x2,h.y1,h.y2)),h={}},0):"last"in h&&(30>y&&30>b?u=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=r,h.el.trigger(e),h.isDoubleTap?(h.el&&h.el.trigger("doubleTap"),h={}):s=setTimeout(function(){s=null,h.el&&h.el.trigger("singleTap"),h={}},250)},0):h={}),y=b=0)}).on("touchcancel MSPointerCancel pointercancel",r),t(window).on("scroll",r)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.on(e,t)}})}(Zepto);