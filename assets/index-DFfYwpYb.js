(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Qt=!1;var qn=Array.isArray,qo=Array.prototype.indexOf,Et=Array.from,$o=Object.defineProperty,je=Object.getOwnPropertyDescriptor,gr=Object.getOwnPropertyDescriptors,Uo=Object.prototype,Ho=Array.prototype,Dt=Object.getPrototypeOf,er=Object.isExtensible;function ln(e){return typeof e=="function"}function Ko(e){return e()}function dt(e){for(var n=0;n<e.length;n++)e[n]()}const me=2,vr=4,$n=8,Rt=16,Ce=32,nn=64,An=128,fe=256,kn=512,se=1024,Re=2048,$e=4096,Se=8192,Un=16384,Zo=32768,xt=65536,Go=1<<17,Wo=1<<19,hr=1<<20,_t=1<<21,Ge=Symbol("$state"),br=Symbol("legacy props"),Xo=Symbol("");function yr(e){return e===this.v}function Jo(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Mt(e){return!Jo(e,this.v)}function Yo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function es(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ns(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ts(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function rs(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function os(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ss(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function is(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let vn=!1,as=!1;function ls(){vn=!0}const Tt=1,Ft=2,wr=4,cs=8,fs=16,us=1,ds=2,Er=4,_s=8,ms=16,ps=1,gs=2,ie=Symbol(),vs="http://www.w3.org/1999/xhtml",hs="@attach";function Dr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let q=null;function nr(e){q=e}function hn(e,n=!1,t){var r=q={p:q,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};vn&&!n&&(q.l={s:null,u:null,r1:[],r2:Qe(!1)}),Rs(()=>{r.d=!0})}function bn(e){const n=q;if(n!==null){const l=n.e;if(l!==null){var t=P,r=V;n.e=null;try{for(var i=0;i<l.length;i++){var s=l[i];qe(s.effect),xe(s.reaction),Nt(s.fn)}}finally{qe(t),xe(r)}}q=n.p,n.m=!0}return{}}function Hn(){return!vn||q!==null&&q.l===null}function Ze(e){if(typeof e!="object"||e===null||Ge in e)return e;const n=Dt(e);if(n!==Uo&&n!==Ho)return e;var t=new Map,r=qn(e),i=Ie(0),s=V,l=u=>{var a=V;xe(s);var c=u();return xe(a),c};return r&&t.set("length",Ie(e.length)),new Proxy(e,{defineProperty(u,a,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&os();var p=t.get(a);return p===void 0?(p=l(()=>Ie(c.value)),t.set(a,p)):ce(p,l(()=>Ze(c.value))),!0},deleteProperty(u,a){var c=t.get(a);if(c===void 0)a in u&&(t.set(a,l(()=>Ie(ie))),lt(i));else{if(r&&typeof a=="string"){var p=t.get("length"),_=Number(a);Number.isInteger(_)&&_<p.v&&ce(p,_)}ce(c,ie),lt(i)}return!0},get(u,a,c){var g;if(a===Ge)return e;var p=t.get(a),_=a in u;if(p===void 0&&(!_||(g=je(u,a))!=null&&g.writable)&&(p=l(()=>Ie(Ze(_?u[a]:ie))),t.set(a,p)),p!==void 0){var f=O(p);return f===ie?void 0:f}return Reflect.get(u,a,c)},getOwnPropertyDescriptor(u,a){var c=Reflect.getOwnPropertyDescriptor(u,a);if(c&&"value"in c){var p=t.get(a);p&&(c.value=O(p))}else if(c===void 0){var _=t.get(a),f=_==null?void 0:_.v;if(_!==void 0&&f!==ie)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return c},has(u,a){var f;if(a===Ge)return!0;var c=t.get(a),p=c!==void 0&&c.v!==ie||Reflect.has(u,a);if(c!==void 0||P!==null&&(!p||(f=je(u,a))!=null&&f.writable)){c===void 0&&(c=l(()=>Ie(p?Ze(u[a]):ie)),t.set(a,c));var _=O(c);if(_===ie)return!1}return p},set(u,a,c,p){var U;var _=t.get(a),f=a in u;if(r&&a==="length")for(var g=c;g<_.v;g+=1){var v=t.get(g+"");v!==void 0?ce(v,ie):g in u&&(v=l(()=>Ie(ie)),t.set(g+"",v))}_===void 0?(!f||(U=je(u,a))!=null&&U.writable)&&(_=l(()=>Ie(void 0)),ce(_,l(()=>Ze(c))),t.set(a,_)):(f=_.v!==ie,ce(_,l(()=>Ze(c))));var F=Reflect.getOwnPropertyDescriptor(u,a);if(F!=null&&F.set&&F.set.call(p,c),!f){if(r&&typeof a=="string"){var A=t.get("length"),z=Number(a);Number.isInteger(z)&&z>=A.v&&ce(A,z+1)}lt(i)}return!0},ownKeys(u){O(i);var a=Reflect.ownKeys(u).filter(_=>{var f=t.get(_);return f===void 0||f.v!==ie});for(var[c,p]of t)p.v!==ie&&!(c in u)&&a.push(c);return a},setPrototypeOf(){ss()}})}function lt(e,n=1){ce(e,e.v+n)}function mn(e){var n=me|Re,t=V!==null&&(V.f&me)!==0?V:null;return P===null||t!==null&&(t.f&fe)!==0?n|=fe:P.f|=hr,{ctx:q,deps:null,effects:null,equals:yr,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??P}}function St(e){const n=mn(e);return n.equals=Mt,n}function Rr(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)Ne(n[t])}}function bs(e){for(var n=e.parent;n!==null;){if((n.f&me)===0)return n;n=n.parent}return null}function xr(e){var n,t=P;qe(bs(e));try{Rr(e),n=jr(e)}finally{qe(t)}return n}function Mr(e){var n=xr(e),t=(ze||(e.f&fe)!==0)&&e.deps!==null?$e:se;de(e,t),e.equals(n)||(e.v=n,e.wv=Vr())}const pn=new Map;function Qe(e,n){var t={f:0,v:e,reactions:null,equals:yr,rv:0,wv:0};return t}function Ie(e,n){const t=Qe(e);return Cs(t),t}function Kn(e,n=!1){var r;const t=Qe(e);return n||(t.equals=Mt),vn&&q!==null&&q.l!==null&&((r=q.l).s??(r.s=[])).push(t),t}function ce(e,n,t=!1){V!==null&&!De&&Hn()&&(V.f&(me|Rt))!==0&&!(oe!=null&&oe.includes(e))&&is();let r=t?Ze(n):n;return mt(e,r)}function mt(e,n){if(!e.equals(n)){var t=e.v;yn?pn.set(e,n):pn.set(e,t),e.v=n,(e.f&me)!==0&&((e.f&Re)!==0&&xr(e),de(e,(e.f&fe)===0?se:$e)),e.wv=Vr(),Tr(e,Re),Hn()&&P!==null&&(P.f&se)!==0&&(P.f&(Ce|nn))===0&&(ue===null?As([e]):ue.push(e))}return n}function tr(e,n=1){var t=O(e),r=n===1?t++:t--;return ce(e,t),r}function Tr(e,n){var t=e.reactions;if(t!==null)for(var r=Hn(),i=t.length,s=0;s<i;s++){var l=t[s],u=l.f;(u&Re)===0&&(!r&&l===P||(de(l,n),(u&(se|fe))!==0&&((u&me)!==0?Tr(l,$e):Qn(l))))}}let ys=!1;var rr,Fr,Sr,Nr;function ws(){if(rr===void 0){rr=window,Fr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Sr=je(n,"firstChild").get,Nr=je(n,"nextSibling").get,er(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),er(t)&&(t.__t=void 0)}}function Zn(e=""){return document.createTextNode(e)}function Pe(e){return Sr.call(e)}function Gn(e){return Nr.call(e)}function W(e,n){return Pe(e)}function Wn(e,n){{var t=Pe(e);return t instanceof Comment&&t.data===""?Gn(t):t}}function we(e,n=1,t=!1){let r=e;for(;n--;)r=Gn(r);return r}function Es(e){e.textContent=""}function Cr(e){P===null&&V===null&&es(),V!==null&&(V.f&fe)!==0&&P===null&&Qo(),yn&&Yo()}function Ds(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function tn(e,n,t,r=!0){var i=P,s={ctx:q,deps:null,nodes_start:null,nodes_end:null,f:e|Re,first:null,fn:n,last:null,next:null,parent:i,prev:null,teardown:null,transitions:null,wv:0};if(t)try{Yn(s),s.f|=Zo}catch(a){throw Ne(s),a}else n!==null&&Qn(s);var l=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(hr|An))===0;if(!l&&r&&(i!==null&&Ds(s,i),V!==null&&(V.f&me)!==0)){var u=V;(u.effects??(u.effects=[])).push(s)}return s}function Rs(e){const n=tn($n,null,!1);return de(n,se),n.teardown=e,n}function or(e){Cr();var n=P!==null&&(P.f&Ce)!==0&&q!==null&&!q.m;if(n){var t=q;(t.e??(t.e=[])).push({fn:e,effect:P,reaction:V})}else{var r=Nt(e);return r}}function xs(e){return Cr(),Ct(e)}function Ms(e){const n=tn(nn,e,!0);return(t={})=>new Promise(r=>{t.outro?On(n,()=>{Ne(n),r(void 0)}):(Ne(n),r(void 0))})}function Nt(e){return tn(vr,e,!1)}function Ts(e,n){var t=q,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=Ct(()=>{e(),!r.ran&&(r.ran=!0,ce(t.l.r2,!0),Bn(n))})}function Fs(){var e=q;Ct(()=>{if(O(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&se)!==0&&de(t,$e),rn(t)&&Yn(t),n.ran=!1}e.l.r2.v=!1}})}function Ct(e){return tn($n,e,!0)}function Ee(e,n=[],t=mn){const r=n.map(t);return Xn(()=>e(...r.map(O)))}function Xn(e,n=0){return tn($n|Rt|n,e,!0)}function en(e,n=!0){return tn($n|Ce,e,!0,n)}function Ar(e){var n=e.teardown;if(n!==null){const t=yn,r=V;sr(!0),xe(null);try{n.call(null)}finally{sr(t),xe(r)}}}function kr(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&nn)!==0?t.parent=null:Ne(t,n),t=r}}function Ss(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&Ce)===0&&Ne(n),n=t}}function Ne(e,n=!0){var t=!1;(n||(e.f&Wo)!==0)&&e.nodes_start!==null&&(Or(e.nodes_start,e.nodes_end),t=!0),kr(e,n&&!t),Vn(e,0),de(e,Un);var r=e.transitions;if(r!==null)for(const s of r)s.stop();Ar(e);var i=e.parent;i!==null&&i.first!==null&&Ir(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Or(e,n){for(;e!==null;){var t=e===n?null:Gn(e);e.remove(),e=t}}function Ir(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function On(e,n){var t=[];At(e,t,!0),Lr(t,()=>{Ne(e),n&&n()})}function Lr(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var i of e)i.out(r)}else n()}function At(e,n,t){if((e.f&Se)===0){if(e.f^=Se,e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&n.push(l);for(var r=e.first;r!==null;){var i=r.next,s=(r.f&xt)!==0||(r.f&Ce)!==0;At(r,n,s?t:!1),r=i}}}function In(e){Pr(e,!0)}function Pr(e,n){if((e.f&Se)!==0){e.f^=Se,(e.f&se)===0&&(e.f^=se),rn(e)&&(de(e,Re),Qn(e));for(var t=e.first;t!==null;){var r=t.next,i=(t.f&xt)!==0||(t.f&Ce)!==0;Pr(t,i?n:!1),t=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&s.in()}}let Ln=[];function Ns(){var e=Ln;Ln=[],dt(e)}function kt(e){Ln.length===0&&queueMicrotask(Ns),Ln.push(e)}let Nn=!1,pt=!1,Pn=null,We=!1,yn=!1;function sr(e){yn=e}let Cn=[];let V=null,De=!1;function xe(e){V=e}let P=null;function qe(e){P=e}let oe=null;function Cs(e){V!==null&&V.f&_t&&(oe===null?oe=[e]:oe.push(e))}let te=null,le=0,ue=null;function As(e){ue=e}let zr=1,zn=0,ze=!1;function Vr(){return++zr}function rn(e){var _;var n=e.f;if((n&Re)!==0)return!0;if((n&$e)!==0){var t=e.deps,r=(n&fe)!==0;if(t!==null){var i,s,l=(n&kn)!==0,u=r&&P!==null&&!ze,a=t.length;if(l||u){var c=e,p=c.parent;for(i=0;i<a;i++)s=t[i],(l||!((_=s==null?void 0:s.reactions)!=null&&_.includes(c)))&&(s.reactions??(s.reactions=[])).push(c);l&&(c.f^=kn),u&&p!==null&&(p.f&fe)===0&&(c.f^=fe)}for(i=0;i<a;i++)if(s=t[i],rn(s)&&Mr(s),s.wv>e.wv)return!0}(!r||P!==null&&!ze)&&de(e,se)}return!1}function ks(e,n){for(var t=n;t!==null;){if((t.f&An)!==0)try{t.fn(e);return}catch{t.f^=An}t=t.parent}throw Nn=!1,e}function ir(e){return(e.f&Un)===0&&(e.parent===null||(e.parent.f&An)===0)}function Jn(e,n,t,r){if(Nn){if(t===null&&(Nn=!1),ir(n))throw e;return}if(t!==null&&(Nn=!0),ks(e,n),ir(n))throw e}function Br(e,n,t=!0){var r=e.reactions;if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];oe!=null&&oe.includes(e)||((s.f&me)!==0?Br(s,n,!1):n===s&&(t?de(s,Re):(s.f&se)!==0&&de(s,$e),Qn(s)))}}function jr(e){var g;var n=te,t=le,r=ue,i=V,s=ze,l=oe,u=q,a=De,c=e.f;te=null,le=0,ue=null,ze=(c&fe)!==0&&(De||!We||V===null),V=(c&(Ce|nn))===0?e:null,oe=null,nr(e.ctx),De=!1,zn++,e.f|=_t;try{var p=(0,e.fn)(),_=e.deps;if(te!==null){var f;if(Vn(e,le),_!==null&&le>0)for(_.length=le+te.length,f=0;f<te.length;f++)_[le+f]=te[f];else e.deps=_=te;if(!ze)for(f=le;f<_.length;f++)((g=_[f]).reactions??(g.reactions=[])).push(e)}else _!==null&&le<_.length&&(Vn(e,le),_.length=le);if(Hn()&&ue!==null&&!De&&_!==null&&(e.f&(me|$e|Re))===0)for(f=0;f<ue.length;f++)Br(ue[f],e);return i!==null&&i!==e&&(zn++,ue!==null&&(r===null?r=ue:r.push(...ue))),p}finally{te=n,le=t,ue=r,V=i,ze=s,oe=l,nr(u),De=a,e.f^=_t}}function Os(e,n){let t=n.reactions;if(t!==null){var r=qo.call(t,e);if(r!==-1){var i=t.length-1;i===0?t=n.reactions=null:(t[r]=t[i],t.pop())}}t===null&&(n.f&me)!==0&&(te===null||!te.includes(n))&&(de(n,$e),(n.f&(fe|kn))===0&&(n.f^=kn),Rr(n),Vn(n,0))}function Vn(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Os(e,t[r])}function Yn(e){var n=e.f;if((n&Un)===0){de(e,se);var t=P,r=q,i=We;P=e,We=!0;try{(n&Rt)!==0?Ss(e):kr(e),Ar(e);var s=jr(e);e.teardown=typeof s=="function"?s:null,e.wv=zr;var l=e.deps,u;Qt&&as&&e.f&Re}catch(a){Jn(a,e,t,r||e.ctx)}finally{We=i,P=t}}}function Is(){try{ns()}catch(e){if(Pn!==null)Jn(e,Pn,null);else throw e}}function Ls(){var e=We;try{var n=0;for(We=!0;Cn.length>0;){n++>1e3&&Is();var t=Cn,r=t.length;Cn=[];for(var i=0;i<r;i++){var s=zs(t[i]);Ps(s)}pn.clear()}}finally{pt=!1,We=e,Pn=null}}function Ps(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(Un|Se))===0)try{rn(r)&&(Yn(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Ir(r):r.fn=null))}catch(i){Jn(i,r,null,r.ctx)}}}function Qn(e){pt||(pt=!0,queueMicrotask(Ls));for(var n=Pn=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(nn|Ce))!==0){if((t&se)===0)return;n.f^=se}}Cn.push(n)}function zs(e){for(var n=[],t=e;t!==null;){var r=t.f,i=(r&(Ce|nn))!==0,s=i&&(r&se)!==0;if(!s&&(r&Se)===0){if((r&vr)!==0)n.push(t);else if(i)t.f^=se;else try{rn(t)&&Yn(t)}catch(a){Jn(a,t,null,t.ctx)}var l=t.first;if(l!==null){t=l;continue}}var u=t.parent;for(t=t.next;t===null&&u!==null;)t=u.next,u=u.parent}return n}function O(e){var n=e.f,t=(n&me)!==0;if(V!==null&&!De){if(!(oe!=null&&oe.includes(e))){var r=V.deps;e.rv<zn&&(e.rv=zn,te===null&&r!==null&&r[le]===e?le++:te===null?te=[e]:(!ze||!te.includes(e))&&te.push(e))}}else if(t&&e.deps===null&&e.effects===null){var i=e,s=i.parent;s!==null&&(s.f&fe)===0&&(i.f^=fe)}return t&&(i=e,rn(i)&&Mr(i)),yn&&pn.has(e)?pn.get(e):e.v}function Bn(e){var n=De;try{return De=!0,e()}finally{De=n}}const Vs=-7169;function de(e,n){e.f=e.f&Vs|n}function gt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ge in e)vt(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&Ge in t&&vt(t)}}}function vt(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{vt(e[r],n)}catch{}const t=Dt(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=gr(t);for(let i in r){const s=r[i].get;if(s)try{s.call(e)}catch{}}}}}function Bs(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const js=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function qs(e){return js.includes(e)}const $s={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Us(e){return e=e.toLowerCase(),$s[e]??e}const Hs=["touchstart","touchmove"];function Ks(e){return Hs.includes(e)}function Zs(e,n){if(n){const t=document.body;e.autofocus=!0,kt(()=>{document.activeElement===t&&e.focus()})}}function Gs(e){var n=V,t=P;xe(null),qe(null);try{return e()}finally{xe(n),qe(t)}}const qr=new Set,ht=new Set;function Ws(e,n,t,r={}){function i(s){if(r.capture||fn.call(n,s),!s.cancelBubble)return Gs(()=>t==null?void 0:t.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?kt(()=>{n.addEventListener(e,i,r)}):n.addEventListener(e,i,r),i}function Xs(e){for(var n=0;n<e.length;n++)qr.add(e[n]);for(var t of ht)t(e)}function fn(e){var U;var n=this,t=n.ownerDocument,r=e.type,i=((U=e.composedPath)==null?void 0:U.call(e))||[],s=i[0]||e.target,l=0,u=e.__root;if(u){var a=i.indexOf(u);if(a!==-1&&(n===document||n===window)){e.__root=n;return}var c=i.indexOf(n);if(c===-1)return;a<=c&&(l=a)}if(s=i[l]||e.target,s!==n){$o(e,"currentTarget",{configurable:!0,get(){return s||t}});var p=V,_=P;xe(null),qe(null);try{for(var f,g=[];s!==null;){var v=s.assignedSlot||s.parentNode||s.host||null;try{var F=s["__"+r];if(F!=null&&(!s.disabled||e.target===s))if(qn(F)){var[A,...z]=F;A.apply(s,[e,...z])}else F.call(s,e)}catch(M){f?g.push(M):f=M}if(e.cancelBubble||v===n||v===null)break;s=v}if(f){for(let M of g)queueMicrotask(()=>{throw M});throw f}}finally{e.__root=n,delete e.currentTarget,xe(p),qe(_)}}}function $r(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function gn(e,n){var t=P;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function pe(e,n){var t=(n&ps)!==0,r=(n&gs)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=$r(s?e:"<!>"+e),t||(i=Pe(i)));var l=r||Fr?document.importNode(i,!0):i.cloneNode(!0);if(t){var u=Pe(l),a=l.lastChild;gn(u,a)}else gn(l,l);return l}}function Js(e=""){{var n=Zn(e+"");return gn(n,n),n}}function Ot(){var e=document.createDocumentFragment(),n=document.createComment(""),t=Zn();return e.append(n,t),gn(n,t),e}function re(e,n){e!==null&&e.before(n)}function Ve(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function Ys(e,n){return Qs(e,n)}const Ye=new Map;function Qs(e,{target:n,anchor:t,props:r={},events:i,context:s,intro:l=!0}){ws();var u=new Set,a=_=>{for(var f=0;f<_.length;f++){var g=_[f];if(!u.has(g)){u.add(g);var v=Ks(g);n.addEventListener(g,fn,{passive:v});var F=Ye.get(g);F===void 0?(document.addEventListener(g,fn,{passive:v}),Ye.set(g,1)):Ye.set(g,F+1)}}};a(Et(qr)),ht.add(a);var c=void 0,p=Ms(()=>{var _=t??n.appendChild(Zn());return en(()=>{if(s){hn({});var f=q;f.c=s}i&&(r.$$events=i),c=e(_,r)||{},s&&bn()}),()=>{var v;for(var f of u){n.removeEventListener(f,fn);var g=Ye.get(f);--g===0?(document.removeEventListener(f,fn),Ye.delete(f)):Ye.set(f,g)}ht.delete(a),_!==t&&((v=_.parentNode)==null||v.removeChild(_))}});return ei.set(c,p),c}let ei=new WeakMap;function bt(e,n,[t,r]=[0,0]){var i=e,s=null,l=null,u=ie,a=t>0?xt:0,c=!1;const p=(f,g=!0)=>{c=!0,_(g,f)},_=(f,g)=>{u!==(u=f)&&(u?(s?In(s):g&&(s=en(()=>g(i))),l&&On(l,()=>{l=null})):(l?In(l):g&&(l=en(()=>g(i,[t+1,r]))),s&&On(s,()=>{s=null})))};Xn(()=>{c=!1,n(p),c||_(null,null)},a)}function dn(e,n){return n}function ni(e,n,t,r){for(var i=[],s=n.length,l=0;l<s;l++)At(n[l].e,i,!0);var u=s>0&&i.length===0&&t!==null;if(u){var a=t.parentNode;Es(a),a.append(t),r.clear(),Le(e,n[0].prev,n[s-1].next)}Lr(i,()=>{for(var c=0;c<s;c++){var p=n[c];u||(r.delete(p.k),Le(e,p.prev,p.next)),Ne(p.e,!u)}})}function _n(e,n,t,r,i,s=null){var l=e,u={flags:n,items:new Map,first:null},a=(n&wr)!==0;if(a){var c=e;l=c.appendChild(Zn())}var p=null,_=!1,f=St(()=>{var g=t();return qn(g)?g:g==null?[]:Et(g)});Xn(()=>{var g=O(f),v=g.length;_&&v===0||(_=v===0,ti(g,u,l,i,n,r,t),s!==null&&(v===0?p?In(p):p=en(()=>s(l)):p!==null&&On(p,()=>{p=null})),O(f))})}function ti(e,n,t,r,i,s,l){var ne,ve,Te,Ae;var u=(i&cs)!==0,a=(i&(Tt|Ft))!==0,c=e.length,p=n.items,_=n.first,f=_,g,v=null,F,A=[],z=[],U,M,D,x;if(u)for(x=0;x<c;x+=1)U=e[x],M=s(U,x),D=p.get(M),D!==void 0&&((ne=D.a)==null||ne.measure(),(F??(F=new Set)).add(D));for(x=0;x<c;x+=1){if(U=e[x],M=s(U,x),D=p.get(M),D===void 0){var ee=f?f.e.nodes_start:t;v=oi(ee,n,v,v===null?n.first:v.next,U,M,x,r,i,l),p.set(M,v),A=[],z=[],f=v.next;continue}if(a&&ri(D,U,x,i),(D.e.f&Se)!==0&&(In(D.e),u&&((ve=D.a)==null||ve.unfix(),(F??(F=new Set)).delete(D))),D!==f){if(g!==void 0&&g.has(D)){if(A.length<z.length){var S=z[0],$;v=S.prev;var Y=A[0],Me=A[A.length-1];for($=0;$<A.length;$+=1)ar(A[$],S,t);for($=0;$<z.length;$+=1)g.delete(z[$]);Le(n,Y.prev,Me.next),Le(n,v,Y),Le(n,Me,S),f=S,v=Me,x-=1,A=[],z=[]}else g.delete(D),ar(D,f,t),Le(n,D.prev,D.next),Le(n,D,v===null?n.first:v.next),Le(n,v,D),v=D;continue}for(A=[],z=[];f!==null&&f.k!==M;)(f.e.f&Se)===0&&(g??(g=new Set)).add(f),z.push(f),f=f.next;if(f===null)continue;D=f}A.push(D),v=D,f=D.next}if(f!==null||g!==void 0){for(var ge=g===void 0?[]:Et(g);f!==null;)(f.e.f&Se)===0&&ge.push(f),f=f.next;var Ue=ge.length;if(Ue>0){var on=(i&wr)!==0&&c===0?t:null;if(u){for(x=0;x<Ue;x+=1)(Te=ge[x].a)==null||Te.measure();for(x=0;x<Ue;x+=1)(Ae=ge[x].a)==null||Ae.fix()}ni(n,ge,on,p)}}u&&kt(()=>{var he;if(F!==void 0)for(D of F)(he=D.a)==null||he.apply()}),P.first=n.first&&n.first.e,P.last=v&&v.e}function ri(e,n,t,r){(r&Tt)!==0&&mt(e.v,n),(r&Ft)!==0?mt(e.i,t):e.i=t}function oi(e,n,t,r,i,s,l,u,a,c){var p=(a&Tt)!==0,_=(a&fs)===0,f=p?_?Kn(i):Qe(i):i,g=(a&Ft)===0?l:Qe(l),v={i:g,v:f,k:s,a:null,e:null,prev:t,next:r};try{return v.e=en(()=>u(e,f,g,c),ys),v.e.prev=t&&t.e,v.e.next=r&&r.e,t===null?n.first=v:(t.next=v,t.e.next=v.e),r!==null&&(r.prev=v,r.e.prev=v.e),v}finally{}}function ar(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,i=n?n.e.nodes_start:t,s=e.e.nodes_start;s!==r;){var l=Gn(s);i.before(s),s=l}}function Le(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function si(e,n,t=!1,r=!1,i=!1){var s=e,l="";Ee(()=>{var u=P;if(l!==(l=n()??"")&&(u.nodes_start!==null&&(Or(u.nodes_start,u.nodes_end),u.nodes_start=u.nodes_end=null),l!=="")){var a=l+"";t?a=`<svg>${a}</svg>`:r&&(a=`<math>${a}</math>`);var c=$r(a);if((t||r)&&(c=Pe(c)),gn(Pe(c),c.lastChild),t||r)for(;Pe(c);)s.before(Pe(c));else s.before(c)}})}function ii(e,n,t,r,i){var u;var s=(u=n.$$slots)==null?void 0:u[t],l=!1;s===!0&&(s=n.children,l=!0),s===void 0?i!==null&&i(e):s(e,l?()=>r:r)}function ai(e,n){var t=void 0,r;Xn(()=>{t!==(t=n())&&(r&&(Ne(r),r=null),t&&(r=en(()=>{Nt(()=>t(e))})))})}function Ur(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=Ur(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function li(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=Ur(e))&&(r&&(r+=" "),r+=n);return r}function Hr(e){return typeof e=="object"?li(e):e??""}const lr=[...` 	
\r\f \v\uFEFF`];function ci(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var i in t)if(t[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,l=0;(l=r.indexOf(i,l))>=0;){var u=l+s;(l===0||lr.includes(r[l-1]))&&(u===r.length||lr.includes(r[u]))?r=(l===0?"":r.substring(0,l))+r.substring(u+1):l=u}}return r===""?null:r}function cr(e,n=!1){var t=n?" !important;":";",r="";for(var i in e){var s=e[i];s!=null&&s!==""&&(r+=" "+i+": "+s+t)}return r}function ct(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function fi(e,n){if(n){var t="",r,i;if(Array.isArray(n)?(r=n[0],i=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,l=0,u=!1,a=[];r&&a.push(...Object.keys(r).map(ct)),i&&a.push(...Object.keys(i).map(ct));var c=0,p=-1;const F=e.length;for(var _=0;_<F;_++){var f=e[_];if(u?f==="/"&&e[_-1]==="*"&&(u=!1):s?s===f&&(s=!1):f==="/"&&e[_+1]==="*"?u=!0:f==='"'||f==="'"?s=f:f==="("?l++:f===")"&&l--,!u&&s===!1&&l===0){if(f===":"&&p===-1)p=_;else if(f===";"||_===F-1){if(p!==-1){var g=ct(e.substring(c,p).trim());if(!a.includes(g)){f!==";"&&_++;var v=e.substring(c,_).trim();t+=" "+v+";"}}c=_+1,p=-1}}}}return r&&(t+=cr(r)),i&&(t+=cr(i,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function It(e,n,t,r,i,s){var l=e.__className;if(l!==t||l===void 0){var u=ci(t,r,s);u==null?e.removeAttribute("class"):n?e.className=u:e.setAttribute("class",u),e.__className=t}else if(s&&i!==s)for(var a in s){var c=!!s[a];(i==null||c!==!!i[a])&&e.classList.toggle(a,c)}return s}function ft(e,n={},t,r){for(var i in t){var s=t[i];n[i]!==s&&(t[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function ui(e,n,t,r){var i=e.__style;if(i!==n){var s=fi(n,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=n}else r&&(Array.isArray(r)?(ft(e,t==null?void 0:t[0],r[0]),ft(e,t==null?void 0:t[1],r[1],"important")):ft(e,t,r));return r}const un=Symbol("class"),cn=Symbol("style"),Kr=Symbol("is custom element"),Zr=Symbol("is html");function di(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function yt(e,n,t,r){var i=Gr(e);i[n]!==(i[n]=t)&&(n==="loading"&&(e[Xo]=t),t==null?e.removeAttribute(n):typeof t!="string"&&Wr(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function _i(e,n,t,r,i=!1){var s=Gr(e),l=s[Kr],u=!s[Zr],a=n||{},c=e.tagName==="OPTION";for(var p in n)p in t||(t[p]=null);t.class?t.class=Hr(t.class):t.class=null,t[cn]&&(t.style??(t.style=null));var _=Wr(e);for(const M in t){let D=t[M];if(c&&M==="value"&&D==null){e.value=e.__value="",a[M]=D;continue}if(M==="class"){var f=e.namespaceURI==="http://www.w3.org/1999/xhtml";It(e,f,D,r,n==null?void 0:n[un],t[un]),a[M]=D,a[un]=t[un];continue}if(M==="style"){ui(e,D,n==null?void 0:n[cn],t[cn]),a[M]=D,a[cn]=t[cn];continue}var g=a[M];if(D!==g){a[M]=D;var v=M[0]+M[1];if(v!=="$$")if(v==="on"){const x={},ee="$$"+M;let S=M.slice(2);var F=qs(S);if(Bs(S)&&(S=S.slice(0,-7),x.capture=!0),!F&&g){if(D!=null)continue;e.removeEventListener(S,a[ee],x),a[ee]=null}if(D!=null)if(F)e[`__${S}`]=D,Xs([S]);else{let $=function(Y){a[M].call(this,Y)};var U=$;a[ee]=Ws(S,e,$,x)}else F&&(e[`__${S}`]=void 0)}else if(M==="style")yt(e,M,D);else if(M==="autofocus")Zs(e,!!D);else if(!l&&(M==="__value"||M==="value"&&D!=null))e.value=e.__value=D;else if(M==="selected"&&c)di(e,D);else{var A=M;u||(A=Us(A));var z=A==="defaultValue"||A==="defaultChecked";if(D==null&&!l&&!z)if(s[M]=null,A==="value"||A==="checked"){let x=e;const ee=n===void 0;if(A==="value"){let S=x.defaultValue;x.removeAttribute(A),x.defaultValue=S,x.value=x.__value=ee?S:null}else{let S=x.defaultChecked;x.removeAttribute(A),x.defaultChecked=S,x.checked=ee?S:!1}}else e.removeAttribute(M);else z||_.includes(A)&&(l||typeof D!="string")?e[A]=D:typeof D!="function"&&yt(e,A,D)}}}for(let M of Object.getOwnPropertySymbols(t))M.description===hs&&ai(e,()=>t[M]);return a}function Gr(e){return e.__attributes??(e.__attributes={[Kr]:e.nodeName.includes("-"),[Zr]:e.namespaceURI===vs})}var fr=new Map;function Wr(e){var n=fr.get(e.nodeName);if(n)return n;fr.set(e.nodeName,n=[]);for(var t,r=e,i=Element.prototype;i!==r;){t=gr(r);for(var s in t)t[s].set&&n.push(s);r=Dt(r)}return n}function Lt(e=!1){const n=q,t=n.l.u;if(!t)return;let r=()=>gt(n.s);if(e){let i=0,s={};const l=mn(()=>{let u=!1;const a=n.s;for(const c in a)a[c]!==s[c]&&(s[c]=a[c],u=!0);return u&&i++,i});r=()=>O(l)}t.b.length&&xs(()=>{ur(n,r),dt(t.b)}),or(()=>{const i=Bn(()=>t.m.map(Ko));return()=>{for(const s of i)typeof s=="function"&&s()}}),t.a.length&&or(()=>{ur(n,r),dt(t.a)})}function ur(e,n){if(e.l.s)for(const t of e.l.s)O(t);n()}let Sn=!1;function mi(e){var n=Sn;try{return Sn=!1,[e(),Sn]}finally{Sn=n}}const pi={get(e,n){if(!e.exclude.includes(n))return O(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=Be({get[n](){return e.props[n]}},n,Er)),e.special[n](t),tr(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),tr(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function jn(e,n){return new Proxy({props:e,exclude:n,special:{},version:Qe(0)},pi)}const gi={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let i=e.props[r];ln(i)&&(i=i());const s=je(i,n);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const i=je(r,n);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,n){if(n===Ge||n===br)return!1;for(let t of e.props)if(ln(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(ln(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function vi(...e){return new Proxy({props:e},gi)}function dr(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function Be(e,n,t,r){var ee;var i=(t&us)!==0,s=!vn||(t&ds)!==0,l=(t&_s)!==0,u=(t&ms)!==0,a=!1,c;l?[c,a]=mi(()=>e[n]):c=e[n];var p=Ge in e||br in e,_=l&&(((ee=je(e,n))==null?void 0:ee.set)??(p&&n in e&&(S=>e[n]=S)))||void 0,f=r,g=!0,v=!1,F=()=>(v=!0,g&&(g=!1,u?f=Bn(r):f=r),f);c===void 0&&r!==void 0&&(_&&s&&rs(),c=F(),_&&_(c));var A;if(s)A=()=>{var S=e[n];return S===void 0?F():(g=!0,v=!1,S)};else{var z=(i?mn:St)(()=>e[n]);z.f|=Go,A=()=>{var S=O(z);return S!==void 0&&(f=void 0),S===void 0?f:S}}if((t&Er)===0)return A;if(_){var U=e.$$legacy;return function(S,$){return arguments.length>0?((!s||!$||U||a)&&_($?A():S),S):A()}}var M=!1,D=Kn(c),x=mn(()=>{var S=A(),$=O(D);return M?(M=!1,$):D.v=S});return l&&O(x),i||(x.equals=Mt),function(S,$){if(arguments.length>0){const Y=$?O(x):s&&l?Ze(S):S;if(!x.equals(Y)){if(M=!0,ce(D,Y),v&&f!==void 0&&(f=Y),dr(x))return S;Bn(()=>O(x))}return S}return dr(x)?x.v:O(x)}}function hi(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function bi(){const e=q;return e===null&&Dr(),(n,t,r)=>{var s;const i=(s=e.s.$$events)==null?void 0:s[n];if(i){const l=qn(i)?i.slice():[i],u=hi(n,t,r);for(const a of l)a.call(e.x,u);return!u.defaultPrevented}return!0}}function yi(e){q===null&&Dr(),q.l===null&&ts(),wi(q).a.push(e)}function wi(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Ei="5";var pr;typeof window<"u"&&((pr=window.__svelte??(window.__svelte={})).v??(pr.v=new Set)).add(Ei);ls();const Di={__category__:"External libraries",EnzymeForward:"error",EnzymeReverse:"wrong",FiniteDifferences:94.24791283430027,ForwardDiff:1.8463859428051383,MooncakeForward:23.119617392523036,MooncakeReverse:6.327911885209557,ReverseDiff:47.97398509641821,ReverseDiffCompiled:6.135008438027377,Zygote:653.3173557513996},Ri={__category__:"Distributions",EnzymeForward:3.003347949320477,EnzymeReverse:3.4350999478999067,FiniteDifferences:25.542537365070576,ForwardDiff:1.7099391480730226,MooncakeForward:4.289083401456599,MooncakeReverse:4.878327277713032,ReverseDiff:38.99342023587834,ReverseDiffCompiled:3.9487790648666157,Zygote:1932.9352769679303},xi={__category__:"Base Julia features",EnzymeForward:3.172185625371087,EnzymeReverse:2.8928497265868347,FiniteDifferences:42.02696519039059,ForwardDiff:1.6888873079112123,MooncakeForward:7.040441597398732,MooncakeReverse:5.582929720575784,ReverseDiff:23.68569271861572,ReverseDiffCompiled:"wrong",Zygote:1913.4148815102421},Mi={__category__:"External libraries",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:62.209158229761314,ForwardDiff:"wrong",MooncakeForward:"error",MooncakeReverse:"wrong",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Ti={__category__:"DynamicPPL demo models",EnzymeForward:3.9351715515326235,EnzymeReverse:3.6969198051725316,FiniteDifferences:41.403174151305954,ForwardDiff:1.5165296577138403,MooncakeForward:7.578827349939335,MooncakeReverse:6.340337011936693,ReverseDiff:42.505213430065794,ReverseDiffCompiled:4.378621194791324,Zygote:"error"},Fi={__category__:"DynamicPPL demo models",EnzymeForward:3.615665367270504,EnzymeReverse:3.2732577951950934,FiniteDifferences:37.535672556031585,ForwardDiff:1.4814407604649829,MooncakeForward:7.887505558025789,MooncakeReverse:6.314508660607101,ReverseDiff:37.928553686750405,ReverseDiffCompiled:4.0718180245439175,Zygote:3129.914496588219},Si={__category__:"DynamicPPL demo models",EnzymeForward:4.768860672251086,EnzymeReverse:4.231571975385657,FiniteDifferences:63.924817184643516,ForwardDiff:1.4527775743818798,MooncakeForward:13.651970863973792,MooncakeReverse:5.798037735849057,ReverseDiff:30.85721753676727,ReverseDiffCompiled:3.164310813649188,Zygote:"error"},Ni={__category__:"DynamicPPL demo models",EnzymeForward:4.487197575042432,EnzymeReverse:5.40108026822569,FiniteDifferences:68.49297196261682,ForwardDiff:1.4982001022669167,MooncakeForward:15.298006093563192,MooncakeReverse:7.629984051036683,ReverseDiff:57.024617884335626,ReverseDiffCompiled:3.4251004332628443,Zygote:"error"},Ci={__category__:"DynamicPPL demo models",EnzymeForward:4.907235621521336,EnzymeReverse:5.1136899070250035,FiniteDifferences:72.26284321565939,ForwardDiff:1.4879483506474225,MooncakeForward:14.183287237949617,MooncakeReverse:6.579956789638188,ReverseDiff:61.803126718516765,ReverseDiffCompiled:3.951960131135223,Zygote:2056.196944752862},Ai={__category__:"DynamicPPL demo models",EnzymeForward:4.710518721592958,EnzymeReverse:4.631913288056527,FiniteDifferences:69.2928759894459,ForwardDiff:1.5267396514161218,MooncakeForward:13.820263608712375,MooncakeReverse:7.042520880789674,ReverseDiff:62.81751824817518,ReverseDiffCompiled:3.761750716933623,Zygote:1777.7487262986504},ki={__category__:"DynamicPPL demo models",EnzymeForward:4.088248473645885,EnzymeReverse:3.7236775611418635,FiniteDifferences:42.68599017096975,ForwardDiff:1.549627601593858,MooncakeForward:7.597947546942458,MooncakeReverse:6.061512307132531,ReverseDiff:44.226417666303156,ReverseDiffCompiled:4.5732233308653285,Zygote:3476.3752479989057},Oi={__category__:"DynamicPPL demo models",EnzymeForward:4.424949219023605,EnzymeReverse:4.937556357078449,FiniteDifferences:63.67616766467066,ForwardDiff:1.4640369050430453,MooncakeForward:11.967039029099434,MooncakeReverse:5.725286004243934,ReverseDiff:39.46426779442334,ReverseDiffCompiled:3.172161680664492,Zygote:"error"},Ii={__category__:"Distributions",EnzymeForward:2.835225846611046,EnzymeReverse:2.970690693273697,FiniteDifferences:22.888134290107633,ForwardDiff:1.3527860247923584,MooncakeForward:3.961629993043606,MooncakeReverse:6.686906175052689,ReverseDiff:35.51084066271221,ReverseDiffCompiled:3.3395201558884424,Zygote:"error"},Li={__category__:"DynamicPPL demo models",EnzymeForward:5.027522298962274,EnzymeReverse:4.995548208788133,FiniteDifferences:66.00501890927085,ForwardDiff:1.386682976824148,MooncakeForward:12.961464021566323,MooncakeReverse:6.3251346584679915,ReverseDiff:52.252256647962916,ReverseDiffCompiled:3.309194565744784,Zygote:"error"},Pi={__category__:"DynamicPPL demo models",EnzymeForward:4.893231537904789,EnzymeReverse:4.983873499860452,FiniteDifferences:66.73610634059216,ForwardDiff:1.4521536820028678,MooncakeForward:12.725262172967325,MooncakeReverse:6.080636321749885,ReverseDiff:44.524103488936674,ReverseDiffCompiled:3.437742746173178,Zygote:"error"},zi={__category__:"DynamicPPL demo models",EnzymeForward:6.466841040161896,EnzymeReverse:4.395452987547127,FiniteDifferences:67.24641854438126,ForwardDiff:1.4407737667194018,MooncakeForward:13.259253924816363,MooncakeReverse:5.73613146382744,ReverseDiff:47.11678895724767,ReverseDiffCompiled:3.6557696999268114,Zygote:"error"},Vi={__category__:"DynamicPPL demo models",EnzymeForward:5.283678075486748,EnzymeReverse:4.955076912464648,FiniteDifferences:65.15027726111218,ForwardDiff:1.388573024517725,MooncakeForward:14.18992057355732,MooncakeReverse:6.582838819063065,ReverseDiff:48.13305957784021,ReverseDiffCompiled:3.0367978845673815,Zygote:"error"},Bi={__category__:"DynamicPPL demo models",EnzymeForward:4.550874045132899,EnzymeReverse:4.930432893116685,FiniteDifferences:62.23288986421616,ForwardDiff:1.4364965042335665,MooncakeForward:12.113670390418058,MooncakeReverse:5.56826507116941,ReverseDiff:44.40091685767868,ReverseDiffCompiled:2.780041315228662,Zygote:"error"},ji={__category__:"Core Turing syntax",EnzymeForward:3.6017509213329397,EnzymeReverse:2.264753494121239,FiniteDifferences:85.34979716746138,ForwardDiff:1.61065485255434,MooncakeForward:15.541499285082047,MooncakeReverse:5.628265554888174,ReverseDiff:28.41338569233396,ReverseDiffCompiled:2.716204683552946,Zygote:"error"},qi={__category__:"Core Turing syntax",EnzymeForward:3.939600845029072,EnzymeReverse:3.2916662519532998,FiniteDifferences:33.90044869160159,ForwardDiff:1.9070334075659459,MooncakeForward:4.940312398154774,MooncakeReverse:6.967742562281556,ReverseDiff:55.23806230766571,ReverseDiffCompiled:8.010949904188339,Zygote:"error"},$i={__category__:"DynamicPPL arXiV paper",EnzymeForward:1.4748527624567633,EnzymeReverse:2.0734172709475156,FiniteDifferences:26.871932773109243,ForwardDiff:1.447780599111716,MooncakeForward:3.886104452676691,MooncakeReverse:9.423297565358629,ReverseDiff:123.20466915688367,ReverseDiffCompiled:19.489040880149396,Zygote:11.722934968338526},Ui={__category__:"DynamicPPL arXiV paper",EnzymeForward:4.797713449842174,EnzymeReverse:2.4951312113939492,FiniteDifferences:167.54490487257257,ForwardDiff:3.5049041235363987,MooncakeForward:22.425169932821877,MooncakeReverse:4.091601635079896,ReverseDiff:29.047704091756955,ReverseDiffCompiled:2.4018482605770375,Zygote:650.5959588017927},Hi={__category__:"DynamicPPL arXiV paper",EnzymeForward:5305.212355086504,EnzymeReverse:1.9952817527304394,FiniteDifferences:129505.19773018235,ForwardDiff:3437.4171390201263,MooncakeForward:11525.113975829388,MooncakeReverse:3.6290277060746856,ReverseDiff:1.0605337078651687,ReverseDiffCompiled:.2559587935506103,Zygote:4.1063345962517355},Ki={__category__:"Distributions",EnzymeForward:4.850103449115205,EnzymeReverse:6.588417150451144,FiniteDifferences:156.09305040516412,ForwardDiff:2.603366384690057,MooncakeForward:22.949692526838756,MooncakeReverse:5.7871140244954296,ReverseDiff:59.73415426714555,ReverseDiffCompiled:7.296144939381556,Zygote:"error"},Zi={__category__:"DynamicPPL arXiV paper",EnzymeForward:35.86735435872165,EnzymeReverse:9.960771631677012,FiniteDifferences:"NaN",ForwardDiff:28.19947731586323,MooncakeForward:191.59235017265033,MooncakeReverse:5.017156315106132,ReverseDiff:82.97803258182684,ReverseDiffCompiled:10.787222208860454,Zygote:"error"},Gi={__category__:"DynamicPPL arXiV paper",EnzymeForward:"error",EnzymeReverse:3.0181114281504104,FiniteDifferences:3390.8033166927075,ForwardDiff:180.24934565251533,MooncakeForward:437.6584604624156,MooncakeReverse:4.372717462806998,ReverseDiff:84.73474704614749,ReverseDiffCompiled:12.726291289541493,Zygote:"error"},Wi={__category__:"DynamicPPL arXiV paper",EnzymeForward:43.02694124308489,EnzymeReverse:3.25987033623366,FiniteDifferences:1107.1617125982648,ForwardDiff:54.938808059108815,MooncakeForward:"wrong",MooncakeReverse:4.779797505674754,ReverseDiff:63.94485143165856,ReverseDiffCompiled:7.890735768082798,Zygote:170.44121671623452},Xi={__category__:"DynamicPPL arXiV paper",EnzymeForward:152.36143856437138,EnzymeReverse:.9886078700586834,FiniteDifferences:2773.9334609006914,ForwardDiff:157.47825617960973,MooncakeForward:724.5352555634648,MooncakeReverse:4.616148664294041,ReverseDiff:187.77938631577499,ReverseDiffCompiled:26.44220920596503,Zygote:4720.325634702574},Ji={__category__:"DynamicPPL arXiV paper",EnzymeForward:316.1821490571685,EnzymeReverse:2.1210181905505197,FiniteDifferences:6715.696480868021,ForwardDiff:87.86179979994283,MooncakeForward:1249.6256589015475,MooncakeReverse:4.661948979530746,ReverseDiff:50.270069279589165,ReverseDiffCompiled:4.786249608405427,Zygote:"error"},Yi={__category__:"Core Turing syntax",EnzymeForward:3.299395173508842,EnzymeReverse:3.207206520548206,FiniteDifferences:40.62046431642304,ForwardDiff:1.409172932330827,MooncakeForward:7.090643171943985,MooncakeReverse:6.374228263947891,ReverseDiff:44.653169574912404,ReverseDiffCompiled:3.572176719395614,Zygote:2177.931809383029},Qi={__category__:"External libraries",EnzymeForward:"error",EnzymeReverse:"wrong",FiniteDifferences:255.80529732198193,ForwardDiff:"wrong",MooncakeForward:"wrong",MooncakeReverse:"wrong",ReverseDiff:"wrong",ReverseDiffCompiled:"wrong",Zygote:"error"},ea={__category__:"Core Turing syntax",EnzymeForward:3.8077490459992926,EnzymeReverse:2.801059730250482,FiniteDifferences:63.20788170267748,ForwardDiff:1.3518763421317885,MooncakeForward:18.93617021276596,MooncakeReverse:14.883649724433559,ReverseDiff:38.664896185417675,ReverseDiffCompiled:3.8888888888888893,Zygote:"error"},na={__category__:"Base Julia features",EnzymeForward:3.1959198813056378,EnzymeReverse:13.08400168847615,FiniteDifferences:15.251145905907375,ForwardDiff:1.0287169811320755,MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:4.9719110245169675,ReverseDiffCompiled:"wrong",Zygote:"error"},ta={__category__:"Effect of model size",EnzymeForward:5.403391466188736,EnzymeReverse:1.9511555256390345,FiniteDifferences:148.21099496709255,ForwardDiff:2.0232368767677182,MooncakeForward:26.95810564663024,MooncakeReverse:5.624498198661862,ReverseDiff:29.643893104142887,ReverseDiffCompiled:2.876536390001381,Zygote:"error"},ra={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:4.686418035068189,FiniteDifferences:39.76221601950323,ForwardDiff:1.241521303753288,MooncakeForward:12.562298866905836,MooncakeReverse:9.11933909125047,ReverseDiff:14.223168654173763,ReverseDiffCompiled:1.464457803455242,Zygote:909.0247424947767},oa={__category__:"Effect of model size",EnzymeForward:25.874664679582715,EnzymeReverse:2.0583526981667957,FiniteDifferences:637.0381938050164,ForwardDiff:10.394535082300786,MooncakeForward:132.25735213731278,MooncakeReverse:5.287627887353654,ReverseDiff:30.5730699381046,ReverseDiffCompiled:2.7315441176470587,Zygote:"error"},sa={__category__:"Effect of model size",EnzymeForward:56.35105239871058,EnzymeReverse:2.198836921554071,FiniteDifferences:1273.2426436733497,ForwardDiff:19.083381827250808,MooncakeForward:275.54087196306585,MooncakeReverse:6.0076091057728584,ReverseDiff:34.642680686640915,ReverseDiffCompiled:3.115493667695797,Zygote:"error"},ia={__category__:"Effect of model size",EnzymeForward:250.69391762142104,EnzymeReverse:2.02966728875732,FiniteDifferences:6930.768301141261,ForwardDiff:96.83754326375303,MooncakeForward:1389.9340606816293,MooncakeReverse:5.768776077885953,ReverseDiff:28.798458644205486,ReverseDiffCompiled:2.8541151995839296,Zygote:"error"},aa={__category__:"Distributions",EnzymeForward:2.8179875217453865,EnzymeReverse:3.4404138133776025,FiniteDifferences:24.70235694264032,ForwardDiff:1.7324921852799091,MooncakeForward:4.079631397869019,MooncakeReverse:5.002557210220992,ReverseDiff:42.11445988284975,ReverseDiffCompiled:3.978996975208572,Zygote:"error"},la={__category__:"Distributions",EnzymeForward:2.1020668467209345,EnzymeReverse:6.733946370670281,FiniteDifferences:19.0065734846388,ForwardDiff:1.299859093412332,MooncakeForward:3.836970346305384,MooncakeReverse:7.328121298270551,ReverseDiff:13.563023926692686,ReverseDiffCompiled:2.732643907503386,Zygote:"error"},ca={__category__:"Core Turing syntax",EnzymeForward:3.547081287066517,EnzymeReverse:3.468703855183623,FiniteDifferences:31.913023967363586,ForwardDiff:1.8414451956205173,MooncakeForward:4.454454689003501,MooncakeReverse:6.6357596853854135,ReverseDiff:74.76950565812984,ReverseDiffCompiled:6.974003021885692,Zygote:"error"},fa={__category__:"Core Turing syntax",EnzymeForward:3.6355803906749333,EnzymeReverse:3.1264125597061323,FiniteDifferences:34.53288229800223,ForwardDiff:1.7408166393700535,MooncakeForward:4.777203679554507,MooncakeReverse:6.563856605708426,ReverseDiff:48.15464287545505,ReverseDiffCompiled:4.740297014409391,Zygote:3870.7000858074475},ua={__category__:"Core Turing syntax",EnzymeForward:3.364777786456299,EnzymeReverse:3.091010572857794,FiniteDifferences:56.62440912516271,ForwardDiff:1.4962009969438363,MooncakeForward:6.012345041618624,MooncakeReverse:5.904082571575105,ReverseDiff:32.40526665036845,ReverseDiffCompiled:3.1002955935931804,Zygote:"error"},da={__category__:"Core Turing syntax",EnzymeForward:3.3128590115452425,EnzymeReverse:2.771032184905713,FiniteDifferences:31.262063086104003,ForwardDiff:1.636942403008033,MooncakeForward:4.327784683423397,MooncakeReverse:5.4466541801464325,ReverseDiff:35.36417588346372,ReverseDiffCompiled:3.6897484320719967,Zygote:4673.273167548258},_a={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:22.070361933687675,ForwardDiff:"NaN",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"NaN",ReverseDiffCompiled:3.6088545793126805,Zygote:2125.2173322005096},ma={__category__:"Distributions",EnzymeForward:3.6198574646797788,EnzymeReverse:2.770779422805713,FiniteDifferences:36.402606680489974,ForwardDiff:1.6499842757036585,MooncakeForward:4.596422801665419,MooncakeReverse:6.120505507246376,ReverseDiff:22.52806384251756,ReverseDiffCompiled:3.1559718206621326,Zygote:3073.505925963713},pa={__category__:"External libraries",EnzymeForward:"wrong",EnzymeReverse:"wrong",FiniteDifferences:62.64145499601735,ForwardDiff:"wrong",MooncakeForward:"error",MooncakeReverse:"wrong",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ga={__category__:"PosteriorDB",EnzymeForward:7.641417311850457,EnzymeReverse:3.0728374538723635,FiniteDifferences:139.51074403303704,ForwardDiff:2.165424402583909,MooncakeForward:29.455020661886763,MooncakeReverse:7.0787838359723345,ReverseDiff:45.35854781519572,ReverseDiffCompiled:4.08317126884635,Zygote:"error"},va={__category__:"PosteriorDB",EnzymeForward:7.771272443403591,EnzymeReverse:3.0421425945035527,FiniteDifferences:142.71632896305127,ForwardDiff:2.214752567693744,MooncakeForward:31.33237972298782,MooncakeReverse:6.22392660024371,ReverseDiff:46.13934221333429,ReverseDiffCompiled:3.807593871612383,Zygote:"error"},ha={__category__:"Core Turing syntax",EnzymeForward:2.9381903388213098,EnzymeReverse:2.2027471831877454,FiniteDifferences:40.81294592079413,ForwardDiff:1.3759082849494142,MooncakeForward:6.264580617868331,MooncakeReverse:5.203819111537233,ReverseDiff:19.81352859135286,ReverseDiffCompiled:1.8834357645316548,Zygote:2425.4437688913595},ba={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:12.2345011364527,FiniteDifferences:44.19845313588212,ForwardDiff:1.1393999593242006,MooncakeForward:15.994524804853686,MooncakeReverse:11.026258432797094,ReverseDiff:17.018721573881468,ReverseDiffCompiled:4.342897515406053,Zygote:414.03640343492174},ya={__category__:"Core Turing syntax",EnzymeForward:3.9778275090377004,EnzymeReverse:3.786162614529976,FiniteDifferences:41.729325861776196,ForwardDiff:1.504994846279634,MooncakeForward:7.541347744568213,MooncakeReverse:6.213770926854323,ReverseDiff:42.92395216533148,ReverseDiffCompiled:4.021830006259998,Zygote:"error"},wa={__category__:"Base Julia features",EnzymeForward:3.4442350014975713,EnzymeReverse:2.965320587833894,FiniteDifferences:32.21594691168964,ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Ea={abstractgps:Di,assume_beta:Ri,control_flow:xi,delaydiffeq:Mi,demo_assume_dot_observe:Ti,demo_assume_dot_observe_literal:Fi,demo_assume_index_observe:Si,demo_assume_matrix_observe_matrix_index:Ni,demo_assume_multivariate_observe:Ci,demo_assume_multivariate_observe_literal:Ai,demo_assume_observe_literal:ki,demo_assume_submodel_observe_index_literal:Oi,assume_dirichlet:Ii,demo_dot_assume_observe:Li,demo_dot_assume_observe_index:Pi,demo_dot_assume_observe_index_literal:zi,demo_dot_assume_observe_matrix_index:Vi,demo_dot_assume_observe_submodel:Bi,dot_assume:ji,dot_observe:qi,dppl_gauss_unknown:$i,dppl_hier_poisson:Ui,dppl_high_dim_gauss:Hi,assume_lkjcholu:Ki,dppl_hmm_semisup:Zi,dppl_lda:Gi,dppl_logistic_regression:Wi,dppl_naive_bayes:Xi,dppl_sto_volatility:Ji,dynamic_constraint:Yi,lux_nn:Qi,multiple_constraints_same_var:ea,multithreaded:na,n010:ta,assume_mvnormal:ra,n050:oa,n100:sa,n500:ia,observe_bernoulli:aa,observe_categorical:la,observe_index:ca,observe_literal:fa,observe_multivariate:ua,observe_submodel:da,observe_von_mises:_a,assume_normal:ma,ordinarydiffeq:pa,pdb_eight_schools_centered:ga,pdb_eight_schools_noncentered:va,assume_submodel:ha,assume_wishart:ba,broadcast_macro:ya,call_C:wa},Da=`#=
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

model = dppl_lda(k, m, w, doc, alpha, beta)`,Wa=`using StatsFuns: logistic

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

model = multithreaded([1.5, 2.0, 2.5, 1.5, 2.0, 2.5])`,tl=`@model function n010(::Type{TV} = Vector{Float64}) where {TV}
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

model = observe_index()`,fl=`@model function observe_literal()
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

model = call_C()`,El={abstractgps:Da,assume_beta:Ra,control_flow:xa,delaydiffeq:Ma,demo_assume_dot_observe:Ta,demo_assume_dot_observe_literal:Fa,demo_assume_index_observe:Sa,demo_assume_matrix_observe_matrix_index:Na,demo_assume_multivariate_observe:Ca,demo_assume_multivariate_observe_literal:Aa,demo_assume_observe_literal:ka,demo_assume_submodel_observe_index_literal:Oa,assume_dirichlet:Ia,demo_dot_assume_observe:La,demo_dot_assume_observe_index:Pa,demo_dot_assume_observe_index_literal:za,demo_dot_assume_observe_matrix_index:Va,demo_dot_assume_observe_submodel:Ba,dot_assume:ja,dot_observe:qa,dppl_gauss_unknown:$a,dppl_hier_poisson:Ua,dppl_high_dim_gauss:Ha,assume_lkjcholu:Ka,dppl_hmm_semisup:Za,dppl_lda:Ga,dppl_logistic_regression:Wa,dppl_naive_bayes:Xa,dppl_sto_volatility:Ja,dynamic_constraint:Ya,lux_nn:Qa,multiple_constraints_same_var:el,multithreaded:nl,n010:tl,assume_mvnormal:rl,n050:ol,n100:sl,n500:il,observe_bernoulli:al,observe_categorical:ll,observe_index:cl,observe_literal:fl,observe_multivariate:ul,observe_submodel:dl,observe_von_mises:_l,assume_normal:ml,ordinarydiffeq:pl,pdb_eight_schools_centered:gl,pdb_eight_schools_noncentered:vl,assume_submodel:hl,assume_wishart:bl,broadcast_macro:yl,call_C:wl},Dl="1.19.0",Rl="1.5.0",xl="0.5.24",Ml="5.10.0",Tl="0.13.6",Fl="0.4.5",Sl="0.1.42",Nl="4.4.0",Cl="0.8.3",Al="0.8.9",kl="0.7.0",Ol="0.4.1",Il="1.1.3",Ll="2.5.0",Pl="1.1.2",zl="0.4.0",Vl="0.5.4",Bl="3.5.1+1",jl="7.22.0",ql="1.12.1",$l="1.11.0",Ul="1.1.2",Hl="0.5.2",Kl="1.1.0",Zl="0.4.8",Gl="0.5.1",Wl="0.4.6",Xl="1.11.0",Jl="0.1.1",Yl="0.15.12",Ql="0.1.9",ec="0.1.6",nc="1.6.0",tc="1.2.2",rc="0.5.0",oc="0.2.7",sc="0.10.15",ic="0.3.14",ac="1.72.6",lc="1.26.0",cc="1.3.1",fc="0.1.10",uc="0.10.43",dc="0.10.4+0",_c="0.1.13",mc="0.7.8",pc="3.31.0",gc="0.12.1",vc="0.11.0",hc="0.13.1",bc="1.0.3",yc="0.2.4",wc="0.3.1",Ec="1.0.0",Dc="4.18.1",Rc="1.1.1+0",xc="0.1.2",Mc="0.2.3",Tc="2.5.0",Fc="0.1.2",Sc="1.6.0",Nc="0.1.3",Cc="0.3.1",Ac="4.1.1",kc="1.16.0",Oc="0.7.13",Ic="1.8.1",Lc="0.18.22",Pc="1.0.0",zc="1.11.0",Vc="0.1.2",Bc="5.61.1",jc="1.9.1",qc="0.4.0",$c="6.191.0",Uc="4.10.1",Hc="5.24.1",Kc="1.1.0",Zc="1.15.1",Gc="0.7.12",Wc="0.4.26",Xc="0.10.12",Jc="1.11.0",Yc="0.25.122",Qc="0.6.58",ef="0.9.5",nf="1.6.0",tf="0.38.9",rf="2.0.0",of="1.0.5",sf="0.13.104",af="0.8.17",lf="0.0.216+0",cf="0.1.11",ff="1.28.0",uf="0.1.10",df="0.10.14",_f="1.10.0",mf="3.3.11+0",pf="0.2.2",gf="0.1.1",vf="0.3.5",hf="0.3.2",bf="1.1.0",yf="1.2.0",wf="1.17.1",Ef="0.9.24",Df="1.11.0",Rf="1.15.0",xf="2.29.0",Mf="0.12.33",Tf="0.8.5",Ff="1.3.0",Sf="0.1.2",Nf="1.1.3",Cf="0.1.3",Af="0.5.2",kf="1.11.0",Of="0.2.0",If="1.7.4",Lf="0.6.2",Pf="0.5.6",zf="1.3.1",Vf="1.13.1",Bf="0.17.2",jf="1.14.6+0",qf="1.10.19",$f="0.2.0",Uf="2.12.2+0",Hf="0.3.28",Kf="0.4.15",Zf="0.1.1",Gf="0.1.7",Wf="0.10.5",Xf="0.3.8",Jf="0.1.5",Yf="0.3.1",Qf="1.4.5",eu="2025.2.0+0",nu="1.11.0",tu="0.7.0",ru="0.16.2",ou="0.7.12",su="0.1.17",iu="1.3.1",au="0.2.6",lu="1.10.0",cu="1.0.0",fu="0.5.15",uu="1.7.1",du="1.14.3",_u="0.2.1",mu="0.2.4",pu="0.9.39",gu="0.6.10",vu="0.10.66",hu="0.10.2",bu="9.4.4",yu="0.0.38+0",wu="1.4.0",Eu="0.1.17",Du="2.9.1",Ru="1.11.0",xu="0.3.1",Mu="0.2.1",Tu="0.6.4",Fu="8.6.0+0",Su="1.11.0",Nu="1.7.2+0",Cu="1.11.0+1",Au="0.9.1+6",ku="1.11.0",Ou="1.18.0+0",Iu="0.9.10",Lu="0.1.4",Pu="7.4.1",zu="1.11.0",Vu="3.47.0",Bu="2.2.0",ju="1.13.1",qu="0.3.29",$u="1.11.0",Uu="1.2.0",Hu="1.21.1",Ku="1.4.2",Zu="1.13.0",Gu="0.10.7",Wu="7.6.0",Xu="0.3.15",Ju="2025.2.0+0",Yu="1.0.0",Qu="1.15.1",ed="0.7.18",nd="1.12.0",td="0.4.17",rd="0.4.8",od="4.3.2+0",sd="0.1.11",id="5.5.4+0",ad="0.5.16",ld="0.1.8",cd="0.4.2",fd="1.11.0",ud="0.1.4",dd="1.1.9",_d="2.28.6+0",md="0.2.0",pd="10.1.4+3",gd="1.2.0",vd="2.1.0",hd="1.11.0",bd="0.4.176",yd="0.3.4",wd="0.3.7",Ed="2023.12.12",Dd="0.2.4",Rd="0.10.3",xd="7.10.0",Md="0.9.31",Td="0.4.3",Fd="1.1.3",Sd="0.1.5",Nd="0.10.5",Cd="1.0.0",Ad="1.2.0",kd="4.12.0",Od="2.4.0",Id="1.10.0",Ld="1.11.0",Pd="1.6.0",zd="0.5.0",Vd="1.17.0",Bd="0.3.27+1",jd="0.8.5+0",qd="5.0.9+0",$d="1.6.0",Ud="3.5.4+0",Hd="0.5.6+0",Kd="1.13.2",Zd="0.4.6",Gd="5.1.0",Wd="4.0.2",Xd="0.4.8",Jd="1.8.1",Yd="6.103.0",Qd="1.5.0",e1="1.10.1",n1="1.36.0",t1="1.8.0",r1="1.16.1",o1="1.4.0",s1="1.8.0",i1="1.9.0",a1="1.16.0",l1="1.4.0",c1="1.5.0",f1="1.5.0",u1="1.7.0",d1="1.6.0",_1="1.6.0",m1="1.7.0",p1="1.15.0",g1="1.4.0",v1="1.6.0",h1="1.4.0",b1="1.4.0",y1="1.5.0",w1="1.18.1",E1="1.7.0",D1="1.7.0",R1="1.6.0",x1="1.4.0",M1="1.7.0",T1="1.5.0",F1="1.6.0",S1="0.11.36",N1="1.0.2",C1="0.5.12",A1="0.12.3",k1="2.8.3",O1="1.2.1",I1="0.3.6",L1="1.11.0",P1="0.4.7",z1="0.7.18",V1="0.2.2",B1="1.4.3",j1="0.2.4",q1="0.4.34",$1="1.2.1",U1="1.5.0",H1="0.2.0",K1="3.1.1",Z1="1.11.0",G1="0.1.5",W1="1.11.0",X1="1.3.0",J1="2.11.2",Y1="1.11.0",Q1="1.11.0",e0="1.7.1",n0="1.6.0",t0="0.3.2",r0="0.4.5",o0="0.1.0",s0="1.3.4",i0="3.39.0",a0="1.2.2",l0="1.3.1",c0="1.1.1",f0="1.16.1",u0="1.4.2",d0="0.9.0",_0="0.5.1+0",m0="2.2.10",p0="0.5.16",g0="0.7.0",v0="0.1.0",h0="0.5.2",b0="2.127.0",y0="0.1.11",w0="1.5.0",E0="1.12.0",D0="1.0.0",R0="7.90.0",x0="1.7.0",M0="3.0.0",T0="1.5.0",F0="1.3.0",S0="1.4.8",N0="1.11.0",C0="1.1.2",A0="1.11.0",k0="0.1.0",O0="1.2.0",I0="2.9.0",L0="0.9.5",P0="1.1.0",z0="1.11.0",V0="1.2.2",B0="1.11.0",j0="1.1.3",q0="0.1.2",$0="0.4.23",U0="2.6.1",H0="0.1.15",K0="0.1.2",Z0="1.3.1",G0="1.8.0",W0="1.9.15",X0="1.4.4",J0="3.5.0",Y0="1.11.1",Q0="1.7.1",e_="0.34.8",n_="1.5.2",t_="0.5.8",r_="0.4.1",o_="0.3.7",s_="0.4.1",i_="0.7.2",a_="0.3.1",l_="1.11.0",c_="2.6.0",f_="1.11.0",u_=null,d_="7.7.0+0",__="0.3.46",m_="1.0.3",p_="1.0.1",g_="1.12.1",v_="1.10.0",h_="0.1.1",b_="0.1.7",y_="1.11.0",w_="0.5.5",E_="0.5.29",D_="0.2.38",R_="0.1.6",x_="0.11.3",M_="0.4.85",T_="1.4.0",F_="0.41.1",S_="1.6.1",N_="1.11.0",C_="1.0.2",A_="1.11.0",k_="1.25.1",O_="1.0.0",I_="0.3.0",L_="1.4.2",P_="1.2.2",z_="1.0.0",V_="1.6.1",B_="2.13.9+0",j_="0.18.1+0",q_="0.10.1",$_="1.2.13+1",U_="0.7.10",H_="0.2.7",K_="1.1.4+0",Z_="5.11.0+0",G_="1.59.0+0",W_="2022.0.0+1",X_="17.4.0+2",J_={ADTypes:Dl,AbstractFFTs:Rl,AbstractGPs:xl,AbstractMCMC:Ml,AbstractPPL:Tl,AbstractTrees:Fl,Accessors:Sl,Adapt:Nl,AdvancedHMC:Cl,AdvancedMH:Al,AdvancedPS:kl,AdvancedVI:Ol,AliasTables:Il,ArgCheck:Ll,ArgTools:Pl,ArnoldiMethod:zl,Arpack:Vl,Arpack_jll:Bl,ArrayInterface:jl,ArrayLayouts:ql,Artifacts:$l,Atomix:Ul,AtomsBase:Hl,AxisAlgorithms:Kl,AxisArrays:Zl,BFloat16s:Gl,BangBang:Wl,Base64:Xl,Baselet:Jl,Bijectors:Yl,BitFlags:Ql,BitTwiddlingConvenienceFunctions:ec,BracketingNonlinearSolve:nc,BufferedStreams:tc,CEnum:rc,CPUSummary:oc,CSV:sc,Cassette:ic,ChainRules:ac,ChainRulesCore:lc,Chairmarks:cc,ChangesOfVariables:fc,Chemfiles:uc,Chemfiles_jll:dc,CloseOpenIntervals:_c,CodecZlib:mc,ColorSchemes:pc,ColorTypes:gc,ColorVectorSpace:vc,Colors:hc,Combinatorics:bc,CommonSolve:yc,CommonSubexpressions:wc,CommonWorldInvalidations:Ec,Compat:Dc,CompilerSupportLibraries_jll:Rc,CompositionsBase:xc,ConcreteStructs:Mc,ConcurrentUtilities:Tc,ConsoleProgressMonitor:Fc,ConstructionBase:Sc,ContextVariablesX:Nc,CpuId:Cc,Crayons:Ac,DataAPI:kc,DataDeps:Oc,DataFrames:Ic,DataStructures:Lc,DataValueInterfaces:Pc,Dates:zc,DefineSingletons:Vc,DelayDiffEq:Bc,DelimitedFiles:jc,DensityInterface:qc,DiffEqBase:$c,DiffEqCallbacks:Uc,DiffEqNoiseProcess:Hc,DiffResults:Kc,DiffRules:Zc,DifferentiationInterface:Gc,DispatchDoctor:Wc,Distances:Xc,Distributed:Jc,Distributions:Yc,DistributionsAD:Qc,DocStringExtensions:ef,Downloads:nf,DynamicPPL:tf,EllipticalSliceSampling:rf,EnumX:of,Enzyme:sf,EnzymeCore:af,Enzyme_jll:lf,ExceptionUnwrapping:cf,ExponentialUtilities:ff,ExprTools:uf,ExproniconLite:df,FFTW:_f,FFTW_jll:mf,FLoops:pf,FLoopsBase:gf,FastBroadcast:vf,FastClosures:hf,FastGaussQuadrature:bf,FastPower:yf,FileIO:wf,FilePathsBase:Ef,FileWatching:Df,FillArrays:Rf,FiniteDiff:xf,FiniteDifferences:Mf,FixedPointNumbers:Tf,ForwardDiff:Ff,FunctionProperties:Sf,FunctionWrappers:Nf,FunctionWrappersWrappers:Cf,Functors:Af,Future:kf,GPUArraysCore:Of,GPUCompiler:If,GZip:Lf,GenericSchur:Pf,Glob:zf,Graphs:Vf,HDF5:Bf,HDF5_jll:jf,HTTP:qf,HashArrayMappedTries:$f,Hwloc_jll:Uf,HypergeometricFunctions:Hf,IRTools:Kf,IfElse:Zf,ImageBase:Gf,ImageCore:Wf,ImageShow:Xf,Inflate:Jf,InitialValues:Yf,InlineStrings:Qf,IntelOpenMP_jll:eu,InteractiveUtils:nu,InternedStrings:tu,Interpolations:ru,IntervalSets:ou,InverseFunctions:su,InvertedIndices:iu,IrrationalConstants:au,IterTools:lu,IteratorInterfaceExtensions:cu,JLD2:fu,JLLWrappers:uu,JSON:"1.3.0",JSON3:du,Jieko:_u,JuliaVariables:mu,KernelAbstractions:pu,KernelDensity:gu,KernelFunctions:vu,Krylov:hu,LLVM:bu,LLVMExtra_jll:yu,LaTeXStrings:wu,LayoutPointers:Eu,LazyArrays:Du,LazyArtifacts:Ru,LazyModules:xu,LeftChildRightSiblingTrees:Mu,LibCURL:Tu,LibCURL_jll:Fu,LibGit2:Su,LibGit2_jll:Nu,LibSSH2_jll:Cu,LibTracyClient_jll:Au,Libdl:ku,Libiconv_jll:Ou,Libtask:Iu,LineSearch:Lu,LineSearches:Pu,LinearAlgebra:zu,LinearSolve:Vu,LogDensityProblems:Bu,LogDensityProblemsAD:ju,LogExpFunctions:qu,Logging:$u,LoggingExtras:Uu,Lux:Hu,LuxCore:Ku,LuxLib:Zu,MAT:Gu,MCMCChains:Wu,MCMCDiagnosticTools:Xu,MKL_jll:Ju,MLCore:Yu,MLDataDevices:Qu,MLDatasets:ed,MLJModelInterface:nd,MLStyle:td,MLUtils:rd,MPICH_jll:od,MPIPreferences:sd,MPItrampoline_jll:id,MacroTools:ad,ManualMemory:ld,MappedArrays:cd,Markdown:fd,MaybeInplace:ud,MbedTLS:dd,MbedTLS_jll:_d,MicroCollections:md,MicrosoftMPI_jll:pd,Missings:gd,MistyClosures:vd,Mmap:hd,Mooncake:bd,MosaicViews:yd,Moshi:wd,MozillaCACerts_jll:Ed,MuladdMacro:Dd,MultivariateStats:Rd,NLSolversBase:xd,NNlib:Md,NPZ:Td,NaNMath:Fd,NameResolution:Sd,NamedArrays:Nd,NaturalSort:Cd,NetworkOptions:Ad,NonlinearSolve:kd,NonlinearSolveBase:Od,NonlinearSolveFirstOrder:Id,NonlinearSolveQuasiNewton:Ld,NonlinearSolveSpectralMethods:Pd,ObjectFile:zd,OffsetArrays:Vd,OpenBLAS_jll:Bd,OpenLibm_jll:jd,OpenMPI_jll:qd,OpenSSL:$d,OpenSSL_jll:Ud,OpenSpecFun_jll:Hd,Optim:Kd,Optimisers:Zd,Optimization:Gd,OptimizationBase:Wd,OptimizationOptimJL:Xd,OrderedCollections:Jd,OrdinaryDiffEq:Yd,OrdinaryDiffEqAdamsBashforthMoulton:Qd,OrdinaryDiffEqBDF:e1,OrdinaryDiffEqCore:n1,OrdinaryDiffEqDefault:t1,OrdinaryDiffEqDifferentiation:r1,OrdinaryDiffEqExplicitRK:o1,OrdinaryDiffEqExponentialRK:s1,OrdinaryDiffEqExtrapolation:i1,OrdinaryDiffEqFIRK:a1,OrdinaryDiffEqFeagin:l1,OrdinaryDiffEqFunctionMap:c1,OrdinaryDiffEqHighOrderRK:f1,OrdinaryDiffEqIMEXMultistep:u1,OrdinaryDiffEqLinear:d1,OrdinaryDiffEqLowOrderRK:_1,OrdinaryDiffEqLowStorageRK:m1,OrdinaryDiffEqNonlinearSolve:p1,OrdinaryDiffEqNordsieck:g1,OrdinaryDiffEqPDIRK:v1,OrdinaryDiffEqPRK:h1,OrdinaryDiffEqQPRK:b1,OrdinaryDiffEqRKN:y1,OrdinaryDiffEqRosenbrock:w1,OrdinaryDiffEqSDIRK:E1,OrdinaryDiffEqSSPRK:D1,OrdinaryDiffEqStabilizedIRK:R1,OrdinaryDiffEqStabilizedRK:x1,OrdinaryDiffEqSymplecticRK:M1,OrdinaryDiffEqTsit5:T1,OrdinaryDiffEqVerner:F1,PDMats:S1,PackageExtensionCompat:N1,PaddedViews:C1,Parameters:A1,Parsers:k1,PeriodicTable:O1,Pickle:I1,Pkg:L1,PoissonRandom:P1,Polyester:z1,PolyesterWeave:V1,PooledArrays:B1,PositiveFactorizations:j1,PreallocationTools:q1,PrecompileTools:$1,Preferences:U1,PrettyPrint:H1,PrettyTables:K1,Printf:Z1,ProgressLogging:G1,ProgressMeter:W1,PtrArrays:X1,QuadGK:J1,REPL:Y1,Random:Q1,Random123:e0,RandomNumbers:n0,RangeArrays:t0,Ratios:r0,RealDot:o0,RecipesBase:s0,RecursiveArrayTools:i0,Reexport:a0,Requires:l0,ResettableStacks:c0,ReverseDiff:f0,Richardson:u0,Rmath:d0,Rmath_jll:_0,Roots:m0,RuntimeGeneratedFunctions:p0,SHA:g0,SIMDTypes:v0,SSMProblems:h0,SciMLBase:b0,SciMLJacobianOperators:y0,SciMLLogging:w0,SciMLOperators:E0,SciMLPublic:D0,SciMLSensitivity:R0,SciMLStructures:x0,ScientificTypesBase:M0,ScopedValues:T0,Scratch:F0,SentinelArrays:S0,Serialization:N0,Setfield:C0,SharedArrays:A0,ShowCases:k0,SimpleBufferStream:O0,SimpleNonlinearSolve:I0,SimpleTraits:L0,SimpleUnPack:P0,Sockets:z0,SortingAlgorithms:V0,SparseArrays:B0,SparseConnectivityTracer:j0,SparseInverseSubset:q0,SparseMatrixColorings:$0,SpecialFunctions:U0,SplittablesBase:H0,StackViews:K0,Static:Z0,StaticArrayInterface:G0,StaticArrays:W0,StaticArraysCore:X0,StatisticalTraits:J0,Statistics:Y0,StatsAPI:Q0,StatsBase:e_,StatsFuns:n_,StrideArraysCore:t_,StridedViews:r_,StringEncodings:o_,StringManipulation:s_,StructArrays:i_,StructIO:a_,StructTypes:l_,StructUtils:c_,StyledStrings:f_,SuiteSparse:u_,SuiteSparse_jll:d_,SymbolicIndexingInterface:__,TOML:m_,TableTraits:p_,Tables:g_,Tar:v_,TensorCore:h_,TerminalLoggers:b_,Test:y_,ThreadingUtilities:w_,TimerOutputs:E_,Tracker:D_,Tracy:R_,TranscodingStreams:x_,Transducers:M_,TruncatedStacktraces:T_,Turing:F_,URIs:S_,UUIDs:N_,UnPack:C_,Unicode:A_,Unitful:k_,UnitfulAtomic:O_,UnsafeAtomics:I_,WeakRefStrings:L_,WeightInitializers:P_,WoodburyMatrices:z_,WorkerUtilities:V_,XML2_jll:B_,Xorg_libpciaccess_jll:j_,ZipFile:q_,Zlib_jll:$_,Zygote:U_,ZygoteRules:H_,libaec_jll:K_,libblastrampoline_jll:Z_,nghttp2_jll:G_,oneTBB_jll:W_,p7zip_jll:X_};function wt(e){return[...e.entries()].sort(([n,t],[r,i])=>n.localeCompare(r))}var Y_=pe('<tr><td class="svelte-7y9k9c"> </td><td class="version svelte-7y9k9c"> </td></tr>'),Q_=pe('<table id="manifest" class="svelte-7y9k9c"><thead><tr><th class="svelte-7y9k9c">Package</th><th class="svelte-7y9k9c">Version</th></tr></thead><tbody></tbody></table>');function em(e,n){hn(n,!1);let t=new Map;for(const[s,l]of Object.entries(J_))t.set(s,l===""?null:l);Lt();var r=Q_(),i=we(W(r));_n(i,5,()=>wt(t),dn,(s,l)=>{let u=()=>O(l)[0],a=()=>O(l)[1];var c=Y_(),p=W(c),_=W(p),f=we(p),g=W(f);Ee(()=>{Ve(_,u()),Ve(g,a()===null?"":`v${a()}`)}),re(s,c)}),re(e,r),bn()}function nm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ut,_r;function tm(){if(_r)return ut;_r=1;function e(o){return o instanceof Map?o.clear=o.delete=o.set=function(){throw new Error("map is read-only")}:o instanceof Set&&(o.add=o.clear=o.delete=function(){throw new Error("set is read-only")}),Object.freeze(o),Object.getOwnPropertyNames(o).forEach(d=>{const h=o[d],N=typeof h;(N==="object"||N==="function")&&!Object.isFrozen(h)&&e(h)}),o}class n{constructor(d){d.data===void 0&&(d.data={}),this.data=d.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(o,...d){const h=Object.create(null);for(const N in o)h[N]=o[N];return d.forEach(function(N){for(const H in N)h[H]=N[H]}),h}const i="</span>",s=o=>!!o.scope,l=(o,{prefix:d})=>{if(o.startsWith("language:"))return o.replace("language:","language-");if(o.includes(".")){const h=o.split(".");return[`${d}${h.shift()}`,...h.map((N,H)=>`${N}${"_".repeat(H+1)}`)].join(" ")}return`${d}${o}`};class u{constructor(d,h){this.buffer="",this.classPrefix=h.classPrefix,d.walk(this)}addText(d){this.buffer+=t(d)}openNode(d){if(!s(d))return;const h=l(d.scope,{prefix:this.classPrefix});this.span(h)}closeNode(d){s(d)&&(this.buffer+=i)}value(){return this.buffer}span(d){this.buffer+=`<span class="${d}">`}}const a=(o={})=>{const d={children:[]};return Object.assign(d,o),d};class c{constructor(){this.rootNode=a(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(d){this.top.children.push(d)}openNode(d){const h=a({scope:d});this.add(h),this.stack.push(h)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(d){return this.constructor._walk(d,this.rootNode)}static _walk(d,h){return typeof h=="string"?d.addText(h):h.children&&(d.openNode(h),h.children.forEach(N=>this._walk(d,N)),d.closeNode(h)),d}static _collapse(d){typeof d!="string"&&d.children&&(d.children.every(h=>typeof h=="string")?d.children=[d.children.join("")]:d.children.forEach(h=>{c._collapse(h)}))}}class p extends c{constructor(d){super(),this.options=d}addText(d){d!==""&&this.add(d)}startScope(d){this.openNode(d)}endScope(){this.closeNode()}__addSublanguage(d,h){const N=d.root;h&&(N.scope=`language:${h}`),this.add(N)}toHTML(){return new u(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(o){return o?typeof o=="string"?o:o.source:null}function f(o){return F("(?=",o,")")}function g(o){return F("(?:",o,")*")}function v(o){return F("(?:",o,")?")}function F(...o){return o.map(h=>_(h)).join("")}function A(o){const d=o[o.length-1];return typeof d=="object"&&d.constructor===Object?(o.splice(o.length-1,1),d):{}}function z(...o){return"("+(A(o).capture?"":"?:")+o.map(N=>_(N)).join("|")+")"}function U(o){return new RegExp(o.toString()+"|").exec("").length-1}function M(o,d){const h=o&&o.exec(d);return h&&h.index===0}const D=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function x(o,{joinWith:d}){let h=0;return o.map(N=>{h+=1;const H=h;let K=_(N),w="";for(;K.length>0;){const y=D.exec(K);if(!y){w+=K;break}w+=K.substring(0,y.index),K=K.substring(y.index+y[0].length),y[0][0]==="\\"&&y[1]?w+="\\"+String(Number(y[1])+H):(w+=y[0],y[0]==="("&&h++)}return w}).map(N=>`(${N})`).join(d)}const ee=/\b\B/,S="[a-zA-Z]\\w*",$="[a-zA-Z_]\\w*",Y="\\b\\d+(\\.\\d+)?",Me="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ge="\\b(0b[01]+)",Ue="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",on=(o={})=>{const d=/^#![ ]*\//;return o.binary&&(o.begin=F(d,/.*\b/,o.binary,/\b.*/)),r({scope:"meta",begin:d,end:/$/,relevance:0,"on:begin":(h,N)=>{h.index!==0&&N.ignoreMatch()}},o)},ne={begin:"\\\\[\\s\\S]",relevance:0},ve={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ne]},Te={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ne]},Ae={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},he=function(o,d,h={}){const N=r({scope:"comment",begin:o,end:d,contains:[]},h);N.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const H=z("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return N.contains.push({begin:F(/[ ]+/,"(",H,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),N},et=he("//","$"),sn=he("/\\*","\\*/"),wn=he("#","$"),Xr={scope:"number",begin:Y,relevance:0},Jr={scope:"number",begin:Me,relevance:0},Yr={scope:"number",begin:ge,relevance:0},Qr={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ne,{begin:/\[/,end:/\]/,relevance:0,contains:[ne]}]},eo={scope:"title",begin:S,relevance:0},no={scope:"title",begin:$,relevance:0},to={begin:"\\.\\s*"+$,relevance:0};var En=Object.freeze({__proto__:null,APOS_STRING_MODE:ve,BACKSLASH_ESCAPE:ne,BINARY_NUMBER_MODE:Yr,BINARY_NUMBER_RE:ge,COMMENT:he,C_BLOCK_COMMENT_MODE:sn,C_LINE_COMMENT_MODE:et,C_NUMBER_MODE:Jr,C_NUMBER_RE:Me,END_SAME_AS_BEGIN:function(o){return Object.assign(o,{"on:begin":(d,h)=>{h.data._beginMatch=d[1]},"on:end":(d,h)=>{h.data._beginMatch!==d[1]&&h.ignoreMatch()}})},HASH_COMMENT_MODE:wn,IDENT_RE:S,MATCH_NOTHING_RE:ee,METHOD_GUARD:to,NUMBER_MODE:Xr,NUMBER_RE:Y,PHRASAL_WORDS_MODE:Ae,QUOTE_STRING_MODE:Te,REGEXP_MODE:Qr,RE_STARTERS_RE:Ue,SHEBANG:on,TITLE_MODE:eo,UNDERSCORE_IDENT_RE:$,UNDERSCORE_TITLE_MODE:no});function ro(o,d){o.input[o.index-1]==="."&&d.ignoreMatch()}function oo(o,d){o.className!==void 0&&(o.scope=o.className,delete o.className)}function so(o,d){d&&o.beginKeywords&&(o.begin="\\b("+o.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",o.__beforeBegin=ro,o.keywords=o.keywords||o.beginKeywords,delete o.beginKeywords,o.relevance===void 0&&(o.relevance=0))}function io(o,d){Array.isArray(o.illegal)&&(o.illegal=z(...o.illegal))}function ao(o,d){if(o.match){if(o.begin||o.end)throw new Error("begin & end are not supported with match");o.begin=o.match,delete o.match}}function lo(o,d){o.relevance===void 0&&(o.relevance=1)}const co=(o,d)=>{if(!o.beforeMatch)return;if(o.starts)throw new Error("beforeMatch cannot be used with starts");const h=Object.assign({},o);Object.keys(o).forEach(N=>{delete o[N]}),o.keywords=h.keywords,o.begin=F(h.beforeMatch,f(h.begin)),o.starts={relevance:0,contains:[Object.assign(h,{endsParent:!0})]},o.relevance=0,delete h.beforeMatch},fo=["of","and","for","in","not","or","if","then","parent","list","value"],uo="keyword";function Pt(o,d,h=uo){const N=Object.create(null);return typeof o=="string"?H(h,o.split(" ")):Array.isArray(o)?H(h,o):Object.keys(o).forEach(function(K){Object.assign(N,Pt(o[K],d,K))}),N;function H(K,w){d&&(w=w.map(y=>y.toLowerCase())),w.forEach(function(y){const T=y.split("|");N[T[0]]=[K,_o(T[0],T[1])]})}}function _o(o,d){return d?Number(d):mo(o)?0:1}function mo(o){return fo.includes(o.toLowerCase())}const zt={},He=o=>{console.error(o)},Vt=(o,...d)=>{console.log(`WARN: ${o}`,...d)},Xe=(o,d)=>{zt[`${o}/${d}`]||(console.log(`Deprecated as of ${o}. ${d}`),zt[`${o}/${d}`]=!0)},Dn=new Error;function Bt(o,d,{key:h}){let N=0;const H=o[h],K={},w={};for(let y=1;y<=d.length;y++)w[y+N]=H[y],K[y+N]=!0,N+=U(d[y-1]);o[h]=w,o[h]._emit=K,o[h]._multi=!0}function po(o){if(Array.isArray(o.begin)){if(o.skip||o.excludeBegin||o.returnBegin)throw He("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Dn;if(typeof o.beginScope!="object"||o.beginScope===null)throw He("beginScope must be object"),Dn;Bt(o,o.begin,{key:"beginScope"}),o.begin=x(o.begin,{joinWith:""})}}function go(o){if(Array.isArray(o.end)){if(o.skip||o.excludeEnd||o.returnEnd)throw He("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Dn;if(typeof o.endScope!="object"||o.endScope===null)throw He("endScope must be object"),Dn;Bt(o,o.end,{key:"endScope"}),o.end=x(o.end,{joinWith:""})}}function vo(o){o.scope&&typeof o.scope=="object"&&o.scope!==null&&(o.beginScope=o.scope,delete o.scope)}function ho(o){vo(o),typeof o.beginScope=="string"&&(o.beginScope={_wrap:o.beginScope}),typeof o.endScope=="string"&&(o.endScope={_wrap:o.endScope}),po(o),go(o)}function bo(o){function d(w,y){return new RegExp(_(w),"m"+(o.case_insensitive?"i":"")+(o.unicodeRegex?"u":"")+(y?"g":""))}class h{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(y,T){T.position=this.position++,this.matchIndexes[this.matchAt]=T,this.regexes.push([T,y]),this.matchAt+=U(y)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const y=this.regexes.map(T=>T[1]);this.matcherRe=d(x(y,{joinWith:"|"}),!0),this.lastIndex=0}exec(y){this.matcherRe.lastIndex=this.lastIndex;const T=this.matcherRe.exec(y);if(!T)return null;const X=T.findIndex((an,tt)=>tt>0&&an!==void 0),Z=this.matchIndexes[X];return T.splice(0,X),Object.assign(T,Z)}}class N{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(y){if(this.multiRegexes[y])return this.multiRegexes[y];const T=new h;return this.rules.slice(y).forEach(([X,Z])=>T.addRule(X,Z)),T.compile(),this.multiRegexes[y]=T,T}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(y,T){this.rules.push([y,T]),T.type==="begin"&&this.count++}exec(y){const T=this.getMatcher(this.regexIndex);T.lastIndex=this.lastIndex;let X=T.exec(y);if(this.resumingScanAtSamePosition()&&!(X&&X.index===this.lastIndex)){const Z=this.getMatcher(0);Z.lastIndex=this.lastIndex+1,X=Z.exec(y)}return X&&(this.regexIndex+=X.position+1,this.regexIndex===this.count&&this.considerAll()),X}}function H(w){const y=new N;return w.contains.forEach(T=>y.addRule(T.begin,{rule:T,type:"begin"})),w.terminatorEnd&&y.addRule(w.terminatorEnd,{type:"end"}),w.illegal&&y.addRule(w.illegal,{type:"illegal"}),y}function K(w,y){const T=w;if(w.isCompiled)return T;[oo,ao,ho,co].forEach(Z=>Z(w,y)),o.compilerExtensions.forEach(Z=>Z(w,y)),w.__beforeBegin=null,[so,io,lo].forEach(Z=>Z(w,y)),w.isCompiled=!0;let X=null;return typeof w.keywords=="object"&&w.keywords.$pattern&&(w.keywords=Object.assign({},w.keywords),X=w.keywords.$pattern,delete w.keywords.$pattern),X=X||/\w+/,w.keywords&&(w.keywords=Pt(w.keywords,o.case_insensitive)),T.keywordPatternRe=d(X,!0),y&&(w.begin||(w.begin=/\B|\b/),T.beginRe=d(T.begin),!w.end&&!w.endsWithParent&&(w.end=/\B|\b/),w.end&&(T.endRe=d(T.end)),T.terminatorEnd=_(T.end)||"",w.endsWithParent&&y.terminatorEnd&&(T.terminatorEnd+=(w.end?"|":"")+y.terminatorEnd)),w.illegal&&(T.illegalRe=d(w.illegal)),w.contains||(w.contains=[]),w.contains=[].concat(...w.contains.map(function(Z){return yo(Z==="self"?w:Z)})),w.contains.forEach(function(Z){K(Z,T)}),w.starts&&K(w.starts,y),T.matcher=H(T),T}if(o.compilerExtensions||(o.compilerExtensions=[]),o.contains&&o.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return o.classNameAliases=r(o.classNameAliases||{}),K(o)}function jt(o){return o?o.endsWithParent||jt(o.starts):!1}function yo(o){return o.variants&&!o.cachedVariants&&(o.cachedVariants=o.variants.map(function(d){return r(o,{variants:null},d)})),o.cachedVariants?o.cachedVariants:jt(o)?r(o,{starts:o.starts?r(o.starts):null}):Object.isFrozen(o)?r(o):o}var wo="11.11.1";class Eo extends Error{constructor(d,h){super(d),this.name="HTMLInjectionError",this.html=h}}const nt=t,qt=r,$t=Symbol("nomatch"),Do=7,Ut=function(o){const d=Object.create(null),h=Object.create(null),N=[];let H=!0;const K="Could not find the language '{}', did you forget to load/include a language module?",w={disableAutodetect:!0,name:"Plain text",contains:[]};let y={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:p};function T(m){return y.noHighlightRe.test(m)}function X(m){let R=m.className+" ";R+=m.parentNode?m.parentNode.className:"";const I=y.languageDetectRe.exec(R);if(I){const B=ke(I[1]);return B||(Vt(K.replace("{}",I[1])),Vt("Falling back to no-highlight mode for this block.",m)),B?I[1]:"no-highlight"}return R.split(/\s+/).find(B=>T(B)||ke(B))}function Z(m,R,I){let B="",G="";typeof R=="object"?(B=m,I=R.ignoreIllegals,G=R.language):(Xe("10.7.0","highlight(lang, code, ...args) has been deprecated."),Xe("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),G=m,B=R),I===void 0&&(I=!0);const _e={code:B,language:G};xn("before:highlight",_e);const Oe=_e.result?_e.result:an(_e.language,_e.code,I);return Oe.code=_e.code,xn("after:highlight",Oe),Oe}function an(m,R,I,B){const G=Object.create(null);function _e(b,E){return b.keywords[E]}function Oe(){if(!C.keywords){J.addText(j);return}let b=0;C.keywordPatternRe.lastIndex=0;let E=C.keywordPatternRe.exec(j),k="";for(;E;){k+=j.substring(b,E.index);const L=ye.case_insensitive?E[0].toLowerCase():E[0],Q=_e(C,L);if(Q){const[Fe,Bo]=Q;if(J.addText(k),k="",G[L]=(G[L]||0)+1,G[L]<=Do&&(Fn+=Bo),Fe.startsWith("_"))k+=E[0];else{const jo=ye.classNameAliases[Fe]||Fe;be(E[0],jo)}}else k+=E[0];b=C.keywordPatternRe.lastIndex,E=C.keywordPatternRe.exec(j)}k+=j.substring(b),J.addText(k)}function Mn(){if(j==="")return;let b=null;if(typeof C.subLanguage=="string"){if(!d[C.subLanguage]){J.addText(j);return}b=an(C.subLanguage,j,!0,Yt[C.subLanguage]),Yt[C.subLanguage]=b._top}else b=rt(j,C.subLanguage.length?C.subLanguage:null);C.relevance>0&&(Fn+=b.relevance),J.__addSublanguage(b._emitter,b.language)}function ae(){C.subLanguage!=null?Mn():Oe(),j=""}function be(b,E){b!==""&&(J.startScope(E),J.addText(b),J.endScope())}function Gt(b,E){let k=1;const L=E.length-1;for(;k<=L;){if(!b._emit[k]){k++;continue}const Q=ye.classNameAliases[b[k]]||b[k],Fe=E[k];Q?be(Fe,Q):(j=Fe,Oe(),j=""),k++}}function Wt(b,E){return b.scope&&typeof b.scope=="string"&&J.openNode(ye.classNameAliases[b.scope]||b.scope),b.beginScope&&(b.beginScope._wrap?(be(j,ye.classNameAliases[b.beginScope._wrap]||b.beginScope._wrap),j=""):b.beginScope._multi&&(Gt(b.beginScope,E),j="")),C=Object.create(b,{parent:{value:C}}),C}function Xt(b,E,k){let L=M(b.endRe,k);if(L){if(b["on:end"]){const Q=new n(b);b["on:end"](E,Q),Q.isMatchIgnored&&(L=!1)}if(L){for(;b.endsParent&&b.parent;)b=b.parent;return b}}if(b.endsWithParent)return Xt(b.parent,E,k)}function Io(b){return C.matcher.regexIndex===0?(j+=b[0],1):(at=!0,0)}function Lo(b){const E=b[0],k=b.rule,L=new n(k),Q=[k.__beforeBegin,k["on:begin"]];for(const Fe of Q)if(Fe&&(Fe(b,L),L.isMatchIgnored))return Io(E);return k.skip?j+=E:(k.excludeBegin&&(j+=E),ae(),!k.returnBegin&&!k.excludeBegin&&(j=E)),Wt(k,b),k.returnBegin?0:E.length}function Po(b){const E=b[0],k=R.substring(b.index),L=Xt(C,b,k);if(!L)return $t;const Q=C;C.endScope&&C.endScope._wrap?(ae(),be(E,C.endScope._wrap)):C.endScope&&C.endScope._multi?(ae(),Gt(C.endScope,b)):Q.skip?j+=E:(Q.returnEnd||Q.excludeEnd||(j+=E),ae(),Q.excludeEnd&&(j=E));do C.scope&&J.closeNode(),!C.skip&&!C.subLanguage&&(Fn+=C.relevance),C=C.parent;while(C!==L.parent);return L.starts&&Wt(L.starts,b),Q.returnEnd?0:E.length}function zo(){const b=[];for(let E=C;E!==ye;E=E.parent)E.scope&&b.unshift(E.scope);b.forEach(E=>J.openNode(E))}let Tn={};function Jt(b,E){const k=E&&E[0];if(j+=b,k==null)return ae(),0;if(Tn.type==="begin"&&E.type==="end"&&Tn.index===E.index&&k===""){if(j+=R.slice(E.index,E.index+1),!H){const L=new Error(`0 width match regex (${m})`);throw L.languageName=m,L.badRule=Tn.rule,L}return 1}if(Tn=E,E.type==="begin")return Lo(E);if(E.type==="illegal"&&!I){const L=new Error('Illegal lexeme "'+k+'" for mode "'+(C.scope||"<unnamed>")+'"');throw L.mode=C,L}else if(E.type==="end"){const L=Po(E);if(L!==$t)return L}if(E.type==="illegal"&&k==="")return j+=`
`,1;if(it>1e5&&it>E.index*3)throw new Error("potential infinite loop, way more iterations than matches");return j+=k,k.length}const ye=ke(m);if(!ye)throw He(K.replace("{}",m)),new Error('Unknown language: "'+m+'"');const Vo=bo(ye);let st="",C=B||Vo;const Yt={},J=new y.__emitter(y);zo();let j="",Fn=0,Ke=0,it=0,at=!1;try{if(ye.__emitTokens)ye.__emitTokens(R,J);else{for(C.matcher.considerAll();;){it++,at?at=!1:C.matcher.considerAll(),C.matcher.lastIndex=Ke;const b=C.matcher.exec(R);if(!b)break;const E=R.substring(Ke,b.index),k=Jt(E,b);Ke=b.index+k}Jt(R.substring(Ke))}return J.finalize(),st=J.toHTML(),{language:m,value:st,relevance:Fn,illegal:!1,_emitter:J,_top:C}}catch(b){if(b.message&&b.message.includes("Illegal"))return{language:m,value:nt(R),illegal:!0,relevance:0,_illegalBy:{message:b.message,index:Ke,context:R.slice(Ke-100,Ke+100),mode:b.mode,resultSoFar:st},_emitter:J};if(H)return{language:m,value:nt(R),illegal:!1,relevance:0,errorRaised:b,_emitter:J,_top:C};throw b}}function tt(m){const R={value:nt(m),illegal:!1,relevance:0,_top:w,_emitter:new y.__emitter(y)};return R._emitter.addText(m),R}function rt(m,R){R=R||y.languages||Object.keys(d);const I=tt(m),B=R.filter(ke).filter(Zt).map(ae=>an(ae,m,!1));B.unshift(I);const G=B.sort((ae,be)=>{if(ae.relevance!==be.relevance)return be.relevance-ae.relevance;if(ae.language&&be.language){if(ke(ae.language).supersetOf===be.language)return 1;if(ke(be.language).supersetOf===ae.language)return-1}return 0}),[_e,Oe]=G,Mn=_e;return Mn.secondBest=Oe,Mn}function Ro(m,R,I){const B=R&&h[R]||I;m.classList.add("hljs"),m.classList.add(`language-${B}`)}function ot(m){let R=null;const I=X(m);if(T(I))return;if(xn("before:highlightElement",{el:m,language:I}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(y.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),y.throwUnescapedHTML))throw new Eo("One of your code blocks includes unescaped HTML.",m.innerHTML);R=m;const B=R.textContent,G=I?Z(B,{language:I,ignoreIllegals:!0}):rt(B);m.innerHTML=G.value,m.dataset.highlighted="yes",Ro(m,I,G.language),m.result={language:G.language,re:G.relevance,relevance:G.relevance},G.secondBest&&(m.secondBest={language:G.secondBest.language,relevance:G.secondBest.relevance}),xn("after:highlightElement",{el:m,result:G,text:B})}function xo(m){y=qt(y,m)}const Mo=()=>{Rn(),Xe("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function To(){Rn(),Xe("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Ht=!1;function Rn(){function m(){Rn()}if(document.readyState==="loading"){Ht||window.addEventListener("DOMContentLoaded",m,!1),Ht=!0;return}document.querySelectorAll(y.cssSelector).forEach(ot)}function Fo(m,R){let I=null;try{I=R(o)}catch(B){if(He("Language definition for '{}' could not be registered.".replace("{}",m)),H)He(B);else throw B;I=w}I.name||(I.name=m),d[m]=I,I.rawDefinition=R.bind(null,o),I.aliases&&Kt(I.aliases,{languageName:m})}function So(m){delete d[m];for(const R of Object.keys(h))h[R]===m&&delete h[R]}function No(){return Object.keys(d)}function ke(m){return m=(m||"").toLowerCase(),d[m]||d[h[m]]}function Kt(m,{languageName:R}){typeof m=="string"&&(m=[m]),m.forEach(I=>{h[I.toLowerCase()]=R})}function Zt(m){const R=ke(m);return R&&!R.disableAutodetect}function Co(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=R=>{m["before:highlightBlock"](Object.assign({block:R.el},R))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=R=>{m["after:highlightBlock"](Object.assign({block:R.el},R))})}function Ao(m){Co(m),N.push(m)}function ko(m){const R=N.indexOf(m);R!==-1&&N.splice(R,1)}function xn(m,R){const I=m;N.forEach(function(B){B[I]&&B[I](R)})}function Oo(m){return Xe("10.7.0","highlightBlock will be removed entirely in v12.0"),Xe("10.7.0","Please use highlightElement now."),ot(m)}Object.assign(o,{highlight:Z,highlightAuto:rt,highlightAll:Rn,highlightElement:ot,highlightBlock:Oo,configure:xo,initHighlighting:Mo,initHighlightingOnLoad:To,registerLanguage:Fo,unregisterLanguage:So,listLanguages:No,getLanguage:ke,registerAliases:Kt,autoDetection:Zt,inherit:qt,addPlugin:Ao,removePlugin:ko}),o.debugMode=function(){H=!1},o.safeMode=function(){H=!0},o.versionString=wo,o.regex={concat:F,lookahead:f,either:z,optional:v,anyNumberOfTimes:g};for(const m in En)typeof En[m]=="object"&&e(En[m]);return Object.assign(o,En),o},Je=Ut({});return Je.newInstance=()=>Ut({}),ut=Je,Je.HighlightJS=Je,Je.default=Je,ut}var rm=tm();const mr=nm(rm);var om=pe("<pre><code><!></code></pre>");function sm(e,n){const t=jn(n,["children","$$slots","$$events","$$legacy"]),r=jn(t,["code","highlighted","languageName","langtag"]);let i=Be(n,"code",8),s=Be(n,"highlighted",8),l=Be(n,"languageName",8,"plaintext"),u=Be(n,"langtag",8,!1);var a=om();let c;var p=W(a);It(p,1,"",null,{},{hljs:!0});var _=W(p);{var f=v=>{var F=Ot(),A=Wn(F);si(A,s),re(v,F)},g=v=>{var F=Js();Ee(()=>Ve(F,i())),re(v,F)};bt(_,v=>{s()?v(f):v(g,!1)})}Ee(v=>c=_i(a,c,{"data-language":l(),...r,[un]:v},"svelte-1w9vok"),[()=>({langtag:u()})],St),re(e,a)}function im(e,n){const t=jn(n,["children","$$slots","$$events","$$legacy"]),r=jn(t,["language","code","langtag"]);hn(n,!1);let i=Be(n,"language",8),s=Be(n,"code",8),l=Be(n,"langtag",8,!1);const u=bi();let a=Kn("");yi(()=>{O(a)&&u("highlight",{highlighted:O(a)})}),Ts(()=>(gt(i()),gt(s())),()=>{mr.registerLanguage(i().name,i().register),ce(a,mr.highlight(s(),{language:i().name}).value)}),Fs(),Lt();var c=Ot(),p=Wn(c);ii(p,n,"default",{get highlighted(){return O(a)}},_=>{sm(_,vi(()=>r,{get languageName(){return i().name},get langtag(){return l()},get highlighted(){return O(a)},get code(){return s()}}))}),re(e,c),bn()}function am(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",s={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},l={keywords:s,illegal:/<\//},u={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},a={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},c={className:"subst",begin:/\$\(/,end:/\)/,keywords:s},p={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,c,p],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},f={className:"string",contains:[e.BACKSLASH_ESCAPE,c,p],begin:"`",end:"`"},g={className:"meta",begin:"@"+n},v={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return l.name="Julia",l.contains=[u,a,_,f,g,v,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],c.contains=l.contains,l}const lm={name:"julia",register:am};var cm=pe('<th class="svelte-m8v9hl"> </th>'),fm=pe('<td class="svelte-m8v9hl"> </td>'),um=pe('<a class="issue svelte-m8v9hl" target="_blank">(?)</a>'),dm=pe('<td class="svelte-m8v9hl"><!> <span> </span></td>'),_m=pe('<tr class="svelte-m8v9hl"><td class="svelte-m8v9hl"> <div class="model-definition svelte-m8v9hl"><!></div></td><!></tr>'),mm=pe('<table id="results" class="svelte-m8v9hl"><thead><tr class="svelte-m8v9hl"><th class="svelte-m8v9hl">Model name \\\\ AD type</th><!></tr></thead><tbody></tbody></table>');function pm(e,n){hn(n,!0);const t=[...n.data.keys()],r=n.data.get(t[0]).keys(),i="https://github.com/EnzymeAD/Enzyme.jl/issues/1995",l={assume_mvnormal__EnzymeForward:i,assume_wishart__EnzymeForward:i,multithreaded__Mooncake:"https://github.com/chalk-lab/Mooncake.jl/issues/570"};var u=mm(),a=W(u),c=W(a),p=we(W(c));_n(p,17,()=>r,dn,(f,g)=>{var v=cm(),F=W(v);Ee(()=>Ve(F,O(g))),re(f,v)});var _=we(a);_n(_,21,()=>wt(n.data),dn,(f,g)=>{let v=()=>O(g)[0],F=()=>O(g)[1];var A=_m(),z=W(A),U=W(z),M=we(U),D=W(M);im(D,{language:lm,get code(){return n.modelDefinitions[v()]}});var x=we(z);_n(x,17,()=>wt(F()),dn,(ee,S)=>{let $=()=>O(S)[0],Y=()=>O(S)[1];var Me=Ot(),ge=Wn(Me);{var Ue=ne=>{var ve=fm(),Te=W(ve);Ee(Ae=>Ve(Te,Ae),[()=>Y().toFixed(3)]),re(ne,ve)},on=ne=>{var ve=dm(),Te=W(ve);{var Ae=sn=>{var wn=um();Ee(()=>yt(wn,"href",l[`${v()}__${$()}`])),re(sn,wn)};bt(Te,sn=>{l[`${v()}__${$()}`]&&sn(Ae)})}var he=we(Te,2),et=W(he);Ee(()=>{It(he,1,Hr(Y()),"svelte-m8v9hl"),Ve(et,Y())}),re(ne,ve)};bt(ge,ne=>{typeof Y()=="number"?ne(Ue):ne(on,!1)})}re(ee,Me)}),Ee(()=>Ve(U,`${v()??""} `)),re(f,A)}),re(e,u),bn()}var gm=pe("<h3> </h3> <!>",1),vm=pe(`<div id="main-wrapper" class="svelte-3oks6t"><main class="svelte-3oks6t"><h1>Turing AD tests</h1> <p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p> <p>This page is intended as a brief overview of how different AD
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
                describes the problem.</li></ul> <div class="warning svelte-3oks6t"><b>Note: The results here are run with Julia 1.11. Enzyme currently does not work on Julia 1.12.</b></div> <h2>Results</h2> <p><a href="adtests.json" target="_blank" download="">Download the raw data (JSON)</a></p> <!> <h2>Manifest</h2> <p>The tests above were run with the following package versions:</p> <!></main></div>`);function hm(e,n){hn(n,!1);let t=Kn(new Map);for(const[u,a]of Object.entries(Ea)){let c=a.__category__;delete a.__category__;let p=new Map;for(const[_,f]of Object.entries(a))p.set(_,f);O(t).has(c)||O(t).set(c,new Map),O(t).get(c).set(u,p)}ce(t,new Map([...O(t).entries()].sort())),console.log(O(t)),Lt();var r=vm(),i=W(r),s=we(W(i),16);_n(s,1,()=>O(t).entries(),dn,(u,a)=>{let c=()=>O(a)[0],p=()=>O(a)[1];var _=gm(),f=Wn(_),g=W(f),v=we(f,2);pm(v,{get data(){return p()},modelDefinitions:El}),Ee(()=>Ve(g,c())),re(u,_)});var l=we(s,6);em(l,{}),re(e,r),bn()}Ys(hm,{target:document.getElementById("app")});
