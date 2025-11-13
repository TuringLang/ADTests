(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Qn=!1;var Vr=Array.isArray,Uo=Array.prototype.indexOf,wn=Array.from,$o=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,pt=Object.getOwnPropertyDescriptors,qo=Object.prototype,Ho=Array.prototype,En=Object.getPrototypeOf,et=Object.isExtensible;function ar(e){return typeof e=="function"}function Ko(e){return e()}function un(e){for(var r=0;r<e.length;r++)e[r]()}const me=2,gt=4,Ur=8,Dn=16,Ae=32,rr=64,Ar=128,ce=256,kr=512,se=1024,Re=2048,$e=4096,Fe=8192,$r=16384,Zo=32768,Rn=65536,Go=1<<17,Wo=1<<19,ht=1<<20,dn=1<<21,Ge=Symbol("$state"),bt=Symbol("legacy props"),Jo=Symbol("");function yt(e){return e===this.v}function Xo(e,r){return e!=e?r==r:e!==r||e!==null&&typeof e=="object"||typeof e=="function"}function Mn(e){return!Xo(e,this.v)}function Yo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function es(e){throw new Error("https://svelte.dev/e/effect_orphan")}function rs(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ns(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function ts(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function os(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ss(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function is(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let pr=!1,as=!1;function ls(){pr=!0}const xn=1,Tn=2,wt=4,cs=8,fs=16,us=1,ds=2,Et=4,_s=8,ms=16,vs=1,ps=2,ie=Symbol(),gs="http://www.w3.org/1999/xhtml",hs="@attach";function Dt(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let U=null;function rt(e){U=e}function gr(e,r=!1,n){var t=U={p:U,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};pr&&!r&&(U.l={s:null,u:null,r1:[],r2:Qe(!1)}),Rs(()=>{t.d=!0})}function hr(e){const r=U;if(r!==null){const l=r.e;if(l!==null){var n=P,t=B;r.e=null;try{for(var i=0;i<l.length;i++){var s=l[i];Ue(s.effect),Me(s.reaction),Nn(s.fn)}}finally{Ue(n),Me(t)}}U=r.p,r.m=!0}return{}}function qr(){return!pr||U!==null&&U.l===null}function Ze(e){if(typeof e!="object"||e===null||Ge in e)return e;const r=En(e);if(r!==qo&&r!==Ho)return e;var n=new Map,t=Vr(e),i=Ie(0),s=B,l=u=>{var a=B;Me(s);var c=u();return Me(a),c};return t&&n.set("length",Ie(e.length)),new Proxy(e,{defineProperty(u,a,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&os();var v=n.get(a);return v===void 0?(v=l(()=>Ie(c.value)),n.set(a,v)):ue(v,l(()=>Ze(c.value))),!0},deleteProperty(u,a){var c=n.get(a);if(c===void 0)a in u&&(n.set(a,l(()=>Ie(ie))),an(i));else{if(t&&typeof a=="string"){var v=n.get("length"),_=Number(a);Number.isInteger(_)&&_<v.v&&ue(v,_)}ue(c,ie),an(i)}return!0},get(u,a,c){var p;if(a===Ge)return e;var v=n.get(a),_=a in u;if(v===void 0&&(!_||(p=Ve(u,a))!=null&&p.writable)&&(v=l(()=>Ie(Ze(_?u[a]:ie))),n.set(a,v)),v!==void 0){var f=I(v);return f===ie?void 0:f}return Reflect.get(u,a,c)},getOwnPropertyDescriptor(u,a){var c=Reflect.getOwnPropertyDescriptor(u,a);if(c&&"value"in c){var v=n.get(a);v&&(c.value=I(v))}else if(c===void 0){var _=n.get(a),f=_==null?void 0:_.v;if(_!==void 0&&f!==ie)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return c},has(u,a){var f;if(a===Ge)return!0;var c=n.get(a),v=c!==void 0&&c.v!==ie||Reflect.has(u,a);if(c!==void 0||P!==null&&(!v||(f=Ve(u,a))!=null&&f.writable)){c===void 0&&(c=l(()=>Ie(v?Ze(u[a]):ie)),n.set(a,c));var _=I(c);if(_===ie)return!1}return v},set(u,a,c,v){var q;var _=n.get(a),f=a in u;if(t&&a==="length")for(var p=c;p<_.v;p+=1){var g=n.get(p+"");g!==void 0?ue(g,ie):p in u&&(g=l(()=>Ie(ie)),n.set(p+"",g))}_===void 0?(!f||(q=Ve(u,a))!=null&&q.writable)&&(_=l(()=>Ie(void 0)),ue(_,l(()=>Ze(c))),n.set(a,_)):(f=_.v!==ie,ue(_,l(()=>Ze(c))));var S=Reflect.getOwnPropertyDescriptor(u,a);if(S!=null&&S.set&&S.set.call(v,c),!f){if(t&&typeof a=="string"){var k=n.get("length"),z=Number(a);Number.isInteger(z)&&z>=k.v&&ue(k,z+1)}an(i)}return!0},ownKeys(u){I(i);var a=Reflect.ownKeys(u).filter(_=>{var f=n.get(_);return f===void 0||f.v!==ie});for(var[c,v]of n)v.v!==ie&&!(c in u)&&a.push(c);return a},setPrototypeOf(){ss()}})}function an(e,r=1){ue(e,e.v+r)}function _r(e){var r=me|Re,n=B!==null&&(B.f&me)!==0?B:null;return P===null||n!==null&&(n.f&ce)!==0?r|=ce:P.f|=ht,{ctx:U,deps:null,effects:null,equals:yt,f:r,fn:e,reactions:null,rv:0,v:null,wv:0,parent:n??P}}function Sn(e){const r=_r(e);return r.equals=Mn,r}function Rt(e){var r=e.effects;if(r!==null){e.effects=null;for(var n=0;n<r.length;n+=1)Ne(r[n])}}function bs(e){for(var r=e.parent;r!==null;){if((r.f&me)===0)return r;r=r.parent}return null}function Mt(e){var r,n=P;Ue(bs(e));try{Rt(e),r=Vt(e)}finally{Ue(n)}return r}function xt(e){var r=Mt(e),n=(ze||(e.f&ce)!==0)&&e.deps!==null?$e:se;de(e,n),e.equals(r)||(e.v=r,e.wv=Bt())}const mr=new Map;function Qe(e,r){var n={f:0,v:e,reactions:null,equals:yt,rv:0,wv:0};return n}function Ie(e,r){const n=Qe(e);return As(n),n}function Fn(e,r=!1){var t;const n=Qe(e);return r||(n.equals=Mn),pr&&U!==null&&U.l!==null&&((t=U.l).s??(t.s=[])).push(n),n}function ue(e,r,n=!1){B!==null&&!De&&qr()&&(B.f&(me|Dn))!==0&&!(oe!=null&&oe.includes(e))&&is();let t=n?Ze(r):r;return _n(e,t)}function _n(e,r){if(!e.equals(r)){var n=e.v;br?mr.set(e,r):mr.set(e,n),e.v=r,(e.f&me)!==0&&((e.f&Re)!==0&&Mt(e),de(e,(e.f&ce)===0?se:$e)),e.wv=Bt(),Tt(e,Re),qr()&&P!==null&&(P.f&se)!==0&&(P.f&(Ae|rr))===0&&(fe===null?ks([e]):fe.push(e))}return r}function nt(e,r=1){var n=I(e),t=r===1?n++:n--;return ue(e,n),t}function Tt(e,r){var n=e.reactions;if(n!==null)for(var t=qr(),i=n.length,s=0;s<i;s++){var l=n[s],u=l.f;(u&Re)===0&&(!t&&l===P||(de(l,r),(u&(se|ce))!==0&&((u&me)!==0?Tt(l,$e):Xr(l))))}}let ys=!1;var tt,St,Ft,Nt;function ws(){if(tt===void 0){tt=window,St=/Firefox/.test(navigator.userAgent);var e=Element.prototype,r=Node.prototype,n=Text.prototype;Ft=Ve(r,"firstChild").get,Nt=Ve(r,"nextSibling").get,et(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),et(n)&&(n.__t=void 0)}}function Hr(e=""){return document.createTextNode(e)}function Pe(e){return Ft.call(e)}function Kr(e){return Nt.call(e)}function W(e,r){return Pe(e)}function Zr(e,r){{var n=Pe(e);return n instanceof Comment&&n.data===""?Kr(n):n}}function we(e,r=1,n=!1){let t=e;for(;r--;)t=Kr(t);return t}function Es(e){e.textContent=""}function At(e){P===null&&B===null&&es(),B!==null&&(B.f&ce)!==0&&P===null&&Qo(),br&&Yo()}function Ds(e,r){var n=r.last;n===null?r.last=r.first=e:(n.next=e,e.prev=n,r.last=e)}function nr(e,r,n,t=!0){var i=P,s={ctx:U,deps:null,nodes_start:null,nodes_end:null,f:e|Re,first:null,fn:r,last:null,next:null,parent:i,prev:null,teardown:null,transitions:null,wv:0};if(n)try{Jr(s),s.f|=Zo}catch(a){throw Ne(s),a}else r!==null&&Xr(s);var l=n&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(ht|Ar))===0;if(!l&&t&&(i!==null&&Ds(s,i),B!==null&&(B.f&me)!==0)){var u=B;(u.effects??(u.effects=[])).push(s)}return s}function Rs(e){const r=nr(Ur,null,!1);return de(r,se),r.teardown=e,r}function ot(e){At();var r=P!==null&&(P.f&Ae)!==0&&U!==null&&!U.m;if(r){var n=U;(n.e??(n.e=[])).push({fn:e,effect:P,reaction:B})}else{var t=Nn(e);return t}}function Ms(e){return At(),An(e)}function xs(e){const r=nr(rr,e,!0);return(n={})=>new Promise(t=>{n.outro?Cr(r,()=>{Ne(r),t(void 0)}):(Ne(r),t(void 0))})}function Nn(e){return nr(gt,e,!1)}function Ts(e,r){var n=U,t={effect:null,ran:!1};n.l.r1.push(t),t.effect=An(()=>{e(),!t.ran&&(t.ran=!0,ue(n.l.r2,!0),Br(r))})}function Ss(){var e=U;An(()=>{if(I(e.l.r2)){for(var r of e.l.r1){var n=r.effect;(n.f&se)!==0&&de(n,$e),tr(n)&&Jr(n),r.ran=!1}e.l.r2.v=!1}})}function An(e){return nr(Ur,e,!0)}function Ee(e,r=[],n=_r){const t=r.map(n);return Gr(()=>e(...t.map(I)))}function Gr(e,r=0){return nr(Ur|Dn|r,e,!0)}function er(e,r=!0){return nr(Ur|Ae,e,!0,r)}function kt(e){var r=e.teardown;if(r!==null){const n=br,t=B;st(!0),Me(null);try{r.call(null)}finally{st(n),Me(t)}}}function Ct(e,r=!1){var n=e.first;for(e.first=e.last=null;n!==null;){var t=n.next;(n.f&rr)!==0?n.parent=null:Ne(n,r),n=t}}function Fs(e){for(var r=e.first;r!==null;){var n=r.next;(r.f&Ae)===0&&Ne(r),r=n}}function Ne(e,r=!0){var n=!1;(r||(e.f&Wo)!==0)&&e.nodes_start!==null&&(Ot(e.nodes_start,e.nodes_end),n=!0),Ct(e,r&&!n),zr(e,0),de(e,$r);var t=e.transitions;if(t!==null)for(const s of t)s.stop();kt(e);var i=e.parent;i!==null&&i.first!==null&&It(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Ot(e,r){for(;e!==null;){var n=e===r?null:Kr(e);e.remove(),e=n}}function It(e){var r=e.parent,n=e.prev,t=e.next;n!==null&&(n.next=t),t!==null&&(t.prev=n),r!==null&&(r.first===e&&(r.first=t),r.last===e&&(r.last=n))}function Cr(e,r){var n=[];kn(e,n,!0),Lt(n,()=>{Ne(e),r&&r()})}function Lt(e,r){var n=e.length;if(n>0){var t=()=>--n||r();for(var i of e)i.out(t)}else r()}function kn(e,r,n){if((e.f&Fe)===0){if(e.f^=Fe,e.transitions!==null)for(const l of e.transitions)(l.is_global||n)&&r.push(l);for(var t=e.first;t!==null;){var i=t.next,s=(t.f&Rn)!==0||(t.f&Ae)!==0;kn(t,r,s?n:!1),t=i}}}function Or(e){Pt(e,!0)}function Pt(e,r){if((e.f&Fe)!==0){e.f^=Fe,(e.f&se)===0&&(e.f^=se),tr(e)&&(de(e,Re),Xr(e));for(var n=e.first;n!==null;){var t=n.next,i=(n.f&Rn)!==0||(n.f&Ae)!==0;Pt(n,i?r:!1),n=t}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||r)&&s.in()}}let Ir=[];function Ns(){var e=Ir;Ir=[],un(e)}function Cn(e){Ir.length===0&&queueMicrotask(Ns),Ir.push(e)}let Fr=!1,mn=!1,Lr=null,We=!1,br=!1;function st(e){br=e}let Nr=[];let B=null,De=!1;function Me(e){B=e}let P=null;function Ue(e){P=e}let oe=null;function As(e){B!==null&&B.f&dn&&(oe===null?oe=[e]:oe.push(e))}let ne=null,le=0,fe=null;function ks(e){fe=e}let zt=1,Pr=0,ze=!1;function Bt(){return++zt}function tr(e){var _;var r=e.f;if((r&Re)!==0)return!0;if((r&$e)!==0){var n=e.deps,t=(r&ce)!==0;if(n!==null){var i,s,l=(r&kr)!==0,u=t&&P!==null&&!ze,a=n.length;if(l||u){var c=e,v=c.parent;for(i=0;i<a;i++)s=n[i],(l||!((_=s==null?void 0:s.reactions)!=null&&_.includes(c)))&&(s.reactions??(s.reactions=[])).push(c);l&&(c.f^=kr),u&&v!==null&&(v.f&ce)===0&&(c.f^=ce)}for(i=0;i<a;i++)if(s=n[i],tr(s)&&xt(s),s.wv>e.wv)return!0}(!t||P!==null&&!ze)&&de(e,se)}return!1}function Cs(e,r){for(var n=r;n!==null;){if((n.f&Ar)!==0)try{n.fn(e);return}catch{n.f^=Ar}n=n.parent}throw Fr=!1,e}function it(e){return(e.f&$r)===0&&(e.parent===null||(e.parent.f&Ar)===0)}function Wr(e,r,n,t){if(Fr){if(n===null&&(Fr=!1),it(r))throw e;return}if(n!==null&&(Fr=!0),Cs(e,r),it(r))throw e}function jt(e,r,n=!0){var t=e.reactions;if(t!==null)for(var i=0;i<t.length;i++){var s=t[i];oe!=null&&oe.includes(e)||((s.f&me)!==0?jt(s,r,!1):r===s&&(n?de(s,Re):(s.f&se)!==0&&de(s,$e),Xr(s)))}}function Vt(e){var p;var r=ne,n=le,t=fe,i=B,s=ze,l=oe,u=U,a=De,c=e.f;ne=null,le=0,fe=null,ze=(c&ce)!==0&&(De||!We||B===null),B=(c&(Ae|rr))===0?e:null,oe=null,rt(e.ctx),De=!1,Pr++,e.f|=dn;try{var v=(0,e.fn)(),_=e.deps;if(ne!==null){var f;if(zr(e,le),_!==null&&le>0)for(_.length=le+ne.length,f=0;f<ne.length;f++)_[le+f]=ne[f];else e.deps=_=ne;if(!ze)for(f=le;f<_.length;f++)((p=_[f]).reactions??(p.reactions=[])).push(e)}else _!==null&&le<_.length&&(zr(e,le),_.length=le);if(qr()&&fe!==null&&!De&&_!==null&&(e.f&(me|$e|Re))===0)for(f=0;f<fe.length;f++)jt(fe[f],e);return i!==null&&i!==e&&(Pr++,fe!==null&&(t===null?t=fe:t.push(...fe))),v}finally{ne=r,le=n,fe=t,B=i,ze=s,oe=l,rt(u),De=a,e.f^=dn}}function Os(e,r){let n=r.reactions;if(n!==null){var t=Uo.call(n,e);if(t!==-1){var i=n.length-1;i===0?n=r.reactions=null:(n[t]=n[i],n.pop())}}n===null&&(r.f&me)!==0&&(ne===null||!ne.includes(r))&&(de(r,$e),(r.f&(ce|kr))===0&&(r.f^=kr),Rt(r),zr(r,0))}function zr(e,r){var n=e.deps;if(n!==null)for(var t=r;t<n.length;t++)Os(e,n[t])}function Jr(e){var r=e.f;if((r&$r)===0){de(e,se);var n=P,t=U,i=We;P=e,We=!0;try{(r&Dn)!==0?Fs(e):Ct(e),kt(e);var s=Vt(e);e.teardown=typeof s=="function"?s:null,e.wv=zt;var l=e.deps,u;Qn&&as&&e.f&Re}catch(a){Wr(a,e,n,t||e.ctx)}finally{We=i,P=n}}}function Is(){try{rs()}catch(e){if(Lr!==null)Wr(e,Lr,null);else throw e}}function Ls(){var e=We;try{var r=0;for(We=!0;Nr.length>0;){r++>1e3&&Is();var n=Nr,t=n.length;Nr=[];for(var i=0;i<t;i++){var s=zs(n[i]);Ps(s)}mr.clear()}}finally{mn=!1,We=e,Lr=null}}function Ps(e){var r=e.length;if(r!==0)for(var n=0;n<r;n++){var t=e[n];if((t.f&($r|Fe))===0)try{tr(t)&&(Jr(t),t.deps===null&&t.first===null&&t.nodes_start===null&&(t.teardown===null?It(t):t.fn=null))}catch(i){Wr(i,t,null,t.ctx)}}}function Xr(e){mn||(mn=!0,queueMicrotask(Ls));for(var r=Lr=e;r.parent!==null;){r=r.parent;var n=r.f;if((n&(rr|Ae))!==0){if((n&se)===0)return;r.f^=se}}Nr.push(r)}function zs(e){for(var r=[],n=e;n!==null;){var t=n.f,i=(t&(Ae|rr))!==0,s=i&&(t&se)!==0;if(!s&&(t&Fe)===0){if((t&gt)!==0)r.push(n);else if(i)n.f^=se;else try{tr(n)&&Jr(n)}catch(a){Wr(a,n,null,n.ctx)}var l=n.first;if(l!==null){n=l;continue}}var u=n.parent;for(n=n.next;n===null&&u!==null;)n=u.next,u=u.parent}return r}function I(e){var r=e.f,n=(r&me)!==0;if(B!==null&&!De){if(!(oe!=null&&oe.includes(e))){var t=B.deps;e.rv<Pr&&(e.rv=Pr,ne===null&&t!==null&&t[le]===e?le++:ne===null?ne=[e]:(!ze||!ne.includes(e))&&ne.push(e))}}else if(n&&e.deps===null&&e.effects===null){var i=e,s=i.parent;s!==null&&(s.f&ce)===0&&(i.f^=ce)}return n&&(i=e,tr(i)&&xt(i)),br&&mr.has(e)?mr.get(e):e.v}function Br(e){var r=De;try{return De=!0,e()}finally{De=r}}const Bs=-7169;function de(e,r){e.f=e.f&Bs|r}function vn(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ge in e)pn(e);else if(!Array.isArray(e))for(let r in e){const n=e[r];typeof n=="object"&&n&&Ge in n&&pn(n)}}}function pn(e,r=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!r.has(e)){r.add(e),e instanceof Date&&e.getTime();for(let t in e)try{pn(e[t],r)}catch{}const n=En(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const t=pt(n);for(let i in t){const s=t[i].get;if(s)try{s.call(e)}catch{}}}}}function js(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Vs=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Us(e){return Vs.includes(e)}const $s={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function qs(e){return e=e.toLowerCase(),$s[e]??e}const Hs=["touchstart","touchmove"];function Ks(e){return Hs.includes(e)}function Zs(e,r){if(r){const n=document.body;e.autofocus=!0,Cn(()=>{document.activeElement===n&&e.focus()})}}function Gs(e){var r=B,n=P;Me(null),Ue(null);try{return e()}finally{Me(r),Ue(n)}}const Ut=new Set,gn=new Set;function Ws(e,r,n,t={}){function i(s){if(t.capture||cr.call(r,s),!s.cancelBubble)return Gs(()=>n==null?void 0:n.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Cn(()=>{r.addEventListener(e,i,t)}):r.addEventListener(e,i,t),i}function Js(e){for(var r=0;r<e.length;r++)Ut.add(e[r]);for(var n of gn)n(e)}function cr(e){var q;var r=this,n=r.ownerDocument,t=e.type,i=((q=e.composedPath)==null?void 0:q.call(e))||[],s=i[0]||e.target,l=0,u=e.__root;if(u){var a=i.indexOf(u);if(a!==-1&&(r===document||r===window)){e.__root=r;return}var c=i.indexOf(r);if(c===-1)return;a<=c&&(l=a)}if(s=i[l]||e.target,s!==r){$o(e,"currentTarget",{configurable:!0,get(){return s||n}});var v=B,_=P;Me(null),Ue(null);try{for(var f,p=[];s!==null;){var g=s.assignedSlot||s.parentNode||s.host||null;try{var S=s["__"+t];if(S!=null&&(!s.disabled||e.target===s))if(Vr(S)){var[k,...z]=S;k.apply(s,[e,...z])}else S.call(s,e)}catch(x){f?p.push(x):f=x}if(e.cancelBubble||g===r||g===null)break;s=g}if(f){for(let x of p)queueMicrotask(()=>{throw x});throw f}}finally{e.__root=r,delete e.currentTarget,Me(v),Ue(_)}}}function $t(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function vr(e,r){var n=P;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=r)}function ve(e,r){var n=(r&vs)!==0,t=(r&ps)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=$t(s?e:"<!>"+e),n||(i=Pe(i)));var l=t||St?document.importNode(i,!0):i.cloneNode(!0);if(n){var u=Pe(l),a=l.lastChild;vr(u,a)}else vr(l,l);return l}}function Xs(e=""){{var r=Hr(e+"");return vr(r,r),r}}function On(){var e=document.createDocumentFragment(),r=document.createComment(""),n=Hr();return e.append(r,n),vr(r,n),e}function te(e,r){e!==null&&e.before(r)}function Be(e,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n+"")}function Ys(e,r){return Qs(e,r)}const Ye=new Map;function Qs(e,{target:r,anchor:n,props:t={},events:i,context:s,intro:l=!0}){ws();var u=new Set,a=_=>{for(var f=0;f<_.length;f++){var p=_[f];if(!u.has(p)){u.add(p);var g=Ks(p);r.addEventListener(p,cr,{passive:g});var S=Ye.get(p);S===void 0?(document.addEventListener(p,cr,{passive:g}),Ye.set(p,1)):Ye.set(p,S+1)}}};a(wn(Ut)),gn.add(a);var c=void 0,v=xs(()=>{var _=n??r.appendChild(Hr());return er(()=>{if(s){gr({});var f=U;f.c=s}i&&(t.$$events=i),c=e(_,t)||{},s&&hr()}),()=>{var g;for(var f of u){r.removeEventListener(f,cr);var p=Ye.get(f);--p===0?(document.removeEventListener(f,cr),Ye.delete(f)):Ye.set(f,p)}gn.delete(a),_!==n&&((g=_.parentNode)==null||g.removeChild(_))}});return ei.set(c,v),c}let ei=new WeakMap;function hn(e,r,[n,t]=[0,0]){var i=e,s=null,l=null,u=ie,a=n>0?Rn:0,c=!1;const v=(f,p=!0)=>{c=!0,_(p,f)},_=(f,p)=>{u!==(u=f)&&(u?(s?Or(s):p&&(s=er(()=>p(i))),l&&Cr(l,()=>{l=null})):(l?Or(l):p&&(l=er(()=>p(i,[n+1,t]))),s&&Cr(s,()=>{s=null})))};Gr(()=>{c=!1,r(v),c||_(null,null)},a)}function ur(e,r){return r}function ri(e,r,n,t){for(var i=[],s=r.length,l=0;l<s;l++)kn(r[l].e,i,!0);var u=s>0&&i.length===0&&n!==null;if(u){var a=n.parentNode;Es(a),a.append(n),t.clear(),Le(e,r[0].prev,r[s-1].next)}Lt(i,()=>{for(var c=0;c<s;c++){var v=r[c];u||(t.delete(v.k),Le(e,v.prev,v.next)),Ne(v.e,!u)}})}function dr(e,r,n,t,i,s=null){var l=e,u={flags:r,items:new Map,first:null},a=(r&wt)!==0;if(a){var c=e;l=c.appendChild(Hr())}var v=null,_=!1,f=Sn(()=>{var p=n();return Vr(p)?p:p==null?[]:wn(p)});Gr(()=>{var p=I(f),g=p.length;_&&g===0||(_=g===0,ni(p,u,l,i,r,t,n),s!==null&&(g===0?v?Or(v):v=er(()=>s(l)):v!==null&&Cr(v,()=>{v=null})),I(f))})}function ni(e,r,n,t,i,s,l){var re,ge,Te,ke;var u=(i&cs)!==0,a=(i&(xn|Tn))!==0,c=e.length,v=r.items,_=r.first,f=_,p,g=null,S,k=[],z=[],q,x,D,M;if(u)for(M=0;M<c;M+=1)q=e[M],x=s(q,M),D=v.get(x),D!==void 0&&((re=D.a)==null||re.measure(),(S??(S=new Set)).add(D));for(M=0;M<c;M+=1){if(q=e[M],x=s(q,M),D=v.get(x),D===void 0){var ee=f?f.e.nodes_start:n;g=oi(ee,r,g,g===null?r.first:g.next,q,x,M,t,i,l),v.set(x,g),k=[],z=[],f=g.next;continue}if(a&&ti(D,q,M,i),(D.e.f&Fe)!==0&&(Or(D.e),u&&((ge=D.a)==null||ge.unfix(),(S??(S=new Set)).delete(D))),D!==f){if(p!==void 0&&p.has(D)){if(k.length<z.length){var F=z[0],$;g=F.prev;var Y=k[0],xe=k[k.length-1];for($=0;$<k.length;$+=1)at(k[$],F,n);for($=0;$<z.length;$+=1)p.delete(z[$]);Le(r,Y.prev,xe.next),Le(r,g,Y),Le(r,xe,F),f=F,g=xe,M-=1,k=[],z=[]}else p.delete(D),at(D,f,n),Le(r,D.prev,D.next),Le(r,D,g===null?r.first:g.next),Le(r,g,D),g=D;continue}for(k=[],z=[];f!==null&&f.k!==x;)(f.e.f&Fe)===0&&(p??(p=new Set)).add(f),z.push(f),f=f.next;if(f===null)continue;D=f}k.push(D),g=D,f=D.next}if(f!==null||p!==void 0){for(var pe=p===void 0?[]:wn(p);f!==null;)(f.e.f&Fe)===0&&pe.push(f),f=f.next;var qe=pe.length;if(qe>0){var or=(i&wt)!==0&&c===0?n:null;if(u){for(M=0;M<qe;M+=1)(Te=pe[M].a)==null||Te.measure();for(M=0;M<qe;M+=1)(ke=pe[M].a)==null||ke.fix()}ri(r,pe,or,v)}}u&&Cn(()=>{var he;if(S!==void 0)for(D of S)(he=D.a)==null||he.apply()}),P.first=r.first&&r.first.e,P.last=g&&g.e}function ti(e,r,n,t){(t&xn)!==0&&_n(e.v,r),(t&Tn)!==0?_n(e.i,n):e.i=n}function oi(e,r,n,t,i,s,l,u,a,c){var v=(a&xn)!==0,_=(a&fs)===0,f=v?_?Fn(i):Qe(i):i,p=(a&Tn)===0?l:Qe(l),g={i:p,v:f,k:s,a:null,e:null,prev:n,next:t};try{return g.e=er(()=>u(e,f,p,c),ys),g.e.prev=n&&n.e,g.e.next=t&&t.e,n===null?r.first=g:(n.next=g,n.e.next=g.e),t!==null&&(t.prev=g,t.e.prev=g.e),g}finally{}}function at(e,r,n){for(var t=e.next?e.next.e.nodes_start:n,i=r?r.e.nodes_start:n,s=e.e.nodes_start;s!==t;){var l=Kr(s);i.before(s),s=l}}function Le(e,r,n){r===null?e.first=n:(r.next=n,r.e.next=n&&n.e),n!==null&&(n.prev=r,n.e.prev=r&&r.e)}function si(e,r,n=!1,t=!1,i=!1){var s=e,l="";Ee(()=>{var u=P;if(l!==(l=r()??"")&&(u.nodes_start!==null&&(Ot(u.nodes_start,u.nodes_end),u.nodes_start=u.nodes_end=null),l!=="")){var a=l+"";n?a=`<svg>${a}</svg>`:t&&(a=`<math>${a}</math>`);var c=$t(a);if((n||t)&&(c=Pe(c)),vr(Pe(c),c.lastChild),n||t)for(;Pe(c);)s.before(Pe(c));else s.before(c)}})}function ii(e,r,n,t,i){var u;var s=(u=r.$$slots)==null?void 0:u[n],l=!1;s===!0&&(s=r.children,l=!0),s===void 0?i!==null&&i(e):s(e,l?()=>t:t)}function ai(e,r){var n=void 0,t;Gr(()=>{n!==(n=r())&&(t&&(Ne(t),t=null),n&&(t=er(()=>{Nn(()=>n(e))})))})}function qt(e){var r,n,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(r=0;r<i;r++)e[r]&&(n=qt(e[r]))&&(t&&(t+=" "),t+=n)}else for(n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function li(){for(var e,r,n=0,t="",i=arguments.length;n<i;n++)(e=arguments[n])&&(r=qt(e))&&(t&&(t+=" "),t+=r);return t}function Ht(e){return typeof e=="object"?li(e):e??""}const lt=[...` 	
\r\f \v\uFEFF`];function ci(e,r,n){var t=e==null?"":""+e;if(r&&(t=t?t+" "+r:r),n){for(var i in n)if(n[i])t=t?t+" "+i:i;else if(t.length)for(var s=i.length,l=0;(l=t.indexOf(i,l))>=0;){var u=l+s;(l===0||lt.includes(t[l-1]))&&(u===t.length||lt.includes(t[u]))?t=(l===0?"":t.substring(0,l))+t.substring(u+1):l=u}}return t===""?null:t}function ct(e,r=!1){var n=r?" !important;":";",t="";for(var i in e){var s=e[i];s!=null&&s!==""&&(t+=" "+i+": "+s+n)}return t}function ln(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function fi(e,r){if(r){var n="",t,i;if(Array.isArray(r)?(t=r[0],i=r[1]):t=r,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,l=0,u=!1,a=[];t&&a.push(...Object.keys(t).map(ln)),i&&a.push(...Object.keys(i).map(ln));var c=0,v=-1;const S=e.length;for(var _=0;_<S;_++){var f=e[_];if(u?f==="/"&&e[_-1]==="*"&&(u=!1):s?s===f&&(s=!1):f==="/"&&e[_+1]==="*"?u=!0:f==='"'||f==="'"?s=f:f==="("?l++:f===")"&&l--,!u&&s===!1&&l===0){if(f===":"&&v===-1)v=_;else if(f===";"||_===S-1){if(v!==-1){var p=ln(e.substring(c,v).trim());if(!a.includes(p)){f!==";"&&_++;var g=e.substring(c,_).trim();n+=" "+g+";"}}c=_+1,v=-1}}}}return t&&(n+=ct(t)),i&&(n+=ct(i,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function In(e,r,n,t,i,s){var l=e.__className;if(l!==n||l===void 0){var u=ci(n,t,s);u==null?e.removeAttribute("class"):r?e.className=u:e.setAttribute("class",u),e.__className=n}else if(s&&i!==s)for(var a in s){var c=!!s[a];(i==null||c!==!!i[a])&&e.classList.toggle(a,c)}return s}function cn(e,r={},n,t){for(var i in n){var s=n[i];r[i]!==s&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,t))}}function ui(e,r,n,t){var i=e.__style;if(i!==r){var s=fi(r,t);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=r}else t&&(Array.isArray(t)?(cn(e,n==null?void 0:n[0],t[0]),cn(e,n==null?void 0:n[1],t[1],"important")):cn(e,n,t));return t}const fr=Symbol("class"),lr=Symbol("style"),Kt=Symbol("is custom element"),Zt=Symbol("is html");function di(e,r){r?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function bn(e,r,n,t){var i=Gt(e);i[r]!==(i[r]=n)&&(r==="loading"&&(e[Jo]=n),n==null?e.removeAttribute(r):typeof n!="string"&&Wt(e).includes(r)?e[r]=n:e.setAttribute(r,n))}function _i(e,r,n,t,i=!1){var s=Gt(e),l=s[Kt],u=!s[Zt],a=r||{},c=e.tagName==="OPTION";for(var v in r)v in n||(n[v]=null);n.class?n.class=Ht(n.class):n.class=null,n[lr]&&(n.style??(n.style=null));var _=Wt(e);for(const x in n){let D=n[x];if(c&&x==="value"&&D==null){e.value=e.__value="",a[x]=D;continue}if(x==="class"){var f=e.namespaceURI==="http://www.w3.org/1999/xhtml";In(e,f,D,t,r==null?void 0:r[fr],n[fr]),a[x]=D,a[fr]=n[fr];continue}if(x==="style"){ui(e,D,r==null?void 0:r[lr],n[lr]),a[x]=D,a[lr]=n[lr];continue}var p=a[x];if(D!==p){a[x]=D;var g=x[0]+x[1];if(g!=="$$")if(g==="on"){const M={},ee="$$"+x;let F=x.slice(2);var S=Us(F);if(js(F)&&(F=F.slice(0,-7),M.capture=!0),!S&&p){if(D!=null)continue;e.removeEventListener(F,a[ee],M),a[ee]=null}if(D!=null)if(S)e[`__${F}`]=D,Js([F]);else{let $=function(Y){a[x].call(this,Y)};var q=$;a[ee]=Ws(F,e,$,M)}else S&&(e[`__${F}`]=void 0)}else if(x==="style")bn(e,x,D);else if(x==="autofocus")Zs(e,!!D);else if(!l&&(x==="__value"||x==="value"&&D!=null))e.value=e.__value=D;else if(x==="selected"&&c)di(e,D);else{var k=x;u||(k=qs(k));var z=k==="defaultValue"||k==="defaultChecked";if(D==null&&!l&&!z)if(s[x]=null,k==="value"||k==="checked"){let M=e;const ee=r===void 0;if(k==="value"){let F=M.defaultValue;M.removeAttribute(k),M.defaultValue=F,M.value=M.__value=ee?F:null}else{let F=M.defaultChecked;M.removeAttribute(k),M.defaultChecked=F,M.checked=ee?F:!1}}else e.removeAttribute(x);else z||_.includes(k)&&(l||typeof D!="string")?e[k]=D:typeof D!="function"&&bn(e,k,D)}}}for(let x of Object.getOwnPropertySymbols(n))x.description===hs&&ai(e,()=>n[x]);return a}function Gt(e){return e.__attributes??(e.__attributes={[Kt]:e.nodeName.includes("-"),[Zt]:e.namespaceURI===gs})}var ft=new Map;function Wt(e){var r=ft.get(e.nodeName);if(r)return r;ft.set(e.nodeName,r=[]);for(var n,t=e,i=Element.prototype;i!==t;){n=pt(t);for(var s in n)n[s].set&&r.push(s);t=En(t)}return r}function Ln(e=!1){const r=U,n=r.l.u;if(!n)return;let t=()=>vn(r.s);if(e){let i=0,s={};const l=_r(()=>{let u=!1;const a=r.s;for(const c in a)a[c]!==s[c]&&(s[c]=a[c],u=!0);return u&&i++,i});t=()=>I(l)}n.b.length&&Ms(()=>{ut(r,t),un(n.b)}),ot(()=>{const i=Br(()=>n.m.map(Ko));return()=>{for(const s of i)typeof s=="function"&&s()}}),n.a.length&&ot(()=>{ut(r,t),un(n.a)})}function ut(e,r){if(e.l.s)for(const n of e.l.s)I(n);r()}let Sr=!1;function mi(e){var r=Sr;try{return Sr=!1,[e(),Sr]}finally{Sr=r}}const vi={get(e,r){if(!e.exclude.includes(r))return I(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,n){return r in e.special||(e.special[r]=je({get[r](){return e.props[r]}},r,Et)),e.special[r](n),nt(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),nt(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function jr(e,r){return new Proxy({props:e,exclude:r,special:{},version:Qe(0)},vi)}const pi={get(e,r){let n=e.props.length;for(;n--;){let t=e.props[n];if(ar(t)&&(t=t()),typeof t=="object"&&t!==null&&r in t)return t[r]}},set(e,r,n){let t=e.props.length;for(;t--;){let i=e.props[t];ar(i)&&(i=i());const s=Ve(i,r);if(s&&s.set)return s.set(n),!0}return!1},getOwnPropertyDescriptor(e,r){let n=e.props.length;for(;n--;){let t=e.props[n];if(ar(t)&&(t=t()),typeof t=="object"&&t!==null&&r in t){const i=Ve(t,r);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,r){if(r===Ge||r===bt)return!1;for(let n of e.props)if(ar(n)&&(n=n()),n!=null&&r in n)return!0;return!1},ownKeys(e){const r=[];for(let n of e.props)if(ar(n)&&(n=n()),!!n){for(const t in n)r.includes(t)||r.push(t);for(const t of Object.getOwnPropertySymbols(n))r.includes(t)||r.push(t)}return r}};function gi(...e){return new Proxy({props:e},pi)}function dt(e){var r;return((r=e.ctx)==null?void 0:r.d)??!1}function je(e,r,n,t){var ee;var i=(n&us)!==0,s=!pr||(n&ds)!==0,l=(n&_s)!==0,u=(n&ms)!==0,a=!1,c;l?[c,a]=mi(()=>e[r]):c=e[r];var v=Ge in e||bt in e,_=l&&(((ee=Ve(e,r))==null?void 0:ee.set)??(v&&r in e&&(F=>e[r]=F)))||void 0,f=t,p=!0,g=!1,S=()=>(g=!0,p&&(p=!1,u?f=Br(t):f=t),f);c===void 0&&t!==void 0&&(_&&s&&ts(),c=S(),_&&_(c));var k;if(s)k=()=>{var F=e[r];return F===void 0?S():(p=!0,g=!1,F)};else{var z=(i?_r:Sn)(()=>e[r]);z.f|=Go,k=()=>{var F=I(z);return F!==void 0&&(f=void 0),F===void 0?f:F}}if((n&Et)===0)return k;if(_){var q=e.$$legacy;return function(F,$){return arguments.length>0?((!s||!$||q||a)&&_($?k():F),F):k()}}var x=!1,D=Fn(c),M=_r(()=>{var F=k(),$=I(D);return x?(x=!1,$):D.v=F});return l&&I(M),i||(M.equals=Mn),function(F,$){if(arguments.length>0){const Y=$?I(M):s&&l?Ze(F):F;if(!M.equals(Y)){if(x=!0,ue(D,Y),g&&f!==void 0&&(f=Y),dt(M))return F;Br(()=>I(M))}return F}return dt(M)?M.v:I(M)}}function hi(e,r,{bubbles:n=!1,cancelable:t=!1}={}){return new CustomEvent(e,{detail:r,bubbles:n,cancelable:t})}function bi(){const e=U;return e===null&&Dt(),(r,n,t)=>{var s;const i=(s=e.s.$$events)==null?void 0:s[r];if(i){const l=Vr(i)?i.slice():[i],u=hi(r,n,t);for(const a of l)a.call(e.x,u);return!u.defaultPrevented}return!0}}function yi(e){U===null&&Dt(),U.l===null&&ns(),wi(U).a.push(e)}function wi(e){var r=e.l;return r.u??(r.u={a:[],b:[],m:[]})}const Ei="5";var vt;typeof window<"u"&&((vt=window.__svelte??(window.__svelte={})).v??(vt.v=new Set)).add(Ei);ls();const Di={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Ri={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Mi={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},xi={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Ti={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Si={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Fi={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Ni={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Ai={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ki={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Ci={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Oi={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Ii={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Li={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Pi={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},zi={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Bi={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ji={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Vi={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Ui={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},$i={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},qi={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Hi={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Ki={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Zi={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Gi={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Wi={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Ji={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Xi={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Yi={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Qi={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ea={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ra={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},na={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ta={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},oa={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},sa={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ia={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},aa={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},la={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ca={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},fa={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ua={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},da={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},_a={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ma={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},va={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},pa={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ga={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ha={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ba={__category__:"error",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ya={assume_beta:Di,assume_dirichlet:Ri,demo_assume_dot_observe:Mi,demo_assume_dot_observe_literal:xi,demo_assume_index_observe:Ti,demo_assume_matrix_observe_matrix_index:Si,demo_assume_multivariate_observe:Fi,demo_assume_multivariate_observe_literal:Ni,demo_assume_observe_literal:Ai,demo_assume_submodel_observe_index_literal:ki,demo_dot_assume_observe:Ci,demo_dot_assume_observe_index:Oi,assume_lkjcholu:Ii,demo_dot_assume_observe_index_literal:Li,demo_dot_assume_observe_matrix_index:Pi,demo_dot_assume_observe_submodel:zi,dot_assume:Bi,dot_observe:ji,dppl_gauss_unknown:Vi,dppl_hier_poisson:Ui,dppl_high_dim_gauss:$i,dppl_hmm_semisup:qi,dppl_lda:Hi,assume_mvnormal:Ki,dppl_logistic_regression:Zi,dppl_naive_bayes:Gi,dppl_sto_volatility:Wi,dynamic_constraint:Ji,metabayesian_MH:Xi,multiple_constraints_same_var:Yi,multithreaded:Qi,n010:ea,n050:ra,n100:na,assume_normal:ta,n500:oa,observe_bernoulli:sa,observe_categorical:ia,observe_index:aa,observe_literal:la,observe_multivariate:ca,observe_submodel:fa,observe_von_mises:ua,ordinary_diffeq:da,pdb_eight_schools_centered:_a,assume_submodel:ma,pdb_eight_schools_noncentered:va,assume_wishart:pa,broadcast_macro:ga,call_C:ha,control_flow:ba},wa=`@model function assume_beta()
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

model = demo_assume_submodel_observe_index_literal()`,Aa=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe()`,ka=`@model function demo_dot_assume_observe_index(
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

model = demo_dot_assume_observe_index()`,Ca=`@model function assume_lkjcholu()
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

model = dppl_gauss_unknown(y)`,ja=`using Turing: LogPoisson

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

model = dppl_hier_poisson(y, x, idx, ns)`,Va=`@model function dppl_high_dim_gauss(D)
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

model = metabayesian_MH(0.0, 1.0)`,Ja=`@model function multiple_constraints_same_var(::Type{TV} = Vector{Float64}) where {TV}
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

model = n100()`,rl=`@model function assume_normal()
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

model = assume_wishart()`,vl=`@model function broadcast_macro(x = [1.5, 2.0], ::Type{TV} = Vector{Float64}) where {TV}
    a ~ Normal(0, 1)
    b ~ InverseGamma(2, 3)
    @. x ~ Normal(a, $(sqrt(b)))
end

model = broadcast_macro()`,pl=`@model function call_C(y = 0.0)
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

model = control_flow()`,hl={assume_beta:wa,assume_dirichlet:Ea,demo_assume_dot_observe:Da,demo_assume_dot_observe_literal:Ra,demo_assume_index_observe:Ma,demo_assume_matrix_observe_matrix_index:xa,demo_assume_multivariate_observe:Ta,demo_assume_multivariate_observe_literal:Sa,demo_assume_observe_literal:Fa,demo_assume_submodel_observe_index_literal:Na,demo_dot_assume_observe:Aa,demo_dot_assume_observe_index:ka,assume_lkjcholu:Ca,demo_dot_assume_observe_index_literal:Oa,demo_dot_assume_observe_matrix_index:Ia,demo_dot_assume_observe_submodel:La,dot_assume:Pa,dot_observe:za,dppl_gauss_unknown:Ba,dppl_hier_poisson:ja,dppl_high_dim_gauss:Va,dppl_hmm_semisup:Ua,dppl_lda:$a,assume_mvnormal:qa,dppl_logistic_regression:Ha,dppl_naive_bayes:Ka,dppl_sto_volatility:Za,dynamic_constraint:Ga,metabayesian_MH:Wa,multiple_constraints_same_var:Ja,multithreaded:Xa,n010:Ya,n050:Qa,n100:el,assume_normal:rl,n500:nl,observe_bernoulli:tl,observe_categorical:ol,observe_index:sl,observe_literal:il,observe_multivariate:al,observe_submodel:ll,observe_von_mises:cl,ordinary_diffeq:fl,pdb_eight_schools_centered:ul,assume_submodel:dl,pdb_eight_schools_noncentered:_l,assume_wishart:ml,broadcast_macro:vl,call_C:pl,control_flow:gl},bl="1.18.0",yl="1.5.0",wl="5.8.2",El="0.13.2",Dl="0.4.5",Rl="0.1.42",Ml="4.4.0",xl="0.8.2",Tl="0.8.8",Sl="0.7.0",Fl="0.4.1",Nl="1.1.3",Al="2.5.0",kl="1.1.2",Cl="0.4.0",Ol="0.5.4",Il="3.5.1+1",Ll="7.20.0",Pl="1.12.0",zl="1.11.0",Bl="1.1.2",jl="0.5.2",Vl="1.1.0",Ul="0.4.8",$l="0.5.1",ql="0.4.4",Hl="1.11.0",Kl="0.1.1",Zl="0.15.10",Gl="0.1.9",Wl="0.1.6",Jl="1.5.0",Xl="1.2.2",Yl="0.5.0",Ql="0.2.7",ec="0.10.15",rc="0.3.14",nc="1.72.6",tc="1.26.0",oc="1.3.1",sc="0.1.10",ic="0.10.43",ac="0.10.4+0",lc="0.1.13",cc="0.7.8",fc="3.31.0",uc="0.12.1",dc="0.11.0",_c="0.13.1",mc="1.0.3",vc="0.2.4",pc="0.3.1",gc="1.0.0",hc="4.18.1",bc="1.1.1+0",yc="0.1.2",wc="0.2.3",Ec="2.5.0",Dc="0.1.2",Rc="1.6.0",Mc="0.1.3",xc="0.3.1",Tc="4.1.1",Sc="1.16.0",Fc="0.7.13",Nc="1.8.0",Ac="0.18.22",kc="1.0.0",Cc="1.11.0",Oc="0.1.2",Ic="1.9.1",Lc="0.4.0",Pc="6.190.2",zc="4.9.0",Bc="5.24.1",jc="1.1.0",Vc="1.15.1",Uc="0.7.8",$c="0.4.26",qc="1.11.0",Hc="0.25.122",Kc="0.6.58",Zc="0.9.5",Gc="1.6.0",Wc="0.37.5",Jc="2.0.0",Xc="1.0.5",Yc="0.13.85",Qc="0.8.14",ef="0.0.203+0",rf="0.1.11",nf="1.27.0",tf="0.1.10",of="0.10.14",sf="1.10.0",af="3.3.11+0",lf="0.2.2",cf="0.1.1",ff="0.3.5",uf="0.3.2",df="1.0.2",_f="1.1.3",mf="1.17.1",vf="0.9.24",pf="1.11.0",gf="1.14.0",hf="2.28.1",bf="0.12.33",yf="0.8.5",wf="1.2.1",Ef="0.1.2",Df="1.1.3",Rf="0.1.3",Mf="0.5.2",xf="1.11.0",Tf="0.2.0",Sf="1.7.2",Ff="0.6.2",Nf="0.5.6",Af="1.3.1",kf="1.13.1",Cf="0.17.2",Of="1.14.6+0",If="1.10.19",Lf="0.2.0",Pf="2.12.2+0",zf="0.3.28",Bf="0.4.15",jf="0.1.1",Vf="0.1.7",Uf="0.10.5",$f="0.3.8",qf="0.1.5",Hf="0.3.1",Kf="1.4.5",Zf="2025.2.0+0",Gf="1.11.0",Wf="0.7.0",Jf="0.16.2",Xf="0.7.11",Yf="0.1.17",Qf="1.3.1",eu="0.2.4",ru="1.10.0",nu="1.0.0",tu="0.5.15",ou="1.7.1",su="1.14.3",iu="0.2.1",au="0.2.4",lu="0.9.38",cu="0.6.10",fu="0.10.2",uu="0.4.1",du="9.4.3",_u="0.0.37+2",mu="3.0.1+0",vu="1.4.0",pu="0.1.17",gu="2.8.0",hu="1.11.0",bu="0.3.1",yu="0.2.1",wu="0.6.4",Eu="8.6.0+0",Du="1.11.0",Ru="1.7.2+0",Mu="1.11.0+1",xu="0.9.1+6",Tu="1.11.0",Su="1.18.0+0",Fu="0.9.5",Nu="0.1.4",Au="7.4.0",ku="1.11.0",Cu="3.28.0",Ou="2.1.2",Iu="1.13.1",Lu="0.3.29",Pu="1.11.0",zu="1.2.0",Bu="0.10.7",ju="7.4.0",Vu="0.3.15",Uu="2025.2.0+0",$u="1.0.0",qu="0.7.18",Hu="1.12.0",Ku="0.4.17",Zu="0.4.8",Gu="4.3.1+0",Wu="0.1.11",Ju="5.5.4+0",Xu="0.5.16",Yu="0.1.8",Qu="0.4.2",ed="1.11.0",rd="0.1.4",nd="1.1.9",td="2.28.6+0",od="0.2.0",sd="10.1.4+3",id="1.2.0",ad="2.1.0",ld="1.11.0",cd="0.4.171",fd="0.3.4",ud="0.3.7",dd="2023.12.12",_d="0.2.4",md="0.10.3",vd="7.10.0",pd="0.9.31",gd="0.4.3",hd="1.1.3",bd="0.1.5",yd="0.10.5",wd="1.0.0",Ed="1.2.0",Dd="4.12.0",Rd="2.0.0",Md="1.9.0",xd="1.10.0",Td="1.5.0",Sd="0.5.0",Fd="1.17.0",Nd="0.3.27+1",Ad="0.8.5+0",kd="5.0.8+0",Cd="1.5.0",Od="3.5.4+0",Id="0.5.6+0",Ld="1.13.2",Pd="0.4.6",zd="4.8.0",Bd="2.12.0",jd="0.4.5",Vd="1.8.1",Ud="6.102.1",$d="1.5.0",qd="1.10.1",Hd="1.34.0",Kd="1.8.0",Zd="1.16.1",Gd="1.4.0",Wd="1.8.0",Jd="1.9.0",Xd="1.16.0",Yd="1.4.0",Qd="1.5.0",e_="1.5.0",r_="1.7.0",n_="1.6.0",t_="1.6.0",o_="1.7.0",s_="1.14.1",i_="1.4.0",a_="1.6.0",l_="1.4.0",c_="1.4.0",f_="1.5.0",u_="1.18.1",d_="1.7.0",__="1.7.0",m_="1.6.0",v_="1.4.0",p_="1.7.0",g_="1.5.0",h_="1.6.0",b_="0.11.35",y_="1.0.2",w_="0.5.12",E_="0.12.3",D_="2.8.3",R_="1.2.1",M_="0.3.6",x_="1.11.0",T_="0.4.7",S_="0.7.18",F_="0.2.2",N_="1.4.3",A_="0.2.4",k_="0.4.34",C_="1.2.1",O_="1.5.0",I_="0.2.0",L_="2.4.0",P_="1.11.0",z_="0.1.5",B_="1.11.0",j_="1.3.0",V_="2.11.2",U_="1.11.0",$_="1.11.0",q_="1.7.1",H_="1.6.0",K_="0.3.2",Z_="0.4.5",G_="0.1.0",W_="1.3.4",J_="3.37.1",X_="1.2.2",Y_="1.3.1",Q_="1.1.1",em="1.16.1",rm="1.4.2",nm="0.8.0",tm="0.5.1+0",om="2.2.10",sm="0.5.15",im="0.7.0",am="0.1.0",lm="0.5.2",cm="2.120.0",fm="0.1.11",um="1.7.2",dm="1.0.0",_m="7.90.0",mm="1.7.0",vm="3.0.0",pm="1.5.0",gm="1.3.0",hm="1.4.8",bm="1.11.0",ym="1.1.2",wm="1.11.0",Em="0.1.0",Dm="1.2.0",Rm="2.9.0",Mm="0.9.5",xm="1.1.0",Tm="1.11.0",Sm="1.2.2",Fm="1.11.0",Nm="1.1.0",Am="0.1.2",km="0.4.21",Cm="2.6.1",Om="0.1.15",Im="0.1.2",Lm="1.3.0",Pm="1.8.0",zm="1.9.15",Bm="1.4.3",jm="3.5.0",Vm="1.11.1",Um="1.7.1",$m="0.34.6",qm="1.5.0",Hm="0.5.8",Km="0.4.1",Zm="0.3.7",Gm="0.4.1",Wm="0.7.1",Jm="0.3.1",Xm="1.11.0",Ym="1.11.0",Qm=null,ev="7.7.0+0",rv="0.3.44",nv="1.0.3",tv="1.0.1",ov="1.12.1",sv="1.10.0",iv="0.1.1",av="0.1.7",lv="1.11.0",cv="0.5.5",fv="0.5.29",uv="0.2.38",dv="0.1.6",_v="0.11.3",mv="0.4.85",vv="1.4.0",pv="0.40.4",gv="1.6.1",hv="1.11.0",bv="1.0.2",yv="1.11.0",wv="1.25.0",Ev="1.0.0",Dv="0.3.0",Rv="1.4.2",Mv="1.0.0",xv="1.6.1",Tv="2.13.9+0",Sv="0.18.1+0",Fv="0.10.1",Nv="1.2.13+1",Av="0.7.10",kv="0.2.7",Cv="1.1.4+0",Ov="5.11.0+0",Iv="1.59.0+0",Lv="2022.0.0+0",Pv="17.4.0+2",zv={ADTypes:bl,AbstractFFTs:yl,AbstractMCMC:wl,AbstractPPL:El,AbstractTrees:Dl,Accessors:Rl,Adapt:Ml,AdvancedHMC:xl,AdvancedMH:Tl,AdvancedPS:Sl,AdvancedVI:Fl,AliasTables:Nl,ArgCheck:Al,ArgTools:kl,ArnoldiMethod:Cl,Arpack:Ol,Arpack_jll:Il,ArrayInterface:Ll,ArrayLayouts:Pl,Artifacts:zl,Atomix:Bl,AtomsBase:jl,AxisAlgorithms:Vl,AxisArrays:Ul,BFloat16s:$l,BangBang:ql,Base64:Hl,Baselet:Kl,Bijectors:Zl,BitFlags:Gl,BitTwiddlingConvenienceFunctions:Wl,BracketingNonlinearSolve:Jl,BufferedStreams:Xl,CEnum:Yl,CPUSummary:Ql,CSV:ec,Cassette:rc,ChainRules:nc,ChainRulesCore:tc,Chairmarks:oc,ChangesOfVariables:sc,Chemfiles:ic,Chemfiles_jll:ac,CloseOpenIntervals:lc,CodecZlib:cc,ColorSchemes:fc,ColorTypes:uc,ColorVectorSpace:dc,Colors:_c,Combinatorics:mc,CommonSolve:vc,CommonSubexpressions:pc,CommonWorldInvalidations:gc,Compat:hc,CompilerSupportLibraries_jll:bc,CompositionsBase:yc,ConcreteStructs:wc,ConcurrentUtilities:Ec,ConsoleProgressMonitor:Dc,ConstructionBase:Rc,ContextVariablesX:Mc,CpuId:xc,Crayons:Tc,DataAPI:Sc,DataDeps:Fc,DataFrames:Nc,DataStructures:Ac,DataValueInterfaces:kc,Dates:Cc,DefineSingletons:Oc,DelimitedFiles:Ic,DensityInterface:Lc,DiffEqBase:Pc,DiffEqCallbacks:zc,DiffEqNoiseProcess:Bc,DiffResults:jc,DiffRules:Vc,DifferentiationInterface:Uc,DispatchDoctor:$c,Distributed:qc,Distributions:Hc,DistributionsAD:Kc,DocStringExtensions:Zc,Downloads:Gc,DynamicPPL:Wc,EllipticalSliceSampling:Jc,EnumX:Xc,Enzyme:Yc,EnzymeCore:Qc,Enzyme_jll:ef,ExceptionUnwrapping:rf,ExponentialUtilities:nf,ExprTools:tf,ExproniconLite:of,FFTW:sf,FFTW_jll:af,FLoops:lf,FLoopsBase:cf,FastBroadcast:ff,FastClosures:uf,FastGaussQuadrature:df,FastPower:_f,FileIO:mf,FilePathsBase:vf,FileWatching:pf,FillArrays:gf,FiniteDiff:hf,FiniteDifferences:bf,FixedPointNumbers:yf,ForwardDiff:wf,FunctionProperties:Ef,FunctionWrappers:Df,FunctionWrappersWrappers:Rf,Functors:Mf,Future:xf,GPUArraysCore:Tf,GPUCompiler:Sf,GZip:Ff,GenericSchur:Nf,Glob:Af,Graphs:kf,HDF5:Cf,HDF5_jll:Of,HTTP:If,HashArrayMappedTries:Lf,Hwloc_jll:Pf,HypergeometricFunctions:zf,IRTools:Bf,IfElse:jf,ImageBase:Vf,ImageCore:Uf,ImageShow:$f,Inflate:qf,InitialValues:Hf,InlineStrings:Kf,IntelOpenMP_jll:Zf,InteractiveUtils:Gf,InternedStrings:Wf,Interpolations:Jf,IntervalSets:Xf,InverseFunctions:Yf,InvertedIndices:Qf,IrrationalConstants:eu,IterTools:ru,IteratorInterfaceExtensions:nu,JLD2:tu,JLLWrappers:ou,JSON:"0.21.4",JSON3:su,Jieko:iu,JuliaVariables:au,KernelAbstractions:lu,KernelDensity:cu,Krylov:fu,LBFGSB:uu,LLVM:du,LLVMExtra_jll:_u,L_BFGS_B_jll:mu,LaTeXStrings:vu,LayoutPointers:pu,LazyArrays:gu,LazyArtifacts:hu,LazyModules:bu,LeftChildRightSiblingTrees:yu,LibCURL:wu,LibCURL_jll:Eu,LibGit2:Du,LibGit2_jll:Ru,LibSSH2_jll:Mu,LibTracyClient_jll:xu,Libdl:Tu,Libiconv_jll:Su,Libtask:Fu,LineSearch:Nu,LineSearches:Au,LinearAlgebra:ku,LinearSolve:Cu,LogDensityProblems:Ou,LogDensityProblemsAD:Iu,LogExpFunctions:Lu,Logging:Pu,LoggingExtras:zu,MAT:Bu,MCMCChains:ju,MCMCDiagnosticTools:Vu,MKL_jll:Uu,MLCore:$u,MLDatasets:qu,MLJModelInterface:Hu,MLStyle:Ku,MLUtils:Zu,MPICH_jll:Gu,MPIPreferences:Wu,MPItrampoline_jll:Ju,MacroTools:Xu,ManualMemory:Yu,MappedArrays:Qu,Markdown:ed,MaybeInplace:rd,MbedTLS:nd,MbedTLS_jll:td,MicroCollections:od,MicrosoftMPI_jll:sd,Missings:id,MistyClosures:ad,Mmap:ld,Mooncake:cd,MosaicViews:fd,Moshi:ud,MozillaCACerts_jll:dd,MuladdMacro:_d,MultivariateStats:md,NLSolversBase:vd,NNlib:pd,NPZ:gd,NaNMath:hd,NameResolution:bd,NamedArrays:yd,NaturalSort:wd,NetworkOptions:Ed,NonlinearSolve:Dd,NonlinearSolveBase:Rd,NonlinearSolveFirstOrder:Md,NonlinearSolveQuasiNewton:xd,NonlinearSolveSpectralMethods:Td,ObjectFile:Sd,OffsetArrays:Fd,OpenBLAS_jll:Nd,OpenLibm_jll:Ad,OpenMPI_jll:kd,OpenSSL:Cd,OpenSSL_jll:Od,OpenSpecFun_jll:Id,Optim:Ld,Optimisers:Pd,Optimization:zd,OptimizationBase:Bd,OptimizationOptimJL:jd,OrderedCollections:Vd,OrdinaryDiffEq:Ud,OrdinaryDiffEqAdamsBashforthMoulton:$d,OrdinaryDiffEqBDF:qd,OrdinaryDiffEqCore:Hd,OrdinaryDiffEqDefault:Kd,OrdinaryDiffEqDifferentiation:Zd,OrdinaryDiffEqExplicitRK:Gd,OrdinaryDiffEqExponentialRK:Wd,OrdinaryDiffEqExtrapolation:Jd,OrdinaryDiffEqFIRK:Xd,OrdinaryDiffEqFeagin:Yd,OrdinaryDiffEqFunctionMap:Qd,OrdinaryDiffEqHighOrderRK:e_,OrdinaryDiffEqIMEXMultistep:r_,OrdinaryDiffEqLinear:n_,OrdinaryDiffEqLowOrderRK:t_,OrdinaryDiffEqLowStorageRK:o_,OrdinaryDiffEqNonlinearSolve:s_,OrdinaryDiffEqNordsieck:i_,OrdinaryDiffEqPDIRK:a_,OrdinaryDiffEqPRK:l_,OrdinaryDiffEqQPRK:c_,OrdinaryDiffEqRKN:f_,OrdinaryDiffEqRosenbrock:u_,OrdinaryDiffEqSDIRK:d_,OrdinaryDiffEqSSPRK:__,OrdinaryDiffEqStabilizedIRK:m_,OrdinaryDiffEqStabilizedRK:v_,OrdinaryDiffEqSymplecticRK:p_,OrdinaryDiffEqTsit5:g_,OrdinaryDiffEqVerner:h_,PDMats:b_,PackageExtensionCompat:y_,PaddedViews:w_,Parameters:E_,Parsers:D_,PeriodicTable:R_,Pickle:M_,Pkg:x_,PoissonRandom:T_,Polyester:S_,PolyesterWeave:F_,PooledArrays:N_,PositiveFactorizations:A_,PreallocationTools:k_,PrecompileTools:C_,Preferences:O_,PrettyPrint:I_,PrettyTables:L_,Printf:P_,ProgressLogging:z_,ProgressMeter:B_,PtrArrays:j_,QuadGK:V_,REPL:U_,Random:$_,Random123:q_,RandomNumbers:H_,RangeArrays:K_,Ratios:Z_,RealDot:G_,RecipesBase:W_,RecursiveArrayTools:J_,Reexport:X_,Requires:Y_,ResettableStacks:Q_,ReverseDiff:em,Richardson:rm,Rmath:nm,Rmath_jll:tm,Roots:om,RuntimeGeneratedFunctions:sm,SHA:im,SIMDTypes:am,SSMProblems:lm,SciMLBase:cm,SciMLJacobianOperators:fm,SciMLOperators:um,SciMLPublic:dm,SciMLSensitivity:_m,SciMLStructures:mm,ScientificTypesBase:vm,ScopedValues:pm,Scratch:gm,SentinelArrays:hm,Serialization:bm,Setfield:ym,SharedArrays:wm,ShowCases:Em,SimpleBufferStream:Dm,SimpleNonlinearSolve:Rm,SimpleTraits:Mm,SimpleUnPack:xm,Sockets:Tm,SortingAlgorithms:Sm,SparseArrays:Fm,SparseConnectivityTracer:Nm,SparseInverseSubset:Am,SparseMatrixColorings:km,SpecialFunctions:Cm,SplittablesBase:Om,StackViews:Im,Static:Lm,StaticArrayInterface:Pm,StaticArrays:zm,StaticArraysCore:Bm,StatisticalTraits:jm,Statistics:Vm,StatsAPI:Um,StatsBase:$m,StatsFuns:qm,StrideArraysCore:Hm,StridedViews:Km,StringEncodings:Zm,StringManipulation:Gm,StructArrays:Wm,StructIO:Jm,StructTypes:Xm,StyledStrings:Ym,SuiteSparse:Qm,SuiteSparse_jll:ev,SymbolicIndexingInterface:rv,TOML:nv,TableTraits:tv,Tables:ov,Tar:sv,TensorCore:iv,TerminalLoggers:av,Test:lv,ThreadingUtilities:cv,TimerOutputs:fv,Tracker:uv,Tracy:dv,TranscodingStreams:_v,Transducers:mv,TruncatedStacktraces:vv,Turing:pv,URIs:gv,UUIDs:hv,UnPack:bv,Unicode:yv,Unitful:wv,UnitfulAtomic:Ev,UnsafeAtomics:Dv,WeakRefStrings:Rv,WoodburyMatrices:Mv,WorkerUtilities:xv,XML2_jll:Tv,Xorg_libpciaccess_jll:Sv,ZipFile:Fv,Zlib_jll:Nv,Zygote:Av,ZygoteRules:kv,libaec_jll:Cv,libblastrampoline_jll:Ov,nghttp2_jll:Iv,oneTBB_jll:Lv,p7zip_jll:Pv};function yn(e){return[...e.entries()].sort(([r,n],[t,i])=>r.localeCompare(t))}var Bv=ve('<tr><td class="svelte-7y9k9c"> </td><td class="version svelte-7y9k9c"> </td></tr>'),jv=ve('<table id="manifest" class="svelte-7y9k9c"><thead><tr><th class="svelte-7y9k9c">Package</th><th class="svelte-7y9k9c">Version</th></tr></thead><tbody></tbody></table>');function Vv(e,r){gr(r,!1);let n=new Map;for(const[s,l]of Object.entries(zv))n.set(s,l===""?null:l);Ln();var t=jv(),i=we(W(t));dr(i,5,()=>yn(n),ur,(s,l)=>{let u=()=>I(l)[0],a=()=>I(l)[1];var c=Bv(),v=W(c),_=W(v),f=we(v),p=W(f);Ee(()=>{Be(_,u()),Be(p,a()===null?"":`v${a()}`)}),te(s,c)}),te(e,t),hr()}function Uv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fn,_t;function $v(){if(_t)return fn;_t=1;function e(o){return o instanceof Map?o.clear=o.delete=o.set=function(){throw new Error("map is read-only")}:o instanceof Set&&(o.add=o.clear=o.delete=function(){throw new Error("set is read-only")}),Object.freeze(o),Object.getOwnPropertyNames(o).forEach(d=>{const h=o[d],N=typeof h;(N==="object"||N==="function")&&!Object.isFrozen(h)&&e(h)}),o}class r{constructor(d){d.data===void 0&&(d.data={}),this.data=d.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function n(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function t(o,...d){const h=Object.create(null);for(const N in o)h[N]=o[N];return d.forEach(function(N){for(const H in N)h[H]=N[H]}),h}const i="</span>",s=o=>!!o.scope,l=(o,{prefix:d})=>{if(o.startsWith("language:"))return o.replace("language:","language-");if(o.includes(".")){const h=o.split(".");return[`${d}${h.shift()}`,...h.map((N,H)=>`${N}${"_".repeat(H+1)}`)].join(" ")}return`${d}${o}`};class u{constructor(d,h){this.buffer="",this.classPrefix=h.classPrefix,d.walk(this)}addText(d){this.buffer+=n(d)}openNode(d){if(!s(d))return;const h=l(d.scope,{prefix:this.classPrefix});this.span(h)}closeNode(d){s(d)&&(this.buffer+=i)}value(){return this.buffer}span(d){this.buffer+=`<span class="${d}">`}}const a=(o={})=>{const d={children:[]};return Object.assign(d,o),d};class c{constructor(){this.rootNode=a(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(d){this.top.children.push(d)}openNode(d){const h=a({scope:d});this.add(h),this.stack.push(h)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(d){return this.constructor._walk(d,this.rootNode)}static _walk(d,h){return typeof h=="string"?d.addText(h):h.children&&(d.openNode(h),h.children.forEach(N=>this._walk(d,N)),d.closeNode(h)),d}static _collapse(d){typeof d!="string"&&d.children&&(d.children.every(h=>typeof h=="string")?d.children=[d.children.join("")]:d.children.forEach(h=>{c._collapse(h)}))}}class v extends c{constructor(d){super(),this.options=d}addText(d){d!==""&&this.add(d)}startScope(d){this.openNode(d)}endScope(){this.closeNode()}__addSublanguage(d,h){const N=d.root;h&&(N.scope=`language:${h}`),this.add(N)}toHTML(){return new u(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(o){return o?typeof o=="string"?o:o.source:null}function f(o){return S("(?=",o,")")}function p(o){return S("(?:",o,")*")}function g(o){return S("(?:",o,")?")}function S(...o){return o.map(h=>_(h)).join("")}function k(o){const d=o[o.length-1];return typeof d=="object"&&d.constructor===Object?(o.splice(o.length-1,1),d):{}}function z(...o){return"("+(k(o).capture?"":"?:")+o.map(N=>_(N)).join("|")+")"}function q(o){return new RegExp(o.toString()+"|").exec("").length-1}function x(o,d){const h=o&&o.exec(d);return h&&h.index===0}const D=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function M(o,{joinWith:d}){let h=0;return o.map(N=>{h+=1;const H=h;let K=_(N),w="";for(;K.length>0;){const y=D.exec(K);if(!y){w+=K;break}w+=K.substring(0,y.index),K=K.substring(y.index+y[0].length),y[0][0]==="\\"&&y[1]?w+="\\"+String(Number(y[1])+H):(w+=y[0],y[0]==="("&&h++)}return w}).map(N=>`(${N})`).join(d)}const ee=/\b\B/,F="[a-zA-Z]\\w*",$="[a-zA-Z_]\\w*",Y="\\b\\d+(\\.\\d+)?",xe="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",pe="\\b(0b[01]+)",qe="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",or=(o={})=>{const d=/^#![ ]*\//;return o.binary&&(o.begin=S(d,/.*\b/,o.binary,/\b.*/)),t({scope:"meta",begin:d,end:/$/,relevance:0,"on:begin":(h,N)=>{h.index!==0&&N.ignoreMatch()}},o)},re={begin:"\\\\[\\s\\S]",relevance:0},ge={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[re]},Te={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[re]},ke={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},he=function(o,d,h={}){const N=t({scope:"comment",begin:o,end:d,contains:[]},h);N.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const H=z("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return N.contains.push({begin:S(/[ ]+/,"(",H,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),N},Yr=he("//","$"),sr=he("/\\*","\\*/"),yr=he("#","$"),Jt={scope:"number",begin:Y,relevance:0},Xt={scope:"number",begin:xe,relevance:0},Yt={scope:"number",begin:pe,relevance:0},Qt={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[re,{begin:/\[/,end:/\]/,relevance:0,contains:[re]}]},eo={scope:"title",begin:F,relevance:0},ro={scope:"title",begin:$,relevance:0},no={begin:"\\.\\s*"+$,relevance:0};var wr=Object.freeze({__proto__:null,APOS_STRING_MODE:ge,BACKSLASH_ESCAPE:re,BINARY_NUMBER_MODE:Yt,BINARY_NUMBER_RE:pe,COMMENT:he,C_BLOCK_COMMENT_MODE:sr,C_LINE_COMMENT_MODE:Yr,C_NUMBER_MODE:Xt,C_NUMBER_RE:xe,END_SAME_AS_BEGIN:function(o){return Object.assign(o,{"on:begin":(d,h)=>{h.data._beginMatch=d[1]},"on:end":(d,h)=>{h.data._beginMatch!==d[1]&&h.ignoreMatch()}})},HASH_COMMENT_MODE:yr,IDENT_RE:F,MATCH_NOTHING_RE:ee,METHOD_GUARD:no,NUMBER_MODE:Jt,NUMBER_RE:Y,PHRASAL_WORDS_MODE:ke,QUOTE_STRING_MODE:Te,REGEXP_MODE:Qt,RE_STARTERS_RE:qe,SHEBANG:or,TITLE_MODE:eo,UNDERSCORE_IDENT_RE:$,UNDERSCORE_TITLE_MODE:ro});function to(o,d){o.input[o.index-1]==="."&&d.ignoreMatch()}function oo(o,d){o.className!==void 0&&(o.scope=o.className,delete o.className)}function so(o,d){d&&o.beginKeywords&&(o.begin="\\b("+o.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",o.__beforeBegin=to,o.keywords=o.keywords||o.beginKeywords,delete o.beginKeywords,o.relevance===void 0&&(o.relevance=0))}function io(o,d){Array.isArray(o.illegal)&&(o.illegal=z(...o.illegal))}function ao(o,d){if(o.match){if(o.begin||o.end)throw new Error("begin & end are not supported with match");o.begin=o.match,delete o.match}}function lo(o,d){o.relevance===void 0&&(o.relevance=1)}const co=(o,d)=>{if(!o.beforeMatch)return;if(o.starts)throw new Error("beforeMatch cannot be used with starts");const h=Object.assign({},o);Object.keys(o).forEach(N=>{delete o[N]}),o.keywords=h.keywords,o.begin=S(h.beforeMatch,f(h.begin)),o.starts={relevance:0,contains:[Object.assign(h,{endsParent:!0})]},o.relevance=0,delete h.beforeMatch},fo=["of","and","for","in","not","or","if","then","parent","list","value"],uo="keyword";function Pn(o,d,h=uo){const N=Object.create(null);return typeof o=="string"?H(h,o.split(" ")):Array.isArray(o)?H(h,o):Object.keys(o).forEach(function(K){Object.assign(N,Pn(o[K],d,K))}),N;function H(K,w){d&&(w=w.map(y=>y.toLowerCase())),w.forEach(function(y){const T=y.split("|");N[T[0]]=[K,_o(T[0],T[1])]})}}function _o(o,d){return d?Number(d):mo(o)?0:1}function mo(o){return fo.includes(o.toLowerCase())}const zn={},He=o=>{console.error(o)},Bn=(o,...d)=>{console.log(`WARN: ${o}`,...d)},Je=(o,d)=>{zn[`${o}/${d}`]||(console.log(`Deprecated as of ${o}. ${d}`),zn[`${o}/${d}`]=!0)},Er=new Error;function jn(o,d,{key:h}){let N=0;const H=o[h],K={},w={};for(let y=1;y<=d.length;y++)w[y+N]=H[y],K[y+N]=!0,N+=q(d[y-1]);o[h]=w,o[h]._emit=K,o[h]._multi=!0}function vo(o){if(Array.isArray(o.begin)){if(o.skip||o.excludeBegin||o.returnBegin)throw He("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Er;if(typeof o.beginScope!="object"||o.beginScope===null)throw He("beginScope must be object"),Er;jn(o,o.begin,{key:"beginScope"}),o.begin=M(o.begin,{joinWith:""})}}function po(o){if(Array.isArray(o.end)){if(o.skip||o.excludeEnd||o.returnEnd)throw He("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Er;if(typeof o.endScope!="object"||o.endScope===null)throw He("endScope must be object"),Er;jn(o,o.end,{key:"endScope"}),o.end=M(o.end,{joinWith:""})}}function go(o){o.scope&&typeof o.scope=="object"&&o.scope!==null&&(o.beginScope=o.scope,delete o.scope)}function ho(o){go(o),typeof o.beginScope=="string"&&(o.beginScope={_wrap:o.beginScope}),typeof o.endScope=="string"&&(o.endScope={_wrap:o.endScope}),vo(o),po(o)}function bo(o){function d(w,y){return new RegExp(_(w),"m"+(o.case_insensitive?"i":"")+(o.unicodeRegex?"u":"")+(y?"g":""))}class h{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(y,T){T.position=this.position++,this.matchIndexes[this.matchAt]=T,this.regexes.push([T,y]),this.matchAt+=q(y)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const y=this.regexes.map(T=>T[1]);this.matcherRe=d(M(y,{joinWith:"|"}),!0),this.lastIndex=0}exec(y){this.matcherRe.lastIndex=this.lastIndex;const T=this.matcherRe.exec(y);if(!T)return null;const J=T.findIndex((ir,en)=>en>0&&ir!==void 0),Z=this.matchIndexes[J];return T.splice(0,J),Object.assign(T,Z)}}class N{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(y){if(this.multiRegexes[y])return this.multiRegexes[y];const T=new h;return this.rules.slice(y).forEach(([J,Z])=>T.addRule(J,Z)),T.compile(),this.multiRegexes[y]=T,T}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(y,T){this.rules.push([y,T]),T.type==="begin"&&this.count++}exec(y){const T=this.getMatcher(this.regexIndex);T.lastIndex=this.lastIndex;let J=T.exec(y);if(this.resumingScanAtSamePosition()&&!(J&&J.index===this.lastIndex)){const Z=this.getMatcher(0);Z.lastIndex=this.lastIndex+1,J=Z.exec(y)}return J&&(this.regexIndex+=J.position+1,this.regexIndex===this.count&&this.considerAll()),J}}function H(w){const y=new N;return w.contains.forEach(T=>y.addRule(T.begin,{rule:T,type:"begin"})),w.terminatorEnd&&y.addRule(w.terminatorEnd,{type:"end"}),w.illegal&&y.addRule(w.illegal,{type:"illegal"}),y}function K(w,y){const T=w;if(w.isCompiled)return T;[oo,ao,ho,co].forEach(Z=>Z(w,y)),o.compilerExtensions.forEach(Z=>Z(w,y)),w.__beforeBegin=null,[so,io,lo].forEach(Z=>Z(w,y)),w.isCompiled=!0;let J=null;return typeof w.keywords=="object"&&w.keywords.$pattern&&(w.keywords=Object.assign({},w.keywords),J=w.keywords.$pattern,delete w.keywords.$pattern),J=J||/\w+/,w.keywords&&(w.keywords=Pn(w.keywords,o.case_insensitive)),T.keywordPatternRe=d(J,!0),y&&(w.begin||(w.begin=/\B|\b/),T.beginRe=d(T.begin),!w.end&&!w.endsWithParent&&(w.end=/\B|\b/),w.end&&(T.endRe=d(T.end)),T.terminatorEnd=_(T.end)||"",w.endsWithParent&&y.terminatorEnd&&(T.terminatorEnd+=(w.end?"|":"")+y.terminatorEnd)),w.illegal&&(T.illegalRe=d(w.illegal)),w.contains||(w.contains=[]),w.contains=[].concat(...w.contains.map(function(Z){return yo(Z==="self"?w:Z)})),w.contains.forEach(function(Z){K(Z,T)}),w.starts&&K(w.starts,y),T.matcher=H(T),T}if(o.compilerExtensions||(o.compilerExtensions=[]),o.contains&&o.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return o.classNameAliases=t(o.classNameAliases||{}),K(o)}function Vn(o){return o?o.endsWithParent||Vn(o.starts):!1}function yo(o){return o.variants&&!o.cachedVariants&&(o.cachedVariants=o.variants.map(function(d){return t(o,{variants:null},d)})),o.cachedVariants?o.cachedVariants:Vn(o)?t(o,{starts:o.starts?t(o.starts):null}):Object.isFrozen(o)?t(o):o}var wo="11.11.1";class Eo extends Error{constructor(d,h){super(d),this.name="HTMLInjectionError",this.html=h}}const Qr=n,Un=t,$n=Symbol("nomatch"),Do=7,qn=function(o){const d=Object.create(null),h=Object.create(null),N=[];let H=!0;const K="Could not find the language '{}', did you forget to load/include a language module?",w={disableAutodetect:!0,name:"Plain text",contains:[]};let y={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:v};function T(m){return y.noHighlightRe.test(m)}function J(m){let R=m.className+" ";R+=m.parentNode?m.parentNode.className:"";const O=y.languageDetectRe.exec(R);if(O){const j=Ce(O[1]);return j||(Bn(K.replace("{}",O[1])),Bn("Falling back to no-highlight mode for this block.",m)),j?O[1]:"no-highlight"}return R.split(/\s+/).find(j=>T(j)||Ce(j))}function Z(m,R,O){let j="",G="";typeof R=="object"?(j=m,O=R.ignoreIllegals,G=R.language):(Je("10.7.0","highlight(lang, code, ...args) has been deprecated."),Je("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),G=m,j=R),O===void 0&&(O=!0);const _e={code:j,language:G};Rr("before:highlight",_e);const Oe=_e.result?_e.result:ir(_e.language,_e.code,O);return Oe.code=_e.code,Rr("after:highlight",Oe),Oe}function ir(m,R,O,j){const G=Object.create(null);function _e(b,E){return b.keywords[E]}function Oe(){if(!A.keywords){X.addText(V);return}let b=0;A.keywordPatternRe.lastIndex=0;let E=A.keywordPatternRe.exec(V),C="";for(;E;){C+=V.substring(b,E.index);const L=ye.case_insensitive?E[0].toLowerCase():E[0],Q=_e(A,L);if(Q){const[Se,jo]=Q;if(X.addText(C),C="",G[L]=(G[L]||0)+1,G[L]<=Do&&(Tr+=jo),Se.startsWith("_"))C+=E[0];else{const Vo=ye.classNameAliases[Se]||Se;be(E[0],Vo)}}else C+=E[0];b=A.keywordPatternRe.lastIndex,E=A.keywordPatternRe.exec(V)}C+=V.substring(b),X.addText(C)}function Mr(){if(V==="")return;let b=null;if(typeof A.subLanguage=="string"){if(!d[A.subLanguage]){X.addText(V);return}b=ir(A.subLanguage,V,!0,Yn[A.subLanguage]),Yn[A.subLanguage]=b._top}else b=rn(V,A.subLanguage.length?A.subLanguage:null);A.relevance>0&&(Tr+=b.relevance),X.__addSublanguage(b._emitter,b.language)}function ae(){A.subLanguage!=null?Mr():Oe(),V=""}function be(b,E){b!==""&&(X.startScope(E),X.addText(b),X.endScope())}function Gn(b,E){let C=1;const L=E.length-1;for(;C<=L;){if(!b._emit[C]){C++;continue}const Q=ye.classNameAliases[b[C]]||b[C],Se=E[C];Q?be(Se,Q):(V=Se,Oe(),V=""),C++}}function Wn(b,E){return b.scope&&typeof b.scope=="string"&&X.openNode(ye.classNameAliases[b.scope]||b.scope),b.beginScope&&(b.beginScope._wrap?(be(V,ye.classNameAliases[b.beginScope._wrap]||b.beginScope._wrap),V=""):b.beginScope._multi&&(Gn(b.beginScope,E),V="")),A=Object.create(b,{parent:{value:A}}),A}function Jn(b,E,C){let L=x(b.endRe,C);if(L){if(b["on:end"]){const Q=new r(b);b["on:end"](E,Q),Q.isMatchIgnored&&(L=!1)}if(L){for(;b.endsParent&&b.parent;)b=b.parent;return b}}if(b.endsWithParent)return Jn(b.parent,E,C)}function Io(b){return A.matcher.regexIndex===0?(V+=b[0],1):(sn=!0,0)}function Lo(b){const E=b[0],C=b.rule,L=new r(C),Q=[C.__beforeBegin,C["on:begin"]];for(const Se of Q)if(Se&&(Se(b,L),L.isMatchIgnored))return Io(E);return C.skip?V+=E:(C.excludeBegin&&(V+=E),ae(),!C.returnBegin&&!C.excludeBegin&&(V=E)),Wn(C,b),C.returnBegin?0:E.length}function Po(b){const E=b[0],C=R.substring(b.index),L=Jn(A,b,C);if(!L)return $n;const Q=A;A.endScope&&A.endScope._wrap?(ae(),be(E,A.endScope._wrap)):A.endScope&&A.endScope._multi?(ae(),Gn(A.endScope,b)):Q.skip?V+=E:(Q.returnEnd||Q.excludeEnd||(V+=E),ae(),Q.excludeEnd&&(V=E));do A.scope&&X.closeNode(),!A.skip&&!A.subLanguage&&(Tr+=A.relevance),A=A.parent;while(A!==L.parent);return L.starts&&Wn(L.starts,b),Q.returnEnd?0:E.length}function zo(){const b=[];for(let E=A;E!==ye;E=E.parent)E.scope&&b.unshift(E.scope);b.forEach(E=>X.openNode(E))}let xr={};function Xn(b,E){const C=E&&E[0];if(V+=b,C==null)return ae(),0;if(xr.type==="begin"&&E.type==="end"&&xr.index===E.index&&C===""){if(V+=R.slice(E.index,E.index+1),!H){const L=new Error(`0 width match regex (${m})`);throw L.languageName=m,L.badRule=xr.rule,L}return 1}if(xr=E,E.type==="begin")return Lo(E);if(E.type==="illegal"&&!O){const L=new Error('Illegal lexeme "'+C+'" for mode "'+(A.scope||"<unnamed>")+'"');throw L.mode=A,L}else if(E.type==="end"){const L=Po(E);if(L!==$n)return L}if(E.type==="illegal"&&C==="")return V+=`
`,1;if(on>1e5&&on>E.index*3)throw new Error("potential infinite loop, way more iterations than matches");return V+=C,C.length}const ye=Ce(m);if(!ye)throw He(K.replace("{}",m)),new Error('Unknown language: "'+m+'"');const Bo=bo(ye);let tn="",A=j||Bo;const Yn={},X=new y.__emitter(y);zo();let V="",Tr=0,Ke=0,on=0,sn=!1;try{if(ye.__emitTokens)ye.__emitTokens(R,X);else{for(A.matcher.considerAll();;){on++,sn?sn=!1:A.matcher.considerAll(),A.matcher.lastIndex=Ke;const b=A.matcher.exec(R);if(!b)break;const E=R.substring(Ke,b.index),C=Xn(E,b);Ke=b.index+C}Xn(R.substring(Ke))}return X.finalize(),tn=X.toHTML(),{language:m,value:tn,relevance:Tr,illegal:!1,_emitter:X,_top:A}}catch(b){if(b.message&&b.message.includes("Illegal"))return{language:m,value:Qr(R),illegal:!0,relevance:0,_illegalBy:{message:b.message,index:Ke,context:R.slice(Ke-100,Ke+100),mode:b.mode,resultSoFar:tn},_emitter:X};if(H)return{language:m,value:Qr(R),illegal:!1,relevance:0,errorRaised:b,_emitter:X,_top:A};throw b}}function en(m){const R={value:Qr(m),illegal:!1,relevance:0,_top:w,_emitter:new y.__emitter(y)};return R._emitter.addText(m),R}function rn(m,R){R=R||y.languages||Object.keys(d);const O=en(m),j=R.filter(Ce).filter(Zn).map(ae=>ir(ae,m,!1));j.unshift(O);const G=j.sort((ae,be)=>{if(ae.relevance!==be.relevance)return be.relevance-ae.relevance;if(ae.language&&be.language){if(Ce(ae.language).supersetOf===be.language)return 1;if(Ce(be.language).supersetOf===ae.language)return-1}return 0}),[_e,Oe]=G,Mr=_e;return Mr.secondBest=Oe,Mr}function Ro(m,R,O){const j=R&&h[R]||O;m.classList.add("hljs"),m.classList.add(`language-${j}`)}function nn(m){let R=null;const O=J(m);if(T(O))return;if(Rr("before:highlightElement",{el:m,language:O}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(y.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),y.throwUnescapedHTML))throw new Eo("One of your code blocks includes unescaped HTML.",m.innerHTML);R=m;const j=R.textContent,G=O?Z(j,{language:O,ignoreIllegals:!0}):rn(j);m.innerHTML=G.value,m.dataset.highlighted="yes",Ro(m,O,G.language),m.result={language:G.language,re:G.relevance,relevance:G.relevance},G.secondBest&&(m.secondBest={language:G.secondBest.language,relevance:G.secondBest.relevance}),Rr("after:highlightElement",{el:m,result:G,text:j})}function Mo(m){y=Un(y,m)}const xo=()=>{Dr(),Je("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function To(){Dr(),Je("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Hn=!1;function Dr(){function m(){Dr()}if(document.readyState==="loading"){Hn||window.addEventListener("DOMContentLoaded",m,!1),Hn=!0;return}document.querySelectorAll(y.cssSelector).forEach(nn)}function So(m,R){let O=null;try{O=R(o)}catch(j){if(He("Language definition for '{}' could not be registered.".replace("{}",m)),H)He(j);else throw j;O=w}O.name||(O.name=m),d[m]=O,O.rawDefinition=R.bind(null,o),O.aliases&&Kn(O.aliases,{languageName:m})}function Fo(m){delete d[m];for(const R of Object.keys(h))h[R]===m&&delete h[R]}function No(){return Object.keys(d)}function Ce(m){return m=(m||"").toLowerCase(),d[m]||d[h[m]]}function Kn(m,{languageName:R}){typeof m=="string"&&(m=[m]),m.forEach(O=>{h[O.toLowerCase()]=R})}function Zn(m){const R=Ce(m);return R&&!R.disableAutodetect}function Ao(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=R=>{m["before:highlightBlock"](Object.assign({block:R.el},R))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=R=>{m["after:highlightBlock"](Object.assign({block:R.el},R))})}function ko(m){Ao(m),N.push(m)}function Co(m){const R=N.indexOf(m);R!==-1&&N.splice(R,1)}function Rr(m,R){const O=m;N.forEach(function(j){j[O]&&j[O](R)})}function Oo(m){return Je("10.7.0","highlightBlock will be removed entirely in v12.0"),Je("10.7.0","Please use highlightElement now."),nn(m)}Object.assign(o,{highlight:Z,highlightAuto:rn,highlightAll:Dr,highlightElement:nn,highlightBlock:Oo,configure:Mo,initHighlighting:xo,initHighlightingOnLoad:To,registerLanguage:So,unregisterLanguage:Fo,listLanguages:No,getLanguage:Ce,registerAliases:Kn,autoDetection:Zn,inherit:Un,addPlugin:ko,removePlugin:Co}),o.debugMode=function(){H=!1},o.safeMode=function(){H=!0},o.versionString=wo,o.regex={concat:S,lookahead:f,either:z,optional:g,anyNumberOfTimes:p};for(const m in wr)typeof wr[m]=="object"&&e(wr[m]);return Object.assign(o,wr),o},Xe=qn({});return Xe.newInstance=()=>qn({}),fn=Xe,Xe.HighlightJS=Xe,Xe.default=Xe,fn}var qv=$v();const mt=Uv(qv);var Hv=ve("<pre><code><!></code></pre>");function Kv(e,r){const n=jr(r,["children","$$slots","$$events","$$legacy"]),t=jr(n,["code","highlighted","languageName","langtag"]);let i=je(r,"code",8),s=je(r,"highlighted",8),l=je(r,"languageName",8,"plaintext"),u=je(r,"langtag",8,!1);var a=Hv();let c;var v=W(a);In(v,1,"",null,{},{hljs:!0});var _=W(v);{var f=g=>{var S=On(),k=Zr(S);si(k,s),te(g,S)},p=g=>{var S=Xs();Ee(()=>Be(S,i())),te(g,S)};hn(_,g=>{s()?g(f):g(p,!1)})}Ee(g=>c=_i(a,c,{"data-language":l(),...t,[fr]:g},"svelte-1w9vok"),[()=>({langtag:u()})],Sn),te(e,a)}function Zv(e,r){const n=jr(r,["children","$$slots","$$events","$$legacy"]),t=jr(n,["language","code","langtag"]);gr(r,!1);let i=je(r,"language",8),s=je(r,"code",8),l=je(r,"langtag",8,!1);const u=bi();let a=Fn("");yi(()=>{I(a)&&u("highlight",{highlighted:I(a)})}),Ts(()=>(vn(i()),vn(s())),()=>{mt.registerLanguage(i().name,i().register),ue(a,mt.highlight(s(),{language:i().name}).value)}),Ss(),Ln();var c=On(),v=Zr(c);ii(v,r,"default",{get highlighted(){return I(a)}},_=>{Kv(_,gi(()=>t,{get languageName(){return i().name},get langtag(){return l()},get highlighted(){return I(a)},get code(){return s()}}))}),te(e,c),hr()}function Gv(e){const r="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",s={$pattern:r,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},l={keywords:s,illegal:/<\//},u={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},a={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},c={className:"subst",begin:/\$\(/,end:/\)/,keywords:s},v={className:"variable",begin:"\\$"+r},_={className:"string",contains:[e.BACKSLASH_ESCAPE,c,v],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},f={className:"string",contains:[e.BACKSLASH_ESCAPE,c,v],begin:"`",end:"`"},p={className:"meta",begin:"@"+r},g={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return l.name="Julia",l.contains=[u,a,_,f,p,g,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],c.contains=l.contains,l}const Wv={name:"julia",register:Gv};var Jv=ve('<th class="svelte-m8v9hl"> </th>'),Xv=ve('<td class="svelte-m8v9hl"> </td>'),Yv=ve('<a class="issue svelte-m8v9hl" target="_blank">(?)</a>'),Qv=ve('<td class="svelte-m8v9hl"><!> <span> </span></td>'),ep=ve('<tr class="svelte-m8v9hl"><td class="svelte-m8v9hl"> <div class="model-definition svelte-m8v9hl"><!></div></td><!></tr>'),rp=ve('<table id="results" class="svelte-m8v9hl"><thead><tr class="svelte-m8v9hl"><th class="svelte-m8v9hl">Model name \\\\ AD type</th><!></tr></thead><tbody></tbody></table>');function np(e,r){gr(r,!0);const n=[...r.data.keys()],t=r.data.get(n[0]).keys(),i="https://github.com/EnzymeAD/Enzyme.jl/issues/1995",l={assume_mvnormal__EnzymeForward:i,assume_wishart__EnzymeForward:i,multithreaded__Mooncake:"https://github.com/chalk-lab/Mooncake.jl/issues/570"};var u=rp(),a=W(u),c=W(a),v=we(W(c));dr(v,17,()=>t,ur,(f,p)=>{var g=Jv(),S=W(g);Ee(()=>Be(S,I(p))),te(f,g)});var _=we(a);dr(_,21,()=>yn(r.data),ur,(f,p)=>{let g=()=>I(p)[0],S=()=>I(p)[1];var k=ep(),z=W(k),q=W(z),x=we(q),D=W(x);Zv(D,{language:Wv,get code(){return r.modelDefinitions[g()]}});var M=we(z);dr(M,17,()=>yn(S()),ur,(ee,F)=>{let $=()=>I(F)[0],Y=()=>I(F)[1];var xe=On(),pe=Zr(xe);{var qe=re=>{var ge=Xv(),Te=W(ge);Ee(ke=>Be(Te,ke),[()=>Y().toFixed(3)]),te(re,ge)},or=re=>{var ge=Qv(),Te=W(ge);{var ke=sr=>{var yr=Yv();Ee(()=>bn(yr,"href",l[`${g()}__${$()}`])),te(sr,yr)};hn(Te,sr=>{l[`${g()}__${$()}`]&&sr(ke)})}var he=we(Te,2),Yr=W(he);Ee(()=>{In(he,1,Ht(Y()),"svelte-m8v9hl"),Be(Yr,Y())}),te(re,ge)};hn(pe,re=>{typeof Y()=="number"?re(qe):re(or,!1)})}te(ee,xe)}),Ee(()=>Be(q,`${g()??""} `)),te(f,k)}),te(e,u),hr()}var tp=ve("<h3> </h3> <!>",1),op=ve(`<div id="main-wrapper" class="svelte-3oks6t"><main class="svelte-3oks6t"><h1>Turing AD tests</h1> <p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p> <p>This page is intended as a brief overview of how different AD
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
                describes the problem.</li></ul> <div class="warning svelte-3oks6t"><b>Note: The results here are run with Julia 1.11. Mooncake and Enzyme currently do not work on Julia 1.12.</b></div> <h2>Results</h2> <p><a href="adtests.json" target="_blank" download="">Download the raw data (JSON)</a></p> <!> <h2>Manifest</h2> <p>The tests above were run with the following package versions:</p> <!></main></div>`);function sp(e,r){gr(r,!1);let n=new Map;for(const[u,a]of Object.entries(ya)){let c=a.__category__;delete a.__category__;let v=new Map;for(const[_,f]of Object.entries(a))v.set(_,f);n.has(c)||n.set(c,new Map),n.get(c).set(u,v)}console.log(n),Ln();var t=op(),i=W(t),s=we(W(i),16);dr(s,1,()=>n.entries(),ur,(u,a)=>{let c=()=>I(a)[0],v=()=>I(a)[1];var _=tp(),f=Zr(_),p=W(f),g=we(f,2);np(g,{get data(){return v()},modelDefinitions:hl}),Ee(()=>Be(p,c())),te(u,_)});var l=we(s,6);Vv(l,{}),te(e,t),hr()}Ys(sp,{target:document.getElementById("app")});
