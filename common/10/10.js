(window.webpackJsonp=window.webpackJsonp||[]).push([[10,19,20,21,28],{130:function(e,n,r){"use strict";r.r(n);var t=r(1),o=r.n(t);n.default=function(e){var n=e.value;return o.a.createElement("pre",null,o.a.createElement("code",null,n))}},131:function(e,n,r){"use strict";r.r(n);var t=r(1),o=r.n(t),a=function(e){return!!/(本周问题\/故障)|(本周问题)|(故障)/.test(e)};n.default=function(e){var n=e.level,r=e.children,t=(r.length?r[0].props:{}).value,l=void 0===t?"":t;return 1===n?o.a.createElement("h1",{className:a(l)?"template-alarm-title-level-1":"template-title-level-1"},r[0]):2===n?o.a.createElement("h2",null,r[0]):o.a.createElement("h3",null,r[0])}},132:function(e,n,r){"use strict";r.r(n);var t=r(1),o=r.n(t);n.default=function(e){var n=e.children;return o.a.createElement("ul",null,n.map(function(e,n,r){var t=(e.props.children.length>0?e.props.children[0].props:{}).value,a=function(e,n,r){if(!e)return"";var t=e;return t=(t=t.replace(/^/,"".concat(n,"、"))).replace(/$/,n<r?"；":"。")}(void 0===t?"":t,n+1,r.length);return o.a.createElement(o.a.Fragment,{key:"".concat(e.key,"-frgm")},o.a.createElement("li",{key:e.key},a),n===r.length-1?o.a.createElement("br",null):null)}))}},217:function(e,n,r){var t=r(232);"string"==typeof t&&(t=[[e.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(33)(t,o);t.locals&&(e.exports=t.locals)},232:function(e,n,r){(e.exports=r(32)(!1)).push([e.i,".markdown-preview-wrap {\n  background: #FFF;\n  flex: 1;\n  padding: 20px;\n  overflow-y: scroll;\n  background-color: #FFF;\n  color: #000;\n  border: none;\n}\n.markdown-preview-wrap h1,\n.markdown-preview-wrap h2,\n.markdown-preview-wrap ul,\n.markdown-preview-wrap li {\n  margin: 0;\n  padding: 0;\n}\n.markdown-preview-wrap h1 {\n  font-size: 18px;\n  color: #0070C0;\n  font-weight: bold;\n  white-space: pre-wrap;\n}\n.markdown-preview-wrap h1.template-alarm-title-level-1 {\n  color: #FF0000;\n}\n.markdown-preview-wrap h2 {\n  font-size: 14px;\n  color: #000;\n  font-weight: bold;\n}\n.markdown-preview-wrap ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.markdown-preview-wrap code,\n.markdown-preview-wrap li code {\n  background-color: #DCDCDC;\n  padding: 4px;\n}\n.markdown-preview-wrap pre {\n  background: #1E1E1E;\n  padding: 10px;\n}\n.markdown-preview-wrap pre code {\n  background-color: transparent;\n  color: #DCDCDC;\n}\n",""])},38:function(e,n,r){"use strict";r.r(n),r.d(n,"default",function(){return m});var t=r(1),o=r.n(t),a=r(249),l=r.n(a),i=r(131),c=r(132),p=r(130);r(217);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function s(e,n){return!n||"object"!==u(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,n){return(w=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var m=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),s(this,d(n).apply(this,arguments))}var r,t,a;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&w(e,n)}(n,o.a.Component),r=n,(t=[{key:"render",value:function(){var e=this,n=this.props.source;return o.a.createElement("div",{className:"markdown-preview-wrap"},o.a.createElement("div",{className:"preview-text",ref:function(n){e.ref=n}},o.a.createElement(l.a,{source:n,renderers:{heading:i.default,list:c.default,code:p.default}})))}}])&&f(r.prototype,t),a&&f(r,a),n}()}}]);