(()=>{"use strict";var e,t={563:function(e,t){var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function u(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},o=this&&this.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e};function a(e,t){return void 0===e&&(e=[]),void 0===t&&(t={}),r(this,void 0,void 0,(function(){var o,a,u,s,l,f,h,v,d,p,g,w=this;return i(this,(function(b){switch(b.label){case 0:return o=n({quanlity:.92},t).quanlity,[4,Promise.all(e.map((function(e){return r(w,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,c(e)];case 1:return[2,t.sent()]}}))}))})))];case 1:for(a=b.sent(),u=function(e){void 0===e&&(e=[]);for(var t=0,n=0,r=0,i=e;r<i.length;r++){var o=i[r];t=Math.max(t,o.width),n+=o.height}return{width:t,height:n}}(a),s=u.width,l=u.height,(f=document.createElement("canvas")).width=s,f.height=l,h=0,v=f.getContext("2d"),d=0,p=a;d<p.length;d++)g=p[d],v.drawImage(g,0,h),h+=g.height;return[2,f.toDataURL("image/jpeg",o)]}}))}))}function u(e){return URL.createObjectURL(e)}function c(e){return new Promise((function(t,n){var r=new Image;r.onload=function(){return t(r)},r.onerror=function(e){return n(e)},r.src=e}))}Object.defineProperty(t,"__esModule",{value:!0}),t.base642img=t.file2base64=t.mergeFile=t.mergeBase64=void 0,t.mergeBase64=a,t.mergeFile=function(e,t){return void 0===e&&(e=[]),void 0===t&&(t={}),r(this,void 0,void 0,(function(){var n=this;return i(this,(function(c){switch(c.label){case 0:return[4,Promise.all(o([],e).map((function(e){return r(n,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,u(e)];case 1:return[2,t.sent()]}}))}))})))];case 1:return[2,a(c.sent(),t)]}}))}))},t.file2base64=u,t.base642img=c}},n={};e=function e(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={exports:{}};return t[r].call(o.exports,o,o.exports,e),o.exports}(563),window.mergeBase64=e.mergeBase64,window.mergeFile=e.mergeFile})();