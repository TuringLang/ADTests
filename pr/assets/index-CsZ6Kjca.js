(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const _r=!1;var nt=Array.isArray,rs=Array.prototype.indexOf,Pt=Array.from,os=Object.defineProperty,We=Object.getOwnPropertyDescriptor,Cr=Object.getOwnPropertyDescriptors,ss=Object.prototype,is=Array.prototype,zt=Object.getPrototypeOf,vr=Object.isExtensible;function wn(e){return typeof e=="function"}function as(e){return e()}function Ft(e){for(var n=0;n<e.length;n++)e[n]()}const Re=2,Or=4,tt=8,qt=16,Be=32,dn=64,Un=128,be=256,Hn=512,ce=1024,Oe=2048,Je=4096,ze=8192,rt=16384,ls=32768,Vt=65536,cs=1<<17,us=1<<19,Ir=1<<20,St=1<<21,Qe=Symbol("$state"),Lr=Symbol("legacy props"),fs=Symbol("");function Pr(e){return e===this.v}function ds(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Bt(e){return!ds(e,this.v)}function _s(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function vs(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ms(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ps(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function gs(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function hs(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function bs(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ys(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ws(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Nn=!1,Es=!1;function Ds(){Nn=!0}const jt=1,$t=2,zr=4,xs=8,Rs=16,Ms=1,Ts=2,qr=4,Fs=8,Ss=16,Ns=1,ks=2,_e=Symbol(),As="http://www.w3.org/1999/xhtml",Cs="@attach";function Vr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let K=null;function mr(e){K=e}function _n(e,n=!1,t){var r=K={p:K,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};Nn&&!n&&(K.l={s:null,u:null,r1:[],r2:cn(!1)}),qs(()=>{r.d=!0})}function vn(e){const n=K;if(n!==null){const a=n.e;if(a!==null){var t=j,r=$;n.e=null;try{for(var o=0;o<a.length;o++){var s=a[o];Xe(s.effect),Ie(s.reaction),Gt(s.fn)}}finally{Xe(t),Ie(r)}}K=n.p,n.m=!0}return{}}function kn(){return!Nn||K!==null&&K.l===null}function Pe(e){if(typeof e!="object"||e===null||Qe in e)return e;const n=zt(e);if(n!==ss&&n!==is)return e;var t=new Map,r=nt(e),o=ge(0),s=$,a=c=>{var l=$;Ie(s);var u=c();return Ie(l),u};return r&&t.set("length",ge(e.length)),new Proxy(e,{defineProperty(c,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&bs();var v=t.get(l);return v===void 0?(v=a(()=>ge(u.value)),t.set(l,v)):Z(v,a(()=>Pe(u.value))),!0},deleteProperty(c,l){var u=t.get(l);if(u===void 0)l in c&&(t.set(l,a(()=>ge(_e))),Et(o));else{if(r&&typeof l=="string"){var v=t.get("length"),_=Number(l);Number.isInteger(_)&&_<v.v&&Z(v,_)}Z(u,_e),Et(o)}return!0},get(c,l,u){var h;if(l===Qe)return e;var v=t.get(l),_=l in c;if(v===void 0&&(!_||(h=We(c,l))!=null&&h.writable)&&(v=a(()=>ge(Pe(_?c[l]:_e))),t.set(l,v)),v!==void 0){var f=E(v);return f===_e?void 0:f}return Reflect.get(c,l,u)},getOwnPropertyDescriptor(c,l){var u=Reflect.getOwnPropertyDescriptor(c,l);if(u&&"value"in u){var v=t.get(l);v&&(u.value=E(v))}else if(u===void 0){var _=t.get(l),f=_==null?void 0:_.v;if(_!==void 0&&f!==_e)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return u},has(c,l){var f;if(l===Qe)return!0;var u=t.get(l),v=u!==void 0&&u.v!==_e||Reflect.has(c,l);if(u!==void 0||j!==null&&(!v||(f=We(c,l))!=null&&f.writable)){u===void 0&&(u=a(()=>ge(v?Pe(c[l]):_e)),t.set(l,u));var _=E(u);if(_===_e)return!1}return v},set(c,l,u,v){var V;var _=t.get(l),f=l in c;if(r&&l==="length")for(var h=u;h<_.v;h+=1){var b=t.get(h+"");b!==void 0?Z(b,_e):h in c&&(b=a(()=>ge(_e)),t.set(h+"",b))}_===void 0?(!f||(V=We(c,l))!=null&&V.writable)&&(_=a(()=>ge(void 0)),Z(_,a(()=>Pe(u))),t.set(l,_)):(f=_.v!==_e,Z(_,a(()=>Pe(u))));var N=Reflect.getOwnPropertyDescriptor(c,l);if(N!=null&&N.set&&N.set.call(v,u),!f){if(r&&typeof l=="string"){var F=t.get("length"),L=Number(l);Number.isInteger(L)&&L>=F.v&&Z(F,L+1)}Et(o)}return!0},ownKeys(c){E(o);var l=Reflect.ownKeys(c).filter(_=>{var f=t.get(_);return f===void 0||f.v!==_e});for(var[u,v]of t)v.v!==_e&&!(u in c)&&l.push(u);return l},setPrototypeOf(){ys()}})}function Et(e,n=1){Z(e,e.v+n)}function ln(e){var n=Re|Oe,t=$!==null&&($.f&Re)!==0?$:null;return j===null||t!==null&&(t.f&be)!==0?n|=be:j.f|=Ir,{ctx:K,deps:null,effects:null,equals:Pr,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??j}}function sn(e){const n=ln(e);return no(n),n}function Ut(e){const n=ln(e);return n.equals=Bt,n}function Br(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)Ve(n[t])}}function Os(e){for(var n=e.parent;n!==null;){if((n.f&Re)===0)return n;n=n.parent}return null}function jr(e){var n,t=j;Xe(Os(e));try{Br(e),n=so(e)}finally{Xe(t)}return n}function $r(e){var n=jr(e),t=(Ge||(e.f&be)!==0)&&e.deps!==null?Je:ce;Ee(e,t),e.equals(n)||(e.v=n,e.wv=ro())}const Tn=new Map;function cn(e,n){var t={f:0,v:e,reactions:null,equals:Pr,rv:0,wv:0};return t}function ge(e,n){const t=cn(e);return no(t),t}function Ht(e,n=!1){var r;const t=cn(e);return n||(t.equals=Bt),Nn&&K!==null&&K.l!==null&&((r=K.l).s??(r.s=[])).push(t),t}function Z(e,n,t=!1){$!==null&&!Ae&&kn()&&($.f&(Re|qt))!==0&&!(le!=null&&le.includes(e))&&ws();let r=t?Pe(n):n;return Nt(e,r)}function Nt(e,n){if(!e.equals(n)){var t=e.v;An?Tn.set(e,n):Tn.set(e,t),e.v=n,(e.f&Re)!==0&&((e.f&Oe)!==0&&jr(e),Ee(e,(e.f&be)===0?ce:Je)),e.wv=ro(),Ur(e,Oe),kn()&&j!==null&&(j.f&ce)!==0&&(j.f&(Be|dn))===0&&(we===null?Gs([e]):we.push(e))}return n}function pr(e,n=1){var t=E(e),r=n===1?t++:t--;return Z(e,t),r}function Ur(e,n){var t=e.reactions;if(t!==null)for(var r=kn(),o=t.length,s=0;s<o;s++){var a=t[s],c=a.f;(c&Oe)===0&&(!r&&a===j||(Ee(a,n),(c&(ce|be))!==0&&((c&Re)!==0?Ur(a,Je):ut(a))))}}let Is=!1;var gr,Hr,Gr,Kr;function Ls(){if(gr===void 0){gr=window,Hr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Gr=We(n,"firstChild").get,Kr=We(n,"nextSibling").get,vr(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),vr(t)&&(t.__t=void 0)}}function ot(e=""){return document.createTextNode(e)}function Ce(e){return Gr.call(e)}function st(e){return Kr.call(e)}function q(e,n){return Ce(e)}function an(e,n){{var t=Ce(e);return t instanceof Comment&&t.data===""?st(t):t}}function se(e,n=1,t=!1){let r=e;for(;n--;)r=st(r);return r}function Ps(e){e.textContent=""}function Wr(e){j===null&&$===null&&ms(),$!==null&&($.f&be)!==0&&j===null&&vs(),An&&_s()}function zs(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function mn(e,n,t,r=!0){var o=j,s={ctx:K,deps:null,nodes_start:null,nodes_end:null,f:e|Oe,first:null,fn:n,last:null,next:null,parent:o,prev:null,teardown:null,transitions:null,wv:0};if(t)try{ct(s),s.f|=ls}catch(l){throw Ve(s),l}else n!==null&&ut(s);var a=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(Ir|Un))===0;if(!a&&r&&(o!==null&&zs(s,o),$!==null&&($.f&Re)!==0)){var c=$;(c.effects??(c.effects=[])).push(s)}return s}function qs(e){const n=mn(tt,null,!1);return Ee(n,ce),n.teardown=e,n}function hr(e){Wr();var n=j!==null&&(j.f&Be)!==0&&K!==null&&!K.m;if(n){var t=K;(t.e??(t.e=[])).push({fn:e,effect:j,reaction:$})}else{var r=Gt(e);return r}}function Vs(e){return Wr(),it(e)}function Bs(e){const n=mn(dn,e,!0);return(t={})=>new Promise(r=>{t.outro?Gn(n,()=>{Ve(n),r(void 0)}):(Ve(n),r(void 0))})}function Gt(e){return mn(Or,e,!1)}function js(e,n){var t=K,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=it(()=>{e(),!r.ran&&(r.ran=!0,Z(t.l.r2,!0),Fn(n))})}function $s(){var e=K;it(()=>{if(E(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&ce)!==0&&Ee(t,Je),pn(t)&&ct(t),n.ran=!1}e.l.r2.v=!1}})}function it(e){return mn(tt,e,!0)}function he(e,n=[],t=ln){const r=n.map(t);return at(()=>e(...r.map(E)))}function at(e,n=0){return mn(tt|qt|n,e,!0)}function un(e,n=!0){return mn(tt|Be,e,!0,n)}function Xr(e){var n=e.teardown;if(n!==null){const t=An,r=$;br(!0),Ie(null);try{n.call(null)}finally{br(t),Ie(r)}}}function Jr(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&dn)!==0?t.parent=null:Ve(t,n),t=r}}function Us(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&Be)===0&&Ve(n),n=t}}function Ve(e,n=!0){var t=!1;(n||(e.f&us)!==0)&&e.nodes_start!==null&&(Yr(e.nodes_start,e.nodes_end),t=!0),Jr(e,n&&!t),Yn(e,0),Ee(e,rt);var r=e.transitions;if(r!==null)for(const s of r)s.stop();Xr(e);var o=e.parent;o!==null&&o.first!==null&&Zr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Yr(e,n){for(;e!==null;){var t=e===n?null:st(e);e.remove(),e=t}}function Zr(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function Gn(e,n){var t=[];Kt(e,t,!0),Qr(t,()=>{Ve(e),n&&n()})}function Qr(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var o of e)o.out(r)}else n()}function Kt(e,n,t){if((e.f&ze)===0){if(e.f^=ze,e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&n.push(a);for(var r=e.first;r!==null;){var o=r.next,s=(r.f&Vt)!==0||(r.f&Be)!==0;Kt(r,n,s?t:!1),r=o}}}function Kn(e){eo(e,!0)}function eo(e,n){if((e.f&ze)!==0){e.f^=ze,(e.f&ce)===0&&(e.f^=ce),pn(e)&&(Ee(e,Oe),ut(e));for(var t=e.first;t!==null;){var r=t.next,o=(t.f&Vt)!==0||(t.f&Be)!==0;eo(t,o?n:!1),t=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&s.in()}}let Wn=[];function Hs(){var e=Wn;Wn=[],Ft(e)}function Wt(e){Wn.length===0&&queueMicrotask(Hs),Wn.push(e)}let jn=!1,kt=!1,Xn=null,en=!1,An=!1;function br(e){An=e}let $n=[];let $=null,Ae=!1;function Ie(e){$=e}let j=null;function Xe(e){j=e}let le=null;function no(e){$!==null&&$.f&St&&(le===null?le=[e]:le.push(e))}let ae=null,pe=0,we=null;function Gs(e){we=e}let to=1,Jn=0,Ge=!1;function ro(){return++to}function pn(e){var _;var n=e.f;if((n&Oe)!==0)return!0;if((n&Je)!==0){var t=e.deps,r=(n&be)!==0;if(t!==null){var o,s,a=(n&Hn)!==0,c=r&&j!==null&&!Ge,l=t.length;if(a||c){var u=e,v=u.parent;for(o=0;o<l;o++)s=t[o],(a||!((_=s==null?void 0:s.reactions)!=null&&_.includes(u)))&&(s.reactions??(s.reactions=[])).push(u);a&&(u.f^=Hn),c&&v!==null&&(v.f&be)===0&&(u.f^=be)}for(o=0;o<l;o++)if(s=t[o],pn(s)&&$r(s),s.wv>e.wv)return!0}(!r||j!==null&&!Ge)&&Ee(e,ce)}return!1}function Ks(e,n){for(var t=n;t!==null;){if((t.f&Un)!==0)try{t.fn(e);return}catch{t.f^=Un}t=t.parent}throw jn=!1,e}function yr(e){return(e.f&rt)===0&&(e.parent===null||(e.parent.f&Un)===0)}function lt(e,n,t,r){if(jn){if(t===null&&(jn=!1),yr(n))throw e;return}if(t!==null&&(jn=!0),Ks(e,n),yr(n))throw e}function oo(e,n,t=!0){var r=e.reactions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];le!=null&&le.includes(e)||((s.f&Re)!==0?oo(s,n,!1):n===s&&(t?Ee(s,Oe):(s.f&ce)!==0&&Ee(s,Je),ut(s)))}}function so(e){var h;var n=ae,t=pe,r=we,o=$,s=Ge,a=le,c=K,l=Ae,u=e.f;ae=null,pe=0,we=null,Ge=(u&be)!==0&&(Ae||!en||$===null),$=(u&(Be|dn))===0?e:null,le=null,mr(e.ctx),Ae=!1,Jn++,e.f|=St;try{var v=(0,e.fn)(),_=e.deps;if(ae!==null){var f;if(Yn(e,pe),_!==null&&pe>0)for(_.length=pe+ae.length,f=0;f<ae.length;f++)_[pe+f]=ae[f];else e.deps=_=ae;if(!Ge)for(f=pe;f<_.length;f++)((h=_[f]).reactions??(h.reactions=[])).push(e)}else _!==null&&pe<_.length&&(Yn(e,pe),_.length=pe);if(kn()&&we!==null&&!Ae&&_!==null&&(e.f&(Re|Je|Oe))===0)for(f=0;f<we.length;f++)oo(we[f],e);return o!==null&&o!==e&&(Jn++,we!==null&&(r===null?r=we:r.push(...we))),v}finally{ae=n,pe=t,we=r,$=o,Ge=s,le=a,mr(c),Ae=l,e.f^=St}}function Ws(e,n){let t=n.reactions;if(t!==null){var r=rs.call(t,e);if(r!==-1){var o=t.length-1;o===0?t=n.reactions=null:(t[r]=t[o],t.pop())}}t===null&&(n.f&Re)!==0&&(ae===null||!ae.includes(n))&&(Ee(n,Je),(n.f&(be|Hn))===0&&(n.f^=Hn),Br(n),Yn(n,0))}function Yn(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Ws(e,t[r])}function ct(e){var n=e.f;if((n&rt)===0){Ee(e,ce);var t=j,r=K,o=en;j=e,en=!0;try{(n&qt)!==0?Us(e):Jr(e),Xr(e);var s=so(e);e.teardown=typeof s=="function"?s:null,e.wv=to;var a=e.deps,c;_r&&Es&&e.f&Oe}catch(l){lt(l,e,t,r||e.ctx)}finally{en=o,j=t}}}function Xs(){try{ps()}catch(e){if(Xn!==null)lt(e,Xn,null);else throw e}}function Js(){var e=en;try{var n=0;for(en=!0;$n.length>0;){n++>1e3&&Xs();var t=$n,r=t.length;$n=[];for(var o=0;o<r;o++){var s=Zs(t[o]);Ys(s)}Tn.clear()}}finally{kt=!1,en=e,Xn=null}}function Ys(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(rt|ze))===0)try{pn(r)&&(ct(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Zr(r):r.fn=null))}catch(o){lt(o,r,null,r.ctx)}}}function ut(e){kt||(kt=!0,queueMicrotask(Js));for(var n=Xn=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(dn|Be))!==0){if((t&ce)===0)return;n.f^=ce}}$n.push(n)}function Zs(e){for(var n=[],t=e;t!==null;){var r=t.f,o=(r&(Be|dn))!==0,s=o&&(r&ce)!==0;if(!s&&(r&ze)===0){if((r&Or)!==0)n.push(t);else if(o)t.f^=ce;else try{pn(t)&&ct(t)}catch(l){lt(l,t,null,t.ctx)}var a=t.first;if(a!==null){t=a;continue}}var c=t.parent;for(t=t.next;t===null&&c!==null;)t=c.next,c=c.parent}return n}function E(e){var n=e.f,t=(n&Re)!==0;if($!==null&&!Ae){if(!(le!=null&&le.includes(e))){var r=$.deps;e.rv<Jn&&(e.rv=Jn,ae===null&&r!==null&&r[pe]===e?pe++:ae===null?ae=[e]:(!Ge||!ae.includes(e))&&ae.push(e))}}else if(t&&e.deps===null&&e.effects===null){var o=e,s=o.parent;s!==null&&(s.f&be)===0&&(o.f^=be)}return t&&(o=e,pn(o)&&$r(o)),An&&Tn.has(e)?Tn.get(e):e.v}function Fn(e){var n=Ae;try{return Ae=!0,e()}finally{Ae=n}}const Qs=-7169;function Ee(e,n){e.f=e.f&Qs|n}function At(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Qe in e)Ct(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&Qe in t&&Ct(t)}}}function Ct(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{Ct(e[r],n)}catch{}const t=zt(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=Cr(t);for(let o in r){const s=r[o].get;if(s)try{s.call(e)}catch{}}}}}function ei(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ni=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ti(e){return ni.includes(e)}const ri={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function oi(e){return e=e.toLowerCase(),ri[e]??e}const si=["touchstart","touchmove"];function ii(e){return si.includes(e)}function ai(e,n){if(n){const t=document.body;e.autofocus=!0,Wt(()=>{document.activeElement===t&&e.focus()})}}let wr=!1;function li(){wr||(wr=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var n;if(!e.defaultPrevented)for(const t of e.target.elements)(n=t.__on_r)==null||n.call(t)})},{capture:!0}))}function io(e){var n=$,t=j;Ie(null),Xe(null);try{return e()}finally{Ie(n),Xe(t)}}function ci(e,n,t,r=t){e.addEventListener(n,()=>io(t));const o=e.__on_r;o?e.__on_r=()=>{o(),r(!0)}:e.__on_r=()=>r(!0),li()}const ao=new Set,Ot=new Set;function ui(e,n,t,r={}){function o(s){if(r.capture||Dn.call(n,s),!s.cancelBubble)return io(()=>t==null?void 0:t.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Wt(()=>{n.addEventListener(e,o,r)}):n.addEventListener(e,o,r),o}function ft(e){for(var n=0;n<e.length;n++)ao.add(e[n]);for(var t of Ot)t(e)}function Dn(e){var V;var n=this,t=n.ownerDocument,r=e.type,o=((V=e.composedPath)==null?void 0:V.call(e))||[],s=o[0]||e.target,a=0,c=e.__root;if(c){var l=o.indexOf(c);if(l!==-1&&(n===document||n===window)){e.__root=n;return}var u=o.indexOf(n);if(u===-1)return;l<=u&&(a=l)}if(s=o[a]||e.target,s!==n){os(e,"currentTarget",{configurable:!0,get(){return s||t}});var v=$,_=j;Ie(null),Xe(null);try{for(var f,h=[];s!==null;){var b=s.assignedSlot||s.parentNode||s.host||null;try{var N=s["__"+r];if(N!=null&&(!s.disabled||e.target===s))if(nt(N)){var[F,...L]=N;F.apply(s,[e,...L])}else N.call(s,e)}catch(x){f?h.push(x):f=x}if(e.cancelBubble||b===n||b===null)break;s=b}if(f){for(let x of h)queueMicrotask(()=>{throw x});throw f}}finally{e.__root=n,delete e.currentTarget,Ie(v),Xe(_)}}}function Xt(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function fn(e,n){var t=j;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function ue(e,n){var t=(n&Ns)!==0,r=(n&ks)!==0,o,s=!e.startsWith("<!>");return()=>{o===void 0&&(o=Xt(s?e:"<!>"+e),t||(o=Ce(o)));var a=r||Hr?document.importNode(o,!0):o.cloneNode(!0);if(t){var c=Ce(a),l=a.lastChild;fn(c,l)}else fn(a,a);return a}}function dt(e,n,t="svg"){var r=!e.startsWith("<!>"),o=`<${t}>${r?e:"<!>"+e}</${t}>`,s;return()=>{if(!s){var a=Xt(o),c=Ce(a);s=Ce(c)}var l=s.cloneNode(!0);return fn(l,l),l}}function It(e=""){{var n=ot(e+"");return fn(n,n),n}}function Zn(){var e=document.createDocumentFragment(),n=document.createComment(""),t=ot();return e.append(n,t),fn(n,t),e}function G(e,n){e!==null&&e.before(n)}function qe(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function fi(e,n){return di(e,n)}const on=new Map;function di(e,{target:n,anchor:t,props:r={},events:o,context:s,intro:a=!0}){Ls();var c=new Set,l=_=>{for(var f=0;f<_.length;f++){var h=_[f];if(!c.has(h)){c.add(h);var b=ii(h);n.addEventListener(h,Dn,{passive:b});var N=on.get(h);N===void 0?(document.addEventListener(h,Dn,{passive:b}),on.set(h,1)):on.set(h,N+1)}}};l(Pt(ao)),Ot.add(l);var u=void 0,v=Bs(()=>{var _=t??n.appendChild(ot());return un(()=>{if(s){_n({});var f=K;f.c=s}o&&(r.$$events=o),u=e(_,r)||{},s&&vn()}),()=>{var b;for(var f of c){n.removeEventListener(f,Dn);var h=on.get(f);--h===0?(document.removeEventListener(f,Dn),on.delete(f)):on.set(f,h)}Ot.delete(l),_!==t&&((b=_.parentNode)==null||b.removeChild(_))}});return _i.set(u,v),u}let _i=new WeakMap;function Ue(e,n,[t,r]=[0,0]){var o=e,s=null,a=null,c=_e,l=t>0?Vt:0,u=!1;const v=(f,h=!0)=>{u=!0,_(h,f)},_=(f,h)=>{c!==(c=f)&&(c?(s?Kn(s):h&&(s=un(()=>h(o))),a&&Gn(a,()=>{a=null})):(a?Kn(a):h&&(a=un(()=>h(o,[t+1,r]))),s&&Gn(s,()=>{s=null})))};at(()=>{u=!1,n(v),u||_(null,null)},l)}function Rn(e,n){return n}function vi(e,n,t,r){for(var o=[],s=n.length,a=0;a<s;a++)Kt(n[a].e,o,!0);var c=s>0&&o.length===0&&t!==null;if(c){var l=t.parentNode;Ps(l),l.append(t),r.clear(),He(e,n[0].prev,n[s-1].next)}Qr(o,()=>{for(var u=0;u<s;u++){var v=n[u];c||(r.delete(v.k),He(e,v.prev,v.next)),Ve(v.e,!c)}})}function Mn(e,n,t,r,o,s=null){var a=e,c={flags:n,items:new Map,first:null},l=(n&zr)!==0;if(l){var u=e;a=u.appendChild(ot())}var v=null,_=!1,f=Ut(()=>{var h=t();return nt(h)?h:h==null?[]:Pt(h)});at(()=>{var h=E(f),b=h.length;_&&b===0||(_=b===0,mi(h,c,a,o,n,r,t),s!==null&&(b===0?v?Kn(v):v=un(()=>s(a)):v!==null&&Gn(v,()=>{v=null})),E(f))})}function mi(e,n,t,r,o,s,a){var ye,Me,ve,Te;var c=(o&xs)!==0,l=(o&(jt|$t))!==0,u=e.length,v=n.items,_=n.first,f=_,h,b=null,N,F=[],L=[],V,x,p,y;if(c)for(y=0;y<u;y+=1)V=e[y],x=s(V,y),p=v.get(x),p!==void 0&&((ye=p.a)==null||ye.measure(),(N??(N=new Set)).add(p));for(y=0;y<u;y+=1){if(V=e[y],x=s(V,y),p=v.get(x),p===void 0){var z=f?f.e.nodes_start:t;b=gi(z,n,b,b===null?n.first:b.next,V,x,y,r,o,a),v.set(x,b),F=[],L=[],f=b.next;continue}if(l&&pi(p,V,y,o),(p.e.f&ze)!==0&&(Kn(p.e),c&&((Me=p.a)==null||Me.unfix(),(N??(N=new Set)).delete(p))),p!==f){if(h!==void 0&&h.has(p)){if(F.length<L.length){var M=L[0],O;b=M.prev;var W=F[0],fe=F[F.length-1];for(O=0;O<F.length;O+=1)Er(F[O],M,t);for(O=0;O<L.length;O+=1)h.delete(L[O]);He(n,W.prev,fe.next),He(n,b,W),He(n,fe,M),f=M,b=fe,y-=1,F=[],L=[]}else h.delete(p),Er(p,f,t),He(n,p.prev,p.next),He(n,p,b===null?n.first:b.next),He(n,b,p),b=p;continue}for(F=[],L=[];f!==null&&f.k!==x;)(f.e.f&ze)===0&&(h??(h=new Set)).add(f),L.push(f),f=f.next;if(f===null)continue;p=f}F.push(p),b=p,f=p.next}if(f!==null||h!==void 0){for(var ee=h===void 0?[]:Pt(h);f!==null;)(f.e.f&ze)===0&&ee.push(f),f=f.next;var ne=ee.length;if(ne>0){var de=(o&zr)!==0&&u===0?t:null;if(c){for(y=0;y<ne;y+=1)(ve=ee[y].a)==null||ve.measure();for(y=0;y<ne;y+=1)(Te=ee[y].a)==null||Te.fix()}vi(n,ee,de,v)}}c&&Wt(()=>{var De;if(N!==void 0)for(p of N)(De=p.a)==null||De.apply()}),j.first=n.first&&n.first.e,j.last=b&&b.e}function pi(e,n,t,r){(r&jt)!==0&&Nt(e.v,n),(r&$t)!==0?Nt(e.i,t):e.i=t}function gi(e,n,t,r,o,s,a,c,l,u){var v=(l&jt)!==0,_=(l&Rs)===0,f=v?_?Ht(o):cn(o):o,h=(l&$t)===0?a:cn(a),b={i:h,v:f,k:s,a:null,e:null,prev:t,next:r};try{return b.e=un(()=>c(e,f,h,u),Is),b.e.prev=t&&t.e,b.e.next=r&&r.e,t===null?n.first=b:(t.next=b,t.e.next=b.e),r!==null&&(r.prev=b,r.e.prev=b.e),b}finally{}}function Er(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,o=n?n.e.nodes_start:t,s=e.e.nodes_start;s!==r;){var a=st(s);o.before(s),s=a}}function He(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function hi(e,n,t=!1,r=!1,o=!1){var s=e,a="";he(()=>{var c=j;if(a!==(a=n()??"")&&(c.nodes_start!==null&&(Yr(c.nodes_start,c.nodes_end),c.nodes_start=c.nodes_end=null),a!=="")){var l=a+"";t?l=`<svg>${l}</svg>`:r&&(l=`<math>${l}</math>`);var u=Xt(l);if((t||r)&&(u=Ce(u)),fn(Ce(u),u.lastChild),t||r)for(;Ce(u);)s.before(Ce(u));else s.before(u)}})}function bi(e,n,t,r,o){var c;var s=(c=n.$$slots)==null?void 0:c[t],a=!1;s===!0&&(s=n.children,a=!0),s===void 0?o!==null&&o(e):s(e,a?()=>r:r)}function yi(e,n){var t=void 0,r;at(()=>{t!==(t=n())&&(r&&(Ve(r),r=null),t&&(r=un(()=>{Gt(()=>t(e))})))})}function lo(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(n=0;n<o;n++)e[n]&&(t=lo(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function wi(){for(var e,n,t=0,r="",o=arguments.length;t<o;t++)(e=arguments[t])&&(n=lo(e))&&(r&&(r+=" "),r+=n);return r}function co(e){return typeof e=="object"?wi(e):e??""}const Dr=[...` 	
\r\f \v\uFEFF`];function Ei(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var o in t)if(t[o])r=r?r+" "+o:o;else if(r.length)for(var s=o.length,a=0;(a=r.indexOf(o,a))>=0;){var c=a+s;(a===0||Dr.includes(r[a-1]))&&(c===r.length||Dr.includes(r[c]))?r=(a===0?"":r.substring(0,a))+r.substring(c+1):a=c}}return r===""?null:r}function xr(e,n=!1){var t=n?" !important;":";",r="";for(var o in e){var s=e[o];s!=null&&s!==""&&(r+=" "+o+": "+s+t)}return r}function Dt(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Di(e,n){if(n){var t="",r,o;if(Array.isArray(n)?(r=n[0],o=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,a=0,c=!1,l=[];r&&l.push(...Object.keys(r).map(Dt)),o&&l.push(...Object.keys(o).map(Dt));var u=0,v=-1;const N=e.length;for(var _=0;_<N;_++){var f=e[_];if(c?f==="/"&&e[_-1]==="*"&&(c=!1):s?s===f&&(s=!1):f==="/"&&e[_+1]==="*"?c=!0:f==='"'||f==="'"?s=f:f==="("?a++:f===")"&&a--,!c&&s===!1&&a===0){if(f===":"&&v===-1)v=_;else if(f===";"||_===N-1){if(v!==-1){var h=Dt(e.substring(u,v).trim());if(!l.includes(h)){f!==";"&&_++;var b=e.substring(u,_).trim();t+=" "+b+";"}}u=_+1,v=-1}}}}return r&&(t+=xr(r)),o&&(t+=xr(o,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Sn(e,n,t,r,o,s){var a=e.__className;if(a!==t||a===void 0){var c=Ei(t,r,s);c==null?e.removeAttribute("class"):n?e.className=c:e.setAttribute("class",c),e.__className=t}else if(s&&o!==s)for(var l in s){var u=!!s[l];(o==null||u!==!!o[l])&&e.classList.toggle(l,u)}return s}function xt(e,n={},t,r){for(var o in t){var s=t[o];n[o]!==s&&(t[o]==null?e.style.removeProperty(o):e.style.setProperty(o,s,r))}}function Jt(e,n,t,r){var o=e.__style;if(o!==n){var s=Di(n,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=n}else r&&(Array.isArray(r)?(xt(e,t==null?void 0:t[0],r[0]),xt(e,t==null?void 0:t[1],r[1],"important")):xt(e,t,r));return r}const xn=Symbol("class"),En=Symbol("style"),uo=Symbol("is custom element"),fo=Symbol("is html");function xi(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Qn(e,n,t,r){var o=_o(e);o[n]!==(o[n]=t)&&(n==="loading"&&(e[fs]=t),t==null?e.removeAttribute(n):typeof t!="string"&&vo(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function Ri(e,n,t,r,o=!1){var s=_o(e),a=s[uo],c=!s[fo],l=n||{},u=e.tagName==="OPTION";for(var v in n)v in t||(t[v]=null);t.class?t.class=co(t.class):t.class=null,t[En]&&(t.style??(t.style=null));var _=vo(e);for(const x in t){let p=t[x];if(u&&x==="value"&&p==null){e.value=e.__value="",l[x]=p;continue}if(x==="class"){var f=e.namespaceURI==="http://www.w3.org/1999/xhtml";Sn(e,f,p,r,n==null?void 0:n[xn],t[xn]),l[x]=p,l[xn]=t[xn];continue}if(x==="style"){Jt(e,p,n==null?void 0:n[En],t[En]),l[x]=p,l[En]=t[En];continue}var h=l[x];if(p!==h){l[x]=p;var b=x[0]+x[1];if(b!=="$$")if(b==="on"){const y={},z="$$"+x;let M=x.slice(2);var N=ti(M);if(ei(M)&&(M=M.slice(0,-7),y.capture=!0),!N&&h){if(p!=null)continue;e.removeEventListener(M,l[z],y),l[z]=null}if(p!=null)if(N)e[`__${M}`]=p,ft([M]);else{let O=function(W){l[x].call(this,W)};var V=O;l[z]=ui(M,e,O,y)}else N&&(e[`__${M}`]=void 0)}else if(x==="style")Qn(e,x,p);else if(x==="autofocus")ai(e,!!p);else if(!a&&(x==="__value"||x==="value"&&p!=null))e.value=e.__value=p;else if(x==="selected"&&u)xi(e,p);else{var F=x;c||(F=oi(F));var L=F==="defaultValue"||F==="defaultChecked";if(p==null&&!a&&!L)if(s[x]=null,F==="value"||F==="checked"){let y=e;const z=n===void 0;if(F==="value"){let M=y.defaultValue;y.removeAttribute(F),y.defaultValue=M,y.value=y.__value=z?M:null}else{let M=y.defaultChecked;y.removeAttribute(F),y.defaultChecked=M,y.checked=z?M:!1}}else e.removeAttribute(x);else L||_.includes(F)&&(a||typeof p!="string")?e[F]=p:typeof p!="function"&&Qn(e,F,p)}}}for(let x of Object.getOwnPropertySymbols(t))x.description===Cs&&yi(e,()=>t[x]);return l}function _o(e){return e.__attributes??(e.__attributes={[uo]:e.nodeName.includes("-"),[fo]:e.namespaceURI===As})}var Rr=new Map;function vo(e){var n=Rr.get(e.nodeName);if(n)return n;Rr.set(e.nodeName,n=[]);for(var t,r=e,o=Element.prototype;o!==r;){t=Cr(r);for(var s in t)t[s].set&&n.push(s);r=zt(r)}return n}function Mi(e,n,t=n){var r=kn();ci(e,"input",o=>{var s=o?e.defaultValue:e.value;if(s=Rt(e)?Mt(s):s,t(s),r&&s!==(s=n())){var a=e.selectionStart,c=e.selectionEnd;e.value=s??"",c!==null&&(e.selectionStart=a,e.selectionEnd=Math.min(c,e.value.length))}}),Fn(n)==null&&e.value&&t(Rt(e)?Mt(e.value):e.value),it(()=>{var o=n();Rt(e)&&o===Mt(e.value)||e.type==="date"&&!o&&!e.value||o!==e.value&&(e.value=o??"")})}function Rt(e){var n=e.type;return n==="number"||n==="range"}function Mt(e){return e===""?null:+e}function mo(e=!1){const n=K,t=n.l.u;if(!t)return;let r=()=>At(n.s);if(e){let o=0,s={};const a=ln(()=>{let c=!1;const l=n.s;for(const u in l)l[u]!==s[u]&&(s[u]=l[u],c=!0);return c&&o++,o});r=()=>E(a)}t.b.length&&Vs(()=>{Mr(n,r),Ft(t.b)}),hr(()=>{const o=Fn(()=>t.m.map(as));return()=>{for(const s of o)typeof s=="function"&&s()}}),t.a.length&&hr(()=>{Mr(n,r),Ft(t.a)})}function Mr(e,n){if(e.l.s)for(const t of e.l.s)E(t);n()}let Bn=!1;function Ti(e){var n=Bn;try{return Bn=!1,[e(),Bn]}finally{Bn=n}}const Fi={get(e,n){if(!e.exclude.includes(n))return E(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=Ke({get[n](){return e.props[n]}},n,qr)),e.special[n](t),pr(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),pr(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function et(e,n){return new Proxy({props:e,exclude:n,special:{},version:cn(0)},Fi)}const Si={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(wn(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let o=e.props[r];wn(o)&&(o=o());const s=We(o,n);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(wn(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const o=We(r,n);return o&&!o.configurable&&(o.configurable=!0),o}}},has(e,n){if(n===Qe||n===Lr)return!1;for(let t of e.props)if(wn(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(wn(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function Ni(...e){return new Proxy({props:e},Si)}function Tr(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function Ke(e,n,t,r){var z;var o=(t&Ms)!==0,s=!Nn||(t&Ts)!==0,a=(t&Fs)!==0,c=(t&Ss)!==0,l=!1,u;a?[u,l]=Ti(()=>e[n]):u=e[n];var v=Qe in e||Lr in e,_=a&&(((z=We(e,n))==null?void 0:z.set)??(v&&n in e&&(M=>e[n]=M)))||void 0,f=r,h=!0,b=!1,N=()=>(b=!0,h&&(h=!1,c?f=Fn(r):f=r),f);u===void 0&&r!==void 0&&(_&&s&&hs(),u=N(),_&&_(u));var F;if(s)F=()=>{var M=e[n];return M===void 0?N():(h=!0,b=!1,M)};else{var L=(o?ln:Ut)(()=>e[n]);L.f|=cs,F=()=>{var M=E(L);return M!==void 0&&(f=void 0),M===void 0?f:M}}if((t&qr)===0)return F;if(_){var V=e.$$legacy;return function(M,O){return arguments.length>0?((!s||!O||V||l)&&_(O?F():M),M):F()}}var x=!1,p=Ht(u),y=ln(()=>{var M=F(),O=E(p);return x?(x=!1,O):p.v=M});return a&&E(y),o||(y.equals=Bt),function(M,O){if(arguments.length>0){const W=O?E(y):s&&a?Pe(M):M;if(!y.equals(W)){if(x=!0,Z(p,W),b&&f!==void 0&&(f=W),Tr(y))return M;Fn(()=>E(y))}return M}return Tr(y)?y.v:E(y)}}function ki(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function Ai(){const e=K;return e===null&&Vr(),(n,t,r)=>{var s;const o=(s=e.s.$$events)==null?void 0:s[n];if(o){const a=nt(o)?o.slice():[o],c=ki(n,t,r);for(const l of a)l.call(e.x,c);return!c.defaultPrevented}return!0}}function Ci(e){K===null&&Vr(),K.l===null&&gs(),Oi(K).a.push(e)}function Oi(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Ii="5";var Ar;typeof window<"u"&&((Ar=window.__svelte??(window.__svelte={})).v??(Ar.v=new Set)).add(Ii);const Li={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:8.530030735852467,FiniteDifferences:95.40066382171646,ForwardDiff:2.2008149637394987,MooncakeFwd:27.060353892454405,MooncakeRvs:6.089105007228282,ReverseDiff:"error",ReverseDiffCompiled:"error"},Pi={__category__:"Distributions",EnzymeFwd:2.786667901678366,EnzymeRvs:1.261658949158949,FiniteDifferences:37.97836247383013,ForwardDiff:2.0463575826641183,MooncakeFwd:4.929645222637549,MooncakeRvs:3.1406237259479783,ReverseDiff:64.95552546962261,ReverseDiffCompiled:5.547756105497208},zi={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:"error",ReverseDiffCompiled:"error"},qi={__category__:"DynamicPPL demo models",EnzymeFwd:4.746288849637341,EnzymeRvs:1.7081009668254439,FiniteDifferences:100.73509880698863,ForwardDiff:3.2834772036474162,MooncakeFwd:11.513185277529232,MooncakeRvs:6.004463767206064,ReverseDiff:194.13315021459226,ReverseDiffCompiled:18.47485316213632},Vi={__category__:"DynamicPPL demo models",EnzymeFwd:3.4710672891984067,EnzymeRvs:1.4222721066767827,FiniteDifferences:87.14314521937027,ForwardDiff:2.6456488712956028,MooncakeFwd:10.105630491806169,MooncakeRvs:5.921655498032356,ReverseDiff:141.78761092444213,ReverseDiffCompiled:13.676367230810284},Bi={__category__:"DynamicPPL demo models",EnzymeFwd:7.167425910245555,EnzymeRvs:17.834380248958837,FiniteDifferences:92.34077168297242,ForwardDiff:1.8500870805305603,MooncakeFwd:14.554545259729126,MooncakeRvs:4.963572267920094,ReverseDiff:87.86186996311979,ReverseDiffCompiled:8.365098374679214},ji={__category__:"DynamicPPL demo models",EnzymeFwd:9.484654623101953,EnzymeRvs:16.15598105968963,FiniteDifferences:61.31830431420337,ForwardDiff:.9835944833067273,MooncakeFwd:16.77481631796235,MooncakeRvs:6.830285397617068,ReverseDiff:57.246461705153386,ReverseDiffCompiled:3.8393389137678007},$i={__category__:"DynamicPPL demo models",EnzymeFwd:11.62320084699688,EnzymeRvs:19.73000258293052,FiniteDifferences:88.31604980385468,ForwardDiff:2.5440804828437535,MooncakeFwd:15.959712519659119,MooncakeRvs:6.171880579958575,ReverseDiff:69.37846327603854,ReverseDiffCompiled:7.007453071967861},Ui={__category__:"DynamicPPL demo models",EnzymeFwd:10.882782438048329,EnzymeRvs:18.11983346983347,FiniteDifferences:78.5461180232154,ForwardDiff:1.4767966227456457,MooncakeFwd:16.54078143661491,MooncakeRvs:5.850276507134567,ReverseDiff:65.6399639626112,ReverseDiffCompiled:6.541636456039303},Hi={__category__:"DynamicPPL demo models",EnzymeFwd:4.774886611656077,EnzymeRvs:1.4738994609215765,FiniteDifferences:100.65762402237827,ForwardDiff:1.9820864110159369,MooncakeFwd:11.332113353245429,MooncakeRvs:5.895726723435914,ReverseDiff:200.14505908545985,ReverseDiffCompiled:19.644493060778014},Gi={__category__:"DynamicPPL demo models",EnzymeFwd:7.4587818640730505,EnzymeRvs:10.38462852263023,FiniteDifferences:90.32337216301384,ForwardDiff:1.3904063150878532,MooncakeFwd:15.02933932234966,MooncakeRvs:5.630290042111162,ReverseDiff:77.3998768978252,ReverseDiffCompiled:7.9464492250751775},Ki={__category__:"DynamicPPL demo models",EnzymeFwd:9.553569190451773,EnzymeRvs:15.918292807345692,FiniteDifferences:94.29723690277727,ForwardDiff:1.0683850767762135,MooncakeFwd:16.09145018202382,MooncakeRvs:5.983945470932854,ReverseDiff:48.0741821655037,ReverseDiffCompiled:5.704925191100226},Wi={__category__:"Distributions",EnzymeFwd:6.337368821967652,EnzymeRvs:9.851454806180035,FiniteDifferences:27.848484640466797,ForwardDiff:1.2227189267990888,MooncakeFwd:4.621156276326873,MooncakeRvs:5.5850144828761294,ReverseDiff:23.93661802575107,ReverseDiffCompiled:3.7330180113600373},Xi={__category__:"DynamicPPL demo models",EnzymeFwd:6.830909832166881,EnzymeRvs:10.90818445454871,FiniteDifferences:92.07287701317716,ForwardDiff:2.502324412570858,MooncakeFwd:14.91128558088057,MooncakeRvs:5.602094846792627,ReverseDiff:42.20121866133309,ReverseDiffCompiled:4.776450585959525},Ji={__category__:"DynamicPPL demo models",EnzymeFwd:7.483061141854502,EnzymeRvs:8.910738926565124,FiniteDifferences:86.34044429370866,ForwardDiff:1.4700335048919688,MooncakeFwd:14.53529108706852,MooncakeRvs:5.434261005390784,ReverseDiff:79.82421002526453,ReverseDiffCompiled:7.864929623567922},Yi={__category__:"DynamicPPL demo models",EnzymeFwd:8.586002372479241,EnzymeRvs:15.114683815648446,FiniteDifferences:79.26233953456442,ForwardDiff:1.3081545064377682,MooncakeFwd:15.82226591300074,MooncakeRvs:6.4544196318427725,ReverseDiff:59.57958826439363,ReverseDiffCompiled:5.628135946227397},Zi={__category__:"DynamicPPL demo models",EnzymeFwd:9.978692743180648,EnzymeRvs:17.50040006838776,FiniteDifferences:97.18513840648355,ForwardDiff:1.377292955039278,MooncakeFwd:15.482354547005633,MooncakeRvs:6.047017080485923,ReverseDiff:67.37645703915683,ReverseDiffCompiled:6.068624683395278},Qi={__category__:"Core Turing syntax",EnzymeFwd:2.653203830923586,EnzymeRvs:1.4497080840136631,FiniteDifferences:164.23355328934213,ForwardDiff:2.714750363475576,MooncakeFwd:20.943224932249322,MooncakeRvs:4.804674531975753,ReverseDiff:100.20346715328466,ReverseDiffCompiled:9.67514196963731},ea={__category__:"Core Turing syntax",EnzymeFwd:18.985397248697335,EnzymeRvs:3.6626689196033864,FiniteDifferences:245.17800128293572,ForwardDiff:7.423456441064822,MooncakeFwd:23.18744716387366,MooncakeRvs:22.63330162311276,ReverseDiff:935.5429780095546,ReverseDiffCompiled:76.39253726277468},na={__category__:"DynamicPPL arXiV paper",EnzymeFwd:2.3231314432989687,EnzymeRvs:5.15673662830061,FiniteDifferences:3.289335523561052,ForwardDiff:2.3315358869468206,MooncakeFwd:5.741628959276018,MooncakeRvs:29.50648275862069,ReverseDiff:877.6588326446281,ReverseDiffCompiled:30.096897972372563},ta={__category__:"DynamicPPL arXiV paper",EnzymeFwd:6.065110960225851,EnzymeRvs:2.9899590925994795,FiniteDifferences:183.55442054528453,ForwardDiff:3.471614609265222,MooncakeFwd:32.04301848787857,MooncakeRvs:6.521564171755905,ReverseDiff:115.55163815197064,ReverseDiffCompiled:8.029075654563865},ra={__category__:"DynamicPPL arXiV paper",EnzymeFwd:22449.09864746831,EnzymeRvs:6.296373200442968,FiniteDifferences:141370.83434371915,ForwardDiff:15731.805384505225,MooncakeFwd:36348.65498387775,MooncakeRvs:23.211684895472796,ReverseDiff:515.9191679463912,ReverseDiffCompiled:99.11482372929349},oa={__category__:"DynamicPPL arXiV paper",EnzymeFwd:82.90271208049316,EnzymeRvs:11.972411394789464,FiniteDifferences:"NaN",ForwardDiff:58.4712563482067,MooncakeFwd:4434.847872688565,MooncakeRvs:6.205895381889327,ReverseDiff:68.84068656320856,ReverseDiffCompiled:11.50576699143611},sa={__category__:"Distributions",EnzymeFwd:4.315711938353448,EnzymeRvs:19.616186900292032,FiniteDifferences:158.05971168955386,ForwardDiff:2.2622107969151672,MooncakeFwd:22.5307966055297,MooncakeRvs:5.042652502816675,ReverseDiff:65.47915092395411,ReverseDiffCompiled:7.052924224444821},ia={__category__:"DynamicPPL arXiV paper",EnzymeFwd:317.62668279493386,EnzymeRvs:3.875127110026438,FiniteDifferences:4567.742401446986,ForwardDiff:281.55647487808807,MooncakeFwd:419.7349435656809,MooncakeRvs:9.890079601331832,ReverseDiff:81.77376061892706,ReverseDiffCompiled:11.97754193792377},aa={__category__:"DynamicPPL arXiV paper",EnzymeFwd:39.75127641084134,EnzymeRvs:3.556367383428898,FiniteDifferences:960.7016473099638,ForwardDiff:54.40510504739944,MooncakeFwd:164.4394297037782,MooncakeRvs:4.478508378269504,ReverseDiff:64.18115990864503,ReverseDiffCompiled:8.996736160960973},la={__category__:"DynamicPPL arXiV paper",EnzymeFwd:159.13902551256533,EnzymeRvs:.9774131797703401,FiniteDifferences:2808.90082120439,ForwardDiff:127.11558715095849,MooncakeFwd:406.49920285012143,MooncakeRvs:4.255932279590749,ReverseDiff:156.36422931505595,ReverseDiffCompiled:23.44420320327641},ca={__category__:"DynamicPPL arXiV paper",EnzymeFwd:108.10283368941865,EnzymeRvs:4.9424367867531895,FiniteDifferences:22785.614756390893,ForwardDiff:203.87636113754098,MooncakeFwd:1403.195678140949,MooncakeRvs:4.821682017212743,ReverseDiff:198.30801365326812,ReverseDiffCompiled:21.035406796067043},ua={__category__:"Core Turing syntax",EnzymeFwd:3.4855232591081644,EnzymeRvs:2.280448322551527,FiniteDifferences:79.11552461552462,ForwardDiff:1.7340788799726823,MooncakeFwd:10.430298380221656,MooncakeRvs:4.674379182338462,ReverseDiff:99.07154277938425,ReverseDiffCompiled:11.281253803276295},fa={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:19.554388597149288,FiniteDifferences:256.9525450469152,ForwardDiff:4.274384763535203,MooncakeFwd:49.2905967184166,MooncakeRvs:19.421496522503798,ReverseDiff:74.94530000841537,ReverseDiffCompiled:27.845246742149115},da={__category__:"Core Turing syntax",EnzymeFwd:3.6071841159817692,EnzymeRvs:3.597471318192461,FiniteDifferences:64.67445902197989,ForwardDiff:1.193190829167385,MooncakeFwd:9.565317780666348,MooncakeRvs:3.8050886040484695,ReverseDiff:24.705176242020542,ReverseDiffCompiled:2.77259111398998},_a={__category__:"Base Julia features",EnzymeFwd:5.337949480881235,EnzymeRvs:"wrong",FiniteDifferences:13.89267023959647,ForwardDiff:1.0567931615075767,MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:"error",ReverseDiffCompiled:"error"},va={__category__:"Effect of model size",EnzymeFwd:2.58146664391742,EnzymeRvs:.799537384251368,FiniteDifferences:243.82279522699218,ForwardDiff:3.9250476661252733,MooncakeFwd:40.74471544715447,MooncakeRvs:5.2773311635476,ReverseDiff:126.08780487804877,ReverseDiffCompiled:11.445518885777004},ma={__category__:"Effect of model size",EnzymeFwd:12.468322722054065,EnzymeRvs:.6145180233863584,FiniteDifferences:774.3057708275671,ForwardDiff:24.930488974113135,MooncakeFwd:194.43077241236685,MooncakeRvs:5.331114107534131,ReverseDiff:118.16801441504789,ReverseDiffCompiled:10.7261862968814},pa={__category__:"Distributions",EnzymeFwd:"error",EnzymeRvs:4.54185442716882,FiniteDifferences:32.19267595609577,ForwardDiff:1.124193732417216,MooncakeFwd:16.50662390975563,MooncakeRvs:9.622217542546057,ReverseDiff:22.41150389557135,ReverseDiffCompiled:.986803830369357},ga={__category__:"Effect of model size",EnzymeFwd:21.15556654771579,EnzymeRvs:.5891091189662729,FiniteDifferences:1384.936837268486,ForwardDiff:40.13189226282381,MooncakeFwd:363.2377926067154,MooncakeRvs:5.136681703548467,ReverseDiff:124.14863905325444,ReverseDiffCompiled:10.540227432090484},ha={__category__:"Effect of model size",EnzymeFwd:115.48903422325748,EnzymeRvs:.8138976159674738,FiniteDifferences:37505.70128764893,ForwardDiff:179.12375797122942,MooncakeFwd:1838.2919343462263,MooncakeRvs:5.589590654383131,ReverseDiff:149.4031360072719,ReverseDiffCompiled:14.82062401657904},ba={__category__:"Distributions",EnzymeFwd:2.539291702270903,EnzymeRvs:1.7839107578650897,FiniteDifferences:34.10310098667758,ForwardDiff:1.848607409792748,MooncakeFwd:4.7075166183739565,MooncakeRvs:3.660654337997012,ReverseDiff:65.11820090767459,ReverseDiffCompiled:6.173097716138153},ya={__category__:"Distributions",EnzymeFwd:2.023048521104561,EnzymeRvs:7.241644277270285,FiniteDifferences:20.299161097682358,ForwardDiff:1.0338642984474387,MooncakeFwd:4.154821216742924,MooncakeRvs:7.022772382883363,ReverseDiff:14.425066509015668,ReverseDiffCompiled:3.871199052934213},wa={__category__:"Core Turing syntax",EnzymeFwd:18.374008051748916,EnzymeRvs:3.66070232162701,FiniteDifferences:244.52420950009872,ForwardDiff:7.402794147985395,MooncakeFwd:23.680436409830957,MooncakeRvs:22.241925288404268,ReverseDiff:938.7830505348579,ReverseDiffCompiled:77.18015122944121},Ea={__category__:"Core Turing syntax",EnzymeFwd:38.28714322415952,EnzymeRvs:6.680695242794439,FiniteDifferences:499.8022719760625,ForwardDiff:9.987767706655399,MooncakeFwd:42.90985147194606,MooncakeRvs:25.374805381653182,ReverseDiff:642.3720495421546,ReverseDiffCompiled:90.37329209553653},Da={__category__:"Core Turing syntax",EnzymeFwd:3.612036282464657,EnzymeRvs:12.081490282916116,FiniteDifferences:103.3117237096329,ForwardDiff:1.453494757715005,MooncakeFwd:13.723676957001103,MooncakeRvs:6.088884306042482,ReverseDiff:113.61456827557029,ReverseDiffCompiled:9.121072216097023},xa={__category__:"Core Turing syntax",EnzymeFwd:36.73359864240984,EnzymeRvs:7.0139039134439045,FiniteDifferences:494.49425151586735,ForwardDiff:10.507345863715477,MooncakeFwd:43.90544977848898,MooncakeRvs:26.92673809424549,ReverseDiff:1108.7885031684182,ReverseDiffCompiled:93.95907211114832},Ra={__category__:"Distributions",EnzymeFwd:"error",EnzymeRvs:"error",FiniteDifferences:30.91825762031623,ForwardDiff:"NaN",MooncakeFwd:5.140213103594653,MooncakeRvs:3.8260224237320744,ReverseDiff:"NaN",ReverseDiffCompiled:6.08937026173226},Ma={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:81.83890906870975,FiniteDifferences:61.73235122967137,ForwardDiff:5.912787849093582,MooncakeFwd:"error",MooncakeRvs:58.93024584171084,ReverseDiff:"error",ReverseDiffCompiled:"error"},Ta={__category__:"Distributions",EnzymeFwd:35.78755896337851,EnzymeRvs:6.606744047192768,FiniteDifferences:565.079138326479,ForwardDiff:9.656977720950577,MooncakeFwd:44.79816871981808,MooncakeRvs:26.177639450389968,ReverseDiff:687.9607111774214,ReverseDiffCompiled:63.24239535479602},Fa={__category__:"PosteriorDB",EnzymeFwd:3.4318184031751438,EnzymeRvs:8.209547961962793,FiniteDifferences:218.04624040920714,ForwardDiff:4.780946291560102,MooncakeFwd:35.151259083995264,MooncakeRvs:5.683740810394939,ReverseDiff:218.29896134854417,ReverseDiffCompiled:17.87512211784799},Sa={__category__:"PosteriorDB",EnzymeFwd:3.3787433521225436,EnzymeRvs:7.615130479973272,FiniteDifferences:209.71956835521345,ForwardDiff:4.610327372308203,MooncakeFwd:31.870566567268902,MooncakeRvs:4.99509550555345,ReverseDiff:204.23430165317365,ReverseDiffCompiled:16.37712647449958},Na={__category__:"Core Turing syntax",EnzymeFwd:10.130109154999218,EnzymeRvs:1.8681122874864928,FiniteDifferences:276.66714944841465,ForwardDiff:3.4391080627150084,MooncakeFwd:23.39966529742887,MooncakeRvs:9.776832977510017,ReverseDiff:313.93732193732194,ReverseDiffCompiled:27.810122117493624},ka={__category__:"Distributions",EnzymeFwd:11.002587955515143,EnzymeRvs:13.34252800255112,FiniteDifferences:50.54709351305813,ForwardDiff:1.1080094617631122,MooncakeFwd:18.858825987048256,MooncakeRvs:10.007564296520423,ReverseDiff:46.756406849159035,ReverseDiffCompiled:4.123326633546968},Aa={__category__:"Core Turing syntax",EnzymeFwd:4.927670799261409,EnzymeRvs:1.5405973317905748,FiniteDifferences:99.66947797993541,ForwardDiff:1.920605697322601,MooncakeFwd:11.82469642551736,MooncakeRvs:6.1875962755773415,ReverseDiff:204.21041774110367,ReverseDiffCompiled:18.603120759837175},Ca={__category__:"Base Julia features",EnzymeFwd:4.376499214826562,EnzymeRvs:2.3256197225247353,FiniteDifferences:97.19735348858323,ForwardDiff:2.5383386559413696,MooncakeFwd:11.828533410177306,MooncakeRvs:4.928683675110788,ReverseDiff:79.88295061979272,ReverseDiffCompiled:"wrong"},Oa={abstractgps:Li,assume_beta:Pi,delaydiffeq:zi,demo_assume_dot_observe:qi,demo_assume_dot_observe_literal:Vi,demo_assume_index_observe:Bi,demo_assume_matrix_observe_matrix_index:ji,demo_assume_multivariate_observe:$i,demo_assume_multivariate_observe_literal:Ui,demo_assume_observe_literal:Hi,demo_assume_submodel_observe_index_literal:Gi,demo_dot_assume_observe:Ki,assume_dirichlet:Wi,demo_dot_assume_observe_index:Xi,demo_dot_assume_observe_index_literal:Ji,demo_dot_assume_observe_matrix_index:Yi,demo_dot_assume_observe_submodel:Zi,dot_assume:Qi,dot_observe:ea,dppl_gauss_unknown:na,dppl_hier_poisson:ta,dppl_high_dim_gauss:ra,dppl_hmm_semisup:oa,assume_lkjcholu:sa,dppl_lda:ia,dppl_logistic_regression:aa,dppl_naive_bayes:la,dppl_sto_volatility:ca,dynamic_constraint:ua,lux_nn:fa,multiple_constraints_same_var:da,multithreaded:_a,n010:va,n050:ma,assume_mvnormal:pa,n100:ga,n500:ha,observe_bernoulli:ba,observe_categorical:ya,observe_index:wa,observe_literal:Ea,observe_multivariate:Da,observe_submodel:xa,observe_von_mises:Ra,ordinarydiffeq:Ma,assume_normal:Ta,pdb_eight_schools_centered:Fa,pdb_eight_schools_noncentered:Sa,assume_submodel:Na,assume_wishart:ka,broadcast_macro:Aa,control_flow:Ca},Ia=`#=
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

model = abstractgps(distance, n, y)`,La=`@model function assume_beta()
    a ~ Beta(2, 2)
end

model = assume_beta()`,Pa=`#=
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

model = delaydiffeq(ddedata, prob_dde)`,za=`@model function demo_assume_dot_observe(x = [1.5, 2.0])
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

model = demo_assume_dot_observe_literal()`,Va=`using LinearAlgebra: Diagonal

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

model = demo_assume_index_observe()`,Ba=`using FillArrays
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

model = demo_assume_matrix_observe_matrix_index()`,ja=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe(x = [1.5, 2.0])
    # Multivariate \`assume\` and \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zero(x), Diagonal(s))
    x ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe()`,$a=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe_literal()
    # multivariate \`assume\` and literal \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zeros(2), Diagonal(s))
    [1.5, 2.0] ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe_literal()`,Ua=`@model function demo_assume_observe_literal()
    # univariate \`assume\` and literal \`observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    1.5 ~ Normal(m, sqrt(s))
    2.0 ~ Normal(m, sqrt(s))
end

model = demo_assume_observe_literal()`,Ha=`@model function _prior_dot_assume(::Type{TV} = Vector{Float64}) where {TV}
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

model = demo_assume_submodel_observe_index_literal()`,Ga=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe()`,Ka=`@model function assume_dirichlet()
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

model = demo_dot_assume_observe_submodel()`,Za=`@model function dot_assume(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 5)
    a .~ Normal()
end

model = dot_assume()`,Qa=`@model function dot_observe(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    x .~ Normal(a)
end

model = dot_observe()`,el=`using FillArrays

n = 10_000
s = abs(rand()) + 0.5
y = randn() .+ s * randn(n)

@model function dppl_gauss_unknown(y)
    N = length(y)
    m ~ Normal(0, 1)
    s ~ truncated(Cauchy(0, 5); lower = 0)
    y ~ product_distribution(Fill(Normal(m, s), N))
end

model = dppl_gauss_unknown(y)`,nl=`using FillArrays
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

model = dppl_hier_poisson(y, x, idx, ns)`,tl=`using FillArrays

@model function dppl_high_dim_gauss(D)
    m ~ product_distribution(Fill(Normal(0, 1), D))
end

model = dppl_high_dim_gauss(10_000)`,rl=`using FillArrays
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

model = dppl_hmm_semisup(K, T, T_unsup, w, z, u, alpha, beta)`,ol=`@model function assume_lkjcholu()
    a ~ LKJCholesky(5, 1.0, 'U')
end

model = assume_lkjcholu()`,sl=`using FillArrays

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

model = dppl_lda(k, m, w, doc, alpha, beta)`,il=`using Random: Xoshiro
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

model = dppl_logistic_regression(X', y)`,al=`using DelimitedFiles
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

model = dppl_naive_bayes(image_vec, labels, C, D)`,ll=`using DelimitedFiles: readdlm

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

model = dppl_sto_volatility(y)`,cl=`@model function dynamic_constraint()
    a ~ Normal()
    b ~ truncated(Normal(); lower = a)
end

model = dynamic_constraint()`,ul=`#=
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

model = lux_nn(reduce(hcat, xs), ts)`,fl=`@model function multiple_constraints_same_var(::Type{TV} = Vector{Float64}) where {TV}
    x = TV(undef, 5)
    x[1] ~ Normal()
    x[2] ~ InverseGamma(2, 3)
    x[3] ~ truncated(Normal(), -5, 20)
    x[4:5] ~ Dirichlet([1.0, 2.0])
end

model = multiple_constraints_same_var()`,dl=`#=
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
model = setthreadsafe(multithreaded(x), true)`,_l=`@model function n010(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 10)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n010()`,vl=`@model function n050(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 50)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n050()`,ml=`@model function assume_mvnormal()
    a ~ MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0])
end

model = assume_mvnormal()`,pl=`@model function n100(::Type{TV} = Vector{Float64}) where {TV}
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

model = n500()`,hl=`@model function observe_bernoulli(x = [true, false, true])
    a ~ Beta(2, 2)
    for i in eachindex(x)
        x[i] ~ Bernoulli(a)
    end
end

model = observe_bernoulli()`,bl=`@model function observe_categorical(x = [1, 2, 1, 2, 2])
    a ~ Dirichlet(2, 3)
    for i in eachindex(x)
        x[i] ~ Categorical(a)
    end
end

model = observe_categorical()`,yl=`@model function observe_index(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end

model = observe_index()`,wl=`@model function observe_literal()
    a ~ Normal()
    1.5 ~ Normal(a)
end

model = observe_literal()`,El=`@model function observe_multivariate(
    x = [1.5, 2.0, 2.5],
    ::Type{TV} = Vector{Float64},
) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    x ~ MvNormal(a, I)
end

model = observe_multivariate()`,Dl=`@model function inner2(x, a)
    x ~ Normal(a)
end
@model function observe_submodel(x = 1.5)
    a ~ Normal()
    _ignore ~ to_submodel(inner2(x, a))
end

model = observe_submodel()`,xl=`@model function observe_von_mises(x)
    a ~ InverseGamma(2, 3)
    x ~ VonMises(0, a)
end

model = observe_von_mises(0.4)`,Rl=`# See https://turinglang.org/docs/tutorials/bayesian-differential-equations/.

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

model = ordinarydiffeq(odedata, prob)`,Ml=`@model function assume_normal()
    a ~ Normal()
end

model = assume_normal()`,Tl=`J = 8
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

model = pdb_eight_schools_noncentered(J, y, sigma)`,Sl=`@model function inner1()
    return a ~ Normal()
end
@model function assume_submodel()
    a ~ to_submodel(inner1())
    x ~ Normal(a)
end

model = assume_submodel()`,Nl=`@model function assume_wishart()
    a ~ Wishart(7, [1.0 0.5; 0.5 1.0])
end

model = assume_wishart()`,kl=`@model function broadcast_macro(x = [1.5, 2.0], ::Type{TV} = Vector{Float64}) where {TV}
    a ~ Normal(0, 1)
    b ~ InverseGamma(2, 3)
    @. x ~ Normal(a, $(sqrt(b)))
end

model = broadcast_macro()`,Al=`#= 
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

model = control_flow()`,Cl={abstractgps:Ia,assume_beta:La,delaydiffeq:Pa,demo_assume_dot_observe:za,demo_assume_dot_observe_literal:qa,demo_assume_index_observe:Va,demo_assume_matrix_observe_matrix_index:Ba,demo_assume_multivariate_observe:ja,demo_assume_multivariate_observe_literal:$a,demo_assume_observe_literal:Ua,demo_assume_submodel_observe_index_literal:Ha,demo_dot_assume_observe:Ga,assume_dirichlet:Ka,demo_dot_assume_observe_index:Wa,demo_dot_assume_observe_index_literal:Xa,demo_dot_assume_observe_matrix_index:Ja,demo_dot_assume_observe_submodel:Ya,dot_assume:Za,dot_observe:Qa,dppl_gauss_unknown:el,dppl_hier_poisson:nl,dppl_high_dim_gauss:tl,dppl_hmm_semisup:rl,assume_lkjcholu:ol,dppl_lda:sl,dppl_logistic_regression:il,dppl_naive_bayes:al,dppl_sto_volatility:ll,dynamic_constraint:cl,lux_nn:ul,multiple_constraints_same_var:fl,multithreaded:dl,n010:_l,n050:vl,assume_mvnormal:ml,n100:pl,n500:gl,observe_bernoulli:hl,observe_categorical:bl,observe_index:yl,observe_literal:wl,observe_multivariate:El,observe_submodel:Dl,observe_von_mises:xl,ordinarydiffeq:Rl,assume_normal:Ml,pdb_eight_schools_centered:Tl,pdb_eight_schools_noncentered:Fl,assume_submodel:Sl,assume_wishart:Nl,broadcast_macro:kl,control_flow:Al};Ds();const Ol="1.22.0",Il="1.5.0",Ll="0.5.24",Pl="5.15.1",zl="0.14.2",ql="0.4.5",Vl="0.1.44",Bl="4.5.2",jl="0.8.3",$l="0.8.10",Ul="0.7.2",Hl="0.6.2",Gl="1.1.3",Kl="2.5.0",Wl="1.1.2",Xl="0.4.0",Jl="7.24.0",Yl="1.11.0",Zl="1.1.3",Ql="1.1.0",ec="0.4.8",nc="0.4.9",tc="1.11.0",rc="0.15.22",oc="0.1.6",sc="1.12.1",ic="0.5.0",ac="0.2.7",lc="0.3.14",cc="1.73.0",uc="1.26.1",fc="1.3.1",dc="0.1.10",_c="0.1.13",vc="0.2.6",mc="0.3.1",pc="1.0.0",gc="4.18.1",hc="1.1.1+0",bc="0.1.2",yc="0.2.3",wc="0.1.2",Ec="1.6.0",Dc="0.3.1",xc="4.1.1",Rc="1.16.0",Mc="0.19.4",Tc="1.0.0",Fc="1.11.0",Sc="5.74.1",Nc="1.9.1",kc="0.4.0",Ac="6.218.0",Cc="4.16.0",Oc="5.30.0",Ic="1.1.0",Lc="1.15.1",Pc="0.7.16",zc="0.4.28",qc="0.10.12",Vc="1.11.0",Bc="0.25.125",jc="0.6.58",$c="0.9.5",Uc="1.6.0",Hc="0.40.24",Gc="2.0.0",Kc="1.0.7",Wc="0.13.138",Xc="0.8.19",Jc="0.0.256+0",Yc="1.30.0",Zc="0.1.10",Qc="1.1.4",eu="0.10.14",nu="0.3.1",tu="1.3.2",ru="0.3.2",ou="1.1.0",su="1.3.1",iu="1.11.0",au="1.16.0",lu="2.30.0",cu="0.12.33",uu="1.3.3",fu="0.1.2",du="1.1.3",_u="1.8.0",vu="0.5.2",mu="1.11.0",pu="0.2.0",gu="1.9.1",hu="0.5.6",bu="1.14.0",yu="0.2.0",wu="0.3.28",Eu="0.4.15",Du="0.1.1",xu="0.1.5",Ru="0.3.1",Mu="0.1.3",Tu="2025.2.0+0",Fu="1.11.0",Su="0.16.2",Nu="0.7.14",ku="0.1.17",Au="0.2.6",Cu="1.10.0",Ou="1.0.0",Iu="1.7.1",Lu="0.2.1",Pu="0.9.41",zu="0.6.11",qu="0.10.67",Vu="0.10.6",Bu="9.7.0",ju="0.0.42+0",$u="1.4.0",Uu="0.1.17",Hu="1.11.0",Gu="0.2.1",Ku="0.6.4",Wu="8.6.0+0",Xu="1.11.0",Ju="1.7.2+0",Yu="1.11.0+1",Zu="0.13.1+0",Qu="1.11.0",ef="0.9.17",nf="0.1.8",tf="7.6.1",rf="1.11.0",of="3.75.0",sf="2.2.0",af="1.13.1",lf="0.3.29",cf="1.11.0",uf="1.2.0",ff="1.31.4",df="1.5.3",_f="1.15.9",vf="7.7.0",mf="0.3.17",pf="2025.2.0+0",gf="1.17.8",hf="1.12.1",bf="0.5.16",yf="0.1.8",wf="0.4.3",Ef="1.11.0",Df="0.1.4",xf="2.28.6+0",Rf="1.2.0",Mf="2.1.0",Tf="1.11.0",Ff="0.5.24",Sf="0.3.7",Nf="2023.12.12",kf="0.2.4",Af="8.0.0",Cf="0.9.34",Of="1.1.3",If="1.0.0",Lf="1.2.0",Pf="4.19.0",zf="2.25.0",qf="2.1.1",Vf="1.13.1",Bf="1.7.1",jf="0.5.0",$f="1.17.0",Uf="0.3.27+1",Hf="0.8.5+0",Gf="0.5.6+0",Kf="2.0.1",Wf="0.4.7",Xf="5.5.1",Jf="5.1.1",Yf="0.4.13",Zf="1.8.1",Qf="6.111.0",ed="1.11.0",nd="1.26.0",td="3.33.1",rd="1.14.0",od="2.9.0",sd="1.12.0",id="1.15.0",ad="1.18.0",ld="1.26.0",cd="1.10.0",ud="1.11.0",fd="1.12.0",dd="1.14.0",_d="1.12.0",vd="1.13.0",md="1.15.0",pd="1.28.0",gd="1.11.0",hd="1.14.0",bd="1.10.0",yd="1.10.0",wd="1.12.0",Ed="1.31.1",Dd="1.14.0",xd="1.14.0",Rd="1.14.0",Md="1.11.1",Td="1.13.0",Fd="1.12.0",Sd="1.14.0",Nd="0.11.37",kd="2.8.3",Ad="1.11.0",Cd="0.4.7",Od="0.7.19",Id="0.2.2",Ld="0.2.4",Pd="1.2.0",zd="1.2.1",qd="1.5.2",Vd="3.3.2",Bd="0.5.7",jd="1.11.0",$d="0.1.6",Ud="1.11.0",Hd="1.4.0",Gd="2.11.3",Kd="1.11.0",Wd="1.11.0",Xd="1.7.1",Jd="1.6.0",Yd="0.3.2",Zd="0.4.5",Qd="0.1.19",e1="0.1.0",n1="1.3.4",t1="3.54.0",r1="1.2.2",o1="1.3.1",s1="1.2.0",i1="1.16.2",a1="1.4.2",l1="0.9.0",c1="0.5.1+0",u1="3.0.0",f1="0.5.18",d1="0.7.0",_1="0.1.0",v1="0.6.1",m1="2.155.1",p1="0.1.13",g1="1.9.1",h1="1.17.0",b1="1.0.1",y1="7.103.0",w1="1.10.0",E1="3.1.0",D1="1.6.0",x1="1.3.0",R1="1.11.0",M1="1.1.2",T1="1.11.0",F1="2.11.1",S1="0.9.5",N1="1.11.0",k1="1.2.2",A1="1.11.0",C1="1.2.1",O1="0.1.2",I1="0.4.27",L1="2.7.2",P1="1.3.1",z1="1.9.0",q1="1.9.18",V1="1.4.4",B1="3.5.0",j1="1.11.1",$1="1.8.0",U1="0.34.10",H1="1.5.2",G1="0.5.8",K1="0.4.4",W1="0.7.3",X1="0.3.1",J1="2.8.0",Y1="1.11.0",Z1=null,Q1="7.7.0+0",e_="0.3.46",n_="1.0.3",t_="1.0.1",r_="1.12.1",o_="1.10.0",s_="0.1.1",i_="0.1.7",a_="1.11.0",l_="0.5.5",c_="0.5.29",u_="0.2.38",f_="0.1.6",d_="1.4.0",__="0.43.7",v_="1.11.0",m_="1.11.0",p_="0.3.1",g_="1.3.3",h_="1.1.0",b_="1.2.13+1",y_="0.7.10",w_="0.2.7",E_="5.11.0+0",D_="1.59.0+0",x_="2022.0.0+1",R_="17.4.0+2",M_={ADTypes:Ol,AbstractFFTs:Il,AbstractGPs:Ll,AbstractMCMC:Pl,AbstractPPL:zl,AbstractTrees:ql,Accessors:Vl,Adapt:Bl,AdvancedHMC:jl,AdvancedMH:$l,AdvancedPS:Ul,AdvancedVI:Hl,AliasTables:Gl,ArgCheck:Kl,ArgTools:Wl,ArnoldiMethod:Xl,ArrayInterface:Jl,Artifacts:Yl,Atomix:Zl,AxisAlgorithms:Ql,AxisArrays:ec,BangBang:nc,Base64:tc,Bijectors:rc,BitTwiddlingConvenienceFunctions:oc,BracketingNonlinearSolve:sc,CEnum:ic,CPUSummary:ac,Cassette:lc,ChainRules:cc,ChainRulesCore:uc,Chairmarks:fc,ChangesOfVariables:dc,CloseOpenIntervals:_c,CommonSolve:vc,CommonSubexpressions:mc,CommonWorldInvalidations:pc,Compat:gc,CompilerSupportLibraries_jll:hc,CompositionsBase:bc,ConcreteStructs:yc,ConsoleProgressMonitor:wc,ConstructionBase:Ec,CpuId:Dc,Crayons:xc,DataAPI:Rc,DataStructures:Mc,DataValueInterfaces:Tc,Dates:Fc,DelayDiffEq:Sc,DelimitedFiles:Nc,DensityInterface:kc,DiffEqBase:Ac,DiffEqCallbacks:Cc,DiffEqNoiseProcess:Oc,DiffResults:Ic,DiffRules:Lc,DifferentiationInterface:Pc,DispatchDoctor:zc,Distances:qc,Distributed:Vc,Distributions:Bc,DistributionsAD:jc,DocStringExtensions:$c,Downloads:Uc,DynamicPPL:Hc,EllipticalSliceSampling:Gc,EnumX:Kc,Enzyme:Wc,EnzymeCore:Xc,Enzyme_jll:Jc,ExponentialUtilities:Yc,ExprTools:Zc,ExpressionExplorer:Qc,ExproniconLite:eu,FFTA:nu,FastBroadcast:tu,FastClosures:ru,FastGaussQuadrature:ou,FastPower:su,FileWatching:iu,FillArrays:au,FiniteDiff:lu,FiniteDifferences:cu,ForwardDiff:uu,FunctionProperties:fu,FunctionWrappers:du,FunctionWrappersWrappers:_u,Functors:vu,Future:mu,GPUArraysCore:pu,GPUCompiler:gu,GenericSchur:hu,Graphs:bu,HashArrayMappedTries:yu,HypergeometricFunctions:wu,IRTools:Eu,IfElse:Du,Inflate:xu,InitialValues:Ru,IntegerMathUtils:Mu,IntelOpenMP_jll:Tu,InteractiveUtils:Fu,Interpolations:Su,IntervalSets:Nu,InverseFunctions:ku,IrrationalConstants:Au,IterTools:Cu,IteratorInterfaceExtensions:Ou,JLLWrappers:Iu,JSON:"1.5.0",Jieko:Lu,KernelAbstractions:Pu,KernelDensity:zu,KernelFunctions:qu,Krylov:Vu,LLVM:Bu,LLVMExtra_jll:ju,LaTeXStrings:$u,LayoutPointers:Uu,LazyArtifacts:Hu,LeftChildRightSiblingTrees:Gu,LibCURL:Ku,LibCURL_jll:Wu,LibGit2:Xu,LibGit2_jll:Ju,LibSSH2_jll:Yu,LibTracyClient_jll:Zu,Libdl:Qu,Libtask:ef,LineSearch:nf,LineSearches:tf,LinearAlgebra:rf,LinearSolve:of,LogDensityProblems:sf,LogDensityProblemsAD:af,LogExpFunctions:lf,Logging:cf,LoggingExtras:uf,Lux:ff,LuxCore:df,LuxLib:_f,MCMCChains:vf,MCMCDiagnosticTools:mf,MKL_jll:pf,MLDataDevices:gf,MLJModelInterface:hf,MacroTools:bf,ManualMemory:yf,MappedArrays:wf,Markdown:Ef,MaybeInplace:Df,MbedTLS_jll:xf,Missings:Rf,MistyClosures:Mf,Mmap:Tf,Mooncake:Ff,Moshi:Sf,MozillaCACerts_jll:Nf,MuladdMacro:kf,NLSolversBase:Af,NNlib:Cf,NaNMath:Of,NaturalSort:If,NetworkOptions:Lf,NonlinearSolve:Pf,NonlinearSolveBase:zf,NonlinearSolveFirstOrder:qf,NonlinearSolveQuasiNewton:Vf,NonlinearSolveSpectralMethods:Bf,ObjectFile:jf,OffsetArrays:$f,OpenBLAS_jll:Uf,OpenLibm_jll:Hf,OpenSpecFun_jll:Gf,Optim:Kf,Optimisers:Wf,Optimization:Xf,OptimizationBase:Jf,OptimizationOptimJL:Yf,OrderedCollections:Zf,OrdinaryDiffEq:Qf,OrdinaryDiffEqAdamsBashforthMoulton:ed,OrdinaryDiffEqBDF:nd,OrdinaryDiffEqCore:td,OrdinaryDiffEqDefault:rd,OrdinaryDiffEqDifferentiation:od,OrdinaryDiffEqExplicitRK:sd,OrdinaryDiffEqExponentialRK:id,OrdinaryDiffEqExtrapolation:ad,OrdinaryDiffEqFIRK:ld,OrdinaryDiffEqFeagin:cd,OrdinaryDiffEqFunctionMap:ud,OrdinaryDiffEqHighOrderRK:fd,OrdinaryDiffEqIMEXMultistep:dd,OrdinaryDiffEqLinear:_d,OrdinaryDiffEqLowOrderRK:vd,OrdinaryDiffEqLowStorageRK:md,OrdinaryDiffEqNonlinearSolve:pd,OrdinaryDiffEqNordsieck:gd,OrdinaryDiffEqPDIRK:hd,OrdinaryDiffEqPRK:bd,OrdinaryDiffEqQPRK:yd,OrdinaryDiffEqRKN:wd,OrdinaryDiffEqRosenbrock:Ed,OrdinaryDiffEqSDIRK:Dd,OrdinaryDiffEqSSPRK:xd,OrdinaryDiffEqStabilizedIRK:Rd,OrdinaryDiffEqStabilizedRK:Md,OrdinaryDiffEqSymplecticRK:Td,OrdinaryDiffEqTsit5:Fd,OrdinaryDiffEqVerner:Sd,PDMats:Nd,Parsers:kd,Pkg:Ad,PoissonRandom:Cd,Polyester:Od,PolyesterWeave:Id,PositiveFactorizations:Ld,PreallocationTools:Pd,PrecompileTools:zd,Preferences:qd,PrettyTables:Vd,Primes:Bd,Printf:jd,ProgressLogging:$d,ProgressMeter:Ud,PtrArrays:Hd,QuadGK:Gd,REPL:Kd,Random:Wd,Random123:Xd,RandomNumbers:Jd,RangeArrays:Yd,Ratios:Zd,ReactantCore:Qd,RealDot:e1,RecipesBase:n1,RecursiveArrayTools:t1,Reexport:r1,Requires:o1,ResettableStacks:s1,ReverseDiff:i1,Richardson:a1,Rmath:l1,Rmath_jll:c1,Roots:u1,RuntimeGeneratedFunctions:f1,SHA:d1,SIMDTypes:_1,SSMProblems:v1,SciMLBase:m1,SciMLJacobianOperators:p1,SciMLLogging:g1,SciMLOperators:h1,SciMLPublic:b1,SciMLSensitivity:y1,SciMLStructures:w1,ScientificTypesBase:E1,ScopedValues:D1,Scratch:x1,Serialization:R1,Setfield:M1,SharedArrays:T1,SimpleNonlinearSolve:F1,SimpleTraits:S1,Sockets:N1,SortingAlgorithms:k1,SparseArrays:A1,SparseConnectivityTracer:C1,SparseInverseSubset:O1,SparseMatrixColorings:I1,SpecialFunctions:L1,Static:P1,StaticArrayInterface:z1,StaticArrays:q1,StaticArraysCore:V1,StatisticalTraits:B1,Statistics:j1,StatsAPI:$1,StatsBase:U1,StatsFuns:H1,StrideArraysCore:G1,StringManipulation:K1,StructArrays:W1,StructIO:X1,StructUtils:J1,StyledStrings:Y1,SuiteSparse:Z1,SuiteSparse_jll:Q1,SymbolicIndexingInterface:e_,TOML:n_,TableTraits:t_,Tables:r_,Tar:o_,TensorCore:s_,TerminalLoggers:i_,Test:a_,ThreadingUtilities:l_,TimerOutputs:c_,Tracker:u_,Tracy:f_,TruncatedStacktraces:d_,Turing:__,UUIDs:v_,Unicode:m_,UnsafeAtomics:p_,WeightInitializers:g_,WoodburyMatrices:h_,Zlib_jll:b_,Zygote:y_,ZygoteRules:w_,libblastrampoline_jll:E_,nghttp2_jll:D_,oneTBB_jll:x_,p7zip_jll:R_};function Fr(e){switch(e){case"FiniteDifferences":return 1;case"ForwardDiff":return 11;case"EnzymeFwd":return 12;case"MooncakeFwd":return 13;case"ReverseDiff":return 21;case"ReverseDiffCompiled":return 22;case"EnzymeRev":return 23;case"MooncakeRev":return 24;default:return 500}}function T_(e,n){const t=Fr(e),r=Fr(n);return t<r?-1:t>r?1:e.localeCompare(n)}function Lt(e){return[...e.entries()].sort(([n,t],[r,o])=>T_(n,r))}var F_=ue('<tr><td class="svelte-yinbl0"> </td><td class="version svelte-yinbl0"> </td></tr>'),S_=ue('<table class="svelte-yinbl0"><thead><tr><th class="svelte-yinbl0">Package</th><th class="svelte-yinbl0">Version</th></tr></thead><tbody></tbody></table>');function N_(e,n){_n(n,!1);let t=new Map;for(const[s,a]of Object.entries(M_))t.set(s,a===""?null:a);mo();var r=S_(),o=se(q(r));Mn(o,5,()=>Lt(t),Rn,(s,a,c)=>{let l=()=>E(a)[0],u=()=>E(a)[1];var v=F_();Sn(v,1,"svelte-yinbl0",null,{},{alt:c%2===1});var _=q(v),f=q(_),h=se(_),b=q(h);he(()=>{qe(f,l()),qe(b,u()===null?"":`v${u()}`)}),G(s,v)}),G(e,r),vn()}var k_=ue('<td class="model-name svelte-73y89f"> </td>');function A_(e,n){var t=k_();t.__click=function(...o){var s;(s=n.onToggle)==null||s.apply(this,o)};var r=q(t);he(()=>qe(r,n.name)),G(e,t)}ft(["click"]);function C_(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tt,Sr;function O_(){if(Sr)return Tt;Sr=1;function e(i){return i instanceof Map?i.clear=i.delete=i.set=function(){throw new Error("map is read-only")}:i instanceof Set&&(i.add=i.clear=i.delete=function(){throw new Error("set is read-only")}),Object.freeze(i),Object.getOwnPropertyNames(i).forEach(d=>{const g=i[d],A=typeof g;(A==="object"||A==="function")&&!Object.isFrozen(g)&&e(g)}),i}class n{constructor(d){d.data===void 0&&(d.data={}),this.data=d.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(i,...d){const g=Object.create(null);for(const A in i)g[A]=i[A];return d.forEach(function(A){for(const X in A)g[X]=A[X]}),g}const o="</span>",s=i=>!!i.scope,a=(i,{prefix:d})=>{if(i.startsWith("language:"))return i.replace("language:","language-");if(i.includes(".")){const g=i.split(".");return[`${d}${g.shift()}`,...g.map((A,X)=>`${A}${"_".repeat(X+1)}`)].join(" ")}return`${d}${i}`};class c{constructor(d,g){this.buffer="",this.classPrefix=g.classPrefix,d.walk(this)}addText(d){this.buffer+=t(d)}openNode(d){if(!s(d))return;const g=a(d.scope,{prefix:this.classPrefix});this.span(g)}closeNode(d){s(d)&&(this.buffer+=o)}value(){return this.buffer}span(d){this.buffer+=`<span class="${d}">`}}const l=(i={})=>{const d={children:[]};return Object.assign(d,i),d};class u{constructor(){this.rootNode=l(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(d){this.top.children.push(d)}openNode(d){const g=l({scope:d});this.add(g),this.stack.push(g)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(d){return this.constructor._walk(d,this.rootNode)}static _walk(d,g){return typeof g=="string"?d.addText(g):g.children&&(d.openNode(g),g.children.forEach(A=>this._walk(d,A)),d.closeNode(g)),d}static _collapse(d){typeof d!="string"&&d.children&&(d.children.every(g=>typeof g=="string")?d.children=[d.children.join("")]:d.children.forEach(g=>{u._collapse(g)}))}}class v extends u{constructor(d){super(),this.options=d}addText(d){d!==""&&this.add(d)}startScope(d){this.openNode(d)}endScope(){this.closeNode()}__addSublanguage(d,g){const A=d.root;g&&(A.scope=`language:${g}`),this.add(A)}toHTML(){return new c(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(i){return i?typeof i=="string"?i:i.source:null}function f(i){return N("(?=",i,")")}function h(i){return N("(?:",i,")*")}function b(i){return N("(?:",i,")?")}function N(...i){return i.map(g=>_(g)).join("")}function F(i){const d=i[i.length-1];return typeof d=="object"&&d.constructor===Object?(i.splice(i.length-1,1),d):{}}function L(...i){return"("+(F(i).capture?"":"?:")+i.map(A=>_(A)).join("|")+")"}function V(i){return new RegExp(i.toString()+"|").exec("").length-1}function x(i,d){const g=i&&i.exec(d);return g&&g.index===0}const p=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function y(i,{joinWith:d}){let g=0;return i.map(A=>{g+=1;const X=g;let J=_(A),R="";for(;J.length>0;){const D=p.exec(J);if(!D){R+=J;break}R+=J.substring(0,D.index),J=J.substring(D.index+D[0].length),D[0][0]==="\\"&&D[1]?R+="\\"+String(Number(D[1])+X):(R+=D[0],D[0]==="("&&g++)}return R}).map(A=>`(${A})`).join(d)}const z=/\b\B/,M="[a-zA-Z]\\w*",O="[a-zA-Z_]\\w*",W="\\b\\d+(\\.\\d+)?",fe="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ee="\\b(0b[01]+)",ne="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",de=(i={})=>{const d=/^#![ ]*\//;return i.binary&&(i.begin=N(d,/.*\b/,i.binary,/\b.*/)),r({scope:"meta",begin:d,end:/$/,relevance:0,"on:begin":(g,A)=>{g.index!==0&&A.ignoreMatch()}},i)},ye={begin:"\\\\[\\s\\S]",relevance:0},Me={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ye]},ve={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ye]},Te={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},De=function(i,d,g={}){const A=r({scope:"comment",begin:i,end:d,contains:[]},g);A.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const X=L("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return A.contains.push({begin:N(/[ ]+/,"(",X,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),A},gn=De("//","$"),Fe=De("/\\*","\\*/"),ie=De("#","$"),Se={scope:"number",begin:W,relevance:0},hn={scope:"number",begin:fe,relevance:0},nn={scope:"number",begin:ee,relevance:0},_t={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ye,{begin:/\[/,end:/\]/,relevance:0,contains:[ye]}]},bn={scope:"title",begin:M,relevance:0},Cn={scope:"title",begin:O,relevance:0},vt={begin:"\\.\\s*"+O,relevance:0};var On=Object.freeze({__proto__:null,APOS_STRING_MODE:Me,BACKSLASH_ESCAPE:ye,BINARY_NUMBER_MODE:nn,BINARY_NUMBER_RE:ee,COMMENT:De,C_BLOCK_COMMENT_MODE:Fe,C_LINE_COMMENT_MODE:gn,C_NUMBER_MODE:hn,C_NUMBER_RE:fe,END_SAME_AS_BEGIN:function(i){return Object.assign(i,{"on:begin":(d,g)=>{g.data._beginMatch=d[1]},"on:end":(d,g)=>{g.data._beginMatch!==d[1]&&g.ignoreMatch()}})},HASH_COMMENT_MODE:ie,IDENT_RE:M,MATCH_NOTHING_RE:z,METHOD_GUARD:vt,NUMBER_MODE:Se,NUMBER_RE:W,PHRASAL_WORDS_MODE:Te,QUOTE_STRING_MODE:ve,REGEXP_MODE:_t,RE_STARTERS_RE:ne,SHEBANG:de,TITLE_MODE:bn,UNDERSCORE_IDENT_RE:O,UNDERSCORE_TITLE_MODE:Cn});function bo(i,d){i.input[i.index-1]==="."&&d.ignoreMatch()}function yo(i,d){i.className!==void 0&&(i.scope=i.className,delete i.className)}function wo(i,d){d&&i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",i.__beforeBegin=bo,i.keywords=i.keywords||i.beginKeywords,delete i.beginKeywords,i.relevance===void 0&&(i.relevance=0))}function Eo(i,d){Array.isArray(i.illegal)&&(i.illegal=L(...i.illegal))}function Do(i,d){if(i.match){if(i.begin||i.end)throw new Error("begin & end are not supported with match");i.begin=i.match,delete i.match}}function xo(i,d){i.relevance===void 0&&(i.relevance=1)}const Ro=(i,d)=>{if(!i.beforeMatch)return;if(i.starts)throw new Error("beforeMatch cannot be used with starts");const g=Object.assign({},i);Object.keys(i).forEach(A=>{delete i[A]}),i.keywords=g.keywords,i.begin=N(g.beforeMatch,f(g.begin)),i.starts={relevance:0,contains:[Object.assign(g,{endsParent:!0})]},i.relevance=0,delete g.beforeMatch},Mo=["of","and","for","in","not","or","if","then","parent","list","value"],To="keyword";function Yt(i,d,g=To){const A=Object.create(null);return typeof i=="string"?X(g,i.split(" ")):Array.isArray(i)?X(g,i):Object.keys(i).forEach(function(J){Object.assign(A,Yt(i[J],d,J))}),A;function X(J,R){d&&(R=R.map(D=>D.toLowerCase())),R.forEach(function(D){const k=D.split("|");A[k[0]]=[J,Fo(k[0],k[1])]})}}function Fo(i,d){return d?Number(d):So(i)?0:1}function So(i){return Mo.includes(i.toLowerCase())}const Zt={},Ye=i=>{console.error(i)},Qt=(i,...d)=>{console.log(`WARN: ${i}`,...d)},tn=(i,d)=>{Zt[`${i}/${d}`]||(console.log(`Deprecated as of ${i}. ${d}`),Zt[`${i}/${d}`]=!0)},In=new Error;function er(i,d,{key:g}){let A=0;const X=i[g],J={},R={};for(let D=1;D<=d.length;D++)R[D+A]=X[D],J[D+A]=!0,A+=V(d[D-1]);i[g]=R,i[g]._emit=J,i[g]._multi=!0}function No(i){if(Array.isArray(i.begin)){if(i.skip||i.excludeBegin||i.returnBegin)throw Ye("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),In;if(typeof i.beginScope!="object"||i.beginScope===null)throw Ye("beginScope must be object"),In;er(i,i.begin,{key:"beginScope"}),i.begin=y(i.begin,{joinWith:""})}}function ko(i){if(Array.isArray(i.end)){if(i.skip||i.excludeEnd||i.returnEnd)throw Ye("skip, excludeEnd, returnEnd not compatible with endScope: {}"),In;if(typeof i.endScope!="object"||i.endScope===null)throw Ye("endScope must be object"),In;er(i,i.end,{key:"endScope"}),i.end=y(i.end,{joinWith:""})}}function Ao(i){i.scope&&typeof i.scope=="object"&&i.scope!==null&&(i.beginScope=i.scope,delete i.scope)}function Co(i){Ao(i),typeof i.beginScope=="string"&&(i.beginScope={_wrap:i.beginScope}),typeof i.endScope=="string"&&(i.endScope={_wrap:i.endScope}),No(i),ko(i)}function Oo(i){function d(R,D){return new RegExp(_(R),"m"+(i.case_insensitive?"i":"")+(i.unicodeRegex?"u":"")+(D?"g":""))}class g{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(D,k){k.position=this.position++,this.matchIndexes[this.matchAt]=k,this.regexes.push([k,D]),this.matchAt+=V(D)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const D=this.regexes.map(k=>k[1]);this.matcherRe=d(y(D,{joinWith:"|"}),!0),this.lastIndex=0}exec(D){this.matcherRe.lastIndex=this.lastIndex;const k=this.matcherRe.exec(D);if(!k)return null;const te=k.findIndex((yn,pt)=>pt>0&&yn!==void 0),Y=this.matchIndexes[te];return k.splice(0,te),Object.assign(k,Y)}}class A{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(D){if(this.multiRegexes[D])return this.multiRegexes[D];const k=new g;return this.rules.slice(D).forEach(([te,Y])=>k.addRule(te,Y)),k.compile(),this.multiRegexes[D]=k,k}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(D,k){this.rules.push([D,k]),k.type==="begin"&&this.count++}exec(D){const k=this.getMatcher(this.regexIndex);k.lastIndex=this.lastIndex;let te=k.exec(D);if(this.resumingScanAtSamePosition()&&!(te&&te.index===this.lastIndex)){const Y=this.getMatcher(0);Y.lastIndex=this.lastIndex+1,te=Y.exec(D)}return te&&(this.regexIndex+=te.position+1,this.regexIndex===this.count&&this.considerAll()),te}}function X(R){const D=new A;return R.contains.forEach(k=>D.addRule(k.begin,{rule:k,type:"begin"})),R.terminatorEnd&&D.addRule(R.terminatorEnd,{type:"end"}),R.illegal&&D.addRule(R.illegal,{type:"illegal"}),D}function J(R,D){const k=R;if(R.isCompiled)return k;[yo,Do,Co,Ro].forEach(Y=>Y(R,D)),i.compilerExtensions.forEach(Y=>Y(R,D)),R.__beforeBegin=null,[wo,Eo,xo].forEach(Y=>Y(R,D)),R.isCompiled=!0;let te=null;return typeof R.keywords=="object"&&R.keywords.$pattern&&(R.keywords=Object.assign({},R.keywords),te=R.keywords.$pattern,delete R.keywords.$pattern),te=te||/\w+/,R.keywords&&(R.keywords=Yt(R.keywords,i.case_insensitive)),k.keywordPatternRe=d(te,!0),D&&(R.begin||(R.begin=/\B|\b/),k.beginRe=d(k.begin),!R.end&&!R.endsWithParent&&(R.end=/\B|\b/),R.end&&(k.endRe=d(k.end)),k.terminatorEnd=_(k.end)||"",R.endsWithParent&&D.terminatorEnd&&(k.terminatorEnd+=(R.end?"|":"")+D.terminatorEnd)),R.illegal&&(k.illegalRe=d(R.illegal)),R.contains||(R.contains=[]),R.contains=[].concat(...R.contains.map(function(Y){return Io(Y==="self"?R:Y)})),R.contains.forEach(function(Y){J(Y,k)}),R.starts&&J(R.starts,D),k.matcher=X(k),k}if(i.compilerExtensions||(i.compilerExtensions=[]),i.contains&&i.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return i.classNameAliases=r(i.classNameAliases||{}),J(i)}function nr(i){return i?i.endsWithParent||nr(i.starts):!1}function Io(i){return i.variants&&!i.cachedVariants&&(i.cachedVariants=i.variants.map(function(d){return r(i,{variants:null},d)})),i.cachedVariants?i.cachedVariants:nr(i)?r(i,{starts:i.starts?r(i.starts):null}):Object.isFrozen(i)?r(i):i}var Lo="11.11.1";class Po extends Error{constructor(d,g){super(d),this.name="HTMLInjectionError",this.html=g}}const mt=t,tr=r,rr=Symbol("nomatch"),zo=7,or=function(i){const d=Object.create(null),g=Object.create(null),A=[];let X=!0;const J="Could not find the language '{}', did you forget to load/include a language module?",R={disableAutodetect:!0,name:"Plain text",contains:[]};let D={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:v};function k(m){return D.noHighlightRe.test(m)}function te(m){let S=m.className+" ";S+=m.parentNode?m.parentNode.className:"";const P=D.languageDetectRe.exec(S);if(P){const U=je(P[1]);return U||(Qt(J.replace("{}",P[1])),Qt("Falling back to no-highlight mode for this block.",m)),U?P[1]:"no-highlight"}return S.split(/\s+/).find(U=>k(U)||je(U))}function Y(m,S,P){let U="",Q="";typeof S=="object"?(U=m,P=S.ignoreIllegals,Q=S.language):(tn("10.7.0","highlight(lang, code, ...args) has been deprecated."),tn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),Q=m,U=S),P===void 0&&(P=!0);const xe={code:U,language:Q};Pn("before:highlight",xe);const $e=xe.result?xe.result:yn(xe.language,xe.code,P);return $e.code=xe.code,Pn("after:highlight",$e),$e}function yn(m,S,P,U){const Q=Object.create(null);function xe(w,T){return w.keywords[T]}function $e(){if(!C.keywords){re.addText(H);return}let w=0;C.keywordPatternRe.lastIndex=0;let T=C.keywordPatternRe.exec(H),I="";for(;T;){I+=H.substring(w,T.index);const B=ke.case_insensitive?T[0].toLowerCase():T[0],oe=xe(C,B);if(oe){const[Le,ns]=oe;if(re.addText(I),I="",Q[B]=(Q[B]||0)+1,Q[B]<=zo&&(Vn+=ns),Le.startsWith("_"))I+=T[0];else{const ts=ke.classNameAliases[Le]||Le;Ne(T[0],ts)}}else I+=T[0];w=C.keywordPatternRe.lastIndex,T=C.keywordPatternRe.exec(H)}I+=H.substring(w),re.addText(I)}function zn(){if(H==="")return;let w=null;if(typeof C.subLanguage=="string"){if(!d[C.subLanguage]){re.addText(H);return}w=yn(C.subLanguage,H,!0,dr[C.subLanguage]),dr[C.subLanguage]=w._top}else w=gt(H,C.subLanguage.length?C.subLanguage:null);C.relevance>0&&(Vn+=w.relevance),re.__addSublanguage(w._emitter,w.language)}function me(){C.subLanguage!=null?zn():$e(),H=""}function Ne(w,T){w!==""&&(re.startScope(T),re.addText(w),re.endScope())}function lr(w,T){let I=1;const B=T.length-1;for(;I<=B;){if(!w._emit[I]){I++;continue}const oe=ke.classNameAliases[w[I]]||w[I],Le=T[I];oe?Ne(Le,oe):(H=Le,$e(),H=""),I++}}function cr(w,T){return w.scope&&typeof w.scope=="string"&&re.openNode(ke.classNameAliases[w.scope]||w.scope),w.beginScope&&(w.beginScope._wrap?(Ne(H,ke.classNameAliases[w.beginScope._wrap]||w.beginScope._wrap),H=""):w.beginScope._multi&&(lr(w.beginScope,T),H="")),C=Object.create(w,{parent:{value:C}}),C}function ur(w,T,I){let B=x(w.endRe,I);if(B){if(w["on:end"]){const oe=new n(w);w["on:end"](T,oe),oe.isMatchIgnored&&(B=!1)}if(B){for(;w.endsParent&&w.parent;)w=w.parent;return w}}if(w.endsWithParent)return ur(w.parent,T,I)}function Jo(w){return C.matcher.regexIndex===0?(H+=w[0],1):(wt=!0,0)}function Yo(w){const T=w[0],I=w.rule,B=new n(I),oe=[I.__beforeBegin,I["on:begin"]];for(const Le of oe)if(Le&&(Le(w,B),B.isMatchIgnored))return Jo(T);return I.skip?H+=T:(I.excludeBegin&&(H+=T),me(),!I.returnBegin&&!I.excludeBegin&&(H=T)),cr(I,w),I.returnBegin?0:T.length}function Zo(w){const T=w[0],I=S.substring(w.index),B=ur(C,w,I);if(!B)return rr;const oe=C;C.endScope&&C.endScope._wrap?(me(),Ne(T,C.endScope._wrap)):C.endScope&&C.endScope._multi?(me(),lr(C.endScope,w)):oe.skip?H+=T:(oe.returnEnd||oe.excludeEnd||(H+=T),me(),oe.excludeEnd&&(H=T));do C.scope&&re.closeNode(),!C.skip&&!C.subLanguage&&(Vn+=C.relevance),C=C.parent;while(C!==B.parent);return B.starts&&cr(B.starts,w),oe.returnEnd?0:T.length}function Qo(){const w=[];for(let T=C;T!==ke;T=T.parent)T.scope&&w.unshift(T.scope);w.forEach(T=>re.openNode(T))}let qn={};function fr(w,T){const I=T&&T[0];if(H+=w,I==null)return me(),0;if(qn.type==="begin"&&T.type==="end"&&qn.index===T.index&&I===""){if(H+=S.slice(T.index,T.index+1),!X){const B=new Error(`0 width match regex (${m})`);throw B.languageName=m,B.badRule=qn.rule,B}return 1}if(qn=T,T.type==="begin")return Yo(T);if(T.type==="illegal"&&!P){const B=new Error('Illegal lexeme "'+I+'" for mode "'+(C.scope||"<unnamed>")+'"');throw B.mode=C,B}else if(T.type==="end"){const B=Zo(T);if(B!==rr)return B}if(T.type==="illegal"&&I==="")return H+=`
`,1;if(yt>1e5&&yt>T.index*3)throw new Error("potential infinite loop, way more iterations than matches");return H+=I,I.length}const ke=je(m);if(!ke)throw Ye(J.replace("{}",m)),new Error('Unknown language: "'+m+'"');const es=Oo(ke);let bt="",C=U||es;const dr={},re=new D.__emitter(D);Qo();let H="",Vn=0,Ze=0,yt=0,wt=!1;try{if(ke.__emitTokens)ke.__emitTokens(S,re);else{for(C.matcher.considerAll();;){yt++,wt?wt=!1:C.matcher.considerAll(),C.matcher.lastIndex=Ze;const w=C.matcher.exec(S);if(!w)break;const T=S.substring(Ze,w.index),I=fr(T,w);Ze=w.index+I}fr(S.substring(Ze))}return re.finalize(),bt=re.toHTML(),{language:m,value:bt,relevance:Vn,illegal:!1,_emitter:re,_top:C}}catch(w){if(w.message&&w.message.includes("Illegal"))return{language:m,value:mt(S),illegal:!0,relevance:0,_illegalBy:{message:w.message,index:Ze,context:S.slice(Ze-100,Ze+100),mode:w.mode,resultSoFar:bt},_emitter:re};if(X)return{language:m,value:mt(S),illegal:!1,relevance:0,errorRaised:w,_emitter:re,_top:C};throw w}}function pt(m){const S={value:mt(m),illegal:!1,relevance:0,_top:R,_emitter:new D.__emitter(D)};return S._emitter.addText(m),S}function gt(m,S){S=S||D.languages||Object.keys(d);const P=pt(m),U=S.filter(je).filter(ar).map(me=>yn(me,m,!1));U.unshift(P);const Q=U.sort((me,Ne)=>{if(me.relevance!==Ne.relevance)return Ne.relevance-me.relevance;if(me.language&&Ne.language){if(je(me.language).supersetOf===Ne.language)return 1;if(je(Ne.language).supersetOf===me.language)return-1}return 0}),[xe,$e]=Q,zn=xe;return zn.secondBest=$e,zn}function qo(m,S,P){const U=S&&g[S]||P;m.classList.add("hljs"),m.classList.add(`language-${U}`)}function ht(m){let S=null;const P=te(m);if(k(P))return;if(Pn("before:highlightElement",{el:m,language:P}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(D.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),D.throwUnescapedHTML))throw new Po("One of your code blocks includes unescaped HTML.",m.innerHTML);S=m;const U=S.textContent,Q=P?Y(U,{language:P,ignoreIllegals:!0}):gt(U);m.innerHTML=Q.value,m.dataset.highlighted="yes",qo(m,P,Q.language),m.result={language:Q.language,re:Q.relevance,relevance:Q.relevance},Q.secondBest&&(m.secondBest={language:Q.secondBest.language,relevance:Q.secondBest.relevance}),Pn("after:highlightElement",{el:m,result:Q,text:U})}function Vo(m){D=tr(D,m)}const Bo=()=>{Ln(),tn("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function jo(){Ln(),tn("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let sr=!1;function Ln(){function m(){Ln()}if(document.readyState==="loading"){sr||window.addEventListener("DOMContentLoaded",m,!1),sr=!0;return}document.querySelectorAll(D.cssSelector).forEach(ht)}function $o(m,S){let P=null;try{P=S(i)}catch(U){if(Ye("Language definition for '{}' could not be registered.".replace("{}",m)),X)Ye(U);else throw U;P=R}P.name||(P.name=m),d[m]=P,P.rawDefinition=S.bind(null,i),P.aliases&&ir(P.aliases,{languageName:m})}function Uo(m){delete d[m];for(const S of Object.keys(g))g[S]===m&&delete g[S]}function Ho(){return Object.keys(d)}function je(m){return m=(m||"").toLowerCase(),d[m]||d[g[m]]}function ir(m,{languageName:S}){typeof m=="string"&&(m=[m]),m.forEach(P=>{g[P.toLowerCase()]=S})}function ar(m){const S=je(m);return S&&!S.disableAutodetect}function Go(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=S=>{m["before:highlightBlock"](Object.assign({block:S.el},S))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=S=>{m["after:highlightBlock"](Object.assign({block:S.el},S))})}function Ko(m){Go(m),A.push(m)}function Wo(m){const S=A.indexOf(m);S!==-1&&A.splice(S,1)}function Pn(m,S){const P=m;A.forEach(function(U){U[P]&&U[P](S)})}function Xo(m){return tn("10.7.0","highlightBlock will be removed entirely in v12.0"),tn("10.7.0","Please use highlightElement now."),ht(m)}Object.assign(i,{highlight:Y,highlightAuto:gt,highlightAll:Ln,highlightElement:ht,highlightBlock:Xo,configure:Vo,initHighlighting:Bo,initHighlightingOnLoad:jo,registerLanguage:$o,unregisterLanguage:Uo,listLanguages:Ho,getLanguage:je,registerAliases:ir,autoDetection:ar,inherit:tr,addPlugin:Ko,removePlugin:Wo}),i.debugMode=function(){X=!1},i.safeMode=function(){X=!0},i.versionString=Lo,i.regex={concat:N,lookahead:f,either:L,optional:b,anyNumberOfTimes:h};for(const m in On)typeof On[m]=="object"&&e(On[m]);return Object.assign(i,On),i},rn=or({});return rn.newInstance=()=>or({}),Tt=rn,rn.HighlightJS=rn,rn.default=rn,Tt}var I_=O_();const Nr=C_(I_);var L_=ue("<pre><code><!></code></pre>");function P_(e,n){const t=et(n,["children","$$slots","$$events","$$legacy"]),r=et(t,["code","highlighted","languageName","langtag"]);let o=Ke(n,"code",8),s=Ke(n,"highlighted",8),a=Ke(n,"languageName",8,"plaintext"),c=Ke(n,"langtag",8,!1);var l=L_();let u;var v=q(l);Sn(v,1,"",null,{},{hljs:!0});var _=q(v);{var f=b=>{var N=Zn(),F=an(N);hi(F,s),G(b,N)},h=b=>{var N=It();he(()=>qe(N,o())),G(b,N)};Ue(_,b=>{s()?b(f):b(h,!1)})}he(b=>u=Ri(l,u,{"data-language":a(),...r,[xn]:b},"svelte-1w9vok"),[()=>({langtag:c()})],Ut),G(e,l)}function z_(e,n){const t=et(n,["children","$$slots","$$events","$$legacy"]),r=et(t,["language","code","langtag"]);_n(n,!1);let o=Ke(n,"language",8),s=Ke(n,"code",8),a=Ke(n,"langtag",8,!1);const c=Ai();let l=Ht("");Ci(()=>{E(l)&&c("highlight",{highlighted:E(l)})}),js(()=>(At(o()),At(s())),()=>{Nr.registerLanguage(o().name,o().register),Z(l,Nr.highlight(s(),{language:o().name}).value)}),$s(),mo();var u=Zn(),v=an(u);bi(v,n,"default",{get highlighted(){return E(l)}},_=>{P_(_,Ni(()=>r,{get languageName(){return o().name},get langtag(){return a()},get highlighted(){return E(l)},get code(){return s()}}))}),G(e,u),vn()}function q_(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",s={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},a={keywords:s,illegal:/<\//},c={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},l={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},u={className:"subst",begin:/\$\(/,end:/\)/,keywords:s},v={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,u,v],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},f={className:"string",contains:[e.BACKSLASH_ESCAPE,u,v],begin:"`",end:"`"},h={className:"meta",begin:"@"+n},b={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return a.name="Julia",a.contains=[c,l,_,f,h,b,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],u.contains=a.contains,a}const V_={name:"julia",register:q_};function po(e){let n,t,r;if(e<.5){const o=e*2;n=Math.round(34+o*166),t=Math.round(197+o*-17),r=Math.round(94+o*-94)}else{const o=(e-.5)*2;n=Math.round(200+o*20),t=Math.round(180-o*180),r=Math.round(0+o*30)}return[n,t,r]}function B_(e,n,t){if(typeof e!="number")return"";const r=[...n.values()].filter(b=>typeof b=="number");if(r.length<2)return"";const o=Math.min(...r),s=Math.max(...r),a=Math.log(Math.max(o,.001)),c=Math.log(Math.max(s,.001));if(c===a)return"";const l=Math.log(Math.max(e,.001)),u=Math.max(0,Math.min(1,(l-a)/(c-a))),[v,_,f]=po(u);return`background-color: rgba(${v}, ${_}, ${f}, ${t==="dark"?.3:.25})`}function j_(e,n=10){const t=e==="dark"?.5:.4,r=[];for(let o=0;o<=n;o++){const s=o/n,[a,c,l]=po(s);r.push(`rgba(${a}, ${c}, ${l}, ${t})`)}return r}const $_=[{url:"https://github.com/EnzymeAD/Enzyme.jl/issues/1995",affects:[["assume_mvnormal","EnzymeFwd"],["assume_wishart","EnzymeFwd"]]},{url:"https://github.com/chalk-lab/Mooncake.jl/issues/570",affects:[["multithreaded","MooncakeFwd"],["multithreaded","MooncakeRvs"]]}],U_=[],go=new Map;for(const e of $_)for(const[n,t]of e.affects)go.set(`${n}__${t}`,e.url);const ho=new Map;for(const e of U_)for(const[n,t]of e.affects)ho.set(`${n}__${t}`,e.value);function kr(e,n){return go.get(`${e}__${n}`)}function H_(e,n){return ho.get(`${e}__${n}`)}var G_=(e,n,t)=>n(E(t)),K_=ue('<th class="sortable svelte-6nl5bt" title="Click to sort"> <span class="sort-indicator svelte-6nl5bt"><!></span></th>'),W_=ue('<td class="svelte-6nl5bt"> </td>'),X_=ue('<a class="issue svelte-6nl5bt" target="_blank">(?)</a>'),J_=ue('<td class="svelte-6nl5bt"><!> <span> </span></td>'),Y_=(e,n,t,r)=>n(t.modelDefinitions[r()]),Z_=dt('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'),Q_=dt('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'),e0=ue('<tr class="definition-row svelte-6nl5bt"><td class="svelte-6nl5bt"><div class="definition-content svelte-6nl5bt"><div class="code-wrapper svelte-6nl5bt"><!></div> <button class="copy-btn svelte-6nl5bt" aria-label="Copy to clipboard" title="Copy code"><!></button></div></td></tr>'),n0=ue("<tr><!><!></tr> <!>",1),t0=ue('<div class="table-scroll svelte-6nl5bt"><table class="svelte-6nl5bt"><thead><tr class="svelte-6nl5bt"><th class="model-col-header svelte-6nl5bt">Model</th><!></tr></thead><tbody></tbody></table></div>');function r0(e,n){_n(n,!0);const t=sn(()=>[...n.data.keys()]),r=sn(()=>n.data.size>0?[...n.data.get(E(t)[0]).keys()]:[]);let o=ge(Pe({column:null,direction:null})),s=ge(null),a=ge(!1);function c(F){navigator.clipboard.writeText(F),Z(a,!0),setTimeout(()=>{Z(a,!1)},2e3)}function l(F){E(o).column!==F?Z(o,{column:F,direction:"asc"},!0):E(o).direction==="asc"?Z(o,{column:F,direction:"desc"},!0):Z(o,{column:null,direction:null},!0)}const u=sn(()=>{const F=Lt(n.data);if(!E(o).column||!E(o).direction)return F;const L=E(o).column,V=E(o).direction;return[...F].sort(([,x],[,p])=>{const y=x.get(L),z=p.get(L),M=typeof y=="number",O=typeof z=="number";return!M&&!O?0:M?O?V==="asc"?y-z:z-y:-1:1})});var v=t0(),_=q(v),f=q(_),h=q(f),b=se(q(h));Mn(b,17,()=>E(r),Rn,(F,L)=>{var V=K_();V.__click=[G_,l,L];var x=q(V),p=se(x),y=q(p);{var z=M=>{var O=Zn(),W=an(O);{var fe=ne=>{var de=It("▲");G(ne,de)},ee=ne=>{var de=It("▼");G(ne,de)};Ue(W,ne=>{E(o).direction==="asc"?ne(fe):ne(ee,!1)})}G(M,O)};Ue(y,M=>{E(o).column===E(L)&&M(z)})}he(()=>qe(x,`${E(L)??""} `)),G(F,V)});var N=se(f);Mn(N,21,()=>E(u),Rn,(F,L,V)=>{let x=()=>E(L)[0],p=()=>E(L)[1];var y=n0(),z=an(y);Sn(z,1,"svelte-6nl5bt",null,{},{alt:V%2===1});var M=q(z);A_(M,{get name(){return x()},onToggle:()=>Z(s,E(s)===x()?null:x(),!0)});var O=se(M);Mn(O,17,()=>Lt(p()),Rn,(ee,ne)=>{let de=()=>E(ne)[0],ye=()=>E(ne)[1];var Me=Zn();const ve=sn(()=>H_(x(),de())??ye());var Te=an(Me);{var De=Fe=>{var ie=W_(),Se=q(ie);he((hn,nn)=>{Jt(ie,hn),qe(Se,nn)},[()=>B_(E(ve),p(),n.theme),()=>E(ve).toFixed(3)]),G(Fe,ie)},gn=Fe=>{var ie=J_(),Se=q(ie);{var hn=bn=>{var Cn=X_();he(vt=>Qn(Cn,"href",vt),[()=>kr(x(),de())]),G(bn,Cn)};Ue(Se,bn=>{kr(x(),de())&&bn(hn)})}var nn=se(Se,2),_t=q(nn);he(()=>{Sn(nn,1,co(E(ve)==="NaN"?"nan":E(ve)),"svelte-6nl5bt"),qe(_t,E(ve))}),G(Fe,ie)};Ue(Te,Fe=>{typeof E(ve)=="number"?Fe(De):Fe(gn,!1)})}G(ee,Me)});var W=se(z,2);{var fe=ee=>{var ne=e0(),de=q(ne),ye=q(de),Me=q(ye),ve=q(Me);z_(ve,{language:V_,get code(){return n.modelDefinitions[x()]}});var Te=se(Me,2);Te.__click=[Y_,c,n,x];var De=q(Te);{var gn=ie=>{var Se=Z_();G(ie,Se)},Fe=ie=>{var Se=Q_();G(ie,Se)};Ue(De,ie=>{E(a)?ie(gn):ie(Fe,!1)})}he(()=>{Qn(de,"colspan",E(r).length+1),Te.disabled=E(a)}),G(ee,ne)};Ue(W,ee=>{E(s)===x()&&ee(fe)})}G(F,y)}),G(e,v),vn()}ft(["click"]);var o0=ue('<div class="legend svelte-10rqhbc"><div class="gradient-section svelte-10rqhbc"><span class="label svelte-10rqhbc">Faster</span> <div class="gradient-bar svelte-10rqhbc"></div> <span class="label svelte-10rqhbc">Slower</span></div> <div class="divider svelte-10rqhbc"></div> <div class="status-labels svelte-10rqhbc"><span class="status error svelte-10rqhbc">error</span> <span class="status wrong svelte-10rqhbc">wrong</span> <span class="status nan svelte-10rqhbc">NaN</span></div></div>');function s0(e,n){_n(n,!0);const t=sn(()=>()=>`linear-gradient(to right, ${j_(n.theme).join(", ")})`);var r=o0(),o=q(r),s=se(q(o),2);he(a=>Jt(s,`background: ${a??""}`),[()=>E(t)()]),G(e,r),vn()}function i0(e,n){Z(n,E(n)==="light"?"dark":"light",!0),document.documentElement.setAttribute("data-theme",E(n)),localStorage.setItem("theme",E(n))}var a0=dt('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'),l0=dt('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'),c0=ue('<h3 class="category-heading svelte-1wqfdel"> </h3> <!>',1),u0=ue('<p class="no-results svelte-1wqfdel"> </p>'),f0=ue(`<div id="main-wrapper" class="svelte-1wqfdel"><main class="svelte-1wqfdel"><div class="header svelte-1wqfdel"><div class="title-area svelte-1wqfdel"><h1 class="svelte-1wqfdel">Turing AD tests</h1> <nav class="nav-links svelte-1wqfdel"><a href="https://turinglang.org/docs" class="svelte-1wqfdel">Turing.jl Docs</a> <a href="https://github.com/TuringLang/Turing.jl" class="svelte-1wqfdel">Turing.jl GitHub</a> <a href="https://github.com/TuringLang/ADTests" class="svelte-1wqfdel">ADTests GitHub</a></nav></div> <button class="theme-toggle svelte-1wqfdel" aria-label="Toggle Dark Mode" title="Toggle theme"><!></button></div> <p class="intro svelte-1wqfdel">A comparison of how different AD backends perform on <a href="https://turinglang.org/docs">Turing.jl</a> models.
            This does not imply any endorsement; for general AD comparisons see <a href="https://github.com/gradbench/gradbench" target="_blank">GradBench</a>.</p> <div class="info-card svelte-1wqfdel"><h4 class="svelte-1wqfdel">Reading the table</h4> <ul class="svelte-1wqfdel"><li class="svelte-1wqfdel">Click model names to see their definitions.</li> <li class="svelte-1wqfdel"><b>Numbers</b> = gradient time / primal time. <b>Smaller is faster.</b></li> <li class="svelte-1wqfdel"><span class="wrong svelte-1wqfdel">wrong</span> = AD ran but gave an incorrect result
                    (compared against FiniteDifferences).</li> <li class="svelte-1wqfdel"><span class="error svelte-1wqfdel">error</span> = AD failed to run.</li> <li class="svelte-1wqfdel"><span class="issue-example svelte-1wqfdel">(?)</span> links to a GitHub issue describing the problem.</li></ul></div> <div class="warning svelte-1wqfdel">Note: Results are from Julia 1.11.</div> <div class="results-header svelte-1wqfdel"><h2 class="svelte-1wqfdel">Results</h2> <a class="download-link svelte-1wqfdel" href="adtests.json" target="_blank" download=""><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> JSON</a></div> <div class="controls svelte-1wqfdel"><input type="search" class="search-input svelte-1wqfdel" placeholder="Filter models..."> <!></div> <!> <h2>Manifest</h2> <p class="secondary-text svelte-1wqfdel">Package versions used for the tests above:</p> <!></main></div>`);function d0(e,n){_n(n,!0);const t=typeof document<"u"&&(localStorage.getItem("theme")||document.documentElement.getAttribute("data-theme"))||"light";typeof document<"u"&&document.documentElement.setAttribute("data-theme",t);let r=ge(Pe(t)),o=new Map;for(const[p,y]of Object.entries(Oa)){let z=y.__category__;delete y.__category__;let M=new Map;for(const[O,W]of Object.entries(y))M.set(O,W);o.has(z)||o.set(z,new Map),o.get(z).set(p,M)}let s=new Map([...o.entries()].sort()),a=ge("");const c=sn(()=>{const p=E(a).trim().toLowerCase();if(!p)return s;const y=new Map;for(const[z,M]of s){const O=new Map;for(const[W,fe]of M)W.toLowerCase().includes(p)&&O.set(W,fe);O.size>0&&y.set(z,O)}return y});var l=f0(),u=q(l),v=q(u),_=se(q(v),2);_.__click=[i0,r];var f=q(_);{var h=p=>{var y=a0();G(p,y)},b=p=>{var y=l0();G(p,y)};Ue(f,p=>{E(r)==="dark"?p(h):p(b,!1)})}var N=se(v,10),F=q(N),L=se(F,2);s0(L,{get theme(){return E(r)}});var V=se(N,2);Mn(V,17,()=>E(c).entries(),Rn,(p,y)=>{let z=()=>E(y)[0],M=()=>E(y)[1];var O=c0(),W=an(O),fe=q(W),ee=se(W,2);r0(ee,{get data(){return M()},modelDefinitions:Cl,get theme(){return E(r)}}),he(()=>qe(fe,z())),G(p,O)},p=>{var y=u0(),z=q(y);he(()=>qe(z,`No models match "${E(a)??""}".`)),G(p,y)});var x=se(V,6);N_(x,{}),Mi(F,()=>E(a),p=>Z(a,p)),G(e,l),vn()}ft(["click"]);fi(d0,{target:document.getElementById("app")});
