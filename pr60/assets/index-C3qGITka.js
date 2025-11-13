(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Yt=!1;var Vn=Array.isArray,$o=Array.prototype.indexOf,yt=Array.from,Uo=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,gr=Object.getOwnPropertyDescriptors,Ho=Object.prototype,Zo=Array.prototype,wt=Object.getPrototypeOf,Qt=Object.isExtensible;function ln(e){return typeof e=="function"}function Go(e){return e()}function ut(e){for(var n=0;n<e.length;n++)e[n]()}const me=2,hr=4,Bn=8,Et=16,Ce=32,nn=64,Sn=128,ce=256,An=512,oe=1024,we=2048,je=4096,Se=8192,jn=16384,Ko=32768,Dt=65536,qo=1<<17,Wo=1<<19,pr=1<<20,ft=1<<21,qe=Symbol("$state"),vr=Symbol("legacy props"),Jo=Symbol("");function br(e){return e===this.v}function Xo(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Rt(e){return!Xo(e,this.v)}function Yo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function es(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ns(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ts(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function rs(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function os(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ss(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function is(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let mn=!1,as=!1;function ls(){mn=!0}const xt=1,Tt=2,yr=4,cs=8,us=16,fs=1,ds=2,wr=4,_s=8,ms=16,gs=2,se=Symbol(),hs="http://www.w3.org/1999/xhtml",ps="@attach";function Er(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let $=null;function er(e){$=e}function $n(e,n=!1,t){var r=$={p:$,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};mn&&!n&&($.l={s:null,u:null,r1:[],r2:Qe(!1)}),Ds(()=>{r.d=!0})}function Un(e){const n=$;if(n!==null){const l=n.e;if(l!==null){var t=P,r=V;n.e=null;try{for(var i=0;i<l.length;i++){var s=l[i];Be(s.effect),Ee(s.reaction),At(s.fn)}}finally{Be(t),Ee(r)}}$=n.p,n.m=!0}return{}}function Hn(){return!mn||$!==null&&$.l===null}function Ze(e){if(typeof e!="object"||e===null||qe in e)return e;const n=wt(e);if(n!==Ho&&n!==Zo)return e;var t=new Map,r=Vn(e),i=Oe(0),s=V,l=d=>{var a=V;Ee(s);var c=d();return Ee(a),c};return r&&t.set("length",Oe(e.length)),new Proxy(e,{defineProperty(d,a,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&os();var g=t.get(a);return g===void 0?(g=l(()=>Oe(c.value)),t.set(a,g)):fe(g,l(()=>Ze(c.value))),!0},deleteProperty(d,a){var c=t.get(a);if(c===void 0)a in d&&(t.set(a,l(()=>Oe(se))),it(i));else{if(r&&typeof a=="string"){var g=t.get("length"),_=Number(a);Number.isInteger(_)&&_<g.v&&fe(g,_)}fe(c,se),it(i)}return!0},get(d,a,c){var v;if(a===qe)return e;var g=t.get(a),_=a in d;if(g===void 0&&(!_||(v=Ve(d,a))!=null&&v.writable)&&(g=l(()=>Oe(Ze(_?d[a]:se))),t.set(a,g)),g!==void 0){var u=L(g);return u===se?void 0:u}return Reflect.get(d,a,c)},getOwnPropertyDescriptor(d,a){var c=Reflect.getOwnPropertyDescriptor(d,a);if(c&&"value"in c){var g=t.get(a);g&&(c.value=L(g))}else if(c===void 0){var _=t.get(a),u=_==null?void 0:_.v;if(_!==void 0&&u!==se)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(d,a){var u;if(a===qe)return!0;var c=t.get(a),g=c!==void 0&&c.v!==se||Reflect.has(d,a);if(c!==void 0||P!==null&&(!g||(u=Ve(d,a))!=null&&u.writable)){c===void 0&&(c=l(()=>Oe(g?Ze(d[a]):se)),t.set(a,c));var _=L(c);if(_===se)return!1}return g},set(d,a,c,g){var H;var _=t.get(a),u=a in d;if(r&&a==="length")for(var v=c;v<_.v;v+=1){var p=t.get(v+"");p!==void 0?fe(p,se):v in d&&(p=l(()=>Oe(se)),t.set(v+"",p))}_===void 0?(!u||(H=Ve(d,a))!=null&&H.writable)&&(_=l(()=>Oe(void 0)),fe(_,l(()=>Ze(c))),t.set(a,_)):(u=_.v!==se,fe(_,l(()=>Ze(c))));var N=Reflect.getOwnPropertyDescriptor(d,a);if(N!=null&&N.set&&N.set.call(g,c),!u){if(r&&typeof a=="string"){var F=t.get("length"),z=Number(a);Number.isInteger(z)&&z>=F.v&&fe(F,z+1)}it(i)}return!0},ownKeys(d){L(i);var a=Reflect.ownKeys(d).filter(_=>{var u=t.get(_);return u===void 0||u.v!==se});for(var[c,g]of t)g.v!==se&&!(c in d)&&a.push(c);return a},setPrototypeOf(){ss()}})}function it(e,n=1){fe(e,e.v+n)}function dn(e){var n=me|we,t=V!==null&&(V.f&me)!==0?V:null;return P===null||t!==null&&(t.f&ce)!==0?n|=ce:P.f|=pr,{ctx:$,deps:null,effects:null,equals:br,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??P}}function Mt(e){const n=dn(e);return n.equals=Rt,n}function Dr(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)Ae(n[t])}}function vs(e){for(var n=e.parent;n!==null;){if((n.f&me)===0)return n;n=n.parent}return null}function Rr(e){var n,t=P;Be(vs(e));try{Dr(e),n=Br(e)}finally{Be(t)}return n}function xr(e){var n=Rr(e),t=(Pe||(e.f&ce)!==0)&&e.deps!==null?je:oe;de(e,t),e.equals(n)||(e.v=n,e.wv=zr())}const _n=new Map;function Qe(e,n){var t={f:0,v:e,reactions:null,equals:br,rv:0,wv:0};return t}function Oe(e,n){const t=Qe(e);return As(t),t}function Nt(e,n=!1){var r;const t=Qe(e);return n||(t.equals=Rt),mn&&$!==null&&$.l!==null&&((r=$.l).s??(r.s=[])).push(t),t}function fe(e,n,t=!1){V!==null&&!ye&&Hn()&&(V.f&(me|Et))!==0&&!(re!=null&&re.includes(e))&&is();let r=t?Ze(n):n;return dt(e,r)}function dt(e,n){if(!e.equals(n)){var t=e.v;gn?_n.set(e,n):_n.set(e,t),e.v=n,(e.f&me)!==0&&((e.f&we)!==0&&Rr(e),de(e,(e.f&ce)===0?oe:je)),e.wv=zr(),Tr(e,we),Hn()&&P!==null&&(P.f&oe)!==0&&(P.f&(Ce|nn))===0&&(ue===null?Cs([e]):ue.push(e))}return n}function nr(e,n=1){var t=L(e),r=n===1?t++:t--;return fe(e,t),r}function Tr(e,n){var t=e.reactions;if(t!==null)for(var r=Hn(),i=t.length,s=0;s<i;s++){var l=t[s],d=l.f;(d&we)===0&&(!r&&l===P||(de(l,n),(d&(oe|ce))!==0&&((d&me)!==0?Tr(l,je):Jn(l))))}}let bs=!1;var tr,Mr,Nr,Sr;function ys(){if(tr===void 0){tr=window,Mr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Nr=Ve(n,"firstChild").get,Sr=Ve(n,"nextSibling").get,Qt(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Qt(t)&&(t.__t=void 0)}}function Zn(e=""){return document.createTextNode(e)}function Ge(e){return Nr.call(e)}function Gn(e){return Sr.call(e)}function J(e,n){return Ge(e)}function St(e,n){{var t=Ge(e);return t instanceof Comment&&t.data===""?Gn(t):t}}function Me(e,n=1,t=!1){let r=e;for(;n--;)r=Gn(r);return r}function ws(e){e.textContent=""}function Ar(e){P===null&&V===null&&es(),V!==null&&(V.f&ce)!==0&&P===null&&Qo(),gn&&Yo()}function Es(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function tn(e,n,t,r=!0){var i=P,s={ctx:$,deps:null,nodes_start:null,nodes_end:null,f:e|we,first:null,fn:n,last:null,next:null,parent:i,prev:null,teardown:null,transitions:null,wv:0};if(t)try{Wn(s),s.f|=Ko}catch(a){throw Ae(s),a}else n!==null&&Jn(s);var l=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(pr|Sn))===0;if(!l&&r&&(i!==null&&Es(s,i),V!==null&&(V.f&me)!==0)){var d=V;(d.effects??(d.effects=[])).push(s)}return s}function Ds(e){const n=tn(Bn,null,!1);return de(n,oe),n.teardown=e,n}function rr(e){Ar();var n=P!==null&&(P.f&Ce)!==0&&$!==null&&!$.m;if(n){var t=$;(t.e??(t.e=[])).push({fn:e,effect:P,reaction:V})}else{var r=At(e);return r}}function Rs(e){return Ar(),Ct(e)}function xs(e){const n=tn(nn,e,!0);return(t={})=>new Promise(r=>{t.outro?Cn(n,()=>{Ae(n),r(void 0)}):(Ae(n),r(void 0))})}function At(e){return tn(hr,e,!1)}function Ts(e,n){var t=$,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=Ct(()=>{e(),!r.ran&&(r.ran=!0,fe(t.l.r2,!0),Pn(n))})}function Ms(){var e=$;Ct(()=>{if(L(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&oe)!==0&&de(t,je),rn(t)&&Wn(t),n.ran=!1}e.l.r2.v=!1}})}function Ct(e){return tn(Bn,e,!0)}function Ne(e,n=[],t=dn){const r=n.map(t);return Kn(()=>e(...r.map(L)))}function Kn(e,n=0){return tn(Bn|Et|n,e,!0)}function en(e,n=!0){return tn(Bn|Ce,e,!0,n)}function Cr(e){var n=e.teardown;if(n!==null){const t=gn,r=V;or(!0),Ee(null);try{n.call(null)}finally{or(t),Ee(r)}}}function Fr(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&nn)!==0?t.parent=null:Ae(t,n),t=r}}function Ns(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&Ce)===0&&Ae(n),n=t}}function Ae(e,n=!0){var t=!1;(n||(e.f&Wo)!==0)&&e.nodes_start!==null&&(Ir(e.nodes_start,e.nodes_end),t=!0),Fr(e,n&&!t),Ln(e,0),de(e,jn);var r=e.transitions;if(r!==null)for(const s of r)s.stop();Cr(e);var i=e.parent;i!==null&&i.first!==null&&kr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Ir(e,n){for(;e!==null;){var t=e===n?null:Gn(e);e.remove(),e=t}}function kr(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function Cn(e,n){var t=[];Ft(e,t,!0),Or(t,()=>{Ae(e),n&&n()})}function Or(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var i of e)i.out(r)}else n()}function Ft(e,n,t){if((e.f&Se)===0){if(e.f^=Se,e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&n.push(l);for(var r=e.first;r!==null;){var i=r.next,s=(r.f&Dt)!==0||(r.f&Ce)!==0;Ft(r,n,s?t:!1),r=i}}}function Fn(e){Lr(e,!0)}function Lr(e,n){if((e.f&Se)!==0){e.f^=Se,(e.f&oe)===0&&(e.f^=oe),rn(e)&&(de(e,we),Jn(e));for(var t=e.first;t!==null;){var r=t.next,i=(t.f&Dt)!==0||(t.f&Ce)!==0;Lr(t,i?n:!1),t=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&s.in()}}let In=[];function Ss(){var e=In;In=[],ut(e)}function It(e){In.length===0&&queueMicrotask(Ss),In.push(e)}let xn=!1,_t=!1,kn=null,We=!1,gn=!1;function or(e){gn=e}let Tn=[];let V=null,ye=!1;function Ee(e){V=e}let P=null;function Be(e){P=e}let re=null;function As(e){V!==null&&V.f&ft&&(re===null?re=[e]:re.push(e))}let te=null,le=0,ue=null;function Cs(e){ue=e}let Pr=1,On=0,Pe=!1;function zr(){return++Pr}function rn(e){var _;var n=e.f;if((n&we)!==0)return!0;if((n&je)!==0){var t=e.deps,r=(n&ce)!==0;if(t!==null){var i,s,l=(n&An)!==0,d=r&&P!==null&&!Pe,a=t.length;if(l||d){var c=e,g=c.parent;for(i=0;i<a;i++)s=t[i],(l||!((_=s==null?void 0:s.reactions)!=null&&_.includes(c)))&&(s.reactions??(s.reactions=[])).push(c);l&&(c.f^=An),d&&g!==null&&(g.f&ce)===0&&(c.f^=ce)}for(i=0;i<a;i++)if(s=t[i],rn(s)&&xr(s),s.wv>e.wv)return!0}(!r||P!==null&&!Pe)&&de(e,oe)}return!1}function Fs(e,n){for(var t=n;t!==null;){if((t.f&Sn)!==0)try{t.fn(e);return}catch{t.f^=Sn}t=t.parent}throw xn=!1,e}function sr(e){return(e.f&jn)===0&&(e.parent===null||(e.parent.f&Sn)===0)}function qn(e,n,t,r){if(xn){if(t===null&&(xn=!1),sr(n))throw e;return}if(t!==null&&(xn=!0),Fs(e,n),sr(n))throw e}function Vr(e,n,t=!0){var r=e.reactions;if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];re!=null&&re.includes(e)||((s.f&me)!==0?Vr(s,n,!1):n===s&&(t?de(s,we):(s.f&oe)!==0&&de(s,je),Jn(s)))}}function Br(e){var v;var n=te,t=le,r=ue,i=V,s=Pe,l=re,d=$,a=ye,c=e.f;te=null,le=0,ue=null,Pe=(c&ce)!==0&&(ye||!We||V===null),V=(c&(Ce|nn))===0?e:null,re=null,er(e.ctx),ye=!1,On++,e.f|=ft;try{var g=(0,e.fn)(),_=e.deps;if(te!==null){var u;if(Ln(e,le),_!==null&&le>0)for(_.length=le+te.length,u=0;u<te.length;u++)_[le+u]=te[u];else e.deps=_=te;if(!Pe)for(u=le;u<_.length;u++)((v=_[u]).reactions??(v.reactions=[])).push(e)}else _!==null&&le<_.length&&(Ln(e,le),_.length=le);if(Hn()&&ue!==null&&!ye&&_!==null&&(e.f&(me|je|we))===0)for(u=0;u<ue.length;u++)Vr(ue[u],e);return i!==null&&i!==e&&(On++,ue!==null&&(r===null?r=ue:r.push(...ue))),g}finally{te=n,le=t,ue=r,V=i,Pe=s,re=l,er(d),ye=a,e.f^=ft}}function Is(e,n){let t=n.reactions;if(t!==null){var r=$o.call(t,e);if(r!==-1){var i=t.length-1;i===0?t=n.reactions=null:(t[r]=t[i],t.pop())}}t===null&&(n.f&me)!==0&&(te===null||!te.includes(n))&&(de(n,je),(n.f&(ce|An))===0&&(n.f^=An),Dr(n),Ln(n,0))}function Ln(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Is(e,t[r])}function Wn(e){var n=e.f;if((n&jn)===0){de(e,oe);var t=P,r=$,i=We;P=e,We=!0;try{(n&Et)!==0?Ns(e):Fr(e),Cr(e);var s=Br(e);e.teardown=typeof s=="function"?s:null,e.wv=Pr;var l=e.deps,d;Yt&&as&&e.f&we}catch(a){qn(a,e,t,r||e.ctx)}finally{We=i,P=t}}}function ks(){try{ns()}catch(e){if(kn!==null)qn(e,kn,null);else throw e}}function Os(){var e=We;try{var n=0;for(We=!0;Tn.length>0;){n++>1e3&&ks();var t=Tn,r=t.length;Tn=[];for(var i=0;i<r;i++){var s=Ps(t[i]);Ls(s)}_n.clear()}}finally{_t=!1,We=e,kn=null}}function Ls(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(jn|Se))===0)try{rn(r)&&(Wn(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?kr(r):r.fn=null))}catch(i){qn(i,r,null,r.ctx)}}}function Jn(e){_t||(_t=!0,queueMicrotask(Os));for(var n=kn=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(nn|Ce))!==0){if((t&oe)===0)return;n.f^=oe}}Tn.push(n)}function Ps(e){for(var n=[],t=e;t!==null;){var r=t.f,i=(r&(Ce|nn))!==0,s=i&&(r&oe)!==0;if(!s&&(r&Se)===0){if((r&hr)!==0)n.push(t);else if(i)t.f^=oe;else try{rn(t)&&Wn(t)}catch(a){qn(a,t,null,t.ctx)}var l=t.first;if(l!==null){t=l;continue}}var d=t.parent;for(t=t.next;t===null&&d!==null;)t=d.next,d=d.parent}return n}function L(e){var n=e.f,t=(n&me)!==0;if(V!==null&&!ye){if(!(re!=null&&re.includes(e))){var r=V.deps;e.rv<On&&(e.rv=On,te===null&&r!==null&&r[le]===e?le++:te===null?te=[e]:(!Pe||!te.includes(e))&&te.push(e))}}else if(t&&e.deps===null&&e.effects===null){var i=e,s=i.parent;s!==null&&(s.f&ce)===0&&(i.f^=ce)}return t&&(i=e,rn(i)&&xr(i)),gn&&_n.has(e)?_n.get(e):e.v}function Pn(e){var n=ye;try{return ye=!0,e()}finally{ye=n}}const zs=-7169;function de(e,n){e.f=e.f&zs|n}function mt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(qe in e)gt(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&qe in t&&gt(t)}}}function gt(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{gt(e[r],n)}catch{}const t=wt(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=gr(t);for(let i in r){const s=r[i].get;if(s)try{s.call(e)}catch{}}}}}function Vs(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Bs=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function js(e){return Bs.includes(e)}const $s={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Us(e){return e=e.toLowerCase(),$s[e]??e}const Hs=["touchstart","touchmove"];function Zs(e){return Hs.includes(e)}function Gs(e,n){if(n){const t=document.body;e.autofocus=!0,It(()=>{document.activeElement===t&&e.focus()})}}function Ks(e){var n=V,t=P;Ee(null),Be(null);try{return e()}finally{Ee(n),Be(t)}}const jr=new Set,ht=new Set;function qs(e,n,t,r={}){function i(s){if(r.capture||un.call(n,s),!s.cancelBubble)return Ks(()=>t==null?void 0:t.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?It(()=>{n.addEventListener(e,i,r)}):n.addEventListener(e,i,r),i}function Ws(e){for(var n=0;n<e.length;n++)jr.add(e[n]);for(var t of ht)t(e)}function un(e){var H;var n=this,t=n.ownerDocument,r=e.type,i=((H=e.composedPath)==null?void 0:H.call(e))||[],s=i[0]||e.target,l=0,d=e.__root;if(d){var a=i.indexOf(d);if(a!==-1&&(n===document||n===window)){e.__root=n;return}var c=i.indexOf(n);if(c===-1)return;a<=c&&(l=a)}if(s=i[l]||e.target,s!==n){Uo(e,"currentTarget",{configurable:!0,get(){return s||t}});var g=V,_=P;Ee(null),Be(null);try{for(var u,v=[];s!==null;){var p=s.assignedSlot||s.parentNode||s.host||null;try{var N=s["__"+r];if(N!=null&&(!s.disabled||e.target===s))if(Vn(N)){var[F,...z]=N;F.apply(s,[e,...z])}else N.call(s,e)}catch(T){u?v.push(T):u=T}if(e.cancelBubble||p===n||p===null)break;s=p}if(u){for(let T of v)queueMicrotask(()=>{throw T});throw u}}finally{e.__root=n,delete e.currentTarget,Ee(g),Be(_)}}}function $r(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function Xn(e,n){var t=P;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function De(e,n){var t=(n&gs)!==0,r,i=!e.startsWith("<!>");return()=>{r===void 0&&(r=$r(i?e:"<!>"+e),r=Ge(r));var s=t||Mr?document.importNode(r,!0):r.cloneNode(!0);return Xn(s,s),s}}function Js(e=""){{var n=Zn(e+"");return Xn(n,n),n}}function kt(){var e=document.createDocumentFragment(),n=document.createComment(""),t=Zn();return e.append(n,t),Xn(n,t),e}function ie(e,n){e!==null&&e.before(n)}function Ke(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function Xs(e,n){return Ys(e,n)}const Ye=new Map;function Ys(e,{target:n,anchor:t,props:r={},events:i,context:s,intro:l=!0}){ys();var d=new Set,a=_=>{for(var u=0;u<_.length;u++){var v=_[u];if(!d.has(v)){d.add(v);var p=Zs(v);n.addEventListener(v,un,{passive:p});var N=Ye.get(v);N===void 0?(document.addEventListener(v,un,{passive:p}),Ye.set(v,1)):Ye.set(v,N+1)}}};a(yt(jr)),ht.add(a);var c=void 0,g=xs(()=>{var _=t??n.appendChild(Zn());return en(()=>{if(s){$n({});var u=$;u.c=s}i&&(r.$$events=i),c=e(_,r)||{},s&&Un()}),()=>{var p;for(var u of d){n.removeEventListener(u,un);var v=Ye.get(u);--v===0?(document.removeEventListener(u,un),Ye.delete(u)):Ye.set(u,v)}ht.delete(a),_!==t&&((p=_.parentNode)==null||p.removeChild(_))}});return Qs.set(c,g),c}let Qs=new WeakMap;function pt(e,n,[t,r]=[0,0]){var i=e,s=null,l=null,d=se,a=t>0?Dt:0,c=!1;const g=(u,v=!0)=>{c=!0,_(v,u)},_=(u,v)=>{d!==(d=u)&&(d?(s?Fn(s):v&&(s=en(()=>v(i))),l&&Cn(l,()=>{l=null})):(l?Fn(l):v&&(l=en(()=>v(i,[t+1,r]))),s&&Cn(s,()=>{s=null})))};Kn(()=>{c=!1,n(g),c||_(null,null)},a)}function Mn(e,n){return n}function ei(e,n,t,r){for(var i=[],s=n.length,l=0;l<s;l++)Ft(n[l].e,i,!0);var d=s>0&&i.length===0&&t!==null;if(d){var a=t.parentNode;ws(a),a.append(t),r.clear(),Le(e,n[0].prev,n[s-1].next)}Or(i,()=>{for(var c=0;c<s;c++){var g=n[c];d||(r.delete(g.k),Le(e,g.prev,g.next)),Ae(g.e,!d)}})}function Nn(e,n,t,r,i,s=null){var l=e,d={flags:n,items:new Map,first:null},a=(n&yr)!==0;if(a){var c=e;l=c.appendChild(Zn())}var g=null,_=!1,u=Mt(()=>{var v=t();return Vn(v)?v:v==null?[]:yt(v)});Kn(()=>{var v=L(u),p=v.length;_&&p===0||(_=p===0,ni(v,d,l,i,n,r,t),s!==null&&(p===0?g?Fn(g):g=en(()=>s(l)):g!==null&&Cn(g,()=>{g=null})),L(u))})}function ni(e,n,t,r,i,s,l){var ne,he,xe,Fe;var d=(i&cs)!==0,a=(i&(xt|Tt))!==0,c=e.length,g=n.items,_=n.first,u=_,v,p=null,N,F=[],z=[],H,T,D,x;if(d)for(x=0;x<c;x+=1)H=e[x],T=s(H,x),D=g.get(T),D!==void 0&&((ne=D.a)==null||ne.measure(),(N??(N=new Set)).add(D));for(x=0;x<c;x+=1){if(H=e[x],T=s(H,x),D=g.get(T),D===void 0){var ee=u?u.e.nodes_start:t;p=ri(ee,n,p,p===null?n.first:p.next,H,T,x,r,i,l),g.set(T,p),F=[],z=[],u=p.next;continue}if(a&&ti(D,H,x,i),(D.e.f&Se)!==0&&(Fn(D.e),d&&((he=D.a)==null||he.unfix(),(N??(N=new Set)).delete(D))),D!==u){if(v!==void 0&&v.has(D)){if(F.length<z.length){var S=z[0],U;p=S.prev;var Y=F[0],Re=F[F.length-1];for(U=0;U<F.length;U+=1)ir(F[U],S,t);for(U=0;U<z.length;U+=1)v.delete(z[U]);Le(n,Y.prev,Re.next),Le(n,p,Y),Le(n,Re,S),u=S,p=Re,x-=1,F=[],z=[]}else v.delete(D),ir(D,u,t),Le(n,D.prev,D.next),Le(n,D,p===null?n.first:p.next),Le(n,p,D),p=D;continue}for(F=[],z=[];u!==null&&u.k!==T;)(u.e.f&Se)===0&&(v??(v=new Set)).add(u),z.push(u),u=u.next;if(u===null)continue;D=u}F.push(D),p=D,u=D.next}if(u!==null||v!==void 0){for(var ge=v===void 0?[]:yt(v);u!==null;)(u.e.f&Se)===0&&ge.push(u),u=u.next;var $e=ge.length;if($e>0){var on=(i&yr)!==0&&c===0?t:null;if(d){for(x=0;x<$e;x+=1)(xe=ge[x].a)==null||xe.measure();for(x=0;x<$e;x+=1)(Fe=ge[x].a)==null||Fe.fix()}ei(n,ge,on,g)}}d&&It(()=>{var pe;if(N!==void 0)for(D of N)(pe=D.a)==null||pe.apply()}),P.first=n.first&&n.first.e,P.last=p&&p.e}function ti(e,n,t,r){(r&xt)!==0&&dt(e.v,n),(r&Tt)!==0?dt(e.i,t):e.i=t}function ri(e,n,t,r,i,s,l,d,a,c){var g=(a&xt)!==0,_=(a&us)===0,u=g?_?Nt(i):Qe(i):i,v=(a&Tt)===0?l:Qe(l),p={i:v,v:u,k:s,a:null,e:null,prev:t,next:r};try{return p.e=en(()=>d(e,u,v,c),bs),p.e.prev=t&&t.e,p.e.next=r&&r.e,t===null?n.first=p:(t.next=p,t.e.next=p.e),r!==null&&(r.prev=p,r.e.prev=p.e),p}finally{}}function ir(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,i=n?n.e.nodes_start:t,s=e.e.nodes_start;s!==r;){var l=Gn(s);i.before(s),s=l}}function Le(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function oi(e,n,t=!1,r=!1,i=!1){var s=e,l="";Ne(()=>{var d=P;if(l!==(l=n()??"")&&(d.nodes_start!==null&&(Ir(d.nodes_start,d.nodes_end),d.nodes_start=d.nodes_end=null),l!=="")){var a=l+"";t?a=`<svg>${a}</svg>`:r&&(a=`<math>${a}</math>`);var c=$r(a);if((t||r)&&(c=Ge(c)),Xn(Ge(c),c.lastChild),t||r)for(;Ge(c);)s.before(Ge(c));else s.before(c)}})}function si(e,n,t,r,i){var d;var s=(d=n.$$slots)==null?void 0:d[t],l=!1;s===!0&&(s=n.children,l=!0),s===void 0?i!==null&&i(e):s(e,l?()=>r:r)}function ii(e,n){var t=void 0,r;Kn(()=>{t!==(t=n())&&(r&&(Ae(r),r=null),t&&(r=en(()=>{At(()=>t(e))})))})}function Ur(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=Ur(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function ai(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=Ur(e))&&(r&&(r+=" "),r+=n);return r}function Hr(e){return typeof e=="object"?ai(e):e??""}const ar=[...` 	
\r\f \v\uFEFF`];function li(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var i in t)if(t[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,l=0;(l=r.indexOf(i,l))>=0;){var d=l+s;(l===0||ar.includes(r[l-1]))&&(d===r.length||ar.includes(r[d]))?r=(l===0?"":r.substring(0,l))+r.substring(d+1):l=d}}return r===""?null:r}function lr(e,n=!1){var t=n?" !important;":";",r="";for(var i in e){var s=e[i];s!=null&&s!==""&&(r+=" "+i+": "+s+t)}return r}function at(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ci(e,n){if(n){var t="",r,i;if(Array.isArray(n)?(r=n[0],i=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,l=0,d=!1,a=[];r&&a.push(...Object.keys(r).map(at)),i&&a.push(...Object.keys(i).map(at));var c=0,g=-1;const N=e.length;for(var _=0;_<N;_++){var u=e[_];if(d?u==="/"&&e[_-1]==="*"&&(d=!1):s?s===u&&(s=!1):u==="/"&&e[_+1]==="*"?d=!0:u==='"'||u==="'"?s=u:u==="("?l++:u===")"&&l--,!d&&s===!1&&l===0){if(u===":"&&g===-1)g=_;else if(u===";"||_===N-1){if(g!==-1){var v=at(e.substring(c,g).trim());if(!a.includes(v)){u!==";"&&_++;var p=e.substring(c,_).trim();t+=" "+p+";"}}c=_+1,g=-1}}}}return r&&(t+=lr(r)),i&&(t+=lr(i,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Ot(e,n,t,r,i,s){var l=e.__className;if(l!==t||l===void 0){var d=li(t,r,s);d==null?e.removeAttribute("class"):n?e.className=d:e.setAttribute("class",d),e.__className=t}else if(s&&i!==s)for(var a in s){var c=!!s[a];(i==null||c!==!!i[a])&&e.classList.toggle(a,c)}return s}function lt(e,n={},t,r){for(var i in t){var s=t[i];n[i]!==s&&(t[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function ui(e,n,t,r){var i=e.__style;if(i!==n){var s=ci(n,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=n}else r&&(Array.isArray(r)?(lt(e,t==null?void 0:t[0],r[0]),lt(e,t==null?void 0:t[1],r[1],"important")):lt(e,t,r));return r}const fn=Symbol("class"),cn=Symbol("style"),Zr=Symbol("is custom element"),Gr=Symbol("is html");function fi(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function vt(e,n,t,r){var i=Kr(e);i[n]!==(i[n]=t)&&(n==="loading"&&(e[Jo]=t),t==null?e.removeAttribute(n):typeof t!="string"&&qr(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function di(e,n,t,r,i=!1){var s=Kr(e),l=s[Zr],d=!s[Gr],a=n||{},c=e.tagName==="OPTION";for(var g in n)g in t||(t[g]=null);t.class?t.class=Hr(t.class):t.class=null,t[cn]&&(t.style??(t.style=null));var _=qr(e);for(const T in t){let D=t[T];if(c&&T==="value"&&D==null){e.value=e.__value="",a[T]=D;continue}if(T==="class"){var u=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ot(e,u,D,r,n==null?void 0:n[fn],t[fn]),a[T]=D,a[fn]=t[fn];continue}if(T==="style"){ui(e,D,n==null?void 0:n[cn],t[cn]),a[T]=D,a[cn]=t[cn];continue}var v=a[T];if(D!==v){a[T]=D;var p=T[0]+T[1];if(p!=="$$")if(p==="on"){const x={},ee="$$"+T;let S=T.slice(2);var N=js(S);if(Vs(S)&&(S=S.slice(0,-7),x.capture=!0),!N&&v){if(D!=null)continue;e.removeEventListener(S,a[ee],x),a[ee]=null}if(D!=null)if(N)e[`__${S}`]=D,Ws([S]);else{let U=function(Y){a[T].call(this,Y)};var H=U;a[ee]=qs(S,e,U,x)}else N&&(e[`__${S}`]=void 0)}else if(T==="style")vt(e,T,D);else if(T==="autofocus")Gs(e,!!D);else if(!l&&(T==="__value"||T==="value"&&D!=null))e.value=e.__value=D;else if(T==="selected"&&c)fi(e,D);else{var F=T;d||(F=Us(F));var z=F==="defaultValue"||F==="defaultChecked";if(D==null&&!l&&!z)if(s[T]=null,F==="value"||F==="checked"){let x=e;const ee=n===void 0;if(F==="value"){let S=x.defaultValue;x.removeAttribute(F),x.defaultValue=S,x.value=x.__value=ee?S:null}else{let S=x.defaultChecked;x.removeAttribute(F),x.defaultChecked=S,x.checked=ee?S:!1}}else e.removeAttribute(T);else z||_.includes(F)&&(l||typeof D!="string")?e[F]=D:typeof D!="function"&&vt(e,F,D)}}}for(let T of Object.getOwnPropertySymbols(t))T.description===ps&&ii(e,()=>t[T]);return a}function Kr(e){return e.__attributes??(e.__attributes={[Zr]:e.nodeName.includes("-"),[Gr]:e.namespaceURI===hs})}var cr=new Map;function qr(e){var n=cr.get(e.nodeName);if(n)return n;cr.set(e.nodeName,n=[]);for(var t,r=e,i=Element.prototype;i!==r;){t=gr(r);for(var s in t)t[s].set&&n.push(s);r=wt(r)}return n}function Wr(e=!1){const n=$,t=n.l.u;if(!t)return;let r=()=>mt(n.s);if(e){let i=0,s={};const l=dn(()=>{let d=!1;const a=n.s;for(const c in a)a[c]!==s[c]&&(s[c]=a[c],d=!0);return d&&i++,i});r=()=>L(l)}t.b.length&&Rs(()=>{ur(n,r),ut(t.b)}),rr(()=>{const i=Pn(()=>t.m.map(Go));return()=>{for(const s of i)typeof s=="function"&&s()}}),t.a.length&&rr(()=>{ur(n,r),ut(t.a)})}function ur(e,n){if(e.l.s)for(const t of e.l.s)L(t);n()}let Rn=!1;function _i(e){var n=Rn;try{return Rn=!1,[e(),Rn]}finally{Rn=n}}const mi={get(e,n){if(!e.exclude.includes(n))return L(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=ze({get[n](){return e.props[n]}},n,wr)),e.special[n](t),nr(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),nr(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function zn(e,n){return new Proxy({props:e,exclude:n,special:{},version:Qe(0)},mi)}const gi={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let i=e.props[r];ln(i)&&(i=i());const s=Ve(i,n);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const i=Ve(r,n);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,n){if(n===qe||n===vr)return!1;for(let t of e.props)if(ln(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(ln(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function hi(...e){return new Proxy({props:e},gi)}function fr(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function ze(e,n,t,r){var ee;var i=(t&fs)!==0,s=!mn||(t&ds)!==0,l=(t&_s)!==0,d=(t&ms)!==0,a=!1,c;l?[c,a]=_i(()=>e[n]):c=e[n];var g=qe in e||vr in e,_=l&&(((ee=Ve(e,n))==null?void 0:ee.set)??(g&&n in e&&(S=>e[n]=S)))||void 0,u=r,v=!0,p=!1,N=()=>(p=!0,v&&(v=!1,d?u=Pn(r):u=r),u);c===void 0&&r!==void 0&&(_&&s&&rs(),c=N(),_&&_(c));var F;if(s)F=()=>{var S=e[n];return S===void 0?N():(v=!0,p=!1,S)};else{var z=(i?dn:Mt)(()=>e[n]);z.f|=qo,F=()=>{var S=L(z);return S!==void 0&&(u=void 0),S===void 0?u:S}}if((t&wr)===0)return F;if(_){var H=e.$$legacy;return function(S,U){return arguments.length>0?((!s||!U||H||a)&&_(U?F():S),S):F()}}var T=!1,D=Nt(c),x=dn(()=>{var S=F(),U=L(D);return T?(T=!1,U):D.v=S});return l&&L(x),i||(x.equals=Rt),function(S,U){if(arguments.length>0){const Y=U?L(x):s&&l?Ze(S):S;if(!x.equals(Y)){if(T=!0,fe(D,Y),p&&u!==void 0&&(u=Y),fr(x))return S;Pn(()=>L(x))}return S}return fr(x)?x.v:L(x)}}function pi(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function vi(){const e=$;return e===null&&Er(),(n,t,r)=>{var s;const i=(s=e.s.$$events)==null?void 0:s[n];if(i){const l=Vn(i)?i.slice():[i],d=pi(n,t,r);for(const a of l)a.call(e.x,d);return!d.defaultPrevented}return!0}}function bi(e){$===null&&Er(),$.l===null&&ts(),yi($).a.push(e)}function yi(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const wi="5";var mr;typeof window<"u"&&((mr=window.__svelte??(window.__svelte={})).v??(mr.v=new Set)).add(wi);ls();const Ei={EnzymeForward:2.6136118341692587,EnzymeReverse:3.379150385046045,FiniteDifferences:24.287007695789953,ForwardDiff:1.6450573394814543,Mooncake:7.237540655981817,ReverseDiff:27.129591327294776,ReverseDiffCompiled:2.485602198980531,Zygote:985.6413156256485},Di={EnzymeForward:2.450996734338717,EnzymeReverse:3.144928171278868,FiniteDifferences:22.86668800107795,ForwardDiff:1.3232510532582056,Mooncake:8.576457913394036,ReverseDiff:25.94988606546057,ReverseDiffCompiled:2.590487555605442,Zygote:694.2308951212789},Ri={EnzymeForward:2.6123333667435102,EnzymeReverse:2.6366418999803014,FiniteDifferences:37.05882352941176,ForwardDiff:1.3534088616149356,Mooncake:8.622234674698515,ReverseDiff:28.87811273573438,ReverseDiffCompiled:3.0477612397402916,Zygote:1753.4344751836345},xi={EnzymeForward:3.237735631776628,EnzymeReverse:4.085806498580407,FiniteDifferences:60.821064968687686,ForwardDiff:1.2795515366799073,Mooncake:6.471703315640725,ReverseDiff:23.81000593513249,ReverseDiffCompiled:2.3636003308747497,Zygote:"error"},Ti={EnzymeForward:3.777333931777379,EnzymeReverse:6.857346450412125,FiniteDifferences:65.4519427402863,ForwardDiff:1.3651266873601386,Mooncake:8.870337446218397,ReverseDiff:44.24180413447483,ReverseDiffCompiled:2.83649259460003,Zygote:"error"},Mi={EnzymeForward:3.645630930060792,EnzymeReverse:7.406285996379793,FiniteDifferences:68.88711796432028,ForwardDiff:1.3869904467707797,Mooncake:9.063894505647749,ReverseDiff:45.17875566942493,ReverseDiffCompiled:3.132471493935653,Zygote:1556.4309939904676},Ni={EnzymeForward:3.6086745458279648,EnzymeReverse:6.746191493761632,FiniteDifferences:66.49445095471151,ForwardDiff:1.3840673886883275,Mooncake:8.357305015103474,ReverseDiff:46.28877935633517,ReverseDiffCompiled:2.8731814438649472,Zygote:1282.3022065877838},Si={EnzymeForward:2.7480267734306163,EnzymeReverse:2.9199981323247886,FiniteDifferences:38.88530291437713,ForwardDiff:1.3931899034389292,Mooncake:8.76277538042244,ReverseDiff:31.143566404633845,ReverseDiffCompiled:3.230118216012896,Zygote:1553.0801595037663},Ai={EnzymeForward:3.248209674642796,EnzymeReverse:4.586599448766703,FiniteDifferences:60.47308796936496,ForwardDiff:1.178494149383296,Mooncake:6.130919269091293,ReverseDiff:27.36761625471303,ReverseDiffCompiled:2.2421350893298495,Zygote:"error"},Ci={EnzymeForward:3.8789016369082536,EnzymeReverse:6.2475109913487445,FiniteDifferences:62.81002500131127,ForwardDiff:1.317022682994712,Mooncake:7.273563280629558,ReverseDiff:36.01233975457599,ReverseDiffCompiled:2.527131066358534,Zygote:"error"},Fi={EnzymeForward:3.540650406504065,EnzymeReverse:5.072108728684788,FiniteDifferences:63.194201788883866,ForwardDiff:1.3476314950589734,Mooncake:6.845261327750772,ReverseDiff:33.389727782780355,ReverseDiffCompiled:2.757773027594248,Zygote:"error"},Ii={EnzymeForward:3.6769404906983434,EnzymeReverse:4.8025639267841225,FiniteDifferences:63.02730532968789,ForwardDiff:1.3322484727702306,Mooncake:7.210266535044421,ReverseDiff:35.64494600169882,ReverseDiffCompiled:2.813345968015536,Zygote:"error"},ki={EnzymeForward:4.774342572850036,EnzymeReverse:13.922383297496012,FiniteDifferences:147.86767266395822,ForwardDiff:2.3850881641363717,Mooncake:6.294149752686338,ReverseDiff:49.11308011001636,ReverseDiffCompiled:6.160502346121999,Zygote:"error"},Oi={EnzymeForward:4.381247140393482,EnzymeReverse:6.994168071950535,FiniteDifferences:62.10899908816722,ForwardDiff:1.2900182518758874,Mooncake:7.427881559432163,ReverseDiff:36.78522678799943,ReverseDiffCompiled:2.5006105006105006,Zygote:"error"},Li={EnzymeForward:3.669033363315303,EnzymeReverse:5.552537942052139,FiniteDifferences:60.17157282218038,ForwardDiff:1.2147985017687453,Mooncake:5.791771620486986,ReverseDiff:29.81866197183098,ReverseDiffCompiled:2.4938990377911034,Zygote:"error"},Pi={EnzymeForward:2.8121623917105487,EnzymeReverse:2.2630553436933933,FiniteDifferences:78.67287507717637,ForwardDiff:1.446950868754635,Mooncake:5.300149089575951,ReverseDiff:22.74432460195172,ReverseDiffCompiled:2.1634494574528844,Zygote:"error"},zi={EnzymeForward:2.7780318717925634,EnzymeReverse:2.6637570467357707,FiniteDifferences:29.7245606551783,ForwardDiff:1.610313801308745,Mooncake:9.545061807777012,ReverseDiff:55.26196266483987,ReverseDiffCompiled:5.436148502994012,Zygote:"error"},Vi={EnzymeForward:6.55918308643751,EnzymeReverse:6.930469715698393,FiniteDifferences:27.54882571075402,ForwardDiff:3.9921160517187007,Mooncake:39.938327486703635,ReverseDiff:11.482276119402986,ReverseDiffCompiled:4.233744627755442,Zygote:107.2524895477005},Bi={EnzymeForward:"error",EnzymeReverse:3.156302785088581,FiniteDifferences:"wrong",ForwardDiff:2.950033415890239,Mooncake:4.012790197764402,ReverseDiff:24.131245560028415,ReverseDiffCompiled:2.0716718205660154,Zygote:"error"},ji={EnzymeForward:33150.0070974359,EnzymeReverse:5.698950201884253,FiniteDifferences:137772.65167910449,ForwardDiff:20620.285449347037,Mooncake:17.69862957407902,ReverseDiff:5.959449633648413,ReverseDiffCompiled:2.7289068231841527,Zygote:31.49890790877229},$i={EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:29.3646031683564,Mooncake:4.154741059504378,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Ui={EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:7312.2652757743845,ForwardDiff:160.2858521918025,Mooncake:8.97374743786396,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:91.82919211007169},Hi={EnzymeForward:"wrong",EnzymeReverse:"wrong",FiniteDifferences:"wrong",ForwardDiff:40.60054028018231,Mooncake:"wrong",ReverseDiff:42.36648597844856,ReverseDiffCompiled:6.660098407619615,Zygote:"error"},Zi={EnzymeForward:"error",EnzymeReverse:5.279242161372247,FiniteDifferences:37.844736393106984,ForwardDiff:1.1572877882152006,Mooncake:10.719015975298698,ReverseDiff:11.377823198773633,ReverseDiffCompiled:1.2197588953947578,Zygote:424.5449772192206},Gi={EnzymeForward:864.9205635346647,EnzymeReverse:9.491724384612883,FiniteDifferences:6374.282260864076,ForwardDiff:628.4258946086721,Mooncake:26.451607760613452,ReverseDiff:23.45930677235433,ReverseDiffCompiled:5.3677021441488,Zygote:71.54901420102026},Ki={EnzymeForward:"error",EnzymeReverse:"wrong",FiniteDifferences:"wrong",ForwardDiff:76.47490915544927,Mooncake:"wrong",ReverseDiff:"wrong",ReverseDiffCompiled:"wrong",Zygote:"error"},qi={EnzymeForward:2.4447075187147393,EnzymeReverse:2.5498816702809215,FiniteDifferences:36.947466648233906,ForwardDiff:1.2952368402630505,Mooncake:7.707810616986386,ReverseDiff:30.78143517725638,ReverseDiffCompiled:2.5529504465659567,Zygote:1197.5360447600601},Wi={EnzymeForward:4.98280033624502,EnzymeReverse:26.388345228460008,FiniteDifferences:59.13839285714286,ForwardDiff:1.2317104540760107,Mooncake:12.552528304507883,ReverseDiff:26.984786486202914,ReverseDiffCompiled:2.3595459963159606,Zygote:"error"},Ji={EnzymeForward:2.6203214047337893,EnzymeReverse:10.596717216074321,FiniteDifferences:15.159420289855072,ForwardDiff:.9635858915741347,Mooncake:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Xi={EnzymeForward:4.042752744778859,EnzymeReverse:2.132150468883206,FiniteDifferences:141.99496150161445,ForwardDiff:1.6232744369780374,Mooncake:4.744045506176345,ReverseDiff:22.15836569306095,ReverseDiffCompiled:2.641793616570055,Zygote:"error"},Yi={EnzymeForward:18.949490082710994,EnzymeReverse:2.3903855460558154,FiniteDifferences:627.793111705312,ForwardDiff:8.903587443946188,Mooncake:4.1179156486562265,ReverseDiff:25.800135907582842,ReverseDiffCompiled:2.409065337941011,Zygote:"error"},Qi={EnzymeForward:39.36471324296142,EnzymeReverse:2.092522615366999,FiniteDifferences:1166.833997132388,ForwardDiff:14.266763145200192,Mooncake:3.7940576638541206,ReverseDiff:27.66933927882348,ReverseDiffCompiled:2.512308241170175,Zygote:"error"},ea={EnzymeForward:167.35898518893958,EnzymeReverse:2.747858537507086,FiniteDifferences:6743.054683689347,ForwardDiff:56.42770536310784,Mooncake:4.01179840255839,ReverseDiff:24.066904730798818,ReverseDiffCompiled:2.229843412841897,Zygote:"error"},na={EnzymeForward:2.4773618056494118,EnzymeReverse:2.714327783722801,FiniteDifferences:23.598241798078664,ForwardDiff:1.6562068338785896,Mooncake:7.417942130246111,ReverseDiff:29.386027536970936,ReverseDiffCompiled:3.3520199312882237,Zygote:"error"},ta={EnzymeForward:2.8995353569611666,EnzymeReverse:3.1493973604010086,FiniteDifferences:28.346058859847705,ForwardDiff:1.5368282145375007,Mooncake:9.219330945864288,ReverseDiff:18.278942852239574,ReverseDiffCompiled:2.0453407378586568,Zygote:1215.6900288026336},ra={EnzymeForward:1.9159679059188528,EnzymeReverse:7.781734742261058,FiniteDifferences:18.502685613271687,ForwardDiff:1.2685303122831944,Mooncake:8.119464009620339,ReverseDiff:11.205471020687297,ReverseDiffCompiled:2.7669234720082176,Zygote:"error"},oa={EnzymeForward:2.8055959079283888,EnzymeReverse:2.5840060621103658,FiniteDifferences:27.75404009924227,ForwardDiff:1.7048673311591875,Mooncake:10.08374978784393,ReverseDiff:54.14080489047377,ReverseDiffCompiled:5.254511627906977,Zygote:"error"},sa={EnzymeForward:2.800718056791267,EnzymeReverse:3.138857071752871,FiniteDifferences:27.26504403953472,ForwardDiff:1.5206791472824768,Mooncake:12.163998899344564,ReverseDiff:31.04037176130099,ReverseDiffCompiled:3.8475785136815914,Zygote:1554.3170992366413},ia={EnzymeForward:2.8043338615048605,EnzymeReverse:4.086814125563485,FiniteDifferences:52.90320343919013,ForwardDiff:1.3669862716195422,Mooncake:6.733545064377682,ReverseDiff:26.21847993168232,ReverseDiffCompiled:2.501337800423443,Zygote:"error"},aa={EnzymeForward:2.422651105417971,EnzymeReverse:2.450898551842248,FiniteDifferences:26.090405522001724,ForwardDiff:1.606625995593967,Mooncake:7.605359645148717,ReverseDiff:24.856734260464478,ReverseDiffCompiled:2.52699368110327,Zygote:2230.0490701561002},la={EnzymeForward:4.153042988640815,EnzymeReverse:3.289516978541586,FiniteDifferences:134.81970959462785,ForwardDiff:1.636360465927321,Mooncake:5.290879778903731,ReverseDiff:31.459101858842992,ReverseDiffCompiled:2.9069974690763916,Zygote:"error"},ca={EnzymeForward:4.24283788338389,EnzymeReverse:2.330801870871305,FiniteDifferences:136.03077254142457,ForwardDiff:1.7781856031554728,Mooncake:5.905878003696858,ReverseDiff:32.835953244659414,ReverseDiffCompiled:3.0436744423633577,Zygote:"error"},ua={EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"NaN",ForwardDiff:"NaN",Mooncake:"error",ReverseDiff:"NaN",ReverseDiffCompiled:"NaN",Zygote:"NaN"},fa={EnzymeForward:2.2395615089018857,EnzymeReverse:2.1372796241217293,FiniteDifferences:35.812080770166475,ForwardDiff:1.2244156084867603,Mooncake:6.536528189247782,ReverseDiff:13.166080720011252,ReverseDiffCompiled:1.3122792193312913,Zygote:1439.1013452289676},da={EnzymeForward:7.369507414351458,EnzymeReverse:12.557005593001577,FiniteDifferences:43.60710600536562,ForwardDiff:1.090292263477495,Mooncake:11.717408274785324,ReverseDiff:14.977683518667124,ReverseDiffCompiled:3.7787493168865645,Zygote:269.05979078473223},_a={EnzymeForward:3.217046876614505,EnzymeReverse:2.9085442595441195,FiniteDifferences:38.59325812335337,ForwardDiff:1.3330015751043844,Mooncake:8.63304258594151,ReverseDiff:31.513741416992204,ReverseDiffCompiled:3.1994187655687787,Zygote:"error"},ma={EnzymeForward:2.736812090105503,EnzymeReverse:3.181534622582658,FiniteDifferences:40.39004233017536,ForwardDiff:1.5023689737018326,Mooncake:9.197700386286819,ReverseDiff:19.50197492701357,ReverseDiffCompiled:"wrong",Zygote:1167.8176488738043},ga={EnzymeForward:2.7296635855343663,EnzymeReverse:2.811096174996945,FiniteDifferences:39.09104046242775,ForwardDiff:1.3752494250919405,Mooncake:8.62935263806347,ReverseDiff:30.77041675082475,ReverseDiffCompiled:3.230854768384397,Zygote:"error"},ha={assume_beta:Ei,assume_dirichlet:Di,demo_assume_dot_observe_literal:Ri,demo_assume_index_observe:xi,demo_assume_matrix_observe_matrix_index:Ti,demo_assume_multivariate_observe:Mi,demo_assume_multivariate_observe_literal:Ni,demo_assume_observe_literal:Si,demo_assume_submodel_observe_index_literal:Ai,demo_dot_assume_observe:Ci,demo_dot_assume_observe_index:Fi,demo_dot_assume_observe_index_literal:Ii,assume_lkjcholu:ki,demo_dot_assume_observe_matrix_index:Oi,demo_dot_assume_observe_submodel:Li,dot_assume:Pi,dot_observe:zi,dppl_gauss_unknown:Vi,dppl_hier_poisson:Bi,dppl_high_dim_gauss:ji,dppl_hmm_semisup:$i,dppl_lda:Ui,dppl_logistic_regression:Hi,assume_mvnormal:Zi,dppl_naive_bayes:Gi,dppl_sto_volatility:Ki,dynamic_constraint:qi,multiple_constraints_same_var:Wi,multithreaded:Ji,n010:Xi,n050:Yi,n100:Qi,n500:ea,observe_bernoulli:na,assume_normal:ta,observe_categorical:ra,observe_index:oa,observe_literal:sa,observe_multivariate:ia,observe_submodel:aa,pdb_eight_schools_centered:la,pdb_eight_schools_noncentered:ca,von_mises:ua,assume_submodel:fa,assume_wishart:da,broadcast_macro:_a,control_flow:ma,demo_assume_dot_observe:ga},pa=`@model function assume_beta()
    a ~ Beta(2, 2)
end

model = assume_beta()`,va=`@model function assume_dirichlet()
    a ~ Dirichlet([1.0, 5.0])
end

model = assume_dirichlet()`,ba=`@model function demo_assume_dot_observe_literal()
    # \`assume\` and literal \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    [1.5, 2.0] .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe_literal()`,ya=`using LinearAlgebra: Diagonal

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

model = demo_assume_index_observe()`,wa=`using LinearAlgebra: Diagonal

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

model = demo_assume_matrix_observe_matrix_index()`,Ea=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe(x = [1.5, 2.0])
    # Multivariate \`assume\` and \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zero(x), Diagonal(s))
    x ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe()`,Da=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe_literal()
    # multivariate \`assume\` and literal \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zeros(2), Diagonal(s))
    [1.5, 2.0] ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe_literal()`,Ra=`@model function demo_assume_observe_literal()
    # univariate \`assume\` and literal \`observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    1.5 ~ Normal(m, sqrt(s))
    2.0 ~ Normal(m, sqrt(s))
end

model = demo_assume_observe_literal()`,xa=`@model function _prior_dot_assume(::Type{TV} = Vector{Float64}) where {TV}
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

model = demo_assume_submodel_observe_index_literal()`,Ta=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe()`,Ma=`@model function demo_dot_assume_observe_index(
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

model = demo_dot_assume_observe_index()`,Na=`@model function demo_dot_assume_observe_index_literal(
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

model = demo_dot_assume_observe_index_literal()`,Sa=`@model function assume_lkjcholu()
    a ~ LKJCholesky(5, 1.0, 'U')
end

model = assume_lkjcholu()`,Aa=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe_matrix_index()`,Ca=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe_submodel()`,Fa=`@model function dot_assume(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 5)
    a .~ Normal()
end

model = dot_assume()`,Ia=`@model function dot_observe(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    x .~ Normal(a)
end

model = dot_observe()`,ka=`n = 10_000
s = abs(rand()) + 0.5
y = randn() .+ s * randn(n)

@model function dppl_gauss_unknown(y)
    N = length(y)
    m ~ Normal(0, 1)
    s ~ truncated(Cauchy(0, 5); lower=0)
    y ~ filldist(Normal(m, s), N)
end

model = dppl_gauss_unknown(y)`,Oa=`using LazyArrays
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

model = dppl_hier_poisson(y, x, idx, ns)`,La=`@model function dppl_high_dim_gauss(D)
    m ~ filldist(Normal(0, 1), D)
end

model = dppl_high_dim_gauss(10_000)`,Pa=`using StatsFuns: logsumexp

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
    @addlogprob! logsumexp(gamma)
end

model = dppl_hmm_semisup(K, T, T_unsup, w, z, u, alpha, beta)`,za=`v = 100      # words
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
    theta ~ filldist(Dirichlet(alpha), m)
    phi ~ filldist(Dirichlet(beta), k)
    log_phi_dot_theta = log.(phi * theta)
    @addlogprob! sum(log_phi_dot_theta[CartesianIndex.(w, doc)])
end

model = dppl_lda(k, m, w, doc, alpha, beta)`,Va=`using StatsFuns: logistic
using LazyArrays

d, n = 100, 10_000
X = randn(d, n)
w = randn(d)
y = Int.(logistic.(X' * w) .> 0.5)

function safelogistic(x::T) where {T}
    logistic(x) * (1 - 2 * eps(T)) + eps(T)
end

lazyarray(f, x) = LazyArray(Base.broadcasted(f, x))

@model function dppl_logistic_regression(Xt, y)
    N, D = size(Xt)
    w ~ filldist(Normal(), D)
    y ~ arraydist(lazyarray(x -> Bernoulli(safelogistic(x)), Xt * w))
end

model = dppl_logistic_regression(X', y)`,Ba=`@model function assume_mvnormal()
    a ~ MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0])
end

model = assume_mvnormal()`,ja=`using MLDatasets: MNIST
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
image_vec = vec(image_subset[:, :])
labels = labels[1:N]

@model function dppl_naive_bayes(image_vec, labels, C, D)
    m ~ filldist(Normal(0, 10), C, D)
    image_vec ~ MvNormal(vec(m[labels, :]), I)
end

model = dppl_naive_bayes(image_vec, labels, C, D)`,$a=`using DelimitedFiles: readdlm

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

model = dppl_sto_volatility(y)`,Ua=`@model function dynamic_constraint()
    a ~ Normal()
    b ~ truncated(Normal(); lower = a)
end

model = dynamic_constraint()`,Ha=`@model function multiple_constraints_same_var(::Type{TV} = Vector{Float64}) where {TV}
    x = TV(undef, 5)
    x[1] ~ Normal()
    x[2] ~ InverseGamma(2, 3)
    x[3] ~ truncated(Normal(), -5, 20)
    x[4:5] ~ Dirichlet([1.0, 2.0])
end

model = multiple_constraints_same_var()`,Za=`#=
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

model = multithreaded([1.5, 2.0, 2.5, 1.5, 2.0, 2.5])`,Ga=`@model function n010(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 10)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n010()`,Ka=`@model function n050(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 50)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n050()`,qa=`@model function n100(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 100)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n100()`,Wa=`@model function n500(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 500)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n500()`,Ja=`@model function observe_bernoulli(x = [true, false, true])
    a ~ Beta(2, 2)
    for i in eachindex(x)
        x[i] ~ Bernoulli(a)
    end
end

model = observe_bernoulli()`,Xa=`@model function assume_normal()
    a ~ Normal()
end

model = assume_normal()`,Ya=`@model function observe_categorical(x = [1, 2, 1, 2, 2])
    a ~ Dirichlet(2, 3)
    for i in eachindex(x)
        x[i] ~ Categorical(a)
    end
end

model = observe_categorical()`,Qa=`@model function observe_index(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end

model = observe_index()`,el=`@model function observe_literal()
    a ~ Normal()
    1.5 ~ Normal(a)
end

model = observe_literal()`,nl=`@model function observe_multivariate(
    x = [1.5, 2.0, 2.5],
    ::Type{TV} = Vector{Float64},
) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    x ~ MvNormal(a, I)
end

model = observe_multivariate()`,tl=`@model function inner2(x, a)
    x ~ Normal(a)
end
@model function observe_submodel(x = 1.5)
    a ~ Normal()
    _ignore ~ to_submodel(inner2(x, a))
end

model = observe_submodel()`,rl=`J = 8
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

model = pdb_eight_schools_centered(J, y, sigma)`,ol=`J = 8
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

model = pdb_eight_schools_noncentered(J, y, sigma)`,sl=`@model function von_mises(x)
    a ~ InverseGamma(2, 3)
    x ~ VonMises(0, a)
end

model = von_mises(0.4)`,il=`@model function inner1()
    return a ~ Normal()
end
@model function assume_submodel()
    a ~ to_submodel(inner1())
    x ~ Normal(a)
end

model = assume_submodel()`,al=`@model function assume_wishart()
    a ~ Wishart(7, [1.0 0.5; 0.5 1.0])
end

model = assume_wishart()`,ll=`@model function broadcast_macro(
    x = [1.5, 2.0],
    ::Type{TV} = Vector{Float64},
) where {TV}
    a ~ Normal(0, 1)
    b ~ InverseGamma(2, 3)
    @. x ~ Normal(a, $(sqrt(b)))
end

model = broadcast_macro()`,cl=`#= 
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

model = control_flow()`,ul=`@model function demo_assume_dot_observe(x = [1.5, 2.0])
    # \`assume\` and \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    x .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe()`,fl={assume_beta:pa,assume_dirichlet:va,demo_assume_dot_observe_literal:ba,demo_assume_index_observe:ya,demo_assume_matrix_observe_matrix_index:wa,demo_assume_multivariate_observe:Ea,demo_assume_multivariate_observe_literal:Da,demo_assume_observe_literal:Ra,demo_assume_submodel_observe_index_literal:xa,demo_dot_assume_observe:Ta,demo_dot_assume_observe_index:Ma,demo_dot_assume_observe_index_literal:Na,assume_lkjcholu:Sa,demo_dot_assume_observe_matrix_index:Aa,demo_dot_assume_observe_submodel:Ca,dot_assume:Fa,dot_observe:Ia,dppl_gauss_unknown:ka,dppl_hier_poisson:Oa,dppl_high_dim_gauss:La,dppl_hmm_semisup:Pa,dppl_lda:za,dppl_logistic_regression:Va,assume_mvnormal:Ba,dppl_naive_bayes:ja,dppl_sto_volatility:$a,dynamic_constraint:Ua,multiple_constraints_same_var:Ha,multithreaded:Za,n010:Ga,n050:Ka,n100:qa,n500:Wa,observe_bernoulli:Ja,assume_normal:Xa,observe_categorical:Ya,observe_index:Qa,observe_literal:el,observe_multivariate:nl,observe_submodel:tl,pdb_eight_schools_centered:rl,pdb_eight_schools_noncentered:ol,von_mises:sl,assume_submodel:il,assume_wishart:al,broadcast_macro:ll,control_flow:cl,demo_assume_dot_observe:ul},dl="1.15.0",_l="1.5.0",ml="5.6.3",gl="0.11.0",hl="0.4.5",pl="0.1.42",vl="4.3.0",bl="0.8.0",yl="0.8.8",wl="0.6.2",El="0.4.1",Dl="1.1.3",Rl="2.5.0",xl="1.1.2",Tl="0.4.0",Ml="0.5.4",Nl="3.5.1+1",Sl="7.19.0",Al="1.11.1",Cl="1.11.0",Fl="1.1.1",Il="0.5.1",kl="1.1.0",Ol="0.4.7",Ll="0.5.1",Pl="0.4.4",zl="1.11.0",Vl="0.1.1",Bl="0.15.7",jl="0.1.9",$l="1.2.2",Ul="0.5.0",Hl="0.10.15",Zl="1.72.5",Gl="1.25.2",Kl="1.3.1",ql="0.1.10",Wl="0.10.42",Jl="0.10.4+0",Xl="0.7.8",Yl="3.29.0",Ql="0.12.1",ec="0.11.0",nc="0.13.1",tc="1.0.3",rc="0.2.4",oc="0.3.1",sc="4.16.0",ic="1.1.1+0",ac="0.1.2",lc="2.5.0",cc="0.1.2",uc="1.6.0",fc="0.1.3",dc="4.1.1",_c="1.16.0",mc="0.7.13",gc="1.7.0",hc="0.18.22",pc="1.0.0",vc="1.11.0",bc="0.1.2",yc="1.9.1",wc="0.4.0",Ec="1.1.0",Dc="1.15.1",Rc="0.7.1",xc="1.11.0",Tc="0.25.120",Mc="0.6.58",Nc="0.9.5",Sc="1.6.0",Ac="0.36.12",Cc="2.0.0",Fc="1.0.5",Ic="0.13.52",kc="0.8.12",Oc="0.0.183+0",Lc="0.1.11",Pc="0.1.10",zc="0.10.14",Vc="1.9.0",Bc="3.3.11+0",jc="0.2.2",$c="0.1.1",Uc="0.3.2",Hc="1.17.0",Zc="0.9.24",Gc="1.11.0",Kc="1.13.0",qc="2.27.0",Wc="0.12.32",Jc="0.8.5",Xc="1.0.1",Yc="1.1.3",Qc="0.1.3",eu="0.5.2",nu="1.11.0",tu="0.2.0",ru="1.5.3",ou="0.6.2",su="1.3.1",iu="1.13.0",au="0.17.2",lu="1.14.6+0",cu="1.10.17",uu="0.2.0",fu="2.12.1+0",du="0.3.28",_u="0.4.15",mu="0.1.7",gu="0.10.5",hu="0.3.8",pu="0.1.5",vu="0.3.1",bu="1.4.4",yu="2025.0.4+0",wu="1.11.0",Eu="0.7.0",Du="0.15.1",Ru="0.7.11",xu="0.1.17",Tu="1.3.1",Mu="0.2.4",Nu="1.10.0",Su="1.0.0",Au="0.5.15",Cu="1.7.0",Fu="1.14.3",Iu="0.2.1",ku="0.2.4",Ou="0.9.35",Lu="0.6.9",Pu="0.4.1",zu="9.4.2",Vu="0.0.37+2",Bu="1.6.2",ju="3.0.1+0",$u="1.4.0",Uu="2.6.1",Hu="1.11.0",Zu="0.3.1",Gu="0.2.0",Ku="0.6.4",qu="8.6.0+0",Wu="1.11.0",Ju="1.7.2+0",Xu="1.11.0+1",Yu="0.9.1+6",Qu="1.11.0",ef="1.18.0+0",nf="0.8.8",tf="7.4.0",rf="1.11.0",of="2.1.2",sf="1.13.1",af="0.3.29",lf="1.11.0",cf="1.1.0",uf="0.10.7",ff="7.1.0",df="0.3.14",_f="2025.0.1+1",mf="1.0.0",gf="0.7.18",hf="1.11.1",pf="0.4.17",vf="0.4.8",bf="4.3.1+0",yf="0.1.11",wf="5.5.4+0",Ef="0.5.16",Df="0.4.2",Rf="1.11.0",xf="1.1.9",Tf="2.28.6+0",Mf="0.2.0",Nf="10.1.4+3",Sf="1.2.0",Af="2.0.0",Cf="1.11.0",Ff="0.4.129",If="0.3.4",kf="0.3.6",Of="2023.12.12",Lf="0.10.3",Pf="7.10.0",zf="0.9.30",Vf="0.4.3",Bf="1.1.3",jf="0.1.5",$f="0.10.4",Uf="1.0.0",Hf="1.2.0",Zf="0.4.4",Gf="1.17.0",Kf="0.3.27+1",qf="0.8.5+0",Wf="5.0.8+0",Jf="1.5.0",Xf="3.5.0+0",Yf="0.5.6+0",Qf="1.13.2",ed="0.4.6",nd="4.4.0",td="2.8.0",rd="0.4.3",od="1.8.1",sd="0.11.35",id="1.0.2",ad="0.5.12",ld="0.12.3",cd="2.8.3",ud="1.2.1",fd="0.3.5",dd="1.11.0",_d="1.4.3",md="0.2.4",gd="1.2.1",hd="1.4.3",pd="0.2.0",vd="2.4.0",bd="1.11.0",yd="0.1.5",wd="1.10.4",Ed="1.3.0",Dd="2.11.2",Rd="1.11.0",xd="1.11.0",Td="1.7.1",Md="1.6.0",Nd="0.3.2",Sd="0.4.5",Ad="0.1.0",Cd="1.3.4",Fd="3.33.0",Id="1.2.2",kd="1.3.1",Od="1.16.1",Ld="1.4.2",Pd="0.8.0",zd="0.5.1+0",Vd="2.2.8",Bd="0.5.15",jd="0.7.0",$d="0.5.0",Ud="2.102.1",Hd="1.3.1",Zd="1.7.0",Gd="3.0.0",Kd="1.3.0",qd="1.3.0",Wd="1.4.8",Jd="1.11.0",Xd="1.1.2",Yd="1.11.0",Qd="0.1.0",e1="1.2.0",n1="0.9.4",t1="1.11.0",r1="1.2.1",o1="1.11.0",s1="0.6.21",i1="0.1.2",a1="0.4.21",l1="2.5.1",c1="0.1.15",u1="0.1.2",f1="1.9.13",d1="1.4.3",_1="3.4.0",m1="1.11.1",g1="1.7.1",h1="0.34.5",p1="1.5.0",v1="0.2.2",b1="0.3.7",y1="0.4.1",w1="0.7.1",E1="0.3.1",D1="1.11.0",R1="1.11.0",x1=null,T1="7.7.0+0",M1="0.3.41",N1="1.0.3",S1="1.0.1",A1="1.12.1",C1="1.10.0",F1="0.1.1",I1="0.1.7",k1="1.11.0",O1="0.1.4",L1="0.11.3",P1="0.4.84",z1="0.39.3",V1="1.6.1",B1="1.11.0",j1="1.0.2",$1="1.11.0",U1="1.23.1",H1="1.0.0",Z1="0.3.0",G1="1.4.2",K1="1.0.0",q1="1.6.1",W1="0.10.1",J1="1.2.13+1",X1="0.7.10",Y1="0.2.7",Q1="1.1.3+0",e0="5.11.0+0",n0="1.59.0+0",t0="2022.0.0+0",r0="17.4.0+2",o0={ADTypes:dl,AbstractFFTs:_l,AbstractMCMC:ml,AbstractPPL:gl,AbstractTrees:hl,Accessors:pl,Adapt:vl,AdvancedHMC:bl,AdvancedMH:yl,AdvancedPS:wl,AdvancedVI:El,AliasTables:Dl,ArgCheck:Rl,ArgTools:xl,ArnoldiMethod:Tl,Arpack:Ml,Arpack_jll:Nl,ArrayInterface:Sl,ArrayLayouts:Al,Artifacts:Cl,Atomix:Fl,AtomsBase:Il,AxisAlgorithms:kl,AxisArrays:Ol,BFloat16s:Ll,BangBang:Pl,Base64:zl,Baselet:Vl,Bijectors:Bl,BitFlags:jl,BufferedStreams:$l,CEnum:Ul,CSV:Hl,ChainRules:Zl,ChainRulesCore:Gl,Chairmarks:Kl,ChangesOfVariables:ql,Chemfiles:Wl,Chemfiles_jll:Jl,CodecZlib:Xl,ColorSchemes:Yl,ColorTypes:Ql,ColorVectorSpace:ec,Colors:nc,Combinatorics:tc,CommonSolve:rc,CommonSubexpressions:oc,Compat:sc,CompilerSupportLibraries_jll:ic,CompositionsBase:ac,ConcurrentUtilities:lc,ConsoleProgressMonitor:cc,ConstructionBase:uc,ContextVariablesX:fc,Crayons:dc,DataAPI:_c,DataDeps:mc,DataFrames:gc,DataStructures:hc,DataValueInterfaces:pc,Dates:vc,DefineSingletons:bc,DelimitedFiles:yc,DensityInterface:wc,DiffResults:Ec,DiffRules:Dc,DifferentiationInterface:Rc,Distributed:xc,Distributions:Tc,DistributionsAD:Mc,DocStringExtensions:Nc,Downloads:Sc,DynamicPPL:Ac,EllipticalSliceSampling:Cc,EnumX:Fc,Enzyme:Ic,EnzymeCore:kc,Enzyme_jll:Oc,ExceptionUnwrapping:Lc,ExprTools:Pc,ExproniconLite:zc,FFTW:Vc,FFTW_jll:Bc,FLoops:jc,FLoopsBase:$c,FastClosures:Uc,FileIO:Hc,FilePathsBase:Zc,FileWatching:Gc,FillArrays:Kc,FiniteDiff:qc,FiniteDifferences:Wc,FixedPointNumbers:Jc,ForwardDiff:Xc,FunctionWrappers:Yc,FunctionWrappersWrappers:Qc,Functors:eu,Future:nu,GPUArraysCore:tu,GPUCompiler:ru,GZip:ou,Glob:su,Graphs:iu,HDF5:au,HDF5_jll:lu,HTTP:cu,HashArrayMappedTries:uu,Hwloc_jll:fu,HypergeometricFunctions:du,IRTools:_u,ImageBase:mu,ImageCore:gu,ImageShow:hu,Inflate:pu,InitialValues:vu,InlineStrings:bu,IntelOpenMP_jll:yu,InteractiveUtils:wu,InternedStrings:Eu,Interpolations:Du,IntervalSets:Ru,InverseFunctions:xu,InvertedIndices:Tu,IrrationalConstants:Mu,IterTools:Nu,IteratorInterfaceExtensions:Su,JLD2:Au,JLLWrappers:Cu,JSON:"0.21.4",JSON3:Fu,Jieko:Iu,JuliaVariables:ku,KernelAbstractions:Ou,KernelDensity:Lu,LBFGSB:Pu,LLVM:zu,LLVMExtra_jll:Vu,LRUCache:Bu,L_BFGS_B_jll:ju,LaTeXStrings:$u,LazyArrays:Uu,LazyArtifacts:Hu,LazyModules:Zu,LeftChildRightSiblingTrees:Gu,LibCURL:Ku,LibCURL_jll:qu,LibGit2:Wu,LibGit2_jll:Ju,LibSSH2_jll:Xu,LibTracyClient_jll:Yu,Libdl:Qu,Libiconv_jll:ef,Libtask:nf,LineSearches:tf,LinearAlgebra:rf,LogDensityProblems:of,LogDensityProblemsAD:sf,LogExpFunctions:af,Logging:lf,LoggingExtras:cf,MAT:uf,MCMCChains:ff,MCMCDiagnosticTools:df,MKL_jll:_f,MLCore:mf,MLDatasets:gf,MLJModelInterface:hf,MLStyle:pf,MLUtils:vf,MPICH_jll:bf,MPIPreferences:yf,MPItrampoline_jll:wf,MacroTools:Ef,MappedArrays:Df,Markdown:Rf,MbedTLS:xf,MbedTLS_jll:Tf,MicroCollections:Mf,MicrosoftMPI_jll:Nf,Missings:Sf,MistyClosures:Af,Mmap:Cf,Mooncake:Ff,MosaicViews:If,Moshi:kf,MozillaCACerts_jll:Of,MultivariateStats:Lf,NLSolversBase:Pf,NNlib:zf,NPZ:Vf,NaNMath:Bf,NameResolution:jf,NamedArrays:$f,NaturalSort:Uf,NetworkOptions:Hf,ObjectFile:Zf,OffsetArrays:Gf,OpenBLAS_jll:Kf,OpenLibm_jll:qf,OpenMPI_jll:Wf,OpenSSL:Jf,OpenSSL_jll:Xf,OpenSpecFun_jll:Yf,Optim:Qf,Optimisers:ed,Optimization:nd,OptimizationBase:td,OptimizationOptimJL:rd,OrderedCollections:od,PDMats:sd,PackageExtensionCompat:id,PaddedViews:ad,Parameters:ld,Parsers:cd,PeriodicTable:ud,Pickle:fd,Pkg:dd,PooledArrays:_d,PositiveFactorizations:md,PrecompileTools:gd,Preferences:hd,PrettyPrint:pd,PrettyTables:vd,Printf:bd,ProgressLogging:yd,ProgressMeter:wd,PtrArrays:Ed,QuadGK:Dd,REPL:Rd,Random:xd,Random123:Td,RandomNumbers:Md,RangeArrays:Nd,Ratios:Sd,RealDot:Ad,RecipesBase:Cd,RecursiveArrayTools:Fd,Reexport:Id,Requires:kd,ReverseDiff:Od,Richardson:Ld,Rmath:Pd,Rmath_jll:zd,Roots:Vd,RuntimeGeneratedFunctions:Bd,SHA:jd,SSMProblems:$d,SciMLBase:Ud,SciMLOperators:Hd,SciMLStructures:Zd,ScientificTypesBase:Gd,ScopedValues:Kd,Scratch:qd,SentinelArrays:Wd,Serialization:Jd,Setfield:Xd,SharedArrays:Yd,ShowCases:Qd,SimpleBufferStream:e1,SimpleTraits:n1,Sockets:t1,SortingAlgorithms:r1,SparseArrays:o1,SparseConnectivityTracer:s1,SparseInverseSubset:i1,SparseMatrixColorings:a1,SpecialFunctions:l1,SplittablesBase:c1,StackViews:u1,StaticArrays:f1,StaticArraysCore:d1,StatisticalTraits:_1,Statistics:m1,StatsAPI:g1,StatsBase:h1,StatsFuns:p1,StridedViews:v1,StringEncodings:b1,StringManipulation:y1,StructArrays:w1,StructIO:E1,StructTypes:D1,StyledStrings:R1,SuiteSparse:x1,SuiteSparse_jll:T1,SymbolicIndexingInterface:M1,TOML:N1,TableTraits:S1,Tables:A1,Tar:C1,TensorCore:F1,TerminalLoggers:I1,Test:k1,Tracy:O1,TranscodingStreams:L1,Transducers:P1,Turing:z1,URIs:V1,UUIDs:B1,UnPack:j1,Unicode:$1,Unitful:U1,UnitfulAtomic:H1,UnsafeAtomics:Z1,WeakRefStrings:G1,WoodburyMatrices:K1,WorkerUtilities:q1,ZipFile:W1,Zlib_jll:J1,Zygote:X1,ZygoteRules:Y1,libaec_jll:Q1,libblastrampoline_jll:e0,nghttp2_jll:n0,oneTBB_jll:t0,p7zip_jll:r0};function bt(e){return Object.entries(e).sort(([n,t],[r,i])=>n.localeCompare(r))}var s0=De('<tr><td class="svelte-7y9k9c"> </td><td class="version svelte-7y9k9c"> </td></tr>'),i0=De('<table id="manifest" class="svelte-7y9k9c"><thead><tr><th class="svelte-7y9k9c">Package</th><th class="svelte-7y9k9c">Version</th></tr></thead><tbody></tbody></table>');function a0(e,n){$n(n,!1),Wr();var t=i0(),r=Me(J(t));Nn(r,5,()=>bt(o0),Mn,(i,s)=>{let l=()=>L(s)[0],d=()=>L(s)[1];var a=s0(),c=J(a),g=J(c),_=Me(c),u=J(_);Ne(()=>{Ke(g,l()),Ke(u,d()===null?"":`v${d()}`)}),ie(i,a)}),ie(e,t),Un()}function l0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ct,dr;function c0(){if(dr)return ct;dr=1;function e(o){return o instanceof Map?o.clear=o.delete=o.set=function(){throw new Error("map is read-only")}:o instanceof Set&&(o.add=o.clear=o.delete=function(){throw new Error("set is read-only")}),Object.freeze(o),Object.getOwnPropertyNames(o).forEach(f=>{const h=o[f],A=typeof h;(A==="object"||A==="function")&&!Object.isFrozen(h)&&e(h)}),o}class n{constructor(f){f.data===void 0&&(f.data={}),this.data=f.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(o,...f){const h=Object.create(null);for(const A in o)h[A]=o[A];return f.forEach(function(A){for(const Z in A)h[Z]=A[Z]}),h}const i="</span>",s=o=>!!o.scope,l=(o,{prefix:f})=>{if(o.startsWith("language:"))return o.replace("language:","language-");if(o.includes(".")){const h=o.split(".");return[`${f}${h.shift()}`,...h.map((A,Z)=>`${A}${"_".repeat(Z+1)}`)].join(" ")}return`${f}${o}`};class d{constructor(f,h){this.buffer="",this.classPrefix=h.classPrefix,f.walk(this)}addText(f){this.buffer+=t(f)}openNode(f){if(!s(f))return;const h=l(f.scope,{prefix:this.classPrefix});this.span(h)}closeNode(f){s(f)&&(this.buffer+=i)}value(){return this.buffer}span(f){this.buffer+=`<span class="${f}">`}}const a=(o={})=>{const f={children:[]};return Object.assign(f,o),f};class c{constructor(){this.rootNode=a(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(f){this.top.children.push(f)}openNode(f){const h=a({scope:f});this.add(h),this.stack.push(h)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(f){return this.constructor._walk(f,this.rootNode)}static _walk(f,h){return typeof h=="string"?f.addText(h):h.children&&(f.openNode(h),h.children.forEach(A=>this._walk(f,A)),f.closeNode(h)),f}static _collapse(f){typeof f!="string"&&f.children&&(f.children.every(h=>typeof h=="string")?f.children=[f.children.join("")]:f.children.forEach(h=>{c._collapse(h)}))}}class g extends c{constructor(f){super(),this.options=f}addText(f){f!==""&&this.add(f)}startScope(f){this.openNode(f)}endScope(){this.closeNode()}__addSublanguage(f,h){const A=f.root;h&&(A.scope=`language:${h}`),this.add(A)}toHTML(){return new d(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(o){return o?typeof o=="string"?o:o.source:null}function u(o){return N("(?=",o,")")}function v(o){return N("(?:",o,")*")}function p(o){return N("(?:",o,")?")}function N(...o){return o.map(h=>_(h)).join("")}function F(o){const f=o[o.length-1];return typeof f=="object"&&f.constructor===Object?(o.splice(o.length-1,1),f):{}}function z(...o){return"("+(F(o).capture?"":"?:")+o.map(A=>_(A)).join("|")+")"}function H(o){return new RegExp(o.toString()+"|").exec("").length-1}function T(o,f){const h=o&&o.exec(f);return h&&h.index===0}const D=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function x(o,{joinWith:f}){let h=0;return o.map(A=>{h+=1;const Z=h;let G=_(A),w="";for(;G.length>0;){const y=D.exec(G);if(!y){w+=G;break}w+=G.substring(0,y.index),G=G.substring(y.index+y[0].length),y[0][0]==="\\"&&y[1]?w+="\\"+String(Number(y[1])+Z):(w+=y[0],y[0]==="("&&h++)}return w}).map(A=>`(${A})`).join(f)}const ee=/\b\B/,S="[a-zA-Z]\\w*",U="[a-zA-Z_]\\w*",Y="\\b\\d+(\\.\\d+)?",Re="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ge="\\b(0b[01]+)",$e="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",on=(o={})=>{const f=/^#![ ]*\//;return o.binary&&(o.begin=N(f,/.*\b/,o.binary,/\b.*/)),r({scope:"meta",begin:f,end:/$/,relevance:0,"on:begin":(h,A)=>{h.index!==0&&A.ignoreMatch()}},o)},ne={begin:"\\\\[\\s\\S]",relevance:0},he={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ne]},xe={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ne]},Fe={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},pe=function(o,f,h={}){const A=r({scope:"comment",begin:o,end:f,contains:[]},h);A.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const Z=z("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return A.contains.push({begin:N(/[ ]+/,"(",Z,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),A},Yn=pe("//","$"),sn=pe("/\\*","\\*/"),hn=pe("#","$"),Jr={scope:"number",begin:Y,relevance:0},Xr={scope:"number",begin:Re,relevance:0},Yr={scope:"number",begin:ge,relevance:0},Qr={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ne,{begin:/\[/,end:/\]/,relevance:0,contains:[ne]}]},eo={scope:"title",begin:S,relevance:0},no={scope:"title",begin:U,relevance:0},to={begin:"\\.\\s*"+U,relevance:0};var pn=Object.freeze({__proto__:null,APOS_STRING_MODE:he,BACKSLASH_ESCAPE:ne,BINARY_NUMBER_MODE:Yr,BINARY_NUMBER_RE:ge,COMMENT:pe,C_BLOCK_COMMENT_MODE:sn,C_LINE_COMMENT_MODE:Yn,C_NUMBER_MODE:Xr,C_NUMBER_RE:Re,END_SAME_AS_BEGIN:function(o){return Object.assign(o,{"on:begin":(f,h)=>{h.data._beginMatch=f[1]},"on:end":(f,h)=>{h.data._beginMatch!==f[1]&&h.ignoreMatch()}})},HASH_COMMENT_MODE:hn,IDENT_RE:S,MATCH_NOTHING_RE:ee,METHOD_GUARD:to,NUMBER_MODE:Jr,NUMBER_RE:Y,PHRASAL_WORDS_MODE:Fe,QUOTE_STRING_MODE:xe,REGEXP_MODE:Qr,RE_STARTERS_RE:$e,SHEBANG:on,TITLE_MODE:eo,UNDERSCORE_IDENT_RE:U,UNDERSCORE_TITLE_MODE:no});function ro(o,f){o.input[o.index-1]==="."&&f.ignoreMatch()}function oo(o,f){o.className!==void 0&&(o.scope=o.className,delete o.className)}function so(o,f){f&&o.beginKeywords&&(o.begin="\\b("+o.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",o.__beforeBegin=ro,o.keywords=o.keywords||o.beginKeywords,delete o.beginKeywords,o.relevance===void 0&&(o.relevance=0))}function io(o,f){Array.isArray(o.illegal)&&(o.illegal=z(...o.illegal))}function ao(o,f){if(o.match){if(o.begin||o.end)throw new Error("begin & end are not supported with match");o.begin=o.match,delete o.match}}function lo(o,f){o.relevance===void 0&&(o.relevance=1)}const co=(o,f)=>{if(!o.beforeMatch)return;if(o.starts)throw new Error("beforeMatch cannot be used with starts");const h=Object.assign({},o);Object.keys(o).forEach(A=>{delete o[A]}),o.keywords=h.keywords,o.begin=N(h.beforeMatch,u(h.begin)),o.starts={relevance:0,contains:[Object.assign(h,{endsParent:!0})]},o.relevance=0,delete h.beforeMatch},uo=["of","and","for","in","not","or","if","then","parent","list","value"],fo="keyword";function Lt(o,f,h=fo){const A=Object.create(null);return typeof o=="string"?Z(h,o.split(" ")):Array.isArray(o)?Z(h,o):Object.keys(o).forEach(function(G){Object.assign(A,Lt(o[G],f,G))}),A;function Z(G,w){f&&(w=w.map(y=>y.toLowerCase())),w.forEach(function(y){const M=y.split("|");A[M[0]]=[G,_o(M[0],M[1])]})}}function _o(o,f){return f?Number(f):mo(o)?0:1}function mo(o){return uo.includes(o.toLowerCase())}const Pt={},Ue=o=>{console.error(o)},zt=(o,...f)=>{console.log(`WARN: ${o}`,...f)},Je=(o,f)=>{Pt[`${o}/${f}`]||(console.log(`Deprecated as of ${o}. ${f}`),Pt[`${o}/${f}`]=!0)},vn=new Error;function Vt(o,f,{key:h}){let A=0;const Z=o[h],G={},w={};for(let y=1;y<=f.length;y++)w[y+A]=Z[y],G[y+A]=!0,A+=H(f[y-1]);o[h]=w,o[h]._emit=G,o[h]._multi=!0}function go(o){if(Array.isArray(o.begin)){if(o.skip||o.excludeBegin||o.returnBegin)throw Ue("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),vn;if(typeof o.beginScope!="object"||o.beginScope===null)throw Ue("beginScope must be object"),vn;Vt(o,o.begin,{key:"beginScope"}),o.begin=x(o.begin,{joinWith:""})}}function ho(o){if(Array.isArray(o.end)){if(o.skip||o.excludeEnd||o.returnEnd)throw Ue("skip, excludeEnd, returnEnd not compatible with endScope: {}"),vn;if(typeof o.endScope!="object"||o.endScope===null)throw Ue("endScope must be object"),vn;Vt(o,o.end,{key:"endScope"}),o.end=x(o.end,{joinWith:""})}}function po(o){o.scope&&typeof o.scope=="object"&&o.scope!==null&&(o.beginScope=o.scope,delete o.scope)}function vo(o){po(o),typeof o.beginScope=="string"&&(o.beginScope={_wrap:o.beginScope}),typeof o.endScope=="string"&&(o.endScope={_wrap:o.endScope}),go(o),ho(o)}function bo(o){function f(w,y){return new RegExp(_(w),"m"+(o.case_insensitive?"i":"")+(o.unicodeRegex?"u":"")+(y?"g":""))}class h{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(y,M){M.position=this.position++,this.matchIndexes[this.matchAt]=M,this.regexes.push([M,y]),this.matchAt+=H(y)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const y=this.regexes.map(M=>M[1]);this.matcherRe=f(x(y,{joinWith:"|"}),!0),this.lastIndex=0}exec(y){this.matcherRe.lastIndex=this.lastIndex;const M=this.matcherRe.exec(y);if(!M)return null;const W=M.findIndex((an,et)=>et>0&&an!==void 0),K=this.matchIndexes[W];return M.splice(0,W),Object.assign(M,K)}}class A{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(y){if(this.multiRegexes[y])return this.multiRegexes[y];const M=new h;return this.rules.slice(y).forEach(([W,K])=>M.addRule(W,K)),M.compile(),this.multiRegexes[y]=M,M}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(y,M){this.rules.push([y,M]),M.type==="begin"&&this.count++}exec(y){const M=this.getMatcher(this.regexIndex);M.lastIndex=this.lastIndex;let W=M.exec(y);if(this.resumingScanAtSamePosition()&&!(W&&W.index===this.lastIndex)){const K=this.getMatcher(0);K.lastIndex=this.lastIndex+1,W=K.exec(y)}return W&&(this.regexIndex+=W.position+1,this.regexIndex===this.count&&this.considerAll()),W}}function Z(w){const y=new A;return w.contains.forEach(M=>y.addRule(M.begin,{rule:M,type:"begin"})),w.terminatorEnd&&y.addRule(w.terminatorEnd,{type:"end"}),w.illegal&&y.addRule(w.illegal,{type:"illegal"}),y}function G(w,y){const M=w;if(w.isCompiled)return M;[oo,ao,vo,co].forEach(K=>K(w,y)),o.compilerExtensions.forEach(K=>K(w,y)),w.__beforeBegin=null,[so,io,lo].forEach(K=>K(w,y)),w.isCompiled=!0;let W=null;return typeof w.keywords=="object"&&w.keywords.$pattern&&(w.keywords=Object.assign({},w.keywords),W=w.keywords.$pattern,delete w.keywords.$pattern),W=W||/\w+/,w.keywords&&(w.keywords=Lt(w.keywords,o.case_insensitive)),M.keywordPatternRe=f(W,!0),y&&(w.begin||(w.begin=/\B|\b/),M.beginRe=f(M.begin),!w.end&&!w.endsWithParent&&(w.end=/\B|\b/),w.end&&(M.endRe=f(M.end)),M.terminatorEnd=_(M.end)||"",w.endsWithParent&&y.terminatorEnd&&(M.terminatorEnd+=(w.end?"|":"")+y.terminatorEnd)),w.illegal&&(M.illegalRe=f(w.illegal)),w.contains||(w.contains=[]),w.contains=[].concat(...w.contains.map(function(K){return yo(K==="self"?w:K)})),w.contains.forEach(function(K){G(K,M)}),w.starts&&G(w.starts,y),M.matcher=Z(M),M}if(o.compilerExtensions||(o.compilerExtensions=[]),o.contains&&o.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return o.classNameAliases=r(o.classNameAliases||{}),G(o)}function Bt(o){return o?o.endsWithParent||Bt(o.starts):!1}function yo(o){return o.variants&&!o.cachedVariants&&(o.cachedVariants=o.variants.map(function(f){return r(o,{variants:null},f)})),o.cachedVariants?o.cachedVariants:Bt(o)?r(o,{starts:o.starts?r(o.starts):null}):Object.isFrozen(o)?r(o):o}var wo="11.11.1";class Eo extends Error{constructor(f,h){super(f),this.name="HTMLInjectionError",this.html=h}}const Qn=t,jt=r,$t=Symbol("nomatch"),Do=7,Ut=function(o){const f=Object.create(null),h=Object.create(null),A=[];let Z=!0;const G="Could not find the language '{}', did you forget to load/include a language module?",w={disableAutodetect:!0,name:"Plain text",contains:[]};let y={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:g};function M(m){return y.noHighlightRe.test(m)}function W(m){let R=m.className+" ";R+=m.parentNode?m.parentNode.className:"";const k=y.languageDetectRe.exec(R);if(k){const B=Ie(k[1]);return B||(zt(G.replace("{}",k[1])),zt("Falling back to no-highlight mode for this block.",m)),B?k[1]:"no-highlight"}return R.split(/\s+/).find(B=>M(B)||Ie(B))}function K(m,R,k){let B="",q="";typeof R=="object"?(B=m,k=R.ignoreIllegals,q=R.language):(Je("10.7.0","highlight(lang, code, ...args) has been deprecated."),Je("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),q=m,B=R),k===void 0&&(k=!0);const _e={code:B,language:q};yn("before:highlight",_e);const ke=_e.result?_e.result:an(_e.language,_e.code,k);return ke.code=_e.code,yn("after:highlight",ke),ke}function an(m,R,k,B){const q=Object.create(null);function _e(b,E){return b.keywords[E]}function ke(){if(!C.keywords){X.addText(j);return}let b=0;C.keywordPatternRe.lastIndex=0;let E=C.keywordPatternRe.exec(j),I="";for(;E;){I+=j.substring(b,E.index);const O=be.case_insensitive?E[0].toLowerCase():E[0],Q=_e(C,O);if(Q){const[Te,Bo]=Q;if(X.addText(I),I="",q[O]=(q[O]||0)+1,q[O]<=Do&&(Dn+=Bo),Te.startsWith("_"))I+=E[0];else{const jo=be.classNameAliases[Te]||Te;ve(E[0],jo)}}else I+=E[0];b=C.keywordPatternRe.lastIndex,E=C.keywordPatternRe.exec(j)}I+=j.substring(b),X.addText(I)}function wn(){if(j==="")return;let b=null;if(typeof C.subLanguage=="string"){if(!f[C.subLanguage]){X.addText(j);return}b=an(C.subLanguage,j,!0,Xt[C.subLanguage]),Xt[C.subLanguage]=b._top}else b=nt(j,C.subLanguage.length?C.subLanguage:null);C.relevance>0&&(Dn+=b.relevance),X.__addSublanguage(b._emitter,b.language)}function ae(){C.subLanguage!=null?wn():ke(),j=""}function ve(b,E){b!==""&&(X.startScope(E),X.addText(b),X.endScope())}function Kt(b,E){let I=1;const O=E.length-1;for(;I<=O;){if(!b._emit[I]){I++;continue}const Q=be.classNameAliases[b[I]]||b[I],Te=E[I];Q?ve(Te,Q):(j=Te,ke(),j=""),I++}}function qt(b,E){return b.scope&&typeof b.scope=="string"&&X.openNode(be.classNameAliases[b.scope]||b.scope),b.beginScope&&(b.beginScope._wrap?(ve(j,be.classNameAliases[b.beginScope._wrap]||b.beginScope._wrap),j=""):b.beginScope._multi&&(Kt(b.beginScope,E),j="")),C=Object.create(b,{parent:{value:C}}),C}function Wt(b,E,I){let O=T(b.endRe,I);if(O){if(b["on:end"]){const Q=new n(b);b["on:end"](E,Q),Q.isMatchIgnored&&(O=!1)}if(O){for(;b.endsParent&&b.parent;)b=b.parent;return b}}if(b.endsWithParent)return Wt(b.parent,E,I)}function Oo(b){return C.matcher.regexIndex===0?(j+=b[0],1):(st=!0,0)}function Lo(b){const E=b[0],I=b.rule,O=new n(I),Q=[I.__beforeBegin,I["on:begin"]];for(const Te of Q)if(Te&&(Te(b,O),O.isMatchIgnored))return Oo(E);return I.skip?j+=E:(I.excludeBegin&&(j+=E),ae(),!I.returnBegin&&!I.excludeBegin&&(j=E)),qt(I,b),I.returnBegin?0:E.length}function Po(b){const E=b[0],I=R.substring(b.index),O=Wt(C,b,I);if(!O)return $t;const Q=C;C.endScope&&C.endScope._wrap?(ae(),ve(E,C.endScope._wrap)):C.endScope&&C.endScope._multi?(ae(),Kt(C.endScope,b)):Q.skip?j+=E:(Q.returnEnd||Q.excludeEnd||(j+=E),ae(),Q.excludeEnd&&(j=E));do C.scope&&X.closeNode(),!C.skip&&!C.subLanguage&&(Dn+=C.relevance),C=C.parent;while(C!==O.parent);return O.starts&&qt(O.starts,b),Q.returnEnd?0:E.length}function zo(){const b=[];for(let E=C;E!==be;E=E.parent)E.scope&&b.unshift(E.scope);b.forEach(E=>X.openNode(E))}let En={};function Jt(b,E){const I=E&&E[0];if(j+=b,I==null)return ae(),0;if(En.type==="begin"&&E.type==="end"&&En.index===E.index&&I===""){if(j+=R.slice(E.index,E.index+1),!Z){const O=new Error(`0 width match regex (${m})`);throw O.languageName=m,O.badRule=En.rule,O}return 1}if(En=E,E.type==="begin")return Lo(E);if(E.type==="illegal"&&!k){const O=new Error('Illegal lexeme "'+I+'" for mode "'+(C.scope||"<unnamed>")+'"');throw O.mode=C,O}else if(E.type==="end"){const O=Po(E);if(O!==$t)return O}if(E.type==="illegal"&&I==="")return j+=`
`,1;if(ot>1e5&&ot>E.index*3)throw new Error("potential infinite loop, way more iterations than matches");return j+=I,I.length}const be=Ie(m);if(!be)throw Ue(G.replace("{}",m)),new Error('Unknown language: "'+m+'"');const Vo=bo(be);let rt="",C=B||Vo;const Xt={},X=new y.__emitter(y);zo();let j="",Dn=0,He=0,ot=0,st=!1;try{if(be.__emitTokens)be.__emitTokens(R,X);else{for(C.matcher.considerAll();;){ot++,st?st=!1:C.matcher.considerAll(),C.matcher.lastIndex=He;const b=C.matcher.exec(R);if(!b)break;const E=R.substring(He,b.index),I=Jt(E,b);He=b.index+I}Jt(R.substring(He))}return X.finalize(),rt=X.toHTML(),{language:m,value:rt,relevance:Dn,illegal:!1,_emitter:X,_top:C}}catch(b){if(b.message&&b.message.includes("Illegal"))return{language:m,value:Qn(R),illegal:!0,relevance:0,_illegalBy:{message:b.message,index:He,context:R.slice(He-100,He+100),mode:b.mode,resultSoFar:rt},_emitter:X};if(Z)return{language:m,value:Qn(R),illegal:!1,relevance:0,errorRaised:b,_emitter:X,_top:C};throw b}}function et(m){const R={value:Qn(m),illegal:!1,relevance:0,_top:w,_emitter:new y.__emitter(y)};return R._emitter.addText(m),R}function nt(m,R){R=R||y.languages||Object.keys(f);const k=et(m),B=R.filter(Ie).filter(Gt).map(ae=>an(ae,m,!1));B.unshift(k);const q=B.sort((ae,ve)=>{if(ae.relevance!==ve.relevance)return ve.relevance-ae.relevance;if(ae.language&&ve.language){if(Ie(ae.language).supersetOf===ve.language)return 1;if(Ie(ve.language).supersetOf===ae.language)return-1}return 0}),[_e,ke]=q,wn=_e;return wn.secondBest=ke,wn}function Ro(m,R,k){const B=R&&h[R]||k;m.classList.add("hljs"),m.classList.add(`language-${B}`)}function tt(m){let R=null;const k=W(m);if(M(k))return;if(yn("before:highlightElement",{el:m,language:k}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(y.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),y.throwUnescapedHTML))throw new Eo("One of your code blocks includes unescaped HTML.",m.innerHTML);R=m;const B=R.textContent,q=k?K(B,{language:k,ignoreIllegals:!0}):nt(B);m.innerHTML=q.value,m.dataset.highlighted="yes",Ro(m,k,q.language),m.result={language:q.language,re:q.relevance,relevance:q.relevance},q.secondBest&&(m.secondBest={language:q.secondBest.language,relevance:q.secondBest.relevance}),yn("after:highlightElement",{el:m,result:q,text:B})}function xo(m){y=jt(y,m)}const To=()=>{bn(),Je("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Mo(){bn(),Je("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Ht=!1;function bn(){function m(){bn()}if(document.readyState==="loading"){Ht||window.addEventListener("DOMContentLoaded",m,!1),Ht=!0;return}document.querySelectorAll(y.cssSelector).forEach(tt)}function No(m,R){let k=null;try{k=R(o)}catch(B){if(Ue("Language definition for '{}' could not be registered.".replace("{}",m)),Z)Ue(B);else throw B;k=w}k.name||(k.name=m),f[m]=k,k.rawDefinition=R.bind(null,o),k.aliases&&Zt(k.aliases,{languageName:m})}function So(m){delete f[m];for(const R of Object.keys(h))h[R]===m&&delete h[R]}function Ao(){return Object.keys(f)}function Ie(m){return m=(m||"").toLowerCase(),f[m]||f[h[m]]}function Zt(m,{languageName:R}){typeof m=="string"&&(m=[m]),m.forEach(k=>{h[k.toLowerCase()]=R})}function Gt(m){const R=Ie(m);return R&&!R.disableAutodetect}function Co(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=R=>{m["before:highlightBlock"](Object.assign({block:R.el},R))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=R=>{m["after:highlightBlock"](Object.assign({block:R.el},R))})}function Fo(m){Co(m),A.push(m)}function Io(m){const R=A.indexOf(m);R!==-1&&A.splice(R,1)}function yn(m,R){const k=m;A.forEach(function(B){B[k]&&B[k](R)})}function ko(m){return Je("10.7.0","highlightBlock will be removed entirely in v12.0"),Je("10.7.0","Please use highlightElement now."),tt(m)}Object.assign(o,{highlight:K,highlightAuto:nt,highlightAll:bn,highlightElement:tt,highlightBlock:ko,configure:xo,initHighlighting:To,initHighlightingOnLoad:Mo,registerLanguage:No,unregisterLanguage:So,listLanguages:Ao,getLanguage:Ie,registerAliases:Zt,autoDetection:Gt,inherit:jt,addPlugin:Fo,removePlugin:Io}),o.debugMode=function(){Z=!1},o.safeMode=function(){Z=!0},o.versionString=wo,o.regex={concat:N,lookahead:u,either:z,optional:p,anyNumberOfTimes:v};for(const m in pn)typeof pn[m]=="object"&&e(pn[m]);return Object.assign(o,pn),o},Xe=Ut({});return Xe.newInstance=()=>Ut({}),ct=Xe,Xe.HighlightJS=Xe,Xe.default=Xe,ct}var u0=c0();const _r=l0(u0);var f0=De("<pre><code><!></code></pre>");function d0(e,n){const t=zn(n,["children","$$slots","$$events","$$legacy"]),r=zn(t,["code","highlighted","languageName","langtag"]);let i=ze(n,"code",8),s=ze(n,"highlighted",8),l=ze(n,"languageName",8,"plaintext"),d=ze(n,"langtag",8,!1);var a=f0();let c;var g=J(a);Ot(g,1,"",null,{},{hljs:!0});var _=J(g);{var u=p=>{var N=kt(),F=St(N);oi(F,s),ie(p,N)},v=p=>{var N=Js();Ne(()=>Ke(N,i())),ie(p,N)};pt(_,p=>{s()?p(u):p(v,!1)})}Ne(p=>c=di(a,c,{"data-language":l(),...r,[fn]:p},"svelte-1w9vok"),[()=>({langtag:d()})],Mt),ie(e,a)}function _0(e,n){const t=zn(n,["children","$$slots","$$events","$$legacy"]),r=zn(t,["language","code","langtag"]);$n(n,!1);let i=ze(n,"language",8),s=ze(n,"code",8),l=ze(n,"langtag",8,!1);const d=vi();let a=Nt("");bi(()=>{L(a)&&d("highlight",{highlighted:L(a)})}),Ts(()=>(mt(i()),mt(s())),()=>{_r.registerLanguage(i().name,i().register),fe(a,_r.highlight(s(),{language:i().name}).value)}),Ms(),Wr();var c=kt(),g=St(c);si(g,n,"default",{get highlighted(){return L(a)}},_=>{d0(_,hi(()=>r,{get languageName(){return i().name},get langtag(){return l()},get highlighted(){return L(a)},get code(){return s()}}))}),ie(e,c),Un()}function m0(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",s={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},l={keywords:s,illegal:/<\//},d={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},a={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},c={className:"subst",begin:/\$\(/,end:/\)/,keywords:s},g={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,c,g],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},u={className:"string",contains:[e.BACKSLASH_ESCAPE,c,g],begin:"`",end:"`"},v={className:"meta",begin:"@"+n},p={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return l.name="Julia",l.contains=[d,a,_,u,v,p,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],c.contains=l.contains,l}const g0={name:"julia",register:m0};var h0=De('<th class="svelte-m8v9hl"> </th>'),p0=De('<td class="svelte-m8v9hl"> </td>'),v0=De('<a class="issue svelte-m8v9hl" target="_blank">(?)</a>'),b0=De('<td class="svelte-m8v9hl"><!> <span> </span></td>'),y0=De('<tr class="svelte-m8v9hl"><td class="svelte-m8v9hl"> <div class="model-definition svelte-m8v9hl"><!></div></td><!></tr>'),w0=De('<table id="results" class="svelte-m8v9hl"><thead><tr class="svelte-m8v9hl"><th class="svelte-m8v9hl">Model name \\\\ AD type</th><!></tr></thead><tbody></tbody></table>');function E0(e,n){$n(n,!0);const t=Object.keys(n.data),r=Object.keys(n.data[t[0]]),i="https://github.com/EnzymeAD/Enzyme.jl/issues/1995",l={assume_mvnormal__EnzymeForward:i,assume_wishart__EnzymeForward:i,multithreaded__Mooncake:"https://github.com/chalk-lab/Mooncake.jl/issues/570"};var d=w0(),a=J(d),c=J(a),g=Me(J(c));Nn(g,17,()=>r,Mn,(u,v)=>{var p=h0(),N=J(p);Ne(()=>Ke(N,L(v))),ie(u,p)});var _=Me(a);Nn(_,21,()=>bt(n.data),Mn,(u,v)=>{let p=()=>L(v)[0],N=()=>L(v)[1];var F=y0(),z=J(F),H=J(z),T=Me(H),D=J(T);_0(D,{language:g0,get code(){return n.modelDefinitions[p()]}});var x=Me(z);Nn(x,17,()=>bt(N()),Mn,(ee,S)=>{let U=()=>L(S)[0],Y=()=>L(S)[1];var Re=kt(),ge=St(Re);{var $e=ne=>{var he=p0(),xe=J(he);Ne(Fe=>Ke(xe,Fe),[()=>Y().toFixed(3)]),ie(ne,he)},on=ne=>{var he=b0(),xe=J(he);{var Fe=sn=>{var hn=v0();Ne(()=>vt(hn,"href",l[`${p()}__${U()}`])),ie(sn,hn)};pt(xe,sn=>{l[`${p()}__${U()}`]&&sn(Fe)})}var pe=Me(xe,2),Yn=J(pe);Ne(()=>{Ot(pe,1,Hr(Y()),"svelte-m8v9hl"),Ke(Yn,Y())}),ie(ne,he)};pt(ge,ne=>{typeof Y()=="number"?ne($e):ne(on,!1)})}ie(ee,Re)}),Ne(()=>Ke(H,`${p()??""} `)),ie(u,F)}),ie(e,d),Un()}var D0=De(`<div id="main-wrapper" class="svelte-14rlgmo"><main class="svelte-14rlgmo"><h1>Turing AD tests</h1> <p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p> <p>This page is intended as a brief overview of how different AD
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
                describes the problem.</li></ul> <h2>Results</h2> <p><a href="adtests.json" target="_blank" download="">Download the raw data (JSON)</a></p> <!> <h2>Manifest</h2> <p>The tests above were run with the following package versions:</p> <!></main></div>`);function R0(e){var n=D0(),t=J(n),r=Me(J(t),14);E0(r,{data:ha,modelDefinitions:fl});var i=Me(r,6);a0(i,{}),ie(e,n)}Xs(R0,{target:document.getElementById("app")});
