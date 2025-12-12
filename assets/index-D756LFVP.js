(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Qt=!1;var qn=Array.isArray,qo=Array.prototype.indexOf,Et=Array.from,$o=Object.defineProperty,je=Object.getOwnPropertyDescriptor,gr=Object.getOwnPropertyDescriptors,Uo=Object.prototype,Ho=Array.prototype,Dt=Object.getPrototypeOf,er=Object.isExtensible;function ln(e){return typeof e=="function"}function Ko(e){return e()}function dt(e){for(var n=0;n<e.length;n++)e[n]()}const me=2,vr=4,$n=8,Rt=16,Ce=32,nn=64,An=128,ue=256,kn=512,se=1024,Re=2048,$e=4096,Se=8192,Un=16384,Zo=32768,xt=65536,Go=1<<17,Wo=1<<19,hr=1<<20,_t=1<<21,Ge=Symbol("$state"),br=Symbol("legacy props"),Xo=Symbol("");function yr(e){return e===this.v}function Jo(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Mt(e){return!Jo(e,this.v)}function Yo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function es(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ns(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ts(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function rs(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function os(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ss(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function is(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let vn=!1,as=!1;function ls(){vn=!0}const Tt=1,Ft=2,wr=4,cs=8,us=16,fs=1,ds=2,Er=4,_s=8,ms=16,ps=1,gs=2,ie=Symbol(),vs="http://www.w3.org/1999/xhtml",hs="@attach";function Dr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let q=null;function nr(e){q=e}function hn(e,n=!1,t){var r=q={p:q,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};vn&&!n&&(q.l={s:null,u:null,r1:[],r2:Qe(!1)}),Rs(()=>{r.d=!0})}function bn(e){const n=q;if(n!==null){const l=n.e;if(l!==null){var t=P,r=V;n.e=null;try{for(var i=0;i<l.length;i++){var s=l[i];qe(s.effect),xe(s.reaction),Nt(s.fn)}}finally{qe(t),xe(r)}}q=n.p,n.m=!0}return{}}function Hn(){return!vn||q!==null&&q.l===null}function Ze(e){if(typeof e!="object"||e===null||Ge in e)return e;const n=Dt(e);if(n!==Uo&&n!==Ho)return e;var t=new Map,r=qn(e),i=Ie(0),s=V,l=f=>{var a=V;xe(s);var c=f();return xe(a),c};return r&&t.set("length",Ie(e.length)),new Proxy(e,{defineProperty(f,a,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&os();var p=t.get(a);return p===void 0?(p=l(()=>Ie(c.value)),t.set(a,p)):ce(p,l(()=>Ze(c.value))),!0},deleteProperty(f,a){var c=t.get(a);if(c===void 0)a in f&&(t.set(a,l(()=>Ie(ie))),lt(i));else{if(r&&typeof a=="string"){var p=t.get("length"),_=Number(a);Number.isInteger(_)&&_<p.v&&ce(p,_)}ce(c,ie),lt(i)}return!0},get(f,a,c){var g;if(a===Ge)return e;var p=t.get(a),_=a in f;if(p===void 0&&(!_||(g=je(f,a))!=null&&g.writable)&&(p=l(()=>Ie(Ze(_?f[a]:ie))),t.set(a,p)),p!==void 0){var u=O(p);return u===ie?void 0:u}return Reflect.get(f,a,c)},getOwnPropertyDescriptor(f,a){var c=Reflect.getOwnPropertyDescriptor(f,a);if(c&&"value"in c){var p=t.get(a);p&&(c.value=O(p))}else if(c===void 0){var _=t.get(a),u=_==null?void 0:_.v;if(_!==void 0&&u!==ie)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(f,a){var u;if(a===Ge)return!0;var c=t.get(a),p=c!==void 0&&c.v!==ie||Reflect.has(f,a);if(c!==void 0||P!==null&&(!p||(u=je(f,a))!=null&&u.writable)){c===void 0&&(c=l(()=>Ie(p?Ze(f[a]):ie)),t.set(a,c));var _=O(c);if(_===ie)return!1}return p},set(f,a,c,p){var U;var _=t.get(a),u=a in f;if(r&&a==="length")for(var g=c;g<_.v;g+=1){var v=t.get(g+"");v!==void 0?ce(v,ie):g in f&&(v=l(()=>Ie(ie)),t.set(g+"",v))}_===void 0?(!u||(U=je(f,a))!=null&&U.writable)&&(_=l(()=>Ie(void 0)),ce(_,l(()=>Ze(c))),t.set(a,_)):(u=_.v!==ie,ce(_,l(()=>Ze(c))));var F=Reflect.getOwnPropertyDescriptor(f,a);if(F!=null&&F.set&&F.set.call(p,c),!u){if(r&&typeof a=="string"){var A=t.get("length"),z=Number(a);Number.isInteger(z)&&z>=A.v&&ce(A,z+1)}lt(i)}return!0},ownKeys(f){O(i);var a=Reflect.ownKeys(f).filter(_=>{var u=t.get(_);return u===void 0||u.v!==ie});for(var[c,p]of t)p.v!==ie&&!(c in f)&&a.push(c);return a},setPrototypeOf(){ss()}})}function lt(e,n=1){ce(e,e.v+n)}function mn(e){var n=me|Re,t=V!==null&&(V.f&me)!==0?V:null;return P===null||t!==null&&(t.f&ue)!==0?n|=ue:P.f|=hr,{ctx:q,deps:null,effects:null,equals:yr,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??P}}function St(e){const n=mn(e);return n.equals=Mt,n}function Rr(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)Ne(n[t])}}function bs(e){for(var n=e.parent;n!==null;){if((n.f&me)===0)return n;n=n.parent}return null}function xr(e){var n,t=P;qe(bs(e));try{Rr(e),n=jr(e)}finally{qe(t)}return n}function Mr(e){var n=xr(e),t=(ze||(e.f&ue)!==0)&&e.deps!==null?$e:se;de(e,t),e.equals(n)||(e.v=n,e.wv=Vr())}const pn=new Map;function Qe(e,n){var t={f:0,v:e,reactions:null,equals:yr,rv:0,wv:0};return t}function Ie(e,n){const t=Qe(e);return Cs(t),t}function Kn(e,n=!1){var r;const t=Qe(e);return n||(t.equals=Mt),vn&&q!==null&&q.l!==null&&((r=q.l).s??(r.s=[])).push(t),t}function ce(e,n,t=!1){V!==null&&!De&&Hn()&&(V.f&(me|Rt))!==0&&!(oe!=null&&oe.includes(e))&&is();let r=t?Ze(n):n;return mt(e,r)}function mt(e,n){if(!e.equals(n)){var t=e.v;yn?pn.set(e,n):pn.set(e,t),e.v=n,(e.f&me)!==0&&((e.f&Re)!==0&&xr(e),de(e,(e.f&ue)===0?se:$e)),e.wv=Vr(),Tr(e,Re),Hn()&&P!==null&&(P.f&se)!==0&&(P.f&(Ce|nn))===0&&(fe===null?As([e]):fe.push(e))}return n}function tr(e,n=1){var t=O(e),r=n===1?t++:t--;return ce(e,t),r}function Tr(e,n){var t=e.reactions;if(t!==null)for(var r=Hn(),i=t.length,s=0;s<i;s++){var l=t[s],f=l.f;(f&Re)===0&&(!r&&l===P||(de(l,n),(f&(se|ue))!==0&&((f&me)!==0?Tr(l,$e):Qn(l))))}}let ys=!1;var rr,Fr,Sr,Nr;function ws(){if(rr===void 0){rr=window,Fr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Sr=je(n,"firstChild").get,Nr=je(n,"nextSibling").get,er(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),er(t)&&(t.__t=void 0)}}function Zn(e=""){return document.createTextNode(e)}function Pe(e){return Sr.call(e)}function Gn(e){return Nr.call(e)}function W(e,n){return Pe(e)}function Wn(e,n){{var t=Pe(e);return t instanceof Comment&&t.data===""?Gn(t):t}}function we(e,n=1,t=!1){let r=e;for(;n--;)r=Gn(r);return r}function Es(e){e.textContent=""}function Cr(e){P===null&&V===null&&es(),V!==null&&(V.f&ue)!==0&&P===null&&Qo(),yn&&Yo()}function Ds(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function tn(e,n,t,r=!0){var i=P,s={ctx:q,deps:null,nodes_start:null,nodes_end:null,f:e|Re,first:null,fn:n,last:null,next:null,parent:i,prev:null,teardown:null,transitions:null,wv:0};if(t)try{Yn(s),s.f|=Zo}catch(a){throw Ne(s),a}else n!==null&&Qn(s);var l=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(hr|An))===0;if(!l&&r&&(i!==null&&Ds(s,i),V!==null&&(V.f&me)!==0)){var f=V;(f.effects??(f.effects=[])).push(s)}return s}function Rs(e){const n=tn($n,null,!1);return de(n,se),n.teardown=e,n}function or(e){Cr();var n=P!==null&&(P.f&Ce)!==0&&q!==null&&!q.m;if(n){var t=q;(t.e??(t.e=[])).push({fn:e,effect:P,reaction:V})}else{var r=Nt(e);return r}}function xs(e){return Cr(),Ct(e)}function Ms(e){const n=tn(nn,e,!0);return(t={})=>new Promise(r=>{t.outro?On(n,()=>{Ne(n),r(void 0)}):(Ne(n),r(void 0))})}function Nt(e){return tn(vr,e,!1)}function Ts(e,n){var t=q,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=Ct(()=>{e(),!r.ran&&(r.ran=!0,ce(t.l.r2,!0),Bn(n))})}function Fs(){var e=q;Ct(()=>{if(O(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&se)!==0&&de(t,$e),rn(t)&&Yn(t),n.ran=!1}e.l.r2.v=!1}})}function Ct(e){return tn($n,e,!0)}function Ee(e,n=[],t=mn){const r=n.map(t);return Xn(()=>e(...r.map(O)))}function Xn(e,n=0){return tn($n|Rt|n,e,!0)}function en(e,n=!0){return tn($n|Ce,e,!0,n)}function Ar(e){var n=e.teardown;if(n!==null){const t=yn,r=V;sr(!0),xe(null);try{n.call(null)}finally{sr(t),xe(r)}}}function kr(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&nn)!==0?t.parent=null:Ne(t,n),t=r}}function Ss(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&Ce)===0&&Ne(n),n=t}}function Ne(e,n=!0){var t=!1;(n||(e.f&Wo)!==0)&&e.nodes_start!==null&&(Or(e.nodes_start,e.nodes_end),t=!0),kr(e,n&&!t),Vn(e,0),de(e,Un);var r=e.transitions;if(r!==null)for(const s of r)s.stop();Ar(e);var i=e.parent;i!==null&&i.first!==null&&Ir(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Or(e,n){for(;e!==null;){var t=e===n?null:Gn(e);e.remove(),e=t}}function Ir(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function On(e,n){var t=[];At(e,t,!0),Lr(t,()=>{Ne(e),n&&n()})}function Lr(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var i of e)i.out(r)}else n()}function At(e,n,t){if((e.f&Se)===0){if(e.f^=Se,e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&n.push(l);for(var r=e.first;r!==null;){var i=r.next,s=(r.f&xt)!==0||(r.f&Ce)!==0;At(r,n,s?t:!1),r=i}}}function In(e){Pr(e,!0)}function Pr(e,n){if((e.f&Se)!==0){e.f^=Se,(e.f&se)===0&&(e.f^=se),rn(e)&&(de(e,Re),Qn(e));for(var t=e.first;t!==null;){var r=t.next,i=(t.f&xt)!==0||(t.f&Ce)!==0;Pr(t,i?n:!1),t=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&s.in()}}let Ln=[];function Ns(){var e=Ln;Ln=[],dt(e)}function kt(e){Ln.length===0&&queueMicrotask(Ns),Ln.push(e)}let Nn=!1,pt=!1,Pn=null,We=!1,yn=!1;function sr(e){yn=e}let Cn=[];let V=null,De=!1;function xe(e){V=e}let P=null;function qe(e){P=e}let oe=null;function Cs(e){V!==null&&V.f&_t&&(oe===null?oe=[e]:oe.push(e))}let te=null,le=0,fe=null;function As(e){fe=e}let zr=1,zn=0,ze=!1;function Vr(){return++zr}function rn(e){var _;var n=e.f;if((n&Re)!==0)return!0;if((n&$e)!==0){var t=e.deps,r=(n&ue)!==0;if(t!==null){var i,s,l=(n&kn)!==0,f=r&&P!==null&&!ze,a=t.length;if(l||f){var c=e,p=c.parent;for(i=0;i<a;i++)s=t[i],(l||!((_=s==null?void 0:s.reactions)!=null&&_.includes(c)))&&(s.reactions??(s.reactions=[])).push(c);l&&(c.f^=kn),f&&p!==null&&(p.f&ue)===0&&(c.f^=ue)}for(i=0;i<a;i++)if(s=t[i],rn(s)&&Mr(s),s.wv>e.wv)return!0}(!r||P!==null&&!ze)&&de(e,se)}return!1}function ks(e,n){for(var t=n;t!==null;){if((t.f&An)!==0)try{t.fn(e);return}catch{t.f^=An}t=t.parent}throw Nn=!1,e}function ir(e){return(e.f&Un)===0&&(e.parent===null||(e.parent.f&An)===0)}function Jn(e,n,t,r){if(Nn){if(t===null&&(Nn=!1),ir(n))throw e;return}if(t!==null&&(Nn=!0),ks(e,n),ir(n))throw e}function Br(e,n,t=!0){var r=e.reactions;if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];oe!=null&&oe.includes(e)||((s.f&me)!==0?Br(s,n,!1):n===s&&(t?de(s,Re):(s.f&se)!==0&&de(s,$e),Qn(s)))}}function jr(e){var g;var n=te,t=le,r=fe,i=V,s=ze,l=oe,f=q,a=De,c=e.f;te=null,le=0,fe=null,ze=(c&ue)!==0&&(De||!We||V===null),V=(c&(Ce|nn))===0?e:null,oe=null,nr(e.ctx),De=!1,zn++,e.f|=_t;try{var p=(0,e.fn)(),_=e.deps;if(te!==null){var u;if(Vn(e,le),_!==null&&le>0)for(_.length=le+te.length,u=0;u<te.length;u++)_[le+u]=te[u];else e.deps=_=te;if(!ze)for(u=le;u<_.length;u++)((g=_[u]).reactions??(g.reactions=[])).push(e)}else _!==null&&le<_.length&&(Vn(e,le),_.length=le);if(Hn()&&fe!==null&&!De&&_!==null&&(e.f&(me|$e|Re))===0)for(u=0;u<fe.length;u++)Br(fe[u],e);return i!==null&&i!==e&&(zn++,fe!==null&&(r===null?r=fe:r.push(...fe))),p}finally{te=n,le=t,fe=r,V=i,ze=s,oe=l,nr(f),De=a,e.f^=_t}}function Os(e,n){let t=n.reactions;if(t!==null){var r=qo.call(t,e);if(r!==-1){var i=t.length-1;i===0?t=n.reactions=null:(t[r]=t[i],t.pop())}}t===null&&(n.f&me)!==0&&(te===null||!te.includes(n))&&(de(n,$e),(n.f&(ue|kn))===0&&(n.f^=kn),Rr(n),Vn(n,0))}function Vn(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Os(e,t[r])}function Yn(e){var n=e.f;if((n&Un)===0){de(e,se);var t=P,r=q,i=We;P=e,We=!0;try{(n&Rt)!==0?Ss(e):kr(e),Ar(e);var s=jr(e);e.teardown=typeof s=="function"?s:null,e.wv=zr;var l=e.deps,f;Qt&&as&&e.f&Re}catch(a){Jn(a,e,t,r||e.ctx)}finally{We=i,P=t}}}function Is(){try{ns()}catch(e){if(Pn!==null)Jn(e,Pn,null);else throw e}}function Ls(){var e=We;try{var n=0;for(We=!0;Cn.length>0;){n++>1e3&&Is();var t=Cn,r=t.length;Cn=[];for(var i=0;i<r;i++){var s=zs(t[i]);Ps(s)}pn.clear()}}finally{pt=!1,We=e,Pn=null}}function Ps(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(Un|Se))===0)try{rn(r)&&(Yn(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Ir(r):r.fn=null))}catch(i){Jn(i,r,null,r.ctx)}}}function Qn(e){pt||(pt=!0,queueMicrotask(Ls));for(var n=Pn=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(nn|Ce))!==0){if((t&se)===0)return;n.f^=se}}Cn.push(n)}function zs(e){for(var n=[],t=e;t!==null;){var r=t.f,i=(r&(Ce|nn))!==0,s=i&&(r&se)!==0;if(!s&&(r&Se)===0){if((r&vr)!==0)n.push(t);else if(i)t.f^=se;else try{rn(t)&&Yn(t)}catch(a){Jn(a,t,null,t.ctx)}var l=t.first;if(l!==null){t=l;continue}}var f=t.parent;for(t=t.next;t===null&&f!==null;)t=f.next,f=f.parent}return n}function O(e){var n=e.f,t=(n&me)!==0;if(V!==null&&!De){if(!(oe!=null&&oe.includes(e))){var r=V.deps;e.rv<zn&&(e.rv=zn,te===null&&r!==null&&r[le]===e?le++:te===null?te=[e]:(!ze||!te.includes(e))&&te.push(e))}}else if(t&&e.deps===null&&e.effects===null){var i=e,s=i.parent;s!==null&&(s.f&ue)===0&&(i.f^=ue)}return t&&(i=e,rn(i)&&Mr(i)),yn&&pn.has(e)?pn.get(e):e.v}function Bn(e){var n=De;try{return De=!0,e()}finally{De=n}}const Vs=-7169;function de(e,n){e.f=e.f&Vs|n}function gt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ge in e)vt(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&Ge in t&&vt(t)}}}function vt(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{vt(e[r],n)}catch{}const t=Dt(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=gr(t);for(let i in r){const s=r[i].get;if(s)try{s.call(e)}catch{}}}}}function Bs(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const js=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function qs(e){return js.includes(e)}const $s={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Us(e){return e=e.toLowerCase(),$s[e]??e}const Hs=["touchstart","touchmove"];function Ks(e){return Hs.includes(e)}function Zs(e,n){if(n){const t=document.body;e.autofocus=!0,kt(()=>{document.activeElement===t&&e.focus()})}}function Gs(e){var n=V,t=P;xe(null),qe(null);try{return e()}finally{xe(n),qe(t)}}const qr=new Set,ht=new Set;function Ws(e,n,t,r={}){function i(s){if(r.capture||un.call(n,s),!s.cancelBubble)return Gs(()=>t==null?void 0:t.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?kt(()=>{n.addEventListener(e,i,r)}):n.addEventListener(e,i,r),i}function Xs(e){for(var n=0;n<e.length;n++)qr.add(e[n]);for(var t of ht)t(e)}function un(e){var U;var n=this,t=n.ownerDocument,r=e.type,i=((U=e.composedPath)==null?void 0:U.call(e))||[],s=i[0]||e.target,l=0,f=e.__root;if(f){var a=i.indexOf(f);if(a!==-1&&(n===document||n===window)){e.__root=n;return}var c=i.indexOf(n);if(c===-1)return;a<=c&&(l=a)}if(s=i[l]||e.target,s!==n){$o(e,"currentTarget",{configurable:!0,get(){return s||t}});var p=V,_=P;xe(null),qe(null);try{for(var u,g=[];s!==null;){var v=s.assignedSlot||s.parentNode||s.host||null;try{var F=s["__"+r];if(F!=null&&(!s.disabled||e.target===s))if(qn(F)){var[A,...z]=F;A.apply(s,[e,...z])}else F.call(s,e)}catch(M){u?g.push(M):u=M}if(e.cancelBubble||v===n||v===null)break;s=v}if(u){for(let M of g)queueMicrotask(()=>{throw M});throw u}}finally{e.__root=n,delete e.currentTarget,xe(p),qe(_)}}}function $r(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function gn(e,n){var t=P;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function pe(e,n){var t=(n&ps)!==0,r=(n&gs)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=$r(s?e:"<!>"+e),t||(i=Pe(i)));var l=r||Fr?document.importNode(i,!0):i.cloneNode(!0);if(t){var f=Pe(l),a=l.lastChild;gn(f,a)}else gn(l,l);return l}}function Js(e=""){{var n=Zn(e+"");return gn(n,n),n}}function Ot(){var e=document.createDocumentFragment(),n=document.createComment(""),t=Zn();return e.append(n,t),gn(n,t),e}function re(e,n){e!==null&&e.before(n)}function Ve(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function Ys(e,n){return Qs(e,n)}const Ye=new Map;function Qs(e,{target:n,anchor:t,props:r={},events:i,context:s,intro:l=!0}){ws();var f=new Set,a=_=>{for(var u=0;u<_.length;u++){var g=_[u];if(!f.has(g)){f.add(g);var v=Ks(g);n.addEventListener(g,un,{passive:v});var F=Ye.get(g);F===void 0?(document.addEventListener(g,un,{passive:v}),Ye.set(g,1)):Ye.set(g,F+1)}}};a(Et(qr)),ht.add(a);var c=void 0,p=Ms(()=>{var _=t??n.appendChild(Zn());return en(()=>{if(s){hn({});var u=q;u.c=s}i&&(r.$$events=i),c=e(_,r)||{},s&&bn()}),()=>{var v;for(var u of f){n.removeEventListener(u,un);var g=Ye.get(u);--g===0?(document.removeEventListener(u,un),Ye.delete(u)):Ye.set(u,g)}ht.delete(a),_!==t&&((v=_.parentNode)==null||v.removeChild(_))}});return ei.set(c,p),c}let ei=new WeakMap;function bt(e,n,[t,r]=[0,0]){var i=e,s=null,l=null,f=ie,a=t>0?xt:0,c=!1;const p=(u,g=!0)=>{c=!0,_(g,u)},_=(u,g)=>{f!==(f=u)&&(f?(s?In(s):g&&(s=en(()=>g(i))),l&&On(l,()=>{l=null})):(l?In(l):g&&(l=en(()=>g(i,[t+1,r]))),s&&On(s,()=>{s=null})))};Xn(()=>{c=!1,n(p),c||_(null,null)},a)}function dn(e,n){return n}function ni(e,n,t,r){for(var i=[],s=n.length,l=0;l<s;l++)At(n[l].e,i,!0);var f=s>0&&i.length===0&&t!==null;if(f){var a=t.parentNode;Es(a),a.append(t),r.clear(),Le(e,n[0].prev,n[s-1].next)}Lr(i,()=>{for(var c=0;c<s;c++){var p=n[c];f||(r.delete(p.k),Le(e,p.prev,p.next)),Ne(p.e,!f)}})}function _n(e,n,t,r,i,s=null){var l=e,f={flags:n,items:new Map,first:null},a=(n&wr)!==0;if(a){var c=e;l=c.appendChild(Zn())}var p=null,_=!1,u=St(()=>{var g=t();return qn(g)?g:g==null?[]:Et(g)});Xn(()=>{var g=O(u),v=g.length;_&&v===0||(_=v===0,ti(g,f,l,i,n,r,t),s!==null&&(v===0?p?In(p):p=en(()=>s(l)):p!==null&&On(p,()=>{p=null})),O(u))})}function ti(e,n,t,r,i,s,l){var ne,ve,Te,Ae;var f=(i&cs)!==0,a=(i&(Tt|Ft))!==0,c=e.length,p=n.items,_=n.first,u=_,g,v=null,F,A=[],z=[],U,M,D,x;if(f)for(x=0;x<c;x+=1)U=e[x],M=s(U,x),D=p.get(M),D!==void 0&&((ne=D.a)==null||ne.measure(),(F??(F=new Set)).add(D));for(x=0;x<c;x+=1){if(U=e[x],M=s(U,x),D=p.get(M),D===void 0){var ee=u?u.e.nodes_start:t;v=oi(ee,n,v,v===null?n.first:v.next,U,M,x,r,i,l),p.set(M,v),A=[],z=[],u=v.next;continue}if(a&&ri(D,U,x,i),(D.e.f&Se)!==0&&(In(D.e),f&&((ve=D.a)==null||ve.unfix(),(F??(F=new Set)).delete(D))),D!==u){if(g!==void 0&&g.has(D)){if(A.length<z.length){var S=z[0],$;v=S.prev;var Y=A[0],Me=A[A.length-1];for($=0;$<A.length;$+=1)ar(A[$],S,t);for($=0;$<z.length;$+=1)g.delete(z[$]);Le(n,Y.prev,Me.next),Le(n,v,Y),Le(n,Me,S),u=S,v=Me,x-=1,A=[],z=[]}else g.delete(D),ar(D,u,t),Le(n,D.prev,D.next),Le(n,D,v===null?n.first:v.next),Le(n,v,D),v=D;continue}for(A=[],z=[];u!==null&&u.k!==M;)(u.e.f&Se)===0&&(g??(g=new Set)).add(u),z.push(u),u=u.next;if(u===null)continue;D=u}A.push(D),v=D,u=D.next}if(u!==null||g!==void 0){for(var ge=g===void 0?[]:Et(g);u!==null;)(u.e.f&Se)===0&&ge.push(u),u=u.next;var Ue=ge.length;if(Ue>0){var on=(i&wr)!==0&&c===0?t:null;if(f){for(x=0;x<Ue;x+=1)(Te=ge[x].a)==null||Te.measure();for(x=0;x<Ue;x+=1)(Ae=ge[x].a)==null||Ae.fix()}ni(n,ge,on,p)}}f&&kt(()=>{var he;if(F!==void 0)for(D of F)(he=D.a)==null||he.apply()}),P.first=n.first&&n.first.e,P.last=v&&v.e}function ri(e,n,t,r){(r&Tt)!==0&&mt(e.v,n),(r&Ft)!==0?mt(e.i,t):e.i=t}function oi(e,n,t,r,i,s,l,f,a,c){var p=(a&Tt)!==0,_=(a&us)===0,u=p?_?Kn(i):Qe(i):i,g=(a&Ft)===0?l:Qe(l),v={i:g,v:u,k:s,a:null,e:null,prev:t,next:r};try{return v.e=en(()=>f(e,u,g,c),ys),v.e.prev=t&&t.e,v.e.next=r&&r.e,t===null?n.first=v:(t.next=v,t.e.next=v.e),r!==null&&(r.prev=v,r.e.prev=v.e),v}finally{}}function ar(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,i=n?n.e.nodes_start:t,s=e.e.nodes_start;s!==r;){var l=Gn(s);i.before(s),s=l}}function Le(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function si(e,n,t=!1,r=!1,i=!1){var s=e,l="";Ee(()=>{var f=P;if(l!==(l=n()??"")&&(f.nodes_start!==null&&(Or(f.nodes_start,f.nodes_end),f.nodes_start=f.nodes_end=null),l!=="")){var a=l+"";t?a=`<svg>${a}</svg>`:r&&(a=`<math>${a}</math>`);var c=$r(a);if((t||r)&&(c=Pe(c)),gn(Pe(c),c.lastChild),t||r)for(;Pe(c);)s.before(Pe(c));else s.before(c)}})}function ii(e,n,t,r,i){var f;var s=(f=n.$$slots)==null?void 0:f[t],l=!1;s===!0&&(s=n.children,l=!0),s===void 0?i!==null&&i(e):s(e,l?()=>r:r)}function ai(e,n){var t=void 0,r;Xn(()=>{t!==(t=n())&&(r&&(Ne(r),r=null),t&&(r=en(()=>{Nt(()=>t(e))})))})}function Ur(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=Ur(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function li(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=Ur(e))&&(r&&(r+=" "),r+=n);return r}function Hr(e){return typeof e=="object"?li(e):e??""}const lr=[...` 	
\r\f \v\uFEFF`];function ci(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var i in t)if(t[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,l=0;(l=r.indexOf(i,l))>=0;){var f=l+s;(l===0||lr.includes(r[l-1]))&&(f===r.length||lr.includes(r[f]))?r=(l===0?"":r.substring(0,l))+r.substring(f+1):l=f}}return r===""?null:r}function cr(e,n=!1){var t=n?" !important;":";",r="";for(var i in e){var s=e[i];s!=null&&s!==""&&(r+=" "+i+": "+s+t)}return r}function ct(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ui(e,n){if(n){var t="",r,i;if(Array.isArray(n)?(r=n[0],i=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,l=0,f=!1,a=[];r&&a.push(...Object.keys(r).map(ct)),i&&a.push(...Object.keys(i).map(ct));var c=0,p=-1;const F=e.length;for(var _=0;_<F;_++){var u=e[_];if(f?u==="/"&&e[_-1]==="*"&&(f=!1):s?s===u&&(s=!1):u==="/"&&e[_+1]==="*"?f=!0:u==='"'||u==="'"?s=u:u==="("?l++:u===")"&&l--,!f&&s===!1&&l===0){if(u===":"&&p===-1)p=_;else if(u===";"||_===F-1){if(p!==-1){var g=ct(e.substring(c,p).trim());if(!a.includes(g)){u!==";"&&_++;var v=e.substring(c,_).trim();t+=" "+v+";"}}c=_+1,p=-1}}}}return r&&(t+=cr(r)),i&&(t+=cr(i,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function It(e,n,t,r,i,s){var l=e.__className;if(l!==t||l===void 0){var f=ci(t,r,s);f==null?e.removeAttribute("class"):n?e.className=f:e.setAttribute("class",f),e.__className=t}else if(s&&i!==s)for(var a in s){var c=!!s[a];(i==null||c!==!!i[a])&&e.classList.toggle(a,c)}return s}function ut(e,n={},t,r){for(var i in t){var s=t[i];n[i]!==s&&(t[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function fi(e,n,t,r){var i=e.__style;if(i!==n){var s=ui(n,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=n}else r&&(Array.isArray(r)?(ut(e,t==null?void 0:t[0],r[0]),ut(e,t==null?void 0:t[1],r[1],"important")):ut(e,t,r));return r}const fn=Symbol("class"),cn=Symbol("style"),Kr=Symbol("is custom element"),Zr=Symbol("is html");function di(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function yt(e,n,t,r){var i=Gr(e);i[n]!==(i[n]=t)&&(n==="loading"&&(e[Xo]=t),t==null?e.removeAttribute(n):typeof t!="string"&&Wr(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function _i(e,n,t,r,i=!1){var s=Gr(e),l=s[Kr],f=!s[Zr],a=n||{},c=e.tagName==="OPTION";for(var p in n)p in t||(t[p]=null);t.class?t.class=Hr(t.class):t.class=null,t[cn]&&(t.style??(t.style=null));var _=Wr(e);for(const M in t){let D=t[M];if(c&&M==="value"&&D==null){e.value=e.__value="",a[M]=D;continue}if(M==="class"){var u=e.namespaceURI==="http://www.w3.org/1999/xhtml";It(e,u,D,r,n==null?void 0:n[fn],t[fn]),a[M]=D,a[fn]=t[fn];continue}if(M==="style"){fi(e,D,n==null?void 0:n[cn],t[cn]),a[M]=D,a[cn]=t[cn];continue}var g=a[M];if(D!==g){a[M]=D;var v=M[0]+M[1];if(v!=="$$")if(v==="on"){const x={},ee="$$"+M;let S=M.slice(2);var F=qs(S);if(Bs(S)&&(S=S.slice(0,-7),x.capture=!0),!F&&g){if(D!=null)continue;e.removeEventListener(S,a[ee],x),a[ee]=null}if(D!=null)if(F)e[`__${S}`]=D,Xs([S]);else{let $=function(Y){a[M].call(this,Y)};var U=$;a[ee]=Ws(S,e,$,x)}else F&&(e[`__${S}`]=void 0)}else if(M==="style")yt(e,M,D);else if(M==="autofocus")Zs(e,!!D);else if(!l&&(M==="__value"||M==="value"&&D!=null))e.value=e.__value=D;else if(M==="selected"&&c)di(e,D);else{var A=M;f||(A=Us(A));var z=A==="defaultValue"||A==="defaultChecked";if(D==null&&!l&&!z)if(s[M]=null,A==="value"||A==="checked"){let x=e;const ee=n===void 0;if(A==="value"){let S=x.defaultValue;x.removeAttribute(A),x.defaultValue=S,x.value=x.__value=ee?S:null}else{let S=x.defaultChecked;x.removeAttribute(A),x.defaultChecked=S,x.checked=ee?S:!1}}else e.removeAttribute(M);else z||_.includes(A)&&(l||typeof D!="string")?e[A]=D:typeof D!="function"&&yt(e,A,D)}}}for(let M of Object.getOwnPropertySymbols(t))M.description===hs&&ai(e,()=>t[M]);return a}function Gr(e){return e.__attributes??(e.__attributes={[Kr]:e.nodeName.includes("-"),[Zr]:e.namespaceURI===vs})}var ur=new Map;function Wr(e){var n=ur.get(e.nodeName);if(n)return n;ur.set(e.nodeName,n=[]);for(var t,r=e,i=Element.prototype;i!==r;){t=gr(r);for(var s in t)t[s].set&&n.push(s);r=Dt(r)}return n}function Lt(e=!1){const n=q,t=n.l.u;if(!t)return;let r=()=>gt(n.s);if(e){let i=0,s={};const l=mn(()=>{let f=!1;const a=n.s;for(const c in a)a[c]!==s[c]&&(s[c]=a[c],f=!0);return f&&i++,i});r=()=>O(l)}t.b.length&&xs(()=>{fr(n,r),dt(t.b)}),or(()=>{const i=Bn(()=>t.m.map(Ko));return()=>{for(const s of i)typeof s=="function"&&s()}}),t.a.length&&or(()=>{fr(n,r),dt(t.a)})}function fr(e,n){if(e.l.s)for(const t of e.l.s)O(t);n()}let Sn=!1;function mi(e){var n=Sn;try{return Sn=!1,[e(),Sn]}finally{Sn=n}}const pi={get(e,n){if(!e.exclude.includes(n))return O(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=Be({get[n](){return e.props[n]}},n,Er)),e.special[n](t),tr(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),tr(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function jn(e,n){return new Proxy({props:e,exclude:n,special:{},version:Qe(0)},pi)}const gi={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let i=e.props[r];ln(i)&&(i=i());const s=je(i,n);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const i=je(r,n);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,n){if(n===Ge||n===br)return!1;for(let t of e.props)if(ln(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(ln(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function vi(...e){return new Proxy({props:e},gi)}function dr(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function Be(e,n,t,r){var ee;var i=(t&fs)!==0,s=!vn||(t&ds)!==0,l=(t&_s)!==0,f=(t&ms)!==0,a=!1,c;l?[c,a]=mi(()=>e[n]):c=e[n];var p=Ge in e||br in e,_=l&&(((ee=je(e,n))==null?void 0:ee.set)??(p&&n in e&&(S=>e[n]=S)))||void 0,u=r,g=!0,v=!1,F=()=>(v=!0,g&&(g=!1,f?u=Bn(r):u=r),u);c===void 0&&r!==void 0&&(_&&s&&rs(),c=F(),_&&_(c));var A;if(s)A=()=>{var S=e[n];return S===void 0?F():(g=!0,v=!1,S)};else{var z=(i?mn:St)(()=>e[n]);z.f|=Go,A=()=>{var S=O(z);return S!==void 0&&(u=void 0),S===void 0?u:S}}if((t&Er)===0)return A;if(_){var U=e.$$legacy;return function(S,$){return arguments.length>0?((!s||!$||U||a)&&_($?A():S),S):A()}}var M=!1,D=Kn(c),x=mn(()=>{var S=A(),$=O(D);return M?(M=!1,$):D.v=S});return l&&O(x),i||(x.equals=Mt),function(S,$){if(arguments.length>0){const Y=$?O(x):s&&l?Ze(S):S;if(!x.equals(Y)){if(M=!0,ce(D,Y),v&&u!==void 0&&(u=Y),dr(x))return S;Bn(()=>O(x))}return S}return dr(x)?x.v:O(x)}}function hi(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function bi(){const e=q;return e===null&&Dr(),(n,t,r)=>{var s;const i=(s=e.s.$$events)==null?void 0:s[n];if(i){const l=qn(i)?i.slice():[i],f=hi(n,t,r);for(const a of l)a.call(e.x,f);return!f.defaultPrevented}return!0}}function yi(e){q===null&&Dr(),q.l===null&&ts(),wi(q).a.push(e)}function wi(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Ei="5";var pr;typeof window<"u"&&((pr=window.__svelte??(window.__svelte={})).v??(pr.v=new Set)).add(Ei);ls();const Di={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:"wrong",FiniteDifferences:94.97188286349878,ForwardDiff:2.1903677578413916,MooncakeFwd:28.450476086242748,MooncakeRvs:7.474674995779166,ReverseDiff:64.85073121533031,ReverseDiffCompiled:8.781255286753511,Zygote:739.4185604752366},Ri={__category__:"Distributions",EnzymeFwd:3.4056024626016494,EnzymeRvs:2.438477891651059,FiniteDifferences:39.21318972811049,ForwardDiff:2.02982026342655,MooncakeFwd:4.2135079522203025,MooncakeRvs:3.3254567802345014,ReverseDiff:74.18691588785047,ReverseDiffCompiled:5.6918301207582545,Zygote:3493.295675123446},xi={__category__:"Base Julia features",EnzymeFwd:3.5501799322181427,EnzymeRvs:1.838333164728261,FiniteDifferences:80.89584961213974,ForwardDiff:2.3768841803740206,MooncakeFwd:8.390325080928282,MooncakeRvs:4.7549645992636655,ReverseDiff:57.873592720852855,ReverseDiffCompiled:"wrong",Zygote:6654.013422361518},Mi={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:"error",FiniteDifferences:62.12528772818954,ForwardDiff:.9583404579243818,MooncakeFwd:422.0644382579034,MooncakeRvs:10.256507132062428,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Ti={__category__:"DynamicPPL demo models",EnzymeFwd:5.517440767111332,EnzymeRvs:3.959087243325958,FiniteDifferences:75.0308170766186,ForwardDiff:2.4723046319977264,MooncakeFwd:8.293583745945023,MooncakeRvs:5.895973245973246,ReverseDiff:144.4264318686955,ReverseDiffCompiled:13.049790576902547,Zygote:"error"},Fi={__category__:"DynamicPPL demo models",EnzymeFwd:4.373485784919653,EnzymeRvs:3.16052279235066,FiniteDifferences:67.70268597173023,ForwardDiff:2.0986710741372545,MooncakeFwd:7.34706811499113,MooncakeRvs:5.020009263239268,ReverseDiff:103.59638899503248,ReverseDiffCompiled:9.86708731871912,Zygote:9242.255878961529},Si={__category__:"DynamicPPL demo models",EnzymeFwd:4.861982006543075,EnzymeRvs:5.848512271513658,FiniteDifferences:83.07635009310988,ForwardDiff:1.7460961311492418,MooncakeFwd:12.414867681176517,MooncakeRvs:4.9870628352096515,ReverseDiff:71.18623941625938,ReverseDiffCompiled:6.4835308260346896,Zygote:"error"},Ni={__category__:"DynamicPPL demo models",EnzymeFwd:4.388683290217496,EnzymeRvs:5.027205246468723,FiniteDifferences:78.94839067702553,ForwardDiff:1.4441097034665182,MooncakeFwd:14.884390261040648,MooncakeRvs:5.317320607119135,ReverseDiff:55.93731426080754,ReverseDiffCompiled:4.807160404748406,Zygote:"error"},Ci={__category__:"DynamicPPL demo models",EnzymeFwd:4.777155336118497,EnzymeRvs:4.831918180274996,FiniteDifferences:86.08258082305095,ForwardDiff:1.5322919764589682,MooncakeFwd:15.327560023595266,MooncakeRvs:6.90875116371858,ReverseDiff:67.73605773001803,ReverseDiffCompiled:5.9763052063331035,Zygote:3955.6714124639284},Ai={__category__:"DynamicPPL demo models",EnzymeFwd:4.732713846588701,EnzymeRvs:4.542636503862833,FiniteDifferences:81.9645390070922,ForwardDiff:1.5720632540339543,MooncakeFwd:14.974294966070644,MooncakeRvs:6.736359242164324,ReverseDiff:64.23572136018487,ReverseDiffCompiled:5.617647881415187,Zygote:3209.6648814078044},ki={__category__:"DynamicPPL demo models",EnzymeFwd:5.520635068309772,EnzymeRvs:3.9356593189422098,FiniteDifferences:80.65857024565277,ForwardDiff:1.9306108755065499,MooncakeFwd:8.259817262068154,MooncakeRvs:5.88860951854666,ReverseDiff:143.92130763496965,ReverseDiffCompiled:13.693876854852464,Zygote:8344.539001180801},Oi={__category__:"DynamicPPL demo models",EnzymeFwd:5.285262084875798,EnzymeRvs:6.705187436320838,FiniteDifferences:84.15189193337939,ForwardDiff:1.561714027321624,MooncakeFwd:12.87138217641949,MooncakeRvs:5.612251249232927,ReverseDiff:71.257303946694,ReverseDiffCompiled:6.377280317514098,Zygote:"error"},Ii={__category__:"Distributions",EnzymeFwd:2.790448334908079,EnzymeRvs:2.7351156314691925,FiniteDifferences:29.040177904529095,ForwardDiff:1.2138388862118814,MooncakeFwd:3.7849616238439863,MooncakeRvs:5.942680339569232,ReverseDiff:50.39833045382233,ReverseDiffCompiled:4.510865350312544,Zygote:"error"},Li={__category__:"DynamicPPL demo models",EnzymeFwd:5.5396988850223705,EnzymeRvs:6.354445826513912,FiniteDifferences:84.9485124303763,ForwardDiff:1.5199577498979902,MooncakeFwd:14.022632088568463,MooncakeRvs:6.117856327423527,ReverseDiff:47.04671836580292,ReverseDiffCompiled:5.909780015902465,Zygote:"error"},Pi={__category__:"DynamicPPL demo models",EnzymeFwd:5.080343766173627,EnzymeRvs:6.359660788614657,FiniteDifferences:82.70249872514023,ForwardDiff:1.8772388833821259,MooncakeFwd:12.680382162976414,MooncakeRvs:5.774351148953632,ReverseDiff:68.92997103424774,ReverseDiffCompiled:6.485193672165576,Zygote:"error"},zi={__category__:"DynamicPPL demo models",EnzymeFwd:5.452057987227893,EnzymeRvs:4.990913048509663,FiniteDifferences:80.18821948025092,ForwardDiff:1.5275773085489122,MooncakeFwd:12.388359765557665,MooncakeRvs:5.464983461666195,ReverseDiff:68.42187766229341,ReverseDiffCompiled:6.90098589822195,Zygote:"error"},Vi={__category__:"DynamicPPL demo models",EnzymeFwd:5.112380628717078,EnzymeRvs:6.220696097425961,FiniteDifferences:78.6044015835194,ForwardDiff:1.4524188881651847,MooncakeFwd:14.955004814035588,MooncakeRvs:6.581332513640206,ReverseDiff:55.860409145607704,ReverseDiffCompiled:5.193545244184631,Zygote:"error"},Bi={__category__:"DynamicPPL demo models",EnzymeFwd:5.019891088469426,EnzymeRvs:7.326669906273722,FiniteDifferences:79.43927433873424,ForwardDiff:1.3595876541336709,MooncakeFwd:13.572688477951635,MooncakeRvs:6.127886894865,ReverseDiff:59.1812010805569,ReverseDiffCompiled:5.3979907338502535,Zygote:"error"},ji={__category__:"Core Turing syntax",EnzymeFwd:3.8202301600865947,EnzymeRvs:2.5656156829551775,FiniteDifferences:113.61156707295777,ForwardDiff:1.549153261095122,MooncakeFwd:14.62081022020508,MooncakeRvs:4.2178444429083815,ReverseDiff:54.65008243456756,ReverseDiffCompiled:4.660300003480319,Zygote:"error"},qi={__category__:"Core Turing syntax",EnzymeFwd:9.595122577221417,EnzymeRvs:5.51897503256268,FiniteDifferences:113.94116169520476,ForwardDiff:3.6988577441760087,MooncakeFwd:8.178503999981237,MooncakeRvs:13.696528186225263,ReverseDiff:391.8483647175421,ReverseDiffCompiled:34.2101218698416,Zygote:"error"},$i={__category__:"DynamicPPL arXiV paper",EnzymeFwd:1.4932864539930149,EnzymeRvs:2.18789368003154,FiniteDifferences:28.29894609568152,ForwardDiff:1.579422106711512,MooncakeFwd:3.8988423187426062,MooncakeRvs:9.316927260367097,ReverseDiff:125.95631534998547,ReverseDiffCompiled:20.026226457907875,Zygote:15.855562747487054},Ui={__category__:"DynamicPPL arXiV paper",EnzymeFwd:7.2930818920608464,EnzymeRvs:3.125661751951431,FiniteDifferences:181.9577114427861,ForwardDiff:5.740266072299226,MooncakeFwd:31.5944011564362,MooncakeRvs:4.227724751386737,ReverseDiff:90.46506091583812,ReverseDiffCompiled:9.901417128773875,Zygote:1985.5801805674976},Hi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:12244.239716444363,EnzymeRvs:2.246125514206448,FiniteDifferences:55989.000902519394,ForwardDiff:1042.3787927152628,MooncakeFwd:8089.767892899808,MooncakeRvs:4.228247643187665,ReverseDiff:41.34493916672486,ReverseDiffCompiled:5.225872598024065,Zygote:3.21421791850185},Ki={__category__:"Distributions",EnzymeFwd:4.338150689679074,EnzymeRvs:20.21283574912413,FiniteDifferences:183.3667403502806,ForwardDiff:2.347244012132622,MooncakeFwd:20.29482972991642,MooncakeRvs:5.207320090484942,ReverseDiff:67.4392225475081,ReverseDiffCompiled:8.136866814084028,Zygote:"error"},Zi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:35.72653148641964,EnzymeRvs:5.71206478172687,FiniteDifferences:"NaN",ForwardDiff:28.705055580934975,MooncakeFwd:192.12356194417757,MooncakeRvs:4.560203416974919,ReverseDiff:72.79782163725292,ReverseDiffCompiled:10.859052009514235,Zygote:"error"},Gi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:214.82976591421493,EnzymeRvs:2.8447638296279663,FiniteDifferences:3602.6851811246784,ForwardDiff:167.6838730243454,MooncakeFwd:358.4593655442333,MooncakeRvs:9.980887844425684,ReverseDiff:83.2323231644191,ReverseDiffCompiled:11.60220691866329,Zygote:"error"},Wi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:142.06804930657364,EnzymeRvs:3.719540325085413,FiniteDifferences:1088.1543337065254,ForwardDiff:64.68843610467417,MooncakeFwd:182.89331347495494,MooncakeRvs:5.267832129360434,ReverseDiff:3463.911558546616,ReverseDiffCompiled:324.30194577918274,Zygote:191.44486186335806},Xi={__category__:"DynamicPPL arXiV paper",EnzymeFwd:291.63812794806455,EnzymeRvs:.9762181687454649,FiniteDifferences:2840.942120324317,ForwardDiff:142.2152455628679,MooncakeFwd:417.04999241186607,MooncakeRvs:4.550420560872481,ReverseDiff:144.0477848953575,ReverseDiffCompiled:19.722091478282568,Zygote:5325.197233756051},Ji={__category__:"DynamicPPL arXiV paper",EnzymeFwd:221.43248204098882,EnzymeRvs:5.1094499520307,FiniteDifferences:7003.206917081619,ForwardDiff:109.0669437996005,MooncakeFwd:2749.3535611196885,MooncakeRvs:3.637576296535834,ReverseDiff:108.86450551525122,ReverseDiffCompiled:11.49438931400914,Zygote:"error"},Yi={__category__:"Core Turing syntax",EnzymeFwd:3.706969102682701,EnzymeRvs:3.1644176500769627,FiniteDifferences:59.22508962998039,ForwardDiff:1.5694999769149083,MooncakeFwd:6.736096429522036,MooncakeRvs:4.322015105464317,ReverseDiff:68.8833019674936,ReverseDiffCompiled:6.870643911062758,Zygote:4951.22174282317},Qi={__category__:"External libraries",EnzymeFwd:"error",EnzymeRvs:20.348018066117376,FiniteDifferences:250.71552116522534,ForwardDiff:3.5922594350582537,MooncakeFwd:45.50817145130279,MooncakeRvs:21.89750072466102,ReverseDiff:73.53934473948058,ReverseDiffCompiled:25.416395942451764,Zygote:"error"},ea={__category__:"Core Turing syntax",EnzymeFwd:3.3899581307401405,EnzymeRvs:2.746014804613531,FiniteDifferences:70.43663859769721,ForwardDiff:1.293452566096423,MooncakeFwd:11.083120204603581,MooncakeRvs:5.2663290156354785,ReverseDiff:48.86644373165904,ReverseDiffCompiled:4.058713182094011,Zygote:"error"},na={__category__:"Base Julia features",EnzymeFwd:5.5150369679611,EnzymeRvs:19.148092326971604,FiniteDifferences:13.792896174863387,ForwardDiff:.9789755075500326,MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ta={__category__:"Effect of model size",EnzymeFwd:6.726686186159862,EnzymeRvs:2.633686530076422,FiniteDifferences:174.85546247221745,ForwardDiff:2.7290603488117537,MooncakeFwd:28.025705404112866,MooncakeRvs:3.832484185330826,ReverseDiff:52.13128310268238,ReverseDiffCompiled:4.625777117537953,Zygote:"error"},ra={__category__:"Distributions",EnzymeFwd:"error",EnzymeRvs:4.3452240197182395,FiniteDifferences:43.12534371348045,ForwardDiff:1.023089567405702,MooncakeFwd:14.05929003593795,MooncakeRvs:9.324980090257498,ReverseDiff:20.30806533086378,ReverseDiffCompiled:1.3857023908647554,Zygote:1060.8678203613035},oa={__category__:"Effect of model size",EnzymeFwd:25.76466973886329,EnzymeRvs:4.6765435501653805,FiniteDifferences:663.691149682076,ForwardDiff:12.502158079309414,MooncakeFwd:128.43252583432155,MooncakeRvs:3.970898004434589,ReverseDiff:60.24327404593334,ReverseDiffCompiled:4.356765957446808,Zygote:"error"},sa={__category__:"Effect of model size",EnzymeFwd:52.58146441372248,EnzymeRvs:4.263523404255319,FiniteDifferences:1322.1210940703684,ForwardDiff:18.955078125,MooncakeFwd:260.55327799424026,MooncakeRvs:3.807790440551114,ReverseDiff:51.37659249193137,ReverseDiffCompiled:4.320848550780946,Zygote:"error"},ia={__category__:"Effect of model size",EnzymeFwd:246.86957091262937,EnzymeRvs:4.4897183473336115,FiniteDifferences:6531.629292274858,ForwardDiff:75.07027632561613,MooncakeFwd:1228.615011244378,MooncakeRvs:3.7379026835968263,ReverseDiff:48.04495062242234,ReverseDiffCompiled:4.382486026084642,Zygote:"error"},aa={__category__:"Distributions",EnzymeFwd:3.0428262196515625,EnzymeRvs:3.117019565800053,FiniteDifferences:31.651886952106956,ForwardDiff:1.949103684352761,MooncakeFwd:3.6391240190704592,MooncakeRvs:3.8115638809588988,ReverseDiff:72.30109640575486,ReverseDiffCompiled:6.125516318204998,Zygote:"error"},la={__category__:"Distributions",EnzymeFwd:1.9146460534057603,EnzymeRvs:7.149121301572046,FiniteDifferences:20.087615838247682,ForwardDiff:1.1943719783106141,MooncakeFwd:2.932683280130905,MooncakeRvs:7.077237851662405,ReverseDiff:41.02103642893792,ReverseDiffCompiled:3.659385493078376,Zygote:"error"},ca={__category__:"Core Turing syntax",EnzymeFwd:10.109899762642993,EnzymeRvs:4.9573236779211785,FiniteDifferences:124.69805747645688,ForwardDiff:3.6762791480994284,MooncakeFwd:8.532213616572179,MooncakeRvs:12.856881878788332,ReverseDiff:450.40419104431953,ReverseDiffCompiled:37.4060799245944,Zygote:"error"},ua={__category__:"Core Turing syntax",EnzymeFwd:12.655400455248909,EnzymeRvs:5.622957044065135,FiniteDifferences:153.48817555571335,ForwardDiff:3.6892941797905046,MooncakeFwd:9.73618461617511,MooncakeRvs:11.442830236043845,ReverseDiff:311.75065034566313,ReverseDiffCompiled:25.39542730445431,Zygote:23794.52865164495},fa={__category__:"Core Turing syntax",EnzymeFwd:3.7223315708681564,EnzymeRvs:4.33729360626266,FiniteDifferences:77.00788160385477,ForwardDiff:1.7667218316340625,MooncakeFwd:10.292662472781233,MooncakeRvs:4.775332313445521,ReverseDiff:65.44859813084112,ReverseDiffCompiled:5.354637045136632,Zygote:"error"},da={__category__:"Core Turing syntax",EnzymeFwd:10.561259864651172,EnzymeRvs:5.6681369118013825,FiniteDifferences:150.02802250291901,ForwardDiff:3.6372555506362367,MooncakeFwd:9.154232338811312,MooncakeRvs:11.61101178752159,ReverseDiff:302.4141177703635,ReverseDiffCompiled:25.14963054187192,Zygote:39791.6145354841},_a={__category__:"Distributions",EnzymeFwd:"error",EnzymeRvs:"error",FiniteDifferences:27.119183256763655,ForwardDiff:"NaN",MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:"NaN",ReverseDiffCompiled:5.148468578904874,Zygote:3561.8262845514673},ma={__category__:"Distributions",EnzymeFwd:12.025600131987789,EnzymeRvs:4.653556635237693,FiniteDifferences:154.6559311445825,ForwardDiff:3.3383193761425036,MooncakeFwd:9.17965161410334,MooncakeRvs:10.274207640148553,ReverseDiff:174.6072864099159,ReverseDiffCompiled:15.126427775659812,Zygote:17858.424562279357},pa={__category__:"External libraries",EnzymeFwd:"wrong",EnzymeRvs:80.33841888749778,FiniteDifferences:62.33515540464908,ForwardDiff:5.502004677581022,MooncakeFwd:"error",MooncakeRvs:51.86419797622698,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ga={__category__:"PosteriorDB",EnzymeFwd:6.689779524867544,EnzymeRvs:4.37427258805513,FiniteDifferences:167.83546914623838,ForwardDiff:3.8790333748788255,MooncakeFwd:28.131857653669336,MooncakeRvs:4.799169640406259,ReverseDiff:126.95240392900223,ReverseDiffCompiled:9.148046835228238,Zygote:"error"},va={__category__:"PosteriorDB",EnzymeFwd:6.274658312390264,EnzymeRvs:4.565019980806967,FiniteDifferences:168.5436255389037,ForwardDiff:3.541627400921817,MooncakeFwd:25.429953375986933,MooncakeRvs:4.3690173936109735,ReverseDiff:106.86521917247029,ReverseDiffCompiled:8.539362166885104,Zygote:"error"},ha={__category__:"Core Turing syntax",EnzymeFwd:6.291370942215033,EnzymeRvs:3.4935921421435046,FiniteDifferences:116.83672077479197,ForwardDiff:2.1867137782336963,MooncakeFwd:10.219452611150922,MooncakeRvs:6.802159881122372,ReverseDiff:107.65717485745317,ReverseDiffCompiled:8.76492833614368,Zygote:15398.289576602618},ba={__category__:"Distributions",EnzymeFwd:8.352569974554708,EnzymeRvs:9.523485455030691,FiniteDifferences:44.71009866511898,ForwardDiff:1.035377608304205,MooncakeFwd:15.898589494163424,MooncakeRvs:10.210877252062637,ReverseDiff:31.749974494133657,ReverseDiffCompiled:2.93602814726424,Zygote:409.58108698819757},ya={__category__:"Core Turing syntax",EnzymeFwd:5.056613484302624,EnzymeRvs:3.6928522220339937,FiniteDifferences:72.00301204819277,ForwardDiff:1.614393649692301,MooncakeFwd:7.499171548275797,MooncakeRvs:5.600914571487292,ReverseDiff:131.88950881396542,ReverseDiffCompiled:11.282628663555617,Zygote:"error"},wa={__category__:"Base Julia features",EnzymeFwd:6.874979025037689,EnzymeRvs:3.4608597343997944,FiniteDifferences:79.57275246011274,ForwardDiff:"error",MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Ea={abstractgps:Di,assume_beta:Ri,control_flow:xi,delaydiffeq:Mi,demo_assume_dot_observe:Ti,demo_assume_dot_observe_literal:Fi,demo_assume_index_observe:Si,demo_assume_matrix_observe_matrix_index:Ni,demo_assume_multivariate_observe:Ci,demo_assume_multivariate_observe_literal:Ai,demo_assume_observe_literal:ki,demo_assume_submodel_observe_index_literal:Oi,assume_dirichlet:Ii,demo_dot_assume_observe:Li,demo_dot_assume_observe_index:Pi,demo_dot_assume_observe_index_literal:zi,demo_dot_assume_observe_matrix_index:Vi,demo_dot_assume_observe_submodel:Bi,dot_assume:ji,dot_observe:qi,dppl_gauss_unknown:$i,dppl_hier_poisson:Ui,dppl_high_dim_gauss:Hi,assume_lkjcholu:Ki,dppl_hmm_semisup:Zi,dppl_lda:Gi,dppl_logistic_regression:Wi,dppl_naive_bayes:Xi,dppl_sto_volatility:Ji,dynamic_constraint:Yi,lux_nn:Qi,multiple_constraints_same_var:ea,multithreaded:na,n010:ta,assume_mvnormal:ra,n050:oa,n100:sa,n500:ia,observe_bernoulli:aa,observe_categorical:la,observe_index:ca,observe_literal:ua,observe_multivariate:fa,observe_submodel:da,observe_von_mises:_a,assume_normal:ma,ordinarydiffeq:pa,pdb_eight_schools_centered:ga,pdb_eight_schools_noncentered:va,assume_submodel:ha,assume_wishart:ba,broadcast_macro:ya,call_C:wa},Da=`#=
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

model = assume_beta()`,xa=`#= 
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

model = control_flow()`,Ma=`#=
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

model = delaydiffeq(ddedata, prob_dde)`,Ta=`@model function demo_assume_dot_observe(x = [1.5, 2.0])
    # \`assume\` and \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    x .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe()`,Fa=`@model function demo_assume_dot_observe_literal()
    # \`assume\` and literal \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    [1.5, 2.0] .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe_literal()`,Sa=`using LinearAlgebra: Diagonal

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

model = demo_assume_index_observe()`,Na=`using LinearAlgebra: Diagonal

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

model = demo_assume_matrix_observe_matrix_index()`,Ca=`using LinearAlgebra: Diagonal

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

model = demo_assume_multivariate_observe_literal()`,ka=`@model function demo_assume_observe_literal()
    # univariate \`assume\` and literal \`observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    1.5 ~ Normal(m, sqrt(s))
    2.0 ~ Normal(m, sqrt(s))
end

model = demo_assume_observe_literal()`,Oa=`@model function _prior_dot_assume(::Type{TV} = Vector{Float64}) where {TV}
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

model = demo_assume_submodel_observe_index_literal()`,Ia=`@model function assume_dirichlet()
    a ~ Dirichlet([1.0, 5.0])
end

model = assume_dirichlet()`,La=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe()`,Pa=`@model function demo_dot_assume_observe_index(
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

model = demo_dot_assume_observe_index()`,za=`@model function demo_dot_assume_observe_index_literal(
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

model = demo_dot_assume_observe_index_literal()`,Va=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe_matrix_index()`,Ba=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe_submodel()`,ja=`@model function dot_assume(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 5)
    a .~ Normal()
end

model = dot_assume()`,qa=`@model function dot_observe(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    x .~ Normal(a)
end

model = dot_observe()`,$a=`n = 10_000
s = abs(rand()) + 0.5
y = randn() .+ s * randn(n)

@model function dppl_gauss_unknown(y)
    N = length(y)
    m ~ Normal(0, 1)
    s ~ truncated(Cauchy(0, 5); lower = 0)
    y ~ product_distribution(fill(Normal(m, s), N))
end

model = dppl_gauss_unknown(y)`,Ua=`using Turing: LogPoisson

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

model = dppl_hier_poisson(y, x, idx, ns)`,Ha=`@model function dppl_high_dim_gauss(D)
    m ~ product_distribution(fill(Normal(0, 1), D))
end

model = dppl_high_dim_gauss(10_000)`,Ka=`@model function assume_lkjcholu()
    a ~ LKJCholesky(5, 1.0, 'U')
end

model = assume_lkjcholu()`,Za=`using StatsFuns: logsumexp

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

model = dppl_hmm_semisup(K, T, T_unsup, w, z, u, alpha, beta)`,Ga=`v = 100      # words
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

model = dppl_lda(k, m, w, doc, alpha, beta)`,Wa=`using Random: Xoshiro
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

model = dppl_logistic_regression(X', y)`,Xa=`using MLDatasets: MNIST
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

model = dppl_naive_bayes(image_vec, labels, C, D)`,Ja=`using DelimitedFiles: readdlm

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

model = dppl_sto_volatility(y)`,Ya=`@model function dynamic_constraint()
    a ~ Normal()
    b ~ truncated(Normal(); lower = a)
end

model = dynamic_constraint()`,Qa=`#=
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

model = lux_nn(reduce(hcat, xs), ts)`,el=`@model function multiple_constraints_same_var(::Type{TV} = Vector{Float64}) where {TV}
    x = TV(undef, 5)
    x[1] ~ Normal()
    x[2] ~ InverseGamma(2, 3)
    x[3] ~ truncated(Normal(), -5, 20)
    x[4:5] ~ Dirichlet([1.0, 2.0])
end

model = multiple_constraints_same_var()`,nl=`#=
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
model = setthreadsafe(multithreaded(x), true)`,tl=`@model function n010(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 10)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n010()`,rl=`@model function assume_mvnormal()
    a ~ MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0])
end

model = assume_mvnormal()`,ol=`@model function n050(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 50)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n050()`,sl=`@model function n100(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 100)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n100()`,il=`@model function n500(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 500)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n500()`,al=`@model function observe_bernoulli(x = [true, false, true])
    a ~ Beta(2, 2)
    for i in eachindex(x)
        x[i] ~ Bernoulli(a)
    end
end

model = observe_bernoulli()`,ll=`@model function observe_categorical(x = [1, 2, 1, 2, 2])
    a ~ Dirichlet(2, 3)
    for i in eachindex(x)
        x[i] ~ Categorical(a)
    end
end

model = observe_categorical()`,cl=`@model function observe_index(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end

model = observe_index()`,ul=`@model function observe_literal()
    a ~ Normal()
    1.5 ~ Normal(a)
end

model = observe_literal()`,fl=`@model function observe_multivariate(
    x = [1.5, 2.0, 2.5],
    ::Type{TV} = Vector{Float64},
) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    x ~ MvNormal(a, I)
end

model = observe_multivariate()`,dl=`@model function inner2(x, a)
    x ~ Normal(a)
end
@model function observe_submodel(x = 1.5)
    a ~ Normal()
    _ignore ~ to_submodel(inner2(x, a))
end

model = observe_submodel()`,_l=`@model function observe_von_mises(x)
    a ~ InverseGamma(2, 3)
    x ~ VonMises(0, a)
end

model = observe_von_mises(0.4)`,ml=`@model function assume_normal()
    a ~ Normal()
end

model = assume_normal()`,pl=`# See https://turinglang.org/docs/tutorials/bayesian-differential-equations/.

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

model = ordinarydiffeq(odedata, prob)`,gl=`J = 8
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

model = pdb_eight_schools_centered(J, y, sigma)`,vl=`J = 8
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

model = pdb_eight_schools_noncentered(J, y, sigma)`,hl=`@model function inner1()
    return a ~ Normal()
end
@model function assume_submodel()
    a ~ to_submodel(inner1())
    x ~ Normal(a)
end

model = assume_submodel()`,bl=`@model function assume_wishart()
    a ~ Wishart(7, [1.0 0.5; 0.5 1.0])
end

model = assume_wishart()`,yl=`@model function broadcast_macro(x = [1.5, 2.0], ::Type{TV} = Vector{Float64}) where {TV}
    a ~ Normal(0, 1)
    b ~ InverseGamma(2, 3)
    @. x ~ Normal(a, $(sqrt(b)))
end

model = broadcast_macro()`,wl=`@model function call_C(y = 0.0)
    x ~ Normal(0, 1)

    # Call C library abs function
    x_abs = @ccall fabs(x::Cdouble)::Cdouble

    y ~ Normal(0, x_abs)
end

model = call_C()`,El={abstractgps:Da,assume_beta:Ra,control_flow:xa,delaydiffeq:Ma,demo_assume_dot_observe:Ta,demo_assume_dot_observe_literal:Fa,demo_assume_index_observe:Sa,demo_assume_matrix_observe_matrix_index:Na,demo_assume_multivariate_observe:Ca,demo_assume_multivariate_observe_literal:Aa,demo_assume_observe_literal:ka,demo_assume_submodel_observe_index_literal:Oa,assume_dirichlet:Ia,demo_dot_assume_observe:La,demo_dot_assume_observe_index:Pa,demo_dot_assume_observe_index_literal:za,demo_dot_assume_observe_matrix_index:Va,demo_dot_assume_observe_submodel:Ba,dot_assume:ja,dot_observe:qa,dppl_gauss_unknown:$a,dppl_hier_poisson:Ua,dppl_high_dim_gauss:Ha,assume_lkjcholu:Ka,dppl_hmm_semisup:Za,dppl_lda:Ga,dppl_logistic_regression:Wa,dppl_naive_bayes:Xa,dppl_sto_volatility:Ja,dynamic_constraint:Ya,lux_nn:Qa,multiple_constraints_same_var:el,multithreaded:nl,n010:tl,assume_mvnormal:rl,n050:ol,n100:sl,n500:il,observe_bernoulli:al,observe_categorical:ll,observe_index:cl,observe_literal:ul,observe_multivariate:fl,observe_submodel:dl,observe_von_mises:_l,assume_normal:ml,ordinarydiffeq:pl,pdb_eight_schools_centered:gl,pdb_eight_schools_noncentered:vl,assume_submodel:hl,assume_wishart:bl,broadcast_macro:yl,call_C:wl},Dl="1.20.0",Rl="1.5.0",xl="0.5.24",Ml="5.10.0",Tl="0.13.6",Fl="0.4.5",Sl="0.1.43",Nl="4.4.0",Cl="0.8.3",Al="0.8.9",kl="0.7.1",Ol="0.6.0",Il="1.1.3",Ll="2.5.0",Pl="1.1.2",zl="0.4.0",Vl="0.5.4",Bl="3.5.1+1",jl="7.22.0",ql="1.12.2",$l="1.11.0",Ul="1.1.2",Hl="0.5.2",Kl="1.1.0",Zl="0.4.8",Gl="0.5.1",Wl="0.4.6",Xl="1.11.0",Jl="0.1.1",Yl="0.15.14",Ql="0.1.9",ec="0.1.6",nc="1.6.0",tc="1.2.2",rc="0.5.0",oc="0.2.7",sc="0.10.15",ic="0.3.14",ac="1.72.6",lc="1.26.0",cc="1.3.1",uc="0.1.10",fc="0.10.43",dc="0.10.4+0",_c="0.1.13",mc="0.7.8",pc="3.31.0",gc="0.12.1",vc="0.11.0",hc="0.13.1",bc="1.0.3",yc="0.2.4",wc="0.3.1",Ec="1.0.0",Dc="4.18.1",Rc="1.1.1+0",xc="0.1.2",Mc="0.2.3",Tc="2.5.0",Fc="0.1.2",Sc="1.6.0",Nc="0.1.3",Cc="0.3.1",Ac="4.1.1",kc="1.16.0",Oc="0.7.13",Ic="1.8.1",Lc="0.18.22",Pc="1.0.0",zc="1.11.0",Vc="0.1.2",Bc="5.63.0",jc="1.9.1",qc="0.4.0",$c="6.192.0",Uc="4.10.1",Hc="5.24.1",Kc="1.1.0",Zc="1.15.1",Gc="0.7.12",Wc="0.4.26",Xc="0.10.12",Jc="1.11.0",Yc="0.25.122",Qc="0.6.58",eu="0.9.5",nu="1.6.0",tu="0.39.2",ru="2.0.0",ou="1.0.5",su="0.13.109",iu="0.8.17",au="0.0.229+0",lu="0.1.11",cu="1.28.0",uu="0.1.10",fu="0.10.14",du="1.10.0",_u="3.3.11+0",mu="0.2.2",pu="0.1.1",gu="0.3.5",vu="0.3.2",hu="1.1.0",bu="1.2.0",yu="1.17.1",wu="0.9.24",Eu="1.11.0",Du="1.15.0",Ru="2.29.0",xu="0.12.33",Mu="0.8.5",Tu="1.3.0",Fu="0.1.2",Su="1.1.3",Nu="0.1.3",Cu="0.5.2",Au="1.11.0",ku="0.2.0",Ou="1.7.5",Iu="0.6.2",Lu="0.5.6",Pu="1.4.0",zu="1.13.1",Vu="0.17.2",Bu="1.14.6+0",ju="1.10.19",qu="0.2.0",$u="2.12.2+0",Uu="0.3.28",Hu="0.4.15",Ku="0.1.1",Zu="0.1.7",Gu="0.10.5",Wu="0.3.8",Xu="0.1.5",Ju="0.3.1",Yu="1.4.5",Qu="2025.2.0+0",ef="1.11.0",nf="0.7.0",tf="0.16.2",rf="0.7.13",of="0.1.17",sf="1.3.1",af="0.2.6",lf="1.10.0",cf="1.0.0",uf="0.5.15",ff="1.7.1",df="1.14.3",_f="0.2.1",mf="0.2.4",pf="0.9.39",gf="0.6.10",vf="0.10.66",hf="0.10.3",bf="9.4.4",yf="0.0.38+0",wf="1.4.0",Ef="0.1.17",Df="2.9.4",Rf="1.11.0",xf="0.3.1",Mf="0.2.1",Tf="0.6.4",Ff="8.6.0+0",Sf="1.11.0",Nf="1.7.2+0",Cf="1.11.0+1",Af="0.9.1+6",kf="1.11.0",Of="1.18.0+0",If="0.9.10",Lf="0.1.4",Pf="7.5.1",zf="1.11.0",Vf="3.50.2",Bf="2.2.0",jf="1.13.1",qf="0.3.29",$f="1.11.0",Uf="1.2.0",Hf="1.21.1",Kf="1.4.2",Zf="1.13.1",Gf="0.10.7",Wf="7.6.0",Xf="0.3.15",Jf="2025.2.0+0",Yf="1.0.0",Qf="1.16.0",ed="0.7.18",nd="1.12.1",td="0.4.17",rd="0.4.8",od="4.3.2+0",sd="0.1.11",id="5.5.4+0",ad="0.5.16",ld="0.1.8",cd="0.4.3",ud="1.11.0",fd="0.1.4",dd="1.1.9",_d="2.28.6+0",md="0.2.0",pd="10.1.4+3",gd="1.2.0",vd="2.1.0",hd="1.11.0",bd="0.4.184",yd="0.3.4",wd="0.3.7",Ed="2023.12.12",Dd="0.2.4",Rd="0.10.3",xd="7.10.0",Md="0.9.32",Td="0.4.3",Fd="1.1.3",Sd="0.1.5",Nd="0.10.5",Cd="1.0.0",Ad="1.2.0",kd="4.12.0",Od="2.5.0",Id="1.10.0",Ld="1.11.0",Pd="1.6.0",zd="0.5.0",Vd="1.17.0",Bd="0.3.27+1",jd="0.8.5+0",qd="5.0.9+0",$d="1.6.1",Ud="3.5.4+0",Hd="0.5.6+0",Kd="1.13.3",Zd="0.4.7",Gd="5.2.0",Wd="4.0.2",Xd="0.4.8",Jd="1.8.1",Yd="6.103.0",Qd="1.5.0",e1="1.10.1",n1="1.36.0",t1="1.8.0",r1="1.16.1",o1="1.4.0",s1="1.8.0",i1="1.9.0",a1="1.16.0",l1="1.4.0",c1="1.5.0",u1="1.5.0",f1="1.7.0",d1="1.6.0",_1="1.6.0",m1="1.7.0",p1="1.15.0",g1="1.4.0",v1="1.6.0",h1="1.4.0",b1="1.4.0",y1="1.5.0",w1="1.18.1",E1="1.7.0",D1="1.7.0",R1="1.6.0",x1="1.4.0",M1="1.7.0",T1="1.5.0",F1="1.6.0",S1="0.11.36",N1="1.0.2",C1="0.5.12",A1="2.8.3",k1="1.2.1",O1="0.3.6",I1="1.11.0",L1="0.4.7",P1="0.7.18",z1="0.2.2",V1="1.4.3",B1="0.2.4",j1="0.4.34",q1="1.2.1",$1="1.5.0",U1="0.2.0",H1="3.1.2",K1="1.11.0",Z1="0.1.6",G1="1.11.0",W1="1.3.0",X1="2.11.2",J1="1.11.0",Y1="1.11.0",Q1="1.7.1",e0="1.6.0",n0="0.3.2",t0="0.4.5",r0="0.1.0",o0="1.3.4",s0="3.39.0",i0="1.2.2",a0="1.3.1",l0="1.1.1",c0="1.16.1",u0="1.4.2",f0="0.9.0",d0="0.5.1+0",_0="2.2.10",m0="0.5.16",p0="0.7.0",g0="0.1.0",v0="0.6.1",h0="2.128.0",b0="0.1.11",y0="1.7.1",w0="1.14.0",E0="1.0.0",D0="7.90.0",R0="1.7.0",x0="3.0.0",M0="1.5.0",T0="1.3.0",F0="1.4.8",S0="1.11.0",N0="1.1.2",C0="1.11.0",A0="0.1.0",k0="1.2.0",O0="2.9.0",I0="0.9.5",L0="1.1.0",P0="1.11.0",z0="1.2.2",V0="1.11.0",B0="1.1.3",j0="0.1.2",q0="0.4.23",$0="2.6.1",U0="0.1.15",H0="0.1.2",K0="1.3.1",Z0="1.8.0",G0="1.9.15",W0="1.4.4",X0="3.5.0",J0="1.11.1",Y0="1.8.0",Q0="0.34.9",e_="1.5.2",n_="0.5.8",t_="0.4.1",r_="0.3.7",o_="0.4.2",s_="0.7.2",i_="0.3.1",a_="1.11.0",l_="2.6.0",c_="1.11.0",u_=null,f_="7.7.0+0",d_="0.3.46",__="1.0.3",m_="1.0.1",p_="1.12.1",g_="1.10.0",v_="0.1.1",h_="0.1.7",b_="1.11.0",y_="0.5.5",w_="0.5.29",E_="0.2.38",D_="0.1.6",R_="0.11.3",x_="0.4.85",M_="1.4.0",T_="0.42.0",F_="1.6.1",S_="1.11.0",N_="1.11.0",C_="1.27.0",A_="1.0.0",k_="0.3.0",O_="1.4.2",I_="1.2.2",L_="1.0.0",P_="1.6.1",z_="2.13.9+0",V_="0.18.1+0",B_="0.10.1",j_="1.2.13+1",q_="0.7.10",$_="0.2.7",U_="1.1.4+0",H_="5.11.0+0",K_="1.59.0+0",Z_="2022.0.0+1",G_="17.4.0+2",W_={ADTypes:Dl,AbstractFFTs:Rl,AbstractGPs:xl,AbstractMCMC:Ml,AbstractPPL:Tl,AbstractTrees:Fl,Accessors:Sl,Adapt:Nl,AdvancedHMC:Cl,AdvancedMH:Al,AdvancedPS:kl,AdvancedVI:Ol,AliasTables:Il,ArgCheck:Ll,ArgTools:Pl,ArnoldiMethod:zl,Arpack:Vl,Arpack_jll:Bl,ArrayInterface:jl,ArrayLayouts:ql,Artifacts:$l,Atomix:Ul,AtomsBase:Hl,AxisAlgorithms:Kl,AxisArrays:Zl,BFloat16s:Gl,BangBang:Wl,Base64:Xl,Baselet:Jl,Bijectors:Yl,BitFlags:Ql,BitTwiddlingConvenienceFunctions:ec,BracketingNonlinearSolve:nc,BufferedStreams:tc,CEnum:rc,CPUSummary:oc,CSV:sc,Cassette:ic,ChainRules:ac,ChainRulesCore:lc,Chairmarks:cc,ChangesOfVariables:uc,Chemfiles:fc,Chemfiles_jll:dc,CloseOpenIntervals:_c,CodecZlib:mc,ColorSchemes:pc,ColorTypes:gc,ColorVectorSpace:vc,Colors:hc,Combinatorics:bc,CommonSolve:yc,CommonSubexpressions:wc,CommonWorldInvalidations:Ec,Compat:Dc,CompilerSupportLibraries_jll:Rc,CompositionsBase:xc,ConcreteStructs:Mc,ConcurrentUtilities:Tc,ConsoleProgressMonitor:Fc,ConstructionBase:Sc,ContextVariablesX:Nc,CpuId:Cc,Crayons:Ac,DataAPI:kc,DataDeps:Oc,DataFrames:Ic,DataStructures:Lc,DataValueInterfaces:Pc,Dates:zc,DefineSingletons:Vc,DelayDiffEq:Bc,DelimitedFiles:jc,DensityInterface:qc,DiffEqBase:$c,DiffEqCallbacks:Uc,DiffEqNoiseProcess:Hc,DiffResults:Kc,DiffRules:Zc,DifferentiationInterface:Gc,DispatchDoctor:Wc,Distances:Xc,Distributed:Jc,Distributions:Yc,DistributionsAD:Qc,DocStringExtensions:eu,Downloads:nu,DynamicPPL:tu,EllipticalSliceSampling:ru,EnumX:ou,Enzyme:su,EnzymeCore:iu,Enzyme_jll:au,ExceptionUnwrapping:lu,ExponentialUtilities:cu,ExprTools:uu,ExproniconLite:fu,FFTW:du,FFTW_jll:_u,FLoops:mu,FLoopsBase:pu,FastBroadcast:gu,FastClosures:vu,FastGaussQuadrature:hu,FastPower:bu,FileIO:yu,FilePathsBase:wu,FileWatching:Eu,FillArrays:Du,FiniteDiff:Ru,FiniteDifferences:xu,FixedPointNumbers:Mu,ForwardDiff:Tu,FunctionProperties:Fu,FunctionWrappers:Su,FunctionWrappersWrappers:Nu,Functors:Cu,Future:Au,GPUArraysCore:ku,GPUCompiler:Ou,GZip:Iu,GenericSchur:Lu,Glob:Pu,Graphs:zu,HDF5:Vu,HDF5_jll:Bu,HTTP:ju,HashArrayMappedTries:qu,Hwloc_jll:$u,HypergeometricFunctions:Uu,IRTools:Hu,IfElse:Ku,ImageBase:Zu,ImageCore:Gu,ImageShow:Wu,Inflate:Xu,InitialValues:Ju,InlineStrings:Yu,IntelOpenMP_jll:Qu,InteractiveUtils:ef,InternedStrings:nf,Interpolations:tf,IntervalSets:rf,InverseFunctions:of,InvertedIndices:sf,IrrationalConstants:af,IterTools:lf,IteratorInterfaceExtensions:cf,JLD2:uf,JLLWrappers:ff,JSON:"1.3.0",JSON3:df,Jieko:_f,JuliaVariables:mf,KernelAbstractions:pf,KernelDensity:gf,KernelFunctions:vf,Krylov:hf,LLVM:bf,LLVMExtra_jll:yf,LaTeXStrings:wf,LayoutPointers:Ef,LazyArrays:Df,LazyArtifacts:Rf,LazyModules:xf,LeftChildRightSiblingTrees:Mf,LibCURL:Tf,LibCURL_jll:Ff,LibGit2:Sf,LibGit2_jll:Nf,LibSSH2_jll:Cf,LibTracyClient_jll:Af,Libdl:kf,Libiconv_jll:Of,Libtask:If,LineSearch:Lf,LineSearches:Pf,LinearAlgebra:zf,LinearSolve:Vf,LogDensityProblems:Bf,LogDensityProblemsAD:jf,LogExpFunctions:qf,Logging:$f,LoggingExtras:Uf,Lux:Hf,LuxCore:Kf,LuxLib:Zf,MAT:Gf,MCMCChains:Wf,MCMCDiagnosticTools:Xf,MKL_jll:Jf,MLCore:Yf,MLDataDevices:Qf,MLDatasets:ed,MLJModelInterface:nd,MLStyle:td,MLUtils:rd,MPICH_jll:od,MPIPreferences:sd,MPItrampoline_jll:id,MacroTools:ad,ManualMemory:ld,MappedArrays:cd,Markdown:ud,MaybeInplace:fd,MbedTLS:dd,MbedTLS_jll:_d,MicroCollections:md,MicrosoftMPI_jll:pd,Missings:gd,MistyClosures:vd,Mmap:hd,Mooncake:bd,MosaicViews:yd,Moshi:wd,MozillaCACerts_jll:Ed,MuladdMacro:Dd,MultivariateStats:Rd,NLSolversBase:xd,NNlib:Md,NPZ:Td,NaNMath:Fd,NameResolution:Sd,NamedArrays:Nd,NaturalSort:Cd,NetworkOptions:Ad,NonlinearSolve:kd,NonlinearSolveBase:Od,NonlinearSolveFirstOrder:Id,NonlinearSolveQuasiNewton:Ld,NonlinearSolveSpectralMethods:Pd,ObjectFile:zd,OffsetArrays:Vd,OpenBLAS_jll:Bd,OpenLibm_jll:jd,OpenMPI_jll:qd,OpenSSL:$d,OpenSSL_jll:Ud,OpenSpecFun_jll:Hd,Optim:Kd,Optimisers:Zd,Optimization:Gd,OptimizationBase:Wd,OptimizationOptimJL:Xd,OrderedCollections:Jd,OrdinaryDiffEq:Yd,OrdinaryDiffEqAdamsBashforthMoulton:Qd,OrdinaryDiffEqBDF:e1,OrdinaryDiffEqCore:n1,OrdinaryDiffEqDefault:t1,OrdinaryDiffEqDifferentiation:r1,OrdinaryDiffEqExplicitRK:o1,OrdinaryDiffEqExponentialRK:s1,OrdinaryDiffEqExtrapolation:i1,OrdinaryDiffEqFIRK:a1,OrdinaryDiffEqFeagin:l1,OrdinaryDiffEqFunctionMap:c1,OrdinaryDiffEqHighOrderRK:u1,OrdinaryDiffEqIMEXMultistep:f1,OrdinaryDiffEqLinear:d1,OrdinaryDiffEqLowOrderRK:_1,OrdinaryDiffEqLowStorageRK:m1,OrdinaryDiffEqNonlinearSolve:p1,OrdinaryDiffEqNordsieck:g1,OrdinaryDiffEqPDIRK:v1,OrdinaryDiffEqPRK:h1,OrdinaryDiffEqQPRK:b1,OrdinaryDiffEqRKN:y1,OrdinaryDiffEqRosenbrock:w1,OrdinaryDiffEqSDIRK:E1,OrdinaryDiffEqSSPRK:D1,OrdinaryDiffEqStabilizedIRK:R1,OrdinaryDiffEqStabilizedRK:x1,OrdinaryDiffEqSymplecticRK:M1,OrdinaryDiffEqTsit5:T1,OrdinaryDiffEqVerner:F1,PDMats:S1,PackageExtensionCompat:N1,PaddedViews:C1,Parsers:A1,PeriodicTable:k1,Pickle:O1,Pkg:I1,PoissonRandom:L1,Polyester:P1,PolyesterWeave:z1,PooledArrays:V1,PositiveFactorizations:B1,PreallocationTools:j1,PrecompileTools:q1,Preferences:$1,PrettyPrint:U1,PrettyTables:H1,Printf:K1,ProgressLogging:Z1,ProgressMeter:G1,PtrArrays:W1,QuadGK:X1,REPL:J1,Random:Y1,Random123:Q1,RandomNumbers:e0,RangeArrays:n0,Ratios:t0,RealDot:r0,RecipesBase:o0,RecursiveArrayTools:s0,Reexport:i0,Requires:a0,ResettableStacks:l0,ReverseDiff:c0,Richardson:u0,Rmath:f0,Rmath_jll:d0,Roots:_0,RuntimeGeneratedFunctions:m0,SHA:p0,SIMDTypes:g0,SSMProblems:v0,SciMLBase:h0,SciMLJacobianOperators:b0,SciMLLogging:y0,SciMLOperators:w0,SciMLPublic:E0,SciMLSensitivity:D0,SciMLStructures:R0,ScientificTypesBase:x0,ScopedValues:M0,Scratch:T0,SentinelArrays:F0,Serialization:S0,Setfield:N0,SharedArrays:C0,ShowCases:A0,SimpleBufferStream:k0,SimpleNonlinearSolve:O0,SimpleTraits:I0,SimpleUnPack:L0,Sockets:P0,SortingAlgorithms:z0,SparseArrays:V0,SparseConnectivityTracer:B0,SparseInverseSubset:j0,SparseMatrixColorings:q0,SpecialFunctions:$0,SplittablesBase:U0,StackViews:H0,Static:K0,StaticArrayInterface:Z0,StaticArrays:G0,StaticArraysCore:W0,StatisticalTraits:X0,Statistics:J0,StatsAPI:Y0,StatsBase:Q0,StatsFuns:e_,StrideArraysCore:n_,StridedViews:t_,StringEncodings:r_,StringManipulation:o_,StructArrays:s_,StructIO:i_,StructTypes:a_,StructUtils:l_,StyledStrings:c_,SuiteSparse:u_,SuiteSparse_jll:f_,SymbolicIndexingInterface:d_,TOML:__,TableTraits:m_,Tables:p_,Tar:g_,TensorCore:v_,TerminalLoggers:h_,Test:b_,ThreadingUtilities:y_,TimerOutputs:w_,Tracker:E_,Tracy:D_,TranscodingStreams:R_,Transducers:x_,TruncatedStacktraces:M_,Turing:T_,URIs:F_,UUIDs:S_,Unicode:N_,Unitful:C_,UnitfulAtomic:A_,UnsafeAtomics:k_,WeakRefStrings:O_,WeightInitializers:I_,WoodburyMatrices:L_,WorkerUtilities:P_,XML2_jll:z_,Xorg_libpciaccess_jll:V_,ZipFile:B_,Zlib_jll:j_,Zygote:q_,ZygoteRules:$_,libaec_jll:U_,libblastrampoline_jll:H_,nghttp2_jll:K_,oneTBB_jll:Z_,p7zip_jll:G_};function wt(e){return[...e.entries()].sort(([n,t],[r,i])=>n.localeCompare(r))}var X_=pe('<tr><td class="svelte-7y9k9c"> </td><td class="version svelte-7y9k9c"> </td></tr>'),J_=pe('<table id="manifest" class="svelte-7y9k9c"><thead><tr><th class="svelte-7y9k9c">Package</th><th class="svelte-7y9k9c">Version</th></tr></thead><tbody></tbody></table>');function Y_(e,n){hn(n,!1);let t=new Map;for(const[s,l]of Object.entries(W_))t.set(s,l===""?null:l);Lt();var r=J_(),i=we(W(r));_n(i,5,()=>wt(t),dn,(s,l)=>{let f=()=>O(l)[0],a=()=>O(l)[1];var c=X_(),p=W(c),_=W(p),u=we(p),g=W(u);Ee(()=>{Ve(_,f()),Ve(g,a()===null?"":`v${a()}`)}),re(s,c)}),re(e,r),bn()}function Q_(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ft,_r;function em(){if(_r)return ft;_r=1;function e(o){return o instanceof Map?o.clear=o.delete=o.set=function(){throw new Error("map is read-only")}:o instanceof Set&&(o.add=o.clear=o.delete=function(){throw new Error("set is read-only")}),Object.freeze(o),Object.getOwnPropertyNames(o).forEach(d=>{const h=o[d],N=typeof h;(N==="object"||N==="function")&&!Object.isFrozen(h)&&e(h)}),o}class n{constructor(d){d.data===void 0&&(d.data={}),this.data=d.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(o,...d){const h=Object.create(null);for(const N in o)h[N]=o[N];return d.forEach(function(N){for(const H in N)h[H]=N[H]}),h}const i="</span>",s=o=>!!o.scope,l=(o,{prefix:d})=>{if(o.startsWith("language:"))return o.replace("language:","language-");if(o.includes(".")){const h=o.split(".");return[`${d}${h.shift()}`,...h.map((N,H)=>`${N}${"_".repeat(H+1)}`)].join(" ")}return`${d}${o}`};class f{constructor(d,h){this.buffer="",this.classPrefix=h.classPrefix,d.walk(this)}addText(d){this.buffer+=t(d)}openNode(d){if(!s(d))return;const h=l(d.scope,{prefix:this.classPrefix});this.span(h)}closeNode(d){s(d)&&(this.buffer+=i)}value(){return this.buffer}span(d){this.buffer+=`<span class="${d}">`}}const a=(o={})=>{const d={children:[]};return Object.assign(d,o),d};class c{constructor(){this.rootNode=a(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(d){this.top.children.push(d)}openNode(d){const h=a({scope:d});this.add(h),this.stack.push(h)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(d){return this.constructor._walk(d,this.rootNode)}static _walk(d,h){return typeof h=="string"?d.addText(h):h.children&&(d.openNode(h),h.children.forEach(N=>this._walk(d,N)),d.closeNode(h)),d}static _collapse(d){typeof d!="string"&&d.children&&(d.children.every(h=>typeof h=="string")?d.children=[d.children.join("")]:d.children.forEach(h=>{c._collapse(h)}))}}class p extends c{constructor(d){super(),this.options=d}addText(d){d!==""&&this.add(d)}startScope(d){this.openNode(d)}endScope(){this.closeNode()}__addSublanguage(d,h){const N=d.root;h&&(N.scope=`language:${h}`),this.add(N)}toHTML(){return new f(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(o){return o?typeof o=="string"?o:o.source:null}function u(o){return F("(?=",o,")")}function g(o){return F("(?:",o,")*")}function v(o){return F("(?:",o,")?")}function F(...o){return o.map(h=>_(h)).join("")}function A(o){const d=o[o.length-1];return typeof d=="object"&&d.constructor===Object?(o.splice(o.length-1,1),d):{}}function z(...o){return"("+(A(o).capture?"":"?:")+o.map(N=>_(N)).join("|")+")"}function U(o){return new RegExp(o.toString()+"|").exec("").length-1}function M(o,d){const h=o&&o.exec(d);return h&&h.index===0}const D=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function x(o,{joinWith:d}){let h=0;return o.map(N=>{h+=1;const H=h;let K=_(N),w="";for(;K.length>0;){const y=D.exec(K);if(!y){w+=K;break}w+=K.substring(0,y.index),K=K.substring(y.index+y[0].length),y[0][0]==="\\"&&y[1]?w+="\\"+String(Number(y[1])+H):(w+=y[0],y[0]==="("&&h++)}return w}).map(N=>`(${N})`).join(d)}const ee=/\b\B/,S="[a-zA-Z]\\w*",$="[a-zA-Z_]\\w*",Y="\\b\\d+(\\.\\d+)?",Me="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ge="\\b(0b[01]+)",Ue="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",on=(o={})=>{const d=/^#![ ]*\//;return o.binary&&(o.begin=F(d,/.*\b/,o.binary,/\b.*/)),r({scope:"meta",begin:d,end:/$/,relevance:0,"on:begin":(h,N)=>{h.index!==0&&N.ignoreMatch()}},o)},ne={begin:"\\\\[\\s\\S]",relevance:0},ve={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ne]},Te={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ne]},Ae={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},he=function(o,d,h={}){const N=r({scope:"comment",begin:o,end:d,contains:[]},h);N.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const H=z("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return N.contains.push({begin:F(/[ ]+/,"(",H,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),N},et=he("//","$"),sn=he("/\\*","\\*/"),wn=he("#","$"),Xr={scope:"number",begin:Y,relevance:0},Jr={scope:"number",begin:Me,relevance:0},Yr={scope:"number",begin:ge,relevance:0},Qr={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ne,{begin:/\[/,end:/\]/,relevance:0,contains:[ne]}]},eo={scope:"title",begin:S,relevance:0},no={scope:"title",begin:$,relevance:0},to={begin:"\\.\\s*"+$,relevance:0};var En=Object.freeze({__proto__:null,APOS_STRING_MODE:ve,BACKSLASH_ESCAPE:ne,BINARY_NUMBER_MODE:Yr,BINARY_NUMBER_RE:ge,COMMENT:he,C_BLOCK_COMMENT_MODE:sn,C_LINE_COMMENT_MODE:et,C_NUMBER_MODE:Jr,C_NUMBER_RE:Me,END_SAME_AS_BEGIN:function(o){return Object.assign(o,{"on:begin":(d,h)=>{h.data._beginMatch=d[1]},"on:end":(d,h)=>{h.data._beginMatch!==d[1]&&h.ignoreMatch()}})},HASH_COMMENT_MODE:wn,IDENT_RE:S,MATCH_NOTHING_RE:ee,METHOD_GUARD:to,NUMBER_MODE:Xr,NUMBER_RE:Y,PHRASAL_WORDS_MODE:Ae,QUOTE_STRING_MODE:Te,REGEXP_MODE:Qr,RE_STARTERS_RE:Ue,SHEBANG:on,TITLE_MODE:eo,UNDERSCORE_IDENT_RE:$,UNDERSCORE_TITLE_MODE:no});function ro(o,d){o.input[o.index-1]==="."&&d.ignoreMatch()}function oo(o,d){o.className!==void 0&&(o.scope=o.className,delete o.className)}function so(o,d){d&&o.beginKeywords&&(o.begin="\\b("+o.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",o.__beforeBegin=ro,o.keywords=o.keywords||o.beginKeywords,delete o.beginKeywords,o.relevance===void 0&&(o.relevance=0))}function io(o,d){Array.isArray(o.illegal)&&(o.illegal=z(...o.illegal))}function ao(o,d){if(o.match){if(o.begin||o.end)throw new Error("begin & end are not supported with match");o.begin=o.match,delete o.match}}function lo(o,d){o.relevance===void 0&&(o.relevance=1)}const co=(o,d)=>{if(!o.beforeMatch)return;if(o.starts)throw new Error("beforeMatch cannot be used with starts");const h=Object.assign({},o);Object.keys(o).forEach(N=>{delete o[N]}),o.keywords=h.keywords,o.begin=F(h.beforeMatch,u(h.begin)),o.starts={relevance:0,contains:[Object.assign(h,{endsParent:!0})]},o.relevance=0,delete h.beforeMatch},uo=["of","and","for","in","not","or","if","then","parent","list","value"],fo="keyword";function Pt(o,d,h=fo){const N=Object.create(null);return typeof o=="string"?H(h,o.split(" ")):Array.isArray(o)?H(h,o):Object.keys(o).forEach(function(K){Object.assign(N,Pt(o[K],d,K))}),N;function H(K,w){d&&(w=w.map(y=>y.toLowerCase())),w.forEach(function(y){const T=y.split("|");N[T[0]]=[K,_o(T[0],T[1])]})}}function _o(o,d){return d?Number(d):mo(o)?0:1}function mo(o){return uo.includes(o.toLowerCase())}const zt={},He=o=>{console.error(o)},Vt=(o,...d)=>{console.log(`WARN: ${o}`,...d)},Xe=(o,d)=>{zt[`${o}/${d}`]||(console.log(`Deprecated as of ${o}. ${d}`),zt[`${o}/${d}`]=!0)},Dn=new Error;function Bt(o,d,{key:h}){let N=0;const H=o[h],K={},w={};for(let y=1;y<=d.length;y++)w[y+N]=H[y],K[y+N]=!0,N+=U(d[y-1]);o[h]=w,o[h]._emit=K,o[h]._multi=!0}function po(o){if(Array.isArray(o.begin)){if(o.skip||o.excludeBegin||o.returnBegin)throw He("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Dn;if(typeof o.beginScope!="object"||o.beginScope===null)throw He("beginScope must be object"),Dn;Bt(o,o.begin,{key:"beginScope"}),o.begin=x(o.begin,{joinWith:""})}}function go(o){if(Array.isArray(o.end)){if(o.skip||o.excludeEnd||o.returnEnd)throw He("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Dn;if(typeof o.endScope!="object"||o.endScope===null)throw He("endScope must be object"),Dn;Bt(o,o.end,{key:"endScope"}),o.end=x(o.end,{joinWith:""})}}function vo(o){o.scope&&typeof o.scope=="object"&&o.scope!==null&&(o.beginScope=o.scope,delete o.scope)}function ho(o){vo(o),typeof o.beginScope=="string"&&(o.beginScope={_wrap:o.beginScope}),typeof o.endScope=="string"&&(o.endScope={_wrap:o.endScope}),po(o),go(o)}function bo(o){function d(w,y){return new RegExp(_(w),"m"+(o.case_insensitive?"i":"")+(o.unicodeRegex?"u":"")+(y?"g":""))}class h{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(y,T){T.position=this.position++,this.matchIndexes[this.matchAt]=T,this.regexes.push([T,y]),this.matchAt+=U(y)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const y=this.regexes.map(T=>T[1]);this.matcherRe=d(x(y,{joinWith:"|"}),!0),this.lastIndex=0}exec(y){this.matcherRe.lastIndex=this.lastIndex;const T=this.matcherRe.exec(y);if(!T)return null;const X=T.findIndex((an,tt)=>tt>0&&an!==void 0),Z=this.matchIndexes[X];return T.splice(0,X),Object.assign(T,Z)}}class N{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(y){if(this.multiRegexes[y])return this.multiRegexes[y];const T=new h;return this.rules.slice(y).forEach(([X,Z])=>T.addRule(X,Z)),T.compile(),this.multiRegexes[y]=T,T}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(y,T){this.rules.push([y,T]),T.type==="begin"&&this.count++}exec(y){const T=this.getMatcher(this.regexIndex);T.lastIndex=this.lastIndex;let X=T.exec(y);if(this.resumingScanAtSamePosition()&&!(X&&X.index===this.lastIndex)){const Z=this.getMatcher(0);Z.lastIndex=this.lastIndex+1,X=Z.exec(y)}return X&&(this.regexIndex+=X.position+1,this.regexIndex===this.count&&this.considerAll()),X}}function H(w){const y=new N;return w.contains.forEach(T=>y.addRule(T.begin,{rule:T,type:"begin"})),w.terminatorEnd&&y.addRule(w.terminatorEnd,{type:"end"}),w.illegal&&y.addRule(w.illegal,{type:"illegal"}),y}function K(w,y){const T=w;if(w.isCompiled)return T;[oo,ao,ho,co].forEach(Z=>Z(w,y)),o.compilerExtensions.forEach(Z=>Z(w,y)),w.__beforeBegin=null,[so,io,lo].forEach(Z=>Z(w,y)),w.isCompiled=!0;let X=null;return typeof w.keywords=="object"&&w.keywords.$pattern&&(w.keywords=Object.assign({},w.keywords),X=w.keywords.$pattern,delete w.keywords.$pattern),X=X||/\w+/,w.keywords&&(w.keywords=Pt(w.keywords,o.case_insensitive)),T.keywordPatternRe=d(X,!0),y&&(w.begin||(w.begin=/\B|\b/),T.beginRe=d(T.begin),!w.end&&!w.endsWithParent&&(w.end=/\B|\b/),w.end&&(T.endRe=d(T.end)),T.terminatorEnd=_(T.end)||"",w.endsWithParent&&y.terminatorEnd&&(T.terminatorEnd+=(w.end?"|":"")+y.terminatorEnd)),w.illegal&&(T.illegalRe=d(w.illegal)),w.contains||(w.contains=[]),w.contains=[].concat(...w.contains.map(function(Z){return yo(Z==="self"?w:Z)})),w.contains.forEach(function(Z){K(Z,T)}),w.starts&&K(w.starts,y),T.matcher=H(T),T}if(o.compilerExtensions||(o.compilerExtensions=[]),o.contains&&o.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return o.classNameAliases=r(o.classNameAliases||{}),K(o)}function jt(o){return o?o.endsWithParent||jt(o.starts):!1}function yo(o){return o.variants&&!o.cachedVariants&&(o.cachedVariants=o.variants.map(function(d){return r(o,{variants:null},d)})),o.cachedVariants?o.cachedVariants:jt(o)?r(o,{starts:o.starts?r(o.starts):null}):Object.isFrozen(o)?r(o):o}var wo="11.11.1";class Eo extends Error{constructor(d,h){super(d),this.name="HTMLInjectionError",this.html=h}}const nt=t,qt=r,$t=Symbol("nomatch"),Do=7,Ut=function(o){const d=Object.create(null),h=Object.create(null),N=[];let H=!0;const K="Could not find the language '{}', did you forget to load/include a language module?",w={disableAutodetect:!0,name:"Plain text",contains:[]};let y={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:p};function T(m){return y.noHighlightRe.test(m)}function X(m){let R=m.className+" ";R+=m.parentNode?m.parentNode.className:"";const I=y.languageDetectRe.exec(R);if(I){const B=ke(I[1]);return B||(Vt(K.replace("{}",I[1])),Vt("Falling back to no-highlight mode for this block.",m)),B?I[1]:"no-highlight"}return R.split(/\s+/).find(B=>T(B)||ke(B))}function Z(m,R,I){let B="",G="";typeof R=="object"?(B=m,I=R.ignoreIllegals,G=R.language):(Xe("10.7.0","highlight(lang, code, ...args) has been deprecated."),Xe("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),G=m,B=R),I===void 0&&(I=!0);const _e={code:B,language:G};xn("before:highlight",_e);const Oe=_e.result?_e.result:an(_e.language,_e.code,I);return Oe.code=_e.code,xn("after:highlight",Oe),Oe}function an(m,R,I,B){const G=Object.create(null);function _e(b,E){return b.keywords[E]}function Oe(){if(!C.keywords){J.addText(j);return}let b=0;C.keywordPatternRe.lastIndex=0;let E=C.keywordPatternRe.exec(j),k="";for(;E;){k+=j.substring(b,E.index);const L=ye.case_insensitive?E[0].toLowerCase():E[0],Q=_e(C,L);if(Q){const[Fe,Bo]=Q;if(J.addText(k),k="",G[L]=(G[L]||0)+1,G[L]<=Do&&(Fn+=Bo),Fe.startsWith("_"))k+=E[0];else{const jo=ye.classNameAliases[Fe]||Fe;be(E[0],jo)}}else k+=E[0];b=C.keywordPatternRe.lastIndex,E=C.keywordPatternRe.exec(j)}k+=j.substring(b),J.addText(k)}function Mn(){if(j==="")return;let b=null;if(typeof C.subLanguage=="string"){if(!d[C.subLanguage]){J.addText(j);return}b=an(C.subLanguage,j,!0,Yt[C.subLanguage]),Yt[C.subLanguage]=b._top}else b=rt(j,C.subLanguage.length?C.subLanguage:null);C.relevance>0&&(Fn+=b.relevance),J.__addSublanguage(b._emitter,b.language)}function ae(){C.subLanguage!=null?Mn():Oe(),j=""}function be(b,E){b!==""&&(J.startScope(E),J.addText(b),J.endScope())}function Gt(b,E){let k=1;const L=E.length-1;for(;k<=L;){if(!b._emit[k]){k++;continue}const Q=ye.classNameAliases[b[k]]||b[k],Fe=E[k];Q?be(Fe,Q):(j=Fe,Oe(),j=""),k++}}function Wt(b,E){return b.scope&&typeof b.scope=="string"&&J.openNode(ye.classNameAliases[b.scope]||b.scope),b.beginScope&&(b.beginScope._wrap?(be(j,ye.classNameAliases[b.beginScope._wrap]||b.beginScope._wrap),j=""):b.beginScope._multi&&(Gt(b.beginScope,E),j="")),C=Object.create(b,{parent:{value:C}}),C}function Xt(b,E,k){let L=M(b.endRe,k);if(L){if(b["on:end"]){const Q=new n(b);b["on:end"](E,Q),Q.isMatchIgnored&&(L=!1)}if(L){for(;b.endsParent&&b.parent;)b=b.parent;return b}}if(b.endsWithParent)return Xt(b.parent,E,k)}function Io(b){return C.matcher.regexIndex===0?(j+=b[0],1):(at=!0,0)}function Lo(b){const E=b[0],k=b.rule,L=new n(k),Q=[k.__beforeBegin,k["on:begin"]];for(const Fe of Q)if(Fe&&(Fe(b,L),L.isMatchIgnored))return Io(E);return k.skip?j+=E:(k.excludeBegin&&(j+=E),ae(),!k.returnBegin&&!k.excludeBegin&&(j=E)),Wt(k,b),k.returnBegin?0:E.length}function Po(b){const E=b[0],k=R.substring(b.index),L=Xt(C,b,k);if(!L)return $t;const Q=C;C.endScope&&C.endScope._wrap?(ae(),be(E,C.endScope._wrap)):C.endScope&&C.endScope._multi?(ae(),Gt(C.endScope,b)):Q.skip?j+=E:(Q.returnEnd||Q.excludeEnd||(j+=E),ae(),Q.excludeEnd&&(j=E));do C.scope&&J.closeNode(),!C.skip&&!C.subLanguage&&(Fn+=C.relevance),C=C.parent;while(C!==L.parent);return L.starts&&Wt(L.starts,b),Q.returnEnd?0:E.length}function zo(){const b=[];for(let E=C;E!==ye;E=E.parent)E.scope&&b.unshift(E.scope);b.forEach(E=>J.openNode(E))}let Tn={};function Jt(b,E){const k=E&&E[0];if(j+=b,k==null)return ae(),0;if(Tn.type==="begin"&&E.type==="end"&&Tn.index===E.index&&k===""){if(j+=R.slice(E.index,E.index+1),!H){const L=new Error(`0 width match regex (${m})`);throw L.languageName=m,L.badRule=Tn.rule,L}return 1}if(Tn=E,E.type==="begin")return Lo(E);if(E.type==="illegal"&&!I){const L=new Error('Illegal lexeme "'+k+'" for mode "'+(C.scope||"<unnamed>")+'"');throw L.mode=C,L}else if(E.type==="end"){const L=Po(E);if(L!==$t)return L}if(E.type==="illegal"&&k==="")return j+=`
`,1;if(it>1e5&&it>E.index*3)throw new Error("potential infinite loop, way more iterations than matches");return j+=k,k.length}const ye=ke(m);if(!ye)throw He(K.replace("{}",m)),new Error('Unknown language: "'+m+'"');const Vo=bo(ye);let st="",C=B||Vo;const Yt={},J=new y.__emitter(y);zo();let j="",Fn=0,Ke=0,it=0,at=!1;try{if(ye.__emitTokens)ye.__emitTokens(R,J);else{for(C.matcher.considerAll();;){it++,at?at=!1:C.matcher.considerAll(),C.matcher.lastIndex=Ke;const b=C.matcher.exec(R);if(!b)break;const E=R.substring(Ke,b.index),k=Jt(E,b);Ke=b.index+k}Jt(R.substring(Ke))}return J.finalize(),st=J.toHTML(),{language:m,value:st,relevance:Fn,illegal:!1,_emitter:J,_top:C}}catch(b){if(b.message&&b.message.includes("Illegal"))return{language:m,value:nt(R),illegal:!0,relevance:0,_illegalBy:{message:b.message,index:Ke,context:R.slice(Ke-100,Ke+100),mode:b.mode,resultSoFar:st},_emitter:J};if(H)return{language:m,value:nt(R),illegal:!1,relevance:0,errorRaised:b,_emitter:J,_top:C};throw b}}function tt(m){const R={value:nt(m),illegal:!1,relevance:0,_top:w,_emitter:new y.__emitter(y)};return R._emitter.addText(m),R}function rt(m,R){R=R||y.languages||Object.keys(d);const I=tt(m),B=R.filter(ke).filter(Zt).map(ae=>an(ae,m,!1));B.unshift(I);const G=B.sort((ae,be)=>{if(ae.relevance!==be.relevance)return be.relevance-ae.relevance;if(ae.language&&be.language){if(ke(ae.language).supersetOf===be.language)return 1;if(ke(be.language).supersetOf===ae.language)return-1}return 0}),[_e,Oe]=G,Mn=_e;return Mn.secondBest=Oe,Mn}function Ro(m,R,I){const B=R&&h[R]||I;m.classList.add("hljs"),m.classList.add(`language-${B}`)}function ot(m){let R=null;const I=X(m);if(T(I))return;if(xn("before:highlightElement",{el:m,language:I}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(y.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),y.throwUnescapedHTML))throw new Eo("One of your code blocks includes unescaped HTML.",m.innerHTML);R=m;const B=R.textContent,G=I?Z(B,{language:I,ignoreIllegals:!0}):rt(B);m.innerHTML=G.value,m.dataset.highlighted="yes",Ro(m,I,G.language),m.result={language:G.language,re:G.relevance,relevance:G.relevance},G.secondBest&&(m.secondBest={language:G.secondBest.language,relevance:G.secondBest.relevance}),xn("after:highlightElement",{el:m,result:G,text:B})}function xo(m){y=qt(y,m)}const Mo=()=>{Rn(),Xe("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function To(){Rn(),Xe("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Ht=!1;function Rn(){function m(){Rn()}if(document.readyState==="loading"){Ht||window.addEventListener("DOMContentLoaded",m,!1),Ht=!0;return}document.querySelectorAll(y.cssSelector).forEach(ot)}function Fo(m,R){let I=null;try{I=R(o)}catch(B){if(He("Language definition for '{}' could not be registered.".replace("{}",m)),H)He(B);else throw B;I=w}I.name||(I.name=m),d[m]=I,I.rawDefinition=R.bind(null,o),I.aliases&&Kt(I.aliases,{languageName:m})}function So(m){delete d[m];for(const R of Object.keys(h))h[R]===m&&delete h[R]}function No(){return Object.keys(d)}function ke(m){return m=(m||"").toLowerCase(),d[m]||d[h[m]]}function Kt(m,{languageName:R}){typeof m=="string"&&(m=[m]),m.forEach(I=>{h[I.toLowerCase()]=R})}function Zt(m){const R=ke(m);return R&&!R.disableAutodetect}function Co(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=R=>{m["before:highlightBlock"](Object.assign({block:R.el},R))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=R=>{m["after:highlightBlock"](Object.assign({block:R.el},R))})}function Ao(m){Co(m),N.push(m)}function ko(m){const R=N.indexOf(m);R!==-1&&N.splice(R,1)}function xn(m,R){const I=m;N.forEach(function(B){B[I]&&B[I](R)})}function Oo(m){return Xe("10.7.0","highlightBlock will be removed entirely in v12.0"),Xe("10.7.0","Please use highlightElement now."),ot(m)}Object.assign(o,{highlight:Z,highlightAuto:rt,highlightAll:Rn,highlightElement:ot,highlightBlock:Oo,configure:xo,initHighlighting:Mo,initHighlightingOnLoad:To,registerLanguage:Fo,unregisterLanguage:So,listLanguages:No,getLanguage:ke,registerAliases:Kt,autoDetection:Zt,inherit:qt,addPlugin:Ao,removePlugin:ko}),o.debugMode=function(){H=!1},o.safeMode=function(){H=!0},o.versionString=wo,o.regex={concat:F,lookahead:u,either:z,optional:v,anyNumberOfTimes:g};for(const m in En)typeof En[m]=="object"&&e(En[m]);return Object.assign(o,En),o},Je=Ut({});return Je.newInstance=()=>Ut({}),ft=Je,Je.HighlightJS=Je,Je.default=Je,ft}var nm=em();const mr=Q_(nm);var tm=pe("<pre><code><!></code></pre>");function rm(e,n){const t=jn(n,["children","$$slots","$$events","$$legacy"]),r=jn(t,["code","highlighted","languageName","langtag"]);let i=Be(n,"code",8),s=Be(n,"highlighted",8),l=Be(n,"languageName",8,"plaintext"),f=Be(n,"langtag",8,!1);var a=tm();let c;var p=W(a);It(p,1,"",null,{},{hljs:!0});var _=W(p);{var u=v=>{var F=Ot(),A=Wn(F);si(A,s),re(v,F)},g=v=>{var F=Js();Ee(()=>Ve(F,i())),re(v,F)};bt(_,v=>{s()?v(u):v(g,!1)})}Ee(v=>c=_i(a,c,{"data-language":l(),...r,[fn]:v},"svelte-1w9vok"),[()=>({langtag:f()})],St),re(e,a)}function om(e,n){const t=jn(n,["children","$$slots","$$events","$$legacy"]),r=jn(t,["language","code","langtag"]);hn(n,!1);let i=Be(n,"language",8),s=Be(n,"code",8),l=Be(n,"langtag",8,!1);const f=bi();let a=Kn("");yi(()=>{O(a)&&f("highlight",{highlighted:O(a)})}),Ts(()=>(gt(i()),gt(s())),()=>{mr.registerLanguage(i().name,i().register),ce(a,mr.highlight(s(),{language:i().name}).value)}),Fs(),Lt();var c=Ot(),p=Wn(c);ii(p,n,"default",{get highlighted(){return O(a)}},_=>{rm(_,vi(()=>r,{get languageName(){return i().name},get langtag(){return l()},get highlighted(){return O(a)},get code(){return s()}}))}),re(e,c),bn()}function sm(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",s={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},l={keywords:s,illegal:/<\//},f={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},a={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},c={className:"subst",begin:/\$\(/,end:/\)/,keywords:s},p={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,c,p],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},u={className:"string",contains:[e.BACKSLASH_ESCAPE,c,p],begin:"`",end:"`"},g={className:"meta",begin:"@"+n},v={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return l.name="Julia",l.contains=[f,a,_,u,g,v,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],c.contains=l.contains,l}const im={name:"julia",register:sm};var am=pe('<th class="svelte-m8v9hl"> </th>'),lm=pe('<td class="svelte-m8v9hl"> </td>'),cm=pe('<a class="issue svelte-m8v9hl" target="_blank">(?)</a>'),um=pe('<td class="svelte-m8v9hl"><!> <span> </span></td>'),fm=pe('<tr class="svelte-m8v9hl"><td class="svelte-m8v9hl"> <div class="model-definition svelte-m8v9hl"><!></div></td><!></tr>'),dm=pe('<table id="results" class="svelte-m8v9hl"><thead><tr class="svelte-m8v9hl"><th class="svelte-m8v9hl">Model name \\\\ AD type</th><!></tr></thead><tbody></tbody></table>');function _m(e,n){hn(n,!0);const t=[...n.data.keys()],r=n.data.get(t[0]).keys(),i="https://github.com/EnzymeAD/Enzyme.jl/issues/1995",l={assume_mvnormal__EnzymeForward:i,assume_wishart__EnzymeForward:i,multithreaded__Mooncake:"https://github.com/chalk-lab/Mooncake.jl/issues/570"};var f=dm(),a=W(f),c=W(a),p=we(W(c));_n(p,17,()=>r,dn,(u,g)=>{var v=am(),F=W(v);Ee(()=>Ve(F,O(g))),re(u,v)});var _=we(a);_n(_,21,()=>wt(n.data),dn,(u,g)=>{let v=()=>O(g)[0],F=()=>O(g)[1];var A=fm(),z=W(A),U=W(z),M=we(U),D=W(M);om(D,{language:im,get code(){return n.modelDefinitions[v()]}});var x=we(z);_n(x,17,()=>wt(F()),dn,(ee,S)=>{let $=()=>O(S)[0],Y=()=>O(S)[1];var Me=Ot(),ge=Wn(Me);{var Ue=ne=>{var ve=lm(),Te=W(ve);Ee(Ae=>Ve(Te,Ae),[()=>Y().toFixed(3)]),re(ne,ve)},on=ne=>{var ve=um(),Te=W(ve);{var Ae=sn=>{var wn=cm();Ee(()=>yt(wn,"href",l[`${v()}__${$()}`])),re(sn,wn)};bt(Te,sn=>{l[`${v()}__${$()}`]&&sn(Ae)})}var he=we(Te,2),et=W(he);Ee(()=>{It(he,1,Hr(Y()),"svelte-m8v9hl"),Ve(et,Y())}),re(ne,ve)};bt(ge,ne=>{typeof Y()=="number"?ne(Ue):ne(on,!1)})}re(ee,Me)}),Ee(()=>Ve(U,`${v()??""} `)),re(u,A)}),re(e,f),bn()}var mm=pe("<h3> </h3> <!>",1),pm=pe(`<div id="main-wrapper" class="svelte-3oks6t"><main class="svelte-3oks6t"><h1>Turing AD tests</h1> <p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p> <p>This page is intended as a brief overview of how different AD
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
                currently does not work on Julia 1.12.</b></div> <h2>Results</h2> <p><a href="adtests.json" target="_blank" download="">Download the raw data (JSON)</a></p> <!> <h2>Manifest</h2> <p>The tests above were run with the following package versions:</p> <!></main></div>`);function gm(e,n){hn(n,!1);let t=Kn(new Map);for(const[f,a]of Object.entries(Ea)){let c=a.__category__;delete a.__category__;let p=new Map;for(const[_,u]of Object.entries(a))p.set(_,u);O(t).has(c)||O(t).set(c,new Map),O(t).get(c).set(f,p)}ce(t,new Map([...O(t).entries()].sort())),console.log(O(t)),Lt();var r=pm(),i=W(r),s=we(W(i),16);_n(s,1,()=>O(t).entries(),dn,(f,a)=>{let c=()=>O(a)[0],p=()=>O(a)[1];var _=mm(),u=Wn(_),g=W(u),v=we(u,2);_m(v,{get data(){return p()},modelDefinitions:El}),Ee(()=>Ve(g,c())),re(f,_)});var l=we(s,6);Y_(l,{}),re(e,r),bn()}Ys(gm,{target:document.getElementById("app")});
