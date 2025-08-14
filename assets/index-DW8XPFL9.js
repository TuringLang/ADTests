(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const Qr=!1;var $n=Array.isArray,$o=Array.prototype.indexOf,wr=Array.from,Uo=Object.defineProperty,je=Object.getOwnPropertyDescriptor,vt=Object.getOwnPropertyDescriptors,Ho=Object.prototype,Zo=Array.prototype,Er=Object.getPrototypeOf,et=Object.isExtensible;function ln(e){return typeof e=="function"}function Go(e){return e()}function fr(e){for(var n=0;n<e.length;n++)e[n]()}const me=2,pt=4,Un=8,Dr=16,Ae=32,nn=64,Cn=128,ce=256,kn=512,se=1024,Re=2048,Ue=4096,Ne=8192,Hn=16384,Ko=32768,Rr=65536,qo=1<<17,Wo=1<<19,ht=1<<20,dr=1<<21,qe=Symbol("$state"),bt=Symbol("legacy props"),Xo=Symbol("");function yt(e){return e===this.v}function Jo(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Mr(e){return!Jo(e,this.v)}function Yo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function es(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ns(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function rs(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function ts(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function os(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ss(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function is(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let pn=!1,as=!1;function ls(){pn=!0}const xr=1,Tr=2,wt=4,cs=8,us=16,fs=1,ds=2,Et=4,_s=8,ms=16,gs=1,vs=2,ie=Symbol(),ps="http://www.w3.org/1999/xhtml",hs="@attach";function Dt(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let $=null;function nt(e){$=e}function hn(e,n=!1,r){var t=$={p:$,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};pn&&!n&&($.l={s:null,u:null,r1:[],r2:Qe(!1)}),Rs(()=>{t.d=!0})}function bn(e){const n=$;if(n!==null){const l=n.e;if(l!==null){var r=P,t=V;n.e=null;try{for(var i=0;i<l.length;i++){var s=l[i];$e(s.effect),Me(s.reaction),Sr(s.fn)}}finally{$e(r),Me(t)}}$=n.p,n.m=!0}return{}}function Zn(){return!pn||$!==null&&$.l===null}function Ke(e){if(typeof e!="object"||e===null||qe in e)return e;const n=Er(e);if(n!==Ho&&n!==Zo)return e;var r=new Map,t=$n(e),i=Oe(0),s=V,l=f=>{var a=V;Me(s);var c=f();return Me(a),c};return t&&r.set("length",Oe(e.length)),new Proxy(e,{defineProperty(f,a,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&os();var g=r.get(a);return g===void 0?(g=l(()=>Oe(c.value)),r.set(a,g)):fe(g,l(()=>Ke(c.value))),!0},deleteProperty(f,a){var c=r.get(a);if(c===void 0)a in f&&(r.set(a,l(()=>Oe(ie))),ar(i));else{if(t&&typeof a=="string"){var g=r.get("length"),_=Number(a);Number.isInteger(_)&&_<g.v&&fe(g,_)}fe(c,ie),ar(i)}return!0},get(f,a,c){var v;if(a===qe)return e;var g=r.get(a),_=a in f;if(g===void 0&&(!_||(v=je(f,a))!=null&&v.writable)&&(g=l(()=>Oe(Ke(_?f[a]:ie))),r.set(a,g)),g!==void 0){var u=O(g);return u===ie?void 0:u}return Reflect.get(f,a,c)},getOwnPropertyDescriptor(f,a){var c=Reflect.getOwnPropertyDescriptor(f,a);if(c&&"value"in c){var g=r.get(a);g&&(c.value=O(g))}else if(c===void 0){var _=r.get(a),u=_==null?void 0:_.v;if(_!==void 0&&u!==ie)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(f,a){var u;if(a===qe)return!0;var c=r.get(a),g=c!==void 0&&c.v!==ie||Reflect.has(f,a);if(c!==void 0||P!==null&&(!g||(u=je(f,a))!=null&&u.writable)){c===void 0&&(c=l(()=>Oe(g?Ke(f[a]):ie)),r.set(a,c));var _=O(c);if(_===ie)return!1}return g},set(f,a,c,g){var H;var _=r.get(a),u=a in f;if(t&&a==="length")for(var v=c;v<_.v;v+=1){var p=r.get(v+"");p!==void 0?fe(p,ie):v in f&&(p=l(()=>Oe(ie)),r.set(v+"",p))}_===void 0?(!u||(H=je(f,a))!=null&&H.writable)&&(_=l(()=>Oe(void 0)),fe(_,l(()=>Ke(c))),r.set(a,_)):(u=_.v!==ie,fe(_,l(()=>Ke(c))));var F=Reflect.getOwnPropertyDescriptor(f,a);if(F!=null&&F.set&&F.set.call(g,c),!u){if(t&&typeof a=="string"){var C=r.get("length"),z=Number(a);Number.isInteger(z)&&z>=C.v&&fe(C,z+1)}ar(i)}return!0},ownKeys(f){O(i);var a=Reflect.ownKeys(f).filter(_=>{var u=r.get(_);return u===void 0||u.v!==ie});for(var[c,g]of r)g.v!==ie&&!(c in f)&&a.push(c);return a},setPrototypeOf(){ss()}})}function ar(e,n=1){fe(e,e.v+n)}function mn(e){var n=me|Re,r=V!==null&&(V.f&me)!==0?V:null;return P===null||r!==null&&(r.f&ce)!==0?n|=ce:P.f|=ht,{ctx:$,deps:null,effects:null,equals:yt,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:r??P}}function Fr(e){const n=mn(e);return n.equals=Mr,n}function Rt(e){var n=e.effects;if(n!==null){e.effects=null;for(var r=0;r<n.length;r+=1)Se(n[r])}}function bs(e){for(var n=e.parent;n!==null;){if((n.f&me)===0)return n;n=n.parent}return null}function Mt(e){var n,r=P;$e(bs(e));try{Rt(e),n=jt(e)}finally{$e(r)}return n}function xt(e){var n=Mt(e),r=(ze||(e.f&ce)!==0)&&e.deps!==null?Ue:se;de(e,r),e.equals(n)||(e.v=n,e.wv=Vt())}const gn=new Map;function Qe(e,n){var r={f:0,v:e,reactions:null,equals:yt,rv:0,wv:0};return r}function Oe(e,n){const r=Qe(e);return As(r),r}function Nr(e,n=!1){var t;const r=Qe(e);return n||(r.equals=Mr),pn&&$!==null&&$.l!==null&&((t=$.l).s??(t.s=[])).push(r),r}function fe(e,n,r=!1){V!==null&&!De&&Zn()&&(V.f&(me|Dr))!==0&&!(oe!=null&&oe.includes(e))&&is();let t=r?Ke(n):n;return _r(e,t)}function _r(e,n){if(!e.equals(n)){var r=e.v;yn?gn.set(e,n):gn.set(e,r),e.v=n,(e.f&me)!==0&&((e.f&Re)!==0&&Mt(e),de(e,(e.f&ce)===0?se:Ue)),e.wv=Vt(),Tt(e,Re),Zn()&&P!==null&&(P.f&se)!==0&&(P.f&(Ae|nn))===0&&(ue===null?Cs([e]):ue.push(e))}return n}function rt(e,n=1){var r=O(e),t=n===1?r++:r--;return fe(e,r),t}function Tt(e,n){var r=e.reactions;if(r!==null)for(var t=Zn(),i=r.length,s=0;s<i;s++){var l=r[s],f=l.f;(f&Re)===0&&(!t&&l===P||(de(l,n),(f&(se|ce))!==0&&((f&me)!==0?Tt(l,Ue):Yn(l))))}}let ys=!1;var tt,Ft,Nt,St;function ws(){if(tt===void 0){tt=window,Ft=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,r=Text.prototype;Nt=je(n,"firstChild").get,St=je(n,"nextSibling").get,et(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),et(r)&&(r.__t=void 0)}}function Gn(e=""){return document.createTextNode(e)}function Pe(e){return Nt.call(e)}function Kn(e){return St.call(e)}function W(e,n){return Pe(e)}function qn(e,n){{var r=Pe(e);return r instanceof Comment&&r.data===""?Kn(r):r}}function we(e,n=1,r=!1){let t=e;for(;n--;)t=Kn(t);return t}function Es(e){e.textContent=""}function At(e){P===null&&V===null&&es(),V!==null&&(V.f&ce)!==0&&P===null&&Qo(),yn&&Yo()}function Ds(e,n){var r=n.last;r===null?n.last=n.first=e:(r.next=e,e.prev=r,n.last=e)}function rn(e,n,r,t=!0){var i=P,s={ctx:$,deps:null,nodes_start:null,nodes_end:null,f:e|Re,first:null,fn:n,last:null,next:null,parent:i,prev:null,teardown:null,transitions:null,wv:0};if(r)try{Jn(s),s.f|=Ko}catch(a){throw Se(s),a}else n!==null&&Yn(s);var l=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(ht|Cn))===0;if(!l&&t&&(i!==null&&Ds(s,i),V!==null&&(V.f&me)!==0)){var f=V;(f.effects??(f.effects=[])).push(s)}return s}function Rs(e){const n=rn(Un,null,!1);return de(n,se),n.teardown=e,n}function ot(e){At();var n=P!==null&&(P.f&Ae)!==0&&$!==null&&!$.m;if(n){var r=$;(r.e??(r.e=[])).push({fn:e,effect:P,reaction:V})}else{var t=Sr(e);return t}}function Ms(e){return At(),Ar(e)}function xs(e){const n=rn(nn,e,!0);return(r={})=>new Promise(t=>{r.outro?In(n,()=>{Se(n),t(void 0)}):(Se(n),t(void 0))})}function Sr(e){return rn(pt,e,!1)}function Ts(e,n){var r=$,t={effect:null,ran:!1};r.l.r1.push(t),t.effect=Ar(()=>{e(),!t.ran&&(t.ran=!0,fe(r.l.r2,!0),Bn(n))})}function Fs(){var e=$;Ar(()=>{if(O(e.l.r2)){for(var n of e.l.r1){var r=n.effect;(r.f&se)!==0&&de(r,Ue),tn(r)&&Jn(r),n.ran=!1}e.l.r2.v=!1}})}function Ar(e){return rn(Un,e,!0)}function Ee(e,n=[],r=mn){const t=n.map(r);return Wn(()=>e(...t.map(O)))}function Wn(e,n=0){return rn(Un|Dr|n,e,!0)}function en(e,n=!0){return rn(Un|Ae,e,!0,n)}function Ct(e){var n=e.teardown;if(n!==null){const r=yn,t=V;st(!0),Me(null);try{n.call(null)}finally{st(r),Me(t)}}}function kt(e,n=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var t=r.next;(r.f&nn)!==0?r.parent=null:Se(r,n),r=t}}function Ns(e){for(var n=e.first;n!==null;){var r=n.next;(n.f&Ae)===0&&Se(n),n=r}}function Se(e,n=!0){var r=!1;(n||(e.f&Wo)!==0)&&e.nodes_start!==null&&(It(e.nodes_start,e.nodes_end),r=!0),kt(e,n&&!r),Vn(e,0),de(e,Hn);var t=e.transitions;if(t!==null)for(const s of t)s.stop();Ct(e);var i=e.parent;i!==null&&i.first!==null&&Ot(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function It(e,n){for(;e!==null;){var r=e===n?null:Kn(e);e.remove(),e=r}}function Ot(e){var n=e.parent,r=e.prev,t=e.next;r!==null&&(r.next=t),t!==null&&(t.prev=r),n!==null&&(n.first===e&&(n.first=t),n.last===e&&(n.last=r))}function In(e,n){var r=[];Cr(e,r,!0),Lt(r,()=>{Se(e),n&&n()})}function Lt(e,n){var r=e.length;if(r>0){var t=()=>--r||n();for(var i of e)i.out(t)}else n()}function Cr(e,n,r){if((e.f&Ne)===0){if(e.f^=Ne,e.transitions!==null)for(const l of e.transitions)(l.is_global||r)&&n.push(l);for(var t=e.first;t!==null;){var i=t.next,s=(t.f&Rr)!==0||(t.f&Ae)!==0;Cr(t,n,s?r:!1),t=i}}}function On(e){Pt(e,!0)}function Pt(e,n){if((e.f&Ne)!==0){e.f^=Ne,(e.f&se)===0&&(e.f^=se),tn(e)&&(de(e,Re),Yn(e));for(var r=e.first;r!==null;){var t=r.next,i=(r.f&Rr)!==0||(r.f&Ae)!==0;Pt(r,i?n:!1),r=t}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&s.in()}}let Ln=[];function Ss(){var e=Ln;Ln=[],fr(e)}function kr(e){Ln.length===0&&queueMicrotask(Ss),Ln.push(e)}let Sn=!1,mr=!1,Pn=null,We=!1,yn=!1;function st(e){yn=e}let An=[];let V=null,De=!1;function Me(e){V=e}let P=null;function $e(e){P=e}let oe=null;function As(e){V!==null&&V.f&dr&&(oe===null?oe=[e]:oe.push(e))}let re=null,le=0,ue=null;function Cs(e){ue=e}let zt=1,zn=0,ze=!1;function Vt(){return++zt}function tn(e){var _;var n=e.f;if((n&Re)!==0)return!0;if((n&Ue)!==0){var r=e.deps,t=(n&ce)!==0;if(r!==null){var i,s,l=(n&kn)!==0,f=t&&P!==null&&!ze,a=r.length;if(l||f){var c=e,g=c.parent;for(i=0;i<a;i++)s=r[i],(l||!((_=s==null?void 0:s.reactions)!=null&&_.includes(c)))&&(s.reactions??(s.reactions=[])).push(c);l&&(c.f^=kn),f&&g!==null&&(g.f&ce)===0&&(c.f^=ce)}for(i=0;i<a;i++)if(s=r[i],tn(s)&&xt(s),s.wv>e.wv)return!0}(!t||P!==null&&!ze)&&de(e,se)}return!1}function ks(e,n){for(var r=n;r!==null;){if((r.f&Cn)!==0)try{r.fn(e);return}catch{r.f^=Cn}r=r.parent}throw Sn=!1,e}function it(e){return(e.f&Hn)===0&&(e.parent===null||(e.parent.f&Cn)===0)}function Xn(e,n,r,t){if(Sn){if(r===null&&(Sn=!1),it(n))throw e;return}if(r!==null&&(Sn=!0),ks(e,n),it(n))throw e}function Bt(e,n,r=!0){var t=e.reactions;if(t!==null)for(var i=0;i<t.length;i++){var s=t[i];oe!=null&&oe.includes(e)||((s.f&me)!==0?Bt(s,n,!1):n===s&&(r?de(s,Re):(s.f&se)!==0&&de(s,Ue),Yn(s)))}}function jt(e){var v;var n=re,r=le,t=ue,i=V,s=ze,l=oe,f=$,a=De,c=e.f;re=null,le=0,ue=null,ze=(c&ce)!==0&&(De||!We||V===null),V=(c&(Ae|nn))===0?e:null,oe=null,nt(e.ctx),De=!1,zn++,e.f|=dr;try{var g=(0,e.fn)(),_=e.deps;if(re!==null){var u;if(Vn(e,le),_!==null&&le>0)for(_.length=le+re.length,u=0;u<re.length;u++)_[le+u]=re[u];else e.deps=_=re;if(!ze)for(u=le;u<_.length;u++)((v=_[u]).reactions??(v.reactions=[])).push(e)}else _!==null&&le<_.length&&(Vn(e,le),_.length=le);if(Zn()&&ue!==null&&!De&&_!==null&&(e.f&(me|Ue|Re))===0)for(u=0;u<ue.length;u++)Bt(ue[u],e);return i!==null&&i!==e&&(zn++,ue!==null&&(t===null?t=ue:t.push(...ue))),g}finally{re=n,le=r,ue=t,V=i,ze=s,oe=l,nt(f),De=a,e.f^=dr}}function Is(e,n){let r=n.reactions;if(r!==null){var t=$o.call(r,e);if(t!==-1){var i=r.length-1;i===0?r=n.reactions=null:(r[t]=r[i],r.pop())}}r===null&&(n.f&me)!==0&&(re===null||!re.includes(n))&&(de(n,Ue),(n.f&(ce|kn))===0&&(n.f^=kn),Rt(n),Vn(n,0))}function Vn(e,n){var r=e.deps;if(r!==null)for(var t=n;t<r.length;t++)Is(e,r[t])}function Jn(e){var n=e.f;if((n&Hn)===0){de(e,se);var r=P,t=$,i=We;P=e,We=!0;try{(n&Dr)!==0?Ns(e):kt(e),Ct(e);var s=jt(e);e.teardown=typeof s=="function"?s:null,e.wv=zt;var l=e.deps,f;Qr&&as&&e.f&Re}catch(a){Xn(a,e,r,t||e.ctx)}finally{We=i,P=r}}}function Os(){try{ns()}catch(e){if(Pn!==null)Xn(e,Pn,null);else throw e}}function Ls(){var e=We;try{var n=0;for(We=!0;An.length>0;){n++>1e3&&Os();var r=An,t=r.length;An=[];for(var i=0;i<t;i++){var s=zs(r[i]);Ps(s)}gn.clear()}}finally{mr=!1,We=e,Pn=null}}function Ps(e){var n=e.length;if(n!==0)for(var r=0;r<n;r++){var t=e[r];if((t.f&(Hn|Ne))===0)try{tn(t)&&(Jn(t),t.deps===null&&t.first===null&&t.nodes_start===null&&(t.teardown===null?Ot(t):t.fn=null))}catch(i){Xn(i,t,null,t.ctx)}}}function Yn(e){mr||(mr=!0,queueMicrotask(Ls));for(var n=Pn=e;n.parent!==null;){n=n.parent;var r=n.f;if((r&(nn|Ae))!==0){if((r&se)===0)return;n.f^=se}}An.push(n)}function zs(e){for(var n=[],r=e;r!==null;){var t=r.f,i=(t&(Ae|nn))!==0,s=i&&(t&se)!==0;if(!s&&(t&Ne)===0){if((t&pt)!==0)n.push(r);else if(i)r.f^=se;else try{tn(r)&&Jn(r)}catch(a){Xn(a,r,null,r.ctx)}var l=r.first;if(l!==null){r=l;continue}}var f=r.parent;for(r=r.next;r===null&&f!==null;)r=f.next,f=f.parent}return n}function O(e){var n=e.f,r=(n&me)!==0;if(V!==null&&!De){if(!(oe!=null&&oe.includes(e))){var t=V.deps;e.rv<zn&&(e.rv=zn,re===null&&t!==null&&t[le]===e?le++:re===null?re=[e]:(!ze||!re.includes(e))&&re.push(e))}}else if(r&&e.deps===null&&e.effects===null){var i=e,s=i.parent;s!==null&&(s.f&ce)===0&&(i.f^=ce)}return r&&(i=e,tn(i)&&xt(i)),yn&&gn.has(e)?gn.get(e):e.v}function Bn(e){var n=De;try{return De=!0,e()}finally{De=n}}const Vs=-7169;function de(e,n){e.f=e.f&Vs|n}function gr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(qe in e)vr(e);else if(!Array.isArray(e))for(let n in e){const r=e[n];typeof r=="object"&&r&&qe in r&&vr(r)}}}function vr(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let t in e)try{vr(e[t],n)}catch{}const r=Er(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const t=vt(r);for(let i in t){const s=t[i].get;if(s)try{s.call(e)}catch{}}}}}function Bs(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const js=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function $s(e){return js.includes(e)}const Us={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Hs(e){return e=e.toLowerCase(),Us[e]??e}const Zs=["touchstart","touchmove"];function Gs(e){return Zs.includes(e)}function Ks(e,n){if(n){const r=document.body;e.autofocus=!0,kr(()=>{document.activeElement===r&&e.focus()})}}function qs(e){var n=V,r=P;Me(null),$e(null);try{return e()}finally{Me(n),$e(r)}}const $t=new Set,pr=new Set;function Ws(e,n,r,t={}){function i(s){if(t.capture||un.call(n,s),!s.cancelBubble)return qs(()=>r==null?void 0:r.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?kr(()=>{n.addEventListener(e,i,t)}):n.addEventListener(e,i,t),i}function Xs(e){for(var n=0;n<e.length;n++)$t.add(e[n]);for(var r of pr)r(e)}function un(e){var H;var n=this,r=n.ownerDocument,t=e.type,i=((H=e.composedPath)==null?void 0:H.call(e))||[],s=i[0]||e.target,l=0,f=e.__root;if(f){var a=i.indexOf(f);if(a!==-1&&(n===document||n===window)){e.__root=n;return}var c=i.indexOf(n);if(c===-1)return;a<=c&&(l=a)}if(s=i[l]||e.target,s!==n){Uo(e,"currentTarget",{configurable:!0,get(){return s||r}});var g=V,_=P;Me(null),$e(null);try{for(var u,v=[];s!==null;){var p=s.assignedSlot||s.parentNode||s.host||null;try{var F=s["__"+t];if(F!=null&&(!s.disabled||e.target===s))if($n(F)){var[C,...z]=F;C.apply(s,[e,...z])}else F.call(s,e)}catch(x){u?v.push(x):u=x}if(e.cancelBubble||p===n||p===null)break;s=p}if(u){for(let x of v)queueMicrotask(()=>{throw x});throw u}}finally{e.__root=n,delete e.currentTarget,Me(g),$e(_)}}}function Ut(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function vn(e,n){var r=P;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=n)}function ge(e,n){var r=(n&gs)!==0,t=(n&vs)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=Ut(s?e:"<!>"+e),r||(i=Pe(i)));var l=t||Ft?document.importNode(i,!0):i.cloneNode(!0);if(r){var f=Pe(l),a=l.lastChild;vn(f,a)}else vn(l,l);return l}}function Js(e=""){{var n=Gn(e+"");return vn(n,n),n}}function Ir(){var e=document.createDocumentFragment(),n=document.createComment(""),r=Gn();return e.append(n,r),vn(n,r),e}function te(e,n){e!==null&&e.before(n)}function Ve(e,n){var r=n==null?"":typeof n=="object"?n+"":n;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r+"")}function Ys(e,n){return Qs(e,n)}const Ye=new Map;function Qs(e,{target:n,anchor:r,props:t={},events:i,context:s,intro:l=!0}){ws();var f=new Set,a=_=>{for(var u=0;u<_.length;u++){var v=_[u];if(!f.has(v)){f.add(v);var p=Gs(v);n.addEventListener(v,un,{passive:p});var F=Ye.get(v);F===void 0?(document.addEventListener(v,un,{passive:p}),Ye.set(v,1)):Ye.set(v,F+1)}}};a(wr($t)),pr.add(a);var c=void 0,g=xs(()=>{var _=r??n.appendChild(Gn());return en(()=>{if(s){hn({});var u=$;u.c=s}i&&(t.$$events=i),c=e(_,t)||{},s&&bn()}),()=>{var p;for(var u of f){n.removeEventListener(u,un);var v=Ye.get(u);--v===0?(document.removeEventListener(u,un),Ye.delete(u)):Ye.set(u,v)}pr.delete(a),_!==r&&((p=_.parentNode)==null||p.removeChild(_))}});return ei.set(c,g),c}let ei=new WeakMap;function hr(e,n,[r,t]=[0,0]){var i=e,s=null,l=null,f=ie,a=r>0?Rr:0,c=!1;const g=(u,v=!0)=>{c=!0,_(v,u)},_=(u,v)=>{f!==(f=u)&&(f?(s?On(s):v&&(s=en(()=>v(i))),l&&In(l,()=>{l=null})):(l?On(l):v&&(l=en(()=>v(i,[r+1,t]))),s&&In(s,()=>{s=null})))};Wn(()=>{c=!1,n(g),c||_(null,null)},a)}function dn(e,n){return n}function ni(e,n,r,t){for(var i=[],s=n.length,l=0;l<s;l++)Cr(n[l].e,i,!0);var f=s>0&&i.length===0&&r!==null;if(f){var a=r.parentNode;Es(a),a.append(r),t.clear(),Le(e,n[0].prev,n[s-1].next)}Lt(i,()=>{for(var c=0;c<s;c++){var g=n[c];f||(t.delete(g.k),Le(e,g.prev,g.next)),Se(g.e,!f)}})}function _n(e,n,r,t,i,s=null){var l=e,f={flags:n,items:new Map,first:null},a=(n&wt)!==0;if(a){var c=e;l=c.appendChild(Gn())}var g=null,_=!1,u=Fr(()=>{var v=r();return $n(v)?v:v==null?[]:wr(v)});Wn(()=>{var v=O(u),p=v.length;_&&p===0||(_=p===0,ri(v,f,l,i,n,t,r),s!==null&&(p===0?g?On(g):g=en(()=>s(l)):g!==null&&In(g,()=>{g=null})),O(u))})}function ri(e,n,r,t,i,s,l){var ne,pe,Te,Ce;var f=(i&cs)!==0,a=(i&(xr|Tr))!==0,c=e.length,g=n.items,_=n.first,u=_,v,p=null,F,C=[],z=[],H,x,D,M;if(f)for(M=0;M<c;M+=1)H=e[M],x=s(H,M),D=g.get(x),D!==void 0&&((ne=D.a)==null||ne.measure(),(F??(F=new Set)).add(D));for(M=0;M<c;M+=1){if(H=e[M],x=s(H,M),D=g.get(x),D===void 0){var ee=u?u.e.nodes_start:r;p=oi(ee,n,p,p===null?n.first:p.next,H,x,M,t,i,l),g.set(x,p),C=[],z=[],u=p.next;continue}if(a&&ti(D,H,M,i),(D.e.f&Ne)!==0&&(On(D.e),f&&((pe=D.a)==null||pe.unfix(),(F??(F=new Set)).delete(D))),D!==u){if(v!==void 0&&v.has(D)){if(C.length<z.length){var N=z[0],U;p=N.prev;var Y=C[0],xe=C[C.length-1];for(U=0;U<C.length;U+=1)at(C[U],N,r);for(U=0;U<z.length;U+=1)v.delete(z[U]);Le(n,Y.prev,xe.next),Le(n,p,Y),Le(n,xe,N),u=N,p=xe,M-=1,C=[],z=[]}else v.delete(D),at(D,u,r),Le(n,D.prev,D.next),Le(n,D,p===null?n.first:p.next),Le(n,p,D),p=D;continue}for(C=[],z=[];u!==null&&u.k!==x;)(u.e.f&Ne)===0&&(v??(v=new Set)).add(u),z.push(u),u=u.next;if(u===null)continue;D=u}C.push(D),p=D,u=D.next}if(u!==null||v!==void 0){for(var ve=v===void 0?[]:wr(v);u!==null;)(u.e.f&Ne)===0&&ve.push(u),u=u.next;var He=ve.length;if(He>0){var on=(i&wt)!==0&&c===0?r:null;if(f){for(M=0;M<He;M+=1)(Te=ve[M].a)==null||Te.measure();for(M=0;M<He;M+=1)(Ce=ve[M].a)==null||Ce.fix()}ni(n,ve,on,g)}}f&&kr(()=>{var he;if(F!==void 0)for(D of F)(he=D.a)==null||he.apply()}),P.first=n.first&&n.first.e,P.last=p&&p.e}function ti(e,n,r,t){(t&xr)!==0&&_r(e.v,n),(t&Tr)!==0?_r(e.i,r):e.i=r}function oi(e,n,r,t,i,s,l,f,a,c){var g=(a&xr)!==0,_=(a&us)===0,u=g?_?Nr(i):Qe(i):i,v=(a&Tr)===0?l:Qe(l),p={i:v,v:u,k:s,a:null,e:null,prev:r,next:t};try{return p.e=en(()=>f(e,u,v,c),ys),p.e.prev=r&&r.e,p.e.next=t&&t.e,r===null?n.first=p:(r.next=p,r.e.next=p.e),t!==null&&(t.prev=p,t.e.prev=p.e),p}finally{}}function at(e,n,r){for(var t=e.next?e.next.e.nodes_start:r,i=n?n.e.nodes_start:r,s=e.e.nodes_start;s!==t;){var l=Kn(s);i.before(s),s=l}}function Le(e,n,r){n===null?e.first=r:(n.next=r,n.e.next=r&&r.e),r!==null&&(r.prev=n,r.e.prev=n&&n.e)}function si(e,n,r=!1,t=!1,i=!1){var s=e,l="";Ee(()=>{var f=P;if(l!==(l=n()??"")&&(f.nodes_start!==null&&(It(f.nodes_start,f.nodes_end),f.nodes_start=f.nodes_end=null),l!=="")){var a=l+"";r?a=`<svg>${a}</svg>`:t&&(a=`<math>${a}</math>`);var c=Ut(a);if((r||t)&&(c=Pe(c)),vn(Pe(c),c.lastChild),r||t)for(;Pe(c);)s.before(Pe(c));else s.before(c)}})}function ii(e,n,r,t,i){var f;var s=(f=n.$$slots)==null?void 0:f[r],l=!1;s===!0&&(s=n.children,l=!0),s===void 0?i!==null&&i(e):s(e,l?()=>t:t)}function ai(e,n){var r=void 0,t;Wn(()=>{r!==(r=n())&&(t&&(Se(t),t=null),r&&(t=en(()=>{Sr(()=>r(e))})))})}function Ht(e){var n,r,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(r=Ht(e[n]))&&(t&&(t+=" "),t+=r)}else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}function li(){for(var e,n,r=0,t="",i=arguments.length;r<i;r++)(e=arguments[r])&&(n=Ht(e))&&(t&&(t+=" "),t+=n);return t}function Zt(e){return typeof e=="object"?li(e):e??""}const lt=[...` 	
\r\f \v\uFEFF`];function ci(e,n,r){var t=e==null?"":""+e;if(n&&(t=t?t+" "+n:n),r){for(var i in r)if(r[i])t=t?t+" "+i:i;else if(t.length)for(var s=i.length,l=0;(l=t.indexOf(i,l))>=0;){var f=l+s;(l===0||lt.includes(t[l-1]))&&(f===t.length||lt.includes(t[f]))?t=(l===0?"":t.substring(0,l))+t.substring(f+1):l=f}}return t===""?null:t}function ct(e,n=!1){var r=n?" !important;":";",t="";for(var i in e){var s=e[i];s!=null&&s!==""&&(t+=" "+i+": "+s+r)}return t}function lr(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ui(e,n){if(n){var r="",t,i;if(Array.isArray(n)?(t=n[0],i=n[1]):t=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,l=0,f=!1,a=[];t&&a.push(...Object.keys(t).map(lr)),i&&a.push(...Object.keys(i).map(lr));var c=0,g=-1;const F=e.length;for(var _=0;_<F;_++){var u=e[_];if(f?u==="/"&&e[_-1]==="*"&&(f=!1):s?s===u&&(s=!1):u==="/"&&e[_+1]==="*"?f=!0:u==='"'||u==="'"?s=u:u==="("?l++:u===")"&&l--,!f&&s===!1&&l===0){if(u===":"&&g===-1)g=_;else if(u===";"||_===F-1){if(g!==-1){var v=lr(e.substring(c,g).trim());if(!a.includes(v)){u!==";"&&_++;var p=e.substring(c,_).trim();r+=" "+p+";"}}c=_+1,g=-1}}}}return t&&(r+=ct(t)),i&&(r+=ct(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Or(e,n,r,t,i,s){var l=e.__className;if(l!==r||l===void 0){var f=ci(r,t,s);f==null?e.removeAttribute("class"):n?e.className=f:e.setAttribute("class",f),e.__className=r}else if(s&&i!==s)for(var a in s){var c=!!s[a];(i==null||c!==!!i[a])&&e.classList.toggle(a,c)}return s}function cr(e,n={},r,t){for(var i in r){var s=r[i];n[i]!==s&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,t))}}function fi(e,n,r,t){var i=e.__style;if(i!==n){var s=ui(n,t);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=n}else t&&(Array.isArray(t)?(cr(e,r==null?void 0:r[0],t[0]),cr(e,r==null?void 0:r[1],t[1],"important")):cr(e,r,t));return t}const fn=Symbol("class"),cn=Symbol("style"),Gt=Symbol("is custom element"),Kt=Symbol("is html");function di(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function br(e,n,r,t){var i=qt(e);i[n]!==(i[n]=r)&&(n==="loading"&&(e[Xo]=r),r==null?e.removeAttribute(n):typeof r!="string"&&Wt(e).includes(n)?e[n]=r:e.setAttribute(n,r))}function _i(e,n,r,t,i=!1){var s=qt(e),l=s[Gt],f=!s[Kt],a=n||{},c=e.tagName==="OPTION";for(var g in n)g in r||(r[g]=null);r.class?r.class=Zt(r.class):r.class=null,r[cn]&&(r.style??(r.style=null));var _=Wt(e);for(const x in r){let D=r[x];if(c&&x==="value"&&D==null){e.value=e.__value="",a[x]=D;continue}if(x==="class"){var u=e.namespaceURI==="http://www.w3.org/1999/xhtml";Or(e,u,D,t,n==null?void 0:n[fn],r[fn]),a[x]=D,a[fn]=r[fn];continue}if(x==="style"){fi(e,D,n==null?void 0:n[cn],r[cn]),a[x]=D,a[cn]=r[cn];continue}var v=a[x];if(D!==v){a[x]=D;var p=x[0]+x[1];if(p!=="$$")if(p==="on"){const M={},ee="$$"+x;let N=x.slice(2);var F=$s(N);if(Bs(N)&&(N=N.slice(0,-7),M.capture=!0),!F&&v){if(D!=null)continue;e.removeEventListener(N,a[ee],M),a[ee]=null}if(D!=null)if(F)e[`__${N}`]=D,Xs([N]);else{let U=function(Y){a[x].call(this,Y)};var H=U;a[ee]=Ws(N,e,U,M)}else F&&(e[`__${N}`]=void 0)}else if(x==="style")br(e,x,D);else if(x==="autofocus")Ks(e,!!D);else if(!l&&(x==="__value"||x==="value"&&D!=null))e.value=e.__value=D;else if(x==="selected"&&c)di(e,D);else{var C=x;f||(C=Hs(C));var z=C==="defaultValue"||C==="defaultChecked";if(D==null&&!l&&!z)if(s[x]=null,C==="value"||C==="checked"){let M=e;const ee=n===void 0;if(C==="value"){let N=M.defaultValue;M.removeAttribute(C),M.defaultValue=N,M.value=M.__value=ee?N:null}else{let N=M.defaultChecked;M.removeAttribute(C),M.defaultChecked=N,M.checked=ee?N:!1}}else e.removeAttribute(x);else z||_.includes(C)&&(l||typeof D!="string")?e[C]=D:typeof D!="function"&&br(e,C,D)}}}for(let x of Object.getOwnPropertySymbols(r))x.description===hs&&ai(e,()=>r[x]);return a}function qt(e){return e.__attributes??(e.__attributes={[Gt]:e.nodeName.includes("-"),[Kt]:e.namespaceURI===ps})}var ut=new Map;function Wt(e){var n=ut.get(e.nodeName);if(n)return n;ut.set(e.nodeName,n=[]);for(var r,t=e,i=Element.prototype;i!==t;){r=vt(t);for(var s in r)r[s].set&&n.push(s);t=Er(t)}return n}function Lr(e=!1){const n=$,r=n.l.u;if(!r)return;let t=()=>gr(n.s);if(e){let i=0,s={};const l=mn(()=>{let f=!1;const a=n.s;for(const c in a)a[c]!==s[c]&&(s[c]=a[c],f=!0);return f&&i++,i});t=()=>O(l)}r.b.length&&Ms(()=>{ft(n,t),fr(r.b)}),ot(()=>{const i=Bn(()=>r.m.map(Go));return()=>{for(const s of i)typeof s=="function"&&s()}}),r.a.length&&ot(()=>{ft(n,t),fr(r.a)})}function ft(e,n){if(e.l.s)for(const r of e.l.s)O(r);n()}let Nn=!1;function mi(e){var n=Nn;try{return Nn=!1,[e(),Nn]}finally{Nn=n}}const gi={get(e,n){if(!e.exclude.includes(n))return O(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,r){return n in e.special||(e.special[n]=Be({get[n](){return e.props[n]}},n,Et)),e.special[n](r),rt(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),rt(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function jn(e,n){return new Proxy({props:e,exclude:n,special:{},version:Qe(0)},gi)}const vi={get(e,n){let r=e.props.length;for(;r--;){let t=e.props[r];if(ln(t)&&(t=t()),typeof t=="object"&&t!==null&&n in t)return t[n]}},set(e,n,r){let t=e.props.length;for(;t--;){let i=e.props[t];ln(i)&&(i=i());const s=je(i,n);if(s&&s.set)return s.set(r),!0}return!1},getOwnPropertyDescriptor(e,n){let r=e.props.length;for(;r--;){let t=e.props[r];if(ln(t)&&(t=t()),typeof t=="object"&&t!==null&&n in t){const i=je(t,n);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,n){if(n===qe||n===bt)return!1;for(let r of e.props)if(ln(r)&&(r=r()),r!=null&&n in r)return!0;return!1},ownKeys(e){const n=[];for(let r of e.props)if(ln(r)&&(r=r()),!!r){for(const t in r)n.includes(t)||n.push(t);for(const t of Object.getOwnPropertySymbols(r))n.includes(t)||n.push(t)}return n}};function pi(...e){return new Proxy({props:e},vi)}function dt(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function Be(e,n,r,t){var ee;var i=(r&fs)!==0,s=!pn||(r&ds)!==0,l=(r&_s)!==0,f=(r&ms)!==0,a=!1,c;l?[c,a]=mi(()=>e[n]):c=e[n];var g=qe in e||bt in e,_=l&&(((ee=je(e,n))==null?void 0:ee.set)??(g&&n in e&&(N=>e[n]=N)))||void 0,u=t,v=!0,p=!1,F=()=>(p=!0,v&&(v=!1,f?u=Bn(t):u=t),u);c===void 0&&t!==void 0&&(_&&s&&ts(),c=F(),_&&_(c));var C;if(s)C=()=>{var N=e[n];return N===void 0?F():(v=!0,p=!1,N)};else{var z=(i?mn:Fr)(()=>e[n]);z.f|=qo,C=()=>{var N=O(z);return N!==void 0&&(u=void 0),N===void 0?u:N}}if((r&Et)===0)return C;if(_){var H=e.$$legacy;return function(N,U){return arguments.length>0?((!s||!U||H||a)&&_(U?C():N),N):C()}}var x=!1,D=Nr(c),M=mn(()=>{var N=C(),U=O(D);return x?(x=!1,U):D.v=N});return l&&O(M),i||(M.equals=Mr),function(N,U){if(arguments.length>0){const Y=U?O(M):s&&l?Ke(N):N;if(!M.equals(Y)){if(x=!0,fe(D,Y),p&&u!==void 0&&(u=Y),dt(M))return N;Bn(()=>O(M))}return N}return dt(M)?M.v:O(M)}}function hi(e,n,{bubbles:r=!1,cancelable:t=!1}={}){return new CustomEvent(e,{detail:n,bubbles:r,cancelable:t})}function bi(){const e=$;return e===null&&Dt(),(n,r,t)=>{var s;const i=(s=e.s.$$events)==null?void 0:s[n];if(i){const l=$n(i)?i.slice():[i],f=hi(n,r,t);for(const a of l)a.call(e.x,f);return!f.defaultPrevented}return!0}}function yi(e){$===null&&Dt(),$.l===null&&rs(),wi($).a.push(e)}function wi(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Ei="5";var gt;typeof window<"u"&&((gt=window.__svelte??(window.__svelte={})).v??(gt.v=new Set)).add(Ei);ls();const Di={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:22.205223880597014,ForwardDiff:1.6137159887159886,MooncakeForward:12.865187278042654,MooncakeReverse:5.724673562828556,ReverseDiff:30.893474707006515,ReverseDiffCompiled:2.8426742411395622,Zygote:1852.6918425941562},Ri={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:20.551340798162506,ForwardDiff:1.2614854351159013,MooncakeForward:11.45118240907205,MooncakeReverse:7.476112234580383,ReverseDiff:31.070089164170977,ReverseDiffCompiled:2.8357606344628694,Zygote:"error"},Mi={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:35.5639713408393,ForwardDiff:1.383446788159997,MooncakeForward:27.508405430118874,MooncakeReverse:6.614582272032603,ReverseDiff:30.12797639952237,ReverseDiffCompiled:2.8414312486985493,Zygote:"error"},xi={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:34.33004630120524,ForwardDiff:1.3230141534160407,MooncakeForward:21.816258433558225,MooncakeReverse:6.20556552962298,ReverseDiff:29.430136042707076,ReverseDiffCompiled:2.9109062980030718,Zygote:2137.059878486202},Ti={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:60.232464858724974,ForwardDiff:1.3451003753667192,MooncakeForward:28.831569875121488,MooncakeReverse:5.239024390243903,ReverseDiff:22.760449937508678,ReverseDiffCompiled:2.2224327396741193,Zygote:"error"},Fi={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:61.722576161241754,ForwardDiff:1.412566109829687,MooncakeForward:39.7377012438833,MooncakeReverse:7.825768965096908,ReverseDiff:51.51499892094094,ReverseDiffCompiled:2.73459054597162,Zygote:"error"},Ni={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:67.34474827498083,ForwardDiff:1.403915773919468,MooncakeForward:47.795152198421654,MooncakeReverse:7.3247724005749895,ReverseDiff:50.40303419489485,ReverseDiffCompiled:2.867643251345643,Zygote:1670.6213568539952},Si={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:62.50404887571398,ForwardDiff:1.3817654045974606,MooncakeForward:41.487434927530806,MooncakeReverse:6.971409959467285,ReverseDiff:46.78657718120805,ReverseDiffCompiled:2.8756468613163952,Zygote:1409.1556117077278},Ai={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:37.50430539609644,ForwardDiff:1.3658829444679694,MooncakeForward:29.608464844173195,MooncakeReverse:6.6004889419523565,ReverseDiff:32.30609943618657,ReverseDiffCompiled:3.2925306922521407,Zygote:2108.961767997016},Ci={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:58.55615477250117,ForwardDiff:1.2718869590815425,MooncakeForward:27.52713016930336,MooncakeReverse:4.842217437319806,ReverseDiff:28.78919729932483,ReverseDiffCompiled:2.086792452830189,Zygote:"error"},ki={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:60.132283808899096,ForwardDiff:1.3626251014081736,MooncakeForward:32.3404121988581,MooncakeReverse:5.9061828296876975,ReverseDiff:40.44882340319005,ReverseDiffCompiled:2.451273182399431,Zygote:"error"},Ii={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:61.09254402397902,ForwardDiff:1.335876110743923,MooncakeForward:31.347039129525008,MooncakeReverse:6.03188983382557,ReverseDiff:34.61572311668354,ReverseDiffCompiled:2.5749976098283853,Zygote:"error"},Oi={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:148.17229217426862,ForwardDiff:2.6392894406733958,MooncakeForward:57.130592673553565,MooncakeReverse:6.405713983200395,ReverseDiff:56.28044561306393,ReverseDiffCompiled:6.720956859180533,Zygote:"error"},Li={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:60.37558281328456,ForwardDiff:1.3213580222279864,MooncakeForward:31.65184431263819,MooncakeReverse:5.876291017188155,ReverseDiff:34.70627802690583,ReverseDiffCompiled:2.6995114409400127,Zygote:"error"},Pi={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:59.90459084042592,ForwardDiff:1.3401861686939638,MooncakeForward:31.804082082155574,MooncakeReverse:5.907854476246249,ReverseDiff:39.56740681998414,ReverseDiffCompiled:2.2575656077753883,Zygote:"error"},zi={__category__:"DynamicPPL demo models",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:58.010627884212,ForwardDiff:1.3021574120633097,MooncakeForward:27.256076388888893,MooncakeReverse:5.245166537281431,ReverseDiff:30.45148124944062,ReverseDiffCompiled:1.9287529833926782,Zygote:"error"},Vi={__category__:"Core Turing syntax",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:76.49742046431642,ForwardDiff:1.4815104325699748,MooncakeForward:28.93095116556066,MooncakeReverse:4.878154157869645,ReverseDiff:20.66783942581712,ReverseDiffCompiled:1.8866427333498392,Zygote:"error"},Bi={__category__:"Core Turing syntax",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:25.50557698571894,ForwardDiff:1.5160549337764528,MooncakeForward:16.894884222785503,MooncakeReverse:7.471139977603584,ReverseDiff:56.71099779492833,ReverseDiffCompiled:5.226664835447818,Zygote:"error"},ji={__category__:"DynamicPPL arXiV paper",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:28.625872423307907,ForwardDiff:4.046311082721175,MooncakeForward:8.565653448541893,MooncakeReverse:33.949384404924764,ReverseDiff:10.933812289819626,ReverseDiffCompiled:4.831842861705526,Zygote:212.36582330982995},$i={__category__:"DynamicPPL arXiV paper",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:165.02480960073854,ForwardDiff:3.0436794016731565,MooncakeForward:45.33270510404246,MooncakeReverse:3.743158252592215,ReverseDiff:22.37400655391917,ReverseDiffCompiled:2.1385644310474756,Zygote:"error"},Ui={__category__:"DynamicPPL arXiV paper",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:148702.6793445029,ForwardDiff:14223.078483458103,MooncakeForward:36768.296947085495,MooncakeReverse:17.575239116094988,ReverseDiff:4.812180448040081,ReverseDiffCompiled:1.779474780831073,Zygote:32.06056050482554},Hi={__category__:"DynamicPPL arXiV paper",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:18.496275826533413,MooncakeForward:423.8188644425197,MooncakeReverse:33.86257676381444,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Zi={__category__:"DynamicPPL arXiV paper",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:6984.48447998681,ForwardDiff:160.79852977282243,MooncakeForward:453.74350052260434,MooncakeReverse:10.366332897982875,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Gi={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:35.95979830075292,ForwardDiff:1.19165858433769,MooncakeForward:25.30916308417695,MooncakeReverse:9.834582942830366,ReverseDiff:12.988251289917724,ReverseDiffCompiled:1.2475868197976485,Zygote:847.0275454907461},Ki={__category__:"DynamicPPL arXiV paper",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"wrong",ForwardDiff:38.85346706171896,MooncakeForward:"wrong",MooncakeReverse:"wrong",ReverseDiff:54.69665919594982,ReverseDiffCompiled:6.981467016806235,Zygote:"error"},qi={__category__:"DynamicPPL arXiV paper",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:1284.5674519092388,ForwardDiff:440.1729869850159,MooncakeForward:1952.0775342595068,MooncakeReverse:25.76640577016961,ReverseDiff:20.21275199249883,ReverseDiffCompiled:3.9415864739485493,Zygote:76.23147049640961},Wi={__category__:"DynamicPPL arXiV paper",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:6706.453739939452,ForwardDiff:79.99533545669372,MooncakeForward:1128.7951835099243,MooncakeReverse:3.5599817036813173,ReverseDiff:33.052515257403265,ReverseDiffCompiled:3.1375863790853886,Zygote:"error"},Xi={__category__:"Core Turing syntax",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:35.98322724926888,ForwardDiff:1.322232279626793,MooncakeForward:23.132397729632448,MooncakeReverse:6.058519940862541,ReverseDiff:31.942883333920957,ReverseDiffCompiled:2.575852154038977,Zygote:1632.87932189053},Ji={__category__:"Miscellaneous features",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:24.939662059494655,ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Yi={__category__:"Core Turing syntax",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:58.45439433362244,ForwardDiff:1.2544764741339574,MooncakeForward:26.83905980712112,MooncakeReverse:13.87146248569623,ReverseDiff:26.95631349221677,ReverseDiffCompiled:2.274318595562119,Zygote:"error"},Qi={__category__:"Base Julia features",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:14.804314964958087,ForwardDiff:.904012784090909,MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"wrong",ReverseDiffCompiled:"wrong",Zygote:"error"},ea={__category__:"Effect of model size",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:136.09213906490837,ForwardDiff:1.7333521356272135,MooncakeForward:41.921026034224376,MooncakeReverse:4.419258483144001,ReverseDiff:20.19887694767766,ReverseDiffCompiled:1.8621135508300433,Zygote:"error"},na={__category__:"Effect of model size",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:628.0847041310011,ForwardDiff:9.125018648366403,MooncakeForward:128.5512140455734,MooncakeReverse:4.1946612991215035,ReverseDiff:20.383399355817996,ReverseDiffCompiled:1.8206537890044576,Zygote:"error"},ra={__category__:"Effect of model size",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:1327.7614899925873,ForwardDiff:14.174137232514457,MooncakeForward:234.55101813730946,MooncakeReverse:4.1317913056412925,ReverseDiff:20.933631952220978,ReverseDiffCompiled:1.9182189239332097,Zygote:"error"},ta={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:25.668253477588873,ForwardDiff:1.4371897470824764,MooncakeForward:17.0421134658061,MooncakeReverse:6.638031165545397,ReverseDiff:20.821078841413772,ReverseDiffCompiled:2.147056512240739,Zygote:2365.647920039417},oa={__category__:"Effect of model size",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:6677.411326485294,ForwardDiff:75.86121642969984,MooncakeForward:1196.5917127032135,MooncakeReverse:3.9458728988712073,ReverseDiff:20.443617417193895,ReverseDiffCompiled:1.8742533478051477,Zygote:"error"},sa={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:21.270254943120257,ForwardDiff:1.558546571806664,MooncakeForward:12.91100809943457,MooncakeReverse:5.769255727832768,ReverseDiff:34.94735565259583,ReverseDiffCompiled:3.3513166913569328,Zygote:"error"},ia={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:17.690032587135168,ForwardDiff:1.253517724705722,MooncakeForward:8.9732106063165,MooncakeReverse:7.9263136920011386,ReverseDiff:12.663623208379272,ReverseDiffCompiled:2.481576618109538,Zygote:"error"},aa={__category__:"Core Turing syntax",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:25.508430937339934,ForwardDiff:1.6287531149693266,MooncakeForward:17.357957053131894,MooncakeReverse:7.602608348994817,ReverseDiff:58.58276744582835,ReverseDiffCompiled:5.219199415863095,Zygote:"error"},la={__category__:"Core Turing syntax",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:26.205417311994495,ForwardDiff:1.5436631008898112,MooncakeForward:18.0931681836988,MooncakeReverse:7.263740300051732,ReverseDiff:36.52125923380862,ReverseDiffCompiled:3.4578415669711964,Zygote:2814.6788837842437},ca={__category__:"Core Turing syntax",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:49.94747350637383,ForwardDiff:1.370744083988533,MooncakeForward:23.882477519702807,MooncakeReverse:5.645833333333334,ReverseDiff:25.5749372909699,ReverseDiffCompiled:2.3320666346417784,Zygote:"error"},ua={__category__:"Core Turing syntax",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:23.5751145815651,ForwardDiff:1.437796966374269,MooncakeForward:14.256905787207227,MooncakeReverse:5.762243054371909,ReverseDiff:27.126258820305537,ReverseDiffCompiled:2.4888450112200986,Zygote:4137.08699948884},fa={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:20.416284987277354,ForwardDiff:"NaN",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"NaN",ReverseDiffCompiled:3.0506216998807703,Zygote:2303.1517986826548},da={__category__:"PosteriorDB",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:133.40057915057915,ForwardDiff:1.8214026840077868,MooncakeForward:57.15997080697852,MooncakeReverse:5.295721756220826,ReverseDiff:31.910907872432684,ReverseDiffCompiled:2.7377262215043503,Zygote:"error"},_a={__category__:"PosteriorDB",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:136.93372407574392,ForwardDiff:1.8972465389419555,MooncakeForward:59.22409973820552,MooncakeReverse:4.888114197644123,ReverseDiff:30.292591727039028,ReverseDiffCompiled:2.558323640593196,Zygote:"error"},ma={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:33.75332127703972,ForwardDiff:1.2419321573526034,MooncakeForward:22.990706913063526,MooncakeReverse:5.269166990085735,ReverseDiff:13.506476939312762,ReverseDiffCompiled:1.2114108102412813,Zygote:1666.3247301411568},ga={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:42.87856156868297,ForwardDiff:1.1067516756580023,MooncakeForward:23.872417209170674,MooncakeReverse:12.853280006955616,ReverseDiff:16.548256515872453,ReverseDiffCompiled:4.243931947069943,Zygote:442.7236688916486},va={__category__:"Core Turing syntax",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:35.89520514087989,ForwardDiff:1.3313645431263301,MooncakeForward:24.63068482517729,MooncakeReverse:7.413193039255361,ReverseDiff:31.46958141496503,ReverseDiffCompiled:2.8324621903900296,Zygote:"error"},pa={__category__:"Base Julia features",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:25.21406383341867,ForwardDiff:"error",MooncakeForward:"error",MooncakeReverse:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},ha={__category__:"Base Julia features",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:37.34437448672323,ForwardDiff:1.6317585011983609,MooncakeForward:29.101635713068667,MooncakeReverse:7.377461579595918,ReverseDiff:20.694052102950405,ReverseDiffCompiled:"wrong",Zygote:2140.6048475426633},ba={assume_beta:Di,assume_dirichlet:Ri,demo_assume_dot_observe:Mi,demo_assume_dot_observe_literal:xi,demo_assume_index_observe:Ti,demo_assume_matrix_observe_matrix_index:Fi,demo_assume_multivariate_observe:Ni,demo_assume_multivariate_observe_literal:Si,demo_assume_observe_literal:Ai,demo_assume_submodel_observe_index_literal:Ci,demo_dot_assume_observe:ki,demo_dot_assume_observe_index:Ii,assume_lkjcholu:Oi,demo_dot_assume_observe_index_literal:Li,demo_dot_assume_observe_matrix_index:Pi,demo_dot_assume_observe_submodel:zi,dot_assume:Vi,dot_observe:Bi,dppl_gauss_unknown:ji,dppl_hier_poisson:$i,dppl_high_dim_gauss:Ui,dppl_hmm_semisup:Hi,dppl_lda:Zi,assume_mvnormal:Gi,dppl_logistic_regression:Ki,dppl_naive_bayes:qi,dppl_sto_volatility:Wi,dynamic_constraint:Xi,metabayesian_MH:Ji,multiple_constraints_same_var:Yi,multithreaded:Qi,n010:ea,n050:na,n100:ra,assume_normal:ta,n500:oa,observe_bernoulli:sa,observe_categorical:ia,observe_index:aa,observe_literal:la,observe_multivariate:ca,observe_submodel:ua,observe_von_mises:fa,pdb_eight_schools_centered:da,pdb_eight_schools_noncentered:_a,assume_submodel:ma,assume_wishart:ga,broadcast_macro:va,call_C:pa,control_flow:ha},ya=`@model function assume_beta()
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

model = demo_dot_assume_observe_index()`,Ca=`@model function assume_lkjcholu()
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
    y ~ filldist(Normal(m, s), N)
end

model = dppl_gauss_unknown(y)`,Va=`using LazyArrays
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

model = dppl_hier_poisson(y, x, idx, ns)`,Ba=`@model function dppl_high_dim_gauss(D)
    m ~ filldist(Normal(0, 1), D)
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
    theta ~ filldist(Dirichlet(alpha), m)
    phi ~ filldist(Dirichlet(beta), k)
    log_phi_dot_theta = log.(phi * theta)
    @addlogprob! sum(log_phi_dot_theta[CartesianIndex.(w, doc)])
end

model = dppl_lda(k, m, w, doc, alpha, beta)`,Ua=`@model function assume_mvnormal()
    a ~ MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0])
end

model = assume_mvnormal()`,Ha=`using StatsFuns: logistic
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
image_vec = vec(image_subset[:, :])
labels = labels[1:N]

@model function dppl_naive_bayes(image_vec, labels, C, D)
    m ~ filldist(Normal(0, 10), C, D)
    image_vec ~ MvNormal(vec(m[labels, :]), I)
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

model = n500()`,rl=`@model function observe_bernoulli(x = [true, false, true])
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

model = control_flow()`,vl={assume_beta:ya,assume_dirichlet:wa,demo_assume_dot_observe:Ea,demo_assume_dot_observe_literal:Da,demo_assume_index_observe:Ra,demo_assume_matrix_observe_matrix_index:Ma,demo_assume_multivariate_observe:xa,demo_assume_multivariate_observe_literal:Ta,demo_assume_observe_literal:Fa,demo_assume_submodel_observe_index_literal:Na,demo_dot_assume_observe:Sa,demo_dot_assume_observe_index:Aa,assume_lkjcholu:Ca,demo_dot_assume_observe_index_literal:ka,demo_dot_assume_observe_matrix_index:Ia,demo_dot_assume_observe_submodel:Oa,dot_assume:La,dot_observe:Pa,dppl_gauss_unknown:za,dppl_hier_poisson:Va,dppl_high_dim_gauss:Ba,dppl_hmm_semisup:ja,dppl_lda:$a,assume_mvnormal:Ua,dppl_logistic_regression:Ha,dppl_naive_bayes:Za,dppl_sto_volatility:Ga,dynamic_constraint:Ka,metabayesian_MH:qa,multiple_constraints_same_var:Wa,multithreaded:Xa,n010:Ja,n050:Ya,n100:Qa,assume_normal:el,n500:nl,observe_bernoulli:rl,observe_categorical:tl,observe_index:ol,observe_literal:sl,observe_multivariate:il,observe_submodel:al,observe_von_mises:ll,pdb_eight_schools_centered:cl,pdb_eight_schools_noncentered:ul,assume_submodel:fl,assume_wishart:dl,broadcast_macro:_l,call_C:ml,control_flow:gl},pl="1.17.0",hl="1.5.0",bl="5.7.2",yl="0.13.0",wl="0.4.5",El="0.1.42",Dl="4.3.0",Rl="0.8.1",Ml="0.8.8",xl="0.7.0",Tl="0.4.1",Fl="1.1.3",Nl="2.5.0",Sl="1.1.2",Al="0.4.0",Cl="0.5.4",kl="3.5.1+1",Il="7.19.0",Ol="1.11.2",Ll="1.11.0",Pl="1.1.2",zl="0.5.1",Vl="1.1.0",Bl="0.4.7",jl="0.5.1",$l="0.4.4",Ul="1.11.0",Hl="0.1.1",Zl="0.15.9",Gl="0.1.9",Kl="1.2.2",ql="0.5.0",Wl="0.10.15",Xl="1.72.5",Jl="1.26.0",Yl="1.3.1",Ql="0.1.10",ec="0.10.42",nc="0.10.4+0",rc="0.7.8",tc="3.30.0",oc="0.12.1",sc="0.11.0",ic="0.13.1",ac="1.0.3",lc="0.2.4",cc="0.3.1",uc="4.18.0",fc="1.1.1+0",dc="0.1.2",_c="2.5.0",mc="0.1.2",gc="1.6.0",vc="0.1.3",pc="4.1.1",hc="1.16.0",bc="0.7.13",yc="1.7.0",wc="0.18.22",Ec="1.0.0",Dc="1.11.0",Rc="0.1.2",Mc="1.9.1",xc="0.4.0",Tc="1.1.0",Fc="1.15.1",Nc="0.7.5",Sc="0.4.26",Ac="1.11.0",Cc="0.25.120",kc="0.6.58",Ic="0.9.5",Oc="1.6.0",Lc="0.37.1",Pc="2.0.0",zc="1.0.5",Vc="0.13.67",Bc="0.8.12",jc="0.0.188+0",$c="0.1.11",Uc="0.1.10",Hc="0.10.14",Zc="1.9.0",Gc="3.3.11+0",Kc="0.2.2",qc="0.1.1",Wc="0.3.2",Xc="1.17.0",Jc="0.9.24",Yc="1.11.0",Qc="1.13.0",eu="2.28.0",nu="0.12.32",ru="0.8.5",tu="1.0.1",ou="1.1.3",su="0.1.3",iu="0.5.2",au="1.11.0",lu="0.2.0",cu="1.6.1",uu="0.6.2",fu="1.3.1",du="1.13.0",_u="0.17.2",mu="1.14.6+0",gu="1.10.17",vu="0.2.0",pu="2.12.1+0",hu="0.3.28",bu="0.4.15",yu="0.1.7",wu="0.10.5",Eu="0.3.8",Du="0.1.5",Ru="0.3.1",Mu="1.4.4",xu="2025.2.0+0",Tu="1.11.0",Fu="0.7.0",Nu="0.16.1",Su="0.7.11",Au="0.1.17",Cu="1.3.1",ku="0.2.4",Iu="1.10.0",Ou="1.0.0",Lu="0.5.15",Pu="1.7.1",zu="1.14.3",Vu="0.2.1",Bu="0.2.4",ju="0.9.38",$u="0.6.10",Uu="0.4.1",Hu="9.4.2",Zu="0.0.37+2",Gu="3.0.1+0",Ku="1.4.0",qu="2.6.2",Wu="1.11.0",Xu="0.3.1",Ju="0.2.1",Yu="0.6.4",Qu="8.6.0+0",ef="1.11.0",nf="1.7.2+0",rf="1.11.0+1",tf="0.9.1+6",of="1.11.0",sf="1.18.0+0",af="0.9.4",lf="7.4.0",cf="1.11.0",uf="2.1.2",ff="1.13.1",df="0.3.29",_f="1.11.0",mf="1.1.0",gf="0.10.7",vf="7.1.0",pf="0.3.15",hf="2025.2.0+0",bf="1.0.0",yf="0.7.18",wf="1.12.0",Ef="0.4.17",Df="0.4.8",Rf="4.3.1+0",Mf="0.1.11",xf="5.5.4+0",Tf="0.5.16",Ff="0.4.2",Nf="1.11.0",Sf="1.1.9",Af="2.28.6+0",Cf="0.2.0",kf="10.1.4+3",If="1.2.0",Of="2.1.0",Lf="1.11.0",Pf="0.4.148",zf="0.3.4",Vf="0.3.7",Bf="2023.12.12",jf="0.10.3",$f="7.10.0",Uf="0.9.31",Hf="0.4.3",Zf="1.1.3",Gf="0.1.5",Kf="0.10.4",qf="1.0.0",Wf="1.2.0",Xf="0.5.0",Jf="1.17.0",Yf="0.3.27+1",Qf="0.8.5+0",ed="5.0.8+0",nd="1.5.0",rd="3.5.2+0",td="0.5.6+0",od="1.13.2",sd="0.4.6",id="4.5.0",ad="2.10.0",ld="0.4.3",cd="1.8.1",ud="0.11.35",fd="1.0.2",dd="0.5.12",_d="0.12.3",md="2.8.3",gd="1.2.1",vd="0.3.6",pd="1.11.0",hd="1.4.3",bd="0.2.4",yd="1.2.1",wd="1.5.0",Ed="0.2.0",Dd="2.4.0",Rd="1.11.0",Md="0.1.5",xd="1.10.4",Td="1.3.0",Fd="2.11.2",Nd="1.11.0",Sd="1.11.0",Ad="1.7.1",Cd="1.6.0",kd="0.3.2",Id="0.4.5",Od="0.1.0",Ld="1.3.4",Pd="3.37.0",zd="1.2.2",Vd="1.3.1",Bd="1.16.1",jd="1.4.2",$d="0.8.0",Ud="0.5.1+0",Hd="2.2.8",Zd="0.5.15",Gd="0.7.0",Kd="0.5.1",qd="2.110.0",Wd="1.5.0",Xd="1.7.0",Jd="3.0.0",Yd="1.4.0",Qd="1.3.0",e_="1.4.8",n_="1.11.0",r_="1.1.2",t_="1.11.0",o_="0.1.0",s_="1.2.0",i_="0.9.5",a_="1.11.0",l_="1.2.2",c_="1.11.0",u_="1.0.0",f_="0.1.2",d_="0.4.21",__="2.5.1",m_="0.1.15",g_="0.1.2",v_="1.9.14",p_="1.4.3",h_="3.5.0",b_="1.11.1",y_="1.7.1",w_="0.34.6",E_="1.5.0",D_="0.4.1",R_="0.3.7",M_="0.4.1",x_="0.7.1",T_="0.3.1",F_="1.11.0",N_="1.11.0",S_=null,A_="7.7.0+0",C_="0.3.43",k_="1.0.3",I_="1.0.1",O_="1.12.1",L_="1.10.0",P_="0.1.1",z_="0.1.7",V_="1.11.0",B_="0.1.5",j_="0.11.3",$_="0.4.84",U_="0.40.1",H_="1.6.1",Z_="1.11.0",G_="1.0.2",K_="1.11.0",q_="1.24.0",W_="1.0.0",X_="0.3.0",J_="1.4.2",Y_="1.0.0",Q_="1.6.1",e1="0.10.1",n1="1.2.13+1",r1="0.7.10",t1="0.2.7",o1="1.1.3+0",s1="5.11.0+0",i1="1.59.0+0",a1="2022.0.0+0",l1="17.4.0+2",c1={ADTypes:pl,AbstractFFTs:hl,AbstractMCMC:bl,AbstractPPL:yl,AbstractTrees:wl,Accessors:El,Adapt:Dl,AdvancedHMC:Rl,AdvancedMH:Ml,AdvancedPS:xl,AdvancedVI:Tl,AliasTables:Fl,ArgCheck:Nl,ArgTools:Sl,ArnoldiMethod:Al,Arpack:Cl,Arpack_jll:kl,ArrayInterface:Il,ArrayLayouts:Ol,Artifacts:Ll,Atomix:Pl,AtomsBase:zl,AxisAlgorithms:Vl,AxisArrays:Bl,BFloat16s:jl,BangBang:$l,Base64:Ul,Baselet:Hl,Bijectors:Zl,BitFlags:Gl,BufferedStreams:Kl,CEnum:ql,CSV:Wl,ChainRules:Xl,ChainRulesCore:Jl,Chairmarks:Yl,ChangesOfVariables:Ql,Chemfiles:ec,Chemfiles_jll:nc,CodecZlib:rc,ColorSchemes:tc,ColorTypes:oc,ColorVectorSpace:sc,Colors:ic,Combinatorics:ac,CommonSolve:lc,CommonSubexpressions:cc,Compat:uc,CompilerSupportLibraries_jll:fc,CompositionsBase:dc,ConcurrentUtilities:_c,ConsoleProgressMonitor:mc,ConstructionBase:gc,ContextVariablesX:vc,Crayons:pc,DataAPI:hc,DataDeps:bc,DataFrames:yc,DataStructures:wc,DataValueInterfaces:Ec,Dates:Dc,DefineSingletons:Rc,DelimitedFiles:Mc,DensityInterface:xc,DiffResults:Tc,DiffRules:Fc,DifferentiationInterface:Nc,DispatchDoctor:Sc,Distributed:Ac,Distributions:Cc,DistributionsAD:kc,DocStringExtensions:Ic,Downloads:Oc,DynamicPPL:Lc,EllipticalSliceSampling:Pc,EnumX:zc,Enzyme:Vc,EnzymeCore:Bc,Enzyme_jll:jc,ExceptionUnwrapping:$c,ExprTools:Uc,ExproniconLite:Hc,FFTW:Zc,FFTW_jll:Gc,FLoops:Kc,FLoopsBase:qc,FastClosures:Wc,FileIO:Xc,FilePathsBase:Jc,FileWatching:Yc,FillArrays:Qc,FiniteDiff:eu,FiniteDifferences:nu,FixedPointNumbers:ru,ForwardDiff:tu,FunctionWrappers:ou,FunctionWrappersWrappers:su,Functors:iu,Future:au,GPUArraysCore:lu,GPUCompiler:cu,GZip:uu,Glob:fu,Graphs:du,HDF5:_u,HDF5_jll:mu,HTTP:gu,HashArrayMappedTries:vu,Hwloc_jll:pu,HypergeometricFunctions:hu,IRTools:bu,ImageBase:yu,ImageCore:wu,ImageShow:Eu,Inflate:Du,InitialValues:Ru,InlineStrings:Mu,IntelOpenMP_jll:xu,InteractiveUtils:Tu,InternedStrings:Fu,Interpolations:Nu,IntervalSets:Su,InverseFunctions:Au,InvertedIndices:Cu,IrrationalConstants:ku,IterTools:Iu,IteratorInterfaceExtensions:Ou,JLD2:Lu,JLLWrappers:Pu,JSON:"0.21.4",JSON3:zu,Jieko:Vu,JuliaVariables:Bu,KernelAbstractions:ju,KernelDensity:$u,LBFGSB:Uu,LLVM:Hu,LLVMExtra_jll:Zu,L_BFGS_B_jll:Gu,LaTeXStrings:Ku,LazyArrays:qu,LazyArtifacts:Wu,LazyModules:Xu,LeftChildRightSiblingTrees:Ju,LibCURL:Yu,LibCURL_jll:Qu,LibGit2:ef,LibGit2_jll:nf,LibSSH2_jll:rf,LibTracyClient_jll:tf,Libdl:of,Libiconv_jll:sf,Libtask:af,LineSearches:lf,LinearAlgebra:cf,LogDensityProblems:uf,LogDensityProblemsAD:ff,LogExpFunctions:df,Logging:_f,LoggingExtras:mf,MAT:gf,MCMCChains:vf,MCMCDiagnosticTools:pf,MKL_jll:hf,MLCore:bf,MLDatasets:yf,MLJModelInterface:wf,MLStyle:Ef,MLUtils:Df,MPICH_jll:Rf,MPIPreferences:Mf,MPItrampoline_jll:xf,MacroTools:Tf,MappedArrays:Ff,Markdown:Nf,MbedTLS:Sf,MbedTLS_jll:Af,MicroCollections:Cf,MicrosoftMPI_jll:kf,Missings:If,MistyClosures:Of,Mmap:Lf,Mooncake:Pf,MosaicViews:zf,Moshi:Vf,MozillaCACerts_jll:Bf,MultivariateStats:jf,NLSolversBase:$f,NNlib:Uf,NPZ:Hf,NaNMath:Zf,NameResolution:Gf,NamedArrays:Kf,NaturalSort:qf,NetworkOptions:Wf,ObjectFile:Xf,OffsetArrays:Jf,OpenBLAS_jll:Yf,OpenLibm_jll:Qf,OpenMPI_jll:ed,OpenSSL:nd,OpenSSL_jll:rd,OpenSpecFun_jll:td,Optim:od,Optimisers:sd,Optimization:id,OptimizationBase:ad,OptimizationOptimJL:ld,OrderedCollections:cd,PDMats:ud,PackageExtensionCompat:fd,PaddedViews:dd,Parameters:_d,Parsers:md,PeriodicTable:gd,Pickle:vd,Pkg:pd,PooledArrays:hd,PositiveFactorizations:bd,PrecompileTools:yd,Preferences:wd,PrettyPrint:Ed,PrettyTables:Dd,Printf:Rd,ProgressLogging:Md,ProgressMeter:xd,PtrArrays:Td,QuadGK:Fd,REPL:Nd,Random:Sd,Random123:Ad,RandomNumbers:Cd,RangeArrays:kd,Ratios:Id,RealDot:Od,RecipesBase:Ld,RecursiveArrayTools:Pd,Reexport:zd,Requires:Vd,ReverseDiff:Bd,Richardson:jd,Rmath:$d,Rmath_jll:Ud,Roots:Hd,RuntimeGeneratedFunctions:Zd,SHA:Gd,SSMProblems:Kd,SciMLBase:qd,SciMLOperators:Wd,SciMLStructures:Xd,ScientificTypesBase:Jd,ScopedValues:Yd,Scratch:Qd,SentinelArrays:e_,Serialization:n_,Setfield:r_,SharedArrays:t_,ShowCases:o_,SimpleBufferStream:s_,SimpleTraits:i_,Sockets:a_,SortingAlgorithms:l_,SparseArrays:c_,SparseConnectivityTracer:u_,SparseInverseSubset:f_,SparseMatrixColorings:d_,SpecialFunctions:__,SplittablesBase:m_,StackViews:g_,StaticArrays:v_,StaticArraysCore:p_,StatisticalTraits:h_,Statistics:b_,StatsAPI:y_,StatsBase:w_,StatsFuns:E_,StridedViews:D_,StringEncodings:R_,StringManipulation:M_,StructArrays:x_,StructIO:T_,StructTypes:F_,StyledStrings:N_,SuiteSparse:S_,SuiteSparse_jll:A_,SymbolicIndexingInterface:C_,TOML:k_,TableTraits:I_,Tables:O_,Tar:L_,TensorCore:P_,TerminalLoggers:z_,Test:V_,Tracy:B_,TranscodingStreams:j_,Transducers:$_,Turing:U_,URIs:H_,UUIDs:Z_,UnPack:G_,Unicode:K_,Unitful:q_,UnitfulAtomic:W_,UnsafeAtomics:X_,WeakRefStrings:J_,WoodburyMatrices:Y_,WorkerUtilities:Q_,ZipFile:e1,Zlib_jll:n1,Zygote:r1,ZygoteRules:t1,libaec_jll:o1,libblastrampoline_jll:s1,nghttp2_jll:i1,oneTBB_jll:a1,p7zip_jll:l1};function yr(e){return[...e.entries()].sort(([n,r],[t,i])=>n.localeCompare(t))}var u1=ge('<tr><td class="svelte-7y9k9c"> </td><td class="version svelte-7y9k9c"> </td></tr>'),f1=ge('<table id="manifest" class="svelte-7y9k9c"><thead><tr><th class="svelte-7y9k9c">Package</th><th class="svelte-7y9k9c">Version</th></tr></thead><tbody></tbody></table>');function d1(e,n){hn(n,!1);let r=new Map;for(const[s,l]of Object.entries(c1))r.set(s,l===""?null:l);Lr();var t=f1(),i=we(W(t));_n(i,5,()=>yr(r),dn,(s,l)=>{let f=()=>O(l)[0],a=()=>O(l)[1];var c=u1(),g=W(c),_=W(g),u=we(g),v=W(u);Ee(()=>{Ve(_,f()),Ve(v,a()===null?"":`v${a()}`)}),te(s,c)}),te(e,t),bn()}function _1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ur,_t;function m1(){if(_t)return ur;_t=1;function e(o){return o instanceof Map?o.clear=o.delete=o.set=function(){throw new Error("map is read-only")}:o instanceof Set&&(o.add=o.clear=o.delete=function(){throw new Error("set is read-only")}),Object.freeze(o),Object.getOwnPropertyNames(o).forEach(d=>{const h=o[d],S=typeof h;(S==="object"||S==="function")&&!Object.isFrozen(h)&&e(h)}),o}class n{constructor(d){d.data===void 0&&(d.data={}),this.data=d.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function r(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function t(o,...d){const h=Object.create(null);for(const S in o)h[S]=o[S];return d.forEach(function(S){for(const Z in S)h[Z]=S[Z]}),h}const i="</span>",s=o=>!!o.scope,l=(o,{prefix:d})=>{if(o.startsWith("language:"))return o.replace("language:","language-");if(o.includes(".")){const h=o.split(".");return[`${d}${h.shift()}`,...h.map((S,Z)=>`${S}${"_".repeat(Z+1)}`)].join(" ")}return`${d}${o}`};class f{constructor(d,h){this.buffer="",this.classPrefix=h.classPrefix,d.walk(this)}addText(d){this.buffer+=r(d)}openNode(d){if(!s(d))return;const h=l(d.scope,{prefix:this.classPrefix});this.span(h)}closeNode(d){s(d)&&(this.buffer+=i)}value(){return this.buffer}span(d){this.buffer+=`<span class="${d}">`}}const a=(o={})=>{const d={children:[]};return Object.assign(d,o),d};class c{constructor(){this.rootNode=a(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(d){this.top.children.push(d)}openNode(d){const h=a({scope:d});this.add(h),this.stack.push(h)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(d){return this.constructor._walk(d,this.rootNode)}static _walk(d,h){return typeof h=="string"?d.addText(h):h.children&&(d.openNode(h),h.children.forEach(S=>this._walk(d,S)),d.closeNode(h)),d}static _collapse(d){typeof d!="string"&&d.children&&(d.children.every(h=>typeof h=="string")?d.children=[d.children.join("")]:d.children.forEach(h=>{c._collapse(h)}))}}class g extends c{constructor(d){super(),this.options=d}addText(d){d!==""&&this.add(d)}startScope(d){this.openNode(d)}endScope(){this.closeNode()}__addSublanguage(d,h){const S=d.root;h&&(S.scope=`language:${h}`),this.add(S)}toHTML(){return new f(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(o){return o?typeof o=="string"?o:o.source:null}function u(o){return F("(?=",o,")")}function v(o){return F("(?:",o,")*")}function p(o){return F("(?:",o,")?")}function F(...o){return o.map(h=>_(h)).join("")}function C(o){const d=o[o.length-1];return typeof d=="object"&&d.constructor===Object?(o.splice(o.length-1,1),d):{}}function z(...o){return"("+(C(o).capture?"":"?:")+o.map(S=>_(S)).join("|")+")"}function H(o){return new RegExp(o.toString()+"|").exec("").length-1}function x(o,d){const h=o&&o.exec(d);return h&&h.index===0}const D=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function M(o,{joinWith:d}){let h=0;return o.map(S=>{h+=1;const Z=h;let G=_(S),w="";for(;G.length>0;){const y=D.exec(G);if(!y){w+=G;break}w+=G.substring(0,y.index),G=G.substring(y.index+y[0].length),y[0][0]==="\\"&&y[1]?w+="\\"+String(Number(y[1])+Z):(w+=y[0],y[0]==="("&&h++)}return w}).map(S=>`(${S})`).join(d)}const ee=/\b\B/,N="[a-zA-Z]\\w*",U="[a-zA-Z_]\\w*",Y="\\b\\d+(\\.\\d+)?",xe="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ve="\\b(0b[01]+)",He="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",on=(o={})=>{const d=/^#![ ]*\//;return o.binary&&(o.begin=F(d,/.*\b/,o.binary,/\b.*/)),t({scope:"meta",begin:d,end:/$/,relevance:0,"on:begin":(h,S)=>{h.index!==0&&S.ignoreMatch()}},o)},ne={begin:"\\\\[\\s\\S]",relevance:0},pe={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ne]},Te={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ne]},Ce={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},he=function(o,d,h={}){const S=t({scope:"comment",begin:o,end:d,contains:[]},h);S.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const Z=z("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return S.contains.push({begin:F(/[ ]+/,"(",Z,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),S},Qn=he("//","$"),sn=he("/\\*","\\*/"),wn=he("#","$"),Xt={scope:"number",begin:Y,relevance:0},Jt={scope:"number",begin:xe,relevance:0},Yt={scope:"number",begin:ve,relevance:0},Qt={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ne,{begin:/\[/,end:/\]/,relevance:0,contains:[ne]}]},eo={scope:"title",begin:N,relevance:0},no={scope:"title",begin:U,relevance:0},ro={begin:"\\.\\s*"+U,relevance:0};var En=Object.freeze({__proto__:null,APOS_STRING_MODE:pe,BACKSLASH_ESCAPE:ne,BINARY_NUMBER_MODE:Yt,BINARY_NUMBER_RE:ve,COMMENT:he,C_BLOCK_COMMENT_MODE:sn,C_LINE_COMMENT_MODE:Qn,C_NUMBER_MODE:Jt,C_NUMBER_RE:xe,END_SAME_AS_BEGIN:function(o){return Object.assign(o,{"on:begin":(d,h)=>{h.data._beginMatch=d[1]},"on:end":(d,h)=>{h.data._beginMatch!==d[1]&&h.ignoreMatch()}})},HASH_COMMENT_MODE:wn,IDENT_RE:N,MATCH_NOTHING_RE:ee,METHOD_GUARD:ro,NUMBER_MODE:Xt,NUMBER_RE:Y,PHRASAL_WORDS_MODE:Ce,QUOTE_STRING_MODE:Te,REGEXP_MODE:Qt,RE_STARTERS_RE:He,SHEBANG:on,TITLE_MODE:eo,UNDERSCORE_IDENT_RE:U,UNDERSCORE_TITLE_MODE:no});function to(o,d){o.input[o.index-1]==="."&&d.ignoreMatch()}function oo(o,d){o.className!==void 0&&(o.scope=o.className,delete o.className)}function so(o,d){d&&o.beginKeywords&&(o.begin="\\b("+o.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",o.__beforeBegin=to,o.keywords=o.keywords||o.beginKeywords,delete o.beginKeywords,o.relevance===void 0&&(o.relevance=0))}function io(o,d){Array.isArray(o.illegal)&&(o.illegal=z(...o.illegal))}function ao(o,d){if(o.match){if(o.begin||o.end)throw new Error("begin & end are not supported with match");o.begin=o.match,delete o.match}}function lo(o,d){o.relevance===void 0&&(o.relevance=1)}const co=(o,d)=>{if(!o.beforeMatch)return;if(o.starts)throw new Error("beforeMatch cannot be used with starts");const h=Object.assign({},o);Object.keys(o).forEach(S=>{delete o[S]}),o.keywords=h.keywords,o.begin=F(h.beforeMatch,u(h.begin)),o.starts={relevance:0,contains:[Object.assign(h,{endsParent:!0})]},o.relevance=0,delete h.beforeMatch},uo=["of","and","for","in","not","or","if","then","parent","list","value"],fo="keyword";function Pr(o,d,h=fo){const S=Object.create(null);return typeof o=="string"?Z(h,o.split(" ")):Array.isArray(o)?Z(h,o):Object.keys(o).forEach(function(G){Object.assign(S,Pr(o[G],d,G))}),S;function Z(G,w){d&&(w=w.map(y=>y.toLowerCase())),w.forEach(function(y){const T=y.split("|");S[T[0]]=[G,_o(T[0],T[1])]})}}function _o(o,d){return d?Number(d):mo(o)?0:1}function mo(o){return uo.includes(o.toLowerCase())}const zr={},Ze=o=>{console.error(o)},Vr=(o,...d)=>{console.log(`WARN: ${o}`,...d)},Xe=(o,d)=>{zr[`${o}/${d}`]||(console.log(`Deprecated as of ${o}. ${d}`),zr[`${o}/${d}`]=!0)},Dn=new Error;function Br(o,d,{key:h}){let S=0;const Z=o[h],G={},w={};for(let y=1;y<=d.length;y++)w[y+S]=Z[y],G[y+S]=!0,S+=H(d[y-1]);o[h]=w,o[h]._emit=G,o[h]._multi=!0}function go(o){if(Array.isArray(o.begin)){if(o.skip||o.excludeBegin||o.returnBegin)throw Ze("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Dn;if(typeof o.beginScope!="object"||o.beginScope===null)throw Ze("beginScope must be object"),Dn;Br(o,o.begin,{key:"beginScope"}),o.begin=M(o.begin,{joinWith:""})}}function vo(o){if(Array.isArray(o.end)){if(o.skip||o.excludeEnd||o.returnEnd)throw Ze("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Dn;if(typeof o.endScope!="object"||o.endScope===null)throw Ze("endScope must be object"),Dn;Br(o,o.end,{key:"endScope"}),o.end=M(o.end,{joinWith:""})}}function po(o){o.scope&&typeof o.scope=="object"&&o.scope!==null&&(o.beginScope=o.scope,delete o.scope)}function ho(o){po(o),typeof o.beginScope=="string"&&(o.beginScope={_wrap:o.beginScope}),typeof o.endScope=="string"&&(o.endScope={_wrap:o.endScope}),go(o),vo(o)}function bo(o){function d(w,y){return new RegExp(_(w),"m"+(o.case_insensitive?"i":"")+(o.unicodeRegex?"u":"")+(y?"g":""))}class h{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(y,T){T.position=this.position++,this.matchIndexes[this.matchAt]=T,this.regexes.push([T,y]),this.matchAt+=H(y)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const y=this.regexes.map(T=>T[1]);this.matcherRe=d(M(y,{joinWith:"|"}),!0),this.lastIndex=0}exec(y){this.matcherRe.lastIndex=this.lastIndex;const T=this.matcherRe.exec(y);if(!T)return null;const X=T.findIndex((an,nr)=>nr>0&&an!==void 0),K=this.matchIndexes[X];return T.splice(0,X),Object.assign(T,K)}}class S{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(y){if(this.multiRegexes[y])return this.multiRegexes[y];const T=new h;return this.rules.slice(y).forEach(([X,K])=>T.addRule(X,K)),T.compile(),this.multiRegexes[y]=T,T}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(y,T){this.rules.push([y,T]),T.type==="begin"&&this.count++}exec(y){const T=this.getMatcher(this.regexIndex);T.lastIndex=this.lastIndex;let X=T.exec(y);if(this.resumingScanAtSamePosition()&&!(X&&X.index===this.lastIndex)){const K=this.getMatcher(0);K.lastIndex=this.lastIndex+1,X=K.exec(y)}return X&&(this.regexIndex+=X.position+1,this.regexIndex===this.count&&this.considerAll()),X}}function Z(w){const y=new S;return w.contains.forEach(T=>y.addRule(T.begin,{rule:T,type:"begin"})),w.terminatorEnd&&y.addRule(w.terminatorEnd,{type:"end"}),w.illegal&&y.addRule(w.illegal,{type:"illegal"}),y}function G(w,y){const T=w;if(w.isCompiled)return T;[oo,ao,ho,co].forEach(K=>K(w,y)),o.compilerExtensions.forEach(K=>K(w,y)),w.__beforeBegin=null,[so,io,lo].forEach(K=>K(w,y)),w.isCompiled=!0;let X=null;return typeof w.keywords=="object"&&w.keywords.$pattern&&(w.keywords=Object.assign({},w.keywords),X=w.keywords.$pattern,delete w.keywords.$pattern),X=X||/\w+/,w.keywords&&(w.keywords=Pr(w.keywords,o.case_insensitive)),T.keywordPatternRe=d(X,!0),y&&(w.begin||(w.begin=/\B|\b/),T.beginRe=d(T.begin),!w.end&&!w.endsWithParent&&(w.end=/\B|\b/),w.end&&(T.endRe=d(T.end)),T.terminatorEnd=_(T.end)||"",w.endsWithParent&&y.terminatorEnd&&(T.terminatorEnd+=(w.end?"|":"")+y.terminatorEnd)),w.illegal&&(T.illegalRe=d(w.illegal)),w.contains||(w.contains=[]),w.contains=[].concat(...w.contains.map(function(K){return yo(K==="self"?w:K)})),w.contains.forEach(function(K){G(K,T)}),w.starts&&G(w.starts,y),T.matcher=Z(T),T}if(o.compilerExtensions||(o.compilerExtensions=[]),o.contains&&o.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return o.classNameAliases=t(o.classNameAliases||{}),G(o)}function jr(o){return o?o.endsWithParent||jr(o.starts):!1}function yo(o){return o.variants&&!o.cachedVariants&&(o.cachedVariants=o.variants.map(function(d){return t(o,{variants:null},d)})),o.cachedVariants?o.cachedVariants:jr(o)?t(o,{starts:o.starts?t(o.starts):null}):Object.isFrozen(o)?t(o):o}var wo="11.11.1";class Eo extends Error{constructor(d,h){super(d),this.name="HTMLInjectionError",this.html=h}}const er=r,$r=t,Ur=Symbol("nomatch"),Do=7,Hr=function(o){const d=Object.create(null),h=Object.create(null),S=[];let Z=!0;const G="Could not find the language '{}', did you forget to load/include a language module?",w={disableAutodetect:!0,name:"Plain text",contains:[]};let y={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:g};function T(m){return y.noHighlightRe.test(m)}function X(m){let R=m.className+" ";R+=m.parentNode?m.parentNode.className:"";const I=y.languageDetectRe.exec(R);if(I){const B=ke(I[1]);return B||(Vr(G.replace("{}",I[1])),Vr("Falling back to no-highlight mode for this block.",m)),B?I[1]:"no-highlight"}return R.split(/\s+/).find(B=>T(B)||ke(B))}function K(m,R,I){let B="",q="";typeof R=="object"?(B=m,I=R.ignoreIllegals,q=R.language):(Xe("10.7.0","highlight(lang, code, ...args) has been deprecated."),Xe("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),q=m,B=R),I===void 0&&(I=!0);const _e={code:B,language:q};Mn("before:highlight",_e);const Ie=_e.result?_e.result:an(_e.language,_e.code,I);return Ie.code=_e.code,Mn("after:highlight",Ie),Ie}function an(m,R,I,B){const q=Object.create(null);function _e(b,E){return b.keywords[E]}function Ie(){if(!A.keywords){J.addText(j);return}let b=0;A.keywordPatternRe.lastIndex=0;let E=A.keywordPatternRe.exec(j),k="";for(;E;){k+=j.substring(b,E.index);const L=ye.case_insensitive?E[0].toLowerCase():E[0],Q=_e(A,L);if(Q){const[Fe,Bo]=Q;if(J.addText(k),k="",q[L]=(q[L]||0)+1,q[L]<=Do&&(Fn+=Bo),Fe.startsWith("_"))k+=E[0];else{const jo=ye.classNameAliases[Fe]||Fe;be(E[0],jo)}}else k+=E[0];b=A.keywordPatternRe.lastIndex,E=A.keywordPatternRe.exec(j)}k+=j.substring(b),J.addText(k)}function xn(){if(j==="")return;let b=null;if(typeof A.subLanguage=="string"){if(!d[A.subLanguage]){J.addText(j);return}b=an(A.subLanguage,j,!0,Yr[A.subLanguage]),Yr[A.subLanguage]=b._top}else b=rr(j,A.subLanguage.length?A.subLanguage:null);A.relevance>0&&(Fn+=b.relevance),J.__addSublanguage(b._emitter,b.language)}function ae(){A.subLanguage!=null?xn():Ie(),j=""}function be(b,E){b!==""&&(J.startScope(E),J.addText(b),J.endScope())}function qr(b,E){let k=1;const L=E.length-1;for(;k<=L;){if(!b._emit[k]){k++;continue}const Q=ye.classNameAliases[b[k]]||b[k],Fe=E[k];Q?be(Fe,Q):(j=Fe,Ie(),j=""),k++}}function Wr(b,E){return b.scope&&typeof b.scope=="string"&&J.openNode(ye.classNameAliases[b.scope]||b.scope),b.beginScope&&(b.beginScope._wrap?(be(j,ye.classNameAliases[b.beginScope._wrap]||b.beginScope._wrap),j=""):b.beginScope._multi&&(qr(b.beginScope,E),j="")),A=Object.create(b,{parent:{value:A}}),A}function Xr(b,E,k){let L=x(b.endRe,k);if(L){if(b["on:end"]){const Q=new n(b);b["on:end"](E,Q),Q.isMatchIgnored&&(L=!1)}if(L){for(;b.endsParent&&b.parent;)b=b.parent;return b}}if(b.endsWithParent)return Xr(b.parent,E,k)}function Oo(b){return A.matcher.regexIndex===0?(j+=b[0],1):(ir=!0,0)}function Lo(b){const E=b[0],k=b.rule,L=new n(k),Q=[k.__beforeBegin,k["on:begin"]];for(const Fe of Q)if(Fe&&(Fe(b,L),L.isMatchIgnored))return Oo(E);return k.skip?j+=E:(k.excludeBegin&&(j+=E),ae(),!k.returnBegin&&!k.excludeBegin&&(j=E)),Wr(k,b),k.returnBegin?0:E.length}function Po(b){const E=b[0],k=R.substring(b.index),L=Xr(A,b,k);if(!L)return Ur;const Q=A;A.endScope&&A.endScope._wrap?(ae(),be(E,A.endScope._wrap)):A.endScope&&A.endScope._multi?(ae(),qr(A.endScope,b)):Q.skip?j+=E:(Q.returnEnd||Q.excludeEnd||(j+=E),ae(),Q.excludeEnd&&(j=E));do A.scope&&J.closeNode(),!A.skip&&!A.subLanguage&&(Fn+=A.relevance),A=A.parent;while(A!==L.parent);return L.starts&&Wr(L.starts,b),Q.returnEnd?0:E.length}function zo(){const b=[];for(let E=A;E!==ye;E=E.parent)E.scope&&b.unshift(E.scope);b.forEach(E=>J.openNode(E))}let Tn={};function Jr(b,E){const k=E&&E[0];if(j+=b,k==null)return ae(),0;if(Tn.type==="begin"&&E.type==="end"&&Tn.index===E.index&&k===""){if(j+=R.slice(E.index,E.index+1),!Z){const L=new Error(`0 width match regex (${m})`);throw L.languageName=m,L.badRule=Tn.rule,L}return 1}if(Tn=E,E.type==="begin")return Lo(E);if(E.type==="illegal"&&!I){const L=new Error('Illegal lexeme "'+k+'" for mode "'+(A.scope||"<unnamed>")+'"');throw L.mode=A,L}else if(E.type==="end"){const L=Po(E);if(L!==Ur)return L}if(E.type==="illegal"&&k==="")return j+=`
`,1;if(sr>1e5&&sr>E.index*3)throw new Error("potential infinite loop, way more iterations than matches");return j+=k,k.length}const ye=ke(m);if(!ye)throw Ze(G.replace("{}",m)),new Error('Unknown language: "'+m+'"');const Vo=bo(ye);let or="",A=B||Vo;const Yr={},J=new y.__emitter(y);zo();let j="",Fn=0,Ge=0,sr=0,ir=!1;try{if(ye.__emitTokens)ye.__emitTokens(R,J);else{for(A.matcher.considerAll();;){sr++,ir?ir=!1:A.matcher.considerAll(),A.matcher.lastIndex=Ge;const b=A.matcher.exec(R);if(!b)break;const E=R.substring(Ge,b.index),k=Jr(E,b);Ge=b.index+k}Jr(R.substring(Ge))}return J.finalize(),or=J.toHTML(),{language:m,value:or,relevance:Fn,illegal:!1,_emitter:J,_top:A}}catch(b){if(b.message&&b.message.includes("Illegal"))return{language:m,value:er(R),illegal:!0,relevance:0,_illegalBy:{message:b.message,index:Ge,context:R.slice(Ge-100,Ge+100),mode:b.mode,resultSoFar:or},_emitter:J};if(Z)return{language:m,value:er(R),illegal:!1,relevance:0,errorRaised:b,_emitter:J,_top:A};throw b}}function nr(m){const R={value:er(m),illegal:!1,relevance:0,_top:w,_emitter:new y.__emitter(y)};return R._emitter.addText(m),R}function rr(m,R){R=R||y.languages||Object.keys(d);const I=nr(m),B=R.filter(ke).filter(Kr).map(ae=>an(ae,m,!1));B.unshift(I);const q=B.sort((ae,be)=>{if(ae.relevance!==be.relevance)return be.relevance-ae.relevance;if(ae.language&&be.language){if(ke(ae.language).supersetOf===be.language)return 1;if(ke(be.language).supersetOf===ae.language)return-1}return 0}),[_e,Ie]=q,xn=_e;return xn.secondBest=Ie,xn}function Ro(m,R,I){const B=R&&h[R]||I;m.classList.add("hljs"),m.classList.add(`language-${B}`)}function tr(m){let R=null;const I=X(m);if(T(I))return;if(Mn("before:highlightElement",{el:m,language:I}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(y.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),y.throwUnescapedHTML))throw new Eo("One of your code blocks includes unescaped HTML.",m.innerHTML);R=m;const B=R.textContent,q=I?K(B,{language:I,ignoreIllegals:!0}):rr(B);m.innerHTML=q.value,m.dataset.highlighted="yes",Ro(m,I,q.language),m.result={language:q.language,re:q.relevance,relevance:q.relevance},q.secondBest&&(m.secondBest={language:q.secondBest.language,relevance:q.secondBest.relevance}),Mn("after:highlightElement",{el:m,result:q,text:B})}function Mo(m){y=$r(y,m)}const xo=()=>{Rn(),Xe("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function To(){Rn(),Xe("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Zr=!1;function Rn(){function m(){Rn()}if(document.readyState==="loading"){Zr||window.addEventListener("DOMContentLoaded",m,!1),Zr=!0;return}document.querySelectorAll(y.cssSelector).forEach(tr)}function Fo(m,R){let I=null;try{I=R(o)}catch(B){if(Ze("Language definition for '{}' could not be registered.".replace("{}",m)),Z)Ze(B);else throw B;I=w}I.name||(I.name=m),d[m]=I,I.rawDefinition=R.bind(null,o),I.aliases&&Gr(I.aliases,{languageName:m})}function No(m){delete d[m];for(const R of Object.keys(h))h[R]===m&&delete h[R]}function So(){return Object.keys(d)}function ke(m){return m=(m||"").toLowerCase(),d[m]||d[h[m]]}function Gr(m,{languageName:R}){typeof m=="string"&&(m=[m]),m.forEach(I=>{h[I.toLowerCase()]=R})}function Kr(m){const R=ke(m);return R&&!R.disableAutodetect}function Ao(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=R=>{m["before:highlightBlock"](Object.assign({block:R.el},R))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=R=>{m["after:highlightBlock"](Object.assign({block:R.el},R))})}function Co(m){Ao(m),S.push(m)}function ko(m){const R=S.indexOf(m);R!==-1&&S.splice(R,1)}function Mn(m,R){const I=m;S.forEach(function(B){B[I]&&B[I](R)})}function Io(m){return Xe("10.7.0","highlightBlock will be removed entirely in v12.0"),Xe("10.7.0","Please use highlightElement now."),tr(m)}Object.assign(o,{highlight:K,highlightAuto:rr,highlightAll:Rn,highlightElement:tr,highlightBlock:Io,configure:Mo,initHighlighting:xo,initHighlightingOnLoad:To,registerLanguage:Fo,unregisterLanguage:No,listLanguages:So,getLanguage:ke,registerAliases:Gr,autoDetection:Kr,inherit:$r,addPlugin:Co,removePlugin:ko}),o.debugMode=function(){Z=!1},o.safeMode=function(){Z=!0},o.versionString=wo,o.regex={concat:F,lookahead:u,either:z,optional:p,anyNumberOfTimes:v};for(const m in En)typeof En[m]=="object"&&e(En[m]);return Object.assign(o,En),o},Je=Hr({});return Je.newInstance=()=>Hr({}),ur=Je,Je.HighlightJS=Je,Je.default=Je,ur}var g1=m1();const mt=_1(g1);var v1=ge("<pre><code><!></code></pre>");function p1(e,n){const r=jn(n,["children","$$slots","$$events","$$legacy"]),t=jn(r,["code","highlighted","languageName","langtag"]);let i=Be(n,"code",8),s=Be(n,"highlighted",8),l=Be(n,"languageName",8,"plaintext"),f=Be(n,"langtag",8,!1);var a=v1();let c;var g=W(a);Or(g,1,"",null,{},{hljs:!0});var _=W(g);{var u=p=>{var F=Ir(),C=qn(F);si(C,s),te(p,F)},v=p=>{var F=Js();Ee(()=>Ve(F,i())),te(p,F)};hr(_,p=>{s()?p(u):p(v,!1)})}Ee(p=>c=_i(a,c,{"data-language":l(),...t,[fn]:p},"svelte-1w9vok"),[()=>({langtag:f()})],Fr),te(e,a)}function h1(e,n){const r=jn(n,["children","$$slots","$$events","$$legacy"]),t=jn(r,["language","code","langtag"]);hn(n,!1);let i=Be(n,"language",8),s=Be(n,"code",8),l=Be(n,"langtag",8,!1);const f=bi();let a=Nr("");yi(()=>{O(a)&&f("highlight",{highlighted:O(a)})}),Ts(()=>(gr(i()),gr(s())),()=>{mt.registerLanguage(i().name,i().register),fe(a,mt.highlight(s(),{language:i().name}).value)}),Fs(),Lr();var c=Ir(),g=qn(c);ii(g,n,"default",{get highlighted(){return O(a)}},_=>{p1(_,pi(()=>t,{get languageName(){return i().name},get langtag(){return l()},get highlighted(){return O(a)},get code(){return s()}}))}),te(e,c),bn()}function b1(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",s={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},l={keywords:s,illegal:/<\//},f={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},a={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},c={className:"subst",begin:/\$\(/,end:/\)/,keywords:s},g={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,c,g],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},u={className:"string",contains:[e.BACKSLASH_ESCAPE,c,g],begin:"`",end:"`"},v={className:"meta",begin:"@"+n},p={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return l.name="Julia",l.contains=[f,a,_,u,v,p,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],c.contains=l.contains,l}const y1={name:"julia",register:b1};var w1=ge('<th class="svelte-m8v9hl"> </th>'),E1=ge('<td class="svelte-m8v9hl"> </td>'),D1=ge('<a class="issue svelte-m8v9hl" target="_blank">(?)</a>'),R1=ge('<td class="svelte-m8v9hl"><!> <span> </span></td>'),M1=ge('<tr class="svelte-m8v9hl"><td class="svelte-m8v9hl"> <div class="model-definition svelte-m8v9hl"><!></div></td><!></tr>'),x1=ge('<table id="results" class="svelte-m8v9hl"><thead><tr class="svelte-m8v9hl"><th class="svelte-m8v9hl">Model name \\\\ AD type</th><!></tr></thead><tbody></tbody></table>');function T1(e,n){hn(n,!0);const r=[...n.data.keys()],t=n.data.get(r[0]).keys(),i="https://github.com/EnzymeAD/Enzyme.jl/issues/1995",l={assume_mvnormal__EnzymeForward:i,assume_wishart__EnzymeForward:i,multithreaded__Mooncake:"https://github.com/chalk-lab/Mooncake.jl/issues/570"};var f=x1(),a=W(f),c=W(a),g=we(W(c));_n(g,17,()=>t,dn,(u,v)=>{var p=w1(),F=W(p);Ee(()=>Ve(F,O(v))),te(u,p)});var _=we(a);_n(_,21,()=>yr(n.data),dn,(u,v)=>{let p=()=>O(v)[0],F=()=>O(v)[1];var C=M1(),z=W(C),H=W(z),x=we(H),D=W(x);h1(D,{language:y1,get code(){return n.modelDefinitions[p()]}});var M=we(z);_n(M,17,()=>yr(F()),dn,(ee,N)=>{let U=()=>O(N)[0],Y=()=>O(N)[1];var xe=Ir(),ve=qn(xe);{var He=ne=>{var pe=E1(),Te=W(pe);Ee(Ce=>Ve(Te,Ce),[()=>Y().toFixed(3)]),te(ne,pe)},on=ne=>{var pe=R1(),Te=W(pe);{var Ce=sn=>{var wn=D1();Ee(()=>br(wn,"href",l[`${p()}__${U()}`])),te(sn,wn)};hr(Te,sn=>{l[`${p()}__${U()}`]&&sn(Ce)})}var he=we(Te,2),Qn=W(he);Ee(()=>{Or(he,1,Zt(Y()),"svelte-m8v9hl"),Ve(Qn,Y())}),te(ne,pe)};hr(ve,ne=>{typeof Y()=="number"?ne(He):ne(on,!1)})}te(ee,xe)}),Ee(()=>Ve(H,`${p()??""} `)),te(u,C)}),te(e,f),bn()}var F1=ge("<h3> </h3> <!>",1),N1=ge(`<div id="main-wrapper" class="svelte-14rlgmo"><main class="svelte-14rlgmo"><h1>Turing AD tests</h1> <p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p> <p>This page is intended as a brief overview of how different AD
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
            version of Turing / DynamicPPL.</p> <!> <h2>Manifest</h2> <p>The tests above were run with the following package versions:</p> <!></main></div>`);function S1(e,n){hn(n,!1);let r=new Map;for(const[f,a]of Object.entries(ba)){let c=a.__category__;delete a.__category__;let g=new Map;for(const[_,u]of Object.entries(a))g.set(_,u);r.has(c)||r.set(c,new Map),r.get(c).set(f,g)}console.log(r),Lr();var t=N1(),i=W(t),s=we(W(i),16);_n(s,1,()=>r.entries(),dn,(f,a)=>{let c=()=>O(a)[0],g=()=>O(a)[1];var _=F1(),u=qn(_),v=W(u),p=we(u,2);T1(p,{get data(){return g()},modelDefinitions:vl}),Ee(()=>Ve(v,c())),te(f,_)});var l=we(s,6);d1(l,{}),te(e,t),bn()}Ys(S1,{target:document.getElementById("app")});
