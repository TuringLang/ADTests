(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Yt=!1;var jn=Array.isArray,Uo=Array.prototype.indexOf,yt=Array.from,Ho=Object.defineProperty,je=Object.getOwnPropertyDescriptor,pr=Object.getOwnPropertyDescriptors,Zo=Object.prototype,Ko=Array.prototype,bt=Object.getPrototypeOf,Qt=Object.isExtensible;function ln(e){return typeof e=="function"}function Go(e){return e()}function ut(e){for(var n=0;n<e.length;n++)e[n]()}const he=2,gr=4,qn=8,wt=16,Ce=32,rn=64,Cn=128,ue=256,kn=512,se=1024,Me=2048,Ue=4096,Se=8192,$n=16384,Wo=32768,Et=65536,Xo=1<<17,Jo=1<<19,vr=1<<20,ft=1<<21,Ge=Symbol("$state"),hr=Symbol("legacy props"),Yo=Symbol("");function yr(e){return e===this.v}function Qo(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Dt(e){return!Qo(e,this.v)}function es(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ns(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ts(e){throw new Error("https://svelte.dev/e/effect_orphan")}function rs(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function os(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function ss(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function is(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function as(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ls(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let vn=!1,cs=!1;function us(){vn=!0}const xt=1,Rt=2,br=4,fs=8,ds=16,_s=1,ms=2,wr=4,ps=8,gs=16,vs=1,hs=2,ie=Symbol(),ys="http://www.w3.org/1999/xhtml",bs="@attach";function Er(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let q=null;function er(e){q=e}function hn(e,n=!1,t){var r=q={p:q,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};vn&&!n&&(q.l={s:null,u:null,r1:[],r2:en(!1)}),Ms(()=>{r.d=!0})}function yn(e){const n=q;if(n!==null){const l=n.e;if(l!==null){var t=z,r=V;n.e=null;try{for(var s=0;s<l.length;s++){var i=l[s];$e(i.effect),Te(i.reaction),Ft(i.fn)}}finally{$e(t),Te(r)}}q=n.p,n.m=!0}return{}}function Un(){return!vn||q!==null&&q.l===null}function ze(e){if(typeof e!="object"||e===null||Ge in e)return e;const n=bt(e);if(n!==Zo&&n!==Ko)return e;var t=new Map,r=jn(e),s=Ee(0),i=V,l=u=>{var a=V;Te(i);var f=u();return Te(a),f};return r&&t.set("length",Ee(e.length)),new Proxy(e,{defineProperty(u,a,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&is();var v=t.get(a);return v===void 0?(v=l(()=>Ee(f.value)),t.set(a,v)):re(v,l(()=>ze(f.value))),!0},deleteProperty(u,a){var f=t.get(a);if(f===void 0)a in u&&(t.set(a,l(()=>Ee(ie))),it(s));else{if(r&&typeof a=="string"){var v=t.get("length"),_=Number(a);Number.isInteger(_)&&_<v.v&&re(v,_)}re(f,ie),it(s)}return!0},get(u,a,f){var m;if(a===Ge)return e;var v=t.get(a),_=a in u;if(v===void 0&&(!_||(m=je(u,a))!=null&&m.writable)&&(v=l(()=>Ee(ze(_?u[a]:ie))),t.set(a,v)),v!==void 0){var c=O(v);return c===ie?void 0:c}return Reflect.get(u,a,f)},getOwnPropertyDescriptor(u,a){var f=Reflect.getOwnPropertyDescriptor(u,a);if(f&&"value"in f){var v=t.get(a);v&&(f.value=O(v))}else if(f===void 0){var _=t.get(a),c=_==null?void 0:_.v;if(_!==void 0&&c!==ie)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return f},has(u,a){var c;if(a===Ge)return!0;var f=t.get(a),v=f!==void 0&&f.v!==ie||Reflect.has(u,a);if(f!==void 0||z!==null&&(!v||(c=je(u,a))!=null&&c.writable)){f===void 0&&(f=l(()=>Ee(v?ze(u[a]):ie)),t.set(a,f));var _=O(f);if(_===ie)return!1}return v},set(u,a,f,v){var $;var _=t.get(a),c=a in u;if(r&&a==="length")for(var m=f;m<_.v;m+=1){var g=t.get(m+"");g!==void 0?re(g,ie):m in u&&(g=l(()=>Ee(ie)),t.set(m+"",g))}_===void 0?(!c||($=je(u,a))!=null&&$.writable)&&(_=l(()=>Ee(void 0)),re(_,l(()=>ze(f))),t.set(a,_)):(c=_.v!==ie,re(_,l(()=>ze(f))));var M=Reflect.getOwnPropertyDescriptor(u,a);if(M!=null&&M.set&&M.set.call(v,f),!c){if(r&&typeof a=="string"){var F=t.get("length"),L=Number(a);Number.isInteger(L)&&L>=F.v&&re(F,L+1)}it(s)}return!0},ownKeys(u){O(s);var a=Reflect.ownKeys(u).filter(_=>{var c=t.get(_);return c===void 0||c.v!==ie});for(var[f,v]of t)v.v!==ie&&!(f in u)&&a.push(f);return a},setPrototypeOf(){as()}})}function it(e,n=1){re(e,e.v+n)}function mn(e){var n=he|Me,t=V!==null&&(V.f&he)!==0?V:null;return z===null||t!==null&&(t.f&ue)!==0?n|=ue:z.f|=vr,{ctx:q,deps:null,effects:null,equals:yr,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??z}}function Mt(e){const n=mn(e);return n.equals=Dt,n}function Dr(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)Ne(n[t])}}function ws(e){for(var n=e.parent;n!==null;){if((n.f&he)===0)return n;n=n.parent}return null}function xr(e){var n,t=z;$e(ws(e));try{Dr(e),n=Br(e)}finally{$e(t)}return n}function Rr(e){var n=xr(e),t=(Ve||(e.f&ue)!==0)&&e.deps!==null?Ue:se;me(e,t),e.equals(n)||(e.v=n,e.wv=zr())}const pn=new Map;function en(e,n){var t={f:0,v:e,reactions:null,equals:yr,rv:0,wv:0};return t}function Ee(e,n){const t=en(e);return As(t),t}function Tt(e,n=!1){var r;const t=en(e);return n||(t.equals=Dt),vn&&q!==null&&q.l!==null&&((r=q.l).s??(r.s=[])).push(t),t}function re(e,n,t=!1){V!==null&&!De&&Un()&&(V.f&(he|wt))!==0&&!(oe!=null&&oe.includes(e))&&ls();let r=t?ze(n):n;return dt(e,r)}function dt(e,n){if(!e.equals(n)){var t=e.v;bn?pn.set(e,n):pn.set(e,t),e.v=n,(e.f&he)!==0&&((e.f&Me)!==0&&xr(e),me(e,(e.f&ue)===0?se:Ue)),e.wv=zr(),Mr(e,Me),Un()&&z!==null&&(z.f&se)!==0&&(z.f&(Ce|rn))===0&&(de===null?Os([e]):de.push(e))}return n}function nr(e,n=1){var t=O(e),r=n===1?t++:t--;return re(e,t),r}function Mr(e,n){var t=e.reactions;if(t!==null)for(var r=Un(),s=t.length,i=0;i<s;i++){var l=t[i],u=l.f;(u&Me)===0&&(!r&&l===z||(me(l,n),(u&(se|ue))!==0&&((u&he)!==0?Mr(l,Ue):Jn(l))))}}let Es=!1;var tr,Tr,Fr,Sr;function Ds(){if(tr===void 0){tr=window,Tr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Fr=je(n,"firstChild").get,Sr=je(n,"nextSibling").get,Qt(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Qt(t)&&(t.__t=void 0)}}function Hn(e=""){return document.createTextNode(e)}function xe(e){return Fr.call(e)}function Zn(e){return Sr.call(e)}function H(e,n){return xe(e)}function Kn(e,n){{var t=xe(e);return t instanceof Comment&&t.data===""?Zn(t):t}}function _e(e,n=1,t=!1){let r=e;for(;n--;)r=Zn(r);return r}function xs(e){e.textContent=""}function Nr(e){z===null&&V===null&&ts(),V!==null&&(V.f&ue)!==0&&z===null&&ns(),bn&&es()}function Rs(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function on(e,n,t,r=!0){var s=z,i={ctx:q,deps:null,nodes_start:null,nodes_end:null,f:e|Me,first:null,fn:n,last:null,next:null,parent:s,prev:null,teardown:null,transitions:null,wv:0};if(t)try{Xn(i),i.f|=Wo}catch(a){throw Ne(i),a}else n!==null&&Jn(i);var l=t&&i.deps===null&&i.first===null&&i.nodes_start===null&&i.teardown===null&&(i.f&(vr|Cn))===0;if(!l&&r&&(s!==null&&Rs(i,s),V!==null&&(V.f&he)!==0)){var u=V;(u.effects??(u.effects=[])).push(i)}return i}function Ms(e){const n=on(qn,null,!1);return me(n,se),n.teardown=e,n}function rr(e){Nr();var n=z!==null&&(z.f&Ce)!==0&&q!==null&&!q.m;if(n){var t=q;(t.e??(t.e=[])).push({fn:e,effect:z,reaction:V})}else{var r=Ft(e);return r}}function Ts(e){return Nr(),St(e)}function Fs(e){const n=on(rn,e,!0);return(t={})=>new Promise(r=>{t.outro?An(n,()=>{Ne(n),r(void 0)}):(Ne(n),r(void 0))})}function Ft(e){return on(gr,e,!1)}function Ss(e,n){var t=q,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=St(()=>{e(),!r.ran&&(r.ran=!0,re(t.l.r2,!0),Vn(n))})}function Ns(){var e=q;St(()=>{if(O(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&se)!==0&&me(t,Ue),sn(t)&&Xn(t),n.ran=!1}e.l.r2.v=!1}})}function St(e){return on(qn,e,!0)}function Re(e,n=[],t=mn){const r=n.map(t);return Gn(()=>e(...r.map(O)))}function Gn(e,n=0){return on(qn|wt|n,e,!0)}function nn(e,n=!0){return on(qn|Ce,e,!0,n)}function Cr(e){var n=e.teardown;if(n!==null){const t=bn,r=V;or(!0),Te(null);try{n.call(null)}finally{or(t),Te(r)}}}function kr(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&rn)!==0?t.parent=null:Ne(t,n),t=r}}function Cs(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&Ce)===0&&Ne(n),n=t}}function Ne(e,n=!0){var t=!1;(n||(e.f&Jo)!==0)&&e.nodes_start!==null&&(Ar(e.nodes_start,e.nodes_end),t=!0),kr(e,n&&!t),zn(e,0),me(e,$n);var r=e.transitions;if(r!==null)for(const i of r)i.stop();Cr(e);var s=e.parent;s!==null&&s.first!==null&&Or(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Ar(e,n){for(;e!==null;){var t=e===n?null:Zn(e);e.remove(),e=t}}function Or(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function An(e,n){var t=[];Nt(e,t,!0),Ir(t,()=>{Ne(e),n&&n()})}function Ir(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var s of e)s.out(r)}else n()}function Nt(e,n,t){if((e.f&Se)===0){if(e.f^=Se,e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&n.push(l);for(var r=e.first;r!==null;){var s=r.next,i=(r.f&Et)!==0||(r.f&Ce)!==0;Nt(r,n,i?t:!1),r=s}}}function On(e){Lr(e,!0)}function Lr(e,n){if((e.f&Se)!==0){e.f^=Se,(e.f&se)===0&&(e.f^=se),sn(e)&&(me(e,Me),Jn(e));for(var t=e.first;t!==null;){var r=t.next,s=(t.f&Et)!==0||(t.f&Ce)!==0;Lr(t,s?n:!1),t=r}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||n)&&i.in()}}let In=[];function ks(){var e=In;In=[],ut(e)}function Ct(e){In.length===0&&queueMicrotask(ks),In.push(e)}let Sn=!1,_t=!1,Ln=null,We=!1,bn=!1;function or(e){bn=e}let Nn=[];let V=null,De=!1;function Te(e){V=e}let z=null;function $e(e){z=e}let oe=null;function As(e){V!==null&&V.f&ft&&(oe===null?oe=[e]:oe.push(e))}let te=null,ce=0,de=null;function Os(e){de=e}let Pr=1,Pn=0,Ve=!1;function zr(){return++Pr}function sn(e){var _;var n=e.f;if((n&Me)!==0)return!0;if((n&Ue)!==0){var t=e.deps,r=(n&ue)!==0;if(t!==null){var s,i,l=(n&kn)!==0,u=r&&z!==null&&!Ve,a=t.length;if(l||u){var f=e,v=f.parent;for(s=0;s<a;s++)i=t[s],(l||!((_=i==null?void 0:i.reactions)!=null&&_.includes(f)))&&(i.reactions??(i.reactions=[])).push(f);l&&(f.f^=kn),u&&v!==null&&(v.f&ue)===0&&(f.f^=ue)}for(s=0;s<a;s++)if(i=t[s],sn(i)&&Rr(i),i.wv>e.wv)return!0}(!r||z!==null&&!Ve)&&me(e,se)}return!1}function Is(e,n){for(var t=n;t!==null;){if((t.f&Cn)!==0)try{t.fn(e);return}catch{t.f^=Cn}t=t.parent}throw Sn=!1,e}function sr(e){return(e.f&$n)===0&&(e.parent===null||(e.parent.f&Cn)===0)}function Wn(e,n,t,r){if(Sn){if(t===null&&(Sn=!1),sr(n))throw e;return}if(t!==null&&(Sn=!0),Is(e,n),sr(n))throw e}function Vr(e,n,t=!0){var r=e.reactions;if(r!==null)for(var s=0;s<r.length;s++){var i=r[s];oe!=null&&oe.includes(e)||((i.f&he)!==0?Vr(i,n,!1):n===i&&(t?me(i,Me):(i.f&se)!==0&&me(i,Ue),Jn(i)))}}function Br(e){var m;var n=te,t=ce,r=de,s=V,i=Ve,l=oe,u=q,a=De,f=e.f;te=null,ce=0,de=null,Ve=(f&ue)!==0&&(De||!We||V===null),V=(f&(Ce|rn))===0?e:null,oe=null,er(e.ctx),De=!1,Pn++,e.f|=ft;try{var v=(0,e.fn)(),_=e.deps;if(te!==null){var c;if(zn(e,ce),_!==null&&ce>0)for(_.length=ce+te.length,c=0;c<te.length;c++)_[ce+c]=te[c];else e.deps=_=te;if(!Ve)for(c=ce;c<_.length;c++)((m=_[c]).reactions??(m.reactions=[])).push(e)}else _!==null&&ce<_.length&&(zn(e,ce),_.length=ce);if(Un()&&de!==null&&!De&&_!==null&&(e.f&(he|Ue|Me))===0)for(c=0;c<de.length;c++)Vr(de[c],e);return s!==null&&s!==e&&(Pn++,de!==null&&(r===null?r=de:r.push(...de))),v}finally{te=n,ce=t,de=r,V=s,Ve=i,oe=l,er(u),De=a,e.f^=ft}}function Ls(e,n){let t=n.reactions;if(t!==null){var r=Uo.call(t,e);if(r!==-1){var s=t.length-1;s===0?t=n.reactions=null:(t[r]=t[s],t.pop())}}t===null&&(n.f&he)!==0&&(te===null||!te.includes(n))&&(me(n,Ue),(n.f&(ue|kn))===0&&(n.f^=kn),Dr(n),zn(n,0))}function zn(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Ls(e,t[r])}function Xn(e){var n=e.f;if((n&$n)===0){me(e,se);var t=z,r=q,s=We;z=e,We=!0;try{(n&wt)!==0?Cs(e):kr(e),Cr(e);var i=Br(e);e.teardown=typeof i=="function"?i:null,e.wv=Pr;var l=e.deps,u;Yt&&cs&&e.f&Me}catch(a){Wn(a,e,t,r||e.ctx)}finally{We=s,z=t}}}function Ps(){try{rs()}catch(e){if(Ln!==null)Wn(e,Ln,null);else throw e}}function zs(){var e=We;try{var n=0;for(We=!0;Nn.length>0;){n++>1e3&&Ps();var t=Nn,r=t.length;Nn=[];for(var s=0;s<r;s++){var i=Bs(t[s]);Vs(i)}pn.clear()}}finally{_t=!1,We=e,Ln=null}}function Vs(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&($n|Se))===0)try{sn(r)&&(Xn(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Or(r):r.fn=null))}catch(s){Wn(s,r,null,r.ctx)}}}function Jn(e){_t||(_t=!0,queueMicrotask(zs));for(var n=Ln=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(rn|Ce))!==0){if((t&se)===0)return;n.f^=se}}Nn.push(n)}function Bs(e){for(var n=[],t=e;t!==null;){var r=t.f,s=(r&(Ce|rn))!==0,i=s&&(r&se)!==0;if(!i&&(r&Se)===0){if((r&gr)!==0)n.push(t);else if(s)t.f^=se;else try{sn(t)&&Xn(t)}catch(a){Wn(a,t,null,t.ctx)}var l=t.first;if(l!==null){t=l;continue}}var u=t.parent;for(t=t.next;t===null&&u!==null;)t=u.next,u=u.parent}return n}function O(e){var n=e.f,t=(n&he)!==0;if(V!==null&&!De){if(!(oe!=null&&oe.includes(e))){var r=V.deps;e.rv<Pn&&(e.rv=Pn,te===null&&r!==null&&r[ce]===e?ce++:te===null?te=[e]:(!Ve||!te.includes(e))&&te.push(e))}}else if(t&&e.deps===null&&e.effects===null){var s=e,i=s.parent;i!==null&&(i.f&ue)===0&&(s.f^=ue)}return t&&(s=e,sn(s)&&Rr(s)),bn&&pn.has(e)?pn.get(e):e.v}function Vn(e){var n=De;try{return De=!0,e()}finally{De=n}}const js=-7169;function me(e,n){e.f=e.f&js|n}function mt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ge in e)pt(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&Ge in t&&pt(t)}}}function pt(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{pt(e[r],n)}catch{}const t=bt(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=pr(t);for(let s in r){const i=r[s].get;if(i)try{i.call(e)}catch{}}}}}function qs(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const $s=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Us(e){return $s.includes(e)}const Hs={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Zs(e){return e=e.toLowerCase(),Hs[e]??e}const Ks=["touchstart","touchmove"];function Gs(e){return Ks.includes(e)}function Ws(e,n){if(n){const t=document.body;e.autofocus=!0,Ct(()=>{document.activeElement===t&&e.focus()})}}function Xs(e){var n=V,t=z;Te(null),$e(null);try{return e()}finally{Te(n),$e(t)}}const jr=new Set,gt=new Set;function Js(e,n,t,r={}){function s(i){if(r.capture||un.call(n,i),!i.cancelBubble)return Xs(()=>t==null?void 0:t.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Ct(()=>{n.addEventListener(e,s,r)}):n.addEventListener(e,s,r),s}function kt(e){for(var n=0;n<e.length;n++)jr.add(e[n]);for(var t of gt)t(e)}function un(e){var $;var n=this,t=n.ownerDocument,r=e.type,s=(($=e.composedPath)==null?void 0:$.call(e))||[],i=s[0]||e.target,l=0,u=e.__root;if(u){var a=s.indexOf(u);if(a!==-1&&(n===document||n===window)){e.__root=n;return}var f=s.indexOf(n);if(f===-1)return;a<=f&&(l=a)}if(i=s[l]||e.target,i!==n){Ho(e,"currentTarget",{configurable:!0,get(){return i||t}});var v=V,_=z;Te(null),$e(null);try{for(var c,m=[];i!==null;){var g=i.assignedSlot||i.parentNode||i.host||null;try{var M=i["__"+r];if(M!=null&&(!i.disabled||e.target===i))if(jn(M)){var[F,...L]=M;F.apply(i,[e,...L])}else M.call(i,e)}catch(T){c?m.push(T):c=T}if(e.cancelBubble||g===n||g===null)break;i=g}if(c){for(let T of m)queueMicrotask(()=>{throw T});throw c}}finally{e.__root=n,delete e.currentTarget,Te(v),$e(_)}}}function At(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function tn(e,n){var t=z;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function pe(e,n){var t=(n&vs)!==0,r=(n&hs)!==0,s,i=!e.startsWith("<!>");return()=>{s===void 0&&(s=At(i?e:"<!>"+e),t||(s=xe(s)));var l=r||Tr?document.importNode(s,!0):s.cloneNode(!0);if(t){var u=xe(l),a=l.lastChild;tn(u,a)}else tn(l,l);return l}}function Yn(e,n,t="svg"){var r=!e.startsWith("<!>"),s=`<${t}>${r?e:"<!>"+e}</${t}>`,i;return()=>{if(!i){var l=At(s),u=xe(l);i=xe(u)}var a=i.cloneNode(!0);return tn(a,a),a}}function Ys(e=""){{var n=Hn(e+"");return tn(n,n),n}}function Ot(){var e=document.createDocumentFragment(),n=document.createComment(""),t=Hn();return e.append(n,t),tn(n,t),e}function W(e,n){e!==null&&e.before(n)}function qe(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function Qs(e,n){return ei(e,n)}const Qe=new Map;function ei(e,{target:n,anchor:t,props:r={},events:s,context:i,intro:l=!0}){Ds();var u=new Set,a=_=>{for(var c=0;c<_.length;c++){var m=_[c];if(!u.has(m)){u.add(m);var g=Gs(m);n.addEventListener(m,un,{passive:g});var M=Qe.get(m);M===void 0?(document.addEventListener(m,un,{passive:g}),Qe.set(m,1)):Qe.set(m,M+1)}}};a(yt(jr)),gt.add(a);var f=void 0,v=Fs(()=>{var _=t??n.appendChild(Hn());return nn(()=>{if(i){hn({});var c=q;c.c=i}s&&(r.$$events=s),f=e(_,r)||{},i&&yn()}),()=>{var g;for(var c of u){n.removeEventListener(c,un);var m=Qe.get(c);--m===0?(document.removeEventListener(c,un),Qe.delete(c)):Qe.set(c,m)}gt.delete(a),_!==t&&((g=_.parentNode)==null||g.removeChild(_))}});return ni.set(f,v),f}let ni=new WeakMap;function gn(e,n,[t,r]=[0,0]){var s=e,i=null,l=null,u=ie,a=t>0?Et:0,f=!1;const v=(c,m=!0)=>{f=!0,_(m,c)},_=(c,m)=>{u!==(u=c)&&(u?(i?On(i):m&&(i=nn(()=>m(s))),l&&An(l,()=>{l=null})):(l?On(l):m&&(l=nn(()=>m(s,[t+1,r]))),i&&An(i,()=>{i=null})))};Gn(()=>{f=!1,n(v),f||_(null,null)},a)}function dn(e,n){return n}function ti(e,n,t,r){for(var s=[],i=n.length,l=0;l<i;l++)Nt(n[l].e,s,!0);var u=i>0&&s.length===0&&t!==null;if(u){var a=t.parentNode;xs(a),a.append(t),r.clear(),Pe(e,n[0].prev,n[i-1].next)}Ir(s,()=>{for(var f=0;f<i;f++){var v=n[f];u||(r.delete(v.k),Pe(e,v.prev,v.next)),Ne(v.e,!u)}})}function _n(e,n,t,r,s,i=null){var l=e,u={flags:n,items:new Map,first:null},a=(n&br)!==0;if(a){var f=e;l=f.appendChild(Hn())}var v=null,_=!1,c=Mt(()=>{var m=t();return jn(m)?m:m==null?[]:yt(m)});Gn(()=>{var m=O(c),g=m.length;_&&g===0||(_=g===0,ri(m,u,l,s,n,r,t),i!==null&&(g===0?v?On(v):v=nn(()=>i(l)):v!==null&&An(v,()=>{v=null})),O(c))})}function ri(e,n,t,r,s,i,l){var fe,He,Xe,Oe;var u=(s&fs)!==0,a=(s&(xt|Rt))!==0,f=e.length,v=n.items,_=n.first,c=_,m,g=null,M,F=[],L=[],$,T,E,R;if(u)for(R=0;R<f;R+=1)$=e[R],T=i($,R),E=v.get(T),E!==void 0&&((fe=E.a)==null||fe.measure(),(M??(M=new Set)).add(E));for(R=0;R<f;R+=1){if($=e[R],T=i($,R),E=v.get(T),E===void 0){var J=c?c.e.nodes_start:t;g=si(J,n,g,g===null?n.first:g.next,$,T,R,r,s,l),v.set(T,g),F=[],L=[],c=g.next;continue}if(a&&oi(E,$,R,s),(E.e.f&Se)!==0&&(On(E.e),u&&((He=E.a)==null||He.unfix(),(M??(M=new Set)).delete(E))),E!==c){if(m!==void 0&&m.has(E)){if(F.length<L.length){var N=L[0],U;g=N.prev;var ae=F[0],ke=F[F.length-1];for(U=0;U<F.length;U+=1)ir(F[U],N,t);for(U=0;U<L.length;U+=1)m.delete(L[U]);Pe(n,ae.prev,ke.next),Pe(n,g,ae),Pe(n,ke,N),c=N,g=ke,R-=1,F=[],L=[]}else m.delete(E),ir(E,c,t),Pe(n,E.prev,E.next),Pe(n,E,g===null?n.first:g.next),Pe(n,g,E),g=E;continue}for(F=[],L=[];c!==null&&c.k!==T;)(c.e.f&Se)===0&&(m??(m=new Set)).add(c),L.push(c),c=c.next;if(c===null)continue;E=c}F.push(E),g=E,c=E.next}if(c!==null||m!==void 0){for(var ne=m===void 0?[]:yt(m);c!==null;)(c.e.f&Se)===0&&ne.push(c),c=c.next;var ge=ne.length;if(ge>0){var Ae=(s&br)!==0&&f===0?t:null;if(u){for(R=0;R<ge;R+=1)(Xe=ne[R].a)==null||Xe.measure();for(R=0;R<ge;R+=1)(Oe=ne[R].a)==null||Oe.fix()}ti(n,ne,Ae,v)}}u&&Ct(()=>{var ye;if(M!==void 0)for(E of M)(ye=E.a)==null||ye.apply()}),z.first=n.first&&n.first.e,z.last=g&&g.e}function oi(e,n,t,r){(r&xt)!==0&&dt(e.v,n),(r&Rt)!==0?dt(e.i,t):e.i=t}function si(e,n,t,r,s,i,l,u,a,f){var v=(a&xt)!==0,_=(a&ds)===0,c=v?_?Tt(s):en(s):s,m=(a&Rt)===0?l:en(l),g={i:m,v:c,k:i,a:null,e:null,prev:t,next:r};try{return g.e=nn(()=>u(e,c,m,f),Es),g.e.prev=t&&t.e,g.e.next=r&&r.e,t===null?n.first=g:(t.next=g,t.e.next=g.e),r!==null&&(r.prev=g,r.e.prev=g.e),g}finally{}}function ir(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,s=n?n.e.nodes_start:t,i=e.e.nodes_start;i!==r;){var l=Zn(i);s.before(i),i=l}}function Pe(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function ii(e,n,t=!1,r=!1,s=!1){var i=e,l="";Re(()=>{var u=z;if(l!==(l=n()??"")&&(u.nodes_start!==null&&(Ar(u.nodes_start,u.nodes_end),u.nodes_start=u.nodes_end=null),l!=="")){var a=l+"";t?a=`<svg>${a}</svg>`:r&&(a=`<math>${a}</math>`);var f=At(a);if((t||r)&&(f=xe(f)),tn(xe(f),f.lastChild),t||r)for(;xe(f);)i.before(xe(f));else i.before(f)}})}function ai(e,n,t,r,s){var u;var i=(u=n.$$slots)==null?void 0:u[t],l=!1;i===!0&&(i=n.children,l=!0),i===void 0?s!==null&&s(e):i(e,l?()=>r:r)}function li(e,n){var t=void 0,r;Gn(()=>{t!==(t=n())&&(r&&(Ne(r),r=null),t&&(r=nn(()=>{Ft(()=>t(e))})))})}function qr(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(n=0;n<s;n++)e[n]&&(t=qr(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function ci(){for(var e,n,t=0,r="",s=arguments.length;t<s;t++)(e=arguments[t])&&(n=qr(e))&&(r&&(r+=" "),r+=n);return r}function $r(e){return typeof e=="object"?ci(e):e??""}const ar=[...` 	
\r\f \v\uFEFF`];function ui(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var s in t)if(t[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,l=0;(l=r.indexOf(s,l))>=0;){var u=l+i;(l===0||ar.includes(r[l-1]))&&(u===r.length||ar.includes(r[u]))?r=(l===0?"":r.substring(0,l))+r.substring(u+1):l=u}}return r===""?null:r}function lr(e,n=!1){var t=n?" !important;":";",r="";for(var s in e){var i=e[s];i!=null&&i!==""&&(r+=" "+s+": "+i+t)}return r}function at(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function fi(e,n){if(n){var t="",r,s;if(Array.isArray(n)?(r=n[0],s=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,l=0,u=!1,a=[];r&&a.push(...Object.keys(r).map(at)),s&&a.push(...Object.keys(s).map(at));var f=0,v=-1;const M=e.length;for(var _=0;_<M;_++){var c=e[_];if(u?c==="/"&&e[_-1]==="*"&&(u=!1):i?i===c&&(i=!1):c==="/"&&e[_+1]==="*"?u=!0:c==='"'||c==="'"?i=c:c==="("?l++:c===")"&&l--,!u&&i===!1&&l===0){if(c===":"&&v===-1)v=_;else if(c===";"||_===M-1){if(v!==-1){var m=at(e.substring(f,v).trim());if(!a.includes(m)){c!==";"&&_++;var g=e.substring(f,_).trim();t+=" "+g+";"}}f=_+1,v=-1}}}}return r&&(t+=lr(r)),s&&(t+=lr(s,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function It(e,n,t,r,s,i){var l=e.__className;if(l!==t||l===void 0){var u=ui(t,r,i);u==null?e.removeAttribute("class"):n?e.className=u:e.setAttribute("class",u),e.__className=t}else if(i&&s!==i)for(var a in i){var f=!!i[a];(s==null||f!==!!s[a])&&e.classList.toggle(a,f)}return i}function lt(e,n={},t,r){for(var s in t){var i=t[s];n[s]!==i&&(t[s]==null?e.style.removeProperty(s):e.style.setProperty(s,i,r))}}function di(e,n,t,r){var s=e.__style;if(s!==n){var i=fi(n,r);i==null?e.removeAttribute("style"):e.style.cssText=i,e.__style=n}else r&&(Array.isArray(r)?(lt(e,t==null?void 0:t[0],r[0]),lt(e,t==null?void 0:t[1],r[1],"important")):lt(e,t,r));return r}const fn=Symbol("class"),cn=Symbol("style"),Ur=Symbol("is custom element"),Hr=Symbol("is html");function _i(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function vt(e,n,t,r){var s=Zr(e);s[n]!==(s[n]=t)&&(n==="loading"&&(e[Yo]=t),t==null?e.removeAttribute(n):typeof t!="string"&&Kr(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function mi(e,n,t,r,s=!1){var i=Zr(e),l=i[Ur],u=!i[Hr],a=n||{},f=e.tagName==="OPTION";for(var v in n)v in t||(t[v]=null);t.class?t.class=$r(t.class):t.class=null,t[cn]&&(t.style??(t.style=null));var _=Kr(e);for(const T in t){let E=t[T];if(f&&T==="value"&&E==null){e.value=e.__value="",a[T]=E;continue}if(T==="class"){var c=e.namespaceURI==="http://www.w3.org/1999/xhtml";It(e,c,E,r,n==null?void 0:n[fn],t[fn]),a[T]=E,a[fn]=t[fn];continue}if(T==="style"){di(e,E,n==null?void 0:n[cn],t[cn]),a[T]=E,a[cn]=t[cn];continue}var m=a[T];if(E!==m){a[T]=E;var g=T[0]+T[1];if(g!=="$$")if(g==="on"){const R={},J="$$"+T;let N=T.slice(2);var M=Us(N);if(qs(N)&&(N=N.slice(0,-7),R.capture=!0),!M&&m){if(E!=null)continue;e.removeEventListener(N,a[J],R),a[J]=null}if(E!=null)if(M)e[`__${N}`]=E,kt([N]);else{let U=function(ae){a[T].call(this,ae)};var $=U;a[J]=Js(N,e,U,R)}else M&&(e[`__${N}`]=void 0)}else if(T==="style")vt(e,T,E);else if(T==="autofocus")Ws(e,!!E);else if(!l&&(T==="__value"||T==="value"&&E!=null))e.value=e.__value=E;else if(T==="selected"&&f)_i(e,E);else{var F=T;u||(F=Zs(F));var L=F==="defaultValue"||F==="defaultChecked";if(E==null&&!l&&!L)if(i[T]=null,F==="value"||F==="checked"){let R=e;const J=n===void 0;if(F==="value"){let N=R.defaultValue;R.removeAttribute(F),R.defaultValue=N,R.value=R.__value=J?N:null}else{let N=R.defaultChecked;R.removeAttribute(F),R.defaultChecked=N,R.checked=J?N:!1}}else e.removeAttribute(T);else L||_.includes(F)&&(l||typeof E!="string")?e[F]=E:typeof E!="function"&&vt(e,F,E)}}}for(let T of Object.getOwnPropertySymbols(t))T.description===bs&&li(e,()=>t[T]);return a}function Zr(e){return e.__attributes??(e.__attributes={[Ur]:e.nodeName.includes("-"),[Hr]:e.namespaceURI===ys})}var cr=new Map;function Kr(e){var n=cr.get(e.nodeName);if(n)return n;cr.set(e.nodeName,n=[]);for(var t,r=e,s=Element.prototype;s!==r;){t=pr(r);for(var i in t)t[i].set&&n.push(i);r=bt(r)}return n}function Gr(e=!1){const n=q,t=n.l.u;if(!t)return;let r=()=>mt(n.s);if(e){let s=0,i={};const l=mn(()=>{let u=!1;const a=n.s;for(const f in a)a[f]!==i[f]&&(i[f]=a[f],u=!0);return u&&s++,s});r=()=>O(l)}t.b.length&&Ts(()=>{ur(n,r),ut(t.b)}),rr(()=>{const s=Vn(()=>t.m.map(Go));return()=>{for(const i of s)typeof i=="function"&&i()}}),t.a.length&&rr(()=>{ur(n,r),ut(t.a)})}function ur(e,n){if(e.l.s)for(const t of e.l.s)O(t);n()}let Fn=!1;function pi(e){var n=Fn;try{return Fn=!1,[e(),Fn]}finally{Fn=n}}const gi={get(e,n){if(!e.exclude.includes(n))return O(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=Be({get[n](){return e.props[n]}},n,wr)),e.special[n](t),nr(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),nr(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function Bn(e,n){return new Proxy({props:e,exclude:n,special:{},version:en(0)},gi)}const vi={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let s=e.props[r];ln(s)&&(s=s());const i=je(s,n);if(i&&i.set)return i.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const s=je(r,n);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,n){if(n===Ge||n===hr)return!1;for(let t of e.props)if(ln(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(ln(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function hi(...e){return new Proxy({props:e},vi)}function fr(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function Be(e,n,t,r){var J;var s=(t&_s)!==0,i=!vn||(t&ms)!==0,l=(t&ps)!==0,u=(t&gs)!==0,a=!1,f;l?[f,a]=pi(()=>e[n]):f=e[n];var v=Ge in e||hr in e,_=l&&(((J=je(e,n))==null?void 0:J.set)??(v&&n in e&&(N=>e[n]=N)))||void 0,c=r,m=!0,g=!1,M=()=>(g=!0,m&&(m=!1,u?c=Vn(r):c=r),c);f===void 0&&r!==void 0&&(_&&i&&ss(),f=M(),_&&_(f));var F;if(i)F=()=>{var N=e[n];return N===void 0?M():(m=!0,g=!1,N)};else{var L=(s?mn:Mt)(()=>e[n]);L.f|=Xo,F=()=>{var N=O(L);return N!==void 0&&(c=void 0),N===void 0?c:N}}if((t&wr)===0)return F;if(_){var $=e.$$legacy;return function(N,U){return arguments.length>0?((!i||!U||$||a)&&_(U?F():N),N):F()}}var T=!1,E=Tt(f),R=mn(()=>{var N=F(),U=O(E);return T?(T=!1,U):E.v=N});return l&&O(R),s||(R.equals=Dt),function(N,U){if(arguments.length>0){const ae=U?O(R):i&&l?ze(N):N;if(!R.equals(ae)){if(T=!0,re(E,ae),g&&c!==void 0&&(c=ae),fr(R))return N;Vn(()=>O(R))}return N}return fr(R)?R.v:O(R)}}function yi(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function bi(){const e=q;return e===null&&Er(),(n,t,r)=>{var i;const s=(i=e.s.$$events)==null?void 0:i[n];if(s){const l=jn(s)?s.slice():[s],u=yi(n,t,r);for(const a of l)a.call(e.x,u);return!u.defaultPrevented}return!0}}function wi(e){q===null&&Er(),q.l===null&&os(),Ei(q).a.push(e)}function Ei(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Di="5";var mr;typeof window<"u"&&((mr=window.__svelte??(window.__svelte={})).v??(mr.v=new Set)).add(Di);const xi={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:"wrong",FiniteDifferences:100.86351270183373,ForwardDiff:2.1023783109138816,MooncakeFwd:22.094104130764006,MooncakeRvs:7.332256401443547,ReverseDiff:64.60834540508073,ReverseDiffCompiled:63.70357918330182,Zygote:717.6095568209953},Ri={__category__:"Distributions",EnzymeFwd:3.5267763684001796,EnzymeRvs:2.3676379229265154,FiniteDifferences:40.874502912118245,ForwardDiff:2.1290100626416097,MooncakeFwd:4.234060275632288,MooncakeRvs:3.4343321687392563,ReverseDiff:74.9125856251917,ReverseDiffCompiled:71.22378534413801,Zygote:3340.915310438166},Mi={__category__:"Base Julia features",EnzymeFwd:3.454246848042468,EnzymeRvs:1.7823529411764705,FiniteDifferences:80.2811225930318,ForwardDiff:2.04103191821489,MooncakeFwd:8.712595668751074,MooncakeRvs:4.936512158586607,ReverseDiff:61.11100730422965,ReverseDiffCompiled:61.865693430656925,Zygote:6589.713452685422},Ti={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:"error",FiniteDifferences:64.63113628872478,ForwardDiff:1.208292653908199,MooncakeFwd:566.0831116117041,MooncakeRvs:11.376813326749655,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Fi={__category__:"DynamicPPL demo models",EnzymeFwd:5.339612365911475,EnzymeRvs:3.715126852424668,FiniteDifferences:82.71939316065912,ForwardDiff:1.553457579995462,MooncakeFwd:7.602822273073989,MooncakeRvs:5.262758005897277,ReverseDiff:138.0699839928398,ReverseDiffCompiled:137.2792154305522,Zygote:"error"},Si={__category__:"DynamicPPL demo models",EnzymeFwd:4.129212283940258,EnzymeRvs:3.2548331252679534,FiniteDifferences:66.03691198088939,ForwardDiff:2.2948931944473787,MooncakeFwd:7.719480683897023,MooncakeRvs:5.487014253998555,ReverseDiff:102.10677749360613,ReverseDiffCompiled:106.10060457048552,Zygote:7815.467305389222},Ni={__category__:"DynamicPPL demo models",EnzymeFwd:8.179433548210122,EnzymeRvs:10.944043042493307,FiniteDifferences:83.52765869174387,ForwardDiff:1.739514094896648,MooncakeFwd:12.27880145072171,MooncakeRvs:4.974594189060156,ReverseDiff:56.92534186461311,ReverseDiffCompiled:67.33922044080924,Zygote:"error"},Ci={__category__:"DynamicPPL demo models",EnzymeFwd:9.288236761456774,EnzymeRvs:12.935696872605696,FiniteDifferences:56.12424419738639,ForwardDiff:1.4791672821121553,MooncakeFwd:15.107063069843822,MooncakeRvs:7.1712090871426595,ReverseDiff:56.48265065629892,ReverseDiffCompiled:56.478433006876436,Zygote:"error"},ki={__category__:"DynamicPPL demo models",EnzymeFwd:11.31518057551051,EnzymeRvs:14.561638868745469,FiniteDifferences:84.54371196384972,ForwardDiff:1.5927665271796123,MooncakeFwd:15.991394975322104,MooncakeRvs:6.643386548711778,ReverseDiff:68.33138184540377,ReverseDiffCompiled:69.28359728506787,Zygote:3496.722931620703},Ai={__category__:"DynamicPPL demo models",EnzymeFwd:10.96480933121479,EnzymeRvs:13.834134556243878,FiniteDifferences:86.46474299841334,ForwardDiff:1.5568344965104686,MooncakeFwd:14.958068049565277,MooncakeRvs:6.801235292816973,ReverseDiff:65.29405465288035,ReverseDiffCompiled:63.859942068495485,Zygote:3086.598943857699},Oi={__category__:"DynamicPPL demo models",EnzymeFwd:5.655472760948827,EnzymeRvs:3.8302605624985255,FiniteDifferences:76.66120675246533,ForwardDiff:2.4239438353078806,MooncakeFwd:8.53418164404179,MooncakeRvs:5.725434836911507,ReverseDiff:148.59053435114504,ReverseDiffCompiled:140.96369359916054,Zygote:9695.459087156909},Ii={__category__:"DynamicPPL demo models",EnzymeFwd:8.612875310988517,EnzymeRvs:11.546228835300154,FiniteDifferences:84.140625,ForwardDiff:1.4789983454813758,MooncakeFwd:14.148519163763066,MooncakeRvs:5.566284383962947,ReverseDiff:71.29799141630902,ReverseDiffCompiled:71.92441454358294,Zygote:"error"},Li={__category__:"Distributions",EnzymeFwd:6.166666666666668,EnzymeRvs:9.852148249049323,FiniteDifferences:27.382287612041562,ForwardDiff:1.209865835958795,MooncakeFwd:3.945257408754862,MooncakeRvs:6.12580882769562,ReverseDiff:41.761178817396875,ReverseDiffCompiled:50.77973305113675,Zygote:"error"},Pi={__category__:"DynamicPPL demo models",EnzymeFwd:10.93413488707446,EnzymeRvs:14.929015181270172,FiniteDifferences:82.91419847328244,ForwardDiff:1.559145867456456,MooncakeFwd:14.569582642343837,MooncakeRvs:6.421317859474052,ReverseDiff:62.35066197419139,ReverseDiffCompiled:63.24598478444632,Zygote:"error"},zi={__category__:"DynamicPPL demo models",EnzymeFwd:8.161284159423694,EnzymeRvs:10.796006706816314,FiniteDifferences:64.64831523829245,ForwardDiff:1.9125258684218498,MooncakeFwd:12.695492275172285,MooncakeRvs:5.385928489042676,ReverseDiff:69.56408796526938,ReverseDiffCompiled:68.80296610169492,Zygote:"error"},Vi={__category__:"DynamicPPL demo models",EnzymeFwd:8.752765884569277,EnzymeRvs:10.109686479654531,FiniteDifferences:86.34854661129947,ForwardDiff:1.5808053564297593,MooncakeFwd:12.462207413012056,MooncakeRvs:5.629941126997478,ReverseDiff:72.96778323021121,ReverseDiffCompiled:72.27728940264414,Zygote:"error"},Bi={__category__:"DynamicPPL demo models",EnzymeFwd:9.709649773465378,EnzymeRvs:14.256202858990013,FiniteDifferences:79.03625450180071,ForwardDiff:1.4720499994314227,MooncakeFwd:14.677604731739754,MooncakeRvs:6.501874005968937,ReverseDiff:55.61550849780703,ReverseDiffCompiled:54.406545782338874,Zygote:"error"},ji={__category__:"DynamicPPL demo models",EnzymeFwd:10.497917427840703,EnzymeRvs:15.331806528798495,FiniteDifferences:79.22356331581625,ForwardDiff:1.4292695606966466,MooncakeFwd:13.829122881505857,MooncakeRvs:6.294881778281183,ReverseDiff:60.07026003099707,ReverseDiffCompiled:59.1360858969378,Zygote:"error"},qi={__category__:"Core Turing syntax",EnzymeFwd:3.5895103629287712,EnzymeRvs:2.646687322672935,FiniteDifferences:113.73616553241219,ForwardDiff:1.5728106027739934,MooncakeFwd:15.26083038746794,MooncakeRvs:4.249040906542178,ReverseDiff:56.332046598193976,ReverseDiffCompiled:58.58733023895479,Zygote:"error"},$i={__category__:"Core Turing syntax",EnzymeFwd:10.291477825732182,EnzymeRvs:4.762680261418328,FiniteDifferences:126.94671057228706,ForwardDiff:3.753760734115295,MooncakeFwd:9.376825709320514,MooncakeRvs:13.067494873756205,ReverseDiff:440.76763872315036,ReverseDiffCompiled:441.8284285215773,Zygote:"error"},Ui={__category__:"DynamicPPL arXiV paper",EnzymeFwd:1.4423378126043582,EnzymeRvs:2.2150438869857396,FiniteDifferences:11.50983937943716,ForwardDiff:5.186928286248547,MooncakeFwd:4.406652234963726,MooncakeRvs:9.339417018624939,ReverseDiff:126.86739595634917,ReverseDiffCompiled:60.17031993903945,Zygote:16.63477690288714},Hi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:9.050863376923633,EnzymeRvs:6.356157348762368,FiniteDifferences:109.10025611175787,ForwardDiff:6.002001026167265,MooncakeFwd:30.0394955654102,MooncakeRvs:7.184884852416478,ReverseDiff:91.44853283651607,ReverseDiffCompiled:89.57758371824481,Zygote:2161.091094619666},Zi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:5472.947970025064,EnzymeRvs:2.196206986136369,FiniteDifferences:119123.48522048701,ForwardDiff:1100.0900783345485,MooncakeFwd:8006.448258624962,MooncakeRvs:4.328273460750507,ReverseDiff:43.526722101583594,ReverseDiffCompiled:43.04207392945573,Zygote:3.235583658001746},Ki={__category__:"Distributions",EnzymeFwd:4.320641179495971,EnzymeRvs:19.866696404062587,FiniteDifferences:128.1610353944812,ForwardDiff:1.911306779963746,MooncakeFwd:20.213700314164733,MooncakeRvs:5.099266601361105,ReverseDiff:68.61058562403962,ReverseDiffCompiled:69.57705508838166,Zygote:"error"},Gi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:33.724395601683305,EnzymeRvs:5.2896507490863325,FiniteDifferences:"NaN",ForwardDiff:28.13234012787316,MooncakeFwd:1918.8314950238519,MooncakeRvs:3.7455349872428205,ReverseDiff:72.62616370158428,ReverseDiffCompiled:74.05623897259979,Zygote:"error"},Wi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:223.55054791010357,EnzymeRvs:1.4002299300095749,FiniteDifferences:3354.013730826324,ForwardDiff:244.52309933774836,MooncakeFwd:548.5103900021941,MooncakeRvs:10.10723898872634,ReverseDiff:84.97406366854631,ReverseDiffCompiled:82.68025717574976,Zygote:"error"},Xi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:65.7300169506097,EnzymeRvs:4.616672066716442,FiniteDifferences:1109.1115640339583,ForwardDiff:54.46210969928189,MooncakeFwd:241.0343232914739,MooncakeRvs:4.914540065640526,ReverseDiff:2686.2471727794446,ReverseDiffCompiled:2225.797875569818,Zygote:170.73715730821073},Ji={__category__:"DynamicPPL arXiV paper",EnzymeFwd:115.20650666554019,EnzymeRvs:.9955993474438241,FiniteDifferences:2901.772417711682,ForwardDiff:248.22028178910193,MooncakeFwd:391.0159691982529,MooncakeRvs:8.08937825063589,ReverseDiff:141.49154980080732,ReverseDiffCompiled:145.0340792702831,Zygote:2591.3441825915784},Yi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:221.10766325601324,EnzymeRvs:4.790849231351658,FiniteDifferences:6897.015270594942,ForwardDiff:87.42970227481494,MooncakeFwd:1116.6260715743638,MooncakeRvs:3.6424355094785126,ReverseDiff:111.0644093548212,ReverseDiffCompiled:113.1029678818268,Zygote:"error"},Qi={__category__:"Core Turing syntax",EnzymeFwd:3.5158973043825155,EnzymeRvs:2.939525854803931,FiniteDifferences:60.37278883360973,ForwardDiff:1.5211557955125488,MooncakeFwd:6.613142492146051,MooncakeRvs:4.172454013073166,ReverseDiff:70.45384222184359,ReverseDiffCompiled:70.62507995286988,Zygote:4650.697474148161},ea={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:19.4207311827957,FiniteDifferences:257.14716934256705,ForwardDiff:3.5873495834618945,MooncakeFwd:47.746141621588585,MooncakeRvs:27.847397238741454,ReverseDiff:73.90162362950093,ReverseDiffCompiled:75.31039441877545,Zygote:"error"},na={__category__:"Core Turing syntax",EnzymeFwd:5.503397855451887,EnzymeRvs:5.444467318579515,FiniteDifferences:69.01369237790963,ForwardDiff:1.2445104514196228,MooncakeFwd:10.984101304421483,MooncakeRvs:5.056849739861489,ReverseDiff:48.93126795240049,ReverseDiffCompiled:43.68952683021555,Zygote:"error"},ta={__category__:"Base Julia features",EnzymeFwd:4.767645425743868,EnzymeRvs:"wrong",FiniteDifferences:13.47765912830274,ForwardDiff:.9481983493256391,MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ra={__category__:"Effect of model size",EnzymeFwd:5.306264363323693,EnzymeRvs:2.1488588154930253,FiniteDifferences:179.1164071602584,ForwardDiff:2.4924724205061644,MooncakeFwd:27.701912416851446,MooncakeRvs:3.3891255797972857,ReverseDiff:58.80520209909262,ReverseDiffCompiled:56.31624548736462,Zygote:"error"},oa={__category__:"Distributions",EnzymeFwd:"error",EnzymeRvs:4.5445797224732845,FiniteDifferences:45.33843732112192,ForwardDiff:1.0020060591173339,MooncakeFwd:14.24698753221425,MooncakeRvs:9.000987234042553,ReverseDiff:19.25038258799524,ReverseDiffCompiled:20.442630363154503,Zygote:1021.1408138940916},sa={__category__:"Effect of model size",EnzymeFwd:24.285782232036688,EnzymeRvs:4.3971970603315675,FiniteDifferences:679.1165652560333,ForwardDiff:13.192434996873967,MooncakeFwd:130.26926218350124,MooncakeRvs:3.960975609756098,ReverseDiff:53.12766827817031,ReverseDiffCompiled:54.4839314222253,Zygote:"error"},ia={__category__:"Effect of model size",EnzymeFwd:52.16553287981859,EnzymeRvs:4.907478875528112,FiniteDifferences:1329.520122261844,ForwardDiff:17.771728211516056,MooncakeFwd:256.9583080348108,MooncakeRvs:3.8952623535404993,ReverseDiff:53.71573313723086,ReverseDiffCompiled:52.23488159567705,Zygote:"error"},aa={__category__:"Effect of model size",EnzymeFwd:255.6690332326284,EnzymeRvs:4.195035998484274,FiniteDifferences:6609.6840137467425,ForwardDiff:71.41750943664981,MooncakeFwd:1200.6551143779625,MooncakeRvs:4.0551614249402474,ReverseDiff:47.58820596823588,ReverseDiffCompiled:50.38651092690279,Zygote:"error"},la={__category__:"Distributions",EnzymeFwd:2.8548646949022265,EnzymeRvs:2.788392948080607,FiniteDifferences:32.18259265565583,ForwardDiff:1.8437416579515489,MooncakeFwd:3.831879905691348,MooncakeRvs:3.6785301459509294,ReverseDiff:69.97043093169816,ReverseDiffCompiled:67.548367450516,Zygote:"error"},ca={__category__:"Distributions",EnzymeFwd:2.007585160667494,EnzymeRvs:7.127312138728324,FiniteDifferences:20.545355451851346,ForwardDiff:1.190924913183704,MooncakeFwd:3.7852009112396923,MooncakeRvs:7.173802415524495,ReverseDiff:31.92506974890395,ReverseDiffCompiled:48.960894239036975,Zygote:"error"},ua={__category__:"Core Turing syntax",EnzymeFwd:8.668816234847606,EnzymeRvs:4.986249208587545,FiniteDifferences:126.47732337290542,ForwardDiff:3.750301494986977,MooncakeFwd:9.58824105743195,MooncakeRvs:12.704056563489933,ReverseDiff:439.11058302213803,ReverseDiffCompiled:419.6708116157855,Zygote:"error"},fa={__category__:"Core Turing syntax",EnzymeFwd:11.92886293486993,EnzymeRvs:6.235749131473918,FiniteDifferences:157.2845572354212,ForwardDiff:3.834296812948548,MooncakeFwd:11.213510414557538,MooncakeRvs:11.452002493376968,ReverseDiff:304.415058935225,ReverseDiffCompiled:315.99196600931145,Zygote:23796.523292369246},da={__category__:"Core Turing syntax",EnzymeFwd:3.6707844812852506,EnzymeRvs:4.332828004410143,FiniteDifferences:77.76724350615021,ForwardDiff:3.024907801834432,MooncakeFwd:9.968119685192855,MooncakeRvs:4.964022942695247,ReverseDiff:76.58762886597938,ReverseDiffCompiled:65.33690795352993,Zygote:"error"},_a={__category__:"Core Turing syntax",EnzymeFwd:13.671083729803367,EnzymeRvs:5.89415290752226,FiniteDifferences:162.68368804629426,ForwardDiff:4.114366443885589,MooncakeFwd:11.372840083993218,MooncakeRvs:12.553891508768293,ReverseDiff:348.5276522665492,ReverseDiffCompiled:351.17304860088365,Zygote:42205.41246519677},ma={__category__:"Distributions",EnzymeFwd:"error",EnzymeRvs:"error",FiniteDifferences:29.1717791411043,ForwardDiff:"NaN",MooncakeFwd:4.284171205580197,MooncakeRvs:3.6796661400013737,ReverseDiff:"NaN",ReverseDiffCompiled:"NaN",Zygote:3366.9761896697714},pa={__category__:"Distributions",EnzymeFwd:12.579682555744586,EnzymeRvs:4.471925991975034,FiniteDifferences:158.43354218047295,ForwardDiff:3.25890569660951,MooncakeFwd:10.170304007129495,MooncakeRvs:10.974442657080997,ReverseDiff:184.26757865293985,ReverseDiffCompiled:175.64741685385118,Zygote:17740.31002072761},ga={__category__:"External libraries",EnzymeFwd:"wrong",EnzymeRvs:86.3031151185552,FiniteDifferences:62.29995368702722,ForwardDiff:5.669430425378515,MooncakeFwd:"error",MooncakeRvs:68.71711143245257,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},va={__category__:"PosteriorDB",EnzymeFwd:6.587175572519084,EnzymeRvs:"error",FiniteDifferences:173.0962093119077,ForwardDiff:3.8239320380595387,MooncakeFwd:27.84493768140687,MooncakeRvs:4.797139295100748,ReverseDiff:117.58242384471922,ReverseDiffCompiled:91.21688938088084,Zygote:"error"},ha={__category__:"PosteriorDB",EnzymeFwd:6.082469127379409,EnzymeRvs:4.1429977750843605,FiniteDifferences:168.75028893636394,ForwardDiff:4.086154828466901,MooncakeFwd:27.68852009326567,MooncakeRvs:4.663195357833656,ReverseDiff:119.58682551776684,ReverseDiffCompiled:109.59552769778081,Zygote:"error"},ya={__category__:"Core Turing syntax",EnzymeFwd:6.337223356757145,EnzymeRvs:3.792341476804831,FiniteDifferences:118.750431838596,ForwardDiff:1.9889769730803408,MooncakeFwd:10.796827920231369,MooncakeRvs:6.985632583930768,ReverseDiff:106.73444314434636,ReverseDiffCompiled:105.13635271504084,Zygote:15311.347190039773},ba={__category__:"Distributions",EnzymeFwd:8.565436431563455,EnzymeRvs:9.512750041329145,FiniteDifferences:44.76070052298376,ForwardDiff:1.0394692894561053,MooncakeFwd:15.589836795252227,MooncakeRvs:10.211697415687231,ReverseDiff:32.12798382145824,ReverseDiffCompiled:31.4404275385099,Zygote:366.4268564568685},wa={__category__:"Core Turing syntax",EnzymeFwd:5.143587033121917,EnzymeRvs:3.702702702702703,FiniteDifferences:76.98359029844018,ForwardDiff:1.5793231051509198,MooncakeFwd:7.6695097948230115,MooncakeRvs:5.38790863250161,ReverseDiff:135.08011981820684,ReverseDiffCompiled:138.2204959665372,Zygote:"error"},Ea={__category__:"Base Julia features",EnzymeFwd:6.952940561676175,EnzymeRvs:3.552254706822854,FiniteDifferences:83.87711372086372,ForwardDiff:"error",MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Da={abstractgps:xi,assume_beta:Ri,control_flow:Mi,delaydiffeq:Ti,demo_assume_dot_observe:Fi,demo_assume_dot_observe_literal:Si,demo_assume_index_observe:Ni,demo_assume_matrix_observe_matrix_index:Ci,demo_assume_multivariate_observe:ki,demo_assume_multivariate_observe_literal:Ai,demo_assume_observe_literal:Oi,demo_assume_submodel_observe_index_literal:Ii,assume_dirichlet:Li,demo_dot_assume_observe:Pi,demo_dot_assume_observe_index:zi,demo_dot_assume_observe_index_literal:Vi,demo_dot_assume_observe_matrix_index:Bi,demo_dot_assume_observe_submodel:ji,dot_assume:qi,dot_observe:$i,dppl_gauss_unknown:Ui,dppl_hier_poisson:Hi,dppl_high_dim_gauss:Zi,assume_lkjcholu:Ki,dppl_hmm_semisup:Gi,dppl_lda:Wi,dppl_logistic_regression:Xi,dppl_naive_bayes:Ji,dppl_sto_volatility:Yi,dynamic_constraint:Qi,lux_nn:ea,multiple_constraints_same_var:na,multithreaded:ta,n010:ra,assume_mvnormal:oa,n050:sa,n100:ia,n500:aa,observe_bernoulli:la,observe_categorical:ca,observe_index:ua,observe_literal:fa,observe_multivariate:da,observe_submodel:_a,observe_von_mises:ma,assume_normal:pa,ordinarydiffeq:ga,pdb_eight_schools_centered:va,pdb_eight_schools_noncentered:ha,assume_submodel:ya,assume_wishart:ba,broadcast_macro:wa,call_C:Ea},xa=`#=
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

model = abstractgps(distance, n, y)`,Ra=`@model function assume_beta()
    a ~ Beta(2, 2)
end

model = assume_beta()`,Ma=`#= 
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

model = control_flow()`,Ta=`#=
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

model = delaydiffeq(ddedata, prob_dde)`,Fa=`@model function demo_assume_dot_observe(x = [1.5, 2.0])
    # \`assume\` and \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    x .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe()`,Sa=`@model function demo_assume_dot_observe_literal()
    # \`assume\` and literal \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    [1.5, 2.0] .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe_literal()`,Na=`using LinearAlgebra: Diagonal

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

model = demo_assume_index_observe()`,Ca=`using LinearAlgebra: Diagonal

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

model = demo_assume_multivariate_observe()`,Aa=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe_literal()
    # multivariate \`assume\` and literal \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zeros(2), Diagonal(s))
    [1.5, 2.0] ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe_literal()`,Oa=`@model function demo_assume_observe_literal()
    # univariate \`assume\` and literal \`observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    1.5 ~ Normal(m, sqrt(s))
    2.0 ~ Normal(m, sqrt(s))
end

model = demo_assume_observe_literal()`,Ia=`@model function _prior_dot_assume(::Type{TV} = Vector{Float64}) where {TV}
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

model = demo_assume_submodel_observe_index_literal()`,La=`@model function assume_dirichlet()
    a ~ Dirichlet([1.0, 5.0])
end

model = assume_dirichlet()`,Pa=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe()`,za=`@model function demo_dot_assume_observe_index(
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

model = demo_dot_assume_observe_index()`,Va=`@model function demo_dot_assume_observe_index_literal(
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

model = demo_dot_assume_observe_index_literal()`,Ba=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe_matrix_index()`,ja=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe_submodel()`,qa=`@model function dot_assume(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 5)
    a .~ Normal()
end

model = dot_assume()`,$a=`@model function dot_observe(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    x .~ Normal(a)
end

model = dot_observe()`,Ua=`n = 10_000
s = abs(rand()) + 0.5
y = randn() .+ s * randn(n)

@model function dppl_gauss_unknown(y)
    N = length(y)
    m ~ Normal(0, 1)
    s ~ truncated(Cauchy(0, 5); lower = 0)
    y ~ product_distribution(fill(Normal(m, s), N))
end

model = dppl_gauss_unknown(y)`,Ha=`using Turing: LogPoisson

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

model = dppl_high_dim_gauss(10_000)`,Ka=`@model function assume_lkjcholu()
    a ~ LKJCholesky(5, 1.0, 'U')
end

model = assume_lkjcholu()`,Ga=`using StatsFuns: logsumexp

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

model = dppl_hmm_semisup(K, T, T_unsup, w, z, u, alpha, beta)`,Wa=`v = 100      # words
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

model = dppl_lda(k, m, w, doc, alpha, beta)`,Xa=`using Random: Xoshiro
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

model = dppl_logistic_regression(X', y)`,Ja=`using MLDatasets: MNIST
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

model = dppl_naive_bayes(image_vec, labels, C, D)`,Ya=`using DelimitedFiles: readdlm

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

model = dppl_sto_volatility(y)`,Qa=`@model function dynamic_constraint()
    a ~ Normal()
    b ~ truncated(Normal(); lower = a)
end

model = dynamic_constraint()`,el=`#=
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

model = lux_nn(reduce(hcat, xs), ts)`,nl=`@model function multiple_constraints_same_var(::Type{TV} = Vector{Float64}) where {TV}
    x = TV(undef, 5)
    x[1] ~ Normal()
    x[2] ~ InverseGamma(2, 3)
    x[3] ~ truncated(Normal(), -5, 20)
    x[4:5] ~ Dirichlet([1.0, 2.0])
end

model = multiple_constraints_same_var()`,tl=`#=
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
model = setthreadsafe(multithreaded(x), true)`,rl=`@model function n010(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 10)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n010()`,ol=`@model function assume_mvnormal()
    a ~ MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0])
end

model = assume_mvnormal()`,sl=`@model function n050(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 50)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n050()`,il=`@model function n100(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 100)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n100()`,al=`@model function n500(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 500)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n500()`,ll=`@model function observe_bernoulli(x = [true, false, true])
    a ~ Beta(2, 2)
    for i in eachindex(x)
        x[i] ~ Bernoulli(a)
    end
end

model = observe_bernoulli()`,cl=`@model function observe_categorical(x = [1, 2, 1, 2, 2])
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

model = observe_index()`,fl=`@model function observe_literal()
    a ~ Normal()
    1.5 ~ Normal(a)
end

model = observe_literal()`,dl=`@model function observe_multivariate(
    x = [1.5, 2.0, 2.5],
    ::Type{TV} = Vector{Float64},
) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    x ~ MvNormal(a, I)
end

model = observe_multivariate()`,_l=`@model function inner2(x, a)
    x ~ Normal(a)
end
@model function observe_submodel(x = 1.5)
    a ~ Normal()
    _ignore ~ to_submodel(inner2(x, a))
end

model = observe_submodel()`,ml=`@model function observe_von_mises(x)
    a ~ InverseGamma(2, 3)
    x ~ VonMises(0, a)
end

model = observe_von_mises(0.4)`,pl=`@model function assume_normal()
    a ~ Normal()
end

model = assume_normal()`,gl=`# See https://turinglang.org/docs/tutorials/bayesian-differential-equations/.

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

model = ordinarydiffeq(odedata, prob)`,vl=`J = 8
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

model = pdb_eight_schools_centered(J, y, sigma)`,hl=`J = 8
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

model = assume_submodel()`,bl=`@model function assume_wishart()
    a ~ Wishart(7, [1.0 0.5; 0.5 1.0])
end

model = assume_wishart()`,wl=`@model function broadcast_macro(x = [1.5, 2.0], ::Type{TV} = Vector{Float64}) where {TV}
    a ~ Normal(0, 1)
    b ~ InverseGamma(2, 3)
    @. x ~ Normal(a, $(sqrt(b)))
end

model = broadcast_macro()`,El=`@model function call_C(y = 0.0)
    x ~ Normal(0, 1)

    # Call C library abs function
    x_abs = @ccall fabs(x::Cdouble)::Cdouble

    y ~ Normal(0, x_abs)
end

model = call_C()`,Dl={abstractgps:xa,assume_beta:Ra,control_flow:Ma,delaydiffeq:Ta,demo_assume_dot_observe:Fa,demo_assume_dot_observe_literal:Sa,demo_assume_index_observe:Na,demo_assume_matrix_observe_matrix_index:Ca,demo_assume_multivariate_observe:ka,demo_assume_multivariate_observe_literal:Aa,demo_assume_observe_literal:Oa,demo_assume_submodel_observe_index_literal:Ia,assume_dirichlet:La,demo_dot_assume_observe:Pa,demo_dot_assume_observe_index:za,demo_dot_assume_observe_index_literal:Va,demo_dot_assume_observe_matrix_index:Ba,demo_dot_assume_observe_submodel:ja,dot_assume:qa,dot_observe:$a,dppl_gauss_unknown:Ua,dppl_hier_poisson:Ha,dppl_high_dim_gauss:Za,assume_lkjcholu:Ka,dppl_hmm_semisup:Ga,dppl_lda:Wa,dppl_logistic_regression:Xa,dppl_naive_bayes:Ja,dppl_sto_volatility:Ya,dynamic_constraint:Qa,lux_nn:el,multiple_constraints_same_var:nl,multithreaded:tl,n010:rl,assume_mvnormal:ol,n050:sl,n100:il,n500:al,observe_bernoulli:ll,observe_categorical:cl,observe_index:ul,observe_literal:fl,observe_multivariate:dl,observe_submodel:_l,observe_von_mises:ml,assume_normal:pl,ordinarydiffeq:gl,pdb_eight_schools_centered:vl,pdb_eight_schools_noncentered:hl,assume_submodel:yl,assume_wishart:bl,broadcast_macro:wl,call_C:El};us();const xl="1.21.0",Rl="1.5.0",Ml="0.5.24",Tl="5.11.0",Fl="0.13.6",Sl="0.4.5",Nl="0.1.43",Cl="4.4.0",kl="0.8.3",Al="0.8.9",Ol="0.7.2",Il="0.6.1",Ll="1.1.3",Pl="2.5.0",zl="1.1.2",Vl="0.4.0",Bl="0.5.4",jl="3.5.2+0",ql="7.22.0",$l="1.11.0",Ul="1.1.2",Hl="0.5.2",Zl="1.1.0",Kl="0.4.8",Gl="0.5.1",Wl="0.4.6",Xl="1.11.0",Jl="0.1.1",Yl="0.15.15",Ql="0.1.9",ec="0.1.6",nc="1.6.2",tc="0.5.0",rc="0.2.7",oc="0.10.15",sc="0.3.14",ic="1.72.6",ac="1.26.0",lc="1.3.1",cc="0.1.10",uc="0.10.43",fc="0.10.4+0",dc="1.0.1",_c="1.0.0",mc="1.0.0",pc="0.1.13",gc="0.7.8",vc="3.31.0",hc="0.12.1",yc="0.11.0",bc="0.13.1",wc="1.1.0",Ec="0.2.6",Dc="0.3.1",xc="1.0.0",Rc="4.18.1",Mc="1.1.1+0",Tc="0.1.2",Fc="0.2.3",Sc="2.5.0",Nc="0.1.2",Cc="1.6.0",kc="0.1.3",Ac="0.3.1",Oc="4.1.1",Ic="1.16.0",Lc="0.7.13",Pc="1.8.1",zc="0.18.22",Vc="1.0.0",Bc="1.11.0",jc="0.1.2",qc="5.66.0",$c="1.9.1",Uc="0.4.0",Hc="6.199.0",Zc="4.12.0",Kc="5.26.0",Gc="1.1.0",Wc="1.15.1",Xc="0.7.14",Jc="0.4.27",Yc="0.10.12",Qc="1.11.0",eu="0.25.123",nu="0.6.58",tu="0.9.5",ru="1.6.0",ou="0.39.12",su="2.0.0",iu="1.0.5",au="0.13.118",lu="0.8.18",cu="0.0.238+0",uu="0.1.11",fu="1.30.0",du="0.1.10",_u="1.1.3",mu="0.10.14",pu="1.10.0",gu="3.3.11+0",vu="0.2.2",hu="0.1.1",yu="0.3.5",bu="0.3.2",wu="1.1.0",Eu="1.3.0",Du="1.17.1",xu="0.9.24",Ru="1.11.0",Mu="1.16.0",Tu="2.29.0",Fu="0.12.33",Su="0.8.5",Nu="1.3.1",Cu="0.1.2",ku="1.1.3",Au="0.1.3",Ou="0.5.2",Iu="1.11.0",Lu="0.2.0",Pu="1.7.6",zu="0.6.2",Vu="0.5.6",Bu="1.4.0",ju="1.13.1",qu="0.17.2",$u="1.14.6+0",Uu="1.10.19",Hu="0.2.0",Zu="2.12.2+0",Ku="0.3.28",Gu="0.4.15",Wu="0.1.1",Xu="0.1.7",Ju="0.10.5",Yu="0.3.8",Qu="0.1.5",ef="0.3.1",nf="1.4.5",tf="2025.2.0+0",rf="1.11.0",of="0.7.0",sf="0.16.2",af="0.7.13",lf="0.1.17",cf="1.3.1",uf="0.2.6",ff="1.10.0",df="1.0.0",_f="0.6.3",mf="1.7.1",pf="1.14.3",gf="0.2.1",vf="0.2.4",hf="0.9.39",yf="0.6.10",bf="0.10.67",wf="0.10.3",Ef="9.4.4",Df="0.0.38+0",xf="1.4.0",Rf="0.1.17",Mf="1.11.0",Tf="0.3.1",Ff="0.2.1",Sf="0.6.4",Nf="8.6.0+0",Cf="1.11.0",kf="1.7.2+0",Af="1.11.0+1",Of="0.13.1+0",If="1.11.0",Lf="1.18.0+0",Pf="0.9.10",zf="0.1.6",Vf="7.5.1",Bf="1.11.0",jf="3.57.0",qf="2.2.0",$f="1.13.1",Uf="0.3.29",Hf="1.11.0",Zf="1.2.0",Kf="1.29.3",Gf="1.5.2",Wf="1.15.2",Xf="0.11.4",Jf="7.7.0",Yf="0.3.15",Qf="2025.2.0+0",ed="1.0.0",nd="1.17.1",td="0.7.20",rd="1.12.1",od="0.4.17",sd="0.4.8",id="4.3.2+0",ad="0.1.11",ld="5.5.4+0",cd="0.5.16",ud="0.1.8",fd="0.4.3",dd="1.11.0",_d="0.1.4",md="1.1.9",pd="2.28.6+0",gd="0.2.0",vd="10.1.4+3",hd="1.2.0",yd="2.1.0",bd="1.11.0",wd="0.4.201",Ed="0.3.4",Dd="0.3.7",xd="2023.12.12",Rd="0.2.4",Md="0.10.3",Td="7.10.0",Fd="0.9.33",Sd="0.4.3",Nd="1.1.3",Cd="0.1.5",kd="0.10.5",Ad="1.0.0",Od="1.2.0",Id="4.14.0",Ld="2.9.2",Pd="1.11.0",zd="1.12.0",Vd="1.6.0",Bd="0.5.0",jd="1.17.0",qd="0.3.27+1",$d="0.8.5+0",Ud="5.0.9+0",Hd="1.6.1",Zd="3.5.4+0",Kd="0.5.6+0",Gd="1.13.3",Wd="0.4.7",Xd="5.4.0",Jd="4.2.0",Yd="0.4.8",Qd="1.8.1",e1="6.105.0",n1="1.8.0",t1="1.13.0",r1="2.3.0",o1="1.11.0",s1="1.21.0",i1="1.7.0",a1="1.11.0",l1="1.12.0",c1="1.19.0",u1="1.7.0",f1="1.8.0",d1="1.8.0",_1="1.10.0",m1="1.9.0",p1="1.9.0",g1="1.10.0",v1="1.18.1",h1="1.7.0",y1="1.9.0",b1="1.7.0",w1="1.7.0",E1="1.8.0",D1="1.21.0",x1="1.10.0",R1="1.10.0",M1="1.9.0",T1="1.7.0",F1="1.10.0",S1="1.8.0",N1="1.9.0",C1="0.11.37",k1="1.0.2",A1="0.5.12",O1="2.8.3",I1="1.2.1",L1="0.3.6",P1="1.11.0",z1="0.4.7",V1="0.7.18",B1="0.2.2",j1="1.4.3",q1="0.2.4",$1="0.4.34",U1="1.2.1",H1="1.5.1",Z1="0.2.0",K1="3.1.2",G1="1.11.0",W1="0.1.6",X1="1.11.0",J1="1.3.0",Y1="2.11.2",Q1="1.11.0",e0="1.11.0",n0="1.7.1",t0="1.6.0",r0="0.3.2",o0="0.4.5",s0="0.1.16",i0="0.1.0",a0="1.3.4",l0="3.44.0",c0="1.2.2",u0="1.3.1",f0="1.2.0",d0="1.16.2",_0="1.4.2",m0="0.9.0",p0="0.5.1+0",g0="2.2.10",v0="0.5.16",h0="0.7.0",y0="0.1.0",b0="0.6.1",w0="2.134.0",E0="0.1.12",D0="1.8.0",x0="1.14.1",R0="1.0.1",M0="7.93.0",T0="1.10.0",F0="3.0.0",S0="1.5.0",N0="1.3.0",C0="1.4.9",k0="1.11.0",A0="1.1.2",O0="1.11.0",I0="0.1.0",L0="1.2.0",P0="2.10.0",z0="0.9.5",V0="1.11.0",B0="1.2.2",j0="1.11.0",q0="1.1.3",$0="0.1.2",U0="0.4.23",H0="2.6.1",Z0="0.1.15",K0="0.1.2",G0="1.3.1",W0="1.8.0",X0="1.9.16",J0="1.4.4",Y0="3.5.0",Q0="1.11.1",e_="1.8.0",n_="0.34.10",t_="1.5.2",r_="0.5.8",o_="0.4.2",s_="0.3.7",i_="0.4.2",a_="0.7.2",l_="0.3.1",c_="1.11.0",u_="2.6.2",f_="1.11.0",d_=null,__="7.7.0+0",m_="0.3.46",p_="1.0.3",g_="1.0.1",v_="1.12.1",h_="1.10.0",y_="0.1.1",b_="0.1.7",w_="1.11.0",E_="0.5.5",D_="0.5.29",x_="0.2.38",R_="0.1.6",M_="0.11.3",T_="0.4.85",F_="1.4.0",S_="0.42.4",N_="1.6.1",C_="1.11.0",k_="1.11.0",A_="1.27.0",O_="1.0.0",I_="0.3.0",L_="1.4.2",P_="1.3.1",z_="1.1.0",V_="1.6.1",B_="2.13.9+0",j_="0.18.1+0",q_="0.10.1",$_="1.2.13+1",U_="1.5.7+1",H_="0.7.10",Z_="0.2.7",K_="1.1.4+0",G_="5.11.0+0",W_="1.59.0+0",X_="2022.0.0+1",J_="17.4.0+2",Y_={ADTypes:xl,AbstractFFTs:Rl,AbstractGPs:Ml,AbstractMCMC:Tl,AbstractPPL:Fl,AbstractTrees:Sl,Accessors:Nl,Adapt:Cl,AdvancedHMC:kl,AdvancedMH:Al,AdvancedPS:Ol,AdvancedVI:Il,AliasTables:Ll,ArgCheck:Pl,ArgTools:zl,ArnoldiMethod:Vl,Arpack:Bl,Arpack_jll:jl,ArrayInterface:ql,Artifacts:$l,Atomix:Ul,AtomsBase:Hl,AxisAlgorithms:Zl,AxisArrays:Kl,BFloat16s:Gl,BangBang:Wl,Base64:Xl,Baselet:Jl,Bijectors:Yl,BitFlags:Ql,BitTwiddlingConvenienceFunctions:ec,BracketingNonlinearSolve:nc,CEnum:tc,CPUSummary:rc,CSV:oc,Cassette:sc,ChainRules:ic,ChainRulesCore:ac,Chairmarks:lc,ChangesOfVariables:cc,Chemfiles:uc,Chemfiles_jll:fc,ChunkCodecCore:dc,ChunkCodecLibZlib:_c,ChunkCodecLibZstd:mc,CloseOpenIntervals:pc,CodecZlib:gc,ColorSchemes:vc,ColorTypes:hc,ColorVectorSpace:yc,Colors:bc,Combinatorics:wc,CommonSolve:Ec,CommonSubexpressions:Dc,CommonWorldInvalidations:xc,Compat:Rc,CompilerSupportLibraries_jll:Mc,CompositionsBase:Tc,ConcreteStructs:Fc,ConcurrentUtilities:Sc,ConsoleProgressMonitor:Nc,ConstructionBase:Cc,ContextVariablesX:kc,CpuId:Ac,Crayons:Oc,DataAPI:Ic,DataDeps:Lc,DataFrames:Pc,DataStructures:zc,DataValueInterfaces:Vc,Dates:Bc,DefineSingletons:jc,DelayDiffEq:qc,DelimitedFiles:$c,DensityInterface:Uc,DiffEqBase:Hc,DiffEqCallbacks:Zc,DiffEqNoiseProcess:Kc,DiffResults:Gc,DiffRules:Wc,DifferentiationInterface:Xc,DispatchDoctor:Jc,Distances:Yc,Distributed:Qc,Distributions:eu,DistributionsAD:nu,DocStringExtensions:tu,Downloads:ru,DynamicPPL:ou,EllipticalSliceSampling:su,EnumX:iu,Enzyme:au,EnzymeCore:lu,Enzyme_jll:cu,ExceptionUnwrapping:uu,ExponentialUtilities:fu,ExprTools:du,ExpressionExplorer:_u,ExproniconLite:mu,FFTW:pu,FFTW_jll:gu,FLoops:vu,FLoopsBase:hu,FastBroadcast:yu,FastClosures:bu,FastGaussQuadrature:wu,FastPower:Eu,FileIO:Du,FilePathsBase:xu,FileWatching:Ru,FillArrays:Mu,FiniteDiff:Tu,FiniteDifferences:Fu,FixedPointNumbers:Su,ForwardDiff:Nu,FunctionProperties:Cu,FunctionWrappers:ku,FunctionWrappersWrappers:Au,Functors:Ou,Future:Iu,GPUArraysCore:Lu,GPUCompiler:Pu,GZip:zu,GenericSchur:Vu,Glob:Bu,Graphs:ju,HDF5:qu,HDF5_jll:$u,HTTP:Uu,HashArrayMappedTries:Hu,Hwloc_jll:Zu,HypergeometricFunctions:Ku,IRTools:Gu,IfElse:Wu,ImageBase:Xu,ImageCore:Ju,ImageShow:Yu,Inflate:Qu,InitialValues:ef,InlineStrings:nf,IntelOpenMP_jll:tf,InteractiveUtils:rf,InternedStrings:of,Interpolations:sf,IntervalSets:af,InverseFunctions:lf,InvertedIndices:cf,IrrationalConstants:uf,IterTools:ff,IteratorInterfaceExtensions:df,JLD2:_f,JLLWrappers:mf,JSON:"1.4.0",JSON3:pf,Jieko:gf,JuliaVariables:vf,KernelAbstractions:hf,KernelDensity:yf,KernelFunctions:bf,Krylov:wf,LLVM:Ef,LLVMExtra_jll:Df,LaTeXStrings:xf,LayoutPointers:Rf,LazyArtifacts:Mf,LazyModules:Tf,LeftChildRightSiblingTrees:Ff,LibCURL:Sf,LibCURL_jll:Nf,LibGit2:Cf,LibGit2_jll:kf,LibSSH2_jll:Af,LibTracyClient_jll:Of,Libdl:If,Libiconv_jll:Lf,Libtask:Pf,LineSearch:zf,LineSearches:Vf,LinearAlgebra:Bf,LinearSolve:jf,LogDensityProblems:qf,LogDensityProblemsAD:$f,LogExpFunctions:Uf,Logging:Hf,LoggingExtras:Zf,Lux:Kf,LuxCore:Gf,LuxLib:Wf,MAT:Xf,MCMCChains:Jf,MCMCDiagnosticTools:Yf,MKL_jll:Qf,MLCore:ed,MLDataDevices:nd,MLDatasets:td,MLJModelInterface:rd,MLStyle:od,MLUtils:sd,MPICH_jll:id,MPIPreferences:ad,MPItrampoline_jll:ld,MacroTools:cd,ManualMemory:ud,MappedArrays:fd,Markdown:dd,MaybeInplace:_d,MbedTLS:md,MbedTLS_jll:pd,MicroCollections:gd,MicrosoftMPI_jll:vd,Missings:hd,MistyClosures:yd,Mmap:bd,Mooncake:wd,MosaicViews:Ed,Moshi:Dd,MozillaCACerts_jll:xd,MuladdMacro:Rd,MultivariateStats:Md,NLSolversBase:Td,NNlib:Fd,NPZ:Sd,NaNMath:Nd,NameResolution:Cd,NamedArrays:kd,NaturalSort:Ad,NetworkOptions:Od,NonlinearSolve:Id,NonlinearSolveBase:Ld,NonlinearSolveFirstOrder:Pd,NonlinearSolveQuasiNewton:zd,NonlinearSolveSpectralMethods:Vd,ObjectFile:Bd,OffsetArrays:jd,OpenBLAS_jll:qd,OpenLibm_jll:$d,OpenMPI_jll:Ud,OpenSSL:Hd,OpenSSL_jll:Zd,OpenSpecFun_jll:Kd,Optim:Gd,Optimisers:Wd,Optimization:Xd,OptimizationBase:Jd,OptimizationOptimJL:Yd,OrderedCollections:Qd,OrdinaryDiffEq:e1,OrdinaryDiffEqAdamsBashforthMoulton:n1,OrdinaryDiffEqBDF:t1,OrdinaryDiffEqCore:r1,OrdinaryDiffEqDefault:o1,OrdinaryDiffEqDifferentiation:s1,OrdinaryDiffEqExplicitRK:i1,OrdinaryDiffEqExponentialRK:a1,OrdinaryDiffEqExtrapolation:l1,OrdinaryDiffEqFIRK:c1,OrdinaryDiffEqFeagin:u1,OrdinaryDiffEqFunctionMap:f1,OrdinaryDiffEqHighOrderRK:d1,OrdinaryDiffEqIMEXMultistep:_1,OrdinaryDiffEqLinear:m1,OrdinaryDiffEqLowOrderRK:p1,OrdinaryDiffEqLowStorageRK:g1,OrdinaryDiffEqNonlinearSolve:v1,OrdinaryDiffEqNordsieck:h1,OrdinaryDiffEqPDIRK:y1,OrdinaryDiffEqPRK:b1,OrdinaryDiffEqQPRK:w1,OrdinaryDiffEqRKN:E1,OrdinaryDiffEqRosenbrock:D1,OrdinaryDiffEqSDIRK:x1,OrdinaryDiffEqSSPRK:R1,OrdinaryDiffEqStabilizedIRK:M1,OrdinaryDiffEqStabilizedRK:T1,OrdinaryDiffEqSymplecticRK:F1,OrdinaryDiffEqTsit5:S1,OrdinaryDiffEqVerner:N1,PDMats:C1,PackageExtensionCompat:k1,PaddedViews:A1,Parsers:O1,PeriodicTable:I1,Pickle:L1,Pkg:P1,PoissonRandom:z1,Polyester:V1,PolyesterWeave:B1,PooledArrays:j1,PositiveFactorizations:q1,PreallocationTools:$1,PrecompileTools:U1,Preferences:H1,PrettyPrint:Z1,PrettyTables:K1,Printf:G1,ProgressLogging:W1,ProgressMeter:X1,PtrArrays:J1,QuadGK:Y1,REPL:Q1,Random:e0,Random123:n0,RandomNumbers:t0,RangeArrays:r0,Ratios:o0,ReactantCore:s0,RealDot:i0,RecipesBase:a0,RecursiveArrayTools:l0,Reexport:c0,Requires:u0,ResettableStacks:f0,ReverseDiff:d0,Richardson:_0,Rmath:m0,Rmath_jll:p0,Roots:g0,RuntimeGeneratedFunctions:v0,SHA:h0,SIMDTypes:y0,SSMProblems:b0,SciMLBase:w0,SciMLJacobianOperators:E0,SciMLLogging:D0,SciMLOperators:x0,SciMLPublic:R0,SciMLSensitivity:M0,SciMLStructures:T0,ScientificTypesBase:F0,ScopedValues:S0,Scratch:N0,SentinelArrays:C0,Serialization:k0,Setfield:A0,SharedArrays:O0,ShowCases:I0,SimpleBufferStream:L0,SimpleNonlinearSolve:P0,SimpleTraits:z0,Sockets:V0,SortingAlgorithms:B0,SparseArrays:j0,SparseConnectivityTracer:q0,SparseInverseSubset:$0,SparseMatrixColorings:U0,SpecialFunctions:H0,SplittablesBase:Z0,StackViews:K0,Static:G0,StaticArrayInterface:W0,StaticArrays:X0,StaticArraysCore:J0,StatisticalTraits:Y0,Statistics:Q0,StatsAPI:e_,StatsBase:n_,StatsFuns:t_,StrideArraysCore:r_,StridedViews:o_,StringEncodings:s_,StringManipulation:i_,StructArrays:a_,StructIO:l_,StructTypes:c_,StructUtils:u_,StyledStrings:f_,SuiteSparse:d_,SuiteSparse_jll:__,SymbolicIndexingInterface:m_,TOML:p_,TableTraits:g_,Tables:v_,Tar:h_,TensorCore:y_,TerminalLoggers:b_,Test:w_,ThreadingUtilities:E_,TimerOutputs:D_,Tracker:x_,Tracy:R_,TranscodingStreams:M_,Transducers:T_,TruncatedStacktraces:F_,Turing:S_,URIs:N_,UUIDs:C_,Unicode:k_,Unitful:A_,UnitfulAtomic:O_,UnsafeAtomics:I_,WeakRefStrings:L_,WeightInitializers:P_,WoodburyMatrices:z_,WorkerUtilities:V_,XML2_jll:B_,Xorg_libpciaccess_jll:j_,ZipFile:q_,Zlib_jll:$_,Zstd_jll:U_,Zygote:H_,ZygoteRules:Z_,libaec_jll:K_,libblastrampoline_jll:G_,nghttp2_jll:W_,oneTBB_jll:X_,p7zip_jll:J_};function ht(e){return[...e.entries()].sort(([n,t],[r,s])=>n.localeCompare(r))}var Q_=pe('<tr><td class="svelte-1dtc2uh"> </td><td class="version svelte-1dtc2uh"> </td></tr>'),em=pe('<table id="manifest" class="svelte-1dtc2uh"><thead><tr><th class="svelte-1dtc2uh">Package</th><th class="svelte-1dtc2uh">Version</th></tr></thead><tbody></tbody></table>');function nm(e,n){hn(n,!1);let t=new Map;for(const[i,l]of Object.entries(Y_))t.set(i,l===""?null:l);Gr();var r=em(),s=_e(H(r));_n(s,5,()=>ht(t),dn,(i,l)=>{let u=()=>O(l)[0],a=()=>O(l)[1];var f=Q_(),v=H(f),_=H(v),c=_e(v),m=H(c);Re(()=>{qe(_,u()),qe(m,a()===null?"":`v${a()}`)}),W(i,f)}),W(e,r),yn()}function tm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ct,dr;function rm(){if(dr)return ct;dr=1;function e(o){return o instanceof Map?o.clear=o.delete=o.set=function(){throw new Error("map is read-only")}:o instanceof Set&&(o.add=o.clear=o.delete=function(){throw new Error("set is read-only")}),Object.freeze(o),Object.getOwnPropertyNames(o).forEach(d=>{const h=o[d],C=typeof h;(C==="object"||C==="function")&&!Object.isFrozen(h)&&e(h)}),o}class n{constructor(d){d.data===void 0&&(d.data={}),this.data=d.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(o,...d){const h=Object.create(null);for(const C in o)h[C]=o[C];return d.forEach(function(C){for(const Z in C)h[Z]=C[Z]}),h}const s="</span>",i=o=>!!o.scope,l=(o,{prefix:d})=>{if(o.startsWith("language:"))return o.replace("language:","language-");if(o.includes(".")){const h=o.split(".");return[`${d}${h.shift()}`,...h.map((C,Z)=>`${C}${"_".repeat(Z+1)}`)].join(" ")}return`${d}${o}`};class u{constructor(d,h){this.buffer="",this.classPrefix=h.classPrefix,d.walk(this)}addText(d){this.buffer+=t(d)}openNode(d){if(!i(d))return;const h=l(d.scope,{prefix:this.classPrefix});this.span(h)}closeNode(d){i(d)&&(this.buffer+=s)}value(){return this.buffer}span(d){this.buffer+=`<span class="${d}">`}}const a=(o={})=>{const d={children:[]};return Object.assign(d,o),d};class f{constructor(){this.rootNode=a(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(d){this.top.children.push(d)}openNode(d){const h=a({scope:d});this.add(h),this.stack.push(h)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(d){return this.constructor._walk(d,this.rootNode)}static _walk(d,h){return typeof h=="string"?d.addText(h):h.children&&(d.openNode(h),h.children.forEach(C=>this._walk(d,C)),d.closeNode(h)),d}static _collapse(d){typeof d!="string"&&d.children&&(d.children.every(h=>typeof h=="string")?d.children=[d.children.join("")]:d.children.forEach(h=>{f._collapse(h)}))}}class v extends f{constructor(d){super(),this.options=d}addText(d){d!==""&&this.add(d)}startScope(d){this.openNode(d)}endScope(){this.closeNode()}__addSublanguage(d,h){const C=d.root;h&&(C.scope=`language:${h}`),this.add(C)}toHTML(){return new u(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(o){return o?typeof o=="string"?o:o.source:null}function c(o){return M("(?=",o,")")}function m(o){return M("(?:",o,")*")}function g(o){return M("(?:",o,")?")}function M(...o){return o.map(h=>_(h)).join("")}function F(o){const d=o[o.length-1];return typeof d=="object"&&d.constructor===Object?(o.splice(o.length-1,1),d):{}}function L(...o){return"("+(F(o).capture?"":"?:")+o.map(C=>_(C)).join("|")+")"}function $(o){return new RegExp(o.toString()+"|").exec("").length-1}function T(o,d){const h=o&&o.exec(d);return h&&h.index===0}const E=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function R(o,{joinWith:d}){let h=0;return o.map(C=>{h+=1;const Z=h;let K=_(C),w="";for(;K.length>0;){const b=E.exec(K);if(!b){w+=K;break}w+=K.substring(0,b.index),K=K.substring(b.index+b[0].length),b[0][0]==="\\"&&b[1]?w+="\\"+String(Number(b[1])+Z):(w+=b[0],b[0]==="("&&h++)}return w}).map(C=>`(${C})`).join(d)}const J=/\b\B/,N="[a-zA-Z]\\w*",U="[a-zA-Z_]\\w*",ae="\\b\\d+(\\.\\d+)?",ke="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ne="\\b(0b[01]+)",ge="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Ae=(o={})=>{const d=/^#![ ]*\//;return o.binary&&(o.begin=M(d,/.*\b/,o.binary,/\b.*/)),r({scope:"meta",begin:d,end:/$/,relevance:0,"on:begin":(h,C)=>{h.index!==0&&C.ignoreMatch()}},o)},fe={begin:"\\\\[\\s\\S]",relevance:0},He={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[fe]},Xe={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[fe]},Oe={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},ye=function(o,d,h={}){const C=r({scope:"comment",begin:o,end:d,contains:[]},h);C.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const Z=L("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return C.contains.push({begin:M(/[ ]+/,"(",Z,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),C},Wr=ye("//","$"),Xr=ye("/\\*","\\*/"),Jr=ye("#","$"),Yr={scope:"number",begin:ae,relevance:0},Qr={scope:"number",begin:ke,relevance:0},eo={scope:"number",begin:ne,relevance:0},no={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[fe,{begin:/\[/,end:/\]/,relevance:0,contains:[fe]}]},to={scope:"title",begin:N,relevance:0},ro={scope:"title",begin:U,relevance:0},oo={begin:"\\.\\s*"+U,relevance:0};var wn=Object.freeze({__proto__:null,APOS_STRING_MODE:He,BACKSLASH_ESCAPE:fe,BINARY_NUMBER_MODE:eo,BINARY_NUMBER_RE:ne,COMMENT:ye,C_BLOCK_COMMENT_MODE:Xr,C_LINE_COMMENT_MODE:Wr,C_NUMBER_MODE:Qr,C_NUMBER_RE:ke,END_SAME_AS_BEGIN:function(o){return Object.assign(o,{"on:begin":(d,h)=>{h.data._beginMatch=d[1]},"on:end":(d,h)=>{h.data._beginMatch!==d[1]&&h.ignoreMatch()}})},HASH_COMMENT_MODE:Jr,IDENT_RE:N,MATCH_NOTHING_RE:J,METHOD_GUARD:oo,NUMBER_MODE:Yr,NUMBER_RE:ae,PHRASAL_WORDS_MODE:Oe,QUOTE_STRING_MODE:Xe,REGEXP_MODE:no,RE_STARTERS_RE:ge,SHEBANG:Ae,TITLE_MODE:to,UNDERSCORE_IDENT_RE:U,UNDERSCORE_TITLE_MODE:ro});function so(o,d){o.input[o.index-1]==="."&&d.ignoreMatch()}function io(o,d){o.className!==void 0&&(o.scope=o.className,delete o.className)}function ao(o,d){d&&o.beginKeywords&&(o.begin="\\b("+o.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",o.__beforeBegin=so,o.keywords=o.keywords||o.beginKeywords,delete o.beginKeywords,o.relevance===void 0&&(o.relevance=0))}function lo(o,d){Array.isArray(o.illegal)&&(o.illegal=L(...o.illegal))}function co(o,d){if(o.match){if(o.begin||o.end)throw new Error("begin & end are not supported with match");o.begin=o.match,delete o.match}}function uo(o,d){o.relevance===void 0&&(o.relevance=1)}const fo=(o,d)=>{if(!o.beforeMatch)return;if(o.starts)throw new Error("beforeMatch cannot be used with starts");const h=Object.assign({},o);Object.keys(o).forEach(C=>{delete o[C]}),o.keywords=h.keywords,o.begin=M(h.beforeMatch,c(h.begin)),o.starts={relevance:0,contains:[Object.assign(h,{endsParent:!0})]},o.relevance=0,delete h.beforeMatch},_o=["of","and","for","in","not","or","if","then","parent","list","value"],mo="keyword";function Lt(o,d,h=mo){const C=Object.create(null);return typeof o=="string"?Z(h,o.split(" ")):Array.isArray(o)?Z(h,o):Object.keys(o).forEach(function(K){Object.assign(C,Lt(o[K],d,K))}),C;function Z(K,w){d&&(w=w.map(b=>b.toLowerCase())),w.forEach(function(b){const S=b.split("|");C[S[0]]=[K,po(S[0],S[1])]})}}function po(o,d){return d?Number(d):go(o)?0:1}function go(o){return _o.includes(o.toLowerCase())}const Pt={},Ze=o=>{console.error(o)},zt=(o,...d)=>{console.log(`WARN: ${o}`,...d)},Je=(o,d)=>{Pt[`${o}/${d}`]||(console.log(`Deprecated as of ${o}. ${d}`),Pt[`${o}/${d}`]=!0)},En=new Error;function Vt(o,d,{key:h}){let C=0;const Z=o[h],K={},w={};for(let b=1;b<=d.length;b++)w[b+C]=Z[b],K[b+C]=!0,C+=$(d[b-1]);o[h]=w,o[h]._emit=K,o[h]._multi=!0}function vo(o){if(Array.isArray(o.begin)){if(o.skip||o.excludeBegin||o.returnBegin)throw Ze("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),En;if(typeof o.beginScope!="object"||o.beginScope===null)throw Ze("beginScope must be object"),En;Vt(o,o.begin,{key:"beginScope"}),o.begin=R(o.begin,{joinWith:""})}}function ho(o){if(Array.isArray(o.end)){if(o.skip||o.excludeEnd||o.returnEnd)throw Ze("skip, excludeEnd, returnEnd not compatible with endScope: {}"),En;if(typeof o.endScope!="object"||o.endScope===null)throw Ze("endScope must be object"),En;Vt(o,o.end,{key:"endScope"}),o.end=R(o.end,{joinWith:""})}}function yo(o){o.scope&&typeof o.scope=="object"&&o.scope!==null&&(o.beginScope=o.scope,delete o.scope)}function bo(o){yo(o),typeof o.beginScope=="string"&&(o.beginScope={_wrap:o.beginScope}),typeof o.endScope=="string"&&(o.endScope={_wrap:o.endScope}),vo(o),ho(o)}function wo(o){function d(w,b){return new RegExp(_(w),"m"+(o.case_insensitive?"i":"")+(o.unicodeRegex?"u":"")+(b?"g":""))}class h{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(b,S){S.position=this.position++,this.matchIndexes[this.matchAt]=S,this.regexes.push([S,b]),this.matchAt+=$(b)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const b=this.regexes.map(S=>S[1]);this.matcherRe=d(R(b,{joinWith:"|"}),!0),this.lastIndex=0}exec(b){this.matcherRe.lastIndex=this.lastIndex;const S=this.matcherRe.exec(b);if(!S)return null;const Y=S.findIndex((an,et)=>et>0&&an!==void 0),G=this.matchIndexes[Y];return S.splice(0,Y),Object.assign(S,G)}}class C{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(b){if(this.multiRegexes[b])return this.multiRegexes[b];const S=new h;return this.rules.slice(b).forEach(([Y,G])=>S.addRule(Y,G)),S.compile(),this.multiRegexes[b]=S,S}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(b,S){this.rules.push([b,S]),S.type==="begin"&&this.count++}exec(b){const S=this.getMatcher(this.regexIndex);S.lastIndex=this.lastIndex;let Y=S.exec(b);if(this.resumingScanAtSamePosition()&&!(Y&&Y.index===this.lastIndex)){const G=this.getMatcher(0);G.lastIndex=this.lastIndex+1,Y=G.exec(b)}return Y&&(this.regexIndex+=Y.position+1,this.regexIndex===this.count&&this.considerAll()),Y}}function Z(w){const b=new C;return w.contains.forEach(S=>b.addRule(S.begin,{rule:S,type:"begin"})),w.terminatorEnd&&b.addRule(w.terminatorEnd,{type:"end"}),w.illegal&&b.addRule(w.illegal,{type:"illegal"}),b}function K(w,b){const S=w;if(w.isCompiled)return S;[io,co,bo,fo].forEach(G=>G(w,b)),o.compilerExtensions.forEach(G=>G(w,b)),w.__beforeBegin=null,[ao,lo,uo].forEach(G=>G(w,b)),w.isCompiled=!0;let Y=null;return typeof w.keywords=="object"&&w.keywords.$pattern&&(w.keywords=Object.assign({},w.keywords),Y=w.keywords.$pattern,delete w.keywords.$pattern),Y=Y||/\w+/,w.keywords&&(w.keywords=Lt(w.keywords,o.case_insensitive)),S.keywordPatternRe=d(Y,!0),b&&(w.begin||(w.begin=/\B|\b/),S.beginRe=d(S.begin),!w.end&&!w.endsWithParent&&(w.end=/\B|\b/),w.end&&(S.endRe=d(S.end)),S.terminatorEnd=_(S.end)||"",w.endsWithParent&&b.terminatorEnd&&(S.terminatorEnd+=(w.end?"|":"")+b.terminatorEnd)),w.illegal&&(S.illegalRe=d(w.illegal)),w.contains||(w.contains=[]),w.contains=[].concat(...w.contains.map(function(G){return Eo(G==="self"?w:G)})),w.contains.forEach(function(G){K(G,S)}),w.starts&&K(w.starts,b),S.matcher=Z(S),S}if(o.compilerExtensions||(o.compilerExtensions=[]),o.contains&&o.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return o.classNameAliases=r(o.classNameAliases||{}),K(o)}function Bt(o){return o?o.endsWithParent||Bt(o.starts):!1}function Eo(o){return o.variants&&!o.cachedVariants&&(o.cachedVariants=o.variants.map(function(d){return r(o,{variants:null},d)})),o.cachedVariants?o.cachedVariants:Bt(o)?r(o,{starts:o.starts?r(o.starts):null}):Object.isFrozen(o)?r(o):o}var Do="11.11.1";class xo extends Error{constructor(d,h){super(d),this.name="HTMLInjectionError",this.html=h}}const Qn=t,jt=r,qt=Symbol("nomatch"),Ro=7,$t=function(o){const d=Object.create(null),h=Object.create(null),C=[];let Z=!0;const K="Could not find the language '{}', did you forget to load/include a language module?",w={disableAutodetect:!0,name:"Plain text",contains:[]};let b={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:v};function S(p){return b.noHighlightRe.test(p)}function Y(p){let x=p.className+" ";x+=p.parentNode?p.parentNode.className:"";const I=b.languageDetectRe.exec(x);if(I){const B=Ie(I[1]);return B||(zt(K.replace("{}",I[1])),zt("Falling back to no-highlight mode for this block.",p)),B?I[1]:"no-highlight"}return x.split(/\s+/).find(B=>S(B)||Ie(B))}function G(p,x,I){let B="",X="";typeof x=="object"?(B=p,I=x.ignoreIllegals,X=x.language):(Je("10.7.0","highlight(lang, code, ...args) has been deprecated."),Je("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),X=p,B=x),I===void 0&&(I=!0);const ve={code:B,language:X};xn("before:highlight",ve);const Le=ve.result?ve.result:an(ve.language,ve.code,I);return Le.code=ve.code,xn("after:highlight",Le),Le}function an(p,x,I,B){const X=Object.create(null);function ve(y,D){return y.keywords[D]}function Le(){if(!k.keywords){Q.addText(j);return}let y=0;k.keywordPatternRe.lastIndex=0;let D=k.keywordPatternRe.exec(j),A="";for(;D;){A+=j.substring(y,D.index);const P=we.case_insensitive?D[0].toLowerCase():D[0],ee=ve(k,P);if(ee){const[Fe,qo]=ee;if(Q.addText(A),A="",X[P]=(X[P]||0)+1,X[P]<=Ro&&(Tn+=qo),Fe.startsWith("_"))A+=D[0];else{const $o=we.classNameAliases[Fe]||Fe;be(D[0],$o)}}else A+=D[0];y=k.keywordPatternRe.lastIndex,D=k.keywordPatternRe.exec(j)}A+=j.substring(y),Q.addText(A)}function Rn(){if(j==="")return;let y=null;if(typeof k.subLanguage=="string"){if(!d[k.subLanguage]){Q.addText(j);return}y=an(k.subLanguage,j,!0,Jt[k.subLanguage]),Jt[k.subLanguage]=y._top}else y=nt(j,k.subLanguage.length?k.subLanguage:null);k.relevance>0&&(Tn+=y.relevance),Q.__addSublanguage(y._emitter,y.language)}function le(){k.subLanguage!=null?Rn():Le(),j=""}function be(y,D){y!==""&&(Q.startScope(D),Q.addText(y),Q.endScope())}function Kt(y,D){let A=1;const P=D.length-1;for(;A<=P;){if(!y._emit[A]){A++;continue}const ee=we.classNameAliases[y[A]]||y[A],Fe=D[A];ee?be(Fe,ee):(j=Fe,Le(),j=""),A++}}function Gt(y,D){return y.scope&&typeof y.scope=="string"&&Q.openNode(we.classNameAliases[y.scope]||y.scope),y.beginScope&&(y.beginScope._wrap?(be(j,we.classNameAliases[y.beginScope._wrap]||y.beginScope._wrap),j=""):y.beginScope._multi&&(Kt(y.beginScope,D),j="")),k=Object.create(y,{parent:{value:k}}),k}function Wt(y,D,A){let P=T(y.endRe,A);if(P){if(y["on:end"]){const ee=new n(y);y["on:end"](D,ee),ee.isMatchIgnored&&(P=!1)}if(P){for(;y.endsParent&&y.parent;)y=y.parent;return y}}if(y.endsWithParent)return Wt(y.parent,D,A)}function Po(y){return k.matcher.regexIndex===0?(j+=y[0],1):(st=!0,0)}function zo(y){const D=y[0],A=y.rule,P=new n(A),ee=[A.__beforeBegin,A["on:begin"]];for(const Fe of ee)if(Fe&&(Fe(y,P),P.isMatchIgnored))return Po(D);return A.skip?j+=D:(A.excludeBegin&&(j+=D),le(),!A.returnBegin&&!A.excludeBegin&&(j=D)),Gt(A,y),A.returnBegin?0:D.length}function Vo(y){const D=y[0],A=x.substring(y.index),P=Wt(k,y,A);if(!P)return qt;const ee=k;k.endScope&&k.endScope._wrap?(le(),be(D,k.endScope._wrap)):k.endScope&&k.endScope._multi?(le(),Kt(k.endScope,y)):ee.skip?j+=D:(ee.returnEnd||ee.excludeEnd||(j+=D),le(),ee.excludeEnd&&(j=D));do k.scope&&Q.closeNode(),!k.skip&&!k.subLanguage&&(Tn+=k.relevance),k=k.parent;while(k!==P.parent);return P.starts&&Gt(P.starts,y),ee.returnEnd?0:D.length}function Bo(){const y=[];for(let D=k;D!==we;D=D.parent)D.scope&&y.unshift(D.scope);y.forEach(D=>Q.openNode(D))}let Mn={};function Xt(y,D){const A=D&&D[0];if(j+=y,A==null)return le(),0;if(Mn.type==="begin"&&D.type==="end"&&Mn.index===D.index&&A===""){if(j+=x.slice(D.index,D.index+1),!Z){const P=new Error(`0 width match regex (${p})`);throw P.languageName=p,P.badRule=Mn.rule,P}return 1}if(Mn=D,D.type==="begin")return zo(D);if(D.type==="illegal"&&!I){const P=new Error('Illegal lexeme "'+A+'" for mode "'+(k.scope||"<unnamed>")+'"');throw P.mode=k,P}else if(D.type==="end"){const P=Vo(D);if(P!==qt)return P}if(D.type==="illegal"&&A==="")return j+=`
`,1;if(ot>1e5&&ot>D.index*3)throw new Error("potential infinite loop, way more iterations than matches");return j+=A,A.length}const we=Ie(p);if(!we)throw Ze(K.replace("{}",p)),new Error('Unknown language: "'+p+'"');const jo=wo(we);let rt="",k=B||jo;const Jt={},Q=new b.__emitter(b);Bo();let j="",Tn=0,Ke=0,ot=0,st=!1;try{if(we.__emitTokens)we.__emitTokens(x,Q);else{for(k.matcher.considerAll();;){ot++,st?st=!1:k.matcher.considerAll(),k.matcher.lastIndex=Ke;const y=k.matcher.exec(x);if(!y)break;const D=x.substring(Ke,y.index),A=Xt(D,y);Ke=y.index+A}Xt(x.substring(Ke))}return Q.finalize(),rt=Q.toHTML(),{language:p,value:rt,relevance:Tn,illegal:!1,_emitter:Q,_top:k}}catch(y){if(y.message&&y.message.includes("Illegal"))return{language:p,value:Qn(x),illegal:!0,relevance:0,_illegalBy:{message:y.message,index:Ke,context:x.slice(Ke-100,Ke+100),mode:y.mode,resultSoFar:rt},_emitter:Q};if(Z)return{language:p,value:Qn(x),illegal:!1,relevance:0,errorRaised:y,_emitter:Q,_top:k};throw y}}function et(p){const x={value:Qn(p),illegal:!1,relevance:0,_top:w,_emitter:new b.__emitter(b)};return x._emitter.addText(p),x}function nt(p,x){x=x||b.languages||Object.keys(d);const I=et(p),B=x.filter(Ie).filter(Zt).map(le=>an(le,p,!1));B.unshift(I);const X=B.sort((le,be)=>{if(le.relevance!==be.relevance)return be.relevance-le.relevance;if(le.language&&be.language){if(Ie(le.language).supersetOf===be.language)return 1;if(Ie(be.language).supersetOf===le.language)return-1}return 0}),[ve,Le]=X,Rn=ve;return Rn.secondBest=Le,Rn}function Mo(p,x,I){const B=x&&h[x]||I;p.classList.add("hljs"),p.classList.add(`language-${B}`)}function tt(p){let x=null;const I=Y(p);if(S(I))return;if(xn("before:highlightElement",{el:p,language:I}),p.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",p);return}if(p.children.length>0&&(b.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(p)),b.throwUnescapedHTML))throw new xo("One of your code blocks includes unescaped HTML.",p.innerHTML);x=p;const B=x.textContent,X=I?G(B,{language:I,ignoreIllegals:!0}):nt(B);p.innerHTML=X.value,p.dataset.highlighted="yes",Mo(p,I,X.language),p.result={language:X.language,re:X.relevance,relevance:X.relevance},X.secondBest&&(p.secondBest={language:X.secondBest.language,relevance:X.secondBest.relevance}),xn("after:highlightElement",{el:p,result:X,text:B})}function To(p){b=jt(b,p)}const Fo=()=>{Dn(),Je("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function So(){Dn(),Je("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Ut=!1;function Dn(){function p(){Dn()}if(document.readyState==="loading"){Ut||window.addEventListener("DOMContentLoaded",p,!1),Ut=!0;return}document.querySelectorAll(b.cssSelector).forEach(tt)}function No(p,x){let I=null;try{I=x(o)}catch(B){if(Ze("Language definition for '{}' could not be registered.".replace("{}",p)),Z)Ze(B);else throw B;I=w}I.name||(I.name=p),d[p]=I,I.rawDefinition=x.bind(null,o),I.aliases&&Ht(I.aliases,{languageName:p})}function Co(p){delete d[p];for(const x of Object.keys(h))h[x]===p&&delete h[x]}function ko(){return Object.keys(d)}function Ie(p){return p=(p||"").toLowerCase(),d[p]||d[h[p]]}function Ht(p,{languageName:x}){typeof p=="string"&&(p=[p]),p.forEach(I=>{h[I.toLowerCase()]=x})}function Zt(p){const x=Ie(p);return x&&!x.disableAutodetect}function Ao(p){p["before:highlightBlock"]&&!p["before:highlightElement"]&&(p["before:highlightElement"]=x=>{p["before:highlightBlock"](Object.assign({block:x.el},x))}),p["after:highlightBlock"]&&!p["after:highlightElement"]&&(p["after:highlightElement"]=x=>{p["after:highlightBlock"](Object.assign({block:x.el},x))})}function Oo(p){Ao(p),C.push(p)}function Io(p){const x=C.indexOf(p);x!==-1&&C.splice(x,1)}function xn(p,x){const I=p;C.forEach(function(B){B[I]&&B[I](x)})}function Lo(p){return Je("10.7.0","highlightBlock will be removed entirely in v12.0"),Je("10.7.0","Please use highlightElement now."),tt(p)}Object.assign(o,{highlight:G,highlightAuto:nt,highlightAll:Dn,highlightElement:tt,highlightBlock:Lo,configure:To,initHighlighting:Fo,initHighlightingOnLoad:So,registerLanguage:No,unregisterLanguage:Co,listLanguages:ko,getLanguage:Ie,registerAliases:Ht,autoDetection:Zt,inherit:jt,addPlugin:Oo,removePlugin:Io}),o.debugMode=function(){Z=!1},o.safeMode=function(){Z=!0},o.versionString=Do,o.regex={concat:M,lookahead:c,either:L,optional:g,anyNumberOfTimes:m};for(const p in wn)typeof wn[p]=="object"&&e(wn[p]);return Object.assign(o,wn),o},Ye=$t({});return Ye.newInstance=()=>$t({}),ct=Ye,Ye.HighlightJS=Ye,Ye.default=Ye,ct}var om=rm();const _r=tm(om);var sm=pe("<pre><code><!></code></pre>");function im(e,n){const t=Bn(n,["children","$$slots","$$events","$$legacy"]),r=Bn(t,["code","highlighted","languageName","langtag"]);let s=Be(n,"code",8),i=Be(n,"highlighted",8),l=Be(n,"languageName",8,"plaintext"),u=Be(n,"langtag",8,!1);var a=sm();let f;var v=H(a);It(v,1,"",null,{},{hljs:!0});var _=H(v);{var c=g=>{var M=Ot(),F=Kn(M);ii(F,i),W(g,M)},m=g=>{var M=Ys();Re(()=>qe(M,s())),W(g,M)};gn(_,g=>{i()?g(c):g(m,!1)})}Re(g=>f=mi(a,f,{"data-language":l(),...r,[fn]:g},"svelte-1w9vok"),[()=>({langtag:u()})],Mt),W(e,a)}function am(e,n){const t=Bn(n,["children","$$slots","$$events","$$legacy"]),r=Bn(t,["language","code","langtag"]);hn(n,!1);let s=Be(n,"language",8),i=Be(n,"code",8),l=Be(n,"langtag",8,!1);const u=bi();let a=Tt("");wi(()=>{O(a)&&u("highlight",{highlighted:O(a)})}),Ss(()=>(mt(s()),mt(i())),()=>{_r.registerLanguage(s().name,s().register),re(a,_r.highlight(i(),{language:s().name}).value)}),Ns(),Gr();var f=Ot(),v=Kn(f);ai(v,n,"default",{get highlighted(){return O(a)}},_=>{im(_,hi(()=>r,{get languageName(){return s().name},get langtag(){return l()},get highlighted(){return O(a)},get code(){return i()}}))}),W(e,f),yn()}function lm(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",i={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},l={keywords:i,illegal:/<\//},u={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},a={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},f={className:"subst",begin:/\$\(/,end:/\)/,keywords:i},v={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,f,v],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},c={className:"string",contains:[e.BACKSLASH_ESCAPE,f,v],begin:"`",end:"`"},m={className:"meta",begin:"@"+n},g={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return l.name="Julia",l.contains=[u,a,_,c,m,g,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],f.contains=l.contains,l}const cm={name:"julia",register:lm};function um(e,n,t){navigator.clipboard.writeText(n.definition),re(t,!0),setTimeout(()=>{re(t,!1)},2e3)}var fm=Yn('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'),dm=Yn('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'),_m=pe('<td class="svelte-1u8rajr"> <div class="model-definition svelte-1u8rajr"><div class="code-wrapper svelte-1u8rajr"><!></div> <button class="copy-btn svelte-1u8rajr" aria-label="Copy to clipboard" title="Copy code"><!></button></div></td>');function mm(e,n){let t=Ee(!1);var r=_m(),s=H(r),i=_e(s),l=H(i),u=H(l);am(u,{language:cm,get code(){return n.definition}});var a=_e(l,2);a.__click=[um,n,t];var f=H(a);{var v=c=>{var m=fm();W(c,m)},_=c=>{var m=dm();W(c,m)};gn(f,c=>{O(t)?c(v):c(_,!1)})}Re(()=>{qe(s,`${n.name??""} `),a.disabled=O(t)}),W(e,r)}kt(["click"]);var pm=pe('<th class="svelte-12yri61"> </th>'),gm=pe('<td class="svelte-12yri61"> </td>'),vm=pe('<a class="issue svelte-12yri61" target="_blank">(?)</a>'),hm=pe('<td class="svelte-12yri61"><!> <span> </span></td>'),ym=pe('<tr class="svelte-12yri61"><!><!></tr>'),bm=pe('<table id="results" class="svelte-12yri61"><thead><tr class="svelte-12yri61"><th class="svelte-12yri61">Model name \\\\ AD type</th><!></tr></thead><tbody></tbody></table>');function wm(e,n){hn(n,!0);const t=[...n.data.keys()],r=n.data.get(t[0]).keys(),s="https://github.com/EnzymeAD/Enzyme.jl/issues/1995",l={assume_mvnormal__EnzymeForward:s,assume_wishart__EnzymeForward:s,multithreaded__Mooncake:"https://github.com/chalk-lab/Mooncake.jl/issues/570"};var u=bm(),a=H(u),f=H(a),v=_e(H(f));_n(v,17,()=>r,dn,(c,m)=>{var g=pm(),M=H(g);Re(()=>qe(M,O(m))),W(c,g)});var _=_e(a);_n(_,21,()=>ht(n.data),dn,(c,m)=>{let g=()=>O(m)[0],M=()=>O(m)[1];var F=ym(),L=H(F);mm(L,{get name(){return g()},get definition(){return n.modelDefinitions[g()]}});var $=_e(L);_n($,17,()=>ht(M()),dn,(T,E)=>{let R=()=>O(E)[0],J=()=>O(E)[1];var N=Ot(),U=Kn(N);{var ae=ne=>{var ge=gm(),Ae=H(ge);Re(fe=>qe(Ae,fe),[()=>J().toFixed(3)]),W(ne,ge)},ke=ne=>{var ge=hm(),Ae=H(ge);{var fe=Oe=>{var ye=vm();Re(()=>vt(ye,"href",l[`${g()}__${R()}`])),W(Oe,ye)};gn(Ae,Oe=>{l[`${g()}__${R()}`]&&Oe(fe)})}var He=_e(Ae,2),Xe=H(He);Re(()=>{It(He,1,$r(J()),"svelte-12yri61"),qe(Xe,J())}),W(ne,ge)};gn(U,ne=>{typeof J()=="number"?ne(ae):ne(ke,!1)})}W(T,N)}),W(c,F)}),W(e,u),yn()}function Em(e,n){re(n,O(n)==="light"?"dark":"light",!0),document.documentElement.setAttribute("data-theme",O(n)),localStorage.setItem("theme",O(n))}var Dm=Yn('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'),xm=Yn('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'),Rm=pe("<h3> </h3> <!>",1),Mm=pe(`<div id="main-wrapper" class="svelte-1ns7xaw"><main class="svelte-1ns7xaw"><div class="header svelte-1ns7xaw"><h1>Turing AD tests</h1> <button class="theme-toggle svelte-1ns7xaw" aria-label="Toggle Dark Mode" title="Toggle theme"><!></button></div> <p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p> <p>This page is intended as a brief overview of how different AD
            backends perform on a variety of Turing.jl models. Note that the
            inclusion of any AD backend here does not imply an endorsement from
            the Turing team; this table is purely for information.</p> <p>The scope of this table is limited to Turing models. It does not
            purport to show which AD backend is better for tasks that do not
            involve Turing models. If you are interested in more general
            comparisons of AD backends, you may wish to check out something like <a href="https://github.com/gradbench/gradbench" target="_blank">GradBench</a>.</p> <ul class="notes svelte-1ns7xaw"><li>You can hover over the model names to see their definitions.</li> <li>The definitions of the AD types can be found in <a href="https://github.com/TuringLang/ADTests/blob/main/main.jl" target="_blank">the source code</a>.</li> <li><b>Numbers</b> indicate the time taken to calculate the gradient
                of the log density of the model using the specified AD type,
                divided by the time taken to calculate the log density itself
                (in AD speak, the primal). Basically: <b>smaller means faster.</b></li> <li>'<span class="wrong svelte-1ns7xaw">wrong</span>' means that AD ran but the
                result was not correct. If this happens you should be very wary!
                Note that this is done by comparing against the result obtained
                using FiniteDifferences, i.e., FiniteDifferences is by
                definition always 'correct'.</li> <li>'<span class="error svelte-1ns7xaw">error</span>' means that AD didn't run.</li> <li>Some of the 'wrong' or 'error' entries have question marks next
                to them. These will link to a GitHub issue or other page that
                describes the problem.</li></ul> <div class="warning svelte-1ns7xaw"><b>Note: The results here are run with Julia 1.11. Enzyme
                currently does not work on Julia 1.12.</b></div> <h2>Results</h2> <p><a href="adtests.json" target="_blank" download="">Download the raw data (JSON)</a></p> <!> <h2>Manifest</h2> <p>The tests above were run with the following package versions:</p> <!></main></div>`);function Tm(e,n){hn(n,!0);let t=Ee(ze(typeof document<"u"&&document.documentElement.getAttribute("data-theme")||"light")),r=new Map;for(const[m,g]of Object.entries(Da)){let M=g.__category__;delete g.__category__;let F=new Map;for(const[L,$]of Object.entries(g))F.set(L,$);r.has(M)||r.set(M,new Map),r.get(M).set(m,F)}r=new Map([...r.entries()].sort());var s=Mm(),i=H(s),l=H(i),u=_e(H(l),2);u.__click=[Em,t];var a=H(u);{var f=m=>{var g=Dm();W(m,g)},v=m=>{var g=xm();W(m,g)};gn(a,m=>{O(t)==="dark"?m(f):m(v,!1)})}var _=_e(l,16);_n(_,17,()=>r.entries(),dn,(m,g)=>{let M=()=>O(g)[0],F=()=>O(g)[1];var L=Rm(),$=Kn(L),T=H($),E=_e($,2);wm(E,{get data(){return F()},modelDefinitions:Dl}),Re(()=>qe(T,M())),W(m,L)});var c=_e(_,6);nm(c,{}),W(e,s),yn()}kt(["click"]);Qs(Tm,{target:document.getElementById("app")});
