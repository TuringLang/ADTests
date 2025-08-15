(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Qt=!1;var $n=Array.isArray,$o=Array.prototype.indexOf,wt=Array.from,Uo=Object.defineProperty,je=Object.getOwnPropertyDescriptor,vr=Object.getOwnPropertyDescriptors,Ho=Object.prototype,Zo=Array.prototype,Et=Object.getPrototypeOf,er=Object.isExtensible;function ln(e){return typeof e=="function"}function Go(e){return e()}function ft(e){for(var n=0;n<e.length;n++)e[n]()}const me=2,pr=4,Un=8,Dt=16,Ce=32,nn=64,An=128,ce=256,kn=512,se=1024,Re=2048,Ue=4096,Ne=8192,Hn=16384,Ko=32768,Rt=65536,qo=1<<17,Wo=1<<19,hr=1<<20,dt=1<<21,qe=Symbol("$state"),br=Symbol("legacy props"),Xo=Symbol("");function yr(e){return e===this.v}function Jo(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Mt(e){return!Jo(e,this.v)}function Yo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function es(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ns(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ts(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function rs(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function os(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ss(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function is(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let pn=!1,as=!1;function ls(){pn=!0}const xt=1,Tt=2,wr=4,cs=8,us=16,fs=1,ds=2,Er=4,_s=8,ms=16,gs=1,vs=2,ie=Symbol(),ps="http://www.w3.org/1999/xhtml",hs="@attach";function Dr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let $=null;function nr(e){$=e}function hn(e,n=!1,t){var r=$={p:$,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};pn&&!n&&($.l={s:null,u:null,r1:[],r2:Qe(!1)}),Rs(()=>{r.d=!0})}function bn(e){const n=$;if(n!==null){const l=n.e;if(l!==null){var t=P,r=V;n.e=null;try{for(var i=0;i<l.length;i++){var s=l[i];$e(s.effect),Me(s.reaction),St(s.fn)}}finally{$e(t),Me(r)}}$=n.p,n.m=!0}return{}}function Zn(){return!pn||$!==null&&$.l===null}function Ke(e){if(typeof e!="object"||e===null||qe in e)return e;const n=Et(e);if(n!==Ho&&n!==Zo)return e;var t=new Map,r=$n(e),i=Oe(0),s=V,l=f=>{var a=V;Me(s);var c=f();return Me(a),c};return r&&t.set("length",Oe(e.length)),new Proxy(e,{defineProperty(f,a,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&os();var g=t.get(a);return g===void 0?(g=l(()=>Oe(c.value)),t.set(a,g)):fe(g,l(()=>Ke(c.value))),!0},deleteProperty(f,a){var c=t.get(a);if(c===void 0)a in f&&(t.set(a,l(()=>Oe(ie))),at(i));else{if(r&&typeof a=="string"){var g=t.get("length"),_=Number(a);Number.isInteger(_)&&_<g.v&&fe(g,_)}fe(c,ie),at(i)}return!0},get(f,a,c){var v;if(a===qe)return e;var g=t.get(a),_=a in f;if(g===void 0&&(!_||(v=je(f,a))!=null&&v.writable)&&(g=l(()=>Oe(Ke(_?f[a]:ie))),t.set(a,g)),g!==void 0){var u=O(g);return u===ie?void 0:u}return Reflect.get(f,a,c)},getOwnPropertyDescriptor(f,a){var c=Reflect.getOwnPropertyDescriptor(f,a);if(c&&"value"in c){var g=t.get(a);g&&(c.value=O(g))}else if(c===void 0){var _=t.get(a),u=_==null?void 0:_.v;if(_!==void 0&&u!==ie)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(f,a){var u;if(a===qe)return!0;var c=t.get(a),g=c!==void 0&&c.v!==ie||Reflect.has(f,a);if(c!==void 0||P!==null&&(!g||(u=je(f,a))!=null&&u.writable)){c===void 0&&(c=l(()=>Oe(g?Ke(f[a]):ie)),t.set(a,c));var _=O(c);if(_===ie)return!1}return g},set(f,a,c,g){var H;var _=t.get(a),u=a in f;if(r&&a==="length")for(var v=c;v<_.v;v+=1){var p=t.get(v+"");p!==void 0?fe(p,ie):v in f&&(p=l(()=>Oe(ie)),t.set(v+"",p))}_===void 0?(!u||(H=je(f,a))!=null&&H.writable)&&(_=l(()=>Oe(void 0)),fe(_,l(()=>Ke(c))),t.set(a,_)):(u=_.v!==ie,fe(_,l(()=>Ke(c))));var F=Reflect.getOwnPropertyDescriptor(f,a);if(F!=null&&F.set&&F.set.call(g,c),!u){if(r&&typeof a=="string"){var A=t.get("length"),z=Number(a);Number.isInteger(z)&&z>=A.v&&fe(A,z+1)}at(i)}return!0},ownKeys(f){O(i);var a=Reflect.ownKeys(f).filter(_=>{var u=t.get(_);return u===void 0||u.v!==ie});for(var[c,g]of t)g.v!==ie&&!(c in f)&&a.push(c);return a},setPrototypeOf(){ss()}})}function at(e,n=1){fe(e,e.v+n)}function mn(e){var n=me|Re,t=V!==null&&(V.f&me)!==0?V:null;return P===null||t!==null&&(t.f&ce)!==0?n|=ce:P.f|=hr,{ctx:$,deps:null,effects:null,equals:yr,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??P}}function Ft(e){const n=mn(e);return n.equals=Mt,n}function Rr(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)Se(n[t])}}function bs(e){for(var n=e.parent;n!==null;){if((n.f&me)===0)return n;n=n.parent}return null}function Mr(e){var n,t=P;$e(bs(e));try{Rr(e),n=jr(e)}finally{$e(t)}return n}function xr(e){var n=Mr(e),t=(ze||(e.f&ce)!==0)&&e.deps!==null?Ue:se;de(e,t),e.equals(n)||(e.v=n,e.wv=Vr())}const gn=new Map;function Qe(e,n){var t={f:0,v:e,reactions:null,equals:yr,rv:0,wv:0};return t}function Oe(e,n){const t=Qe(e);return Cs(t),t}function Nt(e,n=!1){var r;const t=Qe(e);return n||(t.equals=Mt),pn&&$!==null&&$.l!==null&&((r=$.l).s??(r.s=[])).push(t),t}function fe(e,n,t=!1){V!==null&&!De&&Zn()&&(V.f&(me|Dt))!==0&&!(oe!=null&&oe.includes(e))&&is();let r=t?Ke(n):n;return _t(e,r)}function _t(e,n){if(!e.equals(n)){var t=e.v;yn?gn.set(e,n):gn.set(e,t),e.v=n,(e.f&me)!==0&&((e.f&Re)!==0&&Mr(e),de(e,(e.f&ce)===0?se:Ue)),e.wv=Vr(),Tr(e,Re),Zn()&&P!==null&&(P.f&se)!==0&&(P.f&(Ce|nn))===0&&(ue===null?As([e]):ue.push(e))}return n}function tr(e,n=1){var t=O(e),r=n===1?t++:t--;return fe(e,t),r}function Tr(e,n){var t=e.reactions;if(t!==null)for(var r=Zn(),i=t.length,s=0;s<i;s++){var l=t[s],f=l.f;(f&Re)===0&&(!r&&l===P||(de(l,n),(f&(se|ce))!==0&&((f&me)!==0?Tr(l,Ue):Yn(l))))}}let ys=!1;var rr,Fr,Nr,Sr;function ws(){if(rr===void 0){rr=window,Fr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Nr=je(n,"firstChild").get,Sr=je(n,"nextSibling").get,er(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),er(t)&&(t.__t=void 0)}}function Gn(e=""){return document.createTextNode(e)}function Pe(e){return Nr.call(e)}function Kn(e){return Sr.call(e)}function W(e,n){return Pe(e)}function qn(e,n){{var t=Pe(e);return t instanceof Comment&&t.data===""?Kn(t):t}}function we(e,n=1,t=!1){let r=e;for(;n--;)r=Kn(r);return r}function Es(e){e.textContent=""}function Cr(e){P===null&&V===null&&es(),V!==null&&(V.f&ce)!==0&&P===null&&Qo(),yn&&Yo()}function Ds(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function tn(e,n,t,r=!0){var i=P,s={ctx:$,deps:null,nodes_start:null,nodes_end:null,f:e|Re,first:null,fn:n,last:null,next:null,parent:i,prev:null,teardown:null,transitions:null,wv:0};if(t)try{Jn(s),s.f|=Ko}catch(a){throw Se(s),a}else n!==null&&Yn(s);var l=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(hr|An))===0;if(!l&&r&&(i!==null&&Ds(s,i),V!==null&&(V.f&me)!==0)){var f=V;(f.effects??(f.effects=[])).push(s)}return s}function Rs(e){const n=tn(Un,null,!1);return de(n,se),n.teardown=e,n}function or(e){Cr();var n=P!==null&&(P.f&Ce)!==0&&$!==null&&!$.m;if(n){var t=$;(t.e??(t.e=[])).push({fn:e,effect:P,reaction:V})}else{var r=St(e);return r}}function Ms(e){return Cr(),Ct(e)}function xs(e){const n=tn(nn,e,!0);return(t={})=>new Promise(r=>{t.outro?In(n,()=>{Se(n),r(void 0)}):(Se(n),r(void 0))})}function St(e){return tn(pr,e,!1)}function Ts(e,n){var t=$,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=Ct(()=>{e(),!r.ran&&(r.ran=!0,fe(t.l.r2,!0),Bn(n))})}function Fs(){var e=$;Ct(()=>{if(O(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&se)!==0&&de(t,Ue),rn(t)&&Jn(t),n.ran=!1}e.l.r2.v=!1}})}function Ct(e){return tn(Un,e,!0)}function Ee(e,n=[],t=mn){const r=n.map(t);return Wn(()=>e(...r.map(O)))}function Wn(e,n=0){return tn(Un|Dt|n,e,!0)}function en(e,n=!0){return tn(Un|Ce,e,!0,n)}function Ar(e){var n=e.teardown;if(n!==null){const t=yn,r=V;sr(!0),Me(null);try{n.call(null)}finally{sr(t),Me(r)}}}function kr(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&nn)!==0?t.parent=null:Se(t,n),t=r}}function Ns(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&Ce)===0&&Se(n),n=t}}function Se(e,n=!0){var t=!1;(n||(e.f&Wo)!==0)&&e.nodes_start!==null&&(Ir(e.nodes_start,e.nodes_end),t=!0),kr(e,n&&!t),Vn(e,0),de(e,Hn);var r=e.transitions;if(r!==null)for(const s of r)s.stop();Ar(e);var i=e.parent;i!==null&&i.first!==null&&Or(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Ir(e,n){for(;e!==null;){var t=e===n?null:Kn(e);e.remove(),e=t}}function Or(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function In(e,n){var t=[];At(e,t,!0),Lr(t,()=>{Se(e),n&&n()})}function Lr(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var i of e)i.out(r)}else n()}function At(e,n,t){if((e.f&Ne)===0){if(e.f^=Ne,e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&n.push(l);for(var r=e.first;r!==null;){var i=r.next,s=(r.f&Rt)!==0||(r.f&Ce)!==0;At(r,n,s?t:!1),r=i}}}function On(e){Pr(e,!0)}function Pr(e,n){if((e.f&Ne)!==0){e.f^=Ne,(e.f&se)===0&&(e.f^=se),rn(e)&&(de(e,Re),Yn(e));for(var t=e.first;t!==null;){var r=t.next,i=(t.f&Rt)!==0||(t.f&Ce)!==0;Pr(t,i?n:!1),t=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&s.in()}}let Ln=[];function Ss(){var e=Ln;Ln=[],ft(e)}function kt(e){Ln.length===0&&queueMicrotask(Ss),Ln.push(e)}let Sn=!1,mt=!1,Pn=null,We=!1,yn=!1;function sr(e){yn=e}let Cn=[];let V=null,De=!1;function Me(e){V=e}let P=null;function $e(e){P=e}let oe=null;function Cs(e){V!==null&&V.f&dt&&(oe===null?oe=[e]:oe.push(e))}let te=null,le=0,ue=null;function As(e){ue=e}let zr=1,zn=0,ze=!1;function Vr(){return++zr}function rn(e){var _;var n=e.f;if((n&Re)!==0)return!0;if((n&Ue)!==0){var t=e.deps,r=(n&ce)!==0;if(t!==null){var i,s,l=(n&kn)!==0,f=r&&P!==null&&!ze,a=t.length;if(l||f){var c=e,g=c.parent;for(i=0;i<a;i++)s=t[i],(l||!((_=s==null?void 0:s.reactions)!=null&&_.includes(c)))&&(s.reactions??(s.reactions=[])).push(c);l&&(c.f^=kn),f&&g!==null&&(g.f&ce)===0&&(c.f^=ce)}for(i=0;i<a;i++)if(s=t[i],rn(s)&&xr(s),s.wv>e.wv)return!0}(!r||P!==null&&!ze)&&de(e,se)}return!1}function ks(e,n){for(var t=n;t!==null;){if((t.f&An)!==0)try{t.fn(e);return}catch{t.f^=An}t=t.parent}throw Sn=!1,e}function ir(e){return(e.f&Hn)===0&&(e.parent===null||(e.parent.f&An)===0)}function Xn(e,n,t,r){if(Sn){if(t===null&&(Sn=!1),ir(n))throw e;return}if(t!==null&&(Sn=!0),ks(e,n),ir(n))throw e}function Br(e,n,t=!0){var r=e.reactions;if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];oe!=null&&oe.includes(e)||((s.f&me)!==0?Br(s,n,!1):n===s&&(t?de(s,Re):(s.f&se)!==0&&de(s,Ue),Yn(s)))}}function jr(e){var v;var n=te,t=le,r=ue,i=V,s=ze,l=oe,f=$,a=De,c=e.f;te=null,le=0,ue=null,ze=(c&ce)!==0&&(De||!We||V===null),V=(c&(Ce|nn))===0?e:null,oe=null,nr(e.ctx),De=!1,zn++,e.f|=dt;try{var g=(0,e.fn)(),_=e.deps;if(te!==null){var u;if(Vn(e,le),_!==null&&le>0)for(_.length=le+te.length,u=0;u<te.length;u++)_[le+u]=te[u];else e.deps=_=te;if(!ze)for(u=le;u<_.length;u++)((v=_[u]).reactions??(v.reactions=[])).push(e)}else _!==null&&le<_.length&&(Vn(e,le),_.length=le);if(Zn()&&ue!==null&&!De&&_!==null&&(e.f&(me|Ue|Re))===0)for(u=0;u<ue.length;u++)Br(ue[u],e);return i!==null&&i!==e&&(zn++,ue!==null&&(r===null?r=ue:r.push(...ue))),g}finally{te=n,le=t,ue=r,V=i,ze=s,oe=l,nr(f),De=a,e.f^=dt}}function Is(e,n){let t=n.reactions;if(t!==null){var r=$o.call(t,e);if(r!==-1){var i=t.length-1;i===0?t=n.reactions=null:(t[r]=t[i],t.pop())}}t===null&&(n.f&me)!==0&&(te===null||!te.includes(n))&&(de(n,Ue),(n.f&(ce|kn))===0&&(n.f^=kn),Rr(n),Vn(n,0))}function Vn(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Is(e,t[r])}function Jn(e){var n=e.f;if((n&Hn)===0){de(e,se);var t=P,r=$,i=We;P=e,We=!0;try{(n&Dt)!==0?Ns(e):kr(e),Ar(e);var s=jr(e);e.teardown=typeof s=="function"?s:null,e.wv=zr;var l=e.deps,f;Qt&&as&&e.f&Re}catch(a){Xn(a,e,t,r||e.ctx)}finally{We=i,P=t}}}function Os(){try{ns()}catch(e){if(Pn!==null)Xn(e,Pn,null);else throw e}}function Ls(){var e=We;try{var n=0;for(We=!0;Cn.length>0;){n++>1e3&&Os();var t=Cn,r=t.length;Cn=[];for(var i=0;i<r;i++){var s=zs(t[i]);Ps(s)}gn.clear()}}finally{mt=!1,We=e,Pn=null}}function Ps(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(Hn|Ne))===0)try{rn(r)&&(Jn(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Or(r):r.fn=null))}catch(i){Xn(i,r,null,r.ctx)}}}function Yn(e){mt||(mt=!0,queueMicrotask(Ls));for(var n=Pn=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(nn|Ce))!==0){if((t&se)===0)return;n.f^=se}}Cn.push(n)}function zs(e){for(var n=[],t=e;t!==null;){var r=t.f,i=(r&(Ce|nn))!==0,s=i&&(r&se)!==0;if(!s&&(r&Ne)===0){if((r&pr)!==0)n.push(t);else if(i)t.f^=se;else try{rn(t)&&Jn(t)}catch(a){Xn(a,t,null,t.ctx)}var l=t.first;if(l!==null){t=l;continue}}var f=t.parent;for(t=t.next;t===null&&f!==null;)t=f.next,f=f.parent}return n}function O(e){var n=e.f,t=(n&me)!==0;if(V!==null&&!De){if(!(oe!=null&&oe.includes(e))){var r=V.deps;e.rv<zn&&(e.rv=zn,te===null&&r!==null&&r[le]===e?le++:te===null?te=[e]:(!ze||!te.includes(e))&&te.push(e))}}else if(t&&e.deps===null&&e.effects===null){var i=e,s=i.parent;s!==null&&(s.f&ce)===0&&(i.f^=ce)}return t&&(i=e,rn(i)&&xr(i)),yn&&gn.has(e)?gn.get(e):e.v}function Bn(e){var n=De;try{return De=!0,e()}finally{De=n}}const Vs=-7169;function de(e,n){e.f=e.f&Vs|n}function gt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(qe in e)vt(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&qe in t&&vt(t)}}}function vt(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{vt(e[r],n)}catch{}const t=Et(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=vr(t);for(let i in r){const s=r[i].get;if(s)try{s.call(e)}catch{}}}}}function Bs(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const js=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function $s(e){return js.includes(e)}const Us={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Hs(e){return e=e.toLowerCase(),Us[e]??e}const Zs=["touchstart","touchmove"];function Gs(e){return Zs.includes(e)}function Ks(e,n){if(n){const t=document.body;e.autofocus=!0,kt(()=>{document.activeElement===t&&e.focus()})}}function qs(e){var n=V,t=P;Me(null),$e(null);try{return e()}finally{Me(n),$e(t)}}const $r=new Set,pt=new Set;function Ws(e,n,t,r={}){function i(s){if(r.capture||un.call(n,s),!s.cancelBubble)return qs(()=>t==null?void 0:t.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?kt(()=>{n.addEventListener(e,i,r)}):n.addEventListener(e,i,r),i}function Xs(e){for(var n=0;n<e.length;n++)$r.add(e[n]);for(var t of pt)t(e)}function un(e){var H;var n=this,t=n.ownerDocument,r=e.type,i=((H=e.composedPath)==null?void 0:H.call(e))||[],s=i[0]||e.target,l=0,f=e.__root;if(f){var a=i.indexOf(f);if(a!==-1&&(n===document||n===window)){e.__root=n;return}var c=i.indexOf(n);if(c===-1)return;a<=c&&(l=a)}if(s=i[l]||e.target,s!==n){Uo(e,"currentTarget",{configurable:!0,get(){return s||t}});var g=V,_=P;Me(null),$e(null);try{for(var u,v=[];s!==null;){var p=s.assignedSlot||s.parentNode||s.host||null;try{var F=s["__"+r];if(F!=null&&(!s.disabled||e.target===s))if($n(F)){var[A,...z]=F;A.apply(s,[e,...z])}else F.call(s,e)}catch(x){u?v.push(x):u=x}if(e.cancelBubble||p===n||p===null)break;s=p}if(u){for(let x of v)queueMicrotask(()=>{throw x});throw u}}finally{e.__root=n,delete e.currentTarget,Me(g),$e(_)}}}function Ur(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function vn(e,n){var t=P;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function ge(e,n){var t=(n&gs)!==0,r=(n&vs)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=Ur(s?e:"<!>"+e),t||(i=Pe(i)));var l=r||Fr?document.importNode(i,!0):i.cloneNode(!0);if(t){var f=Pe(l),a=l.lastChild;vn(f,a)}else vn(l,l);return l}}function Js(e=""){{var n=Gn(e+"");return vn(n,n),n}}function It(){var e=document.createDocumentFragment(),n=document.createComment(""),t=Gn();return e.append(n,t),vn(n,t),e}function re(e,n){e!==null&&e.before(n)}function Ve(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function Ys(e,n){return Qs(e,n)}const Ye=new Map;function Qs(e,{target:n,anchor:t,props:r={},events:i,context:s,intro:l=!0}){ws();var f=new Set,a=_=>{for(var u=0;u<_.length;u++){var v=_[u];if(!f.has(v)){f.add(v);var p=Gs(v);n.addEventListener(v,un,{passive:p});var F=Ye.get(v);F===void 0?(document.addEventListener(v,un,{passive:p}),Ye.set(v,1)):Ye.set(v,F+1)}}};a(wt($r)),pt.add(a);var c=void 0,g=xs(()=>{var _=t??n.appendChild(Gn());return en(()=>{if(s){hn({});var u=$;u.c=s}i&&(r.$$events=i),c=e(_,r)||{},s&&bn()}),()=>{var p;for(var u of f){n.removeEventListener(u,un);var v=Ye.get(u);--v===0?(document.removeEventListener(u,un),Ye.delete(u)):Ye.set(u,v)}pt.delete(a),_!==t&&((p=_.parentNode)==null||p.removeChild(_))}});return ei.set(c,g),c}let ei=new WeakMap;function ht(e,n,[t,r]=[0,0]){var i=e,s=null,l=null,f=ie,a=t>0?Rt:0,c=!1;const g=(u,v=!0)=>{c=!0,_(v,u)},_=(u,v)=>{f!==(f=u)&&(f?(s?On(s):v&&(s=en(()=>v(i))),l&&In(l,()=>{l=null})):(l?On(l):v&&(l=en(()=>v(i,[t+1,r]))),s&&In(s,()=>{s=null})))};Wn(()=>{c=!1,n(g),c||_(null,null)},a)}function dn(e,n){return n}function ni(e,n,t,r){for(var i=[],s=n.length,l=0;l<s;l++)At(n[l].e,i,!0);var f=s>0&&i.length===0&&t!==null;if(f){var a=t.parentNode;Es(a),a.append(t),r.clear(),Le(e,n[0].prev,n[s-1].next)}Lr(i,()=>{for(var c=0;c<s;c++){var g=n[c];f||(r.delete(g.k),Le(e,g.prev,g.next)),Se(g.e,!f)}})}function _n(e,n,t,r,i,s=null){var l=e,f={flags:n,items:new Map,first:null},a=(n&wr)!==0;if(a){var c=e;l=c.appendChild(Gn())}var g=null,_=!1,u=Ft(()=>{var v=t();return $n(v)?v:v==null?[]:wt(v)});Wn(()=>{var v=O(u),p=v.length;_&&p===0||(_=p===0,ti(v,f,l,i,n,r,t),s!==null&&(p===0?g?On(g):g=en(()=>s(l)):g!==null&&In(g,()=>{g=null})),O(u))})}function ti(e,n,t,r,i,s,l){var ne,pe,Te,Ae;var f=(i&cs)!==0,a=(i&(xt|Tt))!==0,c=e.length,g=n.items,_=n.first,u=_,v,p=null,F,A=[],z=[],H,x,D,M;if(f)for(M=0;M<c;M+=1)H=e[M],x=s(H,M),D=g.get(x),D!==void 0&&((ne=D.a)==null||ne.measure(),(F??(F=new Set)).add(D));for(M=0;M<c;M+=1){if(H=e[M],x=s(H,M),D=g.get(x),D===void 0){var ee=u?u.e.nodes_start:t;p=oi(ee,n,p,p===null?n.first:p.next,H,x,M,r,i,l),g.set(x,p),A=[],z=[],u=p.next;continue}if(a&&ri(D,H,M,i),(D.e.f&Ne)!==0&&(On(D.e),f&&((pe=D.a)==null||pe.unfix(),(F??(F=new Set)).delete(D))),D!==u){if(v!==void 0&&v.has(D)){if(A.length<z.length){var N=z[0],U;p=N.prev;var Y=A[0],xe=A[A.length-1];for(U=0;U<A.length;U+=1)ar(A[U],N,t);for(U=0;U<z.length;U+=1)v.delete(z[U]);Le(n,Y.prev,xe.next),Le(n,p,Y),Le(n,xe,N),u=N,p=xe,M-=1,A=[],z=[]}else v.delete(D),ar(D,u,t),Le(n,D.prev,D.next),Le(n,D,p===null?n.first:p.next),Le(n,p,D),p=D;continue}for(A=[],z=[];u!==null&&u.k!==x;)(u.e.f&Ne)===0&&(v??(v=new Set)).add(u),z.push(u),u=u.next;if(u===null)continue;D=u}A.push(D),p=D,u=D.next}if(u!==null||v!==void 0){for(var ve=v===void 0?[]:wt(v);u!==null;)(u.e.f&Ne)===0&&ve.push(u),u=u.next;var He=ve.length;if(He>0){var on=(i&wr)!==0&&c===0?t:null;if(f){for(M=0;M<He;M+=1)(Te=ve[M].a)==null||Te.measure();for(M=0;M<He;M+=1)(Ae=ve[M].a)==null||Ae.fix()}ni(n,ve,on,g)}}f&&kt(()=>{var he;if(F!==void 0)for(D of F)(he=D.a)==null||he.apply()}),P.first=n.first&&n.first.e,P.last=p&&p.e}function ri(e,n,t,r){(r&xt)!==0&&_t(e.v,n),(r&Tt)!==0?_t(e.i,t):e.i=t}function oi(e,n,t,r,i,s,l,f,a,c){var g=(a&xt)!==0,_=(a&us)===0,u=g?_?Nt(i):Qe(i):i,v=(a&Tt)===0?l:Qe(l),p={i:v,v:u,k:s,a:null,e:null,prev:t,next:r};try{return p.e=en(()=>f(e,u,v,c),ys),p.e.prev=t&&t.e,p.e.next=r&&r.e,t===null?n.first=p:(t.next=p,t.e.next=p.e),r!==null&&(r.prev=p,r.e.prev=p.e),p}finally{}}function ar(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,i=n?n.e.nodes_start:t,s=e.e.nodes_start;s!==r;){var l=Kn(s);i.before(s),s=l}}function Le(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function si(e,n,t=!1,r=!1,i=!1){var s=e,l="";Ee(()=>{var f=P;if(l!==(l=n()??"")&&(f.nodes_start!==null&&(Ir(f.nodes_start,f.nodes_end),f.nodes_start=f.nodes_end=null),l!=="")){var a=l+"";t?a=`<svg>${a}</svg>`:r&&(a=`<math>${a}</math>`);var c=Ur(a);if((t||r)&&(c=Pe(c)),vn(Pe(c),c.lastChild),t||r)for(;Pe(c);)s.before(Pe(c));else s.before(c)}})}function ii(e,n,t,r,i){var f;var s=(f=n.$$slots)==null?void 0:f[t],l=!1;s===!0&&(s=n.children,l=!0),s===void 0?i!==null&&i(e):s(e,l?()=>r:r)}function ai(e,n){var t=void 0,r;Wn(()=>{t!==(t=n())&&(r&&(Se(r),r=null),t&&(r=en(()=>{St(()=>t(e))})))})}function Hr(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=Hr(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function li(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=Hr(e))&&(r&&(r+=" "),r+=n);return r}function Zr(e){return typeof e=="object"?li(e):e??""}const lr=[...` 	
\r\f \v\uFEFF`];function ci(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var i in t)if(t[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,l=0;(l=r.indexOf(i,l))>=0;){var f=l+s;(l===0||lr.includes(r[l-1]))&&(f===r.length||lr.includes(r[f]))?r=(l===0?"":r.substring(0,l))+r.substring(f+1):l=f}}return r===""?null:r}function cr(e,n=!1){var t=n?" !important;":";",r="";for(var i in e){var s=e[i];s!=null&&s!==""&&(r+=" "+i+": "+s+t)}return r}function lt(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ui(e,n){if(n){var t="",r,i;if(Array.isArray(n)?(r=n[0],i=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,l=0,f=!1,a=[];r&&a.push(...Object.keys(r).map(lt)),i&&a.push(...Object.keys(i).map(lt));var c=0,g=-1;const F=e.length;for(var _=0;_<F;_++){var u=e[_];if(f?u==="/"&&e[_-1]==="*"&&(f=!1):s?s===u&&(s=!1):u==="/"&&e[_+1]==="*"?f=!0:u==='"'||u==="'"?s=u:u==="("?l++:u===")"&&l--,!f&&s===!1&&l===0){if(u===":"&&g===-1)g=_;else if(u===";"||_===F-1){if(g!==-1){var v=lt(e.substring(c,g).trim());if(!a.includes(v)){u!==";"&&_++;var p=e.substring(c,_).trim();t+=" "+p+";"}}c=_+1,g=-1}}}}return r&&(t+=cr(r)),i&&(t+=cr(i,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Ot(e,n,t,r,i,s){var l=e.__className;if(l!==t||l===void 0){var f=ci(t,r,s);f==null?e.removeAttribute("class"):n?e.className=f:e.setAttribute("class",f),e.__className=t}else if(s&&i!==s)for(var a in s){var c=!!s[a];(i==null||c!==!!i[a])&&e.classList.toggle(a,c)}return s}function ct(e,n={},t,r){for(var i in t){var s=t[i];n[i]!==s&&(t[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function fi(e,n,t,r){var i=e.__style;if(i!==n){var s=ui(n,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=n}else r&&(Array.isArray(r)?(ct(e,t==null?void 0:t[0],r[0]),ct(e,t==null?void 0:t[1],r[1],"important")):ct(e,t,r));return r}const fn=Symbol("class"),cn=Symbol("style"),Gr=Symbol("is custom element"),Kr=Symbol("is html");function di(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function bt(e,n,t,r){var i=qr(e);i[n]!==(i[n]=t)&&(n==="loading"&&(e[Xo]=t),t==null?e.removeAttribute(n):typeof t!="string"&&Wr(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function _i(e,n,t,r,i=!1){var s=qr(e),l=s[Gr],f=!s[Kr],a=n||{},c=e.tagName==="OPTION";for(var g in n)g in t||(t[g]=null);t.class?t.class=Zr(t.class):t.class=null,t[cn]&&(t.style??(t.style=null));var _=Wr(e);for(const x in t){let D=t[x];if(c&&x==="value"&&D==null){e.value=e.__value="",a[x]=D;continue}if(x==="class"){var u=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ot(e,u,D,r,n==null?void 0:n[fn],t[fn]),a[x]=D,a[fn]=t[fn];continue}if(x==="style"){fi(e,D,n==null?void 0:n[cn],t[cn]),a[x]=D,a[cn]=t[cn];continue}var v=a[x];if(D!==v){a[x]=D;var p=x[0]+x[1];if(p!=="$$")if(p==="on"){const M={},ee="$$"+x;let N=x.slice(2);var F=$s(N);if(Bs(N)&&(N=N.slice(0,-7),M.capture=!0),!F&&v){if(D!=null)continue;e.removeEventListener(N,a[ee],M),a[ee]=null}if(D!=null)if(F)e[`__${N}`]=D,Xs([N]);else{let U=function(Y){a[x].call(this,Y)};var H=U;a[ee]=Ws(N,e,U,M)}else F&&(e[`__${N}`]=void 0)}else if(x==="style")bt(e,x,D);else if(x==="autofocus")Ks(e,!!D);else if(!l&&(x==="__value"||x==="value"&&D!=null))e.value=e.__value=D;else if(x==="selected"&&c)di(e,D);else{var A=x;f||(A=Hs(A));var z=A==="defaultValue"||A==="defaultChecked";if(D==null&&!l&&!z)if(s[x]=null,A==="value"||A==="checked"){let M=e;const ee=n===void 0;if(A==="value"){let N=M.defaultValue;M.removeAttribute(A),M.defaultValue=N,M.value=M.__value=ee?N:null}else{let N=M.defaultChecked;M.removeAttribute(A),M.defaultChecked=N,M.checked=ee?N:!1}}else e.removeAttribute(x);else z||_.includes(A)&&(l||typeof D!="string")?e[A]=D:typeof D!="function"&&bt(e,A,D)}}}for(let x of Object.getOwnPropertySymbols(t))x.description===hs&&ai(e,()=>t[x]);return a}function qr(e){return e.__attributes??(e.__attributes={[Gr]:e.nodeName.includes("-"),[Kr]:e.namespaceURI===ps})}var ur=new Map;function Wr(e){var n=ur.get(e.nodeName);if(n)return n;ur.set(e.nodeName,n=[]);for(var t,r=e,i=Element.prototype;i!==r;){t=vr(r);for(var s in t)t[s].set&&n.push(s);r=Et(r)}return n}function Lt(e=!1){const n=$,t=n.l.u;if(!t)return;let r=()=>gt(n.s);if(e){let i=0,s={};const l=mn(()=>{let f=!1;const a=n.s;for(const c in a)a[c]!==s[c]&&(s[c]=a[c],f=!0);return f&&i++,i});r=()=>O(l)}t.b.length&&Ms(()=>{fr(n,r),ft(t.b)}),or(()=>{const i=Bn(()=>t.m.map(Go));return()=>{for(const s of i)typeof s=="function"&&s()}}),t.a.length&&or(()=>{fr(n,r),ft(t.a)})}function fr(e,n){if(e.l.s)for(const t of e.l.s)O(t);n()}let Nn=!1;function mi(e){var n=Nn;try{return Nn=!1,[e(),Nn]}finally{Nn=n}}const gi={get(e,n){if(!e.exclude.includes(n))return O(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=Be({get[n](){return e.props[n]}},n,Er)),e.special[n](t),tr(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),tr(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function jn(e,n){return new Proxy({props:e,exclude:n,special:{},version:Qe(0)},gi)}const vi={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let i=e.props[r];ln(i)&&(i=i());const s=je(i,n);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const i=je(r,n);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,n){if(n===qe||n===br)return!1;for(let t of e.props)if(ln(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(ln(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function pi(...e){return new Proxy({props:e},vi)}function dr(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function Be(e,n,t,r){var ee;var i=(t&fs)!==0,s=!pn||(t&ds)!==0,l=(t&_s)!==0,f=(t&ms)!==0,a=!1,c;l?[c,a]=mi(()=>e[n]):c=e[n];var g=qe in e||br in e,_=l&&(((ee=je(e,n))==null?void 0:ee.set)??(g&&n in e&&(N=>e[n]=N)))||void 0,u=r,v=!0,p=!1,F=()=>(p=!0,v&&(v=!1,f?u=Bn(r):u=r),u);c===void 0&&r!==void 0&&(_&&s&&rs(),c=F(),_&&_(c));var A;if(s)A=()=>{var N=e[n];return N===void 0?F():(v=!0,p=!1,N)};else{var z=(i?mn:Ft)(()=>e[n]);z.f|=qo,A=()=>{var N=O(z);return N!==void 0&&(u=void 0),N===void 0?u:N}}if((t&Er)===0)return A;if(_){var H=e.$$legacy;return function(N,U){return arguments.length>0?((!s||!U||H||a)&&_(U?A():N),N):A()}}var x=!1,D=Nt(c),M=mn(()=>{var N=A(),U=O(D);return x?(x=!1,U):D.v=N});return l&&O(M),i||(M.equals=Mt),function(N,U){if(arguments.length>0){const Y=U?O(M):s&&l?Ke(N):N;if(!M.equals(Y)){if(x=!0,fe(D,Y),p&&u!==void 0&&(u=Y),dr(M))return N;Bn(()=>O(M))}return N}return dr(M)?M.v:O(M)}}function hi(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function bi(){const e=$;return e===null&&Dr(),(n,t,r)=>{var s;const i=(s=e.s.$$events)==null?void 0:s[n];if(i){const l=$n(i)?i.slice():[i],f=hi(n,t,r);for(const a of l)a.call(e.x,f);return!f.defaultPrevented}return!0}}function yi(e){$===null&&Dr(),$.l===null&&ts(),wi($).a.push(e)}function wi(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Ei="5";var gr;typeof window<"u"&&((gr=window.__svelte??(window.__svelte={})).v??(gr.v=new Set)).add(Ei);ls();const Di={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:21.377999589799682,ForwardDiff:1.6598250391560843,MooncakeForward:13.166864306284939,MooncakeReverse:5.6736069640774485,ReverseDiff:32.19258925163931,ReverseDiffCompiled:2.7441152463956486,Zygote:1809.7271160669031},Ri={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:18.38842789863198,ForwardDiff:1.3409224951429364,MooncakeForward:11.88083067092652,MooncakeReverse:7.1793317470509,ReverseDiff:32.42441682274817,ReverseDiffCompiled:2.842119695619387,Zygote:"error"},Mi={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:35.58104176768027,ForwardDiff:1.3090318956110396,MooncakeForward:24.832789409995968,MooncakeReverse:6.3166334793574945,ReverseDiff:30.313541881045484,ReverseDiffCompiled:2.960282676854023,Zygote:"error"},xi={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:35.46875644462776,ForwardDiff:1.3503176166540085,MooncakeForward:23.42217791071231,MooncakeReverse:6.551395631067962,ReverseDiff:27.635781223377062,ReverseDiffCompiled:2.939649806038246,Zygote:3051.7853107344636},Ti={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:59.07509157509158,ForwardDiff:1.2887315955443637,MooncakeForward:28.06671254210279,MooncakeReverse:5.21915991156964,ReverseDiff:23.228327924972366,ReverseDiffCompiled:2.1298347412121115,Zygote:"error"},Fi={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:64.70631970260223,ForwardDiff:1.434612125283066,MooncakeForward:40.1340589328378,MooncakeReverse:7.38291944946681,ReverseDiff:49.25783357543059,ReverseDiffCompiled:2.742111969379964,Zygote:"error"},Ni={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:63.98555579569195,ForwardDiff:1.3760333079166818,MooncakeForward:42.64370604848646,MooncakeReverse:6.905601659751037,ReverseDiff:51.24602064350259,ReverseDiffCompiled:2.861539740506517,Zygote:1674.967315460889},Si={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:64.11446997178558,ForwardDiff:1.394174627464381,MooncakeForward:39.69415081042988,MooncakeReverse:7.109939432132479,ReverseDiff:49.86562268543012,ReverseDiffCompiled:2.6438184723799987,Zygote:1373.2628494138864},Ci={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:37.24807040827018,ForwardDiff:1.4817884464628441,MooncakeForward:26.146785237883503,MooncakeReverse:6.537323584424417,ReverseDiff:33.25208159866778,ReverseDiffCompiled:4.393727342577647,Zygote:2255.12326152168},Ai={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:58.015901060070675,ForwardDiff:1.2645566890538515,MooncakeForward:26.143740340030913,MooncakeReverse:5.006863987101233,ReverseDiff:27.43623444518077,ReverseDiffCompiled:2.077245332941349,Zygote:"error"},ki={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:59.3156825765269,ForwardDiff:1.3277602347434405,MooncakeForward:32.68117126825462,MooncakeReverse:6.16867036210496,ReverseDiff:39.05221610381609,ReverseDiffCompiled:2.4188638415006753,Zygote:"error"},Ii={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:60.34399117971334,ForwardDiff:1.3104671274875273,MooncakeForward:32.25812787149721,MooncakeReverse:5.826499118165785,ReverseDiff:31.741431234762658,ReverseDiffCompiled:2.6429372735344225,Zygote:"error"},Oi={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:152.4341622363231,ForwardDiff:2.4444175930401157,MooncakeForward:56.72546171404856,MooncakeReverse:6.183608949416342,ReverseDiff:55.1035918610144,ReverseDiffCompiled:6.793160851772213,Zygote:"error"},Li={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:61.228005627096636,ForwardDiff:1.3565139200298955,MooncakeForward:33.921469753336744,MooncakeReverse:5.918746865233999,ReverseDiff:35.22142734011378,ReverseDiffCompiled:2.687615666208353,Zygote:"error"},Pi={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:60.16098036485169,ForwardDiff:1.323320583453229,MooncakeForward:31.908901668842393,MooncakeReverse:5.841623255983389,ReverseDiff:40.831476065306724,ReverseDiffCompiled:2.3421052631578947,Zygote:"error"},zi={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:51.41393523061824,ForwardDiff:1.23469225550063,MooncakeForward:24.898427803061644,MooncakeReverse:5.156753274640327,ReverseDiff:32.19789166057823,ReverseDiffCompiled:1.838528787244971,Zygote:"error"},Vi={__category__:"Core Turing syntax",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:75.77047421500609,ForwardDiff:1.4456049822064059,MooncakeForward:30.60040024300468,MooncakeReverse:5.010213487703256,ReverseDiff:20.995408944057136,ReverseDiffCompiled:1.914433147703469,Zygote:"error"},Bi={__category__:"Core Turing syntax",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:23.63323768531803,ForwardDiff:1.648594176420397,MooncakeForward:16.990704749028225,MooncakeReverse:7.399623481088482,ReverseDiff:56.97507266199351,ReverseDiffCompiled:5.1850054186762,Zygote:"error"},ji={__category__:"DynamicPPL arXiV paper",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:27.631874958506028,ForwardDiff:1.6009685230024213,MooncakeForward:4.104492400466497,MooncakeReverse:9.215521999149528,ReverseDiff:131.2522982252073,ReverseDiffCompiled:18.627644792011697,Zygote:18.204056121683653},$i={__category__:"DynamicPPL arXiV paper",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:164.5252613240418,ForwardDiff:3.4317172464840855,MooncakeForward:36.22072524007453,MooncakeReverse:4.212358858550606,ReverseDiff:27.126976014019203,ReverseDiffCompiled:2.24376178732047,Zygote:642.1435392043817},Ui={__category__:"DynamicPPL arXiV paper",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:120391.6570540698,ForwardDiff:3216.8533582442938,MooncakeForward:16642.50090147726,MooncakeReverse:3.5464086387789036,ReverseDiff:1.892500380949156,ReverseDiffCompiled:.45016237821633776,Zygote:7.719111886487124},Hi={__category__:"DynamicPPL arXiV paper",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:27.747192400482504,MooncakeForward:195.7234969424752,MooncakeReverse:4.299178584285107,ReverseDiff:70.63634166822732,ReverseDiffCompiled:10.168372154042483,Zygote:"error"},Zi={__category__:"DynamicPPL arXiV paper",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:6968.789560687271,ForwardDiff:231.96287434558712,MooncakeForward:498.1676321578562,MooncakeReverse:9.664848137036257,ReverseDiff:178.66860988439146,ReverseDiffCompiled:11.730000984930562,Zygote:"error"},Gi={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:33.526929759245476,ForwardDiff:1.2090694486749924,MooncakeForward:27.11845571843545,MooncakeReverse:10.057877813504822,ReverseDiff:12.53580210570063,ReverseDiffCompiled:1.2786554621848738,Zygote:873.0598188343873},Ki={__category__:"DynamicPPL arXiV paper",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:1019.7751645780609,ForwardDiff:51.95603298122906,MooncakeForward:691.7987648047776,MooncakeReverse:5.2608461466644645,ReverseDiff:64.9405594099839,ReverseDiffCompiled:7.605069452864617,Zygote:250.51209439317526},qi={__category__:"DynamicPPL arXiV paper",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:2814.143498291595,ForwardDiff:146.65080179938317,MooncakeForward:594.826413695672,MooncakeReverse:8.512456390869549,ReverseDiff:146.51502700511944,ReverseDiffCompiled:21.739966427388474,Zygote:2919.086530937013},Wi={__category__:"DynamicPPL arXiV paper",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:6590.0093632502585,ForwardDiff:81.68775752125572,MooncakeForward:1174.3961603255882,MooncakeReverse:3.406239376799545,ReverseDiff:34.04766325197775,ReverseDiffCompiled:3.2017300672352262,Zygote:"error"},Xi={__category__:"Core Turing syntax",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:35.11540702656384,ForwardDiff:1.3374295629466741,MooncakeForward:22.899528334604984,MooncakeReverse:6.355984340044743,ReverseDiff:34.148427401981905,ReverseDiffCompiled:2.6762831613216043,Zygote:2125.2004213580162},Ji={__category__:"Miscellaneous features",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:25.482689854276227,ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Yi={__category__:"Core Turing syntax",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:58.1765288437732,ForwardDiff:1.2954536709250424,MooncakeForward:26.851722860318638,MooncakeReverse:13.980414023837735,ReverseDiff:29.757283251145385,ReverseDiffCompiled:2.275080245405344,Zygote:"error"},Qi={__category__:"Base Julia features",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:15.36613427836303,ForwardDiff:.8738766879715508,MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:4.828055856033042,ReverseDiffCompiled:.32512208808541615,Zygote:"error"},ea={__category__:"Effect of model size",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:138.89902095924788,ForwardDiff:1.7883458512796784,MooncakeForward:42.442313770940885,MooncakeReverse:4.616889296161844,ReverseDiff:20.809404100131005,ReverseDiffCompiled:1.9434760185662712,Zygote:"error"},na={__category__:"Effect of model size",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:627.7000481642028,ForwardDiff:8.82817534657175,MooncakeForward:128.20614725858843,MooncakeReverse:4.075338174044451,ReverseDiff:20.374972428497905,ReverseDiffCompiled:1.8176842572390077,Zygote:"error"},ta={__category__:"Effect of model size",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:1227.121025154248,ForwardDiff:14.530792221689238,MooncakeForward:233.29229693423133,MooncakeReverse:3.989694895292775,ReverseDiff:21.047912590897344,ReverseDiffCompiled:1.8158061562301895,Zygote:"error"},ra={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:25.533805249788315,ForwardDiff:1.370525235982759,MooncakeForward:16.669327825890765,MooncakeReverse:6.7678602021586425,ReverseDiff:20.588141843971627,ReverseDiffCompiled:2.1534690884016223,Zygote:2299.875699811094},oa={__category__:"Effect of model size",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:6569.789824156818,ForwardDiff:74.83946943105522,MooncakeForward:1164.463414283868,MooncakeReverse:4.218057909297644,ReverseDiff:18.722382044517506,ReverseDiffCompiled:1.8490940380020482,Zygote:"error"},sa={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:21.38731076713727,ForwardDiff:1.6013586497890298,MooncakeForward:12.208907263357956,MooncakeReverse:5.9023631840796025,ReverseDiff:36.276279946916254,ReverseDiffCompiled:3.263123946346112,Zygote:"error"},ia={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:17.574972148725802,ForwardDiff:1.2715256628641236,MooncakeForward:8.786028053369826,MooncakeReverse:8.324611973392459,ReverseDiff:12.30877103518613,ReverseDiffCompiled:2.208767145723294,Zygote:"error"},aa={__category__:"Core Turing syntax",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:25.05393049234588,ForwardDiff:1.6870260897839873,MooncakeForward:17.783474065138723,MooncakeReverse:7.40996745445144,ReverseDiff:56.78190851464793,ReverseDiffCompiled:5.165581968897718,Zygote:"error"},la={__category__:"Core Turing syntax",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:26.39860441251924,ForwardDiff:1.4937551292175717,MooncakeForward:18.19899041461063,MooncakeReverse:7.338383975838729,ReverseDiff:36.92467316870721,ReverseDiffCompiled:3.429572006774406,Zygote:3373.0314493146966},ca={__category__:"Core Turing syntax",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:49.37922781825221,ForwardDiff:1.3769680025931328,MooncakeForward:23.318625756266204,MooncakeReverse:5.795780726075632,ReverseDiff:25.64653075209868,ReverseDiffCompiled:2.304123433741428,Zygote:"error"},ua={__category__:"Core Turing syntax",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:23.02286089783496,ForwardDiff:1.455643563323878,MooncakeForward:14.293355756700594,MooncakeReverse:5.755121995219411,ReverseDiff:27.36460399546614,ReverseDiffCompiled:2.5105895209197966,Zygote:4087.4258705776047},fa={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:19.850774396929825,ForwardDiff:"NaN",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"NaN",ReverseDiffCompiled:2.9858663788601465,Zygote:2142.9222483082444},da={__category__:"PosteriorDB",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:135.97704375359817,ForwardDiff:1.8275593968104726,MooncakeForward:55.30622594684027,MooncakeReverse:5.230989327341665,ReverseDiff:32.127856461696034,ReverseDiffCompiled:2.4736020320496057,Zygote:"error"},_a={__category__:"PosteriorDB",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:137.2086755370656,ForwardDiff:1.8561846131947901,MooncakeForward:58.28426802115225,MooncakeReverse:5.246102975909305,ReverseDiff:30.8527222875049,ReverseDiffCompiled:2.558666330971478,Zygote:"error"},ma={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:32.398675983817576,ForwardDiff:1.3230165954765072,MooncakeForward:20.725772501473436,MooncakeReverse:5.112623246771282,ReverseDiff:12.408496732026142,ReverseDiffCompiled:1.2130460441733835,Zygote:2342.8752837634897},ga={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:43.73805970149254,ForwardDiff:1.1134646243617798,MooncakeForward:23.35139964264443,MooncakeReverse:13.382487769174467,ReverseDiff:16.27843233227284,ReverseDiffCompiled:4.998737047761923,Zygote:441.33125458547335},va={__category__:"Core Turing syntax",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:34.10763712774437,ForwardDiff:1.3062531495212726,MooncakeForward:24.922595695048248,MooncakeReverse:6.520780195048761,ReverseDiff:29.284798091550268,ReverseDiffCompiled:2.9067337191465628,Zygote:"error"},pa={__category__:"Base Julia features",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:24.05223757475768,ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ha={__category__:"Base Julia features",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:37.783796691113764,ForwardDiff:1.6056840122072744,MooncakeForward:30.160597505628413,MooncakeReverse:7.123190748123406,ReverseDiff:20.443830769046855,ReverseDiffCompiled:"wrong",Zygote:1903.650776761013},ba={assume_beta:Di,assume_dirichlet:Ri,demo_assume_dot_observe:Mi,demo_assume_dot_observe_literal:xi,demo_assume_index_observe:Ti,demo_assume_matrix_observe_matrix_index:Fi,demo_assume_multivariate_observe:Ni,demo_assume_multivariate_observe_literal:Si,demo_assume_observe_literal:Ci,demo_assume_submodel_observe_index_literal:Ai,demo_dot_assume_observe:ki,demo_dot_assume_observe_index:Ii,assume_lkjcholu:Oi,demo_dot_assume_observe_index_literal:Li,demo_dot_assume_observe_matrix_index:Pi,demo_dot_assume_observe_submodel:zi,dot_assume:Vi,dot_observe:Bi,dppl_gauss_unknown:ji,dppl_hier_poisson:$i,dppl_high_dim_gauss:Ui,dppl_hmm_semisup:Hi,dppl_lda:Zi,assume_mvnormal:Gi,dppl_logistic_regression:Ki,dppl_naive_bayes:qi,dppl_sto_volatility:Wi,dynamic_constraint:Xi,metabayesian_MH:Ji,multiple_constraints_same_var:Yi,multithreaded:Qi,n010:ea,n050:na,n100:ta,assume_normal:ra,n500:oa,observe_bernoulli:sa,observe_categorical:ia,observe_index:aa,observe_literal:la,observe_multivariate:ca,observe_submodel:ua,observe_von_mises:fa,pdb_eight_schools_centered:da,pdb_eight_schools_noncentered:_a,assume_submodel:ma,assume_wishart:ga,broadcast_macro:va,call_C:pa,control_flow:ha},ya=`@model function assume_beta()
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

model = call_C()`,gl=`#= 
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

model = control_flow()`,vl={assume_beta:ya,assume_dirichlet:wa,demo_assume_dot_observe:Ea,demo_assume_dot_observe_literal:Da,demo_assume_index_observe:Ra,demo_assume_matrix_observe_matrix_index:Ma,demo_assume_multivariate_observe:xa,demo_assume_multivariate_observe_literal:Ta,demo_assume_observe_literal:Fa,demo_assume_submodel_observe_index_literal:Na,demo_dot_assume_observe:Sa,demo_dot_assume_observe_index:Ca,assume_lkjcholu:Aa,demo_dot_assume_observe_index_literal:ka,demo_dot_assume_observe_matrix_index:Ia,demo_dot_assume_observe_submodel:Oa,dot_assume:La,dot_observe:Pa,dppl_gauss_unknown:za,dppl_hier_poisson:Va,dppl_high_dim_gauss:Ba,dppl_hmm_semisup:ja,dppl_lda:$a,assume_mvnormal:Ua,dppl_logistic_regression:Ha,dppl_naive_bayes:Za,dppl_sto_volatility:Ga,dynamic_constraint:Ka,metabayesian_MH:qa,multiple_constraints_same_var:Wa,multithreaded:Xa,n010:Ja,n050:Ya,n100:Qa,assume_normal:el,n500:nl,observe_bernoulli:tl,observe_categorical:rl,observe_index:ol,observe_literal:sl,observe_multivariate:il,observe_submodel:al,observe_von_mises:ll,pdb_eight_schools_centered:cl,pdb_eight_schools_noncentered:ul,assume_submodel:fl,assume_wishart:dl,broadcast_macro:_l,call_C:ml,control_flow:gl},pl="1.17.0",hl="1.5.0",bl="5.7.2",yl="0.13.0",wl="0.4.5",El="0.1.42",Dl="4.3.0",Rl="0.8.1",Ml="0.8.8",xl="0.7.0",Tl="0.4.1",Fl="1.1.3",Nl="2.5.0",Sl="1.1.2",Cl="0.4.0",Al="0.5.4",kl="3.5.1+1",Il="7.19.0",Ol="1.11.0",Ll="1.1.2",Pl="0.5.1",zl="1.1.0",Vl="0.4.7",Bl="0.5.1",jl="0.4.4",$l="1.11.0",Ul="0.1.1",Hl="0.15.9",Zl="0.1.9",Gl="1.2.2",Kl="0.5.0",ql="0.10.15",Wl="1.72.5",Xl="1.26.0",Jl="1.3.1",Yl="0.1.10",Ql="0.10.42",ec="0.10.4+0",nc="0.7.8",tc="3.30.0",rc="0.12.1",oc="0.11.0",sc="0.13.1",ic="1.0.3",ac="0.2.4",lc="0.3.1",cc="4.18.0",uc="1.1.1+0",fc="0.1.2",dc="2.5.0",_c="0.1.2",mc="1.6.0",gc="0.1.3",vc="4.1.1",pc="1.16.0",hc="0.7.13",bc="1.7.0",yc="0.18.22",wc="1.0.0",Ec="1.11.0",Dc="0.1.2",Rc="1.9.1",Mc="0.4.0",xc="1.1.0",Tc="1.15.1",Fc="0.7.5",Nc="0.4.26",Sc="1.11.0",Cc="0.25.120",Ac="0.6.58",kc="0.9.5",Ic="1.6.0",Oc="0.37.1",Lc="2.0.0",Pc="1.0.5",zc="0.13.67",Vc="0.8.12",Bc="0.0.188+0",jc="0.1.11",$c="0.1.10",Uc="0.10.14",Hc="1.9.0",Zc="3.3.11+0",Gc="0.2.2",Kc="0.1.1",qc="0.3.2",Wc="1.17.0",Xc="0.9.24",Jc="1.11.0",Yc="1.13.0",Qc="2.28.0",eu="0.12.32",nu="0.8.5",tu="1.0.1",ru="1.1.3",ou="0.1.3",su="0.5.2",iu="1.11.0",au="0.2.0",lu="1.6.1",cu="0.6.2",uu="1.3.1",fu="1.13.0",du="0.17.2",_u="1.14.6+0",mu="1.10.17",gu="0.2.0",vu="2.12.1+0",pu="0.3.28",hu="0.4.15",bu="0.1.7",yu="0.10.5",wu="0.3.8",Eu="0.1.5",Du="0.3.1",Ru="1.4.4",Mu="2025.2.0+0",xu="1.11.0",Tu="0.7.0",Fu="0.16.1",Nu="0.7.11",Su="0.1.17",Cu="1.3.1",Au="0.2.4",ku="1.10.0",Iu="1.0.0",Ou="0.5.15",Lu="1.7.1",Pu="1.14.3",zu="0.2.1",Vu="0.2.4",Bu="0.9.38",ju="0.6.10",$u="0.4.1",Uu="9.4.2",Hu="0.0.37+2",Zu="3.0.1+0",Gu="1.4.0",Ku="1.11.0",qu="0.3.1",Wu="0.2.1",Xu="0.6.4",Ju="8.6.0+0",Yu="1.11.0",Qu="1.7.2+0",ef="1.11.0+1",nf="0.9.1+6",tf="1.11.0",rf="1.18.0+0",of="0.9.4",sf="7.4.0",af="1.11.0",lf="2.1.2",cf="1.13.1",uf="0.3.29",ff="1.11.0",df="1.1.0",_f="0.10.7",mf="7.1.0",gf="0.3.15",vf="2025.2.0+0",pf="1.0.0",hf="0.7.18",bf="1.12.0",yf="0.4.17",wf="0.4.8",Ef="4.3.1+0",Df="0.1.11",Rf="5.5.4+0",Mf="0.5.16",xf="0.4.2",Tf="1.11.0",Ff="1.1.9",Nf="2.28.6+0",Sf="0.2.0",Cf="10.1.4+3",Af="1.2.0",kf="2.1.0",If="1.11.0",Of="0.4.149",Lf="0.3.4",Pf="0.3.7",zf="2023.12.12",Vf="0.10.3",Bf="7.10.0",jf="0.9.31",$f="0.4.3",Uf="1.1.3",Hf="0.1.5",Zf="0.10.4",Gf="1.0.0",Kf="1.2.0",qf="0.5.0",Wf="1.17.0",Xf="0.3.27+1",Jf="0.8.5+0",Yf="5.0.8+0",Qf="1.5.0",ed="3.5.2+0",nd="0.5.6+0",td="1.13.2",rd="0.4.6",od="4.5.0",sd="2.10.0",id="0.4.3",ad="1.8.1",ld="0.11.35",cd="1.0.2",ud="0.5.12",fd="0.12.3",dd="2.8.3",_d="1.2.1",md="0.3.6",gd="1.11.0",vd="1.4.3",pd="0.2.4",hd="1.2.1",bd="1.5.0",yd="0.2.0",wd="2.4.0",Ed="1.11.0",Dd="0.1.5",Rd="1.10.4",Md="1.3.0",xd="2.11.2",Td="1.11.0",Fd="1.11.0",Nd="1.7.1",Sd="1.6.0",Cd="0.3.2",Ad="0.4.5",kd="0.1.0",Id="1.3.4",Od="3.37.1",Ld="1.2.2",Pd="1.3.1",zd="1.16.1",Vd="1.4.2",Bd="0.8.0",jd="0.5.1+0",$d="2.2.8",Ud="0.5.15",Hd="0.7.0",Zd="0.5.1",Gd="2.110.0",Kd="1.5.0",qd="1.7.0",Wd="3.0.0",Xd="1.4.0",Jd="1.3.0",Yd="1.4.8",Qd="1.11.0",e_="1.1.2",n_="1.11.0",t_="0.1.0",r_="1.2.0",o_="0.9.5",s_="1.11.0",i_="1.2.2",a_="1.11.0",l_="1.0.0",c_="0.1.2",u_="0.4.21",f_="2.5.1",d_="0.1.15",__="0.1.2",m_="1.9.14",g_="1.4.3",v_="3.5.0",p_="1.11.1",h_="1.7.1",b_="0.34.6",y_="1.5.0",w_="0.4.1",E_="0.3.7",D_="0.4.1",R_="0.7.1",M_="0.3.1",x_="1.11.0",T_="1.11.0",F_=null,N_="7.7.0+0",S_="0.3.43",C_="1.0.3",A_="1.0.1",k_="1.12.1",I_="1.10.0",O_="0.1.1",L_="0.1.7",P_="1.11.0",z_="0.1.5",V_="0.11.3",B_="0.4.84",j_="0.40.1",$_="1.6.1",U_="1.11.0",H_="1.0.2",Z_="1.11.0",G_="1.24.0",K_="1.0.0",q_="0.3.0",W_="1.4.2",X_="1.0.0",J_="1.6.1",Y_="0.10.1",Q_="1.2.13+1",e1="0.7.10",n1="0.2.7",t1="1.1.3+0",r1="5.11.0+0",o1="1.59.0+0",s1="2022.0.0+0",i1="17.4.0+2",a1={ADTypes:pl,AbstractFFTs:hl,AbstractMCMC:bl,AbstractPPL:yl,AbstractTrees:wl,Accessors:El,Adapt:Dl,AdvancedHMC:Rl,AdvancedMH:Ml,AdvancedPS:xl,AdvancedVI:Tl,AliasTables:Fl,ArgCheck:Nl,ArgTools:Sl,ArnoldiMethod:Cl,Arpack:Al,Arpack_jll:kl,ArrayInterface:Il,Artifacts:Ol,Atomix:Ll,AtomsBase:Pl,AxisAlgorithms:zl,AxisArrays:Vl,BFloat16s:Bl,BangBang:jl,Base64:$l,Baselet:Ul,Bijectors:Hl,BitFlags:Zl,BufferedStreams:Gl,CEnum:Kl,CSV:ql,ChainRules:Wl,ChainRulesCore:Xl,Chairmarks:Jl,ChangesOfVariables:Yl,Chemfiles:Ql,Chemfiles_jll:ec,CodecZlib:nc,ColorSchemes:tc,ColorTypes:rc,ColorVectorSpace:oc,Colors:sc,Combinatorics:ic,CommonSolve:ac,CommonSubexpressions:lc,Compat:cc,CompilerSupportLibraries_jll:uc,CompositionsBase:fc,ConcurrentUtilities:dc,ConsoleProgressMonitor:_c,ConstructionBase:mc,ContextVariablesX:gc,Crayons:vc,DataAPI:pc,DataDeps:hc,DataFrames:bc,DataStructures:yc,DataValueInterfaces:wc,Dates:Ec,DefineSingletons:Dc,DelimitedFiles:Rc,DensityInterface:Mc,DiffResults:xc,DiffRules:Tc,DifferentiationInterface:Fc,DispatchDoctor:Nc,Distributed:Sc,Distributions:Cc,DistributionsAD:Ac,DocStringExtensions:kc,Downloads:Ic,DynamicPPL:Oc,EllipticalSliceSampling:Lc,EnumX:Pc,Enzyme:zc,EnzymeCore:Vc,Enzyme_jll:Bc,ExceptionUnwrapping:jc,ExprTools:$c,ExproniconLite:Uc,FFTW:Hc,FFTW_jll:Zc,FLoops:Gc,FLoopsBase:Kc,FastClosures:qc,FileIO:Wc,FilePathsBase:Xc,FileWatching:Jc,FillArrays:Yc,FiniteDiff:Qc,FiniteDifferences:eu,FixedPointNumbers:nu,ForwardDiff:tu,FunctionWrappers:ru,FunctionWrappersWrappers:ou,Functors:su,Future:iu,GPUArraysCore:au,GPUCompiler:lu,GZip:cu,Glob:uu,Graphs:fu,HDF5:du,HDF5_jll:_u,HTTP:mu,HashArrayMappedTries:gu,Hwloc_jll:vu,HypergeometricFunctions:pu,IRTools:hu,ImageBase:bu,ImageCore:yu,ImageShow:wu,Inflate:Eu,InitialValues:Du,InlineStrings:Ru,IntelOpenMP_jll:Mu,InteractiveUtils:xu,InternedStrings:Tu,Interpolations:Fu,IntervalSets:Nu,InverseFunctions:Su,InvertedIndices:Cu,IrrationalConstants:Au,IterTools:ku,IteratorInterfaceExtensions:Iu,JLD2:Ou,JLLWrappers:Lu,JSON:"0.21.4",JSON3:Pu,Jieko:zu,JuliaVariables:Vu,KernelAbstractions:Bu,KernelDensity:ju,LBFGSB:$u,LLVM:Uu,LLVMExtra_jll:Hu,L_BFGS_B_jll:Zu,LaTeXStrings:Gu,LazyArtifacts:Ku,LazyModules:qu,LeftChildRightSiblingTrees:Wu,LibCURL:Xu,LibCURL_jll:Ju,LibGit2:Yu,LibGit2_jll:Qu,LibSSH2_jll:ef,LibTracyClient_jll:nf,Libdl:tf,Libiconv_jll:rf,Libtask:of,LineSearches:sf,LinearAlgebra:af,LogDensityProblems:lf,LogDensityProblemsAD:cf,LogExpFunctions:uf,Logging:ff,LoggingExtras:df,MAT:_f,MCMCChains:mf,MCMCDiagnosticTools:gf,MKL_jll:vf,MLCore:pf,MLDatasets:hf,MLJModelInterface:bf,MLStyle:yf,MLUtils:wf,MPICH_jll:Ef,MPIPreferences:Df,MPItrampoline_jll:Rf,MacroTools:Mf,MappedArrays:xf,Markdown:Tf,MbedTLS:Ff,MbedTLS_jll:Nf,MicroCollections:Sf,MicrosoftMPI_jll:Cf,Missings:Af,MistyClosures:kf,Mmap:If,Mooncake:Of,MosaicViews:Lf,Moshi:Pf,MozillaCACerts_jll:zf,MultivariateStats:Vf,NLSolversBase:Bf,NNlib:jf,NPZ:$f,NaNMath:Uf,NameResolution:Hf,NamedArrays:Zf,NaturalSort:Gf,NetworkOptions:Kf,ObjectFile:qf,OffsetArrays:Wf,OpenBLAS_jll:Xf,OpenLibm_jll:Jf,OpenMPI_jll:Yf,OpenSSL:Qf,OpenSSL_jll:ed,OpenSpecFun_jll:nd,Optim:td,Optimisers:rd,Optimization:od,OptimizationBase:sd,OptimizationOptimJL:id,OrderedCollections:ad,PDMats:ld,PackageExtensionCompat:cd,PaddedViews:ud,Parameters:fd,Parsers:dd,PeriodicTable:_d,Pickle:md,Pkg:gd,PooledArrays:vd,PositiveFactorizations:pd,PrecompileTools:hd,Preferences:bd,PrettyPrint:yd,PrettyTables:wd,Printf:Ed,ProgressLogging:Dd,ProgressMeter:Rd,PtrArrays:Md,QuadGK:xd,REPL:Td,Random:Fd,Random123:Nd,RandomNumbers:Sd,RangeArrays:Cd,Ratios:Ad,RealDot:kd,RecipesBase:Id,RecursiveArrayTools:Od,Reexport:Ld,Requires:Pd,ReverseDiff:zd,Richardson:Vd,Rmath:Bd,Rmath_jll:jd,Roots:$d,RuntimeGeneratedFunctions:Ud,SHA:Hd,SSMProblems:Zd,SciMLBase:Gd,SciMLOperators:Kd,SciMLStructures:qd,ScientificTypesBase:Wd,ScopedValues:Xd,Scratch:Jd,SentinelArrays:Yd,Serialization:Qd,Setfield:e_,SharedArrays:n_,ShowCases:t_,SimpleBufferStream:r_,SimpleTraits:o_,Sockets:s_,SortingAlgorithms:i_,SparseArrays:a_,SparseConnectivityTracer:l_,SparseInverseSubset:c_,SparseMatrixColorings:u_,SpecialFunctions:f_,SplittablesBase:d_,StackViews:__,StaticArrays:m_,StaticArraysCore:g_,StatisticalTraits:v_,Statistics:p_,StatsAPI:h_,StatsBase:b_,StatsFuns:y_,StridedViews:w_,StringEncodings:E_,StringManipulation:D_,StructArrays:R_,StructIO:M_,StructTypes:x_,StyledStrings:T_,SuiteSparse:F_,SuiteSparse_jll:N_,SymbolicIndexingInterface:S_,TOML:C_,TableTraits:A_,Tables:k_,Tar:I_,TensorCore:O_,TerminalLoggers:L_,Test:P_,Tracy:z_,TranscodingStreams:V_,Transducers:B_,Turing:j_,URIs:$_,UUIDs:U_,UnPack:H_,Unicode:Z_,Unitful:G_,UnitfulAtomic:K_,UnsafeAtomics:q_,WeakRefStrings:W_,WoodburyMatrices:X_,WorkerUtilities:J_,ZipFile:Y_,Zlib_jll:Q_,Zygote:e1,ZygoteRules:n1,libaec_jll:t1,libblastrampoline_jll:r1,nghttp2_jll:o1,oneTBB_jll:s1,p7zip_jll:i1};function yt(e){return[...e.entries()].sort(([n,t],[r,i])=>n.localeCompare(r))}var l1=ge('<tr><td class="svelte-7y9k9c"> </td><td class="version svelte-7y9k9c"> </td></tr>'),c1=ge('<table id="manifest" class="svelte-7y9k9c"><thead><tr><th class="svelte-7y9k9c">Package</th><th class="svelte-7y9k9c">Version</th></tr></thead><tbody></tbody></table>');function u1(e,n){hn(n,!1);let t=new Map;for(const[s,l]of Object.entries(a1))t.set(s,l===""?null:l);Lt();var r=c1(),i=we(W(r));_n(i,5,()=>yt(t),dn,(s,l)=>{let f=()=>O(l)[0],a=()=>O(l)[1];var c=l1(),g=W(c),_=W(g),u=we(g),v=W(u);Ee(()=>{Ve(_,f()),Ve(v,a()===null?"":`v${a()}`)}),re(s,c)}),re(e,r),bn()}function f1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ut,_r;function d1(){if(_r)return ut;_r=1;function e(o){return o instanceof Map?o.clear=o.delete=o.set=function(){throw new Error("map is read-only")}:o instanceof Set&&(o.add=o.clear=o.delete=function(){throw new Error("set is read-only")}),Object.freeze(o),Object.getOwnPropertyNames(o).forEach(d=>{const h=o[d],S=typeof h;(S==="object"||S==="function")&&!Object.isFrozen(h)&&e(h)}),o}class n{constructor(d){d.data===void 0&&(d.data={}),this.data=d.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(o,...d){const h=Object.create(null);for(const S in o)h[S]=o[S];return d.forEach(function(S){for(const Z in S)h[Z]=S[Z]}),h}const i="</span>",s=o=>!!o.scope,l=(o,{prefix:d})=>{if(o.startsWith("language:"))return o.replace("language:","language-");if(o.includes(".")){const h=o.split(".");return[`${d}${h.shift()}`,...h.map((S,Z)=>`${S}${"_".repeat(Z+1)}`)].join(" ")}return`${d}${o}`};class f{constructor(d,h){this.buffer="",this.classPrefix=h.classPrefix,d.walk(this)}addText(d){this.buffer+=t(d)}openNode(d){if(!s(d))return;const h=l(d.scope,{prefix:this.classPrefix});this.span(h)}closeNode(d){s(d)&&(this.buffer+=i)}value(){return this.buffer}span(d){this.buffer+=`<span class="${d}">`}}const a=(o={})=>{const d={children:[]};return Object.assign(d,o),d};class c{constructor(){this.rootNode=a(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(d){this.top.children.push(d)}openNode(d){const h=a({scope:d});this.add(h),this.stack.push(h)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(d){return this.constructor._walk(d,this.rootNode)}static _walk(d,h){return typeof h=="string"?d.addText(h):h.children&&(d.openNode(h),h.children.forEach(S=>this._walk(d,S)),d.closeNode(h)),d}static _collapse(d){typeof d!="string"&&d.children&&(d.children.every(h=>typeof h=="string")?d.children=[d.children.join("")]:d.children.forEach(h=>{c._collapse(h)}))}}class g extends c{constructor(d){super(),this.options=d}addText(d){d!==""&&this.add(d)}startScope(d){this.openNode(d)}endScope(){this.closeNode()}__addSublanguage(d,h){const S=d.root;h&&(S.scope=`language:${h}`),this.add(S)}toHTML(){return new f(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(o){return o?typeof o=="string"?o:o.source:null}function u(o){return F("(?=",o,")")}function v(o){return F("(?:",o,")*")}function p(o){return F("(?:",o,")?")}function F(...o){return o.map(h=>_(h)).join("")}function A(o){const d=o[o.length-1];return typeof d=="object"&&d.constructor===Object?(o.splice(o.length-1,1),d):{}}function z(...o){return"("+(A(o).capture?"":"?:")+o.map(S=>_(S)).join("|")+")"}function H(o){return new RegExp(o.toString()+"|").exec("").length-1}function x(o,d){const h=o&&o.exec(d);return h&&h.index===0}const D=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function M(o,{joinWith:d}){let h=0;return o.map(S=>{h+=1;const Z=h;let G=_(S),w="";for(;G.length>0;){const y=D.exec(G);if(!y){w+=G;break}w+=G.substring(0,y.index),G=G.substring(y.index+y[0].length),y[0][0]==="\\"&&y[1]?w+="\\"+String(Number(y[1])+Z):(w+=y[0],y[0]==="("&&h++)}return w}).map(S=>`(${S})`).join(d)}const ee=/\b\B/,N="[a-zA-Z]\\w*",U="[a-zA-Z_]\\w*",Y="\\b\\d+(\\.\\d+)?",xe="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ve="\\b(0b[01]+)",He="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",on=(o={})=>{const d=/^#![ ]*\//;return o.binary&&(o.begin=F(d,/.*\b/,o.binary,/\b.*/)),r({scope:"meta",begin:d,end:/$/,relevance:0,"on:begin":(h,S)=>{h.index!==0&&S.ignoreMatch()}},o)},ne={begin:"\\\\[\\s\\S]",relevance:0},pe={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ne]},Te={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ne]},Ae={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},he=function(o,d,h={}){const S=r({scope:"comment",begin:o,end:d,contains:[]},h);S.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const Z=z("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return S.contains.push({begin:F(/[ ]+/,"(",Z,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),S},Qn=he("//","$"),sn=he("/\\*","\\*/"),wn=he("#","$"),Xr={scope:"number",begin:Y,relevance:0},Jr={scope:"number",begin:xe,relevance:0},Yr={scope:"number",begin:ve,relevance:0},Qr={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ne,{begin:/\[/,end:/\]/,relevance:0,contains:[ne]}]},eo={scope:"title",begin:N,relevance:0},no={scope:"title",begin:U,relevance:0},to={begin:"\\.\\s*"+U,relevance:0};var En=Object.freeze({__proto__:null,APOS_STRING_MODE:pe,BACKSLASH_ESCAPE:ne,BINARY_NUMBER_MODE:Yr,BINARY_NUMBER_RE:ve,COMMENT:he,C_BLOCK_COMMENT_MODE:sn,C_LINE_COMMENT_MODE:Qn,C_NUMBER_MODE:Jr,C_NUMBER_RE:xe,END_SAME_AS_BEGIN:function(o){return Object.assign(o,{"on:begin":(d,h)=>{h.data._beginMatch=d[1]},"on:end":(d,h)=>{h.data._beginMatch!==d[1]&&h.ignoreMatch()}})},HASH_COMMENT_MODE:wn,IDENT_RE:N,MATCH_NOTHING_RE:ee,METHOD_GUARD:to,NUMBER_MODE:Xr,NUMBER_RE:Y,PHRASAL_WORDS_MODE:Ae,QUOTE_STRING_MODE:Te,REGEXP_MODE:Qr,RE_STARTERS_RE:He,SHEBANG:on,TITLE_MODE:eo,UNDERSCORE_IDENT_RE:U,UNDERSCORE_TITLE_MODE:no});function ro(o,d){o.input[o.index-1]==="."&&d.ignoreMatch()}function oo(o,d){o.className!==void 0&&(o.scope=o.className,delete o.className)}function so(o,d){d&&o.beginKeywords&&(o.begin="\\b("+o.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",o.__beforeBegin=ro,o.keywords=o.keywords||o.beginKeywords,delete o.beginKeywords,o.relevance===void 0&&(o.relevance=0))}function io(o,d){Array.isArray(o.illegal)&&(o.illegal=z(...o.illegal))}function ao(o,d){if(o.match){if(o.begin||o.end)throw new Error("begin & end are not supported with match");o.begin=o.match,delete o.match}}function lo(o,d){o.relevance===void 0&&(o.relevance=1)}const co=(o,d)=>{if(!o.beforeMatch)return;if(o.starts)throw new Error("beforeMatch cannot be used with starts");const h=Object.assign({},o);Object.keys(o).forEach(S=>{delete o[S]}),o.keywords=h.keywords,o.begin=F(h.beforeMatch,u(h.begin)),o.starts={relevance:0,contains:[Object.assign(h,{endsParent:!0})]},o.relevance=0,delete h.beforeMatch},uo=["of","and","for","in","not","or","if","then","parent","list","value"],fo="keyword";function Pt(o,d,h=fo){const S=Object.create(null);return typeof o=="string"?Z(h,o.split(" ")):Array.isArray(o)?Z(h,o):Object.keys(o).forEach(function(G){Object.assign(S,Pt(o[G],d,G))}),S;function Z(G,w){d&&(w=w.map(y=>y.toLowerCase())),w.forEach(function(y){const T=y.split("|");S[T[0]]=[G,_o(T[0],T[1])]})}}function _o(o,d){return d?Number(d):mo(o)?0:1}function mo(o){return uo.includes(o.toLowerCase())}const zt={},Ze=o=>{console.error(o)},Vt=(o,...d)=>{console.log(`WARN: ${o}`,...d)},Xe=(o,d)=>{zt[`${o}/${d}`]||(console.log(`Deprecated as of ${o}. ${d}`),zt[`${o}/${d}`]=!0)},Dn=new Error;function Bt(o,d,{key:h}){let S=0;const Z=o[h],G={},w={};for(let y=1;y<=d.length;y++)w[y+S]=Z[y],G[y+S]=!0,S+=H(d[y-1]);o[h]=w,o[h]._emit=G,o[h]._multi=!0}function go(o){if(Array.isArray(o.begin)){if(o.skip||o.excludeBegin||o.returnBegin)throw Ze("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Dn;if(typeof o.beginScope!="object"||o.beginScope===null)throw Ze("beginScope must be object"),Dn;Bt(o,o.begin,{key:"beginScope"}),o.begin=M(o.begin,{joinWith:""})}}function vo(o){if(Array.isArray(o.end)){if(o.skip||o.excludeEnd||o.returnEnd)throw Ze("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Dn;if(typeof o.endScope!="object"||o.endScope===null)throw Ze("endScope must be object"),Dn;Bt(o,o.end,{key:"endScope"}),o.end=M(o.end,{joinWith:""})}}function po(o){o.scope&&typeof o.scope=="object"&&o.scope!==null&&(o.beginScope=o.scope,delete o.scope)}function ho(o){po(o),typeof o.beginScope=="string"&&(o.beginScope={_wrap:o.beginScope}),typeof o.endScope=="string"&&(o.endScope={_wrap:o.endScope}),go(o),vo(o)}function bo(o){function d(w,y){return new RegExp(_(w),"m"+(o.case_insensitive?"i":"")+(o.unicodeRegex?"u":"")+(y?"g":""))}class h{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(y,T){T.position=this.position++,this.matchIndexes[this.matchAt]=T,this.regexes.push([T,y]),this.matchAt+=H(y)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const y=this.regexes.map(T=>T[1]);this.matcherRe=d(M(y,{joinWith:"|"}),!0),this.lastIndex=0}exec(y){this.matcherRe.lastIndex=this.lastIndex;const T=this.matcherRe.exec(y);if(!T)return null;const X=T.findIndex((an,nt)=>nt>0&&an!==void 0),K=this.matchIndexes[X];return T.splice(0,X),Object.assign(T,K)}}class S{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(y){if(this.multiRegexes[y])return this.multiRegexes[y];const T=new h;return this.rules.slice(y).forEach(([X,K])=>T.addRule(X,K)),T.compile(),this.multiRegexes[y]=T,T}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(y,T){this.rules.push([y,T]),T.type==="begin"&&this.count++}exec(y){const T=this.getMatcher(this.regexIndex);T.lastIndex=this.lastIndex;let X=T.exec(y);if(this.resumingScanAtSamePosition()&&!(X&&X.index===this.lastIndex)){const K=this.getMatcher(0);K.lastIndex=this.lastIndex+1,X=K.exec(y)}return X&&(this.regexIndex+=X.position+1,this.regexIndex===this.count&&this.considerAll()),X}}function Z(w){const y=new S;return w.contains.forEach(T=>y.addRule(T.begin,{rule:T,type:"begin"})),w.terminatorEnd&&y.addRule(w.terminatorEnd,{type:"end"}),w.illegal&&y.addRule(w.illegal,{type:"illegal"}),y}function G(w,y){const T=w;if(w.isCompiled)return T;[oo,ao,ho,co].forEach(K=>K(w,y)),o.compilerExtensions.forEach(K=>K(w,y)),w.__beforeBegin=null,[so,io,lo].forEach(K=>K(w,y)),w.isCompiled=!0;let X=null;return typeof w.keywords=="object"&&w.keywords.$pattern&&(w.keywords=Object.assign({},w.keywords),X=w.keywords.$pattern,delete w.keywords.$pattern),X=X||/\w+/,w.keywords&&(w.keywords=Pt(w.keywords,o.case_insensitive)),T.keywordPatternRe=d(X,!0),y&&(w.begin||(w.begin=/\B|\b/),T.beginRe=d(T.begin),!w.end&&!w.endsWithParent&&(w.end=/\B|\b/),w.end&&(T.endRe=d(T.end)),T.terminatorEnd=_(T.end)||"",w.endsWithParent&&y.terminatorEnd&&(T.terminatorEnd+=(w.end?"|":"")+y.terminatorEnd)),w.illegal&&(T.illegalRe=d(w.illegal)),w.contains||(w.contains=[]),w.contains=[].concat(...w.contains.map(function(K){return yo(K==="self"?w:K)})),w.contains.forEach(function(K){G(K,T)}),w.starts&&G(w.starts,y),T.matcher=Z(T),T}if(o.compilerExtensions||(o.compilerExtensions=[]),o.contains&&o.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return o.classNameAliases=r(o.classNameAliases||{}),G(o)}function jt(o){return o?o.endsWithParent||jt(o.starts):!1}function yo(o){return o.variants&&!o.cachedVariants&&(o.cachedVariants=o.variants.map(function(d){return r(o,{variants:null},d)})),o.cachedVariants?o.cachedVariants:jt(o)?r(o,{starts:o.starts?r(o.starts):null}):Object.isFrozen(o)?r(o):o}var wo="11.11.1";class Eo extends Error{constructor(d,h){super(d),this.name="HTMLInjectionError",this.html=h}}const et=t,$t=r,Ut=Symbol("nomatch"),Do=7,Ht=function(o){const d=Object.create(null),h=Object.create(null),S=[];let Z=!0;const G="Could not find the language '{}', did you forget to load/include a language module?",w={disableAutodetect:!0,name:"Plain text",contains:[]};let y={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:g};function T(m){return y.noHighlightRe.test(m)}function X(m){let R=m.className+" ";R+=m.parentNode?m.parentNode.className:"";const I=y.languageDetectRe.exec(R);if(I){const B=ke(I[1]);return B||(Vt(G.replace("{}",I[1])),Vt("Falling back to no-highlight mode for this block.",m)),B?I[1]:"no-highlight"}return R.split(/\s+/).find(B=>T(B)||ke(B))}function K(m,R,I){let B="",q="";typeof R=="object"?(B=m,I=R.ignoreIllegals,q=R.language):(Xe("10.7.0","highlight(lang, code, ...args) has been deprecated."),Xe("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),q=m,B=R),I===void 0&&(I=!0);const _e={code:B,language:q};Mn("before:highlight",_e);const Ie=_e.result?_e.result:an(_e.language,_e.code,I);return Ie.code=_e.code,Mn("after:highlight",Ie),Ie}function an(m,R,I,B){const q=Object.create(null);function _e(b,E){return b.keywords[E]}function Ie(){if(!C.keywords){J.addText(j);return}let b=0;C.keywordPatternRe.lastIndex=0;let E=C.keywordPatternRe.exec(j),k="";for(;E;){k+=j.substring(b,E.index);const L=ye.case_insensitive?E[0].toLowerCase():E[0],Q=_e(C,L);if(Q){const[Fe,Bo]=Q;if(J.addText(k),k="",q[L]=(q[L]||0)+1,q[L]<=Do&&(Fn+=Bo),Fe.startsWith("_"))k+=E[0];else{const jo=ye.classNameAliases[Fe]||Fe;be(E[0],jo)}}else k+=E[0];b=C.keywordPatternRe.lastIndex,E=C.keywordPatternRe.exec(j)}k+=j.substring(b),J.addText(k)}function xn(){if(j==="")return;let b=null;if(typeof C.subLanguage=="string"){if(!d[C.subLanguage]){J.addText(j);return}b=an(C.subLanguage,j,!0,Yt[C.subLanguage]),Yt[C.subLanguage]=b._top}else b=tt(j,C.subLanguage.length?C.subLanguage:null);C.relevance>0&&(Fn+=b.relevance),J.__addSublanguage(b._emitter,b.language)}function ae(){C.subLanguage!=null?xn():Ie(),j=""}function be(b,E){b!==""&&(J.startScope(E),J.addText(b),J.endScope())}function qt(b,E){let k=1;const L=E.length-1;for(;k<=L;){if(!b._emit[k]){k++;continue}const Q=ye.classNameAliases[b[k]]||b[k],Fe=E[k];Q?be(Fe,Q):(j=Fe,Ie(),j=""),k++}}function Wt(b,E){return b.scope&&typeof b.scope=="string"&&J.openNode(ye.classNameAliases[b.scope]||b.scope),b.beginScope&&(b.beginScope._wrap?(be(j,ye.classNameAliases[b.beginScope._wrap]||b.beginScope._wrap),j=""):b.beginScope._multi&&(qt(b.beginScope,E),j="")),C=Object.create(b,{parent:{value:C}}),C}function Xt(b,E,k){let L=x(b.endRe,k);if(L){if(b["on:end"]){const Q=new n(b);b["on:end"](E,Q),Q.isMatchIgnored&&(L=!1)}if(L){for(;b.endsParent&&b.parent;)b=b.parent;return b}}if(b.endsWithParent)return Xt(b.parent,E,k)}function Oo(b){return C.matcher.regexIndex===0?(j+=b[0],1):(it=!0,0)}function Lo(b){const E=b[0],k=b.rule,L=new n(k),Q=[k.__beforeBegin,k["on:begin"]];for(const Fe of Q)if(Fe&&(Fe(b,L),L.isMatchIgnored))return Oo(E);return k.skip?j+=E:(k.excludeBegin&&(j+=E),ae(),!k.returnBegin&&!k.excludeBegin&&(j=E)),Wt(k,b),k.returnBegin?0:E.length}function Po(b){const E=b[0],k=R.substring(b.index),L=Xt(C,b,k);if(!L)return Ut;const Q=C;C.endScope&&C.endScope._wrap?(ae(),be(E,C.endScope._wrap)):C.endScope&&C.endScope._multi?(ae(),qt(C.endScope,b)):Q.skip?j+=E:(Q.returnEnd||Q.excludeEnd||(j+=E),ae(),Q.excludeEnd&&(j=E));do C.scope&&J.closeNode(),!C.skip&&!C.subLanguage&&(Fn+=C.relevance),C=C.parent;while(C!==L.parent);return L.starts&&Wt(L.starts,b),Q.returnEnd?0:E.length}function zo(){const b=[];for(let E=C;E!==ye;E=E.parent)E.scope&&b.unshift(E.scope);b.forEach(E=>J.openNode(E))}let Tn={};function Jt(b,E){const k=E&&E[0];if(j+=b,k==null)return ae(),0;if(Tn.type==="begin"&&E.type==="end"&&Tn.index===E.index&&k===""){if(j+=R.slice(E.index,E.index+1),!Z){const L=new Error(`0 width match regex (${m})`);throw L.languageName=m,L.badRule=Tn.rule,L}return 1}if(Tn=E,E.type==="begin")return Lo(E);if(E.type==="illegal"&&!I){const L=new Error('Illegal lexeme "'+k+'" for mode "'+(C.scope||"<unnamed>")+'"');throw L.mode=C,L}else if(E.type==="end"){const L=Po(E);if(L!==Ut)return L}if(E.type==="illegal"&&k==="")return j+=`
`,1;if(st>1e5&&st>E.index*3)throw new Error("potential infinite loop, way more iterations than matches");return j+=k,k.length}const ye=ke(m);if(!ye)throw Ze(G.replace("{}",m)),new Error('Unknown language: "'+m+'"');const Vo=bo(ye);let ot="",C=B||Vo;const Yt={},J=new y.__emitter(y);zo();let j="",Fn=0,Ge=0,st=0,it=!1;try{if(ye.__emitTokens)ye.__emitTokens(R,J);else{for(C.matcher.considerAll();;){st++,it?it=!1:C.matcher.considerAll(),C.matcher.lastIndex=Ge;const b=C.matcher.exec(R);if(!b)break;const E=R.substring(Ge,b.index),k=Jt(E,b);Ge=b.index+k}Jt(R.substring(Ge))}return J.finalize(),ot=J.toHTML(),{language:m,value:ot,relevance:Fn,illegal:!1,_emitter:J,_top:C}}catch(b){if(b.message&&b.message.includes("Illegal"))return{language:m,value:et(R),illegal:!0,relevance:0,_illegalBy:{message:b.message,index:Ge,context:R.slice(Ge-100,Ge+100),mode:b.mode,resultSoFar:ot},_emitter:J};if(Z)return{language:m,value:et(R),illegal:!1,relevance:0,errorRaised:b,_emitter:J,_top:C};throw b}}function nt(m){const R={value:et(m),illegal:!1,relevance:0,_top:w,_emitter:new y.__emitter(y)};return R._emitter.addText(m),R}function tt(m,R){R=R||y.languages||Object.keys(d);const I=nt(m),B=R.filter(ke).filter(Kt).map(ae=>an(ae,m,!1));B.unshift(I);const q=B.sort((ae,be)=>{if(ae.relevance!==be.relevance)return be.relevance-ae.relevance;if(ae.language&&be.language){if(ke(ae.language).supersetOf===be.language)return 1;if(ke(be.language).supersetOf===ae.language)return-1}return 0}),[_e,Ie]=q,xn=_e;return xn.secondBest=Ie,xn}function Ro(m,R,I){const B=R&&h[R]||I;m.classList.add("hljs"),m.classList.add(`language-${B}`)}function rt(m){let R=null;const I=X(m);if(T(I))return;if(Mn("before:highlightElement",{el:m,language:I}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(y.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),y.throwUnescapedHTML))throw new Eo("One of your code blocks includes unescaped HTML.",m.innerHTML);R=m;const B=R.textContent,q=I?K(B,{language:I,ignoreIllegals:!0}):tt(B);m.innerHTML=q.value,m.dataset.highlighted="yes",Ro(m,I,q.language),m.result={language:q.language,re:q.relevance,relevance:q.relevance},q.secondBest&&(m.secondBest={language:q.secondBest.language,relevance:q.secondBest.relevance}),Mn("after:highlightElement",{el:m,result:q,text:B})}function Mo(m){y=$t(y,m)}const xo=()=>{Rn(),Xe("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function To(){Rn(),Xe("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Zt=!1;function Rn(){function m(){Rn()}if(document.readyState==="loading"){Zt||window.addEventListener("DOMContentLoaded",m,!1),Zt=!0;return}document.querySelectorAll(y.cssSelector).forEach(rt)}function Fo(m,R){let I=null;try{I=R(o)}catch(B){if(Ze("Language definition for '{}' could not be registered.".replace("{}",m)),Z)Ze(B);else throw B;I=w}I.name||(I.name=m),d[m]=I,I.rawDefinition=R.bind(null,o),I.aliases&&Gt(I.aliases,{languageName:m})}function No(m){delete d[m];for(const R of Object.keys(h))h[R]===m&&delete h[R]}function So(){return Object.keys(d)}function ke(m){return m=(m||"").toLowerCase(),d[m]||d[h[m]]}function Gt(m,{languageName:R}){typeof m=="string"&&(m=[m]),m.forEach(I=>{h[I.toLowerCase()]=R})}function Kt(m){const R=ke(m);return R&&!R.disableAutodetect}function Co(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=R=>{m["before:highlightBlock"](Object.assign({block:R.el},R))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=R=>{m["after:highlightBlock"](Object.assign({block:R.el},R))})}function Ao(m){Co(m),S.push(m)}function ko(m){const R=S.indexOf(m);R!==-1&&S.splice(R,1)}function Mn(m,R){const I=m;S.forEach(function(B){B[I]&&B[I](R)})}function Io(m){return Xe("10.7.0","highlightBlock will be removed entirely in v12.0"),Xe("10.7.0","Please use highlightElement now."),rt(m)}Object.assign(o,{highlight:K,highlightAuto:tt,highlightAll:Rn,highlightElement:rt,highlightBlock:Io,configure:Mo,initHighlighting:xo,initHighlightingOnLoad:To,registerLanguage:Fo,unregisterLanguage:No,listLanguages:So,getLanguage:ke,registerAliases:Gt,autoDetection:Kt,inherit:$t,addPlugin:Ao,removePlugin:ko}),o.debugMode=function(){Z=!1},o.safeMode=function(){Z=!0},o.versionString=wo,o.regex={concat:F,lookahead:u,either:z,optional:p,anyNumberOfTimes:v};for(const m in En)typeof En[m]=="object"&&e(En[m]);return Object.assign(o,En),o},Je=Ht({});return Je.newInstance=()=>Ht({}),ut=Je,Je.HighlightJS=Je,Je.default=Je,ut}var _1=d1();const mr=f1(_1);var m1=ge("<pre><code><!></code></pre>");function g1(e,n){const t=jn(n,["children","$$slots","$$events","$$legacy"]),r=jn(t,["code","highlighted","languageName","langtag"]);let i=Be(n,"code",8),s=Be(n,"highlighted",8),l=Be(n,"languageName",8,"plaintext"),f=Be(n,"langtag",8,!1);var a=m1();let c;var g=W(a);Ot(g,1,"",null,{},{hljs:!0});var _=W(g);{var u=p=>{var F=It(),A=qn(F);si(A,s),re(p,F)},v=p=>{var F=Js();Ee(()=>Ve(F,i())),re(p,F)};ht(_,p=>{s()?p(u):p(v,!1)})}Ee(p=>c=_i(a,c,{"data-language":l(),...r,[fn]:p},"svelte-1w9vok"),[()=>({langtag:f()})],Ft),re(e,a)}function v1(e,n){const t=jn(n,["children","$$slots","$$events","$$legacy"]),r=jn(t,["language","code","langtag"]);hn(n,!1);let i=Be(n,"language",8),s=Be(n,"code",8),l=Be(n,"langtag",8,!1);const f=bi();let a=Nt("");yi(()=>{O(a)&&f("highlight",{highlighted:O(a)})}),Ts(()=>(gt(i()),gt(s())),()=>{mr.registerLanguage(i().name,i().register),fe(a,mr.highlight(s(),{language:i().name}).value)}),Fs(),Lt();var c=It(),g=qn(c);ii(g,n,"default",{get highlighted(){return O(a)}},_=>{g1(_,pi(()=>r,{get languageName(){return i().name},get langtag(){return l()},get highlighted(){return O(a)},get code(){return s()}}))}),re(e,c),bn()}function p1(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",s={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},l={keywords:s,illegal:/<\//},f={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},a={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},c={className:"subst",begin:/\$\(/,end:/\)/,keywords:s},g={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,c,g],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},u={className:"string",contains:[e.BACKSLASH_ESCAPE,c,g],begin:"`",end:"`"},v={className:"meta",begin:"@"+n},p={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return l.name="Julia",l.contains=[f,a,_,u,v,p,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],c.contains=l.contains,l}const h1={name:"julia",register:p1};var b1=ge('<th class="svelte-m8v9hl"> </th>'),y1=ge('<td class="svelte-m8v9hl"> </td>'),w1=ge('<a class="issue svelte-m8v9hl" target="_blank">(?)</a>'),E1=ge('<td class="svelte-m8v9hl"><!> <span> </span></td>'),D1=ge('<tr class="svelte-m8v9hl"><td class="svelte-m8v9hl"> <div class="model-definition svelte-m8v9hl"><!></div></td><!></tr>'),R1=ge('<table id="results" class="svelte-m8v9hl"><thead><tr class="svelte-m8v9hl"><th class="svelte-m8v9hl">Model name \\\\ AD type</th><!></tr></thead><tbody></tbody></table>');function M1(e,n){hn(n,!0);const t=[...n.data.keys()],r=n.data.get(t[0]).keys(),i="https://github.com/EnzymeAD/Enzyme.jl/issues/1995",l={assume_mvnormal__EnzymeForward:i,assume_wishart__EnzymeForward:i,multithreaded__Mooncake:"https://github.com/chalk-lab/Mooncake.jl/issues/570"};var f=R1(),a=W(f),c=W(a),g=we(W(c));_n(g,17,()=>r,dn,(u,v)=>{var p=b1(),F=W(p);Ee(()=>Ve(F,O(v))),re(u,p)});var _=we(a);_n(_,21,()=>yt(n.data),dn,(u,v)=>{let p=()=>O(v)[0],F=()=>O(v)[1];var A=D1(),z=W(A),H=W(z),x=we(H),D=W(x);v1(D,{language:h1,get code(){return n.modelDefinitions[p()]}});var M=we(z);_n(M,17,()=>yt(F()),dn,(ee,N)=>{let U=()=>O(N)[0],Y=()=>O(N)[1];var xe=It(),ve=qn(xe);{var He=ne=>{var pe=y1(),Te=W(pe);Ee(Ae=>Ve(Te,Ae),[()=>Y().toFixed(3)]),re(ne,pe)},on=ne=>{var pe=E1(),Te=W(pe);{var Ae=sn=>{var wn=w1();Ee(()=>bt(wn,"href",l[`${p()}__${U()}`])),re(sn,wn)};ht(Te,sn=>{l[`${p()}__${U()}`]&&sn(Ae)})}var he=we(Te,2),Qn=W(he);Ee(()=>{Ot(he,1,Zr(Y()),"svelte-m8v9hl"),Ve(Qn,Y())}),re(ne,pe)};ht(ve,ne=>{typeof Y()=="number"?ne(He):ne(on,!1)})}re(ee,xe)}),Ee(()=>Ve(H,`${p()??""} `)),re(u,A)}),re(e,f),bn()}var x1=ge("<h3> </h3> <!>",1),T1=ge(`<div id="main-wrapper" class="svelte-14rlgmo"><main class="svelte-14rlgmo"><h1>Turing AD tests</h1> <p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p> <p>This page is intended as a brief overview of how different AD
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
                describes the problem.</li></ul> <h2>Results</h2> <p><a href="adtests.json" target="_blank" download="">Download the raw data (JSON)</a></p> <p><b>Note about Enzyme:</b> Enzyme does not work with DynamicPPL 0.37
            / Turing 0.40 because of <a href="https://github.com/EnzymeAD/Enzyme.jl/issues/2429" target="_blank">this issue</a>. If you want to use Enzyme with Turing, please use an older
            version of Turing / DynamicPPL.</p> <!> <h2>Manifest</h2> <p>The tests above were run with the following package versions:</p> <!></main></div>`);function F1(e,n){hn(n,!1);let t=new Map;for(const[f,a]of Object.entries(ba)){let c=a.__category__;delete a.__category__;let g=new Map;for(const[_,u]of Object.entries(a))g.set(_,u);t.has(c)||t.set(c,new Map),t.get(c).set(f,g)}console.log(t),Lt();var r=T1(),i=W(r),s=we(W(i),16);_n(s,1,()=>t.entries(),dn,(f,a)=>{let c=()=>O(a)[0],g=()=>O(a)[1];var _=x1(),u=qn(_),v=W(u),p=we(u,2);M1(p,{get data(){return g()},modelDefinitions:vl}),Ee(()=>Ve(v,c())),re(f,_)});var l=we(s,6);u1(l,{}),re(e,r),bn()}Ys(F1,{target:document.getElementById("app")});
