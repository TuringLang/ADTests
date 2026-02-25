(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Yt=!1;var Bn=Array.isArray,Uo=Array.prototype.indexOf,yt=Array.from,Ho=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,pr=Object.getOwnPropertyDescriptors,Ko=Object.prototype,Go=Array.prototype,bt=Object.getPrototypeOf,Qt=Object.isExtensible;function ln(e){return typeof e=="function"}function Zo(e){return e()}function ut(e){for(var n=0;n<e.length;n++)e[n]()}const he=2,gr=4,qn=8,wt=16,ke=32,rn=64,kn=128,ue=256,An=512,se=1024,Me=2048,Ue=4096,Ne=8192,$n=16384,Wo=32768,Et=65536,Xo=1<<17,Jo=1<<19,vr=1<<20,ft=1<<21,Ze=Symbol("$state"),hr=Symbol("legacy props"),Yo=Symbol("");function yr(e){return e===this.v}function Qo(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Dt(e){return!Qo(e,this.v)}function es(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ns(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ts(e){throw new Error("https://svelte.dev/e/effect_orphan")}function rs(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function os(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function ss(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function is(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function as(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ls(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let vn=!1,cs=!1;function us(){vn=!0}const xt=1,Rt=2,br=4,fs=8,ds=16,_s=1,ms=2,wr=4,ps=8,gs=16,vs=1,hs=2,ie=Symbol(),ys="http://www.w3.org/1999/xhtml",bs="@attach";function Er(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let q=null;function er(e){q=e}function hn(e,n=!1,t){var r=q={p:q,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};vn&&!n&&(q.l={s:null,u:null,r1:[],r2:en(!1)}),Ms(()=>{r.d=!0})}function yn(e){const n=q;if(n!==null){const l=n.e;if(l!==null){var t=z,r=j;n.e=null;try{for(var i=0;i<l.length;i++){var s=l[i];$e(s.effect),Te(s.reaction),Ft(s.fn)}}finally{$e(t),Te(r)}}q=n.p,n.m=!0}return{}}function Un(){return!vn||q!==null&&q.l===null}function ze(e){if(typeof e!="object"||e===null||Ze in e)return e;const n=bt(e);if(n!==Ko&&n!==Go)return e;var t=new Map,r=Bn(e),i=Ee(0),s=j,l=u=>{var a=j;Te(s);var f=u();return Te(a),f};return r&&t.set("length",Ee(e.length)),new Proxy(e,{defineProperty(u,a,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&is();var g=t.get(a);return g===void 0?(g=l(()=>Ee(f.value)),t.set(a,g)):re(g,l(()=>ze(f.value))),!0},deleteProperty(u,a){var f=t.get(a);if(f===void 0)a in u&&(t.set(a,l(()=>Ee(ie))),it(i));else{if(r&&typeof a=="string"){var g=t.get("length"),_=Number(a);Number.isInteger(_)&&_<g.v&&re(g,_)}re(f,ie),it(i)}return!0},get(u,a,f){var v;if(a===Ze)return e;var g=t.get(a),_=a in u;if(g===void 0&&(!_||(v=Be(u,a))!=null&&v.writable)&&(g=l(()=>Ee(ze(_?u[a]:ie))),t.set(a,g)),g!==void 0){var c=O(g);return c===ie?void 0:c}return Reflect.get(u,a,f)},getOwnPropertyDescriptor(u,a){var f=Reflect.getOwnPropertyDescriptor(u,a);if(f&&"value"in f){var g=t.get(a);g&&(f.value=O(g))}else if(f===void 0){var _=t.get(a),c=_==null?void 0:_.v;if(_!==void 0&&c!==ie)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return f},has(u,a){var c;if(a===Ze)return!0;var f=t.get(a),g=f!==void 0&&f.v!==ie||Reflect.has(u,a);if(f!==void 0||z!==null&&(!g||(c=Be(u,a))!=null&&c.writable)){f===void 0&&(f=l(()=>Ee(g?ze(u[a]):ie)),t.set(a,f));var _=O(f);if(_===ie)return!1}return g},set(u,a,f,g){var $;var _=t.get(a),c=a in u;if(r&&a==="length")for(var v=f;v<_.v;v+=1){var p=t.get(v+"");p!==void 0?re(p,ie):v in u&&(p=l(()=>Ee(ie)),t.set(v+"",p))}_===void 0?(!c||($=Be(u,a))!=null&&$.writable)&&(_=l(()=>Ee(void 0)),re(_,l(()=>ze(f))),t.set(a,_)):(c=_.v!==ie,re(_,l(()=>ze(f))));var x=Reflect.getOwnPropertyDescriptor(u,a);if(x!=null&&x.set&&x.set.call(g,f),!c){if(r&&typeof a=="string"){var F=t.get("length"),L=Number(a);Number.isInteger(L)&&L>=F.v&&re(F,L+1)}it(i)}return!0},ownKeys(u){O(i);var a=Reflect.ownKeys(u).filter(_=>{var c=t.get(_);return c===void 0||c.v!==ie});for(var[f,g]of t)g.v!==ie&&!(f in u)&&a.push(f);return a},setPrototypeOf(){as()}})}function it(e,n=1){re(e,e.v+n)}function mn(e){var n=he|Me,t=j!==null&&(j.f&he)!==0?j:null;return z===null||t!==null&&(t.f&ue)!==0?n|=ue:z.f|=vr,{ctx:q,deps:null,effects:null,equals:yr,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??z}}function Mt(e){const n=mn(e);return n.equals=Dt,n}function Dr(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)Se(n[t])}}function ws(e){for(var n=e.parent;n!==null;){if((n.f&he)===0)return n;n=n.parent}return null}function xr(e){var n,t=z;$e(ws(e));try{Dr(e),n=Vr(e)}finally{$e(t)}return n}function Rr(e){var n=xr(e),t=(je||(e.f&ue)!==0)&&e.deps!==null?Ue:se;me(e,t),e.equals(n)||(e.v=n,e.wv=zr())}const pn=new Map;function en(e,n){var t={f:0,v:e,reactions:null,equals:yr,rv:0,wv:0};return t}function Ee(e,n){const t=en(e);return Cs(t),t}function Tt(e,n=!1){var r;const t=en(e);return n||(t.equals=Dt),vn&&q!==null&&q.l!==null&&((r=q.l).s??(r.s=[])).push(t),t}function re(e,n,t=!1){j!==null&&!De&&Un()&&(j.f&(he|wt))!==0&&!(oe!=null&&oe.includes(e))&&ls();let r=t?ze(n):n;return dt(e,r)}function dt(e,n){if(!e.equals(n)){var t=e.v;bn?pn.set(e,n):pn.set(e,t),e.v=n,(e.f&he)!==0&&((e.f&Me)!==0&&xr(e),me(e,(e.f&ue)===0?se:Ue)),e.wv=zr(),Mr(e,Me),Un()&&z!==null&&(z.f&se)!==0&&(z.f&(ke|rn))===0&&(de===null?Os([e]):de.push(e))}return n}function nr(e,n=1){var t=O(e),r=n===1?t++:t--;return re(e,t),r}function Mr(e,n){var t=e.reactions;if(t!==null)for(var r=Un(),i=t.length,s=0;s<i;s++){var l=t[s],u=l.f;(u&Me)===0&&(!r&&l===z||(me(l,n),(u&(se|ue))!==0&&((u&he)!==0?Mr(l,Ue):Jn(l))))}}let Es=!1;var tr,Tr,Fr,Nr;function Ds(){if(tr===void 0){tr=window,Tr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Fr=Be(n,"firstChild").get,Nr=Be(n,"nextSibling").get,Qt(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Qt(t)&&(t.__t=void 0)}}function Hn(e=""){return document.createTextNode(e)}function xe(e){return Fr.call(e)}function Kn(e){return Nr.call(e)}function H(e,n){return xe(e)}function Gn(e,n){{var t=xe(e);return t instanceof Comment&&t.data===""?Kn(t):t}}function _e(e,n=1,t=!1){let r=e;for(;n--;)r=Kn(r);return r}function xs(e){e.textContent=""}function Sr(e){z===null&&j===null&&ts(),j!==null&&(j.f&ue)!==0&&z===null&&ns(),bn&&es()}function Rs(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function on(e,n,t,r=!0){var i=z,s={ctx:q,deps:null,nodes_start:null,nodes_end:null,f:e|Me,first:null,fn:n,last:null,next:null,parent:i,prev:null,teardown:null,transitions:null,wv:0};if(t)try{Xn(s),s.f|=Wo}catch(a){throw Se(s),a}else n!==null&&Jn(s);var l=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(vr|kn))===0;if(!l&&r&&(i!==null&&Rs(s,i),j!==null&&(j.f&he)!==0)){var u=j;(u.effects??(u.effects=[])).push(s)}return s}function Ms(e){const n=on(qn,null,!1);return me(n,se),n.teardown=e,n}function rr(e){Sr();var n=z!==null&&(z.f&ke)!==0&&q!==null&&!q.m;if(n){var t=q;(t.e??(t.e=[])).push({fn:e,effect:z,reaction:j})}else{var r=Ft(e);return r}}function Ts(e){return Sr(),Nt(e)}function Fs(e){const n=on(rn,e,!0);return(t={})=>new Promise(r=>{t.outro?Cn(n,()=>{Se(n),r(void 0)}):(Se(n),r(void 0))})}function Ft(e){return on(gr,e,!1)}function Ns(e,n){var t=q,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=Nt(()=>{e(),!r.ran&&(r.ran=!0,re(t.l.r2,!0),jn(n))})}function Ss(){var e=q;Nt(()=>{if(O(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&se)!==0&&me(t,Ue),sn(t)&&Xn(t),n.ran=!1}e.l.r2.v=!1}})}function Nt(e){return on(qn,e,!0)}function Re(e,n=[],t=mn){const r=n.map(t);return Zn(()=>e(...r.map(O)))}function Zn(e,n=0){return on(qn|wt|n,e,!0)}function nn(e,n=!0){return on(qn|ke,e,!0,n)}function kr(e){var n=e.teardown;if(n!==null){const t=bn,r=j;or(!0),Te(null);try{n.call(null)}finally{or(t),Te(r)}}}function Ar(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&rn)!==0?t.parent=null:Se(t,n),t=r}}function ks(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&ke)===0&&Se(n),n=t}}function Se(e,n=!0){var t=!1;(n||(e.f&Jo)!==0)&&e.nodes_start!==null&&(Cr(e.nodes_start,e.nodes_end),t=!0),Ar(e,n&&!t),zn(e,0),me(e,$n);var r=e.transitions;if(r!==null)for(const s of r)s.stop();kr(e);var i=e.parent;i!==null&&i.first!==null&&Or(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Cr(e,n){for(;e!==null;){var t=e===n?null:Kn(e);e.remove(),e=t}}function Or(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function Cn(e,n){var t=[];St(e,t,!0),Ir(t,()=>{Se(e),n&&n()})}function Ir(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var i of e)i.out(r)}else n()}function St(e,n,t){if((e.f&Ne)===0){if(e.f^=Ne,e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&n.push(l);for(var r=e.first;r!==null;){var i=r.next,s=(r.f&Et)!==0||(r.f&ke)!==0;St(r,n,s?t:!1),r=i}}}function On(e){Lr(e,!0)}function Lr(e,n){if((e.f&Ne)!==0){e.f^=Ne,(e.f&se)===0&&(e.f^=se),sn(e)&&(me(e,Me),Jn(e));for(var t=e.first;t!==null;){var r=t.next,i=(t.f&Et)!==0||(t.f&ke)!==0;Lr(t,i?n:!1),t=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&s.in()}}let In=[];function As(){var e=In;In=[],ut(e)}function kt(e){In.length===0&&queueMicrotask(As),In.push(e)}let Nn=!1,_t=!1,Ln=null,We=!1,bn=!1;function or(e){bn=e}let Sn=[];let j=null,De=!1;function Te(e){j=e}let z=null;function $e(e){z=e}let oe=null;function Cs(e){j!==null&&j.f&ft&&(oe===null?oe=[e]:oe.push(e))}let te=null,ce=0,de=null;function Os(e){de=e}let Pr=1,Pn=0,je=!1;function zr(){return++Pr}function sn(e){var _;var n=e.f;if((n&Me)!==0)return!0;if((n&Ue)!==0){var t=e.deps,r=(n&ue)!==0;if(t!==null){var i,s,l=(n&An)!==0,u=r&&z!==null&&!je,a=t.length;if(l||u){var f=e,g=f.parent;for(i=0;i<a;i++)s=t[i],(l||!((_=s==null?void 0:s.reactions)!=null&&_.includes(f)))&&(s.reactions??(s.reactions=[])).push(f);l&&(f.f^=An),u&&g!==null&&(g.f&ue)===0&&(f.f^=ue)}for(i=0;i<a;i++)if(s=t[i],sn(s)&&Rr(s),s.wv>e.wv)return!0}(!r||z!==null&&!je)&&me(e,se)}return!1}function Is(e,n){for(var t=n;t!==null;){if((t.f&kn)!==0)try{t.fn(e);return}catch{t.f^=kn}t=t.parent}throw Nn=!1,e}function sr(e){return(e.f&$n)===0&&(e.parent===null||(e.parent.f&kn)===0)}function Wn(e,n,t,r){if(Nn){if(t===null&&(Nn=!1),sr(n))throw e;return}if(t!==null&&(Nn=!0),Is(e,n),sr(n))throw e}function jr(e,n,t=!0){var r=e.reactions;if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];oe!=null&&oe.includes(e)||((s.f&he)!==0?jr(s,n,!1):n===s&&(t?me(s,Me):(s.f&se)!==0&&me(s,Ue),Jn(s)))}}function Vr(e){var v;var n=te,t=ce,r=de,i=j,s=je,l=oe,u=q,a=De,f=e.f;te=null,ce=0,de=null,je=(f&ue)!==0&&(De||!We||j===null),j=(f&(ke|rn))===0?e:null,oe=null,er(e.ctx),De=!1,Pn++,e.f|=ft;try{var g=(0,e.fn)(),_=e.deps;if(te!==null){var c;if(zn(e,ce),_!==null&&ce>0)for(_.length=ce+te.length,c=0;c<te.length;c++)_[ce+c]=te[c];else e.deps=_=te;if(!je)for(c=ce;c<_.length;c++)((v=_[c]).reactions??(v.reactions=[])).push(e)}else _!==null&&ce<_.length&&(zn(e,ce),_.length=ce);if(Un()&&de!==null&&!De&&_!==null&&(e.f&(he|Ue|Me))===0)for(c=0;c<de.length;c++)jr(de[c],e);return i!==null&&i!==e&&(Pn++,de!==null&&(r===null?r=de:r.push(...de))),g}finally{te=n,ce=t,de=r,j=i,je=s,oe=l,er(u),De=a,e.f^=ft}}function Ls(e,n){let t=n.reactions;if(t!==null){var r=Uo.call(t,e);if(r!==-1){var i=t.length-1;i===0?t=n.reactions=null:(t[r]=t[i],t.pop())}}t===null&&(n.f&he)!==0&&(te===null||!te.includes(n))&&(me(n,Ue),(n.f&(ue|An))===0&&(n.f^=An),Dr(n),zn(n,0))}function zn(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Ls(e,t[r])}function Xn(e){var n=e.f;if((n&$n)===0){me(e,se);var t=z,r=q,i=We;z=e,We=!0;try{(n&wt)!==0?ks(e):Ar(e),kr(e);var s=Vr(e);e.teardown=typeof s=="function"?s:null,e.wv=Pr;var l=e.deps,u;Yt&&cs&&e.f&Me}catch(a){Wn(a,e,t,r||e.ctx)}finally{We=i,z=t}}}function Ps(){try{rs()}catch(e){if(Ln!==null)Wn(e,Ln,null);else throw e}}function zs(){var e=We;try{var n=0;for(We=!0;Sn.length>0;){n++>1e3&&Ps();var t=Sn,r=t.length;Sn=[];for(var i=0;i<r;i++){var s=Vs(t[i]);js(s)}pn.clear()}}finally{_t=!1,We=e,Ln=null}}function js(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&($n|Ne))===0)try{sn(r)&&(Xn(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Or(r):r.fn=null))}catch(i){Wn(i,r,null,r.ctx)}}}function Jn(e){_t||(_t=!0,queueMicrotask(zs));for(var n=Ln=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(rn|ke))!==0){if((t&se)===0)return;n.f^=se}}Sn.push(n)}function Vs(e){for(var n=[],t=e;t!==null;){var r=t.f,i=(r&(ke|rn))!==0,s=i&&(r&se)!==0;if(!s&&(r&Ne)===0){if((r&gr)!==0)n.push(t);else if(i)t.f^=se;else try{sn(t)&&Xn(t)}catch(a){Wn(a,t,null,t.ctx)}var l=t.first;if(l!==null){t=l;continue}}var u=t.parent;for(t=t.next;t===null&&u!==null;)t=u.next,u=u.parent}return n}function O(e){var n=e.f,t=(n&he)!==0;if(j!==null&&!De){if(!(oe!=null&&oe.includes(e))){var r=j.deps;e.rv<Pn&&(e.rv=Pn,te===null&&r!==null&&r[ce]===e?ce++:te===null?te=[e]:(!je||!te.includes(e))&&te.push(e))}}else if(t&&e.deps===null&&e.effects===null){var i=e,s=i.parent;s!==null&&(s.f&ue)===0&&(i.f^=ue)}return t&&(i=e,sn(i)&&Rr(i)),bn&&pn.has(e)?pn.get(e):e.v}function jn(e){var n=De;try{return De=!0,e()}finally{De=n}}const Bs=-7169;function me(e,n){e.f=e.f&Bs|n}function mt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ze in e)pt(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&Ze in t&&pt(t)}}}function pt(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{pt(e[r],n)}catch{}const t=bt(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=pr(t);for(let i in r){const s=r[i].get;if(s)try{s.call(e)}catch{}}}}}function qs(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const $s=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Us(e){return $s.includes(e)}const Hs={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Ks(e){return e=e.toLowerCase(),Hs[e]??e}const Gs=["touchstart","touchmove"];function Zs(e){return Gs.includes(e)}function Ws(e,n){if(n){const t=document.body;e.autofocus=!0,kt(()=>{document.activeElement===t&&e.focus()})}}function Xs(e){var n=j,t=z;Te(null),$e(null);try{return e()}finally{Te(n),$e(t)}}const Br=new Set,gt=new Set;function Js(e,n,t,r={}){function i(s){if(r.capture||un.call(n,s),!s.cancelBubble)return Xs(()=>t==null?void 0:t.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?kt(()=>{n.addEventListener(e,i,r)}):n.addEventListener(e,i,r),i}function At(e){for(var n=0;n<e.length;n++)Br.add(e[n]);for(var t of gt)t(e)}function un(e){var $;var n=this,t=n.ownerDocument,r=e.type,i=(($=e.composedPath)==null?void 0:$.call(e))||[],s=i[0]||e.target,l=0,u=e.__root;if(u){var a=i.indexOf(u);if(a!==-1&&(n===document||n===window)){e.__root=n;return}var f=i.indexOf(n);if(f===-1)return;a<=f&&(l=a)}if(s=i[l]||e.target,s!==n){Ho(e,"currentTarget",{configurable:!0,get(){return s||t}});var g=j,_=z;Te(null),$e(null);try{for(var c,v=[];s!==null;){var p=s.assignedSlot||s.parentNode||s.host||null;try{var x=s["__"+r];if(x!=null&&(!s.disabled||e.target===s))if(Bn(x)){var[F,...L]=x;F.apply(s,[e,...L])}else x.call(s,e)}catch(T){c?v.push(T):c=T}if(e.cancelBubble||p===n||p===null)break;s=p}if(c){for(let T of v)queueMicrotask(()=>{throw T});throw c}}finally{e.__root=n,delete e.currentTarget,Te(g),$e(_)}}}function Ct(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function tn(e,n){var t=z;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function pe(e,n){var t=(n&vs)!==0,r=(n&hs)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=Ct(s?e:"<!>"+e),t||(i=xe(i)));var l=r||Tr?document.importNode(i,!0):i.cloneNode(!0);if(t){var u=xe(l),a=l.lastChild;tn(u,a)}else tn(l,l);return l}}function Yn(e,n,t="svg"){var r=!e.startsWith("<!>"),i=`<${t}>${r?e:"<!>"+e}</${t}>`,s;return()=>{if(!s){var l=Ct(i),u=xe(l);s=xe(u)}var a=s.cloneNode(!0);return tn(a,a),a}}function Ys(e=""){{var n=Hn(e+"");return tn(n,n),n}}function Ot(){var e=document.createDocumentFragment(),n=document.createComment(""),t=Hn();return e.append(n,t),tn(n,t),e}function W(e,n){e!==null&&e.before(n)}function qe(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function Qs(e,n){return ei(e,n)}const Qe=new Map;function ei(e,{target:n,anchor:t,props:r={},events:i,context:s,intro:l=!0}){Ds();var u=new Set,a=_=>{for(var c=0;c<_.length;c++){var v=_[c];if(!u.has(v)){u.add(v);var p=Zs(v);n.addEventListener(v,un,{passive:p});var x=Qe.get(v);x===void 0?(document.addEventListener(v,un,{passive:p}),Qe.set(v,1)):Qe.set(v,x+1)}}};a(yt(Br)),gt.add(a);var f=void 0,g=Fs(()=>{var _=t??n.appendChild(Hn());return nn(()=>{if(s){hn({});var c=q;c.c=s}i&&(r.$$events=i),f=e(_,r)||{},s&&yn()}),()=>{var p;for(var c of u){n.removeEventListener(c,un);var v=Qe.get(c);--v===0?(document.removeEventListener(c,un),Qe.delete(c)):Qe.set(c,v)}gt.delete(a),_!==t&&((p=_.parentNode)==null||p.removeChild(_))}});return ni.set(f,g),f}let ni=new WeakMap;function gn(e,n,[t,r]=[0,0]){var i=e,s=null,l=null,u=ie,a=t>0?Et:0,f=!1;const g=(c,v=!0)=>{f=!0,_(v,c)},_=(c,v)=>{u!==(u=c)&&(u?(s?On(s):v&&(s=nn(()=>v(i))),l&&Cn(l,()=>{l=null})):(l?On(l):v&&(l=nn(()=>v(i,[t+1,r]))),s&&Cn(s,()=>{s=null})))};Zn(()=>{f=!1,n(g),f||_(null,null)},a)}function dn(e,n){return n}function ti(e,n,t,r){for(var i=[],s=n.length,l=0;l<s;l++)St(n[l].e,i,!0);var u=s>0&&i.length===0&&t!==null;if(u){var a=t.parentNode;xs(a),a.append(t),r.clear(),Pe(e,n[0].prev,n[s-1].next)}Ir(i,()=>{for(var f=0;f<s;f++){var g=n[f];u||(r.delete(g.k),Pe(e,g.prev,g.next)),Se(g.e,!u)}})}function _n(e,n,t,r,i,s=null){var l=e,u={flags:n,items:new Map,first:null},a=(n&br)!==0;if(a){var f=e;l=f.appendChild(Hn())}var g=null,_=!1,c=Mt(()=>{var v=t();return Bn(v)?v:v==null?[]:yt(v)});Zn(()=>{var v=O(c),p=v.length;_&&p===0||(_=p===0,ri(v,u,l,i,n,r,t),s!==null&&(p===0?g?On(g):g=nn(()=>s(l)):g!==null&&Cn(g,()=>{g=null})),O(c))})}function ri(e,n,t,r,i,s,l){var fe,He,Xe,Oe;var u=(i&fs)!==0,a=(i&(xt|Rt))!==0,f=e.length,g=n.items,_=n.first,c=_,v,p=null,x,F=[],L=[],$,T,E,R;if(u)for(R=0;R<f;R+=1)$=e[R],T=s($,R),E=g.get(T),E!==void 0&&((fe=E.a)==null||fe.measure(),(x??(x=new Set)).add(E));for(R=0;R<f;R+=1){if($=e[R],T=s($,R),E=g.get(T),E===void 0){var J=c?c.e.nodes_start:t;p=si(J,n,p,p===null?n.first:p.next,$,T,R,r,i,l),g.set(T,p),F=[],L=[],c=p.next;continue}if(a&&oi(E,$,R,i),(E.e.f&Ne)!==0&&(On(E.e),u&&((He=E.a)==null||He.unfix(),(x??(x=new Set)).delete(E))),E!==c){if(v!==void 0&&v.has(E)){if(F.length<L.length){var S=L[0],U;p=S.prev;var ae=F[0],Ae=F[F.length-1];for(U=0;U<F.length;U+=1)ir(F[U],S,t);for(U=0;U<L.length;U+=1)v.delete(L[U]);Pe(n,ae.prev,Ae.next),Pe(n,p,ae),Pe(n,Ae,S),c=S,p=Ae,R-=1,F=[],L=[]}else v.delete(E),ir(E,c,t),Pe(n,E.prev,E.next),Pe(n,E,p===null?n.first:p.next),Pe(n,p,E),p=E;continue}for(F=[],L=[];c!==null&&c.k!==T;)(c.e.f&Ne)===0&&(v??(v=new Set)).add(c),L.push(c),c=c.next;if(c===null)continue;E=c}F.push(E),p=E,c=E.next}if(c!==null||v!==void 0){for(var ne=v===void 0?[]:yt(v);c!==null;)(c.e.f&Ne)===0&&ne.push(c),c=c.next;var ge=ne.length;if(ge>0){var Ce=(i&br)!==0&&f===0?t:null;if(u){for(R=0;R<ge;R+=1)(Xe=ne[R].a)==null||Xe.measure();for(R=0;R<ge;R+=1)(Oe=ne[R].a)==null||Oe.fix()}ti(n,ne,Ce,g)}}u&&kt(()=>{var ye;if(x!==void 0)for(E of x)(ye=E.a)==null||ye.apply()}),z.first=n.first&&n.first.e,z.last=p&&p.e}function oi(e,n,t,r){(r&xt)!==0&&dt(e.v,n),(r&Rt)!==0?dt(e.i,t):e.i=t}function si(e,n,t,r,i,s,l,u,a,f){var g=(a&xt)!==0,_=(a&ds)===0,c=g?_?Tt(i):en(i):i,v=(a&Rt)===0?l:en(l),p={i:v,v:c,k:s,a:null,e:null,prev:t,next:r};try{return p.e=nn(()=>u(e,c,v,f),Es),p.e.prev=t&&t.e,p.e.next=r&&r.e,t===null?n.first=p:(t.next=p,t.e.next=p.e),r!==null&&(r.prev=p,r.e.prev=p.e),p}finally{}}function ir(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,i=n?n.e.nodes_start:t,s=e.e.nodes_start;s!==r;){var l=Kn(s);i.before(s),s=l}}function Pe(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function ii(e,n,t=!1,r=!1,i=!1){var s=e,l="";Re(()=>{var u=z;if(l!==(l=n()??"")&&(u.nodes_start!==null&&(Cr(u.nodes_start,u.nodes_end),u.nodes_start=u.nodes_end=null),l!=="")){var a=l+"";t?a=`<svg>${a}</svg>`:r&&(a=`<math>${a}</math>`);var f=Ct(a);if((t||r)&&(f=xe(f)),tn(xe(f),f.lastChild),t||r)for(;xe(f);)s.before(xe(f));else s.before(f)}})}function ai(e,n,t,r,i){var u;var s=(u=n.$$slots)==null?void 0:u[t],l=!1;s===!0&&(s=n.children,l=!0),s===void 0?i!==null&&i(e):s(e,l?()=>r:r)}function li(e,n){var t=void 0,r;Zn(()=>{t!==(t=n())&&(r&&(Se(r),r=null),t&&(r=nn(()=>{Ft(()=>t(e))})))})}function qr(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=qr(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function ci(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=qr(e))&&(r&&(r+=" "),r+=n);return r}function $r(e){return typeof e=="object"?ci(e):e??""}const ar=[...` 	
\r\f \v\uFEFF`];function ui(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var i in t)if(t[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,l=0;(l=r.indexOf(i,l))>=0;){var u=l+s;(l===0||ar.includes(r[l-1]))&&(u===r.length||ar.includes(r[u]))?r=(l===0?"":r.substring(0,l))+r.substring(u+1):l=u}}return r===""?null:r}function lr(e,n=!1){var t=n?" !important;":";",r="";for(var i in e){var s=e[i];s!=null&&s!==""&&(r+=" "+i+": "+s+t)}return r}function at(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function fi(e,n){if(n){var t="",r,i;if(Array.isArray(n)?(r=n[0],i=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,l=0,u=!1,a=[];r&&a.push(...Object.keys(r).map(at)),i&&a.push(...Object.keys(i).map(at));var f=0,g=-1;const x=e.length;for(var _=0;_<x;_++){var c=e[_];if(u?c==="/"&&e[_-1]==="*"&&(u=!1):s?s===c&&(s=!1):c==="/"&&e[_+1]==="*"?u=!0:c==='"'||c==="'"?s=c:c==="("?l++:c===")"&&l--,!u&&s===!1&&l===0){if(c===":"&&g===-1)g=_;else if(c===";"||_===x-1){if(g!==-1){var v=at(e.substring(f,g).trim());if(!a.includes(v)){c!==";"&&_++;var p=e.substring(f,_).trim();t+=" "+p+";"}}f=_+1,g=-1}}}}return r&&(t+=lr(r)),i&&(t+=lr(i,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function It(e,n,t,r,i,s){var l=e.__className;if(l!==t||l===void 0){var u=ui(t,r,s);u==null?e.removeAttribute("class"):n?e.className=u:e.setAttribute("class",u),e.__className=t}else if(s&&i!==s)for(var a in s){var f=!!s[a];(i==null||f!==!!i[a])&&e.classList.toggle(a,f)}return s}function lt(e,n={},t,r){for(var i in t){var s=t[i];n[i]!==s&&(t[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function di(e,n,t,r){var i=e.__style;if(i!==n){var s=fi(n,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=n}else r&&(Array.isArray(r)?(lt(e,t==null?void 0:t[0],r[0]),lt(e,t==null?void 0:t[1],r[1],"important")):lt(e,t,r));return r}const fn=Symbol("class"),cn=Symbol("style"),Ur=Symbol("is custom element"),Hr=Symbol("is html");function _i(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function vt(e,n,t,r){var i=Kr(e);i[n]!==(i[n]=t)&&(n==="loading"&&(e[Yo]=t),t==null?e.removeAttribute(n):typeof t!="string"&&Gr(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function mi(e,n,t,r,i=!1){var s=Kr(e),l=s[Ur],u=!s[Hr],a=n||{},f=e.tagName==="OPTION";for(var g in n)g in t||(t[g]=null);t.class?t.class=$r(t.class):t.class=null,t[cn]&&(t.style??(t.style=null));var _=Gr(e);for(const T in t){let E=t[T];if(f&&T==="value"&&E==null){e.value=e.__value="",a[T]=E;continue}if(T==="class"){var c=e.namespaceURI==="http://www.w3.org/1999/xhtml";It(e,c,E,r,n==null?void 0:n[fn],t[fn]),a[T]=E,a[fn]=t[fn];continue}if(T==="style"){di(e,E,n==null?void 0:n[cn],t[cn]),a[T]=E,a[cn]=t[cn];continue}var v=a[T];if(E!==v){a[T]=E;var p=T[0]+T[1];if(p!=="$$")if(p==="on"){const R={},J="$$"+T;let S=T.slice(2);var x=Us(S);if(qs(S)&&(S=S.slice(0,-7),R.capture=!0),!x&&v){if(E!=null)continue;e.removeEventListener(S,a[J],R),a[J]=null}if(E!=null)if(x)e[`__${S}`]=E,At([S]);else{let U=function(ae){a[T].call(this,ae)};var $=U;a[J]=Js(S,e,U,R)}else x&&(e[`__${S}`]=void 0)}else if(T==="style")vt(e,T,E);else if(T==="autofocus")Ws(e,!!E);else if(!l&&(T==="__value"||T==="value"&&E!=null))e.value=e.__value=E;else if(T==="selected"&&f)_i(e,E);else{var F=T;u||(F=Ks(F));var L=F==="defaultValue"||F==="defaultChecked";if(E==null&&!l&&!L)if(s[T]=null,F==="value"||F==="checked"){let R=e;const J=n===void 0;if(F==="value"){let S=R.defaultValue;R.removeAttribute(F),R.defaultValue=S,R.value=R.__value=J?S:null}else{let S=R.defaultChecked;R.removeAttribute(F),R.defaultChecked=S,R.checked=J?S:!1}}else e.removeAttribute(T);else L||_.includes(F)&&(l||typeof E!="string")?e[F]=E:typeof E!="function"&&vt(e,F,E)}}}for(let T of Object.getOwnPropertySymbols(t))T.description===bs&&li(e,()=>t[T]);return a}function Kr(e){return e.__attributes??(e.__attributes={[Ur]:e.nodeName.includes("-"),[Hr]:e.namespaceURI===ys})}var cr=new Map;function Gr(e){var n=cr.get(e.nodeName);if(n)return n;cr.set(e.nodeName,n=[]);for(var t,r=e,i=Element.prototype;i!==r;){t=pr(r);for(var s in t)t[s].set&&n.push(s);r=bt(r)}return n}function Zr(e=!1){const n=q,t=n.l.u;if(!t)return;let r=()=>mt(n.s);if(e){let i=0,s={};const l=mn(()=>{let u=!1;const a=n.s;for(const f in a)a[f]!==s[f]&&(s[f]=a[f],u=!0);return u&&i++,i});r=()=>O(l)}t.b.length&&Ts(()=>{ur(n,r),ut(t.b)}),rr(()=>{const i=jn(()=>t.m.map(Zo));return()=>{for(const s of i)typeof s=="function"&&s()}}),t.a.length&&rr(()=>{ur(n,r),ut(t.a)})}function ur(e,n){if(e.l.s)for(const t of e.l.s)O(t);n()}let Fn=!1;function pi(e){var n=Fn;try{return Fn=!1,[e(),Fn]}finally{Fn=n}}const gi={get(e,n){if(!e.exclude.includes(n))return O(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=Ve({get[n](){return e.props[n]}},n,wr)),e.special[n](t),nr(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),nr(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function Vn(e,n){return new Proxy({props:e,exclude:n,special:{},version:en(0)},gi)}const vi={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let i=e.props[r];ln(i)&&(i=i());const s=Be(i,n);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const i=Be(r,n);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,n){if(n===Ze||n===hr)return!1;for(let t of e.props)if(ln(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(ln(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function hi(...e){return new Proxy({props:e},vi)}function fr(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function Ve(e,n,t,r){var J;var i=(t&_s)!==0,s=!vn||(t&ms)!==0,l=(t&ps)!==0,u=(t&gs)!==0,a=!1,f;l?[f,a]=pi(()=>e[n]):f=e[n];var g=Ze in e||hr in e,_=l&&(((J=Be(e,n))==null?void 0:J.set)??(g&&n in e&&(S=>e[n]=S)))||void 0,c=r,v=!0,p=!1,x=()=>(p=!0,v&&(v=!1,u?c=jn(r):c=r),c);f===void 0&&r!==void 0&&(_&&s&&ss(),f=x(),_&&_(f));var F;if(s)F=()=>{var S=e[n];return S===void 0?x():(v=!0,p=!1,S)};else{var L=(i?mn:Mt)(()=>e[n]);L.f|=Xo,F=()=>{var S=O(L);return S!==void 0&&(c=void 0),S===void 0?c:S}}if((t&wr)===0)return F;if(_){var $=e.$$legacy;return function(S,U){return arguments.length>0?((!s||!U||$||a)&&_(U?F():S),S):F()}}var T=!1,E=Tt(f),R=mn(()=>{var S=F(),U=O(E);return T?(T=!1,U):E.v=S});return l&&O(R),i||(R.equals=Dt),function(S,U){if(arguments.length>0){const ae=U?O(R):s&&l?ze(S):S;if(!R.equals(ae)){if(T=!0,re(E,ae),p&&c!==void 0&&(c=ae),fr(R))return S;jn(()=>O(R))}return S}return fr(R)?R.v:O(R)}}function yi(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function bi(){const e=q;return e===null&&Er(),(n,t,r)=>{var s;const i=(s=e.s.$$events)==null?void 0:s[n];if(i){const l=Bn(i)?i.slice():[i],u=yi(n,t,r);for(const a of l)a.call(e.x,u);return!u.defaultPrevented}return!0}}function wi(e){q===null&&Er(),q.l===null&&os(),Ei(q).a.push(e)}function Ei(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Di="5";var mr;typeof window<"u"&&((mr=window.__svelte??(window.__svelte={})).v??(mr.v=new Set)).add(Di);const xi={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:"wrong",FiniteDifferences:96.27166074695943,ForwardDiff:2.1335105908157668,MooncakeFwd:22.73400206310248,MooncakeRvs:7.18461754287518,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:705.8963488989313},Ri={__category__:"Distributions",EnzymeFwd:3.739784946236559,EnzymeRvs:2.671190045866084,FiniteDifferences:41.58891352549889,ForwardDiff:2.1845803168965987,MooncakeFwd:5.420680932106502,MooncakeRvs:3.589118216507829,ReverseDiff:74.5459305092813,ReverseDiffCompiled:7.0294241843672145,Zygote:2808.6370423399467},Mi={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:"error",FiniteDifferences:61.43432856514928,ForwardDiff:1.1597012394867665,MooncakeFwd:399.0324535751379,MooncakeRvs:11.65731343021572,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Ti={__category__:"DynamicPPL demo models",EnzymeFwd:5.873265371983977,EnzymeRvs:3.941289733970232,FiniteDifferences:77.39642863257374,ForwardDiff:1.6915084570099534,MooncakeFwd:10.176275204692656,MooncakeRvs:5.357037498361086,ReverseDiff:141.13851864349587,ReverseDiffCompiled:13.677024592731831,Zygote:"error"},Fi={__category__:"DynamicPPL demo models",EnzymeFwd:4.1037159464948525,EnzymeRvs:4.335110951202859,FiniteDifferences:65.94149844855838,ForwardDiff:2.20095486582618,MooncakeFwd:9.006722379707691,MooncakeRvs:5.368119233727585,ReverseDiff:111.67841934934422,ReverseDiffCompiled:9.568780037631315,Zygote:7982.996671813346},Ni={__category__:"DynamicPPL demo models",EnzymeFwd:8.048859874841096,EnzymeRvs:10.74806800618238,FiniteDifferences:85.15518600817146,ForwardDiff:1.7303017837777197,MooncakeFwd:14.522964999713583,MooncakeRvs:4.9967021816336885,ReverseDiff:70.72322458115715,ReverseDiffCompiled:6.64271269433223,Zygote:"error"},Si={__category__:"DynamicPPL demo models",EnzymeFwd:9.860537190082644,EnzymeRvs:13.879795754205574,FiniteDifferences:83.3290628046233,ForwardDiff:1.486167821148154,MooncakeFwd:16.773990114198053,MooncakeRvs:7.750125052906999,ReverseDiff:101.34953926557557,ReverseDiffCompiled:5.571602899039272,Zygote:"error"},ki={__category__:"DynamicPPL demo models",EnzymeFwd:11.34109561058842,EnzymeRvs:14.465894465894465,FiniteDifferences:89.48686761184385,ForwardDiff:2.4463897499723744,MooncakeFwd:17.56143943233654,MooncakeRvs:7.202140562218103,ReverseDiff:109.70348806805306,ReverseDiffCompiled:6.408631791205517,Zygote:3473.1112289258826},Ai={__category__:"DynamicPPL demo models",EnzymeFwd:11.110043907793633,EnzymeRvs:14.008068343616518,FiniteDifferences:84.27922077922078,ForwardDiff:1.5239959656751707,MooncakeFwd:17.320209992003615,MooncakeRvs:6.725518966636999,ReverseDiff:107.77486811643705,ReverseDiffCompiled:6.1574951696985165,Zygote:2877.7684850532},Ci={__category__:"DynamicPPL demo models",EnzymeFwd:5.253360606003741,EnzymeRvs:3.952747223193395,FiniteDifferences:78.97736864999588,ForwardDiff:1.941533469994529,MooncakeFwd:10.566431209332316,MooncakeRvs:5.374987241309776,ReverseDiff:152.88119116892008,ReverseDiffCompiled:14.594934600839608,Zygote:9416.786032818869},Oi={__category__:"DynamicPPL demo models",EnzymeFwd:8.590271388414754,EnzymeRvs:11.00950774642797,FiniteDifferences:83.1114418800126,ForwardDiff:1.4890788696146813,MooncakeFwd:14.451942324003392,MooncakeRvs:5.58246447385455,ReverseDiff:95.2168284789644,ReverseDiffCompiled:6.93598987092463,Zygote:"error"},Ii={__category__:"DynamicPPL demo models",EnzymeFwd:11.13223539140022,EnzymeRvs:14.478528766661041,FiniteDifferences:83.28025584918363,ForwardDiff:1.1401869468471648,MooncakeFwd:15.620871348026652,MooncakeRvs:6.405505621546084,ReverseDiff:97.66168133106777,ReverseDiffCompiled:6.168566371505914,Zygote:"error"},Li={__category__:"Distributions",EnzymeFwd:5.899265835752092,EnzymeRvs:9.73856307150565,FiniteDifferences:26.087591500248735,ForwardDiff:1.2117463277051141,MooncakeFwd:4.572099372099372,MooncakeRvs:5.972681281618887,ReverseDiff:55.9325979976243,ReverseDiffCompiled:4.7754902656541995,Zygote:"error"},Pi={__category__:"DynamicPPL demo models",EnzymeFwd:8.266056357730148,EnzymeRvs:10.693965517241379,FiniteDifferences:83.36853580431969,ForwardDiff:1.8763538309703507,MooncakeFwd:14.347992275799397,MooncakeRvs:5.432020515199232,ReverseDiff:94.43740487735816,ReverseDiffCompiled:6.9247337850919655,Zygote:"error"},zi={__category__:"DynamicPPL demo models",EnzymeFwd:8.490658839885688,EnzymeRvs:9.950514485260463,FiniteDifferences:86.07161868739931,ForwardDiff:1.531614938051752,MooncakeFwd:14.49477434405026,MooncakeRvs:5.560425417649653,ReverseDiff:100.11375833190908,ReverseDiffCompiled:7.171360182536736,Zygote:"error"},ji={__category__:"DynamicPPL demo models",EnzymeFwd:9.734128118237864,EnzymeRvs:14.15995931513816,FiniteDifferences:79.25800160206178,ForwardDiff:1.4684146175791333,MooncakeFwd:15.901692333728212,MooncakeRvs:6.513337544337009,ReverseDiff:90.27522809906017,ReverseDiffCompiled:5.499264223792526,Zygote:"error"},Vi={__category__:"DynamicPPL demo models",EnzymeFwd:10.140722849535955,EnzymeRvs:15.37645702661468,FiniteDifferences:79.37444715706047,ForwardDiff:1.320635176210025,MooncakeFwd:15.69729515004875,MooncakeRvs:6.065823923414235,ReverseDiff:100.11495450441065,ReverseDiffCompiled:5.805033045246568,Zygote:"error"},Bi={__category__:"Core Turing syntax",EnzymeFwd:3.7843650381792573,EnzymeRvs:3.000660916392266,FiniteDifferences:119.57355085039917,ForwardDiff:1.4838891882721594,MooncakeFwd:16.848697171042513,MooncakeRvs:4.085012099473115,ReverseDiff:63.5420093081849,ReverseDiffCompiled:5.08337366404517,Zygote:"error"},qi={__category__:"Core Turing syntax",EnzymeFwd:10.09544306732325,EnzymeRvs:5.072800127408823,FiniteDifferences:116.18229221717225,ForwardDiff:3.868118980554116,MooncakeFwd:13.185575857498954,MooncakeRvs:13.580855845664209,ReverseDiff:402.94661845261544,ReverseDiffCompiled:34.31091782695613,Zygote:"error"},$i={__category__:"DynamicPPL arXiV paper",EnzymeFwd:8.634160415464512,EnzymeRvs:4.387602473752337,FiniteDifferences:19.098123025459948,ForwardDiff:.6547971417466439,MooncakeFwd:6.703723263797201,MooncakeRvs:30.053044569993723,ReverseDiff:855.988711734694,ReverseDiffCompiled:202.31518624641834,Zygote:"error"},Ui={__category__:"DynamicPPL arXiV paper",EnzymeFwd:6.997317272501155,EnzymeRvs:2.574787118633993,FiniteDifferences:182.89355165310891,ForwardDiff:5.96244616709733,MooncakeFwd:32.65770103872876,MooncakeRvs:6.705619522254683,ReverseDiff:91.85104052573932,ReverseDiffCompiled:7.397852461302468,Zygote:"error"},Hi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:55117.48245132986,EnzymeRvs:6.296337713167459,FiniteDifferences:134215.90046393927,ForwardDiff:16922.097046998475,MooncakeFwd:38144.45450727883,MooncakeRvs:23.47128519654307,ReverseDiff:11.048091709772123,ReverseDiffCompiled:4.736149283957761,Zygote:"error"},Ki={__category__:"DynamicPPL arXiV paper",EnzymeFwd:58.85828235576346,EnzymeRvs:"error",FiniteDifferences:"NaN",ForwardDiff:25.689211993206463,MooncakeFwd:4275.534444642635,MooncakeRvs:5.671611627106982,ReverseDiff:64.44726303531039,ReverseDiffCompiled:9.337637107115537,Zygote:"error"},Gi={__category__:"Distributions",EnzymeFwd:4.149460598159799,EnzymeRvs:20.291619342626053,FiniteDifferences:158.8118640548211,ForwardDiff:4.902396514161221,MooncakeFwd:22.48019431988042,MooncakeRvs:5.408565778517902,ReverseDiff:51.60858913388096,ReverseDiffCompiled:7.839689363472473,Zygote:"error"},Zi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:139.76025592296972,EnzymeRvs:"error",FiniteDifferences:6661.046721843846,ForwardDiff:76.70350019944156,MooncakeFwd:948.251809727984,MooncakeRvs:9.877384666254548,ReverseDiff:158.06465394842138,ReverseDiffCompiled:24.706195615323768,Zygote:"error"},Wi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:44.70506677463156,EnzymeRvs:3.6655505044518666,FiniteDifferences:1126.4263270814588,ForwardDiff:53.99113114929404,MooncakeFwd:168.56431644629427,MooncakeRvs:5.186615899170461,ReverseDiff:70.21273688531443,ReverseDiffCompiled:9.887208047693264,Zygote:168.43270460409806},Xi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:288.8790513926116,EnzymeRvs:.9806349344048328,FiniteDifferences:2976.506286255924,ForwardDiff:153.93983145709225,MooncakeFwd:445.41584035493037,MooncakeRvs:5.7006937067871295,ReverseDiff:150.65098739613055,ReverseDiffCompiled:23.503545326841277,Zygote:"error"},Ji={__category__:"DynamicPPL arXiV paper",EnzymeFwd:224.85156440141705,EnzymeRvs:4.209318743381575,FiniteDifferences:6529.970048282822,ForwardDiff:114.00462573591254,MooncakeFwd:1116.1531342714827,MooncakeRvs:4.169767002348875,ReverseDiff:107.71896303538932,ReverseDiffCompiled:11.466016286382327,Zygote:"error"},Yi={__category__:"Core Turing syntax",EnzymeFwd:3.5829132636547443,EnzymeRvs:2.9076328428401093,FiniteDifferences:59.44199138603452,ForwardDiff:1.4424334284355684,MooncakeFwd:7.60756720618188,MooncakeRvs:3.911576466322183,ReverseDiff:91.18794218205207,ReverseDiffCompiled:7.089660085487482,Zygote:5138.975906472382},Qi={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:18.282215534141425,FiniteDifferences:263.57785825142264,ForwardDiff:3.922988876823291,MooncakeFwd:45.81962454599822,MooncakeRvs:18.011272211610812,ReverseDiff:65.09242924867117,ReverseDiffCompiled:23.677509831135787,Zygote:"error"},ea={__category__:"Core Turing syntax",EnzymeFwd:5.361240310077519,EnzymeRvs:5.299818834387284,FiniteDifferences:71.20513526536793,ForwardDiff:1.2335764233496151,MooncakeFwd:12.05981308411215,MooncakeRvs:5.137108883981654,ReverseDiff:55.408418420504276,ReverseDiffCompiled:4.597370743717192,Zygote:"error"},na={__category__:"Base Julia features",EnzymeFwd:5.051642717398638,EnzymeRvs:"wrong",FiniteDifferences:13.255131867401845,ForwardDiff:.9795600747042955,MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ta={__category__:"Effect of model size",EnzymeFwd:10.41874968225186,EnzymeRvs:2.611126532500578,FiniteDifferences:180.03412512546,ForwardDiff:2.4430839907664583,MooncakeFwd:24.914181930863517,MooncakeRvs:4.008257866159501,ReverseDiff:57.13603344298245,ReverseDiffCompiled:5.180872063545716,Zygote:"error"},ra={__category__:"Effect of model size",EnzymeFwd:24.878444632290787,EnzymeRvs:4.314698385726423,FiniteDifferences:673.7621669993805,ForwardDiff:13.285032978183661,MooncakeFwd:133.177429899753,MooncakeRvs:3.9524631792788223,ReverseDiff:55.05308641975307,ReverseDiffCompiled:5.161866125760649,Zygote:"error"},oa={__category__:"Distributions",EnzymeFwd:"error",EnzymeRvs:4.5163204407864965,FiniteDifferences:44.205255075925606,ForwardDiff:1.0311681534814783,MooncakeFwd:15.192416255738822,MooncakeRvs:9.577779538790713,ReverseDiff:19.80129760639273,ReverseDiffCompiled:1.6559666610350847,Zygote:929.7365400843881},sa={__category__:"Effect of model size",EnzymeFwd:47.853035650553196,EnzymeRvs:4.587705844365515,FiniteDifferences:1264.092494419643,ForwardDiff:16.75810827225979,MooncakeFwd:278.6598062346268,MooncakeRvs:3.9587048143945536,ReverseDiff:54.54121791645697,ReverseDiffCompiled:5.0425815305134005,Zygote:"error"},ia={__category__:"Effect of model size",EnzymeFwd:240.69335089607063,EnzymeRvs:3.793827643897057,FiniteDifferences:6640.094639486599,ForwardDiff:83.08145372798802,MooncakeFwd:1230.769004114006,MooncakeRvs:3.773512005729579,ReverseDiff:51.484363732969,ReverseDiffCompiled:4.855819125277984,Zygote:"error"},aa={__category__:"Distributions",EnzymeFwd:2.9388422701679824,EnzymeRvs:2.7408213075014674,FiniteDifferences:32.689045694320754,ForwardDiff:1.8559925364731618,MooncakeFwd:4.624375318714941,MooncakeRvs:3.7669457976845453,ReverseDiff:70.73251908396946,ReverseDiffCompiled:6.271857830834972,Zygote:"error"},la={__category__:"Distributions",EnzymeFwd:2.029477845531052,EnzymeRvs:7.284860229806207,FiniteDifferences:20.182698018937142,ForwardDiff:1.2047570950883395,MooncakeFwd:4.366794129890058,MooncakeRvs:6.835247778984157,ReverseDiff:17.485962225625318,ReverseDiffCompiled:3.402032993403202,Zygote:"error"},ca={__category__:"Core Turing syntax",EnzymeFwd:9.263682290204883,EnzymeRvs:4.993608315761202,FiniteDifferences:114.07405465855877,ForwardDiff:3.1342084281913105,MooncakeFwd:12.946426735218509,MooncakeRvs:13.311972995835154,ReverseDiff:394.03108999088164,ReverseDiffCompiled:34.607473632744295,Zygote:"error"},ua={__category__:"Core Turing syntax",EnzymeFwd:14.207623807028922,EnzymeRvs:6.115766640027401,FiniteDifferences:168.15190410986088,ForwardDiff:4.1523731568519935,MooncakeFwd:16.439479741332065,MooncakeRvs:12.516360063531598,ReverseDiff:366.8982614112584,ReverseDiffCompiled:32.291033004368224,Zygote:25455.384023668637},fa={__category__:"Core Turing syntax",EnzymeFwd:3.6710296628555263,EnzymeRvs:4.4305678190586155,FiniteDifferences:77.46418652494428,ForwardDiff:1.790920839029392,MooncakeFwd:11.803386379373071,MooncakeRvs:4.983065184366801,ReverseDiff:67.91957150144533,ReverseDiffCompiled:5.794841653989765,Zygote:"error"},da={__category__:"Core Turing syntax",EnzymeFwd:12.16471906925068,EnzymeRvs:5.523098520797638,FiniteDifferences:153.04140673452264,ForwardDiff:3.7096194703988288,MooncakeFwd:15.260226307923757,MooncakeRvs:10.553375058346424,ReverseDiff:313.7202559560392,ReverseDiffCompiled:24.327346672766126,Zygote:34623.021275053456},_a={__category__:"Distributions",EnzymeFwd:"error",EnzymeRvs:"error",FiniteDifferences:28.048643503093764,ForwardDiff:"NaN",MooncakeFwd:4.905336211307615,MooncakeRvs:3.7249667223795746,ReverseDiff:"NaN",ReverseDiffCompiled:5.367630029797234,Zygote:3291.7595907928394},ma={__category__:"External libraries",EnzymeFwd:"wrong",EnzymeRvs:94.21629136906384,FiniteDifferences:61.89288668320926,ForwardDiff:5.640674823878383,MooncakeFwd:"error",MooncakeRvs:61.76845224987153,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},pa={__category__:"Distributions",EnzymeFwd:12.587501317081015,EnzymeRvs:4.13248233885165,FiniteDifferences:147.77507663037733,ForwardDiff:3.2902449268316074,MooncakeFwd:15.325191306221082,MooncakeRvs:11.305296606644742,ReverseDiff:205.96814324751907,ReverseDiffCompiled:14.158624980543436,Zygote:15952.36525386952},ga={__category__:"PosteriorDB",EnzymeFwd:6.692880203908242,EnzymeRvs:4.26497883149873,FiniteDifferences:164.66611330151486,ForwardDiff:4.065728505234254,MooncakeFwd:30.565796591831212,MooncakeRvs:4.856010178590823,ReverseDiff:114.03204511071378,ReverseDiffCompiled:9.63966879157428,Zygote:"error"},va={__category__:"PosteriorDB",EnzymeFwd:5.826249010088489,EnzymeRvs:4.004501375333709,FiniteDifferences:168.19796954314722,ForwardDiff:4.246384096881069,MooncakeFwd:29.36140919214416,MooncakeRvs:4.6258081084782905,ReverseDiff:96.99239183787954,ReverseDiffCompiled:9.630241245679573,Zygote:"error"},ha={__category__:"Core Turing syntax",EnzymeFwd:6.646161457049527,EnzymeRvs:3.56983752111965,FiniteDifferences:120.23061808404287,ForwardDiff:2.0259633825298695,MooncakeFwd:13.527726744993618,MooncakeRvs:6.8493194348725,ReverseDiff:127.99966051059207,ReverseDiffCompiled:11.138603123450668,Zygote:16394.5343521937},ya={__category__:"Distributions",EnzymeFwd:8.459137442069586,EnzymeRvs:9.467785062818212,FiniteDifferences:45.06019022215982,ForwardDiff:1.0414524566506573,MooncakeFwd:16.50456865327626,MooncakeRvs:10.61320754716981,ReverseDiff:18.70961254859901,ReverseDiffCompiled:4.840586743134443,Zygote:381.96052357113064},ba={__category__:"Core Turing syntax",EnzymeFwd:4.857965625923372,EnzymeRvs:3.6115823539431102,FiniteDifferences:72.652707087959,ForwardDiff:1.6621353724157464,MooncakeFwd:9.705324236574237,MooncakeRvs:5.282582979015224,ReverseDiff:135.04792201128785,ReverseDiffCompiled:11.878818608188617,Zygote:"error"},wa={__category__:"Base Julia features",EnzymeFwd:3.3651138095018243,EnzymeRvs:2.243287290067495,FiniteDifferences:80.58408433939807,ForwardDiff:2.4128644659049345,MooncakeFwd:10.620827827117788,MooncakeRvs:4.795519137018982,ReverseDiff:62.8335852225021,ReverseDiffCompiled:"wrong",Zygote:6029.374237519169},Ea={abstractgps:xi,assume_beta:Ri,delaydiffeq:Mi,demo_assume_dot_observe:Ti,demo_assume_dot_observe_literal:Fi,demo_assume_index_observe:Ni,demo_assume_matrix_observe_matrix_index:Si,demo_assume_multivariate_observe:ki,demo_assume_multivariate_observe_literal:Ai,demo_assume_observe_literal:Ci,demo_assume_submodel_observe_index_literal:Oi,demo_dot_assume_observe:Ii,assume_dirichlet:Li,demo_dot_assume_observe_index:Pi,demo_dot_assume_observe_index_literal:zi,demo_dot_assume_observe_matrix_index:ji,demo_dot_assume_observe_submodel:Vi,dot_assume:Bi,dot_observe:qi,dppl_gauss_unknown:$i,dppl_hier_poisson:Ui,dppl_high_dim_gauss:Hi,dppl_hmm_semisup:Ki,assume_lkjcholu:Gi,dppl_lda:Zi,dppl_logistic_regression:Wi,dppl_naive_bayes:Xi,dppl_sto_volatility:Ji,dynamic_constraint:Yi,lux_nn:Qi,multiple_constraints_same_var:ea,multithreaded:na,n010:ta,n050:ra,assume_mvnormal:oa,n100:sa,n500:ia,observe_bernoulli:aa,observe_categorical:la,observe_index:ca,observe_literal:ua,observe_multivariate:fa,observe_submodel:da,observe_von_mises:_a,ordinarydiffeq:ma,assume_normal:pa,pdb_eight_schools_centered:ga,pdb_eight_schools_noncentered:va,assume_submodel:ha,assume_wishart:ya,broadcast_macro:ba,control_flow:wa},Da=`#=
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

model = abstractgps(distance, n, y)`,xa=`@model function assume_beta()
    a ~ Beta(2, 2)
end

model = assume_beta()`,Ra=`#=
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

model = delaydiffeq(ddedata, prob_dde)`,Ma=`@model function demo_assume_dot_observe(x = [1.5, 2.0])
    # \`assume\` and \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    x .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe()`,Ta=`@model function demo_assume_dot_observe_literal()
    # \`assume\` and literal \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    [1.5, 2.0] .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe_literal()`,Fa=`using LinearAlgebra: Diagonal

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

model = demo_assume_index_observe()`,Na=`using FillArrays
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

model = demo_assume_matrix_observe_matrix_index()`,Sa=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe(x = [1.5, 2.0])
    # Multivariate \`assume\` and \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zero(x), Diagonal(s))
    x ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe()`,ka=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe_literal()
    # multivariate \`assume\` and literal \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zeros(2), Diagonal(s))
    [1.5, 2.0] ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe_literal()`,Aa=`@model function demo_assume_observe_literal()
    # univariate \`assume\` and literal \`observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    1.5 ~ Normal(m, sqrt(s))
    2.0 ~ Normal(m, sqrt(s))
end

model = demo_assume_observe_literal()`,Ca=`@model function _prior_dot_assume(::Type{TV} = Vector{Float64}) where {TV}
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

model = demo_assume_submodel_observe_index_literal()`,Oa=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe()`,Ia=`@model function assume_dirichlet()
    a ~ Dirichlet([1.0, 5.0])
end

model = assume_dirichlet()`,La=`@model function demo_dot_assume_observe_index(
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

model = demo_dot_assume_observe_index()`,Pa=`@model function demo_dot_assume_observe_index_literal(
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

model = demo_dot_assume_observe_index_literal()`,za=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe_submodel()`,Va=`@model function dot_assume(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 5)
    a .~ Normal()
end

model = dot_assume()`,Ba=`@model function dot_observe(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    x .~ Normal(a)
end

model = dot_observe()`,qa=`using FillArrays

n = 10_000
s = abs(rand()) + 0.5
y = randn() .+ s * randn(n)

@model function dppl_gauss_unknown(y)
    N = length(y)
    m ~ Normal(0, 1)
    s ~ truncated(Cauchy(0, 5); lower = 0)
    y ~ product_distribution(Fill(Normal(m, s), N))
end

model = dppl_gauss_unknown(y)`,$a=`using FillArrays
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

model = dppl_hier_poisson(y, x, idx, ns)`,Ua=`using FillArrays

@model function dppl_high_dim_gauss(D)
    m ~ product_distribution(Fill(Normal(0, 1), D))
end

model = dppl_high_dim_gauss(10_000)`,Ha=`using FillArrays
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

model = dppl_hmm_semisup(K, T, T_unsup, w, z, u, alpha, beta)`,Ka=`@model function assume_lkjcholu()
    a ~ LKJCholesky(5, 1.0, 'U')
end

model = assume_lkjcholu()`,Ga=`using FillArrays

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

model = dppl_lda(k, m, w, doc, alpha, beta)`,Za=`using Random: Xoshiro
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

model = dppl_logistic_regression(X', y)`,Wa=`using DelimitedFiles
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

model = dppl_naive_bayes(image_vec, labels, C, D)`,Xa=`using DelimitedFiles: readdlm

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

model = dppl_sto_volatility(y)`,Ja=`@model function dynamic_constraint()
    a ~ Normal()
    b ~ truncated(Normal(); lower = a)
end

model = dynamic_constraint()`,Ya=`#=
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

model = lux_nn(reduce(hcat, xs), ts)`,Qa=`@model function multiple_constraints_same_var(::Type{TV} = Vector{Float64}) where {TV}
    x = TV(undef, 5)
    x[1] ~ Normal()
    x[2] ~ InverseGamma(2, 3)
    x[3] ~ truncated(Normal(), -5, 20)
    x[4:5] ~ Dirichlet([1.0, 2.0])
end

model = multiple_constraints_same_var()`,el=`#=
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
model = setthreadsafe(multithreaded(x), true)`,nl=`@model function n010(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 10)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n010()`,tl=`@model function n050(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 50)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n050()`,rl=`@model function assume_mvnormal()
    a ~ MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0])
end

model = assume_mvnormal()`,ol=`@model function n100(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 100)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n100()`,sl=`@model function n500(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 500)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n500()`,il=`@model function observe_bernoulli(x = [true, false, true])
    a ~ Beta(2, 2)
    for i in eachindex(x)
        x[i] ~ Bernoulli(a)
    end
end

model = observe_bernoulli()`,al=`@model function observe_categorical(x = [1, 2, 1, 2, 2])
    a ~ Dirichlet(2, 3)
    for i in eachindex(x)
        x[i] ~ Categorical(a)
    end
end

model = observe_categorical()`,ll=`@model function observe_index(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end

model = observe_index()`,cl=`@model function observe_literal()
    a ~ Normal()
    1.5 ~ Normal(a)
end

model = observe_literal()`,ul=`@model function observe_multivariate(
    x = [1.5, 2.0, 2.5],
    ::Type{TV} = Vector{Float64},
) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    x ~ MvNormal(a, I)
end

model = observe_multivariate()`,fl=`@model function inner2(x, a)
    x ~ Normal(a)
end
@model function observe_submodel(x = 1.5)
    a ~ Normal()
    _ignore ~ to_submodel(inner2(x, a))
end

model = observe_submodel()`,dl=`@model function observe_von_mises(x)
    a ~ InverseGamma(2, 3)
    x ~ VonMises(0, a)
end

model = observe_von_mises(0.4)`,_l=`# See https://turinglang.org/docs/tutorials/bayesian-differential-equations/.

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

model = ordinarydiffeq(odedata, prob)`,ml=`@model function assume_normal()
    a ~ Normal()
end

model = assume_normal()`,pl=`J = 8
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

model = pdb_eight_schools_centered(J, y, sigma)`,gl=`J = 8
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

model = pdb_eight_schools_noncentered(J, y, sigma)`,vl=`@model function inner1()
    return a ~ Normal()
end
@model function assume_submodel()
    a ~ to_submodel(inner1())
    x ~ Normal(a)
end

model = assume_submodel()`,hl=`@model function assume_wishart()
    a ~ Wishart(7, [1.0 0.5; 0.5 1.0])
end

model = assume_wishart()`,yl=`@model function broadcast_macro(x = [1.5, 2.0], ::Type{TV} = Vector{Float64}) where {TV}
    a ~ Normal(0, 1)
    b ~ InverseGamma(2, 3)
    @. x ~ Normal(a, $(sqrt(b)))
end

model = broadcast_macro()`,bl=`#= 
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

model = control_flow()`,wl={abstractgps:Da,assume_beta:xa,delaydiffeq:Ra,demo_assume_dot_observe:Ma,demo_assume_dot_observe_literal:Ta,demo_assume_index_observe:Fa,demo_assume_matrix_observe_matrix_index:Na,demo_assume_multivariate_observe:Sa,demo_assume_multivariate_observe_literal:ka,demo_assume_observe_literal:Aa,demo_assume_submodel_observe_index_literal:Ca,demo_dot_assume_observe:Oa,assume_dirichlet:Ia,demo_dot_assume_observe_index:La,demo_dot_assume_observe_index_literal:Pa,demo_dot_assume_observe_matrix_index:za,demo_dot_assume_observe_submodel:ja,dot_assume:Va,dot_observe:Ba,dppl_gauss_unknown:qa,dppl_hier_poisson:$a,dppl_high_dim_gauss:Ua,dppl_hmm_semisup:Ha,assume_lkjcholu:Ka,dppl_lda:Ga,dppl_logistic_regression:Za,dppl_naive_bayes:Wa,dppl_sto_volatility:Xa,dynamic_constraint:Ja,lux_nn:Ya,multiple_constraints_same_var:Qa,multithreaded:el,n010:nl,n050:tl,assume_mvnormal:rl,n100:ol,n500:sl,observe_bernoulli:il,observe_categorical:al,observe_index:ll,observe_literal:cl,observe_multivariate:ul,observe_submodel:fl,observe_von_mises:dl,ordinarydiffeq:_l,assume_normal:ml,pdb_eight_schools_centered:pl,pdb_eight_schools_noncentered:gl,assume_submodel:vl,assume_wishart:hl,broadcast_macro:yl,control_flow:bl};us();const El="1.21.0",Dl="1.5.0",xl="0.5.24",Rl="5.14.0",Ml="0.13.6",Tl="0.4.5",Fl="0.1.43",Nl="4.4.0",Sl="0.8.3",kl="0.8.10",Al="0.7.2",Cl="0.6.2",Ol="1.1.3",Il="2.5.0",Ll="1.1.2",Pl="0.4.0",zl="7.22.0",jl="1.11.0",Vl="1.1.2",Bl="1.1.0",ql="0.4.8",$l="0.4.8",Ul="1.11.0",Hl="0.1.1",Kl="0.15.16",Gl="0.1.6",Zl="1.10.0",Wl="0.5.0",Xl="0.2.7",Jl="0.3.14",Yl="1.73.0",Ql="1.26.0",ec="1.3.1",nc="0.1.10",tc="0.1.13",rc="1.1.0",oc="0.2.6",sc="0.3.1",ic="1.0.0",ac="4.18.1",lc="1.1.1+0",cc="0.1.2",uc="0.2.3",fc="0.1.2",dc="1.6.0",_c="0.3.1",mc="4.1.1",pc="1.16.0",gc="0.19.3",vc="1.0.0",hc="1.11.0",yc="0.1.2",bc="5.68.0",wc="1.9.1",Ec="0.4.0",Dc="6.210.0",xc="4.12.0",Rc="5.27.0",Mc="1.1.0",Tc="1.15.1",Fc="0.7.16",Nc="0.4.28",Sc="0.10.12",kc="1.11.0",Ac="0.25.123",Cc="0.6.58",Oc="0.9.5",Ic="1.6.0",Lc="0.39.15",Pc="2.0.0",zc="1.0.6",jc="0.13.129",Vc="0.8.18",Bc="0.0.249+0",qc="1.30.0",$c="0.1.10",Uc="1.1.4",Hc="0.10.14",Kc="0.3.1",Gc="0.3.5",Zc="0.3.2",Wc="1.1.0",Xc="1.3.1",Jc="1.11.0",Yc="1.16.0",Qc="2.29.0",eu="0.12.33",nu="1.3.2",tu="0.1.2",ru="1.1.3",ou="0.1.3",su="0.5.2",iu="1.11.0",au="0.2.0",lu="1.8.2",cu="0.5.6",uu="1.13.4",fu="0.2.0",du="0.3.28",_u="0.4.15",mu="0.1.1",pu="0.1.5",gu="0.3.1",vu="0.1.3",hu="2025.2.0+0",yu="1.11.0",bu="0.16.2",wu="0.7.13",Eu="0.1.17",Du="1.3.1",xu="0.2.6",Ru="1.10.0",Mu="1.0.0",Tu="1.7.1",Fu="0.2.1",Nu="0.9.40",Su="0.6.11",ku="0.10.67",Au="0.10.5",Cu="9.4.6",Ou="0.0.38+0",Iu="1.4.0",Lu="0.1.17",Pu="1.11.0",zu="0.2.1",ju="0.6.4",Vu="8.6.0+0",Bu="1.11.0",qu="1.7.2+0",$u="1.11.0+1",Uu="0.13.1+0",Hu="1.11.0",Ku="0.9.13",Gu="0.1.6",Zu="7.6.0",Wu="1.11.0",Xu="3.59.1",Ju="2.2.0",Yu="1.13.1",Qu="0.3.29",ef="1.11.0",nf="1.2.0",tf="1.31.3",rf="1.5.3",of="1.15.4",sf="7.7.0",af="0.3.16",lf="2025.2.0+0",cf="1.17.4",uf="1.12.1",ff="0.5.16",df="0.1.8",_f="0.4.3",mf="1.11.0",pf="0.1.4",gf="2.28.6+0",vf="0.2.0",hf="1.2.0",yf="2.1.0",bf="1.11.0",wf="0.5.8",Ef="0.3.7",Df="2023.12.12",xf="0.2.4",Rf="8.0.0",Mf="0.9.33",Tf="1.1.3",Ff="0.10.5",Nf="1.0.0",Sf="1.2.0",kf="4.16.0",Af="2.14.0",Cf="2.0.0",Of="1.12.0",If="1.6.0",Lf="0.5.0",Pf="1.17.0",zf="0.3.27+1",jf="0.8.5+0",Vf="0.5.6+0",Bf="2.0.1",qf="0.4.7",$f="5.5.0",Uf="5.0.0",Hf="0.4.10",Kf="1.8.1",Gf="6.108.0",Zf="1.9.0",Wf="1.21.0",Xf="3.9.0",Jf="1.12.0",Yf="2.1.0",Qf="1.9.0",ed="1.13.0",nd="1.15.0",td="1.23.0",rd="1.8.0",od="1.9.0",sd="1.9.0",id="1.12.0",ad="1.10.0",ld="1.10.0",cd="1.12.0",ud="1.23.0",fd="1.9.0",dd="1.11.0",_d="1.8.0",md="1.8.0",pd="1.10.0",gd="1.25.0",vd="1.12.0",hd="1.11.0",yd="1.11.0",bd="1.8.0",wd="1.11.0",Ed="1.9.0",Dd="1.11.0",xd="0.11.37",Rd="2.8.3",Md="1.11.0",Td="0.4.7",Fd="0.7.19",Nd="0.2.2",Sd="0.2.4",kd="1.1.2",Ad="1.2.1",Cd="1.5.1",Od="3.2.3",Id="0.5.7",Ld="1.11.0",Pd="0.1.6",zd="1.11.0",jd="1.4.0",Vd="2.11.2",Bd="1.11.0",qd="1.11.0",$d="1.7.1",Ud="1.6.0",Hd="0.3.2",Kd="0.4.5",Gd="0.1.16",Zd="0.1.0",Wd="1.3.4",Xd="3.48.0",Jd="1.2.2",Yd="1.3.1",Qd="1.2.0",e1="1.16.2",n1="1.4.2",t1="0.9.0",r1="0.5.1+0",o1="2.2.12",s1="0.5.17",i1="0.7.0",a1="0.1.0",l1="0.6.1",c1="2.144.0",u1="0.1.12",f1="1.9.1",d1="1.15.1",_1="1.0.1",m1="7.96.0",p1="1.10.0",g1="3.1.0",v1="1.5.0",h1="1.3.0",y1="1.11.0",b1="1.1.2",w1="1.11.0",E1="2.11.0",D1="0.9.5",x1="1.11.0",R1="1.2.2",M1="1.11.0",T1="1.2.1",F1="0.1.2",N1="0.4.23",S1="2.7.1",k1="0.1.15",A1="1.3.1",C1="1.9.0",O1="1.9.17",I1="1.4.4",L1="3.5.0",P1="1.11.1",z1="1.8.0",j1="0.34.10",V1="1.5.2",B1="0.5.8",q1="0.4.2",$1="0.7.2",U1="0.3.1",H1="2.6.3",K1="1.11.0",G1=null,Z1="7.7.0+0",W1="0.3.46",X1="1.0.3",J1="1.0.1",Y1="1.12.1",Q1="1.10.0",e0="0.1.1",n0="0.1.7",t0="1.11.0",r0="0.5.5",o0="0.5.29",s0="0.2.38",i0="0.1.6",a0="0.4.85",l0="1.4.0",c0="0.42.8",u0="1.11.0",f0="1.11.0",d0="0.3.0",_0="1.3.1",m0="1.1.0",p0="1.2.13+1",g0="0.7.10",v0="0.2.7",h0="5.11.0+0",y0="1.59.0+0",b0="2022.0.0+1",w0="17.4.0+2",E0={ADTypes:El,AbstractFFTs:Dl,AbstractGPs:xl,AbstractMCMC:Rl,AbstractPPL:Ml,AbstractTrees:Tl,Accessors:Fl,Adapt:Nl,AdvancedHMC:Sl,AdvancedMH:kl,AdvancedPS:Al,AdvancedVI:Cl,AliasTables:Ol,ArgCheck:Il,ArgTools:Ll,ArnoldiMethod:Pl,ArrayInterface:zl,Artifacts:jl,Atomix:Vl,AxisAlgorithms:Bl,AxisArrays:ql,BangBang:$l,Base64:Ul,Baselet:Hl,Bijectors:Kl,BitTwiddlingConvenienceFunctions:Gl,BracketingNonlinearSolve:Zl,CEnum:Wl,CPUSummary:Xl,Cassette:Jl,ChainRules:Yl,ChainRulesCore:Ql,Chairmarks:ec,ChangesOfVariables:nc,CloseOpenIntervals:tc,Combinatorics:rc,CommonSolve:oc,CommonSubexpressions:sc,CommonWorldInvalidations:ic,Compat:ac,CompilerSupportLibraries_jll:lc,CompositionsBase:cc,ConcreteStructs:uc,ConsoleProgressMonitor:fc,ConstructionBase:dc,CpuId:_c,Crayons:mc,DataAPI:pc,DataStructures:gc,DataValueInterfaces:vc,Dates:hc,DefineSingletons:yc,DelayDiffEq:bc,DelimitedFiles:wc,DensityInterface:Ec,DiffEqBase:Dc,DiffEqCallbacks:xc,DiffEqNoiseProcess:Rc,DiffResults:Mc,DiffRules:Tc,DifferentiationInterface:Fc,DispatchDoctor:Nc,Distances:Sc,Distributed:kc,Distributions:Ac,DistributionsAD:Cc,DocStringExtensions:Oc,Downloads:Ic,DynamicPPL:Lc,EllipticalSliceSampling:Pc,EnumX:zc,Enzyme:jc,EnzymeCore:Vc,Enzyme_jll:Bc,ExponentialUtilities:qc,ExprTools:$c,ExpressionExplorer:Uc,ExproniconLite:Hc,FFTA:Kc,FastBroadcast:Gc,FastClosures:Zc,FastGaussQuadrature:Wc,FastPower:Xc,FileWatching:Jc,FillArrays:Yc,FiniteDiff:Qc,FiniteDifferences:eu,ForwardDiff:nu,FunctionProperties:tu,FunctionWrappers:ru,FunctionWrappersWrappers:ou,Functors:su,Future:iu,GPUArraysCore:au,GPUCompiler:lu,GenericSchur:cu,Graphs:uu,HashArrayMappedTries:fu,HypergeometricFunctions:du,IRTools:_u,IfElse:mu,Inflate:pu,InitialValues:gu,IntegerMathUtils:vu,IntelOpenMP_jll:hu,InteractiveUtils:yu,Interpolations:bu,IntervalSets:wu,InverseFunctions:Eu,InvertedIndices:Du,IrrationalConstants:xu,IterTools:Ru,IteratorInterfaceExtensions:Mu,JLLWrappers:Tu,JSON:"1.4.0",Jieko:Fu,KernelAbstractions:Nu,KernelDensity:Su,KernelFunctions:ku,Krylov:Au,LLVM:Cu,LLVMExtra_jll:Ou,LaTeXStrings:Iu,LayoutPointers:Lu,LazyArtifacts:Pu,LeftChildRightSiblingTrees:zu,LibCURL:ju,LibCURL_jll:Vu,LibGit2:Bu,LibGit2_jll:qu,LibSSH2_jll:$u,LibTracyClient_jll:Uu,Libdl:Hu,Libtask:Ku,LineSearch:Gu,LineSearches:Zu,LinearAlgebra:Wu,LinearSolve:Xu,LogDensityProblems:Ju,LogDensityProblemsAD:Yu,LogExpFunctions:Qu,Logging:ef,LoggingExtras:nf,Lux:tf,LuxCore:rf,LuxLib:of,MCMCChains:sf,MCMCDiagnosticTools:af,MKL_jll:lf,MLDataDevices:cf,MLJModelInterface:uf,MacroTools:ff,ManualMemory:df,MappedArrays:_f,Markdown:mf,MaybeInplace:pf,MbedTLS_jll:gf,MicroCollections:vf,Missings:hf,MistyClosures:yf,Mmap:bf,Mooncake:wf,Moshi:Ef,MozillaCACerts_jll:Df,MuladdMacro:xf,NLSolversBase:Rf,NNlib:Mf,NaNMath:Tf,NamedArrays:Ff,NaturalSort:Nf,NetworkOptions:Sf,NonlinearSolve:kf,NonlinearSolveBase:Af,NonlinearSolveFirstOrder:Cf,NonlinearSolveQuasiNewton:Of,NonlinearSolveSpectralMethods:If,ObjectFile:Lf,OffsetArrays:Pf,OpenBLAS_jll:zf,OpenLibm_jll:jf,OpenSpecFun_jll:Vf,Optim:Bf,Optimisers:qf,Optimization:$f,OptimizationBase:Uf,OptimizationOptimJL:Hf,OrderedCollections:Kf,OrdinaryDiffEq:Gf,OrdinaryDiffEqAdamsBashforthMoulton:Zf,OrdinaryDiffEqBDF:Wf,OrdinaryDiffEqCore:Xf,OrdinaryDiffEqDefault:Jf,OrdinaryDiffEqDifferentiation:Yf,OrdinaryDiffEqExplicitRK:Qf,OrdinaryDiffEqExponentialRK:ed,OrdinaryDiffEqExtrapolation:nd,OrdinaryDiffEqFIRK:td,OrdinaryDiffEqFeagin:rd,OrdinaryDiffEqFunctionMap:od,OrdinaryDiffEqHighOrderRK:sd,OrdinaryDiffEqIMEXMultistep:id,OrdinaryDiffEqLinear:ad,OrdinaryDiffEqLowOrderRK:ld,OrdinaryDiffEqLowStorageRK:cd,OrdinaryDiffEqNonlinearSolve:ud,OrdinaryDiffEqNordsieck:fd,OrdinaryDiffEqPDIRK:dd,OrdinaryDiffEqPRK:_d,OrdinaryDiffEqQPRK:md,OrdinaryDiffEqRKN:pd,OrdinaryDiffEqRosenbrock:gd,OrdinaryDiffEqSDIRK:vd,OrdinaryDiffEqSSPRK:hd,OrdinaryDiffEqStabilizedIRK:yd,OrdinaryDiffEqStabilizedRK:bd,OrdinaryDiffEqSymplecticRK:wd,OrdinaryDiffEqTsit5:Ed,OrdinaryDiffEqVerner:Dd,PDMats:xd,Parsers:Rd,Pkg:Md,PoissonRandom:Td,Polyester:Fd,PolyesterWeave:Nd,PositiveFactorizations:Sd,PreallocationTools:kd,PrecompileTools:Ad,Preferences:Cd,PrettyTables:Od,Primes:Id,Printf:Ld,ProgressLogging:Pd,ProgressMeter:zd,PtrArrays:jd,QuadGK:Vd,REPL:Bd,Random:qd,Random123:$d,RandomNumbers:Ud,RangeArrays:Hd,Ratios:Kd,ReactantCore:Gd,RealDot:Zd,RecipesBase:Wd,RecursiveArrayTools:Xd,Reexport:Jd,Requires:Yd,ResettableStacks:Qd,ReverseDiff:e1,Richardson:n1,Rmath:t1,Rmath_jll:r1,Roots:o1,RuntimeGeneratedFunctions:s1,SHA:i1,SIMDTypes:a1,SSMProblems:l1,SciMLBase:c1,SciMLJacobianOperators:u1,SciMLLogging:f1,SciMLOperators:d1,SciMLPublic:_1,SciMLSensitivity:m1,SciMLStructures:p1,ScientificTypesBase:g1,ScopedValues:v1,Scratch:h1,Serialization:y1,Setfield:b1,SharedArrays:w1,SimpleNonlinearSolve:E1,SimpleTraits:D1,Sockets:x1,SortingAlgorithms:R1,SparseArrays:M1,SparseConnectivityTracer:T1,SparseInverseSubset:F1,SparseMatrixColorings:N1,SpecialFunctions:S1,SplittablesBase:k1,Static:A1,StaticArrayInterface:C1,StaticArrays:O1,StaticArraysCore:I1,StatisticalTraits:L1,Statistics:P1,StatsAPI:z1,StatsBase:j1,StatsFuns:V1,StrideArraysCore:B1,StringManipulation:q1,StructArrays:$1,StructIO:U1,StructUtils:H1,StyledStrings:K1,SuiteSparse:G1,SuiteSparse_jll:Z1,SymbolicIndexingInterface:W1,TOML:X1,TableTraits:J1,Tables:Y1,Tar:Q1,TensorCore:e0,TerminalLoggers:n0,Test:t0,ThreadingUtilities:r0,TimerOutputs:o0,Tracker:s0,Tracy:i0,Transducers:a0,TruncatedStacktraces:l0,Turing:c0,UUIDs:u0,Unicode:f0,UnsafeAtomics:d0,WeightInitializers:_0,WoodburyMatrices:m0,Zlib_jll:p0,Zygote:g0,ZygoteRules:v0,libblastrampoline_jll:h0,nghttp2_jll:y0,oneTBB_jll:b0,p7zip_jll:w0};function ht(e){return[...e.entries()].sort(([n,t],[r,i])=>n.localeCompare(r))}var D0=pe('<tr><td class="svelte-1dtc2uh"> </td><td class="version svelte-1dtc2uh"> </td></tr>'),x0=pe('<table id="manifest" class="svelte-1dtc2uh"><thead><tr><th class="svelte-1dtc2uh">Package</th><th class="svelte-1dtc2uh">Version</th></tr></thead><tbody></tbody></table>');function R0(e,n){hn(n,!1);let t=new Map;for(const[s,l]of Object.entries(E0))t.set(s,l===""?null:l);Zr();var r=x0(),i=_e(H(r));_n(i,5,()=>ht(t),dn,(s,l)=>{let u=()=>O(l)[0],a=()=>O(l)[1];var f=D0(),g=H(f),_=H(g),c=_e(g),v=H(c);Re(()=>{qe(_,u()),qe(v,a()===null?"":`v${a()}`)}),W(s,f)}),W(e,r),yn()}function M0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ct,dr;function T0(){if(dr)return ct;dr=1;function e(o){return o instanceof Map?o.clear=o.delete=o.set=function(){throw new Error("map is read-only")}:o instanceof Set&&(o.add=o.clear=o.delete=function(){throw new Error("set is read-only")}),Object.freeze(o),Object.getOwnPropertyNames(o).forEach(d=>{const h=o[d],k=typeof h;(k==="object"||k==="function")&&!Object.isFrozen(h)&&e(h)}),o}class n{constructor(d){d.data===void 0&&(d.data={}),this.data=d.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(o,...d){const h=Object.create(null);for(const k in o)h[k]=o[k];return d.forEach(function(k){for(const K in k)h[K]=k[K]}),h}const i="</span>",s=o=>!!o.scope,l=(o,{prefix:d})=>{if(o.startsWith("language:"))return o.replace("language:","language-");if(o.includes(".")){const h=o.split(".");return[`${d}${h.shift()}`,...h.map((k,K)=>`${k}${"_".repeat(K+1)}`)].join(" ")}return`${d}${o}`};class u{constructor(d,h){this.buffer="",this.classPrefix=h.classPrefix,d.walk(this)}addText(d){this.buffer+=t(d)}openNode(d){if(!s(d))return;const h=l(d.scope,{prefix:this.classPrefix});this.span(h)}closeNode(d){s(d)&&(this.buffer+=i)}value(){return this.buffer}span(d){this.buffer+=`<span class="${d}">`}}const a=(o={})=>{const d={children:[]};return Object.assign(d,o),d};class f{constructor(){this.rootNode=a(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(d){this.top.children.push(d)}openNode(d){const h=a({scope:d});this.add(h),this.stack.push(h)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(d){return this.constructor._walk(d,this.rootNode)}static _walk(d,h){return typeof h=="string"?d.addText(h):h.children&&(d.openNode(h),h.children.forEach(k=>this._walk(d,k)),d.closeNode(h)),d}static _collapse(d){typeof d!="string"&&d.children&&(d.children.every(h=>typeof h=="string")?d.children=[d.children.join("")]:d.children.forEach(h=>{f._collapse(h)}))}}class g extends f{constructor(d){super(),this.options=d}addText(d){d!==""&&this.add(d)}startScope(d){this.openNode(d)}endScope(){this.closeNode()}__addSublanguage(d,h){const k=d.root;h&&(k.scope=`language:${h}`),this.add(k)}toHTML(){return new u(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(o){return o?typeof o=="string"?o:o.source:null}function c(o){return x("(?=",o,")")}function v(o){return x("(?:",o,")*")}function p(o){return x("(?:",o,")?")}function x(...o){return o.map(h=>_(h)).join("")}function F(o){const d=o[o.length-1];return typeof d=="object"&&d.constructor===Object?(o.splice(o.length-1,1),d):{}}function L(...o){return"("+(F(o).capture?"":"?:")+o.map(k=>_(k)).join("|")+")"}function $(o){return new RegExp(o.toString()+"|").exec("").length-1}function T(o,d){const h=o&&o.exec(d);return h&&h.index===0}const E=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function R(o,{joinWith:d}){let h=0;return o.map(k=>{h+=1;const K=h;let G=_(k),w="";for(;G.length>0;){const b=E.exec(G);if(!b){w+=G;break}w+=G.substring(0,b.index),G=G.substring(b.index+b[0].length),b[0][0]==="\\"&&b[1]?w+="\\"+String(Number(b[1])+K):(w+=b[0],b[0]==="("&&h++)}return w}).map(k=>`(${k})`).join(d)}const J=/\b\B/,S="[a-zA-Z]\\w*",U="[a-zA-Z_]\\w*",ae="\\b\\d+(\\.\\d+)?",Ae="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ne="\\b(0b[01]+)",ge="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Ce=(o={})=>{const d=/^#![ ]*\//;return o.binary&&(o.begin=x(d,/.*\b/,o.binary,/\b.*/)),r({scope:"meta",begin:d,end:/$/,relevance:0,"on:begin":(h,k)=>{h.index!==0&&k.ignoreMatch()}},o)},fe={begin:"\\\\[\\s\\S]",relevance:0},He={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[fe]},Xe={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[fe]},Oe={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},ye=function(o,d,h={}){const k=r({scope:"comment",begin:o,end:d,contains:[]},h);k.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const K=L("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return k.contains.push({begin:x(/[ ]+/,"(",K,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),k},Wr=ye("//","$"),Xr=ye("/\\*","\\*/"),Jr=ye("#","$"),Yr={scope:"number",begin:ae,relevance:0},Qr={scope:"number",begin:Ae,relevance:0},eo={scope:"number",begin:ne,relevance:0},no={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[fe,{begin:/\[/,end:/\]/,relevance:0,contains:[fe]}]},to={scope:"title",begin:S,relevance:0},ro={scope:"title",begin:U,relevance:0},oo={begin:"\\.\\s*"+U,relevance:0};var wn=Object.freeze({__proto__:null,APOS_STRING_MODE:He,BACKSLASH_ESCAPE:fe,BINARY_NUMBER_MODE:eo,BINARY_NUMBER_RE:ne,COMMENT:ye,C_BLOCK_COMMENT_MODE:Xr,C_LINE_COMMENT_MODE:Wr,C_NUMBER_MODE:Qr,C_NUMBER_RE:Ae,END_SAME_AS_BEGIN:function(o){return Object.assign(o,{"on:begin":(d,h)=>{h.data._beginMatch=d[1]},"on:end":(d,h)=>{h.data._beginMatch!==d[1]&&h.ignoreMatch()}})},HASH_COMMENT_MODE:Jr,IDENT_RE:S,MATCH_NOTHING_RE:J,METHOD_GUARD:oo,NUMBER_MODE:Yr,NUMBER_RE:ae,PHRASAL_WORDS_MODE:Oe,QUOTE_STRING_MODE:Xe,REGEXP_MODE:no,RE_STARTERS_RE:ge,SHEBANG:Ce,TITLE_MODE:to,UNDERSCORE_IDENT_RE:U,UNDERSCORE_TITLE_MODE:ro});function so(o,d){o.input[o.index-1]==="."&&d.ignoreMatch()}function io(o,d){o.className!==void 0&&(o.scope=o.className,delete o.className)}function ao(o,d){d&&o.beginKeywords&&(o.begin="\\b("+o.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",o.__beforeBegin=so,o.keywords=o.keywords||o.beginKeywords,delete o.beginKeywords,o.relevance===void 0&&(o.relevance=0))}function lo(o,d){Array.isArray(o.illegal)&&(o.illegal=L(...o.illegal))}function co(o,d){if(o.match){if(o.begin||o.end)throw new Error("begin & end are not supported with match");o.begin=o.match,delete o.match}}function uo(o,d){o.relevance===void 0&&(o.relevance=1)}const fo=(o,d)=>{if(!o.beforeMatch)return;if(o.starts)throw new Error("beforeMatch cannot be used with starts");const h=Object.assign({},o);Object.keys(o).forEach(k=>{delete o[k]}),o.keywords=h.keywords,o.begin=x(h.beforeMatch,c(h.begin)),o.starts={relevance:0,contains:[Object.assign(h,{endsParent:!0})]},o.relevance=0,delete h.beforeMatch},_o=["of","and","for","in","not","or","if","then","parent","list","value"],mo="keyword";function Lt(o,d,h=mo){const k=Object.create(null);return typeof o=="string"?K(h,o.split(" ")):Array.isArray(o)?K(h,o):Object.keys(o).forEach(function(G){Object.assign(k,Lt(o[G],d,G))}),k;function K(G,w){d&&(w=w.map(b=>b.toLowerCase())),w.forEach(function(b){const N=b.split("|");k[N[0]]=[G,po(N[0],N[1])]})}}function po(o,d){return d?Number(d):go(o)?0:1}function go(o){return _o.includes(o.toLowerCase())}const Pt={},Ke=o=>{console.error(o)},zt=(o,...d)=>{console.log(`WARN: ${o}`,...d)},Je=(o,d)=>{Pt[`${o}/${d}`]||(console.log(`Deprecated as of ${o}. ${d}`),Pt[`${o}/${d}`]=!0)},En=new Error;function jt(o,d,{key:h}){let k=0;const K=o[h],G={},w={};for(let b=1;b<=d.length;b++)w[b+k]=K[b],G[b+k]=!0,k+=$(d[b-1]);o[h]=w,o[h]._emit=G,o[h]._multi=!0}function vo(o){if(Array.isArray(o.begin)){if(o.skip||o.excludeBegin||o.returnBegin)throw Ke("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),En;if(typeof o.beginScope!="object"||o.beginScope===null)throw Ke("beginScope must be object"),En;jt(o,o.begin,{key:"beginScope"}),o.begin=R(o.begin,{joinWith:""})}}function ho(o){if(Array.isArray(o.end)){if(o.skip||o.excludeEnd||o.returnEnd)throw Ke("skip, excludeEnd, returnEnd not compatible with endScope: {}"),En;if(typeof o.endScope!="object"||o.endScope===null)throw Ke("endScope must be object"),En;jt(o,o.end,{key:"endScope"}),o.end=R(o.end,{joinWith:""})}}function yo(o){o.scope&&typeof o.scope=="object"&&o.scope!==null&&(o.beginScope=o.scope,delete o.scope)}function bo(o){yo(o),typeof o.beginScope=="string"&&(o.beginScope={_wrap:o.beginScope}),typeof o.endScope=="string"&&(o.endScope={_wrap:o.endScope}),vo(o),ho(o)}function wo(o){function d(w,b){return new RegExp(_(w),"m"+(o.case_insensitive?"i":"")+(o.unicodeRegex?"u":"")+(b?"g":""))}class h{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(b,N){N.position=this.position++,this.matchIndexes[this.matchAt]=N,this.regexes.push([N,b]),this.matchAt+=$(b)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const b=this.regexes.map(N=>N[1]);this.matcherRe=d(R(b,{joinWith:"|"}),!0),this.lastIndex=0}exec(b){this.matcherRe.lastIndex=this.lastIndex;const N=this.matcherRe.exec(b);if(!N)return null;const Y=N.findIndex((an,et)=>et>0&&an!==void 0),Z=this.matchIndexes[Y];return N.splice(0,Y),Object.assign(N,Z)}}class k{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(b){if(this.multiRegexes[b])return this.multiRegexes[b];const N=new h;return this.rules.slice(b).forEach(([Y,Z])=>N.addRule(Y,Z)),N.compile(),this.multiRegexes[b]=N,N}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(b,N){this.rules.push([b,N]),N.type==="begin"&&this.count++}exec(b){const N=this.getMatcher(this.regexIndex);N.lastIndex=this.lastIndex;let Y=N.exec(b);if(this.resumingScanAtSamePosition()&&!(Y&&Y.index===this.lastIndex)){const Z=this.getMatcher(0);Z.lastIndex=this.lastIndex+1,Y=Z.exec(b)}return Y&&(this.regexIndex+=Y.position+1,this.regexIndex===this.count&&this.considerAll()),Y}}function K(w){const b=new k;return w.contains.forEach(N=>b.addRule(N.begin,{rule:N,type:"begin"})),w.terminatorEnd&&b.addRule(w.terminatorEnd,{type:"end"}),w.illegal&&b.addRule(w.illegal,{type:"illegal"}),b}function G(w,b){const N=w;if(w.isCompiled)return N;[io,co,bo,fo].forEach(Z=>Z(w,b)),o.compilerExtensions.forEach(Z=>Z(w,b)),w.__beforeBegin=null,[ao,lo,uo].forEach(Z=>Z(w,b)),w.isCompiled=!0;let Y=null;return typeof w.keywords=="object"&&w.keywords.$pattern&&(w.keywords=Object.assign({},w.keywords),Y=w.keywords.$pattern,delete w.keywords.$pattern),Y=Y||/\w+/,w.keywords&&(w.keywords=Lt(w.keywords,o.case_insensitive)),N.keywordPatternRe=d(Y,!0),b&&(w.begin||(w.begin=/\B|\b/),N.beginRe=d(N.begin),!w.end&&!w.endsWithParent&&(w.end=/\B|\b/),w.end&&(N.endRe=d(N.end)),N.terminatorEnd=_(N.end)||"",w.endsWithParent&&b.terminatorEnd&&(N.terminatorEnd+=(w.end?"|":"")+b.terminatorEnd)),w.illegal&&(N.illegalRe=d(w.illegal)),w.contains||(w.contains=[]),w.contains=[].concat(...w.contains.map(function(Z){return Eo(Z==="self"?w:Z)})),w.contains.forEach(function(Z){G(Z,N)}),w.starts&&G(w.starts,b),N.matcher=K(N),N}if(o.compilerExtensions||(o.compilerExtensions=[]),o.contains&&o.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return o.classNameAliases=r(o.classNameAliases||{}),G(o)}function Vt(o){return o?o.endsWithParent||Vt(o.starts):!1}function Eo(o){return o.variants&&!o.cachedVariants&&(o.cachedVariants=o.variants.map(function(d){return r(o,{variants:null},d)})),o.cachedVariants?o.cachedVariants:Vt(o)?r(o,{starts:o.starts?r(o.starts):null}):Object.isFrozen(o)?r(o):o}var Do="11.11.1";class xo extends Error{constructor(d,h){super(d),this.name="HTMLInjectionError",this.html=h}}const Qn=t,Bt=r,qt=Symbol("nomatch"),Ro=7,$t=function(o){const d=Object.create(null),h=Object.create(null),k=[];let K=!0;const G="Could not find the language '{}', did you forget to load/include a language module?",w={disableAutodetect:!0,name:"Plain text",contains:[]};let b={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:g};function N(m){return b.noHighlightRe.test(m)}function Y(m){let M=m.className+" ";M+=m.parentNode?m.parentNode.className:"";const I=b.languageDetectRe.exec(M);if(I){const V=Ie(I[1]);return V||(zt(G.replace("{}",I[1])),zt("Falling back to no-highlight mode for this block.",m)),V?I[1]:"no-highlight"}return M.split(/\s+/).find(V=>N(V)||Ie(V))}function Z(m,M,I){let V="",X="";typeof M=="object"?(V=m,I=M.ignoreIllegals,X=M.language):(Je("10.7.0","highlight(lang, code, ...args) has been deprecated."),Je("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),X=m,V=M),I===void 0&&(I=!0);const ve={code:V,language:X};xn("before:highlight",ve);const Le=ve.result?ve.result:an(ve.language,ve.code,I);return Le.code=ve.code,xn("after:highlight",Le),Le}function an(m,M,I,V){const X=Object.create(null);function ve(y,D){return y.keywords[D]}function Le(){if(!A.keywords){Q.addText(B);return}let y=0;A.keywordPatternRe.lastIndex=0;let D=A.keywordPatternRe.exec(B),C="";for(;D;){C+=B.substring(y,D.index);const P=we.case_insensitive?D[0].toLowerCase():D[0],ee=ve(A,P);if(ee){const[Fe,qo]=ee;if(Q.addText(C),C="",X[P]=(X[P]||0)+1,X[P]<=Ro&&(Tn+=qo),Fe.startsWith("_"))C+=D[0];else{const $o=we.classNameAliases[Fe]||Fe;be(D[0],$o)}}else C+=D[0];y=A.keywordPatternRe.lastIndex,D=A.keywordPatternRe.exec(B)}C+=B.substring(y),Q.addText(C)}function Rn(){if(B==="")return;let y=null;if(typeof A.subLanguage=="string"){if(!d[A.subLanguage]){Q.addText(B);return}y=an(A.subLanguage,B,!0,Jt[A.subLanguage]),Jt[A.subLanguage]=y._top}else y=nt(B,A.subLanguage.length?A.subLanguage:null);A.relevance>0&&(Tn+=y.relevance),Q.__addSublanguage(y._emitter,y.language)}function le(){A.subLanguage!=null?Rn():Le(),B=""}function be(y,D){y!==""&&(Q.startScope(D),Q.addText(y),Q.endScope())}function Gt(y,D){let C=1;const P=D.length-1;for(;C<=P;){if(!y._emit[C]){C++;continue}const ee=we.classNameAliases[y[C]]||y[C],Fe=D[C];ee?be(Fe,ee):(B=Fe,Le(),B=""),C++}}function Zt(y,D){return y.scope&&typeof y.scope=="string"&&Q.openNode(we.classNameAliases[y.scope]||y.scope),y.beginScope&&(y.beginScope._wrap?(be(B,we.classNameAliases[y.beginScope._wrap]||y.beginScope._wrap),B=""):y.beginScope._multi&&(Gt(y.beginScope,D),B="")),A=Object.create(y,{parent:{value:A}}),A}function Wt(y,D,C){let P=T(y.endRe,C);if(P){if(y["on:end"]){const ee=new n(y);y["on:end"](D,ee),ee.isMatchIgnored&&(P=!1)}if(P){for(;y.endsParent&&y.parent;)y=y.parent;return y}}if(y.endsWithParent)return Wt(y.parent,D,C)}function Po(y){return A.matcher.regexIndex===0?(B+=y[0],1):(st=!0,0)}function zo(y){const D=y[0],C=y.rule,P=new n(C),ee=[C.__beforeBegin,C["on:begin"]];for(const Fe of ee)if(Fe&&(Fe(y,P),P.isMatchIgnored))return Po(D);return C.skip?B+=D:(C.excludeBegin&&(B+=D),le(),!C.returnBegin&&!C.excludeBegin&&(B=D)),Zt(C,y),C.returnBegin?0:D.length}function jo(y){const D=y[0],C=M.substring(y.index),P=Wt(A,y,C);if(!P)return qt;const ee=A;A.endScope&&A.endScope._wrap?(le(),be(D,A.endScope._wrap)):A.endScope&&A.endScope._multi?(le(),Gt(A.endScope,y)):ee.skip?B+=D:(ee.returnEnd||ee.excludeEnd||(B+=D),le(),ee.excludeEnd&&(B=D));do A.scope&&Q.closeNode(),!A.skip&&!A.subLanguage&&(Tn+=A.relevance),A=A.parent;while(A!==P.parent);return P.starts&&Zt(P.starts,y),ee.returnEnd?0:D.length}function Vo(){const y=[];for(let D=A;D!==we;D=D.parent)D.scope&&y.unshift(D.scope);y.forEach(D=>Q.openNode(D))}let Mn={};function Xt(y,D){const C=D&&D[0];if(B+=y,C==null)return le(),0;if(Mn.type==="begin"&&D.type==="end"&&Mn.index===D.index&&C===""){if(B+=M.slice(D.index,D.index+1),!K){const P=new Error(`0 width match regex (${m})`);throw P.languageName=m,P.badRule=Mn.rule,P}return 1}if(Mn=D,D.type==="begin")return zo(D);if(D.type==="illegal"&&!I){const P=new Error('Illegal lexeme "'+C+'" for mode "'+(A.scope||"<unnamed>")+'"');throw P.mode=A,P}else if(D.type==="end"){const P=jo(D);if(P!==qt)return P}if(D.type==="illegal"&&C==="")return B+=`
`,1;if(ot>1e5&&ot>D.index*3)throw new Error("potential infinite loop, way more iterations than matches");return B+=C,C.length}const we=Ie(m);if(!we)throw Ke(G.replace("{}",m)),new Error('Unknown language: "'+m+'"');const Bo=wo(we);let rt="",A=V||Bo;const Jt={},Q=new b.__emitter(b);Vo();let B="",Tn=0,Ge=0,ot=0,st=!1;try{if(we.__emitTokens)we.__emitTokens(M,Q);else{for(A.matcher.considerAll();;){ot++,st?st=!1:A.matcher.considerAll(),A.matcher.lastIndex=Ge;const y=A.matcher.exec(M);if(!y)break;const D=M.substring(Ge,y.index),C=Xt(D,y);Ge=y.index+C}Xt(M.substring(Ge))}return Q.finalize(),rt=Q.toHTML(),{language:m,value:rt,relevance:Tn,illegal:!1,_emitter:Q,_top:A}}catch(y){if(y.message&&y.message.includes("Illegal"))return{language:m,value:Qn(M),illegal:!0,relevance:0,_illegalBy:{message:y.message,index:Ge,context:M.slice(Ge-100,Ge+100),mode:y.mode,resultSoFar:rt},_emitter:Q};if(K)return{language:m,value:Qn(M),illegal:!1,relevance:0,errorRaised:y,_emitter:Q,_top:A};throw y}}function et(m){const M={value:Qn(m),illegal:!1,relevance:0,_top:w,_emitter:new b.__emitter(b)};return M._emitter.addText(m),M}function nt(m,M){M=M||b.languages||Object.keys(d);const I=et(m),V=M.filter(Ie).filter(Kt).map(le=>an(le,m,!1));V.unshift(I);const X=V.sort((le,be)=>{if(le.relevance!==be.relevance)return be.relevance-le.relevance;if(le.language&&be.language){if(Ie(le.language).supersetOf===be.language)return 1;if(Ie(be.language).supersetOf===le.language)return-1}return 0}),[ve,Le]=X,Rn=ve;return Rn.secondBest=Le,Rn}function Mo(m,M,I){const V=M&&h[M]||I;m.classList.add("hljs"),m.classList.add(`language-${V}`)}function tt(m){let M=null;const I=Y(m);if(N(I))return;if(xn("before:highlightElement",{el:m,language:I}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(b.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),b.throwUnescapedHTML))throw new xo("One of your code blocks includes unescaped HTML.",m.innerHTML);M=m;const V=M.textContent,X=I?Z(V,{language:I,ignoreIllegals:!0}):nt(V);m.innerHTML=X.value,m.dataset.highlighted="yes",Mo(m,I,X.language),m.result={language:X.language,re:X.relevance,relevance:X.relevance},X.secondBest&&(m.secondBest={language:X.secondBest.language,relevance:X.secondBest.relevance}),xn("after:highlightElement",{el:m,result:X,text:V})}function To(m){b=Bt(b,m)}const Fo=()=>{Dn(),Je("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function No(){Dn(),Je("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Ut=!1;function Dn(){function m(){Dn()}if(document.readyState==="loading"){Ut||window.addEventListener("DOMContentLoaded",m,!1),Ut=!0;return}document.querySelectorAll(b.cssSelector).forEach(tt)}function So(m,M){let I=null;try{I=M(o)}catch(V){if(Ke("Language definition for '{}' could not be registered.".replace("{}",m)),K)Ke(V);else throw V;I=w}I.name||(I.name=m),d[m]=I,I.rawDefinition=M.bind(null,o),I.aliases&&Ht(I.aliases,{languageName:m})}function ko(m){delete d[m];for(const M of Object.keys(h))h[M]===m&&delete h[M]}function Ao(){return Object.keys(d)}function Ie(m){return m=(m||"").toLowerCase(),d[m]||d[h[m]]}function Ht(m,{languageName:M}){typeof m=="string"&&(m=[m]),m.forEach(I=>{h[I.toLowerCase()]=M})}function Kt(m){const M=Ie(m);return M&&!M.disableAutodetect}function Co(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=M=>{m["before:highlightBlock"](Object.assign({block:M.el},M))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=M=>{m["after:highlightBlock"](Object.assign({block:M.el},M))})}function Oo(m){Co(m),k.push(m)}function Io(m){const M=k.indexOf(m);M!==-1&&k.splice(M,1)}function xn(m,M){const I=m;k.forEach(function(V){V[I]&&V[I](M)})}function Lo(m){return Je("10.7.0","highlightBlock will be removed entirely in v12.0"),Je("10.7.0","Please use highlightElement now."),tt(m)}Object.assign(o,{highlight:Z,highlightAuto:nt,highlightAll:Dn,highlightElement:tt,highlightBlock:Lo,configure:To,initHighlighting:Fo,initHighlightingOnLoad:No,registerLanguage:So,unregisterLanguage:ko,listLanguages:Ao,getLanguage:Ie,registerAliases:Ht,autoDetection:Kt,inherit:Bt,addPlugin:Oo,removePlugin:Io}),o.debugMode=function(){K=!1},o.safeMode=function(){K=!0},o.versionString=Do,o.regex={concat:x,lookahead:c,either:L,optional:p,anyNumberOfTimes:v};for(const m in wn)typeof wn[m]=="object"&&e(wn[m]);return Object.assign(o,wn),o},Ye=$t({});return Ye.newInstance=()=>$t({}),ct=Ye,Ye.HighlightJS=Ye,Ye.default=Ye,ct}var F0=T0();const _r=M0(F0);var N0=pe("<pre><code><!></code></pre>");function S0(e,n){const t=Vn(n,["children","$$slots","$$events","$$legacy"]),r=Vn(t,["code","highlighted","languageName","langtag"]);let i=Ve(n,"code",8),s=Ve(n,"highlighted",8),l=Ve(n,"languageName",8,"plaintext"),u=Ve(n,"langtag",8,!1);var a=N0();let f;var g=H(a);It(g,1,"",null,{},{hljs:!0});var _=H(g);{var c=p=>{var x=Ot(),F=Gn(x);ii(F,s),W(p,x)},v=p=>{var x=Ys();Re(()=>qe(x,i())),W(p,x)};gn(_,p=>{s()?p(c):p(v,!1)})}Re(p=>f=mi(a,f,{"data-language":l(),...r,[fn]:p},"svelte-1w9vok"),[()=>({langtag:u()})],Mt),W(e,a)}function k0(e,n){const t=Vn(n,["children","$$slots","$$events","$$legacy"]),r=Vn(t,["language","code","langtag"]);hn(n,!1);let i=Ve(n,"language",8),s=Ve(n,"code",8),l=Ve(n,"langtag",8,!1);const u=bi();let a=Tt("");wi(()=>{O(a)&&u("highlight",{highlighted:O(a)})}),Ns(()=>(mt(i()),mt(s())),()=>{_r.registerLanguage(i().name,i().register),re(a,_r.highlight(s(),{language:i().name}).value)}),Ss(),Zr();var f=Ot(),g=Gn(f);ai(g,n,"default",{get highlighted(){return O(a)}},_=>{S0(_,hi(()=>r,{get languageName(){return i().name},get langtag(){return l()},get highlighted(){return O(a)},get code(){return s()}}))}),W(e,f),yn()}function A0(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",s={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},l={keywords:s,illegal:/<\//},u={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},a={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},f={className:"subst",begin:/\$\(/,end:/\)/,keywords:s},g={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,f,g],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},c={className:"string",contains:[e.BACKSLASH_ESCAPE,f,g],begin:"`",end:"`"},v={className:"meta",begin:"@"+n},p={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return l.name="Julia",l.contains=[u,a,_,c,v,p,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],f.contains=l.contains,l}const C0={name:"julia",register:A0};function O0(e,n,t){navigator.clipboard.writeText(n.definition),re(t,!0),setTimeout(()=>{re(t,!1)},2e3)}var I0=Yn('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'),L0=Yn('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'),P0=pe('<td class="svelte-1u8rajr"> <div class="model-definition svelte-1u8rajr"><div class="code-wrapper svelte-1u8rajr"><!></div> <button class="copy-btn svelte-1u8rajr" aria-label="Copy to clipboard" title="Copy code"><!></button></div></td>');function z0(e,n){let t=Ee(!1);var r=P0(),i=H(r),s=_e(i),l=H(s),u=H(l);k0(u,{language:C0,get code(){return n.definition}});var a=_e(l,2);a.__click=[O0,n,t];var f=H(a);{var g=c=>{var v=I0();W(c,v)},_=c=>{var v=L0();W(c,v)};gn(f,c=>{O(t)?c(g):c(_,!1)})}Re(()=>{qe(i,`${n.name??""} `),a.disabled=O(t)}),W(e,r)}At(["click"]);var j0=pe('<th class="svelte-12yri61"> </th>'),V0=pe('<td class="svelte-12yri61"> </td>'),B0=pe('<a class="issue svelte-12yri61" target="_blank">(?)</a>'),q0=pe('<td class="svelte-12yri61"><!> <span> </span></td>'),$0=pe('<tr class="svelte-12yri61"><!><!></tr>'),U0=pe('<table id="results" class="svelte-12yri61"><thead><tr class="svelte-12yri61"><th class="svelte-12yri61">Model name \\\\ AD type</th><!></tr></thead><tbody></tbody></table>');function H0(e,n){hn(n,!0);const t=[...n.data.keys()],r=n.data.get(t[0]).keys(),i="https://github.com/EnzymeAD/Enzyme.jl/issues/1995",l={assume_mvnormal__EnzymeForward:i,assume_wishart__EnzymeForward:i,multithreaded__Mooncake:"https://github.com/chalk-lab/Mooncake.jl/issues/570"};var u=U0(),a=H(u),f=H(a),g=_e(H(f));_n(g,17,()=>r,dn,(c,v)=>{var p=j0(),x=H(p);Re(()=>qe(x,O(v))),W(c,p)});var _=_e(a);_n(_,21,()=>ht(n.data),dn,(c,v)=>{let p=()=>O(v)[0],x=()=>O(v)[1];var F=$0(),L=H(F);z0(L,{get name(){return p()},get definition(){return n.modelDefinitions[p()]}});var $=_e(L);_n($,17,()=>ht(x()),dn,(T,E)=>{let R=()=>O(E)[0],J=()=>O(E)[1];var S=Ot(),U=Gn(S);{var ae=ne=>{var ge=V0(),Ce=H(ge);Re(fe=>qe(Ce,fe),[()=>J().toFixed(3)]),W(ne,ge)},Ae=ne=>{var ge=q0(),Ce=H(ge);{var fe=Oe=>{var ye=B0();Re(()=>vt(ye,"href",l[`${p()}__${R()}`])),W(Oe,ye)};gn(Ce,Oe=>{l[`${p()}__${R()}`]&&Oe(fe)})}var He=_e(Ce,2),Xe=H(He);Re(()=>{It(He,1,$r(J()),"svelte-12yri61"),qe(Xe,J())}),W(ne,ge)};gn(U,ne=>{typeof J()=="number"?ne(ae):ne(Ae,!1)})}W(T,S)}),W(c,F)}),W(e,u),yn()}function K0(e,n){re(n,O(n)==="light"?"dark":"light",!0),document.documentElement.setAttribute("data-theme",O(n)),localStorage.setItem("theme",O(n))}var G0=Yn('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'),Z0=Yn('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'),W0=pe("<h3> </h3> <!>",1),X0=pe(`<div id="main-wrapper" class="svelte-3hkgjj"><main class="svelte-3hkgjj"><div class="header svelte-3hkgjj"><h1>Turing AD tests</h1> <button class="theme-toggle svelte-3hkgjj" aria-label="Toggle Dark Mode" title="Toggle theme"><!></button></div> <p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p> <p>This page is intended as a brief overview of how different AD
            backends perform on a variety of Turing.jl models. Note that the
            inclusion of any AD backend here does not imply an endorsement from
            the Turing team; this table is purely for information.</p> <p>The scope of this table is limited to Turing models. It does not
            purport to show which AD backend is better for tasks that do not
            involve Turing models. If you are interested in more general
            comparisons of AD backends, you may wish to check out something like <a href="https://github.com/gradbench/gradbench" target="_blank">GradBench</a>.</p> <ul class="notes svelte-3hkgjj"><li>You can hover over the model names to see their definitions.</li> <li>The definitions of the AD types can be found in <a href="https://github.com/TuringLang/ADTests/blob/main/main.jl" target="_blank">the source code</a>.</li> <li><b>Numbers</b> indicate the time taken to calculate the gradient
                of the log density of the model using the specified AD type,
                divided by the time taken to calculate the log density itself
                (in AD speak, the primal). Basically: <b>smaller means faster.</b></li> <li>'<span class="wrong svelte-3hkgjj">wrong</span>' means that AD ran but the
                result was not correct. If this happens you should be very wary!
                Note that this is done by comparing against the result obtained
                using FiniteDifferences, i.e., FiniteDifferences is by
                definition always 'correct'.</li> <li>'<span class="error svelte-3hkgjj">error</span>' means that AD didn't run.</li> <li>Some of the 'wrong' or 'error' entries have question marks next
                to them. These will link to a GitHub issue or other page that
                describes the problem.</li></ul> <div class="warning svelte-3hkgjj"><b>Note: The results here are run with Julia 1.11.</b></div> <h2>Results</h2> <p><a href="adtests.json" target="_blank" download="">Download the raw data (JSON)</a></p> <!> <h2>Manifest</h2> <p>The tests above were run with the following package versions:</p> <!></main></div>`);function J0(e,n){hn(n,!0);let t=Ee(ze(typeof document<"u"&&document.documentElement.getAttribute("data-theme")||"light")),r=new Map;for(const[p,x]of Object.entries(Ea)){let F=x.__category__;delete x.__category__;let L=new Map;for(const[$,T]of Object.entries(x))L.set($,T);r.has(F)||r.set(F,new Map),r.get(F).set(p,L)}let i=new Map([...r.entries()].sort());var s=X0(),l=H(s),u=H(l),a=_e(H(u),2);a.__click=[K0,t];var f=H(a);{var g=p=>{var x=G0();W(p,x)},_=p=>{var x=Z0();W(p,x)};gn(f,p=>{O(t)==="dark"?p(g):p(_,!1)})}var c=_e(u,16);_n(c,17,()=>i.entries(),dn,(p,x)=>{let F=()=>O(x)[0],L=()=>O(x)[1];var $=W0(),T=Gn($),E=H(T),R=_e(T,2);H0(R,{get data(){return L()},modelDefinitions:wl}),Re(()=>qe(E,F())),W(p,$)});var v=_e(c,6);R0(v,{}),W(e,s),yn()}At(["click"]);Qs(J0,{target:document.getElementById("app")});
