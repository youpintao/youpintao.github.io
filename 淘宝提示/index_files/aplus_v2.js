!function e(t,r,a){function n(o,i){if(!r[o]){if(!t[o]){var u="function"==typeof require&&require;if(!i&&u)return u(o,!0);if(s)return s(o,!0);throw new Error("Cannot find module '"+o+"'")}var l=r[o]={exports:{}};t[o][0].call(l.exports,function(e){var r=t[o][1][e];return n(r?r:e)},l,l.exports,e,t,r,a)}return r[o].exports}for(var s="function"==typeof require&&require,o=0;o<a.length;o++)n(a[o]);return n}({1:[function(e,t,r){"use strict";function a(e,t){return e&&e.getAttribute?e.getAttribute(t)||"":""}function n(e){return o=o||document.getElementsByTagName("head")[0],i&&!e?i:o?i=o.getElementsByTagName("meta"):[]}function s(e){var t,r,s,o=n(),i=o.length;for(t=0;i>t;t++)r=o[t],a(r,"name")===e&&(s=a(r,"content"));return s||""}var o,i;r.tryToGetAttribute=a,r.getMetaTags=n,r.getMetaCnt=s,r.indexof=function(e,t){for(var r=0;r<e.length;r++)if(e[r]===t)return r;return-1};var u=function(e,t){return e+="",e.length<t&&(e="0"+e),e};r.getDateMin=function(){var e=new Date,t="";return t+=e.getFullYear(),t+=u(e.getMonth()+1,2),t+=u(e.getDate(),2),t+=u(e.getHours(),2),t+=u(e.getMinutes(),2)}},{}],2:[function(e,t,r){t.exports=e("./src/grey")},{"./src/grey":3}],3:[function(e,t,r){function a(e){if(e)try{var t=f.createElement("script");t.appendChild(f.createTextNode(e)),p.parentNode.insertBefore(t,p)}catch(r){(h.execScript||function(e){h.eval.call(h,e)})(e)}}function n(e,t,r){if(/blitz/i.test(g))return void r();var a,n="GET",s=function(){a.responseText?t(a.responseText):r()};_?(a=new XMLHttpRequest,a.open(n,e,!0)):(a=new XDomainRequest,a.open(n,e)),a.timeout=m.timeout,a.onload=s,a.onerror=r,a.ontimeout=r,a.send()}function s(e,t){var r=f.createElement("script");r.type="text/javascript",r.async=!0,o(r,t),r.src=e,p.parentNode.insertBefore(r,p)}function o(e,t){function r(){e.onreadystatechange=e.onload=null,e=null,w(t)&&t({from:"script"})}if("onload"in e)e.onload=r;else{var a=function(){/loaded|complete/.test(e.readyState)&&r()};e.onreadystatechange=a,a()}}function i(e,t){return e+Math.floor(Math.random()*(t-e+1))}function u(e,t){return i(1,t)<=e}function l(e,t){var r;for(r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}function c(e,t){return function(r){return e.call(null,l(t,r||{}))}}function v(e){return function(t){return{}.toString.call(t)=="[object "+e+"]"}}var h=window,f=document,g=navigator.userAgent,p=f.getElementsByTagName("script")[0],d=h.XDomainRequest,_=h.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest,y=function(){},b={set:function(e,t){try{return localStorage.setItem(e,t),!0}catch(r){return!1}},get:function(e){return localStorage.getItem(e)},test:function(){var e="grey_test_key";try{return localStorage.setItem(e,1),localStorage.removeItem(e),!0}catch(t){return!1}}},m={base:1e4,timeout:1e4},j={_config:m};j.load=function(e){e=l({isStorage:!0,isLoadDevVersion:function(){},dev:"",devKey:"",devHash:"",stable:"",stableKey:"",stableHash:"",grey:"",greyKey:"",greyHash:"",base:m.base},e);var t,r,o,i,v=e.hash,h={};if(e.ratio>=e.base||u(e.ratio,e.base)?(t=e.greyKey,r=e.grey,i=e.greyHash,h.type="grey"):(t=e.stableKey,r=e.stable,i=e.stableHash,h.type="stable"),w(e.isLoadDevVersion)&&e.isLoadDevVersion()&&(t=e.devKey,r=e.dev,i=e.devHash,h.type="dev"),h.url=r,h.key=t,h.hash=i,w(e.before)&&e.before(h),e.after=w(e.after)?c(e.after,h):y,e.isStorage&&b.test()&&t&&(_||d)&&w(v))if(o=b.get(t),o&&i===v(o,h))try{a(o),e.after({from:"local"})}catch(f){s(r,e.after)}else n(r,function(r){b.set(t,r),a(r),e.after({from:"cors"})},function(){s(r,e.after)});else s(r,e.after);return this},j.config=function(e){return l(m,e||{}),this};var w=(Array.isArray||v("Array"),v("Function"));t.exports=j},{}],4:[function(e,t,r){"use strict";!function(){var t=e("../grey/util"),r=e("./for_aplus_fns"),a={"aplus_v2.js":{stable_version:{value:"7.1.13",hash:"aplus_v2.js7.1.13@101437c2"},grey_version:{value:"7.1.14",hash:"aplus_v2.js7.1.14@451a7dc9"},dev_version:{value:"7.2.2",hash:"aplus_v2.js7.2.2@ece82bc"}},"aplus_o.js":{stable_version:{value:"7.1.13",hash:"aplus_o.js7.1.13@120b4bfd"},grey_version:{value:"7.1.14",hash:"aplus_o.js7.1.14@120b4bfd"},dev_version:{value:"7.2.2",hash:"aplus_o.js7.2.2@55cec9c4"}},"aplus_std.js":{stable_version:{value:"7.1.13",hash:"aplus_std.js7.1.13@59696df"},grey_version:{value:"7.1.14",hash:"aplus_std.js7.1.14@2fdcddeb"},dev_version:{value:"7.2.2",hash:"aplus_std.js7.2.2@70a25672"}},"aplus_int.js":{stable_version:{value:"7.1.13",hash:"aplus_int.js7.1.13@39bf9459"},grey_version:{value:"7.1.14",hash:"aplus_int.js7.1.14@6c748fdd"},dev_version:{value:"7.2.2",hash:"aplus_int.js7.2.2@76124b52"}},"aplus_wap.js":{stable_version:{value:"7.1.13",hash:"aplus_wap.js7.1.13@2f6c3270"},grey_version:{value:"7.1.14",hash:"aplus_wap.js7.1.14@7d45669e"},dev_version:{value:"7.2.2",hash:"aplus_wap.js7.2.2@7628d4b3"}}},n=window,s="g_aplus_grey_launched";if(!n[s]){n[s]=1;var o=e("@ali/grey-publish"),i=location.protocol;0!=i.indexOf("http")&&(i="http:");var u=i+"//g.alicdn.com/alilog/s",l=r.getAplusVersion("aplus_std.js"),c=1e4,v=[],h={"aplus_v2.js":[/^https?:\/\/(.*\.)?uland\.taobao\.com/i,/^https?:\/\/(.*\.)?alibaba-inc\.com/i],"aplus_std.js":[/^https?:\/\/(.*\.)?uland\.taobao\.com/i,/^https?:\/\/(.*\.)?alibaba-inc\.com/i]},f=function(){var e,t=a[l]||{},r=t.dev_version||{},n=r.hash;if(l&&n){var s,o=h[l]||[];for(s=0;s<o.length;s++)if(location.href.match(o[s])){e=!0;break}}return e},g=function(){var e="";if(v&&v.length>0)for(var r=t.getDateMin(),a=0;a<v.length;a++){var n=v[a].key+"";r>=n&&(e=Math.floor(1e4*v[a].value))}return e},p=function(){var e,t="aplus_grey_ratio";"number"==typeof n[t]&&(e=Math.floor(1e4*n[t]));var r=location.search.match(new RegExp("\\b"+t+"=([\\d\\.]+)"));return r&&(r=parseFloat(r[1]),isNaN(r)||(e=Math.floor(1e4*r))),e},d=g(),_=p();d&&(c=d),_&&(c=_),n.goldlog=n.goldlog||{},goldlog.record||(goldlog.record=function(e,t,r,a){(n.goldlog_queue||(n.goldlog_queue=[])).push({action:"goldlog.record",arguments:[e,t,r,a]})});var y=a[l],b=l.split(".")[0];o.load({isLoadDevVersion:f,dev:[u,y.dev_version.value,l].join("/"),devKey:"APLUSGREYd_"+b,devHash:y.dev_version.hash,stable:[u,y.stable_version.value,l].join("/"),stableKey:"APLUSGREYs_"+b,stableHash:y.stable_version.hash,grey:[u,y.grey_version.value,l].join("/"),greyKey:"APLUSGREYg_"+b,greyHash:y.grey_version.hash,ratio:c,hash:function(t,r){var a=e("./hash").hash(t);switch(r.type){case"stable":a=l+y.stable_version.value+"@"+a;break;case"grey":a=l+y.grey_version.value+"@"+a;break;case"dev":a=l+y.dev_version.value+"@"+a}return a},before:function(e){switch(e.type){case"grey":goldlog.lver=y.grey_version.value;break;case"stable":goldlog.lver=y.stable_version.value;break;case"dev":goldlog.lver=y.dev_version.value}}})}}()},{"../grey/util":1,"./for_aplus_fns":5,"./hash":6,"@ali/grey-publish":2}],5:[function(e,t,r){"use strict";var a=e("./util"),n=function(){return["aplus_v2.js","aplus_o.js","aplus_std.js","aplus_int.js","aplus_wap.js"]};r.getAplusFns=n;var s=function(){for(var e,t=[{version:"aplus_o.js",domains:[/^https?:\/\/(.*\.)?youku\.com/i,/^https?:\/\/(.*\.)?tudou\.com/i,/^https?:\/\/(.*\.)?soku\.com/i,/^https?:\/\/(.*\.)?laifeng\.com/i]},{version:"aplus_int.js",domains:[/^https?:\/\/(.*\.)?scmp\.com/i,/^https?:\/\/(.*\.)?luxehomes\.com\.hk/i,/^https?:\/\/(.*\.)?ays\.com\.hk/i,/^https?:\/\/(.*\.)?cpjobs\.com/i,/^https?:\/\/(.*\.)?educationpost\.com\.hk/i,/^https?:\/\/(.*\.)?elle\.com\.hk/i,/^https?:\/\/(.*\.)?harpersbazaar\.com\.hk/i,/^https?:\/\/(.*\.)?esquirehk\.com/i]}],r=0;r<t.length;r++)for(var a=t[r].domains,n=t[r].version,s=0;s<a.length;s++)if(location.href.match(a[s])){e=n;break}return e},o=function(){var e=a.getMetaCnt("aplus-version");e&&(e+=".js");var t=n();return a.indexof(t,e)>-1?e:null},i=function(){try{for(var e=document,t=e.getElementsByTagName("script"),r=0;r<t.length;r++){var a=t[r].getAttribute("src");if(/alilog\/mlog\/aplus_\w+\.js/.test(a)||/alicdn\.com\/js\/aplus_\w+\.js/.test(a))return a}return""}catch(n){return""}},u=function(){var e="";try{var t=document,r=t.getElementById("tb-beacon-aplus")||t.getElementById("beacon-aplus");if(r&&(e=r.getAttribute("src")),e||(e=i()),e){var a=e.match(/aplus_\w+\.js/);"object"==typeof a&&a.length>0&&(e=a[0])}}catch(n){e=""}finally{return e}};r.getAplusVersion=function(e){var t;try{t=e;var r=u();r&&(t=r);var a=s();a&&(t=a);var n=o();n&&(t=n)}catch(i){t="aplus_std.js"}finally{return t}}},{"./util":7}],6:[function(e,t,r){"use strict";r.hash=function(e){var t,r,a=1315423911;for(t=e.length-1;t>=0;t--)r=e.charCodeAt(t),a^=(a<<5)+r+(a>>2);return(2147483647&a).toString(16)}},{}],7:[function(e,t,r){t.exports=e(1)},{}]},{},[4]);