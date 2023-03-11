(()=>{"use strict";function e(a){var n=s[a];if(void 0!==n)return n.exports;var r=s[a]={exports:{}};return t[a](r,r.exports,e),r.exports}var t={500:()=>{try{self["workbox:cacheable-response:6.5.3"]&&_()}catch(e){}},184:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},740:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},213:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},67:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},s={};(()=>{function t(e,t,s){let a;if("string"==typeof e){const n=new URL(e,location.href);0;a=new d((({url:e})=>e.href===n.href),t,s)}else if(e instanceof RegExp)a=new f(e,t,s);else if("function"==typeof e)a=new d(e,t,s);else{if(!(e instanceof d))throw new l("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}return w().registerRoute(a),a}function s(e,t){const s=t();return e.waitUntil(s),s}function a(e){if(!e)throw new l("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new l("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(s,location.href),n=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:n.href}}async function n(e,t){let s=null;if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new l("cross-origin-copy-response",{origin:s});const a=e.clone(),n={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},r=t?t(n):n,i=function(){if(void 0===L){const e=new Response("");if("body"in e)try{new Response(e.body),L=!0}catch(e){L=!1}L=!1}return L}()?a.body:await a.blob();return new Response(i,r)}function r(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}function i(e){return"string"==typeof e?new Request(e):e}function c(e){return O().getCacheKeyForURL(e)}function o(e,s){!function(e){O().precache(e)}(e),function(e){const s=O();t(new W(s,e))}(s)}e(184);const h=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class l extends Error{constructor(e,t){super(h(e,t)),this.name=e,this.details=t}}e(213);const u=e=>e&&"object"==typeof e?e:{handle:e};class d{constructor(e,t,s="GET"){this.handler=u(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=u(e)}}class f extends d{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}const p=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"");class g{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const a=s.origin===location.origin,{params:n,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:s});let i=r&&r.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return void 0;let o;try{o=i.handle({url:s,request:e,event:t,params:n})}catch(e){o=Promise.reject(e)}const h=r&&r.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async a=>{if(h){0;try{return await h.handle({url:s,request:e,event:t,params:n})}catch(e){e instanceof Error&&(a=e)}}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw a}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){const n=this._routes.get(s.method)||[];for(const r of n){let n;const i=r.match({url:e,sameOrigin:t,request:s,event:a});if(i)return n=i,(Array.isArray(n)&&0===n.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(n=void 0),{route:r,params:n}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,u(e))}setCatchHandler(e){this._catchHandler=u(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new l("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new l("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let y;const w=()=>(y||(y=new g,y.addFetchListener(),y.addCacheListener()),y),m={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},_=e=>[m.prefix,e,m.suffix].filter((e=>e&&e.length>0)).join("-"),R=e=>e||_(m.googleAnalytics),v=e=>e||_(m.precache),C=()=>m.prefix,b=e=>e||_(m.runtime),U=()=>m.suffix;e(740);class q{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class k{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let L;class T{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const K=new Set;e(67);class x{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new T,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=i(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){if(e instanceof Error)throw new l("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const n=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:n,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:a.clone(),request:n.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=i(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,r=await this.getCacheKey(t,"read"),c=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(r,c);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,t){const s=i(e);var a;await(a=0,new Promise((e=>setTimeout(e,a))));const n=await this.getCacheKey(s,"write");if(!t)throw new l("cache-put-with-no-response",{url:p(n.url)});const c=await this._ensureResponseSafeToCache(t);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,u=await self.caches.open(o),d=this.hasCallback("cacheDidUpdate"),f=d?await async function(e,t,s,a){const n=r(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),c=await e.keys(t,i);for(const t of c)if(n===r(t.url,s))return e.match(t,a)}(u,n.clone(),["__WB_REVISION__"],h):null;try{await u.put(n,d?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of K)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:n,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=i(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class P{constructor(e={}){this.cacheName=b(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a=new x(this,{event:t,request:s,params:"params"in e?e.params:void 0}),n=this._getResponse(a,s,t);return[n,this._awaitComplete(n,a,s,t)]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(a=await this._handle(t,e),!a||"error"===a.type)throw new l("no-response",{url:t.url})}catch(n){if(n instanceof Error)for(const r of e.iterateCallbacks("handlerDidError"))if(a=await r({error:n,event:s,request:t}),a)break;if(!a)throw n}for(const n of e.iterateCallbacks("handlerWillRespond"))a=await n({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let n,r;try{n=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(r=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:r}),t.destroy(),r)throw r}}class N extends P{constructor(e={}){e.cacheName=v(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(N.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;const a=t.params||{};if(!this._fallbackToNetwork)throw new l("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const n=a.integrity,r=e.integrity,i=!r||r===n;if(s=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?r||n:void 0})),n&&i&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await t.cachePut(e,s.clone());0}}return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new l("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==N.copyRedirectedCacheableResponsesPlugin&&(a===N.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(N.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}N.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},N.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await n(e):e};class E{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new N({cacheName:v(e),plugins:[...t,new k({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:n}=a(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new l("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new l("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return s(e,(async()=>{const t=new q;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return s(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new l("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let M;const O=()=>(M||(M=new E),M);class W extends d{constructor(e,t){super((({request:s})=>{const a=e.getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:a=!0,urlManipulation:n}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(a){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(n){const e=n({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=a.get(n);if(t){return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}}),e.strategy)}}const S=e=>"navigate"===e.request.mode;const I={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};const A={get googleAnalytics(){return R()},get precache(){return v()},get prefix(){return C()},get runtime(){return b()},get suffix(){return U()}};e(500);class F{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}const H={},j=new class extends P{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(I),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const s=[];const a=[];let n;if(this._networkTimeoutSeconds){const{id:r,promise:i}=this._getTimeoutPromise({request:e,logs:s,handler:t});n=r,a.push(i)}const r=this._getNetworkPromise({timeoutId:n,request:e,logs:s,handler:t});a.push(r);const i=await t.waitUntil((async()=>await t.waitUntil(Promise.race(a))||await r)());if(!i)throw new l("no-response",{url:e.url});return i}_getTimeoutPromise({request:e,handler:t}){let s;return{promise:new Promise((a=>{s=setTimeout((async()=>{a(await t.cacheMatch(e))}),1e3*this._networkTimeoutSeconds)})),id:s}}async _getNetworkPromise({timeoutId:e,request:t,handler:s}){let a,n;try{n=await s.fetchAndCachePut(t)}catch(e){e instanceof Error&&(a=e)}return e&&clearTimeout(e),!a&&n||(n=await s.cacheMatch(t)),n}}({cacheName:A.precache,networkTimeoutSeconds:5,plugins:[new class{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new F(e)}}({statuses:[200]})]});var D,B;t((({event:e})=>S(e)),j),D=({event:e})=>S(e)?caches.match(c("/200.html")||c("/index.html")):Response.error(),w().setCatchHandler(D),o([{'revision':'d4ec93a3c7ea17428736f459526c7084','url':'/200.html'},{'revision':'59e221032ab061cad83b6ce2bcddbde8','url':'/assets/icons/android-chrome-192x192.png'},{'revision':'cf3fdf7af60a294d6d3f48cb7ad82488','url':'/assets/icons/android-chrome-512x512.png'},{'revision':'a0e46feb3cc577478b127936e739dd08','url':'/assets/icons/apple-touch-icon.png'},{'revision':'d712b605ed58419c7e6d4ab885d147b7','url':'/assets/icons/favicon-16x16.png'},{'revision':'2f7ce797cf8f198dedb9a9f38b7ef13b','url':'/assets/icons/favicon-32x32.png'},{'revision':'ba817517b2c4e1ba1ce802c4d4fafdb4','url':'/assets/icons/mstile-150x150.png'},{'revision':'325493c4f4e63ed607e7bf365bacffde','url':'/assets/preact-logo-inverse.svg'},{'revision':'03d3e2956eec655d028b4530a480d92d','url':'/assets/preact-logo.svg'},{'revision':null,'url':'/bundle.6329a.css'},{'revision':null,'url':'/bundle.f3a57.js'},{'revision':null,'url':'/dom-polyfills.de0ad.js'},{'revision':null,'url':'/route-home.chunk.2ec17.js'},{'revision':null,'url':'/route-home.chunk.67b73.css'},{'revision':null,'url':'/route-profile.chunk.0af3e.css'},{'revision':null,'url':'/route-profile.chunk.bd924.js'}],B||H)})()})();
//# sourceMappingURL=sw.js.map