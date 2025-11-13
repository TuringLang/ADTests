(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Qt=!1;var Un=Array.isArray,Uo=Array.prototype.indexOf,wt=Array.from,$o=Object.defineProperty,je=Object.getOwnPropertyDescriptor,gr=Object.getOwnPropertyDescriptors,qo=Object.prototype,Ho=Array.prototype,Et=Object.getPrototypeOf,er=Object.isExtensible;function ln(e){return typeof e=="function"}function Ko(e){return e()}function ut(e){for(var n=0;n<e.length;n++)e[n]()}const me=2,pr=4,$n=8,Dt=16,Ce=32,nn=64,An=128,ce=256,kn=512,se=1024,Re=2048,$e=4096,Fe=8192,qn=16384,Zo=32768,Rt=65536,Go=1<<17,Wo=1<<19,hr=1<<20,dt=1<<21,Ge=Symbol("$state"),br=Symbol("legacy props"),Xo=Symbol("");function yr(e){return e===this.v}function Jo(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Mt(e){return!Jo(e,this.v)}function Yo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function es(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ns(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ts(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function rs(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function os(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ss(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function is(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let pn=!1,as=!1;function ls(){pn=!0}const xt=1,Tt=2,wr=4,cs=8,fs=16,us=1,ds=2,Er=4,_s=8,ms=16,vs=1,gs=2,ie=Symbol(),ps="http://www.w3.org/1999/xhtml",hs="@attach";function Dr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let U=null;function nr(e){U=e}function hn(e,n=!1,t){var r=U={p:U,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};pn&&!n&&(U.l={s:null,u:null,r1:[],r2:Qe(!1)}),Rs(()=>{r.d=!0})}function bn(e){const n=U;if(n!==null){const l=n.e;if(l!==null){var t=P,r=V;n.e=null;try{for(var i=0;i<l.length;i++){var s=l[i];Ue(s.effect),Me(s.reaction),Nt(s.fn)}}finally{Ue(t),Me(r)}}U=n.p,n.m=!0}return{}}function Hn(){return!pn||U!==null&&U.l===null}function Ze(e){if(typeof e!="object"||e===null||Ge in e)return e;const n=Et(e);if(n!==qo&&n!==Ho)return e;var t=new Map,r=Un(e),i=Ie(0),s=V,l=u=>{var a=V;Me(s);var c=u();return Me(a),c};return r&&t.set("length",Ie(e.length)),new Proxy(e,{defineProperty(u,a,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&os();var v=t.get(a);return v===void 0?(v=l(()=>Ie(c.value)),t.set(a,v)):ue(v,l(()=>Ze(c.value))),!0},deleteProperty(u,a){var c=t.get(a);if(c===void 0)a in u&&(t.set(a,l(()=>Ie(ie))),at(i));else{if(r&&typeof a=="string"){var v=t.get("length"),_=Number(a);Number.isInteger(_)&&_<v.v&&ue(v,_)}ue(c,ie),at(i)}return!0},get(u,a,c){var g;if(a===Ge)return e;var v=t.get(a),_=a in u;if(v===void 0&&(!_||(g=je(u,a))!=null&&g.writable)&&(v=l(()=>Ie(Ze(_?u[a]:ie))),t.set(a,v)),v!==void 0){var f=I(v);return f===ie?void 0:f}return Reflect.get(u,a,c)},getOwnPropertyDescriptor(u,a){var c=Reflect.getOwnPropertyDescriptor(u,a);if(c&&"value"in c){var v=t.get(a);v&&(c.value=I(v))}else if(c===void 0){var _=t.get(a),f=_==null?void 0:_.v;if(_!==void 0&&f!==ie)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return c},has(u,a){var f;if(a===Ge)return!0;var c=t.get(a),v=c!==void 0&&c.v!==ie||Reflect.has(u,a);if(c!==void 0||P!==null&&(!v||(f=je(u,a))!=null&&f.writable)){c===void 0&&(c=l(()=>Ie(v?Ze(u[a]):ie)),t.set(a,c));var _=I(c);if(_===ie)return!1}return v},set(u,a,c,v){var q;var _=t.get(a),f=a in u;if(r&&a==="length")for(var g=c;g<_.v;g+=1){var p=t.get(g+"");p!==void 0?ue(p,ie):g in u&&(p=l(()=>Ie(ie)),t.set(g+"",p))}_===void 0?(!f||(q=je(u,a))!=null&&q.writable)&&(_=l(()=>Ie(void 0)),ue(_,l(()=>Ze(c))),t.set(a,_)):(f=_.v!==ie,ue(_,l(()=>Ze(c))));var S=Reflect.getOwnPropertyDescriptor(u,a);if(S!=null&&S.set&&S.set.call(v,c),!f){if(r&&typeof a=="string"){var A=t.get("length"),z=Number(a);Number.isInteger(z)&&z>=A.v&&ue(A,z+1)}at(i)}return!0},ownKeys(u){I(i);var a=Reflect.ownKeys(u).filter(_=>{var f=t.get(_);return f===void 0||f.v!==ie});for(var[c,v]of t)v.v!==ie&&!(c in u)&&a.push(c);return a},setPrototypeOf(){ss()}})}function at(e,n=1){ue(e,e.v+n)}function mn(e){var n=me|Re,t=V!==null&&(V.f&me)!==0?V:null;return P===null||t!==null&&(t.f&ce)!==0?n|=ce:P.f|=hr,{ctx:U,deps:null,effects:null,equals:yr,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??P}}function St(e){const n=mn(e);return n.equals=Mt,n}function Rr(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)Ne(n[t])}}function bs(e){for(var n=e.parent;n!==null;){if((n.f&me)===0)return n;n=n.parent}return null}function Mr(e){var n,t=P;Ue(bs(e));try{Rr(e),n=jr(e)}finally{Ue(t)}return n}function xr(e){var n=Mr(e),t=(ze||(e.f&ce)!==0)&&e.deps!==null?$e:se;de(e,t),e.equals(n)||(e.v=n,e.wv=Vr())}const vn=new Map;function Qe(e,n){var t={f:0,v:e,reactions:null,equals:yr,rv:0,wv:0};return t}function Ie(e,n){const t=Qe(e);return Cs(t),t}function Ft(e,n=!1){var r;const t=Qe(e);return n||(t.equals=Mt),pn&&U!==null&&U.l!==null&&((r=U.l).s??(r.s=[])).push(t),t}function ue(e,n,t=!1){V!==null&&!De&&Hn()&&(V.f&(me|Dt))!==0&&!(oe!=null&&oe.includes(e))&&is();let r=t?Ze(n):n;return _t(e,r)}function _t(e,n){if(!e.equals(n)){var t=e.v;yn?vn.set(e,n):vn.set(e,t),e.v=n,(e.f&me)!==0&&((e.f&Re)!==0&&Mr(e),de(e,(e.f&ce)===0?se:$e)),e.wv=Vr(),Tr(e,Re),Hn()&&P!==null&&(P.f&se)!==0&&(P.f&(Ce|nn))===0&&(fe===null?As([e]):fe.push(e))}return n}function tr(e,n=1){var t=I(e),r=n===1?t++:t--;return ue(e,t),r}function Tr(e,n){var t=e.reactions;if(t!==null)for(var r=Hn(),i=t.length,s=0;s<i;s++){var l=t[s],u=l.f;(u&Re)===0&&(!r&&l===P||(de(l,n),(u&(se|ce))!==0&&((u&me)!==0?Tr(l,$e):Yn(l))))}}let ys=!1;var rr,Sr,Fr,Nr;function ws(){if(rr===void 0){rr=window,Sr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Fr=je(n,"firstChild").get,Nr=je(n,"nextSibling").get,er(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),er(t)&&(t.__t=void 0)}}function Kn(e=""){return document.createTextNode(e)}function Pe(e){return Fr.call(e)}function Zn(e){return Nr.call(e)}function W(e,n){return Pe(e)}function Gn(e,n){{var t=Pe(e);return t instanceof Comment&&t.data===""?Zn(t):t}}function we(e,n=1,t=!1){let r=e;for(;n--;)r=Zn(r);return r}function Es(e){e.textContent=""}function Cr(e){P===null&&V===null&&es(),V!==null&&(V.f&ce)!==0&&P===null&&Qo(),yn&&Yo()}function Ds(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function tn(e,n,t,r=!0){var i=P,s={ctx:U,deps:null,nodes_start:null,nodes_end:null,f:e|Re,first:null,fn:n,last:null,next:null,parent:i,prev:null,teardown:null,transitions:null,wv:0};if(t)try{Jn(s),s.f|=Zo}catch(a){throw Ne(s),a}else n!==null&&Yn(s);var l=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(hr|An))===0;if(!l&&r&&(i!==null&&Ds(s,i),V!==null&&(V.f&me)!==0)){var u=V;(u.effects??(u.effects=[])).push(s)}return s}function Rs(e){const n=tn($n,null,!1);return de(n,se),n.teardown=e,n}function or(e){Cr();var n=P!==null&&(P.f&Ce)!==0&&U!==null&&!U.m;if(n){var t=U;(t.e??(t.e=[])).push({fn:e,effect:P,reaction:V})}else{var r=Nt(e);return r}}function Ms(e){return Cr(),Ct(e)}function xs(e){const n=tn(nn,e,!0);return(t={})=>new Promise(r=>{t.outro?On(n,()=>{Ne(n),r(void 0)}):(Ne(n),r(void 0))})}function Nt(e){return tn(pr,e,!1)}function Ts(e,n){var t=U,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=Ct(()=>{e(),!r.ran&&(r.ran=!0,ue(t.l.r2,!0),Bn(n))})}function Ss(){var e=U;Ct(()=>{if(I(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&se)!==0&&de(t,$e),rn(t)&&Jn(t),n.ran=!1}e.l.r2.v=!1}})}function Ct(e){return tn($n,e,!0)}function Ee(e,n=[],t=mn){const r=n.map(t);return Wn(()=>e(...r.map(I)))}function Wn(e,n=0){return tn($n|Dt|n,e,!0)}function en(e,n=!0){return tn($n|Ce,e,!0,n)}function Ar(e){var n=e.teardown;if(n!==null){const t=yn,r=V;sr(!0),Me(null);try{n.call(null)}finally{sr(t),Me(r)}}}function kr(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&nn)!==0?t.parent=null:Ne(t,n),t=r}}function Fs(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&Ce)===0&&Ne(n),n=t}}function Ne(e,n=!0){var t=!1;(n||(e.f&Wo)!==0)&&e.nodes_start!==null&&(Or(e.nodes_start,e.nodes_end),t=!0),kr(e,n&&!t),Vn(e,0),de(e,qn);var r=e.transitions;if(r!==null)for(const s of r)s.stop();Ar(e);var i=e.parent;i!==null&&i.first!==null&&Ir(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Or(e,n){for(;e!==null;){var t=e===n?null:Zn(e);e.remove(),e=t}}function Ir(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function On(e,n){var t=[];At(e,t,!0),Lr(t,()=>{Ne(e),n&&n()})}function Lr(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var i of e)i.out(r)}else n()}function At(e,n,t){if((e.f&Fe)===0){if(e.f^=Fe,e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&n.push(l);for(var r=e.first;r!==null;){var i=r.next,s=(r.f&Rt)!==0||(r.f&Ce)!==0;At(r,n,s?t:!1),r=i}}}function In(e){Pr(e,!0)}function Pr(e,n){if((e.f&Fe)!==0){e.f^=Fe,(e.f&se)===0&&(e.f^=se),rn(e)&&(de(e,Re),Yn(e));for(var t=e.first;t!==null;){var r=t.next,i=(t.f&Rt)!==0||(t.f&Ce)!==0;Pr(t,i?n:!1),t=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&s.in()}}let Ln=[];function Ns(){var e=Ln;Ln=[],ut(e)}function kt(e){Ln.length===0&&queueMicrotask(Ns),Ln.push(e)}let Nn=!1,mt=!1,Pn=null,We=!1,yn=!1;function sr(e){yn=e}let Cn=[];let V=null,De=!1;function Me(e){V=e}let P=null;function Ue(e){P=e}let oe=null;function Cs(e){V!==null&&V.f&dt&&(oe===null?oe=[e]:oe.push(e))}let te=null,le=0,fe=null;function As(e){fe=e}let zr=1,zn=0,ze=!1;function Vr(){return++zr}function rn(e){var _;var n=e.f;if((n&Re)!==0)return!0;if((n&$e)!==0){var t=e.deps,r=(n&ce)!==0;if(t!==null){var i,s,l=(n&kn)!==0,u=r&&P!==null&&!ze,a=t.length;if(l||u){var c=e,v=c.parent;for(i=0;i<a;i++)s=t[i],(l||!((_=s==null?void 0:s.reactions)!=null&&_.includes(c)))&&(s.reactions??(s.reactions=[])).push(c);l&&(c.f^=kn),u&&v!==null&&(v.f&ce)===0&&(c.f^=ce)}for(i=0;i<a;i++)if(s=t[i],rn(s)&&xr(s),s.wv>e.wv)return!0}(!r||P!==null&&!ze)&&de(e,se)}return!1}function ks(e,n){for(var t=n;t!==null;){if((t.f&An)!==0)try{t.fn(e);return}catch{t.f^=An}t=t.parent}throw Nn=!1,e}function ir(e){return(e.f&qn)===0&&(e.parent===null||(e.parent.f&An)===0)}function Xn(e,n,t,r){if(Nn){if(t===null&&(Nn=!1),ir(n))throw e;return}if(t!==null&&(Nn=!0),ks(e,n),ir(n))throw e}function Br(e,n,t=!0){var r=e.reactions;if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];oe!=null&&oe.includes(e)||((s.f&me)!==0?Br(s,n,!1):n===s&&(t?de(s,Re):(s.f&se)!==0&&de(s,$e),Yn(s)))}}function jr(e){var g;var n=te,t=le,r=fe,i=V,s=ze,l=oe,u=U,a=De,c=e.f;te=null,le=0,fe=null,ze=(c&ce)!==0&&(De||!We||V===null),V=(c&(Ce|nn))===0?e:null,oe=null,nr(e.ctx),De=!1,zn++,e.f|=dt;try{var v=(0,e.fn)(),_=e.deps;if(te!==null){var f;if(Vn(e,le),_!==null&&le>0)for(_.length=le+te.length,f=0;f<te.length;f++)_[le+f]=te[f];else e.deps=_=te;if(!ze)for(f=le;f<_.length;f++)((g=_[f]).reactions??(g.reactions=[])).push(e)}else _!==null&&le<_.length&&(Vn(e,le),_.length=le);if(Hn()&&fe!==null&&!De&&_!==null&&(e.f&(me|$e|Re))===0)for(f=0;f<fe.length;f++)Br(fe[f],e);return i!==null&&i!==e&&(zn++,fe!==null&&(r===null?r=fe:r.push(...fe))),v}finally{te=n,le=t,fe=r,V=i,ze=s,oe=l,nr(u),De=a,e.f^=dt}}function Os(e,n){let t=n.reactions;if(t!==null){var r=Uo.call(t,e);if(r!==-1){var i=t.length-1;i===0?t=n.reactions=null:(t[r]=t[i],t.pop())}}t===null&&(n.f&me)!==0&&(te===null||!te.includes(n))&&(de(n,$e),(n.f&(ce|kn))===0&&(n.f^=kn),Rr(n),Vn(n,0))}function Vn(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Os(e,t[r])}function Jn(e){var n=e.f;if((n&qn)===0){de(e,se);var t=P,r=U,i=We;P=e,We=!0;try{(n&Dt)!==0?Fs(e):kr(e),Ar(e);var s=jr(e);e.teardown=typeof s=="function"?s:null,e.wv=zr;var l=e.deps,u;Qt&&as&&e.f&Re}catch(a){Xn(a,e,t,r||e.ctx)}finally{We=i,P=t}}}function Is(){try{ns()}catch(e){if(Pn!==null)Xn(e,Pn,null);else throw e}}function Ls(){var e=We;try{var n=0;for(We=!0;Cn.length>0;){n++>1e3&&Is();var t=Cn,r=t.length;Cn=[];for(var i=0;i<r;i++){var s=zs(t[i]);Ps(s)}vn.clear()}}finally{mt=!1,We=e,Pn=null}}function Ps(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(qn|Fe))===0)try{rn(r)&&(Jn(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Ir(r):r.fn=null))}catch(i){Xn(i,r,null,r.ctx)}}}function Yn(e){mt||(mt=!0,queueMicrotask(Ls));for(var n=Pn=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(nn|Ce))!==0){if((t&se)===0)return;n.f^=se}}Cn.push(n)}function zs(e){for(var n=[],t=e;t!==null;){var r=t.f,i=(r&(Ce|nn))!==0,s=i&&(r&se)!==0;if(!s&&(r&Fe)===0){if((r&pr)!==0)n.push(t);else if(i)t.f^=se;else try{rn(t)&&Jn(t)}catch(a){Xn(a,t,null,t.ctx)}var l=t.first;if(l!==null){t=l;continue}}var u=t.parent;for(t=t.next;t===null&&u!==null;)t=u.next,u=u.parent}return n}function I(e){var n=e.f,t=(n&me)!==0;if(V!==null&&!De){if(!(oe!=null&&oe.includes(e))){var r=V.deps;e.rv<zn&&(e.rv=zn,te===null&&r!==null&&r[le]===e?le++:te===null?te=[e]:(!ze||!te.includes(e))&&te.push(e))}}else if(t&&e.deps===null&&e.effects===null){var i=e,s=i.parent;s!==null&&(s.f&ce)===0&&(i.f^=ce)}return t&&(i=e,rn(i)&&xr(i)),yn&&vn.has(e)?vn.get(e):e.v}function Bn(e){var n=De;try{return De=!0,e()}finally{De=n}}const Vs=-7169;function de(e,n){e.f=e.f&Vs|n}function vt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ge in e)gt(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&Ge in t&&gt(t)}}}function gt(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{gt(e[r],n)}catch{}const t=Et(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=gr(t);for(let i in r){const s=r[i].get;if(s)try{s.call(e)}catch{}}}}}function Bs(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const js=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Us(e){return js.includes(e)}const $s={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function qs(e){return e=e.toLowerCase(),$s[e]??e}const Hs=["touchstart","touchmove"];function Ks(e){return Hs.includes(e)}function Zs(e,n){if(n){const t=document.body;e.autofocus=!0,kt(()=>{document.activeElement===t&&e.focus()})}}function Gs(e){var n=V,t=P;Me(null),Ue(null);try{return e()}finally{Me(n),Ue(t)}}const Ur=new Set,pt=new Set;function Ws(e,n,t,r={}){function i(s){if(r.capture||fn.call(n,s),!s.cancelBubble)return Gs(()=>t==null?void 0:t.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?kt(()=>{n.addEventListener(e,i,r)}):n.addEventListener(e,i,r),i}function Xs(e){for(var n=0;n<e.length;n++)Ur.add(e[n]);for(var t of pt)t(e)}function fn(e){var q;var n=this,t=n.ownerDocument,r=e.type,i=((q=e.composedPath)==null?void 0:q.call(e))||[],s=i[0]||e.target,l=0,u=e.__root;if(u){var a=i.indexOf(u);if(a!==-1&&(n===document||n===window)){e.__root=n;return}var c=i.indexOf(n);if(c===-1)return;a<=c&&(l=a)}if(s=i[l]||e.target,s!==n){$o(e,"currentTarget",{configurable:!0,get(){return s||t}});var v=V,_=P;Me(null),Ue(null);try{for(var f,g=[];s!==null;){var p=s.assignedSlot||s.parentNode||s.host||null;try{var S=s["__"+r];if(S!=null&&(!s.disabled||e.target===s))if(Un(S)){var[A,...z]=S;A.apply(s,[e,...z])}else S.call(s,e)}catch(x){f?g.push(x):f=x}if(e.cancelBubble||p===n||p===null)break;s=p}if(f){for(let x of g)queueMicrotask(()=>{throw x});throw f}}finally{e.__root=n,delete e.currentTarget,Me(v),Ue(_)}}}function $r(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function gn(e,n){var t=P;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function ve(e,n){var t=(n&vs)!==0,r=(n&gs)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=$r(s?e:"<!>"+e),t||(i=Pe(i)));var l=r||Sr?document.importNode(i,!0):i.cloneNode(!0);if(t){var u=Pe(l),a=l.lastChild;gn(u,a)}else gn(l,l);return l}}function Js(e=""){{var n=Kn(e+"");return gn(n,n),n}}function Ot(){var e=document.createDocumentFragment(),n=document.createComment(""),t=Kn();return e.append(n,t),gn(n,t),e}function re(e,n){e!==null&&e.before(n)}function Ve(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function Ys(e,n){return Qs(e,n)}const Ye=new Map;function Qs(e,{target:n,anchor:t,props:r={},events:i,context:s,intro:l=!0}){ws();var u=new Set,a=_=>{for(var f=0;f<_.length;f++){var g=_[f];if(!u.has(g)){u.add(g);var p=Ks(g);n.addEventListener(g,fn,{passive:p});var S=Ye.get(g);S===void 0?(document.addEventListener(g,fn,{passive:p}),Ye.set(g,1)):Ye.set(g,S+1)}}};a(wt(Ur)),pt.add(a);var c=void 0,v=xs(()=>{var _=t??n.appendChild(Kn());return en(()=>{if(s){hn({});var f=U;f.c=s}i&&(r.$$events=i),c=e(_,r)||{},s&&bn()}),()=>{var p;for(var f of u){n.removeEventListener(f,fn);var g=Ye.get(f);--g===0?(document.removeEventListener(f,fn),Ye.delete(f)):Ye.set(f,g)}pt.delete(a),_!==t&&((p=_.parentNode)==null||p.removeChild(_))}});return ei.set(c,v),c}let ei=new WeakMap;function ht(e,n,[t,r]=[0,0]){var i=e,s=null,l=null,u=ie,a=t>0?Rt:0,c=!1;const v=(f,g=!0)=>{c=!0,_(g,f)},_=(f,g)=>{u!==(u=f)&&(u?(s?In(s):g&&(s=en(()=>g(i))),l&&On(l,()=>{l=null})):(l?In(l):g&&(l=en(()=>g(i,[t+1,r]))),s&&On(s,()=>{s=null})))};Wn(()=>{c=!1,n(v),c||_(null,null)},a)}function dn(e,n){return n}function ni(e,n,t,r){for(var i=[],s=n.length,l=0;l<s;l++)At(n[l].e,i,!0);var u=s>0&&i.length===0&&t!==null;if(u){var a=t.parentNode;Es(a),a.append(t),r.clear(),Le(e,n[0].prev,n[s-1].next)}Lr(i,()=>{for(var c=0;c<s;c++){var v=n[c];u||(r.delete(v.k),Le(e,v.prev,v.next)),Ne(v.e,!u)}})}function _n(e,n,t,r,i,s=null){var l=e,u={flags:n,items:new Map,first:null},a=(n&wr)!==0;if(a){var c=e;l=c.appendChild(Kn())}var v=null,_=!1,f=St(()=>{var g=t();return Un(g)?g:g==null?[]:wt(g)});Wn(()=>{var g=I(f),p=g.length;_&&p===0||(_=p===0,ti(g,u,l,i,n,r,t),s!==null&&(p===0?v?In(v):v=en(()=>s(l)):v!==null&&On(v,()=>{v=null})),I(f))})}function ti(e,n,t,r,i,s,l){var ne,pe,Te,Ae;var u=(i&cs)!==0,a=(i&(xt|Tt))!==0,c=e.length,v=n.items,_=n.first,f=_,g,p=null,S,A=[],z=[],q,x,D,M;if(u)for(M=0;M<c;M+=1)q=e[M],x=s(q,M),D=v.get(x),D!==void 0&&((ne=D.a)==null||ne.measure(),(S??(S=new Set)).add(D));for(M=0;M<c;M+=1){if(q=e[M],x=s(q,M),D=v.get(x),D===void 0){var ee=f?f.e.nodes_start:t;p=oi(ee,n,p,p===null?n.first:p.next,q,x,M,r,i,l),v.set(x,p),A=[],z=[],f=p.next;continue}if(a&&ri(D,q,M,i),(D.e.f&Fe)!==0&&(In(D.e),u&&((pe=D.a)==null||pe.unfix(),(S??(S=new Set)).delete(D))),D!==f){if(g!==void 0&&g.has(D)){if(A.length<z.length){var F=z[0],$;p=F.prev;var Y=A[0],xe=A[A.length-1];for($=0;$<A.length;$+=1)ar(A[$],F,t);for($=0;$<z.length;$+=1)g.delete(z[$]);Le(n,Y.prev,xe.next),Le(n,p,Y),Le(n,xe,F),f=F,p=xe,M-=1,A=[],z=[]}else g.delete(D),ar(D,f,t),Le(n,D.prev,D.next),Le(n,D,p===null?n.first:p.next),Le(n,p,D),p=D;continue}for(A=[],z=[];f!==null&&f.k!==x;)(f.e.f&Fe)===0&&(g??(g=new Set)).add(f),z.push(f),f=f.next;if(f===null)continue;D=f}A.push(D),p=D,f=D.next}if(f!==null||g!==void 0){for(var ge=g===void 0?[]:wt(g);f!==null;)(f.e.f&Fe)===0&&ge.push(f),f=f.next;var qe=ge.length;if(qe>0){var on=(i&wr)!==0&&c===0?t:null;if(u){for(M=0;M<qe;M+=1)(Te=ge[M].a)==null||Te.measure();for(M=0;M<qe;M+=1)(Ae=ge[M].a)==null||Ae.fix()}ni(n,ge,on,v)}}u&&kt(()=>{var he;if(S!==void 0)for(D of S)(he=D.a)==null||he.apply()}),P.first=n.first&&n.first.e,P.last=p&&p.e}function ri(e,n,t,r){(r&xt)!==0&&_t(e.v,n),(r&Tt)!==0?_t(e.i,t):e.i=t}function oi(e,n,t,r,i,s,l,u,a,c){var v=(a&xt)!==0,_=(a&fs)===0,f=v?_?Ft(i):Qe(i):i,g=(a&Tt)===0?l:Qe(l),p={i:g,v:f,k:s,a:null,e:null,prev:t,next:r};try{return p.e=en(()=>u(e,f,g,c),ys),p.e.prev=t&&t.e,p.e.next=r&&r.e,t===null?n.first=p:(t.next=p,t.e.next=p.e),r!==null&&(r.prev=p,r.e.prev=p.e),p}finally{}}function ar(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,i=n?n.e.nodes_start:t,s=e.e.nodes_start;s!==r;){var l=Zn(s);i.before(s),s=l}}function Le(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function si(e,n,t=!1,r=!1,i=!1){var s=e,l="";Ee(()=>{var u=P;if(l!==(l=n()??"")&&(u.nodes_start!==null&&(Or(u.nodes_start,u.nodes_end),u.nodes_start=u.nodes_end=null),l!=="")){var a=l+"";t?a=`<svg>${a}</svg>`:r&&(a=`<math>${a}</math>`);var c=$r(a);if((t||r)&&(c=Pe(c)),gn(Pe(c),c.lastChild),t||r)for(;Pe(c);)s.before(Pe(c));else s.before(c)}})}function ii(e,n,t,r,i){var u;var s=(u=n.$$slots)==null?void 0:u[t],l=!1;s===!0&&(s=n.children,l=!0),s===void 0?i!==null&&i(e):s(e,l?()=>r:r)}function ai(e,n){var t=void 0,r;Wn(()=>{t!==(t=n())&&(r&&(Ne(r),r=null),t&&(r=en(()=>{Nt(()=>t(e))})))})}function qr(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=qr(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function li(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=qr(e))&&(r&&(r+=" "),r+=n);return r}function Hr(e){return typeof e=="object"?li(e):e??""}const lr=[...` 	
\r\f \v\uFEFF`];function ci(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var i in t)if(t[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,l=0;(l=r.indexOf(i,l))>=0;){var u=l+s;(l===0||lr.includes(r[l-1]))&&(u===r.length||lr.includes(r[u]))?r=(l===0?"":r.substring(0,l))+r.substring(u+1):l=u}}return r===""?null:r}function cr(e,n=!1){var t=n?" !important;":";",r="";for(var i in e){var s=e[i];s!=null&&s!==""&&(r+=" "+i+": "+s+t)}return r}function lt(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function fi(e,n){if(n){var t="",r,i;if(Array.isArray(n)?(r=n[0],i=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,l=0,u=!1,a=[];r&&a.push(...Object.keys(r).map(lt)),i&&a.push(...Object.keys(i).map(lt));var c=0,v=-1;const S=e.length;for(var _=0;_<S;_++){var f=e[_];if(u?f==="/"&&e[_-1]==="*"&&(u=!1):s?s===f&&(s=!1):f==="/"&&e[_+1]==="*"?u=!0:f==='"'||f==="'"?s=f:f==="("?l++:f===")"&&l--,!u&&s===!1&&l===0){if(f===":"&&v===-1)v=_;else if(f===";"||_===S-1){if(v!==-1){var g=lt(e.substring(c,v).trim());if(!a.includes(g)){f!==";"&&_++;var p=e.substring(c,_).trim();t+=" "+p+";"}}c=_+1,v=-1}}}}return r&&(t+=cr(r)),i&&(t+=cr(i,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function It(e,n,t,r,i,s){var l=e.__className;if(l!==t||l===void 0){var u=ci(t,r,s);u==null?e.removeAttribute("class"):n?e.className=u:e.setAttribute("class",u),e.__className=t}else if(s&&i!==s)for(var a in s){var c=!!s[a];(i==null||c!==!!i[a])&&e.classList.toggle(a,c)}return s}function ct(e,n={},t,r){for(var i in t){var s=t[i];n[i]!==s&&(t[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function ui(e,n,t,r){var i=e.__style;if(i!==n){var s=fi(n,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=n}else r&&(Array.isArray(r)?(ct(e,t==null?void 0:t[0],r[0]),ct(e,t==null?void 0:t[1],r[1],"important")):ct(e,t,r));return r}const un=Symbol("class"),cn=Symbol("style"),Kr=Symbol("is custom element"),Zr=Symbol("is html");function di(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function bt(e,n,t,r){var i=Gr(e);i[n]!==(i[n]=t)&&(n==="loading"&&(e[Xo]=t),t==null?e.removeAttribute(n):typeof t!="string"&&Wr(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function _i(e,n,t,r,i=!1){var s=Gr(e),l=s[Kr],u=!s[Zr],a=n||{},c=e.tagName==="OPTION";for(var v in n)v in t||(t[v]=null);t.class?t.class=Hr(t.class):t.class=null,t[cn]&&(t.style??(t.style=null));var _=Wr(e);for(const x in t){let D=t[x];if(c&&x==="value"&&D==null){e.value=e.__value="",a[x]=D;continue}if(x==="class"){var f=e.namespaceURI==="http://www.w3.org/1999/xhtml";It(e,f,D,r,n==null?void 0:n[un],t[un]),a[x]=D,a[un]=t[un];continue}if(x==="style"){ui(e,D,n==null?void 0:n[cn],t[cn]),a[x]=D,a[cn]=t[cn];continue}var g=a[x];if(D!==g){a[x]=D;var p=x[0]+x[1];if(p!=="$$")if(p==="on"){const M={},ee="$$"+x;let F=x.slice(2);var S=Us(F);if(Bs(F)&&(F=F.slice(0,-7),M.capture=!0),!S&&g){if(D!=null)continue;e.removeEventListener(F,a[ee],M),a[ee]=null}if(D!=null)if(S)e[`__${F}`]=D,Xs([F]);else{let $=function(Y){a[x].call(this,Y)};var q=$;a[ee]=Ws(F,e,$,M)}else S&&(e[`__${F}`]=void 0)}else if(x==="style")bt(e,x,D);else if(x==="autofocus")Zs(e,!!D);else if(!l&&(x==="__value"||x==="value"&&D!=null))e.value=e.__value=D;else if(x==="selected"&&c)di(e,D);else{var A=x;u||(A=qs(A));var z=A==="defaultValue"||A==="defaultChecked";if(D==null&&!l&&!z)if(s[x]=null,A==="value"||A==="checked"){let M=e;const ee=n===void 0;if(A==="value"){let F=M.defaultValue;M.removeAttribute(A),M.defaultValue=F,M.value=M.__value=ee?F:null}else{let F=M.defaultChecked;M.removeAttribute(A),M.defaultChecked=F,M.checked=ee?F:!1}}else e.removeAttribute(x);else z||_.includes(A)&&(l||typeof D!="string")?e[A]=D:typeof D!="function"&&bt(e,A,D)}}}for(let x of Object.getOwnPropertySymbols(t))x.description===hs&&ai(e,()=>t[x]);return a}function Gr(e){return e.__attributes??(e.__attributes={[Kr]:e.nodeName.includes("-"),[Zr]:e.namespaceURI===ps})}var fr=new Map;function Wr(e){var n=fr.get(e.nodeName);if(n)return n;fr.set(e.nodeName,n=[]);for(var t,r=e,i=Element.prototype;i!==r;){t=gr(r);for(var s in t)t[s].set&&n.push(s);r=Et(r)}return n}function Lt(e=!1){const n=U,t=n.l.u;if(!t)return;let r=()=>vt(n.s);if(e){let i=0,s={};const l=mn(()=>{let u=!1;const a=n.s;for(const c in a)a[c]!==s[c]&&(s[c]=a[c],u=!0);return u&&i++,i});r=()=>I(l)}t.b.length&&Ms(()=>{ur(n,r),ut(t.b)}),or(()=>{const i=Bn(()=>t.m.map(Ko));return()=>{for(const s of i)typeof s=="function"&&s()}}),t.a.length&&or(()=>{ur(n,r),ut(t.a)})}function ur(e,n){if(e.l.s)for(const t of e.l.s)I(t);n()}let Fn=!1;function mi(e){var n=Fn;try{return Fn=!1,[e(),Fn]}finally{Fn=n}}const vi={get(e,n){if(!e.exclude.includes(n))return I(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=Be({get[n](){return e.props[n]}},n,Er)),e.special[n](t),tr(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),tr(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function jn(e,n){return new Proxy({props:e,exclude:n,special:{},version:Qe(0)},vi)}const gi={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let i=e.props[r];ln(i)&&(i=i());const s=je(i,n);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const i=je(r,n);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,n){if(n===Ge||n===br)return!1;for(let t of e.props)if(ln(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(ln(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function pi(...e){return new Proxy({props:e},gi)}function dr(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function Be(e,n,t,r){var ee;var i=(t&us)!==0,s=!pn||(t&ds)!==0,l=(t&_s)!==0,u=(t&ms)!==0,a=!1,c;l?[c,a]=mi(()=>e[n]):c=e[n];var v=Ge in e||br in e,_=l&&(((ee=je(e,n))==null?void 0:ee.set)??(v&&n in e&&(F=>e[n]=F)))||void 0,f=r,g=!0,p=!1,S=()=>(p=!0,g&&(g=!1,u?f=Bn(r):f=r),f);c===void 0&&r!==void 0&&(_&&s&&rs(),c=S(),_&&_(c));var A;if(s)A=()=>{var F=e[n];return F===void 0?S():(g=!0,p=!1,F)};else{var z=(i?mn:St)(()=>e[n]);z.f|=Go,A=()=>{var F=I(z);return F!==void 0&&(f=void 0),F===void 0?f:F}}if((t&Er)===0)return A;if(_){var q=e.$$legacy;return function(F,$){return arguments.length>0?((!s||!$||q||a)&&_($?A():F),F):A()}}var x=!1,D=Ft(c),M=mn(()=>{var F=A(),$=I(D);return x?(x=!1,$):D.v=F});return l&&I(M),i||(M.equals=Mt),function(F,$){if(arguments.length>0){const Y=$?I(M):s&&l?Ze(F):F;if(!M.equals(Y)){if(x=!0,ue(D,Y),p&&f!==void 0&&(f=Y),dr(M))return F;Bn(()=>I(M))}return F}return dr(M)?M.v:I(M)}}function hi(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function bi(){const e=U;return e===null&&Dr(),(n,t,r)=>{var s;const i=(s=e.s.$$events)==null?void 0:s[n];if(i){const l=Un(i)?i.slice():[i],u=hi(n,t,r);for(const a of l)a.call(e.x,u);return!u.defaultPrevented}return!0}}function yi(e){U===null&&Dr(),U.l===null&&ts(),wi(U).a.push(e)}function wi(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Ei="5";var vr;typeof window<"u"&&((vr=window.__svelte??(window.__svelte={})).v??(vr.v=new Set)).add(Ei);ls();const Di={__category__:"Distributions",EnzymeForward:2.965494343998166,EnzymeReverse:3.413208734903013,FiniteDifferences:25.89766091855899,ForwardDiff:1.7803830467982442,MooncakeForward:7.548470270644425,MooncakeReverse:6.209377486522489,ReverseDiff:38.64535605851505,ReverseDiffCompiled:3.350768451275122,Zygote:1987.8438599487617},Ri={__category__:"Distributions",EnzymeForward:2.7041481055232013,EnzymeReverse:2.9057056485709456,FiniteDifferences:23.03956895100185,ForwardDiff:1.4056357122107097,MooncakeForward:8.126933271017693,MooncakeReverse:7.727173725151253,ReverseDiff:37.49755768906856,ReverseDiffCompiled:4.510015439622949,Zygote:"error"},Mi={__category__:"DynamicPPL demo models",EnzymeForward:3.8227869514957287,EnzymeReverse:3.6089984288987274,FiniteDifferences:40.81806282722513,ForwardDiff:1.5132619729634653,MooncakeForward:21.54555940023068,MooncakeReverse:7.91758451472192,ReverseDiff:37.4665399478463,ReverseDiffCompiled:4.413308386886846,Zygote:"error"},xi={__category__:"DynamicPPL demo models",EnzymeForward:3.729840105212155,EnzymeReverse:3.0921305320915455,FiniteDifferences:40.097695482268726,ForwardDiff:1.5188389617638849,MooncakeForward:19.243832048710097,MooncakeReverse:7.174016354369111,ReverseDiff:38.96594119762325,ReverseDiffCompiled:4.0554826447029,Zygote:2883.443500157381},Ti={__category__:"DynamicPPL demo models",EnzymeForward:4.781388047168778,EnzymeReverse:4.144968871714663,FiniteDifferences:65.89286946917927,ForwardDiff:1.4284455099954165,MooncakeForward:27.28016623674405,MooncakeReverse:5.802902784540121,ReverseDiff:31.037252458108295,ReverseDiffCompiled:2.996995233819162,Zygote:"error"},Si={__category__:"DynamicPPL demo models",EnzymeForward:5.562584170225865,EnzymeReverse:4.899308145569646,FiniteDifferences:67.3488020265278,ForwardDiff:1.4869235600477655,MooncakeForward:34.65528420142641,MooncakeReverse:8.822870954341177,ReverseDiff:58.66296710028467,ReverseDiffCompiled:3.267611431864727,Zygote:"error"},Fi={__category__:"DynamicPPL demo models",EnzymeForward:4.822139934233398,EnzymeReverse:5.198517373432175,FiniteDifferences:68.47058823529413,ForwardDiff:1.5817446012582896,MooncakeForward:37.23467334909823,MooncakeReverse:8.420824130234081,ReverseDiff:64.03545752774481,ReverseDiffCompiled:3.744037170882808,Zygote:1973.886595244317},Ni={__category__:"DynamicPPL demo models",EnzymeForward:4.803893398462754,EnzymeReverse:4.768694558915975,FiniteDifferences:69.42380369766178,ForwardDiff:1.5138009136627124,MooncakeForward:33.55370919881305,MooncakeReverse:8.251132960388766,ReverseDiff:65.01407112313146,ReverseDiffCompiled:3.6368189737092176,Zygote:1725.4696153131388},Ci={__category__:"DynamicPPL demo models",EnzymeForward:3.7174850638664925,EnzymeReverse:3.14327875964744,FiniteDifferences:41.985182418129746,ForwardDiff:1.4319943170209026,MooncakeForward:21.411396062311972,MooncakeReverse:7.076713472652559,ReverseDiff:29.32977090733567,ReverseDiffCompiled:4.729741890620526,Zygote:3463.9025155041463},Ai={__category__:"DynamicPPL demo models",EnzymeForward:4.507459997116909,EnzymeReverse:3.442987188132165,FiniteDifferences:65.13801910226358,ForwardDiff:1.3687867619006546,MooncakeForward:23.300772465043515,MooncakeReverse:5.644933902996475,ReverseDiff:34.82151845637584,ReverseDiffCompiled:2.908583667812595,Zygote:"error"},ki={__category__:"DynamicPPL demo models",EnzymeForward:5.132506393861893,EnzymeReverse:4.949004486819966,FiniteDifferences:65.93601101189425,ForwardDiff:1.400662330545827,MooncakeForward:30.59138815698239,MooncakeReverse:7.2926343438765455,ReverseDiff:52.91569598633645,ReverseDiffCompiled:3.2050684548301325,Zygote:"error"},Oi={__category__:"DynamicPPL demo models",EnzymeForward:4.757650740511626,EnzymeReverse:5.109848484848485,FiniteDifferences:65.00997081712062,ForwardDiff:1.4410703218985819,MooncakeForward:28.53094484940173,MooncakeReverse:6.791445824839418,ReverseDiff:45.751011205012134,ReverseDiffCompiled:3.427049959511319,Zygote:"error"},Ii={__category__:"Distributions",EnzymeForward:4.802859465573306,EnzymeReverse:6.359964978198349,FiniteDifferences:157.42540716612376,ForwardDiff:2.7043842464365335,MooncakeForward:35.27351603004973,MooncakeReverse:6.252457442871681,ReverseDiff:58.660268973440566,ReverseDiffCompiled:7.024687532279722,Zygote:"error"},Li={__category__:"DynamicPPL demo models",EnzymeForward:4.8784083779740355,EnzymeReverse:3.192847162035481,FiniteDifferences:67.31943407628594,ForwardDiff:1.4386617100371748,MooncakeForward:27.338578698523843,MooncakeReverse:5.410745816867064,ReverseDiff:40.82317858592275,ReverseDiffCompiled:3.3452996708503635,Zygote:"error"},Pi={__category__:"DynamicPPL demo models",EnzymeForward:4.9323651600888185,EnzymeReverse:4.714056644566157,FiniteDifferences:65.12953810048714,ForwardDiff:1.3959085656507293,MooncakeForward:28.605749201499794,MooncakeReverse:7.350982267677139,ReverseDiff:52.75470395304678,ReverseDiffCompiled:3.146356139171061,Zygote:"error"},zi={__category__:"DynamicPPL demo models",EnzymeForward:4.292973335569345,EnzymeReverse:4.847060124450878,FiniteDifferences:62.44606052250638,ForwardDiff:1.370768128403554,MooncakeForward:25.286234817813764,MooncakeReverse:7.220869030696531,ReverseDiff:45.6311299160713,ReverseDiffCompiled:2.8258394409408556,Zygote:"error"},Vi={__category__:"Core Turing syntax",EnzymeForward:3.679717514124294,EnzymeReverse:2.340472554850116,FiniteDifferences:85.95208886233017,ForwardDiff:1.7468412057882028,MooncakeForward:23.299263622974962,MooncakeReverse:6.207741241753887,ReverseDiff:27.557851239669425,ReverseDiffCompiled:2.741600203631427,Zygote:"error"},Bi={__category__:"Core Turing syntax",EnzymeForward:3.5445275403608743,EnzymeReverse:3.0518651549247013,FiniteDifferences:33.685993975903614,ForwardDiff:1.8812201616448032,MooncakeForward:12.768820682219623,MooncakeReverse:9.510836223629363,ReverseDiff:79.82273630682732,ReverseDiffCompiled:7.824540769439628,Zygote:"error"},ji={__category__:"DynamicPPL arXiV paper",EnzymeForward:1.4968765347666237,EnzymeReverse:2.2455409751818607,FiniteDifferences:26.77759994277488,ForwardDiff:1.6570956858804105,MooncakeForward:4.10376833805045,MooncakeReverse:8.930158981951493,ReverseDiff:128.8002873035688,ReverseDiffCompiled:21.561425246258555,Zygote:16.5660168344971},Ui={__category__:"DynamicPPL arXiV paper",EnzymeForward:5.00191945948021,EnzymeReverse:2.410328309381937,FiniteDifferences:166.14981860966762,ForwardDiff:3.47213476070529,MooncakeForward:38.96437269227748,MooncakeReverse:4.372128918452097,ReverseDiff:29.489120334520678,ReverseDiffCompiled:2.460656253688476,Zygote:627.1476523014005},$i={__category__:"DynamicPPL arXiV paper",EnzymeForward:11644.777455104351,EnzymeReverse:2.418838517482983,FiniteDifferences:130179.87375326772,ForwardDiff:2865.225068729777,MooncakeForward:19151.88853056535,MooncakeReverse:3.564923740161338,ReverseDiff:1.8304452991791904,ReverseDiffCompiled:.4089425360261756,Zygote:2.679787359949503},qi={__category__:"DynamicPPL arXiV paper",EnzymeForward:37.7264140227535,EnzymeReverse:9.202599965524005,FiniteDifferences:"NaN",ForwardDiff:27.11938301210883,MooncakeForward:192.3969647840211,MooncakeReverse:4.533102987070888,ReverseDiff:72.8588983663438,ReverseDiffCompiled:11.00763192324466,Zygote:"error"},Hi={__category__:"DynamicPPL arXiV paper",EnzymeForward:"error",EnzymeReverse:3.026136961324029,FiniteDifferences:3428.897715269731,ForwardDiff:277.9752047223978,MooncakeForward:542.4920668085298,MooncakeReverse:9.457977509089371,ReverseDiff:85.93229681555377,ReverseDiffCompiled:13.194823898663099,Zygote:"error"},Ki={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:3.155609701180482,FiniteDifferences:39.65412889872243,ForwardDiff:1.2073017941264907,MooncakeForward:19.068656303015615,MooncakeReverse:9.963908831738735,ReverseDiff:14.635789455035079,ReverseDiffCompiled:1.4199991947615582,Zygote:855.7987652260972},Zi={__category__:"DynamicPPL arXiV paper",EnzymeForward:45.340119267192044,EnzymeReverse:3.329466190507857,FiniteDifferences:1248.2335871723694,ForwardDiff:53.09501106043449,MooncakeForward:639.2305925241578,MooncakeReverse:5.716149465467027,ReverseDiff:69.91963280722379,ReverseDiffCompiled:8.462274654365364,Zygote:"wrong"},Gi={__category__:"DynamicPPL arXiV paper",EnzymeForward:117.02731750502377,EnzymeReverse:.9713404679847634,FiniteDifferences:2788.5847229853334,ForwardDiff:254.3631558738902,MooncakeForward:426.306132213004,MooncakeReverse:7.953803162215305,ReverseDiff:242.25972120419885,ReverseDiffCompiled:22.754017252876473,Zygote:4791.66310138569},Wi={__category__:"DynamicPPL arXiV paper",EnzymeForward:280.01865699267046,EnzymeReverse:2.0362637621153663,FiniteDifferences:6875.50495268255,ForwardDiff:82.26278178511711,MooncakeForward:1374.7739822813119,MooncakeReverse:4.3296539856185845,ReverseDiff:52.70505766650664,ReverseDiffCompiled:5.507914196663204,Zygote:"error"},Xi={__category__:"Core Turing syntax",EnzymeForward:3.2511304406687875,EnzymeReverse:3.01422786472584,FiniteDifferences:39.51775431861804,ForwardDiff:1.4818951009128591,MooncakeForward:17.242937027155442,MooncakeReverse:7.127508969759098,ReverseDiff:42.65009031983849,ReverseDiffCompiled:3.5538188145570317,Zygote:2172.6384289427765},Ji={__category__:"Core Turing syntax",EnzymeForward:3.5786886951788612,EnzymeReverse:2.638108121113612,FiniteDifferences:63.08452117353999,ForwardDiff:1.3261862219575145,MooncakeForward:27.562164797659676,MooncakeReverse:15.865188735769923,ReverseDiff:39.09264047194203,ReverseDiffCompiled:3.181873184898354,Zygote:"error"},Yi={__category__:"Base Julia features",EnzymeForward:3.2675946807683336,EnzymeReverse:12.86937574066287,FiniteDifferences:12.660251946572137,ForwardDiff:.9776893673453467,MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"wrong",ReverseDiffCompiled:"wrong",Zygote:"error"},Qi={__category__:"Effect of model size",EnzymeForward:5.440355981516345,EnzymeReverse:1.9815548724026815,FiniteDifferences:151.72926208651398,ForwardDiff:2.058192637697205,MooncakeForward:35.63020047045606,MooncakeReverse:5.857692043660327,ReverseDiff:29.59498003422704,ReverseDiffCompiled:2.7279263465840646,Zygote:"error"},ea={__category__:"Effect of model size",EnzymeForward:25.926884139482567,EnzymeReverse:1.8781157270029671,FiniteDifferences:648.6330546529881,ForwardDiff:11.008618127786033,MooncakeForward:143.7130628954224,MooncakeReverse:5.527846374995392,ReverseDiff:30.814271423807938,ReverseDiffCompiled:2.737247989423819,Zygote:"error"},na={__category__:"Effect of model size",EnzymeForward:56.05143989543366,EnzymeReverse:2.0144351634092934,FiniteDifferences:1233.8800279100312,ForwardDiff:20.330677290836654,MooncakeForward:285.7029943855272,MooncakeReverse:6.167646307181191,ReverseDiff:35.13467400508044,ReverseDiffCompiled:2.932413530010173,Zygote:"error"},ta={__category__:"Effect of model size",EnzymeForward:259.55520958083827,EnzymeReverse:1.821026255583397,FiniteDifferences:6476.411713159048,ForwardDiff:98.4738164703878,MooncakeForward:1742.5461744850265,MooncakeReverse:5.306835822493442,ReverseDiff:30.369993018588012,ReverseDiffCompiled:2.713725654625883,Zygote:"error"},ra={__category__:"Distributions",EnzymeForward:3.5636363636363635,EnzymeReverse:2.4034451707224056,FiniteDifferences:32.24576612903226,ForwardDiff:1.5882349890664567,MooncakeForward:10.003456960294445,MooncakeReverse:7.610022271714921,ReverseDiff:25.425591965758265,ReverseDiffCompiled:2.8948863426762776,Zygote:2727.0868014268726},oa={__category__:"Distributions",EnzymeForward:2.856191451990632,EnzymeReverse:3.1445752009184846,FiniteDifferences:25.173025404157045,ForwardDiff:1.7904293759968106,MooncakeForward:13.342151224929227,MooncakeReverse:6.347764975075591,ReverseDiff:40.85132826662948,ReverseDiffCompiled:4.164658999927215,Zygote:"error"},sa={__category__:"Distributions",EnzymeForward:2.1531641492940436,EnzymeReverse:6.516399315218293,FiniteDifferences:18.653843511712576,ForwardDiff:1.306928195425821,MooncakeForward:6.252678919712718,MooncakeReverse:8.278038555781892,ReverseDiff:13.535707027942422,ReverseDiffCompiled:3.2582001489373886,Zygote:"error"},ia={__category__:"Core Turing syntax",EnzymeForward:3.4819331592056826,EnzymeReverse:2.899704821431985,FiniteDifferences:31.631321760524877,ForwardDiff:1.728142284700782,MooncakeForward:13.0528988227265,MooncakeReverse:8.216104508712876,ReverseDiff:74.3413594789357,ReverseDiffCompiled:7.052807646356032,Zygote:"error"},aa={__category__:"Core Turing syntax",EnzymeForward:3.664738026737873,EnzymeReverse:2.890762812872467,FiniteDifferences:34.52938548536898,ForwardDiff:1.7056081717657559,MooncakeForward:10.574403151224526,MooncakeReverse:8.28014756038143,ReverseDiff:49.26063207179087,ReverseDiffCompiled:4.6907903291189585,Zygote:3942.904738911499},la={__category__:"Core Turing syntax",EnzymeForward:3.344655752729801,EnzymeReverse:3.1638146234775064,FiniteDifferences:57.636653008702716,ForwardDiff:1.4707350319807069,MooncakeForward:18.958675965441866,MooncakeReverse:6.627940449445234,ReverseDiff:33.49392238137713,ReverseDiffCompiled:3.157721990864115,Zygote:"error"},ca={__category__:"Core Turing syntax",EnzymeForward:3.011780753222005,EnzymeReverse:2.6100428938836826,FiniteDifferences:31.330570303134103,ForwardDiff:1.6282228999168284,MooncakeForward:9.591685568206486,MooncakeReverse:6.9552939326399965,ReverseDiff:38.583738633960664,ReverseDiffCompiled:3.852172431419322,Zygote:4630.784140374557},fa={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:23.24518406800576,ForwardDiff:"NaN",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"NaN",ReverseDiffCompiled:3.6004980597266747,Zygote:2230.931343283582},ua={__category__:"Integrations with other packages",EnzymeForward:"wrong",EnzymeReverse:"wrong",FiniteDifferences:61.515665705651465,ForwardDiff:5.812374454526563,MooncakeForward:"error",MooncakeReverse:60.26466042683244,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},da={__category__:"PosteriorDB",EnzymeForward:7.7080913666279525,EnzymeReverse:2.87402904424181,FiniteDifferences:142.13607391083235,ForwardDiff:2.140709219858156,MooncakeForward:53.55129533678757,MooncakeReverse:6.410238814164151,ReverseDiff:46.65931945149822,ReverseDiffCompiled:3.986894441611423,Zygote:"error"},_a={__category__:"PosteriorDB",EnzymeForward:7.782428262334622,EnzymeReverse:2.923203963666391,FiniteDifferences:141.41500765696784,ForwardDiff:2.172957621336887,MooncakeForward:55.62372330953088,MooncakeReverse:6.3057883678511235,ReverseDiff:45.33458543914765,ReverseDiffCompiled:3.7812128418549347,Zygote:"error"},ma={__category__:"Core Turing syntax",EnzymeForward:2.9706752200251456,EnzymeReverse:2.0866840341463715,FiniteDifferences:41.496391454965355,ForwardDiff:1.3745465313298382,MooncakeForward:16.5596584993406,MooncakeReverse:6.168827606385897,ReverseDiff:18.948290536380426,ReverseDiffCompiled:1.8448849104859337,Zygote:2407.2246858832227},va={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:10.891230567111888,FiniteDifferences:44.65064555000861,ForwardDiff:1.1032681014306975,MooncakeForward:19.880844167283232,MooncakeReverse:12.082495926127105,ReverseDiff:16.92880355608681,ReverseDiffCompiled:4.43277409285993,Zygote:363.63779746395693},ga={__category__:"Core Turing syntax",EnzymeForward:3.7968933866792187,EnzymeReverse:3.486343078202046,FiniteDifferences:41.4745693470416,ForwardDiff:1.4253794574693657,MooncakeForward:22.291891035793476,MooncakeReverse:7.541563814622953,ReverseDiff:39.58124738530191,ReverseDiffCompiled:4.084400288026334,Zygote:"error"},pa={__category__:"Base Julia features",EnzymeForward:3.4892019104312313,EnzymeReverse:2.7303969697661614,FiniteDifferences:31.75413107458187,ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ha={__category__:"Base Julia features",EnzymeForward:2.964740972197564,EnzymeReverse:2.6320143778035234,FiniteDifferences:42.256347018714635,ForwardDiff:1.6260139157879638,MooncakeForward:20.821913772787134,MooncakeReverse:6.48009569052119,ReverseDiff:22.893811533052038,ReverseDiffCompiled:"wrong",Zygote:1846.0074086661004},ba={assume_beta:Di,assume_dirichlet:Ri,demo_assume_dot_observe:Mi,demo_assume_dot_observe_literal:xi,demo_assume_index_observe:Ti,demo_assume_matrix_observe_matrix_index:Si,demo_assume_multivariate_observe:Fi,demo_assume_multivariate_observe_literal:Ni,demo_assume_observe_literal:Ci,demo_assume_submodel_observe_index_literal:Ai,demo_dot_assume_observe:ki,demo_dot_assume_observe_index:Oi,assume_lkjcholu:Ii,demo_dot_assume_observe_index_literal:Li,demo_dot_assume_observe_matrix_index:Pi,demo_dot_assume_observe_submodel:zi,dot_assume:Vi,dot_observe:Bi,dppl_gauss_unknown:ji,dppl_hier_poisson:Ui,dppl_high_dim_gauss:$i,dppl_hmm_semisup:qi,dppl_lda:Hi,assume_mvnormal:Ki,dppl_logistic_regression:Zi,dppl_naive_bayes:Gi,dppl_sto_volatility:Wi,dynamic_constraint:Xi,multiple_constraints_same_var:Ji,multithreaded:Yi,n010:Qi,n050:ea,n100:na,n500:ta,assume_normal:ra,observe_bernoulli:oa,observe_categorical:sa,observe_index:ia,observe_literal:aa,observe_multivariate:la,observe_submodel:ca,observe_von_mises:fa,ordinary_diffeq:ua,pdb_eight_schools_centered:da,pdb_eight_schools_noncentered:_a,assume_submodel:ma,assume_wishart:va,broadcast_macro:ga,call_C:pa,control_flow:ha},ya=`@model function assume_beta()
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

model = demo_assume_multivariate_observe_literal()`,Sa=`@model function demo_assume_observe_literal()
    # univariate \`assume\` and literal \`observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    1.5 ~ Normal(m, sqrt(s))
    2.0 ~ Normal(m, sqrt(s))
end

model = demo_assume_observe_literal()`,Fa=`@model function _prior_dot_assume(::Type{TV} = Vector{Float64}) where {TV}
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

model = demo_assume_submodel_observe_index_literal()`,Na=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe_index_literal()`,Oa=`using LinearAlgebra: Diagonal

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

model = dot_observe()`,za=`n = 10_000
s = abs(rand()) + 0.5
y = randn() .+ s * randn(n)

@model function dppl_gauss_unknown(y)
    N = length(y)
    m ~ Normal(0, 1)
    s ~ truncated(Cauchy(0, 5); lower = 0)
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

model = dppl_hmm_semisup(K, T, T_unsup, w, z, u, alpha, beta)`,Ua=`v = 100      # words
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

model = dppl_lda(k, m, w, doc, alpha, beta)`,$a=`@model function assume_mvnormal()
    a ~ MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0])
end

model = assume_mvnormal()`,qa=`using StatsFuns: logistic

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

model = dppl_logistic_regression(X', y)`,Ha=`using MLDatasets: MNIST
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

model = dppl_naive_bayes(image_vec, labels, C, D)`,Ka=`using DelimitedFiles: readdlm

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

model = dppl_sto_volatility(y)`,Za=`@model function dynamic_constraint()
    a ~ Normal()
    b ~ truncated(Normal(); lower = a)
end

model = dynamic_constraint()`,Ga=`@model function multiple_constraints_same_var(::Type{TV} = Vector{Float64}) where {TV}
    x = TV(undef, 5)
    x[1] ~ Normal()
    x[2] ~ InverseGamma(2, 3)
    x[3] ~ truncated(Normal(), -5, 20)
    x[4:5] ~ Dirichlet([1.0, 2.0])
end

model = multiple_constraints_same_var()`,Wa=`#=
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

model = multithreaded([1.5, 2.0, 2.5, 1.5, 2.0, 2.5])`,Xa=`@model function n010(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 10)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n010()`,Ja=`@model function n050(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 50)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n050()`,Ya=`@model function n100(::Type{TV} = Vector{Float64}) where {TV}
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

model = pdb_eight_schools_centered(J, y, sigma)`,fl=`J = 8
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

model = pdb_eight_schools_noncentered(J, y, sigma)`,ul=`@model function inner1()
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

model = call_C()`,vl=`#= 
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

model = control_flow()`,gl={assume_beta:ya,assume_dirichlet:wa,demo_assume_dot_observe:Ea,demo_assume_dot_observe_literal:Da,demo_assume_index_observe:Ra,demo_assume_matrix_observe_matrix_index:Ma,demo_assume_multivariate_observe:xa,demo_assume_multivariate_observe_literal:Ta,demo_assume_observe_literal:Sa,demo_assume_submodel_observe_index_literal:Fa,demo_dot_assume_observe:Na,demo_dot_assume_observe_index:Ca,assume_lkjcholu:Aa,demo_dot_assume_observe_index_literal:ka,demo_dot_assume_observe_matrix_index:Oa,demo_dot_assume_observe_submodel:Ia,dot_assume:La,dot_observe:Pa,dppl_gauss_unknown:za,dppl_hier_poisson:Va,dppl_high_dim_gauss:Ba,dppl_hmm_semisup:ja,dppl_lda:Ua,assume_mvnormal:$a,dppl_logistic_regression:qa,dppl_naive_bayes:Ha,dppl_sto_volatility:Ka,dynamic_constraint:Za,multiple_constraints_same_var:Ga,multithreaded:Wa,n010:Xa,n050:Ja,n100:Ya,n500:Qa,assume_normal:el,observe_bernoulli:nl,observe_categorical:tl,observe_index:rl,observe_literal:ol,observe_multivariate:sl,observe_submodel:il,observe_von_mises:al,ordinary_diffeq:ll,pdb_eight_schools_centered:cl,pdb_eight_schools_noncentered:fl,assume_submodel:ul,assume_wishart:dl,broadcast_macro:_l,call_C:ml,control_flow:vl},pl="1.18.0",hl="1.5.0",bl="5.10.0",yl="0.13.5",wl="0.4.5",El="0.1.42",Dl="4.4.0",Rl="0.8.3",Ml="0.8.9",xl="0.7.0",Tl="0.4.1",Sl="1.1.3",Fl="2.5.0",Nl="1.1.2",Cl="0.4.0",Al="0.5.4",kl="3.5.1+1",Ol="7.22.0",Il="1.12.0",Ll="1.11.0",Pl="1.1.2",zl="0.5.2",Vl="1.1.0",Bl="0.4.8",jl="0.5.1",Ul="0.4.6",$l="1.11.0",ql="0.1.1",Hl="0.15.12",Kl="0.1.9",Zl="0.1.6",Gl="1.6.0",Wl="1.2.2",Xl="0.5.0",Jl="0.2.7",Yl="0.10.15",Ql="0.3.14",ec="1.72.6",nc="1.26.0",tc="1.3.1",rc="0.1.10",oc="0.10.43",sc="0.10.4+0",ic="0.1.13",ac="0.7.8",lc="3.31.0",cc="0.12.1",fc="0.11.0",uc="0.13.1",dc="1.0.3",_c="0.2.4",mc="0.3.1",vc="1.0.0",gc="4.18.1",pc="1.1.1+0",hc="0.1.2",bc="0.2.3",yc="2.5.0",wc="0.1.2",Ec="1.6.0",Dc="0.1.3",Rc="0.3.1",Mc="4.1.1",xc="1.16.0",Tc="0.7.13",Sc="1.8.1",Fc="0.18.22",Nc="1.0.0",Cc="1.11.0",Ac="0.1.2",kc="1.9.1",Oc="0.4.0",Ic="6.190.2",Lc="4.10.1",Pc="5.24.1",zc="1.1.0",Vc="1.15.1",Bc="0.7.10",jc="0.4.26",Uc="1.11.0",$c="0.25.122",qc="0.6.58",Hc="0.9.5",Kc="1.6.0",Zc="0.38.8",Gc="2.0.0",Wc="1.0.5",Xc="0.13.97",Jc="0.8.15",Yc="0.0.208+0",Qc="0.1.11",ef="1.27.0",nf="0.1.10",tf="0.10.14",rf="1.10.0",of="3.3.11+0",sf="0.2.2",af="0.1.1",lf="0.3.5",cf="0.3.2",ff="1.1.0",uf="1.2.0",df="1.17.1",_f="0.9.24",mf="1.11.0",vf="1.15.0",gf="2.29.0",pf="0.12.33",hf="0.8.5",bf="1.2.2",yf="0.1.2",wf="1.1.3",Ef="0.1.3",Df="0.5.2",Rf="1.11.0",Mf="0.2.0",xf="1.7.2",Tf="0.6.2",Sf="0.5.6",Ff="1.3.1",Nf="1.13.1",Cf="0.17.2",Af="1.14.6+0",kf="1.10.19",Of="0.2.0",If="2.12.2+0",Lf="0.3.28",Pf="0.4.15",zf="0.1.1",Vf="0.1.7",Bf="0.10.5",jf="0.3.8",Uf="0.1.5",$f="0.3.1",qf="1.4.5",Hf="2025.2.0+0",Kf="1.11.0",Zf="0.7.0",Gf="0.16.2",Wf="0.7.11",Xf="0.1.17",Jf="1.3.1",Yf="0.2.6",Qf="1.10.0",eu="1.0.0",nu="0.5.15",tu="1.7.1",ru="1.14.3",ou="0.2.1",su="0.2.4",iu="0.9.39",au="0.6.10",lu="0.10.2",cu="9.4.4",fu="0.0.38+0",uu="1.4.0",du="0.1.17",_u="2.8.0",mu="1.11.0",vu="0.3.1",gu="0.2.1",pu="0.6.4",hu="8.6.0+0",bu="1.11.0",yu="1.7.2+0",wu="1.11.0+1",Eu="0.9.1+6",Du="1.11.0",Ru="1.18.0+0",Mu="0.9.9",xu="0.1.4",Tu="7.4.0",Su="1.11.0",Fu="3.46.1",Nu="2.2.0",Cu="1.13.1",Au="0.3.29",ku="1.11.0",Ou="1.2.0",Iu="0.10.7",Lu="7.6.0",Pu="0.3.15",zu="2025.2.0+0",Vu="1.0.0",Bu="0.7.18",ju="1.12.0",Uu="0.4.17",$u="0.4.8",qu="4.3.2+0",Hu="0.1.11",Ku="5.5.4+0",Zu="0.5.16",Gu="0.1.8",Wu="0.4.2",Xu="1.11.0",Ju="0.1.4",Yu="1.1.9",Qu="2.28.6+0",ed="0.2.0",nd="10.1.4+3",td="1.2.0",rd="2.1.0",od="1.11.0",sd="0.4.173",id="0.3.4",ad="0.3.7",ld="2023.12.12",cd="0.2.4",fd="0.10.3",ud="7.10.0",dd="0.9.31",_d="0.4.3",md="1.1.3",vd="0.1.5",gd="0.10.5",pd="1.0.0",hd="1.2.0",bd="4.12.0",yd="2.2.0",wd="1.10.0",Ed="1.11.0",Dd="1.6.0",Rd="0.5.0",Md="1.17.0",xd="0.3.27+1",Td="0.8.5+0",Sd="5.0.8+0",Fd="1.6.0",Nd="3.5.4+0",Cd="0.5.6+0",Ad="1.13.2",kd="0.4.6",Od="5.1.0",Id="4.0.2",Ld="0.4.8",Pd="1.8.1",zd="6.103.0",Vd="1.5.0",Bd="1.10.1",jd="1.36.0",Ud="1.8.0",$d="1.16.1",qd="1.4.0",Hd="1.8.0",Kd="1.9.0",Zd="1.16.0",Gd="1.4.0",Wd="1.5.0",Xd="1.5.0",Jd="1.7.0",Yd="1.6.0",Qd="1.6.0",e1="1.7.0",n1="1.15.0",t1="1.4.0",r1="1.6.0",o1="1.4.0",s1="1.4.0",i1="1.5.0",a1="1.18.1",l1="1.7.0",c1="1.7.0",f1="1.6.0",u1="1.4.0",d1="1.7.0",_1="1.5.0",m1="1.6.0",v1="0.11.36",g1="1.0.2",p1="0.5.12",h1="0.12.3",b1="2.8.3",y1="1.2.1",w1="0.3.6",E1="1.11.0",D1="0.4.7",R1="0.7.18",M1="0.2.2",x1="1.4.3",T1="0.2.4",S1="0.4.34",F1="1.2.1",N1="1.5.0",C1="0.2.0",A1="3.1.0",k1="1.11.0",O1="0.1.5",I1="1.11.0",L1="1.3.0",P1="2.11.2",z1="1.11.0",V1="1.11.0",B1="1.7.1",j1="1.6.0",U1="0.3.2",$1="0.4.5",q1="0.1.0",H1="1.3.4",K1="3.39.0",Z1="1.2.2",G1="1.3.1",W1="1.1.1",X1="1.16.1",J1="1.4.2",Y1="0.9.0",Q1="0.5.1+0",e0="2.2.10",n0="0.5.16",t0="0.7.0",r0="0.1.0",o0="0.5.2",s0="2.124.0",i0="0.1.11",a0="1.4.0",l0="1.10.0",c0="1.0.0",f0="7.90.0",u0="1.7.0",d0="3.0.0",_0="1.5.0",m0="1.3.0",v0="1.4.8",g0="1.11.0",p0="1.1.2",h0="1.11.0",b0="0.1.0",y0="1.2.0",w0="2.9.0",E0="0.9.5",D0="1.1.0",R0="1.11.0",M0="1.2.2",x0="1.11.0",T0="1.1.2",S0="0.1.2",F0="0.4.23",N0="2.6.1",C0="0.1.15",A0="0.1.2",k0="1.3.1",O0="1.8.0",I0="1.9.15",L0="1.4.4",P0="3.5.0",z0="1.11.1",V0="1.7.1",B0="0.34.7",j0="1.5.2",U0="0.5.8",$0="0.4.1",q0="0.3.7",H0="0.4.1",K0="0.7.2",Z0="0.3.1",G0="1.11.0",W0="2.5.1",X0="1.11.0",J0=null,Y0="7.7.0+0",Q0="0.3.46",e_="1.0.3",n_="1.0.1",t_="1.12.1",r_="1.10.0",o_="0.1.1",s_="0.1.7",i_="1.11.0",a_="0.5.5",l_="0.5.29",c_="0.2.38",f_="0.1.6",u_="0.11.3",d_="0.4.85",__="1.4.0",m_="0.41.0",v_="1.6.1",g_="1.11.0",p_="1.0.2",h_="1.11.0",b_="1.25.1",y_="1.0.0",w_="0.3.0",E_="1.4.2",D_="1.0.0",R_="1.6.1",M_="2.13.9+0",x_="0.18.1+0",T_="0.10.1",S_="1.2.13+1",F_="0.7.10",N_="0.2.7",C_="1.1.4+0",A_="5.11.0+0",k_="1.59.0+0",O_="2022.0.0+1",I_="17.4.0+2",L_={ADTypes:pl,AbstractFFTs:hl,AbstractMCMC:bl,AbstractPPL:yl,AbstractTrees:wl,Accessors:El,Adapt:Dl,AdvancedHMC:Rl,AdvancedMH:Ml,AdvancedPS:xl,AdvancedVI:Tl,AliasTables:Sl,ArgCheck:Fl,ArgTools:Nl,ArnoldiMethod:Cl,Arpack:Al,Arpack_jll:kl,ArrayInterface:Ol,ArrayLayouts:Il,Artifacts:Ll,Atomix:Pl,AtomsBase:zl,AxisAlgorithms:Vl,AxisArrays:Bl,BFloat16s:jl,BangBang:Ul,Base64:$l,Baselet:ql,Bijectors:Hl,BitFlags:Kl,BitTwiddlingConvenienceFunctions:Zl,BracketingNonlinearSolve:Gl,BufferedStreams:Wl,CEnum:Xl,CPUSummary:Jl,CSV:Yl,Cassette:Ql,ChainRules:ec,ChainRulesCore:nc,Chairmarks:tc,ChangesOfVariables:rc,Chemfiles:oc,Chemfiles_jll:sc,CloseOpenIntervals:ic,CodecZlib:ac,ColorSchemes:lc,ColorTypes:cc,ColorVectorSpace:fc,Colors:uc,Combinatorics:dc,CommonSolve:_c,CommonSubexpressions:mc,CommonWorldInvalidations:vc,Compat:gc,CompilerSupportLibraries_jll:pc,CompositionsBase:hc,ConcreteStructs:bc,ConcurrentUtilities:yc,ConsoleProgressMonitor:wc,ConstructionBase:Ec,ContextVariablesX:Dc,CpuId:Rc,Crayons:Mc,DataAPI:xc,DataDeps:Tc,DataFrames:Sc,DataStructures:Fc,DataValueInterfaces:Nc,Dates:Cc,DefineSingletons:Ac,DelimitedFiles:kc,DensityInterface:Oc,DiffEqBase:Ic,DiffEqCallbacks:Lc,DiffEqNoiseProcess:Pc,DiffResults:zc,DiffRules:Vc,DifferentiationInterface:Bc,DispatchDoctor:jc,Distributed:Uc,Distributions:$c,DistributionsAD:qc,DocStringExtensions:Hc,Downloads:Kc,DynamicPPL:Zc,EllipticalSliceSampling:Gc,EnumX:Wc,Enzyme:Xc,EnzymeCore:Jc,Enzyme_jll:Yc,ExceptionUnwrapping:Qc,ExponentialUtilities:ef,ExprTools:nf,ExproniconLite:tf,FFTW:rf,FFTW_jll:of,FLoops:sf,FLoopsBase:af,FastBroadcast:lf,FastClosures:cf,FastGaussQuadrature:ff,FastPower:uf,FileIO:df,FilePathsBase:_f,FileWatching:mf,FillArrays:vf,FiniteDiff:gf,FiniteDifferences:pf,FixedPointNumbers:hf,ForwardDiff:bf,FunctionProperties:yf,FunctionWrappers:wf,FunctionWrappersWrappers:Ef,Functors:Df,Future:Rf,GPUArraysCore:Mf,GPUCompiler:xf,GZip:Tf,GenericSchur:Sf,Glob:Ff,Graphs:Nf,HDF5:Cf,HDF5_jll:Af,HTTP:kf,HashArrayMappedTries:Of,Hwloc_jll:If,HypergeometricFunctions:Lf,IRTools:Pf,IfElse:zf,ImageBase:Vf,ImageCore:Bf,ImageShow:jf,Inflate:Uf,InitialValues:$f,InlineStrings:qf,IntelOpenMP_jll:Hf,InteractiveUtils:Kf,InternedStrings:Zf,Interpolations:Gf,IntervalSets:Wf,InverseFunctions:Xf,InvertedIndices:Jf,IrrationalConstants:Yf,IterTools:Qf,IteratorInterfaceExtensions:eu,JLD2:nu,JLLWrappers:tu,JSON:"1.2.0",JSON3:ru,Jieko:ou,JuliaVariables:su,KernelAbstractions:iu,KernelDensity:au,Krylov:lu,LLVM:cu,LLVMExtra_jll:fu,LaTeXStrings:uu,LayoutPointers:du,LazyArrays:_u,LazyArtifacts:mu,LazyModules:vu,LeftChildRightSiblingTrees:gu,LibCURL:pu,LibCURL_jll:hu,LibGit2:bu,LibGit2_jll:yu,LibSSH2_jll:wu,LibTracyClient_jll:Eu,Libdl:Du,Libiconv_jll:Ru,Libtask:Mu,LineSearch:xu,LineSearches:Tu,LinearAlgebra:Su,LinearSolve:Fu,LogDensityProblems:Nu,LogDensityProblemsAD:Cu,LogExpFunctions:Au,Logging:ku,LoggingExtras:Ou,MAT:Iu,MCMCChains:Lu,MCMCDiagnosticTools:Pu,MKL_jll:zu,MLCore:Vu,MLDatasets:Bu,MLJModelInterface:ju,MLStyle:Uu,MLUtils:$u,MPICH_jll:qu,MPIPreferences:Hu,MPItrampoline_jll:Ku,MacroTools:Zu,ManualMemory:Gu,MappedArrays:Wu,Markdown:Xu,MaybeInplace:Ju,MbedTLS:Yu,MbedTLS_jll:Qu,MicroCollections:ed,MicrosoftMPI_jll:nd,Missings:td,MistyClosures:rd,Mmap:od,Mooncake:sd,MosaicViews:id,Moshi:ad,MozillaCACerts_jll:ld,MuladdMacro:cd,MultivariateStats:fd,NLSolversBase:ud,NNlib:dd,NPZ:_d,NaNMath:md,NameResolution:vd,NamedArrays:gd,NaturalSort:pd,NetworkOptions:hd,NonlinearSolve:bd,NonlinearSolveBase:yd,NonlinearSolveFirstOrder:wd,NonlinearSolveQuasiNewton:Ed,NonlinearSolveSpectralMethods:Dd,ObjectFile:Rd,OffsetArrays:Md,OpenBLAS_jll:xd,OpenLibm_jll:Td,OpenMPI_jll:Sd,OpenSSL:Fd,OpenSSL_jll:Nd,OpenSpecFun_jll:Cd,Optim:Ad,Optimisers:kd,Optimization:Od,OptimizationBase:Id,OptimizationOptimJL:Ld,OrderedCollections:Pd,OrdinaryDiffEq:zd,OrdinaryDiffEqAdamsBashforthMoulton:Vd,OrdinaryDiffEqBDF:Bd,OrdinaryDiffEqCore:jd,OrdinaryDiffEqDefault:Ud,OrdinaryDiffEqDifferentiation:$d,OrdinaryDiffEqExplicitRK:qd,OrdinaryDiffEqExponentialRK:Hd,OrdinaryDiffEqExtrapolation:Kd,OrdinaryDiffEqFIRK:Zd,OrdinaryDiffEqFeagin:Gd,OrdinaryDiffEqFunctionMap:Wd,OrdinaryDiffEqHighOrderRK:Xd,OrdinaryDiffEqIMEXMultistep:Jd,OrdinaryDiffEqLinear:Yd,OrdinaryDiffEqLowOrderRK:Qd,OrdinaryDiffEqLowStorageRK:e1,OrdinaryDiffEqNonlinearSolve:n1,OrdinaryDiffEqNordsieck:t1,OrdinaryDiffEqPDIRK:r1,OrdinaryDiffEqPRK:o1,OrdinaryDiffEqQPRK:s1,OrdinaryDiffEqRKN:i1,OrdinaryDiffEqRosenbrock:a1,OrdinaryDiffEqSDIRK:l1,OrdinaryDiffEqSSPRK:c1,OrdinaryDiffEqStabilizedIRK:f1,OrdinaryDiffEqStabilizedRK:u1,OrdinaryDiffEqSymplecticRK:d1,OrdinaryDiffEqTsit5:_1,OrdinaryDiffEqVerner:m1,PDMats:v1,PackageExtensionCompat:g1,PaddedViews:p1,Parameters:h1,Parsers:b1,PeriodicTable:y1,Pickle:w1,Pkg:E1,PoissonRandom:D1,Polyester:R1,PolyesterWeave:M1,PooledArrays:x1,PositiveFactorizations:T1,PreallocationTools:S1,PrecompileTools:F1,Preferences:N1,PrettyPrint:C1,PrettyTables:A1,Printf:k1,ProgressLogging:O1,ProgressMeter:I1,PtrArrays:L1,QuadGK:P1,REPL:z1,Random:V1,Random123:B1,RandomNumbers:j1,RangeArrays:U1,Ratios:$1,RealDot:q1,RecipesBase:H1,RecursiveArrayTools:K1,Reexport:Z1,Requires:G1,ResettableStacks:W1,ReverseDiff:X1,Richardson:J1,Rmath:Y1,Rmath_jll:Q1,Roots:e0,RuntimeGeneratedFunctions:n0,SHA:t0,SIMDTypes:r0,SSMProblems:o0,SciMLBase:s0,SciMLJacobianOperators:i0,SciMLLogging:a0,SciMLOperators:l0,SciMLPublic:c0,SciMLSensitivity:f0,SciMLStructures:u0,ScientificTypesBase:d0,ScopedValues:_0,Scratch:m0,SentinelArrays:v0,Serialization:g0,Setfield:p0,SharedArrays:h0,ShowCases:b0,SimpleBufferStream:y0,SimpleNonlinearSolve:w0,SimpleTraits:E0,SimpleUnPack:D0,Sockets:R0,SortingAlgorithms:M0,SparseArrays:x0,SparseConnectivityTracer:T0,SparseInverseSubset:S0,SparseMatrixColorings:F0,SpecialFunctions:N0,SplittablesBase:C0,StackViews:A0,Static:k0,StaticArrayInterface:O0,StaticArrays:I0,StaticArraysCore:L0,StatisticalTraits:P0,Statistics:z0,StatsAPI:V0,StatsBase:B0,StatsFuns:j0,StrideArraysCore:U0,StridedViews:$0,StringEncodings:q0,StringManipulation:H0,StructArrays:K0,StructIO:Z0,StructTypes:G0,StructUtils:W0,StyledStrings:X0,SuiteSparse:J0,SuiteSparse_jll:Y0,SymbolicIndexingInterface:Q0,TOML:e_,TableTraits:n_,Tables:t_,Tar:r_,TensorCore:o_,TerminalLoggers:s_,Test:i_,ThreadingUtilities:a_,TimerOutputs:l_,Tracker:c_,Tracy:f_,TranscodingStreams:u_,Transducers:d_,TruncatedStacktraces:__,Turing:m_,URIs:v_,UUIDs:g_,UnPack:p_,Unicode:h_,Unitful:b_,UnitfulAtomic:y_,UnsafeAtomics:w_,WeakRefStrings:E_,WoodburyMatrices:D_,WorkerUtilities:R_,XML2_jll:M_,Xorg_libpciaccess_jll:x_,ZipFile:T_,Zlib_jll:S_,Zygote:F_,ZygoteRules:N_,libaec_jll:C_,libblastrampoline_jll:A_,nghttp2_jll:k_,oneTBB_jll:O_,p7zip_jll:I_};function yt(e){return[...e.entries()].sort(([n,t],[r,i])=>n.localeCompare(r))}var P_=ve('<tr><td class="svelte-7y9k9c"> </td><td class="version svelte-7y9k9c"> </td></tr>'),z_=ve('<table id="manifest" class="svelte-7y9k9c"><thead><tr><th class="svelte-7y9k9c">Package</th><th class="svelte-7y9k9c">Version</th></tr></thead><tbody></tbody></table>');function V_(e,n){hn(n,!1);let t=new Map;for(const[s,l]of Object.entries(L_))t.set(s,l===""?null:l);Lt();var r=z_(),i=we(W(r));_n(i,5,()=>yt(t),dn,(s,l)=>{let u=()=>I(l)[0],a=()=>I(l)[1];var c=P_(),v=W(c),_=W(v),f=we(v),g=W(f);Ee(()=>{Ve(_,u()),Ve(g,a()===null?"":`v${a()}`)}),re(s,c)}),re(e,r),bn()}function B_(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ft,_r;function j_(){if(_r)return ft;_r=1;function e(o){return o instanceof Map?o.clear=o.delete=o.set=function(){throw new Error("map is read-only")}:o instanceof Set&&(o.add=o.clear=o.delete=function(){throw new Error("set is read-only")}),Object.freeze(o),Object.getOwnPropertyNames(o).forEach(d=>{const h=o[d],N=typeof h;(N==="object"||N==="function")&&!Object.isFrozen(h)&&e(h)}),o}class n{constructor(d){d.data===void 0&&(d.data={}),this.data=d.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(o,...d){const h=Object.create(null);for(const N in o)h[N]=o[N];return d.forEach(function(N){for(const H in N)h[H]=N[H]}),h}const i="</span>",s=o=>!!o.scope,l=(o,{prefix:d})=>{if(o.startsWith("language:"))return o.replace("language:","language-");if(o.includes(".")){const h=o.split(".");return[`${d}${h.shift()}`,...h.map((N,H)=>`${N}${"_".repeat(H+1)}`)].join(" ")}return`${d}${o}`};class u{constructor(d,h){this.buffer="",this.classPrefix=h.classPrefix,d.walk(this)}addText(d){this.buffer+=t(d)}openNode(d){if(!s(d))return;const h=l(d.scope,{prefix:this.classPrefix});this.span(h)}closeNode(d){s(d)&&(this.buffer+=i)}value(){return this.buffer}span(d){this.buffer+=`<span class="${d}">`}}const a=(o={})=>{const d={children:[]};return Object.assign(d,o),d};class c{constructor(){this.rootNode=a(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(d){this.top.children.push(d)}openNode(d){const h=a({scope:d});this.add(h),this.stack.push(h)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(d){return this.constructor._walk(d,this.rootNode)}static _walk(d,h){return typeof h=="string"?d.addText(h):h.children&&(d.openNode(h),h.children.forEach(N=>this._walk(d,N)),d.closeNode(h)),d}static _collapse(d){typeof d!="string"&&d.children&&(d.children.every(h=>typeof h=="string")?d.children=[d.children.join("")]:d.children.forEach(h=>{c._collapse(h)}))}}class v extends c{constructor(d){super(),this.options=d}addText(d){d!==""&&this.add(d)}startScope(d){this.openNode(d)}endScope(){this.closeNode()}__addSublanguage(d,h){const N=d.root;h&&(N.scope=`language:${h}`),this.add(N)}toHTML(){return new u(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(o){return o?typeof o=="string"?o:o.source:null}function f(o){return S("(?=",o,")")}function g(o){return S("(?:",o,")*")}function p(o){return S("(?:",o,")?")}function S(...o){return o.map(h=>_(h)).join("")}function A(o){const d=o[o.length-1];return typeof d=="object"&&d.constructor===Object?(o.splice(o.length-1,1),d):{}}function z(...o){return"("+(A(o).capture?"":"?:")+o.map(N=>_(N)).join("|")+")"}function q(o){return new RegExp(o.toString()+"|").exec("").length-1}function x(o,d){const h=o&&o.exec(d);return h&&h.index===0}const D=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function M(o,{joinWith:d}){let h=0;return o.map(N=>{h+=1;const H=h;let K=_(N),w="";for(;K.length>0;){const y=D.exec(K);if(!y){w+=K;break}w+=K.substring(0,y.index),K=K.substring(y.index+y[0].length),y[0][0]==="\\"&&y[1]?w+="\\"+String(Number(y[1])+H):(w+=y[0],y[0]==="("&&h++)}return w}).map(N=>`(${N})`).join(d)}const ee=/\b\B/,F="[a-zA-Z]\\w*",$="[a-zA-Z_]\\w*",Y="\\b\\d+(\\.\\d+)?",xe="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ge="\\b(0b[01]+)",qe="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",on=(o={})=>{const d=/^#![ ]*\//;return o.binary&&(o.begin=S(d,/.*\b/,o.binary,/\b.*/)),r({scope:"meta",begin:d,end:/$/,relevance:0,"on:begin":(h,N)=>{h.index!==0&&N.ignoreMatch()}},o)},ne={begin:"\\\\[\\s\\S]",relevance:0},pe={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ne]},Te={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ne]},Ae={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},he=function(o,d,h={}){const N=r({scope:"comment",begin:o,end:d,contains:[]},h);N.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const H=z("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return N.contains.push({begin:S(/[ ]+/,"(",H,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),N},Qn=he("//","$"),sn=he("/\\*","\\*/"),wn=he("#","$"),Xr={scope:"number",begin:Y,relevance:0},Jr={scope:"number",begin:xe,relevance:0},Yr={scope:"number",begin:ge,relevance:0},Qr={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ne,{begin:/\[/,end:/\]/,relevance:0,contains:[ne]}]},eo={scope:"title",begin:F,relevance:0},no={scope:"title",begin:$,relevance:0},to={begin:"\\.\\s*"+$,relevance:0};var En=Object.freeze({__proto__:null,APOS_STRING_MODE:pe,BACKSLASH_ESCAPE:ne,BINARY_NUMBER_MODE:Yr,BINARY_NUMBER_RE:ge,COMMENT:he,C_BLOCK_COMMENT_MODE:sn,C_LINE_COMMENT_MODE:Qn,C_NUMBER_MODE:Jr,C_NUMBER_RE:xe,END_SAME_AS_BEGIN:function(o){return Object.assign(o,{"on:begin":(d,h)=>{h.data._beginMatch=d[1]},"on:end":(d,h)=>{h.data._beginMatch!==d[1]&&h.ignoreMatch()}})},HASH_COMMENT_MODE:wn,IDENT_RE:F,MATCH_NOTHING_RE:ee,METHOD_GUARD:to,NUMBER_MODE:Xr,NUMBER_RE:Y,PHRASAL_WORDS_MODE:Ae,QUOTE_STRING_MODE:Te,REGEXP_MODE:Qr,RE_STARTERS_RE:qe,SHEBANG:on,TITLE_MODE:eo,UNDERSCORE_IDENT_RE:$,UNDERSCORE_TITLE_MODE:no});function ro(o,d){o.input[o.index-1]==="."&&d.ignoreMatch()}function oo(o,d){o.className!==void 0&&(o.scope=o.className,delete o.className)}function so(o,d){d&&o.beginKeywords&&(o.begin="\\b("+o.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",o.__beforeBegin=ro,o.keywords=o.keywords||o.beginKeywords,delete o.beginKeywords,o.relevance===void 0&&(o.relevance=0))}function io(o,d){Array.isArray(o.illegal)&&(o.illegal=z(...o.illegal))}function ao(o,d){if(o.match){if(o.begin||o.end)throw new Error("begin & end are not supported with match");o.begin=o.match,delete o.match}}function lo(o,d){o.relevance===void 0&&(o.relevance=1)}const co=(o,d)=>{if(!o.beforeMatch)return;if(o.starts)throw new Error("beforeMatch cannot be used with starts");const h=Object.assign({},o);Object.keys(o).forEach(N=>{delete o[N]}),o.keywords=h.keywords,o.begin=S(h.beforeMatch,f(h.begin)),o.starts={relevance:0,contains:[Object.assign(h,{endsParent:!0})]},o.relevance=0,delete h.beforeMatch},fo=["of","and","for","in","not","or","if","then","parent","list","value"],uo="keyword";function Pt(o,d,h=uo){const N=Object.create(null);return typeof o=="string"?H(h,o.split(" ")):Array.isArray(o)?H(h,o):Object.keys(o).forEach(function(K){Object.assign(N,Pt(o[K],d,K))}),N;function H(K,w){d&&(w=w.map(y=>y.toLowerCase())),w.forEach(function(y){const T=y.split("|");N[T[0]]=[K,_o(T[0],T[1])]})}}function _o(o,d){return d?Number(d):mo(o)?0:1}function mo(o){return fo.includes(o.toLowerCase())}const zt={},He=o=>{console.error(o)},Vt=(o,...d)=>{console.log(`WARN: ${o}`,...d)},Xe=(o,d)=>{zt[`${o}/${d}`]||(console.log(`Deprecated as of ${o}. ${d}`),zt[`${o}/${d}`]=!0)},Dn=new Error;function Bt(o,d,{key:h}){let N=0;const H=o[h],K={},w={};for(let y=1;y<=d.length;y++)w[y+N]=H[y],K[y+N]=!0,N+=q(d[y-1]);o[h]=w,o[h]._emit=K,o[h]._multi=!0}function vo(o){if(Array.isArray(o.begin)){if(o.skip||o.excludeBegin||o.returnBegin)throw He("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Dn;if(typeof o.beginScope!="object"||o.beginScope===null)throw He("beginScope must be object"),Dn;Bt(o,o.begin,{key:"beginScope"}),o.begin=M(o.begin,{joinWith:""})}}function go(o){if(Array.isArray(o.end)){if(o.skip||o.excludeEnd||o.returnEnd)throw He("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Dn;if(typeof o.endScope!="object"||o.endScope===null)throw He("endScope must be object"),Dn;Bt(o,o.end,{key:"endScope"}),o.end=M(o.end,{joinWith:""})}}function po(o){o.scope&&typeof o.scope=="object"&&o.scope!==null&&(o.beginScope=o.scope,delete o.scope)}function ho(o){po(o),typeof o.beginScope=="string"&&(o.beginScope={_wrap:o.beginScope}),typeof o.endScope=="string"&&(o.endScope={_wrap:o.endScope}),vo(o),go(o)}function bo(o){function d(w,y){return new RegExp(_(w),"m"+(o.case_insensitive?"i":"")+(o.unicodeRegex?"u":"")+(y?"g":""))}class h{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(y,T){T.position=this.position++,this.matchIndexes[this.matchAt]=T,this.regexes.push([T,y]),this.matchAt+=q(y)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const y=this.regexes.map(T=>T[1]);this.matcherRe=d(M(y,{joinWith:"|"}),!0),this.lastIndex=0}exec(y){this.matcherRe.lastIndex=this.lastIndex;const T=this.matcherRe.exec(y);if(!T)return null;const X=T.findIndex((an,nt)=>nt>0&&an!==void 0),Z=this.matchIndexes[X];return T.splice(0,X),Object.assign(T,Z)}}class N{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(y){if(this.multiRegexes[y])return this.multiRegexes[y];const T=new h;return this.rules.slice(y).forEach(([X,Z])=>T.addRule(X,Z)),T.compile(),this.multiRegexes[y]=T,T}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(y,T){this.rules.push([y,T]),T.type==="begin"&&this.count++}exec(y){const T=this.getMatcher(this.regexIndex);T.lastIndex=this.lastIndex;let X=T.exec(y);if(this.resumingScanAtSamePosition()&&!(X&&X.index===this.lastIndex)){const Z=this.getMatcher(0);Z.lastIndex=this.lastIndex+1,X=Z.exec(y)}return X&&(this.regexIndex+=X.position+1,this.regexIndex===this.count&&this.considerAll()),X}}function H(w){const y=new N;return w.contains.forEach(T=>y.addRule(T.begin,{rule:T,type:"begin"})),w.terminatorEnd&&y.addRule(w.terminatorEnd,{type:"end"}),w.illegal&&y.addRule(w.illegal,{type:"illegal"}),y}function K(w,y){const T=w;if(w.isCompiled)return T;[oo,ao,ho,co].forEach(Z=>Z(w,y)),o.compilerExtensions.forEach(Z=>Z(w,y)),w.__beforeBegin=null,[so,io,lo].forEach(Z=>Z(w,y)),w.isCompiled=!0;let X=null;return typeof w.keywords=="object"&&w.keywords.$pattern&&(w.keywords=Object.assign({},w.keywords),X=w.keywords.$pattern,delete w.keywords.$pattern),X=X||/\w+/,w.keywords&&(w.keywords=Pt(w.keywords,o.case_insensitive)),T.keywordPatternRe=d(X,!0),y&&(w.begin||(w.begin=/\B|\b/),T.beginRe=d(T.begin),!w.end&&!w.endsWithParent&&(w.end=/\B|\b/),w.end&&(T.endRe=d(T.end)),T.terminatorEnd=_(T.end)||"",w.endsWithParent&&y.terminatorEnd&&(T.terminatorEnd+=(w.end?"|":"")+y.terminatorEnd)),w.illegal&&(T.illegalRe=d(w.illegal)),w.contains||(w.contains=[]),w.contains=[].concat(...w.contains.map(function(Z){return yo(Z==="self"?w:Z)})),w.contains.forEach(function(Z){K(Z,T)}),w.starts&&K(w.starts,y),T.matcher=H(T),T}if(o.compilerExtensions||(o.compilerExtensions=[]),o.contains&&o.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return o.classNameAliases=r(o.classNameAliases||{}),K(o)}function jt(o){return o?o.endsWithParent||jt(o.starts):!1}function yo(o){return o.variants&&!o.cachedVariants&&(o.cachedVariants=o.variants.map(function(d){return r(o,{variants:null},d)})),o.cachedVariants?o.cachedVariants:jt(o)?r(o,{starts:o.starts?r(o.starts):null}):Object.isFrozen(o)?r(o):o}var wo="11.11.1";class Eo extends Error{constructor(d,h){super(d),this.name="HTMLInjectionError",this.html=h}}const et=t,Ut=r,$t=Symbol("nomatch"),Do=7,qt=function(o){const d=Object.create(null),h=Object.create(null),N=[];let H=!0;const K="Could not find the language '{}', did you forget to load/include a language module?",w={disableAutodetect:!0,name:"Plain text",contains:[]};let y={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:v};function T(m){return y.noHighlightRe.test(m)}function X(m){let R=m.className+" ";R+=m.parentNode?m.parentNode.className:"";const O=y.languageDetectRe.exec(R);if(O){const B=ke(O[1]);return B||(Vt(K.replace("{}",O[1])),Vt("Falling back to no-highlight mode for this block.",m)),B?O[1]:"no-highlight"}return R.split(/\s+/).find(B=>T(B)||ke(B))}function Z(m,R,O){let B="",G="";typeof R=="object"?(B=m,O=R.ignoreIllegals,G=R.language):(Xe("10.7.0","highlight(lang, code, ...args) has been deprecated."),Xe("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),G=m,B=R),O===void 0&&(O=!0);const _e={code:B,language:G};Mn("before:highlight",_e);const Oe=_e.result?_e.result:an(_e.language,_e.code,O);return Oe.code=_e.code,Mn("after:highlight",Oe),Oe}function an(m,R,O,B){const G=Object.create(null);function _e(b,E){return b.keywords[E]}function Oe(){if(!C.keywords){J.addText(j);return}let b=0;C.keywordPatternRe.lastIndex=0;let E=C.keywordPatternRe.exec(j),k="";for(;E;){k+=j.substring(b,E.index);const L=ye.case_insensitive?E[0].toLowerCase():E[0],Q=_e(C,L);if(Q){const[Se,Bo]=Q;if(J.addText(k),k="",G[L]=(G[L]||0)+1,G[L]<=Do&&(Sn+=Bo),Se.startsWith("_"))k+=E[0];else{const jo=ye.classNameAliases[Se]||Se;be(E[0],jo)}}else k+=E[0];b=C.keywordPatternRe.lastIndex,E=C.keywordPatternRe.exec(j)}k+=j.substring(b),J.addText(k)}function xn(){if(j==="")return;let b=null;if(typeof C.subLanguage=="string"){if(!d[C.subLanguage]){J.addText(j);return}b=an(C.subLanguage,j,!0,Yt[C.subLanguage]),Yt[C.subLanguage]=b._top}else b=tt(j,C.subLanguage.length?C.subLanguage:null);C.relevance>0&&(Sn+=b.relevance),J.__addSublanguage(b._emitter,b.language)}function ae(){C.subLanguage!=null?xn():Oe(),j=""}function be(b,E){b!==""&&(J.startScope(E),J.addText(b),J.endScope())}function Gt(b,E){let k=1;const L=E.length-1;for(;k<=L;){if(!b._emit[k]){k++;continue}const Q=ye.classNameAliases[b[k]]||b[k],Se=E[k];Q?be(Se,Q):(j=Se,Oe(),j=""),k++}}function Wt(b,E){return b.scope&&typeof b.scope=="string"&&J.openNode(ye.classNameAliases[b.scope]||b.scope),b.beginScope&&(b.beginScope._wrap?(be(j,ye.classNameAliases[b.beginScope._wrap]||b.beginScope._wrap),j=""):b.beginScope._multi&&(Gt(b.beginScope,E),j="")),C=Object.create(b,{parent:{value:C}}),C}function Xt(b,E,k){let L=x(b.endRe,k);if(L){if(b["on:end"]){const Q=new n(b);b["on:end"](E,Q),Q.isMatchIgnored&&(L=!1)}if(L){for(;b.endsParent&&b.parent;)b=b.parent;return b}}if(b.endsWithParent)return Xt(b.parent,E,k)}function Io(b){return C.matcher.regexIndex===0?(j+=b[0],1):(it=!0,0)}function Lo(b){const E=b[0],k=b.rule,L=new n(k),Q=[k.__beforeBegin,k["on:begin"]];for(const Se of Q)if(Se&&(Se(b,L),L.isMatchIgnored))return Io(E);return k.skip?j+=E:(k.excludeBegin&&(j+=E),ae(),!k.returnBegin&&!k.excludeBegin&&(j=E)),Wt(k,b),k.returnBegin?0:E.length}function Po(b){const E=b[0],k=R.substring(b.index),L=Xt(C,b,k);if(!L)return $t;const Q=C;C.endScope&&C.endScope._wrap?(ae(),be(E,C.endScope._wrap)):C.endScope&&C.endScope._multi?(ae(),Gt(C.endScope,b)):Q.skip?j+=E:(Q.returnEnd||Q.excludeEnd||(j+=E),ae(),Q.excludeEnd&&(j=E));do C.scope&&J.closeNode(),!C.skip&&!C.subLanguage&&(Sn+=C.relevance),C=C.parent;while(C!==L.parent);return L.starts&&Wt(L.starts,b),Q.returnEnd?0:E.length}function zo(){const b=[];for(let E=C;E!==ye;E=E.parent)E.scope&&b.unshift(E.scope);b.forEach(E=>J.openNode(E))}let Tn={};function Jt(b,E){const k=E&&E[0];if(j+=b,k==null)return ae(),0;if(Tn.type==="begin"&&E.type==="end"&&Tn.index===E.index&&k===""){if(j+=R.slice(E.index,E.index+1),!H){const L=new Error(`0 width match regex (${m})`);throw L.languageName=m,L.badRule=Tn.rule,L}return 1}if(Tn=E,E.type==="begin")return Lo(E);if(E.type==="illegal"&&!O){const L=new Error('Illegal lexeme "'+k+'" for mode "'+(C.scope||"<unnamed>")+'"');throw L.mode=C,L}else if(E.type==="end"){const L=Po(E);if(L!==$t)return L}if(E.type==="illegal"&&k==="")return j+=`
`,1;if(st>1e5&&st>E.index*3)throw new Error("potential infinite loop, way more iterations than matches");return j+=k,k.length}const ye=ke(m);if(!ye)throw He(K.replace("{}",m)),new Error('Unknown language: "'+m+'"');const Vo=bo(ye);let ot="",C=B||Vo;const Yt={},J=new y.__emitter(y);zo();let j="",Sn=0,Ke=0,st=0,it=!1;try{if(ye.__emitTokens)ye.__emitTokens(R,J);else{for(C.matcher.considerAll();;){st++,it?it=!1:C.matcher.considerAll(),C.matcher.lastIndex=Ke;const b=C.matcher.exec(R);if(!b)break;const E=R.substring(Ke,b.index),k=Jt(E,b);Ke=b.index+k}Jt(R.substring(Ke))}return J.finalize(),ot=J.toHTML(),{language:m,value:ot,relevance:Sn,illegal:!1,_emitter:J,_top:C}}catch(b){if(b.message&&b.message.includes("Illegal"))return{language:m,value:et(R),illegal:!0,relevance:0,_illegalBy:{message:b.message,index:Ke,context:R.slice(Ke-100,Ke+100),mode:b.mode,resultSoFar:ot},_emitter:J};if(H)return{language:m,value:et(R),illegal:!1,relevance:0,errorRaised:b,_emitter:J,_top:C};throw b}}function nt(m){const R={value:et(m),illegal:!1,relevance:0,_top:w,_emitter:new y.__emitter(y)};return R._emitter.addText(m),R}function tt(m,R){R=R||y.languages||Object.keys(d);const O=nt(m),B=R.filter(ke).filter(Zt).map(ae=>an(ae,m,!1));B.unshift(O);const G=B.sort((ae,be)=>{if(ae.relevance!==be.relevance)return be.relevance-ae.relevance;if(ae.language&&be.language){if(ke(ae.language).supersetOf===be.language)return 1;if(ke(be.language).supersetOf===ae.language)return-1}return 0}),[_e,Oe]=G,xn=_e;return xn.secondBest=Oe,xn}function Ro(m,R,O){const B=R&&h[R]||O;m.classList.add("hljs"),m.classList.add(`language-${B}`)}function rt(m){let R=null;const O=X(m);if(T(O))return;if(Mn("before:highlightElement",{el:m,language:O}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(y.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),y.throwUnescapedHTML))throw new Eo("One of your code blocks includes unescaped HTML.",m.innerHTML);R=m;const B=R.textContent,G=O?Z(B,{language:O,ignoreIllegals:!0}):tt(B);m.innerHTML=G.value,m.dataset.highlighted="yes",Ro(m,O,G.language),m.result={language:G.language,re:G.relevance,relevance:G.relevance},G.secondBest&&(m.secondBest={language:G.secondBest.language,relevance:G.secondBest.relevance}),Mn("after:highlightElement",{el:m,result:G,text:B})}function Mo(m){y=Ut(y,m)}const xo=()=>{Rn(),Xe("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function To(){Rn(),Xe("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Ht=!1;function Rn(){function m(){Rn()}if(document.readyState==="loading"){Ht||window.addEventListener("DOMContentLoaded",m,!1),Ht=!0;return}document.querySelectorAll(y.cssSelector).forEach(rt)}function So(m,R){let O=null;try{O=R(o)}catch(B){if(He("Language definition for '{}' could not be registered.".replace("{}",m)),H)He(B);else throw B;O=w}O.name||(O.name=m),d[m]=O,O.rawDefinition=R.bind(null,o),O.aliases&&Kt(O.aliases,{languageName:m})}function Fo(m){delete d[m];for(const R of Object.keys(h))h[R]===m&&delete h[R]}function No(){return Object.keys(d)}function ke(m){return m=(m||"").toLowerCase(),d[m]||d[h[m]]}function Kt(m,{languageName:R}){typeof m=="string"&&(m=[m]),m.forEach(O=>{h[O.toLowerCase()]=R})}function Zt(m){const R=ke(m);return R&&!R.disableAutodetect}function Co(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=R=>{m["before:highlightBlock"](Object.assign({block:R.el},R))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=R=>{m["after:highlightBlock"](Object.assign({block:R.el},R))})}function Ao(m){Co(m),N.push(m)}function ko(m){const R=N.indexOf(m);R!==-1&&N.splice(R,1)}function Mn(m,R){const O=m;N.forEach(function(B){B[O]&&B[O](R)})}function Oo(m){return Xe("10.7.0","highlightBlock will be removed entirely in v12.0"),Xe("10.7.0","Please use highlightElement now."),rt(m)}Object.assign(o,{highlight:Z,highlightAuto:tt,highlightAll:Rn,highlightElement:rt,highlightBlock:Oo,configure:Mo,initHighlighting:xo,initHighlightingOnLoad:To,registerLanguage:So,unregisterLanguage:Fo,listLanguages:No,getLanguage:ke,registerAliases:Kt,autoDetection:Zt,inherit:Ut,addPlugin:Ao,removePlugin:ko}),o.debugMode=function(){H=!1},o.safeMode=function(){H=!0},o.versionString=wo,o.regex={concat:S,lookahead:f,either:z,optional:p,anyNumberOfTimes:g};for(const m in En)typeof En[m]=="object"&&e(En[m]);return Object.assign(o,En),o},Je=qt({});return Je.newInstance=()=>qt({}),ft=Je,Je.HighlightJS=Je,Je.default=Je,ft}var U_=j_();const mr=B_(U_);var $_=ve("<pre><code><!></code></pre>");function q_(e,n){const t=jn(n,["children","$$slots","$$events","$$legacy"]),r=jn(t,["code","highlighted","languageName","langtag"]);let i=Be(n,"code",8),s=Be(n,"highlighted",8),l=Be(n,"languageName",8,"plaintext"),u=Be(n,"langtag",8,!1);var a=$_();let c;var v=W(a);It(v,1,"",null,{},{hljs:!0});var _=W(v);{var f=p=>{var S=Ot(),A=Gn(S);si(A,s),re(p,S)},g=p=>{var S=Js();Ee(()=>Ve(S,i())),re(p,S)};ht(_,p=>{s()?p(f):p(g,!1)})}Ee(p=>c=_i(a,c,{"data-language":l(),...r,[un]:p},"svelte-1w9vok"),[()=>({langtag:u()})],St),re(e,a)}function H_(e,n){const t=jn(n,["children","$$slots","$$events","$$legacy"]),r=jn(t,["language","code","langtag"]);hn(n,!1);let i=Be(n,"language",8),s=Be(n,"code",8),l=Be(n,"langtag",8,!1);const u=bi();let a=Ft("");yi(()=>{I(a)&&u("highlight",{highlighted:I(a)})}),Ts(()=>(vt(i()),vt(s())),()=>{mr.registerLanguage(i().name,i().register),ue(a,mr.highlight(s(),{language:i().name}).value)}),Ss(),Lt();var c=Ot(),v=Gn(c);ii(v,n,"default",{get highlighted(){return I(a)}},_=>{q_(_,pi(()=>r,{get languageName(){return i().name},get langtag(){return l()},get highlighted(){return I(a)},get code(){return s()}}))}),re(e,c),bn()}function K_(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",s={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},l={keywords:s,illegal:/<\//},u={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},a={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},c={className:"subst",begin:/\$\(/,end:/\)/,keywords:s},v={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,c,v],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},f={className:"string",contains:[e.BACKSLASH_ESCAPE,c,v],begin:"`",end:"`"},g={className:"meta",begin:"@"+n},p={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return l.name="Julia",l.contains=[u,a,_,f,g,p,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],c.contains=l.contains,l}const Z_={name:"julia",register:K_};var G_=ve('<th class="svelte-m8v9hl"> </th>'),W_=ve('<td class="svelte-m8v9hl"> </td>'),X_=ve('<a class="issue svelte-m8v9hl" target="_blank">(?)</a>'),J_=ve('<td class="svelte-m8v9hl"><!> <span> </span></td>'),Y_=ve('<tr class="svelte-m8v9hl"><td class="svelte-m8v9hl"> <div class="model-definition svelte-m8v9hl"><!></div></td><!></tr>'),Q_=ve('<table id="results" class="svelte-m8v9hl"><thead><tr class="svelte-m8v9hl"><th class="svelte-m8v9hl">Model name \\\\ AD type</th><!></tr></thead><tbody></tbody></table>');function em(e,n){hn(n,!0);const t=[...n.data.keys()],r=n.data.get(t[0]).keys(),i="https://github.com/EnzymeAD/Enzyme.jl/issues/1995",l={assume_mvnormal__EnzymeForward:i,assume_wishart__EnzymeForward:i,multithreaded__Mooncake:"https://github.com/chalk-lab/Mooncake.jl/issues/570"};var u=Q_(),a=W(u),c=W(a),v=we(W(c));_n(v,17,()=>r,dn,(f,g)=>{var p=G_(),S=W(p);Ee(()=>Ve(S,I(g))),re(f,p)});var _=we(a);_n(_,21,()=>yt(n.data),dn,(f,g)=>{let p=()=>I(g)[0],S=()=>I(g)[1];var A=Y_(),z=W(A),q=W(z),x=we(q),D=W(x);H_(D,{language:Z_,get code(){return n.modelDefinitions[p()]}});var M=we(z);_n(M,17,()=>yt(S()),dn,(ee,F)=>{let $=()=>I(F)[0],Y=()=>I(F)[1];var xe=Ot(),ge=Gn(xe);{var qe=ne=>{var pe=W_(),Te=W(pe);Ee(Ae=>Ve(Te,Ae),[()=>Y().toFixed(3)]),re(ne,pe)},on=ne=>{var pe=J_(),Te=W(pe);{var Ae=sn=>{var wn=X_();Ee(()=>bt(wn,"href",l[`${p()}__${$()}`])),re(sn,wn)};ht(Te,sn=>{l[`${p()}__${$()}`]&&sn(Ae)})}var he=we(Te,2),Qn=W(he);Ee(()=>{It(he,1,Hr(Y()),"svelte-m8v9hl"),Ve(Qn,Y())}),re(ne,pe)};ht(ge,ne=>{typeof Y()=="number"?ne(qe):ne(on,!1)})}re(ee,xe)}),Ee(()=>Ve(q,`${p()??""} `)),re(f,A)}),re(e,u),bn()}var nm=ve("<h3> </h3> <!>",1),tm=ve(`<div id="main-wrapper" class="svelte-3oks6t"><main class="svelte-3oks6t"><h1>Turing AD tests</h1> <p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p> <p>This page is intended as a brief overview of how different AD
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
                describes the problem.</li></ul> <div class="warning svelte-3oks6t"><b>Note: The results here are run with Julia 1.11. Enzyme currently does not work on Julia 1.12.</b></div> <h2>Results</h2> <p><a href="adtests.json" target="_blank" download="">Download the raw data (JSON)</a></p> <!> <h2>Manifest</h2> <p>The tests above were run with the following package versions:</p> <!></main></div>`);function rm(e,n){hn(n,!1);let t=new Map;for(const[u,a]of Object.entries(ba)){let c=a.__category__;delete a.__category__;let v=new Map;for(const[_,f]of Object.entries(a))v.set(_,f);t.has(c)||t.set(c,new Map),t.get(c).set(u,v)}console.log(t),Lt();var r=tm(),i=W(r),s=we(W(i),16);_n(s,1,()=>t.entries(),dn,(u,a)=>{let c=()=>I(a)[0],v=()=>I(a)[1];var _=nm(),f=Gn(_),g=W(f),p=we(f,2);em(p,{get data(){return v()},modelDefinitions:gl}),Ee(()=>Ve(g,c())),re(u,_)});var l=we(s,6);V_(l,{}),re(e,r),bn()}Ys(rm,{target:document.getElementById("app")});
