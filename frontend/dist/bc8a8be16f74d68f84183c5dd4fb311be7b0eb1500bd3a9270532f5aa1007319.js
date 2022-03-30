export default(async()=>{function e(){}const t=e=>e;function n(e,t){for(const n in t)e[n]=t[n];return e}function r(e){return e()}function o(){return Object.create(null)}function a(e){e.forEach(r)}function i(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let c;function l(e,t){return c||(c=document.createElement("a")),c.href=t,e===c.href}function u(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function h(e,t,n){e.$$.on_destroy.push(u(t,n))}function f(e,t,n,r){if(e){const o=d(e,t,n,r);return e[0](o)}}function d(e,t,r,o){return e[1]&&o?n(r.ctx.slice(),e[1](o(t))):r.ctx}function m(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}function p(e,t,n,r,o,a){if(o){const i=d(t,n,r,a);e.p(i,o)}}function g(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function $(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function b(e){return null==e?"":e}const v="undefined"!=typeof window;let w=v?()=>window.performance.now():()=>Date.now(),y=v?e=>requestAnimationFrame(e):e;const k=new Set;function x(e){k.forEach((t=>{t.c(e)||(k.delete(t),t.f())})),0!==k.size&&y(x)}let _=!1;function E(e,t,n,r){for(;e<t;){const o=e+(t-e>>1);n(o)<=r?e=o+1:t=o}return e}function I(e,t,n){const r=D(e);if(!r.getElementById(t)){const e=N("style");e.id=t,e.textContent=n,z(r,e)}}function D(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function S(e){const t=N("style");return z(D(e),t),t.sheet}function z(e,t){!function(e,t){e.appendChild(t)}(e.head||e,t)}function R(e,t){if(_){for(function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const r=t[n];void 0!==r.claim_order&&e.push(r)}t=e}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let o=0;for(let e=0;e<t.length;e++){const a=t[e].claim_order,i=(o>0&&t[n[o]].claim_order<=a?o+1:E(1,o,(e=>t[n[e]].claim_order),a))-1;r[e]=n[i]+1;const s=i+1;n[s]=e,o=Math.max(s,o)}const a=[],i=[];let s=t.length-1;for(let e=n[o]+1;0!=e;e=r[e-1]){for(a.push(t[e-1]);s>=e;s--)i.push(t[s]);s--}for(;s>=0;s--)i.push(t[s]);a.reverse(),i.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<i.length;t++){for(;n<a.length&&i[t].claim_order>=a[n].claim_order;)n++;const r=n<a.length?a[n]:null;e.insertBefore(i[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function A(e,t,n){_&&!n?R(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function B(e){e.parentNode.removeChild(e)}function N(e){return document.createElement(e)}function M(e){return document.createTextNode(e)}function j(){return M(" ")}function V(){return M("")}function P(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function O(e){return Array.from(e.childNodes)}function T(e,t,n,r,o=!1){!function(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}(e);const a=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const a=e[r];if(t(a)){const t=n(a);return void 0===t?e.splice(r,1):e[r]=t,o||(e.claim_info.last_index=r),a}}for(let r=e.claim_info.last_index-1;r>=0;r--){const a=e[r];if(t(a)){const t=n(a);return void 0===t?e.splice(r,1):e[r]=t,o?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=r,a}}return r()})();return a.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,a}function L(e,t,n){return function(e,t,n,r){return T(e,(e=>e.nodeName===t),(e=>{const t=[];for(let r=0;r<e.attributes.length;r++){const o=e.attributes[r];n[o.name]||t.push(o.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>r(t)))}(e,t,n,N)}function q(e,t){return T(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>M(t)),!0)}function H(e){return q(e," ")}function W(e,t,n,r){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}const C=new Map;let G,K=0;function Z(e,t,n,r,o,a,i,s=0){const c=16.666/r;let l="{\n";for(let e=0;e<=1;e+=c){const r=t+(n-t)*a(e);l+=100*e+`%{${i(r,1-r)}}\n`}const u=l+`100% {${i(n,1-n)}}\n}`,h=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${s}`,f=D(e),{stylesheet:d,rules:m}=C.get(f)||function(e,t){const n={stylesheet:S(t),rules:{}};return C.set(e,n),n}(f,e);m[h]||(m[h]=!0,d.insertRule(`@keyframes ${h} ${u}`,d.cssRules.length));const p=e.style.animation||"";return e.style.animation=`${p?`${p}, `:""}${h} ${r}ms linear ${o}ms 1 both`,K+=1,h}function U(e){G=e}function F(){if(!G)throw new Error("Function called outside component initialization");return G}function Y(e){F().$$.on_mount.push(e)}function J(e){F().$$.on_destroy.push(e)}function Q(e,t){F().$$.context.set(e,t)}function X(e){return F().$$.context.get(e)}const ee=[],te=[],ne=[],re=[],oe=Promise.resolve();let ae=!1;function ie(e){ne.push(e)}const se=new Set;let ce,le=0;function ue(){const e=G;do{for(;le<ee.length;){const e=ee[le];le++,U(e),he(e.$$)}for(U(null),ee.length=0,le=0;te.length;)te.pop()();for(let e=0;e<ne.length;e+=1){const t=ne[e];se.has(t)||(se.add(t),t())}ne.length=0}while(ee.length);for(;re.length;)re.pop()();ae=!1,se.clear(),U(e)}function he(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ie)}}function fe(e,t,n){e.dispatchEvent(function(e,t,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,!1,t),r}(`${t?"intro":"outro"}${n}`))}const de=new Set;let me;function pe(){me={r:0,c:[],p:me}}function ge(){me.r||a(me.c),me=me.p}function $e(e,t){e&&e.i&&(de.delete(e),e.i(t))}function be(e,t,n,r){if(e&&e.o){if(de.has(e))return;de.add(e),me.c.push((()=>{de.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}const ve={duration:0};function we(n,r,o,s){let c=r(n,o),l=s?0:1,u=null,h=null,f=null;function d(){f&&function(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),o=n.length-r.length;o&&(e.style.animation=r.join(", "),K-=o,K||y((()=>{K||(C.forEach((e=>{const{stylesheet:t}=e;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.rules={}})),C.clear())})))}(n,f)}function m(e,t){const n=e.b-l;return t*=Math.abs(n),{a:l,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function p(r){const{delay:o=0,duration:i=300,easing:s=t,tick:p=e,css:g}=c||ve,$={start:w()+o,b:r};r||($.group=me,me.r+=1),u||h?h=$:(g&&(d(),f=Z(n,l,r,i,o,s,g)),r&&p(0,1),u=m($,i),ie((()=>fe(n,r,"start"))),function(e){let t;0===k.size&&y(x),new Promise((n=>{k.add(t={c:e,f:n})}))}((e=>{if(h&&e>h.start&&(u=m(h,i),h=null,fe(n,u.b,"start"),g&&(d(),f=Z(n,l,u.b,u.duration,0,s,c.css))),u)if(e>=u.end)p(l=u.b,1-l),fe(n,u.b,"end"),h||(u.b?d():--u.group.r||a(u.group.c)),u=null;else if(e>=u.start){const t=e-u.start;l=u.a+u.d*s(t/u.duration),p(l,1-l)}return!(!u&&!h)})))}return{run(e){i(c)?(ce||(ce=Promise.resolve(),ce.then((()=>{ce=null}))),ce).then((()=>{c=c(),p(e)})):p(e)},end(){d(),u=h=null}}}function ye(e){return"object"==typeof e&&null!==e?e:{}}function ke(e){e&&e.c()}function xe(e,t){e&&e.l(t)}function _e(e,t,n,o){const{fragment:s,on_mount:c,on_destroy:l,after_update:u}=e.$$;s&&s.m(t,n),o||ie((()=>{const t=c.map(r).filter(i);l?l.push(...t):a(t),e.$$.on_mount=[]})),u.forEach(ie)}function Ee(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ie(t,n,r,i,s,c,l,u=[-1]){const h=G;U(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(h?h.$$.context:[])),callbacks:o(),dirty:u,skip_bound:!1,root:n.target||h.$$.root};l&&l(f.root);let d=!1;if(f.ctx=r?r(t,n.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return f.ctx&&s(f.ctx[e],f.ctx[e]=o)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](o),d&&function(e,t){-1===e.$$.dirty[0]&&(ee.push(e),ae||(ae=!0,oe.then(ue)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],f.update(),d=!0,a(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){_=!0;const e=O(n.target);f.fragment&&f.fragment.l(e),e.forEach(B)}else f.fragment&&f.fragment.c();n.intro&&$e(t.$$.fragment),_e(t,n.target,n.anchor,n.customElement),_=!1,ue()}U(h)}class De{$destroy(){Ee(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Se(e){I(e,"svelte-4xggez",".sticky.svelte-4xggez{position:fixed;top:0;width:100%}")}function ze(t){let n,r,o,a,i,s,c,u,h,f,d,m,p,g,$;return{c(){n=N("nav"),r=N("div"),o=N("img"),i=j(),s=N("ul"),c=N("li"),u=N("a"),h=M("Home"),d=j(),m=N("li"),p=N("a"),g=M("Matches"),this.h()},l(e){n=L(e,"NAV",{class:!0});var t=O(n);r=L(t,"DIV",{class:!0});var a=O(r);o=L(a,"IMG",{src:!0,class:!0,alt:!0,width:!0,height:!0}),i=H(a),s=L(a,"UL",{class:!0});var l=O(s);c=L(l,"LI",{class:!0});var f=O(c);u=L(f,"A",{class:!0,href:!0});var $=O(u);h=q($,"Home"),$.forEach(B),f.forEach(B),d=H(l),m=L(l,"LI",{class:!0});var b=O(m);p=L(b,"A",{class:!0,href:!0});var v=O(p);g=q(v,"Matches"),v.forEach(B),b.forEach(B),l.forEach(B),a.forEach(B),t.forEach(B),this.h()},h(){l(o.src,a="images/dayo_transparent_small.png")||P(o,"src","images/dayo_transparent_small.png"),P(o,"class","navbar-brand"),P(o,"alt",""),P(o,"width","60"),P(o,"height","60"),P(u,"class",f=b(t[0])+" svelte-4xggez"),P(u,"href","/"),P(c,"class","nav-item"),P(p,"class",$=b(t[1])+" svelte-4xggez"),P(p,"href","/matches"),P(m,"class","nav-item"),P(s,"class","navbar-nav me-auto"),P(r,"class","container-fluid"),P(n,"class","navbar navbar-expand-lg navbar-dark bg-primary sticky svelte-4xggez")},m(e,t){A(e,n,t),R(n,r),R(r,o),R(r,i),R(r,s),R(s,c),R(c,u),R(u,h),R(s,d),R(s,m),R(m,p),R(p,g)},p(e,[t]){1&t&&f!==(f=b(e[0])+" svelte-4xggez")&&P(u,"class",f),2&t&&$!==($=b(e[1])+" svelte-4xggez")&&P(p,"class",$)},i:e,o:e,d(e){e&&B(n)}}}function Re(e,t,n){let{page:r=""}=t,o="",a="";return"home"===r&&(o="nav-link active",a="nav-link"),"matches"===r&&(o="nav-link",a="nav-link active"),"impressum"===r&&(o="nav-link",a="nav-link"),e.$$set=e=>{"page"in e&&n(2,r=e.page)},[o,a,r]}class Ae extends De{constructor(e){super(),Ie(this,e,Re,ze,s,{page:2},Se)}}function Be(e){I(e,"svelte-saa2lc",".footer.svelte-saa2lc{padding-bottom:20px}")}function Ne(t){let n,r,o,a,i;return{c(){n=N("div"),r=N("ol"),o=N("li"),a=N("a"),i=M("Impressum"),this.h()},l(e){n=L(e,"DIV",{class:!0});var t=O(n);r=L(t,"OL",{class:!0});var s=O(r);o=L(s,"LI",{class:!0});var c=O(o);a=L(c,"A",{class:!0,href:!0});var l=O(a);i=q(l,"Impressum"),l.forEach(B),c.forEach(B),s.forEach(B),t.forEach(B),this.h()},h(){P(a,"class","text-muted"),P(a,"href","/impressum"),P(o,"class","breadcrumb-item "),P(r,"class","breadcrumb justify-content-center"),P(n,"class","footer svelte-saa2lc")},m(e,t){A(e,n,t),R(n,r),R(r,o),R(o,a),R(a,i)},p:e,i:e,o:e,d(e){e&&B(n)}}}class Me extends De{constructor(e){super(),Ie(this,e,null,Ne,s,{},Be)}}function je(e){I(e,"svelte-14cjlfh",".vertical-center.svelte-14cjlfh{min-height:100%;min-height:95vh;display:flex;align-items:center}")}function Ve(t){let n,r,o,a,i,s,c,u,h,f,d,m,p,g,$,b,v,w,y,k,x,_,E,I,D,S,z;return n=new Ae({props:{page:"home"}}),S=new Me({}),{c(){ke(n.$$.fragment),r=j(),o=N("div"),a=N("div"),i=N("div"),s=N("div"),c=N("div"),u=N("h1"),h=M("Welcome! 👋"),f=j(),d=N("h3"),m=M('DAYO your perfect "Are You the One?" watch-party companion 💅'),p=j(),g=N("p"),$=M("Place bets 💸 with your friends at the start of each season and find out who calls the most matches correctly! ✅"),b=j(),v=N("p"),w=M("After each episode, you get the most sizzling 🔥 news and probabilities to uncover if your bet might be correct!"),y=j(),k=N("input"),x=j(),_=N("div"),E=N("img"),D=j(),ke(S.$$.fragment),this.h()},l(e){xe(n.$$.fragment,e),r=H(e),o=L(e,"DIV",{class:!0});var t=O(o);a=L(t,"DIV",{class:!0});var l=O(a);i=L(l,"DIV",{class:!0});var I=O(i);s=L(I,"DIV",{class:!0});var z=O(s);c=L(z,"DIV",{});var R=O(c);u=L(R,"H1",{});var A=O(u);h=q(A,"Welcome! 👋"),A.forEach(B),f=H(R),d=L(R,"H3",{});var N=O(d);m=q(N,'DAYO your perfect "Are You the One?" watch-party companion 💅'),N.forEach(B),p=H(R),g=L(R,"P",{class:!0});var M=O(g);$=q(M,"Place bets 💸 with your friends at the start of each season and find out who calls the most matches correctly! ✅"),M.forEach(B),b=H(R),v=L(R,"P",{class:!0});var j=O(v);w=q(j,"After each episode, you get the most sizzling 🔥 news and probabilities to uncover if your bet might be correct!"),j.forEach(B),y=H(R),k=L(R,"INPUT",{type:!0,class:!0,onclick:!0}),R.forEach(B),z.forEach(B),x=H(I),_=L(I,"DIV",{class:!0});var V=O(_);E=L(V,"IMG",{src:!0,alt:!0,width:!0,height:!0}),V.forEach(B),I.forEach(B),l.forEach(B),t.forEach(B),D=H(e),xe(S.$$.fragment,e),this.h()},h(){P(g,"class","lead"),P(v,"class","lead"),P(k,"type","button"),P(k,"class","btn btn-secondary"),k.value="Invite ME!",P(k,"onclick","window.open('https://discord.com/api/oauth2/authorize?client_id=941819203739074601&permissions=274877959168&scope=bot%20applications.commands','_blank', 'resizable=yes')"),P(s,"class","col vertical-center svelte-14cjlfh"),l(E.src,I="images/logo_transparent.png")||P(E,"src","images/logo_transparent.png"),P(E,"alt","png"),P(E,"width","600"),P(E,"height","600"),P(_,"class","col vertical-center svelte-14cjlfh"),P(i,"class","row justify-content-evenly"),P(a,"class","container"),P(o,"class","vertical-center svelte-14cjlfh")},m(e,t){_e(n,e,t),A(e,r,t),A(e,o,t),R(o,a),R(a,i),R(i,s),R(s,c),R(c,u),R(u,h),R(c,f),R(c,d),R(d,m),R(c,p),R(c,g),R(g,$),R(c,b),R(c,v),R(v,w),R(c,y),R(c,k),R(i,x),R(i,_),R(_,E),A(e,D,t),_e(S,e,t),z=!0},p:e,i(e){z||($e(n.$$.fragment,e),$e(S.$$.fragment,e),z=!0)},o(e){be(n.$$.fragment,e),be(S.$$.fragment,e),z=!1},d(e){Ee(n,e),e&&B(r),e&&B(o),e&&B(D),Ee(S,e)}}}class Pe extends De{constructor(e){super(),Ie(this,e,null,Ve,s,{},je)}}function Oe(e){I(e,"svelte-1apsg1i","img.svelte-1apsg1i{border-radius:50%}")}function Te(t){let n,r,o,a,i,s,c,u,h,f,d,m,p,g,$,b,v,w,y,k,x,_,E=t[2].name+"",I=t[3].name+"",D=t[0].probability+"";return{c(){n=N("div"),r=N("div"),o=N("h4"),a=M(E),i=M(" ❤️ "),s=M(I),c=j(),u=N("div"),h=N("img"),d=j(),m=N("p"),p=j(),g=N("img"),b=j(),v=N("div"),w=M("with "),y=N("b"),k=M(D),x=M("%"),_=M(" certainty!"),this.h()},l(e){n=L(e,"DIV",{class:!0,style:!0});var t=O(n);r=L(t,"DIV",{class:!0});var l=O(r);o=L(l,"H4",{class:!0,style:!0});var f=O(o);a=q(f,E),i=q(f," ❤️ "),s=q(f,I),f.forEach(B),c=H(l),u=L(l,"DIV",{});var $=O(u);h=L($,"IMG",{src:!0,alt:!0,width:!0,height:!0,style:!0,class:!0}),d=H($),m=L($,"P",{}),O(m).forEach(B),p=H($),g=L($,"IMG",{src:!0,alt:!0,width:!0,height:!0,style:!0,class:!0}),$.forEach(B),b=H(l),v=L(l,"DIV",{class:!0,style:!0});var S=O(v);w=q(S,"with "),y=L(S,"B",{});var z=O(y);k=q(z,D),x=q(z,"%"),z.forEach(B),_=q(S," certainty!"),S.forEach(B),l.forEach(B),t.forEach(B),this.h()},h(){P(o,"class","card-title"),W(o,"text-align","center"),l(h.src,f=t[2].img)||P(h,"src",f),P(h,"alt","Image of "+t[2].name),P(h,"width","45%"),P(h,"height","45%"),W(h,"float","left"),W(h,"margin","5px"),P(h,"class","svelte-1apsg1i"),l(g.src,$=t[3].img)||P(g,"src",$),P(g,"alt","Image of "+t[3].name),P(g,"width","45%"),P(g,"height","45%"),W(g,"float","right"),W(g,"margin","5px"),P(g,"class","svelte-1apsg1i"),P(v,"class","card-text"),W(v,"text-align","center"),P(r,"class","card-body"),P(n,"class",t[1]),W(n,"max-width","20rem"),W(n,"display","inline-block"),W(n,"margin-right","30px")},m(e,t){A(e,n,t),R(n,r),R(r,o),R(o,a),R(o,i),R(o,s),R(r,c),R(r,u),R(u,h),R(u,d),R(u,m),R(u,p),R(u,g),R(r,b),R(r,v),R(v,w),R(v,y),R(y,k),R(y,x),R(v,_)},p(e,[t]){var r,o;1&t&&D!==(D=e[0].probability+"")&&(o=""+(o=D),(r=k).wholeText!==o&&(r.data=o)),2&t&&P(n,"class",e[1])},i:e,o:e,d(e){e&&B(n)}}}function Le(e,t,n){let{participants:r=[]}=t,{match:o={}}=t,a="card text-white bg-secondary mb-3",i=r.find((e=>e.name===o.man)),s=r.find((e=>e.name===o.woman));return 100===o.probability&&(a="card text-white bg-success mb-3"),e.$$set=e=>{"participants"in e&&n(4,r=e.participants),"match"in e&&n(0,o=e.match)},[o,a,i,s,r]}class qe extends De{constructor(e){super(),Ie(this,e,Le,Te,s,{participants:4,match:0},Oe)}}const He=[];function We(t,n=e){let r;const o=new Set;function a(e){if(s(t,e)&&(t=e,r)){const e=!He.length;for(const e of o)e[1](),He.push(e,t);if(e){for(let e=0;e<He.length;e+=2)He[e][0](He[e+1]);He.length=0}}}return{set:a,update:function(e){a(e(t))},subscribe:function(i,s=e){const c=[i,s];return o.add(c),1===o.size&&(r=n(a)||e),i(t),()=>{o.delete(c),0===o.size&&(r(),r=null)}}}}function Ce(t,n,r){const o=!Array.isArray(t),s=o?[t]:t,c=n.length<2;return{subscribe:We(r,(t=>{let r=!1;const l=[];let h=0,f=e;const d=()=>{if(h)return;f();const r=n(o?l[0]:l,t);c?t(r):f=i(r)?r:e},m=s.map(((e,t)=>u(e,(e=>{l[t]=e,h&=~(1<<t),r&&d()}),(()=>{h|=1<<t}))));return r=!0,d(),function(){a(m),f()}})).subscribe}}const Ge=(e,t)=>{const{subscribe:n,set:r}=We(t);return{subscribe:n,set:r,useLocalStorage:()=>{const t=localStorage.getItem(e);t&&r(JSON.parse(t)),n((t=>{localStorage.setItem(e,JSON.stringify(t))}))}}},Ke=Ge("ParticipantStore",[]),Ze=Ge("MatchStore",[]);function Ue(e){I(e,"svelte-1cbqe2f",".page-padding.svelte-1cbqe2f{padding:60px;padding-top:120px;position:relative;z-index:-1}")}function Fe(e,t,n){const r=e.slice();return r[6]=t[n],r}function Ye(e){let t,n,r,o,a,i=e[2],s=[];for(let t=0;t<i.length;t+=1)s[t]=Qe(Fe(e,i,t));const c=e=>be(s[e],1,1,(()=>{s[e]=null}));return{c(){t=N("h1"),n=M("Current Matches"),r=j();for(let e=0;e<s.length;e+=1)s[e].c();o=V()},l(e){t=L(e,"H1",{});var a=O(t);n=q(a,"Current Matches"),a.forEach(B),r=H(e);for(let t=0;t<s.length;t+=1)s[t].l(e);o=V()},m(e,i){A(e,t,i),R(t,n),A(e,r,i);for(let t=0;t<s.length;t+=1)s[t].m(e,i);A(e,o,i),a=!0},p(e,t){if(5&t){let n;for(i=e[2],n=0;n<i.length;n+=1){const r=Fe(e,i,n);s[n]?(s[n].p(r,t),$e(s[n],1)):(s[n]=Qe(r),s[n].c(),$e(s[n],1),s[n].m(o.parentNode,o))}for(pe(),n=i.length;n<s.length;n+=1)c(n);ge()}},i(e){if(!a){for(let e=0;e<i.length;e+=1)$e(s[e]);a=!0}},o(e){s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)be(s[e]);a=!1},d(e){e&&B(t),e&&B(r),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(s,e),e&&B(o)}}}function Je(t){let n,r;return{c(){n=N("h1"),r=M("There are no matches right now. Please come back later!")},l(e){n=L(e,"H1",{});var t=O(n);r=q(t,"There are no matches right now. Please come back later!"),t.forEach(B)},m(e,t){A(e,n,t),R(n,r)},p:e,i:e,o:e,d(e){e&&B(n)}}}function Qe(e){let t,n;return t=new qe({props:{participants:e[0],match:e[6]}}),{c(){ke(t.$$.fragment)},l(e){xe(t.$$.fragment,e)},m(e,r){_e(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.participants=e[0]),t.$set(r)},i(e){n||($e(t.$$.fragment,e),n=!0)},o(e){be(t.$$.fragment,e),n=!1},d(e){Ee(t,e)}}}function Xe(e){let t,n,r,o,a,i,s,c;t=new Ae({props:{page:"matches"}});const l=[Je,Ye],u=[];function h(e,t){return 0===e[1].length?0:1}return o=h(e),a=u[o]=l[o](e),s=new Me({}),{c(){ke(t.$$.fragment),n=j(),r=N("div"),a.c(),i=j(),ke(s.$$.fragment),this.h()},l(e){xe(t.$$.fragment,e),n=H(e),r=L(e,"DIV",{class:!0});var o=O(r);a.l(o),o.forEach(B),i=H(e),xe(s.$$.fragment,e),this.h()},h(){P(r,"class","page-padding svelte-1cbqe2f")},m(e,a){_e(t,e,a),A(e,n,a),A(e,r,a),u[o].m(r,null),A(e,i,a),_e(s,e,a),c=!0},p(e,[t]){let n=o;o=h(e),o===n?u[o].p(e,t):(pe(),be(u[n],1,1,(()=>{u[n]=null})),ge(),a=u[o],a?a.p(e,t):(a=u[o]=l[o](e),a.c()),$e(a,1),a.m(r,null))},i(e){c||($e(t.$$.fragment,e),$e(a),$e(s.$$.fragment,e),c=!0)},o(e){be(t.$$.fragment,e),be(a),be(s.$$.fragment,e),c=!1},d(e){Ee(t,e),e&&B(n),e&&B(r),u[o].d(),e&&B(i),Ee(s,e)}}}function et(e,t,n){let r=[];const o=Ke.subscribe((e=>{n(0,r=e)}));r=r.filter((e=>3===e.season));let a=[];const i=Ze.subscribe((e=>{n(1,a=e)}));a=a.sort((function(e,t){return e.season<t.season||e.season===t.season&&e.episode<t.episode?1:-1}));let s=a[0].matches.sort((function(e,t){return e.probability<t.probability?1:e.probability!==t.probability?-1:e.man>t.man?1:e.man!==t.man?-1:(e.woman,void t.woman)}));return J((()=>{o(),i()})),[r,a,s]}class tt extends De{constructor(e){super(),Ie(this,e,et,Xe,s,{},Ue)}}function nt(e){I(e,"svelte-1aqqbh9",".vertical-center.svelte-1aqqbh9{min-height:100%;min-height:95vh;display:flex;align-items:center}.page-padding.svelte-1aqqbh9{padding-top:120px;padding-bottom:20px}")}function rt(t){let n,r,o,a,i,s,c,l,u,h,f,d,m,p,g,$,b,v,w,y,k,x,_,E,I,D,S,z,V,T,W,C,G,K,Z,U,F,Y,J,Q,X,ee,te,ne,re,oe,ae,ie,se,ce,le,ue,he,fe,de,me,pe,ge,ve,we,ye,Ie,De,Se,ze,Re,Be,Ne,Me,je,Ve,Pe,Oe,Te,Le,qe,He,We,Ce;return n=new Ae({props:{page:"impressum"}}),{c(){ke(n.$$.fragment),r=j(),o=N("div"),a=N("div"),i=N("h1"),s=M("Impressum"),c=j(),l=N("p"),u=M("Angaben gemäß § 5 TMG"),h=j(),f=N("p"),d=M("Tom Sperling\r\n            "),m=N("br"),p=M("\r\n            Drosselkamp6\r\n            "),g=N("br"),$=M("\r\n            25335 Elmshorn\r\n            "),b=N("br"),v=j(),w=N("p"),y=N("strong"),k=M("Vertreten durch:"),x=j(),_=N("br"),E=M("\r\n            Tom Sperling\r\n            "),I=N("br"),D=j(),S=N("p"),z=N("strong"),V=M("Kontakt:"),T=j(),W=N("br"),C=M("\r\n            Telefon: 0151-64014253\r\n            "),G=N("br"),K=M("\r\n            E-Mail: "),Z=N("a"),U=M("tom.sparrow@outlook.de"),F=j(),Y=N("br"),J=j(),Q=N("p"),X=N("strong"),ee=M("Haftungsausschluss:"),te=j(),ne=N("br"),re=j(),oe=N("br"),ae=j(),ie=N("strong"),se=M("Haftung für Links"),ce=j(),le=N("br"),ue=j(),he=N("br"),fe=M("\r\n            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. \r\n            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. \r\n            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. \r\n            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. \r\n            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. \r\n            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. \r\n            Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.\r\n            "),de=N("br"),me=j(),pe=N("br"),ge=j(),ve=N("strong"),we=M("Datenschutz"),ye=j(),Ie=N("br"),De=j(),Se=N("br"),ze=M("\r\n            Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. \r\n            Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. \r\n            Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.\r\n            "),Re=N("br"),Be=M("\r\n            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. \r\n            Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.\r\n            "),Ne=N("br"),Me=M("\r\n            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. \r\n            Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.\r\n            "),je=N("br"),Ve=j(),Pe=N("br"),Oe=M("\r\n        Website Impressum erstellt durch "),Te=N("a"),Le=M("impressum-generator.de"),qe=M(" von der "),He=N("a"),We=M("Kanzlei Hasselbach"),this.h()},l(e){xe(n.$$.fragment,e),r=H(e),o=L(e,"DIV",{class:!0});var t=O(o);a=L(t,"DIV",{class:!0});var R=O(a);i=L(R,"H1",{});var A=O(i);s=q(A,"Impressum"),A.forEach(B),c=H(R),l=L(R,"P",{});var N=O(l);u=q(N,"Angaben gemäß § 5 TMG"),N.forEach(B),h=H(R),f=L(R,"P",{});var M=O(f);d=q(M,"Tom Sperling\r\n            "),m=L(M,"BR",{}),p=q(M,"\r\n            Drosselkamp6\r\n            "),g=L(M,"BR",{}),$=q(M,"\r\n            25335 Elmshorn\r\n            "),b=L(M,"BR",{}),M.forEach(B),v=H(R),w=L(R,"P",{});var j=O(w);y=L(j,"STRONG",{});var P=O(y);k=q(P,"Vertreten durch:"),P.forEach(B),x=H(j),_=L(j,"BR",{}),E=q(j,"\r\n            Tom Sperling\r\n            "),I=L(j,"BR",{}),j.forEach(B),D=H(R),S=L(R,"P",{});var $e=O(S);z=L($e,"STRONG",{});var be=O(z);V=q(be,"Kontakt:"),be.forEach(B),T=H($e),W=L($e,"BR",{}),C=q($e,"\r\n            Telefon: 0151-64014253\r\n            "),G=L($e,"BR",{}),K=q($e,"\r\n            E-Mail: "),Z=L($e,"A",{href:!0});var ke=O(Z);U=q(ke,"tom.sparrow@outlook.de"),ke.forEach(B),F=H($e),Y=L($e,"BR",{}),$e.forEach(B),J=H(R),Q=L(R,"P",{});var _e=O(Q);X=L(_e,"STRONG",{});var Ee=O(X);ee=q(Ee,"Haftungsausschluss:"),Ee.forEach(B),te=H(_e),ne=L(_e,"BR",{}),re=H(_e),oe=L(_e,"BR",{}),ae=H(_e),ie=L(_e,"STRONG",{});var Ae=O(ie);se=q(Ae,"Haftung für Links"),Ae.forEach(B),ce=H(_e),le=L(_e,"BR",{}),ue=H(_e),he=L(_e,"BR",{}),fe=q(_e,"\r\n            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. \r\n            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. \r\n            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. \r\n            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. \r\n            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. \r\n            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. \r\n            Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.\r\n            "),de=L(_e,"BR",{}),me=H(_e),pe=L(_e,"BR",{}),ge=H(_e),ve=L(_e,"STRONG",{});var Ce=O(ve);we=q(Ce,"Datenschutz"),Ce.forEach(B),ye=H(_e),Ie=L(_e,"BR",{}),De=H(_e),Se=L(_e,"BR",{}),ze=q(_e,"\r\n            Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. \r\n            Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. \r\n            Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.\r\n            "),Re=L(_e,"BR",{}),Be=q(_e,"\r\n            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. \r\n            Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.\r\n            "),Ne=L(_e,"BR",{}),Me=q(_e,"\r\n            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. \r\n            Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.\r\n            "),je=L(_e,"BR",{}),_e.forEach(B),Ve=H(R),Pe=L(R,"BR",{}),Oe=q(R,"\r\n        Website Impressum erstellt durch "),Te=L(R,"A",{href:!0});var Ge=O(Te);Le=q(Ge,"impressum-generator.de"),Ge.forEach(B),qe=q(R," von der "),He=L(R,"A",{href:!0,rel:!0});var Ke=O(He);We=q(Ke,"Kanzlei Hasselbach"),Ke.forEach(B),R.forEach(B),t.forEach(B),this.h()},h(){P(Z,"href","mailto:tom.sparrow@outlook.de"),P(Te,"href","https://www.impressum-generator.de"),P(He,"href","https://www.kanzlei-hasselbach.de/"),P(He,"rel","nofollow"),P(a,"class","impressum justify-content-center"),P(o,"class","container vertical-center page-padding svelte-1aqqbh9")},m(e,t){_e(n,e,t),A(e,r,t),A(e,o,t),R(o,a),R(a,i),R(i,s),R(a,c),R(a,l),R(l,u),R(a,h),R(a,f),R(f,d),R(f,m),R(f,p),R(f,g),R(f,$),R(f,b),R(a,v),R(a,w),R(w,y),R(y,k),R(w,x),R(w,_),R(w,E),R(w,I),R(a,D),R(a,S),R(S,z),R(z,V),R(S,T),R(S,W),R(S,C),R(S,G),R(S,K),R(S,Z),R(Z,U),R(S,F),R(S,Y),R(a,J),R(a,Q),R(Q,X),R(X,ee),R(Q,te),R(Q,ne),R(Q,re),R(Q,oe),R(Q,ae),R(Q,ie),R(ie,se),R(Q,ce),R(Q,le),R(Q,ue),R(Q,he),R(Q,fe),R(Q,de),R(Q,me),R(Q,pe),R(Q,ge),R(Q,ve),R(ve,we),R(Q,ye),R(Q,Ie),R(Q,De),R(Q,Se),R(Q,ze),R(Q,Re),R(Q,Be),R(Q,Ne),R(Q,Me),R(Q,je),R(a,Ve),R(a,Pe),R(a,Oe),R(a,Te),R(Te,Le),R(a,qe),R(a,He),R(He,We),Ce=!0},p:e,i(e){Ce||($e(n.$$.fragment,e),Ce=!0)},o(e){be(n.$$.fragment,e),Ce=!1},d(e){Ee(n,e),e&&B(r),e&&B(o)}}}class ot extends De{constructor(e){super(),Ie(this,e,null,rt,s,{},nt)}}const at={},it={};function st(e){return{...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}}const ct=function(e,t){const n=[];let r=st(e);return{get location(){return r},listen(t){n.push(t);const o=()=>{r=st(e),t({location:r,action:"POP"})};return e.addEventListener("popstate",o),()=>{e.removeEventListener("popstate",o);const r=n.indexOf(t);n.splice(r,1)}},navigate(t,{state:o,replace:a=!1}={}){o={...o,key:Date.now()+""};try{a?e.history.replaceState(o,null,t):e.history.pushState(o,null,t)}catch(n){e.location[a?"replace":"assign"](t)}r=st(e),n.forEach((e=>e({location:r,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(e="/"){let t=0;const n=[{pathname:e,search:""}],r=[];return{get location(){return n[t]},addEventListener(e,t){},removeEventListener(e,t){},history:{get entries(){return n},get index(){return t},get state(){return r[t]},pushState(e,o,a){const[i,s=""]=a.split("?");t++,n.push({pathname:i,search:s}),r.push(e)},replaceState(e,o,a){const[i,s=""]=a.split("?");n[t]={pathname:i,search:s},r[t]=e}}}}()),lt=/^:(.+)/;function ut(e){return"*"===e[0]}function ht(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function ft(e){return e.replace(/(^\/+|\/+$)/g,"")}function dt(e,t){return{route:e,score:e.default?0:ht(e.path).reduce(((e,t)=>(e+=4,function(e){return""===e}(t)?e+=1:function(e){return lt.test(e)}(t)?e+=2:ut(t)?e-=5:e+=3,e)),0),index:t}}function mt(e,t){let n,r;const[o]=t.split("?"),a=ht(o),i=""===a[0],s=function(e){return e.map(dt).sort(((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index))}(e);for(let e=0,o=s.length;e<o;e++){const o=s[e].route;let c=!1;if(o.default){r={route:o,params:{},uri:t};continue}const l=ht(o.path),u={},h=Math.max(a.length,l.length);let f=0;for(;f<h;f++){const e=l[f],t=a[f];if(void 0!==e&&ut(e)){u["*"===e?"*":e.slice(1)]=a.slice(f).map(decodeURIComponent).join("/");break}if(void 0===t){c=!0;break}let n=lt.exec(e);if(n&&!i){const e=decodeURIComponent(t);u[n[1]]=e}else if(e!==t){c=!0;break}}if(!c){n={route:o,params:u,uri:"/"+a.slice(0,f).join("/")};break}}return n||r||null}function pt(e,t){return`${ft("/"===t?e:`${ft(e)}/${ft(t)}`)}/`}function gt(e){let t;const n=e[9].default,r=f(n,e,e[8],null);return{c(){r&&r.c()},l(e){r&&r.l(e)},m(e,n){r&&r.m(e,n),t=!0},p(e,[o]){r&&r.p&&(!t||256&o)&&p(r,n,e,e[8],t?m(n,e[8],o,null):g(e[8]),null)},i(e){t||($e(r,e),t=!0)},o(e){be(r,e),t=!1},d(e){r&&r.d(e)}}}function $t(e,t,n){let r,o,a,{$$slots:i={},$$scope:s}=t,{basepath:c="/"}=t,{url:l=null}=t;const u=X(at),f=X(it),d=We([]);h(e,d,(e=>n(6,o=e)));const m=We(null);let p=!1;const g=u||We(l?{pathname:l}:ct.location);h(e,g,(e=>n(5,r=e)));const $=f?f.routerBase:We({path:c,uri:c});h(e,$,(e=>n(7,a=e)));const b=Ce([$,m],(([e,t])=>{if(null===t)return e;const{path:n}=e,{route:r,uri:o}=t;return{path:r.default?n:r.path.replace(/\*.*$/,""),uri:o}}));return u||(Y((()=>ct.listen((e=>{g.set(e.location)})))),Q(at,g)),Q(it,{activeRoute:m,base:$,routerBase:b,registerRoute:function(e){const{path:t}=a;let{path:n}=e;if(e._path=n,e.path=pt(t,n),"undefined"==typeof window){if(p)return;const t=function(e,t){return mt([e],t)}(e,r.pathname);t&&(m.set(t),p=!0)}else d.update((t=>(t.push(e),t)))},unregisterRoute:function(e){d.update((t=>{const n=t.indexOf(e);return t.splice(n,1),t}))}}),e.$$set=e=>{"basepath"in e&&n(3,c=e.basepath),"url"in e&&n(4,l=e.url),"$$scope"in e&&n(8,s=e.$$scope)},e.$$.update=()=>{if(128&e.$$.dirty){const{path:e}=a;d.update((t=>(t.forEach((t=>t.path=pt(e,t._path))),t)))}if(96&e.$$.dirty){const e=mt(o,r.pathname);m.set(e)}},[d,g,$,c,l,r,o,a,s,i]}class bt extends De{constructor(e){super(),Ie(this,e,$t,gt,s,{basepath:3,url:4})}}const vt=e=>({params:4&e,location:16&e}),wt=e=>({params:e[2],location:e[4]});function yt(e){let t,n,r,o;const a=[xt,kt],i=[];function s(e,t){return null!==e[0]?0:1}return t=s(e),n=i[t]=a[t](e),{c(){n.c(),r=V()},l(e){n.l(e),r=V()},m(e,n){i[t].m(e,n),A(e,r,n),o=!0},p(e,o){let c=t;t=s(e),t===c?i[t].p(e,o):(pe(),be(i[c],1,1,(()=>{i[c]=null})),ge(),n=i[t],n?n.p(e,o):(n=i[t]=a[t](e),n.c()),$e(n,1),n.m(r.parentNode,r))},i(e){o||($e(n),o=!0)},o(e){be(n),o=!1},d(e){i[t].d(e),e&&B(r)}}}function kt(e){let t;const n=e[10].default,r=f(n,e,e[9],wt);return{c(){r&&r.c()},l(e){r&&r.l(e)},m(e,n){r&&r.m(e,n),t=!0},p(e,o){r&&r.p&&(!t||532&o)&&p(r,n,e,e[9],t?m(n,e[9],o,vt):g(e[9]),wt)},i(e){t||($e(r,e),t=!0)},o(e){be(r,e),t=!1},d(e){r&&r.d(e)}}}function xt(e){let t,r,o;const a=[{location:e[4]},e[2],e[3]];var i=e[0];function s(e){let t={};for(let e=0;e<a.length;e+=1)t=n(t,a[e]);return{props:t}}return i&&(t=new i(s())),{c(){t&&ke(t.$$.fragment),r=V()},l(e){t&&xe(t.$$.fragment,e),r=V()},m(e,n){t&&_e(t,e,n),A(e,r,n),o=!0},p(e,n){const o=28&n?function(e,t){const n={},r={},o={$$scope:1};let a=e.length;for(;a--;){const i=e[a],s=t[a];if(s){for(const e in i)e in s||(r[e]=1);for(const e in s)o[e]||(n[e]=s[e],o[e]=1);e[a]=s}else for(const e in i)o[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}(a,[16&n&&{location:e[4]},4&n&&ye(e[2]),8&n&&ye(e[3])]):{};if(i!==(i=e[0])){if(t){pe();const e=t;be(e.$$.fragment,1,0,(()=>{Ee(e,1)})),ge()}i?(t=new i(s()),ke(t.$$.fragment),$e(t.$$.fragment,1),_e(t,r.parentNode,r)):t=null}else i&&t.$set(o)},i(e){o||(t&&$e(t.$$.fragment,e),o=!0)},o(e){t&&be(t.$$.fragment,e),o=!1},d(e){e&&B(r),t&&Ee(t,e)}}}function _t(e){let t,n,r=null!==e[1]&&e[1].route===e[7]&&yt(e);return{c(){r&&r.c(),t=V()},l(e){r&&r.l(e),t=V()},m(e,o){r&&r.m(e,o),A(e,t,o),n=!0},p(e,[n]){null!==e[1]&&e[1].route===e[7]?r?(r.p(e,n),2&n&&$e(r,1)):(r=yt(e),r.c(),$e(r,1),r.m(t.parentNode,t)):r&&(pe(),be(r,1,1,(()=>{r=null})),ge())},i(e){n||($e(r),n=!0)},o(e){be(r),n=!1},d(e){r&&r.d(e),e&&B(t)}}}function Et(e,t,r){let o,a,{$$slots:i={},$$scope:s}=t,{path:c=""}=t,{component:l=null}=t;const{registerRoute:u,unregisterRoute:f,activeRoute:d}=X(it);h(e,d,(e=>r(1,o=e)));const m=X(at);h(e,m,(e=>r(4,a=e)));const p={path:c,default:""===c};let g={},b={};return u(p),"undefined"!=typeof window&&J((()=>{f(p)})),e.$$set=e=>{r(13,t=n(n({},t),$(e))),"path"in e&&r(8,c=e.path),"component"in e&&r(0,l=e.component),"$$scope"in e&&r(9,s=e.$$scope)},e.$$.update=()=>{2&e.$$.dirty&&o&&o.route===p&&r(2,g=o.params);{const{path:e,component:n,...o}=t;r(3,b=o)}},t=$(t),[l,o,g,b,a,d,m,p,c,s,i]}class It extends De{constructor(e){super(),Ie(this,e,Et,_t,s,{path:8,component:0})}}function Dt(e,{delay:n=0,duration:r=400,easing:o=t}={}){const a=+getComputedStyle(e).opacity;return{delay:n,duration:r,easing:o,css:e=>"opacity: "+e*a}}function St(e){let t,n;return t=new Pe({}),{c(){ke(t.$$.fragment)},l(e){xe(t.$$.fragment,e)},m(e,r){_e(t,e,r),n=!0},i(e){n||($e(t.$$.fragment,e),n=!0)},o(e){be(t.$$.fragment,e),n=!1},d(e){Ee(t,e)}}}function zt(e){let t,n;return t=new tt({}),{c(){ke(t.$$.fragment)},l(e){xe(t.$$.fragment,e)},m(e,r){_e(t,e,r),n=!0},i(e){n||($e(t.$$.fragment,e),n=!0)},o(e){be(t.$$.fragment,e),n=!1},d(e){Ee(t,e)}}}function Rt(e){let t,n;return t=new ot({}),{c(){ke(t.$$.fragment)},l(e){xe(t.$$.fragment,e)},m(e,r){_e(t,e,r),n=!0},i(e){n||($e(t.$$.fragment,e),n=!0)},o(e){be(t.$$.fragment,e),n=!1},d(e){Ee(t,e)}}}function At(e){let t,n,r,o,a,i,s;return n=new It({props:{path:"/",$$slots:{default:[St]},$$scope:{ctx:e}}}),o=new It({props:{path:"matches",$$slots:{default:[zt]},$$scope:{ctx:e}}}),i=new It({props:{path:"impressum",$$slots:{default:[Rt]},$$scope:{ctx:e}}}),{c(){t=N("div"),ke(n.$$.fragment),r=j(),ke(o.$$.fragment),a=j(),ke(i.$$.fragment)},l(e){t=L(e,"DIV",{});var s=O(t);xe(n.$$.fragment,s),r=H(s),xe(o.$$.fragment,s),a=H(s),xe(i.$$.fragment,s),s.forEach(B)},m(e,c){A(e,t,c),_e(n,t,null),R(t,r),_e(o,t,null),R(t,a),_e(i,t,null),s=!0},p(e,t){const r={};1&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r);const a={};1&t&&(a.$$scope={dirty:t,ctx:e}),o.$set(a);const s={};1&t&&(s.$$scope={dirty:t,ctx:e}),i.$set(s)},i(e){s||($e(n.$$.fragment,e),$e(o.$$.fragment,e),$e(i.$$.fragment,e),s=!0)},o(e){be(n.$$.fragment,e),be(o.$$.fragment,e),be(i.$$.fragment,e),s=!1},d(e){e&&B(t),Ee(n),Ee(o),Ee(i)}}}function Bt(e){let t,n,r,o,a,i;return o=new bt({props:{url:Nt,$$slots:{default:[At]},$$scope:{ctx:e}}}),{c(){t=N("link"),n=j(),r=N("main"),ke(o.$$.fragment),this.h()},l(e){const a=function(e,t=document.body){return Array.from(t.querySelectorAll(e))}('[data-svelte="svelte-xdjox0"]',document.head);t=L(a,"LINK",{rel:!0,href:!0}),a.forEach(B),n=H(e),r=L(e,"MAIN",{});var i=O(r);xe(o.$$.fragment,i),i.forEach(B),this.h()},h(){P(t,"rel","stylesheet"),P(t,"href","https://bootswatch.com/5/quartz/bootstrap.min.css")},m(e,a){R(document.head,t),A(e,n,a),A(e,r,a),_e(o,r,null),i=!0},p(e,[t]){const n={};1&t&&(n.$$scope={dirty:t,ctx:e}),o.$set(n)},i(e){i||($e(o.$$.fragment,e),ie((()=>{a||(a=we(r,Dt,{},!0)),a.run(1)})),i=!0)},o(e){be(o.$$.fragment,e),a||(a=we(r,Dt,{},!1)),a.run(0),i=!1},d(e){B(t),e&&B(n),e&&B(r),Ee(o),e&&a&&a.end()}}}let Nt="";function Mt(e){return Ke.useLocalStorage(),Ze.useLocalStorage(),Y((async()=>{fetch("https://dayo-project.herokuapp.com/api/v1/participants").then((e=>e.json())).then((e=>{Ke.set(e.data)})).catch((function(){return 0})),fetch("https://dayo-project.herokuapp.com/api/v1/matches").then((e=>e.json())).then((e=>{Ze.set(e.data)})).catch((function(){return 0}))})),[]}return{default:new class extends De{constructor(e){super(),Ie(this,e,Mt,Bt,s,{})}}({target:document.querySelector("#__snel"),props:{}})}})();