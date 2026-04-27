(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const _r=!1;var nt=Array.isArray,os=Array.prototype.indexOf,Pt=Array.from,ss=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,Cr=Object.getOwnPropertyDescriptors,is=Object.prototype,as=Array.prototype,zt=Object.getPrototypeOf,vr=Object.isExtensible;function wn(e){return typeof e=="function"}function ls(e){return e()}function Ft(e){for(var n=0;n<e.length;n++)e[n]()}const Re=2,Or=4,tt=8,qt=16,Be=32,dn=64,Un=128,be=256,Hn=512,ce=1024,Oe=2048,Xe=4096,ze=8192,rt=16384,cs=32768,Vt=65536,us=1<<17,fs=1<<19,Ir=1<<20,St=1<<21,Qe=Symbol("$state"),Lr=Symbol("legacy props"),ds=Symbol("");function Pr(e){return e===this.v}function _s(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Bt(e){return!_s(e,this.v)}function vs(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ms(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function gs(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ps(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function hs(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function bs(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ys(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ws(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Es(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Nn=!1,Ds=!1;function xs(){Nn=!0}const jt=1,$t=2,zr=4,Rs=8,Ms=16,Ts=1,Fs=2,qr=4,Ss=8,Ns=16,ks=1,As=2,_e=Symbol(),Cs="http://www.w3.org/1999/xhtml",Os="@attach";function Vr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let K=null;function mr(e){K=e}function _n(e,n=!1,t){var r=K={p:K,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};Nn&&!n&&(K.l={s:null,u:null,r1:[],r2:cn(!1)}),Vs(()=>{r.d=!0})}function vn(e){const n=K;if(n!==null){const a=n.e;if(a!==null){var t=j,r=$;n.e=null;try{for(var o=0;o<a.length;o++){var s=a[o];We(s.effect),Ie(s.reaction),Gt(s.fn)}}finally{We(t),Ie(r)}}K=n.p,n.m=!0}return{}}function kn(){return!Nn||K!==null&&K.l===null}function Pe(e){if(typeof e!="object"||e===null||Qe in e)return e;const n=zt(e);if(n!==is&&n!==as)return e;var t=new Map,r=nt(e),o=pe(0),s=$,a=c=>{var l=$;Ie(s);var u=c();return Ie(l),u};return r&&t.set("length",pe(e.length)),new Proxy(e,{defineProperty(c,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&ys();var v=t.get(l);return v===void 0?(v=a(()=>pe(u.value)),t.set(l,v)):Y(v,a(()=>Pe(u.value))),!0},deleteProperty(c,l){var u=t.get(l);if(u===void 0)l in c&&(t.set(l,a(()=>pe(_e))),Et(o));else{if(r&&typeof l=="string"){var v=t.get("length"),_=Number(l);Number.isInteger(_)&&_<v.v&&Y(v,_)}Y(u,_e),Et(o)}return!0},get(c,l,u){var h;if(l===Qe)return e;var v=t.get(l),_=l in c;if(v===void 0&&(!_||(h=Ze(c,l))!=null&&h.writable)&&(v=a(()=>pe(Pe(_?c[l]:_e))),t.set(l,v)),v!==void 0){var f=E(v);return f===_e?void 0:f}return Reflect.get(c,l,u)},getOwnPropertyDescriptor(c,l){var u=Reflect.getOwnPropertyDescriptor(c,l);if(u&&"value"in u){var v=t.get(l);v&&(u.value=E(v))}else if(u===void 0){var _=t.get(l),f=_==null?void 0:_.v;if(_!==void 0&&f!==_e)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return u},has(c,l){var f;if(l===Qe)return!0;var u=t.get(l),v=u!==void 0&&u.v!==_e||Reflect.has(c,l);if(u!==void 0||j!==null&&(!v||(f=Ze(c,l))!=null&&f.writable)){u===void 0&&(u=a(()=>pe(v?Pe(c[l]):_e)),t.set(l,u));var _=E(u);if(_===_e)return!1}return v},set(c,l,u,v){var V;var _=t.get(l),f=l in c;if(r&&l==="length")for(var h=u;h<_.v;h+=1){var b=t.get(h+"");b!==void 0?Y(b,_e):h in c&&(b=a(()=>pe(_e)),t.set(h+"",b))}_===void 0?(!f||(V=Ze(c,l))!=null&&V.writable)&&(_=a(()=>pe(void 0)),Y(_,a(()=>Pe(u))),t.set(l,_)):(f=_.v!==_e,Y(_,a(()=>Pe(u))));var N=Reflect.getOwnPropertyDescriptor(c,l);if(N!=null&&N.set&&N.set.call(v,u),!f){if(r&&typeof l=="string"){var T=t.get("length"),L=Number(l);Number.isInteger(L)&&L>=T.v&&Y(T,L+1)}Et(o)}return!0},ownKeys(c){E(o);var l=Reflect.ownKeys(c).filter(_=>{var f=t.get(_);return f===void 0||f.v!==_e});for(var[u,v]of t)v.v!==_e&&!(u in c)&&l.push(u);return l},setPrototypeOf(){ws()}})}function Et(e,n=1){Y(e,e.v+n)}function ln(e){var n=Re|Oe,t=$!==null&&($.f&Re)!==0?$:null;return j===null||t!==null&&(t.f&be)!==0?n|=be:j.f|=Ir,{ctx:K,deps:null,effects:null,equals:Pr,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??j}}function sn(e){const n=ln(e);return no(n),n}function Ut(e){const n=ln(e);return n.equals=Bt,n}function Br(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)Ve(n[t])}}function Is(e){for(var n=e.parent;n!==null;){if((n.f&Re)===0)return n;n=n.parent}return null}function jr(e){var n,t=j;We(Is(e));try{Br(e),n=so(e)}finally{We(t)}return n}function $r(e){var n=jr(e),t=(Ge||(e.f&be)!==0)&&e.deps!==null?Xe:ce;Ee(e,t),e.equals(n)||(e.v=n,e.wv=ro())}const Tn=new Map;function cn(e,n){var t={f:0,v:e,reactions:null,equals:Pr,rv:0,wv:0};return t}function pe(e,n){const t=cn(e);return no(t),t}function Ht(e,n=!1){var r;const t=cn(e);return n||(t.equals=Bt),Nn&&K!==null&&K.l!==null&&((r=K.l).s??(r.s=[])).push(t),t}function Y(e,n,t=!1){$!==null&&!Ae&&kn()&&($.f&(Re|qt))!==0&&!(le!=null&&le.includes(e))&&Es();let r=t?Pe(n):n;return Nt(e,r)}function Nt(e,n){if(!e.equals(n)){var t=e.v;An?Tn.set(e,n):Tn.set(e,t),e.v=n,(e.f&Re)!==0&&((e.f&Oe)!==0&&jr(e),Ee(e,(e.f&be)===0?ce:Xe)),e.wv=ro(),Ur(e,Oe),kn()&&j!==null&&(j.f&ce)!==0&&(j.f&(Be|dn))===0&&(we===null?Ks([e]):we.push(e))}return n}function gr(e,n=1){var t=E(e),r=n===1?t++:t--;return Y(e,t),r}function Ur(e,n){var t=e.reactions;if(t!==null)for(var r=kn(),o=t.length,s=0;s<o;s++){var a=t[s],c=a.f;(c&Oe)===0&&(!r&&a===j||(Ee(a,n),(c&(ce|be))!==0&&((c&Re)!==0?Ur(a,Xe):ut(a))))}}let Ls=!1;var pr,Hr,Gr,Kr;function Ps(){if(pr===void 0){pr=window,Hr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Gr=Ze(n,"firstChild").get,Kr=Ze(n,"nextSibling").get,vr(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),vr(t)&&(t.__t=void 0)}}function ot(e=""){return document.createTextNode(e)}function Ce(e){return Gr.call(e)}function st(e){return Kr.call(e)}function q(e,n){return Ce(e)}function an(e,n){{var t=Ce(e);return t instanceof Comment&&t.data===""?st(t):t}}function se(e,n=1,t=!1){let r=e;for(;n--;)r=st(r);return r}function zs(e){e.textContent=""}function Zr(e){j===null&&$===null&&gs(),$!==null&&($.f&be)!==0&&j===null&&ms(),An&&vs()}function qs(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function mn(e,n,t,r=!0){var o=j,s={ctx:K,deps:null,nodes_start:null,nodes_end:null,f:e|Oe,first:null,fn:n,last:null,next:null,parent:o,prev:null,teardown:null,transitions:null,wv:0};if(t)try{ct(s),s.f|=cs}catch(l){throw Ve(s),l}else n!==null&&ut(s);var a=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(Ir|Un))===0;if(!a&&r&&(o!==null&&qs(s,o),$!==null&&($.f&Re)!==0)){var c=$;(c.effects??(c.effects=[])).push(s)}return s}function Vs(e){const n=mn(tt,null,!1);return Ee(n,ce),n.teardown=e,n}function hr(e){Zr();var n=j!==null&&(j.f&Be)!==0&&K!==null&&!K.m;if(n){var t=K;(t.e??(t.e=[])).push({fn:e,effect:j,reaction:$})}else{var r=Gt(e);return r}}function Bs(e){return Zr(),it(e)}function js(e){const n=mn(dn,e,!0);return(t={})=>new Promise(r=>{t.outro?Gn(n,()=>{Ve(n),r(void 0)}):(Ve(n),r(void 0))})}function Gt(e){return mn(Or,e,!1)}function $s(e,n){var t=K,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=it(()=>{e(),!r.ran&&(r.ran=!0,Y(t.l.r2,!0),Fn(n))})}function Us(){var e=K;it(()=>{if(E(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&ce)!==0&&Ee(t,Xe),gn(t)&&ct(t),n.ran=!1}e.l.r2.v=!1}})}function it(e){return mn(tt,e,!0)}function he(e,n=[],t=ln){const r=n.map(t);return at(()=>e(...r.map(E)))}function at(e,n=0){return mn(tt|qt|n,e,!0)}function un(e,n=!0){return mn(tt|Be,e,!0,n)}function Wr(e){var n=e.teardown;if(n!==null){const t=An,r=$;br(!0),Ie(null);try{n.call(null)}finally{br(t),Ie(r)}}}function Xr(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&dn)!==0?t.parent=null:Ve(t,n),t=r}}function Hs(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&Be)===0&&Ve(n),n=t}}function Ve(e,n=!0){var t=!1;(n||(e.f&fs)!==0)&&e.nodes_start!==null&&(Jr(e.nodes_start,e.nodes_end),t=!0),Xr(e,n&&!t),Jn(e,0),Ee(e,rt);var r=e.transitions;if(r!==null)for(const s of r)s.stop();Wr(e);var o=e.parent;o!==null&&o.first!==null&&Yr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Jr(e,n){for(;e!==null;){var t=e===n?null:st(e);e.remove(),e=t}}function Yr(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function Gn(e,n){var t=[];Kt(e,t,!0),Qr(t,()=>{Ve(e),n&&n()})}function Qr(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var o of e)o.out(r)}else n()}function Kt(e,n,t){if((e.f&ze)===0){if(e.f^=ze,e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&n.push(a);for(var r=e.first;r!==null;){var o=r.next,s=(r.f&Vt)!==0||(r.f&Be)!==0;Kt(r,n,s?t:!1),r=o}}}function Kn(e){eo(e,!0)}function eo(e,n){if((e.f&ze)!==0){e.f^=ze,(e.f&ce)===0&&(e.f^=ce),gn(e)&&(Ee(e,Oe),ut(e));for(var t=e.first;t!==null;){var r=t.next,o=(t.f&Vt)!==0||(t.f&Be)!==0;eo(t,o?n:!1),t=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&s.in()}}let Zn=[];function Gs(){var e=Zn;Zn=[],Ft(e)}function Zt(e){Zn.length===0&&queueMicrotask(Gs),Zn.push(e)}let jn=!1,kt=!1,Wn=null,en=!1,An=!1;function br(e){An=e}let $n=[];let $=null,Ae=!1;function Ie(e){$=e}let j=null;function We(e){j=e}let le=null;function no(e){$!==null&&$.f&St&&(le===null?le=[e]:le.push(e))}let ae=null,ge=0,we=null;function Ks(e){we=e}let to=1,Xn=0,Ge=!1;function ro(){return++to}function gn(e){var _;var n=e.f;if((n&Oe)!==0)return!0;if((n&Xe)!==0){var t=e.deps,r=(n&be)!==0;if(t!==null){var o,s,a=(n&Hn)!==0,c=r&&j!==null&&!Ge,l=t.length;if(a||c){var u=e,v=u.parent;for(o=0;o<l;o++)s=t[o],(a||!((_=s==null?void 0:s.reactions)!=null&&_.includes(u)))&&(s.reactions??(s.reactions=[])).push(u);a&&(u.f^=Hn),c&&v!==null&&(v.f&be)===0&&(u.f^=be)}for(o=0;o<l;o++)if(s=t[o],gn(s)&&$r(s),s.wv>e.wv)return!0}(!r||j!==null&&!Ge)&&Ee(e,ce)}return!1}function Zs(e,n){for(var t=n;t!==null;){if((t.f&Un)!==0)try{t.fn(e);return}catch{t.f^=Un}t=t.parent}throw jn=!1,e}function yr(e){return(e.f&rt)===0&&(e.parent===null||(e.parent.f&Un)===0)}function lt(e,n,t,r){if(jn){if(t===null&&(jn=!1),yr(n))throw e;return}if(t!==null&&(jn=!0),Zs(e,n),yr(n))throw e}function oo(e,n,t=!0){var r=e.reactions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];le!=null&&le.includes(e)||((s.f&Re)!==0?oo(s,n,!1):n===s&&(t?Ee(s,Oe):(s.f&ce)!==0&&Ee(s,Xe),ut(s)))}}function so(e){var h;var n=ae,t=ge,r=we,o=$,s=Ge,a=le,c=K,l=Ae,u=e.f;ae=null,ge=0,we=null,Ge=(u&be)!==0&&(Ae||!en||$===null),$=(u&(Be|dn))===0?e:null,le=null,mr(e.ctx),Ae=!1,Xn++,e.f|=St;try{var v=(0,e.fn)(),_=e.deps;if(ae!==null){var f;if(Jn(e,ge),_!==null&&ge>0)for(_.length=ge+ae.length,f=0;f<ae.length;f++)_[ge+f]=ae[f];else e.deps=_=ae;if(!Ge)for(f=ge;f<_.length;f++)((h=_[f]).reactions??(h.reactions=[])).push(e)}else _!==null&&ge<_.length&&(Jn(e,ge),_.length=ge);if(kn()&&we!==null&&!Ae&&_!==null&&(e.f&(Re|Xe|Oe))===0)for(f=0;f<we.length;f++)oo(we[f],e);return o!==null&&o!==e&&(Xn++,we!==null&&(r===null?r=we:r.push(...we))),v}finally{ae=n,ge=t,we=r,$=o,Ge=s,le=a,mr(c),Ae=l,e.f^=St}}function Ws(e,n){let t=n.reactions;if(t!==null){var r=os.call(t,e);if(r!==-1){var o=t.length-1;o===0?t=n.reactions=null:(t[r]=t[o],t.pop())}}t===null&&(n.f&Re)!==0&&(ae===null||!ae.includes(n))&&(Ee(n,Xe),(n.f&(be|Hn))===0&&(n.f^=Hn),Br(n),Jn(n,0))}function Jn(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Ws(e,t[r])}function ct(e){var n=e.f;if((n&rt)===0){Ee(e,ce);var t=j,r=K,o=en;j=e,en=!0;try{(n&qt)!==0?Hs(e):Xr(e),Wr(e);var s=so(e);e.teardown=typeof s=="function"?s:null,e.wv=to;var a=e.deps,c;_r&&Ds&&e.f&Oe}catch(l){lt(l,e,t,r||e.ctx)}finally{en=o,j=t}}}function Xs(){try{ps()}catch(e){if(Wn!==null)lt(e,Wn,null);else throw e}}function Js(){var e=en;try{var n=0;for(en=!0;$n.length>0;){n++>1e3&&Xs();var t=$n,r=t.length;$n=[];for(var o=0;o<r;o++){var s=Qs(t[o]);Ys(s)}Tn.clear()}}finally{kt=!1,en=e,Wn=null}}function Ys(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(rt|ze))===0)try{gn(r)&&(ct(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Yr(r):r.fn=null))}catch(o){lt(o,r,null,r.ctx)}}}function ut(e){kt||(kt=!0,queueMicrotask(Js));for(var n=Wn=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(dn|Be))!==0){if((t&ce)===0)return;n.f^=ce}}$n.push(n)}function Qs(e){for(var n=[],t=e;t!==null;){var r=t.f,o=(r&(Be|dn))!==0,s=o&&(r&ce)!==0;if(!s&&(r&ze)===0){if((r&Or)!==0)n.push(t);else if(o)t.f^=ce;else try{gn(t)&&ct(t)}catch(l){lt(l,t,null,t.ctx)}var a=t.first;if(a!==null){t=a;continue}}var c=t.parent;for(t=t.next;t===null&&c!==null;)t=c.next,c=c.parent}return n}function E(e){var n=e.f,t=(n&Re)!==0;if($!==null&&!Ae){if(!(le!=null&&le.includes(e))){var r=$.deps;e.rv<Xn&&(e.rv=Xn,ae===null&&r!==null&&r[ge]===e?ge++:ae===null?ae=[e]:(!Ge||!ae.includes(e))&&ae.push(e))}}else if(t&&e.deps===null&&e.effects===null){var o=e,s=o.parent;s!==null&&(s.f&be)===0&&(o.f^=be)}return t&&(o=e,gn(o)&&$r(o)),An&&Tn.has(e)?Tn.get(e):e.v}function Fn(e){var n=Ae;try{return Ae=!0,e()}finally{Ae=n}}const ei=-7169;function Ee(e,n){e.f=e.f&ei|n}function At(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Qe in e)Ct(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&Qe in t&&Ct(t)}}}function Ct(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{Ct(e[r],n)}catch{}const t=zt(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=Cr(t);for(let o in r){const s=r[o].get;if(s)try{s.call(e)}catch{}}}}}function ni(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ti=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ri(e){return ti.includes(e)}const oi={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function si(e){return e=e.toLowerCase(),oi[e]??e}const ii=["touchstart","touchmove"];function ai(e){return ii.includes(e)}function li(e,n){if(n){const t=document.body;e.autofocus=!0,Zt(()=>{document.activeElement===t&&e.focus()})}}let wr=!1;function ci(){wr||(wr=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var n;if(!e.defaultPrevented)for(const t of e.target.elements)(n=t.__on_r)==null||n.call(t)})},{capture:!0}))}function io(e){var n=$,t=j;Ie(null),We(null);try{return e()}finally{Ie(n),We(t)}}function ui(e,n,t,r=t){e.addEventListener(n,()=>io(t));const o=e.__on_r;o?e.__on_r=()=>{o(),r(!0)}:e.__on_r=()=>r(!0),ci()}const ao=new Set,Ot=new Set;function fi(e,n,t,r={}){function o(s){if(r.capture||Dn.call(n,s),!s.cancelBubble)return io(()=>t==null?void 0:t.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Zt(()=>{n.addEventListener(e,o,r)}):n.addEventListener(e,o,r),o}function ft(e){for(var n=0;n<e.length;n++)ao.add(e[n]);for(var t of Ot)t(e)}function Dn(e){var V;var n=this,t=n.ownerDocument,r=e.type,o=((V=e.composedPath)==null?void 0:V.call(e))||[],s=o[0]||e.target,a=0,c=e.__root;if(c){var l=o.indexOf(c);if(l!==-1&&(n===document||n===window)){e.__root=n;return}var u=o.indexOf(n);if(u===-1)return;l<=u&&(a=l)}if(s=o[a]||e.target,s!==n){ss(e,"currentTarget",{configurable:!0,get(){return s||t}});var v=$,_=j;Ie(null),We(null);try{for(var f,h=[];s!==null;){var b=s.assignedSlot||s.parentNode||s.host||null;try{var N=s["__"+r];if(N!=null&&(!s.disabled||e.target===s))if(nt(N)){var[T,...L]=N;T.apply(s,[e,...L])}else N.call(s,e)}catch(x){f?h.push(x):f=x}if(e.cancelBubble||b===n||b===null)break;s=b}if(f){for(let x of h)queueMicrotask(()=>{throw x});throw f}}finally{e.__root=n,delete e.currentTarget,Ie(v),We(_)}}}function Wt(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function fn(e,n){var t=j;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function ue(e,n){var t=(n&ks)!==0,r=(n&As)!==0,o,s=!e.startsWith("<!>");return()=>{o===void 0&&(o=Wt(s?e:"<!>"+e),t||(o=Ce(o)));var a=r||Hr?document.importNode(o,!0):o.cloneNode(!0);if(t){var c=Ce(a),l=a.lastChild;fn(c,l)}else fn(a,a);return a}}function dt(e,n,t="svg"){var r=!e.startsWith("<!>"),o=`<${t}>${r?e:"<!>"+e}</${t}>`,s;return()=>{if(!s){var a=Wt(o),c=Ce(a);s=Ce(c)}var l=s.cloneNode(!0);return fn(l,l),l}}function It(e=""){{var n=ot(e+"");return fn(n,n),n}}function Yn(){var e=document.createDocumentFragment(),n=document.createComment(""),t=ot();return e.append(n,t),fn(n,t),e}function G(e,n){e!==null&&e.before(n)}function qe(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function di(e,n){return _i(e,n)}const on=new Map;function _i(e,{target:n,anchor:t,props:r={},events:o,context:s,intro:a=!0}){Ps();var c=new Set,l=_=>{for(var f=0;f<_.length;f++){var h=_[f];if(!c.has(h)){c.add(h);var b=ai(h);n.addEventListener(h,Dn,{passive:b});var N=on.get(h);N===void 0?(document.addEventListener(h,Dn,{passive:b}),on.set(h,1)):on.set(h,N+1)}}};l(Pt(ao)),Ot.add(l);var u=void 0,v=js(()=>{var _=t??n.appendChild(ot());return un(()=>{if(s){_n({});var f=K;f.c=s}o&&(r.$$events=o),u=e(_,r)||{},s&&vn()}),()=>{var b;for(var f of c){n.removeEventListener(f,Dn);var h=on.get(f);--h===0?(document.removeEventListener(f,Dn),on.delete(f)):on.set(f,h)}Ot.delete(l),_!==t&&((b=_.parentNode)==null||b.removeChild(_))}});return vi.set(u,v),u}let vi=new WeakMap;function Ue(e,n,[t,r]=[0,0]){var o=e,s=null,a=null,c=_e,l=t>0?Vt:0,u=!1;const v=(f,h=!0)=>{u=!0,_(h,f)},_=(f,h)=>{c!==(c=f)&&(c?(s?Kn(s):h&&(s=un(()=>h(o))),a&&Gn(a,()=>{a=null})):(a?Kn(a):h&&(a=un(()=>h(o,[t+1,r]))),s&&Gn(s,()=>{s=null})))};at(()=>{u=!1,n(v),u||_(null,null)},l)}function Rn(e,n){return n}function mi(e,n,t,r){for(var o=[],s=n.length,a=0;a<s;a++)Kt(n[a].e,o,!0);var c=s>0&&o.length===0&&t!==null;if(c){var l=t.parentNode;zs(l),l.append(t),r.clear(),He(e,n[0].prev,n[s-1].next)}Qr(o,()=>{for(var u=0;u<s;u++){var v=n[u];c||(r.delete(v.k),He(e,v.prev,v.next)),Ve(v.e,!c)}})}function Mn(e,n,t,r,o,s=null){var a=e,c={flags:n,items:new Map,first:null},l=(n&zr)!==0;if(l){var u=e;a=u.appendChild(ot())}var v=null,_=!1,f=Ut(()=>{var h=t();return nt(h)?h:h==null?[]:Pt(h)});at(()=>{var h=E(f),b=h.length;_&&b===0||(_=b===0,gi(h,c,a,o,n,r,t),s!==null&&(b===0?v?Kn(v):v=un(()=>s(a)):v!==null&&Gn(v,()=>{v=null})),E(f))})}function gi(e,n,t,r,o,s,a){var ye,Me,ve,Te;var c=(o&Rs)!==0,l=(o&(jt|$t))!==0,u=e.length,v=n.items,_=n.first,f=_,h,b=null,N,T=[],L=[],V,x,g,y;if(c)for(y=0;y<u;y+=1)V=e[y],x=s(V,y),g=v.get(x),g!==void 0&&((ye=g.a)==null||ye.measure(),(N??(N=new Set)).add(g));for(y=0;y<u;y+=1){if(V=e[y],x=s(V,y),g=v.get(x),g===void 0){var z=f?f.e.nodes_start:t;b=hi(z,n,b,b===null?n.first:b.next,V,x,y,r,o,a),v.set(x,b),T=[],L=[],f=b.next;continue}if(l&&pi(g,V,y,o),(g.e.f&ze)!==0&&(Kn(g.e),c&&((Me=g.a)==null||Me.unfix(),(N??(N=new Set)).delete(g))),g!==f){if(h!==void 0&&h.has(g)){if(T.length<L.length){var M=L[0],O;b=M.prev;var Z=T[0],fe=T[T.length-1];for(O=0;O<T.length;O+=1)Er(T[O],M,t);for(O=0;O<L.length;O+=1)h.delete(L[O]);He(n,Z.prev,fe.next),He(n,b,Z),He(n,fe,M),f=M,b=fe,y-=1,T=[],L=[]}else h.delete(g),Er(g,f,t),He(n,g.prev,g.next),He(n,g,b===null?n.first:b.next),He(n,b,g),b=g;continue}for(T=[],L=[];f!==null&&f.k!==x;)(f.e.f&ze)===0&&(h??(h=new Set)).add(f),L.push(f),f=f.next;if(f===null)continue;g=f}T.push(g),b=g,f=g.next}if(f!==null||h!==void 0){for(var ee=h===void 0?[]:Pt(h);f!==null;)(f.e.f&ze)===0&&ee.push(f),f=f.next;var ne=ee.length;if(ne>0){var de=(o&zr)!==0&&u===0?t:null;if(c){for(y=0;y<ne;y+=1)(ve=ee[y].a)==null||ve.measure();for(y=0;y<ne;y+=1)(Te=ee[y].a)==null||Te.fix()}mi(n,ee,de,v)}}c&&Zt(()=>{var De;if(N!==void 0)for(g of N)(De=g.a)==null||De.apply()}),j.first=n.first&&n.first.e,j.last=b&&b.e}function pi(e,n,t,r){(r&jt)!==0&&Nt(e.v,n),(r&$t)!==0?Nt(e.i,t):e.i=t}function hi(e,n,t,r,o,s,a,c,l,u){var v=(l&jt)!==0,_=(l&Ms)===0,f=v?_?Ht(o):cn(o):o,h=(l&$t)===0?a:cn(a),b={i:h,v:f,k:s,a:null,e:null,prev:t,next:r};try{return b.e=un(()=>c(e,f,h,u),Ls),b.e.prev=t&&t.e,b.e.next=r&&r.e,t===null?n.first=b:(t.next=b,t.e.next=b.e),r!==null&&(r.prev=b,r.e.prev=b.e),b}finally{}}function Er(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,o=n?n.e.nodes_start:t,s=e.e.nodes_start;s!==r;){var a=st(s);o.before(s),s=a}}function He(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function bi(e,n,t=!1,r=!1,o=!1){var s=e,a="";he(()=>{var c=j;if(a!==(a=n()??"")&&(c.nodes_start!==null&&(Jr(c.nodes_start,c.nodes_end),c.nodes_start=c.nodes_end=null),a!=="")){var l=a+"";t?l=`<svg>${l}</svg>`:r&&(l=`<math>${l}</math>`);var u=Wt(l);if((t||r)&&(u=Ce(u)),fn(Ce(u),u.lastChild),t||r)for(;Ce(u);)s.before(Ce(u));else s.before(u)}})}function yi(e,n,t,r,o){var c;var s=(c=n.$$slots)==null?void 0:c[t],a=!1;s===!0&&(s=n.children,a=!0),s===void 0?o!==null&&o(e):s(e,a?()=>r:r)}function wi(e,n){var t=void 0,r;at(()=>{t!==(t=n())&&(r&&(Ve(r),r=null),t&&(r=un(()=>{Gt(()=>t(e))})))})}function lo(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(n=0;n<o;n++)e[n]&&(t=lo(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Ei(){for(var e,n,t=0,r="",o=arguments.length;t<o;t++)(e=arguments[t])&&(n=lo(e))&&(r&&(r+=" "),r+=n);return r}function co(e){return typeof e=="object"?Ei(e):e??""}const Dr=[...` 	
\r\f \v\uFEFF`];function Di(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var o in t)if(t[o])r=r?r+" "+o:o;else if(r.length)for(var s=o.length,a=0;(a=r.indexOf(o,a))>=0;){var c=a+s;(a===0||Dr.includes(r[a-1]))&&(c===r.length||Dr.includes(r[c]))?r=(a===0?"":r.substring(0,a))+r.substring(c+1):a=c}}return r===""?null:r}function xr(e,n=!1){var t=n?" !important;":";",r="";for(var o in e){var s=e[o];s!=null&&s!==""&&(r+=" "+o+": "+s+t)}return r}function Dt(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function xi(e,n){if(n){var t="",r,o;if(Array.isArray(n)?(r=n[0],o=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,a=0,c=!1,l=[];r&&l.push(...Object.keys(r).map(Dt)),o&&l.push(...Object.keys(o).map(Dt));var u=0,v=-1;const N=e.length;for(var _=0;_<N;_++){var f=e[_];if(c?f==="/"&&e[_-1]==="*"&&(c=!1):s?s===f&&(s=!1):f==="/"&&e[_+1]==="*"?c=!0:f==='"'||f==="'"?s=f:f==="("?a++:f===")"&&a--,!c&&s===!1&&a===0){if(f===":"&&v===-1)v=_;else if(f===";"||_===N-1){if(v!==-1){var h=Dt(e.substring(u,v).trim());if(!l.includes(h)){f!==";"&&_++;var b=e.substring(u,_).trim();t+=" "+b+";"}}u=_+1,v=-1}}}}return r&&(t+=xr(r)),o&&(t+=xr(o,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Sn(e,n,t,r,o,s){var a=e.__className;if(a!==t||a===void 0){var c=Di(t,r,s);c==null?e.removeAttribute("class"):n?e.className=c:e.setAttribute("class",c),e.__className=t}else if(s&&o!==s)for(var l in s){var u=!!s[l];(o==null||u!==!!o[l])&&e.classList.toggle(l,u)}return s}function xt(e,n={},t,r){for(var o in t){var s=t[o];n[o]!==s&&(t[o]==null?e.style.removeProperty(o):e.style.setProperty(o,s,r))}}function Xt(e,n,t,r){var o=e.__style;if(o!==n){var s=xi(n,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=n}else r&&(Array.isArray(r)?(xt(e,t==null?void 0:t[0],r[0]),xt(e,t==null?void 0:t[1],r[1],"important")):xt(e,t,r));return r}const xn=Symbol("class"),En=Symbol("style"),uo=Symbol("is custom element"),fo=Symbol("is html");function Ri(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Qn(e,n,t,r){var o=_o(e);o[n]!==(o[n]=t)&&(n==="loading"&&(e[ds]=t),t==null?e.removeAttribute(n):typeof t!="string"&&vo(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function Mi(e,n,t,r,o=!1){var s=_o(e),a=s[uo],c=!s[fo],l=n||{},u=e.tagName==="OPTION";for(var v in n)v in t||(t[v]=null);t.class?t.class=co(t.class):t.class=null,t[En]&&(t.style??(t.style=null));var _=vo(e);for(const x in t){let g=t[x];if(u&&x==="value"&&g==null){e.value=e.__value="",l[x]=g;continue}if(x==="class"){var f=e.namespaceURI==="http://www.w3.org/1999/xhtml";Sn(e,f,g,r,n==null?void 0:n[xn],t[xn]),l[x]=g,l[xn]=t[xn];continue}if(x==="style"){Xt(e,g,n==null?void 0:n[En],t[En]),l[x]=g,l[En]=t[En];continue}var h=l[x];if(g!==h){l[x]=g;var b=x[0]+x[1];if(b!=="$$")if(b==="on"){const y={},z="$$"+x;let M=x.slice(2);var N=ri(M);if(ni(M)&&(M=M.slice(0,-7),y.capture=!0),!N&&h){if(g!=null)continue;e.removeEventListener(M,l[z],y),l[z]=null}if(g!=null)if(N)e[`__${M}`]=g,ft([M]);else{let O=function(Z){l[x].call(this,Z)};var V=O;l[z]=fi(M,e,O,y)}else N&&(e[`__${M}`]=void 0)}else if(x==="style")Qn(e,x,g);else if(x==="autofocus")li(e,!!g);else if(!a&&(x==="__value"||x==="value"&&g!=null))e.value=e.__value=g;else if(x==="selected"&&u)Ri(e,g);else{var T=x;c||(T=si(T));var L=T==="defaultValue"||T==="defaultChecked";if(g==null&&!a&&!L)if(s[x]=null,T==="value"||T==="checked"){let y=e;const z=n===void 0;if(T==="value"){let M=y.defaultValue;y.removeAttribute(T),y.defaultValue=M,y.value=y.__value=z?M:null}else{let M=y.defaultChecked;y.removeAttribute(T),y.defaultChecked=M,y.checked=z?M:!1}}else e.removeAttribute(x);else L||_.includes(T)&&(a||typeof g!="string")?e[T]=g:typeof g!="function"&&Qn(e,T,g)}}}for(let x of Object.getOwnPropertySymbols(t))x.description===Os&&wi(e,()=>t[x]);return l}function _o(e){return e.__attributes??(e.__attributes={[uo]:e.nodeName.includes("-"),[fo]:e.namespaceURI===Cs})}var Rr=new Map;function vo(e){var n=Rr.get(e.nodeName);if(n)return n;Rr.set(e.nodeName,n=[]);for(var t,r=e,o=Element.prototype;o!==r;){t=Cr(r);for(var s in t)t[s].set&&n.push(s);r=zt(r)}return n}function Ti(e,n,t=n){var r=kn();ui(e,"input",o=>{var s=o?e.defaultValue:e.value;if(s=Rt(e)?Mt(s):s,t(s),r&&s!==(s=n())){var a=e.selectionStart,c=e.selectionEnd;e.value=s??"",c!==null&&(e.selectionStart=a,e.selectionEnd=Math.min(c,e.value.length))}}),Fn(n)==null&&e.value&&t(Rt(e)?Mt(e.value):e.value),it(()=>{var o=n();Rt(e)&&o===Mt(e.value)||e.type==="date"&&!o&&!e.value||o!==e.value&&(e.value=o??"")})}function Rt(e){var n=e.type;return n==="number"||n==="range"}function Mt(e){return e===""?null:+e}function mo(e=!1){const n=K,t=n.l.u;if(!t)return;let r=()=>At(n.s);if(e){let o=0,s={};const a=ln(()=>{let c=!1;const l=n.s;for(const u in l)l[u]!==s[u]&&(s[u]=l[u],c=!0);return c&&o++,o});r=()=>E(a)}t.b.length&&Bs(()=>{Mr(n,r),Ft(t.b)}),hr(()=>{const o=Fn(()=>t.m.map(ls));return()=>{for(const s of o)typeof s=="function"&&s()}}),t.a.length&&hr(()=>{Mr(n,r),Ft(t.a)})}function Mr(e,n){if(e.l.s)for(const t of e.l.s)E(t);n()}let Bn=!1;function Fi(e){var n=Bn;try{return Bn=!1,[e(),Bn]}finally{Bn=n}}const Si={get(e,n){if(!e.exclude.includes(n))return E(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=Ke({get[n](){return e.props[n]}},n,qr)),e.special[n](t),gr(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),gr(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function et(e,n){return new Proxy({props:e,exclude:n,special:{},version:cn(0)},Si)}const Ni={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(wn(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let o=e.props[r];wn(o)&&(o=o());const s=Ze(o,n);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(wn(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const o=Ze(r,n);return o&&!o.configurable&&(o.configurable=!0),o}}},has(e,n){if(n===Qe||n===Lr)return!1;for(let t of e.props)if(wn(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(wn(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function ki(...e){return new Proxy({props:e},Ni)}function Tr(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function Ke(e,n,t,r){var z;var o=(t&Ts)!==0,s=!Nn||(t&Fs)!==0,a=(t&Ss)!==0,c=(t&Ns)!==0,l=!1,u;a?[u,l]=Fi(()=>e[n]):u=e[n];var v=Qe in e||Lr in e,_=a&&(((z=Ze(e,n))==null?void 0:z.set)??(v&&n in e&&(M=>e[n]=M)))||void 0,f=r,h=!0,b=!1,N=()=>(b=!0,h&&(h=!1,c?f=Fn(r):f=r),f);u===void 0&&r!==void 0&&(_&&s&&bs(),u=N(),_&&_(u));var T;if(s)T=()=>{var M=e[n];return M===void 0?N():(h=!0,b=!1,M)};else{var L=(o?ln:Ut)(()=>e[n]);L.f|=us,T=()=>{var M=E(L);return M!==void 0&&(f=void 0),M===void 0?f:M}}if((t&qr)===0)return T;if(_){var V=e.$$legacy;return function(M,O){return arguments.length>0?((!s||!O||V||l)&&_(O?T():M),M):T()}}var x=!1,g=Ht(u),y=ln(()=>{var M=T(),O=E(g);return x?(x=!1,O):g.v=M});return a&&E(y),o||(y.equals=Bt),function(M,O){if(arguments.length>0){const Z=O?E(y):s&&a?Pe(M):M;if(!y.equals(Z)){if(x=!0,Y(g,Z),b&&f!==void 0&&(f=Z),Tr(y))return M;Fn(()=>E(y))}return M}return Tr(y)?y.v:E(y)}}function Ai(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function Ci(){const e=K;return e===null&&Vr(),(n,t,r)=>{var s;const o=(s=e.s.$$events)==null?void 0:s[n];if(o){const a=nt(o)?o.slice():[o],c=Ai(n,t,r);for(const l of a)l.call(e.x,c);return!c.defaultPrevented}return!0}}function Oi(e){K===null&&Vr(),K.l===null&&hs(),Ii(K).a.push(e)}function Ii(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Li="5";var Ar;typeof window<"u"&&((Ar=window.__svelte??(window.__svelte={})).v??(Ar.v=new Set)).add(Li);const Pi={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:"wrong",FiniteDifferences:92.05199378560332,ForwardDiff:2.293677489407405,MooncakeFwd:27.18689429211933,MooncakeRvs:7.312564129780986,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:793.336147270599},zi={__category__:"Distributions",EnzymeFwd:3.0288875375169195,EnzymeRvs:1.1946386830367044,FiniteDifferences:57.22945908935296,ForwardDiff:2.173711867413103,MooncakeFwd:5.351388162147188,MooncakeRvs:3.3525221169873656,ReverseDiff:70.49920336282584,ReverseDiffCompiled:5.601961986511343,Zygote:3435.535217525033},qi={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:"error",FiniteDifferences:61.27383836713566,ForwardDiff:1.1650714696598363,MooncakeFwd:353.92802705307207,MooncakeRvs:12.066344101635382,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Vi={__category__:"DynamicPPL demo models",EnzymeFwd:4.505501099430349,EnzymeRvs:1.7110482025838882,FiniteDifferences:98.87323240913987,ForwardDiff:3.1183035720478345,MooncakeFwd:10.881226053639846,MooncakeRvs:5.839563243266181,ReverseDiff:198.09273448724088,ReverseDiffCompiled:18.504860744883032,Zygote:"error"},Bi={__category__:"DynamicPPL demo models",EnzymeFwd:3.4097018258951617,EnzymeRvs:1.3895575584010385,FiniteDifferences:76.79127641589182,ForwardDiff:4.120952754875016,MooncakeFwd:9.401655098439068,MooncakeRvs:5.475793981206138,ReverseDiff:138.33872916163324,ReverseDiffCompiled:12.64978585748132,Zygote:8689.209192733233},ji={__category__:"DynamicPPL demo models",EnzymeFwd:7.0173439048562924,EnzymeRvs:17.360669954089442,FiniteDifferences:92.56221863871531,ForwardDiff:1.6678310195551576,MooncakeFwd:14.559661303979677,MooncakeRvs:4.419205191867445,ReverseDiff:88.31142382349822,ReverseDiffCompiled:8.628115089306457,Zygote:"error"},$i={__category__:"DynamicPPL demo models",EnzymeFwd:9.55373916115604,EnzymeRvs:17.687833022229764,FiniteDifferences:82.61110922371326,ForwardDiff:1.4649911756333618,MooncakeFwd:15.924468448759143,MooncakeRvs:6.691037334694052,ReverseDiff:61.04368163995322,ReverseDiffCompiled:5.964085490034552,Zygote:"error"},Ui={__category__:"DynamicPPL demo models",EnzymeFwd:11.24254129197095,EnzymeRvs:19.171408361565096,FiniteDifferences:88.81401465997965,ForwardDiff:1.456915427424505,MooncakeFwd:16.164809197996753,MooncakeRvs:6.15025206227659,ReverseDiff:68.16198860693942,ReverseDiffCompiled:6.987625035724492,Zygote:"error"},Hi={__category__:"DynamicPPL demo models",EnzymeFwd:7.219568488931515,EnzymeRvs:18.17184216670558,FiniteDifferences:84.91158900836321,ForwardDiff:1.4790027612574341,MooncakeFwd:15.631461131461133,MooncakeRvs:6.021088498222645,ReverseDiff:66.96414929973865,ReverseDiffCompiled:6.37806265853157,Zygote:"error"},Gi={__category__:"DynamicPPL demo models",EnzymeFwd:4.37196929402667,EnzymeRvs:1.5161845143096209,FiniteDifferences:105.52432099610043,ForwardDiff:1.9661113731088364,MooncakeFwd:10.887968002219498,MooncakeRvs:5.825599425916075,ReverseDiff:199.82479276563677,ReverseDiffCompiled:19.84550744480575,Zygote:11604.614945054946},Ki={__category__:"DynamicPPL demo models",EnzymeFwd:7.31173225611341,EnzymeRvs:10.402001020929045,FiniteDifferences:84.90001058835986,ForwardDiff:1.386400239244195,MooncakeFwd:14.798632244828179,MooncakeRvs:5.55788993441688,ReverseDiff:78.6380766731644,ReverseDiffCompiled:7.722227067634198,Zygote:"error"},Zi={__category__:"DynamicPPL demo models",EnzymeFwd:9.710720887245841,EnzymeRvs:15.542709104367136,FiniteDifferences:82.20030756026034,ForwardDiff:1.3909193542662097,MooncakeFwd:15.564192807957152,MooncakeRvs:6.042310767590618,ReverseDiff:64.89792652379627,ReverseDiffCompiled:6.522962978593208,Zygote:"error"},Wi={__category__:"Distributions",EnzymeFwd:6.128987493575466,EnzymeRvs:9.839461409434525,FiniteDifferences:27.860252279426884,ForwardDiff:1.231040989039963,MooncakeFwd:4.286971496131802,MooncakeRvs:6.051246092639954,ReverseDiff:23.582545458667756,ReverseDiffCompiled:3.724573299041384,Zygote:"error"},Xi={__category__:"DynamicPPL demo models",EnzymeFwd:7.015280823073031,EnzymeRvs:12.748112384562164,FiniteDifferences:84.70985165180718,ForwardDiff:1.7957897553785138,MooncakeFwd:13.717625231910947,MooncakeRvs:5.2572976539844065,ReverseDiff:75.108125819135,ReverseDiffCompiled:7.402859291129723,Zygote:"error"},Ji={__category__:"DynamicPPL demo models",EnzymeFwd:7.226677645121449,EnzymeRvs:8.739810280793888,FiniteDifferences:87.71845087096229,ForwardDiff:1.4526569220104502,MooncakeFwd:14.350025594581822,MooncakeRvs:5.416393993846332,ReverseDiff:78.61391710129016,ReverseDiffCompiled:8.11272184266515,Zygote:"error"},Yi={__category__:"DynamicPPL demo models",EnzymeFwd:8.531801670484256,EnzymeRvs:15.378903903903904,FiniteDifferences:79.90429422212935,ForwardDiff:1.4019211752193894,MooncakeFwd:15.545136058168998,MooncakeRvs:6.761707233572978,ReverseDiff:72.39054946551373,ReverseDiffCompiled:5.755878084179971,Zygote:"error"},Qi={__category__:"DynamicPPL demo models",EnzymeFwd:9.35042842641217,EnzymeRvs:16.492298626201613,FiniteDifferences:82.3058725876738,ForwardDiff:1.393725012829234,MooncakeFwd:15.830838591710885,MooncakeRvs:6.072427862884507,ReverseDiff:66.39904713289093,ReverseDiffCompiled:6.664504579843461,Zygote:"error"},ea={__category__:"Core Turing syntax",EnzymeFwd:3.0615313521967864,EnzymeRvs:1.0736302786871905,FiniteDifferences:175.81806668035875,ForwardDiff:2.192228883431741,MooncakeFwd:24.101218682985515,MooncakeRvs:5.255989475141948,ReverseDiff:122.57808322478918,ReverseDiffCompiled:10.281457669773111,Zygote:"error"},na={__category__:"Core Turing syntax",EnzymeFwd:18.096714290494194,EnzymeRvs:3.5644266975056174,FiniteDifferences:247.06856858678117,ForwardDiff:7.377318451073498,MooncakeFwd:22.851727152849442,MooncakeRvs:21.89935470627086,ReverseDiff:943.0888451587041,ReverseDiffCompiled:77.85858549210265,Zygote:"error"},ta={__category__:"DynamicPPL arXiV paper",EnzymeFwd:7.340985983566941,EnzymeRvs:4.69266507109672,FiniteDifferences:21.10421032577634,ForwardDiff:2.2355401702004905,MooncakeFwd:6.242724097788126,MooncakeRvs:44.74501042597557,ReverseDiff:1174.089276463478,ReverseDiffCompiled:122.80353804113334,Zygote:"error"},ra={__category__:"DynamicPPL arXiV paper",EnzymeFwd:7.138088120150901,EnzymeRvs:3.069174956914332,FiniteDifferences:179.99003802688662,ForwardDiff:5.287157080438363,MooncakeFwd:27.09506247985964,MooncakeRvs:5.022407653850305,ReverseDiff:67.63661942476031,ReverseDiffCompiled:5.69055836239,Zygote:"error"},oa={__category__:"DynamicPPL arXiV paper",EnzymeFwd:54522.320955273324,EnzymeRvs:6.423302724672587,FiniteDifferences:127448.71967775623,ForwardDiff:14289.159630016411,MooncakeFwd:32731.144261092777,MooncakeRvs:4.7110119225930145,ReverseDiff:551.6505553887721,ReverseDiffCompiled:93.43536206130608,Zygote:"error"},sa={__category__:"DynamicPPL arXiV paper",EnzymeFwd:62.13815796710851,EnzymeRvs:10.868082841835623,FiniteDifferences:"NaN",ForwardDiff:26.524162145788008,MooncakeFwd:4392.983174943406,MooncakeRvs:5.849946925509679,ReverseDiff:67.62275127343308,ReverseDiffCompiled:10.046438627303392,Zygote:"error"},ia={__category__:"Distributions",EnzymeFwd:4.526207193890121,EnzymeRvs:18.89977598796149,FiniteDifferences:173.4876712328767,ForwardDiff:2.4400752265344505,MooncakeFwd:22.44838976052849,MooncakeRvs:4.976291278577476,ReverseDiff:63.68988391376451,ReverseDiffCompiled:7.375366051582401,Zygote:"error"},aa={__category__:"DynamicPPL arXiV paper",EnzymeFwd:322.94660337567234,EnzymeRvs:1.4449245916532136,FiniteDifferences:7040.7342926989095,ForwardDiff:67.34289472744372,MooncakeFwd:422.72025650108975,MooncakeRvs:9.560450748225318,ReverseDiff:75.20323902681349,ReverseDiffCompiled:9.805133185511943,Zygote:"error"},la={__category__:"DynamicPPL arXiV paper",EnzymeFwd:44.863449394588955,EnzymeRvs:3.3888159594266165,FiniteDifferences:1226.2699935877777,ForwardDiff:57.705204823713515,MooncakeFwd:150.22748309127817,MooncakeRvs:4.357579158155037,ReverseDiff:65.22218903878093,ReverseDiffCompiled:9.968594411054418,Zygote:10763.59261230182},ca={__category__:"DynamicPPL arXiV paper",EnzymeFwd:154.39517796658325,EnzymeRvs:.9793599834109309,FiniteDifferences:2714.524076006733,ForwardDiff:130.77282993086942,MooncakeFwd:374.28499551664953,MooncakeRvs:4.1611707102382125,ReverseDiff:134.0634947917619,ReverseDiffCompiled:20.00817314671069,Zygote:"error"},ua={__category__:"DynamicPPL arXiV paper",EnzymeFwd:92.62941891294741,EnzymeRvs:4.581584180291648,FiniteDifferences:6721.631680867545,ForwardDiff:212.96489197530863,MooncakeFwd:1257.5284705363053,MooncakeRvs:4.693298406461471,ReverseDiff:225.40004946685718,ReverseDiffCompiled:20.270739023725117,Zygote:"error"},fa={__category__:"Core Turing syntax",EnzymeFwd:3.4532244342351537,EnzymeRvs:2.219181923765005,FiniteDifferences:77.40777082275983,ForwardDiff:1.5554421794274318,MooncakeFwd:8.998624400160283,MooncakeRvs:4.257199728951381,ReverseDiff:101.62593159775396,ReverseDiffCompiled:10.225861002268509,Zygote:6273.832523364486},da={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:20.26096997690531,FiniteDifferences:261.22547551534075,ForwardDiff:3.795990865262624,MooncakeFwd:51.92987596444965,MooncakeRvs:41.06598323012651,ReverseDiff:91.62931034482757,ReverseDiffCompiled:25.839586978255436,Zygote:"error"},_a={__category__:"Core Turing syntax",EnzymeFwd:3.338567819308921,EnzymeRvs:3.4531657479146536,FiniteDifferences:64.4977514309076,ForwardDiff:1.120489600385456,MooncakeFwd:9.338139357346103,MooncakeRvs:3.385805127107103,ReverseDiff:25.27879820627803,ReverseDiffCompiled:2.582595352915388,Zygote:"error"},va={__category__:"Base Julia features",EnzymeFwd:4.798426832888097,EnzymeRvs:"wrong",FiniteDifferences:11.077171463748925,ForwardDiff:.9902264524577598,MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ma={__category__:"Effect of model size",EnzymeFwd:2.63097281586596,EnzymeRvs:.8006001274727672,FiniteDifferences:201.62007620367166,ForwardDiff:3.9219834151294637,MooncakeFwd:38.68095967330271,MooncakeRvs:5.188435005994178,ReverseDiff:128.30234709611102,ReverseDiffCompiled:11.69487324806617,Zygote:"error"},ga={__category__:"Effect of model size",EnzymeFwd:9.189382016577484,EnzymeRvs:.5695039085008535,FiniteDifferences:870.9083344889751,ForwardDiff:21.915722096279502,MooncakeFwd:170.429865842523,MooncakeRvs:5.110700389105059,ReverseDiff:127.30099640188207,ReverseDiffCompiled:11.741794765267969,Zygote:"error"},pa={__category__:"Distributions",EnzymeFwd:"error",EnzymeRvs:4.51337895163603,FiniteDifferences:42.88852640761878,ForwardDiff:1.032519907958556,MooncakeFwd:15.777125640724654,MooncakeRvs:8.941428769882613,ReverseDiff:18.97369569677865,ReverseDiffCompiled:1.562320671482483,Zygote:1377.3180076628353},ha={__category__:"Effect of model size",EnzymeFwd:20.372338925701396,EnzymeRvs:1.2208526478437984,FiniteDifferences:1654.6213548899027,ForwardDiff:22.616842636301396,MooncakeFwd:345.41561961074154,MooncakeRvs:5.212070855284094,ReverseDiff:127.87261455338897,ReverseDiffCompiled:12.245536806065052,Zygote:"error"},ba={__category__:"Effect of model size",EnzymeFwd:85.44082784571967,EnzymeRvs:1.122549499298692,FiniteDifferences:5679.838697399028,ForwardDiff:130.07356614141048,MooncakeFwd:1653.0671419502908,MooncakeRvs:4.975752264095822,ReverseDiff:130.32286864961907,ReverseDiffCompiled:11.331130316895441,Zygote:"error"},ya={__category__:"Distributions",EnzymeFwd:2.5528884258590008,EnzymeRvs:1.819211391821686,FiniteDifferences:33.60112575603958,ForwardDiff:1.8771388419882225,MooncakeFwd:4.499179727922062,MooncakeRvs:3.6855166564300545,ReverseDiff:66.91935538592028,ReverseDiffCompiled:6.237433522044947,Zygote:"error"},wa={__category__:"Distributions",EnzymeFwd:2.0253637956446906,EnzymeRvs:7.184226937137123,FiniteDifferences:21.257093968344506,ForwardDiff:1.5407156129763133,MooncakeFwd:4.186009074168992,MooncakeRvs:6.994451084172785,ReverseDiff:20.639584397887923,ReverseDiffCompiled:3.978630009469241,Zygote:"error"},Ea={__category__:"Core Turing syntax",EnzymeFwd:17.766525295825545,EnzymeRvs:3.6645265282841617,FiniteDifferences:244.8080704370536,ForwardDiff:7.398726172152033,MooncakeFwd:22.724990426890795,MooncakeRvs:22.668095652293974,ReverseDiff:941.1517375509156,ReverseDiffCompiled:77.70937648977542,Zygote:"error"},Da={__category__:"Core Turing syntax",EnzymeFwd:35.133167692650005,EnzymeRvs:6.56953818388588,FiniteDifferences:465.2095088161209,ForwardDiff:9.887455418598615,MooncakeFwd:45.34718759557384,MooncakeRvs:25.464064995941023,ReverseDiff:1011.3734672897195,ReverseDiffCompiled:87.25954337118986,Zygote:68325.1121619509},xa={__category__:"Core Turing syntax",EnzymeFwd:3.5555666468535745,EnzymeRvs:12.429833904465681,FiniteDifferences:102.51257893838537,ForwardDiff:1.439357087574123,MooncakeFwd:13.063069952085383,MooncakeRvs:5.747223264540338,ReverseDiff:103.64523616924,ReverseDiffCompiled:8.774304141342647,Zygote:"error"},Ra={__category__:"Core Turing syntax",EnzymeFwd:41.00404122044858,EnzymeRvs:6.6557449685834165,FiniteDifferences:534.555967784526,ForwardDiff:10.125942674877356,MooncakeFwd:45.35226363673123,MooncakeRvs:28.54020449433565,ReverseDiff:1263.5681659190982,ReverseDiffCompiled:88.65661041819516,Zygote:141955.30295517654},Ma={__category__:"Distributions",EnzymeFwd:"error",EnzymeRvs:"error",FiniteDifferences:29.467310712091216,ForwardDiff:"NaN",MooncakeFwd:5.304004505957817,MooncakeRvs:3.691666280345526,ReverseDiff:"NaN",ReverseDiffCompiled:5.211735717150879,Zygote:3508.121304274371},Ta={__category__:"External libraries",EnzymeFwd:"wrong",EnzymeRvs:90.69763490384017,FiniteDifferences:62.626001162232505,ForwardDiff:5.0515386667005355,MooncakeFwd:2395.33758776329,MooncakeRvs:71.245061088994,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Fa={__category__:"Distributions",EnzymeFwd:37.714446663593996,EnzymeRvs:6.677957669102505,FiniteDifferences:504.61061746987946,ForwardDiff:9.551903146281825,MooncakeFwd:41.944080658958825,MooncakeRvs:21.9737111543208,ReverseDiff:749.6014445845117,ReverseDiffCompiled:56.789626257483896,Zygote:51834.14544093309},Sa={__category__:"PosteriorDB",EnzymeFwd:3.3617173148585526,EnzymeRvs:8.179307052243896,FiniteDifferences:208.0293129770992,ForwardDiff:4.774088501623099,MooncakeFwd:33.95785704448423,MooncakeRvs:5.373236043229848,ReverseDiff:213.06015657189948,ReverseDiffCompiled:17.709270780214176,Zygote:"error"},Na={__category__:"PosteriorDB",EnzymeFwd:3.1027498151623734,EnzymeRvs:7.5199187679810455,FiniteDifferences:205.22338061869766,ForwardDiff:5.1468879446881095,MooncakeFwd:33.5184216109186,MooncakeRvs:5.413907584583346,ReverseDiff:205.11615631872777,ReverseDiffCompiled:16.699617920540998,Zygote:"error"},ka={__category__:"Core Turing syntax",EnzymeFwd:9.415523703201627,EnzymeRvs:1.7100421346547803,FiniteDifferences:233.95586364118336,ForwardDiff:3.034310111695798,MooncakeFwd:21.43886168476332,MooncakeRvs:9.320106112425517,ReverseDiff:260.5256852296869,ReverseDiffCompiled:22.00985728393634,Zygote:30648.320693391113},Aa={__category__:"Distributions",EnzymeFwd:11.1572675664096,EnzymeRvs:11.642125827574977,FiniteDifferences:35.070686872093866,ForwardDiff:1.0290834103676314,MooncakeFwd:18.55651662457184,MooncakeRvs:9.718201968259597,ReverseDiff:45.453870989901766,ReverseDiffCompiled:4.215944758317639,Zygote:"error"},Ca={__category__:"Core Turing syntax",EnzymeFwd:4.5870911342609455,EnzymeRvs:1.559505985302376,FiniteDifferences:100.05272340425532,ForwardDiff:1.8083232340720221,MooncakeFwd:11.761812297734627,MooncakeRvs:6.40182827032853,ReverseDiff:213.69510823248677,ReverseDiffCompiled:18.428243183392237,Zygote:"error"},Oa={__category__:"Base Julia features",EnzymeFwd:4.01717675112968,EnzymeRvs:2.1222267592214505,FiniteDifferences:87.0897151628859,ForwardDiff:2.266444896368111,MooncakeFwd:10.655121187595842,MooncakeRvs:4.5357765536469925,ReverseDiff:73.42831941366967,ReverseDiffCompiled:"wrong",Zygote:8007.110992366413},Ia={abstractgps:Pi,assume_beta:zi,delaydiffeq:qi,demo_assume_dot_observe:Vi,demo_assume_dot_observe_literal:Bi,demo_assume_index_observe:ji,demo_assume_matrix_observe_matrix_index:$i,demo_assume_multivariate_observe:Ui,demo_assume_multivariate_observe_literal:Hi,demo_assume_observe_literal:Gi,demo_assume_submodel_observe_index_literal:Ki,demo_dot_assume_observe:Zi,assume_dirichlet:Wi,demo_dot_assume_observe_index:Xi,demo_dot_assume_observe_index_literal:Ji,demo_dot_assume_observe_matrix_index:Yi,demo_dot_assume_observe_submodel:Qi,dot_assume:ea,dot_observe:na,dppl_gauss_unknown:ta,dppl_hier_poisson:ra,dppl_high_dim_gauss:oa,dppl_hmm_semisup:sa,assume_lkjcholu:ia,dppl_lda:aa,dppl_logistic_regression:la,dppl_naive_bayes:ca,dppl_sto_volatility:ua,dynamic_constraint:fa,lux_nn:da,multiple_constraints_same_var:_a,multithreaded:va,n010:ma,n050:ga,assume_mvnormal:pa,n100:ha,n500:ba,observe_bernoulli:ya,observe_categorical:wa,observe_index:Ea,observe_literal:Da,observe_multivariate:xa,observe_submodel:Ra,observe_von_mises:Ma,ordinarydiffeq:Ta,assume_normal:Fa,pdb_eight_schools_centered:Sa,pdb_eight_schools_noncentered:Na,assume_submodel:ka,assume_wishart:Aa,broadcast_macro:Ca,control_flow:Oa},La=`#=
This is an implementation of using AbstractGPs.jl with Turing to model a Gaussian process.
The model is adapted from the Turing documentation:
https://turinglang.org/docs/tutorials/gaussian-processes-introduction/
=#

using AbstractGPs
using LogExpFunctions

# Load data
distance = [2.0, 3.0, 4.0, 5.0, 6.0]
n = [1443, 694, 455, 353, 272]
y = [1346, 577, 337, 208, 149]

# Make Turing model
@model function abstractgps(d, n, y; jitter = 1e-4)
    v ~ Gamma(2, 1)
    l ~ Gamma(4, 1)
    f = GP(v * with_lengthscale(SEKernel(), l))
    f_latent ~ f(d, jitter)
    y ~ product_distribution(Binomial.(n, logistic.(f_latent)))
    return (fx = f(d, jitter), f_latent = f_latent, y = y)
end

model = abstractgps(distance, n, y)`,Pa=`@model function assume_beta()
    a ~ Beta(2, 2)
end

model = assume_beta()`,za=`#=
This is an example of using DifferentialEquations.jl with Turing to model a delayed Lotka–Volterra equations (predator-prey model).
The model is adapted from the Turing documentation:
https://turinglang.org/docs/tutorials/bayesian-differential-equations/ 
=#
using DelayDiffEq: DDEProblem, solve, MethodOfSteps, Tsit5

# SciMLSensitivity is needed for reverse-mode AD on differential equations
import SciMLSensitivity

function delay_lotka_volterra(du, u, h, p, t)
    α, β, γ, δ = p
    x, y = u
    du[1] = α * h(p, t - 1; idxs = 1) - β * x * y
    du[2] = -γ * y + δ * x * y
    return nothing
end
p = (1.5, 1.0, 3.0, 1.0)
u0 = [1.0; 1.0]
tspan = (0.0, 10.0)
h(p, t; idxs::Int) = 1.0
prob_dde = DDEProblem(delay_lotka_volterra, u0, h, tspan, p)
sol_dde = solve(prob_dde; saveat = 0.1)
q = 1.7
ddedata = rand.(Poisson.(q .* Array(sol_dde)))

@model function delaydiffeq(data, prob)
    α ~ truncated(Normal(1.5, 0.2); lower = 0.5, upper = 2.5)
    β ~ truncated(Normal(1.1, 0.2); lower = 0, upper = 2)
    γ ~ truncated(Normal(3.0, 0.2); lower = 1, upper = 4)
    δ ~ truncated(Normal(1.0, 0.2); lower = 0, upper = 2)
    q ~ truncated(Normal(1.7, 0.2); lower = 0, upper = 3)
    p = [α, β, γ, δ]
    predicted = solve(
        prob,
        MethodOfSteps(Tsit5());
        p = p,
        saveat = 0.1,
        abstol = 1e-6,
        reltol = 1e-6,
    )
    ϵ = 1e-5
    for i in eachindex(predicted)
        data[:, i] ~ arraydist(Poisson.(q .* predicted[i] .+ ϵ))
    end
    return nothing
end

model = delaydiffeq(ddedata, prob_dde)`,qa=`@model function demo_assume_dot_observe(x = [1.5, 2.0])
    # \`assume\` and \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    x .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe()`,Va=`@model function demo_assume_dot_observe_literal()
    # \`assume\` and literal \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    [1.5, 2.0] .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe_literal()`,Ba=`using LinearAlgebra: Diagonal

@model function demo_assume_index_observe(
    x = [1.5, 2.0],
    ::Type{TV} = Vector{Float64},
) where {TV}
    # \`assume\` with indexing and \`observe\`
    s = TV(undef, length(x))
    for i in eachindex(s)
        s[i] ~ InverseGamma(2, 3)
    end
    m = TV(undef, length(x))
    for i in eachindex(m)
        m[i] ~ Normal(0, sqrt(s[i]))
    end
    x ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_index_observe()`,ja=`using FillArrays
using LinearAlgebra: Diagonal

@model function demo_assume_matrix_observe_matrix_index(
    x = transpose([1.5 2.0;]),
    ::Type{TV} = Array{Float64},
) where {TV}
    n = length(x)
    d = n ÷ 2
    s ~ reshape(product_distribution(Fill(InverseGamma(2, 3), n)), d, 2)
    s_vec = vec(s)
    m ~ MvNormal(zeros(n), Diagonal(s_vec))
    x[:, 1] ~ MvNormal(m, Diagonal(s_vec))
end

model = demo_assume_matrix_observe_matrix_index()`,$a=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe(x = [1.5, 2.0])
    # Multivariate \`assume\` and \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zero(x), Diagonal(s))
    x ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe()`,Ua=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe_literal()
    # multivariate \`assume\` and literal \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zeros(2), Diagonal(s))
    [1.5, 2.0] ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe_literal()`,Ha=`@model function demo_assume_observe_literal()
    # univariate \`assume\` and literal \`observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    1.5 ~ Normal(m, sqrt(s))
    2.0 ~ Normal(m, sqrt(s))
end

model = demo_assume_observe_literal()`,Ga=`@model function _prior_dot_assume(::Type{TV} = Vector{Float64}) where {TV}
    s = TV(undef, 2)
    s .~ InverseGamma(2, 3)
    m = TV(undef, 2)
    m ~ product_distribution(Normal.(0, sqrt.(s)))
    return s, m
end

@model function demo_assume_submodel_observe_index_literal()
    # Submodel prior
    priors ~ to_submodel(_prior_dot_assume(), false)
    s, m = priors
    1.5 ~ Normal(m[1], sqrt(s[1]))
    2.0 ~ Normal(m[2], sqrt(s[2]))
end

model = demo_assume_submodel_observe_index_literal()`,Ka=`using LinearAlgebra: Diagonal

@model function demo_dot_assume_observe(
    x = [1.5, 2.0],
    ::Type{TV} = Vector{Float64},
) where {TV}
    # \`dot_assume\` and \`observe\`
    s = TV(undef, length(x))
    m = TV(undef, length(x))
    s .~ InverseGamma(2, 3)
    m ~ product_distribution(Normal.(0, sqrt.(s)))
    x ~ MvNormal(m, Diagonal(s))
end

model = demo_dot_assume_observe()`,Za=`@model function assume_dirichlet()
    a ~ Dirichlet([1.0, 5.0])
end

model = assume_dirichlet()`,Wa=`@model function demo_dot_assume_observe_index(
    x = [1.5, 2.0],
    ::Type{TV} = Vector{Float64},
) where {TV}
    # \`dot_assume\` and \`observe\` with indexing
    s = TV(undef, length(x))
    s .~ InverseGamma(2, 3)
    m = TV(undef, length(x))
    m ~ product_distribution(Normal.(0, sqrt.(s)))
    for i in eachindex(x)
        x[i] ~ Normal(m[i], sqrt(s[i]))
    end
end

model = demo_dot_assume_observe_index()`,Xa=`@model function demo_dot_assume_observe_index_literal(
    ::Type{TV} = Vector{Float64},
) where {TV}
    # \`dot_assume\` and literal \`observe\` with indexing
    s = TV(undef, 2)
    m = TV(undef, 2)
    s .~ InverseGamma(2, 3)
    m ~ product_distribution(Normal.(0, sqrt.(s)))

    1.5 ~ Normal(m[1], sqrt(s[1]))
    2.0 ~ Normal(m[2], sqrt(s[2]))
end

model = demo_dot_assume_observe_index_literal()`,Ja=`using LinearAlgebra: Diagonal

@model function demo_dot_assume_observe_matrix_index(
    x = transpose([1.5 2.0;]),
    ::Type{TV} = Vector{Float64},
) where {TV}
    s = TV(undef, length(x))
    s .~ InverseGamma(2, 3)
    m = TV(undef, length(x))
    m ~ product_distribution(Normal.(0, sqrt.(s)))
    x[:, 1] ~ MvNormal(m, Diagonal(s))
end

model = demo_dot_assume_observe_matrix_index()`,Ya=`using LinearAlgebra: Diagonal

@model function _likelihood_multivariate_observe(s, m, x)
    return x ~ MvNormal(m, Diagonal(s))
end

@model function demo_dot_assume_observe_submodel(
    x = [1.5, 2.0],
    ::Type{TV} = Vector{Float64},
) where {TV}
    s = TV(undef, length(x))
    s .~ InverseGamma(2, 3)
    m = TV(undef, length(x))
    m ~ product_distribution(Normal.(0, sqrt.(s)))

    # Submodel likelihood
    # With to_submodel, we have to have a left-hand side variable to
    # capture the result, so we just use a dummy variable
    _ignore ~ to_submodel(_likelihood_multivariate_observe(s, m, x))
end

model = demo_dot_assume_observe_submodel()`,Qa=`@model function dot_assume(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 5)
    a .~ Normal()
end

model = dot_assume()`,el=`@model function dot_observe(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    x .~ Normal(a)
end

model = dot_observe()`,nl=`using FillArrays

n = 10_000
s = abs(rand()) + 0.5
y = randn() .+ s * randn(n)

@model function dppl_gauss_unknown(y)
    N = length(y)
    m ~ Normal(0, 1)
    s ~ truncated(Cauchy(0, 5); lower = 0)
    y ~ product_distribution(Fill(Normal(m, s), N))
end

model = dppl_gauss_unknown(y)`,tl=`using FillArrays
using Turing: LogPoisson

nd, ns = 5, 10
a0, a1, a0_sig = 1.0, 0.5, 0.3
n = nd * ns
# simulate group level parameters
a0s = rand(Normal(0, a0_sig), ns)
logpop = rand(Normal(9, 1.5), ns)
λ = exp.(a0 .+ a0s + (a1 * logpop))
# and individual data
y = mapreduce(λi -> rand(Poisson(λi), nd), vcat, λ)
x = repeat(logpop, inner = nd)
idx = repeat(collect(1:ns), inner = nd)

@model function dppl_hier_poisson(y, x, idx, ns)
    a0 ~ Normal(0, 10)
    a1 ~ Normal(0, 1)
    a0_sig ~ truncated(Cauchy(0, 1); lower = 0)
    a0s ~ product_distribution(Fill(Normal(0, a0_sig), ns))
    alpha = a0 .+ a0s[idx] .+ a1 * x
    y ~ product_distribution(LogPoisson.(alpha))
end

model = dppl_hier_poisson(y, x, idx, ns)`,rl=`using FillArrays

@model function dppl_high_dim_gauss(D)
    m ~ product_distribution(Fill(Normal(0, 1), D))
end

model = dppl_high_dim_gauss(10_000)`,ol=`using FillArrays
using StatsFuns: logsumexp

# Set up hyperparameters
K, v, T, T_unsup = 5, 20, 100, 200
alpha = fill(1.0, K)
beta = fill(0.1, v)
theta = rand(Dirichlet(alpha), K)
phi = rand(Dirichlet(beta), K)

# Simulate data (supervised)
w = Vector{Int}(undef, T)
z = Vector{Int}(undef, T)
z[1] = rand(1:K)
w[1] = rand(Categorical(phi[:, z[1]]))
for t = 2:T
    z[t] = rand(Categorical(theta[:, z[t-1]]))
    w[t] = rand(Categorical(phi[:, z[t]]))
end

# Unsupervised
u = Vector{Int}(undef, T_unsup)
y = Vector{Int}(undef, T_unsup)
y[1] = rand(1:K)
u[1] = rand(Categorical(phi[:, y[1]]))
for t = 2:T_unsup
    y[t] = rand(Categorical(theta[:, y[t-1]]))
    u[t] = rand(Categorical(phi[:, y[t]]))
end

@model function dppl_hmm_semisup(K, T, T_unsup, w, z, u, alpha, beta)
    theta ~ product_distribution(Fill(Dirichlet(alpha), K))
    phi ~ product_distribution(Fill(Dirichlet(beta), K))
    for t = 1:T
        w[t] ~ Categorical(phi[:, z[t]])
    end
    for t = 2:T
        z[t] ~ Categorical(theta[:, z[t-1]])
    end

    TF = eltype(theta)
    acc = similar(alpha, TF, K)
    gamma = similar(alpha, TF, K)
    temp_gamma = similar(alpha, TF, K)
    for k = 1:K
        gamma[k] = log(phi[u[1], k])
    end
    for t = 2:T_unsup
        for k = 1:K
            for j = 1:K
                acc[j] = gamma[j] + log(theta[k, j]) + log(phi[u[t], k])
            end
            temp_gamma[k] = logsumexp(acc)
        end
        gamma .= temp_gamma
    end
    @addlogprob! logsumexp(gamma)
end

model = dppl_hmm_semisup(K, T, T_unsup, w, z, u, alpha, beta)`,sl=`@model function assume_lkjcholu()
    a ~ LKJCholesky(5, 1.0, 'U')
end

model = assume_lkjcholu()`,il=`using FillArrays

v = 100      # words
k = 5        # topics
m = 10       # number of docs
alpha = ones(k)
beta = ones(v)

phi = rand(Dirichlet(beta), k)
theta = rand(Dirichlet(alpha), m)
doc_lengths = rand(Poisson(1_000), m)
n = sum(doc_lengths)

w = Vector{Int}(undef, n)
doc = Vector{Int}(undef, n)
for i = 1:m
    local idx = sum(doc_lengths[1:i-1]) # starting index for inner loop
    for j = 1:doc_lengths[i]
        z = rand(Categorical(theta[:, i]))
        w[idx+j] = rand(Categorical(phi[:, z]))
        doc[idx+j] = i
    end
end

@model function dppl_lda(k, m, w, doc, alpha, beta)
    theta ~ product_distribution(Fill(Dirichlet(alpha), m))
    phi ~ product_distribution(Fill(Dirichlet(beta), k))
    log_phi_dot_theta = log.(phi * theta)
    @addlogprob! sum(log_phi_dot_theta[CartesianIndex.(w, doc)])
end

model = dppl_lda(k, m, w, doc, alpha, beta)`,al=`using Random: Xoshiro
using StatsFuns: logistic

function safelogistic(x::T) where {T}
    logistic(x) * (1 - 2 * eps(T)) + eps(T)
end

d, n = 100, 10_000
X = randn(Xoshiro(468), d, n)
w = randn(Xoshiro(468), d)
y = Int.(logistic.(X' * w) .> 0.5)

@model function dppl_logistic_regression(Xt, y)
    N, D = size(Xt)
    w ~ product_distribution(Normal.(zeros(D)))
    y ~ product_distribution(Bernoulli.(safelogistic.(Xt * w)))
end

model = dppl_logistic_regression(X', y)`,ll=`using DelimitedFiles
using FillArrays

# Load pre-computed PCA-reduced MNIST data. There are 1000 images,
# each of which have been compressed to 40 dimensions via PCA.
#
# See scripts/generate_naive_bayes_data.jl for details.

path = "$(@__DIR__)/../data/dppl_naive_bayes.csv"
data, _ = readdlm(path, ',', header = true)

labels = Int.(data[:, 1])
image_vec = data[:, 2:end]
C = 10 # Number of labels
D = size(image_vec, 2)

@model function dppl_naive_bayes(image_vec, labels, C, D)
    m ~ product_distribution(Fill(Normal(0, 10), C, D))
    image_vec ~ product_distribution(Normal.(m[labels, :]))
end

model = dppl_naive_bayes(image_vec, labels, C, D)`,cl=`using DelimitedFiles: readdlm

path = "$(@__DIR__)/../data/dppl_sto_volatility.csv"
data, _ = readdlm(path, ',', header = true)
to_num(x) = x isa Number ? x : 0.1
y = map(to_num, data[1:500, 2])

@model function dppl_sto_volatility(y, ::Type{Tv} = Vector{Float64}) where {Tv}
    T = length(y)
    μ ~ Cauchy(0, 10)
    ϕ ~ Uniform(-1, 1)
    σ ~ truncated(Cauchy(0, 5); lower = 0)

    h = Tv(undef, T)
    h[1] ~ Normal(μ, σ / sqrt(1 - ϕ^2))
    y[1] ~ Normal(0, exp(h[1] / 2))
    for t = 2:T
        h[t] ~ Normal(μ + ϕ * (h[t-1] - μ), σ)
        y[t] ~ Normal(0, exp(h[t] / 2))
    end
end

model = dppl_sto_volatility(y)`,ul=`@model function dynamic_constraint()
    a ~ Normal()
    b ~ truncated(Normal(); lower = a)
end

model = dynamic_constraint()`,fl=`#=
This is an implementation of using Lux.jl with Turing to implement a Bayesian neural network.
The model is adapted from the Turing documentation:
https://turinglang.org/docs/tutorials/bayesian-neural-networks/
=#
using Lux
using Random
using LinearAlgebra
using Functors

## Simulate data ##
# Number of points to generate
N = 80
M = round(Int, N / 4)
rng = Random.default_rng()
Random.seed!(rng, 1234)

# Generate artificial data
x1s = rand(Float32, M) * 4.5f0;
x2s = rand(Float32, M) * 4.5f0;
xt1s = Array([[x1s[i] + 0.5f0; x2s[i] + 0.5f0] for i = 1:M])
x1s = rand(Float32, M) * 4.5f0;
x2s = rand(Float32, M) * 4.5f0;
append!(xt1s, Array([[x1s[i] - 5.0f0; x2s[i] - 5.0f0] for i = 1:M]))

x1s = rand(Float32, M) * 4.5f0;
x2s = rand(Float32, M) * 4.5f0;
xt0s = Array([[x1s[i] + 0.5f0; x2s[i] - 5.0f0] for i = 1:M])
x1s = rand(Float32, M) * 4.5f0;
x2s = rand(Float32, M) * 4.5f0;
append!(xt0s, Array([[x1s[i] - 5.0f0; x2s[i] + 0.5f0] for i = 1:M]))

# Store all the data for later
xs = [xt1s; xt0s]
ts = [ones(2 * M); zeros(2 * M)]

## Create neural network ##
# Construct a neural network using Lux
nn_initial = Chain(Dense(2 => 3, tanh), Dense(3 => 2, tanh), Dense(2 => 1, σ))

# Initialize the model weights and state
ps, st = Lux.setup(rng, nn_initial)

# Create a regularization term and a Gaussian prior variance term.
alpha = 0.09
sigma = sqrt(1.0 / alpha)

function vector_to_parameters(ps_new::AbstractVector, ps::NamedTuple)
    @assert length(ps_new) == Lux.parameterlength(ps)
    i = 1
    function get_ps(x)
        z = reshape(view(ps_new, i:(i+length(x)-1)), size(x))
        i += length(x)
        return z
    end
    return fmap(get_ps, ps)
end

const nn = StatefulLuxLayer{true}(nn_initial, nothing, st)

## Create Turing model ##
# Specify the probabilistic model.
@model function lux_nn(xs, ts; sigma = sigma, ps = ps, nn = nn)
    # Sample the parameters
    nparameters = Lux.parameterlength(nn_initial)
    parameters ~ MvNormal(zeros(nparameters), Diagonal(abs2.(sigma .* ones(nparameters))))

    # Forward NN to make predictions
    preds = Lux.apply(nn, xs, f32(vector_to_parameters(parameters, ps)))

    # Observe each prediction.
    for i in eachindex(ts)
        ts[i] ~ Bernoulli(preds[i])
    end
end

model = lux_nn(reduce(hcat, xs), ts)`,dl=`@model function multiple_constraints_same_var(::Type{TV} = Vector{Float64}) where {TV}
    x = TV(undef, 5)
    x[1] ~ Normal()
    x[2] ~ InverseGamma(2, 3)
    x[3] ~ truncated(Normal(), -5, 20)
    x[4:5] ~ Dirichlet([1.0, 2.0])
end

model = multiple_constraints_same_var()`,_l=`#=
Most models in ADTests are run with 1 thread. This model is run with 4 threads
to properly demonstrate the compatibility with multithreaded observe
statements. See the docs for more details on multithreading in Turing:
https://turinglang.org/docs/usage/threadsafe-evaluation/
=#

@model function multithreaded(x)
    a ~ Normal()
    Threads.@threads for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end

x = randn(100)
model = setthreadsafe(multithreaded(x), true)`,vl=`@model function n010(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 10)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n010()`,ml=`@model function n050(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 50)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n050()`,gl=`@model function assume_mvnormal()
    a ~ MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0])
end

model = assume_mvnormal()`,pl=`@model function n100(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 100)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n100()`,hl=`@model function n500(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 500)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n500()`,bl=`@model function observe_bernoulli(x = [true, false, true])
    a ~ Beta(2, 2)
    for i in eachindex(x)
        x[i] ~ Bernoulli(a)
    end
end

model = observe_bernoulli()`,yl=`@model function observe_categorical(x = [1, 2, 1, 2, 2])
    a ~ Dirichlet(2, 3)
    for i in eachindex(x)
        x[i] ~ Categorical(a)
    end
end

model = observe_categorical()`,wl=`@model function observe_index(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end

model = observe_index()`,El=`@model function observe_literal()
    a ~ Normal()
    1.5 ~ Normal(a)
end

model = observe_literal()`,Dl=`@model function observe_multivariate(
    x = [1.5, 2.0, 2.5],
    ::Type{TV} = Vector{Float64},
) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    x ~ MvNormal(a, I)
end

model = observe_multivariate()`,xl=`@model function inner2(x, a)
    x ~ Normal(a)
end
@model function observe_submodel(x = 1.5)
    a ~ Normal()
    _ignore ~ to_submodel(inner2(x, a))
end

model = observe_submodel()`,Rl=`@model function observe_von_mises(x)
    a ~ InverseGamma(2, 3)
    x ~ VonMises(0, a)
end

model = observe_von_mises(0.4)`,Ml=`# See https://turinglang.org/docs/tutorials/bayesian-differential-equations/.

using OrdinaryDiffEq: ODEProblem, solve, Tsit5

# SciMLSensitivity is needed for reverse-mode AD on differential equations
import SciMLSensitivity

function lotka_volterra(du, u, p, t)
    α, β, γ, δ = p
    x, y = u
    du[1] = (α - β * y) * x # prey
    du[2] = (δ * x - γ) * y # predator
    return nothing
end
u0 = [1.0, 1.0]
p = [1.5, 1.0, 3.0, 1.0]
tspan = (0.0, 10.0)
prob = ODEProblem(lotka_volterra, u0, tspan, p)
sol = solve(prob, Tsit5(); saveat = 0.1)
q = 1.7
odedata = rand.(Poisson.(q * Array(sol)))

@model function ordinarydiffeq(data, prob)
    α ~ truncated(Normal(1.5, 0.2); lower = 0.5, upper = 2.5)
    β ~ truncated(Normal(1.1, 0.2); lower = 0, upper = 2)
    γ ~ truncated(Normal(3.0, 0.2); lower = 1, upper = 4)
    δ ~ truncated(Normal(1.0, 0.2); lower = 0, upper = 2)
    q ~ truncated(Normal(1.7, 0.2); lower = 0, upper = 3)
    p = [α, β, γ, δ]
    predicted = solve(prob, Tsit5(); p = p, saveat = 0.1, abstol = 1e-6, reltol = 1e-6)
    for i in eachindex(predicted)
        data[:, i] ~ product_distribution(Poisson.(q .* predicted[i] .+ 1e-5))
    end
    return nothing
end

model = ordinarydiffeq(odedata, prob)`,Tl=`@model function assume_normal()
    a ~ Normal()
end

model = assume_normal()`,Fl=`J = 8
y = [28, 8, -3, 7, -1, 1, 18, 12]
sigma = [15, 10, 16, 11, 9, 11, 10, 18]

@model function pdb_eight_schools_centered(J, y, sigma)
    mu ~ Normal(0, 5)
    tau ~ truncated(Cauchy(0, 5); lower = 0)
    theta = Vector{Float64}(undef, J)
    for i = 1:J
        theta[i] ~ Normal(mu, tau)
        y[i] ~ Normal(theta[i], sigma[i])
    end
end

model = pdb_eight_schools_centered(J, y, sigma)`,Sl=`J = 8
y = [28, 8, -3, 7, -1, 1, 18, 12]
sigma = [15, 10, 16, 11, 9, 11, 10, 18]

@model function pdb_eight_schools_noncentered(J, y, sigma)
    mu ~ Normal(0, 5)
    tau ~ truncated(Cauchy(0, 5); lower = 0)
    theta_trans = Vector{Float64}(undef, J)
    for i = 1:J
        theta_trans[i] ~ Normal(0, 1)
        theta = theta_trans[i] * tau + mu
        y[i] ~ Normal(theta, sigma[i])
    end
end

model = pdb_eight_schools_noncentered(J, y, sigma)`,Nl=`@model function inner1()
    return a ~ Normal()
end
@model function assume_submodel()
    a ~ to_submodel(inner1())
    x ~ Normal(a)
end

model = assume_submodel()`,kl=`@model function assume_wishart()
    a ~ Wishart(7, [1.0 0.5; 0.5 1.0])
end

model = assume_wishart()`,Al=`@model function broadcast_macro(x = [1.5, 2.0], ::Type{TV} = Vector{Float64}) where {TV}
    a ~ Normal(0, 1)
    b ~ InverseGamma(2, 3)
    @. x ~ Normal(a, $(sqrt(b)))
end

model = broadcast_macro()`,Cl=`#= 
This model illustrates dynamic control flow inside a model that depends on the
value of a random variable. This will cause problems with ReverseDiff's
compiled tapes, as a tape compiled at a given value of \`a\` may not be
appropriate for a different value of \`a\`.

To make sure that the table correctly reflects this issue, the preparation for
the gradient is carried out at a value of \`a > 0\`, and the gradient is
evaluated at a value of \`a < 0\`. See \`main.jl\` for more information.
=#

@model function control_flow()
    a ~ Normal()
    if a > 0
        b ~ Normal()
    else
        b ~ Beta(2, 2)
    end
end

model = control_flow()`,Ol={abstractgps:La,assume_beta:Pa,delaydiffeq:za,demo_assume_dot_observe:qa,demo_assume_dot_observe_literal:Va,demo_assume_index_observe:Ba,demo_assume_matrix_observe_matrix_index:ja,demo_assume_multivariate_observe:$a,demo_assume_multivariate_observe_literal:Ua,demo_assume_observe_literal:Ha,demo_assume_submodel_observe_index_literal:Ga,demo_dot_assume_observe:Ka,assume_dirichlet:Za,demo_dot_assume_observe_index:Wa,demo_dot_assume_observe_index_literal:Xa,demo_dot_assume_observe_matrix_index:Ja,demo_dot_assume_observe_submodel:Ya,dot_assume:Qa,dot_observe:el,dppl_gauss_unknown:nl,dppl_hier_poisson:tl,dppl_high_dim_gauss:rl,dppl_hmm_semisup:ol,assume_lkjcholu:sl,dppl_lda:il,dppl_logistic_regression:al,dppl_naive_bayes:ll,dppl_sto_volatility:cl,dynamic_constraint:ul,lux_nn:fl,multiple_constraints_same_var:dl,multithreaded:_l,n010:vl,n050:ml,assume_mvnormal:gl,n100:pl,n500:hl,observe_bernoulli:bl,observe_categorical:yl,observe_index:wl,observe_literal:El,observe_multivariate:Dl,observe_submodel:xl,observe_von_mises:Rl,ordinarydiffeq:Ml,assume_normal:Tl,pdb_eight_schools_centered:Fl,pdb_eight_schools_noncentered:Sl,assume_submodel:Nl,assume_wishart:kl,broadcast_macro:Al,control_flow:Cl};xs();const Il="1.21.0",Ll="1.5.0",Pl="0.5.24",zl="5.14.0",ql="0.14.1",Vl="0.4.5",Bl="0.1.43",jl="4.5.0",$l="0.8.3",Ul="0.8.10",Hl="0.7.2",Gl="0.6.2",Kl="1.1.3",Zl="2.5.0",Wl="1.1.2",Xl="0.4.0",Jl="7.23.0",Yl="1.11.0",Ql="1.1.2",ec="1.1.0",nc="0.4.8",tc="0.4.8",rc="1.11.0",oc="0.1.1",sc="0.15.18",ic="0.1.6",ac="1.11.0",lc="0.5.0",cc="0.2.7",uc="0.3.14",fc="1.73.0",dc="1.26.0",_c="1.3.1",vc="0.1.10",mc="0.1.13",gc="0.2.6",pc="0.3.1",hc="1.0.0",bc="4.18.1",yc="1.1.1+0",wc="0.1.2",Ec="0.2.3",Dc="0.1.2",xc="1.6.0",Rc="0.3.1",Mc="4.1.1",Tc="1.16.0",Fc="0.19.3",Sc="1.0.0",Nc="1.11.0",kc="0.1.2",Ac="5.69.0",Cc="1.9.1",Oc="0.4.0",Ic="6.210.1",Lc="4.12.0",Pc="5.27.0",zc="1.1.0",qc="1.15.1",Vc="0.7.16",Bc="0.4.28",jc="0.10.12",$c="1.11.0",Uc="0.25.123",Hc="0.6.58",Gc="0.9.5",Kc="1.6.0",Zc="0.40.14",Wc="2.0.0",Xc="1.0.7",Jc="0.13.131",Yc="0.8.18",Qc="0.0.251+0",eu="1.30.0",nu="0.1.10",tu="1.1.4",ru="0.10.14",ou="0.3.1",su="0.3.5",iu="0.3.2",au="1.1.0",lu="1.3.1",cu="1.11.0",uu="1.16.0",fu="2.29.0",du="0.12.33",_u="1.3.2",vu="0.1.2",mu="1.1.3",gu="0.1.3",pu="0.5.2",hu="1.11.0",bu="0.2.0",yu="1.8.2",wu="0.5.6",Eu="1.14.0",Du="0.2.0",xu="0.3.28",Ru="0.4.15",Mu="0.1.1",Tu="0.1.5",Fu="0.3.1",Su="0.1.3",Nu="2025.2.0+0",ku="1.11.0",Au="0.16.2",Cu="0.7.13",Ou="0.1.17",Iu="0.2.6",Lu="1.10.0",Pu="1.0.0",zu="1.7.1",qu="0.2.1",Vu="0.9.40",Bu="0.6.11",ju="0.10.67",$u="0.10.6",Uu="9.4.6",Hu="0.0.38+0",Gu="1.4.0",Ku="0.1.17",Zu="1.11.0",Wu="0.2.1",Xu="0.6.4",Ju="8.6.0+0",Yu="1.11.0",Qu="1.7.2+0",ef="1.11.0+1",nf="0.13.1+0",tf="1.11.0",rf="0.9.14",of="0.1.6",sf="7.6.0",af="1.11.0",lf="3.65.0",cf="2.2.0",uf="1.13.1",ff="0.3.29",df="1.11.0",_f="1.2.0",vf="1.31.3",mf="1.5.3",gf="1.15.4",pf="7.7.0",hf="0.3.16",bf="2025.2.0+0",yf="1.17.4",wf="1.12.1",Ef="0.5.16",Df="0.1.8",xf="0.4.3",Rf="1.11.0",Mf="0.1.4",Tf="2.28.6+0",Ff="0.2.0",Sf="1.2.0",Nf="2.1.0",kf="1.11.0",Af="0.5.22",Cf="0.3.7",Of="2023.12.12",If="0.2.4",Lf="8.0.0",Pf="0.9.33",zf="1.1.3",qf="1.0.0",Vf="1.2.0",Bf="4.16.0",jf="2.15.0",$f="2.0.0",Uf="1.12.0",Hf="1.6.0",Gf="0.5.0",Kf="1.17.0",Zf="0.3.27+1",Wf="0.8.5+0",Xf="0.5.6+0",Jf="2.0.1",Yf="0.4.7",Qf="5.5.0",ed="5.1.0",nd="0.4.11",td="1.8.1",rd="6.108.0",od="1.9.0",sd="1.22.0",id="3.18.0",ad="1.13.0",ld="2.2.1",cd="1.9.0",ud="1.13.0",fd="1.16.0",dd="1.23.0",_d="1.8.0",vd="1.9.0",md="1.9.0",gd="1.12.0",pd="1.10.0",hd="1.10.0",bd="1.12.0",yd="1.23.0",wd="1.9.0",Ed="1.11.0",Dd="1.8.0",xd="1.8.0",Rd="1.10.0",Md="1.25.0",Td="1.12.0",Fd="1.11.0",Sd="1.11.0",Nd="1.8.0",kd="1.11.0",Ad="1.9.0",Cd="1.11.0",Od="0.11.37",Id="2.8.3",Ld="1.11.0",Pd="0.4.7",zd="0.7.19",qd="0.2.2",Vd="0.2.4",Bd="1.1.2",jd="1.2.1",$d="1.5.2",Ud="3.2.3",Hd="0.5.7",Gd="1.11.0",Kd="0.1.6",Zd="1.11.0",Wd="1.4.0",Xd="2.11.2",Jd="1.11.0",Yd="1.11.0",Qd="1.7.1",e1="1.6.0",n1="0.3.2",t1="0.4.5",r1="0.1.17",o1="0.1.0",s1="1.3.4",i1="3.48.0",a1="1.2.2",l1="1.3.1",c1="1.2.0",u1="1.16.2",f1="1.4.2",d1="0.9.0",_1="0.5.1+0",v1="2.2.13",m1="0.5.17",g1="0.7.0",p1="0.1.0",h1="0.6.1",b1="2.149.0",y1="0.1.12",w1="1.9.1",E1="1.15.1",D1="1.0.1",x1="7.99.0",R1="1.10.0",M1="3.1.0",T1="1.6.0",F1="1.3.0",S1="1.11.0",N1="1.1.2",k1="1.11.0",A1="2.11.0",C1="0.9.5",O1="1.11.0",I1="1.2.2",L1="1.11.0",P1="1.2.1",z1="0.1.2",q1="0.4.24",V1="2.7.1",B1="0.1.15",j1="1.3.1",$1="1.9.0",U1="1.9.18",H1="1.4.4",G1="3.5.0",K1="1.11.1",Z1="1.8.0",W1="0.34.10",X1="1.5.2",J1="0.5.8",Y1="0.4.4",Q1="0.7.2",e0="0.3.1",n0="2.6.3",t0="1.11.0",r0=null,o0="7.7.0+0",s0="0.3.46",i0="1.0.3",a0="1.0.1",l0="1.12.1",c0="1.10.0",u0="0.1.1",f0="0.1.7",d0="1.11.0",_0="0.5.5",v0="0.5.29",m0="0.2.38",g0="0.1.6",p0="0.4.85",h0="1.4.0",b0="0.43.2",y0="1.11.0",w0="1.11.0",E0="0.3.0",D0="1.3.1",x0="1.1.0",R0="1.2.13+1",M0="0.7.10",T0="0.2.7",F0="5.11.0+0",S0="1.59.0+0",N0="2022.0.0+1",k0="17.4.0+2",A0={ADTypes:Il,AbstractFFTs:Ll,AbstractGPs:Pl,AbstractMCMC:zl,AbstractPPL:ql,AbstractTrees:Vl,Accessors:Bl,Adapt:jl,AdvancedHMC:$l,AdvancedMH:Ul,AdvancedPS:Hl,AdvancedVI:Gl,AliasTables:Kl,ArgCheck:Zl,ArgTools:Wl,ArnoldiMethod:Xl,ArrayInterface:Jl,Artifacts:Yl,Atomix:Ql,AxisAlgorithms:ec,AxisArrays:nc,BangBang:tc,Base64:rc,Baselet:oc,Bijectors:sc,BitTwiddlingConvenienceFunctions:ic,BracketingNonlinearSolve:ac,CEnum:lc,CPUSummary:cc,Cassette:uc,ChainRules:fc,ChainRulesCore:dc,Chairmarks:_c,ChangesOfVariables:vc,CloseOpenIntervals:mc,CommonSolve:gc,CommonSubexpressions:pc,CommonWorldInvalidations:hc,Compat:bc,CompilerSupportLibraries_jll:yc,CompositionsBase:wc,ConcreteStructs:Ec,ConsoleProgressMonitor:Dc,ConstructionBase:xc,CpuId:Rc,Crayons:Mc,DataAPI:Tc,DataStructures:Fc,DataValueInterfaces:Sc,Dates:Nc,DefineSingletons:kc,DelayDiffEq:Ac,DelimitedFiles:Cc,DensityInterface:Oc,DiffEqBase:Ic,DiffEqCallbacks:Lc,DiffEqNoiseProcess:Pc,DiffResults:zc,DiffRules:qc,DifferentiationInterface:Vc,DispatchDoctor:Bc,Distances:jc,Distributed:$c,Distributions:Uc,DistributionsAD:Hc,DocStringExtensions:Gc,Downloads:Kc,DynamicPPL:Zc,EllipticalSliceSampling:Wc,EnumX:Xc,Enzyme:Jc,EnzymeCore:Yc,Enzyme_jll:Qc,ExponentialUtilities:eu,ExprTools:nu,ExpressionExplorer:tu,ExproniconLite:ru,FFTA:ou,FastBroadcast:su,FastClosures:iu,FastGaussQuadrature:au,FastPower:lu,FileWatching:cu,FillArrays:uu,FiniteDiff:fu,FiniteDifferences:du,ForwardDiff:_u,FunctionProperties:vu,FunctionWrappers:mu,FunctionWrappersWrappers:gu,Functors:pu,Future:hu,GPUArraysCore:bu,GPUCompiler:yu,GenericSchur:wu,Graphs:Eu,HashArrayMappedTries:Du,HypergeometricFunctions:xu,IRTools:Ru,IfElse:Mu,Inflate:Tu,InitialValues:Fu,IntegerMathUtils:Su,IntelOpenMP_jll:Nu,InteractiveUtils:ku,Interpolations:Au,IntervalSets:Cu,InverseFunctions:Ou,IrrationalConstants:Iu,IterTools:Lu,IteratorInterfaceExtensions:Pu,JLLWrappers:zu,JSON:"1.4.0",Jieko:qu,KernelAbstractions:Vu,KernelDensity:Bu,KernelFunctions:ju,Krylov:$u,LLVM:Uu,LLVMExtra_jll:Hu,LaTeXStrings:Gu,LayoutPointers:Ku,LazyArtifacts:Zu,LeftChildRightSiblingTrees:Wu,LibCURL:Xu,LibCURL_jll:Ju,LibGit2:Yu,LibGit2_jll:Qu,LibSSH2_jll:ef,LibTracyClient_jll:nf,Libdl:tf,Libtask:rf,LineSearch:of,LineSearches:sf,LinearAlgebra:af,LinearSolve:lf,LogDensityProblems:cf,LogDensityProblemsAD:uf,LogExpFunctions:ff,Logging:df,LoggingExtras:_f,Lux:vf,LuxCore:mf,LuxLib:gf,MCMCChains:pf,MCMCDiagnosticTools:hf,MKL_jll:bf,MLDataDevices:yf,MLJModelInterface:wf,MacroTools:Ef,ManualMemory:Df,MappedArrays:xf,Markdown:Rf,MaybeInplace:Mf,MbedTLS_jll:Tf,MicroCollections:Ff,Missings:Sf,MistyClosures:Nf,Mmap:kf,Mooncake:Af,Moshi:Cf,MozillaCACerts_jll:Of,MuladdMacro:If,NLSolversBase:Lf,NNlib:Pf,NaNMath:zf,NaturalSort:qf,NetworkOptions:Vf,NonlinearSolve:Bf,NonlinearSolveBase:jf,NonlinearSolveFirstOrder:$f,NonlinearSolveQuasiNewton:Uf,NonlinearSolveSpectralMethods:Hf,ObjectFile:Gf,OffsetArrays:Kf,OpenBLAS_jll:Zf,OpenLibm_jll:Wf,OpenSpecFun_jll:Xf,Optim:Jf,Optimisers:Yf,Optimization:Qf,OptimizationBase:ed,OptimizationOptimJL:nd,OrderedCollections:td,OrdinaryDiffEq:rd,OrdinaryDiffEqAdamsBashforthMoulton:od,OrdinaryDiffEqBDF:sd,OrdinaryDiffEqCore:id,OrdinaryDiffEqDefault:ad,OrdinaryDiffEqDifferentiation:ld,OrdinaryDiffEqExplicitRK:cd,OrdinaryDiffEqExponentialRK:ud,OrdinaryDiffEqExtrapolation:fd,OrdinaryDiffEqFIRK:dd,OrdinaryDiffEqFeagin:_d,OrdinaryDiffEqFunctionMap:vd,OrdinaryDiffEqHighOrderRK:md,OrdinaryDiffEqIMEXMultistep:gd,OrdinaryDiffEqLinear:pd,OrdinaryDiffEqLowOrderRK:hd,OrdinaryDiffEqLowStorageRK:bd,OrdinaryDiffEqNonlinearSolve:yd,OrdinaryDiffEqNordsieck:wd,OrdinaryDiffEqPDIRK:Ed,OrdinaryDiffEqPRK:Dd,OrdinaryDiffEqQPRK:xd,OrdinaryDiffEqRKN:Rd,OrdinaryDiffEqRosenbrock:Md,OrdinaryDiffEqSDIRK:Td,OrdinaryDiffEqSSPRK:Fd,OrdinaryDiffEqStabilizedIRK:Sd,OrdinaryDiffEqStabilizedRK:Nd,OrdinaryDiffEqSymplecticRK:kd,OrdinaryDiffEqTsit5:Ad,OrdinaryDiffEqVerner:Cd,PDMats:Od,Parsers:Id,Pkg:Ld,PoissonRandom:Pd,Polyester:zd,PolyesterWeave:qd,PositiveFactorizations:Vd,PreallocationTools:Bd,PrecompileTools:jd,Preferences:$d,PrettyTables:Ud,Primes:Hd,Printf:Gd,ProgressLogging:Kd,ProgressMeter:Zd,PtrArrays:Wd,QuadGK:Xd,REPL:Jd,Random:Yd,Random123:Qd,RandomNumbers:e1,RangeArrays:n1,Ratios:t1,ReactantCore:r1,RealDot:o1,RecipesBase:s1,RecursiveArrayTools:i1,Reexport:a1,Requires:l1,ResettableStacks:c1,ReverseDiff:u1,Richardson:f1,Rmath:d1,Rmath_jll:_1,Roots:v1,RuntimeGeneratedFunctions:m1,SHA:g1,SIMDTypes:p1,SSMProblems:h1,SciMLBase:b1,SciMLJacobianOperators:y1,SciMLLogging:w1,SciMLOperators:E1,SciMLPublic:D1,SciMLSensitivity:x1,SciMLStructures:R1,ScientificTypesBase:M1,ScopedValues:T1,Scratch:F1,Serialization:S1,Setfield:N1,SharedArrays:k1,SimpleNonlinearSolve:A1,SimpleTraits:C1,Sockets:O1,SortingAlgorithms:I1,SparseArrays:L1,SparseConnectivityTracer:P1,SparseInverseSubset:z1,SparseMatrixColorings:q1,SpecialFunctions:V1,SplittablesBase:B1,Static:j1,StaticArrayInterface:$1,StaticArrays:U1,StaticArraysCore:H1,StatisticalTraits:G1,Statistics:K1,StatsAPI:Z1,StatsBase:W1,StatsFuns:X1,StrideArraysCore:J1,StringManipulation:Y1,StructArrays:Q1,StructIO:e0,StructUtils:n0,StyledStrings:t0,SuiteSparse:r0,SuiteSparse_jll:o0,SymbolicIndexingInterface:s0,TOML:i0,TableTraits:a0,Tables:l0,Tar:c0,TensorCore:u0,TerminalLoggers:f0,Test:d0,ThreadingUtilities:_0,TimerOutputs:v0,Tracker:m0,Tracy:g0,Transducers:p0,TruncatedStacktraces:h0,Turing:b0,UUIDs:y0,Unicode:w0,UnsafeAtomics:E0,WeightInitializers:D0,WoodburyMatrices:x0,Zlib_jll:R0,Zygote:M0,ZygoteRules:T0,libblastrampoline_jll:F0,nghttp2_jll:S0,oneTBB_jll:N0,p7zip_jll:k0};function Fr(e){switch(e){case"FiniteDifferences":return 1;case"ForwardDiff":return 11;case"EnzymeFwd":return 12;case"MooncakeFwd":return 13;case"ReverseDiff":return 21;case"ReverseDiffCompiled":return 22;case"EnzymeRev":return 23;case"MooncakeRev":return 24;default:return 500}}function go(e,n){const t=Fr(e),r=Fr(n);return t<r?-1:t>r?1:e.localeCompare(n)}function Lt(e){return[...e.entries()].sort(([n,t],[r,o])=>go(n,r))}var C0=ue('<tr><td class="svelte-yinbl0"> </td><td class="version svelte-yinbl0"> </td></tr>'),O0=ue('<table class="svelte-yinbl0"><thead><tr><th class="svelte-yinbl0">Package</th><th class="svelte-yinbl0">Version</th></tr></thead><tbody></tbody></table>');function I0(e,n){_n(n,!1);let t=new Map;for(const[s,a]of Object.entries(A0))t.set(s,a===""?null:a);mo();var r=O0(),o=se(q(r));Mn(o,5,()=>Lt(t),Rn,(s,a,c)=>{let l=()=>E(a)[0],u=()=>E(a)[1];var v=C0();Sn(v,1,"svelte-yinbl0",null,{},{alt:c%2===1});var _=q(v),f=q(_),h=se(_),b=q(h);he(()=>{qe(f,l()),qe(b,u()===null?"":`v${u()}`)}),G(s,v)}),G(e,r),vn()}var L0=ue('<td class="model-name svelte-73y89f"> </td>');function P0(e,n){var t=L0();t.__click=function(...o){var s;(s=n.onToggle)==null||s.apply(this,o)};var r=q(t);he(()=>qe(r,n.name)),G(e,t)}ft(["click"]);function z0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tt,Sr;function q0(){if(Sr)return Tt;Sr=1;function e(i){return i instanceof Map?i.clear=i.delete=i.set=function(){throw new Error("map is read-only")}:i instanceof Set&&(i.add=i.clear=i.delete=function(){throw new Error("set is read-only")}),Object.freeze(i),Object.getOwnPropertyNames(i).forEach(d=>{const p=i[d],A=typeof p;(A==="object"||A==="function")&&!Object.isFrozen(p)&&e(p)}),i}class n{constructor(d){d.data===void 0&&(d.data={}),this.data=d.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(i,...d){const p=Object.create(null);for(const A in i)p[A]=i[A];return d.forEach(function(A){for(const W in A)p[W]=A[W]}),p}const o="</span>",s=i=>!!i.scope,a=(i,{prefix:d})=>{if(i.startsWith("language:"))return i.replace("language:","language-");if(i.includes(".")){const p=i.split(".");return[`${d}${p.shift()}`,...p.map((A,W)=>`${A}${"_".repeat(W+1)}`)].join(" ")}return`${d}${i}`};class c{constructor(d,p){this.buffer="",this.classPrefix=p.classPrefix,d.walk(this)}addText(d){this.buffer+=t(d)}openNode(d){if(!s(d))return;const p=a(d.scope,{prefix:this.classPrefix});this.span(p)}closeNode(d){s(d)&&(this.buffer+=o)}value(){return this.buffer}span(d){this.buffer+=`<span class="${d}">`}}const l=(i={})=>{const d={children:[]};return Object.assign(d,i),d};class u{constructor(){this.rootNode=l(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(d){this.top.children.push(d)}openNode(d){const p=l({scope:d});this.add(p),this.stack.push(p)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(d){return this.constructor._walk(d,this.rootNode)}static _walk(d,p){return typeof p=="string"?d.addText(p):p.children&&(d.openNode(p),p.children.forEach(A=>this._walk(d,A)),d.closeNode(p)),d}static _collapse(d){typeof d!="string"&&d.children&&(d.children.every(p=>typeof p=="string")?d.children=[d.children.join("")]:d.children.forEach(p=>{u._collapse(p)}))}}class v extends u{constructor(d){super(),this.options=d}addText(d){d!==""&&this.add(d)}startScope(d){this.openNode(d)}endScope(){this.closeNode()}__addSublanguage(d,p){const A=d.root;p&&(A.scope=`language:${p}`),this.add(A)}toHTML(){return new c(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(i){return i?typeof i=="string"?i:i.source:null}function f(i){return N("(?=",i,")")}function h(i){return N("(?:",i,")*")}function b(i){return N("(?:",i,")?")}function N(...i){return i.map(p=>_(p)).join("")}function T(i){const d=i[i.length-1];return typeof d=="object"&&d.constructor===Object?(i.splice(i.length-1,1),d):{}}function L(...i){return"("+(T(i).capture?"":"?:")+i.map(A=>_(A)).join("|")+")"}function V(i){return new RegExp(i.toString()+"|").exec("").length-1}function x(i,d){const p=i&&i.exec(d);return p&&p.index===0}const g=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function y(i,{joinWith:d}){let p=0;return i.map(A=>{p+=1;const W=p;let X=_(A),R="";for(;X.length>0;){const D=g.exec(X);if(!D){R+=X;break}R+=X.substring(0,D.index),X=X.substring(D.index+D[0].length),D[0][0]==="\\"&&D[1]?R+="\\"+String(Number(D[1])+W):(R+=D[0],D[0]==="("&&p++)}return R}).map(A=>`(${A})`).join(d)}const z=/\b\B/,M="[a-zA-Z]\\w*",O="[a-zA-Z_]\\w*",Z="\\b\\d+(\\.\\d+)?",fe="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ee="\\b(0b[01]+)",ne="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",de=(i={})=>{const d=/^#![ ]*\//;return i.binary&&(i.begin=N(d,/.*\b/,i.binary,/\b.*/)),r({scope:"meta",begin:d,end:/$/,relevance:0,"on:begin":(p,A)=>{p.index!==0&&A.ignoreMatch()}},i)},ye={begin:"\\\\[\\s\\S]",relevance:0},Me={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ye]},ve={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ye]},Te={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},De=function(i,d,p={}){const A=r({scope:"comment",begin:i,end:d,contains:[]},p);A.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const W=L("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return A.contains.push({begin:N(/[ ]+/,"(",W,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),A},pn=De("//","$"),Fe=De("/\\*","\\*/"),ie=De("#","$"),Se={scope:"number",begin:Z,relevance:0},hn={scope:"number",begin:fe,relevance:0},nn={scope:"number",begin:ee,relevance:0},_t={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ye,{begin:/\[/,end:/\]/,relevance:0,contains:[ye]}]},bn={scope:"title",begin:M,relevance:0},Cn={scope:"title",begin:O,relevance:0},vt={begin:"\\.\\s*"+O,relevance:0};var On=Object.freeze({__proto__:null,APOS_STRING_MODE:Me,BACKSLASH_ESCAPE:ye,BINARY_NUMBER_MODE:nn,BINARY_NUMBER_RE:ee,COMMENT:De,C_BLOCK_COMMENT_MODE:Fe,C_LINE_COMMENT_MODE:pn,C_NUMBER_MODE:hn,C_NUMBER_RE:fe,END_SAME_AS_BEGIN:function(i){return Object.assign(i,{"on:begin":(d,p)=>{p.data._beginMatch=d[1]},"on:end":(d,p)=>{p.data._beginMatch!==d[1]&&p.ignoreMatch()}})},HASH_COMMENT_MODE:ie,IDENT_RE:M,MATCH_NOTHING_RE:z,METHOD_GUARD:vt,NUMBER_MODE:Se,NUMBER_RE:Z,PHRASAL_WORDS_MODE:Te,QUOTE_STRING_MODE:ve,REGEXP_MODE:_t,RE_STARTERS_RE:ne,SHEBANG:de,TITLE_MODE:bn,UNDERSCORE_IDENT_RE:O,UNDERSCORE_TITLE_MODE:Cn});function yo(i,d){i.input[i.index-1]==="."&&d.ignoreMatch()}function wo(i,d){i.className!==void 0&&(i.scope=i.className,delete i.className)}function Eo(i,d){d&&i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",i.__beforeBegin=yo,i.keywords=i.keywords||i.beginKeywords,delete i.beginKeywords,i.relevance===void 0&&(i.relevance=0))}function Do(i,d){Array.isArray(i.illegal)&&(i.illegal=L(...i.illegal))}function xo(i,d){if(i.match){if(i.begin||i.end)throw new Error("begin & end are not supported with match");i.begin=i.match,delete i.match}}function Ro(i,d){i.relevance===void 0&&(i.relevance=1)}const Mo=(i,d)=>{if(!i.beforeMatch)return;if(i.starts)throw new Error("beforeMatch cannot be used with starts");const p=Object.assign({},i);Object.keys(i).forEach(A=>{delete i[A]}),i.keywords=p.keywords,i.begin=N(p.beforeMatch,f(p.begin)),i.starts={relevance:0,contains:[Object.assign(p,{endsParent:!0})]},i.relevance=0,delete p.beforeMatch},To=["of","and","for","in","not","or","if","then","parent","list","value"],Fo="keyword";function Jt(i,d,p=Fo){const A=Object.create(null);return typeof i=="string"?W(p,i.split(" ")):Array.isArray(i)?W(p,i):Object.keys(i).forEach(function(X){Object.assign(A,Jt(i[X],d,X))}),A;function W(X,R){d&&(R=R.map(D=>D.toLowerCase())),R.forEach(function(D){const k=D.split("|");A[k[0]]=[X,So(k[0],k[1])]})}}function So(i,d){return d?Number(d):No(i)?0:1}function No(i){return To.includes(i.toLowerCase())}const Yt={},Je=i=>{console.error(i)},Qt=(i,...d)=>{console.log(`WARN: ${i}`,...d)},tn=(i,d)=>{Yt[`${i}/${d}`]||(console.log(`Deprecated as of ${i}. ${d}`),Yt[`${i}/${d}`]=!0)},In=new Error;function er(i,d,{key:p}){let A=0;const W=i[p],X={},R={};for(let D=1;D<=d.length;D++)R[D+A]=W[D],X[D+A]=!0,A+=V(d[D-1]);i[p]=R,i[p]._emit=X,i[p]._multi=!0}function ko(i){if(Array.isArray(i.begin)){if(i.skip||i.excludeBegin||i.returnBegin)throw Je("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),In;if(typeof i.beginScope!="object"||i.beginScope===null)throw Je("beginScope must be object"),In;er(i,i.begin,{key:"beginScope"}),i.begin=y(i.begin,{joinWith:""})}}function Ao(i){if(Array.isArray(i.end)){if(i.skip||i.excludeEnd||i.returnEnd)throw Je("skip, excludeEnd, returnEnd not compatible with endScope: {}"),In;if(typeof i.endScope!="object"||i.endScope===null)throw Je("endScope must be object"),In;er(i,i.end,{key:"endScope"}),i.end=y(i.end,{joinWith:""})}}function Co(i){i.scope&&typeof i.scope=="object"&&i.scope!==null&&(i.beginScope=i.scope,delete i.scope)}function Oo(i){Co(i),typeof i.beginScope=="string"&&(i.beginScope={_wrap:i.beginScope}),typeof i.endScope=="string"&&(i.endScope={_wrap:i.endScope}),ko(i),Ao(i)}function Io(i){function d(R,D){return new RegExp(_(R),"m"+(i.case_insensitive?"i":"")+(i.unicodeRegex?"u":"")+(D?"g":""))}class p{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(D,k){k.position=this.position++,this.matchIndexes[this.matchAt]=k,this.regexes.push([k,D]),this.matchAt+=V(D)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const D=this.regexes.map(k=>k[1]);this.matcherRe=d(y(D,{joinWith:"|"}),!0),this.lastIndex=0}exec(D){this.matcherRe.lastIndex=this.lastIndex;const k=this.matcherRe.exec(D);if(!k)return null;const te=k.findIndex((yn,gt)=>gt>0&&yn!==void 0),J=this.matchIndexes[te];return k.splice(0,te),Object.assign(k,J)}}class A{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(D){if(this.multiRegexes[D])return this.multiRegexes[D];const k=new p;return this.rules.slice(D).forEach(([te,J])=>k.addRule(te,J)),k.compile(),this.multiRegexes[D]=k,k}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(D,k){this.rules.push([D,k]),k.type==="begin"&&this.count++}exec(D){const k=this.getMatcher(this.regexIndex);k.lastIndex=this.lastIndex;let te=k.exec(D);if(this.resumingScanAtSamePosition()&&!(te&&te.index===this.lastIndex)){const J=this.getMatcher(0);J.lastIndex=this.lastIndex+1,te=J.exec(D)}return te&&(this.regexIndex+=te.position+1,this.regexIndex===this.count&&this.considerAll()),te}}function W(R){const D=new A;return R.contains.forEach(k=>D.addRule(k.begin,{rule:k,type:"begin"})),R.terminatorEnd&&D.addRule(R.terminatorEnd,{type:"end"}),R.illegal&&D.addRule(R.illegal,{type:"illegal"}),D}function X(R,D){const k=R;if(R.isCompiled)return k;[wo,xo,Oo,Mo].forEach(J=>J(R,D)),i.compilerExtensions.forEach(J=>J(R,D)),R.__beforeBegin=null,[Eo,Do,Ro].forEach(J=>J(R,D)),R.isCompiled=!0;let te=null;return typeof R.keywords=="object"&&R.keywords.$pattern&&(R.keywords=Object.assign({},R.keywords),te=R.keywords.$pattern,delete R.keywords.$pattern),te=te||/\w+/,R.keywords&&(R.keywords=Jt(R.keywords,i.case_insensitive)),k.keywordPatternRe=d(te,!0),D&&(R.begin||(R.begin=/\B|\b/),k.beginRe=d(k.begin),!R.end&&!R.endsWithParent&&(R.end=/\B|\b/),R.end&&(k.endRe=d(k.end)),k.terminatorEnd=_(k.end)||"",R.endsWithParent&&D.terminatorEnd&&(k.terminatorEnd+=(R.end?"|":"")+D.terminatorEnd)),R.illegal&&(k.illegalRe=d(R.illegal)),R.contains||(R.contains=[]),R.contains=[].concat(...R.contains.map(function(J){return Lo(J==="self"?R:J)})),R.contains.forEach(function(J){X(J,k)}),R.starts&&X(R.starts,D),k.matcher=W(k),k}if(i.compilerExtensions||(i.compilerExtensions=[]),i.contains&&i.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return i.classNameAliases=r(i.classNameAliases||{}),X(i)}function nr(i){return i?i.endsWithParent||nr(i.starts):!1}function Lo(i){return i.variants&&!i.cachedVariants&&(i.cachedVariants=i.variants.map(function(d){return r(i,{variants:null},d)})),i.cachedVariants?i.cachedVariants:nr(i)?r(i,{starts:i.starts?r(i.starts):null}):Object.isFrozen(i)?r(i):i}var Po="11.11.1";class zo extends Error{constructor(d,p){super(d),this.name="HTMLInjectionError",this.html=p}}const mt=t,tr=r,rr=Symbol("nomatch"),qo=7,or=function(i){const d=Object.create(null),p=Object.create(null),A=[];let W=!0;const X="Could not find the language '{}', did you forget to load/include a language module?",R={disableAutodetect:!0,name:"Plain text",contains:[]};let D={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:v};function k(m){return D.noHighlightRe.test(m)}function te(m){let S=m.className+" ";S+=m.parentNode?m.parentNode.className:"";const P=D.languageDetectRe.exec(S);if(P){const U=je(P[1]);return U||(Qt(X.replace("{}",P[1])),Qt("Falling back to no-highlight mode for this block.",m)),U?P[1]:"no-highlight"}return S.split(/\s+/).find(U=>k(U)||je(U))}function J(m,S,P){let U="",Q="";typeof S=="object"?(U=m,P=S.ignoreIllegals,Q=S.language):(tn("10.7.0","highlight(lang, code, ...args) has been deprecated."),tn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),Q=m,U=S),P===void 0&&(P=!0);const xe={code:U,language:Q};Pn("before:highlight",xe);const $e=xe.result?xe.result:yn(xe.language,xe.code,P);return $e.code=xe.code,Pn("after:highlight",$e),$e}function yn(m,S,P,U){const Q=Object.create(null);function xe(w,F){return w.keywords[F]}function $e(){if(!C.keywords){re.addText(H);return}let w=0;C.keywordPatternRe.lastIndex=0;let F=C.keywordPatternRe.exec(H),I="";for(;F;){I+=H.substring(w,F.index);const B=ke.case_insensitive?F[0].toLowerCase():F[0],oe=xe(C,B);if(oe){const[Le,ts]=oe;if(re.addText(I),I="",Q[B]=(Q[B]||0)+1,Q[B]<=qo&&(Vn+=ts),Le.startsWith("_"))I+=F[0];else{const rs=ke.classNameAliases[Le]||Le;Ne(F[0],rs)}}else I+=F[0];w=C.keywordPatternRe.lastIndex,F=C.keywordPatternRe.exec(H)}I+=H.substring(w),re.addText(I)}function zn(){if(H==="")return;let w=null;if(typeof C.subLanguage=="string"){if(!d[C.subLanguage]){re.addText(H);return}w=yn(C.subLanguage,H,!0,dr[C.subLanguage]),dr[C.subLanguage]=w._top}else w=pt(H,C.subLanguage.length?C.subLanguage:null);C.relevance>0&&(Vn+=w.relevance),re.__addSublanguage(w._emitter,w.language)}function me(){C.subLanguage!=null?zn():$e(),H=""}function Ne(w,F){w!==""&&(re.startScope(F),re.addText(w),re.endScope())}function lr(w,F){let I=1;const B=F.length-1;for(;I<=B;){if(!w._emit[I]){I++;continue}const oe=ke.classNameAliases[w[I]]||w[I],Le=F[I];oe?Ne(Le,oe):(H=Le,$e(),H=""),I++}}function cr(w,F){return w.scope&&typeof w.scope=="string"&&re.openNode(ke.classNameAliases[w.scope]||w.scope),w.beginScope&&(w.beginScope._wrap?(Ne(H,ke.classNameAliases[w.beginScope._wrap]||w.beginScope._wrap),H=""):w.beginScope._multi&&(lr(w.beginScope,F),H="")),C=Object.create(w,{parent:{value:C}}),C}function ur(w,F,I){let B=x(w.endRe,I);if(B){if(w["on:end"]){const oe=new n(w);w["on:end"](F,oe),oe.isMatchIgnored&&(B=!1)}if(B){for(;w.endsParent&&w.parent;)w=w.parent;return w}}if(w.endsWithParent)return ur(w.parent,F,I)}function Jo(w){return C.matcher.regexIndex===0?(H+=w[0],1):(wt=!0,0)}function Yo(w){const F=w[0],I=w.rule,B=new n(I),oe=[I.__beforeBegin,I["on:begin"]];for(const Le of oe)if(Le&&(Le(w,B),B.isMatchIgnored))return Jo(F);return I.skip?H+=F:(I.excludeBegin&&(H+=F),me(),!I.returnBegin&&!I.excludeBegin&&(H=F)),cr(I,w),I.returnBegin?0:F.length}function Qo(w){const F=w[0],I=S.substring(w.index),B=ur(C,w,I);if(!B)return rr;const oe=C;C.endScope&&C.endScope._wrap?(me(),Ne(F,C.endScope._wrap)):C.endScope&&C.endScope._multi?(me(),lr(C.endScope,w)):oe.skip?H+=F:(oe.returnEnd||oe.excludeEnd||(H+=F),me(),oe.excludeEnd&&(H=F));do C.scope&&re.closeNode(),!C.skip&&!C.subLanguage&&(Vn+=C.relevance),C=C.parent;while(C!==B.parent);return B.starts&&cr(B.starts,w),oe.returnEnd?0:F.length}function es(){const w=[];for(let F=C;F!==ke;F=F.parent)F.scope&&w.unshift(F.scope);w.forEach(F=>re.openNode(F))}let qn={};function fr(w,F){const I=F&&F[0];if(H+=w,I==null)return me(),0;if(qn.type==="begin"&&F.type==="end"&&qn.index===F.index&&I===""){if(H+=S.slice(F.index,F.index+1),!W){const B=new Error(`0 width match regex (${m})`);throw B.languageName=m,B.badRule=qn.rule,B}return 1}if(qn=F,F.type==="begin")return Yo(F);if(F.type==="illegal"&&!P){const B=new Error('Illegal lexeme "'+I+'" for mode "'+(C.scope||"<unnamed>")+'"');throw B.mode=C,B}else if(F.type==="end"){const B=Qo(F);if(B!==rr)return B}if(F.type==="illegal"&&I==="")return H+=`
`,1;if(yt>1e5&&yt>F.index*3)throw new Error("potential infinite loop, way more iterations than matches");return H+=I,I.length}const ke=je(m);if(!ke)throw Je(X.replace("{}",m)),new Error('Unknown language: "'+m+'"');const ns=Io(ke);let bt="",C=U||ns;const dr={},re=new D.__emitter(D);es();let H="",Vn=0,Ye=0,yt=0,wt=!1;try{if(ke.__emitTokens)ke.__emitTokens(S,re);else{for(C.matcher.considerAll();;){yt++,wt?wt=!1:C.matcher.considerAll(),C.matcher.lastIndex=Ye;const w=C.matcher.exec(S);if(!w)break;const F=S.substring(Ye,w.index),I=fr(F,w);Ye=w.index+I}fr(S.substring(Ye))}return re.finalize(),bt=re.toHTML(),{language:m,value:bt,relevance:Vn,illegal:!1,_emitter:re,_top:C}}catch(w){if(w.message&&w.message.includes("Illegal"))return{language:m,value:mt(S),illegal:!0,relevance:0,_illegalBy:{message:w.message,index:Ye,context:S.slice(Ye-100,Ye+100),mode:w.mode,resultSoFar:bt},_emitter:re};if(W)return{language:m,value:mt(S),illegal:!1,relevance:0,errorRaised:w,_emitter:re,_top:C};throw w}}function gt(m){const S={value:mt(m),illegal:!1,relevance:0,_top:R,_emitter:new D.__emitter(D)};return S._emitter.addText(m),S}function pt(m,S){S=S||D.languages||Object.keys(d);const P=gt(m),U=S.filter(je).filter(ar).map(me=>yn(me,m,!1));U.unshift(P);const Q=U.sort((me,Ne)=>{if(me.relevance!==Ne.relevance)return Ne.relevance-me.relevance;if(me.language&&Ne.language){if(je(me.language).supersetOf===Ne.language)return 1;if(je(Ne.language).supersetOf===me.language)return-1}return 0}),[xe,$e]=Q,zn=xe;return zn.secondBest=$e,zn}function Vo(m,S,P){const U=S&&p[S]||P;m.classList.add("hljs"),m.classList.add(`language-${U}`)}function ht(m){let S=null;const P=te(m);if(k(P))return;if(Pn("before:highlightElement",{el:m,language:P}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(D.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),D.throwUnescapedHTML))throw new zo("One of your code blocks includes unescaped HTML.",m.innerHTML);S=m;const U=S.textContent,Q=P?J(U,{language:P,ignoreIllegals:!0}):pt(U);m.innerHTML=Q.value,m.dataset.highlighted="yes",Vo(m,P,Q.language),m.result={language:Q.language,re:Q.relevance,relevance:Q.relevance},Q.secondBest&&(m.secondBest={language:Q.secondBest.language,relevance:Q.secondBest.relevance}),Pn("after:highlightElement",{el:m,result:Q,text:U})}function Bo(m){D=tr(D,m)}const jo=()=>{Ln(),tn("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function $o(){Ln(),tn("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let sr=!1;function Ln(){function m(){Ln()}if(document.readyState==="loading"){sr||window.addEventListener("DOMContentLoaded",m,!1),sr=!0;return}document.querySelectorAll(D.cssSelector).forEach(ht)}function Uo(m,S){let P=null;try{P=S(i)}catch(U){if(Je("Language definition for '{}' could not be registered.".replace("{}",m)),W)Je(U);else throw U;P=R}P.name||(P.name=m),d[m]=P,P.rawDefinition=S.bind(null,i),P.aliases&&ir(P.aliases,{languageName:m})}function Ho(m){delete d[m];for(const S of Object.keys(p))p[S]===m&&delete p[S]}function Go(){return Object.keys(d)}function je(m){return m=(m||"").toLowerCase(),d[m]||d[p[m]]}function ir(m,{languageName:S}){typeof m=="string"&&(m=[m]),m.forEach(P=>{p[P.toLowerCase()]=S})}function ar(m){const S=je(m);return S&&!S.disableAutodetect}function Ko(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=S=>{m["before:highlightBlock"](Object.assign({block:S.el},S))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=S=>{m["after:highlightBlock"](Object.assign({block:S.el},S))})}function Zo(m){Ko(m),A.push(m)}function Wo(m){const S=A.indexOf(m);S!==-1&&A.splice(S,1)}function Pn(m,S){const P=m;A.forEach(function(U){U[P]&&U[P](S)})}function Xo(m){return tn("10.7.0","highlightBlock will be removed entirely in v12.0"),tn("10.7.0","Please use highlightElement now."),ht(m)}Object.assign(i,{highlight:J,highlightAuto:pt,highlightAll:Ln,highlightElement:ht,highlightBlock:Xo,configure:Bo,initHighlighting:jo,initHighlightingOnLoad:$o,registerLanguage:Uo,unregisterLanguage:Ho,listLanguages:Go,getLanguage:je,registerAliases:ir,autoDetection:ar,inherit:tr,addPlugin:Zo,removePlugin:Wo}),i.debugMode=function(){W=!1},i.safeMode=function(){W=!0},i.versionString=Po,i.regex={concat:N,lookahead:f,either:L,optional:b,anyNumberOfTimes:h};for(const m in On)typeof On[m]=="object"&&e(On[m]);return Object.assign(i,On),i},rn=or({});return rn.newInstance=()=>or({}),Tt=rn,rn.HighlightJS=rn,rn.default=rn,Tt}var V0=q0();const Nr=z0(V0);var B0=ue("<pre><code><!></code></pre>");function j0(e,n){const t=et(n,["children","$$slots","$$events","$$legacy"]),r=et(t,["code","highlighted","languageName","langtag"]);let o=Ke(n,"code",8),s=Ke(n,"highlighted",8),a=Ke(n,"languageName",8,"plaintext"),c=Ke(n,"langtag",8,!1);var l=B0();let u;var v=q(l);Sn(v,1,"",null,{},{hljs:!0});var _=q(v);{var f=b=>{var N=Yn(),T=an(N);bi(T,s),G(b,N)},h=b=>{var N=It();he(()=>qe(N,o())),G(b,N)};Ue(_,b=>{s()?b(f):b(h,!1)})}he(b=>u=Mi(l,u,{"data-language":a(),...r,[xn]:b},"svelte-1w9vok"),[()=>({langtag:c()})],Ut),G(e,l)}function $0(e,n){const t=et(n,["children","$$slots","$$events","$$legacy"]),r=et(t,["language","code","langtag"]);_n(n,!1);let o=Ke(n,"language",8),s=Ke(n,"code",8),a=Ke(n,"langtag",8,!1);const c=Ci();let l=Ht("");Oi(()=>{E(l)&&c("highlight",{highlighted:E(l)})}),$s(()=>(At(o()),At(s())),()=>{Nr.registerLanguage(o().name,o().register),Y(l,Nr.highlight(s(),{language:o().name}).value)}),Us(),mo();var u=Yn(),v=an(u);yi(v,n,"default",{get highlighted(){return E(l)}},_=>{j0(_,ki(()=>r,{get languageName(){return o().name},get langtag(){return a()},get highlighted(){return E(l)},get code(){return s()}}))}),G(e,u),vn()}function U0(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",s={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},a={keywords:s,illegal:/<\//},c={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},l={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},u={className:"subst",begin:/\$\(/,end:/\)/,keywords:s},v={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,u,v],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},f={className:"string",contains:[e.BACKSLASH_ESCAPE,u,v],begin:"`",end:"`"},h={className:"meta",begin:"@"+n},b={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return a.name="Julia",a.contains=[c,l,_,f,h,b,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],u.contains=a.contains,a}const H0={name:"julia",register:U0};function po(e){let n,t,r;if(e<.5){const o=e*2;n=Math.round(34+o*166),t=Math.round(197+o*-17),r=Math.round(94+o*-94)}else{const o=(e-.5)*2;n=Math.round(200+o*20),t=Math.round(180-o*180),r=Math.round(0+o*30)}return[n,t,r]}function G0(e,n,t){if(typeof e!="number")return"";const r=[...n.values()].filter(b=>typeof b=="number");if(r.length<2)return"";const o=Math.min(...r),s=Math.max(...r),a=Math.log(Math.max(o,.001)),c=Math.log(Math.max(s,.001));if(c===a)return"";const l=Math.log(Math.max(e,.001)),u=Math.max(0,Math.min(1,(l-a)/(c-a))),[v,_,f]=po(u);return`background-color: rgba(${v}, ${_}, ${f}, ${t==="dark"?.3:.25})`}function K0(e,n=10){const t=e==="dark"?.5:.4,r=[];for(let o=0;o<=n;o++){const s=o/n,[a,c,l]=po(s);r.push(`rgba(${a}, ${c}, ${l}, ${t})`)}return r}const Z0=[{url:"https://github.com/EnzymeAD/Enzyme.jl/issues/1995",affects:[["assume_mvnormal","EnzymeFwd"],["assume_wishart","EnzymeFwd"]]},{url:"https://github.com/chalk-lab/Mooncake.jl/issues/570",affects:[["multithreaded","MooncakeFwd"],["multithreaded","MooncakeRvs"]]}],W0=[],ho=new Map;for(const e of Z0)for(const[n,t]of e.affects)ho.set(`${n}__${t}`,e.url);const bo=new Map;for(const e of W0)for(const[n,t]of e.affects)bo.set(`${n}__${t}`,e.value);function kr(e,n){return ho.get(`${e}__${n}`)}function X0(e,n){return bo.get(`${e}__${n}`)}var J0=(e,n,t)=>n(E(t)),Y0=ue('<th class="sortable svelte-6nl5bt" title="Click to sort"> <span class="sort-indicator svelte-6nl5bt"><!></span></th>'),Q0=ue('<td class="svelte-6nl5bt"> </td>'),e_=ue('<a class="issue svelte-6nl5bt" target="_blank">(?)</a>'),n_=ue('<td class="svelte-6nl5bt"><!> <span> </span></td>'),t_=(e,n,t,r)=>n(t.modelDefinitions[r()]),r_=dt('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'),o_=dt('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'),s_=ue('<tr class="definition-row svelte-6nl5bt"><td class="svelte-6nl5bt"><div class="definition-content svelte-6nl5bt"><div class="code-wrapper svelte-6nl5bt"><!></div> <button class="copy-btn svelte-6nl5bt" aria-label="Copy to clipboard" title="Copy code"><!></button></div></td></tr>'),i_=ue("<tr><!><!></tr> <!>",1),a_=ue('<div class="table-scroll svelte-6nl5bt"><table class="svelte-6nl5bt"><thead><tr class="svelte-6nl5bt"><th class="model-col-header svelte-6nl5bt">Model</th><!></tr></thead><tbody></tbody></table></div>');function l_(e,n){_n(n,!0);const t=sn(()=>[...n.data.keys()]),r=sn(()=>n.data.size>0?[...n.data.get(E(t)[0]).keys()].sort((T,L)=>go(T,L)):[]);let o=pe(Pe({column:null,direction:null})),s=pe(null),a=pe(!1);function c(T){navigator.clipboard.writeText(T),Y(a,!0),setTimeout(()=>{Y(a,!1)},2e3)}function l(T){E(o).column!==T?Y(o,{column:T,direction:"asc"},!0):E(o).direction==="asc"?Y(o,{column:T,direction:"desc"},!0):Y(o,{column:null,direction:null},!0)}const u=sn(()=>{const T=Lt(n.data);if(!E(o).column||!E(o).direction)return T;const L=E(o).column,V=E(o).direction;return[...T].sort(([,x],[,g])=>{const y=x.get(L),z=g.get(L),M=typeof y=="number",O=typeof z=="number";return!M&&!O?0:M?O?V==="asc"?y-z:z-y:-1:1})});var v=a_(),_=q(v),f=q(_),h=q(f),b=se(q(h));Mn(b,17,()=>E(r),Rn,(T,L)=>{var V=Y0();V.__click=[J0,l,L];var x=q(V),g=se(x),y=q(g);{var z=M=>{var O=Yn(),Z=an(O);{var fe=ne=>{var de=It("▲");G(ne,de)},ee=ne=>{var de=It("▼");G(ne,de)};Ue(Z,ne=>{E(o).direction==="asc"?ne(fe):ne(ee,!1)})}G(M,O)};Ue(y,M=>{E(o).column===E(L)&&M(z)})}he(()=>qe(x,`${E(L)??""} `)),G(T,V)});var N=se(f);Mn(N,21,()=>E(u),Rn,(T,L,V)=>{let x=()=>E(L)[0],g=()=>E(L)[1];var y=i_(),z=an(y);Sn(z,1,"svelte-6nl5bt",null,{},{alt:V%2===1});var M=q(z);P0(M,{get name(){return x()},onToggle:()=>Y(s,E(s)===x()?null:x(),!0)});var O=se(M);Mn(O,17,()=>Lt(g()),Rn,(ee,ne)=>{let de=()=>E(ne)[0],ye=()=>E(ne)[1];var Me=Yn();const ve=sn(()=>X0(x(),de())??ye());var Te=an(Me);{var De=Fe=>{var ie=Q0(),Se=q(ie);he((hn,nn)=>{Xt(ie,hn),qe(Se,nn)},[()=>G0(E(ve),g(),n.theme),()=>E(ve).toFixed(3)]),G(Fe,ie)},pn=Fe=>{var ie=n_(),Se=q(ie);{var hn=bn=>{var Cn=e_();he(vt=>Qn(Cn,"href",vt),[()=>kr(x(),de())]),G(bn,Cn)};Ue(Se,bn=>{kr(x(),de())&&bn(hn)})}var nn=se(Se,2),_t=q(nn);he(()=>{Sn(nn,1,co(E(ve)==="NaN"?"nan":E(ve)),"svelte-6nl5bt"),qe(_t,E(ve))}),G(Fe,ie)};Ue(Te,Fe=>{typeof E(ve)=="number"?Fe(De):Fe(pn,!1)})}G(ee,Me)});var Z=se(z,2);{var fe=ee=>{var ne=s_(),de=q(ne),ye=q(de),Me=q(ye),ve=q(Me);$0(ve,{language:H0,get code(){return n.modelDefinitions[x()]}});var Te=se(Me,2);Te.__click=[t_,c,n,x];var De=q(Te);{var pn=ie=>{var Se=r_();G(ie,Se)},Fe=ie=>{var Se=o_();G(ie,Se)};Ue(De,ie=>{E(a)?ie(pn):ie(Fe,!1)})}he(()=>{Qn(de,"colspan",E(r).length+1),Te.disabled=E(a)}),G(ee,ne)};Ue(Z,ee=>{E(s)===x()&&ee(fe)})}G(T,y)}),G(e,v),vn()}ft(["click"]);var c_=ue('<div class="legend svelte-10rqhbc"><div class="gradient-section svelte-10rqhbc"><span class="label svelte-10rqhbc">Faster</span> <div class="gradient-bar svelte-10rqhbc"></div> <span class="label svelte-10rqhbc">Slower</span></div> <div class="divider svelte-10rqhbc"></div> <div class="status-labels svelte-10rqhbc"><span class="status error svelte-10rqhbc">error</span> <span class="status wrong svelte-10rqhbc">wrong</span> <span class="status nan svelte-10rqhbc">NaN</span></div></div>');function u_(e,n){_n(n,!0);const t=sn(()=>()=>`linear-gradient(to right, ${K0(n.theme).join(", ")})`);var r=c_(),o=q(r),s=se(q(o),2);he(a=>Xt(s,`background: ${a??""}`),[()=>E(t)()]),G(e,r),vn()}function f_(e,n){Y(n,E(n)==="light"?"dark":"light",!0),document.documentElement.setAttribute("data-theme",E(n)),localStorage.setItem("theme",E(n))}var d_=dt('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'),__=dt('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'),v_=ue('<h3 class="category-heading svelte-1wqfdel"> </h3> <!>',1),m_=ue('<p class="no-results svelte-1wqfdel"> </p>'),g_=ue(`<div id="main-wrapper" class="svelte-1wqfdel"><main class="svelte-1wqfdel"><div class="header svelte-1wqfdel"><div class="title-area svelte-1wqfdel"><h1 class="svelte-1wqfdel">Turing AD tests</h1> <nav class="nav-links svelte-1wqfdel"><a href="https://turinglang.org/docs" class="svelte-1wqfdel">Turing.jl Docs</a> <a href="https://github.com/TuringLang/Turing.jl" class="svelte-1wqfdel">Turing.jl GitHub</a> <a href="https://github.com/TuringLang/ADTests" class="svelte-1wqfdel">ADTests GitHub</a></nav></div> <button class="theme-toggle svelte-1wqfdel" aria-label="Toggle Dark Mode" title="Toggle theme"><!></button></div> <p class="intro svelte-1wqfdel">A comparison of how different AD backends perform on <a href="https://turinglang.org/docs">Turing.jl</a> models.
            This does not imply any endorsement; for general AD comparisons see <a href="https://github.com/gradbench/gradbench" target="_blank">GradBench</a>.</p> <div class="info-card svelte-1wqfdel"><h4 class="svelte-1wqfdel">Reading the table</h4> <ul class="svelte-1wqfdel"><li class="svelte-1wqfdel">Click model names to see their definitions.</li> <li class="svelte-1wqfdel"><b>Numbers</b> = gradient time / primal time. <b>Smaller is faster.</b></li> <li class="svelte-1wqfdel"><span class="wrong svelte-1wqfdel">wrong</span> = AD ran but gave an incorrect result
                    (compared against FiniteDifferences).</li> <li class="svelte-1wqfdel"><span class="error svelte-1wqfdel">error</span> = AD failed to run.</li> <li class="svelte-1wqfdel"><span class="issue-example svelte-1wqfdel">(?)</span> links to a GitHub issue describing the problem.</li></ul></div> <div class="warning svelte-1wqfdel">Note: Results are from Julia 1.11.</div> <div class="results-header svelte-1wqfdel"><h2 class="svelte-1wqfdel">Results</h2> <a class="download-link svelte-1wqfdel" href="adtests.json" target="_blank" download=""><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> JSON</a></div> <div class="controls svelte-1wqfdel"><input type="search" class="search-input svelte-1wqfdel" placeholder="Filter models..."> <!></div> <!> <h2>Manifest</h2> <p class="secondary-text svelte-1wqfdel">Package versions used for the tests above:</p> <!></main></div>`);function p_(e,n){_n(n,!0);const t=typeof document<"u"&&(localStorage.getItem("theme")||document.documentElement.getAttribute("data-theme"))||"light";typeof document<"u"&&document.documentElement.setAttribute("data-theme",t);let r=pe(Pe(t)),o=new Map;for(const[g,y]of Object.entries(Ia)){let z=y.__category__;delete y.__category__;let M=new Map;for(const[O,Z]of Object.entries(y))M.set(O,Z);o.has(z)||o.set(z,new Map),o.get(z).set(g,M)}let s=new Map([...o.entries()].sort()),a=pe("");const c=sn(()=>{const g=E(a).trim().toLowerCase();if(!g)return s;const y=new Map;for(const[z,M]of s){const O=new Map;for(const[Z,fe]of M)Z.toLowerCase().includes(g)&&O.set(Z,fe);O.size>0&&y.set(z,O)}return y});var l=g_(),u=q(l),v=q(u),_=se(q(v),2);_.__click=[f_,r];var f=q(_);{var h=g=>{var y=d_();G(g,y)},b=g=>{var y=__();G(g,y)};Ue(f,g=>{E(r)==="dark"?g(h):g(b,!1)})}var N=se(v,10),T=q(N),L=se(T,2);u_(L,{get theme(){return E(r)}});var V=se(N,2);Mn(V,17,()=>E(c).entries(),Rn,(g,y)=>{let z=()=>E(y)[0],M=()=>E(y)[1];var O=v_(),Z=an(O),fe=q(Z),ee=se(Z,2);l_(ee,{get data(){return M()},modelDefinitions:Ol,get theme(){return E(r)}}),he(()=>qe(fe,z())),G(g,O)},g=>{var y=m_(),z=q(y);he(()=>qe(z,`No models match "${E(a)??""}".`)),G(g,y)});var x=se(V,6);I0(x,{}),Ti(T,()=>E(a),g=>Y(a,g)),G(e,l),vn()}ft(["click"]);di(p_,{target:document.getElementById("app")});
