(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const sn=!1;var Dn=Array.isArray,tr=Array.prototype.indexOf,Be=Array.from,sr=Object.defineProperty,on=Object.getOwnPropertyDescriptor,En=Object.getOwnPropertyDescriptors,xn=Object.getPrototypeOf,an=Object.isExtensible;function or(e){return e()}function qe(e){for(var n=0;n<e.length;n++)e[n]()}const V=2,Fn=4,ze=8,Tn=16,$=32,ie=64,xe=128,C=256,Fe=512,T=1024,I=2048,Q=4096,j=8192,Se=16384,ir=32768,Ue=65536,ar=1<<19,Rn=1<<20,ln=1<<21,fn=Symbol("$state");function Nn(e){return e===this.v}function lr(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Cn(e){return!lr(e,this.v)}function fr(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ur(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function cr(e){throw new Error("https://svelte.dev/e/effect_orphan")}function dr(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}let Ve=!1,_r=!1;function mr(){Ve=!0}const He=1,Je=2,Mn=4,vr=8,pr=16,hr=2,gr=Symbol(),br="http://www.w3.org/1999/xhtml";let y=null;function un(e){y=e}function kn(e,n=!1,r){var t=y={p:y,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};Ve&&!n&&(y.l={s:null,u:null,r1:[],r2:Te(!1)}),Nr(()=>{t.d=!0})}function An(e){const n=y;if(n!==null){const a=n.e;if(a!==null){var r=h,t=b;n.e=null;try{for(var o=0;o<a.length;o++){var s=a[o];oe(s.effect),se(s.reaction),$n(s.fn)}}finally{oe(r),se(t)}}y=n.p,n.m=!0}return{}}function We(){return!Ve||y!==null&&y.l===null}function Ye(e){var n=V|I,r=b!==null&&(b.f&V)!==0?b:null;return h===null||r!==null&&(r.f&C)!==0?n|=C:h.f|=Rn,{ctx:y,deps:null,effects:null,equals:Nn,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:r??h}}function yr(e){const n=Ye(e);return n.equals=Cn,n}function zn(e){var n=e.effects;if(n!==null){e.effects=null;for(var r=0;r<n.length;r+=1)U(n[r])}}function wr(e){for(var n=e.parent;n!==null;){if((n.f&V)===0)return n;n=n.parent}return null}function Sn(e){var n,r=h;oe(wr(e));try{zn(e),n=Yn(e)}finally{oe(r)}return n}function Vn(e){var n=Sn(e),r=(B||(e.f&C)!==0)&&e.deps!==null?Q:T;z(e,r),e.equals(n)||(e.v=n,e.wv=Jn())}const _e=new Map;function Te(e,n){var r={f:0,v:e,reactions:null,equals:Nn,rv:0,wv:0};return r}function Dr(e,n=!1){var t;const r=Te(e);return n||(r.equals=Cn),Ve&&y!==null&&y.l!==null&&((t=y.l).s??(t.s=[])).push(r),r}function cn(e,n){if(!e.equals(n)){var r=e.v;ve?_e.set(e,n):_e.set(e,r),e.v=n,(e.f&V)!==0&&((e.f&I)!==0&&Sn(e),z(e,(e.f&C)===0?T:Q)),e.wv=Jn(),In(e,I),We()&&h!==null&&(h.f&T)!==0&&(h.f&($|ie))===0&&(k===null?Ir([e]):k.push(e))}return n}function In(e,n){var r=e.reactions;if(r!==null)for(var t=We(),o=r.length,s=0;s<o;s++){var a=r[s],l=a.f;(l&I)===0&&(!t&&a===h||(z(a,n),(l&(T|C))!==0&&((l&V)!==0?In(a,Q):Oe(a))))}}let Er=!1;var dn,Ln,On,jn;function xr(){if(dn===void 0){dn=window,Ln=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,r=Text.prototype;On=on(n,"firstChild").get,jn=on(n,"nextSibling").get,an(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),an(r)&&(r.__t=void 0)}}function Ke(e=""){return document.createTextNode(e)}function Qe(e){return On.call(e)}function Ie(e){return jn.call(e)}function D(e,n){return Qe(e)}function Fr(e,n){{var r=Qe(e);return r instanceof Comment&&r.data===""?Ie(r):r}}function L(e,n=1,r=!1){let t=e;for(;n--;)t=Ie(t);return t}function Tr(e){e.textContent=""}function Zn(e){h===null&&b===null&&cr(),b!==null&&(b.f&C)!==0&&h===null&&ur(),ve&&fr()}function Rr(e,n){var r=n.last;r===null?n.last=n.first=e:(r.next=e,e.prev=r,n.last=e)}function ae(e,n,r,t=!0){var o=h,s={ctx:y,deps:null,nodes_start:null,nodes_end:null,f:e|I,first:null,fn:n,last:null,next:null,parent:o,prev:null,teardown:null,transitions:null,wv:0};if(r)try{nn(s),s.f|=ir}catch(d){throw U(s),d}else n!==null&&Oe(s);var a=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(Rn|xe))===0;if(!a&&t&&(o!==null&&Rr(s,o),b!==null&&(b.f&V)!==0)){var l=b;(l.effects??(l.effects=[])).push(s)}return s}function Nr(e){const n=ae(ze,null,!1);return z(n,T),n.teardown=e,n}function _n(e){Zn();var n=h!==null&&(h.f&$)!==0&&y!==null&&!y.m;if(n){var r=y;(r.e??(r.e=[])).push({fn:e,effect:h,reaction:b})}else{var t=$n(e);return t}}function Cr(e){return Zn(),kr(e)}function Mr(e){const n=ae(ie,e,!0);return(r={})=>new Promise(t=>{r.outro?Re(n,()=>{U(n),t(void 0)}):(U(n),t(void 0))})}function $n(e){return ae(Fn,e,!1)}function kr(e){return ae(ze,e,!0)}function re(e,n=[],r=Ye){const t=n.map(r);return Xe(()=>e(...t.map(A)))}function Xe(e,n=0){return ae(ze|Tn|n,e,!0)}function me(e,n=!0){return ae(ze|$,e,!0,n)}function qn(e){var n=e.teardown;if(n!==null){const r=ve,t=b;mn(!0),se(null);try{n.call(null)}finally{mn(r),se(t)}}}function Pn(e,n=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var t=r.next;(r.f&ie)!==0?r.parent=null:U(r,n),r=t}}function Ar(e){for(var n=e.first;n!==null;){var r=n.next;(n.f&$)===0&&U(n),n=r}}function U(e,n=!0){var r=!1;(n||(e.f&ar)!==0)&&e.nodes_start!==null&&(zr(e.nodes_start,e.nodes_end),r=!0),Pn(e,n&&!r),Ae(e,0),z(e,Se);var t=e.transitions;if(t!==null)for(const s of t)s.stop();qn(e);var o=e.parent;o!==null&&o.first!==null&&Gn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function zr(e,n){for(;e!==null;){var r=e===n?null:Ie(e);e.remove(),e=r}}function Gn(e){var n=e.parent,r=e.prev,t=e.next;r!==null&&(r.next=t),t!==null&&(t.prev=r),n!==null&&(n.first===e&&(n.first=t),n.last===e&&(n.last=r))}function Re(e,n){var r=[];en(e,r,!0),Bn(r,()=>{U(e),n&&n()})}function Bn(e,n){var r=e.length;if(r>0){var t=()=>--r||n();for(var o of e)o.out(t)}else n()}function en(e,n,r){if((e.f&j)===0){if(e.f^=j,e.transitions!==null)for(const a of e.transitions)(a.is_global||r)&&n.push(a);for(var t=e.first;t!==null;){var o=t.next,s=(t.f&Ue)!==0||(t.f&$)!==0;en(t,n,s?r:!1),t=o}}}function Ne(e){Un(e,!0)}function Un(e,n){if((e.f&j)!==0){e.f^=j,(e.f&T)===0&&(e.f^=T),pe(e)&&(z(e,I),Oe(e));for(var r=e.first;r!==null;){var t=r.next,o=(r.f&Ue)!==0||(r.f&$)!==0;Un(r,o?n:!1),r=t}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&s.in()}}let Ce=[];function Sr(){var e=Ce;Ce=[],qe(e)}function Vr(e){Ce.length===0&&queueMicrotask(Sr),Ce.push(e)}let De=!1,Pe=!1,Me=null,K=!1,ve=!1;function mn(e){ve=e}let Ee=[];let b=null,O=!1;function se(e){b=e}let h=null;function oe(e){h=e}let Z=null,E=null,N=0,k=null;function Ir(e){k=e}let Hn=1,ke=0,B=!1;function Jn(){return++Hn}function pe(e){var m;var n=e.f;if((n&I)!==0)return!0;if((n&Q)!==0){var r=e.deps,t=(n&C)!==0;if(r!==null){var o,s,a=(n&Fe)!==0,l=t&&h!==null&&!B,d=r.length;if(a||l){var c=e,v=c.parent;for(o=0;o<d;o++)s=r[o],(a||!((m=s==null?void 0:s.reactions)!=null&&m.includes(c)))&&(s.reactions??(s.reactions=[])).push(c);a&&(c.f^=Fe),l&&v!==null&&(v.f&C)===0&&(c.f^=C)}for(o=0;o<d;o++)if(s=r[o],pe(s)&&Vn(s),s.wv>e.wv)return!0}(!t||h!==null&&!B)&&z(e,T)}return!1}function Lr(e,n){for(var r=n;r!==null;){if((r.f&xe)!==0)try{r.fn(e);return}catch{r.f^=xe}r=r.parent}throw De=!1,e}function vn(e){return(e.f&Se)===0&&(e.parent===null||(e.parent.f&xe)===0)}function Le(e,n,r,t){if(De){if(r===null&&(De=!1),vn(n))throw e;return}if(r!==null&&(De=!0),Lr(e,n),vn(n))throw e}function Wn(e,n,r=!0){var t=e.reactions;if(t!==null)for(var o=0;o<t.length;o++){var s=t[o];Z!=null&&Z.includes(e)||((s.f&V)!==0?Wn(s,n,!1):n===s&&(r?z(s,I):(s.f&T)!==0&&z(s,Q),Oe(s)))}}function Yn(e){var f;var n=E,r=N,t=k,o=b,s=B,a=Z,l=y,d=O,c=e.f;E=null,N=0,k=null,B=(c&C)!==0&&(O||!K||b===null),b=(c&($|ie))===0?e:null,Z=null,un(e.ctx),O=!1,ke++,e.f|=ln;try{var v=(0,e.fn)(),m=e.deps;if(E!==null){var i;if(Ae(e,N),m!==null&&N>0)for(m.length=N+E.length,i=0;i<E.length;i++)m[N+i]=E[i];else e.deps=m=E;if(!B)for(i=N;i<m.length;i++)((f=m[i]).reactions??(f.reactions=[])).push(e)}else m!==null&&N<m.length&&(Ae(e,N),m.length=N);if(We()&&k!==null&&!O&&m!==null&&(e.f&(V|Q|I))===0)for(i=0;i<k.length;i++)Wn(k[i],e);return o!==null&&o!==e&&(ke++,k!==null&&(t===null?t=k:t.push(...k))),v}finally{E=n,N=r,k=t,b=o,B=s,Z=a,un(l),O=d,e.f^=ln}}function Or(e,n){let r=n.reactions;if(r!==null){var t=tr.call(r,e);if(t!==-1){var o=r.length-1;o===0?r=n.reactions=null:(r[t]=r[o],r.pop())}}r===null&&(n.f&V)!==0&&(E===null||!E.includes(n))&&(z(n,Q),(n.f&(C|Fe))===0&&(n.f^=Fe),zn(n),Ae(n,0))}function Ae(e,n){var r=e.deps;if(r!==null)for(var t=n;t<r.length;t++)Or(e,r[t])}function nn(e){var n=e.f;if((n&Se)===0){z(e,T);var r=h,t=y,o=K;h=e,K=!0;try{(n&Tn)!==0?Ar(e):Pn(e),qn(e);var s=Yn(e);e.teardown=typeof s=="function"?s:null,e.wv=Hn;var a=e.deps,l;sn&&_r&&e.f&I}catch(d){Le(d,e,r,t||e.ctx)}finally{K=o,h=r}}}function jr(){try{dr()}catch(e){if(Me!==null)Le(e,Me,null);else throw e}}function Zr(){var e=K;try{var n=0;for(K=!0;Ee.length>0;){n++>1e3&&jr();var r=Ee,t=r.length;Ee=[];for(var o=0;o<t;o++){var s=qr(r[o]);$r(s)}_e.clear()}}finally{Pe=!1,K=e,Me=null}}function $r(e){var n=e.length;if(n!==0)for(var r=0;r<n;r++){var t=e[r];if((t.f&(Se|j))===0)try{pe(t)&&(nn(t),t.deps===null&&t.first===null&&t.nodes_start===null&&(t.teardown===null?Gn(t):t.fn=null))}catch(o){Le(o,t,null,t.ctx)}}}function Oe(e){Pe||(Pe=!0,queueMicrotask(Zr));for(var n=Me=e;n.parent!==null;){n=n.parent;var r=n.f;if((r&(ie|$))!==0){if((r&T)===0)return;n.f^=T}}Ee.push(n)}function qr(e){for(var n=[],r=e;r!==null;){var t=r.f,o=(t&($|ie))!==0,s=o&&(t&T)!==0;if(!s&&(t&j)===0){if((t&Fn)!==0)n.push(r);else if(o)r.f^=T;else try{pe(r)&&nn(r)}catch(d){Le(d,r,null,r.ctx)}var a=r.first;if(a!==null){r=a;continue}}var l=r.parent;for(r=r.next;r===null&&l!==null;)r=l.next,l=l.parent}return n}function A(e){var n=e.f,r=(n&V)!==0;if(b!==null&&!O){if(!(Z!=null&&Z.includes(e))){var t=b.deps;e.rv<ke&&(e.rv=ke,E===null&&t!==null&&t[N]===e?N++:E===null?E=[e]:(!B||!E.includes(e))&&E.push(e))}}else if(r&&e.deps===null&&e.effects===null){var o=e,s=o.parent;s!==null&&(s.f&C)===0&&(o.f^=C)}return r&&(o=e,pe(o)&&Vn(o)),ve&&_e.has(e)?_e.get(e):e.v}function Pr(e){var n=O;try{return O=!0,e()}finally{O=n}}const Gr=-7169;function z(e,n){e.f=e.f&Gr|n}function Br(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(fn in e)Ge(e);else if(!Array.isArray(e))for(let n in e){const r=e[n];typeof r=="object"&&r&&fn in r&&Ge(r)}}}function Ge(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let t in e)try{Ge(e[t],n)}catch{}const r=xn(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const t=En(r);for(let o in t){const s=t[o].get;if(s)try{s.call(e)}catch{}}}}}const Ur=["touchstart","touchmove"];function Hr(e){return Ur.includes(e)}const Jr=new Set,pn=new Set;function be(e){var w;var n=this,r=n.ownerDocument,t=e.type,o=((w=e.composedPath)==null?void 0:w.call(e))||[],s=o[0]||e.target,a=0,l=e.__root;if(l){var d=o.indexOf(l);if(d!==-1&&(n===document||n===window)){e.__root=n;return}var c=o.indexOf(n);if(c===-1)return;d<=c&&(a=d)}if(s=o[a]||e.target,s!==n){sr(e,"currentTarget",{configurable:!0,get(){return s||r}});var v=b,m=h;se(null),oe(null);try{for(var i,f=[];s!==null;){var u=s.assignedSlot||s.parentNode||s.host||null;try{var x=s["__"+t];if(x!=null&&(!s.disabled||e.target===s))if(Dn(x)){var[F,...M]=x;F.apply(s,[e,...M])}else x.call(s,e)}catch(g){i?f.push(g):i=g}if(e.cancelBubble||u===n||u===null)break;s=u}if(i){for(let g of f)queueMicrotask(()=>{throw g});throw i}}finally{e.__root=n,delete e.currentTarget,se(v),oe(m)}}}function Wr(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function Kn(e,n){var r=h;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=n)}function X(e,n){var r=(n&hr)!==0,t,o=!e.startsWith("<!>");return()=>{t===void 0&&(t=Wr(o?e:"<!>"+e),t=Qe(t));var s=r||Ln?document.importNode(t,!0):t.cloneNode(!0);return Kn(s,s),s}}function Yr(){var e=document.createDocumentFragment(),n=document.createComment(""),r=Ke();return e.append(n,r),Kn(n,r),e}function P(e,n){e!==null&&e.before(n)}function Y(e,n){var r=n==null?"":typeof n=="object"?n+"":n;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r+"")}function Kr(e,n){return Qr(e,n)}const te=new Map;function Qr(e,{target:n,anchor:r,props:t={},events:o,context:s,intro:a=!0}){xr();var l=new Set,d=m=>{for(var i=0;i<m.length;i++){var f=m[i];if(!l.has(f)){l.add(f);var u=Hr(f);n.addEventListener(f,be,{passive:u});var x=te.get(f);x===void 0?(document.addEventListener(f,be,{passive:u}),te.set(f,1)):te.set(f,x+1)}}};d(Be(Jr)),pn.add(d);var c=void 0,v=Mr(()=>{var m=r??n.appendChild(Ke());return me(()=>{if(s){kn({});var i=y;i.c=s}o&&(t.$$events=o),c=e(m,t)||{},s&&An()}),()=>{var u;for(var i of l){n.removeEventListener(i,be);var f=te.get(i);--f===0?(document.removeEventListener(i,be),te.delete(i)):te.set(i,f)}pn.delete(d),m!==r&&((u=m.parentNode)==null||u.removeChild(m))}});return Xr.set(c,v),c}let Xr=new WeakMap;function hn(e,n,[r,t]=[0,0]){var o=e,s=null,a=null,l=gr,d=r>0?Ue:0,c=!1;const v=(i,f=!0)=>{c=!0,m(f,i)},m=(i,f)=>{l!==(l=i)&&(l?(s?Ne(s):f&&(s=me(()=>f(o))),a&&Re(a,()=>{a=null})):(a?Ne(a):f&&(a=me(()=>f(o,[r+1,t]))),s&&Re(s,()=>{s=null})))};Xe(()=>{c=!1,n(v),c||m(null,null)},d)}function ye(e,n){return n}function et(e,n,r,t){for(var o=[],s=n.length,a=0;a<s;a++)en(n[a].e,o,!0);var l=s>0&&o.length===0&&r!==null;if(l){var d=r.parentNode;Tr(d),d.append(r),t.clear(),G(e,n[0].prev,n[s-1].next)}Bn(o,()=>{for(var c=0;c<s;c++){var v=n[c];l||(t.delete(v.k),G(e,v.prev,v.next)),U(v.e,!l)}})}function we(e,n,r,t,o,s=null){var a=e,l={flags:n,items:new Map,first:null},d=(n&Mn)!==0;if(d){var c=e;a=c.appendChild(Ke())}var v=null,m=!1,i=yr(()=>{var f=r();return Dn(f)?f:f==null?[]:Be(f)});Xe(()=>{var f=A(i),u=f.length;m&&u===0||(m=u===0,nt(f,l,a,o,n,t,r),s!==null&&(u===0?v?Ne(v):v=me(()=>s(a)):v!==null&&Re(v,()=>{v=null})),A(i))})}function nt(e,n,r,t,o,s,a){var fe,ue,W,ce;var l=(o&vr)!==0,d=(o&(He|Je))!==0,c=e.length,v=n.items,m=n.first,i=m,f,u=null,x,F=[],M=[],w,g,_,p;if(l)for(p=0;p<c;p+=1)w=e[p],g=s(w,p),_=v.get(g),_!==void 0&&((fe=_.a)==null||fe.measure(),(x??(x=new Set)).add(_));for(p=0;p<c;p+=1){if(w=e[p],g=s(w,p),_=v.get(g),_===void 0){var q=i?i.e.nodes_start:r;u=tt(q,n,u,u===null?n.first:u.next,w,g,p,t,o,a),v.set(g,u),F=[],M=[],i=u.next;continue}if(d&&rt(_,w,p,o),(_.e.f&j)!==0&&(Ne(_.e),l&&((ue=_.a)==null||ue.unfix(),(x??(x=new Set)).delete(_))),_!==i){if(f!==void 0&&f.has(_)){if(F.length<M.length){var S=M[0],R;u=S.prev;var ee=F[0],H=F[F.length-1];for(R=0;R<F.length;R+=1)gn(F[R],S,r);for(R=0;R<M.length;R+=1)f.delete(M[R]);G(n,ee.prev,H.next),G(n,u,ee),G(n,H,S),i=S,u=H,p-=1,F=[],M=[]}else f.delete(_),gn(_,i,r),G(n,_.prev,_.next),G(n,_,u===null?n.first:u.next),G(n,u,_),u=_;continue}for(F=[],M=[];i!==null&&i.k!==g;)(i.e.f&j)===0&&(f??(f=new Set)).add(i),M.push(i),i=i.next;if(i===null)continue;_=i}F.push(_),u=_,i=_.next}if(i!==null||f!==void 0){for(var J=f===void 0?[]:Be(f);i!==null;)(i.e.f&j)===0&&J.push(i),i=i.next;var le=J.length;if(le>0){var je=(o&Mn)!==0&&c===0?r:null;if(l){for(p=0;p<le;p+=1)(W=J[p].a)==null||W.measure();for(p=0;p<le;p+=1)(ce=J[p].a)==null||ce.fix()}et(n,J,je,v)}}l&&Vr(()=>{var he;if(x!==void 0)for(_ of x)(he=_.a)==null||he.apply()}),h.first=n.first&&n.first.e,h.last=u&&u.e}function rt(e,n,r,t){(t&He)!==0&&cn(e.v,n),(t&Je)!==0?cn(e.i,r):e.i=r}function tt(e,n,r,t,o,s,a,l,d,c){var v=(d&He)!==0,m=(d&pr)===0,i=v?m?Dr(o):Te(o):o,f=(d&Je)===0?a:Te(a),u={i:f,v:i,k:s,a:null,e:null,prev:r,next:t};try{return u.e=me(()=>l(e,i,f,c),Er),u.e.prev=r&&r.e,u.e.next=t&&t.e,r===null?n.first=u:(r.next=u,r.e.next=u.e),t!==null&&(t.prev=u,t.e.prev=u.e),u}finally{}}function gn(e,n,r){for(var t=e.next?e.next.e.nodes_start:r,o=n?n.e.nodes_start:r,s=e.e.nodes_start;s!==t;){var a=Ie(s);o.before(s),s=a}}function G(e,n,r){n===null?e.first=r:(n.next=r,n.e.next=r&&r.e),r!==null&&(r.prev=n,r.e.prev=n&&n.e)}function Qn(e){var n,r,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(n=0;n<o;n++)e[n]&&(r=Qn(e[n]))&&(t&&(t+=" "),t+=r)}else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}function st(){for(var e,n,r=0,t="",o=arguments.length;r<o;r++)(e=arguments[r])&&(n=Qn(e))&&(t&&(t+=" "),t+=n);return t}function ot(e){return typeof e=="object"?st(e):e??""}function it(e,n,r){var t=e==null?"":""+e;return t=t?t+" "+n:n,t===""?null:t}function at(e,n,r,t,o,s){var a=e.__className;if(a!==r||a===void 0){var l=it(r,t);l==null?e.removeAttribute("class"):e.className=l,e.__className=r}return s}const lt=Symbol("is custom element"),ft=Symbol("is html");function ut(e,n,r,t){var o=ct(e);o[n]!==(o[n]=r)&&(r==null?e.removeAttribute(n):typeof r!="string"&&dt(e).includes(n)?e[n]=r:e.setAttribute(n,r))}function ct(e){return e.__attributes??(e.__attributes={[lt]:e.nodeName.includes("-"),[ft]:e.namespaceURI===br})}var bn=new Map;function dt(e){var n=bn.get(e.nodeName);if(n)return n;bn.set(e.nodeName,n=[]);for(var r,t=e,o=Element.prototype;o!==t;){r=En(t);for(var s in r)r[s].set&&n.push(s);t=xn(t)}return n}function _t(e=!1){const n=y,r=n.l.u;if(!r)return;let t=()=>Br(n.s);if(e){let o=0,s={};const a=Ye(()=>{let l=!1;const d=n.s;for(const c in d)d[c]!==s[c]&&(s[c]=d[c],l=!0);return l&&o++,o});t=()=>A(a)}r.b.length&&Cr(()=>{yn(n,t),qe(r.b)}),_n(()=>{const o=Pr(()=>r.m.map(or));return()=>{for(const s of o)typeof s=="function"&&s()}}),r.a.length&&_n(()=>{yn(n,t),qe(r.a)})}function yn(e,n){if(e.l.s)for(const r of e.l.s)A(r);n()}const mt="5";var wn;typeof window<"u"&&((wn=window.__svelte??(window.__svelte={})).v??(wn.v=new Set)).add(mt);mr();const vt={EnzymeForward:2.65,EnzymeReverse:4.18,FiniteDifferences:23.642,ForwardDiff:1.672,Mooncake:7.602,ReverseDiff:30.311,ReverseDiffCompiled:2.996,Zygote:925.786},pt={EnzymeForward:2.488,EnzymeReverse:3.033,FiniteDifferences:22.309,ForwardDiff:1.292,Mooncake:7.372,ReverseDiff:12.563,ReverseDiffCompiled:2.53,Zygote:521.766},ht={EnzymeForward:2.947,EnzymeReverse:4.104,FiniteDifferences:60.657,ForwardDiff:1.274,Mooncake:6.017,ReverseDiff:23.98,ReverseDiffCompiled:2.492,Zygote:"error"},gt={EnzymeForward:3.623,EnzymeReverse:5.457,FiniteDifferences:66.725,ForwardDiff:1.448,Mooncake:8.541,ReverseDiff:29.616,ReverseDiffCompiled:2.83,Zygote:"error"},bt={EnzymeForward:3.577,EnzymeReverse:7.363,FiniteDifferences:67.086,ForwardDiff:1.426,Mooncake:8.345,ReverseDiff:30.33,ReverseDiffCompiled:3.103,Zygote:1436.169},yt={EnzymeForward:3.619,EnzymeReverse:6.921,FiniteDifferences:65.858,ForwardDiff:1.385,Mooncake:8.585,ReverseDiff:28.742,ReverseDiffCompiled:3.006,Zygote:1297.649},wt={EnzymeForward:2.745,EnzymeReverse:2.862,FiniteDifferences:40.888,ForwardDiff:1.377,Mooncake:8.275,ReverseDiff:34.189,ReverseDiffCompiled:3.766,Zygote:1554.907},Dt={EnzymeForward:3.168,EnzymeReverse:4.593,FiniteDifferences:60.225,ForwardDiff:1.229,Mooncake:6.021,ReverseDiff:22.471,ReverseDiffCompiled:2.295,Zygote:"error"},Et={EnzymeForward:3.624,EnzymeReverse:6.202,FiniteDifferences:62.335,ForwardDiff:1.306,Mooncake:7.323,ReverseDiff:25.631,ReverseDiffCompiled:2.749,Zygote:"error"},xt={EnzymeForward:3.65,EnzymeReverse:5.209,FiniteDifferences:63.439,ForwardDiff:1.326,Mooncake:6.714,ReverseDiff:27.484,ReverseDiffCompiled:2.78,Zygote:"error"},Ft={EnzymeForward:3.637,EnzymeReverse:4.707,FiniteDifferences:63.949,ForwardDiff:1.261,Mooncake:7.038,ReverseDiff:27.651,ReverseDiffCompiled:3.009,Zygote:"error"},Tt={EnzymeForward:3.649,EnzymeReverse:4.655,FiniteDifferences:66.641,ForwardDiff:1.294,Mooncake:7.018,ReverseDiff:24.983,ReverseDiffCompiled:2.641,Zygote:"error"},Rt={EnzymeForward:4.564,EnzymeReverse:12.557,FiniteDifferences:149.395,ForwardDiff:2.503,Mooncake:6.314,ReverseDiff:52.869,ReverseDiffCompiled:6.261,Zygote:"error"},Nt={EnzymeForward:3.231,EnzymeReverse:5.581,FiniteDifferences:60.211,ForwardDiff:1.218,Mooncake:6.075,ReverseDiff:20.023,ReverseDiffCompiled:2.04,Zygote:"error"},Ct={EnzymeForward:2.868,EnzymeReverse:1.878,FiniteDifferences:75.936,ForwardDiff:1.327,Mooncake:5.04,ReverseDiff:22.627,ReverseDiffCompiled:2.48,Zygote:"error"},Mt={EnzymeForward:2.669,EnzymeReverse:2.511,FiniteDifferences:28.057,ForwardDiff:1.694,Mooncake:9.985,ReverseDiff:58.106,ReverseDiffCompiled:5.866,Zygote:"error"},kt={EnzymeForward:2.544,EnzymeReverse:2.502,FiniteDifferences:36.487,ForwardDiff:1.324,Mooncake:7.429,ReverseDiff:32.63,ReverseDiffCompiled:2.757,Zygote:1163.492},At={EnzymeForward:4.975,EnzymeReverse:25.8,FiniteDifferences:60.007,ForwardDiff:1.227,Mooncake:13.243,ReverseDiff:20.557,ReverseDiffCompiled:2.288,Zygote:"error"},zt={EnzymeForward:3.21,EnzymeReverse:12.162,FiniteDifferences:15.456,ForwardDiff:1.134,Mooncake:"error",ReverseDiff:"wrong",ReverseDiffCompiled:"error",Zygote:"error"},St={EnzymeForward:4.221,EnzymeReverse:2.034,FiniteDifferences:128.996,ForwardDiff:1.745,Mooncake:4.533,ReverseDiff:24.306,ReverseDiffCompiled:2.563,Zygote:"error"},Vt={EnzymeForward:18.943,EnzymeReverse:2.332,FiniteDifferences:589.254,ForwardDiff:8.378,Mooncake:3.992,ReverseDiff:25.225,ReverseDiffCompiled:2.454,Zygote:"error"},It={EnzymeForward:40.527,EnzymeReverse:2.442,FiniteDifferences:1237.762,ForwardDiff:13.832,Mooncake:3.936,ReverseDiff:25.658,ReverseDiffCompiled:2.507,Zygote:"error"},Lt={EnzymeForward:185.564,EnzymeReverse:2.089,FiniteDifferences:6377.395,ForwardDiff:56.737,Mooncake:3.863,ReverseDiff:24.738,ReverseDiffCompiled:2.513,Zygote:"error"},Ot={EnzymeForward:"error",EnzymeReverse:5.36,FiniteDifferences:38.769,ForwardDiff:1.187,Mooncake:10.69,ReverseDiff:11.628,ReverseDiffCompiled:1.307,Zygote:511.839},jt={EnzymeForward:2.797,EnzymeReverse:2.597,FiniteDifferences:28.114,ForwardDiff:1.126,Mooncake:9.938,ReverseDiff:57.57,ReverseDiffCompiled:5.958,Zygote:"error"},Zt={EnzymeForward:2.645,EnzymeReverse:3.107,FiniteDifferences:27.901,ForwardDiff:1.639,Mooncake:9.079,ReverseDiff:33.035,ReverseDiffCompiled:3.531,Zygote:1566.182},$t={EnzymeForward:2.69,EnzymeReverse:4.049,FiniteDifferences:51.463,ForwardDiff:1.314,Mooncake:6.274,ReverseDiff:28.392,ReverseDiffCompiled:2.674,Zygote:"error"},qt={EnzymeForward:2.383,EnzymeReverse:2.363,FiniteDifferences:24.874,ForwardDiff:1.556,Mooncake:7.306,ReverseDiff:26.866,ReverseDiffCompiled:2.763,Zygote:2176.698},Pt={EnzymeForward:4.328,EnzymeReverse:2.411,FiniteDifferences:136.057,ForwardDiff:1.692,Mooncake:5.902,ReverseDiff:30.935,ReverseDiffCompiled:2.991,Zygote:"error"},Gt={EnzymeForward:4.418,EnzymeReverse:2.393,FiniteDifferences:136.97,ForwardDiff:1.786,Mooncake:5.975,ReverseDiff:31.973,ReverseDiffCompiled:2.991,Zygote:"error"},Bt={EnzymeForward:2.914,EnzymeReverse:3.24,FiniteDifferences:28.41,ForwardDiff:1.213,Mooncake:9.757,ReverseDiff:21.098,ReverseDiffCompiled:2.636,Zygote:1173.456},Ut={EnzymeForward:2.17,EnzymeReverse:2.074,FiniteDifferences:35.594,ForwardDiff:1.267,Mooncake:6.834,ReverseDiff:13.979,ReverseDiffCompiled:1.35,Zygote:1191.837},Ht={EnzymeForward:"error",EnzymeReverse:12.459,FiniteDifferences:42.963,ForwardDiff:1.043,Mooncake:12.441,ReverseDiff:16.994,ReverseDiffCompiled:3.342,Zygote:"error"},Jt={EnzymeForward:2.775,EnzymeReverse:3.387,FiniteDifferences:40.119,ForwardDiff:1.495,Mooncake:9.59,ReverseDiff:20.966,ReverseDiffCompiled:"wrong",Zygote:1141.886},Wt={EnzymeForward:2.655,EnzymeReverse:2.978,FiniteDifferences:38.864,ForwardDiff:1.339,Mooncake:8.329,ReverseDiff:33.529,ReverseDiffCompiled:3.561,Zygote:"error"},Yt={EnzymeForward:2.85,EnzymeReverse:2.541,FiniteDifferences:37.179,ForwardDiff:1.339,Mooncake:8.211,ReverseDiff:30.254,ReverseDiffCompiled:3.746,Zygote:1708.521},$e={assume_beta:vt,assume_dirichlet:pt,demo_assume_index_observe:ht,demo_assume_matrix_observe_matrix_index:gt,demo_assume_multivariate_observe:bt,demo_assume_multivariate_observe_literal:yt,demo_assume_observe_literal:wt,demo_assume_submodel_observe_index_literal:Dt,demo_dot_assume_observe:Et,demo_dot_assume_observe_index:xt,demo_dot_assume_observe_index_literal:Ft,demo_dot_assume_observe_matrix_index:Tt,assume_lkjcholu:Rt,demo_dot_assume_observe_submodel:Nt,dot_assume:Ct,dot_observe:Mt,dynamic_constraint:kt,multiple_constraints_same_var:At,multithreaded:zt,n010:St,n050:Vt,n100:It,n500:Lt,assume_mvnormal:Ot,observe_index:jt,observe_literal:Zt,observe_multivariate:$t,observe_submodel:qt,pdb_eight_schools_centered:Pt,pdb_eight_schools_noncentered:Gt,assume_normal:Bt,assume_submodel:Ut,assume_wishart:Ht,control_flow:Jt,demo_assume_dot_observe:Wt,demo_assume_dot_observe_literal:Yt},Kt="1.14.0",Qt="1.5.0",Xt="5.6.1",es="0.11.0",ns="0.4.5",rs="0.1.42",ts="4.3.0",ss="1.1.3",os="2.5.0",is="1.1.2",as="0.4.0",ls="1.11.0",fs="0.4.4",us="1.11.0",cs="0.1.1",ds="0.15.6",_s="0.5.0",ms="1.72.3",vs="1.25.1",ps="1.3.1",hs="0.1.10",gs="0.2.4",bs="0.3.1",ys="4.16.0",ws="1.1.1+0",Ds="0.1.2",Es="0.1.2",xs="1.5.8",Fs="1.16.0",Ts="0.18.22",Rs="1.0.0",Ns="1.11.0",Cs="0.1.2",Ms="0.4.0",ks="1.1.0",As="1.15.1",zs="0.6.54",Ss="1.11.0",Vs="0.25.120",Is="0.9.4",Ls="1.6.0",Os="0.36.3",js="0.13.44",Zs="0.8.8",$s="0.0.180+0",qs="0.1.10",Ps="1.11.0",Gs="1.13.0",Bs="0.12.32",Us="0.10.38",Hs="1.1.3",Js="0.5.2",Ws="1.11.0",Ys="0.2.0",Ks="1.5.0",Qs="1.12.1",Xs="0.3.28",eo="0.4.14",no="0.1.5",ro="0.3.1",to="1.11.0",so="0.1.17",oo="0.2.4",io="1.0.0",ao="1.7.0",lo="9.4.0",fo="0.0.36+0",uo="1.11.0",co="0.2.0",_o="0.6.4",mo="8.6.0+0",vo="1.11.0",po="1.7.2+0",ho="1.11.0+1",go="0.9.1+6",bo="1.11.0",yo="1.11.0",wo="2.1.2",Do="0.3.29",Eo="1.11.0",xo="1.1.0",Fo="0.5.16",To="0.4.2",Ro="1.11.0",No="2.28.6+0",Co="0.2.0",Mo="1.2.0",ko="2.0.0",Ao="1.11.0",zo="0.4.119",So="2023.12.12",Vo="1.1.3",Io="1.2.0",Lo="0.4.4",Oo="0.3.27+1",jo="0.8.5+0",Zo="0.5.6+0",$o="1.8.0",qo="0.11.35",Po="2.8.3",Go="1.11.0",Bo="1.2.1",Uo="1.4.3",Ho="1.11.0",Jo="0.1.4",Wo="1.10.4",Yo="1.3.0",Ko="2.11.2",Qo="1.11.0",Xo="0.1.0",ei="1.2.2",ni="1.3.1",ri="1.16.1",ti="1.4.2",si="0.8.0",oi="0.5.1+0",ii="2.2.7",ai="0.7.0",li="1.2.1",fi="1.11.0",ui="1.1.2",ci="1.11.0",di="0.9.4",_i="1.11.0",mi="1.2.1",vi="1.11.0",pi="0.1.2",hi="2.5.1",gi="0.1.15",bi="1.9.13",yi="1.4.3",wi="1.11.1",Di="1.7.0",Ei="0.34.5",xi="1.5.0",Fi="0.7.1",Ti="0.3.1",Ri=null,Ni="7.7.0+0",Ci="1.0.3",Mi="1.0.1",ki="1.12.0",Ai="1.10.0",zi="0.1.7",Si="1.11.0",Vi="0.1.4",Ii="0.4.84",Li="1.11.0",Oi="1.11.0",ji="1.2.13+1",Zi="0.7.7",$i="0.2.7",qi="5.11.0+0",Pi="1.59.0+0",Gi="17.4.0+2",Bi={ADTypes:Kt,AbstractFFTs:Qt,AbstractMCMC:Xt,AbstractPPL:es,AbstractTrees:ns,Accessors:rs,Adapt:ts,AliasTables:ss,ArgCheck:os,ArgTools:is,ArnoldiMethod:as,Artifacts:ls,BangBang:fs,Base64:us,Baselet:cs,Bijectors:ds,CEnum:_s,ChainRules:ms,ChainRulesCore:vs,Chairmarks:ps,ChangesOfVariables:hs,CommonSolve:gs,CommonSubexpressions:bs,Compat:ys,CompilerSupportLibraries_jll:ws,CompositionsBase:Ds,ConsoleProgressMonitor:Es,ConstructionBase:xs,DataAPI:Fs,DataStructures:Ts,DataValueInterfaces:Rs,Dates:Ns,DefineSingletons:Cs,DensityInterface:Ms,DiffResults:ks,DiffRules:As,DifferentiationInterface:zs,Distributed:Ss,Distributions:Vs,DocStringExtensions:Is,Downloads:Ls,DynamicPPL:Os,Enzyme:js,EnzymeCore:Zs,Enzyme_jll:$s,ExprTools:qs,FileWatching:Ps,FillArrays:Gs,FiniteDifferences:Bs,ForwardDiff:Us,FunctionWrappers:Hs,Functors:Js,Future:Ws,GPUArraysCore:Ys,GPUCompiler:Ks,Graphs:Qs,HypergeometricFunctions:Xs,IRTools:eo,Inflate:no,InitialValues:ro,InteractiveUtils:to,InverseFunctions:so,IrrationalConstants:oo,IteratorInterfaceExtensions:io,JLLWrappers:ao,JSON:"0.21.4",LLVM:lo,LLVMExtra_jll:fo,LazyArtifacts:uo,LeftChildRightSiblingTrees:co,LibCURL:_o,LibCURL_jll:mo,LibGit2:vo,LibGit2_jll:po,LibSSH2_jll:ho,LibTracyClient_jll:go,Libdl:bo,LinearAlgebra:yo,LogDensityProblems:wo,LogExpFunctions:Do,Logging:Eo,LoggingExtras:xo,MacroTools:Fo,MappedArrays:To,Markdown:Ro,MbedTLS_jll:No,MicroCollections:Co,Missings:Mo,MistyClosures:ko,Mmap:Ao,Mooncake:zo,MozillaCACerts_jll:So,NaNMath:Vo,NetworkOptions:Io,ObjectFile:Lo,OpenBLAS_jll:Oo,OpenLibm_jll:jo,OpenSpecFun_jll:Zo,OrderedCollections:$o,PDMats:qo,Parsers:Po,Pkg:Go,PrecompileTools:Bo,Preferences:Uo,Printf:Ho,ProgressLogging:Jo,ProgressMeter:Wo,PtrArrays:Yo,QuadGK:Ko,Random:Qo,RealDot:Xo,Reexport:ei,Requires:ni,ReverseDiff:ri,Richardson:ti,Rmath:si,Rmath_jll:oi,Roots:ii,SHA:ai,Scratch:li,Serialization:fi,Setfield:ui,SharedArrays:ci,SimpleTraits:di,Sockets:_i,SortingAlgorithms:mi,SparseArrays:vi,SparseInverseSubset:pi,SpecialFunctions:hi,SplittablesBase:gi,StaticArrays:bi,StaticArraysCore:yi,Statistics:wi,StatsAPI:Di,StatsBase:Ei,StatsFuns:xi,StructArrays:Fi,StructIO:Ti,SuiteSparse:Ri,SuiteSparse_jll:Ni,TOML:Ci,TableTraits:Mi,Tables:ki,Tar:Ai,TerminalLoggers:zi,Test:Si,Tracy:Vi,Transducers:Ii,UUIDs:Li,Unicode:Oi,Zlib_jll:ji,Zygote:Zi,ZygoteRules:$i,libblastrampoline_jll:qi,nghttp2_jll:Pi,p7zip_jll:Gi},Ui=`@model function assume_beta()
    a ~ Beta(2, 2)
end

@register assume_beta()`,Hi=`@model function assume_dirichlet()
    a ~ Dirichlet([1.0, 5.0])
end

@register assume_dirichlet()`,Ji=`@model function demo_assume_index_observe(
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

@register demo_assume_index_observe()`,Wi=`@model function demo_assume_matrix_observe_matrix_index(
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

@register demo_assume_matrix_observe_matrix_index()`,Yi=`@model function demo_assume_multivariate_observe(x = [1.5, 2.0])
    # Multivariate \`assume\` and \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zero(x), Diagonal(s))
    x ~ MvNormal(m, Diagonal(s))
end
@register demo_assume_multivariate_observe()`,Ki=`@model function demo_assume_multivariate_observe_literal()
    # multivariate \`assume\` and literal \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zeros(2), Diagonal(s))
    [1.5, 2.0] ~ MvNormal(m, Diagonal(s))
end

@register demo_assume_multivariate_observe_literal()`,Qi=`@model function demo_assume_observe_literal()
    # univariate \`assume\` and literal \`observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    1.5 ~ Normal(m, sqrt(s))
    2.0 ~ Normal(m, sqrt(s))
end

@register demo_assume_observe_literal()`,Xi=`@model function _prior_dot_assume(::Type{TV} = Vector{Float64}) where {TV}
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

@register demo_assume_submodel_observe_index_literal()`,ea=`@model function demo_dot_assume_observe(
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

@register demo_dot_assume_observe()`,na=`@model function demo_dot_assume_observe_index(
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

@register demo_dot_assume_observe_index()`,ra=`@model function demo_dot_assume_observe_index_literal(
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

@register demo_dot_assume_observe_index_literal()`,ta=`@model function demo_dot_assume_observe_matrix_index(
    x = transpose([1.5 2.0;]),
    ::Type{TV} = Vector{Float64},
) where {TV}
    s = TV(undef, length(x))
    s .~ InverseGamma(2, 3)
    m = TV(undef, length(x))
    m ~ product_distribution(Normal.(0, sqrt.(s)))
    x[:, 1] ~ MvNormal(m, Diagonal(s))
end

@register demo_dot_assume_observe_matrix_index()`,sa=`@model function assume_lkjcholu()
    a ~ LKJCholesky(5, 1.0, 'U')
end

@register assume_lkjcholu()`,oa=`@model function _likelihood_multivariate_observe(s, m, x)
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

@register demo_dot_assume_observe_submodel()`,ia=`@model function dot_assume(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 5)
    a .~ Normal()
end

@register dot_assume()`,aa=`@model function dot_observe(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    x .~ Normal(a)
end

@register dot_observe()`,la=`@model function dynamic_constraint()
    a ~ Normal()
    b ~ truncated(Normal(); lower = a)
end

@register dynamic_constraint()`,fa=`@model function multiple_constraints_same_var(::Type{TV} = Vector{Float64}) where {TV}
    x = TV(undef, 5)
    x[1] ~ Normal()
    x[2] ~ InverseGamma(2, 3)
    x[3] ~ truncated(Normal(), -5, 20)
    x[4:5] ~ Dirichlet([1.0, 2.0])
end

@register multiple_constraints_same_var()`,ua=`#=
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

@register multithreaded([1.5, 2.0, 2.5, 1.5, 2.0, 2.5])`,ca=`@model function n010(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 10)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

@register n010()`,da=`@model function n050(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 50)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

@register n050()`,_a=`@model function n100(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 100)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

@register n100()`,ma=`@model function n500(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 500)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

@register n500()`,va=`@model function assume_mvnormal()
    a ~ MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0])
end

@register assume_mvnormal()`,pa=`@model function observe_index(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end

@register observe_index()`,ha=`@model function observe_literal()
    a ~ Normal()
    1.5 ~ Normal(a)
end

@register observe_literal()`,ga=`@model function observe_multivariate(
    x = [1.5, 2.0, 2.5],
    ::Type{TV} = Vector{Float64},
) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    x ~ MvNormal(a, I)
end

@register observe_multivariate()`,ba=`@model function inner2(x, a)
    x ~ Normal(a)
end
@model function observe_submodel(x = 1.5)
    a ~ Normal()
    _ignore ~ to_submodel(inner2(x, a))
end

@register observe_submodel()`,ya=`J = 8
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

@register pdb_eight_schools_centered(J, y, sigma)`,wa=`J = 8
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

@register pdb_eight_schools_noncentered(J, y, sigma)`,Da=`@model function assume_normal()
    a ~ Normal()
end

@register assume_normal()`,Ea=`@model function inner1()
    return a ~ Normal()
end
@model function assume_submodel()
    a ~ to_submodel(inner1())
    x ~ Normal(a)
end

@register assume_submodel()`,xa=`@model function assume_wishart()
    a ~ Wishart(7, [1.0 0.5; 0.5 1.0])
end

@register assume_wishart()`,Fa=`#= 
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

@register control_flow()`,Ta=`@model function demo_assume_dot_observe(x = [1.5, 2.0])
    # \`assume\` and \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    x .~ Normal(m, sqrt(s))
end

@register demo_assume_dot_observe()`,Ra=`@model function demo_assume_dot_observe_literal()
    # \`assume\` and literal \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    [1.5, 2.0] .~ Normal(m, sqrt(s))
end

@register demo_assume_dot_observe_literal()`,Na={assume_beta:Ui,assume_dirichlet:Hi,demo_assume_index_observe:Ji,demo_assume_matrix_observe_matrix_index:Wi,demo_assume_multivariate_observe:Yi,demo_assume_multivariate_observe_literal:Ki,demo_assume_observe_literal:Qi,demo_assume_submodel_observe_index_literal:Xi,demo_dot_assume_observe:ea,demo_dot_assume_observe_index:na,demo_dot_assume_observe_index_literal:ra,demo_dot_assume_observe_matrix_index:ta,assume_lkjcholu:sa,demo_dot_assume_observe_submodel:oa,dot_assume:ia,dot_observe:aa,dynamic_constraint:la,multiple_constraints_same_var:fa,multithreaded:ua,n010:ca,n050:da,n100:_a,n500:ma,assume_mvnormal:va,observe_index:pa,observe_literal:ha,observe_multivariate:ga,observe_submodel:ba,pdb_eight_schools_centered:ya,pdb_eight_schools_noncentered:wa,assume_normal:Da,assume_submodel:Ea,assume_wishart:xa,control_flow:Fa,demo_assume_dot_observe:Ta,demo_assume_dot_observe_literal:Ra};var Ca=X('<th class="svelte-13swsff"> </th>'),Ma=X('<td class="svelte-13swsff"> </td>'),ka=X('<a class="issue svelte-13swsff" target="_blank">(?)</a>'),Aa=X('<td class="svelte-13swsff"><!> <span> </span></td>'),za=X('<tr class="svelte-13swsff"><td class="svelte-13swsff"> <div class="model-definition svelte-13swsff"><pre> </pre></div></td><!></tr>'),Sa=X('<tr class="svelte-13swsff"><td class="svelte-13swsff"> </td><td class="svelte-13swsff"> </td></tr>'),Va=X(`<div id="main-wrapper" class="svelte-13swsff"><main class="svelte-13swsff"><h1>Turing AD tests</h1> <p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p> <p>This page is intended as a brief overview of how different AD
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
                describes the problem.</li></ul> <h2>Results</h2> <p><a href="adtests.json" target="_blank" download="">Download the raw data (JSON)</a></p> <table id="results" class="svelte-13swsff"><thead><tr class="svelte-13swsff"><th class="svelte-13swsff">Model name \\\\ AD type</th><!></tr></thead><tbody></tbody></table> <h2>Manifest</h2> <p>The tests above were run with the following package versions:</p> <table id="manifest" class="svelte-13swsff"><thead><tr class="svelte-13swsff"><th class="svelte-13swsff">Package</th><th class="svelte-13swsff">Version</th></tr></thead><tbody></tbody></table></main></div>`);function Ia(e,n){kn(n,!1);const r=Object.keys($e),t=Object.keys($e[r[0]]);console.log("Models: ",r),console.log("AD types: ",t);function o(w){return Object.entries(w).sort(([g,_],[p,q])=>g.localeCompare(p))}const s="https://github.com/EnzymeAD/Enzyme.jl/issues/1995",a="https://github.com/chalk-lab/Mooncake.jl/issues/570",l="https://github.com/EnzymeAD/Enzyme.jl/issues/2387",d={assume_mvnormal__EnzymeForward:s,assume_wishart__EnzymeForward:s,multithreaded__Mooncake:a,dot_assume_observe_index__EnzymeForward:l,dot_assume_observe_index__EnzymeReverse:l};_t();var c=Va(),v=D(c),m=L(D(v),12),i=D(m),f=D(i),u=L(D(f));we(u,1,()=>t,ye,(w,g)=>{var _=Ca(),p=D(_);re(()=>Y(p,A(g))),P(w,_)});var x=L(i);we(x,5,()=>o($e),ye,(w,g)=>{let _=()=>A(g)[0],p=()=>A(g)[1];var q=za(),S=D(q),R=D(S),ee=L(R),H=D(ee),J=D(H),le=L(S);we(le,1,()=>o(p()),ye,(je,fe)=>{let ue=()=>A(fe)[0],W=()=>A(fe)[1];var ce=Yr(),he=Fr(ce);{var Xn=ne=>{var de=Ma(),ge=D(de);re(()=>Y(ge,W())),P(ne,de)},er=ne=>{var de=Aa(),ge=D(de);{var nr=Ze=>{var tn=ka();re(()=>ut(tn,"href",d[`${_()}__${ue()}`])),P(Ze,tn)};hn(ge,Ze=>{d[`${_()}__${ue()}`]&&Ze(nr)})}var rn=L(ge,2),rr=D(rn);re(()=>{at(rn,1,ot(W()),"svelte-13swsff"),Y(rr,W())}),P(ne,de)};hn(he,ne=>{typeof W()=="number"?ne(Xn):ne(er,!1)})}P(je,ce)}),re(()=>{Y(R,`${_()??""} `),Y(J,Na[_()])}),P(w,q)});var F=L(m,6),M=L(D(F));we(M,5,()=>o(Bi),ye,(w,g)=>{let _=()=>A(g)[0],p=()=>A(g)[1];var q=Sa(),S=D(q),R=D(S),ee=L(S),H=D(ee);re(()=>{Y(R,_()),Y(H,p()===null?"":`v${p()}`)}),P(w,q)}),P(e,c),An()}Kr(Ia,{target:document.getElementById("app")});
