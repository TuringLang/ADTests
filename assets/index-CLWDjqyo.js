(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const on=!1;var Dn=Array.isArray,rt=Array.prototype.indexOf,Ue=Array.from,ot=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,En=Object.getOwnPropertyDescriptors,Fn=Object.getPrototypeOf,an=Object.isExtensible;function st(e){return e()}function $e(e){for(var n=0;n<e.length;n++)e[n]()}const L=2,Tn=4,Me=8,Rn=16,Z=32,ie=64,Fe=128,A=256,Te=512,R=1024,O=2048,Q=4096,j=8192,ze=16384,it=32768,He=65536,at=1<<19,xn=1<<20,ln=1<<21,fn=Symbol("$state");function Cn(e){return e===this.v}function lt(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function An(e){return!lt(e,this.v)}function ft(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ct(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ut(e){throw new Error("https://svelte.dev/e/effect_orphan")}function dt(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}let Le=!1,_t=!1;function vt(){Le=!0}const Je=1,Ge=2,Nn=4,mt=8,pt=16,ht=2,gt=Symbol(),yt="http://www.w3.org/1999/xhtml";let w=null;function cn(e){w=e}function kn(e,n=!1,t){var r=w={p:w,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};Le&&!n&&(w.l={s:null,u:null,r1:[],r2:Re(!1)}),Ct(()=>{r.d=!0})}function Sn(e){const n=w;if(n!==null){const a=n.e;if(a!==null){var t=h,r=y;n.e=null;try{for(var s=0;s<a.length;s++){var o=a[s];se(o.effect),oe(o.reaction),Zn(o.fn)}}finally{se(t),oe(r)}}w=n.p,n.m=!0}return{}}function We(){return!Le||w!==null&&w.l===null}function Ye(e){var n=L|O,t=y!==null&&(y.f&L)!==0?y:null;return h===null||t!==null&&(t.f&A)!==0?n|=A:h.f|=xn,{ctx:w,deps:null,effects:null,equals:Cn,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??h}}function wt(e){const n=Ye(e);return n.equals=An,n}function Mn(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)H(n[t])}}function bt(e){for(var n=e.parent;n!==null;){if((n.f&L)===0)return n;n=n.parent}return null}function zn(e){var n,t=h;se(bt(e));try{Mn(e),n=Yn(e)}finally{se(t)}return n}function Ln(e){var n=zn(e),t=(U||(e.f&A)!==0)&&e.deps!==null?Q:R;M(e,t),e.equals(n)||(e.v=n,e.wv=Gn())}const _e=new Map;function Re(e,n){var t={f:0,v:e,reactions:null,equals:Cn,rv:0,wv:0};return t}function Dt(e,n=!1){var r;const t=Re(e);return n||(t.equals=An),Le&&w!==null&&w.l!==null&&((r=w.l).s??(r.s=[])).push(t),t}function un(e,n){if(!e.equals(n)){var t=e.v;me?_e.set(e,n):_e.set(e,t),e.v=n,(e.f&L)!==0&&((e.f&O)!==0&&zn(e),M(e,(e.f&A)===0?R:Q)),e.wv=Gn(),On(e,O),We()&&h!==null&&(h.f&R)!==0&&(h.f&(Z|ie))===0&&(k===null?Ot([e]):k.push(e))}return n}function On(e,n){var t=e.reactions;if(t!==null)for(var r=We(),s=t.length,o=0;o<s;o++){var a=t[o],l=a.f;(l&O)===0&&(!r&&a===h||(M(a,n),(l&(R|A))!==0&&((l&L)!==0?On(a,Q):Ve(a))))}}let Et=!1;var dn,In,Vn,jn;function Ft(){if(dn===void 0){dn=window,In=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Vn=sn(n,"firstChild").get,jn=sn(n,"nextSibling").get,an(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),an(t)&&(t.__t=void 0)}}function Ke(e=""){return document.createTextNode(e)}function Qe(e){return Vn.call(e)}function Oe(e){return jn.call(e)}function D(e,n){return Qe(e)}function Tt(e,n){{var t=Qe(e);return t instanceof Comment&&t.data===""?Oe(t):t}}function I(e,n=1,t=!1){let r=e;for(;n--;)r=Oe(r);return r}function Rt(e){e.textContent=""}function Pn(e){h===null&&y===null&&ut(),y!==null&&(y.f&A)!==0&&h===null&&ct(),me&&ft()}function xt(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function ae(e,n,t,r=!0){var s=h,o={ctx:w,deps:null,nodes_start:null,nodes_end:null,f:e|O,first:null,fn:n,last:null,next:null,parent:s,prev:null,teardown:null,transitions:null,wv:0};if(t)try{nn(o),o.f|=it}catch(d){throw H(o),d}else n!==null&&Ve(o);var a=t&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&(xn|Fe))===0;if(!a&&r&&(s!==null&&xt(o,s),y!==null&&(y.f&L)!==0)){var l=y;(l.effects??(l.effects=[])).push(o)}return o}function Ct(e){const n=ae(Me,null,!1);return M(n,R),n.teardown=e,n}function _n(e){Pn();var n=h!==null&&(h.f&Z)!==0&&w!==null&&!w.m;if(n){var t=w;(t.e??(t.e=[])).push({fn:e,effect:h,reaction:y})}else{var r=Zn(e);return r}}function At(e){return Pn(),kt(e)}function Nt(e){const n=ae(ie,e,!0);return(t={})=>new Promise(r=>{t.outro?xe(n,()=>{H(n),r(void 0)}):(H(n),r(void 0))})}function Zn(e){return ae(Tn,e,!1)}function kt(e){return ae(Me,e,!0)}function te(e,n=[],t=Ye){const r=n.map(t);return Xe(()=>e(...r.map(S)))}function Xe(e,n=0){return ae(Me|Rn|n,e,!0)}function ve(e,n=!0){return ae(Me|Z,e,!0,n)}function $n(e){var n=e.teardown;if(n!==null){const t=me,r=y;vn(!0),oe(null);try{n.call(null)}finally{vn(t),oe(r)}}}function Bn(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&ie)!==0?t.parent=null:H(t,n),t=r}}function St(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&Z)===0&&H(n),n=t}}function H(e,n=!0){var t=!1;(n||(e.f&at)!==0)&&e.nodes_start!==null&&(Mt(e.nodes_start,e.nodes_end),t=!0),Bn(e,n&&!t),Se(e,0),M(e,ze);var r=e.transitions;if(r!==null)for(const o of r)o.stop();$n(e);var s=e.parent;s!==null&&s.first!==null&&qn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Mt(e,n){for(;e!==null;){var t=e===n?null:Oe(e);e.remove(),e=t}}function qn(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function xe(e,n){var t=[];en(e,t,!0),Un(t,()=>{H(e),n&&n()})}function Un(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var s of e)s.out(r)}else n()}function en(e,n,t){if((e.f&j)===0){if(e.f^=j,e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&n.push(a);for(var r=e.first;r!==null;){var s=r.next,o=(r.f&He)!==0||(r.f&Z)!==0;en(r,n,o?t:!1),r=s}}}function Ce(e){Hn(e,!0)}function Hn(e,n){if((e.f&j)!==0){e.f^=j,(e.f&R)===0&&(e.f^=R),pe(e)&&(M(e,O),Ve(e));for(var t=e.first;t!==null;){var r=t.next,s=(t.f&He)!==0||(t.f&Z)!==0;Hn(t,s?n:!1),t=r}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||n)&&o.in()}}let Ae=[];function zt(){var e=Ae;Ae=[],$e(e)}function Lt(e){Ae.length===0&&queueMicrotask(zt),Ae.push(e)}let De=!1,Be=!1,Ne=null,K=!1,me=!1;function vn(e){me=e}let Ee=[];let y=null,V=!1;function oe(e){y=e}let h=null;function se(e){h=e}let P=null,E=null,C=0,k=null;function Ot(e){k=e}let Jn=1,ke=0,U=!1;function Gn(){return++Jn}function pe(e){var v;var n=e.f;if((n&O)!==0)return!0;if((n&Q)!==0){var t=e.deps,r=(n&A)!==0;if(t!==null){var s,o,a=(n&Te)!==0,l=r&&h!==null&&!U,d=t.length;if(a||l){var u=e,m=u.parent;for(s=0;s<d;s++)o=t[s],(a||!((v=o==null?void 0:o.reactions)!=null&&v.includes(u)))&&(o.reactions??(o.reactions=[])).push(u);a&&(u.f^=Te),l&&m!==null&&(m.f&A)===0&&(u.f^=A)}for(s=0;s<d;s++)if(o=t[s],pe(o)&&Ln(o),o.wv>e.wv)return!0}(!r||h!==null&&!U)&&M(e,R)}return!1}function It(e,n){for(var t=n;t!==null;){if((t.f&Fe)!==0)try{t.fn(e);return}catch{t.f^=Fe}t=t.parent}throw De=!1,e}function mn(e){return(e.f&ze)===0&&(e.parent===null||(e.parent.f&Fe)===0)}function Ie(e,n,t,r){if(De){if(t===null&&(De=!1),mn(n))throw e;return}if(t!==null&&(De=!0),It(e,n),mn(n))throw e}function Wn(e,n,t=!0){var r=e.reactions;if(r!==null)for(var s=0;s<r.length;s++){var o=r[s];P!=null&&P.includes(e)||((o.f&L)!==0?Wn(o,n,!1):n===o&&(t?M(o,O):(o.f&R)!==0&&M(o,Q),Ve(o)))}}function Yn(e){var f;var n=E,t=C,r=k,s=y,o=U,a=P,l=w,d=V,u=e.f;E=null,C=0,k=null,U=(u&A)!==0&&(V||!K||y===null),y=(u&(Z|ie))===0?e:null,P=null,cn(e.ctx),V=!1,ke++,e.f|=ln;try{var m=(0,e.fn)(),v=e.deps;if(E!==null){var i;if(Se(e,C),v!==null&&C>0)for(v.length=C+E.length,i=0;i<E.length;i++)v[C+i]=E[i];else e.deps=v=E;if(!U)for(i=C;i<v.length;i++)((f=v[i]).reactions??(f.reactions=[])).push(e)}else v!==null&&C<v.length&&(Se(e,C),v.length=C);if(We()&&k!==null&&!V&&v!==null&&(e.f&(L|Q|O))===0)for(i=0;i<k.length;i++)Wn(k[i],e);return s!==null&&s!==e&&(ke++,k!==null&&(r===null?r=k:r.push(...k))),m}finally{E=n,C=t,k=r,y=s,U=o,P=a,cn(l),V=d,e.f^=ln}}function Vt(e,n){let t=n.reactions;if(t!==null){var r=rt.call(t,e);if(r!==-1){var s=t.length-1;s===0?t=n.reactions=null:(t[r]=t[s],t.pop())}}t===null&&(n.f&L)!==0&&(E===null||!E.includes(n))&&(M(n,Q),(n.f&(A|Te))===0&&(n.f^=Te),Mn(n),Se(n,0))}function Se(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Vt(e,t[r])}function nn(e){var n=e.f;if((n&ze)===0){M(e,R);var t=h,r=w,s=K;h=e,K=!0;try{(n&Rn)!==0?St(e):Bn(e),$n(e);var o=Yn(e);e.teardown=typeof o=="function"?o:null,e.wv=Jn;var a=e.deps,l;on&&_t&&e.f&O}catch(d){Ie(d,e,t,r||e.ctx)}finally{K=s,h=t}}}function jt(){try{dt()}catch(e){if(Ne!==null)Ie(e,Ne,null);else throw e}}function Pt(){var e=K;try{var n=0;for(K=!0;Ee.length>0;){n++>1e3&&jt();var t=Ee,r=t.length;Ee=[];for(var s=0;s<r;s++){var o=$t(t[s]);Zt(o)}_e.clear()}}finally{Be=!1,K=e,Ne=null}}function Zt(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(ze|j))===0)try{pe(r)&&(nn(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?qn(r):r.fn=null))}catch(s){Ie(s,r,null,r.ctx)}}}function Ve(e){Be||(Be=!0,queueMicrotask(Pt));for(var n=Ne=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(ie|Z))!==0){if((t&R)===0)return;n.f^=R}}Ee.push(n)}function $t(e){for(var n=[],t=e;t!==null;){var r=t.f,s=(r&(Z|ie))!==0,o=s&&(r&R)!==0;if(!o&&(r&j)===0){if((r&Tn)!==0)n.push(t);else if(s)t.f^=R;else try{pe(t)&&nn(t)}catch(d){Ie(d,t,null,t.ctx)}var a=t.first;if(a!==null){t=a;continue}}var l=t.parent;for(t=t.next;t===null&&l!==null;)t=l.next,l=l.parent}return n}function S(e){var n=e.f,t=(n&L)!==0;if(y!==null&&!V){if(!(P!=null&&P.includes(e))){var r=y.deps;e.rv<ke&&(e.rv=ke,E===null&&r!==null&&r[C]===e?C++:E===null?E=[e]:(!U||!E.includes(e))&&E.push(e))}}else if(t&&e.deps===null&&e.effects===null){var s=e,o=s.parent;o!==null&&(o.f&A)===0&&(s.f^=A)}return t&&(s=e,pe(s)&&Ln(s)),me&&_e.has(e)?_e.get(e):e.v}function Bt(e){var n=V;try{return V=!0,e()}finally{V=n}}const qt=-7169;function M(e,n){e.f=e.f&qt|n}function Ut(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(fn in e)qe(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&fn in t&&qe(t)}}}function qe(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{qe(e[r],n)}catch{}const t=Fn(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=En(t);for(let s in r){const o=r[s].get;if(o)try{o.call(e)}catch{}}}}}const Ht=["touchstart","touchmove"];function Jt(e){return Ht.includes(e)}const Gt=new Set,pn=new Set;function ye(e){var b;var n=this,t=n.ownerDocument,r=e.type,s=((b=e.composedPath)==null?void 0:b.call(e))||[],o=s[0]||e.target,a=0,l=e.__root;if(l){var d=s.indexOf(l);if(d!==-1&&(n===document||n===window)){e.__root=n;return}var u=s.indexOf(n);if(u===-1)return;d<=u&&(a=d)}if(o=s[a]||e.target,o!==n){ot(e,"currentTarget",{configurable:!0,get(){return o||t}});var m=y,v=h;oe(null),se(null);try{for(var i,f=[];o!==null;){var c=o.assignedSlot||o.parentNode||o.host||null;try{var F=o["__"+r];if(F!=null&&(!o.disabled||e.target===o))if(Dn(F)){var[T,...N]=F;T.apply(o,[e,...N])}else F.call(o,e)}catch(g){i?f.push(g):i=g}if(e.cancelBubble||c===n||c===null)break;o=c}if(i){for(let g of f)queueMicrotask(()=>{throw g});throw i}}finally{e.__root=n,delete e.currentTarget,oe(m),se(v)}}}function Wt(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function Kn(e,n){var t=h;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function X(e,n){var t=(n&ht)!==0,r,s=!e.startsWith("<!>");return()=>{r===void 0&&(r=Wt(s?e:"<!>"+e),r=Qe(r));var o=t||In?document.importNode(r,!0):r.cloneNode(!0);return Kn(o,o),o}}function Yt(){var e=document.createDocumentFragment(),n=document.createComment(""),t=Ke();return e.append(n,t),Kn(n,t),e}function B(e,n){e!==null&&e.before(n)}function Y(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function Kt(e,n){return Qt(e,n)}const re=new Map;function Qt(e,{target:n,anchor:t,props:r={},events:s,context:o,intro:a=!0}){Ft();var l=new Set,d=v=>{for(var i=0;i<v.length;i++){var f=v[i];if(!l.has(f)){l.add(f);var c=Jt(f);n.addEventListener(f,ye,{passive:c});var F=re.get(f);F===void 0?(document.addEventListener(f,ye,{passive:c}),re.set(f,1)):re.set(f,F+1)}}};d(Ue(Gt)),pn.add(d);var u=void 0,m=Nt(()=>{var v=t??n.appendChild(Ke());return ve(()=>{if(o){kn({});var i=w;i.c=o}s&&(r.$$events=s),u=e(v,r)||{},o&&Sn()}),()=>{var c;for(var i of l){n.removeEventListener(i,ye);var f=re.get(i);--f===0?(document.removeEventListener(i,ye),re.delete(i)):re.set(i,f)}pn.delete(d),v!==t&&((c=v.parentNode)==null||c.removeChild(v))}});return Xt.set(u,m),u}let Xt=new WeakMap;function hn(e,n,[t,r]=[0,0]){var s=e,o=null,a=null,l=gt,d=t>0?He:0,u=!1;const m=(i,f=!0)=>{u=!0,v(f,i)},v=(i,f)=>{l!==(l=i)&&(l?(o?Ce(o):f&&(o=ve(()=>f(s))),a&&xe(a,()=>{a=null})):(a?Ce(a):f&&(a=ve(()=>f(s,[t+1,r]))),o&&xe(o,()=>{o=null})))};Xe(()=>{u=!1,n(m),u||v(null,null)},d)}function we(e,n){return n}function er(e,n,t,r){for(var s=[],o=n.length,a=0;a<o;a++)en(n[a].e,s,!0);var l=o>0&&s.length===0&&t!==null;if(l){var d=t.parentNode;Rt(d),d.append(t),r.clear(),q(e,n[0].prev,n[o-1].next)}Un(s,()=>{for(var u=0;u<o;u++){var m=n[u];l||(r.delete(m.k),q(e,m.prev,m.next)),H(m.e,!l)}})}function be(e,n,t,r,s,o=null){var a=e,l={flags:n,items:new Map,first:null},d=(n&Nn)!==0;if(d){var u=e;a=u.appendChild(Ke())}var m=null,v=!1,i=wt(()=>{var f=t();return Dn(f)?f:f==null?[]:Ue(f)});Xe(()=>{var f=S(i),c=f.length;v&&c===0||(v=c===0,nr(f,l,a,s,n,r,t),o!==null&&(c===0?m?Ce(m):m=ve(()=>o(a)):m!==null&&xe(m,()=>{m=null})),S(i))})}function nr(e,n,t,r,s,o,a){var fe,ce,W,ue;var l=(s&mt)!==0,d=(s&(Je|Ge))!==0,u=e.length,m=n.items,v=n.first,i=v,f,c=null,F,T=[],N=[],b,g,_,p;if(l)for(p=0;p<u;p+=1)b=e[p],g=o(b,p),_=m.get(g),_!==void 0&&((fe=_.a)==null||fe.measure(),(F??(F=new Set)).add(_));for(p=0;p<u;p+=1){if(b=e[p],g=o(b,p),_=m.get(g),_===void 0){var $=i?i.e.nodes_start:t;c=rr($,n,c,c===null?n.first:c.next,b,g,p,r,s,a),m.set(g,c),T=[],N=[],i=c.next;continue}if(d&&tr(_,b,p,s),(_.e.f&j)!==0&&(Ce(_.e),l&&((ce=_.a)==null||ce.unfix(),(F??(F=new Set)).delete(_))),_!==i){if(f!==void 0&&f.has(_)){if(T.length<N.length){var z=N[0],x;c=z.prev;var ee=T[0],J=T[T.length-1];for(x=0;x<T.length;x+=1)gn(T[x],z,t);for(x=0;x<N.length;x+=1)f.delete(N[x]);q(n,ee.prev,J.next),q(n,c,ee),q(n,J,z),i=z,c=J,p-=1,T=[],N=[]}else f.delete(_),gn(_,i,t),q(n,_.prev,_.next),q(n,_,c===null?n.first:c.next),q(n,c,_),c=_;continue}for(T=[],N=[];i!==null&&i.k!==g;)(i.e.f&j)===0&&(f??(f=new Set)).add(i),N.push(i),i=i.next;if(i===null)continue;_=i}T.push(_),c=_,i=_.next}if(i!==null||f!==void 0){for(var G=f===void 0?[]:Ue(f);i!==null;)(i.e.f&j)===0&&G.push(i),i=i.next;var le=G.length;if(le>0){var je=(s&Nn)!==0&&u===0?t:null;if(l){for(p=0;p<le;p+=1)(W=G[p].a)==null||W.measure();for(p=0;p<le;p+=1)(ue=G[p].a)==null||ue.fix()}er(n,G,je,m)}}l&&Lt(()=>{var he;if(F!==void 0)for(_ of F)(he=_.a)==null||he.apply()}),h.first=n.first&&n.first.e,h.last=c&&c.e}function tr(e,n,t,r){(r&Je)!==0&&un(e.v,n),(r&Ge)!==0?un(e.i,t):e.i=t}function rr(e,n,t,r,s,o,a,l,d,u){var m=(d&Je)!==0,v=(d&pt)===0,i=m?v?Dt(s):Re(s):s,f=(d&Ge)===0?a:Re(a),c={i:f,v:i,k:o,a:null,e:null,prev:t,next:r};try{return c.e=ve(()=>l(e,i,f,u),Et),c.e.prev=t&&t.e,c.e.next=r&&r.e,t===null?n.first=c:(t.next=c,t.e.next=c.e),r!==null&&(r.prev=c,r.e.prev=c.e),c}finally{}}function gn(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,s=n?n.e.nodes_start:t,o=e.e.nodes_start;o!==r;){var a=Oe(o);s.before(o),o=a}}function q(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function Qn(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(n=0;n<s;n++)e[n]&&(t=Qn(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function or(){for(var e,n,t=0,r="",s=arguments.length;t<s;t++)(e=arguments[t])&&(n=Qn(e))&&(r&&(r+=" "),r+=n);return r}function sr(e){return typeof e=="object"?or(e):e??""}function ir(e,n,t){var r=e==null?"":""+e;return r=r?r+" "+n:n,r===""?null:r}function ar(e,n,t,r,s,o){var a=e.__className;if(a!==t||a===void 0){var l=ir(t,r);l==null?e.removeAttribute("class"):e.className=l,e.__className=t}return o}const lr=Symbol("is custom element"),fr=Symbol("is html");function cr(e,n,t,r){var s=ur(e);s[n]!==(s[n]=t)&&(t==null?e.removeAttribute(n):typeof t!="string"&&dr(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function ur(e){return e.__attributes??(e.__attributes={[lr]:e.nodeName.includes("-"),[fr]:e.namespaceURI===yt})}var yn=new Map;function dr(e){var n=yn.get(e.nodeName);if(n)return n;yn.set(e.nodeName,n=[]);for(var t,r=e,s=Element.prototype;s!==r;){t=En(r);for(var o in t)t[o].set&&n.push(o);r=Fn(r)}return n}function _r(e=!1){const n=w,t=n.l.u;if(!t)return;let r=()=>Ut(n.s);if(e){let s=0,o={};const a=Ye(()=>{let l=!1;const d=n.s;for(const u in d)d[u]!==o[u]&&(o[u]=d[u],l=!0);return l&&s++,s});r=()=>S(a)}t.b.length&&At(()=>{wn(n,r),$e(t.b)}),_n(()=>{const s=Bt(()=>t.m.map(st));return()=>{for(const o of s)typeof o=="function"&&o()}}),t.a.length&&_n(()=>{wn(n,r),$e(t.a)})}function wn(e,n){if(e.l.s)for(const t of e.l.s)S(t);n()}const vr="5";var bn;typeof window<"u"&&((bn=window.__svelte??(window.__svelte={})).v??(bn.v=new Set)).add(vr);vt();const mr={EnzymeForward:2.486,EnzymeReverse:3.121,FiniteDifferences:23.096,ForwardDiff:.362,Mooncake:8.241,ReverseDiff:13.494,ReverseDiffCompiled:2.573,Zygote:518.701},pr={EnzymeForward:4.221,EnzymeReverse:12.269,FiniteDifferences:148.381,ForwardDiff:2.389,Mooncake:6.638,ReverseDiff:53.614,ReverseDiffCompiled:6.655,Zygote:"error"},hr={EnzymeForward:2.486,EnzymeReverse:2.56,FiniteDifferences:36.503,ForwardDiff:1.318,Mooncake:7.645,ReverseDiff:32.432,ReverseDiffCompiled:2.77,Zygote:1199.016},gr={EnzymeForward:5.224,EnzymeReverse:26.481,FiniteDifferences:59.524,ForwardDiff:1.218,Mooncake:13.709,ReverseDiff:20.387,ReverseDiffCompiled:2.237,Zygote:"error"},yr={EnzymeForward:2.36,EnzymeReverse:11.651,FiniteDifferences:16.215,ForwardDiff:1.133,Mooncake:"error",ReverseDiff:"wrong",ReverseDiffCompiled:"wrong",Zygote:"error"},wr={EnzymeForward:4.632,EnzymeReverse:2.234,FiniteDifferences:140.394,ForwardDiff:1.718,Mooncake:4.706,ReverseDiff:25.39,ReverseDiffCompiled:2.409,Zygote:"error"},br={EnzymeForward:18.782,EnzymeReverse:2.299,FiniteDifferences:635.48,ForwardDiff:10.53,Mooncake:4.077,ReverseDiff:26.142,ReverseDiffCompiled:2.481,Zygote:"error"},Dr={EnzymeForward:43.561,EnzymeReverse:2.327,FiniteDifferences:1234.356,ForwardDiff:14.371,Mooncake:3.881,ReverseDiff:26.388,ReverseDiffCompiled:2.702,Zygote:"error"},Er={EnzymeForward:183.121,EnzymeReverse:2.178,FiniteDifferences:6284.449,ForwardDiff:61.703,Mooncake:3.83,ReverseDiff:23.174,ReverseDiffCompiled:2.618,Zygote:"error"},Fr={EnzymeForward:2.816,EnzymeReverse:2.461,FiniteDifferences:28.205,ForwardDiff:1.689,Mooncake:9.632,ReverseDiff:58.148,ReverseDiffCompiled:2.494,Zygote:"error"},Tr={EnzymeForward:2.766,EnzymeReverse:3.055,FiniteDifferences:28.207,ForwardDiff:.963,Mooncake:9.159,ReverseDiff:34.387,ReverseDiffCompiled:3.623,Zygote:1501.984},Rr={EnzymeForward:2.882,EnzymeReverse:4.078,FiniteDifferences:52,ForwardDiff:1.33,Mooncake:6.412,ReverseDiff:27.872,ReverseDiffCompiled:2.753,Zygote:"error"},xr={EnzymeForward:"error",EnzymeReverse:5.272,FiniteDifferences:38.028,ForwardDiff:1.229,Mooncake:10.391,ReverseDiff:11.92,ReverseDiffCompiled:1.316,Zygote:553.836},Cr={EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",Mooncake:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Ar={EnzymeForward:4.406,EnzymeReverse:2.353,FiniteDifferences:137.126,ForwardDiff:1.709,Mooncake:6.13,ReverseDiff:32.55,ReverseDiffCompiled:2.946,Zygote:"error"},Nr={EnzymeForward:4.263,EnzymeReverse:2.811,FiniteDifferences:135.863,ForwardDiff:1.774,Mooncake:6.27,ReverseDiff:34.14,ReverseDiffCompiled:3.599,Zygote:"error"},kr={EnzymeForward:2.799,EnzymeReverse:3.199,FiniteDifferences:28.029,ForwardDiff:1.043,Mooncake:8.955,ReverseDiff:21.261,ReverseDiffCompiled:2.586,Zygote:1168.45},Sr={EnzymeForward:"error",EnzymeReverse:"error",FiniteDifferences:"error",ForwardDiff:"error",Mooncake:"error",ReverseDiff:"error",ReverseDiffCompiled:"error",Zygote:"error"},Mr={EnzymeForward:"error",EnzymeReverse:12.432,FiniteDifferences:43.404,ForwardDiff:1.056,Mooncake:9.687,ReverseDiff:17.303,ReverseDiffCompiled:3.512,Zygote:"error"},zr={EnzymeForward:2.819,EnzymeReverse:3.236,FiniteDifferences:40.468,ForwardDiff:1.567,Mooncake:9.271,ReverseDiff:19.955,ReverseDiffCompiled:"wrong",Zygote:1159.09},Lr={EnzymeForward:2.833,EnzymeReverse:2.167,FiniteDifferences:76.309,ForwardDiff:1.339,Mooncake:5.07,ReverseDiff:23.07,ReverseDiffCompiled:2.306,Zygote:"error"},Or={EnzymeForward:2.83,EnzymeReverse:3.602,FiniteDifferences:53.583,ForwardDiff:1.287,Mooncake:6.261,ReverseDiff:35.451,ReverseDiffCompiled:3.643,Zygote:"error"},Ir={EnzymeForward:2.79,EnzymeReverse:2.548,FiniteDifferences:28.474,ForwardDiff:1.027,Mooncake:10.023,ReverseDiff:57.895,ReverseDiffCompiled:6.043,Zygote:"error"},Ze={assume_dirichlet:mr,assume_lkjcholu:pr,dynamic_constraint:hr,multiple_constraints_same_var:gr,multithreaded:yr,n010:wr,n050:br,n100:Dr,n500:Er,observe_index:Fr,observe_literal:Tr,observe_multivariate:Rr,assume_mvnormal:xr,observe_submodel:Cr,pdb_eight_schools_centered:Ar,pdb_eight_schools_noncentered:Nr,assume_normal:kr,assume_submodel:Sr,assume_wishart:Mr,control_flow:zr,dot_assume:Lr,dot_assume_observe_index:Or,dot_observe:Ir},Vr="1.14.0",jr="1.5.0",Pr="5.6.1",Zr="0.11.0",$r="0.4.5",Br="0.1.42",qr="4.3.0",Ur="1.1.3",Hr="2.5.0",Jr="1.1.2",Gr="0.4.0",Wr="1.11.0",Yr="0.4.4",Kr="1.11.0",Qr="0.1.1",Xr="0.15.6",eo="0.5.0",no="1.72.3",to="1.25.1",ro="1.3.1",oo="0.1.10",so="0.2.4",io="0.3.1",ao="4.16.0",lo="1.1.1+0",fo="0.1.2",co="0.1.2",uo="1.5.8",_o="1.16.0",vo="0.18.22",mo="1.0.0",po="1.11.0",ho="0.1.2",go="0.4.0",yo="1.1.0",wo="1.15.1",bo="0.6.54",Do="1.11.0",Eo="0.25.120",Fo="0.9.4",To="1.6.0",Ro="0.36.3",xo="0.13.44",Co="0.8.8",Ao="0.0.180+0",No="0.1.10",ko="1.11.0",So="1.13.0",Mo="0.12.32",zo="0.10.38",Lo="1.1.3",Oo="0.5.2",Io="1.11.0",Vo="0.2.0",jo="1.5.0",Po="1.12.1",Zo="0.3.28",$o="0.4.14",Bo="0.1.5",qo="0.3.1",Uo="1.11.0",Ho="0.1.17",Jo="0.2.4",Go="1.0.0",Wo="1.7.0",Yo="9.4.0",Ko="0.0.36+0",Qo="1.11.0",Xo="0.2.0",es="0.6.4",ns="8.6.0+0",ts="1.11.0",rs="1.7.2+0",os="1.11.0+1",ss="0.9.1+6",is="1.11.0",as="1.11.0",ls="2.1.2",fs="0.3.29",cs="1.11.0",us="1.1.0",ds="0.5.16",_s="0.4.2",vs="1.11.0",ms="2.28.6+0",ps="0.2.0",hs="1.2.0",gs="2.0.0",ys="1.11.0",ws="0.4.118",bs="2023.12.12",Ds="1.1.3",Es="1.2.0",Fs="0.4.4",Ts="0.3.27+1",Rs="0.8.5+0",xs="0.5.6+0",Cs="1.8.0",As="0.11.35",Ns="2.8.3",ks="1.11.0",Ss="1.2.1",Ms="1.4.3",zs="1.11.0",Ls="0.1.4",Os="1.10.4",Is="1.3.0",Vs="2.11.2",js="1.11.0",Ps="0.1.0",Zs="1.2.2",$s="1.3.1",Bs="1.16.1",qs="1.4.2",Us="0.8.0",Hs="0.5.1+0",Js="2.2.7",Gs="0.7.0",Ws="1.2.1",Ys="1.11.0",Ks="1.1.2",Qs="1.11.0",Xs="0.9.4",ei="1.11.0",ni="1.2.1",ti="1.11.0",ri="0.1.2",oi="2.5.1",si="0.1.15",ii="1.9.13",ai="1.4.3",li="1.11.1",fi="1.7.0",ci="0.34.5",ui="1.5.0",di="0.7.1",_i="0.3.1",vi=null,mi="7.7.0+0",pi="1.0.3",hi="1.0.1",gi="1.12.0",yi="1.10.0",wi="0.1.7",bi="1.11.0",Di="0.1.4",Ei="0.4.84",Fi="1.11.0",Ti="1.11.0",Ri="1.2.13+1",xi="0.7.7",Ci="0.2.7",Ai="5.11.0+0",Ni="1.59.0+0",ki="17.4.0+2",Si={ADTypes:Vr,AbstractFFTs:jr,AbstractMCMC:Pr,AbstractPPL:Zr,AbstractTrees:$r,Accessors:Br,Adapt:qr,AliasTables:Ur,ArgCheck:Hr,ArgTools:Jr,ArnoldiMethod:Gr,Artifacts:Wr,BangBang:Yr,Base64:Kr,Baselet:Qr,Bijectors:Xr,CEnum:eo,ChainRules:no,ChainRulesCore:to,Chairmarks:ro,ChangesOfVariables:oo,CommonSolve:so,CommonSubexpressions:io,Compat:ao,CompilerSupportLibraries_jll:lo,CompositionsBase:fo,ConsoleProgressMonitor:co,ConstructionBase:uo,DataAPI:_o,DataStructures:vo,DataValueInterfaces:mo,Dates:po,DefineSingletons:ho,DensityInterface:go,DiffResults:yo,DiffRules:wo,DifferentiationInterface:bo,Distributed:Do,Distributions:Eo,DocStringExtensions:Fo,Downloads:To,DynamicPPL:Ro,Enzyme:xo,EnzymeCore:Co,Enzyme_jll:Ao,ExprTools:No,FileWatching:ko,FillArrays:So,FiniteDifferences:Mo,ForwardDiff:zo,FunctionWrappers:Lo,Functors:Oo,Future:Io,GPUArraysCore:Vo,GPUCompiler:jo,Graphs:Po,HypergeometricFunctions:Zo,IRTools:$o,Inflate:Bo,InitialValues:qo,InteractiveUtils:Uo,InverseFunctions:Ho,IrrationalConstants:Jo,IteratorInterfaceExtensions:Go,JLLWrappers:Wo,JSON:"0.21.4",LLVM:Yo,LLVMExtra_jll:Ko,LazyArtifacts:Qo,LeftChildRightSiblingTrees:Xo,LibCURL:es,LibCURL_jll:ns,LibGit2:ts,LibGit2_jll:rs,LibSSH2_jll:os,LibTracyClient_jll:ss,Libdl:is,LinearAlgebra:as,LogDensityProblems:ls,LogExpFunctions:fs,Logging:cs,LoggingExtras:us,MacroTools:ds,MappedArrays:_s,Markdown:vs,MbedTLS_jll:ms,MicroCollections:ps,Missings:hs,MistyClosures:gs,Mmap:ys,Mooncake:ws,MozillaCACerts_jll:bs,NaNMath:Ds,NetworkOptions:Es,ObjectFile:Fs,OpenBLAS_jll:Ts,OpenLibm_jll:Rs,OpenSpecFun_jll:xs,OrderedCollections:Cs,PDMats:As,Parsers:Ns,Pkg:ks,PrecompileTools:Ss,Preferences:Ms,Printf:zs,ProgressLogging:Ls,ProgressMeter:Os,PtrArrays:Is,QuadGK:Vs,Random:js,RealDot:Ps,Reexport:Zs,Requires:$s,ReverseDiff:Bs,Richardson:qs,Rmath:Us,Rmath_jll:Hs,Roots:Js,SHA:Gs,Scratch:Ws,Serialization:Ys,Setfield:Ks,SharedArrays:Qs,SimpleTraits:Xs,Sockets:ei,SortingAlgorithms:ni,SparseArrays:ti,SparseInverseSubset:ri,SpecialFunctions:oi,SplittablesBase:si,StaticArrays:ii,StaticArraysCore:ai,Statistics:li,StatsAPI:fi,StatsBase:ci,StatsFuns:ui,StructArrays:di,StructIO:_i,SuiteSparse:vi,SuiteSparse_jll:mi,TOML:pi,TableTraits:hi,Tables:gi,Tar:yi,TerminalLoggers:wi,Test:bi,Tracy:Di,Transducers:Ei,UUIDs:Fi,Unicode:Ti,Zlib_jll:Ri,Zygote:xi,ZygoteRules:Ci,libblastrampoline_jll:Ai,nghttp2_jll:Ni,p7zip_jll:ki},Mi=`@model function assume_dirichlet()
    a ~ Dirichlet([1.0, 5.0])
end

@register assume_dirichlet()`,zi=`@model function assume_lkjcholu()
    a ~ LKJCholesky(5, 1.0, 'U')
end

@register assume_lkjcholu()`,Li=`@model function dynamic_constraint() a ~ Normal()
    b ~ truncated(Normal(); lower=a)
end

@register dynamic_constraint()`,Oi=`@model function multiple_constraints_same_var(
    ::Type{TV}=Vector{Float64}
) where {TV}
    x = TV(undef, 5)
    x[1] ~ Normal()
    x[2] ~ InverseGamma(2, 3)
    x[3] ~ truncated(Normal(), -5, 20)
    x[4:5] ~ Dirichlet([1.0, 2.0])
end

@register multiple_constraints_same_var()`,Ii=`#=
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

@register multithreaded([1.5, 2.0, 2.5, 1.5, 2.0, 2.5])`,Vi=`@model function n010(::Type{TV}=Vector{Float64}) where {TV}
    a = TV(undef, 10)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

@register n010()`,ji=`@model function n050(::Type{TV}=Vector{Float64}) where {TV}
    a = TV(undef, 50)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

@register n050()`,Pi=`@model function n100(::Type{TV}=Vector{Float64}) where {TV}
    a = TV(undef, 100)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

@register n100()`,Zi=`@model function n500(::Type{TV}=Vector{Float64}) where {TV}
    a = TV(undef, 500)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

@register n500()`,$i=`@model function observe_index(x=[1.5, 2.0, 2.5])
    a ~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end

@register observe_index()`,Bi=`@model function observe_literal()
    a ~ Normal()
    1.5 ~ Normal(a)
end

@register observe_literal()`,qi=`@model function observe_multivariate(x=[1.5, 2.0, 2.5], ::Type{TV}=Vector{Float64}) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    x ~ MvNormal(a, I)
end

@register observe_multivariate()`,Ui=`@model function assume_mvnormal()
    a ~ MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0])
end

@register assume_mvnormal()`,Hi=`@model function inner2(x, a)
    x ~ Normal(a)
end
@model function observe_submodel(x=1.5)
    a ~ Normal()
    _ignore ~ to_submodel(inner2(x, a))
end

@register observe_submodel()`,Ji=`J = 8
y = [28, 8, -3, 7, -1, 1, 18, 12]
sigma = [15, 10, 16, 11, 9, 11, 10, 18]

@model function pdb_eight_schools_centered(J, y, sigma)
    mu ~ Normal(0, 5)
    tau ~ truncated(Cauchy(0, 5); lower=0)
    theta = Vector{Float64}(undef, J)
    for i in 1:J
        theta[i] ~ Normal(mu, tau)
        y[i] ~ Normal(theta[i], sigma[i])
    end
end

@register pdb_eight_schools_centered(J, y, sigma)`,Gi=`J = 8
y = [28, 8, -3, 7, -1, 1, 18, 12]
sigma = [15, 10, 16, 11, 9, 11, 10, 18]

@model function pdb_eight_schools_noncentered(J, y, sigma)
    mu ~ Normal(0, 5)
    tau ~ truncated(Cauchy(0, 5); lower=0)
    theta_trans = Vector{Float64}(undef, J)
    for i in 1:J
        theta_trans[i] ~ Normal(0, 1)
        theta = theta_trans[i] * tau + mu
        y[i] ~ Normal(theta, sigma[i])
    end
end

@register pdb_eight_schools_noncentered(J, y, sigma)`,Wi=`@model function assume_normal()
    a ~ Normal()
end

@register assume_normal()`,Yi=`@model function inner1()
    return a ~ Normal()
end
@model function assume_submodel()
    a ~ to_submodel(inner1())
    x ~ Normal(a)
end

@register assume_submodel()`,Ki=`@model function assume_wishart()
    a ~ Wishart(7, [1.0 0.5; 0.5 1.0])
end

@register assume_wishart()`,Qi=`#= 
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

@register control_flow()`,Xi=`@model function dot_assume(::Type{TV}=Vector{Float64}) where {TV}
    a = TV(undef, 5)
    a .~ Normal()
end

@register dot_assume()`,ea=`@model function dot_assume_observe_index(x=[1.5, 2.0, 2.5], ::Type{TV}=Vector{Float64}) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a[i])
    end
end

@register dot_assume_observe_index()`,na=`@model function dot_observe(x=[1.5, 2.0, 2.5])
    a ~ Normal()
    x .~ Normal(a)
end

@register dot_observe()`,ta={assume_dirichlet:Mi,assume_lkjcholu:zi,dynamic_constraint:Li,multiple_constraints_same_var:Oi,multithreaded:Ii,n010:Vi,n050:ji,n100:Pi,n500:Zi,observe_index:$i,observe_literal:Bi,observe_multivariate:qi,assume_mvnormal:Ui,observe_submodel:Hi,pdb_eight_schools_centered:Ji,pdb_eight_schools_noncentered:Gi,assume_normal:Wi,assume_submodel:Yi,assume_wishart:Ki,control_flow:Qi,dot_assume:Xi,dot_assume_observe_index:ea,dot_observe:na};var ra=X('<th class="svelte-13swsff"> </th>'),oa=X('<td class="svelte-13swsff"> </td>'),sa=X('<a class="issue svelte-13swsff" target="_blank">(?)</a>'),ia=X('<td class="svelte-13swsff"><!> <span> </span></td>'),aa=X('<tr class="svelte-13swsff"><td class="svelte-13swsff"> <div class="model-definition svelte-13swsff"><pre> </pre></div></td><!></tr>'),la=X('<tr class="svelte-13swsff"><td class="svelte-13swsff"> </td><td class="svelte-13swsff"> </td></tr>'),fa=X(`<div id="main-wrapper" class="svelte-13swsff"><main class="svelte-13swsff"><h1>Turing AD tests</h1> <p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p> <p>This page is intended as a brief overview of how different AD
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
                describes the problem.</li></ul> <h2>Results</h2> <p><a href="adtests.json" target="_blank" download="">Download the raw data (JSON)</a></p> <table id="results" class="svelte-13swsff"><thead><tr class="svelte-13swsff"><th class="svelte-13swsff">Model name \\\\ AD type</th><!></tr></thead><tbody></tbody></table> <h2>Manifest</h2> <p>The tests above were run with the following package versions:</p> <table id="manifest" class="svelte-13swsff"><thead><tr class="svelte-13swsff"><th class="svelte-13swsff">Package</th><th class="svelte-13swsff">Version</th></tr></thead><tbody></tbody></table></main></div>`);function ca(e,n){kn(n,!1);const t=Object.keys(Ze),r=Object.keys(Ze[t[0]]);console.log("Models: ",t),console.log("AD types: ",r);function s(b){return Object.entries(b).sort(([g,_],[p,$])=>g.localeCompare(p))}const o="https://github.com/EnzymeAD/Enzyme.jl/issues/1995",a="https://github.com/chalk-lab/Mooncake.jl/issues/570",l="https://github.com/EnzymeAD/Enzyme.jl/issues/2387",d={assume_mvnormal__EnzymeForward:o,assume_wishart__EnzymeForward:o,multithreaded__Mooncake:a,dot_assume_observe_index__EnzymeForward:l,dot_assume_observe_index__EnzymeReverse:l};_r();var u=fa(),m=D(u),v=I(D(m),12),i=D(v),f=D(i),c=I(D(f));be(c,1,()=>r,we,(b,g)=>{var _=ra(),p=D(_);te(()=>Y(p,S(g))),B(b,_)});var F=I(i);be(F,5,()=>s(Ze),we,(b,g)=>{let _=()=>S(g)[0],p=()=>S(g)[1];var $=aa(),z=D($),x=D(z),ee=I(x),J=D(ee),G=D(J),le=I(z);be(le,1,()=>s(p()),we,(je,fe)=>{let ce=()=>S(fe)[0],W=()=>S(fe)[1];var ue=Yt(),he=Tt(ue);{var Xn=ne=>{var de=oa(),ge=D(de);te(()=>Y(ge,W())),B(ne,de)},et=ne=>{var de=ia(),ge=D(de);{var nt=Pe=>{var rn=sa();te(()=>cr(rn,"href",d[`${_()}__${ce()}`])),B(Pe,rn)};hn(ge,Pe=>{d[`${_()}__${ce()}`]&&Pe(nt)})}var tn=I(ge,2),tt=D(tn);te(()=>{ar(tn,1,sr(W()),"svelte-13swsff"),Y(tt,W())}),B(ne,de)};hn(he,ne=>{typeof W()=="number"?ne(Xn):ne(et,!1)})}B(je,ue)}),te(()=>{Y(x,`${_()??""} `),Y(G,ta[_()])}),B(b,$)});var T=I(v,6),N=I(D(T));be(N,5,()=>s(Si),we,(b,g)=>{let _=()=>S(g)[0],p=()=>S(g)[1];var $=la(),z=D($),x=D(z),ee=I(z),J=D(ee);te(()=>{Y(x,_()),Y(J,p()===null?"":`v${p()}`)}),B(b,$)}),B(e,u),Sn()}Kt(ca,{target:document.getElementById("app")});
