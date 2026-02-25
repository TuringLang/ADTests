(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const _r=!1;var nt=Array.isArray,ts=Array.prototype.indexOf,Pt=Array.from,rs=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,Cr=Object.getOwnPropertyDescriptors,os=Object.prototype,ss=Array.prototype,zt=Object.getPrototypeOf,mr=Object.isExtensible;function wn(e){return typeof e=="function"}function is(e){return e()}function St(e){for(var n=0;n<e.length;n++)e[n]()}const Me=2,Ar=4,tt=8,Vt=16,Be=32,dn=64,Un=128,be=256,Hn=512,ce=1024,Oe=2048,Xe=4096,ze=8192,rt=16384,as=32768,qt=65536,ls=1<<17,cs=1<<19,Or=1<<20,Ft=1<<21,Qe=Symbol("$state"),Ir=Symbol("legacy props"),us=Symbol("");function Lr(e){return e===this.v}function fs(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Bt(e){return!fs(e,this.v)}function ds(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function _s(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ms(e){throw new Error("https://svelte.dev/e/effect_orphan")}function vs(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function gs(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function ps(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function hs(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function bs(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ys(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Nn=!1,ws=!1;function Es(){Nn=!0}const jt=1,$t=2,Pr=4,Ds=8,xs=16,Ms=1,Rs=2,zr=4,Ts=8,Ss=16,Fs=1,Ns=2,_e=Symbol(),ks="http://www.w3.org/1999/xhtml",Cs="@attach";function Vr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let K=null;function vr(e){K=e}function _n(e,n=!1,t){var r=K={p:K,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};Nn&&!n&&(K.l={s:null,u:null,r1:[],r2:cn(!1)}),zs(()=>{r.d=!0})}function mn(e){const n=K;if(n!==null){const a=n.e;if(a!==null){var t=j,r=$;n.e=null;try{for(var o=0;o<a.length;o++){var s=a[o];We(s.effect),Ie(s.reaction),Gt(s.fn)}}finally{We(t),Ie(r)}}K=n.p,n.m=!0}return{}}function kn(){return!Nn||K!==null&&K.l===null}function Pe(e){if(typeof e!="object"||e===null||Qe in e)return e;const n=zt(e);if(n!==os&&n!==ss)return e;var t=new Map,r=nt(e),o=pe(0),s=$,a=c=>{var l=$;Ie(s);var u=c();return Ie(l),u};return r&&t.set("length",pe(e.length)),new Proxy(e,{defineProperty(c,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&hs();var m=t.get(l);return m===void 0?(m=a(()=>pe(u.value)),t.set(l,m)):Y(m,a(()=>Pe(u.value))),!0},deleteProperty(c,l){var u=t.get(l);if(u===void 0)l in c&&(t.set(l,a(()=>pe(_e))),Et(o));else{if(r&&typeof l=="string"){var m=t.get("length"),_=Number(l);Number.isInteger(_)&&_<m.v&&Y(m,_)}Y(u,_e),Et(o)}return!0},get(c,l,u){var h;if(l===Qe)return e;var m=t.get(l),_=l in c;if(m===void 0&&(!_||(h=Ze(c,l))!=null&&h.writable)&&(m=a(()=>pe(Pe(_?c[l]:_e))),t.set(l,m)),m!==void 0){var f=E(m);return f===_e?void 0:f}return Reflect.get(c,l,u)},getOwnPropertyDescriptor(c,l){var u=Reflect.getOwnPropertyDescriptor(c,l);if(u&&"value"in u){var m=t.get(l);m&&(u.value=E(m))}else if(u===void 0){var _=t.get(l),f=_==null?void 0:_.v;if(_!==void 0&&f!==_e)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return u},has(c,l){var f;if(l===Qe)return!0;var u=t.get(l),m=u!==void 0&&u.v!==_e||Reflect.has(c,l);if(u!==void 0||j!==null&&(!m||(f=Ze(c,l))!=null&&f.writable)){u===void 0&&(u=a(()=>pe(m?Pe(c[l]):_e)),t.set(l,u));var _=E(u);if(_===_e)return!1}return m},set(c,l,u,m){var q;var _=t.get(l),f=l in c;if(r&&l==="length")for(var h=u;h<_.v;h+=1){var b=t.get(h+"");b!==void 0?Y(b,_e):h in c&&(b=a(()=>pe(_e)),t.set(h+"",b))}_===void 0?(!f||(q=Ze(c,l))!=null&&q.writable)&&(_=a(()=>pe(void 0)),Y(_,a(()=>Pe(u))),t.set(l,_)):(f=_.v!==_e,Y(_,a(()=>Pe(u))));var N=Reflect.getOwnPropertyDescriptor(c,l);if(N!=null&&N.set&&N.set.call(m,u),!f){if(r&&typeof l=="string"){var S=t.get("length"),L=Number(l);Number.isInteger(L)&&L>=S.v&&Y(S,L+1)}Et(o)}return!0},ownKeys(c){E(o);var l=Reflect.ownKeys(c).filter(_=>{var f=t.get(_);return f===void 0||f.v!==_e});for(var[u,m]of t)m.v!==_e&&!(u in c)&&l.push(u);return l},setPrototypeOf(){bs()}})}function Et(e,n=1){Y(e,e.v+n)}function ln(e){var n=Me|Oe,t=$!==null&&($.f&Me)!==0?$:null;return j===null||t!==null&&(t.f&be)!==0?n|=be:j.f|=Or,{ctx:K,deps:null,effects:null,equals:Lr,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??j}}function sn(e){const n=ln(e);return eo(n),n}function Ut(e){const n=ln(e);return n.equals=Bt,n}function qr(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)qe(n[t])}}function As(e){for(var n=e.parent;n!==null;){if((n.f&Me)===0)return n;n=n.parent}return null}function Br(e){var n,t=j;We(As(e));try{qr(e),n=oo(e)}finally{We(t)}return n}function jr(e){var n=Br(e),t=(Ge||(e.f&be)!==0)&&e.deps!==null?Xe:ce;Ee(e,t),e.equals(n)||(e.v=n,e.wv=to())}const Tn=new Map;function cn(e,n){var t={f:0,v:e,reactions:null,equals:Lr,rv:0,wv:0};return t}function pe(e,n){const t=cn(e);return eo(t),t}function Ht(e,n=!1){var r;const t=cn(e);return n||(t.equals=Bt),Nn&&K!==null&&K.l!==null&&((r=K.l).s??(r.s=[])).push(t),t}function Y(e,n,t=!1){$!==null&&!Ce&&kn()&&($.f&(Me|Vt))!==0&&!(le!=null&&le.includes(e))&&ys();let r=t?Pe(n):n;return Nt(e,r)}function Nt(e,n){if(!e.equals(n)){var t=e.v;Cn?Tn.set(e,n):Tn.set(e,t),e.v=n,(e.f&Me)!==0&&((e.f&Oe)!==0&&Br(e),Ee(e,(e.f&be)===0?ce:Xe)),e.wv=to(),$r(e,Oe),kn()&&j!==null&&(j.f&ce)!==0&&(j.f&(Be|dn))===0&&(we===null?Hs([e]):we.push(e))}return n}function gr(e,n=1){var t=E(e),r=n===1?t++:t--;return Y(e,t),r}function $r(e,n){var t=e.reactions;if(t!==null)for(var r=kn(),o=t.length,s=0;s<o;s++){var a=t[s],c=a.f;(c&Oe)===0&&(!r&&a===j||(Ee(a,n),(c&(ce|be))!==0&&((c&Me)!==0?$r(a,Xe):ut(a))))}}let Os=!1;var pr,Ur,Hr,Gr;function Is(){if(pr===void 0){pr=window,Ur=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Hr=Ze(n,"firstChild").get,Gr=Ze(n,"nextSibling").get,mr(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),mr(t)&&(t.__t=void 0)}}function ot(e=""){return document.createTextNode(e)}function Ae(e){return Hr.call(e)}function st(e){return Gr.call(e)}function V(e,n){return Ae(e)}function an(e,n){{var t=Ae(e);return t instanceof Comment&&t.data===""?st(t):t}}function se(e,n=1,t=!1){let r=e;for(;n--;)r=st(r);return r}function Ls(e){e.textContent=""}function Kr(e){j===null&&$===null&&ms(),$!==null&&($.f&be)!==0&&j===null&&_s(),Cn&&ds()}function Ps(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function vn(e,n,t,r=!0){var o=j,s={ctx:K,deps:null,nodes_start:null,nodes_end:null,f:e|Oe,first:null,fn:n,last:null,next:null,parent:o,prev:null,teardown:null,transitions:null,wv:0};if(t)try{ct(s),s.f|=as}catch(l){throw qe(s),l}else n!==null&&ut(s);var a=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(Or|Un))===0;if(!a&&r&&(o!==null&&Ps(s,o),$!==null&&($.f&Me)!==0)){var c=$;(c.effects??(c.effects=[])).push(s)}return s}function zs(e){const n=vn(tt,null,!1);return Ee(n,ce),n.teardown=e,n}function hr(e){Kr();var n=j!==null&&(j.f&Be)!==0&&K!==null&&!K.m;if(n){var t=K;(t.e??(t.e=[])).push({fn:e,effect:j,reaction:$})}else{var r=Gt(e);return r}}function Vs(e){return Kr(),it(e)}function qs(e){const n=vn(dn,e,!0);return(t={})=>new Promise(r=>{t.outro?Gn(n,()=>{qe(n),r(void 0)}):(qe(n),r(void 0))})}function Gt(e){return vn(Ar,e,!1)}function Bs(e,n){var t=K,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=it(()=>{e(),!r.ran&&(r.ran=!0,Y(t.l.r2,!0),Sn(n))})}function js(){var e=K;it(()=>{if(E(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&ce)!==0&&Ee(t,Xe),gn(t)&&ct(t),n.ran=!1}e.l.r2.v=!1}})}function it(e){return vn(tt,e,!0)}function he(e,n=[],t=ln){const r=n.map(t);return at(()=>e(...r.map(E)))}function at(e,n=0){return vn(tt|Vt|n,e,!0)}function un(e,n=!0){return vn(tt|Be,e,!0,n)}function Zr(e){var n=e.teardown;if(n!==null){const t=Cn,r=$;br(!0),Ie(null);try{n.call(null)}finally{br(t),Ie(r)}}}function Wr(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&dn)!==0?t.parent=null:qe(t,n),t=r}}function $s(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&Be)===0&&qe(n),n=t}}function qe(e,n=!0){var t=!1;(n||(e.f&cs)!==0)&&e.nodes_start!==null&&(Xr(e.nodes_start,e.nodes_end),t=!0),Wr(e,n&&!t),Jn(e,0),Ee(e,rt);var r=e.transitions;if(r!==null)for(const s of r)s.stop();Zr(e);var o=e.parent;o!==null&&o.first!==null&&Jr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Xr(e,n){for(;e!==null;){var t=e===n?null:st(e);e.remove(),e=t}}function Jr(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function Gn(e,n){var t=[];Kt(e,t,!0),Yr(t,()=>{qe(e),n&&n()})}function Yr(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var o of e)o.out(r)}else n()}function Kt(e,n,t){if((e.f&ze)===0){if(e.f^=ze,e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&n.push(a);for(var r=e.first;r!==null;){var o=r.next,s=(r.f&qt)!==0||(r.f&Be)!==0;Kt(r,n,s?t:!1),r=o}}}function Kn(e){Qr(e,!0)}function Qr(e,n){if((e.f&ze)!==0){e.f^=ze,(e.f&ce)===0&&(e.f^=ce),gn(e)&&(Ee(e,Oe),ut(e));for(var t=e.first;t!==null;){var r=t.next,o=(t.f&qt)!==0||(t.f&Be)!==0;Qr(t,o?n:!1),t=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&s.in()}}let Zn=[];function Us(){var e=Zn;Zn=[],St(e)}function Zt(e){Zn.length===0&&queueMicrotask(Us),Zn.push(e)}let jn=!1,kt=!1,Wn=null,en=!1,Cn=!1;function br(e){Cn=e}let $n=[];let $=null,Ce=!1;function Ie(e){$=e}let j=null;function We(e){j=e}let le=null;function eo(e){$!==null&&$.f&Ft&&(le===null?le=[e]:le.push(e))}let ae=null,ge=0,we=null;function Hs(e){we=e}let no=1,Xn=0,Ge=!1;function to(){return++no}function gn(e){var _;var n=e.f;if((n&Oe)!==0)return!0;if((n&Xe)!==0){var t=e.deps,r=(n&be)!==0;if(t!==null){var o,s,a=(n&Hn)!==0,c=r&&j!==null&&!Ge,l=t.length;if(a||c){var u=e,m=u.parent;for(o=0;o<l;o++)s=t[o],(a||!((_=s==null?void 0:s.reactions)!=null&&_.includes(u)))&&(s.reactions??(s.reactions=[])).push(u);a&&(u.f^=Hn),c&&m!==null&&(m.f&be)===0&&(u.f^=be)}for(o=0;o<l;o++)if(s=t[o],gn(s)&&jr(s),s.wv>e.wv)return!0}(!r||j!==null&&!Ge)&&Ee(e,ce)}return!1}function Gs(e,n){for(var t=n;t!==null;){if((t.f&Un)!==0)try{t.fn(e);return}catch{t.f^=Un}t=t.parent}throw jn=!1,e}function yr(e){return(e.f&rt)===0&&(e.parent===null||(e.parent.f&Un)===0)}function lt(e,n,t,r){if(jn){if(t===null&&(jn=!1),yr(n))throw e;return}if(t!==null&&(jn=!0),Gs(e,n),yr(n))throw e}function ro(e,n,t=!0){var r=e.reactions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];le!=null&&le.includes(e)||((s.f&Me)!==0?ro(s,n,!1):n===s&&(t?Ee(s,Oe):(s.f&ce)!==0&&Ee(s,Xe),ut(s)))}}function oo(e){var h;var n=ae,t=ge,r=we,o=$,s=Ge,a=le,c=K,l=Ce,u=e.f;ae=null,ge=0,we=null,Ge=(u&be)!==0&&(Ce||!en||$===null),$=(u&(Be|dn))===0?e:null,le=null,vr(e.ctx),Ce=!1,Xn++,e.f|=Ft;try{var m=(0,e.fn)(),_=e.deps;if(ae!==null){var f;if(Jn(e,ge),_!==null&&ge>0)for(_.length=ge+ae.length,f=0;f<ae.length;f++)_[ge+f]=ae[f];else e.deps=_=ae;if(!Ge)for(f=ge;f<_.length;f++)((h=_[f]).reactions??(h.reactions=[])).push(e)}else _!==null&&ge<_.length&&(Jn(e,ge),_.length=ge);if(kn()&&we!==null&&!Ce&&_!==null&&(e.f&(Me|Xe|Oe))===0)for(f=0;f<we.length;f++)ro(we[f],e);return o!==null&&o!==e&&(Xn++,we!==null&&(r===null?r=we:r.push(...we))),m}finally{ae=n,ge=t,we=r,$=o,Ge=s,le=a,vr(c),Ce=l,e.f^=Ft}}function Ks(e,n){let t=n.reactions;if(t!==null){var r=ts.call(t,e);if(r!==-1){var o=t.length-1;o===0?t=n.reactions=null:(t[r]=t[o],t.pop())}}t===null&&(n.f&Me)!==0&&(ae===null||!ae.includes(n))&&(Ee(n,Xe),(n.f&(be|Hn))===0&&(n.f^=Hn),qr(n),Jn(n,0))}function Jn(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Ks(e,t[r])}function ct(e){var n=e.f;if((n&rt)===0){Ee(e,ce);var t=j,r=K,o=en;j=e,en=!0;try{(n&Vt)!==0?$s(e):Wr(e),Zr(e);var s=oo(e);e.teardown=typeof s=="function"?s:null,e.wv=no;var a=e.deps,c;_r&&ws&&e.f&Oe}catch(l){lt(l,e,t,r||e.ctx)}finally{en=o,j=t}}}function Zs(){try{vs()}catch(e){if(Wn!==null)lt(e,Wn,null);else throw e}}function Ws(){var e=en;try{var n=0;for(en=!0;$n.length>0;){n++>1e3&&Zs();var t=$n,r=t.length;$n=[];for(var o=0;o<r;o++){var s=Js(t[o]);Xs(s)}Tn.clear()}}finally{kt=!1,en=e,Wn=null}}function Xs(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(rt|ze))===0)try{gn(r)&&(ct(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Jr(r):r.fn=null))}catch(o){lt(o,r,null,r.ctx)}}}function ut(e){kt||(kt=!0,queueMicrotask(Ws));for(var n=Wn=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(dn|Be))!==0){if((t&ce)===0)return;n.f^=ce}}$n.push(n)}function Js(e){for(var n=[],t=e;t!==null;){var r=t.f,o=(r&(Be|dn))!==0,s=o&&(r&ce)!==0;if(!s&&(r&ze)===0){if((r&Ar)!==0)n.push(t);else if(o)t.f^=ce;else try{gn(t)&&ct(t)}catch(l){lt(l,t,null,t.ctx)}var a=t.first;if(a!==null){t=a;continue}}var c=t.parent;for(t=t.next;t===null&&c!==null;)t=c.next,c=c.parent}return n}function E(e){var n=e.f,t=(n&Me)!==0;if($!==null&&!Ce){if(!(le!=null&&le.includes(e))){var r=$.deps;e.rv<Xn&&(e.rv=Xn,ae===null&&r!==null&&r[ge]===e?ge++:ae===null?ae=[e]:(!Ge||!ae.includes(e))&&ae.push(e))}}else if(t&&e.deps===null&&e.effects===null){var o=e,s=o.parent;s!==null&&(s.f&be)===0&&(o.f^=be)}return t&&(o=e,gn(o)&&jr(o)),Cn&&Tn.has(e)?Tn.get(e):e.v}function Sn(e){var n=Ce;try{return Ce=!0,e()}finally{Ce=n}}const Ys=-7169;function Ee(e,n){e.f=e.f&Ys|n}function Ct(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Qe in e)At(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&Qe in t&&At(t)}}}function At(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{At(e[r],n)}catch{}const t=zt(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=Cr(t);for(let o in r){const s=r[o].get;if(s)try{s.call(e)}catch{}}}}}function Qs(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ei=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ni(e){return ei.includes(e)}const ti={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ri(e){return e=e.toLowerCase(),ti[e]??e}const oi=["touchstart","touchmove"];function si(e){return oi.includes(e)}function ii(e,n){if(n){const t=document.body;e.autofocus=!0,Zt(()=>{document.activeElement===t&&e.focus()})}}let wr=!1;function ai(){wr||(wr=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var n;if(!e.defaultPrevented)for(const t of e.target.elements)(n=t.__on_r)==null||n.call(t)})},{capture:!0}))}function so(e){var n=$,t=j;Ie(null),We(null);try{return e()}finally{Ie(n),We(t)}}function li(e,n,t,r=t){e.addEventListener(n,()=>so(t));const o=e.__on_r;o?e.__on_r=()=>{o(),r(!0)}:e.__on_r=()=>r(!0),ai()}const io=new Set,Ot=new Set;function ci(e,n,t,r={}){function o(s){if(r.capture||Dn.call(n,s),!s.cancelBubble)return so(()=>t==null?void 0:t.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Zt(()=>{n.addEventListener(e,o,r)}):n.addEventListener(e,o,r),o}function ft(e){for(var n=0;n<e.length;n++)io.add(e[n]);for(var t of Ot)t(e)}function Dn(e){var q;var n=this,t=n.ownerDocument,r=e.type,o=((q=e.composedPath)==null?void 0:q.call(e))||[],s=o[0]||e.target,a=0,c=e.__root;if(c){var l=o.indexOf(c);if(l!==-1&&(n===document||n===window)){e.__root=n;return}var u=o.indexOf(n);if(u===-1)return;l<=u&&(a=l)}if(s=o[a]||e.target,s!==n){rs(e,"currentTarget",{configurable:!0,get(){return s||t}});var m=$,_=j;Ie(null),We(null);try{for(var f,h=[];s!==null;){var b=s.assignedSlot||s.parentNode||s.host||null;try{var N=s["__"+r];if(N!=null&&(!s.disabled||e.target===s))if(nt(N)){var[S,...L]=N;S.apply(s,[e,...L])}else N.call(s,e)}catch(x){f?h.push(x):f=x}if(e.cancelBubble||b===n||b===null)break;s=b}if(f){for(let x of h)queueMicrotask(()=>{throw x});throw f}}finally{e.__root=n,delete e.currentTarget,Ie(m),We(_)}}}function Wt(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function fn(e,n){var t=j;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function ue(e,n){var t=(n&Fs)!==0,r=(n&Ns)!==0,o,s=!e.startsWith("<!>");return()=>{o===void 0&&(o=Wt(s?e:"<!>"+e),t||(o=Ae(o)));var a=r||Ur?document.importNode(o,!0):o.cloneNode(!0);if(t){var c=Ae(a),l=a.lastChild;fn(c,l)}else fn(a,a);return a}}function dt(e,n,t="svg"){var r=!e.startsWith("<!>"),o=`<${t}>${r?e:"<!>"+e}</${t}>`,s;return()=>{if(!s){var a=Wt(o),c=Ae(a);s=Ae(c)}var l=s.cloneNode(!0);return fn(l,l),l}}function It(e=""){{var n=ot(e+"");return fn(n,n),n}}function Yn(){var e=document.createDocumentFragment(),n=document.createComment(""),t=ot();return e.append(n,t),fn(n,t),e}function G(e,n){e!==null&&e.before(n)}function Ve(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function ui(e,n){return fi(e,n)}const on=new Map;function fi(e,{target:n,anchor:t,props:r={},events:o,context:s,intro:a=!0}){Is();var c=new Set,l=_=>{for(var f=0;f<_.length;f++){var h=_[f];if(!c.has(h)){c.add(h);var b=si(h);n.addEventListener(h,Dn,{passive:b});var N=on.get(h);N===void 0?(document.addEventListener(h,Dn,{passive:b}),on.set(h,1)):on.set(h,N+1)}}};l(Pt(io)),Ot.add(l);var u=void 0,m=qs(()=>{var _=t??n.appendChild(ot());return un(()=>{if(s){_n({});var f=K;f.c=s}o&&(r.$$events=o),u=e(_,r)||{},s&&mn()}),()=>{var b;for(var f of c){n.removeEventListener(f,Dn);var h=on.get(f);--h===0?(document.removeEventListener(f,Dn),on.delete(f)):on.set(f,h)}Ot.delete(l),_!==t&&((b=_.parentNode)==null||b.removeChild(_))}});return di.set(u,m),u}let di=new WeakMap;function Ue(e,n,[t,r]=[0,0]){var o=e,s=null,a=null,c=_e,l=t>0?qt:0,u=!1;const m=(f,h=!0)=>{u=!0,_(h,f)},_=(f,h)=>{c!==(c=f)&&(c?(s?Kn(s):h&&(s=un(()=>h(o))),a&&Gn(a,()=>{a=null})):(a?Kn(a):h&&(a=un(()=>h(o,[t+1,r]))),s&&Gn(s,()=>{s=null})))};at(()=>{u=!1,n(m),u||_(null,null)},l)}function Mn(e,n){return n}function _i(e,n,t,r){for(var o=[],s=n.length,a=0;a<s;a++)Kt(n[a].e,o,!0);var c=s>0&&o.length===0&&t!==null;if(c){var l=t.parentNode;Ls(l),l.append(t),r.clear(),He(e,n[0].prev,n[s-1].next)}Yr(o,()=>{for(var u=0;u<s;u++){var m=n[u];c||(r.delete(m.k),He(e,m.prev,m.next)),qe(m.e,!c)}})}function Rn(e,n,t,r,o,s=null){var a=e,c={flags:n,items:new Map,first:null},l=(n&Pr)!==0;if(l){var u=e;a=u.appendChild(ot())}var m=null,_=!1,f=Ut(()=>{var h=t();return nt(h)?h:h==null?[]:Pt(h)});at(()=>{var h=E(f),b=h.length;_&&b===0||(_=b===0,mi(h,c,a,o,n,r,t),s!==null&&(b===0?m?Kn(m):m=un(()=>s(a)):m!==null&&Gn(m,()=>{m=null})),E(f))})}function mi(e,n,t,r,o,s,a){var ye,Re,me,Te;var c=(o&Ds)!==0,l=(o&(jt|$t))!==0,u=e.length,m=n.items,_=n.first,f=_,h,b=null,N,S=[],L=[],q,x,g,y;if(c)for(y=0;y<u;y+=1)q=e[y],x=s(q,y),g=m.get(x),g!==void 0&&((ye=g.a)==null||ye.measure(),(N??(N=new Set)).add(g));for(y=0;y<u;y+=1){if(q=e[y],x=s(q,y),g=m.get(x),g===void 0){var z=f?f.e.nodes_start:t;b=gi(z,n,b,b===null?n.first:b.next,q,x,y,r,o,a),m.set(x,b),S=[],L=[],f=b.next;continue}if(l&&vi(g,q,y,o),(g.e.f&ze)!==0&&(Kn(g.e),c&&((Re=g.a)==null||Re.unfix(),(N??(N=new Set)).delete(g))),g!==f){if(h!==void 0&&h.has(g)){if(S.length<L.length){var R=L[0],O;b=R.prev;var Z=S[0],fe=S[S.length-1];for(O=0;O<S.length;O+=1)Er(S[O],R,t);for(O=0;O<L.length;O+=1)h.delete(L[O]);He(n,Z.prev,fe.next),He(n,b,Z),He(n,fe,R),f=R,b=fe,y-=1,S=[],L=[]}else h.delete(g),Er(g,f,t),He(n,g.prev,g.next),He(n,g,b===null?n.first:b.next),He(n,b,g),b=g;continue}for(S=[],L=[];f!==null&&f.k!==x;)(f.e.f&ze)===0&&(h??(h=new Set)).add(f),L.push(f),f=f.next;if(f===null)continue;g=f}S.push(g),b=g,f=g.next}if(f!==null||h!==void 0){for(var ee=h===void 0?[]:Pt(h);f!==null;)(f.e.f&ze)===0&&ee.push(f),f=f.next;var ne=ee.length;if(ne>0){var de=(o&Pr)!==0&&u===0?t:null;if(c){for(y=0;y<ne;y+=1)(me=ee[y].a)==null||me.measure();for(y=0;y<ne;y+=1)(Te=ee[y].a)==null||Te.fix()}_i(n,ee,de,m)}}c&&Zt(()=>{var De;if(N!==void 0)for(g of N)(De=g.a)==null||De.apply()}),j.first=n.first&&n.first.e,j.last=b&&b.e}function vi(e,n,t,r){(r&jt)!==0&&Nt(e.v,n),(r&$t)!==0?Nt(e.i,t):e.i=t}function gi(e,n,t,r,o,s,a,c,l,u){var m=(l&jt)!==0,_=(l&xs)===0,f=m?_?Ht(o):cn(o):o,h=(l&$t)===0?a:cn(a),b={i:h,v:f,k:s,a:null,e:null,prev:t,next:r};try{return b.e=un(()=>c(e,f,h,u),Os),b.e.prev=t&&t.e,b.e.next=r&&r.e,t===null?n.first=b:(t.next=b,t.e.next=b.e),r!==null&&(r.prev=b,r.e.prev=b.e),b}finally{}}function Er(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,o=n?n.e.nodes_start:t,s=e.e.nodes_start;s!==r;){var a=st(s);o.before(s),s=a}}function He(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function pi(e,n,t=!1,r=!1,o=!1){var s=e,a="";he(()=>{var c=j;if(a!==(a=n()??"")&&(c.nodes_start!==null&&(Xr(c.nodes_start,c.nodes_end),c.nodes_start=c.nodes_end=null),a!=="")){var l=a+"";t?l=`<svg>${l}</svg>`:r&&(l=`<math>${l}</math>`);var u=Wt(l);if((t||r)&&(u=Ae(u)),fn(Ae(u),u.lastChild),t||r)for(;Ae(u);)s.before(Ae(u));else s.before(u)}})}function hi(e,n,t,r,o){var c;var s=(c=n.$$slots)==null?void 0:c[t],a=!1;s===!0&&(s=n.children,a=!0),s===void 0?o!==null&&o(e):s(e,a?()=>r:r)}function bi(e,n){var t=void 0,r;at(()=>{t!==(t=n())&&(r&&(qe(r),r=null),t&&(r=un(()=>{Gt(()=>t(e))})))})}function ao(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(n=0;n<o;n++)e[n]&&(t=ao(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function yi(){for(var e,n,t=0,r="",o=arguments.length;t<o;t++)(e=arguments[t])&&(n=ao(e))&&(r&&(r+=" "),r+=n);return r}function lo(e){return typeof e=="object"?yi(e):e??""}const Dr=[...` 	
\r\f \v\uFEFF`];function wi(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var o in t)if(t[o])r=r?r+" "+o:o;else if(r.length)for(var s=o.length,a=0;(a=r.indexOf(o,a))>=0;){var c=a+s;(a===0||Dr.includes(r[a-1]))&&(c===r.length||Dr.includes(r[c]))?r=(a===0?"":r.substring(0,a))+r.substring(c+1):a=c}}return r===""?null:r}function xr(e,n=!1){var t=n?" !important;":";",r="";for(var o in e){var s=e[o];s!=null&&s!==""&&(r+=" "+o+": "+s+t)}return r}function Dt(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Ei(e,n){if(n){var t="",r,o;if(Array.isArray(n)?(r=n[0],o=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,a=0,c=!1,l=[];r&&l.push(...Object.keys(r).map(Dt)),o&&l.push(...Object.keys(o).map(Dt));var u=0,m=-1;const N=e.length;for(var _=0;_<N;_++){var f=e[_];if(c?f==="/"&&e[_-1]==="*"&&(c=!1):s?s===f&&(s=!1):f==="/"&&e[_+1]==="*"?c=!0:f==='"'||f==="'"?s=f:f==="("?a++:f===")"&&a--,!c&&s===!1&&a===0){if(f===":"&&m===-1)m=_;else if(f===";"||_===N-1){if(m!==-1){var h=Dt(e.substring(u,m).trim());if(!l.includes(h)){f!==";"&&_++;var b=e.substring(u,_).trim();t+=" "+b+";"}}u=_+1,m=-1}}}}return r&&(t+=xr(r)),o&&(t+=xr(o,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Fn(e,n,t,r,o,s){var a=e.__className;if(a!==t||a===void 0){var c=wi(t,r,s);c==null?e.removeAttribute("class"):n?e.className=c:e.setAttribute("class",c),e.__className=t}else if(s&&o!==s)for(var l in s){var u=!!s[l];(o==null||u!==!!o[l])&&e.classList.toggle(l,u)}return s}function xt(e,n={},t,r){for(var o in t){var s=t[o];n[o]!==s&&(t[o]==null?e.style.removeProperty(o):e.style.setProperty(o,s,r))}}function Xt(e,n,t,r){var o=e.__style;if(o!==n){var s=Ei(n,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=n}else r&&(Array.isArray(r)?(xt(e,t==null?void 0:t[0],r[0]),xt(e,t==null?void 0:t[1],r[1],"important")):xt(e,t,r));return r}const xn=Symbol("class"),En=Symbol("style"),co=Symbol("is custom element"),uo=Symbol("is html");function Di(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Qn(e,n,t,r){var o=fo(e);o[n]!==(o[n]=t)&&(n==="loading"&&(e[us]=t),t==null?e.removeAttribute(n):typeof t!="string"&&_o(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function xi(e,n,t,r,o=!1){var s=fo(e),a=s[co],c=!s[uo],l=n||{},u=e.tagName==="OPTION";for(var m in n)m in t||(t[m]=null);t.class?t.class=lo(t.class):t.class=null,t[En]&&(t.style??(t.style=null));var _=_o(e);for(const x in t){let g=t[x];if(u&&x==="value"&&g==null){e.value=e.__value="",l[x]=g;continue}if(x==="class"){var f=e.namespaceURI==="http://www.w3.org/1999/xhtml";Fn(e,f,g,r,n==null?void 0:n[xn],t[xn]),l[x]=g,l[xn]=t[xn];continue}if(x==="style"){Xt(e,g,n==null?void 0:n[En],t[En]),l[x]=g,l[En]=t[En];continue}var h=l[x];if(g!==h){l[x]=g;var b=x[0]+x[1];if(b!=="$$")if(b==="on"){const y={},z="$$"+x;let R=x.slice(2);var N=ni(R);if(Qs(R)&&(R=R.slice(0,-7),y.capture=!0),!N&&h){if(g!=null)continue;e.removeEventListener(R,l[z],y),l[z]=null}if(g!=null)if(N)e[`__${R}`]=g,ft([R]);else{let O=function(Z){l[x].call(this,Z)};var q=O;l[z]=ci(R,e,O,y)}else N&&(e[`__${R}`]=void 0)}else if(x==="style")Qn(e,x,g);else if(x==="autofocus")ii(e,!!g);else if(!a&&(x==="__value"||x==="value"&&g!=null))e.value=e.__value=g;else if(x==="selected"&&u)Di(e,g);else{var S=x;c||(S=ri(S));var L=S==="defaultValue"||S==="defaultChecked";if(g==null&&!a&&!L)if(s[x]=null,S==="value"||S==="checked"){let y=e;const z=n===void 0;if(S==="value"){let R=y.defaultValue;y.removeAttribute(S),y.defaultValue=R,y.value=y.__value=z?R:null}else{let R=y.defaultChecked;y.removeAttribute(S),y.defaultChecked=R,y.checked=z?R:!1}}else e.removeAttribute(x);else L||_.includes(S)&&(a||typeof g!="string")?e[S]=g:typeof g!="function"&&Qn(e,S,g)}}}for(let x of Object.getOwnPropertySymbols(t))x.description===Cs&&bi(e,()=>t[x]);return l}function fo(e){return e.__attributes??(e.__attributes={[co]:e.nodeName.includes("-"),[uo]:e.namespaceURI===ks})}var Mr=new Map;function _o(e){var n=Mr.get(e.nodeName);if(n)return n;Mr.set(e.nodeName,n=[]);for(var t,r=e,o=Element.prototype;o!==r;){t=Cr(r);for(var s in t)t[s].set&&n.push(s);r=zt(r)}return n}function Mi(e,n,t=n){var r=kn();li(e,"input",o=>{var s=o?e.defaultValue:e.value;if(s=Mt(e)?Rt(s):s,t(s),r&&s!==(s=n())){var a=e.selectionStart,c=e.selectionEnd;e.value=s??"",c!==null&&(e.selectionStart=a,e.selectionEnd=Math.min(c,e.value.length))}}),Sn(n)==null&&e.value&&t(Mt(e)?Rt(e.value):e.value),it(()=>{var o=n();Mt(e)&&o===Rt(e.value)||e.type==="date"&&!o&&!e.value||o!==e.value&&(e.value=o??"")})}function Mt(e){var n=e.type;return n==="number"||n==="range"}function Rt(e){return e===""?null:+e}function mo(e=!1){const n=K,t=n.l.u;if(!t)return;let r=()=>Ct(n.s);if(e){let o=0,s={};const a=ln(()=>{let c=!1;const l=n.s;for(const u in l)l[u]!==s[u]&&(s[u]=l[u],c=!0);return c&&o++,o});r=()=>E(a)}t.b.length&&Vs(()=>{Rr(n,r),St(t.b)}),hr(()=>{const o=Sn(()=>t.m.map(is));return()=>{for(const s of o)typeof s=="function"&&s()}}),t.a.length&&hr(()=>{Rr(n,r),St(t.a)})}function Rr(e,n){if(e.l.s)for(const t of e.l.s)E(t);n()}let Bn=!1;function Ri(e){var n=Bn;try{return Bn=!1,[e(),Bn]}finally{Bn=n}}const Ti={get(e,n){if(!e.exclude.includes(n))return E(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=Ke({get[n](){return e.props[n]}},n,zr)),e.special[n](t),gr(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),gr(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function et(e,n){return new Proxy({props:e,exclude:n,special:{},version:cn(0)},Ti)}const Si={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(wn(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let o=e.props[r];wn(o)&&(o=o());const s=Ze(o,n);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(wn(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const o=Ze(r,n);return o&&!o.configurable&&(o.configurable=!0),o}}},has(e,n){if(n===Qe||n===Ir)return!1;for(let t of e.props)if(wn(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(wn(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function Fi(...e){return new Proxy({props:e},Si)}function Tr(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function Ke(e,n,t,r){var z;var o=(t&Ms)!==0,s=!Nn||(t&Rs)!==0,a=(t&Ts)!==0,c=(t&Ss)!==0,l=!1,u;a?[u,l]=Ri(()=>e[n]):u=e[n];var m=Qe in e||Ir in e,_=a&&(((z=Ze(e,n))==null?void 0:z.set)??(m&&n in e&&(R=>e[n]=R)))||void 0,f=r,h=!0,b=!1,N=()=>(b=!0,h&&(h=!1,c?f=Sn(r):f=r),f);u===void 0&&r!==void 0&&(_&&s&&ps(),u=N(),_&&_(u));var S;if(s)S=()=>{var R=e[n];return R===void 0?N():(h=!0,b=!1,R)};else{var L=(o?ln:Ut)(()=>e[n]);L.f|=ls,S=()=>{var R=E(L);return R!==void 0&&(f=void 0),R===void 0?f:R}}if((t&zr)===0)return S;if(_){var q=e.$$legacy;return function(R,O){return arguments.length>0?((!s||!O||q||l)&&_(O?S():R),R):S()}}var x=!1,g=Ht(u),y=ln(()=>{var R=S(),O=E(g);return x?(x=!1,O):g.v=R});return a&&E(y),o||(y.equals=Bt),function(R,O){if(arguments.length>0){const Z=O?E(y):s&&a?Pe(R):R;if(!y.equals(Z)){if(x=!0,Y(g,Z),b&&f!==void 0&&(f=Z),Tr(y))return R;Sn(()=>E(y))}return R}return Tr(y)?y.v:E(y)}}function Ni(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function ki(){const e=K;return e===null&&Vr(),(n,t,r)=>{var s;const o=(s=e.s.$$events)==null?void 0:s[n];if(o){const a=nt(o)?o.slice():[o],c=Ni(n,t,r);for(const l of a)l.call(e.x,c);return!c.defaultPrevented}return!0}}function Ci(e){K===null&&Vr(),K.l===null&&gs(),Ai(K).a.push(e)}function Ai(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Oi="5";var kr;typeof window<"u"&&((kr=window.__svelte??(window.__svelte={})).v??(kr.v=new Set)).add(Oi);const Ii={__category__:"External libraries",EnzymeForward:"error",EnzymeReverse:"wrong",FiniteDifferences:94.18537735849058,ForwardDiff:1.9906626089362287,MooncakeForward:24.207266399119224,MooncakeReverse:6.123132631284331,ReverseDiff:61.50901729849099,ReverseDiffCompiled:7.347700134247156,Zygote:771.2494663491224},Li={__category__:"Distributions",EnzymeForward:3.7065951597026574,EnzymeReverse:2.4583138525749715,FiniteDifferences:39.42509554429059,ForwardDiff:2.0919553560354562,MooncakeForward:4.038100482619967,MooncakeReverse:3.383210113498067,ReverseDiff:73.70270821298719,ReverseDiffCompiled:5.843884244253999,Zygote:3466.409038080263},Pi={__category__:"Base Julia features",EnzymeForward:3.329883240367275,EnzymeReverse:1.7698183124421003,FiniteDifferences:81.16902936987046,ForwardDiff:2.4275751154848977,MooncakeForward:8.550314358538659,MooncakeReverse:4.765155763619665,ReverseDiff:60.0245209428523,ReverseDiffCompiled:"wrong",Zygote:6400.109855810008},zi={__category__:"External libraries",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:61.17500881831522,ForwardDiff:"wrong",MooncakeForward:"error",MooncakeReverse:"wrong",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Vi={__category__:"DynamicPPL demo models",EnzymeForward:5.5141769524820665,EnzymeReverse:3.68406229963617,FiniteDifferences:81.60814884107681,ForwardDiff:3.162475023990876,MooncakeForward:7.946376188206481,MooncakeReverse:6.179262989404498,ReverseDiff:141.46513252026983,ReverseDiffCompiled:13.249775871300322,Zygote:"error"},qi={__category__:"DynamicPPL demo models",EnzymeForward:4.065946911001818,EnzymeReverse:3.108676310284889,FiniteDifferences:64.6502334770115,ForwardDiff:2.2795483776560923,MooncakeForward:7.581358555460017,MooncakeReverse:5.364674593241552,ReverseDiff:101.64187163650811,ReverseDiffCompiled:9.81317311762216,Zygote:7594.9824262071315},Bi={__category__:"DynamicPPL demo models",EnzymeForward:4.927618014107433,EnzymeReverse:5.7267322549493,FiniteDifferences:83.66877594066816,ForwardDiff:1.7420589745306816,MooncakeForward:12.267182692852764,MooncakeReverse:4.982562756040368,ReverseDiff:71.19458550645072,ReverseDiffCompiled:6.369663111562553,Zygote:"error"},ji={__category__:"DynamicPPL demo models",EnzymeForward:4.738407789826874,EnzymeReverse:4.230990789034323,FiniteDifferences:81.72286207616266,ForwardDiff:1.3957103264653206,MooncakeForward:14.008834431630975,MooncakeReverse:6.221059444845402,ReverseDiff:54.29336188436831,ReverseDiffCompiled:4.984254352763059,Zygote:"error"},$i={__category__:"DynamicPPL demo models",EnzymeForward:6.452719465964499,EnzymeReverse:4.827586831335338,FiniteDifferences:87.31627994011976,ForwardDiff:1.571863838640698,MooncakeForward:15.507084914528427,MooncakeReverse:6.958968099555817,ReverseDiff:69.80055195839083,ReverseDiffCompiled:6.021217945475696,Zygote:3755.6974449784975},Ui={__category__:"DynamicPPL demo models",EnzymeForward:4.913471148282572,EnzymeReverse:3.6133231583231584,FiniteDifferences:87.31656292585909,ForwardDiff:1.5283083788238687,MooncakeForward:14.153629917944166,MooncakeReverse:6.051345166530311,ReverseDiff:62.861773770117566,ReverseDiffCompiled:5.632370072677875,Zygote:3108.1086631814787},Hi={__category__:"DynamicPPL demo models",EnzymeForward:5.448350800701027,EnzymeReverse:3.852621794722333,FiniteDifferences:80.68693624523688,ForwardDiff:1.9176645757313326,MooncakeForward:8.447253273870649,MooncakeReverse:5.83354161123787,ReverseDiff:149.71572327044026,ReverseDiffCompiled:13.330309489742616,Zygote:9396.829574786034},Gi={__category__:"DynamicPPL demo models",EnzymeForward:5.31711540337528,EnzymeReverse:6.486535668108608,FiniteDifferences:82.08313809261301,ForwardDiff:1.4724114045940289,MooncakeForward:12.697422341021433,MooncakeReverse:5.965486572085556,ReverseDiff:68.27048203031852,ReverseDiffCompiled:6.754024897916553,Zygote:"error"},Ki={__category__:"Distributions",EnzymeForward:2.7217200396170353,EnzymeReverse:2.8017762945074516,FiniteDifferences:27.175371083012642,ForwardDiff:1.1953665490903738,MooncakeForward:3.7414013547840814,MooncakeReverse:5.988366479687234,ReverseDiff:50.44946673438294,ReverseDiffCompiled:4.319668962831342,Zygote:"error"},Zi={__category__:"DynamicPPL demo models",EnzymeForward:5.068217834504026,EnzymeReverse:5.923007343338543,FiniteDifferences:85.87421768218113,ForwardDiff:1.4899839183331003,MooncakeForward:14.180179569710317,MooncakeReverse:6.286736904946161,ReverseDiff:61.80091821118858,ReverseDiffCompiled:7.086923296264613,Zygote:"error"},Wi={__category__:"DynamicPPL demo models",EnzymeForward:5.080593645956775,EnzymeReverse:5.921883181575959,FiniteDifferences:83.7071413728614,ForwardDiff:1.8260659700781745,MooncakeForward:12.348577485158751,MooncakeReverse:5.672537458845663,ReverseDiff:53.43082686647043,ReverseDiffCompiled:6.59296847781632,Zygote:"error"},Xi={__category__:"DynamicPPL demo models",EnzymeForward:5.279844400145554,EnzymeReverse:4.735461527911124,FiniteDifferences:86.36387641932927,ForwardDiff:1.5582362537625514,MooncakeForward:12.253813110610098,MooncakeReverse:5.3097485363942285,ReverseDiff:72.17007815407517,ReverseDiffCompiled:7.081782125215952,Zygote:"error"},Ji={__category__:"DynamicPPL demo models",EnzymeForward:5.153721325794143,EnzymeReverse:5.744579477972656,FiniteDifferences:78.11055764791641,ForwardDiff:1.4422172538740266,MooncakeForward:14.918845001166483,MooncakeReverse:7.2224102513628585,ReverseDiff:55.851051135366575,ReverseDiffCompiled:5.380535663297356,Zygote:"error"},Yi={__category__:"DynamicPPL demo models",EnzymeForward:5.045944719759894,EnzymeReverse:6.703628137271642,FiniteDifferences:77.62801401387648,ForwardDiff:1.367343656209752,MooncakeForward:14.043806400595406,MooncakeReverse:5.756411562626541,ReverseDiff:60.06348704990524,ReverseDiffCompiled:5.524302384576357,Zygote:"error"},Qi={__category__:"Core Turing syntax",EnzymeForward:3.893863778477802,EnzymeReverse:2.457685037080122,FiniteDifferences:116.37921300256629,ForwardDiff:1.6121235910951606,MooncakeForward:15.154370420855342,MooncakeReverse:4.1621929356713725,ReverseDiff:54.30906298003072,ReverseDiffCompiled:4.351032136105861,Zygote:"error"},ea={__category__:"Core Turing syntax",EnzymeForward:7.734660777343704,EnzymeReverse:4.795607543935179,FiniteDifferences:114.50571186184615,ForwardDiff:3.6983370661813906,MooncakeForward:8.65489190038095,MooncakeReverse:13.024941670430819,ReverseDiff:360.04968132901473,ReverseDiffCompiled:33.56737203020018,Zygote:"error"},na={__category__:"DynamicPPL arXiV paper",EnzymeForward:1.539895976228678,EnzymeReverse:2.1453519106743095,FiniteDifferences:914.7887585550823,ForwardDiff:.7722024610255098,MooncakeForward:4.158722477619163,MooncakeReverse:9.353866935595793,ReverseDiff:125.25335180509857,ReverseDiffCompiled:24.903711278708084,Zygote:16.33880906372964},ta={__category__:"DynamicPPL arXiV paper",EnzymeForward:7.356680544379527,EnzymeReverse:3.1090186231429167,FiniteDifferences:174.29035166816954,ForwardDiff:6.023316878479151,MooncakeForward:31.923847695390783,MooncakeReverse:6.918632788868724,ReverseDiff:88.30064975588267,ReverseDiffCompiled:10.585450266491314,Zygote:1925.5915349887134},ra={__category__:"DynamicPPL arXiV paper",EnzymeForward:5869.601180954472,EnzymeReverse:2.3044409003313118,FiniteDifferences:117118.29875101088,ForwardDiff:1080.0050658754412,MooncakeForward:7956.689147215044,MooncakeReverse:4.1716417910447765,ReverseDiff:41.62150824308037,ReverseDiffCompiled:5.118947132730053,Zygote:3.2028252330099956},oa={__category__:"Distributions",EnzymeForward:4.9595210095833195,EnzymeReverse:20.630214917825537,FiniteDifferences:160.99584912470672,ForwardDiff:2.921853237342368,MooncakeForward:20.112672480212932,MooncakeReverse:4.460206370569762,ReverseDiff:66.03258361175213,ReverseDiffCompiled:8.353470866029898,Zygote:"error"},sa={__category__:"DynamicPPL arXiV paper",EnzymeForward:38.03387961347591,EnzymeReverse:5.42039550684765,FiniteDifferences:"NaN",ForwardDiff:27.892894102464204,MooncakeForward:187.54959113850336,MooncakeReverse:4.556573065144012,ReverseDiff:71.16510142009358,ReverseDiffCompiled:10.876905850962455,Zygote:"error"},ia={__category__:"DynamicPPL arXiV paper",EnzymeForward:250.83728891254842,EnzymeReverse:3.1364191324332094,FiniteDifferences:3701.9769417715515,ForwardDiff:180.6798821089401,MooncakeForward:437.24915600245765,MooncakeReverse:11.423396119105883,ReverseDiff:82.85064113165899,ReverseDiffCompiled:12.367155350654738,Zygote:"error"},aa={__category__:"DynamicPPL arXiV paper",EnzymeForward:42.57558892955606,EnzymeReverse:3.3612047981787936,FiniteDifferences:1071.097921479462,ForwardDiff:53.43800482927552,MooncakeForward:162.00491009198606,MooncakeReverse:4.597750612622305,ReverseDiff:2862.3896224213895,ReverseDiffCompiled:379.4773167584464,Zygote:178.03567468299084},la={__category__:"DynamicPPL arXiV paper",EnzymeForward:147.64515015670779,EnzymeReverse:.9833035027709277,FiniteDifferences:2886.5800910536013,ForwardDiff:137.81261119801107,MooncakeForward:758.6244314030498,MooncakeReverse:4.425873066449037,ReverseDiff:137.81552040491005,ReverseDiffCompiled:19.481315693691194,Zygote:5355.504665964493},ca={__category__:"DynamicPPL arXiV paper",EnzymeForward:224.53141215084364,EnzymeReverse:4.819615193781355,FiniteDifferences:6444.9600362557685,ForwardDiff:120.28061196562483,MooncakeForward:1147.9510452865575,MooncakeReverse:3.883263217128005,ReverseDiff:105.41043009875132,ReverseDiffCompiled:9.93531324039892,Zygote:"error"},ua={__category__:"Core Turing syntax",EnzymeForward:3.557559229589228,EnzymeReverse:3.224162280724632,FiniteDifferences:59.02841083290752,ForwardDiff:1.553844321482984,MooncakeForward:6.788185053380783,MooncakeReverse:4.357484536432844,ReverseDiff:68.74904089881483,ReverseDiffCompiled:7.053536161472528,Zygote:4777.769279414781},fa={__category__:"External libraries",EnzymeForward:"error",EnzymeReverse:"wrong",FiniteDifferences:256.43656475748196,ForwardDiff:"wrong",MooncakeForward:"wrong",MooncakeReverse:"wrong",ReverseDiff:"wrong",ReverseDiffCompiled:"wrong",Zygote:"error"},da={__category__:"Core Turing syntax",EnzymeForward:3.4222903381131897,EnzymeReverse:2.68511145649258,FiniteDifferences:68.48005161470321,ForwardDiff:1.2600034862101024,MooncakeForward:11.224400082747207,MooncakeReverse:5.0521101793141066,ReverseDiff:47.99012853470437,ReverseDiffCompiled:4.126517587216278,Zygote:"error"},_a={__category__:"Base Julia features",EnzymeForward:"wrong",EnzymeReverse:"wrong",FiniteDifferences:"wrong",ForwardDiff:"wrong",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"wrong",ReverseDiffCompiled:"error",Zygote:"error"},ma={__category__:"Effect of model size",EnzymeForward:5.518723789523983,EnzymeReverse:2.9082012238596837,FiniteDifferences:183.72366271222563,ForwardDiff:2.6329130039672033,MooncakeForward:28.659261576971215,MooncakeReverse:4.048713361772395,ReverseDiff:57.06167779003977,ReverseDiffCompiled:4.421184637778524,Zygote:"error"},va={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:4.359230709401296,FiniteDifferences:42.95137385512073,ForwardDiff:1.0522151015218304,MooncakeForward:14.326400593271758,MooncakeReverse:9.063190266078353,ReverseDiff:19.86740340756641,ReverseDiffCompiled:1.3776100035389878,Zygote:989.1843418590142},ga={__category__:"Effect of model size",EnzymeForward:26.613737734165923,EnzymeReverse:5.841166336303514,FiniteDifferences:700.0007389890629,ForwardDiff:12.692717779609783,MooncakeForward:129.28735211164428,MooncakeReverse:4.0603113102205,ReverseDiff:58.5659773595293,ReverseDiffCompiled:4.852813137157657,Zygote:"error"},pa={__category__:"Effect of model size",EnzymeForward:52.691666096944004,EnzymeReverse:4.493380495199595,FiniteDifferences:1284.3962264150944,ForwardDiff:17.082137404580152,MooncakeForward:326.74166525351876,MooncakeReverse:3.8583844933434506,ReverseDiff:51.05992877734442,ReverseDiffCompiled:4.606387097860305,Zygote:"error"},ha={__category__:"Effect of model size",EnzymeForward:251.54911786786786,EnzymeReverse:4.101400052832182,FiniteDifferences:6603.444965757311,ForwardDiff:75.83635342568328,MooncakeForward:1321.8522911254188,MooncakeReverse:3.783242397649662,ReverseDiff:48.6134607331836,ReverseDiffCompiled:4.307302040662933,Zygote:"error"},ba={__category__:"Distributions",EnzymeForward:2.9815452423487683,EnzymeReverse:2.8988566270497964,FiniteDifferences:32.342965051754206,ForwardDiff:1.8683624821660445,MooncakeForward:3.7063101125034006,MooncakeReverse:3.835233043599119,ReverseDiff:70.79876509517636,ReverseDiffCompiled:6.189162064570944,Zygote:"error"},ya={__category__:"Distributions",EnzymeForward:1.908842350816729,EnzymeReverse:7.279441831936209,FiniteDifferences:20.12565800645271,ForwardDiff:1.2164200158874199,MooncakeForward:3.678402691937921,MooncakeReverse:7.305016606698035,ReverseDiff:39.56988338685145,ReverseDiffCompiled:3.716597041501165,Zygote:"error"},wa={__category__:"Core Turing syntax",EnzymeForward:9.229575163398692,EnzymeReverse:5.139620569648559,FiniteDifferences:118.27377257336343,ForwardDiff:3.7501494632320456,MooncakeForward:8.452449526769051,MooncakeReverse:13.068693940347286,ReverseDiff:382.5203017059072,ReverseDiffCompiled:33.75061422029361,Zygote:"error"},Ea={__category__:"Core Turing syntax",EnzymeForward:11.837058737523046,EnzymeReverse:5.521881998103576,FiniteDifferences:151.07719404892723,ForwardDiff:3.7485393434012133,MooncakeForward:9.718157381259742,MooncakeReverse:11.346562312683982,ReverseDiff:303.14430325983085,ReverseDiffCompiled:25.791362461910722,Zygote:22348.049363057326},Da={__category__:"Core Turing syntax",EnzymeForward:3.755496332935357,EnzymeReverse:4.321857629357672,FiniteDifferences:75.99964879008184,ForwardDiff:1.7827040911888261,MooncakeForward:9.538046040771045,MooncakeReverse:5.012079216040018,ReverseDiff:64.00549618840186,ReverseDiffCompiled:5.272616418743478,Zygote:"error"},xa={__category__:"Core Turing syntax",EnzymeForward:11.906137391154738,EnzymeReverse:5.540902727338422,FiniteDifferences:149.82442962214958,ForwardDiff:3.601233178539244,MooncakeForward:9.59012059835865,MooncakeReverse:11.837210250010623,ReverseDiff:292.0251994517274,ReverseDiffCompiled:23.95524382097528,Zygote:37298.34679209386},Ma={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:28.181084411583484,ForwardDiff:"NaN",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"NaN",ReverseDiffCompiled:5.161508138044451,Zygote:3396.6226614414722},Ra={__category__:"Distributions",EnzymeForward:12.357024013937108,EnzymeReverse:4.446791118073428,FiniteDifferences:158.28315019609227,ForwardDiff:3.2492907757965477,MooncakeForward:9.231782099495195,MooncakeReverse:10.332200516513675,ReverseDiff:179.94181283478628,ReverseDiffCompiled:15.686758478388656,Zygote:18924.755197209168},Ta={__category__:"External libraries",EnzymeForward:"wrong",EnzymeReverse:"wrong",FiniteDifferences:63.09614980815851,ForwardDiff:"wrong",MooncakeForward:"error",MooncakeReverse:"wrong",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Sa={__category__:"PosteriorDB",EnzymeForward:6.757439134355275,EnzymeReverse:4.3090797294527565,FiniteDifferences:173.61229494042482,ForwardDiff:3.9326588731374987,MooncakeForward:28.04015790906616,MooncakeReverse:4.787643453090414,ReverseDiff:113.34571477253365,ReverseDiffCompiled:9.151569324530218,Zygote:"error"},Fa={__category__:"PosteriorDB",EnzymeForward:6.130486337858738,EnzymeReverse:4.112383244513208,FiniteDifferences:166.85241902696842,ForwardDiff:3.9974101209746133,MooncakeForward:28.235476963459284,MooncakeReverse:5.180048026727918,ReverseDiff:104.78074081657026,ReverseDiffCompiled:9.145785168660852,Zygote:"error"},Na={__category__:"Core Turing syntax",EnzymeForward:6.450456323337679,EnzymeReverse:3.6244923124465727,FiniteDifferences:119.79012238971096,ForwardDiff:2.175616875641461,MooncakeForward:8.904650424717632,MooncakeReverse:6.631915223839417,ReverseDiff:108.89288933573708,ReverseDiffCompiled:8.72610396732903,Zygote:14539.215119335506},ka={__category__:"Distributions",EnzymeForward:8.542637370726142,EnzymeReverse:9.942742861375505,FiniteDifferences:44.75611232554229,ForwardDiff:1.7219294240014205,MooncakeForward:16.123104782871145,MooncakeReverse:11.280850204658506,ReverseDiff:31.99139086867546,ReverseDiffCompiled:1.9625144004962634,Zygote:400.3464572525051},Ca={__category__:"Core Turing syntax",EnzymeForward:4.9667964557979865,EnzymeReverse:3.672904965023034,FiniteDifferences:77.21321985815604,ForwardDiff:1.6228998707244104,MooncakeForward:7.71286794747544,MooncakeReverse:5.266167664670659,ReverseDiff:133.60061570035919,ReverseDiffCompiled:11.602638860305046,Zygote:"error"},Aa={__category__:"Base Julia features",EnzymeForward:6.001397120330325,EnzymeReverse:3.4010869081028106,FiniteDifferences:70.39215179402336,ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Oa={abstractgps:Ii,assume_beta:Li,control_flow:Pi,delaydiffeq:zi,demo_assume_dot_observe:Vi,demo_assume_dot_observe_literal:qi,demo_assume_index_observe:Bi,demo_assume_matrix_observe_matrix_index:ji,demo_assume_multivariate_observe:$i,demo_assume_multivariate_observe_literal:Ui,demo_assume_observe_literal:Hi,demo_assume_submodel_observe_index_literal:Gi,assume_dirichlet:Ki,demo_dot_assume_observe:Zi,demo_dot_assume_observe_index:Wi,demo_dot_assume_observe_index_literal:Xi,demo_dot_assume_observe_matrix_index:Ji,demo_dot_assume_observe_submodel:Yi,dot_assume:Qi,dot_observe:ea,dppl_gauss_unknown:na,dppl_hier_poisson:ta,dppl_high_dim_gauss:ra,assume_lkjcholu:oa,dppl_hmm_semisup:sa,dppl_lda:ia,dppl_logistic_regression:aa,dppl_naive_bayes:la,dppl_sto_volatility:ca,dynamic_constraint:ua,lux_nn:fa,multiple_constraints_same_var:da,multithreaded:_a,n010:ma,assume_mvnormal:va,n050:ga,n100:pa,n500:ha,observe_bernoulli:ba,observe_categorical:ya,observe_index:wa,observe_literal:Ea,observe_multivariate:Da,observe_submodel:xa,observe_von_mises:Ma,assume_normal:Ra,ordinarydiffeq:Ta,pdb_eight_schools_centered:Sa,pdb_eight_schools_noncentered:Fa,assume_submodel:Na,assume_wishart:ka,broadcast_macro:Ca,call_C:Aa},Ia=`#=
This is an implementation of using AbstractGPs.jl with Turing to model a Gaussian process.
The model is adapted from the Turing documentation:
https://turinglang.org/docs/tutorials/gaussian-processes-introduction/
=#

using AbstractGPs
using LogExpFunctions

# Load data
distance = [2.,3.,4.,5.,6.]
n = [1443, 694, 455, 353, 272]
y = [1346, 577, 337, 208, 149]

# Make Turing model
@model function abstractgps(d, n, y; jitter=1e-4)
    v ~ Gamma(2, 1)
    l ~ Gamma(4, 1)
    f = GP(v * with_lengthscale(SEKernel(), l))
    f_latent ~ f(d, jitter)
    y ~ product_distribution(Binomial.(n, logistic.(f_latent)))
    return (fx=f(d, jitter), f_latent=f_latent, y=y)
end

model = abstractgps(distance, n, y)`,La=`@model function assume_beta()
    a ~ Beta(2, 2)
end

model = assume_beta()`,Pa=`#= 
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

model = control_flow()`,za=`#=
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
    du[1] = α * h(p, t - 1; idxs=1) - β * x * y
    du[2] = -γ * y + δ * x * y
    return nothing
end
p = (1.5, 1.0, 3.0, 1.0)
u0 = [1.0; 1.0]
tspan = (0.0, 10.0)
h(p, t; idxs::Int) = 1.0
prob_dde = DDEProblem(delay_lotka_volterra, u0, h, tspan, p)
sol_dde = solve(prob_dde; saveat=0.1)
q = 1.7
ddedata = rand.(Poisson.(q .* Array(sol_dde)))

@model function delaydiffeq(data, prob)
    α ~ truncated(Normal(1.5, 0.2); lower=0.5, upper=2.5)
    β ~ truncated(Normal(1.1, 0.2); lower=0, upper=2)
    γ ~ truncated(Normal(3.0, 0.2); lower=1, upper=4)
    δ ~ truncated(Normal(1.0, 0.2); lower=0, upper=2)
    q ~ truncated(Normal(1.7, 0.2); lower=0, upper=3)
    p = [α, β, γ, δ]
    predicted = solve(prob, MethodOfSteps(Tsit5()); p=p, saveat=0.1, abstol=1e-6, reltol=1e-6)
    ϵ = 1e-5
    for i in eachindex(predicted)
        data[:, i] ~ arraydist(Poisson.(q .* predicted[i] .+ ϵ))
    end
    return nothing
end

model = delaydiffeq(ddedata, prob_dde)`,Va=`@model function demo_assume_dot_observe(x = [1.5, 2.0])
    # \`assume\` and \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    x .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe()`,qa=`@model function demo_assume_dot_observe_literal()
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

model = demo_assume_index_observe()`,ja=`using LinearAlgebra: Diagonal

@model function demo_assume_matrix_observe_matrix_index(
    x = transpose([1.5 2.0;]),
    ::Type{TV} = Array{Float64},
) where {TV}
    n = length(x)
    d = n ÷ 2
    s ~ reshape(product_distribution(fill(InverseGamma(2, 3), n)), d, 2)
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

model = demo_assume_submodel_observe_index_literal()`,Ka=`@model function assume_dirichlet()
    a ~ Dirichlet([1.0, 5.0])
end

model = assume_dirichlet()`,Za=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe()`,Wa=`@model function demo_dot_assume_observe_index(
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

model = dot_observe()`,nl=`n = 10_000
s = abs(rand()) + 0.5
y = randn() .+ s * randn(n)

@model function dppl_gauss_unknown(y)
    N = length(y)
    m ~ Normal(0, 1)
    s ~ truncated(Cauchy(0, 5); lower = 0)
    y ~ product_distribution(fill(Normal(m, s), N))
end

model = dppl_gauss_unknown(y)`,tl=`using Turing: LogPoisson

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
    a0s ~ product_distribution(fill(Normal(0, a0_sig), ns))
    alpha = a0 .+ a0s[idx] .+ a1 * x
    y ~ product_distribution(LogPoisson.(alpha))
end

model = dppl_hier_poisson(y, x, idx, ns)`,rl=`@model function dppl_high_dim_gauss(D)
    m ~ product_distribution(fill(Normal(0, 1), D))
end

model = dppl_high_dim_gauss(10_000)`,ol=`@model function assume_lkjcholu()
    a ~ LKJCholesky(5, 1.0, 'U')
end

model = assume_lkjcholu()`,sl=`using StatsFuns: logsumexp

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
    theta ~ product_distribution(fill(Dirichlet(alpha), K))
    phi ~ product_distribution(fill(Dirichlet(beta), K))
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

model = dppl_hmm_semisup(K, T, T_unsup, w, z, u, alpha, beta)`,il=`v = 100      # words
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
    theta ~ product_distribution(fill(Dirichlet(alpha), m))
    phi ~ product_distribution(fill(Dirichlet(beta), k))
    log_phi_dot_theta = log.(phi * theta)
    @addlogprob! sum(log_phi_dot_theta[CartesianIndex.(w, doc)])
end

model = dppl_lda(k, m, w, doc, alpha, beta)`,al=`using StatsFuns: logistic

function safelogistic(x::T) where {T}
    logistic(x) * (1 - 2 * eps(T)) + eps(T)
end

d, n = 100, 10_000
X = randn(d, n)
w = randn(d)
y = Int.(logistic.(X' * w) .> 0.5)


@model function dppl_logistic_regression(Xt, y)
    N, D = size(Xt)
    w ~ product_distribution(Normal.(zeros(D)))
    y ~ product_distribution(Bernoulli.(safelogistic.(Xt * w)))
end

model = dppl_logistic_regression(X', y)`,ll=`using MLDatasets: MNIST
using MultivariateStats: fit, PCA, transform

# Load MNIST images and labels
features = MNIST(split = :train).features
nrows, ncols, nimages = size(features)
image_raw = Float64.(reshape(features, (nrows * ncols, nimages)))
labels = MNIST(split = :train).targets .+ 1
C = 10 # Number of labels

# Preprocess the images by reducing dimensionality
D = 40
pca = fit(PCA, image_raw; maxoutdim = D)
image = transform(pca, image_raw)

# Take only the first 1000 images and vectorise
N = 1000
image_subset = image[:, 1:N]'
image_vec = image_subset[:, :]
labels = labels[1:N]

@model function dppl_naive_bayes(image_vec, labels, C, D)
    m ~ product_distribution(fill(Normal(0, 10), C, D))
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
xt1s = Array([[x1s[i] + 0.5f0; x2s[i] + 0.5f0] for i in 1:M])
x1s = rand(Float32, M) * 4.5f0;
x2s = rand(Float32, M) * 4.5f0;
append!(xt1s, Array([[x1s[i] - 5.0f0; x2s[i] - 5.0f0] for i in 1:M]))

x1s = rand(Float32, M) * 4.5f0;
x2s = rand(Float32, M) * 4.5f0;
xt0s = Array([[x1s[i] + 0.5f0; x2s[i] - 5.0f0] for i in 1:M])
x1s = rand(Float32, M) * 4.5f0;
x2s = rand(Float32, M) * 4.5f0;
append!(xt0s, Array([[x1s[i] - 5.0f0; x2s[i] + 0.5f0] for i in 1:M]))

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
        z = reshape(view(ps_new, i:(i + length(x) - 1)), size(x))
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
Most models in ADTests are run with 1 thread. This model is run with 2 threads
to properly demonstrate the compatibility with multithreaded observe
statements. See \`main.jl\` for more information.
=#

@model function multithreaded(x)
    a ~ Normal()
    Threads.@threads for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end

model = multithreaded([1.5, 2.0, 2.5, 1.5, 2.0, 2.5])`,ml=`@model function n010(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 10)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n010()`,vl=`@model function assume_mvnormal()
    a ~ MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0])
end

model = assume_mvnormal()`,gl=`@model function n050(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 50)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n050()`,pl=`@model function n100(::Type{TV} = Vector{Float64}) where {TV}
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

model = observe_submodel()`,Ml=`@model function observe_von_mises(x)
    a ~ InverseGamma(2, 3)
    x ~ VonMises(0, a)
end

model = observe_von_mises(0.4)`,Rl=`@model function assume_normal()
    a ~ Normal()
end

model = assume_normal()`,Tl=`# See https://turinglang.org/docs/tutorials/bayesian-differential-equations/.

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

model = ordinarydiffeq(odedata, prob)`,Sl=`J = 8
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

model = pdb_eight_schools_centered(J, y, sigma)`,Fl=`J = 8
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

model = assume_wishart()`,Cl=`@model function broadcast_macro(x = [1.5, 2.0], ::Type{TV} = Vector{Float64}) where {TV}
    a ~ Normal(0, 1)
    b ~ InverseGamma(2, 3)
    @. x ~ Normal(a, $(sqrt(b)))
end

model = broadcast_macro()`,Al=`@model function call_C(y = 0.0)
    x ~ Normal(0, 1)

    # Call C library abs function
    x_abs = @ccall fabs(x::Cdouble)::Cdouble

    y ~ Normal(0, x_abs)
end

model = call_C()`,Ol={abstractgps:Ia,assume_beta:La,control_flow:Pa,delaydiffeq:za,demo_assume_dot_observe:Va,demo_assume_dot_observe_literal:qa,demo_assume_index_observe:Ba,demo_assume_matrix_observe_matrix_index:ja,demo_assume_multivariate_observe:$a,demo_assume_multivariate_observe_literal:Ua,demo_assume_observe_literal:Ha,demo_assume_submodel_observe_index_literal:Ga,assume_dirichlet:Ka,demo_dot_assume_observe:Za,demo_dot_assume_observe_index:Wa,demo_dot_assume_observe_index_literal:Xa,demo_dot_assume_observe_matrix_index:Ja,demo_dot_assume_observe_submodel:Ya,dot_assume:Qa,dot_observe:el,dppl_gauss_unknown:nl,dppl_hier_poisson:tl,dppl_high_dim_gauss:rl,assume_lkjcholu:ol,dppl_hmm_semisup:sl,dppl_lda:il,dppl_logistic_regression:al,dppl_naive_bayes:ll,dppl_sto_volatility:cl,dynamic_constraint:ul,lux_nn:fl,multiple_constraints_same_var:dl,multithreaded:_l,n010:ml,assume_mvnormal:vl,n050:gl,n100:pl,n500:hl,observe_bernoulli:bl,observe_categorical:yl,observe_index:wl,observe_literal:El,observe_multivariate:Dl,observe_submodel:xl,observe_von_mises:Ml,assume_normal:Rl,ordinarydiffeq:Tl,pdb_eight_schools_centered:Sl,pdb_eight_schools_noncentered:Fl,assume_submodel:Nl,assume_wishart:kl,broadcast_macro:Cl,call_C:Al};Es();const Il="1.20.0",Ll="1.5.0",Pl="0.5.24",zl="5.10.0",Vl="0.13.6",ql="0.4.5",Bl="0.1.43",jl="4.4.0",$l="0.8.3",Ul="0.8.9",Hl="0.7.0",Gl="0.6.0",Kl="1.1.3",Zl="2.5.0",Wl="1.1.2",Xl="0.4.0",Jl="0.5.4",Yl="3.5.1+1",Ql="7.22.0",ec="1.12.2",nc="1.11.0",tc="1.1.2",rc="0.5.2",oc="1.1.0",sc="0.4.8",ic="0.5.1",ac="0.4.6",lc="1.11.0",cc="0.1.1",uc="0.15.14",fc="0.1.9",dc="0.1.6",_c="1.6.0",mc="1.2.2",vc="0.5.0",gc="0.2.7",pc="0.10.15",hc="0.3.14",bc="1.72.6",yc="1.26.0",wc="1.3.1",Ec="0.1.10",Dc="0.10.43",xc="0.10.4+0",Mc="0.1.13",Rc="0.7.8",Tc="3.31.0",Sc="0.12.1",Fc="0.11.0",Nc="0.13.1",kc="1.0.3",Cc="0.2.4",Ac="0.3.1",Oc="1.0.0",Ic="4.18.1",Lc="1.1.1+0",Pc="0.1.2",zc="0.2.3",Vc="2.5.0",qc="0.1.2",Bc="1.6.0",jc="0.1.3",$c="0.3.1",Uc="4.1.1",Hc="1.16.0",Gc="0.7.13",Kc="1.8.1",Zc="0.18.22",Wc="1.0.0",Xc="1.11.0",Jc="0.1.2",Yc="5.62.0",Qc="1.9.1",eu="0.4.0",nu="6.192.0",tu="4.10.1",ru="5.24.1",ou="1.1.0",su="1.15.1",iu="0.7.12",au="0.4.26",lu="0.10.12",cu="1.11.0",uu="0.25.122",fu="0.6.58",du="0.9.5",_u="1.6.0",mu="0.39.1",vu="2.0.0",gu="1.0.5",pu="0.13.108",hu="0.8.17",bu="0.0.221+0",yu="0.1.11",wu="1.28.0",Eu="0.1.10",Du="0.10.14",xu="1.10.0",Mu="3.3.11+0",Ru="0.2.2",Tu="0.1.1",Su="0.3.5",Fu="0.3.2",Nu="1.1.0",ku="1.2.0",Cu="1.17.1",Au="0.9.24",Ou="1.11.0",Iu="1.15.0",Lu="2.29.0",Pu="0.12.33",zu="0.8.5",Vu="1.3.0",qu="0.1.2",Bu="1.1.3",ju="0.1.3",$u="0.5.2",Uu="1.11.0",Hu="0.2.0",Gu="1.7.5",Ku="0.6.2",Zu="0.5.6",Wu="1.3.1",Xu="1.13.1",Ju="0.17.2",Yu="1.14.6+0",Qu="1.10.19",ef="0.2.0",nf="2.12.2+0",tf="0.3.28",rf="0.4.15",of="0.1.1",sf="0.1.7",af="0.10.5",lf="0.3.8",cf="0.1.5",uf="0.3.1",ff="1.4.5",df="2025.2.0+0",_f="1.11.0",mf="0.7.0",vf="0.16.2",gf="0.7.13",pf="0.1.17",hf="1.3.1",bf="0.2.6",yf="1.10.0",wf="1.0.0",Ef="0.5.15",Df="1.7.1",xf="1.14.3",Mf="0.2.1",Rf="0.2.4",Tf="0.9.39",Sf="0.6.10",Ff="0.10.66",Nf="0.10.3",kf="9.4.4",Cf="0.0.38+0",Af="1.4.0",Of="0.1.17",If="2.9.4",Lf="1.11.0",Pf="0.3.1",zf="0.2.1",Vf="0.6.4",qf="8.6.0+0",Bf="1.11.0",jf="1.7.2+0",$f="1.11.0+1",Uf="0.9.1+6",Hf="1.11.0",Gf="1.18.0+0",Kf="0.9.10",Zf="0.1.4",Wf="7.5.1",Xf="1.11.0",Jf="3.48.1",Yf="2.2.0",Qf="1.13.1",ed="0.3.29",nd="1.11.0",td="1.2.0",rd="1.21.1",od="1.4.2",sd="1.13.1",id="0.10.7",ad="7.6.0",ld="0.3.15",cd="2025.2.0+0",ud="1.0.0",fd="1.15.1",dd="0.7.18",_d="1.12.0",md="0.4.17",vd="0.4.8",gd="4.3.2+0",pd="0.1.11",hd="5.5.4+0",bd="0.5.16",yd="0.1.8",wd="0.4.2",Ed="1.11.0",Dd="0.1.4",xd="1.1.9",Md="2.28.6+0",Rd="0.2.0",Td="10.1.4+3",Sd="1.2.0",Fd="2.1.0",Nd="1.11.0",kd="0.4.182",Cd="0.3.4",Ad="0.3.7",Od="2023.12.12",Id="0.2.4",Ld="0.10.3",Pd="7.10.0",zd="0.9.31",Vd="0.4.3",qd="1.1.3",Bd="0.1.5",jd="0.10.5",$d="1.0.0",Ud="1.2.0",Hd="4.12.0",Gd="2.5.0",Kd="1.10.0",Zd="1.11.0",Wd="1.6.0",Xd="0.5.0",Jd="1.17.0",Yd="0.3.27+1",Qd="0.8.5+0",e1="5.0.9+0",n1="1.6.1",t1="3.5.4+0",r1="0.5.6+0",o1="1.13.3",s1="0.4.6",i1="5.2.0",a1="4.0.2",l1="0.4.8",c1="1.8.1",u1="6.103.0",f1="1.5.0",d1="1.10.1",_1="1.36.0",m1="1.8.0",v1="1.16.1",g1="1.4.0",p1="1.8.0",h1="1.9.0",b1="1.16.0",y1="1.4.0",w1="1.5.0",E1="1.5.0",D1="1.7.0",x1="1.6.0",M1="1.6.0",R1="1.7.0",T1="1.15.0",S1="1.4.0",F1="1.6.0",N1="1.4.0",k1="1.4.0",C1="1.5.0",A1="1.18.1",O1="1.7.0",I1="1.7.0",L1="1.6.0",P1="1.4.0",z1="1.7.0",V1="1.5.0",q1="1.6.0",B1="0.11.36",j1="1.0.2",$1="0.5.12",U1="2.8.3",H1="1.2.1",G1="0.3.6",K1="1.11.0",Z1="0.4.7",W1="0.7.18",X1="0.2.2",J1="1.4.3",Y1="0.2.4",Q1="0.4.34",e0="1.2.1",n0="1.5.0",t0="0.2.0",r0="3.1.2",o0="1.11.0",s0="0.1.6",i0="1.11.0",a0="1.3.0",l0="2.11.2",c0="1.11.0",u0="1.11.0",f0="1.7.1",d0="1.6.0",_0="0.3.2",m0="0.4.5",v0="0.1.0",g0="1.3.4",p0="3.39.0",h0="1.2.2",b0="1.3.1",y0="1.1.1",w0="1.16.1",E0="1.4.2",D0="0.9.0",x0="0.5.1+0",M0="2.2.10",R0="0.5.16",T0="0.7.0",S0="0.1.0",F0="0.5.2",N0="2.128.0",k0="0.1.11",C0="1.6.0",A0="1.14.0",O0="1.0.0",I0="7.90.0",L0="1.7.0",P0="3.0.0",z0="1.5.0",V0="1.3.0",q0="1.4.8",B0="1.11.0",j0="1.1.2",$0="1.11.0",U0="0.1.0",H0="1.2.0",G0="2.9.0",K0="0.9.5",Z0="1.1.0",W0="1.11.0",X0="1.2.2",J0="1.11.0",Y0="1.1.3",Q0="0.1.2",e_="0.4.23",n_="2.6.1",t_="0.1.15",r_="0.1.2",o_="1.3.1",s_="1.8.0",i_="1.9.15",a_="1.4.4",l_="3.5.0",c_="1.11.1",u_="1.8.0",f_="0.34.9",d_="1.5.2",__="0.5.8",m_="0.4.1",v_="0.3.7",g_="0.4.2",p_="0.7.2",h_="0.3.1",b_="1.11.0",y_="2.6.0",w_="1.11.0",E_=null,D_="7.7.0+0",x_="0.3.46",M_="1.0.3",R_="1.0.1",T_="1.12.1",S_="1.10.0",F_="0.1.1",N_="0.1.7",k_="1.11.0",C_="0.5.5",A_="0.5.29",O_="0.2.38",I_="0.1.6",L_="0.11.3",P_="0.4.85",z_="1.4.0",V_="0.42.0",q_="1.6.1",B_="1.11.0",j_="1.0.2",$_="1.11.0",U_="1.26.0",H_="1.0.0",G_="0.3.0",K_="1.4.2",Z_="1.2.2",W_="1.0.0",X_="1.6.1",J_="2.13.9+0",Y_="0.18.1+0",Q_="0.10.1",em="1.2.13+1",nm="0.7.10",tm="0.2.7",rm="1.1.4+0",om="5.11.0+0",sm="1.59.0+0",im="2022.0.0+1",am="17.4.0+2",lm={ADTypes:Il,AbstractFFTs:Ll,AbstractGPs:Pl,AbstractMCMC:zl,AbstractPPL:Vl,AbstractTrees:ql,Accessors:Bl,Adapt:jl,AdvancedHMC:$l,AdvancedMH:Ul,AdvancedPS:Hl,AdvancedVI:Gl,AliasTables:Kl,ArgCheck:Zl,ArgTools:Wl,ArnoldiMethod:Xl,Arpack:Jl,Arpack_jll:Yl,ArrayInterface:Ql,ArrayLayouts:ec,Artifacts:nc,Atomix:tc,AtomsBase:rc,AxisAlgorithms:oc,AxisArrays:sc,BFloat16s:ic,BangBang:ac,Base64:lc,Baselet:cc,Bijectors:uc,BitFlags:fc,BitTwiddlingConvenienceFunctions:dc,BracketingNonlinearSolve:_c,BufferedStreams:mc,CEnum:vc,CPUSummary:gc,CSV:pc,Cassette:hc,ChainRules:bc,ChainRulesCore:yc,Chairmarks:wc,ChangesOfVariables:Ec,Chemfiles:Dc,Chemfiles_jll:xc,CloseOpenIntervals:Mc,CodecZlib:Rc,ColorSchemes:Tc,ColorTypes:Sc,ColorVectorSpace:Fc,Colors:Nc,Combinatorics:kc,CommonSolve:Cc,CommonSubexpressions:Ac,CommonWorldInvalidations:Oc,Compat:Ic,CompilerSupportLibraries_jll:Lc,CompositionsBase:Pc,ConcreteStructs:zc,ConcurrentUtilities:Vc,ConsoleProgressMonitor:qc,ConstructionBase:Bc,ContextVariablesX:jc,CpuId:$c,Crayons:Uc,DataAPI:Hc,DataDeps:Gc,DataFrames:Kc,DataStructures:Zc,DataValueInterfaces:Wc,Dates:Xc,DefineSingletons:Jc,DelayDiffEq:Yc,DelimitedFiles:Qc,DensityInterface:eu,DiffEqBase:nu,DiffEqCallbacks:tu,DiffEqNoiseProcess:ru,DiffResults:ou,DiffRules:su,DifferentiationInterface:iu,DispatchDoctor:au,Distances:lu,Distributed:cu,Distributions:uu,DistributionsAD:fu,DocStringExtensions:du,Downloads:_u,DynamicPPL:mu,EllipticalSliceSampling:vu,EnumX:gu,Enzyme:pu,EnzymeCore:hu,Enzyme_jll:bu,ExceptionUnwrapping:yu,ExponentialUtilities:wu,ExprTools:Eu,ExproniconLite:Du,FFTW:xu,FFTW_jll:Mu,FLoops:Ru,FLoopsBase:Tu,FastBroadcast:Su,FastClosures:Fu,FastGaussQuadrature:Nu,FastPower:ku,FileIO:Cu,FilePathsBase:Au,FileWatching:Ou,FillArrays:Iu,FiniteDiff:Lu,FiniteDifferences:Pu,FixedPointNumbers:zu,ForwardDiff:Vu,FunctionProperties:qu,FunctionWrappers:Bu,FunctionWrappersWrappers:ju,Functors:$u,Future:Uu,GPUArraysCore:Hu,GPUCompiler:Gu,GZip:Ku,GenericSchur:Zu,Glob:Wu,Graphs:Xu,HDF5:Ju,HDF5_jll:Yu,HTTP:Qu,HashArrayMappedTries:ef,Hwloc_jll:nf,HypergeometricFunctions:tf,IRTools:rf,IfElse:of,ImageBase:sf,ImageCore:af,ImageShow:lf,Inflate:cf,InitialValues:uf,InlineStrings:ff,IntelOpenMP_jll:df,InteractiveUtils:_f,InternedStrings:mf,Interpolations:vf,IntervalSets:gf,InverseFunctions:pf,InvertedIndices:hf,IrrationalConstants:bf,IterTools:yf,IteratorInterfaceExtensions:wf,JLD2:Ef,JLLWrappers:Df,JSON:"1.3.0",JSON3:xf,Jieko:Mf,JuliaVariables:Rf,KernelAbstractions:Tf,KernelDensity:Sf,KernelFunctions:Ff,Krylov:Nf,LLVM:kf,LLVMExtra_jll:Cf,LaTeXStrings:Af,LayoutPointers:Of,LazyArrays:If,LazyArtifacts:Lf,LazyModules:Pf,LeftChildRightSiblingTrees:zf,LibCURL:Vf,LibCURL_jll:qf,LibGit2:Bf,LibGit2_jll:jf,LibSSH2_jll:$f,LibTracyClient_jll:Uf,Libdl:Hf,Libiconv_jll:Gf,Libtask:Kf,LineSearch:Zf,LineSearches:Wf,LinearAlgebra:Xf,LinearSolve:Jf,LogDensityProblems:Yf,LogDensityProblemsAD:Qf,LogExpFunctions:ed,Logging:nd,LoggingExtras:td,Lux:rd,LuxCore:od,LuxLib:sd,MAT:id,MCMCChains:ad,MCMCDiagnosticTools:ld,MKL_jll:cd,MLCore:ud,MLDataDevices:fd,MLDatasets:dd,MLJModelInterface:_d,MLStyle:md,MLUtils:vd,MPICH_jll:gd,MPIPreferences:pd,MPItrampoline_jll:hd,MacroTools:bd,ManualMemory:yd,MappedArrays:wd,Markdown:Ed,MaybeInplace:Dd,MbedTLS:xd,MbedTLS_jll:Md,MicroCollections:Rd,MicrosoftMPI_jll:Td,Missings:Sd,MistyClosures:Fd,Mmap:Nd,Mooncake:kd,MosaicViews:Cd,Moshi:Ad,MozillaCACerts_jll:Od,MuladdMacro:Id,MultivariateStats:Ld,NLSolversBase:Pd,NNlib:zd,NPZ:Vd,NaNMath:qd,NameResolution:Bd,NamedArrays:jd,NaturalSort:$d,NetworkOptions:Ud,NonlinearSolve:Hd,NonlinearSolveBase:Gd,NonlinearSolveFirstOrder:Kd,NonlinearSolveQuasiNewton:Zd,NonlinearSolveSpectralMethods:Wd,ObjectFile:Xd,OffsetArrays:Jd,OpenBLAS_jll:Yd,OpenLibm_jll:Qd,OpenMPI_jll:e1,OpenSSL:n1,OpenSSL_jll:t1,OpenSpecFun_jll:r1,Optim:o1,Optimisers:s1,Optimization:i1,OptimizationBase:a1,OptimizationOptimJL:l1,OrderedCollections:c1,OrdinaryDiffEq:u1,OrdinaryDiffEqAdamsBashforthMoulton:f1,OrdinaryDiffEqBDF:d1,OrdinaryDiffEqCore:_1,OrdinaryDiffEqDefault:m1,OrdinaryDiffEqDifferentiation:v1,OrdinaryDiffEqExplicitRK:g1,OrdinaryDiffEqExponentialRK:p1,OrdinaryDiffEqExtrapolation:h1,OrdinaryDiffEqFIRK:b1,OrdinaryDiffEqFeagin:y1,OrdinaryDiffEqFunctionMap:w1,OrdinaryDiffEqHighOrderRK:E1,OrdinaryDiffEqIMEXMultistep:D1,OrdinaryDiffEqLinear:x1,OrdinaryDiffEqLowOrderRK:M1,OrdinaryDiffEqLowStorageRK:R1,OrdinaryDiffEqNonlinearSolve:T1,OrdinaryDiffEqNordsieck:S1,OrdinaryDiffEqPDIRK:F1,OrdinaryDiffEqPRK:N1,OrdinaryDiffEqQPRK:k1,OrdinaryDiffEqRKN:C1,OrdinaryDiffEqRosenbrock:A1,OrdinaryDiffEqSDIRK:O1,OrdinaryDiffEqSSPRK:I1,OrdinaryDiffEqStabilizedIRK:L1,OrdinaryDiffEqStabilizedRK:P1,OrdinaryDiffEqSymplecticRK:z1,OrdinaryDiffEqTsit5:V1,OrdinaryDiffEqVerner:q1,PDMats:B1,PackageExtensionCompat:j1,PaddedViews:$1,Parsers:U1,PeriodicTable:H1,Pickle:G1,Pkg:K1,PoissonRandom:Z1,Polyester:W1,PolyesterWeave:X1,PooledArrays:J1,PositiveFactorizations:Y1,PreallocationTools:Q1,PrecompileTools:e0,Preferences:n0,PrettyPrint:t0,PrettyTables:r0,Printf:o0,ProgressLogging:s0,ProgressMeter:i0,PtrArrays:a0,QuadGK:l0,REPL:c0,Random:u0,Random123:f0,RandomNumbers:d0,RangeArrays:_0,Ratios:m0,RealDot:v0,RecipesBase:g0,RecursiveArrayTools:p0,Reexport:h0,Requires:b0,ResettableStacks:y0,ReverseDiff:w0,Richardson:E0,Rmath:D0,Rmath_jll:x0,Roots:M0,RuntimeGeneratedFunctions:R0,SHA:T0,SIMDTypes:S0,SSMProblems:F0,SciMLBase:N0,SciMLJacobianOperators:k0,SciMLLogging:C0,SciMLOperators:A0,SciMLPublic:O0,SciMLSensitivity:I0,SciMLStructures:L0,ScientificTypesBase:P0,ScopedValues:z0,Scratch:V0,SentinelArrays:q0,Serialization:B0,Setfield:j0,SharedArrays:$0,ShowCases:U0,SimpleBufferStream:H0,SimpleNonlinearSolve:G0,SimpleTraits:K0,SimpleUnPack:Z0,Sockets:W0,SortingAlgorithms:X0,SparseArrays:J0,SparseConnectivityTracer:Y0,SparseInverseSubset:Q0,SparseMatrixColorings:e_,SpecialFunctions:n_,SplittablesBase:t_,StackViews:r_,Static:o_,StaticArrayInterface:s_,StaticArrays:i_,StaticArraysCore:a_,StatisticalTraits:l_,Statistics:c_,StatsAPI:u_,StatsBase:f_,StatsFuns:d_,StrideArraysCore:__,StridedViews:m_,StringEncodings:v_,StringManipulation:g_,StructArrays:p_,StructIO:h_,StructTypes:b_,StructUtils:y_,StyledStrings:w_,SuiteSparse:E_,SuiteSparse_jll:D_,SymbolicIndexingInterface:x_,TOML:M_,TableTraits:R_,Tables:T_,Tar:S_,TensorCore:F_,TerminalLoggers:N_,Test:k_,ThreadingUtilities:C_,TimerOutputs:A_,Tracker:O_,Tracy:I_,TranscodingStreams:L_,Transducers:P_,TruncatedStacktraces:z_,Turing:V_,URIs:q_,UUIDs:B_,UnPack:j_,Unicode:$_,Unitful:U_,UnitfulAtomic:H_,UnsafeAtomics:G_,WeakRefStrings:K_,WeightInitializers:Z_,WoodburyMatrices:W_,WorkerUtilities:X_,XML2_jll:J_,Xorg_libpciaccess_jll:Y_,ZipFile:Q_,Zlib_jll:em,Zygote:nm,ZygoteRules:tm,libaec_jll:rm,libblastrampoline_jll:om,nghttp2_jll:sm,oneTBB_jll:im,p7zip_jll:am};function Lt(e){return[...e.entries()].sort(([n,t],[r,o])=>n.localeCompare(r))}var cm=ue('<tr><td class="svelte-yinbl0"> </td><td class="version svelte-yinbl0"> </td></tr>'),um=ue('<table class="svelte-yinbl0"><thead><tr><th class="svelte-yinbl0">Package</th><th class="svelte-yinbl0">Version</th></tr></thead><tbody></tbody></table>');function fm(e,n){_n(n,!1);let t=new Map;for(const[s,a]of Object.entries(lm))t.set(s,a===""?null:a);mo();var r=um(),o=se(V(r));Rn(o,5,()=>Lt(t),Mn,(s,a,c)=>{let l=()=>E(a)[0],u=()=>E(a)[1];var m=cm();Fn(m,1,"svelte-yinbl0",null,{},{alt:c%2===1});var _=V(m),f=V(_),h=se(_),b=V(h);he(()=>{Ve(f,l()),Ve(b,u()===null?"":`v${u()}`)}),G(s,m)}),G(e,r),mn()}var dm=ue('<td class="model-name svelte-73y89f"> </td>');function _m(e,n){var t=dm();t.__click=function(...o){var s;(s=n.onToggle)==null||s.apply(this,o)};var r=V(t);he(()=>Ve(r,n.name)),G(e,t)}ft(["click"]);function mm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tt,Sr;function vm(){if(Sr)return Tt;Sr=1;function e(i){return i instanceof Map?i.clear=i.delete=i.set=function(){throw new Error("map is read-only")}:i instanceof Set&&(i.add=i.clear=i.delete=function(){throw new Error("set is read-only")}),Object.freeze(i),Object.getOwnPropertyNames(i).forEach(d=>{const p=i[d],C=typeof p;(C==="object"||C==="function")&&!Object.isFrozen(p)&&e(p)}),i}class n{constructor(d){d.data===void 0&&(d.data={}),this.data=d.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(i,...d){const p=Object.create(null);for(const C in i)p[C]=i[C];return d.forEach(function(C){for(const W in C)p[W]=C[W]}),p}const o="</span>",s=i=>!!i.scope,a=(i,{prefix:d})=>{if(i.startsWith("language:"))return i.replace("language:","language-");if(i.includes(".")){const p=i.split(".");return[`${d}${p.shift()}`,...p.map((C,W)=>`${C}${"_".repeat(W+1)}`)].join(" ")}return`${d}${i}`};class c{constructor(d,p){this.buffer="",this.classPrefix=p.classPrefix,d.walk(this)}addText(d){this.buffer+=t(d)}openNode(d){if(!s(d))return;const p=a(d.scope,{prefix:this.classPrefix});this.span(p)}closeNode(d){s(d)&&(this.buffer+=o)}value(){return this.buffer}span(d){this.buffer+=`<span class="${d}">`}}const l=(i={})=>{const d={children:[]};return Object.assign(d,i),d};class u{constructor(){this.rootNode=l(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(d){this.top.children.push(d)}openNode(d){const p=l({scope:d});this.add(p),this.stack.push(p)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(d){return this.constructor._walk(d,this.rootNode)}static _walk(d,p){return typeof p=="string"?d.addText(p):p.children&&(d.openNode(p),p.children.forEach(C=>this._walk(d,C)),d.closeNode(p)),d}static _collapse(d){typeof d!="string"&&d.children&&(d.children.every(p=>typeof p=="string")?d.children=[d.children.join("")]:d.children.forEach(p=>{u._collapse(p)}))}}class m extends u{constructor(d){super(),this.options=d}addText(d){d!==""&&this.add(d)}startScope(d){this.openNode(d)}endScope(){this.closeNode()}__addSublanguage(d,p){const C=d.root;p&&(C.scope=`language:${p}`),this.add(C)}toHTML(){return new c(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(i){return i?typeof i=="string"?i:i.source:null}function f(i){return N("(?=",i,")")}function h(i){return N("(?:",i,")*")}function b(i){return N("(?:",i,")?")}function N(...i){return i.map(p=>_(p)).join("")}function S(i){const d=i[i.length-1];return typeof d=="object"&&d.constructor===Object?(i.splice(i.length-1,1),d):{}}function L(...i){return"("+(S(i).capture?"":"?:")+i.map(C=>_(C)).join("|")+")"}function q(i){return new RegExp(i.toString()+"|").exec("").length-1}function x(i,d){const p=i&&i.exec(d);return p&&p.index===0}const g=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function y(i,{joinWith:d}){let p=0;return i.map(C=>{p+=1;const W=p;let X=_(C),M="";for(;X.length>0;){const D=g.exec(X);if(!D){M+=X;break}M+=X.substring(0,D.index),X=X.substring(D.index+D[0].length),D[0][0]==="\\"&&D[1]?M+="\\"+String(Number(D[1])+W):(M+=D[0],D[0]==="("&&p++)}return M}).map(C=>`(${C})`).join(d)}const z=/\b\B/,R="[a-zA-Z]\\w*",O="[a-zA-Z_]\\w*",Z="\\b\\d+(\\.\\d+)?",fe="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ee="\\b(0b[01]+)",ne="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",de=(i={})=>{const d=/^#![ ]*\//;return i.binary&&(i.begin=N(d,/.*\b/,i.binary,/\b.*/)),r({scope:"meta",begin:d,end:/$/,relevance:0,"on:begin":(p,C)=>{p.index!==0&&C.ignoreMatch()}},i)},ye={begin:"\\\\[\\s\\S]",relevance:0},Re={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ye]},me={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ye]},Te={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},De=function(i,d,p={}){const C=r({scope:"comment",begin:i,end:d,contains:[]},p);C.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const W=L("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return C.contains.push({begin:N(/[ ]+/,"(",W,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),C},pn=De("//","$"),Se=De("/\\*","\\*/"),ie=De("#","$"),Fe={scope:"number",begin:Z,relevance:0},hn={scope:"number",begin:fe,relevance:0},nn={scope:"number",begin:ee,relevance:0},_t={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ye,{begin:/\[/,end:/\]/,relevance:0,contains:[ye]}]},bn={scope:"title",begin:R,relevance:0},An={scope:"title",begin:O,relevance:0},mt={begin:"\\.\\s*"+O,relevance:0};var On=Object.freeze({__proto__:null,APOS_STRING_MODE:Re,BACKSLASH_ESCAPE:ye,BINARY_NUMBER_MODE:nn,BINARY_NUMBER_RE:ee,COMMENT:De,C_BLOCK_COMMENT_MODE:Se,C_LINE_COMMENT_MODE:pn,C_NUMBER_MODE:hn,C_NUMBER_RE:fe,END_SAME_AS_BEGIN:function(i){return Object.assign(i,{"on:begin":(d,p)=>{p.data._beginMatch=d[1]},"on:end":(d,p)=>{p.data._beginMatch!==d[1]&&p.ignoreMatch()}})},HASH_COMMENT_MODE:ie,IDENT_RE:R,MATCH_NOTHING_RE:z,METHOD_GUARD:mt,NUMBER_MODE:Fe,NUMBER_RE:Z,PHRASAL_WORDS_MODE:Te,QUOTE_STRING_MODE:me,REGEXP_MODE:_t,RE_STARTERS_RE:ne,SHEBANG:de,TITLE_MODE:bn,UNDERSCORE_IDENT_RE:O,UNDERSCORE_TITLE_MODE:An});function ho(i,d){i.input[i.index-1]==="."&&d.ignoreMatch()}function bo(i,d){i.className!==void 0&&(i.scope=i.className,delete i.className)}function yo(i,d){d&&i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",i.__beforeBegin=ho,i.keywords=i.keywords||i.beginKeywords,delete i.beginKeywords,i.relevance===void 0&&(i.relevance=0))}function wo(i,d){Array.isArray(i.illegal)&&(i.illegal=L(...i.illegal))}function Eo(i,d){if(i.match){if(i.begin||i.end)throw new Error("begin & end are not supported with match");i.begin=i.match,delete i.match}}function Do(i,d){i.relevance===void 0&&(i.relevance=1)}const xo=(i,d)=>{if(!i.beforeMatch)return;if(i.starts)throw new Error("beforeMatch cannot be used with starts");const p=Object.assign({},i);Object.keys(i).forEach(C=>{delete i[C]}),i.keywords=p.keywords,i.begin=N(p.beforeMatch,f(p.begin)),i.starts={relevance:0,contains:[Object.assign(p,{endsParent:!0})]},i.relevance=0,delete p.beforeMatch},Mo=["of","and","for","in","not","or","if","then","parent","list","value"],Ro="keyword";function Jt(i,d,p=Ro){const C=Object.create(null);return typeof i=="string"?W(p,i.split(" ")):Array.isArray(i)?W(p,i):Object.keys(i).forEach(function(X){Object.assign(C,Jt(i[X],d,X))}),C;function W(X,M){d&&(M=M.map(D=>D.toLowerCase())),M.forEach(function(D){const k=D.split("|");C[k[0]]=[X,To(k[0],k[1])]})}}function To(i,d){return d?Number(d):So(i)?0:1}function So(i){return Mo.includes(i.toLowerCase())}const Yt={},Je=i=>{console.error(i)},Qt=(i,...d)=>{console.log(`WARN: ${i}`,...d)},tn=(i,d)=>{Yt[`${i}/${d}`]||(console.log(`Deprecated as of ${i}. ${d}`),Yt[`${i}/${d}`]=!0)},In=new Error;function er(i,d,{key:p}){let C=0;const W=i[p],X={},M={};for(let D=1;D<=d.length;D++)M[D+C]=W[D],X[D+C]=!0,C+=q(d[D-1]);i[p]=M,i[p]._emit=X,i[p]._multi=!0}function Fo(i){if(Array.isArray(i.begin)){if(i.skip||i.excludeBegin||i.returnBegin)throw Je("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),In;if(typeof i.beginScope!="object"||i.beginScope===null)throw Je("beginScope must be object"),In;er(i,i.begin,{key:"beginScope"}),i.begin=y(i.begin,{joinWith:""})}}function No(i){if(Array.isArray(i.end)){if(i.skip||i.excludeEnd||i.returnEnd)throw Je("skip, excludeEnd, returnEnd not compatible with endScope: {}"),In;if(typeof i.endScope!="object"||i.endScope===null)throw Je("endScope must be object"),In;er(i,i.end,{key:"endScope"}),i.end=y(i.end,{joinWith:""})}}function ko(i){i.scope&&typeof i.scope=="object"&&i.scope!==null&&(i.beginScope=i.scope,delete i.scope)}function Co(i){ko(i),typeof i.beginScope=="string"&&(i.beginScope={_wrap:i.beginScope}),typeof i.endScope=="string"&&(i.endScope={_wrap:i.endScope}),Fo(i),No(i)}function Ao(i){function d(M,D){return new RegExp(_(M),"m"+(i.case_insensitive?"i":"")+(i.unicodeRegex?"u":"")+(D?"g":""))}class p{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(D,k){k.position=this.position++,this.matchIndexes[this.matchAt]=k,this.regexes.push([k,D]),this.matchAt+=q(D)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const D=this.regexes.map(k=>k[1]);this.matcherRe=d(y(D,{joinWith:"|"}),!0),this.lastIndex=0}exec(D){this.matcherRe.lastIndex=this.lastIndex;const k=this.matcherRe.exec(D);if(!k)return null;const te=k.findIndex((yn,gt)=>gt>0&&yn!==void 0),J=this.matchIndexes[te];return k.splice(0,te),Object.assign(k,J)}}class C{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(D){if(this.multiRegexes[D])return this.multiRegexes[D];const k=new p;return this.rules.slice(D).forEach(([te,J])=>k.addRule(te,J)),k.compile(),this.multiRegexes[D]=k,k}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(D,k){this.rules.push([D,k]),k.type==="begin"&&this.count++}exec(D){const k=this.getMatcher(this.regexIndex);k.lastIndex=this.lastIndex;let te=k.exec(D);if(this.resumingScanAtSamePosition()&&!(te&&te.index===this.lastIndex)){const J=this.getMatcher(0);J.lastIndex=this.lastIndex+1,te=J.exec(D)}return te&&(this.regexIndex+=te.position+1,this.regexIndex===this.count&&this.considerAll()),te}}function W(M){const D=new C;return M.contains.forEach(k=>D.addRule(k.begin,{rule:k,type:"begin"})),M.terminatorEnd&&D.addRule(M.terminatorEnd,{type:"end"}),M.illegal&&D.addRule(M.illegal,{type:"illegal"}),D}function X(M,D){const k=M;if(M.isCompiled)return k;[bo,Eo,Co,xo].forEach(J=>J(M,D)),i.compilerExtensions.forEach(J=>J(M,D)),M.__beforeBegin=null,[yo,wo,Do].forEach(J=>J(M,D)),M.isCompiled=!0;let te=null;return typeof M.keywords=="object"&&M.keywords.$pattern&&(M.keywords=Object.assign({},M.keywords),te=M.keywords.$pattern,delete M.keywords.$pattern),te=te||/\w+/,M.keywords&&(M.keywords=Jt(M.keywords,i.case_insensitive)),k.keywordPatternRe=d(te,!0),D&&(M.begin||(M.begin=/\B|\b/),k.beginRe=d(k.begin),!M.end&&!M.endsWithParent&&(M.end=/\B|\b/),M.end&&(k.endRe=d(k.end)),k.terminatorEnd=_(k.end)||"",M.endsWithParent&&D.terminatorEnd&&(k.terminatorEnd+=(M.end?"|":"")+D.terminatorEnd)),M.illegal&&(k.illegalRe=d(M.illegal)),M.contains||(M.contains=[]),M.contains=[].concat(...M.contains.map(function(J){return Oo(J==="self"?M:J)})),M.contains.forEach(function(J){X(J,k)}),M.starts&&X(M.starts,D),k.matcher=W(k),k}if(i.compilerExtensions||(i.compilerExtensions=[]),i.contains&&i.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return i.classNameAliases=r(i.classNameAliases||{}),X(i)}function nr(i){return i?i.endsWithParent||nr(i.starts):!1}function Oo(i){return i.variants&&!i.cachedVariants&&(i.cachedVariants=i.variants.map(function(d){return r(i,{variants:null},d)})),i.cachedVariants?i.cachedVariants:nr(i)?r(i,{starts:i.starts?r(i.starts):null}):Object.isFrozen(i)?r(i):i}var Io="11.11.1";class Lo extends Error{constructor(d,p){super(d),this.name="HTMLInjectionError",this.html=p}}const vt=t,tr=r,rr=Symbol("nomatch"),Po=7,or=function(i){const d=Object.create(null),p=Object.create(null),C=[];let W=!0;const X="Could not find the language '{}', did you forget to load/include a language module?",M={disableAutodetect:!0,name:"Plain text",contains:[]};let D={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:m};function k(v){return D.noHighlightRe.test(v)}function te(v){let F=v.className+" ";F+=v.parentNode?v.parentNode.className:"";const P=D.languageDetectRe.exec(F);if(P){const U=je(P[1]);return U||(Qt(X.replace("{}",P[1])),Qt("Falling back to no-highlight mode for this block.",v)),U?P[1]:"no-highlight"}return F.split(/\s+/).find(U=>k(U)||je(U))}function J(v,F,P){let U="",Q="";typeof F=="object"?(U=v,P=F.ignoreIllegals,Q=F.language):(tn("10.7.0","highlight(lang, code, ...args) has been deprecated."),tn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),Q=v,U=F),P===void 0&&(P=!0);const xe={code:U,language:Q};Pn("before:highlight",xe);const $e=xe.result?xe.result:yn(xe.language,xe.code,P);return $e.code=xe.code,Pn("after:highlight",$e),$e}function yn(v,F,P,U){const Q=Object.create(null);function xe(w,T){return w.keywords[T]}function $e(){if(!A.keywords){re.addText(H);return}let w=0;A.keywordPatternRe.lastIndex=0;let T=A.keywordPatternRe.exec(H),I="";for(;T;){I+=H.substring(w,T.index);const B=ke.case_insensitive?T[0].toLowerCase():T[0],oe=xe(A,B);if(oe){const[Le,es]=oe;if(re.addText(I),I="",Q[B]=(Q[B]||0)+1,Q[B]<=Po&&(qn+=es),Le.startsWith("_"))I+=T[0];else{const ns=ke.classNameAliases[Le]||Le;Ne(T[0],ns)}}else I+=T[0];w=A.keywordPatternRe.lastIndex,T=A.keywordPatternRe.exec(H)}I+=H.substring(w),re.addText(I)}function zn(){if(H==="")return;let w=null;if(typeof A.subLanguage=="string"){if(!d[A.subLanguage]){re.addText(H);return}w=yn(A.subLanguage,H,!0,dr[A.subLanguage]),dr[A.subLanguage]=w._top}else w=pt(H,A.subLanguage.length?A.subLanguage:null);A.relevance>0&&(qn+=w.relevance),re.__addSublanguage(w._emitter,w.language)}function ve(){A.subLanguage!=null?zn():$e(),H=""}function Ne(w,T){w!==""&&(re.startScope(T),re.addText(w),re.endScope())}function lr(w,T){let I=1;const B=T.length-1;for(;I<=B;){if(!w._emit[I]){I++;continue}const oe=ke.classNameAliases[w[I]]||w[I],Le=T[I];oe?Ne(Le,oe):(H=Le,$e(),H=""),I++}}function cr(w,T){return w.scope&&typeof w.scope=="string"&&re.openNode(ke.classNameAliases[w.scope]||w.scope),w.beginScope&&(w.beginScope._wrap?(Ne(H,ke.classNameAliases[w.beginScope._wrap]||w.beginScope._wrap),H=""):w.beginScope._multi&&(lr(w.beginScope,T),H="")),A=Object.create(w,{parent:{value:A}}),A}function ur(w,T,I){let B=x(w.endRe,I);if(B){if(w["on:end"]){const oe=new n(w);w["on:end"](T,oe),oe.isMatchIgnored&&(B=!1)}if(B){for(;w.endsParent&&w.parent;)w=w.parent;return w}}if(w.endsWithParent)return ur(w.parent,T,I)}function Wo(w){return A.matcher.regexIndex===0?(H+=w[0],1):(wt=!0,0)}function Xo(w){const T=w[0],I=w.rule,B=new n(I),oe=[I.__beforeBegin,I["on:begin"]];for(const Le of oe)if(Le&&(Le(w,B),B.isMatchIgnored))return Wo(T);return I.skip?H+=T:(I.excludeBegin&&(H+=T),ve(),!I.returnBegin&&!I.excludeBegin&&(H=T)),cr(I,w),I.returnBegin?0:T.length}function Jo(w){const T=w[0],I=F.substring(w.index),B=ur(A,w,I);if(!B)return rr;const oe=A;A.endScope&&A.endScope._wrap?(ve(),Ne(T,A.endScope._wrap)):A.endScope&&A.endScope._multi?(ve(),lr(A.endScope,w)):oe.skip?H+=T:(oe.returnEnd||oe.excludeEnd||(H+=T),ve(),oe.excludeEnd&&(H=T));do A.scope&&re.closeNode(),!A.skip&&!A.subLanguage&&(qn+=A.relevance),A=A.parent;while(A!==B.parent);return B.starts&&cr(B.starts,w),oe.returnEnd?0:T.length}function Yo(){const w=[];for(let T=A;T!==ke;T=T.parent)T.scope&&w.unshift(T.scope);w.forEach(T=>re.openNode(T))}let Vn={};function fr(w,T){const I=T&&T[0];if(H+=w,I==null)return ve(),0;if(Vn.type==="begin"&&T.type==="end"&&Vn.index===T.index&&I===""){if(H+=F.slice(T.index,T.index+1),!W){const B=new Error(`0 width match regex (${v})`);throw B.languageName=v,B.badRule=Vn.rule,B}return 1}if(Vn=T,T.type==="begin")return Xo(T);if(T.type==="illegal"&&!P){const B=new Error('Illegal lexeme "'+I+'" for mode "'+(A.scope||"<unnamed>")+'"');throw B.mode=A,B}else if(T.type==="end"){const B=Jo(T);if(B!==rr)return B}if(T.type==="illegal"&&I==="")return H+=`
`,1;if(yt>1e5&&yt>T.index*3)throw new Error("potential infinite loop, way more iterations than matches");return H+=I,I.length}const ke=je(v);if(!ke)throw Je(X.replace("{}",v)),new Error('Unknown language: "'+v+'"');const Qo=Ao(ke);let bt="",A=U||Qo;const dr={},re=new D.__emitter(D);Yo();let H="",qn=0,Ye=0,yt=0,wt=!1;try{if(ke.__emitTokens)ke.__emitTokens(F,re);else{for(A.matcher.considerAll();;){yt++,wt?wt=!1:A.matcher.considerAll(),A.matcher.lastIndex=Ye;const w=A.matcher.exec(F);if(!w)break;const T=F.substring(Ye,w.index),I=fr(T,w);Ye=w.index+I}fr(F.substring(Ye))}return re.finalize(),bt=re.toHTML(),{language:v,value:bt,relevance:qn,illegal:!1,_emitter:re,_top:A}}catch(w){if(w.message&&w.message.includes("Illegal"))return{language:v,value:vt(F),illegal:!0,relevance:0,_illegalBy:{message:w.message,index:Ye,context:F.slice(Ye-100,Ye+100),mode:w.mode,resultSoFar:bt},_emitter:re};if(W)return{language:v,value:vt(F),illegal:!1,relevance:0,errorRaised:w,_emitter:re,_top:A};throw w}}function gt(v){const F={value:vt(v),illegal:!1,relevance:0,_top:M,_emitter:new D.__emitter(D)};return F._emitter.addText(v),F}function pt(v,F){F=F||D.languages||Object.keys(d);const P=gt(v),U=F.filter(je).filter(ar).map(ve=>yn(ve,v,!1));U.unshift(P);const Q=U.sort((ve,Ne)=>{if(ve.relevance!==Ne.relevance)return Ne.relevance-ve.relevance;if(ve.language&&Ne.language){if(je(ve.language).supersetOf===Ne.language)return 1;if(je(Ne.language).supersetOf===ve.language)return-1}return 0}),[xe,$e]=Q,zn=xe;return zn.secondBest=$e,zn}function zo(v,F,P){const U=F&&p[F]||P;v.classList.add("hljs"),v.classList.add(`language-${U}`)}function ht(v){let F=null;const P=te(v);if(k(P))return;if(Pn("before:highlightElement",{el:v,language:P}),v.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",v);return}if(v.children.length>0&&(D.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(v)),D.throwUnescapedHTML))throw new Lo("One of your code blocks includes unescaped HTML.",v.innerHTML);F=v;const U=F.textContent,Q=P?J(U,{language:P,ignoreIllegals:!0}):pt(U);v.innerHTML=Q.value,v.dataset.highlighted="yes",zo(v,P,Q.language),v.result={language:Q.language,re:Q.relevance,relevance:Q.relevance},Q.secondBest&&(v.secondBest={language:Q.secondBest.language,relevance:Q.secondBest.relevance}),Pn("after:highlightElement",{el:v,result:Q,text:U})}function Vo(v){D=tr(D,v)}const qo=()=>{Ln(),tn("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Bo(){Ln(),tn("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let sr=!1;function Ln(){function v(){Ln()}if(document.readyState==="loading"){sr||window.addEventListener("DOMContentLoaded",v,!1),sr=!0;return}document.querySelectorAll(D.cssSelector).forEach(ht)}function jo(v,F){let P=null;try{P=F(i)}catch(U){if(Je("Language definition for '{}' could not be registered.".replace("{}",v)),W)Je(U);else throw U;P=M}P.name||(P.name=v),d[v]=P,P.rawDefinition=F.bind(null,i),P.aliases&&ir(P.aliases,{languageName:v})}function $o(v){delete d[v];for(const F of Object.keys(p))p[F]===v&&delete p[F]}function Uo(){return Object.keys(d)}function je(v){return v=(v||"").toLowerCase(),d[v]||d[p[v]]}function ir(v,{languageName:F}){typeof v=="string"&&(v=[v]),v.forEach(P=>{p[P.toLowerCase()]=F})}function ar(v){const F=je(v);return F&&!F.disableAutodetect}function Ho(v){v["before:highlightBlock"]&&!v["before:highlightElement"]&&(v["before:highlightElement"]=F=>{v["before:highlightBlock"](Object.assign({block:F.el},F))}),v["after:highlightBlock"]&&!v["after:highlightElement"]&&(v["after:highlightElement"]=F=>{v["after:highlightBlock"](Object.assign({block:F.el},F))})}function Go(v){Ho(v),C.push(v)}function Ko(v){const F=C.indexOf(v);F!==-1&&C.splice(F,1)}function Pn(v,F){const P=v;C.forEach(function(U){U[P]&&U[P](F)})}function Zo(v){return tn("10.7.0","highlightBlock will be removed entirely in v12.0"),tn("10.7.0","Please use highlightElement now."),ht(v)}Object.assign(i,{highlight:J,highlightAuto:pt,highlightAll:Ln,highlightElement:ht,highlightBlock:Zo,configure:Vo,initHighlighting:qo,initHighlightingOnLoad:Bo,registerLanguage:jo,unregisterLanguage:$o,listLanguages:Uo,getLanguage:je,registerAliases:ir,autoDetection:ar,inherit:tr,addPlugin:Go,removePlugin:Ko}),i.debugMode=function(){W=!1},i.safeMode=function(){W=!0},i.versionString=Io,i.regex={concat:N,lookahead:f,either:L,optional:b,anyNumberOfTimes:h};for(const v in On)typeof On[v]=="object"&&e(On[v]);return Object.assign(i,On),i},rn=or({});return rn.newInstance=()=>or({}),Tt=rn,rn.HighlightJS=rn,rn.default=rn,Tt}var gm=vm();const Fr=mm(gm);var pm=ue("<pre><code><!></code></pre>");function hm(e,n){const t=et(n,["children","$$slots","$$events","$$legacy"]),r=et(t,["code","highlighted","languageName","langtag"]);let o=Ke(n,"code",8),s=Ke(n,"highlighted",8),a=Ke(n,"languageName",8,"plaintext"),c=Ke(n,"langtag",8,!1);var l=pm();let u;var m=V(l);Fn(m,1,"",null,{},{hljs:!0});var _=V(m);{var f=b=>{var N=Yn(),S=an(N);pi(S,s),G(b,N)},h=b=>{var N=It();he(()=>Ve(N,o())),G(b,N)};Ue(_,b=>{s()?b(f):b(h,!1)})}he(b=>u=xi(l,u,{"data-language":a(),...r,[xn]:b},"svelte-1w9vok"),[()=>({langtag:c()})],Ut),G(e,l)}function bm(e,n){const t=et(n,["children","$$slots","$$events","$$legacy"]),r=et(t,["language","code","langtag"]);_n(n,!1);let o=Ke(n,"language",8),s=Ke(n,"code",8),a=Ke(n,"langtag",8,!1);const c=ki();let l=Ht("");Ci(()=>{E(l)&&c("highlight",{highlighted:E(l)})}),Bs(()=>(Ct(o()),Ct(s())),()=>{Fr.registerLanguage(o().name,o().register),Y(l,Fr.highlight(s(),{language:o().name}).value)}),js(),mo();var u=Yn(),m=an(u);hi(m,n,"default",{get highlighted(){return E(l)}},_=>{hm(_,Fi(()=>r,{get languageName(){return o().name},get langtag(){return a()},get highlighted(){return E(l)},get code(){return s()}}))}),G(e,u),mn()}function ym(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",s={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},a={keywords:s,illegal:/<\//},c={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},l={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},u={className:"subst",begin:/\$\(/,end:/\)/,keywords:s},m={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,u,m],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},f={className:"string",contains:[e.BACKSLASH_ESCAPE,u,m],begin:"`",end:"`"},h={className:"meta",begin:"@"+n},b={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return a.name="Julia",a.contains=[c,l,_,f,h,b,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],u.contains=a.contains,a}const wm={name:"julia",register:ym};function vo(e){let n,t,r;if(e<.5){const o=e*2;n=Math.round(34+o*166),t=Math.round(197+o*-17),r=Math.round(94+o*-94)}else{const o=(e-.5)*2;n=Math.round(200+o*20),t=Math.round(180-o*180),r=Math.round(0+o*30)}return[n,t,r]}function Em(e,n,t){if(typeof e!="number")return"";const r=[...n.values()].filter(b=>typeof b=="number");if(r.length<2)return"";const o=Math.min(...r),s=Math.max(...r),a=Math.log(Math.max(o,.001)),c=Math.log(Math.max(s,.001));if(c===a)return"";const l=Math.log(Math.max(e,.001)),u=Math.max(0,Math.min(1,(l-a)/(c-a))),[m,_,f]=vo(u);return`background-color: rgba(${m}, ${_}, ${f}, ${t==="dark"?.3:.25})`}function Dm(e,n=10){const t=e==="dark"?.5:.4,r=[];for(let o=0;o<=n;o++){const s=o/n,[a,c,l]=vo(s);r.push(`rgba(${a}, ${c}, ${l}, ${t})`)}return r}const xm=[{url:"https://github.com/EnzymeAD/Enzyme.jl/issues/1995",affects:[["assume_mvnormal","EnzymeFwd"],["assume_wishart","EnzymeFwd"]]},{url:"https://github.com/chalk-lab/Mooncake.jl/issues/570",affects:[["multithreaded","MooncakeFwd"],["multithreaded","MooncakeRvs"]]}],Mm=[],go=new Map;for(const e of xm)for(const[n,t]of e.affects)go.set(`${n}__${t}`,e.url);const po=new Map;for(const e of Mm)for(const[n,t]of e.affects)po.set(`${n}__${t}`,e.value);function Nr(e,n){return go.get(`${e}__${n}`)}function Rm(e,n){return po.get(`${e}__${n}`)}var Tm=(e,n,t)=>n(E(t)),Sm=ue('<th class="sortable svelte-6nl5bt" title="Click to sort"> <span class="sort-indicator svelte-6nl5bt"><!></span></th>'),Fm=ue('<td class="svelte-6nl5bt"> </td>'),Nm=ue('<a class="issue svelte-6nl5bt" target="_blank">(?)</a>'),km=ue('<td class="svelte-6nl5bt"><!> <span> </span></td>'),Cm=(e,n,t,r)=>n(t.modelDefinitions[r()]),Am=dt('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'),Om=dt('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'),Im=ue('<tr class="definition-row svelte-6nl5bt"><td class="svelte-6nl5bt"><div class="definition-content svelte-6nl5bt"><div class="code-wrapper svelte-6nl5bt"><!></div> <button class="copy-btn svelte-6nl5bt" aria-label="Copy to clipboard" title="Copy code"><!></button></div></td></tr>'),Lm=ue("<tr><!><!></tr> <!>",1),Pm=ue('<div class="table-scroll svelte-6nl5bt"><table class="svelte-6nl5bt"><thead><tr class="svelte-6nl5bt"><th class="model-col-header svelte-6nl5bt">Model</th><!></tr></thead><tbody></tbody></table></div>');function zm(e,n){_n(n,!0);const t=sn(()=>[...n.data.keys()]),r=sn(()=>n.data.size>0?[...n.data.get(E(t)[0]).keys()]:[]);let o=pe(Pe({column:null,direction:null})),s=pe(null),a=pe(!1);function c(S){navigator.clipboard.writeText(S),Y(a,!0),setTimeout(()=>{Y(a,!1)},2e3)}function l(S){E(o).column!==S?Y(o,{column:S,direction:"asc"},!0):E(o).direction==="asc"?Y(o,{column:S,direction:"desc"},!0):Y(o,{column:null,direction:null},!0)}const u=sn(()=>{const S=Lt(n.data);if(!E(o).column||!E(o).direction)return S;const L=E(o).column,q=E(o).direction;return[...S].sort(([,x],[,g])=>{const y=x.get(L),z=g.get(L),R=typeof y=="number",O=typeof z=="number";return!R&&!O?0:R?O?q==="asc"?y-z:z-y:-1:1})});var m=Pm(),_=V(m),f=V(_),h=V(f),b=se(V(h));Rn(b,17,()=>E(r),Mn,(S,L)=>{var q=Sm();q.__click=[Tm,l,L];var x=V(q),g=se(x),y=V(g);{var z=R=>{var O=Yn(),Z=an(O);{var fe=ne=>{var de=It("▲");G(ne,de)},ee=ne=>{var de=It("▼");G(ne,de)};Ue(Z,ne=>{E(o).direction==="asc"?ne(fe):ne(ee,!1)})}G(R,O)};Ue(y,R=>{E(o).column===E(L)&&R(z)})}he(()=>Ve(x,`${E(L)??""} `)),G(S,q)});var N=se(f);Rn(N,21,()=>E(u),Mn,(S,L,q)=>{let x=()=>E(L)[0],g=()=>E(L)[1];var y=Lm(),z=an(y);Fn(z,1,"svelte-6nl5bt",null,{},{alt:q%2===1});var R=V(z);_m(R,{get name(){return x()},onToggle:()=>Y(s,E(s)===x()?null:x(),!0)});var O=se(R);Rn(O,17,()=>Lt(g()),Mn,(ee,ne)=>{let de=()=>E(ne)[0],ye=()=>E(ne)[1];var Re=Yn();const me=sn(()=>Rm(x(),de())??ye());var Te=an(Re);{var De=Se=>{var ie=Fm(),Fe=V(ie);he((hn,nn)=>{Xt(ie,hn),Ve(Fe,nn)},[()=>Em(E(me),g(),n.theme),()=>E(me).toFixed(3)]),G(Se,ie)},pn=Se=>{var ie=km(),Fe=V(ie);{var hn=bn=>{var An=Nm();he(mt=>Qn(An,"href",mt),[()=>Nr(x(),de())]),G(bn,An)};Ue(Fe,bn=>{Nr(x(),de())&&bn(hn)})}var nn=se(Fe,2),_t=V(nn);he(()=>{Fn(nn,1,lo(E(me)==="NaN"?"nan":E(me)),"svelte-6nl5bt"),Ve(_t,E(me))}),G(Se,ie)};Ue(Te,Se=>{typeof E(me)=="number"?Se(De):Se(pn,!1)})}G(ee,Re)});var Z=se(z,2);{var fe=ee=>{var ne=Im(),de=V(ne),ye=V(de),Re=V(ye),me=V(Re);bm(me,{language:wm,get code(){return n.modelDefinitions[x()]}});var Te=se(Re,2);Te.__click=[Cm,c,n,x];var De=V(Te);{var pn=ie=>{var Fe=Am();G(ie,Fe)},Se=ie=>{var Fe=Om();G(ie,Fe)};Ue(De,ie=>{E(a)?ie(pn):ie(Se,!1)})}he(()=>{Qn(de,"colspan",E(r).length+1),Te.disabled=E(a)}),G(ee,ne)};Ue(Z,ee=>{E(s)===x()&&ee(fe)})}G(S,y)}),G(e,m),mn()}ft(["click"]);var Vm=ue('<div class="legend svelte-10rqhbc"><div class="gradient-section svelte-10rqhbc"><span class="label svelte-10rqhbc">Faster</span> <div class="gradient-bar svelte-10rqhbc"></div> <span class="label svelte-10rqhbc">Slower</span></div> <div class="divider svelte-10rqhbc"></div> <div class="status-labels svelte-10rqhbc"><span class="status error svelte-10rqhbc">error</span> <span class="status wrong svelte-10rqhbc">wrong</span> <span class="status nan svelte-10rqhbc">NaN</span></div></div>');function qm(e,n){_n(n,!0);const t=sn(()=>()=>`linear-gradient(to right, ${Dm(n.theme).join(", ")})`);var r=Vm(),o=V(r),s=se(V(o),2);he(a=>Xt(s,`background: ${a??""}`),[()=>E(t)()]),G(e,r),mn()}function Bm(e,n){Y(n,E(n)==="light"?"dark":"light",!0),document.documentElement.setAttribute("data-theme",E(n)),localStorage.setItem("theme",E(n))}var jm=dt('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'),$m=dt('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'),Um=ue('<h3 class="category-heading svelte-1wqfdel"> </h3> <!>',1),Hm=ue('<p class="no-results svelte-1wqfdel"> </p>'),Gm=ue(`<div id="main-wrapper" class="svelte-1wqfdel"><main class="svelte-1wqfdel"><div class="header svelte-1wqfdel"><div class="title-area svelte-1wqfdel"><h1 class="svelte-1wqfdel">Turing AD tests</h1> <nav class="nav-links svelte-1wqfdel"><a href="https://turinglang.org/docs" class="svelte-1wqfdel">Turing.jl Docs</a> <a href="https://github.com/TuringLang/Turing.jl" class="svelte-1wqfdel">Turing.jl GitHub</a> <a href="https://github.com/TuringLang/ADTests" class="svelte-1wqfdel">ADTests GitHub</a></nav></div> <button class="theme-toggle svelte-1wqfdel" aria-label="Toggle Dark Mode" title="Toggle theme"><!></button></div> <p class="intro svelte-1wqfdel">A comparison of how different AD backends perform on <a href="https://turinglang.org/docs">Turing.jl</a> models.
            This does not imply any endorsement; for general AD comparisons see <a href="https://github.com/gradbench/gradbench" target="_blank">GradBench</a>.</p> <div class="info-card svelte-1wqfdel"><h4 class="svelte-1wqfdel">Reading the table</h4> <ul class="svelte-1wqfdel"><li class="svelte-1wqfdel">Click model names to see their definitions.</li> <li class="svelte-1wqfdel"><b>Numbers</b> = gradient time / primal time. <b>Smaller is faster.</b></li> <li class="svelte-1wqfdel"><span class="wrong svelte-1wqfdel">wrong</span> = AD ran but gave an incorrect result
                    (compared against FiniteDifferences).</li> <li class="svelte-1wqfdel"><span class="error svelte-1wqfdel">error</span> = AD failed to run.</li> <li class="svelte-1wqfdel"><span class="issue-example svelte-1wqfdel">(?)</span> links to a GitHub issue describing the problem.</li></ul></div> <div class="warning svelte-1wqfdel">Note: Results are from Julia 1.11.</div> <div class="results-header svelte-1wqfdel"><h2 class="svelte-1wqfdel">Results</h2> <a class="download-link svelte-1wqfdel" href="adtests.json" target="_blank" download=""><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> JSON</a></div> <div class="controls svelte-1wqfdel"><input type="search" class="search-input svelte-1wqfdel" placeholder="Filter models..."> <!></div> <!> <h2>Manifest</h2> <p class="secondary-text svelte-1wqfdel">Package versions used for the tests above:</p> <!></main></div>`);function Km(e,n){_n(n,!0);const t=typeof document<"u"&&(localStorage.getItem("theme")||document.documentElement.getAttribute("data-theme"))||"light";typeof document<"u"&&document.documentElement.setAttribute("data-theme",t);let r=pe(Pe(t)),o=new Map;for(const[g,y]of Object.entries(Oa)){let z=y.__category__;delete y.__category__;let R=new Map;for(const[O,Z]of Object.entries(y))R.set(O,Z);o.has(z)||o.set(z,new Map),o.get(z).set(g,R)}let s=new Map([...o.entries()].sort()),a=pe("");const c=sn(()=>{const g=E(a).trim().toLowerCase();if(!g)return s;const y=new Map;for(const[z,R]of s){const O=new Map;for(const[Z,fe]of R)Z.toLowerCase().includes(g)&&O.set(Z,fe);O.size>0&&y.set(z,O)}return y});var l=Gm(),u=V(l),m=V(u),_=se(V(m),2);_.__click=[Bm,r];var f=V(_);{var h=g=>{var y=jm();G(g,y)},b=g=>{var y=$m();G(g,y)};Ue(f,g=>{E(r)==="dark"?g(h):g(b,!1)})}var N=se(m,10),S=V(N),L=se(S,2);qm(L,{get theme(){return E(r)}});var q=se(N,2);Rn(q,17,()=>E(c).entries(),Mn,(g,y)=>{let z=()=>E(y)[0],R=()=>E(y)[1];var O=Um(),Z=an(O),fe=V(Z),ee=se(Z,2);zm(ee,{get data(){return R()},modelDefinitions:Ol,get theme(){return E(r)}}),he(()=>Ve(fe,z())),G(g,O)},g=>{var y=Hm(),z=V(y);he(()=>Ve(z,`No models match "${E(a)??""}".`)),G(g,y)});var x=se(q,6);fm(x,{}),Mi(S,()=>E(a),g=>Y(a,g)),G(e,l),mn()}ft(["click"]);ui(Km,{target:document.getElementById("app")});
