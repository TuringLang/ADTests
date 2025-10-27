(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Qt=!1;var Un=Array.isArray,Uo=Array.prototype.indexOf,wt=Array.from,$o=Object.defineProperty,je=Object.getOwnPropertyDescriptor,pr=Object.getOwnPropertyDescriptors,qo=Object.prototype,Ho=Array.prototype,Et=Object.getPrototypeOf,er=Object.isExtensible;function ln(e){return typeof e=="function"}function Ko(e){return e()}function ut(e){for(var n=0;n<e.length;n++)e[n]()}const me=2,gr=4,$n=8,Dt=16,Ce=32,nn=64,An=128,ce=256,kn=512,se=1024,Re=2048,$e=4096,Fe=8192,qn=16384,Zo=32768,Rt=65536,Go=1<<17,Wo=1<<19,hr=1<<20,dt=1<<21,Ge=Symbol("$state"),br=Symbol("legacy props"),Xo=Symbol("");function yr(e){return e===this.v}function Jo(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Mt(e){return!Jo(e,this.v)}function Yo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function es(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ns(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ts(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function rs(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function os(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ss(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function is(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let gn=!1,as=!1;function ls(){gn=!0}const xt=1,Tt=2,wr=4,cs=8,fs=16,us=1,ds=2,Er=4,_s=8,ms=16,vs=1,ps=2,ie=Symbol(),gs="http://www.w3.org/1999/xhtml",hs="@attach";function Dr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let U=null;function nr(e){U=e}function hn(e,n=!1,t){var r=U={p:U,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};gn&&!n&&(U.l={s:null,u:null,r1:[],r2:Qe(!1)}),Rs(()=>{r.d=!0})}function bn(e){const n=U;if(n!==null){const l=n.e;if(l!==null){var t=P,r=V;n.e=null;try{for(var i=0;i<l.length;i++){var s=l[i];Ue(s.effect),Me(s.reaction),Nt(s.fn)}}finally{Ue(t),Me(r)}}U=n.p,n.m=!0}return{}}function Hn(){return!gn||U!==null&&U.l===null}function Ze(e){if(typeof e!="object"||e===null||Ge in e)return e;const n=Et(e);if(n!==qo&&n!==Ho)return e;var t=new Map,r=Un(e),i=Ie(0),s=V,l=u=>{var a=V;Me(s);var c=u();return Me(a),c};return r&&t.set("length",Ie(e.length)),new Proxy(e,{defineProperty(u,a,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&os();var v=t.get(a);return v===void 0?(v=l(()=>Ie(c.value)),t.set(a,v)):ue(v,l(()=>Ze(c.value))),!0},deleteProperty(u,a){var c=t.get(a);if(c===void 0)a in u&&(t.set(a,l(()=>Ie(ie))),at(i));else{if(r&&typeof a=="string"){var v=t.get("length"),_=Number(a);Number.isInteger(_)&&_<v.v&&ue(v,_)}ue(c,ie),at(i)}return!0},get(u,a,c){var p;if(a===Ge)return e;var v=t.get(a),_=a in u;if(v===void 0&&(!_||(p=je(u,a))!=null&&p.writable)&&(v=l(()=>Ie(Ze(_?u[a]:ie))),t.set(a,v)),v!==void 0){var f=I(v);return f===ie?void 0:f}return Reflect.get(u,a,c)},getOwnPropertyDescriptor(u,a){var c=Reflect.getOwnPropertyDescriptor(u,a);if(c&&"value"in c){var v=t.get(a);v&&(c.value=I(v))}else if(c===void 0){var _=t.get(a),f=_==null?void 0:_.v;if(_!==void 0&&f!==ie)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return c},has(u,a){var f;if(a===Ge)return!0;var c=t.get(a),v=c!==void 0&&c.v!==ie||Reflect.has(u,a);if(c!==void 0||P!==null&&(!v||(f=je(u,a))!=null&&f.writable)){c===void 0&&(c=l(()=>Ie(v?Ze(u[a]):ie)),t.set(a,c));var _=I(c);if(_===ie)return!1}return v},set(u,a,c,v){var q;var _=t.get(a),f=a in u;if(r&&a==="length")for(var p=c;p<_.v;p+=1){var g=t.get(p+"");g!==void 0?ue(g,ie):p in u&&(g=l(()=>Ie(ie)),t.set(p+"",g))}_===void 0?(!f||(q=je(u,a))!=null&&q.writable)&&(_=l(()=>Ie(void 0)),ue(_,l(()=>Ze(c))),t.set(a,_)):(f=_.v!==ie,ue(_,l(()=>Ze(c))));var S=Reflect.getOwnPropertyDescriptor(u,a);if(S!=null&&S.set&&S.set.call(v,c),!f){if(r&&typeof a=="string"){var A=t.get("length"),z=Number(a);Number.isInteger(z)&&z>=A.v&&ue(A,z+1)}at(i)}return!0},ownKeys(u){I(i);var a=Reflect.ownKeys(u).filter(_=>{var f=t.get(_);return f===void 0||f.v!==ie});for(var[c,v]of t)v.v!==ie&&!(c in u)&&a.push(c);return a},setPrototypeOf(){ss()}})}function at(e,n=1){ue(e,e.v+n)}function mn(e){var n=me|Re,t=V!==null&&(V.f&me)!==0?V:null;return P===null||t!==null&&(t.f&ce)!==0?n|=ce:P.f|=hr,{ctx:U,deps:null,effects:null,equals:yr,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??P}}function St(e){const n=mn(e);return n.equals=Mt,n}function Rr(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)Ne(n[t])}}function bs(e){for(var n=e.parent;n!==null;){if((n.f&me)===0)return n;n=n.parent}return null}function Mr(e){var n,t=P;Ue(bs(e));try{Rr(e),n=jr(e)}finally{Ue(t)}return n}function xr(e){var n=Mr(e),t=(ze||(e.f&ce)!==0)&&e.deps!==null?$e:se;de(e,t),e.equals(n)||(e.v=n,e.wv=Vr())}const vn=new Map;function Qe(e,n){var t={f:0,v:e,reactions:null,equals:yr,rv:0,wv:0};return t}function Ie(e,n){const t=Qe(e);return Cs(t),t}function Ft(e,n=!1){var r;const t=Qe(e);return n||(t.equals=Mt),gn&&U!==null&&U.l!==null&&((r=U.l).s??(r.s=[])).push(t),t}function ue(e,n,t=!1){V!==null&&!De&&Hn()&&(V.f&(me|Dt))!==0&&!(oe!=null&&oe.includes(e))&&is();let r=t?Ze(n):n;return _t(e,r)}function _t(e,n){if(!e.equals(n)){var t=e.v;yn?vn.set(e,n):vn.set(e,t),e.v=n,(e.f&me)!==0&&((e.f&Re)!==0&&Mr(e),de(e,(e.f&ce)===0?se:$e)),e.wv=Vr(),Tr(e,Re),Hn()&&P!==null&&(P.f&se)!==0&&(P.f&(Ce|nn))===0&&(fe===null?As([e]):fe.push(e))}return n}function tr(e,n=1){var t=I(e),r=n===1?t++:t--;return ue(e,t),r}function Tr(e,n){var t=e.reactions;if(t!==null)for(var r=Hn(),i=t.length,s=0;s<i;s++){var l=t[s],u=l.f;(u&Re)===0&&(!r&&l===P||(de(l,n),(u&(se|ce))!==0&&((u&me)!==0?Tr(l,$e):Yn(l))))}}let ys=!1;var rr,Sr,Fr,Nr;function ws(){if(rr===void 0){rr=window,Sr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Fr=je(n,"firstChild").get,Nr=je(n,"nextSibling").get,er(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),er(t)&&(t.__t=void 0)}}function Kn(e=""){return document.createTextNode(e)}function Pe(e){return Fr.call(e)}function Zn(e){return Nr.call(e)}function W(e,n){return Pe(e)}function Gn(e,n){{var t=Pe(e);return t instanceof Comment&&t.data===""?Zn(t):t}}function we(e,n=1,t=!1){let r=e;for(;n--;)r=Zn(r);return r}function Es(e){e.textContent=""}function Cr(e){P===null&&V===null&&es(),V!==null&&(V.f&ce)!==0&&P===null&&Qo(),yn&&Yo()}function Ds(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function tn(e,n,t,r=!0){var i=P,s={ctx:U,deps:null,nodes_start:null,nodes_end:null,f:e|Re,first:null,fn:n,last:null,next:null,parent:i,prev:null,teardown:null,transitions:null,wv:0};if(t)try{Jn(s),s.f|=Zo}catch(a){throw Ne(s),a}else n!==null&&Yn(s);var l=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(hr|An))===0;if(!l&&r&&(i!==null&&Ds(s,i),V!==null&&(V.f&me)!==0)){var u=V;(u.effects??(u.effects=[])).push(s)}return s}function Rs(e){const n=tn($n,null,!1);return de(n,se),n.teardown=e,n}function or(e){Cr();var n=P!==null&&(P.f&Ce)!==0&&U!==null&&!U.m;if(n){var t=U;(t.e??(t.e=[])).push({fn:e,effect:P,reaction:V})}else{var r=Nt(e);return r}}function Ms(e){return Cr(),Ct(e)}function xs(e){const n=tn(nn,e,!0);return(t={})=>new Promise(r=>{t.outro?On(n,()=>{Ne(n),r(void 0)}):(Ne(n),r(void 0))})}function Nt(e){return tn(gr,e,!1)}function Ts(e,n){var t=U,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=Ct(()=>{e(),!r.ran&&(r.ran=!0,ue(t.l.r2,!0),Bn(n))})}function Ss(){var e=U;Ct(()=>{if(I(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&se)!==0&&de(t,$e),rn(t)&&Jn(t),n.ran=!1}e.l.r2.v=!1}})}function Ct(e){return tn($n,e,!0)}function Ee(e,n=[],t=mn){const r=n.map(t);return Wn(()=>e(...r.map(I)))}function Wn(e,n=0){return tn($n|Dt|n,e,!0)}function en(e,n=!0){return tn($n|Ce,e,!0,n)}function Ar(e){var n=e.teardown;if(n!==null){const t=yn,r=V;sr(!0),Me(null);try{n.call(null)}finally{sr(t),Me(r)}}}function kr(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&nn)!==0?t.parent=null:Ne(t,n),t=r}}function Fs(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&Ce)===0&&Ne(n),n=t}}function Ne(e,n=!0){var t=!1;(n||(e.f&Wo)!==0)&&e.nodes_start!==null&&(Or(e.nodes_start,e.nodes_end),t=!0),kr(e,n&&!t),Vn(e,0),de(e,qn);var r=e.transitions;if(r!==null)for(const s of r)s.stop();Ar(e);var i=e.parent;i!==null&&i.first!==null&&Ir(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Or(e,n){for(;e!==null;){var t=e===n?null:Zn(e);e.remove(),e=t}}function Ir(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function On(e,n){var t=[];At(e,t,!0),Lr(t,()=>{Ne(e),n&&n()})}function Lr(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var i of e)i.out(r)}else n()}function At(e,n,t){if((e.f&Fe)===0){if(e.f^=Fe,e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&n.push(l);for(var r=e.first;r!==null;){var i=r.next,s=(r.f&Rt)!==0||(r.f&Ce)!==0;At(r,n,s?t:!1),r=i}}}function In(e){Pr(e,!0)}function Pr(e,n){if((e.f&Fe)!==0){e.f^=Fe,(e.f&se)===0&&(e.f^=se),rn(e)&&(de(e,Re),Yn(e));for(var t=e.first;t!==null;){var r=t.next,i=(t.f&Rt)!==0||(t.f&Ce)!==0;Pr(t,i?n:!1),t=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&s.in()}}let Ln=[];function Ns(){var e=Ln;Ln=[],ut(e)}function kt(e){Ln.length===0&&queueMicrotask(Ns),Ln.push(e)}let Nn=!1,mt=!1,Pn=null,We=!1,yn=!1;function sr(e){yn=e}let Cn=[];let V=null,De=!1;function Me(e){V=e}let P=null;function Ue(e){P=e}let oe=null;function Cs(e){V!==null&&V.f&dt&&(oe===null?oe=[e]:oe.push(e))}let te=null,le=0,fe=null;function As(e){fe=e}let zr=1,zn=0,ze=!1;function Vr(){return++zr}function rn(e){var _;var n=e.f;if((n&Re)!==0)return!0;if((n&$e)!==0){var t=e.deps,r=(n&ce)!==0;if(t!==null){var i,s,l=(n&kn)!==0,u=r&&P!==null&&!ze,a=t.length;if(l||u){var c=e,v=c.parent;for(i=0;i<a;i++)s=t[i],(l||!((_=s==null?void 0:s.reactions)!=null&&_.includes(c)))&&(s.reactions??(s.reactions=[])).push(c);l&&(c.f^=kn),u&&v!==null&&(v.f&ce)===0&&(c.f^=ce)}for(i=0;i<a;i++)if(s=t[i],rn(s)&&xr(s),s.wv>e.wv)return!0}(!r||P!==null&&!ze)&&de(e,se)}return!1}function ks(e,n){for(var t=n;t!==null;){if((t.f&An)!==0)try{t.fn(e);return}catch{t.f^=An}t=t.parent}throw Nn=!1,e}function ir(e){return(e.f&qn)===0&&(e.parent===null||(e.parent.f&An)===0)}function Xn(e,n,t,r){if(Nn){if(t===null&&(Nn=!1),ir(n))throw e;return}if(t!==null&&(Nn=!0),ks(e,n),ir(n))throw e}function Br(e,n,t=!0){var r=e.reactions;if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];oe!=null&&oe.includes(e)||((s.f&me)!==0?Br(s,n,!1):n===s&&(t?de(s,Re):(s.f&se)!==0&&de(s,$e),Yn(s)))}}function jr(e){var p;var n=te,t=le,r=fe,i=V,s=ze,l=oe,u=U,a=De,c=e.f;te=null,le=0,fe=null,ze=(c&ce)!==0&&(De||!We||V===null),V=(c&(Ce|nn))===0?e:null,oe=null,nr(e.ctx),De=!1,zn++,e.f|=dt;try{var v=(0,e.fn)(),_=e.deps;if(te!==null){var f;if(Vn(e,le),_!==null&&le>0)for(_.length=le+te.length,f=0;f<te.length;f++)_[le+f]=te[f];else e.deps=_=te;if(!ze)for(f=le;f<_.length;f++)((p=_[f]).reactions??(p.reactions=[])).push(e)}else _!==null&&le<_.length&&(Vn(e,le),_.length=le);if(Hn()&&fe!==null&&!De&&_!==null&&(e.f&(me|$e|Re))===0)for(f=0;f<fe.length;f++)Br(fe[f],e);return i!==null&&i!==e&&(zn++,fe!==null&&(r===null?r=fe:r.push(...fe))),v}finally{te=n,le=t,fe=r,V=i,ze=s,oe=l,nr(u),De=a,e.f^=dt}}function Os(e,n){let t=n.reactions;if(t!==null){var r=Uo.call(t,e);if(r!==-1){var i=t.length-1;i===0?t=n.reactions=null:(t[r]=t[i],t.pop())}}t===null&&(n.f&me)!==0&&(te===null||!te.includes(n))&&(de(n,$e),(n.f&(ce|kn))===0&&(n.f^=kn),Rr(n),Vn(n,0))}function Vn(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Os(e,t[r])}function Jn(e){var n=e.f;if((n&qn)===0){de(e,se);var t=P,r=U,i=We;P=e,We=!0;try{(n&Dt)!==0?Fs(e):kr(e),Ar(e);var s=jr(e);e.teardown=typeof s=="function"?s:null,e.wv=zr;var l=e.deps,u;Qt&&as&&e.f&Re}catch(a){Xn(a,e,t,r||e.ctx)}finally{We=i,P=t}}}function Is(){try{ns()}catch(e){if(Pn!==null)Xn(e,Pn,null);else throw e}}function Ls(){var e=We;try{var n=0;for(We=!0;Cn.length>0;){n++>1e3&&Is();var t=Cn,r=t.length;Cn=[];for(var i=0;i<r;i++){var s=zs(t[i]);Ps(s)}vn.clear()}}finally{mt=!1,We=e,Pn=null}}function Ps(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(qn|Fe))===0)try{rn(r)&&(Jn(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Ir(r):r.fn=null))}catch(i){Xn(i,r,null,r.ctx)}}}function Yn(e){mt||(mt=!0,queueMicrotask(Ls));for(var n=Pn=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(nn|Ce))!==0){if((t&se)===0)return;n.f^=se}}Cn.push(n)}function zs(e){for(var n=[],t=e;t!==null;){var r=t.f,i=(r&(Ce|nn))!==0,s=i&&(r&se)!==0;if(!s&&(r&Fe)===0){if((r&gr)!==0)n.push(t);else if(i)t.f^=se;else try{rn(t)&&Jn(t)}catch(a){Xn(a,t,null,t.ctx)}var l=t.first;if(l!==null){t=l;continue}}var u=t.parent;for(t=t.next;t===null&&u!==null;)t=u.next,u=u.parent}return n}function I(e){var n=e.f,t=(n&me)!==0;if(V!==null&&!De){if(!(oe!=null&&oe.includes(e))){var r=V.deps;e.rv<zn&&(e.rv=zn,te===null&&r!==null&&r[le]===e?le++:te===null?te=[e]:(!ze||!te.includes(e))&&te.push(e))}}else if(t&&e.deps===null&&e.effects===null){var i=e,s=i.parent;s!==null&&(s.f&ce)===0&&(i.f^=ce)}return t&&(i=e,rn(i)&&xr(i)),yn&&vn.has(e)?vn.get(e):e.v}function Bn(e){var n=De;try{return De=!0,e()}finally{De=n}}const Vs=-7169;function de(e,n){e.f=e.f&Vs|n}function vt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ge in e)pt(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&Ge in t&&pt(t)}}}function pt(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{pt(e[r],n)}catch{}const t=Et(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=pr(t);for(let i in r){const s=r[i].get;if(s)try{s.call(e)}catch{}}}}}function Bs(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const js=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Us(e){return js.includes(e)}const $s={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function qs(e){return e=e.toLowerCase(),$s[e]??e}const Hs=["touchstart","touchmove"];function Ks(e){return Hs.includes(e)}function Zs(e,n){if(n){const t=document.body;e.autofocus=!0,kt(()=>{document.activeElement===t&&e.focus()})}}function Gs(e){var n=V,t=P;Me(null),Ue(null);try{return e()}finally{Me(n),Ue(t)}}const Ur=new Set,gt=new Set;function Ws(e,n,t,r={}){function i(s){if(r.capture||fn.call(n,s),!s.cancelBubble)return Gs(()=>t==null?void 0:t.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?kt(()=>{n.addEventListener(e,i,r)}):n.addEventListener(e,i,r),i}function Xs(e){for(var n=0;n<e.length;n++)Ur.add(e[n]);for(var t of gt)t(e)}function fn(e){var q;var n=this,t=n.ownerDocument,r=e.type,i=((q=e.composedPath)==null?void 0:q.call(e))||[],s=i[0]||e.target,l=0,u=e.__root;if(u){var a=i.indexOf(u);if(a!==-1&&(n===document||n===window)){e.__root=n;return}var c=i.indexOf(n);if(c===-1)return;a<=c&&(l=a)}if(s=i[l]||e.target,s!==n){$o(e,"currentTarget",{configurable:!0,get(){return s||t}});var v=V,_=P;Me(null),Ue(null);try{for(var f,p=[];s!==null;){var g=s.assignedSlot||s.parentNode||s.host||null;try{var S=s["__"+r];if(S!=null&&(!s.disabled||e.target===s))if(Un(S)){var[A,...z]=S;A.apply(s,[e,...z])}else S.call(s,e)}catch(x){f?p.push(x):f=x}if(e.cancelBubble||g===n||g===null)break;s=g}if(f){for(let x of p)queueMicrotask(()=>{throw x});throw f}}finally{e.__root=n,delete e.currentTarget,Me(v),Ue(_)}}}function $r(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function pn(e,n){var t=P;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function ve(e,n){var t=(n&vs)!==0,r=(n&ps)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=$r(s?e:"<!>"+e),t||(i=Pe(i)));var l=r||Sr?document.importNode(i,!0):i.cloneNode(!0);if(t){var u=Pe(l),a=l.lastChild;pn(u,a)}else pn(l,l);return l}}function Js(e=""){{var n=Kn(e+"");return pn(n,n),n}}function Ot(){var e=document.createDocumentFragment(),n=document.createComment(""),t=Kn();return e.append(n,t),pn(n,t),e}function re(e,n){e!==null&&e.before(n)}function Ve(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function Ys(e,n){return Qs(e,n)}const Ye=new Map;function Qs(e,{target:n,anchor:t,props:r={},events:i,context:s,intro:l=!0}){ws();var u=new Set,a=_=>{for(var f=0;f<_.length;f++){var p=_[f];if(!u.has(p)){u.add(p);var g=Ks(p);n.addEventListener(p,fn,{passive:g});var S=Ye.get(p);S===void 0?(document.addEventListener(p,fn,{passive:g}),Ye.set(p,1)):Ye.set(p,S+1)}}};a(wt(Ur)),gt.add(a);var c=void 0,v=xs(()=>{var _=t??n.appendChild(Kn());return en(()=>{if(s){hn({});var f=U;f.c=s}i&&(r.$$events=i),c=e(_,r)||{},s&&bn()}),()=>{var g;for(var f of u){n.removeEventListener(f,fn);var p=Ye.get(f);--p===0?(document.removeEventListener(f,fn),Ye.delete(f)):Ye.set(f,p)}gt.delete(a),_!==t&&((g=_.parentNode)==null||g.removeChild(_))}});return ei.set(c,v),c}let ei=new WeakMap;function ht(e,n,[t,r]=[0,0]){var i=e,s=null,l=null,u=ie,a=t>0?Rt:0,c=!1;const v=(f,p=!0)=>{c=!0,_(p,f)},_=(f,p)=>{u!==(u=f)&&(u?(s?In(s):p&&(s=en(()=>p(i))),l&&On(l,()=>{l=null})):(l?In(l):p&&(l=en(()=>p(i,[t+1,r]))),s&&On(s,()=>{s=null})))};Wn(()=>{c=!1,n(v),c||_(null,null)},a)}function dn(e,n){return n}function ni(e,n,t,r){for(var i=[],s=n.length,l=0;l<s;l++)At(n[l].e,i,!0);var u=s>0&&i.length===0&&t!==null;if(u){var a=t.parentNode;Es(a),a.append(t),r.clear(),Le(e,n[0].prev,n[s-1].next)}Lr(i,()=>{for(var c=0;c<s;c++){var v=n[c];u||(r.delete(v.k),Le(e,v.prev,v.next)),Ne(v.e,!u)}})}function _n(e,n,t,r,i,s=null){var l=e,u={flags:n,items:new Map,first:null},a=(n&wr)!==0;if(a){var c=e;l=c.appendChild(Kn())}var v=null,_=!1,f=St(()=>{var p=t();return Un(p)?p:p==null?[]:wt(p)});Wn(()=>{var p=I(f),g=p.length;_&&g===0||(_=g===0,ti(p,u,l,i,n,r,t),s!==null&&(g===0?v?In(v):v=en(()=>s(l)):v!==null&&On(v,()=>{v=null})),I(f))})}function ti(e,n,t,r,i,s,l){var ne,ge,Te,Ae;var u=(i&cs)!==0,a=(i&(xt|Tt))!==0,c=e.length,v=n.items,_=n.first,f=_,p,g=null,S,A=[],z=[],q,x,D,M;if(u)for(M=0;M<c;M+=1)q=e[M],x=s(q,M),D=v.get(x),D!==void 0&&((ne=D.a)==null||ne.measure(),(S??(S=new Set)).add(D));for(M=0;M<c;M+=1){if(q=e[M],x=s(q,M),D=v.get(x),D===void 0){var ee=f?f.e.nodes_start:t;g=oi(ee,n,g,g===null?n.first:g.next,q,x,M,r,i,l),v.set(x,g),A=[],z=[],f=g.next;continue}if(a&&ri(D,q,M,i),(D.e.f&Fe)!==0&&(In(D.e),u&&((ge=D.a)==null||ge.unfix(),(S??(S=new Set)).delete(D))),D!==f){if(p!==void 0&&p.has(D)){if(A.length<z.length){var F=z[0],$;g=F.prev;var Y=A[0],xe=A[A.length-1];for($=0;$<A.length;$+=1)ar(A[$],F,t);for($=0;$<z.length;$+=1)p.delete(z[$]);Le(n,Y.prev,xe.next),Le(n,g,Y),Le(n,xe,F),f=F,g=xe,M-=1,A=[],z=[]}else p.delete(D),ar(D,f,t),Le(n,D.prev,D.next),Le(n,D,g===null?n.first:g.next),Le(n,g,D),g=D;continue}for(A=[],z=[];f!==null&&f.k!==x;)(f.e.f&Fe)===0&&(p??(p=new Set)).add(f),z.push(f),f=f.next;if(f===null)continue;D=f}A.push(D),g=D,f=D.next}if(f!==null||p!==void 0){for(var pe=p===void 0?[]:wt(p);f!==null;)(f.e.f&Fe)===0&&pe.push(f),f=f.next;var qe=pe.length;if(qe>0){var on=(i&wr)!==0&&c===0?t:null;if(u){for(M=0;M<qe;M+=1)(Te=pe[M].a)==null||Te.measure();for(M=0;M<qe;M+=1)(Ae=pe[M].a)==null||Ae.fix()}ni(n,pe,on,v)}}u&&kt(()=>{var he;if(S!==void 0)for(D of S)(he=D.a)==null||he.apply()}),P.first=n.first&&n.first.e,P.last=g&&g.e}function ri(e,n,t,r){(r&xt)!==0&&_t(e.v,n),(r&Tt)!==0?_t(e.i,t):e.i=t}function oi(e,n,t,r,i,s,l,u,a,c){var v=(a&xt)!==0,_=(a&fs)===0,f=v?_?Ft(i):Qe(i):i,p=(a&Tt)===0?l:Qe(l),g={i:p,v:f,k:s,a:null,e:null,prev:t,next:r};try{return g.e=en(()=>u(e,f,p,c),ys),g.e.prev=t&&t.e,g.e.next=r&&r.e,t===null?n.first=g:(t.next=g,t.e.next=g.e),r!==null&&(r.prev=g,r.e.prev=g.e),g}finally{}}function ar(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,i=n?n.e.nodes_start:t,s=e.e.nodes_start;s!==r;){var l=Zn(s);i.before(s),s=l}}function Le(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function si(e,n,t=!1,r=!1,i=!1){var s=e,l="";Ee(()=>{var u=P;if(l!==(l=n()??"")&&(u.nodes_start!==null&&(Or(u.nodes_start,u.nodes_end),u.nodes_start=u.nodes_end=null),l!=="")){var a=l+"";t?a=`<svg>${a}</svg>`:r&&(a=`<math>${a}</math>`);var c=$r(a);if((t||r)&&(c=Pe(c)),pn(Pe(c),c.lastChild),t||r)for(;Pe(c);)s.before(Pe(c));else s.before(c)}})}function ii(e,n,t,r,i){var u;var s=(u=n.$$slots)==null?void 0:u[t],l=!1;s===!0&&(s=n.children,l=!0),s===void 0?i!==null&&i(e):s(e,l?()=>r:r)}function ai(e,n){var t=void 0,r;Wn(()=>{t!==(t=n())&&(r&&(Ne(r),r=null),t&&(r=en(()=>{Nt(()=>t(e))})))})}function qr(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=qr(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function li(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=qr(e))&&(r&&(r+=" "),r+=n);return r}function Hr(e){return typeof e=="object"?li(e):e??""}const lr=[...` 	
\r\f \v\uFEFF`];function ci(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var i in t)if(t[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,l=0;(l=r.indexOf(i,l))>=0;){var u=l+s;(l===0||lr.includes(r[l-1]))&&(u===r.length||lr.includes(r[u]))?r=(l===0?"":r.substring(0,l))+r.substring(u+1):l=u}}return r===""?null:r}function cr(e,n=!1){var t=n?" !important;":";",r="";for(var i in e){var s=e[i];s!=null&&s!==""&&(r+=" "+i+": "+s+t)}return r}function lt(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function fi(e,n){if(n){var t="",r,i;if(Array.isArray(n)?(r=n[0],i=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,l=0,u=!1,a=[];r&&a.push(...Object.keys(r).map(lt)),i&&a.push(...Object.keys(i).map(lt));var c=0,v=-1;const S=e.length;for(var _=0;_<S;_++){var f=e[_];if(u?f==="/"&&e[_-1]==="*"&&(u=!1):s?s===f&&(s=!1):f==="/"&&e[_+1]==="*"?u=!0:f==='"'||f==="'"?s=f:f==="("?l++:f===")"&&l--,!u&&s===!1&&l===0){if(f===":"&&v===-1)v=_;else if(f===";"||_===S-1){if(v!==-1){var p=lt(e.substring(c,v).trim());if(!a.includes(p)){f!==";"&&_++;var g=e.substring(c,_).trim();t+=" "+g+";"}}c=_+1,v=-1}}}}return r&&(t+=cr(r)),i&&(t+=cr(i,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function It(e,n,t,r,i,s){var l=e.__className;if(l!==t||l===void 0){var u=ci(t,r,s);u==null?e.removeAttribute("class"):n?e.className=u:e.setAttribute("class",u),e.__className=t}else if(s&&i!==s)for(var a in s){var c=!!s[a];(i==null||c!==!!i[a])&&e.classList.toggle(a,c)}return s}function ct(e,n={},t,r){for(var i in t){var s=t[i];n[i]!==s&&(t[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function ui(e,n,t,r){var i=e.__style;if(i!==n){var s=fi(n,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=n}else r&&(Array.isArray(r)?(ct(e,t==null?void 0:t[0],r[0]),ct(e,t==null?void 0:t[1],r[1],"important")):ct(e,t,r));return r}const un=Symbol("class"),cn=Symbol("style"),Kr=Symbol("is custom element"),Zr=Symbol("is html");function di(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function bt(e,n,t,r){var i=Gr(e);i[n]!==(i[n]=t)&&(n==="loading"&&(e[Xo]=t),t==null?e.removeAttribute(n):typeof t!="string"&&Wr(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function _i(e,n,t,r,i=!1){var s=Gr(e),l=s[Kr],u=!s[Zr],a=n||{},c=e.tagName==="OPTION";for(var v in n)v in t||(t[v]=null);t.class?t.class=Hr(t.class):t.class=null,t[cn]&&(t.style??(t.style=null));var _=Wr(e);for(const x in t){let D=t[x];if(c&&x==="value"&&D==null){e.value=e.__value="",a[x]=D;continue}if(x==="class"){var f=e.namespaceURI==="http://www.w3.org/1999/xhtml";It(e,f,D,r,n==null?void 0:n[un],t[un]),a[x]=D,a[un]=t[un];continue}if(x==="style"){ui(e,D,n==null?void 0:n[cn],t[cn]),a[x]=D,a[cn]=t[cn];continue}var p=a[x];if(D!==p){a[x]=D;var g=x[0]+x[1];if(g!=="$$")if(g==="on"){const M={},ee="$$"+x;let F=x.slice(2);var S=Us(F);if(Bs(F)&&(F=F.slice(0,-7),M.capture=!0),!S&&p){if(D!=null)continue;e.removeEventListener(F,a[ee],M),a[ee]=null}if(D!=null)if(S)e[`__${F}`]=D,Xs([F]);else{let $=function(Y){a[x].call(this,Y)};var q=$;a[ee]=Ws(F,e,$,M)}else S&&(e[`__${F}`]=void 0)}else if(x==="style")bt(e,x,D);else if(x==="autofocus")Zs(e,!!D);else if(!l&&(x==="__value"||x==="value"&&D!=null))e.value=e.__value=D;else if(x==="selected"&&c)di(e,D);else{var A=x;u||(A=qs(A));var z=A==="defaultValue"||A==="defaultChecked";if(D==null&&!l&&!z)if(s[x]=null,A==="value"||A==="checked"){let M=e;const ee=n===void 0;if(A==="value"){let F=M.defaultValue;M.removeAttribute(A),M.defaultValue=F,M.value=M.__value=ee?F:null}else{let F=M.defaultChecked;M.removeAttribute(A),M.defaultChecked=F,M.checked=ee?F:!1}}else e.removeAttribute(x);else z||_.includes(A)&&(l||typeof D!="string")?e[A]=D:typeof D!="function"&&bt(e,A,D)}}}for(let x of Object.getOwnPropertySymbols(t))x.description===hs&&ai(e,()=>t[x]);return a}function Gr(e){return e.__attributes??(e.__attributes={[Kr]:e.nodeName.includes("-"),[Zr]:e.namespaceURI===gs})}var fr=new Map;function Wr(e){var n=fr.get(e.nodeName);if(n)return n;fr.set(e.nodeName,n=[]);for(var t,r=e,i=Element.prototype;i!==r;){t=pr(r);for(var s in t)t[s].set&&n.push(s);r=Et(r)}return n}function Lt(e=!1){const n=U,t=n.l.u;if(!t)return;let r=()=>vt(n.s);if(e){let i=0,s={};const l=mn(()=>{let u=!1;const a=n.s;for(const c in a)a[c]!==s[c]&&(s[c]=a[c],u=!0);return u&&i++,i});r=()=>I(l)}t.b.length&&Ms(()=>{ur(n,r),ut(t.b)}),or(()=>{const i=Bn(()=>t.m.map(Ko));return()=>{for(const s of i)typeof s=="function"&&s()}}),t.a.length&&or(()=>{ur(n,r),ut(t.a)})}function ur(e,n){if(e.l.s)for(const t of e.l.s)I(t);n()}let Fn=!1;function mi(e){var n=Fn;try{return Fn=!1,[e(),Fn]}finally{Fn=n}}const vi={get(e,n){if(!e.exclude.includes(n))return I(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=Be({get[n](){return e.props[n]}},n,Er)),e.special[n](t),tr(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),tr(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function jn(e,n){return new Proxy({props:e,exclude:n,special:{},version:Qe(0)},vi)}const pi={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let i=e.props[r];ln(i)&&(i=i());const s=je(i,n);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const i=je(r,n);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,n){if(n===Ge||n===br)return!1;for(let t of e.props)if(ln(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(ln(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function gi(...e){return new Proxy({props:e},pi)}function dr(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function Be(e,n,t,r){var ee;var i=(t&us)!==0,s=!gn||(t&ds)!==0,l=(t&_s)!==0,u=(t&ms)!==0,a=!1,c;l?[c,a]=mi(()=>e[n]):c=e[n];var v=Ge in e||br in e,_=l&&(((ee=je(e,n))==null?void 0:ee.set)??(v&&n in e&&(F=>e[n]=F)))||void 0,f=r,p=!0,g=!1,S=()=>(g=!0,p&&(p=!1,u?f=Bn(r):f=r),f);c===void 0&&r!==void 0&&(_&&s&&rs(),c=S(),_&&_(c));var A;if(s)A=()=>{var F=e[n];return F===void 0?S():(p=!0,g=!1,F)};else{var z=(i?mn:St)(()=>e[n]);z.f|=Go,A=()=>{var F=I(z);return F!==void 0&&(f=void 0),F===void 0?f:F}}if((t&Er)===0)return A;if(_){var q=e.$$legacy;return function(F,$){return arguments.length>0?((!s||!$||q||a)&&_($?A():F),F):A()}}var x=!1,D=Ft(c),M=mn(()=>{var F=A(),$=I(D);return x?(x=!1,$):D.v=F});return l&&I(M),i||(M.equals=Mt),function(F,$){if(arguments.length>0){const Y=$?I(M):s&&l?Ze(F):F;if(!M.equals(Y)){if(x=!0,ue(D,Y),g&&f!==void 0&&(f=Y),dr(M))return F;Bn(()=>I(M))}return F}return dr(M)?M.v:I(M)}}function hi(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function bi(){const e=U;return e===null&&Dr(),(n,t,r)=>{var s;const i=(s=e.s.$$events)==null?void 0:s[n];if(i){const l=Un(i)?i.slice():[i],u=hi(n,t,r);for(const a of l)a.call(e.x,u);return!u.defaultPrevented}return!0}}function yi(e){U===null&&Dr(),U.l===null&&ts(),wi(U).a.push(e)}function wi(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Ei="5";var vr;typeof window<"u"&&((vr=window.__svelte??(window.__svelte={})).v??(vr.v=new Set)).add(Ei);ls();const Di={__category__:"Distributions",EnzymeForward:2.7176857396457104,EnzymeReverse:3.2062435357699535,FiniteDifferences:25.001333885285867,ForwardDiff:1.6970529129736334,MooncakeForward:7.568678299100089,MooncakeReverse:5.987895637296836,ReverseDiff:39.13990546158665,ReverseDiffCompiled:3.2678216415790966,Zygote:1965.1091599102983},Ri={__category__:"Distributions",EnzymeForward:2.7315846602734544,EnzymeReverse:2.881790750738769,FiniteDifferences:22.85573033707865,ForwardDiff:1.3561423413717106,MooncakeForward:7.877296475891271,MooncakeReverse:7.540865275314873,ReverseDiff:38.07596957141887,ReverseDiffCompiled:3.26099770678227,Zygote:"error"},Mi={__category__:"DynamicPPL demo models",EnzymeForward:3.872632321131945,EnzymeReverse:3.5619474095287686,FiniteDifferences:42.39471384120547,ForwardDiff:1.5472406344464371,MooncakeForward:22.864945727804063,MooncakeReverse:7.900380779132686,ReverseDiff:40.89057656540608,ReverseDiffCompiled:4.468336616943428,Zygote:"error"},xi={__category__:"DynamicPPL demo models",EnzymeForward:3.654438983026118,EnzymeReverse:3.343497300605968,FiniteDifferences:39.92686760032131,ForwardDiff:1.4654664228483432,MooncakeForward:20.10499296278351,MooncakeReverse:7.365264220801076,ReverseDiff:39.12932949260776,ReverseDiffCompiled:4.031791907514451,Zygote:3464.286139411126},Ti={__category__:"DynamicPPL demo models",EnzymeForward:4.507595100651273,EnzymeReverse:3.9468793024323086,FiniteDifferences:65.99004329004329,ForwardDiff:1.384451013212721,MooncakeForward:26.224004349599017,MooncakeReverse:5.995530085959886,ReverseDiff:29.09281342892114,ReverseDiffCompiled:2.8273410940558366,Zygote:"error"},Si={__category__:"DynamicPPL demo models",EnzymeForward:5.770100032977905,EnzymeReverse:5.219152527316337,FiniteDifferences:69.31275467887923,ForwardDiff:1.5335148301235466,MooncakeForward:32.77551943758048,MooncakeReverse:8.409844519103055,ReverseDiff:60.142851963308075,ReverseDiffCompiled:3.6259570300908064,Zygote:"error"},Fi={__category__:"DynamicPPL demo models",EnzymeForward:5.654427370452041,EnzymeReverse:5.322673417009457,FiniteDifferences:70.10285659964828,ForwardDiff:1.5435871809515445,MooncakeForward:35.31823889797938,MooncakeReverse:8.132724250359416,ReverseDiff:66.45722397257903,ReverseDiffCompiled:3.8644105686729544,Zygote:2007.4301362929757},Ni={__category__:"DynamicPPL demo models",EnzymeForward:5.54719066520668,EnzymeReverse:4.561366364727709,FiniteDifferences:70.55236150202512,ForwardDiff:1.576727826953514,MooncakeForward:34.162056725125645,MooncakeReverse:8.01127805738217,ReverseDiff:63.98802351212344,ReverseDiffCompiled:3.5878754376266815,Zygote:2187.171065737052},Ci={__category__:"DynamicPPL demo models",EnzymeForward:3.9360852521284624,EnzymeReverse:3.5285206530434152,FiniteDifferences:42.97925396014307,ForwardDiff:1.5908322512678543,MooncakeForward:21.088669036643488,MooncakeReverse:7.7941523816340395,ReverseDiff:47.000889344963234,ReverseDiffCompiled:4.790771416349773,Zygote:3624.0532702382966},Ai={__category__:"DynamicPPL demo models",EnzymeForward:4.463631020168252,EnzymeReverse:4.736478175300484,FiniteDifferences:63.53297968869966,ForwardDiff:1.440474013386489,MooncakeForward:27.41944695967124,MooncakeReverse:7.772859841329807,ReverseDiff:40.03504452972268,ReverseDiffCompiled:3.08610782882695,Zygote:"error"},ki={__category__:"DynamicPPL demo models",EnzymeForward:5.2006202684489775,EnzymeReverse:4.952491770785403,FiniteDifferences:67.18979348011605,ForwardDiff:1.390926855560094,MooncakeForward:29.38048059149723,MooncakeReverse:6.73984407057858,ReverseDiff:55.75078523068333,ReverseDiffCompiled:3.2841831782780577,Zygote:"error"},Oi={__category__:"DynamicPPL demo models",EnzymeForward:5.010156082959162,EnzymeReverse:5.346743244664073,FiniteDifferences:66.47391729657626,ForwardDiff:1.3872112711241051,MooncakeForward:30.84044469072522,MooncakeReverse:6.65051957184155,ReverseDiff:45.133730985070414,ReverseDiffCompiled:3.473424328995168,Zygote:"error"},Ii={__category__:"Distributions",EnzymeForward:4.696691176470589,EnzymeReverse:6.494744796317922,FiniteDifferences:156.13349320543566,ForwardDiff:2.5036867322417424,MooncakeForward:35.06792130025663,MooncakeReverse:6.383061432129951,ReverseDiff:60.511458512283106,ReverseDiffCompiled:7.37082393933183,Zygote:"error"},Li={__category__:"DynamicPPL demo models",EnzymeForward:4.85468052105564,EnzymeReverse:4.219926387522321,FiniteDifferences:66.08417820933886,ForwardDiff:1.4482598653569052,MooncakeForward:27.520891866580214,MooncakeReverse:6.584207982322883,ReverseDiff:48.04530027013922,ReverseDiffCompiled:3.744619576464096,Zygote:"error"},Pi={__category__:"DynamicPPL demo models",EnzymeForward:5.678778861322242,EnzymeReverse:5.167386805126902,FiniteDifferences:65.36877436853705,ForwardDiff:1.4027770516955673,MooncakeForward:28.7958152193122,MooncakeReverse:7.1762354013958545,ReverseDiff:53.09752547307133,ReverseDiffCompiled:3.1630550752363784,Zygote:"error"},zi={__category__:"DynamicPPL demo models",EnzymeForward:4.398801750608831,EnzymeReverse:4.724515028036082,FiniteDifferences:62.57325371476185,ForwardDiff:1.3573204150247637,MooncakeForward:26.93276283618582,MooncakeReverse:6.352062133688109,ReverseDiff:47.16771656283716,ReverseDiffCompiled:2.77787748896725,Zygote:"error"},Vi={__category__:"Core Turing syntax",EnzymeForward:3.5426817436096463,EnzymeReverse:2.1835485346374415,FiniteDifferences:86.98004434589801,ForwardDiff:1.6273673434567482,MooncakeForward:26.78331712062257,MooncakeReverse:5.356392708804098,ReverseDiff:28.3235344679388,ReverseDiffCompiled:2.7213246362267935,Zygote:"error"},Bi={__category__:"Core Turing syntax",EnzymeForward:3.433943808849612,EnzymeReverse:2.9588363729047145,FiniteDifferences:31.68882924509071,ForwardDiff:1.763228897727537,MooncakeForward:11.980427631578948,MooncakeReverse:8.200556745851774,ReverseDiff:74.38330767915171,ReverseDiffCompiled:7.068909513067633,Zygote:"error"},ji={__category__:"DynamicPPL arXiV paper",EnzymeForward:1.5891437721870658,EnzymeReverse:2.198694352542553,FiniteDifferences:29.584953377302707,ForwardDiff:1.6285361277627786,MooncakeForward:2.0281784649923065,MooncakeReverse:8.262205863339583,ReverseDiff:128.0149504110902,ReverseDiffCompiled:20.34637740669769,Zygote:12.040906599385766},Ui={__category__:"DynamicPPL arXiV paper",EnzymeForward:5.043941623255259,EnzymeReverse:2.404104129403531,FiniteDifferences:164.81716886377905,ForwardDiff:3.5102611572852247,MooncakeForward:38.22904816078877,MooncakeReverse:4.266320151206746,ReverseDiff:29.39554093996515,ReverseDiffCompiled:2.4269461313983753,Zygote:623.2316486392856},$i={__category__:"DynamicPPL arXiV paper",EnzymeForward:12683.405758342573,EnzymeReverse:2.3924716987359322,FiniteDifferences:122435.50498612881,ForwardDiff:3547.4143650493734,MooncakeForward:21441.405674644677,MooncakeReverse:3.537844863084208,ReverseDiff:1.7406551489446784,ReverseDiffCompiled:.41763006923837787,Zygote:2.783402481402693},qi={__category__:"DynamicPPL arXiV paper",EnzymeForward:38.64787812581634,EnzymeReverse:8.855211186564615,FiniteDifferences:"NaN",ForwardDiff:27.44716840893833,MooncakeForward:190.55832314254178,MooncakeReverse:4.8945765508964065,ReverseDiff:71.22241317968293,ReverseDiffCompiled:10.779050619530164,Zygote:"error"},Hi={__category__:"DynamicPPL arXiV paper",EnzymeForward:"error",EnzymeReverse:2.9203400367216528,FiniteDifferences:3132.2306719791586,ForwardDiff:155.1501059526103,MooncakeForward:912.6013325069724,MooncakeReverse:9.622019094918013,ReverseDiff:82.55880985434796,ReverseDiffCompiled:12.134901279524273,Zygote:"error"},Ki={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:4.442312439839193,FiniteDifferences:40.500398377517016,ForwardDiff:1.1984976457453522,MooncakeForward:19.517681523331245,MooncakeReverse:10.054635478914118,ReverseDiff:14.794732932559423,ReverseDiffCompiled:1.4419602391577184,Zygote:908.6458510940608},Zi={__category__:"DynamicPPL arXiV paper",EnzymeForward:43.37768588493838,EnzymeReverse:3.09922938102447,FiniteDifferences:1171.0774880334893,ForwardDiff:61.78296959058508,MooncakeForward:578.0590717299579,MooncakeReverse:4.429235936850473,ReverseDiff:61.52120024041149,ReverseDiffCompiled:8.211927817283378,Zygote:180.66939293942633},Gi={__category__:"DynamicPPL arXiV paper",EnzymeForward:216.64494188830366,EnzymeReverse:.9854521699839536,FiniteDifferences:2809.5146645662403,ForwardDiff:152.31530902632903,MooncakeForward:412.57178880361266,MooncakeReverse:4.574295675052568,ReverseDiff:184.2285827588714,ReverseDiffCompiled:36.987855913108376,Zygote:5006.664153522571},Wi={__category__:"DynamicPPL arXiV paper",EnzymeForward:319.7941673813004,EnzymeReverse:2.0597683434873697,FiniteDifferences:6621.335364308725,ForwardDiff:93.31037230879029,MooncakeForward:1392.5744480523401,MooncakeReverse:4.486135943513439,ReverseDiff:49.33098489775273,ReverseDiffCompiled:4.6974039130487855,Zygote:"error"},Xi={__category__:"Core Turing syntax",EnzymeForward:3.2588212523619573,EnzymeReverse:3.127672504281531,FiniteDifferences:40.07654530059272,ForwardDiff:1.4794373401534526,MooncakeForward:26.075551782682513,MooncakeReverse:7.212589452263863,ReverseDiff:44.07653824333386,ReverseDiffCompiled:3.7990596612954763,Zygote:2459.080566685747},Ji={__category__:"Core Turing syntax",EnzymeForward:3.856542131651302,EnzymeReverse:2.6893711070926263,FiniteDifferences:62.570249355116076,ForwardDiff:1.3741381408713043,MooncakeForward:31.27758890713931,MooncakeReverse:16.779691995261466,ReverseDiff:40.278195488721806,ReverseDiffCompiled:3.2437798636131685,Zygote:"error"},Yi={__category__:"Base Julia features",EnzymeForward:2.618287586752821,EnzymeReverse:11.072996647561373,FiniteDifferences:15.210729908535484,ForwardDiff:.8921345112567683,MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"wrong",ReverseDiffCompiled:"wrong",Zygote:"error"},Qi={__category__:"Effect of model size",EnzymeForward:5.471156226788809,EnzymeReverse:1.9821774662254326,FiniteDifferences:148.34525066891987,ForwardDiff:1.8366777063445678,MooncakeForward:38.407502585477445,MooncakeReverse:5.884106872331635,ReverseDiff:29.382165167845127,ReverseDiffCompiled:2.92959370548735,Zygote:"error"},ea={__category__:"Effect of model size",EnzymeForward:24.7163974237145,EnzymeReverse:1.885158168688831,FiniteDifferences:640.1416645401188,ForwardDiff:10.34735758155272,MooncakeForward:139.2406549724664,MooncakeReverse:5.507526023720576,ReverseDiff:29.387172871360118,ReverseDiffCompiled:2.81876404494382,Zygote:"error"},na={__category__:"Effect of model size",EnzymeForward:47.113685289595075,EnzymeReverse:1.7826692569920457,FiniteDifferences:1204.463569222029,ForwardDiff:17.438360691858545,MooncakeForward:280.3139979933856,MooncakeReverse:5.580015526228236,ReverseDiff:19.9167793152604,ReverseDiffCompiled:2.849731663685152,Zygote:"error"},ta={__category__:"Effect of model size",EnzymeForward:243.38153883922178,EnzymeReverse:1.848742929651375,FiniteDifferences:6975.4490867775685,ForwardDiff:95.91755150387073,MooncakeForward:1440.0772925488213,MooncakeReverse:5.510129825392382,ReverseDiff:29.693518857561333,ReverseDiffCompiled:2.869209045637786,Zygote:"error"},ra={__category__:"Distributions",EnzymeForward:3.579792200630417,EnzymeReverse:2.5535024813268414,FiniteDifferences:33.333558292559474,ForwardDiff:1.586288802902001,MooncakeForward:10.070969203687888,MooncakeReverse:7.439585378410847,ReverseDiff:27.818711260457828,ReverseDiffCompiled:2.9112196567843447,Zygote:2719.0024153767645},oa={__category__:"Distributions",EnzymeForward:2.9056939022748685,EnzymeReverse:3.2565311125261687,FiniteDifferences:24.77057989338436,ForwardDiff:1.7682235649843043,MooncakeForward:12.332530120481927,MooncakeReverse:6.672039935520774,ReverseDiff:40.36829477292203,ReverseDiffCompiled:3.9290897338959483,Zygote:"error"},sa={__category__:"Distributions",EnzymeForward:2.064294253995364,EnzymeReverse:6.579489684367222,FiniteDifferences:18.405496405496404,ForwardDiff:1.2821127692639436,MooncakeForward:6.111722367395591,MooncakeReverse:7.836741679625227,ReverseDiff:13.537765325182544,ReverseDiffCompiled:2.7128879518905094,Zygote:"error"},ia={__category__:"Core Turing syntax",EnzymeForward:3.6074952605165302,EnzymeReverse:3.106599782770251,FiniteDifferences:32.63585576434738,ForwardDiff:1.8182919675477267,MooncakeForward:11.568490509049509,MooncakeReverse:7.526100310253972,ReverseDiff:73.99290792500173,ReverseDiffCompiled:6.5101577306830825,Zygote:"error"},aa={__category__:"Core Turing syntax",EnzymeForward:3.5308770355870918,EnzymeReverse:2.989958179703546,FiniteDifferences:34.14880861225022,ForwardDiff:1.6465749710892061,MooncakeForward:10.655914722779816,MooncakeReverse:8.196247240618103,ReverseDiff:47.87614966555184,ReverseDiffCompiled:4.650593515161691,Zygote:4189.880034334764},la={__category__:"Core Turing syntax",EnzymeForward:3.3019998206438883,EnzymeReverse:3.1073172557016973,FiniteDifferences:57.50949126803341,ForwardDiff:1.449581882410725,MooncakeForward:21.194006057707636,MooncakeReverse:6.206125060108539,ReverseDiff:2.4297445255474455,ReverseDiffCompiled:3.009415741187832,Zygote:"error"},ca={__category__:"Core Turing syntax",EnzymeForward:3.129050740530816,EnzymeReverse:2.673256720337838,FiniteDifferences:31.08481906867221,ForwardDiff:1.6082161566032533,MooncakeForward:9.572508541758214,MooncakeReverse:6.693381791474553,ReverseDiff:37.94801444043321,ReverseDiffCompiled:3.846441135641889,Zygote:5023.052010668855},fa={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:22.743822970404562,ForwardDiff:"NaN",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"NaN",ReverseDiffCompiled:3.8509539267612056,Zygote:2462.427486712225},ua={__category__:"Integrations with other packages",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:62.37805728940768,ForwardDiff:6.007739128811218,MooncakeForward:"error",MooncakeReverse:68.64069807963904,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},da={__category__:"PosteriorDB",EnzymeForward:8.063235696687654,EnzymeReverse:2.902193076650302,FiniteDifferences:140.90510033444815,ForwardDiff:2.1462416045634374,MooncakeForward:54.54068057695,MooncakeReverse:6.618268412995406,ReverseDiff:44.97873686430253,ReverseDiffCompiled:3.7810479988997385,Zygote:"error"},_a={__category__:"PosteriorDB",EnzymeForward:7.4465695736094055,EnzymeReverse:2.72445124145376,FiniteDifferences:142.28464351005485,ForwardDiff:1.9677617311312885,MooncakeForward:58.19240365955087,MooncakeReverse:5.940010343044303,ReverseDiff:43.08884811277073,ReverseDiffCompiled:3.6425654576026902,Zygote:"error"},ma={__category__:"Core Turing syntax",EnzymeForward:2.958464328665839,EnzymeReverse:2.330389323989209,FiniteDifferences:40.9308532706403,ForwardDiff:1.3582178998953134,MooncakeForward:13.580725654167791,MooncakeReverse:4.522858370196265,ReverseDiff:19.5,ReverseDiffCompiled:2.039318272468226,Zygote:2800.9786689120447},va={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:11.42529034173129,FiniteDifferences:44.7967142320691,ForwardDiff:1.1196068150451703,MooncakeForward:19.287647923273262,MooncakeReverse:12.66885570031423,ReverseDiff:16.95957128221294,ReverseDiffCompiled:4.236882129277567,Zygote:368.7946242346767},pa={__category__:"Core Turing syntax",EnzymeForward:3.857643082854459,EnzymeReverse:3.457878918607995,FiniteDifferences:41.55578300921187,ForwardDiff:1.5139638772678004,MooncakeForward:18.257331983697824,MooncakeReverse:7.670250896057348,ReverseDiff:41.415144841605965,ReverseDiffCompiled:4.182652990982309,Zygote:"error"},ga={__category__:"Base Julia features",EnzymeForward:3.5934354485776803,EnzymeReverse:2.887579961148048,FiniteDifferences:30.079182117840958,ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ha={__category__:"Base Julia features",EnzymeForward:2.8549016828672467,EnzymeReverse:2.5304900860456416,FiniteDifferences:40.68011126564673,ForwardDiff:1.6192097430011088,MooncakeForward:17.769284802043423,MooncakeReverse:6.565447404280332,ReverseDiff:22.246665700202957,ReverseDiffCompiled:"wrong",Zygote:2061.225850033776},ba={assume_beta:Di,assume_dirichlet:Ri,demo_assume_dot_observe:Mi,demo_assume_dot_observe_literal:xi,demo_assume_index_observe:Ti,demo_assume_matrix_observe_matrix_index:Si,demo_assume_multivariate_observe:Fi,demo_assume_multivariate_observe_literal:Ni,demo_assume_observe_literal:Ci,demo_assume_submodel_observe_index_literal:Ai,demo_dot_assume_observe:ki,demo_dot_assume_observe_index:Oi,assume_lkjcholu:Ii,demo_dot_assume_observe_index_literal:Li,demo_dot_assume_observe_matrix_index:Pi,demo_dot_assume_observe_submodel:zi,dot_assume:Vi,dot_observe:Bi,dppl_gauss_unknown:ji,dppl_hier_poisson:Ui,dppl_high_dim_gauss:$i,dppl_hmm_semisup:qi,dppl_lda:Hi,assume_mvnormal:Ki,dppl_logistic_regression:Zi,dppl_naive_bayes:Gi,dppl_sto_volatility:Wi,dynamic_constraint:Xi,multiple_constraints_same_var:Ji,multithreaded:Yi,n010:Qi,n050:ea,n100:na,n500:ta,assume_normal:ra,observe_bernoulli:oa,observe_categorical:sa,observe_index:ia,observe_literal:aa,observe_multivariate:la,observe_submodel:ca,observe_von_mises:fa,ordinary_diffeq:ua,pdb_eight_schools_centered:da,pdb_eight_schools_noncentered:_a,assume_submodel:ma,assume_wishart:va,broadcast_macro:pa,call_C:ga,control_flow:ha},ya=`@model function assume_beta()
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

model = control_flow()`,pl={assume_beta:ya,assume_dirichlet:wa,demo_assume_dot_observe:Ea,demo_assume_dot_observe_literal:Da,demo_assume_index_observe:Ra,demo_assume_matrix_observe_matrix_index:Ma,demo_assume_multivariate_observe:xa,demo_assume_multivariate_observe_literal:Ta,demo_assume_observe_literal:Sa,demo_assume_submodel_observe_index_literal:Fa,demo_dot_assume_observe:Na,demo_dot_assume_observe_index:Ca,assume_lkjcholu:Aa,demo_dot_assume_observe_index_literal:ka,demo_dot_assume_observe_matrix_index:Oa,demo_dot_assume_observe_submodel:Ia,dot_assume:La,dot_observe:Pa,dppl_gauss_unknown:za,dppl_hier_poisson:Va,dppl_high_dim_gauss:Ba,dppl_hmm_semisup:ja,dppl_lda:Ua,assume_mvnormal:$a,dppl_logistic_regression:qa,dppl_naive_bayes:Ha,dppl_sto_volatility:Ka,dynamic_constraint:Za,multiple_constraints_same_var:Ga,multithreaded:Wa,n010:Xa,n050:Ja,n100:Ya,n500:Qa,assume_normal:el,observe_bernoulli:nl,observe_categorical:tl,observe_index:rl,observe_literal:ol,observe_multivariate:sl,observe_submodel:il,observe_von_mises:al,ordinary_diffeq:ll,pdb_eight_schools_centered:cl,pdb_eight_schools_noncentered:fl,assume_submodel:ul,assume_wishart:dl,broadcast_macro:_l,call_C:ml,control_flow:vl},gl="1.18.0",hl="1.5.0",bl="5.8.2",yl="0.13.5",wl="0.4.5",El="0.1.42",Dl="4.4.0",Rl="0.8.2",Ml="0.8.8",xl="0.7.0",Tl="0.4.1",Sl="1.1.3",Fl="2.5.0",Nl="1.1.2",Cl="0.4.0",Al="0.5.4",kl="3.5.1+1",Ol="7.22.0",Il="1.12.0",Ll="1.11.0",Pl="1.1.2",zl="0.5.2",Vl="1.1.0",Bl="0.4.8",jl="0.5.1",Ul="0.4.6",$l="1.11.0",ql="0.1.1",Hl="0.15.11",Kl="0.1.9",Zl="0.1.6",Gl="1.5.0",Wl="1.2.2",Xl="0.5.0",Jl="0.2.7",Yl="0.10.15",Ql="0.3.14",ec="1.72.6",nc="1.26.0",tc="1.3.1",rc="0.1.10",oc="0.10.43",sc="0.10.4+0",ic="0.1.13",ac="0.7.8",lc="3.31.0",cc="0.12.1",fc="0.11.0",uc="0.13.1",dc="1.0.3",_c="0.2.4",mc="0.3.1",vc="1.0.0",pc="4.18.1",gc="1.1.1+0",hc="0.1.2",bc="0.2.3",yc="2.5.0",wc="0.1.2",Ec="1.6.0",Dc="0.1.3",Rc="0.3.1",Mc="4.1.1",xc="1.16.0",Tc="0.7.13",Sc="1.8.1",Fc="0.18.22",Nc="1.0.0",Cc="1.11.0",Ac="0.1.2",kc="1.9.1",Oc="0.4.0",Ic="6.190.2",Lc="4.10.1",Pc="5.24.1",zc="1.1.0",Vc="1.15.1",Bc="0.7.9",jc="0.4.26",Uc="1.11.0",$c="0.25.122",qc="0.6.58",Hc="0.9.5",Kc="1.6.0",Zc="0.38.2",Gc="2.0.0",Wc="1.0.5",Xc="0.13.90",Jc="0.8.15",Yc="0.0.203+1",Qc="0.1.11",ef="1.27.0",nf="0.1.10",tf="0.10.14",rf="1.10.0",of="3.3.11+0",sf="0.2.2",af="0.1.1",lf="0.3.5",cf="0.3.2",ff="1.1.0",uf="1.1.3",df="1.17.1",_f="0.9.24",mf="1.11.0",vf="1.14.0",pf="2.29.0",gf="0.12.33",hf="0.8.5",bf="1.2.2",yf="0.1.2",wf="1.1.3",Ef="0.1.3",Df="0.5.2",Rf="1.11.0",Mf="0.2.0",xf="1.7.2",Tf="0.6.2",Sf="0.5.6",Ff="1.3.1",Nf="1.13.1",Cf="0.17.2",Af="1.14.6+0",kf="1.10.19",Of="0.2.0",If="2.12.2+0",Lf="0.3.28",Pf="0.4.15",zf="0.1.1",Vf="0.1.7",Bf="0.10.5",jf="0.3.8",Uf="0.1.5",$f="0.3.1",qf="1.4.5",Hf="2025.2.0+0",Kf="1.11.0",Zf="0.7.0",Gf="0.16.2",Wf="0.7.11",Xf="0.1.17",Jf="1.3.1",Yf="0.2.6",Qf="1.10.0",eu="1.0.0",nu="0.5.15",tu="1.7.1",ru="1.14.3",ou="0.2.1",su="0.2.4",iu="0.9.38",au="0.6.10",lu="0.10.2",cu="9.4.4",fu="0.0.38+0",uu="1.4.0",du="0.1.17",_u="2.8.0",mu="1.11.0",vu="0.3.1",pu="0.2.1",gu="0.6.4",hu="8.6.0+0",bu="1.11.0",yu="1.7.2+0",wu="1.11.0+1",Eu="0.9.1+6",Du="1.11.0",Ru="1.18.0+0",Mu="0.9.6",xu="0.1.4",Tu="7.4.0",Su="1.11.0",Fu="3.28.0",Nu="2.2.0",Cu="1.13.1",Au="0.3.29",ku="1.11.0",Ou="1.2.0",Iu="0.10.7",Lu="7.6.0",Pu="0.3.15",zu="2025.2.0+0",Vu="1.0.0",Bu="0.7.18",ju="1.12.0",Uu="0.4.17",$u="0.4.8",qu="4.3.2+0",Hu="0.1.11",Ku="5.5.4+0",Zu="0.5.16",Gu="0.1.8",Wu="0.4.2",Xu="1.11.0",Ju="0.1.4",Yu="1.1.9",Qu="2.28.6+0",ed="0.2.0",nd="10.1.4+3",td="1.2.0",rd="2.1.0",od="1.11.0",sd="0.4.173",id="0.3.4",ad="0.3.7",ld="2023.12.12",cd="0.2.4",fd="0.10.3",ud="7.10.0",dd="0.9.31",_d="0.4.3",md="1.1.3",vd="0.1.5",pd="0.10.5",gd="1.0.0",hd="1.2.0",bd="4.12.0",yd="2.0.0",wd="1.9.0",Ed="1.10.0",Dd="1.5.0",Rd="0.5.0",Md="1.17.0",xd="0.3.27+1",Td="0.8.5+0",Sd="5.0.8+0",Fd="1.5.0",Nd="3.5.4+0",Cd="0.5.6+0",Ad="1.13.2",kd="0.4.6",Od="5.1.0",Id="4.0.1",Ld="0.4.7",Pd="1.8.1",zd="6.103.0",Vd="1.5.0",Bd="1.10.1",jd="1.36.0",Ud="1.8.0",$d="1.16.1",qd="1.4.0",Hd="1.8.0",Kd="1.9.0",Zd="1.16.0",Gd="1.4.0",Wd="1.5.0",Xd="1.5.0",Jd="1.7.0",Yd="1.6.0",Qd="1.6.0",e1="1.7.0",n1="1.15.0",t1="1.4.0",r1="1.6.0",o1="1.4.0",s1="1.4.0",i1="1.5.0",a1="1.18.1",l1="1.7.0",c1="1.7.0",f1="1.6.0",u1="1.4.0",d1="1.7.0",_1="1.5.0",m1="1.6.0",v1="0.11.35",p1="1.0.2",g1="0.5.12",h1="0.12.3",b1="2.8.3",y1="1.2.1",w1="0.3.6",E1="1.11.0",D1="0.4.7",R1="0.7.18",M1="0.2.2",x1="1.4.3",T1="0.2.4",S1="0.4.34",F1="1.2.1",N1="1.5.0",C1="0.2.0",A1="3.1.0",k1="1.11.0",O1="0.1.5",I1="1.11.0",L1="1.3.0",P1="2.11.2",z1="1.11.0",V1="1.11.0",B1="1.7.1",j1="1.6.0",U1="0.3.2",$1="0.4.5",q1="0.1.0",H1="1.3.4",K1="3.39.0",Z1="1.2.2",G1="1.3.1",W1="1.1.1",X1="1.16.1",J1="1.4.2",Y1="0.9.0",Q1="0.5.1+0",e0="2.2.10",n0="0.5.15",t0="0.7.0",r0="0.1.0",o0="0.5.2",s0="2.124.0",i0="0.1.11",a0="1.3.1",l0="1.9.0",c0="1.0.0",f0="7.90.0",u0="1.7.0",d0="3.0.0",_0="1.5.0",m0="1.3.0",v0="1.4.8",p0="1.11.0",g0="1.1.2",h0="1.11.0",b0="0.1.0",y0="1.2.0",w0="2.9.0",E0="0.9.5",D0="1.1.0",R0="1.11.0",M0="1.2.2",x0="1.11.0",T0="1.1.1",S0="0.1.2",F0="0.4.22",N0="2.6.1",C0="0.1.15",A0="0.1.2",k0="1.3.1",O0="1.8.0",I0="1.9.15",L0="1.4.4",P0="3.5.0",z0="1.11.1",V0="1.7.1",B0="0.34.7",j0="1.5.2",U0="0.5.8",$0="0.4.1",q0="0.3.7",H0="0.4.1",K0="0.7.2",Z0="0.3.1",G0="1.11.0",W0="2.5.1",X0="1.11.0",J0=null,Y0="7.7.0+0",Q0="0.3.46",e_="1.0.3",n_="1.0.1",t_="1.12.1",r_="1.10.0",o_="0.1.1",s_="0.1.7",i_="1.11.0",a_="0.5.5",l_="0.5.29",c_="0.2.38",f_="0.1.6",u_="0.11.3",d_="0.4.85",__="1.4.0",m_="0.41.0",v_="1.6.1",p_="1.11.0",g_="1.0.2",h_="1.11.0",b_="1.25.1",y_="1.0.0",w_="0.3.0",E_="1.4.2",D_="1.0.0",R_="1.6.1",M_="2.13.9+0",x_="0.18.1+0",T_="0.10.1",S_="1.2.13+1",F_="0.7.10",N_="0.2.7",C_="1.1.4+0",A_="5.11.0+0",k_="1.59.0+0",O_="2022.0.0+1",I_="17.4.0+2",L_={ADTypes:gl,AbstractFFTs:hl,AbstractMCMC:bl,AbstractPPL:yl,AbstractTrees:wl,Accessors:El,Adapt:Dl,AdvancedHMC:Rl,AdvancedMH:Ml,AdvancedPS:xl,AdvancedVI:Tl,AliasTables:Sl,ArgCheck:Fl,ArgTools:Nl,ArnoldiMethod:Cl,Arpack:Al,Arpack_jll:kl,ArrayInterface:Ol,ArrayLayouts:Il,Artifacts:Ll,Atomix:Pl,AtomsBase:zl,AxisAlgorithms:Vl,AxisArrays:Bl,BFloat16s:jl,BangBang:Ul,Base64:$l,Baselet:ql,Bijectors:Hl,BitFlags:Kl,BitTwiddlingConvenienceFunctions:Zl,BracketingNonlinearSolve:Gl,BufferedStreams:Wl,CEnum:Xl,CPUSummary:Jl,CSV:Yl,Cassette:Ql,ChainRules:ec,ChainRulesCore:nc,Chairmarks:tc,ChangesOfVariables:rc,Chemfiles:oc,Chemfiles_jll:sc,CloseOpenIntervals:ic,CodecZlib:ac,ColorSchemes:lc,ColorTypes:cc,ColorVectorSpace:fc,Colors:uc,Combinatorics:dc,CommonSolve:_c,CommonSubexpressions:mc,CommonWorldInvalidations:vc,Compat:pc,CompilerSupportLibraries_jll:gc,CompositionsBase:hc,ConcreteStructs:bc,ConcurrentUtilities:yc,ConsoleProgressMonitor:wc,ConstructionBase:Ec,ContextVariablesX:Dc,CpuId:Rc,Crayons:Mc,DataAPI:xc,DataDeps:Tc,DataFrames:Sc,DataStructures:Fc,DataValueInterfaces:Nc,Dates:Cc,DefineSingletons:Ac,DelimitedFiles:kc,DensityInterface:Oc,DiffEqBase:Ic,DiffEqCallbacks:Lc,DiffEqNoiseProcess:Pc,DiffResults:zc,DiffRules:Vc,DifferentiationInterface:Bc,DispatchDoctor:jc,Distributed:Uc,Distributions:$c,DistributionsAD:qc,DocStringExtensions:Hc,Downloads:Kc,DynamicPPL:Zc,EllipticalSliceSampling:Gc,EnumX:Wc,Enzyme:Xc,EnzymeCore:Jc,Enzyme_jll:Yc,ExceptionUnwrapping:Qc,ExponentialUtilities:ef,ExprTools:nf,ExproniconLite:tf,FFTW:rf,FFTW_jll:of,FLoops:sf,FLoopsBase:af,FastBroadcast:lf,FastClosures:cf,FastGaussQuadrature:ff,FastPower:uf,FileIO:df,FilePathsBase:_f,FileWatching:mf,FillArrays:vf,FiniteDiff:pf,FiniteDifferences:gf,FixedPointNumbers:hf,ForwardDiff:bf,FunctionProperties:yf,FunctionWrappers:wf,FunctionWrappersWrappers:Ef,Functors:Df,Future:Rf,GPUArraysCore:Mf,GPUCompiler:xf,GZip:Tf,GenericSchur:Sf,Glob:Ff,Graphs:Nf,HDF5:Cf,HDF5_jll:Af,HTTP:kf,HashArrayMappedTries:Of,Hwloc_jll:If,HypergeometricFunctions:Lf,IRTools:Pf,IfElse:zf,ImageBase:Vf,ImageCore:Bf,ImageShow:jf,Inflate:Uf,InitialValues:$f,InlineStrings:qf,IntelOpenMP_jll:Hf,InteractiveUtils:Kf,InternedStrings:Zf,Interpolations:Gf,IntervalSets:Wf,InverseFunctions:Xf,InvertedIndices:Jf,IrrationalConstants:Yf,IterTools:Qf,IteratorInterfaceExtensions:eu,JLD2:nu,JLLWrappers:tu,JSON:"1.2.0",JSON3:ru,Jieko:ou,JuliaVariables:su,KernelAbstractions:iu,KernelDensity:au,Krylov:lu,LLVM:cu,LLVMExtra_jll:fu,LaTeXStrings:uu,LayoutPointers:du,LazyArrays:_u,LazyArtifacts:mu,LazyModules:vu,LeftChildRightSiblingTrees:pu,LibCURL:gu,LibCURL_jll:hu,LibGit2:bu,LibGit2_jll:yu,LibSSH2_jll:wu,LibTracyClient_jll:Eu,Libdl:Du,Libiconv_jll:Ru,Libtask:Mu,LineSearch:xu,LineSearches:Tu,LinearAlgebra:Su,LinearSolve:Fu,LogDensityProblems:Nu,LogDensityProblemsAD:Cu,LogExpFunctions:Au,Logging:ku,LoggingExtras:Ou,MAT:Iu,MCMCChains:Lu,MCMCDiagnosticTools:Pu,MKL_jll:zu,MLCore:Vu,MLDatasets:Bu,MLJModelInterface:ju,MLStyle:Uu,MLUtils:$u,MPICH_jll:qu,MPIPreferences:Hu,MPItrampoline_jll:Ku,MacroTools:Zu,ManualMemory:Gu,MappedArrays:Wu,Markdown:Xu,MaybeInplace:Ju,MbedTLS:Yu,MbedTLS_jll:Qu,MicroCollections:ed,MicrosoftMPI_jll:nd,Missings:td,MistyClosures:rd,Mmap:od,Mooncake:sd,MosaicViews:id,Moshi:ad,MozillaCACerts_jll:ld,MuladdMacro:cd,MultivariateStats:fd,NLSolversBase:ud,NNlib:dd,NPZ:_d,NaNMath:md,NameResolution:vd,NamedArrays:pd,NaturalSort:gd,NetworkOptions:hd,NonlinearSolve:bd,NonlinearSolveBase:yd,NonlinearSolveFirstOrder:wd,NonlinearSolveQuasiNewton:Ed,NonlinearSolveSpectralMethods:Dd,ObjectFile:Rd,OffsetArrays:Md,OpenBLAS_jll:xd,OpenLibm_jll:Td,OpenMPI_jll:Sd,OpenSSL:Fd,OpenSSL_jll:Nd,OpenSpecFun_jll:Cd,Optim:Ad,Optimisers:kd,Optimization:Od,OptimizationBase:Id,OptimizationOptimJL:Ld,OrderedCollections:Pd,OrdinaryDiffEq:zd,OrdinaryDiffEqAdamsBashforthMoulton:Vd,OrdinaryDiffEqBDF:Bd,OrdinaryDiffEqCore:jd,OrdinaryDiffEqDefault:Ud,OrdinaryDiffEqDifferentiation:$d,OrdinaryDiffEqExplicitRK:qd,OrdinaryDiffEqExponentialRK:Hd,OrdinaryDiffEqExtrapolation:Kd,OrdinaryDiffEqFIRK:Zd,OrdinaryDiffEqFeagin:Gd,OrdinaryDiffEqFunctionMap:Wd,OrdinaryDiffEqHighOrderRK:Xd,OrdinaryDiffEqIMEXMultistep:Jd,OrdinaryDiffEqLinear:Yd,OrdinaryDiffEqLowOrderRK:Qd,OrdinaryDiffEqLowStorageRK:e1,OrdinaryDiffEqNonlinearSolve:n1,OrdinaryDiffEqNordsieck:t1,OrdinaryDiffEqPDIRK:r1,OrdinaryDiffEqPRK:o1,OrdinaryDiffEqQPRK:s1,OrdinaryDiffEqRKN:i1,OrdinaryDiffEqRosenbrock:a1,OrdinaryDiffEqSDIRK:l1,OrdinaryDiffEqSSPRK:c1,OrdinaryDiffEqStabilizedIRK:f1,OrdinaryDiffEqStabilizedRK:u1,OrdinaryDiffEqSymplecticRK:d1,OrdinaryDiffEqTsit5:_1,OrdinaryDiffEqVerner:m1,PDMats:v1,PackageExtensionCompat:p1,PaddedViews:g1,Parameters:h1,Parsers:b1,PeriodicTable:y1,Pickle:w1,Pkg:E1,PoissonRandom:D1,Polyester:R1,PolyesterWeave:M1,PooledArrays:x1,PositiveFactorizations:T1,PreallocationTools:S1,PrecompileTools:F1,Preferences:N1,PrettyPrint:C1,PrettyTables:A1,Printf:k1,ProgressLogging:O1,ProgressMeter:I1,PtrArrays:L1,QuadGK:P1,REPL:z1,Random:V1,Random123:B1,RandomNumbers:j1,RangeArrays:U1,Ratios:$1,RealDot:q1,RecipesBase:H1,RecursiveArrayTools:K1,Reexport:Z1,Requires:G1,ResettableStacks:W1,ReverseDiff:X1,Richardson:J1,Rmath:Y1,Rmath_jll:Q1,Roots:e0,RuntimeGeneratedFunctions:n0,SHA:t0,SIMDTypes:r0,SSMProblems:o0,SciMLBase:s0,SciMLJacobianOperators:i0,SciMLLogging:a0,SciMLOperators:l0,SciMLPublic:c0,SciMLSensitivity:f0,SciMLStructures:u0,ScientificTypesBase:d0,ScopedValues:_0,Scratch:m0,SentinelArrays:v0,Serialization:p0,Setfield:g0,SharedArrays:h0,ShowCases:b0,SimpleBufferStream:y0,SimpleNonlinearSolve:w0,SimpleTraits:E0,SimpleUnPack:D0,Sockets:R0,SortingAlgorithms:M0,SparseArrays:x0,SparseConnectivityTracer:T0,SparseInverseSubset:S0,SparseMatrixColorings:F0,SpecialFunctions:N0,SplittablesBase:C0,StackViews:A0,Static:k0,StaticArrayInterface:O0,StaticArrays:I0,StaticArraysCore:L0,StatisticalTraits:P0,Statistics:z0,StatsAPI:V0,StatsBase:B0,StatsFuns:j0,StrideArraysCore:U0,StridedViews:$0,StringEncodings:q0,StringManipulation:H0,StructArrays:K0,StructIO:Z0,StructTypes:G0,StructUtils:W0,StyledStrings:X0,SuiteSparse:J0,SuiteSparse_jll:Y0,SymbolicIndexingInterface:Q0,TOML:e_,TableTraits:n_,Tables:t_,Tar:r_,TensorCore:o_,TerminalLoggers:s_,Test:i_,ThreadingUtilities:a_,TimerOutputs:l_,Tracker:c_,Tracy:f_,TranscodingStreams:u_,Transducers:d_,TruncatedStacktraces:__,Turing:m_,URIs:v_,UUIDs:p_,UnPack:g_,Unicode:h_,Unitful:b_,UnitfulAtomic:y_,UnsafeAtomics:w_,WeakRefStrings:E_,WoodburyMatrices:D_,WorkerUtilities:R_,XML2_jll:M_,Xorg_libpciaccess_jll:x_,ZipFile:T_,Zlib_jll:S_,Zygote:F_,ZygoteRules:N_,libaec_jll:C_,libblastrampoline_jll:A_,nghttp2_jll:k_,oneTBB_jll:O_,p7zip_jll:I_};function yt(e){return[...e.entries()].sort(([n,t],[r,i])=>n.localeCompare(r))}var P_=ve('<tr><td class="svelte-7y9k9c"> </td><td class="version svelte-7y9k9c"> </td></tr>'),z_=ve('<table id="manifest" class="svelte-7y9k9c"><thead><tr><th class="svelte-7y9k9c">Package</th><th class="svelte-7y9k9c">Version</th></tr></thead><tbody></tbody></table>');function V_(e,n){hn(n,!1);let t=new Map;for(const[s,l]of Object.entries(L_))t.set(s,l===""?null:l);Lt();var r=z_(),i=we(W(r));_n(i,5,()=>yt(t),dn,(s,l)=>{let u=()=>I(l)[0],a=()=>I(l)[1];var c=P_(),v=W(c),_=W(v),f=we(v),p=W(f);Ee(()=>{Ve(_,u()),Ve(p,a()===null?"":`v${a()}`)}),re(s,c)}),re(e,r),bn()}function B_(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ft,_r;function j_(){if(_r)return ft;_r=1;function e(o){return o instanceof Map?o.clear=o.delete=o.set=function(){throw new Error("map is read-only")}:o instanceof Set&&(o.add=o.clear=o.delete=function(){throw new Error("set is read-only")}),Object.freeze(o),Object.getOwnPropertyNames(o).forEach(d=>{const h=o[d],N=typeof h;(N==="object"||N==="function")&&!Object.isFrozen(h)&&e(h)}),o}class n{constructor(d){d.data===void 0&&(d.data={}),this.data=d.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(o,...d){const h=Object.create(null);for(const N in o)h[N]=o[N];return d.forEach(function(N){for(const H in N)h[H]=N[H]}),h}const i="</span>",s=o=>!!o.scope,l=(o,{prefix:d})=>{if(o.startsWith("language:"))return o.replace("language:","language-");if(o.includes(".")){const h=o.split(".");return[`${d}${h.shift()}`,...h.map((N,H)=>`${N}${"_".repeat(H+1)}`)].join(" ")}return`${d}${o}`};class u{constructor(d,h){this.buffer="",this.classPrefix=h.classPrefix,d.walk(this)}addText(d){this.buffer+=t(d)}openNode(d){if(!s(d))return;const h=l(d.scope,{prefix:this.classPrefix});this.span(h)}closeNode(d){s(d)&&(this.buffer+=i)}value(){return this.buffer}span(d){this.buffer+=`<span class="${d}">`}}const a=(o={})=>{const d={children:[]};return Object.assign(d,o),d};class c{constructor(){this.rootNode=a(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(d){this.top.children.push(d)}openNode(d){const h=a({scope:d});this.add(h),this.stack.push(h)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(d){return this.constructor._walk(d,this.rootNode)}static _walk(d,h){return typeof h=="string"?d.addText(h):h.children&&(d.openNode(h),h.children.forEach(N=>this._walk(d,N)),d.closeNode(h)),d}static _collapse(d){typeof d!="string"&&d.children&&(d.children.every(h=>typeof h=="string")?d.children=[d.children.join("")]:d.children.forEach(h=>{c._collapse(h)}))}}class v extends c{constructor(d){super(),this.options=d}addText(d){d!==""&&this.add(d)}startScope(d){this.openNode(d)}endScope(){this.closeNode()}__addSublanguage(d,h){const N=d.root;h&&(N.scope=`language:${h}`),this.add(N)}toHTML(){return new u(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(o){return o?typeof o=="string"?o:o.source:null}function f(o){return S("(?=",o,")")}function p(o){return S("(?:",o,")*")}function g(o){return S("(?:",o,")?")}function S(...o){return o.map(h=>_(h)).join("")}function A(o){const d=o[o.length-1];return typeof d=="object"&&d.constructor===Object?(o.splice(o.length-1,1),d):{}}function z(...o){return"("+(A(o).capture?"":"?:")+o.map(N=>_(N)).join("|")+")"}function q(o){return new RegExp(o.toString()+"|").exec("").length-1}function x(o,d){const h=o&&o.exec(d);return h&&h.index===0}const D=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function M(o,{joinWith:d}){let h=0;return o.map(N=>{h+=1;const H=h;let K=_(N),w="";for(;K.length>0;){const y=D.exec(K);if(!y){w+=K;break}w+=K.substring(0,y.index),K=K.substring(y.index+y[0].length),y[0][0]==="\\"&&y[1]?w+="\\"+String(Number(y[1])+H):(w+=y[0],y[0]==="("&&h++)}return w}).map(N=>`(${N})`).join(d)}const ee=/\b\B/,F="[a-zA-Z]\\w*",$="[a-zA-Z_]\\w*",Y="\\b\\d+(\\.\\d+)?",xe="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",pe="\\b(0b[01]+)",qe="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",on=(o={})=>{const d=/^#![ ]*\//;return o.binary&&(o.begin=S(d,/.*\b/,o.binary,/\b.*/)),r({scope:"meta",begin:d,end:/$/,relevance:0,"on:begin":(h,N)=>{h.index!==0&&N.ignoreMatch()}},o)},ne={begin:"\\\\[\\s\\S]",relevance:0},ge={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ne]},Te={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ne]},Ae={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},he=function(o,d,h={}){const N=r({scope:"comment",begin:o,end:d,contains:[]},h);N.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const H=z("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return N.contains.push({begin:S(/[ ]+/,"(",H,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),N},Qn=he("//","$"),sn=he("/\\*","\\*/"),wn=he("#","$"),Xr={scope:"number",begin:Y,relevance:0},Jr={scope:"number",begin:xe,relevance:0},Yr={scope:"number",begin:pe,relevance:0},Qr={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ne,{begin:/\[/,end:/\]/,relevance:0,contains:[ne]}]},eo={scope:"title",begin:F,relevance:0},no={scope:"title",begin:$,relevance:0},to={begin:"\\.\\s*"+$,relevance:0};var En=Object.freeze({__proto__:null,APOS_STRING_MODE:ge,BACKSLASH_ESCAPE:ne,BINARY_NUMBER_MODE:Yr,BINARY_NUMBER_RE:pe,COMMENT:he,C_BLOCK_COMMENT_MODE:sn,C_LINE_COMMENT_MODE:Qn,C_NUMBER_MODE:Jr,C_NUMBER_RE:xe,END_SAME_AS_BEGIN:function(o){return Object.assign(o,{"on:begin":(d,h)=>{h.data._beginMatch=d[1]},"on:end":(d,h)=>{h.data._beginMatch!==d[1]&&h.ignoreMatch()}})},HASH_COMMENT_MODE:wn,IDENT_RE:F,MATCH_NOTHING_RE:ee,METHOD_GUARD:to,NUMBER_MODE:Xr,NUMBER_RE:Y,PHRASAL_WORDS_MODE:Ae,QUOTE_STRING_MODE:Te,REGEXP_MODE:Qr,RE_STARTERS_RE:qe,SHEBANG:on,TITLE_MODE:eo,UNDERSCORE_IDENT_RE:$,UNDERSCORE_TITLE_MODE:no});function ro(o,d){o.input[o.index-1]==="."&&d.ignoreMatch()}function oo(o,d){o.className!==void 0&&(o.scope=o.className,delete o.className)}function so(o,d){d&&o.beginKeywords&&(o.begin="\\b("+o.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",o.__beforeBegin=ro,o.keywords=o.keywords||o.beginKeywords,delete o.beginKeywords,o.relevance===void 0&&(o.relevance=0))}function io(o,d){Array.isArray(o.illegal)&&(o.illegal=z(...o.illegal))}function ao(o,d){if(o.match){if(o.begin||o.end)throw new Error("begin & end are not supported with match");o.begin=o.match,delete o.match}}function lo(o,d){o.relevance===void 0&&(o.relevance=1)}const co=(o,d)=>{if(!o.beforeMatch)return;if(o.starts)throw new Error("beforeMatch cannot be used with starts");const h=Object.assign({},o);Object.keys(o).forEach(N=>{delete o[N]}),o.keywords=h.keywords,o.begin=S(h.beforeMatch,f(h.begin)),o.starts={relevance:0,contains:[Object.assign(h,{endsParent:!0})]},o.relevance=0,delete h.beforeMatch},fo=["of","and","for","in","not","or","if","then","parent","list","value"],uo="keyword";function Pt(o,d,h=uo){const N=Object.create(null);return typeof o=="string"?H(h,o.split(" ")):Array.isArray(o)?H(h,o):Object.keys(o).forEach(function(K){Object.assign(N,Pt(o[K],d,K))}),N;function H(K,w){d&&(w=w.map(y=>y.toLowerCase())),w.forEach(function(y){const T=y.split("|");N[T[0]]=[K,_o(T[0],T[1])]})}}function _o(o,d){return d?Number(d):mo(o)?0:1}function mo(o){return fo.includes(o.toLowerCase())}const zt={},He=o=>{console.error(o)},Vt=(o,...d)=>{console.log(`WARN: ${o}`,...d)},Xe=(o,d)=>{zt[`${o}/${d}`]||(console.log(`Deprecated as of ${o}. ${d}`),zt[`${o}/${d}`]=!0)},Dn=new Error;function Bt(o,d,{key:h}){let N=0;const H=o[h],K={},w={};for(let y=1;y<=d.length;y++)w[y+N]=H[y],K[y+N]=!0,N+=q(d[y-1]);o[h]=w,o[h]._emit=K,o[h]._multi=!0}function vo(o){if(Array.isArray(o.begin)){if(o.skip||o.excludeBegin||o.returnBegin)throw He("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Dn;if(typeof o.beginScope!="object"||o.beginScope===null)throw He("beginScope must be object"),Dn;Bt(o,o.begin,{key:"beginScope"}),o.begin=M(o.begin,{joinWith:""})}}function po(o){if(Array.isArray(o.end)){if(o.skip||o.excludeEnd||o.returnEnd)throw He("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Dn;if(typeof o.endScope!="object"||o.endScope===null)throw He("endScope must be object"),Dn;Bt(o,o.end,{key:"endScope"}),o.end=M(o.end,{joinWith:""})}}function go(o){o.scope&&typeof o.scope=="object"&&o.scope!==null&&(o.beginScope=o.scope,delete o.scope)}function ho(o){go(o),typeof o.beginScope=="string"&&(o.beginScope={_wrap:o.beginScope}),typeof o.endScope=="string"&&(o.endScope={_wrap:o.endScope}),vo(o),po(o)}function bo(o){function d(w,y){return new RegExp(_(w),"m"+(o.case_insensitive?"i":"")+(o.unicodeRegex?"u":"")+(y?"g":""))}class h{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(y,T){T.position=this.position++,this.matchIndexes[this.matchAt]=T,this.regexes.push([T,y]),this.matchAt+=q(y)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const y=this.regexes.map(T=>T[1]);this.matcherRe=d(M(y,{joinWith:"|"}),!0),this.lastIndex=0}exec(y){this.matcherRe.lastIndex=this.lastIndex;const T=this.matcherRe.exec(y);if(!T)return null;const X=T.findIndex((an,nt)=>nt>0&&an!==void 0),Z=this.matchIndexes[X];return T.splice(0,X),Object.assign(T,Z)}}class N{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(y){if(this.multiRegexes[y])return this.multiRegexes[y];const T=new h;return this.rules.slice(y).forEach(([X,Z])=>T.addRule(X,Z)),T.compile(),this.multiRegexes[y]=T,T}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(y,T){this.rules.push([y,T]),T.type==="begin"&&this.count++}exec(y){const T=this.getMatcher(this.regexIndex);T.lastIndex=this.lastIndex;let X=T.exec(y);if(this.resumingScanAtSamePosition()&&!(X&&X.index===this.lastIndex)){const Z=this.getMatcher(0);Z.lastIndex=this.lastIndex+1,X=Z.exec(y)}return X&&(this.regexIndex+=X.position+1,this.regexIndex===this.count&&this.considerAll()),X}}function H(w){const y=new N;return w.contains.forEach(T=>y.addRule(T.begin,{rule:T,type:"begin"})),w.terminatorEnd&&y.addRule(w.terminatorEnd,{type:"end"}),w.illegal&&y.addRule(w.illegal,{type:"illegal"}),y}function K(w,y){const T=w;if(w.isCompiled)return T;[oo,ao,ho,co].forEach(Z=>Z(w,y)),o.compilerExtensions.forEach(Z=>Z(w,y)),w.__beforeBegin=null,[so,io,lo].forEach(Z=>Z(w,y)),w.isCompiled=!0;let X=null;return typeof w.keywords=="object"&&w.keywords.$pattern&&(w.keywords=Object.assign({},w.keywords),X=w.keywords.$pattern,delete w.keywords.$pattern),X=X||/\w+/,w.keywords&&(w.keywords=Pt(w.keywords,o.case_insensitive)),T.keywordPatternRe=d(X,!0),y&&(w.begin||(w.begin=/\B|\b/),T.beginRe=d(T.begin),!w.end&&!w.endsWithParent&&(w.end=/\B|\b/),w.end&&(T.endRe=d(T.end)),T.terminatorEnd=_(T.end)||"",w.endsWithParent&&y.terminatorEnd&&(T.terminatorEnd+=(w.end?"|":"")+y.terminatorEnd)),w.illegal&&(T.illegalRe=d(w.illegal)),w.contains||(w.contains=[]),w.contains=[].concat(...w.contains.map(function(Z){return yo(Z==="self"?w:Z)})),w.contains.forEach(function(Z){K(Z,T)}),w.starts&&K(w.starts,y),T.matcher=H(T),T}if(o.compilerExtensions||(o.compilerExtensions=[]),o.contains&&o.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return o.classNameAliases=r(o.classNameAliases||{}),K(o)}function jt(o){return o?o.endsWithParent||jt(o.starts):!1}function yo(o){return o.variants&&!o.cachedVariants&&(o.cachedVariants=o.variants.map(function(d){return r(o,{variants:null},d)})),o.cachedVariants?o.cachedVariants:jt(o)?r(o,{starts:o.starts?r(o.starts):null}):Object.isFrozen(o)?r(o):o}var wo="11.11.1";class Eo extends Error{constructor(d,h){super(d),this.name="HTMLInjectionError",this.html=h}}const et=t,Ut=r,$t=Symbol("nomatch"),Do=7,qt=function(o){const d=Object.create(null),h=Object.create(null),N=[];let H=!0;const K="Could not find the language '{}', did you forget to load/include a language module?",w={disableAutodetect:!0,name:"Plain text",contains:[]};let y={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:v};function T(m){return y.noHighlightRe.test(m)}function X(m){let R=m.className+" ";R+=m.parentNode?m.parentNode.className:"";const O=y.languageDetectRe.exec(R);if(O){const B=ke(O[1]);return B||(Vt(K.replace("{}",O[1])),Vt("Falling back to no-highlight mode for this block.",m)),B?O[1]:"no-highlight"}return R.split(/\s+/).find(B=>T(B)||ke(B))}function Z(m,R,O){let B="",G="";typeof R=="object"?(B=m,O=R.ignoreIllegals,G=R.language):(Xe("10.7.0","highlight(lang, code, ...args) has been deprecated."),Xe("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),G=m,B=R),O===void 0&&(O=!0);const _e={code:B,language:G};Mn("before:highlight",_e);const Oe=_e.result?_e.result:an(_e.language,_e.code,O);return Oe.code=_e.code,Mn("after:highlight",Oe),Oe}function an(m,R,O,B){const G=Object.create(null);function _e(b,E){return b.keywords[E]}function Oe(){if(!C.keywords){J.addText(j);return}let b=0;C.keywordPatternRe.lastIndex=0;let E=C.keywordPatternRe.exec(j),k="";for(;E;){k+=j.substring(b,E.index);const L=ye.case_insensitive?E[0].toLowerCase():E[0],Q=_e(C,L);if(Q){const[Se,Bo]=Q;if(J.addText(k),k="",G[L]=(G[L]||0)+1,G[L]<=Do&&(Sn+=Bo),Se.startsWith("_"))k+=E[0];else{const jo=ye.classNameAliases[Se]||Se;be(E[0],jo)}}else k+=E[0];b=C.keywordPatternRe.lastIndex,E=C.keywordPatternRe.exec(j)}k+=j.substring(b),J.addText(k)}function xn(){if(j==="")return;let b=null;if(typeof C.subLanguage=="string"){if(!d[C.subLanguage]){J.addText(j);return}b=an(C.subLanguage,j,!0,Yt[C.subLanguage]),Yt[C.subLanguage]=b._top}else b=tt(j,C.subLanguage.length?C.subLanguage:null);C.relevance>0&&(Sn+=b.relevance),J.__addSublanguage(b._emitter,b.language)}function ae(){C.subLanguage!=null?xn():Oe(),j=""}function be(b,E){b!==""&&(J.startScope(E),J.addText(b),J.endScope())}function Gt(b,E){let k=1;const L=E.length-1;for(;k<=L;){if(!b._emit[k]){k++;continue}const Q=ye.classNameAliases[b[k]]||b[k],Se=E[k];Q?be(Se,Q):(j=Se,Oe(),j=""),k++}}function Wt(b,E){return b.scope&&typeof b.scope=="string"&&J.openNode(ye.classNameAliases[b.scope]||b.scope),b.beginScope&&(b.beginScope._wrap?(be(j,ye.classNameAliases[b.beginScope._wrap]||b.beginScope._wrap),j=""):b.beginScope._multi&&(Gt(b.beginScope,E),j="")),C=Object.create(b,{parent:{value:C}}),C}function Xt(b,E,k){let L=x(b.endRe,k);if(L){if(b["on:end"]){const Q=new n(b);b["on:end"](E,Q),Q.isMatchIgnored&&(L=!1)}if(L){for(;b.endsParent&&b.parent;)b=b.parent;return b}}if(b.endsWithParent)return Xt(b.parent,E,k)}function Io(b){return C.matcher.regexIndex===0?(j+=b[0],1):(it=!0,0)}function Lo(b){const E=b[0],k=b.rule,L=new n(k),Q=[k.__beforeBegin,k["on:begin"]];for(const Se of Q)if(Se&&(Se(b,L),L.isMatchIgnored))return Io(E);return k.skip?j+=E:(k.excludeBegin&&(j+=E),ae(),!k.returnBegin&&!k.excludeBegin&&(j=E)),Wt(k,b),k.returnBegin?0:E.length}function Po(b){const E=b[0],k=R.substring(b.index),L=Xt(C,b,k);if(!L)return $t;const Q=C;C.endScope&&C.endScope._wrap?(ae(),be(E,C.endScope._wrap)):C.endScope&&C.endScope._multi?(ae(),Gt(C.endScope,b)):Q.skip?j+=E:(Q.returnEnd||Q.excludeEnd||(j+=E),ae(),Q.excludeEnd&&(j=E));do C.scope&&J.closeNode(),!C.skip&&!C.subLanguage&&(Sn+=C.relevance),C=C.parent;while(C!==L.parent);return L.starts&&Wt(L.starts,b),Q.returnEnd?0:E.length}function zo(){const b=[];for(let E=C;E!==ye;E=E.parent)E.scope&&b.unshift(E.scope);b.forEach(E=>J.openNode(E))}let Tn={};function Jt(b,E){const k=E&&E[0];if(j+=b,k==null)return ae(),0;if(Tn.type==="begin"&&E.type==="end"&&Tn.index===E.index&&k===""){if(j+=R.slice(E.index,E.index+1),!H){const L=new Error(`0 width match regex (${m})`);throw L.languageName=m,L.badRule=Tn.rule,L}return 1}if(Tn=E,E.type==="begin")return Lo(E);if(E.type==="illegal"&&!O){const L=new Error('Illegal lexeme "'+k+'" for mode "'+(C.scope||"<unnamed>")+'"');throw L.mode=C,L}else if(E.type==="end"){const L=Po(E);if(L!==$t)return L}if(E.type==="illegal"&&k==="")return j+=`
`,1;if(st>1e5&&st>E.index*3)throw new Error("potential infinite loop, way more iterations than matches");return j+=k,k.length}const ye=ke(m);if(!ye)throw He(K.replace("{}",m)),new Error('Unknown language: "'+m+'"');const Vo=bo(ye);let ot="",C=B||Vo;const Yt={},J=new y.__emitter(y);zo();let j="",Sn=0,Ke=0,st=0,it=!1;try{if(ye.__emitTokens)ye.__emitTokens(R,J);else{for(C.matcher.considerAll();;){st++,it?it=!1:C.matcher.considerAll(),C.matcher.lastIndex=Ke;const b=C.matcher.exec(R);if(!b)break;const E=R.substring(Ke,b.index),k=Jt(E,b);Ke=b.index+k}Jt(R.substring(Ke))}return J.finalize(),ot=J.toHTML(),{language:m,value:ot,relevance:Sn,illegal:!1,_emitter:J,_top:C}}catch(b){if(b.message&&b.message.includes("Illegal"))return{language:m,value:et(R),illegal:!0,relevance:0,_illegalBy:{message:b.message,index:Ke,context:R.slice(Ke-100,Ke+100),mode:b.mode,resultSoFar:ot},_emitter:J};if(H)return{language:m,value:et(R),illegal:!1,relevance:0,errorRaised:b,_emitter:J,_top:C};throw b}}function nt(m){const R={value:et(m),illegal:!1,relevance:0,_top:w,_emitter:new y.__emitter(y)};return R._emitter.addText(m),R}function tt(m,R){R=R||y.languages||Object.keys(d);const O=nt(m),B=R.filter(ke).filter(Zt).map(ae=>an(ae,m,!1));B.unshift(O);const G=B.sort((ae,be)=>{if(ae.relevance!==be.relevance)return be.relevance-ae.relevance;if(ae.language&&be.language){if(ke(ae.language).supersetOf===be.language)return 1;if(ke(be.language).supersetOf===ae.language)return-1}return 0}),[_e,Oe]=G,xn=_e;return xn.secondBest=Oe,xn}function Ro(m,R,O){const B=R&&h[R]||O;m.classList.add("hljs"),m.classList.add(`language-${B}`)}function rt(m){let R=null;const O=X(m);if(T(O))return;if(Mn("before:highlightElement",{el:m,language:O}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(y.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),y.throwUnescapedHTML))throw new Eo("One of your code blocks includes unescaped HTML.",m.innerHTML);R=m;const B=R.textContent,G=O?Z(B,{language:O,ignoreIllegals:!0}):tt(B);m.innerHTML=G.value,m.dataset.highlighted="yes",Ro(m,O,G.language),m.result={language:G.language,re:G.relevance,relevance:G.relevance},G.secondBest&&(m.secondBest={language:G.secondBest.language,relevance:G.secondBest.relevance}),Mn("after:highlightElement",{el:m,result:G,text:B})}function Mo(m){y=Ut(y,m)}const xo=()=>{Rn(),Xe("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function To(){Rn(),Xe("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Ht=!1;function Rn(){function m(){Rn()}if(document.readyState==="loading"){Ht||window.addEventListener("DOMContentLoaded",m,!1),Ht=!0;return}document.querySelectorAll(y.cssSelector).forEach(rt)}function So(m,R){let O=null;try{O=R(o)}catch(B){if(He("Language definition for '{}' could not be registered.".replace("{}",m)),H)He(B);else throw B;O=w}O.name||(O.name=m),d[m]=O,O.rawDefinition=R.bind(null,o),O.aliases&&Kt(O.aliases,{languageName:m})}function Fo(m){delete d[m];for(const R of Object.keys(h))h[R]===m&&delete h[R]}function No(){return Object.keys(d)}function ke(m){return m=(m||"").toLowerCase(),d[m]||d[h[m]]}function Kt(m,{languageName:R}){typeof m=="string"&&(m=[m]),m.forEach(O=>{h[O.toLowerCase()]=R})}function Zt(m){const R=ke(m);return R&&!R.disableAutodetect}function Co(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=R=>{m["before:highlightBlock"](Object.assign({block:R.el},R))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=R=>{m["after:highlightBlock"](Object.assign({block:R.el},R))})}function Ao(m){Co(m),N.push(m)}function ko(m){const R=N.indexOf(m);R!==-1&&N.splice(R,1)}function Mn(m,R){const O=m;N.forEach(function(B){B[O]&&B[O](R)})}function Oo(m){return Xe("10.7.0","highlightBlock will be removed entirely in v12.0"),Xe("10.7.0","Please use highlightElement now."),rt(m)}Object.assign(o,{highlight:Z,highlightAuto:tt,highlightAll:Rn,highlightElement:rt,highlightBlock:Oo,configure:Mo,initHighlighting:xo,initHighlightingOnLoad:To,registerLanguage:So,unregisterLanguage:Fo,listLanguages:No,getLanguage:ke,registerAliases:Kt,autoDetection:Zt,inherit:Ut,addPlugin:Ao,removePlugin:ko}),o.debugMode=function(){H=!1},o.safeMode=function(){H=!0},o.versionString=wo,o.regex={concat:S,lookahead:f,either:z,optional:g,anyNumberOfTimes:p};for(const m in En)typeof En[m]=="object"&&e(En[m]);return Object.assign(o,En),o},Je=qt({});return Je.newInstance=()=>qt({}),ft=Je,Je.HighlightJS=Je,Je.default=Je,ft}var U_=j_();const mr=B_(U_);var $_=ve("<pre><code><!></code></pre>");function q_(e,n){const t=jn(n,["children","$$slots","$$events","$$legacy"]),r=jn(t,["code","highlighted","languageName","langtag"]);let i=Be(n,"code",8),s=Be(n,"highlighted",8),l=Be(n,"languageName",8,"plaintext"),u=Be(n,"langtag",8,!1);var a=$_();let c;var v=W(a);It(v,1,"",null,{},{hljs:!0});var _=W(v);{var f=g=>{var S=Ot(),A=Gn(S);si(A,s),re(g,S)},p=g=>{var S=Js();Ee(()=>Ve(S,i())),re(g,S)};ht(_,g=>{s()?g(f):g(p,!1)})}Ee(g=>c=_i(a,c,{"data-language":l(),...r,[un]:g},"svelte-1w9vok"),[()=>({langtag:u()})],St),re(e,a)}function H_(e,n){const t=jn(n,["children","$$slots","$$events","$$legacy"]),r=jn(t,["language","code","langtag"]);hn(n,!1);let i=Be(n,"language",8),s=Be(n,"code",8),l=Be(n,"langtag",8,!1);const u=bi();let a=Ft("");yi(()=>{I(a)&&u("highlight",{highlighted:I(a)})}),Ts(()=>(vt(i()),vt(s())),()=>{mr.registerLanguage(i().name,i().register),ue(a,mr.highlight(s(),{language:i().name}).value)}),Ss(),Lt();var c=Ot(),v=Gn(c);ii(v,n,"default",{get highlighted(){return I(a)}},_=>{q_(_,gi(()=>r,{get languageName(){return i().name},get langtag(){return l()},get highlighted(){return I(a)},get code(){return s()}}))}),re(e,c),bn()}function K_(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",s={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},l={keywords:s,illegal:/<\//},u={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},a={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},c={className:"subst",begin:/\$\(/,end:/\)/,keywords:s},v={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,c,v],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},f={className:"string",contains:[e.BACKSLASH_ESCAPE,c,v],begin:"`",end:"`"},p={className:"meta",begin:"@"+n},g={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return l.name="Julia",l.contains=[u,a,_,f,p,g,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],c.contains=l.contains,l}const Z_={name:"julia",register:K_};var G_=ve('<th class="svelte-m8v9hl"> </th>'),W_=ve('<td class="svelte-m8v9hl"> </td>'),X_=ve('<a class="issue svelte-m8v9hl" target="_blank">(?)</a>'),J_=ve('<td class="svelte-m8v9hl"><!> <span> </span></td>'),Y_=ve('<tr class="svelte-m8v9hl"><td class="svelte-m8v9hl"> <div class="model-definition svelte-m8v9hl"><!></div></td><!></tr>'),Q_=ve('<table id="results" class="svelte-m8v9hl"><thead><tr class="svelte-m8v9hl"><th class="svelte-m8v9hl">Model name \\\\ AD type</th><!></tr></thead><tbody></tbody></table>');function em(e,n){hn(n,!0);const t=[...n.data.keys()],r=n.data.get(t[0]).keys(),i="https://github.com/EnzymeAD/Enzyme.jl/issues/1995",l={assume_mvnormal__EnzymeForward:i,assume_wishart__EnzymeForward:i,multithreaded__Mooncake:"https://github.com/chalk-lab/Mooncake.jl/issues/570"};var u=Q_(),a=W(u),c=W(a),v=we(W(c));_n(v,17,()=>r,dn,(f,p)=>{var g=G_(),S=W(g);Ee(()=>Ve(S,I(p))),re(f,g)});var _=we(a);_n(_,21,()=>yt(n.data),dn,(f,p)=>{let g=()=>I(p)[0],S=()=>I(p)[1];var A=Y_(),z=W(A),q=W(z),x=we(q),D=W(x);H_(D,{language:Z_,get code(){return n.modelDefinitions[g()]}});var M=we(z);_n(M,17,()=>yt(S()),dn,(ee,F)=>{let $=()=>I(F)[0],Y=()=>I(F)[1];var xe=Ot(),pe=Gn(xe);{var qe=ne=>{var ge=W_(),Te=W(ge);Ee(Ae=>Ve(Te,Ae),[()=>Y().toFixed(3)]),re(ne,ge)},on=ne=>{var ge=J_(),Te=W(ge);{var Ae=sn=>{var wn=X_();Ee(()=>bt(wn,"href",l[`${g()}__${$()}`])),re(sn,wn)};ht(Te,sn=>{l[`${g()}__${$()}`]&&sn(Ae)})}var he=we(Te,2),Qn=W(he);Ee(()=>{It(he,1,Hr(Y()),"svelte-m8v9hl"),Ve(Qn,Y())}),re(ne,ge)};ht(pe,ne=>{typeof Y()=="number"?ne(qe):ne(on,!1)})}re(ee,xe)}),Ee(()=>Ve(q,`${g()??""} `)),re(f,A)}),re(e,u),bn()}var nm=ve("<h3> </h3> <!>",1),tm=ve(`<div id="main-wrapper" class="svelte-3oks6t"><main class="svelte-3oks6t"><h1>Turing AD tests</h1> <p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p> <p>This page is intended as a brief overview of how different AD
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
                describes the problem.</li></ul> <div class="warning svelte-3oks6t"><b>Note: The results here are run with Julia 1.11. Mooncake and Enzyme currently do not work on Julia 1.12.</b></div> <h2>Results</h2> <p><a href="adtests.json" target="_blank" download="">Download the raw data (JSON)</a></p> <!> <h2>Manifest</h2> <p>The tests above were run with the following package versions:</p> <!></main></div>`);function rm(e,n){hn(n,!1);let t=new Map;for(const[u,a]of Object.entries(ba)){let c=a.__category__;delete a.__category__;let v=new Map;for(const[_,f]of Object.entries(a))v.set(_,f);t.has(c)||t.set(c,new Map),t.get(c).set(u,v)}console.log(t),Lt();var r=tm(),i=W(r),s=we(W(i),16);_n(s,1,()=>t.entries(),dn,(u,a)=>{let c=()=>I(a)[0],v=()=>I(a)[1];var _=nm(),f=Gn(_),p=W(f),g=we(f,2);em(g,{get data(){return v()},modelDefinitions:pl}),Ee(()=>Ve(p,c())),re(u,_)});var l=we(s,6);V_(l,{}),re(e,r),bn()}Ys(rm,{target:document.getElementById("app")});
