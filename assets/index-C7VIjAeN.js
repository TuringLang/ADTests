(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const _r=!1;var nt=Array.isArray,ts=Array.prototype.indexOf,Pt=Array.from,rs=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,Ar=Object.getOwnPropertyDescriptors,os=Object.prototype,ss=Array.prototype,zt=Object.getPrototypeOf,vr=Object.isExtensible;function wn(e){return typeof e=="function"}function is(e){return e()}function Ft(e){for(var n=0;n<e.length;n++)e[n]()}const Re=2,Cr=4,tt=8,qt=16,Be=32,dn=64,Un=128,be=256,Hn=512,ce=1024,Oe=2048,Xe=4096,ze=8192,rt=16384,as=32768,Vt=65536,ls=1<<17,cs=1<<19,Or=1<<20,St=1<<21,Qe=Symbol("$state"),Ir=Symbol("legacy props"),us=Symbol("");function Lr(e){return e===this.v}function fs(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Bt(e){return!fs(e,this.v)}function ds(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function _s(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function vs(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ms(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function gs(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function ps(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function hs(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function bs(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ys(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Nn=!1,ws=!1;function Es(){Nn=!0}const jt=1,$t=2,Pr=4,Ds=8,xs=16,Rs=1,Ms=2,zr=4,Ts=8,Fs=16,Ss=1,Ns=2,_e=Symbol(),ks="http://www.w3.org/1999/xhtml",As="@attach";function qr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let K=null;function mr(e){K=e}function _n(e,n=!1,t){var r=K={p:K,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};Nn&&!n&&(K.l={s:null,u:null,r1:[],r2:cn(!1)}),zs(()=>{r.d=!0})}function vn(e){const n=K;if(n!==null){const a=n.e;if(a!==null){var t=j,r=$;n.e=null;try{for(var o=0;o<a.length;o++){var s=a[o];We(s.effect),Ie(s.reaction),Gt(s.fn)}}finally{We(t),Ie(r)}}K=n.p,n.m=!0}return{}}function kn(){return!Nn||K!==null&&K.l===null}function Pe(e){if(typeof e!="object"||e===null||Qe in e)return e;const n=zt(e);if(n!==os&&n!==ss)return e;var t=new Map,r=nt(e),o=pe(0),s=$,a=c=>{var l=$;Ie(s);var u=c();return Ie(l),u};return r&&t.set("length",pe(e.length)),new Proxy(e,{defineProperty(c,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&hs();var v=t.get(l);return v===void 0?(v=a(()=>pe(u.value)),t.set(l,v)):Y(v,a(()=>Pe(u.value))),!0},deleteProperty(c,l){var u=t.get(l);if(u===void 0)l in c&&(t.set(l,a(()=>pe(_e))),Et(o));else{if(r&&typeof l=="string"){var v=t.get("length"),_=Number(l);Number.isInteger(_)&&_<v.v&&Y(v,_)}Y(u,_e),Et(o)}return!0},get(c,l,u){var h;if(l===Qe)return e;var v=t.get(l),_=l in c;if(v===void 0&&(!_||(h=Ze(c,l))!=null&&h.writable)&&(v=a(()=>pe(Pe(_?c[l]:_e))),t.set(l,v)),v!==void 0){var f=E(v);return f===_e?void 0:f}return Reflect.get(c,l,u)},getOwnPropertyDescriptor(c,l){var u=Reflect.getOwnPropertyDescriptor(c,l);if(u&&"value"in u){var v=t.get(l);v&&(u.value=E(v))}else if(u===void 0){var _=t.get(l),f=_==null?void 0:_.v;if(_!==void 0&&f!==_e)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return u},has(c,l){var f;if(l===Qe)return!0;var u=t.get(l),v=u!==void 0&&u.v!==_e||Reflect.has(c,l);if(u!==void 0||j!==null&&(!v||(f=Ze(c,l))!=null&&f.writable)){u===void 0&&(u=a(()=>pe(v?Pe(c[l]):_e)),t.set(l,u));var _=E(u);if(_===_e)return!1}return v},set(c,l,u,v){var V;var _=t.get(l),f=l in c;if(r&&l==="length")for(var h=u;h<_.v;h+=1){var b=t.get(h+"");b!==void 0?Y(b,_e):h in c&&(b=a(()=>pe(_e)),t.set(h+"",b))}_===void 0?(!f||(V=Ze(c,l))!=null&&V.writable)&&(_=a(()=>pe(void 0)),Y(_,a(()=>Pe(u))),t.set(l,_)):(f=_.v!==_e,Y(_,a(()=>Pe(u))));var N=Reflect.getOwnPropertyDescriptor(c,l);if(N!=null&&N.set&&N.set.call(v,u),!f){if(r&&typeof l=="string"){var F=t.get("length"),L=Number(l);Number.isInteger(L)&&L>=F.v&&Y(F,L+1)}Et(o)}return!0},ownKeys(c){E(o);var l=Reflect.ownKeys(c).filter(_=>{var f=t.get(_);return f===void 0||f.v!==_e});for(var[u,v]of t)v.v!==_e&&!(u in c)&&l.push(u);return l},setPrototypeOf(){bs()}})}function Et(e,n=1){Y(e,e.v+n)}function ln(e){var n=Re|Oe,t=$!==null&&($.f&Re)!==0?$:null;return j===null||t!==null&&(t.f&be)!==0?n|=be:j.f|=Or,{ctx:K,deps:null,effects:null,equals:Lr,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??j}}function sn(e){const n=ln(e);return eo(n),n}function Ut(e){const n=ln(e);return n.equals=Bt,n}function Vr(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)Ve(n[t])}}function Cs(e){for(var n=e.parent;n!==null;){if((n.f&Re)===0)return n;n=n.parent}return null}function Br(e){var n,t=j;We(Cs(e));try{Vr(e),n=oo(e)}finally{We(t)}return n}function jr(e){var n=Br(e),t=(Ge||(e.f&be)!==0)&&e.deps!==null?Xe:ce;Ee(e,t),e.equals(n)||(e.v=n,e.wv=to())}const Tn=new Map;function cn(e,n){var t={f:0,v:e,reactions:null,equals:Lr,rv:0,wv:0};return t}function pe(e,n){const t=cn(e);return eo(t),t}function Ht(e,n=!1){var r;const t=cn(e);return n||(t.equals=Bt),Nn&&K!==null&&K.l!==null&&((r=K.l).s??(r.s=[])).push(t),t}function Y(e,n,t=!1){$!==null&&!Ae&&kn()&&($.f&(Re|qt))!==0&&!(le!=null&&le.includes(e))&&ys();let r=t?Pe(n):n;return Nt(e,r)}function Nt(e,n){if(!e.equals(n)){var t=e.v;An?Tn.set(e,n):Tn.set(e,t),e.v=n,(e.f&Re)!==0&&((e.f&Oe)!==0&&Br(e),Ee(e,(e.f&be)===0?ce:Xe)),e.wv=to(),$r(e,Oe),kn()&&j!==null&&(j.f&ce)!==0&&(j.f&(Be|dn))===0&&(we===null?Hs([e]):we.push(e))}return n}function gr(e,n=1){var t=E(e),r=n===1?t++:t--;return Y(e,t),r}function $r(e,n){var t=e.reactions;if(t!==null)for(var r=kn(),o=t.length,s=0;s<o;s++){var a=t[s],c=a.f;(c&Oe)===0&&(!r&&a===j||(Ee(a,n),(c&(ce|be))!==0&&((c&Re)!==0?$r(a,Xe):ut(a))))}}let Os=!1;var pr,Ur,Hr,Gr;function Is(){if(pr===void 0){pr=window,Ur=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Hr=Ze(n,"firstChild").get,Gr=Ze(n,"nextSibling").get,vr(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),vr(t)&&(t.__t=void 0)}}function ot(e=""){return document.createTextNode(e)}function Ce(e){return Hr.call(e)}function st(e){return Gr.call(e)}function q(e,n){return Ce(e)}function an(e,n){{var t=Ce(e);return t instanceof Comment&&t.data===""?st(t):t}}function se(e,n=1,t=!1){let r=e;for(;n--;)r=st(r);return r}function Ls(e){e.textContent=""}function Kr(e){j===null&&$===null&&vs(),$!==null&&($.f&be)!==0&&j===null&&_s(),An&&ds()}function Ps(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function mn(e,n,t,r=!0){var o=j,s={ctx:K,deps:null,nodes_start:null,nodes_end:null,f:e|Oe,first:null,fn:n,last:null,next:null,parent:o,prev:null,teardown:null,transitions:null,wv:0};if(t)try{ct(s),s.f|=as}catch(l){throw Ve(s),l}else n!==null&&ut(s);var a=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(Or|Un))===0;if(!a&&r&&(o!==null&&Ps(s,o),$!==null&&($.f&Re)!==0)){var c=$;(c.effects??(c.effects=[])).push(s)}return s}function zs(e){const n=mn(tt,null,!1);return Ee(n,ce),n.teardown=e,n}function hr(e){Kr();var n=j!==null&&(j.f&Be)!==0&&K!==null&&!K.m;if(n){var t=K;(t.e??(t.e=[])).push({fn:e,effect:j,reaction:$})}else{var r=Gt(e);return r}}function qs(e){return Kr(),it(e)}function Vs(e){const n=mn(dn,e,!0);return(t={})=>new Promise(r=>{t.outro?Gn(n,()=>{Ve(n),r(void 0)}):(Ve(n),r(void 0))})}function Gt(e){return mn(Cr,e,!1)}function Bs(e,n){var t=K,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=it(()=>{e(),!r.ran&&(r.ran=!0,Y(t.l.r2,!0),Fn(n))})}function js(){var e=K;it(()=>{if(E(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&ce)!==0&&Ee(t,Xe),gn(t)&&ct(t),n.ran=!1}e.l.r2.v=!1}})}function it(e){return mn(tt,e,!0)}function he(e,n=[],t=ln){const r=n.map(t);return at(()=>e(...r.map(E)))}function at(e,n=0){return mn(tt|qt|n,e,!0)}function un(e,n=!0){return mn(tt|Be,e,!0,n)}function Zr(e){var n=e.teardown;if(n!==null){const t=An,r=$;br(!0),Ie(null);try{n.call(null)}finally{br(t),Ie(r)}}}function Wr(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&dn)!==0?t.parent=null:Ve(t,n),t=r}}function $s(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&Be)===0&&Ve(n),n=t}}function Ve(e,n=!0){var t=!1;(n||(e.f&cs)!==0)&&e.nodes_start!==null&&(Xr(e.nodes_start,e.nodes_end),t=!0),Wr(e,n&&!t),Jn(e,0),Ee(e,rt);var r=e.transitions;if(r!==null)for(const s of r)s.stop();Zr(e);var o=e.parent;o!==null&&o.first!==null&&Jr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Xr(e,n){for(;e!==null;){var t=e===n?null:st(e);e.remove(),e=t}}function Jr(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function Gn(e,n){var t=[];Kt(e,t,!0),Yr(t,()=>{Ve(e),n&&n()})}function Yr(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var o of e)o.out(r)}else n()}function Kt(e,n,t){if((e.f&ze)===0){if(e.f^=ze,e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&n.push(a);for(var r=e.first;r!==null;){var o=r.next,s=(r.f&Vt)!==0||(r.f&Be)!==0;Kt(r,n,s?t:!1),r=o}}}function Kn(e){Qr(e,!0)}function Qr(e,n){if((e.f&ze)!==0){e.f^=ze,(e.f&ce)===0&&(e.f^=ce),gn(e)&&(Ee(e,Oe),ut(e));for(var t=e.first;t!==null;){var r=t.next,o=(t.f&Vt)!==0||(t.f&Be)!==0;Qr(t,o?n:!1),t=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&s.in()}}let Zn=[];function Us(){var e=Zn;Zn=[],Ft(e)}function Zt(e){Zn.length===0&&queueMicrotask(Us),Zn.push(e)}let jn=!1,kt=!1,Wn=null,en=!1,An=!1;function br(e){An=e}let $n=[];let $=null,Ae=!1;function Ie(e){$=e}let j=null;function We(e){j=e}let le=null;function eo(e){$!==null&&$.f&St&&(le===null?le=[e]:le.push(e))}let ae=null,ge=0,we=null;function Hs(e){we=e}let no=1,Xn=0,Ge=!1;function to(){return++no}function gn(e){var _;var n=e.f;if((n&Oe)!==0)return!0;if((n&Xe)!==0){var t=e.deps,r=(n&be)!==0;if(t!==null){var o,s,a=(n&Hn)!==0,c=r&&j!==null&&!Ge,l=t.length;if(a||c){var u=e,v=u.parent;for(o=0;o<l;o++)s=t[o],(a||!((_=s==null?void 0:s.reactions)!=null&&_.includes(u)))&&(s.reactions??(s.reactions=[])).push(u);a&&(u.f^=Hn),c&&v!==null&&(v.f&be)===0&&(u.f^=be)}for(o=0;o<l;o++)if(s=t[o],gn(s)&&jr(s),s.wv>e.wv)return!0}(!r||j!==null&&!Ge)&&Ee(e,ce)}return!1}function Gs(e,n){for(var t=n;t!==null;){if((t.f&Un)!==0)try{t.fn(e);return}catch{t.f^=Un}t=t.parent}throw jn=!1,e}function yr(e){return(e.f&rt)===0&&(e.parent===null||(e.parent.f&Un)===0)}function lt(e,n,t,r){if(jn){if(t===null&&(jn=!1),yr(n))throw e;return}if(t!==null&&(jn=!0),Gs(e,n),yr(n))throw e}function ro(e,n,t=!0){var r=e.reactions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];le!=null&&le.includes(e)||((s.f&Re)!==0?ro(s,n,!1):n===s&&(t?Ee(s,Oe):(s.f&ce)!==0&&Ee(s,Xe),ut(s)))}}function oo(e){var h;var n=ae,t=ge,r=we,o=$,s=Ge,a=le,c=K,l=Ae,u=e.f;ae=null,ge=0,we=null,Ge=(u&be)!==0&&(Ae||!en||$===null),$=(u&(Be|dn))===0?e:null,le=null,mr(e.ctx),Ae=!1,Xn++,e.f|=St;try{var v=(0,e.fn)(),_=e.deps;if(ae!==null){var f;if(Jn(e,ge),_!==null&&ge>0)for(_.length=ge+ae.length,f=0;f<ae.length;f++)_[ge+f]=ae[f];else e.deps=_=ae;if(!Ge)for(f=ge;f<_.length;f++)((h=_[f]).reactions??(h.reactions=[])).push(e)}else _!==null&&ge<_.length&&(Jn(e,ge),_.length=ge);if(kn()&&we!==null&&!Ae&&_!==null&&(e.f&(Re|Xe|Oe))===0)for(f=0;f<we.length;f++)ro(we[f],e);return o!==null&&o!==e&&(Xn++,we!==null&&(r===null?r=we:r.push(...we))),v}finally{ae=n,ge=t,we=r,$=o,Ge=s,le=a,mr(c),Ae=l,e.f^=St}}function Ks(e,n){let t=n.reactions;if(t!==null){var r=ts.call(t,e);if(r!==-1){var o=t.length-1;o===0?t=n.reactions=null:(t[r]=t[o],t.pop())}}t===null&&(n.f&Re)!==0&&(ae===null||!ae.includes(n))&&(Ee(n,Xe),(n.f&(be|Hn))===0&&(n.f^=Hn),Vr(n),Jn(n,0))}function Jn(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Ks(e,t[r])}function ct(e){var n=e.f;if((n&rt)===0){Ee(e,ce);var t=j,r=K,o=en;j=e,en=!0;try{(n&qt)!==0?$s(e):Wr(e),Zr(e);var s=oo(e);e.teardown=typeof s=="function"?s:null,e.wv=no;var a=e.deps,c;_r&&ws&&e.f&Oe}catch(l){lt(l,e,t,r||e.ctx)}finally{en=o,j=t}}}function Zs(){try{ms()}catch(e){if(Wn!==null)lt(e,Wn,null);else throw e}}function Ws(){var e=en;try{var n=0;for(en=!0;$n.length>0;){n++>1e3&&Zs();var t=$n,r=t.length;$n=[];for(var o=0;o<r;o++){var s=Js(t[o]);Xs(s)}Tn.clear()}}finally{kt=!1,en=e,Wn=null}}function Xs(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(rt|ze))===0)try{gn(r)&&(ct(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Jr(r):r.fn=null))}catch(o){lt(o,r,null,r.ctx)}}}function ut(e){kt||(kt=!0,queueMicrotask(Ws));for(var n=Wn=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(dn|Be))!==0){if((t&ce)===0)return;n.f^=ce}}$n.push(n)}function Js(e){for(var n=[],t=e;t!==null;){var r=t.f,o=(r&(Be|dn))!==0,s=o&&(r&ce)!==0;if(!s&&(r&ze)===0){if((r&Cr)!==0)n.push(t);else if(o)t.f^=ce;else try{gn(t)&&ct(t)}catch(l){lt(l,t,null,t.ctx)}var a=t.first;if(a!==null){t=a;continue}}var c=t.parent;for(t=t.next;t===null&&c!==null;)t=c.next,c=c.parent}return n}function E(e){var n=e.f,t=(n&Re)!==0;if($!==null&&!Ae){if(!(le!=null&&le.includes(e))){var r=$.deps;e.rv<Xn&&(e.rv=Xn,ae===null&&r!==null&&r[ge]===e?ge++:ae===null?ae=[e]:(!Ge||!ae.includes(e))&&ae.push(e))}}else if(t&&e.deps===null&&e.effects===null){var o=e,s=o.parent;s!==null&&(s.f&be)===0&&(o.f^=be)}return t&&(o=e,gn(o)&&jr(o)),An&&Tn.has(e)?Tn.get(e):e.v}function Fn(e){var n=Ae;try{return Ae=!0,e()}finally{Ae=n}}const Ys=-7169;function Ee(e,n){e.f=e.f&Ys|n}function At(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Qe in e)Ct(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&Qe in t&&Ct(t)}}}function Ct(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{Ct(e[r],n)}catch{}const t=zt(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=Ar(t);for(let o in r){const s=r[o].get;if(s)try{s.call(e)}catch{}}}}}function Qs(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ei=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ni(e){return ei.includes(e)}const ti={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ri(e){return e=e.toLowerCase(),ti[e]??e}const oi=["touchstart","touchmove"];function si(e){return oi.includes(e)}function ii(e,n){if(n){const t=document.body;e.autofocus=!0,Zt(()=>{document.activeElement===t&&e.focus()})}}let wr=!1;function ai(){wr||(wr=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var n;if(!e.defaultPrevented)for(const t of e.target.elements)(n=t.__on_r)==null||n.call(t)})},{capture:!0}))}function so(e){var n=$,t=j;Ie(null),We(null);try{return e()}finally{Ie(n),We(t)}}function li(e,n,t,r=t){e.addEventListener(n,()=>so(t));const o=e.__on_r;o?e.__on_r=()=>{o(),r(!0)}:e.__on_r=()=>r(!0),ai()}const io=new Set,Ot=new Set;function ci(e,n,t,r={}){function o(s){if(r.capture||Dn.call(n,s),!s.cancelBubble)return so(()=>t==null?void 0:t.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Zt(()=>{n.addEventListener(e,o,r)}):n.addEventListener(e,o,r),o}function ft(e){for(var n=0;n<e.length;n++)io.add(e[n]);for(var t of Ot)t(e)}function Dn(e){var V;var n=this,t=n.ownerDocument,r=e.type,o=((V=e.composedPath)==null?void 0:V.call(e))||[],s=o[0]||e.target,a=0,c=e.__root;if(c){var l=o.indexOf(c);if(l!==-1&&(n===document||n===window)){e.__root=n;return}var u=o.indexOf(n);if(u===-1)return;l<=u&&(a=l)}if(s=o[a]||e.target,s!==n){rs(e,"currentTarget",{configurable:!0,get(){return s||t}});var v=$,_=j;Ie(null),We(null);try{for(var f,h=[];s!==null;){var b=s.assignedSlot||s.parentNode||s.host||null;try{var N=s["__"+r];if(N!=null&&(!s.disabled||e.target===s))if(nt(N)){var[F,...L]=N;F.apply(s,[e,...L])}else N.call(s,e)}catch(x){f?h.push(x):f=x}if(e.cancelBubble||b===n||b===null)break;s=b}if(f){for(let x of h)queueMicrotask(()=>{throw x});throw f}}finally{e.__root=n,delete e.currentTarget,Ie(v),We(_)}}}function Wt(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function fn(e,n){var t=j;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function ue(e,n){var t=(n&Ss)!==0,r=(n&Ns)!==0,o,s=!e.startsWith("<!>");return()=>{o===void 0&&(o=Wt(s?e:"<!>"+e),t||(o=Ce(o)));var a=r||Ur?document.importNode(o,!0):o.cloneNode(!0);if(t){var c=Ce(a),l=a.lastChild;fn(c,l)}else fn(a,a);return a}}function dt(e,n,t="svg"){var r=!e.startsWith("<!>"),o=`<${t}>${r?e:"<!>"+e}</${t}>`,s;return()=>{if(!s){var a=Wt(o),c=Ce(a);s=Ce(c)}var l=s.cloneNode(!0);return fn(l,l),l}}function It(e=""){{var n=ot(e+"");return fn(n,n),n}}function Yn(){var e=document.createDocumentFragment(),n=document.createComment(""),t=ot();return e.append(n,t),fn(n,t),e}function G(e,n){e!==null&&e.before(n)}function qe(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function ui(e,n){return fi(e,n)}const on=new Map;function fi(e,{target:n,anchor:t,props:r={},events:o,context:s,intro:a=!0}){Is();var c=new Set,l=_=>{for(var f=0;f<_.length;f++){var h=_[f];if(!c.has(h)){c.add(h);var b=si(h);n.addEventListener(h,Dn,{passive:b});var N=on.get(h);N===void 0?(document.addEventListener(h,Dn,{passive:b}),on.set(h,1)):on.set(h,N+1)}}};l(Pt(io)),Ot.add(l);var u=void 0,v=Vs(()=>{var _=t??n.appendChild(ot());return un(()=>{if(s){_n({});var f=K;f.c=s}o&&(r.$$events=o),u=e(_,r)||{},s&&vn()}),()=>{var b;for(var f of c){n.removeEventListener(f,Dn);var h=on.get(f);--h===0?(document.removeEventListener(f,Dn),on.delete(f)):on.set(f,h)}Ot.delete(l),_!==t&&((b=_.parentNode)==null||b.removeChild(_))}});return di.set(u,v),u}let di=new WeakMap;function Ue(e,n,[t,r]=[0,0]){var o=e,s=null,a=null,c=_e,l=t>0?Vt:0,u=!1;const v=(f,h=!0)=>{u=!0,_(h,f)},_=(f,h)=>{c!==(c=f)&&(c?(s?Kn(s):h&&(s=un(()=>h(o))),a&&Gn(a,()=>{a=null})):(a?Kn(a):h&&(a=un(()=>h(o,[t+1,r]))),s&&Gn(s,()=>{s=null})))};at(()=>{u=!1,n(v),u||_(null,null)},l)}function Rn(e,n){return n}function _i(e,n,t,r){for(var o=[],s=n.length,a=0;a<s;a++)Kt(n[a].e,o,!0);var c=s>0&&o.length===0&&t!==null;if(c){var l=t.parentNode;Ls(l),l.append(t),r.clear(),He(e,n[0].prev,n[s-1].next)}Yr(o,()=>{for(var u=0;u<s;u++){var v=n[u];c||(r.delete(v.k),He(e,v.prev,v.next)),Ve(v.e,!c)}})}function Mn(e,n,t,r,o,s=null){var a=e,c={flags:n,items:new Map,first:null},l=(n&Pr)!==0;if(l){var u=e;a=u.appendChild(ot())}var v=null,_=!1,f=Ut(()=>{var h=t();return nt(h)?h:h==null?[]:Pt(h)});at(()=>{var h=E(f),b=h.length;_&&b===0||(_=b===0,vi(h,c,a,o,n,r,t),s!==null&&(b===0?v?Kn(v):v=un(()=>s(a)):v!==null&&Gn(v,()=>{v=null})),E(f))})}function vi(e,n,t,r,o,s,a){var ye,Me,ve,Te;var c=(o&Ds)!==0,l=(o&(jt|$t))!==0,u=e.length,v=n.items,_=n.first,f=_,h,b=null,N,F=[],L=[],V,x,g,y;if(c)for(y=0;y<u;y+=1)V=e[y],x=s(V,y),g=v.get(x),g!==void 0&&((ye=g.a)==null||ye.measure(),(N??(N=new Set)).add(g));for(y=0;y<u;y+=1){if(V=e[y],x=s(V,y),g=v.get(x),g===void 0){var z=f?f.e.nodes_start:t;b=gi(z,n,b,b===null?n.first:b.next,V,x,y,r,o,a),v.set(x,b),F=[],L=[],f=b.next;continue}if(l&&mi(g,V,y,o),(g.e.f&ze)!==0&&(Kn(g.e),c&&((Me=g.a)==null||Me.unfix(),(N??(N=new Set)).delete(g))),g!==f){if(h!==void 0&&h.has(g)){if(F.length<L.length){var M=L[0],O;b=M.prev;var Z=F[0],fe=F[F.length-1];for(O=0;O<F.length;O+=1)Er(F[O],M,t);for(O=0;O<L.length;O+=1)h.delete(L[O]);He(n,Z.prev,fe.next),He(n,b,Z),He(n,fe,M),f=M,b=fe,y-=1,F=[],L=[]}else h.delete(g),Er(g,f,t),He(n,g.prev,g.next),He(n,g,b===null?n.first:b.next),He(n,b,g),b=g;continue}for(F=[],L=[];f!==null&&f.k!==x;)(f.e.f&ze)===0&&(h??(h=new Set)).add(f),L.push(f),f=f.next;if(f===null)continue;g=f}F.push(g),b=g,f=g.next}if(f!==null||h!==void 0){for(var ee=h===void 0?[]:Pt(h);f!==null;)(f.e.f&ze)===0&&ee.push(f),f=f.next;var ne=ee.length;if(ne>0){var de=(o&Pr)!==0&&u===0?t:null;if(c){for(y=0;y<ne;y+=1)(ve=ee[y].a)==null||ve.measure();for(y=0;y<ne;y+=1)(Te=ee[y].a)==null||Te.fix()}_i(n,ee,de,v)}}c&&Zt(()=>{var De;if(N!==void 0)for(g of N)(De=g.a)==null||De.apply()}),j.first=n.first&&n.first.e,j.last=b&&b.e}function mi(e,n,t,r){(r&jt)!==0&&Nt(e.v,n),(r&$t)!==0?Nt(e.i,t):e.i=t}function gi(e,n,t,r,o,s,a,c,l,u){var v=(l&jt)!==0,_=(l&xs)===0,f=v?_?Ht(o):cn(o):o,h=(l&$t)===0?a:cn(a),b={i:h,v:f,k:s,a:null,e:null,prev:t,next:r};try{return b.e=un(()=>c(e,f,h,u),Os),b.e.prev=t&&t.e,b.e.next=r&&r.e,t===null?n.first=b:(t.next=b,t.e.next=b.e),r!==null&&(r.prev=b,r.e.prev=b.e),b}finally{}}function Er(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,o=n?n.e.nodes_start:t,s=e.e.nodes_start;s!==r;){var a=st(s);o.before(s),s=a}}function He(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function pi(e,n,t=!1,r=!1,o=!1){var s=e,a="";he(()=>{var c=j;if(a!==(a=n()??"")&&(c.nodes_start!==null&&(Xr(c.nodes_start,c.nodes_end),c.nodes_start=c.nodes_end=null),a!=="")){var l=a+"";t?l=`<svg>${l}</svg>`:r&&(l=`<math>${l}</math>`);var u=Wt(l);if((t||r)&&(u=Ce(u)),fn(Ce(u),u.lastChild),t||r)for(;Ce(u);)s.before(Ce(u));else s.before(u)}})}function hi(e,n,t,r,o){var c;var s=(c=n.$$slots)==null?void 0:c[t],a=!1;s===!0&&(s=n.children,a=!0),s===void 0?o!==null&&o(e):s(e,a?()=>r:r)}function bi(e,n){var t=void 0,r;at(()=>{t!==(t=n())&&(r&&(Ve(r),r=null),t&&(r=un(()=>{Gt(()=>t(e))})))})}function ao(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(n=0;n<o;n++)e[n]&&(t=ao(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function yi(){for(var e,n,t=0,r="",o=arguments.length;t<o;t++)(e=arguments[t])&&(n=ao(e))&&(r&&(r+=" "),r+=n);return r}function lo(e){return typeof e=="object"?yi(e):e??""}const Dr=[...` 	
\r\f \v\uFEFF`];function wi(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var o in t)if(t[o])r=r?r+" "+o:o;else if(r.length)for(var s=o.length,a=0;(a=r.indexOf(o,a))>=0;){var c=a+s;(a===0||Dr.includes(r[a-1]))&&(c===r.length||Dr.includes(r[c]))?r=(a===0?"":r.substring(0,a))+r.substring(c+1):a=c}}return r===""?null:r}function xr(e,n=!1){var t=n?" !important;":";",r="";for(var o in e){var s=e[o];s!=null&&s!==""&&(r+=" "+o+": "+s+t)}return r}function Dt(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Ei(e,n){if(n){var t="",r,o;if(Array.isArray(n)?(r=n[0],o=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,a=0,c=!1,l=[];r&&l.push(...Object.keys(r).map(Dt)),o&&l.push(...Object.keys(o).map(Dt));var u=0,v=-1;const N=e.length;for(var _=0;_<N;_++){var f=e[_];if(c?f==="/"&&e[_-1]==="*"&&(c=!1):s?s===f&&(s=!1):f==="/"&&e[_+1]==="*"?c=!0:f==='"'||f==="'"?s=f:f==="("?a++:f===")"&&a--,!c&&s===!1&&a===0){if(f===":"&&v===-1)v=_;else if(f===";"||_===N-1){if(v!==-1){var h=Dt(e.substring(u,v).trim());if(!l.includes(h)){f!==";"&&_++;var b=e.substring(u,_).trim();t+=" "+b+";"}}u=_+1,v=-1}}}}return r&&(t+=xr(r)),o&&(t+=xr(o,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Sn(e,n,t,r,o,s){var a=e.__className;if(a!==t||a===void 0){var c=wi(t,r,s);c==null?e.removeAttribute("class"):n?e.className=c:e.setAttribute("class",c),e.__className=t}else if(s&&o!==s)for(var l in s){var u=!!s[l];(o==null||u!==!!o[l])&&e.classList.toggle(l,u)}return s}function xt(e,n={},t,r){for(var o in t){var s=t[o];n[o]!==s&&(t[o]==null?e.style.removeProperty(o):e.style.setProperty(o,s,r))}}function Xt(e,n,t,r){var o=e.__style;if(o!==n){var s=Ei(n,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=n}else r&&(Array.isArray(r)?(xt(e,t==null?void 0:t[0],r[0]),xt(e,t==null?void 0:t[1],r[1],"important")):xt(e,t,r));return r}const xn=Symbol("class"),En=Symbol("style"),co=Symbol("is custom element"),uo=Symbol("is html");function Di(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Qn(e,n,t,r){var o=fo(e);o[n]!==(o[n]=t)&&(n==="loading"&&(e[us]=t),t==null?e.removeAttribute(n):typeof t!="string"&&_o(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function xi(e,n,t,r,o=!1){var s=fo(e),a=s[co],c=!s[uo],l=n||{},u=e.tagName==="OPTION";for(var v in n)v in t||(t[v]=null);t.class?t.class=lo(t.class):t.class=null,t[En]&&(t.style??(t.style=null));var _=_o(e);for(const x in t){let g=t[x];if(u&&x==="value"&&g==null){e.value=e.__value="",l[x]=g;continue}if(x==="class"){var f=e.namespaceURI==="http://www.w3.org/1999/xhtml";Sn(e,f,g,r,n==null?void 0:n[xn],t[xn]),l[x]=g,l[xn]=t[xn];continue}if(x==="style"){Xt(e,g,n==null?void 0:n[En],t[En]),l[x]=g,l[En]=t[En];continue}var h=l[x];if(g!==h){l[x]=g;var b=x[0]+x[1];if(b!=="$$")if(b==="on"){const y={},z="$$"+x;let M=x.slice(2);var N=ni(M);if(Qs(M)&&(M=M.slice(0,-7),y.capture=!0),!N&&h){if(g!=null)continue;e.removeEventListener(M,l[z],y),l[z]=null}if(g!=null)if(N)e[`__${M}`]=g,ft([M]);else{let O=function(Z){l[x].call(this,Z)};var V=O;l[z]=ci(M,e,O,y)}else N&&(e[`__${M}`]=void 0)}else if(x==="style")Qn(e,x,g);else if(x==="autofocus")ii(e,!!g);else if(!a&&(x==="__value"||x==="value"&&g!=null))e.value=e.__value=g;else if(x==="selected"&&u)Di(e,g);else{var F=x;c||(F=ri(F));var L=F==="defaultValue"||F==="defaultChecked";if(g==null&&!a&&!L)if(s[x]=null,F==="value"||F==="checked"){let y=e;const z=n===void 0;if(F==="value"){let M=y.defaultValue;y.removeAttribute(F),y.defaultValue=M,y.value=y.__value=z?M:null}else{let M=y.defaultChecked;y.removeAttribute(F),y.defaultChecked=M,y.checked=z?M:!1}}else e.removeAttribute(x);else L||_.includes(F)&&(a||typeof g!="string")?e[F]=g:typeof g!="function"&&Qn(e,F,g)}}}for(let x of Object.getOwnPropertySymbols(t))x.description===As&&bi(e,()=>t[x]);return l}function fo(e){return e.__attributes??(e.__attributes={[co]:e.nodeName.includes("-"),[uo]:e.namespaceURI===ks})}var Rr=new Map;function _o(e){var n=Rr.get(e.nodeName);if(n)return n;Rr.set(e.nodeName,n=[]);for(var t,r=e,o=Element.prototype;o!==r;){t=Ar(r);for(var s in t)t[s].set&&n.push(s);r=zt(r)}return n}function Ri(e,n,t=n){var r=kn();li(e,"input",o=>{var s=o?e.defaultValue:e.value;if(s=Rt(e)?Mt(s):s,t(s),r&&s!==(s=n())){var a=e.selectionStart,c=e.selectionEnd;e.value=s??"",c!==null&&(e.selectionStart=a,e.selectionEnd=Math.min(c,e.value.length))}}),Fn(n)==null&&e.value&&t(Rt(e)?Mt(e.value):e.value),it(()=>{var o=n();Rt(e)&&o===Mt(e.value)||e.type==="date"&&!o&&!e.value||o!==e.value&&(e.value=o??"")})}function Rt(e){var n=e.type;return n==="number"||n==="range"}function Mt(e){return e===""?null:+e}function vo(e=!1){const n=K,t=n.l.u;if(!t)return;let r=()=>At(n.s);if(e){let o=0,s={};const a=ln(()=>{let c=!1;const l=n.s;for(const u in l)l[u]!==s[u]&&(s[u]=l[u],c=!0);return c&&o++,o});r=()=>E(a)}t.b.length&&qs(()=>{Mr(n,r),Ft(t.b)}),hr(()=>{const o=Fn(()=>t.m.map(is));return()=>{for(const s of o)typeof s=="function"&&s()}}),t.a.length&&hr(()=>{Mr(n,r),Ft(t.a)})}function Mr(e,n){if(e.l.s)for(const t of e.l.s)E(t);n()}let Bn=!1;function Mi(e){var n=Bn;try{return Bn=!1,[e(),Bn]}finally{Bn=n}}const Ti={get(e,n){if(!e.exclude.includes(n))return E(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=Ke({get[n](){return e.props[n]}},n,zr)),e.special[n](t),gr(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),gr(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function et(e,n){return new Proxy({props:e,exclude:n,special:{},version:cn(0)},Ti)}const Fi={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(wn(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let o=e.props[r];wn(o)&&(o=o());const s=Ze(o,n);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(wn(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const o=Ze(r,n);return o&&!o.configurable&&(o.configurable=!0),o}}},has(e,n){if(n===Qe||n===Ir)return!1;for(let t of e.props)if(wn(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(wn(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function Si(...e){return new Proxy({props:e},Fi)}function Tr(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function Ke(e,n,t,r){var z;var o=(t&Rs)!==0,s=!Nn||(t&Ms)!==0,a=(t&Ts)!==0,c=(t&Fs)!==0,l=!1,u;a?[u,l]=Mi(()=>e[n]):u=e[n];var v=Qe in e||Ir in e,_=a&&(((z=Ze(e,n))==null?void 0:z.set)??(v&&n in e&&(M=>e[n]=M)))||void 0,f=r,h=!0,b=!1,N=()=>(b=!0,h&&(h=!1,c?f=Fn(r):f=r),f);u===void 0&&r!==void 0&&(_&&s&&ps(),u=N(),_&&_(u));var F;if(s)F=()=>{var M=e[n];return M===void 0?N():(h=!0,b=!1,M)};else{var L=(o?ln:Ut)(()=>e[n]);L.f|=ls,F=()=>{var M=E(L);return M!==void 0&&(f=void 0),M===void 0?f:M}}if((t&zr)===0)return F;if(_){var V=e.$$legacy;return function(M,O){return arguments.length>0?((!s||!O||V||l)&&_(O?F():M),M):F()}}var x=!1,g=Ht(u),y=ln(()=>{var M=F(),O=E(g);return x?(x=!1,O):g.v=M});return a&&E(y),o||(y.equals=Bt),function(M,O){if(arguments.length>0){const Z=O?E(y):s&&a?Pe(M):M;if(!y.equals(Z)){if(x=!0,Y(g,Z),b&&f!==void 0&&(f=Z),Tr(y))return M;Fn(()=>E(y))}return M}return Tr(y)?y.v:E(y)}}function Ni(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function ki(){const e=K;return e===null&&qr(),(n,t,r)=>{var s;const o=(s=e.s.$$events)==null?void 0:s[n];if(o){const a=nt(o)?o.slice():[o],c=Ni(n,t,r);for(const l of a)l.call(e.x,c);return!c.defaultPrevented}return!0}}function Ai(e){K===null&&qr(),K.l===null&&gs(),Ci(K).a.push(e)}function Ci(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Oi="5";var kr;typeof window<"u"&&((kr=window.__svelte??(window.__svelte={})).v??(kr.v=new Set)).add(Oi);const Ii={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:"wrong",FiniteDifferences:92.05199378560332,ForwardDiff:2.293677489407405,MooncakeFwd:27.18689429211933,MooncakeRvs:7.312564129780986,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:793.336147270599},Li={__category__:"Distributions",EnzymeFwd:3.0288875375169195,EnzymeRvs:1.1946386830367044,FiniteDifferences:57.22945908935296,ForwardDiff:2.173711867413103,MooncakeFwd:5.351388162147188,MooncakeRvs:3.3525221169873656,ReverseDiff:70.49920336282584,ReverseDiffCompiled:5.601961986511343,Zygote:3435.535217525033},Pi={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:"error",FiniteDifferences:61.27383836713566,ForwardDiff:1.1650714696598363,MooncakeFwd:353.92802705307207,MooncakeRvs:12.066344101635382,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},zi={__category__:"DynamicPPL demo models",EnzymeFwd:4.505501099430349,EnzymeRvs:1.7110482025838882,FiniteDifferences:98.87323240913987,ForwardDiff:3.1183035720478345,MooncakeFwd:10.881226053639846,MooncakeRvs:5.839563243266181,ReverseDiff:198.09273448724088,ReverseDiffCompiled:18.504860744883032,Zygote:"error"},qi={__category__:"DynamicPPL demo models",EnzymeFwd:3.4097018258951617,EnzymeRvs:1.3895575584010385,FiniteDifferences:76.79127641589182,ForwardDiff:4.120952754875016,MooncakeFwd:9.401655098439068,MooncakeRvs:5.475793981206138,ReverseDiff:138.33872916163324,ReverseDiffCompiled:12.64978585748132,Zygote:8689.209192733233},Vi={__category__:"DynamicPPL demo models",EnzymeFwd:7.0173439048562924,EnzymeRvs:17.360669954089442,FiniteDifferences:92.56221863871531,ForwardDiff:1.6678310195551576,MooncakeFwd:14.559661303979677,MooncakeRvs:4.419205191867445,ReverseDiff:88.31142382349822,ReverseDiffCompiled:8.628115089306457,Zygote:"error"},Bi={__category__:"DynamicPPL demo models",EnzymeFwd:9.55373916115604,EnzymeRvs:17.687833022229764,FiniteDifferences:82.61110922371326,ForwardDiff:1.4649911756333618,MooncakeFwd:15.924468448759143,MooncakeRvs:6.691037334694052,ReverseDiff:61.04368163995322,ReverseDiffCompiled:5.964085490034552,Zygote:"error"},ji={__category__:"DynamicPPL demo models",EnzymeFwd:11.24254129197095,EnzymeRvs:19.171408361565096,FiniteDifferences:88.81401465997965,ForwardDiff:1.456915427424505,MooncakeFwd:16.164809197996753,MooncakeRvs:6.15025206227659,ReverseDiff:68.16198860693942,ReverseDiffCompiled:6.987625035724492,Zygote:"error"},$i={__category__:"DynamicPPL demo models",EnzymeFwd:7.219568488931515,EnzymeRvs:18.17184216670558,FiniteDifferences:84.91158900836321,ForwardDiff:1.4790027612574341,MooncakeFwd:15.631461131461133,MooncakeRvs:6.021088498222645,ReverseDiff:66.96414929973865,ReverseDiffCompiled:6.37806265853157,Zygote:"error"},Ui={__category__:"DynamicPPL demo models",EnzymeFwd:4.37196929402667,EnzymeRvs:1.5161845143096209,FiniteDifferences:105.52432099610043,ForwardDiff:1.9661113731088364,MooncakeFwd:10.887968002219498,MooncakeRvs:5.825599425916075,ReverseDiff:199.82479276563677,ReverseDiffCompiled:19.84550744480575,Zygote:11604.614945054946},Hi={__category__:"DynamicPPL demo models",EnzymeFwd:7.31173225611341,EnzymeRvs:10.402001020929045,FiniteDifferences:84.90001058835986,ForwardDiff:1.386400239244195,MooncakeFwd:14.798632244828179,MooncakeRvs:5.55788993441688,ReverseDiff:78.6380766731644,ReverseDiffCompiled:7.722227067634198,Zygote:"error"},Gi={__category__:"DynamicPPL demo models",EnzymeFwd:9.710720887245841,EnzymeRvs:15.542709104367136,FiniteDifferences:82.20030756026034,ForwardDiff:1.3909193542662097,MooncakeFwd:15.564192807957152,MooncakeRvs:6.042310767590618,ReverseDiff:64.89792652379627,ReverseDiffCompiled:6.522962978593208,Zygote:"error"},Ki={__category__:"Distributions",EnzymeFwd:6.128987493575466,EnzymeRvs:9.839461409434525,FiniteDifferences:27.860252279426884,ForwardDiff:1.231040989039963,MooncakeFwd:4.286971496131802,MooncakeRvs:6.051246092639954,ReverseDiff:23.582545458667756,ReverseDiffCompiled:3.724573299041384,Zygote:"error"},Zi={__category__:"DynamicPPL demo models",EnzymeFwd:7.015280823073031,EnzymeRvs:12.748112384562164,FiniteDifferences:84.70985165180718,ForwardDiff:1.7957897553785138,MooncakeFwd:13.717625231910947,MooncakeRvs:5.2572976539844065,ReverseDiff:75.108125819135,ReverseDiffCompiled:7.402859291129723,Zygote:"error"},Wi={__category__:"DynamicPPL demo models",EnzymeFwd:7.226677645121449,EnzymeRvs:8.739810280793888,FiniteDifferences:87.71845087096229,ForwardDiff:1.4526569220104502,MooncakeFwd:14.350025594581822,MooncakeRvs:5.416393993846332,ReverseDiff:78.61391710129016,ReverseDiffCompiled:8.11272184266515,Zygote:"error"},Xi={__category__:"DynamicPPL demo models",EnzymeFwd:8.531801670484256,EnzymeRvs:15.378903903903904,FiniteDifferences:79.90429422212935,ForwardDiff:1.4019211752193894,MooncakeFwd:15.545136058168998,MooncakeRvs:6.761707233572978,ReverseDiff:72.39054946551373,ReverseDiffCompiled:5.755878084179971,Zygote:"error"},Ji={__category__:"DynamicPPL demo models",EnzymeFwd:9.35042842641217,EnzymeRvs:16.492298626201613,FiniteDifferences:82.3058725876738,ForwardDiff:1.393725012829234,MooncakeFwd:15.830838591710885,MooncakeRvs:6.072427862884507,ReverseDiff:66.39904713289093,ReverseDiffCompiled:6.664504579843461,Zygote:"error"},Yi={__category__:"Core Turing syntax",EnzymeFwd:3.0615313521967864,EnzymeRvs:1.0736302786871905,FiniteDifferences:175.81806668035875,ForwardDiff:2.192228883431741,MooncakeFwd:24.101218682985515,MooncakeRvs:5.255989475141948,ReverseDiff:122.57808322478918,ReverseDiffCompiled:10.281457669773111,Zygote:"error"},Qi={__category__:"Core Turing syntax",EnzymeFwd:18.096714290494194,EnzymeRvs:3.5644266975056174,FiniteDifferences:247.06856858678117,ForwardDiff:7.377318451073498,MooncakeFwd:22.851727152849442,MooncakeRvs:21.89935470627086,ReverseDiff:943.0888451587041,ReverseDiffCompiled:77.85858549210265,Zygote:"error"},ea={__category__:"DynamicPPL arXiV paper",EnzymeFwd:7.340985983566941,EnzymeRvs:4.69266507109672,FiniteDifferences:21.10421032577634,ForwardDiff:2.2355401702004905,MooncakeFwd:6.242724097788126,MooncakeRvs:44.74501042597557,ReverseDiff:1174.089276463478,ReverseDiffCompiled:122.80353804113334,Zygote:"error"},na={__category__:"DynamicPPL arXiV paper",EnzymeFwd:7.138088120150901,EnzymeRvs:3.069174956914332,FiniteDifferences:179.99003802688662,ForwardDiff:5.287157080438363,MooncakeFwd:27.09506247985964,MooncakeRvs:5.022407653850305,ReverseDiff:67.63661942476031,ReverseDiffCompiled:5.69055836239,Zygote:"error"},ta={__category__:"DynamicPPL arXiV paper",EnzymeFwd:54522.320955273324,EnzymeRvs:6.423302724672587,FiniteDifferences:127448.71967775623,ForwardDiff:14289.159630016411,MooncakeFwd:32731.144261092777,MooncakeRvs:4.7110119225930145,ReverseDiff:551.6505553887721,ReverseDiffCompiled:93.43536206130608,Zygote:"error"},ra={__category__:"DynamicPPL arXiV paper",EnzymeFwd:62.13815796710851,EnzymeRvs:10.868082841835623,FiniteDifferences:"NaN",ForwardDiff:26.524162145788008,MooncakeFwd:4392.983174943406,MooncakeRvs:5.849946925509679,ReverseDiff:67.62275127343308,ReverseDiffCompiled:10.046438627303392,Zygote:"error"},oa={__category__:"Distributions",EnzymeFwd:4.526207193890121,EnzymeRvs:18.89977598796149,FiniteDifferences:173.4876712328767,ForwardDiff:2.4400752265344505,MooncakeFwd:22.44838976052849,MooncakeRvs:4.976291278577476,ReverseDiff:63.68988391376451,ReverseDiffCompiled:7.375366051582401,Zygote:"error"},sa={__category__:"DynamicPPL arXiV paper",EnzymeFwd:322.94660337567234,EnzymeRvs:1.4449245916532136,FiniteDifferences:7040.7342926989095,ForwardDiff:67.34289472744372,MooncakeFwd:422.72025650108975,MooncakeRvs:9.560450748225318,ReverseDiff:75.20323902681349,ReverseDiffCompiled:9.805133185511943,Zygote:"error"},ia={__category__:"DynamicPPL arXiV paper",EnzymeFwd:44.863449394588955,EnzymeRvs:3.3888159594266165,FiniteDifferences:1226.2699935877777,ForwardDiff:57.705204823713515,MooncakeFwd:150.22748309127817,MooncakeRvs:4.357579158155037,ReverseDiff:65.22218903878093,ReverseDiffCompiled:9.968594411054418,Zygote:10763.59261230182},aa={__category__:"DynamicPPL arXiV paper",EnzymeFwd:154.39517796658325,EnzymeRvs:.9793599834109309,FiniteDifferences:2714.524076006733,ForwardDiff:130.77282993086942,MooncakeFwd:374.28499551664953,MooncakeRvs:4.1611707102382125,ReverseDiff:134.0634947917619,ReverseDiffCompiled:20.00817314671069,Zygote:"error"},la={__category__:"DynamicPPL arXiV paper",EnzymeFwd:92.62941891294741,EnzymeRvs:4.581584180291648,FiniteDifferences:6721.631680867545,ForwardDiff:212.96489197530863,MooncakeFwd:1257.5284705363053,MooncakeRvs:4.693298406461471,ReverseDiff:225.40004946685718,ReverseDiffCompiled:20.270739023725117,Zygote:"error"},ca={__category__:"Core Turing syntax",EnzymeFwd:3.4532244342351537,EnzymeRvs:2.219181923765005,FiniteDifferences:77.40777082275983,ForwardDiff:1.5554421794274318,MooncakeFwd:8.998624400160283,MooncakeRvs:4.257199728951381,ReverseDiff:101.62593159775396,ReverseDiffCompiled:10.225861002268509,Zygote:6273.832523364486},ua={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:20.26096997690531,FiniteDifferences:261.22547551534075,ForwardDiff:3.795990865262624,MooncakeFwd:51.92987596444965,MooncakeRvs:41.06598323012651,ReverseDiff:91.62931034482757,ReverseDiffCompiled:25.839586978255436,Zygote:"error"},fa={__category__:"Core Turing syntax",EnzymeFwd:3.338567819308921,EnzymeRvs:3.4531657479146536,FiniteDifferences:64.4977514309076,ForwardDiff:1.120489600385456,MooncakeFwd:9.338139357346103,MooncakeRvs:3.385805127107103,ReverseDiff:25.27879820627803,ReverseDiffCompiled:2.582595352915388,Zygote:"error"},da={__category__:"Base Julia features",EnzymeFwd:4.798426832888097,EnzymeRvs:"wrong",FiniteDifferences:11.077171463748925,ForwardDiff:.9902264524577598,MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},_a={__category__:"Effect of model size",EnzymeFwd:2.63097281586596,EnzymeRvs:.8006001274727672,FiniteDifferences:201.62007620367166,ForwardDiff:3.9219834151294637,MooncakeFwd:38.68095967330271,MooncakeRvs:5.188435005994178,ReverseDiff:128.30234709611102,ReverseDiffCompiled:11.69487324806617,Zygote:"error"},va={__category__:"Effect of model size",EnzymeFwd:9.189382016577484,EnzymeRvs:.5695039085008535,FiniteDifferences:870.9083344889751,ForwardDiff:21.915722096279502,MooncakeFwd:170.429865842523,MooncakeRvs:5.110700389105059,ReverseDiff:127.30099640188207,ReverseDiffCompiled:11.741794765267969,Zygote:"error"},ma={__category__:"Distributions",EnzymeFwd:"error",EnzymeRvs:4.51337895163603,FiniteDifferences:42.88852640761878,ForwardDiff:1.032519907958556,MooncakeFwd:15.777125640724654,MooncakeRvs:8.941428769882613,ReverseDiff:18.97369569677865,ReverseDiffCompiled:1.562320671482483,Zygote:1377.3180076628353},ga={__category__:"Effect of model size",EnzymeFwd:20.372338925701396,EnzymeRvs:1.2208526478437984,FiniteDifferences:1654.6213548899027,ForwardDiff:22.616842636301396,MooncakeFwd:345.41561961074154,MooncakeRvs:5.212070855284094,ReverseDiff:127.87261455338897,ReverseDiffCompiled:12.245536806065052,Zygote:"error"},pa={__category__:"Effect of model size",EnzymeFwd:85.44082784571967,EnzymeRvs:1.122549499298692,FiniteDifferences:5679.838697399028,ForwardDiff:130.07356614141048,MooncakeFwd:1653.0671419502908,MooncakeRvs:4.975752264095822,ReverseDiff:130.32286864961907,ReverseDiffCompiled:11.331130316895441,Zygote:"error"},ha={__category__:"Distributions",EnzymeFwd:2.5528884258590008,EnzymeRvs:1.819211391821686,FiniteDifferences:33.60112575603958,ForwardDiff:1.8771388419882225,MooncakeFwd:4.499179727922062,MooncakeRvs:3.6855166564300545,ReverseDiff:66.91935538592028,ReverseDiffCompiled:6.237433522044947,Zygote:"error"},ba={__category__:"Distributions",EnzymeFwd:2.0253637956446906,EnzymeRvs:7.184226937137123,FiniteDifferences:21.257093968344506,ForwardDiff:1.5407156129763133,MooncakeFwd:4.186009074168992,MooncakeRvs:6.994451084172785,ReverseDiff:20.639584397887923,ReverseDiffCompiled:3.978630009469241,Zygote:"error"},ya={__category__:"Core Turing syntax",EnzymeFwd:17.766525295825545,EnzymeRvs:3.6645265282841617,FiniteDifferences:244.8080704370536,ForwardDiff:7.398726172152033,MooncakeFwd:22.724990426890795,MooncakeRvs:22.668095652293974,ReverseDiff:941.1517375509156,ReverseDiffCompiled:77.70937648977542,Zygote:"error"},wa={__category__:"Core Turing syntax",EnzymeFwd:35.133167692650005,EnzymeRvs:6.56953818388588,FiniteDifferences:465.2095088161209,ForwardDiff:9.887455418598615,MooncakeFwd:45.34718759557384,MooncakeRvs:25.464064995941023,ReverseDiff:1011.3734672897195,ReverseDiffCompiled:87.25954337118986,Zygote:68325.1121619509},Ea={__category__:"Core Turing syntax",EnzymeFwd:3.5555666468535745,EnzymeRvs:12.429833904465681,FiniteDifferences:102.51257893838537,ForwardDiff:1.439357087574123,MooncakeFwd:13.063069952085383,MooncakeRvs:5.747223264540338,ReverseDiff:103.64523616924,ReverseDiffCompiled:8.774304141342647,Zygote:"error"},Da={__category__:"Core Turing syntax",EnzymeFwd:41.00404122044858,EnzymeRvs:6.6557449685834165,FiniteDifferences:534.555967784526,ForwardDiff:10.125942674877356,MooncakeFwd:45.35226363673123,MooncakeRvs:28.54020449433565,ReverseDiff:1263.5681659190982,ReverseDiffCompiled:88.65661041819516,Zygote:141955.30295517654},xa={__category__:"Distributions",EnzymeFwd:"error",EnzymeRvs:"error",FiniteDifferences:29.467310712091216,ForwardDiff:"NaN",MooncakeFwd:5.304004505957817,MooncakeRvs:3.691666280345526,ReverseDiff:"NaN",ReverseDiffCompiled:5.211735717150879,Zygote:3508.121304274371},Ra={__category__:"External libraries",EnzymeFwd:"wrong",EnzymeRvs:90.69763490384017,FiniteDifferences:62.626001162232505,ForwardDiff:5.0515386667005355,MooncakeFwd:2395.33758776329,MooncakeRvs:71.245061088994,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Ma={__category__:"Distributions",EnzymeFwd:37.714446663593996,EnzymeRvs:6.677957669102505,FiniteDifferences:504.61061746987946,ForwardDiff:9.551903146281825,MooncakeFwd:41.944080658958825,MooncakeRvs:21.9737111543208,ReverseDiff:749.6014445845117,ReverseDiffCompiled:56.789626257483896,Zygote:51834.14544093309},Ta={__category__:"PosteriorDB",EnzymeFwd:3.3617173148585526,EnzymeRvs:8.179307052243896,FiniteDifferences:208.0293129770992,ForwardDiff:4.774088501623099,MooncakeFwd:33.95785704448423,MooncakeRvs:5.373236043229848,ReverseDiff:213.06015657189948,ReverseDiffCompiled:17.709270780214176,Zygote:"error"},Fa={__category__:"PosteriorDB",EnzymeFwd:3.1027498151623734,EnzymeRvs:7.5199187679810455,FiniteDifferences:205.22338061869766,ForwardDiff:5.1468879446881095,MooncakeFwd:33.5184216109186,MooncakeRvs:5.413907584583346,ReverseDiff:205.11615631872777,ReverseDiffCompiled:16.699617920540998,Zygote:"error"},Sa={__category__:"Core Turing syntax",EnzymeFwd:9.415523703201627,EnzymeRvs:1.7100421346547803,FiniteDifferences:233.95586364118336,ForwardDiff:3.034310111695798,MooncakeFwd:21.43886168476332,MooncakeRvs:9.320106112425517,ReverseDiff:260.5256852296869,ReverseDiffCompiled:22.00985728393634,Zygote:30648.320693391113},Na={__category__:"Distributions",EnzymeFwd:11.1572675664096,EnzymeRvs:11.642125827574977,FiniteDifferences:35.070686872093866,ForwardDiff:1.0290834103676314,MooncakeFwd:18.55651662457184,MooncakeRvs:9.718201968259597,ReverseDiff:45.453870989901766,ReverseDiffCompiled:4.215944758317639,Zygote:"error"},ka={__category__:"Core Turing syntax",EnzymeFwd:4.5870911342609455,EnzymeRvs:1.559505985302376,FiniteDifferences:100.05272340425532,ForwardDiff:1.8083232340720221,MooncakeFwd:11.761812297734627,MooncakeRvs:6.40182827032853,ReverseDiff:213.69510823248677,ReverseDiffCompiled:18.428243183392237,Zygote:"error"},Aa={__category__:"Base Julia features",EnzymeFwd:4.01717675112968,EnzymeRvs:2.1222267592214505,FiniteDifferences:87.0897151628859,ForwardDiff:2.266444896368111,MooncakeFwd:10.655121187595842,MooncakeRvs:4.5357765536469925,ReverseDiff:73.42831941366967,ReverseDiffCompiled:"wrong",Zygote:8007.110992366413},Ca={abstractgps:Ii,assume_beta:Li,delaydiffeq:Pi,demo_assume_dot_observe:zi,demo_assume_dot_observe_literal:qi,demo_assume_index_observe:Vi,demo_assume_matrix_observe_matrix_index:Bi,demo_assume_multivariate_observe:ji,demo_assume_multivariate_observe_literal:$i,demo_assume_observe_literal:Ui,demo_assume_submodel_observe_index_literal:Hi,demo_dot_assume_observe:Gi,assume_dirichlet:Ki,demo_dot_assume_observe_index:Zi,demo_dot_assume_observe_index_literal:Wi,demo_dot_assume_observe_matrix_index:Xi,demo_dot_assume_observe_submodel:Ji,dot_assume:Yi,dot_observe:Qi,dppl_gauss_unknown:ea,dppl_hier_poisson:na,dppl_high_dim_gauss:ta,dppl_hmm_semisup:ra,assume_lkjcholu:oa,dppl_lda:sa,dppl_logistic_regression:ia,dppl_naive_bayes:aa,dppl_sto_volatility:la,dynamic_constraint:ca,lux_nn:ua,multiple_constraints_same_var:fa,multithreaded:da,n010:_a,n050:va,assume_mvnormal:ma,n100:ga,n500:pa,observe_bernoulli:ha,observe_categorical:ba,observe_index:ya,observe_literal:wa,observe_multivariate:Ea,observe_submodel:Da,observe_von_mises:xa,ordinarydiffeq:Ra,assume_normal:Ma,pdb_eight_schools_centered:Ta,pdb_eight_schools_noncentered:Fa,assume_submodel:Sa,assume_wishart:Na,broadcast_macro:ka,control_flow:Aa},Oa=`#=
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

model = abstractgps(distance, n, y)`,Ia=`@model function assume_beta()
    a ~ Beta(2, 2)
end

model = assume_beta()`,La=`#=
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

model = delaydiffeq(ddedata, prob_dde)`,Pa=`@model function demo_assume_dot_observe(x = [1.5, 2.0])
    # \`assume\` and \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    x .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe()`,za=`@model function demo_assume_dot_observe_literal()
    # \`assume\` and literal \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    [1.5, 2.0] .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe_literal()`,qa=`using LinearAlgebra: Diagonal

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

model = demo_assume_index_observe()`,Va=`using FillArrays
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

model = demo_assume_matrix_observe_matrix_index()`,Ba=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe(x = [1.5, 2.0])
    # Multivariate \`assume\` and \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zero(x), Diagonal(s))
    x ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe()`,ja=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe_literal()
    # multivariate \`assume\` and literal \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zeros(2), Diagonal(s))
    [1.5, 2.0] ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe_literal()`,$a=`@model function demo_assume_observe_literal()
    # univariate \`assume\` and literal \`observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    1.5 ~ Normal(m, sqrt(s))
    2.0 ~ Normal(m, sqrt(s))
end

model = demo_assume_observe_literal()`,Ua=`@model function _prior_dot_assume(::Type{TV} = Vector{Float64}) where {TV}
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

model = demo_assume_submodel_observe_index_literal()`,Ha=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe()`,Ga=`@model function assume_dirichlet()
    a ~ Dirichlet([1.0, 5.0])
end

model = assume_dirichlet()`,Ka=`@model function demo_dot_assume_observe_index(
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

model = demo_dot_assume_observe_index()`,Za=`@model function demo_dot_assume_observe_index_literal(
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

model = demo_dot_assume_observe_index_literal()`,Wa=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe_matrix_index()`,Xa=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe_submodel()`,Ja=`@model function dot_assume(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 5)
    a .~ Normal()
end

model = dot_assume()`,Ya=`@model function dot_observe(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    x .~ Normal(a)
end

model = dot_observe()`,Qa=`using FillArrays

n = 10_000
s = abs(rand()) + 0.5
y = randn() .+ s * randn(n)

@model function dppl_gauss_unknown(y)
    N = length(y)
    m ~ Normal(0, 1)
    s ~ truncated(Cauchy(0, 5); lower = 0)
    y ~ product_distribution(Fill(Normal(m, s), N))
end

model = dppl_gauss_unknown(y)`,el=`using FillArrays
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

model = dppl_hier_poisson(y, x, idx, ns)`,nl=`using FillArrays

@model function dppl_high_dim_gauss(D)
    m ~ product_distribution(Fill(Normal(0, 1), D))
end

model = dppl_high_dim_gauss(10_000)`,tl=`using FillArrays
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

model = dppl_hmm_semisup(K, T, T_unsup, w, z, u, alpha, beta)`,rl=`@model function assume_lkjcholu()
    a ~ LKJCholesky(5, 1.0, 'U')
end

model = assume_lkjcholu()`,ol=`using FillArrays

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

model = dppl_lda(k, m, w, doc, alpha, beta)`,sl=`using Random: Xoshiro
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

model = dppl_logistic_regression(X', y)`,il=`using DelimitedFiles
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

model = dppl_naive_bayes(image_vec, labels, C, D)`,al=`using DelimitedFiles: readdlm

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

model = dppl_sto_volatility(y)`,ll=`@model function dynamic_constraint()
    a ~ Normal()
    b ~ truncated(Normal(); lower = a)
end

model = dynamic_constraint()`,cl=`#=
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

model = lux_nn(reduce(hcat, xs), ts)`,ul=`@model function multiple_constraints_same_var(::Type{TV} = Vector{Float64}) where {TV}
    x = TV(undef, 5)
    x[1] ~ Normal()
    x[2] ~ InverseGamma(2, 3)
    x[3] ~ truncated(Normal(), -5, 20)
    x[4:5] ~ Dirichlet([1.0, 2.0])
end

model = multiple_constraints_same_var()`,fl=`#=
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
model = setthreadsafe(multithreaded(x), true)`,dl=`@model function n010(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 10)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n010()`,_l=`@model function n050(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 50)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n050()`,vl=`@model function assume_mvnormal()
    a ~ MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0])
end

model = assume_mvnormal()`,ml=`@model function n100(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 100)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n100()`,gl=`@model function n500(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 500)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n500()`,pl=`@model function observe_bernoulli(x = [true, false, true])
    a ~ Beta(2, 2)
    for i in eachindex(x)
        x[i] ~ Bernoulli(a)
    end
end

model = observe_bernoulli()`,hl=`@model function observe_categorical(x = [1, 2, 1, 2, 2])
    a ~ Dirichlet(2, 3)
    for i in eachindex(x)
        x[i] ~ Categorical(a)
    end
end

model = observe_categorical()`,bl=`@model function observe_index(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end

model = observe_index()`,yl=`@model function observe_literal()
    a ~ Normal()
    1.5 ~ Normal(a)
end

model = observe_literal()`,wl=`@model function observe_multivariate(
    x = [1.5, 2.0, 2.5],
    ::Type{TV} = Vector{Float64},
) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    x ~ MvNormal(a, I)
end

model = observe_multivariate()`,El=`@model function inner2(x, a)
    x ~ Normal(a)
end
@model function observe_submodel(x = 1.5)
    a ~ Normal()
    _ignore ~ to_submodel(inner2(x, a))
end

model = observe_submodel()`,Dl=`@model function observe_von_mises(x)
    a ~ InverseGamma(2, 3)
    x ~ VonMises(0, a)
end

model = observe_von_mises(0.4)`,xl=`# See https://turinglang.org/docs/tutorials/bayesian-differential-equations/.

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

model = ordinarydiffeq(odedata, prob)`,Rl=`@model function assume_normal()
    a ~ Normal()
end

model = assume_normal()`,Ml=`J = 8
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

model = pdb_eight_schools_centered(J, y, sigma)`,Tl=`J = 8
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

model = pdb_eight_schools_noncentered(J, y, sigma)`,Fl=`@model function inner1()
    return a ~ Normal()
end
@model function assume_submodel()
    a ~ to_submodel(inner1())
    x ~ Normal(a)
end

model = assume_submodel()`,Sl=`@model function assume_wishart()
    a ~ Wishart(7, [1.0 0.5; 0.5 1.0])
end

model = assume_wishart()`,Nl=`@model function broadcast_macro(x = [1.5, 2.0], ::Type{TV} = Vector{Float64}) where {TV}
    a ~ Normal(0, 1)
    b ~ InverseGamma(2, 3)
    @. x ~ Normal(a, $(sqrt(b)))
end

model = broadcast_macro()`,kl=`#= 
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

model = control_flow()`,Al={abstractgps:Oa,assume_beta:Ia,delaydiffeq:La,demo_assume_dot_observe:Pa,demo_assume_dot_observe_literal:za,demo_assume_index_observe:qa,demo_assume_matrix_observe_matrix_index:Va,demo_assume_multivariate_observe:Ba,demo_assume_multivariate_observe_literal:ja,demo_assume_observe_literal:$a,demo_assume_submodel_observe_index_literal:Ua,demo_dot_assume_observe:Ha,assume_dirichlet:Ga,demo_dot_assume_observe_index:Ka,demo_dot_assume_observe_index_literal:Za,demo_dot_assume_observe_matrix_index:Wa,demo_dot_assume_observe_submodel:Xa,dot_assume:Ja,dot_observe:Ya,dppl_gauss_unknown:Qa,dppl_hier_poisson:el,dppl_high_dim_gauss:nl,dppl_hmm_semisup:tl,assume_lkjcholu:rl,dppl_lda:ol,dppl_logistic_regression:sl,dppl_naive_bayes:il,dppl_sto_volatility:al,dynamic_constraint:ll,lux_nn:cl,multiple_constraints_same_var:ul,multithreaded:fl,n010:dl,n050:_l,assume_mvnormal:vl,n100:ml,n500:gl,observe_bernoulli:pl,observe_categorical:hl,observe_index:bl,observe_literal:yl,observe_multivariate:wl,observe_submodel:El,observe_von_mises:Dl,ordinarydiffeq:xl,assume_normal:Rl,pdb_eight_schools_centered:Ml,pdb_eight_schools_noncentered:Tl,assume_submodel:Fl,assume_wishart:Sl,broadcast_macro:Nl,control_flow:kl};Es();const Cl="1.21.0",Ol="1.5.0",Il="0.5.24",Ll="5.14.0",Pl="0.14.1",zl="0.4.5",ql="0.1.43",Vl="4.5.0",Bl="0.8.3",jl="0.8.10",$l="0.7.2",Ul="0.6.2",Hl="1.1.3",Gl="2.5.0",Kl="1.1.2",Zl="0.4.0",Wl="7.23.0",Xl="1.11.0",Jl="1.1.2",Yl="1.1.0",Ql="0.4.8",ec="0.4.8",nc="1.11.0",tc="0.1.1",rc="0.15.18",oc="0.1.6",sc="1.11.0",ic="0.5.0",ac="0.2.7",lc="0.3.14",cc="1.73.0",uc="1.26.0",fc="1.3.1",dc="0.1.10",_c="0.1.13",vc="0.2.6",mc="0.3.1",gc="1.0.0",pc="4.18.1",hc="1.1.1+0",bc="0.1.2",yc="0.2.3",wc="0.1.2",Ec="1.6.0",Dc="0.3.1",xc="4.1.1",Rc="1.16.0",Mc="0.19.3",Tc="1.0.0",Fc="1.11.0",Sc="0.1.2",Nc="5.69.0",kc="1.9.1",Ac="0.4.0",Cc="6.210.1",Oc="4.12.0",Ic="5.27.0",Lc="1.1.0",Pc="1.15.1",zc="0.7.16",qc="0.4.28",Vc="0.10.12",Bc="1.11.0",jc="0.25.123",$c="0.6.58",Uc="0.9.5",Hc="1.6.0",Gc="0.40.14",Kc="2.0.0",Zc="1.0.7",Wc="0.13.131",Xc="0.8.18",Jc="0.0.251+0",Yc="1.30.0",Qc="0.1.10",eu="1.1.4",nu="0.10.14",tu="0.3.1",ru="0.3.5",ou="0.3.2",su="1.1.0",iu="1.3.1",au="1.11.0",lu="1.16.0",cu="2.29.0",uu="0.12.33",fu="1.3.2",du="0.1.2",_u="1.1.3",vu="0.1.3",mu="0.5.2",gu="1.11.0",pu="0.2.0",hu="1.8.2",bu="0.5.6",yu="1.14.0",wu="0.2.0",Eu="0.3.28",Du="0.4.15",xu="0.1.1",Ru="0.1.5",Mu="0.3.1",Tu="0.1.3",Fu="2025.2.0+0",Su="1.11.0",Nu="0.16.2",ku="0.7.13",Au="0.1.17",Cu="0.2.6",Ou="1.10.0",Iu="1.0.0",Lu="1.7.1",Pu="0.2.1",zu="0.9.40",qu="0.6.11",Vu="0.10.67",Bu="0.10.6",ju="9.4.6",$u="0.0.38+0",Uu="1.4.0",Hu="0.1.17",Gu="1.11.0",Ku="0.2.1",Zu="0.6.4",Wu="8.6.0+0",Xu="1.11.0",Ju="1.7.2+0",Yu="1.11.0+1",Qu="0.13.1+0",ef="1.11.0",nf="0.9.14",tf="0.1.6",rf="7.6.0",of="1.11.0",sf="3.65.0",af="2.2.0",lf="1.13.1",cf="0.3.29",uf="1.11.0",ff="1.2.0",df="1.31.3",_f="1.5.3",vf="1.15.4",mf="7.7.0",gf="0.3.16",pf="2025.2.0+0",hf="1.17.4",bf="1.12.1",yf="0.5.16",wf="0.1.8",Ef="0.4.3",Df="1.11.0",xf="0.1.4",Rf="2.28.6+0",Mf="0.2.0",Tf="1.2.0",Ff="2.1.0",Sf="1.11.0",Nf="0.5.22",kf="0.3.7",Af="2023.12.12",Cf="0.2.4",Of="8.0.0",If="0.9.33",Lf="1.1.3",Pf="1.0.0",zf="1.2.0",qf="4.16.0",Vf="2.15.0",Bf="2.0.0",jf="1.12.0",$f="1.6.0",Uf="0.5.0",Hf="1.17.0",Gf="0.3.27+1",Kf="0.8.5+0",Zf="0.5.6+0",Wf="2.0.1",Xf="0.4.7",Jf="5.5.0",Yf="5.1.0",Qf="0.4.11",ed="1.8.1",nd="6.108.0",td="1.9.0",rd="1.22.0",od="3.18.0",sd="1.13.0",id="2.2.1",ad="1.9.0",ld="1.13.0",cd="1.16.0",ud="1.23.0",fd="1.8.0",dd="1.9.0",_d="1.9.0",vd="1.12.0",md="1.10.0",gd="1.10.0",pd="1.12.0",hd="1.23.0",bd="1.9.0",yd="1.11.0",wd="1.8.0",Ed="1.8.0",Dd="1.10.0",xd="1.25.0",Rd="1.12.0",Md="1.11.0",Td="1.11.0",Fd="1.8.0",Sd="1.11.0",Nd="1.9.0",kd="1.11.0",Ad="0.11.37",Cd="2.8.3",Od="1.11.0",Id="0.4.7",Ld="0.7.19",Pd="0.2.2",zd="0.2.4",qd="1.1.2",Vd="1.2.1",Bd="1.5.2",jd="3.2.3",$d="0.5.7",Ud="1.11.0",Hd="0.1.6",Gd="1.11.0",Kd="1.4.0",Zd="2.11.2",Wd="1.11.0",Xd="1.11.0",Jd="1.7.1",Yd="1.6.0",Qd="0.3.2",e1="0.4.5",n1="0.1.17",t1="0.1.0",r1="1.3.4",o1="3.48.0",s1="1.2.2",i1="1.3.1",a1="1.2.0",l1="1.16.2",c1="1.4.2",u1="0.9.0",f1="0.5.1+0",d1="2.2.13",_1="0.5.17",v1="0.7.0",m1="0.1.0",g1="0.6.1",p1="2.149.0",h1="0.1.12",b1="1.9.1",y1="1.15.1",w1="1.0.1",E1="7.99.0",D1="1.10.0",x1="3.1.0",R1="1.6.0",M1="1.3.0",T1="1.11.0",F1="1.1.2",S1="1.11.0",N1="2.11.0",k1="0.9.5",A1="1.11.0",C1="1.2.2",O1="1.11.0",I1="1.2.1",L1="0.1.2",P1="0.4.24",z1="2.7.1",q1="0.1.15",V1="1.3.1",B1="1.9.0",j1="1.9.18",$1="1.4.4",U1="3.5.0",H1="1.11.1",G1="1.8.0",K1="0.34.10",Z1="1.5.2",W1="0.5.8",X1="0.4.4",J1="0.7.2",Y1="0.3.1",Q1="2.6.3",e0="1.11.0",n0=null,t0="7.7.0+0",r0="0.3.46",o0="1.0.3",s0="1.0.1",i0="1.12.1",a0="1.10.0",l0="0.1.1",c0="0.1.7",u0="1.11.0",f0="0.5.5",d0="0.5.29",_0="0.2.38",v0="0.1.6",m0="0.4.85",g0="1.4.0",p0="0.43.2",h0="1.11.0",b0="1.11.0",y0="0.3.0",w0="1.3.1",E0="1.1.0",D0="1.2.13+1",x0="0.7.10",R0="0.2.7",M0="5.11.0+0",T0="1.59.0+0",F0="2022.0.0+1",S0="17.4.0+2",N0={ADTypes:Cl,AbstractFFTs:Ol,AbstractGPs:Il,AbstractMCMC:Ll,AbstractPPL:Pl,AbstractTrees:zl,Accessors:ql,Adapt:Vl,AdvancedHMC:Bl,AdvancedMH:jl,AdvancedPS:$l,AdvancedVI:Ul,AliasTables:Hl,ArgCheck:Gl,ArgTools:Kl,ArnoldiMethod:Zl,ArrayInterface:Wl,Artifacts:Xl,Atomix:Jl,AxisAlgorithms:Yl,AxisArrays:Ql,BangBang:ec,Base64:nc,Baselet:tc,Bijectors:rc,BitTwiddlingConvenienceFunctions:oc,BracketingNonlinearSolve:sc,CEnum:ic,CPUSummary:ac,Cassette:lc,ChainRules:cc,ChainRulesCore:uc,Chairmarks:fc,ChangesOfVariables:dc,CloseOpenIntervals:_c,CommonSolve:vc,CommonSubexpressions:mc,CommonWorldInvalidations:gc,Compat:pc,CompilerSupportLibraries_jll:hc,CompositionsBase:bc,ConcreteStructs:yc,ConsoleProgressMonitor:wc,ConstructionBase:Ec,CpuId:Dc,Crayons:xc,DataAPI:Rc,DataStructures:Mc,DataValueInterfaces:Tc,Dates:Fc,DefineSingletons:Sc,DelayDiffEq:Nc,DelimitedFiles:kc,DensityInterface:Ac,DiffEqBase:Cc,DiffEqCallbacks:Oc,DiffEqNoiseProcess:Ic,DiffResults:Lc,DiffRules:Pc,DifferentiationInterface:zc,DispatchDoctor:qc,Distances:Vc,Distributed:Bc,Distributions:jc,DistributionsAD:$c,DocStringExtensions:Uc,Downloads:Hc,DynamicPPL:Gc,EllipticalSliceSampling:Kc,EnumX:Zc,Enzyme:Wc,EnzymeCore:Xc,Enzyme_jll:Jc,ExponentialUtilities:Yc,ExprTools:Qc,ExpressionExplorer:eu,ExproniconLite:nu,FFTA:tu,FastBroadcast:ru,FastClosures:ou,FastGaussQuadrature:su,FastPower:iu,FileWatching:au,FillArrays:lu,FiniteDiff:cu,FiniteDifferences:uu,ForwardDiff:fu,FunctionProperties:du,FunctionWrappers:_u,FunctionWrappersWrappers:vu,Functors:mu,Future:gu,GPUArraysCore:pu,GPUCompiler:hu,GenericSchur:bu,Graphs:yu,HashArrayMappedTries:wu,HypergeometricFunctions:Eu,IRTools:Du,IfElse:xu,Inflate:Ru,InitialValues:Mu,IntegerMathUtils:Tu,IntelOpenMP_jll:Fu,InteractiveUtils:Su,Interpolations:Nu,IntervalSets:ku,InverseFunctions:Au,IrrationalConstants:Cu,IterTools:Ou,IteratorInterfaceExtensions:Iu,JLLWrappers:Lu,JSON:"1.4.0",Jieko:Pu,KernelAbstractions:zu,KernelDensity:qu,KernelFunctions:Vu,Krylov:Bu,LLVM:ju,LLVMExtra_jll:$u,LaTeXStrings:Uu,LayoutPointers:Hu,LazyArtifacts:Gu,LeftChildRightSiblingTrees:Ku,LibCURL:Zu,LibCURL_jll:Wu,LibGit2:Xu,LibGit2_jll:Ju,LibSSH2_jll:Yu,LibTracyClient_jll:Qu,Libdl:ef,Libtask:nf,LineSearch:tf,LineSearches:rf,LinearAlgebra:of,LinearSolve:sf,LogDensityProblems:af,LogDensityProblemsAD:lf,LogExpFunctions:cf,Logging:uf,LoggingExtras:ff,Lux:df,LuxCore:_f,LuxLib:vf,MCMCChains:mf,MCMCDiagnosticTools:gf,MKL_jll:pf,MLDataDevices:hf,MLJModelInterface:bf,MacroTools:yf,ManualMemory:wf,MappedArrays:Ef,Markdown:Df,MaybeInplace:xf,MbedTLS_jll:Rf,MicroCollections:Mf,Missings:Tf,MistyClosures:Ff,Mmap:Sf,Mooncake:Nf,Moshi:kf,MozillaCACerts_jll:Af,MuladdMacro:Cf,NLSolversBase:Of,NNlib:If,NaNMath:Lf,NaturalSort:Pf,NetworkOptions:zf,NonlinearSolve:qf,NonlinearSolveBase:Vf,NonlinearSolveFirstOrder:Bf,NonlinearSolveQuasiNewton:jf,NonlinearSolveSpectralMethods:$f,ObjectFile:Uf,OffsetArrays:Hf,OpenBLAS_jll:Gf,OpenLibm_jll:Kf,OpenSpecFun_jll:Zf,Optim:Wf,Optimisers:Xf,Optimization:Jf,OptimizationBase:Yf,OptimizationOptimJL:Qf,OrderedCollections:ed,OrdinaryDiffEq:nd,OrdinaryDiffEqAdamsBashforthMoulton:td,OrdinaryDiffEqBDF:rd,OrdinaryDiffEqCore:od,OrdinaryDiffEqDefault:sd,OrdinaryDiffEqDifferentiation:id,OrdinaryDiffEqExplicitRK:ad,OrdinaryDiffEqExponentialRK:ld,OrdinaryDiffEqExtrapolation:cd,OrdinaryDiffEqFIRK:ud,OrdinaryDiffEqFeagin:fd,OrdinaryDiffEqFunctionMap:dd,OrdinaryDiffEqHighOrderRK:_d,OrdinaryDiffEqIMEXMultistep:vd,OrdinaryDiffEqLinear:md,OrdinaryDiffEqLowOrderRK:gd,OrdinaryDiffEqLowStorageRK:pd,OrdinaryDiffEqNonlinearSolve:hd,OrdinaryDiffEqNordsieck:bd,OrdinaryDiffEqPDIRK:yd,OrdinaryDiffEqPRK:wd,OrdinaryDiffEqQPRK:Ed,OrdinaryDiffEqRKN:Dd,OrdinaryDiffEqRosenbrock:xd,OrdinaryDiffEqSDIRK:Rd,OrdinaryDiffEqSSPRK:Md,OrdinaryDiffEqStabilizedIRK:Td,OrdinaryDiffEqStabilizedRK:Fd,OrdinaryDiffEqSymplecticRK:Sd,OrdinaryDiffEqTsit5:Nd,OrdinaryDiffEqVerner:kd,PDMats:Ad,Parsers:Cd,Pkg:Od,PoissonRandom:Id,Polyester:Ld,PolyesterWeave:Pd,PositiveFactorizations:zd,PreallocationTools:qd,PrecompileTools:Vd,Preferences:Bd,PrettyTables:jd,Primes:$d,Printf:Ud,ProgressLogging:Hd,ProgressMeter:Gd,PtrArrays:Kd,QuadGK:Zd,REPL:Wd,Random:Xd,Random123:Jd,RandomNumbers:Yd,RangeArrays:Qd,Ratios:e1,ReactantCore:n1,RealDot:t1,RecipesBase:r1,RecursiveArrayTools:o1,Reexport:s1,Requires:i1,ResettableStacks:a1,ReverseDiff:l1,Richardson:c1,Rmath:u1,Rmath_jll:f1,Roots:d1,RuntimeGeneratedFunctions:_1,SHA:v1,SIMDTypes:m1,SSMProblems:g1,SciMLBase:p1,SciMLJacobianOperators:h1,SciMLLogging:b1,SciMLOperators:y1,SciMLPublic:w1,SciMLSensitivity:E1,SciMLStructures:D1,ScientificTypesBase:x1,ScopedValues:R1,Scratch:M1,Serialization:T1,Setfield:F1,SharedArrays:S1,SimpleNonlinearSolve:N1,SimpleTraits:k1,Sockets:A1,SortingAlgorithms:C1,SparseArrays:O1,SparseConnectivityTracer:I1,SparseInverseSubset:L1,SparseMatrixColorings:P1,SpecialFunctions:z1,SplittablesBase:q1,Static:V1,StaticArrayInterface:B1,StaticArrays:j1,StaticArraysCore:$1,StatisticalTraits:U1,Statistics:H1,StatsAPI:G1,StatsBase:K1,StatsFuns:Z1,StrideArraysCore:W1,StringManipulation:X1,StructArrays:J1,StructIO:Y1,StructUtils:Q1,StyledStrings:e0,SuiteSparse:n0,SuiteSparse_jll:t0,SymbolicIndexingInterface:r0,TOML:o0,TableTraits:s0,Tables:i0,Tar:a0,TensorCore:l0,TerminalLoggers:c0,Test:u0,ThreadingUtilities:f0,TimerOutputs:d0,Tracker:_0,Tracy:v0,Transducers:m0,TruncatedStacktraces:g0,Turing:p0,UUIDs:h0,Unicode:b0,UnsafeAtomics:y0,WeightInitializers:w0,WoodburyMatrices:E0,Zlib_jll:D0,Zygote:x0,ZygoteRules:R0,libblastrampoline_jll:M0,nghttp2_jll:T0,oneTBB_jll:F0,p7zip_jll:S0};function Lt(e){return[...e.entries()].sort(([n,t],[r,o])=>n.localeCompare(r))}var k0=ue('<tr><td class="svelte-yinbl0"> </td><td class="version svelte-yinbl0"> </td></tr>'),A0=ue('<table class="svelte-yinbl0"><thead><tr><th class="svelte-yinbl0">Package</th><th class="svelte-yinbl0">Version</th></tr></thead><tbody></tbody></table>');function C0(e,n){_n(n,!1);let t=new Map;for(const[s,a]of Object.entries(N0))t.set(s,a===""?null:a);vo();var r=A0(),o=se(q(r));Mn(o,5,()=>Lt(t),Rn,(s,a,c)=>{let l=()=>E(a)[0],u=()=>E(a)[1];var v=k0();Sn(v,1,"svelte-yinbl0",null,{},{alt:c%2===1});var _=q(v),f=q(_),h=se(_),b=q(h);he(()=>{qe(f,l()),qe(b,u()===null?"":`v${u()}`)}),G(s,v)}),G(e,r),vn()}var O0=ue('<td class="model-name svelte-73y89f"> </td>');function I0(e,n){var t=O0();t.__click=function(...o){var s;(s=n.onToggle)==null||s.apply(this,o)};var r=q(t);he(()=>qe(r,n.name)),G(e,t)}ft(["click"]);function L0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tt,Fr;function P0(){if(Fr)return Tt;Fr=1;function e(i){return i instanceof Map?i.clear=i.delete=i.set=function(){throw new Error("map is read-only")}:i instanceof Set&&(i.add=i.clear=i.delete=function(){throw new Error("set is read-only")}),Object.freeze(i),Object.getOwnPropertyNames(i).forEach(d=>{const p=i[d],A=typeof p;(A==="object"||A==="function")&&!Object.isFrozen(p)&&e(p)}),i}class n{constructor(d){d.data===void 0&&(d.data={}),this.data=d.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(i,...d){const p=Object.create(null);for(const A in i)p[A]=i[A];return d.forEach(function(A){for(const W in A)p[W]=A[W]}),p}const o="</span>",s=i=>!!i.scope,a=(i,{prefix:d})=>{if(i.startsWith("language:"))return i.replace("language:","language-");if(i.includes(".")){const p=i.split(".");return[`${d}${p.shift()}`,...p.map((A,W)=>`${A}${"_".repeat(W+1)}`)].join(" ")}return`${d}${i}`};class c{constructor(d,p){this.buffer="",this.classPrefix=p.classPrefix,d.walk(this)}addText(d){this.buffer+=t(d)}openNode(d){if(!s(d))return;const p=a(d.scope,{prefix:this.classPrefix});this.span(p)}closeNode(d){s(d)&&(this.buffer+=o)}value(){return this.buffer}span(d){this.buffer+=`<span class="${d}">`}}const l=(i={})=>{const d={children:[]};return Object.assign(d,i),d};class u{constructor(){this.rootNode=l(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(d){this.top.children.push(d)}openNode(d){const p=l({scope:d});this.add(p),this.stack.push(p)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(d){return this.constructor._walk(d,this.rootNode)}static _walk(d,p){return typeof p=="string"?d.addText(p):p.children&&(d.openNode(p),p.children.forEach(A=>this._walk(d,A)),d.closeNode(p)),d}static _collapse(d){typeof d!="string"&&d.children&&(d.children.every(p=>typeof p=="string")?d.children=[d.children.join("")]:d.children.forEach(p=>{u._collapse(p)}))}}class v extends u{constructor(d){super(),this.options=d}addText(d){d!==""&&this.add(d)}startScope(d){this.openNode(d)}endScope(){this.closeNode()}__addSublanguage(d,p){const A=d.root;p&&(A.scope=`language:${p}`),this.add(A)}toHTML(){return new c(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(i){return i?typeof i=="string"?i:i.source:null}function f(i){return N("(?=",i,")")}function h(i){return N("(?:",i,")*")}function b(i){return N("(?:",i,")?")}function N(...i){return i.map(p=>_(p)).join("")}function F(i){const d=i[i.length-1];return typeof d=="object"&&d.constructor===Object?(i.splice(i.length-1,1),d):{}}function L(...i){return"("+(F(i).capture?"":"?:")+i.map(A=>_(A)).join("|")+")"}function V(i){return new RegExp(i.toString()+"|").exec("").length-1}function x(i,d){const p=i&&i.exec(d);return p&&p.index===0}const g=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function y(i,{joinWith:d}){let p=0;return i.map(A=>{p+=1;const W=p;let X=_(A),R="";for(;X.length>0;){const D=g.exec(X);if(!D){R+=X;break}R+=X.substring(0,D.index),X=X.substring(D.index+D[0].length),D[0][0]==="\\"&&D[1]?R+="\\"+String(Number(D[1])+W):(R+=D[0],D[0]==="("&&p++)}return R}).map(A=>`(${A})`).join(d)}const z=/\b\B/,M="[a-zA-Z]\\w*",O="[a-zA-Z_]\\w*",Z="\\b\\d+(\\.\\d+)?",fe="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ee="\\b(0b[01]+)",ne="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",de=(i={})=>{const d=/^#![ ]*\//;return i.binary&&(i.begin=N(d,/.*\b/,i.binary,/\b.*/)),r({scope:"meta",begin:d,end:/$/,relevance:0,"on:begin":(p,A)=>{p.index!==0&&A.ignoreMatch()}},i)},ye={begin:"\\\\[\\s\\S]",relevance:0},Me={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ye]},ve={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ye]},Te={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},De=function(i,d,p={}){const A=r({scope:"comment",begin:i,end:d,contains:[]},p);A.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const W=L("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return A.contains.push({begin:N(/[ ]+/,"(",W,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),A},pn=De("//","$"),Fe=De("/\\*","\\*/"),ie=De("#","$"),Se={scope:"number",begin:Z,relevance:0},hn={scope:"number",begin:fe,relevance:0},nn={scope:"number",begin:ee,relevance:0},_t={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ye,{begin:/\[/,end:/\]/,relevance:0,contains:[ye]}]},bn={scope:"title",begin:M,relevance:0},Cn={scope:"title",begin:O,relevance:0},vt={begin:"\\.\\s*"+O,relevance:0};var On=Object.freeze({__proto__:null,APOS_STRING_MODE:Me,BACKSLASH_ESCAPE:ye,BINARY_NUMBER_MODE:nn,BINARY_NUMBER_RE:ee,COMMENT:De,C_BLOCK_COMMENT_MODE:Fe,C_LINE_COMMENT_MODE:pn,C_NUMBER_MODE:hn,C_NUMBER_RE:fe,END_SAME_AS_BEGIN:function(i){return Object.assign(i,{"on:begin":(d,p)=>{p.data._beginMatch=d[1]},"on:end":(d,p)=>{p.data._beginMatch!==d[1]&&p.ignoreMatch()}})},HASH_COMMENT_MODE:ie,IDENT_RE:M,MATCH_NOTHING_RE:z,METHOD_GUARD:vt,NUMBER_MODE:Se,NUMBER_RE:Z,PHRASAL_WORDS_MODE:Te,QUOTE_STRING_MODE:ve,REGEXP_MODE:_t,RE_STARTERS_RE:ne,SHEBANG:de,TITLE_MODE:bn,UNDERSCORE_IDENT_RE:O,UNDERSCORE_TITLE_MODE:Cn});function ho(i,d){i.input[i.index-1]==="."&&d.ignoreMatch()}function bo(i,d){i.className!==void 0&&(i.scope=i.className,delete i.className)}function yo(i,d){d&&i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",i.__beforeBegin=ho,i.keywords=i.keywords||i.beginKeywords,delete i.beginKeywords,i.relevance===void 0&&(i.relevance=0))}function wo(i,d){Array.isArray(i.illegal)&&(i.illegal=L(...i.illegal))}function Eo(i,d){if(i.match){if(i.begin||i.end)throw new Error("begin & end are not supported with match");i.begin=i.match,delete i.match}}function Do(i,d){i.relevance===void 0&&(i.relevance=1)}const xo=(i,d)=>{if(!i.beforeMatch)return;if(i.starts)throw new Error("beforeMatch cannot be used with starts");const p=Object.assign({},i);Object.keys(i).forEach(A=>{delete i[A]}),i.keywords=p.keywords,i.begin=N(p.beforeMatch,f(p.begin)),i.starts={relevance:0,contains:[Object.assign(p,{endsParent:!0})]},i.relevance=0,delete p.beforeMatch},Ro=["of","and","for","in","not","or","if","then","parent","list","value"],Mo="keyword";function Jt(i,d,p=Mo){const A=Object.create(null);return typeof i=="string"?W(p,i.split(" ")):Array.isArray(i)?W(p,i):Object.keys(i).forEach(function(X){Object.assign(A,Jt(i[X],d,X))}),A;function W(X,R){d&&(R=R.map(D=>D.toLowerCase())),R.forEach(function(D){const k=D.split("|");A[k[0]]=[X,To(k[0],k[1])]})}}function To(i,d){return d?Number(d):Fo(i)?0:1}function Fo(i){return Ro.includes(i.toLowerCase())}const Yt={},Je=i=>{console.error(i)},Qt=(i,...d)=>{console.log(`WARN: ${i}`,...d)},tn=(i,d)=>{Yt[`${i}/${d}`]||(console.log(`Deprecated as of ${i}. ${d}`),Yt[`${i}/${d}`]=!0)},In=new Error;function er(i,d,{key:p}){let A=0;const W=i[p],X={},R={};for(let D=1;D<=d.length;D++)R[D+A]=W[D],X[D+A]=!0,A+=V(d[D-1]);i[p]=R,i[p]._emit=X,i[p]._multi=!0}function So(i){if(Array.isArray(i.begin)){if(i.skip||i.excludeBegin||i.returnBegin)throw Je("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),In;if(typeof i.beginScope!="object"||i.beginScope===null)throw Je("beginScope must be object"),In;er(i,i.begin,{key:"beginScope"}),i.begin=y(i.begin,{joinWith:""})}}function No(i){if(Array.isArray(i.end)){if(i.skip||i.excludeEnd||i.returnEnd)throw Je("skip, excludeEnd, returnEnd not compatible with endScope: {}"),In;if(typeof i.endScope!="object"||i.endScope===null)throw Je("endScope must be object"),In;er(i,i.end,{key:"endScope"}),i.end=y(i.end,{joinWith:""})}}function ko(i){i.scope&&typeof i.scope=="object"&&i.scope!==null&&(i.beginScope=i.scope,delete i.scope)}function Ao(i){ko(i),typeof i.beginScope=="string"&&(i.beginScope={_wrap:i.beginScope}),typeof i.endScope=="string"&&(i.endScope={_wrap:i.endScope}),So(i),No(i)}function Co(i){function d(R,D){return new RegExp(_(R),"m"+(i.case_insensitive?"i":"")+(i.unicodeRegex?"u":"")+(D?"g":""))}class p{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(D,k){k.position=this.position++,this.matchIndexes[this.matchAt]=k,this.regexes.push([k,D]),this.matchAt+=V(D)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const D=this.regexes.map(k=>k[1]);this.matcherRe=d(y(D,{joinWith:"|"}),!0),this.lastIndex=0}exec(D){this.matcherRe.lastIndex=this.lastIndex;const k=this.matcherRe.exec(D);if(!k)return null;const te=k.findIndex((yn,gt)=>gt>0&&yn!==void 0),J=this.matchIndexes[te];return k.splice(0,te),Object.assign(k,J)}}class A{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(D){if(this.multiRegexes[D])return this.multiRegexes[D];const k=new p;return this.rules.slice(D).forEach(([te,J])=>k.addRule(te,J)),k.compile(),this.multiRegexes[D]=k,k}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(D,k){this.rules.push([D,k]),k.type==="begin"&&this.count++}exec(D){const k=this.getMatcher(this.regexIndex);k.lastIndex=this.lastIndex;let te=k.exec(D);if(this.resumingScanAtSamePosition()&&!(te&&te.index===this.lastIndex)){const J=this.getMatcher(0);J.lastIndex=this.lastIndex+1,te=J.exec(D)}return te&&(this.regexIndex+=te.position+1,this.regexIndex===this.count&&this.considerAll()),te}}function W(R){const D=new A;return R.contains.forEach(k=>D.addRule(k.begin,{rule:k,type:"begin"})),R.terminatorEnd&&D.addRule(R.terminatorEnd,{type:"end"}),R.illegal&&D.addRule(R.illegal,{type:"illegal"}),D}function X(R,D){const k=R;if(R.isCompiled)return k;[bo,Eo,Ao,xo].forEach(J=>J(R,D)),i.compilerExtensions.forEach(J=>J(R,D)),R.__beforeBegin=null,[yo,wo,Do].forEach(J=>J(R,D)),R.isCompiled=!0;let te=null;return typeof R.keywords=="object"&&R.keywords.$pattern&&(R.keywords=Object.assign({},R.keywords),te=R.keywords.$pattern,delete R.keywords.$pattern),te=te||/\w+/,R.keywords&&(R.keywords=Jt(R.keywords,i.case_insensitive)),k.keywordPatternRe=d(te,!0),D&&(R.begin||(R.begin=/\B|\b/),k.beginRe=d(k.begin),!R.end&&!R.endsWithParent&&(R.end=/\B|\b/),R.end&&(k.endRe=d(k.end)),k.terminatorEnd=_(k.end)||"",R.endsWithParent&&D.terminatorEnd&&(k.terminatorEnd+=(R.end?"|":"")+D.terminatorEnd)),R.illegal&&(k.illegalRe=d(R.illegal)),R.contains||(R.contains=[]),R.contains=[].concat(...R.contains.map(function(J){return Oo(J==="self"?R:J)})),R.contains.forEach(function(J){X(J,k)}),R.starts&&X(R.starts,D),k.matcher=W(k),k}if(i.compilerExtensions||(i.compilerExtensions=[]),i.contains&&i.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return i.classNameAliases=r(i.classNameAliases||{}),X(i)}function nr(i){return i?i.endsWithParent||nr(i.starts):!1}function Oo(i){return i.variants&&!i.cachedVariants&&(i.cachedVariants=i.variants.map(function(d){return r(i,{variants:null},d)})),i.cachedVariants?i.cachedVariants:nr(i)?r(i,{starts:i.starts?r(i.starts):null}):Object.isFrozen(i)?r(i):i}var Io="11.11.1";class Lo extends Error{constructor(d,p){super(d),this.name="HTMLInjectionError",this.html=p}}const mt=t,tr=r,rr=Symbol("nomatch"),Po=7,or=function(i){const d=Object.create(null),p=Object.create(null),A=[];let W=!0;const X="Could not find the language '{}', did you forget to load/include a language module?",R={disableAutodetect:!0,name:"Plain text",contains:[]};let D={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:v};function k(m){return D.noHighlightRe.test(m)}function te(m){let S=m.className+" ";S+=m.parentNode?m.parentNode.className:"";const P=D.languageDetectRe.exec(S);if(P){const U=je(P[1]);return U||(Qt(X.replace("{}",P[1])),Qt("Falling back to no-highlight mode for this block.",m)),U?P[1]:"no-highlight"}return S.split(/\s+/).find(U=>k(U)||je(U))}function J(m,S,P){let U="",Q="";typeof S=="object"?(U=m,P=S.ignoreIllegals,Q=S.language):(tn("10.7.0","highlight(lang, code, ...args) has been deprecated."),tn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),Q=m,U=S),P===void 0&&(P=!0);const xe={code:U,language:Q};Pn("before:highlight",xe);const $e=xe.result?xe.result:yn(xe.language,xe.code,P);return $e.code=xe.code,Pn("after:highlight",$e),$e}function yn(m,S,P,U){const Q=Object.create(null);function xe(w,T){return w.keywords[T]}function $e(){if(!C.keywords){re.addText(H);return}let w=0;C.keywordPatternRe.lastIndex=0;let T=C.keywordPatternRe.exec(H),I="";for(;T;){I+=H.substring(w,T.index);const B=ke.case_insensitive?T[0].toLowerCase():T[0],oe=xe(C,B);if(oe){const[Le,es]=oe;if(re.addText(I),I="",Q[B]=(Q[B]||0)+1,Q[B]<=Po&&(Vn+=es),Le.startsWith("_"))I+=T[0];else{const ns=ke.classNameAliases[Le]||Le;Ne(T[0],ns)}}else I+=T[0];w=C.keywordPatternRe.lastIndex,T=C.keywordPatternRe.exec(H)}I+=H.substring(w),re.addText(I)}function zn(){if(H==="")return;let w=null;if(typeof C.subLanguage=="string"){if(!d[C.subLanguage]){re.addText(H);return}w=yn(C.subLanguage,H,!0,dr[C.subLanguage]),dr[C.subLanguage]=w._top}else w=pt(H,C.subLanguage.length?C.subLanguage:null);C.relevance>0&&(Vn+=w.relevance),re.__addSublanguage(w._emitter,w.language)}function me(){C.subLanguage!=null?zn():$e(),H=""}function Ne(w,T){w!==""&&(re.startScope(T),re.addText(w),re.endScope())}function lr(w,T){let I=1;const B=T.length-1;for(;I<=B;){if(!w._emit[I]){I++;continue}const oe=ke.classNameAliases[w[I]]||w[I],Le=T[I];oe?Ne(Le,oe):(H=Le,$e(),H=""),I++}}function cr(w,T){return w.scope&&typeof w.scope=="string"&&re.openNode(ke.classNameAliases[w.scope]||w.scope),w.beginScope&&(w.beginScope._wrap?(Ne(H,ke.classNameAliases[w.beginScope._wrap]||w.beginScope._wrap),H=""):w.beginScope._multi&&(lr(w.beginScope,T),H="")),C=Object.create(w,{parent:{value:C}}),C}function ur(w,T,I){let B=x(w.endRe,I);if(B){if(w["on:end"]){const oe=new n(w);w["on:end"](T,oe),oe.isMatchIgnored&&(B=!1)}if(B){for(;w.endsParent&&w.parent;)w=w.parent;return w}}if(w.endsWithParent)return ur(w.parent,T,I)}function Wo(w){return C.matcher.regexIndex===0?(H+=w[0],1):(wt=!0,0)}function Xo(w){const T=w[0],I=w.rule,B=new n(I),oe=[I.__beforeBegin,I["on:begin"]];for(const Le of oe)if(Le&&(Le(w,B),B.isMatchIgnored))return Wo(T);return I.skip?H+=T:(I.excludeBegin&&(H+=T),me(),!I.returnBegin&&!I.excludeBegin&&(H=T)),cr(I,w),I.returnBegin?0:T.length}function Jo(w){const T=w[0],I=S.substring(w.index),B=ur(C,w,I);if(!B)return rr;const oe=C;C.endScope&&C.endScope._wrap?(me(),Ne(T,C.endScope._wrap)):C.endScope&&C.endScope._multi?(me(),lr(C.endScope,w)):oe.skip?H+=T:(oe.returnEnd||oe.excludeEnd||(H+=T),me(),oe.excludeEnd&&(H=T));do C.scope&&re.closeNode(),!C.skip&&!C.subLanguage&&(Vn+=C.relevance),C=C.parent;while(C!==B.parent);return B.starts&&cr(B.starts,w),oe.returnEnd?0:T.length}function Yo(){const w=[];for(let T=C;T!==ke;T=T.parent)T.scope&&w.unshift(T.scope);w.forEach(T=>re.openNode(T))}let qn={};function fr(w,T){const I=T&&T[0];if(H+=w,I==null)return me(),0;if(qn.type==="begin"&&T.type==="end"&&qn.index===T.index&&I===""){if(H+=S.slice(T.index,T.index+1),!W){const B=new Error(`0 width match regex (${m})`);throw B.languageName=m,B.badRule=qn.rule,B}return 1}if(qn=T,T.type==="begin")return Xo(T);if(T.type==="illegal"&&!P){const B=new Error('Illegal lexeme "'+I+'" for mode "'+(C.scope||"<unnamed>")+'"');throw B.mode=C,B}else if(T.type==="end"){const B=Jo(T);if(B!==rr)return B}if(T.type==="illegal"&&I==="")return H+=`
`,1;if(yt>1e5&&yt>T.index*3)throw new Error("potential infinite loop, way more iterations than matches");return H+=I,I.length}const ke=je(m);if(!ke)throw Je(X.replace("{}",m)),new Error('Unknown language: "'+m+'"');const Qo=Co(ke);let bt="",C=U||Qo;const dr={},re=new D.__emitter(D);Yo();let H="",Vn=0,Ye=0,yt=0,wt=!1;try{if(ke.__emitTokens)ke.__emitTokens(S,re);else{for(C.matcher.considerAll();;){yt++,wt?wt=!1:C.matcher.considerAll(),C.matcher.lastIndex=Ye;const w=C.matcher.exec(S);if(!w)break;const T=S.substring(Ye,w.index),I=fr(T,w);Ye=w.index+I}fr(S.substring(Ye))}return re.finalize(),bt=re.toHTML(),{language:m,value:bt,relevance:Vn,illegal:!1,_emitter:re,_top:C}}catch(w){if(w.message&&w.message.includes("Illegal"))return{language:m,value:mt(S),illegal:!0,relevance:0,_illegalBy:{message:w.message,index:Ye,context:S.slice(Ye-100,Ye+100),mode:w.mode,resultSoFar:bt},_emitter:re};if(W)return{language:m,value:mt(S),illegal:!1,relevance:0,errorRaised:w,_emitter:re,_top:C};throw w}}function gt(m){const S={value:mt(m),illegal:!1,relevance:0,_top:R,_emitter:new D.__emitter(D)};return S._emitter.addText(m),S}function pt(m,S){S=S||D.languages||Object.keys(d);const P=gt(m),U=S.filter(je).filter(ar).map(me=>yn(me,m,!1));U.unshift(P);const Q=U.sort((me,Ne)=>{if(me.relevance!==Ne.relevance)return Ne.relevance-me.relevance;if(me.language&&Ne.language){if(je(me.language).supersetOf===Ne.language)return 1;if(je(Ne.language).supersetOf===me.language)return-1}return 0}),[xe,$e]=Q,zn=xe;return zn.secondBest=$e,zn}function zo(m,S,P){const U=S&&p[S]||P;m.classList.add("hljs"),m.classList.add(`language-${U}`)}function ht(m){let S=null;const P=te(m);if(k(P))return;if(Pn("before:highlightElement",{el:m,language:P}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(D.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),D.throwUnescapedHTML))throw new Lo("One of your code blocks includes unescaped HTML.",m.innerHTML);S=m;const U=S.textContent,Q=P?J(U,{language:P,ignoreIllegals:!0}):pt(U);m.innerHTML=Q.value,m.dataset.highlighted="yes",zo(m,P,Q.language),m.result={language:Q.language,re:Q.relevance,relevance:Q.relevance},Q.secondBest&&(m.secondBest={language:Q.secondBest.language,relevance:Q.secondBest.relevance}),Pn("after:highlightElement",{el:m,result:Q,text:U})}function qo(m){D=tr(D,m)}const Vo=()=>{Ln(),tn("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Bo(){Ln(),tn("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let sr=!1;function Ln(){function m(){Ln()}if(document.readyState==="loading"){sr||window.addEventListener("DOMContentLoaded",m,!1),sr=!0;return}document.querySelectorAll(D.cssSelector).forEach(ht)}function jo(m,S){let P=null;try{P=S(i)}catch(U){if(Je("Language definition for '{}' could not be registered.".replace("{}",m)),W)Je(U);else throw U;P=R}P.name||(P.name=m),d[m]=P,P.rawDefinition=S.bind(null,i),P.aliases&&ir(P.aliases,{languageName:m})}function $o(m){delete d[m];for(const S of Object.keys(p))p[S]===m&&delete p[S]}function Uo(){return Object.keys(d)}function je(m){return m=(m||"").toLowerCase(),d[m]||d[p[m]]}function ir(m,{languageName:S}){typeof m=="string"&&(m=[m]),m.forEach(P=>{p[P.toLowerCase()]=S})}function ar(m){const S=je(m);return S&&!S.disableAutodetect}function Ho(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=S=>{m["before:highlightBlock"](Object.assign({block:S.el},S))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=S=>{m["after:highlightBlock"](Object.assign({block:S.el},S))})}function Go(m){Ho(m),A.push(m)}function Ko(m){const S=A.indexOf(m);S!==-1&&A.splice(S,1)}function Pn(m,S){const P=m;A.forEach(function(U){U[P]&&U[P](S)})}function Zo(m){return tn("10.7.0","highlightBlock will be removed entirely in v12.0"),tn("10.7.0","Please use highlightElement now."),ht(m)}Object.assign(i,{highlight:J,highlightAuto:pt,highlightAll:Ln,highlightElement:ht,highlightBlock:Zo,configure:qo,initHighlighting:Vo,initHighlightingOnLoad:Bo,registerLanguage:jo,unregisterLanguage:$o,listLanguages:Uo,getLanguage:je,registerAliases:ir,autoDetection:ar,inherit:tr,addPlugin:Go,removePlugin:Ko}),i.debugMode=function(){W=!1},i.safeMode=function(){W=!0},i.versionString=Io,i.regex={concat:N,lookahead:f,either:L,optional:b,anyNumberOfTimes:h};for(const m in On)typeof On[m]=="object"&&e(On[m]);return Object.assign(i,On),i},rn=or({});return rn.newInstance=()=>or({}),Tt=rn,rn.HighlightJS=rn,rn.default=rn,Tt}var z0=P0();const Sr=L0(z0);var q0=ue("<pre><code><!></code></pre>");function V0(e,n){const t=et(n,["children","$$slots","$$events","$$legacy"]),r=et(t,["code","highlighted","languageName","langtag"]);let o=Ke(n,"code",8),s=Ke(n,"highlighted",8),a=Ke(n,"languageName",8,"plaintext"),c=Ke(n,"langtag",8,!1);var l=q0();let u;var v=q(l);Sn(v,1,"",null,{},{hljs:!0});var _=q(v);{var f=b=>{var N=Yn(),F=an(N);pi(F,s),G(b,N)},h=b=>{var N=It();he(()=>qe(N,o())),G(b,N)};Ue(_,b=>{s()?b(f):b(h,!1)})}he(b=>u=xi(l,u,{"data-language":a(),...r,[xn]:b},"svelte-1w9vok"),[()=>({langtag:c()})],Ut),G(e,l)}function B0(e,n){const t=et(n,["children","$$slots","$$events","$$legacy"]),r=et(t,["language","code","langtag"]);_n(n,!1);let o=Ke(n,"language",8),s=Ke(n,"code",8),a=Ke(n,"langtag",8,!1);const c=ki();let l=Ht("");Ai(()=>{E(l)&&c("highlight",{highlighted:E(l)})}),Bs(()=>(At(o()),At(s())),()=>{Sr.registerLanguage(o().name,o().register),Y(l,Sr.highlight(s(),{language:o().name}).value)}),js(),vo();var u=Yn(),v=an(u);hi(v,n,"default",{get highlighted(){return E(l)}},_=>{V0(_,Si(()=>r,{get languageName(){return o().name},get langtag(){return a()},get highlighted(){return E(l)},get code(){return s()}}))}),G(e,u),vn()}function j0(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",s={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},a={keywords:s,illegal:/<\//},c={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},l={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},u={className:"subst",begin:/\$\(/,end:/\)/,keywords:s},v={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,u,v],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},f={className:"string",contains:[e.BACKSLASH_ESCAPE,u,v],begin:"`",end:"`"},h={className:"meta",begin:"@"+n},b={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return a.name="Julia",a.contains=[c,l,_,f,h,b,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],u.contains=a.contains,a}const $0={name:"julia",register:j0};function mo(e){let n,t,r;if(e<.5){const o=e*2;n=Math.round(34+o*166),t=Math.round(197+o*-17),r=Math.round(94+o*-94)}else{const o=(e-.5)*2;n=Math.round(200+o*20),t=Math.round(180-o*180),r=Math.round(0+o*30)}return[n,t,r]}function U0(e,n,t){if(typeof e!="number")return"";const r=[...n.values()].filter(b=>typeof b=="number");if(r.length<2)return"";const o=Math.min(...r),s=Math.max(...r),a=Math.log(Math.max(o,.001)),c=Math.log(Math.max(s,.001));if(c===a)return"";const l=Math.log(Math.max(e,.001)),u=Math.max(0,Math.min(1,(l-a)/(c-a))),[v,_,f]=mo(u);return`background-color: rgba(${v}, ${_}, ${f}, ${t==="dark"?.3:.25})`}function H0(e,n=10){const t=e==="dark"?.5:.4,r=[];for(let o=0;o<=n;o++){const s=o/n,[a,c,l]=mo(s);r.push(`rgba(${a}, ${c}, ${l}, ${t})`)}return r}const G0=[{url:"https://github.com/EnzymeAD/Enzyme.jl/issues/1995",affects:[["assume_mvnormal","EnzymeFwd"],["assume_wishart","EnzymeFwd"]]},{url:"https://github.com/chalk-lab/Mooncake.jl/issues/570",affects:[["multithreaded","MooncakeFwd"],["multithreaded","MooncakeRvs"]]}],K0=[],go=new Map;for(const e of G0)for(const[n,t]of e.affects)go.set(`${n}__${t}`,e.url);const po=new Map;for(const e of K0)for(const[n,t]of e.affects)po.set(`${n}__${t}`,e.value);function Nr(e,n){return go.get(`${e}__${n}`)}function Z0(e,n){return po.get(`${e}__${n}`)}var W0=(e,n,t)=>n(E(t)),X0=ue('<th class="sortable svelte-6nl5bt" title="Click to sort"> <span class="sort-indicator svelte-6nl5bt"><!></span></th>'),J0=ue('<td class="svelte-6nl5bt"> </td>'),Y0=ue('<a class="issue svelte-6nl5bt" target="_blank">(?)</a>'),Q0=ue('<td class="svelte-6nl5bt"><!> <span> </span></td>'),e_=(e,n,t,r)=>n(t.modelDefinitions[r()]),n_=dt('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'),t_=dt('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'),r_=ue('<tr class="definition-row svelte-6nl5bt"><td class="svelte-6nl5bt"><div class="definition-content svelte-6nl5bt"><div class="code-wrapper svelte-6nl5bt"><!></div> <button class="copy-btn svelte-6nl5bt" aria-label="Copy to clipboard" title="Copy code"><!></button></div></td></tr>'),o_=ue("<tr><!><!></tr> <!>",1),s_=ue('<div class="table-scroll svelte-6nl5bt"><table class="svelte-6nl5bt"><thead><tr class="svelte-6nl5bt"><th class="model-col-header svelte-6nl5bt">Model</th><!></tr></thead><tbody></tbody></table></div>');function i_(e,n){_n(n,!0);const t=sn(()=>[...n.data.keys()]),r=sn(()=>n.data.size>0?[...n.data.get(E(t)[0]).keys()]:[]);let o=pe(Pe({column:null,direction:null})),s=pe(null),a=pe(!1);function c(F){navigator.clipboard.writeText(F),Y(a,!0),setTimeout(()=>{Y(a,!1)},2e3)}function l(F){E(o).column!==F?Y(o,{column:F,direction:"asc"},!0):E(o).direction==="asc"?Y(o,{column:F,direction:"desc"},!0):Y(o,{column:null,direction:null},!0)}const u=sn(()=>{const F=Lt(n.data);if(!E(o).column||!E(o).direction)return F;const L=E(o).column,V=E(o).direction;return[...F].sort(([,x],[,g])=>{const y=x.get(L),z=g.get(L),M=typeof y=="number",O=typeof z=="number";return!M&&!O?0:M?O?V==="asc"?y-z:z-y:-1:1})});var v=s_(),_=q(v),f=q(_),h=q(f),b=se(q(h));Mn(b,17,()=>E(r),Rn,(F,L)=>{var V=X0();V.__click=[W0,l,L];var x=q(V),g=se(x),y=q(g);{var z=M=>{var O=Yn(),Z=an(O);{var fe=ne=>{var de=It("▲");G(ne,de)},ee=ne=>{var de=It("▼");G(ne,de)};Ue(Z,ne=>{E(o).direction==="asc"?ne(fe):ne(ee,!1)})}G(M,O)};Ue(y,M=>{E(o).column===E(L)&&M(z)})}he(()=>qe(x,`${E(L)??""} `)),G(F,V)});var N=se(f);Mn(N,21,()=>E(u),Rn,(F,L,V)=>{let x=()=>E(L)[0],g=()=>E(L)[1];var y=o_(),z=an(y);Sn(z,1,"svelte-6nl5bt",null,{},{alt:V%2===1});var M=q(z);I0(M,{get name(){return x()},onToggle:()=>Y(s,E(s)===x()?null:x(),!0)});var O=se(M);Mn(O,17,()=>Lt(g()),Rn,(ee,ne)=>{let de=()=>E(ne)[0],ye=()=>E(ne)[1];var Me=Yn();const ve=sn(()=>Z0(x(),de())??ye());var Te=an(Me);{var De=Fe=>{var ie=J0(),Se=q(ie);he((hn,nn)=>{Xt(ie,hn),qe(Se,nn)},[()=>U0(E(ve),g(),n.theme),()=>E(ve).toFixed(3)]),G(Fe,ie)},pn=Fe=>{var ie=Q0(),Se=q(ie);{var hn=bn=>{var Cn=Y0();he(vt=>Qn(Cn,"href",vt),[()=>Nr(x(),de())]),G(bn,Cn)};Ue(Se,bn=>{Nr(x(),de())&&bn(hn)})}var nn=se(Se,2),_t=q(nn);he(()=>{Sn(nn,1,lo(E(ve)==="NaN"?"nan":E(ve)),"svelte-6nl5bt"),qe(_t,E(ve))}),G(Fe,ie)};Ue(Te,Fe=>{typeof E(ve)=="number"?Fe(De):Fe(pn,!1)})}G(ee,Me)});var Z=se(z,2);{var fe=ee=>{var ne=r_(),de=q(ne),ye=q(de),Me=q(ye),ve=q(Me);B0(ve,{language:$0,get code(){return n.modelDefinitions[x()]}});var Te=se(Me,2);Te.__click=[e_,c,n,x];var De=q(Te);{var pn=ie=>{var Se=n_();G(ie,Se)},Fe=ie=>{var Se=t_();G(ie,Se)};Ue(De,ie=>{E(a)?ie(pn):ie(Fe,!1)})}he(()=>{Qn(de,"colspan",E(r).length+1),Te.disabled=E(a)}),G(ee,ne)};Ue(Z,ee=>{E(s)===x()&&ee(fe)})}G(F,y)}),G(e,v),vn()}ft(["click"]);var a_=ue('<div class="legend svelte-10rqhbc"><div class="gradient-section svelte-10rqhbc"><span class="label svelte-10rqhbc">Faster</span> <div class="gradient-bar svelte-10rqhbc"></div> <span class="label svelte-10rqhbc">Slower</span></div> <div class="divider svelte-10rqhbc"></div> <div class="status-labels svelte-10rqhbc"><span class="status error svelte-10rqhbc">error</span> <span class="status wrong svelte-10rqhbc">wrong</span> <span class="status nan svelte-10rqhbc">NaN</span></div></div>');function l_(e,n){_n(n,!0);const t=sn(()=>()=>`linear-gradient(to right, ${H0(n.theme).join(", ")})`);var r=a_(),o=q(r),s=se(q(o),2);he(a=>Xt(s,`background: ${a??""}`),[()=>E(t)()]),G(e,r),vn()}function c_(e,n){Y(n,E(n)==="light"?"dark":"light",!0),document.documentElement.setAttribute("data-theme",E(n)),localStorage.setItem("theme",E(n))}var u_=dt('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'),f_=dt('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'),d_=ue('<h3 class="category-heading svelte-1wqfdel"> </h3> <!>',1),__=ue('<p class="no-results svelte-1wqfdel"> </p>'),v_=ue(`<div id="main-wrapper" class="svelte-1wqfdel"><main class="svelte-1wqfdel"><div class="header svelte-1wqfdel"><div class="title-area svelte-1wqfdel"><h1 class="svelte-1wqfdel">Turing AD tests</h1> <nav class="nav-links svelte-1wqfdel"><a href="https://turinglang.org/docs" class="svelte-1wqfdel">Turing.jl Docs</a> <a href="https://github.com/TuringLang/Turing.jl" class="svelte-1wqfdel">Turing.jl GitHub</a> <a href="https://github.com/TuringLang/ADTests" class="svelte-1wqfdel">ADTests GitHub</a></nav></div> <button class="theme-toggle svelte-1wqfdel" aria-label="Toggle Dark Mode" title="Toggle theme"><!></button></div> <p class="intro svelte-1wqfdel">A comparison of how different AD backends perform on <a href="https://turinglang.org/docs">Turing.jl</a> models.
            This does not imply any endorsement; for general AD comparisons see <a href="https://github.com/gradbench/gradbench" target="_blank">GradBench</a>.</p> <div class="info-card svelte-1wqfdel"><h4 class="svelte-1wqfdel">Reading the table</h4> <ul class="svelte-1wqfdel"><li class="svelte-1wqfdel">Click model names to see their definitions.</li> <li class="svelte-1wqfdel"><b>Numbers</b> = gradient time / primal time. <b>Smaller is faster.</b></li> <li class="svelte-1wqfdel"><span class="wrong svelte-1wqfdel">wrong</span> = AD ran but gave an incorrect result
                    (compared against FiniteDifferences).</li> <li class="svelte-1wqfdel"><span class="error svelte-1wqfdel">error</span> = AD failed to run.</li> <li class="svelte-1wqfdel"><span class="issue-example svelte-1wqfdel">(?)</span> links to a GitHub issue describing the problem.</li></ul></div> <div class="warning svelte-1wqfdel">Note: Results are from Julia 1.11.</div> <div class="results-header svelte-1wqfdel"><h2 class="svelte-1wqfdel">Results</h2> <a class="download-link svelte-1wqfdel" href="adtests.json" target="_blank" download=""><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> JSON</a></div> <div class="controls svelte-1wqfdel"><input type="search" class="search-input svelte-1wqfdel" placeholder="Filter models..."> <!></div> <!> <h2>Manifest</h2> <p class="secondary-text svelte-1wqfdel">Package versions used for the tests above:</p> <!></main></div>`);function m_(e,n){_n(n,!0);const t=typeof document<"u"&&(localStorage.getItem("theme")||document.documentElement.getAttribute("data-theme"))||"light";typeof document<"u"&&document.documentElement.setAttribute("data-theme",t);let r=pe(Pe(t)),o=new Map;for(const[g,y]of Object.entries(Ca)){let z=y.__category__;delete y.__category__;let M=new Map;for(const[O,Z]of Object.entries(y))M.set(O,Z);o.has(z)||o.set(z,new Map),o.get(z).set(g,M)}let s=new Map([...o.entries()].sort()),a=pe("");const c=sn(()=>{const g=E(a).trim().toLowerCase();if(!g)return s;const y=new Map;for(const[z,M]of s){const O=new Map;for(const[Z,fe]of M)Z.toLowerCase().includes(g)&&O.set(Z,fe);O.size>0&&y.set(z,O)}return y});var l=v_(),u=q(l),v=q(u),_=se(q(v),2);_.__click=[c_,r];var f=q(_);{var h=g=>{var y=u_();G(g,y)},b=g=>{var y=f_();G(g,y)};Ue(f,g=>{E(r)==="dark"?g(h):g(b,!1)})}var N=se(v,10),F=q(N),L=se(F,2);l_(L,{get theme(){return E(r)}});var V=se(N,2);Mn(V,17,()=>E(c).entries(),Rn,(g,y)=>{let z=()=>E(y)[0],M=()=>E(y)[1];var O=d_(),Z=an(O),fe=q(Z),ee=se(Z,2);i_(ee,{get data(){return M()},modelDefinitions:Al,get theme(){return E(r)}}),he(()=>qe(fe,z())),G(g,O)},g=>{var y=__(),z=q(y);he(()=>qe(z,`No models match "${E(a)??""}".`)),G(g,y)});var x=se(V,6);C0(x,{}),Ri(F,()=>E(a),g=>Y(a,g)),G(e,l),vn()}ft(["click"]);ui(m_,{target:document.getElementById("app")});
