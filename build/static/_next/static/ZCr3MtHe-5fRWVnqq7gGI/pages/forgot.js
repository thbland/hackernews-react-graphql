(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}t.isInAmpMode=u,t.useAmp=function(){return u(o.default.useContext(a.AmpStateContext))}},"5fIB":function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("Xuae")),u=n("lwAK"),i=n("FYa8"),c=n("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var s=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var i=0,c=s.length;i<c;i++){var l=s[i];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=o.props[l],d=r[l]||new Set;d.has(f)?a=!1:(d.add(f),r[l]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var p=a.default();function v(e){var t=e.children;return o.default.createElement(u.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}v.rewind=p.rewind,t.default=v},FYa8:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.HeadManagerContext=o.createContext(null)},WKAt:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("8Kt/"),o=n.n(r),a=n("q1tI"),u=a.createElement;function i(e){var t=e.children;return u("div",{className:"WordSection1"},u(o.a,null,u("title",null,"Hacker News Clone"),u("meta",{name:"referrer",content:"origin"}),u("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),u("link",{rel:"shortcut icon",href:"/static/favicon.ico"})),t)}},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("qXWd"),a=n("i2R6"),u=n("tCBg"),i=n("T0f4"),c=n("48fX"),l=n("mPvQ");function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){c(v,l);var s,p=(s=v,function(){var e,t=i(s);if(f()){var n=i(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u(this,e)});function v(e){var a;return r(this,v),a=p.call(this,e),d&&(t.add(o(a)),n(o(a))),a}return a(v,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(v,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),v}(s.Component)}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},kIj3:function(e,t,n){"use strict";n.r(t),n.d(t,"ForgotPage",(function(){return f}));var r=n("nOHt"),o=n("q1tI"),a=n.n(o),u=n("eRjh"),i=n("WKAt"),c=a.a.createElement;function l(e){var t=Object(o.useState)(""),n=(t[0],t[1]);return c(i.a,null,c("b",null,"Reset your password"),c("br",null),c("br",null),c("form",{method:"post",action:"/x"},c("input",{type:"hidden",name:"fnid",value:"SW3mxENlH7rdjgxwWaobR5"}),c("input",{type:"hidden",name:"fnop",value:"forgot-password"}),"username:"," ",c("input",{type:"text",name:"s",size:20,onChange:function(e){return n(e.target.value)}}),c("br",null),c("br",null),c("input",{type:"submit",value:"Send reset email"})))}var f=Object(u.b)(Object(r.withRouter)((function(e){return c(l,{router:e.router})})));t.default=f},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("kG2m");e.exports=function(e){return r(e)||o(e)||a()}},rlHP:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},"sE/B":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forgot",function(){return n("kIj3")}])}},[["sE/B",0,1,2,4]]]);