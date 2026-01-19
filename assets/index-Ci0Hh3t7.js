(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const Xt=!1;var Bn=Array.isArray,$o=Array.prototype.indexOf,Et=Array.from,Ho=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,mr=Object.getOwnPropertyDescriptors,Zo=Object.prototype,Ko=Array.prototype,Dt=Object.getPrototypeOf,Jt=Object.isExtensible;function an(e){return typeof e=="function"}function Go(e){return e()}function dt(e){for(var n=0;n<e.length;n++)e[n]()}const he=2,pr=4,jn=8,Rt=16,Se=32,tn=64,Cn=128,ue=256,kn=512,oe=1024,Re=2048,$e=4096,Te=8192,qn=16384,Wo=32768,xt=65536,Xo=1<<17,Jo=1<<19,gr=1<<20,_t=1<<21,je=Symbol("$state"),vr=Symbol("legacy props"),Yo=Symbol("");function hr(e){return e===this.v}function Qo(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Mt(e){return!Qo(e,this.v)}function es(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ns(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ts(e){throw new Error("https://svelte.dev/e/effect_orphan")}function rs(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function os(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function ss(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function is(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function as(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ls(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let vn=!1,cs=!1;function us(){vn=!0}const Tt=1,Ft=2,br=4,fs=8,ds=16,_s=1,ms=2,yr=4,ps=8,gs=16,vs=1,hs=2,se=Symbol(),bs="http://www.w3.org/1999/xhtml",ys="@attach";function wr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let q=null;function Yt(e){q=e}function hn(e,n=!1,t){var r=q={p:q,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};vn&&!n&&(q.l={s:null,u:null,r1:[],r2:en(!1)}),Ms(()=>{r.d=!0})}function bn(e){const n=q;if(n!==null){const l=n.e;if(l!==null){var t=P,r=V;n.e=null;try{for(var i=0;i<l.length;i++){var o=l[i];Ue(o.effect),xe(o.reaction),Gn(o.fn)}}finally{Ue(t),xe(r)}}q=n.p,n.m=!0}return{}}function Un(){return!vn||q!==null&&q.l===null}function Ge(e){if(typeof e!="object"||e===null||je in e)return e;const n=Dt(e);if(n!==Zo&&n!==Ko)return e;var t=new Map,r=Bn(e),i=Ie(0),o=V,l=u=>{var a=V;xe(o);var c=u();return xe(a),c};return r&&t.set("length",Ie(e.length)),new Proxy(e,{defineProperty(u,a,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&is();var p=t.get(a);return p===void 0?(p=l(()=>Ie(c.value)),t.set(a,p)):ce(p,l(()=>Ge(c.value))),!0},deleteProperty(u,a){var c=t.get(a);if(c===void 0)a in u&&(t.set(a,l(()=>Ie(se))),lt(i));else{if(r&&typeof a=="string"){var p=t.get("length"),_=Number(a);Number.isInteger(_)&&_<p.v&&ce(p,_)}ce(c,se),lt(i)}return!0},get(u,a,c){var g;if(a===je)return e;var p=t.get(a),_=a in u;if(p===void 0&&(!_||(g=Be(u,a))!=null&&g.writable)&&(p=l(()=>Ie(Ge(_?u[a]:se))),t.set(a,p)),p!==void 0){var f=O(p);return f===se?void 0:f}return Reflect.get(u,a,c)},getOwnPropertyDescriptor(u,a){var c=Reflect.getOwnPropertyDescriptor(u,a);if(c&&"value"in c){var p=t.get(a);p&&(c.value=O(p))}else if(c===void 0){var _=t.get(a),f=_==null?void 0:_.v;if(_!==void 0&&f!==se)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return c},has(u,a){var f;if(a===je)return!0;var c=t.get(a),p=c!==void 0&&c.v!==se||Reflect.has(u,a);if(c!==void 0||P!==null&&(!p||(f=Be(u,a))!=null&&f.writable)){c===void 0&&(c=l(()=>Ie(p?Ge(u[a]):se)),t.set(a,c));var _=O(c);if(_===se)return!1}return p},set(u,a,c,p){var Z;var _=t.get(a),f=a in u;if(r&&a==="length")for(var g=c;g<_.v;g+=1){var v=t.get(g+"");v!==void 0?ce(v,se):g in u&&(v=l(()=>Ie(se)),t.set(g+"",v))}_===void 0?(!f||(Z=Be(u,a))!=null&&Z.writable)&&(_=l(()=>Ie(void 0)),ce(_,l(()=>Ge(c))),t.set(a,_)):(f=_.v!==se,ce(_,l(()=>Ge(c))));var F=Reflect.getOwnPropertyDescriptor(u,a);if(F!=null&&F.set&&F.set.call(p,c),!f){if(r&&typeof a=="string"){var k=t.get("length"),z=Number(a);Number.isInteger(z)&&z>=k.v&&ce(k,z+1)}lt(i)}return!0},ownKeys(u){O(i);var a=Reflect.ownKeys(u).filter(_=>{var f=t.get(_);return f===void 0||f.v!==se});for(var[c,p]of t)p.v!==se&&!(c in u)&&a.push(c);return a},setPrototypeOf(){as()}})}function lt(e,n=1){ce(e,e.v+n)}function _n(e){var n=he|Re,t=V!==null&&(V.f&he)!==0?V:null;return P===null||t!==null&&(t.f&ue)!==0?n|=ue:P.f|=gr,{ctx:q,deps:null,effects:null,equals:hr,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??P}}function St(e){const n=_n(e);return n.equals=Mt,n}function Er(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)Fe(n[t])}}function ws(e){for(var n=e.parent;n!==null;){if((n.f&he)===0)return n;n=n.parent}return null}function Dr(e){var n,t=P;Ue(ws(e));try{Er(e),n=Vr(e)}finally{Ue(t)}return n}function Rr(e){var n=Dr(e),t=(ze||(e.f&ue)!==0)&&e.deps!==null?$e:oe;_e(e,t),e.equals(n)||(e.v=n,e.wv=Pr())}const mn=new Map;function en(e,n){var t={f:0,v:e,reactions:null,equals:hr,rv:0,wv:0};return t}function Ie(e,n){const t=en(e);return As(t),t}function $n(e,n=!1){var r;const t=en(e);return n||(t.equals=Mt),vn&&q!==null&&q.l!==null&&((r=q.l).s??(r.s=[])).push(t),t}function ce(e,n,t=!1){V!==null&&!Ee&&Un()&&(V.f&(he|Rt))!==0&&!(re!=null&&re.includes(e))&&ls();let r=t?Ge(n):n;return mt(e,r)}function mt(e,n){if(!e.equals(n)){var t=e.v;yn?mn.set(e,n):mn.set(e,t),e.v=n,(e.f&he)!==0&&((e.f&Re)!==0&&Dr(e),_e(e,(e.f&ue)===0?oe:$e)),e.wv=Pr(),xr(e,Re),Un()&&P!==null&&(P.f&oe)!==0&&(P.f&(Se|tn))===0&&(de===null?Os([e]):de.push(e))}return n}function Qt(e,n=1){var t=O(e),r=n===1?t++:t--;return ce(e,t),r}function xr(e,n){var t=e.reactions;if(t!==null)for(var r=Un(),i=t.length,o=0;o<i;o++){var l=t[o],u=l.f;(u&Re)===0&&(!r&&l===P||(_e(l,n),(u&(oe|ue))!==0&&((u&he)!==0?xr(l,$e):et(l))))}}let Es=!1;var er,Mr,Tr,Fr;function Ds(){if(er===void 0){er=window,Mr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Tr=Be(n,"firstChild").get,Fr=Be(n,"nextSibling").get,Jt(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Jt(t)&&(t.__t=void 0)}}function Hn(e=""){return document.createTextNode(e)}function Pe(e){return Tr.call(e)}function Zn(e){return Fr.call(e)}function W(e,n){return Pe(e)}function Kn(e,n){{var t=Pe(e);return t instanceof Comment&&t.data===""?Zn(t):t}}function ve(e,n=1,t=!1){let r=e;for(;n--;)r=Zn(r);return r}function Rs(e){e.textContent=""}function Sr(e){P===null&&V===null&&ts(),V!==null&&(V.f&ue)!==0&&P===null&&ns(),yn&&es()}function xs(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function rn(e,n,t,r=!0){var i=P,o={ctx:q,deps:null,nodes_start:null,nodes_end:null,f:e|Re,first:null,fn:n,last:null,next:null,parent:i,prev:null,teardown:null,transitions:null,wv:0};if(t)try{Qn(o),o.f|=Wo}catch(a){throw Fe(o),a}else n!==null&&et(o);var l=t&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&(gr|Cn))===0;if(!l&&r&&(i!==null&&xs(o,i),V!==null&&(V.f&he)!==0)){var u=V;(u.effects??(u.effects=[])).push(o)}return o}function Ms(e){const n=rn(jn,null,!1);return _e(n,oe),n.teardown=e,n}function nr(e){Sr();var n=P!==null&&(P.f&Se)!==0&&q!==null&&!q.m;if(n){var t=q;(t.e??(t.e=[])).push({fn:e,effect:P,reaction:V})}else{var r=Gn(e);return r}}function Ts(e){return Sr(),Wn(e)}function Fs(e){const n=rn(tn,e,!0);return(t={})=>new Promise(r=>{t.outro?An(n,()=>{Fe(n),r(void 0)}):(Fe(n),r(void 0))})}function Gn(e){return rn(pr,e,!1)}function Ss(e,n){var t=q,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=Wn(()=>{e(),!r.ran&&(r.ran=!0,ce(t.l.r2,!0),pn(n))})}function Ns(){var e=q;Wn(()=>{if(O(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&oe)!==0&&_e(t,$e),on(t)&&Qn(t),n.ran=!1}e.l.r2.v=!1}})}function Wn(e){return rn(jn,e,!0)}function De(e,n=[],t=_n){const r=n.map(t);return Xn(()=>e(...r.map(O)))}function Xn(e,n=0){return rn(jn|Rt|n,e,!0)}function nn(e,n=!0){return rn(jn|Se,e,!0,n)}function Nr(e){var n=e.teardown;if(n!==null){const t=yn,r=V;tr(!0),xe(null);try{n.call(null)}finally{tr(t),xe(r)}}}function Cr(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&tn)!==0?t.parent=null:Fe(t,n),t=r}}function Cs(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&Se)===0&&Fe(n),n=t}}function Fe(e,n=!0){var t=!1;(n||(e.f&Jo)!==0)&&e.nodes_start!==null&&(kr(e.nodes_start,e.nodes_end),t=!0),Cr(e,n&&!t),zn(e,0),_e(e,qn);var r=e.transitions;if(r!==null)for(const o of r)o.stop();Nr(e);var i=e.parent;i!==null&&i.first!==null&&Ar(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function kr(e,n){for(;e!==null;){var t=e===n?null:Zn(e);e.remove(),e=t}}function Ar(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function An(e,n){var t=[];Nt(e,t,!0),Or(t,()=>{Fe(e),n&&n()})}function Or(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var i of e)i.out(r)}else n()}function Nt(e,n,t){if((e.f&Te)===0){if(e.f^=Te,e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&n.push(l);for(var r=e.first;r!==null;){var i=r.next,o=(r.f&xt)!==0||(r.f&Se)!==0;Nt(r,n,o?t:!1),r=i}}}function On(e){Ir(e,!0)}function Ir(e,n){if((e.f&Te)!==0){e.f^=Te,(e.f&oe)===0&&(e.f^=oe),on(e)&&(_e(e,Re),et(e));for(var t=e.first;t!==null;){var r=t.next,i=(t.f&xt)!==0||(t.f&Se)!==0;Ir(t,i?n:!1),t=r}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||n)&&o.in()}}let In=[];function ks(){var e=In;In=[],dt(e)}function Jn(e){In.length===0&&queueMicrotask(ks),In.push(e)}let Sn=!1,pt=!1,Ln=null,We=!1,yn=!1;function tr(e){yn=e}let Nn=[];let V=null,Ee=!1;function xe(e){V=e}let P=null;function Ue(e){P=e}let re=null;function As(e){V!==null&&V.f&_t&&(re===null?re=[e]:re.push(e))}let te=null,le=0,de=null;function Os(e){de=e}let Lr=1,Pn=0,ze=!1;function Pr(){return++Lr}function on(e){var _;var n=e.f;if((n&Re)!==0)return!0;if((n&$e)!==0){var t=e.deps,r=(n&ue)!==0;if(t!==null){var i,o,l=(n&kn)!==0,u=r&&P!==null&&!ze,a=t.length;if(l||u){var c=e,p=c.parent;for(i=0;i<a;i++)o=t[i],(l||!((_=o==null?void 0:o.reactions)!=null&&_.includes(c)))&&(o.reactions??(o.reactions=[])).push(c);l&&(c.f^=kn),u&&p!==null&&(p.f&ue)===0&&(c.f^=ue)}for(i=0;i<a;i++)if(o=t[i],on(o)&&Rr(o),o.wv>e.wv)return!0}(!r||P!==null&&!ze)&&_e(e,oe)}return!1}function Is(e,n){for(var t=n;t!==null;){if((t.f&Cn)!==0)try{t.fn(e);return}catch{t.f^=Cn}t=t.parent}throw Sn=!1,e}function rr(e){return(e.f&qn)===0&&(e.parent===null||(e.parent.f&Cn)===0)}function Yn(e,n,t,r){if(Sn){if(t===null&&(Sn=!1),rr(n))throw e;return}if(t!==null&&(Sn=!0),Is(e,n),rr(n))throw e}function zr(e,n,t=!0){var r=e.reactions;if(r!==null)for(var i=0;i<r.length;i++){var o=r[i];re!=null&&re.includes(e)||((o.f&he)!==0?zr(o,n,!1):n===o&&(t?_e(o,Re):(o.f&oe)!==0&&_e(o,$e),et(o)))}}function Vr(e){var g;var n=te,t=le,r=de,i=V,o=ze,l=re,u=q,a=Ee,c=e.f;te=null,le=0,de=null,ze=(c&ue)!==0&&(Ee||!We||V===null),V=(c&(Se|tn))===0?e:null,re=null,Yt(e.ctx),Ee=!1,Pn++,e.f|=_t;try{var p=(0,e.fn)(),_=e.deps;if(te!==null){var f;if(zn(e,le),_!==null&&le>0)for(_.length=le+te.length,f=0;f<te.length;f++)_[le+f]=te[f];else e.deps=_=te;if(!ze)for(f=le;f<_.length;f++)((g=_[f]).reactions??(g.reactions=[])).push(e)}else _!==null&&le<_.length&&(zn(e,le),_.length=le);if(Un()&&de!==null&&!Ee&&_!==null&&(e.f&(he|$e|Re))===0)for(f=0;f<de.length;f++)zr(de[f],e);return i!==null&&i!==e&&(Pn++,de!==null&&(r===null?r=de:r.push(...de))),p}finally{te=n,le=t,de=r,V=i,ze=o,re=l,Yt(u),Ee=a,e.f^=_t}}function Ls(e,n){let t=n.reactions;if(t!==null){var r=$o.call(t,e);if(r!==-1){var i=t.length-1;i===0?t=n.reactions=null:(t[r]=t[i],t.pop())}}t===null&&(n.f&he)!==0&&(te===null||!te.includes(n))&&(_e(n,$e),(n.f&(ue|kn))===0&&(n.f^=kn),Er(n),zn(n,0))}function zn(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Ls(e,t[r])}function Qn(e){var n=e.f;if((n&qn)===0){_e(e,oe);var t=P,r=q,i=We;P=e,We=!0;try{(n&Rt)!==0?Cs(e):Cr(e),Nr(e);var o=Vr(e);e.teardown=typeof o=="function"?o:null,e.wv=Lr;var l=e.deps,u;Xt&&cs&&e.f&Re}catch(a){Yn(a,e,t,r||e.ctx)}finally{We=i,P=t}}}function Ps(){try{rs()}catch(e){if(Ln!==null)Yn(e,Ln,null);else throw e}}function zs(){var e=We;try{var n=0;for(We=!0;Nn.length>0;){n++>1e3&&Ps();var t=Nn,r=t.length;Nn=[];for(var i=0;i<r;i++){var o=Bs(t[i]);Vs(o)}mn.clear()}}finally{pt=!1,We=e,Ln=null}}function Vs(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(qn|Te))===0)try{on(r)&&(Qn(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Ar(r):r.fn=null))}catch(i){Yn(i,r,null,r.ctx)}}}function et(e){pt||(pt=!0,queueMicrotask(zs));for(var n=Ln=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(tn|Se))!==0){if((t&oe)===0)return;n.f^=oe}}Nn.push(n)}function Bs(e){for(var n=[],t=e;t!==null;){var r=t.f,i=(r&(Se|tn))!==0,o=i&&(r&oe)!==0;if(!o&&(r&Te)===0){if((r&pr)!==0)n.push(t);else if(i)t.f^=oe;else try{on(t)&&Qn(t)}catch(a){Yn(a,t,null,t.ctx)}var l=t.first;if(l!==null){t=l;continue}}var u=t.parent;for(t=t.next;t===null&&u!==null;)t=u.next,u=u.parent}return n}function O(e){var n=e.f,t=(n&he)!==0;if(V!==null&&!Ee){if(!(re!=null&&re.includes(e))){var r=V.deps;e.rv<Pn&&(e.rv=Pn,te===null&&r!==null&&r[le]===e?le++:te===null?te=[e]:(!ze||!te.includes(e))&&te.push(e))}}else if(t&&e.deps===null&&e.effects===null){var i=e,o=i.parent;o!==null&&(o.f&ue)===0&&(i.f^=ue)}return t&&(i=e,on(i)&&Rr(i)),yn&&mn.has(e)?mn.get(e):e.v}function pn(e){var n=Ee;try{return Ee=!0,e()}finally{Ee=n}}const js=-7169;function _e(e,n){e.f=e.f&js|n}function gt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(je in e)vt(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&je in t&&vt(t)}}}function vt(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{vt(e[r],n)}catch{}const t=Dt(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=mr(t);for(let i in r){const o=r[i].get;if(o)try{o.call(e)}catch{}}}}}function qs(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Us=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function $s(e){return Us.includes(e)}const Hs={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Zs(e){return e=e.toLowerCase(),Hs[e]??e}const Ks=["touchstart","touchmove"];function Gs(e){return Ks.includes(e)}function Ws(e,n){if(n){const t=document.body;e.autofocus=!0,Jn(()=>{document.activeElement===t&&e.focus()})}}function Xs(e){var n=V,t=P;xe(null),Ue(null);try{return e()}finally{xe(n),Ue(t)}}const Br=new Set,ht=new Set;function Js(e,n,t,r={}){function i(o){if(r.capture||cn.call(n,o),!o.cancelBubble)return Xs(()=>t==null?void 0:t.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Jn(()=>{n.addEventListener(e,i,r)}):n.addEventListener(e,i,r),i}function jr(e){for(var n=0;n<e.length;n++)Br.add(e[n]);for(var t of ht)t(e)}function cn(e){var Z;var n=this,t=n.ownerDocument,r=e.type,i=((Z=e.composedPath)==null?void 0:Z.call(e))||[],o=i[0]||e.target,l=0,u=e.__root;if(u){var a=i.indexOf(u);if(a!==-1&&(n===document||n===window)){e.__root=n;return}var c=i.indexOf(n);if(c===-1)return;a<=c&&(l=a)}if(o=i[l]||e.target,o!==n){Ho(e,"currentTarget",{configurable:!0,get(){return o||t}});var p=V,_=P;xe(null),Ue(null);try{for(var f,g=[];o!==null;){var v=o.assignedSlot||o.parentNode||o.host||null;try{var F=o["__"+r];if(F!=null&&(!o.disabled||e.target===o))if(Bn(F)){var[k,...z]=F;k.apply(o,[e,...z])}else F.call(o,e)}catch(M){f?g.push(M):f=M}if(e.cancelBubble||v===n||v===null)break;o=v}if(f){for(let M of g)queueMicrotask(()=>{throw M});throw f}}finally{e.__root=n,delete e.currentTarget,xe(p),Ue(_)}}}function qr(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function gn(e,n){var t=P;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function me(e,n){var t=(n&vs)!==0,r=(n&hs)!==0,i,o=!e.startsWith("<!>");return()=>{i===void 0&&(i=qr(o?e:"<!>"+e),t||(i=Pe(i)));var l=r||Mr?document.importNode(i,!0):i.cloneNode(!0);if(t){var u=Pe(l),a=l.lastChild;gn(u,a)}else gn(l,l);return l}}function Ys(e=""){{var n=Hn(e+"");return gn(n,n),n}}function Ct(){var e=document.createDocumentFragment(),n=document.createComment(""),t=Hn();return e.append(n,t),gn(n,t),e}function ee(e,n){e!==null&&e.before(n)}function qe(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function Qs(e,n){return ei(e,n)}const Qe=new Map;function ei(e,{target:n,anchor:t,props:r={},events:i,context:o,intro:l=!0}){Ds();var u=new Set,a=_=>{for(var f=0;f<_.length;f++){var g=_[f];if(!u.has(g)){u.add(g);var v=Gs(g);n.addEventListener(g,cn,{passive:v});var F=Qe.get(g);F===void 0?(document.addEventListener(g,cn,{passive:v}),Qe.set(g,1)):Qe.set(g,F+1)}}};a(Et(Br)),ht.add(a);var c=void 0,p=Fs(()=>{var _=t??n.appendChild(Hn());return nn(()=>{if(o){hn({});var f=q;f.c=o}i&&(r.$$events=i),c=e(_,r)||{},o&&bn()}),()=>{var v;for(var f of u){n.removeEventListener(f,cn);var g=Qe.get(f);--g===0?(document.removeEventListener(f,cn),Qe.delete(f)):Qe.set(f,g)}ht.delete(a),_!==t&&((v=_.parentNode)==null||v.removeChild(_))}});return ni.set(c,p),c}let ni=new WeakMap;function bt(e,n,[t,r]=[0,0]){var i=e,o=null,l=null,u=se,a=t>0?xt:0,c=!1;const p=(f,g=!0)=>{c=!0,_(g,f)},_=(f,g)=>{u!==(u=f)&&(u?(o?On(o):g&&(o=nn(()=>g(i))),l&&An(l,()=>{l=null})):(l?On(l):g&&(l=nn(()=>g(i,[t+1,r]))),o&&An(o,()=>{o=null})))};Xn(()=>{c=!1,n(p),c||_(null,null)},a)}function fn(e,n){return n}function ti(e,n,t,r){for(var i=[],o=n.length,l=0;l<o;l++)Nt(n[l].e,i,!0);var u=o>0&&i.length===0&&t!==null;if(u){var a=t.parentNode;Rs(a),a.append(t),r.clear(),Le(e,n[0].prev,n[o-1].next)}Or(i,()=>{for(var c=0;c<o;c++){var p=n[c];u||(r.delete(p.k),Le(e,p.prev,p.next)),Fe(p.e,!u)}})}function dn(e,n,t,r,i,o=null){var l=e,u={flags:n,items:new Map,first:null},a=(n&br)!==0;if(a){var c=e;l=c.appendChild(Hn())}var p=null,_=!1,f=St(()=>{var g=t();return Bn(g)?g:g==null?[]:Et(g)});Xn(()=>{var g=O(f),v=g.length;_&&v===0||(_=v===0,ri(g,u,l,i,n,r,t),o!==null&&(v===0?p?On(p):p=nn(()=>o(l)):p!==null&&An(p,()=>{p=null})),O(f))})}function ri(e,n,t,r,i,o,l){var fe,He,Xe,ke;var u=(i&fs)!==0,a=(i&(Tt|Ft))!==0,c=e.length,p=n.items,_=n.first,f=_,g,v=null,F,k=[],z=[],Z,M,E,x;if(u)for(x=0;x<c;x+=1)Z=e[x],M=o(Z,x),E=p.get(M),E!==void 0&&((fe=E.a)==null||fe.measure(),(F??(F=new Set)).add(E));for(x=0;x<c;x+=1){if(Z=e[x],M=o(Z,x),E=p.get(M),E===void 0){var X=f?f.e.nodes_start:t;v=si(X,n,v,v===null?n.first:v.next,Z,M,x,r,i,l),p.set(M,v),k=[],z=[],f=v.next;continue}if(a&&oi(E,Z,x,i),(E.e.f&Te)!==0&&(On(E.e),u&&((He=E.a)==null||He.unfix(),(F??(F=new Set)).delete(E))),E!==f){if(g!==void 0&&g.has(E)){if(k.length<z.length){var S=z[0],U;v=S.prev;var ie=k[0],Ne=k[k.length-1];for(U=0;U<k.length;U+=1)or(k[U],S,t);for(U=0;U<z.length;U+=1)g.delete(z[U]);Le(n,ie.prev,Ne.next),Le(n,v,ie),Le(n,Ne,S),f=S,v=Ne,x-=1,k=[],z=[]}else g.delete(E),or(E,f,t),Le(n,E.prev,E.next),Le(n,E,v===null?n.first:v.next),Le(n,v,E),v=E;continue}for(k=[],z=[];f!==null&&f.k!==M;)(f.e.f&Te)===0&&(g??(g=new Set)).add(f),z.push(f),f=f.next;if(f===null)continue;E=f}k.push(E),v=E,f=E.next}if(f!==null||g!==void 0){for(var ne=g===void 0?[]:Et(g);f!==null;)(f.e.f&Te)===0&&ne.push(f),f=f.next;var pe=ne.length;if(pe>0){var Ce=(i&br)!==0&&c===0?t:null;if(u){for(x=0;x<pe;x+=1)(Xe=ne[x].a)==null||Xe.measure();for(x=0;x<pe;x+=1)(ke=ne[x].a)==null||ke.fix()}ti(n,ne,Ce,p)}}u&&Jn(()=>{var be;if(F!==void 0)for(E of F)(be=E.a)==null||be.apply()}),P.first=n.first&&n.first.e,P.last=v&&v.e}function oi(e,n,t,r){(r&Tt)!==0&&mt(e.v,n),(r&Ft)!==0?mt(e.i,t):e.i=t}function si(e,n,t,r,i,o,l,u,a,c){var p=(a&Tt)!==0,_=(a&ds)===0,f=p?_?$n(i):en(i):i,g=(a&Ft)===0?l:en(l),v={i:g,v:f,k:o,a:null,e:null,prev:t,next:r};try{return v.e=nn(()=>u(e,f,g,c),Es),v.e.prev=t&&t.e,v.e.next=r&&r.e,t===null?n.first=v:(t.next=v,t.e.next=v.e),r!==null&&(r.prev=v,r.e.prev=v.e),v}finally{}}function or(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,i=n?n.e.nodes_start:t,o=e.e.nodes_start;o!==r;){var l=Zn(o);i.before(o),o=l}}function Le(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function ii(e,n,t=!1,r=!1,i=!1){var o=e,l="";De(()=>{var u=P;if(l!==(l=n()??"")&&(u.nodes_start!==null&&(kr(u.nodes_start,u.nodes_end),u.nodes_start=u.nodes_end=null),l!=="")){var a=l+"";t?a=`<svg>${a}</svg>`:r&&(a=`<math>${a}</math>`);var c=qr(a);if((t||r)&&(c=Pe(c)),gn(Pe(c),c.lastChild),t||r)for(;Pe(c);)o.before(Pe(c));else o.before(c)}})}function ai(e,n,t,r,i){var u;var o=(u=n.$$slots)==null?void 0:u[t],l=!1;o===!0&&(o=n.children,l=!0),o===void 0?i!==null&&i(e):o(e,l?()=>r:r)}function li(e,n){var t=void 0,r;Xn(()=>{t!==(t=n())&&(r&&(Fe(r),r=null),t&&(r=nn(()=>{Gn(()=>t(e))})))})}function Ur(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=Ur(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function ci(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=Ur(e))&&(r&&(r+=" "),r+=n);return r}function $r(e){return typeof e=="object"?ci(e):e??""}const sr=[...` 	
\r\f \v\uFEFF`];function ui(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var i in t)if(t[i])r=r?r+" "+i:i;else if(r.length)for(var o=i.length,l=0;(l=r.indexOf(i,l))>=0;){var u=l+o;(l===0||sr.includes(r[l-1]))&&(u===r.length||sr.includes(r[u]))?r=(l===0?"":r.substring(0,l))+r.substring(u+1):l=u}}return r===""?null:r}function ir(e,n=!1){var t=n?" !important;":";",r="";for(var i in e){var o=e[i];o!=null&&o!==""&&(r+=" "+i+": "+o+t)}return r}function ct(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function fi(e,n){if(n){var t="",r,i;if(Array.isArray(n)?(r=n[0],i=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,l=0,u=!1,a=[];r&&a.push(...Object.keys(r).map(ct)),i&&a.push(...Object.keys(i).map(ct));var c=0,p=-1;const F=e.length;for(var _=0;_<F;_++){var f=e[_];if(u?f==="/"&&e[_-1]==="*"&&(u=!1):o?o===f&&(o=!1):f==="/"&&e[_+1]==="*"?u=!0:f==='"'||f==="'"?o=f:f==="("?l++:f===")"&&l--,!u&&o===!1&&l===0){if(f===":"&&p===-1)p=_;else if(f===";"||_===F-1){if(p!==-1){var g=ct(e.substring(c,p).trim());if(!a.includes(g)){f!==";"&&_++;var v=e.substring(c,_).trim();t+=" "+v+";"}}c=_+1,p=-1}}}}return r&&(t+=ir(r)),i&&(t+=ir(i,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function kt(e,n,t,r,i,o){var l=e.__className;if(l!==t||l===void 0){var u=ui(t,r,o);u==null?e.removeAttribute("class"):n?e.className=u:e.setAttribute("class",u),e.__className=t}else if(o&&i!==o)for(var a in o){var c=!!o[a];(i==null||c!==!!i[a])&&e.classList.toggle(a,c)}return o}function ut(e,n={},t,r){for(var i in t){var o=t[i];n[i]!==o&&(t[i]==null?e.style.removeProperty(i):e.style.setProperty(i,o,r))}}function di(e,n,t,r){var i=e.__style;if(i!==n){var o=fi(n,r);o==null?e.removeAttribute("style"):e.style.cssText=o,e.__style=n}else r&&(Array.isArray(r)?(ut(e,t==null?void 0:t[0],r[0]),ut(e,t==null?void 0:t[1],r[1],"important")):ut(e,t,r));return r}const un=Symbol("class"),ln=Symbol("style"),Hr=Symbol("is custom element"),Zr=Symbol("is html");function _i(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function yt(e,n,t,r){var i=Kr(e);i[n]!==(i[n]=t)&&(n==="loading"&&(e[Yo]=t),t==null?e.removeAttribute(n):typeof t!="string"&&Gr(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function mi(e,n,t,r,i=!1){var o=Kr(e),l=o[Hr],u=!o[Zr],a=n||{},c=e.tagName==="OPTION";for(var p in n)p in t||(t[p]=null);t.class?t.class=$r(t.class):t.class=null,t[ln]&&(t.style??(t.style=null));var _=Gr(e);for(const M in t){let E=t[M];if(c&&M==="value"&&E==null){e.value=e.__value="",a[M]=E;continue}if(M==="class"){var f=e.namespaceURI==="http://www.w3.org/1999/xhtml";kt(e,f,E,r,n==null?void 0:n[un],t[un]),a[M]=E,a[un]=t[un];continue}if(M==="style"){di(e,E,n==null?void 0:n[ln],t[ln]),a[M]=E,a[ln]=t[ln];continue}var g=a[M];if(E!==g){a[M]=E;var v=M[0]+M[1];if(v!=="$$")if(v==="on"){const x={},X="$$"+M;let S=M.slice(2);var F=$s(S);if(qs(S)&&(S=S.slice(0,-7),x.capture=!0),!F&&g){if(E!=null)continue;e.removeEventListener(S,a[X],x),a[X]=null}if(E!=null)if(F)e[`__${S}`]=E,jr([S]);else{let U=function(ie){a[M].call(this,ie)};var Z=U;a[X]=Js(S,e,U,x)}else F&&(e[`__${S}`]=void 0)}else if(M==="style")yt(e,M,E);else if(M==="autofocus")Ws(e,!!E);else if(!l&&(M==="__value"||M==="value"&&E!=null))e.value=e.__value=E;else if(M==="selected"&&c)_i(e,E);else{var k=M;u||(k=Zs(k));var z=k==="defaultValue"||k==="defaultChecked";if(E==null&&!l&&!z)if(o[M]=null,k==="value"||k==="checked"){let x=e;const X=n===void 0;if(k==="value"){let S=x.defaultValue;x.removeAttribute(k),x.defaultValue=S,x.value=x.__value=X?S:null}else{let S=x.defaultChecked;x.removeAttribute(k),x.defaultChecked=S,x.checked=X?S:!1}}else e.removeAttribute(M);else z||_.includes(k)&&(l||typeof E!="string")?e[k]=E:typeof E!="function"&&yt(e,k,E)}}}for(let M of Object.getOwnPropertySymbols(t))M.description===ys&&li(e,()=>t[M]);return a}function Kr(e){return e.__attributes??(e.__attributes={[Hr]:e.nodeName.includes("-"),[Zr]:e.namespaceURI===bs})}var ar=new Map;function Gr(e){var n=ar.get(e.nodeName);if(n)return n;ar.set(e.nodeName,n=[]);for(var t,r=e,i=Element.prototype;i!==r;){t=mr(r);for(var o in t)t[o].set&&n.push(o);r=Dt(r)}return n}function lr(e,n){return e===n||(e==null?void 0:e[je])===n}function pi(e={},n,t,r){return Gn(()=>{var i,o;return Wn(()=>{i=o,o=[],pn(()=>{e!==t(...o)&&(n(e,...o),i&&lr(t(...i),e)&&n(null,...i))})}),()=>{Jn(()=>{o&&lr(t(...o),e)&&n(null,...o)})}}),e}function At(e=!1){const n=q,t=n.l.u;if(!t)return;let r=()=>gt(n.s);if(e){let i=0,o={};const l=_n(()=>{let u=!1;const a=n.s;for(const c in a)a[c]!==o[c]&&(o[c]=a[c],u=!0);return u&&i++,i});r=()=>O(l)}t.b.length&&Ts(()=>{cr(n,r),dt(t.b)}),nr(()=>{const i=pn(()=>t.m.map(Go));return()=>{for(const o of i)typeof o=="function"&&o()}}),t.a.length&&nr(()=>{cr(n,r),dt(t.a)})}function cr(e,n){if(e.l.s)for(const t of e.l.s)O(t);n()}let Fn=!1;function gi(e){var n=Fn;try{return Fn=!1,[e(),Fn]}finally{Fn=n}}const vi={get(e,n){if(!e.exclude.includes(n))return O(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=Ve({get[n](){return e.props[n]}},n,yr)),e.special[n](t),Qt(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),Qt(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function Vn(e,n){return new Proxy({props:e,exclude:n,special:{},version:en(0)},vi)}const hi={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(an(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let i=e.props[r];an(i)&&(i=i());const o=Be(i,n);if(o&&o.set)return o.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(an(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const i=Be(r,n);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,n){if(n===je||n===vr)return!1;for(let t of e.props)if(an(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(an(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function bi(...e){return new Proxy({props:e},hi)}function ur(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function Ve(e,n,t,r){var X;var i=(t&_s)!==0,o=!vn||(t&ms)!==0,l=(t&ps)!==0,u=(t&gs)!==0,a=!1,c;l?[c,a]=gi(()=>e[n]):c=e[n];var p=je in e||vr in e,_=l&&(((X=Be(e,n))==null?void 0:X.set)??(p&&n in e&&(S=>e[n]=S)))||void 0,f=r,g=!0,v=!1,F=()=>(v=!0,g&&(g=!1,u?f=pn(r):f=r),f);c===void 0&&r!==void 0&&(_&&o&&ss(),c=F(),_&&_(c));var k;if(o)k=()=>{var S=e[n];return S===void 0?F():(g=!0,v=!1,S)};else{var z=(i?_n:St)(()=>e[n]);z.f|=Xo,k=()=>{var S=O(z);return S!==void 0&&(f=void 0),S===void 0?f:S}}if((t&yr)===0)return k;if(_){var Z=e.$$legacy;return function(S,U){return arguments.length>0?((!o||!U||Z||a)&&_(U?k():S),S):k()}}var M=!1,E=$n(c),x=_n(()=>{var S=k(),U=O(E);return M?(M=!1,U):E.v=S});return l&&O(x),i||(x.equals=Mt),function(S,U){if(arguments.length>0){const ie=U?O(x):o&&l?Ge(S):S;if(!x.equals(ie)){if(M=!0,ce(E,ie),v&&f!==void 0&&(f=ie),ur(x))return S;pn(()=>O(x))}return S}return ur(x)?x.v:O(x)}}function yi(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function wi(){const e=q;return e===null&&wr(),(n,t,r)=>{var o;const i=(o=e.s.$$events)==null?void 0:o[n];if(i){const l=Bn(i)?i.slice():[i],u=yi(n,t,r);for(const a of l)a.call(e.x,u);return!u.defaultPrevented}return!0}}function Ei(e){q===null&&wr(),q.l===null&&os(),Di(q).a.push(e)}function Di(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Ri="5";var _r;typeof window<"u"&&((_r=window.__svelte??(window.__svelte={})).v??(_r.v=new Set)).add(Ri);us();const xi={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:"wrong",FiniteDifferences:100.86351270183373,ForwardDiff:2.1023783109138816,MooncakeFwd:22.094104130764006,MooncakeRvs:7.332256401443547,ReverseDiff:64.60834540508073,ReverseDiffCompiled:63.70357918330182,Zygote:717.6095568209953},Mi={__category__:"Distributions",EnzymeFwd:3.5267763684001796,EnzymeRvs:2.3676379229265154,FiniteDifferences:40.874502912118245,ForwardDiff:2.1290100626416097,MooncakeFwd:4.234060275632288,MooncakeRvs:3.4343321687392563,ReverseDiff:74.9125856251917,ReverseDiffCompiled:71.22378534413801,Zygote:3340.915310438166},Ti={__category__:"Base Julia features",EnzymeFwd:3.454246848042468,EnzymeRvs:1.7823529411764705,FiniteDifferences:80.2811225930318,ForwardDiff:2.04103191821489,MooncakeFwd:8.712595668751074,MooncakeRvs:4.936512158586607,ReverseDiff:61.11100730422965,ReverseDiffCompiled:61.865693430656925,Zygote:6589.713452685422},Fi={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:"error",FiniteDifferences:64.63113628872478,ForwardDiff:1.208292653908199,MooncakeFwd:566.0831116117041,MooncakeRvs:11.376813326749655,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Si={__category__:"DynamicPPL demo models",EnzymeFwd:5.339612365911475,EnzymeRvs:3.715126852424668,FiniteDifferences:82.71939316065912,ForwardDiff:1.553457579995462,MooncakeFwd:7.602822273073989,MooncakeRvs:5.262758005897277,ReverseDiff:138.0699839928398,ReverseDiffCompiled:137.2792154305522,Zygote:"error"},Ni={__category__:"DynamicPPL demo models",EnzymeFwd:4.129212283940258,EnzymeRvs:3.2548331252679534,FiniteDifferences:66.03691198088939,ForwardDiff:2.2948931944473787,MooncakeFwd:7.719480683897023,MooncakeRvs:5.487014253998555,ReverseDiff:102.10677749360613,ReverseDiffCompiled:106.10060457048552,Zygote:7815.467305389222},Ci={__category__:"DynamicPPL demo models",EnzymeFwd:8.179433548210122,EnzymeRvs:10.944043042493307,FiniteDifferences:83.52765869174387,ForwardDiff:1.739514094896648,MooncakeFwd:12.27880145072171,MooncakeRvs:4.974594189060156,ReverseDiff:56.92534186461311,ReverseDiffCompiled:67.33922044080924,Zygote:"error"},ki={__category__:"DynamicPPL demo models",EnzymeFwd:9.288236761456774,EnzymeRvs:12.935696872605696,FiniteDifferences:56.12424419738639,ForwardDiff:1.4791672821121553,MooncakeFwd:15.107063069843822,MooncakeRvs:7.1712090871426595,ReverseDiff:56.48265065629892,ReverseDiffCompiled:56.478433006876436,Zygote:"error"},Ai={__category__:"DynamicPPL demo models",EnzymeFwd:11.31518057551051,EnzymeRvs:14.561638868745469,FiniteDifferences:84.54371196384972,ForwardDiff:1.5927665271796123,MooncakeFwd:15.991394975322104,MooncakeRvs:6.643386548711778,ReverseDiff:68.33138184540377,ReverseDiffCompiled:69.28359728506787,Zygote:3496.722931620703},Oi={__category__:"DynamicPPL demo models",EnzymeFwd:10.96480933121479,EnzymeRvs:13.834134556243878,FiniteDifferences:86.46474299841334,ForwardDiff:1.5568344965104686,MooncakeFwd:14.958068049565277,MooncakeRvs:6.801235292816973,ReverseDiff:65.29405465288035,ReverseDiffCompiled:63.859942068495485,Zygote:3086.598943857699},Ii={__category__:"DynamicPPL demo models",EnzymeFwd:5.655472760948827,EnzymeRvs:3.8302605624985255,FiniteDifferences:76.66120675246533,ForwardDiff:2.4239438353078806,MooncakeFwd:8.53418164404179,MooncakeRvs:5.725434836911507,ReverseDiff:148.59053435114504,ReverseDiffCompiled:140.96369359916054,Zygote:9695.459087156909},Li={__category__:"DynamicPPL demo models",EnzymeFwd:8.612875310988517,EnzymeRvs:11.546228835300154,FiniteDifferences:84.140625,ForwardDiff:1.4789983454813758,MooncakeFwd:14.148519163763066,MooncakeRvs:5.566284383962947,ReverseDiff:71.29799141630902,ReverseDiffCompiled:71.92441454358294,Zygote:"error"},Pi={__category__:"Distributions",EnzymeFwd:6.166666666666668,EnzymeRvs:9.852148249049323,FiniteDifferences:27.382287612041562,ForwardDiff:1.209865835958795,MooncakeFwd:3.945257408754862,MooncakeRvs:6.12580882769562,ReverseDiff:41.761178817396875,ReverseDiffCompiled:50.77973305113675,Zygote:"error"},zi={__category__:"DynamicPPL demo models",EnzymeFwd:10.93413488707446,EnzymeRvs:14.929015181270172,FiniteDifferences:82.91419847328244,ForwardDiff:1.559145867456456,MooncakeFwd:14.569582642343837,MooncakeRvs:6.421317859474052,ReverseDiff:62.35066197419139,ReverseDiffCompiled:63.24598478444632,Zygote:"error"},Vi={__category__:"DynamicPPL demo models",EnzymeFwd:8.161284159423694,EnzymeRvs:10.796006706816314,FiniteDifferences:64.64831523829245,ForwardDiff:1.9125258684218498,MooncakeFwd:12.695492275172285,MooncakeRvs:5.385928489042676,ReverseDiff:69.56408796526938,ReverseDiffCompiled:68.80296610169492,Zygote:"error"},Bi={__category__:"DynamicPPL demo models",EnzymeFwd:8.752765884569277,EnzymeRvs:10.109686479654531,FiniteDifferences:86.34854661129947,ForwardDiff:1.5808053564297593,MooncakeFwd:12.462207413012056,MooncakeRvs:5.629941126997478,ReverseDiff:72.96778323021121,ReverseDiffCompiled:72.27728940264414,Zygote:"error"},ji={__category__:"DynamicPPL demo models",EnzymeFwd:9.709649773465378,EnzymeRvs:14.256202858990013,FiniteDifferences:79.03625450180071,ForwardDiff:1.4720499994314227,MooncakeFwd:14.677604731739754,MooncakeRvs:6.501874005968937,ReverseDiff:55.61550849780703,ReverseDiffCompiled:54.406545782338874,Zygote:"error"},qi={__category__:"DynamicPPL demo models",EnzymeFwd:10.497917427840703,EnzymeRvs:15.331806528798495,FiniteDifferences:79.22356331581625,ForwardDiff:1.4292695606966466,MooncakeFwd:13.829122881505857,MooncakeRvs:6.294881778281183,ReverseDiff:60.07026003099707,ReverseDiffCompiled:59.1360858969378,Zygote:"error"},Ui={__category__:"Core Turing syntax",EnzymeFwd:3.5895103629287712,EnzymeRvs:2.646687322672935,FiniteDifferences:113.73616553241219,ForwardDiff:1.5728106027739934,MooncakeFwd:15.26083038746794,MooncakeRvs:4.249040906542178,ReverseDiff:56.332046598193976,ReverseDiffCompiled:58.58733023895479,Zygote:"error"},$i={__category__:"Core Turing syntax",EnzymeFwd:10.291477825732182,EnzymeRvs:4.762680261418328,FiniteDifferences:126.94671057228706,ForwardDiff:3.753760734115295,MooncakeFwd:9.376825709320514,MooncakeRvs:13.067494873756205,ReverseDiff:440.76763872315036,ReverseDiffCompiled:441.8284285215773,Zygote:"error"},Hi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:1.4423378126043582,EnzymeRvs:2.2150438869857396,FiniteDifferences:11.50983937943716,ForwardDiff:5.186928286248547,MooncakeFwd:4.406652234963726,MooncakeRvs:9.339417018624939,ReverseDiff:126.86739595634917,ReverseDiffCompiled:60.17031993903945,Zygote:16.63477690288714},Zi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:9.050863376923633,EnzymeRvs:6.356157348762368,FiniteDifferences:109.10025611175787,ForwardDiff:6.002001026167265,MooncakeFwd:30.0394955654102,MooncakeRvs:7.184884852416478,ReverseDiff:91.44853283651607,ReverseDiffCompiled:89.57758371824481,Zygote:2161.091094619666},Ki={__category__:"DynamicPPL arXiV paper",EnzymeFwd:5472.947970025064,EnzymeRvs:2.196206986136369,FiniteDifferences:119123.48522048701,ForwardDiff:1100.0900783345485,MooncakeFwd:8006.448258624962,MooncakeRvs:4.328273460750507,ReverseDiff:43.526722101583594,ReverseDiffCompiled:43.04207392945573,Zygote:3.235583658001746},Gi={__category__:"Distributions",EnzymeFwd:4.320641179495971,EnzymeRvs:19.866696404062587,FiniteDifferences:128.1610353944812,ForwardDiff:1.911306779963746,MooncakeFwd:20.213700314164733,MooncakeRvs:5.099266601361105,ReverseDiff:68.61058562403962,ReverseDiffCompiled:69.57705508838166,Zygote:"error"},Wi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:33.724395601683305,EnzymeRvs:5.2896507490863325,FiniteDifferences:"NaN",ForwardDiff:28.13234012787316,MooncakeFwd:1918.8314950238519,MooncakeRvs:3.7455349872428205,ReverseDiff:72.62616370158428,ReverseDiffCompiled:74.05623897259979,Zygote:"error"},Xi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:223.55054791010357,EnzymeRvs:1.4002299300095749,FiniteDifferences:3354.013730826324,ForwardDiff:244.52309933774836,MooncakeFwd:548.5103900021941,MooncakeRvs:10.10723898872634,ReverseDiff:84.97406366854631,ReverseDiffCompiled:82.68025717574976,Zygote:"error"},Ji={__category__:"DynamicPPL arXiV paper",EnzymeFwd:65.7300169506097,EnzymeRvs:4.616672066716442,FiniteDifferences:1109.1115640339583,ForwardDiff:54.46210969928189,MooncakeFwd:241.0343232914739,MooncakeRvs:4.914540065640526,ReverseDiff:2686.2471727794446,ReverseDiffCompiled:2225.797875569818,Zygote:170.73715730821073},Yi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:115.20650666554019,EnzymeRvs:.9955993474438241,FiniteDifferences:2901.772417711682,ForwardDiff:248.22028178910193,MooncakeFwd:391.0159691982529,MooncakeRvs:8.08937825063589,ReverseDiff:141.49154980080732,ReverseDiffCompiled:145.0340792702831,Zygote:2591.3441825915784},Qi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:221.10766325601324,EnzymeRvs:4.790849231351658,FiniteDifferences:6897.015270594942,ForwardDiff:87.42970227481494,MooncakeFwd:1116.6260715743638,MooncakeRvs:3.6424355094785126,ReverseDiff:111.0644093548212,ReverseDiffCompiled:113.1029678818268,Zygote:"error"},ea={__category__:"Core Turing syntax",EnzymeFwd:3.5158973043825155,EnzymeRvs:2.939525854803931,FiniteDifferences:60.37278883360973,ForwardDiff:1.5211557955125488,MooncakeFwd:6.613142492146051,MooncakeRvs:4.172454013073166,ReverseDiff:70.45384222184359,ReverseDiffCompiled:70.62507995286988,Zygote:4650.697474148161},na={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:19.4207311827957,FiniteDifferences:257.14716934256705,ForwardDiff:3.5873495834618945,MooncakeFwd:47.746141621588585,MooncakeRvs:27.847397238741454,ReverseDiff:73.90162362950093,ReverseDiffCompiled:75.31039441877545,Zygote:"error"},ta={__category__:"Core Turing syntax",EnzymeFwd:5.503397855451887,EnzymeRvs:5.444467318579515,FiniteDifferences:69.01369237790963,ForwardDiff:1.2445104514196228,MooncakeFwd:10.984101304421483,MooncakeRvs:5.056849739861489,ReverseDiff:48.93126795240049,ReverseDiffCompiled:43.68952683021555,Zygote:"error"},ra={__category__:"Base Julia features",EnzymeFwd:4.767645425743868,EnzymeRvs:"wrong",FiniteDifferences:13.47765912830274,ForwardDiff:.9481983493256391,MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},oa={__category__:"Effect of model size",EnzymeFwd:5.306264363323693,EnzymeRvs:2.1488588154930253,FiniteDifferences:179.1164071602584,ForwardDiff:2.4924724205061644,MooncakeFwd:27.701912416851446,MooncakeRvs:3.3891255797972857,ReverseDiff:58.80520209909262,ReverseDiffCompiled:56.31624548736462,Zygote:"error"},sa={__category__:"Distributions",EnzymeFwd:"error",EnzymeRvs:4.5445797224732845,FiniteDifferences:45.33843732112192,ForwardDiff:1.0020060591173339,MooncakeFwd:14.24698753221425,MooncakeRvs:9.000987234042553,ReverseDiff:19.25038258799524,ReverseDiffCompiled:20.442630363154503,Zygote:1021.1408138940916},ia={__category__:"Effect of model size",EnzymeFwd:24.285782232036688,EnzymeRvs:4.3971970603315675,FiniteDifferences:679.1165652560333,ForwardDiff:13.192434996873967,MooncakeFwd:130.26926218350124,MooncakeRvs:3.960975609756098,ReverseDiff:53.12766827817031,ReverseDiffCompiled:54.4839314222253,Zygote:"error"},aa={__category__:"Effect of model size",EnzymeFwd:52.16553287981859,EnzymeRvs:4.907478875528112,FiniteDifferences:1329.520122261844,ForwardDiff:17.771728211516056,MooncakeFwd:256.9583080348108,MooncakeRvs:3.8952623535404993,ReverseDiff:53.71573313723086,ReverseDiffCompiled:52.23488159567705,Zygote:"error"},la={__category__:"Effect of model size",EnzymeFwd:255.6690332326284,EnzymeRvs:4.195035998484274,FiniteDifferences:6609.6840137467425,ForwardDiff:71.41750943664981,MooncakeFwd:1200.6551143779625,MooncakeRvs:4.0551614249402474,ReverseDiff:47.58820596823588,ReverseDiffCompiled:50.38651092690279,Zygote:"error"},ca={__category__:"Distributions",EnzymeFwd:2.8548646949022265,EnzymeRvs:2.788392948080607,FiniteDifferences:32.18259265565583,ForwardDiff:1.8437416579515489,MooncakeFwd:3.831879905691348,MooncakeRvs:3.6785301459509294,ReverseDiff:69.97043093169816,ReverseDiffCompiled:67.548367450516,Zygote:"error"},ua={__category__:"Distributions",EnzymeFwd:2.007585160667494,EnzymeRvs:7.127312138728324,FiniteDifferences:20.545355451851346,ForwardDiff:1.190924913183704,MooncakeFwd:3.7852009112396923,MooncakeRvs:7.173802415524495,ReverseDiff:31.92506974890395,ReverseDiffCompiled:48.960894239036975,Zygote:"error"},fa={__category__:"Core Turing syntax",EnzymeFwd:8.668816234847606,EnzymeRvs:4.986249208587545,FiniteDifferences:126.47732337290542,ForwardDiff:3.750301494986977,MooncakeFwd:9.58824105743195,MooncakeRvs:12.704056563489933,ReverseDiff:439.11058302213803,ReverseDiffCompiled:419.6708116157855,Zygote:"error"},da={__category__:"Core Turing syntax",EnzymeFwd:11.92886293486993,EnzymeRvs:6.235749131473918,FiniteDifferences:157.2845572354212,ForwardDiff:3.834296812948548,MooncakeFwd:11.213510414557538,MooncakeRvs:11.452002493376968,ReverseDiff:304.415058935225,ReverseDiffCompiled:315.99196600931145,Zygote:23796.523292369246},_a={__category__:"Core Turing syntax",EnzymeFwd:3.6707844812852506,EnzymeRvs:4.332828004410143,FiniteDifferences:77.76724350615021,ForwardDiff:3.024907801834432,MooncakeFwd:9.968119685192855,MooncakeRvs:4.964022942695247,ReverseDiff:76.58762886597938,ReverseDiffCompiled:65.33690795352993,Zygote:"error"},ma={__category__:"Core Turing syntax",EnzymeFwd:13.671083729803367,EnzymeRvs:5.89415290752226,FiniteDifferences:162.68368804629426,ForwardDiff:4.114366443885589,MooncakeFwd:11.372840083993218,MooncakeRvs:12.553891508768293,ReverseDiff:348.5276522665492,ReverseDiffCompiled:351.17304860088365,Zygote:42205.41246519677},pa={__category__:"Distributions",EnzymeFwd:"error",EnzymeRvs:"error",FiniteDifferences:29.1717791411043,ForwardDiff:"NaN",MooncakeFwd:4.284171205580197,MooncakeRvs:3.6796661400013737,ReverseDiff:"NaN",ReverseDiffCompiled:"NaN",Zygote:3366.9761896697714},ga={__category__:"Distributions",EnzymeFwd:12.579682555744586,EnzymeRvs:4.471925991975034,FiniteDifferences:158.43354218047295,ForwardDiff:3.25890569660951,MooncakeFwd:10.170304007129495,MooncakeRvs:10.974442657080997,ReverseDiff:184.26757865293985,ReverseDiffCompiled:175.64741685385118,Zygote:17740.31002072761},va={__category__:"External libraries",EnzymeFwd:"wrong",EnzymeRvs:86.3031151185552,FiniteDifferences:62.29995368702722,ForwardDiff:5.669430425378515,MooncakeFwd:"error",MooncakeRvs:68.71711143245257,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ha={__category__:"PosteriorDB",EnzymeFwd:6.587175572519084,EnzymeRvs:"error",FiniteDifferences:173.0962093119077,ForwardDiff:3.8239320380595387,MooncakeFwd:27.84493768140687,MooncakeRvs:4.797139295100748,ReverseDiff:117.58242384471922,ReverseDiffCompiled:91.21688938088084,Zygote:"error"},ba={__category__:"PosteriorDB",EnzymeFwd:6.082469127379409,EnzymeRvs:4.1429977750843605,FiniteDifferences:168.75028893636394,ForwardDiff:4.086154828466901,MooncakeFwd:27.68852009326567,MooncakeRvs:4.663195357833656,ReverseDiff:119.58682551776684,ReverseDiffCompiled:109.59552769778081,Zygote:"error"},ya={__category__:"Core Turing syntax",EnzymeFwd:6.337223356757145,EnzymeRvs:3.792341476804831,FiniteDifferences:118.750431838596,ForwardDiff:1.9889769730803408,MooncakeFwd:10.796827920231369,MooncakeRvs:6.985632583930768,ReverseDiff:106.73444314434636,ReverseDiffCompiled:105.13635271504084,Zygote:15311.347190039773},wa={__category__:"Distributions",EnzymeFwd:8.565436431563455,EnzymeRvs:9.512750041329145,FiniteDifferences:44.76070052298376,ForwardDiff:1.0394692894561053,MooncakeFwd:15.589836795252227,MooncakeRvs:10.211697415687231,ReverseDiff:32.12798382145824,ReverseDiffCompiled:31.4404275385099,Zygote:366.4268564568685},Ea={__category__:"Core Turing syntax",EnzymeFwd:5.143587033121917,EnzymeRvs:3.702702702702703,FiniteDifferences:76.98359029844018,ForwardDiff:1.5793231051509198,MooncakeFwd:7.6695097948230115,MooncakeRvs:5.38790863250161,ReverseDiff:135.08011981820684,ReverseDiffCompiled:138.2204959665372,Zygote:"error"},Da={__category__:"Base Julia features",EnzymeFwd:6.952940561676175,EnzymeRvs:3.552254706822854,FiniteDifferences:83.87711372086372,ForwardDiff:"error",MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Ra={abstractgps:xi,assume_beta:Mi,control_flow:Ti,delaydiffeq:Fi,demo_assume_dot_observe:Si,demo_assume_dot_observe_literal:Ni,demo_assume_index_observe:Ci,demo_assume_matrix_observe_matrix_index:ki,demo_assume_multivariate_observe:Ai,demo_assume_multivariate_observe_literal:Oi,demo_assume_observe_literal:Ii,demo_assume_submodel_observe_index_literal:Li,assume_dirichlet:Pi,demo_dot_assume_observe:zi,demo_dot_assume_observe_index:Vi,demo_dot_assume_observe_index_literal:Bi,demo_dot_assume_observe_matrix_index:ji,demo_dot_assume_observe_submodel:qi,dot_assume:Ui,dot_observe:$i,dppl_gauss_unknown:Hi,dppl_hier_poisson:Zi,dppl_high_dim_gauss:Ki,assume_lkjcholu:Gi,dppl_hmm_semisup:Wi,dppl_lda:Xi,dppl_logistic_regression:Ji,dppl_naive_bayes:Yi,dppl_sto_volatility:Qi,dynamic_constraint:ea,lux_nn:na,multiple_constraints_same_var:ta,multithreaded:ra,n010:oa,assume_mvnormal:sa,n050:ia,n100:aa,n500:la,observe_bernoulli:ca,observe_categorical:ua,observe_index:fa,observe_literal:da,observe_multivariate:_a,observe_submodel:ma,observe_von_mises:pa,assume_normal:ga,ordinarydiffeq:va,pdb_eight_schools_centered:ha,pdb_eight_schools_noncentered:ba,assume_submodel:ya,assume_wishart:wa,broadcast_macro:Ea,call_C:Da},xa=`#=
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

model = demo_assume_index_observe()`,ka=`using LinearAlgebra: Diagonal

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

model = demo_assume_matrix_observe_matrix_index()`,Aa=`using LinearAlgebra: Diagonal

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

model = dppl_gauss_unknown(y)`,Za=`using Turing: LogPoisson

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

model = dppl_hier_poisson(y, x, idx, ns)`,Ka=`@model function dppl_high_dim_gauss(D)
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

model = observe_bernoulli()`,ul=`@model function observe_categorical(x = [1, 2, 1, 2, 2])
    a ~ Dirichlet(2, 3)
    for i in eachindex(x)
        x[i] ~ Categorical(a)
    end
end

model = observe_categorical()`,fl=`@model function observe_index(x = [1.5, 2.0, 2.5])
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

model = pdb_eight_schools_centered(J, y, sigma)`,bl=`J = 8
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

model = pdb_eight_schools_noncentered(J, y, sigma)`,yl=`@model function inner1()
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

model = call_C()`,Rl={abstractgps:xa,assume_beta:Ma,control_flow:Ta,delaydiffeq:Fa,demo_assume_dot_observe:Sa,demo_assume_dot_observe_literal:Na,demo_assume_index_observe:Ca,demo_assume_matrix_observe_matrix_index:ka,demo_assume_multivariate_observe:Aa,demo_assume_multivariate_observe_literal:Oa,demo_assume_observe_literal:Ia,demo_assume_submodel_observe_index_literal:La,assume_dirichlet:Pa,demo_dot_assume_observe:za,demo_dot_assume_observe_index:Va,demo_dot_assume_observe_index_literal:Ba,demo_dot_assume_observe_matrix_index:ja,demo_dot_assume_observe_submodel:qa,dot_assume:Ua,dot_observe:$a,dppl_gauss_unknown:Ha,dppl_hier_poisson:Za,dppl_high_dim_gauss:Ka,assume_lkjcholu:Ga,dppl_hmm_semisup:Wa,dppl_lda:Xa,dppl_logistic_regression:Ja,dppl_naive_bayes:Ya,dppl_sto_volatility:Qa,dynamic_constraint:el,lux_nn:nl,multiple_constraints_same_var:tl,multithreaded:rl,n010:ol,assume_mvnormal:sl,n050:il,n100:al,n500:ll,observe_bernoulli:cl,observe_categorical:ul,observe_index:fl,observe_literal:dl,observe_multivariate:_l,observe_submodel:ml,observe_von_mises:pl,assume_normal:gl,ordinarydiffeq:vl,pdb_eight_schools_centered:hl,pdb_eight_schools_noncentered:bl,assume_submodel:yl,assume_wishart:wl,broadcast_macro:El,call_C:Dl},xl="1.21.0",Ml="1.5.0",Tl="0.5.24",Fl="5.11.0",Sl="0.13.6",Nl="0.4.5",Cl="0.1.43",kl="4.4.0",Al="0.8.3",Ol="0.8.9",Il="0.7.2",Ll="0.6.1",Pl="1.1.3",zl="2.5.0",Vl="1.1.2",Bl="0.4.0",jl="0.5.4",ql="3.5.2+0",Ul="7.22.0",$l="1.11.0",Hl="1.1.2",Zl="0.5.2",Kl="1.1.0",Gl="0.4.8",Wl="0.5.1",Xl="0.4.6",Jl="1.11.0",Yl="0.1.1",Ql="0.15.15",ec="0.1.9",nc="0.1.6",tc="1.6.2",rc="0.5.0",oc="0.2.7",sc="0.10.15",ic="0.3.14",ac="1.72.6",lc="1.26.0",cc="1.3.1",uc="0.1.10",fc="0.10.43",dc="0.10.4+0",_c="1.0.1",mc="1.0.0",pc="1.0.0",gc="0.1.13",vc="0.7.8",hc="3.31.0",bc="0.12.1",yc="0.11.0",wc="0.13.1",Ec="1.1.0",Dc="0.2.6",Rc="0.3.1",xc="1.0.0",Mc="4.18.1",Tc="1.1.1+0",Fc="0.1.2",Sc="0.2.3",Nc="2.5.0",Cc="0.1.2",kc="1.6.0",Ac="0.1.3",Oc="0.3.1",Ic="4.1.1",Lc="1.16.0",Pc="0.7.13",zc="1.8.1",Vc="0.18.22",Bc="1.0.0",jc="1.11.0",qc="0.1.2",Uc="5.66.0",$c="1.9.1",Hc="0.4.0",Zc="6.199.0",Kc="4.12.0",Gc="5.26.0",Wc="1.1.0",Xc="1.15.1",Jc="0.7.14",Yc="0.4.27",Qc="0.10.12",eu="1.11.0",nu="0.25.123",tu="0.6.58",ru="0.9.5",ou="1.6.0",su="0.39.12",iu="2.0.0",au="1.0.5",lu="0.13.118",cu="0.8.18",uu="0.0.238+0",fu="0.1.11",du="1.30.0",_u="0.1.10",mu="1.1.3",pu="0.10.14",gu="1.10.0",vu="3.3.11+0",hu="0.2.2",bu="0.1.1",yu="0.3.5",wu="0.3.2",Eu="1.1.0",Du="1.3.0",Ru="1.17.1",xu="0.9.24",Mu="1.11.0",Tu="1.16.0",Fu="2.29.0",Su="0.12.33",Nu="0.8.5",Cu="1.3.1",ku="0.1.2",Au="1.1.3",Ou="0.1.3",Iu="0.5.2",Lu="1.11.0",Pu="0.2.0",zu="1.7.6",Vu="0.6.2",Bu="0.5.6",ju="1.4.0",qu="1.13.1",Uu="0.17.2",$u="1.14.6+0",Hu="1.10.19",Zu="0.2.0",Ku="2.12.2+0",Gu="0.3.28",Wu="0.4.15",Xu="0.1.1",Ju="0.1.7",Yu="0.10.5",Qu="0.3.8",ef="0.1.5",nf="0.3.1",tf="1.4.5",rf="2025.2.0+0",of="1.11.0",sf="0.7.0",af="0.16.2",lf="0.7.13",cf="0.1.17",uf="1.3.1",ff="0.2.6",df="1.10.0",_f="1.0.0",mf="0.6.3",pf="1.7.1",gf="1.14.3",vf="0.2.1",hf="0.2.4",bf="0.9.39",yf="0.6.10",wf="0.10.67",Ef="0.10.3",Df="9.4.4",Rf="0.0.38+0",xf="1.4.0",Mf="0.1.17",Tf="1.11.0",Ff="0.3.1",Sf="0.2.1",Nf="0.6.4",Cf="8.6.0+0",kf="1.11.0",Af="1.7.2+0",Of="1.11.0+1",If="0.13.1+0",Lf="1.11.0",Pf="1.18.0+0",zf="0.9.10",Vf="0.1.6",Bf="7.5.1",jf="1.11.0",qf="3.57.0",Uf="2.2.0",$f="1.13.1",Hf="0.3.29",Zf="1.11.0",Kf="1.2.0",Gf="1.29.3",Wf="1.5.2",Xf="1.15.2",Jf="0.11.4",Yf="7.7.0",Qf="0.3.15",ed="2025.2.0+0",nd="1.0.0",td="1.17.1",rd="0.7.20",od="1.12.1",sd="0.4.17",id="0.4.8",ad="4.3.2+0",ld="0.1.11",cd="5.5.4+0",ud="0.5.16",fd="0.1.8",dd="0.4.3",_d="1.11.0",md="0.1.4",pd="1.1.9",gd="2.28.6+0",vd="0.2.0",hd="10.1.4+3",bd="1.2.0",yd="2.1.0",wd="1.11.0",Ed="0.4.201",Dd="0.3.4",Rd="0.3.7",xd="2023.12.12",Md="0.2.4",Td="0.10.3",Fd="7.10.0",Sd="0.9.33",Nd="0.4.3",Cd="1.1.3",kd="0.1.5",Ad="0.10.5",Od="1.0.0",Id="1.2.0",Ld="4.14.0",Pd="2.9.2",zd="1.11.0",Vd="1.12.0",Bd="1.6.0",jd="0.5.0",qd="1.17.0",Ud="0.3.27+1",$d="0.8.5+0",Hd="5.0.9+0",Zd="1.6.1",Kd="3.5.4+0",Gd="0.5.6+0",Wd="1.13.3",Xd="0.4.7",Jd="5.4.0",Yd="4.2.0",Qd="0.4.8",e1="1.8.1",n1="6.105.0",t1="1.8.0",r1="1.13.0",o1="2.3.0",s1="1.11.0",i1="1.21.0",a1="1.7.0",l1="1.11.0",c1="1.12.0",u1="1.19.0",f1="1.7.0",d1="1.8.0",_1="1.8.0",m1="1.10.0",p1="1.9.0",g1="1.9.0",v1="1.10.0",h1="1.18.1",b1="1.7.0",y1="1.9.0",w1="1.7.0",E1="1.7.0",D1="1.8.0",R1="1.21.0",x1="1.10.0",M1="1.10.0",T1="1.9.0",F1="1.7.0",S1="1.10.0",N1="1.8.0",C1="1.9.0",k1="0.11.37",A1="1.0.2",O1="0.5.12",I1="2.8.3",L1="1.2.1",P1="0.3.6",z1="1.11.0",V1="0.4.7",B1="0.7.18",j1="0.2.2",q1="1.4.3",U1="0.2.4",$1="0.4.34",H1="1.2.1",Z1="1.5.1",K1="0.2.0",G1="3.1.2",W1="1.11.0",X1="0.1.6",J1="1.11.0",Y1="1.3.0",Q1="2.11.2",e0="1.11.0",n0="1.11.0",t0="1.7.1",r0="1.6.0",o0="0.3.2",s0="0.4.5",i0="0.1.16",a0="0.1.0",l0="1.3.4",c0="3.44.0",u0="1.2.2",f0="1.3.1",d0="1.2.0",_0="1.16.2",m0="1.4.2",p0="0.9.0",g0="0.5.1+0",v0="2.2.10",h0="0.5.16",b0="0.7.0",y0="0.1.0",w0="0.6.1",E0="2.134.0",D0="0.1.12",R0="1.8.0",x0="1.14.1",M0="1.0.1",T0="7.93.0",F0="1.10.0",S0="3.0.0",N0="1.5.0",C0="1.3.0",k0="1.4.9",A0="1.11.0",O0="1.1.2",I0="1.11.0",L0="0.1.0",P0="1.2.0",z0="2.10.0",V0="0.9.5",B0="1.11.0",j0="1.2.2",q0="1.11.0",U0="1.1.3",$0="0.1.2",H0="0.4.23",Z0="2.6.1",K0="0.1.15",G0="0.1.2",W0="1.3.1",X0="1.8.0",J0="1.9.16",Y0="1.4.4",Q0="3.5.0",e_="1.11.1",n_="1.8.0",t_="0.34.10",r_="1.5.2",o_="0.5.8",s_="0.4.2",i_="0.3.7",a_="0.4.2",l_="0.7.2",c_="0.3.1",u_="1.11.0",f_="2.6.2",d_="1.11.0",__=null,m_="7.7.0+0",p_="0.3.46",g_="1.0.3",v_="1.0.1",h_="1.12.1",b_="1.10.0",y_="0.1.1",w_="0.1.7",E_="1.11.0",D_="0.5.5",R_="0.5.29",x_="0.2.38",M_="0.1.6",T_="0.11.3",F_="0.4.85",S_="1.4.0",N_="0.42.4",C_="1.6.1",k_="1.11.0",A_="1.11.0",O_="1.27.0",I_="1.0.0",L_="0.3.0",P_="1.4.2",z_="1.3.1",V_="1.1.0",B_="1.6.1",j_="2.13.9+0",q_="0.18.1+0",U_="0.10.1",$_="1.2.13+1",H_="1.5.7+1",Z_="0.7.10",K_="0.2.7",G_="1.1.4+0",W_="5.11.0+0",X_="1.59.0+0",J_="2022.0.0+1",Y_="17.4.0+2",Q_={ADTypes:xl,AbstractFFTs:Ml,AbstractGPs:Tl,AbstractMCMC:Fl,AbstractPPL:Sl,AbstractTrees:Nl,Accessors:Cl,Adapt:kl,AdvancedHMC:Al,AdvancedMH:Ol,AdvancedPS:Il,AdvancedVI:Ll,AliasTables:Pl,ArgCheck:zl,ArgTools:Vl,ArnoldiMethod:Bl,Arpack:jl,Arpack_jll:ql,ArrayInterface:Ul,Artifacts:$l,Atomix:Hl,AtomsBase:Zl,AxisAlgorithms:Kl,AxisArrays:Gl,BFloat16s:Wl,BangBang:Xl,Base64:Jl,Baselet:Yl,Bijectors:Ql,BitFlags:ec,BitTwiddlingConvenienceFunctions:nc,BracketingNonlinearSolve:tc,CEnum:rc,CPUSummary:oc,CSV:sc,Cassette:ic,ChainRules:ac,ChainRulesCore:lc,Chairmarks:cc,ChangesOfVariables:uc,Chemfiles:fc,Chemfiles_jll:dc,ChunkCodecCore:_c,ChunkCodecLibZlib:mc,ChunkCodecLibZstd:pc,CloseOpenIntervals:gc,CodecZlib:vc,ColorSchemes:hc,ColorTypes:bc,ColorVectorSpace:yc,Colors:wc,Combinatorics:Ec,CommonSolve:Dc,CommonSubexpressions:Rc,CommonWorldInvalidations:xc,Compat:Mc,CompilerSupportLibraries_jll:Tc,CompositionsBase:Fc,ConcreteStructs:Sc,ConcurrentUtilities:Nc,ConsoleProgressMonitor:Cc,ConstructionBase:kc,ContextVariablesX:Ac,CpuId:Oc,Crayons:Ic,DataAPI:Lc,DataDeps:Pc,DataFrames:zc,DataStructures:Vc,DataValueInterfaces:Bc,Dates:jc,DefineSingletons:qc,DelayDiffEq:Uc,DelimitedFiles:$c,DensityInterface:Hc,DiffEqBase:Zc,DiffEqCallbacks:Kc,DiffEqNoiseProcess:Gc,DiffResults:Wc,DiffRules:Xc,DifferentiationInterface:Jc,DispatchDoctor:Yc,Distances:Qc,Distributed:eu,Distributions:nu,DistributionsAD:tu,DocStringExtensions:ru,Downloads:ou,DynamicPPL:su,EllipticalSliceSampling:iu,EnumX:au,Enzyme:lu,EnzymeCore:cu,Enzyme_jll:uu,ExceptionUnwrapping:fu,ExponentialUtilities:du,ExprTools:_u,ExpressionExplorer:mu,ExproniconLite:pu,FFTW:gu,FFTW_jll:vu,FLoops:hu,FLoopsBase:bu,FastBroadcast:yu,FastClosures:wu,FastGaussQuadrature:Eu,FastPower:Du,FileIO:Ru,FilePathsBase:xu,FileWatching:Mu,FillArrays:Tu,FiniteDiff:Fu,FiniteDifferences:Su,FixedPointNumbers:Nu,ForwardDiff:Cu,FunctionProperties:ku,FunctionWrappers:Au,FunctionWrappersWrappers:Ou,Functors:Iu,Future:Lu,GPUArraysCore:Pu,GPUCompiler:zu,GZip:Vu,GenericSchur:Bu,Glob:ju,Graphs:qu,HDF5:Uu,HDF5_jll:$u,HTTP:Hu,HashArrayMappedTries:Zu,Hwloc_jll:Ku,HypergeometricFunctions:Gu,IRTools:Wu,IfElse:Xu,ImageBase:Ju,ImageCore:Yu,ImageShow:Qu,Inflate:ef,InitialValues:nf,InlineStrings:tf,IntelOpenMP_jll:rf,InteractiveUtils:of,InternedStrings:sf,Interpolations:af,IntervalSets:lf,InverseFunctions:cf,InvertedIndices:uf,IrrationalConstants:ff,IterTools:df,IteratorInterfaceExtensions:_f,JLD2:mf,JLLWrappers:pf,JSON:"1.4.0",JSON3:gf,Jieko:vf,JuliaVariables:hf,KernelAbstractions:bf,KernelDensity:yf,KernelFunctions:wf,Krylov:Ef,LLVM:Df,LLVMExtra_jll:Rf,LaTeXStrings:xf,LayoutPointers:Mf,LazyArtifacts:Tf,LazyModules:Ff,LeftChildRightSiblingTrees:Sf,LibCURL:Nf,LibCURL_jll:Cf,LibGit2:kf,LibGit2_jll:Af,LibSSH2_jll:Of,LibTracyClient_jll:If,Libdl:Lf,Libiconv_jll:Pf,Libtask:zf,LineSearch:Vf,LineSearches:Bf,LinearAlgebra:jf,LinearSolve:qf,LogDensityProblems:Uf,LogDensityProblemsAD:$f,LogExpFunctions:Hf,Logging:Zf,LoggingExtras:Kf,Lux:Gf,LuxCore:Wf,LuxLib:Xf,MAT:Jf,MCMCChains:Yf,MCMCDiagnosticTools:Qf,MKL_jll:ed,MLCore:nd,MLDataDevices:td,MLDatasets:rd,MLJModelInterface:od,MLStyle:sd,MLUtils:id,MPICH_jll:ad,MPIPreferences:ld,MPItrampoline_jll:cd,MacroTools:ud,ManualMemory:fd,MappedArrays:dd,Markdown:_d,MaybeInplace:md,MbedTLS:pd,MbedTLS_jll:gd,MicroCollections:vd,MicrosoftMPI_jll:hd,Missings:bd,MistyClosures:yd,Mmap:wd,Mooncake:Ed,MosaicViews:Dd,Moshi:Rd,MozillaCACerts_jll:xd,MuladdMacro:Md,MultivariateStats:Td,NLSolversBase:Fd,NNlib:Sd,NPZ:Nd,NaNMath:Cd,NameResolution:kd,NamedArrays:Ad,NaturalSort:Od,NetworkOptions:Id,NonlinearSolve:Ld,NonlinearSolveBase:Pd,NonlinearSolveFirstOrder:zd,NonlinearSolveQuasiNewton:Vd,NonlinearSolveSpectralMethods:Bd,ObjectFile:jd,OffsetArrays:qd,OpenBLAS_jll:Ud,OpenLibm_jll:$d,OpenMPI_jll:Hd,OpenSSL:Zd,OpenSSL_jll:Kd,OpenSpecFun_jll:Gd,Optim:Wd,Optimisers:Xd,Optimization:Jd,OptimizationBase:Yd,OptimizationOptimJL:Qd,OrderedCollections:e1,OrdinaryDiffEq:n1,OrdinaryDiffEqAdamsBashforthMoulton:t1,OrdinaryDiffEqBDF:r1,OrdinaryDiffEqCore:o1,OrdinaryDiffEqDefault:s1,OrdinaryDiffEqDifferentiation:i1,OrdinaryDiffEqExplicitRK:a1,OrdinaryDiffEqExponentialRK:l1,OrdinaryDiffEqExtrapolation:c1,OrdinaryDiffEqFIRK:u1,OrdinaryDiffEqFeagin:f1,OrdinaryDiffEqFunctionMap:d1,OrdinaryDiffEqHighOrderRK:_1,OrdinaryDiffEqIMEXMultistep:m1,OrdinaryDiffEqLinear:p1,OrdinaryDiffEqLowOrderRK:g1,OrdinaryDiffEqLowStorageRK:v1,OrdinaryDiffEqNonlinearSolve:h1,OrdinaryDiffEqNordsieck:b1,OrdinaryDiffEqPDIRK:y1,OrdinaryDiffEqPRK:w1,OrdinaryDiffEqQPRK:E1,OrdinaryDiffEqRKN:D1,OrdinaryDiffEqRosenbrock:R1,OrdinaryDiffEqSDIRK:x1,OrdinaryDiffEqSSPRK:M1,OrdinaryDiffEqStabilizedIRK:T1,OrdinaryDiffEqStabilizedRK:F1,OrdinaryDiffEqSymplecticRK:S1,OrdinaryDiffEqTsit5:N1,OrdinaryDiffEqVerner:C1,PDMats:k1,PackageExtensionCompat:A1,PaddedViews:O1,Parsers:I1,PeriodicTable:L1,Pickle:P1,Pkg:z1,PoissonRandom:V1,Polyester:B1,PolyesterWeave:j1,PooledArrays:q1,PositiveFactorizations:U1,PreallocationTools:$1,PrecompileTools:H1,Preferences:Z1,PrettyPrint:K1,PrettyTables:G1,Printf:W1,ProgressLogging:X1,ProgressMeter:J1,PtrArrays:Y1,QuadGK:Q1,REPL:e0,Random:n0,Random123:t0,RandomNumbers:r0,RangeArrays:o0,Ratios:s0,ReactantCore:i0,RealDot:a0,RecipesBase:l0,RecursiveArrayTools:c0,Reexport:u0,Requires:f0,ResettableStacks:d0,ReverseDiff:_0,Richardson:m0,Rmath:p0,Rmath_jll:g0,Roots:v0,RuntimeGeneratedFunctions:h0,SHA:b0,SIMDTypes:y0,SSMProblems:w0,SciMLBase:E0,SciMLJacobianOperators:D0,SciMLLogging:R0,SciMLOperators:x0,SciMLPublic:M0,SciMLSensitivity:T0,SciMLStructures:F0,ScientificTypesBase:S0,ScopedValues:N0,Scratch:C0,SentinelArrays:k0,Serialization:A0,Setfield:O0,SharedArrays:I0,ShowCases:L0,SimpleBufferStream:P0,SimpleNonlinearSolve:z0,SimpleTraits:V0,Sockets:B0,SortingAlgorithms:j0,SparseArrays:q0,SparseConnectivityTracer:U0,SparseInverseSubset:$0,SparseMatrixColorings:H0,SpecialFunctions:Z0,SplittablesBase:K0,StackViews:G0,Static:W0,StaticArrayInterface:X0,StaticArrays:J0,StaticArraysCore:Y0,StatisticalTraits:Q0,Statistics:e_,StatsAPI:n_,StatsBase:t_,StatsFuns:r_,StrideArraysCore:o_,StridedViews:s_,StringEncodings:i_,StringManipulation:a_,StructArrays:l_,StructIO:c_,StructTypes:u_,StructUtils:f_,StyledStrings:d_,SuiteSparse:__,SuiteSparse_jll:m_,SymbolicIndexingInterface:p_,TOML:g_,TableTraits:v_,Tables:h_,Tar:b_,TensorCore:y_,TerminalLoggers:w_,Test:E_,ThreadingUtilities:D_,TimerOutputs:R_,Tracker:x_,Tracy:M_,TranscodingStreams:T_,Transducers:F_,TruncatedStacktraces:S_,Turing:N_,URIs:C_,UUIDs:k_,Unicode:A_,Unitful:O_,UnitfulAtomic:I_,UnsafeAtomics:L_,WeakRefStrings:P_,WeightInitializers:z_,WoodburyMatrices:V_,WorkerUtilities:B_,XML2_jll:j_,Xorg_libpciaccess_jll:q_,ZipFile:U_,Zlib_jll:$_,Zstd_jll:H_,Zygote:Z_,ZygoteRules:K_,libaec_jll:G_,libblastrampoline_jll:W_,nghttp2_jll:X_,oneTBB_jll:J_,p7zip_jll:Y_};function wt(e){return[...e.entries()].sort(([n,t],[r,i])=>n.localeCompare(r))}var em=me('<tr><td class="svelte-7y9k9c"> </td><td class="version svelte-7y9k9c"> </td></tr>'),nm=me('<table id="manifest" class="svelte-7y9k9c"><thead><tr><th class="svelte-7y9k9c">Package</th><th class="svelte-7y9k9c">Version</th></tr></thead><tbody></tbody></table>');function tm(e,n){hn(n,!1);let t=new Map;for(const[o,l]of Object.entries(Q_))t.set(o,l===""?null:l);At();var r=nm(),i=ve(W(r));dn(i,5,()=>wt(t),fn,(o,l)=>{let u=()=>O(l)[0],a=()=>O(l)[1];var c=em(),p=W(c),_=W(p),f=ve(p),g=W(f);De(()=>{qe(_,u()),qe(g,a()===null?"":`v${a()}`)}),ee(o,c)}),ee(e,r),bn()}function rm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ft,fr;function om(){if(fr)return ft;fr=1;function e(s){return s instanceof Map?s.clear=s.delete=s.set=function(){throw new Error("map is read-only")}:s instanceof Set&&(s.add=s.clear=s.delete=function(){throw new Error("set is read-only")}),Object.freeze(s),Object.getOwnPropertyNames(s).forEach(d=>{const h=s[d],N=typeof h;(N==="object"||N==="function")&&!Object.isFrozen(h)&&e(h)}),s}class n{constructor(d){d.data===void 0&&(d.data={}),this.data=d.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(s,...d){const h=Object.create(null);for(const N in s)h[N]=s[N];return d.forEach(function(N){for(const $ in N)h[$]=N[$]}),h}const i="</span>",o=s=>!!s.scope,l=(s,{prefix:d})=>{if(s.startsWith("language:"))return s.replace("language:","language-");if(s.includes(".")){const h=s.split(".");return[`${d}${h.shift()}`,...h.map((N,$)=>`${N}${"_".repeat($+1)}`)].join(" ")}return`${d}${s}`};class u{constructor(d,h){this.buffer="",this.classPrefix=h.classPrefix,d.walk(this)}addText(d){this.buffer+=t(d)}openNode(d){if(!o(d))return;const h=l(d.scope,{prefix:this.classPrefix});this.span(h)}closeNode(d){o(d)&&(this.buffer+=i)}value(){return this.buffer}span(d){this.buffer+=`<span class="${d}">`}}const a=(s={})=>{const d={children:[]};return Object.assign(d,s),d};class c{constructor(){this.rootNode=a(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(d){this.top.children.push(d)}openNode(d){const h=a({scope:d});this.add(h),this.stack.push(h)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(d){return this.constructor._walk(d,this.rootNode)}static _walk(d,h){return typeof h=="string"?d.addText(h):h.children&&(d.openNode(h),h.children.forEach(N=>this._walk(d,N)),d.closeNode(h)),d}static _collapse(d){typeof d!="string"&&d.children&&(d.children.every(h=>typeof h=="string")?d.children=[d.children.join("")]:d.children.forEach(h=>{c._collapse(h)}))}}class p extends c{constructor(d){super(),this.options=d}addText(d){d!==""&&this.add(d)}startScope(d){this.openNode(d)}endScope(){this.closeNode()}__addSublanguage(d,h){const N=d.root;h&&(N.scope=`language:${h}`),this.add(N)}toHTML(){return new u(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(s){return s?typeof s=="string"?s:s.source:null}function f(s){return F("(?=",s,")")}function g(s){return F("(?:",s,")*")}function v(s){return F("(?:",s,")?")}function F(...s){return s.map(h=>_(h)).join("")}function k(s){const d=s[s.length-1];return typeof d=="object"&&d.constructor===Object?(s.splice(s.length-1,1),d):{}}function z(...s){return"("+(k(s).capture?"":"?:")+s.map(N=>_(N)).join("|")+")"}function Z(s){return new RegExp(s.toString()+"|").exec("").length-1}function M(s,d){const h=s&&s.exec(d);return h&&h.index===0}const E=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function x(s,{joinWith:d}){let h=0;return s.map(N=>{h+=1;const $=h;let H=_(N),w="";for(;H.length>0;){const y=E.exec(H);if(!y){w+=H;break}w+=H.substring(0,y.index),H=H.substring(y.index+y[0].length),y[0][0]==="\\"&&y[1]?w+="\\"+String(Number(y[1])+$):(w+=y[0],y[0]==="("&&h++)}return w}).map(N=>`(${N})`).join(d)}const X=/\b\B/,S="[a-zA-Z]\\w*",U="[a-zA-Z_]\\w*",ie="\\b\\d+(\\.\\d+)?",Ne="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ne="\\b(0b[01]+)",pe="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Ce=(s={})=>{const d=/^#![ ]*\//;return s.binary&&(s.begin=F(d,/.*\b/,s.binary,/\b.*/)),r({scope:"meta",begin:d,end:/$/,relevance:0,"on:begin":(h,N)=>{h.index!==0&&N.ignoreMatch()}},s)},fe={begin:"\\\\[\\s\\S]",relevance:0},He={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[fe]},Xe={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[fe]},ke={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},be=function(s,d,h={}){const N=r({scope:"comment",begin:s,end:d,contains:[]},h);N.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const $=z("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return N.contains.push({begin:F(/[ ]+/,"(",$,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),N},Wr=be("//","$"),Xr=be("/\\*","\\*/"),Jr=be("#","$"),Yr={scope:"number",begin:ie,relevance:0},Qr={scope:"number",begin:Ne,relevance:0},eo={scope:"number",begin:ne,relevance:0},no={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[fe,{begin:/\[/,end:/\]/,relevance:0,contains:[fe]}]},to={scope:"title",begin:S,relevance:0},ro={scope:"title",begin:U,relevance:0},oo={begin:"\\.\\s*"+U,relevance:0};var wn=Object.freeze({__proto__:null,APOS_STRING_MODE:He,BACKSLASH_ESCAPE:fe,BINARY_NUMBER_MODE:eo,BINARY_NUMBER_RE:ne,COMMENT:be,C_BLOCK_COMMENT_MODE:Xr,C_LINE_COMMENT_MODE:Wr,C_NUMBER_MODE:Qr,C_NUMBER_RE:Ne,END_SAME_AS_BEGIN:function(s){return Object.assign(s,{"on:begin":(d,h)=>{h.data._beginMatch=d[1]},"on:end":(d,h)=>{h.data._beginMatch!==d[1]&&h.ignoreMatch()}})},HASH_COMMENT_MODE:Jr,IDENT_RE:S,MATCH_NOTHING_RE:X,METHOD_GUARD:oo,NUMBER_MODE:Yr,NUMBER_RE:ie,PHRASAL_WORDS_MODE:ke,QUOTE_STRING_MODE:Xe,REGEXP_MODE:no,RE_STARTERS_RE:pe,SHEBANG:Ce,TITLE_MODE:to,UNDERSCORE_IDENT_RE:U,UNDERSCORE_TITLE_MODE:ro});function so(s,d){s.input[s.index-1]==="."&&d.ignoreMatch()}function io(s,d){s.className!==void 0&&(s.scope=s.className,delete s.className)}function ao(s,d){d&&s.beginKeywords&&(s.begin="\\b("+s.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",s.__beforeBegin=so,s.keywords=s.keywords||s.beginKeywords,delete s.beginKeywords,s.relevance===void 0&&(s.relevance=0))}function lo(s,d){Array.isArray(s.illegal)&&(s.illegal=z(...s.illegal))}function co(s,d){if(s.match){if(s.begin||s.end)throw new Error("begin & end are not supported with match");s.begin=s.match,delete s.match}}function uo(s,d){s.relevance===void 0&&(s.relevance=1)}const fo=(s,d)=>{if(!s.beforeMatch)return;if(s.starts)throw new Error("beforeMatch cannot be used with starts");const h=Object.assign({},s);Object.keys(s).forEach(N=>{delete s[N]}),s.keywords=h.keywords,s.begin=F(h.beforeMatch,f(h.begin)),s.starts={relevance:0,contains:[Object.assign(h,{endsParent:!0})]},s.relevance=0,delete h.beforeMatch},_o=["of","and","for","in","not","or","if","then","parent","list","value"],mo="keyword";function Ot(s,d,h=mo){const N=Object.create(null);return typeof s=="string"?$(h,s.split(" ")):Array.isArray(s)?$(h,s):Object.keys(s).forEach(function(H){Object.assign(N,Ot(s[H],d,H))}),N;function $(H,w){d&&(w=w.map(y=>y.toLowerCase())),w.forEach(function(y){const T=y.split("|");N[T[0]]=[H,po(T[0],T[1])]})}}function po(s,d){return d?Number(d):go(s)?0:1}function go(s){return _o.includes(s.toLowerCase())}const It={},Ze=s=>{console.error(s)},Lt=(s,...d)=>{console.log(`WARN: ${s}`,...d)},Je=(s,d)=>{It[`${s}/${d}`]||(console.log(`Deprecated as of ${s}. ${d}`),It[`${s}/${d}`]=!0)},En=new Error;function Pt(s,d,{key:h}){let N=0;const $=s[h],H={},w={};for(let y=1;y<=d.length;y++)w[y+N]=$[y],H[y+N]=!0,N+=Z(d[y-1]);s[h]=w,s[h]._emit=H,s[h]._multi=!0}function vo(s){if(Array.isArray(s.begin)){if(s.skip||s.excludeBegin||s.returnBegin)throw Ze("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),En;if(typeof s.beginScope!="object"||s.beginScope===null)throw Ze("beginScope must be object"),En;Pt(s,s.begin,{key:"beginScope"}),s.begin=x(s.begin,{joinWith:""})}}function ho(s){if(Array.isArray(s.end)){if(s.skip||s.excludeEnd||s.returnEnd)throw Ze("skip, excludeEnd, returnEnd not compatible with endScope: {}"),En;if(typeof s.endScope!="object"||s.endScope===null)throw Ze("endScope must be object"),En;Pt(s,s.end,{key:"endScope"}),s.end=x(s.end,{joinWith:""})}}function bo(s){s.scope&&typeof s.scope=="object"&&s.scope!==null&&(s.beginScope=s.scope,delete s.scope)}function yo(s){bo(s),typeof s.beginScope=="string"&&(s.beginScope={_wrap:s.beginScope}),typeof s.endScope=="string"&&(s.endScope={_wrap:s.endScope}),vo(s),ho(s)}function wo(s){function d(w,y){return new RegExp(_(w),"m"+(s.case_insensitive?"i":"")+(s.unicodeRegex?"u":"")+(y?"g":""))}class h{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(y,T){T.position=this.position++,this.matchIndexes[this.matchAt]=T,this.regexes.push([T,y]),this.matchAt+=Z(y)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const y=this.regexes.map(T=>T[1]);this.matcherRe=d(x(y,{joinWith:"|"}),!0),this.lastIndex=0}exec(y){this.matcherRe.lastIndex=this.lastIndex;const T=this.matcherRe.exec(y);if(!T)return null;const J=T.findIndex((sn,tt)=>tt>0&&sn!==void 0),K=this.matchIndexes[J];return T.splice(0,J),Object.assign(T,K)}}class N{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(y){if(this.multiRegexes[y])return this.multiRegexes[y];const T=new h;return this.rules.slice(y).forEach(([J,K])=>T.addRule(J,K)),T.compile(),this.multiRegexes[y]=T,T}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(y,T){this.rules.push([y,T]),T.type==="begin"&&this.count++}exec(y){const T=this.getMatcher(this.regexIndex);T.lastIndex=this.lastIndex;let J=T.exec(y);if(this.resumingScanAtSamePosition()&&!(J&&J.index===this.lastIndex)){const K=this.getMatcher(0);K.lastIndex=this.lastIndex+1,J=K.exec(y)}return J&&(this.regexIndex+=J.position+1,this.regexIndex===this.count&&this.considerAll()),J}}function $(w){const y=new N;return w.contains.forEach(T=>y.addRule(T.begin,{rule:T,type:"begin"})),w.terminatorEnd&&y.addRule(w.terminatorEnd,{type:"end"}),w.illegal&&y.addRule(w.illegal,{type:"illegal"}),y}function H(w,y){const T=w;if(w.isCompiled)return T;[io,co,yo,fo].forEach(K=>K(w,y)),s.compilerExtensions.forEach(K=>K(w,y)),w.__beforeBegin=null,[ao,lo,uo].forEach(K=>K(w,y)),w.isCompiled=!0;let J=null;return typeof w.keywords=="object"&&w.keywords.$pattern&&(w.keywords=Object.assign({},w.keywords),J=w.keywords.$pattern,delete w.keywords.$pattern),J=J||/\w+/,w.keywords&&(w.keywords=Ot(w.keywords,s.case_insensitive)),T.keywordPatternRe=d(J,!0),y&&(w.begin||(w.begin=/\B|\b/),T.beginRe=d(T.begin),!w.end&&!w.endsWithParent&&(w.end=/\B|\b/),w.end&&(T.endRe=d(T.end)),T.terminatorEnd=_(T.end)||"",w.endsWithParent&&y.terminatorEnd&&(T.terminatorEnd+=(w.end?"|":"")+y.terminatorEnd)),w.illegal&&(T.illegalRe=d(w.illegal)),w.contains||(w.contains=[]),w.contains=[].concat(...w.contains.map(function(K){return Eo(K==="self"?w:K)})),w.contains.forEach(function(K){H(K,T)}),w.starts&&H(w.starts,y),T.matcher=$(T),T}if(s.compilerExtensions||(s.compilerExtensions=[]),s.contains&&s.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return s.classNameAliases=r(s.classNameAliases||{}),H(s)}function zt(s){return s?s.endsWithParent||zt(s.starts):!1}function Eo(s){return s.variants&&!s.cachedVariants&&(s.cachedVariants=s.variants.map(function(d){return r(s,{variants:null},d)})),s.cachedVariants?s.cachedVariants:zt(s)?r(s,{starts:s.starts?r(s.starts):null}):Object.isFrozen(s)?r(s):s}var Do="11.11.1";class Ro extends Error{constructor(d,h){super(d),this.name="HTMLInjectionError",this.html=h}}const nt=t,Vt=r,Bt=Symbol("nomatch"),xo=7,jt=function(s){const d=Object.create(null),h=Object.create(null),N=[];let $=!0;const H="Could not find the language '{}', did you forget to load/include a language module?",w={disableAutodetect:!0,name:"Plain text",contains:[]};let y={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:p};function T(m){return y.noHighlightRe.test(m)}function J(m){let R=m.className+" ";R+=m.parentNode?m.parentNode.className:"";const I=y.languageDetectRe.exec(R);if(I){const B=Ae(I[1]);return B||(Lt(H.replace("{}",I[1])),Lt("Falling back to no-highlight mode for this block.",m)),B?I[1]:"no-highlight"}return R.split(/\s+/).find(B=>T(B)||Ae(B))}function K(m,R,I){let B="",G="";typeof R=="object"?(B=m,I=R.ignoreIllegals,G=R.language):(Je("10.7.0","highlight(lang, code, ...args) has been deprecated."),Je("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),G=m,B=R),I===void 0&&(I=!0);const ge={code:B,language:G};Rn("before:highlight",ge);const Oe=ge.result?ge.result:sn(ge.language,ge.code,I);return Oe.code=ge.code,Rn("after:highlight",Oe),Oe}function sn(m,R,I,B){const G=Object.create(null);function ge(b,D){return b.keywords[D]}function Oe(){if(!C.keywords){Y.addText(j);return}let b=0;C.keywordPatternRe.lastIndex=0;let D=C.keywordPatternRe.exec(j),A="";for(;D;){A+=j.substring(b,D.index);const L=we.case_insensitive?D[0].toLowerCase():D[0],Q=ge(C,L);if(Q){const[Me,qo]=Q;if(Y.addText(A),A="",G[L]=(G[L]||0)+1,G[L]<=xo&&(Tn+=qo),Me.startsWith("_"))A+=D[0];else{const Uo=we.classNameAliases[Me]||Me;ye(D[0],Uo)}}else A+=D[0];b=C.keywordPatternRe.lastIndex,D=C.keywordPatternRe.exec(j)}A+=j.substring(b),Y.addText(A)}function xn(){if(j==="")return;let b=null;if(typeof C.subLanguage=="string"){if(!d[C.subLanguage]){Y.addText(j);return}b=sn(C.subLanguage,j,!0,Wt[C.subLanguage]),Wt[C.subLanguage]=b._top}else b=rt(j,C.subLanguage.length?C.subLanguage:null);C.relevance>0&&(Tn+=b.relevance),Y.__addSublanguage(b._emitter,b.language)}function ae(){C.subLanguage!=null?xn():Oe(),j=""}function ye(b,D){b!==""&&(Y.startScope(D),Y.addText(b),Y.endScope())}function Ht(b,D){let A=1;const L=D.length-1;for(;A<=L;){if(!b._emit[A]){A++;continue}const Q=we.classNameAliases[b[A]]||b[A],Me=D[A];Q?ye(Me,Q):(j=Me,Oe(),j=""),A++}}function Zt(b,D){return b.scope&&typeof b.scope=="string"&&Y.openNode(we.classNameAliases[b.scope]||b.scope),b.beginScope&&(b.beginScope._wrap?(ye(j,we.classNameAliases[b.beginScope._wrap]||b.beginScope._wrap),j=""):b.beginScope._multi&&(Ht(b.beginScope,D),j="")),C=Object.create(b,{parent:{value:C}}),C}function Kt(b,D,A){let L=M(b.endRe,A);if(L){if(b["on:end"]){const Q=new n(b);b["on:end"](D,Q),Q.isMatchIgnored&&(L=!1)}if(L){for(;b.endsParent&&b.parent;)b=b.parent;return b}}if(b.endsWithParent)return Kt(b.parent,D,A)}function Po(b){return C.matcher.regexIndex===0?(j+=b[0],1):(at=!0,0)}function zo(b){const D=b[0],A=b.rule,L=new n(A),Q=[A.__beforeBegin,A["on:begin"]];for(const Me of Q)if(Me&&(Me(b,L),L.isMatchIgnored))return Po(D);return A.skip?j+=D:(A.excludeBegin&&(j+=D),ae(),!A.returnBegin&&!A.excludeBegin&&(j=D)),Zt(A,b),A.returnBegin?0:D.length}function Vo(b){const D=b[0],A=R.substring(b.index),L=Kt(C,b,A);if(!L)return Bt;const Q=C;C.endScope&&C.endScope._wrap?(ae(),ye(D,C.endScope._wrap)):C.endScope&&C.endScope._multi?(ae(),Ht(C.endScope,b)):Q.skip?j+=D:(Q.returnEnd||Q.excludeEnd||(j+=D),ae(),Q.excludeEnd&&(j=D));do C.scope&&Y.closeNode(),!C.skip&&!C.subLanguage&&(Tn+=C.relevance),C=C.parent;while(C!==L.parent);return L.starts&&Zt(L.starts,b),Q.returnEnd?0:D.length}function Bo(){const b=[];for(let D=C;D!==we;D=D.parent)D.scope&&b.unshift(D.scope);b.forEach(D=>Y.openNode(D))}let Mn={};function Gt(b,D){const A=D&&D[0];if(j+=b,A==null)return ae(),0;if(Mn.type==="begin"&&D.type==="end"&&Mn.index===D.index&&A===""){if(j+=R.slice(D.index,D.index+1),!$){const L=new Error(`0 width match regex (${m})`);throw L.languageName=m,L.badRule=Mn.rule,L}return 1}if(Mn=D,D.type==="begin")return zo(D);if(D.type==="illegal"&&!I){const L=new Error('Illegal lexeme "'+A+'" for mode "'+(C.scope||"<unnamed>")+'"');throw L.mode=C,L}else if(D.type==="end"){const L=Vo(D);if(L!==Bt)return L}if(D.type==="illegal"&&A==="")return j+=`
`,1;if(it>1e5&&it>D.index*3)throw new Error("potential infinite loop, way more iterations than matches");return j+=A,A.length}const we=Ae(m);if(!we)throw Ze(H.replace("{}",m)),new Error('Unknown language: "'+m+'"');const jo=wo(we);let st="",C=B||jo;const Wt={},Y=new y.__emitter(y);Bo();let j="",Tn=0,Ke=0,it=0,at=!1;try{if(we.__emitTokens)we.__emitTokens(R,Y);else{for(C.matcher.considerAll();;){it++,at?at=!1:C.matcher.considerAll(),C.matcher.lastIndex=Ke;const b=C.matcher.exec(R);if(!b)break;const D=R.substring(Ke,b.index),A=Gt(D,b);Ke=b.index+A}Gt(R.substring(Ke))}return Y.finalize(),st=Y.toHTML(),{language:m,value:st,relevance:Tn,illegal:!1,_emitter:Y,_top:C}}catch(b){if(b.message&&b.message.includes("Illegal"))return{language:m,value:nt(R),illegal:!0,relevance:0,_illegalBy:{message:b.message,index:Ke,context:R.slice(Ke-100,Ke+100),mode:b.mode,resultSoFar:st},_emitter:Y};if($)return{language:m,value:nt(R),illegal:!1,relevance:0,errorRaised:b,_emitter:Y,_top:C};throw b}}function tt(m){const R={value:nt(m),illegal:!1,relevance:0,_top:w,_emitter:new y.__emitter(y)};return R._emitter.addText(m),R}function rt(m,R){R=R||y.languages||Object.keys(d);const I=tt(m),B=R.filter(Ae).filter($t).map(ae=>sn(ae,m,!1));B.unshift(I);const G=B.sort((ae,ye)=>{if(ae.relevance!==ye.relevance)return ye.relevance-ae.relevance;if(ae.language&&ye.language){if(Ae(ae.language).supersetOf===ye.language)return 1;if(Ae(ye.language).supersetOf===ae.language)return-1}return 0}),[ge,Oe]=G,xn=ge;return xn.secondBest=Oe,xn}function Mo(m,R,I){const B=R&&h[R]||I;m.classList.add("hljs"),m.classList.add(`language-${B}`)}function ot(m){let R=null;const I=J(m);if(T(I))return;if(Rn("before:highlightElement",{el:m,language:I}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(y.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),y.throwUnescapedHTML))throw new Ro("One of your code blocks includes unescaped HTML.",m.innerHTML);R=m;const B=R.textContent,G=I?K(B,{language:I,ignoreIllegals:!0}):rt(B);m.innerHTML=G.value,m.dataset.highlighted="yes",Mo(m,I,G.language),m.result={language:G.language,re:G.relevance,relevance:G.relevance},G.secondBest&&(m.secondBest={language:G.secondBest.language,relevance:G.secondBest.relevance}),Rn("after:highlightElement",{el:m,result:G,text:B})}function To(m){y=Vt(y,m)}const Fo=()=>{Dn(),Je("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function So(){Dn(),Je("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let qt=!1;function Dn(){function m(){Dn()}if(document.readyState==="loading"){qt||window.addEventListener("DOMContentLoaded",m,!1),qt=!0;return}document.querySelectorAll(y.cssSelector).forEach(ot)}function No(m,R){let I=null;try{I=R(s)}catch(B){if(Ze("Language definition for '{}' could not be registered.".replace("{}",m)),$)Ze(B);else throw B;I=w}I.name||(I.name=m),d[m]=I,I.rawDefinition=R.bind(null,s),I.aliases&&Ut(I.aliases,{languageName:m})}function Co(m){delete d[m];for(const R of Object.keys(h))h[R]===m&&delete h[R]}function ko(){return Object.keys(d)}function Ae(m){return m=(m||"").toLowerCase(),d[m]||d[h[m]]}function Ut(m,{languageName:R}){typeof m=="string"&&(m=[m]),m.forEach(I=>{h[I.toLowerCase()]=R})}function $t(m){const R=Ae(m);return R&&!R.disableAutodetect}function Ao(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=R=>{m["before:highlightBlock"](Object.assign({block:R.el},R))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=R=>{m["after:highlightBlock"](Object.assign({block:R.el},R))})}function Oo(m){Ao(m),N.push(m)}function Io(m){const R=N.indexOf(m);R!==-1&&N.splice(R,1)}function Rn(m,R){const I=m;N.forEach(function(B){B[I]&&B[I](R)})}function Lo(m){return Je("10.7.0","highlightBlock will be removed entirely in v12.0"),Je("10.7.0","Please use highlightElement now."),ot(m)}Object.assign(s,{highlight:K,highlightAuto:rt,highlightAll:Dn,highlightElement:ot,highlightBlock:Lo,configure:To,initHighlighting:Fo,initHighlightingOnLoad:So,registerLanguage:No,unregisterLanguage:Co,listLanguages:ko,getLanguage:Ae,registerAliases:Ut,autoDetection:$t,inherit:Vt,addPlugin:Oo,removePlugin:Io}),s.debugMode=function(){$=!1},s.safeMode=function(){$=!0},s.versionString=Do,s.regex={concat:F,lookahead:f,either:z,optional:v,anyNumberOfTimes:g};for(const m in wn)typeof wn[m]=="object"&&e(wn[m]);return Object.assign(s,wn),s},Ye=jt({});return Ye.newInstance=()=>jt({}),ft=Ye,Ye.HighlightJS=Ye,Ye.default=Ye,ft}var sm=om();const dr=rm(sm);var im=me("<pre><code><!></code></pre>");function am(e,n){const t=Vn(n,["children","$$slots","$$events","$$legacy"]),r=Vn(t,["code","highlighted","languageName","langtag"]);let i=Ve(n,"code",8),o=Ve(n,"highlighted",8),l=Ve(n,"languageName",8,"plaintext"),u=Ve(n,"langtag",8,!1);var a=im();let c;var p=W(a);kt(p,1,"",null,{},{hljs:!0});var _=W(p);{var f=v=>{var F=Ct(),k=Kn(F);ii(k,o),ee(v,F)},g=v=>{var F=Ys();De(()=>qe(F,i())),ee(v,F)};bt(_,v=>{o()?v(f):v(g,!1)})}De(v=>c=mi(a,c,{"data-language":l(),...r,[un]:v},"svelte-1w9vok"),[()=>({langtag:u()})],St),ee(e,a)}function lm(e,n){const t=Vn(n,["children","$$slots","$$events","$$legacy"]),r=Vn(t,["language","code","langtag"]);hn(n,!1);let i=Ve(n,"language",8),o=Ve(n,"code",8),l=Ve(n,"langtag",8,!1);const u=wi();let a=$n("");Ei(()=>{O(a)&&u("highlight",{highlighted:O(a)})}),Ss(()=>(gt(i()),gt(o())),()=>{dr.registerLanguage(i().name,i().register),ce(a,dr.highlight(o(),{language:i().name}).value)}),Ns(),At();var c=Ct(),p=Kn(c);ai(p,n,"default",{get highlighted(){return O(a)}},_=>{am(_,bi(()=>r,{get languageName(){return i().name},get langtag(){return l()},get highlighted(){return O(a)},get code(){return o()}}))}),ee(e,c),bn()}function cm(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",o={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},l={keywords:o,illegal:/<\//},u={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},a={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},c={className:"subst",begin:/\$\(/,end:/\)/,keywords:o},p={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,c,p],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},f={className:"string",contains:[e.BACKSLASH_ESCAPE,c,p],begin:"`",end:"`"},g={className:"meta",begin:"@"+n},v={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return l.name="Julia",l.contains=[u,a,_,f,g,v,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],c.contains=l.contains,l}const um={name:"julia",register:cm};var fm=me('<td class="svelte-mm5qum"> <div class="model-definition svelte-mm5qum"><!> <button id="copy" class="svelte-mm5qum">Copy to clipboard</button></div></td>');function dm(e,n){let t;function r(){navigator.clipboard.writeText(n.definition);let c=t.offsetWidth;t.style.width=c+"px",t.textContent="Copied!",t.disabled=!0,setTimeout(()=>{t.textContent="Copy to clipboard",t.style.width=null,t.disabled=!1},2e3)}var i=fm(),o=W(i),l=ve(o),u=W(l);lm(u,{language:um,get code(){return n.definition}});var a=ve(u,2);a.__click=r,pi(a,c=>t=c,()=>t),De(()=>qe(o,`${n.name??""} `)),ee(e,i)}jr(["click"]);var _m=me('<th class="svelte-1y8c38"> </th>'),mm=me('<td class="svelte-1y8c38"> </td>'),pm=me('<a class="issue svelte-1y8c38" target="_blank">(?)</a>'),gm=me('<td class="svelte-1y8c38"><!> <span> </span></td>'),vm=me('<tr class="svelte-1y8c38"><!><!></tr>'),hm=me('<table id="results" class="svelte-1y8c38"><thead><tr class="svelte-1y8c38"><th class="svelte-1y8c38">Model name \\\\ AD type</th><!></tr></thead><tbody></tbody></table>');function bm(e,n){hn(n,!0);const t=[...n.data.keys()],r=n.data.get(t[0]).keys(),i="https://github.com/EnzymeAD/Enzyme.jl/issues/1995",l={assume_mvnormal__EnzymeForward:i,assume_wishart__EnzymeForward:i,multithreaded__Mooncake:"https://github.com/chalk-lab/Mooncake.jl/issues/570"};var u=hm(),a=W(u),c=W(a),p=ve(W(c));dn(p,17,()=>r,fn,(f,g)=>{var v=_m(),F=W(v);De(()=>qe(F,O(g))),ee(f,v)});var _=ve(a);dn(_,21,()=>wt(n.data),fn,(f,g)=>{let v=()=>O(g)[0],F=()=>O(g)[1];var k=vm(),z=W(k);dm(z,{get name(){return v()},get definition(){return n.modelDefinitions[v()]}});var Z=ve(z);dn(Z,17,()=>wt(F()),fn,(M,E)=>{let x=()=>O(E)[0],X=()=>O(E)[1];var S=Ct(),U=Kn(S);{var ie=ne=>{var pe=mm(),Ce=W(pe);De(fe=>qe(Ce,fe),[()=>X().toFixed(3)]),ee(ne,pe)},Ne=ne=>{var pe=gm(),Ce=W(pe);{var fe=ke=>{var be=pm();De(()=>yt(be,"href",l[`${v()}__${x()}`])),ee(ke,be)};bt(Ce,ke=>{l[`${v()}__${x()}`]&&ke(fe)})}var He=ve(Ce,2),Xe=W(He);De(()=>{kt(He,1,$r(X()),"svelte-1y8c38"),qe(Xe,X())}),ee(ne,pe)};bt(U,ne=>{typeof X()=="number"?ne(ie):ne(Ne,!1)})}ee(M,S)}),ee(f,k)}),ee(e,u),bn()}var ym=me("<h3> </h3> <!>",1),wm=me(`<div id="main-wrapper" class="svelte-3oks6t"><main class="svelte-3oks6t"><h1>Turing AD tests</h1> <p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p> <p>This page is intended as a brief overview of how different AD
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
                currently does not work on Julia 1.12.</b></div> <h2>Results</h2> <p><a href="adtests.json" target="_blank" download="">Download the raw data (JSON)</a></p> <!> <h2>Manifest</h2> <p>The tests above were run with the following package versions:</p> <!></main></div>`);function Em(e,n){hn(n,!1);let t=$n(new Map);for(const[u,a]of Object.entries(Ra)){let c=a.__category__;delete a.__category__;let p=new Map;for(const[_,f]of Object.entries(a))p.set(_,f);O(t).has(c)||O(t).set(c,new Map),O(t).get(c).set(u,p)}ce(t,new Map([...O(t).entries()].sort())),console.log(O(t)),At();var r=wm(),i=W(r),o=ve(W(i),16);dn(o,1,()=>O(t).entries(),fn,(u,a)=>{let c=()=>O(a)[0],p=()=>O(a)[1];var _=ym(),f=Kn(_),g=W(f),v=ve(f,2);bm(v,{get data(){return p()},modelDefinitions:Rl}),De(()=>qe(g,c())),ee(u,_)});var l=ve(o,6);tm(l,{}),ee(e,r),bn()}Qs(Em,{target:document.getElementById("app")});
