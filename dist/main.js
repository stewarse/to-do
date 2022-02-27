(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(537),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,UAAU;AACZ",sourcesContent:["* {\n  margin: 0;\n  padding: 0;\n}\n"],sourceRoot:""}]);const s=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var u=0;u<e.length;u++){var p=[].concat(e[u]);r&&c[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},537:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),c=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(c).concat([a]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],s=0;s<e.length;s++){var i=e[s],u=r.base?i[0]+r.base:i[0],p=a[u]||0,l="".concat(u," ").concat(p);a[u]=p+1;var d=n(l),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var v=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:v,references:1})}c.push(l)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var s=n(a[c]);t[s].references--}for(var i=r(e,o),u=0;u<a.length;u++){var p=n(a[u]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}a=i}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),c=n.n(a),s=n(565),i=n.n(s),u=n(216),p=n.n(u),l=n(589),d=n.n(l),f=n(426),v={};v.styleTagTransform=d(),v.setAttributes=i(),v.insert=c().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=p(),t()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const g=(m="Trip to Europe",h="Travel",{getProject:()=>m,getCategory:()=>h,setProject:e=>{m=e},setCategory:e=>{h=e}});var m,h;console.log("Project:",g.getProject()),g.setProject("Trip to Asia"),console.log("Updated Project:",g.getProject());const y=((e,t,n,r=!1)=>({getTitle:()=>e,setTitle:t=>{e=t},getDueDate:()=>t,setDueDate:e=>{t=e},getCompletedStatus:()=>r,toggleCompletedStatus:()=>r=!r,getPriority:()=>n,setPriority:e=>{n=e}}))("Pet a Dog","10-17-1985","high");y.toggleCompletedStatus(),console.log("To Do:",y.getTitle(),y.getCompletedStatus())})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQU0sUUFFM0MxQixFQUFRZSxPQUFTLElBQ2pCZixFQUFRK0MsbUJBQXFCLElBRWhCLElBQUksSUFBUy9DLEdBS0osS0FBVyxZQUFpQixXQUEzQyxNQ25CRDhFLEdDUFlDLEVET08saUJDUERDLEVET21CLFNDU2hDLENBQUVDLFdBWlUsSUFBTUYsRUFZSkcsWUFWRCxJQUFNRixFQVVRRyxXQVJiQyxJQUNqQkwsRUFBT0ssR0FPbUNDLFlBSnhCQyxJQUNsQk4sRUFBV00sS0FiSCxJQUFFUCxFQUFNQyxFRFN4Qk8sUUFBUUMsSUFBSSxXQUFZVixFQUFTRyxjQUVqQ0gsRUFBU0ssV0FBVyxnQkFFcEJJLFFBQVFDLElBQUksbUJBQW9CVixFQUFTRyxjQUV6QyxNQUFNUSxFRWZPLEVBQUVDLEVBQU9DLEVBQVNDLEVBQVVDLEdBQWMsS0EwQjVDLENBQUVDLFNBdEJRLElBQU1KLEVBc0JKSyxTQXBCREMsSUFDZE4sRUFBUU0sR0FtQmlCQyxXQWhCVixJQUFPTixFQWdCZU8sV0FkckJDLElBQ2hCUixFQUFVUSxHQWF1Q0MsbUJBVjFCLElBQU1QLEVBVXdDUSxzQkFSM0MsSUFBb0JSLEdBQWRBLEVBUTREUyxZQU41RSxJQUFNVixFQU1tRlcsWUFKeEZDLElBQ2pCWixFQUFXWSxLRlJMQyxDQUFLLFlBQWEsYUFBYyxRQUU5Q2hCLEVBQU1ZLHdCQUNOZCxRQUFRQyxJQUFJLFNBQVVDLEVBQU1LLFdBQVlMLEVBQU1XLHVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zcmMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NyYy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NyYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zcmMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NyYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zcmMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc3JjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc3JjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc3JjL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NyYy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zcmMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NyYy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NyYy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3Byb2plY3RzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3RvLWRvL3RvLWRvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3RzL3Byb2plY3QuanMnXG5pbXBvcnQgeyBET01TdHVmZiB9IGZyb20gJy4vRE9NU3R1ZmYuanMnXG5pbXBvcnQgeyBUb0RvIH0gZnJvbSAnLi90by1kby90by1kby5qcydcblxuXG5jb25zdCBwcm9qZWN0MSA9IFByb2plY3QoJ1RyaXAgdG8gRXVyb3BlJywgJ1RyYXZlbCcpO1xuXG5jb25zb2xlLmxvZyhcIlByb2plY3Q6XCIsIHByb2plY3QxLmdldFByb2plY3QoKSk7XG5cbnByb2plY3QxLnNldFByb2plY3QoJ1RyaXAgdG8gQXNpYScpXG5cbmNvbnNvbGUubG9nKFwiVXBkYXRlZCBQcm9qZWN0OlwiLCBwcm9qZWN0MS5nZXRQcm9qZWN0KCkpO1xuXG5jb25zdCB0b0RvMSA9IFRvRG8oJ1BldCBhIERvZycsICcxMC0xNy0xOTg1JywgJ2hpZ2gnKVxuXG50b0RvMS50b2dnbGVDb21wbGV0ZWRTdGF0dXMoKVxuY29uc29sZS5sb2coXCJUbyBEbzpcIiwgdG9EbzEuZ2V0VGl0bGUoKSwgdG9EbzEuZ2V0Q29tcGxldGVkU3RhdHVzKCkpOyIsImNvbnN0IFByb2plY3QgPSAoIG5hbWUsIGNhdGVnb3J5KSA9PiB7XG4gICAgLy8gbGV0IHByb2plY3ROYW1lID0gbmFtZTtcbiAgICAvLyBsZXQgcHJvamVjdENhdGVnb3J5ID0gY2F0ZWdvcnk7XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKCkgPT4gbmFtZTtcbiAgICBcbiAgICBjb25zdCBnZXRDYXRlZ29yeSA9ICgpID0+IGNhdGVnb3J5O1xuXG4gICAgY29uc3Qgc2V0UHJvamVjdCA9ICggbmV3TmFtZSApID0+IHsgXG4gICAgICAgIG5hbWUgPSBuZXdOYW1lXG4gICAgfTtcblxuICAgIGNvbnN0IHNldENhdGVnb3J5ID0gKCBuZXdDYXRlZ29yeSApID0+IHtcbiAgICAgICAgY2F0ZWdvcnkgPSBuZXdDYXRlZ29yeVxuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRQcm9qZWN0LCBnZXRDYXRlZ29yeSwgc2V0UHJvamVjdCwgc2V0Q2F0ZWdvcnkgfTtcbn07XG5cblxuXG5leHBvcnQgeyBQcm9qZWN0IH0iLCJjb25zdCBUb0RvID0gKCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQ29tcGxldGVkID0gZmFsc2UgKSA9PiB7XG4gICAgLy9JRCB3aWxsIGJlID0gdG8gdGhlIG51bWJlciBvZiB0b0RvJ3MgXG4gICAgLy8gV2lsbCBuZWVkIHRvIHB1bGwgaW4gUHJvamVjdCBJRCB0byB0aWUgdGhlbSB0b2dldGhlclxuXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcblxuICAgIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgICAgIHRpdGxlID0gbmV3VGl0bGVcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+ICBkdWVEYXRlO1xuXG4gICAgY29uc3Qgc2V0RHVlRGF0ZSA9IChuZXdEdWVEYXRlKSA9PiB7XG4gICAgICAgIGR1ZURhdGUgPSBuZXdEdWVEYXRlXG4gICAgfTtcblxuICAgIGNvbnN0IGdldENvbXBsZXRlZFN0YXR1cyA9ICgpID0+IGlzQ29tcGxldGVkO1xuXG4gICAgY29uc3QgdG9nZ2xlQ29tcGxldGVkU3RhdHVzID0gKCkgPT4gaXNDb21wbGV0ZWQgPyBpc0NvbXBsZXRlZCA9IGZhbHNlIDogaXNDb21wbGV0ZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcblxuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0VGl0bGUsIHNldFRpdGxlLCBnZXREdWVEYXRlLCBzZXREdWVEYXRlLCBnZXRDb21wbGV0ZWRTdGF0dXMsIHRvZ2dsZUNvbXBsZXRlZFN0YXR1cywgZ2V0UHJpb3JpdHksIHNldFByaW9yaXR5IH07XG59XG5cbmV4cG9ydCB7IFRvRG8gfSJdLCJuYW1lcyI6WyJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsInB1c2giLCJtb2R1bGUiLCJpZCIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJfayIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJzdHlsZXNJbkRPTSIsImdldEluZGV4QnlJZGVudGlmaWVyIiwiaWRlbnRpZmllciIsInJlc3VsdCIsIm1vZHVsZXNUb0RvbSIsIm9wdGlvbnMiLCJpZENvdW50TWFwIiwiaWRlbnRpZmllcnMiLCJiYXNlIiwiY291bnQiLCJpbmRleEJ5SWRlbnRpZmllciIsIm9iaiIsImNzcyIsInNvdXJjZU1hcCIsInJlZmVyZW5jZXMiLCJ1cGRhdGVyIiwiYWRkRWxlbWVudFN0eWxlIiwiYnlJbmRleCIsInNwbGljZSIsImFwaSIsImRvbUFQSSIsInVwZGF0ZSIsIm5ld09iaiIsInJlbW92ZSIsImxhc3RJZGVudGlmaWVycyIsIm5ld0xpc3QiLCJpbmRleCIsIm5ld0xhc3RJZGVudGlmaWVycyIsIl9pIiwiX2luZGV4IiwibWVtbyIsImluc2VydCIsInN0eWxlIiwidGFyZ2V0Iiwic3R5bGVUYXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJIVE1MSUZyYW1lRWxlbWVudCIsImNvbnRlbnREb2N1bWVudCIsImhlYWQiLCJlIiwiZ2V0VGFyZ2V0IiwiRXJyb3IiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJzdHlsZUVsZW1lbnQiLCJub25jZSIsInNldEF0dHJpYnV0ZSIsImluc2VydFN0eWxlRWxlbWVudCIsInN0eWxlVGFnVHJhbnNmb3JtIiwiYXBwbHkiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVTdHlsZUVsZW1lbnQiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImZpcnN0Q2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJuIiwiZ2V0dGVyIiwiX19lc01vZHVsZSIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicHJvamVjdDEiLCJuYW1lIiwiY2F0ZWdvcnkiLCJnZXRQcm9qZWN0IiwiZ2V0Q2F0ZWdvcnkiLCJzZXRQcm9qZWN0IiwibmV3TmFtZSIsInNldENhdGVnb3J5IiwibmV3Q2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwidG9EbzEiLCJ0aXRsZSIsImR1ZURhdGUiLCJwcmlvcml0eSIsImlzQ29tcGxldGVkIiwiZ2V0VGl0bGUiLCJzZXRUaXRsZSIsIm5ld1RpdGxlIiwiZ2V0RHVlRGF0ZSIsInNldER1ZURhdGUiLCJuZXdEdWVEYXRlIiwiZ2V0Q29tcGxldGVkU3RhdHVzIiwidG9nZ2xlQ29tcGxldGVkU3RhdHVzIiwiZ2V0UHJpb3JpdHkiLCJzZXRQcmlvcml0eSIsIm5ld1ByaW9yaXR5IiwiVG9EbyJdLCJzb3VyY2VSb290IjoiIn0=