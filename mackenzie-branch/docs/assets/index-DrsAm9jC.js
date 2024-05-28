(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Pa={},Ma=[],wt=()=>{},Na=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),He=Object.assign,j=Array.isArray,Ta=t=>je(t)==="[object Map]",za=t=>je(t)==="[object Set]",N=t=>typeof t=="function",rt=t=>typeof t=="string",Ra=t=>typeof t=="symbol",it=t=>t!==null&&typeof t=="object",Ha=t=>(it(t)||N(t))&&N(t.then)&&N(t.catch),ja=Object.prototype.toString,je=t=>ja.call(t),Fa=t=>je(t)==="[object Object]",ye=(t,e)=>!Object.is(t,e);let on;const $a=()=>on||(on=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fe(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const a=t[n],r=rt(a)?Ya(a):Fe(a);if(r)for(const i in r)e[i]=r[i]}return e}else if(rt(t)||it(t))return t}const Da=/;(?![^(]*\))/g,Ba=/:([^]+)/,Ua=/\/\*[^]*?\*\//g;function Ya(t){const e={};return t.replace(Ua,"").split(Da).forEach(n=>{if(n){const a=n.split(Ba);a.length>1&&(e[a[0].trim()]=a[1].trim())}}),e}function dt(t){let e="";if(rt(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const a=dt(t[n]);a&&(e+=a+" ")}else if(it(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Va;function Wa(t,e=Va){e&&e.active&&e.effects.push(t)}let _t;class $n{constructor(e,n,a,r){this.fn=e,this.trigger=n,this.scheduler=a,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Wa(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,qa();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Ga(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Ka()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=nt,n=_t;try{return nt=!0,_t=this,this._runnings++,sn(this),this.fn()}finally{ln(this),this._runnings--,_t=n,nt=e}}stop(){var e;this.active&&(sn(this),ln(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Ga(t){return t.value}function sn(t){t._trackId++,t._depsLength=0}function ln(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Dn(t.deps[e],t);t.deps.length=t._depsLength}}function Dn(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let nt=!0,we=0;const Bn=[];function qa(){Bn.push(nt),nt=!1}function Ka(){const t=Bn.pop();nt=t===void 0?!0:t}function Xa(){we++}function Ja(){for(we--;!we&&ke.length;)ke.shift()()}function Qa(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const a=t.deps[t._depsLength];a!==e?(a&&Dn(a,t),t.deps[t._depsLength++]=e):t._depsLength++}}const ke=[];function Za(t,e,n){Xa();for(const a of t.keys()){let r;a._dirtyLevel<e&&(r??(r=t.get(a)===a._trackId))&&(a._shouldSchedule||(a._shouldSchedule=a._dirtyLevel===0),a._dirtyLevel=e),a._shouldSchedule&&(r??(r=t.get(a)===a._trackId))&&(a.trigger(),(!a._runnings||a.allowRecurse)&&a._dirtyLevel!==2&&(a._shouldSchedule=!1,a.scheduler&&ke.push(a.scheduler)))}Ja()}const tr=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n};new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ra));function xt(t){return Un(t)?xt(t.__v_raw):!!(t&&t.__v_isReactive)}function Un(t){return!!(t&&t.__v_isReadonly)}function cn(t){return!!(t&&t.__v_isShallow)}function Yn(t){return xt(t)||Un(t)}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}class Vn{constructor(e,n,a,r){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new $n(()=>e(this._value),()=>me(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=a}get value(){const e=oe(this);return(!e._cacheable||e.effect.dirty)&&ye(e._value,e._value=e.effect.run())&&me(e,4),nr(e),e.effect._dirtyLevel>=2&&me(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function er(t,e,n=!1){let a,r;const i=N(t);return i?(a=t,r=wt):(a=t.get,r=t.set),new Vn(a,r,i||!r,n)}function nr(t){var e;nt&&_t&&(t=oe(t),Qa(_t,(e=t.dep)!=null?e:t.dep=tr(()=>t.dep=void 0,t instanceof Vn?t:void 0)))}function me(t,e=4,n){t=oe(t);const a=t.dep;a&&Za(a,e)}function Ct(t){return!!(t&&t.__v_isRef===!0)}function jt(t){return Ct(t)?t.value:t}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mt(t,e,n,a){try{return a?t(...a):t()}catch(r){Wn(r,e,n)}}function Xt(t,e,n,a){if(N(t)){const i=mt(t,e,n,a);return i&&Ha(i)&&i.catch(o=>{Wn(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Xt(t[i],e,n,a));return r}function Wn(t,e,n,a=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](t,o,s)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){mt(l,null,10,[t,o,s]);return}}ar(t,n,r,a)}function ar(t,e,n,a=!0){console.error(t)}let ee=!1,_e=!1;const z=[];let q=0;const vt=[];let G=null,Q=0;const rr=Promise.resolve();function ir(t){let e=q+1,n=z.length;for(;e<n;){const a=e+n>>>1,r=z[a],i=Ot(r);i<t||i===t&&r.pre?e=a+1:n=a}return e}function or(t){(!z.length||!z.includes(t,ee&&t.allowRecurse?q+1:q))&&(t.id==null?z.push(t):z.splice(ir(t.id),0,t),Gn())}function Gn(){!ee&&!_e&&(_e=!0,rr.then(qn))}function sr(t){j(t)?vt.push(...t):(!G||!G.includes(t,t.allowRecurse?Q+1:Q))&&vt.push(t),Gn()}function lr(t){if(vt.length){const e=[...new Set(vt)].sort((n,a)=>Ot(n)-Ot(a));if(vt.length=0,G){G.push(...e);return}for(G=e,Q=0;Q<G.length;Q++)G[Q]();G=null,Q=0}}const Ot=t=>t.id==null?1/0:t.id,cr=(t,e)=>{const n=Ot(t)-Ot(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function qn(t){_e=!1,ee=!0,z.sort(cr);try{for(q=0;q<z.length;q++){const e=z[q];e&&e.active!==!1&&mt(e,null,14)}}finally{q=0,z.length=0,lr(),ee=!1,(z.length||vt.length)&&qn()}}let Z=null,$e=null;function Kn(t){$e=t}function Xn(){$e=null}const fr=Symbol.for("v-ndc"),ur=t=>t.__isSuspense;function dr(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):sr(t)}const mr=Symbol.for("v-scx"),vr=()=>br(mr),Ft={};function pr(t,e,n){return hr(t,e,n)}function hr(t,e,{immediate:n,deep:a,flush:r,once:i,onTrack:o,onTrigger:s}=Pa){if(e&&i){const h=e;e=(...I)=>{h(...I),x()}}const l=Ue,f=h=>a===!0?h:ct(h,a===!1?1:void 0);let c,d=!1,g=!1;if(Ct(t)?(c=()=>t.value,d=cn(t)):xt(t)?(c=()=>f(t),d=!0):j(t)?(g=!0,d=t.some(h=>xt(h)||cn(h)),c=()=>t.map(h=>{if(Ct(h))return h.value;if(xt(h))return f(h);if(N(h))return mt(h,l,2)})):N(t)?e?c=()=>mt(t,l,2):c=()=>(w&&w(),Xt(t,l,3,[S])):c=wt,e&&a){const h=c;c=()=>ct(h())}let w,S=h=>{w=b.onStop=()=>{mt(h,l,4),w=b.onStop=void 0}},O;if(Ye)if(S=wt,e?n&&Xt(e,l,3,[c(),g?[]:void 0,S]):c(),r==="sync"){const h=vr();O=h.__watcherHandles||(h.__watcherHandles=[])}else return wt;let A=g?new Array(t.length).fill(Ft):Ft;const m=()=>{if(!(!b.active||!b.dirty))if(e){const h=b.run();(a||d||(g?h.some((I,P)=>ye(I,A[P])):ye(h,A)))&&(w&&w(),Xt(e,l,3,[h,A===Ft?void 0:g&&A[0]===Ft?[]:A,S]),A=h)}else b.run()};m.allowRecurse=!!e;let p;r==="sync"?p=m:r==="post"?p=()=>un(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),p=()=>or(m));const b=new $n(c,wt,p),x=()=>{b.stop()};return e?n?m():A=b.run():r==="post"?un(b.run.bind(b),l&&l.suspense):b.run(),O&&O.push(x),x}function ct(t,e,n=0,a){if(!it(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(a=a||new Set,a.has(t))return t;if(a.add(t),Ct(t))ct(t.value,e,n,a);else if(j(t))for(let r=0;r<t.length;r++)ct(t[r],e,n,a);else if(za(t)||Ta(t))t.forEach(r=>{ct(r,e,n,a)});else if(Fa(t))for(const r in t)ct(t[r],e,n,a);return t}/*! #__NO_SIDE_EFFECTS__ */function gr(t,e){return N(t)?He({name:t.name},e,{setup:t}):t}let fn=null;function br(t,e,n=!1){const a=Ue||Z;if(a||fn){const r=a?a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:fn._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&N(e)?e.call(a&&a.proxy):e}}const un=dr,yr=t=>t.__isTeleport,Nt=Symbol.for("v-fgt"),wr=Symbol.for("v-txt"),kr=Symbol.for("v-cmt"),_r=Symbol.for("v-stc"),Jt=[];let R=null;function gt(t=!1){Jt.push(R=t?null:[])}function xr(){Jt.pop(),R=Jt[Jt.length-1]||null}function Sr(t){return t.dynamicChildren=R||Ma,xr(),R&&R.push(t),t}function bt(t,e,n,a,r,i){return Sr(y(t,e,n,a,r,i,!0))}function xe(t){return t?t.__v_isVNode===!0:!1}const Jn="__vInternal",Qn=({key:t})=>t??null,Qt=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?rt(t)||Ct(t)||N(t)?{i:Z,r:t,k:e,f:!!n}:t:null);function y(t,e=null,n=null,a=0,r=null,i=t===Nt?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qn(e),ref:e&&Qt(e),scopeId:$e,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:a,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Z};return s?(Be(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=rt(n)?8:16),!o&&R&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&R.push(l),l}const M=Ar;function Ar(t,e=null,n=null,a=0,r=null,i=!1){if((!t||t===fr)&&(t=kr),xe(t)){const s=Se(t,e,!0);return n&&Be(s,n),!i&&R&&(s.shapeFlag&6?R[R.indexOf(t)]=s:R.push(s)),s.patchFlag|=-2,s}if(Er(t)&&(t=t.__vccOpts),e){e=Cr(e);let{class:s,style:l}=e;s&&!rt(s)&&(e.class=dt(s)),it(l)&&(Yn(l)&&!j(l)&&(l=He({},l)),e.style=Fe(l))}const o=rt(t)?1:ur(t)?128:yr(t)?64:it(t)?4:N(t)?2:0;return y(t,e,n,a,r,o,i,!0)}function Cr(t){return t?Yn(t)||Jn in t?He({},t):t:null}function Se(t,e,n=!1){const{props:a,ref:r,patchFlag:i,children:o}=t,s=e?Or(a||{},e):a;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&Qn(s),ref:e&&e.ref?n&&r?j(r)?r.concat(Qt(e)):[r,Qt(e)]:Qt(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Nt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Se(t.ssContent),ssFallback:t.ssFallback&&Se(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function at(t=" ",e=0){return M(wr,null,t,e)}function De(t,e){const n=M(_r,null,t);return n.staticCount=e,n}function Be(t,e){let n=0;const{shapeFlag:a}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(a&65){const r=e.default;r&&(r._c&&(r._d=!1),Be(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Jn in e)?e._ctx=Z:r===3&&Z&&(Z.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else N(e)?(e={default:e,_ctx:Z},n=32):(e=String(e),a&64?(n=16,e=[at(e)]):n=8);t.children=e,t.shapeFlag|=n}function Or(...t){const e={};for(let n=0;n<t.length;n++){const a=t[n];for(const r in a)if(r==="class")e.class!==a.class&&(e.class=dt([e.class,a.class]));else if(r==="style")e.style=Fe([e.style,a.style]);else if(Na(r)){const i=e[r],o=a[r];o&&i!==o&&!(j(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=a[r])}return e}let Ue=null;{const t=$a(),e=(n,a)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(a),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};e("__VUE_INSTANCE_SETTERS__",n=>Ue=n),e("__VUE_SSR_SETTERS__",n=>Ye=n)}let Ye=!1;function Er(t){return N(t)&&"__vccOpts"in t}const lt=(t,e)=>er(t,e,Ye);function Ir(t,e,n){const a=arguments.length;return a===2?it(e)&&!j(e)?xe(e)?M(t,null,[e]):M(t,e):M(t,null,e):(a>3?n=Array.prototype.slice.call(arguments,2):a===3&&xe(n)&&(n=[n]),M(t,e,n))}const Lr="/assets/me-EVe8rNA0.jpg",Pr="/assets/Avatar-CMGYc3b4.png",Mr="/assets/bitmoji-CKvRc3V7.png",Nr="/assets/duolingoicon-B3ERrqAC.png";function dn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?dn(Object(n),!0).forEach(function(a){E(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):dn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ne(t){"@babel/helpers - typeof";return ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ne(t)}function Tr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function mn(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function zr(t,e,n){return e&&mn(t.prototype,e),n&&mn(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ve(t,e){return Hr(t)||Fr(t,e)||Zn(t,e)||Dr()}function Tt(t){return Rr(t)||jr(t)||Zn(t)||$r()}function Rr(t){if(Array.isArray(t))return Ae(t)}function Hr(t){if(Array.isArray(t))return t}function jr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Fr(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function Zn(t,e){if(t){if(typeof t=="string")return Ae(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ae(t,e)}}function Ae(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function $r(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var vn=function(){},We={},ta={},ea=null,na={mark:vn,measure:vn};try{typeof window<"u"&&(We=window),typeof document<"u"&&(ta=document),typeof MutationObserver<"u"&&(ea=MutationObserver),typeof performance<"u"&&(na=performance)}catch{}var Br=We.navigator||{},pn=Br.userAgent,hn=pn===void 0?"":pn,K=We,_=ta,gn=ea,$t=na;K.document;var Y=!!_.documentElement&&!!_.head&&typeof _.addEventListener=="function"&&typeof _.createElement=="function",aa=~hn.indexOf("MSIE")||~hn.indexOf("Trident/"),Dt,Bt,Ut,Yt,Vt,D="___FONT_AWESOME___",Ce=16,ra="fa",ia="svg-inline--fa",ot="data-fa-i2svg",Oe="data-fa-pseudo-element",Ur="data-fa-pseudo-element-pending",Ge="data-prefix",qe="data-icon",bn="fontawesome-i2svg",Yr="async",Vr=["HTML","HEAD","STYLE","SCRIPT"],oa=function(){try{return!0}catch{return!1}}(),k="classic",C="sharp",Ke=[k,C];function zt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[k]}})}var Et=zt((Dt={},E(Dt,k,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),E(Dt,C,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Dt)),It=zt((Bt={},E(Bt,k,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),E(Bt,C,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Bt)),Lt=zt((Ut={},E(Ut,k,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),E(Ut,C,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Ut)),Wr=zt((Yt={},E(Yt,k,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),E(Yt,C,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Yt)),Gr=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,sa="fa-layers-text",qr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Kr=zt((Vt={},E(Vt,k,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),E(Vt,C,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Vt)),la=[1,2,3,4,5,6,7,8,9,10],Xr=la.concat([11,12,13,14,15,16,17,18,19,20]),Jr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],tt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Pt=new Set;Object.keys(It[k]).map(Pt.add.bind(Pt));Object.keys(It[C]).map(Pt.add.bind(Pt));var Qr=[].concat(Ke,Tt(Pt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",tt.GROUP,tt.SWAP_OPACITY,tt.PRIMARY,tt.SECONDARY]).concat(la.map(function(t){return"".concat(t,"x")})).concat(Xr.map(function(t){return"w-".concat(t)})),St=K.FontAwesomeConfig||{};function Zr(t){var e=_.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ti(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(_&&typeof _.querySelector=="function"){var ei=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ei.forEach(function(t){var e=Ve(t,2),n=e[0],a=e[1],r=ti(Zr(n));r!=null&&(St[a]=r)})}var ca={styleDefault:"solid",familyDefault:"classic",cssPrefix:ra,replacementClass:ia,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};St.familyPrefix&&(St.cssPrefix=St.familyPrefix);var ht=u(u({},ca),St);ht.autoReplaceSvg||(ht.observeMutations=!1);var v={};Object.keys(ca).forEach(function(t){Object.defineProperty(v,t,{enumerable:!0,set:function(n){ht[t]=n,At.forEach(function(a){return a(v)})},get:function(){return ht[t]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(e){ht.cssPrefix=e,At.forEach(function(n){return n(v)})},get:function(){return ht.cssPrefix}});K.FontAwesomeConfig=v;var At=[];function ni(t){return At.push(t),function(){At.splice(At.indexOf(t),1)}}var W=Ce,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ai(t){if(!(!t||!Y)){var e=_.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=_.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return _.head.insertBefore(e,a),t}}var ri="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Mt(){for(var t=12,e="";t-- >0;)e+=ri[Math.random()*62|0];return e}function yt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Xe(t){return t.classList?yt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function fa(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ii(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(fa(t[n]),'" ')},"").trim()}function se(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Je(t){return t.size!==F.size||t.x!==F.x||t.y!==F.y||t.rotate!==F.rotate||t.flipX||t.flipY}function oi(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:f}}function si(t){var e=t.transform,n=t.width,a=n===void 0?Ce:n,r=t.height,i=r===void 0?Ce:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&aa?l+="translate(".concat(e.x/W-a/2,"em, ").concat(e.y/W-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/W,"em), calc(-50% + ").concat(e.y/W,"em)) "):l+="translate(".concat(e.x/W,"em, ").concat(e.y/W,"em) "),l+="scale(".concat(e.size/W*(e.flipX?-1:1),", ").concat(e.size/W*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var li=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ua(){var t=ra,e=ia,n=v.cssPrefix,a=v.replacementClass,r=li;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var yn=!1;function ve(){v.autoAddCss&&!yn&&(ai(ua()),yn=!0)}var ci={mixout:function(){return{dom:{css:ua,insertCss:ve}}},hooks:function(){return{beforeDOMElementCreation:function(){ve()},beforeI2svg:function(){ve()}}}},B=K||{};B[D]||(B[D]={});B[D].styles||(B[D].styles={});B[D].hooks||(B[D].hooks={});B[D].shims||(B[D].shims=[]);var H=B[D],da=[],fi=function t(){_.removeEventListener("DOMContentLoaded",t),ae=1,da.map(function(e){return e()})},ae=!1;Y&&(ae=(_.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_.readyState),ae||_.addEventListener("DOMContentLoaded",fi));function ui(t){Y&&(ae?setTimeout(t,0):da.push(t))}function Rt(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?fa(t):"<".concat(e," ").concat(ii(a),">").concat(i.map(Rt).join(""),"</").concat(e,">")}function wn(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var di=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},pe=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?di(n,r):n,l,f,c;for(a===void 0?(l=1,c=e[i[0]]):(l=0,c=a);l<o;l++)f=i[l],c=s(c,e[f],f,e);return c};function mi(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Ee(t){var e=mi(t);return e.length===1?e[0].toString(16):null}function vi(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function kn(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Ie(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=kn(e);typeof H.hooks.addPack=="function"&&!r?H.hooks.addPack(t,kn(e)):H.styles[t]=u(u({},H.styles[t]||{}),i),t==="fas"&&Ie("fa",e)}var Wt,Gt,qt,ft=H.styles,pi=H.shims,hi=(Wt={},E(Wt,k,Object.values(Lt[k])),E(Wt,C,Object.values(Lt[C])),Wt),Qe=null,ma={},va={},pa={},ha={},ga={},gi=(Gt={},E(Gt,k,Object.keys(Et[k])),E(Gt,C,Object.keys(Et[C])),Gt);function bi(t){return~Qr.indexOf(t)}function yi(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!bi(r)?r:null}var ba=function(){var e=function(i){return pe(ft,function(o,s,l){return o[l]=pe(s,i,{}),o},{})};ma=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),va=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),ga=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in ft||v.autoFetchSvg,a=pe(pi,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});pa=a.names,ha=a.unicodes,Qe=le(v.styleDefault,{family:v.familyDefault})};ni(function(t){Qe=le(t.styleDefault,{family:v.familyDefault})});ba();function Ze(t,e){return(ma[t]||{})[e]}function wi(t,e){return(va[t]||{})[e]}function et(t,e){return(ga[t]||{})[e]}function ya(t){return pa[t]||{prefix:null,iconName:null}}function ki(t){var e=ha[t],n=Ze("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function X(){return Qe}var tn=function(){return{prefix:null,iconName:null,rest:[]}};function le(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?k:n,r=Et[a][t],i=It[a][t]||It[a][r],o=t in H.styles?t:null;return i||o||null}var _n=(qt={},E(qt,k,Object.keys(Lt[k])),E(qt,C,Object.keys(Lt[C])),qt);function ce(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},E(e,k,"".concat(v.cssPrefix,"-").concat(k)),E(e,C,"".concat(v.cssPrefix,"-").concat(C)),e),o=null,s=k;(t.includes(i[k])||t.some(function(f){return _n[k].includes(f)}))&&(s=k),(t.includes(i[C])||t.some(function(f){return _n[C].includes(f)}))&&(s=C);var l=t.reduce(function(f,c){var d=yi(v.cssPrefix,c);if(ft[c]?(c=hi[s].includes(c)?Wr[s][c]:c,o=c,f.prefix=c):gi[s].indexOf(c)>-1?(o=c,f.prefix=le(c,{family:s})):d?f.iconName=d:c!==v.replacementClass&&c!==i[k]&&c!==i[C]&&f.rest.push(c),!r&&f.prefix&&f.iconName){var g=o==="fa"?ya(f.iconName):{},w=et(f.prefix,f.iconName);g.prefix&&(o=null),f.iconName=g.iconName||w||f.iconName,f.prefix=g.prefix||f.prefix,f.prefix==="far"&&!ft.far&&ft.fas&&!v.autoFetchSvg&&(f.prefix="fas")}return f},tn());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===C&&(ft.fass||v.autoFetchSvg)&&(l.prefix="fass",l.iconName=et(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=X()||"fas"),l}var _i=function(){function t(){Tr(this,t),this.definitions={}}return zr(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=u(u({},n.definitions[s]||{}),o[s]),Ie(s,o[s]);var l=Lt[k][s];l&&Ie(l,o[s]),ba()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=f)}),n[s][l]=f}),n}}]),t}(),xn=[],ut={},pt={},xi=Object.keys(pt);function Si(t,e){var n=e.mixoutsTo;return xn=t,ut={},Object.keys(pt).forEach(function(a){xi.indexOf(a)===-1&&delete pt[a]}),xn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),ne(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){ut[o]||(ut[o]=[]),ut[o].push(i[o])})}a.provides&&a.provides(pt)}),n}function Le(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=ut[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function st(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=ut[t]||[];r.forEach(function(i){i.apply(null,n)})}function U(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return pt[t]?pt[t].apply(null,e):void 0}function Pe(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||X();if(e)return e=et(n,e)||e,wn(wa.definitions,n,e)||wn(H.styles,n,e)}var wa=new _i,Ai=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,st("noAuto")},Ci={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Y?(st("beforeI2svg",e),U("pseudoElements2svg",e),U("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,ui(function(){Ei({autoReplaceSvgRoot:n}),st("watch",e)})}},Oi={icon:function(e){if(e===null)return null;if(ne(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:et(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=le(e[0]);return{prefix:a,iconName:et(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(v.cssPrefix,"-"))>-1||e.match(Gr))){var r=ce(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||X(),iconName:et(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=X();return{prefix:i,iconName:et(i,e)||e}}}},T={noAuto:Ai,config:v,dom:Ci,parse:Oi,library:wa,findIconDefinition:Pe,toHtml:Rt},Ei=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?_:n;(Object.keys(H.styles).length>0||v.autoFetchSvg)&&Y&&v.autoReplaceSvg&&T.dom.i2svg({node:a})};function fe(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return Rt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(Y){var a=_.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Ii(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(Je(o)&&n.found&&!a.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};r.style=se(u(u({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Li(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(v.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function en(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,f=t.maskId,c=t.titleId,d=t.extra,g=t.watchable,w=g===void 0?!1:g,S=a.found?a:n,O=S.width,A=S.height,m=r==="fak",p=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(V){return d.classes.indexOf(V)===-1}).filter(function(V){return V!==""||!!V}).concat(d.classes).join(" "),b={children:[],attributes:u(u({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(A)})},x=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(O/A*16*.0625,"em")}:{};w&&(b.attributes[ot]=""),l&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(c||Mt())},children:[l]}),delete b.attributes.title);var h=u(u({},b),{},{prefix:r,iconName:i,main:n,mask:a,maskId:f,transform:o,symbol:s,styles:u(u({},x),d.styles)}),I=a.found&&n.found?U("generateAbstractMask",h)||{children:[],attributes:{}}:U("generateAbstractIcon",h)||{children:[],attributes:{}},P=I.children,de=I.attributes;return h.children=P,h.attributes=de,s?Li(h):Ii(h)}function Sn(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,f=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[ot]="");var c=u({},o.styles);Je(r)&&(c.transform=si({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);var d=se(c);d.length>0&&(f.style=d);var g=[];return g.push({tag:"span",attributes:f,children:[e]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Pi(t){var e=t.content,n=t.title,a=t.extra,r=u(u(u({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=se(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var he=H.styles;function Me(t){var e=t[0],n=t[1],a=t.slice(4),r=Ve(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(tt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(tt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(tt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Mi={found:!1,width:512,height:512};function Ni(t,e){!oa&&!v.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ne(t,e){var n=e;return e==="fa"&&v.styleDefault!==null&&(e=X()),new Promise(function(a,r){if(U("missingIconAbstract"),n==="fa"){var i=ya(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&he[e]&&he[e][t]){var o=he[e][t];return a(Me(o))}Ni(t,e),a(u(u({},Mi),{},{icon:v.showMissingIcons&&t?U("missingIconAbstract")||{}:{}}))})}var An=function(){},Te=v.measurePerformance&&$t&&$t.mark&&$t.measure?$t:{mark:An,measure:An},kt='FA "6.5.1"',Ti=function(e){return Te.mark("".concat(kt," ").concat(e," begins")),function(){return ka(e)}},ka=function(e){Te.mark("".concat(kt," ").concat(e," ends")),Te.measure("".concat(kt," ").concat(e),"".concat(kt," ").concat(e," begins"),"".concat(kt," ").concat(e," ends"))},nn={begin:Ti,end:ka},Zt=function(){};function Cn(t){var e=t.getAttribute?t.getAttribute(ot):null;return typeof e=="string"}function zi(t){var e=t.getAttribute?t.getAttribute(Ge):null,n=t.getAttribute?t.getAttribute(qe):null;return e&&n}function Ri(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(v.replacementClass)}function Hi(){if(v.autoReplaceSvg===!0)return te.replace;var t=te[v.autoReplaceSvg];return t||te.replace}function ji(t){return _.createElementNS("http://www.w3.org/2000/svg",t)}function Fi(t){return _.createElement(t)}function _a(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?ji:Fi:n;if(typeof t=="string")return _.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(_a(o,{ceFn:a}))}),r}function $i(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var te={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(_a(r),n)}),n.getAttribute(ot)===null&&v.keepOriginalSource){var a=_.createComment($i(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~Xe(n).indexOf(v.replacementClass))return te.replace(e);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===v.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return Rt(s)}).join(`
`);n.setAttribute(ot,""),n.innerHTML=o}};function On(t){t()}function xa(t,e){var n=typeof e=="function"?e:Zt;if(t.length===0)n();else{var a=On;v.mutateApproach===Yr&&(a=K.requestAnimationFrame||On),a(function(){var r=Hi(),i=nn.begin("mutate");t.map(r),i(),n()})}}var an=!1;function Sa(){an=!0}function ze(){an=!1}var re=null;function En(t){if(gn&&v.observeMutations){var e=t.treeCallback,n=e===void 0?Zt:e,a=t.nodeCallback,r=a===void 0?Zt:a,i=t.pseudoElementsCallback,o=i===void 0?Zt:i,s=t.observeMutationsRoot,l=s===void 0?_:s;re=new gn(function(f){if(!an){var c=X();yt(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Cn(d.addedNodes[0])&&(v.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&v.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Cn(d.target)&&~Jr.indexOf(d.attributeName))if(d.attributeName==="class"&&zi(d.target)){var g=ce(Xe(d.target)),w=g.prefix,S=g.iconName;d.target.setAttribute(Ge,w||c),S&&d.target.setAttribute(qe,S)}else Ri(d.target)&&r(d.target)})}}),Y&&re.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Di(){re&&re.disconnect()}function Bi(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Ui(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=ce(Xe(t));return r.prefix||(r.prefix=X()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=wi(r.prefix,t.innerText)||Ze(r.prefix,Ee(t.innerText))),!r.iconName&&v.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Yi(t){var e=yt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return v.autoA11y&&(n?e["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(a||Mt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Vi(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function In(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ui(t),a=n.iconName,r=n.prefix,i=n.rest,o=Yi(t),s=Le("parseNodeAttributes",{},t),l=e.styleParser?Bi(t):[];return u({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Wi=H.styles;function Aa(t){var e=v.autoReplaceSvg==="nest"?In(t,{styleParser:!1}):In(t);return~e.extra.classes.indexOf(sa)?U("generateLayersText",t,e):U("generateSvgReplacementMutation",t,e)}var J=new Set;Ke.map(function(t){J.add("fa-".concat(t))});Object.keys(Et[k]).map(J.add.bind(J));Object.keys(Et[C]).map(J.add.bind(J));J=Tt(J);function Ln(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Y)return Promise.resolve();var n=_.documentElement.classList,a=function(d){return n.add("".concat(bn,"-").concat(d))},r=function(d){return n.remove("".concat(bn,"-").concat(d))},i=v.autoFetchSvg?J:Ke.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Wi));i.includes("fa")||i.push("fa");var o=[".".concat(sa,":not([").concat(ot,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(ot,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=yt(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=nn.begin("onTree"),f=s.reduce(function(c,d){try{var g=Aa(d);g&&c.push(g)}catch(w){oa||w.name==="MissingIcon"&&console.error(w)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(g){xa(g,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(g){l(),d(g)})})}function Gi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Aa(t).then(function(n){n&&xa([n],e)})}function qi(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Pe(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Pe(r||{})),t(a,u(u({},n),{},{mask:r}))}}var Ki=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?F:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,d=n.title,g=d===void 0?null:d,w=n.titleId,S=w===void 0?null:w,O=n.classes,A=O===void 0?[]:O,m=n.attributes,p=m===void 0?{}:m,b=n.styles,x=b===void 0?{}:b;if(e){var h=e.prefix,I=e.iconName,P=e.icon;return fe(u({type:"icon"},e),function(){return st("beforeDOMElementCreation",{iconDefinition:e,params:n}),v.autoA11y&&(g?p["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(S||Mt()):(p["aria-hidden"]="true",p.focusable="false")),en({icons:{main:Me(P),mask:l?Me(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:I,transform:u(u({},F),r),symbol:o,title:g,maskId:c,titleId:S,extra:{attributes:p,styles:x,classes:A}})})}},Xi={mixout:function(){return{icon:qi(Ki)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ln,n.nodeCallback=Gi,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?_:a,i=n.callback,o=i===void 0?function(){}:i;return Ln(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,f=a.symbol,c=a.mask,d=a.maskId,g=a.extra;return new Promise(function(w,S){Promise.all([Ne(r,s),c.iconName?Ne(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var A=Ve(O,2),m=A[0],p=A[1];w([n,en({icons:{main:m,mask:p},prefix:s,iconName:r,transform:l,symbol:f,maskId:d,title:i,titleId:o,extra:g,watchable:!0})])}).catch(S)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,l=se(s);l.length>0&&(r.style=l);var f;return Je(o)&&(f=U("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(f||i.icon),{children:a,attributes:r}}}},Ji={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return fe({type:"layer"},function(){st("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(Tt(i)).join(" ")},children:o}]})}}}},Qi={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,f=l===void 0?{}:l,c=a.styles,d=c===void 0?{}:c;return fe({type:"counter",content:n},function(){return st("beforeDOMElementCreation",{content:n,params:a}),Pi({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(Tt(s))}})})}}}},Zi={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?F:r,o=a.title,s=o===void 0?null:o,l=a.classes,f=l===void 0?[]:l,c=a.attributes,d=c===void 0?{}:c,g=a.styles,w=g===void 0?{}:g;return fe({type:"text",content:n},function(){return st("beforeDOMElementCreation",{content:n,params:a}),Sn({content:n,transform:u(u({},F),i),title:s,extra:{attributes:d,styles:w,classes:["".concat(v.cssPrefix,"-layers-text")].concat(Tt(f))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(aa){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return v.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Sn({content:n.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},to=new RegExp('"',"ug"),Pn=[1105920,1112319];function eo(t){var e=t.replace(to,""),n=vi(e,0),a=n>=Pn[0]&&n<=Pn[1],r=e.length===2?e[0]===e[1]:!1;return{value:Ee(r?e[0]:e),isSecondary:a||r}}function Mn(t,e){var n="".concat(Ur).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=yt(t.children),o=i.filter(function(P){return P.getAttribute(Oe)===e})[0],s=K.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(qr),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),a();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?C:k,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?It[g][l[2].toLowerCase()]:Kr[g][f],S=eo(d),O=S.value,A=S.isSecondary,m=l[0].startsWith("FontAwesome"),p=Ze(w,O),b=p;if(m){var x=ki(O);x.iconName&&x.prefix&&(p=x.iconName,w=x.prefix)}if(p&&!A&&(!o||o.getAttribute(Ge)!==w||o.getAttribute(qe)!==b)){t.setAttribute(n,b),o&&t.removeChild(o);var h=Vi(),I=h.extra;I.attributes[Oe]=e,Ne(p,w).then(function(P){var de=en(u(u({},h),{},{icons:{main:P,mask:tn()},prefix:w,iconName:b,extra:I,watchable:!0})),V=_.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(V,t.firstChild):t.appendChild(V),V.outerHTML=de.map(function(La){return Rt(La)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function no(t){return Promise.all([Mn(t,"::before"),Mn(t,"::after")])}function ao(t){return t.parentNode!==document.head&&!~Vr.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Oe)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Nn(t){if(Y)return new Promise(function(e,n){var a=yt(t.querySelectorAll("*")).filter(ao).map(no),r=nn.begin("searchPseudoElements");Sa(),Promise.all(a).then(function(){r(),ze(),e()}).catch(function(){r(),ze(),n()})})}var ro={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Nn,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?_:a;v.searchPseudoElements&&Nn(r)}}},Tn=!1,io={mixout:function(){return{dom:{unwatch:function(){Sa(),Tn=!0}}}},hooks:function(){return{bootstrap:function(){En(Le("mutationObserverCallbacks",{}))},noAuto:function(){Di()},watch:function(n){var a=n.observeMutationsRoot;Tn?ze():En(Le("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},zn=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},oo={mixout:function(){return{parse:{transform:function(n){return zn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=zn(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},g={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:d,path:g};return{tag:"g",attributes:u({},w.outer),children:[{tag:"g",attributes:u({},w.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),w.path)}]}]}}}},ge={x:0,y:0,width:"100%",height:"100%"};function Rn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function so(t){return t.tag==="g"?t.children:[t]}var lo={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?ce(r.split(" ").map(function(o){return o.trim()})):tn();return i.prefix||(i.prefix=X()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,d=o.width,g=o.icon,w=oi({transform:l,containerWidth:d,iconWidth:f}),S={tag:"rect",attributes:u(u({},ge),{},{fill:"white"})},O=c.children?{children:c.children.map(Rn)}:{},A={tag:"g",attributes:u({},w.inner),children:[Rn(u({tag:c.tag,attributes:u(u({},c.attributes),w.path)},O))]},m={tag:"g",attributes:u({},w.outer),children:[A]},p="mask-".concat(s||Mt()),b="clip-".concat(s||Mt()),x={tag:"mask",attributes:u(u({},ge),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,m]},h={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:so(g)},x]};return a.push(h,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(p,")")},ge)}),{children:a,attributes:r}}}},co={provides:function(e){var n=!1;K.matchMedia&&(n=K.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},fo={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},uo=[ci,Xi,Ji,Qi,Zi,ro,io,oo,lo,co,fo];Si(uo,{mixoutsTo:T});T.noAuto;T.config;T.library;T.dom;var Re=T.parse;T.findIconDefinition;T.toHtml;var mo=T.icon;T.layer;T.text;T.counter;function Hn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Hn(Object(n),!0).forEach(function(a){L(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Hn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ie(t){"@babel/helpers - typeof";return ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ie(t)}function L(t,e,n){return e=go(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vo(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function po(t,e){if(t==null)return{};var n=vo(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function ho(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function go(t){var e=ho(t,"string");return typeof e=="symbol"?e:String(e)}var bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ca={exports:{}};(function(t){(function(e){var n=function(m,p,b){if(!f(p)||d(p)||g(p)||w(p)||l(p))return p;var x,h=0,I=0;if(c(p))for(x=[],I=p.length;h<I;h++)x.push(n(m,p[h],b));else{x={};for(var P in p)Object.prototype.hasOwnProperty.call(p,P)&&(x[m(P,b)]=n(m,p[P],b))}return x},a=function(m,p){p=p||{};var b=p.separator||"_",x=p.split||/(?=[A-Z])/;return m.split(x).join(b)},r=function(m){return S(m)?m:(m=m.replace(/[\-_\s]+(.)?/g,function(p,b){return b?b.toUpperCase():""}),m.substr(0,1).toLowerCase()+m.substr(1))},i=function(m){var p=r(m);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(m,p){return a(m,p).toLowerCase()},s=Object.prototype.toString,l=function(m){return typeof m=="function"},f=function(m){return m===Object(m)},c=function(m){return s.call(m)=="[object Array]"},d=function(m){return s.call(m)=="[object Date]"},g=function(m){return s.call(m)=="[object RegExp]"},w=function(m){return s.call(m)=="[object Boolean]"},S=function(m){return m=m-0,m===m},O=function(m,p){var b=p&&"process"in p?p.process:p;return typeof b!="function"?m:function(x,h){return b(x,m,h)}},A={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(m,p){return n(O(r,p),m)},decamelizeKeys:function(m,p){return n(O(o,p),m,p)},pascalizeKeys:function(m,p){return n(O(i,p),m)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=A:e.humps=A})(bo)})(Ca);var yo=Ca.exports,wo=["class","style"];function ko(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=yo.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return e[r]=i,e},{})}function _o(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Oa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(l){return Oa(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,f){var c=t.attributes[f];switch(f){case"class":l.class=_o(c);break;case"style":l.style=ko(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=po(n,wo);return Ir(t.tag,$($($({},e),{},{class:r.class,style:$($({},r.style),o)},r.attrs),s),a)}var Ea=!1;try{Ea=!0}catch{}function xo(){if(!Ea&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function be(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?L({},t,e):{}}function So(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},L(e,"fa-".concat(t.size),t.size!==null),L(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),L(e,"fa-pull-".concat(t.pull),t.pull!==null),L(e,"fa-swap-opacity",t.swapOpacity),L(e,"fa-bounce",t.bounce),L(e,"fa-shake",t.shake),L(e,"fa-beat",t.beat),L(e,"fa-fade",t.fade),L(e,"fa-beat-fade",t.beatFade),L(e,"fa-flash",t.flash),L(e,"fa-spin-pulse",t.spinPulse),L(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function jn(t){if(t&&ie(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Re.icon)return Re.icon(t);if(t===null)return null;if(ie(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Fn=gr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=lt(function(){return jn(e.icon)}),i=lt(function(){return be("classes",So(e))}),o=lt(function(){return be("transform",typeof e.transform=="string"?Re.transform(e.transform):e.transform)}),s=lt(function(){return be("mask",jn(e.mask))}),l=lt(function(){return mo(r.value,$($($($({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});pr(l,function(c){if(!c)return xo("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var f=lt(function(){return l.value?Oa(l.value.abstract[0],{},a):null});return function(){return f.value}}}),Ao={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Co={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};const Ht=(t,e)=>{const n=t.__vccOpts||t;for(const[a,r]of e)n[a]=r;return n},Oo={class:"header-wrapper"},Eo=De('<div class="slideshow-container" data-v-0d5c34dd><div class="mySlides fade" data-v-0d5c34dd><img class="me-img" src="'+Lr+'" data-v-0d5c34dd></div><div class="mySlides fade" data-v-0d5c34dd><img class="me-img" src="'+Pr+'" data-v-0d5c34dd></div><div class="mySlides fade" data-v-0d5c34dd><img class="me-img" src="'+Mr+'" data-v-0d5c34dd></div><div class="mySlides fade" data-v-0d5c34dd><img class="me-img" src="'+Nr+'" data-v-0d5c34dd></div></div>',1),Io={class:"header-title"},Lo={class:"header-icon",href:"https://github.com/mackbra",target:"_blank"},Po={class:"header-icon",href:"https://linkedin.com/in/mackenzie-branch",target:"_blank"},Mo={__name:"Header",setup(t){return(e,n)=>(gt(),bt("div",Oo,[Eo,y("span",Io,[y("h1",null,[at("Mackenzie Branch "),y("a",Lo,[M(jt(Fn),{icon:jt(Co)},null,8,["icon"])]),y("a",Po,[M(jt(Fn),{icon:jt(Ao)},null,8,["icon"])])])])]))}},No=Ht(Mo,[["__scopeId","data-v-0d5c34dd"]]),To={class:"sidenav"},zo={__name:"SideNav",props:{about:{type:Boolean},skills:{type:Boolean},work:{type:Boolean}},setup(t){return(e,n)=>(gt(),bt("div",To,[y("ul",null,[y("li",null,[y("a",{href:"#About",class:dt({active:t.about})},"About",2)]),y("li",null,[y("a",{href:"#Skills",class:dt({active:t.skills})},"Skills",2)]),y("li",null,[y("a",{href:"#Work",class:dt({active:t.work})},"Work Experience",2)])])]))}},Ro=Ht(zo,[["__scopeId","data-v-5e466667"]]),Ho=y("p",null,[at(" My passion is creating- I have a great time making new things, and I’d like to make something for you. I’ve always been a visually creative person, from doodling as a child to taking fine arts classes in high school and college. Now I like to feature my art "),y("a",{class:"portfolioLink",target:"_blank",href:"https://www.instagram.com/tommysgirlresin/"},"online"),at(" and participate in local craft shows and artist feature pop ups. ")],-1),jo=y("p",null," Professionally, I’ve been doing web development for 5 years. Before that, my first attempt at coding (before I even knew what coding was) was customizing my Neopets profile page when I was 10. I’ve worked on solo projects and collaborated on a team to meet a client’s vision and needs. The best part of a project is watching an idea become a reality. Most of my time has been dedicated to frontend coding, but I have also dabbled in the backend of code managing databases and creating functional APIs. ",-1),Fo=y("p",null," At home, I am a classic cat lady with a couple cats that I share with my partner and our lovely house mates in a late 1800’s home in Saint Paul, MN. We enjoy decorating our home with eccentric art, emulating our Maximalist style and paying homage to our pets and nerdy tv interests. On nights out we love to check out the wide variety of events and cool eateries available in the twin cities. Most of the time I prefer to have a cozy movie night or play board games with friends over a shared charcuterie board. ",-1),$o={__name:"About",setup(t){return(e,n)=>(gt(),bt(Nt,null,[Ho,jo,Fo],64))}},Do="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='144px'%20height='144px'%3e%3clinearGradient%20id='SNASnMitCxQrIYk4GDibta'%20x1='18.208'%20x2='34.159'%20y1='2.413'%20y2='46.236'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23f09701'/%3e%3cstop%20offset='1'%20stop-color='%23e36001'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23SNASnMitCxQrIYk4GDibta)'%20d='M7.192,7.176l2.627,29.77c0.109,1.237,0.97,2.28,2.164,2.621l10.643,3.041%20c0.898,0.257,1.849,0.257,2.747,0l10.643-3.041c1.194-0.341,2.055-1.383,2.164-2.621l2.627-29.77C40.911,6.006,39.99,5,38.816,5%20H9.184C8.01,5,7.089,6.006,7.192,7.176z'/%3e%3cpath%20fill='%23f09601'%20d='M24,8v31.9l9.876-2.822c0.797-0.228,1.371-0.924,1.443-1.749l2.286-26.242%20C37.656,8.502,37.196,8,36.609,8H24z'/%3e%3cpath%20fill='%23fff'%20d='M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5L24,25z%20M32.9,17l0.3-4H24v4H32.9z'/%3e%3cpath%20fill='%23d6e0e9'%20d='M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z%20M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z'/%3e%3cpath%20d='M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4%20l-0.7-12H24H33.2%20M34.278,12H33.2H24h-9.1h-1.06l0.062,1.058l0.7,12L14.657,26h-0.032l0.078,1.073l0.4,5.5l0.049,0.668%20l0.636,0.209l7.9,2.6L24,36.153l0.313-0.103l7.9-2.6l0.644-0.212l0.041-0.677l0.7-11.5L33.663,20H32.6H24h-3.672l-0.15-2H24h8.9%20h0.928l0.069-0.925l0.3-4L34.278,12L34.278,12z%20M20.623,26H24h3.331l-0.185,2.769L24,29.843l-3.156-1.077l-0.148-1.846L20.623,26%20L20.623,26z'%20opacity='.05'/%3e%3cpath%20d='M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4%20l-0.7-12H24H33.2%20M33.739,12.5H33.2H24h-9.1h-0.53l0.031,0.529l0.7,12l0.027,0.471H15.6H24h3.866l-0.242,3.634L24,30.372%20l-3.628-1.239l-0.174-2.173l-0.037-0.46H19.7h-4h-0.538l0.039,0.536l0.4,5.5l0.024,0.334l0.318,0.105l7.9,2.6L24,35.626%20l0.156-0.051l7.9-2.6l0.322-0.106l0.021-0.339l0.7-11.5l0.032-0.53H32.6H24h-4.136l-0.225-3H24h8.9h0.464l0.035-0.463l0.3-4%20L33.739,12.5L33.739,12.5z'%20opacity='.07'/%3e%3c/svg%3e",Bo="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='144px'%20height='144px'%3e%3clinearGradient%20id='TQDriqswrKwPOniLrPT12a'%20x1='16.33'%20x2='32.293'%20y1='-2.748'%20y2='41.109'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%232aa4f4'/%3e%3cstop%20offset='1'%20stop-color='%23007ad9'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23TQDriqswrKwPOniLrPT12a)'%20d='M7.192,7.176l2.627,29.77c0.109,1.237,0.97,2.28,2.164,2.621l10.643,3.041%20c0.898,0.257,1.849,0.257,2.747,0l10.643-3.041c1.194-0.341,2.055-1.383,2.164-2.621l2.627-29.77C40.911,6.006,39.99,5,38.816,5%20H9.184C8.01,5,7.089,6.006,7.192,7.176z'/%3e%3cpath%20fill='%2335c1f1'%20d='M24,8v31.9l9.876-2.822c0.797-0.228,1.371-0.924,1.443-1.749l2.286-26.242%20C37.656,8.502,37.196,8,36.609,8H24z'/%3e%3cpath%20fill='%23fff'%20d='M33.1,13H24v4h4.9l-0.3,4H24v4h4.4l-0.3,4.5L24,30.9v4.2l7.9-2.6L32.6,21l0,0L33.1,13z'/%3e%3cpath%20fill='%23d6e0e9'%20d='M24,13v4h-8.9l-0.3-4H24z%20M19.4,21l0.2,4H24v-4H19.4z%20M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4%20L19.8,27z'/%3e%3cpath%20d='M33.1,13l-0.5,8l-0.7,11.5L24,35.1l-7.9-2.6L15.8,27h4l0.1,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-4.4l-0.2-4H24h4.6l0.3-4H24%20h-8.9l-0.3-4H24H33.1%20M34.164,12H33.1H24h-9.2h-1.078l0.081,1.075l0.3,4L14.172,18H15.1H24h3.822l-0.15,2H24h-4.6h-1.051%20l0.052,1.05l0.2,4L18.649,26H15.8h-1.056l0.058,1.054l0.3,5.5l0.037,0.682l0.649,0.214l7.9,2.6L24,36.153l0.313-0.103l7.9-2.6%20l0.644-0.212l0.041-0.677l0.7-11.5l0.5-7.998L34.164,12L34.164,12z%20M20.761,26H24h3.331l-0.185,2.769L24,29.843l-3.128-1.068%20l-0.073-1.815L20.761,26L20.761,26z'%20opacity='.05'/%3e%3cpath%20d='M33.1,13l-0.5,8l-0.7,11.5L24,35.1l-7.9-2.6L15.8,27h4l0.1,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-4.4l-0.2-4H24h4.6l0.3-4H24%20h-8.9l-0.3-4H24H33.1%20M33.632,12.5H33.1H24h-9.2h-0.539l0.04,0.537l0.3,4l0.035,0.463H15.1H24h4.361l-0.225,3H24h-4.6h-0.526%20l0.026,0.525l0.2,4l0.024,0.475H19.6H24h3.866l-0.242,3.634L24,30.372l-3.614-1.234L20.3,26.98L20.28,26.5H19.8h-4h-0.528%20l0.029,0.527l0.3,5.5l0.019,0.341l0.324,0.107l7.9,2.6L24,35.626l0.156-0.051l7.9-2.6l0.322-0.106l0.021-0.339l0.7-11.5l0.5-7.999%20L33.632,12.5L33.632,12.5z'%20opacity='.07'/%3e%3c/svg%3e",Uo="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='144px'%20height='144px'%20baseProfile='basic'%3e%3cpath%20fill='%23f7df1e'%20d='M6,42V6h36v36H6z'/%3e%3cpath%20fill='%23000001'%20d='M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585%20c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244%20c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377%20c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38%20c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z%20M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603%20c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368%20L17.952,33.029z'/%3e%3c/svg%3e",Yo="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='144px'%20height='144px'%20baseProfile='basic'%3e%3clinearGradient%20id='jOxEAtqKLV9JfRrHHmqLMa'%20x1='3.381'%20x2='44.593'%20y1='25.73'%20y2='25.73'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2333c481'/%3e%3cstop%20offset='1'%20stop-color='%2321a366'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23jOxEAtqKLV9JfRrHHmqLMa)'%20d='M23.987,17l-5.094-8.727C18.795,8.104,18.614,8,18.418,8H3.931%20C3.507,8,3.243,8.46,3.457,8.827l20.056,34.36c0.212,0.363,0.737,0.363,0.949,0l20.056-34.36C44.731,8.46,44.467,8,44.043,8H29.556%20c-0.195,0-0.376,0.104-0.475,0.273L23.987,17z'/%3e%3clinearGradient%20id='jOxEAtqKLV9JfRrHHmqLMb'%20x1='11.146'%20x2='36.828'%20y1='19'%20y2='19'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='.189'%20stop-color='%23313437'/%3e%3cstop%20offset='1'%20stop-color='%2345494d'/%3e%3c/linearGradient%3e%3cpolygon%20fill='url(%23jOxEAtqKLV9JfRrHHmqLMb)'%20points='29.24,8%2023.987,17%2018.734,8%2011.146,8%2023.987,30%2036.828,8'/%3e%3cpolygon%20fill='none'%20points='23.987,30%2036.828,8%2029.24,8%2023.987,17%2018.734,8%2011.146,8'/%3e%3cpolygon%20fill='none'%20points='28.082,8%2019.892,8%2023.987,15.016'/%3e%3cpath%20d='M37.26,8.252l-12.841,22l-0.432,0.74l-0.432-0.74l-12.841-22L10.567,8H9.988l0.294,0.504l12.841,22%20l0.864,1.48l0.864-1.48l12.841-22L37.986,8h-0.579L37.26,8.252z%20M36.828,9h0.005H36.828z'%20opacity='.05'/%3e%3cpolygon%20points='36.828,8%2023.987,30%2011.146,8%2010.567,8%2010.714,8.252%2023.555,30.252%2023.987,30.992%2024.419,30.252%2037.26,8.252%2037.407,8%2036.833,8'%20opacity='.07'/%3e%3c/svg%3e",Vo="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='144px'%20height='144px'%3e%3clinearGradient%20id='HjBUFHyNtcsDcBgnZBZ2Sa'%20x1='37.8'%20x2='37.8'%20y1='43.37'%20y2='7.42'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2329b6f6'/%3e%3cstop%20offset='1'%20stop-color='%2313b2f6'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23HjBUFHyNtcsDcBgnZBZ2Sa)'%20d='M34.176,4.249c0.188,0.092,5.688,2.716,8.374,3.998C43.437,8.67,44,9.564,44,10.546v26.86%20c0,0.981-0.559,1.874-1.443,2.299c-2.548,1.228-7.611,3.666-7.948,3.826C34.361,43.649,33.709,44,33.181,44%20c-0.678,0-1.133-0.316-1.58-0.73L34,35.711V5.715l-2.254-1.135C32.228,4.109,32.896,4,33.291,4C33.653,4,33.948,4.138,34.176,4.249z'/%3e%3clinearGradient%20id='HjBUFHyNtcsDcBgnZBZ2Sb'%20x1='6.085'%20x2='34.793'%20y1='34.801'%20y2='7.173'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='.115'%20stop-color='%230076bb'/%3e%3cstop%20offset='.257'%20stop-color='%230069b0'/%3e%3cstop%20offset='.28'%20stop-color='%230069b0'/%3e%3cstop%20offset='.424'%20stop-color='%230069b0'/%3e%3cstop%20offset='.491'%20stop-color='%230072b7'/%3e%3cstop%20offset='.577'%20stop-color='%230076bb'/%3e%3cstop%20offset='.795'%20stop-color='%230076bb'/%3e%3cstop%20offset='1'%20stop-color='%23006eb9'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23HjBUFHyNtcsDcBgnZBZ2Sb)'%20d='M9,33.896l25-19.023V5.83c0-1.299-1.662-1.808-2.337-1.184%20C31.008,5.25,4.658,29.239,4.658,29.239c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574%20C7.304,34.37,8.271,34.43,9,33.896z'/%3e%3cpath%20fill='%230288d1'%20d='M9,14.104l25,19.054v8.771c0,1.198-1.42,2.193-2.399,1.341L4.658,18.761%20c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z'/%3e%3c/svg%3e",Wo="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='144px'%20height='144px'%20baseProfile='basic'%3e%3cpath%20fill='%2321a366'%20d='M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682%20c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061%20c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0%20L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483%20c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886%20c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928%20c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932%20v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44'/%3e%3cpath%20fill='%2321a366'%20d='M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028%20c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502%20c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053%20c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039%20c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2%20c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379'/%3e%3c/svg%3e",Go="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='144px'%20height='144px'%20baseProfile='basic'%3e%3clinearGradient%20id='Q_pn21O5LDDqwJlze0Upoa'%20x1='24'%20x2='24'%20y1='41'%20y2='7'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23643499'/%3e%3cstop%20offset='.011'%20stop-color='%2368369f'/%3e%3cstop%20offset='.135'%20stop-color='%23773db6'/%3e%3cstop%20offset='.193'%20stop-color='%238042c3'/%3e%3cstop%20offset='.248'%20stop-color='%238343c8'/%3e%3cstop%20offset='.388'%20stop-color='%238444c9'/%3e%3cstop%20offset='.732'%20stop-color='%239751d2'/%3e%3cstop%20offset='.997'%20stop-color='%239c55d4'/%3e%3cstop%20offset='.998'%20stop-color='%239c55d4'/%3e%3cstop%20offset='1'%20stop-color='%239c55d4'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23Q_pn21O5LDDqwJlze0Upoa)'%20d='M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443%20c-0.077,2.221,0.023,5.097,0.747,7.443c0.681,2.207,1.801,3.652,3.593,3.981c0.206,0.038,0.363,0.205,0.363,0.415v1.438%20c0,0.21-0.157,0.377-0.363,0.415c-1.792,0.328-2.912,1.773-3.593,3.981c-0.724,2.345-0.824,5.222-0.747,7.443%20C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443c0.077-2.221-0.023-5.097-0.747-7.443%20c-0.681-2.207-1.804-3.652-3.596-3.981c-0.206-0.038-0.363-0.205-0.363-0.415v-1.438c0-0.21,0.157-0.377,0.363-0.415%20c1.792-0.328,2.915-1.773,3.596-3.981C7.35,16.54,7.451,13.664,7.373,11.443z'/%3e%3cpath%20fill='%23fff'%20d='M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312%20c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783%20C31.283,25.544,29.593,23.756,27.073,23.464z%20M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565%20C27.413,21.63,26.055,22.608,23.59,22.608z%20M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953%20h-3.926V24.834z'/%3e%3c/svg%3e",qo="/assets/icons8-github-BhdFWFe5.svg",Ko={class:"skills-wrapper"},Xo=De('<div class="first-set set-container" data-v-0e32a122><span class="container" data-v-0e32a122><img src="'+Do+'" alt="HTML-5" loading="lazy" class="icon icon-card" data-v-0e32a122><div class="overlay" data-v-0e32a122><div class="text" data-v-0e32a122>HTML-5</div></div></span><span class="container" data-v-0e32a122><img src="'+Bo+'" alt="CSS3" loading="lazy" class="icon icon-card" data-v-0e32a122><div class="overlay" data-v-0e32a122><div class="text" data-v-0e32a122>CSS3</div></div></span><span class="container" data-v-0e32a122><img src="'+Uo+'" alt="Javascript/JQUERY" loading="lazy" class="icon icon-card" data-v-0e32a122><div class="overlay" data-v-0e32a122><div class="text" data-v-0e32a122>Javascript/JQuery</div></div></span><span class="container" data-v-0e32a122><img src="'+Yo+'" alt="VUE.js" loading="lazy" class="icon icon-card" data-v-0e32a122><div class="overlay" data-v-0e32a122><div class="text" data-v-0e32a122>Vue.js</div></div></span></div><div class="second-set" data-v-0e32a122><span class="container" data-v-0e32a122><img src="'+Vo+'" alt="VS Code" loading="lazy" class="icon icon-card" data-v-0e32a122><div class="overlay" data-v-0e32a122><div class="text" data-v-0e32a122>VS Code</div></div></span><span class="container" data-v-0e32a122><img src="'+Wo+'" alt="Node.js" loading="lazy" class="icon icon-card" data-v-0e32a122><div class="overlay" data-v-0e32a122><div class="text" data-v-0e32a122>Node.js</div></div></span><span class="container" data-v-0e32a122><img src="'+Go+'" alt="Bootstrap" loading="lazy" class="icon icon-card" data-v-0e32a122><div class="overlay" data-v-0e32a122><div class="text" data-v-0e32a122>Bootstrap</div></div></span><span class="container" data-v-0e32a122><img src="'+qo+'" alt="Github" loading="lazy" class="icon icon-card" data-v-0e32a122><div class="overlay" data-v-0e32a122><div class="text" data-v-0e32a122>Github</div></div></span></div>',2),Jo=[Xo],Qo={__name:"Skills",setup(t){return(e,n)=>(gt(),bt("div",Ko,Jo))}},Zo=Ht(Qo,[["__scopeId","data-v-0e32a122"]]),ts="/assets/Esoteria-B9o45jtv.png",es="/assets/dashboard-JJEJCLff.png",ns="/assets/Phonebook-amRXT60P.png",as="/assets/Phonebook%20Screen%20Capture-D9qESxBj.mp4",rs={methods:{open_in_new_window(t,e,n){var a;n!==void 0&&n!==""?a=window.open("","_blank",n):a=window.open("","_blank");var r=document.getElementById(t);r!==null&&a.document.write("<!doctype html><html><head><title>"+e+'</title><meta charset="UTF-8" /></head><body>'+r.innerHTML+"</body></html>")}}},ue=t=>(Kn("data-v-2689bba9"),t=t(),Xn(),t),is=De('<div class="work-wrapper" data-v-2689bba9><div class="work-img-wrapper" data-v-2689bba9><img src="'+ts+'" alt="" loading="lazy" class="image" data-v-2689bba9></div><div class="overlay" data-v-2689bba9><div class="text" data-v-2689bba9> Esoteria is a personal project I’ve been working on in my free time with some of my former colleagues. Our vision is to create a website for people who want to learn how to use tarot cards. My main contributions to the website have been creating the header and footer and the moon calendar. The header features a dynamic moon icon that changes with the current lunar phase. The moon calendar shows the moon phases for the next seven days and when clicked on a user can read about how the lunar phase affects the tarot readings. <br data-v-2689bba9><span class="learnMore" data-v-2689bba9> This project is currently under construction and is not public, however you can <a class="portfolioLink" target="_blank" href="https://github.com/joshuavickstrom/TarotWebapp" data-v-2689bba9>visit our code</a> and view how we collaborate and manage a project through github. </span></div></div></div><div class="work-wrapper" data-v-2689bba9><div class="work-img-wrapper" data-v-2689bba9><img src="'+es+'" alt="" loading="lazy" class="image" data-v-2689bba9></div><div class="overlay" data-v-2689bba9><div class="text" data-v-2689bba9> At T2MWorks, one of our main focuses was working on our website for customers that helped them manage their Microsoft365 account. The customer portal contains a lot of dense information and it was important to make that information easy to understand for people with varying levels of computer literacy. One of my main projects was creating a landing page after logging in. I created a dashboard look that relies heavily on Bootstrap components. This dashboard allows a user to navigate to important parts of the site in one click and make quick changes. </div></div></div>',2),os={class:"work-wrapper"},ss=ue(()=>y("div",{class:"work-img-wrapper"},[y("img",{src:ns,alt:"",loading:"lazy",class:"image"})],-1)),ls={class:"overlay"},cs={class:"text"},fs=ue(()=>y("a",{class:"portfolioLink",target:"_blank",href:"https://www.telerik.com/kendo-ui"},"Kendo UI",-1)),us=ue(()=>y("br",null,null,-1)),ds={class:"learnMore"},ms=ue(()=>y("div",{id:"html_contents","data-new-window":""},[y("video",{controls:"",style:{width:"100%",height:"auto"}},[y("source",{src:as,type:"video/mp4"})])],-1));function vs(t,e,n,a,r,i){return gt(),bt(Nt,null,[is,y("div",os,[ss,y("div",ls,[y("div",cs,[at(" My very first project at T2MWorks was a customer request to have a phonebook app. As the first person to be a part of the new web development team, I was responsible for creating both the backend and frontend. I created the database structure, the APIs that manipulated the databases, and designed and wired up the web app. This app used Bootstrap and "),fs,at(" framework and allowed a user to create, edit, and delete both contacts and directories. "),us,y("span",ds,[at(" Watch a "),y("a",{href:"#",class:"portfolioLink",onClick:e[0]||(e[0]=o=>{i.open_in_new_window("html_contents","PhonebookPreview","location=1,status=1,toolbar=1,scrollbars=1,resizeable=1,width=800,height=400")})},"video preview"),ms])])])])],64)}const ps=Ht(rs,[["render",vs],["__scopeId","data-v-2689bba9"]]),rn=t=>(Kn("data-v-7900c05f"),t=t(),Xn(),t),hs={class:"wrapper"},gs={class:"body-wrapper"},bs=rn(()=>y("h1",null,"Get to Know Me",-1)),ys=rn(()=>y("h1",null,"Some of My Skills",-1)),ws=rn(()=>y("h1",null,"My Recent Work",-1)),ks={data(){return{about:!1,skills:!1,work:!1}}},_s=Object.assign(ks,{__name:"App",setup(t){return(e,n)=>(gt(),bt(Nt,null,[y("header",null,[M(No)]),y("main",null,[y("div",hs,[M(Ro,{about:e.about,skills:e.skills,work:e.work},null,8,["about","skills","work"]),y("div",gs,[y("div",{id:"About",class:"post",onMouseover:n[0]||(n[0]=a=>(e.about=!0,e.skills=!1,e.work=!1))},[bs,M($o)],32),y("div",{id:"Skills",class:"post",onMouseover:n[1]||(n[1]=a=>(e.about=!1,e.skills=!0,e.work=!1))},[ys,M(Zo)],32),y("div",{id:"Work",class:"post",onMouseover:n[2]||(n[2]=a=>(e.about=!1,e.skills=!1,e.work=!0))},[ws,M(ps)],32)])])])],64))}}),xs=Ht(_s,[["__scopeId","data-v-7900c05f"]]);Vue.createApp(xs).mount("#app");let Kt=0;Ia();function Ia(){let t,e=document.getElementsByClassName("mySlides");for(t=0;t<e.length;t++)e[t].style.display="none";Kt++,Kt>e.length&&(Kt=1),e[Kt-1].style.display="block",setTimeout(Ia,5e3)}
