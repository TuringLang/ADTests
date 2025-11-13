(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Qt=!1;var Un=Array.isArray,Uo=Array.prototype.indexOf,wt=Array.from,$o=Object.defineProperty,je=Object.getOwnPropertyDescriptor,pr=Object.getOwnPropertyDescriptors,Ho=Object.prototype,Zo=Array.prototype,Et=Object.getPrototypeOf,er=Object.isExtensible;function ln(e){return typeof e=="function"}function Go(e){return e()}function ft(e){for(var n=0;n<e.length;n++)e[n]()}const me=2,vr=4,$n=8,Dt=16,Ce=32,nn=64,Fn=128,ce=256,In=512,se=1024,xe=2048,$e=4096,Se=8192,Hn=16384,Ko=32768,xt=65536,qo=1<<17,Wo=1<<19,hr=1<<20,dt=1<<21,qe=Symbol("$state"),br=Symbol("legacy props"),Xo=Symbol("");function yr(e){return e===this.v}function Jo(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Rt(e){return!Jo(e,this.v)}function Yo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function es(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ns(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ts(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function rs(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function os(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ss(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function is(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let vn=!1,as=!1;function ls(){vn=!0}const Tt=1,Mt=2,wr=4,cs=8,us=16,fs=1,ds=2,Er=4,_s=8,ms=16,gs=1,ps=2,ie=Symbol(),vs="http://www.w3.org/1999/xhtml",hs="@attach";function Dr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let U=null;function nr(e){U=e}function hn(e,n=!1,t){var r=U={p:U,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};vn&&!n&&(U.l={s:null,u:null,r1:[],r2:Qe(!1)}),xs(()=>{r.d=!0})}function bn(e){const n=U;if(n!==null){const l=n.e;if(l!==null){var t=P,r=V;n.e=null;try{for(var i=0;i<l.length;i++){var s=l[i];Ue(s.effect),Re(s.reaction),At(s.fn)}}finally{Ue(t),Re(r)}}U=n.p,n.m=!0}return{}}function Zn(){return!vn||U!==null&&U.l===null}function Ke(e){if(typeof e!="object"||e===null||qe in e)return e;const n=Et(e);if(n!==Ho&&n!==Zo)return e;var t=new Map,r=Un(e),i=Oe(0),s=V,l=f=>{var a=V;Re(s);var c=f();return Re(a),c};return r&&t.set("length",Oe(e.length)),new Proxy(e,{defineProperty(f,a,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&os();var g=t.get(a);return g===void 0?(g=l(()=>Oe(c.value)),t.set(a,g)):fe(g,l(()=>Ke(c.value))),!0},deleteProperty(f,a){var c=t.get(a);if(c===void 0)a in f&&(t.set(a,l(()=>Oe(ie))),at(i));else{if(r&&typeof a=="string"){var g=t.get("length"),_=Number(a);Number.isInteger(_)&&_<g.v&&fe(g,_)}fe(c,ie),at(i)}return!0},get(f,a,c){var p;if(a===qe)return e;var g=t.get(a),_=a in f;if(g===void 0&&(!_||(p=je(f,a))!=null&&p.writable)&&(g=l(()=>Oe(Ke(_?f[a]:ie))),t.set(a,g)),g!==void 0){var u=O(g);return u===ie?void 0:u}return Reflect.get(f,a,c)},getOwnPropertyDescriptor(f,a){var c=Reflect.getOwnPropertyDescriptor(f,a);if(c&&"value"in c){var g=t.get(a);g&&(c.value=O(g))}else if(c===void 0){var _=t.get(a),u=_==null?void 0:_.v;if(_!==void 0&&u!==ie)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(f,a){var u;if(a===qe)return!0;var c=t.get(a),g=c!==void 0&&c.v!==ie||Reflect.has(f,a);if(c!==void 0||P!==null&&(!g||(u=je(f,a))!=null&&u.writable)){c===void 0&&(c=l(()=>Oe(g?Ke(f[a]):ie)),t.set(a,c));var _=O(c);if(_===ie)return!1}return g},set(f,a,c,g){var H;var _=t.get(a),u=a in f;if(r&&a==="length")for(var p=c;p<_.v;p+=1){var v=t.get(p+"");v!==void 0?fe(v,ie):p in f&&(v=l(()=>Oe(ie)),t.set(p+"",v))}_===void 0?(!u||(H=je(f,a))!=null&&H.writable)&&(_=l(()=>Oe(void 0)),fe(_,l(()=>Ke(c))),t.set(a,_)):(u=_.v!==ie,fe(_,l(()=>Ke(c))));var N=Reflect.getOwnPropertyDescriptor(f,a);if(N!=null&&N.set&&N.set.call(g,c),!u){if(r&&typeof a=="string"){var F=t.get("length"),z=Number(a);Number.isInteger(z)&&z>=F.v&&fe(F,z+1)}at(i)}return!0},ownKeys(f){O(i);var a=Reflect.ownKeys(f).filter(_=>{var u=t.get(_);return u===void 0||u.v!==ie});for(var[c,g]of t)g.v!==ie&&!(c in f)&&a.push(c);return a},setPrototypeOf(){ss()}})}function at(e,n=1){fe(e,e.v+n)}function mn(e){var n=me|xe,t=V!==null&&(V.f&me)!==0?V:null;return P===null||t!==null&&(t.f&ce)!==0?n|=ce:P.f|=hr,{ctx:U,deps:null,effects:null,equals:yr,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??P}}function Nt(e){const n=mn(e);return n.equals=Rt,n}function xr(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)Ae(n[t])}}function bs(e){for(var n=e.parent;n!==null;){if((n.f&me)===0)return n;n=n.parent}return null}function Rr(e){var n,t=P;Ue(bs(e));try{xr(e),n=jr(e)}finally{Ue(t)}return n}function Tr(e){var n=Rr(e),t=(ze||(e.f&ce)!==0)&&e.deps!==null?$e:se;de(e,t),e.equals(n)||(e.v=n,e.wv=Vr())}const gn=new Map;function Qe(e,n){var t={f:0,v:e,reactions:null,equals:yr,rv:0,wv:0};return t}function Oe(e,n){const t=Qe(e);return Cs(t),t}function St(e,n=!1){var r;const t=Qe(e);return n||(t.equals=Rt),vn&&U!==null&&U.l!==null&&((r=U.l).s??(r.s=[])).push(t),t}function fe(e,n,t=!1){V!==null&&!De&&Zn()&&(V.f&(me|Dt))!==0&&!(oe!=null&&oe.includes(e))&&is();let r=t?Ke(n):n;return _t(e,r)}function _t(e,n){if(!e.equals(n)){var t=e.v;yn?gn.set(e,n):gn.set(e,t),e.v=n,(e.f&me)!==0&&((e.f&xe)!==0&&Rr(e),de(e,(e.f&ce)===0?se:$e)),e.wv=Vr(),Mr(e,xe),Zn()&&P!==null&&(P.f&se)!==0&&(P.f&(Ce|nn))===0&&(ue===null?Fs([e]):ue.push(e))}return n}function tr(e,n=1){var t=O(e),r=n===1?t++:t--;return fe(e,t),r}function Mr(e,n){var t=e.reactions;if(t!==null)for(var r=Zn(),i=t.length,s=0;s<i;s++){var l=t[s],f=l.f;(f&xe)===0&&(!r&&l===P||(de(l,n),(f&(se|ce))!==0&&((f&me)!==0?Mr(l,$e):Yn(l))))}}let ys=!1;var rr,Nr,Sr,Ar;function ws(){if(rr===void 0){rr=window,Nr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Sr=je(n,"firstChild").get,Ar=je(n,"nextSibling").get,er(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),er(t)&&(t.__t=void 0)}}function Gn(e=""){return document.createTextNode(e)}function Pe(e){return Sr.call(e)}function Kn(e){return Ar.call(e)}function W(e,n){return Pe(e)}function qn(e,n){{var t=Pe(e);return t instanceof Comment&&t.data===""?Kn(t):t}}function we(e,n=1,t=!1){let r=e;for(;n--;)r=Kn(r);return r}function Es(e){e.textContent=""}function Cr(e){P===null&&V===null&&es(),V!==null&&(V.f&ce)!==0&&P===null&&Qo(),yn&&Yo()}function Ds(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function tn(e,n,t,r=!0){var i=P,s={ctx:U,deps:null,nodes_start:null,nodes_end:null,f:e|xe,first:null,fn:n,last:null,next:null,parent:i,prev:null,teardown:null,transitions:null,wv:0};if(t)try{Jn(s),s.f|=Ko}catch(a){throw Ae(s),a}else n!==null&&Yn(s);var l=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(hr|Fn))===0;if(!l&&r&&(i!==null&&Ds(s,i),V!==null&&(V.f&me)!==0)){var f=V;(f.effects??(f.effects=[])).push(s)}return s}function xs(e){const n=tn($n,null,!1);return de(n,se),n.teardown=e,n}function or(e){Cr();var n=P!==null&&(P.f&Ce)!==0&&U!==null&&!U.m;if(n){var t=U;(t.e??(t.e=[])).push({fn:e,effect:P,reaction:V})}else{var r=At(e);return r}}function Rs(e){return Cr(),Ct(e)}function Ts(e){const n=tn(nn,e,!0);return(t={})=>new Promise(r=>{t.outro?kn(n,()=>{Ae(n),r(void 0)}):(Ae(n),r(void 0))})}function At(e){return tn(vr,e,!1)}function Ms(e,n){var t=U,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=Ct(()=>{e(),!r.ran&&(r.ran=!0,fe(t.l.r2,!0),Bn(n))})}function Ns(){var e=U;Ct(()=>{if(O(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&se)!==0&&de(t,$e),rn(t)&&Jn(t),n.ran=!1}e.l.r2.v=!1}})}function Ct(e){return tn($n,e,!0)}function Ee(e,n=[],t=mn){const r=n.map(t);return Wn(()=>e(...r.map(O)))}function Wn(e,n=0){return tn($n|Dt|n,e,!0)}function en(e,n=!0){return tn($n|Ce,e,!0,n)}function Fr(e){var n=e.teardown;if(n!==null){const t=yn,r=V;sr(!0),Re(null);try{n.call(null)}finally{sr(t),Re(r)}}}function Ir(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&nn)!==0?t.parent=null:Ae(t,n),t=r}}function Ss(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&Ce)===0&&Ae(n),n=t}}function Ae(e,n=!0){var t=!1;(n||(e.f&Wo)!==0)&&e.nodes_start!==null&&(kr(e.nodes_start,e.nodes_end),t=!0),Ir(e,n&&!t),Vn(e,0),de(e,Hn);var r=e.transitions;if(r!==null)for(const s of r)s.stop();Fr(e);var i=e.parent;i!==null&&i.first!==null&&Or(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function kr(e,n){for(;e!==null;){var t=e===n?null:Kn(e);e.remove(),e=t}}function Or(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function kn(e,n){var t=[];Ft(e,t,!0),Lr(t,()=>{Ae(e),n&&n()})}function Lr(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var i of e)i.out(r)}else n()}function Ft(e,n,t){if((e.f&Se)===0){if(e.f^=Se,e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&n.push(l);for(var r=e.first;r!==null;){var i=r.next,s=(r.f&xt)!==0||(r.f&Ce)!==0;Ft(r,n,s?t:!1),r=i}}}function On(e){Pr(e,!0)}function Pr(e,n){if((e.f&Se)!==0){e.f^=Se,(e.f&se)===0&&(e.f^=se),rn(e)&&(de(e,xe),Yn(e));for(var t=e.first;t!==null;){var r=t.next,i=(t.f&xt)!==0||(t.f&Ce)!==0;Pr(t,i?n:!1),t=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&s.in()}}let Ln=[];function As(){var e=Ln;Ln=[],ft(e)}function It(e){Ln.length===0&&queueMicrotask(As),Ln.push(e)}let An=!1,mt=!1,Pn=null,We=!1,yn=!1;function sr(e){yn=e}let Cn=[];let V=null,De=!1;function Re(e){V=e}let P=null;function Ue(e){P=e}let oe=null;function Cs(e){V!==null&&V.f&dt&&(oe===null?oe=[e]:oe.push(e))}let te=null,le=0,ue=null;function Fs(e){ue=e}let zr=1,zn=0,ze=!1;function Vr(){return++zr}function rn(e){var _;var n=e.f;if((n&xe)!==0)return!0;if((n&$e)!==0){var t=e.deps,r=(n&ce)!==0;if(t!==null){var i,s,l=(n&In)!==0,f=r&&P!==null&&!ze,a=t.length;if(l||f){var c=e,g=c.parent;for(i=0;i<a;i++)s=t[i],(l||!((_=s==null?void 0:s.reactions)!=null&&_.includes(c)))&&(s.reactions??(s.reactions=[])).push(c);l&&(c.f^=In),f&&g!==null&&(g.f&ce)===0&&(c.f^=ce)}for(i=0;i<a;i++)if(s=t[i],rn(s)&&Tr(s),s.wv>e.wv)return!0}(!r||P!==null&&!ze)&&de(e,se)}return!1}function Is(e,n){for(var t=n;t!==null;){if((t.f&Fn)!==0)try{t.fn(e);return}catch{t.f^=Fn}t=t.parent}throw An=!1,e}function ir(e){return(e.f&Hn)===0&&(e.parent===null||(e.parent.f&Fn)===0)}function Xn(e,n,t,r){if(An){if(t===null&&(An=!1),ir(n))throw e;return}if(t!==null&&(An=!0),Is(e,n),ir(n))throw e}function Br(e,n,t=!0){var r=e.reactions;if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];oe!=null&&oe.includes(e)||((s.f&me)!==0?Br(s,n,!1):n===s&&(t?de(s,xe):(s.f&se)!==0&&de(s,$e),Yn(s)))}}function jr(e){var p;var n=te,t=le,r=ue,i=V,s=ze,l=oe,f=U,a=De,c=e.f;te=null,le=0,ue=null,ze=(c&ce)!==0&&(De||!We||V===null),V=(c&(Ce|nn))===0?e:null,oe=null,nr(e.ctx),De=!1,zn++,e.f|=dt;try{var g=(0,e.fn)(),_=e.deps;if(te!==null){var u;if(Vn(e,le),_!==null&&le>0)for(_.length=le+te.length,u=0;u<te.length;u++)_[le+u]=te[u];else e.deps=_=te;if(!ze)for(u=le;u<_.length;u++)((p=_[u]).reactions??(p.reactions=[])).push(e)}else _!==null&&le<_.length&&(Vn(e,le),_.length=le);if(Zn()&&ue!==null&&!De&&_!==null&&(e.f&(me|$e|xe))===0)for(u=0;u<ue.length;u++)Br(ue[u],e);return i!==null&&i!==e&&(zn++,ue!==null&&(r===null?r=ue:r.push(...ue))),g}finally{te=n,le=t,ue=r,V=i,ze=s,oe=l,nr(f),De=a,e.f^=dt}}function ks(e,n){let t=n.reactions;if(t!==null){var r=Uo.call(t,e);if(r!==-1){var i=t.length-1;i===0?t=n.reactions=null:(t[r]=t[i],t.pop())}}t===null&&(n.f&me)!==0&&(te===null||!te.includes(n))&&(de(n,$e),(n.f&(ce|In))===0&&(n.f^=In),xr(n),Vn(n,0))}function Vn(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)ks(e,t[r])}function Jn(e){var n=e.f;if((n&Hn)===0){de(e,se);var t=P,r=U,i=We;P=e,We=!0;try{(n&Dt)!==0?Ss(e):Ir(e),Fr(e);var s=jr(e);e.teardown=typeof s=="function"?s:null,e.wv=zr;var l=e.deps,f;Qt&&as&&e.f&xe}catch(a){Xn(a,e,t,r||e.ctx)}finally{We=i,P=t}}}function Os(){try{ns()}catch(e){if(Pn!==null)Xn(e,Pn,null);else throw e}}function Ls(){var e=We;try{var n=0;for(We=!0;Cn.length>0;){n++>1e3&&Os();var t=Cn,r=t.length;Cn=[];for(var i=0;i<r;i++){var s=zs(t[i]);Ps(s)}gn.clear()}}finally{mt=!1,We=e,Pn=null}}function Ps(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(Hn|Se))===0)try{rn(r)&&(Jn(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Or(r):r.fn=null))}catch(i){Xn(i,r,null,r.ctx)}}}function Yn(e){mt||(mt=!0,queueMicrotask(Ls));for(var n=Pn=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(nn|Ce))!==0){if((t&se)===0)return;n.f^=se}}Cn.push(n)}function zs(e){for(var n=[],t=e;t!==null;){var r=t.f,i=(r&(Ce|nn))!==0,s=i&&(r&se)!==0;if(!s&&(r&Se)===0){if((r&vr)!==0)n.push(t);else if(i)t.f^=se;else try{rn(t)&&Jn(t)}catch(a){Xn(a,t,null,t.ctx)}var l=t.first;if(l!==null){t=l;continue}}var f=t.parent;for(t=t.next;t===null&&f!==null;)t=f.next,f=f.parent}return n}function O(e){var n=e.f,t=(n&me)!==0;if(V!==null&&!De){if(!(oe!=null&&oe.includes(e))){var r=V.deps;e.rv<zn&&(e.rv=zn,te===null&&r!==null&&r[le]===e?le++:te===null?te=[e]:(!ze||!te.includes(e))&&te.push(e))}}else if(t&&e.deps===null&&e.effects===null){var i=e,s=i.parent;s!==null&&(s.f&ce)===0&&(i.f^=ce)}return t&&(i=e,rn(i)&&Tr(i)),yn&&gn.has(e)?gn.get(e):e.v}function Bn(e){var n=De;try{return De=!0,e()}finally{De=n}}const Vs=-7169;function de(e,n){e.f=e.f&Vs|n}function gt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(qe in e)pt(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&qe in t&&pt(t)}}}function pt(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{pt(e[r],n)}catch{}const t=Et(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=pr(t);for(let i in r){const s=r[i].get;if(s)try{s.call(e)}catch{}}}}}function Bs(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const js=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Us(e){return js.includes(e)}const $s={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Hs(e){return e=e.toLowerCase(),$s[e]??e}const Zs=["touchstart","touchmove"];function Gs(e){return Zs.includes(e)}function Ks(e,n){if(n){const t=document.body;e.autofocus=!0,It(()=>{document.activeElement===t&&e.focus()})}}function qs(e){var n=V,t=P;Re(null),Ue(null);try{return e()}finally{Re(n),Ue(t)}}const Ur=new Set,vt=new Set;function Ws(e,n,t,r={}){function i(s){if(r.capture||un.call(n,s),!s.cancelBubble)return qs(()=>t==null?void 0:t.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?It(()=>{n.addEventListener(e,i,r)}):n.addEventListener(e,i,r),i}function Xs(e){for(var n=0;n<e.length;n++)Ur.add(e[n]);for(var t of vt)t(e)}function un(e){var H;var n=this,t=n.ownerDocument,r=e.type,i=((H=e.composedPath)==null?void 0:H.call(e))||[],s=i[0]||e.target,l=0,f=e.__root;if(f){var a=i.indexOf(f);if(a!==-1&&(n===document||n===window)){e.__root=n;return}var c=i.indexOf(n);if(c===-1)return;a<=c&&(l=a)}if(s=i[l]||e.target,s!==n){$o(e,"currentTarget",{configurable:!0,get(){return s||t}});var g=V,_=P;Re(null),Ue(null);try{for(var u,p=[];s!==null;){var v=s.assignedSlot||s.parentNode||s.host||null;try{var N=s["__"+r];if(N!=null&&(!s.disabled||e.target===s))if(Un(N)){var[F,...z]=N;F.apply(s,[e,...z])}else N.call(s,e)}catch(T){u?p.push(T):u=T}if(e.cancelBubble||v===n||v===null)break;s=v}if(u){for(let T of p)queueMicrotask(()=>{throw T});throw u}}finally{e.__root=n,delete e.currentTarget,Re(g),Ue(_)}}}function $r(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function pn(e,n){var t=P;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function ge(e,n){var t=(n&gs)!==0,r=(n&ps)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=$r(s?e:"<!>"+e),t||(i=Pe(i)));var l=r||Nr?document.importNode(i,!0):i.cloneNode(!0);if(t){var f=Pe(l),a=l.lastChild;pn(f,a)}else pn(l,l);return l}}function Js(e=""){{var n=Gn(e+"");return pn(n,n),n}}function kt(){var e=document.createDocumentFragment(),n=document.createComment(""),t=Gn();return e.append(n,t),pn(n,t),e}function re(e,n){e!==null&&e.before(n)}function Ve(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function Ys(e,n){return Qs(e,n)}const Ye=new Map;function Qs(e,{target:n,anchor:t,props:r={},events:i,context:s,intro:l=!0}){ws();var f=new Set,a=_=>{for(var u=0;u<_.length;u++){var p=_[u];if(!f.has(p)){f.add(p);var v=Gs(p);n.addEventListener(p,un,{passive:v});var N=Ye.get(p);N===void 0?(document.addEventListener(p,un,{passive:v}),Ye.set(p,1)):Ye.set(p,N+1)}}};a(wt(Ur)),vt.add(a);var c=void 0,g=Ts(()=>{var _=t??n.appendChild(Gn());return en(()=>{if(s){hn({});var u=U;u.c=s}i&&(r.$$events=i),c=e(_,r)||{},s&&bn()}),()=>{var v;for(var u of f){n.removeEventListener(u,un);var p=Ye.get(u);--p===0?(document.removeEventListener(u,un),Ye.delete(u)):Ye.set(u,p)}vt.delete(a),_!==t&&((v=_.parentNode)==null||v.removeChild(_))}});return ei.set(c,g),c}let ei=new WeakMap;function ht(e,n,[t,r]=[0,0]){var i=e,s=null,l=null,f=ie,a=t>0?xt:0,c=!1;const g=(u,p=!0)=>{c=!0,_(p,u)},_=(u,p)=>{f!==(f=u)&&(f?(s?On(s):p&&(s=en(()=>p(i))),l&&kn(l,()=>{l=null})):(l?On(l):p&&(l=en(()=>p(i,[t+1,r]))),s&&kn(s,()=>{s=null})))};Wn(()=>{c=!1,n(g),c||_(null,null)},a)}function dn(e,n){return n}function ni(e,n,t,r){for(var i=[],s=n.length,l=0;l<s;l++)Ft(n[l].e,i,!0);var f=s>0&&i.length===0&&t!==null;if(f){var a=t.parentNode;Es(a),a.append(t),r.clear(),Le(e,n[0].prev,n[s-1].next)}Lr(i,()=>{for(var c=0;c<s;c++){var g=n[c];f||(r.delete(g.k),Le(e,g.prev,g.next)),Ae(g.e,!f)}})}function _n(e,n,t,r,i,s=null){var l=e,f={flags:n,items:new Map,first:null},a=(n&wr)!==0;if(a){var c=e;l=c.appendChild(Gn())}var g=null,_=!1,u=Nt(()=>{var p=t();return Un(p)?p:p==null?[]:wt(p)});Wn(()=>{var p=O(u),v=p.length;_&&v===0||(_=v===0,ti(p,f,l,i,n,r,t),s!==null&&(v===0?g?On(g):g=en(()=>s(l)):g!==null&&kn(g,()=>{g=null})),O(u))})}function ti(e,n,t,r,i,s,l){var ne,ve,Me,Fe;var f=(i&cs)!==0,a=(i&(Tt|Mt))!==0,c=e.length,g=n.items,_=n.first,u=_,p,v=null,N,F=[],z=[],H,T,D,R;if(f)for(R=0;R<c;R+=1)H=e[R],T=s(H,R),D=g.get(T),D!==void 0&&((ne=D.a)==null||ne.measure(),(N??(N=new Set)).add(D));for(R=0;R<c;R+=1){if(H=e[R],T=s(H,R),D=g.get(T),D===void 0){var ee=u?u.e.nodes_start:t;v=oi(ee,n,v,v===null?n.first:v.next,H,T,R,r,i,l),g.set(T,v),F=[],z=[],u=v.next;continue}if(a&&ri(D,H,R,i),(D.e.f&Se)!==0&&(On(D.e),f&&((ve=D.a)==null||ve.unfix(),(N??(N=new Set)).delete(D))),D!==u){if(p!==void 0&&p.has(D)){if(F.length<z.length){var S=z[0],$;v=S.prev;var Y=F[0],Te=F[F.length-1];for($=0;$<F.length;$+=1)ar(F[$],S,t);for($=0;$<z.length;$+=1)p.delete(z[$]);Le(n,Y.prev,Te.next),Le(n,v,Y),Le(n,Te,S),u=S,v=Te,R-=1,F=[],z=[]}else p.delete(D),ar(D,u,t),Le(n,D.prev,D.next),Le(n,D,v===null?n.first:v.next),Le(n,v,D),v=D;continue}for(F=[],z=[];u!==null&&u.k!==T;)(u.e.f&Se)===0&&(p??(p=new Set)).add(u),z.push(u),u=u.next;if(u===null)continue;D=u}F.push(D),v=D,u=D.next}if(u!==null||p!==void 0){for(var pe=p===void 0?[]:wt(p);u!==null;)(u.e.f&Se)===0&&pe.push(u),u=u.next;var He=pe.length;if(He>0){var on=(i&wr)!==0&&c===0?t:null;if(f){for(R=0;R<He;R+=1)(Me=pe[R].a)==null||Me.measure();for(R=0;R<He;R+=1)(Fe=pe[R].a)==null||Fe.fix()}ni(n,pe,on,g)}}f&&It(()=>{var he;if(N!==void 0)for(D of N)(he=D.a)==null||he.apply()}),P.first=n.first&&n.first.e,P.last=v&&v.e}function ri(e,n,t,r){(r&Tt)!==0&&_t(e.v,n),(r&Mt)!==0?_t(e.i,t):e.i=t}function oi(e,n,t,r,i,s,l,f,a,c){var g=(a&Tt)!==0,_=(a&us)===0,u=g?_?St(i):Qe(i):i,p=(a&Mt)===0?l:Qe(l),v={i:p,v:u,k:s,a:null,e:null,prev:t,next:r};try{return v.e=en(()=>f(e,u,p,c),ys),v.e.prev=t&&t.e,v.e.next=r&&r.e,t===null?n.first=v:(t.next=v,t.e.next=v.e),r!==null&&(r.prev=v,r.e.prev=v.e),v}finally{}}function ar(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,i=n?n.e.nodes_start:t,s=e.e.nodes_start;s!==r;){var l=Kn(s);i.before(s),s=l}}function Le(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function si(e,n,t=!1,r=!1,i=!1){var s=e,l="";Ee(()=>{var f=P;if(l!==(l=n()??"")&&(f.nodes_start!==null&&(kr(f.nodes_start,f.nodes_end),f.nodes_start=f.nodes_end=null),l!=="")){var a=l+"";t?a=`<svg>${a}</svg>`:r&&(a=`<math>${a}</math>`);var c=$r(a);if((t||r)&&(c=Pe(c)),pn(Pe(c),c.lastChild),t||r)for(;Pe(c);)s.before(Pe(c));else s.before(c)}})}function ii(e,n,t,r,i){var f;var s=(f=n.$$slots)==null?void 0:f[t],l=!1;s===!0&&(s=n.children,l=!0),s===void 0?i!==null&&i(e):s(e,l?()=>r:r)}function ai(e,n){var t=void 0,r;Wn(()=>{t!==(t=n())&&(r&&(Ae(r),r=null),t&&(r=en(()=>{At(()=>t(e))})))})}function Hr(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=Hr(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function li(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=Hr(e))&&(r&&(r+=" "),r+=n);return r}function Zr(e){return typeof e=="object"?li(e):e??""}const lr=[...` 	
\r\f \v\uFEFF`];function ci(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var i in t)if(t[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,l=0;(l=r.indexOf(i,l))>=0;){var f=l+s;(l===0||lr.includes(r[l-1]))&&(f===r.length||lr.includes(r[f]))?r=(l===0?"":r.substring(0,l))+r.substring(f+1):l=f}}return r===""?null:r}function cr(e,n=!1){var t=n?" !important;":";",r="";for(var i in e){var s=e[i];s!=null&&s!==""&&(r+=" "+i+": "+s+t)}return r}function lt(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ui(e,n){if(n){var t="",r,i;if(Array.isArray(n)?(r=n[0],i=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,l=0,f=!1,a=[];r&&a.push(...Object.keys(r).map(lt)),i&&a.push(...Object.keys(i).map(lt));var c=0,g=-1;const N=e.length;for(var _=0;_<N;_++){var u=e[_];if(f?u==="/"&&e[_-1]==="*"&&(f=!1):s?s===u&&(s=!1):u==="/"&&e[_+1]==="*"?f=!0:u==='"'||u==="'"?s=u:u==="("?l++:u===")"&&l--,!f&&s===!1&&l===0){if(u===":"&&g===-1)g=_;else if(u===";"||_===N-1){if(g!==-1){var p=lt(e.substring(c,g).trim());if(!a.includes(p)){u!==";"&&_++;var v=e.substring(c,_).trim();t+=" "+v+";"}}c=_+1,g=-1}}}}return r&&(t+=cr(r)),i&&(t+=cr(i,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Ot(e,n,t,r,i,s){var l=e.__className;if(l!==t||l===void 0){var f=ci(t,r,s);f==null?e.removeAttribute("class"):n?e.className=f:e.setAttribute("class",f),e.__className=t}else if(s&&i!==s)for(var a in s){var c=!!s[a];(i==null||c!==!!i[a])&&e.classList.toggle(a,c)}return s}function ct(e,n={},t,r){for(var i in t){var s=t[i];n[i]!==s&&(t[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function fi(e,n,t,r){var i=e.__style;if(i!==n){var s=ui(n,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=n}else r&&(Array.isArray(r)?(ct(e,t==null?void 0:t[0],r[0]),ct(e,t==null?void 0:t[1],r[1],"important")):ct(e,t,r));return r}const fn=Symbol("class"),cn=Symbol("style"),Gr=Symbol("is custom element"),Kr=Symbol("is html");function di(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function bt(e,n,t,r){var i=qr(e);i[n]!==(i[n]=t)&&(n==="loading"&&(e[Xo]=t),t==null?e.removeAttribute(n):typeof t!="string"&&Wr(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function _i(e,n,t,r,i=!1){var s=qr(e),l=s[Gr],f=!s[Kr],a=n||{},c=e.tagName==="OPTION";for(var g in n)g in t||(t[g]=null);t.class?t.class=Zr(t.class):t.class=null,t[cn]&&(t.style??(t.style=null));var _=Wr(e);for(const T in t){let D=t[T];if(c&&T==="value"&&D==null){e.value=e.__value="",a[T]=D;continue}if(T==="class"){var u=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ot(e,u,D,r,n==null?void 0:n[fn],t[fn]),a[T]=D,a[fn]=t[fn];continue}if(T==="style"){fi(e,D,n==null?void 0:n[cn],t[cn]),a[T]=D,a[cn]=t[cn];continue}var p=a[T];if(D!==p){a[T]=D;var v=T[0]+T[1];if(v!=="$$")if(v==="on"){const R={},ee="$$"+T;let S=T.slice(2);var N=Us(S);if(Bs(S)&&(S=S.slice(0,-7),R.capture=!0),!N&&p){if(D!=null)continue;e.removeEventListener(S,a[ee],R),a[ee]=null}if(D!=null)if(N)e[`__${S}`]=D,Xs([S]);else{let $=function(Y){a[T].call(this,Y)};var H=$;a[ee]=Ws(S,e,$,R)}else N&&(e[`__${S}`]=void 0)}else if(T==="style")bt(e,T,D);else if(T==="autofocus")Ks(e,!!D);else if(!l&&(T==="__value"||T==="value"&&D!=null))e.value=e.__value=D;else if(T==="selected"&&c)di(e,D);else{var F=T;f||(F=Hs(F));var z=F==="defaultValue"||F==="defaultChecked";if(D==null&&!l&&!z)if(s[T]=null,F==="value"||F==="checked"){let R=e;const ee=n===void 0;if(F==="value"){let S=R.defaultValue;R.removeAttribute(F),R.defaultValue=S,R.value=R.__value=ee?S:null}else{let S=R.defaultChecked;R.removeAttribute(F),R.defaultChecked=S,R.checked=ee?S:!1}}else e.removeAttribute(T);else z||_.includes(F)&&(l||typeof D!="string")?e[F]=D:typeof D!="function"&&bt(e,F,D)}}}for(let T of Object.getOwnPropertySymbols(t))T.description===hs&&ai(e,()=>t[T]);return a}function qr(e){return e.__attributes??(e.__attributes={[Gr]:e.nodeName.includes("-"),[Kr]:e.namespaceURI===vs})}var ur=new Map;function Wr(e){var n=ur.get(e.nodeName);if(n)return n;ur.set(e.nodeName,n=[]);for(var t,r=e,i=Element.prototype;i!==r;){t=pr(r);for(var s in t)t[s].set&&n.push(s);r=Et(r)}return n}function Lt(e=!1){const n=U,t=n.l.u;if(!t)return;let r=()=>gt(n.s);if(e){let i=0,s={};const l=mn(()=>{let f=!1;const a=n.s;for(const c in a)a[c]!==s[c]&&(s[c]=a[c],f=!0);return f&&i++,i});r=()=>O(l)}t.b.length&&Rs(()=>{fr(n,r),ft(t.b)}),or(()=>{const i=Bn(()=>t.m.map(Go));return()=>{for(const s of i)typeof s=="function"&&s()}}),t.a.length&&or(()=>{fr(n,r),ft(t.a)})}function fr(e,n){if(e.l.s)for(const t of e.l.s)O(t);n()}let Sn=!1;function mi(e){var n=Sn;try{return Sn=!1,[e(),Sn]}finally{Sn=n}}const gi={get(e,n){if(!e.exclude.includes(n))return O(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=Be({get[n](){return e.props[n]}},n,Er)),e.special[n](t),tr(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),tr(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function jn(e,n){return new Proxy({props:e,exclude:n,special:{},version:Qe(0)},gi)}const pi={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let i=e.props[r];ln(i)&&(i=i());const s=je(i,n);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(ln(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const i=je(r,n);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,n){if(n===qe||n===br)return!1;for(let t of e.props)if(ln(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(ln(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function vi(...e){return new Proxy({props:e},pi)}function dr(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function Be(e,n,t,r){var ee;var i=(t&fs)!==0,s=!vn||(t&ds)!==0,l=(t&_s)!==0,f=(t&ms)!==0,a=!1,c;l?[c,a]=mi(()=>e[n]):c=e[n];var g=qe in e||br in e,_=l&&(((ee=je(e,n))==null?void 0:ee.set)??(g&&n in e&&(S=>e[n]=S)))||void 0,u=r,p=!0,v=!1,N=()=>(v=!0,p&&(p=!1,f?u=Bn(r):u=r),u);c===void 0&&r!==void 0&&(_&&s&&rs(),c=N(),_&&_(c));var F;if(s)F=()=>{var S=e[n];return S===void 0?N():(p=!0,v=!1,S)};else{var z=(i?mn:Nt)(()=>e[n]);z.f|=qo,F=()=>{var S=O(z);return S!==void 0&&(u=void 0),S===void 0?u:S}}if((t&Er)===0)return F;if(_){var H=e.$$legacy;return function(S,$){return arguments.length>0?((!s||!$||H||a)&&_($?F():S),S):F()}}var T=!1,D=St(c),R=mn(()=>{var S=F(),$=O(D);return T?(T=!1,$):D.v=S});return l&&O(R),i||(R.equals=Rt),function(S,$){if(arguments.length>0){const Y=$?O(R):s&&l?Ke(S):S;if(!R.equals(Y)){if(T=!0,fe(D,Y),v&&u!==void 0&&(u=Y),dr(R))return S;Bn(()=>O(R))}return S}return dr(R)?R.v:O(R)}}function hi(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function bi(){const e=U;return e===null&&Dr(),(n,t,r)=>{var s;const i=(s=e.s.$$events)==null?void 0:s[n];if(i){const l=Un(i)?i.slice():[i],f=hi(n,t,r);for(const a of l)a.call(e.x,f);return!f.defaultPrevented}return!0}}function yi(e){U===null&&Dr(),U.l===null&&ts(),wi(U).a.push(e)}function wi(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Ei="5";var gr;typeof window<"u"&&((gr=window.__svelte??(window.__svelte={})).v??(gr.v=new Set)).add(Ei);ls();const Di={__category__:"Distributions",EnzymeForward:2.6711275273233457,EnzymeReverse:3.406591807028488,FiniteDifferences:23.76261730080191,ForwardDiff:1.6405641636869288,Mooncake:7.259211200273177,ReverseDiff:26.89662066223661,ReverseDiffCompiled:2.656085106382979,Zygote:1271.1456},xi={__category__:"Distributions",EnzymeForward:2.594540616744564,EnzymeReverse:3.3410678384743524,FiniteDifferences:22.784980372077143,ForwardDiff:1.3096677911467178,Mooncake:8.317327117327117,ReverseDiff:28.164053075995174,ReverseDiffCompiled:2.9045883306206046,Zygote:"error"},Ri={__category__:"DynamicPPL demo models",EnzymeForward:2.5709410464059803,EnzymeReverse:2.821842142787455,FiniteDifferences:38.875828854610184,ForwardDiff:1.3504214537359105,Mooncake:8.371260746100283,ReverseDiff:30.62566347280623,ReverseDiffCompiled:3.1347252573655244,Zygote:2153.3120108637386},Ti={__category__:"DynamicPPL demo models",EnzymeForward:3.2050150066308367,EnzymeReverse:4.031613229403911,FiniteDifferences:61.402871681730836,ForwardDiff:1.2764252588110832,Mooncake:6.038004427038992,ReverseDiff:24.01027221366204,ReverseDiffCompiled:2.3748991523980036,Zygote:"error"},Mi={__category__:"DynamicPPL demo models",EnzymeForward:3.5895466589234513,EnzymeReverse:7.035563237836048,FiniteDifferences:67.76346766375849,ForwardDiff:1.3604307369795015,Mooncake:8.861765859572799,ReverseDiff:44.72417273448201,ReverseDiffCompiled:2.773300464097078,Zygote:"error"},Ni={__category__:"DynamicPPL demo models",EnzymeForward:3.6274453284138515,EnzymeReverse:7.008913773796192,FiniteDifferences:67.66613745413491,ForwardDiff:1.404143798613248,Mooncake:8.055605755195662,ReverseDiff:46.721976325270205,ReverseDiffCompiled:3.0168338985421115,Zygote:1650.8924297244641},Si={__category__:"DynamicPPL demo models",EnzymeForward:3.6127325827011734,EnzymeReverse:6.598743634092438,FiniteDifferences:67.02602854743913,ForwardDiff:1.362334346504559,Mooncake:8.47793448589627,ReverseDiff:46.18070056658233,ReverseDiffCompiled:2.91888393499209,Zygote:1336.2425461101097},Ai={__category__:"DynamicPPL demo models",EnzymeForward:2.817445213089112,EnzymeReverse:2.950592427433432,FiniteDifferences:37.794594026083296,ForwardDiff:1.3569851861177555,Mooncake:8.388479501816295,ReverseDiff:32.57380829461366,ReverseDiffCompiled:3.4147906781760327,Zygote:2009.3928682170542},Ci={__category__:"DynamicPPL demo models",EnzymeForward:2.9561089230875996,EnzymeReverse:4.475161529498994,FiniteDifferences:58.689452715453974,ForwardDiff:1.1915467130281423,Mooncake:5.956516456047772,ReverseDiff:25.31607887087171,ReverseDiffCompiled:2.1530797101449277,Zygote:"error"},Fi={__category__:"DynamicPPL demo models",EnzymeForward:3.592068065673589,EnzymeReverse:6.2504878827662065,FiniteDifferences:61.03285655058043,ForwardDiff:1.2605811365375252,Mooncake:7.633770157748656,ReverseDiff:36.69985655809398,ReverseDiffCompiled:2.563595258364521,Zygote:"error"},Ii={__category__:"DynamicPPL demo models",EnzymeForward:3.570394070776626,EnzymeReverse:5.142353362067497,FiniteDifferences:62.68103448275862,ForwardDiff:1.2310300429184549,Mooncake:7.165547502919557,ReverseDiff:32.08576850094877,ReverseDiffCompiled:2.6867501885240284,Zygote:"error"},ki={__category__:"DynamicPPL demo models",EnzymeForward:3.629088305040971,EnzymeReverse:4.5765704126431235,FiniteDifferences:64.97281893906181,ForwardDiff:1.234274144851348,Mooncake:7.11063737219926,ReverseDiff:33.60468112518789,ReverseDiffCompiled:2.8236058004472975,Zygote:"error"},Oi={__category__:"Distributions",EnzymeForward:4.428243641902705,EnzymeReverse:13.785219399538107,FiniteDifferences:150.95911822944962,ForwardDiff:2.6382686761559215,Mooncake:6.352793218454697,ReverseDiff:53.496681621000334,ReverseDiffCompiled:6.454756285274501,Zygote:"error"},Li={__category__:"DynamicPPL demo models",EnzymeForward:3.5746686788787123,EnzymeReverse:7.046024805924869,FiniteDifferences:61.78673930847844,ForwardDiff:1.2885593250008753,Mooncake:7.090356957199792,ReverseDiff:38.276109613001964,ReverseDiffCompiled:2.5965487784042374,Zygote:"error"},Pi={__category__:"DynamicPPL demo models",EnzymeForward:3.125061950192046,EnzymeReverse:5.330557868442964,FiniteDifferences:58.803101653507056,ForwardDiff:1.2393763039420227,Mooncake:5.760260563129606,ReverseDiff:29.004099642149882,ReverseDiffCompiled:1.9080692678426387,Zygote:"error"},zi={__category__:"Core Turing syntax",EnzymeForward:3.0536608207049207,EnzymeReverse:1.8554406246830952,FiniteDifferences:78.42152067585594,ForwardDiff:1.3843679125578234,Mooncake:5.323241167828658,ReverseDiff:23.1628868821948,ReverseDiffCompiled:2.1307618327952187,Zygote:"error"},Vi={__category__:"Core Turing syntax",EnzymeForward:2.8969240800346983,EnzymeReverse:2.560400948590687,FiniteDifferences:28.952432986170397,ForwardDiff:1.6158214526656751,Mooncake:9.183309941093297,ReverseDiff:49.094631099105186,ReverseDiffCompiled:5.601107205754498,Zygote:"error"},Bi={__category__:"DynamicPPL arXiV paper",EnzymeForward:3.138270440251572,EnzymeReverse:6.164796736121231,FiniteDifferences:28.841487279843445,ForwardDiff:4.215427266797129,Mooncake:49.1597368052639,ReverseDiff:11.752121111295958,ReverseDiffCompiled:4.927329912266181,Zygote:219.72801996183765},ji={__category__:"DynamicPPL arXiV paper",EnzymeForward:2.8461830611469807,EnzymeReverse:"wrong",FiniteDifferences:"wrong",ForwardDiff:2.8599913136178783,Mooncake:3.904347527000069,ReverseDiff:24.296458078032966,ReverseDiffCompiled:2.0688566013897662,Zygote:"error"},Ui={__category__:"DynamicPPL arXiV paper",EnzymeForward:32642.542765273316,EnzymeReverse:5.849988447319779,FiniteDifferences:141645.11007805896,ForwardDiff:23574.584206807205,Mooncake:46.586006080589215,ReverseDiff:5.617510195545331,ReverseDiffCompiled:2.42614789361184,Zygote:36.11840622759398},$i={__category__:"DynamicPPL arXiV paper",EnzymeForward:35.28586596602361,EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"NaN",Mooncake:"NaN",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Hi={__category__:"DynamicPPL arXiV paper",EnzymeForward:269.60329901058446,EnzymeReverse:"error",FiniteDifferences:7117.069473808714,ForwardDiff:160.51086741516136,Mooncake:8.43022081201839,ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Zi={__category__:"DynamicPPL arXiV paper",EnzymeForward:"wrong",EnzymeReverse:"wrong",FiniteDifferences:"wrong",ForwardDiff:33.72761688710133,Mooncake:"wrong",ReverseDiff:45.904648496180045,ReverseDiffCompiled:5.382664642833608,Zygote:"error"},Gi={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:5.266129045179753,FiniteDifferences:34.586664398707256,ForwardDiff:1.2077026919717304,Mooncake:10.49533253547615,ReverseDiff:11.363612117896464,ReverseDiffCompiled:1.7923501278240552,Zygote:543.8058422311894},Ki={__category__:"DynamicPPL arXiV paper",EnzymeForward:786.1006451714177,EnzymeReverse:9.87211433046202,FiniteDifferences:6077.382322351473,ForwardDiff:527.4114271732782,Mooncake:26.68730694864533,ReverseDiff:23.285983098402244,ReverseDiffCompiled:4.3764354066985645,Zygote:74.87827459062585},qi={__category__:"DynamicPPL arXiV paper",EnzymeForward:"wrong",EnzymeReverse:2.362431502485026,FiniteDifferences:"wrong",ForwardDiff:74.46999364384337,Mooncake:"wrong",ReverseDiff:"wrong",ReverseDiffCompiled:"wrong",Zygote:"error"},Wi={__category__:"Core Turing syntax",EnzymeForward:2.4129500700811106,EnzymeReverse:2.4590898307441855,FiniteDifferences:37.03599363189589,ForwardDiff:1.2972377184143915,Mooncake:8.14645263575109,ReverseDiff:30.964434649940667,ReverseDiffCompiled:2.813510670932118,Zygote:287.56402116402114},Xi={__category__:"Core Turing syntax",EnzymeForward:3.018717366425864,EnzymeReverse:9.548664738901174,FiniteDifferences:58.47475567159439,ForwardDiff:1.2314843714745567,Mooncake:12.348711376904458,ReverseDiff:26.272425249169434,ReverseDiffCompiled:2.346009571432754,Zygote:"error"},Ji={__category__:"Base Julia features",EnzymeForward:3.000801353396848,EnzymeReverse:10.832637419207227,FiniteDifferences:16.146961059218956,ForwardDiff:1.0777581065970927,Mooncake:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Yi={__category__:"Effect of model size",EnzymeForward:4.751282762446262,EnzymeReverse:2.0225388691959427,FiniteDifferences:139.8601756954612,ForwardDiff:1.694269287833828,Mooncake:4.691050181065701,ReverseDiff:24.329079211053685,ReverseDiffCompiled:2.2413456850316917,Zygote:"error"},Qi={__category__:"Effect of model size",EnzymeForward:19.484401299565505,EnzymeReverse:2.1891997805470647,FiniteDifferences:628.8193653700681,ForwardDiff:8.616889679427578,Mooncake:3.930147642482934,ReverseDiff:25.949973986472962,ReverseDiffCompiled:2.3955197203797116,Zygote:"error"},ea={__category__:"Effect of model size",EnzymeForward:40.24672733077906,EnzymeReverse:2.3514534536922893,FiniteDifferences:1237.028313204831,ForwardDiff:13.573243495555467,Mooncake:3.942794547224927,ReverseDiff:26.66939042327178,ReverseDiffCompiled:2.2832793718134794,Zygote:"error"},na={__category__:"Effect of model size",EnzymeForward:206.52020957548086,EnzymeReverse:2.5410562180579217,FiniteDifferences:6365.003262604994,ForwardDiff:65.55496265462168,Mooncake:3.6016666909059185,ReverseDiff:23.804612040036186,ReverseDiffCompiled:2.2536528775129594,Zygote:"error"},ta={__category__:"Distributions",EnzymeForward:2.467991138494305,EnzymeReverse:2.390992696781174,FiniteDifferences:23.473097112860895,ForwardDiff:1.7104804651250876,Mooncake:6.786981756600723,ReverseDiff:30.931272478164068,ReverseDiffCompiled:3.418592102035811,Zygote:"error"},ra={__category__:"Distributions",EnzymeForward:2.9065627187935927,EnzymeReverse:3.052443664541237,FiniteDifferences:29.515245280394954,ForwardDiff:1.4917052602474596,Mooncake:8.578851085655668,ReverseDiff:18.725475845569118,ReverseDiffCompiled:2.1481203655802723,Zygote:1539.0536680072114},oa={__category__:"Distributions",EnzymeForward:1.977663563201179,EnzymeReverse:8.047419563310713,FiniteDifferences:19.213890042930345,ForwardDiff:1.2836051691763928,Mooncake:8.095655986262834,ReverseDiff:11.309389140271495,ReverseDiffCompiled:3.171040492055356,Zygote:"error"},sa={__category__:"Core Turing syntax",EnzymeForward:2.9033362910381544,EnzymeReverse:2.378562520911275,FiniteDifferences:29.3521683494601,ForwardDiff:1.5965956779359818,Mooncake:9.294314438649465,ReverseDiff:56.11644295302013,ReverseDiffCompiled:5.57720474471377,Zygote:"error"},ia={__category__:"Core Turing syntax",EnzymeForward:3.3521247053659184,EnzymeReverse:3.307424236524589,FiniteDifferences:28.929679438673727,ForwardDiff:1.5105656784207138,Mooncake:8.78562874251497,ReverseDiff:29.568029049147103,ReverseDiffCompiled:3.230508244554523,Zygote:1977.0522006141248},aa={__category__:"Core Turing syntax",EnzymeForward:2.9750006802800417,EnzymeReverse:3.5575226489582623,FiniteDifferences:51.45872763694136,ForwardDiff:1.2846239245073552,Mooncake:6.143047244642361,ReverseDiff:26.937128162855707,ReverseDiffCompiled:2.5431531029357117,Zygote:"error"},la={__category__:"Core Turing syntax",EnzymeForward:2.4158611756796153,EnzymeReverse:2.280595309354084,FiniteDifferences:25.866595413913718,ForwardDiff:1.461584586532415,Mooncake:8.443846812998483,ReverseDiff:24.554208639235103,ReverseDiffCompiled:2.5624596823404295,Zygote:2902.6147289824958},ca={__category__:"Distributions",EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"NaN",ForwardDiff:"NaN",Mooncake:"error",ReverseDiff:"NaN",ReverseDiffCompiled:"NaN",Zygote:"NaN"},ua={__category__:"PosteriorDB",EnzymeForward:4.196821679899503,EnzymeReverse:2.233699191323601,FiniteDifferences:137.29082883766552,ForwardDiff:1.6820495225024303,Mooncake:5.589651065022421,ReverseDiff:30.740608619685503,ReverseDiffCompiled:3.015534604671095,Zygote:"error"},fa={__category__:"PosteriorDB",EnzymeForward:4.16812015503876,EnzymeReverse:2.3326881869081357,FiniteDifferences:142.05230220606234,ForwardDiff:1.7285411484427007,Mooncake:5.599901592099251,ReverseDiff:33.23266575084954,ReverseDiffCompiled:2.847551459944215,Zygote:"error"},da={__category__:"Distributions",EnzymeForward:2.0901647759355266,EnzymeReverse:2.2292304495393775,FiniteDifferences:35.03996720639475,ForwardDiff:1.2668385547275103,Mooncake:6.764685815651226,ReverseDiff:12.109286569280295,ReverseDiffCompiled:1.3432742837458498,Zygote:1611.008219748205},_a={__category__:"Distributions",EnzymeForward:7.584793491864831,EnzymeReverse:12.336139189236784,FiniteDifferences:43.91315597425861,ForwardDiff:1.1141020549254963,Mooncake:12.422769835658487,ReverseDiff:15.138659390562689,ReverseDiffCompiled:3.8202310709112113,Zygote:308.48618823612634},ma={__category__:"Core Turing syntax",EnzymeForward:2.7552300395386884,EnzymeReverse:2.8102852046824136,FiniteDifferences:37.92589067174327,ForwardDiff:1.375554882500039,Mooncake:8.530381880818004,ReverseDiff:29.953543847605975,ReverseDiffCompiled:3.2116736741688157,Zygote:"error"},ga={__category__:"Base Julia features",EnzymeForward:2.674310501480114,EnzymeReverse:3.387431483991019,FiniteDifferences:42.23217644041717,ForwardDiff:1.5631661436306576,Mooncake:9.545314847698402,ReverseDiff:18.64002205071665,ReverseDiffCompiled:"wrong",Zygote:1295.2601679852228},pa={__category__:"DynamicPPL demo models",EnzymeForward:2.784707738595241,EnzymeReverse:3.015475843630568,FiniteDifferences:39.622665223614845,ForwardDiff:1.4303015075376886,Mooncake:8.784565477206762,ReverseDiff:32.850589370648656,ReverseDiffCompiled:3.246268328767926,Zygote:"error"},va={assume_beta:Di,assume_dirichlet:xi,demo_assume_dot_observe_literal:Ri,demo_assume_index_observe:Ti,demo_assume_matrix_observe_matrix_index:Mi,demo_assume_multivariate_observe:Ni,demo_assume_multivariate_observe_literal:Si,demo_assume_observe_literal:Ai,demo_assume_submodel_observe_index_literal:Ci,demo_dot_assume_observe:Fi,demo_dot_assume_observe_index:Ii,demo_dot_assume_observe_index_literal:ki,assume_lkjcholu:Oi,demo_dot_assume_observe_matrix_index:Li,demo_dot_assume_observe_submodel:Pi,dot_assume:zi,dot_observe:Vi,dppl_gauss_unknown:Bi,dppl_hier_poisson:ji,dppl_high_dim_gauss:Ui,dppl_hmm_semisup:$i,dppl_lda:Hi,dppl_logistic_regression:Zi,assume_mvnormal:Gi,dppl_naive_bayes:Ki,dppl_sto_volatility:qi,dynamic_constraint:Wi,multiple_constraints_same_var:Xi,multithreaded:Ji,n010:Yi,n050:Qi,n100:ea,n500:na,observe_bernoulli:ta,assume_normal:ra,observe_categorical:oa,observe_index:sa,observe_literal:ia,observe_multivariate:aa,observe_submodel:la,observe_von_mises:ca,pdb_eight_schools_centered:ua,pdb_eight_schools_noncentered:fa,assume_submodel:da,assume_wishart:_a,broadcast_macro:ma,control_flow:ga,demo_assume_dot_observe:pa},ha=`@model function assume_beta()
    a ~ Beta(2, 2)
end

model = assume_beta()`,ba=`@model function assume_dirichlet()
    a ~ Dirichlet([1.0, 5.0])
end

model = assume_dirichlet()`,ya=`@model function demo_assume_dot_observe_literal()
    # \`assume\` and literal \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    [1.5, 2.0] .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe_literal()`,wa=`using LinearAlgebra: Diagonal

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

model = demo_assume_index_observe()`,Ea=`using LinearAlgebra: Diagonal

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

model = demo_assume_matrix_observe_matrix_index()`,Da=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe(x = [1.5, 2.0])
    # Multivariate \`assume\` and \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zero(x), Diagonal(s))
    x ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe()`,xa=`using LinearAlgebra: Diagonal

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

model = demo_assume_observe_literal()`,Ta=`@model function _prior_dot_assume(::Type{TV} = Vector{Float64}) where {TV}
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

model = demo_assume_submodel_observe_index_literal()`,Ma=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe()`,Na=`@model function demo_dot_assume_observe_index(
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

model = demo_dot_assume_observe_index()`,Sa=`@model function demo_dot_assume_observe_index_literal(
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

model = demo_dot_assume_observe_index_literal()`,Aa=`@model function assume_lkjcholu()
    a ~ LKJCholesky(5, 1.0, 'U')
end

model = assume_lkjcholu()`,Ca=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe_matrix_index()`,Fa=`using LinearAlgebra: Diagonal

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

model = demo_dot_assume_observe_submodel()`,Ia=`@model function dot_assume(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 5)
    a .~ Normal()
end

model = dot_assume()`,ka=`@model function dot_observe(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    x .~ Normal(a)
end

model = dot_observe()`,Oa=`n = 10_000
s = abs(rand()) + 0.5
y = randn() .+ s * randn(n)

@model function dppl_gauss_unknown(y)
    N = length(y)
    m ~ Normal(0, 1)
    s ~ truncated(Cauchy(0, 5); lower=0)
    y ~ filldist(Normal(m, s), N)
end

model = dppl_gauss_unknown(y)`,La=`using LazyArrays
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

model = dppl_hier_poisson(y, x, idx, ns)`,Pa=`@model function dppl_high_dim_gauss(D)
    m ~ filldist(Normal(0, 1), D)
end

model = dppl_high_dim_gauss(10_000)`,za=`using StatsFuns: logsumexp

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

model = dppl_hmm_semisup(K, T, T_unsup, w, z, u, alpha, beta)`,Va=`v = 100      # words
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

model = dppl_lda(k, m, w, doc, alpha, beta)`,Ba=`using StatsFuns: logistic
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

model = dppl_logistic_regression(X', y)`,ja=`@model function assume_mvnormal()
    a ~ MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0])
end

model = assume_mvnormal()`,Ua=`using MLDatasets: MNIST
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

model = dppl_sto_volatility(y)`,Ha=`@model function dynamic_constraint()
    a ~ Normal()
    b ~ truncated(Normal(); lower = a)
end

model = dynamic_constraint()`,Za=`@model function multiple_constraints_same_var(::Type{TV} = Vector{Float64}) where {TV}
    x = TV(undef, 5)
    x[1] ~ Normal()
    x[2] ~ InverseGamma(2, 3)
    x[3] ~ truncated(Normal(), -5, 20)
    x[4:5] ~ Dirichlet([1.0, 2.0])
end

model = multiple_constraints_same_var()`,Ga=`#=
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

model = multithreaded([1.5, 2.0, 2.5, 1.5, 2.0, 2.5])`,Ka=`@model function n010(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 10)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n010()`,qa=`@model function n050(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 50)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n050()`,Wa=`@model function n100(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 100)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n100()`,Xa=`@model function n500(::Type{TV} = Vector{Float64}) where {TV}
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

model = observe_bernoulli()`,Ya=`@model function assume_normal()
    a ~ Normal()
end

model = assume_normal()`,Qa=`@model function observe_categorical(x = [1, 2, 1, 2, 2])
    a ~ Dirichlet(2, 3)
    for i in eachindex(x)
        x[i] ~ Categorical(a)
    end
end

model = observe_categorical()`,el=`@model function observe_index(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end

model = observe_index()`,nl=`@model function observe_literal()
    a ~ Normal()
    1.5 ~ Normal(a)
end

model = observe_literal()`,tl=`@model function observe_multivariate(
    x = [1.5, 2.0, 2.5],
    ::Type{TV} = Vector{Float64},
) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    x ~ MvNormal(a, I)
end

model = observe_multivariate()`,rl=`@model function inner2(x, a)
    x ~ Normal(a)
end
@model function observe_submodel(x = 1.5)
    a ~ Normal()
    _ignore ~ to_submodel(inner2(x, a))
end

model = observe_submodel()`,ol=`@model function observe_von_mises(x)
    a ~ InverseGamma(2, 3)
    x ~ VonMises(0, a)
end

model = observe_von_mises(0.4)`,sl=`J = 8
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

model = pdb_eight_schools_centered(J, y, sigma)`,il=`J = 8
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

model = pdb_eight_schools_noncentered(J, y, sigma)`,al=`@model function inner1()
    return a ~ Normal()
end
@model function assume_submodel()
    a ~ to_submodel(inner1())
    x ~ Normal(a)
end

model = assume_submodel()`,ll=`@model function assume_wishart()
    a ~ Wishart(7, [1.0 0.5; 0.5 1.0])
end

model = assume_wishart()`,cl=`@model function broadcast_macro(
    x = [1.5, 2.0],
    ::Type{TV} = Vector{Float64},
) where {TV}
    a ~ Normal(0, 1)
    b ~ InverseGamma(2, 3)
    @. x ~ Normal(a, $(sqrt(b)))
end

model = broadcast_macro()`,ul=`#= 
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

model = control_flow()`,fl=`@model function demo_assume_dot_observe(x = [1.5, 2.0])
    # \`assume\` and \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    x .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe()`,dl={assume_beta:ha,assume_dirichlet:ba,demo_assume_dot_observe_literal:ya,demo_assume_index_observe:wa,demo_assume_matrix_observe_matrix_index:Ea,demo_assume_multivariate_observe:Da,demo_assume_multivariate_observe_literal:xa,demo_assume_observe_literal:Ra,demo_assume_submodel_observe_index_literal:Ta,demo_dot_assume_observe:Ma,demo_dot_assume_observe_index:Na,demo_dot_assume_observe_index_literal:Sa,assume_lkjcholu:Aa,demo_dot_assume_observe_matrix_index:Ca,demo_dot_assume_observe_submodel:Fa,dot_assume:Ia,dot_observe:ka,dppl_gauss_unknown:Oa,dppl_hier_poisson:La,dppl_high_dim_gauss:Pa,dppl_hmm_semisup:za,dppl_lda:Va,dppl_logistic_regression:Ba,assume_mvnormal:ja,dppl_naive_bayes:Ua,dppl_sto_volatility:$a,dynamic_constraint:Ha,multiple_constraints_same_var:Za,multithreaded:Ga,n010:Ka,n050:qa,n100:Wa,n500:Xa,observe_bernoulli:Ja,assume_normal:Ya,observe_categorical:Qa,observe_index:el,observe_literal:nl,observe_multivariate:tl,observe_submodel:rl,observe_von_mises:ol,pdb_eight_schools_centered:sl,pdb_eight_schools_noncentered:il,assume_submodel:al,assume_wishart:ll,broadcast_macro:cl,control_flow:ul,demo_assume_dot_observe:fl},_l="1.15.0",ml="1.5.0",gl="5.6.3",pl="0.12.0",vl="0.4.5",hl="0.1.42",bl="4.3.0",yl="0.8.0",wl="0.8.8",El="0.6.2",Dl="0.4.1",xl="1.1.3",Rl="2.5.0",Tl="1.1.2",Ml="0.4.0",Nl="0.5.4",Sl="3.5.1+1",Al="7.19.0",Cl="1.11.1",Fl="1.11.0",Il="1.1.1",kl="0.5.1",Ol="1.1.0",Ll="0.4.7",Pl="0.5.1",zl="0.4.4",Vl="1.11.0",Bl="0.1.1",jl="0.15.8",Ul="0.1.9",$l="1.2.2",Hl="0.5.0",Zl="0.10.15",Gl="1.72.5",Kl="1.25.2",ql="1.3.1",Wl="0.1.10",Xl="0.10.42",Jl="0.10.4+0",Yl="0.7.8",Ql="3.30.0",ec="0.12.1",nc="0.11.0",tc="0.13.1",rc="1.0.3",oc="0.2.4",sc="0.3.1",ic="4.17.0",ac="1.1.1+0",lc="0.1.2",cc="2.5.0",uc="0.1.2",fc="1.6.0",dc="0.1.3",_c="4.1.1",mc="1.16.0",gc="0.7.13",pc="1.7.0",vc="0.18.22",hc="1.0.0",bc="1.11.0",yc="0.1.2",wc="1.9.1",Ec="0.4.0",Dc="1.1.0",xc="1.15.1",Rc="0.7.3",Tc="0.4.26",Mc="1.11.0",Nc="0.25.120",Sc="0.6.58",Ac="0.9.5",Cc="1.6.0",Fc="0.36.15",Ic="2.0.0",kc="1.0.5",Oc="0.13.61",Lc="0.8.12",Pc="0.0.186+0",zc="0.1.11",Vc="0.1.10",Bc="0.10.14",jc="1.9.0",Uc="3.3.11+0",$c="0.2.2",Hc="0.1.1",Zc="0.3.2",Gc="1.17.0",Kc="0.9.24",qc="1.11.0",Wc="1.13.0",Xc="2.27.0",Jc="0.12.32",Yc="0.8.5",Qc="1.0.1",eu="1.1.3",nu="0.1.3",tu="0.5.2",ru="1.11.0",ou="0.2.0",su="1.6.1",iu="0.6.2",au="1.3.1",lu="1.13.0",cu="0.17.2",uu="1.14.6+0",fu="1.10.17",du="0.2.0",_u="2.12.1+0",mu="0.3.28",gu="0.4.15",pu="0.1.7",vu="0.10.5",hu="0.3.8",bu="0.1.5",yu="0.3.1",wu="1.4.4",Eu="2025.2.0+0",Du="1.11.0",xu="0.7.0",Ru="0.16.1",Tu="0.7.11",Mu="0.1.17",Nu="1.3.1",Su="0.2.4",Au="1.10.0",Cu="1.0.0",Fu="0.5.15",Iu="1.7.0",ku="1.14.3",Ou="0.2.1",Lu="0.2.4",Pu="0.9.37",zu="0.6.10",Vu="0.4.1",Bu="9.4.2",ju="0.0.37+2",Uu="1.6.2",$u="3.0.1+0",Hu="1.4.0",Zu="2.6.1",Gu="1.11.0",Ku="0.3.1",qu="0.2.0",Wu="0.6.4",Xu="8.6.0+0",Ju="1.11.0",Yu="1.7.2+0",Qu="1.11.0+1",ef="0.9.1+6",nf="1.11.0",tf="1.18.0+0",rf="0.8.8",of="7.4.0",sf="1.11.0",af="2.1.2",lf="1.13.1",cf="0.3.29",uf="1.11.0",ff="1.1.0",df="0.10.7",_f="7.1.0",mf="0.3.14",gf="2025.2.0+0",pf="1.0.0",vf="0.7.18",hf="1.11.1",bf="0.4.17",yf="0.4.8",wf="4.3.1+0",Ef="0.1.11",Df="5.5.4+0",xf="0.5.16",Rf="0.4.2",Tf="1.11.0",Mf="1.1.9",Nf="2.28.6+0",Sf="0.2.0",Af="10.1.4+3",Cf="1.2.0",Ff="2.0.0",If="1.11.0",kf="0.4.140",Of="0.3.4",Lf="0.3.7",Pf="2023.12.12",zf="0.10.3",Vf="7.10.0",Bf="0.9.30",jf="0.4.3",Uf="1.1.3",$f="0.1.5",Hf="0.10.4",Zf="1.0.0",Gf="1.2.0",Kf="0.4.4",qf="1.17.0",Wf="0.3.27+1",Xf="0.8.5+0",Jf="5.0.8+0",Yf="1.5.0",Qf="3.5.1+0",ed="0.5.6+0",nd="1.13.2",td="0.4.6",rd="4.4.0",od="2.9.0",sd="0.4.3",id="1.8.1",ad="0.11.35",ld="1.0.2",cd="0.5.12",ud="0.12.3",fd="2.8.3",dd="1.2.1",_d="0.3.6",md="1.11.0",gd="1.4.3",pd="0.2.4",vd="1.2.1",hd="1.4.3",bd="0.2.0",yd="2.4.0",wd="1.11.0",Ed="0.1.5",Dd="1.10.4",xd="1.3.0",Rd="2.11.2",Td="1.11.0",Md="1.11.0",Nd="1.7.1",Sd="1.6.0",Ad="0.3.2",Cd="0.4.5",Fd="0.1.0",Id="1.3.4",kd="3.34.1",Od="1.2.2",Ld="1.3.1",Pd="1.16.1",zd="1.4.2",Vd="0.8.0",Bd="0.5.1+0",jd="2.2.8",Ud="0.5.15",$d="0.7.0",Hd="0.5.0",Zd="2.104.0",Gd="1.3.1",Kd="1.7.0",qd="3.0.0",Wd="1.4.0",Xd="1.3.0",Jd="1.4.8",Yd="1.11.0",Qd="1.1.2",e_="1.11.0",n_="0.1.0",t_="1.2.0",r_="0.9.4",o_="1.11.0",s_="1.2.1",i_="1.11.0",a_="1.0.0",l_="0.1.2",c_="0.4.21",u_="2.5.1",f_="0.1.15",d_="0.1.2",__="1.9.14",m_="1.4.3",g_="3.5.0",p_="1.11.1",v_="1.7.1",h_="0.34.5",b_="1.5.0",y_="0.4.1",w_="0.3.7",E_="0.4.1",D_="0.7.1",x_="0.3.1",R_="1.11.0",T_="1.11.0",M_=null,N_="7.7.0+0",S_="0.3.42",A_="1.0.3",C_="1.0.1",F_="1.12.1",I_="1.10.0",k_="0.1.1",O_="0.1.7",L_="1.11.0",P_="0.1.5",z_="0.11.3",V_="0.4.84",B_="0.39.6",j_="1.6.1",U_="1.11.0",$_="1.0.2",H_="1.11.0",Z_="1.23.1",G_="1.0.0",K_="0.3.0",q_="1.4.2",W_="1.0.0",X_="1.6.1",J_="0.10.1",Y_="1.2.13+1",Q_="0.7.10",e1="0.2.7",n1="1.1.3+0",t1="5.11.0+0",r1="1.59.0+0",o1="2022.0.0+0",s1="17.4.0+2",i1={ADTypes:_l,AbstractFFTs:ml,AbstractMCMC:gl,AbstractPPL:pl,AbstractTrees:vl,Accessors:hl,Adapt:bl,AdvancedHMC:yl,AdvancedMH:wl,AdvancedPS:El,AdvancedVI:Dl,AliasTables:xl,ArgCheck:Rl,ArgTools:Tl,ArnoldiMethod:Ml,Arpack:Nl,Arpack_jll:Sl,ArrayInterface:Al,ArrayLayouts:Cl,Artifacts:Fl,Atomix:Il,AtomsBase:kl,AxisAlgorithms:Ol,AxisArrays:Ll,BFloat16s:Pl,BangBang:zl,Base64:Vl,Baselet:Bl,Bijectors:jl,BitFlags:Ul,BufferedStreams:$l,CEnum:Hl,CSV:Zl,ChainRules:Gl,ChainRulesCore:Kl,Chairmarks:ql,ChangesOfVariables:Wl,Chemfiles:Xl,Chemfiles_jll:Jl,CodecZlib:Yl,ColorSchemes:Ql,ColorTypes:ec,ColorVectorSpace:nc,Colors:tc,Combinatorics:rc,CommonSolve:oc,CommonSubexpressions:sc,Compat:ic,CompilerSupportLibraries_jll:ac,CompositionsBase:lc,ConcurrentUtilities:cc,ConsoleProgressMonitor:uc,ConstructionBase:fc,ContextVariablesX:dc,Crayons:_c,DataAPI:mc,DataDeps:gc,DataFrames:pc,DataStructures:vc,DataValueInterfaces:hc,Dates:bc,DefineSingletons:yc,DelimitedFiles:wc,DensityInterface:Ec,DiffResults:Dc,DiffRules:xc,DifferentiationInterface:Rc,DispatchDoctor:Tc,Distributed:Mc,Distributions:Nc,DistributionsAD:Sc,DocStringExtensions:Ac,Downloads:Cc,DynamicPPL:Fc,EllipticalSliceSampling:Ic,EnumX:kc,Enzyme:Oc,EnzymeCore:Lc,Enzyme_jll:Pc,ExceptionUnwrapping:zc,ExprTools:Vc,ExproniconLite:Bc,FFTW:jc,FFTW_jll:Uc,FLoops:$c,FLoopsBase:Hc,FastClosures:Zc,FileIO:Gc,FilePathsBase:Kc,FileWatching:qc,FillArrays:Wc,FiniteDiff:Xc,FiniteDifferences:Jc,FixedPointNumbers:Yc,ForwardDiff:Qc,FunctionWrappers:eu,FunctionWrappersWrappers:nu,Functors:tu,Future:ru,GPUArraysCore:ou,GPUCompiler:su,GZip:iu,Glob:au,Graphs:lu,HDF5:cu,HDF5_jll:uu,HTTP:fu,HashArrayMappedTries:du,Hwloc_jll:_u,HypergeometricFunctions:mu,IRTools:gu,ImageBase:pu,ImageCore:vu,ImageShow:hu,Inflate:bu,InitialValues:yu,InlineStrings:wu,IntelOpenMP_jll:Eu,InteractiveUtils:Du,InternedStrings:xu,Interpolations:Ru,IntervalSets:Tu,InverseFunctions:Mu,InvertedIndices:Nu,IrrationalConstants:Su,IterTools:Au,IteratorInterfaceExtensions:Cu,JLD2:Fu,JLLWrappers:Iu,JSON:"0.21.4",JSON3:ku,Jieko:Ou,JuliaVariables:Lu,KernelAbstractions:Pu,KernelDensity:zu,LBFGSB:Vu,LLVM:Bu,LLVMExtra_jll:ju,LRUCache:Uu,L_BFGS_B_jll:$u,LaTeXStrings:Hu,LazyArrays:Zu,LazyArtifacts:Gu,LazyModules:Ku,LeftChildRightSiblingTrees:qu,LibCURL:Wu,LibCURL_jll:Xu,LibGit2:Ju,LibGit2_jll:Yu,LibSSH2_jll:Qu,LibTracyClient_jll:ef,Libdl:nf,Libiconv_jll:tf,Libtask:rf,LineSearches:of,LinearAlgebra:sf,LogDensityProblems:af,LogDensityProblemsAD:lf,LogExpFunctions:cf,Logging:uf,LoggingExtras:ff,MAT:df,MCMCChains:_f,MCMCDiagnosticTools:mf,MKL_jll:gf,MLCore:pf,MLDatasets:vf,MLJModelInterface:hf,MLStyle:bf,MLUtils:yf,MPICH_jll:wf,MPIPreferences:Ef,MPItrampoline_jll:Df,MacroTools:xf,MappedArrays:Rf,Markdown:Tf,MbedTLS:Mf,MbedTLS_jll:Nf,MicroCollections:Sf,MicrosoftMPI_jll:Af,Missings:Cf,MistyClosures:Ff,Mmap:If,Mooncake:kf,MosaicViews:Of,Moshi:Lf,MozillaCACerts_jll:Pf,MultivariateStats:zf,NLSolversBase:Vf,NNlib:Bf,NPZ:jf,NaNMath:Uf,NameResolution:$f,NamedArrays:Hf,NaturalSort:Zf,NetworkOptions:Gf,ObjectFile:Kf,OffsetArrays:qf,OpenBLAS_jll:Wf,OpenLibm_jll:Xf,OpenMPI_jll:Jf,OpenSSL:Yf,OpenSSL_jll:Qf,OpenSpecFun_jll:ed,Optim:nd,Optimisers:td,Optimization:rd,OptimizationBase:od,OptimizationOptimJL:sd,OrderedCollections:id,PDMats:ad,PackageExtensionCompat:ld,PaddedViews:cd,Parameters:ud,Parsers:fd,PeriodicTable:dd,Pickle:_d,Pkg:md,PooledArrays:gd,PositiveFactorizations:pd,PrecompileTools:vd,Preferences:hd,PrettyPrint:bd,PrettyTables:yd,Printf:wd,ProgressLogging:Ed,ProgressMeter:Dd,PtrArrays:xd,QuadGK:Rd,REPL:Td,Random:Md,Random123:Nd,RandomNumbers:Sd,RangeArrays:Ad,Ratios:Cd,RealDot:Fd,RecipesBase:Id,RecursiveArrayTools:kd,Reexport:Od,Requires:Ld,ReverseDiff:Pd,Richardson:zd,Rmath:Vd,Rmath_jll:Bd,Roots:jd,RuntimeGeneratedFunctions:Ud,SHA:$d,SSMProblems:Hd,SciMLBase:Zd,SciMLOperators:Gd,SciMLStructures:Kd,ScientificTypesBase:qd,ScopedValues:Wd,Scratch:Xd,SentinelArrays:Jd,Serialization:Yd,Setfield:Qd,SharedArrays:e_,ShowCases:n_,SimpleBufferStream:t_,SimpleTraits:r_,Sockets:o_,SortingAlgorithms:s_,SparseArrays:i_,SparseConnectivityTracer:a_,SparseInverseSubset:l_,SparseMatrixColorings:c_,SpecialFunctions:u_,SplittablesBase:f_,StackViews:d_,StaticArrays:__,StaticArraysCore:m_,StatisticalTraits:g_,Statistics:p_,StatsAPI:v_,StatsBase:h_,StatsFuns:b_,StridedViews:y_,StringEncodings:w_,StringManipulation:E_,StructArrays:D_,StructIO:x_,StructTypes:R_,StyledStrings:T_,SuiteSparse:M_,SuiteSparse_jll:N_,SymbolicIndexingInterface:S_,TOML:A_,TableTraits:C_,Tables:F_,Tar:I_,TensorCore:k_,TerminalLoggers:O_,Test:L_,Tracy:P_,TranscodingStreams:z_,Transducers:V_,Turing:B_,URIs:j_,UUIDs:U_,UnPack:$_,Unicode:H_,Unitful:Z_,UnitfulAtomic:G_,UnsafeAtomics:K_,WeakRefStrings:q_,WoodburyMatrices:W_,WorkerUtilities:X_,ZipFile:J_,Zlib_jll:Y_,Zygote:Q_,ZygoteRules:e1,libaec_jll:n1,libblastrampoline_jll:t1,nghttp2_jll:r1,oneTBB_jll:o1,p7zip_jll:s1};function yt(e){return[...e.entries()].sort(([n,t],[r,i])=>n.localeCompare(r))}var a1=ge('<tr><td class="svelte-7y9k9c"> </td><td class="version svelte-7y9k9c"> </td></tr>'),l1=ge('<table id="manifest" class="svelte-7y9k9c"><thead><tr><th class="svelte-7y9k9c">Package</th><th class="svelte-7y9k9c">Version</th></tr></thead><tbody></tbody></table>');function c1(e,n){hn(n,!1);let t=new Map;for(const[s,l]of Object.entries(i1))t.set(s,l===""?null:l);Lt();var r=l1(),i=we(W(r));_n(i,5,()=>yt(t),dn,(s,l)=>{let f=()=>O(l)[0],a=()=>O(l)[1];var c=a1(),g=W(c),_=W(g),u=we(g),p=W(u);Ee(()=>{Ve(_,f()),Ve(p,a()===null?"":`v${a()}`)}),re(s,c)}),re(e,r),bn()}function u1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ut,_r;function f1(){if(_r)return ut;_r=1;function e(o){return o instanceof Map?o.clear=o.delete=o.set=function(){throw new Error("map is read-only")}:o instanceof Set&&(o.add=o.clear=o.delete=function(){throw new Error("set is read-only")}),Object.freeze(o),Object.getOwnPropertyNames(o).forEach(d=>{const h=o[d],A=typeof h;(A==="object"||A==="function")&&!Object.isFrozen(h)&&e(h)}),o}class n{constructor(d){d.data===void 0&&(d.data={}),this.data=d.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(o,...d){const h=Object.create(null);for(const A in o)h[A]=o[A];return d.forEach(function(A){for(const Z in A)h[Z]=A[Z]}),h}const i="</span>",s=o=>!!o.scope,l=(o,{prefix:d})=>{if(o.startsWith("language:"))return o.replace("language:","language-");if(o.includes(".")){const h=o.split(".");return[`${d}${h.shift()}`,...h.map((A,Z)=>`${A}${"_".repeat(Z+1)}`)].join(" ")}return`${d}${o}`};class f{constructor(d,h){this.buffer="",this.classPrefix=h.classPrefix,d.walk(this)}addText(d){this.buffer+=t(d)}openNode(d){if(!s(d))return;const h=l(d.scope,{prefix:this.classPrefix});this.span(h)}closeNode(d){s(d)&&(this.buffer+=i)}value(){return this.buffer}span(d){this.buffer+=`<span class="${d}">`}}const a=(o={})=>{const d={children:[]};return Object.assign(d,o),d};class c{constructor(){this.rootNode=a(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(d){this.top.children.push(d)}openNode(d){const h=a({scope:d});this.add(h),this.stack.push(h)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(d){return this.constructor._walk(d,this.rootNode)}static _walk(d,h){return typeof h=="string"?d.addText(h):h.children&&(d.openNode(h),h.children.forEach(A=>this._walk(d,A)),d.closeNode(h)),d}static _collapse(d){typeof d!="string"&&d.children&&(d.children.every(h=>typeof h=="string")?d.children=[d.children.join("")]:d.children.forEach(h=>{c._collapse(h)}))}}class g extends c{constructor(d){super(),this.options=d}addText(d){d!==""&&this.add(d)}startScope(d){this.openNode(d)}endScope(){this.closeNode()}__addSublanguage(d,h){const A=d.root;h&&(A.scope=`language:${h}`),this.add(A)}toHTML(){return new f(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(o){return o?typeof o=="string"?o:o.source:null}function u(o){return N("(?=",o,")")}function p(o){return N("(?:",o,")*")}function v(o){return N("(?:",o,")?")}function N(...o){return o.map(h=>_(h)).join("")}function F(o){const d=o[o.length-1];return typeof d=="object"&&d.constructor===Object?(o.splice(o.length-1,1),d):{}}function z(...o){return"("+(F(o).capture?"":"?:")+o.map(A=>_(A)).join("|")+")"}function H(o){return new RegExp(o.toString()+"|").exec("").length-1}function T(o,d){const h=o&&o.exec(d);return h&&h.index===0}const D=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function R(o,{joinWith:d}){let h=0;return o.map(A=>{h+=1;const Z=h;let G=_(A),w="";for(;G.length>0;){const y=D.exec(G);if(!y){w+=G;break}w+=G.substring(0,y.index),G=G.substring(y.index+y[0].length),y[0][0]==="\\"&&y[1]?w+="\\"+String(Number(y[1])+Z):(w+=y[0],y[0]==="("&&h++)}return w}).map(A=>`(${A})`).join(d)}const ee=/\b\B/,S="[a-zA-Z]\\w*",$="[a-zA-Z_]\\w*",Y="\\b\\d+(\\.\\d+)?",Te="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",pe="\\b(0b[01]+)",He="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",on=(o={})=>{const d=/^#![ ]*\//;return o.binary&&(o.begin=N(d,/.*\b/,o.binary,/\b.*/)),r({scope:"meta",begin:d,end:/$/,relevance:0,"on:begin":(h,A)=>{h.index!==0&&A.ignoreMatch()}},o)},ne={begin:"\\\\[\\s\\S]",relevance:0},ve={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ne]},Me={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ne]},Fe={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},he=function(o,d,h={}){const A=r({scope:"comment",begin:o,end:d,contains:[]},h);A.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const Z=z("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return A.contains.push({begin:N(/[ ]+/,"(",Z,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),A},Qn=he("//","$"),sn=he("/\\*","\\*/"),wn=he("#","$"),Xr={scope:"number",begin:Y,relevance:0},Jr={scope:"number",begin:Te,relevance:0},Yr={scope:"number",begin:pe,relevance:0},Qr={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ne,{begin:/\[/,end:/\]/,relevance:0,contains:[ne]}]},eo={scope:"title",begin:S,relevance:0},no={scope:"title",begin:$,relevance:0},to={begin:"\\.\\s*"+$,relevance:0};var En=Object.freeze({__proto__:null,APOS_STRING_MODE:ve,BACKSLASH_ESCAPE:ne,BINARY_NUMBER_MODE:Yr,BINARY_NUMBER_RE:pe,COMMENT:he,C_BLOCK_COMMENT_MODE:sn,C_LINE_COMMENT_MODE:Qn,C_NUMBER_MODE:Jr,C_NUMBER_RE:Te,END_SAME_AS_BEGIN:function(o){return Object.assign(o,{"on:begin":(d,h)=>{h.data._beginMatch=d[1]},"on:end":(d,h)=>{h.data._beginMatch!==d[1]&&h.ignoreMatch()}})},HASH_COMMENT_MODE:wn,IDENT_RE:S,MATCH_NOTHING_RE:ee,METHOD_GUARD:to,NUMBER_MODE:Xr,NUMBER_RE:Y,PHRASAL_WORDS_MODE:Fe,QUOTE_STRING_MODE:Me,REGEXP_MODE:Qr,RE_STARTERS_RE:He,SHEBANG:on,TITLE_MODE:eo,UNDERSCORE_IDENT_RE:$,UNDERSCORE_TITLE_MODE:no});function ro(o,d){o.input[o.index-1]==="."&&d.ignoreMatch()}function oo(o,d){o.className!==void 0&&(o.scope=o.className,delete o.className)}function so(o,d){d&&o.beginKeywords&&(o.begin="\\b("+o.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",o.__beforeBegin=ro,o.keywords=o.keywords||o.beginKeywords,delete o.beginKeywords,o.relevance===void 0&&(o.relevance=0))}function io(o,d){Array.isArray(o.illegal)&&(o.illegal=z(...o.illegal))}function ao(o,d){if(o.match){if(o.begin||o.end)throw new Error("begin & end are not supported with match");o.begin=o.match,delete o.match}}function lo(o,d){o.relevance===void 0&&(o.relevance=1)}const co=(o,d)=>{if(!o.beforeMatch)return;if(o.starts)throw new Error("beforeMatch cannot be used with starts");const h=Object.assign({},o);Object.keys(o).forEach(A=>{delete o[A]}),o.keywords=h.keywords,o.begin=N(h.beforeMatch,u(h.begin)),o.starts={relevance:0,contains:[Object.assign(h,{endsParent:!0})]},o.relevance=0,delete h.beforeMatch},uo=["of","and","for","in","not","or","if","then","parent","list","value"],fo="keyword";function Pt(o,d,h=fo){const A=Object.create(null);return typeof o=="string"?Z(h,o.split(" ")):Array.isArray(o)?Z(h,o):Object.keys(o).forEach(function(G){Object.assign(A,Pt(o[G],d,G))}),A;function Z(G,w){d&&(w=w.map(y=>y.toLowerCase())),w.forEach(function(y){const M=y.split("|");A[M[0]]=[G,_o(M[0],M[1])]})}}function _o(o,d){return d?Number(d):mo(o)?0:1}function mo(o){return uo.includes(o.toLowerCase())}const zt={},Ze=o=>{console.error(o)},Vt=(o,...d)=>{console.log(`WARN: ${o}`,...d)},Xe=(o,d)=>{zt[`${o}/${d}`]||(console.log(`Deprecated as of ${o}. ${d}`),zt[`${o}/${d}`]=!0)},Dn=new Error;function Bt(o,d,{key:h}){let A=0;const Z=o[h],G={},w={};for(let y=1;y<=d.length;y++)w[y+A]=Z[y],G[y+A]=!0,A+=H(d[y-1]);o[h]=w,o[h]._emit=G,o[h]._multi=!0}function go(o){if(Array.isArray(o.begin)){if(o.skip||o.excludeBegin||o.returnBegin)throw Ze("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Dn;if(typeof o.beginScope!="object"||o.beginScope===null)throw Ze("beginScope must be object"),Dn;Bt(o,o.begin,{key:"beginScope"}),o.begin=R(o.begin,{joinWith:""})}}function po(o){if(Array.isArray(o.end)){if(o.skip||o.excludeEnd||o.returnEnd)throw Ze("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Dn;if(typeof o.endScope!="object"||o.endScope===null)throw Ze("endScope must be object"),Dn;Bt(o,o.end,{key:"endScope"}),o.end=R(o.end,{joinWith:""})}}function vo(o){o.scope&&typeof o.scope=="object"&&o.scope!==null&&(o.beginScope=o.scope,delete o.scope)}function ho(o){vo(o),typeof o.beginScope=="string"&&(o.beginScope={_wrap:o.beginScope}),typeof o.endScope=="string"&&(o.endScope={_wrap:o.endScope}),go(o),po(o)}function bo(o){function d(w,y){return new RegExp(_(w),"m"+(o.case_insensitive?"i":"")+(o.unicodeRegex?"u":"")+(y?"g":""))}class h{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(y,M){M.position=this.position++,this.matchIndexes[this.matchAt]=M,this.regexes.push([M,y]),this.matchAt+=H(y)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const y=this.regexes.map(M=>M[1]);this.matcherRe=d(R(y,{joinWith:"|"}),!0),this.lastIndex=0}exec(y){this.matcherRe.lastIndex=this.lastIndex;const M=this.matcherRe.exec(y);if(!M)return null;const X=M.findIndex((an,nt)=>nt>0&&an!==void 0),K=this.matchIndexes[X];return M.splice(0,X),Object.assign(M,K)}}class A{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(y){if(this.multiRegexes[y])return this.multiRegexes[y];const M=new h;return this.rules.slice(y).forEach(([X,K])=>M.addRule(X,K)),M.compile(),this.multiRegexes[y]=M,M}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(y,M){this.rules.push([y,M]),M.type==="begin"&&this.count++}exec(y){const M=this.getMatcher(this.regexIndex);M.lastIndex=this.lastIndex;let X=M.exec(y);if(this.resumingScanAtSamePosition()&&!(X&&X.index===this.lastIndex)){const K=this.getMatcher(0);K.lastIndex=this.lastIndex+1,X=K.exec(y)}return X&&(this.regexIndex+=X.position+1,this.regexIndex===this.count&&this.considerAll()),X}}function Z(w){const y=new A;return w.contains.forEach(M=>y.addRule(M.begin,{rule:M,type:"begin"})),w.terminatorEnd&&y.addRule(w.terminatorEnd,{type:"end"}),w.illegal&&y.addRule(w.illegal,{type:"illegal"}),y}function G(w,y){const M=w;if(w.isCompiled)return M;[oo,ao,ho,co].forEach(K=>K(w,y)),o.compilerExtensions.forEach(K=>K(w,y)),w.__beforeBegin=null,[so,io,lo].forEach(K=>K(w,y)),w.isCompiled=!0;let X=null;return typeof w.keywords=="object"&&w.keywords.$pattern&&(w.keywords=Object.assign({},w.keywords),X=w.keywords.$pattern,delete w.keywords.$pattern),X=X||/\w+/,w.keywords&&(w.keywords=Pt(w.keywords,o.case_insensitive)),M.keywordPatternRe=d(X,!0),y&&(w.begin||(w.begin=/\B|\b/),M.beginRe=d(M.begin),!w.end&&!w.endsWithParent&&(w.end=/\B|\b/),w.end&&(M.endRe=d(M.end)),M.terminatorEnd=_(M.end)||"",w.endsWithParent&&y.terminatorEnd&&(M.terminatorEnd+=(w.end?"|":"")+y.terminatorEnd)),w.illegal&&(M.illegalRe=d(w.illegal)),w.contains||(w.contains=[]),w.contains=[].concat(...w.contains.map(function(K){return yo(K==="self"?w:K)})),w.contains.forEach(function(K){G(K,M)}),w.starts&&G(w.starts,y),M.matcher=Z(M),M}if(o.compilerExtensions||(o.compilerExtensions=[]),o.contains&&o.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return o.classNameAliases=r(o.classNameAliases||{}),G(o)}function jt(o){return o?o.endsWithParent||jt(o.starts):!1}function yo(o){return o.variants&&!o.cachedVariants&&(o.cachedVariants=o.variants.map(function(d){return r(o,{variants:null},d)})),o.cachedVariants?o.cachedVariants:jt(o)?r(o,{starts:o.starts?r(o.starts):null}):Object.isFrozen(o)?r(o):o}var wo="11.11.1";class Eo extends Error{constructor(d,h){super(d),this.name="HTMLInjectionError",this.html=h}}const et=t,Ut=r,$t=Symbol("nomatch"),Do=7,Ht=function(o){const d=Object.create(null),h=Object.create(null),A=[];let Z=!0;const G="Could not find the language '{}', did you forget to load/include a language module?",w={disableAutodetect:!0,name:"Plain text",contains:[]};let y={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:g};function M(m){return y.noHighlightRe.test(m)}function X(m){let x=m.className+" ";x+=m.parentNode?m.parentNode.className:"";const k=y.languageDetectRe.exec(x);if(k){const B=Ie(k[1]);return B||(Vt(G.replace("{}",k[1])),Vt("Falling back to no-highlight mode for this block.",m)),B?k[1]:"no-highlight"}return x.split(/\s+/).find(B=>M(B)||Ie(B))}function K(m,x,k){let B="",q="";typeof x=="object"?(B=m,k=x.ignoreIllegals,q=x.language):(Xe("10.7.0","highlight(lang, code, ...args) has been deprecated."),Xe("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),q=m,B=x),k===void 0&&(k=!0);const _e={code:B,language:q};Rn("before:highlight",_e);const ke=_e.result?_e.result:an(_e.language,_e.code,k);return ke.code=_e.code,Rn("after:highlight",ke),ke}function an(m,x,k,B){const q=Object.create(null);function _e(b,E){return b.keywords[E]}function ke(){if(!C.keywords){J.addText(j);return}let b=0;C.keywordPatternRe.lastIndex=0;let E=C.keywordPatternRe.exec(j),I="";for(;E;){I+=j.substring(b,E.index);const L=ye.case_insensitive?E[0].toLowerCase():E[0],Q=_e(C,L);if(Q){const[Ne,Bo]=Q;if(J.addText(I),I="",q[L]=(q[L]||0)+1,q[L]<=Do&&(Nn+=Bo),Ne.startsWith("_"))I+=E[0];else{const jo=ye.classNameAliases[Ne]||Ne;be(E[0],jo)}}else I+=E[0];b=C.keywordPatternRe.lastIndex,E=C.keywordPatternRe.exec(j)}I+=j.substring(b),J.addText(I)}function Tn(){if(j==="")return;let b=null;if(typeof C.subLanguage=="string"){if(!d[C.subLanguage]){J.addText(j);return}b=an(C.subLanguage,j,!0,Yt[C.subLanguage]),Yt[C.subLanguage]=b._top}else b=tt(j,C.subLanguage.length?C.subLanguage:null);C.relevance>0&&(Nn+=b.relevance),J.__addSublanguage(b._emitter,b.language)}function ae(){C.subLanguage!=null?Tn():ke(),j=""}function be(b,E){b!==""&&(J.startScope(E),J.addText(b),J.endScope())}function qt(b,E){let I=1;const L=E.length-1;for(;I<=L;){if(!b._emit[I]){I++;continue}const Q=ye.classNameAliases[b[I]]||b[I],Ne=E[I];Q?be(Ne,Q):(j=Ne,ke(),j=""),I++}}function Wt(b,E){return b.scope&&typeof b.scope=="string"&&J.openNode(ye.classNameAliases[b.scope]||b.scope),b.beginScope&&(b.beginScope._wrap?(be(j,ye.classNameAliases[b.beginScope._wrap]||b.beginScope._wrap),j=""):b.beginScope._multi&&(qt(b.beginScope,E),j="")),C=Object.create(b,{parent:{value:C}}),C}function Xt(b,E,I){let L=T(b.endRe,I);if(L){if(b["on:end"]){const Q=new n(b);b["on:end"](E,Q),Q.isMatchIgnored&&(L=!1)}if(L){for(;b.endsParent&&b.parent;)b=b.parent;return b}}if(b.endsWithParent)return Xt(b.parent,E,I)}function Oo(b){return C.matcher.regexIndex===0?(j+=b[0],1):(it=!0,0)}function Lo(b){const E=b[0],I=b.rule,L=new n(I),Q=[I.__beforeBegin,I["on:begin"]];for(const Ne of Q)if(Ne&&(Ne(b,L),L.isMatchIgnored))return Oo(E);return I.skip?j+=E:(I.excludeBegin&&(j+=E),ae(),!I.returnBegin&&!I.excludeBegin&&(j=E)),Wt(I,b),I.returnBegin?0:E.length}function Po(b){const E=b[0],I=x.substring(b.index),L=Xt(C,b,I);if(!L)return $t;const Q=C;C.endScope&&C.endScope._wrap?(ae(),be(E,C.endScope._wrap)):C.endScope&&C.endScope._multi?(ae(),qt(C.endScope,b)):Q.skip?j+=E:(Q.returnEnd||Q.excludeEnd||(j+=E),ae(),Q.excludeEnd&&(j=E));do C.scope&&J.closeNode(),!C.skip&&!C.subLanguage&&(Nn+=C.relevance),C=C.parent;while(C!==L.parent);return L.starts&&Wt(L.starts,b),Q.returnEnd?0:E.length}function zo(){const b=[];for(let E=C;E!==ye;E=E.parent)E.scope&&b.unshift(E.scope);b.forEach(E=>J.openNode(E))}let Mn={};function Jt(b,E){const I=E&&E[0];if(j+=b,I==null)return ae(),0;if(Mn.type==="begin"&&E.type==="end"&&Mn.index===E.index&&I===""){if(j+=x.slice(E.index,E.index+1),!Z){const L=new Error(`0 width match regex (${m})`);throw L.languageName=m,L.badRule=Mn.rule,L}return 1}if(Mn=E,E.type==="begin")return Lo(E);if(E.type==="illegal"&&!k){const L=new Error('Illegal lexeme "'+I+'" for mode "'+(C.scope||"<unnamed>")+'"');throw L.mode=C,L}else if(E.type==="end"){const L=Po(E);if(L!==$t)return L}if(E.type==="illegal"&&I==="")return j+=`
`,1;if(st>1e5&&st>E.index*3)throw new Error("potential infinite loop, way more iterations than matches");return j+=I,I.length}const ye=Ie(m);if(!ye)throw Ze(G.replace("{}",m)),new Error('Unknown language: "'+m+'"');const Vo=bo(ye);let ot="",C=B||Vo;const Yt={},J=new y.__emitter(y);zo();let j="",Nn=0,Ge=0,st=0,it=!1;try{if(ye.__emitTokens)ye.__emitTokens(x,J);else{for(C.matcher.considerAll();;){st++,it?it=!1:C.matcher.considerAll(),C.matcher.lastIndex=Ge;const b=C.matcher.exec(x);if(!b)break;const E=x.substring(Ge,b.index),I=Jt(E,b);Ge=b.index+I}Jt(x.substring(Ge))}return J.finalize(),ot=J.toHTML(),{language:m,value:ot,relevance:Nn,illegal:!1,_emitter:J,_top:C}}catch(b){if(b.message&&b.message.includes("Illegal"))return{language:m,value:et(x),illegal:!0,relevance:0,_illegalBy:{message:b.message,index:Ge,context:x.slice(Ge-100,Ge+100),mode:b.mode,resultSoFar:ot},_emitter:J};if(Z)return{language:m,value:et(x),illegal:!1,relevance:0,errorRaised:b,_emitter:J,_top:C};throw b}}function nt(m){const x={value:et(m),illegal:!1,relevance:0,_top:w,_emitter:new y.__emitter(y)};return x._emitter.addText(m),x}function tt(m,x){x=x||y.languages||Object.keys(d);const k=nt(m),B=x.filter(Ie).filter(Kt).map(ae=>an(ae,m,!1));B.unshift(k);const q=B.sort((ae,be)=>{if(ae.relevance!==be.relevance)return be.relevance-ae.relevance;if(ae.language&&be.language){if(Ie(ae.language).supersetOf===be.language)return 1;if(Ie(be.language).supersetOf===ae.language)return-1}return 0}),[_e,ke]=q,Tn=_e;return Tn.secondBest=ke,Tn}function xo(m,x,k){const B=x&&h[x]||k;m.classList.add("hljs"),m.classList.add(`language-${B}`)}function rt(m){let x=null;const k=X(m);if(M(k))return;if(Rn("before:highlightElement",{el:m,language:k}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(y.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),y.throwUnescapedHTML))throw new Eo("One of your code blocks includes unescaped HTML.",m.innerHTML);x=m;const B=x.textContent,q=k?K(B,{language:k,ignoreIllegals:!0}):tt(B);m.innerHTML=q.value,m.dataset.highlighted="yes",xo(m,k,q.language),m.result={language:q.language,re:q.relevance,relevance:q.relevance},q.secondBest&&(m.secondBest={language:q.secondBest.language,relevance:q.secondBest.relevance}),Rn("after:highlightElement",{el:m,result:q,text:B})}function Ro(m){y=Ut(y,m)}const To=()=>{xn(),Xe("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Mo(){xn(),Xe("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Zt=!1;function xn(){function m(){xn()}if(document.readyState==="loading"){Zt||window.addEventListener("DOMContentLoaded",m,!1),Zt=!0;return}document.querySelectorAll(y.cssSelector).forEach(rt)}function No(m,x){let k=null;try{k=x(o)}catch(B){if(Ze("Language definition for '{}' could not be registered.".replace("{}",m)),Z)Ze(B);else throw B;k=w}k.name||(k.name=m),d[m]=k,k.rawDefinition=x.bind(null,o),k.aliases&&Gt(k.aliases,{languageName:m})}function So(m){delete d[m];for(const x of Object.keys(h))h[x]===m&&delete h[x]}function Ao(){return Object.keys(d)}function Ie(m){return m=(m||"").toLowerCase(),d[m]||d[h[m]]}function Gt(m,{languageName:x}){typeof m=="string"&&(m=[m]),m.forEach(k=>{h[k.toLowerCase()]=x})}function Kt(m){const x=Ie(m);return x&&!x.disableAutodetect}function Co(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=x=>{m["before:highlightBlock"](Object.assign({block:x.el},x))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=x=>{m["after:highlightBlock"](Object.assign({block:x.el},x))})}function Fo(m){Co(m),A.push(m)}function Io(m){const x=A.indexOf(m);x!==-1&&A.splice(x,1)}function Rn(m,x){const k=m;A.forEach(function(B){B[k]&&B[k](x)})}function ko(m){return Xe("10.7.0","highlightBlock will be removed entirely in v12.0"),Xe("10.7.0","Please use highlightElement now."),rt(m)}Object.assign(o,{highlight:K,highlightAuto:tt,highlightAll:xn,highlightElement:rt,highlightBlock:ko,configure:Ro,initHighlighting:To,initHighlightingOnLoad:Mo,registerLanguage:No,unregisterLanguage:So,listLanguages:Ao,getLanguage:Ie,registerAliases:Gt,autoDetection:Kt,inherit:Ut,addPlugin:Fo,removePlugin:Io}),o.debugMode=function(){Z=!1},o.safeMode=function(){Z=!0},o.versionString=wo,o.regex={concat:N,lookahead:u,either:z,optional:v,anyNumberOfTimes:p};for(const m in En)typeof En[m]=="object"&&e(En[m]);return Object.assign(o,En),o},Je=Ht({});return Je.newInstance=()=>Ht({}),ut=Je,Je.HighlightJS=Je,Je.default=Je,ut}var d1=f1();const mr=u1(d1);var _1=ge("<pre><code><!></code></pre>");function m1(e,n){const t=jn(n,["children","$$slots","$$events","$$legacy"]),r=jn(t,["code","highlighted","languageName","langtag"]);let i=Be(n,"code",8),s=Be(n,"highlighted",8),l=Be(n,"languageName",8,"plaintext"),f=Be(n,"langtag",8,!1);var a=_1();let c;var g=W(a);Ot(g,1,"",null,{},{hljs:!0});var _=W(g);{var u=v=>{var N=kt(),F=qn(N);si(F,s),re(v,N)},p=v=>{var N=Js();Ee(()=>Ve(N,i())),re(v,N)};ht(_,v=>{s()?v(u):v(p,!1)})}Ee(v=>c=_i(a,c,{"data-language":l(),...r,[fn]:v},"svelte-1w9vok"),[()=>({langtag:f()})],Nt),re(e,a)}function g1(e,n){const t=jn(n,["children","$$slots","$$events","$$legacy"]),r=jn(t,["language","code","langtag"]);hn(n,!1);let i=Be(n,"language",8),s=Be(n,"code",8),l=Be(n,"langtag",8,!1);const f=bi();let a=St("");yi(()=>{O(a)&&f("highlight",{highlighted:O(a)})}),Ms(()=>(gt(i()),gt(s())),()=>{mr.registerLanguage(i().name,i().register),fe(a,mr.highlight(s(),{language:i().name}).value)}),Ns(),Lt();var c=kt(),g=qn(c);ii(g,n,"default",{get highlighted(){return O(a)}},_=>{m1(_,vi(()=>r,{get languageName(){return i().name},get langtag(){return l()},get highlighted(){return O(a)},get code(){return s()}}))}),re(e,c),bn()}function p1(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",s={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},l={keywords:s,illegal:/<\//},f={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},a={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},c={className:"subst",begin:/\$\(/,end:/\)/,keywords:s},g={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,c,g],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},u={className:"string",contains:[e.BACKSLASH_ESCAPE,c,g],begin:"`",end:"`"},p={className:"meta",begin:"@"+n},v={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return l.name="Julia",l.contains=[f,a,_,u,p,v,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],c.contains=l.contains,l}const v1={name:"julia",register:p1};var h1=ge('<th class="svelte-m8v9hl"> </th>'),b1=ge('<td class="svelte-m8v9hl"> </td>'),y1=ge('<a class="issue svelte-m8v9hl" target="_blank">(?)</a>'),w1=ge('<td class="svelte-m8v9hl"><!> <span> </span></td>'),E1=ge('<tr class="svelte-m8v9hl"><td class="svelte-m8v9hl"> <div class="model-definition svelte-m8v9hl"><!></div></td><!></tr>'),D1=ge('<table id="results" class="svelte-m8v9hl"><thead><tr class="svelte-m8v9hl"><th class="svelte-m8v9hl">Model name \\\\ AD type</th><!></tr></thead><tbody></tbody></table>');function x1(e,n){hn(n,!0);const t=[...n.data.keys()],r=n.data.get(t[0]).keys(),i="https://github.com/EnzymeAD/Enzyme.jl/issues/1995",l={assume_mvnormal__EnzymeForward:i,assume_wishart__EnzymeForward:i,multithreaded__Mooncake:"https://github.com/chalk-lab/Mooncake.jl/issues/570"};var f=D1(),a=W(f),c=W(a),g=we(W(c));_n(g,17,()=>r,dn,(u,p)=>{var v=h1(),N=W(v);Ee(()=>Ve(N,O(p))),re(u,v)});var _=we(a);_n(_,21,()=>yt(n.data),dn,(u,p)=>{let v=()=>O(p)[0],N=()=>O(p)[1];var F=E1(),z=W(F),H=W(z),T=we(H),D=W(T);g1(D,{language:v1,get code(){return n.modelDefinitions[v()]}});var R=we(z);_n(R,17,()=>yt(N()),dn,(ee,S)=>{let $=()=>O(S)[0],Y=()=>O(S)[1];var Te=kt(),pe=qn(Te);{var He=ne=>{var ve=b1(),Me=W(ve);Ee(Fe=>Ve(Me,Fe),[()=>Y().toFixed(3)]),re(ne,ve)},on=ne=>{var ve=w1(),Me=W(ve);{var Fe=sn=>{var wn=y1();Ee(()=>bt(wn,"href",l[`${v()}__${$()}`])),re(sn,wn)};ht(Me,sn=>{l[`${v()}__${$()}`]&&sn(Fe)})}var he=we(Me,2),Qn=W(he);Ee(()=>{Ot(he,1,Zr(Y()),"svelte-m8v9hl"),Ve(Qn,Y())}),re(ne,ve)};ht(pe,ne=>{typeof Y()=="number"?ne(He):ne(on,!1)})}re(ee,Te)}),Ee(()=>Ve(H,`${v()??""} `)),re(u,F)}),re(e,f),bn()}var R1=ge("<h3> </h3> <!>",1),T1=ge(`<div id="main-wrapper" class="svelte-14rlgmo"><main class="svelte-14rlgmo"><h1>Turing AD tests</h1> <p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p> <p>This page is intended as a brief overview of how different AD
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
                describes the problem.</li></ul> <h2>Results</h2> <p><a href="adtests.json" target="_blank" download="">Download the raw data (JSON)</a></p> <!> <h2>Manifest</h2> <p>The tests above were run with the following package versions:</p> <!></main></div>`);function M1(e,n){hn(n,!1);let t=new Map;for(const[f,a]of Object.entries(va)){let c=a.__category__;delete a.__category__;let g=new Map;for(const[_,u]of Object.entries(a))g.set(_,u);t.has(c)||t.set(c,new Map),t.get(c).set(f,g)}console.log(t),Lt();var r=T1(),i=W(r),s=we(W(i),14);_n(s,1,()=>t.entries(),dn,(f,a)=>{let c=()=>O(a)[0],g=()=>O(a)[1];var _=R1(),u=qn(_),p=W(u),v=we(u,2);x1(v,{get data(){return g()},modelDefinitions:dl}),Ee(()=>Ve(p,c())),re(f,_)});var l=we(s,6);c1(l,{}),re(e,r),bn()}Ys(M1,{target:document.getElementById("app")});
