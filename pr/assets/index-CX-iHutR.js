(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const _r=!1;var nt=Array.isArray,os=Array.prototype.indexOf,Lt=Array.from,ss=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,Ar=Object.getOwnPropertyDescriptors,is=Object.prototype,as=Array.prototype,Bt=Object.getPrototypeOf,mr=Object.isExtensible;function wn(e){return typeof e=="function"}function ls(e){return e()}function Nt(e){for(var n=0;n<e.length;n++)e[n]()}const Re=2,Pr=4,tt=8,zt=16,Ve=32,dn=64,Un=128,be=256,Hn=512,ce=1024,Pe=2048,Je=4096,Be=8192,rt=16384,cs=32768,qt=65536,us=1<<17,fs=1<<19,Or=1<<20,Tt=1<<21,Qe=Symbol("$state"),Ir=Symbol("legacy props"),ds=Symbol("");function Lr(e){return e===this.v}function _s(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Vt(e){return!_s(e,this.v)}function ms(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ps(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function vs(e){throw new Error("https://svelte.dev/e/effect_orphan")}function gs(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function hs(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function bs(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ys(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ws(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ds(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let kn=!1,Es=!1;function xs(){kn=!0}const jt=1,$t=2,Br=4,Rs=8,Ms=16,Fs=1,Ns=2,zr=4,Ts=8,ks=16,Ss=1,Cs=2,_e=Symbol(),As="http://www.w3.org/1999/xhtml",Ps="@attach";function qr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let K=null;function pr(e){K=e}function _n(e,n=!1,t){var r=K={p:K,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};kn&&!n&&(K.l={s:null,u:null,r1:[],r2:cn(!1)}),qs(()=>{r.d=!0})}function mn(e){const n=K;if(n!==null){const a=n.e;if(a!==null){var t=j,r=$;n.e=null;try{for(var o=0;o<a.length;o++){var s=a[o];We(s.effect),Oe(s.reaction),Gt(s.fn)}}finally{We(t),Oe(r)}}K=n.p,n.m=!0}return{}}function Sn(){return!kn||K!==null&&K.l===null}function Le(e){if(typeof e!="object"||e===null||Qe in e)return e;const n=Bt(e);if(n!==is&&n!==as)return e;var t=new Map,r=nt(e),o=ge(0),s=$,a=c=>{var l=$;Oe(s);var u=c();return Oe(l),u};return r&&t.set("length",ge(e.length)),new Proxy(e,{defineProperty(c,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&ys();var m=t.get(l);return m===void 0?(m=a(()=>ge(u.value)),t.set(l,m)):Z(m,a(()=>Le(u.value))),!0},deleteProperty(c,l){var u=t.get(l);if(u===void 0)l in c&&(t.set(l,a(()=>ge(_e))),Dt(o));else{if(r&&typeof l=="string"){var m=t.get("length"),_=Number(l);Number.isInteger(_)&&_<m.v&&Z(m,_)}Z(u,_e),Dt(o)}return!0},get(c,l,u){var h;if(l===Qe)return e;var m=t.get(l),_=l in c;if(m===void 0&&(!_||(h=Xe(c,l))!=null&&h.writable)&&(m=a(()=>ge(Le(_?c[l]:_e))),t.set(l,m)),m!==void 0){var f=D(m);return f===_e?void 0:f}return Reflect.get(c,l,u)},getOwnPropertyDescriptor(c,l){var u=Reflect.getOwnPropertyDescriptor(c,l);if(u&&"value"in u){var m=t.get(l);m&&(u.value=D(m))}else if(u===void 0){var _=t.get(l),f=_==null?void 0:_.v;if(_!==void 0&&f!==_e)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return u},has(c,l){var f;if(l===Qe)return!0;var u=t.get(l),m=u!==void 0&&u.v!==_e||Reflect.has(c,l);if(u!==void 0||j!==null&&(!m||(f=Xe(c,l))!=null&&f.writable)){u===void 0&&(u=a(()=>ge(m?Le(c[l]):_e)),t.set(l,u));var _=D(u);if(_===_e)return!1}return m},set(c,l,u,m){var q;var _=t.get(l),f=l in c;if(r&&l==="length")for(var h=u;h<_.v;h+=1){var b=t.get(h+"");b!==void 0?Z(b,_e):h in c&&(b=a(()=>ge(_e)),t.set(h+"",b))}_===void 0?(!f||(q=Xe(c,l))!=null&&q.writable)&&(_=a(()=>ge(void 0)),Z(_,a(()=>Le(u))),t.set(l,_)):(f=_.v!==_e,Z(_,a(()=>Le(u))));var k=Reflect.getOwnPropertyDescriptor(c,l);if(k!=null&&k.set&&k.set.call(m,u),!f){if(r&&typeof l=="string"){var F=t.get("length"),I=Number(l);Number.isInteger(I)&&I>=F.v&&Z(F,I+1)}Dt(o)}return!0},ownKeys(c){D(o);var l=Reflect.ownKeys(c).filter(_=>{var f=t.get(_);return f===void 0||f.v!==_e});for(var[u,m]of t)m.v!==_e&&!(u in c)&&l.push(u);return l},setPrototypeOf(){ws()}})}function Dt(e,n=1){Z(e,e.v+n)}function ln(e){var n=Re|Pe,t=$!==null&&($.f&Re)!==0?$:null;return j===null||t!==null&&(t.f&be)!==0?n|=be:j.f|=Or,{ctx:K,deps:null,effects:null,equals:Lr,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??j}}function sn(e){const n=ln(e);return no(n),n}function Ut(e){const n=ln(e);return n.equals=Vt,n}function Vr(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)qe(n[t])}}function Os(e){for(var n=e.parent;n!==null;){if((n.f&Re)===0)return n;n=n.parent}return null}function jr(e){var n,t=j;We(Os(e));try{Vr(e),n=so(e)}finally{We(t)}return n}function $r(e){var n=jr(e),t=(Ge||(e.f&be)!==0)&&e.deps!==null?Je:ce;De(e,t),e.equals(n)||(e.v=n,e.wv=ro())}const Fn=new Map;function cn(e,n){var t={f:0,v:e,reactions:null,equals:Lr,rv:0,wv:0};return t}function ge(e,n){const t=cn(e);return no(t),t}function Ht(e,n=!1){var r;const t=cn(e);return n||(t.equals=Vt),kn&&K!==null&&K.l!==null&&((r=K.l).s??(r.s=[])).push(t),t}function Z(e,n,t=!1){$!==null&&!Ce&&Sn()&&($.f&(Re|zt))!==0&&!(le!=null&&le.includes(e))&&Ds();let r=t?Le(n):n;return kt(e,r)}function kt(e,n){if(!e.equals(n)){var t=e.v;Cn?Fn.set(e,n):Fn.set(e,t),e.v=n,(e.f&Re)!==0&&((e.f&Pe)!==0&&jr(e),De(e,(e.f&be)===0?ce:Je)),e.wv=ro(),Ur(e,Pe),Sn()&&j!==null&&(j.f&ce)!==0&&(j.f&(Ve|dn))===0&&(we===null?Ks([e]):we.push(e))}return n}function vr(e,n=1){var t=D(e),r=n===1?t++:t--;return Z(e,t),r}function Ur(e,n){var t=e.reactions;if(t!==null)for(var r=Sn(),o=t.length,s=0;s<o;s++){var a=t[s],c=a.f;(c&Pe)===0&&(!r&&a===j||(De(a,n),(c&(ce|be))!==0&&((c&Re)!==0?Ur(a,Je):ut(a))))}}let Is=!1;var gr,Hr,Gr,Kr;function Ls(){if(gr===void 0){gr=window,Hr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Gr=Xe(n,"firstChild").get,Kr=Xe(n,"nextSibling").get,mr(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),mr(t)&&(t.__t=void 0)}}function ot(e=""){return document.createTextNode(e)}function Ae(e){return Gr.call(e)}function st(e){return Kr.call(e)}function z(e,n){return Ae(e)}function an(e,n){{var t=Ae(e);return t instanceof Comment&&t.data===""?st(t):t}}function se(e,n=1,t=!1){let r=e;for(;n--;)r=st(r);return r}function Bs(e){e.textContent=""}function Xr(e){j===null&&$===null&&vs(),$!==null&&($.f&be)!==0&&j===null&&ps(),Cn&&ms()}function zs(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function pn(e,n,t,r=!0){var o=j,s={ctx:K,deps:null,nodes_start:null,nodes_end:null,f:e|Pe,first:null,fn:n,last:null,next:null,parent:o,prev:null,teardown:null,transitions:null,wv:0};if(t)try{ct(s),s.f|=cs}catch(l){throw qe(s),l}else n!==null&&ut(s);var a=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(Or|Un))===0;if(!a&&r&&(o!==null&&zs(s,o),$!==null&&($.f&Re)!==0)){var c=$;(c.effects??(c.effects=[])).push(s)}return s}function qs(e){const n=pn(tt,null,!1);return De(n,ce),n.teardown=e,n}function hr(e){Xr();var n=j!==null&&(j.f&Ve)!==0&&K!==null&&!K.m;if(n){var t=K;(t.e??(t.e=[])).push({fn:e,effect:j,reaction:$})}else{var r=Gt(e);return r}}function Vs(e){return Xr(),it(e)}function js(e){const n=pn(dn,e,!0);return(t={})=>new Promise(r=>{t.outro?Gn(n,()=>{qe(n),r(void 0)}):(qe(n),r(void 0))})}function Gt(e){return pn(Pr,e,!1)}function $s(e,n){var t=K,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=it(()=>{e(),!r.ran&&(r.ran=!0,Z(t.l.r2,!0),Nn(n))})}function Us(){var e=K;it(()=>{if(D(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&ce)!==0&&De(t,Je),vn(t)&&ct(t),n.ran=!1}e.l.r2.v=!1}})}function it(e){return pn(tt,e,!0)}function he(e,n=[],t=ln){const r=n.map(t);return at(()=>e(...r.map(D)))}function at(e,n=0){return pn(tt|zt|n,e,!0)}function un(e,n=!0){return pn(tt|Ve,e,!0,n)}function Wr(e){var n=e.teardown;if(n!==null){const t=Cn,r=$;br(!0),Oe(null);try{n.call(null)}finally{br(t),Oe(r)}}}function Jr(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&dn)!==0?t.parent=null:qe(t,n),t=r}}function Hs(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&Ve)===0&&qe(n),n=t}}function qe(e,n=!0){var t=!1;(n||(e.f&fs)!==0)&&e.nodes_start!==null&&(Yr(e.nodes_start,e.nodes_end),t=!0),Jr(e,n&&!t),Yn(e,0),De(e,rt);var r=e.transitions;if(r!==null)for(const s of r)s.stop();Wr(e);var o=e.parent;o!==null&&o.first!==null&&Zr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Yr(e,n){for(;e!==null;){var t=e===n?null:st(e);e.remove(),e=t}}function Zr(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function Gn(e,n){var t=[];Kt(e,t,!0),Qr(t,()=>{qe(e),n&&n()})}function Qr(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var o of e)o.out(r)}else n()}function Kt(e,n,t){if((e.f&Be)===0){if(e.f^=Be,e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&n.push(a);for(var r=e.first;r!==null;){var o=r.next,s=(r.f&qt)!==0||(r.f&Ve)!==0;Kt(r,n,s?t:!1),r=o}}}function Kn(e){eo(e,!0)}function eo(e,n){if((e.f&Be)!==0){e.f^=Be,(e.f&ce)===0&&(e.f^=ce),vn(e)&&(De(e,Pe),ut(e));for(var t=e.first;t!==null;){var r=t.next,o=(t.f&qt)!==0||(t.f&Ve)!==0;eo(t,o?n:!1),t=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&s.in()}}let Xn=[];function Gs(){var e=Xn;Xn=[],Nt(e)}function Xt(e){Xn.length===0&&queueMicrotask(Gs),Xn.push(e)}let jn=!1,St=!1,Wn=null,en=!1,Cn=!1;function br(e){Cn=e}let $n=[];let $=null,Ce=!1;function Oe(e){$=e}let j=null;function We(e){j=e}let le=null;function no(e){$!==null&&$.f&Tt&&(le===null?le=[e]:le.push(e))}let ae=null,ve=0,we=null;function Ks(e){we=e}let to=1,Jn=0,Ge=!1;function ro(){return++to}function vn(e){var _;var n=e.f;if((n&Pe)!==0)return!0;if((n&Je)!==0){var t=e.deps,r=(n&be)!==0;if(t!==null){var o,s,a=(n&Hn)!==0,c=r&&j!==null&&!Ge,l=t.length;if(a||c){var u=e,m=u.parent;for(o=0;o<l;o++)s=t[o],(a||!((_=s==null?void 0:s.reactions)!=null&&_.includes(u)))&&(s.reactions??(s.reactions=[])).push(u);a&&(u.f^=Hn),c&&m!==null&&(m.f&be)===0&&(u.f^=be)}for(o=0;o<l;o++)if(s=t[o],vn(s)&&$r(s),s.wv>e.wv)return!0}(!r||j!==null&&!Ge)&&De(e,ce)}return!1}function Xs(e,n){for(var t=n;t!==null;){if((t.f&Un)!==0)try{t.fn(e);return}catch{t.f^=Un}t=t.parent}throw jn=!1,e}function yr(e){return(e.f&rt)===0&&(e.parent===null||(e.parent.f&Un)===0)}function lt(e,n,t,r){if(jn){if(t===null&&(jn=!1),yr(n))throw e;return}if(t!==null&&(jn=!0),Xs(e,n),yr(n))throw e}function oo(e,n,t=!0){var r=e.reactions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];le!=null&&le.includes(e)||((s.f&Re)!==0?oo(s,n,!1):n===s&&(t?De(s,Pe):(s.f&ce)!==0&&De(s,Je),ut(s)))}}function so(e){var h;var n=ae,t=ve,r=we,o=$,s=Ge,a=le,c=K,l=Ce,u=e.f;ae=null,ve=0,we=null,Ge=(u&be)!==0&&(Ce||!en||$===null),$=(u&(Ve|dn))===0?e:null,le=null,pr(e.ctx),Ce=!1,Jn++,e.f|=Tt;try{var m=(0,e.fn)(),_=e.deps;if(ae!==null){var f;if(Yn(e,ve),_!==null&&ve>0)for(_.length=ve+ae.length,f=0;f<ae.length;f++)_[ve+f]=ae[f];else e.deps=_=ae;if(!Ge)for(f=ve;f<_.length;f++)((h=_[f]).reactions??(h.reactions=[])).push(e)}else _!==null&&ve<_.length&&(Yn(e,ve),_.length=ve);if(Sn()&&we!==null&&!Ce&&_!==null&&(e.f&(Re|Je|Pe))===0)for(f=0;f<we.length;f++)oo(we[f],e);return o!==null&&o!==e&&(Jn++,we!==null&&(r===null?r=we:r.push(...we))),m}finally{ae=n,ve=t,we=r,$=o,Ge=s,le=a,pr(c),Ce=l,e.f^=Tt}}function Ws(e,n){let t=n.reactions;if(t!==null){var r=os.call(t,e);if(r!==-1){var o=t.length-1;o===0?t=n.reactions=null:(t[r]=t[o],t.pop())}}t===null&&(n.f&Re)!==0&&(ae===null||!ae.includes(n))&&(De(n,Je),(n.f&(be|Hn))===0&&(n.f^=Hn),Vr(n),Yn(n,0))}function Yn(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Ws(e,t[r])}function ct(e){var n=e.f;if((n&rt)===0){De(e,ce);var t=j,r=K,o=en;j=e,en=!0;try{(n&zt)!==0?Hs(e):Jr(e),Wr(e);var s=so(e);e.teardown=typeof s=="function"?s:null,e.wv=to;var a=e.deps,c;_r&&Es&&e.f&Pe}catch(l){lt(l,e,t,r||e.ctx)}finally{en=o,j=t}}}function Js(){try{gs()}catch(e){if(Wn!==null)lt(e,Wn,null);else throw e}}function Ys(){var e=en;try{var n=0;for(en=!0;$n.length>0;){n++>1e3&&Js();var t=$n,r=t.length;$n=[];for(var o=0;o<r;o++){var s=Qs(t[o]);Zs(s)}Fn.clear()}}finally{St=!1,en=e,Wn=null}}function Zs(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(rt|Be))===0)try{vn(r)&&(ct(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Zr(r):r.fn=null))}catch(o){lt(o,r,null,r.ctx)}}}function ut(e){St||(St=!0,queueMicrotask(Ys));for(var n=Wn=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(dn|Ve))!==0){if((t&ce)===0)return;n.f^=ce}}$n.push(n)}function Qs(e){for(var n=[],t=e;t!==null;){var r=t.f,o=(r&(Ve|dn))!==0,s=o&&(r&ce)!==0;if(!s&&(r&Be)===0){if((r&Pr)!==0)n.push(t);else if(o)t.f^=ce;else try{vn(t)&&ct(t)}catch(l){lt(l,t,null,t.ctx)}var a=t.first;if(a!==null){t=a;continue}}var c=t.parent;for(t=t.next;t===null&&c!==null;)t=c.next,c=c.parent}return n}function D(e){var n=e.f,t=(n&Re)!==0;if($!==null&&!Ce){if(!(le!=null&&le.includes(e))){var r=$.deps;e.rv<Jn&&(e.rv=Jn,ae===null&&r!==null&&r[ve]===e?ve++:ae===null?ae=[e]:(!Ge||!ae.includes(e))&&ae.push(e))}}else if(t&&e.deps===null&&e.effects===null){var o=e,s=o.parent;s!==null&&(s.f&be)===0&&(o.f^=be)}return t&&(o=e,vn(o)&&$r(o)),Cn&&Fn.has(e)?Fn.get(e):e.v}function Nn(e){var n=Ce;try{return Ce=!0,e()}finally{Ce=n}}const ei=-7169;function De(e,n){e.f=e.f&ei|n}function Ct(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Qe in e)At(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&Qe in t&&At(t)}}}function At(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{At(e[r],n)}catch{}const t=Bt(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=Ar(t);for(let o in r){const s=r[o].get;if(s)try{s.call(e)}catch{}}}}}function ni(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ti=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ri(e){return ti.includes(e)}const oi={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function si(e){return e=e.toLowerCase(),oi[e]??e}const ii=["touchstart","touchmove"];function ai(e){return ii.includes(e)}function li(e,n){if(n){const t=document.body;e.autofocus=!0,Xt(()=>{document.activeElement===t&&e.focus()})}}let wr=!1;function ci(){wr||(wr=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var n;if(!e.defaultPrevented)for(const t of e.target.elements)(n=t.__on_r)==null||n.call(t)})},{capture:!0}))}function io(e){var n=$,t=j;Oe(null),We(null);try{return e()}finally{Oe(n),We(t)}}function ui(e,n,t,r=t){e.addEventListener(n,()=>io(t));const o=e.__on_r;o?e.__on_r=()=>{o(),r(!0)}:e.__on_r=()=>r(!0),ci()}const ao=new Set,Pt=new Set;function fi(e,n,t,r={}){function o(s){if(r.capture||En.call(n,s),!s.cancelBubble)return io(()=>t==null?void 0:t.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Xt(()=>{n.addEventListener(e,o,r)}):n.addEventListener(e,o,r),o}function ft(e){for(var n=0;n<e.length;n++)ao.add(e[n]);for(var t of Pt)t(e)}function En(e){var q;var n=this,t=n.ownerDocument,r=e.type,o=((q=e.composedPath)==null?void 0:q.call(e))||[],s=o[0]||e.target,a=0,c=e.__root;if(c){var l=o.indexOf(c);if(l!==-1&&(n===document||n===window)){e.__root=n;return}var u=o.indexOf(n);if(u===-1)return;l<=u&&(a=l)}if(s=o[a]||e.target,s!==n){ss(e,"currentTarget",{configurable:!0,get(){return s||t}});var m=$,_=j;Oe(null),We(null);try{for(var f,h=[];s!==null;){var b=s.assignedSlot||s.parentNode||s.host||null;try{var k=s["__"+r];if(k!=null&&(!s.disabled||e.target===s))if(nt(k)){var[F,...I]=k;F.apply(s,[e,...I])}else k.call(s,e)}catch(x){f?h.push(x):f=x}if(e.cancelBubble||b===n||b===null)break;s=b}if(f){for(let x of h)queueMicrotask(()=>{throw x});throw f}}finally{e.__root=n,delete e.currentTarget,Oe(m),We(_)}}}function Wt(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function fn(e,n){var t=j;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function ue(e,n){var t=(n&Ss)!==0,r=(n&Cs)!==0,o,s=!e.startsWith("<!>");return()=>{o===void 0&&(o=Wt(s?e:"<!>"+e),t||(o=Ae(o)));var a=r||Hr?document.importNode(o,!0):o.cloneNode(!0);if(t){var c=Ae(a),l=a.lastChild;fn(c,l)}else fn(a,a);return a}}function dt(e,n,t="svg"){var r=!e.startsWith("<!>"),o=`<${t}>${r?e:"<!>"+e}</${t}>`,s;return()=>{if(!s){var a=Wt(o),c=Ae(a);s=Ae(c)}var l=s.cloneNode(!0);return fn(l,l),l}}function Ot(e=""){{var n=ot(e+"");return fn(n,n),n}}function Zn(){var e=document.createDocumentFragment(),n=document.createComment(""),t=ot();return e.append(n,t),fn(n,t),e}function G(e,n){e!==null&&e.before(n)}function ze(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function di(e,n){return _i(e,n)}const on=new Map;function _i(e,{target:n,anchor:t,props:r={},events:o,context:s,intro:a=!0}){Ls();var c=new Set,l=_=>{for(var f=0;f<_.length;f++){var h=_[f];if(!c.has(h)){c.add(h);var b=ai(h);n.addEventListener(h,En,{passive:b});var k=on.get(h);k===void 0?(document.addEventListener(h,En,{passive:b}),on.set(h,1)):on.set(h,k+1)}}};l(Lt(ao)),Pt.add(l);var u=void 0,m=js(()=>{var _=t??n.appendChild(ot());return un(()=>{if(s){_n({});var f=K;f.c=s}o&&(r.$$events=o),u=e(_,r)||{},s&&mn()}),()=>{var b;for(var f of c){n.removeEventListener(f,En);var h=on.get(f);--h===0?(document.removeEventListener(f,En),on.delete(f)):on.set(f,h)}Pt.delete(l),_!==t&&((b=_.parentNode)==null||b.removeChild(_))}});return mi.set(u,m),u}let mi=new WeakMap;function Ue(e,n,[t,r]=[0,0]){var o=e,s=null,a=null,c=_e,l=t>0?qt:0,u=!1;const m=(f,h=!0)=>{u=!0,_(h,f)},_=(f,h)=>{c!==(c=f)&&(c?(s?Kn(s):h&&(s=un(()=>h(o))),a&&Gn(a,()=>{a=null})):(a?Kn(a):h&&(a=un(()=>h(o,[t+1,r]))),s&&Gn(s,()=>{s=null})))};at(()=>{u=!1,n(m),u||_(null,null)},l)}function Rn(e,n){return n}function pi(e,n,t,r){for(var o=[],s=n.length,a=0;a<s;a++)Kt(n[a].e,o,!0);var c=s>0&&o.length===0&&t!==null;if(c){var l=t.parentNode;Bs(l),l.append(t),r.clear(),He(e,n[0].prev,n[s-1].next)}Qr(o,()=>{for(var u=0;u<s;u++){var m=n[u];c||(r.delete(m.k),He(e,m.prev,m.next)),qe(m.e,!c)}})}function Mn(e,n,t,r,o,s=null){var a=e,c={flags:n,items:new Map,first:null},l=(n&Br)!==0;if(l){var u=e;a=u.appendChild(ot())}var m=null,_=!1,f=Ut(()=>{var h=t();return nt(h)?h:h==null?[]:Lt(h)});at(()=>{var h=D(f),b=h.length;_&&b===0||(_=b===0,vi(h,c,a,o,n,r,t),s!==null&&(b===0?m?Kn(m):m=un(()=>s(a)):m!==null&&Gn(m,()=>{m=null})),D(f))})}function vi(e,n,t,r,o,s,a){var ye,Me,me,Fe;var c=(o&Rs)!==0,l=(o&(jt|$t))!==0,u=e.length,m=n.items,_=n.first,f=_,h,b=null,k,F=[],I=[],q,x,v,y;if(c)for(y=0;y<u;y+=1)q=e[y],x=s(q,y),v=m.get(x),v!==void 0&&((ye=v.a)==null||ye.measure(),(k??(k=new Set)).add(v));for(y=0;y<u;y+=1){if(q=e[y],x=s(q,y),v=m.get(x),v===void 0){var B=f?f.e.nodes_start:t;b=hi(B,n,b,b===null?n.first:b.next,q,x,y,r,o,a),m.set(x,b),F=[],I=[],f=b.next;continue}if(l&&gi(v,q,y,o),(v.e.f&Be)!==0&&(Kn(v.e),c&&((Me=v.a)==null||Me.unfix(),(k??(k=new Set)).delete(v))),v!==f){if(h!==void 0&&h.has(v)){if(F.length<I.length){var M=I[0],P;b=M.prev;var X=F[0],fe=F[F.length-1];for(P=0;P<F.length;P+=1)Dr(F[P],M,t);for(P=0;P<I.length;P+=1)h.delete(I[P]);He(n,X.prev,fe.next),He(n,b,X),He(n,fe,M),f=M,b=fe,y-=1,F=[],I=[]}else h.delete(v),Dr(v,f,t),He(n,v.prev,v.next),He(n,v,b===null?n.first:b.next),He(n,b,v),b=v;continue}for(F=[],I=[];f!==null&&f.k!==x;)(f.e.f&Be)===0&&(h??(h=new Set)).add(f),I.push(f),f=f.next;if(f===null)continue;v=f}F.push(v),b=v,f=v.next}if(f!==null||h!==void 0){for(var ee=h===void 0?[]:Lt(h);f!==null;)(f.e.f&Be)===0&&ee.push(f),f=f.next;var ne=ee.length;if(ne>0){var de=(o&Br)!==0&&u===0?t:null;if(c){for(y=0;y<ne;y+=1)(me=ee[y].a)==null||me.measure();for(y=0;y<ne;y+=1)(Fe=ee[y].a)==null||Fe.fix()}pi(n,ee,de,m)}}c&&Xt(()=>{var Ee;if(k!==void 0)for(v of k)(Ee=v.a)==null||Ee.apply()}),j.first=n.first&&n.first.e,j.last=b&&b.e}function gi(e,n,t,r){(r&jt)!==0&&kt(e.v,n),(r&$t)!==0?kt(e.i,t):e.i=t}function hi(e,n,t,r,o,s,a,c,l,u){var m=(l&jt)!==0,_=(l&Ms)===0,f=m?_?Ht(o):cn(o):o,h=(l&$t)===0?a:cn(a),b={i:h,v:f,k:s,a:null,e:null,prev:t,next:r};try{return b.e=un(()=>c(e,f,h,u),Is),b.e.prev=t&&t.e,b.e.next=r&&r.e,t===null?n.first=b:(t.next=b,t.e.next=b.e),r!==null&&(r.prev=b,r.e.prev=b.e),b}finally{}}function Dr(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,o=n?n.e.nodes_start:t,s=e.e.nodes_start;s!==r;){var a=st(s);o.before(s),s=a}}function He(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function bi(e,n,t=!1,r=!1,o=!1){var s=e,a="";he(()=>{var c=j;if(a!==(a=n()??"")&&(c.nodes_start!==null&&(Yr(c.nodes_start,c.nodes_end),c.nodes_start=c.nodes_end=null),a!=="")){var l=a+"";t?l=`<svg>${l}</svg>`:r&&(l=`<math>${l}</math>`);var u=Wt(l);if((t||r)&&(u=Ae(u)),fn(Ae(u),u.lastChild),t||r)for(;Ae(u);)s.before(Ae(u));else s.before(u)}})}function yi(e,n,t,r,o){var c;var s=(c=n.$$slots)==null?void 0:c[t],a=!1;s===!0&&(s=n.children,a=!0),s===void 0?o!==null&&o(e):s(e,a?()=>r:r)}function wi(e,n){var t=void 0,r;at(()=>{t!==(t=n())&&(r&&(qe(r),r=null),t&&(r=un(()=>{Gt(()=>t(e))})))})}function lo(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(n=0;n<o;n++)e[n]&&(t=lo(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Di(){for(var e,n,t=0,r="",o=arguments.length;t<o;t++)(e=arguments[t])&&(n=lo(e))&&(r&&(r+=" "),r+=n);return r}function co(e){return typeof e=="object"?Di(e):e??""}const Er=[...` 	
\r\f \v\uFEFF`];function Ei(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var o in t)if(t[o])r=r?r+" "+o:o;else if(r.length)for(var s=o.length,a=0;(a=r.indexOf(o,a))>=0;){var c=a+s;(a===0||Er.includes(r[a-1]))&&(c===r.length||Er.includes(r[c]))?r=(a===0?"":r.substring(0,a))+r.substring(c+1):a=c}}return r===""?null:r}function xr(e,n=!1){var t=n?" !important;":";",r="";for(var o in e){var s=e[o];s!=null&&s!==""&&(r+=" "+o+": "+s+t)}return r}function Et(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function xi(e,n){if(n){var t="",r,o;if(Array.isArray(n)?(r=n[0],o=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,a=0,c=!1,l=[];r&&l.push(...Object.keys(r).map(Et)),o&&l.push(...Object.keys(o).map(Et));var u=0,m=-1;const k=e.length;for(var _=0;_<k;_++){var f=e[_];if(c?f==="/"&&e[_-1]==="*"&&(c=!1):s?s===f&&(s=!1):f==="/"&&e[_+1]==="*"?c=!0:f==='"'||f==="'"?s=f:f==="("?a++:f===")"&&a--,!c&&s===!1&&a===0){if(f===":"&&m===-1)m=_;else if(f===";"||_===k-1){if(m!==-1){var h=Et(e.substring(u,m).trim());if(!l.includes(h)){f!==";"&&_++;var b=e.substring(u,_).trim();t+=" "+b+";"}}u=_+1,m=-1}}}}return r&&(t+=xr(r)),o&&(t+=xr(o,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Tn(e,n,t,r,o,s){var a=e.__className;if(a!==t||a===void 0){var c=Ei(t,r,s);c==null?e.removeAttribute("class"):n?e.className=c:e.setAttribute("class",c),e.__className=t}else if(s&&o!==s)for(var l in s){var u=!!s[l];(o==null||u!==!!o[l])&&e.classList.toggle(l,u)}return s}function xt(e,n={},t,r){for(var o in t){var s=t[o];n[o]!==s&&(t[o]==null?e.style.removeProperty(o):e.style.setProperty(o,s,r))}}function Jt(e,n,t,r){var o=e.__style;if(o!==n){var s=xi(n,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=n}else r&&(Array.isArray(r)?(xt(e,t==null?void 0:t[0],r[0]),xt(e,t==null?void 0:t[1],r[1],"important")):xt(e,t,r));return r}const xn=Symbol("class"),Dn=Symbol("style"),uo=Symbol("is custom element"),fo=Symbol("is html");function Ri(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Qn(e,n,t,r){var o=_o(e);o[n]!==(o[n]=t)&&(n==="loading"&&(e[ds]=t),t==null?e.removeAttribute(n):typeof t!="string"&&mo(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function Mi(e,n,t,r,o=!1){var s=_o(e),a=s[uo],c=!s[fo],l=n||{},u=e.tagName==="OPTION";for(var m in n)m in t||(t[m]=null);t.class?t.class=co(t.class):t.class=null,t[Dn]&&(t.style??(t.style=null));var _=mo(e);for(const x in t){let v=t[x];if(u&&x==="value"&&v==null){e.value=e.__value="",l[x]=v;continue}if(x==="class"){var f=e.namespaceURI==="http://www.w3.org/1999/xhtml";Tn(e,f,v,r,n==null?void 0:n[xn],t[xn]),l[x]=v,l[xn]=t[xn];continue}if(x==="style"){Jt(e,v,n==null?void 0:n[Dn],t[Dn]),l[x]=v,l[Dn]=t[Dn];continue}var h=l[x];if(v!==h){l[x]=v;var b=x[0]+x[1];if(b!=="$$")if(b==="on"){const y={},B="$$"+x;let M=x.slice(2);var k=ri(M);if(ni(M)&&(M=M.slice(0,-7),y.capture=!0),!k&&h){if(v!=null)continue;e.removeEventListener(M,l[B],y),l[B]=null}if(v!=null)if(k)e[`__${M}`]=v,ft([M]);else{let P=function(X){l[x].call(this,X)};var q=P;l[B]=fi(M,e,P,y)}else k&&(e[`__${M}`]=void 0)}else if(x==="style")Qn(e,x,v);else if(x==="autofocus")li(e,!!v);else if(!a&&(x==="__value"||x==="value"&&v!=null))e.value=e.__value=v;else if(x==="selected"&&u)Ri(e,v);else{var F=x;c||(F=si(F));var I=F==="defaultValue"||F==="defaultChecked";if(v==null&&!a&&!I)if(s[x]=null,F==="value"||F==="checked"){let y=e;const B=n===void 0;if(F==="value"){let M=y.defaultValue;y.removeAttribute(F),y.defaultValue=M,y.value=y.__value=B?M:null}else{let M=y.defaultChecked;y.removeAttribute(F),y.defaultChecked=M,y.checked=B?M:!1}}else e.removeAttribute(x);else I||_.includes(F)&&(a||typeof v!="string")?e[F]=v:typeof v!="function"&&Qn(e,F,v)}}}for(let x of Object.getOwnPropertySymbols(t))x.description===Ps&&wi(e,()=>t[x]);return l}function _o(e){return e.__attributes??(e.__attributes={[uo]:e.nodeName.includes("-"),[fo]:e.namespaceURI===As})}var Rr=new Map;function mo(e){var n=Rr.get(e.nodeName);if(n)return n;Rr.set(e.nodeName,n=[]);for(var t,r=e,o=Element.prototype;o!==r;){t=Ar(r);for(var s in t)t[s].set&&n.push(s);r=Bt(r)}return n}function Fi(e,n,t=n){var r=Sn();ui(e,"input",o=>{var s=o?e.defaultValue:e.value;if(s=Rt(e)?Mt(s):s,t(s),r&&s!==(s=n())){var a=e.selectionStart,c=e.selectionEnd;e.value=s??"",c!==null&&(e.selectionStart=a,e.selectionEnd=Math.min(c,e.value.length))}}),Nn(n)==null&&e.value&&t(Rt(e)?Mt(e.value):e.value),it(()=>{var o=n();Rt(e)&&o===Mt(e.value)||e.type==="date"&&!o&&!e.value||o!==e.value&&(e.value=o??"")})}function Rt(e){var n=e.type;return n==="number"||n==="range"}function Mt(e){return e===""?null:+e}function po(e=!1){const n=K,t=n.l.u;if(!t)return;let r=()=>Ct(n.s);if(e){let o=0,s={};const a=ln(()=>{let c=!1;const l=n.s;for(const u in l)l[u]!==s[u]&&(s[u]=l[u],c=!0);return c&&o++,o});r=()=>D(a)}t.b.length&&Vs(()=>{Mr(n,r),Nt(t.b)}),hr(()=>{const o=Nn(()=>t.m.map(ls));return()=>{for(const s of o)typeof s=="function"&&s()}}),t.a.length&&hr(()=>{Mr(n,r),Nt(t.a)})}function Mr(e,n){if(e.l.s)for(const t of e.l.s)D(t);n()}let Vn=!1;function Ni(e){var n=Vn;try{return Vn=!1,[e(),Vn]}finally{Vn=n}}const Ti={get(e,n){if(!e.exclude.includes(n))return D(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=Ke({get[n](){return e.props[n]}},n,zr)),e.special[n](t),vr(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),vr(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function et(e,n){return new Proxy({props:e,exclude:n,special:{},version:cn(0)},Ti)}const ki={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(wn(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let o=e.props[r];wn(o)&&(o=o());const s=Xe(o,n);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(wn(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const o=Xe(r,n);return o&&!o.configurable&&(o.configurable=!0),o}}},has(e,n){if(n===Qe||n===Ir)return!1;for(let t of e.props)if(wn(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(wn(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function Si(...e){return new Proxy({props:e},ki)}function Fr(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function Ke(e,n,t,r){var B;var o=(t&Fs)!==0,s=!kn||(t&Ns)!==0,a=(t&Ts)!==0,c=(t&ks)!==0,l=!1,u;a?[u,l]=Ni(()=>e[n]):u=e[n];var m=Qe in e||Ir in e,_=a&&(((B=Xe(e,n))==null?void 0:B.set)??(m&&n in e&&(M=>e[n]=M)))||void 0,f=r,h=!0,b=!1,k=()=>(b=!0,h&&(h=!1,c?f=Nn(r):f=r),f);u===void 0&&r!==void 0&&(_&&s&&bs(),u=k(),_&&_(u));var F;if(s)F=()=>{var M=e[n];return M===void 0?k():(h=!0,b=!1,M)};else{var I=(o?ln:Ut)(()=>e[n]);I.f|=us,F=()=>{var M=D(I);return M!==void 0&&(f=void 0),M===void 0?f:M}}if((t&zr)===0)return F;if(_){var q=e.$$legacy;return function(M,P){return arguments.length>0?((!s||!P||q||l)&&_(P?F():M),M):F()}}var x=!1,v=Ht(u),y=ln(()=>{var M=F(),P=D(v);return x?(x=!1,P):v.v=M});return a&&D(y),o||(y.equals=Vt),function(M,P){if(arguments.length>0){const X=P?D(y):s&&a?Le(M):M;if(!y.equals(X)){if(x=!0,Z(v,X),b&&f!==void 0&&(f=X),Fr(y))return M;Nn(()=>D(y))}return M}return Fr(y)?y.v:D(y)}}function Ci(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function Ai(){const e=K;return e===null&&qr(),(n,t,r)=>{var s;const o=(s=e.s.$$events)==null?void 0:s[n];if(o){const a=nt(o)?o.slice():[o],c=Ci(n,t,r);for(const l of a)l.call(e.x,c);return!c.defaultPrevented}return!0}}function Pi(e){K===null&&qr(),K.l===null&&hs(),Oi(K).a.push(e)}function Oi(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Ii="5";var Cr;typeof window<"u"&&((Cr=window.__svelte??(window.__svelte={})).v??(Cr.v=new Set)).add(Ii);const Li={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:203.99039336268697,FiniteDifferences:95.4749675927548,ForwardDiff:2.375570976296452,MooncakeFwd:21.973713033954,MooncakeRvs:7.06412101217843,ReverseDiff:"error",ReverseDiffCompiled:"error"},Bi={__category__:"Distributions",EnzymeFwd:2.885829179850078,EnzymeRvs:1.2475372854975668,FiniteDifferences:42.32316357263183,ForwardDiff:2.2128665304235957,MooncakeFwd:5.337701960307324,MooncakeRvs:3.2720138106665364,ReverseDiff:68.82098432496208,ReverseDiffCompiled:5.613689355214779},zi={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:"error",FiniteDifferences:62.732736796814024,ForwardDiff:1.1497903782112275,MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:"error",ReverseDiffCompiled:"error"},qi={__category__:"DynamicPPL demo models",EnzymeFwd:4.2523344188636,EnzymeRvs:1.7010163180790636,FiniteDifferences:100.14218301189986,ForwardDiff:3.5584881350960424,MooncakeFwd:11.041614757908645,MooncakeRvs:6.13860488972474,ReverseDiff:195.62986258289467,ReverseDiffCompiled:18.176618778860952},Vi={__category__:"DynamicPPL demo models",EnzymeFwd:3.1577752097436,EnzymeRvs:1.4282338373375907,FiniteDifferences:86.31013234367342,ForwardDiff:3.6958927065247815,MooncakeFwd:10.081422197796327,MooncakeRvs:5.9260127190891385,ReverseDiff:155.7337777314863,ReverseDiffCompiled:14.22058509578435},ji={__category__:"DynamicPPL demo models",EnzymeFwd:8.78601830018834,EnzymeRvs:18.615062471878996,FiniteDifferences:97.52047459586258,ForwardDiff:1.9602519797165883,MooncakeFwd:14.076624511618343,MooncakeRvs:4.709604243413506,ReverseDiff:90.71955155427212,ReverseDiffCompiled:8.285090551152324},$i={__category__:"DynamicPPL demo models",EnzymeFwd:9.867221753398969,EnzymeRvs:18.16710780165849,FiniteDifferences:82.50303410755389,ForwardDiff:1.4736934966891309,MooncakeFwd:16.09103481996298,MooncakeRvs:6.64811495377807,ReverseDiff:59.263032501244574,ReverseDiffCompiled:5.883804347826087},Ui={__category__:"DynamicPPL demo models",EnzymeFwd:11.537732218451529,EnzymeRvs:18.667383292383292,FiniteDifferences:107.69921955226947,ForwardDiff:1.3166472164029905,MooncakeFwd:17.73054587688734,MooncakeRvs:6.737945935447848,ReverseDiff:65.34231475811389,ReverseDiffCompiled:5.326974114389015},Hi={__category__:"DynamicPPL demo models",EnzymeFwd:10.780792841454991,EnzymeRvs:18.210581574112265,FiniteDifferences:86.62589977377115,ForwardDiff:1.4565742186081971,MooncakeFwd:15.883051610626362,MooncakeRvs:6.091118102613747,ReverseDiff:67.50991471589512,ReverseDiffCompiled:6.483220724833521},Gi={__category__:"DynamicPPL demo models",EnzymeFwd:4.371572534265382,EnzymeRvs:1.490359888609079,FiniteDifferences:100.54405104748999,ForwardDiff:2.434672695009602,MooncakeFwd:11.701480893160548,MooncakeRvs:5.869599329620539,ReverseDiff:209.10869490653405,ReverseDiffCompiled:19.654606319385138},Ki={__category__:"DynamicPPL demo models",EnzymeFwd:6.639722433781839,EnzymeRvs:10.507296413939143,FiniteDifferences:87.22941620805007,ForwardDiff:1.4054139559754033,MooncakeFwd:14.886542040948449,MooncakeRvs:4.290688831667844,ReverseDiff:72.21684771469565,ReverseDiffCompiled:8.243174071359602},Xi={__category__:"DynamicPPL demo models",EnzymeFwd:9.36580876086586,EnzymeRvs:16.077611940298507,FiniteDifferences:81.88214587916738,ForwardDiff:1.4337646466824816,MooncakeFwd:15.246744937893483,MooncakeRvs:5.951235655398632,ReverseDiff:65.63688469318947,ReverseDiffCompiled:6.493841505926099},Wi={__category__:"Distributions",EnzymeFwd:6.150589690994111,EnzymeRvs:9.769632282054813,FiniteDifferences:31.830001033271337,ForwardDiff:1.2127840538452017,MooncakeFwd:4.404417191846931,MooncakeRvs:6.168570285256959,ReverseDiff:22.041433075379764,ReverseDiffCompiled:3.7486924189583717},Ji={__category__:"DynamicPPL demo models",EnzymeFwd:6.985891917742707,EnzymeRvs:12.506397890634844,FiniteDifferences:82.2536869118905,ForwardDiff:1.3780739707752363,MooncakeFwd:13.589713058298894,MooncakeRvs:5.357146946018661,ReverseDiff:56.3099978122949,ReverseDiffCompiled:7.203357784489859},Yi={__category__:"DynamicPPL demo models",EnzymeFwd:7.486575249703741,EnzymeRvs:8.798008110687023,FiniteDifferences:68.5482767410349,ForwardDiff:1.4681970349115254,MooncakeFwd:14.365541543480225,MooncakeRvs:5.449384386415911,ReverseDiff:77.90862276761258,ReverseDiffCompiled:7.992350885459615},Zi={__category__:"DynamicPPL demo models",EnzymeFwd:8.447681159420291,EnzymeRvs:16.21274301811985,FiniteDifferences:79.3211732291703,ForwardDiff:1.0361224198271552,MooncakeFwd:15.434027294248711,MooncakeRvs:6.077767099151049,ReverseDiff:57.522905126176035,ReverseDiffCompiled:5.726331769252002},Qi={__category__:"DynamicPPL demo models",EnzymeFwd:9.710401150785364,EnzymeRvs:16.882253713505207,FiniteDifferences:81.02914885347842,ForwardDiff:1.3713043173289376,MooncakeFwd:15.386443017878097,MooncakeRvs:6.199052039588398,ReverseDiff:67.31620111731844,ReverseDiffCompiled:6.166986132959669},ea={__category__:"Core Turing syntax",EnzymeFwd:4.520301553721302,EnzymeRvs:.9948468989579031,FiniteDifferences:177.49275115128773,ForwardDiff:2.1366863249598826,MooncakeFwd:23.38895777364469,MooncakeRvs:5.297313740592997,ReverseDiff:118.99004240359525,ReverseDiffCompiled:10.991630912821746},na={__category__:"Core Turing syntax",EnzymeFwd:19.905479473527457,EnzymeRvs:3.5420838838857995,FiniteDifferences:241.969412396029,ForwardDiff:7.292378176185645,MooncakeFwd:23.059853341710852,MooncakeRvs:23.75609710896961,ReverseDiff:921.1326348070534,ReverseDiffCompiled:77.83922387215954},ta={__category__:"DynamicPPL arXiV paper",EnzymeFwd:7.879801411026914,EnzymeRvs:7.009598976109214,FiniteDifferences:22.30981308411215,ForwardDiff:4.8623029772329245,MooncakeFwd:5.795948434622468,MooncakeRvs:38.47350107066381,ReverseDiff:909.2686577603691,ReverseDiffCompiled:117.50785942492013},ra={__category__:"DynamicPPL arXiV paper",EnzymeFwd:6.2844122458518346,EnzymeRvs:1.4227827450315693,FiniteDifferences:180.11788935444926,ForwardDiff:5.5389712168709035,MooncakeFwd:31.42995829138501,MooncakeRvs:6.55875385830163,ReverseDiff:87.30607866507748,ReverseDiffCompiled:7.213728439981807},oa={__category__:"DynamicPPL arXiV paper",EnzymeFwd:13618.48979363749,EnzymeRvs:5.910774638366906,FiniteDifferences:134172.25848489188,ForwardDiff:16437.11776539771,MooncakeFwd:34244.55036403478,MooncakeRvs:23.94134518858454,ReverseDiff:586.4037726838586,ReverseDiffCompiled:101.3940294073964},sa={__category__:"DynamicPPL arXiV paper",EnzymeFwd:74.05619469026549,EnzymeRvs:11.124418567003744,FiniteDifferences:"NaN",ForwardDiff:26.389112125321073,MooncakeFwd:5974.486042666144,MooncakeRvs:5.76698095160012,ReverseDiff:1493.0673000049624,ReverseDiffCompiled:10.382752899390525},ia={__category__:"Distributions",EnzymeFwd:4.218440235459176,EnzymeRvs:19.48961093292428,FiniteDifferences:160.60951773953684,ForwardDiff:3.6446168409872786,MooncakeFwd:23.073536493086607,MooncakeRvs:4.8497374187041355,ReverseDiff:63.15389136673236,ReverseDiffCompiled:7.522490872769857},aa={__category__:"DynamicPPL arXiV paper",EnzymeFwd:133.09873337219778,EnzymeRvs:1.7025643340275585,FiniteDifferences:6866.29061281871,ForwardDiff:150.5294458026531,MooncakeFwd:465.98368545450955,MooncakeRvs:9.257219796922607,ReverseDiff:79.57791575833075,ReverseDiffCompiled:12.517591968953461},la={__category__:"DynamicPPL arXiV paper",EnzymeFwd:43.202734822084814,EnzymeRvs:3.871579422516243,FiniteDifferences:1042.4941152888389,ForwardDiff:62.928313513436905,MooncakeFwd:161.41480095720823,MooncakeRvs:4.063041915872139,ReverseDiff:57.06894375036487,ReverseDiffCompiled:11.137996197890734},ca={__category__:"DynamicPPL arXiV paper",EnzymeFwd:178.24557197182133,EnzymeRvs:.9531368768486389,FiniteDifferences:2893.1246639934807,ForwardDiff:147.61369456004329,MooncakeFwd:417.7536424727137,MooncakeRvs:4.306127833644463,ReverseDiff:144.8154921543545,ReverseDiffCompiled:28.433380549027888},ua={__category__:"DynamicPPL arXiV paper",EnzymeFwd:106.82715576238708,EnzymeRvs:4.62346356453029,FiniteDifferences:8957.906466894348,ForwardDiff:148.99673983916537,MooncakeFwd:1300.9044109528543,MooncakeRvs:4.861880267046076,ReverseDiff:202.36745060192004,ReverseDiffCompiled:22.27361203273612},fa={__category__:"Core Turing syntax",EnzymeFwd:3.429444426981541,EnzymeRvs:2.238772862848492,FiniteDifferences:78.30971487109443,ForwardDiff:1.5709769775678868,MooncakeFwd:9.206607112554845,MooncakeRvs:4.32068618627185,ReverseDiff:104.65380684721512,ReverseDiffCompiled:10.399329861703945},da={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:19.174856194373696,FiniteDifferences:255.54080707322603,ForwardDiff:3.7341934244645776,MooncakeFwd:50.846471113299884,MooncakeRvs:18.064867684994642,ReverseDiff:72.3026033889502,ReverseDiffCompiled:26.04797598843422},_a={__category__:"Core Turing syntax",EnzymeFwd:3.4463308290850554,EnzymeRvs:3.6893621552550315,FiniteDifferences:64.79703703703704,ForwardDiff:1.1906213857638523,MooncakeFwd:9.519331863659488,MooncakeRvs:3.6385047987876744,ReverseDiff:24.14824424839993,ReverseDiffCompiled:2.7225296133647823},ma={__category__:"Base Julia features",EnzymeFwd:5.1087775803961275,EnzymeRvs:17.73525831755477,FiniteDifferences:13.512758973634984,ForwardDiff:1.028170055452865,MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:"error",ReverseDiffCompiled:"error"},pa={__category__:"Effect of model size",EnzymeFwd:2.6171452026680346,EnzymeRvs:.8125750076102232,FiniteDifferences:250.39506426735218,ForwardDiff:3.842100395105915,MooncakeFwd:40.41450308275355,MooncakeRvs:6.047158220502901,ReverseDiff:121.35810465314471,ReverseDiffCompiled:11.747802088636673},va={__category__:"Effect of model size",EnzymeFwd:9.832064782956245,EnzymeRvs:.5823416484520464,FiniteDifferences:767.8513093427945,ForwardDiff:21.197470817120625,MooncakeFwd:171.1812070359887,MooncakeRvs:4.972414496498266,ReverseDiff:136.0486296993455,ReverseDiffCompiled:11.842198881924446},ga={__category__:"Distributions",EnzymeFwd:"error",EnzymeRvs:4.5567747600236705,FiniteDifferences:31.132030494524034,ForwardDiff:.7332262289917332,MooncakeFwd:16.67387068554159,MooncakeRvs:9.595250110512582,ReverseDiff:12.758753370196043,ReverseDiffCompiled:1.0009639364178797},ha={__category__:"Effect of model size",EnzymeFwd:21.02194436437014,EnzymeRvs:.6117678202347862,FiniteDifferences:1386.675194052695,ForwardDiff:44.76472366873845,MooncakeFwd:384.87082412914185,MooncakeRvs:5.556595426082222,ReverseDiff:139.5368141886292,ReverseDiffCompiled:12.581352217164053},ba={__category__:"Effect of model size",EnzymeFwd:151.25199556749246,EnzymeRvs:.8280330650110097,FiniteDifferences:7004.812921990236,ForwardDiff:185.0253978369665,MooncakeFwd:1882.7532712057819,MooncakeRvs:6.005311693102176,ReverseDiff:137.86089846196674,ReverseDiffCompiled:15.067418289488671},ya={__category__:"Distributions",EnzymeFwd:2.598901098901099,EnzymeRvs:1.8294669789712963,FiniteDifferences:34.423734195157905,ForwardDiff:1.8689023390819497,MooncakeFwd:4.5636129864162855,MooncakeRvs:3.6850905475125115,ReverseDiff:67.22208992459036,ReverseDiffCompiled:7.408543441435691},wa={__category__:"Distributions",EnzymeFwd:1.8905783328808035,EnzymeRvs:6.796903318116781,FiniteDifferences:20.994285318463618,ForwardDiff:1.2267369128380359,MooncakeFwd:4.3527938438871905,MooncakeRvs:7.275611302938482,ReverseDiff:26.117661816357252,ReverseDiffCompiled:4.028398396269199},Da={__category__:"Core Turing syntax",EnzymeFwd:18.589549490981135,EnzymeRvs:3.7330089793164065,FiniteDifferences:250.86342811431896,ForwardDiff:7.451860469024334,MooncakeFwd:22.693316825674266,MooncakeRvs:22.163931872904342,ReverseDiff:907.7171396223661,ReverseDiffCompiled:78.76280699693116},Ea={__category__:"Core Turing syntax",EnzymeFwd:40.44267345244365,EnzymeRvs:6.553647202284674,FiniteDifferences:545.5158429945001,ForwardDiff:9.243201701160153,MooncakeFwd:43.323120160192374,MooncakeRvs:29.061890638944885,ReverseDiff:1249.2077820229238,ReverseDiffCompiled:113.78033901015431},xa={__category__:"Core Turing syntax",EnzymeFwd:3.553513850847693,EnzymeRvs:12.899925300904822,FiniteDifferences:81.19958355304968,ForwardDiff:1.6895489831269648,MooncakeFwd:13.159810320462029,MooncakeRvs:5.671295182792743,ReverseDiff:100.77729641914304,ReverseDiffCompiled:9.057590002413354},Ra={__category__:"Core Turing syntax",EnzymeFwd:35.33452101237519,EnzymeRvs:6.92576194647245,FiniteDifferences:540.3070494992622,ForwardDiff:11.434916919939033,MooncakeFwd:46.286763857768904,MooncakeRvs:29.056858253161444,ReverseDiff:1116.0528823249167,ReverseDiffCompiled:98.14561298882536},Ma={__category__:"Distributions",EnzymeFwd:"error",EnzymeRvs:"error",FiniteDifferences:29.502107824656402,ForwardDiff:"NaN",MooncakeFwd:4.9785056294779935,MooncakeRvs:3.6274539414074294,ReverseDiff:"NaN",ReverseDiffCompiled:5.47490230134607},Fa={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:66.6001960069859,FiniteDifferences:53.480640426951304,ForwardDiff:7.328097930154098,MooncakeFwd:"error",MooncakeRvs:55.370775341321256,ReverseDiff:"error",ReverseDiffCompiled:"error"},Na={__category__:"Distributions",EnzymeFwd:40.87779771070654,EnzymeRvs:7.200766787427266,FiniteDifferences:521.5430510639997,ForwardDiff:9.197437398492248,MooncakeFwd:41.48761970251213,MooncakeRvs:24.184346079708284,ReverseDiff:733.7265887662362,ReverseDiffCompiled:63.04636617608161},Ta={__category__:"PosteriorDB",EnzymeFwd:3.3937417241619627,EnzymeRvs:7.014661578630247,FiniteDifferences:62.45979373295926,ForwardDiff:4.110895481009149,MooncakeFwd:11.436363636363636,MooncakeRvs:17.610600016282667,ReverseDiff:605.2312520058482,ReverseDiffCompiled:80.71299312341658},ka={__category__:"PosteriorDB",EnzymeFwd:8.068181818181818,EnzymeRvs:13.232558139534884,FiniteDifferences:46.44494526722473,ForwardDiff:2.9234808702175545,MooncakeFwd:9.135904499540864,MooncakeRvs:45.64285714285714,ReverseDiff:646.6678095238095,ReverseDiffCompiled:72.93002315410342},Sa={__category__:"PosteriorDB",EnzymeFwd:3.0004268032437045,EnzymeRvs:3.78869286287089,FiniteDifferences:12.520917062477166,ForwardDiff:.7106144580122862,MooncakeFwd:8.190935795216113,MooncakeRvs:24.41558441558442,ReverseDiff:77.54857080075442,ReverseDiffCompiled:60.11229946524064},Ca={__category__:"PosteriorDB",EnzymeFwd:5.740695522254928,EnzymeRvs:2.916838396596424,FiniteDifferences:245.55964503195716,ForwardDiff:3.947714435983627,MooncakeFwd:32.67138713530114,MooncakeRvs:5.646662657847265,ReverseDiff:175.2710081144272,ReverseDiffCompiled:17.331057785133083},Aa={__category__:"PosteriorDB",EnzymeFwd:5.52852880236275,EnzymeRvs:2.8754372700236908,FiniteDifferences:256.15539018228986,ForwardDiff:6.313755352840293,MooncakeFwd:34.11831367439309,MooncakeRvs:5.758043515504539,ReverseDiff:207.32001940491594,ReverseDiffCompiled:18.484844613683823},Pa={__category__:"PosteriorDB",EnzymeFwd:1.4335037297890871,EnzymeRvs:1.8477609108159394,FiniteDifferences:51.765815176558974,ForwardDiff:2.3183727034120736,MooncakeFwd:7.020939038243089,MooncakeRvs:4.01979940564636,ReverseDiff:303.5801315789474,ReverseDiffCompiled:31.07778072736926},Oa={__category__:"PosteriorDB",EnzymeFwd:3.3144754316069056,EnzymeRvs:5.565525961577681,FiniteDifferences:14.26665138140548,ForwardDiff:.5884335357517565,MooncakeFwd:7.487034277198212,MooncakeRvs:14.358823758216968,ReverseDiff:220.95314760077986,ReverseDiffCompiled:55.153267267714774},Ia={__category__:"PosteriorDB",EnzymeFwd:30.974560613956136,EnzymeRvs:2.2144186046511627,FiniteDifferences:927.0566894815996,ForwardDiff:44.0795889771135,MooncakeFwd:172.3685606060606,MooncakeRvs:8.668814192343604,ReverseDiff:376.9181267773599,ReverseDiffCompiled:43.93250688705234},La={__category__:"PosteriorDB",EnzymeFwd:26.78992287917738,EnzymeRvs:2.376558030366006,FiniteDifferences:904.5792829231509,ForwardDiff:33.2936528167219,MooncakeFwd:127.39295986851116,MooncakeRvs:6.475956584461084,ReverseDiff:347.0484785972151,ReverseDiffCompiled:37.5571448218952},Ba={__category__:"PosteriorDB",EnzymeFwd:6.987122509198208,EnzymeRvs:3.2525382929223654,FiniteDifferences:47.05302949632627,ForwardDiff:10.123930099857345,MooncakeFwd:25.685561497326205,MooncakeRvs:11.413629668794139,ReverseDiff:69.75829304884147,ReverseDiffCompiled:10.18367384843982},za={__category__:"Core Turing syntax",EnzymeFwd:8.741544624455758,EnzymeRvs:1.8107900468079006,FiniteDifferences:258.1093455825954,ForwardDiff:3.5527780139871714,MooncakeFwd:22.47787512031657,MooncakeRvs:9.606369549443068,ReverseDiff:256.84203741769153,ReverseDiffCompiled:22.916184136869354},qa={__category__:"PosteriorDB",EnzymeFwd:6.5908161368284075,EnzymeRvs:3.101381405744511,FiniteDifferences:39.97646165527715,ForwardDiff:2.155903067924078,MooncakeFwd:26.43856767411301,MooncakeRvs:11.342814238745575,ReverseDiff:67.25699945874133,ReverseDiffCompiled:28.261201543883203},Va={__category__:"Distributions",EnzymeFwd:12.528014616321558,EnzymeRvs:12.01674183789001,FiniteDifferences:57.13285903938455,ForwardDiff:.9645841064783703,MooncakeFwd:23.93999348934785,MooncakeRvs:11.429964840648747,ReverseDiff:42.61827447711428,ReverseDiffCompiled:3.5968797314199192},ja={__category__:"Core Turing syntax",EnzymeFwd:4.623735544328119,EnzymeRvs:1.5740673537663539,FiniteDifferences:103.67798979520515,ForwardDiff:1.8325802445368036,MooncakeFwd:11.711144755738385,MooncakeRvs:6.437023440079234,ReverseDiff:209.95977385643312,ReverseDiffCompiled:18.541963822418516},$a={__category__:"Base Julia features",EnzymeFwd:4.1001645834772,EnzymeRvs:2.3396828919143533,FiniteDifferences:98.30094204382551,ForwardDiff:2.5909854376470864,MooncakeFwd:12.853112343872306,MooncakeRvs:5.133826798934633,ReverseDiff:94.51865721546075,ReverseDiffCompiled:"wrong"},Ua={abstractgps:Li,assume_beta:Bi,delaydiffeq:zi,demo_assume_dot_observe:qi,demo_assume_dot_observe_literal:Vi,demo_assume_index_observe:ji,demo_assume_matrix_observe_matrix_index:$i,demo_assume_multivariate_observe:Ui,demo_assume_multivariate_observe_literal:Hi,demo_assume_observe_literal:Gi,demo_assume_submodel_observe_index_literal:Ki,demo_dot_assume_observe:Xi,assume_dirichlet:Wi,demo_dot_assume_observe_index:Ji,demo_dot_assume_observe_index_literal:Yi,demo_dot_assume_observe_matrix_index:Zi,demo_dot_assume_observe_submodel:Qi,dot_assume:ea,dot_observe:na,dppl_gauss_unknown:ta,dppl_hier_poisson:ra,dppl_high_dim_gauss:oa,dppl_hmm_semisup:sa,assume_lkjcholu:ia,dppl_lda:aa,dppl_logistic_regression:la,dppl_naive_bayes:ca,dppl_sto_volatility:ua,dynamic_constraint:fa,lux_nn:da,multiple_constraints_same_var:_a,multithreaded:ma,n010:pa,n050:va,assume_mvnormal:ga,n100:ha,n500:ba,observe_bernoulli:ya,observe_categorical:wa,observe_index:Da,observe_literal:Ea,observe_multivariate:xa,observe_submodel:Ra,observe_von_mises:Ma,ordinarydiffeq:Fa,assume_normal:Na,pdb_arma11:Ta,pdb_earnings:ka,pdb_earnings_male:Sa,pdb_eightsch_centered:Ca,pdb_eightsch_noncentered:Aa,pdb_garch11:Pa,pdb_kidiq:Oa,pdb_radon:Ia,pdb_rats:La,pdb_sblrc:Ba,assume_submodel:za,pdb_sblri:qa,assume_wishart:Va,broadcast_macro:ja,control_flow:$a},Ha=`#=
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

model = abstractgps(distance, n, y)`,Ga=`@model function assume_beta()
    a ~ Beta(2, 2)
end

model = assume_beta()`,Ka=`#=
This is an example of using DifferentialEquations.jl with Turing to model a delayed Lotka–Volterra equations (predator-prey model).
The model is adapted from the Turing documentation:
https://turinglang.org/docs/tutorials/bayesian-differential-equations/ 
=#
using DelayDiffEq: DDEProblem, solve, MethodOfSteps
using OrdinaryDiffEqTsit5: Tsit5

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

model = delaydiffeq(ddedata, prob_dde)`,Xa=`@model function demo_assume_dot_observe(x = [1.5, 2.0])
    # \`assume\` and \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    x .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe()`,Wa=`@model function demo_assume_dot_observe_literal()
    # \`assume\` and literal \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    [1.5, 2.0] .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe_literal()`,Ja=`using LinearAlgebra: Diagonal

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

model = demo_assume_index_observe()`,Ya=`using FillArrays
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

model = demo_assume_matrix_observe_matrix_index()`,Za=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe(x = [1.5, 2.0])
    # Multivariate \`assume\` and \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zero(x), Diagonal(s))
    x ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe()`,Qa=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe_literal()
    # multivariate \`assume\` and literal \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zeros(2), Diagonal(s))
    [1.5, 2.0] ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe_literal()`,el=`@model function demo_assume_observe_literal()
    # univariate \`assume\` and literal \`observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    1.5 ~ Normal(m, sqrt(s))
    2.0 ~ Normal(m, sqrt(s))
end

model = demo_assume_observe_literal()`,nl=`@model function _prior_dot_assume(::Type{TV} = Vector{Float64}) where {TV}
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

model = demo_assume_submodel_observe_index_literal()`,tl=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe()`,rl=`@model function assume_dirichlet()
    a ~ Dirichlet([1.0, 5.0])
end

model = assume_dirichlet()`,ol=`@model function demo_dot_assume_observe_index(
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

model = demo_dot_assume_observe_index()`,sl=`@model function demo_dot_assume_observe_index_literal(
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

model = demo_dot_assume_observe_index_literal()`,il=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe_matrix_index()`,al=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe_submodel()`,ll=`@model function dot_assume(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 5)
    a .~ Normal()
end

model = dot_assume()`,cl=`@model function dot_observe(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    x .~ Normal(a)
end

model = dot_observe()`,ul=`using FillArrays

n = 10_000
s = abs(rand()) + 0.5
y = randn() .+ s * randn(n)

@model function dppl_gauss_unknown(y)
    N = length(y)
    m ~ Normal(0, 1)
    s ~ truncated(Cauchy(0, 5); lower = 0)
    y ~ product_distribution(Fill(Normal(m, s), N))
end

model = dppl_gauss_unknown(y)`,fl=`using FillArrays
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

model = dppl_hier_poisson(y, x, idx, ns)`,dl=`using FillArrays

@model function dppl_high_dim_gauss(D)
    m ~ product_distribution(Fill(Normal(0, 1), D))
end

model = dppl_high_dim_gauss(10_000)`,_l=`using FillArrays
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

model = dppl_hmm_semisup(K, T, T_unsup, w, z, u, alpha, beta)`,ml=`@model function assume_lkjcholu()
    a ~ LKJCholesky(5, 1.0, 'U')
end

model = assume_lkjcholu()`,pl=`using FillArrays

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

model = dppl_lda(k, m, w, doc, alpha, beta)`,vl=`using Random: Xoshiro
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

model = dppl_logistic_regression(X', y)`,gl=`using DelimitedFiles
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

model = dppl_naive_bayes(image_vec, labels, C, D)`,hl=`using DelimitedFiles: readdlm

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

model = dppl_sto_volatility(y)`,bl=`@model function dynamic_constraint()
    a ~ Normal()
    b ~ truncated(Normal(); lower = a)
end

model = dynamic_constraint()`,yl=`#=
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

model = lux_nn(reduce(hcat, xs), ts)`,wl=`@model function multiple_constraints_same_var(::Type{TV} = Vector{Float64}) where {TV}
    x = TV(undef, 5)
    x[1] ~ Normal()
    x[2] ~ InverseGamma(2, 3)
    x[3] ~ truncated(Normal(), -5, 20)
    x[4:5] ~ Dirichlet([1.0, 2.0])
end

model = multiple_constraints_same_var()`,Dl=`#=
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
model = setthreadsafe(multithreaded(x), true)`,El=`@model function n010(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 10)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n010()`,xl=`@model function n050(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 50)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n050()`,Rl=`@model function assume_mvnormal()
    a ~ MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0])
end

model = assume_mvnormal()`,Ml=`@model function n100(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 100)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n100()`,Fl=`@model function n500(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 500)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n500()`,Nl=`@model function observe_bernoulli(x = [true, false, true])
    a ~ Beta(2, 2)
    for i in eachindex(x)
        x[i] ~ Bernoulli(a)
    end
end

model = observe_bernoulli()`,Tl=`@model function observe_categorical(x = [1, 2, 1, 2, 2])
    a ~ Dirichlet(2, 3)
    for i in eachindex(x)
        x[i] ~ Categorical(a)
    end
end

model = observe_categorical()`,kl=`@model function observe_index(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end

model = observe_index()`,Sl=`@model function observe_literal()
    a ~ Normal()
    1.5 ~ Normal(a)
end

model = observe_literal()`,Cl=`@model function observe_multivariate(
    x = [1.5, 2.0, 2.5],
    ::Type{TV} = Vector{Float64},
) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    x ~ MvNormal(a, I)
end

model = observe_multivariate()`,Al=`@model function inner2(x, a)
    x ~ Normal(a)
end
@model function observe_submodel(x = 1.5)
    a ~ Normal()
    _ignore ~ to_submodel(inner2(x, a))
end

model = observe_submodel()`,Pl=`@model function observe_von_mises(x)
    a ~ InverseGamma(2, 3)
    x ~ VonMises(0, a)
end

model = observe_von_mises(0.4)`,Ol=`# See https://turinglang.org/docs/tutorials/bayesian-differential-equations/.

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

model = ordinarydiffeq(odedata, prob)`,Il=`@model function assume_normal()
    a ~ Normal()
end

model = assume_normal()`,Ll=`# PosteriorDB: arma-arma11
using PosteriorDB

pdb = PosteriorDB.database()
post = PosteriorDB.posterior(pdb, "arma-arma11")
data = PosteriorDB.load(PosteriorDB.dataset(post))

T = data["T"]
y = Float64.(data["y"])

@model function pdb_arma11(T, y)
    mu ~ Normal(0, 10)
    phi ~ Normal(0, 2)
    theta ~ Normal(0, 2)
    sigma ~ truncated(Cauchy(0, 2.5); lower = 0)

    nu = Vector{typeof(mu)}(undef, T)
    err = Vector{typeof(mu)}(undef, T)
    nu[1] = mu + (phi * mu)
    err[1] = y[1] - nu[1]
    for t = 2:T
        nu[t] = mu + (phi * y[t-1]) + (theta * err[t-1])
        err[t] = y[t] - nu[t]
    end
    y ~ MvNormal(nu, sigma^2 * I)
end

model = pdb_arma11(T, y)`,Bl=`# PosteriorDB: earnings-logearn_height
using PosteriorDB

pdb = PosteriorDB.database()
post = PosteriorDB.posterior(pdb, "earnings-logearn_height")
data = PosteriorDB.load(PosteriorDB.dataset(post))

log_earn = log.(Float64.(data["earn"]))
height = Float64.(data["height"])
N = data["N"]

@model function pdb_earnings(log_earn, height, N)
    beta ~ filldist(Flat(), 2)
    sigma ~ FlatPos(0.0)
    log_earn ~ MvNormal(beta[1] .+ beta[2] .* height, sigma^2 * I)
end

model = pdb_earnings(log_earn, height, N)`,zl=`# PosteriorDB: earnings-logearn_height_male
using PosteriorDB

pdb = PosteriorDB.database()
post = PosteriorDB.posterior(pdb, "earnings-logearn_height_male")
data = PosteriorDB.load(PosteriorDB.dataset(post))

log_earn = log.(Float64.(data["earn"]))
height = Float64.(data["height"])
male = Bool.(data["male"])
N = data["N"]

@model function pdb_earnings_male(log_earn, height, male, N)
    beta ~ filldist(Flat(), 3)
    sigma ~ FlatPos(0.0)
    log_earn ~ MvNormal(beta[1] .+ beta[2] .* height .+ beta[3] .* male, sigma^2 * I)
end

model = pdb_earnings_male(log_earn, height, male, N)`,ql=`# PosteriorDB: eight_schools-eight_schools_centered
using PosteriorDB

pdb = PosteriorDB.database()
post = PosteriorDB.posterior(pdb, "eight_schools-eight_schools_centered")
data = PosteriorDB.load(PosteriorDB.dataset(post))

J = data["J"]
y = Float64.(data["y"])
sigma = Float64.(data["sigma"])

@model function pdb_eightsch_centered(J, y, sigma)
    mu ~ Normal(0, 5)
    tau ~ truncated(Cauchy(0, 5); lower = 0)
    theta ~ filldist(Normal(mu, tau), J)
    for i = 1:J
        y[i] ~ Normal(theta[i], sigma[i])
    end
end

model = pdb_eightsch_centered(J, y, sigma)`,Vl=`# PosteriorDB: eight_schools-eight_schools_noncentered
using PosteriorDB

pdb = PosteriorDB.database()
post = PosteriorDB.posterior(pdb, "eight_schools-eight_schools_noncentered")
data = PosteriorDB.load(PosteriorDB.dataset(post))

J = data["J"]
y = Float64.(data["y"])
sigma = Float64.(data["sigma"])

@model function pdb_eightsch_noncentered(J, y, sigma)
    mu ~ Normal(0, 5)
    tau ~ truncated(Cauchy(0, 5); lower = 0)
    theta_raw ~ filldist(Normal(0, 1), J)
    for i = 1:J
        theta = mu + tau * theta_raw[i]
        y[i] ~ Normal(theta, sigma[i])
    end
end

model = pdb_eightsch_noncentered(J, y, sigma)`,jl=`# PosteriorDB: garch-garch11
using PosteriorDB

pdb = PosteriorDB.database()
post = PosteriorDB.posterior(pdb, "garch-garch11")
data = PosteriorDB.load(PosteriorDB.dataset(post))

T = data["T"]
y = Float64.(data["y"])
sigma1 = Float64(data["sigma1"])

@model function pdb_garch11(T, y, sigma1)
    mu ~ Flat()
    alpha0 ~ FlatPos(0.0)
    alpha1 ~ Uniform(0, 1)
    beta1 ~ Uniform(0, 1 - alpha1 + eps())

    sigma = Vector{typeof(mu)}(undef, T)
    sigma[1] = sigma1
    for t = 2:T
        sigma[t] = sqrt(alpha0 + alpha1 * (y[t-1] - mu)^2 + beta1 * sigma[t-1]^2)
    end
    for t = 1:T
        y[t] ~ Normal(mu, sigma[t])
    end
end

model = pdb_garch11(T, y, sigma1)`,$l=`# PosteriorDB: kidiq-kidscore_momhs
using PosteriorDB

pdb = PosteriorDB.database()
post = PosteriorDB.posterior(pdb, "kidiq-kidscore_momhs")
data = PosteriorDB.load(PosteriorDB.dataset(post))

kid_score = Float64.(data["kid_score"])
mom_hs = Bool.(data["mom_hs"])
N = data["N"]

@model function pdb_kidiq(kid_score, mom_hs, N)
    beta ~ filldist(Flat(), 2)
    sigma ~ truncated(Cauchy(0, 2.5); lower = 0)
    kid_score ~ MvNormal(beta[1] .+ beta[2] .* mom_hs, sigma^2 * I)
end

model = pdb_kidiq(kid_score, mom_hs, N)`,Ul=`# PosteriorDB: radon_mn-radon_hierarchical_intercept_noncentered
using PosteriorDB

pdb = PosteriorDB.database()
post = PosteriorDB.posterior(pdb, "radon_mn-radon_hierarchical_intercept_noncentered")
data = PosteriorDB.load(PosteriorDB.dataset(post))

J = data["J"]
N = data["N"]
county_idx = Int.(data["county_idx"])
log_uppm = Float64.(data["log_uppm"])
floor_measure = Float64.(data["floor_measure"])
log_radon = Float64.(data["log_radon"])

@model function pdb_radon(J, N, county_idx, log_uppm, floor_measure, log_radon)
    sigma_alpha ~ truncated(Normal(); lower = 0)
    sigma_y ~ truncated(Normal(); lower = 0)
    mu_alpha ~ Normal(0, 10)
    beta ~ filldist(Normal(0, 10), 2)
    alpha_raw ~ filldist(Normal(0, 1), J)
    alpha = mu_alpha .+ sigma_alpha .* alpha_raw

    mu = Vector{typeof(mu_alpha)}(undef, N)
    muj = Vector{typeof(mu_alpha)}(undef, N)
    for n = 1:N
        muj[n] = alpha[county_idx[n]] + (log_uppm[n] * beta[1])
        mu[n] = muj[n] + (floor_measure[n] * beta[2])
        log_radon[n] ~ Normal(mu[n], sigma_y)
    end
end

model = pdb_radon(J, N, county_idx, log_uppm, floor_measure, log_radon)`,Hl=`# PosteriorDB: rats_data-rats_model
using PosteriorDB

pdb = PosteriorDB.database()
post = PosteriorDB.posterior(pdb, "rats_data-rats_model")
data = PosteriorDB.load(PosteriorDB.dataset(post))

N = data["N"]
Npts = data["Npts"]
rat = Int.(data["rat"])
x = Float64.(data["x"])
y = Float64.(data["y"])
xbar = Float64(data["xbar"])

@model function pdb_rats(N, Npts, rat, x, y, xbar)
    mu_alpha ~ Normal(0, 100)
    mu_beta ~ Normal(0, 100)
    sigma_y ~ FlatPos(0.0)
    sigma_alpha ~ FlatPos(0.0)
    sigma_beta ~ FlatPos(0.0)
    alpha ~ filldist(Normal(mu_alpha, sigma_alpha), N)
    beta ~ filldist(Normal(mu_beta, sigma_beta), N)
    for n = 1:Npts
        irat = rat[n]
        mu = alpha[irat] + (beta[irat] * (x[n] - xbar))
        y[n] ~ Normal(mu, sigma_y)
    end
end

model = pdb_rats(N, Npts, rat, x, y, xbar)`,Gl=`# PosteriorDB: sblrc-blr
using PosteriorDB

pdb = PosteriorDB.database()
post = PosteriorDB.posterior(pdb, "sblrc-blr")
data = PosteriorDB.load(PosteriorDB.dataset(post))

X = Float64.(data["X"])
y = Float64.(data["y"])
D = data["D"]

@model function pdb_sblrc(X, y, D)
    beta ~ filldist(Normal(0, 10), D)
    sigma ~ truncated(Normal(0, 10); lower = 0)
    y ~ MvNormal(X * beta, sigma^2 * I)
end

model = pdb_sblrc(X, y, D)`,Kl=`@model function inner1()
    return a ~ Normal()
end
@model function assume_submodel()
    a ~ to_submodel(inner1())
    x ~ Normal(a)
end

model = assume_submodel()`,Xl=`# PosteriorDB: sblri-blr
using PosteriorDB

pdb = PosteriorDB.database()
post = PosteriorDB.posterior(pdb, "sblri-blr")
data = PosteriorDB.load(PosteriorDB.dataset(post))

X = Float64.(data["X"])
y = Float64.(data["y"])
D = data["D"]

@model function pdb_sblri(X, y, D)
    beta ~ filldist(Normal(0, 10), D)
    sigma ~ truncated(Normal(0, 10); lower = 0)
    y ~ MvNormal(X * beta, sigma^2 * I)
end

model = pdb_sblri(X, y, D)`,Wl=`@model function assume_wishart()
    a ~ Wishart(7, [1.0 0.5; 0.5 1.0])
end

model = assume_wishart()`,Jl=`@model function broadcast_macro(x = [1.5, 2.0], ::Type{TV} = Vector{Float64}) where {TV}
    a ~ Normal(0, 1)
    b ~ InverseGamma(2, 3)
    @. x ~ Normal(a, $(sqrt(b)))
end

model = broadcast_macro()`,Yl=`#= 
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

model = control_flow()`,Zl={abstractgps:Ha,assume_beta:Ga,delaydiffeq:Ka,demo_assume_dot_observe:Xa,demo_assume_dot_observe_literal:Wa,demo_assume_index_observe:Ja,demo_assume_matrix_observe_matrix_index:Ya,demo_assume_multivariate_observe:Za,demo_assume_multivariate_observe_literal:Qa,demo_assume_observe_literal:el,demo_assume_submodel_observe_index_literal:nl,demo_dot_assume_observe:tl,assume_dirichlet:rl,demo_dot_assume_observe_index:ol,demo_dot_assume_observe_index_literal:sl,demo_dot_assume_observe_matrix_index:il,demo_dot_assume_observe_submodel:al,dot_assume:ll,dot_observe:cl,dppl_gauss_unknown:ul,dppl_hier_poisson:fl,dppl_high_dim_gauss:dl,dppl_hmm_semisup:_l,assume_lkjcholu:ml,dppl_lda:pl,dppl_logistic_regression:vl,dppl_naive_bayes:gl,dppl_sto_volatility:hl,dynamic_constraint:bl,lux_nn:yl,multiple_constraints_same_var:wl,multithreaded:Dl,n010:El,n050:xl,assume_mvnormal:Rl,n100:Ml,n500:Fl,observe_bernoulli:Nl,observe_categorical:Tl,observe_index:kl,observe_literal:Sl,observe_multivariate:Cl,observe_submodel:Al,observe_von_mises:Pl,ordinarydiffeq:Ol,assume_normal:Il,pdb_arma11:Ll,pdb_earnings:Bl,pdb_earnings_male:zl,pdb_eightsch_centered:ql,pdb_eightsch_noncentered:Vl,pdb_garch11:jl,pdb_kidiq:$l,pdb_radon:Ul,pdb_rats:Hl,pdb_sblrc:Gl,assume_submodel:Kl,pdb_sblri:Xl,assume_wishart:Wl,broadcast_macro:Jl,control_flow:Yl};xs();const Ql="1.22.0",ec="1.5.0",nc="0.5.24",tc="5.15.1",rc="0.14.2",oc="0.4.5",sc="0.1.44",ic="4.5.2",ac="0.8.3",lc="0.8.10",cc="0.7.2",uc="0.6.2",fc="1.1.3",dc="2.5.0",_c="1.1.2",mc="0.4.0",pc="7.24.0",vc="1.11.0",gc="1.1.3",hc="1.1.0",bc="0.4.8",yc="0.4.9",wc="1.11.0",Dc="0.15.22",Ec="0.1.6",xc="1.12.1",Rc="0.5.0",Mc="0.2.7",Fc="0.3.14",Nc="1.73.0",Tc="1.26.1",kc="1.3.1",Sc="0.1.10",Cc="0.1.13",Ac="0.2.6",Pc="0.3.1",Oc="1.0.0",Ic="4.18.1",Lc="1.1.1+0",Bc="0.1.2",zc="0.2.3",qc="0.1.2",Vc="1.6.0",jc="0.3.1",$c="4.1.1",Uc="1.16.0",Hc="0.19.4",Gc="1.0.0",Kc="1.11.0",Xc="5.74.1",Wc="1.9.1",Jc="0.4.0",Yc="6.218.0",Zc="4.16.0",Qc="5.30.0",eu="1.1.0",nu="1.15.1",tu="0.7.16",ru="0.4.28",ou="0.10.12",su="1.11.0",iu="0.25.125",au="0.6.58",lu="0.9.5",cu="1.6.0",uu="0.40.24",fu="2.0.0",du="1.0.7",_u="0.13.138",mu="0.8.19",pu="0.0.256+0",vu="1.30.0",gu="0.1.10",hu="1.1.4",bu="0.10.14",yu="0.3.1",wu="1.3.2",Du="0.3.2",Eu="1.1.0",xu="1.3.1",Ru="1.11.0",Mu="1.16.0",Fu="2.30.0",Nu="0.12.33",Tu="1.3.3",ku="0.1.2",Su="1.1.3",Cu="1.8.0",Au="0.5.2",Pu="1.11.0",Ou="0.2.0",Iu="1.9.1",Lu="0.5.6",Bu="1.14.0",zu="0.2.0",qu="0.3.28",Vu="0.4.15",ju="0.1.1",$u="0.1.5",Uu="0.3.1",Hu="0.1.3",Gu="2025.2.0+0",Ku="1.11.0",Xu="0.16.2",Wu="0.7.14",Ju="0.1.17",Yu="0.2.6",Zu="1.10.0",Qu="1.0.0",ef="1.7.1",nf="1.14.3",tf="0.2.1",rf="0.9.41",of="0.6.11",sf="0.10.67",af="0.10.6",lf="9.7.0",cf="0.0.42+0",uf="1.4.0",ff="0.1.17",df="1.11.0",_f="0.2.1",mf="0.6.4",pf="8.6.0+0",vf="1.11.0",gf="1.7.2+0",hf="1.11.0+1",bf="0.13.1+0",yf="1.11.0",wf="0.9.17",Df="0.1.8",Ef="7.6.1",xf="1.11.0",Rf="3.75.0",Mf="2.2.0",Ff="1.13.1",Nf="0.3.29",Tf="1.11.0",kf="1.2.0",Sf="1.31.4",Cf="1.5.3",Af="1.15.9",Pf="7.7.0",Of="0.3.17",If="2025.2.0+0",Lf="1.17.8",Bf="1.12.1",zf="0.5.16",qf="0.1.8",Vf="0.4.3",jf="1.11.0",$f="0.1.4",Uf="2.28.6+0",Hf="1.2.0",Gf="2.1.0",Kf="1.11.0",Xf="0.5.24",Wf="0.3.7",Jf="2023.12.12",Yf="0.2.4",Zf="8.0.0",Qf="0.9.34",ed="1.1.3",nd="1.0.0",td="1.2.0",rd="4.19.0",od="2.25.0",sd="2.1.1",id="1.13.1",ad="1.7.1",ld="0.5.0",cd="1.17.0",ud="0.3.27+1",fd="0.8.5+0",dd="0.5.6+0",_d="2.0.1",md="0.4.7",pd="5.5.1",vd="5.1.1",gd="0.4.13",hd="1.8.1",bd="6.111.0",yd="1.11.0",wd="1.26.0",Dd="3.33.1",Ed="1.14.0",xd="2.9.0",Rd="1.12.0",Md="1.15.0",Fd="1.18.0",Nd="1.26.0",Td="1.10.0",kd="1.11.0",Sd="1.12.0",Cd="1.14.0",Ad="1.12.0",Pd="1.13.0",Od="1.15.0",Id="1.28.0",Ld="1.11.0",Bd="1.14.0",zd="1.10.0",qd="1.10.0",Vd="1.12.0",jd="1.31.1",$d="1.14.0",Ud="1.14.0",Hd="1.14.0",Gd="1.11.1",Kd="1.13.0",Xd="1.12.0",Wd="1.14.0",Jd="0.11.37",Yd="2.8.3",Zd="1.11.0",Qd="0.4.7",e1="0.7.19",n1="0.2.2",t1="0.2.4",r1="0.6.0",o1="1.2.0",s1="1.2.1",i1="1.5.2",a1="3.3.2",l1="0.5.7",c1="1.11.0",u1="0.1.6",f1="1.11.0",d1="1.4.0",_1="2.11.3",m1="1.11.0",p1="1.11.0",v1="1.7.1",g1="1.6.0",h1="0.3.2",b1="0.4.5",y1="0.1.19",w1="0.1.0",D1="1.3.4",E1="3.54.0",x1="1.2.2",R1="1.3.1",M1="1.2.0",F1="1.16.2",N1="1.4.2",T1="0.9.0",k1="0.5.1+0",S1="3.0.0",C1="0.5.18",A1="0.7.0",P1="0.1.0",O1="0.6.1",I1="2.155.1",L1="0.1.13",B1="1.9.1",z1="1.17.0",q1="1.0.1",V1="7.103.0",j1="1.10.0",$1="3.1.0",U1="1.6.0",H1="1.3.0",G1="1.11.0",K1="1.1.2",X1="1.11.0",W1="2.11.1",J1="0.9.5",Y1="1.11.0",Z1="1.2.2",Q1="1.11.0",e_="1.2.1",n_="0.1.2",t_="0.4.27",r_="2.7.2",o_="1.3.1",s_="1.9.0",i_="1.9.18",a_="1.4.4",l_="3.5.0",c_="1.11.1",u_="1.8.0",f_="0.34.10",d_="1.5.2",__="0.5.8",m_="0.4.4",p_="0.7.3",v_="0.3.1",g_="1.11.0",h_="2.8.0",b_="1.11.0",y_=null,w_="7.7.0+0",D_="0.3.46",E_="1.0.3",x_="1.0.1",R_="1.12.1",M_="1.10.0",F_="0.1.1",N_="0.1.7",T_="1.11.0",k_="0.5.5",S_="0.5.29",C_="0.2.38",A_="0.1.6",P_="1.4.0",O_="0.43.7",I_="1.11.0",L_="1.11.0",B_="0.3.1",z_="1.3.3",q_="1.1.0",V_="0.10.1",j_="1.2.13+1",$_="0.7.10",U_="0.2.7",H_="5.11.0+0",G_="1.59.0+0",K_="2022.0.0+1",X_="17.4.0+2",W_={ADTypes:Ql,AbstractFFTs:ec,AbstractGPs:nc,AbstractMCMC:tc,AbstractPPL:rc,AbstractTrees:oc,Accessors:sc,Adapt:ic,AdvancedHMC:ac,AdvancedMH:lc,AdvancedPS:cc,AdvancedVI:uc,AliasTables:fc,ArgCheck:dc,ArgTools:_c,ArnoldiMethod:mc,ArrayInterface:pc,Artifacts:vc,Atomix:gc,AxisAlgorithms:hc,AxisArrays:bc,BangBang:yc,Base64:wc,Bijectors:Dc,BitTwiddlingConvenienceFunctions:Ec,BracketingNonlinearSolve:xc,CEnum:Rc,CPUSummary:Mc,Cassette:Fc,ChainRules:Nc,ChainRulesCore:Tc,Chairmarks:kc,ChangesOfVariables:Sc,CloseOpenIntervals:Cc,CommonSolve:Ac,CommonSubexpressions:Pc,CommonWorldInvalidations:Oc,Compat:Ic,CompilerSupportLibraries_jll:Lc,CompositionsBase:Bc,ConcreteStructs:zc,ConsoleProgressMonitor:qc,ConstructionBase:Vc,CpuId:jc,Crayons:$c,DataAPI:Uc,DataStructures:Hc,DataValueInterfaces:Gc,Dates:Kc,DelayDiffEq:Xc,DelimitedFiles:Wc,DensityInterface:Jc,DiffEqBase:Yc,DiffEqCallbacks:Zc,DiffEqNoiseProcess:Qc,DiffResults:eu,DiffRules:nu,DifferentiationInterface:tu,DispatchDoctor:ru,Distances:ou,Distributed:su,Distributions:iu,DistributionsAD:au,DocStringExtensions:lu,Downloads:cu,DynamicPPL:uu,EllipticalSliceSampling:fu,EnumX:du,Enzyme:_u,EnzymeCore:mu,Enzyme_jll:pu,ExponentialUtilities:vu,ExprTools:gu,ExpressionExplorer:hu,ExproniconLite:bu,FFTA:yu,FastBroadcast:wu,FastClosures:Du,FastGaussQuadrature:Eu,FastPower:xu,FileWatching:Ru,FillArrays:Mu,FiniteDiff:Fu,FiniteDifferences:Nu,ForwardDiff:Tu,FunctionProperties:ku,FunctionWrappers:Su,FunctionWrappersWrappers:Cu,Functors:Au,Future:Pu,GPUArraysCore:Ou,GPUCompiler:Iu,GenericSchur:Lu,Graphs:Bu,HashArrayMappedTries:zu,HypergeometricFunctions:qu,IRTools:Vu,IfElse:ju,Inflate:$u,InitialValues:Uu,IntegerMathUtils:Hu,IntelOpenMP_jll:Gu,InteractiveUtils:Ku,Interpolations:Xu,IntervalSets:Wu,InverseFunctions:Ju,IrrationalConstants:Yu,IterTools:Zu,IteratorInterfaceExtensions:Qu,JLLWrappers:ef,JSON:"1.5.0",JSON3:nf,Jieko:tf,KernelAbstractions:rf,KernelDensity:of,KernelFunctions:sf,Krylov:af,LLVM:lf,LLVMExtra_jll:cf,LaTeXStrings:uf,LayoutPointers:ff,LazyArtifacts:df,LeftChildRightSiblingTrees:_f,LibCURL:mf,LibCURL_jll:pf,LibGit2:vf,LibGit2_jll:gf,LibSSH2_jll:hf,LibTracyClient_jll:bf,Libdl:yf,Libtask:wf,LineSearch:Df,LineSearches:Ef,LinearAlgebra:xf,LinearSolve:Rf,LogDensityProblems:Mf,LogDensityProblemsAD:Ff,LogExpFunctions:Nf,Logging:Tf,LoggingExtras:kf,Lux:Sf,LuxCore:Cf,LuxLib:Af,MCMCChains:Pf,MCMCDiagnosticTools:Of,MKL_jll:If,MLDataDevices:Lf,MLJModelInterface:Bf,MacroTools:zf,ManualMemory:qf,MappedArrays:Vf,Markdown:jf,MaybeInplace:$f,MbedTLS_jll:Uf,Missings:Hf,MistyClosures:Gf,Mmap:Kf,Mooncake:Xf,Moshi:Wf,MozillaCACerts_jll:Jf,MuladdMacro:Yf,NLSolversBase:Zf,NNlib:Qf,NaNMath:ed,NaturalSort:nd,NetworkOptions:td,NonlinearSolve:rd,NonlinearSolveBase:od,NonlinearSolveFirstOrder:sd,NonlinearSolveQuasiNewton:id,NonlinearSolveSpectralMethods:ad,ObjectFile:ld,OffsetArrays:cd,OpenBLAS_jll:ud,OpenLibm_jll:fd,OpenSpecFun_jll:dd,Optim:_d,Optimisers:md,Optimization:pd,OptimizationBase:vd,OptimizationOptimJL:gd,OrderedCollections:hd,OrdinaryDiffEq:bd,OrdinaryDiffEqAdamsBashforthMoulton:yd,OrdinaryDiffEqBDF:wd,OrdinaryDiffEqCore:Dd,OrdinaryDiffEqDefault:Ed,OrdinaryDiffEqDifferentiation:xd,OrdinaryDiffEqExplicitRK:Rd,OrdinaryDiffEqExponentialRK:Md,OrdinaryDiffEqExtrapolation:Fd,OrdinaryDiffEqFIRK:Nd,OrdinaryDiffEqFeagin:Td,OrdinaryDiffEqFunctionMap:kd,OrdinaryDiffEqHighOrderRK:Sd,OrdinaryDiffEqIMEXMultistep:Cd,OrdinaryDiffEqLinear:Ad,OrdinaryDiffEqLowOrderRK:Pd,OrdinaryDiffEqLowStorageRK:Od,OrdinaryDiffEqNonlinearSolve:Id,OrdinaryDiffEqNordsieck:Ld,OrdinaryDiffEqPDIRK:Bd,OrdinaryDiffEqPRK:zd,OrdinaryDiffEqQPRK:qd,OrdinaryDiffEqRKN:Vd,OrdinaryDiffEqRosenbrock:jd,OrdinaryDiffEqSDIRK:$d,OrdinaryDiffEqSSPRK:Ud,OrdinaryDiffEqStabilizedIRK:Hd,OrdinaryDiffEqStabilizedRK:Gd,OrdinaryDiffEqSymplecticRK:Kd,OrdinaryDiffEqTsit5:Xd,OrdinaryDiffEqVerner:Wd,PDMats:Jd,Parsers:Yd,Pkg:Zd,PoissonRandom:Qd,Polyester:e1,PolyesterWeave:n1,PositiveFactorizations:t1,PosteriorDB:r1,PreallocationTools:o1,PrecompileTools:s1,Preferences:i1,PrettyTables:a1,Primes:l1,Printf:c1,ProgressLogging:u1,ProgressMeter:f1,PtrArrays:d1,QuadGK:_1,REPL:m1,Random:p1,Random123:v1,RandomNumbers:g1,RangeArrays:h1,Ratios:b1,ReactantCore:y1,RealDot:w1,RecipesBase:D1,RecursiveArrayTools:E1,Reexport:x1,Requires:R1,ResettableStacks:M1,ReverseDiff:F1,Richardson:N1,Rmath:T1,Rmath_jll:k1,Roots:S1,RuntimeGeneratedFunctions:C1,SHA:A1,SIMDTypes:P1,SSMProblems:O1,SciMLBase:I1,SciMLJacobianOperators:L1,SciMLLogging:B1,SciMLOperators:z1,SciMLPublic:q1,SciMLSensitivity:V1,SciMLStructures:j1,ScientificTypesBase:$1,ScopedValues:U1,Scratch:H1,Serialization:G1,Setfield:K1,SharedArrays:X1,SimpleNonlinearSolve:W1,SimpleTraits:J1,Sockets:Y1,SortingAlgorithms:Z1,SparseArrays:Q1,SparseConnectivityTracer:e_,SparseInverseSubset:n_,SparseMatrixColorings:t_,SpecialFunctions:r_,Static:o_,StaticArrayInterface:s_,StaticArrays:i_,StaticArraysCore:a_,StatisticalTraits:l_,Statistics:c_,StatsAPI:u_,StatsBase:f_,StatsFuns:d_,StrideArraysCore:__,StringManipulation:m_,StructArrays:p_,StructIO:v_,StructTypes:g_,StructUtils:h_,StyledStrings:b_,SuiteSparse:y_,SuiteSparse_jll:w_,SymbolicIndexingInterface:D_,TOML:E_,TableTraits:x_,Tables:R_,Tar:M_,TensorCore:F_,TerminalLoggers:N_,Test:T_,ThreadingUtilities:k_,TimerOutputs:S_,Tracker:C_,Tracy:A_,TruncatedStacktraces:P_,Turing:O_,UUIDs:I_,Unicode:L_,UnsafeAtomics:B_,WeightInitializers:z_,WoodburyMatrices:q_,ZipFile:V_,Zlib_jll:j_,Zygote:$_,ZygoteRules:U_,libblastrampoline_jll:H_,nghttp2_jll:G_,oneTBB_jll:K_,p7zip_jll:X_};function Nr(e){switch(e){case"FiniteDifferences":return 1;case"ForwardDiff":return 11;case"EnzymeFwd":return 12;case"MooncakeFwd":return 13;case"ReverseDiff":return 21;case"ReverseDiffCompiled":return 22;case"EnzymeRev":return 23;case"MooncakeRev":return 24;default:return 500}}function vo(e,n){const t=Nr(e),r=Nr(n);return t<r?-1:t>r?1:e.localeCompare(n)}function It(e){return[...e.entries()].sort(([n,t],[r,o])=>vo(n,r))}var J_=ue('<tr><td class="svelte-yinbl0"> </td><td class="version svelte-yinbl0"> </td></tr>'),Y_=ue('<table class="svelte-yinbl0"><thead><tr><th class="svelte-yinbl0">Package</th><th class="svelte-yinbl0">Version</th></tr></thead><tbody></tbody></table>');function Z_(e,n){_n(n,!1);let t=new Map;for(const[s,a]of Object.entries(W_))t.set(s,a===""?null:a);po();var r=Y_(),o=se(z(r));Mn(o,5,()=>It(t),Rn,(s,a,c)=>{let l=()=>D(a)[0],u=()=>D(a)[1];var m=J_();Tn(m,1,"svelte-yinbl0",null,{},{alt:c%2===1});var _=z(m),f=z(_),h=se(_),b=z(h);he(()=>{ze(f,l()),ze(b,u()===null?"":`v${u()}`)}),G(s,m)}),G(e,r),mn()}var Q_=ue('<td class="model-name svelte-73y89f"> </td>');function e0(e,n){var t=Q_();t.__click=function(...o){var s;(s=n.onToggle)==null||s.apply(this,o)};var r=z(t);he(()=>ze(r,n.name)),G(e,t)}ft(["click"]);function n0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ft,Tr;function t0(){if(Tr)return Ft;Tr=1;function e(i){return i instanceof Map?i.clear=i.delete=i.set=function(){throw new Error("map is read-only")}:i instanceof Set&&(i.add=i.clear=i.delete=function(){throw new Error("set is read-only")}),Object.freeze(i),Object.getOwnPropertyNames(i).forEach(d=>{const g=i[d],C=typeof g;(C==="object"||C==="function")&&!Object.isFrozen(g)&&e(g)}),i}class n{constructor(d){d.data===void 0&&(d.data={}),this.data=d.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(i,...d){const g=Object.create(null);for(const C in i)g[C]=i[C];return d.forEach(function(C){for(const W in C)g[W]=C[W]}),g}const o="</span>",s=i=>!!i.scope,a=(i,{prefix:d})=>{if(i.startsWith("language:"))return i.replace("language:","language-");if(i.includes(".")){const g=i.split(".");return[`${d}${g.shift()}`,...g.map((C,W)=>`${C}${"_".repeat(W+1)}`)].join(" ")}return`${d}${i}`};class c{constructor(d,g){this.buffer="",this.classPrefix=g.classPrefix,d.walk(this)}addText(d){this.buffer+=t(d)}openNode(d){if(!s(d))return;const g=a(d.scope,{prefix:this.classPrefix});this.span(g)}closeNode(d){s(d)&&(this.buffer+=o)}value(){return this.buffer}span(d){this.buffer+=`<span class="${d}">`}}const l=(i={})=>{const d={children:[]};return Object.assign(d,i),d};class u{constructor(){this.rootNode=l(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(d){this.top.children.push(d)}openNode(d){const g=l({scope:d});this.add(g),this.stack.push(g)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(d){return this.constructor._walk(d,this.rootNode)}static _walk(d,g){return typeof g=="string"?d.addText(g):g.children&&(d.openNode(g),g.children.forEach(C=>this._walk(d,C)),d.closeNode(g)),d}static _collapse(d){typeof d!="string"&&d.children&&(d.children.every(g=>typeof g=="string")?d.children=[d.children.join("")]:d.children.forEach(g=>{u._collapse(g)}))}}class m extends u{constructor(d){super(),this.options=d}addText(d){d!==""&&this.add(d)}startScope(d){this.openNode(d)}endScope(){this.closeNode()}__addSublanguage(d,g){const C=d.root;g&&(C.scope=`language:${g}`),this.add(C)}toHTML(){return new c(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(i){return i?typeof i=="string"?i:i.source:null}function f(i){return k("(?=",i,")")}function h(i){return k("(?:",i,")*")}function b(i){return k("(?:",i,")?")}function k(...i){return i.map(g=>_(g)).join("")}function F(i){const d=i[i.length-1];return typeof d=="object"&&d.constructor===Object?(i.splice(i.length-1,1),d):{}}function I(...i){return"("+(F(i).capture?"":"?:")+i.map(C=>_(C)).join("|")+")"}function q(i){return new RegExp(i.toString()+"|").exec("").length-1}function x(i,d){const g=i&&i.exec(d);return g&&g.index===0}const v=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function y(i,{joinWith:d}){let g=0;return i.map(C=>{g+=1;const W=g;let J=_(C),R="";for(;J.length>0;){const E=v.exec(J);if(!E){R+=J;break}R+=J.substring(0,E.index),J=J.substring(E.index+E[0].length),E[0][0]==="\\"&&E[1]?R+="\\"+String(Number(E[1])+W):(R+=E[0],E[0]==="("&&g++)}return R}).map(C=>`(${C})`).join(d)}const B=/\b\B/,M="[a-zA-Z]\\w*",P="[a-zA-Z_]\\w*",X="\\b\\d+(\\.\\d+)?",fe="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ee="\\b(0b[01]+)",ne="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",de=(i={})=>{const d=/^#![ ]*\//;return i.binary&&(i.begin=k(d,/.*\b/,i.binary,/\b.*/)),r({scope:"meta",begin:d,end:/$/,relevance:0,"on:begin":(g,C)=>{g.index!==0&&C.ignoreMatch()}},i)},ye={begin:"\\\\[\\s\\S]",relevance:0},Me={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ye]},me={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ye]},Fe={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Ee=function(i,d,g={}){const C=r({scope:"comment",begin:i,end:d,contains:[]},g);C.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const W=I("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return C.contains.push({begin:k(/[ ]+/,"(",W,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),C},gn=Ee("//","$"),Ne=Ee("/\\*","\\*/"),ie=Ee("#","$"),Te={scope:"number",begin:X,relevance:0},hn={scope:"number",begin:fe,relevance:0},nn={scope:"number",begin:ee,relevance:0},_t={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ye,{begin:/\[/,end:/\]/,relevance:0,contains:[ye]}]},bn={scope:"title",begin:M,relevance:0},An={scope:"title",begin:P,relevance:0},mt={begin:"\\.\\s*"+P,relevance:0};var Pn=Object.freeze({__proto__:null,APOS_STRING_MODE:Me,BACKSLASH_ESCAPE:ye,BINARY_NUMBER_MODE:nn,BINARY_NUMBER_RE:ee,COMMENT:Ee,C_BLOCK_COMMENT_MODE:Ne,C_LINE_COMMENT_MODE:gn,C_NUMBER_MODE:hn,C_NUMBER_RE:fe,END_SAME_AS_BEGIN:function(i){return Object.assign(i,{"on:begin":(d,g)=>{g.data._beginMatch=d[1]},"on:end":(d,g)=>{g.data._beginMatch!==d[1]&&g.ignoreMatch()}})},HASH_COMMENT_MODE:ie,IDENT_RE:M,MATCH_NOTHING_RE:B,METHOD_GUARD:mt,NUMBER_MODE:Te,NUMBER_RE:X,PHRASAL_WORDS_MODE:Fe,QUOTE_STRING_MODE:me,REGEXP_MODE:_t,RE_STARTERS_RE:ne,SHEBANG:de,TITLE_MODE:bn,UNDERSCORE_IDENT_RE:P,UNDERSCORE_TITLE_MODE:An});function yo(i,d){i.input[i.index-1]==="."&&d.ignoreMatch()}function wo(i,d){i.className!==void 0&&(i.scope=i.className,delete i.className)}function Do(i,d){d&&i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",i.__beforeBegin=yo,i.keywords=i.keywords||i.beginKeywords,delete i.beginKeywords,i.relevance===void 0&&(i.relevance=0))}function Eo(i,d){Array.isArray(i.illegal)&&(i.illegal=I(...i.illegal))}function xo(i,d){if(i.match){if(i.begin||i.end)throw new Error("begin & end are not supported with match");i.begin=i.match,delete i.match}}function Ro(i,d){i.relevance===void 0&&(i.relevance=1)}const Mo=(i,d)=>{if(!i.beforeMatch)return;if(i.starts)throw new Error("beforeMatch cannot be used with starts");const g=Object.assign({},i);Object.keys(i).forEach(C=>{delete i[C]}),i.keywords=g.keywords,i.begin=k(g.beforeMatch,f(g.begin)),i.starts={relevance:0,contains:[Object.assign(g,{endsParent:!0})]},i.relevance=0,delete g.beforeMatch},Fo=["of","and","for","in","not","or","if","then","parent","list","value"],No="keyword";function Yt(i,d,g=No){const C=Object.create(null);return typeof i=="string"?W(g,i.split(" ")):Array.isArray(i)?W(g,i):Object.keys(i).forEach(function(J){Object.assign(C,Yt(i[J],d,J))}),C;function W(J,R){d&&(R=R.map(E=>E.toLowerCase())),R.forEach(function(E){const S=E.split("|");C[S[0]]=[J,To(S[0],S[1])]})}}function To(i,d){return d?Number(d):ko(i)?0:1}function ko(i){return Fo.includes(i.toLowerCase())}const Zt={},Ye=i=>{console.error(i)},Qt=(i,...d)=>{console.log(`WARN: ${i}`,...d)},tn=(i,d)=>{Zt[`${i}/${d}`]||(console.log(`Deprecated as of ${i}. ${d}`),Zt[`${i}/${d}`]=!0)},On=new Error;function er(i,d,{key:g}){let C=0;const W=i[g],J={},R={};for(let E=1;E<=d.length;E++)R[E+C]=W[E],J[E+C]=!0,C+=q(d[E-1]);i[g]=R,i[g]._emit=J,i[g]._multi=!0}function So(i){if(Array.isArray(i.begin)){if(i.skip||i.excludeBegin||i.returnBegin)throw Ye("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),On;if(typeof i.beginScope!="object"||i.beginScope===null)throw Ye("beginScope must be object"),On;er(i,i.begin,{key:"beginScope"}),i.begin=y(i.begin,{joinWith:""})}}function Co(i){if(Array.isArray(i.end)){if(i.skip||i.excludeEnd||i.returnEnd)throw Ye("skip, excludeEnd, returnEnd not compatible with endScope: {}"),On;if(typeof i.endScope!="object"||i.endScope===null)throw Ye("endScope must be object"),On;er(i,i.end,{key:"endScope"}),i.end=y(i.end,{joinWith:""})}}function Ao(i){i.scope&&typeof i.scope=="object"&&i.scope!==null&&(i.beginScope=i.scope,delete i.scope)}function Po(i){Ao(i),typeof i.beginScope=="string"&&(i.beginScope={_wrap:i.beginScope}),typeof i.endScope=="string"&&(i.endScope={_wrap:i.endScope}),So(i),Co(i)}function Oo(i){function d(R,E){return new RegExp(_(R),"m"+(i.case_insensitive?"i":"")+(i.unicodeRegex?"u":"")+(E?"g":""))}class g{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(E,S){S.position=this.position++,this.matchIndexes[this.matchAt]=S,this.regexes.push([S,E]),this.matchAt+=q(E)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const E=this.regexes.map(S=>S[1]);this.matcherRe=d(y(E,{joinWith:"|"}),!0),this.lastIndex=0}exec(E){this.matcherRe.lastIndex=this.lastIndex;const S=this.matcherRe.exec(E);if(!S)return null;const te=S.findIndex((yn,vt)=>vt>0&&yn!==void 0),Y=this.matchIndexes[te];return S.splice(0,te),Object.assign(S,Y)}}class C{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(E){if(this.multiRegexes[E])return this.multiRegexes[E];const S=new g;return this.rules.slice(E).forEach(([te,Y])=>S.addRule(te,Y)),S.compile(),this.multiRegexes[E]=S,S}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(E,S){this.rules.push([E,S]),S.type==="begin"&&this.count++}exec(E){const S=this.getMatcher(this.regexIndex);S.lastIndex=this.lastIndex;let te=S.exec(E);if(this.resumingScanAtSamePosition()&&!(te&&te.index===this.lastIndex)){const Y=this.getMatcher(0);Y.lastIndex=this.lastIndex+1,te=Y.exec(E)}return te&&(this.regexIndex+=te.position+1,this.regexIndex===this.count&&this.considerAll()),te}}function W(R){const E=new C;return R.contains.forEach(S=>E.addRule(S.begin,{rule:S,type:"begin"})),R.terminatorEnd&&E.addRule(R.terminatorEnd,{type:"end"}),R.illegal&&E.addRule(R.illegal,{type:"illegal"}),E}function J(R,E){const S=R;if(R.isCompiled)return S;[wo,xo,Po,Mo].forEach(Y=>Y(R,E)),i.compilerExtensions.forEach(Y=>Y(R,E)),R.__beforeBegin=null,[Do,Eo,Ro].forEach(Y=>Y(R,E)),R.isCompiled=!0;let te=null;return typeof R.keywords=="object"&&R.keywords.$pattern&&(R.keywords=Object.assign({},R.keywords),te=R.keywords.$pattern,delete R.keywords.$pattern),te=te||/\w+/,R.keywords&&(R.keywords=Yt(R.keywords,i.case_insensitive)),S.keywordPatternRe=d(te,!0),E&&(R.begin||(R.begin=/\B|\b/),S.beginRe=d(S.begin),!R.end&&!R.endsWithParent&&(R.end=/\B|\b/),R.end&&(S.endRe=d(S.end)),S.terminatorEnd=_(S.end)||"",R.endsWithParent&&E.terminatorEnd&&(S.terminatorEnd+=(R.end?"|":"")+E.terminatorEnd)),R.illegal&&(S.illegalRe=d(R.illegal)),R.contains||(R.contains=[]),R.contains=[].concat(...R.contains.map(function(Y){return Io(Y==="self"?R:Y)})),R.contains.forEach(function(Y){J(Y,S)}),R.starts&&J(R.starts,E),S.matcher=W(S),S}if(i.compilerExtensions||(i.compilerExtensions=[]),i.contains&&i.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return i.classNameAliases=r(i.classNameAliases||{}),J(i)}function nr(i){return i?i.endsWithParent||nr(i.starts):!1}function Io(i){return i.variants&&!i.cachedVariants&&(i.cachedVariants=i.variants.map(function(d){return r(i,{variants:null},d)})),i.cachedVariants?i.cachedVariants:nr(i)?r(i,{starts:i.starts?r(i.starts):null}):Object.isFrozen(i)?r(i):i}var Lo="11.11.1";class Bo extends Error{constructor(d,g){super(d),this.name="HTMLInjectionError",this.html=g}}const pt=t,tr=r,rr=Symbol("nomatch"),zo=7,or=function(i){const d=Object.create(null),g=Object.create(null),C=[];let W=!0;const J="Could not find the language '{}', did you forget to load/include a language module?",R={disableAutodetect:!0,name:"Plain text",contains:[]};let E={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:m};function S(p){return E.noHighlightRe.test(p)}function te(p){let T=p.className+" ";T+=p.parentNode?p.parentNode.className:"";const L=E.languageDetectRe.exec(T);if(L){const U=je(L[1]);return U||(Qt(J.replace("{}",L[1])),Qt("Falling back to no-highlight mode for this block.",p)),U?L[1]:"no-highlight"}return T.split(/\s+/).find(U=>S(U)||je(U))}function Y(p,T,L){let U="",Q="";typeof T=="object"?(U=p,L=T.ignoreIllegals,Q=T.language):(tn("10.7.0","highlight(lang, code, ...args) has been deprecated."),tn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),Q=p,U=T),L===void 0&&(L=!0);const xe={code:U,language:Q};Ln("before:highlight",xe);const $e=xe.result?xe.result:yn(xe.language,xe.code,L);return $e.code=xe.code,Ln("after:highlight",$e),$e}function yn(p,T,L,U){const Q=Object.create(null);function xe(w,N){return w.keywords[N]}function $e(){if(!A.keywords){re.addText(H);return}let w=0;A.keywordPatternRe.lastIndex=0;let N=A.keywordPatternRe.exec(H),O="";for(;N;){O+=H.substring(w,N.index);const V=Se.case_insensitive?N[0].toLowerCase():N[0],oe=xe(A,V);if(oe){const[Ie,ts]=oe;if(re.addText(O),O="",Q[V]=(Q[V]||0)+1,Q[V]<=zo&&(qn+=ts),Ie.startsWith("_"))O+=N[0];else{const rs=Se.classNameAliases[Ie]||Ie;ke(N[0],rs)}}else O+=N[0];w=A.keywordPatternRe.lastIndex,N=A.keywordPatternRe.exec(H)}O+=H.substring(w),re.addText(O)}function Bn(){if(H==="")return;let w=null;if(typeof A.subLanguage=="string"){if(!d[A.subLanguage]){re.addText(H);return}w=yn(A.subLanguage,H,!0,dr[A.subLanguage]),dr[A.subLanguage]=w._top}else w=gt(H,A.subLanguage.length?A.subLanguage:null);A.relevance>0&&(qn+=w.relevance),re.__addSublanguage(w._emitter,w.language)}function pe(){A.subLanguage!=null?Bn():$e(),H=""}function ke(w,N){w!==""&&(re.startScope(N),re.addText(w),re.endScope())}function lr(w,N){let O=1;const V=N.length-1;for(;O<=V;){if(!w._emit[O]){O++;continue}const oe=Se.classNameAliases[w[O]]||w[O],Ie=N[O];oe?ke(Ie,oe):(H=Ie,$e(),H=""),O++}}function cr(w,N){return w.scope&&typeof w.scope=="string"&&re.openNode(Se.classNameAliases[w.scope]||w.scope),w.beginScope&&(w.beginScope._wrap?(ke(H,Se.classNameAliases[w.beginScope._wrap]||w.beginScope._wrap),H=""):w.beginScope._multi&&(lr(w.beginScope,N),H="")),A=Object.create(w,{parent:{value:A}}),A}function ur(w,N,O){let V=x(w.endRe,O);if(V){if(w["on:end"]){const oe=new n(w);w["on:end"](N,oe),oe.isMatchIgnored&&(V=!1)}if(V){for(;w.endsParent&&w.parent;)w=w.parent;return w}}if(w.endsWithParent)return ur(w.parent,N,O)}function Yo(w){return A.matcher.regexIndex===0?(H+=w[0],1):(wt=!0,0)}function Zo(w){const N=w[0],O=w.rule,V=new n(O),oe=[O.__beforeBegin,O["on:begin"]];for(const Ie of oe)if(Ie&&(Ie(w,V),V.isMatchIgnored))return Yo(N);return O.skip?H+=N:(O.excludeBegin&&(H+=N),pe(),!O.returnBegin&&!O.excludeBegin&&(H=N)),cr(O,w),O.returnBegin?0:N.length}function Qo(w){const N=w[0],O=T.substring(w.index),V=ur(A,w,O);if(!V)return rr;const oe=A;A.endScope&&A.endScope._wrap?(pe(),ke(N,A.endScope._wrap)):A.endScope&&A.endScope._multi?(pe(),lr(A.endScope,w)):oe.skip?H+=N:(oe.returnEnd||oe.excludeEnd||(H+=N),pe(),oe.excludeEnd&&(H=N));do A.scope&&re.closeNode(),!A.skip&&!A.subLanguage&&(qn+=A.relevance),A=A.parent;while(A!==V.parent);return V.starts&&cr(V.starts,w),oe.returnEnd?0:N.length}function es(){const w=[];for(let N=A;N!==Se;N=N.parent)N.scope&&w.unshift(N.scope);w.forEach(N=>re.openNode(N))}let zn={};function fr(w,N){const O=N&&N[0];if(H+=w,O==null)return pe(),0;if(zn.type==="begin"&&N.type==="end"&&zn.index===N.index&&O===""){if(H+=T.slice(N.index,N.index+1),!W){const V=new Error(`0 width match regex (${p})`);throw V.languageName=p,V.badRule=zn.rule,V}return 1}if(zn=N,N.type==="begin")return Zo(N);if(N.type==="illegal"&&!L){const V=new Error('Illegal lexeme "'+O+'" for mode "'+(A.scope||"<unnamed>")+'"');throw V.mode=A,V}else if(N.type==="end"){const V=Qo(N);if(V!==rr)return V}if(N.type==="illegal"&&O==="")return H+=`
`,1;if(yt>1e5&&yt>N.index*3)throw new Error("potential infinite loop, way more iterations than matches");return H+=O,O.length}const Se=je(p);if(!Se)throw Ye(J.replace("{}",p)),new Error('Unknown language: "'+p+'"');const ns=Oo(Se);let bt="",A=U||ns;const dr={},re=new E.__emitter(E);es();let H="",qn=0,Ze=0,yt=0,wt=!1;try{if(Se.__emitTokens)Se.__emitTokens(T,re);else{for(A.matcher.considerAll();;){yt++,wt?wt=!1:A.matcher.considerAll(),A.matcher.lastIndex=Ze;const w=A.matcher.exec(T);if(!w)break;const N=T.substring(Ze,w.index),O=fr(N,w);Ze=w.index+O}fr(T.substring(Ze))}return re.finalize(),bt=re.toHTML(),{language:p,value:bt,relevance:qn,illegal:!1,_emitter:re,_top:A}}catch(w){if(w.message&&w.message.includes("Illegal"))return{language:p,value:pt(T),illegal:!0,relevance:0,_illegalBy:{message:w.message,index:Ze,context:T.slice(Ze-100,Ze+100),mode:w.mode,resultSoFar:bt},_emitter:re};if(W)return{language:p,value:pt(T),illegal:!1,relevance:0,errorRaised:w,_emitter:re,_top:A};throw w}}function vt(p){const T={value:pt(p),illegal:!1,relevance:0,_top:R,_emitter:new E.__emitter(E)};return T._emitter.addText(p),T}function gt(p,T){T=T||E.languages||Object.keys(d);const L=vt(p),U=T.filter(je).filter(ar).map(pe=>yn(pe,p,!1));U.unshift(L);const Q=U.sort((pe,ke)=>{if(pe.relevance!==ke.relevance)return ke.relevance-pe.relevance;if(pe.language&&ke.language){if(je(pe.language).supersetOf===ke.language)return 1;if(je(ke.language).supersetOf===pe.language)return-1}return 0}),[xe,$e]=Q,Bn=xe;return Bn.secondBest=$e,Bn}function qo(p,T,L){const U=T&&g[T]||L;p.classList.add("hljs"),p.classList.add(`language-${U}`)}function ht(p){let T=null;const L=te(p);if(S(L))return;if(Ln("before:highlightElement",{el:p,language:L}),p.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",p);return}if(p.children.length>0&&(E.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(p)),E.throwUnescapedHTML))throw new Bo("One of your code blocks includes unescaped HTML.",p.innerHTML);T=p;const U=T.textContent,Q=L?Y(U,{language:L,ignoreIllegals:!0}):gt(U);p.innerHTML=Q.value,p.dataset.highlighted="yes",qo(p,L,Q.language),p.result={language:Q.language,re:Q.relevance,relevance:Q.relevance},Q.secondBest&&(p.secondBest={language:Q.secondBest.language,relevance:Q.secondBest.relevance}),Ln("after:highlightElement",{el:p,result:Q,text:U})}function Vo(p){E=tr(E,p)}const jo=()=>{In(),tn("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function $o(){In(),tn("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let sr=!1;function In(){function p(){In()}if(document.readyState==="loading"){sr||window.addEventListener("DOMContentLoaded",p,!1),sr=!0;return}document.querySelectorAll(E.cssSelector).forEach(ht)}function Uo(p,T){let L=null;try{L=T(i)}catch(U){if(Ye("Language definition for '{}' could not be registered.".replace("{}",p)),W)Ye(U);else throw U;L=R}L.name||(L.name=p),d[p]=L,L.rawDefinition=T.bind(null,i),L.aliases&&ir(L.aliases,{languageName:p})}function Ho(p){delete d[p];for(const T of Object.keys(g))g[T]===p&&delete g[T]}function Go(){return Object.keys(d)}function je(p){return p=(p||"").toLowerCase(),d[p]||d[g[p]]}function ir(p,{languageName:T}){typeof p=="string"&&(p=[p]),p.forEach(L=>{g[L.toLowerCase()]=T})}function ar(p){const T=je(p);return T&&!T.disableAutodetect}function Ko(p){p["before:highlightBlock"]&&!p["before:highlightElement"]&&(p["before:highlightElement"]=T=>{p["before:highlightBlock"](Object.assign({block:T.el},T))}),p["after:highlightBlock"]&&!p["after:highlightElement"]&&(p["after:highlightElement"]=T=>{p["after:highlightBlock"](Object.assign({block:T.el},T))})}function Xo(p){Ko(p),C.push(p)}function Wo(p){const T=C.indexOf(p);T!==-1&&C.splice(T,1)}function Ln(p,T){const L=p;C.forEach(function(U){U[L]&&U[L](T)})}function Jo(p){return tn("10.7.0","highlightBlock will be removed entirely in v12.0"),tn("10.7.0","Please use highlightElement now."),ht(p)}Object.assign(i,{highlight:Y,highlightAuto:gt,highlightAll:In,highlightElement:ht,highlightBlock:Jo,configure:Vo,initHighlighting:jo,initHighlightingOnLoad:$o,registerLanguage:Uo,unregisterLanguage:Ho,listLanguages:Go,getLanguage:je,registerAliases:ir,autoDetection:ar,inherit:tr,addPlugin:Xo,removePlugin:Wo}),i.debugMode=function(){W=!1},i.safeMode=function(){W=!0},i.versionString=Lo,i.regex={concat:k,lookahead:f,either:I,optional:b,anyNumberOfTimes:h};for(const p in Pn)typeof Pn[p]=="object"&&e(Pn[p]);return Object.assign(i,Pn),i},rn=or({});return rn.newInstance=()=>or({}),Ft=rn,rn.HighlightJS=rn,rn.default=rn,Ft}var r0=t0();const kr=n0(r0);var o0=ue("<pre><code><!></code></pre>");function s0(e,n){const t=et(n,["children","$$slots","$$events","$$legacy"]),r=et(t,["code","highlighted","languageName","langtag"]);let o=Ke(n,"code",8),s=Ke(n,"highlighted",8),a=Ke(n,"languageName",8,"plaintext"),c=Ke(n,"langtag",8,!1);var l=o0();let u;var m=z(l);Tn(m,1,"",null,{},{hljs:!0});var _=z(m);{var f=b=>{var k=Zn(),F=an(k);bi(F,s),G(b,k)},h=b=>{var k=Ot();he(()=>ze(k,o())),G(b,k)};Ue(_,b=>{s()?b(f):b(h,!1)})}he(b=>u=Mi(l,u,{"data-language":a(),...r,[xn]:b},"svelte-1w9vok"),[()=>({langtag:c()})],Ut),G(e,l)}function i0(e,n){const t=et(n,["children","$$slots","$$events","$$legacy"]),r=et(t,["language","code","langtag"]);_n(n,!1);let o=Ke(n,"language",8),s=Ke(n,"code",8),a=Ke(n,"langtag",8,!1);const c=Ai();let l=Ht("");Pi(()=>{D(l)&&c("highlight",{highlighted:D(l)})}),$s(()=>(Ct(o()),Ct(s())),()=>{kr.registerLanguage(o().name,o().register),Z(l,kr.highlight(s(),{language:o().name}).value)}),Us(),po();var u=Zn(),m=an(u);yi(m,n,"default",{get highlighted(){return D(l)}},_=>{s0(_,Si(()=>r,{get languageName(){return o().name},get langtag(){return a()},get highlighted(){return D(l)},get code(){return s()}}))}),G(e,u),mn()}function a0(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",s={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},a={keywords:s,illegal:/<\//},c={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},l={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},u={className:"subst",begin:/\$\(/,end:/\)/,keywords:s},m={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,u,m],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},f={className:"string",contains:[e.BACKSLASH_ESCAPE,u,m],begin:"`",end:"`"},h={className:"meta",begin:"@"+n},b={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return a.name="Julia",a.contains=[c,l,_,f,h,b,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],u.contains=a.contains,a}const l0={name:"julia",register:a0};function go(e){let n,t,r;if(e<.5){const o=e*2;n=Math.round(34+o*166),t=Math.round(197+o*-17),r=Math.round(94+o*-94)}else{const o=(e-.5)*2;n=Math.round(200+o*20),t=Math.round(180-o*180),r=Math.round(0+o*30)}return[n,t,r]}function c0(e,n,t){if(typeof e!="number")return"";const r=[...n.values()].filter(b=>typeof b=="number");if(r.length<2)return"";const o=Math.min(...r),s=Math.max(...r),a=Math.log(Math.max(o,.001)),c=Math.log(Math.max(s,.001));if(c===a)return"";const l=Math.log(Math.max(e,.001)),u=Math.max(0,Math.min(1,(l-a)/(c-a))),[m,_,f]=go(u);return`background-color: rgba(${m}, ${_}, ${f}, ${t==="dark"?.3:.25})`}function u0(e,n=10){const t=e==="dark"?.5:.4,r=[];for(let o=0;o<=n;o++){const s=o/n,[a,c,l]=go(s);r.push(`rgba(${a}, ${c}, ${l}, ${t})`)}return r}const f0=[{url:"https://github.com/EnzymeAD/Enzyme.jl/issues/1995",affects:[["assume_mvnormal","EnzymeFwd"],["assume_wishart","EnzymeFwd"]]},{url:"https://github.com/chalk-lab/Mooncake.jl/issues/570",affects:[["multithreaded","MooncakeFwd"],["multithreaded","MooncakeRvs"]]}],d0=[],ho=new Map;for(const e of f0)for(const[n,t]of e.affects)ho.set(`${n}__${t}`,e.url);const bo=new Map;for(const e of d0)for(const[n,t]of e.affects)bo.set(`${n}__${t}`,e.value);function Sr(e,n){return ho.get(`${e}__${n}`)}function _0(e,n){return bo.get(`${e}__${n}`)}var m0=(e,n,t)=>n(D(t)),p0=ue('<th class="sortable svelte-6nl5bt" title="Click to sort"> <span class="sort-indicator svelte-6nl5bt"><!></span></th>'),v0=ue('<td class="svelte-6nl5bt"> </td>'),g0=ue('<a class="issue svelte-6nl5bt" target="_blank">(?)</a>'),h0=ue('<td class="svelte-6nl5bt"><!> <span> </span></td>'),b0=(e,n,t,r)=>n(t.modelDefinitions[r()]),y0=dt('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'),w0=dt('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'),D0=ue('<tr class="definition-row svelte-6nl5bt"><td class="svelte-6nl5bt"><div class="definition-content svelte-6nl5bt"><div class="code-wrapper svelte-6nl5bt"><!></div> <button class="copy-btn svelte-6nl5bt" aria-label="Copy to clipboard" title="Copy code"><!></button></div></td></tr>'),E0=ue("<tr><!><!></tr> <!>",1),x0=ue('<div class="table-scroll svelte-6nl5bt"><table class="svelte-6nl5bt"><thead><tr class="svelte-6nl5bt"><th class="model-col-header svelte-6nl5bt">Model</th><!></tr></thead><tbody></tbody></table></div>');function R0(e,n){_n(n,!0);const t=sn(()=>[...n.data.keys()]),r=sn(()=>n.data.size>0?[...n.data.get(D(t)[0]).keys()].sort((F,I)=>vo(F,I)):[]);let o=ge(Le({column:null,direction:null})),s=ge(null),a=ge(!1);function c(F){navigator.clipboard.writeText(F),Z(a,!0),setTimeout(()=>{Z(a,!1)},2e3)}function l(F){D(o).column!==F?Z(o,{column:F,direction:"asc"},!0):D(o).direction==="asc"?Z(o,{column:F,direction:"desc"},!0):Z(o,{column:null,direction:null},!0)}const u=sn(()=>{const F=It(n.data);if(!D(o).column||!D(o).direction)return F;const I=D(o).column,q=D(o).direction;return[...F].sort(([,x],[,v])=>{const y=x.get(I),B=v.get(I),M=typeof y=="number",P=typeof B=="number";return!M&&!P?0:M?P?q==="asc"?y-B:B-y:-1:1})});var m=x0(),_=z(m),f=z(_),h=z(f),b=se(z(h));Mn(b,17,()=>D(r),Rn,(F,I)=>{var q=p0();q.__click=[m0,l,I];var x=z(q),v=se(x),y=z(v);{var B=M=>{var P=Zn(),X=an(P);{var fe=ne=>{var de=Ot("▲");G(ne,de)},ee=ne=>{var de=Ot("▼");G(ne,de)};Ue(X,ne=>{D(o).direction==="asc"?ne(fe):ne(ee,!1)})}G(M,P)};Ue(y,M=>{D(o).column===D(I)&&M(B)})}he(()=>ze(x,`${D(I)??""} `)),G(F,q)});var k=se(f);Mn(k,21,()=>D(u),Rn,(F,I,q)=>{let x=()=>D(I)[0],v=()=>D(I)[1];var y=E0(),B=an(y);Tn(B,1,"svelte-6nl5bt",null,{},{alt:q%2===1});var M=z(B);e0(M,{get name(){return x()},onToggle:()=>Z(s,D(s)===x()?null:x(),!0)});var P=se(M);Mn(P,17,()=>It(v()),Rn,(ee,ne)=>{let de=()=>D(ne)[0],ye=()=>D(ne)[1];var Me=Zn();const me=sn(()=>_0(x(),de())??ye());var Fe=an(Me);{var Ee=Ne=>{var ie=v0(),Te=z(ie);he((hn,nn)=>{Jt(ie,hn),ze(Te,nn)},[()=>c0(D(me),v(),n.theme),()=>D(me).toFixed(3)]),G(Ne,ie)},gn=Ne=>{var ie=h0(),Te=z(ie);{var hn=bn=>{var An=g0();he(mt=>Qn(An,"href",mt),[()=>Sr(x(),de())]),G(bn,An)};Ue(Te,bn=>{Sr(x(),de())&&bn(hn)})}var nn=se(Te,2),_t=z(nn);he(()=>{Tn(nn,1,co(D(me)==="NaN"?"nan":D(me)),"svelte-6nl5bt"),ze(_t,D(me))}),G(Ne,ie)};Ue(Fe,Ne=>{typeof D(me)=="number"?Ne(Ee):Ne(gn,!1)})}G(ee,Me)});var X=se(B,2);{var fe=ee=>{var ne=D0(),de=z(ne),ye=z(de),Me=z(ye),me=z(Me);i0(me,{language:l0,get code(){return n.modelDefinitions[x()]}});var Fe=se(Me,2);Fe.__click=[b0,c,n,x];var Ee=z(Fe);{var gn=ie=>{var Te=y0();G(ie,Te)},Ne=ie=>{var Te=w0();G(ie,Te)};Ue(Ee,ie=>{D(a)?ie(gn):ie(Ne,!1)})}he(()=>{Qn(de,"colspan",D(r).length+1),Fe.disabled=D(a)}),G(ee,ne)};Ue(X,ee=>{D(s)===x()&&ee(fe)})}G(F,y)}),G(e,m),mn()}ft(["click"]);var M0=ue('<div class="legend svelte-10rqhbc"><div class="gradient-section svelte-10rqhbc"><span class="label svelte-10rqhbc">Faster</span> <div class="gradient-bar svelte-10rqhbc"></div> <span class="label svelte-10rqhbc">Slower</span></div> <div class="divider svelte-10rqhbc"></div> <div class="status-labels svelte-10rqhbc"><span class="status error svelte-10rqhbc">error</span> <span class="status wrong svelte-10rqhbc">wrong</span> <span class="status nan svelte-10rqhbc">NaN</span></div></div>');function F0(e,n){_n(n,!0);const t=sn(()=>()=>`linear-gradient(to right, ${u0(n.theme).join(", ")})`);var r=M0(),o=z(r),s=se(z(o),2);he(a=>Jt(s,`background: ${a??""}`),[()=>D(t)()]),G(e,r),mn()}function N0(e,n){Z(n,D(n)==="light"?"dark":"light",!0),document.documentElement.setAttribute("data-theme",D(n)),localStorage.setItem("theme",D(n))}var T0=dt('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'),k0=dt('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'),S0=ue('<h3 class="category-heading svelte-1wqfdel"> </h3> <!>',1),C0=ue('<p class="no-results svelte-1wqfdel"> </p>'),A0=ue(`<div id="main-wrapper" class="svelte-1wqfdel"><main class="svelte-1wqfdel"><div class="header svelte-1wqfdel"><div class="title-area svelte-1wqfdel"><h1 class="svelte-1wqfdel">Turing AD tests</h1> <nav class="nav-links svelte-1wqfdel"><a href="https://turinglang.org/docs" class="svelte-1wqfdel">Turing.jl Docs</a> <a href="https://github.com/TuringLang/Turing.jl" class="svelte-1wqfdel">Turing.jl GitHub</a> <a href="https://github.com/TuringLang/ADTests" class="svelte-1wqfdel">ADTests GitHub</a></nav></div> <button class="theme-toggle svelte-1wqfdel" aria-label="Toggle Dark Mode" title="Toggle theme"><!></button></div> <p class="intro svelte-1wqfdel">A comparison of how different AD backends perform on <a href="https://turinglang.org/docs">Turing.jl</a> models.
            This does not imply any endorsement; for general AD comparisons see <a href="https://github.com/gradbench/gradbench" target="_blank">GradBench</a>.</p> <div class="info-card svelte-1wqfdel"><h4 class="svelte-1wqfdel">Reading the table</h4> <ul class="svelte-1wqfdel"><li class="svelte-1wqfdel">Click model names to see their definitions.</li> <li class="svelte-1wqfdel"><b>Numbers</b> = gradient time / primal time. <b>Smaller is faster.</b></li> <li class="svelte-1wqfdel"><span class="wrong svelte-1wqfdel">wrong</span> = AD ran but gave an incorrect result
                    (compared against FiniteDifferences).</li> <li class="svelte-1wqfdel"><span class="error svelte-1wqfdel">error</span> = AD failed to run.</li> <li class="svelte-1wqfdel"><span class="issue-example svelte-1wqfdel">(?)</span> links to a GitHub issue describing the problem.</li></ul></div> <div class="warning svelte-1wqfdel">Note: Results are from Julia 1.11.</div> <div class="results-header svelte-1wqfdel"><h2 class="svelte-1wqfdel">Results</h2> <a class="download-link svelte-1wqfdel" href="adtests.json" target="_blank" download=""><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> JSON</a></div> <div class="controls svelte-1wqfdel"><input type="search" class="search-input svelte-1wqfdel" placeholder="Filter models..."> <!></div> <!> <h2>Manifest</h2> <p class="secondary-text svelte-1wqfdel">Package versions used for the tests above:</p> <!></main></div>`);function P0(e,n){_n(n,!0);const t=typeof document<"u"&&(localStorage.getItem("theme")||document.documentElement.getAttribute("data-theme"))||"light";typeof document<"u"&&document.documentElement.setAttribute("data-theme",t);let r=ge(Le(t)),o=new Map;for(const[v,y]of Object.entries(Ua)){let B=y.__category__;delete y.__category__;let M=new Map;for(const[P,X]of Object.entries(y))M.set(P,X);o.has(B)||o.set(B,new Map),o.get(B).set(v,M)}let s=new Map([...o.entries()].sort()),a=ge("");const c=sn(()=>{const v=D(a).trim().toLowerCase();if(!v)return s;const y=new Map;for(const[B,M]of s){const P=new Map;for(const[X,fe]of M)X.toLowerCase().includes(v)&&P.set(X,fe);P.size>0&&y.set(B,P)}return y});var l=A0(),u=z(l),m=z(u),_=se(z(m),2);_.__click=[N0,r];var f=z(_);{var h=v=>{var y=T0();G(v,y)},b=v=>{var y=k0();G(v,y)};Ue(f,v=>{D(r)==="dark"?v(h):v(b,!1)})}var k=se(m,10),F=z(k),I=se(F,2);F0(I,{get theme(){return D(r)}});var q=se(k,2);Mn(q,17,()=>D(c).entries(),Rn,(v,y)=>{let B=()=>D(y)[0],M=()=>D(y)[1];var P=S0(),X=an(P),fe=z(X),ee=se(X,2);R0(ee,{get data(){return M()},modelDefinitions:Zl,get theme(){return D(r)}}),he(()=>ze(fe,B())),G(v,P)},v=>{var y=C0(),B=z(y);he(()=>ze(B,`No models match "${D(a)??""}".`)),G(v,y)});var x=se(q,6);Z_(x,{}),Fi(F,()=>D(a),v=>Z(a,v)),G(e,l),mn()}ft(["click"]);di(P0,{target:document.getElementById("app")});
