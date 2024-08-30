"use strict";(self.webpackChunkfeishin=self.webpackChunkfeishin||[]).push([[458],{55825:(e,t,n)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(96540)),i=n(87032),s=n(87430);function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=f(e);if(t){var i=f(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;return h(e)}(this,n)}}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y="undefined"!=typeof navigator,v=y&&"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1,P=y&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||v)&&!window.MSStream,m=/www\.dropbox\.com\/.+/,b=/https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/,E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(f,e);var t,n,r,a=c(f);function f(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return d(h(e=a.call.apply(a,[this].concat(n))),"onReady",(function(){var t;return(t=e.props).onReady.apply(t,arguments)})),d(h(e),"onPlay",(function(){var t;return(t=e.props).onPlay.apply(t,arguments)})),d(h(e),"onBuffer",(function(){var t;return(t=e.props).onBuffer.apply(t,arguments)})),d(h(e),"onBufferEnd",(function(){var t;return(t=e.props).onBufferEnd.apply(t,arguments)})),d(h(e),"onPause",(function(){var t;return(t=e.props).onPause.apply(t,arguments)})),d(h(e),"onEnded",(function(){var t;return(t=e.props).onEnded.apply(t,arguments)})),d(h(e),"onError",(function(){var t;return(t=e.props).onError.apply(t,arguments)})),d(h(e),"onPlayBackRateChange",(function(t){return e.props.onPlaybackRateChange(t.target.playbackRate)})),d(h(e),"onEnablePIP",(function(){var t;return(t=e.props).onEnablePIP.apply(t,arguments)})),d(h(e),"onDisablePIP",(function(t){var n=e.props,r=n.onDisablePIP,o=n.playing;r(t),o&&e.play()})),d(h(e),"onPresentationModeChange",(function(t){if(e.player&&(0,i.supportsWebKitPresentationMode)(e.player)){var n=e.player.webkitPresentationMode;"picture-in-picture"===n?e.onEnablePIP(t):"inline"===n&&e.onDisablePIP(t)}})),d(h(e),"onSeek",(function(t){e.props.onSeek(t.target.currentTime)})),d(h(e),"mute",(function(){e.player.muted=!0})),d(h(e),"unmute",(function(){e.player.muted=!1})),d(h(e),"renderSourceElement",(function(e,t){return"string"==typeof e?o.default.createElement("source",{key:t,src:e}):o.default.createElement("source",u({key:t},e))})),d(h(e),"renderTrack",(function(e,t){return o.default.createElement("track",u({key:t},e))})),d(h(e),"ref",(function(t){e.player&&(e.prevPlayer=e.player),e.player=t})),e}return t=f,(n=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player),P&&this.player.load()}},{key:"componentDidUpdate",value:function(e){this.shouldUseAudio(this.props)!==this.shouldUseAudio(e)&&(this.removeListeners(this.prevPlayer,e.url),this.addListeners(this.player)),this.props.url===e.url||(0,i.isMediaStream)(this.props.url)||(this.player.srcObject=null)}},{key:"componentWillUnmount",value:function(){this.player.src="",this.removeListeners(this.player),this.hls&&this.hls.destroy()}},{key:"addListeners",value:function(e){var t=this.props,n=t.url,r=t.playsinline;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(n)||e.addEventListener("canplay",this.onReady),r&&(e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.setAttribute("x5-playsinline",""))}},{key:"removeListeners",value:function(e,t){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.removeEventListener("canplay",this.onReady)}},{key:"shouldUseAudio",value:function(e){return!e.config.forceVideo&&!e.config.attributes.poster&&(s.AUDIO_EXTENSIONS.test(e.url)||e.config.forceAudio)}},{key:"shouldUseHLS",value:function(e){return!!this.props.config.forceHLS||!P&&(s.HLS_EXTENSIONS.test(e)||b.test(e))}},{key:"shouldUseDASH",value:function(e){return s.DASH_EXTENSIONS.test(e)||this.props.config.forceDASH}},{key:"shouldUseFLV",value:function(e){return s.FLV_EXTENSIONS.test(e)||this.props.config.forceFLV}},{key:"load",value:function(e){var t=this,n=this.props.config,r=n.hlsVersion,o=n.hlsOptions,s=n.dashVersion,a=n.flvVersion;if(this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.shouldUseHLS(e)&&(0,i.getSDK)("https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js".replace("VERSION",r),"Hls").then((function(n){if(t.hls=new n(o),t.hls.on(n.Events.MANIFEST_PARSED,(function(){t.props.onReady()})),t.hls.on(n.Events.ERROR,(function(e,r){t.props.onError(e,r,t.hls,n)})),b.test(e)){var r=e.match(b)[1];t.hls.loadSource("https://videodelivery.net/{id}/manifest/video.m3u8".replace("{id}",r))}else t.hls.loadSource(e);t.hls.attachMedia(t.player),t.props.onLoaded()})),this.shouldUseDASH(e)&&(0,i.getSDK)("https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace("VERSION",s),"dashjs").then((function(n){t.dash=n.MediaPlayer().create(),t.dash.initialize(t.player,e,t.props.playing),t.dash.on("error",t.props.onError),parseInt(s)<3?t.dash.getDebug().setLogToBrowserConsole(!1):t.dash.updateSettings({debug:{logLevel:n.Debug.LOG_LEVEL_NONE}}),t.props.onLoaded()})),this.shouldUseFLV(e)&&(0,i.getSDK)("https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js".replace("VERSION",a),"flvjs").then((function(n){t.flv=n.createPlayer({type:"flv",url:e}),t.flv.attachMediaElement(t.player),t.flv.on(n.Events.ERROR,(function(e,r){t.props.onError(e,r,t.flv,n)})),t.flv.load(),t.props.onLoaded()})),e instanceof Array)this.player.load();else if((0,i.isMediaStream)(e))try{this.player.srcObject=e}catch(t){this.player.src=window.URL.createObjectURL(e)}}},{key:"play",value:function(){var e=this.player.play();e&&e.catch(this.props.onError)}},{key:"pause",value:function(){this.player.pause()}},{key:"stop",value:function(){this.player.removeAttribute("src"),this.dash&&this.dash.reset()}},{key:"seekTo",value:function(e){this.player.currentTime=e}},{key:"setVolume",value:function(e){this.player.volume=e}},{key:"enablePIP",value:function(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player?this.player.requestPictureInPicture():(0,i.supportsWebKitPresentationMode)(this.player)&&"picture-in-picture"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("picture-in-picture")}},{key:"disablePIP",value:function(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():(0,i.supportsWebKitPresentationMode)(this.player)&&"inline"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("inline")}},{key:"setPlaybackRate",value:function(e){try{this.player.playbackRate=e}catch(e){this.props.onError(e)}}},{key:"getDuration",value:function(){if(!this.player)return null;var e=this.player,t=e.duration,n=e.seekable;return t===1/0&&n.length>0?n.end(n.length-1):t}},{key:"getCurrentTime",value:function(){return this.player?this.player.currentTime:null}},{key:"getSecondsLoaded",value:function(){if(!this.player)return null;var e=this.player.buffered;if(0===e.length)return 0;var t=e.end(e.length-1),n=this.getDuration();return t>n?n:t}},{key:"getSource",value:function(e){var t=this.shouldUseHLS(e),n=this.shouldUseDASH(e),r=this.shouldUseFLV(e);if(!(e instanceof Array||(0,i.isMediaStream)(e)||t||n||r))return m.test(e)?e.replace("www.dropbox.com","dl.dropboxusercontent.com"):e}},{key:"render",value:function(){var e=this.props,t=e.url,n=e.playing,r=e.loop,i=e.controls,s=e.muted,a=e.config,l=e.width,p=e.height,c=this.shouldUseAudio(this.props)?"audio":"video",h={width:"auto"===l?l:"100%",height:"auto"===p?p:"100%"};return o.default.createElement(c,u({ref:this.ref,src:this.getSource(t),style:h,preload:"auto",autoPlay:n||void 0,controls:i,muted:s,loop:r},a.attributes),t instanceof Array&&t.map(this.renderSourceElement),a.tracks.map(this.renderTrack))}}])&&l(t.prototype,n),r&&l(t,r),f}(o.Component);t.default=E,d(E,"displayName","FilePlayer"),d(E,"canPlay",s.canPlay.file)}}]);