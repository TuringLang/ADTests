(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const nr=!1;var Hn=Array.isArray,$o=Array.prototype.indexOf,Dt=Array.from,Uo=Object.defineProperty,je=Object.getOwnPropertyDescriptor,hr=Object.getOwnPropertyDescriptors,Ho=Object.prototype,Zo=Array.prototype,Rt=Object.getPrototypeOf,tr=Object.isExtensible;function cn(e){return typeof e=="function"}function Go(e){return e()}function _t(e){for(var n=0;n<e.length;n++)e[n]()}const ge=2,br=4,Zn=8,Mt=16,Ce=32,nn=64,In=128,ce=256,On=512,re=1024,Me=2048,Ue=4096,Ne=8192,Gn=16384,Ko=32768,xt=65536,qo=1<<17,Wo=1<<19,yr=1<<20,mt=1<<21,Ke=Symbol("$state"),wr=Symbol("legacy props"),Xo=Symbol("");function Er(e){return e===this.v}function Jo(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Tt(e){return!Jo(e,this.v)}function Yo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function es(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ns(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ts(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function rs(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function os(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ss(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function is(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let hn=!1,as=!1;function ls(){hn=!0}const Ft=1,Nt=2,Dr=4,cs=8,us=16,fs=1,ds=2,Rr=4,_s=8,ms=16,vs=1,gs=2,se=Symbol(),ps="http://www.w3.org/1999/xhtml",hs="@attach";function Mr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let $=null;function rr(e){$=e}function bn(e,n=!1,t){var r=$={p:$,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};hn&&!n&&($.l={s:null,u:null,r1:[],r2:Qe(!1)}),Rs(()=>{r.d=!0})}function yn(e){const n=$;if(n!==null){const l=n.e;if(l!==null){var t=z,r=V;n.e=null;try{for(var i=0;i<l.length;i++){var s=l[i];$e(s.effect),xe(s.reaction),At(s.fn)}}finally{$e(t),xe(r)}}$=n.p,n.m=!0}return{}}function Kn(){return!hn||$!==null&&$.l===null}function Ge(e){if(typeof e!="object"||e===null||Ke in e)return e;const n=Rt(e);if(n!==Ho&&n!==Zo)return e;var t=new Map,r=Hn(e),i=Oe(0),s=V,l=u=>{var a=V;xe(s);var c=u();return xe(a),c};return r&&t.set("length",Oe(e.length)),new Proxy(e,{defineProperty(u,a,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&os();var v=t.get(a);return v===void 0?(v=l(()=>Oe(c.value)),t.set(a,v)):de(v,l(()=>Ge(c.value))),!0},deleteProperty(u,a){var c=t.get(a);if(c===void 0)a in u&&(t.set(a,l(()=>Oe(se))),ct(i));else{if(r&&typeof a=="string"){var v=t.get("length"),_=Number(a);Number.isInteger(_)&&_<v.v&&de(v,_)}de(c,se),ct(i)}return!0},get(u,a,c){var p;if(a===Ke)return e;var v=t.get(a),_=a in u;if(v===void 0&&(!_||(p=je(u,a))!=null&&p.writable)&&(v=l(()=>Oe(Ge(_?u[a]:se))),t.set(a,v)),v!==void 0){var f=O(v);return f===se?void 0:f}return Reflect.get(u,a,c)},getOwnPropertyDescriptor(u,a){var c=Reflect.getOwnPropertyDescriptor(u,a);if(c&&"value"in c){var v=t.get(a);v&&(c.value=O(v))}else if(c===void 0){var _=t.get(a),f=_==null?void 0:_.v;if(_!==void 0&&f!==se)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return c},has(u,a){var f;if(a===Ke)return!0;var c=t.get(a),v=c!==void 0&&c.v!==se||Reflect.has(u,a);if(c!==void 0||z!==null&&(!v||(f=je(u,a))!=null&&f.writable)){c===void 0&&(c=l(()=>Oe(v?Ge(u[a]):se)),t.set(a,c));var _=O(c);if(_===se)return!1}return v},set(u,a,c,v){var H;var _=t.get(a),f=a in u;if(r&&a==="length")for(var p=c;p<_.v;p+=1){var h=t.get(p+"");h!==void 0?de(h,se):p in u&&(h=l(()=>Oe(se)),t.set(p+"",h))}_===void 0?(!f||(H=je(u,a))!=null&&H.writable)&&(_=l(()=>Oe(void 0)),de(_,l(()=>Ge(c))),t.set(a,_)):(f=_.v!==se,de(_,l(()=>Ge(c))));var F=Reflect.getOwnPropertyDescriptor(u,a);if(F!=null&&F.set&&F.set.call(v,c),!f){if(r&&typeof a=="string"){var T=t.get("length"),P=Number(a);Number.isInteger(P)&&P>=T.v&&de(T,P+1)}ct(i)}return!0},ownKeys(u){O(i);var a=Reflect.ownKeys(u).filter(_=>{var f=t.get(_);return f===void 0||f.v!==se});for(var[c,v]of t)v.v!==se&&!(c in u)&&a.push(c);return a},setPrototypeOf(){ss()}})}function ct(e,n=1){de(e,e.v+n)}function vn(e){var n=ge|Me,t=V!==null&&(V.f&ge)!==0?V:null;return z===null||t!==null&&(t.f&ce)!==0?n|=ce:z.f|=yr,{ctx:$,deps:null,effects:null,equals:Er,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??z}}function St(e){const n=vn(e);return n.equals=Tt,n}function xr(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)Se(n[t])}}function bs(e){for(var n=e.parent;n!==null;){if((n.f&ge)===0)return n;n=n.parent}return null}function Tr(e){var n,t=z;$e(bs(e));try{xr(e),n=Ur(e)}finally{$e(t)}return n}function Fr(e){var n=Tr(e),t=(ze||(e.f&ce)!==0)&&e.deps!==null?Ue:re;_e(e,t),e.equals(n)||(e.v=n,e.wv=jr())}const gn=new Map;function Qe(e,n){var t={f:0,v:e,reactions:null,equals:Er,rv:0,wv:0};return t}function Oe(e,n){const t=Qe(e);return Cs(t),t}function Ct(e,n=!1){var r;const t=Qe(e);return n||(t.equals=Tt),hn&&$!==null&&$.l!==null&&((r=$.l).s??(r.s=[])).push(t),t}function de(e,n,t=!1){V!==null&&!Re&&Kn()&&(V.f&(ge|Mt))!==0&&!(te!=null&&te.includes(e))&&is();let r=t?Ge(n):n;return vt(e,r)}function vt(e,n){if(!e.equals(n)){var t=e.v;wn?gn.set(e,n):gn.set(e,t),e.v=n,(e.f&ge)!==0&&((e.f&Me)!==0&&Tr(e),_e(e,(e.f&ce)===0?re:Ue)),e.wv=jr(),Nr(e,Me),Kn()&&z!==null&&(z.f&re)!==0&&(z.f&(Ce|nn))===0&&(fe===null?As([e]):fe.push(e))}return n}function or(e,n=1){var t=O(e),r=n===1?t++:t--;return de(e,t),r}function Nr(e,n){var t=e.reactions;if(t!==null)for(var r=Kn(),i=t.length,s=0;s<i;s++){var l=t[s],u=l.f;(u&Me)===0&&(!r&&l===z||(_e(l,n),(u&(re|ce))!==0&&((u&ge)!==0?Nr(l,Ue):et(l))))}}let ys=!1;var sr,Sr,Cr,Ar;function ws(){if(sr===void 0){sr=window,Sr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Cr=je(n,"firstChild").get,Ar=je(n,"nextSibling").get,tr(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),tr(t)&&(t.__t=void 0)}}function qn(e=""){return document.createTextNode(e)}function Pe(e){return Cr.call(e)}function Wn(e){return Ar.call(e)}function W(e,n){return Pe(e)}function Xn(e,n){{var t=Pe(e);return t instanceof Comment&&t.data===""?Wn(t):t}}function Ee(e,n=1,t=!1){let r=e;for(;n--;)r=Wn(r);return r}function Es(e){e.textContent=""}function kr(e){z===null&&V===null&&es(),V!==null&&(V.f&ce)!==0&&z===null&&Qo(),wn&&Yo()}function Ds(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function tn(e,n,t,r=!0){var i=z,s={ctx:$,deps:null,nodes_start:null,nodes_end:null,f:e|Me,first:null,fn:n,last:null,next:null,parent:i,prev:null,teardown:null,transitions:null,wv:0};if(t)try{Qn(s),s.f|=Ko}catch(a){throw Se(s),a}else n!==null&&et(s);var l=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(yr|In))===0;if(!l&&r&&(i!==null&&Ds(s,i),V!==null&&(V.f&ge)!==0)){var u=V;(u.effects??(u.effects=[])).push(s)}return s}function Rs(e){const n=tn(Zn,null,!1);return _e(n,re),n.teardown=e,n}function ir(e){kr();var n=z!==null&&(z.f&Ce)!==0&&$!==null&&!$.m;if(n){var t=$;(t.e??(t.e=[])).push({fn:e,effect:z,reaction:V})}else{var r=At(e);return r}}function Ms(e){return kr(),kt(e)}function xs(e){const n=tn(nn,e,!0);return(t={})=>new Promise(r=>{t.outro?Ln(n,()=>{Se(n),r(void 0)}):(Se(n),r(void 0))})}function At(e){return tn(br,e,!1)}function Ts(e,n){var t=$,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=kt(()=>{e(),!r.ran&&(r.ran=!0,de(t.l.r2,!0),$n(n))})}function Fs(){var e=$;kt(()=>{if(O(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&re)!==0&&_e(t,Ue),rn(t)&&Qn(t),n.ran=!1}e.l.r2.v=!1}})}function kt(e){return tn(Zn,e,!0)}function De(e,n=[],t=vn){const r=n.map(t);return Jn(()=>e(...r.map(O)))}function Jn(e,n=0){return tn(Zn|Mt|n,e,!0)}function en(e,n=!0){return tn(Zn|Ce,e,!0,n)}function Ir(e){var n=e.teardown;if(n!==null){const t=wn,r=V;ar(!0),xe(null);try{n.call(null)}finally{ar(t),xe(r)}}}function Or(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&nn)!==0?t.parent=null:Se(t,n),t=r}}function Ns(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&Ce)===0&&Se(n),n=t}}function Se(e,n=!0){var t=!1;(n||(e.f&Wo)!==0)&&e.nodes_start!==null&&(Lr(e.nodes_start,e.nodes_end),t=!0),Or(e,n&&!t),jn(e,0),_e(e,Gn);var r=e.transitions;if(r!==null)for(const s of r)s.stop();Ir(e);var i=e.parent;i!==null&&i.first!==null&&Pr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Lr(e,n){for(;e!==null;){var t=e===n?null:Wn(e);e.remove(),e=t}}function Pr(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function Ln(e,n){var t=[];It(e,t,!0),zr(t,()=>{Se(e),n&&n()})}function zr(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var i of e)i.out(r)}else n()}function It(e,n,t){if((e.f&Ne)===0){if(e.f^=Ne,e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&n.push(l);for(var r=e.first;r!==null;){var i=r.next,s=(r.f&xt)!==0||(r.f&Ce)!==0;It(r,n,s?t:!1),r=i}}}function Pn(e){Vr(e,!0)}function Vr(e,n){if((e.f&Ne)!==0){e.f^=Ne,(e.f&re)===0&&(e.f^=re),rn(e)&&(_e(e,Me),et(e));for(var t=e.first;t!==null;){var r=t.next,i=(t.f&xt)!==0||(t.f&Ce)!==0;Vr(t,i?n:!1),t=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&s.in()}}let zn=[];function Ss(){var e=zn;zn=[],_t(e)}function Ot(e){zn.length===0&&queueMicrotask(Ss),zn.push(e)}let An=!1,gt=!1,Vn=null,qe=!1,wn=!1;function ar(e){wn=e}let kn=[];let V=null,Re=!1;function xe(e){V=e}let z=null;function $e(e){z=e}let te=null;function Cs(e){V!==null&&V.f&mt&&(te===null?te=[e]:te.push(e))}let ee=null,le=0,fe=null;function As(e){fe=e}let Br=1,Bn=0,ze=!1;function jr(){return++Br}function rn(e){var _;var n=e.f;if((n&Me)!==0)return!0;if((n&Ue)!==0){var t=e.deps,r=(n&ce)!==0;if(t!==null){var i,s,l=(n&On)!==0,u=r&&z!==null&&!ze,a=t.length;if(l||u){var c=e,v=c.parent;for(i=0;i<a;i++)s=t[i],(l||!((_=s==null?void 0:s.reactions)!=null&&_.includes(c)))&&(s.reactions??(s.reactions=[])).push(c);l&&(c.f^=On),u&&v!==null&&(v.f&ce)===0&&(c.f^=ce)}for(i=0;i<a;i++)if(s=t[i],rn(s)&&Fr(s),s.wv>e.wv)return!0}(!r||z!==null&&!ze)&&_e(e,re)}return!1}function ks(e,n){for(var t=n;t!==null;){if((t.f&In)!==0)try{t.fn(e);return}catch{t.f^=In}t=t.parent}throw An=!1,e}function lr(e){return(e.f&Gn)===0&&(e.parent===null||(e.parent.f&In)===0)}function Yn(e,n,t,r){if(An){if(t===null&&(An=!1),lr(n))throw e;return}if(t!==null&&(An=!0),ks(e,n),lr(n))throw e}function $r(e,n,t=!0){var r=e.reactions;if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];te!=null&&te.includes(e)||((s.f&ge)!==0?$r(s,n,!1):n===s&&(t?_e(s,Me):(s.f&re)!==0&&_e(s,Ue),et(s)))}}function Ur(e){var p;var n=ee,t=le,r=fe,i=V,s=ze,l=te,u=$,a=Re,c=e.f;ee=null,le=0,fe=null,ze=(c&ce)!==0&&(Re||!qe||V===null),V=(c&(Ce|nn))===0?e:null,te=null,rr(e.ctx),Re=!1,Bn++,e.f|=mt;try{var v=(0,e.fn)(),_=e.deps;if(ee!==null){var f;if(jn(e,le),_!==null&&le>0)for(_.length=le+ee.length,f=0;f<ee.length;f++)_[le+f]=ee[f];else e.deps=_=ee;if(!ze)for(f=le;f<_.length;f++)((p=_[f]).reactions??(p.reactions=[])).push(e)}else _!==null&&le<_.length&&(jn(e,le),_.length=le);if(Kn()&&fe!==null&&!Re&&_!==null&&(e.f&(ge|Ue|Me))===0)for(f=0;f<fe.length;f++)$r(fe[f],e);return i!==null&&i!==e&&(Bn++,fe!==null&&(r===null?r=fe:r.push(...fe))),v}finally{ee=n,le=t,fe=r,V=i,ze=s,te=l,rr(u),Re=a,e.f^=mt}}function Is(e,n){let t=n.reactions;if(t!==null){var r=$o.call(t,e);if(r!==-1){var i=t.length-1;i===0?t=n.reactions=null:(t[r]=t[i],t.pop())}}t===null&&(n.f&ge)!==0&&(ee===null||!ee.includes(n))&&(_e(n,Ue),(n.f&(ce|On))===0&&(n.f^=On),xr(n),jn(n,0))}function jn(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Is(e,t[r])}function Qn(e){var n=e.f;if((n&Gn)===0){_e(e,re);var t=z,r=$,i=qe;z=e,qe=!0;try{(n&Mt)!==0?Ns(e):Or(e),Ir(e);var s=Ur(e);e.teardown=typeof s=="function"?s:null,e.wv=Br;var l=e.deps,u;nr&&as&&e.f&Me}catch(a){Yn(a,e,t,r||e.ctx)}finally{qe=i,z=t}}}function Os(){try{ns()}catch(e){if(Vn!==null)Yn(e,Vn,null);else throw e}}function Ls(){var e=qe;try{var n=0;for(qe=!0;kn.length>0;){n++>1e3&&Os();var t=kn,r=t.length;kn=[];for(var i=0;i<r;i++){var s=zs(t[i]);Ps(s)}gn.clear()}}finally{gt=!1,qe=e,Vn=null}}function Ps(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(Gn|Ne))===0)try{rn(r)&&(Qn(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Pr(r):r.fn=null))}catch(i){Yn(i,r,null,r.ctx)}}}function et(e){gt||(gt=!0,queueMicrotask(Ls));for(var n=Vn=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(nn|Ce))!==0){if((t&re)===0)return;n.f^=re}}kn.push(n)}function zs(e){for(var n=[],t=e;t!==null;){var r=t.f,i=(r&(Ce|nn))!==0,s=i&&(r&re)!==0;if(!s&&(r&Ne)===0){if((r&br)!==0)n.push(t);else if(i)t.f^=re;else try{rn(t)&&Qn(t)}catch(a){Yn(a,t,null,t.ctx)}var l=t.first;if(l!==null){t=l;continue}}var u=t.parent;for(t=t.next;t===null&&u!==null;)t=u.next,u=u.parent}return n}function O(e){var n=e.f,t=(n&ge)!==0;if(V!==null&&!Re){if(!(te!=null&&te.includes(e))){var r=V.deps;e.rv<Bn&&(e.rv=Bn,ee===null&&r!==null&&r[le]===e?le++:ee===null?ee=[e]:(!ze||!ee.includes(e))&&ee.push(e))}}else if(t&&e.deps===null&&e.effects===null){var i=e,s=i.parent;s!==null&&(s.f&ce)===0&&(i.f^=ce)}return t&&(i=e,rn(i)&&Fr(i)),wn&&gn.has(e)?gn.get(e):e.v}function $n(e){var n=Re;try{return Re=!0,e()}finally{Re=n}}const Vs=-7169;function _e(e,n){e.f=e.f&Vs|n}function pt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ke in e)ht(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&Ke in t&&ht(t)}}}function ht(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{ht(e[r],n)}catch{}const t=Rt(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=hr(t);for(let i in r){const s=r[i].get;if(s)try{s.call(e)}catch{}}}}}function Bs(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const js=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function $s(e){return js.includes(e)}const Us={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Hs(e){return e=e.toLowerCase(),Us[e]??e}const Zs=["touchstart","touchmove"];function Gs(e){return Zs.includes(e)}function Ks(e,n){if(n){const t=document.body;e.autofocus=!0,Ot(()=>{document.activeElement===t&&e.focus()})}}function qs(e){var n=V,t=z;xe(null),$e(null);try{return e()}finally{xe(n),$e(t)}}const Hr=new Set,bt=new Set;function Ws(e,n,t,r={}){function i(s){if(r.capture||fn.call(n,s),!s.cancelBubble)return qs(()=>t==null?void 0:t.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Ot(()=>{n.addEventListener(e,i,r)}):n.addEventListener(e,i,r),i}function Xs(e){for(var n=0;n<e.length;n++)Hr.add(e[n]);for(var t of bt)t(e)}function fn(e){var H;var n=this,t=n.ownerDocument,r=e.type,i=((H=e.composedPath)==null?void 0:H.call(e))||[],s=i[0]||e.target,l=0,u=e.__root;if(u){var a=i.indexOf(u);if(a!==-1&&(n===document||n===window)){e.__root=n;return}var c=i.indexOf(n);if(c===-1)return;a<=c&&(l=a)}if(s=i[l]||e.target,s!==n){Uo(e,"currentTarget",{configurable:!0,get(){return s||t}});var v=V,_=z;xe(null),$e(null);try{for(var f,p=[];s!==null;){var h=s.assignedSlot||s.parentNode||s.host||null;try{var F=s["__"+r];if(F!=null&&(!s.disabled||e.target===s))if(Hn(F)){var[T,...P]=F;T.apply(s,[e,...P])}else F.call(s,e)}catch(x){f?p.push(x):f=x}if(e.cancelBubble||h===n||h===null)break;s=h}if(f){for(let x of p)queueMicrotask(()=>{throw x});throw f}}finally{e.__root=n,delete e.currentTarget,xe(v),$e(_)}}}function Zr(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function pn(e,n){var t=z;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function pe(e,n){var t=(n&vs)!==0,r=(n&gs)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=Zr(s?e:"<!>"+e),t||(i=Pe(i)));var l=r||Sr?document.importNode(i,!0):i.cloneNode(!0);if(t){var u=Pe(l),a=l.lastChild;pn(u,a)}else pn(l,l);return l}}function Js(e=""){{var n=qn(e+"");return pn(n,n),n}}function Lt(){var e=document.createDocumentFragment(),n=document.createComment(""),t=qn();return e.append(n,t),pn(n,t),e}function ne(e,n){e!==null&&e.before(n)}function Ve(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function Ys(e,n){return Qs(e,n)}const Ye=new Map;function Qs(e,{target:n,anchor:t,props:r={},events:i,context:s,intro:l=!0}){ws();var u=new Set,a=_=>{for(var f=0;f<_.length;f++){var p=_[f];if(!u.has(p)){u.add(p);var h=Gs(p);n.addEventListener(p,fn,{passive:h});var F=Ye.get(p);F===void 0?(document.addEventListener(p,fn,{passive:h}),Ye.set(p,1)):Ye.set(p,F+1)}}};a(Dt(Hr)),bt.add(a);var c=void 0,v=xs(()=>{var _=t??n.appendChild(qn());return en(()=>{if(s){bn({});var f=$;f.c=s}i&&(r.$$events=i),c=e(_,r)||{},s&&yn()}),()=>{var h;for(var f of u){n.removeEventListener(f,fn);var p=Ye.get(f);--p===0?(document.removeEventListener(f,fn),Ye.delete(f)):Ye.set(f,p)}bt.delete(a),_!==t&&((h=_.parentNode)==null||h.removeChild(_))}});return ei.set(c,v),c}let ei=new WeakMap;function yt(e,n,[t,r]=[0,0]){var i=e,s=null,l=null,u=se,a=t>0?xt:0,c=!1;const v=(f,p=!0)=>{c=!0,_(p,f)},_=(f,p)=>{u!==(u=f)&&(u?(s?Pn(s):p&&(s=en(()=>p(i))),l&&Ln(l,()=>{l=null})):(l?Pn(l):p&&(l=en(()=>p(i,[t+1,r]))),s&&Ln(s,()=>{s=null})))};Jn(()=>{c=!1,n(v),c||_(null,null)},a)}function _n(e,n){return n}function ni(e,n,t,r){for(var i=[],s=n.length,l=0;l<s;l++)It(n[l].e,i,!0);var u=s>0&&i.length===0&&t!==null;if(u){var a=t.parentNode;Es(a),a.append(t),r.clear(),Le(e,n[0].prev,n[s-1].next)}zr(i,()=>{for(var c=0;c<s;c++){var v=n[c];u||(r.delete(v.k),Le(e,v.prev,v.next)),Se(v.e,!u)}})}function mn(e,n,t,r,i,s=null){var l=e,u={flags:n,items:new Map,first:null},a=(n&Dr)!==0;if(a){var c=e;l=c.appendChild(qn())}var v=null,_=!1,f=St(()=>{var p=t();return Hn(p)?p:p==null?[]:Dt(p)});Jn(()=>{var p=O(f),h=p.length;_&&h===0||(_=h===0,ti(p,u,l,i,n,r,t),s!==null&&(h===0?v?Pn(v):v=en(()=>s(l)):v!==null&&Ln(v,()=>{v=null})),O(f))})}function ti(e,n,t,r,i,s,l){var he,We,me,be;var u=(i&cs)!==0,a=(i&(Ft|Nt))!==0,c=e.length,v=n.items,_=n.first,f=_,p,h=null,F,T=[],P=[],H,x,E,M;if(u)for(M=0;M<c;M+=1)H=e[M],x=s(H,M),E=v.get(x),E!==void 0&&((he=E.a)==null||he.measure(),(F??(F=new Set)).add(E));for(M=0;M<c;M+=1){if(H=e[M],x=s(H,M),E=v.get(x),E===void 0){var Q=f?f.e.nodes_start:t;h=oi(Q,n,h,h===null?n.first:h.next,H,x,M,r,i,l),v.set(x,h),T=[],P=[],f=h.next;continue}if(a&&ri(E,H,M,i),(E.e.f&Ne)!==0&&(Pn(E.e),u&&((We=E.a)==null||We.unfix(),(F??(F=new Set)).delete(E))),E!==f){if(p!==void 0&&p.has(E)){if(T.length<P.length){var S=P[0],U;h=S.prev;var oe=T[0],Te=T[T.length-1];for(U=0;U<T.length;U+=1)cr(T[U],S,t);for(U=0;U<P.length;U+=1)p.delete(P[U]);Le(n,oe.prev,Te.next),Le(n,h,oe),Le(n,Te,S),f=S,h=Te,M-=1,T=[],P=[]}else p.delete(E),cr(E,f,t),Le(n,E.prev,E.next),Le(n,E,h===null?n.first:h.next),Le(n,h,E),h=E;continue}for(T=[],P=[];f!==null&&f.k!==x;)(f.e.f&Ne)===0&&(p??(p=new Set)).add(f),P.push(f),f=f.next;if(f===null)continue;E=f}T.push(E),h=E,f=E.next}if(f!==null||p!==void 0){for(var ie=p===void 0?[]:Dt(p);f!==null;)(f.e.f&Ne)===0&&ie.push(f),f=f.next;var Ae=ie.length;if(Ae>0){var on=(i&Dr)!==0&&c===0?t:null;if(u){for(M=0;M<Ae;M+=1)(me=ie[M].a)==null||me.measure();for(M=0;M<Ae;M+=1)(be=ie[M].a)==null||be.fix()}ni(n,ie,on,v)}}u&&Ot(()=>{var ue;if(F!==void 0)for(E of F)(ue=E.a)==null||ue.apply()}),z.first=n.first&&n.first.e,z.last=h&&h.e}function ri(e,n,t,r){(r&Ft)!==0&&vt(e.v,n),(r&Nt)!==0?vt(e.i,t):e.i=t}function oi(e,n,t,r,i,s,l,u,a,c){var v=(a&Ft)!==0,_=(a&us)===0,f=v?_?Ct(i):Qe(i):i,p=(a&Nt)===0?l:Qe(l),h={i:p,v:f,k:s,a:null,e:null,prev:t,next:r};try{return h.e=en(()=>u(e,f,p,c),ys),h.e.prev=t&&t.e,h.e.next=r&&r.e,t===null?n.first=h:(t.next=h,t.e.next=h.e),r!==null&&(r.prev=h,r.e.prev=h.e),h}finally{}}function cr(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,i=n?n.e.nodes_start:t,s=e.e.nodes_start;s!==r;){var l=Wn(s);i.before(s),s=l}}function Le(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function si(e,n,t=!1,r=!1,i=!1){var s=e,l="";De(()=>{var u=z;if(l!==(l=n()??"")&&(u.nodes_start!==null&&(Lr(u.nodes_start,u.nodes_end),u.nodes_start=u.nodes_end=null),l!=="")){var a=l+"";t?a=`<svg>${a}</svg>`:r&&(a=`<math>${a}</math>`);var c=Zr(a);if((t||r)&&(c=Pe(c)),pn(Pe(c),c.lastChild),t||r)for(;Pe(c);)s.before(Pe(c));else s.before(c)}})}function ii(e,n,t,r,i){var u;var s=(u=n.$$slots)==null?void 0:u[t],l=!1;s===!0&&(s=n.children,l=!0),s===void 0?i!==null&&i(e):s(e,l?()=>r:r)}function ai(e,n){var t=void 0,r;Jn(()=>{t!==(t=n())&&(r&&(Se(r),r=null),t&&(r=en(()=>{At(()=>t(e))})))})}function Gr(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=Gr(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function li(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=Gr(e))&&(r&&(r+=" "),r+=n);return r}function Kr(e){return typeof e=="object"?li(e):e??""}const ur=[...` 	
\r\f \v\uFEFF`];function ci(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var i in t)if(t[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,l=0;(l=r.indexOf(i,l))>=0;){var u=l+s;(l===0||ur.includes(r[l-1]))&&(u===r.length||ur.includes(r[u]))?r=(l===0?"":r.substring(0,l))+r.substring(u+1):l=u}}return r===""?null:r}function fr(e,n=!1){var t=n?" !important;":";",r="";for(var i in e){var s=e[i];s!=null&&s!==""&&(r+=" "+i+": "+s+t)}return r}function ut(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ui(e,n){if(n){var t="",r,i;if(Array.isArray(n)?(r=n[0],i=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,l=0,u=!1,a=[];r&&a.push(...Object.keys(r).map(ut)),i&&a.push(...Object.keys(i).map(ut));var c=0,v=-1;const F=e.length;for(var _=0;_<F;_++){var f=e[_];if(u?f==="/"&&e[_-1]==="*"&&(u=!1):s?s===f&&(s=!1):f==="/"&&e[_+1]==="*"?u=!0:f==='"'||f==="'"?s=f:f==="("?l++:f===")"&&l--,!u&&s===!1&&l===0){if(f===":"&&v===-1)v=_;else if(f===";"||_===F-1){if(v!==-1){var p=ut(e.substring(c,v).trim());if(!a.includes(p)){f!==";"&&_++;var h=e.substring(c,_).trim();t+=" "+h+";"}}c=_+1,v=-1}}}}return r&&(t+=fr(r)),i&&(t+=fr(i,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Pt(e,n,t,r,i,s){var l=e.__className;if(l!==t||l===void 0){var u=ci(t,r,s);u==null?e.removeAttribute("class"):n?e.className=u:e.setAttribute("class",u),e.__className=t}else if(s&&i!==s)for(var a in s){var c=!!s[a];(i==null||c!==!!i[a])&&e.classList.toggle(a,c)}return s}function ft(e,n={},t,r){for(var i in t){var s=t[i];n[i]!==s&&(t[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function fi(e,n,t,r){var i=e.__style;if(i!==n){var s=ui(n,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=n}else r&&(Array.isArray(r)?(ft(e,t==null?void 0:t[0],r[0]),ft(e,t==null?void 0:t[1],r[1],"important")):ft(e,t,r));return r}const dn=Symbol("class"),un=Symbol("style"),qr=Symbol("is custom element"),Wr=Symbol("is html");function di(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function wt(e,n,t,r){var i=Xr(e);i[n]!==(i[n]=t)&&(n==="loading"&&(e[Xo]=t),t==null?e.removeAttribute(n):typeof t!="string"&&Jr(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function _i(e,n,t,r,i=!1){var s=Xr(e),l=s[qr],u=!s[Wr],a=n||{},c=e.tagName==="OPTION";for(var v in n)v in t||(t[v]=null);t.class?t.class=Kr(t.class):t.class=null,t[un]&&(t.style??(t.style=null));var _=Jr(e);for(const x in t){let E=t[x];if(c&&x==="value"&&E==null){e.value=e.__value="",a[x]=E;continue}if(x==="class"){var f=e.namespaceURI==="http://www.w3.org/1999/xhtml";Pt(e,f,E,r,n==null?void 0:n[dn],t[dn]),a[x]=E,a[dn]=t[dn];continue}if(x==="style"){fi(e,E,n==null?void 0:n[un],t[un]),a[x]=E,a[un]=t[un];continue}var p=a[x];if(E!==p){a[x]=E;var h=x[0]+x[1];if(h!=="$$")if(h==="on"){const M={},Q="$$"+x;let S=x.slice(2);var F=$s(S);if(Bs(S)&&(S=S.slice(0,-7),M.capture=!0),!F&&p){if(E!=null)continue;e.removeEventListener(S,a[Q],M),a[Q]=null}if(E!=null)if(F)e[`__${S}`]=E,Xs([S]);else{let U=function(oe){a[x].call(this,oe)};var H=U;a[Q]=Ws(S,e,U,M)}else F&&(e[`__${S}`]=void 0)}else if(x==="style")wt(e,x,E);else if(x==="autofocus")Ks(e,!!E);else if(!l&&(x==="__value"||x==="value"&&E!=null))e.value=e.__value=E;else if(x==="selected"&&c)di(e,E);else{var T=x;u||(T=Hs(T));var P=T==="defaultValue"||T==="defaultChecked";if(E==null&&!l&&!P)if(s[x]=null,T==="value"||T==="checked"){let M=e;const Q=n===void 0;if(T==="value"){let S=M.defaultValue;M.removeAttribute(T),M.defaultValue=S,M.value=M.__value=Q?S:null}else{let S=M.defaultChecked;M.removeAttribute(T),M.defaultChecked=S,M.checked=Q?S:!1}}else e.removeAttribute(x);else P||_.includes(T)&&(l||typeof E!="string")?e[T]=E:typeof E!="function"&&wt(e,T,E)}}}for(let x of Object.getOwnPropertySymbols(t))x.description===hs&&ai(e,()=>t[x]);return a}function Xr(e){return e.__attributes??(e.__attributes={[qr]:e.nodeName.includes("-"),[Wr]:e.namespaceURI===ps})}var dr=new Map;function Jr(e){var n=dr.get(e.nodeName);if(n)return n;dr.set(e.nodeName,n=[]);for(var t,r=e,i=Element.prototype;i!==r;){t=hr(r);for(var s in t)t[s].set&&n.push(s);r=Rt(r)}return n}function zt(e=!1){const n=$,t=n.l.u;if(!t)return;let r=()=>pt(n.s);if(e){let i=0,s={};const l=vn(()=>{let u=!1;const a=n.s;for(const c in a)a[c]!==s[c]&&(s[c]=a[c],u=!0);return u&&i++,i});r=()=>O(l)}t.b.length&&Ms(()=>{_r(n,r),_t(t.b)}),ir(()=>{const i=$n(()=>t.m.map(Go));return()=>{for(const s of i)typeof s=="function"&&s()}}),t.a.length&&ir(()=>{_r(n,r),_t(t.a)})}function _r(e,n){if(e.l.s)for(const t of e.l.s)O(t);n()}let Cn=!1;function mi(e){var n=Cn;try{return Cn=!1,[e(),Cn]}finally{Cn=n}}const vi={get(e,n){if(!e.exclude.includes(n))return O(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=Be({get[n](){return e.props[n]}},n,Rr)),e.special[n](t),or(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),or(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function Un(e,n){return new Proxy({props:e,exclude:n,special:{},version:Qe(0)},vi)}const gi={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(cn(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let i=e.props[r];cn(i)&&(i=i());const s=je(i,n);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(cn(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const i=je(r,n);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,n){if(n===Ke||n===wr)return!1;for(let t of e.props)if(cn(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(cn(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function pi(...e){return new Proxy({props:e},gi)}function mr(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function Be(e,n,t,r){var Q;var i=(t&fs)!==0,s=!hn||(t&ds)!==0,l=(t&_s)!==0,u=(t&ms)!==0,a=!1,c;l?[c,a]=mi(()=>e[n]):c=e[n];var v=Ke in e||wr in e,_=l&&(((Q=je(e,n))==null?void 0:Q.set)??(v&&n in e&&(S=>e[n]=S)))||void 0,f=r,p=!0,h=!1,F=()=>(h=!0,p&&(p=!1,u?f=$n(r):f=r),f);c===void 0&&r!==void 0&&(_&&s&&rs(),c=F(),_&&_(c));var T;if(s)T=()=>{var S=e[n];return S===void 0?F():(p=!0,h=!1,S)};else{var P=(i?vn:St)(()=>e[n]);P.f|=qo,T=()=>{var S=O(P);return S!==void 0&&(f=void 0),S===void 0?f:S}}if((t&Rr)===0)return T;if(_){var H=e.$$legacy;return function(S,U){return arguments.length>0?((!s||!U||H||a)&&_(U?T():S),S):T()}}var x=!1,E=Ct(c),M=vn(()=>{var S=T(),U=O(E);return x?(x=!1,U):E.v=S});return l&&O(M),i||(M.equals=Tt),function(S,U){if(arguments.length>0){const oe=U?O(M):s&&l?Ge(S):S;if(!M.equals(oe)){if(x=!0,de(E,oe),h&&f!==void 0&&(f=oe),mr(M))return S;$n(()=>O(M))}return S}return mr(M)?M.v:O(M)}}function hi(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function bi(){const e=$;return e===null&&Mr(),(n,t,r)=>{var s;const i=(s=e.s.$$events)==null?void 0:s[n];if(i){const l=Hn(i)?i.slice():[i],u=hi(n,t,r);for(const a of l)a.call(e.x,u);return!u.defaultPrevented}return!0}}function yi(e){$===null&&Mr(),$.l===null&&ts(),wi($).a.push(e)}function wi(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Ei="5";var pr;typeof window<"u"&&((pr=window.__svelte??(window.__svelte={})).v??(pr.v=new Set)).add(Ei);ls();const Di={__category__:"Distributions",EnzymeForward:2.5412536178185428,EnzymeReverse:2.9132234313970624,FiniteDifferences:23.09462915601023,ForwardDiff:1.7371351543324733,MooncakeForward:12.627973297359494,MooncakeReverse:5.1931526902279455,ReverseDiff:28.69346081611747,ReverseDiffCompiled:2.84075016263557,Zygote:1577.9208523592085},Ri={__category__:"Distributions",EnzymeForward:2.4542820076307046,EnzymeReverse:2.590417483331195,FiniteDifferences:21.748589984618015,ForwardDiff:1.3008489280865032,MooncakeForward:11.328157279004737,MooncakeReverse:7.858286846998562,ReverseDiff:29.49581993569132,ReverseDiffCompiled:2.8145576597986133,Zygote:"error"},Mi={__category__:"DynamicPPL demo models",EnzymeForward:2.723523497123643,EnzymeReverse:2.764332059692884,FiniteDifferences:37.31292591377865,ForwardDiff:1.388059247544025,MooncakeForward:26.0082443716309,MooncakeReverse:6.217940483836438,ReverseDiff:30.380421876091365,ReverseDiffCompiled:2.9269618738245855,Zygote:"error"},xi={__category__:"DynamicPPL demo models",EnzymeForward:2.8814593005175078,EnzymeReverse:2.572044581451081,FiniteDifferences:36.573444515715195,ForwardDiff:1.348770080321285,MooncakeForward:23.433800514710995,MooncakeReverse:6.268426003022173,ReverseDiff:28.42819825393552,ReverseDiffCompiled:2.895033056450246,Zygote:2251.3747645951034},Ti={__category__:"DynamicPPL demo models",EnzymeForward:3.603366213699386,EnzymeReverse:3.3221288774002957,FiniteDifferences:61.56393471548303,ForwardDiff:1.344282567436006,MooncakeForward:28.38711389449103,MooncakeReverse:5.259790067134008,ReverseDiff:22.115224319686195,ReverseDiffCompiled:2.205267240875447,Zygote:"error"},Fi={__category__:"DynamicPPL demo models",EnzymeForward:3.969087425983978,EnzymeReverse:4.237294891908159,FiniteDifferences:65.64999999999999,ForwardDiff:1.3825195575937415,MooncakeForward:28.248077311683524,MooncakeReverse:7.470451550253173,ReverseDiff:49.63510736305011,ReverseDiffCompiled:2.756399495378491,Zygote:"error"},Ni={__category__:"DynamicPPL demo models",EnzymeForward:3.91698177289709,EnzymeReverse:4.1450582925912,FiniteDifferences:66.74883851893566,ForwardDiff:1.3794494873396788,MooncakeForward:48.82849420176127,MooncakeReverse:7.059834319091877,ReverseDiff:48.68581515942775,ReverseDiffCompiled:2.859934456586626,Zygote:1695.114953271028},Si={__category__:"DynamicPPL demo models",EnzymeForward:3.8760477167599903,EnzymeReverse:4.139759545887247,FiniteDifferences:67.02885271819194,ForwardDiff:1.369831119855714,MooncakeForward:45.2401119804752,MooncakeReverse:6.8780195486667415,ReverseDiff:47.82681604888873,ReverseDiffCompiled:2.9206211050377746,Zygote:1533.413880303456},Ci={__category__:"DynamicPPL demo models",EnzymeForward:3.0239364382477274,EnzymeReverse:2.7365181800682827,FiniteDifferences:37.733132369890946,ForwardDiff:1.3899713936296847,MooncakeForward:25.501487275531566,MooncakeReverse:6.454298393477588,ReverseDiff:32.532174857453164,ReverseDiffCompiled:3.260148975791434,Zygote:2142.520161290322},Ai={__category__:"DynamicPPL demo models",EnzymeForward:3.2779503673111368,EnzymeReverse:4.5062064266136455,FiniteDifferences:59.98810244719126,ForwardDiff:1.2789230893738703,MooncakeForward:27.851859561476548,MooncakeReverse:4.862125340599454,ReverseDiff:28.347668562733233,ReverseDiffCompiled:2.101834533053714,Zygote:"error"},ki={__category__:"DynamicPPL demo models",EnzymeForward:4.020351432675829,EnzymeReverse:4.206635310927872,FiniteDifferences:62.05025345538092,ForwardDiff:1.3194511927072488,MooncakeForward:34.36319365798414,MooncakeReverse:6.208734547247561,ReverseDiff:39.50346921075455,ReverseDiffCompiled:2.386684220425052,Zygote:"error"},Ii={__category__:"DynamicPPL demo models",EnzymeForward:3.8673424683072333,EnzymeReverse:4.7839721254355405,FiniteDifferences:62.940992464097825,ForwardDiff:1.364483110680418,MooncakeForward:41.67227909482759,MooncakeReverse:5.538558768977124,ReverseDiff:33.905331922192616,ReverseDiffCompiled:2.560264031216951,Zygote:"error"},Oi={__category__:"Distributions",EnzymeForward:7.968575808249722,EnzymeReverse:12.743735523268057,FiniteDifferences:152.09110473457676,ForwardDiff:2.461578715434615,MooncakeForward:55.4303335170893,MooncakeReverse:6.010290827740492,ReverseDiff:58.4749346719846,ReverseDiffCompiled:7.042978389558519,Zygote:"error"},Li={__category__:"DynamicPPL demo models",EnzymeForward:3.832366487360686,EnzymeReverse:3.3826628087699575,FiniteDifferences:61.60648912497308,ForwardDiff:1.3577071139910815,MooncakeForward:32.85123617017359,MooncakeReverse:5.981174571732511,ReverseDiff:35.95392156862745,ReverseDiffCompiled:2.6442561205273076,Zygote:"error"},Pi={__category__:"DynamicPPL demo models",EnzymeForward:4.24377530692842,EnzymeReverse:4.007907054243605,FiniteDifferences:63.55155379602705,ForwardDiff:1.2932928791431069,MooncakeForward:32.87837406448409,MooncakeReverse:5.934197130957891,ReverseDiff:40.3327582488678,ReverseDiffCompiled:2.4547672672672673,Zygote:"error"},zi={__category__:"DynamicPPL demo models",EnzymeForward:3.4525479539250616,EnzymeReverse:4.158248696129564,FiniteDifferences:61.15617242946544,ForwardDiff:1.2657728435274282,MooncakeForward:27.42426806566255,MooncakeReverse:5.073071632631468,ReverseDiff:31.760075384169323,ReverseDiffCompiled:2.0094431698271205,Zygote:"error"},Vi={__category__:"Core Turing syntax",EnzymeForward:2.915965241097291,EnzymeReverse:1.9020715350223547,FiniteDifferences:76.79496820947563,ForwardDiff:1.4264995847026107,MooncakeForward:29.446936955477803,MooncakeReverse:5.064428974907685,ReverseDiff:20.882950348789493,ReverseDiffCompiled:1.8817501281832165,Zygote:"error"},Bi={__category__:"Core Turing syntax",EnzymeForward:2.971527024584237,EnzymeReverse:2.64771528877263,FiniteDifferences:27.65361913849509,ForwardDiff:1.6061615646299237,MooncakeForward:19.24706912913351,MooncakeReverse:7.218715225088517,ReverseDiff:56.51178577520041,ReverseDiffCompiled:5.333479332055843,Zygote:"error"},ji={__category__:"DynamicPPL arXiV paper",EnzymeForward:1.5002434475852755,EnzymeReverse:2.311207486875143,FiniteDifferences:29.618294094944037,ForwardDiff:1.5456353151720026,MooncakeForward:4.24751925169975,MooncakeReverse:9.233288734278833,ReverseDiff:125.92050186528404,ReverseDiffCompiled:22.451724785239882,Zygote:18.767439608626084},$i={__category__:"DynamicPPL arXiV paper",EnzymeForward:4.8609216535199575,EnzymeReverse:1.9588507644820903,FiniteDifferences:167.114357729649,ForwardDiff:3.3988753653212975,MooncakeForward:49.56531041614663,MooncakeReverse:4.310768092547754,ReverseDiff:28.545593479368314,ReverseDiffCompiled:2.387065164135228,Zygote:611.382885031742},Ui={__category__:"DynamicPPL arXiV paper",EnzymeForward:12204.221973461006,EnzymeReverse:2.421428571428571,FiniteDifferences:124551.36105658929,ForwardDiff:2867.2177491237944,MooncakeForward:21267.940819721844,MooncakeReverse:3.5456813169838726,ReverseDiff:1.8754454800904665,ReverseDiffCompiled:.4474905502794018,Zygote:7.005991908363066},Hi={__category__:"DynamicPPL arXiV paper",EnzymeForward:42.52618617384525,EnzymeReverse:7.399861973775018,FiniteDifferences:"NaN",ForwardDiff:27.9627464816458,MooncakeForward:199.6658031403911,MooncakeReverse:4.690439973682463,ReverseDiff:72.22810638285108,ReverseDiffCompiled:10.814022394897485,Zygote:"error"},Zi={__category__:"DynamicPPL arXiV paper",EnzymeForward:"error",EnzymeReverse:3.0345075485262396,FiniteDifferences:7048.789740470397,ForwardDiff:183.14158128439843,MooncakeForward:467.12473845001966,MooncakeReverse:9.735485240095423,ReverseDiff:174.00975450127416,ReverseDiffCompiled:12.105148950376057,Zygote:"error"},Gi={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:5.450474487690827,FiniteDifferences:37.20014942099365,ForwardDiff:1.1683984922759563,MooncakeForward:25.718179947880948,MooncakeReverse:9.266194519848726,ReverseDiff:12.902500826264186,ReverseDiffCompiled:1.3148345862892505,Zygote:785.6183290648577},Ki={__category__:"DynamicPPL arXiV paper",EnzymeForward:41.49717563556949,EnzymeReverse:3.173631081534697,FiniteDifferences:1020.4047196956875,ForwardDiff:52.410827705453706,MooncakeForward:559.1781440096344,MooncakeReverse:4.930677547438229,ReverseDiff:69.07331606124004,ReverseDiffCompiled:7.5472382032708945,Zygote:"wrong"},qi={__category__:"DynamicPPL arXiV paper",EnzymeForward:248.27849486205633,EnzymeReverse:19.731895027008083,FiniteDifferences:2749.3031515344173,ForwardDiff:145.68444525608035,MooncakeForward:589.752908025208,MooncakeReverse:7.933293644921776,ReverseDiff:141.57355617345883,ReverseDiffCompiled:36.146166684421715,Zygote:4756.655241454701},Wi={__category__:"DynamicPPL arXiV paper",EnzymeForward:205.59933026006783,EnzymeReverse:"error",FiniteDifferences:6668.625365183022,ForwardDiff:85.7052950789018,MooncakeForward:1134.9139997237592,MooncakeReverse:3.4381024996393763,ReverseDiff:30.62997224097832,ReverseDiffCompiled:3.2198436775626065,Zygote:"error"},Xi={__category__:"Core Turing syntax",EnzymeForward:2.7325693606755124,EnzymeReverse:2.4320600995713924,FiniteDifferences:35.36254092080519,ForwardDiff:1.3434820044773548,MooncakeForward:26.816892657432113,MooncakeReverse:6.226803336578289,ReverseDiff:32.89005159508757,ReverseDiffCompiled:2.648158061949957,Zygote:1735.747999859021},Ji={__category__:"Miscellaneous features",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:25.015743410476894,ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Yi={__category__:"Core Turing syntax",EnzymeForward:3.0559671490925795,EnzymeReverse:2.227342549923195,FiniteDifferences:59.541097618103855,ForwardDiff:1.298559067376272,MooncakeForward:27.28108706520963,MooncakeReverse:12.724768501902231,ReverseDiff:29.53079691157461,ReverseDiffCompiled:2.343082291876638,Zygote:"error"},Qi={__category__:"Base Julia features",EnzymeForward:2.8248189782773934,EnzymeReverse:11.285334791780608,FiniteDifferences:15.437662389575088,ForwardDiff:.9879953426747501,MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"wrong",ReverseDiffCompiled:.3304542221318971,Zygote:"error"},ea={__category__:"Effect of model size",EnzymeForward:4.16565752128666,EnzymeReverse:1.7156922367823013,FiniteDifferences:140.9338092809791,ForwardDiff:1.7078878970704112,MooncakeForward:41.134245419055325,MooncakeReverse:4.52490904002239,ReverseDiff:21.041207031528007,ReverseDiffCompiled:1.9485809920592527,Zygote:"error"},na={__category__:"Effect of model size",EnzymeForward:18.324700598802394,EnzymeReverse:1.5992551210428305,FiniteDifferences:619.8080539803316,ForwardDiff:8.602353290523737,MooncakeForward:128.05246148064637,MooncakeReverse:3.8922479792045013,ReverseDiff:21.09050788863962,ReverseDiffCompiled:2.1878122606761243,Zygote:"error"},ta={__category__:"Effect of model size",EnzymeForward:35.77625669998552,EnzymeReverse:1.5461305631329174,FiniteDifferences:1235.386140089419,ForwardDiff:14.275808766699791,MooncakeForward:234.10529061102832,MooncakeReverse:4.058480825958703,ReverseDiff:20.396993682376007,ReverseDiffCompiled:1.8647043635424736,Zygote:"error"},ra={__category__:"Distributions",EnzymeForward:2.903889309561506,EnzymeReverse:2.3077251279453184,FiniteDifferences:27.55073841453064,ForwardDiff:1.4186934092550885,MooncakeForward:17.05335651007659,MooncakeReverse:6.69518486672399,ReverseDiff:20.678351000254718,ReverseDiffCompiled:2.230453139149974,Zygote:2024.241913139849},oa={__category__:"Effect of model size",EnzymeForward:184.48771540692715,EnzymeReverse:1.5487210278075176,FiniteDifferences:6655.763256639227,ForwardDiff:76.40598018195516,MooncakeForward:1219.8204313443564,MooncakeReverse:4.054621422042972,ReverseDiff:20.40946779515134,ReverseDiffCompiled:1.8809308123229,Zygote:"error"},sa={__category__:"Distributions",EnzymeForward:2.678070483785114,EnzymeReverse:2.824007220216606,FiniteDifferences:22.38200832605922,ForwardDiff:1.6422982528612737,MooncakeForward:12.716055909055639,MooncakeReverse:5.674657797687731,ReverseDiff:32.435103244837755,ReverseDiffCompiled:3.1614125958781094,Zygote:"error"},ia={__category__:"Distributions",EnzymeForward:2.042115697990223,EnzymeReverse:5.831682322801024,FiniteDifferences:18.559711983541916,ForwardDiff:1.2753231282793882,MooncakeForward:8.645735578250068,MooncakeReverse:7.33815452839843,ReverseDiff:12.507891597068348,ReverseDiffCompiled:2.4633666752158674,Zygote:"error"},aa={__category__:"Core Turing syntax",EnzymeForward:2.9637729804849897,EnzymeReverse:2.6837156293400035,FiniteDifferences:27.80256070640177,ForwardDiff:1.4842915527714113,MooncakeForward:17.021910493303952,MooncakeReverse:6.959476734276462,ReverseDiff:56.47448222357148,ReverseDiffCompiled:5.234835107355101,Zygote:"error"},la={__category__:"Core Turing syntax",EnzymeForward:2.9540874035989715,EnzymeReverse:2.4662491426718005,FiniteDifferences:28.934495130702203,ForwardDiff:1.4543039835257074,MooncakeForward:18.64140749463185,MooncakeReverse:6.989241828398828,ReverseDiff:35.871686993254755,ReverseDiffCompiled:3.735207855138995,Zygote:2922.3117805662137},ca={__category__:"Core Turing syntax",EnzymeForward:4.062579826711312,EnzymeReverse:2.600071807146521,FiniteDifferences:52.20969415997786,ForwardDiff:1.3384144467069952,MooncakeForward:22.46698321180261,MooncakeReverse:5.37946630483944,ReverseDiff:24.79489880500104,ReverseDiffCompiled:2.2376624594217676,Zygote:"error"},ua={__category__:"Core Turing syntax",EnzymeForward:2.553103891926664,EnzymeReverse:2.151921334610464,FiniteDifferences:25.498763523956725,ForwardDiff:1.39951851077909,MooncakeForward:13.015919510952626,MooncakeReverse:5.463503812598749,ReverseDiff:26.132713355267576,ReverseDiffCompiled:2.3978393342448645,Zygote:3253.2580147436993},fa={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:21.46486721015734,ForwardDiff:"NaN",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"NaN",ReverseDiffCompiled:2.9312704402515726,Zygote:1982.4789500596557},da={__category__:"PosteriorDB",EnzymeForward:5.769494354094169,EnzymeReverse:2.254785122240022,FiniteDifferences:136.767018498768,ForwardDiff:1.7863811686673157,MooncakeForward:57.00704378766974,MooncakeReverse:5.154384328358209,ReverseDiff:28.03689256680398,ReverseDiffCompiled:2.6189684584951545,Zygote:"error"},_a={__category__:"PosteriorDB",EnzymeForward:5.508890710187791,EnzymeReverse:2.476696395788177,FiniteDifferences:140.93679130537137,ForwardDiff:1.8155225525952485,MooncakeForward:56.77243589743589,MooncakeReverse:5.043506400115057,ReverseDiff:29.004734443969813,ReverseDiffCompiled:2.6089942585985186,Zygote:"error"},ma={__category__:"Distributions",EnzymeForward:2.233485119774964,EnzymeReverse:1.846646884272997,FiniteDifferences:33.470112168110184,ForwardDiff:1.2164821469719598,MooncakeForward:20.83174756945646,MooncakeReverse:5.07855808741128,ReverseDiff:13.261987199664254,ReverseDiffCompiled:1.217283333363969,Zygote:1718.5085780444165},va={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:10.924893833573156,FiniteDifferences:43.80718831898166,ForwardDiff:1.1443583118001723,MooncakeForward:25.38554809686149,MooncakeReverse:11.23106111939287,ReverseDiff:15.943111206342406,ReverseDiffCompiled:4.143140390150304,Zygote:388.8192816635161},ga={__category__:"Core Turing syntax",EnzymeForward:3.015743073047859,EnzymeReverse:2.826041467791821,FiniteDifferences:35.891568679850344,ForwardDiff:1.4344134152581502,MooncakeForward:25.13778106615656,MooncakeReverse:6.425684067898679,ReverseDiff:29.89070024613848,ReverseDiffCompiled:2.9070450281425892,Zygote:"error"},pa={__category__:"Base Julia features",EnzymeForward:3.1982924742848797,EnzymeReverse:2.273669788446111,FiniteDifferences:27.76712492528392,ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ha={__category__:"Base Julia features",EnzymeForward:2.876290142769806,EnzymeReverse:2.6419284861188976,FiniteDifferences:40.42826253749041,ForwardDiff:1.6792835363053582,MooncakeForward:29.376450724251313,MooncakeReverse:7.234520134458393,ReverseDiff:20.38278113326118,ReverseDiffCompiled:"wrong",Zygote:1867.2830056425894},ba={assume_beta:Di,assume_dirichlet:Ri,demo_assume_dot_observe:Mi,demo_assume_dot_observe_literal:xi,demo_assume_index_observe:Ti,demo_assume_matrix_observe_matrix_index:Fi,demo_assume_multivariate_observe:Ni,demo_assume_multivariate_observe_literal:Si,demo_assume_observe_literal:Ci,demo_assume_submodel_observe_index_literal:Ai,demo_dot_assume_observe:ki,demo_dot_assume_observe_index:Ii,assume_lkjcholu:Oi,demo_dot_assume_observe_index_literal:Li,demo_dot_assume_observe_matrix_index:Pi,demo_dot_assume_observe_submodel:zi,dot_assume:Vi,dot_observe:Bi,dppl_gauss_unknown:ji,dppl_hier_poisson:$i,dppl_high_dim_gauss:Ui,dppl_hmm_semisup:Hi,dppl_lda:Zi,assume_mvnormal:Gi,dppl_logistic_regression:Ki,dppl_naive_bayes:qi,dppl_sto_volatility:Wi,dynamic_constraint:Xi,metabayesian_MH:Ji,multiple_constraints_same_var:Yi,multithreaded:Qi,n010:ea,n050:na,n100:ta,assume_normal:ra,n500:oa,observe_bernoulli:sa,observe_categorical:ia,observe_index:aa,observe_literal:la,observe_multivariate:ca,observe_submodel:ua,observe_von_mises:fa,pdb_eight_schools_centered:da,pdb_eight_schools_noncentered:_a,assume_submodel:ma,assume_wishart:va,broadcast_macro:ga,call_C:pa,control_flow:ha},ya=`@model function assume_beta()
    a ~ Beta(2, 2)
end

model = assume_beta()`,wa=`@model function assume_dirichlet()
    a ~ Dirichlet([1.0, 5.0])
end

model = assume_dirichlet()`,Ea=`@model function demo_assume_dot_observe(x = [1.5, 2.0])
    # \`assume\` and \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    x .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe()`,Da=`@model function demo_assume_dot_observe_literal()
    # \`assume\` and literal \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    [1.5, 2.0] .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe_literal()`,Ra=`using LinearAlgebra: Diagonal

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

model = demo_assume_index_observe()`,Ma=`using LinearAlgebra: Diagonal

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

model = demo_assume_matrix_observe_matrix_index()`,xa=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe(x = [1.5, 2.0])
    # Multivariate \`assume\` and \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zero(x), Diagonal(s))
    x ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe()`,Ta=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe_literal()
    # multivariate \`assume\` and literal \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zeros(2), Diagonal(s))
    [1.5, 2.0] ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe_literal()`,Fa=`@model function demo_assume_observe_literal()
    # univariate \`assume\` and literal \`observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    1.5 ~ Normal(m, sqrt(s))
    2.0 ~ Normal(m, sqrt(s))
end

model = demo_assume_observe_literal()`,Na=`@model function _prior_dot_assume(::Type{TV} = Vector{Float64}) where {TV}
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

model = demo_assume_submodel_observe_index_literal()`,Sa=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe()`,Ca=`@model function demo_dot_assume_observe_index(
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

model = demo_dot_assume_observe_index()`,Aa=`@model function assume_lkjcholu()
    a ~ LKJCholesky(5, 1.0, 'U')
end

model = assume_lkjcholu()`,ka=`@model function demo_dot_assume_observe_index_literal(
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

model = demo_dot_assume_observe_index_literal()`,Ia=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe_matrix_index()`,Oa=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe_submodel()`,La=`@model function dot_assume(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 5)
    a .~ Normal()
end

model = dot_assume()`,Pa=`@model function dot_observe(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    x .~ Normal(a)
end

model = dot_observe()`,za=`n = 10_000
s = abs(rand()) + 0.5
y = randn() .+ s * randn(n)

@model function dppl_gauss_unknown(y)
    N = length(y)
    m ~ Normal(0, 1)
    s ~ truncated(Cauchy(0, 5); lower=0)
    y ~ product_distribution(fill(Normal(m, s), N))
end

model = dppl_gauss_unknown(y)`,Va=`using Turing: LogPoisson

nd, ns = 5, 10
a0, a1, a0_sig = 1.0, 0.5, 0.3
n = nd * ns
# simulate group level parameters
a0s = rand(Normal(0, a0_sig), ns)
logpop = rand(Normal(9, 1.5), ns)
λ = exp.(a0 .+ a0s + (a1 * logpop))
# and individual data
y = mapreduce(λi -> rand(Poisson(λi), nd), vcat, λ)
x = repeat(logpop, inner=nd)
idx = repeat(collect(1:ns), inner=nd)

@model function dppl_hier_poisson(y, x, idx, ns)
    a0 ~ Normal(0, 10)
    a1 ~ Normal(0, 1)
    a0_sig ~ truncated(Cauchy(0, 1); lower=0)
    a0s ~ product_distribution(fill(Normal(0, a0_sig), ns))
    alpha = a0 .+ a0s[idx] .+ a1 * x
    y ~ product_distribution(LogPoisson.(alpha))
end

model = dppl_hier_poisson(y, x, idx, ns)`,Ba=`@model function dppl_high_dim_gauss(D)
    m ~ product_distribution(fill(Normal(0, 1), D))
end

model = dppl_high_dim_gauss(10_000)`,ja=`using StatsFuns: logsumexp

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
for t in 2:T
    z[t] = rand(Categorical(theta[:, z[t - 1]]))
    w[t] = rand(Categorical(phi[:, z[t]]))
end

# Unsupervised
u = Vector{Int}(undef, T_unsup)
y = Vector{Int}(undef, T_unsup)
y[1] = rand(1:K)
u[1] = rand(Categorical(phi[:, y[1]]))
for t in 2:T_unsup
    y[t] = rand(Categorical(theta[:, y[t - 1]]))
    u[t] = rand(Categorical(phi[:, y[t]]))
end

@model function dppl_hmm_semisup(K, T, T_unsup, w, z, u, alpha, beta)
    theta ~ product_distribution(fill(Dirichlet(alpha), K))
    phi ~ product_distribution(fill(Dirichlet(beta), K))
    for t in 1:T
        w[t] ~ Categorical(phi[:, z[t]]);
    end
    for t in 2:T
        z[t] ~ Categorical(theta[:, z[t - 1]]);
    end

    TF = eltype(theta)
    acc = similar(alpha, TF, K)
    gamma = similar(alpha, TF, K)
    temp_gamma = similar(alpha, TF, K)
    for k in 1:K
        gamma[k] = log(phi[u[1],k])
    end
    for t in 2:T_unsup
        for k in 1:K
            for j in 1:K
                acc[j] = gamma[j] + log(theta[k, j]) + log(phi[u[t], k])
            end
            temp_gamma[k] = logsumexp(acc)
        end
        gamma .= temp_gamma
    end
    @addlogprob! logsumexp(gamma)
end

model = dppl_hmm_semisup(K, T, T_unsup, w, z, u, alpha, beta)`,$a=`v = 100      # words
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
for i in 1:m
    local idx = sum(doc_lengths[1:i-1]) # starting index for inner loop
    for j in 1:doc_lengths[i]
        z = rand(Categorical(theta[:, i]))
        w[idx + j] = rand(Categorical(phi[:, z]))
        doc[idx + j] = i
    end
end

@model function dppl_lda(k, m, w, doc, alpha, beta)
    theta ~ product_distribution(fill(Dirichlet(alpha), m))
    phi ~ product_distribution(fill(Dirichlet(beta), k))
    log_phi_dot_theta = log.(phi * theta)
    @addlogprob! sum(log_phi_dot_theta[CartesianIndex.(w, doc)])
end

model = dppl_lda(k, m, w, doc, alpha, beta)`,Ua=`@model function assume_mvnormal()
    a ~ MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0])
end

model = assume_mvnormal()`,Ha=`using StatsFuns: logistic

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

model = dppl_logistic_regression(X', y)`,Za=`using MLDatasets: MNIST
using MultivariateStats: fit, PCA, transform

# Load MNIST images and labels
features = MNIST(split=:train).features
nrows, ncols, nimages = size(features)
image_raw = Float64.(reshape(features, (nrows * ncols, nimages)))
labels = MNIST(split=:train).targets .+ 1
C = 10 # Number of labels

# Preprocess the images by reducing dimensionality
D = 40
pca = fit(PCA, image_raw; maxoutdim=D)
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

model = dppl_naive_bayes(image_vec, labels, C, D)`,Ga=`using DelimitedFiles: readdlm

path = "$(@__DIR__)/../data/dppl_sto_volatility.csv"
data, _ = readdlm(path, ',', header=true)
to_num(x) = x isa Number ? x : 0.1
y = map(to_num, data[1:500, 2])

@model function dppl_sto_volatility(y, ::Type{Tv}=Vector{Float64}) where {Tv}
    T = length(y)
    μ ~ Cauchy(0, 10)
    ϕ ~ Uniform(-1, 1)
    σ ~ truncated(Cauchy(0, 5); lower=0)

    h = Tv(undef, T)
    h[1] ~ Normal(μ, σ / sqrt(1 - ϕ^2))
    y[1] ~ Normal(0, exp(h[1] / 2))
    for t in 2:T
        h[t] ~ Normal(μ + ϕ * (h[t-1] - μ), σ)
        y[t] ~ Normal(0, exp(h[t] / 2))
    end
end

model = dppl_sto_volatility(y)`,Ka=`@model function dynamic_constraint()
    a ~ Normal()
    b ~ truncated(Normal(); lower = a)
end

model = dynamic_constraint()`,qa=`#=
This is a "meta-Bayesian" model, where the generative model includes an inversion of a different generative model.
These types of models are common in cognitive modelling, where systems of interest (e.g. human subjects) are thought to use Bayesian inference to navigate their environment.
Here we use a Metropolis-Hasting sampler implemented with Turing as the inversion of the inner "subjective" model.
=#
using Random: Xoshiro

# Inner model function
@model function inner_model(observation, prior_μ = 0, prior_σ = 1)
    # The inner model's prior
    mean ~ Normal(prior_μ, prior_σ)
    # The inner model's likelihood
    observation ~ Normal(mean, 1)
end

# Outer model function
@model function metabayesian_MH(
    observation,
    action,
    inner_sampler = MH(),
    inner_n_samples = 20,
)
    ### Sample parameters for the inner inference and response ###
    # The inner model's prior's sufficient statistics
    subj_prior_μ ~ Normal(0, 1)
    subj_prior_σ = 1.0
    # Inverse temperature for actions
    β ~ Exponential(1)

    ### "Perceptual inference": running the inner model ###
    # Condition the inner model
    inner_m = inner_model(observation, subj_prior_μ, subj_prior_σ)
    # Run the inner Bayesian inference
    chns = sample(Xoshiro(468), inner_m, inner_sampler, inner_n_samples, progress = false)
    # Extract subjective point estimate
    subj_mean_expectationₜ = mean(chns[:mean])


    ### "Response model": picking an action ###
    # The action is a Gaussian-noise report of the subjective point estimate
    action ~ Normal(subj_mean_expectationₜ, β)
end

model = metabayesian_MH(0.0, 1.0)`,Wa=`@model function multiple_constraints_same_var(::Type{TV} = Vector{Float64}) where {TV}
    x = TV(undef, 5)
    x[1] ~ Normal()
    x[2] ~ InverseGamma(2, 3)
    x[3] ~ truncated(Normal(), -5, 20)
    x[4:5] ~ Dirichlet([1.0, 2.0])
end

model = multiple_constraints_same_var()`,Xa=`#=
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

model = multithreaded([1.5, 2.0, 2.5, 1.5, 2.0, 2.5])`,Ja=`@model function n010(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 10)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n010()`,Ya=`@model function n050(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 50)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n050()`,Qa=`@model function n100(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 100)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n100()`,el=`@model function assume_normal()
    a ~ Normal()
end

model = assume_normal()`,nl=`@model function n500(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 500)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n500()`,tl=`@model function observe_bernoulli(x = [true, false, true])
    a ~ Beta(2, 2)
    for i in eachindex(x)
        x[i] ~ Bernoulli(a)
    end
end

model = observe_bernoulli()`,rl=`@model function observe_categorical(x = [1, 2, 1, 2, 2])
    a ~ Dirichlet(2, 3)
    for i in eachindex(x)
        x[i] ~ Categorical(a)
    end
end

model = observe_categorical()`,ol=`@model function observe_index(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end

model = observe_index()`,sl=`@model function observe_literal()
    a ~ Normal()
    1.5 ~ Normal(a)
end

model = observe_literal()`,il=`@model function observe_multivariate(
    x = [1.5, 2.0, 2.5],
    ::Type{TV} = Vector{Float64},
) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    x ~ MvNormal(a, I)
end

model = observe_multivariate()`,al=`@model function inner2(x, a)
    x ~ Normal(a)
end
@model function observe_submodel(x = 1.5)
    a ~ Normal()
    _ignore ~ to_submodel(inner2(x, a))
end

model = observe_submodel()`,ll=`@model function observe_von_mises(x)
    a ~ InverseGamma(2, 3)
    x ~ VonMises(0, a)
end

model = observe_von_mises(0.4)`,cl=`J = 8
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

model = pdb_eight_schools_centered(J, y, sigma)`,ul=`J = 8
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

model = pdb_eight_schools_noncentered(J, y, sigma)`,fl=`@model function inner1()
    return a ~ Normal()
end
@model function assume_submodel()
    a ~ to_submodel(inner1())
    x ~ Normal(a)
end

model = assume_submodel()`,dl=`@model function assume_wishart()
    a ~ Wishart(7, [1.0 0.5; 0.5 1.0])
end

model = assume_wishart()`,_l=`@model function broadcast_macro(x = [1.5, 2.0], ::Type{TV} = Vector{Float64}) where {TV}
    a ~ Normal(0, 1)
    b ~ InverseGamma(2, 3)
    @. x ~ Normal(a, $(sqrt(b)))
end

model = broadcast_macro()`,ml=`@model function call_C(y = 0.0)
    x ~ Normal(0, 1)

    # Call C library abs function
    x_abs = @ccall fabs(x::Cdouble)::Cdouble

    y ~ Normal(0, x_abs)
end

model = call_C()`,vl=`#= 
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

model = control_flow()`,gl={assume_beta:ya,assume_dirichlet:wa,demo_assume_dot_observe:Ea,demo_assume_dot_observe_literal:Da,demo_assume_index_observe:Ra,demo_assume_matrix_observe_matrix_index:Ma,demo_assume_multivariate_observe:xa,demo_assume_multivariate_observe_literal:Ta,demo_assume_observe_literal:Fa,demo_assume_submodel_observe_index_literal:Na,demo_dot_assume_observe:Sa,demo_dot_assume_observe_index:Ca,assume_lkjcholu:Aa,demo_dot_assume_observe_index_literal:ka,demo_dot_assume_observe_matrix_index:Ia,demo_dot_assume_observe_submodel:Oa,dot_assume:La,dot_observe:Pa,dppl_gauss_unknown:za,dppl_hier_poisson:Va,dppl_high_dim_gauss:Ba,dppl_hmm_semisup:ja,dppl_lda:$a,assume_mvnormal:Ua,dppl_logistic_regression:Ha,dppl_naive_bayes:Za,dppl_sto_volatility:Ga,dynamic_constraint:Ka,metabayesian_MH:qa,multiple_constraints_same_var:Wa,multithreaded:Xa,n010:Ja,n050:Ya,n100:Qa,assume_normal:el,n500:nl,observe_bernoulli:tl,observe_categorical:rl,observe_index:ol,observe_literal:sl,observe_multivariate:il,observe_submodel:al,observe_von_mises:ll,pdb_eight_schools_centered:cl,pdb_eight_schools_noncentered:ul,assume_submodel:fl,assume_wishart:dl,broadcast_macro:_l,call_C:ml,control_flow:vl},pl="1.18.0",hl="1.5.0",bl="5.8.0",yl="0.13.1",wl="0.4.5",El="0.1.42",Dl="4.3.0",Rl="0.8.2",Ml="0.8.8",xl="0.7.0",Tl="0.4.1",Fl="1.1.3",Nl="2.5.0",Sl="1.1.2",Cl="0.4.0",Al="0.5.4",kl="3.5.1+1",Il="7.20.0",Ol="1.11.0",Ll="1.1.2",Pl="0.5.1",zl="1.1.0",Vl="0.4.8",Bl="0.5.1",jl="0.4.4",$l="1.11.0",Ul="0.1.1",Hl="0.15.10",Zl="0.1.9",Gl="1.2.2",Kl="0.5.0",ql="0.10.15",Wl="1.72.5",Xl="1.26.0",Jl="1.3.1",Yl="0.1.10",Ql="0.10.43",ec="0.10.4+0",nc="0.7.8",tc="3.31.0",rc="0.12.1",oc="0.11.0",sc="0.13.1",ic="1.0.3",ac="0.2.4",lc="0.3.1",cc="4.18.0",uc="1.1.1+0",fc="0.1.2",dc="2.5.0",_c="0.1.2",mc="1.6.0",vc="0.1.3",gc="4.1.1",pc="1.16.0",hc="0.7.13",bc="1.8.0",yc="0.18.22",wc="1.0.0",Ec="1.11.0",Dc="0.1.2",Rc="1.9.1",Mc="0.4.0",xc="1.1.0",Tc="1.15.1",Fc="0.7.7",Nc="0.4.26",Sc="1.11.0",Cc="0.25.120",Ac="0.6.58",kc="0.9.5",Ic="1.6.0",Oc="0.37.3",Lc="2.0.0",Pc="1.0.5",zc="0.13.77",Vc="0.8.13",Bc="0.0.198+0",jc="0.1.11",$c="0.1.10",Uc="0.10.14",Hc="1.10.0",Zc="3.3.11+0",Gc="0.2.2",Kc="0.1.1",qc="0.3.2",Wc="1.17.0",Xc="0.9.24",Jc="1.11.0",Yc="1.14.0",Qc="2.28.1",eu="0.12.33",nu="0.8.5",tu="1.2.1",ru="1.1.3",ou="0.1.3",su="0.5.2",iu="1.11.0",au="0.2.0",lu="1.6.1",cu="0.6.2",uu="1.3.1",fu="1.13.1",du="0.17.2",_u="1.14.6+0",mu="1.10.17",vu="0.2.0",gu="2.12.2+0",pu="0.3.28",hu="0.4.15",bu="0.1.7",yu="0.10.5",wu="0.3.8",Eu="0.1.5",Du="0.3.1",Ru="1.4.5",Mu="2025.2.0+0",xu="1.11.0",Tu="0.7.0",Fu="0.16.2",Nu="0.7.11",Su="0.1.17",Cu="1.3.1",Au="0.2.4",ku="1.10.0",Iu="1.0.0",Ou="0.5.15",Lu="1.7.1",Pu="1.14.3",zu="0.2.1",Vu="0.2.4",Bu="0.9.38",ju="0.6.10",$u="0.4.1",Uu="9.4.2",Hu="0.0.37+2",Zu="3.0.1+0",Gu="1.4.0",Ku="1.11.0",qu="0.3.1",Wu="0.2.1",Xu="0.6.4",Ju="8.6.0+0",Yu="1.11.0",Qu="1.7.2+0",ef="1.11.0+1",nf="0.9.1+6",tf="1.11.0",rf="1.18.0+0",of="0.9.4",sf="7.4.0",af="1.11.0",lf="2.1.2",cf="1.13.1",uf="0.3.29",ff="1.11.0",df="1.1.0",_f="0.10.7",mf="7.3.0",vf="0.3.15",gf="2025.2.0+0",pf="1.0.0",hf="0.7.18",bf="1.12.0",yf="0.4.17",wf="0.4.8",Ef="4.3.1+0",Df="0.1.11",Rf="5.5.4+0",Mf="0.5.16",xf="0.4.2",Tf="1.11.0",Ff="1.1.9",Nf="2.28.6+0",Sf="0.2.0",Cf="10.1.4+3",Af="1.2.0",kf="2.1.0",If="1.11.0",Of="0.4.160",Lf="0.3.4",Pf="0.3.7",zf="2023.12.12",Vf="0.10.3",Bf="7.10.0",jf="0.9.31",$f="0.4.3",Uf="1.1.3",Hf="0.1.5",Zf="0.10.4",Gf="1.0.0",Kf="1.2.0",qf="0.5.0",Wf="1.17.0",Xf="0.3.27+1",Jf="0.8.5+0",Yf="5.0.8+0",Qf="1.5.0",ed="3.5.2+0",nd="0.5.6+0",td="1.13.2",rd="0.4.6",od="4.7.0",sd="2.11.0",id="0.4.4",ad="1.8.1",ld="0.11.35",cd="1.0.2",ud="0.5.12",fd="0.12.3",dd="2.8.3",_d="1.2.1",md="0.3.6",vd="1.11.0",gd="1.4.3",pd="0.2.4",hd="0.4.34",bd="1.2.1",yd="1.5.0",wd="0.2.0",Ed="2.4.0",Dd="1.11.0",Rd="0.1.5",Md="1.11.0",xd="1.3.0",Td="2.11.2",Fd="1.11.0",Nd="1.11.0",Sd="1.7.1",Cd="1.6.0",Ad="0.3.2",kd="0.4.5",Id="0.1.0",Od="1.3.4",Ld="3.37.1",Pd="1.2.2",zd="1.3.1",Vd="1.16.1",Bd="1.4.2",jd="0.8.0",$d="0.5.1+0",Ud="2.2.10",Hd="0.5.15",Zd="0.7.0",Gd="0.5.2",Kd="2.120.0",qd="1.7.2",Wd="1.7.0",Xd="3.0.0",Jd="1.5.0",Yd="1.3.0",Qd="1.4.8",e_="1.11.0",n_="1.1.2",t_="1.11.0",r_="0.1.0",o_="1.2.0",s_="0.9.5",i_="1.11.0",a_="1.2.2",l_="1.11.0",c_="1.1.0",u_="0.1.2",f_="0.4.21",d_="2.5.1",__="0.1.15",m_="0.1.2",v_="1.9.15",g_="1.4.3",p_="3.5.0",h_="1.11.1",b_="1.7.1",y_="0.34.6",w_="1.5.0",E_="0.4.1",D_="0.3.7",R_="0.4.1",M_="0.7.1",x_="0.3.1",T_="1.11.0",F_="1.11.0",N_=null,S_="7.7.0+0",C_="0.3.44",A_="1.0.3",k_="1.0.1",I_="1.12.1",O_="1.10.0",L_="0.1.1",P_="0.1.7",z_="1.11.0",V_="0.1.6",B_="0.11.3",j_="0.4.85",$_="0.40.3",U_="1.6.1",H_="1.11.0",Z_="1.0.2",G_="1.11.0",K_="1.25.0",q_="1.0.0",W_="0.3.0",X_="1.4.2",J_="1.0.0",Y_="1.6.1",Q_="2.13.8+0",e1="0.18.1+0",n1="0.10.1",t1="1.2.13+1",r1="0.7.10",o1="0.2.7",s1="1.1.4+0",i1="5.11.0+0",a1="1.59.0+0",l1="2022.0.0+0",c1="17.4.0+2",u1={ADTypes:pl,AbstractFFTs:hl,AbstractMCMC:bl,AbstractPPL:yl,AbstractTrees:wl,Accessors:El,Adapt:Dl,AdvancedHMC:Rl,AdvancedMH:Ml,AdvancedPS:xl,AdvancedVI:Tl,AliasTables:Fl,ArgCheck:Nl,ArgTools:Sl,ArnoldiMethod:Cl,Arpack:Al,Arpack_jll:kl,ArrayInterface:Il,Artifacts:Ol,Atomix:Ll,AtomsBase:Pl,AxisAlgorithms:zl,AxisArrays:Vl,BFloat16s:Bl,BangBang:jl,Base64:$l,Baselet:Ul,Bijectors:Hl,BitFlags:Zl,BufferedStreams:Gl,CEnum:Kl,CSV:ql,ChainRules:Wl,ChainRulesCore:Xl,Chairmarks:Jl,ChangesOfVariables:Yl,Chemfiles:Ql,Chemfiles_jll:ec,CodecZlib:nc,ColorSchemes:tc,ColorTypes:rc,ColorVectorSpace:oc,Colors:sc,Combinatorics:ic,CommonSolve:ac,CommonSubexpressions:lc,Compat:cc,CompilerSupportLibraries_jll:uc,CompositionsBase:fc,ConcurrentUtilities:dc,ConsoleProgressMonitor:_c,ConstructionBase:mc,ContextVariablesX:vc,Crayons:gc,DataAPI:pc,DataDeps:hc,DataFrames:bc,DataStructures:yc,DataValueInterfaces:wc,Dates:Ec,DefineSingletons:Dc,DelimitedFiles:Rc,DensityInterface:Mc,DiffResults:xc,DiffRules:Tc,DifferentiationInterface:Fc,DispatchDoctor:Nc,Distributed:Sc,Distributions:Cc,DistributionsAD:Ac,DocStringExtensions:kc,Downloads:Ic,DynamicPPL:Oc,EllipticalSliceSampling:Lc,EnumX:Pc,Enzyme:zc,EnzymeCore:Vc,Enzyme_jll:Bc,ExceptionUnwrapping:jc,ExprTools:$c,ExproniconLite:Uc,FFTW:Hc,FFTW_jll:Zc,FLoops:Gc,FLoopsBase:Kc,FastClosures:qc,FileIO:Wc,FilePathsBase:Xc,FileWatching:Jc,FillArrays:Yc,FiniteDiff:Qc,FiniteDifferences:eu,FixedPointNumbers:nu,ForwardDiff:tu,FunctionWrappers:ru,FunctionWrappersWrappers:ou,Functors:su,Future:iu,GPUArraysCore:au,GPUCompiler:lu,GZip:cu,Glob:uu,Graphs:fu,HDF5:du,HDF5_jll:_u,HTTP:mu,HashArrayMappedTries:vu,Hwloc_jll:gu,HypergeometricFunctions:pu,IRTools:hu,ImageBase:bu,ImageCore:yu,ImageShow:wu,Inflate:Eu,InitialValues:Du,InlineStrings:Ru,IntelOpenMP_jll:Mu,InteractiveUtils:xu,InternedStrings:Tu,Interpolations:Fu,IntervalSets:Nu,InverseFunctions:Su,InvertedIndices:Cu,IrrationalConstants:Au,IterTools:ku,IteratorInterfaceExtensions:Iu,JLD2:Ou,JLLWrappers:Lu,JSON:"0.21.4",JSON3:Pu,Jieko:zu,JuliaVariables:Vu,KernelAbstractions:Bu,KernelDensity:ju,LBFGSB:$u,LLVM:Uu,LLVMExtra_jll:Hu,L_BFGS_B_jll:Zu,LaTeXStrings:Gu,LazyArtifacts:Ku,LazyModules:qu,LeftChildRightSiblingTrees:Wu,LibCURL:Xu,LibCURL_jll:Ju,LibGit2:Yu,LibGit2_jll:Qu,LibSSH2_jll:ef,LibTracyClient_jll:nf,Libdl:tf,Libiconv_jll:rf,Libtask:of,LineSearches:sf,LinearAlgebra:af,LogDensityProblems:lf,LogDensityProblemsAD:cf,LogExpFunctions:uf,Logging:ff,LoggingExtras:df,MAT:_f,MCMCChains:mf,MCMCDiagnosticTools:vf,MKL_jll:gf,MLCore:pf,MLDatasets:hf,MLJModelInterface:bf,MLStyle:yf,MLUtils:wf,MPICH_jll:Ef,MPIPreferences:Df,MPItrampoline_jll:Rf,MacroTools:Mf,MappedArrays:xf,Markdown:Tf,MbedTLS:Ff,MbedTLS_jll:Nf,MicroCollections:Sf,MicrosoftMPI_jll:Cf,Missings:Af,MistyClosures:kf,Mmap:If,Mooncake:Of,MosaicViews:Lf,Moshi:Pf,MozillaCACerts_jll:zf,MultivariateStats:Vf,NLSolversBase:Bf,NNlib:jf,NPZ:$f,NaNMath:Uf,NameResolution:Hf,NamedArrays:Zf,NaturalSort:Gf,NetworkOptions:Kf,ObjectFile:qf,OffsetArrays:Wf,OpenBLAS_jll:Xf,OpenLibm_jll:Jf,OpenMPI_jll:Yf,OpenSSL:Qf,OpenSSL_jll:ed,OpenSpecFun_jll:nd,Optim:td,Optimisers:rd,Optimization:od,OptimizationBase:sd,OptimizationOptimJL:id,OrderedCollections:ad,PDMats:ld,PackageExtensionCompat:cd,PaddedViews:ud,Parameters:fd,Parsers:dd,PeriodicTable:_d,Pickle:md,Pkg:vd,PooledArrays:gd,PositiveFactorizations:pd,PreallocationTools:hd,PrecompileTools:bd,Preferences:yd,PrettyPrint:wd,PrettyTables:Ed,Printf:Dd,ProgressLogging:Rd,ProgressMeter:Md,PtrArrays:xd,QuadGK:Td,REPL:Fd,Random:Nd,Random123:Sd,RandomNumbers:Cd,RangeArrays:Ad,Ratios:kd,RealDot:Id,RecipesBase:Od,RecursiveArrayTools:Ld,Reexport:Pd,Requires:zd,ReverseDiff:Vd,Richardson:Bd,Rmath:jd,Rmath_jll:$d,Roots:Ud,RuntimeGeneratedFunctions:Hd,SHA:Zd,SSMProblems:Gd,SciMLBase:Kd,SciMLOperators:qd,SciMLStructures:Wd,ScientificTypesBase:Xd,ScopedValues:Jd,Scratch:Yd,SentinelArrays:Qd,Serialization:e_,Setfield:n_,SharedArrays:t_,ShowCases:r_,SimpleBufferStream:o_,SimpleTraits:s_,Sockets:i_,SortingAlgorithms:a_,SparseArrays:l_,SparseConnectivityTracer:c_,SparseInverseSubset:u_,SparseMatrixColorings:f_,SpecialFunctions:d_,SplittablesBase:__,StackViews:m_,StaticArrays:v_,StaticArraysCore:g_,StatisticalTraits:p_,Statistics:h_,StatsAPI:b_,StatsBase:y_,StatsFuns:w_,StridedViews:E_,StringEncodings:D_,StringManipulation:R_,StructArrays:M_,StructIO:x_,StructTypes:T_,StyledStrings:F_,SuiteSparse:N_,SuiteSparse_jll:S_,SymbolicIndexingInterface:C_,TOML:A_,TableTraits:k_,Tables:I_,Tar:O_,TensorCore:L_,TerminalLoggers:P_,Test:z_,Tracy:V_,TranscodingStreams:B_,Transducers:j_,Turing:$_,URIs:U_,UUIDs:H_,UnPack:Z_,Unicode:G_,Unitful:K_,UnitfulAtomic:q_,UnsafeAtomics:W_,WeakRefStrings:X_,WoodburyMatrices:J_,WorkerUtilities:Y_,XML2_jll:Q_,Xorg_libpciaccess_jll:e1,ZipFile:n1,Zlib_jll:t1,Zygote:r1,ZygoteRules:o1,libaec_jll:s1,libblastrampoline_jll:i1,nghttp2_jll:a1,oneTBB_jll:l1,p7zip_jll:c1};function Et(e){return[...e.entries()].sort(([n,t],[r,i])=>n.localeCompare(r))}var f1=pe('<tr><td class="svelte-7y9k9c"> </td><td class="version svelte-7y9k9c"> </td></tr>'),d1=pe('<table id="manifest" class="svelte-7y9k9c"><thead><tr><th class="svelte-7y9k9c">Package</th><th class="svelte-7y9k9c">Version</th></tr></thead><tbody></tbody></table>');function _1(e,n){bn(n,!1);let t=new Map;for(const[s,l]of Object.entries(u1))t.set(s,l===""?null:l);zt();var r=d1(),i=Ee(W(r));mn(i,5,()=>Et(t),_n,(s,l)=>{let u=()=>O(l)[0],a=()=>O(l)[1];var c=f1(),v=W(c),_=W(v),f=Ee(v),p=W(f);De(()=>{Ve(_,u()),Ve(p,a()===null?"":`v${a()}`)}),ne(s,c)}),ne(e,r),yn()}function m1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var dt,vr;function v1(){if(vr)return dt;vr=1;function e(o){return o instanceof Map?o.clear=o.delete=o.set=function(){throw new Error("map is read-only")}:o instanceof Set&&(o.add=o.clear=o.delete=function(){throw new Error("set is read-only")}),Object.freeze(o),Object.getOwnPropertyNames(o).forEach(d=>{const g=o[d],C=typeof g;(C==="object"||C==="function")&&!Object.isFrozen(g)&&e(g)}),o}class n{constructor(d){d.data===void 0&&(d.data={}),this.data=d.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(o,...d){const g=Object.create(null);for(const C in o)g[C]=o[C];return d.forEach(function(C){for(const Z in C)g[Z]=C[Z]}),g}const i="</span>",s=o=>!!o.scope,l=(o,{prefix:d})=>{if(o.startsWith("language:"))return o.replace("language:","language-");if(o.includes(".")){const g=o.split(".");return[`${d}${g.shift()}`,...g.map((C,Z)=>`${C}${"_".repeat(Z+1)}`)].join(" ")}return`${d}${o}`};class u{constructor(d,g){this.buffer="",this.classPrefix=g.classPrefix,d.walk(this)}addText(d){this.buffer+=t(d)}openNode(d){if(!s(d))return;const g=l(d.scope,{prefix:this.classPrefix});this.span(g)}closeNode(d){s(d)&&(this.buffer+=i)}value(){return this.buffer}span(d){this.buffer+=`<span class="${d}">`}}const a=(o={})=>{const d={children:[]};return Object.assign(d,o),d};class c{constructor(){this.rootNode=a(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(d){this.top.children.push(d)}openNode(d){const g=a({scope:d});this.add(g),this.stack.push(g)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(d){return this.constructor._walk(d,this.rootNode)}static _walk(d,g){return typeof g=="string"?d.addText(g):g.children&&(d.openNode(g),g.children.forEach(C=>this._walk(d,C)),d.closeNode(g)),d}static _collapse(d){typeof d!="string"&&d.children&&(d.children.every(g=>typeof g=="string")?d.children=[d.children.join("")]:d.children.forEach(g=>{c._collapse(g)}))}}class v extends c{constructor(d){super(),this.options=d}addText(d){d!==""&&this.add(d)}startScope(d){this.openNode(d)}endScope(){this.closeNode()}__addSublanguage(d,g){const C=d.root;g&&(C.scope=`language:${g}`),this.add(C)}toHTML(){return new u(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(o){return o?typeof o=="string"?o:o.source:null}function f(o){return F("(?=",o,")")}function p(o){return F("(?:",o,")*")}function h(o){return F("(?:",o,")?")}function F(...o){return o.map(g=>_(g)).join("")}function T(o){const d=o[o.length-1];return typeof d=="object"&&d.constructor===Object?(o.splice(o.length-1,1),d):{}}function P(...o){return"("+(T(o).capture?"":"?:")+o.map(C=>_(C)).join("|")+")"}function H(o){return new RegExp(o.toString()+"|").exec("").length-1}function x(o,d){const g=o&&o.exec(d);return g&&g.index===0}const E=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function M(o,{joinWith:d}){let g=0;return o.map(C=>{g+=1;const Z=g;let G=_(C),w="";for(;G.length>0;){const y=E.exec(G);if(!y){w+=G;break}w+=G.substring(0,y.index),G=G.substring(y.index+y[0].length),y[0][0]==="\\"&&y[1]?w+="\\"+String(Number(y[1])+Z):(w+=y[0],y[0]==="("&&g++)}return w}).map(C=>`(${C})`).join(d)}const Q=/\b\B/,S="[a-zA-Z]\\w*",U="[a-zA-Z_]\\w*",oe="\\b\\d+(\\.\\d+)?",Te="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ie="\\b(0b[01]+)",Ae="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",on=(o={})=>{const d=/^#![ ]*\//;return o.binary&&(o.begin=F(d,/.*\b/,o.binary,/\b.*/)),r({scope:"meta",begin:d,end:/$/,relevance:0,"on:begin":(g,C)=>{g.index!==0&&C.ignoreMatch()}},o)},he={begin:"\\\\[\\s\\S]",relevance:0},We={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[he]},me={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[he]},be={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},ue=function(o,d,g={}){const C=r({scope:"comment",begin:o,end:d,contains:[]},g);C.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const Z=P("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return C.contains.push({begin:F(/[ ]+/,"(",Z,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),C},sn=ue("//","$"),En=ue("/\\*","\\*/"),nt=ue("#","$"),an={scope:"number",begin:oe,relevance:0},Dn={scope:"number",begin:Te,relevance:0},Yr={scope:"number",begin:ie,relevance:0},Qr={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[he,{begin:/\[/,end:/\]/,relevance:0,contains:[he]}]},eo={scope:"title",begin:S,relevance:0},no={scope:"title",begin:U,relevance:0},to={begin:"\\.\\s*"+U,relevance:0};var Rn=Object.freeze({__proto__:null,APOS_STRING_MODE:We,BACKSLASH_ESCAPE:he,BINARY_NUMBER_MODE:Yr,BINARY_NUMBER_RE:ie,COMMENT:ue,C_BLOCK_COMMENT_MODE:En,C_LINE_COMMENT_MODE:sn,C_NUMBER_MODE:Dn,C_NUMBER_RE:Te,END_SAME_AS_BEGIN:function(o){return Object.assign(o,{"on:begin":(d,g)=>{g.data._beginMatch=d[1]},"on:end":(d,g)=>{g.data._beginMatch!==d[1]&&g.ignoreMatch()}})},HASH_COMMENT_MODE:nt,IDENT_RE:S,MATCH_NOTHING_RE:Q,METHOD_GUARD:to,NUMBER_MODE:an,NUMBER_RE:oe,PHRASAL_WORDS_MODE:be,QUOTE_STRING_MODE:me,REGEXP_MODE:Qr,RE_STARTERS_RE:Ae,SHEBANG:on,TITLE_MODE:eo,UNDERSCORE_IDENT_RE:U,UNDERSCORE_TITLE_MODE:no});function ro(o,d){o.input[o.index-1]==="."&&d.ignoreMatch()}function oo(o,d){o.className!==void 0&&(o.scope=o.className,delete o.className)}function so(o,d){d&&o.beginKeywords&&(o.begin="\\b("+o.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",o.__beforeBegin=ro,o.keywords=o.keywords||o.beginKeywords,delete o.beginKeywords,o.relevance===void 0&&(o.relevance=0))}function io(o,d){Array.isArray(o.illegal)&&(o.illegal=P(...o.illegal))}function ao(o,d){if(o.match){if(o.begin||o.end)throw new Error("begin & end are not supported with match");o.begin=o.match,delete o.match}}function lo(o,d){o.relevance===void 0&&(o.relevance=1)}const co=(o,d)=>{if(!o.beforeMatch)return;if(o.starts)throw new Error("beforeMatch cannot be used with starts");const g=Object.assign({},o);Object.keys(o).forEach(C=>{delete o[C]}),o.keywords=g.keywords,o.begin=F(g.beforeMatch,f(g.begin)),o.starts={relevance:0,contains:[Object.assign(g,{endsParent:!0})]},o.relevance=0,delete g.beforeMatch},uo=["of","and","for","in","not","or","if","then","parent","list","value"],fo="keyword";function Vt(o,d,g=fo){const C=Object.create(null);return typeof o=="string"?Z(g,o.split(" ")):Array.isArray(o)?Z(g,o):Object.keys(o).forEach(function(G){Object.assign(C,Vt(o[G],d,G))}),C;function Z(G,w){d&&(w=w.map(y=>y.toLowerCase())),w.forEach(function(y){const N=y.split("|");C[N[0]]=[G,_o(N[0],N[1])]})}}function _o(o,d){return d?Number(d):mo(o)?0:1}function mo(o){return uo.includes(o.toLowerCase())}const Bt={},He=o=>{console.error(o)},jt=(o,...d)=>{console.log(`WARN: ${o}`,...d)},Xe=(o,d)=>{Bt[`${o}/${d}`]||(console.log(`Deprecated as of ${o}. ${d}`),Bt[`${o}/${d}`]=!0)},Mn=new Error;function $t(o,d,{key:g}){let C=0;const Z=o[g],G={},w={};for(let y=1;y<=d.length;y++)w[y+C]=Z[y],G[y+C]=!0,C+=H(d[y-1]);o[g]=w,o[g]._emit=G,o[g]._multi=!0}function vo(o){if(Array.isArray(o.begin)){if(o.skip||o.excludeBegin||o.returnBegin)throw He("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Mn;if(typeof o.beginScope!="object"||o.beginScope===null)throw He("beginScope must be object"),Mn;$t(o,o.begin,{key:"beginScope"}),o.begin=M(o.begin,{joinWith:""})}}function go(o){if(Array.isArray(o.end)){if(o.skip||o.excludeEnd||o.returnEnd)throw He("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Mn;if(typeof o.endScope!="object"||o.endScope===null)throw He("endScope must be object"),Mn;$t(o,o.end,{key:"endScope"}),o.end=M(o.end,{joinWith:""})}}function po(o){o.scope&&typeof o.scope=="object"&&o.scope!==null&&(o.beginScope=o.scope,delete o.scope)}function ho(o){po(o),typeof o.beginScope=="string"&&(o.beginScope={_wrap:o.beginScope}),typeof o.endScope=="string"&&(o.endScope={_wrap:o.endScope}),vo(o),go(o)}function bo(o){function d(w,y){return new RegExp(_(w),"m"+(o.case_insensitive?"i":"")+(o.unicodeRegex?"u":"")+(y?"g":""))}class g{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(y,N){N.position=this.position++,this.matchIndexes[this.matchAt]=N,this.regexes.push([N,y]),this.matchAt+=H(y)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const y=this.regexes.map(N=>N[1]);this.matcherRe=d(M(y,{joinWith:"|"}),!0),this.lastIndex=0}exec(y){this.matcherRe.lastIndex=this.lastIndex;const N=this.matcherRe.exec(y);if(!N)return null;const X=N.findIndex((ln,rt)=>rt>0&&ln!==void 0),K=this.matchIndexes[X];return N.splice(0,X),Object.assign(N,K)}}class C{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(y){if(this.multiRegexes[y])return this.multiRegexes[y];const N=new g;return this.rules.slice(y).forEach(([X,K])=>N.addRule(X,K)),N.compile(),this.multiRegexes[y]=N,N}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(y,N){this.rules.push([y,N]),N.type==="begin"&&this.count++}exec(y){const N=this.getMatcher(this.regexIndex);N.lastIndex=this.lastIndex;let X=N.exec(y);if(this.resumingScanAtSamePosition()&&!(X&&X.index===this.lastIndex)){const K=this.getMatcher(0);K.lastIndex=this.lastIndex+1,X=K.exec(y)}return X&&(this.regexIndex+=X.position+1,this.regexIndex===this.count&&this.considerAll()),X}}function Z(w){const y=new C;return w.contains.forEach(N=>y.addRule(N.begin,{rule:N,type:"begin"})),w.terminatorEnd&&y.addRule(w.terminatorEnd,{type:"end"}),w.illegal&&y.addRule(w.illegal,{type:"illegal"}),y}function G(w,y){const N=w;if(w.isCompiled)return N;[oo,ao,ho,co].forEach(K=>K(w,y)),o.compilerExtensions.forEach(K=>K(w,y)),w.__beforeBegin=null,[so,io,lo].forEach(K=>K(w,y)),w.isCompiled=!0;let X=null;return typeof w.keywords=="object"&&w.keywords.$pattern&&(w.keywords=Object.assign({},w.keywords),X=w.keywords.$pattern,delete w.keywords.$pattern),X=X||/\w+/,w.keywords&&(w.keywords=Vt(w.keywords,o.case_insensitive)),N.keywordPatternRe=d(X,!0),y&&(w.begin||(w.begin=/\B|\b/),N.beginRe=d(N.begin),!w.end&&!w.endsWithParent&&(w.end=/\B|\b/),w.end&&(N.endRe=d(N.end)),N.terminatorEnd=_(N.end)||"",w.endsWithParent&&y.terminatorEnd&&(N.terminatorEnd+=(w.end?"|":"")+y.terminatorEnd)),w.illegal&&(N.illegalRe=d(w.illegal)),w.contains||(w.contains=[]),w.contains=[].concat(...w.contains.map(function(K){return yo(K==="self"?w:K)})),w.contains.forEach(function(K){G(K,N)}),w.starts&&G(w.starts,y),N.matcher=Z(N),N}if(o.compilerExtensions||(o.compilerExtensions=[]),o.contains&&o.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return o.classNameAliases=r(o.classNameAliases||{}),G(o)}function Ut(o){return o?o.endsWithParent||Ut(o.starts):!1}function yo(o){return o.variants&&!o.cachedVariants&&(o.cachedVariants=o.variants.map(function(d){return r(o,{variants:null},d)})),o.cachedVariants?o.cachedVariants:Ut(o)?r(o,{starts:o.starts?r(o.starts):null}):Object.isFrozen(o)?r(o):o}var wo="11.11.1";class Eo extends Error{constructor(d,g){super(d),this.name="HTMLInjectionError",this.html=g}}const tt=t,Ht=r,Zt=Symbol("nomatch"),Do=7,Gt=function(o){const d=Object.create(null),g=Object.create(null),C=[];let Z=!0;const G="Could not find the language '{}', did you forget to load/include a language module?",w={disableAutodetect:!0,name:"Plain text",contains:[]};let y={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:v};function N(m){return y.noHighlightRe.test(m)}function X(m){let R=m.className+" ";R+=m.parentNode?m.parentNode.className:"";const I=y.languageDetectRe.exec(R);if(I){const B=ke(I[1]);return B||(jt(G.replace("{}",I[1])),jt("Falling back to no-highlight mode for this block.",m)),B?I[1]:"no-highlight"}return R.split(/\s+/).find(B=>N(B)||ke(B))}function K(m,R,I){let B="",q="";typeof R=="object"?(B=m,I=R.ignoreIllegals,q=R.language):(Xe("10.7.0","highlight(lang, code, ...args) has been deprecated."),Xe("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),q=m,B=R),I===void 0&&(I=!0);const ve={code:B,language:q};Tn("before:highlight",ve);const Ie=ve.result?ve.result:ln(ve.language,ve.code,I);return Ie.code=ve.code,Tn("after:highlight",Ie),Ie}function ln(m,R,I,B){const q=Object.create(null);function ve(b,D){return b.keywords[D]}function Ie(){if(!A.keywords){J.addText(j);return}let b=0;A.keywordPatternRe.lastIndex=0;let D=A.keywordPatternRe.exec(j),k="";for(;D;){k+=j.substring(b,D.index);const L=we.case_insensitive?D[0].toLowerCase():D[0],Y=ve(A,L);if(Y){const[Fe,Bo]=Y;if(J.addText(k),k="",q[L]=(q[L]||0)+1,q[L]<=Do&&(Sn+=Bo),Fe.startsWith("_"))k+=D[0];else{const jo=we.classNameAliases[Fe]||Fe;ye(D[0],jo)}}else k+=D[0];b=A.keywordPatternRe.lastIndex,D=A.keywordPatternRe.exec(j)}k+=j.substring(b),J.addText(k)}function Fn(){if(j==="")return;let b=null;if(typeof A.subLanguage=="string"){if(!d[A.subLanguage]){J.addText(j);return}b=ln(A.subLanguage,j,!0,er[A.subLanguage]),er[A.subLanguage]=b._top}else b=ot(j,A.subLanguage.length?A.subLanguage:null);A.relevance>0&&(Sn+=b.relevance),J.__addSublanguage(b._emitter,b.language)}function ae(){A.subLanguage!=null?Fn():Ie(),j=""}function ye(b,D){b!==""&&(J.startScope(D),J.addText(b),J.endScope())}function Xt(b,D){let k=1;const L=D.length-1;for(;k<=L;){if(!b._emit[k]){k++;continue}const Y=we.classNameAliases[b[k]]||b[k],Fe=D[k];Y?ye(Fe,Y):(j=Fe,Ie(),j=""),k++}}function Jt(b,D){return b.scope&&typeof b.scope=="string"&&J.openNode(we.classNameAliases[b.scope]||b.scope),b.beginScope&&(b.beginScope._wrap?(ye(j,we.classNameAliases[b.beginScope._wrap]||b.beginScope._wrap),j=""):b.beginScope._multi&&(Xt(b.beginScope,D),j="")),A=Object.create(b,{parent:{value:A}}),A}function Yt(b,D,k){let L=x(b.endRe,k);if(L){if(b["on:end"]){const Y=new n(b);b["on:end"](D,Y),Y.isMatchIgnored&&(L=!1)}if(L){for(;b.endsParent&&b.parent;)b=b.parent;return b}}if(b.endsWithParent)return Yt(b.parent,D,k)}function Oo(b){return A.matcher.regexIndex===0?(j+=b[0],1):(lt=!0,0)}function Lo(b){const D=b[0],k=b.rule,L=new n(k),Y=[k.__beforeBegin,k["on:begin"]];for(const Fe of Y)if(Fe&&(Fe(b,L),L.isMatchIgnored))return Oo(D);return k.skip?j+=D:(k.excludeBegin&&(j+=D),ae(),!k.returnBegin&&!k.excludeBegin&&(j=D)),Jt(k,b),k.returnBegin?0:D.length}function Po(b){const D=b[0],k=R.substring(b.index),L=Yt(A,b,k);if(!L)return Zt;const Y=A;A.endScope&&A.endScope._wrap?(ae(),ye(D,A.endScope._wrap)):A.endScope&&A.endScope._multi?(ae(),Xt(A.endScope,b)):Y.skip?j+=D:(Y.returnEnd||Y.excludeEnd||(j+=D),ae(),Y.excludeEnd&&(j=D));do A.scope&&J.closeNode(),!A.skip&&!A.subLanguage&&(Sn+=A.relevance),A=A.parent;while(A!==L.parent);return L.starts&&Jt(L.starts,b),Y.returnEnd?0:D.length}function zo(){const b=[];for(let D=A;D!==we;D=D.parent)D.scope&&b.unshift(D.scope);b.forEach(D=>J.openNode(D))}let Nn={};function Qt(b,D){const k=D&&D[0];if(j+=b,k==null)return ae(),0;if(Nn.type==="begin"&&D.type==="end"&&Nn.index===D.index&&k===""){if(j+=R.slice(D.index,D.index+1),!Z){const L=new Error(`0 width match regex (${m})`);throw L.languageName=m,L.badRule=Nn.rule,L}return 1}if(Nn=D,D.type==="begin")return Lo(D);if(D.type==="illegal"&&!I){const L=new Error('Illegal lexeme "'+k+'" for mode "'+(A.scope||"<unnamed>")+'"');throw L.mode=A,L}else if(D.type==="end"){const L=Po(D);if(L!==Zt)return L}if(D.type==="illegal"&&k==="")return j+=`
`,1;if(at>1e5&&at>D.index*3)throw new Error("potential infinite loop, way more iterations than matches");return j+=k,k.length}const we=ke(m);if(!we)throw He(G.replace("{}",m)),new Error('Unknown language: "'+m+'"');const Vo=bo(we);let it="",A=B||Vo;const er={},J=new y.__emitter(y);zo();let j="",Sn=0,Ze=0,at=0,lt=!1;try{if(we.__emitTokens)we.__emitTokens(R,J);else{for(A.matcher.considerAll();;){at++,lt?lt=!1:A.matcher.considerAll(),A.matcher.lastIndex=Ze;const b=A.matcher.exec(R);if(!b)break;const D=R.substring(Ze,b.index),k=Qt(D,b);Ze=b.index+k}Qt(R.substring(Ze))}return J.finalize(),it=J.toHTML(),{language:m,value:it,relevance:Sn,illegal:!1,_emitter:J,_top:A}}catch(b){if(b.message&&b.message.includes("Illegal"))return{language:m,value:tt(R),illegal:!0,relevance:0,_illegalBy:{message:b.message,index:Ze,context:R.slice(Ze-100,Ze+100),mode:b.mode,resultSoFar:it},_emitter:J};if(Z)return{language:m,value:tt(R),illegal:!1,relevance:0,errorRaised:b,_emitter:J,_top:A};throw b}}function rt(m){const R={value:tt(m),illegal:!1,relevance:0,_top:w,_emitter:new y.__emitter(y)};return R._emitter.addText(m),R}function ot(m,R){R=R||y.languages||Object.keys(d);const I=rt(m),B=R.filter(ke).filter(Wt).map(ae=>ln(ae,m,!1));B.unshift(I);const q=B.sort((ae,ye)=>{if(ae.relevance!==ye.relevance)return ye.relevance-ae.relevance;if(ae.language&&ye.language){if(ke(ae.language).supersetOf===ye.language)return 1;if(ke(ye.language).supersetOf===ae.language)return-1}return 0}),[ve,Ie]=q,Fn=ve;return Fn.secondBest=Ie,Fn}function Ro(m,R,I){const B=R&&g[R]||I;m.classList.add("hljs"),m.classList.add(`language-${B}`)}function st(m){let R=null;const I=X(m);if(N(I))return;if(Tn("before:highlightElement",{el:m,language:I}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(y.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),y.throwUnescapedHTML))throw new Eo("One of your code blocks includes unescaped HTML.",m.innerHTML);R=m;const B=R.textContent,q=I?K(B,{language:I,ignoreIllegals:!0}):ot(B);m.innerHTML=q.value,m.dataset.highlighted="yes",Ro(m,I,q.language),m.result={language:q.language,re:q.relevance,relevance:q.relevance},q.secondBest&&(m.secondBest={language:q.secondBest.language,relevance:q.secondBest.relevance}),Tn("after:highlightElement",{el:m,result:q,text:B})}function Mo(m){y=Ht(y,m)}const xo=()=>{xn(),Xe("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function To(){xn(),Xe("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Kt=!1;function xn(){function m(){xn()}if(document.readyState==="loading"){Kt||window.addEventListener("DOMContentLoaded",m,!1),Kt=!0;return}document.querySelectorAll(y.cssSelector).forEach(st)}function Fo(m,R){let I=null;try{I=R(o)}catch(B){if(He("Language definition for '{}' could not be registered.".replace("{}",m)),Z)He(B);else throw B;I=w}I.name||(I.name=m),d[m]=I,I.rawDefinition=R.bind(null,o),I.aliases&&qt(I.aliases,{languageName:m})}function No(m){delete d[m];for(const R of Object.keys(g))g[R]===m&&delete g[R]}function So(){return Object.keys(d)}function ke(m){return m=(m||"").toLowerCase(),d[m]||d[g[m]]}function qt(m,{languageName:R}){typeof m=="string"&&(m=[m]),m.forEach(I=>{g[I.toLowerCase()]=R})}function Wt(m){const R=ke(m);return R&&!R.disableAutodetect}function Co(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=R=>{m["before:highlightBlock"](Object.assign({block:R.el},R))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=R=>{m["after:highlightBlock"](Object.assign({block:R.el},R))})}function Ao(m){Co(m),C.push(m)}function ko(m){const R=C.indexOf(m);R!==-1&&C.splice(R,1)}function Tn(m,R){const I=m;C.forEach(function(B){B[I]&&B[I](R)})}function Io(m){return Xe("10.7.0","highlightBlock will be removed entirely in v12.0"),Xe("10.7.0","Please use highlightElement now."),st(m)}Object.assign(o,{highlight:K,highlightAuto:ot,highlightAll:xn,highlightElement:st,highlightBlock:Io,configure:Mo,initHighlighting:xo,initHighlightingOnLoad:To,registerLanguage:Fo,unregisterLanguage:No,listLanguages:So,getLanguage:ke,registerAliases:qt,autoDetection:Wt,inherit:Ht,addPlugin:Ao,removePlugin:ko}),o.debugMode=function(){Z=!1},o.safeMode=function(){Z=!0},o.versionString=wo,o.regex={concat:F,lookahead:f,either:P,optional:h,anyNumberOfTimes:p};for(const m in Rn)typeof Rn[m]=="object"&&e(Rn[m]);return Object.assign(o,Rn),o},Je=Gt({});return Je.newInstance=()=>Gt({}),dt=Je,Je.HighlightJS=Je,Je.default=Je,dt}var g1=v1();const gr=m1(g1);var p1=pe("<pre><code><!></code></pre>");function h1(e,n){const t=Un(n,["children","$$slots","$$events","$$legacy"]),r=Un(t,["code","highlighted","languageName","langtag"]);let i=Be(n,"code",8),s=Be(n,"highlighted",8),l=Be(n,"languageName",8,"plaintext"),u=Be(n,"langtag",8,!1);var a=p1();let c;var v=W(a);Pt(v,1,"",null,{},{hljs:!0});var _=W(v);{var f=h=>{var F=Lt(),T=Xn(F);si(T,s),ne(h,F)},p=h=>{var F=Js();De(()=>Ve(F,i())),ne(h,F)};yt(_,h=>{s()?h(f):h(p,!1)})}De(h=>c=_i(a,c,{"data-language":l(),...r,[dn]:h},"svelte-1w9vok"),[()=>({langtag:u()})],St),ne(e,a)}function b1(e,n){const t=Un(n,["children","$$slots","$$events","$$legacy"]),r=Un(t,["language","code","langtag"]);bn(n,!1);let i=Be(n,"language",8),s=Be(n,"code",8),l=Be(n,"langtag",8,!1);const u=bi();let a=Ct("");yi(()=>{O(a)&&u("highlight",{highlighted:O(a)})}),Ts(()=>(pt(i()),pt(s())),()=>{gr.registerLanguage(i().name,i().register),de(a,gr.highlight(s(),{language:i().name}).value)}),Fs(),zt();var c=Lt(),v=Xn(c);ii(v,n,"default",{get highlighted(){return O(a)}},_=>{h1(_,pi(()=>r,{get languageName(){return i().name},get langtag(){return l()},get highlighted(){return O(a)},get code(){return s()}}))}),ne(e,c),yn()}function y1(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",s={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},l={keywords:s,illegal:/<\//},u={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},a={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},c={className:"subst",begin:/\$\(/,end:/\)/,keywords:s},v={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,c,v],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},f={className:"string",contains:[e.BACKSLASH_ESCAPE,c,v],begin:"`",end:"`"},p={className:"meta",begin:"@"+n},h={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return l.name="Julia",l.contains=[u,a,_,f,p,h,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],c.contains=l.contains,l}const w1={name:"julia",register:y1};var E1=pe('<th class="svelte-m8v9hl"> </th>'),D1=pe('<td class="svelte-m8v9hl"> </td>'),R1=pe('<a class="issue svelte-m8v9hl" target="_blank">(?)</a>'),M1=pe('<td class="svelte-m8v9hl"><!> <span> </span></td>'),x1=pe('<tr class="svelte-m8v9hl"><td class="svelte-m8v9hl"> <div class="model-definition svelte-m8v9hl"><!></div></td><!></tr>'),T1=pe('<table id="results" class="svelte-m8v9hl"><thead><tr class="svelte-m8v9hl"><th class="svelte-m8v9hl">Model name \\\\ AD type</th><!></tr></thead><tbody></tbody></table>');function F1(e,n){bn(n,!0);const t=[...n.data.keys()],r=n.data.get(t[0]).keys(),i="https://github.com/EnzymeAD/Enzyme.jl/issues/1995",s="https://github.com/chalk-lab/Mooncake.jl/issues/570",l="https://github.com/EnzymeAD/Enzyme.jl/issues/2580",u="https://github.com/EnzymeAD/Enzyme.jl/issues/2589",a={assume_mvnormal__EnzymeForward:i,assume_wishart__EnzymeForward:i,multithreaded__Mooncake:s,demo_dot_assume_observe__EnzymeReverse:l,demo_dot_assume_observe_index__EnzymeReverse:l,demo_dot_assume_observe_matrix_index__EnzymeReverse:l,demo_dot_assume_observe_submodel__EnzymeReverse:l,multiple_constraints_same_var__EnzymeForward:u,multiple_constraints_same_var__EnzymeReverse:u};var c=T1(),v=W(c),_=W(v),f=Ee(W(_));mn(f,17,()=>r,_n,(h,F)=>{var T=E1(),P=W(T);De(()=>Ve(P,O(F))),ne(h,T)});var p=Ee(v);mn(p,21,()=>Et(n.data),_n,(h,F)=>{let T=()=>O(F)[0],P=()=>O(F)[1];var H=x1(),x=W(H),E=W(x),M=Ee(E),Q=W(M);b1(Q,{language:w1,get code(){return n.modelDefinitions[T()]}});var S=Ee(x);mn(S,17,()=>Et(P()),_n,(U,oe)=>{let Te=()=>O(oe)[0],ie=()=>O(oe)[1];var Ae=Lt(),on=Xn(Ae);{var he=me=>{var be=D1(),ue=W(be);De(sn=>Ve(ue,sn),[()=>ie().toFixed(3)]),ne(me,be)},We=me=>{var be=M1(),ue=W(be);{var sn=an=>{var Dn=R1();De(()=>wt(Dn,"href",a[`${T()}__${Te()}`])),ne(an,Dn)};yt(ue,an=>{a[`${T()}__${Te()}`]&&an(sn)})}var En=Ee(ue,2),nt=W(En);De(()=>{Pt(En,1,Kr(ie()),"svelte-m8v9hl"),Ve(nt,ie())}),ne(me,be)};yt(on,me=>{typeof ie()=="number"?me(he):me(We,!1)})}ne(U,Ae)}),De(()=>Ve(E,`${T()??""} `)),ne(h,H)}),ne(e,c),yn()}var N1=pe("<h3> </h3> <!>",1),S1=pe(`<div id="main-wrapper" class="svelte-14rlgmo"><main class="svelte-14rlgmo"><h1>Turing AD tests</h1> <p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p> <p>This page is intended as a brief overview of how different AD
            backends perform on a variety of Turing.jl models. Note that the
            inclusion of any AD backend here does not imply an endorsement from
            the Turing team; this table is purely for information.</p> <p>The scope of this table is limited to Turing models. It does not
            purport to show which AD backend is better for tasks that do not
            involve Turing models. If you are interested in more general
            comparisons of AD backends, you may wish to check out something like <a href="https://github.com/gradbench/gradbench" target="_blank">GradBench</a>.</p> <ul class="notes svelte-14rlgmo"><li>You can hover over the model names to see their definitions.</li> <li>The definitions of the AD types can be found in <a href="https://github.com/TuringLang/ADTests/blob/main/main.jl" target="_blank">the source code</a>.</li> <li><b>Numbers</b> indicate the time taken to calculate the gradient
                of the log density of the model using the specified AD type,
                divided by the time taken to calculate the log density itself
                (in AD speak, the primal). Basically: <b>smaller means faster.</b></li> <li>'<span class="wrong">wrong</span>' means that AD ran but the
                result was not correct. If this happens you should be very wary!
                Note that this is done by comparing against the result obtained
                using ForwardDiff, i.e., ForwardDiff is by definition always
                'correct'.</li> <li>'<span class="error">error</span>' means that AD didn't run.</li> <li>Some of the 'wrong' or 'error' entries have question marks next
                to them. These will link to a GitHub issue or other page that
                describes the problem.</li></ul> <h2>Results</h2> <p><a href="adtests.json" target="_blank" download="">Download the raw data (JSON)</a></p> <!> <h2>Manifest</h2> <p>The tests above were run with the following package versions:</p> <!></main></div>`);function C1(e,n){bn(n,!1);let t=new Map;for(const[u,a]of Object.entries(ba)){let c=a.__category__;delete a.__category__;let v=new Map;for(const[_,f]of Object.entries(a))v.set(_,f);t.has(c)||t.set(c,new Map),t.get(c).set(u,v)}console.log(t),zt();var r=S1(),i=W(r),s=Ee(W(i),14);mn(s,1,()=>t.entries(),_n,(u,a)=>{let c=()=>O(a)[0],v=()=>O(a)[1];var _=N1(),f=Xn(_),p=W(f),h=Ee(f,2);F1(h,{get data(){return v()},modelDefinitions:gl}),De(()=>Ve(p,c())),ne(u,_)});var l=Ee(s,6);_1(l,{}),ne(e,r),yn()}Ys(C1,{target:document.getElementById("app")});
