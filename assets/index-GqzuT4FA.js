(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const on=!1;var Dn=Array.isArray,rt=Array.prototype.indexOf,Ue=Array.from,ot=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,En=Object.getOwnPropertyDescriptors,Tn=Object.getPrototypeOf,an=Object.isExtensible;function st(e){return e()}function $e(e){for(var n=0;n<e.length;n++)e[n]()}const L=2,Fn=4,Se=8,Rn=16,Z=32,ie=64,Te=128,N=256,Fe=512,R=1024,V=2048,Q=4096,j=8192,ze=16384,it=32768,He=65536,at=1<<19,xn=1<<20,ln=1<<21,fn=Symbol("$state");function Cn(e){return e===this.v}function lt(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Nn(e){return!lt(e,this.v)}function ft(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ct(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ut(e){throw new Error("https://svelte.dev/e/effect_orphan")}function dt(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}let Le=!1,_t=!1;function vt(){Le=!0}const Je=1,Ge=2,An=4,mt=8,pt=16,ht=2,gt=Symbol(),yt="http://www.w3.org/1999/xhtml";let w=null;function cn(e){w=e}function kn(e,n=!1,t){var r=w={p:w,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};Le&&!n&&(w.l={s:null,u:null,r1:[],r2:Re(!1)}),Ct(()=>{r.d=!0})}function Mn(e){const n=w;if(n!==null){const a=n.e;if(a!==null){var t=h,r=y;n.e=null;try{for(var s=0;s<a.length;s++){var o=a[s];se(o.effect),oe(o.reaction),Zn(o.fn)}}finally{se(t),oe(r)}}w=n.p,n.m=!0}return{}}function We(){return!Le||w!==null&&w.l===null}function Ye(e){var n=L|V,t=y!==null&&(y.f&L)!==0?y:null;return h===null||t!==null&&(t.f&N)!==0?n|=N:h.f|=xn,{ctx:w,deps:null,effects:null,equals:Cn,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??h}}function wt(e){const n=Ye(e);return n.equals=Nn,n}function Sn(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)H(n[t])}}function bt(e){for(var n=e.parent;n!==null;){if((n.f&L)===0)return n;n=n.parent}return null}function zn(e){var n,t=h;se(bt(e));try{Sn(e),n=Yn(e)}finally{se(t)}return n}function Ln(e){var n=zn(e),t=(U||(e.f&N)!==0)&&e.deps!==null?Q:R;S(e,t),e.equals(n)||(e.v=n,e.wv=Gn())}const _e=new Map;function Re(e,n){var t={f:0,v:e,reactions:null,equals:Cn,rv:0,wv:0};return t}function Dt(e,n=!1){var r;const t=Re(e);return n||(t.equals=Nn),Le&&w!==null&&w.l!==null&&((r=w.l).s??(r.s=[])).push(t),t}function un(e,n){if(!e.equals(n)){var t=e.v;me?_e.set(e,n):_e.set(e,t),e.v=n,(e.f&L)!==0&&((e.f&V)!==0&&zn(e),S(e,(e.f&N)===0?R:Q)),e.wv=Gn(),Vn(e,V),We()&&h!==null&&(h.f&R)!==0&&(h.f&(Z|ie))===0&&(k===null?Vt([e]):k.push(e))}return n}function Vn(e,n){var t=e.reactions;if(t!==null)for(var r=We(),s=t.length,o=0;o<s;o++){var a=t[o],l=a.f;(l&V)===0&&(!r&&a===h||(S(a,n),(l&(R|N))!==0&&((l&L)!==0?Vn(a,Q):Oe(a))))}}let Et=!1;var dn,In,On,jn;function Tt(){if(dn===void 0){dn=window,In=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;On=sn(n,"firstChild").get,jn=sn(n,"nextSibling").get,an(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),an(t)&&(t.__t=void 0)}}function Ke(e=""){return document.createTextNode(e)}function Qe(e){return On.call(e)}function Ve(e){return jn.call(e)}function D(e,n){return Qe(e)}function Ft(e,n){{var t=Qe(e);return t instanceof Comment&&t.data===""?Ve(t):t}}function I(e,n=1,t=!1){let r=e;for(;n--;)r=Ve(r);return r}function Rt(e){e.textContent=""}function Pn(e){h===null&&y===null&&ut(),y!==null&&(y.f&N)!==0&&h===null&&ct(),me&&ft()}function xt(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function ae(e,n,t,r=!0){var s=h,o={ctx:w,deps:null,nodes_start:null,nodes_end:null,f:e|V,first:null,fn:n,last:null,next:null,parent:s,prev:null,teardown:null,transitions:null,wv:0};if(t)try{nn(o),o.f|=it}catch(d){throw H(o),d}else n!==null&&Oe(o);var a=t&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&(xn|Te))===0;if(!a&&r&&(s!==null&&xt(o,s),y!==null&&(y.f&L)!==0)){var l=y;(l.effects??(l.effects=[])).push(o)}return o}function Ct(e){const n=ae(Se,null,!1);return S(n,R),n.teardown=e,n}function _n(e){Pn();var n=h!==null&&(h.f&Z)!==0&&w!==null&&!w.m;if(n){var t=w;(t.e??(t.e=[])).push({fn:e,effect:h,reaction:y})}else{var r=Zn(e);return r}}function Nt(e){return Pn(),kt(e)}function At(e){const n=ae(ie,e,!0);return(t={})=>new Promise(r=>{t.outro?xe(n,()=>{H(n),r(void 0)}):(H(n),r(void 0))})}function Zn(e){return ae(Fn,e,!1)}function kt(e){return ae(Se,e,!0)}function te(e,n=[],t=Ye){const r=n.map(t);return Xe(()=>e(...r.map(M)))}function Xe(e,n=0){return ae(Se|Rn|n,e,!0)}function ve(e,n=!0){return ae(Se|Z,e,!0,n)}function $n(e){var n=e.teardown;if(n!==null){const t=me,r=y;vn(!0),oe(null);try{n.call(null)}finally{vn(t),oe(r)}}}function qn(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&ie)!==0?t.parent=null:H(t,n),t=r}}function Mt(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&Z)===0&&H(n),n=t}}function H(e,n=!0){var t=!1;(n||(e.f&at)!==0)&&e.nodes_start!==null&&(St(e.nodes_start,e.nodes_end),t=!0),qn(e,n&&!t),Me(e,0),S(e,ze);var r=e.transitions;if(r!==null)for(const o of r)o.stop();$n(e);var s=e.parent;s!==null&&s.first!==null&&Bn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function St(e,n){for(;e!==null;){var t=e===n?null:Ve(e);e.remove(),e=t}}function Bn(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function xe(e,n){var t=[];en(e,t,!0),Un(t,()=>{H(e),n&&n()})}function Un(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var s of e)s.out(r)}else n()}function en(e,n,t){if((e.f&j)===0){if(e.f^=j,e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&n.push(a);for(var r=e.first;r!==null;){var s=r.next,o=(r.f&He)!==0||(r.f&Z)!==0;en(r,n,o?t:!1),r=s}}}function Ce(e){Hn(e,!0)}function Hn(e,n){if((e.f&j)!==0){e.f^=j,(e.f&R)===0&&(e.f^=R),pe(e)&&(S(e,V),Oe(e));for(var t=e.first;t!==null;){var r=t.next,s=(t.f&He)!==0||(t.f&Z)!==0;Hn(t,s?n:!1),t=r}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||n)&&o.in()}}let Ne=[];function zt(){var e=Ne;Ne=[],$e(e)}function Lt(e){Ne.length===0&&queueMicrotask(zt),Ne.push(e)}let De=!1,qe=!1,Ae=null,K=!1,me=!1;function vn(e){me=e}let Ee=[];let y=null,O=!1;function oe(e){y=e}let h=null;function se(e){h=e}let P=null,E=null,C=0,k=null;function Vt(e){k=e}let Jn=1,ke=0,U=!1;function Gn(){return++Jn}function pe(e){var v;var n=e.f;if((n&V)!==0)return!0;if((n&Q)!==0){var t=e.deps,r=(n&N)!==0;if(t!==null){var s,o,a=(n&Fe)!==0,l=r&&h!==null&&!U,d=t.length;if(a||l){var u=e,m=u.parent;for(s=0;s<d;s++)o=t[s],(a||!((v=o==null?void 0:o.reactions)!=null&&v.includes(u)))&&(o.reactions??(o.reactions=[])).push(u);a&&(u.f^=Fe),l&&m!==null&&(m.f&N)===0&&(u.f^=N)}for(s=0;s<d;s++)if(o=t[s],pe(o)&&Ln(o),o.wv>e.wv)return!0}(!r||h!==null&&!U)&&S(e,R)}return!1}function It(e,n){for(var t=n;t!==null;){if((t.f&Te)!==0)try{t.fn(e);return}catch{t.f^=Te}t=t.parent}throw De=!1,e}function mn(e){return(e.f&ze)===0&&(e.parent===null||(e.parent.f&Te)===0)}function Ie(e,n,t,r){if(De){if(t===null&&(De=!1),mn(n))throw e;return}if(t!==null&&(De=!0),It(e,n),mn(n))throw e}function Wn(e,n,t=!0){var r=e.reactions;if(r!==null)for(var s=0;s<r.length;s++){var o=r[s];P!=null&&P.includes(e)||((o.f&L)!==0?Wn(o,n,!1):n===o&&(t?S(o,V):(o.f&R)!==0&&S(o,Q),Oe(o)))}}function Yn(e){var f;var n=E,t=C,r=k,s=y,o=U,a=P,l=w,d=O,u=e.f;E=null,C=0,k=null,U=(u&N)!==0&&(O||!K||y===null),y=(u&(Z|ie))===0?e:null,P=null,cn(e.ctx),O=!1,ke++,e.f|=ln;try{var m=(0,e.fn)(),v=e.deps;if(E!==null){var i;if(Me(e,C),v!==null&&C>0)for(v.length=C+E.length,i=0;i<E.length;i++)v[C+i]=E[i];else e.deps=v=E;if(!U)for(i=C;i<v.length;i++)((f=v[i]).reactions??(f.reactions=[])).push(e)}else v!==null&&C<v.length&&(Me(e,C),v.length=C);if(We()&&k!==null&&!O&&v!==null&&(e.f&(L|Q|V))===0)for(i=0;i<k.length;i++)Wn(k[i],e);return s!==null&&s!==e&&(ke++,k!==null&&(r===null?r=k:r.push(...k))),m}finally{E=n,C=t,k=r,y=s,U=o,P=a,cn(l),O=d,e.f^=ln}}function Ot(e,n){let t=n.reactions;if(t!==null){var r=rt.call(t,e);if(r!==-1){var s=t.length-1;s===0?t=n.reactions=null:(t[r]=t[s],t.pop())}}t===null&&(n.f&L)!==0&&(E===null||!E.includes(n))&&(S(n,Q),(n.f&(N|Fe))===0&&(n.f^=Fe),Sn(n),Me(n,0))}function Me(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Ot(e,t[r])}function nn(e){var n=e.f;if((n&ze)===0){S(e,R);var t=h,r=w,s=K;h=e,K=!0;try{(n&Rn)!==0?Mt(e):qn(e),$n(e);var o=Yn(e);e.teardown=typeof o=="function"?o:null,e.wv=Jn;var a=e.deps,l;on&&_t&&e.f&V}catch(d){Ie(d,e,t,r||e.ctx)}finally{K=s,h=t}}}function jt(){try{dt()}catch(e){if(Ae!==null)Ie(e,Ae,null);else throw e}}function Pt(){var e=K;try{var n=0;for(K=!0;Ee.length>0;){n++>1e3&&jt();var t=Ee,r=t.length;Ee=[];for(var s=0;s<r;s++){var o=$t(t[s]);Zt(o)}_e.clear()}}finally{qe=!1,K=e,Ae=null}}function Zt(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(ze|j))===0)try{pe(r)&&(nn(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Bn(r):r.fn=null))}catch(s){Ie(s,r,null,r.ctx)}}}function Oe(e){qe||(qe=!0,queueMicrotask(Pt));for(var n=Ae=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(ie|Z))!==0){if((t&R)===0)return;n.f^=R}}Ee.push(n)}function $t(e){for(var n=[],t=e;t!==null;){var r=t.f,s=(r&(Z|ie))!==0,o=s&&(r&R)!==0;if(!o&&(r&j)===0){if((r&Fn)!==0)n.push(t);else if(s)t.f^=R;else try{pe(t)&&nn(t)}catch(d){Ie(d,t,null,t.ctx)}var a=t.first;if(a!==null){t=a;continue}}var l=t.parent;for(t=t.next;t===null&&l!==null;)t=l.next,l=l.parent}return n}function M(e){var n=e.f,t=(n&L)!==0;if(y!==null&&!O){if(!(P!=null&&P.includes(e))){var r=y.deps;e.rv<ke&&(e.rv=ke,E===null&&r!==null&&r[C]===e?C++:E===null?E=[e]:(!U||!E.includes(e))&&E.push(e))}}else if(t&&e.deps===null&&e.effects===null){var s=e,o=s.parent;o!==null&&(o.f&N)===0&&(s.f^=N)}return t&&(s=e,pe(s)&&Ln(s)),me&&_e.has(e)?_e.get(e):e.v}function qt(e){var n=O;try{return O=!0,e()}finally{O=n}}const Bt=-7169;function S(e,n){e.f=e.f&Bt|n}function Ut(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(fn in e)Be(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&fn in t&&Be(t)}}}function Be(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{Be(e[r],n)}catch{}const t=Tn(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=En(t);for(let s in r){const o=r[s].get;if(o)try{o.call(e)}catch{}}}}}const Ht=["touchstart","touchmove"];function Jt(e){return Ht.includes(e)}const Gt=new Set,pn=new Set;function ye(e){var b;var n=this,t=n.ownerDocument,r=e.type,s=((b=e.composedPath)==null?void 0:b.call(e))||[],o=s[0]||e.target,a=0,l=e.__root;if(l){var d=s.indexOf(l);if(d!==-1&&(n===document||n===window)){e.__root=n;return}var u=s.indexOf(n);if(u===-1)return;d<=u&&(a=d)}if(o=s[a]||e.target,o!==n){ot(e,"currentTarget",{configurable:!0,get(){return o||t}});var m=y,v=h;oe(null),se(null);try{for(var i,f=[];o!==null;){var c=o.assignedSlot||o.parentNode||o.host||null;try{var T=o["__"+r];if(T!=null&&(!o.disabled||e.target===o))if(Dn(T)){var[F,...A]=T;F.apply(o,[e,...A])}else T.call(o,e)}catch(g){i?f.push(g):i=g}if(e.cancelBubble||c===n||c===null)break;o=c}if(i){for(let g of f)queueMicrotask(()=>{throw g});throw i}}finally{e.__root=n,delete e.currentTarget,oe(m),se(v)}}}function Wt(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function Kn(e,n){var t=h;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function X(e,n){var t=(n&ht)!==0,r,s=!e.startsWith("<!>");return()=>{r===void 0&&(r=Wt(s?e:"<!>"+e),r=Qe(r));var o=t||In?document.importNode(r,!0):r.cloneNode(!0);return Kn(o,o),o}}function Yt(){var e=document.createDocumentFragment(),n=document.createComment(""),t=Ke();return e.append(n,t),Kn(n,t),e}function q(e,n){e!==null&&e.before(n)}function Y(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function Kt(e,n){return Qt(e,n)}const re=new Map;function Qt(e,{target:n,anchor:t,props:r={},events:s,context:o,intro:a=!0}){Tt();var l=new Set,d=v=>{for(var i=0;i<v.length;i++){var f=v[i];if(!l.has(f)){l.add(f);var c=Jt(f);n.addEventListener(f,ye,{passive:c});var T=re.get(f);T===void 0?(document.addEventListener(f,ye,{passive:c}),re.set(f,1)):re.set(f,T+1)}}};d(Ue(Gt)),pn.add(d);var u=void 0,m=At(()=>{var v=t??n.appendChild(Ke());return ve(()=>{if(o){kn({});var i=w;i.c=o}s&&(r.$$events=s),u=e(v,r)||{},o&&Mn()}),()=>{var c;for(var i of l){n.removeEventListener(i,ye);var f=re.get(i);--f===0?(document.removeEventListener(i,ye),re.delete(i)):re.set(i,f)}pn.delete(d),v!==t&&((c=v.parentNode)==null||c.removeChild(v))}});return Xt.set(u,m),u}let Xt=new WeakMap;function hn(e,n,[t,r]=[0,0]){var s=e,o=null,a=null,l=gt,d=t>0?He:0,u=!1;const m=(i,f=!0)=>{u=!0,v(f,i)},v=(i,f)=>{l!==(l=i)&&(l?(o?Ce(o):f&&(o=ve(()=>f(s))),a&&xe(a,()=>{a=null})):(a?Ce(a):f&&(a=ve(()=>f(s,[t+1,r]))),o&&xe(o,()=>{o=null})))};Xe(()=>{u=!1,n(m),u||v(null,null)},d)}function we(e,n){return n}function er(e,n,t,r){for(var s=[],o=n.length,a=0;a<o;a++)en(n[a].e,s,!0);var l=o>0&&s.length===0&&t!==null;if(l){var d=t.parentNode;Rt(d),d.append(t),r.clear(),B(e,n[0].prev,n[o-1].next)}Un(s,()=>{for(var u=0;u<o;u++){var m=n[u];l||(r.delete(m.k),B(e,m.prev,m.next)),H(m.e,!l)}})}function be(e,n,t,r,s,o=null){var a=e,l={flags:n,items:new Map,first:null},d=(n&An)!==0;if(d){var u=e;a=u.appendChild(Ke())}var m=null,v=!1,i=wt(()=>{var f=t();return Dn(f)?f:f==null?[]:Ue(f)});Xe(()=>{var f=M(i),c=f.length;v&&c===0||(v=c===0,nr(f,l,a,s,n,r,t),o!==null&&(c===0?m?Ce(m):m=ve(()=>o(a)):m!==null&&xe(m,()=>{m=null})),M(i))})}function nr(e,n,t,r,s,o,a){var fe,ce,W,ue;var l=(s&mt)!==0,d=(s&(Je|Ge))!==0,u=e.length,m=n.items,v=n.first,i=v,f,c=null,T,F=[],A=[],b,g,_,p;if(l)for(p=0;p<u;p+=1)b=e[p],g=o(b,p),_=m.get(g),_!==void 0&&((fe=_.a)==null||fe.measure(),(T??(T=new Set)).add(_));for(p=0;p<u;p+=1){if(b=e[p],g=o(b,p),_=m.get(g),_===void 0){var $=i?i.e.nodes_start:t;c=rr($,n,c,c===null?n.first:c.next,b,g,p,r,s,a),m.set(g,c),F=[],A=[],i=c.next;continue}if(d&&tr(_,b,p,s),(_.e.f&j)!==0&&(Ce(_.e),l&&((ce=_.a)==null||ce.unfix(),(T??(T=new Set)).delete(_))),_!==i){if(f!==void 0&&f.has(_)){if(F.length<A.length){var z=A[0],x;c=z.prev;var ee=F[0],J=F[F.length-1];for(x=0;x<F.length;x+=1)gn(F[x],z,t);for(x=0;x<A.length;x+=1)f.delete(A[x]);B(n,ee.prev,J.next),B(n,c,ee),B(n,J,z),i=z,c=J,p-=1,F=[],A=[]}else f.delete(_),gn(_,i,t),B(n,_.prev,_.next),B(n,_,c===null?n.first:c.next),B(n,c,_),c=_;continue}for(F=[],A=[];i!==null&&i.k!==g;)(i.e.f&j)===0&&(f??(f=new Set)).add(i),A.push(i),i=i.next;if(i===null)continue;_=i}F.push(_),c=_,i=_.next}if(i!==null||f!==void 0){for(var G=f===void 0?[]:Ue(f);i!==null;)(i.e.f&j)===0&&G.push(i),i=i.next;var le=G.length;if(le>0){var je=(s&An)!==0&&u===0?t:null;if(l){for(p=0;p<le;p+=1)(W=G[p].a)==null||W.measure();for(p=0;p<le;p+=1)(ue=G[p].a)==null||ue.fix()}er(n,G,je,m)}}l&&Lt(()=>{var he;if(T!==void 0)for(_ of T)(he=_.a)==null||he.apply()}),h.first=n.first&&n.first.e,h.last=c&&c.e}function tr(e,n,t,r){(r&Je)!==0&&un(e.v,n),(r&Ge)!==0?un(e.i,t):e.i=t}function rr(e,n,t,r,s,o,a,l,d,u){var m=(d&Je)!==0,v=(d&pt)===0,i=m?v?Dt(s):Re(s):s,f=(d&Ge)===0?a:Re(a),c={i:f,v:i,k:o,a:null,e:null,prev:t,next:r};try{return c.e=ve(()=>l(e,i,f,u),Et),c.e.prev=t&&t.e,c.e.next=r&&r.e,t===null?n.first=c:(t.next=c,t.e.next=c.e),r!==null&&(r.prev=c,r.e.prev=c.e),c}finally{}}function gn(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,s=n?n.e.nodes_start:t,o=e.e.nodes_start;o!==r;){var a=Ve(o);s.before(o),o=a}}function B(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function Qn(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(n=0;n<s;n++)e[n]&&(t=Qn(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function or(){for(var e,n,t=0,r="",s=arguments.length;t<s;t++)(e=arguments[t])&&(n=Qn(e))&&(r&&(r+=" "),r+=n);return r}function sr(e){return typeof e=="object"?or(e):e??""}function ir(e,n,t){var r=e==null?"":""+e;return r=r?r+" "+n:n,r===""?null:r}function ar(e,n,t,r,s,o){var a=e.__className;if(a!==t||a===void 0){var l=ir(t,r);l==null?e.removeAttribute("class"):e.className=l,e.__className=t}return o}const lr=Symbol("is custom element"),fr=Symbol("is html");function cr(e,n,t,r){var s=ur(e);s[n]!==(s[n]=t)&&(t==null?e.removeAttribute(n):typeof t!="string"&&dr(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function ur(e){return e.__attributes??(e.__attributes={[lr]:e.nodeName.includes("-"),[fr]:e.namespaceURI===yt})}var yn=new Map;function dr(e){var n=yn.get(e.nodeName);if(n)return n;yn.set(e.nodeName,n=[]);for(var t,r=e,s=Element.prototype;s!==r;){t=En(r);for(var o in t)t[o].set&&n.push(o);r=Tn(r)}return n}function _r(e=!1){const n=w,t=n.l.u;if(!t)return;let r=()=>Ut(n.s);if(e){let s=0,o={};const a=Ye(()=>{let l=!1;const d=n.s;for(const u in d)d[u]!==o[u]&&(o[u]=d[u],l=!0);return l&&s++,s});r=()=>M(a)}t.b.length&&Nt(()=>{wn(n,r),$e(t.b)}),_n(()=>{const s=qt(()=>t.m.map(st));return()=>{for(const o of s)typeof o=="function"&&o()}}),t.a.length&&_n(()=>{wn(n,r),$e(t.a)})}function wn(e,n){if(e.l.s)for(const t of e.l.s)M(t);n()}const vr="5";var bn;typeof window<"u"&&((bn=window.__svelte??(window.__svelte={})).v??(bn.v=new Set)).add(vr);vt();const mr={EnzymeForward:2.56,EnzymeReverse:3.24,FiniteDifferences:22.287,ForwardDiff:1.304,Mooncake:8.828,ReverseDiff:10.845,ReverseDiffCompiled:2.537,Zygote:509.577},pr={EnzymeForward:8.345,EnzymeReverse:12.287,FiniteDifferences:147.104,ForwardDiff:2.323,Mooncake:6.597,ReverseDiff:54.787,ReverseDiffCompiled:6.561,Zygote:"error"},hr={EnzymeForward:2.675,EnzymeReverse:2.967,FiniteDifferences:28.509,ForwardDiff:1.658,Mooncake:9.993,ReverseDiff:58.29,ReverseDiffCompiled:5.637,Zygote:"error"},gr={EnzymeForward:2.463,EnzymeReverse:2.513,FiniteDifferences:35.87,ForwardDiff:1.28,Mooncake:8.024,ReverseDiff:33.626,ReverseDiffCompiled:2.804,Zygote:1208.718},yr={EnzymeForward:5.636,EnzymeReverse:25.938,FiniteDifferences:59.235,ForwardDiff:1.22,Mooncake:12.63,ReverseDiff:20.439,ReverseDiffCompiled:2.195,Zygote:"error"},wr={EnzymeForward:2.778,EnzymeReverse:11.588,FiniteDifferences:12.91,ForwardDiff:1.113,Mooncake:"error",ReverseDiff:"wrong",ReverseDiffCompiled:.408,Zygote:"error"},br={EnzymeForward:4.202,EnzymeReverse:2.066,FiniteDifferences:140.887,ForwardDiff:1.772,Mooncake:4.652,ReverseDiff:25.089,ReverseDiffCompiled:2.343,Zygote:"error"},Dr={EnzymeForward:20.64,EnzymeReverse:2.337,FiniteDifferences:635.021,ForwardDiff:10.413,Mooncake:5.061,ReverseDiff:25.676,ReverseDiffCompiled:1.799,Zygote:"error"},Er={EnzymeForward:38.855,EnzymeReverse:2.188,FiniteDifferences:1235.589,ForwardDiff:16.382,Mooncake:4.027,ReverseDiff:26.154,ReverseDiffCompiled:1.911,Zygote:"error"},Tr={EnzymeForward:179.144,EnzymeReverse:2.474,FiniteDifferences:6599.411,ForwardDiff:59.577,Mooncake:4.053,ReverseDiff:26.152,ReverseDiffCompiled:2.426,Zygote:"error"},Fr={EnzymeForward:2.83,EnzymeReverse:2.495,FiniteDifferences:28.339,ForwardDiff:1.669,Mooncake:9.805,ReverseDiff:53.065,ReverseDiffCompiled:6.26,Zygote:"error"},Rr={EnzymeForward:2.801,EnzymeReverse:3.073,FiniteDifferences:28.015,ForwardDiff:1.485,Mooncake:9.144,ReverseDiff:32.715,ReverseDiffCompiled:3.664,Zygote:1542.405},xr={EnzymeForward:"error",EnzymeReverse:5.308,FiniteDifferences:37.905,ForwardDiff:1.19,Mooncake:10.643,ReverseDiff:12.032,ReverseDiffCompiled:1.281,Zygote:516.291},Cr={EnzymeForward:2.839,EnzymeReverse:4.179,FiniteDifferences:52.407,ForwardDiff:1.335,Mooncake:6.603,ReverseDiff:27.414,ReverseDiffCompiled:2.728,Zygote:"error"},Nr={EnzymeForward:2.415,EnzymeReverse:2.379,FiniteDifferences:24.689,ForwardDiff:1.503,Mooncake:7.736,ReverseDiff:25.853,ReverseDiffCompiled:2.824,Zygote:2256.058},Ar={EnzymeForward:4.264,EnzymeReverse:2.416,FiniteDifferences:136.035,ForwardDiff:1.726,Mooncake:6.52,ReverseDiff:31.742,ReverseDiffCompiled:3.884,Zygote:"error"},kr={EnzymeForward:4.24,EnzymeReverse:2.436,FiniteDifferences:130.928,ForwardDiff:1.838,Mooncake:6.015,ReverseDiff:33.088,ReverseDiffCompiled:2.966,Zygote:"error"},Mr={EnzymeForward:2.776,EnzymeReverse:3.333,FiniteDifferences:9.359,ForwardDiff:1.515,Mooncake:8.8,ReverseDiff:20.624,ReverseDiffCompiled:2.455,Zygote:1184.78},Sr={EnzymeForward:2.309,EnzymeReverse:2.144,FiniteDifferences:35.057,ForwardDiff:1.268,Mooncake:6.744,ReverseDiff:14.276,ReverseDiffCompiled:1.368,Zygote:1212.769},zr={EnzymeForward:"error",EnzymeReverse:12.129,FiniteDifferences:44.117,ForwardDiff:1.067,Mooncake:11.907,ReverseDiff:18.14,ReverseDiffCompiled:3.489,Zygote:"error"},Lr={EnzymeForward:2.81,EnzymeReverse:2.984,FiniteDifferences:41.745,ForwardDiff:1.574,Mooncake:9.576,ReverseDiff:21.71,ReverseDiffCompiled:"wrong",Zygote:1089.187},Vr={EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",Mooncake:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Ir={EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",Mooncake:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Or={EnzymeForward:2.908,EnzymeReverse:2.127,FiniteDifferences:77.027,ForwardDiff:1.392,Mooncake:5.327,ReverseDiff:22.823,ReverseDiffCompiled:2.334,Zygote:"error"},Ze={assume_dirichlet:mr,assume_lkjcholu:pr,dot_observe:hr,dynamic_constraint:gr,multiple_constraints_same_var:yr,multithreaded:wr,n010:br,n050:Dr,n100:Er,n500:Tr,observe_index:Fr,observe_literal:Rr,assume_mvnormal:xr,observe_multivariate:Cr,observe_submodel:Nr,pdb_eight_schools_centered:Ar,pdb_eight_schools_noncentered:kr,assume_normal:Mr,assume_submodel:Sr,assume_wishart:zr,control_flow:Lr,demo_dot_assume_observe:Vr,demo_dot_assume_observe_index:Ir,dot_assume:Or},jr="1.14.0",Pr="1.5.0",Zr="5.6.1",$r="0.11.0",qr="0.4.5",Br="0.1.42",Ur="4.3.0",Hr="1.1.3",Jr="2.5.0",Gr="1.1.2",Wr="0.4.0",Yr="1.11.0",Kr="0.4.4",Qr="1.11.0",Xr="0.1.1",eo="0.15.6",no="0.5.0",to="1.72.3",ro="1.25.1",oo="1.3.1",so="0.1.10",io="0.2.4",ao="0.3.1",lo="4.16.0",fo="1.1.1+0",co="0.1.2",uo="0.1.2",_o="1.5.8",vo="1.16.0",mo="0.18.22",po="1.0.0",ho="1.11.0",go="0.1.2",yo="0.4.0",wo="1.1.0",bo="1.15.1",Do="0.6.54",Eo="1.11.0",To="0.25.120",Fo="0.9.4",Ro="1.6.0",xo="0.36.3",Co="0.13.44",No="0.8.8",Ao="0.0.180+0",ko="0.1.10",Mo="1.11.0",So="1.13.0",zo="0.12.32",Lo="0.10.38",Vo="1.1.3",Io="0.5.2",Oo="1.11.0",jo="0.2.0",Po="1.5.0",Zo="1.12.1",$o="0.3.28",qo="0.4.14",Bo="0.1.5",Uo="0.3.1",Ho="1.11.0",Jo="0.1.17",Go="0.2.4",Wo="1.0.0",Yo="1.7.0",Ko="9.4.0",Qo="0.0.36+0",Xo="1.11.0",es="0.2.0",ns="0.6.4",ts="8.6.0+0",rs="1.11.0",os="1.7.2+0",ss="1.11.0+1",is="0.9.1+6",as="1.11.0",ls="1.11.0",fs="2.1.2",cs="0.3.29",us="1.11.0",ds="1.1.0",_s="0.5.16",vs="0.4.2",ms="1.11.0",ps="2.28.6+0",hs="0.2.0",gs="1.2.0",ys="2.0.0",ws="1.11.0",bs="0.4.118",Ds="2023.12.12",Es="1.1.3",Ts="1.2.0",Fs="0.4.4",Rs="0.3.27+1",xs="0.8.5+0",Cs="0.5.6+0",Ns="1.8.0",As="0.11.35",ks="2.8.3",Ms="1.11.0",Ss="1.2.1",zs="1.4.3",Ls="1.11.0",Vs="0.1.4",Is="1.10.4",Os="1.3.0",js="2.11.2",Ps="1.11.0",Zs="0.1.0",$s="1.2.2",qs="1.3.1",Bs="1.16.1",Us="1.4.2",Hs="0.8.0",Js="0.5.1+0",Gs="2.2.7",Ws="0.7.0",Ys="1.2.1",Ks="1.11.0",Qs="1.1.2",Xs="1.11.0",ei="0.9.4",ni="1.11.0",ti="1.2.1",ri="1.11.0",oi="0.1.2",si="2.5.1",ii="0.1.15",ai="1.9.13",li="1.4.3",fi="1.11.1",ci="1.7.0",ui="0.34.5",di="1.5.0",_i="0.7.1",vi="0.3.1",mi=null,pi="7.7.0+0",hi="1.0.3",gi="1.0.1",yi="1.12.0",wi="1.10.0",bi="0.1.7",Di="1.11.0",Ei="0.1.4",Ti="0.4.84",Fi="1.11.0",Ri="1.11.0",xi="1.2.13+1",Ci="0.7.7",Ni="0.2.7",Ai="5.11.0+0",ki="1.59.0+0",Mi="17.4.0+2",Si={ADTypes:jr,AbstractFFTs:Pr,AbstractMCMC:Zr,AbstractPPL:$r,AbstractTrees:qr,Accessors:Br,Adapt:Ur,AliasTables:Hr,ArgCheck:Jr,ArgTools:Gr,ArnoldiMethod:Wr,Artifacts:Yr,BangBang:Kr,Base64:Qr,Baselet:Xr,Bijectors:eo,CEnum:no,ChainRules:to,ChainRulesCore:ro,Chairmarks:oo,ChangesOfVariables:so,CommonSolve:io,CommonSubexpressions:ao,Compat:lo,CompilerSupportLibraries_jll:fo,CompositionsBase:co,ConsoleProgressMonitor:uo,ConstructionBase:_o,DataAPI:vo,DataStructures:mo,DataValueInterfaces:po,Dates:ho,DefineSingletons:go,DensityInterface:yo,DiffResults:wo,DiffRules:bo,DifferentiationInterface:Do,Distributed:Eo,Distributions:To,DocStringExtensions:Fo,Downloads:Ro,DynamicPPL:xo,Enzyme:Co,EnzymeCore:No,Enzyme_jll:Ao,ExprTools:ko,FileWatching:Mo,FillArrays:So,FiniteDifferences:zo,ForwardDiff:Lo,FunctionWrappers:Vo,Functors:Io,Future:Oo,GPUArraysCore:jo,GPUCompiler:Po,Graphs:Zo,HypergeometricFunctions:$o,IRTools:qo,Inflate:Bo,InitialValues:Uo,InteractiveUtils:Ho,InverseFunctions:Jo,IrrationalConstants:Go,IteratorInterfaceExtensions:Wo,JLLWrappers:Yo,JSON:"0.21.4",LLVM:Ko,LLVMExtra_jll:Qo,LazyArtifacts:Xo,LeftChildRightSiblingTrees:es,LibCURL:ns,LibCURL_jll:ts,LibGit2:rs,LibGit2_jll:os,LibSSH2_jll:ss,LibTracyClient_jll:is,Libdl:as,LinearAlgebra:ls,LogDensityProblems:fs,LogExpFunctions:cs,Logging:us,LoggingExtras:ds,MacroTools:_s,MappedArrays:vs,Markdown:ms,MbedTLS_jll:ps,MicroCollections:hs,Missings:gs,MistyClosures:ys,Mmap:ws,Mooncake:bs,MozillaCACerts_jll:Ds,NaNMath:Es,NetworkOptions:Ts,ObjectFile:Fs,OpenBLAS_jll:Rs,OpenLibm_jll:xs,OpenSpecFun_jll:Cs,OrderedCollections:Ns,PDMats:As,Parsers:ks,Pkg:Ms,PrecompileTools:Ss,Preferences:zs,Printf:Ls,ProgressLogging:Vs,ProgressMeter:Is,PtrArrays:Os,QuadGK:js,Random:Ps,RealDot:Zs,Reexport:$s,Requires:qs,ReverseDiff:Bs,Richardson:Us,Rmath:Hs,Rmath_jll:Js,Roots:Gs,SHA:Ws,Scratch:Ys,Serialization:Ks,Setfield:Qs,SharedArrays:Xs,SimpleTraits:ei,Sockets:ni,SortingAlgorithms:ti,SparseArrays:ri,SparseInverseSubset:oi,SpecialFunctions:si,SplittablesBase:ii,StaticArrays:ai,StaticArraysCore:li,Statistics:fi,StatsAPI:ci,StatsBase:ui,StatsFuns:di,StructArrays:_i,StructIO:vi,SuiteSparse:mi,SuiteSparse_jll:pi,TOML:hi,TableTraits:gi,Tables:yi,Tar:wi,TerminalLoggers:bi,Test:Di,Tracy:Ei,Transducers:Ti,UUIDs:Fi,Unicode:Ri,Zlib_jll:xi,Zygote:Ci,ZygoteRules:Ni,libblastrampoline_jll:Ai,nghttp2_jll:ki,p7zip_jll:Mi},zi=`@model function assume_dirichlet()
    a ~ Dirichlet([1.0, 5.0])
end

@register assume_dirichlet()`,Li=`@model function assume_lkjcholu()
    a ~ LKJCholesky(5, 1.0, 'U')
end

@register assume_lkjcholu()`,Vi=`@model function dot_observe(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    x .~ Normal(a)
end

@register dot_observe()`,Ii=`@model function dynamic_constraint()
    a ~ Normal()
    b ~ truncated(Normal(); lower = a)
end

@register dynamic_constraint()`,Oi=`@model function multiple_constraints_same_var(::Type{TV} = Vector{Float64}) where {TV}
    x = TV(undef, 5)
    x[1] ~ Normal()
    x[2] ~ InverseGamma(2, 3)
    x[3] ~ truncated(Normal(), -5, 20)
    x[4:5] ~ Dirichlet([1.0, 2.0])
end

@register multiple_constraints_same_var()`,ji=`#=
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

@register multithreaded([1.5, 2.0, 2.5, 1.5, 2.0, 2.5])`,Pi=`@model function n010(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 10)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

@register n010()`,Zi=`@model function n050(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 50)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

@register n050()`,$i=`@model function n100(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 100)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

@register n100()`,qi=`@model function n500(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 500)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

@register n500()`,Bi=`@model function observe_index(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end

@register observe_index()`,Ui=`@model function observe_literal()
    a ~ Normal()
    1.5 ~ Normal(a)
end

@register observe_literal()`,Hi=`@model function assume_mvnormal()
    a ~ MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0])
end

@register assume_mvnormal()`,Ji=`@model function observe_multivariate(
    x = [1.5, 2.0, 2.5],
    ::Type{TV} = Vector{Float64},
) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    x ~ MvNormal(a, I)
end

@register observe_multivariate()`,Gi=`@model function inner2(x, a)
    x ~ Normal(a)
end
@model function observe_submodel(x = 1.5)
    a ~ Normal()
    _ignore ~ to_submodel(inner2(x, a))
end

@register observe_submodel()`,Wi=`J = 8
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

@register pdb_eight_schools_centered(J, y, sigma)`,Yi=`J = 8
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

@register pdb_eight_schools_noncentered(J, y, sigma)`,Ki=`@model function assume_normal()
    a ~ Normal()
end

@register assume_normal()`,Qi=`@model function inner1()
    return a ~ Normal()
end
@model function assume_submodel()
    a ~ to_submodel(inner1())
    x ~ Normal(a)
end

@register assume_submodel()`,Xi=`@model function assume_wishart()
    a ~ Wishart(7, [1.0 0.5; 0.5 1.0])
end

@register assume_wishart()`,ea=`#= 
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

@register control_flow()`,na=`@model function demo_dot_assume_observe(
    x = [1.5, 2.0],
    ::Type{TV} = Vector{Float64},
) where {TV}
    # \`dot_assume\` and \`observe\`
    s = TV(undef, length(x))
    m = TV(undef, length(x))
    s .~ InverseGamma(2, 3)
    m ~ product_distribution(Normal.(0, sqrt.(s)))

    x ~ MvNormal(m, Diagonal(s))
    return (; s = s, m = m, x = x, logp = getlogp(__varinfo__))
end

@register demo_dot_assume_observe()`,ta=`@model function demo_dot_assume_observe_index(
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

    return (; s = s, m = m, x = x, logp = getlogp(__varinfo__))
end

@register demo_dot_assume_observe_index()`,ra=`@model function dot_assume(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 5)
    a .~ Normal()
end

@register dot_assume()`,oa={assume_dirichlet:zi,assume_lkjcholu:Li,dot_observe:Vi,dynamic_constraint:Ii,multiple_constraints_same_var:Oi,multithreaded:ji,n010:Pi,n050:Zi,n100:$i,n500:qi,observe_index:Bi,observe_literal:Ui,assume_mvnormal:Hi,observe_multivariate:Ji,observe_submodel:Gi,pdb_eight_schools_centered:Wi,pdb_eight_schools_noncentered:Yi,assume_normal:Ki,assume_submodel:Qi,assume_wishart:Xi,control_flow:ea,demo_dot_assume_observe:na,demo_dot_assume_observe_index:ta,dot_assume:ra};var sa=X('<th class="svelte-13swsff"> </th>'),ia=X('<td class="svelte-13swsff"> </td>'),aa=X('<a class="issue svelte-13swsff" target="_blank">(?)</a>'),la=X('<td class="svelte-13swsff"><!> <span> </span></td>'),fa=X('<tr class="svelte-13swsff"><td class="svelte-13swsff"> <div class="model-definition svelte-13swsff"><pre> </pre></div></td><!></tr>'),ca=X('<tr class="svelte-13swsff"><td class="svelte-13swsff"> </td><td class="svelte-13swsff"> </td></tr>'),ua=X(`<div id="main-wrapper" class="svelte-13swsff"><main class="svelte-13swsff"><h1>Turing AD tests</h1> <p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p> <p>This page is intended as a brief overview of how different AD
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
                describes the problem.</li></ul> <h2>Results</h2> <p><a href="adtests.json" target="_blank" download="">Download the raw data (JSON)</a></p> <table id="results" class="svelte-13swsff"><thead><tr class="svelte-13swsff"><th class="svelte-13swsff">Model name \\\\ AD type</th><!></tr></thead><tbody></tbody></table> <h2>Manifest</h2> <p>The tests above were run with the following package versions:</p> <table id="manifest" class="svelte-13swsff"><thead><tr class="svelte-13swsff"><th class="svelte-13swsff">Package</th><th class="svelte-13swsff">Version</th></tr></thead><tbody></tbody></table></main></div>`);function da(e,n){kn(n,!1);const t=Object.keys(Ze),r=Object.keys(Ze[t[0]]);console.log("Models: ",t),console.log("AD types: ",r);function s(b){return Object.entries(b).sort(([g,_],[p,$])=>g.localeCompare(p))}const o="https://github.com/EnzymeAD/Enzyme.jl/issues/1995",a="https://github.com/chalk-lab/Mooncake.jl/issues/570",l="https://github.com/EnzymeAD/Enzyme.jl/issues/2387",d={assume_mvnormal__EnzymeForward:o,assume_wishart__EnzymeForward:o,multithreaded__Mooncake:a,dot_assume_observe_index__EnzymeForward:l,dot_assume_observe_index__EnzymeReverse:l};_r();var u=ua(),m=D(u),v=I(D(m),12),i=D(v),f=D(i),c=I(D(f));be(c,1,()=>r,we,(b,g)=>{var _=sa(),p=D(_);te(()=>Y(p,M(g))),q(b,_)});var T=I(i);be(T,5,()=>s(Ze),we,(b,g)=>{let _=()=>M(g)[0],p=()=>M(g)[1];var $=fa(),z=D($),x=D(z),ee=I(x),J=D(ee),G=D(J),le=I(z);be(le,1,()=>s(p()),we,(je,fe)=>{let ce=()=>M(fe)[0],W=()=>M(fe)[1];var ue=Yt(),he=Ft(ue);{var Xn=ne=>{var de=ia(),ge=D(de);te(()=>Y(ge,W())),q(ne,de)},et=ne=>{var de=la(),ge=D(de);{var nt=Pe=>{var rn=aa();te(()=>cr(rn,"href",d[`${_()}__${ce()}`])),q(Pe,rn)};hn(ge,Pe=>{d[`${_()}__${ce()}`]&&Pe(nt)})}var tn=I(ge,2),tt=D(tn);te(()=>{ar(tn,1,sr(W()),"svelte-13swsff"),Y(tt,W())}),q(ne,de)};hn(he,ne=>{typeof W()=="number"?ne(Xn):ne(et,!1)})}q(je,ue)}),te(()=>{Y(x,`${_()??""} `),Y(G,oa[_()])}),q(b,$)});var F=I(v,6),A=I(D(F));be(A,5,()=>s(Si),we,(b,g)=>{let _=()=>M(g)[0],p=()=>M(g)[1];var $=ca(),z=D($),x=D(z),ee=I(z),J=D(ee);te(()=>{Y(x,_()),Y(J,p()===null?"":`v${p()}`)}),q(b,$)}),q(e,u),Mn()}Kt(da,{target:document.getElementById("app")});
