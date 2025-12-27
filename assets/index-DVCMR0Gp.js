(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const Xt=!1;var Bn=Array.isArray,$o=Array.prototype.indexOf,Et=Array.from,Ho=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,mr=Object.getOwnPropertyDescriptors,Ko=Object.prototype,Zo=Array.prototype,Dt=Object.getPrototypeOf,Jt=Object.isExtensible;function an(e){return typeof e=="function"}function Go(e){return e()}function dt(e){for(var n=0;n<e.length;n++)e[n]()}const he=2,pr=4,jn=8,Rt=16,Se=32,tn=64,Cn=128,fe=256,An=512,oe=1024,Re=2048,$e=4096,Te=8192,qn=16384,Wo=32768,xt=65536,Xo=1<<17,Jo=1<<19,gr=1<<20,_t=1<<21,je=Symbol("$state"),vr=Symbol("legacy props"),Yo=Symbol("");function hr(e){return e===this.v}function Qo(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Mt(e){return!Qo(e,this.v)}function es(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ns(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ts(e){throw new Error("https://svelte.dev/e/effect_orphan")}function rs(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function os(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function ss(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function is(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function as(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ls(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let vn=!1,cs=!1;function fs(){vn=!0}const Tt=1,Ft=2,yr=4,us=8,ds=16,_s=1,ms=2,br=4,ps=8,gs=16,vs=1,hs=2,se=Symbol(),ys="http://www.w3.org/1999/xhtml",bs="@attach";function wr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let q=null;function Yt(e){q=e}function hn(e,n=!1,t){var r=q={p:q,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};vn&&!n&&(q.l={s:null,u:null,r1:[],r2:en(!1)}),Ms(()=>{r.d=!0})}function yn(e){const n=q;if(n!==null){const l=n.e;if(l!==null){var t=P,r=V;n.e=null;try{for(var i=0;i<l.length;i++){var o=l[i];Ue(o.effect),xe(o.reaction),Gn(o.fn)}}finally{Ue(t),xe(r)}}q=n.p,n.m=!0}return{}}function Un(){return!vn||q!==null&&q.l===null}function Ge(e){if(typeof e!="object"||e===null||je in e)return e;const n=Dt(e);if(n!==Ko&&n!==Zo)return e;var t=new Map,r=Bn(e),i=Ie(0),o=V,l=f=>{var a=V;xe(o);var c=f();return xe(a),c};return r&&t.set("length",Ie(e.length)),new Proxy(e,{defineProperty(f,a,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&is();var p=t.get(a);return p===void 0?(p=l(()=>Ie(c.value)),t.set(a,p)):ce(p,l(()=>Ge(c.value))),!0},deleteProperty(f,a){var c=t.get(a);if(c===void 0)a in f&&(t.set(a,l(()=>Ie(se))),lt(i));else{if(r&&typeof a=="string"){var p=t.get("length"),_=Number(a);Number.isInteger(_)&&_<p.v&&ce(p,_)}ce(c,se),lt(i)}return!0},get(f,a,c){var g;if(a===je)return e;var p=t.get(a),_=a in f;if(p===void 0&&(!_||(g=Be(f,a))!=null&&g.writable)&&(p=l(()=>Ie(Ge(_?f[a]:se))),t.set(a,p)),p!==void 0){var u=O(p);return u===se?void 0:u}return Reflect.get(f,a,c)},getOwnPropertyDescriptor(f,a){var c=Reflect.getOwnPropertyDescriptor(f,a);if(c&&"value"in c){var p=t.get(a);p&&(c.value=O(p))}else if(c===void 0){var _=t.get(a),u=_==null?void 0:_.v;if(_!==void 0&&u!==se)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(f,a){var u;if(a===je)return!0;var c=t.get(a),p=c!==void 0&&c.v!==se||Reflect.has(f,a);if(c!==void 0||P!==null&&(!p||(u=Be(f,a))!=null&&u.writable)){c===void 0&&(c=l(()=>Ie(p?Ge(f[a]):se)),t.set(a,c));var _=O(c);if(_===se)return!1}return p},set(f,a,c,p){var K;var _=t.get(a),u=a in f;if(r&&a==="length")for(var g=c;g<_.v;g+=1){var v=t.get(g+"");v!==void 0?ce(v,se):g in f&&(v=l(()=>Ie(se)),t.set(g+"",v))}_===void 0?(!u||(K=Be(f,a))!=null&&K.writable)&&(_=l(()=>Ie(void 0)),ce(_,l(()=>Ge(c))),t.set(a,_)):(u=_.v!==se,ce(_,l(()=>Ge(c))));var F=Reflect.getOwnPropertyDescriptor(f,a);if(F!=null&&F.set&&F.set.call(p,c),!u){if(r&&typeof a=="string"){var A=t.get("length"),z=Number(a);Number.isInteger(z)&&z>=A.v&&ce(A,z+1)}lt(i)}return!0},ownKeys(f){O(i);var a=Reflect.ownKeys(f).filter(_=>{var u=t.get(_);return u===void 0||u.v!==se});for(var[c,p]of t)p.v!==se&&!(c in f)&&a.push(c);return a},setPrototypeOf(){as()}})}function lt(e,n=1){ce(e,e.v+n)}function _n(e){var n=he|Re,t=V!==null&&(V.f&he)!==0?V:null;return P===null||t!==null&&(t.f&fe)!==0?n|=fe:P.f|=gr,{ctx:q,deps:null,effects:null,equals:hr,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??P}}function St(e){const n=_n(e);return n.equals=Mt,n}function Er(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)Fe(n[t])}}function ws(e){for(var n=e.parent;n!==null;){if((n.f&he)===0)return n;n=n.parent}return null}function Dr(e){var n,t=P;Ue(ws(e));try{Er(e),n=Vr(e)}finally{Ue(t)}return n}function Rr(e){var n=Dr(e),t=(ze||(e.f&fe)!==0)&&e.deps!==null?$e:oe;_e(e,t),e.equals(n)||(e.v=n,e.wv=Pr())}const mn=new Map;function en(e,n){var t={f:0,v:e,reactions:null,equals:hr,rv:0,wv:0};return t}function Ie(e,n){const t=en(e);return ks(t),t}function $n(e,n=!1){var r;const t=en(e);return n||(t.equals=Mt),vn&&q!==null&&q.l!==null&&((r=q.l).s??(r.s=[])).push(t),t}function ce(e,n,t=!1){V!==null&&!Ee&&Un()&&(V.f&(he|Rt))!==0&&!(re!=null&&re.includes(e))&&ls();let r=t?Ge(n):n;return mt(e,r)}function mt(e,n){if(!e.equals(n)){var t=e.v;bn?mn.set(e,n):mn.set(e,t),e.v=n,(e.f&he)!==0&&((e.f&Re)!==0&&Dr(e),_e(e,(e.f&fe)===0?oe:$e)),e.wv=Pr(),xr(e,Re),Un()&&P!==null&&(P.f&oe)!==0&&(P.f&(Se|tn))===0&&(de===null?Os([e]):de.push(e))}return n}function Qt(e,n=1){var t=O(e),r=n===1?t++:t--;return ce(e,t),r}function xr(e,n){var t=e.reactions;if(t!==null)for(var r=Un(),i=t.length,o=0;o<i;o++){var l=t[o],f=l.f;(f&Re)===0&&(!r&&l===P||(_e(l,n),(f&(oe|fe))!==0&&((f&he)!==0?xr(l,$e):et(l))))}}let Es=!1;var er,Mr,Tr,Fr;function Ds(){if(er===void 0){er=window,Mr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Tr=Be(n,"firstChild").get,Fr=Be(n,"nextSibling").get,Jt(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Jt(t)&&(t.__t=void 0)}}function Hn(e=""){return document.createTextNode(e)}function Pe(e){return Tr.call(e)}function Kn(e){return Fr.call(e)}function W(e,n){return Pe(e)}function Zn(e,n){{var t=Pe(e);return t instanceof Comment&&t.data===""?Kn(t):t}}function ve(e,n=1,t=!1){let r=e;for(;n--;)r=Kn(r);return r}function Rs(e){e.textContent=""}function Sr(e){P===null&&V===null&&ts(),V!==null&&(V.f&fe)!==0&&P===null&&ns(),bn&&es()}function xs(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function rn(e,n,t,r=!0){var i=P,o={ctx:q,deps:null,nodes_start:null,nodes_end:null,f:e|Re,first:null,fn:n,last:null,next:null,parent:i,prev:null,teardown:null,transitions:null,wv:0};if(t)try{Qn(o),o.f|=Wo}catch(a){throw Fe(o),a}else n!==null&&et(o);var l=t&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&(gr|Cn))===0;if(!l&&r&&(i!==null&&xs(o,i),V!==null&&(V.f&he)!==0)){var f=V;(f.effects??(f.effects=[])).push(o)}return o}function Ms(e){const n=rn(jn,null,!1);return _e(n,oe),n.teardown=e,n}function nr(e){Sr();var n=P!==null&&(P.f&Se)!==0&&q!==null&&!q.m;if(n){var t=q;(t.e??(t.e=[])).push({fn:e,effect:P,reaction:V})}else{var r=Gn(e);return r}}function Ts(e){return Sr(),Wn(e)}function Fs(e){const n=rn(tn,e,!0);return(t={})=>new Promise(r=>{t.outro?kn(n,()=>{Fe(n),r(void 0)}):(Fe(n),r(void 0))})}function Gn(e){return rn(pr,e,!1)}function Ss(e,n){var t=q,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=Wn(()=>{e(),!r.ran&&(r.ran=!0,ce(t.l.r2,!0),pn(n))})}function Ns(){var e=q;Wn(()=>{if(O(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&oe)!==0&&_e(t,$e),on(t)&&Qn(t),n.ran=!1}e.l.r2.v=!1}})}function Wn(e){return rn(jn,e,!0)}function De(e,n=[],t=_n){const r=n.map(t);return Xn(()=>e(...r.map(O)))}function Xn(e,n=0){return rn(jn|Rt|n,e,!0)}function nn(e,n=!0){return rn(jn|Se,e,!0,n)}function Nr(e){var n=e.teardown;if(n!==null){const t=bn,r=V;tr(!0),xe(null);try{n.call(null)}finally{tr(t),xe(r)}}}function Cr(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&tn)!==0?t.parent=null:Fe(t,n),t=r}}function Cs(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&Se)===0&&Fe(n),n=t}}function Fe(e,n=!0){var t=!1;(n||(e.f&Jo)!==0)&&e.nodes_start!==null&&(Ar(e.nodes_start,e.nodes_end),t=!0),Cr(e,n&&!t),zn(e,0),_e(e,qn);var r=e.transitions;if(r!==null)for(const o of r)o.stop();Nr(e);var i=e.parent;i!==null&&i.first!==null&&kr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Ar(e,n){for(;e!==null;){var t=e===n?null:Kn(e);e.remove(),e=t}}function kr(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function kn(e,n){var t=[];Nt(e,t,!0),Or(t,()=>{Fe(e),n&&n()})}function Or(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var i of e)i.out(r)}else n()}function Nt(e,n,t){if((e.f&Te)===0){if(e.f^=Te,e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&n.push(l);for(var r=e.first;r!==null;){var i=r.next,o=(r.f&xt)!==0||(r.f&Se)!==0;Nt(r,n,o?t:!1),r=i}}}function On(e){Ir(e,!0)}function Ir(e,n){if((e.f&Te)!==0){e.f^=Te,(e.f&oe)===0&&(e.f^=oe),on(e)&&(_e(e,Re),et(e));for(var t=e.first;t!==null;){var r=t.next,i=(t.f&xt)!==0||(t.f&Se)!==0;Ir(t,i?n:!1),t=r}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||n)&&o.in()}}let In=[];function As(){var e=In;In=[],dt(e)}function Jn(e){In.length===0&&queueMicrotask(As),In.push(e)}let Sn=!1,pt=!1,Ln=null,We=!1,bn=!1;function tr(e){bn=e}let Nn=[];let V=null,Ee=!1;function xe(e){V=e}let P=null;function Ue(e){P=e}let re=null;function ks(e){V!==null&&V.f&_t&&(re===null?re=[e]:re.push(e))}let te=null,le=0,de=null;function Os(e){de=e}let Lr=1,Pn=0,ze=!1;function Pr(){return++Lr}function on(e){var _;var n=e.f;if((n&Re)!==0)return!0;if((n&$e)!==0){var t=e.deps,r=(n&fe)!==0;if(t!==null){var i,o,l=(n&An)!==0,f=r&&P!==null&&!ze,a=t.length;if(l||f){var c=e,p=c.parent;for(i=0;i<a;i++)o=t[i],(l||!((_=o==null?void 0:o.reactions)!=null&&_.includes(c)))&&(o.reactions??(o.reactions=[])).push(c);l&&(c.f^=An),f&&p!==null&&(p.f&fe)===0&&(c.f^=fe)}for(i=0;i<a;i++)if(o=t[i],on(o)&&Rr(o),o.wv>e.wv)return!0}(!r||P!==null&&!ze)&&_e(e,oe)}return!1}function Is(e,n){for(var t=n;t!==null;){if((t.f&Cn)!==0)try{t.fn(e);return}catch{t.f^=Cn}t=t.parent}throw Sn=!1,e}function rr(e){return(e.f&qn)===0&&(e.parent===null||(e.parent.f&Cn)===0)}function Yn(e,n,t,r){if(Sn){if(t===null&&(Sn=!1),rr(n))throw e;return}if(t!==null&&(Sn=!0),Is(e,n),rr(n))throw e}function zr(e,n,t=!0){var r=e.reactions;if(r!==null)for(var i=0;i<r.length;i++){var o=r[i];re!=null&&re.includes(e)||((o.f&he)!==0?zr(o,n,!1):n===o&&(t?_e(o,Re):(o.f&oe)!==0&&_e(o,$e),et(o)))}}function Vr(e){var g;var n=te,t=le,r=de,i=V,o=ze,l=re,f=q,a=Ee,c=e.f;te=null,le=0,de=null,ze=(c&fe)!==0&&(Ee||!We||V===null),V=(c&(Se|tn))===0?e:null,re=null,Yt(e.ctx),Ee=!1,Pn++,e.f|=_t;try{var p=(0,e.fn)(),_=e.deps;if(te!==null){var u;if(zn(e,le),_!==null&&le>0)for(_.length=le+te.length,u=0;u<te.length;u++)_[le+u]=te[u];else e.deps=_=te;if(!ze)for(u=le;u<_.length;u++)((g=_[u]).reactions??(g.reactions=[])).push(e)}else _!==null&&le<_.length&&(zn(e,le),_.length=le);if(Un()&&de!==null&&!Ee&&_!==null&&(e.f&(he|$e|Re))===0)for(u=0;u<de.length;u++)zr(de[u],e);return i!==null&&i!==e&&(Pn++,de!==null&&(r===null?r=de:r.push(...de))),p}finally{te=n,le=t,de=r,V=i,ze=o,re=l,Yt(f),Ee=a,e.f^=_t}}function Ls(e,n){let t=n.reactions;if(t!==null){var r=$o.call(t,e);if(r!==-1){var i=t.length-1;i===0?t=n.reactions=null:(t[r]=t[i],t.pop())}}t===null&&(n.f&he)!==0&&(te===null||!te.includes(n))&&(_e(n,$e),(n.f&(fe|An))===0&&(n.f^=An),Er(n),zn(n,0))}function zn(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Ls(e,t[r])}function Qn(e){var n=e.f;if((n&qn)===0){_e(e,oe);var t=P,r=q,i=We;P=e,We=!0;try{(n&Rt)!==0?Cs(e):Cr(e),Nr(e);var o=Vr(e);e.teardown=typeof o=="function"?o:null,e.wv=Lr;var l=e.deps,f;Xt&&cs&&e.f&Re}catch(a){Yn(a,e,t,r||e.ctx)}finally{We=i,P=t}}}function Ps(){try{rs()}catch(e){if(Ln!==null)Yn(e,Ln,null);else throw e}}function zs(){var e=We;try{var n=0;for(We=!0;Nn.length>0;){n++>1e3&&Ps();var t=Nn,r=t.length;Nn=[];for(var i=0;i<r;i++){var o=Bs(t[i]);Vs(o)}mn.clear()}}finally{pt=!1,We=e,Ln=null}}function Vs(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(qn|Te))===0)try{on(r)&&(Qn(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?kr(r):r.fn=null))}catch(i){Yn(i,r,null,r.ctx)}}}function et(e){pt||(pt=!0,queueMicrotask(zs));for(var n=Ln=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(tn|Se))!==0){if((t&oe)===0)return;n.f^=oe}}Nn.push(n)}function Bs(e){for(var n=[],t=e;t!==null;){var r=t.f,i=(r&(Se|tn))!==0,o=i&&(r&oe)!==0;if(!o&&(r&Te)===0){if((r&pr)!==0)n.push(t);else if(i)t.f^=oe;else try{on(t)&&Qn(t)}catch(a){Yn(a,t,null,t.ctx)}var l=t.first;if(l!==null){t=l;continue}}var f=t.parent;for(t=t.next;t===null&&f!==null;)t=f.next,f=f.parent}return n}function O(e){var n=e.f,t=(n&he)!==0;if(V!==null&&!Ee){if(!(re!=null&&re.includes(e))){var r=V.deps;e.rv<Pn&&(e.rv=Pn,te===null&&r!==null&&r[le]===e?le++:te===null?te=[e]:(!ze||!te.includes(e))&&te.push(e))}}else if(t&&e.deps===null&&e.effects===null){var i=e,o=i.parent;o!==null&&(o.f&fe)===0&&(i.f^=fe)}return t&&(i=e,on(i)&&Rr(i)),bn&&mn.has(e)?mn.get(e):e.v}function pn(e){var n=Ee;try{return Ee=!0,e()}finally{Ee=n}}const js=-7169;function _e(e,n){e.f=e.f&js|n}function gt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(je in e)vt(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&je in t&&vt(t)}}}function vt(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{vt(e[r],n)}catch{}const t=Dt(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=mr(t);for(let i in r){const o=r[i].get;if(o)try{o.call(e)}catch{}}}}}function qs(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Us=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function $s(e){return Us.includes(e)}const Hs={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Ks(e){return e=e.toLowerCase(),Hs[e]??e}const Zs=["touchstart","touchmove"];function Gs(e){return Zs.includes(e)}function Ws(e,n){if(n){const t=document.body;e.autofocus=!0,Jn(()=>{document.activeElement===t&&e.focus()})}}function Xs(e){var n=V,t=P;xe(null),Ue(null);try{return e()}finally{xe(n),Ue(t)}}const Br=new Set,ht=new Set;function Js(e,n,t,r={}){function i(o){if(r.capture||cn.call(n,o),!o.cancelBubble)return Xs(()=>t==null?void 0:t.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Jn(()=>{n.addEventListener(e,i,r)}):n.addEventListener(e,i,r),i}function jr(e){for(var n=0;n<e.length;n++)Br.add(e[n]);for(var t of ht)t(e)}function cn(e){var K;var n=this,t=n.ownerDocument,r=e.type,i=((K=e.composedPath)==null?void 0:K.call(e))||[],o=i[0]||e.target,l=0,f=e.__root;if(f){var a=i.indexOf(f);if(a!==-1&&(n===document||n===window)){e.__root=n;return}var c=i.indexOf(n);if(c===-1)return;a<=c&&(l=a)}if(o=i[l]||e.target,o!==n){Ho(e,"currentTarget",{configurable:!0,get(){return o||t}});var p=V,_=P;xe(null),Ue(null);try{for(var u,g=[];o!==null;){var v=o.assignedSlot||o.parentNode||o.host||null;try{var F=o["__"+r];if(F!=null&&(!o.disabled||e.target===o))if(Bn(F)){var[A,...z]=F;A.apply(o,[e,...z])}else F.call(o,e)}catch(M){u?g.push(M):u=M}if(e.cancelBubble||v===n||v===null)break;o=v}if(u){for(let M of g)queueMicrotask(()=>{throw M});throw u}}finally{e.__root=n,delete e.currentTarget,xe(p),Ue(_)}}}function qr(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function gn(e,n){var t=P;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function me(e,n){var t=(n&vs)!==0,r=(n&hs)!==0,i,o=!e.startsWith("<!>");return()=>{i===void 0&&(i=qr(o?e:"<!>"+e),t||(i=Pe(i)));var l=r||Mr?document.importNode(i,!0):i.cloneNode(!0);if(t){var f=Pe(l),a=l.lastChild;gn(f,a)}else gn(l,l);return l}}function Ys(e=""){{var n=Hn(e+"");return gn(n,n),n}}function Ct(){var e=document.createDocumentFragment(),n=document.createComment(""),t=Hn();return e.append(n,t),gn(n,t),e}function ee(e,n){e!==null&&e.before(n)}function qe(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function Qs(e,n){return ei(e,n)}const Qe=new Map;function ei(e,{target:n,anchor:t,props:r={},events:i,context:o,intro:l=!0}){Ds();var f=new Set,a=_=>{for(var u=0;u<_.length;u++){var g=_[u];if(!f.has(g)){f.add(g);var v=Gs(g);n.addEventListener(g,cn,{passive:v});var F=Qe.get(g);F===void 0?(document.addEventListener(g,cn,{passive:v}),Qe.set(g,1)):Qe.set(g,F+1)}}};a(Et(Br)),ht.add(a);var c=void 0,p=Fs(()=>{var _=t??n.appendChild(Hn());return nn(()=>{if(o){hn({});var u=q;u.c=o}i&&(r.$$events=i),c=e(_,r)||{},o&&yn()}),()=>{var v;for(var u of f){n.removeEventListener(u,cn);var g=Qe.get(u);--g===0?(document.removeEventListener(u,cn),Qe.delete(u)):Qe.set(u,g)}ht.delete(a),_!==t&&((v=_.parentNode)==null||v.removeChild(_))}});return ni.set(c,p),c}let ni=new WeakMap;function yt(e,n,[t,r]=[0,0]){var i=e,o=null,l=null,f=se,a=t>0?xt:0,c=!1;const p=(u,g=!0)=>{c=!0,_(g,u)},_=(u,g)=>{f!==(f=u)&&(f?(o?On(o):g&&(o=nn(()=>g(i))),l&&kn(l,()=>{l=null})):(l?On(l):g&&(l=nn(()=>g(i,[t+1,r]))),o&&kn(o,()=>{o=null})))};Xn(()=>{c=!1,n(p),c||_(null,null)},a)}function un(e,n){return n}function ti(e,n,t,r){for(var i=[],o=n.length,l=0;l<o;l++)Nt(n[l].e,i,!0);var f=o>0&&i.length===0&&t!==null;if(f){var a=t.parentNode;Rs(a),a.append(t),r.clear(),Le(e,n[0].prev,n[o-1].next)}Or(i,()=>{for(var c=0;c<o;c++){var p=n[c];f||(r.delete(p.k),Le(e,p.prev,p.next)),Fe(p.e,!f)}})}function dn(e,n,t,r,i,o=null){var l=e,f={flags:n,items:new Map,first:null},a=(n&yr)!==0;if(a){var c=e;l=c.appendChild(Hn())}var p=null,_=!1,u=St(()=>{var g=t();return Bn(g)?g:g==null?[]:Et(g)});Xn(()=>{var g=O(u),v=g.length;_&&v===0||(_=v===0,ri(g,f,l,i,n,r,t),o!==null&&(v===0?p?On(p):p=nn(()=>o(l)):p!==null&&kn(p,()=>{p=null})),O(u))})}function ri(e,n,t,r,i,o,l){var ue,He,Xe,Ae;var f=(i&us)!==0,a=(i&(Tt|Ft))!==0,c=e.length,p=n.items,_=n.first,u=_,g,v=null,F,A=[],z=[],K,M,E,x;if(f)for(x=0;x<c;x+=1)K=e[x],M=o(K,x),E=p.get(M),E!==void 0&&((ue=E.a)==null||ue.measure(),(F??(F=new Set)).add(E));for(x=0;x<c;x+=1){if(K=e[x],M=o(K,x),E=p.get(M),E===void 0){var X=u?u.e.nodes_start:t;v=si(X,n,v,v===null?n.first:v.next,K,M,x,r,i,l),p.set(M,v),A=[],z=[],u=v.next;continue}if(a&&oi(E,K,x,i),(E.e.f&Te)!==0&&(On(E.e),f&&((He=E.a)==null||He.unfix(),(F??(F=new Set)).delete(E))),E!==u){if(g!==void 0&&g.has(E)){if(A.length<z.length){var S=z[0],U;v=S.prev;var ie=A[0],Ne=A[A.length-1];for(U=0;U<A.length;U+=1)or(A[U],S,t);for(U=0;U<z.length;U+=1)g.delete(z[U]);Le(n,ie.prev,Ne.next),Le(n,v,ie),Le(n,Ne,S),u=S,v=Ne,x-=1,A=[],z=[]}else g.delete(E),or(E,u,t),Le(n,E.prev,E.next),Le(n,E,v===null?n.first:v.next),Le(n,v,E),v=E;continue}for(A=[],z=[];u!==null&&u.k!==M;)(u.e.f&Te)===0&&(g??(g=new Set)).add(u),z.push(u),u=u.next;if(u===null)continue;E=u}A.push(E),v=E,u=E.next}if(u!==null||g!==void 0){for(var ne=g===void 0?[]:Et(g);u!==null;)(u.e.f&Te)===0&&ne.push(u),u=u.next;var pe=ne.length;if(pe>0){var Ce=(i&yr)!==0&&c===0?t:null;if(f){for(x=0;x<pe;x+=1)(Xe=ne[x].a)==null||Xe.measure();for(x=0;x<pe;x+=1)(Ae=ne[x].a)==null||Ae.fix()}ti(n,ne,Ce,p)}}f&&Jn(()=>{var ye;if(F!==void 0)for(E of F)(ye=E.a)==null||ye.apply()}),P.first=n.first&&n.first.e,P.last=v&&v.e}function oi(e,n,t,r){(r&Tt)!==0&&mt(e.v,n),(r&Ft)!==0?mt(e.i,t):e.i=t}function si(e,n,t,r,i,o,l,f,a,c){var p=(a&Tt)!==0,_=(a&ds)===0,u=p?_?$n(i):en(i):i,g=(a&Ft)===0?l:en(l),v={i:g,v:u,k:o,a:null,e:null,prev:t,next:r};try{return v.e=nn(()=>f(e,u,g,c),Es),v.e.prev=t&&t.e,v.e.next=r&&r.e,t===null?n.first=v:(t.next=v,t.e.next=v.e),r!==null&&(r.prev=v,r.e.prev=v.e),v}finally{}}function or(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,i=n?n.e.nodes_start:t,o=e.e.nodes_start;o!==r;){var l=Kn(o);i.before(o),o=l}}function Le(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function ii(e,n,t=!1,r=!1,i=!1){var o=e,l="";De(()=>{var f=P;if(l!==(l=n()??"")&&(f.nodes_start!==null&&(Ar(f.nodes_start,f.nodes_end),f.nodes_start=f.nodes_end=null),l!=="")){var a=l+"";t?a=`<svg>${a}</svg>`:r&&(a=`<math>${a}</math>`);var c=qr(a);if((t||r)&&(c=Pe(c)),gn(Pe(c),c.lastChild),t||r)for(;Pe(c);)o.before(Pe(c));else o.before(c)}})}function ai(e,n,t,r,i){var f;var o=(f=n.$$slots)==null?void 0:f[t],l=!1;o===!0&&(o=n.children,l=!0),o===void 0?i!==null&&i(e):o(e,l?()=>r:r)}function li(e,n){var t=void 0,r;Xn(()=>{t!==(t=n())&&(r&&(Fe(r),r=null),t&&(r=nn(()=>{Gn(()=>t(e))})))})}function Ur(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=Ur(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function ci(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=Ur(e))&&(r&&(r+=" "),r+=n);return r}function $r(e){return typeof e=="object"?ci(e):e??""}const sr=[...` 	
\r\f \v\uFEFF`];function fi(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var i in t)if(t[i])r=r?r+" "+i:i;else if(r.length)for(var o=i.length,l=0;(l=r.indexOf(i,l))>=0;){var f=l+o;(l===0||sr.includes(r[l-1]))&&(f===r.length||sr.includes(r[f]))?r=(l===0?"":r.substring(0,l))+r.substring(f+1):l=f}}return r===""?null:r}function ir(e,n=!1){var t=n?" !important;":";",r="";for(var i in e){var o=e[i];o!=null&&o!==""&&(r+=" "+i+": "+o+t)}return r}function ct(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ui(e,n){if(n){var t="",r,i;if(Array.isArray(n)?(r=n[0],i=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,l=0,f=!1,a=[];r&&a.push(...Object.keys(r).map(ct)),i&&a.push(...Object.keys(i).map(ct));var c=0,p=-1;const F=e.length;for(var _=0;_<F;_++){var u=e[_];if(f?u==="/"&&e[_-1]==="*"&&(f=!1):o?o===u&&(o=!1):u==="/"&&e[_+1]==="*"?f=!0:u==='"'||u==="'"?o=u:u==="("?l++:u===")"&&l--,!f&&o===!1&&l===0){if(u===":"&&p===-1)p=_;else if(u===";"||_===F-1){if(p!==-1){var g=ct(e.substring(c,p).trim());if(!a.includes(g)){u!==";"&&_++;var v=e.substring(c,_).trim();t+=" "+v+";"}}c=_+1,p=-1}}}}return r&&(t+=ir(r)),i&&(t+=ir(i,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function At(e,n,t,r,i,o){var l=e.__className;if(l!==t||l===void 0){var f=fi(t,r,o);f==null?e.removeAttribute("class"):n?e.className=f:e.setAttribute("class",f),e.__className=t}else if(o&&i!==o)for(var a in o){var c=!!o[a];(i==null||c!==!!i[a])&&e.classList.toggle(a,c)}return o}function ft(e,n={},t,r){for(var i in t){var o=t[i];n[i]!==o&&(t[i]==null?e.style.removeProperty(i):e.style.setProperty(i,o,r))}}function di(e,n,t,r){var i=e.__style;if(i!==n){var o=ui(n,r);o==null?e.removeAttribute("style"):e.style.cssText=o,e.__style=n}else r&&(Array.isArray(r)?(ft(e,t==null?void 0:t[0],r[0]),ft(e,t==null?void 0:t[1],r[1],"important")):ft(e,t,r));return r}const fn=Symbol("class"),ln=Symbol("style"),Hr=Symbol("is custom element"),Kr=Symbol("is html");function _i(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function bt(e,n,t,r){var i=Zr(e);i[n]!==(i[n]=t)&&(n==="loading"&&(e[Yo]=t),t==null?e.removeAttribute(n):typeof t!="string"&&Gr(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function mi(e,n,t,r,i=!1){var o=Zr(e),l=o[Hr],f=!o[Kr],a=n||{},c=e.tagName==="OPTION";for(var p in n)p in t||(t[p]=null);t.class?t.class=$r(t.class):t.class=null,t[ln]&&(t.style??(t.style=null));var _=Gr(e);for(const M in t){let E=t[M];if(c&&M==="value"&&E==null){e.value=e.__value="",a[M]=E;continue}if(M==="class"){var u=e.namespaceURI==="http://www.w3.org/1999/xhtml";At(e,u,E,r,n==null?void 0:n[fn],t[fn]),a[M]=E,a[fn]=t[fn];continue}if(M==="style"){di(e,E,n==null?void 0:n[ln],t[ln]),a[M]=E,a[ln]=t[ln];continue}var g=a[M];if(E!==g){a[M]=E;var v=M[0]+M[1];if(v!=="$$")if(v==="on"){const x={},X="$$"+M;let S=M.slice(2);var F=$s(S);if(qs(S)&&(S=S.slice(0,-7),x.capture=!0),!F&&g){if(E!=null)continue;e.removeEventListener(S,a[X],x),a[X]=null}if(E!=null)if(F)e[`__${S}`]=E,jr([S]);else{let U=function(ie){a[M].call(this,ie)};var K=U;a[X]=Js(S,e,U,x)}else F&&(e[`__${S}`]=void 0)}else if(M==="style")bt(e,M,E);else if(M==="autofocus")Ws(e,!!E);else if(!l&&(M==="__value"||M==="value"&&E!=null))e.value=e.__value=E;else if(M==="selected"&&c)_i(e,E);else{var A=M;f||(A=Ks(A));var z=A==="defaultValue"||A==="defaultChecked";if(E==null&&!l&&!z)if(o[M]=null,A==="value"||A==="checked"){let x=e;const X=n===void 0;if(A==="value"){let S=x.defaultValue;x.removeAttribute(A),x.defaultValue=S,x.value=x.__value=X?S:null}else{let S=x.defaultChecked;x.removeAttribute(A),x.defaultChecked=S,x.checked=X?S:!1}}else e.removeAttribute(M);else z||_.includes(A)&&(l||typeof E!="string")?e[A]=E:typeof E!="function"&&bt(e,A,E)}}}for(let M of Object.getOwnPropertySymbols(t))M.description===bs&&li(e,()=>t[M]);return a}function Zr(e){return e.__attributes??(e.__attributes={[Hr]:e.nodeName.includes("-"),[Kr]:e.namespaceURI===ys})}var ar=new Map;function Gr(e){var n=ar.get(e.nodeName);if(n)return n;ar.set(e.nodeName,n=[]);for(var t,r=e,i=Element.prototype;i!==r;){t=mr(r);for(var o in t)t[o].set&&n.push(o);r=Dt(r)}return n}function lr(e,n){return e===n||(e==null?void 0:e[je])===n}function pi(e={},n,t,r){return Gn(()=>{var i,o;return Wn(()=>{i=o,o=[],pn(()=>{e!==t(...o)&&(n(e,...o),i&&lr(t(...i),e)&&n(null,...i))})}),()=>{Jn(()=>{o&&lr(t(...o),e)&&n(null,...o)})}}),e}function kt(e=!1){const n=q,t=n.l.u;if(!t)return;let r=()=>gt(n.s);if(e){let i=0,o={};const l=_n(()=>{let f=!1;const a=n.s;for(const c in a)a[c]!==o[c]&&(o[c]=a[c],f=!0);return f&&i++,i});r=()=>O(l)}t.b.length&&Ts(()=>{cr(n,r),dt(t.b)}),nr(()=>{const i=pn(()=>t.m.map(Go));return()=>{for(const o of i)typeof o=="function"&&o()}}),t.a.length&&nr(()=>{cr(n,r),dt(t.a)})}function cr(e,n){if(e.l.s)for(const t of e.l.s)O(t);n()}let Fn=!1;function gi(e){var n=Fn;try{return Fn=!1,[e(),Fn]}finally{Fn=n}}const vi={get(e,n){if(!e.exclude.includes(n))return O(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=Ve({get[n](){return e.props[n]}},n,br)),e.special[n](t),Qt(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),Qt(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function Vn(e,n){return new Proxy({props:e,exclude:n,special:{},version:en(0)},vi)}const hi={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(an(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let i=e.props[r];an(i)&&(i=i());const o=Be(i,n);if(o&&o.set)return o.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(an(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const i=Be(r,n);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,n){if(n===je||n===vr)return!1;for(let t of e.props)if(an(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(an(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function yi(...e){return new Proxy({props:e},hi)}function fr(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function Ve(e,n,t,r){var X;var i=(t&_s)!==0,o=!vn||(t&ms)!==0,l=(t&ps)!==0,f=(t&gs)!==0,a=!1,c;l?[c,a]=gi(()=>e[n]):c=e[n];var p=je in e||vr in e,_=l&&(((X=Be(e,n))==null?void 0:X.set)??(p&&n in e&&(S=>e[n]=S)))||void 0,u=r,g=!0,v=!1,F=()=>(v=!0,g&&(g=!1,f?u=pn(r):u=r),u);c===void 0&&r!==void 0&&(_&&o&&ss(),c=F(),_&&_(c));var A;if(o)A=()=>{var S=e[n];return S===void 0?F():(g=!0,v=!1,S)};else{var z=(i?_n:St)(()=>e[n]);z.f|=Xo,A=()=>{var S=O(z);return S!==void 0&&(u=void 0),S===void 0?u:S}}if((t&br)===0)return A;if(_){var K=e.$$legacy;return function(S,U){return arguments.length>0?((!o||!U||K||a)&&_(U?A():S),S):A()}}var M=!1,E=$n(c),x=_n(()=>{var S=A(),U=O(E);return M?(M=!1,U):E.v=S});return l&&O(x),i||(x.equals=Mt),function(S,U){if(arguments.length>0){const ie=U?O(x):o&&l?Ge(S):S;if(!x.equals(ie)){if(M=!0,ce(E,ie),v&&u!==void 0&&(u=ie),fr(x))return S;pn(()=>O(x))}return S}return fr(x)?x.v:O(x)}}function bi(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function wi(){const e=q;return e===null&&wr(),(n,t,r)=>{var o;const i=(o=e.s.$$events)==null?void 0:o[n];if(i){const l=Bn(i)?i.slice():[i],f=bi(n,t,r);for(const a of l)a.call(e.x,f);return!f.defaultPrevented}return!0}}function Ei(e){q===null&&wr(),q.l===null&&os(),Di(q).a.push(e)}function Di(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Ri="5";var _r;typeof window<"u"&&((_r=window.__svelte??(window.__svelte={})).v??(_r.v=new Set)).add(Ri);fs();const xi={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:"wrong",FiniteDifferences:94.97188286349878,ForwardDiff:2.1903677578413916,MooncakeFwd:28.450476086242748,MooncakeRvs:7.474674995779166,ReverseDiff:64.85073121533031,ReverseDiffCompiled:8.781255286753511,Zygote:739.4185604752366},Mi={__category__:"Distributions",EnzymeFwd:3.4056024626016494,EnzymeRvs:2.438477891651059,FiniteDifferences:39.21318972811049,ForwardDiff:2.02982026342655,MooncakeFwd:4.2135079522203025,MooncakeRvs:3.3254567802345014,ReverseDiff:74.18691588785047,ReverseDiffCompiled:5.6918301207582545,Zygote:3493.295675123446},Ti={__category__:"Base Julia features",EnzymeFwd:3.5501799322181427,EnzymeRvs:1.838333164728261,FiniteDifferences:80.89584961213974,ForwardDiff:2.3768841803740206,MooncakeFwd:8.390325080928282,MooncakeRvs:4.7549645992636655,ReverseDiff:57.873592720852855,ReverseDiffCompiled:"wrong",Zygote:6654.013422361518},Fi={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:"error",FiniteDifferences:62.12528772818954,ForwardDiff:.9583404579243818,MooncakeFwd:422.0644382579034,MooncakeRvs:10.256507132062428,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Si={__category__:"DynamicPPL demo models",EnzymeFwd:5.517440767111332,EnzymeRvs:3.959087243325958,FiniteDifferences:75.0308170766186,ForwardDiff:2.4723046319977264,MooncakeFwd:8.293583745945023,MooncakeRvs:5.895973245973246,ReverseDiff:144.4264318686955,ReverseDiffCompiled:13.049790576902547,Zygote:"error"},Ni={__category__:"DynamicPPL demo models",EnzymeFwd:4.373485784919653,EnzymeRvs:3.16052279235066,FiniteDifferences:67.70268597173023,ForwardDiff:2.0986710741372545,MooncakeFwd:7.34706811499113,MooncakeRvs:5.020009263239268,ReverseDiff:103.59638899503248,ReverseDiffCompiled:9.86708731871912,Zygote:9242.255878961529},Ci={__category__:"DynamicPPL demo models",EnzymeFwd:4.861982006543075,EnzymeRvs:5.848512271513658,FiniteDifferences:83.07635009310988,ForwardDiff:1.7460961311492418,MooncakeFwd:12.414867681176517,MooncakeRvs:4.9870628352096515,ReverseDiff:71.18623941625938,ReverseDiffCompiled:6.4835308260346896,Zygote:"error"},Ai={__category__:"DynamicPPL demo models",EnzymeFwd:4.388683290217496,EnzymeRvs:5.027205246468723,FiniteDifferences:78.94839067702553,ForwardDiff:1.4441097034665182,MooncakeFwd:14.884390261040648,MooncakeRvs:5.317320607119135,ReverseDiff:55.93731426080754,ReverseDiffCompiled:4.807160404748406,Zygote:"error"},ki={__category__:"DynamicPPL demo models",EnzymeFwd:4.777155336118497,EnzymeRvs:4.831918180274996,FiniteDifferences:86.08258082305095,ForwardDiff:1.5322919764589682,MooncakeFwd:15.327560023595266,MooncakeRvs:6.90875116371858,ReverseDiff:67.73605773001803,ReverseDiffCompiled:5.9763052063331035,Zygote:3955.6714124639284},Oi={__category__:"DynamicPPL demo models",EnzymeFwd:4.732713846588701,EnzymeRvs:4.542636503862833,FiniteDifferences:81.9645390070922,ForwardDiff:1.5720632540339543,MooncakeFwd:14.974294966070644,MooncakeRvs:6.736359242164324,ReverseDiff:64.23572136018487,ReverseDiffCompiled:5.617647881415187,Zygote:3209.6648814078044},Ii={__category__:"DynamicPPL demo models",EnzymeFwd:5.520635068309772,EnzymeRvs:3.9356593189422098,FiniteDifferences:80.65857024565277,ForwardDiff:1.9306108755065499,MooncakeFwd:8.259817262068154,MooncakeRvs:5.88860951854666,ReverseDiff:143.92130763496965,ReverseDiffCompiled:13.693876854852464,Zygote:8344.539001180801},Li={__category__:"DynamicPPL demo models",EnzymeFwd:5.285262084875798,EnzymeRvs:6.705187436320838,FiniteDifferences:84.15189193337939,ForwardDiff:1.561714027321624,MooncakeFwd:12.87138217641949,MooncakeRvs:5.612251249232927,ReverseDiff:71.257303946694,ReverseDiffCompiled:6.377280317514098,Zygote:"error"},Pi={__category__:"Distributions",EnzymeFwd:2.790448334908079,EnzymeRvs:2.7351156314691925,FiniteDifferences:29.040177904529095,ForwardDiff:1.2138388862118814,MooncakeFwd:3.7849616238439863,MooncakeRvs:5.942680339569232,ReverseDiff:50.39833045382233,ReverseDiffCompiled:4.510865350312544,Zygote:"error"},zi={__category__:"DynamicPPL demo models",EnzymeFwd:5.5396988850223705,EnzymeRvs:6.354445826513912,FiniteDifferences:84.9485124303763,ForwardDiff:1.5199577498979902,MooncakeFwd:14.022632088568463,MooncakeRvs:6.117856327423527,ReverseDiff:47.04671836580292,ReverseDiffCompiled:5.909780015902465,Zygote:"error"},Vi={__category__:"DynamicPPL demo models",EnzymeFwd:5.080343766173627,EnzymeRvs:6.359660788614657,FiniteDifferences:82.70249872514023,ForwardDiff:1.8772388833821259,MooncakeFwd:12.680382162976414,MooncakeRvs:5.774351148953632,ReverseDiff:68.92997103424774,ReverseDiffCompiled:6.485193672165576,Zygote:"error"},Bi={__category__:"DynamicPPL demo models",EnzymeFwd:5.452057987227893,EnzymeRvs:4.990913048509663,FiniteDifferences:80.18821948025092,ForwardDiff:1.5275773085489122,MooncakeFwd:12.388359765557665,MooncakeRvs:5.464983461666195,ReverseDiff:68.42187766229341,ReverseDiffCompiled:6.90098589822195,Zygote:"error"},ji={__category__:"DynamicPPL demo models",EnzymeFwd:5.112380628717078,EnzymeRvs:6.220696097425961,FiniteDifferences:78.6044015835194,ForwardDiff:1.4524188881651847,MooncakeFwd:14.955004814035588,MooncakeRvs:6.581332513640206,ReverseDiff:55.860409145607704,ReverseDiffCompiled:5.193545244184631,Zygote:"error"},qi={__category__:"DynamicPPL demo models",EnzymeFwd:5.019891088469426,EnzymeRvs:7.326669906273722,FiniteDifferences:79.43927433873424,ForwardDiff:1.3595876541336709,MooncakeFwd:13.572688477951635,MooncakeRvs:6.127886894865,ReverseDiff:59.1812010805569,ReverseDiffCompiled:5.3979907338502535,Zygote:"error"},Ui={__category__:"Core Turing syntax",EnzymeFwd:3.8202301600865947,EnzymeRvs:2.5656156829551775,FiniteDifferences:113.61156707295777,ForwardDiff:1.549153261095122,MooncakeFwd:14.62081022020508,MooncakeRvs:4.2178444429083815,ReverseDiff:54.65008243456756,ReverseDiffCompiled:4.660300003480319,Zygote:"error"},$i={__category__:"Core Turing syntax",EnzymeFwd:9.595122577221417,EnzymeRvs:5.51897503256268,FiniteDifferences:113.94116169520476,ForwardDiff:3.6988577441760087,MooncakeFwd:8.178503999981237,MooncakeRvs:13.696528186225263,ReverseDiff:391.8483647175421,ReverseDiffCompiled:34.2101218698416,Zygote:"error"},Hi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:1.4932864539930149,EnzymeRvs:2.18789368003154,FiniteDifferences:28.29894609568152,ForwardDiff:1.579422106711512,MooncakeFwd:3.8988423187426062,MooncakeRvs:9.316927260367097,ReverseDiff:125.95631534998547,ReverseDiffCompiled:20.026226457907875,Zygote:15.855562747487054},Ki={__category__:"DynamicPPL arXiV paper",EnzymeFwd:7.2930818920608464,EnzymeRvs:3.125661751951431,FiniteDifferences:181.9577114427861,ForwardDiff:5.740266072299226,MooncakeFwd:31.5944011564362,MooncakeRvs:4.227724751386737,ReverseDiff:90.46506091583812,ReverseDiffCompiled:9.901417128773875,Zygote:1985.5801805674976},Zi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:12244.239716444363,EnzymeRvs:2.246125514206448,FiniteDifferences:55989.000902519394,ForwardDiff:1042.3787927152628,MooncakeFwd:8089.767892899808,MooncakeRvs:4.228247643187665,ReverseDiff:41.34493916672486,ReverseDiffCompiled:5.225872598024065,Zygote:3.21421791850185},Gi={__category__:"Distributions",EnzymeFwd:4.338150689679074,EnzymeRvs:20.21283574912413,FiniteDifferences:183.3667403502806,ForwardDiff:2.347244012132622,MooncakeFwd:20.29482972991642,MooncakeRvs:5.207320090484942,ReverseDiff:67.4392225475081,ReverseDiffCompiled:8.136866814084028,Zygote:"error"},Wi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:35.72653148641964,EnzymeRvs:5.71206478172687,FiniteDifferences:"NaN",ForwardDiff:28.705055580934975,MooncakeFwd:192.12356194417757,MooncakeRvs:4.560203416974919,ReverseDiff:72.79782163725292,ReverseDiffCompiled:10.859052009514235,Zygote:"error"},Xi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:214.82976591421493,EnzymeRvs:2.8447638296279663,FiniteDifferences:3602.6851811246784,ForwardDiff:167.6838730243454,MooncakeFwd:358.4593655442333,MooncakeRvs:9.980887844425684,ReverseDiff:83.2323231644191,ReverseDiffCompiled:11.60220691866329,Zygote:"error"},Ji={__category__:"DynamicPPL arXiV paper",EnzymeFwd:142.06804930657364,EnzymeRvs:3.719540325085413,FiniteDifferences:1088.1543337065254,ForwardDiff:64.68843610467417,MooncakeFwd:182.89331347495494,MooncakeRvs:5.267832129360434,ReverseDiff:3463.911558546616,ReverseDiffCompiled:324.30194577918274,Zygote:191.44486186335806},Yi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:291.63812794806455,EnzymeRvs:.9762181687454649,FiniteDifferences:2840.942120324317,ForwardDiff:142.2152455628679,MooncakeFwd:417.04999241186607,MooncakeRvs:4.550420560872481,ReverseDiff:144.0477848953575,ReverseDiffCompiled:19.722091478282568,Zygote:5325.197233756051},Qi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:221.43248204098882,EnzymeRvs:5.1094499520307,FiniteDifferences:7003.206917081619,ForwardDiff:109.0669437996005,MooncakeFwd:2749.3535611196885,MooncakeRvs:3.637576296535834,ReverseDiff:108.86450551525122,ReverseDiffCompiled:11.49438931400914,Zygote:"error"},ea={__category__:"Core Turing syntax",EnzymeFwd:3.706969102682701,EnzymeRvs:3.1644176500769627,FiniteDifferences:59.22508962998039,ForwardDiff:1.5694999769149083,MooncakeFwd:6.736096429522036,MooncakeRvs:4.322015105464317,ReverseDiff:68.8833019674936,ReverseDiffCompiled:6.870643911062758,Zygote:4951.22174282317},na={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:20.348018066117376,FiniteDifferences:250.71552116522534,ForwardDiff:3.5922594350582537,MooncakeFwd:45.50817145130279,MooncakeRvs:21.89750072466102,ReverseDiff:73.53934473948058,ReverseDiffCompiled:25.416395942451764,Zygote:"error"},ta={__category__:"Core Turing syntax",EnzymeFwd:3.3899581307401405,EnzymeRvs:2.746014804613531,FiniteDifferences:70.43663859769721,ForwardDiff:1.293452566096423,MooncakeFwd:11.083120204603581,MooncakeRvs:5.2663290156354785,ReverseDiff:48.86644373165904,ReverseDiffCompiled:4.058713182094011,Zygote:"error"},ra={__category__:"Base Julia features",EnzymeFwd:5.5150369679611,EnzymeRvs:19.148092326971604,FiniteDifferences:13.792896174863387,ForwardDiff:.9789755075500326,MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},oa={__category__:"Effect of model size",EnzymeFwd:6.726686186159862,EnzymeRvs:2.633686530076422,FiniteDifferences:174.85546247221745,ForwardDiff:2.7290603488117537,MooncakeFwd:28.025705404112866,MooncakeRvs:3.832484185330826,ReverseDiff:52.13128310268238,ReverseDiffCompiled:4.625777117537953,Zygote:"error"},sa={__category__:"Distributions",EnzymeFwd:"error",EnzymeRvs:4.3452240197182395,FiniteDifferences:43.12534371348045,ForwardDiff:1.023089567405702,MooncakeFwd:14.05929003593795,MooncakeRvs:9.324980090257498,ReverseDiff:20.30806533086378,ReverseDiffCompiled:1.3857023908647554,Zygote:1060.8678203613035},ia={__category__:"Effect of model size",EnzymeFwd:25.76466973886329,EnzymeRvs:4.6765435501653805,FiniteDifferences:663.691149682076,ForwardDiff:12.502158079309414,MooncakeFwd:128.43252583432155,MooncakeRvs:3.970898004434589,ReverseDiff:60.24327404593334,ReverseDiffCompiled:4.356765957446808,Zygote:"error"},aa={__category__:"Effect of model size",EnzymeFwd:52.58146441372248,EnzymeRvs:4.263523404255319,FiniteDifferences:1322.1210940703684,ForwardDiff:18.955078125,MooncakeFwd:260.55327799424026,MooncakeRvs:3.807790440551114,ReverseDiff:51.37659249193137,ReverseDiffCompiled:4.320848550780946,Zygote:"error"},la={__category__:"Effect of model size",EnzymeFwd:246.86957091262937,EnzymeRvs:4.4897183473336115,FiniteDifferences:6531.629292274858,ForwardDiff:75.07027632561613,MooncakeFwd:1228.615011244378,MooncakeRvs:3.7379026835968263,ReverseDiff:48.04495062242234,ReverseDiffCompiled:4.382486026084642,Zygote:"error"},ca={__category__:"Distributions",EnzymeFwd:3.0428262196515625,EnzymeRvs:3.117019565800053,FiniteDifferences:31.651886952106956,ForwardDiff:1.949103684352761,MooncakeFwd:3.6391240190704592,MooncakeRvs:3.8115638809588988,ReverseDiff:72.30109640575486,ReverseDiffCompiled:6.125516318204998,Zygote:"error"},fa={__category__:"Distributions",EnzymeFwd:1.9146460534057603,EnzymeRvs:7.149121301572046,FiniteDifferences:20.087615838247682,ForwardDiff:1.1943719783106141,MooncakeFwd:2.932683280130905,MooncakeRvs:7.077237851662405,ReverseDiff:41.02103642893792,ReverseDiffCompiled:3.659385493078376,Zygote:"error"},ua={__category__:"Core Turing syntax",EnzymeFwd:10.109899762642993,EnzymeRvs:4.9573236779211785,FiniteDifferences:124.69805747645688,ForwardDiff:3.6762791480994284,MooncakeFwd:8.532213616572179,MooncakeRvs:12.856881878788332,ReverseDiff:450.40419104431953,ReverseDiffCompiled:37.4060799245944,Zygote:"error"},da={__category__:"Core Turing syntax",EnzymeFwd:12.655400455248909,EnzymeRvs:5.622957044065135,FiniteDifferences:153.48817555571335,ForwardDiff:3.6892941797905046,MooncakeFwd:9.73618461617511,MooncakeRvs:11.442830236043845,ReverseDiff:311.75065034566313,ReverseDiffCompiled:25.39542730445431,Zygote:23794.52865164495},_a={__category__:"Core Turing syntax",EnzymeFwd:3.7223315708681564,EnzymeRvs:4.33729360626266,FiniteDifferences:77.00788160385477,ForwardDiff:1.7667218316340625,MooncakeFwd:10.292662472781233,MooncakeRvs:4.775332313445521,ReverseDiff:65.44859813084112,ReverseDiffCompiled:5.354637045136632,Zygote:"error"},ma={__category__:"Core Turing syntax",EnzymeFwd:10.561259864651172,EnzymeRvs:5.6681369118013825,FiniteDifferences:150.02802250291901,ForwardDiff:3.6372555506362367,MooncakeFwd:9.154232338811312,MooncakeRvs:11.61101178752159,ReverseDiff:302.4141177703635,ReverseDiffCompiled:25.14963054187192,Zygote:39791.6145354841},pa={__category__:"Distributions",EnzymeFwd:"error",EnzymeRvs:"error",FiniteDifferences:27.119183256763655,ForwardDiff:"NaN",MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:"NaN",ReverseDiffCompiled:5.148468578904874,Zygote:3561.8262845514673},ga={__category__:"Distributions",EnzymeFwd:12.025600131987789,EnzymeRvs:4.653556635237693,FiniteDifferences:154.6559311445825,ForwardDiff:3.3383193761425036,MooncakeFwd:9.17965161410334,MooncakeRvs:10.274207640148553,ReverseDiff:174.6072864099159,ReverseDiffCompiled:15.126427775659812,Zygote:17858.424562279357},va={__category__:"External libraries",EnzymeFwd:"wrong",EnzymeRvs:80.33841888749778,FiniteDifferences:62.33515540464908,ForwardDiff:5.502004677581022,MooncakeFwd:"error",MooncakeRvs:51.86419797622698,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ha={__category__:"PosteriorDB",EnzymeFwd:6.689779524867544,EnzymeRvs:4.37427258805513,FiniteDifferences:167.83546914623838,ForwardDiff:3.8790333748788255,MooncakeFwd:28.131857653669336,MooncakeRvs:4.799169640406259,ReverseDiff:126.95240392900223,ReverseDiffCompiled:9.148046835228238,Zygote:"error"},ya={__category__:"PosteriorDB",EnzymeFwd:6.274658312390264,EnzymeRvs:4.565019980806967,FiniteDifferences:168.5436255389037,ForwardDiff:3.541627400921817,MooncakeFwd:25.429953375986933,MooncakeRvs:4.3690173936109735,ReverseDiff:106.86521917247029,ReverseDiffCompiled:8.539362166885104,Zygote:"error"},ba={__category__:"Core Turing syntax",EnzymeFwd:6.291370942215033,EnzymeRvs:3.4935921421435046,FiniteDifferences:116.83672077479197,ForwardDiff:2.1867137782336963,MooncakeFwd:10.219452611150922,MooncakeRvs:6.802159881122372,ReverseDiff:107.65717485745317,ReverseDiffCompiled:8.76492833614368,Zygote:15398.289576602618},wa={__category__:"Distributions",EnzymeFwd:8.352569974554708,EnzymeRvs:9.523485455030691,FiniteDifferences:44.71009866511898,ForwardDiff:1.035377608304205,MooncakeFwd:15.898589494163424,MooncakeRvs:10.210877252062637,ReverseDiff:31.749974494133657,ReverseDiffCompiled:2.93602814726424,Zygote:409.58108698819757},Ea={__category__:"Core Turing syntax",EnzymeFwd:5.056613484302624,EnzymeRvs:3.6928522220339937,FiniteDifferences:72.00301204819277,ForwardDiff:1.614393649692301,MooncakeFwd:7.499171548275797,MooncakeRvs:5.600914571487292,ReverseDiff:131.88950881396542,ReverseDiffCompiled:11.282628663555617,Zygote:"error"},Da={__category__:"Base Julia features",EnzymeFwd:6.874979025037689,EnzymeRvs:3.4608597343997944,FiniteDifferences:79.57275246011274,ForwardDiff:"error",MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Ra={abstractgps:xi,assume_beta:Mi,control_flow:Ti,delaydiffeq:Fi,demo_assume_dot_observe:Si,demo_assume_dot_observe_literal:Ni,demo_assume_index_observe:Ci,demo_assume_matrix_observe_matrix_index:Ai,demo_assume_multivariate_observe:ki,demo_assume_multivariate_observe_literal:Oi,demo_assume_observe_literal:Ii,demo_assume_submodel_observe_index_literal:Li,assume_dirichlet:Pi,demo_dot_assume_observe:zi,demo_dot_assume_observe_index:Vi,demo_dot_assume_observe_index_literal:Bi,demo_dot_assume_observe_matrix_index:ji,demo_dot_assume_observe_submodel:qi,dot_assume:Ui,dot_observe:$i,dppl_gauss_unknown:Hi,dppl_hier_poisson:Ki,dppl_high_dim_gauss:Zi,assume_lkjcholu:Gi,dppl_hmm_semisup:Wi,dppl_lda:Xi,dppl_logistic_regression:Ji,dppl_naive_bayes:Yi,dppl_sto_volatility:Qi,dynamic_constraint:ea,lux_nn:na,multiple_constraints_same_var:ta,multithreaded:ra,n010:oa,assume_mvnormal:sa,n050:ia,n100:aa,n500:la,observe_bernoulli:ca,observe_categorical:fa,observe_index:ua,observe_literal:da,observe_multivariate:_a,observe_submodel:ma,observe_von_mises:pa,assume_normal:ga,ordinarydiffeq:va,pdb_eight_schools_centered:ha,pdb_eight_schools_noncentered:ya,assume_submodel:ba,assume_wishart:wa,broadcast_macro:Ea,call_C:Da},xa=`#=
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

model = abstractgps(distance, n, y)`,Ma=`@model function assume_beta()
    a ~ Beta(2, 2)
end

model = assume_beta()`,Ta=`#= 
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

model = control_flow()`,Fa=`#=
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

model = delaydiffeq(ddedata, prob_dde)`,Sa=`@model function demo_assume_dot_observe(x = [1.5, 2.0])
    # \`assume\` and \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    x .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe()`,Na=`@model function demo_assume_dot_observe_literal()
    # \`assume\` and literal \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    [1.5, 2.0] .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe_literal()`,Ca=`using LinearAlgebra: Diagonal

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

model = demo_assume_index_observe()`,Aa=`using LinearAlgebra: Diagonal

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

model = demo_assume_matrix_observe_matrix_index()`,ka=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe(x = [1.5, 2.0])
    # Multivariate \`assume\` and \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zero(x), Diagonal(s))
    x ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe()`,Oa=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe_literal()
    # multivariate \`assume\` and literal \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zeros(2), Diagonal(s))
    [1.5, 2.0] ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe_literal()`,Ia=`@model function demo_assume_observe_literal()
    # univariate \`assume\` and literal \`observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    1.5 ~ Normal(m, sqrt(s))
    2.0 ~ Normal(m, sqrt(s))
end

model = demo_assume_observe_literal()`,La=`@model function _prior_dot_assume(::Type{TV} = Vector{Float64}) where {TV}
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

model = demo_assume_submodel_observe_index_literal()`,Pa=`@model function assume_dirichlet()
    a ~ Dirichlet([1.0, 5.0])
end

model = assume_dirichlet()`,za=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe()`,Va=`@model function demo_dot_assume_observe_index(
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

model = demo_dot_assume_observe_index()`,Ba=`@model function demo_dot_assume_observe_index_literal(
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

model = demo_dot_assume_observe_index_literal()`,ja=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe_matrix_index()`,qa=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe_submodel()`,Ua=`@model function dot_assume(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 5)
    a .~ Normal()
end

model = dot_assume()`,$a=`@model function dot_observe(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    x .~ Normal(a)
end

model = dot_observe()`,Ha=`n = 10_000
s = abs(rand()) + 0.5
y = randn() .+ s * randn(n)

@model function dppl_gauss_unknown(y)
    N = length(y)
    m ~ Normal(0, 1)
    s ~ truncated(Cauchy(0, 5); lower = 0)
    y ~ product_distribution(fill(Normal(m, s), N))
end

model = dppl_gauss_unknown(y)`,Ka=`using Turing: LogPoisson

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

model = dppl_hier_poisson(y, x, idx, ns)`,Za=`@model function dppl_high_dim_gauss(D)
    m ~ product_distribution(fill(Normal(0, 1), D))
end

model = dppl_high_dim_gauss(10_000)`,Ga=`@model function assume_lkjcholu()
    a ~ LKJCholesky(5, 1.0, 'U')
end

model = assume_lkjcholu()`,Wa=`using StatsFuns: logsumexp

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

model = dppl_hmm_semisup(K, T, T_unsup, w, z, u, alpha, beta)`,Xa=`v = 100      # words
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

model = dppl_lda(k, m, w, doc, alpha, beta)`,Ja=`using Random: Xoshiro
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

model = dppl_logistic_regression(X', y)`,Ya=`using MLDatasets: MNIST
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

model = dppl_naive_bayes(image_vec, labels, C, D)`,Qa=`using DelimitedFiles: readdlm

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

model = dppl_sto_volatility(y)`,el=`@model function dynamic_constraint()
    a ~ Normal()
    b ~ truncated(Normal(); lower = a)
end

model = dynamic_constraint()`,nl=`#=
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

model = lux_nn(reduce(hcat, xs), ts)`,tl=`@model function multiple_constraints_same_var(::Type{TV} = Vector{Float64}) where {TV}
    x = TV(undef, 5)
    x[1] ~ Normal()
    x[2] ~ InverseGamma(2, 3)
    x[3] ~ truncated(Normal(), -5, 20)
    x[4:5] ~ Dirichlet([1.0, 2.0])
end

model = multiple_constraints_same_var()`,rl=`#=
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
model = setthreadsafe(multithreaded(x), true)`,ol=`@model function n010(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 10)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n010()`,sl=`@model function assume_mvnormal()
    a ~ MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0])
end

model = assume_mvnormal()`,il=`@model function n050(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 50)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n050()`,al=`@model function n100(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 100)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n100()`,ll=`@model function n500(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 500)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n500()`,cl=`@model function observe_bernoulli(x = [true, false, true])
    a ~ Beta(2, 2)
    for i in eachindex(x)
        x[i] ~ Bernoulli(a)
    end
end

model = observe_bernoulli()`,fl=`@model function observe_categorical(x = [1, 2, 1, 2, 2])
    a ~ Dirichlet(2, 3)
    for i in eachindex(x)
        x[i] ~ Categorical(a)
    end
end

model = observe_categorical()`,ul=`@model function observe_index(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end

model = observe_index()`,dl=`@model function observe_literal()
    a ~ Normal()
    1.5 ~ Normal(a)
end

model = observe_literal()`,_l=`@model function observe_multivariate(
    x = [1.5, 2.0, 2.5],
    ::Type{TV} = Vector{Float64},
) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    x ~ MvNormal(a, I)
end

model = observe_multivariate()`,ml=`@model function inner2(x, a)
    x ~ Normal(a)
end
@model function observe_submodel(x = 1.5)
    a ~ Normal()
    _ignore ~ to_submodel(inner2(x, a))
end

model = observe_submodel()`,pl=`@model function observe_von_mises(x)
    a ~ InverseGamma(2, 3)
    x ~ VonMises(0, a)
end

model = observe_von_mises(0.4)`,gl=`@model function assume_normal()
    a ~ Normal()
end

model = assume_normal()`,vl=`# See https://turinglang.org/docs/tutorials/bayesian-differential-equations/.

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

model = ordinarydiffeq(odedata, prob)`,hl=`J = 8
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

model = pdb_eight_schools_centered(J, y, sigma)`,yl=`J = 8
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

model = pdb_eight_schools_noncentered(J, y, sigma)`,bl=`@model function inner1()
    return a ~ Normal()
end
@model function assume_submodel()
    a ~ to_submodel(inner1())
    x ~ Normal(a)
end

model = assume_submodel()`,wl=`@model function assume_wishart()
    a ~ Wishart(7, [1.0 0.5; 0.5 1.0])
end

model = assume_wishart()`,El=`@model function broadcast_macro(x = [1.5, 2.0], ::Type{TV} = Vector{Float64}) where {TV}
    a ~ Normal(0, 1)
    b ~ InverseGamma(2, 3)
    @. x ~ Normal(a, $(sqrt(b)))
end

model = broadcast_macro()`,Dl=`@model function call_C(y = 0.0)
    x ~ Normal(0, 1)

    # Call C library abs function
    x_abs = @ccall fabs(x::Cdouble)::Cdouble

    y ~ Normal(0, x_abs)
end

model = call_C()`,Rl={abstractgps:xa,assume_beta:Ma,control_flow:Ta,delaydiffeq:Fa,demo_assume_dot_observe:Sa,demo_assume_dot_observe_literal:Na,demo_assume_index_observe:Ca,demo_assume_matrix_observe_matrix_index:Aa,demo_assume_multivariate_observe:ka,demo_assume_multivariate_observe_literal:Oa,demo_assume_observe_literal:Ia,demo_assume_submodel_observe_index_literal:La,assume_dirichlet:Pa,demo_dot_assume_observe:za,demo_dot_assume_observe_index:Va,demo_dot_assume_observe_index_literal:Ba,demo_dot_assume_observe_matrix_index:ja,demo_dot_assume_observe_submodel:qa,dot_assume:Ua,dot_observe:$a,dppl_gauss_unknown:Ha,dppl_hier_poisson:Ka,dppl_high_dim_gauss:Za,assume_lkjcholu:Ga,dppl_hmm_semisup:Wa,dppl_lda:Xa,dppl_logistic_regression:Ja,dppl_naive_bayes:Ya,dppl_sto_volatility:Qa,dynamic_constraint:el,lux_nn:nl,multiple_constraints_same_var:tl,multithreaded:rl,n010:ol,assume_mvnormal:sl,n050:il,n100:al,n500:ll,observe_bernoulli:cl,observe_categorical:fl,observe_index:ul,observe_literal:dl,observe_multivariate:_l,observe_submodel:ml,observe_von_mises:pl,assume_normal:gl,ordinarydiffeq:vl,pdb_eight_schools_centered:hl,pdb_eight_schools_noncentered:yl,assume_submodel:bl,assume_wishart:wl,broadcast_macro:El,call_C:Dl},xl="1.20.0",Ml="1.5.0",Tl="0.5.24",Fl="5.10.0",Sl="0.13.6",Nl="0.4.5",Cl="0.1.43",Al="4.4.0",kl="0.8.3",Ol="0.8.9",Il="0.7.1",Ll="0.6.0",Pl="1.1.3",zl="2.5.0",Vl="1.1.2",Bl="0.4.0",jl="0.5.4",ql="3.5.1+1",Ul="7.22.0",$l="1.12.2",Hl="1.11.0",Kl="1.1.2",Zl="0.5.2",Gl="1.1.0",Wl="0.4.8",Xl="0.5.1",Jl="0.4.6",Yl="1.11.0",Ql="0.1.1",ec="0.15.14",nc="0.1.9",tc="0.1.6",rc="1.6.0",oc="1.2.2",sc="0.5.0",ic="0.2.7",ac="0.10.15",lc="0.3.14",cc="1.72.6",fc="1.26.0",uc="1.3.1",dc="0.1.10",_c="0.10.43",mc="0.10.4+0",pc="0.1.13",gc="0.7.8",vc="3.31.0",hc="0.12.1",yc="0.11.0",bc="0.13.1",wc="1.0.3",Ec="0.2.4",Dc="0.3.1",Rc="1.0.0",xc="4.18.1",Mc="1.1.1+0",Tc="0.1.2",Fc="0.2.3",Sc="2.5.0",Nc="0.1.2",Cc="1.6.0",Ac="0.1.3",kc="0.3.1",Oc="4.1.1",Ic="1.16.0",Lc="0.7.13",Pc="1.8.1",zc="0.18.22",Vc="1.0.0",Bc="1.11.0",jc="0.1.2",qc="5.63.0",Uc="1.9.1",$c="0.4.0",Hc="6.192.0",Kc="4.10.1",Zc="5.24.1",Gc="1.1.0",Wc="1.15.1",Xc="0.7.12",Jc="0.4.26",Yc="0.10.12",Qc="1.11.0",ef="0.25.122",nf="0.6.58",tf="0.9.5",rf="1.6.0",of="0.39.2",sf="2.0.0",af="1.0.5",lf="0.13.109",cf="0.8.17",ff="0.0.229+0",uf="0.1.11",df="1.28.0",_f="0.1.10",mf="0.10.14",pf="1.10.0",gf="3.3.11+0",vf="0.2.2",hf="0.1.1",yf="0.3.5",bf="0.3.2",wf="1.1.0",Ef="1.2.0",Df="1.17.1",Rf="0.9.24",xf="1.11.0",Mf="1.15.0",Tf="2.29.0",Ff="0.12.33",Sf="0.8.5",Nf="1.3.0",Cf="0.1.2",Af="1.1.3",kf="0.1.3",Of="0.5.2",If="1.11.0",Lf="0.2.0",Pf="1.7.5",zf="0.6.2",Vf="0.5.6",Bf="1.4.0",jf="1.13.1",qf="0.17.2",Uf="1.14.6+0",$f="1.10.19",Hf="0.2.0",Kf="2.12.2+0",Zf="0.3.28",Gf="0.4.15",Wf="0.1.1",Xf="0.1.7",Jf="0.10.5",Yf="0.3.8",Qf="0.1.5",eu="0.3.1",nu="1.4.5",tu="2025.2.0+0",ru="1.11.0",ou="0.7.0",su="0.16.2",iu="0.7.13",au="0.1.17",lu="1.3.1",cu="0.2.6",fu="1.10.0",uu="1.0.0",du="0.5.15",_u="1.7.1",mu="1.14.3",pu="0.2.1",gu="0.2.4",vu="0.9.39",hu="0.6.10",yu="0.10.66",bu="0.10.3",wu="9.4.4",Eu="0.0.38+0",Du="1.4.0",Ru="0.1.17",xu="2.9.4",Mu="1.11.0",Tu="0.3.1",Fu="0.2.1",Su="0.6.4",Nu="8.6.0+0",Cu="1.11.0",Au="1.7.2+0",ku="1.11.0+1",Ou="0.9.1+6",Iu="1.11.0",Lu="1.18.0+0",Pu="0.9.10",zu="0.1.4",Vu="7.5.1",Bu="1.11.0",ju="3.50.2",qu="2.2.0",Uu="1.13.1",$u="0.3.29",Hu="1.11.0",Ku="1.2.0",Zu="1.21.1",Gu="1.4.2",Wu="1.13.1",Xu="0.10.7",Ju="7.6.0",Yu="0.3.15",Qu="2025.2.0+0",ed="1.0.0",nd="1.16.0",td="0.7.18",rd="1.12.1",od="0.4.17",sd="0.4.8",id="4.3.2+0",ad="0.1.11",ld="5.5.4+0",cd="0.5.16",fd="0.1.8",ud="0.4.3",dd="1.11.0",_d="0.1.4",md="1.1.9",pd="2.28.6+0",gd="0.2.0",vd="10.1.4+3",hd="1.2.0",yd="2.1.0",bd="1.11.0",wd="0.4.184",Ed="0.3.4",Dd="0.3.7",Rd="2023.12.12",xd="0.2.4",Md="0.10.3",Td="7.10.0",Fd="0.9.32",Sd="0.4.3",Nd="1.1.3",Cd="0.1.5",Ad="0.10.5",kd="1.0.0",Od="1.2.0",Id="4.12.0",Ld="2.5.0",Pd="1.10.0",zd="1.11.0",Vd="1.6.0",Bd="0.5.0",jd="1.17.0",qd="0.3.27+1",Ud="0.8.5+0",$d="5.0.9+0",Hd="1.6.1",Kd="3.5.4+0",Zd="0.5.6+0",Gd="1.13.3",Wd="0.4.7",Xd="5.2.0",Jd="4.0.2",Yd="0.4.8",Qd="1.8.1",e1="6.103.0",n1="1.5.0",t1="1.10.1",r1="1.36.0",o1="1.8.0",s1="1.16.1",i1="1.4.0",a1="1.8.0",l1="1.9.0",c1="1.16.0",f1="1.4.0",u1="1.5.0",d1="1.5.0",_1="1.7.0",m1="1.6.0",p1="1.6.0",g1="1.7.0",v1="1.15.0",h1="1.4.0",y1="1.6.0",b1="1.4.0",w1="1.4.0",E1="1.5.0",D1="1.18.1",R1="1.7.0",x1="1.7.0",M1="1.6.0",T1="1.4.0",F1="1.7.0",S1="1.5.0",N1="1.6.0",C1="0.11.36",A1="1.0.2",k1="0.5.12",O1="2.8.3",I1="1.2.1",L1="0.3.6",P1="1.11.0",z1="0.4.7",V1="0.7.18",B1="0.2.2",j1="1.4.3",q1="0.2.4",U1="0.4.34",$1="1.2.1",H1="1.5.0",K1="0.2.0",Z1="3.1.2",G1="1.11.0",W1="0.1.6",X1="1.11.0",J1="1.3.0",Y1="2.11.2",Q1="1.11.0",e0="1.11.0",n0="1.7.1",t0="1.6.0",r0="0.3.2",o0="0.4.5",s0="0.1.0",i0="1.3.4",a0="3.39.0",l0="1.2.2",c0="1.3.1",f0="1.1.1",u0="1.16.1",d0="1.4.2",_0="0.9.0",m0="0.5.1+0",p0="2.2.10",g0="0.5.16",v0="0.7.0",h0="0.1.0",y0="0.6.1",b0="2.128.0",w0="0.1.11",E0="1.7.1",D0="1.14.0",R0="1.0.0",x0="7.90.0",M0="1.7.0",T0="3.0.0",F0="1.5.0",S0="1.3.0",N0="1.4.8",C0="1.11.0",A0="1.1.2",k0="1.11.0",O0="0.1.0",I0="1.2.0",L0="2.9.0",P0="0.9.5",z0="1.1.0",V0="1.11.0",B0="1.2.2",j0="1.11.0",q0="1.1.3",U0="0.1.2",$0="0.4.23",H0="2.6.1",K0="0.1.15",Z0="0.1.2",G0="1.3.1",W0="1.8.0",X0="1.9.15",J0="1.4.4",Y0="3.5.0",Q0="1.11.1",e_="1.8.0",n_="0.34.9",t_="1.5.2",r_="0.5.8",o_="0.4.1",s_="0.3.7",i_="0.4.2",a_="0.7.2",l_="0.3.1",c_="1.11.0",f_="2.6.0",u_="1.11.0",d_=null,__="7.7.0+0",m_="0.3.46",p_="1.0.3",g_="1.0.1",v_="1.12.1",h_="1.10.0",y_="0.1.1",b_="0.1.7",w_="1.11.0",E_="0.5.5",D_="0.5.29",R_="0.2.38",x_="0.1.6",M_="0.11.3",T_="0.4.85",F_="1.4.0",S_="0.42.0",N_="1.6.1",C_="1.11.0",A_="1.11.0",k_="1.27.0",O_="1.0.0",I_="0.3.0",L_="1.4.2",P_="1.2.2",z_="1.0.0",V_="1.6.1",B_="2.13.9+0",j_="0.18.1+0",q_="0.10.1",U_="1.2.13+1",$_="0.7.10",H_="0.2.7",K_="1.1.4+0",Z_="5.11.0+0",G_="1.59.0+0",W_="2022.0.0+1",X_="17.4.0+2",J_={ADTypes:xl,AbstractFFTs:Ml,AbstractGPs:Tl,AbstractMCMC:Fl,AbstractPPL:Sl,AbstractTrees:Nl,Accessors:Cl,Adapt:Al,AdvancedHMC:kl,AdvancedMH:Ol,AdvancedPS:Il,AdvancedVI:Ll,AliasTables:Pl,ArgCheck:zl,ArgTools:Vl,ArnoldiMethod:Bl,Arpack:jl,Arpack_jll:ql,ArrayInterface:Ul,ArrayLayouts:$l,Artifacts:Hl,Atomix:Kl,AtomsBase:Zl,AxisAlgorithms:Gl,AxisArrays:Wl,BFloat16s:Xl,BangBang:Jl,Base64:Yl,Baselet:Ql,Bijectors:ec,BitFlags:nc,BitTwiddlingConvenienceFunctions:tc,BracketingNonlinearSolve:rc,BufferedStreams:oc,CEnum:sc,CPUSummary:ic,CSV:ac,Cassette:lc,ChainRules:cc,ChainRulesCore:fc,Chairmarks:uc,ChangesOfVariables:dc,Chemfiles:_c,Chemfiles_jll:mc,CloseOpenIntervals:pc,CodecZlib:gc,ColorSchemes:vc,ColorTypes:hc,ColorVectorSpace:yc,Colors:bc,Combinatorics:wc,CommonSolve:Ec,CommonSubexpressions:Dc,CommonWorldInvalidations:Rc,Compat:xc,CompilerSupportLibraries_jll:Mc,CompositionsBase:Tc,ConcreteStructs:Fc,ConcurrentUtilities:Sc,ConsoleProgressMonitor:Nc,ConstructionBase:Cc,ContextVariablesX:Ac,CpuId:kc,Crayons:Oc,DataAPI:Ic,DataDeps:Lc,DataFrames:Pc,DataStructures:zc,DataValueInterfaces:Vc,Dates:Bc,DefineSingletons:jc,DelayDiffEq:qc,DelimitedFiles:Uc,DensityInterface:$c,DiffEqBase:Hc,DiffEqCallbacks:Kc,DiffEqNoiseProcess:Zc,DiffResults:Gc,DiffRules:Wc,DifferentiationInterface:Xc,DispatchDoctor:Jc,Distances:Yc,Distributed:Qc,Distributions:ef,DistributionsAD:nf,DocStringExtensions:tf,Downloads:rf,DynamicPPL:of,EllipticalSliceSampling:sf,EnumX:af,Enzyme:lf,EnzymeCore:cf,Enzyme_jll:ff,ExceptionUnwrapping:uf,ExponentialUtilities:df,ExprTools:_f,ExproniconLite:mf,FFTW:pf,FFTW_jll:gf,FLoops:vf,FLoopsBase:hf,FastBroadcast:yf,FastClosures:bf,FastGaussQuadrature:wf,FastPower:Ef,FileIO:Df,FilePathsBase:Rf,FileWatching:xf,FillArrays:Mf,FiniteDiff:Tf,FiniteDifferences:Ff,FixedPointNumbers:Sf,ForwardDiff:Nf,FunctionProperties:Cf,FunctionWrappers:Af,FunctionWrappersWrappers:kf,Functors:Of,Future:If,GPUArraysCore:Lf,GPUCompiler:Pf,GZip:zf,GenericSchur:Vf,Glob:Bf,Graphs:jf,HDF5:qf,HDF5_jll:Uf,HTTP:$f,HashArrayMappedTries:Hf,Hwloc_jll:Kf,HypergeometricFunctions:Zf,IRTools:Gf,IfElse:Wf,ImageBase:Xf,ImageCore:Jf,ImageShow:Yf,Inflate:Qf,InitialValues:eu,InlineStrings:nu,IntelOpenMP_jll:tu,InteractiveUtils:ru,InternedStrings:ou,Interpolations:su,IntervalSets:iu,InverseFunctions:au,InvertedIndices:lu,IrrationalConstants:cu,IterTools:fu,IteratorInterfaceExtensions:uu,JLD2:du,JLLWrappers:_u,JSON:"1.3.0",JSON3:mu,Jieko:pu,JuliaVariables:gu,KernelAbstractions:vu,KernelDensity:hu,KernelFunctions:yu,Krylov:bu,LLVM:wu,LLVMExtra_jll:Eu,LaTeXStrings:Du,LayoutPointers:Ru,LazyArrays:xu,LazyArtifacts:Mu,LazyModules:Tu,LeftChildRightSiblingTrees:Fu,LibCURL:Su,LibCURL_jll:Nu,LibGit2:Cu,LibGit2_jll:Au,LibSSH2_jll:ku,LibTracyClient_jll:Ou,Libdl:Iu,Libiconv_jll:Lu,Libtask:Pu,LineSearch:zu,LineSearches:Vu,LinearAlgebra:Bu,LinearSolve:ju,LogDensityProblems:qu,LogDensityProblemsAD:Uu,LogExpFunctions:$u,Logging:Hu,LoggingExtras:Ku,Lux:Zu,LuxCore:Gu,LuxLib:Wu,MAT:Xu,MCMCChains:Ju,MCMCDiagnosticTools:Yu,MKL_jll:Qu,MLCore:ed,MLDataDevices:nd,MLDatasets:td,MLJModelInterface:rd,MLStyle:od,MLUtils:sd,MPICH_jll:id,MPIPreferences:ad,MPItrampoline_jll:ld,MacroTools:cd,ManualMemory:fd,MappedArrays:ud,Markdown:dd,MaybeInplace:_d,MbedTLS:md,MbedTLS_jll:pd,MicroCollections:gd,MicrosoftMPI_jll:vd,Missings:hd,MistyClosures:yd,Mmap:bd,Mooncake:wd,MosaicViews:Ed,Moshi:Dd,MozillaCACerts_jll:Rd,MuladdMacro:xd,MultivariateStats:Md,NLSolversBase:Td,NNlib:Fd,NPZ:Sd,NaNMath:Nd,NameResolution:Cd,NamedArrays:Ad,NaturalSort:kd,NetworkOptions:Od,NonlinearSolve:Id,NonlinearSolveBase:Ld,NonlinearSolveFirstOrder:Pd,NonlinearSolveQuasiNewton:zd,NonlinearSolveSpectralMethods:Vd,ObjectFile:Bd,OffsetArrays:jd,OpenBLAS_jll:qd,OpenLibm_jll:Ud,OpenMPI_jll:$d,OpenSSL:Hd,OpenSSL_jll:Kd,OpenSpecFun_jll:Zd,Optim:Gd,Optimisers:Wd,Optimization:Xd,OptimizationBase:Jd,OptimizationOptimJL:Yd,OrderedCollections:Qd,OrdinaryDiffEq:e1,OrdinaryDiffEqAdamsBashforthMoulton:n1,OrdinaryDiffEqBDF:t1,OrdinaryDiffEqCore:r1,OrdinaryDiffEqDefault:o1,OrdinaryDiffEqDifferentiation:s1,OrdinaryDiffEqExplicitRK:i1,OrdinaryDiffEqExponentialRK:a1,OrdinaryDiffEqExtrapolation:l1,OrdinaryDiffEqFIRK:c1,OrdinaryDiffEqFeagin:f1,OrdinaryDiffEqFunctionMap:u1,OrdinaryDiffEqHighOrderRK:d1,OrdinaryDiffEqIMEXMultistep:_1,OrdinaryDiffEqLinear:m1,OrdinaryDiffEqLowOrderRK:p1,OrdinaryDiffEqLowStorageRK:g1,OrdinaryDiffEqNonlinearSolve:v1,OrdinaryDiffEqNordsieck:h1,OrdinaryDiffEqPDIRK:y1,OrdinaryDiffEqPRK:b1,OrdinaryDiffEqQPRK:w1,OrdinaryDiffEqRKN:E1,OrdinaryDiffEqRosenbrock:D1,OrdinaryDiffEqSDIRK:R1,OrdinaryDiffEqSSPRK:x1,OrdinaryDiffEqStabilizedIRK:M1,OrdinaryDiffEqStabilizedRK:T1,OrdinaryDiffEqSymplecticRK:F1,OrdinaryDiffEqTsit5:S1,OrdinaryDiffEqVerner:N1,PDMats:C1,PackageExtensionCompat:A1,PaddedViews:k1,Parsers:O1,PeriodicTable:I1,Pickle:L1,Pkg:P1,PoissonRandom:z1,Polyester:V1,PolyesterWeave:B1,PooledArrays:j1,PositiveFactorizations:q1,PreallocationTools:U1,PrecompileTools:$1,Preferences:H1,PrettyPrint:K1,PrettyTables:Z1,Printf:G1,ProgressLogging:W1,ProgressMeter:X1,PtrArrays:J1,QuadGK:Y1,REPL:Q1,Random:e0,Random123:n0,RandomNumbers:t0,RangeArrays:r0,Ratios:o0,RealDot:s0,RecipesBase:i0,RecursiveArrayTools:a0,Reexport:l0,Requires:c0,ResettableStacks:f0,ReverseDiff:u0,Richardson:d0,Rmath:_0,Rmath_jll:m0,Roots:p0,RuntimeGeneratedFunctions:g0,SHA:v0,SIMDTypes:h0,SSMProblems:y0,SciMLBase:b0,SciMLJacobianOperators:w0,SciMLLogging:E0,SciMLOperators:D0,SciMLPublic:R0,SciMLSensitivity:x0,SciMLStructures:M0,ScientificTypesBase:T0,ScopedValues:F0,Scratch:S0,SentinelArrays:N0,Serialization:C0,Setfield:A0,SharedArrays:k0,ShowCases:O0,SimpleBufferStream:I0,SimpleNonlinearSolve:L0,SimpleTraits:P0,SimpleUnPack:z0,Sockets:V0,SortingAlgorithms:B0,SparseArrays:j0,SparseConnectivityTracer:q0,SparseInverseSubset:U0,SparseMatrixColorings:$0,SpecialFunctions:H0,SplittablesBase:K0,StackViews:Z0,Static:G0,StaticArrayInterface:W0,StaticArrays:X0,StaticArraysCore:J0,StatisticalTraits:Y0,Statistics:Q0,StatsAPI:e_,StatsBase:n_,StatsFuns:t_,StrideArraysCore:r_,StridedViews:o_,StringEncodings:s_,StringManipulation:i_,StructArrays:a_,StructIO:l_,StructTypes:c_,StructUtils:f_,StyledStrings:u_,SuiteSparse:d_,SuiteSparse_jll:__,SymbolicIndexingInterface:m_,TOML:p_,TableTraits:g_,Tables:v_,Tar:h_,TensorCore:y_,TerminalLoggers:b_,Test:w_,ThreadingUtilities:E_,TimerOutputs:D_,Tracker:R_,Tracy:x_,TranscodingStreams:M_,Transducers:T_,TruncatedStacktraces:F_,Turing:S_,URIs:N_,UUIDs:C_,Unicode:A_,Unitful:k_,UnitfulAtomic:O_,UnsafeAtomics:I_,WeakRefStrings:L_,WeightInitializers:P_,WoodburyMatrices:z_,WorkerUtilities:V_,XML2_jll:B_,Xorg_libpciaccess_jll:j_,ZipFile:q_,Zlib_jll:U_,Zygote:$_,ZygoteRules:H_,libaec_jll:K_,libblastrampoline_jll:Z_,nghttp2_jll:G_,oneTBB_jll:W_,p7zip_jll:X_};function wt(e){return[...e.entries()].sort(([n,t],[r,i])=>n.localeCompare(r))}var Y_=me('<tr><td class="svelte-7y9k9c"> </td><td class="version svelte-7y9k9c"> </td></tr>'),Q_=me('<table id="manifest" class="svelte-7y9k9c"><thead><tr><th class="svelte-7y9k9c">Package</th><th class="svelte-7y9k9c">Version</th></tr></thead><tbody></tbody></table>');function em(e,n){hn(n,!1);let t=new Map;for(const[o,l]of Object.entries(J_))t.set(o,l===""?null:l);kt();var r=Q_(),i=ve(W(r));dn(i,5,()=>wt(t),un,(o,l)=>{let f=()=>O(l)[0],a=()=>O(l)[1];var c=Y_(),p=W(c),_=W(p),u=ve(p),g=W(u);De(()=>{qe(_,f()),qe(g,a()===null?"":`v${a()}`)}),ee(o,c)}),ee(e,r),yn()}function nm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ut,ur;function tm(){if(ur)return ut;ur=1;function e(s){return s instanceof Map?s.clear=s.delete=s.set=function(){throw new Error("map is read-only")}:s instanceof Set&&(s.add=s.clear=s.delete=function(){throw new Error("set is read-only")}),Object.freeze(s),Object.getOwnPropertyNames(s).forEach(d=>{const h=s[d],N=typeof h;(N==="object"||N==="function")&&!Object.isFrozen(h)&&e(h)}),s}class n{constructor(d){d.data===void 0&&(d.data={}),this.data=d.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(s,...d){const h=Object.create(null);for(const N in s)h[N]=s[N];return d.forEach(function(N){for(const $ in N)h[$]=N[$]}),h}const i="</span>",o=s=>!!s.scope,l=(s,{prefix:d})=>{if(s.startsWith("language:"))return s.replace("language:","language-");if(s.includes(".")){const h=s.split(".");return[`${d}${h.shift()}`,...h.map((N,$)=>`${N}${"_".repeat($+1)}`)].join(" ")}return`${d}${s}`};class f{constructor(d,h){this.buffer="",this.classPrefix=h.classPrefix,d.walk(this)}addText(d){this.buffer+=t(d)}openNode(d){if(!o(d))return;const h=l(d.scope,{prefix:this.classPrefix});this.span(h)}closeNode(d){o(d)&&(this.buffer+=i)}value(){return this.buffer}span(d){this.buffer+=`<span class="${d}">`}}const a=(s={})=>{const d={children:[]};return Object.assign(d,s),d};class c{constructor(){this.rootNode=a(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(d){this.top.children.push(d)}openNode(d){const h=a({scope:d});this.add(h),this.stack.push(h)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(d){return this.constructor._walk(d,this.rootNode)}static _walk(d,h){return typeof h=="string"?d.addText(h):h.children&&(d.openNode(h),h.children.forEach(N=>this._walk(d,N)),d.closeNode(h)),d}static _collapse(d){typeof d!="string"&&d.children&&(d.children.every(h=>typeof h=="string")?d.children=[d.children.join("")]:d.children.forEach(h=>{c._collapse(h)}))}}class p extends c{constructor(d){super(),this.options=d}addText(d){d!==""&&this.add(d)}startScope(d){this.openNode(d)}endScope(){this.closeNode()}__addSublanguage(d,h){const N=d.root;h&&(N.scope=`language:${h}`),this.add(N)}toHTML(){return new f(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(s){return s?typeof s=="string"?s:s.source:null}function u(s){return F("(?=",s,")")}function g(s){return F("(?:",s,")*")}function v(s){return F("(?:",s,")?")}function F(...s){return s.map(h=>_(h)).join("")}function A(s){const d=s[s.length-1];return typeof d=="object"&&d.constructor===Object?(s.splice(s.length-1,1),d):{}}function z(...s){return"("+(A(s).capture?"":"?:")+s.map(N=>_(N)).join("|")+")"}function K(s){return new RegExp(s.toString()+"|").exec("").length-1}function M(s,d){const h=s&&s.exec(d);return h&&h.index===0}const E=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function x(s,{joinWith:d}){let h=0;return s.map(N=>{h+=1;const $=h;let H=_(N),w="";for(;H.length>0;){const b=E.exec(H);if(!b){w+=H;break}w+=H.substring(0,b.index),H=H.substring(b.index+b[0].length),b[0][0]==="\\"&&b[1]?w+="\\"+String(Number(b[1])+$):(w+=b[0],b[0]==="("&&h++)}return w}).map(N=>`(${N})`).join(d)}const X=/\b\B/,S="[a-zA-Z]\\w*",U="[a-zA-Z_]\\w*",ie="\\b\\d+(\\.\\d+)?",Ne="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ne="\\b(0b[01]+)",pe="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Ce=(s={})=>{const d=/^#![ ]*\//;return s.binary&&(s.begin=F(d,/.*\b/,s.binary,/\b.*/)),r({scope:"meta",begin:d,end:/$/,relevance:0,"on:begin":(h,N)=>{h.index!==0&&N.ignoreMatch()}},s)},ue={begin:"\\\\[\\s\\S]",relevance:0},He={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ue]},Xe={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ue]},Ae={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},ye=function(s,d,h={}){const N=r({scope:"comment",begin:s,end:d,contains:[]},h);N.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const $=z("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return N.contains.push({begin:F(/[ ]+/,"(",$,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),N},Wr=ye("//","$"),Xr=ye("/\\*","\\*/"),Jr=ye("#","$"),Yr={scope:"number",begin:ie,relevance:0},Qr={scope:"number",begin:Ne,relevance:0},eo={scope:"number",begin:ne,relevance:0},no={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ue,{begin:/\[/,end:/\]/,relevance:0,contains:[ue]}]},to={scope:"title",begin:S,relevance:0},ro={scope:"title",begin:U,relevance:0},oo={begin:"\\.\\s*"+U,relevance:0};var wn=Object.freeze({__proto__:null,APOS_STRING_MODE:He,BACKSLASH_ESCAPE:ue,BINARY_NUMBER_MODE:eo,BINARY_NUMBER_RE:ne,COMMENT:ye,C_BLOCK_COMMENT_MODE:Xr,C_LINE_COMMENT_MODE:Wr,C_NUMBER_MODE:Qr,C_NUMBER_RE:Ne,END_SAME_AS_BEGIN:function(s){return Object.assign(s,{"on:begin":(d,h)=>{h.data._beginMatch=d[1]},"on:end":(d,h)=>{h.data._beginMatch!==d[1]&&h.ignoreMatch()}})},HASH_COMMENT_MODE:Jr,IDENT_RE:S,MATCH_NOTHING_RE:X,METHOD_GUARD:oo,NUMBER_MODE:Yr,NUMBER_RE:ie,PHRASAL_WORDS_MODE:Ae,QUOTE_STRING_MODE:Xe,REGEXP_MODE:no,RE_STARTERS_RE:pe,SHEBANG:Ce,TITLE_MODE:to,UNDERSCORE_IDENT_RE:U,UNDERSCORE_TITLE_MODE:ro});function so(s,d){s.input[s.index-1]==="."&&d.ignoreMatch()}function io(s,d){s.className!==void 0&&(s.scope=s.className,delete s.className)}function ao(s,d){d&&s.beginKeywords&&(s.begin="\\b("+s.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",s.__beforeBegin=so,s.keywords=s.keywords||s.beginKeywords,delete s.beginKeywords,s.relevance===void 0&&(s.relevance=0))}function lo(s,d){Array.isArray(s.illegal)&&(s.illegal=z(...s.illegal))}function co(s,d){if(s.match){if(s.begin||s.end)throw new Error("begin & end are not supported with match");s.begin=s.match,delete s.match}}function fo(s,d){s.relevance===void 0&&(s.relevance=1)}const uo=(s,d)=>{if(!s.beforeMatch)return;if(s.starts)throw new Error("beforeMatch cannot be used with starts");const h=Object.assign({},s);Object.keys(s).forEach(N=>{delete s[N]}),s.keywords=h.keywords,s.begin=F(h.beforeMatch,u(h.begin)),s.starts={relevance:0,contains:[Object.assign(h,{endsParent:!0})]},s.relevance=0,delete h.beforeMatch},_o=["of","and","for","in","not","or","if","then","parent","list","value"],mo="keyword";function Ot(s,d,h=mo){const N=Object.create(null);return typeof s=="string"?$(h,s.split(" ")):Array.isArray(s)?$(h,s):Object.keys(s).forEach(function(H){Object.assign(N,Ot(s[H],d,H))}),N;function $(H,w){d&&(w=w.map(b=>b.toLowerCase())),w.forEach(function(b){const T=b.split("|");N[T[0]]=[H,po(T[0],T[1])]})}}function po(s,d){return d?Number(d):go(s)?0:1}function go(s){return _o.includes(s.toLowerCase())}const It={},Ke=s=>{console.error(s)},Lt=(s,...d)=>{console.log(`WARN: ${s}`,...d)},Je=(s,d)=>{It[`${s}/${d}`]||(console.log(`Deprecated as of ${s}. ${d}`),It[`${s}/${d}`]=!0)},En=new Error;function Pt(s,d,{key:h}){let N=0;const $=s[h],H={},w={};for(let b=1;b<=d.length;b++)w[b+N]=$[b],H[b+N]=!0,N+=K(d[b-1]);s[h]=w,s[h]._emit=H,s[h]._multi=!0}function vo(s){if(Array.isArray(s.begin)){if(s.skip||s.excludeBegin||s.returnBegin)throw Ke("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),En;if(typeof s.beginScope!="object"||s.beginScope===null)throw Ke("beginScope must be object"),En;Pt(s,s.begin,{key:"beginScope"}),s.begin=x(s.begin,{joinWith:""})}}function ho(s){if(Array.isArray(s.end)){if(s.skip||s.excludeEnd||s.returnEnd)throw Ke("skip, excludeEnd, returnEnd not compatible with endScope: {}"),En;if(typeof s.endScope!="object"||s.endScope===null)throw Ke("endScope must be object"),En;Pt(s,s.end,{key:"endScope"}),s.end=x(s.end,{joinWith:""})}}function yo(s){s.scope&&typeof s.scope=="object"&&s.scope!==null&&(s.beginScope=s.scope,delete s.scope)}function bo(s){yo(s),typeof s.beginScope=="string"&&(s.beginScope={_wrap:s.beginScope}),typeof s.endScope=="string"&&(s.endScope={_wrap:s.endScope}),vo(s),ho(s)}function wo(s){function d(w,b){return new RegExp(_(w),"m"+(s.case_insensitive?"i":"")+(s.unicodeRegex?"u":"")+(b?"g":""))}class h{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(b,T){T.position=this.position++,this.matchIndexes[this.matchAt]=T,this.regexes.push([T,b]),this.matchAt+=K(b)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const b=this.regexes.map(T=>T[1]);this.matcherRe=d(x(b,{joinWith:"|"}),!0),this.lastIndex=0}exec(b){this.matcherRe.lastIndex=this.lastIndex;const T=this.matcherRe.exec(b);if(!T)return null;const J=T.findIndex((sn,tt)=>tt>0&&sn!==void 0),Z=this.matchIndexes[J];return T.splice(0,J),Object.assign(T,Z)}}class N{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(b){if(this.multiRegexes[b])return this.multiRegexes[b];const T=new h;return this.rules.slice(b).forEach(([J,Z])=>T.addRule(J,Z)),T.compile(),this.multiRegexes[b]=T,T}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(b,T){this.rules.push([b,T]),T.type==="begin"&&this.count++}exec(b){const T=this.getMatcher(this.regexIndex);T.lastIndex=this.lastIndex;let J=T.exec(b);if(this.resumingScanAtSamePosition()&&!(J&&J.index===this.lastIndex)){const Z=this.getMatcher(0);Z.lastIndex=this.lastIndex+1,J=Z.exec(b)}return J&&(this.regexIndex+=J.position+1,this.regexIndex===this.count&&this.considerAll()),J}}function $(w){const b=new N;return w.contains.forEach(T=>b.addRule(T.begin,{rule:T,type:"begin"})),w.terminatorEnd&&b.addRule(w.terminatorEnd,{type:"end"}),w.illegal&&b.addRule(w.illegal,{type:"illegal"}),b}function H(w,b){const T=w;if(w.isCompiled)return T;[io,co,bo,uo].forEach(Z=>Z(w,b)),s.compilerExtensions.forEach(Z=>Z(w,b)),w.__beforeBegin=null,[ao,lo,fo].forEach(Z=>Z(w,b)),w.isCompiled=!0;let J=null;return typeof w.keywords=="object"&&w.keywords.$pattern&&(w.keywords=Object.assign({},w.keywords),J=w.keywords.$pattern,delete w.keywords.$pattern),J=J||/\w+/,w.keywords&&(w.keywords=Ot(w.keywords,s.case_insensitive)),T.keywordPatternRe=d(J,!0),b&&(w.begin||(w.begin=/\B|\b/),T.beginRe=d(T.begin),!w.end&&!w.endsWithParent&&(w.end=/\B|\b/),w.end&&(T.endRe=d(T.end)),T.terminatorEnd=_(T.end)||"",w.endsWithParent&&b.terminatorEnd&&(T.terminatorEnd+=(w.end?"|":"")+b.terminatorEnd)),w.illegal&&(T.illegalRe=d(w.illegal)),w.contains||(w.contains=[]),w.contains=[].concat(...w.contains.map(function(Z){return Eo(Z==="self"?w:Z)})),w.contains.forEach(function(Z){H(Z,T)}),w.starts&&H(w.starts,b),T.matcher=$(T),T}if(s.compilerExtensions||(s.compilerExtensions=[]),s.contains&&s.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return s.classNameAliases=r(s.classNameAliases||{}),H(s)}function zt(s){return s?s.endsWithParent||zt(s.starts):!1}function Eo(s){return s.variants&&!s.cachedVariants&&(s.cachedVariants=s.variants.map(function(d){return r(s,{variants:null},d)})),s.cachedVariants?s.cachedVariants:zt(s)?r(s,{starts:s.starts?r(s.starts):null}):Object.isFrozen(s)?r(s):s}var Do="11.11.1";class Ro extends Error{constructor(d,h){super(d),this.name="HTMLInjectionError",this.html=h}}const nt=t,Vt=r,Bt=Symbol("nomatch"),xo=7,jt=function(s){const d=Object.create(null),h=Object.create(null),N=[];let $=!0;const H="Could not find the language '{}', did you forget to load/include a language module?",w={disableAutodetect:!0,name:"Plain text",contains:[]};let b={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:p};function T(m){return b.noHighlightRe.test(m)}function J(m){let R=m.className+" ";R+=m.parentNode?m.parentNode.className:"";const I=b.languageDetectRe.exec(R);if(I){const B=ke(I[1]);return B||(Lt(H.replace("{}",I[1])),Lt("Falling back to no-highlight mode for this block.",m)),B?I[1]:"no-highlight"}return R.split(/\s+/).find(B=>T(B)||ke(B))}function Z(m,R,I){let B="",G="";typeof R=="object"?(B=m,I=R.ignoreIllegals,G=R.language):(Je("10.7.0","highlight(lang, code, ...args) has been deprecated."),Je("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),G=m,B=R),I===void 0&&(I=!0);const ge={code:B,language:G};Rn("before:highlight",ge);const Oe=ge.result?ge.result:sn(ge.language,ge.code,I);return Oe.code=ge.code,Rn("after:highlight",Oe),Oe}function sn(m,R,I,B){const G=Object.create(null);function ge(y,D){return y.keywords[D]}function Oe(){if(!C.keywords){Y.addText(j);return}let y=0;C.keywordPatternRe.lastIndex=0;let D=C.keywordPatternRe.exec(j),k="";for(;D;){k+=j.substring(y,D.index);const L=we.case_insensitive?D[0].toLowerCase():D[0],Q=ge(C,L);if(Q){const[Me,qo]=Q;if(Y.addText(k),k="",G[L]=(G[L]||0)+1,G[L]<=xo&&(Tn+=qo),Me.startsWith("_"))k+=D[0];else{const Uo=we.classNameAliases[Me]||Me;be(D[0],Uo)}}else k+=D[0];y=C.keywordPatternRe.lastIndex,D=C.keywordPatternRe.exec(j)}k+=j.substring(y),Y.addText(k)}function xn(){if(j==="")return;let y=null;if(typeof C.subLanguage=="string"){if(!d[C.subLanguage]){Y.addText(j);return}y=sn(C.subLanguage,j,!0,Wt[C.subLanguage]),Wt[C.subLanguage]=y._top}else y=rt(j,C.subLanguage.length?C.subLanguage:null);C.relevance>0&&(Tn+=y.relevance),Y.__addSublanguage(y._emitter,y.language)}function ae(){C.subLanguage!=null?xn():Oe(),j=""}function be(y,D){y!==""&&(Y.startScope(D),Y.addText(y),Y.endScope())}function Ht(y,D){let k=1;const L=D.length-1;for(;k<=L;){if(!y._emit[k]){k++;continue}const Q=we.classNameAliases[y[k]]||y[k],Me=D[k];Q?be(Me,Q):(j=Me,Oe(),j=""),k++}}function Kt(y,D){return y.scope&&typeof y.scope=="string"&&Y.openNode(we.classNameAliases[y.scope]||y.scope),y.beginScope&&(y.beginScope._wrap?(be(j,we.classNameAliases[y.beginScope._wrap]||y.beginScope._wrap),j=""):y.beginScope._multi&&(Ht(y.beginScope,D),j="")),C=Object.create(y,{parent:{value:C}}),C}function Zt(y,D,k){let L=M(y.endRe,k);if(L){if(y["on:end"]){const Q=new n(y);y["on:end"](D,Q),Q.isMatchIgnored&&(L=!1)}if(L){for(;y.endsParent&&y.parent;)y=y.parent;return y}}if(y.endsWithParent)return Zt(y.parent,D,k)}function Po(y){return C.matcher.regexIndex===0?(j+=y[0],1):(at=!0,0)}function zo(y){const D=y[0],k=y.rule,L=new n(k),Q=[k.__beforeBegin,k["on:begin"]];for(const Me of Q)if(Me&&(Me(y,L),L.isMatchIgnored))return Po(D);return k.skip?j+=D:(k.excludeBegin&&(j+=D),ae(),!k.returnBegin&&!k.excludeBegin&&(j=D)),Kt(k,y),k.returnBegin?0:D.length}function Vo(y){const D=y[0],k=R.substring(y.index),L=Zt(C,y,k);if(!L)return Bt;const Q=C;C.endScope&&C.endScope._wrap?(ae(),be(D,C.endScope._wrap)):C.endScope&&C.endScope._multi?(ae(),Ht(C.endScope,y)):Q.skip?j+=D:(Q.returnEnd||Q.excludeEnd||(j+=D),ae(),Q.excludeEnd&&(j=D));do C.scope&&Y.closeNode(),!C.skip&&!C.subLanguage&&(Tn+=C.relevance),C=C.parent;while(C!==L.parent);return L.starts&&Kt(L.starts,y),Q.returnEnd?0:D.length}function Bo(){const y=[];for(let D=C;D!==we;D=D.parent)D.scope&&y.unshift(D.scope);y.forEach(D=>Y.openNode(D))}let Mn={};function Gt(y,D){const k=D&&D[0];if(j+=y,k==null)return ae(),0;if(Mn.type==="begin"&&D.type==="end"&&Mn.index===D.index&&k===""){if(j+=R.slice(D.index,D.index+1),!$){const L=new Error(`0 width match regex (${m})`);throw L.languageName=m,L.badRule=Mn.rule,L}return 1}if(Mn=D,D.type==="begin")return zo(D);if(D.type==="illegal"&&!I){const L=new Error('Illegal lexeme "'+k+'" for mode "'+(C.scope||"<unnamed>")+'"');throw L.mode=C,L}else if(D.type==="end"){const L=Vo(D);if(L!==Bt)return L}if(D.type==="illegal"&&k==="")return j+=`
`,1;if(it>1e5&&it>D.index*3)throw new Error("potential infinite loop, way more iterations than matches");return j+=k,k.length}const we=ke(m);if(!we)throw Ke(H.replace("{}",m)),new Error('Unknown language: "'+m+'"');const jo=wo(we);let st="",C=B||jo;const Wt={},Y=new b.__emitter(b);Bo();let j="",Tn=0,Ze=0,it=0,at=!1;try{if(we.__emitTokens)we.__emitTokens(R,Y);else{for(C.matcher.considerAll();;){it++,at?at=!1:C.matcher.considerAll(),C.matcher.lastIndex=Ze;const y=C.matcher.exec(R);if(!y)break;const D=R.substring(Ze,y.index),k=Gt(D,y);Ze=y.index+k}Gt(R.substring(Ze))}return Y.finalize(),st=Y.toHTML(),{language:m,value:st,relevance:Tn,illegal:!1,_emitter:Y,_top:C}}catch(y){if(y.message&&y.message.includes("Illegal"))return{language:m,value:nt(R),illegal:!0,relevance:0,_illegalBy:{message:y.message,index:Ze,context:R.slice(Ze-100,Ze+100),mode:y.mode,resultSoFar:st},_emitter:Y};if($)return{language:m,value:nt(R),illegal:!1,relevance:0,errorRaised:y,_emitter:Y,_top:C};throw y}}function tt(m){const R={value:nt(m),illegal:!1,relevance:0,_top:w,_emitter:new b.__emitter(b)};return R._emitter.addText(m),R}function rt(m,R){R=R||b.languages||Object.keys(d);const I=tt(m),B=R.filter(ke).filter($t).map(ae=>sn(ae,m,!1));B.unshift(I);const G=B.sort((ae,be)=>{if(ae.relevance!==be.relevance)return be.relevance-ae.relevance;if(ae.language&&be.language){if(ke(ae.language).supersetOf===be.language)return 1;if(ke(be.language).supersetOf===ae.language)return-1}return 0}),[ge,Oe]=G,xn=ge;return xn.secondBest=Oe,xn}function Mo(m,R,I){const B=R&&h[R]||I;m.classList.add("hljs"),m.classList.add(`language-${B}`)}function ot(m){let R=null;const I=J(m);if(T(I))return;if(Rn("before:highlightElement",{el:m,language:I}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(b.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),b.throwUnescapedHTML))throw new Ro("One of your code blocks includes unescaped HTML.",m.innerHTML);R=m;const B=R.textContent,G=I?Z(B,{language:I,ignoreIllegals:!0}):rt(B);m.innerHTML=G.value,m.dataset.highlighted="yes",Mo(m,I,G.language),m.result={language:G.language,re:G.relevance,relevance:G.relevance},G.secondBest&&(m.secondBest={language:G.secondBest.language,relevance:G.secondBest.relevance}),Rn("after:highlightElement",{el:m,result:G,text:B})}function To(m){b=Vt(b,m)}const Fo=()=>{Dn(),Je("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function So(){Dn(),Je("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let qt=!1;function Dn(){function m(){Dn()}if(document.readyState==="loading"){qt||window.addEventListener("DOMContentLoaded",m,!1),qt=!0;return}document.querySelectorAll(b.cssSelector).forEach(ot)}function No(m,R){let I=null;try{I=R(s)}catch(B){if(Ke("Language definition for '{}' could not be registered.".replace("{}",m)),$)Ke(B);else throw B;I=w}I.name||(I.name=m),d[m]=I,I.rawDefinition=R.bind(null,s),I.aliases&&Ut(I.aliases,{languageName:m})}function Co(m){delete d[m];for(const R of Object.keys(h))h[R]===m&&delete h[R]}function Ao(){return Object.keys(d)}function ke(m){return m=(m||"").toLowerCase(),d[m]||d[h[m]]}function Ut(m,{languageName:R}){typeof m=="string"&&(m=[m]),m.forEach(I=>{h[I.toLowerCase()]=R})}function $t(m){const R=ke(m);return R&&!R.disableAutodetect}function ko(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=R=>{m["before:highlightBlock"](Object.assign({block:R.el},R))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=R=>{m["after:highlightBlock"](Object.assign({block:R.el},R))})}function Oo(m){ko(m),N.push(m)}function Io(m){const R=N.indexOf(m);R!==-1&&N.splice(R,1)}function Rn(m,R){const I=m;N.forEach(function(B){B[I]&&B[I](R)})}function Lo(m){return Je("10.7.0","highlightBlock will be removed entirely in v12.0"),Je("10.7.0","Please use highlightElement now."),ot(m)}Object.assign(s,{highlight:Z,highlightAuto:rt,highlightAll:Dn,highlightElement:ot,highlightBlock:Lo,configure:To,initHighlighting:Fo,initHighlightingOnLoad:So,registerLanguage:No,unregisterLanguage:Co,listLanguages:Ao,getLanguage:ke,registerAliases:Ut,autoDetection:$t,inherit:Vt,addPlugin:Oo,removePlugin:Io}),s.debugMode=function(){$=!1},s.safeMode=function(){$=!0},s.versionString=Do,s.regex={concat:F,lookahead:u,either:z,optional:v,anyNumberOfTimes:g};for(const m in wn)typeof wn[m]=="object"&&e(wn[m]);return Object.assign(s,wn),s},Ye=jt({});return Ye.newInstance=()=>jt({}),ut=Ye,Ye.HighlightJS=Ye,Ye.default=Ye,ut}var rm=tm();const dr=nm(rm);var om=me("<pre><code><!></code></pre>");function sm(e,n){const t=Vn(n,["children","$$slots","$$events","$$legacy"]),r=Vn(t,["code","highlighted","languageName","langtag"]);let i=Ve(n,"code",8),o=Ve(n,"highlighted",8),l=Ve(n,"languageName",8,"plaintext"),f=Ve(n,"langtag",8,!1);var a=om();let c;var p=W(a);At(p,1,"",null,{},{hljs:!0});var _=W(p);{var u=v=>{var F=Ct(),A=Zn(F);ii(A,o),ee(v,F)},g=v=>{var F=Ys();De(()=>qe(F,i())),ee(v,F)};yt(_,v=>{o()?v(u):v(g,!1)})}De(v=>c=mi(a,c,{"data-language":l(),...r,[fn]:v},"svelte-1w9vok"),[()=>({langtag:f()})],St),ee(e,a)}function im(e,n){const t=Vn(n,["children","$$slots","$$events","$$legacy"]),r=Vn(t,["language","code","langtag"]);hn(n,!1);let i=Ve(n,"language",8),o=Ve(n,"code",8),l=Ve(n,"langtag",8,!1);const f=wi();let a=$n("");Ei(()=>{O(a)&&f("highlight",{highlighted:O(a)})}),Ss(()=>(gt(i()),gt(o())),()=>{dr.registerLanguage(i().name,i().register),ce(a,dr.highlight(o(),{language:i().name}).value)}),Ns(),kt();var c=Ct(),p=Zn(c);ai(p,n,"default",{get highlighted(){return O(a)}},_=>{sm(_,yi(()=>r,{get languageName(){return i().name},get langtag(){return l()},get highlighted(){return O(a)},get code(){return o()}}))}),ee(e,c),yn()}function am(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",o={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},l={keywords:o,illegal:/<\//},f={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},a={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},c={className:"subst",begin:/\$\(/,end:/\)/,keywords:o},p={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,c,p],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},u={className:"string",contains:[e.BACKSLASH_ESCAPE,c,p],begin:"`",end:"`"},g={className:"meta",begin:"@"+n},v={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return l.name="Julia",l.contains=[f,a,_,u,g,v,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],c.contains=l.contains,l}const lm={name:"julia",register:am};var cm=me('<td class="svelte-mm5qum"> <div class="model-definition svelte-mm5qum"><!> <button id="copy" class="svelte-mm5qum">Copy to clipboard</button></div></td>');function fm(e,n){let t;function r(){navigator.clipboard.writeText(n.definition);let c=t.offsetWidth;t.style.width=c+"px",t.textContent="Copied!",t.disabled=!0,setTimeout(()=>{t.textContent="Copy to clipboard",t.style.width=null,t.disabled=!1},2e3)}var i=cm(),o=W(i),l=ve(o),f=W(l);im(f,{language:lm,get code(){return n.definition}});var a=ve(f,2);a.__click=r,pi(a,c=>t=c,()=>t),De(()=>qe(o,`${n.name??""} `)),ee(e,i)}jr(["click"]);var um=me('<th class="svelte-1y8c38"> </th>'),dm=me('<td class="svelte-1y8c38"> </td>'),_m=me('<a class="issue svelte-1y8c38" target="_blank">(?)</a>'),mm=me('<td class="svelte-1y8c38"><!> <span> </span></td>'),pm=me('<tr class="svelte-1y8c38"><!><!></tr>'),gm=me('<table id="results" class="svelte-1y8c38"><thead><tr class="svelte-1y8c38"><th class="svelte-1y8c38">Model name \\\\ AD type</th><!></tr></thead><tbody></tbody></table>');function vm(e,n){hn(n,!0);const t=[...n.data.keys()],r=n.data.get(t[0]).keys(),i="https://github.com/EnzymeAD/Enzyme.jl/issues/1995",l={assume_mvnormal__EnzymeForward:i,assume_wishart__EnzymeForward:i,multithreaded__Mooncake:"https://github.com/chalk-lab/Mooncake.jl/issues/570"};var f=gm(),a=W(f),c=W(a),p=ve(W(c));dn(p,17,()=>r,un,(u,g)=>{var v=um(),F=W(v);De(()=>qe(F,O(g))),ee(u,v)});var _=ve(a);dn(_,21,()=>wt(n.data),un,(u,g)=>{let v=()=>O(g)[0],F=()=>O(g)[1];var A=pm(),z=W(A);fm(z,{get name(){return v()},get definition(){return n.modelDefinitions[v()]}});var K=ve(z);dn(K,17,()=>wt(F()),un,(M,E)=>{let x=()=>O(E)[0],X=()=>O(E)[1];var S=Ct(),U=Zn(S);{var ie=ne=>{var pe=dm(),Ce=W(pe);De(ue=>qe(Ce,ue),[()=>X().toFixed(3)]),ee(ne,pe)},Ne=ne=>{var pe=mm(),Ce=W(pe);{var ue=Ae=>{var ye=_m();De(()=>bt(ye,"href",l[`${v()}__${x()}`])),ee(Ae,ye)};yt(Ce,Ae=>{l[`${v()}__${x()}`]&&Ae(ue)})}var He=ve(Ce,2),Xe=W(He);De(()=>{At(He,1,$r(X()),"svelte-1y8c38"),qe(Xe,X())}),ee(ne,pe)};yt(U,ne=>{typeof X()=="number"?ne(ie):ne(Ne,!1)})}ee(M,S)}),ee(u,A)}),ee(e,f),yn()}var hm=me("<h3> </h3> <!>",1),ym=me(`<div id="main-wrapper" class="svelte-3oks6t"><main class="svelte-3oks6t"><h1>Turing AD tests</h1> <p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p> <p>This page is intended as a brief overview of how different AD
            backends perform on a variety of Turing.jl models. Note that the
            inclusion of any AD backend here does not imply an endorsement from
            the Turing team; this table is purely for information.</p> <p>The scope of this table is limited to Turing models. It does not
            purport to show which AD backend is better for tasks that do not
            involve Turing models. If you are interested in more general
            comparisons of AD backends, you may wish to check out something like <a href="https://github.com/gradbench/gradbench" target="_blank">GradBench</a>.</p> <ul class="notes svelte-3oks6t"><li>You can hover over the model names to see their definitions.</li> <li>The definitions of the AD types can be found in <a href="https://github.com/TuringLang/ADTests/blob/main/main.jl" target="_blank">the source code</a>.</li> <li><b>Numbers</b> indicate the time taken to calculate the gradient
                of the log density of the model using the specified AD type,
                divided by the time taken to calculate the log density itself
                (in AD speak, the primal). Basically: <b>smaller means faster.</b></li> <li>'<span class="wrong">wrong</span>' means that AD ran but the
                result was not correct. If this happens you should be very wary!
                Note that this is done by comparing against the result obtained
                using FiniteDifferences, i.e., FiniteDifferences is by
                definition always 'correct'.</li> <li>'<span class="error">error</span>' means that AD didn't run.</li> <li>Some of the 'wrong' or 'error' entries have question marks next
                to them. These will link to a GitHub issue or other page that
                describes the problem.</li></ul> <div class="warning svelte-3oks6t"><b>Note: The results here are run with Julia 1.11. Enzyme
                currently does not work on Julia 1.12.</b></div> <h2>Results</h2> <p><a href="adtests.json" target="_blank" download="">Download the raw data (JSON)</a></p> <!> <h2>Manifest</h2> <p>The tests above were run with the following package versions:</p> <!></main></div>`);function bm(e,n){hn(n,!1);let t=$n(new Map);for(const[f,a]of Object.entries(Ra)){let c=a.__category__;delete a.__category__;let p=new Map;for(const[_,u]of Object.entries(a))p.set(_,u);O(t).has(c)||O(t).set(c,new Map),O(t).get(c).set(f,p)}ce(t,new Map([...O(t).entries()].sort())),console.log(O(t)),kt();var r=ym(),i=W(r),o=ve(W(i),16);dn(o,1,()=>O(t).entries(),un,(f,a)=>{let c=()=>O(a)[0],p=()=>O(a)[1];var _=hm(),u=Zn(_),g=W(u),v=ve(u,2);vm(v,{get data(){return p()},modelDefinitions:Rl}),De(()=>qe(g,c())),ee(f,_)});var l=ve(o,6);em(l,{}),ee(e,r),yn()}Qs(bm,{target:document.getElementById("app")});
