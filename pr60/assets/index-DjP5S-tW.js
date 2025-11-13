(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const Yt=!1;var Bn=Array.isArray,js=Array.prototype.indexOf,yt=Array.from,Us=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,gr=Object.getOwnPropertyDescriptors,$s=Object.prototype,Hs=Array.prototype,Et=Object.getPrototypeOf,Qt=Object.isExtensible;function ln(e){return typeof e=="function"}function Zs(e){return e()}function ut(e){for(var n=0;n<e.length;n++)e[n]()}const me=2,hr=4,Vn=8,wt=16,Ce=32,nn=64,Nn=128,ce=256,An=512,se=1024,Ee=2048,je=4096,Ne=8192,jn=16384,Gs=32768,Dt=65536,Ks=1<<17,qs=1<<19,pr=1<<20,ft=1<<21,qe=Symbol("$state"),vr=Symbol("legacy props"),Ws=Symbol("");function br(e){return e===this.v}function Js(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function xt(e){return!Js(e,this.v)}function Xs(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ys(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Qs(e){throw new Error("https://svelte.dev/e/effect_orphan")}function eo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function no(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function to(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ro(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function so(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function oo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let mn=!1,io=!1;function ao(){mn=!0}const Rt=1,Tt=2,yr=4,lo=8,co=16,uo=1,fo=2,Er=4,_o=8,mo=16,go=2,oe=Symbol(),ho="http://www.w3.org/1999/xhtml",po="@attach";function wr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let U=null;function er(e){U=e}function Un(e,n=!1,t){var r=U={p:U,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};mn&&!n&&(U.l={s:null,u:null,r1:[],r2:Qe(!1)}),Do(()=>{r.d=!0})}function $n(e){const n=U;if(n!==null){const l=n.e;if(l!==null){var t=P,r=B;n.e=null;try{for(var i=0;i<l.length;i++){var o=l[i];Ve(o.effect),we(o.reaction),At(o.fn)}}finally{Ve(t),we(r)}}U=n.p,n.m=!0}return{}}function Hn(){return!mn||U!==null&&U.l===null}function Ze(e){if(typeof e!="object"||e===null||qe in e)return e;const n=Et(e);if(n!==$s&&n!==Hs)return e;var t=new Map,r=Bn(e),i=Oe(0),o=B,l=d=>{var a=B;we(o);var c=d();return we(a),c};return r&&t.set("length",Oe(e.length)),new Proxy(e,{defineProperty(d,a,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&ro();var g=t.get(a);return g===void 0?(g=l(()=>Oe(c.value)),t.set(a,g)):fe(g,l(()=>Ze(c.value))),!0},deleteProperty(d,a){var c=t.get(a);if(c===void 0)a in d&&(t.set(a,l(()=>Oe(oe))),it(i));else{if(r&&typeof a=="string"){var g=t.get("length"),_=Number(a);Number.isInteger(_)&&_<g.v&&fe(g,_)}fe(c,oe),it(i)}return!0},get(d,a,c){var v;if(a===qe)return e;var g=t.get(a),_=a in d;if(g===void 0&&(!_||(v=Be(d,a))!=null&&v.writable)&&(g=l(()=>Oe(Ze(_?d[a]:oe))),t.set(a,g)),g!==void 0){var u=L(g);return u===oe?void 0:u}return Reflect.get(d,a,c)},getOwnPropertyDescriptor(d,a){var c=Reflect.getOwnPropertyDescriptor(d,a);if(c&&"value"in c){var g=t.get(a);g&&(c.value=L(g))}else if(c===void 0){var _=t.get(a),u=_==null?void 0:_.v;if(_!==void 0&&u!==oe)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(d,a){var u;if(a===qe)return!0;var c=t.get(a),g=c!==void 0&&c.v!==oe||Reflect.has(d,a);if(c!==void 0||P!==null&&(!g||(u=Be(d,a))!=null&&u.writable)){c===void 0&&(c=l(()=>Oe(g?Ze(d[a]):oe)),t.set(a,c));var _=L(c);if(_===oe)return!1}return g},set(d,a,c,g){var H;var _=t.get(a),u=a in d;if(r&&a==="length")for(var v=c;v<_.v;v+=1){var p=t.get(v+"");p!==void 0?fe(p,oe):v in d&&(p=l(()=>Oe(oe)),t.set(v+"",p))}_===void 0?(!u||(H=Be(d,a))!=null&&H.writable)&&(_=l(()=>Oe(void 0)),fe(_,l(()=>Ze(c))),t.set(a,_)):(u=_.v!==oe,fe(_,l(()=>Ze(c))));var S=Reflect.getOwnPropertyDescriptor(d,a);if(S!=null&&S.set&&S.set.call(g,c),!u){if(r&&typeof a=="string"){var F=t.get("length"),z=Number(a);Number.isInteger(z)&&z>=F.v&&fe(F,z+1)}it(i)}return!0},ownKeys(d){L(i);var a=Reflect.ownKeys(d).filter(_=>{var u=t.get(_);return u===void 0||u.v!==oe});for(var[c,g]of t)g.v!==oe&&!(c in d)&&a.push(c);return a},setPrototypeOf(){so()}})}function it(e,n=1){fe(e,e.v+n)}function dn(e){var n=me|Ee,t=B!==null&&(B.f&me)!==0?B:null;return P===null||t!==null&&(t.f&ce)!==0?n|=ce:P.f|=pr,{ctx:U,deps:null,effects:null,equals:br,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??P}}function Mt(e){const n=dn(e);return n.equals=xt,n}function Dr(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)Ae(n[t])}}function vo(e){for(var n=e.parent;n!==null;){if((n.f&me)===0)return n;n=n.parent}return null}function xr(e){var n,t=P;Ve(vo(e));try{Dr(e),n=Vr(e)}finally{Ve(t)}return n}function Rr(e){var n=xr(e),t=(Pe||(e.f&ce)!==0)&&e.deps!==null?je:se;de(e,t),e.equals(n)||(e.v=n,e.wv=zr())}const _n=new Map;function Qe(e,n){var t={f:0,v:e,reactions:null,equals:br,rv:0,wv:0};return t}function Oe(e,n){const t=Qe(e);return Ao(t),t}function St(e,n=!1){var r;const t=Qe(e);return n||(t.equals=xt),mn&&U!==null&&U.l!==null&&((r=U.l).s??(r.s=[])).push(t),t}function fe(e,n,t=!1){B!==null&&!ye&&Hn()&&(B.f&(me|wt))!==0&&!(re!=null&&re.includes(e))&&oo();let r=t?Ze(n):n;return dt(e,r)}function dt(e,n){if(!e.equals(n)){var t=e.v;gn?_n.set(e,n):_n.set(e,t),e.v=n,(e.f&me)!==0&&((e.f&Ee)!==0&&xr(e),de(e,(e.f&ce)===0?se:je)),e.wv=zr(),Tr(e,Ee),Hn()&&P!==null&&(P.f&se)!==0&&(P.f&(Ce|nn))===0&&(ue===null?Co([e]):ue.push(e))}return n}function nr(e,n=1){var t=L(e),r=n===1?t++:t--;return fe(e,t),r}function Tr(e,n){var t=e.reactions;if(t!==null)for(var r=Hn(),i=t.length,o=0;o<i;o++){var l=t[o],d=l.f;(d&Ee)===0&&(!r&&l===P||(de(l,n),(d&(se|ce))!==0&&((d&me)!==0?Tr(l,je):Jn(l))))}}let bo=!1;var tr,Mr,Sr,Nr;function yo(){if(tr===void 0){tr=window,Mr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Sr=Be(n,"firstChild").get,Nr=Be(n,"nextSibling").get,Qt(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Qt(t)&&(t.__t=void 0)}}function Zn(e=""){return document.createTextNode(e)}function Ge(e){return Sr.call(e)}function Gn(e){return Nr.call(e)}function J(e,n){return Ge(e)}function Nt(e,n){{var t=Ge(e);return t instanceof Comment&&t.data===""?Gn(t):t}}function Me(e,n=1,t=!1){let r=e;for(;n--;)r=Gn(r);return r}function Eo(e){e.textContent=""}function Ar(e){P===null&&B===null&&Qs(),B!==null&&(B.f&ce)!==0&&P===null&&Ys(),gn&&Xs()}function wo(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function tn(e,n,t,r=!0){var i=P,o={ctx:U,deps:null,nodes_start:null,nodes_end:null,f:e|Ee,first:null,fn:n,last:null,next:null,parent:i,prev:null,teardown:null,transitions:null,wv:0};if(t)try{Wn(o),o.f|=Gs}catch(a){throw Ae(o),a}else n!==null&&Jn(o);var l=t&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&(pr|Nn))===0;if(!l&&r&&(i!==null&&wo(o,i),B!==null&&(B.f&me)!==0)){var d=B;(d.effects??(d.effects=[])).push(o)}return o}function Do(e){const n=tn(Vn,null,!1);return de(n,se),n.teardown=e,n}function rr(e){Ar();var n=P!==null&&(P.f&Ce)!==0&&U!==null&&!U.m;if(n){var t=U;(t.e??(t.e=[])).push({fn:e,effect:P,reaction:B})}else{var r=At(e);return r}}function xo(e){return Ar(),Ct(e)}function Ro(e){const n=tn(nn,e,!0);return(t={})=>new Promise(r=>{t.outro?Cn(n,()=>{Ae(n),r(void 0)}):(Ae(n),r(void 0))})}function At(e){return tn(hr,e,!1)}function To(e,n){var t=U,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=Ct(()=>{e(),!r.ran&&(r.ran=!0,fe(t.l.r2,!0),Pn(n))})}function Mo(){var e=U;Ct(()=>{if(L(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&se)!==0&&de(t,je),rn(t)&&Wn(t),n.ran=!1}e.l.r2.v=!1}})}function Ct(e){return tn(Vn,e,!0)}function Se(e,n=[],t=dn){const r=n.map(t);return Kn(()=>e(...r.map(L)))}function Kn(e,n=0){return tn(Vn|wt|n,e,!0)}function en(e,n=!0){return tn(Vn|Ce,e,!0,n)}function Cr(e){var n=e.teardown;if(n!==null){const t=gn,r=B;sr(!0),we(null);try{n.call(null)}finally{sr(t),we(r)}}}function Fr(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&nn)!==0?t.parent=null:Ae(t,n),t=r}}function So(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&Ce)===0&&Ae(n),n=t}}function Ae(e,n=!0){var t=!1;(n||(e.f&qs)!==0)&&e.nodes_start!==null&&(Ir(e.nodes_start,e.nodes_end),t=!0),Fr(e,n&&!t),Ln(e,0),de(e,jn);var r=e.transitions;if(r!==null)for(const o of r)o.stop();Cr(e);var i=e.parent;i!==null&&i.first!==null&&kr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Ir(e,n){for(;e!==null;){var t=e===n?null:Gn(e);e.remove(),e=t}}function kr(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function Cn(e,n){var t=[];Ft(e,t,!0),Or(t,()=>{Ae(e),n&&n()})}function Or(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var i of e)i.out(r)}else n()}function Ft(e,n,t){if((e.f&Ne)===0){if(e.f^=Ne,e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&n.push(l);for(var r=e.first;r!==null;){var i=r.next,o=(r.f&Dt)!==0||(r.f&Ce)!==0;Ft(r,n,o?t:!1),r=i}}}function Fn(e){Lr(e,!0)}function Lr(e,n){if((e.f&Ne)!==0){e.f^=Ne,(e.f&se)===0&&(e.f^=se),rn(e)&&(de(e,Ee),Jn(e));for(var t=e.first;t!==null;){var r=t.next,i=(t.f&Dt)!==0||(t.f&Ce)!==0;Lr(t,i?n:!1),t=r}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||n)&&o.in()}}let In=[];function No(){var e=In;In=[],ut(e)}function It(e){In.length===0&&queueMicrotask(No),In.push(e)}let Rn=!1,_t=!1,kn=null,We=!1,gn=!1;function sr(e){gn=e}let Tn=[];let B=null,ye=!1;function we(e){B=e}let P=null;function Ve(e){P=e}let re=null;function Ao(e){B!==null&&B.f&ft&&(re===null?re=[e]:re.push(e))}let te=null,le=0,ue=null;function Co(e){ue=e}let Pr=1,On=0,Pe=!1;function zr(){return++Pr}function rn(e){var _;var n=e.f;if((n&Ee)!==0)return!0;if((n&je)!==0){var t=e.deps,r=(n&ce)!==0;if(t!==null){var i,o,l=(n&An)!==0,d=r&&P!==null&&!Pe,a=t.length;if(l||d){var c=e,g=c.parent;for(i=0;i<a;i++)o=t[i],(l||!((_=o==null?void 0:o.reactions)!=null&&_.includes(c)))&&(o.reactions??(o.reactions=[])).push(c);l&&(c.f^=An),d&&g!==null&&(g.f&ce)===0&&(c.f^=ce)}for(i=0;i<a;i++)if(o=t[i],rn(o)&&Rr(o),o.wv>e.wv)return!0}(!r||P!==null&&!Pe)&&de(e,se)}return!1}function Fo(e,n){for(var t=n;t!==null;){if((t.f&Nn)!==0)try{t.fn(e);return}catch{t.f^=Nn}t=t.parent}throw Rn=!1,e}function or(e){return(e.f&jn)===0&&(e.parent===null||(e.parent.f&Nn)===0)}function qn(e,n,t,r){if(Rn){if(t===null&&(Rn=!1),or(n))throw e;return}if(t!==null&&(Rn=!0),Fo(e,n),or(n))throw e}function Br(e,n,t=!0){var r=e.reactions;if(r!==null)for(var i=0;i<r.length;i++){var o=r[i];re!=null&&re.includes(e)||((o.f&me)!==0?Br(o,n,!1):n===o&&(t?de(o,Ee):(o.f&se)!==0&&de(o,je),Jn(o)))}}function Vr(e){var v;var n=te,t=le,r=ue,i=B,o=Pe,l=re,d=U,a=ye,c=e.f;te=null,le=0,ue=null,Pe=(c&ce)!==0&&(ye||!We||B===null),B=(c&(Ce|nn))===0?e:null,re=null,er(e.ctx),ye=!1,On++,e.f|=ft;try{var g=(0,e.fn)(),_=e.deps;if(te!==null){var u;if(Ln(e,le),_!==null&&le>0)for(_.length=le+te.length,u=0;u<te.length;u++)_[le+u]=te[u];else e.deps=_=te;if(!Pe)for(u=le;u<_.length;u++)((v=_[u]).reactions??(v.reactions=[])).push(e)}else _!==null&&le<_.length&&(Ln(e,le),_.length=le);if(Hn()&&ue!==null&&!ye&&_!==null&&(e.f&(me|je|Ee))===0)for(u=0;u<ue.length;u++)Br(ue[u],e);return i!==null&&i!==e&&(On++,ue!==null&&(r===null?r=ue:r.push(...ue))),g}finally{te=n,le=t,ue=r,B=i,Pe=o,re=l,er(d),ye=a,e.f^=ft}}function Io(e,n){let t=n.reactions;if(t!==null){var r=js.call(t,e);if(r!==-1){var i=t.length-1;i===0?t=n.reactions=null:(t[r]=t[i],t.pop())}}t===null&&(n.f&me)!==0&&(te===null||!te.includes(n))&&(de(n,je),(n.f&(ce|An))===0&&(n.f^=An),Dr(n),Ln(n,0))}function Ln(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Io(e,t[r])}function Wn(e){var n=e.f;if((n&jn)===0){de(e,se);var t=P,r=U,i=We;P=e,We=!0;try{(n&wt)!==0?So(e):Fr(e),Cr(e);var o=Vr(e);e.teardown=typeof o=="function"?o:null,e.wv=Pr;var l=e.deps,d;Yt&&io&&e.f&Ee}catch(a){qn(a,e,t,r||e.ctx)}finally{We=i,P=t}}}function ko(){try{eo()}catch(e){if(kn!==null)qn(e,kn,null);else throw e}}function Oo(){var e=We;try{var n=0;for(We=!0;Tn.length>0;){n++>1e3&&ko();var t=Tn,r=t.length;Tn=[];for(var i=0;i<r;i++){var o=Po(t[i]);Lo(o)}_n.clear()}}finally{_t=!1,We=e,kn=null}}function Lo(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(jn|Ne))===0)try{rn(r)&&(Wn(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?kr(r):r.fn=null))}catch(i){qn(i,r,null,r.ctx)}}}function Jn(e){_t||(_t=!0,queueMicrotask(Oo));for(var n=kn=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(nn|Ce))!==0){if((t&se)===0)return;n.f^=se}}Tn.push(n)}function Po(e){for(var n=[],t=e;t!==null;){var r=t.f,i=(r&(Ce|nn))!==0,o=i&&(r&se)!==0;if(!o&&(r&Ne)===0){if((r&hr)!==0)n.push(t);else if(i)t.f^=se;else try{rn(t)&&Wn(t)}catch(a){qn(a,t,null,t.ctx)}var l=t.first;if(l!==null){t=l;continue}}var d=t.parent;for(t=t.next;t===null&&d!==null;)t=d.next,d=d.parent}return n}function L(e){var n=e.f,t=(n&me)!==0;if(B!==null&&!ye){if(!(re!=null&&re.includes(e))){var r=B.deps;e.rv<On&&(e.rv=On,te===null&&r!==null&&r[le]===e?le++:te===null?te=[e]:(!Pe||!te.includes(e))&&te.push(e))}}else if(t&&e.deps===null&&e.effects===null){var i=e,o=i.parent;o!==null&&(o.f&ce)===0&&(i.f^=ce)}return t&&(i=e,rn(i)&&Rr(i)),gn&&_n.has(e)?_n.get(e):e.v}function Pn(e){var n=ye;try{return ye=!0,e()}finally{ye=n}}const zo=-7169;function de(e,n){e.f=e.f&zo|n}function mt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(qe in e)gt(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&qe in t&&gt(t)}}}function gt(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{gt(e[r],n)}catch{}const t=Et(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=gr(t);for(let i in r){const o=r[i].get;if(o)try{o.call(e)}catch{}}}}}function Bo(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Vo=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function jo(e){return Vo.includes(e)}const Uo={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function $o(e){return e=e.toLowerCase(),Uo[e]??e}const Ho=["touchstart","touchmove"];function Zo(e){return Ho.includes(e)}function Go(e,n){if(n){const t=document.body;e.autofocus=!0,It(()=>{document.activeElement===t&&e.focus()})}}function Ko(e){var n=B,t=P;we(null),Ve(null);try{return e()}finally{we(n),Ve(t)}}const jr=new Set,ht=new Set;function qo(e,n,t,r={}){function i(o){if(r.capture||un.call(n,o),!o.cancelBubble)return Ko(()=>t==null?void 0:t.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?It(()=>{n.addEventListener(e,i,r)}):n.addEventListener(e,i,r),i}function Wo(e){for(var n=0;n<e.length;n++)jr.add(e[n]);for(var t of ht)t(e)}function un(e){var H;var n=this,t=n.ownerDocument,r=e.type,i=((H=e.composedPath)==null?void 0:H.call(e))||[],o=i[0]||e.target,l=0,d=e.__root;if(d){var a=i.indexOf(d);if(a!==-1&&(n===document||n===window)){e.__root=n;return}var c=i.indexOf(n);if(c===-1)return;a<=c&&(l=a)}if(o=i[l]||e.target,o!==n){Us(e,"currentTarget",{configurable:!0,get(){return o||t}});var g=B,_=P;we(null),Ve(null);try{for(var u,v=[];o!==null;){var p=o.assignedSlot||o.parentNode||o.host||null;try{var S=o["__"+r];if(S!=null&&(!o.disabled||e.target===o))if(Bn(S)){var[F,...z]=S;F.apply(o,[e,...z])}else S.call(o,e)}catch(T){u?v.push(T):u=T}if(e.cancelBubble||p===n||p===null)break;o=p}if(u){for(let T of v)queueMicrotask(()=>{throw T});throw u}}finally{e.__root=n,delete e.currentTarget,we(g),Ve(_)}}}function Ur(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function Xn(e,n){var t=P;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function De(e,n){var t=(n&go)!==0,r,i=!e.startsWith("<!>");return()=>{r===void 0&&(r=Ur(i?e:"<!>"+e),r=Ge(r));var o=t||Mr?document.importNode(r,!0):r.cloneNode(!0);return Xn(o,o),o}}function Jo(e=""){{var n=Zn(e+"");return Xn(n,n),n}}function kt(){var e=document.createDocumentFragment(),n=document.createComment(""),t=Zn();return e.append(n,t),Xn(n,t),e}function ie(e,n){e!==null&&e.before(n)}function Ke(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function Xo(e,n){return Yo(e,n)}const Ye=new Map;function Yo(e,{target:n,anchor:t,props:r={},events:i,context:o,intro:l=!0}){yo();var d=new Set,a=_=>{for(var u=0;u<_.length;u++){var v=_[u];if(!d.has(v)){d.add(v);var p=Zo(v);n.addEventListener(v,un,{passive:p});var S=Ye.get(v);S===void 0?(document.addEventListener(v,un,{passive:p}),Ye.set(v,1)):Ye.set(v,S+1)}}};a(yt(jr)),ht.add(a);var c=void 0,g=Ro(()=>{var _=t??n.appendChild(Zn());return en(()=>{if(o){Un({});var u=U;u.c=o}i&&(r.$$events=i),c=e(_,r)||{},o&&$n()}),()=>{var p;for(var u of d){n.removeEventListener(u,un);var v=Ye.get(u);--v===0?(document.removeEventListener(u,un),Ye.delete(u)):Ye.set(u,v)}ht.delete(a),_!==t&&((p=_.parentNode)==null||p.removeChild(_))}});return Qo.set(c,g),c}let Qo=new WeakMap;function pt(e,n,[t,r]=[0,0]){var i=e,o=null,l=null,d=oe,a=t>0?Dt:0,c=!1;const g=(u,v=!0)=>{c=!0,_(v,u)},_=(u,v)=>{d!==(d=u)&&(d?(o?Fn(o):v&&(o=en(()=>v(i))),l&&Cn(l,()=>{l=null})):(l?Fn(l):v&&(l=en(()=>v(i,[t+1,r]))),o&&Cn(o,()=>{o=null})))};Kn(()=>{c=!1,n(g),c||_(null,null)},a)}function Mn(e,n){return n}function ei(e,n,t,r){for(var i=[],o=n.length,l=0;l<o;l++)Ft(n[l].e,i,!0);var d=o>0&&i.length===0&&t!==null;if(d){var a=t.parentNode;Eo(a),a.append(t),r.clear(),Le(e,n[0].prev,n[o-1].next)}Or(i,()=>{for(var c=0;c<o;c++){var g=n[c];d||(r.delete(g.k),Le(e,g.prev,g.next)),Ae(g.e,!d)}})}function Sn(e,n,t,r,i,o=null){var l=e,d={flags:n,items:new Map,first:null},a=(n&yr)!==0;if(a){var c=e;l=c.appendChild(Zn())}var g=null,_=!1,u=Mt(()=>{var v=t();return Bn(v)?v:v==null?[]:yt(v)});Kn(()=>{var v=L(u),p=v.length;_&&p===0||(_=p===0,ni(v,d,l,i,n,r,t),o!==null&&(p===0?g?Fn(g):g=en(()=>o(l)):g!==null&&Cn(g,()=>{g=null})),L(u))})}function ni(e,n,t,r,i,o,l){var ne,he,Re,Fe;var d=(i&lo)!==0,a=(i&(Rt|Tt))!==0,c=e.length,g=n.items,_=n.first,u=_,v,p=null,S,F=[],z=[],H,T,D,R;if(d)for(R=0;R<c;R+=1)H=e[R],T=o(H,R),D=g.get(T),D!==void 0&&((ne=D.a)==null||ne.measure(),(S??(S=new Set)).add(D));for(R=0;R<c;R+=1){if(H=e[R],T=o(H,R),D=g.get(T),D===void 0){var ee=u?u.e.nodes_start:t;p=ri(ee,n,p,p===null?n.first:p.next,H,T,R,r,i,l),g.set(T,p),F=[],z=[],u=p.next;continue}if(a&&ti(D,H,R,i),(D.e.f&Ne)!==0&&(Fn(D.e),d&&((he=D.a)==null||he.unfix(),(S??(S=new Set)).delete(D))),D!==u){if(v!==void 0&&v.has(D)){if(F.length<z.length){var N=z[0],$;p=N.prev;var Y=F[0],xe=F[F.length-1];for($=0;$<F.length;$+=1)ir(F[$],N,t);for($=0;$<z.length;$+=1)v.delete(z[$]);Le(n,Y.prev,xe.next),Le(n,p,Y),Le(n,xe,N),u=N,p=xe,R-=1,F=[],z=[]}else v.delete(D),ir(D,u,t),Le(n,D.prev,D.next),Le(n,D,p===null?n.first:p.next),Le(n,p,D),p=D;continue}for(F=[],z=[];u!==null&&u.k!==T;)(u.e.f&Ne)===0&&(v??(v=new Set)).add(u),z.push(u),u=u.next;if(u===null)continue;D=u}F.push(D),p=D,u=D.next}if(u!==null||v!==void 0){for(var ge=v===void 0?[]:yt(v);u!==null;)(u.e.f&Ne)===0&&ge.push(u),u=u.next;var Ue=ge.length;if(Ue>0){var sn=(i&yr)!==0&&c===0?t:null;if(d){for(R=0;R<Ue;R+=1)(Re=ge[R].a)==null||Re.measure();for(R=0;R<Ue;R+=1)(Fe=ge[R].a)==null||Fe.fix()}ei(n,ge,sn,g)}}d&&It(()=>{var pe;if(S!==void 0)for(D of S)(pe=D.a)==null||pe.apply()}),P.first=n.first&&n.first.e,P.last=p&&p.e}function ti(e,n,t,r){(r&Rt)!==0&&dt(e.v,n),(r&Tt)!==0?dt(e.i,t):e.i=t}function ri(e,n,t,r,i,o,l,d,a,c){var g=(a&Rt)!==0,_=(a&co)===0,u=g?_?St(i):Qe(i):i,v=(a&Tt)===0?l:Qe(l),p={i:v,v:u,k:o,a:null,e:null,prev:t,next:r};try{return p.e=en(()=>d(e,u,v,c),bo),p.e.prev=t&&t.e,p.e.next=r&&r.e,t===null?n.first=p:(t.next=p,t.e.next=p.e),r!==null&&(r.prev=p,r.e.prev=p.e),p}finally{}}function ir(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,i=n?n.e.nodes_start:t,o=e.e.nodes_start;o!==r;){var l=Gn(o);i.before(o),o=l}}function Le(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function si(e,n,t=!1,r=!1,i=!1){var o=e,l="";Se(()=>{var d=P;if(l!==(l=n()??"")&&(d.nodes_start!==null&&(Ir(d.nodes_start,d.nodes_end),d.nodes_start=d.nodes_end=null),l!=="")){var a=l+"";t?a=`<svg>${a}</svg>`:r&&(a=`<math>${a}</math>`);var c=Ur(a);if((t||r)&&(c=Ge(c)),Xn(Ge(c),c.lastChild),t||r)for(;Ge(c);)o.before(Ge(c));else o.before(c)}})}function oi(e,n,t,r,i){var d;var o=(d=n.$$slots)==null?void 0:d[t],l=!1;o===!0&&(o=n.children,l=!0),o===void 0?i!==null&&i(e):o(e,l?()=>r:r)}function ii(e,n){var t=void 0,r;Kn(()=>{t!==(t=n())&&(r&&(Ae(r),r=null),t&&(r=en(()=>{At(()=>t(e))})))})}function $r(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=$r(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function ai(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=$r(e))&&(r&&(r+=" "),r+=n);return r}function Hr(e){return typeof e=="object"?ai(e):e??""}const ar=[...` 	
\r\f \v\uFEFF`];function li(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var i in t)if(t[i])r=r?r+" "+i:i;else if(r.length)for(var o=i.length,l=0;(l=r.indexOf(i,l))>=0;){var d=l+o;(l===0||ar.includes(r[l-1]))&&(d===r.length||ar.includes(r[d]))?r=(l===0?"":r.substring(0,l))+r.substring(d+1):l=d}}return r===""?null:r}function lr(e,n=!1){var t=n?" !important;":";",r="";for(var i in e){var o=e[i];o!=null&&o!==""&&(r+=" "+i+": "+o+t)}return r}function at(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ci(e,n){if(n){var t="",r,i;if(Array.isArray(n)?(r=n[0],i=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,l=0,d=!1,a=[];r&&a.push(...Object.keys(r).map(at)),i&&a.push(...Object.keys(i).map(at));var c=0,g=-1;const S=e.length;for(var _=0;_<S;_++){var u=e[_];if(d?u==="/"&&e[_-1]==="*"&&(d=!1):o?o===u&&(o=!1):u==="/"&&e[_+1]==="*"?d=!0:u==='"'||u==="'"?o=u:u==="("?l++:u===")"&&l--,!d&&o===!1&&l===0){if(u===":"&&g===-1)g=_;else if(u===";"||_===S-1){if(g!==-1){var v=at(e.substring(c,g).trim());if(!a.includes(v)){u!==";"&&_++;var p=e.substring(c,_).trim();t+=" "+p+";"}}c=_+1,g=-1}}}}return r&&(t+=lr(r)),i&&(t+=lr(i,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Ot(e,n,t,r,i,o){var l=e.__className;if(l!==t||l===void 0){var d=li(t,r,o);d==null?e.removeAttribute("class"):n?e.className=d:e.setAttribute("class",d),e.__className=t}else if(o&&i!==o)for(var a in o){var c=!!o[a];(i==null||c!==!!i[a])&&e.classList.toggle(a,c)}return o}function lt(e,n={},t,r){for(var i in t){var o=t[i];n[i]!==o&&(t[i]==null?e.style.removeProperty(i):e.style.setProperty(i,o,r))}}function ui(e,n,t,r){var i=e.__style;if(i!==n){var o=ci(n,r);o==null?e.removeAttribute("style"):e.style.cssText=o,e.__style=n}else r&&(Array.isArray(r)?(lt(e,t==null?void 0:t[0],r[0]),lt(e,t==null?void 0:t[1],r[1],"important")):lt(e,t,r));return r}const fn=Symbol("class"),cn=Symbol("style"),Zr=Symbol("is custom element"),Gr=Symbol("is html");function fi(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function vt(e,n,t,r){var i=Kr(e);i[n]!==(i[n]=t)&&(n==="loading"&&(e[Ws]=t),t==null?e.removeAttribute(n):typeof t!="string"&&qr(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function di(e,n,t,r,i=!1){var o=Kr(e),l=o[Zr],d=!o[Gr],a=n||{},c=e.tagName==="OPTION";for(var g in n)g in t||(t[g]=null);t.class?t.class=Hr(t.class):t.class=null,t[cn]&&(t.style??(t.style=null));var _=qr(e);for(const T in t){let D=t[T];if(c&&T==="value"&&D==null){e.value=e.__value="",a[T]=D;continue}if(T==="class"){var u=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ot(e,u,D,r,n==null?void 0:n[fn],t[fn]),a[T]=D,a[fn]=t[fn];continue}if(T==="style"){ui(e,D,n==null?void 0:n[cn],t[cn]),a[T]=D,a[cn]=t[cn];continue}var v=a[T];if(D!==v){a[T]=D;var p=T[0]+T[1];if(p!=="$$")if(p==="on"){const R={},ee="$$"+T;let N=T.slice(2);var S=jo(N);if(Bo(N)&&(N=N.slice(0,-7),R.capture=!0),!S&&v){if(D!=null)continue;e.removeEventListener(N,a[ee],R),a[ee]=null}if(D!=null)if(S)e[`__${N}`]=D,Wo([N]);else{let $=function(Y){a[T].call(this,Y)};var H=$;a[ee]=qo(N,e,$,R)}else S&&(e[`__${N}`]=void 0)}else if(T==="style")vt(e,T,D);else if(T==="autofocus")Go(e,!!D);else if(!l&&(T==="__value"||T==="value"&&D!=null))e.value=e.__value=D;else if(T==="selected"&&c)fi(e,D);else{var F=T;d||(F=$o(F));var z=F==="defaultValue"||F==="defaultChecked";if(D==null&&!l&&!z)if(o[T]=null,F==="value"||F==="checked"){let R=e;const ee=n===void 0;if(F==="value"){let N=R.defaultValue;R.removeAttribute(F),R.defaultValue=N,R.value=R.__value=ee?N:null}else{let N=R.defaultChecked;R.removeAttribute(F),R.defaultChecked=N,R.checked=ee?N:!1}}else e.removeAttribute(T);else z||_.includes(F)&&(l||typeof D!="string")?e[F]=D:typeof D!="function"&&vt(e,F,D)}}}for(let T of Object.getOwnPropertySymbols(t))T.description===po&&ii(e,()=>t[T]);return a}function Kr(e){return e.__attributes??(e.__attributes={[Zr]:e.nodeName.includes("-"),[Gr]:e.namespaceURI===ho})}var cr=new Map;function qr(e){var n=cr.get(e.nodeName);if(n)return n;cr.set(e.nodeName,n=[]);for(var t,r=e,i=Element.prototype;i!==r;){t=gr(r);for(var o in t)t[o].set&&n.push(o);r=Et(r)}return n}function Wr(e=!1){const n=U,t=n.l.u;if(!t)return;let r=()=>mt(n.s);if(e){let i=0,o={};const l=dn(()=>{let d=!1;const a=n.s;for(const c in a)a[c]!==o[c]&&(o[c]=a[c],d=!0);return d&&i++,i});r=()=>L(l)}t.b.length&&xo(()=>{ur(n,r),ut(t.b)}),rr(()=>{const i=Pn(()=>t.m.map(Zs));return()=>{for(const o of i)typeof o=="function"&&o()}}),t.a.length&&rr(()=>{ur(n,r),ut(t.a)})}function ur(e,n){if(e.l.s)for(const t of e.l.s)L(t);n()}let xn=!1;function _i(e){var n=xn;try{return xn=!1,[e(),xn]}finally{xn=n}}const mi={get(e,n){if(!e.exclude.includes(n))return L(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=ze({get[n](){return e.props[n]}},n,Er)),e.special[n](t),nr(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),nr(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function zn(e,n){return new Proxy({props:e,exclude:n,special:{},version:Qe(0)},mi)}const gi={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let i=e.props[r];ln(i)&&(i=i());const o=Be(i,n);if(o&&o.set)return o.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const i=Be(r,n);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,n){if(n===qe||n===vr)return!1;for(let t of e.props)if(ln(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(ln(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function hi(...e){return new Proxy({props:e},gi)}function fr(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function ze(e,n,t,r){var ee;var i=(t&uo)!==0,o=!mn||(t&fo)!==0,l=(t&_o)!==0,d=(t&mo)!==0,a=!1,c;l?[c,a]=_i(()=>e[n]):c=e[n];var g=qe in e||vr in e,_=l&&(((ee=Be(e,n))==null?void 0:ee.set)??(g&&n in e&&(N=>e[n]=N)))||void 0,u=r,v=!0,p=!1,S=()=>(p=!0,v&&(v=!1,d?u=Pn(r):u=r),u);c===void 0&&r!==void 0&&(_&&o&&to(),c=S(),_&&_(c));var F;if(o)F=()=>{var N=e[n];return N===void 0?S():(v=!0,p=!1,N)};else{var z=(i?dn:Mt)(()=>e[n]);z.f|=Ks,F=()=>{var N=L(z);return N!==void 0&&(u=void 0),N===void 0?u:N}}if((t&Er)===0)return F;if(_){var H=e.$$legacy;return function(N,$){return arguments.length>0?((!o||!$||H||a)&&_($?F():N),N):F()}}var T=!1,D=St(c),R=dn(()=>{var N=F(),$=L(D);return T?(T=!1,$):D.v=N});return l&&L(R),i||(R.equals=xt),function(N,$){if(arguments.length>0){const Y=$?L(R):o&&l?Ze(N):N;if(!R.equals(Y)){if(T=!0,fe(D,Y),p&&u!==void 0&&(u=Y),fr(R))return N;Pn(()=>L(R))}return N}return fr(R)?R.v:L(R)}}function pi(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function vi(){const e=U;return e===null&&wr(),(n,t,r)=>{var o;const i=(o=e.s.$$events)==null?void 0:o[n];if(i){const l=Bn(i)?i.slice():[i],d=pi(n,t,r);for(const a of l)a.call(e.x,d);return!d.defaultPrevented}return!0}}function bi(e){U===null&&wr(),U.l===null&&no(),yi(U).a.push(e)}function yi(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Ei="5";var mr;typeof window<"u"&&((mr=window.__svelte??(window.__svelte={})).v??(mr.v=new Set)).add(Ei);ao();const wi={EnzymeForward:2.612354141166871,EnzymeReverse:4.458946246270702,FiniteDifferences:23.459391466938637,ForwardDiff:1.689097587161666,Mooncake:7.34656354919895,ReverseDiff:27.166133195663395,ReverseDiffCompiled:2.6223522379724526,Zygote:937.7376698627302},Di={EnzymeForward:2.498314404337085,EnzymeReverse:3.385640417128603,FiniteDifferences:22.621143093808243,ForwardDiff:1.3189872863019627,Mooncake:8.606344326439352,ReverseDiff:26.32307247756323,ReverseDiffCompiled:2.847200511290011,Zygote:868.4261363636364},xi={EnzymeForward:2.592715690347597,EnzymeReverse:2.712323242259548,FiniteDifferences:37.47300497683199,ForwardDiff:1.3236753774571506,Mooncake:8.382525269830392,ReverseDiff:28.729163789531835,ReverseDiffCompiled:3.003058623619371,Zygote:1669.227974099332},Ri={EnzymeForward:3.297849278338753,EnzymeReverse:4.927241347463693,FiniteDifferences:61.2122362359599,ForwardDiff:1.2912391583280816,Mooncake:6.177737244768708,ReverseDiff:23.770165442438383,ReverseDiffCompiled:2.3609565110521973,Zygote:"error"},Ti={EnzymeForward:3.7771901060708064,EnzymeReverse:7.031697341513293,FiniteDifferences:64.94749966074093,ForwardDiff:1.3739901080803016,Mooncake:8.697832252836305,ReverseDiff:44.94705983790309,ReverseDiffCompiled:2.756368403077727,Zygote:"error"},Mi={EnzymeForward:3.469086333079445,EnzymeReverse:7.381216249602938,FiniteDifferences:69.67820889187564,ForwardDiff:1.3881337510074212,Mooncake:8.997518975086015,ReverseDiff:47.12636373265544,ReverseDiffCompiled:2.94435922465486,Zygote:1242.730904735062},Si={EnzymeForward:3.6439365063364515,EnzymeReverse:6.90474698962901,FiniteDifferences:66.62722347994826,ForwardDiff:1.407018469656992,Mooncake:8.62168017401677,ReverseDiff:46.53788911015617,ReverseDiffCompiled:2.897074081759701,Zygote:1061.5243748936894},Ni={EnzymeForward:2.8306878306878307,EnzymeReverse:2.906483233018056,FiniteDifferences:39.27110166094428,ForwardDiff:1.3956651958899005,Mooncake:8.548276335668177,ReverseDiff:31.441258158589086,ReverseDiffCompiled:3.357468852211068,Zygote:1516.6582923103038},Ai={EnzymeForward:3.1853652392947103,EnzymeReverse:5.363623664175456,FiniteDifferences:60.27303029193071,ForwardDiff:1.2696439812548088,Mooncake:6.2112887375846695,ReverseDiff:27.712843463780185,ReverseDiffCompiled:2.2428929912610114,Zygote:"error"},Ci={EnzymeForward:3.587835079602667,EnzymeReverse:6.210947066842263,FiniteDifferences:62.09044877575084,ForwardDiff:1.2810776225221359,Mooncake:7.517994439486511,ReverseDiff:38.2056856187291,ReverseDiffCompiled:2.598566689099045,Zygote:"error"},Fi={EnzymeForward:3.671676476083707,EnzymeReverse:5.163453953009776,FiniteDifferences:62.96132808417238,ForwardDiff:1.3295829892650701,Mooncake:6.832720205455681,ReverseDiff:31.753213860854217,ReverseDiffCompiled:2.7714471403812824,Zygote:"error"},Ii={EnzymeForward:3.629165388035157,EnzymeReverse:4.655649758587322,FiniteDifferences:67.12151251916198,ForwardDiff:1.3390816610925307,Mooncake:6.992717039058501,ReverseDiff:34.58941496310419,ReverseDiffCompiled:2.922767628875564,Zygote:"error"},ki={EnzymeForward:4.50617620120306,EnzymeReverse:12.239242445341874,FiniteDifferences:152.76529057283372,ForwardDiff:2.342869948262811,Mooncake:6.189399100694917,ReverseDiff:49.25897933712384,ReverseDiffCompiled:6.617463101604277,Zygote:"error"},Oi={EnzymeForward:3.685445527621002,EnzymeReverse:6.230130841121495,FiniteDifferences:62.821402784940695,ForwardDiff:1.29575798683681,Mooncake:7.678136293236964,ReverseDiff:36.91406222348069,ReverseDiffCompiled:2.5557341019636106,Zygote:"error"},Li={EnzymeForward:3.398563145034828,EnzymeReverse:5.361895055002988,FiniteDifferences:58.923601043780806,ForwardDiff:1.2134829774783562,Mooncake:5.855419508162845,ReverseDiff:30.39221049176741,ReverseDiffCompiled:1.9569768829393706,Zygote:"error"},Pi={EnzymeForward:2.933653049958598,EnzymeReverse:2.282982698002235,FiniteDifferences:78.7918590730289,ForwardDiff:1.4191744651108609,Mooncake:6.928206393402178,ReverseDiff:23.143640100479566,ReverseDiffCompiled:2.1029572518373802,Zygote:"error"},zi={EnzymeForward:2.7499362000765606,EnzymeReverse:2.5085763225923046,FiniteDifferences:28.500244208763604,ForwardDiff:1.5583532670800007,Mooncake:9.965177040088479,ReverseDiff:54.203473604723,ReverseDiffCompiled:5.433097205824478,Zygote:"error"},Bi={EnzymeForward:7.456532376447561,EnzymeReverse:6.510217583063805,FiniteDifferences:29.171314416177427,ForwardDiff:4.193270481144343,Mooncake:41.99321832242713,ReverseDiff:10.580215880526394,ReverseDiffCompiled:4.971249173826834,Zygote:146.05388854868343},Vi={EnzymeForward:"error",EnzymeReverse:3.0713623009123245,FiniteDifferences:164.91039564066156,ForwardDiff:2.91759814880182,Mooncake:3.839165661092915,ReverseDiff:"wrong",ReverseDiffCompiled:2.0612533343950314,Zygote:"error"},ji={EnzymeForward:34581.92940142779,EnzymeReverse:4.741763742264289,FiniteDifferences:167204.92945270482,ForwardDiff:20844.574677162112,Mooncake:46.5606684584706,ReverseDiff:6.091651042241095,ReverseDiffCompiled:4.550088111698522,Zygote:40.97720897615707},Ui={EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:1547.1001725356753,ForwardDiff:"NaN",Mooncake:"wrong",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},$i={EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:7396.715229674547,ForwardDiff:159.86753090003515,Mooncake:8.436458027730653,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:82.30108837345632},Hi={EnzymeForward:"wrong",EnzymeReverse:"wrong",FiniteDifferences:"wrong",ForwardDiff:38.14240541135064,Mooncake:"wrong",ReverseDiff:46.52214909498144,ReverseDiffCompiled:6.369632973522649,Zygote:"error"},Zi={EnzymeForward:"error",EnzymeReverse:5.244652975875465,FiniteDifferences:37.62162162162163,ForwardDiff:1.1128526601558368,Mooncake:10.418229476112256,ReverseDiff:11.547657490288803,ReverseDiffCompiled:1.2782001196635344,Zygote:570.5128817607916},Gi={EnzymeForward:"error",EnzymeReverse:"wrong",FiniteDifferences:"wrong",ForwardDiff:76.45200473566948,Mooncake:"wrong",ReverseDiff:"wrong",ReverseDiffCompiled:3.8574773909268103,Zygote:"error"},Ki={EnzymeForward:2.4389967041392424,EnzymeReverse:2.51213881332255,FiniteDifferences:37.05616041896362,ForwardDiff:1.305891902861395,Mooncake:7.878802115960187,ReverseDiff:32.721835398969496,ReverseDiffCompiled:2.7052685680279165,Zygote:1091.131707317073},qi={EnzymeForward:4.934061719908831,EnzymeReverse:26.440904038532793,FiniteDifferences:59.763659712204905,ForwardDiff:1.229593874051629,Mooncake:13.362077244974959,ReverseDiff:27.437299556772732,ReverseDiffCompiled:2.36492042893245,Zygote:"error"},Wi={EnzymeForward:2.6929438132776875,EnzymeReverse:10.185961180537092,FiniteDifferences:15.834877843302444,ForwardDiff:.9453587745229776,Mooncake:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Ji={EnzymeForward:4.871638380044645,EnzymeReverse:2.152067343401832,FiniteDifferences:140.0373212600077,ForwardDiff:1.7221339547364332,Mooncake:5.981697878927047,ReverseDiff:23.20162456116197,ReverseDiffCompiled:2.317001469867712,Zygote:"error"},Xi={EnzymeForward:18.91672978036433,EnzymeReverse:2.361253377424689,FiniteDifferences:629.1275545027503,ForwardDiff:8.379751853173188,Mooncake:4.026879595224919,ReverseDiff:24.575705057507484,ReverseDiffCompiled:2.305416848620631,Zygote:"error"},Yi={EnzymeForward:40.0526506899056,EnzymeReverse:2.3572340086138137,FiniteDifferences:1237.474421044138,ForwardDiff:14.343554821291857,Mooncake:3.8298346571567516,ReverseDiff:25.7307536630778,ReverseDiffCompiled:2.4828578278590268,Zygote:"error"},Qi={EnzymeForward:216.50570643642075,EnzymeReverse:2.5037703062477084,FiniteDifferences:6464.882741203266,ForwardDiff:69.72168936310953,Mooncake:3.8148428597684245,ReverseDiff:25.918547556185207,ReverseDiffCompiled:2.379273520342935,Zygote:"error"},ea={EnzymeForward:2.5516346040363507,EnzymeReverse:2.629804875190437,FiniteDifferences:23.705590842465277,ForwardDiff:1.6606764553699562,Mooncake:7.29142476203335,ReverseDiff:31.547231270358306,ReverseDiffCompiled:3.370673076923077,Zygote:"error"},na={EnzymeForward:2.0096649927770516,EnzymeReverse:7.599842779029908,FiniteDifferences:19.402675340940718,ForwardDiff:1.2722926083124473,Mooncake:8.376962039724546,ReverseDiff:11.422109047333732,ReverseDiffCompiled:2.617774739360793,Zygote:"error"},ta={EnzymeForward:2.8642924310554116,EnzymeReverse:3.2469252601702934,FiniteDifferences:28.113564938170388,ForwardDiff:1.4571911354290625,Mooncake:9.286314773980155,ReverseDiff:17.723719353513218,ReverseDiffCompiled:2.1794063057270754,Zygote:1573.7911929872623},ra={EnzymeForward:2.7426792139496263,EnzymeReverse:2.513036196009842,FiniteDifferences:28.847987872105843,ForwardDiff:1.6713900492176745,Mooncake:9.649200510472188,ReverseDiff:57.37588467036223,ReverseDiffCompiled:5.375381124290872,Zygote:"error"},sa={EnzymeForward:2.839787542250121,EnzymeReverse:3.1631033507649047,FiniteDifferences:28.614534982212437,ForwardDiff:1.4770741687979538,Mooncake:8.531662471084502,ReverseDiff:31.81695475343162,ReverseDiffCompiled:3.266300211416491,Zygote:2050.4793343336514},oa={EnzymeForward:2.8218935047579548,EnzymeReverse:4.0915370518302705,FiniteDifferences:51.84969618351881,ForwardDiff:1.3724812094063217,Mooncake:6.244707496997769,ReverseDiff:26.58791704238052,ReverseDiffCompiled:2.5067944893349403,Zygote:"error"},ia={EnzymeForward:2.413745286366632,EnzymeReverse:2.3416235823731952,FiniteDifferences:25.245545091723848,ForwardDiff:1.515984737267017,Mooncake:7.3758921290035,ReverseDiff:24.06398610396294,ReverseDiffCompiled:2.536225648791905,Zygote:2213.4707722249254},aa={EnzymeForward:5.061752988047809,EnzymeReverse:2.3741467159907867,FiniteDifferences:137.5527096447435,ForwardDiff:1.7368524613623353,Mooncake:5.755113063517212,ReverseDiff:32.27718337894998,ReverseDiffCompiled:3.026707321553213,Zygote:"error"},la={EnzymeForward:4.425176946410516,EnzymeReverse:2.430827076759397,FiniteDifferences:131.28970373967945,ForwardDiff:1.7887743835112255,Mooncake:5.937184266452984,ReverseDiff:35.27927500820539,ReverseDiffCompiled:3.002967763943374,Zygote:"error"},ca={EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"NaN",ForwardDiff:"NaN",Mooncake:"error",ReverseDiff:"NaN",ReverseDiffCompiled:"NaN",Zygote:"NaN"},ua={EnzymeForward:2.279611583859457,EnzymeReverse:2.145389571524135,FiniteDifferences:36.20316402997502,ForwardDiff:1.2551111488176354,Mooncake:6.650127604012107,ReverseDiff:13.308019482746792,ReverseDiffCompiled:1.325155232470089,Zygote:1145.5365630068402},fa={EnzymeForward:7.452987125705193,EnzymeReverse:12.53628190720822,FiniteDifferences:43.76779414816352,ForwardDiff:1.1199741904262612,Mooncake:12.638815676878316,ReverseDiff:16.206647137535715,ReverseDiffCompiled:3.9231960652171343,Zygote:238.18229290695695},da={EnzymeForward:2.789041654492154,EnzymeReverse:2.942357591483377,FiniteDifferences:38.873222665826155,ForwardDiff:1.3957720711487436,Mooncake:8.603078286994853,ReverseDiff:29.49925821142699,ReverseDiffCompiled:3.124486134787537,Zygote:"error"},_a={EnzymeForward:2.650989010989011,EnzymeReverse:3.307104500968595,FiniteDifferences:40.81972265023112,ForwardDiff:1.5420357413662371,Mooncake:9.521209802421176,ReverseDiff:19.239596653392276,ReverseDiffCompiled:"wrong",Zygote:1089.8359041907866},ma={EnzymeForward:2.7777997900033684,EnzymeReverse:3.0049587270609086,FiniteDifferences:38.24337071585787,ForwardDiff:1.3503984997655882,Mooncake:8.234273123791537,ReverseDiff:30.762982183013317,ReverseDiffCompiled:3.3513637623899637,Zygote:"error"},ga={assume_beta:wi,assume_dirichlet:Di,demo_assume_dot_observe_literal:xi,demo_assume_index_observe:Ri,demo_assume_matrix_observe_matrix_index:Ti,demo_assume_multivariate_observe:Mi,demo_assume_multivariate_observe_literal:Si,demo_assume_observe_literal:Ni,demo_assume_submodel_observe_index_literal:Ai,demo_dot_assume_observe:Ci,demo_dot_assume_observe_index:Fi,demo_dot_assume_observe_index_literal:Ii,assume_lkjcholu:ki,demo_dot_assume_observe_matrix_index:Oi,demo_dot_assume_observe_submodel:Li,dot_assume:Pi,dot_observe:zi,dppl_gauss_unknown:Bi,dppl_hier_poisson:Vi,dppl_high_dim_gauss:ji,dppl_hmm_semisup:Ui,dppl_lda:$i,dppl_logistic_regression:Hi,assume_mvnormal:Zi,dppl_sto_volatility:Gi,dynamic_constraint:Ki,multiple_constraints_same_var:qi,multithreaded:Wi,n010:Ji,n050:Xi,n100:Yi,n500:Qi,observe_bernoulli:ea,observe_categorical:na,assume_normal:ta,observe_index:ra,observe_literal:sa,observe_multivariate:oa,observe_submodel:ia,pdb_eight_schools_centered:aa,pdb_eight_schools_noncentered:la,von_mises:ca,assume_submodel:ua,assume_wishart:fa,broadcast_macro:da,control_flow:_a,demo_assume_dot_observe:ma},ha=`@model function assume_beta()
    a ~ Beta(2, 2)
end

@register assume_beta()`,pa=`@model function assume_dirichlet()
    a ~ Dirichlet([1.0, 5.0])
end

@register assume_dirichlet()`,va=`@model function demo_assume_dot_observe_literal()
    # \`assume\` and literal \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    [1.5, 2.0] .~ Normal(m, sqrt(s))
end

@register demo_assume_dot_observe_literal()`,ba=`@model function demo_assume_index_observe(
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

@register demo_assume_index_observe()`,ya=`@model function demo_assume_matrix_observe_matrix_index(
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

@register demo_assume_matrix_observe_matrix_index()`,Ea=`@model function demo_assume_multivariate_observe(x = [1.5, 2.0])
    # Multivariate \`assume\` and \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zero(x), Diagonal(s))
    x ~ MvNormal(m, Diagonal(s))
end
@register demo_assume_multivariate_observe()`,wa=`@model function demo_assume_multivariate_observe_literal()
    # multivariate \`assume\` and literal \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zeros(2), Diagonal(s))
    [1.5, 2.0] ~ MvNormal(m, Diagonal(s))
end

@register demo_assume_multivariate_observe_literal()`,Da=`@model function demo_assume_observe_literal()
    # univariate \`assume\` and literal \`observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    1.5 ~ Normal(m, sqrt(s))
    2.0 ~ Normal(m, sqrt(s))
end

@register demo_assume_observe_literal()`,xa=`@model function _prior_dot_assume(::Type{TV} = Vector{Float64}) where {TV}
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

@register demo_assume_submodel_observe_index_literal()`,Ra=`@model function demo_dot_assume_observe(
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

@register demo_dot_assume_observe()`,Ta=`@model function demo_dot_assume_observe_index(
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

@register demo_dot_assume_observe_index()`,Ma=`@model function demo_dot_assume_observe_index_literal(
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

@register demo_dot_assume_observe_index_literal()`,Sa=`@model function assume_lkjcholu()
    a ~ LKJCholesky(5, 1.0, 'U')
end

@register assume_lkjcholu()`,Na=`@model function demo_dot_assume_observe_matrix_index(
    x = transpose([1.5 2.0;]),
    ::Type{TV} = Vector{Float64},
) where {TV}
    s = TV(undef, length(x))
    s .~ InverseGamma(2, 3)
    m = TV(undef, length(x))
    m ~ product_distribution(Normal.(0, sqrt.(s)))
    x[:, 1] ~ MvNormal(m, Diagonal(s))
end

@register demo_dot_assume_observe_matrix_index()`,Aa=`@model function _likelihood_multivariate_observe(s, m, x)
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

@register demo_dot_assume_observe_submodel()`,Ca=`@model function dot_assume(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 5)
    a .~ Normal()
end

@register dot_assume()`,Fa=`@model function dot_observe(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    x .~ Normal(a)
end

@register dot_observe()`,Ia=`n = 10_000
s = abs(rand()) + 0.5
y = randn() .+ s * randn(n)

@model function dppl_gauss_unknown(y)
    N = length(y)
    m ~ Normal(0, 1)
    s ~ truncated(Cauchy(0, 5); lower=0)
    y ~ filldist(Normal(m, s), N)
end

@register dppl_gauss_unknown(y)`,ka=`using LazyArrays
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
x = repeat(logpop, inner=nd)
idx = repeat(collect(1:ns), inner=nd)

lazyarray(f, x) = LazyArray(Base.broadcasted(f, x))

@model function dppl_hier_poisson(y, x, idx, ns)
    a0 ~ Normal(0, 10)
    a1 ~ Normal(0, 1)
    a0_sig ~ truncated(Cauchy(0, 1); lower=0)
    a0s ~ filldist(Normal(0, a0_sig), ns)
    alpha = a0 .+ a0s[idx] .+ a1 * x
    y ~ arraydist(lazyarray(LogPoisson, alpha))
end

@register dppl_hier_poisson(y, x, idx, ns)`,Oa=`@model function dppl_high_dim_gauss(D)
    m ~ filldist(Normal(0, 1), D)
end

@register dppl_high_dim_gauss(10_000)`,La=`using StatsFuns: logsumexp

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
    theta ~ filldist(Dirichlet(alpha), K)
    phi ~ filldist(Dirichlet(beta), K)
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
    DynamicPPL.@addlogprob! logsumexp(gamma)
end

@register dppl_hmm_semisup(K, T, T_unsup, w, z, u, alpha, beta)`,Pa=`v = 100      # words
k = 5        # topics
m = 10       # number of docs
alpha = ones(k)
beta = ones(v)

phi = rand(Dirichlet(beta), k)
theta = rand(Dirichlet(alpha), m)
doc_lengths = rand(Poisson(1_000), m)
n = sum(doc_lengths)

w_lda = Vector{Int}(undef, n)
doc_lda = Vector{Int}(undef, n)
for i in 1:m
    # Because all the models exist in the same scope, we need
    # to add some variable suffixes to avoid local/global 
    # scope warnings. This is quite ugly and should be solved
    # properly, using e.g. modules or functions.
    local idx_lda = sum(doc_lengths[1:i-1]) # starting index for inner loop
    for j in 1:doc_lengths[i]
        z_lda = rand(Categorical(theta[:, i]))
        w_lda[idx_lda + j] = rand(Categorical(phi[:, z_lda]))
        doc_lda[idx_lda + j] = i
    end
end

@model function dppl_lda(k, m, w, doc, alpha, beta)
    theta ~ filldist(Dirichlet(alpha), m)
    phi ~ filldist(Dirichlet(beta), k)
    log_phi_dot_theta = log.(phi * theta)
    DynamicPPL.@addlogprob! sum(log_phi_dot_theta[CartesianIndex.(w, doc)])
end

@register dppl_lda(k, m, w_lda, doc_lda, alpha, beta)`,za=`using StatsFuns: logistic
using LazyArrays

d, n = 100, 10_000
X = randn(d, n)
w = randn(d)
y = Int.(logistic.(X' * w) .> 0.5)

function safelogistic(x::T) where {T}
    logistic(x) * (1 - 2 * eps(T)) + eps(T)
end

lazyarray(f, x) = LazyArray(Base.broadcasted(f, x))

@model dppl_logistic_regression(Xt, y) = begin
    N, D = size(Xt)
    w ~ filldist(Normal(), D)
    y ~ arraydist(lazyarray(x -> Bernoulli(safelogistic(x)), Xt * w))
end

@register dppl_logistic_regression(X', y)`,Ba=`@model function assume_mvnormal()
    a ~ MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0])
end

@register assume_mvnormal()`,Va=`using DelimitedFiles: readdlm

path = "$(@__DIR__)/../data/dppl_sto_volatility.csv"
data, _ = readdlm(path, ',', header=true)
to_num(x) = x isa Number ? x : 0.1
y = map(to_num, data[1:500,2])

@model dppl_sto_volatility(y, ::Type{Tv}=Vector{Float64}) where {Tv} = begin
    T = length(y)
    μ ~ Cauchy(0, 10)
    ϕ ~ Uniform(-1, 1)
    σ ~ truncated(Cauchy(0, 5); lower=0)

    h = Tv(undef, T)
    h[1] ~ Normal(μ, σ / sqrt(1 - ϕ^2))
    y[1] ~ Normal(0, exp(h[1] / 2))
    for t in 2:T
        h[t] ~ Normal(μ + ϕ * (h[t - 1] - μ), σ)
        y[t] ~ Normal(0, exp(h[t] / 2))
    end
end

@register dppl_sto_volatility(y)`,ja=`@model function dynamic_constraint()
    a ~ Normal()
    b ~ truncated(Normal(); lower = a)
end

@register dynamic_constraint()`,Ua=`@model function multiple_constraints_same_var(::Type{TV} = Vector{Float64}) where {TV}
    x = TV(undef, 5)
    x[1] ~ Normal()
    x[2] ~ InverseGamma(2, 3)
    x[3] ~ truncated(Normal(), -5, 20)
    x[4:5] ~ Dirichlet([1.0, 2.0])
end

@register multiple_constraints_same_var()`,$a=`#=
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

@register multithreaded([1.5, 2.0, 2.5, 1.5, 2.0, 2.5])`,Ha=`@model function n010(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 10)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

@register n010()`,Za=`@model function n050(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 50)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

@register n050()`,Ga=`@model function n100(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 100)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

@register n100()`,Ka=`@model function n500(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 500)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

@register n500()`,qa=`@model function observe_bernoulli(x = [true, false, true])
    a ~ Beta(2, 2)
    for i in eachindex(x)
        x[i] ~ Bernoulli(a)
    end
end

@register observe_bernoulli()`,Wa=`@model function observe_categorical(x = [1, 2, 1, 2, 2])
    a ~ Dirichlet(2, 3)
    for i in eachindex(x)
        x[i] ~ Categorical(a)
    end
end

@register observe_categorical()`,Ja=`@model function assume_normal()
    a ~ Normal()
end

@register assume_normal()`,Xa=`@model function observe_index(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end

@register observe_index()`,Ya=`@model function observe_literal()
    a ~ Normal()
    1.5 ~ Normal(a)
end

@register observe_literal()`,Qa=`@model function observe_multivariate(
    x = [1.5, 2.0, 2.5],
    ::Type{TV} = Vector{Float64},
) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    x ~ MvNormal(a, I)
end

@register observe_multivariate()`,el=`@model function inner2(x, a)
    x ~ Normal(a)
end
@model function observe_submodel(x = 1.5)
    a ~ Normal()
    _ignore ~ to_submodel(inner2(x, a))
end

@register observe_submodel()`,nl=`J = 8
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

@register pdb_eight_schools_centered(J, y, sigma)`,tl=`J = 8
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

@register pdb_eight_schools_noncentered(J, y, sigma)`,rl=`@model function von_mises(x)
    a ~ InverseGamma(2, 3)
    x ~ VonMises(0, a)
end

@register von_mises(0.4)`,sl=`@model function inner1()
    return a ~ Normal()
end
@model function assume_submodel()
    a ~ to_submodel(inner1())
    x ~ Normal(a)
end

@register assume_submodel()`,ol=`@model function assume_wishart()
    a ~ Wishart(7, [1.0 0.5; 0.5 1.0])
end

@register assume_wishart()`,il=`@model function broadcast_macro(
    x = [1.5, 2.0],
    ::Type{TV} = Vector{Float64},
) where {TV}
    a ~ Normal(0, 1)
    b ~ InverseGamma(2, 3)
    @. x ~ Normal(a, $(sqrt(b)))
end

@register broadcast_macro()`,al=`#= 
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

@register control_flow()`,ll=`@model function demo_assume_dot_observe(x = [1.5, 2.0])
    # \`assume\` and \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    x .~ Normal(m, sqrt(s))
end

@register demo_assume_dot_observe()`,cl={assume_beta:ha,assume_dirichlet:pa,demo_assume_dot_observe_literal:va,demo_assume_index_observe:ba,demo_assume_matrix_observe_matrix_index:ya,demo_assume_multivariate_observe:Ea,demo_assume_multivariate_observe_literal:wa,demo_assume_observe_literal:Da,demo_assume_submodel_observe_index_literal:xa,demo_dot_assume_observe:Ra,demo_dot_assume_observe_index:Ta,demo_dot_assume_observe_index_literal:Ma,assume_lkjcholu:Sa,demo_dot_assume_observe_matrix_index:Na,demo_dot_assume_observe_submodel:Aa,dot_assume:Ca,dot_observe:Fa,dppl_gauss_unknown:Ia,dppl_hier_poisson:ka,dppl_high_dim_gauss:Oa,dppl_hmm_semisup:La,dppl_lda:Pa,dppl_logistic_regression:za,assume_mvnormal:Ba,dppl_sto_volatility:Va,dynamic_constraint:ja,multiple_constraints_same_var:Ua,multithreaded:$a,n010:Ha,n050:Za,n100:Ga,n500:Ka,observe_bernoulli:qa,observe_categorical:Wa,assume_normal:Ja,observe_index:Xa,observe_literal:Ya,observe_multivariate:Qa,observe_submodel:el,pdb_eight_schools_centered:nl,pdb_eight_schools_noncentered:tl,von_mises:rl,assume_submodel:sl,assume_wishart:ol,broadcast_macro:il,control_flow:al,demo_assume_dot_observe:ll},ul="1.14.0",fl="1.5.0",dl="5.6.3",_l="0.11.0",ml="0.4.5",gl="0.1.42",hl="4.3.0",pl="0.8.0",vl="0.8.8",bl="0.6.2",yl="0.4.1",El="1.1.3",wl="2.5.0",Dl="1.1.2",xl="0.4.0",Rl="0.5.4",Tl="3.5.1+1",Ml="7.19.0",Sl="1.11.1",Nl="1.11.0",Al="1.1.1",Cl="0.5.1",Fl="1.1.0",Il="0.4.7",kl="0.5.1",Ol="0.4.4",Ll="1.11.0",Pl="0.1.1",zl="0.15.7",Bl="0.1.9",Vl="1.2.2",jl="0.5.0",Ul="0.10.15",$l="1.72.5",Hl="1.25.1",Zl="1.3.1",Gl="0.1.10",Kl="0.10.42",ql="0.10.4+0",Wl="0.7.8",Jl="3.29.0",Xl="0.12.1",Yl="0.11.0",Ql="0.13.1",ec="1.0.3",nc="0.2.4",tc="0.3.1",rc="4.16.0",sc="1.1.1+0",oc="0.1.2",ic="2.5.0",ac="0.1.2",lc="1.6.0",cc="0.1.3",uc="4.1.1",fc="1.16.0",dc="0.7.13",_c="1.7.0",mc="0.18.22",gc="1.0.0",hc="1.11.0",pc="0.1.2",vc="1.9.1",bc="0.4.0",yc="1.1.0",Ec="1.15.1",wc="0.7.1",Dc="1.11.0",xc="0.25.120",Rc="0.6.58",Tc="0.9.5",Mc="1.6.0",Sc="0.36.12",Nc="2.0.0",Ac="1.0.5",Cc="0.13.50",Fc="0.8.12",Ic="0.0.182+0",kc="0.1.11",Oc="0.1.10",Lc="0.10.14",Pc="1.9.0",zc="3.3.11+0",Bc="0.2.2",Vc="0.1.1",jc="0.3.2",Uc="1.17.0",$c="0.9.24",Hc="1.11.0",Zc="1.13.0",Gc="2.27.0",Kc="0.12.32",qc="0.8.5",Wc="1.0.1",Jc="1.1.3",Xc="0.1.3",Yc="0.5.2",Qc="1.11.0",eu="0.2.0",nu="1.5.2",tu="0.6.2",ru="1.3.1",su="1.13.0",ou="0.17.2",iu="1.14.6+0",au="1.10.17",lu="0.2.0",cu="2.12.1+0",uu="0.3.28",fu="0.4.15",du="0.1.7",_u="0.10.5",mu="0.3.8",gu="0.1.5",hu="0.3.1",pu="1.4.4",vu="2025.0.4+0",bu="1.11.0",yu="0.7.0",Eu="0.15.1",wu="0.7.11",Du="0.1.17",xu="1.3.1",Ru="0.2.4",Tu="1.10.0",Mu="1.0.0",Su="0.5.13",Nu="1.7.0",Au="1.14.3",Cu="0.2.1",Fu="0.2.4",Iu="0.9.35",ku="0.6.9",Ou="0.4.1",Lu="9.4.1",Pu="0.0.37+2",zu="1.6.2",Bu="3.0.1+0",Vu="1.4.0",ju="2.6.1",Uu="1.11.0",$u="0.3.1",Hu="0.2.0",Zu="0.6.4",Gu="8.6.0+0",Ku="1.11.0",qu="1.7.2+0",Wu="1.11.0+1",Ju="0.9.1+6",Xu="1.11.0",Yu="1.18.0+0",Qu="0.8.8",ef="7.4.0",nf="1.11.0",tf="2.1.2",rf="1.13.1",sf="0.3.29",of="1.11.0",af="1.1.0",lf="0.10.7",cf="7.1.0",uf="0.3.14",ff="2025.0.1+1",df="1.0.0",_f="0.7.18",mf="1.11.1",gf="0.4.17",hf="0.4.8",pf="4.3.0+1",vf="0.1.11",bf="5.5.3+0",yf="0.5.16",Ef="0.4.2",wf="1.11.0",Df="1.1.9",xf="2.28.6+0",Rf="0.2.0",Tf="10.1.4+3",Mf="1.2.0",Sf="2.0.0",Nf="1.11.0",Af="0.4.122",Cf="0.3.4",Ff="0.3.5",If="2023.12.12",kf="0.10.3",Of="7.10.0",Lf="0.9.30",Pf="0.4.3",zf="1.1.3",Bf="0.1.5",Vf="0.10.4",jf="1.0.0",Uf="1.2.0",$f="0.4.4",Hf="1.17.0",Zf="0.3.27+1",Gf="0.8.5+0",Kf="5.0.8+0",qf="1.5.0",Wf="3.5.0+0",Jf="0.5.6+0",Xf="1.13.2",Yf="0.4.6",Qf="4.3.0",ed="2.8.0",nd="0.4.3",td="1.8.1",rd="0.11.35",sd="1.0.2",od="0.5.12",id="0.12.3",ad="2.8.3",ld="1.2.1",cd="0.3.5",ud="1.11.0",fd="1.4.3",dd="0.2.4",_d="1.2.1",md="1.4.3",gd="0.2.0",hd="2.4.0",pd="1.11.0",vd="0.1.4",bd="1.10.4",yd="1.3.0",Ed="2.11.2",wd="1.11.0",Dd="1.11.0",xd="1.7.1",Rd="1.6.0",Td="0.3.2",Md="0.4.5",Sd="0.1.0",Nd="1.3.4",Ad="3.33.0",Cd="1.2.2",Fd="1.3.1",Id="1.16.1",kd="1.4.2",Od="0.8.0",Ld="0.5.1+0",Pd="2.2.7",zd="0.5.15",Bd="0.7.0",Vd="0.5.0",jd="2.102.0",Ud="1.3.1",$d="1.7.0",Hd="3.0.0",Zd="1.3.0",Gd="1.2.1",Kd="1.4.8",qd="1.11.0",Wd="1.1.2",Jd="1.11.0",Xd="0.1.0",Yd="1.2.0",Qd="0.9.4",e1="1.11.0",n1="1.2.1",t1="1.11.0",r1="0.6.21",s1="0.1.2",o1="0.4.20",i1="2.5.1",a1="0.1.15",l1="0.1.2",c1="1.9.13",u1="1.4.3",f1="3.4.0",d1="1.11.1",_1="1.7.1",m1="0.34.5",g1="1.5.0",h1="0.2.2",p1="0.3.7",v1="0.4.1",b1="0.7.1",y1="0.3.1",E1="1.11.0",w1="1.11.0",D1=null,x1="7.7.0+0",R1="0.3.40",T1="1.0.3",M1="1.0.1",S1="1.12.1",N1="1.10.0",A1="0.1.1",C1="0.1.7",F1="1.11.0",I1="0.1.4",k1="0.11.3",O1="0.4.84",L1="0.39.1",P1="1.6.0",z1="1.11.0",B1="1.0.2",V1="1.11.0",j1="1.23.1",U1="1.0.0",$1="0.3.0",H1="1.4.2",Z1="1.0.0",G1="1.6.1",K1="0.10.1",q1="1.2.13+1",W1="0.7.10",J1="0.2.7",X1="1.1.3+0",Y1="5.11.0+0",Q1="1.59.0+0",e0="2022.0.0+0",n0="17.4.0+2",t0={ADTypes:ul,AbstractFFTs:fl,AbstractMCMC:dl,AbstractPPL:_l,AbstractTrees:ml,Accessors:gl,Adapt:hl,AdvancedHMC:pl,AdvancedMH:vl,AdvancedPS:bl,AdvancedVI:yl,AliasTables:El,ArgCheck:wl,ArgTools:Dl,ArnoldiMethod:xl,Arpack:Rl,Arpack_jll:Tl,ArrayInterface:Ml,ArrayLayouts:Sl,Artifacts:Nl,Atomix:Al,AtomsBase:Cl,AxisAlgorithms:Fl,AxisArrays:Il,BFloat16s:kl,BangBang:Ol,Base64:Ll,Baselet:Pl,Bijectors:zl,BitFlags:Bl,BufferedStreams:Vl,CEnum:jl,CSV:Ul,ChainRules:$l,ChainRulesCore:Hl,Chairmarks:Zl,ChangesOfVariables:Gl,Chemfiles:Kl,Chemfiles_jll:ql,CodecZlib:Wl,ColorSchemes:Jl,ColorTypes:Xl,ColorVectorSpace:Yl,Colors:Ql,Combinatorics:ec,CommonSolve:nc,CommonSubexpressions:tc,Compat:rc,CompilerSupportLibraries_jll:sc,CompositionsBase:oc,ConcurrentUtilities:ic,ConsoleProgressMonitor:ac,ConstructionBase:lc,ContextVariablesX:cc,Crayons:uc,DataAPI:fc,DataDeps:dc,DataFrames:_c,DataStructures:mc,DataValueInterfaces:gc,Dates:hc,DefineSingletons:pc,DelimitedFiles:vc,DensityInterface:bc,DiffResults:yc,DiffRules:Ec,DifferentiationInterface:wc,Distributed:Dc,Distributions:xc,DistributionsAD:Rc,DocStringExtensions:Tc,Downloads:Mc,DynamicPPL:Sc,EllipticalSliceSampling:Nc,EnumX:Ac,Enzyme:Cc,EnzymeCore:Fc,Enzyme_jll:Ic,ExceptionUnwrapping:kc,ExprTools:Oc,ExproniconLite:Lc,FFTW:Pc,FFTW_jll:zc,FLoops:Bc,FLoopsBase:Vc,FastClosures:jc,FileIO:Uc,FilePathsBase:$c,FileWatching:Hc,FillArrays:Zc,FiniteDiff:Gc,FiniteDifferences:Kc,FixedPointNumbers:qc,ForwardDiff:Wc,FunctionWrappers:Jc,FunctionWrappersWrappers:Xc,Functors:Yc,Future:Qc,GPUArraysCore:eu,GPUCompiler:nu,GZip:tu,Glob:ru,Graphs:su,HDF5:ou,HDF5_jll:iu,HTTP:au,HashArrayMappedTries:lu,Hwloc_jll:cu,HypergeometricFunctions:uu,IRTools:fu,ImageBase:du,ImageCore:_u,ImageShow:mu,Inflate:gu,InitialValues:hu,InlineStrings:pu,IntelOpenMP_jll:vu,InteractiveUtils:bu,InternedStrings:yu,Interpolations:Eu,IntervalSets:wu,InverseFunctions:Du,InvertedIndices:xu,IrrationalConstants:Ru,IterTools:Tu,IteratorInterfaceExtensions:Mu,JLD2:Su,JLLWrappers:Nu,JSON:"0.21.4",JSON3:Au,Jieko:Cu,JuliaVariables:Fu,KernelAbstractions:Iu,KernelDensity:ku,LBFGSB:Ou,LLVM:Lu,LLVMExtra_jll:Pu,LRUCache:zu,L_BFGS_B_jll:Bu,LaTeXStrings:Vu,LazyArrays:ju,LazyArtifacts:Uu,LazyModules:$u,LeftChildRightSiblingTrees:Hu,LibCURL:Zu,LibCURL_jll:Gu,LibGit2:Ku,LibGit2_jll:qu,LibSSH2_jll:Wu,LibTracyClient_jll:Ju,Libdl:Xu,Libiconv_jll:Yu,Libtask:Qu,LineSearches:ef,LinearAlgebra:nf,LogDensityProblems:tf,LogDensityProblemsAD:rf,LogExpFunctions:sf,Logging:of,LoggingExtras:af,MAT:lf,MCMCChains:cf,MCMCDiagnosticTools:uf,MKL_jll:ff,MLCore:df,MLDatasets:_f,MLJModelInterface:mf,MLStyle:gf,MLUtils:hf,MPICH_jll:pf,MPIPreferences:vf,MPItrampoline_jll:bf,MacroTools:yf,MappedArrays:Ef,Markdown:wf,MbedTLS:Df,MbedTLS_jll:xf,MicroCollections:Rf,MicrosoftMPI_jll:Tf,Missings:Mf,MistyClosures:Sf,Mmap:Nf,Mooncake:Af,MosaicViews:Cf,Moshi:Ff,MozillaCACerts_jll:If,MultivariateStats:kf,NLSolversBase:Of,NNlib:Lf,NPZ:Pf,NaNMath:zf,NameResolution:Bf,NamedArrays:Vf,NaturalSort:jf,NetworkOptions:Uf,ObjectFile:$f,OffsetArrays:Hf,OpenBLAS_jll:Zf,OpenLibm_jll:Gf,OpenMPI_jll:Kf,OpenSSL:qf,OpenSSL_jll:Wf,OpenSpecFun_jll:Jf,Optim:Xf,Optimisers:Yf,Optimization:Qf,OptimizationBase:ed,OptimizationOptimJL:nd,OrderedCollections:td,PDMats:rd,PackageExtensionCompat:sd,PaddedViews:od,Parameters:id,Parsers:ad,PeriodicTable:ld,Pickle:cd,Pkg:ud,PooledArrays:fd,PositiveFactorizations:dd,PrecompileTools:_d,Preferences:md,PrettyPrint:gd,PrettyTables:hd,Printf:pd,ProgressLogging:vd,ProgressMeter:bd,PtrArrays:yd,QuadGK:Ed,REPL:wd,Random:Dd,Random123:xd,RandomNumbers:Rd,RangeArrays:Td,Ratios:Md,RealDot:Sd,RecipesBase:Nd,RecursiveArrayTools:Ad,Reexport:Cd,Requires:Fd,ReverseDiff:Id,Richardson:kd,Rmath:Od,Rmath_jll:Ld,Roots:Pd,RuntimeGeneratedFunctions:zd,SHA:Bd,SSMProblems:Vd,SciMLBase:jd,SciMLOperators:Ud,SciMLStructures:$d,ScientificTypesBase:Hd,ScopedValues:Zd,Scratch:Gd,SentinelArrays:Kd,Serialization:qd,Setfield:Wd,SharedArrays:Jd,ShowCases:Xd,SimpleBufferStream:Yd,SimpleTraits:Qd,Sockets:e1,SortingAlgorithms:n1,SparseArrays:t1,SparseConnectivityTracer:r1,SparseInverseSubset:s1,SparseMatrixColorings:o1,SpecialFunctions:i1,SplittablesBase:a1,StackViews:l1,StaticArrays:c1,StaticArraysCore:u1,StatisticalTraits:f1,Statistics:d1,StatsAPI:_1,StatsBase:m1,StatsFuns:g1,StridedViews:h1,StringEncodings:p1,StringManipulation:v1,StructArrays:b1,StructIO:y1,StructTypes:E1,StyledStrings:w1,SuiteSparse:D1,SuiteSparse_jll:x1,SymbolicIndexingInterface:R1,TOML:T1,TableTraits:M1,Tables:S1,Tar:N1,TensorCore:A1,TerminalLoggers:C1,Test:F1,Tracy:I1,TranscodingStreams:k1,Transducers:O1,Turing:L1,URIs:P1,UUIDs:z1,UnPack:B1,Unicode:V1,Unitful:j1,UnitfulAtomic:U1,UnsafeAtomics:$1,WeakRefStrings:H1,WoodburyMatrices:Z1,WorkerUtilities:G1,ZipFile:K1,Zlib_jll:q1,Zygote:W1,ZygoteRules:J1,libaec_jll:X1,libblastrampoline_jll:Y1,nghttp2_jll:Q1,oneTBB_jll:e0,p7zip_jll:n0};function bt(e){return Object.entries(e).sort(([n,t],[r,i])=>n.localeCompare(r))}var r0=De('<tr><td class="svelte-7y9k9c"> </td><td class="version svelte-7y9k9c"> </td></tr>'),s0=De('<table id="manifest" class="svelte-7y9k9c"><thead><tr><th class="svelte-7y9k9c">Package</th><th class="svelte-7y9k9c">Version</th></tr></thead><tbody></tbody></table>');function o0(e,n){Un(n,!1),Wr();var t=s0(),r=Me(J(t));Sn(r,5,()=>bt(t0),Mn,(i,o)=>{let l=()=>L(o)[0],d=()=>L(o)[1];var a=r0(),c=J(a),g=J(c),_=Me(c),u=J(_);Se(()=>{Ke(g,l()),Ke(u,d()===null?"":`v${d()}`)}),ie(i,a)}),ie(e,t),$n()}function i0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ct,dr;function a0(){if(dr)return ct;dr=1;function e(s){return s instanceof Map?s.clear=s.delete=s.set=function(){throw new Error("map is read-only")}:s instanceof Set&&(s.add=s.clear=s.delete=function(){throw new Error("set is read-only")}),Object.freeze(s),Object.getOwnPropertyNames(s).forEach(f=>{const h=s[f],A=typeof h;(A==="object"||A==="function")&&!Object.isFrozen(h)&&e(h)}),s}class n{constructor(f){f.data===void 0&&(f.data={}),this.data=f.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(s,...f){const h=Object.create(null);for(const A in s)h[A]=s[A];return f.forEach(function(A){for(const Z in A)h[Z]=A[Z]}),h}const i="</span>",o=s=>!!s.scope,l=(s,{prefix:f})=>{if(s.startsWith("language:"))return s.replace("language:","language-");if(s.includes(".")){const h=s.split(".");return[`${f}${h.shift()}`,...h.map((A,Z)=>`${A}${"_".repeat(Z+1)}`)].join(" ")}return`${f}${s}`};class d{constructor(f,h){this.buffer="",this.classPrefix=h.classPrefix,f.walk(this)}addText(f){this.buffer+=t(f)}openNode(f){if(!o(f))return;const h=l(f.scope,{prefix:this.classPrefix});this.span(h)}closeNode(f){o(f)&&(this.buffer+=i)}value(){return this.buffer}span(f){this.buffer+=`<span class="${f}">`}}const a=(s={})=>{const f={children:[]};return Object.assign(f,s),f};class c{constructor(){this.rootNode=a(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(f){this.top.children.push(f)}openNode(f){const h=a({scope:f});this.add(h),this.stack.push(h)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(f){return this.constructor._walk(f,this.rootNode)}static _walk(f,h){return typeof h=="string"?f.addText(h):h.children&&(f.openNode(h),h.children.forEach(A=>this._walk(f,A)),f.closeNode(h)),f}static _collapse(f){typeof f!="string"&&f.children&&(f.children.every(h=>typeof h=="string")?f.children=[f.children.join("")]:f.children.forEach(h=>{c._collapse(h)}))}}class g extends c{constructor(f){super(),this.options=f}addText(f){f!==""&&this.add(f)}startScope(f){this.openNode(f)}endScope(){this.closeNode()}__addSublanguage(f,h){const A=f.root;h&&(A.scope=`language:${h}`),this.add(A)}toHTML(){return new d(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(s){return s?typeof s=="string"?s:s.source:null}function u(s){return S("(?=",s,")")}function v(s){return S("(?:",s,")*")}function p(s){return S("(?:",s,")?")}function S(...s){return s.map(h=>_(h)).join("")}function F(s){const f=s[s.length-1];return typeof f=="object"&&f.constructor===Object?(s.splice(s.length-1,1),f):{}}function z(...s){return"("+(F(s).capture?"":"?:")+s.map(A=>_(A)).join("|")+")"}function H(s){return new RegExp(s.toString()+"|").exec("").length-1}function T(s,f){const h=s&&s.exec(f);return h&&h.index===0}const D=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function R(s,{joinWith:f}){let h=0;return s.map(A=>{h+=1;const Z=h;let G=_(A),E="";for(;G.length>0;){const y=D.exec(G);if(!y){E+=G;break}E+=G.substring(0,y.index),G=G.substring(y.index+y[0].length),y[0][0]==="\\"&&y[1]?E+="\\"+String(Number(y[1])+Z):(E+=y[0],y[0]==="("&&h++)}return E}).map(A=>`(${A})`).join(f)}const ee=/\b\B/,N="[a-zA-Z]\\w*",$="[a-zA-Z_]\\w*",Y="\\b\\d+(\\.\\d+)?",xe="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ge="\\b(0b[01]+)",Ue="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",sn=(s={})=>{const f=/^#![ ]*\//;return s.binary&&(s.begin=S(f,/.*\b/,s.binary,/\b.*/)),r({scope:"meta",begin:f,end:/$/,relevance:0,"on:begin":(h,A)=>{h.index!==0&&A.ignoreMatch()}},s)},ne={begin:"\\\\[\\s\\S]",relevance:0},he={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ne]},Re={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ne]},Fe={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},pe=function(s,f,h={}){const A=r({scope:"comment",begin:s,end:f,contains:[]},h);A.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const Z=z("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return A.contains.push({begin:S(/[ ]+/,"(",Z,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),A},Yn=pe("//","$"),on=pe("/\\*","\\*/"),hn=pe("#","$"),Jr={scope:"number",begin:Y,relevance:0},Xr={scope:"number",begin:xe,relevance:0},Yr={scope:"number",begin:ge,relevance:0},Qr={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ne,{begin:/\[/,end:/\]/,relevance:0,contains:[ne]}]},es={scope:"title",begin:N,relevance:0},ns={scope:"title",begin:$,relevance:0},ts={begin:"\\.\\s*"+$,relevance:0};var pn=Object.freeze({__proto__:null,APOS_STRING_MODE:he,BACKSLASH_ESCAPE:ne,BINARY_NUMBER_MODE:Yr,BINARY_NUMBER_RE:ge,COMMENT:pe,C_BLOCK_COMMENT_MODE:on,C_LINE_COMMENT_MODE:Yn,C_NUMBER_MODE:Xr,C_NUMBER_RE:xe,END_SAME_AS_BEGIN:function(s){return Object.assign(s,{"on:begin":(f,h)=>{h.data._beginMatch=f[1]},"on:end":(f,h)=>{h.data._beginMatch!==f[1]&&h.ignoreMatch()}})},HASH_COMMENT_MODE:hn,IDENT_RE:N,MATCH_NOTHING_RE:ee,METHOD_GUARD:ts,NUMBER_MODE:Jr,NUMBER_RE:Y,PHRASAL_WORDS_MODE:Fe,QUOTE_STRING_MODE:Re,REGEXP_MODE:Qr,RE_STARTERS_RE:Ue,SHEBANG:sn,TITLE_MODE:es,UNDERSCORE_IDENT_RE:$,UNDERSCORE_TITLE_MODE:ns});function rs(s,f){s.input[s.index-1]==="."&&f.ignoreMatch()}function ss(s,f){s.className!==void 0&&(s.scope=s.className,delete s.className)}function os(s,f){f&&s.beginKeywords&&(s.begin="\\b("+s.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",s.__beforeBegin=rs,s.keywords=s.keywords||s.beginKeywords,delete s.beginKeywords,s.relevance===void 0&&(s.relevance=0))}function is(s,f){Array.isArray(s.illegal)&&(s.illegal=z(...s.illegal))}function as(s,f){if(s.match){if(s.begin||s.end)throw new Error("begin & end are not supported with match");s.begin=s.match,delete s.match}}function ls(s,f){s.relevance===void 0&&(s.relevance=1)}const cs=(s,f)=>{if(!s.beforeMatch)return;if(s.starts)throw new Error("beforeMatch cannot be used with starts");const h=Object.assign({},s);Object.keys(s).forEach(A=>{delete s[A]}),s.keywords=h.keywords,s.begin=S(h.beforeMatch,u(h.begin)),s.starts={relevance:0,contains:[Object.assign(h,{endsParent:!0})]},s.relevance=0,delete h.beforeMatch},us=["of","and","for","in","not","or","if","then","parent","list","value"],fs="keyword";function Lt(s,f,h=fs){const A=Object.create(null);return typeof s=="string"?Z(h,s.split(" ")):Array.isArray(s)?Z(h,s):Object.keys(s).forEach(function(G){Object.assign(A,Lt(s[G],f,G))}),A;function Z(G,E){f&&(E=E.map(y=>y.toLowerCase())),E.forEach(function(y){const M=y.split("|");A[M[0]]=[G,ds(M[0],M[1])]})}}function ds(s,f){return f?Number(f):_s(s)?0:1}function _s(s){return us.includes(s.toLowerCase())}const Pt={},$e=s=>{console.error(s)},zt=(s,...f)=>{console.log(`WARN: ${s}`,...f)},Je=(s,f)=>{Pt[`${s}/${f}`]||(console.log(`Deprecated as of ${s}. ${f}`),Pt[`${s}/${f}`]=!0)},vn=new Error;function Bt(s,f,{key:h}){let A=0;const Z=s[h],G={},E={};for(let y=1;y<=f.length;y++)E[y+A]=Z[y],G[y+A]=!0,A+=H(f[y-1]);s[h]=E,s[h]._emit=G,s[h]._multi=!0}function ms(s){if(Array.isArray(s.begin)){if(s.skip||s.excludeBegin||s.returnBegin)throw $e("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),vn;if(typeof s.beginScope!="object"||s.beginScope===null)throw $e("beginScope must be object"),vn;Bt(s,s.begin,{key:"beginScope"}),s.begin=R(s.begin,{joinWith:""})}}function gs(s){if(Array.isArray(s.end)){if(s.skip||s.excludeEnd||s.returnEnd)throw $e("skip, excludeEnd, returnEnd not compatible with endScope: {}"),vn;if(typeof s.endScope!="object"||s.endScope===null)throw $e("endScope must be object"),vn;Bt(s,s.end,{key:"endScope"}),s.end=R(s.end,{joinWith:""})}}function hs(s){s.scope&&typeof s.scope=="object"&&s.scope!==null&&(s.beginScope=s.scope,delete s.scope)}function ps(s){hs(s),typeof s.beginScope=="string"&&(s.beginScope={_wrap:s.beginScope}),typeof s.endScope=="string"&&(s.endScope={_wrap:s.endScope}),ms(s),gs(s)}function vs(s){function f(E,y){return new RegExp(_(E),"m"+(s.case_insensitive?"i":"")+(s.unicodeRegex?"u":"")+(y?"g":""))}class h{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(y,M){M.position=this.position++,this.matchIndexes[this.matchAt]=M,this.regexes.push([M,y]),this.matchAt+=H(y)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const y=this.regexes.map(M=>M[1]);this.matcherRe=f(R(y,{joinWith:"|"}),!0),this.lastIndex=0}exec(y){this.matcherRe.lastIndex=this.lastIndex;const M=this.matcherRe.exec(y);if(!M)return null;const W=M.findIndex((an,et)=>et>0&&an!==void 0),K=this.matchIndexes[W];return M.splice(0,W),Object.assign(M,K)}}class A{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(y){if(this.multiRegexes[y])return this.multiRegexes[y];const M=new h;return this.rules.slice(y).forEach(([W,K])=>M.addRule(W,K)),M.compile(),this.multiRegexes[y]=M,M}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(y,M){this.rules.push([y,M]),M.type==="begin"&&this.count++}exec(y){const M=this.getMatcher(this.regexIndex);M.lastIndex=this.lastIndex;let W=M.exec(y);if(this.resumingScanAtSamePosition()&&!(W&&W.index===this.lastIndex)){const K=this.getMatcher(0);K.lastIndex=this.lastIndex+1,W=K.exec(y)}return W&&(this.regexIndex+=W.position+1,this.regexIndex===this.count&&this.considerAll()),W}}function Z(E){const y=new A;return E.contains.forEach(M=>y.addRule(M.begin,{rule:M,type:"begin"})),E.terminatorEnd&&y.addRule(E.terminatorEnd,{type:"end"}),E.illegal&&y.addRule(E.illegal,{type:"illegal"}),y}function G(E,y){const M=E;if(E.isCompiled)return M;[ss,as,ps,cs].forEach(K=>K(E,y)),s.compilerExtensions.forEach(K=>K(E,y)),E.__beforeBegin=null,[os,is,ls].forEach(K=>K(E,y)),E.isCompiled=!0;let W=null;return typeof E.keywords=="object"&&E.keywords.$pattern&&(E.keywords=Object.assign({},E.keywords),W=E.keywords.$pattern,delete E.keywords.$pattern),W=W||/\w+/,E.keywords&&(E.keywords=Lt(E.keywords,s.case_insensitive)),M.keywordPatternRe=f(W,!0),y&&(E.begin||(E.begin=/\B|\b/),M.beginRe=f(M.begin),!E.end&&!E.endsWithParent&&(E.end=/\B|\b/),E.end&&(M.endRe=f(M.end)),M.terminatorEnd=_(M.end)||"",E.endsWithParent&&y.terminatorEnd&&(M.terminatorEnd+=(E.end?"|":"")+y.terminatorEnd)),E.illegal&&(M.illegalRe=f(E.illegal)),E.contains||(E.contains=[]),E.contains=[].concat(...E.contains.map(function(K){return bs(K==="self"?E:K)})),E.contains.forEach(function(K){G(K,M)}),E.starts&&G(E.starts,y),M.matcher=Z(M),M}if(s.compilerExtensions||(s.compilerExtensions=[]),s.contains&&s.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return s.classNameAliases=r(s.classNameAliases||{}),G(s)}function Vt(s){return s?s.endsWithParent||Vt(s.starts):!1}function bs(s){return s.variants&&!s.cachedVariants&&(s.cachedVariants=s.variants.map(function(f){return r(s,{variants:null},f)})),s.cachedVariants?s.cachedVariants:Vt(s)?r(s,{starts:s.starts?r(s.starts):null}):Object.isFrozen(s)?r(s):s}var ys="11.11.1";class Es extends Error{constructor(f,h){super(f),this.name="HTMLInjectionError",this.html=h}}const Qn=t,jt=r,Ut=Symbol("nomatch"),ws=7,$t=function(s){const f=Object.create(null),h=Object.create(null),A=[];let Z=!0;const G="Could not find the language '{}', did you forget to load/include a language module?",E={disableAutodetect:!0,name:"Plain text",contains:[]};let y={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:g};function M(m){return y.noHighlightRe.test(m)}function W(m){let x=m.className+" ";x+=m.parentNode?m.parentNode.className:"";const k=y.languageDetectRe.exec(x);if(k){const V=Ie(k[1]);return V||(zt(G.replace("{}",k[1])),zt("Falling back to no-highlight mode for this block.",m)),V?k[1]:"no-highlight"}return x.split(/\s+/).find(V=>M(V)||Ie(V))}function K(m,x,k){let V="",q="";typeof x=="object"?(V=m,k=x.ignoreIllegals,q=x.language):(Je("10.7.0","highlight(lang, code, ...args) has been deprecated."),Je("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),q=m,V=x),k===void 0&&(k=!0);const _e={code:V,language:q};yn("before:highlight",_e);const ke=_e.result?_e.result:an(_e.language,_e.code,k);return ke.code=_e.code,yn("after:highlight",ke),ke}function an(m,x,k,V){const q=Object.create(null);function _e(b,w){return b.keywords[w]}function ke(){if(!C.keywords){X.addText(j);return}let b=0;C.keywordPatternRe.lastIndex=0;let w=C.keywordPatternRe.exec(j),I="";for(;w;){I+=j.substring(b,w.index);const O=be.case_insensitive?w[0].toLowerCase():w[0],Q=_e(C,O);if(Q){const[Te,Bs]=Q;if(X.addText(I),I="",q[O]=(q[O]||0)+1,q[O]<=ws&&(Dn+=Bs),Te.startsWith("_"))I+=w[0];else{const Vs=be.classNameAliases[Te]||Te;ve(w[0],Vs)}}else I+=w[0];b=C.keywordPatternRe.lastIndex,w=C.keywordPatternRe.exec(j)}I+=j.substring(b),X.addText(I)}function En(){if(j==="")return;let b=null;if(typeof C.subLanguage=="string"){if(!f[C.subLanguage]){X.addText(j);return}b=an(C.subLanguage,j,!0,Xt[C.subLanguage]),Xt[C.subLanguage]=b._top}else b=nt(j,C.subLanguage.length?C.subLanguage:null);C.relevance>0&&(Dn+=b.relevance),X.__addSublanguage(b._emitter,b.language)}function ae(){C.subLanguage!=null?En():ke(),j=""}function ve(b,w){b!==""&&(X.startScope(w),X.addText(b),X.endScope())}function Kt(b,w){let I=1;const O=w.length-1;for(;I<=O;){if(!b._emit[I]){I++;continue}const Q=be.classNameAliases[b[I]]||b[I],Te=w[I];Q?ve(Te,Q):(j=Te,ke(),j=""),I++}}function qt(b,w){return b.scope&&typeof b.scope=="string"&&X.openNode(be.classNameAliases[b.scope]||b.scope),b.beginScope&&(b.beginScope._wrap?(ve(j,be.classNameAliases[b.beginScope._wrap]||b.beginScope._wrap),j=""):b.beginScope._multi&&(Kt(b.beginScope,w),j="")),C=Object.create(b,{parent:{value:C}}),C}function Wt(b,w,I){let O=T(b.endRe,I);if(O){if(b["on:end"]){const Q=new n(b);b["on:end"](w,Q),Q.isMatchIgnored&&(O=!1)}if(O){for(;b.endsParent&&b.parent;)b=b.parent;return b}}if(b.endsWithParent)return Wt(b.parent,w,I)}function ks(b){return C.matcher.regexIndex===0?(j+=b[0],1):(ot=!0,0)}function Os(b){const w=b[0],I=b.rule,O=new n(I),Q=[I.__beforeBegin,I["on:begin"]];for(const Te of Q)if(Te&&(Te(b,O),O.isMatchIgnored))return ks(w);return I.skip?j+=w:(I.excludeBegin&&(j+=w),ae(),!I.returnBegin&&!I.excludeBegin&&(j=w)),qt(I,b),I.returnBegin?0:w.length}function Ls(b){const w=b[0],I=x.substring(b.index),O=Wt(C,b,I);if(!O)return Ut;const Q=C;C.endScope&&C.endScope._wrap?(ae(),ve(w,C.endScope._wrap)):C.endScope&&C.endScope._multi?(ae(),Kt(C.endScope,b)):Q.skip?j+=w:(Q.returnEnd||Q.excludeEnd||(j+=w),ae(),Q.excludeEnd&&(j=w));do C.scope&&X.closeNode(),!C.skip&&!C.subLanguage&&(Dn+=C.relevance),C=C.parent;while(C!==O.parent);return O.starts&&qt(O.starts,b),Q.returnEnd?0:w.length}function Ps(){const b=[];for(let w=C;w!==be;w=w.parent)w.scope&&b.unshift(w.scope);b.forEach(w=>X.openNode(w))}let wn={};function Jt(b,w){const I=w&&w[0];if(j+=b,I==null)return ae(),0;if(wn.type==="begin"&&w.type==="end"&&wn.index===w.index&&I===""){if(j+=x.slice(w.index,w.index+1),!Z){const O=new Error(`0 width match regex (${m})`);throw O.languageName=m,O.badRule=wn.rule,O}return 1}if(wn=w,w.type==="begin")return Os(w);if(w.type==="illegal"&&!k){const O=new Error('Illegal lexeme "'+I+'" for mode "'+(C.scope||"<unnamed>")+'"');throw O.mode=C,O}else if(w.type==="end"){const O=Ls(w);if(O!==Ut)return O}if(w.type==="illegal"&&I==="")return j+=`
`,1;if(st>1e5&&st>w.index*3)throw new Error("potential infinite loop, way more iterations than matches");return j+=I,I.length}const be=Ie(m);if(!be)throw $e(G.replace("{}",m)),new Error('Unknown language: "'+m+'"');const zs=vs(be);let rt="",C=V||zs;const Xt={},X=new y.__emitter(y);Ps();let j="",Dn=0,He=0,st=0,ot=!1;try{if(be.__emitTokens)be.__emitTokens(x,X);else{for(C.matcher.considerAll();;){st++,ot?ot=!1:C.matcher.considerAll(),C.matcher.lastIndex=He;const b=C.matcher.exec(x);if(!b)break;const w=x.substring(He,b.index),I=Jt(w,b);He=b.index+I}Jt(x.substring(He))}return X.finalize(),rt=X.toHTML(),{language:m,value:rt,relevance:Dn,illegal:!1,_emitter:X,_top:C}}catch(b){if(b.message&&b.message.includes("Illegal"))return{language:m,value:Qn(x),illegal:!0,relevance:0,_illegalBy:{message:b.message,index:He,context:x.slice(He-100,He+100),mode:b.mode,resultSoFar:rt},_emitter:X};if(Z)return{language:m,value:Qn(x),illegal:!1,relevance:0,errorRaised:b,_emitter:X,_top:C};throw b}}function et(m){const x={value:Qn(m),illegal:!1,relevance:0,_top:E,_emitter:new y.__emitter(y)};return x._emitter.addText(m),x}function nt(m,x){x=x||y.languages||Object.keys(f);const k=et(m),V=x.filter(Ie).filter(Gt).map(ae=>an(ae,m,!1));V.unshift(k);const q=V.sort((ae,ve)=>{if(ae.relevance!==ve.relevance)return ve.relevance-ae.relevance;if(ae.language&&ve.language){if(Ie(ae.language).supersetOf===ve.language)return 1;if(Ie(ve.language).supersetOf===ae.language)return-1}return 0}),[_e,ke]=q,En=_e;return En.secondBest=ke,En}function Ds(m,x,k){const V=x&&h[x]||k;m.classList.add("hljs"),m.classList.add(`language-${V}`)}function tt(m){let x=null;const k=W(m);if(M(k))return;if(yn("before:highlightElement",{el:m,language:k}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(y.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),y.throwUnescapedHTML))throw new Es("One of your code blocks includes unescaped HTML.",m.innerHTML);x=m;const V=x.textContent,q=k?K(V,{language:k,ignoreIllegals:!0}):nt(V);m.innerHTML=q.value,m.dataset.highlighted="yes",Ds(m,k,q.language),m.result={language:q.language,re:q.relevance,relevance:q.relevance},q.secondBest&&(m.secondBest={language:q.secondBest.language,relevance:q.secondBest.relevance}),yn("after:highlightElement",{el:m,result:q,text:V})}function xs(m){y=jt(y,m)}const Rs=()=>{bn(),Je("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Ts(){bn(),Je("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Ht=!1;function bn(){function m(){bn()}if(document.readyState==="loading"){Ht||window.addEventListener("DOMContentLoaded",m,!1),Ht=!0;return}document.querySelectorAll(y.cssSelector).forEach(tt)}function Ms(m,x){let k=null;try{k=x(s)}catch(V){if($e("Language definition for '{}' could not be registered.".replace("{}",m)),Z)$e(V);else throw V;k=E}k.name||(k.name=m),f[m]=k,k.rawDefinition=x.bind(null,s),k.aliases&&Zt(k.aliases,{languageName:m})}function Ss(m){delete f[m];for(const x of Object.keys(h))h[x]===m&&delete h[x]}function Ns(){return Object.keys(f)}function Ie(m){return m=(m||"").toLowerCase(),f[m]||f[h[m]]}function Zt(m,{languageName:x}){typeof m=="string"&&(m=[m]),m.forEach(k=>{h[k.toLowerCase()]=x})}function Gt(m){const x=Ie(m);return x&&!x.disableAutodetect}function As(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=x=>{m["before:highlightBlock"](Object.assign({block:x.el},x))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=x=>{m["after:highlightBlock"](Object.assign({block:x.el},x))})}function Cs(m){As(m),A.push(m)}function Fs(m){const x=A.indexOf(m);x!==-1&&A.splice(x,1)}function yn(m,x){const k=m;A.forEach(function(V){V[k]&&V[k](x)})}function Is(m){return Je("10.7.0","highlightBlock will be removed entirely in v12.0"),Je("10.7.0","Please use highlightElement now."),tt(m)}Object.assign(s,{highlight:K,highlightAuto:nt,highlightAll:bn,highlightElement:tt,highlightBlock:Is,configure:xs,initHighlighting:Rs,initHighlightingOnLoad:Ts,registerLanguage:Ms,unregisterLanguage:Ss,listLanguages:Ns,getLanguage:Ie,registerAliases:Zt,autoDetection:Gt,inherit:jt,addPlugin:Cs,removePlugin:Fs}),s.debugMode=function(){Z=!1},s.safeMode=function(){Z=!0},s.versionString=ys,s.regex={concat:S,lookahead:u,either:z,optional:p,anyNumberOfTimes:v};for(const m in pn)typeof pn[m]=="object"&&e(pn[m]);return Object.assign(s,pn),s},Xe=$t({});return Xe.newInstance=()=>$t({}),ct=Xe,Xe.HighlightJS=Xe,Xe.default=Xe,ct}var l0=a0();const _r=i0(l0);var c0=De("<pre><code><!></code></pre>");function u0(e,n){const t=zn(n,["children","$$slots","$$events","$$legacy"]),r=zn(t,["code","highlighted","languageName","langtag"]);let i=ze(n,"code",8),o=ze(n,"highlighted",8),l=ze(n,"languageName",8,"plaintext"),d=ze(n,"langtag",8,!1);var a=c0();let c;var g=J(a);Ot(g,1,"",null,{},{hljs:!0});var _=J(g);{var u=p=>{var S=kt(),F=Nt(S);si(F,o),ie(p,S)},v=p=>{var S=Jo();Se(()=>Ke(S,i())),ie(p,S)};pt(_,p=>{o()?p(u):p(v,!1)})}Se(p=>c=di(a,c,{"data-language":l(),...r,[fn]:p},"svelte-1w9vok"),[()=>({langtag:d()})],Mt),ie(e,a)}function f0(e,n){const t=zn(n,["children","$$slots","$$events","$$legacy"]),r=zn(t,["language","code","langtag"]);Un(n,!1);let i=ze(n,"language",8),o=ze(n,"code",8),l=ze(n,"langtag",8,!1);const d=vi();let a=St("");bi(()=>{L(a)&&d("highlight",{highlighted:L(a)})}),To(()=>(mt(i()),mt(o())),()=>{_r.registerLanguage(i().name,i().register),fe(a,_r.highlight(o(),{language:i().name}).value)}),Mo(),Wr();var c=kt(),g=Nt(c);oi(g,n,"default",{get highlighted(){return L(a)}},_=>{u0(_,hi(()=>r,{get languageName(){return i().name},get langtag(){return l()},get highlighted(){return L(a)},get code(){return o()}}))}),ie(e,c),$n()}function d0(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",o={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},l={keywords:o,illegal:/<\//},d={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},a={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},c={className:"subst",begin:/\$\(/,end:/\)/,keywords:o},g={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,c,g],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},u={className:"string",contains:[e.BACKSLASH_ESCAPE,c,g],begin:"`",end:"`"},v={className:"meta",begin:"@"+n},p={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return l.name="Julia",l.contains=[d,a,_,u,v,p,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],c.contains=l.contains,l}const _0={name:"julia",register:d0};var m0=De('<th class="svelte-m8v9hl"> </th>'),g0=De('<td class="svelte-m8v9hl"> </td>'),h0=De('<a class="issue svelte-m8v9hl" target="_blank">(?)</a>'),p0=De('<td class="svelte-m8v9hl"><!> <span> </span></td>'),v0=De('<tr class="svelte-m8v9hl"><td class="svelte-m8v9hl"> <div class="model-definition svelte-m8v9hl"><!></div></td><!></tr>'),b0=De('<table id="results" class="svelte-m8v9hl"><thead><tr class="svelte-m8v9hl"><th class="svelte-m8v9hl">Model name \\\\ AD type</th><!></tr></thead><tbody></tbody></table>');function y0(e,n){Un(n,!0);const t=Object.keys(n.data),r=Object.keys(n.data[t[0]]),i="https://github.com/EnzymeAD/Enzyme.jl/issues/1995",l={assume_mvnormal__EnzymeForward:i,assume_wishart__EnzymeForward:i,multithreaded__Mooncake:"https://github.com/chalk-lab/Mooncake.jl/issues/570"};var d=b0(),a=J(d),c=J(a),g=Me(J(c));Sn(g,17,()=>r,Mn,(u,v)=>{var p=m0(),S=J(p);Se(()=>Ke(S,L(v))),ie(u,p)});var _=Me(a);Sn(_,21,()=>bt(n.data),Mn,(u,v)=>{let p=()=>L(v)[0],S=()=>L(v)[1];var F=v0(),z=J(F),H=J(z),T=Me(H),D=J(T);f0(D,{language:_0,get code(){return n.modelDefinitions[p()]}});var R=Me(z);Sn(R,17,()=>bt(S()),Mn,(ee,N)=>{let $=()=>L(N)[0],Y=()=>L(N)[1];var xe=kt(),ge=Nt(xe);{var Ue=ne=>{var he=g0(),Re=J(he);Se(Fe=>Ke(Re,Fe),[()=>Y().toFixed(3)]),ie(ne,he)},sn=ne=>{var he=p0(),Re=J(he);{var Fe=on=>{var hn=h0();Se(()=>vt(hn,"href",l[`${p()}__${$()}`])),ie(on,hn)};pt(Re,on=>{l[`${p()}__${$()}`]&&on(Fe)})}var pe=Me(Re,2),Yn=J(pe);Se(()=>{Ot(pe,1,Hr(Y()),"svelte-m8v9hl"),Ke(Yn,Y())}),ie(ne,he)};pt(ge,ne=>{typeof Y()=="number"?ne(Ue):ne(sn,!1)})}ie(ee,xe)}),Se(()=>Ke(H,`${p()??""} `)),ie(u,F)}),ie(e,d),$n()}var E0=De(`<div id="main-wrapper" class="svelte-14rlgmo"><main class="svelte-14rlgmo"><h1>Turing AD tests</h1> <p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p> <p>This page is intended as a brief overview of how different AD
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
                describes the problem.</li></ul> <h2>Results</h2> <p><a href="adtests.json" target="_blank" download="">Download the raw data (JSON)</a></p> <!> <h2>Manifest</h2> <p>The tests above were run with the following package versions:</p> <!></main></div>`);function w0(e){var n=E0(),t=J(n),r=Me(J(t),14);y0(r,{data:ga,modelDefinitions:cl});var i=Me(r,6);o0(i,{}),ie(e,n)}Xo(w0,{target:document.getElementById("app")});
