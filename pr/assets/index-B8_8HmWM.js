(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Qt=!1;var $n=Array.isArray,$o=Array.prototype.indexOf,wt=Array.from,qo=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,gr=Object.getOwnPropertyDescriptors,Ho=Object.prototype,Ko=Array.prototype,Et=Object.getPrototypeOf,er=Object.isExtensible;function ln(e){return typeof e=="function"}function zo(e){return e()}function ft(e){for(var n=0;n<e.length;n++)e[n]()}const me=2,hr=4,qn=8,Dt=16,Fe=32,nn=64,Rn=128,ce=256,On=512,se=1024,Me=2048,qe=4096,Ae=8192,Hn=16384,Go=32768,Mt=65536,Wo=1<<17,Xo=1<<19,vr=1<<20,dt=1<<21,We=Symbol("$state"),br=Symbol("legacy props"),Jo=Symbol("");function yr(e){return e===this.v}function Yo(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function xt(e){return!Yo(e,this.v)}function Zo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function es(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ns(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ts(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function rs(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function os(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ss(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function is(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let hn=!1,as=!1;function ls(){hn=!0}const Tt=1,St=2,wr=4,cs=8,us=16,fs=1,ds=2,Er=4,_s=8,ms=16,ps=1,gs=2,ie=Symbol(),hs="http://www.w3.org/1999/xhtml",vs="@attach";function Dr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let $=null;function nr(e){$=e}function vn(e,n=!1,t){var r=$={p:$,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};hn&&!n&&($.l={s:null,u:null,r1:[],r2:Qe(!1)}),Ms(()=>{r.d=!0})}function bn(e){const n=$;if(n!==null){const l=n.e;if(l!==null){var t=P,r=B;n.e=null;try{for(var i=0;i<l.length;i++){var s=l[i];$e(s.effect),xe(s.reaction),kt(s.fn)}}finally{$e(t),xe(r)}}$=n.p,n.m=!0}return{}}function Kn(){return!hn||$!==null&&$.l===null}function Ge(e){if(typeof e!="object"||e===null||We in e)return e;const n=Et(e);if(n!==Ho&&n!==Ko)return e;var t=new Map,r=$n(e),i=Ie(0),s=B,l=f=>{var a=B;xe(s);var c=f();return xe(a),c};return r&&t.set("length",Ie(e.length)),new Proxy(e,{defineProperty(f,a,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&os();var p=t.get(a);return p===void 0?(p=l(()=>Ie(c.value)),t.set(a,p)):fe(p,l(()=>Ge(c.value))),!0},deleteProperty(f,a){var c=t.get(a);if(c===void 0)a in f&&(t.set(a,l(()=>Ie(ie))),at(i));else{if(r&&typeof a=="string"){var p=t.get("length"),_=Number(a);Number.isInteger(_)&&_<p.v&&fe(p,_)}fe(c,ie),at(i)}return!0},get(f,a,c){var g;if(a===We)return e;var p=t.get(a),_=a in f;if(p===void 0&&(!_||(g=Ue(f,a))!=null&&g.writable)&&(p=l(()=>Ie(Ge(_?f[a]:ie))),t.set(a,p)),p!==void 0){var u=I(p);return u===ie?void 0:u}return Reflect.get(f,a,c)},getOwnPropertyDescriptor(f,a){var c=Reflect.getOwnPropertyDescriptor(f,a);if(c&&"value"in c){var p=t.get(a);p&&(c.value=I(p))}else if(c===void 0){var _=t.get(a),u=_==null?void 0:_.v;if(_!==void 0&&u!==ie)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(f,a){var u;if(a===We)return!0;var c=t.get(a),p=c!==void 0&&c.v!==ie||Reflect.has(f,a);if(c!==void 0||P!==null&&(!p||(u=Ue(f,a))!=null&&u.writable)){c===void 0&&(c=l(()=>Ie(p?Ge(f[a]):ie)),t.set(a,c));var _=I(c);if(_===ie)return!1}return p},set(f,a,c,p){var H;var _=t.get(a),u=a in f;if(r&&a==="length")for(var g=c;g<_.v;g+=1){var h=t.get(g+"");h!==void 0?fe(h,ie):g in f&&(h=l(()=>Ie(ie)),t.set(g+"",h))}_===void 0?(!u||(H=Ue(f,a))!=null&&H.writable)&&(_=l(()=>Ie(void 0)),fe(_,l(()=>Ge(c))),t.set(a,_)):(u=_.v!==ie,fe(_,l(()=>Ge(c))));var N=Reflect.getOwnPropertyDescriptor(f,a);if(N!=null&&N.set&&N.set.call(p,c),!u){if(r&&typeof a=="string"){var R=t.get("length"),V=Number(a);Number.isInteger(V)&&V>=R.v&&fe(R,V+1)}at(i)}return!0},ownKeys(f){I(i);var a=Reflect.ownKeys(f).filter(_=>{var u=t.get(_);return u===void 0||u.v!==ie});for(var[c,p]of t)p.v!==ie&&!(c in f)&&a.push(c);return a},setPrototypeOf(){ss()}})}function at(e,n=1){fe(e,e.v+n)}function mn(e){var n=me|Me,t=B!==null&&(B.f&me)!==0?B:null;return P===null||t!==null&&(t.f&ce)!==0?n|=ce:P.f|=vr,{ctx:$,deps:null,effects:null,equals:yr,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??P}}function Nt(e){const n=mn(e);return n.equals=xt,n}function Mr(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)ke(n[t])}}function bs(e){for(var n=e.parent;n!==null;){if((n.f&me)===0)return n;n=n.parent}return null}function xr(e){var n,t=P;$e(bs(e));try{Mr(e),n=Ur(e)}finally{$e(t)}return n}function Tr(e){var n=xr(e),t=(Ve||(e.f&ce)!==0)&&e.deps!==null?qe:se;de(e,t),e.equals(n)||(e.v=n,e.wv=Br())}const pn=new Map;function Qe(e,n){var t={f:0,v:e,reactions:null,equals:yr,rv:0,wv:0};return t}function Ie(e,n){const t=Qe(e);return Fs(t),t}function At(e,n=!1){var r;const t=Qe(e);return n||(t.equals=xt),hn&&$!==null&&$.l!==null&&((r=$.l).s??(r.s=[])).push(t),t}function fe(e,n,t=!1){B!==null&&!De&&Kn()&&(B.f&(me|Dt))!==0&&!(oe!=null&&oe.includes(e))&&is();let r=t?Ge(n):n;return _t(e,r)}function _t(e,n){if(!e.equals(n)){var t=e.v;yn?pn.set(e,n):pn.set(e,t),e.v=n,(e.f&me)!==0&&((e.f&Me)!==0&&xr(e),de(e,(e.f&ce)===0?se:qe)),e.wv=Br(),Sr(e,Me),Kn()&&P!==null&&(P.f&se)!==0&&(P.f&(Fe|nn))===0&&(ue===null?Rs([e]):ue.push(e))}return n}function tr(e,n=1){var t=I(e),r=n===1?t++:t--;return fe(e,t),r}function Sr(e,n){var t=e.reactions;if(t!==null)for(var r=Kn(),i=t.length,s=0;s<i;s++){var l=t[s],f=l.f;(f&Me)===0&&(!r&&l===P||(de(l,n),(f&(se|ce))!==0&&((f&me)!==0?Sr(l,qe):Zn(l))))}}let ys=!1;var rr,Nr,Ar,kr;function ws(){if(rr===void 0){rr=window,Nr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Ar=Ue(n,"firstChild").get,kr=Ue(n,"nextSibling").get,er(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),er(t)&&(t.__t=void 0)}}function zn(e=""){return document.createTextNode(e)}function Pe(e){return Ar.call(e)}function Gn(e){return kr.call(e)}function X(e,n){return Pe(e)}function Wn(e,n){{var t=Pe(e);return t instanceof Comment&&t.data===""?Gn(t):t}}function we(e,n=1,t=!1){let r=e;for(;n--;)r=Gn(r);return r}function Es(e){e.textContent=""}function Fr(e){P===null&&B===null&&es(),B!==null&&(B.f&ce)!==0&&P===null&&Qo(),yn&&Zo()}function Ds(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function tn(e,n,t,r=!0){var i=P,s={ctx:$,deps:null,nodes_start:null,nodes_end:null,f:e|Me,first:null,fn:n,last:null,next:null,parent:i,prev:null,teardown:null,transitions:null,wv:0};if(t)try{Yn(s),s.f|=Go}catch(a){throw ke(s),a}else n!==null&&Zn(s);var l=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(vr|Rn))===0;if(!l&&r&&(i!==null&&Ds(s,i),B!==null&&(B.f&me)!==0)){var f=B;(f.effects??(f.effects=[])).push(s)}return s}function Ms(e){const n=tn(qn,null,!1);return de(n,se),n.teardown=e,n}function or(e){Fr();var n=P!==null&&(P.f&Fe)!==0&&$!==null&&!$.m;if(n){var t=$;(t.e??(t.e=[])).push({fn:e,effect:P,reaction:B})}else{var r=kt(e);return r}}function xs(e){return Fr(),Ft(e)}function Ts(e){const n=tn(nn,e,!0);return(t={})=>new Promise(r=>{t.outro?Cn(n,()=>{ke(n),r(void 0)}):(ke(n),r(void 0))})}function kt(e){return tn(hr,e,!1)}function Ss(e,n){var t=$,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=Ft(()=>{e(),!r.ran&&(r.ran=!0,fe(t.l.r2,!0),jn(n))})}function Ns(){var e=$;Ft(()=>{if(I(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&se)!==0&&de(t,qe),rn(t)&&Yn(t),n.ran=!1}e.l.r2.v=!1}})}function Ft(e){return tn(qn,e,!0)}function Ee(e,n=[],t=mn){const r=n.map(t);return Xn(()=>e(...r.map(I)))}function Xn(e,n=0){return tn(qn|Dt|n,e,!0)}function en(e,n=!0){return tn(qn|Fe,e,!0,n)}function Rr(e){var n=e.teardown;if(n!==null){const t=yn,r=B;sr(!0),xe(null);try{n.call(null)}finally{sr(t),xe(r)}}}function Or(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&nn)!==0?t.parent=null:ke(t,n),t=r}}function As(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&Fe)===0&&ke(n),n=t}}function ke(e,n=!0){var t=!1;(n||(e.f&Xo)!==0)&&e.nodes_start!==null&&(Cr(e.nodes_start,e.nodes_end),t=!0),Or(e,n&&!t),Bn(e,0),de(e,Hn);var r=e.transitions;if(r!==null)for(const s of r)s.stop();Rr(e);var i=e.parent;i!==null&&i.first!==null&&Ir(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Cr(e,n){for(;e!==null;){var t=e===n?null:Gn(e);e.remove(),e=t}}function Ir(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function Cn(e,n){var t=[];Rt(e,t,!0),Lr(t,()=>{ke(e),n&&n()})}function Lr(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var i of e)i.out(r)}else n()}function Rt(e,n,t){if((e.f&Ae)===0){if(e.f^=Ae,e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&n.push(l);for(var r=e.first;r!==null;){var i=r.next,s=(r.f&Mt)!==0||(r.f&Fe)!==0;Rt(r,n,s?t:!1),r=i}}}function In(e){Pr(e,!0)}function Pr(e,n){if((e.f&Ae)!==0){e.f^=Ae,(e.f&se)===0&&(e.f^=se),rn(e)&&(de(e,Me),Zn(e));for(var t=e.first;t!==null;){var r=t.next,i=(t.f&Mt)!==0||(t.f&Fe)!==0;Pr(t,i?n:!1),t=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&s.in()}}let Ln=[];function ks(){var e=Ln;Ln=[],ft(e)}function Ot(e){Ln.length===0&&queueMicrotask(ks),Ln.push(e)}let kn=!1,mt=!1,Pn=null,Xe=!1,yn=!1;function sr(e){yn=e}let Fn=[];let B=null,De=!1;function xe(e){B=e}let P=null;function $e(e){P=e}let oe=null;function Fs(e){B!==null&&B.f&dt&&(oe===null?oe=[e]:oe.push(e))}let te=null,le=0,ue=null;function Rs(e){ue=e}let Vr=1,Vn=0,Ve=!1;function Br(){return++Vr}function rn(e){var _;var n=e.f;if((n&Me)!==0)return!0;if((n&qe)!==0){var t=e.deps,r=(n&ce)!==0;if(t!==null){var i,s,l=(n&On)!==0,f=r&&P!==null&&!Ve,a=t.length;if(l||f){var c=e,p=c.parent;for(i=0;i<a;i++)s=t[i],(l||!((_=s==null?void 0:s.reactions)!=null&&_.includes(c)))&&(s.reactions??(s.reactions=[])).push(c);l&&(c.f^=On),f&&p!==null&&(p.f&ce)===0&&(c.f^=ce)}for(i=0;i<a;i++)if(s=t[i],rn(s)&&Tr(s),s.wv>e.wv)return!0}(!r||P!==null&&!Ve)&&de(e,se)}return!1}function Os(e,n){for(var t=n;t!==null;){if((t.f&Rn)!==0)try{t.fn(e);return}catch{t.f^=Rn}t=t.parent}throw kn=!1,e}function ir(e){return(e.f&Hn)===0&&(e.parent===null||(e.parent.f&Rn)===0)}function Jn(e,n,t,r){if(kn){if(t===null&&(kn=!1),ir(n))throw e;return}if(t!==null&&(kn=!0),Os(e,n),ir(n))throw e}function jr(e,n,t=!0){var r=e.reactions;if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];oe!=null&&oe.includes(e)||((s.f&me)!==0?jr(s,n,!1):n===s&&(t?de(s,Me):(s.f&se)!==0&&de(s,qe),Zn(s)))}}function Ur(e){var g;var n=te,t=le,r=ue,i=B,s=Ve,l=oe,f=$,a=De,c=e.f;te=null,le=0,ue=null,Ve=(c&ce)!==0&&(De||!Xe||B===null),B=(c&(Fe|nn))===0?e:null,oe=null,nr(e.ctx),De=!1,Vn++,e.f|=dt;try{var p=(0,e.fn)(),_=e.deps;if(te!==null){var u;if(Bn(e,le),_!==null&&le>0)for(_.length=le+te.length,u=0;u<te.length;u++)_[le+u]=te[u];else e.deps=_=te;if(!Ve)for(u=le;u<_.length;u++)((g=_[u]).reactions??(g.reactions=[])).push(e)}else _!==null&&le<_.length&&(Bn(e,le),_.length=le);if(Kn()&&ue!==null&&!De&&_!==null&&(e.f&(me|qe|Me))===0)for(u=0;u<ue.length;u++)jr(ue[u],e);return i!==null&&i!==e&&(Vn++,ue!==null&&(r===null?r=ue:r.push(...ue))),p}finally{te=n,le=t,ue=r,B=i,Ve=s,oe=l,nr(f),De=a,e.f^=dt}}function Cs(e,n){let t=n.reactions;if(t!==null){var r=$o.call(t,e);if(r!==-1){var i=t.length-1;i===0?t=n.reactions=null:(t[r]=t[i],t.pop())}}t===null&&(n.f&me)!==0&&(te===null||!te.includes(n))&&(de(n,qe),(n.f&(ce|On))===0&&(n.f^=On),Mr(n),Bn(n,0))}function Bn(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Cs(e,t[r])}function Yn(e){var n=e.f;if((n&Hn)===0){de(e,se);var t=P,r=$,i=Xe;P=e,Xe=!0;try{(n&Dt)!==0?As(e):Or(e),Rr(e);var s=Ur(e);e.teardown=typeof s=="function"?s:null,e.wv=Vr;var l=e.deps,f;Qt&&as&&e.f&Me}catch(a){Jn(a,e,t,r||e.ctx)}finally{Xe=i,P=t}}}function Is(){try{ns()}catch(e){if(Pn!==null)Jn(e,Pn,null);else throw e}}function Ls(){var e=Xe;try{var n=0;for(Xe=!0;Fn.length>0;){n++>1e3&&Is();var t=Fn,r=t.length;Fn=[];for(var i=0;i<r;i++){var s=Vs(t[i]);Ps(s)}pn.clear()}}finally{mt=!1,Xe=e,Pn=null}}function Ps(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(Hn|Ae))===0)try{rn(r)&&(Yn(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Ir(r):r.fn=null))}catch(i){Jn(i,r,null,r.ctx)}}}function Zn(e){mt||(mt=!0,queueMicrotask(Ls));for(var n=Pn=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(nn|Fe))!==0){if((t&se)===0)return;n.f^=se}}Fn.push(n)}function Vs(e){for(var n=[],t=e;t!==null;){var r=t.f,i=(r&(Fe|nn))!==0,s=i&&(r&se)!==0;if(!s&&(r&Ae)===0){if((r&hr)!==0)n.push(t);else if(i)t.f^=se;else try{rn(t)&&Yn(t)}catch(a){Jn(a,t,null,t.ctx)}var l=t.first;if(l!==null){t=l;continue}}var f=t.parent;for(t=t.next;t===null&&f!==null;)t=f.next,f=f.parent}return n}function I(e){var n=e.f,t=(n&me)!==0;if(B!==null&&!De){if(!(oe!=null&&oe.includes(e))){var r=B.deps;e.rv<Vn&&(e.rv=Vn,te===null&&r!==null&&r[le]===e?le++:te===null?te=[e]:(!Ve||!te.includes(e))&&te.push(e))}}else if(t&&e.deps===null&&e.effects===null){var i=e,s=i.parent;s!==null&&(s.f&ce)===0&&(i.f^=ce)}return t&&(i=e,rn(i)&&Tr(i)),yn&&pn.has(e)?pn.get(e):e.v}function jn(e){var n=De;try{return De=!0,e()}finally{De=n}}const Bs=-7169;function de(e,n){e.f=e.f&Bs|n}function pt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(We in e)gt(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&We in t&&gt(t)}}}function gt(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{gt(e[r],n)}catch{}const t=Et(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=gr(t);for(let i in r){const s=r[i].get;if(s)try{s.call(e)}catch{}}}}}function js(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Us=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function $s(e){return Us.includes(e)}const qs={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Hs(e){return e=e.toLowerCase(),qs[e]??e}const Ks=["touchstart","touchmove"];function zs(e){return Ks.includes(e)}function Gs(e,n){if(n){const t=document.body;e.autofocus=!0,Ot(()=>{document.activeElement===t&&e.focus()})}}function Ws(e){var n=B,t=P;xe(null),$e(null);try{return e()}finally{xe(n),$e(t)}}const $r=new Set,ht=new Set;function Xs(e,n,t,r={}){function i(s){if(r.capture||un.call(n,s),!s.cancelBubble)return Ws(()=>t==null?void 0:t.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Ot(()=>{n.addEventListener(e,i,r)}):n.addEventListener(e,i,r),i}function Js(e){for(var n=0;n<e.length;n++)$r.add(e[n]);for(var t of ht)t(e)}function un(e){var H;var n=this,t=n.ownerDocument,r=e.type,i=((H=e.composedPath)==null?void 0:H.call(e))||[],s=i[0]||e.target,l=0,f=e.__root;if(f){var a=i.indexOf(f);if(a!==-1&&(n===document||n===window)){e.__root=n;return}var c=i.indexOf(n);if(c===-1)return;a<=c&&(l=a)}if(s=i[l]||e.target,s!==n){qo(e,"currentTarget",{configurable:!0,get(){return s||t}});var p=B,_=P;xe(null),$e(null);try{for(var u,g=[];s!==null;){var h=s.assignedSlot||s.parentNode||s.host||null;try{var N=s["__"+r];if(N!=null&&(!s.disabled||e.target===s))if($n(N)){var[R,...V]=N;R.apply(s,[e,...V])}else N.call(s,e)}catch(T){u?g.push(T):u=T}if(e.cancelBubble||h===n||h===null)break;s=h}if(u){for(let T of g)queueMicrotask(()=>{throw T});throw u}}finally{e.__root=n,delete e.currentTarget,xe(p),$e(_)}}}function qr(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function gn(e,n){var t=P;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function pe(e,n){var t=(n&ps)!==0,r=(n&gs)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=qr(s?e:"<!>"+e),t||(i=Pe(i)));var l=r||Nr?document.importNode(i,!0):i.cloneNode(!0);if(t){var f=Pe(l),a=l.lastChild;gn(f,a)}else gn(l,l);return l}}function Ys(e=""){{var n=zn(e+"");return gn(n,n),n}}function Ct(){var e=document.createDocumentFragment(),n=document.createComment(""),t=zn();return e.append(n,t),gn(n,t),e}function re(e,n){e!==null&&e.before(n)}function Be(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function Zs(e,n){return Qs(e,n)}const Ze=new Map;function Qs(e,{target:n,anchor:t,props:r={},events:i,context:s,intro:l=!0}){ws();var f=new Set,a=_=>{for(var u=0;u<_.length;u++){var g=_[u];if(!f.has(g)){f.add(g);var h=zs(g);n.addEventListener(g,un,{passive:h});var N=Ze.get(g);N===void 0?(document.addEventListener(g,un,{passive:h}),Ze.set(g,1)):Ze.set(g,N+1)}}};a(wt($r)),ht.add(a);var c=void 0,p=Ts(()=>{var _=t??n.appendChild(zn());return en(()=>{if(s){vn({});var u=$;u.c=s}i&&(r.$$events=i),c=e(_,r)||{},s&&bn()}),()=>{var h;for(var u of f){n.removeEventListener(u,un);var g=Ze.get(u);--g===0?(document.removeEventListener(u,un),Ze.delete(u)):Ze.set(u,g)}ht.delete(a),_!==t&&((h=_.parentNode)==null||h.removeChild(_))}});return ei.set(c,p),c}let ei=new WeakMap;function vt(e,n,[t,r]=[0,0]){var i=e,s=null,l=null,f=ie,a=t>0?Mt:0,c=!1;const p=(u,g=!0)=>{c=!0,_(g,u)},_=(u,g)=>{f!==(f=u)&&(f?(s?In(s):g&&(s=en(()=>g(i))),l&&Cn(l,()=>{l=null})):(l?In(l):g&&(l=en(()=>g(i,[t+1,r]))),s&&Cn(s,()=>{s=null})))};Xn(()=>{c=!1,n(p),c||_(null,null)},a)}function dn(e,n){return n}function ni(e,n,t,r){for(var i=[],s=n.length,l=0;l<s;l++)Rt(n[l].e,i,!0);var f=s>0&&i.length===0&&t!==null;if(f){var a=t.parentNode;Es(a),a.append(t),r.clear(),Le(e,n[0].prev,n[s-1].next)}Lr(i,()=>{for(var c=0;c<s;c++){var p=n[c];f||(r.delete(p.k),Le(e,p.prev,p.next)),ke(p.e,!f)}})}function _n(e,n,t,r,i,s=null){var l=e,f={flags:n,items:new Map,first:null},a=(n&wr)!==0;if(a){var c=e;l=c.appendChild(zn())}var p=null,_=!1,u=Nt(()=>{var g=t();return $n(g)?g:g==null?[]:wt(g)});Xn(()=>{var g=I(u),h=g.length;_&&h===0||(_=h===0,ti(g,f,l,i,n,r,t),s!==null&&(h===0?p?In(p):p=en(()=>s(l)):p!==null&&Cn(p,()=>{p=null})),I(u))})}function ti(e,n,t,r,i,s,l){var ne,he,Se,Re;var f=(i&cs)!==0,a=(i&(Tt|St))!==0,c=e.length,p=n.items,_=n.first,u=_,g,h=null,N,R=[],V=[],H,T,D,x;if(f)for(x=0;x<c;x+=1)H=e[x],T=s(H,x),D=p.get(T),D!==void 0&&((ne=D.a)==null||ne.measure(),(N??(N=new Set)).add(D));for(x=0;x<c;x+=1){if(H=e[x],T=s(H,x),D=p.get(T),D===void 0){var ee=u?u.e.nodes_start:t;h=oi(ee,n,h,h===null?n.first:h.next,H,T,x,r,i,l),p.set(T,h),R=[],V=[],u=h.next;continue}if(a&&ri(D,H,x,i),(D.e.f&Ae)!==0&&(In(D.e),f&&((he=D.a)==null||he.unfix(),(N??(N=new Set)).delete(D))),D!==u){if(g!==void 0&&g.has(D)){if(R.length<V.length){var A=V[0],q;h=A.prev;var Z=R[0],Te=R[R.length-1];for(q=0;q<R.length;q+=1)ar(R[q],A,t);for(q=0;q<V.length;q+=1)g.delete(V[q]);Le(n,Z.prev,Te.next),Le(n,h,Z),Le(n,Te,A),u=A,h=Te,x-=1,R=[],V=[]}else g.delete(D),ar(D,u,t),Le(n,D.prev,D.next),Le(n,D,h===null?n.first:h.next),Le(n,h,D),h=D;continue}for(R=[],V=[];u!==null&&u.k!==T;)(u.e.f&Ae)===0&&(g??(g=new Set)).add(u),V.push(u),u=u.next;if(u===null)continue;D=u}R.push(D),h=D,u=D.next}if(u!==null||g!==void 0){for(var ge=g===void 0?[]:wt(g);u!==null;)(u.e.f&Ae)===0&&ge.push(u),u=u.next;var He=ge.length;if(He>0){var on=(i&wr)!==0&&c===0?t:null;if(f){for(x=0;x<He;x+=1)(Se=ge[x].a)==null||Se.measure();for(x=0;x<He;x+=1)(Re=ge[x].a)==null||Re.fix()}ni(n,ge,on,p)}}f&&Ot(()=>{var ve;if(N!==void 0)for(D of N)(ve=D.a)==null||ve.apply()}),P.first=n.first&&n.first.e,P.last=h&&h.e}function ri(e,n,t,r){(r&Tt)!==0&&_t(e.v,n),(r&St)!==0?_t(e.i,t):e.i=t}function oi(e,n,t,r,i,s,l,f,a,c){var p=(a&Tt)!==0,_=(a&us)===0,u=p?_?At(i):Qe(i):i,g=(a&St)===0?l:Qe(l),h={i:g,v:u,k:s,a:null,e:null,prev:t,next:r};try{return h.e=en(()=>f(e,u,g,c),ys),h.e.prev=t&&t.e,h.e.next=r&&r.e,t===null?n.first=h:(t.next=h,t.e.next=h.e),r!==null&&(r.prev=h,r.e.prev=h.e),h}finally{}}function ar(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,i=n?n.e.nodes_start:t,s=e.e.nodes_start;s!==r;){var l=Gn(s);i.before(s),s=l}}function Le(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function si(e,n,t=!1,r=!1,i=!1){var s=e,l="";Ee(()=>{var f=P;if(l!==(l=n()??"")&&(f.nodes_start!==null&&(Cr(f.nodes_start,f.nodes_end),f.nodes_start=f.nodes_end=null),l!=="")){var a=l+"";t?a=`<svg>${a}</svg>`:r&&(a=`<math>${a}</math>`);var c=qr(a);if((t||r)&&(c=Pe(c)),gn(Pe(c),c.lastChild),t||r)for(;Pe(c);)s.before(Pe(c));else s.before(c)}})}function ii(e,n,t,r,i){var f;var s=(f=n.$$slots)==null?void 0:f[t],l=!1;s===!0&&(s=n.children,l=!0),s===void 0?i!==null&&i(e):s(e,l?()=>r:r)}function ai(e,n){var t=void 0,r;Xn(()=>{t!==(t=n())&&(r&&(ke(r),r=null),t&&(r=en(()=>{kt(()=>t(e))})))})}function Hr(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=Hr(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function li(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=Hr(e))&&(r&&(r+=" "),r+=n);return r}function Kr(e){return typeof e=="object"?li(e):e??""}const lr=[...` 	
\r\f \v\uFEFF`];function ci(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var i in t)if(t[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,l=0;(l=r.indexOf(i,l))>=0;){var f=l+s;(l===0||lr.includes(r[l-1]))&&(f===r.length||lr.includes(r[f]))?r=(l===0?"":r.substring(0,l))+r.substring(f+1):l=f}}return r===""?null:r}function cr(e,n=!1){var t=n?" !important;":";",r="";for(var i in e){var s=e[i];s!=null&&s!==""&&(r+=" "+i+": "+s+t)}return r}function lt(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ui(e,n){if(n){var t="",r,i;if(Array.isArray(n)?(r=n[0],i=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,l=0,f=!1,a=[];r&&a.push(...Object.keys(r).map(lt)),i&&a.push(...Object.keys(i).map(lt));var c=0,p=-1;const N=e.length;for(var _=0;_<N;_++){var u=e[_];if(f?u==="/"&&e[_-1]==="*"&&(f=!1):s?s===u&&(s=!1):u==="/"&&e[_+1]==="*"?f=!0:u==='"'||u==="'"?s=u:u==="("?l++:u===")"&&l--,!f&&s===!1&&l===0){if(u===":"&&p===-1)p=_;else if(u===";"||_===N-1){if(p!==-1){var g=lt(e.substring(c,p).trim());if(!a.includes(g)){u!==";"&&_++;var h=e.substring(c,_).trim();t+=" "+h+";"}}c=_+1,p=-1}}}}return r&&(t+=cr(r)),i&&(t+=cr(i,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function It(e,n,t,r,i,s){var l=e.__className;if(l!==t||l===void 0){var f=ci(t,r,s);f==null?e.removeAttribute("class"):n?e.className=f:e.setAttribute("class",f),e.__className=t}else if(s&&i!==s)for(var a in s){var c=!!s[a];(i==null||c!==!!i[a])&&e.classList.toggle(a,c)}return s}function ct(e,n={},t,r){for(var i in t){var s=t[i];n[i]!==s&&(t[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function fi(e,n,t,r){var i=e.__style;if(i!==n){var s=ui(n,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=n}else r&&(Array.isArray(r)?(ct(e,t==null?void 0:t[0],r[0]),ct(e,t==null?void 0:t[1],r[1],"important")):ct(e,t,r));return r}const fn=Symbol("class"),cn=Symbol("style"),zr=Symbol("is custom element"),Gr=Symbol("is html");function di(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function bt(e,n,t,r){var i=Wr(e);i[n]!==(i[n]=t)&&(n==="loading"&&(e[Jo]=t),t==null?e.removeAttribute(n):typeof t!="string"&&Xr(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function _i(e,n,t,r,i=!1){var s=Wr(e),l=s[zr],f=!s[Gr],a=n||{},c=e.tagName==="OPTION";for(var p in n)p in t||(t[p]=null);t.class?t.class=Kr(t.class):t.class=null,t[cn]&&(t.style??(t.style=null));var _=Xr(e);for(const T in t){let D=t[T];if(c&&T==="value"&&D==null){e.value=e.__value="",a[T]=D;continue}if(T==="class"){var u=e.namespaceURI==="http://www.w3.org/1999/xhtml";It(e,u,D,r,n==null?void 0:n[fn],t[fn]),a[T]=D,a[fn]=t[fn];continue}if(T==="style"){fi(e,D,n==null?void 0:n[cn],t[cn]),a[T]=D,a[cn]=t[cn];continue}var g=a[T];if(D!==g){a[T]=D;var h=T[0]+T[1];if(h!=="$$")if(h==="on"){const x={},ee="$$"+T;let A=T.slice(2);var N=$s(A);if(js(A)&&(A=A.slice(0,-7),x.capture=!0),!N&&g){if(D!=null)continue;e.removeEventListener(A,a[ee],x),a[ee]=null}if(D!=null)if(N)e[`__${A}`]=D,Js([A]);else{let q=function(Z){a[T].call(this,Z)};var H=q;a[ee]=Xs(A,e,q,x)}else N&&(e[`__${A}`]=void 0)}else if(T==="style")bt(e,T,D);else if(T==="autofocus")Gs(e,!!D);else if(!l&&(T==="__value"||T==="value"&&D!=null))e.value=e.__value=D;else if(T==="selected"&&c)di(e,D);else{var R=T;f||(R=Hs(R));var V=R==="defaultValue"||R==="defaultChecked";if(D==null&&!l&&!V)if(s[T]=null,R==="value"||R==="checked"){let x=e;const ee=n===void 0;if(R==="value"){let A=x.defaultValue;x.removeAttribute(R),x.defaultValue=A,x.value=x.__value=ee?A:null}else{let A=x.defaultChecked;x.removeAttribute(R),x.defaultChecked=A,x.checked=ee?A:!1}}else e.removeAttribute(T);else V||_.includes(R)&&(l||typeof D!="string")?e[R]=D:typeof D!="function"&&bt(e,R,D)}}}for(let T of Object.getOwnPropertySymbols(t))T.description===vs&&ai(e,()=>t[T]);return a}function Wr(e){return e.__attributes??(e.__attributes={[zr]:e.nodeName.includes("-"),[Gr]:e.namespaceURI===hs})}var ur=new Map;function Xr(e){var n=ur.get(e.nodeName);if(n)return n;ur.set(e.nodeName,n=[]);for(var t,r=e,i=Element.prototype;i!==r;){t=gr(r);for(var s in t)t[s].set&&n.push(s);r=Et(r)}return n}function Lt(e=!1){const n=$,t=n.l.u;if(!t)return;let r=()=>pt(n.s);if(e){let i=0,s={};const l=mn(()=>{let f=!1;const a=n.s;for(const c in a)a[c]!==s[c]&&(s[c]=a[c],f=!0);return f&&i++,i});r=()=>I(l)}t.b.length&&xs(()=>{fr(n,r),ft(t.b)}),or(()=>{const i=jn(()=>t.m.map(zo));return()=>{for(const s of i)typeof s=="function"&&s()}}),t.a.length&&or(()=>{fr(n,r),ft(t.a)})}function fr(e,n){if(e.l.s)for(const t of e.l.s)I(t);n()}let An=!1;function mi(e){var n=An;try{return An=!1,[e(),An]}finally{An=n}}const pi={get(e,n){if(!e.exclude.includes(n))return I(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=je({get[n](){return e.props[n]}},n,Er)),e.special[n](t),tr(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),tr(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function Un(e,n){return new Proxy({props:e,exclude:n,special:{},version:Qe(0)},pi)}const gi={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let i=e.props[r];ln(i)&&(i=i());const s=Ue(i,n);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const i=Ue(r,n);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,n){if(n===We||n===br)return!1;for(let t of e.props)if(ln(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(ln(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function hi(...e){return new Proxy({props:e},gi)}function dr(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function je(e,n,t,r){var ee;var i=(t&fs)!==0,s=!hn||(t&ds)!==0,l=(t&_s)!==0,f=(t&ms)!==0,a=!1,c;l?[c,a]=mi(()=>e[n]):c=e[n];var p=We in e||br in e,_=l&&(((ee=Ue(e,n))==null?void 0:ee.set)??(p&&n in e&&(A=>e[n]=A)))||void 0,u=r,g=!0,h=!1,N=()=>(h=!0,g&&(g=!1,f?u=jn(r):u=r),u);c===void 0&&r!==void 0&&(_&&s&&rs(),c=N(),_&&_(c));var R;if(s)R=()=>{var A=e[n];return A===void 0?N():(g=!0,h=!1,A)};else{var V=(i?mn:Nt)(()=>e[n]);V.f|=Wo,R=()=>{var A=I(V);return A!==void 0&&(u=void 0),A===void 0?u:A}}if((t&Er)===0)return R;if(_){var H=e.$$legacy;return function(A,q){return arguments.length>0?((!s||!q||H||a)&&_(q?R():A),A):R()}}var T=!1,D=At(c),x=mn(()=>{var A=R(),q=I(D);return T?(T=!1,q):D.v=A});return l&&I(x),i||(x.equals=xt),function(A,q){if(arguments.length>0){const Z=q?I(x):s&&l?Ge(A):A;if(!x.equals(Z)){if(T=!0,fe(D,Z),h&&u!==void 0&&(u=Z),dr(x))return A;jn(()=>I(x))}return A}return dr(x)?x.v:I(x)}}function vi(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function bi(){const e=$;return e===null&&Dr(),(n,t,r)=>{var s;const i=(s=e.s.$$events)==null?void 0:s[n];if(i){const l=$n(i)?i.slice():[i],f=vi(n,t,r);for(const a of l)a.call(e.x,f);return!f.defaultPrevented}return!0}}function yi(e){$===null&&Dr(),$.l===null&&ts(),wi($).a.push(e)}function wi(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Ei="5";var pr;typeof window<"u"&&((pr=window.__svelte??(window.__svelte={})).v??(pr.v=new Set)).add(Ei);ls();const Di={__category__:"Distributions",FiniteDifferences:26.013111976960868,ForwardDiff:1.7755859264240057,MooncakeForward:3.9032258064516125,MooncakeReverse:4.747408695652173},Mi={__category__:"Distributions",FiniteDifferences:23.12391155881851,ForwardDiff:1.3305012463000467,MooncakeForward:4.043439432993539,MooncakeReverse:6.801490175071222},xi={__category__:"DynamicPPL demo models",FiniteDifferences:42.34507328596047,ForwardDiff:1.5054020695654102,MooncakeForward:7.569375310307953,MooncakeReverse:6.217047176439714},Ti={__category__:"DynamicPPL demo models",FiniteDifferences:40.69376400298731,ForwardDiff:1.4223698871578778,MooncakeForward:7.575280478683619,MooncakeReverse:6.254205025264761},Si={__category__:"DynamicPPL demo models",FiniteDifferences:65.4572119537053,ForwardDiff:1.4388101093332482,MooncakeForward:13.518245585305275,MooncakeReverse:5.628010710083327},Ni={__category__:"DynamicPPL demo models",FiniteDifferences:84.76375176304654,ForwardDiff:1.4259211160995884,MooncakeForward:13.237601458862228,MooncakeReverse:6.6934595514073045},Ai={__category__:"DynamicPPL demo models",FiniteDifferences:65.5985357490385,ForwardDiff:1.518611296206363,MooncakeForward:13.644655685363904,MooncakeReverse:7.640476526721406},ki={__category__:"DynamicPPL demo models",FiniteDifferences:71.02959892367551,ForwardDiff:1.5649308683561163,MooncakeForward:13.890200065357105,MooncakeReverse:6.849596678469146},Fi={__category__:"DynamicPPL demo models",FiniteDifferences:42.83989883241521,ForwardDiff:1.5776168081383395,MooncakeForward:8.289197299324831,MooncakeReverse:6.4439253075710194},Ri={__category__:"DynamicPPL demo models",FiniteDifferences:64.3635552249907,ForwardDiff:1.4308520376405112,MooncakeForward:12.152588930092021,MooncakeReverse:5.059818264744062},Oi={__category__:"DynamicPPL demo models",FiniteDifferences:62.094710385010856,ForwardDiff:1.4323619421020777,MooncakeForward:13.627384029733658,MooncakeReverse:6.192472614586335},Ci={__category__:"DynamicPPL demo models",FiniteDifferences:65.44791557830948,ForwardDiff:1.3732463581369347,MooncakeForward:13.0137327888403,MooncakeReverse:5.8326724616046475},Ii={__category__:"Distributions",FiniteDifferences:158.26197553051773,ForwardDiff:2.723046284850982,MooncakeForward:22.8296495768343,MooncakeReverse:5.721560984663929},Li={__category__:"DynamicPPL demo models",FiniteDifferences:67.30412893752404,ForwardDiff:1.4629988039578126,MooncakeForward:12.77842565597668,MooncakeReverse:6.275081016544431},Pi={__category__:"DynamicPPL demo models",FiniteDifferences:66.15379233137419,ForwardDiff:1.3879781280220571,MooncakeForward:14.000329658254277,MooncakeReverse:6.347774255788313},Vi={__category__:"DynamicPPL demo models",FiniteDifferences:65.21986098037797,ForwardDiff:1.3918032906497393,MooncakeForward:12.323039780916691,MooncakeReverse:5.358671939709983},Bi={__category__:"Core Turing syntax",FiniteDifferences:86.68225589659555,ForwardDiff:1.6121877691645135,MooncakeForward:14.132087636704258,MooncakeReverse:5.805826753277063},ji={__category__:"Core Turing syntax",FiniteDifferences:33.343918158567774,ForwardDiff:1.86421096568379,MooncakeForward:4.473898307362084,MooncakeReverse:6.861202764773513},Ui={__category__:"DynamicPPL arXiV paper",FiniteDifferences:26.859405079798798,ForwardDiff:1.5863401713559826,MooncakeForward:3.970699083800302,MooncakeReverse:8.551866740406282},$i={__category__:"DynamicPPL arXiV paper",FiniteDifferences:166.650217764814,ForwardDiff:3.3582500590132973,MooncakeForward:22.94394170877894,MooncakeReverse:4.128677839851024},qi={__category__:"DynamicPPL arXiV paper",FiniteDifferences:128567.84004302787,ForwardDiff:4088.921099258868,MooncakeForward:18164.721375332116,MooncakeReverse:3.538710531736456},Hi={__category__:"DynamicPPL arXiV paper",FiniteDifferences:"NaN",ForwardDiff:29.016860406106524,MooncakeForward:190.01811437219928,MooncakeReverse:4.573261672824992},Ki={__category__:"DynamicPPL arXiV paper",FiniteDifferences:3634.437436948005,ForwardDiff:89.51064989448146,MooncakeForward:455.2387564584312,MooncakeReverse:9.334125670302928},zi={__category__:"Distributions",FiniteDifferences:39.30932378460267,ForwardDiff:1.2152378499213452,MooncakeForward:12.076519346517628,MooncakeReverse:9.363839669705833},Gi={__category__:"DynamicPPL arXiV paper",FiniteDifferences:1095.4264761371521,ForwardDiff:55.01548696096087,MooncakeForward:185.32375188834686,MooncakeReverse:4.958320290778392},Wi={__category__:"DynamicPPL arXiV paper",FiniteDifferences:2830.3312339173794,ForwardDiff:274.26822401588043,MooncakeForward:729.3353916913314,MooncakeReverse:7.658198728572489},Xi={__category__:"DynamicPPL arXiV paper",FiniteDifferences:6678.527218225419,ForwardDiff:89.24811856671198,MooncakeForward:1318.2232668713489,MooncakeReverse:4.75177551705936},Ji={__category__:"Core Turing syntax",FiniteDifferences:40.9034443525031,ForwardDiff:1.4241673461046607,MooncakeForward:7.171068534541959,MooncakeReverse:5.904553253044472},Yi={__category__:"Core Turing syntax",FiniteDifferences:62.49238414540751,ForwardDiff:1.3598795689449432,MooncakeForward:17.29801324503311,MooncakeReverse:14.819523269012487},Zi={__category__:"Base Julia features",FiniteDifferences:13.320702219277907,ForwardDiff:.9336787760736776,MooncakeForward:"error",MooncakeReverse:"error"},Qi={__category__:"Effect of model size",FiniteDifferences:145.57204375759682,ForwardDiff:2.0577743686746452,MooncakeForward:27.892269222754738,MooncakeReverse:5.328629032258065},ea={__category__:"Effect of model size",FiniteDifferences:630.1103642671293,ForwardDiff:10.623793490460155,MooncakeForward:134.39239646978953,MooncakeReverse:5.590292701000371},na={__category__:"Effect of model size",FiniteDifferences:1234.7100691269522,ForwardDiff:17.31195292386907,MooncakeForward:266.4668771463388,MooncakeReverse:5.462478119995532},ta={__category__:"Effect of model size",FiniteDifferences:6820.385215334456,ForwardDiff:100.88687417724744,MooncakeForward:1050.565965732087,MooncakeReverse:5.550983475881681},ra={__category__:"Distributions",FiniteDifferences:33.04522265456118,ForwardDiff:1.5388808182451665,MooncakeForward:4.425088342905987,MooncakeReverse:5.730209356594256},oa={__category__:"Distributions",FiniteDifferences:24.189892802450228,ForwardDiff:1.737750311386837,MooncakeForward:6.319064618609373,MooncakeReverse:5.19938382080136},sa={__category__:"Distributions",FiniteDifferences:18.51784358390281,ForwardDiff:1.2919634236383257,MooncakeForward:3.8044310261323675,MooncakeReverse:7.308279913227874},ia={__category__:"Core Turing syntax",FiniteDifferences:32.088673872019214,ForwardDiff:1.7339371980676326,MooncakeForward:4.253875210598078,MooncakeReverse:6.88279571515545},aa={__category__:"Core Turing syntax",FiniteDifferences:35.82755223373535,ForwardDiff:1.6642450435617753,MooncakeForward:4.742186528313286,MooncakeReverse:6.809663604337916},la={__category__:"Core Turing syntax",FiniteDifferences:62.595755062210294,ForwardDiff:1.4533382710824252,MooncakeForward:6.990318311624991,MooncakeReverse:5.5477162293488815},ca={__category__:"Core Turing syntax",FiniteDifferences:31.015692360751853,ForwardDiff:1.6457520535652654,MooncakeForward:4.419122207850167,MooncakeReverse:5.560497556681198},ua={__category__:"Distributions",FiniteDifferences:24.192534692721612,ForwardDiff:"NaN",MooncakeForward:"error",MooncakeReverse:"error"},fa={__category__:"Integrations with other packages",FiniteDifferences:62.51447675131886,ForwardDiff:5.698069685565133,MooncakeForward:"error",MooncakeReverse:62.13804229649634},da={__category__:"PosteriorDB",FiniteDifferences:147.2239924390738,ForwardDiff:2.130652517480598,MooncakeForward:29.646782332204328,MooncakeReverse:6.057688929487405},_a={__category__:"PosteriorDB",FiniteDifferences:141.65498979609046,ForwardDiff:2.1733333333333333,MooncakeForward:32.21123531097736,MooncakeReverse:5.84231933409005},ma={__category__:"Core Turing syntax",FiniteDifferences:41.34828154013243,ForwardDiff:1.3435171041059113,MooncakeForward:6.378170038802661,MooncakeReverse:4.08404795365245},pa={__category__:"Distributions",FiniteDifferences:44.479641225249615,ForwardDiff:1.1047543977861685,MooncakeForward:15.262460688077768,MooncakeReverse:12.244195491775537},ga={__category__:"Core Turing syntax",FiniteDifferences:42.038886635570876,ForwardDiff:1.4611958139744687,MooncakeForward:7.456542900848283,MooncakeReverse:6.446952092113382},ha={__category__:"Base Julia features",FiniteDifferences:31.81684569479966,ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error"},va={__category__:"Base Julia features",FiniteDifferences:42.27487382204496,ForwardDiff:1.6272229050683247,MooncakeForward:7.05917223040667,MooncakeReverse:5.850536160039377},ba={assume_beta:Di,assume_dirichlet:Mi,demo_assume_dot_observe:xi,demo_assume_dot_observe_literal:Ti,demo_assume_index_observe:Si,demo_assume_matrix_observe_matrix_index:Ni,demo_assume_multivariate_observe:Ai,demo_assume_multivariate_observe_literal:ki,demo_assume_observe_literal:Fi,demo_assume_submodel_observe_index_literal:Ri,demo_dot_assume_observe:Oi,demo_dot_assume_observe_index:Ci,assume_lkjcholu:Ii,demo_dot_assume_observe_index_literal:Li,demo_dot_assume_observe_matrix_index:Pi,demo_dot_assume_observe_submodel:Vi,dot_assume:Bi,dot_observe:ji,dppl_gauss_unknown:Ui,dppl_hier_poisson:$i,dppl_high_dim_gauss:qi,dppl_hmm_semisup:Hi,dppl_lda:Ki,assume_mvnormal:zi,dppl_logistic_regression:Gi,dppl_naive_bayes:Wi,dppl_sto_volatility:Xi,dynamic_constraint:Ji,multiple_constraints_same_var:Yi,multithreaded:Zi,n010:Qi,n050:ea,n100:na,n500:ta,assume_normal:ra,observe_bernoulli:oa,observe_categorical:sa,observe_index:ia,observe_literal:aa,observe_multivariate:la,observe_submodel:ca,observe_von_mises:ua,ordinary_diffeq:fa,pdb_eight_schools_centered:da,pdb_eight_schools_noncentered:_a,assume_submodel:ma,assume_wishart:pa,broadcast_macro:ga,call_C:ha,control_flow:va},ya=`@model function assume_beta()
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

model = demo_assume_dot_observe_literal()`,Ma=`using LinearAlgebra: Diagonal

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

model = demo_assume_index_observe()`,xa=`using LinearAlgebra: Diagonal

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

model = demo_assume_matrix_observe_matrix_index()`,Ta=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe(x = [1.5, 2.0])
    # Multivariate \`assume\` and \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zero(x), Diagonal(s))
    x ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe()`,Sa=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe_literal()
    # multivariate \`assume\` and literal \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zeros(2), Diagonal(s))
    [1.5, 2.0] ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe_literal()`,Na=`@model function demo_assume_observe_literal()
    # univariate \`assume\` and literal \`observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    1.5 ~ Normal(m, sqrt(s))
    2.0 ~ Normal(m, sqrt(s))
end

model = demo_assume_observe_literal()`,Aa=`@model function _prior_dot_assume(::Type{TV} = Vector{Float64}) where {TV}
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

model = demo_assume_submodel_observe_index_literal()`,ka=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe()`,Fa=`@model function demo_dot_assume_observe_index(
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

model = demo_dot_assume_observe_index()`,Ra=`@model function assume_lkjcholu()
    a ~ LKJCholesky(5, 1.0, 'U')
end

model = assume_lkjcholu()`,Oa=`@model function demo_dot_assume_observe_index_literal(
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

model = demo_dot_assume_observe_index_literal()`,Ca=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe_matrix_index()`,Ia=`using LinearAlgebra: Diagonal

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

model = dot_observe()`,Va=`n = 10_000
s = abs(rand()) + 0.5
y = randn() .+ s * randn(n)

@model function dppl_gauss_unknown(y)
    N = length(y)
    m ~ Normal(0, 1)
    s ~ truncated(Cauchy(0, 5); lower = 0)
    y ~ product_distribution(fill(Normal(m, s), N))
end

model = dppl_gauss_unknown(y)`,Ba=`using Turing: LogPoisson

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

model = dppl_hier_poisson(y, x, idx, ns)`,ja=`@model function dppl_high_dim_gauss(D)
    m ~ product_distribution(fill(Normal(0, 1), D))
end

model = dppl_high_dim_gauss(10_000)`,Ua=`using StatsFuns: logsumexp

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

model = dppl_lda(k, m, w, doc, alpha, beta)`,qa=`@model function assume_mvnormal()
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

model = dppl_logistic_regression(X', y)`,Ka=`using MLDatasets: MNIST
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

model = dppl_naive_bayes(image_vec, labels, C, D)`,za=`using DelimitedFiles: readdlm

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

model = dppl_sto_volatility(y)`,Ga=`@model function dynamic_constraint()
    a ~ Normal()
    b ~ truncated(Normal(); lower = a)
end

model = dynamic_constraint()`,Wa=`@model function multiple_constraints_same_var(::Type{TV} = Vector{Float64}) where {TV}
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

model = n050()`,Za=`@model function n100(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 100)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n100()`,Qa=`@model function n500(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 500)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n500()`,el=`@model function assume_normal()
    a ~ Normal()
end

model = assume_normal()`,nl=`@model function observe_bernoulli(x = [true, false, true])
    a ~ Beta(2, 2)
    for i in eachindex(x)
        x[i] ~ Bernoulli(a)
    end
end

model = observe_bernoulli()`,tl=`@model function observe_categorical(x = [1, 2, 1, 2, 2])
    a ~ Dirichlet(2, 3)
    for i in eachindex(x)
        x[i] ~ Categorical(a)
    end
end

model = observe_categorical()`,rl=`@model function observe_index(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end

model = observe_index()`,ol=`@model function observe_literal()
    a ~ Normal()
    1.5 ~ Normal(a)
end

model = observe_literal()`,sl=`@model function observe_multivariate(
    x = [1.5, 2.0, 2.5],
    ::Type{TV} = Vector{Float64},
) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    x ~ MvNormal(a, I)
end

model = observe_multivariate()`,il=`@model function inner2(x, a)
    x ~ Normal(a)
end
@model function observe_submodel(x = 1.5)
    a ~ Normal()
    _ignore ~ to_submodel(inner2(x, a))
end

model = observe_submodel()`,al=`@model function observe_von_mises(x)
    a ~ InverseGamma(2, 3)
    x ~ VonMises(0, a)
end

model = observe_von_mises(0.4)`,ll=`# See https://turinglang.org/docs/tutorials/bayesian-differential-equations/.

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

@model function ordinary_diffeq(data, prob)
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

model = ordinary_diffeq(odedata, prob)`,cl=`J = 8
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

model = call_C()`,pl=`#= 
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

model = control_flow()`,gl={assume_beta:ya,assume_dirichlet:wa,demo_assume_dot_observe:Ea,demo_assume_dot_observe_literal:Da,demo_assume_index_observe:Ma,demo_assume_matrix_observe_matrix_index:xa,demo_assume_multivariate_observe:Ta,demo_assume_multivariate_observe_literal:Sa,demo_assume_observe_literal:Na,demo_assume_submodel_observe_index_literal:Aa,demo_dot_assume_observe:ka,demo_dot_assume_observe_index:Fa,assume_lkjcholu:Ra,demo_dot_assume_observe_index_literal:Oa,demo_dot_assume_observe_matrix_index:Ca,demo_dot_assume_observe_submodel:Ia,dot_assume:La,dot_observe:Pa,dppl_gauss_unknown:Va,dppl_hier_poisson:Ba,dppl_high_dim_gauss:ja,dppl_hmm_semisup:Ua,dppl_lda:$a,assume_mvnormal:qa,dppl_logistic_regression:Ha,dppl_naive_bayes:Ka,dppl_sto_volatility:za,dynamic_constraint:Ga,multiple_constraints_same_var:Wa,multithreaded:Xa,n010:Ja,n050:Ya,n100:Za,n500:Qa,assume_normal:el,observe_bernoulli:nl,observe_categorical:tl,observe_index:rl,observe_literal:ol,observe_multivariate:sl,observe_submodel:il,observe_von_mises:al,ordinary_diffeq:ll,pdb_eight_schools_centered:cl,pdb_eight_schools_noncentered:ul,assume_submodel:fl,assume_wishart:dl,broadcast_macro:_l,call_C:ml,control_flow:pl},hl="1.18.0",vl="1.5.0",bl="5.10.0",yl="0.13.6",wl="0.4.5",El="0.1.42",Dl="4.4.0",Ml="0.8.3",xl="0.8.9",Tl="0.7.0",Sl="0.4.1",Nl="1.1.3",Al="2.5.0",kl="1.1.2",Fl="0.4.0",Rl="0.5.4",Ol="3.5.1+1",Cl="7.22.0",Il="1.12.0",Ll="1.11.0",Pl="1.1.2",Vl="0.5.2",Bl="1.1.0",jl="0.4.8",Ul="0.5.1",$l="0.4.6",ql="1.11.0",Hl="0.1.1",Kl="0.15.12",zl="0.1.9",Gl="0.1.6",Wl="1.6.0",Xl="1.2.2",Jl="0.5.0",Yl="0.2.7",Zl="0.10.15",Ql="0.3.14",ec="1.72.6",nc="1.26.0",tc="1.3.1",rc="0.1.10",oc="0.10.43",sc="0.10.4+0",ic="0.1.13",ac="0.7.8",lc="3.31.0",cc="0.12.1",uc="0.11.0",fc="0.13.1",dc="1.0.3",_c="0.2.4",mc="0.3.1",pc="1.0.0",gc="4.18.1",hc="1.1.1+0",vc="0.1.2",bc="0.2.3",yc="2.5.0",wc="0.1.2",Ec="1.6.0",Dc="0.1.3",Mc="0.3.1",xc="4.1.1",Tc="1.16.0",Sc="0.7.13",Nc="1.8.1",Ac="0.18.22",kc="1.0.0",Fc="1.11.0",Rc="0.1.2",Oc="1.9.1",Cc="0.4.0",Ic="6.191.0",Lc="4.10.1",Pc="5.24.1",Vc="1.1.0",Bc="1.15.1",jc="0.7.11",Uc="0.4.26",$c="1.11.0",qc="0.25.122",Hc="0.6.58",Kc="0.9.5",zc="1.6.0",Gc="0.38.9",Wc="2.0.0",Xc="1.0.5",Jc="0.13.102",Yc="0.8.16",Zc="0.0.213+0",Qc="0.1.11",eu="1.27.0",nu="0.1.10",tu="0.10.14",ru="1.10.0",ou="3.3.11+0",su="0.2.2",iu="0.1.1",au="0.3.5",lu="0.3.2",cu="1.1.0",uu="1.2.0",fu="1.17.1",du="0.9.24",_u="1.11.0",mu="1.15.0",pu="2.29.0",gu="0.12.33",hu="0.8.5",vu="1.3.0",bu="0.1.2",yu="1.1.3",wu="0.1.3",Eu="0.5.2",Du="1.11.0",Mu="0.2.0",xu="1.7.3",Tu="0.6.2",Su="0.5.6",Nu="1.3.1",Au="1.13.1",ku="0.17.2",Fu="1.14.6+0",Ru="1.10.19",Ou="0.2.0",Cu="2.12.2+0",Iu="0.3.28",Lu="0.4.15",Pu="0.1.1",Vu="0.1.7",Bu="0.10.5",ju="0.3.8",Uu="0.1.5",$u="0.3.1",qu="1.4.5",Hu="2025.2.0+0",Ku="1.11.0",zu="0.7.0",Gu="0.16.2",Wu="0.7.12",Xu="0.1.17",Ju="1.3.1",Yu="0.2.6",Zu="1.10.0",Qu="1.0.0",ef="0.5.15",nf="1.7.1",tf="1.14.3",rf="0.2.1",of="0.2.4",sf="0.9.39",af="0.6.10",lf="0.10.2",cf="9.4.4",uf="0.0.38+0",ff="1.4.0",df="0.1.17",_f="2.9.0",mf="1.11.0",pf="0.3.1",gf="0.2.1",hf="0.6.4",vf="8.6.0+0",bf="1.11.0",yf="1.7.2+0",wf="1.11.0+1",Ef="0.9.1+6",Df="1.11.0",Mf="1.18.0+0",xf="0.9.10",Tf="0.1.4",Sf="7.4.0",Nf="1.11.0",Af="3.46.1",kf="2.2.0",Ff="1.13.1",Rf="0.3.29",Of="1.11.0",Cf="1.2.0",If="0.10.7",Lf="7.6.0",Pf="0.3.15",Vf="2025.2.0+0",Bf="1.0.0",jf="0.7.18",Uf="1.12.0",$f="0.4.17",qf="0.4.8",Hf="4.3.2+0",Kf="0.1.11",zf="5.5.4+0",Gf="0.5.16",Wf="0.1.8",Xf="0.4.2",Jf="1.11.0",Yf="0.1.4",Zf="1.1.9",Qf="2.28.6+0",ed="0.2.0",nd="10.1.4+3",td="1.2.0",rd="2.1.0",od="1.11.0",sd="0.4.175",id="0.3.4",ad="0.3.7",ld="2023.12.12",cd="0.2.4",ud="0.10.3",fd="7.10.0",dd="0.9.31",_d="0.4.3",md="1.1.3",pd="0.1.5",gd="0.10.5",hd="1.0.0",vd="1.2.0",bd="4.12.0",yd="2.2.0",wd="1.10.0",Ed="1.11.0",Dd="1.6.0",Md="0.5.0",xd="1.17.0",Td="0.3.27+1",Sd="0.8.5+0",Nd="5.0.8+0",Ad="1.6.0",kd="3.5.4+0",Fd="0.5.6+0",Rd="1.13.2",Od="0.4.6",Cd="5.1.0",Id="4.0.2",Ld="0.4.8",Pd="1.8.1",Vd="6.103.0",Bd="1.5.0",jd="1.10.1",Ud="1.36.0",$d="1.8.0",qd="1.16.1",Hd="1.4.0",Kd="1.8.0",zd="1.9.0",Gd="1.16.0",Wd="1.4.0",Xd="1.5.0",Jd="1.5.0",Yd="1.7.0",Zd="1.6.0",Qd="1.6.0",e_="1.7.0",n_="1.15.0",t_="1.4.0",r_="1.6.0",o_="1.4.0",s_="1.4.0",i_="1.5.0",a_="1.18.1",l_="1.7.0",c_="1.7.0",u_="1.6.0",f_="1.4.0",d_="1.7.0",__="1.5.0",m_="1.6.0",p_="0.11.36",g_="1.0.2",h_="0.5.12",v_="0.12.3",b_="2.8.3",y_="1.2.1",w_="0.3.6",E_="1.11.0",D_="0.4.7",M_="0.7.18",x_="0.2.2",T_="1.4.3",S_="0.2.4",N_="0.4.34",A_="1.2.1",k_="1.5.0",F_="0.2.0",R_="3.1.0",O_="1.11.0",C_="0.1.5",I_="1.11.0",L_="1.3.0",P_="2.11.2",V_="1.11.0",B_="1.11.0",j_="1.7.1",U_="1.6.0",$_="0.3.2",q_="0.4.5",H_="0.1.0",K_="1.3.4",z_="3.39.0",G_="1.2.2",W_="1.3.1",X_="1.1.1",J_="1.16.1",Y_="1.4.2",Z_="0.9.0",Q_="0.5.1+0",e1="2.2.10",n1="0.5.16",t1="0.7.0",r1="0.1.0",o1="0.5.2",s1="2.126.0",i1="0.1.11",a1="1.5.0",l1="1.10.0",c1="1.0.0",u1="7.90.0",f1="1.7.0",d1="3.0.0",_1="1.5.0",m1="1.3.0",p1="1.4.8",g1="1.11.0",h1="1.1.2",v1="1.11.0",b1="0.1.0",y1="1.2.0",w1="2.9.0",E1="0.9.5",D1="1.1.0",M1="1.11.0",x1="1.2.2",T1="1.11.0",S1="1.1.3",N1="0.1.2",A1="0.4.23",k1="2.6.1",F1="0.1.15",R1="0.1.2",O1="1.3.1",C1="1.8.0",I1="1.9.15",L1="1.4.4",P1="3.5.0",V1="1.11.1",B1="1.7.1",j1="0.34.8",U1="1.5.2",$1="0.5.8",q1="0.4.1",H1="0.3.7",K1="0.4.1",z1="0.7.2",G1="0.3.1",W1="1.11.0",X1="2.6.0",J1="1.11.0",Y1=null,Z1="7.7.0+0",Q1="0.3.46",e0="1.0.3",n0="1.0.1",t0="1.12.1",r0="1.10.0",o0="0.1.1",s0="0.1.7",i0="1.11.0",a0="0.5.5",l0="0.5.29",c0="0.2.38",u0="0.1.6",f0="0.11.3",d0="0.4.85",_0="1.4.0",m0="0.41.1",p0="1.6.1",g0="1.11.0",h0="1.0.2",v0="1.11.0",b0="1.25.1",y0="1.0.0",w0="0.3.0",E0="1.4.2",D0="1.0.0",M0="1.6.1",x0="2.13.9+0",T0="0.18.1+0",S0="0.10.1",N0="1.2.13+1",A0="0.7.10",k0="0.2.7",F0="1.1.4+0",R0="5.11.0+0",O0="1.59.0+0",C0="2022.0.0+1",I0="17.4.0+2",L0={ADTypes:hl,AbstractFFTs:vl,AbstractMCMC:bl,AbstractPPL:yl,AbstractTrees:wl,Accessors:El,Adapt:Dl,AdvancedHMC:Ml,AdvancedMH:xl,AdvancedPS:Tl,AdvancedVI:Sl,AliasTables:Nl,ArgCheck:Al,ArgTools:kl,ArnoldiMethod:Fl,Arpack:Rl,Arpack_jll:Ol,ArrayInterface:Cl,ArrayLayouts:Il,Artifacts:Ll,Atomix:Pl,AtomsBase:Vl,AxisAlgorithms:Bl,AxisArrays:jl,BFloat16s:Ul,BangBang:$l,Base64:ql,Baselet:Hl,Bijectors:Kl,BitFlags:zl,BitTwiddlingConvenienceFunctions:Gl,BracketingNonlinearSolve:Wl,BufferedStreams:Xl,CEnum:Jl,CPUSummary:Yl,CSV:Zl,Cassette:Ql,ChainRules:ec,ChainRulesCore:nc,Chairmarks:tc,ChangesOfVariables:rc,Chemfiles:oc,Chemfiles_jll:sc,CloseOpenIntervals:ic,CodecZlib:ac,ColorSchemes:lc,ColorTypes:cc,ColorVectorSpace:uc,Colors:fc,Combinatorics:dc,CommonSolve:_c,CommonSubexpressions:mc,CommonWorldInvalidations:pc,Compat:gc,CompilerSupportLibraries_jll:hc,CompositionsBase:vc,ConcreteStructs:bc,ConcurrentUtilities:yc,ConsoleProgressMonitor:wc,ConstructionBase:Ec,ContextVariablesX:Dc,CpuId:Mc,Crayons:xc,DataAPI:Tc,DataDeps:Sc,DataFrames:Nc,DataStructures:Ac,DataValueInterfaces:kc,Dates:Fc,DefineSingletons:Rc,DelimitedFiles:Oc,DensityInterface:Cc,DiffEqBase:Ic,DiffEqCallbacks:Lc,DiffEqNoiseProcess:Pc,DiffResults:Vc,DiffRules:Bc,DifferentiationInterface:jc,DispatchDoctor:Uc,Distributed:$c,Distributions:qc,DistributionsAD:Hc,DocStringExtensions:Kc,Downloads:zc,DynamicPPL:Gc,EllipticalSliceSampling:Wc,EnumX:Xc,Enzyme:Jc,EnzymeCore:Yc,Enzyme_jll:Zc,ExceptionUnwrapping:Qc,ExponentialUtilities:eu,ExprTools:nu,ExproniconLite:tu,FFTW:ru,FFTW_jll:ou,FLoops:su,FLoopsBase:iu,FastBroadcast:au,FastClosures:lu,FastGaussQuadrature:cu,FastPower:uu,FileIO:fu,FilePathsBase:du,FileWatching:_u,FillArrays:mu,FiniteDiff:pu,FiniteDifferences:gu,FixedPointNumbers:hu,ForwardDiff:vu,FunctionProperties:bu,FunctionWrappers:yu,FunctionWrappersWrappers:wu,Functors:Eu,Future:Du,GPUArraysCore:Mu,GPUCompiler:xu,GZip:Tu,GenericSchur:Su,Glob:Nu,Graphs:Au,HDF5:ku,HDF5_jll:Fu,HTTP:Ru,HashArrayMappedTries:Ou,Hwloc_jll:Cu,HypergeometricFunctions:Iu,IRTools:Lu,IfElse:Pu,ImageBase:Vu,ImageCore:Bu,ImageShow:ju,Inflate:Uu,InitialValues:$u,InlineStrings:qu,IntelOpenMP_jll:Hu,InteractiveUtils:Ku,InternedStrings:zu,Interpolations:Gu,IntervalSets:Wu,InverseFunctions:Xu,InvertedIndices:Ju,IrrationalConstants:Yu,IterTools:Zu,IteratorInterfaceExtensions:Qu,JLD2:ef,JLLWrappers:nf,JSON:"1.2.1",JSON3:tf,Jieko:rf,JuliaVariables:of,KernelAbstractions:sf,KernelDensity:af,Krylov:lf,LLVM:cf,LLVMExtra_jll:uf,LaTeXStrings:ff,LayoutPointers:df,LazyArrays:_f,LazyArtifacts:mf,LazyModules:pf,LeftChildRightSiblingTrees:gf,LibCURL:hf,LibCURL_jll:vf,LibGit2:bf,LibGit2_jll:yf,LibSSH2_jll:wf,LibTracyClient_jll:Ef,Libdl:Df,Libiconv_jll:Mf,Libtask:xf,LineSearch:Tf,LineSearches:Sf,LinearAlgebra:Nf,LinearSolve:Af,LogDensityProblems:kf,LogDensityProblemsAD:Ff,LogExpFunctions:Rf,Logging:Of,LoggingExtras:Cf,MAT:If,MCMCChains:Lf,MCMCDiagnosticTools:Pf,MKL_jll:Vf,MLCore:Bf,MLDatasets:jf,MLJModelInterface:Uf,MLStyle:$f,MLUtils:qf,MPICH_jll:Hf,MPIPreferences:Kf,MPItrampoline_jll:zf,MacroTools:Gf,ManualMemory:Wf,MappedArrays:Xf,Markdown:Jf,MaybeInplace:Yf,MbedTLS:Zf,MbedTLS_jll:Qf,MicroCollections:ed,MicrosoftMPI_jll:nd,Missings:td,MistyClosures:rd,Mmap:od,Mooncake:sd,MosaicViews:id,Moshi:ad,MozillaCACerts_jll:ld,MuladdMacro:cd,MultivariateStats:ud,NLSolversBase:fd,NNlib:dd,NPZ:_d,NaNMath:md,NameResolution:pd,NamedArrays:gd,NaturalSort:hd,NetworkOptions:vd,NonlinearSolve:bd,NonlinearSolveBase:yd,NonlinearSolveFirstOrder:wd,NonlinearSolveQuasiNewton:Ed,NonlinearSolveSpectralMethods:Dd,ObjectFile:Md,OffsetArrays:xd,OpenBLAS_jll:Td,OpenLibm_jll:Sd,OpenMPI_jll:Nd,OpenSSL:Ad,OpenSSL_jll:kd,OpenSpecFun_jll:Fd,Optim:Rd,Optimisers:Od,Optimization:Cd,OptimizationBase:Id,OptimizationOptimJL:Ld,OrderedCollections:Pd,OrdinaryDiffEq:Vd,OrdinaryDiffEqAdamsBashforthMoulton:Bd,OrdinaryDiffEqBDF:jd,OrdinaryDiffEqCore:Ud,OrdinaryDiffEqDefault:$d,OrdinaryDiffEqDifferentiation:qd,OrdinaryDiffEqExplicitRK:Hd,OrdinaryDiffEqExponentialRK:Kd,OrdinaryDiffEqExtrapolation:zd,OrdinaryDiffEqFIRK:Gd,OrdinaryDiffEqFeagin:Wd,OrdinaryDiffEqFunctionMap:Xd,OrdinaryDiffEqHighOrderRK:Jd,OrdinaryDiffEqIMEXMultistep:Yd,OrdinaryDiffEqLinear:Zd,OrdinaryDiffEqLowOrderRK:Qd,OrdinaryDiffEqLowStorageRK:e_,OrdinaryDiffEqNonlinearSolve:n_,OrdinaryDiffEqNordsieck:t_,OrdinaryDiffEqPDIRK:r_,OrdinaryDiffEqPRK:o_,OrdinaryDiffEqQPRK:s_,OrdinaryDiffEqRKN:i_,OrdinaryDiffEqRosenbrock:a_,OrdinaryDiffEqSDIRK:l_,OrdinaryDiffEqSSPRK:c_,OrdinaryDiffEqStabilizedIRK:u_,OrdinaryDiffEqStabilizedRK:f_,OrdinaryDiffEqSymplecticRK:d_,OrdinaryDiffEqTsit5:__,OrdinaryDiffEqVerner:m_,PDMats:p_,PackageExtensionCompat:g_,PaddedViews:h_,Parameters:v_,Parsers:b_,PeriodicTable:y_,Pickle:w_,Pkg:E_,PoissonRandom:D_,Polyester:M_,PolyesterWeave:x_,PooledArrays:T_,PositiveFactorizations:S_,PreallocationTools:N_,PrecompileTools:A_,Preferences:k_,PrettyPrint:F_,PrettyTables:R_,Printf:O_,ProgressLogging:C_,ProgressMeter:I_,PtrArrays:L_,QuadGK:P_,REPL:V_,Random:B_,Random123:j_,RandomNumbers:U_,RangeArrays:$_,Ratios:q_,RealDot:H_,RecipesBase:K_,RecursiveArrayTools:z_,Reexport:G_,Requires:W_,ResettableStacks:X_,ReverseDiff:J_,Richardson:Y_,Rmath:Z_,Rmath_jll:Q_,Roots:e1,RuntimeGeneratedFunctions:n1,SHA:t1,SIMDTypes:r1,SSMProblems:o1,SciMLBase:s1,SciMLJacobianOperators:i1,SciMLLogging:a1,SciMLOperators:l1,SciMLPublic:c1,SciMLSensitivity:u1,SciMLStructures:f1,ScientificTypesBase:d1,ScopedValues:_1,Scratch:m1,SentinelArrays:p1,Serialization:g1,Setfield:h1,SharedArrays:v1,ShowCases:b1,SimpleBufferStream:y1,SimpleNonlinearSolve:w1,SimpleTraits:E1,SimpleUnPack:D1,Sockets:M1,SortingAlgorithms:x1,SparseArrays:T1,SparseConnectivityTracer:S1,SparseInverseSubset:N1,SparseMatrixColorings:A1,SpecialFunctions:k1,SplittablesBase:F1,StackViews:R1,Static:O1,StaticArrayInterface:C1,StaticArrays:I1,StaticArraysCore:L1,StatisticalTraits:P1,Statistics:V1,StatsAPI:B1,StatsBase:j1,StatsFuns:U1,StrideArraysCore:$1,StridedViews:q1,StringEncodings:H1,StringManipulation:K1,StructArrays:z1,StructIO:G1,StructTypes:W1,StructUtils:X1,StyledStrings:J1,SuiteSparse:Y1,SuiteSparse_jll:Z1,SymbolicIndexingInterface:Q1,TOML:e0,TableTraits:n0,Tables:t0,Tar:r0,TensorCore:o0,TerminalLoggers:s0,Test:i0,ThreadingUtilities:a0,TimerOutputs:l0,Tracker:c0,Tracy:u0,TranscodingStreams:f0,Transducers:d0,TruncatedStacktraces:_0,Turing:m0,URIs:p0,UUIDs:g0,UnPack:h0,Unicode:v0,Unitful:b0,UnitfulAtomic:y0,UnsafeAtomics:w0,WeakRefStrings:E0,WoodburyMatrices:D0,WorkerUtilities:M0,XML2_jll:x0,Xorg_libpciaccess_jll:T0,ZipFile:S0,Zlib_jll:N0,Zygote:A0,ZygoteRules:k0,libaec_jll:F0,libblastrampoline_jll:R0,nghttp2_jll:O0,oneTBB_jll:C0,p7zip_jll:I0};function yt(e){return[...e.entries()].sort(([n,t],[r,i])=>n.localeCompare(r))}var P0=pe('<tr><td class="svelte-7y9k9c"> </td><td class="version svelte-7y9k9c"> </td></tr>'),V0=pe('<table id="manifest" class="svelte-7y9k9c"><thead><tr><th class="svelte-7y9k9c">Package</th><th class="svelte-7y9k9c">Version</th></tr></thead><tbody></tbody></table>');function B0(e,n){vn(n,!1);let t=new Map;for(const[s,l]of Object.entries(L0))t.set(s,l===""?null:l);Lt();var r=V0(),i=we(X(r));_n(i,5,()=>yt(t),dn,(s,l)=>{let f=()=>I(l)[0],a=()=>I(l)[1];var c=P0(),p=X(c),_=X(p),u=we(p),g=X(u);Ee(()=>{Be(_,f()),Be(g,a()===null?"":`v${a()}`)}),re(s,c)}),re(e,r),bn()}function j0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ut,_r;function U0(){if(_r)return ut;_r=1;function e(o){return o instanceof Map?o.clear=o.delete=o.set=function(){throw new Error("map is read-only")}:o instanceof Set&&(o.add=o.clear=o.delete=function(){throw new Error("set is read-only")}),Object.freeze(o),Object.getOwnPropertyNames(o).forEach(d=>{const v=o[d],k=typeof v;(k==="object"||k==="function")&&!Object.isFrozen(v)&&e(v)}),o}class n{constructor(d){d.data===void 0&&(d.data={}),this.data=d.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(o,...d){const v=Object.create(null);for(const k in o)v[k]=o[k];return d.forEach(function(k){for(const K in k)v[K]=k[K]}),v}const i="</span>",s=o=>!!o.scope,l=(o,{prefix:d})=>{if(o.startsWith("language:"))return o.replace("language:","language-");if(o.includes(".")){const v=o.split(".");return[`${d}${v.shift()}`,...v.map((k,K)=>`${k}${"_".repeat(K+1)}`)].join(" ")}return`${d}${o}`};class f{constructor(d,v){this.buffer="",this.classPrefix=v.classPrefix,d.walk(this)}addText(d){this.buffer+=t(d)}openNode(d){if(!s(d))return;const v=l(d.scope,{prefix:this.classPrefix});this.span(v)}closeNode(d){s(d)&&(this.buffer+=i)}value(){return this.buffer}span(d){this.buffer+=`<span class="${d}">`}}const a=(o={})=>{const d={children:[]};return Object.assign(d,o),d};class c{constructor(){this.rootNode=a(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(d){this.top.children.push(d)}openNode(d){const v=a({scope:d});this.add(v),this.stack.push(v)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(d){return this.constructor._walk(d,this.rootNode)}static _walk(d,v){return typeof v=="string"?d.addText(v):v.children&&(d.openNode(v),v.children.forEach(k=>this._walk(d,k)),d.closeNode(v)),d}static _collapse(d){typeof d!="string"&&d.children&&(d.children.every(v=>typeof v=="string")?d.children=[d.children.join("")]:d.children.forEach(v=>{c._collapse(v)}))}}class p extends c{constructor(d){super(),this.options=d}addText(d){d!==""&&this.add(d)}startScope(d){this.openNode(d)}endScope(){this.closeNode()}__addSublanguage(d,v){const k=d.root;v&&(k.scope=`language:${v}`),this.add(k)}toHTML(){return new f(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(o){return o?typeof o=="string"?o:o.source:null}function u(o){return N("(?=",o,")")}function g(o){return N("(?:",o,")*")}function h(o){return N("(?:",o,")?")}function N(...o){return o.map(v=>_(v)).join("")}function R(o){const d=o[o.length-1];return typeof d=="object"&&d.constructor===Object?(o.splice(o.length-1,1),d):{}}function V(...o){return"("+(R(o).capture?"":"?:")+o.map(k=>_(k)).join("|")+")"}function H(o){return new RegExp(o.toString()+"|").exec("").length-1}function T(o,d){const v=o&&o.exec(d);return v&&v.index===0}const D=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function x(o,{joinWith:d}){let v=0;return o.map(k=>{v+=1;const K=v;let z=_(k),w="";for(;z.length>0;){const y=D.exec(z);if(!y){w+=z;break}w+=z.substring(0,y.index),z=z.substring(y.index+y[0].length),y[0][0]==="\\"&&y[1]?w+="\\"+String(Number(y[1])+K):(w+=y[0],y[0]==="("&&v++)}return w}).map(k=>`(${k})`).join(d)}const ee=/\b\B/,A="[a-zA-Z]\\w*",q="[a-zA-Z_]\\w*",Z="\\b\\d+(\\.\\d+)?",Te="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ge="\\b(0b[01]+)",He="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",on=(o={})=>{const d=/^#![ ]*\//;return o.binary&&(o.begin=N(d,/.*\b/,o.binary,/\b.*/)),r({scope:"meta",begin:d,end:/$/,relevance:0,"on:begin":(v,k)=>{v.index!==0&&k.ignoreMatch()}},o)},ne={begin:"\\\\[\\s\\S]",relevance:0},he={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ne]},Se={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ne]},Re={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},ve=function(o,d,v={}){const k=r({scope:"comment",begin:o,end:d,contains:[]},v);k.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const K=V("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return k.contains.push({begin:N(/[ ]+/,"(",K,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),k},Qn=ve("//","$"),sn=ve("/\\*","\\*/"),wn=ve("#","$"),Jr={scope:"number",begin:Z,relevance:0},Yr={scope:"number",begin:Te,relevance:0},Zr={scope:"number",begin:ge,relevance:0},Qr={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ne,{begin:/\[/,end:/\]/,relevance:0,contains:[ne]}]},eo={scope:"title",begin:A,relevance:0},no={scope:"title",begin:q,relevance:0},to={begin:"\\.\\s*"+q,relevance:0};var En=Object.freeze({__proto__:null,APOS_STRING_MODE:he,BACKSLASH_ESCAPE:ne,BINARY_NUMBER_MODE:Zr,BINARY_NUMBER_RE:ge,COMMENT:ve,C_BLOCK_COMMENT_MODE:sn,C_LINE_COMMENT_MODE:Qn,C_NUMBER_MODE:Yr,C_NUMBER_RE:Te,END_SAME_AS_BEGIN:function(o){return Object.assign(o,{"on:begin":(d,v)=>{v.data._beginMatch=d[1]},"on:end":(d,v)=>{v.data._beginMatch!==d[1]&&v.ignoreMatch()}})},HASH_COMMENT_MODE:wn,IDENT_RE:A,MATCH_NOTHING_RE:ee,METHOD_GUARD:to,NUMBER_MODE:Jr,NUMBER_RE:Z,PHRASAL_WORDS_MODE:Re,QUOTE_STRING_MODE:Se,REGEXP_MODE:Qr,RE_STARTERS_RE:He,SHEBANG:on,TITLE_MODE:eo,UNDERSCORE_IDENT_RE:q,UNDERSCORE_TITLE_MODE:no});function ro(o,d){o.input[o.index-1]==="."&&d.ignoreMatch()}function oo(o,d){o.className!==void 0&&(o.scope=o.className,delete o.className)}function so(o,d){d&&o.beginKeywords&&(o.begin="\\b("+o.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",o.__beforeBegin=ro,o.keywords=o.keywords||o.beginKeywords,delete o.beginKeywords,o.relevance===void 0&&(o.relevance=0))}function io(o,d){Array.isArray(o.illegal)&&(o.illegal=V(...o.illegal))}function ao(o,d){if(o.match){if(o.begin||o.end)throw new Error("begin & end are not supported with match");o.begin=o.match,delete o.match}}function lo(o,d){o.relevance===void 0&&(o.relevance=1)}const co=(o,d)=>{if(!o.beforeMatch)return;if(o.starts)throw new Error("beforeMatch cannot be used with starts");const v=Object.assign({},o);Object.keys(o).forEach(k=>{delete o[k]}),o.keywords=v.keywords,o.begin=N(v.beforeMatch,u(v.begin)),o.starts={relevance:0,contains:[Object.assign(v,{endsParent:!0})]},o.relevance=0,delete v.beforeMatch},uo=["of","and","for","in","not","or","if","then","parent","list","value"],fo="keyword";function Pt(o,d,v=fo){const k=Object.create(null);return typeof o=="string"?K(v,o.split(" ")):Array.isArray(o)?K(v,o):Object.keys(o).forEach(function(z){Object.assign(k,Pt(o[z],d,z))}),k;function K(z,w){d&&(w=w.map(y=>y.toLowerCase())),w.forEach(function(y){const S=y.split("|");k[S[0]]=[z,_o(S[0],S[1])]})}}function _o(o,d){return d?Number(d):mo(o)?0:1}function mo(o){return uo.includes(o.toLowerCase())}const Vt={},Ke=o=>{console.error(o)},Bt=(o,...d)=>{console.log(`WARN: ${o}`,...d)},Je=(o,d)=>{Vt[`${o}/${d}`]||(console.log(`Deprecated as of ${o}. ${d}`),Vt[`${o}/${d}`]=!0)},Dn=new Error;function jt(o,d,{key:v}){let k=0;const K=o[v],z={},w={};for(let y=1;y<=d.length;y++)w[y+k]=K[y],z[y+k]=!0,k+=H(d[y-1]);o[v]=w,o[v]._emit=z,o[v]._multi=!0}function po(o){if(Array.isArray(o.begin)){if(o.skip||o.excludeBegin||o.returnBegin)throw Ke("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Dn;if(typeof o.beginScope!="object"||o.beginScope===null)throw Ke("beginScope must be object"),Dn;jt(o,o.begin,{key:"beginScope"}),o.begin=x(o.begin,{joinWith:""})}}function go(o){if(Array.isArray(o.end)){if(o.skip||o.excludeEnd||o.returnEnd)throw Ke("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Dn;if(typeof o.endScope!="object"||o.endScope===null)throw Ke("endScope must be object"),Dn;jt(o,o.end,{key:"endScope"}),o.end=x(o.end,{joinWith:""})}}function ho(o){o.scope&&typeof o.scope=="object"&&o.scope!==null&&(o.beginScope=o.scope,delete o.scope)}function vo(o){ho(o),typeof o.beginScope=="string"&&(o.beginScope={_wrap:o.beginScope}),typeof o.endScope=="string"&&(o.endScope={_wrap:o.endScope}),po(o),go(o)}function bo(o){function d(w,y){return new RegExp(_(w),"m"+(o.case_insensitive?"i":"")+(o.unicodeRegex?"u":"")+(y?"g":""))}class v{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(y,S){S.position=this.position++,this.matchIndexes[this.matchAt]=S,this.regexes.push([S,y]),this.matchAt+=H(y)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const y=this.regexes.map(S=>S[1]);this.matcherRe=d(x(y,{joinWith:"|"}),!0),this.lastIndex=0}exec(y){this.matcherRe.lastIndex=this.lastIndex;const S=this.matcherRe.exec(y);if(!S)return null;const J=S.findIndex((an,nt)=>nt>0&&an!==void 0),G=this.matchIndexes[J];return S.splice(0,J),Object.assign(S,G)}}class k{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(y){if(this.multiRegexes[y])return this.multiRegexes[y];const S=new v;return this.rules.slice(y).forEach(([J,G])=>S.addRule(J,G)),S.compile(),this.multiRegexes[y]=S,S}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(y,S){this.rules.push([y,S]),S.type==="begin"&&this.count++}exec(y){const S=this.getMatcher(this.regexIndex);S.lastIndex=this.lastIndex;let J=S.exec(y);if(this.resumingScanAtSamePosition()&&!(J&&J.index===this.lastIndex)){const G=this.getMatcher(0);G.lastIndex=this.lastIndex+1,J=G.exec(y)}return J&&(this.regexIndex+=J.position+1,this.regexIndex===this.count&&this.considerAll()),J}}function K(w){const y=new k;return w.contains.forEach(S=>y.addRule(S.begin,{rule:S,type:"begin"})),w.terminatorEnd&&y.addRule(w.terminatorEnd,{type:"end"}),w.illegal&&y.addRule(w.illegal,{type:"illegal"}),y}function z(w,y){const S=w;if(w.isCompiled)return S;[oo,ao,vo,co].forEach(G=>G(w,y)),o.compilerExtensions.forEach(G=>G(w,y)),w.__beforeBegin=null,[so,io,lo].forEach(G=>G(w,y)),w.isCompiled=!0;let J=null;return typeof w.keywords=="object"&&w.keywords.$pattern&&(w.keywords=Object.assign({},w.keywords),J=w.keywords.$pattern,delete w.keywords.$pattern),J=J||/\w+/,w.keywords&&(w.keywords=Pt(w.keywords,o.case_insensitive)),S.keywordPatternRe=d(J,!0),y&&(w.begin||(w.begin=/\B|\b/),S.beginRe=d(S.begin),!w.end&&!w.endsWithParent&&(w.end=/\B|\b/),w.end&&(S.endRe=d(S.end)),S.terminatorEnd=_(S.end)||"",w.endsWithParent&&y.terminatorEnd&&(S.terminatorEnd+=(w.end?"|":"")+y.terminatorEnd)),w.illegal&&(S.illegalRe=d(w.illegal)),w.contains||(w.contains=[]),w.contains=[].concat(...w.contains.map(function(G){return yo(G==="self"?w:G)})),w.contains.forEach(function(G){z(G,S)}),w.starts&&z(w.starts,y),S.matcher=K(S),S}if(o.compilerExtensions||(o.compilerExtensions=[]),o.contains&&o.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return o.classNameAliases=r(o.classNameAliases||{}),z(o)}function Ut(o){return o?o.endsWithParent||Ut(o.starts):!1}function yo(o){return o.variants&&!o.cachedVariants&&(o.cachedVariants=o.variants.map(function(d){return r(o,{variants:null},d)})),o.cachedVariants?o.cachedVariants:Ut(o)?r(o,{starts:o.starts?r(o.starts):null}):Object.isFrozen(o)?r(o):o}var wo="11.11.1";class Eo extends Error{constructor(d,v){super(d),this.name="HTMLInjectionError",this.html=v}}const et=t,$t=r,qt=Symbol("nomatch"),Do=7,Ht=function(o){const d=Object.create(null),v=Object.create(null),k=[];let K=!0;const z="Could not find the language '{}', did you forget to load/include a language module?",w={disableAutodetect:!0,name:"Plain text",contains:[]};let y={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:p};function S(m){return y.noHighlightRe.test(m)}function J(m){let M=m.className+" ";M+=m.parentNode?m.parentNode.className:"";const C=y.languageDetectRe.exec(M);if(C){const j=Oe(C[1]);return j||(Bt(z.replace("{}",C[1])),Bt("Falling back to no-highlight mode for this block.",m)),j?C[1]:"no-highlight"}return M.split(/\s+/).find(j=>S(j)||Oe(j))}function G(m,M,C){let j="",W="";typeof M=="object"?(j=m,C=M.ignoreIllegals,W=M.language):(Je("10.7.0","highlight(lang, code, ...args) has been deprecated."),Je("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),W=m,j=M),C===void 0&&(C=!0);const _e={code:j,language:W};xn("before:highlight",_e);const Ce=_e.result?_e.result:an(_e.language,_e.code,C);return Ce.code=_e.code,xn("after:highlight",Ce),Ce}function an(m,M,C,j){const W=Object.create(null);function _e(b,E){return b.keywords[E]}function Ce(){if(!F.keywords){Y.addText(U);return}let b=0;F.keywordPatternRe.lastIndex=0;let E=F.keywordPatternRe.exec(U),O="";for(;E;){O+=U.substring(b,E.index);const L=ye.case_insensitive?E[0].toLowerCase():E[0],Q=_e(F,L);if(Q){const[Ne,jo]=Q;if(Y.addText(O),O="",W[L]=(W[L]||0)+1,W[L]<=Do&&(Nn+=jo),Ne.startsWith("_"))O+=E[0];else{const Uo=ye.classNameAliases[Ne]||Ne;be(E[0],Uo)}}else O+=E[0];b=F.keywordPatternRe.lastIndex,E=F.keywordPatternRe.exec(U)}O+=U.substring(b),Y.addText(O)}function Tn(){if(U==="")return;let b=null;if(typeof F.subLanguage=="string"){if(!d[F.subLanguage]){Y.addText(U);return}b=an(F.subLanguage,U,!0,Zt[F.subLanguage]),Zt[F.subLanguage]=b._top}else b=tt(U,F.subLanguage.length?F.subLanguage:null);F.relevance>0&&(Nn+=b.relevance),Y.__addSublanguage(b._emitter,b.language)}function ae(){F.subLanguage!=null?Tn():Ce(),U=""}function be(b,E){b!==""&&(Y.startScope(E),Y.addText(b),Y.endScope())}function Wt(b,E){let O=1;const L=E.length-1;for(;O<=L;){if(!b._emit[O]){O++;continue}const Q=ye.classNameAliases[b[O]]||b[O],Ne=E[O];Q?be(Ne,Q):(U=Ne,Ce(),U=""),O++}}function Xt(b,E){return b.scope&&typeof b.scope=="string"&&Y.openNode(ye.classNameAliases[b.scope]||b.scope),b.beginScope&&(b.beginScope._wrap?(be(U,ye.classNameAliases[b.beginScope._wrap]||b.beginScope._wrap),U=""):b.beginScope._multi&&(Wt(b.beginScope,E),U="")),F=Object.create(b,{parent:{value:F}}),F}function Jt(b,E,O){let L=T(b.endRe,O);if(L){if(b["on:end"]){const Q=new n(b);b["on:end"](E,Q),Q.isMatchIgnored&&(L=!1)}if(L){for(;b.endsParent&&b.parent;)b=b.parent;return b}}if(b.endsWithParent)return Jt(b.parent,E,O)}function Io(b){return F.matcher.regexIndex===0?(U+=b[0],1):(it=!0,0)}function Lo(b){const E=b[0],O=b.rule,L=new n(O),Q=[O.__beforeBegin,O["on:begin"]];for(const Ne of Q)if(Ne&&(Ne(b,L),L.isMatchIgnored))return Io(E);return O.skip?U+=E:(O.excludeBegin&&(U+=E),ae(),!O.returnBegin&&!O.excludeBegin&&(U=E)),Xt(O,b),O.returnBegin?0:E.length}function Po(b){const E=b[0],O=M.substring(b.index),L=Jt(F,b,O);if(!L)return qt;const Q=F;F.endScope&&F.endScope._wrap?(ae(),be(E,F.endScope._wrap)):F.endScope&&F.endScope._multi?(ae(),Wt(F.endScope,b)):Q.skip?U+=E:(Q.returnEnd||Q.excludeEnd||(U+=E),ae(),Q.excludeEnd&&(U=E));do F.scope&&Y.closeNode(),!F.skip&&!F.subLanguage&&(Nn+=F.relevance),F=F.parent;while(F!==L.parent);return L.starts&&Xt(L.starts,b),Q.returnEnd?0:E.length}function Vo(){const b=[];for(let E=F;E!==ye;E=E.parent)E.scope&&b.unshift(E.scope);b.forEach(E=>Y.openNode(E))}let Sn={};function Yt(b,E){const O=E&&E[0];if(U+=b,O==null)return ae(),0;if(Sn.type==="begin"&&E.type==="end"&&Sn.index===E.index&&O===""){if(U+=M.slice(E.index,E.index+1),!K){const L=new Error(`0 width match regex (${m})`);throw L.languageName=m,L.badRule=Sn.rule,L}return 1}if(Sn=E,E.type==="begin")return Lo(E);if(E.type==="illegal"&&!C){const L=new Error('Illegal lexeme "'+O+'" for mode "'+(F.scope||"<unnamed>")+'"');throw L.mode=F,L}else if(E.type==="end"){const L=Po(E);if(L!==qt)return L}if(E.type==="illegal"&&O==="")return U+=`
`,1;if(st>1e5&&st>E.index*3)throw new Error("potential infinite loop, way more iterations than matches");return U+=O,O.length}const ye=Oe(m);if(!ye)throw Ke(z.replace("{}",m)),new Error('Unknown language: "'+m+'"');const Bo=bo(ye);let ot="",F=j||Bo;const Zt={},Y=new y.__emitter(y);Vo();let U="",Nn=0,ze=0,st=0,it=!1;try{if(ye.__emitTokens)ye.__emitTokens(M,Y);else{for(F.matcher.considerAll();;){st++,it?it=!1:F.matcher.considerAll(),F.matcher.lastIndex=ze;const b=F.matcher.exec(M);if(!b)break;const E=M.substring(ze,b.index),O=Yt(E,b);ze=b.index+O}Yt(M.substring(ze))}return Y.finalize(),ot=Y.toHTML(),{language:m,value:ot,relevance:Nn,illegal:!1,_emitter:Y,_top:F}}catch(b){if(b.message&&b.message.includes("Illegal"))return{language:m,value:et(M),illegal:!0,relevance:0,_illegalBy:{message:b.message,index:ze,context:M.slice(ze-100,ze+100),mode:b.mode,resultSoFar:ot},_emitter:Y};if(K)return{language:m,value:et(M),illegal:!1,relevance:0,errorRaised:b,_emitter:Y,_top:F};throw b}}function nt(m){const M={value:et(m),illegal:!1,relevance:0,_top:w,_emitter:new y.__emitter(y)};return M._emitter.addText(m),M}function tt(m,M){M=M||y.languages||Object.keys(d);const C=nt(m),j=M.filter(Oe).filter(Gt).map(ae=>an(ae,m,!1));j.unshift(C);const W=j.sort((ae,be)=>{if(ae.relevance!==be.relevance)return be.relevance-ae.relevance;if(ae.language&&be.language){if(Oe(ae.language).supersetOf===be.language)return 1;if(Oe(be.language).supersetOf===ae.language)return-1}return 0}),[_e,Ce]=W,Tn=_e;return Tn.secondBest=Ce,Tn}function Mo(m,M,C){const j=M&&v[M]||C;m.classList.add("hljs"),m.classList.add(`language-${j}`)}function rt(m){let M=null;const C=J(m);if(S(C))return;if(xn("before:highlightElement",{el:m,language:C}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(y.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),y.throwUnescapedHTML))throw new Eo("One of your code blocks includes unescaped HTML.",m.innerHTML);M=m;const j=M.textContent,W=C?G(j,{language:C,ignoreIllegals:!0}):tt(j);m.innerHTML=W.value,m.dataset.highlighted="yes",Mo(m,C,W.language),m.result={language:W.language,re:W.relevance,relevance:W.relevance},W.secondBest&&(m.secondBest={language:W.secondBest.language,relevance:W.secondBest.relevance}),xn("after:highlightElement",{el:m,result:W,text:j})}function xo(m){y=$t(y,m)}const To=()=>{Mn(),Je("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function So(){Mn(),Je("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Kt=!1;function Mn(){function m(){Mn()}if(document.readyState==="loading"){Kt||window.addEventListener("DOMContentLoaded",m,!1),Kt=!0;return}document.querySelectorAll(y.cssSelector).forEach(rt)}function No(m,M){let C=null;try{C=M(o)}catch(j){if(Ke("Language definition for '{}' could not be registered.".replace("{}",m)),K)Ke(j);else throw j;C=w}C.name||(C.name=m),d[m]=C,C.rawDefinition=M.bind(null,o),C.aliases&&zt(C.aliases,{languageName:m})}function Ao(m){delete d[m];for(const M of Object.keys(v))v[M]===m&&delete v[M]}function ko(){return Object.keys(d)}function Oe(m){return m=(m||"").toLowerCase(),d[m]||d[v[m]]}function zt(m,{languageName:M}){typeof m=="string"&&(m=[m]),m.forEach(C=>{v[C.toLowerCase()]=M})}function Gt(m){const M=Oe(m);return M&&!M.disableAutodetect}function Fo(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=M=>{m["before:highlightBlock"](Object.assign({block:M.el},M))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=M=>{m["after:highlightBlock"](Object.assign({block:M.el},M))})}function Ro(m){Fo(m),k.push(m)}function Oo(m){const M=k.indexOf(m);M!==-1&&k.splice(M,1)}function xn(m,M){const C=m;k.forEach(function(j){j[C]&&j[C](M)})}function Co(m){return Je("10.7.0","highlightBlock will be removed entirely in v12.0"),Je("10.7.0","Please use highlightElement now."),rt(m)}Object.assign(o,{highlight:G,highlightAuto:tt,highlightAll:Mn,highlightElement:rt,highlightBlock:Co,configure:xo,initHighlighting:To,initHighlightingOnLoad:So,registerLanguage:No,unregisterLanguage:Ao,listLanguages:ko,getLanguage:Oe,registerAliases:zt,autoDetection:Gt,inherit:$t,addPlugin:Ro,removePlugin:Oo}),o.debugMode=function(){K=!1},o.safeMode=function(){K=!0},o.versionString=wo,o.regex={concat:N,lookahead:u,either:V,optional:h,anyNumberOfTimes:g};for(const m in En)typeof En[m]=="object"&&e(En[m]);return Object.assign(o,En),o},Ye=Ht({});return Ye.newInstance=()=>Ht({}),ut=Ye,Ye.HighlightJS=Ye,Ye.default=Ye,ut}var $0=U0();const mr=j0($0);var q0=pe("<pre><code><!></code></pre>");function H0(e,n){const t=Un(n,["children","$$slots","$$events","$$legacy"]),r=Un(t,["code","highlighted","languageName","langtag"]);let i=je(n,"code",8),s=je(n,"highlighted",8),l=je(n,"languageName",8,"plaintext"),f=je(n,"langtag",8,!1);var a=q0();let c;var p=X(a);It(p,1,"",null,{},{hljs:!0});var _=X(p);{var u=h=>{var N=Ct(),R=Wn(N);si(R,s),re(h,N)},g=h=>{var N=Ys();Ee(()=>Be(N,i())),re(h,N)};vt(_,h=>{s()?h(u):h(g,!1)})}Ee(h=>c=_i(a,c,{"data-language":l(),...r,[fn]:h},"svelte-1w9vok"),[()=>({langtag:f()})],Nt),re(e,a)}function K0(e,n){const t=Un(n,["children","$$slots","$$events","$$legacy"]),r=Un(t,["language","code","langtag"]);vn(n,!1);let i=je(n,"language",8),s=je(n,"code",8),l=je(n,"langtag",8,!1);const f=bi();let a=At("");yi(()=>{I(a)&&f("highlight",{highlighted:I(a)})}),Ss(()=>(pt(i()),pt(s())),()=>{mr.registerLanguage(i().name,i().register),fe(a,mr.highlight(s(),{language:i().name}).value)}),Ns(),Lt();var c=Ct(),p=Wn(c);ii(p,n,"default",{get highlighted(){return I(a)}},_=>{H0(_,hi(()=>r,{get languageName(){return i().name},get langtag(){return l()},get highlighted(){return I(a)},get code(){return s()}}))}),re(e,c),bn()}function z0(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",s={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},l={keywords:s,illegal:/<\//},f={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},a={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},c={className:"subst",begin:/\$\(/,end:/\)/,keywords:s},p={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,c,p],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},u={className:"string",contains:[e.BACKSLASH_ESCAPE,c,p],begin:"`",end:"`"},g={className:"meta",begin:"@"+n},h={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return l.name="Julia",l.contains=[f,a,_,u,g,h,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],c.contains=l.contains,l}const G0={name:"julia",register:z0};var W0=pe('<th class="svelte-m8v9hl"> </th>'),X0=pe('<td class="svelte-m8v9hl"> </td>'),J0=pe('<a class="issue svelte-m8v9hl" target="_blank">(?)</a>'),Y0=pe('<td class="svelte-m8v9hl"><!> <span> </span></td>'),Z0=pe('<tr class="svelte-m8v9hl"><td class="svelte-m8v9hl"> <div class="model-definition svelte-m8v9hl"><!></div></td><!></tr>'),Q0=pe('<table id="results" class="svelte-m8v9hl"><thead><tr class="svelte-m8v9hl"><th class="svelte-m8v9hl">Model name \\\\ AD type</th><!></tr></thead><tbody></tbody></table>');function em(e,n){vn(n,!0);const t=[...n.data.keys()],r=n.data.get(t[0]).keys(),i="https://github.com/EnzymeAD/Enzyme.jl/issues/1995",l={assume_mvnormal__EnzymeForward:i,assume_wishart__EnzymeForward:i,multithreaded__Mooncake:"https://github.com/chalk-lab/Mooncake.jl/issues/570"};var f=Q0(),a=X(f),c=X(a),p=we(X(c));_n(p,17,()=>r,dn,(u,g)=>{var h=W0(),N=X(h);Ee(()=>Be(N,I(g))),re(u,h)});var _=we(a);_n(_,21,()=>yt(n.data),dn,(u,g)=>{let h=()=>I(g)[0],N=()=>I(g)[1];var R=Z0(),V=X(R),H=X(V),T=we(H),D=X(T);K0(D,{language:G0,get code(){return n.modelDefinitions[h()]}});var x=we(V);_n(x,17,()=>yt(N()),dn,(ee,A)=>{let q=()=>I(A)[0],Z=()=>I(A)[1];var Te=Ct(),ge=Wn(Te);{var He=ne=>{var he=X0(),Se=X(he);Ee(Re=>Be(Se,Re),[()=>Z().toFixed(3)]),re(ne,he)},on=ne=>{var he=Y0(),Se=X(he);{var Re=sn=>{var wn=J0();Ee(()=>bt(wn,"href",l[`${h()}__${q()}`])),re(sn,wn)};vt(Se,sn=>{l[`${h()}__${q()}`]&&sn(Re)})}var ve=we(Se,2),Qn=X(ve);Ee(()=>{It(ve,1,Kr(Z()),"svelte-m8v9hl"),Be(Qn,Z())}),re(ne,he)};vt(ge,ne=>{typeof Z()=="number"?ne(He):ne(on,!1)})}re(ee,Te)}),Ee(()=>Be(H,`${h()??""} `)),re(u,R)}),re(e,f),bn()}var nm=pe("<h3> </h3> <!>",1),tm=pe(`<div id="main-wrapper" class="svelte-3oks6t"><main class="svelte-3oks6t"><h1>Turing AD tests</h1> <p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p> <p>This page is intended as a brief overview of how different AD
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
                using ForwardDiff, i.e., ForwardDiff is by definition always
                'correct'.</li> <li>'<span class="error">error</span>' means that AD didn't run.</li> <li>Some of the 'wrong' or 'error' entries have question marks next
                to them. These will link to a GitHub issue or other page that
                describes the problem.</li></ul> <div class="warning svelte-3oks6t"><b>Note: The results here are run with Julia 1.11. Enzyme currently does not work on Julia 1.12.</b></div> <h2>Results</h2> <p><a href="adtests.json" target="_blank" download="">Download the raw data (JSON)</a></p> <!> <h2>Manifest</h2> <p>The tests above were run with the following package versions:</p> <!></main></div>`);function rm(e,n){vn(n,!1);let t=new Map;for(const[f,a]of Object.entries(ba)){let c=a.__category__;delete a.__category__;let p=new Map;for(const[_,u]of Object.entries(a))p.set(_,u);t.has(c)||t.set(c,new Map),t.get(c).set(f,p)}console.log(t),Lt();var r=tm(),i=X(r),s=we(X(i),16);_n(s,1,()=>t.entries(),dn,(f,a)=>{let c=()=>I(a)[0],p=()=>I(a)[1];var _=nm(),u=Wn(_),g=X(u),h=we(u,2);em(h,{get data(){return p()},modelDefinitions:gl}),Ee(()=>Be(g,c())),re(f,_)});var l=we(s,6);B0(l,{}),re(e,r),bn()}Zs(rm,{target:document.getElementById("app")});
