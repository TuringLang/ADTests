(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const dr=!1;var Qn=Array.isArray,ts=Array.prototype.indexOf,It=Array.from,rs=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,kr=Object.getOwnPropertyDescriptors,os=Object.prototype,ss=Array.prototype,Lt=Object.getPrototypeOf,_r=Object.isExtensible;function bn(e){return typeof e=="function"}function is(e){return e()}function Rt(e){for(var n=0;n<e.length;n++)e[n]()}const Me=2,Cr=4,et=8,Pt=16,je=32,dn=64,qn=128,ye=256,$n=512,ue=1024,Ae=2048,Xe=4096,Pe=8192,nt=16384,as=32768,zt=65536,ls=1<<17,cs=1<<19,Ar=1<<20,Tt=1<<21,Qe=Symbol("$state"),Or=Symbol("legacy props"),us=Symbol("");function Ir(e){return e===this.v}function fs(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Vt(e){return!fs(e,this.v)}function ds(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function _s(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ms(e){throw new Error("https://svelte.dev/e/effect_orphan")}function gs(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function vs(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function ps(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function hs(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ys(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function bs(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Sn=!1,ws=!1;function Es(){Sn=!0}const jt=1,Bt=2,Lr=4,Ds=8,xs=16,Ms=1,Rs=2,Pr=4,Ts=8,Ss=16,Fs=1,Ns=2,_e=Symbol(),ks="http://www.w3.org/1999/xhtml",Cs="@attach";function zr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let K=null;function mr(e){K=e}function _n(e,n=!1,t){var r=K={p:K,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};Sn&&!n&&(K.l={s:null,u:null,r1:[],r2:cn(!1)}),zs(()=>{r.d=!0})}function mn(e){const n=K;if(n!==null){const a=n.e;if(a!==null){var t=q,r=$;n.e=null;try{for(var o=0;o<a.length;o++){var s=a[o];We(s.effect),Oe(s.reaction),Ut(s.fn)}}finally{We(t),Oe(r)}}K=n.p,n.m=!0}return{}}function Fn(){return!Sn||K!==null&&K.l===null}function Le(e){if(typeof e!="object"||e===null||Qe in e)return e;const n=Lt(e);if(n!==os&&n!==ss)return e;var t=new Map,r=Qn(e),o=pe(0),s=$,a=c=>{var l=$;Oe(s);var u=c();return Oe(l),u};return r&&t.set("length",pe(e.length)),new Proxy(e,{defineProperty(c,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&hs();var g=t.get(l);return g===void 0?(g=a(()=>pe(u.value)),t.set(l,g)):Y(g,a(()=>Le(u.value))),!0},deleteProperty(c,l){var u=t.get(l);if(u===void 0)l in c&&(t.set(l,a(()=>pe(_e))),bt(o));else{if(r&&typeof l=="string"){var g=t.get("length"),_=Number(l);Number.isInteger(_)&&_<g.v&&Y(g,_)}Y(u,_e),bt(o)}return!0},get(c,l,u){var h;if(l===Qe)return e;var g=t.get(l),_=l in c;if(g===void 0&&(!_||(h=Ze(c,l))!=null&&h.writable)&&(g=a(()=>pe(Le(_?c[l]:_e))),t.set(l,g)),g!==void 0){var f=E(g);return f===_e?void 0:f}return Reflect.get(c,l,u)},getOwnPropertyDescriptor(c,l){var u=Reflect.getOwnPropertyDescriptor(c,l);if(u&&"value"in u){var g=t.get(l);g&&(u.value=E(g))}else if(u===void 0){var _=t.get(l),f=_==null?void 0:_.v;if(_!==void 0&&f!==_e)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return u},has(c,l){var f;if(l===Qe)return!0;var u=t.get(l),g=u!==void 0&&u.v!==_e||Reflect.has(c,l);if(u!==void 0||q!==null&&(!g||(f=Ze(c,l))!=null&&f.writable)){u===void 0&&(u=a(()=>pe(g?Le(c[l]):_e)),t.set(l,u));var _=E(u);if(_===_e)return!1}return g},set(c,l,u,g){var L;var _=t.get(l),f=l in c;if(r&&l==="length")for(var h=u;h<_.v;h+=1){var b=t.get(h+"");b!==void 0?Y(b,_e):h in c&&(b=a(()=>pe(_e)),t.set(h+"",b))}_===void 0?(!f||(L=Ze(c,l))!=null&&L.writable)&&(_=a(()=>pe(void 0)),Y(_,a(()=>Le(u))),t.set(l,_)):(f=_.v!==_e,Y(_,a(()=>Le(u))));var N=Reflect.getOwnPropertyDescriptor(c,l);if(N!=null&&N.set&&N.set.call(g,u),!f){if(r&&typeof l=="string"){var T=t.get("length"),P=Number(l);Number.isInteger(P)&&P>=T.v&&Y(T,P+1)}bt(o)}return!0},ownKeys(c){E(o);var l=Reflect.ownKeys(c).filter(_=>{var f=t.get(_);return f===void 0||f.v!==_e});for(var[u,g]of t)g.v!==_e&&!(u in c)&&l.push(u);return l},setPrototypeOf(){ys()}})}function bt(e,n=1){Y(e,e.v+n)}function ln(e){var n=Me|Ae,t=$!==null&&($.f&Me)!==0?$:null;return q===null||t!==null&&(t.f&ye)!==0?n|=ye:q.f|=Ar,{ctx:K,deps:null,effects:null,equals:Ir,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??q}}function sn(e){const n=ln(e);return Qr(n),n}function qt(e){const n=ln(e);return n.equals=Vt,n}function Vr(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)Ve(n[t])}}function As(e){for(var n=e.parent;n!==null;){if((n.f&Me)===0)return n;n=n.parent}return null}function jr(e){var n,t=q;We(As(e));try{Vr(e),n=ro(e)}finally{We(t)}return n}function Br(e){var n=jr(e),t=(Ge||(e.f&ye)!==0)&&e.deps!==null?Xe:ue;we(e,t),e.equals(n)||(e.v=n,e.wv=no())}const Rn=new Map;function cn(e,n){var t={f:0,v:e,reactions:null,equals:Ir,rv:0,wv:0};return t}function pe(e,n){const t=cn(e);return Qr(t),t}function $t(e,n=!1){var r;const t=cn(e);return n||(t.equals=Vt),Sn&&K!==null&&K.l!==null&&((r=K.l).s??(r.s=[])).push(t),t}function Y(e,n,t=!1){$!==null&&!ke&&Fn()&&($.f&(Me|Pt))!==0&&!(ce!=null&&ce.includes(e))&&bs();let r=t?Le(n):n;return St(e,r)}function St(e,n){if(!e.equals(n)){var t=e.v;Nn?Rn.set(e,n):Rn.set(e,t),e.v=n,(e.f&Me)!==0&&((e.f&Ae)!==0&&jr(e),we(e,(e.f&ye)===0?ue:Xe)),e.wv=no(),qr(e,Ae),Fn()&&q!==null&&(q.f&ue)!==0&&(q.f&(je|dn))===0&&(be===null?Hs([e]):be.push(e))}return n}function gr(e,n=1){var t=E(e),r=n===1?t++:t--;return Y(e,t),r}function qr(e,n){var t=e.reactions;if(t!==null)for(var r=Fn(),o=t.length,s=0;s<o;s++){var a=t[s],c=a.f;(c&Ae)===0&&(!r&&a===q||(we(a,n),(c&(ue|ye))!==0&&((c&Me)!==0?qr(a,Xe):lt(a))))}}let Os=!1;var vr,$r,Ur,Hr;function Is(){if(vr===void 0){vr=window,$r=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Ur=Ze(n,"firstChild").get,Hr=Ze(n,"nextSibling").get,_r(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),_r(t)&&(t.__t=void 0)}}function tt(e=""){return document.createTextNode(e)}function Ce(e){return Ur.call(e)}function rt(e){return Hr.call(e)}function j(e,n){return Ce(e)}function an(e,n){{var t=Ce(e);return t instanceof Comment&&t.data===""?rt(t):t}}function ie(e,n=1,t=!1){let r=e;for(;n--;)r=rt(r);return r}function Ls(e){e.textContent=""}function Gr(e){q===null&&$===null&&ms(),$!==null&&($.f&ye)!==0&&q===null&&_s(),Nn&&ds()}function Ps(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function gn(e,n,t,r=!0){var o=q,s={ctx:K,deps:null,nodes_start:null,nodes_end:null,f:e|Ae,first:null,fn:n,last:null,next:null,parent:o,prev:null,teardown:null,transitions:null,wv:0};if(t)try{at(s),s.f|=as}catch(l){throw Ve(s),l}else n!==null&&lt(s);var a=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(Ar|qn))===0;if(!a&&r&&(o!==null&&Ps(s,o),$!==null&&($.f&Me)!==0)){var c=$;(c.effects??(c.effects=[])).push(s)}return s}function zs(e){const n=gn(et,null,!1);return we(n,ue),n.teardown=e,n}function pr(e){Gr();var n=q!==null&&(q.f&je)!==0&&K!==null&&!K.m;if(n){var t=K;(t.e??(t.e=[])).push({fn:e,effect:q,reaction:$})}else{var r=Ut(e);return r}}function Vs(e){return Gr(),ot(e)}function js(e){const n=gn(dn,e,!0);return(t={})=>new Promise(r=>{t.outro?Un(n,()=>{Ve(n),r(void 0)}):(Ve(n),r(void 0))})}function Ut(e){return gn(Cr,e,!1)}function Bs(e,n){var t=K,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=ot(()=>{e(),!r.ran&&(r.ran=!0,Y(t.l.r2,!0),Tn(n))})}function qs(){var e=K;ot(()=>{if(E(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&ue)!==0&&we(t,Xe),vn(t)&&at(t),n.ran=!1}e.l.r2.v=!1}})}function ot(e){return gn(et,e,!0)}function he(e,n=[],t=ln){const r=n.map(t);return st(()=>e(...r.map(E)))}function st(e,n=0){return gn(et|Pt|n,e,!0)}function un(e,n=!0){return gn(et|je,e,!0,n)}function Kr(e){var n=e.teardown;if(n!==null){const t=Nn,r=$;hr(!0),Oe(null);try{n.call(null)}finally{hr(t),Oe(r)}}}function Zr(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&dn)!==0?t.parent=null:Ve(t,n),t=r}}function $s(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&je)===0&&Ve(n),n=t}}function Ve(e,n=!0){var t=!1;(n||(e.f&cs)!==0)&&e.nodes_start!==null&&(Wr(e.nodes_start,e.nodes_end),t=!0),Zr(e,n&&!t),Wn(e,0),we(e,nt);var r=e.transitions;if(r!==null)for(const s of r)s.stop();Kr(e);var o=e.parent;o!==null&&o.first!==null&&Xr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Wr(e,n){for(;e!==null;){var t=e===n?null:rt(e);e.remove(),e=t}}function Xr(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function Un(e,n){var t=[];Ht(e,t,!0),Jr(t,()=>{Ve(e),n&&n()})}function Jr(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var o of e)o.out(r)}else n()}function Ht(e,n,t){if((e.f&Pe)===0){if(e.f^=Pe,e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&n.push(a);for(var r=e.first;r!==null;){var o=r.next,s=(r.f&zt)!==0||(r.f&je)!==0;Ht(r,n,s?t:!1),r=o}}}function Hn(e){Yr(e,!0)}function Yr(e,n){if((e.f&Pe)!==0){e.f^=Pe,(e.f&ue)===0&&(e.f^=ue),vn(e)&&(we(e,Ae),lt(e));for(var t=e.first;t!==null;){var r=t.next,o=(t.f&zt)!==0||(t.f&je)!==0;Yr(t,o?n:!1),t=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&s.in()}}let Gn=[];function Us(){var e=Gn;Gn=[],Rt(e)}function Gt(e){Gn.length===0&&queueMicrotask(Us),Gn.push(e)}let jn=!1,Ft=!1,Kn=null,en=!1,Nn=!1;function hr(e){Nn=e}let Bn=[];let $=null,ke=!1;function Oe(e){$=e}let q=null;function We(e){q=e}let ce=null;function Qr(e){$!==null&&$.f&Tt&&(ce===null?ce=[e]:ce.push(e))}let le=null,ve=0,be=null;function Hs(e){be=e}let eo=1,Zn=0,Ge=!1;function no(){return++eo}function vn(e){var _;var n=e.f;if((n&Ae)!==0)return!0;if((n&Xe)!==0){var t=e.deps,r=(n&ye)!==0;if(t!==null){var o,s,a=(n&$n)!==0,c=r&&q!==null&&!Ge,l=t.length;if(a||c){var u=e,g=u.parent;for(o=0;o<l;o++)s=t[o],(a||!((_=s==null?void 0:s.reactions)!=null&&_.includes(u)))&&(s.reactions??(s.reactions=[])).push(u);a&&(u.f^=$n),c&&g!==null&&(g.f&ye)===0&&(u.f^=ye)}for(o=0;o<l;o++)if(s=t[o],vn(s)&&Br(s),s.wv>e.wv)return!0}(!r||q!==null&&!Ge)&&we(e,ue)}return!1}function Gs(e,n){for(var t=n;t!==null;){if((t.f&qn)!==0)try{t.fn(e);return}catch{t.f^=qn}t=t.parent}throw jn=!1,e}function yr(e){return(e.f&nt)===0&&(e.parent===null||(e.parent.f&qn)===0)}function it(e,n,t,r){if(jn){if(t===null&&(jn=!1),yr(n))throw e;return}if(t!==null&&(jn=!0),Gs(e,n),yr(n))throw e}function to(e,n,t=!0){var r=e.reactions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];ce!=null&&ce.includes(e)||((s.f&Me)!==0?to(s,n,!1):n===s&&(t?we(s,Ae):(s.f&ue)!==0&&we(s,Xe),lt(s)))}}function ro(e){var h;var n=le,t=ve,r=be,o=$,s=Ge,a=ce,c=K,l=ke,u=e.f;le=null,ve=0,be=null,Ge=(u&ye)!==0&&(ke||!en||$===null),$=(u&(je|dn))===0?e:null,ce=null,mr(e.ctx),ke=!1,Zn++,e.f|=Tt;try{var g=(0,e.fn)(),_=e.deps;if(le!==null){var f;if(Wn(e,ve),_!==null&&ve>0)for(_.length=ve+le.length,f=0;f<le.length;f++)_[ve+f]=le[f];else e.deps=_=le;if(!Ge)for(f=ve;f<_.length;f++)((h=_[f]).reactions??(h.reactions=[])).push(e)}else _!==null&&ve<_.length&&(Wn(e,ve),_.length=ve);if(Fn()&&be!==null&&!ke&&_!==null&&(e.f&(Me|Xe|Ae))===0)for(f=0;f<be.length;f++)to(be[f],e);return o!==null&&o!==e&&(Zn++,be!==null&&(r===null?r=be:r.push(...be))),g}finally{le=n,ve=t,be=r,$=o,Ge=s,ce=a,mr(c),ke=l,e.f^=Tt}}function Ks(e,n){let t=n.reactions;if(t!==null){var r=ts.call(t,e);if(r!==-1){var o=t.length-1;o===0?t=n.reactions=null:(t[r]=t[o],t.pop())}}t===null&&(n.f&Me)!==0&&(le===null||!le.includes(n))&&(we(n,Xe),(n.f&(ye|$n))===0&&(n.f^=$n),Vr(n),Wn(n,0))}function Wn(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Ks(e,t[r])}function at(e){var n=e.f;if((n&nt)===0){we(e,ue);var t=q,r=K,o=en;q=e,en=!0;try{(n&Pt)!==0?$s(e):Zr(e),Kr(e);var s=ro(e);e.teardown=typeof s=="function"?s:null,e.wv=eo;var a=e.deps,c;dr&&ws&&e.f&Ae}catch(l){it(l,e,t,r||e.ctx)}finally{en=o,q=t}}}function Zs(){try{gs()}catch(e){if(Kn!==null)it(e,Kn,null);else throw e}}function Ws(){var e=en;try{var n=0;for(en=!0;Bn.length>0;){n++>1e3&&Zs();var t=Bn,r=t.length;Bn=[];for(var o=0;o<r;o++){var s=Js(t[o]);Xs(s)}Rn.clear()}}finally{Ft=!1,en=e,Kn=null}}function Xs(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(nt|Pe))===0)try{vn(r)&&(at(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Xr(r):r.fn=null))}catch(o){it(o,r,null,r.ctx)}}}function lt(e){Ft||(Ft=!0,queueMicrotask(Ws));for(var n=Kn=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(dn|je))!==0){if((t&ue)===0)return;n.f^=ue}}Bn.push(n)}function Js(e){for(var n=[],t=e;t!==null;){var r=t.f,o=(r&(je|dn))!==0,s=o&&(r&ue)!==0;if(!s&&(r&Pe)===0){if((r&Cr)!==0)n.push(t);else if(o)t.f^=ue;else try{vn(t)&&at(t)}catch(l){it(l,t,null,t.ctx)}var a=t.first;if(a!==null){t=a;continue}}var c=t.parent;for(t=t.next;t===null&&c!==null;)t=c.next,c=c.parent}return n}function E(e){var n=e.f,t=(n&Me)!==0;if($!==null&&!ke){if(!(ce!=null&&ce.includes(e))){var r=$.deps;e.rv<Zn&&(e.rv=Zn,le===null&&r!==null&&r[ve]===e?ve++:le===null?le=[e]:(!Ge||!le.includes(e))&&le.push(e))}}else if(t&&e.deps===null&&e.effects===null){var o=e,s=o.parent;s!==null&&(s.f&ye)===0&&(o.f^=ye)}return t&&(o=e,vn(o)&&Br(o)),Nn&&Rn.has(e)?Rn.get(e):e.v}function Tn(e){var n=ke;try{return ke=!0,e()}finally{ke=n}}const Ys=-7169;function we(e,n){e.f=e.f&Ys|n}function Nt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Qe in e)kt(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&Qe in t&&kt(t)}}}function kt(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{kt(e[r],n)}catch{}const t=Lt(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=kr(t);for(let o in r){const s=r[o].get;if(s)try{s.call(e)}catch{}}}}}function Qs(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ei=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ni(e){return ei.includes(e)}const ti={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ri(e){return e=e.toLowerCase(),ti[e]??e}const oi=["touchstart","touchmove"];function si(e){return oi.includes(e)}function ii(e,n){if(n){const t=document.body;e.autofocus=!0,Gt(()=>{document.activeElement===t&&e.focus()})}}let br=!1;function ai(){br||(br=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var n;if(!e.defaultPrevented)for(const t of e.target.elements)(n=t.__on_r)==null||n.call(t)})},{capture:!0}))}function oo(e){var n=$,t=q;Oe(null),We(null);try{return e()}finally{Oe(n),We(t)}}function li(e,n,t,r=t){e.addEventListener(n,()=>oo(t));const o=e.__on_r;o?e.__on_r=()=>{o(),r(!0)}:e.__on_r=()=>r(!0),ai()}const so=new Set,Ct=new Set;function ci(e,n,t,r={}){function o(s){if(r.capture||En.call(n,s),!s.cancelBubble)return oo(()=>t==null?void 0:t.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Gt(()=>{n.addEventListener(e,o,r)}):n.addEventListener(e,o,r),o}function ct(e){for(var n=0;n<e.length;n++)so.add(e[n]);for(var t of Ct)t(e)}function En(e){var L;var n=this,t=n.ownerDocument,r=e.type,o=((L=e.composedPath)==null?void 0:L.call(e))||[],s=o[0]||e.target,a=0,c=e.__root;if(c){var l=o.indexOf(c);if(l!==-1&&(n===document||n===window)){e.__root=n;return}var u=o.indexOf(n);if(u===-1)return;l<=u&&(a=l)}if(s=o[a]||e.target,s!==n){rs(e,"currentTarget",{configurable:!0,get(){return s||t}});var g=$,_=q;Oe(null),We(null);try{for(var f,h=[];s!==null;){var b=s.assignedSlot||s.parentNode||s.host||null;try{var N=s["__"+r];if(N!=null&&(!s.disabled||e.target===s))if(Qn(N)){var[T,...P]=N;T.apply(s,[e,...P])}else N.call(s,e)}catch(S){f?h.push(S):f=S}if(e.cancelBubble||b===n||b===null)break;s=b}if(f){for(let S of h)queueMicrotask(()=>{throw S});throw f}}finally{e.__root=n,delete e.currentTarget,Oe(g),We(_)}}}function Kt(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function fn(e,n){var t=q;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function fe(e,n){var t=(n&Fs)!==0,r=(n&Ns)!==0,o,s=!e.startsWith("<!>");return()=>{o===void 0&&(o=Kt(s?e:"<!>"+e),t||(o=Ce(o)));var a=r||$r?document.importNode(o,!0):o.cloneNode(!0);if(t){var c=Ce(a),l=a.lastChild;fn(c,l)}else fn(a,a);return a}}function ut(e,n,t="svg"){var r=!e.startsWith("<!>"),o=`<${t}>${r?e:"<!>"+e}</${t}>`,s;return()=>{if(!s){var a=Kt(o),c=Ce(a);s=Ce(c)}var l=s.cloneNode(!0);return fn(l,l),l}}function At(e=""){{var n=tt(e+"");return fn(n,n),n}}function Xn(){var e=document.createDocumentFragment(),n=document.createComment(""),t=tt();return e.append(n,t),fn(n,t),e}function G(e,n){e!==null&&e.before(n)}function ze(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function ui(e,n){return fi(e,n)}const on=new Map;function fi(e,{target:n,anchor:t,props:r={},events:o,context:s,intro:a=!0}){Is();var c=new Set,l=_=>{for(var f=0;f<_.length;f++){var h=_[f];if(!c.has(h)){c.add(h);var b=si(h);n.addEventListener(h,En,{passive:b});var N=on.get(h);N===void 0?(document.addEventListener(h,En,{passive:b}),on.set(h,1)):on.set(h,N+1)}}};l(It(so)),Ct.add(l);var u=void 0,g=js(()=>{var _=t??n.appendChild(tt());return un(()=>{if(s){_n({});var f=K;f.c=s}o&&(r.$$events=o),u=e(_,r)||{},s&&mn()}),()=>{var b;for(var f of c){n.removeEventListener(f,En);var h=on.get(f);--h===0?(document.removeEventListener(f,En),on.delete(f)):on.set(f,h)}Ct.delete(l),_!==t&&((b=_.parentNode)==null||b.removeChild(_))}});return di.set(u,g),u}let di=new WeakMap;function Ue(e,n,[t,r]=[0,0]){var o=e,s=null,a=null,c=_e,l=t>0?zt:0,u=!1;const g=(f,h=!0)=>{u=!0,_(h,f)},_=(f,h)=>{c!==(c=f)&&(c?(s?Hn(s):h&&(s=un(()=>h(o))),a&&Un(a,()=>{a=null})):(a?Hn(a):h&&(a=un(()=>h(o,[t+1,r]))),s&&Un(s,()=>{s=null})))};st(()=>{u=!1,n(g),u||_(null,null)},l)}function xn(e,n){return n}function _i(e,n,t,r){for(var o=[],s=n.length,a=0;a<s;a++)Ht(n[a].e,o,!0);var c=s>0&&o.length===0&&t!==null;if(c){var l=t.parentNode;Ls(l),l.append(t),r.clear(),He(e,n[0].prev,n[s-1].next)}Jr(o,()=>{for(var u=0;u<s;u++){var g=n[u];c||(r.delete(g.k),He(e,g.prev,g.next)),Ve(g.e,!c)}})}function Mn(e,n,t,r,o,s=null){var a=e,c={flags:n,items:new Map,first:null},l=(n&Lr)!==0;if(l){var u=e;a=u.appendChild(tt())}var g=null,_=!1,f=qt(()=>{var h=t();return Qn(h)?h:h==null?[]:It(h)});st(()=>{var h=E(f),b=h.length;_&&b===0||(_=b===0,mi(h,c,a,o,n,r,t),s!==null&&(b===0?g?Hn(g):g=un(()=>s(a)):g!==null&&Un(g,()=>{g=null})),E(f))})}function mi(e,n,t,r,o,s,a){var de,me,Re,Be;var c=(o&Ds)!==0,l=(o&(jt|Bt))!==0,u=e.length,g=n.items,_=n.first,f=_,h,b=null,N,T=[],P=[],L,S,v,y;if(c)for(y=0;y<u;y+=1)L=e[y],S=s(L,y),v=g.get(S),v!==void 0&&((de=v.a)==null||de.measure(),(N??(N=new Set)).add(v));for(y=0;y<u;y+=1){if(L=e[y],S=s(L,y),v=g.get(S),v===void 0){var V=f?f.e.nodes_start:t;b=vi(V,n,b,b===null?n.first:b.next,L,S,y,r,o,a),g.set(S,b),T=[],P=[],f=b.next;continue}if(l&&gi(v,L,y,o),(v.e.f&Pe)!==0&&(Hn(v.e),c&&((me=v.a)==null||me.unfix(),(N??(N=new Set)).delete(v))),v!==f){if(h!==void 0&&h.has(v)){if(T.length<P.length){var M=P[0],O;b=M.prev;var Z=T[0],ne=T[T.length-1];for(O=0;O<T.length;O+=1)wr(T[O],M,t);for(O=0;O<P.length;O+=1)h.delete(P[O]);He(n,Z.prev,ne.next),He(n,b,Z),He(n,ne,M),f=M,b=ne,y-=1,T=[],P=[]}else h.delete(v),wr(v,f,t),He(n,v.prev,v.next),He(n,v,b===null?n.first:b.next),He(n,b,v),b=v;continue}for(T=[],P=[];f!==null&&f.k!==S;)(f.e.f&Pe)===0&&(h??(h=new Set)).add(f),P.push(f),f=f.next;if(f===null)continue;v=f}T.push(v),b=v,f=v.next}if(f!==null||h!==void 0){for(var te=h===void 0?[]:It(h);f!==null;)(f.e.f&Pe)===0&&te.push(f),f=f.next;var Q=te.length;if(Q>0){var Ee=(o&Lr)!==0&&u===0?t:null;if(c){for(y=0;y<Q;y+=1)(Re=te[y].a)==null||Re.measure();for(y=0;y<Q;y+=1)(Be=te[y].a)==null||Be.fix()}_i(n,te,Ee,g)}}c&&Gt(()=>{var De;if(N!==void 0)for(v of N)(De=v.a)==null||De.apply()}),q.first=n.first&&n.first.e,q.last=b&&b.e}function gi(e,n,t,r){(r&jt)!==0&&St(e.v,n),(r&Bt)!==0?St(e.i,t):e.i=t}function vi(e,n,t,r,o,s,a,c,l,u){var g=(l&jt)!==0,_=(l&xs)===0,f=g?_?$t(o):cn(o):o,h=(l&Bt)===0?a:cn(a),b={i:h,v:f,k:s,a:null,e:null,prev:t,next:r};try{return b.e=un(()=>c(e,f,h,u),Os),b.e.prev=t&&t.e,b.e.next=r&&r.e,t===null?n.first=b:(t.next=b,t.e.next=b.e),r!==null&&(r.prev=b,r.e.prev=b.e),b}finally{}}function wr(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,o=n?n.e.nodes_start:t,s=e.e.nodes_start;s!==r;){var a=rt(s);o.before(s),s=a}}function He(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function pi(e,n,t=!1,r=!1,o=!1){var s=e,a="";he(()=>{var c=q;if(a!==(a=n()??"")&&(c.nodes_start!==null&&(Wr(c.nodes_start,c.nodes_end),c.nodes_start=c.nodes_end=null),a!=="")){var l=a+"";t?l=`<svg>${l}</svg>`:r&&(l=`<math>${l}</math>`);var u=Kt(l);if((t||r)&&(u=Ce(u)),fn(Ce(u),u.lastChild),t||r)for(;Ce(u);)s.before(Ce(u));else s.before(u)}})}function hi(e,n,t,r,o){var c;var s=(c=n.$$slots)==null?void 0:c[t],a=!1;s===!0&&(s=n.children,a=!0),s===void 0?o!==null&&o(e):s(e,a?()=>r:r)}function yi(e,n){var t=void 0,r;st(()=>{t!==(t=n())&&(r&&(Ve(r),r=null),t&&(r=un(()=>{Ut(()=>t(e))})))})}function io(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(n=0;n<o;n++)e[n]&&(t=io(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function bi(){for(var e,n,t=0,r="",o=arguments.length;t<o;t++)(e=arguments[t])&&(n=io(e))&&(r&&(r+=" "),r+=n);return r}function ao(e){return typeof e=="object"?bi(e):e??""}const Er=[...` 	
\r\f \v\uFEFF`];function wi(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var o in t)if(t[o])r=r?r+" "+o:o;else if(r.length)for(var s=o.length,a=0;(a=r.indexOf(o,a))>=0;){var c=a+s;(a===0||Er.includes(r[a-1]))&&(c===r.length||Er.includes(r[c]))?r=(a===0?"":r.substring(0,a))+r.substring(c+1):a=c}}return r===""?null:r}function Dr(e,n=!1){var t=n?" !important;":";",r="";for(var o in e){var s=e[o];s!=null&&s!==""&&(r+=" "+o+": "+s+t)}return r}function wt(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Ei(e,n){if(n){var t="",r,o;if(Array.isArray(n)?(r=n[0],o=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,a=0,c=!1,l=[];r&&l.push(...Object.keys(r).map(wt)),o&&l.push(...Object.keys(o).map(wt));var u=0,g=-1;const N=e.length;for(var _=0;_<N;_++){var f=e[_];if(c?f==="/"&&e[_-1]==="*"&&(c=!1):s?s===f&&(s=!1):f==="/"&&e[_+1]==="*"?c=!0:f==='"'||f==="'"?s=f:f==="("?a++:f===")"&&a--,!c&&s===!1&&a===0){if(f===":"&&g===-1)g=_;else if(f===";"||_===N-1){if(g!==-1){var h=wt(e.substring(u,g).trim());if(!l.includes(h)){f!==";"&&_++;var b=e.substring(u,_).trim();t+=" "+b+";"}}u=_+1,g=-1}}}}return r&&(t+=Dr(r)),o&&(t+=Dr(o,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Zt(e,n,t,r,o,s){var a=e.__className;if(a!==t||a===void 0){var c=wi(t,r,s);c==null?e.removeAttribute("class"):n?e.className=c:e.setAttribute("class",c),e.__className=t}else if(s&&o!==s)for(var l in s){var u=!!s[l];(o==null||u!==!!o[l])&&e.classList.toggle(l,u)}return s}function Et(e,n={},t,r){for(var o in t){var s=t[o];n[o]!==s&&(t[o]==null?e.style.removeProperty(o):e.style.setProperty(o,s,r))}}function Wt(e,n,t,r){var o=e.__style;if(o!==n){var s=Ei(n,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=n}else r&&(Array.isArray(r)?(Et(e,t==null?void 0:t[0],r[0]),Et(e,t==null?void 0:t[1],r[1],"important")):Et(e,t,r));return r}const Dn=Symbol("class"),wn=Symbol("style"),lo=Symbol("is custom element"),co=Symbol("is html");function Di(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Jn(e,n,t,r){var o=uo(e);o[n]!==(o[n]=t)&&(n==="loading"&&(e[us]=t),t==null?e.removeAttribute(n):typeof t!="string"&&fo(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function xi(e,n,t,r,o=!1){var s=uo(e),a=s[lo],c=!s[co],l=n||{},u=e.tagName==="OPTION";for(var g in n)g in t||(t[g]=null);t.class?t.class=ao(t.class):t.class=null,t[wn]&&(t.style??(t.style=null));var _=fo(e);for(const S in t){let v=t[S];if(u&&S==="value"&&v==null){e.value=e.__value="",l[S]=v;continue}if(S==="class"){var f=e.namespaceURI==="http://www.w3.org/1999/xhtml";Zt(e,f,v,r,n==null?void 0:n[Dn],t[Dn]),l[S]=v,l[Dn]=t[Dn];continue}if(S==="style"){Wt(e,v,n==null?void 0:n[wn],t[wn]),l[S]=v,l[wn]=t[wn];continue}var h=l[S];if(v!==h){l[S]=v;var b=S[0]+S[1];if(b!=="$$")if(b==="on"){const y={},V="$$"+S;let M=S.slice(2);var N=ni(M);if(Qs(M)&&(M=M.slice(0,-7),y.capture=!0),!N&&h){if(v!=null)continue;e.removeEventListener(M,l[V],y),l[V]=null}if(v!=null)if(N)e[`__${M}`]=v,ct([M]);else{let O=function(Z){l[S].call(this,Z)};var L=O;l[V]=ci(M,e,O,y)}else N&&(e[`__${M}`]=void 0)}else if(S==="style")Jn(e,S,v);else if(S==="autofocus")ii(e,!!v);else if(!a&&(S==="__value"||S==="value"&&v!=null))e.value=e.__value=v;else if(S==="selected"&&u)Di(e,v);else{var T=S;c||(T=ri(T));var P=T==="defaultValue"||T==="defaultChecked";if(v==null&&!a&&!P)if(s[S]=null,T==="value"||T==="checked"){let y=e;const V=n===void 0;if(T==="value"){let M=y.defaultValue;y.removeAttribute(T),y.defaultValue=M,y.value=y.__value=V?M:null}else{let M=y.defaultChecked;y.removeAttribute(T),y.defaultChecked=M,y.checked=V?M:!1}}else e.removeAttribute(S);else P||_.includes(T)&&(a||typeof v!="string")?e[T]=v:typeof v!="function"&&Jn(e,T,v)}}}for(let S of Object.getOwnPropertySymbols(t))S.description===Cs&&yi(e,()=>t[S]);return l}function uo(e){return e.__attributes??(e.__attributes={[lo]:e.nodeName.includes("-"),[co]:e.namespaceURI===ks})}var xr=new Map;function fo(e){var n=xr.get(e.nodeName);if(n)return n;xr.set(e.nodeName,n=[]);for(var t,r=e,o=Element.prototype;o!==r;){t=kr(r);for(var s in t)t[s].set&&n.push(s);r=Lt(r)}return n}function Mi(e,n,t=n){var r=Fn();li(e,"input",o=>{var s=o?e.defaultValue:e.value;if(s=Dt(e)?xt(s):s,t(s),r&&s!==(s=n())){var a=e.selectionStart,c=e.selectionEnd;e.value=s??"",c!==null&&(e.selectionStart=a,e.selectionEnd=Math.min(c,e.value.length))}}),Tn(n)==null&&e.value&&t(Dt(e)?xt(e.value):e.value),ot(()=>{var o=n();Dt(e)&&o===xt(e.value)||e.type==="date"&&!o&&!e.value||o!==e.value&&(e.value=o??"")})}function Dt(e){var n=e.type;return n==="number"||n==="range"}function xt(e){return e===""?null:+e}function _o(e=!1){const n=K,t=n.l.u;if(!t)return;let r=()=>Nt(n.s);if(e){let o=0,s={};const a=ln(()=>{let c=!1;const l=n.s;for(const u in l)l[u]!==s[u]&&(s[u]=l[u],c=!0);return c&&o++,o});r=()=>E(a)}t.b.length&&Vs(()=>{Mr(n,r),Rt(t.b)}),pr(()=>{const o=Tn(()=>t.m.map(is));return()=>{for(const s of o)typeof s=="function"&&s()}}),t.a.length&&pr(()=>{Mr(n,r),Rt(t.a)})}function Mr(e,n){if(e.l.s)for(const t of e.l.s)E(t);n()}let Vn=!1;function Ri(e){var n=Vn;try{return Vn=!1,[e(),Vn]}finally{Vn=n}}const Ti={get(e,n){if(!e.exclude.includes(n))return E(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=Ke({get[n](){return e.props[n]}},n,Pr)),e.special[n](t),gr(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),gr(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function Yn(e,n){return new Proxy({props:e,exclude:n,special:{},version:cn(0)},Ti)}const Si={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(bn(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let o=e.props[r];bn(o)&&(o=o());const s=Ze(o,n);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(bn(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const o=Ze(r,n);return o&&!o.configurable&&(o.configurable=!0),o}}},has(e,n){if(n===Qe||n===Or)return!1;for(let t of e.props)if(bn(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(bn(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function Fi(...e){return new Proxy({props:e},Si)}function Rr(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function Ke(e,n,t,r){var V;var o=(t&Ms)!==0,s=!Sn||(t&Rs)!==0,a=(t&Ts)!==0,c=(t&Ss)!==0,l=!1,u;a?[u,l]=Ri(()=>e[n]):u=e[n];var g=Qe in e||Or in e,_=a&&(((V=Ze(e,n))==null?void 0:V.set)??(g&&n in e&&(M=>e[n]=M)))||void 0,f=r,h=!0,b=!1,N=()=>(b=!0,h&&(h=!1,c?f=Tn(r):f=r),f);u===void 0&&r!==void 0&&(_&&s&&ps(),u=N(),_&&_(u));var T;if(s)T=()=>{var M=e[n];return M===void 0?N():(h=!0,b=!1,M)};else{var P=(o?ln:qt)(()=>e[n]);P.f|=ls,T=()=>{var M=E(P);return M!==void 0&&(f=void 0),M===void 0?f:M}}if((t&Pr)===0)return T;if(_){var L=e.$$legacy;return function(M,O){return arguments.length>0?((!s||!O||L||l)&&_(O?T():M),M):T()}}var S=!1,v=$t(u),y=ln(()=>{var M=T(),O=E(v);return S?(S=!1,O):v.v=M});return a&&E(y),o||(y.equals=Vt),function(M,O){if(arguments.length>0){const Z=O?E(y):s&&a?Le(M):M;if(!y.equals(Z)){if(S=!0,Y(v,Z),b&&f!==void 0&&(f=Z),Rr(y))return M;Tn(()=>E(y))}return M}return Rr(y)?y.v:E(y)}}function Ni(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function ki(){const e=K;return e===null&&zr(),(n,t,r)=>{var s;const o=(s=e.s.$$events)==null?void 0:s[n];if(o){const a=Qn(o)?o.slice():[o],c=Ni(n,t,r);for(const l of a)l.call(e.x,c);return!c.defaultPrevented}return!0}}function Ci(e){K===null&&zr(),K.l===null&&vs(),Ai(K).a.push(e)}function Ai(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Oi="5";var Nr;typeof window<"u"&&((Nr=window.__svelte??(window.__svelte={})).v??(Nr.v=new Set)).add(Oi);const Ii={__category__:"External libraries",EnzymeForward:"error",EnzymeReverse:"wrong",FiniteDifferences:94.18537735849058,ForwardDiff:1.9906626089362287,MooncakeForward:24.207266399119224,MooncakeReverse:6.123132631284331,ReverseDiff:61.50901729849099,ReverseDiffCompiled:7.347700134247156,Zygote:771.2494663491224},Li={__category__:"Distributions",EnzymeForward:3.7065951597026574,EnzymeReverse:2.4583138525749715,FiniteDifferences:39.42509554429059,ForwardDiff:2.0919553560354562,MooncakeForward:4.038100482619967,MooncakeReverse:3.383210113498067,ReverseDiff:73.70270821298719,ReverseDiffCompiled:5.843884244253999,Zygote:3466.409038080263},Pi={__category__:"Base Julia features",EnzymeForward:3.329883240367275,EnzymeReverse:1.7698183124421003,FiniteDifferences:81.16902936987046,ForwardDiff:2.4275751154848977,MooncakeForward:8.550314358538659,MooncakeReverse:4.765155763619665,ReverseDiff:60.0245209428523,ReverseDiffCompiled:"wrong",Zygote:6400.109855810008},zi={__category__:"External libraries",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:61.17500881831522,ForwardDiff:"wrong",MooncakeForward:"error",MooncakeReverse:"wrong",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Vi={__category__:"DynamicPPL demo models",EnzymeForward:5.5141769524820665,EnzymeReverse:3.68406229963617,FiniteDifferences:81.60814884107681,ForwardDiff:3.162475023990876,MooncakeForward:7.946376188206481,MooncakeReverse:6.179262989404498,ReverseDiff:141.46513252026983,ReverseDiffCompiled:13.249775871300322,Zygote:"error"},ji={__category__:"DynamicPPL demo models",EnzymeForward:4.065946911001818,EnzymeReverse:3.108676310284889,FiniteDifferences:64.6502334770115,ForwardDiff:2.2795483776560923,MooncakeForward:7.581358555460017,MooncakeReverse:5.364674593241552,ReverseDiff:101.64187163650811,ReverseDiffCompiled:9.81317311762216,Zygote:7594.9824262071315},Bi={__category__:"DynamicPPL demo models",EnzymeForward:4.927618014107433,EnzymeReverse:5.7267322549493,FiniteDifferences:83.66877594066816,ForwardDiff:1.7420589745306816,MooncakeForward:12.267182692852764,MooncakeReverse:4.982562756040368,ReverseDiff:71.19458550645072,ReverseDiffCompiled:6.369663111562553,Zygote:"error"},qi={__category__:"DynamicPPL demo models",EnzymeForward:4.738407789826874,EnzymeReverse:4.230990789034323,FiniteDifferences:81.72286207616266,ForwardDiff:1.3957103264653206,MooncakeForward:14.008834431630975,MooncakeReverse:6.221059444845402,ReverseDiff:54.29336188436831,ReverseDiffCompiled:4.984254352763059,Zygote:"error"},$i={__category__:"DynamicPPL demo models",EnzymeForward:6.452719465964499,EnzymeReverse:4.827586831335338,FiniteDifferences:87.31627994011976,ForwardDiff:1.571863838640698,MooncakeForward:15.507084914528427,MooncakeReverse:6.958968099555817,ReverseDiff:69.80055195839083,ReverseDiffCompiled:6.021217945475696,Zygote:3755.6974449784975},Ui={__category__:"DynamicPPL demo models",EnzymeForward:4.913471148282572,EnzymeReverse:3.6133231583231584,FiniteDifferences:87.31656292585909,ForwardDiff:1.5283083788238687,MooncakeForward:14.153629917944166,MooncakeReverse:6.051345166530311,ReverseDiff:62.861773770117566,ReverseDiffCompiled:5.632370072677875,Zygote:3108.1086631814787},Hi={__category__:"DynamicPPL demo models",EnzymeForward:5.448350800701027,EnzymeReverse:3.852621794722333,FiniteDifferences:80.68693624523688,ForwardDiff:1.9176645757313326,MooncakeForward:8.447253273870649,MooncakeReverse:5.83354161123787,ReverseDiff:149.71572327044026,ReverseDiffCompiled:13.330309489742616,Zygote:9396.829574786034},Gi={__category__:"DynamicPPL demo models",EnzymeForward:5.31711540337528,EnzymeReverse:6.486535668108608,FiniteDifferences:82.08313809261301,ForwardDiff:1.4724114045940289,MooncakeForward:12.697422341021433,MooncakeReverse:5.965486572085556,ReverseDiff:68.27048203031852,ReverseDiffCompiled:6.754024897916553,Zygote:"error"},Ki={__category__:"Distributions",EnzymeForward:2.7217200396170353,EnzymeReverse:2.8017762945074516,FiniteDifferences:27.175371083012642,ForwardDiff:1.1953665490903738,MooncakeForward:3.7414013547840814,MooncakeReverse:5.988366479687234,ReverseDiff:50.44946673438294,ReverseDiffCompiled:4.319668962831342,Zygote:"error"},Zi={__category__:"DynamicPPL demo models",EnzymeForward:5.068217834504026,EnzymeReverse:5.923007343338543,FiniteDifferences:85.87421768218113,ForwardDiff:1.4899839183331003,MooncakeForward:14.180179569710317,MooncakeReverse:6.286736904946161,ReverseDiff:61.80091821118858,ReverseDiffCompiled:7.086923296264613,Zygote:"error"},Wi={__category__:"DynamicPPL demo models",EnzymeForward:5.080593645956775,EnzymeReverse:5.921883181575959,FiniteDifferences:83.7071413728614,ForwardDiff:1.8260659700781745,MooncakeForward:12.348577485158751,MooncakeReverse:5.672537458845663,ReverseDiff:53.43082686647043,ReverseDiffCompiled:6.59296847781632,Zygote:"error"},Xi={__category__:"DynamicPPL demo models",EnzymeForward:5.279844400145554,EnzymeReverse:4.735461527911124,FiniteDifferences:86.36387641932927,ForwardDiff:1.5582362537625514,MooncakeForward:12.253813110610098,MooncakeReverse:5.3097485363942285,ReverseDiff:72.17007815407517,ReverseDiffCompiled:7.081782125215952,Zygote:"error"},Ji={__category__:"DynamicPPL demo models",EnzymeForward:5.153721325794143,EnzymeReverse:5.744579477972656,FiniteDifferences:78.11055764791641,ForwardDiff:1.4422172538740266,MooncakeForward:14.918845001166483,MooncakeReverse:7.2224102513628585,ReverseDiff:55.851051135366575,ReverseDiffCompiled:5.380535663297356,Zygote:"error"},Yi={__category__:"DynamicPPL demo models",EnzymeForward:5.045944719759894,EnzymeReverse:6.703628137271642,FiniteDifferences:77.62801401387648,ForwardDiff:1.367343656209752,MooncakeForward:14.043806400595406,MooncakeReverse:5.756411562626541,ReverseDiff:60.06348704990524,ReverseDiffCompiled:5.524302384576357,Zygote:"error"},Qi={__category__:"Core Turing syntax",EnzymeForward:3.893863778477802,EnzymeReverse:2.457685037080122,FiniteDifferences:116.37921300256629,ForwardDiff:1.6121235910951606,MooncakeForward:15.154370420855342,MooncakeReverse:4.1621929356713725,ReverseDiff:54.30906298003072,ReverseDiffCompiled:4.351032136105861,Zygote:"error"},ea={__category__:"Core Turing syntax",EnzymeForward:7.734660777343704,EnzymeReverse:4.795607543935179,FiniteDifferences:114.50571186184615,ForwardDiff:3.6983370661813906,MooncakeForward:8.65489190038095,MooncakeReverse:13.024941670430819,ReverseDiff:360.04968132901473,ReverseDiffCompiled:33.56737203020018,Zygote:"error"},na={__category__:"DynamicPPL arXiV paper",EnzymeForward:1.539895976228678,EnzymeReverse:2.1453519106743095,FiniteDifferences:914.7887585550823,ForwardDiff:.7722024610255098,MooncakeForward:4.158722477619163,MooncakeReverse:9.353866935595793,ReverseDiff:125.25335180509857,ReverseDiffCompiled:24.903711278708084,Zygote:16.33880906372964},ta={__category__:"DynamicPPL arXiV paper",EnzymeForward:7.356680544379527,EnzymeReverse:3.1090186231429167,FiniteDifferences:174.29035166816954,ForwardDiff:6.023316878479151,MooncakeForward:31.923847695390783,MooncakeReverse:6.918632788868724,ReverseDiff:88.30064975588267,ReverseDiffCompiled:10.585450266491314,Zygote:1925.5915349887134},ra={__category__:"DynamicPPL arXiV paper",EnzymeForward:5869.601180954472,EnzymeReverse:2.3044409003313118,FiniteDifferences:117118.29875101088,ForwardDiff:1080.0050658754412,MooncakeForward:7956.689147215044,MooncakeReverse:4.1716417910447765,ReverseDiff:41.62150824308037,ReverseDiffCompiled:5.118947132730053,Zygote:3.2028252330099956},oa={__category__:"Distributions",EnzymeForward:4.9595210095833195,EnzymeReverse:20.630214917825537,FiniteDifferences:160.99584912470672,ForwardDiff:2.921853237342368,MooncakeForward:20.112672480212932,MooncakeReverse:4.460206370569762,ReverseDiff:66.03258361175213,ReverseDiffCompiled:8.353470866029898,Zygote:"error"},sa={__category__:"DynamicPPL arXiV paper",EnzymeForward:38.03387961347591,EnzymeReverse:5.42039550684765,FiniteDifferences:"NaN",ForwardDiff:27.892894102464204,MooncakeForward:187.54959113850336,MooncakeReverse:4.556573065144012,ReverseDiff:71.16510142009358,ReverseDiffCompiled:10.876905850962455,Zygote:"error"},ia={__category__:"DynamicPPL arXiV paper",EnzymeForward:250.83728891254842,EnzymeReverse:3.1364191324332094,FiniteDifferences:3701.9769417715515,ForwardDiff:180.6798821089401,MooncakeForward:437.24915600245765,MooncakeReverse:11.423396119105883,ReverseDiff:82.85064113165899,ReverseDiffCompiled:12.367155350654738,Zygote:"error"},aa={__category__:"DynamicPPL arXiV paper",EnzymeForward:42.57558892955606,EnzymeReverse:3.3612047981787936,FiniteDifferences:1071.097921479462,ForwardDiff:53.43800482927552,MooncakeForward:162.00491009198606,MooncakeReverse:4.597750612622305,ReverseDiff:2862.3896224213895,ReverseDiffCompiled:379.4773167584464,Zygote:178.03567468299084},la={__category__:"DynamicPPL arXiV paper",EnzymeForward:147.64515015670779,EnzymeReverse:.9833035027709277,FiniteDifferences:2886.5800910536013,ForwardDiff:137.81261119801107,MooncakeForward:758.6244314030498,MooncakeReverse:4.425873066449037,ReverseDiff:137.81552040491005,ReverseDiffCompiled:19.481315693691194,Zygote:5355.504665964493},ca={__category__:"DynamicPPL arXiV paper",EnzymeForward:224.53141215084364,EnzymeReverse:4.819615193781355,FiniteDifferences:6444.9600362557685,ForwardDiff:120.28061196562483,MooncakeForward:1147.9510452865575,MooncakeReverse:3.883263217128005,ReverseDiff:105.41043009875132,ReverseDiffCompiled:9.93531324039892,Zygote:"error"},ua={__category__:"Core Turing syntax",EnzymeForward:3.557559229589228,EnzymeReverse:3.224162280724632,FiniteDifferences:59.02841083290752,ForwardDiff:1.553844321482984,MooncakeForward:6.788185053380783,MooncakeReverse:4.357484536432844,ReverseDiff:68.74904089881483,ReverseDiffCompiled:7.053536161472528,Zygote:4777.769279414781},fa={__category__:"External libraries",EnzymeForward:"error",EnzymeReverse:"wrong",FiniteDifferences:256.43656475748196,ForwardDiff:"wrong",MooncakeForward:"wrong",MooncakeReverse:"wrong",ReverseDiff:"wrong",ReverseDiffCompiled:"wrong",Zygote:"error"},da={__category__:"Core Turing syntax",EnzymeForward:3.4222903381131897,EnzymeReverse:2.68511145649258,FiniteDifferences:68.48005161470321,ForwardDiff:1.2600034862101024,MooncakeForward:11.224400082747207,MooncakeReverse:5.0521101793141066,ReverseDiff:47.99012853470437,ReverseDiffCompiled:4.126517587216278,Zygote:"error"},_a={__category__:"Base Julia features",EnzymeForward:"wrong",EnzymeReverse:"wrong",FiniteDifferences:"wrong",ForwardDiff:"wrong",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"wrong",ReverseDiffCompiled:"error",Zygote:"error"},ma={__category__:"Effect of model size",EnzymeForward:5.518723789523983,EnzymeReverse:2.9082012238596837,FiniteDifferences:183.72366271222563,ForwardDiff:2.6329130039672033,MooncakeForward:28.659261576971215,MooncakeReverse:4.048713361772395,ReverseDiff:57.06167779003977,ReverseDiffCompiled:4.421184637778524,Zygote:"error"},ga={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:4.359230709401296,FiniteDifferences:42.95137385512073,ForwardDiff:1.0522151015218304,MooncakeForward:14.326400593271758,MooncakeReverse:9.063190266078353,ReverseDiff:19.86740340756641,ReverseDiffCompiled:1.3776100035389878,Zygote:989.1843418590142},va={__category__:"Effect of model size",EnzymeForward:26.613737734165923,EnzymeReverse:5.841166336303514,FiniteDifferences:700.0007389890629,ForwardDiff:12.692717779609783,MooncakeForward:129.28735211164428,MooncakeReverse:4.0603113102205,ReverseDiff:58.5659773595293,ReverseDiffCompiled:4.852813137157657,Zygote:"error"},pa={__category__:"Effect of model size",EnzymeForward:52.691666096944004,EnzymeReverse:4.493380495199595,FiniteDifferences:1284.3962264150944,ForwardDiff:17.082137404580152,MooncakeForward:326.74166525351876,MooncakeReverse:3.8583844933434506,ReverseDiff:51.05992877734442,ReverseDiffCompiled:4.606387097860305,Zygote:"error"},ha={__category__:"Effect of model size",EnzymeForward:251.54911786786786,EnzymeReverse:4.101400052832182,FiniteDifferences:6603.444965757311,ForwardDiff:75.83635342568328,MooncakeForward:1321.8522911254188,MooncakeReverse:3.783242397649662,ReverseDiff:48.6134607331836,ReverseDiffCompiled:4.307302040662933,Zygote:"error"},ya={__category__:"Distributions",EnzymeForward:2.9815452423487683,EnzymeReverse:2.8988566270497964,FiniteDifferences:32.342965051754206,ForwardDiff:1.8683624821660445,MooncakeForward:3.7063101125034006,MooncakeReverse:3.835233043599119,ReverseDiff:70.79876509517636,ReverseDiffCompiled:6.189162064570944,Zygote:"error"},ba={__category__:"Distributions",EnzymeForward:1.908842350816729,EnzymeReverse:7.279441831936209,FiniteDifferences:20.12565800645271,ForwardDiff:1.2164200158874199,MooncakeForward:3.678402691937921,MooncakeReverse:7.305016606698035,ReverseDiff:39.56988338685145,ReverseDiffCompiled:3.716597041501165,Zygote:"error"},wa={__category__:"Core Turing syntax",EnzymeForward:9.229575163398692,EnzymeReverse:5.139620569648559,FiniteDifferences:118.27377257336343,ForwardDiff:3.7501494632320456,MooncakeForward:8.452449526769051,MooncakeReverse:13.068693940347286,ReverseDiff:382.5203017059072,ReverseDiffCompiled:33.75061422029361,Zygote:"error"},Ea={__category__:"Core Turing syntax",EnzymeForward:11.837058737523046,EnzymeReverse:5.521881998103576,FiniteDifferences:151.07719404892723,ForwardDiff:3.7485393434012133,MooncakeForward:9.718157381259742,MooncakeReverse:11.346562312683982,ReverseDiff:303.14430325983085,ReverseDiffCompiled:25.791362461910722,Zygote:22348.049363057326},Da={__category__:"Core Turing syntax",EnzymeForward:3.755496332935357,EnzymeReverse:4.321857629357672,FiniteDifferences:75.99964879008184,ForwardDiff:1.7827040911888261,MooncakeForward:9.538046040771045,MooncakeReverse:5.012079216040018,ReverseDiff:64.00549618840186,ReverseDiffCompiled:5.272616418743478,Zygote:"error"},xa={__category__:"Core Turing syntax",EnzymeForward:11.906137391154738,EnzymeReverse:5.540902727338422,FiniteDifferences:149.82442962214958,ForwardDiff:3.601233178539244,MooncakeForward:9.59012059835865,MooncakeReverse:11.837210250010623,ReverseDiff:292.0251994517274,ReverseDiffCompiled:23.95524382097528,Zygote:37298.34679209386},Ma={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:28.181084411583484,ForwardDiff:"NaN",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"NaN",ReverseDiffCompiled:5.161508138044451,Zygote:3396.6226614414722},Ra={__category__:"Distributions",EnzymeForward:12.357024013937108,EnzymeReverse:4.446791118073428,FiniteDifferences:158.28315019609227,ForwardDiff:3.2492907757965477,MooncakeForward:9.231782099495195,MooncakeReverse:10.332200516513675,ReverseDiff:179.94181283478628,ReverseDiffCompiled:15.686758478388656,Zygote:18924.755197209168},Ta={__category__:"External libraries",EnzymeForward:"wrong",EnzymeReverse:"wrong",FiniteDifferences:63.09614980815851,ForwardDiff:"wrong",MooncakeForward:"error",MooncakeReverse:"wrong",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Sa={__category__:"PosteriorDB",EnzymeForward:6.757439134355275,EnzymeReverse:4.3090797294527565,FiniteDifferences:173.61229494042482,ForwardDiff:3.9326588731374987,MooncakeForward:28.04015790906616,MooncakeReverse:4.787643453090414,ReverseDiff:113.34571477253365,ReverseDiffCompiled:9.151569324530218,Zygote:"error"},Fa={__category__:"PosteriorDB",EnzymeForward:6.130486337858738,EnzymeReverse:4.112383244513208,FiniteDifferences:166.85241902696842,ForwardDiff:3.9974101209746133,MooncakeForward:28.235476963459284,MooncakeReverse:5.180048026727918,ReverseDiff:104.78074081657026,ReverseDiffCompiled:9.145785168660852,Zygote:"error"},Na={__category__:"Core Turing syntax",EnzymeForward:6.450456323337679,EnzymeReverse:3.6244923124465727,FiniteDifferences:119.79012238971096,ForwardDiff:2.175616875641461,MooncakeForward:8.904650424717632,MooncakeReverse:6.631915223839417,ReverseDiff:108.89288933573708,ReverseDiffCompiled:8.72610396732903,Zygote:14539.215119335506},ka={__category__:"Distributions",EnzymeForward:8.542637370726142,EnzymeReverse:9.942742861375505,FiniteDifferences:44.75611232554229,ForwardDiff:1.7219294240014205,MooncakeForward:16.123104782871145,MooncakeReverse:11.280850204658506,ReverseDiff:31.99139086867546,ReverseDiffCompiled:1.9625144004962634,Zygote:400.3464572525051},Ca={__category__:"Core Turing syntax",EnzymeForward:4.9667964557979865,EnzymeReverse:3.672904965023034,FiniteDifferences:77.21321985815604,ForwardDiff:1.6228998707244104,MooncakeForward:7.71286794747544,MooncakeReverse:5.266167664670659,ReverseDiff:133.60061570035919,ReverseDiffCompiled:11.602638860305046,Zygote:"error"},Aa={__category__:"Base Julia features",EnzymeForward:6.001397120330325,EnzymeReverse:3.4010869081028106,FiniteDifferences:70.39215179402336,ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Oa={abstractgps:Ii,assume_beta:Li,control_flow:Pi,delaydiffeq:zi,demo_assume_dot_observe:Vi,demo_assume_dot_observe_literal:ji,demo_assume_index_observe:Bi,demo_assume_matrix_observe_matrix_index:qi,demo_assume_multivariate_observe:$i,demo_assume_multivariate_observe_literal:Ui,demo_assume_observe_literal:Hi,demo_assume_submodel_observe_index_literal:Gi,assume_dirichlet:Ki,demo_dot_assume_observe:Zi,demo_dot_assume_observe_index:Wi,demo_dot_assume_observe_index_literal:Xi,demo_dot_assume_observe_matrix_index:Ji,demo_dot_assume_observe_submodel:Yi,dot_assume:Qi,dot_observe:ea,dppl_gauss_unknown:na,dppl_hier_poisson:ta,dppl_high_dim_gauss:ra,assume_lkjcholu:oa,dppl_hmm_semisup:sa,dppl_lda:ia,dppl_logistic_regression:aa,dppl_naive_bayes:la,dppl_sto_volatility:ca,dynamic_constraint:ua,lux_nn:fa,multiple_constraints_same_var:da,multithreaded:_a,n010:ma,assume_mvnormal:ga,n050:va,n100:pa,n500:ha,observe_bernoulli:ya,observe_categorical:ba,observe_index:wa,observe_literal:Ea,observe_multivariate:Da,observe_submodel:xa,observe_von_mises:Ma,assume_normal:Ra,ordinarydiffeq:Ta,pdb_eight_schools_centered:Sa,pdb_eight_schools_noncentered:Fa,assume_submodel:Na,assume_wishart:ka,broadcast_macro:Ca,call_C:Aa},Ia=`#=
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

model = demo_assume_dot_observe()`,ja=`@model function demo_assume_dot_observe_literal()
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

model = demo_assume_index_observe()`,qa=`using LinearAlgebra: Diagonal

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

model = n010()`,gl=`@model function assume_mvnormal()
    a ~ MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0])
end

model = assume_mvnormal()`,vl=`@model function n050(::Type{TV} = Vector{Float64}) where {TV}
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

model = n500()`,yl=`@model function observe_bernoulli(x = [true, false, true])
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

model = call_C()`,Ol={abstractgps:Ia,assume_beta:La,control_flow:Pa,delaydiffeq:za,demo_assume_dot_observe:Va,demo_assume_dot_observe_literal:ja,demo_assume_index_observe:Ba,demo_assume_matrix_observe_matrix_index:qa,demo_assume_multivariate_observe:$a,demo_assume_multivariate_observe_literal:Ua,demo_assume_observe_literal:Ha,demo_assume_submodel_observe_index_literal:Ga,assume_dirichlet:Ka,demo_dot_assume_observe:Za,demo_dot_assume_observe_index:Wa,demo_dot_assume_observe_index_literal:Xa,demo_dot_assume_observe_matrix_index:Ja,demo_dot_assume_observe_submodel:Ya,dot_assume:Qa,dot_observe:el,dppl_gauss_unknown:nl,dppl_hier_poisson:tl,dppl_high_dim_gauss:rl,assume_lkjcholu:ol,dppl_hmm_semisup:sl,dppl_lda:il,dppl_logistic_regression:al,dppl_naive_bayes:ll,dppl_sto_volatility:cl,dynamic_constraint:ul,lux_nn:fl,multiple_constraints_same_var:dl,multithreaded:_l,n010:ml,assume_mvnormal:gl,n050:vl,n100:pl,n500:hl,observe_bernoulli:yl,observe_categorical:bl,observe_index:wl,observe_literal:El,observe_multivariate:Dl,observe_submodel:xl,observe_von_mises:Ml,assume_normal:Rl,ordinarydiffeq:Tl,pdb_eight_schools_centered:Sl,pdb_eight_schools_noncentered:Fl,assume_submodel:Nl,assume_wishart:kl,broadcast_macro:Cl,call_C:Al};Es();const Il="1.20.0",Ll="1.5.0",Pl="0.5.24",zl="5.10.0",Vl="0.13.6",jl="0.4.5",Bl="0.1.43",ql="4.4.0",$l="0.8.3",Ul="0.8.9",Hl="0.7.0",Gl="0.6.0",Kl="1.1.3",Zl="2.5.0",Wl="1.1.2",Xl="0.4.0",Jl="0.5.4",Yl="3.5.1+1",Ql="7.22.0",ec="1.12.2",nc="1.11.0",tc="1.1.2",rc="0.5.2",oc="1.1.0",sc="0.4.8",ic="0.5.1",ac="0.4.6",lc="1.11.0",cc="0.1.1",uc="0.15.14",fc="0.1.9",dc="0.1.6",_c="1.6.0",mc="1.2.2",gc="0.5.0",vc="0.2.7",pc="0.10.15",hc="0.3.14",yc="1.72.6",bc="1.26.0",wc="1.3.1",Ec="0.1.10",Dc="0.10.43",xc="0.10.4+0",Mc="0.1.13",Rc="0.7.8",Tc="3.31.0",Sc="0.12.1",Fc="0.11.0",Nc="0.13.1",kc="1.0.3",Cc="0.2.4",Ac="0.3.1",Oc="1.0.0",Ic="4.18.1",Lc="1.1.1+0",Pc="0.1.2",zc="0.2.3",Vc="2.5.0",jc="0.1.2",Bc="1.6.0",qc="0.1.3",$c="0.3.1",Uc="4.1.1",Hc="1.16.0",Gc="0.7.13",Kc="1.8.1",Zc="0.18.22",Wc="1.0.0",Xc="1.11.0",Jc="0.1.2",Yc="5.62.0",Qc="1.9.1",eu="0.4.0",nu="6.192.0",tu="4.10.1",ru="5.24.1",ou="1.1.0",su="1.15.1",iu="0.7.12",au="0.4.26",lu="0.10.12",cu="1.11.0",uu="0.25.122",fu="0.6.58",du="0.9.5",_u="1.6.0",mu="0.39.1",gu="2.0.0",vu="1.0.5",pu="0.13.108",hu="0.8.17",yu="0.0.221+0",bu="0.1.11",wu="1.28.0",Eu="0.1.10",Du="0.10.14",xu="1.10.0",Mu="3.3.11+0",Ru="0.2.2",Tu="0.1.1",Su="0.3.5",Fu="0.3.2",Nu="1.1.0",ku="1.2.0",Cu="1.17.1",Au="0.9.24",Ou="1.11.0",Iu="1.15.0",Lu="2.29.0",Pu="0.12.33",zu="0.8.5",Vu="1.3.0",ju="0.1.2",Bu="1.1.3",qu="0.1.3",$u="0.5.2",Uu="1.11.0",Hu="0.2.0",Gu="1.7.5",Ku="0.6.2",Zu="0.5.6",Wu="1.3.1",Xu="1.13.1",Ju="0.17.2",Yu="1.14.6+0",Qu="1.10.19",ef="0.2.0",nf="2.12.2+0",tf="0.3.28",rf="0.4.15",of="0.1.1",sf="0.1.7",af="0.10.5",lf="0.3.8",cf="0.1.5",uf="0.3.1",ff="1.4.5",df="2025.2.0+0",_f="1.11.0",mf="0.7.0",gf="0.16.2",vf="0.7.13",pf="0.1.17",hf="1.3.1",yf="0.2.6",bf="1.10.0",wf="1.0.0",Ef="0.5.15",Df="1.7.1",xf="1.14.3",Mf="0.2.1",Rf="0.2.4",Tf="0.9.39",Sf="0.6.10",Ff="0.10.66",Nf="0.10.3",kf="9.4.4",Cf="0.0.38+0",Af="1.4.0",Of="0.1.17",If="2.9.4",Lf="1.11.0",Pf="0.3.1",zf="0.2.1",Vf="0.6.4",jf="8.6.0+0",Bf="1.11.0",qf="1.7.2+0",$f="1.11.0+1",Uf="0.9.1+6",Hf="1.11.0",Gf="1.18.0+0",Kf="0.9.10",Zf="0.1.4",Wf="7.5.1",Xf="1.11.0",Jf="3.48.1",Yf="2.2.0",Qf="1.13.1",ed="0.3.29",nd="1.11.0",td="1.2.0",rd="1.21.1",od="1.4.2",sd="1.13.1",id="0.10.7",ad="7.6.0",ld="0.3.15",cd="2025.2.0+0",ud="1.0.0",fd="1.15.1",dd="0.7.18",_d="1.12.0",md="0.4.17",gd="0.4.8",vd="4.3.2+0",pd="0.1.11",hd="5.5.4+0",yd="0.5.16",bd="0.1.8",wd="0.4.2",Ed="1.11.0",Dd="0.1.4",xd="1.1.9",Md="2.28.6+0",Rd="0.2.0",Td="10.1.4+3",Sd="1.2.0",Fd="2.1.0",Nd="1.11.0",kd="0.4.182",Cd="0.3.4",Ad="0.3.7",Od="2023.12.12",Id="0.2.4",Ld="0.10.3",Pd="7.10.0",zd="0.9.31",Vd="0.4.3",jd="1.1.3",Bd="0.1.5",qd="0.10.5",$d="1.0.0",Ud="1.2.0",Hd="4.12.0",Gd="2.5.0",Kd="1.10.0",Zd="1.11.0",Wd="1.6.0",Xd="0.5.0",Jd="1.17.0",Yd="0.3.27+1",Qd="0.8.5+0",e1="5.0.9+0",n1="1.6.1",t1="3.5.4+0",r1="0.5.6+0",o1="1.13.3",s1="0.4.6",i1="5.2.0",a1="4.0.2",l1="0.4.8",c1="1.8.1",u1="6.103.0",f1="1.5.0",d1="1.10.1",_1="1.36.0",m1="1.8.0",g1="1.16.1",v1="1.4.0",p1="1.8.0",h1="1.9.0",y1="1.16.0",b1="1.4.0",w1="1.5.0",E1="1.5.0",D1="1.7.0",x1="1.6.0",M1="1.6.0",R1="1.7.0",T1="1.15.0",S1="1.4.0",F1="1.6.0",N1="1.4.0",k1="1.4.0",C1="1.5.0",A1="1.18.1",O1="1.7.0",I1="1.7.0",L1="1.6.0",P1="1.4.0",z1="1.7.0",V1="1.5.0",j1="1.6.0",B1="0.11.36",q1="1.0.2",$1="0.5.12",U1="2.8.3",H1="1.2.1",G1="0.3.6",K1="1.11.0",Z1="0.4.7",W1="0.7.18",X1="0.2.2",J1="1.4.3",Y1="0.2.4",Q1="0.4.34",e0="1.2.1",n0="1.5.0",t0="0.2.0",r0="3.1.2",o0="1.11.0",s0="0.1.6",i0="1.11.0",a0="1.3.0",l0="2.11.2",c0="1.11.0",u0="1.11.0",f0="1.7.1",d0="1.6.0",_0="0.3.2",m0="0.4.5",g0="0.1.0",v0="1.3.4",p0="3.39.0",h0="1.2.2",y0="1.3.1",b0="1.1.1",w0="1.16.1",E0="1.4.2",D0="0.9.0",x0="0.5.1+0",M0="2.2.10",R0="0.5.16",T0="0.7.0",S0="0.1.0",F0="0.5.2",N0="2.128.0",k0="0.1.11",C0="1.6.0",A0="1.14.0",O0="1.0.0",I0="7.90.0",L0="1.7.0",P0="3.0.0",z0="1.5.0",V0="1.3.0",j0="1.4.8",B0="1.11.0",q0="1.1.2",$0="1.11.0",U0="0.1.0",H0="1.2.0",G0="2.9.0",K0="0.9.5",Z0="1.1.0",W0="1.11.0",X0="1.2.2",J0="1.11.0",Y0="1.1.3",Q0="0.1.2",e_="0.4.23",n_="2.6.1",t_="0.1.15",r_="0.1.2",o_="1.3.1",s_="1.8.0",i_="1.9.15",a_="1.4.4",l_="3.5.0",c_="1.11.1",u_="1.8.0",f_="0.34.9",d_="1.5.2",__="0.5.8",m_="0.4.1",g_="0.3.7",v_="0.4.2",p_="0.7.2",h_="0.3.1",y_="1.11.0",b_="2.6.0",w_="1.11.0",E_=null,D_="7.7.0+0",x_="0.3.46",M_="1.0.3",R_="1.0.1",T_="1.12.1",S_="1.10.0",F_="0.1.1",N_="0.1.7",k_="1.11.0",C_="0.5.5",A_="0.5.29",O_="0.2.38",I_="0.1.6",L_="0.11.3",P_="0.4.85",z_="1.4.0",V_="0.42.0",j_="1.6.1",B_="1.11.0",q_="1.0.2",$_="1.11.0",U_="1.26.0",H_="1.0.0",G_="0.3.0",K_="1.4.2",Z_="1.2.2",W_="1.0.0",X_="1.6.1",J_="2.13.9+0",Y_="0.18.1+0",Q_="0.10.1",em="1.2.13+1",nm="0.7.10",tm="0.2.7",rm="1.1.4+0",om="5.11.0+0",sm="1.59.0+0",im="2022.0.0+1",am="17.4.0+2",lm={ADTypes:Il,AbstractFFTs:Ll,AbstractGPs:Pl,AbstractMCMC:zl,AbstractPPL:Vl,AbstractTrees:jl,Accessors:Bl,Adapt:ql,AdvancedHMC:$l,AdvancedMH:Ul,AdvancedPS:Hl,AdvancedVI:Gl,AliasTables:Kl,ArgCheck:Zl,ArgTools:Wl,ArnoldiMethod:Xl,Arpack:Jl,Arpack_jll:Yl,ArrayInterface:Ql,ArrayLayouts:ec,Artifacts:nc,Atomix:tc,AtomsBase:rc,AxisAlgorithms:oc,AxisArrays:sc,BFloat16s:ic,BangBang:ac,Base64:lc,Baselet:cc,Bijectors:uc,BitFlags:fc,BitTwiddlingConvenienceFunctions:dc,BracketingNonlinearSolve:_c,BufferedStreams:mc,CEnum:gc,CPUSummary:vc,CSV:pc,Cassette:hc,ChainRules:yc,ChainRulesCore:bc,Chairmarks:wc,ChangesOfVariables:Ec,Chemfiles:Dc,Chemfiles_jll:xc,CloseOpenIntervals:Mc,CodecZlib:Rc,ColorSchemes:Tc,ColorTypes:Sc,ColorVectorSpace:Fc,Colors:Nc,Combinatorics:kc,CommonSolve:Cc,CommonSubexpressions:Ac,CommonWorldInvalidations:Oc,Compat:Ic,CompilerSupportLibraries_jll:Lc,CompositionsBase:Pc,ConcreteStructs:zc,ConcurrentUtilities:Vc,ConsoleProgressMonitor:jc,ConstructionBase:Bc,ContextVariablesX:qc,CpuId:$c,Crayons:Uc,DataAPI:Hc,DataDeps:Gc,DataFrames:Kc,DataStructures:Zc,DataValueInterfaces:Wc,Dates:Xc,DefineSingletons:Jc,DelayDiffEq:Yc,DelimitedFiles:Qc,DensityInterface:eu,DiffEqBase:nu,DiffEqCallbacks:tu,DiffEqNoiseProcess:ru,DiffResults:ou,DiffRules:su,DifferentiationInterface:iu,DispatchDoctor:au,Distances:lu,Distributed:cu,Distributions:uu,DistributionsAD:fu,DocStringExtensions:du,Downloads:_u,DynamicPPL:mu,EllipticalSliceSampling:gu,EnumX:vu,Enzyme:pu,EnzymeCore:hu,Enzyme_jll:yu,ExceptionUnwrapping:bu,ExponentialUtilities:wu,ExprTools:Eu,ExproniconLite:Du,FFTW:xu,FFTW_jll:Mu,FLoops:Ru,FLoopsBase:Tu,FastBroadcast:Su,FastClosures:Fu,FastGaussQuadrature:Nu,FastPower:ku,FileIO:Cu,FilePathsBase:Au,FileWatching:Ou,FillArrays:Iu,FiniteDiff:Lu,FiniteDifferences:Pu,FixedPointNumbers:zu,ForwardDiff:Vu,FunctionProperties:ju,FunctionWrappers:Bu,FunctionWrappersWrappers:qu,Functors:$u,Future:Uu,GPUArraysCore:Hu,GPUCompiler:Gu,GZip:Ku,GenericSchur:Zu,Glob:Wu,Graphs:Xu,HDF5:Ju,HDF5_jll:Yu,HTTP:Qu,HashArrayMappedTries:ef,Hwloc_jll:nf,HypergeometricFunctions:tf,IRTools:rf,IfElse:of,ImageBase:sf,ImageCore:af,ImageShow:lf,Inflate:cf,InitialValues:uf,InlineStrings:ff,IntelOpenMP_jll:df,InteractiveUtils:_f,InternedStrings:mf,Interpolations:gf,IntervalSets:vf,InverseFunctions:pf,InvertedIndices:hf,IrrationalConstants:yf,IterTools:bf,IteratorInterfaceExtensions:wf,JLD2:Ef,JLLWrappers:Df,JSON:"1.3.0",JSON3:xf,Jieko:Mf,JuliaVariables:Rf,KernelAbstractions:Tf,KernelDensity:Sf,KernelFunctions:Ff,Krylov:Nf,LLVM:kf,LLVMExtra_jll:Cf,LaTeXStrings:Af,LayoutPointers:Of,LazyArrays:If,LazyArtifacts:Lf,LazyModules:Pf,LeftChildRightSiblingTrees:zf,LibCURL:Vf,LibCURL_jll:jf,LibGit2:Bf,LibGit2_jll:qf,LibSSH2_jll:$f,LibTracyClient_jll:Uf,Libdl:Hf,Libiconv_jll:Gf,Libtask:Kf,LineSearch:Zf,LineSearches:Wf,LinearAlgebra:Xf,LinearSolve:Jf,LogDensityProblems:Yf,LogDensityProblemsAD:Qf,LogExpFunctions:ed,Logging:nd,LoggingExtras:td,Lux:rd,LuxCore:od,LuxLib:sd,MAT:id,MCMCChains:ad,MCMCDiagnosticTools:ld,MKL_jll:cd,MLCore:ud,MLDataDevices:fd,MLDatasets:dd,MLJModelInterface:_d,MLStyle:md,MLUtils:gd,MPICH_jll:vd,MPIPreferences:pd,MPItrampoline_jll:hd,MacroTools:yd,ManualMemory:bd,MappedArrays:wd,Markdown:Ed,MaybeInplace:Dd,MbedTLS:xd,MbedTLS_jll:Md,MicroCollections:Rd,MicrosoftMPI_jll:Td,Missings:Sd,MistyClosures:Fd,Mmap:Nd,Mooncake:kd,MosaicViews:Cd,Moshi:Ad,MozillaCACerts_jll:Od,MuladdMacro:Id,MultivariateStats:Ld,NLSolversBase:Pd,NNlib:zd,NPZ:Vd,NaNMath:jd,NameResolution:Bd,NamedArrays:qd,NaturalSort:$d,NetworkOptions:Ud,NonlinearSolve:Hd,NonlinearSolveBase:Gd,NonlinearSolveFirstOrder:Kd,NonlinearSolveQuasiNewton:Zd,NonlinearSolveSpectralMethods:Wd,ObjectFile:Xd,OffsetArrays:Jd,OpenBLAS_jll:Yd,OpenLibm_jll:Qd,OpenMPI_jll:e1,OpenSSL:n1,OpenSSL_jll:t1,OpenSpecFun_jll:r1,Optim:o1,Optimisers:s1,Optimization:i1,OptimizationBase:a1,OptimizationOptimJL:l1,OrderedCollections:c1,OrdinaryDiffEq:u1,OrdinaryDiffEqAdamsBashforthMoulton:f1,OrdinaryDiffEqBDF:d1,OrdinaryDiffEqCore:_1,OrdinaryDiffEqDefault:m1,OrdinaryDiffEqDifferentiation:g1,OrdinaryDiffEqExplicitRK:v1,OrdinaryDiffEqExponentialRK:p1,OrdinaryDiffEqExtrapolation:h1,OrdinaryDiffEqFIRK:y1,OrdinaryDiffEqFeagin:b1,OrdinaryDiffEqFunctionMap:w1,OrdinaryDiffEqHighOrderRK:E1,OrdinaryDiffEqIMEXMultistep:D1,OrdinaryDiffEqLinear:x1,OrdinaryDiffEqLowOrderRK:M1,OrdinaryDiffEqLowStorageRK:R1,OrdinaryDiffEqNonlinearSolve:T1,OrdinaryDiffEqNordsieck:S1,OrdinaryDiffEqPDIRK:F1,OrdinaryDiffEqPRK:N1,OrdinaryDiffEqQPRK:k1,OrdinaryDiffEqRKN:C1,OrdinaryDiffEqRosenbrock:A1,OrdinaryDiffEqSDIRK:O1,OrdinaryDiffEqSSPRK:I1,OrdinaryDiffEqStabilizedIRK:L1,OrdinaryDiffEqStabilizedRK:P1,OrdinaryDiffEqSymplecticRK:z1,OrdinaryDiffEqTsit5:V1,OrdinaryDiffEqVerner:j1,PDMats:B1,PackageExtensionCompat:q1,PaddedViews:$1,Parsers:U1,PeriodicTable:H1,Pickle:G1,Pkg:K1,PoissonRandom:Z1,Polyester:W1,PolyesterWeave:X1,PooledArrays:J1,PositiveFactorizations:Y1,PreallocationTools:Q1,PrecompileTools:e0,Preferences:n0,PrettyPrint:t0,PrettyTables:r0,Printf:o0,ProgressLogging:s0,ProgressMeter:i0,PtrArrays:a0,QuadGK:l0,REPL:c0,Random:u0,Random123:f0,RandomNumbers:d0,RangeArrays:_0,Ratios:m0,RealDot:g0,RecipesBase:v0,RecursiveArrayTools:p0,Reexport:h0,Requires:y0,ResettableStacks:b0,ReverseDiff:w0,Richardson:E0,Rmath:D0,Rmath_jll:x0,Roots:M0,RuntimeGeneratedFunctions:R0,SHA:T0,SIMDTypes:S0,SSMProblems:F0,SciMLBase:N0,SciMLJacobianOperators:k0,SciMLLogging:C0,SciMLOperators:A0,SciMLPublic:O0,SciMLSensitivity:I0,SciMLStructures:L0,ScientificTypesBase:P0,ScopedValues:z0,Scratch:V0,SentinelArrays:j0,Serialization:B0,Setfield:q0,SharedArrays:$0,ShowCases:U0,SimpleBufferStream:H0,SimpleNonlinearSolve:G0,SimpleTraits:K0,SimpleUnPack:Z0,Sockets:W0,SortingAlgorithms:X0,SparseArrays:J0,SparseConnectivityTracer:Y0,SparseInverseSubset:Q0,SparseMatrixColorings:e_,SpecialFunctions:n_,SplittablesBase:t_,StackViews:r_,Static:o_,StaticArrayInterface:s_,StaticArrays:i_,StaticArraysCore:a_,StatisticalTraits:l_,Statistics:c_,StatsAPI:u_,StatsBase:f_,StatsFuns:d_,StrideArraysCore:__,StridedViews:m_,StringEncodings:g_,StringManipulation:v_,StructArrays:p_,StructIO:h_,StructTypes:y_,StructUtils:b_,StyledStrings:w_,SuiteSparse:E_,SuiteSparse_jll:D_,SymbolicIndexingInterface:x_,TOML:M_,TableTraits:R_,Tables:T_,Tar:S_,TensorCore:F_,TerminalLoggers:N_,Test:k_,ThreadingUtilities:C_,TimerOutputs:A_,Tracker:O_,Tracy:I_,TranscodingStreams:L_,Transducers:P_,TruncatedStacktraces:z_,Turing:V_,URIs:j_,UUIDs:B_,UnPack:q_,Unicode:$_,Unitful:U_,UnitfulAtomic:H_,UnsafeAtomics:G_,WeakRefStrings:K_,WeightInitializers:Z_,WoodburyMatrices:W_,WorkerUtilities:X_,XML2_jll:J_,Xorg_libpciaccess_jll:Y_,ZipFile:Q_,Zlib_jll:em,Zygote:nm,ZygoteRules:tm,libaec_jll:rm,libblastrampoline_jll:om,nghttp2_jll:sm,oneTBB_jll:im,p7zip_jll:am};function Ot(e){return[...e.entries()].sort(([n,t],[r,o])=>n.localeCompare(r))}var cm=fe('<tr><td class="svelte-1dtc2uh"> </td><td class="version svelte-1dtc2uh"> </td></tr>'),um=fe('<table id="manifest" class="svelte-1dtc2uh"><thead><tr><th class="svelte-1dtc2uh">Package</th><th class="svelte-1dtc2uh">Version</th></tr></thead><tbody></tbody></table>');function fm(e,n){_n(n,!1);let t=new Map;for(const[s,a]of Object.entries(lm))t.set(s,a===""?null:a);_o();var r=um(),o=ie(j(r));Mn(o,5,()=>Ot(t),xn,(s,a)=>{let c=()=>E(a)[0],l=()=>E(a)[1];var u=cm(),g=j(u),_=j(g),f=ie(g),h=j(f);he(()=>{ze(_,c()),ze(h,l()===null?"":`v${l()}`)}),G(s,u)}),G(e,r),mn()}var dm=fe('<td class="model-name svelte-h40yz5"> </td>');function _m(e,n){var t=dm();t.__click=function(...o){var s;(s=n.onToggle)==null||s.apply(this,o)};var r=j(t);he(()=>ze(r,n.name)),G(e,t)}ct(["click"]);function mm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Mt,Tr;function gm(){if(Tr)return Mt;Tr=1;function e(i){return i instanceof Map?i.clear=i.delete=i.set=function(){throw new Error("map is read-only")}:i instanceof Set&&(i.add=i.clear=i.delete=function(){throw new Error("set is read-only")}),Object.freeze(i),Object.getOwnPropertyNames(i).forEach(d=>{const p=i[d],C=typeof p;(C==="object"||C==="function")&&!Object.isFrozen(p)&&e(p)}),i}class n{constructor(d){d.data===void 0&&(d.data={}),this.data=d.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(i,...d){const p=Object.create(null);for(const C in i)p[C]=i[C];return d.forEach(function(C){for(const W in C)p[W]=C[W]}),p}const o="</span>",s=i=>!!i.scope,a=(i,{prefix:d})=>{if(i.startsWith("language:"))return i.replace("language:","language-");if(i.includes(".")){const p=i.split(".");return[`${d}${p.shift()}`,...p.map((C,W)=>`${C}${"_".repeat(W+1)}`)].join(" ")}return`${d}${i}`};class c{constructor(d,p){this.buffer="",this.classPrefix=p.classPrefix,d.walk(this)}addText(d){this.buffer+=t(d)}openNode(d){if(!s(d))return;const p=a(d.scope,{prefix:this.classPrefix});this.span(p)}closeNode(d){s(d)&&(this.buffer+=o)}value(){return this.buffer}span(d){this.buffer+=`<span class="${d}">`}}const l=(i={})=>{const d={children:[]};return Object.assign(d,i),d};class u{constructor(){this.rootNode=l(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(d){this.top.children.push(d)}openNode(d){const p=l({scope:d});this.add(p),this.stack.push(p)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(d){return this.constructor._walk(d,this.rootNode)}static _walk(d,p){return typeof p=="string"?d.addText(p):p.children&&(d.openNode(p),p.children.forEach(C=>this._walk(d,C)),d.closeNode(p)),d}static _collapse(d){typeof d!="string"&&d.children&&(d.children.every(p=>typeof p=="string")?d.children=[d.children.join("")]:d.children.forEach(p=>{u._collapse(p)}))}}class g extends u{constructor(d){super(),this.options=d}addText(d){d!==""&&this.add(d)}startScope(d){this.openNode(d)}endScope(){this.closeNode()}__addSublanguage(d,p){const C=d.root;p&&(C.scope=`language:${p}`),this.add(C)}toHTML(){return new c(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(i){return i?typeof i=="string"?i:i.source:null}function f(i){return N("(?=",i,")")}function h(i){return N("(?:",i,")*")}function b(i){return N("(?:",i,")?")}function N(...i){return i.map(p=>_(p)).join("")}function T(i){const d=i[i.length-1];return typeof d=="object"&&d.constructor===Object?(i.splice(i.length-1,1),d):{}}function P(...i){return"("+(T(i).capture?"":"?:")+i.map(C=>_(C)).join("|")+")"}function L(i){return new RegExp(i.toString()+"|").exec("").length-1}function S(i,d){const p=i&&i.exec(d);return p&&p.index===0}const v=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function y(i,{joinWith:d}){let p=0;return i.map(C=>{p+=1;const W=p;let X=_(C),x="";for(;X.length>0;){const D=v.exec(X);if(!D){x+=X;break}x+=X.substring(0,D.index),X=X.substring(D.index+D[0].length),D[0][0]==="\\"&&D[1]?x+="\\"+String(Number(D[1])+W):(x+=D[0],D[0]==="("&&p++)}return x}).map(C=>`(${C})`).join(d)}const V=/\b\B/,M="[a-zA-Z]\\w*",O="[a-zA-Z_]\\w*",Z="\\b\\d+(\\.\\d+)?",ne="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",te="\\b(0b[01]+)",Q="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Ee=(i={})=>{const d=/^#![ ]*\//;return i.binary&&(i.begin=N(d,/.*\b/,i.binary,/\b.*/)),r({scope:"meta",begin:d,end:/$/,relevance:0,"on:begin":(p,C)=>{p.index!==0&&C.ignoreMatch()}},i)},de={begin:"\\\\[\\s\\S]",relevance:0},me={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[de]},Re={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[de]},Be={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},De=function(i,d,p={}){const C=r({scope:"comment",begin:i,end:d,contains:[]},p);C.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const W=P("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return C.contains.push({begin:N(/[ ]+/,"(",W,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),C},Te=De("//","$"),ae=De("/\\*","\\*/"),Se=De("#","$"),pn={scope:"number",begin:Z,relevance:0},nn={scope:"number",begin:ne,relevance:0},ft={scope:"number",begin:te,relevance:0},hn={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[de,{begin:/\[/,end:/\]/,relevance:0,contains:[de]}]},kn={scope:"title",begin:M,relevance:0},dt={scope:"title",begin:O,relevance:0},po={begin:"\\.\\s*"+O,relevance:0};var Cn=Object.freeze({__proto__:null,APOS_STRING_MODE:me,BACKSLASH_ESCAPE:de,BINARY_NUMBER_MODE:ft,BINARY_NUMBER_RE:te,COMMENT:De,C_BLOCK_COMMENT_MODE:ae,C_LINE_COMMENT_MODE:Te,C_NUMBER_MODE:nn,C_NUMBER_RE:ne,END_SAME_AS_BEGIN:function(i){return Object.assign(i,{"on:begin":(d,p)=>{p.data._beginMatch=d[1]},"on:end":(d,p)=>{p.data._beginMatch!==d[1]&&p.ignoreMatch()}})},HASH_COMMENT_MODE:Se,IDENT_RE:M,MATCH_NOTHING_RE:V,METHOD_GUARD:po,NUMBER_MODE:pn,NUMBER_RE:Z,PHRASAL_WORDS_MODE:Be,QUOTE_STRING_MODE:Re,REGEXP_MODE:hn,RE_STARTERS_RE:Q,SHEBANG:Ee,TITLE_MODE:kn,UNDERSCORE_IDENT_RE:O,UNDERSCORE_TITLE_MODE:dt});function ho(i,d){i.input[i.index-1]==="."&&d.ignoreMatch()}function yo(i,d){i.className!==void 0&&(i.scope=i.className,delete i.className)}function bo(i,d){d&&i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",i.__beforeBegin=ho,i.keywords=i.keywords||i.beginKeywords,delete i.beginKeywords,i.relevance===void 0&&(i.relevance=0))}function wo(i,d){Array.isArray(i.illegal)&&(i.illegal=P(...i.illegal))}function Eo(i,d){if(i.match){if(i.begin||i.end)throw new Error("begin & end are not supported with match");i.begin=i.match,delete i.match}}function Do(i,d){i.relevance===void 0&&(i.relevance=1)}const xo=(i,d)=>{if(!i.beforeMatch)return;if(i.starts)throw new Error("beforeMatch cannot be used with starts");const p=Object.assign({},i);Object.keys(i).forEach(C=>{delete i[C]}),i.keywords=p.keywords,i.begin=N(p.beforeMatch,f(p.begin)),i.starts={relevance:0,contains:[Object.assign(p,{endsParent:!0})]},i.relevance=0,delete p.beforeMatch},Mo=["of","and","for","in","not","or","if","then","parent","list","value"],Ro="keyword";function Xt(i,d,p=Ro){const C=Object.create(null);return typeof i=="string"?W(p,i.split(" ")):Array.isArray(i)?W(p,i):Object.keys(i).forEach(function(X){Object.assign(C,Xt(i[X],d,X))}),C;function W(X,x){d&&(x=x.map(D=>D.toLowerCase())),x.forEach(function(D){const k=D.split("|");C[k[0]]=[X,To(k[0],k[1])]})}}function To(i,d){return d?Number(d):So(i)?0:1}function So(i){return Mo.includes(i.toLowerCase())}const Jt={},Je=i=>{console.error(i)},Yt=(i,...d)=>{console.log(`WARN: ${i}`,...d)},tn=(i,d)=>{Jt[`${i}/${d}`]||(console.log(`Deprecated as of ${i}. ${d}`),Jt[`${i}/${d}`]=!0)},An=new Error;function Qt(i,d,{key:p}){let C=0;const W=i[p],X={},x={};for(let D=1;D<=d.length;D++)x[D+C]=W[D],X[D+C]=!0,C+=L(d[D-1]);i[p]=x,i[p]._emit=X,i[p]._multi=!0}function Fo(i){if(Array.isArray(i.begin)){if(i.skip||i.excludeBegin||i.returnBegin)throw Je("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),An;if(typeof i.beginScope!="object"||i.beginScope===null)throw Je("beginScope must be object"),An;Qt(i,i.begin,{key:"beginScope"}),i.begin=y(i.begin,{joinWith:""})}}function No(i){if(Array.isArray(i.end)){if(i.skip||i.excludeEnd||i.returnEnd)throw Je("skip, excludeEnd, returnEnd not compatible with endScope: {}"),An;if(typeof i.endScope!="object"||i.endScope===null)throw Je("endScope must be object"),An;Qt(i,i.end,{key:"endScope"}),i.end=y(i.end,{joinWith:""})}}function ko(i){i.scope&&typeof i.scope=="object"&&i.scope!==null&&(i.beginScope=i.scope,delete i.scope)}function Co(i){ko(i),typeof i.beginScope=="string"&&(i.beginScope={_wrap:i.beginScope}),typeof i.endScope=="string"&&(i.endScope={_wrap:i.endScope}),Fo(i),No(i)}function Ao(i){function d(x,D){return new RegExp(_(x),"m"+(i.case_insensitive?"i":"")+(i.unicodeRegex?"u":"")+(D?"g":""))}class p{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(D,k){k.position=this.position++,this.matchIndexes[this.matchAt]=k,this.regexes.push([k,D]),this.matchAt+=L(D)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const D=this.regexes.map(k=>k[1]);this.matcherRe=d(y(D,{joinWith:"|"}),!0),this.lastIndex=0}exec(D){this.matcherRe.lastIndex=this.lastIndex;const k=this.matcherRe.exec(D);if(!k)return null;const re=k.findIndex((yn,mt)=>mt>0&&yn!==void 0),J=this.matchIndexes[re];return k.splice(0,re),Object.assign(k,J)}}class C{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(D){if(this.multiRegexes[D])return this.multiRegexes[D];const k=new p;return this.rules.slice(D).forEach(([re,J])=>k.addRule(re,J)),k.compile(),this.multiRegexes[D]=k,k}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(D,k){this.rules.push([D,k]),k.type==="begin"&&this.count++}exec(D){const k=this.getMatcher(this.regexIndex);k.lastIndex=this.lastIndex;let re=k.exec(D);if(this.resumingScanAtSamePosition()&&!(re&&re.index===this.lastIndex)){const J=this.getMatcher(0);J.lastIndex=this.lastIndex+1,re=J.exec(D)}return re&&(this.regexIndex+=re.position+1,this.regexIndex===this.count&&this.considerAll()),re}}function W(x){const D=new C;return x.contains.forEach(k=>D.addRule(k.begin,{rule:k,type:"begin"})),x.terminatorEnd&&D.addRule(x.terminatorEnd,{type:"end"}),x.illegal&&D.addRule(x.illegal,{type:"illegal"}),D}function X(x,D){const k=x;if(x.isCompiled)return k;[yo,Eo,Co,xo].forEach(J=>J(x,D)),i.compilerExtensions.forEach(J=>J(x,D)),x.__beforeBegin=null,[bo,wo,Do].forEach(J=>J(x,D)),x.isCompiled=!0;let re=null;return typeof x.keywords=="object"&&x.keywords.$pattern&&(x.keywords=Object.assign({},x.keywords),re=x.keywords.$pattern,delete x.keywords.$pattern),re=re||/\w+/,x.keywords&&(x.keywords=Xt(x.keywords,i.case_insensitive)),k.keywordPatternRe=d(re,!0),D&&(x.begin||(x.begin=/\B|\b/),k.beginRe=d(k.begin),!x.end&&!x.endsWithParent&&(x.end=/\B|\b/),x.end&&(k.endRe=d(k.end)),k.terminatorEnd=_(k.end)||"",x.endsWithParent&&D.terminatorEnd&&(k.terminatorEnd+=(x.end?"|":"")+D.terminatorEnd)),x.illegal&&(k.illegalRe=d(x.illegal)),x.contains||(x.contains=[]),x.contains=[].concat(...x.contains.map(function(J){return Oo(J==="self"?x:J)})),x.contains.forEach(function(J){X(J,k)}),x.starts&&X(x.starts,D),k.matcher=W(k),k}if(i.compilerExtensions||(i.compilerExtensions=[]),i.contains&&i.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return i.classNameAliases=r(i.classNameAliases||{}),X(i)}function er(i){return i?i.endsWithParent||er(i.starts):!1}function Oo(i){return i.variants&&!i.cachedVariants&&(i.cachedVariants=i.variants.map(function(d){return r(i,{variants:null},d)})),i.cachedVariants?i.cachedVariants:er(i)?r(i,{starts:i.starts?r(i.starts):null}):Object.isFrozen(i)?r(i):i}var Io="11.11.1";class Lo extends Error{constructor(d,p){super(d),this.name="HTMLInjectionError",this.html=p}}const _t=t,nr=r,tr=Symbol("nomatch"),Po=7,rr=function(i){const d=Object.create(null),p=Object.create(null),C=[];let W=!0;const X="Could not find the language '{}', did you forget to load/include a language module?",x={disableAutodetect:!0,name:"Plain text",contains:[]};let D={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:g};function k(m){return D.noHighlightRe.test(m)}function re(m){let F=m.className+" ";F+=m.parentNode?m.parentNode.className:"";const z=D.languageDetectRe.exec(F);if(z){const U=qe(z[1]);return U||(Yt(X.replace("{}",z[1])),Yt("Falling back to no-highlight mode for this block.",m)),U?z[1]:"no-highlight"}return F.split(/\s+/).find(U=>k(U)||qe(U))}function J(m,F,z){let U="",ee="";typeof F=="object"?(U=m,z=F.ignoreIllegals,ee=F.language):(tn("10.7.0","highlight(lang, code, ...args) has been deprecated."),tn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),ee=m,U=F),z===void 0&&(z=!0);const xe={code:U,language:ee};In("before:highlight",xe);const $e=xe.result?xe.result:yn(xe.language,xe.code,z);return $e.code=xe.code,In("after:highlight",$e),$e}function yn(m,F,z,U){const ee=Object.create(null);function xe(w,R){return w.keywords[R]}function $e(){if(!A.keywords){oe.addText(H);return}let w=0;A.keywordPatternRe.lastIndex=0;let R=A.keywordPatternRe.exec(H),I="";for(;R;){I+=H.substring(w,R.index);const B=Ne.case_insensitive?R[0].toLowerCase():R[0],se=xe(A,B);if(se){const[Ie,es]=se;if(oe.addText(I),I="",ee[B]=(ee[B]||0)+1,ee[B]<=Po&&(zn+=es),Ie.startsWith("_"))I+=R[0];else{const ns=Ne.classNameAliases[Ie]||Ie;Fe(R[0],ns)}}else I+=R[0];w=A.keywordPatternRe.lastIndex,R=A.keywordPatternRe.exec(H)}I+=H.substring(w),oe.addText(I)}function Ln(){if(H==="")return;let w=null;if(typeof A.subLanguage=="string"){if(!d[A.subLanguage]){oe.addText(H);return}w=yn(A.subLanguage,H,!0,fr[A.subLanguage]),fr[A.subLanguage]=w._top}else w=gt(H,A.subLanguage.length?A.subLanguage:null);A.relevance>0&&(zn+=w.relevance),oe.__addSublanguage(w._emitter,w.language)}function ge(){A.subLanguage!=null?Ln():$e(),H=""}function Fe(w,R){w!==""&&(oe.startScope(R),oe.addText(w),oe.endScope())}function ar(w,R){let I=1;const B=R.length-1;for(;I<=B;){if(!w._emit[I]){I++;continue}const se=Ne.classNameAliases[w[I]]||w[I],Ie=R[I];se?Fe(Ie,se):(H=Ie,$e(),H=""),I++}}function lr(w,R){return w.scope&&typeof w.scope=="string"&&oe.openNode(Ne.classNameAliases[w.scope]||w.scope),w.beginScope&&(w.beginScope._wrap?(Fe(H,Ne.classNameAliases[w.beginScope._wrap]||w.beginScope._wrap),H=""):w.beginScope._multi&&(ar(w.beginScope,R),H="")),A=Object.create(w,{parent:{value:A}}),A}function cr(w,R,I){let B=S(w.endRe,I);if(B){if(w["on:end"]){const se=new n(w);w["on:end"](R,se),se.isMatchIgnored&&(B=!1)}if(B){for(;w.endsParent&&w.parent;)w=w.parent;return w}}if(w.endsWithParent)return cr(w.parent,R,I)}function Wo(w){return A.matcher.regexIndex===0?(H+=w[0],1):(yt=!0,0)}function Xo(w){const R=w[0],I=w.rule,B=new n(I),se=[I.__beforeBegin,I["on:begin"]];for(const Ie of se)if(Ie&&(Ie(w,B),B.isMatchIgnored))return Wo(R);return I.skip?H+=R:(I.excludeBegin&&(H+=R),ge(),!I.returnBegin&&!I.excludeBegin&&(H=R)),lr(I,w),I.returnBegin?0:R.length}function Jo(w){const R=w[0],I=F.substring(w.index),B=cr(A,w,I);if(!B)return tr;const se=A;A.endScope&&A.endScope._wrap?(ge(),Fe(R,A.endScope._wrap)):A.endScope&&A.endScope._multi?(ge(),ar(A.endScope,w)):se.skip?H+=R:(se.returnEnd||se.excludeEnd||(H+=R),ge(),se.excludeEnd&&(H=R));do A.scope&&oe.closeNode(),!A.skip&&!A.subLanguage&&(zn+=A.relevance),A=A.parent;while(A!==B.parent);return B.starts&&lr(B.starts,w),se.returnEnd?0:R.length}function Yo(){const w=[];for(let R=A;R!==Ne;R=R.parent)R.scope&&w.unshift(R.scope);w.forEach(R=>oe.openNode(R))}let Pn={};function ur(w,R){const I=R&&R[0];if(H+=w,I==null)return ge(),0;if(Pn.type==="begin"&&R.type==="end"&&Pn.index===R.index&&I===""){if(H+=F.slice(R.index,R.index+1),!W){const B=new Error(`0 width match regex (${m})`);throw B.languageName=m,B.badRule=Pn.rule,B}return 1}if(Pn=R,R.type==="begin")return Xo(R);if(R.type==="illegal"&&!z){const B=new Error('Illegal lexeme "'+I+'" for mode "'+(A.scope||"<unnamed>")+'"');throw B.mode=A,B}else if(R.type==="end"){const B=Jo(R);if(B!==tr)return B}if(R.type==="illegal"&&I==="")return H+=`
`,1;if(ht>1e5&&ht>R.index*3)throw new Error("potential infinite loop, way more iterations than matches");return H+=I,I.length}const Ne=qe(m);if(!Ne)throw Je(X.replace("{}",m)),new Error('Unknown language: "'+m+'"');const Qo=Ao(Ne);let pt="",A=U||Qo;const fr={},oe=new D.__emitter(D);Yo();let H="",zn=0,Ye=0,ht=0,yt=!1;try{if(Ne.__emitTokens)Ne.__emitTokens(F,oe);else{for(A.matcher.considerAll();;){ht++,yt?yt=!1:A.matcher.considerAll(),A.matcher.lastIndex=Ye;const w=A.matcher.exec(F);if(!w)break;const R=F.substring(Ye,w.index),I=ur(R,w);Ye=w.index+I}ur(F.substring(Ye))}return oe.finalize(),pt=oe.toHTML(),{language:m,value:pt,relevance:zn,illegal:!1,_emitter:oe,_top:A}}catch(w){if(w.message&&w.message.includes("Illegal"))return{language:m,value:_t(F),illegal:!0,relevance:0,_illegalBy:{message:w.message,index:Ye,context:F.slice(Ye-100,Ye+100),mode:w.mode,resultSoFar:pt},_emitter:oe};if(W)return{language:m,value:_t(F),illegal:!1,relevance:0,errorRaised:w,_emitter:oe,_top:A};throw w}}function mt(m){const F={value:_t(m),illegal:!1,relevance:0,_top:x,_emitter:new D.__emitter(D)};return F._emitter.addText(m),F}function gt(m,F){F=F||D.languages||Object.keys(d);const z=mt(m),U=F.filter(qe).filter(ir).map(ge=>yn(ge,m,!1));U.unshift(z);const ee=U.sort((ge,Fe)=>{if(ge.relevance!==Fe.relevance)return Fe.relevance-ge.relevance;if(ge.language&&Fe.language){if(qe(ge.language).supersetOf===Fe.language)return 1;if(qe(Fe.language).supersetOf===ge.language)return-1}return 0}),[xe,$e]=ee,Ln=xe;return Ln.secondBest=$e,Ln}function zo(m,F,z){const U=F&&p[F]||z;m.classList.add("hljs"),m.classList.add(`language-${U}`)}function vt(m){let F=null;const z=re(m);if(k(z))return;if(In("before:highlightElement",{el:m,language:z}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(D.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),D.throwUnescapedHTML))throw new Lo("One of your code blocks includes unescaped HTML.",m.innerHTML);F=m;const U=F.textContent,ee=z?J(U,{language:z,ignoreIllegals:!0}):gt(U);m.innerHTML=ee.value,m.dataset.highlighted="yes",zo(m,z,ee.language),m.result={language:ee.language,re:ee.relevance,relevance:ee.relevance},ee.secondBest&&(m.secondBest={language:ee.secondBest.language,relevance:ee.secondBest.relevance}),In("after:highlightElement",{el:m,result:ee,text:U})}function Vo(m){D=nr(D,m)}const jo=()=>{On(),tn("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Bo(){On(),tn("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let or=!1;function On(){function m(){On()}if(document.readyState==="loading"){or||window.addEventListener("DOMContentLoaded",m,!1),or=!0;return}document.querySelectorAll(D.cssSelector).forEach(vt)}function qo(m,F){let z=null;try{z=F(i)}catch(U){if(Je("Language definition for '{}' could not be registered.".replace("{}",m)),W)Je(U);else throw U;z=x}z.name||(z.name=m),d[m]=z,z.rawDefinition=F.bind(null,i),z.aliases&&sr(z.aliases,{languageName:m})}function $o(m){delete d[m];for(const F of Object.keys(p))p[F]===m&&delete p[F]}function Uo(){return Object.keys(d)}function qe(m){return m=(m||"").toLowerCase(),d[m]||d[p[m]]}function sr(m,{languageName:F}){typeof m=="string"&&(m=[m]),m.forEach(z=>{p[z.toLowerCase()]=F})}function ir(m){const F=qe(m);return F&&!F.disableAutodetect}function Ho(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=F=>{m["before:highlightBlock"](Object.assign({block:F.el},F))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=F=>{m["after:highlightBlock"](Object.assign({block:F.el},F))})}function Go(m){Ho(m),C.push(m)}function Ko(m){const F=C.indexOf(m);F!==-1&&C.splice(F,1)}function In(m,F){const z=m;C.forEach(function(U){U[z]&&U[z](F)})}function Zo(m){return tn("10.7.0","highlightBlock will be removed entirely in v12.0"),tn("10.7.0","Please use highlightElement now."),vt(m)}Object.assign(i,{highlight:J,highlightAuto:gt,highlightAll:On,highlightElement:vt,highlightBlock:Zo,configure:Vo,initHighlighting:jo,initHighlightingOnLoad:Bo,registerLanguage:qo,unregisterLanguage:$o,listLanguages:Uo,getLanguage:qe,registerAliases:sr,autoDetection:ir,inherit:nr,addPlugin:Go,removePlugin:Ko}),i.debugMode=function(){W=!1},i.safeMode=function(){W=!0},i.versionString=Io,i.regex={concat:N,lookahead:f,either:P,optional:b,anyNumberOfTimes:h};for(const m in Cn)typeof Cn[m]=="object"&&e(Cn[m]);return Object.assign(i,Cn),i},rn=rr({});return rn.newInstance=()=>rr({}),Mt=rn,rn.HighlightJS=rn,rn.default=rn,Mt}var vm=gm();const Sr=mm(vm);var pm=fe("<pre><code><!></code></pre>");function hm(e,n){const t=Yn(n,["children","$$slots","$$events","$$legacy"]),r=Yn(t,["code","highlighted","languageName","langtag"]);let o=Ke(n,"code",8),s=Ke(n,"highlighted",8),a=Ke(n,"languageName",8,"plaintext"),c=Ke(n,"langtag",8,!1);var l=pm();let u;var g=j(l);Zt(g,1,"",null,{},{hljs:!0});var _=j(g);{var f=b=>{var N=Xn(),T=an(N);pi(T,s),G(b,N)},h=b=>{var N=At();he(()=>ze(N,o())),G(b,N)};Ue(_,b=>{s()?b(f):b(h,!1)})}he(b=>u=xi(l,u,{"data-language":a(),...r,[Dn]:b},"svelte-1w9vok"),[()=>({langtag:c()})],qt),G(e,l)}function ym(e,n){const t=Yn(n,["children","$$slots","$$events","$$legacy"]),r=Yn(t,["language","code","langtag"]);_n(n,!1);let o=Ke(n,"language",8),s=Ke(n,"code",8),a=Ke(n,"langtag",8,!1);const c=ki();let l=$t("");Ci(()=>{E(l)&&c("highlight",{highlighted:E(l)})}),Bs(()=>(Nt(o()),Nt(s())),()=>{Sr.registerLanguage(o().name,o().register),Y(l,Sr.highlight(s(),{language:o().name}).value)}),qs(),_o();var u=Xn(),g=an(u);hi(g,n,"default",{get highlighted(){return E(l)}},_=>{hm(_,Fi(()=>r,{get languageName(){return o().name},get langtag(){return a()},get highlighted(){return E(l)},get code(){return s()}}))}),G(e,u),mn()}function bm(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",s={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},a={keywords:s,illegal:/<\//},c={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},l={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},u={className:"subst",begin:/\$\(/,end:/\)/,keywords:s},g={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,u,g],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},f={className:"string",contains:[e.BACKSLASH_ESCAPE,u,g],begin:"`",end:"`"},h={className:"meta",begin:"@"+n},b={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return a.name="Julia",a.contains=[c,l,_,f,h,b,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],u.contains=a.contains,a}const wm={name:"julia",register:bm};function mo(e){let n,t,r;if(e<.5){const o=e*2;n=Math.round(34+o*166),t=Math.round(197+o*-17),r=Math.round(94+o*-94)}else{const o=(e-.5)*2;n=Math.round(200+o*20),t=Math.round(180-o*180),r=Math.round(0+o*30)}return[n,t,r]}function Em(e,n,t){if(typeof e!="number")return"";const r=[...n.values()].filter(b=>typeof b=="number");if(r.length<2)return"";const o=Math.min(...r),s=Math.max(...r),a=Math.log(Math.max(o,.001)),c=Math.log(Math.max(s,.001));if(c===a)return"";const l=Math.log(Math.max(e,.001)),u=Math.max(0,Math.min(1,(l-a)/(c-a))),[g,_,f]=mo(u);return`background-color: rgba(${g}, ${_}, ${f}, ${t==="dark"?.3:.25})`}function Dm(e,n=10){const t=e==="dark"?.5:.4,r=[];for(let o=0;o<=n;o++){const s=o/n,[a,c,l]=mo(s);r.push(`rgba(${a}, ${c}, ${l}, ${t})`)}return r}const xm=[{url:"https://github.com/EnzymeAD/Enzyme.jl/issues/1995",affects:[["assume_mvnormal","EnzymeFwd"],["assume_wishart","EnzymeFwd"]]},{url:"https://github.com/chalk-lab/Mooncake.jl/issues/570",affects:[["multithreaded","MooncakeFwd"],["multithreaded","MooncakeRvs"]]}],Mm=[],go=new Map;for(const e of xm)for(const[n,t]of e.affects)go.set(`${n}__${t}`,e.url);const vo=new Map;for(const e of Mm)for(const[n,t]of e.affects)vo.set(`${n}__${t}`,e.value);function Fr(e,n){return go.get(`${e}__${n}`)}function Rm(e,n){return vo.get(`${e}__${n}`)}var Tm=(e,n,t)=>n(E(t)),Sm=fe('<th class="sortable svelte-1ysbw61" title="Click to sort"> <span class="sort-indicator svelte-1ysbw61"><!></span></th>'),Fm=fe('<td class="svelte-1ysbw61"> </td>'),Nm=fe('<a class="issue svelte-1ysbw61" target="_blank">(?)</a>'),km=fe('<td class="svelte-1ysbw61"><!> <span> </span></td>'),Cm=(e,n,t,r)=>n(t.modelDefinitions[r()]),Am=ut('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'),Om=ut('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'),Im=fe('<tr class="definition-row svelte-1ysbw61"><td class="svelte-1ysbw61"><div class="definition-content svelte-1ysbw61"><div class="code-wrapper svelte-1ysbw61"><!></div> <button class="copy-btn svelte-1ysbw61" aria-label="Copy to clipboard" title="Copy code"><!></button></div></td></tr>'),Lm=fe('<tr class="svelte-1ysbw61"><!><!></tr> <!>',1),Pm=fe('<div class="table-scroll svelte-1ysbw61"><table class="svelte-1ysbw61"><thead><tr class="svelte-1ysbw61"><th class="svelte-1ysbw61">Model name \\ AD type</th><!></tr></thead><tbody></tbody></table></div>');function zm(e,n){_n(n,!0);const t=sn(()=>[...n.data.keys()]),r=sn(()=>n.data.size>0?[...n.data.get(E(t)[0]).keys()]:[]);let o=pe(Le({column:null,direction:null})),s=pe(null),a=pe(!1);function c(T){navigator.clipboard.writeText(T),Y(a,!0),setTimeout(()=>{Y(a,!1)},2e3)}function l(T){E(o).column!==T?Y(o,{column:T,direction:"asc"},!0):E(o).direction==="asc"?Y(o,{column:T,direction:"desc"},!0):Y(o,{column:null,direction:null},!0)}const u=sn(()=>{const T=Ot(n.data);if(!E(o).column||!E(o).direction)return T;const P=E(o).column,L=E(o).direction;return[...T].sort(([,S],[,v])=>{const y=S.get(P),V=v.get(P),M=typeof y=="number",O=typeof V=="number";return!M&&!O?0:M?O?L==="asc"?y-V:V-y:-1:1})});var g=Pm(),_=j(g),f=j(_),h=j(f),b=ie(j(h));Mn(b,17,()=>E(r),xn,(T,P)=>{var L=Sm();L.__click=[Tm,l,P];var S=j(L),v=ie(S),y=j(v);{var V=M=>{var O=Xn(),Z=an(O);{var ne=Q=>{var Ee=At("▲");G(Q,Ee)},te=Q=>{var Ee=At("▼");G(Q,Ee)};Ue(Z,Q=>{E(o).direction==="asc"?Q(ne):Q(te,!1)})}G(M,O)};Ue(y,M=>{E(o).column===E(P)&&M(V)})}he(()=>ze(S,`${E(P)??""} `)),G(T,L)});var N=ie(f);Mn(N,21,()=>E(u),xn,(T,P)=>{let L=()=>E(P)[0],S=()=>E(P)[1];var v=Lm(),y=an(v),V=j(y);_m(V,{get name(){return L()},onToggle:()=>Y(s,E(s)===L()?null:L(),!0)});var M=ie(V);Mn(M,17,()=>Ot(S()),xn,(ne,te)=>{let Q=()=>E(te)[0],Ee=()=>E(te)[1];var de=Xn();const me=sn(()=>Rm(L(),Q())??Ee());var Re=an(de);{var Be=Te=>{var ae=Fm(),Se=j(ae);he((pn,nn)=>{Wt(ae,pn),ze(Se,nn)},[()=>Em(E(me),S(),n.theme),()=>E(me).toFixed(3)]),G(Te,ae)},De=Te=>{var ae=km(),Se=j(ae);{var pn=hn=>{var kn=Nm();he(dt=>Jn(kn,"href",dt),[()=>Fr(L(),Q())]),G(hn,kn)};Ue(Se,hn=>{Fr(L(),Q())&&hn(pn)})}var nn=ie(Se,2),ft=j(nn);he(()=>{Zt(nn,1,ao(E(me)==="NaN"?"nan":E(me)),"svelte-1ysbw61"),ze(ft,E(me))}),G(Te,ae)};Ue(Re,Te=>{typeof E(me)=="number"?Te(Be):Te(De,!1)})}G(ne,de)});var O=ie(y,2);{var Z=ne=>{var te=Im(),Q=j(te),Ee=j(Q),de=j(Ee),me=j(de);ym(me,{language:wm,get code(){return n.modelDefinitions[L()]}});var Re=ie(de,2);Re.__click=[Cm,c,n,L];var Be=j(Re);{var De=ae=>{var Se=Am();G(ae,Se)},Te=ae=>{var Se=Om();G(ae,Se)};Ue(Be,ae=>{E(a)?ae(De):ae(Te,!1)})}he(()=>{Jn(Q,"colspan",E(r).length+1),Re.disabled=E(a)}),G(ne,te)};Ue(O,ne=>{E(s)===L()&&ne(Z)})}G(T,v)}),G(e,g),mn()}ct(["click"]);var Vm=fe('<div class="legend svelte-16tge8n"><div class="gradient-section svelte-16tge8n"><span class="label svelte-16tge8n">Faster</span> <div class="gradient-bar svelte-16tge8n"></div> <span class="label svelte-16tge8n">Slower</span></div> <div class="status-labels svelte-16tge8n"><span class="status error svelte-16tge8n">error</span> <span class="status wrong svelte-16tge8n">wrong</span> <span class="status nan svelte-16tge8n">NaN</span></div></div>');function jm(e,n){_n(n,!0);const t=sn(()=>()=>`linear-gradient(to right, ${Dm(n.theme).join(", ")})`);var r=Vm(),o=j(r),s=ie(j(o),2);he(a=>Wt(s,`background: ${a??""}`),[()=>E(t)()]),G(e,r),mn()}function Bm(e,n){Y(n,E(n)==="light"?"dark":"light",!0),document.documentElement.setAttribute("data-theme",E(n)),localStorage.setItem("theme",E(n))}var qm=ut('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'),$m=ut('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'),Um=fe("<h3> </h3> <!>",1),Hm=fe('<p class="no-results svelte-1gnljy6"> </p>'),Gm=fe(`<div id="main-wrapper" class="svelte-1gnljy6"><main class="svelte-1gnljy6"><div class="header svelte-1gnljy6"><h1>Turing AD tests</h1> <button class="theme-toggle svelte-1gnljy6" aria-label="Toggle Dark Mode" title="Toggle theme"><!></button></div> <p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p> <p>This page is intended as a brief overview of how different AD
            backends perform on a variety of Turing.jl models. Note that the
            inclusion of any AD backend here does not imply an endorsement from
            the Turing team; this table is purely for information.</p> <p>The scope of this table is limited to Turing models. It does not
            purport to show which AD backend is better for tasks that do not
            involve Turing models. If you are interested in more general
            comparisons of AD backends, you may wish to check out something like <a href="https://github.com/gradbench/gradbench" target="_blank">GradBench</a>.</p> <ul class="notes svelte-1gnljy6"><li>You can click on the model names to see their definitions.</li> <li>The definitions of the AD types can be found in <a href="https://github.com/TuringLang/ADTests/blob/main/main.jl" target="_blank">the source code</a>.</li> <li><b>Numbers</b> indicate the time taken to calculate the gradient
                of the log density of the model using the specified AD type,
                divided by the time taken to calculate the log density itself
                (in AD speak, the primal). Basically: <b>smaller means faster.</b></li> <li>'<span class="wrong svelte-1gnljy6">wrong</span>' means that AD ran but the
                result was not correct. If this happens you should be very wary!
                Note that this is done by comparing against the result obtained
                using FiniteDifferences, i.e., FiniteDifferences is by
                definition always 'correct'.</li> <li>'<span class="error svelte-1gnljy6">error</span>' means that AD didn't run.</li> <li>Some of the 'wrong' or 'error' entries have question marks next
                to them. These will link to a GitHub issue or other page that
                describes the problem.</li></ul> <div class="warning svelte-1gnljy6"><b>Note: The results here are run with Julia 1.11.</b></div> <h2>Results</h2> <p><a href="adtests.json" target="_blank" download="">Download the raw data (JSON)</a></p> <div class="controls svelte-1gnljy6"><input type="search" class="search-input svelte-1gnljy6" placeholder="Filter models..."> <!></div> <!> <h2>Manifest</h2> <p>The tests above were run with the following package versions:</p> <!></main></div>`);function Km(e,n){_n(n,!0);const t=typeof document<"u"&&(localStorage.getItem("theme")||document.documentElement.getAttribute("data-theme"))||"light";typeof document<"u"&&document.documentElement.setAttribute("data-theme",t);let r=pe(Le(t)),o=new Map;for(const[v,y]of Object.entries(Oa)){let V=y.__category__;delete y.__category__;let M=new Map;for(const[O,Z]of Object.entries(y))M.set(O,Z);o.has(V)||o.set(V,new Map),o.get(V).set(v,M)}let s=new Map([...o.entries()].sort()),a=pe("");const c=sn(()=>{const v=E(a).trim().toLowerCase();if(!v)return s;const y=new Map;for(const[V,M]of s){const O=new Map;for(const[Z,ne]of M)Z.toLowerCase().includes(v)&&O.set(Z,ne);O.size>0&&y.set(V,O)}return y});var l=Gm(),u=j(l),g=j(u),_=ie(j(g),2);_.__click=[Bm,r];var f=j(_);{var h=v=>{var y=qm();G(v,y)},b=v=>{var y=$m();G(v,y)};Ue(f,v=>{E(r)==="dark"?v(h):v(b,!1)})}var N=ie(g,16),T=j(N),P=ie(T,2);jm(P,{get theme(){return E(r)}});var L=ie(N,2);Mn(L,17,()=>E(c).entries(),xn,(v,y)=>{let V=()=>E(y)[0],M=()=>E(y)[1];var O=Um(),Z=an(O),ne=j(Z),te=ie(Z,2);zm(te,{get data(){return M()},modelDefinitions:Ol,get theme(){return E(r)}}),he(()=>ze(ne,V())),G(v,O)},v=>{var y=Hm(),V=j(y);he(()=>ze(V,`No models match "${E(a)??""}".`)),G(v,y)});var S=ie(L,6);fm(S,{}),Mi(T,()=>E(a),v=>Y(a,v)),G(e,l),mn()}ct(["click"]);ui(Km,{target:document.getElementById("app")});
