"use strict";(self.webpackChunkfeishin=self.webpackChunkfeishin||[]).push([[42],{11721:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(96540)),a=r(87032),i=r(87430);function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=y(e);if(t){var a=y(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;return f(e)}(this,r)}}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(y,e);var t,r,n,u=s(y);function y(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return d(f(e=u.call.apply(u,[this].concat(r))),"callPlayer",a.callPlayer),d(f(e),"playerID",e.props.config.playerId||"".concat("twitch-player-").concat((0,a.randomString)())),d(f(e),"mute",(function(){e.callPlayer("setMuted",!0)})),d(f(e),"unmute",(function(){e.callPlayer("setMuted",!1)})),e}return t=y,r=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e,t){var r=this,n=this.props,o=n.playsinline,u=n.onError,c=n.config,p=n.controls,s=i.MATCH_URL_TWITCH_CHANNEL.test(e),f=s?e.match(i.MATCH_URL_TWITCH_CHANNEL)[1]:e.match(i.MATCH_URL_TWITCH_VIDEO)[1];t?s?this.player.setChannel(f):this.player.setVideo("v"+f):(0,a.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then((function(t){r.player=new t.Player(r.playerID,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({video:s?"":f,channel:s?f:"",height:"100%",width:"100%",playsinline:o,autoplay:r.props.playing,muted:r.props.muted,controls:!!s||p,time:(0,a.parseStartTime)(e)},c.options));var n=t.Player,i=n.READY,u=n.PLAYING,y=n.PAUSE,h=n.ENDED,b=n.ONLINE,v=n.OFFLINE,O=n.SEEK;r.player.addEventListener(i,r.props.onReady),r.player.addEventListener(u,r.props.onPlay),r.player.addEventListener(y,r.props.onPause),r.player.addEventListener(h,r.props.onEnded),r.player.addEventListener(O,r.props.onSeek),r.player.addEventListener(b,r.props.onLoaded),r.player.addEventListener(v,r.props.onLoaded)}),u)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.callPlayer("pause")}},{key:"seekTo",value:function(e){this.callPlayer("seek",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){return o.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}],r&&c(t.prototype,r),n&&c(t,n),y}(o.Component);t.default=h,d(h,"displayName","Twitch"),d(h,"canPlay",i.canPlay.twitch),d(h,"loopOnEnded",!0)}}]);