(window.webpackJsonp=window.webpackJsonp||[]).push([[8,16],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});n(209);var r,o=n(210),a=n(1),l=n.n(a),c=n(99),i=n(8),u=n.n(i),p=n(36);n(206);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=3,d=Object(c.b)("weeklyStore")(r=Object(c.c)(r=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=b(this,(e=m(t)).call.apply(e,[this].concat(o)))).renderTreeList=function(e){return e.map(function(e,t,r){return e.children.length?l.a.createElement("div",{key:e.id},l.a.createElement("div",{className:u()("template-title-level-".concat(e.level),{"template-alarm-title-level-1":1===e.level&&"alarm"===e.type})},e.show&&e.title),n.renderTreeList(e.children)):l.a.createElement("div",{key:e.id},l.a.createElement("div",{className:u()("template-title-level-".concat(e.level),{"template-alarm-title-level-1":1===e.level&&"alarm"===e.type})},e.show&&(e.level===y?"".concat(t+1,"、").concat(e.title).concat(t<r.length-1?"；":"。"):e.title),t===r.length-1?l.a.createElement("br",null):null,l.a.createElement("br",null)))})},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,l.a.Component),n=t,(r=[{key:"render",value:function(){var e=this,t=this.props.weeklyStore.weeklyTree;return l.a.createElement("div",{className:"preview-wrap"},l.a.createElement("div",{className:"preview-text",ref:function(t){e.ref=t}},this.renderTreeList(t)),l.a.createElement(o.a,{type:"primary",onClick:function(){var e=document.querySelector(".preview-text"),t=document.createRange();t.selectNode(e);var n=window.getSelection();n.rangeCount>0&&n.removeAllRanges(),n.addRange(t),document.execCommand("copy"),Object(p.globalMessage)("success","复制成功！")}},"一键复制"))}}])&&f(n.prototype,r),a&&f(n,a),t}())||r)||r},206:function(e,t,n){var r=n(215);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(31)(r,o);r.locals&&(e.exports=r.locals)},215:function(e,t,n){(e.exports=n(30)(!1)).push([e.i,".preview-wrap {\n  flex: 1;\n  padding: 10px;\n  height: calc(100vh - 64px);\n  overflow-y: scroll;\n  background-color: #FFF;\n  color: #000;\n}\n.preview-wrap::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 7px;\n}\n.preview-wrap::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, 0.5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);\n}\n",""])}}]);