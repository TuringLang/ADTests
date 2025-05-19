(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const sn=!1;var Dn=Array.isArray,rt=Array.prototype.indexOf,Ue=Array.from,st=Object.defineProperty,on=Object.getOwnPropertyDescriptor,En=Object.getOwnPropertyDescriptors,Fn=Object.getPrototypeOf,an=Object.isExtensible;function ot(e){return e()}function $e(e){for(var n=0;n<e.length;n++)e[n]()}const I=2,Rn=4,Se=8,xn=16,Z=32,ie=64,Fe=128,C=256,Re=512,x=1024,L=2048,Q=4096,j=8192,ze=16384,it=32768,Ge=65536,at=1<<19,Tn=1<<20,ln=1<<21,fn=Symbol("$state");function Nn(e){return e===this.v}function lt(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Cn(e){return!lt(e,this.v)}function ft(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ct(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ut(e){throw new Error("https://svelte.dev/e/effect_orphan")}function dt(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}let Ie=!1,_t=!1;function mt(){Ie=!0}const He=1,Je=2,Mn=4,vt=8,pt=16,ht=2,gt=Symbol(),yt="http://www.w3.org/1999/xhtml";let w=null;function cn(e){w=e}function kn(e,n=!1,t){var r=w={p:w,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};Ie&&!n&&(w.l={s:null,u:null,r1:[],r2:xe(!1)}),Nt(()=>{r.d=!0})}function An(e){const n=w;if(n!==null){const a=n.e;if(a!==null){var t=h,r=y;n.e=null;try{for(var o=0;o<a.length;o++){var s=a[o];oe(s.effect),se(s.reaction),Zn(s.fn)}}finally{oe(t),se(r)}}w=n.p,n.m=!0}return{}}function We(){return!Ie||w!==null&&w.l===null}function Ye(e){var n=I|L,t=y!==null&&(y.f&I)!==0?y:null;return h===null||t!==null&&(t.f&C)!==0?n|=C:h.f|=Tn,{ctx:w,deps:null,effects:null,equals:Nn,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??h}}function wt(e){const n=Ye(e);return n.equals=Cn,n}function Sn(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)G(n[t])}}function bt(e){for(var n=e.parent;n!==null;){if((n.f&I)===0)return n;n=n.parent}return null}function zn(e){var n,t=h;oe(bt(e));try{Sn(e),n=Yn(e)}finally{oe(t)}return n}function In(e){var n=zn(e),t=(U||(e.f&C)!==0)&&e.deps!==null?Q:x;S(e,t),e.equals(n)||(e.v=n,e.wv=Jn())}const _e=new Map;function xe(e,n){var t={f:0,v:e,reactions:null,equals:Nn,rv:0,wv:0};return t}function Dt(e,n=!1){var r;const t=xe(e);return n||(t.equals=Cn),Ie&&w!==null&&w.l!==null&&((r=w.l).s??(r.s=[])).push(t),t}function un(e,n){if(!e.equals(n)){var t=e.v;ve?_e.set(e,n):_e.set(e,t),e.v=n,(e.f&I)!==0&&((e.f&L)!==0&&zn(e),S(e,(e.f&C)===0?x:Q)),e.wv=Jn(),Ln(e,L),We()&&h!==null&&(h.f&x)!==0&&(h.f&(Z|ie))===0&&(k===null?Lt([e]):k.push(e))}return n}function Ln(e,n){var t=e.reactions;if(t!==null)for(var r=We(),o=t.length,s=0;s<o;s++){var a=t[s],l=a.f;(l&L)===0&&(!r&&a===h||(S(a,n),(l&(x|C))!==0&&((l&I)!==0?Ln(a,Q):Oe(a))))}}let Et=!1;var dn,Vn,On,jn;function Ft(){if(dn===void 0){dn=window,Vn=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;On=on(n,"firstChild").get,jn=on(n,"nextSibling").get,an(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),an(t)&&(t.__t=void 0)}}function Ke(e=""){return document.createTextNode(e)}function Qe(e){return On.call(e)}function Le(e){return jn.call(e)}function D(e,n){return Qe(e)}function Rt(e,n){{var t=Qe(e);return t instanceof Comment&&t.data===""?Le(t):t}}function V(e,n=1,t=!1){let r=e;for(;n--;)r=Le(r);return r}function xt(e){e.textContent=""}function Pn(e){h===null&&y===null&&ut(),y!==null&&(y.f&C)!==0&&h===null&&ct(),ve&&ft()}function Tt(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function ae(e,n,t,r=!0){var o=h,s={ctx:w,deps:null,nodes_start:null,nodes_end:null,f:e|L,first:null,fn:n,last:null,next:null,parent:o,prev:null,teardown:null,transitions:null,wv:0};if(t)try{nn(s),s.f|=it}catch(d){throw G(s),d}else n!==null&&Oe(s);var a=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(Tn|Fe))===0;if(!a&&r&&(o!==null&&Tt(s,o),y!==null&&(y.f&I)!==0)){var l=y;(l.effects??(l.effects=[])).push(s)}return s}function Nt(e){const n=ae(Se,null,!1);return S(n,x),n.teardown=e,n}function _n(e){Pn();var n=h!==null&&(h.f&Z)!==0&&w!==null&&!w.m;if(n){var t=w;(t.e??(t.e=[])).push({fn:e,effect:h,reaction:y})}else{var r=Zn(e);return r}}function Ct(e){return Pn(),kt(e)}function Mt(e){const n=ae(ie,e,!0);return(t={})=>new Promise(r=>{t.outro?Te(n,()=>{G(n),r(void 0)}):(G(n),r(void 0))})}function Zn(e){return ae(Rn,e,!1)}function kt(e){return ae(Se,e,!0)}function te(e,n=[],t=Ye){const r=n.map(t);return Xe(()=>e(...r.map(A)))}function Xe(e,n=0){return ae(Se|xn|n,e,!0)}function me(e,n=!0){return ae(Se|Z,e,!0,n)}function $n(e){var n=e.teardown;if(n!==null){const t=ve,r=y;mn(!0),se(null);try{n.call(null)}finally{mn(t),se(r)}}}function qn(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&ie)!==0?t.parent=null:G(t,n),t=r}}function At(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&Z)===0&&G(n),n=t}}function G(e,n=!0){var t=!1;(n||(e.f&at)!==0)&&e.nodes_start!==null&&(St(e.nodes_start,e.nodes_end),t=!0),qn(e,n&&!t),Ae(e,0),S(e,ze);var r=e.transitions;if(r!==null)for(const s of r)s.stop();$n(e);var o=e.parent;o!==null&&o.first!==null&&Bn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function St(e,n){for(;e!==null;){var t=e===n?null:Le(e);e.remove(),e=t}}function Bn(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function Te(e,n){var t=[];en(e,t,!0),Un(t,()=>{G(e),n&&n()})}function Un(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var o of e)o.out(r)}else n()}function en(e,n,t){if((e.f&j)===0){if(e.f^=j,e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&n.push(a);for(var r=e.first;r!==null;){var o=r.next,s=(r.f&Ge)!==0||(r.f&Z)!==0;en(r,n,s?t:!1),r=o}}}function Ne(e){Gn(e,!0)}function Gn(e,n){if((e.f&j)!==0){e.f^=j,(e.f&x)===0&&(e.f^=x),pe(e)&&(S(e,L),Oe(e));for(var t=e.first;t!==null;){var r=t.next,o=(t.f&Ge)!==0||(t.f&Z)!==0;Gn(t,o?n:!1),t=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&s.in()}}let Ce=[];function zt(){var e=Ce;Ce=[],$e(e)}function It(e){Ce.length===0&&queueMicrotask(zt),Ce.push(e)}let De=!1,qe=!1,Me=null,K=!1,ve=!1;function mn(e){ve=e}let Ee=[];let y=null,O=!1;function se(e){y=e}let h=null;function oe(e){h=e}let P=null,E=null,N=0,k=null;function Lt(e){k=e}let Hn=1,ke=0,U=!1;function Jn(){return++Hn}function pe(e){var m;var n=e.f;if((n&L)!==0)return!0;if((n&Q)!==0){var t=e.deps,r=(n&C)!==0;if(t!==null){var o,s,a=(n&Re)!==0,l=r&&h!==null&&!U,d=t.length;if(a||l){var u=e,v=u.parent;for(o=0;o<d;o++)s=t[o],(a||!((m=s==null?void 0:s.reactions)!=null&&m.includes(u)))&&(s.reactions??(s.reactions=[])).push(u);a&&(u.f^=Re),l&&v!==null&&(v.f&C)===0&&(u.f^=C)}for(o=0;o<d;o++)if(s=t[o],pe(s)&&In(s),s.wv>e.wv)return!0}(!r||h!==null&&!U)&&S(e,x)}return!1}function Vt(e,n){for(var t=n;t!==null;){if((t.f&Fe)!==0)try{t.fn(e);return}catch{t.f^=Fe}t=t.parent}throw De=!1,e}function vn(e){return(e.f&ze)===0&&(e.parent===null||(e.parent.f&Fe)===0)}function Ve(e,n,t,r){if(De){if(t===null&&(De=!1),vn(n))throw e;return}if(t!==null&&(De=!0),Vt(e,n),vn(n))throw e}function Wn(e,n,t=!0){var r=e.reactions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];P!=null&&P.includes(e)||((s.f&I)!==0?Wn(s,n,!1):n===s&&(t?S(s,L):(s.f&x)!==0&&S(s,Q),Oe(s)))}}function Yn(e){var f;var n=E,t=N,r=k,o=y,s=U,a=P,l=w,d=O,u=e.f;E=null,N=0,k=null,U=(u&C)!==0&&(O||!K||y===null),y=(u&(Z|ie))===0?e:null,P=null,cn(e.ctx),O=!1,ke++,e.f|=ln;try{var v=(0,e.fn)(),m=e.deps;if(E!==null){var i;if(Ae(e,N),m!==null&&N>0)for(m.length=N+E.length,i=0;i<E.length;i++)m[N+i]=E[i];else e.deps=m=E;if(!U)for(i=N;i<m.length;i++)((f=m[i]).reactions??(f.reactions=[])).push(e)}else m!==null&&N<m.length&&(Ae(e,N),m.length=N);if(We()&&k!==null&&!O&&m!==null&&(e.f&(I|Q|L))===0)for(i=0;i<k.length;i++)Wn(k[i],e);return o!==null&&o!==e&&(ke++,k!==null&&(r===null?r=k:r.push(...k))),v}finally{E=n,N=t,k=r,y=o,U=s,P=a,cn(l),O=d,e.f^=ln}}function Ot(e,n){let t=n.reactions;if(t!==null){var r=rt.call(t,e);if(r!==-1){var o=t.length-1;o===0?t=n.reactions=null:(t[r]=t[o],t.pop())}}t===null&&(n.f&I)!==0&&(E===null||!E.includes(n))&&(S(n,Q),(n.f&(C|Re))===0&&(n.f^=Re),Sn(n),Ae(n,0))}function Ae(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Ot(e,t[r])}function nn(e){var n=e.f;if((n&ze)===0){S(e,x);var t=h,r=w,o=K;h=e,K=!0;try{(n&xn)!==0?At(e):qn(e),$n(e);var s=Yn(e);e.teardown=typeof s=="function"?s:null,e.wv=Hn;var a=e.deps,l;sn&&_t&&e.f&L}catch(d){Ve(d,e,t,r||e.ctx)}finally{K=o,h=t}}}function jt(){try{dt()}catch(e){if(Me!==null)Ve(e,Me,null);else throw e}}function Pt(){var e=K;try{var n=0;for(K=!0;Ee.length>0;){n++>1e3&&jt();var t=Ee,r=t.length;Ee=[];for(var o=0;o<r;o++){var s=$t(t[o]);Zt(s)}_e.clear()}}finally{qe=!1,K=e,Me=null}}function Zt(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(ze|j))===0)try{pe(r)&&(nn(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Bn(r):r.fn=null))}catch(o){Ve(o,r,null,r.ctx)}}}function Oe(e){qe||(qe=!0,queueMicrotask(Pt));for(var n=Me=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(ie|Z))!==0){if((t&x)===0)return;n.f^=x}}Ee.push(n)}function $t(e){for(var n=[],t=e;t!==null;){var r=t.f,o=(r&(Z|ie))!==0,s=o&&(r&x)!==0;if(!s&&(r&j)===0){if((r&Rn)!==0)n.push(t);else if(o)t.f^=x;else try{pe(t)&&nn(t)}catch(d){Ve(d,t,null,t.ctx)}var a=t.first;if(a!==null){t=a;continue}}var l=t.parent;for(t=t.next;t===null&&l!==null;)t=l.next,l=l.parent}return n}function A(e){var n=e.f,t=(n&I)!==0;if(y!==null&&!O){if(!(P!=null&&P.includes(e))){var r=y.deps;e.rv<ke&&(e.rv=ke,E===null&&r!==null&&r[N]===e?N++:E===null?E=[e]:(!U||!E.includes(e))&&E.push(e))}}else if(t&&e.deps===null&&e.effects===null){var o=e,s=o.parent;s!==null&&(s.f&C)===0&&(o.f^=C)}return t&&(o=e,pe(o)&&In(o)),ve&&_e.has(e)?_e.get(e):e.v}function qt(e){var n=O;try{return O=!0,e()}finally{O=n}}const Bt=-7169;function S(e,n){e.f=e.f&Bt|n}function Ut(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(fn in e)Be(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&fn in t&&Be(t)}}}function Be(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{Be(e[r],n)}catch{}const t=Fn(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=En(t);for(let o in r){const s=r[o].get;if(s)try{s.call(e)}catch{}}}}}const Gt=["touchstart","touchmove"];function Ht(e){return Gt.includes(e)}const Jt=new Set,pn=new Set;function ye(e){var b;var n=this,t=n.ownerDocument,r=e.type,o=((b=e.composedPath)==null?void 0:b.call(e))||[],s=o[0]||e.target,a=0,l=e.__root;if(l){var d=o.indexOf(l);if(d!==-1&&(n===document||n===window)){e.__root=n;return}var u=o.indexOf(n);if(u===-1)return;d<=u&&(a=d)}if(s=o[a]||e.target,s!==n){st(e,"currentTarget",{configurable:!0,get(){return s||t}});var v=y,m=h;se(null),oe(null);try{for(var i,f=[];s!==null;){var c=s.assignedSlot||s.parentNode||s.host||null;try{var F=s["__"+r];if(F!=null&&(!s.disabled||e.target===s))if(Dn(F)){var[R,...M]=F;R.apply(s,[e,...M])}else F.call(s,e)}catch(g){i?f.push(g):i=g}if(e.cancelBubble||c===n||c===null)break;s=c}if(i){for(let g of f)queueMicrotask(()=>{throw g});throw i}}finally{e.__root=n,delete e.currentTarget,se(v),oe(m)}}}function Wt(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function Kn(e,n){var t=h;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function X(e,n){var t=(n&ht)!==0,r,o=!e.startsWith("<!>");return()=>{r===void 0&&(r=Wt(o?e:"<!>"+e),r=Qe(r));var s=t||Vn?document.importNode(r,!0):r.cloneNode(!0);return Kn(s,s),s}}function Yt(){var e=document.createDocumentFragment(),n=document.createComment(""),t=Ke();return e.append(n,t),Kn(n,t),e}function q(e,n){e!==null&&e.before(n)}function Y(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function Kt(e,n){return Qt(e,n)}const re=new Map;function Qt(e,{target:n,anchor:t,props:r={},events:o,context:s,intro:a=!0}){Ft();var l=new Set,d=m=>{for(var i=0;i<m.length;i++){var f=m[i];if(!l.has(f)){l.add(f);var c=Ht(f);n.addEventListener(f,ye,{passive:c});var F=re.get(f);F===void 0?(document.addEventListener(f,ye,{passive:c}),re.set(f,1)):re.set(f,F+1)}}};d(Ue(Jt)),pn.add(d);var u=void 0,v=Mt(()=>{var m=t??n.appendChild(Ke());return me(()=>{if(s){kn({});var i=w;i.c=s}o&&(r.$$events=o),u=e(m,r)||{},s&&An()}),()=>{var c;for(var i of l){n.removeEventListener(i,ye);var f=re.get(i);--f===0?(document.removeEventListener(i,ye),re.delete(i)):re.set(i,f)}pn.delete(d),m!==t&&((c=m.parentNode)==null||c.removeChild(m))}});return Xt.set(u,v),u}let Xt=new WeakMap;function hn(e,n,[t,r]=[0,0]){var o=e,s=null,a=null,l=gt,d=t>0?Ge:0,u=!1;const v=(i,f=!0)=>{u=!0,m(f,i)},m=(i,f)=>{l!==(l=i)&&(l?(s?Ne(s):f&&(s=me(()=>f(o))),a&&Te(a,()=>{a=null})):(a?Ne(a):f&&(a=me(()=>f(o,[t+1,r]))),s&&Te(s,()=>{s=null})))};Xe(()=>{u=!1,n(v),u||m(null,null)},d)}function we(e,n){return n}function er(e,n,t,r){for(var o=[],s=n.length,a=0;a<s;a++)en(n[a].e,o,!0);var l=s>0&&o.length===0&&t!==null;if(l){var d=t.parentNode;xt(d),d.append(t),r.clear(),B(e,n[0].prev,n[s-1].next)}Un(o,()=>{for(var u=0;u<s;u++){var v=n[u];l||(r.delete(v.k),B(e,v.prev,v.next)),G(v.e,!l)}})}function be(e,n,t,r,o,s=null){var a=e,l={flags:n,items:new Map,first:null},d=(n&Mn)!==0;if(d){var u=e;a=u.appendChild(Ke())}var v=null,m=!1,i=wt(()=>{var f=t();return Dn(f)?f:f==null?[]:Ue(f)});Xe(()=>{var f=A(i),c=f.length;m&&c===0||(m=c===0,nr(f,l,a,o,n,r,t),s!==null&&(c===0?v?Ne(v):v=me(()=>s(a)):v!==null&&Te(v,()=>{v=null})),A(i))})}function nr(e,n,t,r,o,s,a){var fe,ce,W,ue;var l=(o&vt)!==0,d=(o&(He|Je))!==0,u=e.length,v=n.items,m=n.first,i=m,f,c=null,F,R=[],M=[],b,g,_,p;if(l)for(p=0;p<u;p+=1)b=e[p],g=s(b,p),_=v.get(g),_!==void 0&&((fe=_.a)==null||fe.measure(),(F??(F=new Set)).add(_));for(p=0;p<u;p+=1){if(b=e[p],g=s(b,p),_=v.get(g),_===void 0){var $=i?i.e.nodes_start:t;c=rr($,n,c,c===null?n.first:c.next,b,g,p,r,o,a),v.set(g,c),R=[],M=[],i=c.next;continue}if(d&&tr(_,b,p,o),(_.e.f&j)!==0&&(Ne(_.e),l&&((ce=_.a)==null||ce.unfix(),(F??(F=new Set)).delete(_))),_!==i){if(f!==void 0&&f.has(_)){if(R.length<M.length){var z=M[0],T;c=z.prev;var ee=R[0],H=R[R.length-1];for(T=0;T<R.length;T+=1)gn(R[T],z,t);for(T=0;T<M.length;T+=1)f.delete(M[T]);B(n,ee.prev,H.next),B(n,c,ee),B(n,H,z),i=z,c=H,p-=1,R=[],M=[]}else f.delete(_),gn(_,i,t),B(n,_.prev,_.next),B(n,_,c===null?n.first:c.next),B(n,c,_),c=_;continue}for(R=[],M=[];i!==null&&i.k!==g;)(i.e.f&j)===0&&(f??(f=new Set)).add(i),M.push(i),i=i.next;if(i===null)continue;_=i}R.push(_),c=_,i=_.next}if(i!==null||f!==void 0){for(var J=f===void 0?[]:Ue(f);i!==null;)(i.e.f&j)===0&&J.push(i),i=i.next;var le=J.length;if(le>0){var je=(o&Mn)!==0&&u===0?t:null;if(l){for(p=0;p<le;p+=1)(W=J[p].a)==null||W.measure();for(p=0;p<le;p+=1)(ue=J[p].a)==null||ue.fix()}er(n,J,je,v)}}l&&It(()=>{var he;if(F!==void 0)for(_ of F)(he=_.a)==null||he.apply()}),h.first=n.first&&n.first.e,h.last=c&&c.e}function tr(e,n,t,r){(r&He)!==0&&un(e.v,n),(r&Je)!==0?un(e.i,t):e.i=t}function rr(e,n,t,r,o,s,a,l,d,u){var v=(d&He)!==0,m=(d&pt)===0,i=v?m?Dt(o):xe(o):o,f=(d&Je)===0?a:xe(a),c={i:f,v:i,k:s,a:null,e:null,prev:t,next:r};try{return c.e=me(()=>l(e,i,f,u),Et),c.e.prev=t&&t.e,c.e.next=r&&r.e,t===null?n.first=c:(t.next=c,t.e.next=c.e),r!==null&&(r.prev=c,r.e.prev=c.e),c}finally{}}function gn(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,o=n?n.e.nodes_start:t,s=e.e.nodes_start;s!==r;){var a=Le(s);o.before(s),s=a}}function B(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function Qn(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(n=0;n<o;n++)e[n]&&(t=Qn(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function sr(){for(var e,n,t=0,r="",o=arguments.length;t<o;t++)(e=arguments[t])&&(n=Qn(e))&&(r&&(r+=" "),r+=n);return r}function or(e){return typeof e=="object"?sr(e):e??""}function ir(e,n,t){var r=e==null?"":""+e;return r=r?r+" "+n:n,r===""?null:r}function ar(e,n,t,r,o,s){var a=e.__className;if(a!==t||a===void 0){var l=ir(t,r);l==null?e.removeAttribute("class"):e.className=l,e.__className=t}return s}const lr=Symbol("is custom element"),fr=Symbol("is html");function cr(e,n,t,r){var o=ur(e);o[n]!==(o[n]=t)&&(t==null?e.removeAttribute(n):typeof t!="string"&&dr(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function ur(e){return e.__attributes??(e.__attributes={[lr]:e.nodeName.includes("-"),[fr]:e.namespaceURI===yt})}var yn=new Map;function dr(e){var n=yn.get(e.nodeName);if(n)return n;yn.set(e.nodeName,n=[]);for(var t,r=e,o=Element.prototype;o!==r;){t=En(r);for(var s in t)t[s].set&&n.push(s);r=Fn(r)}return n}function _r(e=!1){const n=w,t=n.l.u;if(!t)return;let r=()=>Ut(n.s);if(e){let o=0,s={};const a=Ye(()=>{let l=!1;const d=n.s;for(const u in d)d[u]!==s[u]&&(s[u]=d[u],l=!0);return l&&o++,o});r=()=>A(a)}t.b.length&&Ct(()=>{wn(n,r),$e(t.b)}),_n(()=>{const o=qt(()=>t.m.map(ot));return()=>{for(const s of o)typeof s=="function"&&s()}}),t.a.length&&_n(()=>{wn(n,r),$e(t.a)})}function wn(e,n){if(e.l.s)for(const t of e.l.s)A(t);n()}const mr="5";var bn;typeof window<"u"&&((bn=window.__svelte??(window.__svelte={})).v??(bn.v=new Set)).add(mr);mt();const vr={EnzymeForward:2.521,EnzymeReverse:3.305,FiniteDifferences:23.032,ForwardDiff:1.378,Mooncake:8.374,ReverseDiff:13.503,ReverseDiffCompiled:2.501,Zygote:512.02},pr={EnzymeForward:5.135,EnzymeReverse:12.391,FiniteDifferences:151.51,ForwardDiff:2.344,Mooncake:6.615,ReverseDiff:48.842,ReverseDiffCompiled:6.31,Zygote:"error"},hr={EnzymeForward:3.587,EnzymeReverse:7.085,FiniteDifferences:65.614,ForwardDiff:1.398,Mooncake:9.035,ReverseDiff:28.944,ReverseDiffCompiled:2.974,Zygote:"error"},gr={EnzymeForward:3.61,EnzymeReverse:7.707,FiniteDifferences:63.919,ForwardDiff:1.428,Mooncake:8.965,ReverseDiff:29.709,ReverseDiffCompiled:3.105,Zygote:1335.084},yr={EnzymeForward:3.497,EnzymeReverse:4.561,FiniteDifferences:66.801,ForwardDiff:1.419,Mooncake:9.066,ReverseDiff:29.084,ReverseDiffCompiled:2.971,Zygote:1164.956},wr={EnzymeForward:2.858,EnzymeReverse:2.217,FiniteDifferences:77.134,ForwardDiff:1.38,Mooncake:5.255,ReverseDiff:23.164,ReverseDiffCompiled:2.326,Zygote:"error"},br={EnzymeForward:2.797,EnzymeReverse:2.422,FiniteDifferences:28.77,ForwardDiff:1.65,Mooncake:10.057,ReverseDiff:44.555,ReverseDiffCompiled:5.788,Zygote:"error"},Dr={EnzymeForward:2.402,EnzymeReverse:2.592,FiniteDifferences:36.554,ForwardDiff:1.318,Mooncake:8.048,ReverseDiff:33.192,ReverseDiffCompiled:2.8,Zygote:1212.584},Er={EnzymeForward:4.985,EnzymeReverse:26.089,FiniteDifferences:60.122,ForwardDiff:1.234,Mooncake:13.653,ReverseDiff:20.717,ReverseDiffCompiled:2.256,Zygote:"error"},Fr={EnzymeForward:3.339,EnzymeReverse:11.606,FiniteDifferences:16.086,ForwardDiff:1.261,Mooncake:"error",ReverseDiff:4.452,ReverseDiffCompiled:"error",Zygote:"error"},Rr={EnzymeForward:4.7,EnzymeReverse:2.142,FiniteDifferences:142.194,ForwardDiff:1.672,Mooncake:4.741,ReverseDiff:23.721,ReverseDiffCompiled:2.403,Zygote:"error"},xr={EnzymeForward:18.175,EnzymeReverse:2.56,FiniteDifferences:626.387,ForwardDiff:8.729,Mooncake:4.005,ReverseDiff:25.626,ReverseDiffCompiled:2.486,Zygote:"error"},Tr={EnzymeForward:"error",EnzymeReverse:5.086,FiniteDifferences:38.346,ForwardDiff:1.204,Mooncake:10.179,ReverseDiff:11.781,ReverseDiffCompiled:1.199,Zygote:513.049},Nr={EnzymeForward:38.868,EnzymeReverse:2.195,FiniteDifferences:1228.702,ForwardDiff:14.148,Mooncake:3.882,ReverseDiff:25.995,ReverseDiffCompiled:2.577,Zygote:"error"},Cr={EnzymeForward:166.789,EnzymeReverse:2.619,FiniteDifferences:6484.431,ForwardDiff:59.717,Mooncake:4.028,ReverseDiff:25.707,ReverseDiffCompiled:2.618,Zygote:"error"},Mr={EnzymeForward:2.615,EnzymeReverse:2.539,FiniteDifferences:28.543,ForwardDiff:1.764,Mooncake:9.935,ReverseDiff:57.487,ReverseDiffCompiled:5.905,Zygote:"error"},kr={EnzymeForward:2.758,EnzymeReverse:3.276,FiniteDifferences:26.643,ForwardDiff:.848,Mooncake:8.872,ReverseDiff:33.785,ReverseDiffCompiled:3.513,Zygote:1495.506},Ar={EnzymeForward:2.656,EnzymeReverse:3.868,FiniteDifferences:52.186,ForwardDiff:1.321,Mooncake:6.262,ReverseDiff:27.033,ReverseDiffCompiled:2.625,Zygote:"error"},Sr={EnzymeForward:2.43,EnzymeReverse:2.324,FiniteDifferences:25.378,ForwardDiff:1.464,Mooncake:7.368,ReverseDiff:26.596,ReverseDiffCompiled:2.774,Zygote:2198.966},zr={EnzymeForward:4.602,EnzymeReverse:2.456,FiniteDifferences:135.216,ForwardDiff:1.698,Mooncake:5.83,ReverseDiff:32.252,ReverseDiffCompiled:3.02,Zygote:"error"},Ir={EnzymeForward:4.407,EnzymeReverse:2.377,FiniteDifferences:136.858,ForwardDiff:1.713,Mooncake:5.812,ReverseDiff:33.657,ReverseDiffCompiled:3.062,Zygote:"error"},Lr={EnzymeForward:3.003,EnzymeReverse:3.262,FiniteDifferences:27.768,ForwardDiff:.946,Mooncake:8.864,ReverseDiff:20.028,ReverseDiffCompiled:2.46,Zygote:1171.358},Vr={EnzymeForward:2.032,EnzymeReverse:2.073,FiniteDifferences:34.985,ForwardDiff:1.295,Mooncake:6.94,ReverseDiff:13.625,ReverseDiffCompiled:1.354,Zygote:1213.402},Or={EnzymeForward:"error",EnzymeReverse:12.605,FiniteDifferences:43.4,ForwardDiff:1.068,Mooncake:12.564,ReverseDiff:16.26,ReverseDiffCompiled:3.598,Zygote:"error"},jr={EnzymeForward:2.823,EnzymeReverse:3.328,FiniteDifferences:41.154,ForwardDiff:1.511,Mooncake:9.297,ReverseDiff:20.836,ReverseDiffCompiled:"wrong",Zygote:1143.184},Pr={EnzymeForward:2.956,EnzymeReverse:2.854,FiniteDifferences:38.746,ForwardDiff:1.337,Mooncake:8.779,ReverseDiff:31.979,ReverseDiffCompiled:3.507,Zygote:"error"},Zr={EnzymeForward:2.632,EnzymeReverse:2.719,FiniteDifferences:37.957,ForwardDiff:1.367,Mooncake:8.889,ReverseDiff:31.198,ReverseDiffCompiled:3.261,Zygote:1668.922},$r={EnzymeForward:3.133,EnzymeReverse:4.118,FiniteDifferences:61.466,ForwardDiff:1.272,Mooncake:6.832,ReverseDiff:23.859,ReverseDiffCompiled:2.47,Zygote:"error"},Ze={assume_dirichlet:vr,assume_lkjcholu:pr,demo_assume_matrix_observe_matrix_index:hr,demo_assume_multivariate_observe:gr,demo_assume_multivariate_observe_literal:yr,dot_assume:wr,dot_observe:br,dynamic_constraint:Dr,multiple_constraints_same_var:Er,multithreaded:Fr,n010:Rr,n050:xr,assume_mvnormal:Tr,n100:Nr,n500:Cr,observe_index:Mr,observe_literal:kr,observe_multivariate:Ar,observe_submodel:Sr,pdb_eight_schools_centered:zr,pdb_eight_schools_noncentered:Ir,assume_normal:Lr,assume_submodel:Vr,assume_wishart:Or,control_flow:jr,demo_assume_dot_observe:Pr,demo_assume_dot_observe_literal:Zr,demo_assume_index_observe:$r},qr="1.14.0",Br="1.5.0",Ur="5.6.1",Gr="0.11.0",Hr="0.4.5",Jr="0.1.42",Wr="4.3.0",Yr="1.1.3",Kr="2.5.0",Qr="1.1.2",Xr="0.4.0",es="1.11.0",ns="0.4.4",ts="1.11.0",rs="0.1.1",ss="0.15.6",os="0.5.0",is="1.72.3",as="1.25.1",ls="1.3.1",fs="0.1.10",cs="0.2.4",us="0.3.1",ds="4.16.0",_s="1.1.1+0",ms="0.1.2",vs="0.1.2",ps="1.5.8",hs="1.16.0",gs="0.18.22",ys="1.0.0",ws="1.11.0",bs="0.1.2",Ds="0.4.0",Es="1.1.0",Fs="1.15.1",Rs="0.6.54",xs="1.11.0",Ts="0.25.120",Ns="0.9.4",Cs="1.6.0",Ms="0.36.3",ks="0.13.44",As="0.8.8",Ss="0.0.180+0",zs="0.1.10",Is="1.11.0",Ls="1.13.0",Vs="0.12.32",Os="0.10.38",js="1.1.3",Ps="0.5.2",Zs="1.11.0",$s="0.2.0",qs="1.5.0",Bs="1.12.1",Us="0.3.28",Gs="0.4.14",Hs="0.1.5",Js="0.3.1",Ws="1.11.0",Ys="0.1.17",Ks="0.2.4",Qs="1.0.0",Xs="1.7.0",eo="9.4.0",no="0.0.36+0",to="1.11.0",ro="0.2.0",so="0.6.4",oo="8.6.0+0",io="1.11.0",ao="1.7.2+0",lo="1.11.0+1",fo="0.9.1+6",co="1.11.0",uo="1.11.0",_o="2.1.2",mo="0.3.29",vo="1.11.0",po="1.1.0",ho="0.5.16",go="0.4.2",yo="1.11.0",wo="2.28.6+0",bo="0.2.0",Do="1.2.0",Eo="2.0.0",Fo="1.11.0",Ro="0.4.118",xo="2023.12.12",To="1.1.3",No="1.2.0",Co="0.4.4",Mo="0.3.27+1",ko="0.8.5+0",Ao="0.5.6+0",So="1.8.0",zo="0.11.35",Io="2.8.3",Lo="1.11.0",Vo="1.2.1",Oo="1.4.3",jo="1.11.0",Po="0.1.4",Zo="1.10.4",$o="1.3.0",qo="2.11.2",Bo="1.11.0",Uo="0.1.0",Go="1.2.2",Ho="1.3.1",Jo="1.16.1",Wo="1.4.2",Yo="0.8.0",Ko="0.5.1+0",Qo="2.2.7",Xo="0.7.0",ei="1.2.1",ni="1.11.0",ti="1.1.2",ri="1.11.0",si="0.9.4",oi="1.11.0",ii="1.2.1",ai="1.11.0",li="0.1.2",fi="2.5.1",ci="0.1.15",ui="1.9.13",di="1.4.3",_i="1.11.1",mi="1.7.0",vi="0.34.5",pi="1.5.0",hi="0.7.1",gi="0.3.1",yi=null,wi="7.7.0+0",bi="1.0.3",Di="1.0.1",Ei="1.12.0",Fi="1.10.0",Ri="0.1.7",xi="1.11.0",Ti="0.1.4",Ni="0.4.84",Ci="1.11.0",Mi="1.11.0",ki="1.2.13+1",Ai="0.7.7",Si="0.2.7",zi="5.11.0+0",Ii="1.59.0+0",Li="17.4.0+2",Vi={ADTypes:qr,AbstractFFTs:Br,AbstractMCMC:Ur,AbstractPPL:Gr,AbstractTrees:Hr,Accessors:Jr,Adapt:Wr,AliasTables:Yr,ArgCheck:Kr,ArgTools:Qr,ArnoldiMethod:Xr,Artifacts:es,BangBang:ns,Base64:ts,Baselet:rs,Bijectors:ss,CEnum:os,ChainRules:is,ChainRulesCore:as,Chairmarks:ls,ChangesOfVariables:fs,CommonSolve:cs,CommonSubexpressions:us,Compat:ds,CompilerSupportLibraries_jll:_s,CompositionsBase:ms,ConsoleProgressMonitor:vs,ConstructionBase:ps,DataAPI:hs,DataStructures:gs,DataValueInterfaces:ys,Dates:ws,DefineSingletons:bs,DensityInterface:Ds,DiffResults:Es,DiffRules:Fs,DifferentiationInterface:Rs,Distributed:xs,Distributions:Ts,DocStringExtensions:Ns,Downloads:Cs,DynamicPPL:Ms,Enzyme:ks,EnzymeCore:As,Enzyme_jll:Ss,ExprTools:zs,FileWatching:Is,FillArrays:Ls,FiniteDifferences:Vs,ForwardDiff:Os,FunctionWrappers:js,Functors:Ps,Future:Zs,GPUArraysCore:$s,GPUCompiler:qs,Graphs:Bs,HypergeometricFunctions:Us,IRTools:Gs,Inflate:Hs,InitialValues:Js,InteractiveUtils:Ws,InverseFunctions:Ys,IrrationalConstants:Ks,IteratorInterfaceExtensions:Qs,JLLWrappers:Xs,JSON:"0.21.4",LLVM:eo,LLVMExtra_jll:no,LazyArtifacts:to,LeftChildRightSiblingTrees:ro,LibCURL:so,LibCURL_jll:oo,LibGit2:io,LibGit2_jll:ao,LibSSH2_jll:lo,LibTracyClient_jll:fo,Libdl:co,LinearAlgebra:uo,LogDensityProblems:_o,LogExpFunctions:mo,Logging:vo,LoggingExtras:po,MacroTools:ho,MappedArrays:go,Markdown:yo,MbedTLS_jll:wo,MicroCollections:bo,Missings:Do,MistyClosures:Eo,Mmap:Fo,Mooncake:Ro,MozillaCACerts_jll:xo,NaNMath:To,NetworkOptions:No,ObjectFile:Co,OpenBLAS_jll:Mo,OpenLibm_jll:ko,OpenSpecFun_jll:Ao,OrderedCollections:So,PDMats:zo,Parsers:Io,Pkg:Lo,PrecompileTools:Vo,Preferences:Oo,Printf:jo,ProgressLogging:Po,ProgressMeter:Zo,PtrArrays:$o,QuadGK:qo,Random:Bo,RealDot:Uo,Reexport:Go,Requires:Ho,ReverseDiff:Jo,Richardson:Wo,Rmath:Yo,Rmath_jll:Ko,Roots:Qo,SHA:Xo,Scratch:ei,Serialization:ni,Setfield:ti,SharedArrays:ri,SimpleTraits:si,Sockets:oi,SortingAlgorithms:ii,SparseArrays:ai,SparseInverseSubset:li,SpecialFunctions:fi,SplittablesBase:ci,StaticArrays:ui,StaticArraysCore:di,Statistics:_i,StatsAPI:mi,StatsBase:vi,StatsFuns:pi,StructArrays:hi,StructIO:gi,SuiteSparse:yi,SuiteSparse_jll:wi,TOML:bi,TableTraits:Di,Tables:Ei,Tar:Fi,TerminalLoggers:Ri,Test:xi,Tracy:Ti,Transducers:Ni,UUIDs:Ci,Unicode:Mi,Zlib_jll:ki,Zygote:Ai,ZygoteRules:Si,libblastrampoline_jll:zi,nghttp2_jll:Ii,p7zip_jll:Li},Oi=`@model function assume_dirichlet()
    a ~ Dirichlet([1.0, 5.0])
end

@register assume_dirichlet()`,ji=`@model function assume_lkjcholu()
    a ~ LKJCholesky(5, 1.0, 'U')
end

@register assume_lkjcholu()`,Pi=`@model function demo_assume_matrix_observe_matrix_index(
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

@register demo_assume_matrix_observe_matrix_index()`,Zi=`@model function demo_assume_multivariate_observe(x = [1.5, 2.0])
    # Multivariate \`assume\` and \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zero(x), Diagonal(s))
    x ~ MvNormal(m, Diagonal(s))
end
@register demo_assume_multivariate_observe()`,$i=`@model function demo_assume_multivariate_observe_literal()
    # multivariate \`assume\` and literal \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zeros(2), Diagonal(s))
    [1.5, 2.0] ~ MvNormal(m, Diagonal(s))
end

@register demo_assume_multivariate_observe_literal()`,qi=`@model function dot_assume(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 5)
    a .~ Normal()
end

@register dot_assume()`,Bi=`@model function dot_observe(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    x .~ Normal(a)
end

@register dot_observe()`,Ui=`@model function dynamic_constraint()
    a ~ Normal()
    b ~ truncated(Normal(); lower = a)
end

@register dynamic_constraint()`,Gi=`@model function multiple_constraints_same_var(::Type{TV} = Vector{Float64}) where {TV}
    x = TV(undef, 5)
    x[1] ~ Normal()
    x[2] ~ InverseGamma(2, 3)
    x[3] ~ truncated(Normal(), -5, 20)
    x[4:5] ~ Dirichlet([1.0, 2.0])
end

@register multiple_constraints_same_var()`,Hi=`#=
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

@register multithreaded([1.5, 2.0, 2.5, 1.5, 2.0, 2.5])`,Ji=`@model function n010(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 10)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

@register n010()`,Wi=`@model function n050(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 50)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

@register n050()`,Yi=`@model function assume_mvnormal()
    a ~ MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0])
end

@register assume_mvnormal()`,Ki=`@model function n100(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 100)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

@register n100()`,Qi=`@model function n500(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 500)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

@register n500()`,Xi=`@model function observe_index(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end

@register observe_index()`,ea=`@model function observe_literal()
    a ~ Normal()
    1.5 ~ Normal(a)
end

@register observe_literal()`,na=`@model function observe_multivariate(
    x = [1.5, 2.0, 2.5],
    ::Type{TV} = Vector{Float64},
) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    x ~ MvNormal(a, I)
end

@register observe_multivariate()`,ta=`@model function inner2(x, a)
    x ~ Normal(a)
end
@model function observe_submodel(x = 1.5)
    a ~ Normal()
    _ignore ~ to_submodel(inner2(x, a))
end

@register observe_submodel()`,ra=`J = 8
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

@register pdb_eight_schools_centered(J, y, sigma)`,sa=`J = 8
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

@register pdb_eight_schools_noncentered(J, y, sigma)`,oa=`@model function assume_normal()
    a ~ Normal()
end

@register assume_normal()`,ia=`@model function inner1()
    return a ~ Normal()
end
@model function assume_submodel()
    a ~ to_submodel(inner1())
    x ~ Normal(a)
end

@register assume_submodel()`,aa=`@model function assume_wishart()
    a ~ Wishart(7, [1.0 0.5; 0.5 1.0])
end

@register assume_wishart()`,la=`#= 
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

@register control_flow()`,fa=`@model function demo_assume_dot_observe(x = [1.5, 2.0])
    # \`assume\` and \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    x .~ Normal(m, sqrt(s))
end

@register demo_assume_dot_observe()`,ca=`@model function demo_assume_dot_observe_literal()
    # \`assume\` and literal \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    [1.5, 2.0] .~ Normal(m, sqrt(s))
end

@register demo_assume_dot_observe_literal()`,ua=`@model function demo_assume_index_observe(
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

@register demo_assume_index_observe()`,da={assume_dirichlet:Oi,assume_lkjcholu:ji,demo_assume_matrix_observe_matrix_index:Pi,demo_assume_multivariate_observe:Zi,demo_assume_multivariate_observe_literal:$i,dot_assume:qi,dot_observe:Bi,dynamic_constraint:Ui,multiple_constraints_same_var:Gi,multithreaded:Hi,n010:Ji,n050:Wi,assume_mvnormal:Yi,n100:Ki,n500:Qi,observe_index:Xi,observe_literal:ea,observe_multivariate:na,observe_submodel:ta,pdb_eight_schools_centered:ra,pdb_eight_schools_noncentered:sa,assume_normal:oa,assume_submodel:ia,assume_wishart:aa,control_flow:la,demo_assume_dot_observe:fa,demo_assume_dot_observe_literal:ca,demo_assume_index_observe:ua};var _a=X('<th class="svelte-13swsff"> </th>'),ma=X('<td class="svelte-13swsff"> </td>'),va=X('<a class="issue svelte-13swsff" target="_blank">(?)</a>'),pa=X('<td class="svelte-13swsff"><!> <span> </span></td>'),ha=X('<tr class="svelte-13swsff"><td class="svelte-13swsff"> <div class="model-definition svelte-13swsff"><pre> </pre></div></td><!></tr>'),ga=X('<tr class="svelte-13swsff"><td class="svelte-13swsff"> </td><td class="svelte-13swsff"> </td></tr>'),ya=X(`<div id="main-wrapper" class="svelte-13swsff"><main class="svelte-13swsff"><h1>Turing AD tests</h1> <p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p> <p>This page is intended as a brief overview of how different AD
            backends perform on a variety of Turing.jl models. Note that the
            inclusion of any AD backend here does not imply an endorsement from
            the Turing team; this table is purely for information.</p> <ul class="notes svelte-13swsff"><li>You can hover over the model names to see their definitions.</li> <li>The definitions of the AD types can be found in <a href="https://github.com/TuringLang/ADTests/blob/main/main.jl" target="_blank">the source code</a>.</li> <li><b>Numbers</b> indicate the time taken to calculate the gradient
                of the log density of the model using the specified AD type,
                divided by the time taken to calculate the log density itself
                (in AD speak, the primal). Basically: <b>smaller means faster.</b></li> <li>'<span class="wrong">wrong</span>' means that AD ran but the
                result was not correct. If this happens you should be very wary!
                Note that this is done by comparing against the result obtained
                using ForwardDiff, i.e., ForwardDiff is by definition always
                'correct'.</li> <li>'<span class="error">error</span>' means that AD didn't run.</li> <li>Some of the 'wrong' or 'error' entries have question marks next
                to them. These will link to a GitHub issue or other page that
                describes the problem.</li></ul> <h2>Results</h2> <p><a href="adtests.json" target="_blank" download="">Download the raw data (JSON)</a></p> <table id="results" class="svelte-13swsff"><thead><tr class="svelte-13swsff"><th class="svelte-13swsff">Model name \\\\ AD type</th><!></tr></thead><tbody></tbody></table> <h2>Manifest</h2> <p>The tests above were run with the following package versions:</p> <table id="manifest" class="svelte-13swsff"><thead><tr class="svelte-13swsff"><th class="svelte-13swsff">Package</th><th class="svelte-13swsff">Version</th></tr></thead><tbody></tbody></table></main></div>`);function wa(e,n){kn(n,!1);const t=Object.keys(Ze),r=Object.keys(Ze[t[0]]);console.log("Models: ",t),console.log("AD types: ",r);function o(b){return Object.entries(b).sort(([g,_],[p,$])=>g.localeCompare(p))}const s="https://github.com/EnzymeAD/Enzyme.jl/issues/1995",a="https://github.com/chalk-lab/Mooncake.jl/issues/570",l="https://github.com/EnzymeAD/Enzyme.jl/issues/2387",d={assume_mvnormal__EnzymeForward:s,assume_wishart__EnzymeForward:s,multithreaded__Mooncake:a,dot_assume_observe_index__EnzymeForward:l,dot_assume_observe_index__EnzymeReverse:l};_r();var u=ya(),v=D(u),m=V(D(v),12),i=D(m),f=D(i),c=V(D(f));be(c,1,()=>r,we,(b,g)=>{var _=_a(),p=D(_);te(()=>Y(p,A(g))),q(b,_)});var F=V(i);be(F,5,()=>o(Ze),we,(b,g)=>{let _=()=>A(g)[0],p=()=>A(g)[1];var $=ha(),z=D($),T=D(z),ee=V(T),H=D(ee),J=D(H),le=V(z);be(le,1,()=>o(p()),we,(je,fe)=>{let ce=()=>A(fe)[0],W=()=>A(fe)[1];var ue=Yt(),he=Rt(ue);{var Xn=ne=>{var de=ma(),ge=D(de);te(()=>Y(ge,W())),q(ne,de)},et=ne=>{var de=pa(),ge=D(de);{var nt=Pe=>{var rn=va();te(()=>cr(rn,"href",d[`${_()}__${ce()}`])),q(Pe,rn)};hn(ge,Pe=>{d[`${_()}__${ce()}`]&&Pe(nt)})}var tn=V(ge,2),tt=D(tn);te(()=>{ar(tn,1,or(W()),"svelte-13swsff"),Y(tt,W())}),q(ne,de)};hn(he,ne=>{typeof W()=="number"?ne(Xn):ne(et,!1)})}q(je,ue)}),te(()=>{Y(T,`${_()??""} `),Y(J,da[_()])}),q(b,$)});var R=V(m,6),M=V(D(R));be(M,5,()=>o(Vi),we,(b,g)=>{let _=()=>A(g)[0],p=()=>A(g)[1];var $=ga(),z=D($),T=D(z),ee=V(z),H=D(ee);te(()=>{Y(T,_()),Y(H,p()===null?"":`v${p()}`)}),q(b,$)}),q(e,u),An()}Kt(wa,{target:document.getElementById("app")});
