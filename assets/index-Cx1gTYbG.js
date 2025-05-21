(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const sn=!1;var En=Array.isArray,or=Array.prototype.indexOf,Ue=Array.from,sr=Object.defineProperty,an=Object.getOwnPropertyDescriptor,xn=Object.getOwnPropertyDescriptors,Fn=Object.getPrototypeOf,ln=Object.isExtensible;function ir(e){return e()}function Pe(e){for(var n=0;n<e.length;n++)e[n]()}const V=2,Tn=4,ze=8,Rn=16,$=32,ie=64,xe=128,C=256,Fe=512,T=1024,I=2048,Q=4096,j=8192,Se=16384,ar=32768,He=65536,lr=1<<19,Nn=1<<20,fn=1<<21,un=Symbol("$state");function Cn(e){return e===this.v}function fr(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Mn(e){return!fr(e,this.v)}function ur(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function cr(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function dr(e){throw new Error("https://svelte.dev/e/effect_orphan")}function _r(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}let Ve=!1,mr=!1;function vr(){Ve=!0}const Je=1,We=2,kn=4,pr=8,hr=16,gr=2,br=Symbol(),yr="http://www.w3.org/1999/xhtml";let y=null;function cn(e){y=e}function An(e,n=!1,r){var t=y={p:y,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};Ve&&!n&&(y.l={s:null,u:null,r1:[],r2:Te(!1)}),Nr(()=>{t.d=!0})}function zn(e){const n=y;if(n!==null){const a=n.e;if(a!==null){var r=h,t=b;n.e=null;try{for(var s=0;s<a.length;s++){var o=a[s];se(o.effect),oe(o.reaction),Pn(o.fn)}}finally{se(r),oe(t)}}y=n.p,n.m=!0}return{}}function Ye(){return!Ve||y!==null&&y.l===null}function Ke(e){var n=V|I,r=b!==null&&(b.f&V)!==0?b:null;return h===null||r!==null&&(r.f&C)!==0?n|=C:h.f|=Nn,{ctx:y,deps:null,effects:null,equals:Cn,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:r??h}}function Sn(e){const n=Ke(e);return n.equals=Mn,n}function Vn(e){var n=e.effects;if(n!==null){e.effects=null;for(var r=0;r<n.length;r+=1)U(n[r])}}function wr(e){for(var n=e.parent;n!==null;){if((n.f&V)===0)return n;n=n.parent}return null}function In(e){var n,r=h;se(wr(e));try{Vn(e),n=Qn(e)}finally{se(r)}return n}function Ln(e){var n=In(e),r=(B||(e.f&C)!==0)&&e.deps!==null?Q:T;z(e,r),e.equals(n)||(e.v=n,e.wv=Yn())}const _e=new Map;function Te(e,n){var r={f:0,v:e,reactions:null,equals:Cn,rv:0,wv:0};return r}function Dr(e,n=!1){var t;const r=Te(e);return n||(r.equals=Mn),Ve&&y!==null&&y.l!==null&&((t=y.l).s??(t.s=[])).push(r),r}function dn(e,n){if(!e.equals(n)){var r=e.v;ve?_e.set(e,n):_e.set(e,r),e.v=n,(e.f&V)!==0&&((e.f&I)!==0&&In(e),z(e,(e.f&C)===0?T:Q)),e.wv=Yn(),On(e,I),Ye()&&h!==null&&(h.f&T)!==0&&(h.f&($|ie))===0&&(k===null?Ir([e]):k.push(e))}return n}function On(e,n){var r=e.reactions;if(r!==null)for(var t=Ye(),s=r.length,o=0;o<s;o++){var a=r[o],l=a.f;(l&I)===0&&(!t&&a===h||(z(a,n),(l&(T|C))!==0&&((l&V)!==0?On(a,Q):Oe(a))))}}let Er=!1;var _n,jn,Zn,$n;function xr(){if(_n===void 0){_n=window,jn=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,r=Text.prototype;Zn=an(n,"firstChild").get,$n=an(n,"nextSibling").get,ln(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),ln(r)&&(r.__t=void 0)}}function Qe(e=""){return document.createTextNode(e)}function Xe(e){return Zn.call(e)}function Ie(e){return $n.call(e)}function D(e,n){return Xe(e)}function Fr(e,n){{var r=Xe(e);return r instanceof Comment&&r.data===""?Ie(r):r}}function L(e,n=1,r=!1){let t=e;for(;n--;)t=Ie(t);return t}function Tr(e){e.textContent=""}function qn(e){h===null&&b===null&&dr(),b!==null&&(b.f&C)!==0&&h===null&&cr(),ve&&ur()}function Rr(e,n){var r=n.last;r===null?n.last=n.first=e:(r.next=e,e.prev=r,n.last=e)}function ae(e,n,r,t=!0){var s=h,o={ctx:y,deps:null,nodes_start:null,nodes_end:null,f:e|I,first:null,fn:n,last:null,next:null,parent:s,prev:null,teardown:null,transitions:null,wv:0};if(r)try{rn(o),o.f|=ar}catch(d){throw U(o),d}else n!==null&&Oe(o);var a=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&(Nn|xe))===0;if(!a&&t&&(s!==null&&Rr(o,s),b!==null&&(b.f&V)!==0)){var l=b;(l.effects??(l.effects=[])).push(o)}return o}function Nr(e){const n=ae(ze,null,!1);return z(n,T),n.teardown=e,n}function mn(e){qn();var n=h!==null&&(h.f&$)!==0&&y!==null&&!y.m;if(n){var r=y;(r.e??(r.e=[])).push({fn:e,effect:h,reaction:b})}else{var t=Pn(e);return t}}function Cr(e){return qn(),kr(e)}function Mr(e){const n=ae(ie,e,!0);return(r={})=>new Promise(t=>{r.outro?Re(n,()=>{U(n),t(void 0)}):(U(n),t(void 0))})}function Pn(e){return ae(Tn,e,!1)}function kr(e){return ae(ze,e,!0)}function re(e,n=[],r=Ke){const t=n.map(r);return en(()=>e(...t.map(A)))}function en(e,n=0){return ae(ze|Rn|n,e,!0)}function me(e,n=!0){return ae(ze|$,e,!0,n)}function Gn(e){var n=e.teardown;if(n!==null){const r=ve,t=b;vn(!0),oe(null);try{n.call(null)}finally{vn(r),oe(t)}}}function Bn(e,n=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var t=r.next;(r.f&ie)!==0?r.parent=null:U(r,n),r=t}}function Ar(e){for(var n=e.first;n!==null;){var r=n.next;(n.f&$)===0&&U(n),n=r}}function U(e,n=!0){var r=!1;(n||(e.f&lr)!==0)&&e.nodes_start!==null&&(zr(e.nodes_start,e.nodes_end),r=!0),Bn(e,n&&!r),Ae(e,0),z(e,Se);var t=e.transitions;if(t!==null)for(const o of t)o.stop();Gn(e);var s=e.parent;s!==null&&s.first!==null&&Un(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function zr(e,n){for(;e!==null;){var r=e===n?null:Ie(e);e.remove(),e=r}}function Un(e){var n=e.parent,r=e.prev,t=e.next;r!==null&&(r.next=t),t!==null&&(t.prev=r),n!==null&&(n.first===e&&(n.first=t),n.last===e&&(n.last=r))}function Re(e,n){var r=[];nn(e,r,!0),Hn(r,()=>{U(e),n&&n()})}function Hn(e,n){var r=e.length;if(r>0){var t=()=>--r||n();for(var s of e)s.out(t)}else n()}function nn(e,n,r){if((e.f&j)===0){if(e.f^=j,e.transitions!==null)for(const a of e.transitions)(a.is_global||r)&&n.push(a);for(var t=e.first;t!==null;){var s=t.next,o=(t.f&He)!==0||(t.f&$)!==0;nn(t,n,o?r:!1),t=s}}}function Ne(e){Jn(e,!0)}function Jn(e,n){if((e.f&j)!==0){e.f^=j,(e.f&T)===0&&(e.f^=T),pe(e)&&(z(e,I),Oe(e));for(var r=e.first;r!==null;){var t=r.next,s=(r.f&He)!==0||(r.f&$)!==0;Jn(r,s?n:!1),r=t}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||n)&&o.in()}}let Ce=[];function Sr(){var e=Ce;Ce=[],Pe(e)}function Vr(e){Ce.length===0&&queueMicrotask(Sr),Ce.push(e)}let De=!1,Ge=!1,Me=null,K=!1,ve=!1;function vn(e){ve=e}let Ee=[];let b=null,O=!1;function oe(e){b=e}let h=null;function se(e){h=e}let Z=null,E=null,N=0,k=null;function Ir(e){k=e}let Wn=1,ke=0,B=!1;function Yn(){return++Wn}function pe(e){var m;var n=e.f;if((n&I)!==0)return!0;if((n&Q)!==0){var r=e.deps,t=(n&C)!==0;if(r!==null){var s,o,a=(n&Fe)!==0,l=t&&h!==null&&!B,d=r.length;if(a||l){var c=e,v=c.parent;for(s=0;s<d;s++)o=r[s],(a||!((m=o==null?void 0:o.reactions)!=null&&m.includes(c)))&&(o.reactions??(o.reactions=[])).push(c);a&&(c.f^=Fe),l&&v!==null&&(v.f&C)===0&&(c.f^=C)}for(s=0;s<d;s++)if(o=r[s],pe(o)&&Ln(o),o.wv>e.wv)return!0}(!t||h!==null&&!B)&&z(e,T)}return!1}function Lr(e,n){for(var r=n;r!==null;){if((r.f&xe)!==0)try{r.fn(e);return}catch{r.f^=xe}r=r.parent}throw De=!1,e}function pn(e){return(e.f&Se)===0&&(e.parent===null||(e.parent.f&xe)===0)}function Le(e,n,r,t){if(De){if(r===null&&(De=!1),pn(n))throw e;return}if(r!==null&&(De=!0),Lr(e,n),pn(n))throw e}function Kn(e,n,r=!0){var t=e.reactions;if(t!==null)for(var s=0;s<t.length;s++){var o=t[s];Z!=null&&Z.includes(e)||((o.f&V)!==0?Kn(o,n,!1):n===o&&(r?z(o,I):(o.f&T)!==0&&z(o,Q),Oe(o)))}}function Qn(e){var f;var n=E,r=N,t=k,s=b,o=B,a=Z,l=y,d=O,c=e.f;E=null,N=0,k=null,B=(c&C)!==0&&(O||!K||b===null),b=(c&($|ie))===0?e:null,Z=null,cn(e.ctx),O=!1,ke++,e.f|=fn;try{var v=(0,e.fn)(),m=e.deps;if(E!==null){var i;if(Ae(e,N),m!==null&&N>0)for(m.length=N+E.length,i=0;i<E.length;i++)m[N+i]=E[i];else e.deps=m=E;if(!B)for(i=N;i<m.length;i++)((f=m[i]).reactions??(f.reactions=[])).push(e)}else m!==null&&N<m.length&&(Ae(e,N),m.length=N);if(Ye()&&k!==null&&!O&&m!==null&&(e.f&(V|Q|I))===0)for(i=0;i<k.length;i++)Kn(k[i],e);return s!==null&&s!==e&&(ke++,k!==null&&(t===null?t=k:t.push(...k))),v}finally{E=n,N=r,k=t,b=s,B=o,Z=a,cn(l),O=d,e.f^=fn}}function Or(e,n){let r=n.reactions;if(r!==null){var t=or.call(r,e);if(t!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[t]=r[s],r.pop())}}r===null&&(n.f&V)!==0&&(E===null||!E.includes(n))&&(z(n,Q),(n.f&(C|Fe))===0&&(n.f^=Fe),Vn(n),Ae(n,0))}function Ae(e,n){var r=e.deps;if(r!==null)for(var t=n;t<r.length;t++)Or(e,r[t])}function rn(e){var n=e.f;if((n&Se)===0){z(e,T);var r=h,t=y,s=K;h=e,K=!0;try{(n&Rn)!==0?Ar(e):Bn(e),Gn(e);var o=Qn(e);e.teardown=typeof o=="function"?o:null,e.wv=Wn;var a=e.deps,l;sn&&mr&&e.f&I}catch(d){Le(d,e,r,t||e.ctx)}finally{K=s,h=r}}}function jr(){try{_r()}catch(e){if(Me!==null)Le(e,Me,null);else throw e}}function Zr(){var e=K;try{var n=0;for(K=!0;Ee.length>0;){n++>1e3&&jr();var r=Ee,t=r.length;Ee=[];for(var s=0;s<t;s++){var o=qr(r[s]);$r(o)}_e.clear()}}finally{Ge=!1,K=e,Me=null}}function $r(e){var n=e.length;if(n!==0)for(var r=0;r<n;r++){var t=e[r];if((t.f&(Se|j))===0)try{pe(t)&&(rn(t),t.deps===null&&t.first===null&&t.nodes_start===null&&(t.teardown===null?Un(t):t.fn=null))}catch(s){Le(s,t,null,t.ctx)}}}function Oe(e){Ge||(Ge=!0,queueMicrotask(Zr));for(var n=Me=e;n.parent!==null;){n=n.parent;var r=n.f;if((r&(ie|$))!==0){if((r&T)===0)return;n.f^=T}}Ee.push(n)}function qr(e){for(var n=[],r=e;r!==null;){var t=r.f,s=(t&($|ie))!==0,o=s&&(t&T)!==0;if(!o&&(t&j)===0){if((t&Tn)!==0)n.push(r);else if(s)r.f^=T;else try{pe(r)&&rn(r)}catch(d){Le(d,r,null,r.ctx)}var a=r.first;if(a!==null){r=a;continue}}var l=r.parent;for(r=r.next;r===null&&l!==null;)r=l.next,l=l.parent}return n}function A(e){var n=e.f,r=(n&V)!==0;if(b!==null&&!O){if(!(Z!=null&&Z.includes(e))){var t=b.deps;e.rv<ke&&(e.rv=ke,E===null&&t!==null&&t[N]===e?N++:E===null?E=[e]:(!B||!E.includes(e))&&E.push(e))}}else if(r&&e.deps===null&&e.effects===null){var s=e,o=s.parent;o!==null&&(o.f&C)===0&&(s.f^=C)}return r&&(s=e,pe(s)&&Ln(s)),ve&&_e.has(e)?_e.get(e):e.v}function Pr(e){var n=O;try{return O=!0,e()}finally{O=n}}const Gr=-7169;function z(e,n){e.f=e.f&Gr|n}function Br(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(un in e)Be(e);else if(!Array.isArray(e))for(let n in e){const r=e[n];typeof r=="object"&&r&&un in r&&Be(r)}}}function Be(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let t in e)try{Be(e[t],n)}catch{}const r=Fn(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const t=xn(r);for(let s in t){const o=t[s].get;if(o)try{o.call(e)}catch{}}}}}const Ur=["touchstart","touchmove"];function Hr(e){return Ur.includes(e)}const Jr=new Set,hn=new Set;function be(e){var w;var n=this,r=n.ownerDocument,t=e.type,s=((w=e.composedPath)==null?void 0:w.call(e))||[],o=s[0]||e.target,a=0,l=e.__root;if(l){var d=s.indexOf(l);if(d!==-1&&(n===document||n===window)){e.__root=n;return}var c=s.indexOf(n);if(c===-1)return;d<=c&&(a=d)}if(o=s[a]||e.target,o!==n){sr(e,"currentTarget",{configurable:!0,get(){return o||r}});var v=b,m=h;oe(null),se(null);try{for(var i,f=[];o!==null;){var u=o.assignedSlot||o.parentNode||o.host||null;try{var x=o["__"+t];if(x!=null&&(!o.disabled||e.target===o))if(En(x)){var[F,...M]=x;F.apply(o,[e,...M])}else x.call(o,e)}catch(g){i?f.push(g):i=g}if(e.cancelBubble||u===n||u===null)break;o=u}if(i){for(let g of f)queueMicrotask(()=>{throw g});throw i}}finally{e.__root=n,delete e.currentTarget,oe(v),se(m)}}}function Wr(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function Xn(e,n){var r=h;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=n)}function X(e,n){var r=(n&gr)!==0,t,s=!e.startsWith("<!>");return()=>{t===void 0&&(t=Wr(s?e:"<!>"+e),t=Xe(t));var o=r||jn?document.importNode(t,!0):t.cloneNode(!0);return Xn(o,o),o}}function Yr(){var e=document.createDocumentFragment(),n=document.createComment(""),r=Qe();return e.append(n,r),Xn(n,r),e}function P(e,n){e!==null&&e.before(n)}function Y(e,n){var r=n==null?"":typeof n=="object"?n+"":n;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r+"")}function Kr(e,n){return Qr(e,n)}const te=new Map;function Qr(e,{target:n,anchor:r,props:t={},events:s,context:o,intro:a=!0}){xr();var l=new Set,d=m=>{for(var i=0;i<m.length;i++){var f=m[i];if(!l.has(f)){l.add(f);var u=Hr(f);n.addEventListener(f,be,{passive:u});var x=te.get(f);x===void 0?(document.addEventListener(f,be,{passive:u}),te.set(f,1)):te.set(f,x+1)}}};d(Ue(Jr)),hn.add(d);var c=void 0,v=Mr(()=>{var m=r??n.appendChild(Qe());return me(()=>{if(o){An({});var i=y;i.c=o}s&&(t.$$events=s),c=e(m,t)||{},o&&zn()}),()=>{var u;for(var i of l){n.removeEventListener(i,be);var f=te.get(i);--f===0?(document.removeEventListener(i,be),te.delete(i)):te.set(i,f)}hn.delete(d),m!==r&&((u=m.parentNode)==null||u.removeChild(m))}});return Xr.set(c,v),c}let Xr=new WeakMap;function gn(e,n,[r,t]=[0,0]){var s=e,o=null,a=null,l=br,d=r>0?He:0,c=!1;const v=(i,f=!0)=>{c=!0,m(f,i)},m=(i,f)=>{l!==(l=i)&&(l?(o?Ne(o):f&&(o=me(()=>f(s))),a&&Re(a,()=>{a=null})):(a?Ne(a):f&&(a=me(()=>f(s,[r+1,t]))),o&&Re(o,()=>{o=null})))};en(()=>{c=!1,n(v),c||m(null,null)},d)}function ye(e,n){return n}function et(e,n,r,t){for(var s=[],o=n.length,a=0;a<o;a++)nn(n[a].e,s,!0);var l=o>0&&s.length===0&&r!==null;if(l){var d=r.parentNode;Tr(d),d.append(r),t.clear(),G(e,n[0].prev,n[o-1].next)}Hn(s,()=>{for(var c=0;c<o;c++){var v=n[c];l||(t.delete(v.k),G(e,v.prev,v.next)),U(v.e,!l)}})}function we(e,n,r,t,s,o=null){var a=e,l={flags:n,items:new Map,first:null},d=(n&kn)!==0;if(d){var c=e;a=c.appendChild(Qe())}var v=null,m=!1,i=Sn(()=>{var f=r();return En(f)?f:f==null?[]:Ue(f)});en(()=>{var f=A(i),u=f.length;m&&u===0||(m=u===0,nt(f,l,a,s,n,t,r),o!==null&&(u===0?v?Ne(v):v=me(()=>o(a)):v!==null&&Re(v,()=>{v=null})),A(i))})}function nt(e,n,r,t,s,o,a){var fe,ue,W,ce;var l=(s&pr)!==0,d=(s&(Je|We))!==0,c=e.length,v=n.items,m=n.first,i=m,f,u=null,x,F=[],M=[],w,g,_,p;if(l)for(p=0;p<c;p+=1)w=e[p],g=o(w,p),_=v.get(g),_!==void 0&&((fe=_.a)==null||fe.measure(),(x??(x=new Set)).add(_));for(p=0;p<c;p+=1){if(w=e[p],g=o(w,p),_=v.get(g),_===void 0){var q=i?i.e.nodes_start:r;u=tt(q,n,u,u===null?n.first:u.next,w,g,p,t,s,a),v.set(g,u),F=[],M=[],i=u.next;continue}if(d&&rt(_,w,p,s),(_.e.f&j)!==0&&(Ne(_.e),l&&((ue=_.a)==null||ue.unfix(),(x??(x=new Set)).delete(_))),_!==i){if(f!==void 0&&f.has(_)){if(F.length<M.length){var S=M[0],R;u=S.prev;var ee=F[0],H=F[F.length-1];for(R=0;R<F.length;R+=1)bn(F[R],S,r);for(R=0;R<M.length;R+=1)f.delete(M[R]);G(n,ee.prev,H.next),G(n,u,ee),G(n,H,S),i=S,u=H,p-=1,F=[],M=[]}else f.delete(_),bn(_,i,r),G(n,_.prev,_.next),G(n,_,u===null?n.first:u.next),G(n,u,_),u=_;continue}for(F=[],M=[];i!==null&&i.k!==g;)(i.e.f&j)===0&&(f??(f=new Set)).add(i),M.push(i),i=i.next;if(i===null)continue;_=i}F.push(_),u=_,i=_.next}if(i!==null||f!==void 0){for(var J=f===void 0?[]:Ue(f);i!==null;)(i.e.f&j)===0&&J.push(i),i=i.next;var le=J.length;if(le>0){var je=(s&kn)!==0&&c===0?r:null;if(l){for(p=0;p<le;p+=1)(W=J[p].a)==null||W.measure();for(p=0;p<le;p+=1)(ce=J[p].a)==null||ce.fix()}et(n,J,je,v)}}l&&Vr(()=>{var he;if(x!==void 0)for(_ of x)(he=_.a)==null||he.apply()}),h.first=n.first&&n.first.e,h.last=u&&u.e}function rt(e,n,r,t){(t&Je)!==0&&dn(e.v,n),(t&We)!==0?dn(e.i,r):e.i=r}function tt(e,n,r,t,s,o,a,l,d,c){var v=(d&Je)!==0,m=(d&hr)===0,i=v?m?Dr(s):Te(s):s,f=(d&We)===0?a:Te(a),u={i:f,v:i,k:o,a:null,e:null,prev:r,next:t};try{return u.e=me(()=>l(e,i,f,c),Er),u.e.prev=r&&r.e,u.e.next=t&&t.e,r===null?n.first=u:(r.next=u,r.e.next=u.e),t!==null&&(t.prev=u,t.e.prev=u.e),u}finally{}}function bn(e,n,r){for(var t=e.next?e.next.e.nodes_start:r,s=n?n.e.nodes_start:r,o=e.e.nodes_start;o!==t;){var a=Ie(o);s.before(o),o=a}}function G(e,n,r){n===null?e.first=r:(n.next=r,n.e.next=r&&r.e),r!==null&&(r.prev=n,r.e.prev=n&&n.e)}function er(e){var n,r,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(n=0;n<s;n++)e[n]&&(r=er(e[n]))&&(t&&(t+=" "),t+=r)}else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}function ot(){for(var e,n,r=0,t="",s=arguments.length;r<s;r++)(e=arguments[r])&&(n=er(e))&&(t&&(t+=" "),t+=n);return t}function st(e){return typeof e=="object"?ot(e):e??""}function it(e,n,r){var t=e==null?"":""+e;return t=t?t+" "+n:n,t===""?null:t}function at(e,n,r,t,s,o){var a=e.__className;if(a!==r||a===void 0){var l=it(r,t);l==null?e.removeAttribute("class"):e.className=l,e.__className=r}return o}const lt=Symbol("is custom element"),ft=Symbol("is html");function ut(e,n,r,t){var s=ct(e);s[n]!==(s[n]=r)&&(r==null?e.removeAttribute(n):typeof r!="string"&&dt(e).includes(n)?e[n]=r:e.setAttribute(n,r))}function ct(e){return e.__attributes??(e.__attributes={[lt]:e.nodeName.includes("-"),[ft]:e.namespaceURI===yr})}var yn=new Map;function dt(e){var n=yn.get(e.nodeName);if(n)return n;yn.set(e.nodeName,n=[]);for(var r,t=e,s=Element.prototype;s!==t;){r=xn(t);for(var o in r)r[o].set&&n.push(o);t=Fn(t)}return n}function _t(e=!1){const n=y,r=n.l.u;if(!r)return;let t=()=>Br(n.s);if(e){let s=0,o={};const a=Ke(()=>{let l=!1;const d=n.s;for(const c in d)d[c]!==o[c]&&(o[c]=d[c],l=!0);return l&&s++,s});t=()=>A(a)}r.b.length&&Cr(()=>{wn(n,t),Pe(r.b)}),mn(()=>{const s=Pr(()=>r.m.map(ir));return()=>{for(const o of s)typeof o=="function"&&o()}}),r.a.length&&mn(()=>{wn(n,t),Pe(r.a)})}function wn(e,n){if(e.l.s)for(const r of e.l.s)A(r);n()}const mt="5";var Dn;typeof window<"u"&&((Dn=window.__svelte??(window.__svelte={})).v??(Dn.v=new Set)).add(mt);vr();const vt={EnzymeForward:2.65,EnzymeReverse:4.18,FiniteDifferences:23.642,ForwardDiff:1.672,Mooncake:7.602,ReverseDiff:30.311,ReverseDiffCompiled:2.996,Zygote:925.786},pt={EnzymeForward:2.488,EnzymeReverse:3.033,FiniteDifferences:22.309,ForwardDiff:1.292,Mooncake:7.372,ReverseDiff:12.563,ReverseDiffCompiled:2.53,Zygote:521.766},ht={EnzymeForward:2.947,EnzymeReverse:4.104,FiniteDifferences:60.657,ForwardDiff:1.274,Mooncake:6.017,ReverseDiff:23.98,ReverseDiffCompiled:2.492,Zygote:"error"},gt={EnzymeForward:3.623,EnzymeReverse:5.457,FiniteDifferences:66.725,ForwardDiff:1.448,Mooncake:8.541,ReverseDiff:29.616,ReverseDiffCompiled:2.83,Zygote:"error"},bt={EnzymeForward:3.577,EnzymeReverse:7.363,FiniteDifferences:67.086,ForwardDiff:1.426,Mooncake:8.345,ReverseDiff:30.33,ReverseDiffCompiled:3.103,Zygote:1436.169},yt={EnzymeForward:3.619,EnzymeReverse:6.921,FiniteDifferences:65.858,ForwardDiff:1.385,Mooncake:8.585,ReverseDiff:28.742,ReverseDiffCompiled:3.006,Zygote:1297.649},wt={EnzymeForward:2.745,EnzymeReverse:2.862,FiniteDifferences:40.888,ForwardDiff:1.377,Mooncake:8.275,ReverseDiff:34.189,ReverseDiffCompiled:3.766,Zygote:1554.907},Dt={EnzymeForward:3.168,EnzymeReverse:4.593,FiniteDifferences:60.225,ForwardDiff:1.229,Mooncake:6.021,ReverseDiff:22.471,ReverseDiffCompiled:2.295,Zygote:"error"},Et={EnzymeForward:3.624,EnzymeReverse:6.202,FiniteDifferences:62.335,ForwardDiff:1.306,Mooncake:7.323,ReverseDiff:25.631,ReverseDiffCompiled:2.749,Zygote:"error"},xt={EnzymeForward:3.65,EnzymeReverse:5.209,FiniteDifferences:63.439,ForwardDiff:1.326,Mooncake:6.714,ReverseDiff:27.484,ReverseDiffCompiled:2.78,Zygote:"error"},Ft={EnzymeForward:3.637,EnzymeReverse:4.707,FiniteDifferences:63.949,ForwardDiff:1.261,Mooncake:7.038,ReverseDiff:27.651,ReverseDiffCompiled:3.009,Zygote:"error"},Tt={EnzymeForward:3.649,EnzymeReverse:4.655,FiniteDifferences:66.641,ForwardDiff:1.294,Mooncake:7.018,ReverseDiff:24.983,ReverseDiffCompiled:2.641,Zygote:"error"},Rt={EnzymeForward:4.564,EnzymeReverse:12.557,FiniteDifferences:149.395,ForwardDiff:2.503,Mooncake:6.314,ReverseDiff:52.869,ReverseDiffCompiled:6.261,Zygote:"error"},Nt={EnzymeForward:3.231,EnzymeReverse:5.581,FiniteDifferences:60.211,ForwardDiff:1.218,Mooncake:6.075,ReverseDiff:20.023,ReverseDiffCompiled:2.04,Zygote:"error"},Ct={EnzymeForward:2.868,EnzymeReverse:1.878,FiniteDifferences:75.936,ForwardDiff:1.327,Mooncake:5.04,ReverseDiff:22.627,ReverseDiffCompiled:2.48,Zygote:"error"},Mt={EnzymeForward:2.669,EnzymeReverse:2.511,FiniteDifferences:28.057,ForwardDiff:1.694,Mooncake:9.985,ReverseDiff:58.106,ReverseDiffCompiled:5.866,Zygote:"error"},kt={EnzymeForward:2.544,EnzymeReverse:2.502,FiniteDifferences:36.487,ForwardDiff:1.324,Mooncake:7.429,ReverseDiff:32.63,ReverseDiffCompiled:2.757,Zygote:1163.492},At={EnzymeForward:4.975,EnzymeReverse:25.8,FiniteDifferences:60.007,ForwardDiff:1.227,Mooncake:13.243,ReverseDiff:20.557,ReverseDiffCompiled:2.288,Zygote:"error"},zt={EnzymeForward:3.21,EnzymeReverse:12.162,FiniteDifferences:15.456,ForwardDiff:1.134,Mooncake:"error",ReverseDiff:"wrong",ReverseDiffCompiled:"error",Zygote:"error"},St={EnzymeForward:4.221,EnzymeReverse:2.034,FiniteDifferences:128.996,ForwardDiff:1.745,Mooncake:4.533,ReverseDiff:24.306,ReverseDiffCompiled:2.563,Zygote:"error"},Vt={EnzymeForward:18.943,EnzymeReverse:2.332,FiniteDifferences:589.254,ForwardDiff:8.378,Mooncake:3.992,ReverseDiff:25.225,ReverseDiffCompiled:2.454,Zygote:"error"},It={EnzymeForward:40.527,EnzymeReverse:2.442,FiniteDifferences:1237.762,ForwardDiff:13.832,Mooncake:3.936,ReverseDiff:25.658,ReverseDiffCompiled:2.507,Zygote:"error"},Lt={EnzymeForward:185.564,EnzymeReverse:2.089,FiniteDifferences:6377.395,ForwardDiff:56.737,Mooncake:3.863,ReverseDiff:24.738,ReverseDiffCompiled:2.513,Zygote:"error"},Ot={EnzymeForward:"error",EnzymeReverse:5.36,FiniteDifferences:38.769,ForwardDiff:1.187,Mooncake:10.69,ReverseDiff:11.628,ReverseDiffCompiled:1.307,Zygote:511.839},jt={EnzymeForward:2.797,EnzymeReverse:2.597,FiniteDifferences:28.114,ForwardDiff:1.126,Mooncake:9.938,ReverseDiff:57.57,ReverseDiffCompiled:5.958,Zygote:"error"},Zt={EnzymeForward:2.645,EnzymeReverse:3.107,FiniteDifferences:27.901,ForwardDiff:1.639,Mooncake:9.079,ReverseDiff:33.035,ReverseDiffCompiled:3.531,Zygote:1566.182},$t={EnzymeForward:2.69,EnzymeReverse:4.049,FiniteDifferences:51.463,ForwardDiff:1.314,Mooncake:6.274,ReverseDiff:28.392,ReverseDiffCompiled:2.674,Zygote:"error"},qt={EnzymeForward:2.383,EnzymeReverse:2.363,FiniteDifferences:24.874,ForwardDiff:1.556,Mooncake:7.306,ReverseDiff:26.866,ReverseDiffCompiled:2.763,Zygote:2176.698},Pt={EnzymeForward:4.328,EnzymeReverse:2.411,FiniteDifferences:136.057,ForwardDiff:1.692,Mooncake:5.902,ReverseDiff:30.935,ReverseDiffCompiled:2.991,Zygote:"error"},Gt={EnzymeForward:4.418,EnzymeReverse:2.393,FiniteDifferences:136.97,ForwardDiff:1.786,Mooncake:5.975,ReverseDiff:31.973,ReverseDiffCompiled:2.991,Zygote:"error"},Bt={EnzymeForward:2.914,EnzymeReverse:3.24,FiniteDifferences:28.41,ForwardDiff:1.213,Mooncake:9.757,ReverseDiff:21.098,ReverseDiffCompiled:2.636,Zygote:1173.456},Ut={EnzymeForward:2.17,EnzymeReverse:2.074,FiniteDifferences:35.594,ForwardDiff:1.267,Mooncake:6.834,ReverseDiff:13.979,ReverseDiffCompiled:1.35,Zygote:1191.837},Ht={EnzymeForward:"error",EnzymeReverse:12.459,FiniteDifferences:42.963,ForwardDiff:1.043,Mooncake:12.441,ReverseDiff:16.994,ReverseDiffCompiled:3.342,Zygote:"error"},Jt={EnzymeForward:2.775,EnzymeReverse:3.387,FiniteDifferences:40.119,ForwardDiff:1.495,Mooncake:9.59,ReverseDiff:20.966,ReverseDiffCompiled:"wrong",Zygote:1141.886},Wt={EnzymeForward:2.655,EnzymeReverse:2.978,FiniteDifferences:38.864,ForwardDiff:1.339,Mooncake:8.329,ReverseDiff:33.529,ReverseDiffCompiled:3.561,Zygote:"error"},Yt={EnzymeForward:2.85,EnzymeReverse:2.541,FiniteDifferences:37.179,ForwardDiff:1.339,Mooncake:8.211,ReverseDiff:30.254,ReverseDiffCompiled:3.746,Zygote:1708.521},qe={assume_beta:vt,assume_dirichlet:pt,demo_assume_index_observe:ht,demo_assume_matrix_observe_matrix_index:gt,demo_assume_multivariate_observe:bt,demo_assume_multivariate_observe_literal:yt,demo_assume_observe_literal:wt,demo_assume_submodel_observe_index_literal:Dt,demo_dot_assume_observe:Et,demo_dot_assume_observe_index:xt,demo_dot_assume_observe_index_literal:Ft,demo_dot_assume_observe_matrix_index:Tt,assume_lkjcholu:Rt,demo_dot_assume_observe_submodel:Nt,dot_assume:Ct,dot_observe:Mt,dynamic_constraint:kt,multiple_constraints_same_var:At,multithreaded:zt,n010:St,n050:Vt,n100:It,n500:Lt,assume_mvnormal:Ot,observe_index:jt,observe_literal:Zt,observe_multivariate:$t,observe_submodel:qt,pdb_eight_schools_centered:Pt,pdb_eight_schools_noncentered:Gt,assume_normal:Bt,assume_submodel:Ut,assume_wishart:Ht,control_flow:Jt,demo_assume_dot_observe:Wt,demo_assume_dot_observe_literal:Yt},Kt="1.14.0",Qt="1.5.0",Xt="5.6.1",eo="0.11.0",no="0.4.5",ro="0.1.42",to="4.3.0",oo="1.1.3",so="2.5.0",io="1.1.2",ao="0.4.0",lo="1.11.0",fo="0.4.4",uo="1.11.0",co="0.1.1",_o="0.15.6",mo="0.5.0",vo="1.72.3",po="1.25.1",ho="1.3.1",go="0.1.10",bo="0.2.4",yo="0.3.1",wo="4.16.0",Do="1.1.1+0",Eo="0.1.2",xo="0.1.2",Fo="1.5.8",To="1.16.0",Ro="0.18.22",No="1.0.0",Co="1.11.0",Mo="0.1.2",ko="0.4.0",Ao="1.1.0",zo="1.15.1",So="0.6.54",Vo="1.11.0",Io="0.25.120",Lo="0.9.4",Oo="1.6.0",jo="0.36.3",Zo="0.13.44",$o="0.8.8",qo="0.0.180+0",Po="0.1.10",Go="1.11.0",Bo="1.13.0",Uo="0.12.32",Ho="0.10.38",Jo="1.1.3",Wo="0.5.2",Yo="1.11.0",Ko="0.2.0",Qo="1.5.0",Xo="1.12.1",es="0.3.28",ns="0.4.14",rs="0.1.5",ts="0.3.1",os="1.11.0",ss="0.1.17",is="0.2.4",as="1.0.0",ls="1.7.0",fs="9.4.0",us="0.0.36+0",cs="1.11.0",ds="0.2.0",_s="0.6.4",ms="8.6.0+0",vs="1.11.0",ps="1.7.2+0",hs="1.11.0+1",gs="0.9.1+6",bs="1.11.0",ys="1.11.0",ws="2.1.2",Ds="0.3.29",Es="1.11.0",xs="1.1.0",Fs="0.5.16",Ts="0.4.2",Rs="1.11.0",Ns="2.28.6+0",Cs="0.2.0",Ms="1.2.0",ks="2.0.0",As="1.11.0",zs="0.4.119",Ss="2023.12.12",Vs="1.1.3",Is="1.2.0",Ls="0.4.4",Os="0.3.27+1",js="0.8.5+0",Zs="0.5.6+0",$s="1.8.0",qs="0.11.35",Ps="2.8.3",Gs="1.11.0",Bs="1.2.1",Us="1.4.3",Hs="1.11.0",Js="0.1.4",Ws="1.10.4",Ys="1.3.0",Ks="2.11.2",Qs="1.11.0",Xs="0.1.0",ei="1.2.2",ni="1.3.1",ri="1.16.1",ti="1.4.2",oi="0.8.0",si="0.5.1+0",ii="2.2.7",ai="0.7.0",li="1.2.1",fi="1.11.0",ui="1.1.2",ci="1.11.0",di="0.9.4",_i="1.11.0",mi="1.2.1",vi="1.11.0",pi="0.1.2",hi="2.5.1",gi="0.1.15",bi="1.9.13",yi="1.4.3",wi="1.11.1",Di="1.7.0",Ei="0.34.5",xi="1.5.0",Fi="0.7.1",Ti="0.3.1",Ri=null,Ni="7.7.0+0",Ci="1.0.3",Mi="1.0.1",ki="1.12.0",Ai="1.10.0",zi="0.1.7",Si="1.11.0",Vi="0.1.4",Ii="0.4.84",Li="1.11.0",Oi="1.11.0",ji="1.2.13+1",Zi="0.7.7",$i="0.2.7",qi="5.11.0+0",Pi="1.59.0+0",Gi="17.4.0+2",Bi={ADTypes:Kt,AbstractFFTs:Qt,AbstractMCMC:Xt,AbstractPPL:eo,AbstractTrees:no,Accessors:ro,Adapt:to,AliasTables:oo,ArgCheck:so,ArgTools:io,ArnoldiMethod:ao,Artifacts:lo,BangBang:fo,Base64:uo,Baselet:co,Bijectors:_o,CEnum:mo,ChainRules:vo,ChainRulesCore:po,Chairmarks:ho,ChangesOfVariables:go,CommonSolve:bo,CommonSubexpressions:yo,Compat:wo,CompilerSupportLibraries_jll:Do,CompositionsBase:Eo,ConsoleProgressMonitor:xo,ConstructionBase:Fo,DataAPI:To,DataStructures:Ro,DataValueInterfaces:No,Dates:Co,DefineSingletons:Mo,DensityInterface:ko,DiffResults:Ao,DiffRules:zo,DifferentiationInterface:So,Distributed:Vo,Distributions:Io,DocStringExtensions:Lo,Downloads:Oo,DynamicPPL:jo,Enzyme:Zo,EnzymeCore:$o,Enzyme_jll:qo,ExprTools:Po,FileWatching:Go,FillArrays:Bo,FiniteDifferences:Uo,ForwardDiff:Ho,FunctionWrappers:Jo,Functors:Wo,Future:Yo,GPUArraysCore:Ko,GPUCompiler:Qo,Graphs:Xo,HypergeometricFunctions:es,IRTools:ns,Inflate:rs,InitialValues:ts,InteractiveUtils:os,InverseFunctions:ss,IrrationalConstants:is,IteratorInterfaceExtensions:as,JLLWrappers:ls,JSON:"0.21.4",LLVM:fs,LLVMExtra_jll:us,LazyArtifacts:cs,LeftChildRightSiblingTrees:ds,LibCURL:_s,LibCURL_jll:ms,LibGit2:vs,LibGit2_jll:ps,LibSSH2_jll:hs,LibTracyClient_jll:gs,Libdl:bs,LinearAlgebra:ys,LogDensityProblems:ws,LogExpFunctions:Ds,Logging:Es,LoggingExtras:xs,MacroTools:Fs,MappedArrays:Ts,Markdown:Rs,MbedTLS_jll:Ns,MicroCollections:Cs,Missings:Ms,MistyClosures:ks,Mmap:As,Mooncake:zs,MozillaCACerts_jll:Ss,NaNMath:Vs,NetworkOptions:Is,ObjectFile:Ls,OpenBLAS_jll:Os,OpenLibm_jll:js,OpenSpecFun_jll:Zs,OrderedCollections:$s,PDMats:qs,Parsers:Ps,Pkg:Gs,PrecompileTools:Bs,Preferences:Us,Printf:Hs,ProgressLogging:Js,ProgressMeter:Ws,PtrArrays:Ys,QuadGK:Ks,Random:Qs,RealDot:Xs,Reexport:ei,Requires:ni,ReverseDiff:ri,Richardson:ti,Rmath:oi,Rmath_jll:si,Roots:ii,SHA:ai,Scratch:li,Serialization:fi,Setfield:ui,SharedArrays:ci,SimpleTraits:di,Sockets:_i,SortingAlgorithms:mi,SparseArrays:vi,SparseInverseSubset:pi,SpecialFunctions:hi,SplittablesBase:gi,StaticArrays:bi,StaticArraysCore:yi,Statistics:wi,StatsAPI:Di,StatsBase:Ei,StatsFuns:xi,StructArrays:Fi,StructIO:Ti,SuiteSparse:Ri,SuiteSparse_jll:Ni,TOML:Ci,TableTraits:Mi,Tables:ki,Tar:Ai,TerminalLoggers:zi,Test:Si,Tracy:Vi,Transducers:Ii,UUIDs:Li,Unicode:Oi,Zlib_jll:ji,Zygote:Zi,ZygoteRules:$i,libblastrampoline_jll:qi,nghttp2_jll:Pi,p7zip_jll:Gi},Ui=`@model function assume_beta()
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

@register demo_dot_assume_observe_matrix_index()`,oa=`@model function assume_lkjcholu()
    a ~ LKJCholesky(5, 1.0, 'U')
end

@register assume_lkjcholu()`,sa=`@model function _likelihood_multivariate_observe(s, m, x)
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

@register demo_assume_dot_observe_literal()`,Na={assume_beta:Ui,assume_dirichlet:Hi,demo_assume_index_observe:Ji,demo_assume_matrix_observe_matrix_index:Wi,demo_assume_multivariate_observe:Yi,demo_assume_multivariate_observe_literal:Ki,demo_assume_observe_literal:Qi,demo_assume_submodel_observe_index_literal:Xi,demo_dot_assume_observe:ea,demo_dot_assume_observe_index:na,demo_dot_assume_observe_index_literal:ra,demo_dot_assume_observe_matrix_index:ta,assume_lkjcholu:oa,demo_dot_assume_observe_submodel:sa,dot_assume:ia,dot_observe:aa,dynamic_constraint:la,multiple_constraints_same_var:fa,multithreaded:ua,n010:ca,n050:da,n100:_a,n500:ma,assume_mvnormal:va,observe_index:pa,observe_literal:ha,observe_multivariate:ga,observe_submodel:ba,pdb_eight_schools_centered:ya,pdb_eight_schools_noncentered:wa,assume_normal:Da,assume_submodel:Ea,assume_wishart:xa,control_flow:Fa,demo_assume_dot_observe:Ta,demo_assume_dot_observe_literal:Ra};var Ca=X('<th class="svelte-13swsff"> </th>'),Ma=X('<td class="svelte-13swsff"> </td>'),ka=X('<a class="issue svelte-13swsff" target="_blank">(?)</a>'),Aa=X('<td class="svelte-13swsff"><!> <span> </span></td>'),za=X('<tr class="svelte-13swsff"><td class="svelte-13swsff"> <div class="model-definition svelte-13swsff"><pre> </pre></div></td><!></tr>'),Sa=X('<tr class="svelte-13swsff"><td class="svelte-13swsff"> </td><td class="svelte-13swsff"> </td></tr>'),Va=X(`<div id="main-wrapper" class="svelte-13swsff"><main class="svelte-13swsff"><h1>Turing AD tests</h1> <p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p> <p>This page is intended as a brief overview of how different AD
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
                describes the problem.</li></ul> <h2>Results</h2> <p><a href="adtests.json" target="_blank" download="">Download the raw data (JSON)</a></p> <table id="results" class="svelte-13swsff"><thead><tr class="svelte-13swsff"><th class="svelte-13swsff">Model name \\\\ AD type</th><!></tr></thead><tbody></tbody></table> <h2>Manifest</h2> <p>The tests above were run with the following package versions:</p> <table id="manifest" class="svelte-13swsff"><thead><tr class="svelte-13swsff"><th class="svelte-13swsff">Package</th><th class="svelte-13swsff">Version</th></tr></thead><tbody></tbody></table></main></div>`);function Ia(e,n){An(n,!1);const r=Object.keys(qe),t=Object.keys(qe[r[0]]);console.log("Models: ",r),console.log("AD types: ",t);function s(w){return Object.entries(w).sort(([g,_],[p,q])=>g.localeCompare(p))}const o="https://github.com/EnzymeAD/Enzyme.jl/issues/1995",a="https://github.com/chalk-lab/Mooncake.jl/issues/570",l="https://github.com/EnzymeAD/Enzyme.jl/issues/2387",d={assume_mvnormal__EnzymeForward:o,assume_wishart__EnzymeForward:o,multithreaded__Mooncake:a,dot_assume_observe_index__EnzymeForward:l,dot_assume_observe_index__EnzymeReverse:l};_t();var c=Va(),v=D(c),m=L(D(v),12),i=D(m),f=D(i),u=L(D(f));we(u,1,()=>t,ye,(w,g)=>{var _=Ca(),p=D(_);re(()=>Y(p,A(g))),P(w,_)});var x=L(i);we(x,5,()=>s(qe),ye,(w,g)=>{let _=()=>A(g)[0],p=()=>A(g)[1];var q=za(),S=D(q),R=D(S),ee=L(R),H=D(ee),J=D(H),le=L(S);we(le,1,()=>s(p()),ye,(je,fe)=>{let ue=()=>A(fe)[0],W=()=>A(fe)[1];var ce=Yr(),he=Fr(ce);{var nr=ne=>{var de=Ma(),ge=D(de);re(Ze=>Y(ge,Ze),[()=>W().toFixed(3)],Sn),P(ne,de)},rr=ne=>{var de=Aa(),ge=D(de);{var Ze=$e=>{var on=ka();re(()=>ut(on,"href",d[`${_()}__${ue()}`])),P($e,on)};gn(ge,$e=>{d[`${_()}__${ue()}`]&&$e(Ze)})}var tn=L(ge,2),tr=D(tn);re(()=>{at(tn,1,st(W()),"svelte-13swsff"),Y(tr,W())}),P(ne,de)};gn(he,ne=>{typeof W()=="number"?ne(nr):ne(rr,!1)})}P(je,ce)}),re(()=>{Y(R,`${_()??""} `),Y(J,Na[_()])}),P(w,q)});var F=L(m,6),M=L(D(F));we(M,5,()=>s(Bi),ye,(w,g)=>{let _=()=>A(g)[0],p=()=>A(g)[1];var q=Sa(),S=D(q),R=D(S),ee=L(S),H=D(ee);re(()=>{Y(R,_()),Y(H,p()===null?"":`v${p()}`)}),P(w,q)}),P(e,c),zn()}Kr(Ia,{target:document.getElementById("app")});
