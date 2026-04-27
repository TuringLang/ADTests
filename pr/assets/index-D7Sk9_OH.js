(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const mr=!1;var tt=Array.isArray,ss=Array.prototype.indexOf,Bt=Array.from,is=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,Pr=Object.getOwnPropertyDescriptors,as=Object.prototype,ls=Array.prototype,zt=Object.getPrototypeOf,pr=Object.isExtensible;function xn(e){return typeof e=="function"}function cs(e){return e()}function Tt(e){for(var n=0;n<e.length;n++)e[n]()}const Re=2,Or=4,rt=8,qt=16,qe=32,mn=64,Hn=128,ye=256,Gn=512,de=1024,Pe=2048,Je=4096,Be=8192,ot=16384,us=32768,Vt=65536,fs=1<<17,ds=1<<19,Ir=1<<20,kt=1<<21,en=Symbol("$state"),Lr=Symbol("legacy props"),_s=Symbol("");function Br(e){return e===this.v}function ms(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function jt(e){return!ms(e,this.v)}function ps(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function vs(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function gs(e){throw new Error("https://svelte.dev/e/effect_orphan")}function hs(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function bs(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function ys(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ws(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ds(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Es(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let An=!1,xs=!1;function Rs(){An=!0}const $t=1,Ut=2,zr=4,Ms=8,Fs=16,Ns=1,Ts=2,qr=4,ks=8,Ss=16,Cs=1,As=2,pe=Symbol(),Ps="http://www.w3.org/1999/xhtml",Os="@attach";function Vr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let K=null;function vr(e){K=e}function pn(e,n=!1,t){var r=K={p:K,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};An&&!n&&(K.l={s:null,u:null,r1:[],r2:fn(!1)}),Vs(()=>{r.d=!0})}function vn(e){const n=K;if(n!==null){const a=n.e;if(a!==null){var t=j,r=$;n.e=null;try{for(var o=0;o<a.length;o++){var s=a[o];We(s.effect),Oe(s.reaction),Kt(s.fn)}}finally{We(t),Oe(r)}}K=n.p,n.m=!0}return{}}function Pn(){return!An||K!==null&&K.l===null}function Le(e){if(typeof e!="object"||e===null||en in e)return e;const n=zt(e);if(n!==as&&n!==ls)return e;var t=new Map,r=tt(e),o=be(0),s=$,a=c=>{var l=$;Oe(s);var u=c();return Oe(l),u};return r&&t.set("length",be(e.length)),new Proxy(e,{defineProperty(c,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&ws();var p=t.get(l);return p===void 0?(p=a(()=>be(u.value)),t.set(l,p)):Z(p,a(()=>Le(u.value))),!0},deleteProperty(c,l){var u=t.get(l);if(u===void 0)l in c&&(t.set(l,a(()=>be(pe))),Et(o));else{if(r&&typeof l=="string"){var p=t.get("length"),_=Number(l);Number.isInteger(_)&&_<p.v&&Z(p,_)}Z(u,pe),Et(o)}return!0},get(c,l,u){var h;if(l===en)return e;var p=t.get(l),_=l in c;if(p===void 0&&(!_||(h=Xe(c,l))!=null&&h.writable)&&(p=a(()=>be(Le(_?c[l]:pe))),t.set(l,p)),p!==void 0){var f=w(p);return f===pe?void 0:f}return Reflect.get(c,l,u)},getOwnPropertyDescriptor(c,l){var u=Reflect.getOwnPropertyDescriptor(c,l);if(u&&"value"in u){var p=t.get(l);p&&(u.value=w(p))}else if(u===void 0){var _=t.get(l),f=_==null?void 0:_.v;if(_!==void 0&&f!==pe)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return u},has(c,l){var f;if(l===en)return!0;var u=t.get(l),p=u!==void 0&&u.v!==pe||Reflect.has(c,l);if(u!==void 0||j!==null&&(!p||(f=Xe(c,l))!=null&&f.writable)){u===void 0&&(u=a(()=>be(p?Le(c[l]):pe)),t.set(l,u));var _=w(u);if(_===pe)return!1}return p},set(c,l,u,p){var V;var _=t.get(l),f=l in c;if(r&&l==="length")for(var h=u;h<_.v;h+=1){var b=t.get(h+"");b!==void 0?Z(b,pe):h in c&&(b=a(()=>be(pe)),t.set(h+"",b))}_===void 0?(!f||(V=Xe(c,l))!=null&&V.writable)&&(_=a(()=>be(void 0)),Z(_,a(()=>Le(u))),t.set(l,_)):(f=_.v!==pe,Z(_,a(()=>Le(u))));var S=Reflect.getOwnPropertyDescriptor(c,l);if(S!=null&&S.set&&S.set.call(p,u),!f){if(r&&typeof l=="string"){var F=t.get("length"),O=Number(l);Number.isInteger(O)&&O>=F.v&&Z(F,O+1)}Et(o)}return!0},ownKeys(c){w(o);var l=Reflect.ownKeys(c).filter(_=>{var f=t.get(_);return f===void 0||f.v!==pe});for(var[u,p]of t)p.v!==pe&&!(u in c)&&l.push(u);return l},setPrototypeOf(){Ds()}})}function Et(e,n=1){Z(e,e.v+n)}function un(e){var n=Re|Pe,t=$!==null&&($.f&Re)!==0?$:null;return j===null||t!==null&&(t.f&ye)!==0?n|=ye:j.f|=Ir,{ctx:K,deps:null,effects:null,equals:Br,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??j}}function ln(e){const n=un(e);return to(n),n}function Ht(e){const n=un(e);return n.equals=jt,n}function jr(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)ze(n[t])}}function Is(e){for(var n=e.parent;n!==null;){if((n.f&Re)===0)return n;n=n.parent}return null}function $r(e){var n,t=j;We(Is(e));try{jr(e),n=io(e)}finally{We(t)}return n}function Ur(e){var n=$r(e),t=(Ge||(e.f&ye)!==0)&&e.deps!==null?Je:de;De(e,t),e.equals(n)||(e.v=n,e.wv=oo())}const kn=new Map;function fn(e,n){var t={f:0,v:e,reactions:null,equals:Br,rv:0,wv:0};return t}function be(e,n){const t=fn(e);return to(t),t}function Gt(e,n=!1){var r;const t=fn(e);return n||(t.equals=jt),An&&K!==null&&K.l!==null&&((r=K.l).s??(r.s=[])).push(t),t}function Z(e,n,t=!1){$!==null&&!Se&&Pn()&&($.f&(Re|qt))!==0&&!(fe!=null&&fe.includes(e))&&Es();let r=t?Le(n):n;return St(e,r)}function St(e,n){if(!e.equals(n)){var t=e.v;On?kn.set(e,n):kn.set(e,t),e.v=n,(e.f&Re)!==0&&((e.f&Pe)!==0&&$r(e),De(e,(e.f&ye)===0?de:Je)),e.wv=oo(),Hr(e,Pe),Pn()&&j!==null&&(j.f&de)!==0&&(j.f&(qe|mn))===0&&(we===null?Xs([e]):we.push(e))}return n}function gr(e,n=1){var t=w(e),r=n===1?t++:t--;return Z(e,t),r}function Hr(e,n){var t=e.reactions;if(t!==null)for(var r=Pn(),o=t.length,s=0;s<o;s++){var a=t[s],c=a.f;(c&Pe)===0&&(!r&&a===j||(De(a,n),(c&(de|ye))!==0&&((c&Re)!==0?Hr(a,Je):ft(a))))}}let Ls=!1;var hr,Gr,Kr,Xr;function Bs(){if(hr===void 0){hr=window,Gr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Kr=Xe(n,"firstChild").get,Xr=Xe(n,"nextSibling").get,pr(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),pr(t)&&(t.__t=void 0)}}function st(e=""){return document.createTextNode(e)}function Ce(e){return Kr.call(e)}function it(e){return Xr.call(e)}function z(e,n){return Ce(e)}function cn(e,n){{var t=Ce(e);return t instanceof Comment&&t.data===""?it(t):t}}function oe(e,n=1,t=!1){let r=e;for(;n--;)r=it(r);return r}function zs(e){e.textContent=""}function Wr(e){j===null&&$===null&&gs(),$!==null&&($.f&ye)!==0&&j===null&&vs(),On&&ps()}function qs(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function gn(e,n,t,r=!0){var o=j,s={ctx:K,deps:null,nodes_start:null,nodes_end:null,f:e|Pe,first:null,fn:n,last:null,next:null,parent:o,prev:null,teardown:null,transitions:null,wv:0};if(t)try{ut(s),s.f|=us}catch(l){throw ze(s),l}else n!==null&&ft(s);var a=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(Ir|Hn))===0;if(!a&&r&&(o!==null&&qs(s,o),$!==null&&($.f&Re)!==0)){var c=$;(c.effects??(c.effects=[])).push(s)}return s}function Vs(e){const n=gn(rt,null,!1);return De(n,de),n.teardown=e,n}function br(e){Wr();var n=j!==null&&(j.f&qe)!==0&&K!==null&&!K.m;if(n){var t=K;(t.e??(t.e=[])).push({fn:e,effect:j,reaction:$})}else{var r=Kt(e);return r}}function js(e){return Wr(),at(e)}function $s(e){const n=gn(mn,e,!0);return(t={})=>new Promise(r=>{t.outro?Kn(n,()=>{ze(n),r(void 0)}):(ze(n),r(void 0))})}function Kt(e){return gn(Or,e,!1)}function Us(e,n){var t=K,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=at(()=>{e(),!r.ran&&(r.ran=!0,Z(t.l.r2,!0),Sn(n))})}function Hs(){var e=K;at(()=>{if(w(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&de)!==0&&De(t,Je),hn(t)&&ut(t),n.ran=!1}e.l.r2.v=!1}})}function at(e){return gn(rt,e,!0)}function ve(e,n=[],t=un){const r=n.map(t);return lt(()=>e(...r.map(w)))}function lt(e,n=0){return gn(rt|qt|n,e,!0)}function dn(e,n=!0){return gn(rt|qe,e,!0,n)}function Jr(e){var n=e.teardown;if(n!==null){const t=On,r=$;yr(!0),Oe(null);try{n.call(null)}finally{yr(t),Oe(r)}}}function Yr(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&mn)!==0?t.parent=null:ze(t,n),t=r}}function Gs(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&qe)===0&&ze(n),n=t}}function ze(e,n=!0){var t=!1;(n||(e.f&ds)!==0)&&e.nodes_start!==null&&(Zr(e.nodes_start,e.nodes_end),t=!0),Yr(e,n&&!t),Zn(e,0),De(e,ot);var r=e.transitions;if(r!==null)for(const s of r)s.stop();Jr(e);var o=e.parent;o!==null&&o.first!==null&&Qr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Zr(e,n){for(;e!==null;){var t=e===n?null:it(e);e.remove(),e=t}}function Qr(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function Kn(e,n){var t=[];Xt(e,t,!0),eo(t,()=>{ze(e),n&&n()})}function eo(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var o of e)o.out(r)}else n()}function Xt(e,n,t){if((e.f&Be)===0){if(e.f^=Be,e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&n.push(a);for(var r=e.first;r!==null;){var o=r.next,s=(r.f&Vt)!==0||(r.f&qe)!==0;Xt(r,n,s?t:!1),r=o}}}function Xn(e){no(e,!0)}function no(e,n){if((e.f&Be)!==0){e.f^=Be,(e.f&de)===0&&(e.f^=de),hn(e)&&(De(e,Pe),ft(e));for(var t=e.first;t!==null;){var r=t.next,o=(t.f&Vt)!==0||(t.f&qe)!==0;no(t,o?n:!1),t=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&s.in()}}let Wn=[];function Ks(){var e=Wn;Wn=[],Tt(e)}function Wt(e){Wn.length===0&&queueMicrotask(Ks),Wn.push(e)}let $n=!1,Ct=!1,Jn=null,nn=!1,On=!1;function yr(e){On=e}let Un=[];let $=null,Se=!1;function Oe(e){$=e}let j=null;function We(e){j=e}let fe=null;function to(e){$!==null&&$.f&kt&&(fe===null?fe=[e]:fe.push(e))}let ue=null,he=0,we=null;function Xs(e){we=e}let ro=1,Yn=0,Ge=!1;function oo(){return++ro}function hn(e){var _;var n=e.f;if((n&Pe)!==0)return!0;if((n&Je)!==0){var t=e.deps,r=(n&ye)!==0;if(t!==null){var o,s,a=(n&Gn)!==0,c=r&&j!==null&&!Ge,l=t.length;if(a||c){var u=e,p=u.parent;for(o=0;o<l;o++)s=t[o],(a||!((_=s==null?void 0:s.reactions)!=null&&_.includes(u)))&&(s.reactions??(s.reactions=[])).push(u);a&&(u.f^=Gn),c&&p!==null&&(p.f&ye)===0&&(u.f^=ye)}for(o=0;o<l;o++)if(s=t[o],hn(s)&&Ur(s),s.wv>e.wv)return!0}(!r||j!==null&&!Ge)&&De(e,de)}return!1}function Ws(e,n){for(var t=n;t!==null;){if((t.f&Hn)!==0)try{t.fn(e);return}catch{t.f^=Hn}t=t.parent}throw $n=!1,e}function wr(e){return(e.f&ot)===0&&(e.parent===null||(e.parent.f&Hn)===0)}function ct(e,n,t,r){if($n){if(t===null&&($n=!1),wr(n))throw e;return}if(t!==null&&($n=!0),Ws(e,n),wr(n))throw e}function so(e,n,t=!0){var r=e.reactions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];fe!=null&&fe.includes(e)||((s.f&Re)!==0?so(s,n,!1):n===s&&(t?De(s,Pe):(s.f&de)!==0&&De(s,Je),ft(s)))}}function io(e){var h;var n=ue,t=he,r=we,o=$,s=Ge,a=fe,c=K,l=Se,u=e.f;ue=null,he=0,we=null,Ge=(u&ye)!==0&&(Se||!nn||$===null),$=(u&(qe|mn))===0?e:null,fe=null,vr(e.ctx),Se=!1,Yn++,e.f|=kt;try{var p=(0,e.fn)(),_=e.deps;if(ue!==null){var f;if(Zn(e,he),_!==null&&he>0)for(_.length=he+ue.length,f=0;f<ue.length;f++)_[he+f]=ue[f];else e.deps=_=ue;if(!Ge)for(f=he;f<_.length;f++)((h=_[f]).reactions??(h.reactions=[])).push(e)}else _!==null&&he<_.length&&(Zn(e,he),_.length=he);if(Pn()&&we!==null&&!Se&&_!==null&&(e.f&(Re|Je|Pe))===0)for(f=0;f<we.length;f++)so(we[f],e);return o!==null&&o!==e&&(Yn++,we!==null&&(r===null?r=we:r.push(...we))),p}finally{ue=n,he=t,we=r,$=o,Ge=s,fe=a,vr(c),Se=l,e.f^=kt}}function Js(e,n){let t=n.reactions;if(t!==null){var r=ss.call(t,e);if(r!==-1){var o=t.length-1;o===0?t=n.reactions=null:(t[r]=t[o],t.pop())}}t===null&&(n.f&Re)!==0&&(ue===null||!ue.includes(n))&&(De(n,Je),(n.f&(ye|Gn))===0&&(n.f^=Gn),jr(n),Zn(n,0))}function Zn(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Js(e,t[r])}function ut(e){var n=e.f;if((n&ot)===0){De(e,de);var t=j,r=K,o=nn;j=e,nn=!0;try{(n&qt)!==0?Gs(e):Yr(e),Jr(e);var s=io(e);e.teardown=typeof s=="function"?s:null,e.wv=ro;var a=e.deps,c;mr&&xs&&e.f&Pe}catch(l){ct(l,e,t,r||e.ctx)}finally{nn=o,j=t}}}function Ys(){try{hs()}catch(e){if(Jn!==null)ct(e,Jn,null);else throw e}}function Zs(){var e=nn;try{var n=0;for(nn=!0;Un.length>0;){n++>1e3&&Ys();var t=Un,r=t.length;Un=[];for(var o=0;o<r;o++){var s=ei(t[o]);Qs(s)}kn.clear()}}finally{Ct=!1,nn=e,Jn=null}}function Qs(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(ot|Be))===0)try{hn(r)&&(ut(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Qr(r):r.fn=null))}catch(o){ct(o,r,null,r.ctx)}}}function ft(e){Ct||(Ct=!0,queueMicrotask(Zs));for(var n=Jn=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(mn|qe))!==0){if((t&de)===0)return;n.f^=de}}Un.push(n)}function ei(e){for(var n=[],t=e;t!==null;){var r=t.f,o=(r&(qe|mn))!==0,s=o&&(r&de)!==0;if(!s&&(r&Be)===0){if((r&Or)!==0)n.push(t);else if(o)t.f^=de;else try{hn(t)&&ut(t)}catch(l){ct(l,t,null,t.ctx)}var a=t.first;if(a!==null){t=a;continue}}var c=t.parent;for(t=t.next;t===null&&c!==null;)t=c.next,c=c.parent}return n}function w(e){var n=e.f,t=(n&Re)!==0;if($!==null&&!Se){if(!(fe!=null&&fe.includes(e))){var r=$.deps;e.rv<Yn&&(e.rv=Yn,ue===null&&r!==null&&r[he]===e?he++:ue===null?ue=[e]:(!Ge||!ue.includes(e))&&ue.push(e))}}else if(t&&e.deps===null&&e.effects===null){var o=e,s=o.parent;s!==null&&(s.f&ye)===0&&(o.f^=ye)}return t&&(o=e,hn(o)&&Ur(o)),On&&kn.has(e)?kn.get(e):e.v}function Sn(e){var n=Se;try{return Se=!0,e()}finally{Se=n}}const ni=-7169;function De(e,n){e.f=e.f&ni|n}function At(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(en in e)Pt(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&en in t&&Pt(t)}}}function Pt(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{Pt(e[r],n)}catch{}const t=zt(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=Pr(t);for(let o in r){const s=r[o].get;if(s)try{s.call(e)}catch{}}}}}function ti(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ri=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function oi(e){return ri.includes(e)}const si={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ii(e){return e=e.toLowerCase(),si[e]??e}const ai=["touchstart","touchmove"];function li(e){return ai.includes(e)}function ci(e,n){if(n){const t=document.body;e.autofocus=!0,Wt(()=>{document.activeElement===t&&e.focus()})}}let Dr=!1;function ui(){Dr||(Dr=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var n;if(!e.defaultPrevented)for(const t of e.target.elements)(n=t.__on_r)==null||n.call(t)})},{capture:!0}))}function ao(e){var n=$,t=j;Oe(null),We(null);try{return e()}finally{Oe(n),We(t)}}function fi(e,n,t,r=t){e.addEventListener(n,()=>ao(t));const o=e.__on_r;o?e.__on_r=()=>{o(),r(!0)}:e.__on_r=()=>r(!0),ui()}const lo=new Set,Ot=new Set;function di(e,n,t,r={}){function o(s){if(r.capture||Mn.call(n,s),!s.cancelBubble)return ao(()=>t==null?void 0:t.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Wt(()=>{n.addEventListener(e,o,r)}):n.addEventListener(e,o,r),o}function dt(e){for(var n=0;n<e.length;n++)lo.add(e[n]);for(var t of Ot)t(e)}function Mn(e){var V;var n=this,t=n.ownerDocument,r=e.type,o=((V=e.composedPath)==null?void 0:V.call(e))||[],s=o[0]||e.target,a=0,c=e.__root;if(c){var l=o.indexOf(c);if(l!==-1&&(n===document||n===window)){e.__root=n;return}var u=o.indexOf(n);if(u===-1)return;l<=u&&(a=l)}if(s=o[a]||e.target,s!==n){is(e,"currentTarget",{configurable:!0,get(){return s||t}});var p=$,_=j;Oe(null),We(null);try{for(var f,h=[];s!==null;){var b=s.assignedSlot||s.parentNode||s.host||null;try{var S=s["__"+r];if(S!=null&&(!s.disabled||e.target===s))if(tt(S)){var[F,...O]=S;F.apply(s,[e,...O])}else S.call(s,e)}catch(E){f?h.push(E):f=E}if(e.cancelBubble||b===n||b===null)break;s=b}if(f){for(let E of h)queueMicrotask(()=>{throw E});throw f}}finally{e.__root=n,delete e.currentTarget,Oe(p),We(_)}}}function Jt(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function _n(e,n){var t=j;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function _e(e,n){var t=(n&Cs)!==0,r=(n&As)!==0,o,s=!e.startsWith("<!>");return()=>{o===void 0&&(o=Jt(s?e:"<!>"+e),t||(o=Ce(o)));var a=r||Gr?document.importNode(o,!0):o.cloneNode(!0);if(t){var c=Ce(a),l=a.lastChild;_n(c,l)}else _n(a,a);return a}}function _t(e,n,t="svg"){var r=!e.startsWith("<!>"),o=`<${t}>${r?e:"<!>"+e}</${t}>`,s;return()=>{if(!s){var a=Jt(o),c=Ce(a);s=Ce(c)}var l=s.cloneNode(!0);return _n(l,l),l}}function It(e=""){{var n=st(e+"");return _n(n,n),n}}function Qn(){var e=document.createDocumentFragment(),n=document.createComment(""),t=st();return e.append(n,t),_n(n,t),e}function G(e,n){e!==null&&e.before(n)}function Ae(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function _i(e,n){return mi(e,n)}const an=new Map;function mi(e,{target:n,anchor:t,props:r={},events:o,context:s,intro:a=!0}){Bs();var c=new Set,l=_=>{for(var f=0;f<_.length;f++){var h=_[f];if(!c.has(h)){c.add(h);var b=li(h);n.addEventListener(h,Mn,{passive:b});var S=an.get(h);S===void 0?(document.addEventListener(h,Mn,{passive:b}),an.set(h,1)):an.set(h,S+1)}}};l(Bt(lo)),Ot.add(l);var u=void 0,p=$s(()=>{var _=t??n.appendChild(st());return dn(()=>{if(s){pn({});var f=K;f.c=s}o&&(r.$$events=o),u=e(_,r)||{},s&&vn()}),()=>{var b;for(var f of c){n.removeEventListener(f,Mn);var h=an.get(f);--h===0?(document.removeEventListener(f,Mn),an.delete(f)):an.set(f,h)}Ot.delete(l),_!==t&&((b=_.parentNode)==null||b.removeChild(_))}});return pi.set(u,p),u}let pi=new WeakMap;function Ue(e,n,[t,r]=[0,0]){var o=e,s=null,a=null,c=pe,l=t>0?Vt:0,u=!1;const p=(f,h=!0)=>{u=!0,_(h,f)},_=(f,h)=>{c!==(c=f)&&(c?(s?Xn(s):h&&(s=dn(()=>h(o))),a&&Kn(a,()=>{a=null})):(a?Xn(a):h&&(a=dn(()=>h(o,[t+1,r]))),s&&Kn(s,()=>{s=null})))};lt(()=>{u=!1,n(p),u||_(null,null)},l)}function Nn(e,n){return n}function vi(e,n,t,r){for(var o=[],s=n.length,a=0;a<s;a++)Xt(n[a].e,o,!0);var c=s>0&&o.length===0&&t!==null;if(c){var l=t.parentNode;zs(l),l.append(t),r.clear(),He(e,n[0].prev,n[s-1].next)}eo(o,()=>{for(var u=0;u<s;u++){var p=n[u];c||(r.delete(p.k),He(e,p.prev,p.next)),ze(p.e,!c)}})}function Tn(e,n,t,r,o,s=null){var a=e,c={flags:n,items:new Map,first:null},l=(n&zr)!==0;if(l){var u=e;a=u.appendChild(st())}var p=null,_=!1,f=Ht(()=>{var h=t();return tt(h)?h:h==null?[]:Bt(h)});lt(()=>{var h=w(f),b=h.length;_&&b===0||(_=b===0,gi(h,c,a,o,n,r,t),s!==null&&(b===0?p?Xn(p):p=dn(()=>s(a)):p!==null&&Kn(p,()=>{p=null})),w(f))})}function gi(e,n,t,r,o,s,a){var me,Ee,Ve,Me;var c=(o&Ms)!==0,l=(o&($t|Ut))!==0,u=e.length,p=n.items,_=n.first,f=_,h,b=null,S,F=[],O=[],V,E,x,v;if(c)for(v=0;v<u;v+=1)V=e[v],E=s(V,v),x=p.get(E),x!==void 0&&((me=x.a)==null||me.measure(),(S??(S=new Set)).add(x));for(v=0;v<u;v+=1){if(V=e[v],E=s(V,v),x=p.get(E),x===void 0){var P=f?f.e.nodes_start:t;b=bi(P,n,b,b===null?n.first:b.next,V,E,v,r,o,a),p.set(E,b),F=[],O=[],f=b.next;continue}if(l&&hi(x,V,v,o),(x.e.f&Be)!==0&&(Xn(x.e),c&&((Ee=x.a)==null||Ee.unfix(),(S??(S=new Set)).delete(x))),x!==f){if(h!==void 0&&h.has(x)){if(F.length<O.length){var R=O[0],L;b=R.prev;var X=F[0],ee=F[F.length-1];for(L=0;L<F.length;L+=1)Er(F[L],R,t);for(L=0;L<O.length;L+=1)h.delete(O[L]);He(n,X.prev,ee.next),He(n,b,X),He(n,ee,R),f=R,b=ee,v-=1,F=[],O=[]}else h.delete(x),Er(x,f,t),He(n,x.prev,x.next),He(n,x,b===null?n.first:b.next),He(n,b,x),b=x;continue}for(F=[],O=[];f!==null&&f.k!==E;)(f.e.f&Be)===0&&(h??(h=new Set)).add(f),O.push(f),f=f.next;if(f===null)continue;x=f}F.push(x),b=x,f=x.next}if(f!==null||h!==void 0){for(var ne=h===void 0?[]:Bt(h);f!==null;)(f.e.f&Be)===0&&ne.push(f),f=f.next;var se=ne.length;if(se>0){var le=(o&zr)!==0&&u===0?t:null;if(c){for(v=0;v<se;v+=1)(Ve=ne[v].a)==null||Ve.measure();for(v=0;v<se;v+=1)(Me=ne[v].a)==null||Me.fix()}vi(n,ne,le,p)}}c&&Wt(()=>{var ie;if(S!==void 0)for(x of S)(ie=x.a)==null||ie.apply()}),j.first=n.first&&n.first.e,j.last=b&&b.e}function hi(e,n,t,r){(r&$t)!==0&&St(e.v,n),(r&Ut)!==0?St(e.i,t):e.i=t}function bi(e,n,t,r,o,s,a,c,l,u){var p=(l&$t)!==0,_=(l&Fs)===0,f=p?_?Gt(o):fn(o):o,h=(l&Ut)===0?a:fn(a),b={i:h,v:f,k:s,a:null,e:null,prev:t,next:r};try{return b.e=dn(()=>c(e,f,h,u),Ls),b.e.prev=t&&t.e,b.e.next=r&&r.e,t===null?n.first=b:(t.next=b,t.e.next=b.e),r!==null&&(r.prev=b,r.e.prev=b.e),b}finally{}}function Er(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,o=n?n.e.nodes_start:t,s=e.e.nodes_start;s!==r;){var a=it(s);o.before(s),s=a}}function He(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function yi(e,n,t=!1,r=!1,o=!1){var s=e,a="";ve(()=>{var c=j;if(a!==(a=n()??"")&&(c.nodes_start!==null&&(Zr(c.nodes_start,c.nodes_end),c.nodes_start=c.nodes_end=null),a!=="")){var l=a+"";t?l=`<svg>${l}</svg>`:r&&(l=`<math>${l}</math>`);var u=Jt(l);if((t||r)&&(u=Ce(u)),_n(Ce(u),u.lastChild),t||r)for(;Ce(u);)s.before(Ce(u));else s.before(u)}})}function wi(e,n,t,r,o){var c;var s=(c=n.$$slots)==null?void 0:c[t],a=!1;s===!0&&(s=n.children,a=!0),s===void 0?o!==null&&o(e):s(e,a?()=>r:r)}function Di(e,n){var t=void 0,r;lt(()=>{t!==(t=n())&&(r&&(ze(r),r=null),t&&(r=dn(()=>{Kt(()=>t(e))})))})}function co(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(n=0;n<o;n++)e[n]&&(t=co(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Ei(){for(var e,n,t=0,r="",o=arguments.length;t<o;t++)(e=arguments[t])&&(n=co(e))&&(r&&(r+=" "),r+=n);return r}function uo(e){return typeof e=="object"?Ei(e):e??""}const xr=[...` 	
\r\f \v\uFEFF`];function xi(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var o in t)if(t[o])r=r?r+" "+o:o;else if(r.length)for(var s=o.length,a=0;(a=r.indexOf(o,a))>=0;){var c=a+s;(a===0||xr.includes(r[a-1]))&&(c===r.length||xr.includes(r[c]))?r=(a===0?"":r.substring(0,a))+r.substring(c+1):a=c}}return r===""?null:r}function Rr(e,n=!1){var t=n?" !important;":";",r="";for(var o in e){var s=e[o];s!=null&&s!==""&&(r+=" "+o+": "+s+t)}return r}function xt(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Ri(e,n){if(n){var t="",r,o;if(Array.isArray(n)?(r=n[0],o=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,a=0,c=!1,l=[];r&&l.push(...Object.keys(r).map(xt)),o&&l.push(...Object.keys(o).map(xt));var u=0,p=-1;const S=e.length;for(var _=0;_<S;_++){var f=e[_];if(c?f==="/"&&e[_-1]==="*"&&(c=!1):s?s===f&&(s=!1):f==="/"&&e[_+1]==="*"?c=!0:f==='"'||f==="'"?s=f:f==="("?a++:f===")"&&a--,!c&&s===!1&&a===0){if(f===":"&&p===-1)p=_;else if(f===";"||_===S-1){if(p!==-1){var h=xt(e.substring(u,p).trim());if(!l.includes(h)){f!==";"&&_++;var b=e.substring(u,_).trim();t+=" "+b+";"}}u=_+1,p=-1}}}}return r&&(t+=Rr(r)),o&&(t+=Rr(o,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Cn(e,n,t,r,o,s){var a=e.__className;if(a!==t||a===void 0){var c=xi(t,r,s);c==null?e.removeAttribute("class"):n?e.className=c:e.setAttribute("class",c),e.__className=t}else if(s&&o!==s)for(var l in s){var u=!!s[l];(o==null||u!==!!o[l])&&e.classList.toggle(l,u)}return s}function Rt(e,n={},t,r){for(var o in t){var s=t[o];n[o]!==s&&(t[o]==null?e.style.removeProperty(o):e.style.setProperty(o,s,r))}}function Yt(e,n,t,r){var o=e.__style;if(o!==n){var s=Ri(n,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=n}else r&&(Array.isArray(r)?(Rt(e,t==null?void 0:t[0],r[0]),Rt(e,t==null?void 0:t[1],r[1],"important")):Rt(e,t,r));return r}const Fn=Symbol("class"),Rn=Symbol("style"),fo=Symbol("is custom element"),_o=Symbol("is html");function Mi(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function et(e,n,t,r){var o=mo(e);o[n]!==(o[n]=t)&&(n==="loading"&&(e[_s]=t),t==null?e.removeAttribute(n):typeof t!="string"&&po(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function Fi(e,n,t,r,o=!1){var s=mo(e),a=s[fo],c=!s[_o],l=n||{},u=e.tagName==="OPTION";for(var p in n)p in t||(t[p]=null);t.class?t.class=uo(t.class):t.class=null,t[Rn]&&(t.style??(t.style=null));var _=po(e);for(const E in t){let x=t[E];if(u&&E==="value"&&x==null){e.value=e.__value="",l[E]=x;continue}if(E==="class"){var f=e.namespaceURI==="http://www.w3.org/1999/xhtml";Cn(e,f,x,r,n==null?void 0:n[Fn],t[Fn]),l[E]=x,l[Fn]=t[Fn];continue}if(E==="style"){Yt(e,x,n==null?void 0:n[Rn],t[Rn]),l[E]=x,l[Rn]=t[Rn];continue}var h=l[E];if(x!==h){l[E]=x;var b=E[0]+E[1];if(b!=="$$")if(b==="on"){const v={},P="$$"+E;let R=E.slice(2);var S=oi(R);if(ti(R)&&(R=R.slice(0,-7),v.capture=!0),!S&&h){if(x!=null)continue;e.removeEventListener(R,l[P],v),l[P]=null}if(x!=null)if(S)e[`__${R}`]=x,dt([R]);else{let L=function(X){l[E].call(this,X)};var V=L;l[P]=di(R,e,L,v)}else S&&(e[`__${R}`]=void 0)}else if(E==="style")et(e,E,x);else if(E==="autofocus")ci(e,!!x);else if(!a&&(E==="__value"||E==="value"&&x!=null))e.value=e.__value=x;else if(E==="selected"&&u)Mi(e,x);else{var F=E;c||(F=ii(F));var O=F==="defaultValue"||F==="defaultChecked";if(x==null&&!a&&!O)if(s[E]=null,F==="value"||F==="checked"){let v=e;const P=n===void 0;if(F==="value"){let R=v.defaultValue;v.removeAttribute(F),v.defaultValue=R,v.value=v.__value=P?R:null}else{let R=v.defaultChecked;v.removeAttribute(F),v.defaultChecked=R,v.checked=P?R:!1}}else e.removeAttribute(E);else O||_.includes(F)&&(a||typeof x!="string")?e[F]=x:typeof x!="function"&&et(e,F,x)}}}for(let E of Object.getOwnPropertySymbols(t))E.description===Os&&Di(e,()=>t[E]);return l}function mo(e){return e.__attributes??(e.__attributes={[fo]:e.nodeName.includes("-"),[_o]:e.namespaceURI===Ps})}var Mr=new Map;function po(e){var n=Mr.get(e.nodeName);if(n)return n;Mr.set(e.nodeName,n=[]);for(var t,r=e,o=Element.prototype;o!==r;){t=Pr(r);for(var s in t)t[s].set&&n.push(s);r=zt(r)}return n}function Ni(e,n,t=n){var r=Pn();fi(e,"input",o=>{var s=o?e.defaultValue:e.value;if(s=Mt(e)?Ft(s):s,t(s),r&&s!==(s=n())){var a=e.selectionStart,c=e.selectionEnd;e.value=s??"",c!==null&&(e.selectionStart=a,e.selectionEnd=Math.min(c,e.value.length))}}),Sn(n)==null&&e.value&&t(Mt(e)?Ft(e.value):e.value),at(()=>{var o=n();Mt(e)&&o===Ft(e.value)||e.type==="date"&&!o&&!e.value||o!==e.value&&(e.value=o??"")})}function Mt(e){var n=e.type;return n==="number"||n==="range"}function Ft(e){return e===""?null:+e}function vo(e=!1){const n=K,t=n.l.u;if(!t)return;let r=()=>At(n.s);if(e){let o=0,s={};const a=un(()=>{let c=!1;const l=n.s;for(const u in l)l[u]!==s[u]&&(s[u]=l[u],c=!0);return c&&o++,o});r=()=>w(a)}t.b.length&&js(()=>{Fr(n,r),Tt(t.b)}),br(()=>{const o=Sn(()=>t.m.map(cs));return()=>{for(const s of o)typeof s=="function"&&s()}}),t.a.length&&br(()=>{Fr(n,r),Tt(t.a)})}function Fr(e,n){if(e.l.s)for(const t of e.l.s)w(t);n()}let jn=!1;function Ti(e){var n=jn;try{return jn=!1,[e(),jn]}finally{jn=n}}const ki={get(e,n){if(!e.exclude.includes(n))return w(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=Ke({get[n](){return e.props[n]}},n,qr)),e.special[n](t),gr(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),gr(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function nt(e,n){return new Proxy({props:e,exclude:n,special:{},version:fn(0)},ki)}const Si={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(xn(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let o=e.props[r];xn(o)&&(o=o());const s=Xe(o,n);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(xn(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const o=Xe(r,n);return o&&!o.configurable&&(o.configurable=!0),o}}},has(e,n){if(n===en||n===Lr)return!1;for(let t of e.props)if(xn(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(xn(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function Ci(...e){return new Proxy({props:e},Si)}function Nr(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function Ke(e,n,t,r){var P;var o=(t&Ns)!==0,s=!An||(t&Ts)!==0,a=(t&ks)!==0,c=(t&Ss)!==0,l=!1,u;a?[u,l]=Ti(()=>e[n]):u=e[n];var p=en in e||Lr in e,_=a&&(((P=Xe(e,n))==null?void 0:P.set)??(p&&n in e&&(R=>e[n]=R)))||void 0,f=r,h=!0,b=!1,S=()=>(b=!0,h&&(h=!1,c?f=Sn(r):f=r),f);u===void 0&&r!==void 0&&(_&&s&&ys(),u=S(),_&&_(u));var F;if(s)F=()=>{var R=e[n];return R===void 0?S():(h=!0,b=!1,R)};else{var O=(o?un:Ht)(()=>e[n]);O.f|=fs,F=()=>{var R=w(O);return R!==void 0&&(f=void 0),R===void 0?f:R}}if((t&qr)===0)return F;if(_){var V=e.$$legacy;return function(R,L){return arguments.length>0?((!s||!L||V||l)&&_(L?F():R),R):F()}}var E=!1,x=Gt(u),v=un(()=>{var R=F(),L=w(x);return E?(E=!1,L):x.v=R});return a&&w(v),o||(v.equals=jt),function(R,L){if(arguments.length>0){const X=L?w(v):s&&a?Le(R):R;if(!v.equals(X)){if(E=!0,Z(x,X),b&&f!==void 0&&(f=X),Nr(v))return R;Sn(()=>w(v))}return R}return Nr(v)?v.v:w(v)}}function Ai(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function Pi(){const e=K;return e===null&&Vr(),(n,t,r)=>{var s;const o=(s=e.s.$$events)==null?void 0:s[n];if(o){const a=tt(o)?o.slice():[o],c=Ai(n,t,r);for(const l of a)l.call(e.x,c);return!c.defaultPrevented}return!0}}function Oi(e){K===null&&Vr(),K.l===null&&bs(),Ii(K).a.push(e)}function Ii(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Li="5";var Ar;typeof window<"u"&&((Ar=window.__svelte??(window.__svelte={})).v??(Ar.v=new Set)).add(Li);const Bi={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:203.99039336268697,FiniteDifferences:95.4749675927548,ForwardDiff:2.375570976296452,MooncakeFwd:21.973713033954,MooncakeRvs:7.06412101217843,ReverseDiff:"error",ReverseDiffCompiled:"error"},zi={__category__:"Distributions",EnzymeFwd:2.885829179850078,EnzymeRvs:1.2475372854975668,FiniteDifferences:42.32316357263183,ForwardDiff:2.2128665304235957,MooncakeFwd:5.337701960307324,MooncakeRvs:3.2720138106665364,ReverseDiff:68.82098432496208,ReverseDiffCompiled:5.613689355214779},qi={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:"error",FiniteDifferences:62.732736796814024,ForwardDiff:1.1497903782112275,MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:"error",ReverseDiffCompiled:"error"},Vi={__category__:"DynamicPPL demo models",EnzymeFwd:4.2523344188636,EnzymeRvs:1.7010163180790636,FiniteDifferences:100.14218301189986,ForwardDiff:3.5584881350960424,MooncakeFwd:11.041614757908645,MooncakeRvs:6.13860488972474,ReverseDiff:195.62986258289467,ReverseDiffCompiled:18.176618778860952},ji={__category__:"DynamicPPL demo models",EnzymeFwd:3.1577752097436,EnzymeRvs:1.4282338373375907,FiniteDifferences:86.31013234367342,ForwardDiff:3.6958927065247815,MooncakeFwd:10.081422197796327,MooncakeRvs:5.9260127190891385,ReverseDiff:155.7337777314863,ReverseDiffCompiled:14.22058509578435},$i={__category__:"DynamicPPL demo models",EnzymeFwd:8.78601830018834,EnzymeRvs:18.615062471878996,FiniteDifferences:97.52047459586258,ForwardDiff:1.9602519797165883,MooncakeFwd:14.076624511618343,MooncakeRvs:4.709604243413506,ReverseDiff:90.71955155427212,ReverseDiffCompiled:8.285090551152324},Ui={__category__:"DynamicPPL demo models",EnzymeFwd:9.867221753398969,EnzymeRvs:18.16710780165849,FiniteDifferences:82.50303410755389,ForwardDiff:1.4736934966891309,MooncakeFwd:16.09103481996298,MooncakeRvs:6.64811495377807,ReverseDiff:59.263032501244574,ReverseDiffCompiled:5.883804347826087},Hi={__category__:"DynamicPPL demo models",EnzymeFwd:11.537732218451529,EnzymeRvs:18.667383292383292,FiniteDifferences:107.69921955226947,ForwardDiff:1.3166472164029905,MooncakeFwd:17.73054587688734,MooncakeRvs:6.737945935447848,ReverseDiff:65.34231475811389,ReverseDiffCompiled:5.326974114389015},Gi={__category__:"DynamicPPL demo models",EnzymeFwd:10.780792841454991,EnzymeRvs:18.210581574112265,FiniteDifferences:86.62589977377115,ForwardDiff:1.4565742186081971,MooncakeFwd:15.883051610626362,MooncakeRvs:6.091118102613747,ReverseDiff:67.50991471589512,ReverseDiffCompiled:6.483220724833521},Ki={__category__:"DynamicPPL demo models",EnzymeFwd:4.371572534265382,EnzymeRvs:1.490359888609079,FiniteDifferences:100.54405104748999,ForwardDiff:2.434672695009602,MooncakeFwd:11.701480893160548,MooncakeRvs:5.869599329620539,ReverseDiff:209.10869490653405,ReverseDiffCompiled:19.654606319385138},Xi={__category__:"DynamicPPL demo models",EnzymeFwd:6.639722433781839,EnzymeRvs:10.507296413939143,FiniteDifferences:87.22941620805007,ForwardDiff:1.4054139559754033,MooncakeFwd:14.886542040948449,MooncakeRvs:4.290688831667844,ReverseDiff:72.21684771469565,ReverseDiffCompiled:8.243174071359602},Wi={__category__:"DynamicPPL demo models",EnzymeFwd:9.36580876086586,EnzymeRvs:16.077611940298507,FiniteDifferences:81.88214587916738,ForwardDiff:1.4337646466824816,MooncakeFwd:15.246744937893483,MooncakeRvs:5.951235655398632,ReverseDiff:65.63688469318947,ReverseDiffCompiled:6.493841505926099},Ji={__category__:"Distributions",EnzymeFwd:6.150589690994111,EnzymeRvs:9.769632282054813,FiniteDifferences:31.830001033271337,ForwardDiff:1.2127840538452017,MooncakeFwd:4.404417191846931,MooncakeRvs:6.168570285256959,ReverseDiff:22.041433075379764,ReverseDiffCompiled:3.7486924189583717},Yi={__category__:"DynamicPPL demo models",EnzymeFwd:6.985891917742707,EnzymeRvs:12.506397890634844,FiniteDifferences:82.2536869118905,ForwardDiff:1.3780739707752363,MooncakeFwd:13.589713058298894,MooncakeRvs:5.357146946018661,ReverseDiff:56.3099978122949,ReverseDiffCompiled:7.203357784489859},Zi={__category__:"DynamicPPL demo models",EnzymeFwd:7.486575249703741,EnzymeRvs:8.798008110687023,FiniteDifferences:68.5482767410349,ForwardDiff:1.4681970349115254,MooncakeFwd:14.365541543480225,MooncakeRvs:5.449384386415911,ReverseDiff:77.90862276761258,ReverseDiffCompiled:7.992350885459615},Qi={__category__:"DynamicPPL demo models",EnzymeFwd:8.447681159420291,EnzymeRvs:16.21274301811985,FiniteDifferences:79.3211732291703,ForwardDiff:1.0361224198271552,MooncakeFwd:15.434027294248711,MooncakeRvs:6.077767099151049,ReverseDiff:57.522905126176035,ReverseDiffCompiled:5.726331769252002},ea={__category__:"DynamicPPL demo models",EnzymeFwd:9.710401150785364,EnzymeRvs:16.882253713505207,FiniteDifferences:81.02914885347842,ForwardDiff:1.3713043173289376,MooncakeFwd:15.386443017878097,MooncakeRvs:6.199052039588398,ReverseDiff:67.31620111731844,ReverseDiffCompiled:6.166986132959669},na={__category__:"Core Turing syntax",EnzymeFwd:4.520301553721302,EnzymeRvs:.9948468989579031,FiniteDifferences:177.49275115128773,ForwardDiff:2.1366863249598826,MooncakeFwd:23.38895777364469,MooncakeRvs:5.297313740592997,ReverseDiff:118.99004240359525,ReverseDiffCompiled:10.991630912821746},ta={__category__:"Core Turing syntax",EnzymeFwd:19.905479473527457,EnzymeRvs:3.5420838838857995,FiniteDifferences:241.969412396029,ForwardDiff:7.292378176185645,MooncakeFwd:23.059853341710852,MooncakeRvs:23.75609710896961,ReverseDiff:921.1326348070534,ReverseDiffCompiled:77.83922387215954},ra={__category__:"DynamicPPL arXiV paper",EnzymeFwd:7.879801411026914,EnzymeRvs:7.009598976109214,FiniteDifferences:22.30981308411215,ForwardDiff:4.8623029772329245,MooncakeFwd:5.795948434622468,MooncakeRvs:38.47350107066381,ReverseDiff:909.2686577603691,ReverseDiffCompiled:117.50785942492013},oa={__category__:"DynamicPPL arXiV paper",EnzymeFwd:6.2844122458518346,EnzymeRvs:1.4227827450315693,FiniteDifferences:180.11788935444926,ForwardDiff:5.5389712168709035,MooncakeFwd:31.42995829138501,MooncakeRvs:6.55875385830163,ReverseDiff:87.30607866507748,ReverseDiffCompiled:7.213728439981807},sa={__category__:"DynamicPPL arXiV paper",EnzymeFwd:13618.48979363749,EnzymeRvs:5.910774638366906,FiniteDifferences:134172.25848489188,ForwardDiff:16437.11776539771,MooncakeFwd:34244.55036403478,MooncakeRvs:23.94134518858454,ReverseDiff:586.4037726838586,ReverseDiffCompiled:101.3940294073964},ia={__category__:"DynamicPPL arXiV paper",EnzymeFwd:74.05619469026549,EnzymeRvs:11.124418567003744,FiniteDifferences:"NaN",ForwardDiff:26.389112125321073,MooncakeFwd:5974.486042666144,MooncakeRvs:5.76698095160012,ReverseDiff:1493.0673000049624,ReverseDiffCompiled:10.382752899390525},aa={__category__:"Distributions",EnzymeFwd:4.218440235459176,EnzymeRvs:19.48961093292428,FiniteDifferences:160.60951773953684,ForwardDiff:3.6446168409872786,MooncakeFwd:23.073536493086607,MooncakeRvs:4.8497374187041355,ReverseDiff:63.15389136673236,ReverseDiffCompiled:7.522490872769857},la={__category__:"DynamicPPL arXiV paper",EnzymeFwd:133.09873337219778,EnzymeRvs:1.7025643340275585,FiniteDifferences:6866.29061281871,ForwardDiff:150.5294458026531,MooncakeFwd:465.98368545450955,MooncakeRvs:9.257219796922607,ReverseDiff:79.57791575833075,ReverseDiffCompiled:12.517591968953461},ca={__category__:"DynamicPPL arXiV paper",EnzymeFwd:43.202734822084814,EnzymeRvs:3.871579422516243,FiniteDifferences:1042.4941152888389,ForwardDiff:62.928313513436905,MooncakeFwd:161.41480095720823,MooncakeRvs:4.063041915872139,ReverseDiff:57.06894375036487,ReverseDiffCompiled:11.137996197890734},ua={__category__:"DynamicPPL arXiV paper",EnzymeFwd:178.24557197182133,EnzymeRvs:.9531368768486389,FiniteDifferences:2893.1246639934807,ForwardDiff:147.61369456004329,MooncakeFwd:417.7536424727137,MooncakeRvs:4.306127833644463,ReverseDiff:144.8154921543545,ReverseDiffCompiled:28.433380549027888},fa={__category__:"DynamicPPL arXiV paper",EnzymeFwd:106.82715576238708,EnzymeRvs:4.62346356453029,FiniteDifferences:8957.906466894348,ForwardDiff:148.99673983916537,MooncakeFwd:1300.9044109528543,MooncakeRvs:4.861880267046076,ReverseDiff:202.36745060192004,ReverseDiffCompiled:22.27361203273612},da={__category__:"Core Turing syntax",EnzymeFwd:3.429444426981541,EnzymeRvs:2.238772862848492,FiniteDifferences:78.30971487109443,ForwardDiff:1.5709769775678868,MooncakeFwd:9.206607112554845,MooncakeRvs:4.32068618627185,ReverseDiff:104.65380684721512,ReverseDiffCompiled:10.399329861703945},_a={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:19.174856194373696,FiniteDifferences:255.54080707322603,ForwardDiff:3.7341934244645776,MooncakeFwd:50.846471113299884,MooncakeRvs:18.064867684994642,ReverseDiff:72.3026033889502,ReverseDiffCompiled:26.04797598843422},ma={__category__:"Core Turing syntax",EnzymeFwd:3.4463308290850554,EnzymeRvs:3.6893621552550315,FiniteDifferences:64.79703703703704,ForwardDiff:1.1906213857638523,MooncakeFwd:9.519331863659488,MooncakeRvs:3.6385047987876744,ReverseDiff:24.14824424839993,ReverseDiffCompiled:2.7225296133647823},pa={__category__:"Base Julia features",EnzymeFwd:5.1087775803961275,EnzymeRvs:17.73525831755477,FiniteDifferences:13.512758973634984,ForwardDiff:1.028170055452865,MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:"error",ReverseDiffCompiled:"error"},va={__category__:"Effect of model size",EnzymeFwd:2.6171452026680346,EnzymeRvs:.8125750076102232,FiniteDifferences:250.39506426735218,ForwardDiff:3.842100395105915,MooncakeFwd:40.41450308275355,MooncakeRvs:6.047158220502901,ReverseDiff:121.35810465314471,ReverseDiffCompiled:11.747802088636673},ga={__category__:"Effect of model size",EnzymeFwd:9.832064782956245,EnzymeRvs:.5823416484520464,FiniteDifferences:767.8513093427945,ForwardDiff:21.197470817120625,MooncakeFwd:171.1812070359887,MooncakeRvs:4.972414496498266,ReverseDiff:136.0486296993455,ReverseDiffCompiled:11.842198881924446},ha={__category__:"Distributions",EnzymeFwd:"error",EnzymeRvs:4.5567747600236705,FiniteDifferences:31.132030494524034,ForwardDiff:.7332262289917332,MooncakeFwd:16.67387068554159,MooncakeRvs:9.595250110512582,ReverseDiff:12.758753370196043,ReverseDiffCompiled:1.0009639364178797},ba={__category__:"Effect of model size",EnzymeFwd:21.02194436437014,EnzymeRvs:.6117678202347862,FiniteDifferences:1386.675194052695,ForwardDiff:44.76472366873845,MooncakeFwd:384.87082412914185,MooncakeRvs:5.556595426082222,ReverseDiff:139.5368141886292,ReverseDiffCompiled:12.581352217164053},ya={__category__:"Effect of model size",EnzymeFwd:151.25199556749246,EnzymeRvs:.8280330650110097,FiniteDifferences:7004.812921990236,ForwardDiff:185.0253978369665,MooncakeFwd:1882.7532712057819,MooncakeRvs:6.005311693102176,ReverseDiff:137.86089846196674,ReverseDiffCompiled:15.067418289488671},wa={__category__:"Distributions",EnzymeFwd:2.598901098901099,EnzymeRvs:1.8294669789712963,FiniteDifferences:34.423734195157905,ForwardDiff:1.8689023390819497,MooncakeFwd:4.5636129864162855,MooncakeRvs:3.6850905475125115,ReverseDiff:67.22208992459036,ReverseDiffCompiled:7.408543441435691},Da={__category__:"Distributions",EnzymeFwd:1.8905783328808035,EnzymeRvs:6.796903318116781,FiniteDifferences:20.994285318463618,ForwardDiff:1.2267369128380359,MooncakeFwd:4.3527938438871905,MooncakeRvs:7.275611302938482,ReverseDiff:26.117661816357252,ReverseDiffCompiled:4.028398396269199},Ea={__category__:"Core Turing syntax",EnzymeFwd:18.589549490981135,EnzymeRvs:3.7330089793164065,FiniteDifferences:250.86342811431896,ForwardDiff:7.451860469024334,MooncakeFwd:22.693316825674266,MooncakeRvs:22.163931872904342,ReverseDiff:907.7171396223661,ReverseDiffCompiled:78.76280699693116},xa={__category__:"Core Turing syntax",EnzymeFwd:40.44267345244365,EnzymeRvs:6.553647202284674,FiniteDifferences:545.5158429945001,ForwardDiff:9.243201701160153,MooncakeFwd:43.323120160192374,MooncakeRvs:29.061890638944885,ReverseDiff:1249.2077820229238,ReverseDiffCompiled:113.78033901015431},Ra={__category__:"Core Turing syntax",EnzymeFwd:3.553513850847693,EnzymeRvs:12.899925300904822,FiniteDifferences:81.19958355304968,ForwardDiff:1.6895489831269648,MooncakeFwd:13.159810320462029,MooncakeRvs:5.671295182792743,ReverseDiff:100.77729641914304,ReverseDiffCompiled:9.057590002413354},Ma={__category__:"Core Turing syntax",EnzymeFwd:35.33452101237519,EnzymeRvs:6.92576194647245,FiniteDifferences:540.3070494992622,ForwardDiff:11.434916919939033,MooncakeFwd:46.286763857768904,MooncakeRvs:29.056858253161444,ReverseDiff:1116.0528823249167,ReverseDiffCompiled:98.14561298882536},Fa={__category__:"Distributions",EnzymeFwd:"error",EnzymeRvs:"error",FiniteDifferences:29.502107824656402,ForwardDiff:"NaN",MooncakeFwd:4.9785056294779935,MooncakeRvs:3.6274539414074294,ReverseDiff:"NaN",ReverseDiffCompiled:5.47490230134607},Na={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:66.6001960069859,FiniteDifferences:53.480640426951304,ForwardDiff:7.328097930154098,MooncakeFwd:"error",MooncakeRvs:55.370775341321256,ReverseDiff:"error",ReverseDiffCompiled:"error"},Ta={__category__:"Distributions",EnzymeFwd:40.87779771070654,EnzymeRvs:7.200766787427266,FiniteDifferences:521.5430510639997,ForwardDiff:9.197437398492248,MooncakeFwd:41.48761970251213,MooncakeRvs:24.184346079708284,ReverseDiff:733.7265887662362,ReverseDiffCompiled:63.04636617608161},ka={__category__:"PosteriorDB",EnzymeFwd:3.3937417241619627,EnzymeRvs:7.014661578630247,FiniteDifferences:62.45979373295926,ForwardDiff:4.110895481009149,MooncakeFwd:11.436363636363636,MooncakeRvs:17.610600016282667,ReverseDiff:605.2312520058482,ReverseDiffCompiled:80.71299312341658},Sa={__category__:"PosteriorDB",EnzymeFwd:8.068181818181818,EnzymeRvs:13.232558139534884,FiniteDifferences:46.44494526722473,ForwardDiff:2.9234808702175545,MooncakeFwd:9.135904499540864,MooncakeRvs:45.64285714285714,ReverseDiff:646.6678095238095,ReverseDiffCompiled:72.93002315410342},Ca={__category__:"PosteriorDB",EnzymeFwd:3.0004268032437045,EnzymeRvs:3.78869286287089,FiniteDifferences:12.520917062477166,ForwardDiff:.7106144580122862,MooncakeFwd:8.190935795216113,MooncakeRvs:24.41558441558442,ReverseDiff:77.54857080075442,ReverseDiffCompiled:60.11229946524064},Aa={__category__:"PosteriorDB",EnzymeFwd:5.740695522254928,EnzymeRvs:2.916838396596424,FiniteDifferences:245.55964503195716,ForwardDiff:3.947714435983627,MooncakeFwd:32.67138713530114,MooncakeRvs:5.646662657847265,ReverseDiff:175.2710081144272,ReverseDiffCompiled:17.331057785133083},Pa={__category__:"PosteriorDB",EnzymeFwd:5.52852880236275,EnzymeRvs:2.8754372700236908,FiniteDifferences:256.15539018228986,ForwardDiff:6.313755352840293,MooncakeFwd:34.11831367439309,MooncakeRvs:5.758043515504539,ReverseDiff:207.32001940491594,ReverseDiffCompiled:18.484844613683823},Oa={__category__:"PosteriorDB",EnzymeFwd:1.4335037297890871,EnzymeRvs:1.8477609108159394,FiniteDifferences:51.765815176558974,ForwardDiff:2.3183727034120736,MooncakeFwd:7.020939038243089,MooncakeRvs:4.01979940564636,ReverseDiff:303.5801315789474,ReverseDiffCompiled:31.07778072736926},Ia={__category__:"PosteriorDB",EnzymeFwd:3.3144754316069056,EnzymeRvs:5.565525961577681,FiniteDifferences:14.26665138140548,ForwardDiff:.5884335357517565,MooncakeFwd:7.487034277198212,MooncakeRvs:14.358823758216968,ReverseDiff:220.95314760077986,ReverseDiffCompiled:55.153267267714774},La={__category__:"PosteriorDB",EnzymeFwd:30.974560613956136,EnzymeRvs:2.2144186046511627,FiniteDifferences:927.0566894815996,ForwardDiff:44.0795889771135,MooncakeFwd:172.3685606060606,MooncakeRvs:8.668814192343604,ReverseDiff:376.9181267773599,ReverseDiffCompiled:43.93250688705234},Ba={__category__:"PosteriorDB",EnzymeFwd:26.78992287917738,EnzymeRvs:2.376558030366006,FiniteDifferences:904.5792829231509,ForwardDiff:33.2936528167219,MooncakeFwd:127.39295986851116,MooncakeRvs:6.475956584461084,ReverseDiff:347.0484785972151,ReverseDiffCompiled:37.5571448218952},za={__category__:"PosteriorDB",EnzymeFwd:6.987122509198208,EnzymeRvs:3.2525382929223654,FiniteDifferences:47.05302949632627,ForwardDiff:10.123930099857345,MooncakeFwd:25.685561497326205,MooncakeRvs:11.413629668794139,ReverseDiff:69.75829304884147,ReverseDiffCompiled:10.18367384843982},qa={__category__:"Core Turing syntax",EnzymeFwd:8.741544624455758,EnzymeRvs:1.8107900468079006,FiniteDifferences:258.1093455825954,ForwardDiff:3.5527780139871714,MooncakeFwd:22.47787512031657,MooncakeRvs:9.606369549443068,ReverseDiff:256.84203741769153,ReverseDiffCompiled:22.916184136869354},Va={__category__:"PosteriorDB",EnzymeFwd:6.5908161368284075,EnzymeRvs:3.101381405744511,FiniteDifferences:39.97646165527715,ForwardDiff:2.155903067924078,MooncakeFwd:26.43856767411301,MooncakeRvs:11.342814238745575,ReverseDiff:67.25699945874133,ReverseDiffCompiled:28.261201543883203},ja={__category__:"Distributions",EnzymeFwd:12.528014616321558,EnzymeRvs:12.01674183789001,FiniteDifferences:57.13285903938455,ForwardDiff:.9645841064783703,MooncakeFwd:23.93999348934785,MooncakeRvs:11.429964840648747,ReverseDiff:42.61827447711428,ReverseDiffCompiled:3.5968797314199192},$a={__category__:"Core Turing syntax",EnzymeFwd:4.623735544328119,EnzymeRvs:1.5740673537663539,FiniteDifferences:103.67798979520515,ForwardDiff:1.8325802445368036,MooncakeFwd:11.711144755738385,MooncakeRvs:6.437023440079234,ReverseDiff:209.95977385643312,ReverseDiffCompiled:18.541963822418516},Ua={__category__:"Base Julia features",EnzymeFwd:4.1001645834772,EnzymeRvs:2.3396828919143533,FiniteDifferences:98.30094204382551,ForwardDiff:2.5909854376470864,MooncakeFwd:12.853112343872306,MooncakeRvs:5.133826798934633,ReverseDiff:94.51865721546075,ReverseDiffCompiled:"wrong"},Ha={abstractgps:Bi,assume_beta:zi,delaydiffeq:qi,demo_assume_dot_observe:Vi,demo_assume_dot_observe_literal:ji,demo_assume_index_observe:$i,demo_assume_matrix_observe_matrix_index:Ui,demo_assume_multivariate_observe:Hi,demo_assume_multivariate_observe_literal:Gi,demo_assume_observe_literal:Ki,demo_assume_submodel_observe_index_literal:Xi,demo_dot_assume_observe:Wi,assume_dirichlet:Ji,demo_dot_assume_observe_index:Yi,demo_dot_assume_observe_index_literal:Zi,demo_dot_assume_observe_matrix_index:Qi,demo_dot_assume_observe_submodel:ea,dot_assume:na,dot_observe:ta,dppl_gauss_unknown:ra,dppl_hier_poisson:oa,dppl_high_dim_gauss:sa,dppl_hmm_semisup:ia,assume_lkjcholu:aa,dppl_lda:la,dppl_logistic_regression:ca,dppl_naive_bayes:ua,dppl_sto_volatility:fa,dynamic_constraint:da,lux_nn:_a,multiple_constraints_same_var:ma,multithreaded:pa,n010:va,n050:ga,assume_mvnormal:ha,n100:ba,n500:ya,observe_bernoulli:wa,observe_categorical:Da,observe_index:Ea,observe_literal:xa,observe_multivariate:Ra,observe_submodel:Ma,observe_von_mises:Fa,ordinarydiffeq:Na,assume_normal:Ta,pdb_arma11:ka,pdb_earnings:Sa,pdb_earnings_male:Ca,pdb_eightsch_centered:Aa,pdb_eightsch_noncentered:Pa,pdb_garch11:Oa,pdb_kidiq:Ia,pdb_radon:La,pdb_rats:Ba,pdb_sblrc:za,assume_submodel:qa,pdb_sblri:Va,assume_wishart:ja,broadcast_macro:$a,control_flow:Ua},Ga=`#=
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

model = assume_beta()`,Xa=`#=
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

model = delaydiffeq(ddedata, prob_dde)`,Wa=`@model function demo_assume_dot_observe(x = [1.5, 2.0])
    # \`assume\` and \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    x .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe()`,Ja=`@model function demo_assume_dot_observe_literal()
    # \`assume\` and literal \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    [1.5, 2.0] .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe_literal()`,Ya=`using LinearAlgebra: Diagonal

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

model = demo_assume_index_observe()`,Za=`using FillArrays
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

model = demo_assume_matrix_observe_matrix_index()`,Qa=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe(x = [1.5, 2.0])
    # Multivariate \`assume\` and \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zero(x), Diagonal(s))
    x ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe()`,el=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe_literal()
    # multivariate \`assume\` and literal \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zeros(2), Diagonal(s))
    [1.5, 2.0] ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe_literal()`,nl=`@model function demo_assume_observe_literal()
    # univariate \`assume\` and literal \`observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    1.5 ~ Normal(m, sqrt(s))
    2.0 ~ Normal(m, sqrt(s))
end

model = demo_assume_observe_literal()`,tl=`@model function _prior_dot_assume(::Type{TV} = Vector{Float64}) where {TV}
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

model = demo_assume_submodel_observe_index_literal()`,rl=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe()`,ol=`@model function assume_dirichlet()
    a ~ Dirichlet([1.0, 5.0])
end

model = assume_dirichlet()`,sl=`@model function demo_dot_assume_observe_index(
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

model = demo_dot_assume_observe_index()`,il=`@model function demo_dot_assume_observe_index_literal(
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

model = demo_dot_assume_observe_index_literal()`,al=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe_matrix_index()`,ll=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe_submodel()`,cl=`@model function dot_assume(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 5)
    a .~ Normal()
end

model = dot_assume()`,ul=`@model function dot_observe(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    x .~ Normal(a)
end

model = dot_observe()`,fl=`using FillArrays

n = 10_000
s = abs(rand()) + 0.5
y = randn() .+ s * randn(n)

@model function dppl_gauss_unknown(y)
    N = length(y)
    m ~ Normal(0, 1)
    s ~ truncated(Cauchy(0, 5); lower = 0)
    y ~ product_distribution(Fill(Normal(m, s), N))
end

model = dppl_gauss_unknown(y)`,dl=`using FillArrays
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

model = dppl_hier_poisson(y, x, idx, ns)`,_l=`using FillArrays

@model function dppl_high_dim_gauss(D)
    m ~ product_distribution(Fill(Normal(0, 1), D))
end

model = dppl_high_dim_gauss(10_000)`,ml=`using FillArrays
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

model = dppl_hmm_semisup(K, T, T_unsup, w, z, u, alpha, beta)`,pl=`@model function assume_lkjcholu()
    a ~ LKJCholesky(5, 1.0, 'U')
end

model = assume_lkjcholu()`,vl=`using FillArrays

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

model = dppl_lda(k, m, w, doc, alpha, beta)`,gl=`using Random: Xoshiro
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

model = dppl_logistic_regression(X', y)`,hl=`using DelimitedFiles
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

model = dppl_naive_bayes(image_vec, labels, C, D)`,bl=`using DelimitedFiles: readdlm

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

model = dppl_sto_volatility(y)`,yl=`@model function dynamic_constraint()
    a ~ Normal()
    b ~ truncated(Normal(); lower = a)
end

model = dynamic_constraint()`,wl=`#=
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

model = lux_nn(reduce(hcat, xs), ts)`,Dl=`@model function multiple_constraints_same_var(::Type{TV} = Vector{Float64}) where {TV}
    x = TV(undef, 5)
    x[1] ~ Normal()
    x[2] ~ InverseGamma(2, 3)
    x[3] ~ truncated(Normal(), -5, 20)
    x[4:5] ~ Dirichlet([1.0, 2.0])
end

model = multiple_constraints_same_var()`,El=`#=
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
model = setthreadsafe(multithreaded(x), true)`,xl=`@model function n010(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 10)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n010()`,Rl=`@model function n050(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 50)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n050()`,Ml=`@model function assume_mvnormal()
    a ~ MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0])
end

model = assume_mvnormal()`,Fl=`@model function n100(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 100)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n100()`,Nl=`@model function n500(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 500)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n500()`,Tl=`@model function observe_bernoulli(x = [true, false, true])
    a ~ Beta(2, 2)
    for i in eachindex(x)
        x[i] ~ Bernoulli(a)
    end
end

model = observe_bernoulli()`,kl=`@model function observe_categorical(x = [1, 2, 1, 2, 2])
    a ~ Dirichlet(2, 3)
    for i in eachindex(x)
        x[i] ~ Categorical(a)
    end
end

model = observe_categorical()`,Sl=`@model function observe_index(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end

model = observe_index()`,Cl=`@model function observe_literal()
    a ~ Normal()
    1.5 ~ Normal(a)
end

model = observe_literal()`,Al=`@model function observe_multivariate(
    x = [1.5, 2.0, 2.5],
    ::Type{TV} = Vector{Float64},
) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    x ~ MvNormal(a, I)
end

model = observe_multivariate()`,Pl=`@model function inner2(x, a)
    x ~ Normal(a)
end
@model function observe_submodel(x = 1.5)
    a ~ Normal()
    _ignore ~ to_submodel(inner2(x, a))
end

model = observe_submodel()`,Ol=`@model function observe_von_mises(x)
    a ~ InverseGamma(2, 3)
    x ~ VonMises(0, a)
end

model = observe_von_mises(0.4)`,Il=`# See https://turinglang.org/docs/tutorials/bayesian-differential-equations/.

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

model = ordinarydiffeq(odedata, prob)`,Ll=`@model function assume_normal()
    a ~ Normal()
end

model = assume_normal()`,Bl=`# PosteriorDB: arma-arma11
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

model = pdb_arma11(T, y)`,zl=`# PosteriorDB: earnings-logearn_height
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

model = pdb_earnings(log_earn, height, N)`,ql=`# PosteriorDB: earnings-logearn_height_male
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

model = pdb_earnings_male(log_earn, height, male, N)`,Vl=`# PosteriorDB: eight_schools-eight_schools_centered
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

model = pdb_eightsch_centered(J, y, sigma)`,jl=`# PosteriorDB: eight_schools-eight_schools_noncentered
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

model = pdb_eightsch_noncentered(J, y, sigma)`,$l=`# PosteriorDB: garch-garch11
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

model = pdb_garch11(T, y, sigma1)`,Ul=`# PosteriorDB: kidiq-kidscore_momhs
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

model = pdb_kidiq(kid_score, mom_hs, N)`,Hl=`# PosteriorDB: radon_mn-radon_hierarchical_intercept_noncentered
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

model = pdb_radon(J, N, county_idx, log_uppm, floor_measure, log_radon)`,Gl=`# PosteriorDB: rats_data-rats_model
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

model = pdb_sblrc(X, y, D)`,Xl=`@model function inner1()
    return a ~ Normal()
end
@model function assume_submodel()
    a ~ to_submodel(inner1())
    x ~ Normal(a)
end

model = assume_submodel()`,Wl=`# PosteriorDB: sblri-blr
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

model = pdb_sblri(X, y, D)`,Jl=`@model function assume_wishart()
    a ~ Wishart(7, [1.0 0.5; 0.5 1.0])
end

model = assume_wishart()`,Yl=`@model function broadcast_macro(x = [1.5, 2.0], ::Type{TV} = Vector{Float64}) where {TV}
    a ~ Normal(0, 1)
    b ~ InverseGamma(2, 3)
    @. x ~ Normal(a, $(sqrt(b)))
end

model = broadcast_macro()`,Zl=`#= 
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

model = control_flow()`,Ql={abstractgps:Ga,assume_beta:Ka,delaydiffeq:Xa,demo_assume_dot_observe:Wa,demo_assume_dot_observe_literal:Ja,demo_assume_index_observe:Ya,demo_assume_matrix_observe_matrix_index:Za,demo_assume_multivariate_observe:Qa,demo_assume_multivariate_observe_literal:el,demo_assume_observe_literal:nl,demo_assume_submodel_observe_index_literal:tl,demo_dot_assume_observe:rl,assume_dirichlet:ol,demo_dot_assume_observe_index:sl,demo_dot_assume_observe_index_literal:il,demo_dot_assume_observe_matrix_index:al,demo_dot_assume_observe_submodel:ll,dot_assume:cl,dot_observe:ul,dppl_gauss_unknown:fl,dppl_hier_poisson:dl,dppl_high_dim_gauss:_l,dppl_hmm_semisup:ml,assume_lkjcholu:pl,dppl_lda:vl,dppl_logistic_regression:gl,dppl_naive_bayes:hl,dppl_sto_volatility:bl,dynamic_constraint:yl,lux_nn:wl,multiple_constraints_same_var:Dl,multithreaded:El,n010:xl,n050:Rl,assume_mvnormal:Ml,n100:Fl,n500:Nl,observe_bernoulli:Tl,observe_categorical:kl,observe_index:Sl,observe_literal:Cl,observe_multivariate:Al,observe_submodel:Pl,observe_von_mises:Ol,ordinarydiffeq:Il,assume_normal:Ll,pdb_arma11:Bl,pdb_earnings:zl,pdb_earnings_male:ql,pdb_eightsch_centered:Vl,pdb_eightsch_noncentered:jl,pdb_garch11:$l,pdb_kidiq:Ul,pdb_radon:Hl,pdb_rats:Gl,pdb_sblrc:Kl,assume_submodel:Xl,pdb_sblri:Wl,assume_wishart:Jl,broadcast_macro:Yl,control_flow:Zl};Rs();const ec="1.22.0",nc="1.5.0",tc="0.5.24",rc="5.15.1",oc="0.14.2",sc="0.4.5",ic="0.1.44",ac="4.5.2",lc="0.8.3",cc="0.8.10",uc="0.7.2",fc="0.6.2",dc="1.1.3",_c="2.5.0",mc="1.1.2",pc="0.4.0",vc="7.24.0",gc="1.11.0",hc="1.1.3",bc="1.1.0",yc="0.4.8",wc="0.4.9",Dc="1.11.0",Ec="0.15.22",xc="0.1.6",Rc="1.12.1",Mc="0.5.0",Fc="0.2.7",Nc="0.3.14",Tc="1.73.0",kc="1.26.1",Sc="1.3.1",Cc="0.1.10",Ac="0.1.13",Pc="0.2.6",Oc="0.3.1",Ic="1.0.0",Lc="4.18.1",Bc="1.1.1+0",zc="0.1.2",qc="0.2.3",Vc="0.1.2",jc="1.6.0",$c="0.3.1",Uc="4.1.1",Hc="1.16.0",Gc="0.19.4",Kc="1.0.0",Xc="1.11.0",Wc="5.74.1",Jc="1.9.1",Yc="0.4.0",Zc="6.218.0",Qc="4.16.0",eu="5.30.0",nu="1.1.0",tu="1.15.1",ru="0.7.16",ou="0.4.28",su="0.10.12",iu="1.11.0",au="0.25.125",lu="0.6.58",cu="0.9.5",uu="1.6.0",fu="0.40.24",du="2.0.0",_u="1.0.7",mu="0.13.138",pu="0.8.19",vu="0.0.256+0",gu="1.30.0",hu="0.1.10",bu="1.1.4",yu="0.10.14",wu="0.3.1",Du="1.3.2",Eu="0.3.2",xu="1.1.0",Ru="1.3.1",Mu="1.11.0",Fu="1.16.0",Nu="2.30.0",Tu="0.12.33",ku="1.3.3",Su="0.1.2",Cu="1.1.3",Au="1.8.0",Pu="0.5.2",Ou="1.11.0",Iu="0.2.0",Lu="1.9.1",Bu="0.5.6",zu="1.14.0",qu="0.2.0",Vu="0.3.28",ju="0.4.15",$u="0.1.1",Uu="0.1.5",Hu="0.3.1",Gu="0.1.3",Ku="2025.2.0+0",Xu="1.11.0",Wu="0.16.2",Ju="0.7.14",Yu="0.1.17",Zu="0.2.6",Qu="1.10.0",ef="1.0.0",nf="1.7.1",tf="1.14.3",rf="0.2.1",of="0.9.41",sf="0.6.11",af="0.10.67",lf="0.10.6",cf="9.7.0",uf="0.0.42+0",ff="1.4.0",df="0.1.17",_f="1.11.0",mf="0.2.1",pf="0.6.4",vf="8.6.0+0",gf="1.11.0",hf="1.7.2+0",bf="1.11.0+1",yf="0.13.1+0",wf="1.11.0",Df="0.9.17",Ef="0.1.8",xf="7.6.1",Rf="1.11.0",Mf="3.75.0",Ff="2.2.0",Nf="1.13.1",Tf="0.3.29",kf="1.11.0",Sf="1.2.0",Cf="1.31.4",Af="1.5.3",Pf="1.15.9",Of="7.7.0",If="0.3.17",Lf="2025.2.0+0",Bf="1.17.8",zf="1.12.1",qf="0.5.16",Vf="0.1.8",jf="0.4.3",$f="1.11.0",Uf="0.1.4",Hf="2.28.6+0",Gf="1.2.0",Kf="2.1.0",Xf="1.11.0",Wf="0.5.24",Jf="0.3.7",Yf="2023.12.12",Zf="0.2.4",Qf="8.0.0",ed="0.9.34",nd="1.1.3",td="1.0.0",rd="1.2.0",od="4.19.0",sd="2.25.0",id="2.1.1",ad="1.13.1",ld="1.7.1",cd="0.5.0",ud="1.17.0",fd="0.3.27+1",dd="0.8.5+0",_d="0.5.6+0",md="2.0.1",pd="0.4.7",vd="5.5.1",gd="5.1.1",hd="0.4.13",bd="1.8.1",yd="6.111.0",wd="1.11.0",Dd="1.26.0",Ed="3.33.1",xd="1.14.0",Rd="2.9.0",Md="1.12.0",Fd="1.15.0",Nd="1.18.0",Td="1.26.0",kd="1.10.0",Sd="1.11.0",Cd="1.12.0",Ad="1.14.0",Pd="1.12.0",Od="1.13.0",Id="1.15.0",Ld="1.28.0",Bd="1.11.0",zd="1.14.0",qd="1.10.0",Vd="1.10.0",jd="1.12.0",$d="1.31.1",Ud="1.14.0",Hd="1.14.0",Gd="1.14.0",Kd="1.11.1",Xd="1.13.0",Wd="1.12.0",Jd="1.14.0",Yd="0.11.37",Zd="2.8.3",Qd="1.11.0",e1="0.4.7",n1="0.7.19",t1="0.2.2",r1="0.2.4",o1="0.6.0",s1="1.2.0",i1="1.2.1",a1="1.5.2",l1="3.3.2",c1="0.5.7",u1="1.11.0",f1="0.1.6",d1="1.11.0",_1="1.4.0",m1="2.11.3",p1="1.11.0",v1="1.11.0",g1="1.7.1",h1="1.6.0",b1="0.3.2",y1="0.4.5",w1="0.1.19",D1="0.1.0",E1="1.3.4",x1="3.54.0",R1="1.2.2",M1="1.3.1",F1="1.2.0",N1="1.16.2",T1="1.4.2",k1="0.9.0",S1="0.5.1+0",C1="3.0.0",A1="0.5.18",P1="0.7.0",O1="0.1.0",I1="0.6.1",L1="2.155.1",B1="0.1.13",z1="1.9.1",q1="1.17.0",V1="1.0.1",j1="7.103.0",$1="1.10.0",U1="3.1.0",H1="1.6.0",G1="1.3.0",K1="1.11.0",X1="1.1.2",W1="1.11.0",J1="2.11.1",Y1="0.9.5",Z1="1.11.0",Q1="1.2.2",e_="1.11.0",n_="1.2.1",t_="0.1.2",r_="0.4.27",o_="2.7.2",s_="1.3.1",i_="1.9.0",a_="1.9.18",l_="1.4.4",c_="3.5.0",u_="1.11.1",f_="1.8.0",d_="0.34.10",__="1.5.2",m_="0.5.8",p_="0.4.4",v_="0.7.3",g_="0.3.1",h_="1.11.0",b_="2.8.0",y_="1.11.0",w_=null,D_="7.7.0+0",E_="0.3.46",x_="1.0.3",R_="1.0.1",M_="1.12.1",F_="1.10.0",N_="0.1.1",T_="0.1.7",k_="1.11.0",S_="0.5.5",C_="0.5.29",A_="0.2.38",P_="0.1.6",O_="1.4.0",I_="0.43.7",L_="1.11.0",B_="1.11.0",z_="0.3.1",q_="1.3.3",V_="1.1.0",j_="0.10.1",$_="1.2.13+1",U_="0.7.10",H_="0.2.7",G_="5.11.0+0",K_="1.59.0+0",X_="2022.0.0+1",W_="17.4.0+2",J_={ADTypes:ec,AbstractFFTs:nc,AbstractGPs:tc,AbstractMCMC:rc,AbstractPPL:oc,AbstractTrees:sc,Accessors:ic,Adapt:ac,AdvancedHMC:lc,AdvancedMH:cc,AdvancedPS:uc,AdvancedVI:fc,AliasTables:dc,ArgCheck:_c,ArgTools:mc,ArnoldiMethod:pc,ArrayInterface:vc,Artifacts:gc,Atomix:hc,AxisAlgorithms:bc,AxisArrays:yc,BangBang:wc,Base64:Dc,Bijectors:Ec,BitTwiddlingConvenienceFunctions:xc,BracketingNonlinearSolve:Rc,CEnum:Mc,CPUSummary:Fc,Cassette:Nc,ChainRules:Tc,ChainRulesCore:kc,Chairmarks:Sc,ChangesOfVariables:Cc,CloseOpenIntervals:Ac,CommonSolve:Pc,CommonSubexpressions:Oc,CommonWorldInvalidations:Ic,Compat:Lc,CompilerSupportLibraries_jll:Bc,CompositionsBase:zc,ConcreteStructs:qc,ConsoleProgressMonitor:Vc,ConstructionBase:jc,CpuId:$c,Crayons:Uc,DataAPI:Hc,DataStructures:Gc,DataValueInterfaces:Kc,Dates:Xc,DelayDiffEq:Wc,DelimitedFiles:Jc,DensityInterface:Yc,DiffEqBase:Zc,DiffEqCallbacks:Qc,DiffEqNoiseProcess:eu,DiffResults:nu,DiffRules:tu,DifferentiationInterface:ru,DispatchDoctor:ou,Distances:su,Distributed:iu,Distributions:au,DistributionsAD:lu,DocStringExtensions:cu,Downloads:uu,DynamicPPL:fu,EllipticalSliceSampling:du,EnumX:_u,Enzyme:mu,EnzymeCore:pu,Enzyme_jll:vu,ExponentialUtilities:gu,ExprTools:hu,ExpressionExplorer:bu,ExproniconLite:yu,FFTA:wu,FastBroadcast:Du,FastClosures:Eu,FastGaussQuadrature:xu,FastPower:Ru,FileWatching:Mu,FillArrays:Fu,FiniteDiff:Nu,FiniteDifferences:Tu,ForwardDiff:ku,FunctionProperties:Su,FunctionWrappers:Cu,FunctionWrappersWrappers:Au,Functors:Pu,Future:Ou,GPUArraysCore:Iu,GPUCompiler:Lu,GenericSchur:Bu,Graphs:zu,HashArrayMappedTries:qu,HypergeometricFunctions:Vu,IRTools:ju,IfElse:$u,Inflate:Uu,InitialValues:Hu,IntegerMathUtils:Gu,IntelOpenMP_jll:Ku,InteractiveUtils:Xu,Interpolations:Wu,IntervalSets:Ju,InverseFunctions:Yu,IrrationalConstants:Zu,IterTools:Qu,IteratorInterfaceExtensions:ef,JLLWrappers:nf,JSON:"1.5.0",JSON3:tf,Jieko:rf,KernelAbstractions:of,KernelDensity:sf,KernelFunctions:af,Krylov:lf,LLVM:cf,LLVMExtra_jll:uf,LaTeXStrings:ff,LayoutPointers:df,LazyArtifacts:_f,LeftChildRightSiblingTrees:mf,LibCURL:pf,LibCURL_jll:vf,LibGit2:gf,LibGit2_jll:hf,LibSSH2_jll:bf,LibTracyClient_jll:yf,Libdl:wf,Libtask:Df,LineSearch:Ef,LineSearches:xf,LinearAlgebra:Rf,LinearSolve:Mf,LogDensityProblems:Ff,LogDensityProblemsAD:Nf,LogExpFunctions:Tf,Logging:kf,LoggingExtras:Sf,Lux:Cf,LuxCore:Af,LuxLib:Pf,MCMCChains:Of,MCMCDiagnosticTools:If,MKL_jll:Lf,MLDataDevices:Bf,MLJModelInterface:zf,MacroTools:qf,ManualMemory:Vf,MappedArrays:jf,Markdown:$f,MaybeInplace:Uf,MbedTLS_jll:Hf,Missings:Gf,MistyClosures:Kf,Mmap:Xf,Mooncake:Wf,Moshi:Jf,MozillaCACerts_jll:Yf,MuladdMacro:Zf,NLSolversBase:Qf,NNlib:ed,NaNMath:nd,NaturalSort:td,NetworkOptions:rd,NonlinearSolve:od,NonlinearSolveBase:sd,NonlinearSolveFirstOrder:id,NonlinearSolveQuasiNewton:ad,NonlinearSolveSpectralMethods:ld,ObjectFile:cd,OffsetArrays:ud,OpenBLAS_jll:fd,OpenLibm_jll:dd,OpenSpecFun_jll:_d,Optim:md,Optimisers:pd,Optimization:vd,OptimizationBase:gd,OptimizationOptimJL:hd,OrderedCollections:bd,OrdinaryDiffEq:yd,OrdinaryDiffEqAdamsBashforthMoulton:wd,OrdinaryDiffEqBDF:Dd,OrdinaryDiffEqCore:Ed,OrdinaryDiffEqDefault:xd,OrdinaryDiffEqDifferentiation:Rd,OrdinaryDiffEqExplicitRK:Md,OrdinaryDiffEqExponentialRK:Fd,OrdinaryDiffEqExtrapolation:Nd,OrdinaryDiffEqFIRK:Td,OrdinaryDiffEqFeagin:kd,OrdinaryDiffEqFunctionMap:Sd,OrdinaryDiffEqHighOrderRK:Cd,OrdinaryDiffEqIMEXMultistep:Ad,OrdinaryDiffEqLinear:Pd,OrdinaryDiffEqLowOrderRK:Od,OrdinaryDiffEqLowStorageRK:Id,OrdinaryDiffEqNonlinearSolve:Ld,OrdinaryDiffEqNordsieck:Bd,OrdinaryDiffEqPDIRK:zd,OrdinaryDiffEqPRK:qd,OrdinaryDiffEqQPRK:Vd,OrdinaryDiffEqRKN:jd,OrdinaryDiffEqRosenbrock:$d,OrdinaryDiffEqSDIRK:Ud,OrdinaryDiffEqSSPRK:Hd,OrdinaryDiffEqStabilizedIRK:Gd,OrdinaryDiffEqStabilizedRK:Kd,OrdinaryDiffEqSymplecticRK:Xd,OrdinaryDiffEqTsit5:Wd,OrdinaryDiffEqVerner:Jd,PDMats:Yd,Parsers:Zd,Pkg:Qd,PoissonRandom:e1,Polyester:n1,PolyesterWeave:t1,PositiveFactorizations:r1,PosteriorDB:o1,PreallocationTools:s1,PrecompileTools:i1,Preferences:a1,PrettyTables:l1,Primes:c1,Printf:u1,ProgressLogging:f1,ProgressMeter:d1,PtrArrays:_1,QuadGK:m1,REPL:p1,Random:v1,Random123:g1,RandomNumbers:h1,RangeArrays:b1,Ratios:y1,ReactantCore:w1,RealDot:D1,RecipesBase:E1,RecursiveArrayTools:x1,Reexport:R1,Requires:M1,ResettableStacks:F1,ReverseDiff:N1,Richardson:T1,Rmath:k1,Rmath_jll:S1,Roots:C1,RuntimeGeneratedFunctions:A1,SHA:P1,SIMDTypes:O1,SSMProblems:I1,SciMLBase:L1,SciMLJacobianOperators:B1,SciMLLogging:z1,SciMLOperators:q1,SciMLPublic:V1,SciMLSensitivity:j1,SciMLStructures:$1,ScientificTypesBase:U1,ScopedValues:H1,Scratch:G1,Serialization:K1,Setfield:X1,SharedArrays:W1,SimpleNonlinearSolve:J1,SimpleTraits:Y1,Sockets:Z1,SortingAlgorithms:Q1,SparseArrays:e_,SparseConnectivityTracer:n_,SparseInverseSubset:t_,SparseMatrixColorings:r_,SpecialFunctions:o_,Static:s_,StaticArrayInterface:i_,StaticArrays:a_,StaticArraysCore:l_,StatisticalTraits:c_,Statistics:u_,StatsAPI:f_,StatsBase:d_,StatsFuns:__,StrideArraysCore:m_,StringManipulation:p_,StructArrays:v_,StructIO:g_,StructTypes:h_,StructUtils:b_,StyledStrings:y_,SuiteSparse:w_,SuiteSparse_jll:D_,SymbolicIndexingInterface:E_,TOML:x_,TableTraits:R_,Tables:M_,Tar:F_,TensorCore:N_,TerminalLoggers:T_,Test:k_,ThreadingUtilities:S_,TimerOutputs:C_,Tracker:A_,Tracy:P_,TruncatedStacktraces:O_,Turing:I_,UUIDs:L_,Unicode:B_,UnsafeAtomics:z_,WeightInitializers:q_,WoodburyMatrices:V_,ZipFile:j_,Zlib_jll:$_,Zygote:U_,ZygoteRules:H_,libblastrampoline_jll:G_,nghttp2_jll:K_,oneTBB_jll:X_,p7zip_jll:W_};function Tr(e){switch(e){case"FiniteDifferences":return 1;case"ForwardDiff":return 11;case"EnzymeFwd":return 12;case"MooncakeFwd":return 13;case"ReverseDiff":return 21;case"ReverseDiffCompiled":return 22;case"EnzymeRev":return 23;case"MooncakeRev":return 24;default:return 500}}function go(e,n){const t=Tr(e),r=Tr(n);return t<r?-1:t>r?1:e.localeCompare(n)}function Lt(e){return[...e.entries()].sort(([n,t],[r,o])=>go(n,r))}var Y_=_e('<tr><td class="svelte-yinbl0"> </td><td class="version svelte-yinbl0"> </td></tr>'),Z_=_e('<table class="svelte-yinbl0"><thead><tr><th class="svelte-yinbl0">Package</th><th class="svelte-yinbl0">Version</th></tr></thead><tbody></tbody></table>');function Q_(e,n){pn(n,!1);let t=new Map;for(const[s,a]of Object.entries(J_))t.set(s,a===""?null:a);vo();var r=Z_(),o=oe(z(r));Tn(o,5,()=>Lt(t),Nn,(s,a,c)=>{let l=()=>w(a)[0],u=()=>w(a)[1];var p=Y_();Cn(p,1,"svelte-yinbl0",null,{},{alt:c%2===1});var _=z(p),f=z(_),h=oe(_),b=z(h);ve(()=>{Ae(f,l()),Ae(b,u()===null?"":`v${u()}`)}),G(s,p)}),G(e,r),vn()}var e0=_e('<td class="model-name svelte-73y89f"> </td>');function n0(e,n){var t=e0();t.__click=function(...o){var s;(s=n.onToggle)==null||s.apply(this,o)};var r=z(t);ve(()=>Ae(r,n.name)),G(e,t)}dt(["click"]);function t0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nt,kr;function r0(){if(kr)return Nt;kr=1;function e(i){return i instanceof Map?i.clear=i.delete=i.set=function(){throw new Error("map is read-only")}:i instanceof Set&&(i.add=i.clear=i.delete=function(){throw new Error("set is read-only")}),Object.freeze(i),Object.getOwnPropertyNames(i).forEach(d=>{const g=i[d],C=typeof g;(C==="object"||C==="function")&&!Object.isFrozen(g)&&e(g)}),i}class n{constructor(d){d.data===void 0&&(d.data={}),this.data=d.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(i,...d){const g=Object.create(null);for(const C in i)g[C]=i[C];return d.forEach(function(C){for(const W in C)g[W]=C[W]}),g}const o="</span>",s=i=>!!i.scope,a=(i,{prefix:d})=>{if(i.startsWith("language:"))return i.replace("language:","language-");if(i.includes(".")){const g=i.split(".");return[`${d}${g.shift()}`,...g.map((C,W)=>`${C}${"_".repeat(W+1)}`)].join(" ")}return`${d}${i}`};class c{constructor(d,g){this.buffer="",this.classPrefix=g.classPrefix,d.walk(this)}addText(d){this.buffer+=t(d)}openNode(d){if(!s(d))return;const g=a(d.scope,{prefix:this.classPrefix});this.span(g)}closeNode(d){s(d)&&(this.buffer+=o)}value(){return this.buffer}span(d){this.buffer+=`<span class="${d}">`}}const l=(i={})=>{const d={children:[]};return Object.assign(d,i),d};class u{constructor(){this.rootNode=l(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(d){this.top.children.push(d)}openNode(d){const g=l({scope:d});this.add(g),this.stack.push(g)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(d){return this.constructor._walk(d,this.rootNode)}static _walk(d,g){return typeof g=="string"?d.addText(g):g.children&&(d.openNode(g),g.children.forEach(C=>this._walk(d,C)),d.closeNode(g)),d}static _collapse(d){typeof d!="string"&&d.children&&(d.children.every(g=>typeof g=="string")?d.children=[d.children.join("")]:d.children.forEach(g=>{u._collapse(g)}))}}class p extends u{constructor(d){super(),this.options=d}addText(d){d!==""&&this.add(d)}startScope(d){this.openNode(d)}endScope(){this.closeNode()}__addSublanguage(d,g){const C=d.root;g&&(C.scope=`language:${g}`),this.add(C)}toHTML(){return new c(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(i){return i?typeof i=="string"?i:i.source:null}function f(i){return S("(?=",i,")")}function h(i){return S("(?:",i,")*")}function b(i){return S("(?:",i,")?")}function S(...i){return i.map(g=>_(g)).join("")}function F(i){const d=i[i.length-1];return typeof d=="object"&&d.constructor===Object?(i.splice(i.length-1,1),d):{}}function O(...i){return"("+(F(i).capture?"":"?:")+i.map(C=>_(C)).join("|")+")"}function V(i){return new RegExp(i.toString()+"|").exec("").length-1}function E(i,d){const g=i&&i.exec(d);return g&&g.index===0}const x=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function v(i,{joinWith:d}){let g=0;return i.map(C=>{g+=1;const W=g;let J=_(C),M="";for(;J.length>0;){const D=x.exec(J);if(!D){M+=J;break}M+=J.substring(0,D.index),J=J.substring(D.index+D[0].length),D[0][0]==="\\"&&D[1]?M+="\\"+String(Number(D[1])+W):(M+=D[0],D[0]==="("&&g++)}return M}).map(C=>`(${C})`).join(d)}const P=/\b\B/,R="[a-zA-Z]\\w*",L="[a-zA-Z_]\\w*",X="\\b\\d+(\\.\\d+)?",ee="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ne="\\b(0b[01]+)",se="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",le=(i={})=>{const d=/^#![ ]*\//;return i.binary&&(i.begin=S(d,/.*\b/,i.binary,/\b.*/)),r({scope:"meta",begin:d,end:/$/,relevance:0,"on:begin":(g,C)=>{g.index!==0&&C.ignoreMatch()}},i)},me={begin:"\\\\[\\s\\S]",relevance:0},Ee={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[me]},Ve={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[me]},Me={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},ie=function(i,d,g={}){const C=r({scope:"comment",begin:i,end:d,contains:[]},g);C.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const W=O("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return C.contains.push({begin:S(/[ ]+/,"(",W,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),C},Ye=ie("//","$"),bn=ie("/\\*","\\*/"),yn=ie("#","$"),Fe={scope:"number",begin:X,relevance:0},ce={scope:"number",begin:ee,relevance:0},Ne={scope:"number",begin:ne,relevance:0},wn={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[me,{begin:/\[/,end:/\]/,relevance:0,contains:[me]}]},tn={scope:"title",begin:R,relevance:0},mt={scope:"title",begin:L,relevance:0},Dn={begin:"\\.\\s*"+L,relevance:0};var rn=Object.freeze({__proto__:null,APOS_STRING_MODE:Ee,BACKSLASH_ESCAPE:me,BINARY_NUMBER_MODE:Ne,BINARY_NUMBER_RE:ne,COMMENT:ie,C_BLOCK_COMMENT_MODE:bn,C_LINE_COMMENT_MODE:Ye,C_NUMBER_MODE:ce,C_NUMBER_RE:ee,END_SAME_AS_BEGIN:function(i){return Object.assign(i,{"on:begin":(d,g)=>{g.data._beginMatch=d[1]},"on:end":(d,g)=>{g.data._beginMatch!==d[1]&&g.ignoreMatch()}})},HASH_COMMENT_MODE:yn,IDENT_RE:R,MATCH_NOTHING_RE:P,METHOD_GUARD:Dn,NUMBER_MODE:Fe,NUMBER_RE:X,PHRASAL_WORDS_MODE:Me,QUOTE_STRING_MODE:Ve,REGEXP_MODE:wn,RE_STARTERS_RE:se,SHEBANG:le,TITLE_MODE:tn,UNDERSCORE_IDENT_RE:L,UNDERSCORE_TITLE_MODE:mt});function wo(i,d){i.input[i.index-1]==="."&&d.ignoreMatch()}function Do(i,d){i.className!==void 0&&(i.scope=i.className,delete i.className)}function Eo(i,d){d&&i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",i.__beforeBegin=wo,i.keywords=i.keywords||i.beginKeywords,delete i.beginKeywords,i.relevance===void 0&&(i.relevance=0))}function xo(i,d){Array.isArray(i.illegal)&&(i.illegal=O(...i.illegal))}function Ro(i,d){if(i.match){if(i.begin||i.end)throw new Error("begin & end are not supported with match");i.begin=i.match,delete i.match}}function Mo(i,d){i.relevance===void 0&&(i.relevance=1)}const Fo=(i,d)=>{if(!i.beforeMatch)return;if(i.starts)throw new Error("beforeMatch cannot be used with starts");const g=Object.assign({},i);Object.keys(i).forEach(C=>{delete i[C]}),i.keywords=g.keywords,i.begin=S(g.beforeMatch,f(g.begin)),i.starts={relevance:0,contains:[Object.assign(g,{endsParent:!0})]},i.relevance=0,delete g.beforeMatch},No=["of","and","for","in","not","or","if","then","parent","list","value"],To="keyword";function Zt(i,d,g=To){const C=Object.create(null);return typeof i=="string"?W(g,i.split(" ")):Array.isArray(i)?W(g,i):Object.keys(i).forEach(function(J){Object.assign(C,Zt(i[J],d,J))}),C;function W(J,M){d&&(M=M.map(D=>D.toLowerCase())),M.forEach(function(D){const k=D.split("|");C[k[0]]=[J,ko(k[0],k[1])]})}}function ko(i,d){return d?Number(d):So(i)?0:1}function So(i){return No.includes(i.toLowerCase())}const Qt={},Ze=i=>{console.error(i)},er=(i,...d)=>{console.log(`WARN: ${i}`,...d)},on=(i,d)=>{Qt[`${i}/${d}`]||(console.log(`Deprecated as of ${i}. ${d}`),Qt[`${i}/${d}`]=!0)},In=new Error;function nr(i,d,{key:g}){let C=0;const W=i[g],J={},M={};for(let D=1;D<=d.length;D++)M[D+C]=W[D],J[D+C]=!0,C+=V(d[D-1]);i[g]=M,i[g]._emit=J,i[g]._multi=!0}function Co(i){if(Array.isArray(i.begin)){if(i.skip||i.excludeBegin||i.returnBegin)throw Ze("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),In;if(typeof i.beginScope!="object"||i.beginScope===null)throw Ze("beginScope must be object"),In;nr(i,i.begin,{key:"beginScope"}),i.begin=v(i.begin,{joinWith:""})}}function Ao(i){if(Array.isArray(i.end)){if(i.skip||i.excludeEnd||i.returnEnd)throw Ze("skip, excludeEnd, returnEnd not compatible with endScope: {}"),In;if(typeof i.endScope!="object"||i.endScope===null)throw Ze("endScope must be object"),In;nr(i,i.end,{key:"endScope"}),i.end=v(i.end,{joinWith:""})}}function Po(i){i.scope&&typeof i.scope=="object"&&i.scope!==null&&(i.beginScope=i.scope,delete i.scope)}function Oo(i){Po(i),typeof i.beginScope=="string"&&(i.beginScope={_wrap:i.beginScope}),typeof i.endScope=="string"&&(i.endScope={_wrap:i.endScope}),Co(i),Ao(i)}function Io(i){function d(M,D){return new RegExp(_(M),"m"+(i.case_insensitive?"i":"")+(i.unicodeRegex?"u":"")+(D?"g":""))}class g{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(D,k){k.position=this.position++,this.matchIndexes[this.matchAt]=k,this.regexes.push([k,D]),this.matchAt+=V(D)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const D=this.regexes.map(k=>k[1]);this.matcherRe=d(v(D,{joinWith:"|"}),!0),this.lastIndex=0}exec(D){this.matcherRe.lastIndex=this.lastIndex;const k=this.matcherRe.exec(D);if(!k)return null;const te=k.findIndex((En,gt)=>gt>0&&En!==void 0),Y=this.matchIndexes[te];return k.splice(0,te),Object.assign(k,Y)}}class C{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(D){if(this.multiRegexes[D])return this.multiRegexes[D];const k=new g;return this.rules.slice(D).forEach(([te,Y])=>k.addRule(te,Y)),k.compile(),this.multiRegexes[D]=k,k}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(D,k){this.rules.push([D,k]),k.type==="begin"&&this.count++}exec(D){const k=this.getMatcher(this.regexIndex);k.lastIndex=this.lastIndex;let te=k.exec(D);if(this.resumingScanAtSamePosition()&&!(te&&te.index===this.lastIndex)){const Y=this.getMatcher(0);Y.lastIndex=this.lastIndex+1,te=Y.exec(D)}return te&&(this.regexIndex+=te.position+1,this.regexIndex===this.count&&this.considerAll()),te}}function W(M){const D=new C;return M.contains.forEach(k=>D.addRule(k.begin,{rule:k,type:"begin"})),M.terminatorEnd&&D.addRule(M.terminatorEnd,{type:"end"}),M.illegal&&D.addRule(M.illegal,{type:"illegal"}),D}function J(M,D){const k=M;if(M.isCompiled)return k;[Do,Ro,Oo,Fo].forEach(Y=>Y(M,D)),i.compilerExtensions.forEach(Y=>Y(M,D)),M.__beforeBegin=null,[Eo,xo,Mo].forEach(Y=>Y(M,D)),M.isCompiled=!0;let te=null;return typeof M.keywords=="object"&&M.keywords.$pattern&&(M.keywords=Object.assign({},M.keywords),te=M.keywords.$pattern,delete M.keywords.$pattern),te=te||/\w+/,M.keywords&&(M.keywords=Zt(M.keywords,i.case_insensitive)),k.keywordPatternRe=d(te,!0),D&&(M.begin||(M.begin=/\B|\b/),k.beginRe=d(k.begin),!M.end&&!M.endsWithParent&&(M.end=/\B|\b/),M.end&&(k.endRe=d(k.end)),k.terminatorEnd=_(k.end)||"",M.endsWithParent&&D.terminatorEnd&&(k.terminatorEnd+=(M.end?"|":"")+D.terminatorEnd)),M.illegal&&(k.illegalRe=d(M.illegal)),M.contains||(M.contains=[]),M.contains=[].concat(...M.contains.map(function(Y){return Lo(Y==="self"?M:Y)})),M.contains.forEach(function(Y){J(Y,k)}),M.starts&&J(M.starts,D),k.matcher=W(k),k}if(i.compilerExtensions||(i.compilerExtensions=[]),i.contains&&i.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return i.classNameAliases=r(i.classNameAliases||{}),J(i)}function tr(i){return i?i.endsWithParent||tr(i.starts):!1}function Lo(i){return i.variants&&!i.cachedVariants&&(i.cachedVariants=i.variants.map(function(d){return r(i,{variants:null},d)})),i.cachedVariants?i.cachedVariants:tr(i)?r(i,{starts:i.starts?r(i.starts):null}):Object.isFrozen(i)?r(i):i}var Bo="11.11.1";class zo extends Error{constructor(d,g){super(d),this.name="HTMLInjectionError",this.html=g}}const vt=t,rr=r,or=Symbol("nomatch"),qo=7,sr=function(i){const d=Object.create(null),g=Object.create(null),C=[];let W=!0;const J="Could not find the language '{}', did you forget to load/include a language module?",M={disableAutodetect:!0,name:"Plain text",contains:[]};let D={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:p};function k(m){return D.noHighlightRe.test(m)}function te(m){let T=m.className+" ";T+=m.parentNode?m.parentNode.className:"";const B=D.languageDetectRe.exec(T);if(B){const U=je(B[1]);return U||(er(J.replace("{}",B[1])),er("Falling back to no-highlight mode for this block.",m)),U?B[1]:"no-highlight"}return T.split(/\s+/).find(U=>k(U)||je(U))}function Y(m,T,B){let U="",Q="";typeof T=="object"?(U=m,B=T.ignoreIllegals,Q=T.language):(on("10.7.0","highlight(lang, code, ...args) has been deprecated."),on("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),Q=m,U=T),B===void 0&&(B=!0);const xe={code:U,language:Q};Bn("before:highlight",xe);const $e=xe.result?xe.result:En(xe.language,xe.code,B);return $e.code=xe.code,Bn("after:highlight",$e),$e}function En(m,T,B,U){const Q=Object.create(null);function xe(y,N){return y.keywords[N]}function $e(){if(!A.keywords){re.addText(H);return}let y=0;A.keywordPatternRe.lastIndex=0;let N=A.keywordPatternRe.exec(H),I="";for(;N;){I+=H.substring(y,N.index);const q=ke.case_insensitive?N[0].toLowerCase():N[0],ae=xe(A,q);if(ae){const[Ie,rs]=ae;if(re.addText(I),I="",Q[q]=(Q[q]||0)+1,Q[q]<=qo&&(Vn+=rs),Ie.startsWith("_"))I+=N[0];else{const os=ke.classNameAliases[Ie]||Ie;Te(N[0],os)}}else I+=N[0];y=A.keywordPatternRe.lastIndex,N=A.keywordPatternRe.exec(H)}I+=H.substring(y),re.addText(I)}function zn(){if(H==="")return;let y=null;if(typeof A.subLanguage=="string"){if(!d[A.subLanguage]){re.addText(H);return}y=En(A.subLanguage,H,!0,_r[A.subLanguage]),_r[A.subLanguage]=y._top}else y=ht(H,A.subLanguage.length?A.subLanguage:null);A.relevance>0&&(Vn+=y.relevance),re.__addSublanguage(y._emitter,y.language)}function ge(){A.subLanguage!=null?zn():$e(),H=""}function Te(y,N){y!==""&&(re.startScope(N),re.addText(y),re.endScope())}function cr(y,N){let I=1;const q=N.length-1;for(;I<=q;){if(!y._emit[I]){I++;continue}const ae=ke.classNameAliases[y[I]]||y[I],Ie=N[I];ae?Te(Ie,ae):(H=Ie,$e(),H=""),I++}}function ur(y,N){return y.scope&&typeof y.scope=="string"&&re.openNode(ke.classNameAliases[y.scope]||y.scope),y.beginScope&&(y.beginScope._wrap?(Te(H,ke.classNameAliases[y.beginScope._wrap]||y.beginScope._wrap),H=""):y.beginScope._multi&&(cr(y.beginScope,N),H="")),A=Object.create(y,{parent:{value:A}}),A}function fr(y,N,I){let q=E(y.endRe,I);if(q){if(y["on:end"]){const ae=new n(y);y["on:end"](N,ae),ae.isMatchIgnored&&(q=!1)}if(q){for(;y.endsParent&&y.parent;)y=y.parent;return y}}if(y.endsWithParent)return fr(y.parent,N,I)}function Zo(y){return A.matcher.regexIndex===0?(H+=y[0],1):(Dt=!0,0)}function Qo(y){const N=y[0],I=y.rule,q=new n(I),ae=[I.__beforeBegin,I["on:begin"]];for(const Ie of ae)if(Ie&&(Ie(y,q),q.isMatchIgnored))return Zo(N);return I.skip?H+=N:(I.excludeBegin&&(H+=N),ge(),!I.returnBegin&&!I.excludeBegin&&(H=N)),ur(I,y),I.returnBegin?0:N.length}function es(y){const N=y[0],I=T.substring(y.index),q=fr(A,y,I);if(!q)return or;const ae=A;A.endScope&&A.endScope._wrap?(ge(),Te(N,A.endScope._wrap)):A.endScope&&A.endScope._multi?(ge(),cr(A.endScope,y)):ae.skip?H+=N:(ae.returnEnd||ae.excludeEnd||(H+=N),ge(),ae.excludeEnd&&(H=N));do A.scope&&re.closeNode(),!A.skip&&!A.subLanguage&&(Vn+=A.relevance),A=A.parent;while(A!==q.parent);return q.starts&&ur(q.starts,y),ae.returnEnd?0:N.length}function ns(){const y=[];for(let N=A;N!==ke;N=N.parent)N.scope&&y.unshift(N.scope);y.forEach(N=>re.openNode(N))}let qn={};function dr(y,N){const I=N&&N[0];if(H+=y,I==null)return ge(),0;if(qn.type==="begin"&&N.type==="end"&&qn.index===N.index&&I===""){if(H+=T.slice(N.index,N.index+1),!W){const q=new Error(`0 width match regex (${m})`);throw q.languageName=m,q.badRule=qn.rule,q}return 1}if(qn=N,N.type==="begin")return Qo(N);if(N.type==="illegal"&&!B){const q=new Error('Illegal lexeme "'+I+'" for mode "'+(A.scope||"<unnamed>")+'"');throw q.mode=A,q}else if(N.type==="end"){const q=es(N);if(q!==or)return q}if(N.type==="illegal"&&I==="")return H+=`
`,1;if(wt>1e5&&wt>N.index*3)throw new Error("potential infinite loop, way more iterations than matches");return H+=I,I.length}const ke=je(m);if(!ke)throw Ze(J.replace("{}",m)),new Error('Unknown language: "'+m+'"');const ts=Io(ke);let yt="",A=U||ts;const _r={},re=new D.__emitter(D);ns();let H="",Vn=0,Qe=0,wt=0,Dt=!1;try{if(ke.__emitTokens)ke.__emitTokens(T,re);else{for(A.matcher.considerAll();;){wt++,Dt?Dt=!1:A.matcher.considerAll(),A.matcher.lastIndex=Qe;const y=A.matcher.exec(T);if(!y)break;const N=T.substring(Qe,y.index),I=dr(N,y);Qe=y.index+I}dr(T.substring(Qe))}return re.finalize(),yt=re.toHTML(),{language:m,value:yt,relevance:Vn,illegal:!1,_emitter:re,_top:A}}catch(y){if(y.message&&y.message.includes("Illegal"))return{language:m,value:vt(T),illegal:!0,relevance:0,_illegalBy:{message:y.message,index:Qe,context:T.slice(Qe-100,Qe+100),mode:y.mode,resultSoFar:yt},_emitter:re};if(W)return{language:m,value:vt(T),illegal:!1,relevance:0,errorRaised:y,_emitter:re,_top:A};throw y}}function gt(m){const T={value:vt(m),illegal:!1,relevance:0,_top:M,_emitter:new D.__emitter(D)};return T._emitter.addText(m),T}function ht(m,T){T=T||D.languages||Object.keys(d);const B=gt(m),U=T.filter(je).filter(lr).map(ge=>En(ge,m,!1));U.unshift(B);const Q=U.sort((ge,Te)=>{if(ge.relevance!==Te.relevance)return Te.relevance-ge.relevance;if(ge.language&&Te.language){if(je(ge.language).supersetOf===Te.language)return 1;if(je(Te.language).supersetOf===ge.language)return-1}return 0}),[xe,$e]=Q,zn=xe;return zn.secondBest=$e,zn}function Vo(m,T,B){const U=T&&g[T]||B;m.classList.add("hljs"),m.classList.add(`language-${U}`)}function bt(m){let T=null;const B=te(m);if(k(B))return;if(Bn("before:highlightElement",{el:m,language:B}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(D.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),D.throwUnescapedHTML))throw new zo("One of your code blocks includes unescaped HTML.",m.innerHTML);T=m;const U=T.textContent,Q=B?Y(U,{language:B,ignoreIllegals:!0}):ht(U);m.innerHTML=Q.value,m.dataset.highlighted="yes",Vo(m,B,Q.language),m.result={language:Q.language,re:Q.relevance,relevance:Q.relevance},Q.secondBest&&(m.secondBest={language:Q.secondBest.language,relevance:Q.secondBest.relevance}),Bn("after:highlightElement",{el:m,result:Q,text:U})}function jo(m){D=rr(D,m)}const $o=()=>{Ln(),on("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Uo(){Ln(),on("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let ir=!1;function Ln(){function m(){Ln()}if(document.readyState==="loading"){ir||window.addEventListener("DOMContentLoaded",m,!1),ir=!0;return}document.querySelectorAll(D.cssSelector).forEach(bt)}function Ho(m,T){let B=null;try{B=T(i)}catch(U){if(Ze("Language definition for '{}' could not be registered.".replace("{}",m)),W)Ze(U);else throw U;B=M}B.name||(B.name=m),d[m]=B,B.rawDefinition=T.bind(null,i),B.aliases&&ar(B.aliases,{languageName:m})}function Go(m){delete d[m];for(const T of Object.keys(g))g[T]===m&&delete g[T]}function Ko(){return Object.keys(d)}function je(m){return m=(m||"").toLowerCase(),d[m]||d[g[m]]}function ar(m,{languageName:T}){typeof m=="string"&&(m=[m]),m.forEach(B=>{g[B.toLowerCase()]=T})}function lr(m){const T=je(m);return T&&!T.disableAutodetect}function Xo(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=T=>{m["before:highlightBlock"](Object.assign({block:T.el},T))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=T=>{m["after:highlightBlock"](Object.assign({block:T.el},T))})}function Wo(m){Xo(m),C.push(m)}function Jo(m){const T=C.indexOf(m);T!==-1&&C.splice(T,1)}function Bn(m,T){const B=m;C.forEach(function(U){U[B]&&U[B](T)})}function Yo(m){return on("10.7.0","highlightBlock will be removed entirely in v12.0"),on("10.7.0","Please use highlightElement now."),bt(m)}Object.assign(i,{highlight:Y,highlightAuto:ht,highlightAll:Ln,highlightElement:bt,highlightBlock:Yo,configure:jo,initHighlighting:$o,initHighlightingOnLoad:Uo,registerLanguage:Ho,unregisterLanguage:Go,listLanguages:Ko,getLanguage:je,registerAliases:ar,autoDetection:lr,inherit:rr,addPlugin:Wo,removePlugin:Jo}),i.debugMode=function(){W=!1},i.safeMode=function(){W=!0},i.versionString=Bo,i.regex={concat:S,lookahead:f,either:O,optional:b,anyNumberOfTimes:h};for(const m in rn)typeof rn[m]=="object"&&e(rn[m]);return Object.assign(i,rn),i},sn=sr({});return sn.newInstance=()=>sr({}),Nt=sn,sn.HighlightJS=sn,sn.default=sn,Nt}var o0=r0();const Sr=t0(o0);var s0=_e("<pre><code><!></code></pre>");function i0(e,n){const t=nt(n,["children","$$slots","$$events","$$legacy"]),r=nt(t,["code","highlighted","languageName","langtag"]);let o=Ke(n,"code",8),s=Ke(n,"highlighted",8),a=Ke(n,"languageName",8,"plaintext"),c=Ke(n,"langtag",8,!1);var l=s0();let u;var p=z(l);Cn(p,1,"",null,{},{hljs:!0});var _=z(p);{var f=b=>{var S=Qn(),F=cn(S);yi(F,s),G(b,S)},h=b=>{var S=It();ve(()=>Ae(S,o())),G(b,S)};Ue(_,b=>{s()?b(f):b(h,!1)})}ve(b=>u=Fi(l,u,{"data-language":a(),...r,[Fn]:b},"svelte-1w9vok"),[()=>({langtag:c()})],Ht),G(e,l)}function a0(e,n){const t=nt(n,["children","$$slots","$$events","$$legacy"]),r=nt(t,["language","code","langtag"]);pn(n,!1);let o=Ke(n,"language",8),s=Ke(n,"code",8),a=Ke(n,"langtag",8,!1);const c=Pi();let l=Gt("");Oi(()=>{w(l)&&c("highlight",{highlighted:w(l)})}),Us(()=>(At(o()),At(s())),()=>{Sr.registerLanguage(o().name,o().register),Z(l,Sr.highlight(s(),{language:o().name}).value)}),Hs(),vo();var u=Qn(),p=cn(u);wi(p,n,"default",{get highlighted(){return w(l)}},_=>{i0(_,Ci(()=>r,{get languageName(){return o().name},get langtag(){return a()},get highlighted(){return w(l)},get code(){return s()}}))}),G(e,u),vn()}function l0(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",s={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},a={keywords:s,illegal:/<\//},c={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},l={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},u={className:"subst",begin:/\$\(/,end:/\)/,keywords:s},p={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,u,p],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},f={className:"string",contains:[e.BACKSLASH_ESCAPE,u,p],begin:"`",end:"`"},h={className:"meta",begin:"@"+n},b={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return a.name="Julia",a.contains=[c,l,_,f,h,b,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],u.contains=a.contains,a}const c0={name:"julia",register:l0};function ho(e){let n,t,r;if(e<.5){const o=e*2;n=Math.round(34+o*166),t=Math.round(197+o*-17),r=Math.round(94+o*-94)}else{const o=(e-.5)*2;n=Math.round(200+o*20),t=Math.round(180-o*180),r=Math.round(0+o*30)}return[n,t,r]}function u0(e,n,t){if(typeof e!="number")return"";const r=[...n.values()].filter(b=>typeof b=="number");if(r.length<2)return"";const o=Math.min(...r),s=Math.max(...r),a=Math.log(Math.max(o,.001)),c=Math.log(Math.max(s,.001));if(c===a)return"";const l=Math.log(Math.max(e,.001)),u=Math.max(0,Math.min(1,(l-a)/(c-a))),[p,_,f]=ho(u);return`background-color: rgba(${p}, ${_}, ${f}, ${t==="dark"?.3:.25})`}function f0(e,n=10){const t=e==="dark"?.5:.4,r=[];for(let o=0;o<=n;o++){const s=o/n,[a,c,l]=ho(s);r.push(`rgba(${a}, ${c}, ${l}, ${t})`)}return r}const d0=[{url:"https://github.com/EnzymeAD/Enzyme.jl/issues/1995",affects:[["assume_mvnormal","EnzymeFwd"],["assume_wishart","EnzymeFwd"]]},{url:"https://github.com/chalk-lab/Mooncake.jl/issues/570",affects:[["multithreaded","MooncakeFwd"],["multithreaded","MooncakeRvs"]]}],_0=[],bo=new Map;for(const e of d0)for(const[n,t]of e.affects)bo.set(`${n}__${t}`,e.url);const yo=new Map;for(const e of _0)for(const[n,t]of e.affects)yo.set(`${n}__${t}`,e.value);function Cr(e,n){return bo.get(`${e}__${n}`)}function m0(e,n){return yo.get(`${e}__${n}`)}var p0=(e,n,t)=>n(w(t)),v0=_e('<th class="sortable svelte-9laac1" title="Click to sort"> <span class="sort-indicator svelte-9laac1"><!></span></th>'),g0=_e('<td class="svelte-9laac1"> </td>'),h0=_e('<a class="issue svelte-9laac1" target="_blank">(?)</a>'),b0=_e('<td class="svelte-9laac1"><!> <span> </span></td>'),y0=(e,n,t,r)=>n(t.modelDefinitions[r()]),w0=_t('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'),D0=_t('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'),E0=_e('<tr class="definition-row svelte-9laac1"><td class="svelte-9laac1"><div class="definition-content svelte-9laac1"><div class="code-wrapper svelte-9laac1"><!></div> <button class="copy-btn svelte-9laac1" aria-label="Copy to clipboard" title="Copy code"><!></button></div></td></tr>'),x0=_e('<tr><!><td class="dim-cell svelte-9laac1"> </td><!></tr> <!>',1),R0=_e('<div class="table-scroll svelte-9laac1"><table class="svelte-9laac1"><thead><tr class="svelte-9laac1"><th class="model-col-header svelte-9laac1">Model</th><th class="dim-col-header svelte-9laac1">Dim</th><!></tr></thead><tbody></tbody></table></div>');function M0(e,n){pn(n,!0);const t=ln(()=>[...n.data.keys()]),r=ln(()=>n.data.size>0?[...n.data.get(w(t)[0]).keys()].sort((F,O)=>go(F,O)):[]);let o=be(Le({column:null,direction:null})),s=be(null),a=be(!1);function c(F){navigator.clipboard.writeText(F),Z(a,!0),setTimeout(()=>{Z(a,!1)},2e3)}function l(F){w(o).column!==F?Z(o,{column:F,direction:"asc"},!0):w(o).direction==="asc"?Z(o,{column:F,direction:"desc"},!0):Z(o,{column:null,direction:null},!0)}const u=ln(()=>{const F=Lt(n.data);if(!w(o).column||!w(o).direction)return F;const O=w(o).column,V=w(o).direction;return[...F].sort(([,E],[,x])=>{const v=E.get(O),P=x.get(O),R=typeof v=="number",L=typeof P=="number";return!R&&!L?0:R?L?V==="asc"?v-P:P-v:-1:1})});var p=R0(),_=z(p),f=z(_),h=z(f),b=oe(z(h),2);Tn(b,17,()=>w(r),Nn,(F,O)=>{var V=v0();V.__click=[p0,l,O];var E=z(V),x=oe(E),v=z(x);{var P=R=>{var L=Qn(),X=cn(L);{var ee=se=>{var le=It("▲");G(se,le)},ne=se=>{var le=It("▼");G(se,le)};Ue(X,se=>{w(o).direction==="asc"?se(ee):se(ne,!1)})}G(R,L)};Ue(v,R=>{w(o).column===w(O)&&R(P)})}ve(()=>Ae(E,`${w(O)??""} `)),G(F,V)});var S=oe(f);Tn(S,21,()=>w(u),Nn,(F,O,V)=>{let E=()=>w(O)[0],x=()=>w(O)[1];var v=x0(),P=cn(v);Cn(P,1,"svelte-9laac1",null,{},{alt:V%2===1});var R=z(P);n0(R,{get name(){return E()},onToggle:()=>Z(s,w(s)===E()?null:E(),!0)});var L=oe(R),X=z(L),ee=oe(L);Tn(ee,17,()=>Lt(x()),Nn,(le,me)=>{let Ee=()=>w(me)[0],Ve=()=>w(me)[1];var Me=Qn();const ie=ln(()=>m0(E(),Ee())??Ve());var Ye=cn(Me);{var bn=Fe=>{var ce=g0(),Ne=z(ce);ve((wn,tn)=>{Yt(ce,wn),Ae(Ne,tn)},[()=>u0(w(ie),x(),n.theme),()=>w(ie).toFixed(3)]),G(Fe,ce)},yn=Fe=>{var ce=b0(),Ne=z(ce);{var wn=Dn=>{var pt=h0();ve(rn=>et(pt,"href",rn),[()=>Cr(E(),Ee())]),G(Dn,pt)};Ue(Ne,Dn=>{Cr(E(),Ee())&&Dn(wn)})}var tn=oe(Ne,2),mt=z(tn);ve(()=>{Cn(tn,1,uo(w(ie)==="NaN"?"nan":w(ie)),"svelte-9laac1"),Ae(mt,w(ie))}),G(Fe,ce)};Ue(Ye,Fe=>{typeof w(ie)=="number"?Fe(bn):Fe(yn,!1)})}G(le,Me)});var ne=oe(P,2);{var se=le=>{var me=E0(),Ee=z(me),Ve=z(Ee),Me=z(Ve),ie=z(Me);a0(ie,{language:c0,get code(){return n.modelDefinitions[E()]}});var Ye=oe(Me,2);Ye.__click=[y0,c,n,E];var bn=z(Ye);{var yn=ce=>{var Ne=w0();G(ce,Ne)},Fe=ce=>{var Ne=D0();G(ce,Ne)};Ue(bn,ce=>{w(a)?ce(yn):ce(Fe,!1)})}ve(()=>{et(Ee,"colspan",w(r).length+2),Ye.disabled=w(a)}),G(le,me)};Ue(ne,le=>{w(s)===E()&&le(se)})}ve(le=>Ae(X,le),[()=>n.dimensions.get(E())??""]),G(F,v)}),G(e,p),vn()}dt(["click"]);var F0=_e('<div class="legend svelte-10rqhbc"><div class="gradient-section svelte-10rqhbc"><span class="label svelte-10rqhbc">Faster</span> <div class="gradient-bar svelte-10rqhbc"></div> <span class="label svelte-10rqhbc">Slower</span></div> <div class="divider svelte-10rqhbc"></div> <div class="status-labels svelte-10rqhbc"><span class="status error svelte-10rqhbc">error</span> <span class="status wrong svelte-10rqhbc">wrong</span> <span class="status nan svelte-10rqhbc">NaN</span></div></div>');function N0(e,n){pn(n,!0);const t=ln(()=>()=>`linear-gradient(to right, ${f0(n.theme).join(", ")})`);var r=F0(),o=z(r),s=oe(z(o),2);ve(a=>Yt(s,`background: ${a??""}`),[()=>w(t)()]),G(e,r),vn()}function T0(e,n){Z(n,w(n)==="light"?"dark":"light",!0),document.documentElement.setAttribute("data-theme",w(n)),localStorage.setItem("theme",w(n))}var k0=_t('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'),S0=_t('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'),C0=_e('<h3 class="category-heading svelte-1wqfdel"> </h3> <!>',1),A0=_e('<p class="no-results svelte-1wqfdel"> </p>'),P0=_e(`<div id="main-wrapper" class="svelte-1wqfdel"><main class="svelte-1wqfdel"><div class="header svelte-1wqfdel"><div class="title-area svelte-1wqfdel"><h1 class="svelte-1wqfdel">Turing AD tests</h1> <nav class="nav-links svelte-1wqfdel"><a href="https://turinglang.org/docs" class="svelte-1wqfdel">Turing.jl Docs</a> <a href="https://github.com/TuringLang/Turing.jl" class="svelte-1wqfdel">Turing.jl GitHub</a> <a href="https://github.com/TuringLang/ADTests" class="svelte-1wqfdel">ADTests GitHub</a></nav></div> <button class="theme-toggle svelte-1wqfdel" aria-label="Toggle Dark Mode" title="Toggle theme"><!></button></div> <p class="intro svelte-1wqfdel">A comparison of how different AD backends perform on <a href="https://turinglang.org/docs">Turing.jl</a> models.
            This does not imply any endorsement; for general AD comparisons see <a href="https://github.com/gradbench/gradbench" target="_blank">GradBench</a>.</p> <div class="info-card svelte-1wqfdel"><h4 class="svelte-1wqfdel">Reading the table</h4> <ul class="svelte-1wqfdel"><li class="svelte-1wqfdel">Click model names to see their definitions.</li> <li class="svelte-1wqfdel"><b>Numbers</b> = gradient time / primal time. <b>Smaller is faster.</b></li> <li class="svelte-1wqfdel"><span class="wrong svelte-1wqfdel">wrong</span> = AD ran but gave an incorrect result
                    (compared against FiniteDifferences).</li> <li class="svelte-1wqfdel"><span class="error svelte-1wqfdel">error</span> = AD failed to run.</li> <li class="svelte-1wqfdel"><span class="issue-example svelte-1wqfdel">(?)</span> links to a GitHub issue describing the problem.</li></ul></div> <div class="warning svelte-1wqfdel">Note: Results are from Julia 1.11.</div> <div class="results-header svelte-1wqfdel"><h2 class="svelte-1wqfdel">Results</h2> <a class="download-link svelte-1wqfdel" href="adtests.json" target="_blank" download=""><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> JSON</a></div> <div class="controls svelte-1wqfdel"><input type="search" class="search-input svelte-1wqfdel" placeholder="Filter models..."> <!></div> <!> <h2>Manifest</h2> <p class="secondary-text svelte-1wqfdel">Package versions used for the tests above:</p> <!></main></div>`);function O0(e,n){pn(n,!0);const t=typeof document<"u"&&(localStorage.getItem("theme")||document.documentElement.getAttribute("data-theme"))||"light";typeof document<"u"&&document.documentElement.setAttribute("data-theme",t);let r=be(Le(t)),o=new Map,s=new Map;for(const[v,P]of Object.entries(Ha)){let R=P.__category__;delete P.__category__;let L=P.__dim__??null;delete P.__dim__,s.set(v,typeof L=="number"?L:null);let X=new Map;for(const[ee,ne]of Object.entries(P))X.set(ee,ne);o.has(R)||o.set(R,new Map),o.get(R).set(v,X)}let a=new Map([...o.entries()].sort()),c=be("");const l=ln(()=>{const v=w(c).trim().toLowerCase();if(!v)return a;const P=new Map;for(const[R,L]of a){const X=new Map;for(const[ee,ne]of L)ee.toLowerCase().includes(v)&&X.set(ee,ne);X.size>0&&P.set(R,X)}return P});var u=P0(),p=z(u),_=z(p),f=oe(z(_),2);f.__click=[T0,r];var h=z(f);{var b=v=>{var P=k0();G(v,P)},S=v=>{var P=S0();G(v,P)};Ue(h,v=>{w(r)==="dark"?v(b):v(S,!1)})}var F=oe(_,10),O=z(F),V=oe(O,2);N0(V,{get theme(){return w(r)}});var E=oe(F,2);Tn(E,17,()=>w(l).entries(),Nn,(v,P)=>{let R=()=>w(P)[0],L=()=>w(P)[1];var X=C0(),ee=cn(X),ne=z(ee),se=oe(ee,2);M0(se,{get data(){return L()},modelDefinitions:Ql,dimensions:s,get theme(){return w(r)}}),ve(()=>Ae(ne,R())),G(v,X)},v=>{var P=A0(),R=z(P);ve(()=>Ae(R,`No models match "${w(c)??""}".`)),G(v,P)});var x=oe(E,6);Q_(x,{}),Ni(O,()=>w(c),v=>Z(c,v)),G(e,u),vn()}dt(["click"]);_i(O0,{target:document.getElementById("app")});
