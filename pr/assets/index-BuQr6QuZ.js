(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const _r=!1;var rt=Array.isArray,os=Array.prototype.indexOf,Lt=Array.from,ss=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,Cr=Object.getOwnPropertyDescriptors,is=Object.prototype,as=Array.prototype,Bt=Object.getPrototypeOf,mr=Object.isExtensible;function En(e){return typeof e=="function"}function ls(e){return e()}function Tt(e){for(var n=0;n<e.length;n++)e[n]()}const Ee=2,Ar=4,ot=8,zt=16,qe=32,mn=64,Kn=128,he=256,Gn=512,ue=1024,Ae=2048,Je=4096,Be=8192,st=16384,cs=32768,qt=65536,us=1<<17,fs=1<<19,Pr=1<<20,kt=1<<21,nn=Symbol("$state"),Or=Symbol("legacy props"),ds=Symbol("");function Ir(e){return e===this.v}function _s(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Vt(e){return!_s(e,this.v)}function ms(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ps(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function vs(e){throw new Error("https://svelte.dev/e/effect_orphan")}function gs(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function hs(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function bs(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ys(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ws(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ds(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Cn=!1,Es=!1;function xs(){Cn=!0}const jt=1,$t=2,Lr=4,Rs=8,Ms=16,Fs=1,Ns=2,Br=4,Ts=8,ks=16,Ss=1,Cs=2,_e=Symbol(),As="http://www.w3.org/1999/xhtml",Ps="@attach";function zr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let G=null;function pr(e){G=e}function pn(e,n=!1,t){var r=G={p:G,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};Cn&&!n&&(G.l={s:null,u:null,r1:[],r2:fn(!1)}),qs(()=>{r.d=!0})}function vn(e){const n=G;if(n!==null){const a=n.e;if(a!==null){var t=j,r=$;n.e=null;try{for(var o=0;o<a.length;o++){var s=a[o];We(s.effect),Pe(s.reaction),Kt(s.fn)}}finally{We(t),Pe(r)}}G=n.p,n.m=!0}return{}}function An(){return!Cn||G!==null&&G.l===null}function Le(e){if(typeof e!="object"||e===null||nn in e)return e;const n=Bt(e);if(n!==is&&n!==as)return e;var t=new Map,r=rt(e),o=ge(0),s=$,a=c=>{var l=$;Pe(s);var u=c();return Pe(l),u};return r&&t.set("length",ge(e.length)),new Proxy(e,{defineProperty(c,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&ys();var p=t.get(l);return p===void 0?(p=a(()=>ge(u.value)),t.set(l,p)):Z(p,a(()=>Le(u.value))),!0},deleteProperty(c,l){var u=t.get(l);if(u===void 0)l in c&&(t.set(l,a(()=>ge(_e))),Et(o));else{if(r&&typeof l=="string"){var p=t.get("length"),_=Number(l);Number.isInteger(_)&&_<p.v&&Z(p,_)}Z(u,_e),Et(o)}return!0},get(c,l,u){var h;if(l===nn)return e;var p=t.get(l),_=l in c;if(p===void 0&&(!_||(h=Xe(c,l))!=null&&h.writable)&&(p=a(()=>ge(Le(_?c[l]:_e))),t.set(l,p)),p!==void 0){var f=E(p);return f===_e?void 0:f}return Reflect.get(c,l,u)},getOwnPropertyDescriptor(c,l){var u=Reflect.getOwnPropertyDescriptor(c,l);if(u&&"value"in u){var p=t.get(l);p&&(u.value=E(p))}else if(u===void 0){var _=t.get(l),f=_==null?void 0:_.v;if(_!==void 0&&f!==_e)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return u},has(c,l){var f;if(l===nn)return!0;var u=t.get(l),p=u!==void 0&&u.v!==_e||Reflect.has(c,l);if(u!==void 0||j!==null&&(!p||(f=Xe(c,l))!=null&&f.writable)){u===void 0&&(u=a(()=>ge(p?Le(c[l]):_e)),t.set(l,u));var _=E(u);if(_===_e)return!1}return p},set(c,l,u,p){var L;var _=t.get(l),f=l in c;if(r&&l==="length")for(var h=u;h<_.v;h+=1){var b=t.get(h+"");b!==void 0?Z(b,_e):h in c&&(b=a(()=>ge(_e)),t.set(h+"",b))}_===void 0?(!f||(L=Xe(c,l))!=null&&L.writable)&&(_=a(()=>ge(void 0)),Z(_,a(()=>Le(u))),t.set(l,_)):(f=_.v!==_e,Z(_,a(()=>Le(u))));var M=Reflect.getOwnPropertyDescriptor(c,l);if(M!=null&&M.set&&M.set.call(p,u),!f){if(r&&typeof l=="string"){var k=t.get("length"),B=Number(l);Number.isInteger(B)&&B>=k.v&&Z(k,B+1)}Et(o)}return!0},ownKeys(c){E(o);var l=Reflect.ownKeys(c).filter(_=>{var f=t.get(_);return f===void 0||f.v!==_e});for(var[u,p]of t)p.v!==_e&&!(u in c)&&l.push(u);return l},setPrototypeOf(){ws()}})}function Et(e,n=1){Z(e,e.v+n)}function un(e){var n=Ee|Ae,t=$!==null&&($.f&Ee)!==0?$:null;return j===null||t!==null&&(t.f&he)!==0?n|=he:j.f|=Pr,{ctx:G,deps:null,effects:null,equals:Ir,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??j}}function ln(e){const n=un(e);return eo(n),n}function Ut(e){const n=un(e);return n.equals=Vt,n}function qr(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)ze(n[t])}}function Os(e){for(var n=e.parent;n!==null;){if((n.f&Ee)===0)return n;n=n.parent}return null}function Vr(e){var n,t=j;We(Os(e));try{qr(e),n=oo(e)}finally{We(t)}return n}function jr(e){var n=Vr(e),t=(Ke||(e.f&he)!==0)&&e.deps!==null?Je:ue;ye(e,t),e.equals(n)||(e.v=n,e.wv=to())}const Tn=new Map;function fn(e,n){var t={f:0,v:e,reactions:null,equals:Ir,rv:0,wv:0};return t}function ge(e,n){const t=fn(e);return eo(t),t}function Ht(e,n=!1){var r;const t=fn(e);return n||(t.equals=Vt),Cn&&G!==null&&G.l!==null&&((r=G.l).s??(r.s=[])).push(t),t}function Z(e,n,t=!1){$!==null&&!ke&&An()&&($.f&(Ee|zt))!==0&&!(ce!=null&&ce.includes(e))&&Ds();let r=t?Le(n):n;return St(e,r)}function St(e,n){if(!e.equals(n)){var t=e.v;Pn?Tn.set(e,n):Tn.set(e,t),e.v=n,(e.f&Ee)!==0&&((e.f&Ae)!==0&&Vr(e),ye(e,(e.f&he)===0?ue:Je)),e.wv=to(),$r(e,Ae),An()&&j!==null&&(j.f&ue)!==0&&(j.f&(qe|mn))===0&&(be===null?Gs([e]):be.push(e))}return n}function vr(e,n=1){var t=E(e),r=n===1?t++:t--;return Z(e,t),r}function $r(e,n){var t=e.reactions;if(t!==null)for(var r=An(),o=t.length,s=0;s<o;s++){var a=t[s],c=a.f;(c&Ae)===0&&(!r&&a===j||(ye(a,n),(c&(ue|he))!==0&&((c&Ee)!==0?$r(a,Je):dt(a))))}}let Is=!1;var gr,Ur,Hr,Kr;function Ls(){if(gr===void 0){gr=window,Ur=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Hr=Xe(n,"firstChild").get,Kr=Xe(n,"nextSibling").get,mr(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),mr(t)&&(t.__t=void 0)}}function it(e=""){return document.createTextNode(e)}function Se(e){return Hr.call(e)}function at(e){return Kr.call(e)}function z(e,n){return Se(e)}function cn(e,n){{var t=Se(e);return t instanceof Comment&&t.data===""?at(t):t}}function re(e,n=1,t=!1){let r=e;for(;n--;)r=at(r);return r}function Bs(e){e.textContent=""}function Gr(e){j===null&&$===null&&vs(),$!==null&&($.f&he)!==0&&j===null&&ps(),Pn&&ms()}function zs(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function gn(e,n,t,r=!0){var o=j,s={ctx:G,deps:null,nodes_start:null,nodes_end:null,f:e|Ae,first:null,fn:n,last:null,next:null,parent:o,prev:null,teardown:null,transitions:null,wv:0};if(t)try{ft(s),s.f|=cs}catch(l){throw ze(s),l}else n!==null&&dt(s);var a=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(Pr|Kn))===0;if(!a&&r&&(o!==null&&zs(s,o),$!==null&&($.f&Ee)!==0)){var c=$;(c.effects??(c.effects=[])).push(s)}return s}function qs(e){const n=gn(ot,null,!1);return ye(n,ue),n.teardown=e,n}function hr(e){Gr();var n=j!==null&&(j.f&qe)!==0&&G!==null&&!G.m;if(n){var t=G;(t.e??(t.e=[])).push({fn:e,effect:j,reaction:$})}else{var r=Kt(e);return r}}function Vs(e){return Gr(),lt(e)}function js(e){const n=gn(mn,e,!0);return(t={})=>new Promise(r=>{t.outro?Xn(n,()=>{ze(n),r(void 0)}):(ze(n),r(void 0))})}function Kt(e){return gn(Ar,e,!1)}function $s(e,n){var t=G,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=lt(()=>{e(),!r.ran&&(r.ran=!0,Z(t.l.r2,!0),kn(n))})}function Us(){var e=G;lt(()=>{if(E(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&ue)!==0&&ye(t,Je),hn(t)&&ft(t),n.ran=!1}e.l.r2.v=!1}})}function lt(e){return gn(ot,e,!0)}function me(e,n=[],t=un){const r=n.map(t);return ct(()=>e(...r.map(E)))}function ct(e,n=0){return gn(ot|zt|n,e,!0)}function dn(e,n=!0){return gn(ot|qe,e,!0,n)}function Xr(e){var n=e.teardown;if(n!==null){const t=Pn,r=$;br(!0),Pe(null);try{n.call(null)}finally{br(t),Pe(r)}}}function Wr(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&mn)!==0?t.parent=null:ze(t,n),t=r}}function Hs(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&qe)===0&&ze(n),n=t}}function ze(e,n=!0){var t=!1;(n||(e.f&fs)!==0)&&e.nodes_start!==null&&(Jr(e.nodes_start,e.nodes_end),t=!0),Wr(e,n&&!t),Qn(e,0),ye(e,st);var r=e.transitions;if(r!==null)for(const s of r)s.stop();Xr(e);var o=e.parent;o!==null&&o.first!==null&&Yr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Jr(e,n){for(;e!==null;){var t=e===n?null:at(e);e.remove(),e=t}}function Yr(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function Xn(e,n){var t=[];Gt(e,t,!0),Zr(t,()=>{ze(e),n&&n()})}function Zr(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var o of e)o.out(r)}else n()}function Gt(e,n,t){if((e.f&Be)===0){if(e.f^=Be,e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&n.push(a);for(var r=e.first;r!==null;){var o=r.next,s=(r.f&qt)!==0||(r.f&qe)!==0;Gt(r,n,s?t:!1),r=o}}}function Wn(e){Qr(e,!0)}function Qr(e,n){if((e.f&Be)!==0){e.f^=Be,(e.f&ue)===0&&(e.f^=ue),hn(e)&&(ye(e,Ae),dt(e));for(var t=e.first;t!==null;){var r=t.next,o=(t.f&qt)!==0||(t.f&qe)!==0;Qr(t,o?n:!1),t=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&s.in()}}let Jn=[];function Ks(){var e=Jn;Jn=[],Tt(e)}function Xt(e){Jn.length===0&&queueMicrotask(Ks),Jn.push(e)}let Un=!1,Ct=!1,Yn=null,tn=!1,Pn=!1;function br(e){Pn=e}let Hn=[];let $=null,ke=!1;function Pe(e){$=e}let j=null;function We(e){j=e}let ce=null;function eo(e){$!==null&&$.f&kt&&(ce===null?ce=[e]:ce.push(e))}let le=null,ve=0,be=null;function Gs(e){be=e}let no=1,Zn=0,Ke=!1;function to(){return++no}function hn(e){var _;var n=e.f;if((n&Ae)!==0)return!0;if((n&Je)!==0){var t=e.deps,r=(n&he)!==0;if(t!==null){var o,s,a=(n&Gn)!==0,c=r&&j!==null&&!Ke,l=t.length;if(a||c){var u=e,p=u.parent;for(o=0;o<l;o++)s=t[o],(a||!((_=s==null?void 0:s.reactions)!=null&&_.includes(u)))&&(s.reactions??(s.reactions=[])).push(u);a&&(u.f^=Gn),c&&p!==null&&(p.f&he)===0&&(u.f^=he)}for(o=0;o<l;o++)if(s=t[o],hn(s)&&jr(s),s.wv>e.wv)return!0}(!r||j!==null&&!Ke)&&ye(e,ue)}return!1}function Xs(e,n){for(var t=n;t!==null;){if((t.f&Kn)!==0)try{t.fn(e);return}catch{t.f^=Kn}t=t.parent}throw Un=!1,e}function yr(e){return(e.f&st)===0&&(e.parent===null||(e.parent.f&Kn)===0)}function ut(e,n,t,r){if(Un){if(t===null&&(Un=!1),yr(n))throw e;return}if(t!==null&&(Un=!0),Xs(e,n),yr(n))throw e}function ro(e,n,t=!0){var r=e.reactions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];ce!=null&&ce.includes(e)||((s.f&Ee)!==0?ro(s,n,!1):n===s&&(t?ye(s,Ae):(s.f&ue)!==0&&ye(s,Je),dt(s)))}}function oo(e){var h;var n=le,t=ve,r=be,o=$,s=Ke,a=ce,c=G,l=ke,u=e.f;le=null,ve=0,be=null,Ke=(u&he)!==0&&(ke||!tn||$===null),$=(u&(qe|mn))===0?e:null,ce=null,pr(e.ctx),ke=!1,Zn++,e.f|=kt;try{var p=(0,e.fn)(),_=e.deps;if(le!==null){var f;if(Qn(e,ve),_!==null&&ve>0)for(_.length=ve+le.length,f=0;f<le.length;f++)_[ve+f]=le[f];else e.deps=_=le;if(!Ke)for(f=ve;f<_.length;f++)((h=_[f]).reactions??(h.reactions=[])).push(e)}else _!==null&&ve<_.length&&(Qn(e,ve),_.length=ve);if(An()&&be!==null&&!ke&&_!==null&&(e.f&(Ee|Je|Ae))===0)for(f=0;f<be.length;f++)ro(be[f],e);return o!==null&&o!==e&&(Zn++,be!==null&&(r===null?r=be:r.push(...be))),p}finally{le=n,ve=t,be=r,$=o,Ke=s,ce=a,pr(c),ke=l,e.f^=kt}}function Ws(e,n){let t=n.reactions;if(t!==null){var r=os.call(t,e);if(r!==-1){var o=t.length-1;o===0?t=n.reactions=null:(t[r]=t[o],t.pop())}}t===null&&(n.f&Ee)!==0&&(le===null||!le.includes(n))&&(ye(n,Je),(n.f&(he|Gn))===0&&(n.f^=Gn),qr(n),Qn(n,0))}function Qn(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Ws(e,t[r])}function ft(e){var n=e.f;if((n&st)===0){ye(e,ue);var t=j,r=G,o=tn;j=e,tn=!0;try{(n&zt)!==0?Hs(e):Wr(e),Xr(e);var s=oo(e);e.teardown=typeof s=="function"?s:null,e.wv=no;var a=e.deps,c;_r&&Es&&e.f&Ae}catch(l){ut(l,e,t,r||e.ctx)}finally{tn=o,j=t}}}function Js(){try{gs()}catch(e){if(Yn!==null)ut(e,Yn,null);else throw e}}function Ys(){var e=tn;try{var n=0;for(tn=!0;Hn.length>0;){n++>1e3&&Js();var t=Hn,r=t.length;Hn=[];for(var o=0;o<r;o++){var s=Qs(t[o]);Zs(s)}Tn.clear()}}finally{Ct=!1,tn=e,Yn=null}}function Zs(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(st|Be))===0)try{hn(r)&&(ft(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Yr(r):r.fn=null))}catch(o){ut(o,r,null,r.ctx)}}}function dt(e){Ct||(Ct=!0,queueMicrotask(Ys));for(var n=Yn=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(mn|qe))!==0){if((t&ue)===0)return;n.f^=ue}}Hn.push(n)}function Qs(e){for(var n=[],t=e;t!==null;){var r=t.f,o=(r&(qe|mn))!==0,s=o&&(r&ue)!==0;if(!s&&(r&Be)===0){if((r&Ar)!==0)n.push(t);else if(o)t.f^=ue;else try{hn(t)&&ft(t)}catch(l){ut(l,t,null,t.ctx)}var a=t.first;if(a!==null){t=a;continue}}var c=t.parent;for(t=t.next;t===null&&c!==null;)t=c.next,c=c.parent}return n}function E(e){var n=e.f,t=(n&Ee)!==0;if($!==null&&!ke){if(!(ce!=null&&ce.includes(e))){var r=$.deps;e.rv<Zn&&(e.rv=Zn,le===null&&r!==null&&r[ve]===e?ve++:le===null?le=[e]:(!Ke||!le.includes(e))&&le.push(e))}}else if(t&&e.deps===null&&e.effects===null){var o=e,s=o.parent;s!==null&&(s.f&he)===0&&(o.f^=he)}return t&&(o=e,hn(o)&&jr(o)),Pn&&Tn.has(e)?Tn.get(e):e.v}function kn(e){var n=ke;try{return ke=!0,e()}finally{ke=n}}const ei=-7169;function ye(e,n){e.f=e.f&ei|n}function At(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(nn in e)Pt(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&nn in t&&Pt(t)}}}function Pt(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{Pt(e[r],n)}catch{}const t=Bt(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=Cr(t);for(let o in r){const s=r[o].get;if(s)try{s.call(e)}catch{}}}}}function ni(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ti=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ri(e){return ti.includes(e)}const oi={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function si(e){return e=e.toLowerCase(),oi[e]??e}const ii=["touchstart","touchmove"];function ai(e){return ii.includes(e)}function li(e,n){if(n){const t=document.body;e.autofocus=!0,Xt(()=>{document.activeElement===t&&e.focus()})}}let wr=!1;function ci(){wr||(wr=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var n;if(!e.defaultPrevented)for(const t of e.target.elements)(n=t.__on_r)==null||n.call(t)})},{capture:!0}))}function so(e){var n=$,t=j;Pe(null),We(null);try{return e()}finally{Pe(n),We(t)}}function ui(e,n,t,r=t){e.addEventListener(n,()=>so(t));const o=e.__on_r;o?e.__on_r=()=>{o(),r(!0)}:e.__on_r=()=>r(!0),ci()}const io=new Set,Ot=new Set;function fi(e,n,t,r={}){function o(s){if(r.capture||Rn.call(n,s),!s.cancelBubble)return so(()=>t==null?void 0:t.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Xt(()=>{n.addEventListener(e,o,r)}):n.addEventListener(e,o,r),o}function _t(e){for(var n=0;n<e.length;n++)io.add(e[n]);for(var t of Ot)t(e)}function Rn(e){var L;var n=this,t=n.ownerDocument,r=e.type,o=((L=e.composedPath)==null?void 0:L.call(e))||[],s=o[0]||e.target,a=0,c=e.__root;if(c){var l=o.indexOf(c);if(l!==-1&&(n===document||n===window)){e.__root=n;return}var u=o.indexOf(n);if(u===-1)return;l<=u&&(a=l)}if(s=o[a]||e.target,s!==n){ss(e,"currentTarget",{configurable:!0,get(){return s||t}});var p=$,_=j;Pe(null),We(null);try{for(var f,h=[];s!==null;){var b=s.assignedSlot||s.parentNode||s.host||null;try{var M=s["__"+r];if(M!=null&&(!s.disabled||e.target===s))if(rt(M)){var[k,...B]=M;k.apply(s,[e,...B])}else M.call(s,e)}catch(T){f?h.push(T):f=T}if(e.cancelBubble||b===n||b===null)break;s=b}if(f){for(let T of h)queueMicrotask(()=>{throw T});throw f}}finally{e.__root=n,delete e.currentTarget,Pe(p),We(_)}}}function Wt(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function _n(e,n){var t=j;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function fe(e,n){var t=(n&Ss)!==0,r=(n&Cs)!==0,o,s=!e.startsWith("<!>");return()=>{o===void 0&&(o=Wt(s?e:"<!>"+e),t||(o=Se(o)));var a=r||Ur?document.importNode(o,!0):o.cloneNode(!0);if(t){var c=Se(a),l=a.lastChild;_n(c,l)}else _n(a,a);return a}}function mt(e,n,t="svg"){var r=!e.startsWith("<!>"),o=`<${t}>${r?e:"<!>"+e}</${t}>`,s;return()=>{if(!s){var a=Wt(o),c=Se(a);s=Se(c)}var l=s.cloneNode(!0);return _n(l,l),l}}function It(e=""){{var n=it(e+"");return _n(n,n),n}}function et(){var e=document.createDocumentFragment(),n=document.createComment(""),t=it();return e.append(n,t),_n(n,t),e}function K(e,n){e!==null&&e.before(n)}function Ce(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function di(e,n){return _i(e,n)}const an=new Map;function _i(e,{target:n,anchor:t,props:r={},events:o,context:s,intro:a=!0}){Ls();var c=new Set,l=_=>{for(var f=0;f<_.length;f++){var h=_[f];if(!c.has(h)){c.add(h);var b=ai(h);n.addEventListener(h,Rn,{passive:b});var M=an.get(h);M===void 0?(document.addEventListener(h,Rn,{passive:b}),an.set(h,1)):an.set(h,M+1)}}};l(Lt(io)),Ot.add(l);var u=void 0,p=js(()=>{var _=t??n.appendChild(it());return dn(()=>{if(s){pn({});var f=G;f.c=s}o&&(r.$$events=o),u=e(_,r)||{},s&&vn()}),()=>{var b;for(var f of c){n.removeEventListener(f,Rn);var h=an.get(f);--h===0?(document.removeEventListener(f,Rn),an.delete(f)):an.set(f,h)}Ot.delete(l),_!==t&&((b=_.parentNode)==null||b.removeChild(_))}});return mi.set(u,p),u}let mi=new WeakMap;function Ue(e,n,[t,r]=[0,0]){var o=e,s=null,a=null,c=_e,l=t>0?qt:0,u=!1;const p=(f,h=!0)=>{u=!0,_(h,f)},_=(f,h)=>{c!==(c=f)&&(c?(s?Wn(s):h&&(s=dn(()=>h(o))),a&&Xn(a,()=>{a=null})):(a?Wn(a):h&&(a=dn(()=>h(o,[t+1,r]))),s&&Xn(s,()=>{s=null})))};ct(()=>{u=!1,n(p),u||_(null,null)},l)}function Fn(e,n){return n}function pi(e,n,t,r){for(var o=[],s=n.length,a=0;a<s;a++)Gt(n[a].e,o,!0);var c=s>0&&o.length===0&&t!==null;if(c){var l=t.parentNode;Bs(l),l.append(t),r.clear(),He(e,n[0].prev,n[s-1].next)}Zr(o,()=>{for(var u=0;u<s;u++){var p=n[u];c||(r.delete(p.k),He(e,p.prev,p.next)),ze(p.e,!c)}})}function Nn(e,n,t,r,o,s=null){var a=e,c={flags:n,items:new Map,first:null},l=(n&Lr)!==0;if(l){var u=e;a=u.appendChild(it())}var p=null,_=!1,f=Ut(()=>{var h=t();return rt(h)?h:h==null?[]:Lt(h)});ct(()=>{var h=E(f),b=h.length;_&&b===0||(_=b===0,vi(h,c,a,o,n,r,t),s!==null&&(b===0?p?Wn(p):p=dn(()=>s(a)):p!==null&&Xn(p,()=>{p=null})),E(f))})}function vi(e,n,t,r,o,s,a){var de,xe,Ve,Re;var c=(o&Rs)!==0,l=(o&(jt|$t))!==0,u=e.length,p=n.items,_=n.first,f=_,h,b=null,M,k=[],B=[],L,T,v,y;if(c)for(y=0;y<u;y+=1)L=e[y],T=s(L,y),v=p.get(T),v!==void 0&&((de=v.a)==null||de.measure(),(M??(M=new Set)).add(v));for(y=0;y<u;y+=1){if(L=e[y],T=s(L,y),v=p.get(T),v===void 0){var q=f?f.e.nodes_start:t;b=hi(q,n,b,b===null?n.first:b.next,L,T,y,r,o,a),p.set(T,b),k=[],B=[],f=b.next;continue}if(l&&gi(v,L,y,o),(v.e.f&Be)!==0&&(Wn(v.e),c&&((xe=v.a)==null||xe.unfix(),(M??(M=new Set)).delete(v))),v!==f){if(h!==void 0&&h.has(v)){if(k.length<B.length){var F=B[0],O;b=F.prev;var X=k[0],oe=k[k.length-1];for(O=0;O<k.length;O+=1)Dr(k[O],F,t);for(O=0;O<B.length;O+=1)h.delete(B[O]);He(n,X.prev,oe.next),He(n,b,X),He(n,oe,F),f=F,b=oe,y-=1,k=[],B=[]}else h.delete(v),Dr(v,f,t),He(n,v.prev,v.next),He(n,v,b===null?n.first:b.next),He(n,b,v),b=v;continue}for(k=[],B=[];f!==null&&f.k!==T;)(f.e.f&Be)===0&&(h??(h=new Set)).add(f),B.push(f),f=f.next;if(f===null)continue;v=f}k.push(v),b=v,f=v.next}if(f!==null||h!==void 0){for(var Q=h===void 0?[]:Lt(h);f!==null;)(f.e.f&Be)===0&&Q.push(f),f=f.next;var we=Q.length;if(we>0){var Oe=(o&Lr)!==0&&u===0?t:null;if(c){for(y=0;y<we;y+=1)(Ve=Q[y].a)==null||Ve.measure();for(y=0;y<we;y+=1)(Re=Q[y].a)==null||Re.fix()}pi(n,Q,Oe,p)}}c&&Xt(()=>{var se;if(M!==void 0)for(v of M)(se=v.a)==null||se.apply()}),j.first=n.first&&n.first.e,j.last=b&&b.e}function gi(e,n,t,r){(r&jt)!==0&&St(e.v,n),(r&$t)!==0?St(e.i,t):e.i=t}function hi(e,n,t,r,o,s,a,c,l,u){var p=(l&jt)!==0,_=(l&Ms)===0,f=p?_?Ht(o):fn(o):o,h=(l&$t)===0?a:fn(a),b={i:h,v:f,k:s,a:null,e:null,prev:t,next:r};try{return b.e=dn(()=>c(e,f,h,u),Is),b.e.prev=t&&t.e,b.e.next=r&&r.e,t===null?n.first=b:(t.next=b,t.e.next=b.e),r!==null&&(r.prev=b,r.e.prev=b.e),b}finally{}}function Dr(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,o=n?n.e.nodes_start:t,s=e.e.nodes_start;s!==r;){var a=at(s);o.before(s),s=a}}function He(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function bi(e,n,t=!1,r=!1,o=!1){var s=e,a="";me(()=>{var c=j;if(a!==(a=n()??"")&&(c.nodes_start!==null&&(Jr(c.nodes_start,c.nodes_end),c.nodes_start=c.nodes_end=null),a!=="")){var l=a+"";t?l=`<svg>${l}</svg>`:r&&(l=`<math>${l}</math>`);var u=Wt(l);if((t||r)&&(u=Se(u)),_n(Se(u),u.lastChild),t||r)for(;Se(u);)s.before(Se(u));else s.before(u)}})}function yi(e,n,t,r,o){var c;var s=(c=n.$$slots)==null?void 0:c[t],a=!1;s===!0&&(s=n.children,a=!0),s===void 0?o!==null&&o(e):s(e,a?()=>r:r)}function wi(e,n){var t=void 0,r;ct(()=>{t!==(t=n())&&(r&&(ze(r),r=null),t&&(r=dn(()=>{Kt(()=>t(e))})))})}function ao(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(n=0;n<o;n++)e[n]&&(t=ao(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Di(){for(var e,n,t=0,r="",o=arguments.length;t<o;t++)(e=arguments[t])&&(n=ao(e))&&(r&&(r+=" "),r+=n);return r}function lo(e){return typeof e=="object"?Di(e):e??""}const Er=[...` 	
\r\f \v\uFEFF`];function Ei(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var o in t)if(t[o])r=r?r+" "+o:o;else if(r.length)for(var s=o.length,a=0;(a=r.indexOf(o,a))>=0;){var c=a+s;(a===0||Er.includes(r[a-1]))&&(c===r.length||Er.includes(r[c]))?r=(a===0?"":r.substring(0,a))+r.substring(c+1):a=c}}return r===""?null:r}function xr(e,n=!1){var t=n?" !important;":";",r="";for(var o in e){var s=e[o];s!=null&&s!==""&&(r+=" "+o+": "+s+t)}return r}function xt(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function xi(e,n){if(n){var t="",r,o;if(Array.isArray(n)?(r=n[0],o=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,a=0,c=!1,l=[];r&&l.push(...Object.keys(r).map(xt)),o&&l.push(...Object.keys(o).map(xt));var u=0,p=-1;const M=e.length;for(var _=0;_<M;_++){var f=e[_];if(c?f==="/"&&e[_-1]==="*"&&(c=!1):s?s===f&&(s=!1):f==="/"&&e[_+1]==="*"?c=!0:f==='"'||f==="'"?s=f:f==="("?a++:f===")"&&a--,!c&&s===!1&&a===0){if(f===":"&&p===-1)p=_;else if(f===";"||_===M-1){if(p!==-1){var h=xt(e.substring(u,p).trim());if(!l.includes(h)){f!==";"&&_++;var b=e.substring(u,_).trim();t+=" "+b+";"}}u=_+1,p=-1}}}}return r&&(t+=xr(r)),o&&(t+=xr(o,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Sn(e,n,t,r,o,s){var a=e.__className;if(a!==t||a===void 0){var c=Ei(t,r,s);c==null?e.removeAttribute("class"):n?e.className=c:e.setAttribute("class",c),e.__className=t}else if(s&&o!==s)for(var l in s){var u=!!s[l];(o==null||u!==!!o[l])&&e.classList.toggle(l,u)}return s}function Rt(e,n={},t,r){for(var o in t){var s=t[o];n[o]!==s&&(t[o]==null?e.style.removeProperty(o):e.style.setProperty(o,s,r))}}function Jt(e,n,t,r){var o=e.__style;if(o!==n){var s=xi(n,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=n}else r&&(Array.isArray(r)?(Rt(e,t==null?void 0:t[0],r[0]),Rt(e,t==null?void 0:t[1],r[1],"important")):Rt(e,t,r));return r}const Mn=Symbol("class"),xn=Symbol("style"),co=Symbol("is custom element"),uo=Symbol("is html");function Ri(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function nt(e,n,t,r){var o=fo(e);o[n]!==(o[n]=t)&&(n==="loading"&&(e[ds]=t),t==null?e.removeAttribute(n):typeof t!="string"&&_o(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function Mi(e,n,t,r,o=!1){var s=fo(e),a=s[co],c=!s[uo],l=n||{},u=e.tagName==="OPTION";for(var p in n)p in t||(t[p]=null);t.class?t.class=lo(t.class):t.class=null,t[xn]&&(t.style??(t.style=null));var _=_o(e);for(const T in t){let v=t[T];if(u&&T==="value"&&v==null){e.value=e.__value="",l[T]=v;continue}if(T==="class"){var f=e.namespaceURI==="http://www.w3.org/1999/xhtml";Sn(e,f,v,r,n==null?void 0:n[Mn],t[Mn]),l[T]=v,l[Mn]=t[Mn];continue}if(T==="style"){Jt(e,v,n==null?void 0:n[xn],t[xn]),l[T]=v,l[xn]=t[xn];continue}var h=l[T];if(v!==h){l[T]=v;var b=T[0]+T[1];if(b!=="$$")if(b==="on"){const y={},q="$$"+T;let F=T.slice(2);var M=ri(F);if(ni(F)&&(F=F.slice(0,-7),y.capture=!0),!M&&h){if(v!=null)continue;e.removeEventListener(F,l[q],y),l[q]=null}if(v!=null)if(M)e[`__${F}`]=v,_t([F]);else{let O=function(X){l[T].call(this,X)};var L=O;l[q]=fi(F,e,O,y)}else M&&(e[`__${F}`]=void 0)}else if(T==="style")nt(e,T,v);else if(T==="autofocus")li(e,!!v);else if(!a&&(T==="__value"||T==="value"&&v!=null))e.value=e.__value=v;else if(T==="selected"&&u)Ri(e,v);else{var k=T;c||(k=si(k));var B=k==="defaultValue"||k==="defaultChecked";if(v==null&&!a&&!B)if(s[T]=null,k==="value"||k==="checked"){let y=e;const q=n===void 0;if(k==="value"){let F=y.defaultValue;y.removeAttribute(k),y.defaultValue=F,y.value=y.__value=q?F:null}else{let F=y.defaultChecked;y.removeAttribute(k),y.defaultChecked=F,y.checked=q?F:!1}}else e.removeAttribute(T);else B||_.includes(k)&&(a||typeof v!="string")?e[k]=v:typeof v!="function"&&nt(e,k,v)}}}for(let T of Object.getOwnPropertySymbols(t))T.description===Ps&&wi(e,()=>t[T]);return l}function fo(e){return e.__attributes??(e.__attributes={[co]:e.nodeName.includes("-"),[uo]:e.namespaceURI===As})}var Rr=new Map;function _o(e){var n=Rr.get(e.nodeName);if(n)return n;Rr.set(e.nodeName,n=[]);for(var t,r=e,o=Element.prototype;o!==r;){t=Cr(r);for(var s in t)t[s].set&&n.push(s);r=Bt(r)}return n}function Fi(e,n,t=n){var r=An();ui(e,"input",o=>{var s=o?e.defaultValue:e.value;if(s=Mt(e)?Ft(s):s,t(s),r&&s!==(s=n())){var a=e.selectionStart,c=e.selectionEnd;e.value=s??"",c!==null&&(e.selectionStart=a,e.selectionEnd=Math.min(c,e.value.length))}}),kn(n)==null&&e.value&&t(Mt(e)?Ft(e.value):e.value),lt(()=>{var o=n();Mt(e)&&o===Ft(e.value)||e.type==="date"&&!o&&!e.value||o!==e.value&&(e.value=o??"")})}function Mt(e){var n=e.type;return n==="number"||n==="range"}function Ft(e){return e===""?null:+e}function mo(e=!1){const n=G,t=n.l.u;if(!t)return;let r=()=>At(n.s);if(e){let o=0,s={};const a=un(()=>{let c=!1;const l=n.s;for(const u in l)l[u]!==s[u]&&(s[u]=l[u],c=!0);return c&&o++,o});r=()=>E(a)}t.b.length&&Vs(()=>{Mr(n,r),Tt(t.b)}),hr(()=>{const o=kn(()=>t.m.map(ls));return()=>{for(const s of o)typeof s=="function"&&s()}}),t.a.length&&hr(()=>{Mr(n,r),Tt(t.a)})}function Mr(e,n){if(e.l.s)for(const t of e.l.s)E(t);n()}let $n=!1;function Ni(e){var n=$n;try{return $n=!1,[e(),$n]}finally{$n=n}}const Ti={get(e,n){if(!e.exclude.includes(n))return E(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=Ge({get[n](){return e.props[n]}},n,Br)),e.special[n](t),vr(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),vr(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function tt(e,n){return new Proxy({props:e,exclude:n,special:{},version:fn(0)},Ti)}const ki={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(En(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let o=e.props[r];En(o)&&(o=o());const s=Xe(o,n);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(En(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const o=Xe(r,n);return o&&!o.configurable&&(o.configurable=!0),o}}},has(e,n){if(n===nn||n===Or)return!1;for(let t of e.props)if(En(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(En(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function Si(...e){return new Proxy({props:e},ki)}function Fr(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function Ge(e,n,t,r){var q;var o=(t&Fs)!==0,s=!Cn||(t&Ns)!==0,a=(t&Ts)!==0,c=(t&ks)!==0,l=!1,u;a?[u,l]=Ni(()=>e[n]):u=e[n];var p=nn in e||Or in e,_=a&&(((q=Xe(e,n))==null?void 0:q.set)??(p&&n in e&&(F=>e[n]=F)))||void 0,f=r,h=!0,b=!1,M=()=>(b=!0,h&&(h=!1,c?f=kn(r):f=r),f);u===void 0&&r!==void 0&&(_&&s&&bs(),u=M(),_&&_(u));var k;if(s)k=()=>{var F=e[n];return F===void 0?M():(h=!0,b=!1,F)};else{var B=(o?un:Ut)(()=>e[n]);B.f|=us,k=()=>{var F=E(B);return F!==void 0&&(f=void 0),F===void 0?f:F}}if((t&Br)===0)return k;if(_){var L=e.$$legacy;return function(F,O){return arguments.length>0?((!s||!O||L||l)&&_(O?k():F),F):k()}}var T=!1,v=Ht(u),y=un(()=>{var F=k(),O=E(v);return T?(T=!1,O):v.v=F});return a&&E(y),o||(y.equals=Vt),function(F,O){if(arguments.length>0){const X=O?E(y):s&&a?Le(F):F;if(!y.equals(X)){if(T=!0,Z(v,X),b&&f!==void 0&&(f=X),Fr(y))return F;kn(()=>E(y))}return F}return Fr(y)?y.v:E(y)}}function Ci(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function Ai(){const e=G;return e===null&&zr(),(n,t,r)=>{var s;const o=(s=e.s.$$events)==null?void 0:s[n];if(o){const a=rt(o)?o.slice():[o],c=Ci(n,t,r);for(const l of a)l.call(e.x,c);return!c.defaultPrevented}return!0}}function Pi(e){G===null&&zr(),G.l===null&&hs(),Oi(G).a.push(e)}function Oi(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Ii="5";var Sr;typeof window<"u"&&((Sr=window.__svelte??(window.__svelte={})).v??(Sr.v=new Set)).add(Ii);const Li={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:203.99039336268697,FiniteDifferences:95.4749675927548,ForwardDiff:2.375570976296452,MooncakeFwd:21.973713033954,MooncakeRvs:7.06412101217843,ReverseDiff:"error",ReverseDiffCompiled:"error"},Bi={__category__:"Distributions",EnzymeFwd:2.885829179850078,EnzymeRvs:1.2475372854975668,FiniteDifferences:42.32316357263183,ForwardDiff:2.2128665304235957,MooncakeFwd:5.337701960307324,MooncakeRvs:3.2720138106665364,ReverseDiff:68.82098432496208,ReverseDiffCompiled:5.613689355214779},zi={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:"error",FiniteDifferences:62.732736796814024,ForwardDiff:1.1497903782112275,MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:"error",ReverseDiffCompiled:"error"},qi={__category__:"DynamicPPL demo models",EnzymeFwd:4.2523344188636,EnzymeRvs:1.7010163180790636,FiniteDifferences:100.14218301189986,ForwardDiff:3.5584881350960424,MooncakeFwd:11.041614757908645,MooncakeRvs:6.13860488972474,ReverseDiff:195.62986258289467,ReverseDiffCompiled:18.176618778860952},Vi={__category__:"DynamicPPL demo models",EnzymeFwd:3.1577752097436,EnzymeRvs:1.4282338373375907,FiniteDifferences:86.31013234367342,ForwardDiff:3.6958927065247815,MooncakeFwd:10.081422197796327,MooncakeRvs:5.9260127190891385,ReverseDiff:155.7337777314863,ReverseDiffCompiled:14.22058509578435},ji={__category__:"DynamicPPL demo models",EnzymeFwd:8.78601830018834,EnzymeRvs:18.615062471878996,FiniteDifferences:97.52047459586258,ForwardDiff:1.9602519797165883,MooncakeFwd:14.076624511618343,MooncakeRvs:4.709604243413506,ReverseDiff:90.71955155427212,ReverseDiffCompiled:8.285090551152324},$i={__category__:"DynamicPPL demo models",EnzymeFwd:9.867221753398969,EnzymeRvs:18.16710780165849,FiniteDifferences:82.50303410755389,ForwardDiff:1.4736934966891309,MooncakeFwd:16.09103481996298,MooncakeRvs:6.64811495377807,ReverseDiff:59.263032501244574,ReverseDiffCompiled:5.883804347826087},Ui={__category__:"DynamicPPL demo models",EnzymeFwd:11.537732218451529,EnzymeRvs:18.667383292383292,FiniteDifferences:107.69921955226947,ForwardDiff:1.3166472164029905,MooncakeFwd:17.73054587688734,MooncakeRvs:6.737945935447848,ReverseDiff:65.34231475811389,ReverseDiffCompiled:5.326974114389015},Hi={__category__:"DynamicPPL demo models",EnzymeFwd:10.780792841454991,EnzymeRvs:18.210581574112265,FiniteDifferences:86.62589977377115,ForwardDiff:1.4565742186081971,MooncakeFwd:15.883051610626362,MooncakeRvs:6.091118102613747,ReverseDiff:67.50991471589512,ReverseDiffCompiled:6.483220724833521},Ki={__category__:"DynamicPPL demo models",EnzymeFwd:4.371572534265382,EnzymeRvs:1.490359888609079,FiniteDifferences:100.54405104748999,ForwardDiff:2.434672695009602,MooncakeFwd:11.701480893160548,MooncakeRvs:5.869599329620539,ReverseDiff:209.10869490653405,ReverseDiffCompiled:19.654606319385138},Gi={__category__:"DynamicPPL demo models",EnzymeFwd:6.639722433781839,EnzymeRvs:10.507296413939143,FiniteDifferences:87.22941620805007,ForwardDiff:1.4054139559754033,MooncakeFwd:14.886542040948449,MooncakeRvs:4.290688831667844,ReverseDiff:72.21684771469565,ReverseDiffCompiled:8.243174071359602},Xi={__category__:"DynamicPPL demo models",EnzymeFwd:9.36580876086586,EnzymeRvs:16.077611940298507,FiniteDifferences:81.88214587916738,ForwardDiff:1.4337646466824816,MooncakeFwd:15.246744937893483,MooncakeRvs:5.951235655398632,ReverseDiff:65.63688469318947,ReverseDiffCompiled:6.493841505926099},Wi={__category__:"Distributions",EnzymeFwd:6.150589690994111,EnzymeRvs:9.769632282054813,FiniteDifferences:31.830001033271337,ForwardDiff:1.2127840538452017,MooncakeFwd:4.404417191846931,MooncakeRvs:6.168570285256959,ReverseDiff:22.041433075379764,ReverseDiffCompiled:3.7486924189583717},Ji={__category__:"DynamicPPL demo models",EnzymeFwd:6.985891917742707,EnzymeRvs:12.506397890634844,FiniteDifferences:82.2536869118905,ForwardDiff:1.3780739707752363,MooncakeFwd:13.589713058298894,MooncakeRvs:5.357146946018661,ReverseDiff:56.3099978122949,ReverseDiffCompiled:7.203357784489859},Yi={__category__:"DynamicPPL demo models",EnzymeFwd:7.486575249703741,EnzymeRvs:8.798008110687023,FiniteDifferences:68.5482767410349,ForwardDiff:1.4681970349115254,MooncakeFwd:14.365541543480225,MooncakeRvs:5.449384386415911,ReverseDiff:77.90862276761258,ReverseDiffCompiled:7.992350885459615},Zi={__category__:"DynamicPPL demo models",EnzymeFwd:8.447681159420291,EnzymeRvs:16.21274301811985,FiniteDifferences:79.3211732291703,ForwardDiff:1.0361224198271552,MooncakeFwd:15.434027294248711,MooncakeRvs:6.077767099151049,ReverseDiff:57.522905126176035,ReverseDiffCompiled:5.726331769252002},Qi={__category__:"DynamicPPL demo models",EnzymeFwd:9.710401150785364,EnzymeRvs:16.882253713505207,FiniteDifferences:81.02914885347842,ForwardDiff:1.3713043173289376,MooncakeFwd:15.386443017878097,MooncakeRvs:6.199052039588398,ReverseDiff:67.31620111731844,ReverseDiffCompiled:6.166986132959669},ea={__category__:"Core Turing syntax",EnzymeFwd:4.520301553721302,EnzymeRvs:.9948468989579031,FiniteDifferences:177.49275115128773,ForwardDiff:2.1366863249598826,MooncakeFwd:23.38895777364469,MooncakeRvs:5.297313740592997,ReverseDiff:118.99004240359525,ReverseDiffCompiled:10.991630912821746},na={__category__:"Core Turing syntax",EnzymeFwd:19.905479473527457,EnzymeRvs:3.5420838838857995,FiniteDifferences:241.969412396029,ForwardDiff:7.292378176185645,MooncakeFwd:23.059853341710852,MooncakeRvs:23.75609710896961,ReverseDiff:921.1326348070534,ReverseDiffCompiled:77.83922387215954},ta={__category__:"DynamicPPL arXiV paper",EnzymeFwd:7.879801411026914,EnzymeRvs:7.009598976109214,FiniteDifferences:22.30981308411215,ForwardDiff:4.8623029772329245,MooncakeFwd:5.795948434622468,MooncakeRvs:38.47350107066381,ReverseDiff:909.2686577603691,ReverseDiffCompiled:117.50785942492013},ra={__category__:"DynamicPPL arXiV paper",EnzymeFwd:6.2844122458518346,EnzymeRvs:1.4227827450315693,FiniteDifferences:180.11788935444926,ForwardDiff:5.5389712168709035,MooncakeFwd:31.42995829138501,MooncakeRvs:6.55875385830163,ReverseDiff:87.30607866507748,ReverseDiffCompiled:7.213728439981807},oa={__category__:"DynamicPPL arXiV paper",EnzymeFwd:13618.48979363749,EnzymeRvs:5.910774638366906,FiniteDifferences:134172.25848489188,ForwardDiff:16437.11776539771,MooncakeFwd:34244.55036403478,MooncakeRvs:23.94134518858454,ReverseDiff:586.4037726838586,ReverseDiffCompiled:101.3940294073964},sa={__category__:"DynamicPPL arXiV paper",EnzymeFwd:74.05619469026549,EnzymeRvs:11.124418567003744,FiniteDifferences:"NaN",ForwardDiff:26.389112125321073,MooncakeFwd:5974.486042666144,MooncakeRvs:5.76698095160012,ReverseDiff:1493.0673000049624,ReverseDiffCompiled:10.382752899390525},ia={__category__:"Distributions",EnzymeFwd:4.218440235459176,EnzymeRvs:19.48961093292428,FiniteDifferences:160.60951773953684,ForwardDiff:3.6446168409872786,MooncakeFwd:23.073536493086607,MooncakeRvs:4.8497374187041355,ReverseDiff:63.15389136673236,ReverseDiffCompiled:7.522490872769857},aa={__category__:"DynamicPPL arXiV paper",EnzymeFwd:133.09873337219778,EnzymeRvs:1.7025643340275585,FiniteDifferences:6866.29061281871,ForwardDiff:150.5294458026531,MooncakeFwd:465.98368545450955,MooncakeRvs:9.257219796922607,ReverseDiff:79.57791575833075,ReverseDiffCompiled:12.517591968953461},la={__category__:"DynamicPPL arXiV paper",EnzymeFwd:43.202734822084814,EnzymeRvs:3.871579422516243,FiniteDifferences:1042.4941152888389,ForwardDiff:62.928313513436905,MooncakeFwd:161.41480095720823,MooncakeRvs:4.063041915872139,ReverseDiff:57.06894375036487,ReverseDiffCompiled:11.137996197890734},ca={__category__:"DynamicPPL arXiV paper",EnzymeFwd:178.24557197182133,EnzymeRvs:.9531368768486389,FiniteDifferences:2893.1246639934807,ForwardDiff:147.61369456004329,MooncakeFwd:417.7536424727137,MooncakeRvs:4.306127833644463,ReverseDiff:144.8154921543545,ReverseDiffCompiled:28.433380549027888},ua={__category__:"DynamicPPL arXiV paper",EnzymeFwd:106.82715576238708,EnzymeRvs:4.62346356453029,FiniteDifferences:8957.906466894348,ForwardDiff:148.99673983916537,MooncakeFwd:1300.9044109528543,MooncakeRvs:4.861880267046076,ReverseDiff:202.36745060192004,ReverseDiffCompiled:22.27361203273612},fa={__category__:"Core Turing syntax",EnzymeFwd:3.429444426981541,EnzymeRvs:2.238772862848492,FiniteDifferences:78.30971487109443,ForwardDiff:1.5709769775678868,MooncakeFwd:9.206607112554845,MooncakeRvs:4.32068618627185,ReverseDiff:104.65380684721512,ReverseDiffCompiled:10.399329861703945},da={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:19.174856194373696,FiniteDifferences:255.54080707322603,ForwardDiff:3.7341934244645776,MooncakeFwd:50.846471113299884,MooncakeRvs:18.064867684994642,ReverseDiff:72.3026033889502,ReverseDiffCompiled:26.04797598843422},_a={__category__:"Core Turing syntax",EnzymeFwd:3.4463308290850554,EnzymeRvs:3.6893621552550315,FiniteDifferences:64.79703703703704,ForwardDiff:1.1906213857638523,MooncakeFwd:9.519331863659488,MooncakeRvs:3.6385047987876744,ReverseDiff:24.14824424839993,ReverseDiffCompiled:2.7225296133647823},ma={__category__:"Base Julia features",EnzymeFwd:5.1087775803961275,EnzymeRvs:17.73525831755477,FiniteDifferences:13.512758973634984,ForwardDiff:1.028170055452865,MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:"error",ReverseDiffCompiled:"error"},pa={__category__:"Effect of model size",EnzymeFwd:2.6171452026680346,EnzymeRvs:.8125750076102232,FiniteDifferences:250.39506426735218,ForwardDiff:3.842100395105915,MooncakeFwd:40.41450308275355,MooncakeRvs:6.047158220502901,ReverseDiff:121.35810465314471,ReverseDiffCompiled:11.747802088636673},va={__category__:"Effect of model size",EnzymeFwd:9.832064782956245,EnzymeRvs:.5823416484520464,FiniteDifferences:767.8513093427945,ForwardDiff:21.197470817120625,MooncakeFwd:171.1812070359887,MooncakeRvs:4.972414496498266,ReverseDiff:136.0486296993455,ReverseDiffCompiled:11.842198881924446},ga={__category__:"Distributions",EnzymeFwd:"error",EnzymeRvs:4.5567747600236705,FiniteDifferences:31.132030494524034,ForwardDiff:.7332262289917332,MooncakeFwd:16.67387068554159,MooncakeRvs:9.595250110512582,ReverseDiff:12.758753370196043,ReverseDiffCompiled:1.0009639364178797},ha={__category__:"Effect of model size",EnzymeFwd:21.02194436437014,EnzymeRvs:.6117678202347862,FiniteDifferences:1386.675194052695,ForwardDiff:44.76472366873845,MooncakeFwd:384.87082412914185,MooncakeRvs:5.556595426082222,ReverseDiff:139.5368141886292,ReverseDiffCompiled:12.581352217164053},ba={__category__:"Effect of model size",EnzymeFwd:151.25199556749246,EnzymeRvs:.8280330650110097,FiniteDifferences:7004.812921990236,ForwardDiff:185.0253978369665,MooncakeFwd:1882.7532712057819,MooncakeRvs:6.005311693102176,ReverseDiff:137.86089846196674,ReverseDiffCompiled:15.067418289488671},ya={__category__:"Distributions",EnzymeFwd:2.598901098901099,EnzymeRvs:1.8294669789712963,FiniteDifferences:34.423734195157905,ForwardDiff:1.8689023390819497,MooncakeFwd:4.5636129864162855,MooncakeRvs:3.6850905475125115,ReverseDiff:67.22208992459036,ReverseDiffCompiled:7.408543441435691},wa={__category__:"Distributions",EnzymeFwd:1.8905783328808035,EnzymeRvs:6.796903318116781,FiniteDifferences:20.994285318463618,ForwardDiff:1.2267369128380359,MooncakeFwd:4.3527938438871905,MooncakeRvs:7.275611302938482,ReverseDiff:26.117661816357252,ReverseDiffCompiled:4.028398396269199},Da={__category__:"Core Turing syntax",EnzymeFwd:18.589549490981135,EnzymeRvs:3.7330089793164065,FiniteDifferences:250.86342811431896,ForwardDiff:7.451860469024334,MooncakeFwd:22.693316825674266,MooncakeRvs:22.163931872904342,ReverseDiff:907.7171396223661,ReverseDiffCompiled:78.76280699693116},Ea={__category__:"Core Turing syntax",EnzymeFwd:40.44267345244365,EnzymeRvs:6.553647202284674,FiniteDifferences:545.5158429945001,ForwardDiff:9.243201701160153,MooncakeFwd:43.323120160192374,MooncakeRvs:29.061890638944885,ReverseDiff:1249.2077820229238,ReverseDiffCompiled:113.78033901015431},xa={__category__:"Core Turing syntax",EnzymeFwd:3.553513850847693,EnzymeRvs:12.899925300904822,FiniteDifferences:81.19958355304968,ForwardDiff:1.6895489831269648,MooncakeFwd:13.159810320462029,MooncakeRvs:5.671295182792743,ReverseDiff:100.77729641914304,ReverseDiffCompiled:9.057590002413354},Ra={__category__:"Core Turing syntax",EnzymeFwd:35.33452101237519,EnzymeRvs:6.92576194647245,FiniteDifferences:540.3070494992622,ForwardDiff:11.434916919939033,MooncakeFwd:46.286763857768904,MooncakeRvs:29.056858253161444,ReverseDiff:1116.0528823249167,ReverseDiffCompiled:98.14561298882536},Ma={__category__:"Distributions",EnzymeFwd:"error",EnzymeRvs:"error",FiniteDifferences:29.502107824656402,ForwardDiff:"NaN",MooncakeFwd:4.9785056294779935,MooncakeRvs:3.6274539414074294,ReverseDiff:"NaN",ReverseDiffCompiled:5.47490230134607},Fa={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:66.6001960069859,FiniteDifferences:53.480640426951304,ForwardDiff:7.328097930154098,MooncakeFwd:"error",MooncakeRvs:55.370775341321256,ReverseDiff:"error",ReverseDiffCompiled:"error"},Na={__category__:"Distributions",EnzymeFwd:40.87779771070654,EnzymeRvs:7.200766787427266,FiniteDifferences:521.5430510639997,ForwardDiff:9.197437398492248,MooncakeFwd:41.48761970251213,MooncakeRvs:24.184346079708284,ReverseDiff:733.7265887662362,ReverseDiffCompiled:63.04636617608161},Ta={__category__:"PosteriorDB",EnzymeFwd:3.3937417241619627,EnzymeRvs:7.014661578630247,FiniteDifferences:62.45979373295926,ForwardDiff:4.110895481009149,MooncakeFwd:11.436363636363636,MooncakeRvs:17.610600016282667,ReverseDiff:605.2312520058482,ReverseDiffCompiled:80.71299312341658},ka={__category__:"PosteriorDB",EnzymeFwd:8.068181818181818,EnzymeRvs:13.232558139534884,FiniteDifferences:46.44494526722473,ForwardDiff:2.9234808702175545,MooncakeFwd:9.135904499540864,MooncakeRvs:45.64285714285714,ReverseDiff:646.6678095238095,ReverseDiffCompiled:72.93002315410342},Sa={__category__:"PosteriorDB",EnzymeFwd:3.0004268032437045,EnzymeRvs:3.78869286287089,FiniteDifferences:12.520917062477166,ForwardDiff:.7106144580122862,MooncakeFwd:8.190935795216113,MooncakeRvs:24.41558441558442,ReverseDiff:77.54857080075442,ReverseDiffCompiled:60.11229946524064},Ca={__category__:"PosteriorDB",EnzymeFwd:5.740695522254928,EnzymeRvs:2.916838396596424,FiniteDifferences:245.55964503195716,ForwardDiff:3.947714435983627,MooncakeFwd:32.67138713530114,MooncakeRvs:5.646662657847265,ReverseDiff:175.2710081144272,ReverseDiffCompiled:17.331057785133083},Aa={__category__:"PosteriorDB",EnzymeFwd:5.52852880236275,EnzymeRvs:2.8754372700236908,FiniteDifferences:256.15539018228986,ForwardDiff:6.313755352840293,MooncakeFwd:34.11831367439309,MooncakeRvs:5.758043515504539,ReverseDiff:207.32001940491594,ReverseDiffCompiled:18.484844613683823},Pa={__category__:"PosteriorDB",EnzymeFwd:1.4335037297890871,EnzymeRvs:1.8477609108159394,FiniteDifferences:51.765815176558974,ForwardDiff:2.3183727034120736,MooncakeFwd:7.020939038243089,MooncakeRvs:4.01979940564636,ReverseDiff:303.5801315789474,ReverseDiffCompiled:31.07778072736926},Oa={__category__:"PosteriorDB",EnzymeFwd:3.3144754316069056,EnzymeRvs:5.565525961577681,FiniteDifferences:14.26665138140548,ForwardDiff:.5884335357517565,MooncakeFwd:7.487034277198212,MooncakeRvs:14.358823758216968,ReverseDiff:220.95314760077986,ReverseDiffCompiled:55.153267267714774},Ia={__category__:"PosteriorDB",EnzymeFwd:30.974560613956136,EnzymeRvs:2.2144186046511627,FiniteDifferences:927.0566894815996,ForwardDiff:44.0795889771135,MooncakeFwd:172.3685606060606,MooncakeRvs:8.668814192343604,ReverseDiff:376.9181267773599,ReverseDiffCompiled:43.93250688705234},La={__category__:"PosteriorDB",EnzymeFwd:26.78992287917738,EnzymeRvs:2.376558030366006,FiniteDifferences:904.5792829231509,ForwardDiff:33.2936528167219,MooncakeFwd:127.39295986851116,MooncakeRvs:6.475956584461084,ReverseDiff:347.0484785972151,ReverseDiffCompiled:37.5571448218952},Ba={__category__:"PosteriorDB",EnzymeFwd:6.987122509198208,EnzymeRvs:3.2525382929223654,FiniteDifferences:47.05302949632627,ForwardDiff:10.123930099857345,MooncakeFwd:25.685561497326205,MooncakeRvs:11.413629668794139,ReverseDiff:69.75829304884147,ReverseDiffCompiled:10.18367384843982},za={__category__:"Core Turing syntax",EnzymeFwd:8.741544624455758,EnzymeRvs:1.8107900468079006,FiniteDifferences:258.1093455825954,ForwardDiff:3.5527780139871714,MooncakeFwd:22.47787512031657,MooncakeRvs:9.606369549443068,ReverseDiff:256.84203741769153,ReverseDiffCompiled:22.916184136869354},qa={__category__:"PosteriorDB",EnzymeFwd:6.5908161368284075,EnzymeRvs:3.101381405744511,FiniteDifferences:39.97646165527715,ForwardDiff:2.155903067924078,MooncakeFwd:26.43856767411301,MooncakeRvs:11.342814238745575,ReverseDiff:67.25699945874133,ReverseDiffCompiled:28.261201543883203},Va={__category__:"Distributions",EnzymeFwd:12.528014616321558,EnzymeRvs:12.01674183789001,FiniteDifferences:57.13285903938455,ForwardDiff:.9645841064783703,MooncakeFwd:23.93999348934785,MooncakeRvs:11.429964840648747,ReverseDiff:42.61827447711428,ReverseDiffCompiled:3.5968797314199192},ja={__category__:"Core Turing syntax",EnzymeFwd:4.623735544328119,EnzymeRvs:1.5740673537663539,FiniteDifferences:103.67798979520515,ForwardDiff:1.8325802445368036,MooncakeFwd:11.711144755738385,MooncakeRvs:6.437023440079234,ReverseDiff:209.95977385643312,ReverseDiffCompiled:18.541963822418516},$a={__category__:"Base Julia features",EnzymeFwd:4.1001645834772,EnzymeRvs:2.3396828919143533,FiniteDifferences:98.30094204382551,ForwardDiff:2.5909854376470864,MooncakeFwd:12.853112343872306,MooncakeRvs:5.133826798934633,ReverseDiff:94.51865721546075,ReverseDiffCompiled:"wrong"},Ua={abstractgps:Li,assume_beta:Bi,delaydiffeq:zi,demo_assume_dot_observe:qi,demo_assume_dot_observe_literal:Vi,demo_assume_index_observe:ji,demo_assume_matrix_observe_matrix_index:$i,demo_assume_multivariate_observe:Ui,demo_assume_multivariate_observe_literal:Hi,demo_assume_observe_literal:Ki,demo_assume_submodel_observe_index_literal:Gi,demo_dot_assume_observe:Xi,assume_dirichlet:Wi,demo_dot_assume_observe_index:Ji,demo_dot_assume_observe_index_literal:Yi,demo_dot_assume_observe_matrix_index:Zi,demo_dot_assume_observe_submodel:Qi,dot_assume:ea,dot_observe:na,dppl_gauss_unknown:ta,dppl_hier_poisson:ra,dppl_high_dim_gauss:oa,dppl_hmm_semisup:sa,assume_lkjcholu:ia,dppl_lda:aa,dppl_logistic_regression:la,dppl_naive_bayes:ca,dppl_sto_volatility:ua,dynamic_constraint:fa,lux_nn:da,multiple_constraints_same_var:_a,multithreaded:ma,n010:pa,n050:va,assume_mvnormal:ga,n100:ha,n500:ba,observe_bernoulli:ya,observe_categorical:wa,observe_index:Da,observe_literal:Ea,observe_multivariate:xa,observe_submodel:Ra,observe_von_mises:Ma,ordinarydiffeq:Fa,assume_normal:Na,pdb_arma11:Ta,pdb_earnings:ka,pdb_earnings_male:Sa,pdb_eightsch_centered:Ca,pdb_eightsch_noncentered:Aa,pdb_garch11:Pa,pdb_kidiq:Oa,pdb_radon:Ia,pdb_rats:La,pdb_sblrc:Ba,assume_submodel:za,pdb_sblri:qa,assume_wishart:Va,broadcast_macro:ja,control_flow:$a},Ha=`#=
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

model = abstractgps(distance, n, y)`,Ka=`@model function assume_beta()
    a ~ Beta(2, 2)
end

model = assume_beta()`,Ga=`#=
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

model = pdb_rats(N, Npts, rat, x, y, xbar)`,Kl=`# PosteriorDB: sblrc-blr
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

model = pdb_sblrc(X, y, D)`,Gl=`@model function inner1()
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

model = control_flow()`,Zl={abstractgps:Ha,assume_beta:Ka,delaydiffeq:Ga,demo_assume_dot_observe:Xa,demo_assume_dot_observe_literal:Wa,demo_assume_index_observe:Ja,demo_assume_matrix_observe_matrix_index:Ya,demo_assume_multivariate_observe:Za,demo_assume_multivariate_observe_literal:Qa,demo_assume_observe_literal:el,demo_assume_submodel_observe_index_literal:nl,demo_dot_assume_observe:tl,assume_dirichlet:rl,demo_dot_assume_observe_index:ol,demo_dot_assume_observe_index_literal:sl,demo_dot_assume_observe_matrix_index:il,demo_dot_assume_observe_submodel:al,dot_assume:ll,dot_observe:cl,dppl_gauss_unknown:ul,dppl_hier_poisson:fl,dppl_high_dim_gauss:dl,dppl_hmm_semisup:_l,assume_lkjcholu:ml,dppl_lda:pl,dppl_logistic_regression:vl,dppl_naive_bayes:gl,dppl_sto_volatility:hl,dynamic_constraint:bl,lux_nn:yl,multiple_constraints_same_var:wl,multithreaded:Dl,n010:El,n050:xl,assume_mvnormal:Rl,n100:Ml,n500:Fl,observe_bernoulli:Nl,observe_categorical:Tl,observe_index:kl,observe_literal:Sl,observe_multivariate:Cl,observe_submodel:Al,observe_von_mises:Pl,ordinarydiffeq:Ol,assume_normal:Il,pdb_arma11:Ll,pdb_earnings:Bl,pdb_earnings_male:zl,pdb_eightsch_centered:ql,pdb_eightsch_noncentered:Vl,pdb_garch11:jl,pdb_kidiq:$l,pdb_radon:Ul,pdb_rats:Hl,pdb_sblrc:Kl,assume_submodel:Gl,pdb_sblri:Xl,assume_wishart:Wl,broadcast_macro:Jl,control_flow:Yl};xs();const Ql="1.22.0",ec="1.5.0",nc="0.5.24",tc="5.15.1",rc="0.14.2",oc="0.4.5",sc="0.1.44",ic="4.5.2",ac="0.8.3",lc="0.8.10",cc="0.7.2",uc="0.6.2",fc="1.1.3",dc="2.5.0",_c="1.1.2",mc="0.4.0",pc="7.24.0",vc="1.11.0",gc="1.1.3",hc="1.1.0",bc="0.4.8",yc="0.4.9",wc="1.11.0",Dc="0.15.22",Ec="0.1.6",xc="1.12.1",Rc="0.5.0",Mc="0.2.7",Fc="0.3.14",Nc="1.73.0",Tc="1.26.1",kc="1.3.1",Sc="0.1.10",Cc="0.1.13",Ac="0.2.6",Pc="0.3.1",Oc="1.0.0",Ic="4.18.1",Lc="1.1.1+0",Bc="0.1.2",zc="0.2.3",qc="0.1.2",Vc="1.6.0",jc="0.3.1",$c="4.1.1",Uc="1.16.0",Hc="0.19.4",Kc="1.0.0",Gc="1.11.0",Xc="5.74.1",Wc="1.9.1",Jc="0.4.0",Yc="6.218.0",Zc="4.16.0",Qc="5.30.0",eu="1.1.0",nu="1.15.1",tu="0.7.16",ru="0.4.28",ou="0.10.12",su="1.11.0",iu="0.25.125",au="0.6.58",lu="0.9.5",cu="1.6.0",uu="0.40.24",fu="2.0.0",du="1.0.7",_u="0.13.138",mu="0.8.19",pu="0.0.256+0",vu="1.30.0",gu="0.1.10",hu="1.1.4",bu="0.10.14",yu="0.3.1",wu="1.3.2",Du="0.3.2",Eu="1.1.0",xu="1.3.1",Ru="1.11.0",Mu="1.16.0",Fu="2.30.0",Nu="0.12.33",Tu="1.3.3",ku="0.1.2",Su="1.1.3",Cu="1.8.0",Au="0.5.2",Pu="1.11.0",Ou="0.2.0",Iu="1.9.1",Lu="0.5.6",Bu="1.14.0",zu="0.2.0",qu="0.3.28",Vu="0.4.15",ju="0.1.1",$u="0.1.5",Uu="0.3.1",Hu="0.1.3",Ku="2025.2.0+0",Gu="1.11.0",Xu="0.16.2",Wu="0.7.14",Ju="0.1.17",Yu="0.2.6",Zu="1.10.0",Qu="1.0.0",ef="1.7.1",nf="1.14.3",tf="0.2.1",rf="0.9.41",of="0.6.11",sf="0.10.67",af="0.10.6",lf="9.7.0",cf="0.0.42+0",uf="1.4.0",ff="0.1.17",df="1.11.0",_f="0.2.1",mf="0.6.4",pf="8.6.0+0",vf="1.11.0",gf="1.7.2+0",hf="1.11.0+1",bf="0.13.1+0",yf="1.11.0",wf="0.9.17",Df="0.1.8",Ef="7.6.1",xf="1.11.0",Rf="3.75.0",Mf="2.2.0",Ff="1.13.1",Nf="0.3.29",Tf="1.11.0",kf="1.2.0",Sf="1.31.4",Cf="1.5.3",Af="1.15.9",Pf="7.7.0",Of="0.3.17",If="2025.2.0+0",Lf="1.17.8",Bf="1.12.1",zf="0.5.16",qf="0.1.8",Vf="0.4.3",jf="1.11.0",$f="0.1.4",Uf="2.28.6+0",Hf="1.2.0",Kf="2.1.0",Gf="1.11.0",Xf="0.5.24",Wf="0.3.7",Jf="2023.12.12",Yf="0.2.4",Zf="8.0.0",Qf="0.9.34",ed="1.1.3",nd="1.0.0",td="1.2.0",rd="4.19.0",od="2.25.0",sd="2.1.1",id="1.13.1",ad="1.7.1",ld="0.5.0",cd="1.17.0",ud="0.3.27+1",fd="0.8.5+0",dd="0.5.6+0",_d="2.0.1",md="0.4.7",pd="5.5.1",vd="5.1.1",gd="0.4.13",hd="1.8.1",bd="6.111.0",yd="1.11.0",wd="1.26.0",Dd="3.33.1",Ed="1.14.0",xd="2.9.0",Rd="1.12.0",Md="1.15.0",Fd="1.18.0",Nd="1.26.0",Td="1.10.0",kd="1.11.0",Sd="1.12.0",Cd="1.14.0",Ad="1.12.0",Pd="1.13.0",Od="1.15.0",Id="1.28.0",Ld="1.11.0",Bd="1.14.0",zd="1.10.0",qd="1.10.0",Vd="1.12.0",jd="1.31.1",$d="1.14.0",Ud="1.14.0",Hd="1.14.0",Kd="1.11.1",Gd="1.13.0",Xd="1.12.0",Wd="1.14.0",Jd="0.11.37",Yd="2.8.3",Zd="1.11.0",Qd="0.4.7",e1="0.7.19",n1="0.2.2",t1="0.2.4",r1="0.6.0",o1="1.2.0",s1="1.2.1",i1="1.5.2",a1="3.3.2",l1="0.5.7",c1="1.11.0",u1="0.1.6",f1="1.11.0",d1="1.4.0",_1="2.11.3",m1="1.11.0",p1="1.11.0",v1="1.7.1",g1="1.6.0",h1="0.3.2",b1="0.4.5",y1="0.1.19",w1="0.1.0",D1="1.3.4",E1="3.54.0",x1="1.2.2",R1="1.3.1",M1="1.2.0",F1="1.16.2",N1="1.4.2",T1="0.9.0",k1="0.5.1+0",S1="3.0.0",C1="0.5.18",A1="0.7.0",P1="0.1.0",O1="0.6.1",I1="2.155.1",L1="0.1.13",B1="1.9.1",z1="1.17.0",q1="1.0.1",V1="7.103.0",j1="1.10.0",$1="3.1.0",U1="1.6.0",H1="1.3.0",K1="1.11.0",G1="1.1.2",X1="1.11.0",W1="2.11.1",J1="0.9.5",Y1="1.11.0",Z1="1.2.2",Q1="1.11.0",e_="1.2.1",n_="0.1.2",t_="0.4.27",r_="2.7.2",o_="1.3.1",s_="1.9.0",i_="1.9.18",a_="1.4.4",l_="3.5.0",c_="1.11.1",u_="1.8.0",f_="0.34.10",d_="1.5.2",__="0.5.8",m_="0.4.4",p_="0.7.3",v_="0.3.1",g_="1.11.0",h_="2.8.0",b_="1.11.0",y_=null,w_="7.7.0+0",D_="0.3.46",E_="1.0.3",x_="1.0.1",R_="1.12.1",M_="1.10.0",F_="0.1.1",N_="0.1.7",T_="1.11.0",k_="0.5.5",S_="0.5.29",C_="0.2.38",A_="0.1.6",P_="1.4.0",O_="0.43.7",I_="1.11.0",L_="1.11.0",B_="0.3.1",z_="1.3.3",q_="1.1.0",V_="0.10.1",j_="1.2.13+1",$_="0.7.10",U_="0.2.7",H_="5.11.0+0",K_="1.59.0+0",G_="2022.0.0+1",X_="17.4.0+2",W_={ADTypes:Ql,AbstractFFTs:ec,AbstractGPs:nc,AbstractMCMC:tc,AbstractPPL:rc,AbstractTrees:oc,Accessors:sc,Adapt:ic,AdvancedHMC:ac,AdvancedMH:lc,AdvancedPS:cc,AdvancedVI:uc,AliasTables:fc,ArgCheck:dc,ArgTools:_c,ArnoldiMethod:mc,ArrayInterface:pc,Artifacts:vc,Atomix:gc,AxisAlgorithms:hc,AxisArrays:bc,BangBang:yc,Base64:wc,Bijectors:Dc,BitTwiddlingConvenienceFunctions:Ec,BracketingNonlinearSolve:xc,CEnum:Rc,CPUSummary:Mc,Cassette:Fc,ChainRules:Nc,ChainRulesCore:Tc,Chairmarks:kc,ChangesOfVariables:Sc,CloseOpenIntervals:Cc,CommonSolve:Ac,CommonSubexpressions:Pc,CommonWorldInvalidations:Oc,Compat:Ic,CompilerSupportLibraries_jll:Lc,CompositionsBase:Bc,ConcreteStructs:zc,ConsoleProgressMonitor:qc,ConstructionBase:Vc,CpuId:jc,Crayons:$c,DataAPI:Uc,DataStructures:Hc,DataValueInterfaces:Kc,Dates:Gc,DelayDiffEq:Xc,DelimitedFiles:Wc,DensityInterface:Jc,DiffEqBase:Yc,DiffEqCallbacks:Zc,DiffEqNoiseProcess:Qc,DiffResults:eu,DiffRules:nu,DifferentiationInterface:tu,DispatchDoctor:ru,Distances:ou,Distributed:su,Distributions:iu,DistributionsAD:au,DocStringExtensions:lu,Downloads:cu,DynamicPPL:uu,EllipticalSliceSampling:fu,EnumX:du,Enzyme:_u,EnzymeCore:mu,Enzyme_jll:pu,ExponentialUtilities:vu,ExprTools:gu,ExpressionExplorer:hu,ExproniconLite:bu,FFTA:yu,FastBroadcast:wu,FastClosures:Du,FastGaussQuadrature:Eu,FastPower:xu,FileWatching:Ru,FillArrays:Mu,FiniteDiff:Fu,FiniteDifferences:Nu,ForwardDiff:Tu,FunctionProperties:ku,FunctionWrappers:Su,FunctionWrappersWrappers:Cu,Functors:Au,Future:Pu,GPUArraysCore:Ou,GPUCompiler:Iu,GenericSchur:Lu,Graphs:Bu,HashArrayMappedTries:zu,HypergeometricFunctions:qu,IRTools:Vu,IfElse:ju,Inflate:$u,InitialValues:Uu,IntegerMathUtils:Hu,IntelOpenMP_jll:Ku,InteractiveUtils:Gu,Interpolations:Xu,IntervalSets:Wu,InverseFunctions:Ju,IrrationalConstants:Yu,IterTools:Zu,IteratorInterfaceExtensions:Qu,JLLWrappers:ef,JSON:"1.5.0",JSON3:nf,Jieko:tf,KernelAbstractions:rf,KernelDensity:of,KernelFunctions:sf,Krylov:af,LLVM:lf,LLVMExtra_jll:cf,LaTeXStrings:uf,LayoutPointers:ff,LazyArtifacts:df,LeftChildRightSiblingTrees:_f,LibCURL:mf,LibCURL_jll:pf,LibGit2:vf,LibGit2_jll:gf,LibSSH2_jll:hf,LibTracyClient_jll:bf,Libdl:yf,Libtask:wf,LineSearch:Df,LineSearches:Ef,LinearAlgebra:xf,LinearSolve:Rf,LogDensityProblems:Mf,LogDensityProblemsAD:Ff,LogExpFunctions:Nf,Logging:Tf,LoggingExtras:kf,Lux:Sf,LuxCore:Cf,LuxLib:Af,MCMCChains:Pf,MCMCDiagnosticTools:Of,MKL_jll:If,MLDataDevices:Lf,MLJModelInterface:Bf,MacroTools:zf,ManualMemory:qf,MappedArrays:Vf,Markdown:jf,MaybeInplace:$f,MbedTLS_jll:Uf,Missings:Hf,MistyClosures:Kf,Mmap:Gf,Mooncake:Xf,Moshi:Wf,MozillaCACerts_jll:Jf,MuladdMacro:Yf,NLSolversBase:Zf,NNlib:Qf,NaNMath:ed,NaturalSort:nd,NetworkOptions:td,NonlinearSolve:rd,NonlinearSolveBase:od,NonlinearSolveFirstOrder:sd,NonlinearSolveQuasiNewton:id,NonlinearSolveSpectralMethods:ad,ObjectFile:ld,OffsetArrays:cd,OpenBLAS_jll:ud,OpenLibm_jll:fd,OpenSpecFun_jll:dd,Optim:_d,Optimisers:md,Optimization:pd,OptimizationBase:vd,OptimizationOptimJL:gd,OrderedCollections:hd,OrdinaryDiffEq:bd,OrdinaryDiffEqAdamsBashforthMoulton:yd,OrdinaryDiffEqBDF:wd,OrdinaryDiffEqCore:Dd,OrdinaryDiffEqDefault:Ed,OrdinaryDiffEqDifferentiation:xd,OrdinaryDiffEqExplicitRK:Rd,OrdinaryDiffEqExponentialRK:Md,OrdinaryDiffEqExtrapolation:Fd,OrdinaryDiffEqFIRK:Nd,OrdinaryDiffEqFeagin:Td,OrdinaryDiffEqFunctionMap:kd,OrdinaryDiffEqHighOrderRK:Sd,OrdinaryDiffEqIMEXMultistep:Cd,OrdinaryDiffEqLinear:Ad,OrdinaryDiffEqLowOrderRK:Pd,OrdinaryDiffEqLowStorageRK:Od,OrdinaryDiffEqNonlinearSolve:Id,OrdinaryDiffEqNordsieck:Ld,OrdinaryDiffEqPDIRK:Bd,OrdinaryDiffEqPRK:zd,OrdinaryDiffEqQPRK:qd,OrdinaryDiffEqRKN:Vd,OrdinaryDiffEqRosenbrock:jd,OrdinaryDiffEqSDIRK:$d,OrdinaryDiffEqSSPRK:Ud,OrdinaryDiffEqStabilizedIRK:Hd,OrdinaryDiffEqStabilizedRK:Kd,OrdinaryDiffEqSymplecticRK:Gd,OrdinaryDiffEqTsit5:Xd,OrdinaryDiffEqVerner:Wd,PDMats:Jd,Parsers:Yd,Pkg:Zd,PoissonRandom:Qd,Polyester:e1,PolyesterWeave:n1,PositiveFactorizations:t1,PosteriorDB:r1,PreallocationTools:o1,PrecompileTools:s1,Preferences:i1,PrettyTables:a1,Primes:l1,Printf:c1,ProgressLogging:u1,ProgressMeter:f1,PtrArrays:d1,QuadGK:_1,REPL:m1,Random:p1,Random123:v1,RandomNumbers:g1,RangeArrays:h1,Ratios:b1,ReactantCore:y1,RealDot:w1,RecipesBase:D1,RecursiveArrayTools:E1,Reexport:x1,Requires:R1,ResettableStacks:M1,ReverseDiff:F1,Richardson:N1,Rmath:T1,Rmath_jll:k1,Roots:S1,RuntimeGeneratedFunctions:C1,SHA:A1,SIMDTypes:P1,SSMProblems:O1,SciMLBase:I1,SciMLJacobianOperators:L1,SciMLLogging:B1,SciMLOperators:z1,SciMLPublic:q1,SciMLSensitivity:V1,SciMLStructures:j1,ScientificTypesBase:$1,ScopedValues:U1,Scratch:H1,Serialization:K1,Setfield:G1,SharedArrays:X1,SimpleNonlinearSolve:W1,SimpleTraits:J1,Sockets:Y1,SortingAlgorithms:Z1,SparseArrays:Q1,SparseConnectivityTracer:e_,SparseInverseSubset:n_,SparseMatrixColorings:t_,SpecialFunctions:r_,Static:o_,StaticArrayInterface:s_,StaticArrays:i_,StaticArraysCore:a_,StatisticalTraits:l_,Statistics:c_,StatsAPI:u_,StatsBase:f_,StatsFuns:d_,StrideArraysCore:__,StringManipulation:m_,StructArrays:p_,StructIO:v_,StructTypes:g_,StructUtils:h_,StyledStrings:b_,SuiteSparse:y_,SuiteSparse_jll:w_,SymbolicIndexingInterface:D_,TOML:E_,TableTraits:x_,Tables:R_,Tar:M_,TensorCore:F_,TerminalLoggers:N_,Test:T_,ThreadingUtilities:k_,TimerOutputs:S_,Tracker:C_,Tracy:A_,TruncatedStacktraces:P_,Turing:O_,UUIDs:I_,Unicode:L_,UnsafeAtomics:B_,WeightInitializers:z_,WoodburyMatrices:q_,ZipFile:V_,Zlib_jll:j_,Zygote:$_,ZygoteRules:U_,libblastrampoline_jll:H_,nghttp2_jll:K_,oneTBB_jll:G_,p7zip_jll:X_},Nr={FiniteDifferences:1,ForwardDiff:11,EnzymeFwd:12,MooncakeFwd:13,ReverseDiff:21,ReverseDiffCompiled:22,EnzymeRev:23,MooncakeRev:24};function po(e,n){return(Nr[e]??500)-(Nr[n]??500)||e.localeCompare(n)}function J_(e){const n=e.values().next().value;return n?[...n.results.keys()].sort(po):[]}function Y_(e){return[...e.entries()].sort(([n],[t])=>po(n,t))}function vo(e){return[...e.entries()].sort(([n],[t])=>n.localeCompare(t))}function Z_(e,n){const t=vo(e);if(!n.column||!n.direction)return t;const r=n.column,o=n.direction==="asc"?1:-1;return t.sort(([,s],[,a])=>{const c=s.results.get(r),l=a.results.get(r);return typeof c!="number"&&typeof l!="number"?0:typeof c!="number"?1:typeof l!="number"?-1:o*(c-l)})}var Q_=fe('<tr><td class="svelte-yinbl0"> </td><td class="version svelte-yinbl0"> </td></tr>'),e0=fe('<table class="svelte-yinbl0"><thead><tr><th class="svelte-yinbl0">Package</th><th class="svelte-yinbl0">Version</th></tr></thead><tbody></tbody></table>');function n0(e,n){pn(n,!1);let t=new Map;for(const[a,c]of Object.entries(W_))t.set(a,c===""?null:c);const r=vo(t);mo();var o=e0(),s=re(z(o));Nn(s,5,()=>r,Fn,(a,c,l)=>{let u=()=>E(c)[0],p=()=>E(c)[1];var _=Q_();Sn(_,1,"svelte-yinbl0",null,{},{alt:l%2===1});var f=z(_),h=z(f),b=re(f),M=z(b);me(()=>{Ce(h,u()),Ce(M,p()===null?"":`v${p()}`)}),K(a,_)}),K(e,o),vn()}var t0=fe('<td class="model-name svelte-73y89f"> </td>');function r0(e,n){var t=t0();t.__click=function(...o){var s;(s=n.onToggle)==null||s.apply(this,o)};var r=z(t);me(()=>Ce(r,n.name)),K(e,t)}_t(["click"]);function o0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nt,Tr;function s0(){if(Tr)return Nt;Tr=1;function e(i){return i instanceof Map?i.clear=i.delete=i.set=function(){throw new Error("map is read-only")}:i instanceof Set&&(i.add=i.clear=i.delete=function(){throw new Error("set is read-only")}),Object.freeze(i),Object.getOwnPropertyNames(i).forEach(d=>{const g=i[d],C=typeof g;(C==="object"||C==="function")&&!Object.isFrozen(g)&&e(g)}),i}class n{constructor(d){d.data===void 0&&(d.data={}),this.data=d.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(i,...d){const g=Object.create(null);for(const C in i)g[C]=i[C];return d.forEach(function(C){for(const W in C)g[W]=C[W]}),g}const o="</span>",s=i=>!!i.scope,a=(i,{prefix:d})=>{if(i.startsWith("language:"))return i.replace("language:","language-");if(i.includes(".")){const g=i.split(".");return[`${d}${g.shift()}`,...g.map((C,W)=>`${C}${"_".repeat(W+1)}`)].join(" ")}return`${d}${i}`};class c{constructor(d,g){this.buffer="",this.classPrefix=g.classPrefix,d.walk(this)}addText(d){this.buffer+=t(d)}openNode(d){if(!s(d))return;const g=a(d.scope,{prefix:this.classPrefix});this.span(g)}closeNode(d){s(d)&&(this.buffer+=o)}value(){return this.buffer}span(d){this.buffer+=`<span class="${d}">`}}const l=(i={})=>{const d={children:[]};return Object.assign(d,i),d};class u{constructor(){this.rootNode=l(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(d){this.top.children.push(d)}openNode(d){const g=l({scope:d});this.add(g),this.stack.push(g)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(d){return this.constructor._walk(d,this.rootNode)}static _walk(d,g){return typeof g=="string"?d.addText(g):g.children&&(d.openNode(g),g.children.forEach(C=>this._walk(d,C)),d.closeNode(g)),d}static _collapse(d){typeof d!="string"&&d.children&&(d.children.every(g=>typeof g=="string")?d.children=[d.children.join("")]:d.children.forEach(g=>{u._collapse(g)}))}}class p extends u{constructor(d){super(),this.options=d}addText(d){d!==""&&this.add(d)}startScope(d){this.openNode(d)}endScope(){this.closeNode()}__addSublanguage(d,g){const C=d.root;g&&(C.scope=`language:${g}`),this.add(C)}toHTML(){return new c(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(i){return i?typeof i=="string"?i:i.source:null}function f(i){return M("(?=",i,")")}function h(i){return M("(?:",i,")*")}function b(i){return M("(?:",i,")?")}function M(...i){return i.map(g=>_(g)).join("")}function k(i){const d=i[i.length-1];return typeof d=="object"&&d.constructor===Object?(i.splice(i.length-1,1),d):{}}function B(...i){return"("+(k(i).capture?"":"?:")+i.map(C=>_(C)).join("|")+")"}function L(i){return new RegExp(i.toString()+"|").exec("").length-1}function T(i,d){const g=i&&i.exec(d);return g&&g.index===0}const v=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function y(i,{joinWith:d}){let g=0;return i.map(C=>{g+=1;const W=g;let J=_(C),x="";for(;J.length>0;){const D=v.exec(J);if(!D){x+=J;break}x+=J.substring(0,D.index),J=J.substring(D.index+D[0].length),D[0][0]==="\\"&&D[1]?x+="\\"+String(Number(D[1])+W):(x+=D[0],D[0]==="("&&g++)}return x}).map(C=>`(${C})`).join(d)}const q=/\b\B/,F="[a-zA-Z]\\w*",O="[a-zA-Z_]\\w*",X="\\b\\d+(\\.\\d+)?",oe="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Q="\\b(0b[01]+)",we="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Oe=(i={})=>{const d=/^#![ ]*\//;return i.binary&&(i.begin=M(d,/.*\b/,i.binary,/\b.*/)),r({scope:"meta",begin:d,end:/$/,relevance:0,"on:begin":(g,C)=>{g.index!==0&&C.ignoreMatch()}},i)},de={begin:"\\\\[\\s\\S]",relevance:0},xe={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[de]},Ve={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[de]},Re={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},se=function(i,d,g={}){const C=r({scope:"comment",begin:i,end:d,contains:[]},g);C.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const W=B("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return C.contains.push({begin:M(/[ ]+/,"(",W,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),C},Ye=se("//","$"),bn=se("/\\*","\\*/"),yn=se("#","$"),Me={scope:"number",begin:X,relevance:0},ae={scope:"number",begin:oe,relevance:0},Fe={scope:"number",begin:Q,relevance:0},rn={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[de,{begin:/\[/,end:/\]/,relevance:0,contains:[de]}]},wn={scope:"title",begin:F,relevance:0},On={scope:"title",begin:O,relevance:0},pt={begin:"\\.\\s*"+O,relevance:0};var Ze=Object.freeze({__proto__:null,APOS_STRING_MODE:xe,BACKSLASH_ESCAPE:de,BINARY_NUMBER_MODE:Fe,BINARY_NUMBER_RE:Q,COMMENT:se,C_BLOCK_COMMENT_MODE:bn,C_LINE_COMMENT_MODE:Ye,C_NUMBER_MODE:ae,C_NUMBER_RE:oe,END_SAME_AS_BEGIN:function(i){return Object.assign(i,{"on:begin":(d,g)=>{g.data._beginMatch=d[1]},"on:end":(d,g)=>{g.data._beginMatch!==d[1]&&g.ignoreMatch()}})},HASH_COMMENT_MODE:yn,IDENT_RE:F,MATCH_NOTHING_RE:q,METHOD_GUARD:pt,NUMBER_MODE:Me,NUMBER_RE:X,PHRASAL_WORDS_MODE:Re,QUOTE_STRING_MODE:Ve,REGEXP_MODE:rn,RE_STARTERS_RE:we,SHEBANG:Oe,TITLE_MODE:wn,UNDERSCORE_IDENT_RE:O,UNDERSCORE_TITLE_MODE:On});function yo(i,d){i.input[i.index-1]==="."&&d.ignoreMatch()}function wo(i,d){i.className!==void 0&&(i.scope=i.className,delete i.className)}function Do(i,d){d&&i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",i.__beforeBegin=yo,i.keywords=i.keywords||i.beginKeywords,delete i.beginKeywords,i.relevance===void 0&&(i.relevance=0))}function Eo(i,d){Array.isArray(i.illegal)&&(i.illegal=B(...i.illegal))}function xo(i,d){if(i.match){if(i.begin||i.end)throw new Error("begin & end are not supported with match");i.begin=i.match,delete i.match}}function Ro(i,d){i.relevance===void 0&&(i.relevance=1)}const Mo=(i,d)=>{if(!i.beforeMatch)return;if(i.starts)throw new Error("beforeMatch cannot be used with starts");const g=Object.assign({},i);Object.keys(i).forEach(C=>{delete i[C]}),i.keywords=g.keywords,i.begin=M(g.beforeMatch,f(g.begin)),i.starts={relevance:0,contains:[Object.assign(g,{endsParent:!0})]},i.relevance=0,delete g.beforeMatch},Fo=["of","and","for","in","not","or","if","then","parent","list","value"],No="keyword";function Yt(i,d,g=No){const C=Object.create(null);return typeof i=="string"?W(g,i.split(" ")):Array.isArray(i)?W(g,i):Object.keys(i).forEach(function(J){Object.assign(C,Yt(i[J],d,J))}),C;function W(J,x){d&&(x=x.map(D=>D.toLowerCase())),x.forEach(function(D){const S=D.split("|");C[S[0]]=[J,To(S[0],S[1])]})}}function To(i,d){return d?Number(d):ko(i)?0:1}function ko(i){return Fo.includes(i.toLowerCase())}const Zt={},Qe=i=>{console.error(i)},Qt=(i,...d)=>{console.log(`WARN: ${i}`,...d)},on=(i,d)=>{Zt[`${i}/${d}`]||(console.log(`Deprecated as of ${i}. ${d}`),Zt[`${i}/${d}`]=!0)},Ln=new Error;function er(i,d,{key:g}){let C=0;const W=i[g],J={},x={};for(let D=1;D<=d.length;D++)x[D+C]=W[D],J[D+C]=!0,C+=L(d[D-1]);i[g]=x,i[g]._emit=J,i[g]._multi=!0}function So(i){if(Array.isArray(i.begin)){if(i.skip||i.excludeBegin||i.returnBegin)throw Qe("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Ln;if(typeof i.beginScope!="object"||i.beginScope===null)throw Qe("beginScope must be object"),Ln;er(i,i.begin,{key:"beginScope"}),i.begin=y(i.begin,{joinWith:""})}}function Co(i){if(Array.isArray(i.end)){if(i.skip||i.excludeEnd||i.returnEnd)throw Qe("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Ln;if(typeof i.endScope!="object"||i.endScope===null)throw Qe("endScope must be object"),Ln;er(i,i.end,{key:"endScope"}),i.end=y(i.end,{joinWith:""})}}function Ao(i){i.scope&&typeof i.scope=="object"&&i.scope!==null&&(i.beginScope=i.scope,delete i.scope)}function Po(i){Ao(i),typeof i.beginScope=="string"&&(i.beginScope={_wrap:i.beginScope}),typeof i.endScope=="string"&&(i.endScope={_wrap:i.endScope}),So(i),Co(i)}function Oo(i){function d(x,D){return new RegExp(_(x),"m"+(i.case_insensitive?"i":"")+(i.unicodeRegex?"u":"")+(D?"g":""))}class g{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(D,S){S.position=this.position++,this.matchIndexes[this.matchAt]=S,this.regexes.push([S,D]),this.matchAt+=L(D)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const D=this.regexes.map(S=>S[1]);this.matcherRe=d(y(D,{joinWith:"|"}),!0),this.lastIndex=0}exec(D){this.matcherRe.lastIndex=this.lastIndex;const S=this.matcherRe.exec(D);if(!S)return null;const ne=S.findIndex((Dn,gt)=>gt>0&&Dn!==void 0),Y=this.matchIndexes[ne];return S.splice(0,ne),Object.assign(S,Y)}}class C{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(D){if(this.multiRegexes[D])return this.multiRegexes[D];const S=new g;return this.rules.slice(D).forEach(([ne,Y])=>S.addRule(ne,Y)),S.compile(),this.multiRegexes[D]=S,S}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(D,S){this.rules.push([D,S]),S.type==="begin"&&this.count++}exec(D){const S=this.getMatcher(this.regexIndex);S.lastIndex=this.lastIndex;let ne=S.exec(D);if(this.resumingScanAtSamePosition()&&!(ne&&ne.index===this.lastIndex)){const Y=this.getMatcher(0);Y.lastIndex=this.lastIndex+1,ne=Y.exec(D)}return ne&&(this.regexIndex+=ne.position+1,this.regexIndex===this.count&&this.considerAll()),ne}}function W(x){const D=new C;return x.contains.forEach(S=>D.addRule(S.begin,{rule:S,type:"begin"})),x.terminatorEnd&&D.addRule(x.terminatorEnd,{type:"end"}),x.illegal&&D.addRule(x.illegal,{type:"illegal"}),D}function J(x,D){const S=x;if(x.isCompiled)return S;[wo,xo,Po,Mo].forEach(Y=>Y(x,D)),i.compilerExtensions.forEach(Y=>Y(x,D)),x.__beforeBegin=null,[Do,Eo,Ro].forEach(Y=>Y(x,D)),x.isCompiled=!0;let ne=null;return typeof x.keywords=="object"&&x.keywords.$pattern&&(x.keywords=Object.assign({},x.keywords),ne=x.keywords.$pattern,delete x.keywords.$pattern),ne=ne||/\w+/,x.keywords&&(x.keywords=Yt(x.keywords,i.case_insensitive)),S.keywordPatternRe=d(ne,!0),D&&(x.begin||(x.begin=/\B|\b/),S.beginRe=d(S.begin),!x.end&&!x.endsWithParent&&(x.end=/\B|\b/),x.end&&(S.endRe=d(S.end)),S.terminatorEnd=_(S.end)||"",x.endsWithParent&&D.terminatorEnd&&(S.terminatorEnd+=(x.end?"|":"")+D.terminatorEnd)),x.illegal&&(S.illegalRe=d(x.illegal)),x.contains||(x.contains=[]),x.contains=[].concat(...x.contains.map(function(Y){return Io(Y==="self"?x:Y)})),x.contains.forEach(function(Y){J(Y,S)}),x.starts&&J(x.starts,D),S.matcher=W(S),S}if(i.compilerExtensions||(i.compilerExtensions=[]),i.contains&&i.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return i.classNameAliases=r(i.classNameAliases||{}),J(i)}function nr(i){return i?i.endsWithParent||nr(i.starts):!1}function Io(i){return i.variants&&!i.cachedVariants&&(i.cachedVariants=i.variants.map(function(d){return r(i,{variants:null},d)})),i.cachedVariants?i.cachedVariants:nr(i)?r(i,{starts:i.starts?r(i.starts):null}):Object.isFrozen(i)?r(i):i}var Lo="11.11.1";class Bo extends Error{constructor(d,g){super(d),this.name="HTMLInjectionError",this.html=g}}const vt=t,tr=r,rr=Symbol("nomatch"),zo=7,or=function(i){const d=Object.create(null),g=Object.create(null),C=[];let W=!0;const J="Could not find the language '{}', did you forget to load/include a language module?",x={disableAutodetect:!0,name:"Plain text",contains:[]};let D={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:p};function S(m){return D.noHighlightRe.test(m)}function ne(m){let N=m.className+" ";N+=m.parentNode?m.parentNode.className:"";const I=D.languageDetectRe.exec(N);if(I){const U=je(I[1]);return U||(Qt(J.replace("{}",I[1])),Qt("Falling back to no-highlight mode for this block.",m)),U?I[1]:"no-highlight"}return N.split(/\s+/).find(U=>S(U)||je(U))}function Y(m,N,I){let U="",ee="";typeof N=="object"?(U=m,I=N.ignoreIllegals,ee=N.language):(on("10.7.0","highlight(lang, code, ...args) has been deprecated."),on("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),ee=m,U=N),I===void 0&&(I=!0);const De={code:U,language:ee};zn("before:highlight",De);const $e=De.result?De.result:Dn(De.language,De.code,I);return $e.code=De.code,zn("after:highlight",$e),$e}function Dn(m,N,I,U){const ee=Object.create(null);function De(w,R){return w.keywords[R]}function $e(){if(!A.keywords){te.addText(H);return}let w=0;A.keywordPatternRe.lastIndex=0;let R=A.keywordPatternRe.exec(H),P="";for(;R;){P+=H.substring(w,R.index);const V=Te.case_insensitive?R[0].toLowerCase():R[0],ie=De(A,V);if(ie){const[Ie,ts]=ie;if(te.addText(P),P="",ee[V]=(ee[V]||0)+1,ee[V]<=zo&&(jn+=ts),Ie.startsWith("_"))P+=R[0];else{const rs=Te.classNameAliases[Ie]||Ie;Ne(R[0],rs)}}else P+=R[0];w=A.keywordPatternRe.lastIndex,R=A.keywordPatternRe.exec(H)}P+=H.substring(w),te.addText(P)}function qn(){if(H==="")return;let w=null;if(typeof A.subLanguage=="string"){if(!d[A.subLanguage]){te.addText(H);return}w=Dn(A.subLanguage,H,!0,dr[A.subLanguage]),dr[A.subLanguage]=w._top}else w=ht(H,A.subLanguage.length?A.subLanguage:null);A.relevance>0&&(jn+=w.relevance),te.__addSublanguage(w._emitter,w.language)}function pe(){A.subLanguage!=null?qn():$e(),H=""}function Ne(w,R){w!==""&&(te.startScope(R),te.addText(w),te.endScope())}function lr(w,R){let P=1;const V=R.length-1;for(;P<=V;){if(!w._emit[P]){P++;continue}const ie=Te.classNameAliases[w[P]]||w[P],Ie=R[P];ie?Ne(Ie,ie):(H=Ie,$e(),H=""),P++}}function cr(w,R){return w.scope&&typeof w.scope=="string"&&te.openNode(Te.classNameAliases[w.scope]||w.scope),w.beginScope&&(w.beginScope._wrap?(Ne(H,Te.classNameAliases[w.beginScope._wrap]||w.beginScope._wrap),H=""):w.beginScope._multi&&(lr(w.beginScope,R),H="")),A=Object.create(w,{parent:{value:A}}),A}function ur(w,R,P){let V=T(w.endRe,P);if(V){if(w["on:end"]){const ie=new n(w);w["on:end"](R,ie),ie.isMatchIgnored&&(V=!1)}if(V){for(;w.endsParent&&w.parent;)w=w.parent;return w}}if(w.endsWithParent)return ur(w.parent,R,P)}function Yo(w){return A.matcher.regexIndex===0?(H+=w[0],1):(Dt=!0,0)}function Zo(w){const R=w[0],P=w.rule,V=new n(P),ie=[P.__beforeBegin,P["on:begin"]];for(const Ie of ie)if(Ie&&(Ie(w,V),V.isMatchIgnored))return Yo(R);return P.skip?H+=R:(P.excludeBegin&&(H+=R),pe(),!P.returnBegin&&!P.excludeBegin&&(H=R)),cr(P,w),P.returnBegin?0:R.length}function Qo(w){const R=w[0],P=N.substring(w.index),V=ur(A,w,P);if(!V)return rr;const ie=A;A.endScope&&A.endScope._wrap?(pe(),Ne(R,A.endScope._wrap)):A.endScope&&A.endScope._multi?(pe(),lr(A.endScope,w)):ie.skip?H+=R:(ie.returnEnd||ie.excludeEnd||(H+=R),pe(),ie.excludeEnd&&(H=R));do A.scope&&te.closeNode(),!A.skip&&!A.subLanguage&&(jn+=A.relevance),A=A.parent;while(A!==V.parent);return V.starts&&cr(V.starts,w),ie.returnEnd?0:R.length}function es(){const w=[];for(let R=A;R!==Te;R=R.parent)R.scope&&w.unshift(R.scope);w.forEach(R=>te.openNode(R))}let Vn={};function fr(w,R){const P=R&&R[0];if(H+=w,P==null)return pe(),0;if(Vn.type==="begin"&&R.type==="end"&&Vn.index===R.index&&P===""){if(H+=N.slice(R.index,R.index+1),!W){const V=new Error(`0 width match regex (${m})`);throw V.languageName=m,V.badRule=Vn.rule,V}return 1}if(Vn=R,R.type==="begin")return Zo(R);if(R.type==="illegal"&&!I){const V=new Error('Illegal lexeme "'+P+'" for mode "'+(A.scope||"<unnamed>")+'"');throw V.mode=A,V}else if(R.type==="end"){const V=Qo(R);if(V!==rr)return V}if(R.type==="illegal"&&P==="")return H+=`
`,1;if(wt>1e5&&wt>R.index*3)throw new Error("potential infinite loop, way more iterations than matches");return H+=P,P.length}const Te=je(m);if(!Te)throw Qe(J.replace("{}",m)),new Error('Unknown language: "'+m+'"');const ns=Oo(Te);let yt="",A=U||ns;const dr={},te=new D.__emitter(D);es();let H="",jn=0,en=0,wt=0,Dt=!1;try{if(Te.__emitTokens)Te.__emitTokens(N,te);else{for(A.matcher.considerAll();;){wt++,Dt?Dt=!1:A.matcher.considerAll(),A.matcher.lastIndex=en;const w=A.matcher.exec(N);if(!w)break;const R=N.substring(en,w.index),P=fr(R,w);en=w.index+P}fr(N.substring(en))}return te.finalize(),yt=te.toHTML(),{language:m,value:yt,relevance:jn,illegal:!1,_emitter:te,_top:A}}catch(w){if(w.message&&w.message.includes("Illegal"))return{language:m,value:vt(N),illegal:!0,relevance:0,_illegalBy:{message:w.message,index:en,context:N.slice(en-100,en+100),mode:w.mode,resultSoFar:yt},_emitter:te};if(W)return{language:m,value:vt(N),illegal:!1,relevance:0,errorRaised:w,_emitter:te,_top:A};throw w}}function gt(m){const N={value:vt(m),illegal:!1,relevance:0,_top:x,_emitter:new D.__emitter(D)};return N._emitter.addText(m),N}function ht(m,N){N=N||D.languages||Object.keys(d);const I=gt(m),U=N.filter(je).filter(ar).map(pe=>Dn(pe,m,!1));U.unshift(I);const ee=U.sort((pe,Ne)=>{if(pe.relevance!==Ne.relevance)return Ne.relevance-pe.relevance;if(pe.language&&Ne.language){if(je(pe.language).supersetOf===Ne.language)return 1;if(je(Ne.language).supersetOf===pe.language)return-1}return 0}),[De,$e]=ee,qn=De;return qn.secondBest=$e,qn}function qo(m,N,I){const U=N&&g[N]||I;m.classList.add("hljs"),m.classList.add(`language-${U}`)}function bt(m){let N=null;const I=ne(m);if(S(I))return;if(zn("before:highlightElement",{el:m,language:I}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(D.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),D.throwUnescapedHTML))throw new Bo("One of your code blocks includes unescaped HTML.",m.innerHTML);N=m;const U=N.textContent,ee=I?Y(U,{language:I,ignoreIllegals:!0}):ht(U);m.innerHTML=ee.value,m.dataset.highlighted="yes",qo(m,I,ee.language),m.result={language:ee.language,re:ee.relevance,relevance:ee.relevance},ee.secondBest&&(m.secondBest={language:ee.secondBest.language,relevance:ee.secondBest.relevance}),zn("after:highlightElement",{el:m,result:ee,text:U})}function Vo(m){D=tr(D,m)}const jo=()=>{Bn(),on("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function $o(){Bn(),on("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let sr=!1;function Bn(){function m(){Bn()}if(document.readyState==="loading"){sr||window.addEventListener("DOMContentLoaded",m,!1),sr=!0;return}document.querySelectorAll(D.cssSelector).forEach(bt)}function Uo(m,N){let I=null;try{I=N(i)}catch(U){if(Qe("Language definition for '{}' could not be registered.".replace("{}",m)),W)Qe(U);else throw U;I=x}I.name||(I.name=m),d[m]=I,I.rawDefinition=N.bind(null,i),I.aliases&&ir(I.aliases,{languageName:m})}function Ho(m){delete d[m];for(const N of Object.keys(g))g[N]===m&&delete g[N]}function Ko(){return Object.keys(d)}function je(m){return m=(m||"").toLowerCase(),d[m]||d[g[m]]}function ir(m,{languageName:N}){typeof m=="string"&&(m=[m]),m.forEach(I=>{g[I.toLowerCase()]=N})}function ar(m){const N=je(m);return N&&!N.disableAutodetect}function Go(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=N=>{m["before:highlightBlock"](Object.assign({block:N.el},N))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=N=>{m["after:highlightBlock"](Object.assign({block:N.el},N))})}function Xo(m){Go(m),C.push(m)}function Wo(m){const N=C.indexOf(m);N!==-1&&C.splice(N,1)}function zn(m,N){const I=m;C.forEach(function(U){U[I]&&U[I](N)})}function Jo(m){return on("10.7.0","highlightBlock will be removed entirely in v12.0"),on("10.7.0","Please use highlightElement now."),bt(m)}Object.assign(i,{highlight:Y,highlightAuto:ht,highlightAll:Bn,highlightElement:bt,highlightBlock:Jo,configure:Vo,initHighlighting:jo,initHighlightingOnLoad:$o,registerLanguage:Uo,unregisterLanguage:Ho,listLanguages:Ko,getLanguage:je,registerAliases:ir,autoDetection:ar,inherit:tr,addPlugin:Xo,removePlugin:Wo}),i.debugMode=function(){W=!1},i.safeMode=function(){W=!0},i.versionString=Lo,i.regex={concat:M,lookahead:f,either:B,optional:b,anyNumberOfTimes:h};for(const m in Ze)typeof Ze[m]=="object"&&e(Ze[m]);return Object.assign(i,Ze),i},sn=or({});return sn.newInstance=()=>or({}),Nt=sn,sn.HighlightJS=sn,sn.default=sn,Nt}var i0=s0();const kr=o0(i0);var a0=fe("<pre><code><!></code></pre>");function l0(e,n){const t=tt(n,["children","$$slots","$$events","$$legacy"]),r=tt(t,["code","highlighted","languageName","langtag"]);let o=Ge(n,"code",8),s=Ge(n,"highlighted",8),a=Ge(n,"languageName",8,"plaintext"),c=Ge(n,"langtag",8,!1);var l=a0();let u;var p=z(l);Sn(p,1,"",null,{},{hljs:!0});var _=z(p);{var f=b=>{var M=et(),k=cn(M);bi(k,s),K(b,M)},h=b=>{var M=It();me(()=>Ce(M,o())),K(b,M)};Ue(_,b=>{s()?b(f):b(h,!1)})}me(b=>u=Mi(l,u,{"data-language":a(),...r,[Mn]:b},"svelte-1w9vok"),[()=>({langtag:c()})],Ut),K(e,l)}function c0(e,n){const t=tt(n,["children","$$slots","$$events","$$legacy"]),r=tt(t,["language","code","langtag"]);pn(n,!1);let o=Ge(n,"language",8),s=Ge(n,"code",8),a=Ge(n,"langtag",8,!1);const c=Ai();let l=Ht("");Pi(()=>{E(l)&&c("highlight",{highlighted:E(l)})}),$s(()=>(At(o()),At(s())),()=>{kr.registerLanguage(o().name,o().register),Z(l,kr.highlight(s(),{language:o().name}).value)}),Us(),mo();var u=et(),p=cn(u);yi(p,n,"default",{get highlighted(){return E(l)}},_=>{l0(_,Si(()=>r,{get languageName(){return o().name},get langtag(){return a()},get highlighted(){return E(l)},get code(){return s()}}))}),K(e,u),vn()}function u0(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",s={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},a={keywords:s,illegal:/<\//},c={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},l={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},u={className:"subst",begin:/\$\(/,end:/\)/,keywords:s},p={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,u,p],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},f={className:"string",contains:[e.BACKSLASH_ESCAPE,u,p],begin:"`",end:"`"},h={className:"meta",begin:"@"+n},b={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return a.name="Julia",a.contains=[c,l,_,f,h,b,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],u.contains=a.contains,a}const f0={name:"julia",register:u0};function go(e){let n,t,r;if(e<.5){const o=e*2;n=Math.round(34+o*166),t=Math.round(197+o*-17),r=Math.round(94+o*-94)}else{const o=(e-.5)*2;n=Math.round(200+o*20),t=Math.round(180-o*180),r=Math.round(0+o*30)}return[n,t,r]}function d0(e,n,t){if(typeof e!="number")return"";const r=[...n.values()].filter(b=>typeof b=="number");if(r.length<2)return"";const o=Math.min(...r),s=Math.max(...r),a=Math.log(Math.max(o,.001)),c=Math.log(Math.max(s,.001));if(c===a)return"";const l=Math.log(Math.max(e,.001)),u=Math.max(0,Math.min(1,(l-a)/(c-a))),[p,_,f]=go(u);return`background-color: rgba(${p}, ${_}, ${f}, ${t==="dark"?.3:.25})`}function _0(e,n=10){const t=e==="dark"?.5:.4,r=[];for(let o=0;o<=n;o++){const s=o/n,[a,c,l]=go(s);r.push(`rgba(${a}, ${c}, ${l}, ${t})`)}return r}const m0=[{url:"https://github.com/EnzymeAD/Enzyme.jl/issues/1995",affects:[["assume_mvnormal","EnzymeFwd"],["assume_wishart","EnzymeFwd"]]},{url:"https://github.com/chalk-lab/Mooncake.jl/issues/570",affects:[["multithreaded","MooncakeFwd"],["multithreaded","MooncakeRvs"]]}],p0=[{value:"wrong",affects:[["control_flow","ReverseDiffCompiled"]]}],ho=new Map;for(const e of m0)for(const[n,t]of e.affects)ho.set(`${n}__${t}`,e.url);const bo=new Map;for(const e of p0)for(const[n,t]of e.affects)bo.set(`${n}__${t}`,e.value);function v0(e,n){return ho.get(`${e}__${n}`)}function g0(e,n){return bo.get(`${e}__${n}`)}var h0=(e,n,t)=>n(E(t)),b0=fe('<th class="sortable svelte-9laac1" title="Click to sort"> <span class="sort-indicator svelte-9laac1"><!></span></th>'),y0=fe('<td class="svelte-9laac1"> </td>'),w0=fe('<a class="issue svelte-9laac1" target="_blank">(?)</a>'),D0=fe('<td class="svelte-9laac1"><!> <span> </span></td>'),E0=(e,n,t,r)=>n(t.modelDefinitions[r()]),x0=mt('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'),R0=mt('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'),M0=fe('<tr class="definition-row svelte-9laac1"><td class="svelte-9laac1"><div class="definition-content svelte-9laac1"><div class="code-wrapper svelte-9laac1"><!></div> <button class="copy-btn svelte-9laac1" aria-label="Copy to clipboard" title="Copy code"><!></button></div></td></tr>'),F0=fe('<tr><!><td class="dim-cell svelte-9laac1"> </td><!></tr> <!>',1),N0=fe('<div class="table-scroll svelte-9laac1"><table class="svelte-9laac1"><thead><tr class="svelte-9laac1"><th class="model-col-header svelte-9laac1">Model</th><th class="dim-col-header svelte-9laac1">Dim</th><!></tr></thead><tbody></tbody></table></div>');function T0(e,n){pn(n,!0);const t=ln(()=>J_(n.data));let r=ge(Le({column:null,direction:null})),o=ge(null),s=ge(!1);function a(M){navigator.clipboard.writeText(M),Z(s,!0),setTimeout(()=>{Z(s,!1)},2e3)}function c(M){E(r).column!==M?Z(r,{column:M,direction:"asc"},!0):E(r).direction==="asc"?Z(r,{column:M,direction:"desc"},!0):Z(r,{column:null,direction:null},!0)}const l=ln(()=>Z_(n.data,E(r)));var u=N0(),p=z(u),_=z(p),f=z(_),h=re(z(f),2);Nn(h,17,()=>E(t),Fn,(M,k)=>{var B=b0();B.__click=[h0,c,k];var L=z(B),T=re(L),v=z(T);{var y=q=>{var F=et(),O=cn(F);{var X=Q=>{var we=It("▲");K(Q,we)},oe=Q=>{var we=It("▼");K(Q,we)};Ue(O,Q=>{E(r).direction==="asc"?Q(X):Q(oe,!1)})}K(q,F)};Ue(v,q=>{E(r).column===E(k)&&q(y)})}me(()=>Ce(L,`${E(k)??""} `)),K(M,B)});var b=re(_);Nn(b,21,()=>E(l),Fn,(M,k,B)=>{let L=()=>E(k)[0],T=()=>E(k)[1].dim,v=()=>E(k)[1].results;var y=F0(),q=cn(y);Sn(q,1,"svelte-9laac1",null,{},{alt:B%2===1});var F=z(q);r0(F,{get name(){return L()},onToggle:()=>Z(o,E(o)===L()?null:L(),!0)});var O=re(F),X=z(O),oe=re(O);Nn(oe,17,()=>Y_(v()),Fn,(Oe,de)=>{let xe=()=>E(de)[0],Ve=()=>E(de)[1];var Re=et();const se=ln(()=>g0(L(),xe())??Ve());var Ye=cn(Re);{var bn=Me=>{var ae=y0(),Fe=z(ae);me((rn,wn)=>{Jt(ae,rn),Ce(Fe,wn)},[()=>d0(E(se),v(),n.theme),()=>E(se).toFixed(3)]),K(Me,ae)},yn=Me=>{var ae=D0();const Fe=ln(()=>v0(L(),xe()));var rn=z(ae);{var wn=In=>{var Ze=w0();me(()=>nt(Ze,"href",E(Fe))),K(In,Ze)};Ue(rn,In=>{E(Fe)&&In(wn)})}var On=re(rn,2),pt=z(On);me(()=>{Sn(On,1,lo(E(se)==="NaN"?"nan":E(se)),"svelte-9laac1"),Ce(pt,E(se))}),K(Me,ae)};Ue(Ye,Me=>{typeof E(se)=="number"?Me(bn):Me(yn,!1)})}K(Oe,Re)});var Q=re(q,2);{var we=Oe=>{var de=M0(),xe=z(de),Ve=z(xe),Re=z(Ve),se=z(Re);c0(se,{language:f0,get code(){return n.modelDefinitions[L()]}});var Ye=re(Re,2);Ye.__click=[E0,a,n,L];var bn=z(Ye);{var yn=ae=>{var Fe=x0();K(ae,Fe)},Me=ae=>{var Fe=R0();K(ae,Fe)};Ue(bn,ae=>{E(s)?ae(yn):ae(Me,!1)})}me(()=>{nt(xe,"colspan",E(t).length+2),Ye.disabled=E(s)}),K(Oe,de)};Ue(Q,Oe=>{E(o)===L()&&Oe(we)})}me(()=>Ce(X,T())),K(M,y)}),K(e,u),vn()}_t(["click"]);var k0=fe('<div class="legend svelte-10rqhbc"><div class="gradient-section svelte-10rqhbc"><span class="label svelte-10rqhbc">Faster</span> <div class="gradient-bar svelte-10rqhbc"></div> <span class="label svelte-10rqhbc">Slower</span></div> <div class="divider svelte-10rqhbc"></div> <div class="status-labels svelte-10rqhbc"><span class="status error svelte-10rqhbc">error</span> <span class="status wrong svelte-10rqhbc">wrong</span> <span class="status nan svelte-10rqhbc">NaN</span></div></div>');function S0(e,n){pn(n,!0);const t=ln(()=>()=>`linear-gradient(to right, ${_0(n.theme).join(", ")})`);var r=k0(),o=z(r),s=re(z(o),2);me(a=>Jt(s,`background: ${a??""}`),[()=>E(t)()]),K(e,r),vn()}function C0(e,n){Z(n,E(n)==="light"?"dark":"light",!0),document.documentElement.setAttribute("data-theme",E(n)),localStorage.setItem("theme",E(n))}var A0=mt('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'),P0=mt('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'),O0=fe('<h3 class="category-heading svelte-1wqfdel"> </h3> <!>',1),I0=fe('<p class="no-results svelte-1wqfdel"> </p>'),L0=fe(`<div id="main-wrapper" class="svelte-1wqfdel"><main class="svelte-1wqfdel"><div class="header svelte-1wqfdel"><div class="title-area svelte-1wqfdel"><h1 class="svelte-1wqfdel">Turing AD tests</h1> <nav class="nav-links svelte-1wqfdel"><a href="https://turinglang.org/docs" class="svelte-1wqfdel">Turing.jl Docs</a> <a href="https://github.com/TuringLang/Turing.jl" class="svelte-1wqfdel">Turing.jl GitHub</a> <a href="https://github.com/TuringLang/ADTests" class="svelte-1wqfdel">ADTests GitHub</a></nav></div> <button class="theme-toggle svelte-1wqfdel" aria-label="Toggle Dark Mode" title="Toggle theme"><!></button></div> <p class="intro svelte-1wqfdel">A comparison of how different AD backends perform on <a href="https://turinglang.org/docs">Turing.jl</a> models.
            This does not imply any endorsement; for general AD comparisons see <a href="https://github.com/gradbench/gradbench" target="_blank">GradBench</a>.</p> <div class="info-card svelte-1wqfdel"><h4 class="svelte-1wqfdel">Reading the table</h4> <ul class="svelte-1wqfdel"><li class="svelte-1wqfdel">Click model names to see their definitions.</li> <li class="svelte-1wqfdel"><b>Numbers</b> = gradient time / primal time. <b>Smaller is faster.</b></li> <li class="svelte-1wqfdel"><span class="wrong svelte-1wqfdel">wrong</span> = AD ran but gave an incorrect result
                    (compared against FiniteDifferences).</li> <li class="svelte-1wqfdel"><span class="error svelte-1wqfdel">error</span> = AD failed to run.</li> <li class="svelte-1wqfdel"><span class="issue-example svelte-1wqfdel">(?)</span> links to a GitHub issue describing the problem.</li></ul></div> <div class="warning svelte-1wqfdel">Note: Results are from Julia 1.11.</div> <div class="results-header svelte-1wqfdel"><h2 class="svelte-1wqfdel">Results</h2> <a class="download-link svelte-1wqfdel" href="adtests.json" target="_blank" download=""><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> JSON</a></div> <div class="controls svelte-1wqfdel"><input type="search" class="search-input svelte-1wqfdel" placeholder="Filter models..."> <!></div> <!> <h2>Manifest</h2> <p class="secondary-text svelte-1wqfdel">Package versions used for the tests above:</p> <!></main></div>`);function B0(e,n){pn(n,!0);const t=typeof document<"u"&&(localStorage.getItem("theme")||document.documentElement.getAttribute("data-theme"))||"light";typeof document<"u"&&document.documentElement.setAttribute("data-theme",t);let r=ge(Le(t)),o=new Map;for(const[v,y]of Object.entries(Ua)){let q=y.__category__;delete y.__category__;let F=y.__dim__;delete y.__dim__;let O=new Map;for(const[X,oe]of Object.entries(y))O.set(X,oe);o.has(q)||o.set(q,new Map),o.get(q).set(v,{dim:F,results:O})}let s=new Map([...o.entries()].sort()),a=ge("");const c=ln(()=>{const v=E(a).trim().toLowerCase();if(!v)return s;const y=new Map;for(const[q,F]of s){const O=new Map;for(const[X,oe]of F)X.toLowerCase().includes(v)&&O.set(X,oe);O.size>0&&y.set(q,O)}return y});var l=L0(),u=z(l),p=z(u),_=re(z(p),2);_.__click=[C0,r];var f=z(_);{var h=v=>{var y=A0();K(v,y)},b=v=>{var y=P0();K(v,y)};Ue(f,v=>{E(r)==="dark"?v(h):v(b,!1)})}var M=re(p,10),k=z(M),B=re(k,2);S0(B,{get theme(){return E(r)}});var L=re(M,2);Nn(L,17,()=>E(c).entries(),Fn,(v,y)=>{let q=()=>E(y)[0],F=()=>E(y)[1];var O=O0(),X=cn(O),oe=z(X),Q=re(X,2);T0(Q,{get data(){return F()},modelDefinitions:Zl,get theme(){return E(r)}}),me(()=>Ce(oe,q())),K(v,O)},v=>{var y=I0(),q=z(y);me(()=>Ce(q,`No models match "${E(a)??""}".`)),K(v,y)});var T=re(L,6);n0(T,{}),Fi(k,()=>E(a),v=>Z(a,v)),K(e,l),vn()}_t(["click"]);di(B0,{target:document.getElementById("app")});
