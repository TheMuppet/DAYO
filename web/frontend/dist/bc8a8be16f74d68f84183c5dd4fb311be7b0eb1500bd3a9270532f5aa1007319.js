export default(async()=>{function e(){}const t=e=>e;function n(e){return e()}function r(){return Object.create(null)}function a(e){e.forEach(n)}function i(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let o;function c(e,t){return o||(o=document.createElement("a")),o.href=t,e===o.href}function l(e,t,n,r){return e[1]&&r?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](r(t))):n.ctx}const u="undefined"!=typeof window;let h=u?()=>window.performance.now():()=>Date.now(),f=u?e=>requestAnimationFrame(e):e;const d=new Set;function m(e){d.forEach((t=>{t.c(e)||(d.delete(t),t.f())})),0!==d.size&&f(m)}let g=!1;function p(e,t,n,r){for(;e<t;){const a=e+(t-e>>1);n(a)<=r?e=a+1:t=a}return e}function v(e,t,n){const r=b(e);if(!r.getElementById(t)){const e=y("style");e.id=t,e.textContent=n,w(r,e)}}function b(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function $(e){const t=y("style");return w(b(e),t),t.sheet}function w(e,t){!function(e,t){e.appendChild(t)}(e.head||e,t)}function k(e,t){if(g){for(function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const r=t[n];void 0!==r.claim_order&&e.push(r)}t=e}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let a=0;for(let e=0;e<t.length;e++){const i=t[e].claim_order,s=(a>0&&t[n[a]].claim_order<=i?a+1:p(1,a,(e=>t[n[e]].claim_order),i))-1;r[e]=n[s]+1;const o=s+1;n[o]=e,a=Math.max(o,a)}const i=[],s=[];let o=t.length-1;for(let e=n[a]+1;0!=e;e=r[e-1]){for(i.push(t[e-1]);o>=e;o--)s.push(t[o]);o--}for(;o>=0;o--)s.push(t[o]);i.reverse(),s.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<s.length;t++){for(;n<i.length&&s[t].claim_order>=i[n].claim_order;)n++;const r=n<i.length?i[n]:null;e.insertBefore(s[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function _(e,t,n){g&&!n?k(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function E(e){e.parentNode.removeChild(e)}function y(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function D(){return x(" ")}function I(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function z(e){return function(t){return t.preventDefault(),e.call(this,t)}}function A(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function R(e){return Array.from(e.childNodes)}function S(e,t,n,r,a=!1){!function(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}(e);const i=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const i=e[r];if(t(i)){const t=n(i);return void 0===t?e.splice(r,1):e[r]=t,a||(e.claim_info.last_index=r),i}}for(let r=e.claim_info.last_index-1;r>=0;r--){const i=e[r];if(t(i)){const t=n(i);return void 0===t?e.splice(r,1):e[r]=t,a?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=r,i}}return r()})();return i.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,i}function B(e,t,n){return function(e,t,n,r){return S(e,(e=>e.nodeName===t),(e=>{const t=[];for(let r=0;r<e.attributes.length;r++){const a=e.attributes[r];n[a.name]||t.push(a.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>r(t)))}(e,t,n,y)}function N(e,t){return S(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>x(t)),!0)}function M(e){return N(e," ")}function V(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}const j=new Map;let q,T=0;function P(e,t,n,r,a,i,s,o=0){const c=16.666/r;let l="{\n";for(let e=0;e<=1;e+=c){const r=t+(n-t)*i(e);l+=100*e+`%{${s(r,1-r)}}\n`}const u=l+`100% {${s(n,1-n)}}\n}`,h=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${o}`,f=b(e),{stylesheet:d,rules:m}=j.get(f)||function(e,t){const n={stylesheet:$(t),rules:{}};return j.set(e,n),n}(f,e);m[h]||(m[h]=!0,d.insertRule(`@keyframes ${h} ${u}`,d.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?`${g}, `:""}${h} ${r}ms linear ${a}ms 1 both`,T+=1,h}function L(e){q=e}const O=[],W=[],C=[],G=[],H=Promise.resolve();let K=!1;function Z(e){C.push(e)}const F=new Set;let U,Y=0;function J(){const e=q;do{for(;Y<O.length;){const e=O[Y];Y++,L(e),Q(e.$$)}for(L(null),O.length=0,Y=0;W.length;)W.pop()();for(let e=0;e<C.length;e+=1){const t=C[e];F.has(t)||(F.add(t),t())}C.length=0}while(O.length);for(;G.length;)G.pop()();K=!1,F.clear(),L(e)}function Q(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Z)}}function X(e,t,n){e.dispatchEvent(function(e,t,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,!1,t),r}(`${t?"intro":"outro"}${n}`))}const ee=new Set;let te;function ne(){te={r:0,c:[],p:te}}function re(){te.r||a(te.c),te=te.p}function ae(e,t){e&&e.i&&(ee.delete(e),e.i(t))}function ie(e,t,n,r){if(e&&e.o){if(ee.has(e))return;ee.add(e),te.c.push((()=>{ee.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}const se={duration:0};function oe(n,r,s,o){let c=r(n,s),l=o?0:1,u=null,g=null,p=null;function v(){p&&function(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),a=n.length-r.length;a&&(e.style.animation=r.join(", "),T-=a,T||f((()=>{T||(j.forEach((e=>{const{stylesheet:t}=e;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.rules={}})),j.clear())})))}(n,p)}function b(e,t){const n=e.b-l;return t*=Math.abs(n),{a:l,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function $(r){const{delay:i=0,duration:s=300,easing:o=t,tick:$=e,css:w}=c||se,k={start:h()+i,b:r};r||(k.group=te,te.r+=1),u||g?g=k:(w&&(v(),p=P(n,l,r,s,i,o,w)),r&&$(0,1),u=b(k,s),Z((()=>X(n,r,"start"))),function(e){let t;0===d.size&&f(m),new Promise((n=>{d.add(t={c:e,f:n})}))}((e=>{if(g&&e>g.start&&(u=b(g,s),g=null,X(n,u.b,"start"),w&&(v(),p=P(n,l,u.b,u.duration,0,o,c.css))),u)if(e>=u.end)$(l=u.b,1-l),X(n,u.b,"end"),g||(u.b?v():--u.group.r||a(u.group.c)),u=null;else if(e>=u.start){const t=e-u.start;l=u.a+u.d*o(t/u.duration),$(l,1-l)}return!(!u&&!g)})))}return{run(e){i(c)?(U||(U=Promise.resolve(),U.then((()=>{U=null}))),U).then((()=>{c=c(),$(e)})):$(e)},end(){v(),u=g=null}}}function ce(e){e&&e.c()}function le(e,t){e&&e.l(t)}function ue(e,t,r,s){const{fragment:o,on_mount:c,on_destroy:l,after_update:u}=e.$$;o&&o.m(t,r),s||Z((()=>{const t=c.map(n).filter(i);l?l.push(...t):a(t),e.$$.on_mount=[]})),u.forEach(Z)}function he(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function fe(t,n,i,s,o,c,l,u=[-1]){const h=q;L(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:o,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(h?h.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||h.$$.root};l&&l(f.root);let d=!1;if(f.ctx=i?i(t,n.props||{},((e,n,...r)=>{const a=r.length?r[0]:n;return f.ctx&&o(f.ctx[e],f.ctx[e]=a)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](a),d&&function(e,t){-1===e.$$.dirty[0]&&(O.push(e),K||(K=!0,H.then(J)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],f.update(),d=!0,a(f.before_update),f.fragment=!!s&&s(f.ctx),n.target){if(n.hydrate){g=!0;const e=R(n.target);f.fragment&&f.fragment.l(e),e.forEach(E)}else f.fragment&&f.fragment.c();n.intro&&ae(t.$$.fragment),ue(t,n.target,n.anchor,n.customElement),g=!1,J()}L(h)}class de{$destroy(){he(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function me(e){v(e,"svelte-14cjlfh",".vertical-center.svelte-14cjlfh{min-height:100%;min-height:95vh;display:flex;align-items:center}")}function ge(t){let n,r,a,i,s,o,l,u,h,f,d,m,g,p,v,b,$,w,I,z,S,V;return{c(){n=y("div"),r=y("div"),a=y("div"),i=y("div"),s=y("div"),o=y("h1"),l=x("Welcome! 👋"),u=D(),h=y("h3"),f=x('DAYO your perfect "Are You the One?" watch-party companion 💅'),d=D(),m=y("p"),g=x("Place bets 💸 with your friends at the start of each season and find out who calls the most matches correctly! ✅"),p=D(),v=y("p"),b=x("After each episode, you get the most sizzling 🔥 news and probabilities to uncover if your bet might be correct!"),$=D(),w=y("input"),I=D(),z=y("div"),S=y("img"),this.h()},l(e){n=B(e,"DIV",{class:!0});var t=R(n);r=B(t,"DIV",{class:!0});var c=R(r);a=B(c,"DIV",{class:!0});var k=R(a);i=B(k,"DIV",{class:!0});var _=R(i);s=B(_,"DIV",{});var y=R(s);o=B(y,"H1",{});var x=R(o);l=N(x,"Welcome! 👋"),x.forEach(E),u=M(y),h=B(y,"H3",{});var D=R(h);f=N(D,'DAYO your perfect "Are You the One?" watch-party companion 💅'),D.forEach(E),d=M(y),m=B(y,"P",{class:!0});var A=R(m);g=N(A,"Place bets 💸 with your friends at the start of each season and find out who calls the most matches correctly! ✅"),A.forEach(E),p=M(y),v=B(y,"P",{class:!0});var V=R(v);b=N(V,"After each episode, you get the most sizzling 🔥 news and probabilities to uncover if your bet might be correct!"),V.forEach(E),$=M(y),w=B(y,"INPUT",{type:!0,class:!0,onclick:!0}),y.forEach(E),_.forEach(E),I=M(k),z=B(k,"DIV",{class:!0});var j=R(z);S=B(j,"IMG",{src:!0,alt:!0,width:!0,height:!0}),j.forEach(E),k.forEach(E),c.forEach(E),t.forEach(E),this.h()},h(){A(m,"class","lead"),A(v,"class","lead"),A(w,"type","button"),A(w,"class","btn btn-secondary"),w.value="Invite ME!",A(w,"onclick","window.open('https://discord.com/api/oauth2/authorize?client_id=941819203739074601&permissions=274877959168&scope=bot%20applications.commands','_blank', 'resizable=yes')"),A(i,"class","col vertical-center svelte-14cjlfh"),c(S.src,V="images/logo_transparent.png")||A(S,"src","images/logo_transparent.png"),A(S,"alt","png"),A(S,"width","600"),A(S,"height","600"),A(z,"class","col vertical-center svelte-14cjlfh"),A(a,"class","row justify-content-evenly"),A(r,"class","container"),A(n,"class","vertical-center svelte-14cjlfh")},m(e,t){_(e,n,t),k(n,r),k(r,a),k(a,i),k(i,s),k(s,o),k(o,l),k(s,u),k(s,h),k(h,f),k(s,d),k(s,m),k(m,g),k(s,p),k(s,v),k(v,b),k(s,$),k(s,w),k(a,I),k(a,z),k(z,S)},p:e,i:e,o:e,d(e){e&&E(n)}}}class pe extends de{constructor(e){super(),fe(this,e,null,ge,s,{},me)}}function ve(e){v(e,"svelte-1s1u6qb",".card.svelte-1s1u6qb{background-color:#fff;color:#333;border-radius:15px;padding:40px 50px;margin:20px 0;position:relative}")}function be(e){let t,n;const r=e[1].default,a=function(e,t,n,r){if(e){const r=l(e,t,n,null);return e[0](r)}}(r,e,e[0]);return{c(){t=y("div"),a&&a.c(),this.h()},l(e){t=B(e,"DIV",{class:!0});var n=R(t);a&&a.l(n),n.forEach(E),this.h()},h(){A(t,"class","card svelte-1s1u6qb")},m(e,r){_(e,t,r),a&&a.m(t,null),n=!0},p(e,[t]){a&&a.p&&(!n||1&t)&&function(e,t,n,r,a,i){if(a){const i=l(t,n,r,null);e.p(i,a)}}(a,r,e,e[0],n?function(e,t,n,r){return e[2],t.dirty}(r,e[0]):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[0]))},i(e){n||(ae(a,e),n=!0)},o(e){ie(a,e),n=!1},d(e){e&&E(t),a&&a.d(e)}}}function $e(e,t,n){let{$$slots:r={},$$scope:a}=t;return e.$$set=e=>{"$$scope"in e&&n(0,a=e.$$scope)},[a,r]}class we extends de{constructor(e){super(),fe(this,e,$e,be,s,{},ve)}}function ke(e){v(e,"svelte-1q66u44",".floatLeft.svelte-1q66u44{float:left}.floatRight.svelte-1q66u44{float:right}.centered.svelte-1q66u44{text-align:center}")}function _e(e){let t,n,r,a,i,s,o,l,u,h,f,d,m,g,p,v,b,$,w=e[0].man.name+"",I=e[0].woman.name+"",z=e[0].probability+"";return{c(){t=y("div"),n=y("div"),r=y("img"),s=D(),o=y("div"),l=y("img"),f=D(),d=y("div"),m=x(w),g=x(" & "),p=x(I),v=x(" are with "),b=x(z),$=x("% certainty a perfect match!"),this.h()},l(e){t=B(e,"DIV",{});var a=R(t);n=B(a,"DIV",{class:!0});var i=R(n);r=B(i,"IMG",{src:!0,alt:!0}),i.forEach(E),s=M(a),o=B(a,"DIV",{class:!0});var c=R(o);l=B(c,"IMG",{src:!0,alt:!0}),c.forEach(E),a.forEach(E),f=M(e),d=B(e,"DIV",{class:!0});var u=R(d);m=N(u,w),g=N(u," & "),p=N(u,I),v=N(u," are with "),b=N(u,z),$=N(u,"% certainty a perfect match!"),u.forEach(E),this.h()},h(){c(r.src,a=e[0].man.pic)||A(r,"src",a),A(r,"alt",i="Picture of "+e[0].man.name),A(n,"class","floatLeft svelte-1q66u44"),c(l.src,u=e[0].woman.pic)||A(l,"src",u),A(l,"alt",h="Picture of "+e[0].woman.name),A(o,"class","floatRight svelte-1q66u44"),A(d,"class","centered svelte-1q66u44")},m(e,a){_(e,t,a),k(t,n),k(n,r),k(t,s),k(t,o),k(o,l),_(e,f,a),_(e,d,a),k(d,m),k(d,g),k(d,p),k(d,v),k(d,b),k(d,$)},p(e,t){1&t&&!c(r.src,a=e[0].man.pic)&&A(r,"src",a),1&t&&i!==(i="Picture of "+e[0].man.name)&&A(r,"alt",i),1&t&&!c(l.src,u=e[0].woman.pic)&&A(l,"src",u),1&t&&h!==(h="Picture of "+e[0].woman.name)&&A(l,"alt",h),1&t&&w!==(w=e[0].man.name+"")&&V(m,w),1&t&&I!==(I=e[0].woman.name+"")&&V(p,I),1&t&&z!==(z=e[0].probability+"")&&V(b,z)},d(e){e&&E(t),e&&E(f),e&&E(d)}}}function Ee(e){let t,n;return t=new we({props:{$$slots:{default:[_e]},$$scope:{ctx:e}}}),{c(){ce(t.$$.fragment)},l(e){le(t.$$.fragment,e)},m(e,r){ue(t,e,r),n=!0},p(e,[n]){const r={};3&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ie(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function ye(e,t,n){let{match:r={}}=t;return e.$$set=e=>{"match"in e&&n(0,r=e.match)},[r]}class xe extends de{constructor(e){super(),fe(this,e,ye,Ee,s,{match:0},ke)}}function De(e){v(e,"svelte-sxb1qa",".matches-list.svelte-sxb1qa{padding:60px;padding-top:100px;position:relative;z-index:-1}")}function Ie(e,t,n){const r=e.slice();return r[1]=t[n],r}function ze(e){let t,n;return t=new xe({props:{match:e[1]}}),{c(){ce(t.$$.fragment)},l(e){le(t.$$.fragment,e)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.match=e[1]),t.$set(r)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ie(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Ae(e){let t,n,r,a,i,s=e[0],o=[];for(let t=0;t<s.length;t+=1)o[t]=ze(Ie(e,s,t));const c=e=>ie(o[e],1,1,(()=>{o[e]=null}));return{c(){t=y("div"),n=y("h1"),r=x("Current Matches"),a=D();for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){t=B(e,"DIV",{class:!0});var i=R(t);n=B(i,"H1",{});var s=R(n);r=N(s,"Current Matches"),s.forEach(E),a=M(i);for(let e=0;e<o.length;e+=1)o[e].l(i);i.forEach(E),this.h()},h(){A(t,"class","matches-list svelte-sxb1qa")},m(e,s){_(e,t,s),k(t,n),k(n,r),k(t,a);for(let e=0;e<o.length;e+=1)o[e].m(t,null);i=!0},p(e,[n]){if(1&n){let r;for(s=e[0],r=0;r<s.length;r+=1){const a=Ie(e,s,r);o[r]?(o[r].p(a,n),ae(o[r],1)):(o[r]=ze(a),o[r].c(),ae(o[r],1),o[r].m(t,null))}for(ne(),r=s.length;r<o.length;r+=1)c(r);re()}},i(e){if(!i){for(let e=0;e<s.length;e+=1)ae(o[e]);i=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)ie(o[e]);i=!1},d(e){e&&E(t),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(o,e)}}}function Re(e,t,n){let{matches:r=[]}=t;return e.$$set=e=>{"matches"in e&&n(0,r=e.matches)},[r]}class Se extends de{constructor(e){super(),fe(this,e,Re,Ae,s,{matches:0},De)}}function Be(e){v(e,"svelte-1qjszb1",".vertical-center.svelte-1qjszb1{min-height:100%;min-height:95vh;display:flex;align-items:center}")}function Ne(t){let n,r,a,i,s,o,c,l,u,h,f,d,m,g,p,v,b,$,w,I,z,S,V,j,q,T,P,L,O,W,C,G,H,K,Z,F,U,Y,J,Q,X,ee,te,ne,re,ae,ie,se,oe,ce,le,ue,he,fe,de,me,ge,pe,ve,be,$e,we,ke,_e,Ee,ye,xe,De,Ie,ze,Ae,Re;return{c(){n=y("div"),r=y("div"),a=y("h1"),i=x("Impressum"),s=D(),o=y("p"),c=x("Angaben gemäß § 5 TMG"),l=D(),u=y("p"),h=x("Tom Sperling\r\n        "),f=y("br"),d=x("\r\n    Drosselkamp6\r\n        "),m=y("br"),g=x("\r\n    25335 Elmshorn\r\n        "),p=y("br"),v=D(),b=y("p"),$=y("strong"),w=x("Vertreten durch:"),I=D(),z=y("br"),S=x("\r\n    Tom Sperling\r\n        "),V=y("br"),j=D(),q=y("p"),T=y("strong"),P=x("Kontakt:"),L=D(),O=y("br"),W=x("\r\n    Telefon: 0151-64014253\r\n        "),C=y("br"),G=x("\r\n    E-Mail: "),H=y("a"),K=x("tom.sparrow@outlook.de"),Z=D(),F=y("br"),U=D(),Y=y("p"),J=y("strong"),Q=x("Haftungsausschluss:"),X=D(),ee=y("br"),te=D(),ne=y("br"),re=D(),ae=y("strong"),ie=x("Haftung für Links"),se=D(),oe=y("br"),ce=D(),le=y("br"),ue=x("\r\n    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen."),he=y("br"),fe=y("br"),de=y("strong"),me=x("Datenschutz"),ge=y("br"),pe=y("br"),ve=x("\r\n    Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. "),be=y("br"),$e=x("\r\n    Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. "),we=y("br"),ke=x("\r\n    Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor."),_e=y("br"),Ee=D(),ye=y("br"),xe=x("\r\n    Website Impressum erstellt durch "),De=y("a"),Ie=x("impressum-generator.de"),ze=x(" von der "),Ae=y("a"),Re=x("Kanzlei Hasselbach"),this.h()},l(e){n=B(e,"DIV",{class:!0});var t=R(n);r=B(t,"DIV",{class:!0});var k=R(r);a=B(k,"H1",{});var _=R(a);i=N(_,"Impressum"),_.forEach(E),s=M(k),o=B(k,"P",{});var y=R(o);c=N(y,"Angaben gemäß § 5 TMG"),y.forEach(E),l=M(k),u=B(k,"P",{});var x=R(u);h=N(x,"Tom Sperling\r\n        "),f=B(x,"BR",{}),d=N(x,"\r\n    Drosselkamp6\r\n        "),m=B(x,"BR",{}),g=N(x,"\r\n    25335 Elmshorn\r\n        "),p=B(x,"BR",{}),x.forEach(E),v=M(k),b=B(k,"P",{});var D=R(b);$=B(D,"STRONG",{});var A=R($);w=N(A,"Vertreten durch:"),A.forEach(E),I=M(D),z=B(D,"BR",{}),S=N(D,"\r\n    Tom Sperling\r\n        "),V=B(D,"BR",{}),D.forEach(E),j=M(k),q=B(k,"P",{});var Se=R(q);T=B(Se,"STRONG",{});var Be=R(T);P=N(Be,"Kontakt:"),Be.forEach(E),L=M(Se),O=B(Se,"BR",{}),W=N(Se,"\r\n    Telefon: 0151-64014253\r\n        "),C=B(Se,"BR",{}),G=N(Se,"\r\n    E-Mail: "),H=B(Se,"A",{href:!0});var Ne=R(H);K=N(Ne,"tom.sparrow@outlook.de"),Ne.forEach(E),Z=M(Se),F=B(Se,"BR",{}),Se.forEach(E),U=M(k),Y=B(k,"P",{});var Me=R(Y);J=B(Me,"STRONG",{});var Ve=R(J);Q=N(Ve,"Haftungsausschluss:"),Ve.forEach(E),X=M(Me),ee=B(Me,"BR",{}),te=M(Me),ne=B(Me,"BR",{}),re=M(Me),ae=B(Me,"STRONG",{});var je=R(ae);ie=N(je,"Haftung für Links"),je.forEach(E),se=M(Me),oe=B(Me,"BR",{}),ce=M(Me),le=B(Me,"BR",{}),ue=N(Me,"\r\n    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen."),he=B(Me,"BR",{}),fe=B(Me,"BR",{}),de=B(Me,"STRONG",{});var qe=R(de);me=N(qe,"Datenschutz"),qe.forEach(E),ge=B(Me,"BR",{}),pe=B(Me,"BR",{}),ve=N(Me,"\r\n    Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. "),be=B(Me,"BR",{}),$e=N(Me,"\r\n    Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. "),we=B(Me,"BR",{}),ke=N(Me,"\r\n    Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor."),_e=B(Me,"BR",{}),Me.forEach(E),Ee=M(k),ye=B(k,"BR",{}),xe=N(k,"\r\n    Website Impressum erstellt durch "),De=B(k,"A",{href:!0});var Te=R(De);Ie=N(Te,"impressum-generator.de"),Te.forEach(E),ze=N(k," von der "),Ae=B(k,"A",{href:!0,rel:!0});var Pe=R(Ae);Re=N(Pe,"Kanzlei Hasselbach"),Pe.forEach(E),k.forEach(E),t.forEach(E),this.h()},h(){A(H,"href","mailto:tom.sparrow@outlook.de"),A(De,"href","https://www.impressum-generator.de"),A(Ae,"href","https://www.kanzlei-hasselbach.de/"),A(Ae,"rel","nofollow"),A(r,"class","impressum justify-content-center"),A(n,"class","container vertical-center svelte-1qjszb1")},m(e,t){_(e,n,t),k(n,r),k(r,a),k(a,i),k(r,s),k(r,o),k(o,c),k(r,l),k(r,u),k(u,h),k(u,f),k(u,d),k(u,m),k(u,g),k(u,p),k(r,v),k(r,b),k(b,$),k($,w),k(b,I),k(b,z),k(b,S),k(b,V),k(r,j),k(r,q),k(q,T),k(T,P),k(q,L),k(q,O),k(q,W),k(q,C),k(q,G),k(q,H),k(H,K),k(q,Z),k(q,F),k(r,U),k(r,Y),k(Y,J),k(J,Q),k(Y,X),k(Y,ee),k(Y,te),k(Y,ne),k(Y,re),k(Y,ae),k(ae,ie),k(Y,se),k(Y,oe),k(Y,ce),k(Y,le),k(Y,ue),k(Y,he),k(Y,fe),k(Y,de),k(de,me),k(Y,ge),k(Y,pe),k(Y,ve),k(Y,be),k(Y,$e),k(Y,we),k(Y,ke),k(Y,_e),k(r,Ee),k(r,ye),k(r,xe),k(r,De),k(De,Ie),k(r,ze),k(r,Ae),k(Ae,Re)},p:e,i:e,o:e,d(e){e&&E(n)}}}class Me extends de{constructor(e){super(),fe(this,e,null,Ne,s,{},Be)}}function Ve(e,{delay:n=0,duration:r=400,easing:a=t}={}){const i=+getComputedStyle(e).opacity;return{delay:n,duration:r,easing:a,css:e=>"opacity: "+e*i}}function je(e){v(e,"svelte-4xggez",".sticky.svelte-4xggez{position:fixed;top:0;width:100%}")}function qe(t){let n,r;return n=new Me({}),{c(){ce(n.$$.fragment)},l(e){le(n.$$.fragment,e)},m(e,t){ue(n,e,t),r=!0},p:e,i(e){r||(ae(n.$$.fragment,e),r=!0)},o(e){ie(n.$$.fragment,e),r=!1},d(e){he(n,e)}}}function Te(t){return{c:e,l:e,m:e,p:e,i:e,o:e,d:e}}function Pe(t){return{c:e,l:e,m:e,p:e,i:e,o:e,d:e}}function Le(e){let t,n;return t=new Se({props:{matches:e[1]}}),{c(){ce(t.$$.fragment)},l(e){le(t.$$.fragment,e)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};2&n&&(r.matches=e[1]),t.$set(r)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ie(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Oe(t){let n,r;return n=new pe({}),{c(){ce(n.$$.fragment)},l(e){le(n.$$.fragment,e)},m(e,t){ue(n,e,t),r=!0},p:e,i(e){r||(ae(n.$$.fragment,e),r=!0)},o(e){ie(n.$$.fragment,e),r=!1},d(e){he(n,e)}}}function We(e){let t,n,r,i,s,o,l,u,h,f,d,m,g,p,v,b,$,w,S,V,j,q,T,P,L,O,W,C,G,H,K,F,U,Y,J,Q,X,ee,te,se,ce,le,ue,he;const fe=[Oe,Le,Pe,Te,qe],de=[];function me(e,t){return 1===e[0]?0:2===e[0]?1:3===e[0]?2:4===e[0]?3:5===e[0]?4:-1}return~(Y=me(e))&&(J=de[Y]=fe[Y](e)),{c(){t=y("link"),n=D(),r=y("main"),i=y("nav"),s=y("div"),o=y("img"),u=D(),h=y("button"),f=y("span"),d=D(),m=y("div"),g=y("ul"),p=y("li"),v=y("a"),b=x("Home\r\n              "),$=y("span"),w=x("(current)"),S=D(),V=y("li"),j=y("a"),q=x("Matches"),T=D(),P=y("li"),L=y("a"),O=x("Features"),W=D(),C=y("li"),G=y("a"),H=x("About"),K=D(),F=y("br"),U=D(),J&&J.c(),Q=D(),X=y("ol"),ee=y("li"),te=y("a"),se=x("Impressum"),this.h()},l(e){const a=function(e,t=document.body){return Array.from(t.querySelectorAll(e))}('[data-svelte="svelte-xdjox0"]',document.head);t=B(a,"LINK",{rel:!0,href:!0}),a.forEach(E),n=M(e),r=B(e,"MAIN",{});var c=R(r);i=B(c,"NAV",{class:!0});var l=R(i);s=B(l,"DIV",{class:!0});var k=R(s);o=B(k,"IMG",{src:!0,class:!0,href:!0,alt:!0,width:!0,height:!0}),u=M(k),h=B(k,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0});var _=R(h);f=B(_,"SPAN",{class:!0}),R(f).forEach(E),_.forEach(E),d=M(k),m=B(k,"DIV",{class:!0,id:!0});var y=R(m);g=B(y,"UL",{class:!0});var x=R(g);p=B(x,"LI",{class:!0});var D=R(p);v=B(D,"A",{class:!0,href:!0});var I=R(v);b=N(I,"Home\r\n              "),$=B(I,"SPAN",{class:!0});var z=R($);w=N(z,"(current)"),z.forEach(E),I.forEach(E),D.forEach(E),S=M(x),V=B(x,"LI",{class:!0});var A=R(V);j=B(A,"A",{class:!0,href:!0});var Z=R(j);q=N(Z,"Matches"),Z.forEach(E),A.forEach(E),T=M(x),P=B(x,"LI",{class:!0});var Y=R(P);L=B(Y,"A",{class:!0,href:!0});var ne=R(L);O=N(ne,"Features"),ne.forEach(E),Y.forEach(E),W=M(x),C=B(x,"LI",{class:!0});var re=R(C);G=B(re,"A",{class:!0,href:!0});var ae=R(G);H=N(ae,"About"),ae.forEach(E),re.forEach(E),x.forEach(E),y.forEach(E),k.forEach(E),l.forEach(E),K=M(c),F=B(c,"BR",{}),U=M(c),J&&J.l(c),Q=M(c),X=B(c,"OL",{class:!0});var ie=R(X);ee=B(ie,"LI",{class:!0});var oe=R(ee);te=B(oe,"A",{class:!0,href:!0});var ce=R(te);se=N(ce,"Impressum"),ce.forEach(E),oe.forEach(E),ie.forEach(E),c.forEach(E),this.h()},h(){A(t,"rel","stylesheet"),A(t,"href","https://bootswatch.com/5/quartz/bootstrap.min.css"),c(o.src,l="images/dayo_transparent_small.png")||A(o,"src","images/dayo_transparent_small.png"),A(o,"class","navbar-brand"),A(o,"href","/"),A(o,"alt",""),A(o,"width","60"),A(o,"height","60"),A(f,"class","navbar-toggler-icon"),A(h,"class","navbar-toggler"),A(h,"type","button"),A(h,"data-bs-toggle","collapse"),A(h,"data-bs-target","#navbarColor01"),A(h,"aria-controls","navbarColor01"),A(h,"aria-expanded","false"),A(h,"aria-label","Toggle navigation"),A($,"class","visually-hidden"),A(v,"class","nav-link active"),A(v,"href","/"),A(p,"class","nav-item"),A(j,"class","nav-link"),A(j,"href","/"),A(V,"class","nav-item"),A(L,"class","nav-link"),A(L,"href","/"),A(P,"class","nav-item"),A(G,"class","nav-link"),A(G,"href","/"),A(C,"class","nav-item"),A(g,"class","navbar-nav me-auto"),A(m,"class","collapse navbar-collapse"),A(m,"id","navbarColor01"),A(s,"class","container-fluid"),A(i,"class","navbar navbar-expand-lg navbar-dark bg-primary sticky svelte-4xggez"),A(te,"class","text-muted"),A(te,"href","/"),A(ee,"class","breadcrumb-item "),A(X,"class","breadcrumb justify-content-center")},m(a,c){k(document.head,t),_(a,n,c),_(a,r,c),k(r,i),k(i,s),k(s,o),k(s,u),k(s,h),k(h,f),k(s,d),k(s,m),k(m,g),k(g,p),k(p,v),k(v,b),k(v,$),k($,w),k(g,S),k(g,V),k(V,j),k(j,q),k(g,T),k(g,P),k(P,L),k(L,O),k(g,W),k(g,C),k(C,G),k(G,H),k(r,K),k(r,F),k(r,U),~Y&&de[Y].m(r,null),k(r,Q),k(r,X),k(X,ee),k(ee,te),k(te,se),le=!0,ue||(he=[I(v,"click",z(e[2])),I(j,"click",z(e[3])),I(L,"click",z(e[4])),I(G,"click",z(e[5])),I(te,"click",z(e[6]))],ue=!0)},p(e,[t]){let n=Y;Y=me(e),Y===n?~Y&&de[Y].p(e,t):(J&&(ne(),ie(de[n],1,1,(()=>{de[n]=null})),re()),~Y?(J=de[Y],J?J.p(e,t):(J=de[Y]=fe[Y](e),J.c()),ae(J,1),J.m(r,Q)):J=null)},i(e){le||(ae(J),Z((()=>{ce||(ce=oe(r,Ve,{},!0)),ce.run(1)})),le=!0)},o(e){ie(J),ce||(ce=oe(r,Ve,{},!1)),ce.run(0),le=!1},d(e){E(t),e&&E(n),e&&E(r),~Y&&de[Y].d(),e&&ce&&ce.end(),ue=!1,a(he)}}}function Ce(e,t,n){let{menu:r=1}=t,a=[];return function(e){(function(){if(!q)throw new Error("Function called outside component initialization");return q})().$$.on_mount.push(e)}((async()=>{fetch("http://dayo-project.herokuapp.com/api/v1/matches").then((e=>e.json())).then((e=>{n(1,a=e.data.matches)})).catch((e=>(console.log(e),0)))})),e.$$set=e=>{"menu"in e&&n(0,r=e.menu)},[r,a,()=>n(0,r=1),()=>n(0,r=2),()=>n(0,r=3),()=>n(0,r=4),()=>n(0,r=5)]}return{default:new class extends de{constructor(e){super(),fe(this,e,Ce,We,s,{menu:0},je)}}({target:document.querySelector("#__snel"),props:{}})}})();