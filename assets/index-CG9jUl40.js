(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Qt=!1;var Un=Array.isArray,Uo=Array.prototype.indexOf,wt=Array.from,$o=Object.defineProperty,je=Object.getOwnPropertyDescriptor,vr=Object.getOwnPropertyDescriptors,qo=Object.prototype,Ho=Array.prototype,Et=Object.getPrototypeOf,er=Object.isExtensible;function ln(e){return typeof e=="function"}function Ko(e){return e()}function ut(e){for(var n=0;n<e.length;n++)e[n]()}const me=2,gr=4,$n=8,Dt=16,Ce=32,nn=64,An=128,ce=256,kn=512,se=1024,Re=2048,$e=4096,Fe=8192,qn=16384,Zo=32768,Rt=65536,Go=1<<17,Wo=1<<19,hr=1<<20,dt=1<<21,Ge=Symbol("$state"),br=Symbol("legacy props"),Xo=Symbol("");function yr(e){return e===this.v}function Jo(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Mt(e){return!Jo(e,this.v)}function Yo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function es(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ns(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ts(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function rs(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function os(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ss(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function is(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let gn=!1,as=!1;function ls(){gn=!0}const xt=1,Tt=2,wr=4,cs=8,fs=16,us=1,ds=2,Er=4,_s=8,ms=16,ps=1,vs=2,ie=Symbol(),gs="http://www.w3.org/1999/xhtml",hs="@attach";function Dr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let U=null;function nr(e){U=e}function hn(e,n=!1,t){var r=U={p:U,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};gn&&!n&&(U.l={s:null,u:null,r1:[],r2:Qe(!1)}),Rs(()=>{r.d=!0})}function bn(e){const n=U;if(n!==null){const l=n.e;if(l!==null){var t=P,r=B;n.e=null;try{for(var i=0;i<l.length;i++){var s=l[i];Ue(s.effect),Me(s.reaction),Nt(s.fn)}}finally{Ue(t),Me(r)}}U=n.p,n.m=!0}return{}}function Hn(){return!gn||U!==null&&U.l===null}function Ze(e){if(typeof e!="object"||e===null||Ge in e)return e;const n=Et(e);if(n!==qo&&n!==Ho)return e;var t=new Map,r=Un(e),i=Ie(0),s=B,l=u=>{var a=B;Me(s);var c=u();return Me(a),c};return r&&t.set("length",Ie(e.length)),new Proxy(e,{defineProperty(u,a,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&os();var p=t.get(a);return p===void 0?(p=l(()=>Ie(c.value)),t.set(a,p)):ue(p,l(()=>Ze(c.value))),!0},deleteProperty(u,a){var c=t.get(a);if(c===void 0)a in u&&(t.set(a,l(()=>Ie(ie))),at(i));else{if(r&&typeof a=="string"){var p=t.get("length"),_=Number(a);Number.isInteger(_)&&_<p.v&&ue(p,_)}ue(c,ie),at(i)}return!0},get(u,a,c){var v;if(a===Ge)return e;var p=t.get(a),_=a in u;if(p===void 0&&(!_||(v=je(u,a))!=null&&v.writable)&&(p=l(()=>Ie(Ze(_?u[a]:ie))),t.set(a,p)),p!==void 0){var f=I(p);return f===ie?void 0:f}return Reflect.get(u,a,c)},getOwnPropertyDescriptor(u,a){var c=Reflect.getOwnPropertyDescriptor(u,a);if(c&&"value"in c){var p=t.get(a);p&&(c.value=I(p))}else if(c===void 0){var _=t.get(a),f=_==null?void 0:_.v;if(_!==void 0&&f!==ie)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return c},has(u,a){var f;if(a===Ge)return!0;var c=t.get(a),p=c!==void 0&&c.v!==ie||Reflect.has(u,a);if(c!==void 0||P!==null&&(!p||(f=je(u,a))!=null&&f.writable)){c===void 0&&(c=l(()=>Ie(p?Ze(u[a]):ie)),t.set(a,c));var _=I(c);if(_===ie)return!1}return p},set(u,a,c,p){var q;var _=t.get(a),f=a in u;if(r&&a==="length")for(var v=c;v<_.v;v+=1){var g=t.get(v+"");g!==void 0?ue(g,ie):v in u&&(g=l(()=>Ie(ie)),t.set(v+"",g))}_===void 0?(!f||(q=je(u,a))!=null&&q.writable)&&(_=l(()=>Ie(void 0)),ue(_,l(()=>Ze(c))),t.set(a,_)):(f=_.v!==ie,ue(_,l(()=>Ze(c))));var S=Reflect.getOwnPropertyDescriptor(u,a);if(S!=null&&S.set&&S.set.call(p,c),!f){if(r&&typeof a=="string"){var A=t.get("length"),z=Number(a);Number.isInteger(z)&&z>=A.v&&ue(A,z+1)}at(i)}return!0},ownKeys(u){I(i);var a=Reflect.ownKeys(u).filter(_=>{var f=t.get(_);return f===void 0||f.v!==ie});for(var[c,p]of t)p.v!==ie&&!(c in u)&&a.push(c);return a},setPrototypeOf(){ss()}})}function at(e,n=1){ue(e,e.v+n)}function mn(e){var n=me|Re,t=B!==null&&(B.f&me)!==0?B:null;return P===null||t!==null&&(t.f&ce)!==0?n|=ce:P.f|=hr,{ctx:U,deps:null,effects:null,equals:yr,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??P}}function St(e){const n=mn(e);return n.equals=Mt,n}function Rr(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)Ne(n[t])}}function bs(e){for(var n=e.parent;n!==null;){if((n.f&me)===0)return n;n=n.parent}return null}function Mr(e){var n,t=P;Ue(bs(e));try{Rr(e),n=jr(e)}finally{Ue(t)}return n}function xr(e){var n=Mr(e),t=(ze||(e.f&ce)!==0)&&e.deps!==null?$e:se;de(e,t),e.equals(n)||(e.v=n,e.wv=Br())}const pn=new Map;function Qe(e,n){var t={f:0,v:e,reactions:null,equals:yr,rv:0,wv:0};return t}function Ie(e,n){const t=Qe(e);return Cs(t),t}function Ft(e,n=!1){var r;const t=Qe(e);return n||(t.equals=Mt),gn&&U!==null&&U.l!==null&&((r=U.l).s??(r.s=[])).push(t),t}function ue(e,n,t=!1){B!==null&&!De&&Hn()&&(B.f&(me|Dt))!==0&&!(oe!=null&&oe.includes(e))&&is();let r=t?Ze(n):n;return _t(e,r)}function _t(e,n){if(!e.equals(n)){var t=e.v;yn?pn.set(e,n):pn.set(e,t),e.v=n,(e.f&me)!==0&&((e.f&Re)!==0&&Mr(e),de(e,(e.f&ce)===0?se:$e)),e.wv=Br(),Tr(e,Re),Hn()&&P!==null&&(P.f&se)!==0&&(P.f&(Ce|nn))===0&&(fe===null?As([e]):fe.push(e))}return n}function tr(e,n=1){var t=I(e),r=n===1?t++:t--;return ue(e,t),r}function Tr(e,n){var t=e.reactions;if(t!==null)for(var r=Hn(),i=t.length,s=0;s<i;s++){var l=t[s],u=l.f;(u&Re)===0&&(!r&&l===P||(de(l,n),(u&(se|ce))!==0&&((u&me)!==0?Tr(l,$e):Yn(l))))}}let ys=!1;var rr,Sr,Fr,Nr;function ws(){if(rr===void 0){rr=window,Sr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Fr=je(n,"firstChild").get,Nr=je(n,"nextSibling").get,er(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),er(t)&&(t.__t=void 0)}}function Kn(e=""){return document.createTextNode(e)}function Pe(e){return Fr.call(e)}function Zn(e){return Nr.call(e)}function W(e,n){return Pe(e)}function Gn(e,n){{var t=Pe(e);return t instanceof Comment&&t.data===""?Zn(t):t}}function we(e,n=1,t=!1){let r=e;for(;n--;)r=Zn(r);return r}function Es(e){e.textContent=""}function Cr(e){P===null&&B===null&&es(),B!==null&&(B.f&ce)!==0&&P===null&&Qo(),yn&&Yo()}function Ds(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function tn(e,n,t,r=!0){var i=P,s={ctx:U,deps:null,nodes_start:null,nodes_end:null,f:e|Re,first:null,fn:n,last:null,next:null,parent:i,prev:null,teardown:null,transitions:null,wv:0};if(t)try{Jn(s),s.f|=Zo}catch(a){throw Ne(s),a}else n!==null&&Yn(s);var l=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(hr|An))===0;if(!l&&r&&(i!==null&&Ds(s,i),B!==null&&(B.f&me)!==0)){var u=B;(u.effects??(u.effects=[])).push(s)}return s}function Rs(e){const n=tn($n,null,!1);return de(n,se),n.teardown=e,n}function or(e){Cr();var n=P!==null&&(P.f&Ce)!==0&&U!==null&&!U.m;if(n){var t=U;(t.e??(t.e=[])).push({fn:e,effect:P,reaction:B})}else{var r=Nt(e);return r}}function Ms(e){return Cr(),Ct(e)}function xs(e){const n=tn(nn,e,!0);return(t={})=>new Promise(r=>{t.outro?On(n,()=>{Ne(n),r(void 0)}):(Ne(n),r(void 0))})}function Nt(e){return tn(gr,e,!1)}function Ts(e,n){var t=U,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=Ct(()=>{e(),!r.ran&&(r.ran=!0,ue(t.l.r2,!0),Vn(n))})}function Ss(){var e=U;Ct(()=>{if(I(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&se)!==0&&de(t,$e),rn(t)&&Jn(t),n.ran=!1}e.l.r2.v=!1}})}function Ct(e){return tn($n,e,!0)}function Ee(e,n=[],t=mn){const r=n.map(t);return Wn(()=>e(...r.map(I)))}function Wn(e,n=0){return tn($n|Dt|n,e,!0)}function en(e,n=!0){return tn($n|Ce,e,!0,n)}function Ar(e){var n=e.teardown;if(n!==null){const t=yn,r=B;sr(!0),Me(null);try{n.call(null)}finally{sr(t),Me(r)}}}function kr(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&nn)!==0?t.parent=null:Ne(t,n),t=r}}function Fs(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&Ce)===0&&Ne(n),n=t}}function Ne(e,n=!0){var t=!1;(n||(e.f&Wo)!==0)&&e.nodes_start!==null&&(Or(e.nodes_start,e.nodes_end),t=!0),kr(e,n&&!t),Bn(e,0),de(e,qn);var r=e.transitions;if(r!==null)for(const s of r)s.stop();Ar(e);var i=e.parent;i!==null&&i.first!==null&&Ir(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Or(e,n){for(;e!==null;){var t=e===n?null:Zn(e);e.remove(),e=t}}function Ir(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function On(e,n){var t=[];At(e,t,!0),Lr(t,()=>{Ne(e),n&&n()})}function Lr(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var i of e)i.out(r)}else n()}function At(e,n,t){if((e.f&Fe)===0){if(e.f^=Fe,e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&n.push(l);for(var r=e.first;r!==null;){var i=r.next,s=(r.f&Rt)!==0||(r.f&Ce)!==0;At(r,n,s?t:!1),r=i}}}function In(e){Pr(e,!0)}function Pr(e,n){if((e.f&Fe)!==0){e.f^=Fe,(e.f&se)===0&&(e.f^=se),rn(e)&&(de(e,Re),Yn(e));for(var t=e.first;t!==null;){var r=t.next,i=(t.f&Rt)!==0||(t.f&Ce)!==0;Pr(t,i?n:!1),t=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&s.in()}}let Ln=[];function Ns(){var e=Ln;Ln=[],ut(e)}function kt(e){Ln.length===0&&queueMicrotask(Ns),Ln.push(e)}let Nn=!1,mt=!1,Pn=null,We=!1,yn=!1;function sr(e){yn=e}let Cn=[];let B=null,De=!1;function Me(e){B=e}let P=null;function Ue(e){P=e}let oe=null;function Cs(e){B!==null&&B.f&dt&&(oe===null?oe=[e]:oe.push(e))}let te=null,le=0,fe=null;function As(e){fe=e}let zr=1,zn=0,ze=!1;function Br(){return++zr}function rn(e){var _;var n=e.f;if((n&Re)!==0)return!0;if((n&$e)!==0){var t=e.deps,r=(n&ce)!==0;if(t!==null){var i,s,l=(n&kn)!==0,u=r&&P!==null&&!ze,a=t.length;if(l||u){var c=e,p=c.parent;for(i=0;i<a;i++)s=t[i],(l||!((_=s==null?void 0:s.reactions)!=null&&_.includes(c)))&&(s.reactions??(s.reactions=[])).push(c);l&&(c.f^=kn),u&&p!==null&&(p.f&ce)===0&&(c.f^=ce)}for(i=0;i<a;i++)if(s=t[i],rn(s)&&xr(s),s.wv>e.wv)return!0}(!r||P!==null&&!ze)&&de(e,se)}return!1}function ks(e,n){for(var t=n;t!==null;){if((t.f&An)!==0)try{t.fn(e);return}catch{t.f^=An}t=t.parent}throw Nn=!1,e}function ir(e){return(e.f&qn)===0&&(e.parent===null||(e.parent.f&An)===0)}function Xn(e,n,t,r){if(Nn){if(t===null&&(Nn=!1),ir(n))throw e;return}if(t!==null&&(Nn=!0),ks(e,n),ir(n))throw e}function Vr(e,n,t=!0){var r=e.reactions;if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];oe!=null&&oe.includes(e)||((s.f&me)!==0?Vr(s,n,!1):n===s&&(t?de(s,Re):(s.f&se)!==0&&de(s,$e),Yn(s)))}}function jr(e){var v;var n=te,t=le,r=fe,i=B,s=ze,l=oe,u=U,a=De,c=e.f;te=null,le=0,fe=null,ze=(c&ce)!==0&&(De||!We||B===null),B=(c&(Ce|nn))===0?e:null,oe=null,nr(e.ctx),De=!1,zn++,e.f|=dt;try{var p=(0,e.fn)(),_=e.deps;if(te!==null){var f;if(Bn(e,le),_!==null&&le>0)for(_.length=le+te.length,f=0;f<te.length;f++)_[le+f]=te[f];else e.deps=_=te;if(!ze)for(f=le;f<_.length;f++)((v=_[f]).reactions??(v.reactions=[])).push(e)}else _!==null&&le<_.length&&(Bn(e,le),_.length=le);if(Hn()&&fe!==null&&!De&&_!==null&&(e.f&(me|$e|Re))===0)for(f=0;f<fe.length;f++)Vr(fe[f],e);return i!==null&&i!==e&&(zn++,fe!==null&&(r===null?r=fe:r.push(...fe))),p}finally{te=n,le=t,fe=r,B=i,ze=s,oe=l,nr(u),De=a,e.f^=dt}}function Os(e,n){let t=n.reactions;if(t!==null){var r=Uo.call(t,e);if(r!==-1){var i=t.length-1;i===0?t=n.reactions=null:(t[r]=t[i],t.pop())}}t===null&&(n.f&me)!==0&&(te===null||!te.includes(n))&&(de(n,$e),(n.f&(ce|kn))===0&&(n.f^=kn),Rr(n),Bn(n,0))}function Bn(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Os(e,t[r])}function Jn(e){var n=e.f;if((n&qn)===0){de(e,se);var t=P,r=U,i=We;P=e,We=!0;try{(n&Dt)!==0?Fs(e):kr(e),Ar(e);var s=jr(e);e.teardown=typeof s=="function"?s:null,e.wv=zr;var l=e.deps,u;Qt&&as&&e.f&Re}catch(a){Xn(a,e,t,r||e.ctx)}finally{We=i,P=t}}}function Is(){try{ns()}catch(e){if(Pn!==null)Xn(e,Pn,null);else throw e}}function Ls(){var e=We;try{var n=0;for(We=!0;Cn.length>0;){n++>1e3&&Is();var t=Cn,r=t.length;Cn=[];for(var i=0;i<r;i++){var s=zs(t[i]);Ps(s)}pn.clear()}}finally{mt=!1,We=e,Pn=null}}function Ps(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(qn|Fe))===0)try{rn(r)&&(Jn(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Ir(r):r.fn=null))}catch(i){Xn(i,r,null,r.ctx)}}}function Yn(e){mt||(mt=!0,queueMicrotask(Ls));for(var n=Pn=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(nn|Ce))!==0){if((t&se)===0)return;n.f^=se}}Cn.push(n)}function zs(e){for(var n=[],t=e;t!==null;){var r=t.f,i=(r&(Ce|nn))!==0,s=i&&(r&se)!==0;if(!s&&(r&Fe)===0){if((r&gr)!==0)n.push(t);else if(i)t.f^=se;else try{rn(t)&&Jn(t)}catch(a){Xn(a,t,null,t.ctx)}var l=t.first;if(l!==null){t=l;continue}}var u=t.parent;for(t=t.next;t===null&&u!==null;)t=u.next,u=u.parent}return n}function I(e){var n=e.f,t=(n&me)!==0;if(B!==null&&!De){if(!(oe!=null&&oe.includes(e))){var r=B.deps;e.rv<zn&&(e.rv=zn,te===null&&r!==null&&r[le]===e?le++:te===null?te=[e]:(!ze||!te.includes(e))&&te.push(e))}}else if(t&&e.deps===null&&e.effects===null){var i=e,s=i.parent;s!==null&&(s.f&ce)===0&&(i.f^=ce)}return t&&(i=e,rn(i)&&xr(i)),yn&&pn.has(e)?pn.get(e):e.v}function Vn(e){var n=De;try{return De=!0,e()}finally{De=n}}const Bs=-7169;function de(e,n){e.f=e.f&Bs|n}function pt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ge in e)vt(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&Ge in t&&vt(t)}}}function vt(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{vt(e[r],n)}catch{}const t=Et(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=vr(t);for(let i in r){const s=r[i].get;if(s)try{s.call(e)}catch{}}}}}function Vs(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const js=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Us(e){return js.includes(e)}const $s={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function qs(e){return e=e.toLowerCase(),$s[e]??e}const Hs=["touchstart","touchmove"];function Ks(e){return Hs.includes(e)}function Zs(e,n){if(n){const t=document.body;e.autofocus=!0,kt(()=>{document.activeElement===t&&e.focus()})}}function Gs(e){var n=B,t=P;Me(null),Ue(null);try{return e()}finally{Me(n),Ue(t)}}const Ur=new Set,gt=new Set;function Ws(e,n,t,r={}){function i(s){if(r.capture||fn.call(n,s),!s.cancelBubble)return Gs(()=>t==null?void 0:t.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?kt(()=>{n.addEventListener(e,i,r)}):n.addEventListener(e,i,r),i}function Xs(e){for(var n=0;n<e.length;n++)Ur.add(e[n]);for(var t of gt)t(e)}function fn(e){var q;var n=this,t=n.ownerDocument,r=e.type,i=((q=e.composedPath)==null?void 0:q.call(e))||[],s=i[0]||e.target,l=0,u=e.__root;if(u){var a=i.indexOf(u);if(a!==-1&&(n===document||n===window)){e.__root=n;return}var c=i.indexOf(n);if(c===-1)return;a<=c&&(l=a)}if(s=i[l]||e.target,s!==n){$o(e,"currentTarget",{configurable:!0,get(){return s||t}});var p=B,_=P;Me(null),Ue(null);try{for(var f,v=[];s!==null;){var g=s.assignedSlot||s.parentNode||s.host||null;try{var S=s["__"+r];if(S!=null&&(!s.disabled||e.target===s))if(Un(S)){var[A,...z]=S;A.apply(s,[e,...z])}else S.call(s,e)}catch(x){f?v.push(x):f=x}if(e.cancelBubble||g===n||g===null)break;s=g}if(f){for(let x of v)queueMicrotask(()=>{throw x});throw f}}finally{e.__root=n,delete e.currentTarget,Me(p),Ue(_)}}}function $r(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function vn(e,n){var t=P;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function pe(e,n){var t=(n&ps)!==0,r=(n&vs)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=$r(s?e:"<!>"+e),t||(i=Pe(i)));var l=r||Sr?document.importNode(i,!0):i.cloneNode(!0);if(t){var u=Pe(l),a=l.lastChild;vn(u,a)}else vn(l,l);return l}}function Js(e=""){{var n=Kn(e+"");return vn(n,n),n}}function Ot(){var e=document.createDocumentFragment(),n=document.createComment(""),t=Kn();return e.append(n,t),vn(n,t),e}function re(e,n){e!==null&&e.before(n)}function Be(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function Ys(e,n){return Qs(e,n)}const Ye=new Map;function Qs(e,{target:n,anchor:t,props:r={},events:i,context:s,intro:l=!0}){ws();var u=new Set,a=_=>{for(var f=0;f<_.length;f++){var v=_[f];if(!u.has(v)){u.add(v);var g=Ks(v);n.addEventListener(v,fn,{passive:g});var S=Ye.get(v);S===void 0?(document.addEventListener(v,fn,{passive:g}),Ye.set(v,1)):Ye.set(v,S+1)}}};a(wt(Ur)),gt.add(a);var c=void 0,p=xs(()=>{var _=t??n.appendChild(Kn());return en(()=>{if(s){hn({});var f=U;f.c=s}i&&(r.$$events=i),c=e(_,r)||{},s&&bn()}),()=>{var g;for(var f of u){n.removeEventListener(f,fn);var v=Ye.get(f);--v===0?(document.removeEventListener(f,fn),Ye.delete(f)):Ye.set(f,v)}gt.delete(a),_!==t&&((g=_.parentNode)==null||g.removeChild(_))}});return ei.set(c,p),c}let ei=new WeakMap;function ht(e,n,[t,r]=[0,0]){var i=e,s=null,l=null,u=ie,a=t>0?Rt:0,c=!1;const p=(f,v=!0)=>{c=!0,_(v,f)},_=(f,v)=>{u!==(u=f)&&(u?(s?In(s):v&&(s=en(()=>v(i))),l&&On(l,()=>{l=null})):(l?In(l):v&&(l=en(()=>v(i,[t+1,r]))),s&&On(s,()=>{s=null})))};Wn(()=>{c=!1,n(p),c||_(null,null)},a)}function dn(e,n){return n}function ni(e,n,t,r){for(var i=[],s=n.length,l=0;l<s;l++)At(n[l].e,i,!0);var u=s>0&&i.length===0&&t!==null;if(u){var a=t.parentNode;Es(a),a.append(t),r.clear(),Le(e,n[0].prev,n[s-1].next)}Lr(i,()=>{for(var c=0;c<s;c++){var p=n[c];u||(r.delete(p.k),Le(e,p.prev,p.next)),Ne(p.e,!u)}})}function _n(e,n,t,r,i,s=null){var l=e,u={flags:n,items:new Map,first:null},a=(n&wr)!==0;if(a){var c=e;l=c.appendChild(Kn())}var p=null,_=!1,f=St(()=>{var v=t();return Un(v)?v:v==null?[]:wt(v)});Wn(()=>{var v=I(f),g=v.length;_&&g===0||(_=g===0,ti(v,u,l,i,n,r,t),s!==null&&(g===0?p?In(p):p=en(()=>s(l)):p!==null&&On(p,()=>{p=null})),I(f))})}function ti(e,n,t,r,i,s,l){var ne,ge,Te,Ae;var u=(i&cs)!==0,a=(i&(xt|Tt))!==0,c=e.length,p=n.items,_=n.first,f=_,v,g=null,S,A=[],z=[],q,x,D,M;if(u)for(M=0;M<c;M+=1)q=e[M],x=s(q,M),D=p.get(x),D!==void 0&&((ne=D.a)==null||ne.measure(),(S??(S=new Set)).add(D));for(M=0;M<c;M+=1){if(q=e[M],x=s(q,M),D=p.get(x),D===void 0){var ee=f?f.e.nodes_start:t;g=oi(ee,n,g,g===null?n.first:g.next,q,x,M,r,i,l),p.set(x,g),A=[],z=[],f=g.next;continue}if(a&&ri(D,q,M,i),(D.e.f&Fe)!==0&&(In(D.e),u&&((ge=D.a)==null||ge.unfix(),(S??(S=new Set)).delete(D))),D!==f){if(v!==void 0&&v.has(D)){if(A.length<z.length){var F=z[0],$;g=F.prev;var Y=A[0],xe=A[A.length-1];for($=0;$<A.length;$+=1)ar(A[$],F,t);for($=0;$<z.length;$+=1)v.delete(z[$]);Le(n,Y.prev,xe.next),Le(n,g,Y),Le(n,xe,F),f=F,g=xe,M-=1,A=[],z=[]}else v.delete(D),ar(D,f,t),Le(n,D.prev,D.next),Le(n,D,g===null?n.first:g.next),Le(n,g,D),g=D;continue}for(A=[],z=[];f!==null&&f.k!==x;)(f.e.f&Fe)===0&&(v??(v=new Set)).add(f),z.push(f),f=f.next;if(f===null)continue;D=f}A.push(D),g=D,f=D.next}if(f!==null||v!==void 0){for(var ve=v===void 0?[]:wt(v);f!==null;)(f.e.f&Fe)===0&&ve.push(f),f=f.next;var qe=ve.length;if(qe>0){var on=(i&wr)!==0&&c===0?t:null;if(u){for(M=0;M<qe;M+=1)(Te=ve[M].a)==null||Te.measure();for(M=0;M<qe;M+=1)(Ae=ve[M].a)==null||Ae.fix()}ni(n,ve,on,p)}}u&&kt(()=>{var he;if(S!==void 0)for(D of S)(he=D.a)==null||he.apply()}),P.first=n.first&&n.first.e,P.last=g&&g.e}function ri(e,n,t,r){(r&xt)!==0&&_t(e.v,n),(r&Tt)!==0?_t(e.i,t):e.i=t}function oi(e,n,t,r,i,s,l,u,a,c){var p=(a&xt)!==0,_=(a&fs)===0,f=p?_?Ft(i):Qe(i):i,v=(a&Tt)===0?l:Qe(l),g={i:v,v:f,k:s,a:null,e:null,prev:t,next:r};try{return g.e=en(()=>u(e,f,v,c),ys),g.e.prev=t&&t.e,g.e.next=r&&r.e,t===null?n.first=g:(t.next=g,t.e.next=g.e),r!==null&&(r.prev=g,r.e.prev=g.e),g}finally{}}function ar(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,i=n?n.e.nodes_start:t,s=e.e.nodes_start;s!==r;){var l=Zn(s);i.before(s),s=l}}function Le(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function si(e,n,t=!1,r=!1,i=!1){var s=e,l="";Ee(()=>{var u=P;if(l!==(l=n()??"")&&(u.nodes_start!==null&&(Or(u.nodes_start,u.nodes_end),u.nodes_start=u.nodes_end=null),l!=="")){var a=l+"";t?a=`<svg>${a}</svg>`:r&&(a=`<math>${a}</math>`);var c=$r(a);if((t||r)&&(c=Pe(c)),vn(Pe(c),c.lastChild),t||r)for(;Pe(c);)s.before(Pe(c));else s.before(c)}})}function ii(e,n,t,r,i){var u;var s=(u=n.$$slots)==null?void 0:u[t],l=!1;s===!0&&(s=n.children,l=!0),s===void 0?i!==null&&i(e):s(e,l?()=>r:r)}function ai(e,n){var t=void 0,r;Wn(()=>{t!==(t=n())&&(r&&(Ne(r),r=null),t&&(r=en(()=>{Nt(()=>t(e))})))})}function qr(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=qr(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function li(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=qr(e))&&(r&&(r+=" "),r+=n);return r}function Hr(e){return typeof e=="object"?li(e):e??""}const lr=[...` 	
\r\f \v\uFEFF`];function ci(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var i in t)if(t[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,l=0;(l=r.indexOf(i,l))>=0;){var u=l+s;(l===0||lr.includes(r[l-1]))&&(u===r.length||lr.includes(r[u]))?r=(l===0?"":r.substring(0,l))+r.substring(u+1):l=u}}return r===""?null:r}function cr(e,n=!1){var t=n?" !important;":";",r="";for(var i in e){var s=e[i];s!=null&&s!==""&&(r+=" "+i+": "+s+t)}return r}function lt(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function fi(e,n){if(n){var t="",r,i;if(Array.isArray(n)?(r=n[0],i=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,l=0,u=!1,a=[];r&&a.push(...Object.keys(r).map(lt)),i&&a.push(...Object.keys(i).map(lt));var c=0,p=-1;const S=e.length;for(var _=0;_<S;_++){var f=e[_];if(u?f==="/"&&e[_-1]==="*"&&(u=!1):s?s===f&&(s=!1):f==="/"&&e[_+1]==="*"?u=!0:f==='"'||f==="'"?s=f:f==="("?l++:f===")"&&l--,!u&&s===!1&&l===0){if(f===":"&&p===-1)p=_;else if(f===";"||_===S-1){if(p!==-1){var v=lt(e.substring(c,p).trim());if(!a.includes(v)){f!==";"&&_++;var g=e.substring(c,_).trim();t+=" "+g+";"}}c=_+1,p=-1}}}}return r&&(t+=cr(r)),i&&(t+=cr(i,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function It(e,n,t,r,i,s){var l=e.__className;if(l!==t||l===void 0){var u=ci(t,r,s);u==null?e.removeAttribute("class"):n?e.className=u:e.setAttribute("class",u),e.__className=t}else if(s&&i!==s)for(var a in s){var c=!!s[a];(i==null||c!==!!i[a])&&e.classList.toggle(a,c)}return s}function ct(e,n={},t,r){for(var i in t){var s=t[i];n[i]!==s&&(t[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function ui(e,n,t,r){var i=e.__style;if(i!==n){var s=fi(n,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=n}else r&&(Array.isArray(r)?(ct(e,t==null?void 0:t[0],r[0]),ct(e,t==null?void 0:t[1],r[1],"important")):ct(e,t,r));return r}const un=Symbol("class"),cn=Symbol("style"),Kr=Symbol("is custom element"),Zr=Symbol("is html");function di(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function bt(e,n,t,r){var i=Gr(e);i[n]!==(i[n]=t)&&(n==="loading"&&(e[Xo]=t),t==null?e.removeAttribute(n):typeof t!="string"&&Wr(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function _i(e,n,t,r,i=!1){var s=Gr(e),l=s[Kr],u=!s[Zr],a=n||{},c=e.tagName==="OPTION";for(var p in n)p in t||(t[p]=null);t.class?t.class=Hr(t.class):t.class=null,t[cn]&&(t.style??(t.style=null));var _=Wr(e);for(const x in t){let D=t[x];if(c&&x==="value"&&D==null){e.value=e.__value="",a[x]=D;continue}if(x==="class"){var f=e.namespaceURI==="http://www.w3.org/1999/xhtml";It(e,f,D,r,n==null?void 0:n[un],t[un]),a[x]=D,a[un]=t[un];continue}if(x==="style"){ui(e,D,n==null?void 0:n[cn],t[cn]),a[x]=D,a[cn]=t[cn];continue}var v=a[x];if(D!==v){a[x]=D;var g=x[0]+x[1];if(g!=="$$")if(g==="on"){const M={},ee="$$"+x;let F=x.slice(2);var S=Us(F);if(Vs(F)&&(F=F.slice(0,-7),M.capture=!0),!S&&v){if(D!=null)continue;e.removeEventListener(F,a[ee],M),a[ee]=null}if(D!=null)if(S)e[`__${F}`]=D,Xs([F]);else{let $=function(Y){a[x].call(this,Y)};var q=$;a[ee]=Ws(F,e,$,M)}else S&&(e[`__${F}`]=void 0)}else if(x==="style")bt(e,x,D);else if(x==="autofocus")Zs(e,!!D);else if(!l&&(x==="__value"||x==="value"&&D!=null))e.value=e.__value=D;else if(x==="selected"&&c)di(e,D);else{var A=x;u||(A=qs(A));var z=A==="defaultValue"||A==="defaultChecked";if(D==null&&!l&&!z)if(s[x]=null,A==="value"||A==="checked"){let M=e;const ee=n===void 0;if(A==="value"){let F=M.defaultValue;M.removeAttribute(A),M.defaultValue=F,M.value=M.__value=ee?F:null}else{let F=M.defaultChecked;M.removeAttribute(A),M.defaultChecked=F,M.checked=ee?F:!1}}else e.removeAttribute(x);else z||_.includes(A)&&(l||typeof D!="string")?e[A]=D:typeof D!="function"&&bt(e,A,D)}}}for(let x of Object.getOwnPropertySymbols(t))x.description===hs&&ai(e,()=>t[x]);return a}function Gr(e){return e.__attributes??(e.__attributes={[Kr]:e.nodeName.includes("-"),[Zr]:e.namespaceURI===gs})}var fr=new Map;function Wr(e){var n=fr.get(e.nodeName);if(n)return n;fr.set(e.nodeName,n=[]);for(var t,r=e,i=Element.prototype;i!==r;){t=vr(r);for(var s in t)t[s].set&&n.push(s);r=Et(r)}return n}function Lt(e=!1){const n=U,t=n.l.u;if(!t)return;let r=()=>pt(n.s);if(e){let i=0,s={};const l=mn(()=>{let u=!1;const a=n.s;for(const c in a)a[c]!==s[c]&&(s[c]=a[c],u=!0);return u&&i++,i});r=()=>I(l)}t.b.length&&Ms(()=>{ur(n,r),ut(t.b)}),or(()=>{const i=Vn(()=>t.m.map(Ko));return()=>{for(const s of i)typeof s=="function"&&s()}}),t.a.length&&or(()=>{ur(n,r),ut(t.a)})}function ur(e,n){if(e.l.s)for(const t of e.l.s)I(t);n()}let Fn=!1;function mi(e){var n=Fn;try{return Fn=!1,[e(),Fn]}finally{Fn=n}}const pi={get(e,n){if(!e.exclude.includes(n))return I(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=Ve({get[n](){return e.props[n]}},n,Er)),e.special[n](t),tr(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),tr(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function jn(e,n){return new Proxy({props:e,exclude:n,special:{},version:Qe(0)},pi)}const vi={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let i=e.props[r];ln(i)&&(i=i());const s=je(i,n);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const i=je(r,n);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,n){if(n===Ge||n===br)return!1;for(let t of e.props)if(ln(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(ln(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function gi(...e){return new Proxy({props:e},vi)}function dr(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function Ve(e,n,t,r){var ee;var i=(t&us)!==0,s=!gn||(t&ds)!==0,l=(t&_s)!==0,u=(t&ms)!==0,a=!1,c;l?[c,a]=mi(()=>e[n]):c=e[n];var p=Ge in e||br in e,_=l&&(((ee=je(e,n))==null?void 0:ee.set)??(p&&n in e&&(F=>e[n]=F)))||void 0,f=r,v=!0,g=!1,S=()=>(g=!0,v&&(v=!1,u?f=Vn(r):f=r),f);c===void 0&&r!==void 0&&(_&&s&&rs(),c=S(),_&&_(c));var A;if(s)A=()=>{var F=e[n];return F===void 0?S():(v=!0,g=!1,F)};else{var z=(i?mn:St)(()=>e[n]);z.f|=Go,A=()=>{var F=I(z);return F!==void 0&&(f=void 0),F===void 0?f:F}}if((t&Er)===0)return A;if(_){var q=e.$$legacy;return function(F,$){return arguments.length>0?((!s||!$||q||a)&&_($?A():F),F):A()}}var x=!1,D=Ft(c),M=mn(()=>{var F=A(),$=I(D);return x?(x=!1,$):D.v=F});return l&&I(M),i||(M.equals=Mt),function(F,$){if(arguments.length>0){const Y=$?I(M):s&&l?Ze(F):F;if(!M.equals(Y)){if(x=!0,ue(D,Y),g&&f!==void 0&&(f=Y),dr(M))return F;Vn(()=>I(M))}return F}return dr(M)?M.v:I(M)}}function hi(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function bi(){const e=U;return e===null&&Dr(),(n,t,r)=>{var s;const i=(s=e.s.$$events)==null?void 0:s[n];if(i){const l=Un(i)?i.slice():[i],u=hi(n,t,r);for(const a of l)a.call(e.x,u);return!u.defaultPrevented}return!0}}function yi(e){U===null&&Dr(),U.l===null&&ts(),wi(U).a.push(e)}function wi(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Ei="5";var pr;typeof window<"u"&&((pr=window.__svelte??(window.__svelte={})).v??(pr.v=new Set)).add(Ei);ls();const Di={__category__:"Distributions",EnzymeForward:2.72446318556954,EnzymeReverse:2.900424308787297,FiniteDifferences:23.716282278394768,ForwardDiff:1.6427247946901316,MooncakeForward:13.400346212668694,MooncakeReverse:5.4693768321513,ReverseDiff:31.641198016198018,ReverseDiffCompiled:2.9042450232694135,Zygote:1651.140010150567},Ri={__category__:"Distributions",EnzymeForward:2.652589452263863,EnzymeReverse:2.6889136013686916,FiniteDifferences:21.70607356715141,ForwardDiff:1.2872717346739662,MooncakeForward:6.353401635977421,MooncakeReverse:7.1335314863012655,ReverseDiff:31.539108149666834,ReverseDiffCompiled:2.9867192636423403,Zygote:"error"},Mi={__category__:"DynamicPPL demo models",EnzymeForward:3.0018275363488907,EnzymeReverse:2.8279641821873276,FiniteDifferences:37.36427850655903,ForwardDiff:1.3891485163000017,MooncakeForward:23.542149593261822,MooncakeReverse:6.442548993118242,ReverseDiff:30.15502696722445,ReverseDiffCompiled:3.2231968471939774,Zygote:"error"},xi={__category__:"DynamicPPL demo models",EnzymeForward:2.755594104022716,EnzymeReverse:2.42005346656428,FiniteDifferences:36.64503202261262,ForwardDiff:1.297209202475938,MooncakeForward:20.148227898657684,MooncakeReverse:6.086778361587522,ReverseDiff:26.603182188241124,ReverseDiffCompiled:2.7254101428767057,Zygote:2181.640903852199},Ti={__category__:"DynamicPPL demo models",EnzymeForward:3.6257115677895717,EnzymeReverse:3.246268656716418,FiniteDifferences:61.45047878660796,ForwardDiff:1.341307312978701,MooncakeForward:25.190910644114133,MooncakeReverse:5.2576943740885715,ReverseDiff:22.821586136307484,ReverseDiffCompiled:2.1868911772891733,Zygote:"error"},Si={__category__:"DynamicPPL demo models",EnzymeForward:3.8388018076079113,EnzymeReverse:4.127678054429646,FiniteDifferences:65.33102569466898,ForwardDiff:1.3966113496130113,MooncakeForward:40.38519663403743,MooncakeReverse:7.372765321375186,ReverseDiff:48.561719066750214,ReverseDiffCompiled:2.816143415810825,Zygote:"error"},Fi={__category__:"DynamicPPL demo models",EnzymeForward:4.437973872494927,EnzymeReverse:4.1217271806740925,FiniteDifferences:68.7728168850748,ForwardDiff:1.406622256572571,MooncakeForward:35.262458471760795,MooncakeReverse:7.4826940874035985,ReverseDiff:51.50567536889898,ReverseDiffCompiled:3.0058275490887496,Zygote:1737.746953958955},Ni={__category__:"DynamicPPL demo models",EnzymeForward:4.6734680208485555,EnzymeReverse:3.829153879877247,FiniteDifferences:66.66929075380617,ForwardDiff:1.4456867594404046,MooncakeForward:34.14371587523037,MooncakeReverse:7.1889807019965035,ReverseDiff:50.04207385303991,ReverseDiffCompiled:2.9111977508193667,Zygote:1529.8283755311932},Ci={__category__:"DynamicPPL demo models",EnzymeForward:2.8992351444923337,EnzymeReverse:2.5622039339728957,FiniteDifferences:37.06320789185239,ForwardDiff:1.3665206527439306,MooncakeForward:20.051478260869565,MooncakeReverse:5.9293665158371045,ReverseDiff:28.27060998151572,ReverseDiffCompiled:3.157916503417352,Zygote:2347.9295154185024},Ai={__category__:"DynamicPPL demo models",EnzymeForward:3.65911623325241,EnzymeReverse:3.5638467254007007,FiniteDifferences:59.1666070406411,ForwardDiff:1.305451533919055,MooncakeForward:23.22107019848738,MooncakeReverse:4.390449074673224,ReverseDiff:29.019318428478403,ReverseDiffCompiled:2.1291451709292253,Zygote:"error"},ki={__category__:"DynamicPPL demo models",EnzymeForward:4.322209625998606,EnzymeReverse:3.953983445421624,FiniteDifferences:62.071279128490005,ForwardDiff:1.289862284929338,MooncakeForward:32.35776531784098,MooncakeReverse:6.776166220308425,ReverseDiff:41.38151852774713,ReverseDiffCompiled:2.602369302086016,Zygote:"error"},Oi={__category__:"DynamicPPL demo models",EnzymeForward:4.07646405772967,EnzymeReverse:4.314386317907444,FiniteDifferences:62.91531217046653,ForwardDiff:1.3462252673368764,MooncakeForward:27.417152373022482,MooncakeReverse:5.803416192195529,ReverseDiff:35.822620251336126,ReverseDiffCompiled:2.5970389889057874,Zygote:"error"},Ii={__category__:"Distributions",EnzymeForward:4.592526075844443,EnzymeReverse:6.244526823809191,FiniteDifferences:154.0549009367758,ForwardDiff:2.4510350595943398,MooncakeForward:42.091161907345864,MooncakeReverse:6.179600194349968,ReverseDiff:59.383171851096385,ReverseDiffCompiled:6.6841339155749635,Zygote:"error"},Li={__category__:"DynamicPPL demo models",EnzymeForward:3.8993656596064943,EnzymeReverse:3.3573681838666065,FiniteDifferences:64.14545060031824,ForwardDiff:1.3442984842596188,MooncakeForward:28.09338594513341,MooncakeReverse:5.683727730963099,ReverseDiff:37.17048495289762,ReverseDiffCompiled:2.7208202171683227,Zygote:"error"},Pi={__category__:"DynamicPPL demo models",EnzymeForward:4.064733539435427,EnzymeReverse:3.9387481371087927,FiniteDifferences:62.75194490043537,ForwardDiff:1.288669517102616,MooncakeForward:29.06487413787067,MooncakeReverse:5.744765355537749,ReverseDiff:39.278294348394596,ReverseDiffCompiled:2.4360105164956325,Zygote:"error"},zi={__category__:"DynamicPPL demo models",EnzymeForward:3.532559837104768,EnzymeReverse:3.642706081120996,FiniteDifferences:58.99021695967654,ForwardDiff:1.2939884854597412,MooncakeForward:23.413648560955505,MooncakeReverse:4.091807141562443,ReverseDiff:33.00064790151897,ReverseDiffCompiled:1.89060210426265,Zygote:"error"},Bi={__category__:"Core Turing syntax",EnzymeForward:2.8964221005906743,EnzymeReverse:1.8829945050229635,FiniteDifferences:79.77813084772093,ForwardDiff:1.4251304526467163,MooncakeForward:23.473397570171763,MooncakeReverse:4.7934673534921055,ReverseDiff:20.376103426704663,ReverseDiffCompiled:1.9065755320989792,Zygote:"error"},Vi={__category__:"Core Turing syntax",EnzymeForward:2.983100362343816,EnzymeReverse:2.38685116925494,FiniteDifferences:27.91459629452383,ForwardDiff:1.6306485276439462,MooncakeForward:12.228906262142713,MooncakeReverse:7.211319103865902,ReverseDiff:56.31219834374842,ReverseDiffCompiled:5.370131960090119,Zygote:"error"},ji={__category__:"DynamicPPL arXiV paper",EnzymeForward:1.5870322753581463,EnzymeReverse:2.211300434013824,FiniteDifferences:27.516285901974378,ForwardDiff:1.5788169826494487,MooncakeForward:4.167276504769722,MooncakeReverse:9.647657311723016,ReverseDiff:127.44443442423369,ReverseDiffCompiled:21.77353468269028,Zygote:26.872472700714322},Ui={__category__:"DynamicPPL arXiV paper",EnzymeForward:4.779464413575827,EnzymeReverse:1.908816761957886,FiniteDifferences:165.62954971857414,ForwardDiff:5.500561587420442,MooncakeForward:45.97414333665302,MooncakeReverse:4.696856165499267,ReverseDiff:28.285599105784915,ReverseDiffCompiled:2.246618525713867,Zygote:594.7162984133963},$i={__category__:"DynamicPPL arXiV paper",EnzymeForward:12312.796238758565,EnzymeReverse:2.3292660336176416,FiniteDifferences:124196.20327902652,ForwardDiff:3689.895638830699,MooncakeForward:21752.941771830272,MooncakeReverse:3.7668773853980317,ReverseDiff:1.8806603814123775,ReverseDiffCompiled:.43579243632491094,Zygote:7.263576727774925},qi={__category__:"DynamicPPL arXiV paper",EnzymeForward:34.562172908108884,EnzymeReverse:8.97970991969444,FiniteDifferences:"NaN",ForwardDiff:34.774382979747536,MooncakeForward:188.67077938232262,MooncakeReverse:4.862638997138251,ReverseDiff:73.29982090915647,ReverseDiffCompiled:12.095878808993218,Zygote:"error"},Hi={__category__:"DynamicPPL arXiV paper",EnzymeForward:"error",EnzymeReverse:3.2232015109025354,FiniteDifferences:3475.742186198117,ForwardDiff:194.2548616680032,MooncakeForward:462.11657179723255,MooncakeReverse:9.860696625628979,ReverseDiff:83.91790854068594,ReverseDiffCompiled:11.861004118742615,Zygote:"error"},Ki={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:4.100662757208786,FiniteDifferences:40.06348018370471,ForwardDiff:1.1710015252553918,MooncakeForward:19.679571835684992,MooncakeReverse:9.151282235471589,ReverseDiff:15.183590439057468,ReverseDiffCompiled:1.3876226377412186,Zygote:838.8041778143651},Zi={__category__:"DynamicPPL arXiV paper",EnzymeForward:41.46900973723852,EnzymeReverse:3.1637475732208844,FiniteDifferences:1165.1986607832703,ForwardDiff:55.034958905634255,MooncakeForward:557.9717650714126,MooncakeReverse:5.018293595637763,ReverseDiff:63.25854386657033,ReverseDiffCompiled:6.856060138713857,Zygote:160.3632554637449},Gi={__category__:"DynamicPPL arXiV paper",EnzymeForward:214.22823074934587,EnzymeReverse:1.6924388336575462,FiniteDifferences:2792.44014825598,ForwardDiff:146.9743236890408,MooncakeForward:424.0529878939237,MooncakeReverse:4.748089101114763,ReverseDiff:176.12842331393452,ReverseDiffCompiled:19.166695042200356,Zygote:5025.839544468858},Wi={__category__:"DynamicPPL arXiV paper",EnzymeForward:202.77244334581624,EnzymeReverse:1.7017244820566044,FiniteDifferences:6921.336137804537,ForwardDiff:75.37037295609038,MooncakeForward:1122.0989964963528,MooncakeReverse:3.3668068068068067,ReverseDiff:33.5272605422412,ReverseDiffCompiled:3.2371152118886255,Zygote:"error"},Xi={__category__:"Core Turing syntax",EnzymeForward:2.6080205655526996,EnzymeReverse:2.5678787131763836,FiniteDifferences:42.00503216042376,ForwardDiff:1.3272811664208473,MooncakeForward:19.158487010834484,MooncakeReverse:5.358540911051816,ReverseDiff:31.985960129493947,ReverseDiffCompiled:2.576154320138921,Zygote:1795.7546316243},Ji={__category__:"Integrations with other packages",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:25.86127063343943,ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Yi={__category__:"Core Turing syntax",EnzymeForward:3.0998303419948208,EnzymeReverse:2.2654669364284956,FiniteDifferences:61.437321502344034,ForwardDiff:1.275420118557729,MooncakeForward:22.520188350450482,MooncakeReverse:12.460091869862541,ReverseDiff:29.480471025043677,ReverseDiffCompiled:2.3782282211666588,Zygote:"error"},Qi={__category__:"Base Julia features",EnzymeForward:2.683893859919778,EnzymeReverse:9.864070398801722,FiniteDifferences:14.648355493351994,ForwardDiff:.941820987654321,MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"wrong",ReverseDiffCompiled:.32132146788791816,Zygote:"error"},ea={__category__:"Effect of model size",EnzymeForward:4.229804315102861,EnzymeReverse:1.7131943452805938,FiniteDifferences:139.04419285437166,ForwardDiff:1.7261178845351355,MooncakeForward:35.212780998162025,MooncakeReverse:4.478687278256462,ReverseDiff:20.869984607491023,ReverseDiffCompiled:1.9067618918587619,Zygote:"error"},na={__category__:"Effect of model size",EnzymeForward:18.144819690898682,EnzymeReverse:1.599700710811822,FiniteDifferences:622.4448921284935,ForwardDiff:8.778329982169277,MooncakeForward:118.34500000000001,MooncakeReverse:4.128603435399552,ReverseDiff:20.723582089552238,ReverseDiffCompiled:1.8584603941985869,Zygote:"error"},ta={__category__:"Effect of model size",EnzymeForward:36.63508623698179,EnzymeReverse:1.5794327025930432,FiniteDifferences:1254.5536615453627,ForwardDiff:20.282071563088515,MooncakeForward:233.3082485875706,MooncakeReverse:4.050055824339411,ReverseDiff:21.070298835175468,ReverseDiffCompiled:2.05358515427693,Zygote:"error"},ra={__category__:"Distributions",EnzymeForward:2.9579963272801466,EnzymeReverse:2.3458833264377326,FiniteDifferences:27.414325833192354,ForwardDiff:1.4512739890942568,MooncakeForward:12.024850452914032,MooncakeReverse:6.0942159108485745,ReverseDiff:21.419224903210665,ReverseDiffCompiled:2.167590096577327,Zygote:2130.172208216938},oa={__category__:"Effect of model size",EnzymeForward:181.95445786597642,EnzymeReverse:1.5546929722157365,FiniteDifferences:6626.651144049503,ForwardDiff:84.70005756223917,MooncakeForward:1226.693763109456,MooncakeReverse:4.1028347824817315,ReverseDiff:20.228128476898753,ReverseDiffCompiled:1.928000116128845,Zygote:"error"},sa={__category__:"Distributions",EnzymeForward:2.606118768078952,EnzymeReverse:2.8522023168103448,FiniteDifferences:21.41783345615328,ForwardDiff:1.5636363636363637,MooncakeForward:9.010660691247367,MooncakeReverse:4.968553373185311,ReverseDiff:34.20328869299881,ReverseDiffCompiled:3.2389512153663094,Zygote:"error"},ia={__category__:"Distributions",EnzymeForward:2.0325097972397344,EnzymeReverse:5.966761245854062,FiniteDifferences:18.485364917666757,ForwardDiff:1.285,MooncakeForward:8.707851964201195,MooncakeReverse:7.710064619232908,ReverseDiff:12.552124879658919,ReverseDiffCompiled:2.5854723398348023,Zygote:"error"},aa={__category__:"Core Turing syntax",EnzymeForward:3.0388223442819435,EnzymeReverse:2.8682589824929323,FiniteDifferences:26.89626717713817,ForwardDiff:1.668709291151847,MooncakeForward:16.1416006146878,MooncakeReverse:7.102257958306619,ReverseDiff:56.834479371316306,ReverseDiffCompiled:5.070264711074271,Zygote:"error"},la={__category__:"Core Turing syntax",EnzymeForward:2.907414876089791,EnzymeReverse:2.560580298754044,FiniteDifferences:29.169402069086445,ForwardDiff:1.5329583747818574,MooncakeForward:12.46021405440793,MooncakeReverse:6.992742421666075,ReverseDiff:35.24401629604481,ReverseDiffCompiled:3.181512630036957,Zygote:2965.649270011747},ca={__category__:"Core Turing syntax",EnzymeForward:2.7846830788587873,EnzymeReverse:2.6541535332994406,FiniteDifferences:48.83206421074295,ForwardDiff:1.375890616116373,MooncakeForward:18.013750681570336,MooncakeReverse:5.31905261528406,ReverseDiff:25.164686229937313,ReverseDiffCompiled:2.451574016670111,Zygote:"error"},fa={__category__:"Core Turing syntax",EnzymeForward:2.691398723801687,EnzymeReverse:2.1727198634330693,FiniteDifferences:25.666811891337776,ForwardDiff:1.4186920418141964,MooncakeForward:9.50023133185916,MooncakeReverse:5.544879284146547,ReverseDiff:26.288248855914578,ReverseDiffCompiled:2.5202870520255516,Zygote:3248.6385833852114},ua={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:21.038009204022497,ForwardDiff:"NaN",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"NaN",ReverseDiffCompiled:3.3013328455869777,Zygote:1948.0620588741608},da={__category__:"Integrations with other packages",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:62.539499640493354,ForwardDiff:6.380408863167483,MooncakeForward:"error",MooncakeReverse:58.19622113867775,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},_a={__category__:"PosteriorDB",EnzymeForward:6.032752973625238,EnzymeReverse:2.2525746191493763,FiniteDifferences:133.2339289858436,ForwardDiff:1.838796183646027,MooncakeForward:50.843793584379355,MooncakeReverse:5.190253045923148,ReverseDiff:31.565427347324082,ReverseDiffCompiled:2.5639786195677434,Zygote:"error"},ma={__category__:"Core Turing syntax",EnzymeForward:2.324811841445057,EnzymeReverse:1.8896530016328341,FiniteDifferences:35.02967690754363,ForwardDiff:1.2734081281111613,MooncakeForward:17.026048762885956,MooncakeReverse:4.6582508345255125,ReverseDiff:13.079192324215953,ReverseDiffCompiled:1.221646257774683,Zygote:1704.8386678052946},pa={__category__:"PosteriorDB",EnzymeForward:5.703263179543429,EnzymeReverse:2.2112707940318983,FiniteDifferences:137.8829088810331,ForwardDiff:1.8670790782090771,MooncakeForward:52.04588289273992,MooncakeReverse:5.099086124742194,ReverseDiff:30.23769730733519,ReverseDiffCompiled:2.5268308282699077,Zygote:"error"},va={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:10.504126004592424,FiniteDifferences:43.13114997586425,ForwardDiff:1.2043565315778015,MooncakeForward:20.80870897382634,MooncakeReverse:10.751279074766758,ReverseDiff:16.47314476114592,ReverseDiffCompiled:4.252532561505065,Zygote:405.89616135847245},ga={__category__:"Core Turing syntax",EnzymeForward:2.989158065944864,EnzymeReverse:2.8156402737047896,FiniteDifferences:37.77994298293096,ForwardDiff:1.328731072579309,MooncakeForward:20.733347081872548,MooncakeReverse:6.782620021759451,ReverseDiff:30.461720091585576,ReverseDiffCompiled:2.871759517501046,Zygote:"error"},ha={__category__:"Base Julia features",EnzymeForward:2.975966965393802,EnzymeReverse:2.4031558857694124,FiniteDifferences:27.79054260928729,ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ba={__category__:"Base Julia features",EnzymeForward:2.8272374401244664,EnzymeReverse:2.5145879542740146,FiniteDifferences:40.32005073459465,ForwardDiff:1.6355655943615144,MooncakeForward:24.48097454147276,MooncakeReverse:5.861674301268008,ReverseDiff:20.524982671318977,ReverseDiffCompiled:"wrong",Zygote:1845.9294394883018},ya={assume_beta:Di,assume_dirichlet:Ri,demo_assume_dot_observe:Mi,demo_assume_dot_observe_literal:xi,demo_assume_index_observe:Ti,demo_assume_matrix_observe_matrix_index:Si,demo_assume_multivariate_observe:Fi,demo_assume_multivariate_observe_literal:Ni,demo_assume_observe_literal:Ci,demo_assume_submodel_observe_index_literal:Ai,demo_dot_assume_observe:ki,demo_dot_assume_observe_index:Oi,assume_lkjcholu:Ii,demo_dot_assume_observe_index_literal:Li,demo_dot_assume_observe_matrix_index:Pi,demo_dot_assume_observe_submodel:zi,dot_assume:Bi,dot_observe:Vi,dppl_gauss_unknown:ji,dppl_hier_poisson:Ui,dppl_high_dim_gauss:$i,dppl_hmm_semisup:qi,dppl_lda:Hi,assume_mvnormal:Ki,dppl_logistic_regression:Zi,dppl_naive_bayes:Gi,dppl_sto_volatility:Wi,dynamic_constraint:Xi,metabayesian_MH:Ji,multiple_constraints_same_var:Yi,multithreaded:Qi,n010:ea,n050:na,n100:ta,assume_normal:ra,n500:oa,observe_bernoulli:sa,observe_categorical:ia,observe_index:aa,observe_literal:la,observe_multivariate:ca,observe_submodel:fa,observe_von_mises:ua,ordinary_diffeq:da,pdb_eight_schools_centered:_a,assume_submodel:ma,pdb_eight_schools_noncentered:pa,assume_wishart:va,broadcast_macro:ga,call_C:ha,control_flow:ba},wa=`@model function assume_beta()
    a ~ Beta(2, 2)
end

model = assume_beta()`,Ea=`@model function assume_dirichlet()
    a ~ Dirichlet([1.0, 5.0])
end

model = assume_dirichlet()`,Da=`@model function demo_assume_dot_observe(x = [1.5, 2.0])
    # \`assume\` and \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    x .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe()`,Ra=`@model function demo_assume_dot_observe_literal()
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

model = demo_assume_submodel_observe_index_literal()`,Ca=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe()`,Aa=`@model function demo_dot_assume_observe_index(
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

model = demo_dot_assume_observe_index()`,ka=`@model function assume_lkjcholu()
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

model = demo_dot_assume_observe_matrix_index()`,La=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe_submodel()`,Pa=`@model function dot_assume(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 5)
    a .~ Normal()
end

model = dot_assume()`,za=`@model function dot_observe(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    x .~ Normal(a)
end

model = dot_observe()`,Ba=`n = 10_000
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

model = dppl_naive_bayes(image_vec, labels, C, D)`,Za=`using DelimitedFiles: readdlm

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

model = dynamic_constraint()`,Wa=`#=
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

model = metabayesian_MH(0.0, 1.0)`,Xa=`@model function multiple_constraints_same_var(::Type{TV} = Vector{Float64}) where {TV}
    x = TV(undef, 5)
    x[1] ~ Normal()
    x[2] ~ InverseGamma(2, 3)
    x[3] ~ truncated(Normal(), -5, 20)
    x[4:5] ~ Dirichlet([1.0, 2.0])
end

model = multiple_constraints_same_var()`,Ja=`#=
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

model = multithreaded([1.5, 2.0, 2.5, 1.5, 2.0, 2.5])`,Ya=`@model function n010(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 10)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n010()`,Qa=`@model function n050(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 50)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n050()`,el=`@model function n100(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 100)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n100()`,nl=`@model function assume_normal()
    a ~ Normal()
end

model = assume_normal()`,tl=`@model function n500(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 500)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n500()`,rl=`@model function observe_bernoulli(x = [true, false, true])
    a ~ Beta(2, 2)
    for i in eachindex(x)
        x[i] ~ Bernoulli(a)
    end
end

model = observe_bernoulli()`,ol=`@model function observe_categorical(x = [1, 2, 1, 2, 2])
    a ~ Dirichlet(2, 3)
    for i in eachindex(x)
        x[i] ~ Categorical(a)
    end
end

model = observe_categorical()`,sl=`@model function observe_index(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end

model = observe_index()`,il=`@model function observe_literal()
    a ~ Normal()
    1.5 ~ Normal(a)
end

model = observe_literal()`,al=`@model function observe_multivariate(
    x = [1.5, 2.0, 2.5],
    ::Type{TV} = Vector{Float64},
) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    x ~ MvNormal(a, I)
end

model = observe_multivariate()`,ll=`@model function inner2(x, a)
    x ~ Normal(a)
end
@model function observe_submodel(x = 1.5)
    a ~ Normal()
    _ignore ~ to_submodel(inner2(x, a))
end

model = observe_submodel()`,cl=`@model function observe_von_mises(x)
    a ~ InverseGamma(2, 3)
    x ~ VonMises(0, a)
end

model = observe_von_mises(0.4)`,fl=`# See https://turinglang.org/docs/tutorials/bayesian-differential-equations/.

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

model = ordinary_diffeq(odedata, prob)`,ul=`J = 8
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

model = pdb_eight_schools_centered(J, y, sigma)`,dl=`@model function inner1()
    return a ~ Normal()
end
@model function assume_submodel()
    a ~ to_submodel(inner1())
    x ~ Normal(a)
end

model = assume_submodel()`,_l=`J = 8
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

model = pdb_eight_schools_noncentered(J, y, sigma)`,ml=`@model function assume_wishart()
    a ~ Wishart(7, [1.0 0.5; 0.5 1.0])
end

model = assume_wishart()`,pl=`@model function broadcast_macro(x = [1.5, 2.0], ::Type{TV} = Vector{Float64}) where {TV}
    a ~ Normal(0, 1)
    b ~ InverseGamma(2, 3)
    @. x ~ Normal(a, $(sqrt(b)))
end

model = broadcast_macro()`,vl=`@model function call_C(y = 0.0)
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

model = control_flow()`,hl={assume_beta:wa,assume_dirichlet:Ea,demo_assume_dot_observe:Da,demo_assume_dot_observe_literal:Ra,demo_assume_index_observe:Ma,demo_assume_matrix_observe_matrix_index:xa,demo_assume_multivariate_observe:Ta,demo_assume_multivariate_observe_literal:Sa,demo_assume_observe_literal:Fa,demo_assume_submodel_observe_index_literal:Na,demo_dot_assume_observe:Ca,demo_dot_assume_observe_index:Aa,assume_lkjcholu:ka,demo_dot_assume_observe_index_literal:Oa,demo_dot_assume_observe_matrix_index:Ia,demo_dot_assume_observe_submodel:La,dot_assume:Pa,dot_observe:za,dppl_gauss_unknown:Ba,dppl_hier_poisson:Va,dppl_high_dim_gauss:ja,dppl_hmm_semisup:Ua,dppl_lda:$a,assume_mvnormal:qa,dppl_logistic_regression:Ha,dppl_naive_bayes:Ka,dppl_sto_volatility:Za,dynamic_constraint:Ga,metabayesian_MH:Wa,multiple_constraints_same_var:Xa,multithreaded:Ja,n010:Ya,n050:Qa,n100:el,assume_normal:nl,n500:tl,observe_bernoulli:rl,observe_categorical:ol,observe_index:sl,observe_literal:il,observe_multivariate:al,observe_submodel:ll,observe_von_mises:cl,ordinary_diffeq:fl,pdb_eight_schools_centered:ul,assume_submodel:dl,pdb_eight_schools_noncentered:_l,assume_wishart:ml,broadcast_macro:pl,call_C:vl,control_flow:gl},bl="1.18.0",yl="1.5.0",wl="5.8.1",El="0.13.1",Dl="0.4.5",Rl="0.1.42",Ml="4.4.0",xl="0.8.2",Tl="0.8.8",Sl="0.7.0",Fl="0.4.1",Nl="1.1.3",Cl="2.5.0",Al="1.1.2",kl="0.4.0",Ol="0.5.4",Il="3.5.1+1",Ll="7.20.0",Pl="1.11.2",zl="1.11.0",Bl="1.1.2",Vl="0.5.1",jl="1.1.0",Ul="0.4.8",$l="0.5.1",ql="0.4.4",Hl="1.11.0",Kl="0.1.1",Zl="0.15.10",Gl="0.1.9",Wl="0.1.6",Xl="1.5.0",Jl="1.2.2",Yl="0.5.0",Ql="0.2.7",ec="0.10.15",nc="0.3.14",tc="1.72.6",rc="1.26.0",oc="1.3.1",sc="0.1.10",ic="0.10.43",ac="0.10.4+0",lc="0.1.13",cc="0.7.8",fc="3.31.0",uc="0.12.1",dc="0.11.0",_c="0.13.1",mc="1.0.3",pc="0.2.4",vc="0.3.1",gc="1.0.0",hc="4.18.1",bc="1.1.1+0",yc="0.1.2",wc="0.2.3",Ec="2.5.0",Dc="0.1.2",Rc="1.6.0",Mc="0.1.3",xc="0.3.1",Tc="4.1.1",Sc="1.16.0",Fc="0.7.13",Nc="1.8.0",Cc="0.18.22",Ac="1.0.0",kc="1.11.0",Oc="0.1.2",Ic="1.9.1",Lc="0.4.0",Pc="6.190.2",zc="4.9.0",Bc="5.24.1",Vc="1.1.0",jc="1.15.1",Uc="0.7.8",$c="0.4.26",qc="1.11.0",Hc="0.25.121",Kc="0.6.58",Zc="0.9.5",Gc="1.6.0",Wc="0.37.5",Xc="2.0.0",Jc="1.0.5",Yc="0.13.85",Qc="0.8.14",ef="0.0.203+0",nf="0.1.11",tf="1.27.0",rf="0.1.10",of="0.10.14",sf="1.10.0",af="3.3.11+0",lf="0.2.2",cf="0.1.1",ff="0.3.5",uf="0.3.2",df="1.0.2",_f="1.1.3",mf="1.17.0",pf="0.9.24",vf="1.11.0",gf="1.14.0",hf="2.28.1",bf="0.12.33",yf="0.8.5",wf="1.2.1",Ef="0.1.2",Df="1.1.3",Rf="0.1.3",Mf="0.5.2",xf="1.11.0",Tf="0.2.0",Sf="1.6.2",Ff="0.6.2",Nf="0.5.5",Cf="1.3.1",Af="1.13.1",kf="0.17.2",Of="1.14.6+0",If="1.10.17",Lf="0.2.0",Pf="2.12.2+0",zf="0.3.28",Bf="0.4.15",Vf="0.1.1",jf="0.1.7",Uf="0.10.5",$f="0.3.8",qf="0.1.5",Hf="0.3.1",Kf="1.4.5",Zf="2025.2.0+0",Gf="1.11.0",Wf="0.7.0",Xf="0.16.2",Jf="0.7.11",Yf="0.1.17",Qf="1.3.1",eu="0.2.4",nu="1.10.0",tu="1.0.0",ru="0.5.15",ou="1.7.1",su="1.14.3",iu="0.2.1",au="0.2.4",lu="0.9.38",cu="0.6.10",fu="0.10.2",uu="0.4.1",du="9.4.2",_u="0.0.37+2",mu="3.0.1+0",pu="1.4.0",vu="0.1.17",gu="2.6.3",hu="1.11.0",bu="0.3.1",yu="0.2.1",wu="0.6.4",Eu="8.6.0+0",Du="1.11.0",Ru="1.7.2+0",Mu="1.11.0+1",xu="0.9.1+6",Tu="1.11.0",Su="1.18.0+0",Fu="0.9.4",Nu="0.1.4",Cu="7.4.0",Au="1.11.0",ku="3.28.0",Ou="2.1.2",Iu="1.13.1",Lu="0.3.29",Pu="1.11.0",zu="1.1.0",Bu="0.10.7",Vu="7.4.0",ju="0.3.15",Uu="2025.2.0+0",$u="1.0.0",qu="0.7.18",Hu="1.12.0",Ku="0.4.17",Zu="0.4.8",Gu="4.3.1+0",Wu="0.1.11",Xu="5.5.4+0",Ju="0.5.16",Yu="0.1.8",Qu="0.4.2",ed="1.11.0",nd="0.1.4",td="1.1.9",rd="2.28.6+0",od="0.2.0",sd="10.1.4+3",id="1.2.0",ad="2.1.0",ld="1.11.0",cd="0.4.170",fd="0.3.4",ud="0.3.7",dd="2023.12.12",_d="0.2.4",md="0.10.3",pd="7.10.0",vd="0.9.31",gd="0.4.3",hd="1.1.3",bd="0.1.5",yd="0.10.5",wd="1.0.0",Ed="1.2.0",Dd="4.12.0",Rd="2.0.0",Md="1.9.0",xd="1.10.0",Td="1.5.0",Sd="0.5.0",Fd="1.17.0",Nd="0.3.27+1",Cd="0.8.5+0",Ad="5.0.8+0",kd="1.5.0",Od="3.5.4+0",Id="0.5.6+0",Ld="1.13.2",Pd="0.4.6",zd="4.8.0",Bd="2.12.0",Vd="0.4.5",jd="1.8.1",Ud="6.102.1",$d="1.5.0",qd="1.10.1",Hd="1.34.0",Kd="1.8.0",Zd="1.16.1",Gd="1.4.0",Wd="1.8.0",Xd="1.9.0",Jd="1.16.0",Yd="1.4.0",Qd="1.5.0",e1="1.5.0",n1="1.7.0",t1="1.6.0",r1="1.6.0",o1="1.7.0",s1="1.14.1",i1="1.4.0",a1="1.6.0",l1="1.4.0",c1="1.4.0",f1="1.5.0",u1="1.18.1",d1="1.7.0",_1="1.7.0",m1="1.6.0",p1="1.4.0",v1="1.7.0",g1="1.5.0",h1="1.6.0",b1="0.11.35",y1="1.0.2",w1="0.5.12",E1="0.12.3",D1="2.8.3",R1="1.2.1",M1="0.3.6",x1="1.11.0",T1="0.4.6",S1="0.7.18",F1="0.2.2",N1="1.4.3",C1="0.2.4",A1="0.4.34",k1="1.2.1",O1="1.5.0",I1="0.2.0",L1="2.4.0",P1="1.11.0",z1="0.1.5",B1="1.11.0",V1="1.3.0",j1="2.11.2",U1="1.11.0",$1="1.11.0",q1="1.7.1",H1="1.6.0",K1="0.3.2",Z1="0.4.5",G1="0.1.0",W1="1.3.4",X1="3.37.1",J1="1.2.2",Y1="1.3.1",Q1="1.1.1",e_="1.16.1",n_="1.4.2",t_="0.8.0",r_="0.5.1+0",o_="2.2.10",s_="0.5.15",i_="0.7.0",a_="0.1.0",l_="0.5.2",c_="2.120.0",f_="0.1.11",u_="1.7.2",d_="1.0.0",__="7.90.0",m_="1.7.0",p_="3.0.0",v_="1.5.0",g_="1.3.0",h_="1.4.8",b_="1.11.0",y_="1.1.2",w_="1.11.0",E_="0.1.0",D_="1.2.0",R_="2.9.0",M_="0.9.5",x_="1.1.0",T_="1.11.0",S_="1.2.2",F_="1.11.0",N_="1.1.0",C_="0.1.2",A_="0.4.21",k_="2.5.1",O_="0.1.15",I_="0.1.2",L_="1.3.0",P_="1.8.0",z_="1.9.15",B_="1.4.3",V_="3.5.0",j_="1.11.1",U_="1.7.1",$_="0.34.6",q_="1.5.0",H_="0.5.8",K_="0.4.1",Z_="0.3.7",G_="0.4.1",W_="0.7.1",X_="0.3.1",J_="1.11.0",Y_="1.11.0",Q_=null,e0="7.7.0+0",n0="0.3.44",t0="1.0.3",r0="1.0.1",o0="1.12.1",s0="1.10.0",i0="0.1.1",a0="0.1.7",l0="1.11.0",c0="0.5.5",f0="0.5.29",u0="0.2.38",d0="0.1.6",_0="0.11.3",m0="0.4.85",p0="1.4.0",v0="0.40.3",g0="1.6.1",h0="1.11.0",b0="1.0.2",y0="1.11.0",w0="1.25.0",E0="1.0.0",D0="0.3.0",R0="1.4.2",M0="1.0.0",x0="1.6.1",T0="2.13.9+0",S0="0.18.1+0",F0="0.10.1",N0="1.2.13+1",C0="0.7.10",A0="0.2.7",k0="1.1.4+0",O0="5.11.0+0",I0="1.59.0+0",L0="2022.0.0+0",P0="17.4.0+2",z0={ADTypes:bl,AbstractFFTs:yl,AbstractMCMC:wl,AbstractPPL:El,AbstractTrees:Dl,Accessors:Rl,Adapt:Ml,AdvancedHMC:xl,AdvancedMH:Tl,AdvancedPS:Sl,AdvancedVI:Fl,AliasTables:Nl,ArgCheck:Cl,ArgTools:Al,ArnoldiMethod:kl,Arpack:Ol,Arpack_jll:Il,ArrayInterface:Ll,ArrayLayouts:Pl,Artifacts:zl,Atomix:Bl,AtomsBase:Vl,AxisAlgorithms:jl,AxisArrays:Ul,BFloat16s:$l,BangBang:ql,Base64:Hl,Baselet:Kl,Bijectors:Zl,BitFlags:Gl,BitTwiddlingConvenienceFunctions:Wl,BracketingNonlinearSolve:Xl,BufferedStreams:Jl,CEnum:Yl,CPUSummary:Ql,CSV:ec,Cassette:nc,ChainRules:tc,ChainRulesCore:rc,Chairmarks:oc,ChangesOfVariables:sc,Chemfiles:ic,Chemfiles_jll:ac,CloseOpenIntervals:lc,CodecZlib:cc,ColorSchemes:fc,ColorTypes:uc,ColorVectorSpace:dc,Colors:_c,Combinatorics:mc,CommonSolve:pc,CommonSubexpressions:vc,CommonWorldInvalidations:gc,Compat:hc,CompilerSupportLibraries_jll:bc,CompositionsBase:yc,ConcreteStructs:wc,ConcurrentUtilities:Ec,ConsoleProgressMonitor:Dc,ConstructionBase:Rc,ContextVariablesX:Mc,CpuId:xc,Crayons:Tc,DataAPI:Sc,DataDeps:Fc,DataFrames:Nc,DataStructures:Cc,DataValueInterfaces:Ac,Dates:kc,DefineSingletons:Oc,DelimitedFiles:Ic,DensityInterface:Lc,DiffEqBase:Pc,DiffEqCallbacks:zc,DiffEqNoiseProcess:Bc,DiffResults:Vc,DiffRules:jc,DifferentiationInterface:Uc,DispatchDoctor:$c,Distributed:qc,Distributions:Hc,DistributionsAD:Kc,DocStringExtensions:Zc,Downloads:Gc,DynamicPPL:Wc,EllipticalSliceSampling:Xc,EnumX:Jc,Enzyme:Yc,EnzymeCore:Qc,Enzyme_jll:ef,ExceptionUnwrapping:nf,ExponentialUtilities:tf,ExprTools:rf,ExproniconLite:of,FFTW:sf,FFTW_jll:af,FLoops:lf,FLoopsBase:cf,FastBroadcast:ff,FastClosures:uf,FastGaussQuadrature:df,FastPower:_f,FileIO:mf,FilePathsBase:pf,FileWatching:vf,FillArrays:gf,FiniteDiff:hf,FiniteDifferences:bf,FixedPointNumbers:yf,ForwardDiff:wf,FunctionProperties:Ef,FunctionWrappers:Df,FunctionWrappersWrappers:Rf,Functors:Mf,Future:xf,GPUArraysCore:Tf,GPUCompiler:Sf,GZip:Ff,GenericSchur:Nf,Glob:Cf,Graphs:Af,HDF5:kf,HDF5_jll:Of,HTTP:If,HashArrayMappedTries:Lf,Hwloc_jll:Pf,HypergeometricFunctions:zf,IRTools:Bf,IfElse:Vf,ImageBase:jf,ImageCore:Uf,ImageShow:$f,Inflate:qf,InitialValues:Hf,InlineStrings:Kf,IntelOpenMP_jll:Zf,InteractiveUtils:Gf,InternedStrings:Wf,Interpolations:Xf,IntervalSets:Jf,InverseFunctions:Yf,InvertedIndices:Qf,IrrationalConstants:eu,IterTools:nu,IteratorInterfaceExtensions:tu,JLD2:ru,JLLWrappers:ou,JSON:"0.21.4",JSON3:su,Jieko:iu,JuliaVariables:au,KernelAbstractions:lu,KernelDensity:cu,Krylov:fu,LBFGSB:uu,LLVM:du,LLVMExtra_jll:_u,L_BFGS_B_jll:mu,LaTeXStrings:pu,LayoutPointers:vu,LazyArrays:gu,LazyArtifacts:hu,LazyModules:bu,LeftChildRightSiblingTrees:yu,LibCURL:wu,LibCURL_jll:Eu,LibGit2:Du,LibGit2_jll:Ru,LibSSH2_jll:Mu,LibTracyClient_jll:xu,Libdl:Tu,Libiconv_jll:Su,Libtask:Fu,LineSearch:Nu,LineSearches:Cu,LinearAlgebra:Au,LinearSolve:ku,LogDensityProblems:Ou,LogDensityProblemsAD:Iu,LogExpFunctions:Lu,Logging:Pu,LoggingExtras:zu,MAT:Bu,MCMCChains:Vu,MCMCDiagnosticTools:ju,MKL_jll:Uu,MLCore:$u,MLDatasets:qu,MLJModelInterface:Hu,MLStyle:Ku,MLUtils:Zu,MPICH_jll:Gu,MPIPreferences:Wu,MPItrampoline_jll:Xu,MacroTools:Ju,ManualMemory:Yu,MappedArrays:Qu,Markdown:ed,MaybeInplace:nd,MbedTLS:td,MbedTLS_jll:rd,MicroCollections:od,MicrosoftMPI_jll:sd,Missings:id,MistyClosures:ad,Mmap:ld,Mooncake:cd,MosaicViews:fd,Moshi:ud,MozillaCACerts_jll:dd,MuladdMacro:_d,MultivariateStats:md,NLSolversBase:pd,NNlib:vd,NPZ:gd,NaNMath:hd,NameResolution:bd,NamedArrays:yd,NaturalSort:wd,NetworkOptions:Ed,NonlinearSolve:Dd,NonlinearSolveBase:Rd,NonlinearSolveFirstOrder:Md,NonlinearSolveQuasiNewton:xd,NonlinearSolveSpectralMethods:Td,ObjectFile:Sd,OffsetArrays:Fd,OpenBLAS_jll:Nd,OpenLibm_jll:Cd,OpenMPI_jll:Ad,OpenSSL:kd,OpenSSL_jll:Od,OpenSpecFun_jll:Id,Optim:Ld,Optimisers:Pd,Optimization:zd,OptimizationBase:Bd,OptimizationOptimJL:Vd,OrderedCollections:jd,OrdinaryDiffEq:Ud,OrdinaryDiffEqAdamsBashforthMoulton:$d,OrdinaryDiffEqBDF:qd,OrdinaryDiffEqCore:Hd,OrdinaryDiffEqDefault:Kd,OrdinaryDiffEqDifferentiation:Zd,OrdinaryDiffEqExplicitRK:Gd,OrdinaryDiffEqExponentialRK:Wd,OrdinaryDiffEqExtrapolation:Xd,OrdinaryDiffEqFIRK:Jd,OrdinaryDiffEqFeagin:Yd,OrdinaryDiffEqFunctionMap:Qd,OrdinaryDiffEqHighOrderRK:e1,OrdinaryDiffEqIMEXMultistep:n1,OrdinaryDiffEqLinear:t1,OrdinaryDiffEqLowOrderRK:r1,OrdinaryDiffEqLowStorageRK:o1,OrdinaryDiffEqNonlinearSolve:s1,OrdinaryDiffEqNordsieck:i1,OrdinaryDiffEqPDIRK:a1,OrdinaryDiffEqPRK:l1,OrdinaryDiffEqQPRK:c1,OrdinaryDiffEqRKN:f1,OrdinaryDiffEqRosenbrock:u1,OrdinaryDiffEqSDIRK:d1,OrdinaryDiffEqSSPRK:_1,OrdinaryDiffEqStabilizedIRK:m1,OrdinaryDiffEqStabilizedRK:p1,OrdinaryDiffEqSymplecticRK:v1,OrdinaryDiffEqTsit5:g1,OrdinaryDiffEqVerner:h1,PDMats:b1,PackageExtensionCompat:y1,PaddedViews:w1,Parameters:E1,Parsers:D1,PeriodicTable:R1,Pickle:M1,Pkg:x1,PoissonRandom:T1,Polyester:S1,PolyesterWeave:F1,PooledArrays:N1,PositiveFactorizations:C1,PreallocationTools:A1,PrecompileTools:k1,Preferences:O1,PrettyPrint:I1,PrettyTables:L1,Printf:P1,ProgressLogging:z1,ProgressMeter:B1,PtrArrays:V1,QuadGK:j1,REPL:U1,Random:$1,Random123:q1,RandomNumbers:H1,RangeArrays:K1,Ratios:Z1,RealDot:G1,RecipesBase:W1,RecursiveArrayTools:X1,Reexport:J1,Requires:Y1,ResettableStacks:Q1,ReverseDiff:e_,Richardson:n_,Rmath:t_,Rmath_jll:r_,Roots:o_,RuntimeGeneratedFunctions:s_,SHA:i_,SIMDTypes:a_,SSMProblems:l_,SciMLBase:c_,SciMLJacobianOperators:f_,SciMLOperators:u_,SciMLPublic:d_,SciMLSensitivity:__,SciMLStructures:m_,ScientificTypesBase:p_,ScopedValues:v_,Scratch:g_,SentinelArrays:h_,Serialization:b_,Setfield:y_,SharedArrays:w_,ShowCases:E_,SimpleBufferStream:D_,SimpleNonlinearSolve:R_,SimpleTraits:M_,SimpleUnPack:x_,Sockets:T_,SortingAlgorithms:S_,SparseArrays:F_,SparseConnectivityTracer:N_,SparseInverseSubset:C_,SparseMatrixColorings:A_,SpecialFunctions:k_,SplittablesBase:O_,StackViews:I_,Static:L_,StaticArrayInterface:P_,StaticArrays:z_,StaticArraysCore:B_,StatisticalTraits:V_,Statistics:j_,StatsAPI:U_,StatsBase:$_,StatsFuns:q_,StrideArraysCore:H_,StridedViews:K_,StringEncodings:Z_,StringManipulation:G_,StructArrays:W_,StructIO:X_,StructTypes:J_,StyledStrings:Y_,SuiteSparse:Q_,SuiteSparse_jll:e0,SymbolicIndexingInterface:n0,TOML:t0,TableTraits:r0,Tables:o0,Tar:s0,TensorCore:i0,TerminalLoggers:a0,Test:l0,ThreadingUtilities:c0,TimerOutputs:f0,Tracker:u0,Tracy:d0,TranscodingStreams:_0,Transducers:m0,TruncatedStacktraces:p0,Turing:v0,URIs:g0,UUIDs:h0,UnPack:b0,Unicode:y0,Unitful:w0,UnitfulAtomic:E0,UnsafeAtomics:D0,WeakRefStrings:R0,WoodburyMatrices:M0,WorkerUtilities:x0,XML2_jll:T0,Xorg_libpciaccess_jll:S0,ZipFile:F0,Zlib_jll:N0,Zygote:C0,ZygoteRules:A0,libaec_jll:k0,libblastrampoline_jll:O0,nghttp2_jll:I0,oneTBB_jll:L0,p7zip_jll:P0};function yt(e){return[...e.entries()].sort(([n,t],[r,i])=>n.localeCompare(r))}var B0=pe('<tr><td class="svelte-7y9k9c"> </td><td class="version svelte-7y9k9c"> </td></tr>'),V0=pe('<table id="manifest" class="svelte-7y9k9c"><thead><tr><th class="svelte-7y9k9c">Package</th><th class="svelte-7y9k9c">Version</th></tr></thead><tbody></tbody></table>');function j0(e,n){hn(n,!1);let t=new Map;for(const[s,l]of Object.entries(z0))t.set(s,l===""?null:l);Lt();var r=V0(),i=we(W(r));_n(i,5,()=>yt(t),dn,(s,l)=>{let u=()=>I(l)[0],a=()=>I(l)[1];var c=B0(),p=W(c),_=W(p),f=we(p),v=W(f);Ee(()=>{Be(_,u()),Be(v,a()===null?"":`v${a()}`)}),re(s,c)}),re(e,r),bn()}function U0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ft,_r;function $0(){if(_r)return ft;_r=1;function e(o){return o instanceof Map?o.clear=o.delete=o.set=function(){throw new Error("map is read-only")}:o instanceof Set&&(o.add=o.clear=o.delete=function(){throw new Error("set is read-only")}),Object.freeze(o),Object.getOwnPropertyNames(o).forEach(d=>{const h=o[d],N=typeof h;(N==="object"||N==="function")&&!Object.isFrozen(h)&&e(h)}),o}class n{constructor(d){d.data===void 0&&(d.data={}),this.data=d.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(o,...d){const h=Object.create(null);for(const N in o)h[N]=o[N];return d.forEach(function(N){for(const H in N)h[H]=N[H]}),h}const i="</span>",s=o=>!!o.scope,l=(o,{prefix:d})=>{if(o.startsWith("language:"))return o.replace("language:","language-");if(o.includes(".")){const h=o.split(".");return[`${d}${h.shift()}`,...h.map((N,H)=>`${N}${"_".repeat(H+1)}`)].join(" ")}return`${d}${o}`};class u{constructor(d,h){this.buffer="",this.classPrefix=h.classPrefix,d.walk(this)}addText(d){this.buffer+=t(d)}openNode(d){if(!s(d))return;const h=l(d.scope,{prefix:this.classPrefix});this.span(h)}closeNode(d){s(d)&&(this.buffer+=i)}value(){return this.buffer}span(d){this.buffer+=`<span class="${d}">`}}const a=(o={})=>{const d={children:[]};return Object.assign(d,o),d};class c{constructor(){this.rootNode=a(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(d){this.top.children.push(d)}openNode(d){const h=a({scope:d});this.add(h),this.stack.push(h)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(d){return this.constructor._walk(d,this.rootNode)}static _walk(d,h){return typeof h=="string"?d.addText(h):h.children&&(d.openNode(h),h.children.forEach(N=>this._walk(d,N)),d.closeNode(h)),d}static _collapse(d){typeof d!="string"&&d.children&&(d.children.every(h=>typeof h=="string")?d.children=[d.children.join("")]:d.children.forEach(h=>{c._collapse(h)}))}}class p extends c{constructor(d){super(),this.options=d}addText(d){d!==""&&this.add(d)}startScope(d){this.openNode(d)}endScope(){this.closeNode()}__addSublanguage(d,h){const N=d.root;h&&(N.scope=`language:${h}`),this.add(N)}toHTML(){return new u(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(o){return o?typeof o=="string"?o:o.source:null}function f(o){return S("(?=",o,")")}function v(o){return S("(?:",o,")*")}function g(o){return S("(?:",o,")?")}function S(...o){return o.map(h=>_(h)).join("")}function A(o){const d=o[o.length-1];return typeof d=="object"&&d.constructor===Object?(o.splice(o.length-1,1),d):{}}function z(...o){return"("+(A(o).capture?"":"?:")+o.map(N=>_(N)).join("|")+")"}function q(o){return new RegExp(o.toString()+"|").exec("").length-1}function x(o,d){const h=o&&o.exec(d);return h&&h.index===0}const D=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function M(o,{joinWith:d}){let h=0;return o.map(N=>{h+=1;const H=h;let K=_(N),w="";for(;K.length>0;){const y=D.exec(K);if(!y){w+=K;break}w+=K.substring(0,y.index),K=K.substring(y.index+y[0].length),y[0][0]==="\\"&&y[1]?w+="\\"+String(Number(y[1])+H):(w+=y[0],y[0]==="("&&h++)}return w}).map(N=>`(${N})`).join(d)}const ee=/\b\B/,F="[a-zA-Z]\\w*",$="[a-zA-Z_]\\w*",Y="\\b\\d+(\\.\\d+)?",xe="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ve="\\b(0b[01]+)",qe="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",on=(o={})=>{const d=/^#![ ]*\//;return o.binary&&(o.begin=S(d,/.*\b/,o.binary,/\b.*/)),r({scope:"meta",begin:d,end:/$/,relevance:0,"on:begin":(h,N)=>{h.index!==0&&N.ignoreMatch()}},o)},ne={begin:"\\\\[\\s\\S]",relevance:0},ge={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ne]},Te={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ne]},Ae={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},he=function(o,d,h={}){const N=r({scope:"comment",begin:o,end:d,contains:[]},h);N.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const H=z("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return N.contains.push({begin:S(/[ ]+/,"(",H,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),N},Qn=he("//","$"),sn=he("/\\*","\\*/"),wn=he("#","$"),Xr={scope:"number",begin:Y,relevance:0},Jr={scope:"number",begin:xe,relevance:0},Yr={scope:"number",begin:ve,relevance:0},Qr={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ne,{begin:/\[/,end:/\]/,relevance:0,contains:[ne]}]},eo={scope:"title",begin:F,relevance:0},no={scope:"title",begin:$,relevance:0},to={begin:"\\.\\s*"+$,relevance:0};var En=Object.freeze({__proto__:null,APOS_STRING_MODE:ge,BACKSLASH_ESCAPE:ne,BINARY_NUMBER_MODE:Yr,BINARY_NUMBER_RE:ve,COMMENT:he,C_BLOCK_COMMENT_MODE:sn,C_LINE_COMMENT_MODE:Qn,C_NUMBER_MODE:Jr,C_NUMBER_RE:xe,END_SAME_AS_BEGIN:function(o){return Object.assign(o,{"on:begin":(d,h)=>{h.data._beginMatch=d[1]},"on:end":(d,h)=>{h.data._beginMatch!==d[1]&&h.ignoreMatch()}})},HASH_COMMENT_MODE:wn,IDENT_RE:F,MATCH_NOTHING_RE:ee,METHOD_GUARD:to,NUMBER_MODE:Xr,NUMBER_RE:Y,PHRASAL_WORDS_MODE:Ae,QUOTE_STRING_MODE:Te,REGEXP_MODE:Qr,RE_STARTERS_RE:qe,SHEBANG:on,TITLE_MODE:eo,UNDERSCORE_IDENT_RE:$,UNDERSCORE_TITLE_MODE:no});function ro(o,d){o.input[o.index-1]==="."&&d.ignoreMatch()}function oo(o,d){o.className!==void 0&&(o.scope=o.className,delete o.className)}function so(o,d){d&&o.beginKeywords&&(o.begin="\\b("+o.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",o.__beforeBegin=ro,o.keywords=o.keywords||o.beginKeywords,delete o.beginKeywords,o.relevance===void 0&&(o.relevance=0))}function io(o,d){Array.isArray(o.illegal)&&(o.illegal=z(...o.illegal))}function ao(o,d){if(o.match){if(o.begin||o.end)throw new Error("begin & end are not supported with match");o.begin=o.match,delete o.match}}function lo(o,d){o.relevance===void 0&&(o.relevance=1)}const co=(o,d)=>{if(!o.beforeMatch)return;if(o.starts)throw new Error("beforeMatch cannot be used with starts");const h=Object.assign({},o);Object.keys(o).forEach(N=>{delete o[N]}),o.keywords=h.keywords,o.begin=S(h.beforeMatch,f(h.begin)),o.starts={relevance:0,contains:[Object.assign(h,{endsParent:!0})]},o.relevance=0,delete h.beforeMatch},fo=["of","and","for","in","not","or","if","then","parent","list","value"],uo="keyword";function Pt(o,d,h=uo){const N=Object.create(null);return typeof o=="string"?H(h,o.split(" ")):Array.isArray(o)?H(h,o):Object.keys(o).forEach(function(K){Object.assign(N,Pt(o[K],d,K))}),N;function H(K,w){d&&(w=w.map(y=>y.toLowerCase())),w.forEach(function(y){const T=y.split("|");N[T[0]]=[K,_o(T[0],T[1])]})}}function _o(o,d){return d?Number(d):mo(o)?0:1}function mo(o){return fo.includes(o.toLowerCase())}const zt={},He=o=>{console.error(o)},Bt=(o,...d)=>{console.log(`WARN: ${o}`,...d)},Xe=(o,d)=>{zt[`${o}/${d}`]||(console.log(`Deprecated as of ${o}. ${d}`),zt[`${o}/${d}`]=!0)},Dn=new Error;function Vt(o,d,{key:h}){let N=0;const H=o[h],K={},w={};for(let y=1;y<=d.length;y++)w[y+N]=H[y],K[y+N]=!0,N+=q(d[y-1]);o[h]=w,o[h]._emit=K,o[h]._multi=!0}function po(o){if(Array.isArray(o.begin)){if(o.skip||o.excludeBegin||o.returnBegin)throw He("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Dn;if(typeof o.beginScope!="object"||o.beginScope===null)throw He("beginScope must be object"),Dn;Vt(o,o.begin,{key:"beginScope"}),o.begin=M(o.begin,{joinWith:""})}}function vo(o){if(Array.isArray(o.end)){if(o.skip||o.excludeEnd||o.returnEnd)throw He("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Dn;if(typeof o.endScope!="object"||o.endScope===null)throw He("endScope must be object"),Dn;Vt(o,o.end,{key:"endScope"}),o.end=M(o.end,{joinWith:""})}}function go(o){o.scope&&typeof o.scope=="object"&&o.scope!==null&&(o.beginScope=o.scope,delete o.scope)}function ho(o){go(o),typeof o.beginScope=="string"&&(o.beginScope={_wrap:o.beginScope}),typeof o.endScope=="string"&&(o.endScope={_wrap:o.endScope}),po(o),vo(o)}function bo(o){function d(w,y){return new RegExp(_(w),"m"+(o.case_insensitive?"i":"")+(o.unicodeRegex?"u":"")+(y?"g":""))}class h{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(y,T){T.position=this.position++,this.matchIndexes[this.matchAt]=T,this.regexes.push([T,y]),this.matchAt+=q(y)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const y=this.regexes.map(T=>T[1]);this.matcherRe=d(M(y,{joinWith:"|"}),!0),this.lastIndex=0}exec(y){this.matcherRe.lastIndex=this.lastIndex;const T=this.matcherRe.exec(y);if(!T)return null;const X=T.findIndex((an,nt)=>nt>0&&an!==void 0),Z=this.matchIndexes[X];return T.splice(0,X),Object.assign(T,Z)}}class N{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(y){if(this.multiRegexes[y])return this.multiRegexes[y];const T=new h;return this.rules.slice(y).forEach(([X,Z])=>T.addRule(X,Z)),T.compile(),this.multiRegexes[y]=T,T}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(y,T){this.rules.push([y,T]),T.type==="begin"&&this.count++}exec(y){const T=this.getMatcher(this.regexIndex);T.lastIndex=this.lastIndex;let X=T.exec(y);if(this.resumingScanAtSamePosition()&&!(X&&X.index===this.lastIndex)){const Z=this.getMatcher(0);Z.lastIndex=this.lastIndex+1,X=Z.exec(y)}return X&&(this.regexIndex+=X.position+1,this.regexIndex===this.count&&this.considerAll()),X}}function H(w){const y=new N;return w.contains.forEach(T=>y.addRule(T.begin,{rule:T,type:"begin"})),w.terminatorEnd&&y.addRule(w.terminatorEnd,{type:"end"}),w.illegal&&y.addRule(w.illegal,{type:"illegal"}),y}function K(w,y){const T=w;if(w.isCompiled)return T;[oo,ao,ho,co].forEach(Z=>Z(w,y)),o.compilerExtensions.forEach(Z=>Z(w,y)),w.__beforeBegin=null,[so,io,lo].forEach(Z=>Z(w,y)),w.isCompiled=!0;let X=null;return typeof w.keywords=="object"&&w.keywords.$pattern&&(w.keywords=Object.assign({},w.keywords),X=w.keywords.$pattern,delete w.keywords.$pattern),X=X||/\w+/,w.keywords&&(w.keywords=Pt(w.keywords,o.case_insensitive)),T.keywordPatternRe=d(X,!0),y&&(w.begin||(w.begin=/\B|\b/),T.beginRe=d(T.begin),!w.end&&!w.endsWithParent&&(w.end=/\B|\b/),w.end&&(T.endRe=d(T.end)),T.terminatorEnd=_(T.end)||"",w.endsWithParent&&y.terminatorEnd&&(T.terminatorEnd+=(w.end?"|":"")+y.terminatorEnd)),w.illegal&&(T.illegalRe=d(w.illegal)),w.contains||(w.contains=[]),w.contains=[].concat(...w.contains.map(function(Z){return yo(Z==="self"?w:Z)})),w.contains.forEach(function(Z){K(Z,T)}),w.starts&&K(w.starts,y),T.matcher=H(T),T}if(o.compilerExtensions||(o.compilerExtensions=[]),o.contains&&o.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return o.classNameAliases=r(o.classNameAliases||{}),K(o)}function jt(o){return o?o.endsWithParent||jt(o.starts):!1}function yo(o){return o.variants&&!o.cachedVariants&&(o.cachedVariants=o.variants.map(function(d){return r(o,{variants:null},d)})),o.cachedVariants?o.cachedVariants:jt(o)?r(o,{starts:o.starts?r(o.starts):null}):Object.isFrozen(o)?r(o):o}var wo="11.11.1";class Eo extends Error{constructor(d,h){super(d),this.name="HTMLInjectionError",this.html=h}}const et=t,Ut=r,$t=Symbol("nomatch"),Do=7,qt=function(o){const d=Object.create(null),h=Object.create(null),N=[];let H=!0;const K="Could not find the language '{}', did you forget to load/include a language module?",w={disableAutodetect:!0,name:"Plain text",contains:[]};let y={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:p};function T(m){return y.noHighlightRe.test(m)}function X(m){let R=m.className+" ";R+=m.parentNode?m.parentNode.className:"";const O=y.languageDetectRe.exec(R);if(O){const V=ke(O[1]);return V||(Bt(K.replace("{}",O[1])),Bt("Falling back to no-highlight mode for this block.",m)),V?O[1]:"no-highlight"}return R.split(/\s+/).find(V=>T(V)||ke(V))}function Z(m,R,O){let V="",G="";typeof R=="object"?(V=m,O=R.ignoreIllegals,G=R.language):(Xe("10.7.0","highlight(lang, code, ...args) has been deprecated."),Xe("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),G=m,V=R),O===void 0&&(O=!0);const _e={code:V,language:G};Mn("before:highlight",_e);const Oe=_e.result?_e.result:an(_e.language,_e.code,O);return Oe.code=_e.code,Mn("after:highlight",Oe),Oe}function an(m,R,O,V){const G=Object.create(null);function _e(b,E){return b.keywords[E]}function Oe(){if(!C.keywords){J.addText(j);return}let b=0;C.keywordPatternRe.lastIndex=0;let E=C.keywordPatternRe.exec(j),k="";for(;E;){k+=j.substring(b,E.index);const L=ye.case_insensitive?E[0].toLowerCase():E[0],Q=_e(C,L);if(Q){const[Se,Vo]=Q;if(J.addText(k),k="",G[L]=(G[L]||0)+1,G[L]<=Do&&(Sn+=Vo),Se.startsWith("_"))k+=E[0];else{const jo=ye.classNameAliases[Se]||Se;be(E[0],jo)}}else k+=E[0];b=C.keywordPatternRe.lastIndex,E=C.keywordPatternRe.exec(j)}k+=j.substring(b),J.addText(k)}function xn(){if(j==="")return;let b=null;if(typeof C.subLanguage=="string"){if(!d[C.subLanguage]){J.addText(j);return}b=an(C.subLanguage,j,!0,Yt[C.subLanguage]),Yt[C.subLanguage]=b._top}else b=tt(j,C.subLanguage.length?C.subLanguage:null);C.relevance>0&&(Sn+=b.relevance),J.__addSublanguage(b._emitter,b.language)}function ae(){C.subLanguage!=null?xn():Oe(),j=""}function be(b,E){b!==""&&(J.startScope(E),J.addText(b),J.endScope())}function Gt(b,E){let k=1;const L=E.length-1;for(;k<=L;){if(!b._emit[k]){k++;continue}const Q=ye.classNameAliases[b[k]]||b[k],Se=E[k];Q?be(Se,Q):(j=Se,Oe(),j=""),k++}}function Wt(b,E){return b.scope&&typeof b.scope=="string"&&J.openNode(ye.classNameAliases[b.scope]||b.scope),b.beginScope&&(b.beginScope._wrap?(be(j,ye.classNameAliases[b.beginScope._wrap]||b.beginScope._wrap),j=""):b.beginScope._multi&&(Gt(b.beginScope,E),j="")),C=Object.create(b,{parent:{value:C}}),C}function Xt(b,E,k){let L=x(b.endRe,k);if(L){if(b["on:end"]){const Q=new n(b);b["on:end"](E,Q),Q.isMatchIgnored&&(L=!1)}if(L){for(;b.endsParent&&b.parent;)b=b.parent;return b}}if(b.endsWithParent)return Xt(b.parent,E,k)}function Io(b){return C.matcher.regexIndex===0?(j+=b[0],1):(it=!0,0)}function Lo(b){const E=b[0],k=b.rule,L=new n(k),Q=[k.__beforeBegin,k["on:begin"]];for(const Se of Q)if(Se&&(Se(b,L),L.isMatchIgnored))return Io(E);return k.skip?j+=E:(k.excludeBegin&&(j+=E),ae(),!k.returnBegin&&!k.excludeBegin&&(j=E)),Wt(k,b),k.returnBegin?0:E.length}function Po(b){const E=b[0],k=R.substring(b.index),L=Xt(C,b,k);if(!L)return $t;const Q=C;C.endScope&&C.endScope._wrap?(ae(),be(E,C.endScope._wrap)):C.endScope&&C.endScope._multi?(ae(),Gt(C.endScope,b)):Q.skip?j+=E:(Q.returnEnd||Q.excludeEnd||(j+=E),ae(),Q.excludeEnd&&(j=E));do C.scope&&J.closeNode(),!C.skip&&!C.subLanguage&&(Sn+=C.relevance),C=C.parent;while(C!==L.parent);return L.starts&&Wt(L.starts,b),Q.returnEnd?0:E.length}function zo(){const b=[];for(let E=C;E!==ye;E=E.parent)E.scope&&b.unshift(E.scope);b.forEach(E=>J.openNode(E))}let Tn={};function Jt(b,E){const k=E&&E[0];if(j+=b,k==null)return ae(),0;if(Tn.type==="begin"&&E.type==="end"&&Tn.index===E.index&&k===""){if(j+=R.slice(E.index,E.index+1),!H){const L=new Error(`0 width match regex (${m})`);throw L.languageName=m,L.badRule=Tn.rule,L}return 1}if(Tn=E,E.type==="begin")return Lo(E);if(E.type==="illegal"&&!O){const L=new Error('Illegal lexeme "'+k+'" for mode "'+(C.scope||"<unnamed>")+'"');throw L.mode=C,L}else if(E.type==="end"){const L=Po(E);if(L!==$t)return L}if(E.type==="illegal"&&k==="")return j+=`
`,1;if(st>1e5&&st>E.index*3)throw new Error("potential infinite loop, way more iterations than matches");return j+=k,k.length}const ye=ke(m);if(!ye)throw He(K.replace("{}",m)),new Error('Unknown language: "'+m+'"');const Bo=bo(ye);let ot="",C=V||Bo;const Yt={},J=new y.__emitter(y);zo();let j="",Sn=0,Ke=0,st=0,it=!1;try{if(ye.__emitTokens)ye.__emitTokens(R,J);else{for(C.matcher.considerAll();;){st++,it?it=!1:C.matcher.considerAll(),C.matcher.lastIndex=Ke;const b=C.matcher.exec(R);if(!b)break;const E=R.substring(Ke,b.index),k=Jt(E,b);Ke=b.index+k}Jt(R.substring(Ke))}return J.finalize(),ot=J.toHTML(),{language:m,value:ot,relevance:Sn,illegal:!1,_emitter:J,_top:C}}catch(b){if(b.message&&b.message.includes("Illegal"))return{language:m,value:et(R),illegal:!0,relevance:0,_illegalBy:{message:b.message,index:Ke,context:R.slice(Ke-100,Ke+100),mode:b.mode,resultSoFar:ot},_emitter:J};if(H)return{language:m,value:et(R),illegal:!1,relevance:0,errorRaised:b,_emitter:J,_top:C};throw b}}function nt(m){const R={value:et(m),illegal:!1,relevance:0,_top:w,_emitter:new y.__emitter(y)};return R._emitter.addText(m),R}function tt(m,R){R=R||y.languages||Object.keys(d);const O=nt(m),V=R.filter(ke).filter(Zt).map(ae=>an(ae,m,!1));V.unshift(O);const G=V.sort((ae,be)=>{if(ae.relevance!==be.relevance)return be.relevance-ae.relevance;if(ae.language&&be.language){if(ke(ae.language).supersetOf===be.language)return 1;if(ke(be.language).supersetOf===ae.language)return-1}return 0}),[_e,Oe]=G,xn=_e;return xn.secondBest=Oe,xn}function Ro(m,R,O){const V=R&&h[R]||O;m.classList.add("hljs"),m.classList.add(`language-${V}`)}function rt(m){let R=null;const O=X(m);if(T(O))return;if(Mn("before:highlightElement",{el:m,language:O}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(y.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),y.throwUnescapedHTML))throw new Eo("One of your code blocks includes unescaped HTML.",m.innerHTML);R=m;const V=R.textContent,G=O?Z(V,{language:O,ignoreIllegals:!0}):tt(V);m.innerHTML=G.value,m.dataset.highlighted="yes",Ro(m,O,G.language),m.result={language:G.language,re:G.relevance,relevance:G.relevance},G.secondBest&&(m.secondBest={language:G.secondBest.language,relevance:G.secondBest.relevance}),Mn("after:highlightElement",{el:m,result:G,text:V})}function Mo(m){y=Ut(y,m)}const xo=()=>{Rn(),Xe("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function To(){Rn(),Xe("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Ht=!1;function Rn(){function m(){Rn()}if(document.readyState==="loading"){Ht||window.addEventListener("DOMContentLoaded",m,!1),Ht=!0;return}document.querySelectorAll(y.cssSelector).forEach(rt)}function So(m,R){let O=null;try{O=R(o)}catch(V){if(He("Language definition for '{}' could not be registered.".replace("{}",m)),H)He(V);else throw V;O=w}O.name||(O.name=m),d[m]=O,O.rawDefinition=R.bind(null,o),O.aliases&&Kt(O.aliases,{languageName:m})}function Fo(m){delete d[m];for(const R of Object.keys(h))h[R]===m&&delete h[R]}function No(){return Object.keys(d)}function ke(m){return m=(m||"").toLowerCase(),d[m]||d[h[m]]}function Kt(m,{languageName:R}){typeof m=="string"&&(m=[m]),m.forEach(O=>{h[O.toLowerCase()]=R})}function Zt(m){const R=ke(m);return R&&!R.disableAutodetect}function Co(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=R=>{m["before:highlightBlock"](Object.assign({block:R.el},R))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=R=>{m["after:highlightBlock"](Object.assign({block:R.el},R))})}function Ao(m){Co(m),N.push(m)}function ko(m){const R=N.indexOf(m);R!==-1&&N.splice(R,1)}function Mn(m,R){const O=m;N.forEach(function(V){V[O]&&V[O](R)})}function Oo(m){return Xe("10.7.0","highlightBlock will be removed entirely in v12.0"),Xe("10.7.0","Please use highlightElement now."),rt(m)}Object.assign(o,{highlight:Z,highlightAuto:tt,highlightAll:Rn,highlightElement:rt,highlightBlock:Oo,configure:Mo,initHighlighting:xo,initHighlightingOnLoad:To,registerLanguage:So,unregisterLanguage:Fo,listLanguages:No,getLanguage:ke,registerAliases:Kt,autoDetection:Zt,inherit:Ut,addPlugin:Ao,removePlugin:ko}),o.debugMode=function(){H=!1},o.safeMode=function(){H=!0},o.versionString=wo,o.regex={concat:S,lookahead:f,either:z,optional:g,anyNumberOfTimes:v};for(const m in En)typeof En[m]=="object"&&e(En[m]);return Object.assign(o,En),o},Je=qt({});return Je.newInstance=()=>qt({}),ft=Je,Je.HighlightJS=Je,Je.default=Je,ft}var q0=$0();const mr=U0(q0);var H0=pe("<pre><code><!></code></pre>");function K0(e,n){const t=jn(n,["children","$$slots","$$events","$$legacy"]),r=jn(t,["code","highlighted","languageName","langtag"]);let i=Ve(n,"code",8),s=Ve(n,"highlighted",8),l=Ve(n,"languageName",8,"plaintext"),u=Ve(n,"langtag",8,!1);var a=H0();let c;var p=W(a);It(p,1,"",null,{},{hljs:!0});var _=W(p);{var f=g=>{var S=Ot(),A=Gn(S);si(A,s),re(g,S)},v=g=>{var S=Js();Ee(()=>Be(S,i())),re(g,S)};ht(_,g=>{s()?g(f):g(v,!1)})}Ee(g=>c=_i(a,c,{"data-language":l(),...r,[un]:g},"svelte-1w9vok"),[()=>({langtag:u()})],St),re(e,a)}function Z0(e,n){const t=jn(n,["children","$$slots","$$events","$$legacy"]),r=jn(t,["language","code","langtag"]);hn(n,!1);let i=Ve(n,"language",8),s=Ve(n,"code",8),l=Ve(n,"langtag",8,!1);const u=bi();let a=Ft("");yi(()=>{I(a)&&u("highlight",{highlighted:I(a)})}),Ts(()=>(pt(i()),pt(s())),()=>{mr.registerLanguage(i().name,i().register),ue(a,mr.highlight(s(),{language:i().name}).value)}),Ss(),Lt();var c=Ot(),p=Gn(c);ii(p,n,"default",{get highlighted(){return I(a)}},_=>{K0(_,gi(()=>r,{get languageName(){return i().name},get langtag(){return l()},get highlighted(){return I(a)},get code(){return s()}}))}),re(e,c),bn()}function G0(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",s={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},l={keywords:s,illegal:/<\//},u={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},a={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},c={className:"subst",begin:/\$\(/,end:/\)/,keywords:s},p={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,c,p],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},f={className:"string",contains:[e.BACKSLASH_ESCAPE,c,p],begin:"`",end:"`"},v={className:"meta",begin:"@"+n},g={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return l.name="Julia",l.contains=[u,a,_,f,v,g,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],c.contains=l.contains,l}const W0={name:"julia",register:G0};var X0=pe('<th class="svelte-m8v9hl"> </th>'),J0=pe('<td class="svelte-m8v9hl"> </td>'),Y0=pe('<a class="issue svelte-m8v9hl" target="_blank">(?)</a>'),Q0=pe('<td class="svelte-m8v9hl"><!> <span> </span></td>'),em=pe('<tr class="svelte-m8v9hl"><td class="svelte-m8v9hl"> <div class="model-definition svelte-m8v9hl"><!></div></td><!></tr>'),nm=pe('<table id="results" class="svelte-m8v9hl"><thead><tr class="svelte-m8v9hl"><th class="svelte-m8v9hl">Model name \\\\ AD type</th><!></tr></thead><tbody></tbody></table>');function tm(e,n){hn(n,!0);const t=[...n.data.keys()],r=n.data.get(t[0]).keys(),i="https://github.com/EnzymeAD/Enzyme.jl/issues/1995",l={assume_mvnormal__EnzymeForward:i,assume_wishart__EnzymeForward:i,multithreaded__Mooncake:"https://github.com/chalk-lab/Mooncake.jl/issues/570"};var u=nm(),a=W(u),c=W(a),p=we(W(c));_n(p,17,()=>r,dn,(f,v)=>{var g=X0(),S=W(g);Ee(()=>Be(S,I(v))),re(f,g)});var _=we(a);_n(_,21,()=>yt(n.data),dn,(f,v)=>{let g=()=>I(v)[0],S=()=>I(v)[1];var A=em(),z=W(A),q=W(z),x=we(q),D=W(x);Z0(D,{language:W0,get code(){return n.modelDefinitions[g()]}});var M=we(z);_n(M,17,()=>yt(S()),dn,(ee,F)=>{let $=()=>I(F)[0],Y=()=>I(F)[1];var xe=Ot(),ve=Gn(xe);{var qe=ne=>{var ge=J0(),Te=W(ge);Ee(Ae=>Be(Te,Ae),[()=>Y().toFixed(3)]),re(ne,ge)},on=ne=>{var ge=Q0(),Te=W(ge);{var Ae=sn=>{var wn=Y0();Ee(()=>bt(wn,"href",l[`${g()}__${$()}`])),re(sn,wn)};ht(Te,sn=>{l[`${g()}__${$()}`]&&sn(Ae)})}var he=we(Te,2),Qn=W(he);Ee(()=>{It(he,1,Hr(Y()),"svelte-m8v9hl"),Be(Qn,Y())}),re(ne,ge)};ht(ve,ne=>{typeof Y()=="number"?ne(qe):ne(on,!1)})}re(ee,xe)}),Ee(()=>Be(q,`${g()??""} `)),re(f,A)}),re(e,u),bn()}var rm=pe("<h3> </h3> <!>",1),om=pe(`<div id="main-wrapper" class="svelte-3oks6t"><main class="svelte-3oks6t"><h1>Turing AD tests</h1> <p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p> <p>This page is intended as a brief overview of how different AD
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
                describes the problem.</li></ul> <div class="warning svelte-3oks6t"><b>Note: The results here are run with Julia 1.11. Mooncake and Enzyme currently do not work on Julia 1.12.</b></div> <h2>Results</h2> <p><a href="adtests.json" target="_blank" download="">Download the raw data (JSON)</a></p> <!> <h2>Manifest</h2> <p>The tests above were run with the following package versions:</p> <!></main></div>`);function sm(e,n){hn(n,!1);let t=new Map;for(const[u,a]of Object.entries(ya)){let c=a.__category__;delete a.__category__;let p=new Map;for(const[_,f]of Object.entries(a))p.set(_,f);t.has(c)||t.set(c,new Map),t.get(c).set(u,p)}console.log(t),Lt();var r=om(),i=W(r),s=we(W(i),16);_n(s,1,()=>t.entries(),dn,(u,a)=>{let c=()=>I(a)[0],p=()=>I(a)[1];var _=rm(),f=Gn(_),v=W(f),g=we(f,2);tm(g,{get data(){return p()},modelDefinitions:hl}),Ee(()=>Be(v,c())),re(u,_)});var l=we(s,6);j0(l,{}),re(e,r),bn()}Ys(sm,{target:document.getElementById("app")});
