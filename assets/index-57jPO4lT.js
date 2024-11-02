var Kf=Object.defineProperty;var Zf=(i,t,e)=>t in i?Kf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Ga=(i,t,e)=>(Zf(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();function Rt(){}function nh(i,t){for(const e in t)i[e]=t[e];return i}function ih(i){return i()}function bc(){return Object.create(null)}function Xr(i){i.forEach(ih)}function Ol(i){return typeof i=="function"}function De(i,t){return i!=i?t==t:i!==t||i&&typeof i=="object"||typeof i=="function"}let Rs;function ha(i,t){return i===t?!0:(Rs||(Rs=document.createElement("a")),Rs.href=t,i===Rs.href)}function Jf(i){return Object.keys(i).length===0}function rh(i,...t){if(i==null){for(const n of t)n(void 0);return Rt}const e=i.subscribe(...t);return e.unsubscribe?()=>e.unsubscribe():e}function Qf(i,t,e){i.$$.on_destroy.push(rh(t,e))}function G(i,t){i.appendChild(t)}function Ot(i,t,e){i.insertBefore(t,e||null)}function Nt(i){i.parentNode&&i.parentNode.removeChild(i)}function td(i,t){for(let e=0;e<i.length;e+=1)i[e]&&i[e].d(t)}function J(i){return document.createElement(i)}function Tn(i){return document.createTextNode(i)}function pt(){return Tn(" ")}function Fl(){return Tn("")}function sh(i,t,e,n){return i.addEventListener(t,e,n),()=>i.removeEventListener(t,e,n)}function et(i,t,e){e==null?i.removeAttribute(t):i.getAttribute(t)!==e&&i.setAttribute(t,e)}function ed(i){return Array.from(i.childNodes)}function nd(i,t){t=""+t,i.data!==t&&(i.data=t)}function Va(i,t){i.value=t??""}function id(i,t,{bubbles:e=!1,cancelable:n=!1}={}){return new CustomEvent(i,{detail:t,bubbles:e,cancelable:n})}function fa(i,t){return new i(t)}let hs;function ss(i){hs=i}function Ca(){if(!hs)throw new Error("Function called outside component initialization");return hs}function Mi(i){Ca().$$.on_mount.push(i)}function rd(i){Ca().$$.after_update.push(i)}function sd(i){Ca().$$.on_destroy.push(i)}function ad(){const i=Ca();return(t,e,{cancelable:n=!1}={})=>{const r=i.$$.callbacks[t];if(r){const s=id(t,e,{cancelable:n});return r.slice().forEach(a=>{a.call(i,s)}),!s.defaultPrevented}return!0}}function wc(i,t){const e=i.$$.callbacks[t.type];e&&e.slice().forEach(n=>n.call(this,t))}const vr=[],Ac=[];let Tr=[];const Rc=[],ah=Promise.resolve();let Lo=!1;function oh(){Lo||(Lo=!0,ah.then(lh))}function od(){return oh(),ah}function Uo(i){Tr.push(i)}const Wa=new Set;let er=0;function lh(){if(er!==0)return;const i=hs;do{try{for(;er<vr.length;){const t=vr[er];er++,ss(t),ld(t.$$)}}catch(t){throw vr.length=0,er=0,t}for(ss(null),vr.length=0,er=0;Ac.length;)Ac.pop()();for(let t=0;t<Tr.length;t+=1){const e=Tr[t];Wa.has(e)||(Wa.add(e),e())}Tr.length=0}while(vr.length);for(;Rc.length;)Rc.pop()();Lo=!1,Wa.clear(),ss(i)}function ld(i){if(i.fragment!==null){i.update(),Xr(i.before_update);const t=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,t),i.after_update.forEach(Uo)}}function cd(i){const t=[],e=[];Tr.forEach(n=>i.indexOf(n)===-1?t.push(n):e.push(n)),e.forEach(n=>n()),Tr=t}const ta=new Set;let Oi;function Bl(){Oi={r:0,c:[],p:Oi}}function zl(){Oi.r||Xr(Oi.c),Oi=Oi.p}function mi(i,t){i&&i.i&&(ta.delete(i),i.i(t))}function Wi(i,t,e,n){if(i&&i.o){if(ta.has(i))return;ta.add(i),Oi.c.push(()=>{ta.delete(i),n&&(e&&i.d(1),n())}),i.o(t)}else n&&n()}function Cc(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function da(i,t){const e={},n={},r={$$scope:1};let s=i.length;for(;s--;){const a=i[s],o=t[s];if(o){for(const l in a)l in o||(n[l]=1);for(const l in o)r[l]||(e[l]=o[l],r[l]=1);i[s]=o}else for(const l in a)r[l]=1}for(const a in n)a in e||(e[a]=void 0);return e}function pa(i){return typeof i=="object"&&i!==null?i:{}}function fs(i){i&&i.c()}function Lr(i,t,e){const{fragment:n,after_update:r}=i.$$;n&&n.m(t,e),Uo(()=>{const s=i.$$.on_mount.map(ih).filter(Ol);i.$$.on_destroy?i.$$.on_destroy.push(...s):Xr(s),i.$$.on_mount=[]}),r.forEach(Uo)}function Ur(i,t){const e=i.$$;e.fragment!==null&&(cd(e.after_update),Xr(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function ud(i,t){i.$$.dirty[0]===-1&&(vr.push(i),oh(),i.$$.dirty.fill(0)),i.$$.dirty[t/31|0]|=1<<t%31}function ke(i,t,e,n,r,s,a=null,o=[-1]){const l=hs;ss(i);const c=i.$$={fragment:null,ctx:[],props:s,update:Rt,not_equal:r,bound:bc(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:bc(),dirty:o,skip_bound:!1,root:t.target||l.$$.root};a&&a(c.root);let u=!1;if(c.ctx=e?e(i,t.props||{},(h,f,...p)=>{const g=p.length?p[0]:f;return c.ctx&&r(c.ctx[h],c.ctx[h]=g)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](g),u&&ud(i,h)),f}):[],c.update(),u=!0,Xr(c.before_update),c.fragment=n?n(c.ctx):!1,t.target){if(t.hydrate){const h=ed(t.target);c.fragment&&c.fragment.l(h),h.forEach(Nt)}else c.fragment&&c.fragment.c();t.intro&&mi(i.$$.fragment),Lr(i,t.target,t.anchor),lh()}ss(l)}class He{constructor(){Ga(this,"$$");Ga(this,"$$set")}$destroy(){Ur(this,1),this.$destroy=Rt}$on(t,e){if(!Ol(e))return Rt;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}$set(t){this.$$set&&!Jf(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const hd="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(hd);const nr=[];function ch(i,t){return{subscribe:uh(i,t).subscribe}}function uh(i,t=Rt){let e;const n=new Set;function r(o){if(De(i,o)&&(i=o,e)){const l=!nr.length;for(const c of n)c[1](),nr.push(c,i);if(l){for(let c=0;c<nr.length;c+=2)nr[c][0](nr[c+1]);nr.length=0}}}function s(o){r(o(i))}function a(o,l=Rt){const c=[o,l];return n.add(c),n.size===1&&(e=t(r,s)||Rt),o(i),()=>{n.delete(c),n.size===0&&e&&(e(),e=null)}}return{set:r,update:s,subscribe:a}}function hh(i,t,e){const n=!Array.isArray(i),r=n?[i]:i;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=t.length<2;return ch(e,(a,o)=>{let l=!1;const c=[];let u=0,h=Rt;const f=()=>{if(u)return;h();const g=t(n?c[0]:c,a,o);s?a(g):h=Ol(g)?g:Rt},p=r.map((g,_)=>rh(g,d=>{c[_]=d,u&=~(1<<_),l&&f()},()=>{u|=1<<_}));return l=!0,f(),function(){Xr(p),h(),l=!1}})}function fd(i,t){if(i instanceof RegExp)return{keys:!1,pattern:i};var e,n,r,s,a=[],o="",l=i.split("/");for(l[0]||l.shift();r=l.shift();)e=r[0],e==="*"?(a.push("wild"),o+="/(.*)"):e===":"?(n=r.indexOf("?",1),s=r.indexOf(".",1),a.push(r.substring(1,~n?n:~s?s:r.length)),o+=~n&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(o+=(~n?"?":"")+"\\"+r.substring(s))):o+="/"+r;return{keys:a,pattern:new RegExp("^"+o+(t?"(?=$|/)":"/?$"),"i")}}function dd(i){let t,e,n;const r=[i[2]];var s=i[0];function a(o,l){let c={};if(l!==void 0&&l&4)c=da(r,[pa(o[2])]);else for(let u=0;u<r.length;u+=1)c=nh(c,r[u]);return{props:c}}return s&&(t=fa(s,a(i)),t.$on("routeEvent",i[7])),{c(){t&&fs(t.$$.fragment),e=Fl()},m(o,l){t&&Lr(t,o,l),Ot(o,e,l),n=!0},p(o,l){if(l&1&&s!==(s=o[0])){if(t){Bl();const c=t;Wi(c.$$.fragment,1,0,()=>{Ur(c,1)}),zl()}s?(t=fa(s,a(o,l)),t.$on("routeEvent",o[7]),fs(t.$$.fragment),mi(t.$$.fragment,1),Lr(t,e.parentNode,e)):t=null}else if(s){const c=l&4?da(r,[pa(o[2])]):{};t.$set(c)}},i(o){n||(t&&mi(t.$$.fragment,o),n=!0)},o(o){t&&Wi(t.$$.fragment,o),n=!1},d(o){o&&Nt(e),t&&Ur(t,o)}}}function pd(i){let t,e,n;const r=[{params:i[1]},i[2]];var s=i[0];function a(o,l){let c={};if(l!==void 0&&l&6)c=da(r,[l&2&&{params:o[1]},l&4&&pa(o[2])]);else for(let u=0;u<r.length;u+=1)c=nh(c,r[u]);return{props:c}}return s&&(t=fa(s,a(i)),t.$on("routeEvent",i[6])),{c(){t&&fs(t.$$.fragment),e=Fl()},m(o,l){t&&Lr(t,o,l),Ot(o,e,l),n=!0},p(o,l){if(l&1&&s!==(s=o[0])){if(t){Bl();const c=t;Wi(c.$$.fragment,1,0,()=>{Ur(c,1)}),zl()}s?(t=fa(s,a(o,l)),t.$on("routeEvent",o[6]),fs(t.$$.fragment),mi(t.$$.fragment,1),Lr(t,e.parentNode,e)):t=null}else if(s){const c=l&6?da(r,[l&2&&{params:o[1]},l&4&&pa(o[2])]):{};t.$set(c)}},i(o){n||(t&&mi(t.$$.fragment,o),n=!0)},o(o){t&&Wi(t.$$.fragment,o),n=!1},d(o){o&&Nt(e),t&&Ur(t,o)}}}function md(i){let t,e,n,r;const s=[pd,dd],a=[];function o(l,c){return l[1]?0:1}return t=o(i),e=a[t]=s[t](i),{c(){e.c(),n=Fl()},m(l,c){a[t].m(l,c),Ot(l,n,c),r=!0},p(l,[c]){let u=t;t=o(l),t===u?a[t].p(l,c):(Bl(),Wi(a[u],1,1,()=>{a[u]=null}),zl(),e=a[t],e?e.p(l,c):(e=a[t]=s[t](l),e.c()),mi(e,1),e.m(n.parentNode,n))},i(l){r||(mi(e),r=!0)},o(l){Wi(e),r=!1},d(l){l&&Nt(n),a[t].d(l)}}}function Pc(){const i=window.location.href.indexOf("#/");let t=i>-1?window.location.href.substr(i+1):"/";const e=t.indexOf("?");let n="";return e>-1&&(n=t.substr(e+1),t=t.substr(0,e)),{location:t,querystring:n}}const kl=ch(null,function(t){t(Pc());const e=()=>{t(Pc())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}),_d=hh(kl,i=>i.location);hh(kl,i=>i.querystring);const Dc=uh(void 0);function gd(i){i?window.scrollTo(i.__svelte_spa_router_scrollX,i.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function vd(i,t,e){let{routes:n={}}=t,{prefix:r=""}=t,{restoreScrollState:s=!1}=t;class a{constructor(A,w){if(!w||typeof w!="function"&&(typeof w!="object"||w._sveltesparouter!==!0))throw Error("Invalid component object");if(!A||typeof A=="string"&&(A.length<1||A.charAt(0)!="/"&&A.charAt(0)!="*")||typeof A=="object"&&!(A instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:b,keys:C}=fd(A);this.path=A,typeof w=="object"&&w._sveltesparouter===!0?(this.component=w.component,this.conditions=w.conditions||[],this.userData=w.userData,this.props=w.props||{}):(this.component=()=>Promise.resolve(w),this.conditions=[],this.props={}),this._pattern=b,this._keys=C}match(A){if(r){if(typeof r=="string")if(A.startsWith(r))A=A.substr(r.length)||"/";else return null;else if(r instanceof RegExp){const L=A.match(r);if(L&&L[0])A=A.substr(L[0].length)||"/";else return null}}const w=this._pattern.exec(A);if(w===null)return null;if(this._keys===!1)return w;const b={};let C=0;for(;C<this._keys.length;){try{b[this._keys[C]]=decodeURIComponent(w[C+1]||"")||null}catch{b[this._keys[C]]=null}C++}return b}async checkConditions(A){for(let w=0;w<this.conditions.length;w++)if(!await this.conditions[w](A))return!1;return!0}}const o=[];n instanceof Map?n.forEach((S,A)=>{o.push(new a(A,S))}):Object.keys(n).forEach(S=>{o.push(new a(S,n[S]))});let l=null,c=null,u={};const h=ad();async function f(S,A){await od(),h(S,A)}let p=null,g=null;s&&(g=S=>{S.state&&(S.state.__svelte_spa_router_scrollY||S.state.__svelte_spa_router_scrollX)?p=S.state:p=null},window.addEventListener("popstate",g),rd(()=>{gd(p)}));let _=null,d=null;const m=kl.subscribe(async S=>{_=S;let A=0;for(;A<o.length;){const w=o[A].match(S.location);if(!w){A++;continue}const b={route:o[A].path,location:S.location,querystring:S.querystring,userData:o[A].userData,params:w&&typeof w=="object"&&Object.keys(w).length?w:null};if(!await o[A].checkConditions(b)){e(0,l=null),d=null,f("conditionsFailed",b);return}f("routeLoading",Object.assign({},b));const C=o[A].component;if(d!=C){C.loading?(e(0,l=C.loading),d=C,e(1,c=C.loadingParams),e(2,u={}),f("routeLoaded",Object.assign({},b,{component:l,name:l.name,params:c}))):(e(0,l=null),d=null);const L=await C();if(S!=_)return;e(0,l=L&&L.default||L),d=C}w&&typeof w=="object"&&Object.keys(w).length?e(1,c=w):e(1,c=null),e(2,u=o[A].props),f("routeLoaded",Object.assign({},b,{component:l,name:l.name,params:c})).then(()=>{Dc.set(c)});return}e(0,l=null),d=null,Dc.set(void 0)});sd(()=>{m(),g&&window.removeEventListener("popstate",g)});function y(S){wc.call(this,i,S)}function x(S){wc.call(this,i,S)}return i.$$set=S=>{"routes"in S&&e(3,n=S.routes),"prefix"in S&&e(4,r=S.prefix),"restoreScrollState"in S&&e(5,s=S.restoreScrollState)},i.$$.update=()=>{i.$$.dirty&32&&(history.scrollRestoration=s?"manual":"auto")},[l,c,u,n,r,s,y,x]}class xd extends He{constructor(t){super(),ke(this,t,vd,md,De,{routes:3,prefix:4,restoreScrollState:5})}}function Md(i){let t,e,n,r,s,a,o,l,c,u;return{c(){t=J("main"),e=J("h1"),e.textContent="Denmar Feliciano",n=pt(),r=J("p"),r.textContent="Software Engineer at Amazon",s=pt(),a=J("p"),a.textContent="Bachelors in Computer Science from University of California, Irvine",o=pt(),l=J("p"),c=Tn("What is the meaning of life? "),u=Tn(i[0])},m(h,f){Ot(h,t,f),G(t,e),G(t,n),G(t,r),G(t,s),G(t,a),G(t,o),G(t,l),G(l,c),G(l,u)},p(h,[f]){f&1&&nd(u,h[0])},i:Rt,o:Rt,d(h){h&&Nt(t)}}}function Sd(i,t,e){let n="";return Mi(async()=>{const s=await(await fetch("http://localhost:3000/health_check")).json();e(0,n=s.data)}),[n]}class yd extends He{constructor(t){super(),ke(this,t,Sd,Md,De,{})}}function Ed(i){let t;return{c(){t=J("p"),t.textContent="Thank you for coming!"},m(e,n){Ot(e,t,n)},p:Rt,d(e){e&&Nt(t)}}}function Td(i){let t;return{c(){t=J("p"),t.textContent=`Days until wedding: ${i[0]}`},m(e,n){Ot(e,t,n)},p:Rt,d(e){e&&Nt(t)}}}function bd(i){let t;return{c(){t=J("p"),t.textContent="Today is the day!"},m(e,n){Ot(e,t,n)},p:Rt,d(e){e&&Nt(t)}}}function wd(i){let t,e,n,r,s,a,o,l,c,u,h,f,p,g,_,d,m,y,x,S,A;function w(L,v){return L[0]==0?bd:L[0]>0?Td:Ed}let C=w(i)(i);return{c(){t=J("main"),e=J("h1"),e.textContent="Charlene & Denmar",n=pt(),r=J("h2"),r.textContent="May 30, 2026 · San Clemente, CA",s=pt(),a=J("h2"),a.textContent=`${i[0]} Days to go!`,o=pt(),l=J("div"),l.innerHTML='<img src="cover3.jpg" alt="" class="svelte-3y7nzy"/>',c=pt(),C.c(),u=pt(),h=J("a"),h.textContent="RSVP",f=pt(),p=J("p"),p.textContent="Saturday, May 30, 2024, from 5:00 PM to 2:00 PM (PST)",g=pt(),_=J("p"),d=Tn("Save to "),m=J("a"),y=Tn("Google"),x=Tn(" · "),S=J("a"),S.textContent="iPhone",A=J("a"),A.innerHTML="",et(e,"class","svelte-3y7nzy"),et(r,"class","svelte-3y7nzy"),et(a,"class","svelte-3y7nzy"),et(l,"id","coverPhoto"),et(l,"class","svelte-3y7nzy"),et(h,"href","#/wedding/RSVP"),et(m,"href",Ad),et(m,"target","_blank"),et(S,"href","public/wedding.ics"),et(A,"href","static/wedding.ics")},m(L,v){Ot(L,t,v),G(t,e),G(t,n),G(t,r),G(t,s),G(t,a),G(t,o),G(t,l),G(t,c),C.m(t,null),G(t,u),G(t,h),G(t,f),G(t,p),G(t,g),G(t,_),G(_,d),G(_,m),G(m,y),G(_,x),G(_,S),G(t,A)},p(L,[v]){C.p(L,v)},i:Rt,o:Rt,d(L){L&&Nt(t),C.d()}}}let Ad="https://www.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Charlene+and+Denmar&dates=20260531T000000Z/20260531T053000Z&details=Test&location=&trp=false&sf=tr";function Rd(i){const t=new Date,n=new Date(i)-t;return Math.ceil(n/(1e3*60*60*24))}function Cd(i){return[Rd("2026-05-30")]}class Pd extends He{constructor(t){super(),ke(this,t,Cd,wd,De,{})}}function Lc(i,t,e){const n=i.slice();return n[4]=t[e],n}function Uc(i){let t,e,n,r,s,a;return{c(){t=J("button"),e=J("img"),r=pt(),et(e,"loading","lazy"),ha(e.src,n=i[4])||et(e,"src",n),et(e,"alt",""),et(e,"class","svelte-1uidaes"),et(t,"class","square svelte-1uidaes")},m(o,l){Ot(o,t,l),G(t,e),G(t,r),s||(a=sh(t,"click",i[2]),s=!0)},p(o,l){l&1&&!ha(e.src,n=o[4])&&et(e,"src",n)},d(o){o&&Nt(t),s=!1,a()}}}function Dd(i){let t,e,n,r,s,a,o,l,c,u,h,f=Cc(i[0]),p=[];for(let g=0;g<f.length;g+=1)p[g]=Uc(Lc(i,f,g));return{c(){t=J("main"),e=J("h1"),e.textContent="Photos",n=pt(),r=J("div");for(let g=0;g<p.length;g+=1)p[g].c();s=pt(),a=J("dialog"),o=J("div"),l=J("img"),et(r,"class","flex-container svelte-1uidaes"),et(l,"id","expandedImage"),ha(l.src,c=i[1])||et(l,"src",c),et(l,"alt",""),et(l,"class","svelte-1uidaes"),et(o,"id","myDiv"),et(a,"id","imageViewer")},m(g,_){Ot(g,t,_),G(t,e),G(t,n),G(t,r);for(let d=0;d<p.length;d+=1)p[d]&&p[d].m(r,null);G(t,s),G(t,a),G(a,o),G(o,l),u||(h=sh(a,"click",Ld),u=!0)},p(g,[_]){if(_&5){f=Cc(g[0]);let d;for(d=0;d<f.length;d+=1){const m=Lc(g,f,d);p[d]?p[d].p(m,_):(p[d]=Uc(m),p[d].c(),p[d].m(r,null))}for(;d<p.length;d+=1)p[d].d(1);p.length=f.length}_&2&&!ha(l.src,c=g[1])&&et(l,"src",c)},i:Rt,o:Rt,d(g){g&&Nt(t),td(p,g),u=!1,h()}}}const Ld=i=>i.currentTarget.close();function Ud(i,t,e){let n=[],r;Mi(async()=>{r=await(await fetch("https://storage.googleapis.com/storage/v1/b/blogphotos10062024/o?&prefix=engagement/FlytographerEngagement")).json();let l=[];for(let c=0;c<r.items.length;c++)l.push(`https://storage.googleapis.com/blogphotos10062024/${r.items[c].name}`);e(0,n=l)});let s="";function a(o){let l=o.currentTarget.lastElementChild.src;console.log(l),e(1,s=l),document.getElementById("imageViewer").showModal(),document.getElementById("myDiv").addEventListener("click",h=>h.stopPropagation())}return[n,s,a]}class Id extends He{constructor(t){super(),ke(this,t,Ud,Dd,De,{})}}function Nd(i){let t;return{c(){t=J("main"),t.innerHTML="<h1>Registry</h1>"},m(e,n){Ot(e,t,n)},p:Rt,i:Rt,o:Rt,d(e){e&&Nt(t)}}}class Od extends He{constructor(t){super(),ke(this,t,null,Nd,De,{})}}function Fd(i){let t;return{c(){t=J("main"),t.innerHTML="<h1>Frequently Asked Questions</h1> <h3>Question A</h3> <p>Answer A</p> <h3>Question B</h3> <p>Answer B</p> <h3>Question C</h3> <p>Answer C</p> <h2>Contact Us</h2>"},m(e,n){Ot(e,t,n)},p:Rt,i:Rt,o:Rt,d(e){e&&Nt(t)}}}class Bd extends He{constructor(t){super(),ke(this,t,null,Fd,De,{})}}function zd(i){let t;return{c(){t=J("main"),t.innerHTML="<h1>RSVP</h1>"},m(e,n){Ot(e,t,n)},p:Rt,i:Rt,o:Rt,d(e){e&&Nt(t)}}}class kd extends He{constructor(t){super(),ke(this,t,null,zd,De,{})}}function Hd(i){let t,e,n,r,s,a,o,l,c,u,h,f,p,g,_,d,m,y,x,S,A,w,b,C,L,v,E,B,N,X,$,z,Y,V,lt,rt,mt,St,Gt,q,Q,vt,ht,It,wt,Wt,Kt,Xt,P,Le,zt,qt,bt,Zt,At,R,M,O,K,tt,j,xt,st,ft,Yt,nt,gt,Ct,Pt,_t,Vt,Dt,ne,D,ct,W,Z,ot,ut,kt,ue,Se;return{c(){t=J("main"),e=J("h1"),e.textContent="Style Guide",n=pt(),r=J("h2"),r.textContent="Headings",s=pt(),a=J("h1"),a.textContent="Heading 1",o=pt(),l=J("h2"),l.textContent="Heading 2",c=pt(),u=J("h3"),u.textContent="Heading 3",h=pt(),f=J("h4"),f.textContent="Heading 4",p=pt(),g=J("h5"),g.textContent="Heading 5",_=pt(),d=J("h6"),d.textContent="Heading 6",m=pt(),y=J("h2"),y.textContent="Paragraphs",x=pt(),S=J("p"),S.textContent="This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula gravida mi vel molestie.",A=pt(),w=J("h2"),w.textContent="Links",b=pt(),C=J("p"),C.innerHTML='This is a <a href="#/" class="svelte-1g6mf6w">link</a>.',L=pt(),v=J("h2"),v.textContent="Lists",E=pt(),B=J("ul"),B.innerHTML="<li>Unordered list item 1</li> <li>Unordered list item 2</li> <li>Unordered list item 3</li>",N=pt(),X=J("ol"),X.innerHTML="<li>Ordered list item 1</li> <li>Ordered list item 2</li> <li>Ordered list item 3</li>",$=pt(),z=J("h2"),z.textContent="Tables",Y=pt(),V=J("table"),V.innerHTML='<thead><tr><th class="svelte-1g6mf6w">Header 1</th> <th class="svelte-1g6mf6w">Header 2</th> <th class="svelte-1g6mf6w">Header 3</th></tr></thead> <tbody><tr><td class="svelte-1g6mf6w">Row 1, Cell 1</td> <td class="svelte-1g6mf6w">Row 1, Cell 2</td> <td class="svelte-1g6mf6w">Row 1, Cell 3</td></tr> <tr><td class="svelte-1g6mf6w">Row 2, Cell 1</td> <td class="svelte-1g6mf6w">Row 2, Cell 2</td> <td class="svelte-1g6mf6w">Row 2, Cell 3</td></tr></tbody>',lt=pt(),rt=J("h2"),rt.textContent="Forms",mt=pt(),St=J("form"),Gt=J("label"),Gt.textContent="Name:",q=pt(),Q=J("input"),vt=pt(),ht=J("label"),ht.textContent="Email:",It=pt(),wt=J("input"),Wt=pt(),Kt=J("label"),Kt.textContent="Message:",Xt=pt(),P=J("textarea"),Le=pt(),zt=J("label"),zt.textContent="Choose a color:",qt=pt(),bt=J("select"),Zt=J("option"),Zt.textContent="Red",At=J("option"),At.textContent="Green",R=J("option"),R.textContent="Blue",M=pt(),O=J("button"),O.textContent="Submit",K=pt(),tt=J("h2"),tt.textContent="Inline Elements",j=pt(),xt=J("p"),xt.innerHTML='This is some <strong>bold text</strong> and this is some <em>italic text</em>. Here&#39;s an inline <code class="svelte-1g6mf6w">code snippet</code>.',st=pt(),ft=J("h2"),ft.textContent="Blockquote",Yt=pt(),nt=J("blockquote"),nt.textContent="This is a blockquote. It is often used to indicate a quote or an important passage.",gt=pt(),Ct=J("h2"),Ct.textContent="Horizontal Rule",Pt=pt(),_t=J("hr"),Vt=pt(),Dt=J("h2"),Dt.textContent="Buttons",ne=pt(),D=J("button"),D.textContent="Primary Button",ct=pt(),W=J("h2"),W.textContent="Resources",Z=pt(),ot=J("ul"),ot.innerHTML='<li><a href="https://brandingstyleguides.com/" class="svelte-1g6mf6w">Branding Style Guides</a></li> <li><a href="https://coolors.co/" class="svelte-1g6mf6w">Color Palette Generator</a></li>',ut=pt(),kt=J("h2"),kt.textContent="Inspiration",ue=pt(),Se=J("ul"),Se.innerHTML='<li><a href="https://veleyross.wedding/" class="svelte-1g6mf6w">Marry Monday</a></li> <li><a href="https://jenhuangphoto.com/" class="svelte-1g6mf6w">Jen Huang Photo</a></li>',et(e,"class","svelte-1g6mf6w"),et(r,"class","svelte-1g6mf6w"),et(a,"class","svelte-1g6mf6w"),et(l,"class","svelte-1g6mf6w"),et(u,"class","svelte-1g6mf6w"),et(f,"class","svelte-1g6mf6w"),et(g,"class","svelte-1g6mf6w"),et(d,"class","svelte-1g6mf6w"),et(y,"class","svelte-1g6mf6w"),et(S,"class","svelte-1g6mf6w"),et(w,"class","svelte-1g6mf6w"),et(C,"class","svelte-1g6mf6w"),et(v,"class","svelte-1g6mf6w"),et(B,"class","svelte-1g6mf6w"),et(X,"class","svelte-1g6mf6w"),et(z,"class","svelte-1g6mf6w"),et(V,"class","svelte-1g6mf6w"),et(rt,"class","svelte-1g6mf6w"),et(Gt,"for","name"),et(Q,"type","text"),et(Q,"id","name"),et(Q,"name","name"),et(Q,"class","svelte-1g6mf6w"),et(ht,"for","email"),et(wt,"type","email"),et(wt,"id","email"),et(wt,"name","email"),et(wt,"class","svelte-1g6mf6w"),et(Kt,"for","message"),et(P,"id","message"),et(P,"name","message"),et(P,"class","svelte-1g6mf6w"),et(zt,"for","colors"),Zt.__value="red",Va(Zt,Zt.__value),At.__value="green",Va(At,At.__value),R.__value="blue",Va(R,R.__value),et(bt,"id","colors"),et(bt,"name","colors"),et(bt,"class","svelte-1g6mf6w"),et(O,"type","submit"),et(O,"class","svelte-1g6mf6w"),et(tt,"class","svelte-1g6mf6w"),et(xt,"class","svelte-1g6mf6w"),et(ft,"class","svelte-1g6mf6w"),et(nt,"class","svelte-1g6mf6w"),et(Ct,"class","svelte-1g6mf6w"),et(_t,"class","svelte-1g6mf6w"),et(Dt,"class","svelte-1g6mf6w"),et(D,"class","svelte-1g6mf6w"),et(W,"class","svelte-1g6mf6w"),et(ot,"class","svelte-1g6mf6w"),et(kt,"class","svelte-1g6mf6w"),et(Se,"class","svelte-1g6mf6w")},m($t,Ue){Ot($t,t,Ue),G(t,e),G(t,n),G(t,r),G(t,s),G(t,a),G(t,o),G(t,l),G(t,c),G(t,u),G(t,h),G(t,f),G(t,p),G(t,g),G(t,_),G(t,d),G(t,m),G(t,y),G(t,x),G(t,S),G(t,A),G(t,w),G(t,b),G(t,C),G(t,L),G(t,v),G(t,E),G(t,B),G(t,N),G(t,X),G(t,$),G(t,z),G(t,Y),G(t,V),G(t,lt),G(t,rt),G(t,mt),G(t,St),G(St,Gt),G(St,q),G(St,Q),G(St,vt),G(St,ht),G(St,It),G(St,wt),G(St,Wt),G(St,Kt),G(St,Xt),G(St,P),G(St,Le),G(St,zt),G(St,qt),G(St,bt),G(bt,Zt),G(bt,At),G(bt,R),G(St,M),G(St,O),G(t,K),G(t,tt),G(t,j),G(t,xt),G(t,st),G(t,ft),G(t,Yt),G(t,nt),G(t,gt),G(t,Ct),G(t,Pt),G(t,_t),G(t,Vt),G(t,Dt),G(t,ne),G(t,D),G(t,ct),G(t,W),G(t,Z),G(t,ot),G(t,ut),G(t,kt),G(t,ue),G(t,Se)},p:Rt,i:Rt,o:Rt,d($t){$t&&Nt(t)}}}class Gd extends He{constructor(t){super(),ke(this,t,null,Hd,De,{})}}function Vd(i){let t;return{c(){t=J("main"),t.innerHTML='<h1>Three JS Journey</h1> <ul><li><a href="https://threejs-journey.com/lessons/">Course Site</a></li> <li><a href="#/threeJsJourney/chapter3">Lesson 3: First Three.js Project</a></li> <li><a href="#/threeJsJourney/chapter4">Lesson 4: Transform objects</a></li> <li><a href="#/threeJsJourney/chapter5">Lesson 5: Animations</a></li> <li><a href="#/threeJsJourney/chapter6">Lesson 6: Cameras</a></li> <li><a href="#/threeJsJourney/chapter7">Lesson 7: Fullscreen and resizing</a></li> <li><a href="#/threeJsJourney/chapter8">Lesson 8: Geometries</a></li></ul>'},m(e,n){Ot(e,t,n)},p:Rt,i:Rt,o:Rt,d(e){e&&Nt(t)}}}class Wd extends He{constructor(t){super(),ke(this,t,null,Vd,De,{})}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hl="169",br={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xd=0,Ic=1,qd=2,fh=1,Yd=2,Gn=3,_i=0,qe=1,Xn=2,hi=0,wr=1,Nc=2,Oc=3,Fc=4,$d=5,Ii=100,jd=101,Kd=102,Zd=103,Jd=104,Qd=200,tp=201,ep=202,np=203,Io=204,No=205,ip=206,rp=207,sp=208,ap=209,op=210,lp=211,cp=212,up=213,hp=214,Oo=0,Fo=1,Bo=2,Ir=3,zo=4,ko=5,Ho=6,Go=7,dh=0,fp=1,dp=2,fi=0,pp=1,mp=2,_p=3,gp=4,vp=5,xp=6,Mp=7,ph=300,Nr=301,Or=302,Vo=303,Wo=304,Pa=306,Xo=1e3,Fi=1001,qo=1002,pn=1003,Sp=1004,Cs=1005,yn=1006,Xa=1007,Bi=1008,$n=1009,mh=1010,_h=1011,ds=1012,Gl=1013,Xi=1014,qn=1015,ys=1016,Vl=1017,Wl=1018,Fr=1020,gh=35902,vh=1021,xh=1022,bn=1023,Mh=1024,Sh=1025,Ar=1026,Br=1027,yh=1028,Xl=1029,Eh=1030,ql=1031,Yl=1033,ea=33776,na=33777,ia=33778,ra=33779,Yo=35840,$o=35841,jo=35842,Ko=35843,Zo=36196,Jo=37492,Qo=37496,tl=37808,el=37809,nl=37810,il=37811,rl=37812,sl=37813,al=37814,ol=37815,ll=37816,cl=37817,ul=37818,hl=37819,fl=37820,dl=37821,sa=36492,pl=36494,ml=36495,Th=36283,_l=36284,gl=36285,vl=36286,yp=3200,Ep=3201,Tp=0,bp=1,oi="",An="srgb",Si="srgb-linear",$l="display-p3",Da="display-p3-linear",ma="linear",le="srgb",_a="rec709",ga="p3",ir=7680,Bc=519,wp=512,Ap=513,Rp=514,bh=515,Cp=516,Pp=517,Dp=518,Lp=519,zc=35044,kc="300 es",Yn=2e3,va=2001;class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hc=1234567;const as=Math.PI/180,ps=180/Math.PI;function qr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function jl(i,t){return(i%t+t)%t}function Up(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Ip(i,t,e){return i!==t?(e-i)/(t-i):0}function os(i,t,e){return(1-e)*i+e*t}function Np(i,t,e,n){return os(i,t,1-Math.exp(-e*n))}function Op(i,t=1){return t-Math.abs(jl(i,t*2)-t)}function Fp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Bp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function zp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function kp(i,t){return i+Math.random()*(t-i)}function Hp(i){return i*(.5-Math.random())}function Gp(i){i!==void 0&&(Hc=i);let t=Hc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vp(i){return i*as}function Wp(i){return i*ps}function Xp(i){return(i&i-1)===0&&i!==0}function qp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $p(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),u=a((t+n)/2),h=s((t-n)/2),f=a((t-n)/2),p=s((n-t)/2),g=a((n-t)/2);switch(r){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function xr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const jp={DEG2RAD:as,RAD2DEG:ps,generateUUID:qr,clamp:Oe,euclideanModulo:jl,mapLinear:Up,inverseLerp:Ip,lerp:os,damp:Np,pingpong:Op,smoothstep:Fp,smootherstep:Bp,randInt:zp,randFloat:kp,randFloatSpread:Hp,seededRandom:Gp,degToRad:Vp,radToDeg:Wp,isPowerOfTwo:Xp,ceilPowerOfTwo:qp,floorPowerOfTwo:Yp,setQuaternionFromProperEuler:$p,normalize:Ge,denormalize:xr};class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,r,s,a,o,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],_=r[0],d=r[3],m=r[6],y=r[1],x=r[4],S=r[7],A=r[2],w=r[5],b=r[8];return s[0]=a*_+o*y+l*A,s[3]=a*d+o*x+l*w,s[6]=a*m+o*S+l*b,s[1]=c*_+u*y+h*A,s[4]=c*d+u*x+h*w,s[7]=c*m+u*S+h*b,s[2]=f*_+p*y+g*A,s[5]=f*d+p*x+g*w,s[8]=f*m+p*S+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*s,p=c*s-a*l,g=e*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(r*c-u*n)*_,t[2]=(o*n-r*a)*_,t[3]=f*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(qa.makeScale(t,e)),this}rotate(t){return this.premultiply(qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new Bt;function wh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kp(){const i=xa("canvas");return i.style.display="block",i}const Gc={};function aa(i){i in Gc||(Gc[i]=!0,console.warn(i))}function Zp(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Jp(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Qp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Vc=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wc=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$r={[Si]:{transfer:ma,primaries:_a,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[An]:{transfer:le,primaries:_a,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Da]:{transfer:ma,primaries:ga,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Wc),fromReference:i=>i.applyMatrix3(Vc)},[$l]:{transfer:le,primaries:ga,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Wc),fromReference:i=>i.applyMatrix3(Vc).convertLinearToSRGB()}},tm=new Set([Si,Da]),te={enabled:!0,_workingColorSpace:Si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!tm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=$r[t].toReference,r=$r[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return $r[i].primaries},getTransfer:function(i){return i===oi?ma:$r[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray($r[t].luminanceCoefficients)}};function Rr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ya(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let rr;class em{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{rr===void 0&&(rr=xa("canvas")),rr.width=t.width,rr.height=t.height;const n=rr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=rr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Rr(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Rr(e[n]/255)*255):e[n]=Rr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nm=0;class Ah{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=qr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push($a(r[a].image)):s.push($a(r[a]))}else s=$a(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function $a(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?em.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let im=0;class Ye extends Ji{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=Fi,r=Fi,s=yn,a=Bi,o=bn,l=$n,c=Ye.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=qr(),this.name="",this.source=new Ah(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ph)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xo:t.x=t.x-Math.floor(t.x);break;case Fi:t.x=t.x<0?0:1;break;case qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xo:t.y=t.y-Math.floor(t.y);break;case Fi:t.y=t.y<0?0:1;break;case qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=ph;Ye.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,r=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],d=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,S=(p+1)/2,A=(m+1)/2,w=(u+f)/4,b=(h+_)/4,C=(g+d)/4;return x>S&&x>A?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=w/n,s=b/n):S>A?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=w/r,s=C/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=b/s,r=C/s),this.set(n,r,s,e),this}let y=Math.sqrt((d-g)*(d-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rm extends Ji{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ye(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ah(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends rm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Rh extends Ye{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sm extends Ye{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let d=1-o;const m=l*f+c*p+u*g+h*_,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const A=Math.sqrt(x),w=Math.atan2(A,m*y);d=Math.sin(d*w)/A,o=Math.sin(o*w)/A}const S=o*y;if(l=l*d+f*S,c=c*d+p*S,u=u*d+g*S,h=h*d+_*S,d===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-o*p,t[e+2]=c*g+u*p+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),u=2*(o*e-s*r),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ja.copy(this).projectOnVector(t),this.sub(ja)}reflect(t){return this.sub(ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ja=new F,Xc=new Yi;class Es{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(s,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ps.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ps.copy(n.boundingBox)),Ps.applyMatrix4(t.matrixWorld),this.union(Ps)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jr),Ds.subVectors(this.max,jr),sr.subVectors(t.a,jr),ar.subVectors(t.b,jr),or.subVectors(t.c,jr),ti.subVectors(ar,sr),ei.subVectors(or,ar),Ti.subVectors(sr,or);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-Ti.z,Ti.y,ti.z,0,-ti.x,ei.z,0,-ei.x,Ti.z,0,-Ti.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-Ti.y,Ti.x,0];return!Ka(e,sr,ar,or,Ds)||(e=[1,0,0,0,1,0,0,0,1],!Ka(e,sr,ar,or,Ds))?!1:(Ls.crossVectors(ti,ei),e=[Ls.x,Ls.y,Ls.z],Ka(e,sr,ar,or,Ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fn=[new F,new F,new F,new F,new F,new F,new F,new F],xn=new F,Ps=new Es,sr=new F,ar=new F,or=new F,ti=new F,ei=new F,Ti=new F,jr=new F,Ds=new F,Ls=new F,bi=new F;function Ka(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){bi.fromArray(i,s);const o=r.x*Math.abs(bi.x)+r.y*Math.abs(bi.y)+r.z*Math.abs(bi.z),l=t.dot(bi),c=e.dot(bi),u=n.dot(bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const am=new Es,Kr=new F,Za=new F;class La{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):am.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Kr.subVectors(t,this.center);const e=Kr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Kr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Kr.copy(t.center).add(Za)),this.expandByPoint(Kr.copy(t.center).sub(Za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new F,Ja=new F,Us=new F,ni=new F,Qa=new F,Is=new F,to=new F;class Kl{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ja.copy(t).add(e).multiplyScalar(.5),Us.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(Ja);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Us),o=ni.dot(this.direction),l=-ni.dot(Us),c=ni.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ja).addScaledVector(Us,f),p}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);const n=Bn.dot(this.direction),r=Bn.dot(Bn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,r,s){Qa.subVectors(e,t),Is.subVectors(n,t),to.crossVectors(Qa,Is);let a=this.direction.dot(to),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,t);const l=o*this.direction.dot(Is.crossVectors(ni,Is));if(l<0)return null;const c=o*this.direction.dot(Qa.cross(ni));if(c<0||l+c>a)return null;const u=-o*ni.dot(to);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,n,r,s,a,o,l,c,u,h,f,p,g,_,d){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,u,h,f,p,g,_,d)}set(t,e,n,r,s,a,o,l,c,u,h,f,p,g,_,d){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=p,m[7]=g,m[11]=_,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/lr.setFromMatrixColumn(t,0).length(),s=1/lr.setFromMatrixColumn(t,1).length(),a=1/lr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,p=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f-_*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,p=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(om,t,lm)}lookAt(t,e,n){const r=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ii.crossVectors(n,nn),ii.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ii.crossVectors(n,nn)),ii.normalize(),Ns.crossVectors(nn,ii),r[0]=ii.x,r[4]=Ns.x,r[8]=nn.x,r[1]=ii.y,r[5]=Ns.y,r[9]=nn.y,r[2]=ii.z,r[6]=Ns.z,r[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],_=n[6],d=n[10],m=n[14],y=n[3],x=n[7],S=n[11],A=n[15],w=r[0],b=r[4],C=r[8],L=r[12],v=r[1],E=r[5],B=r[9],N=r[13],X=r[2],$=r[6],z=r[10],Y=r[14],V=r[3],lt=r[7],rt=r[11],mt=r[15];return s[0]=a*w+o*v+l*X+c*V,s[4]=a*b+o*E+l*$+c*lt,s[8]=a*C+o*B+l*z+c*rt,s[12]=a*L+o*N+l*Y+c*mt,s[1]=u*w+h*v+f*X+p*V,s[5]=u*b+h*E+f*$+p*lt,s[9]=u*C+h*B+f*z+p*rt,s[13]=u*L+h*N+f*Y+p*mt,s[2]=g*w+_*v+d*X+m*V,s[6]=g*b+_*E+d*$+m*lt,s[10]=g*C+_*B+d*z+m*rt,s[14]=g*L+_*N+d*Y+m*mt,s[3]=y*w+x*v+S*X+A*V,s[7]=y*b+x*E+S*$+A*lt,s[11]=y*C+x*B+S*z+A*rt,s[15]=y*L+x*N+S*Y+A*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],_=t[7],d=t[11],m=t[15];return g*(+s*l*h-r*c*h-s*o*f+n*c*f+r*o*p-n*l*p)+_*(+e*l*p-e*c*f+s*a*f-r*a*p+r*c*u-s*l*u)+d*(+e*c*h-e*o*p-s*a*h+n*a*p+s*o*u-n*c*u)+m*(-r*o*u-e*l*h+e*o*f+r*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],_=t[13],d=t[14],m=t[15],y=h*d*c-_*f*c+_*l*p-o*d*p-h*l*m+o*f*m,x=g*f*c-u*d*c-g*l*p+a*d*p+u*l*m-a*f*m,S=u*_*c-g*h*c+g*o*p-a*_*p-u*o*m+a*h*m,A=g*h*l-u*_*l-g*o*f+a*_*f+u*o*d-a*h*d,w=e*y+n*x+r*S+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=y*b,t[1]=(_*f*s-h*d*s-_*r*p+n*d*p+h*r*m-n*f*m)*b,t[2]=(o*d*s-_*l*s+_*r*c-n*d*c-o*r*m+n*l*m)*b,t[3]=(h*l*s-o*f*s-h*r*c+n*f*c+o*r*p-n*l*p)*b,t[4]=x*b,t[5]=(u*d*s-g*f*s+g*r*p-e*d*p-u*r*m+e*f*m)*b,t[6]=(g*l*s-a*d*s-g*r*c+e*d*c+a*r*m-e*l*m)*b,t[7]=(a*f*s-u*l*s+u*r*c-e*f*c-a*r*p+e*l*p)*b,t[8]=S*b,t[9]=(g*h*s-u*_*s-g*n*p+e*_*p+u*n*m-e*h*m)*b,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*m+e*o*m)*b,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*p-e*o*p)*b,t[12]=A*b,t[13]=(u*_*r-g*h*r+g*n*f-e*_*f-u*n*d+e*h*d)*b,t[14]=(g*o*r-a*_*r-g*n*l+e*_*l+a*n*d-e*o*d)*b,t[15]=(a*h*r-u*o*r+u*n*l-e*h*l-a*n*f+e*o*f)*b,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,f=s*c,p=s*u,g=s*h,_=a*u,d=a*h,m=o*h,y=l*c,x=l*u,S=l*h,A=n.x,w=n.y,b=n.z;return r[0]=(1-(_+m))*A,r[1]=(p+S)*A,r[2]=(g-x)*A,r[3]=0,r[4]=(p-S)*w,r[5]=(1-(f+m))*w,r[6]=(d+y)*w,r[7]=0,r[8]=(g+x)*b,r[9]=(d-y)*b,r[10]=(1-(f+_))*b,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=lr.set(r[0],r[1],r[2]).length();const a=lr.set(r[4],r[5],r[6]).length(),o=lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Mn.copy(this);const c=1/s,u=1/a,h=1/o;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=h,Mn.elements[9]*=h,Mn.elements[10]*=h,e.setFromRotationMatrix(Mn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Yn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),f=(n+r)/(n-r);let p,g;if(o===Yn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===va)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Yn){const l=this.elements,c=1/(e-t),u=1/(n-r),h=1/(a-s),f=(e+t)*c,p=(n+r)*u;let g,_;if(o===Yn)g=(a+s)*h,_=-2*h;else if(o===va)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const lr=new F,Mn=new ve,om=new F(0,0,0),lm=new F(1,1,1),ii=new F,Ns=new F,nn=new F,qc=new ve,Yc=new Yi;class jn{constructor(t=0,e=0,n=0,r=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yc.setFromEuler(this),this.setFromQuaternion(Yc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Ch{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cm=0;const $c=new F,cr=new Yi,zn=new ve,Os=new F,Zr=new F,um=new F,hm=new Yi,jc=new F(1,0,0),Kc=new F(0,1,0),Zc=new F(0,0,1),Jc={type:"added"},fm={type:"removed"},ur={type:"childadded",child:null},eo={type:"childremoved",child:null};class $e extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const t=new F,e=new jn,n=new Yi,r=new F(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ve},normalMatrix:{value:new Bt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cr.setFromAxisAngle(t,e),this.quaternion.multiply(cr),this}rotateOnWorldAxis(t,e){return cr.setFromAxisAngle(t,e),this.quaternion.premultiply(cr),this}rotateX(t){return this.rotateOnAxis(jc,t)}rotateY(t){return this.rotateOnAxis(Kc,t)}rotateZ(t){return this.rotateOnAxis(Zc,t)}translateOnAxis(t,e){return $c.copy(t).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jc,t)}translateY(t){return this.translateOnAxis(Kc,t)}translateZ(t){return this.translateOnAxis(Zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Os.copy(t):Os.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Zr,Os,this.up):zn.lookAt(Os,Zr,this.up),this.quaternion.setFromRotationMatrix(zn),r&&(zn.extractRotation(r.matrixWorld),cr.setFromRotationMatrix(zn),this.quaternion.premultiply(cr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jc),ur.child=t,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fm),eo.child=t,this.dispatchEvent(eo),eo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jc),ur.child=t,this.dispatchEvent(ur),ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,t,um),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,hm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}$e.DEFAULT_UP=new F(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new F,kn=new F,no=new F,Hn=new F,hr=new F,fr=new F,Qc=new F,io=new F,ro=new F,so=new F,ao=new ge,oo=new ge,lo=new ge;class En{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Sn.subVectors(t,e),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Sn.subVectors(r,e),kn.subVectors(n,e),no.subVectors(t,e);const a=Sn.dot(Sn),o=Sn.dot(kn),l=Sn.dot(no),c=kn.dot(kn),u=kn.dot(no),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hn.x),l.addScaledVector(a,Hn.y),l.addScaledVector(o,Hn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return ao.setScalar(0),oo.setScalar(0),lo.setScalar(0),ao.fromBufferAttribute(t,e),oo.fromBufferAttribute(t,n),lo.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ao,s.x),a.addScaledVector(oo,s.y),a.addScaledVector(lo,s.z),a}static isFrontFacing(t,e,n,r){return Sn.subVectors(n,e),kn.subVectors(t,e),Sn.cross(kn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),Sn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return En.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;hr.subVectors(r,n),fr.subVectors(s,n),io.subVectors(t,n);const l=hr.dot(io),c=fr.dot(io);if(l<=0&&c<=0)return e.copy(n);ro.subVectors(t,r);const u=hr.dot(ro),h=fr.dot(ro);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(hr,a);so.subVectors(t,s);const p=hr.dot(so),g=fr.dot(so);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(fr,o);const d=u*g-p*h;if(d<=0&&h-u>=0&&p-g>=0)return Qc.subVectors(s,r),o=(h-u)/(h-u+(p-g)),e.copy(r).addScaledVector(Qc,o);const m=1/(d+_+f);return a=_*m,o=f*m,e.copy(n).addScaledVector(hr,a).addScaledVector(fr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function co(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ee{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=te.workingColorSpace){if(t=jl(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=co(a,s,t+1/3),this.g=co(a,s,t),this.b=co(a,s,t-1/3)}return te.toWorkingColorSpace(this,r),this}setStyle(t,e=An){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=An){const n=Ph[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rr(t.r),this.g=Rr(t.g),this.b=Rr(t.b),this}copyLinearToSRGB(t){return this.r=Ya(t.r),this.g=Ya(t.g),this.b=Ya(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return te.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Oe(Ne.r*255,0,255))*65536+Math.round(Oe(Ne.g*255,0,255))*256+Math.round(Oe(Ne.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,r=Ne.g,s=Ne.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=An){te.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,r=Ne.b;return t!==An?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(Fs);const n=os(ri.h,Fs.h,e),r=os(ri.s,Fs.s,e),s=os(ri.l,Fs.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new ee;ee.NAMES=Ph;let dm=0;class Ts extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=qr(),this.name="",this.type="Material",this.blending=wr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Io,this.blendDst=No,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Io&&(n.blendSrc=this.blendSrc),this.blendDst!==No&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ln extends Ts{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new F,Bs=new Ht;class Un{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zc,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bs.fromBufferAttribute(this,e),Bs.applyMatrix3(t),this.setXY(e,Bs.x,Bs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),r=Ge(r,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zc&&(t.usage=this.usage),t}}class Dh extends Un{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Lh extends Un{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class wn extends Un{constructor(t,e,n){super(new Float32Array(t),e,n)}}let pm=0;const fn=new ve,uo=new $e,dr=new F,rn=new Es,Jr=new Es,be=new F;class Jn extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=qr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wh(t)?Lh:Dh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Bt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return uo.lookAt(t),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new La);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Jr.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(rn.min,Jr.min),rn.expandByPoint(be),be.addVectors(rn.max,Jr.max),rn.expandByPoint(be)):(rn.expandByPoint(Jr.min),rn.expandByPoint(Jr.max))}rn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)be.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(be));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)be.fromBufferAttribute(o,c),l&&(dr.fromBufferAttribute(t,c),be.add(dr)),r=Math.max(r,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new F,l[C]=new F;const c=new F,u=new F,h=new F,f=new Ht,p=new Ht,g=new Ht,_=new F,d=new F;function m(C,L,v){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,L),h.fromBufferAttribute(n,v),f.fromBufferAttribute(s,C),p.fromBufferAttribute(s,L),g.fromBufferAttribute(s,v),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(E),d.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(E),o[C].add(_),o[L].add(_),o[v].add(_),l[C].add(d),l[L].add(d),l[v].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,L=y.length;C<L;++C){const v=y[C],E=v.start,B=v.count;for(let N=E,X=E+B;N<X;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const x=new F,S=new F,A=new F,w=new F;function b(C){A.fromBufferAttribute(r,C),w.copy(A);const L=o[C];x.copy(L),x.sub(A.multiplyScalar(A.dot(L))).normalize(),S.crossVectors(w,L);const E=S.dot(l[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,E)}for(let C=0,L=y.length;C<L;++C){const v=y[C],E=v.start,B=v.count;for(let N=E,X=E+B;N<X;N+=3)b(t.getX(N+0)),b(t.getX(N+1)),b(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,c=new F,u=new F,h=new F;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),d=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,d),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,d),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,d=l.length;_<d;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[p++]}return new Un(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Jn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tu=new ve,wi=new Kl,zs=new La,eu=new F,ks=new F,Hs=new F,Gs=new F,ho=new F,Vs=new F,nu=new F,Ws=new F;class Re extends $e{constructor(t=new Jn,e=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Vs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(ho.fromBufferAttribute(h,t),a?Vs.addScaledVector(ho,u):Vs.addScaledVector(ho.sub(e),u))}e.add(Vs)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(s),wi.copy(t.ray).recast(t.near),!(zs.containsPoint(wi.origin)===!1&&(wi.intersectSphere(zs,eu)===null||wi.origin.distanceToSquared(eu)>(t.far-t.near)**2))&&(tu.copy(s).invert(),wi.copy(t.ray).applyMatrix4(tu),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const d=f[g],m=a[d.materialIndex],y=Math.max(d.start,p.start),x=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let S=y,A=x;S<A;S+=3){const w=o.getX(S),b=o.getX(S+1),C=o.getX(S+2);r=Xs(this,m,t,n,c,u,h,w,b,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let d=g,m=_;d<m;d+=3){const y=o.getX(d),x=o.getX(d+1),S=o.getX(d+2);r=Xs(this,a,t,n,c,u,h,y,x,S),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const d=f[g],m=a[d.materialIndex],y=Math.max(d.start,p.start),x=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let S=y,A=x;S<A;S+=3){const w=S,b=S+1,C=S+2;r=Xs(this,m,t,n,c,u,h,w,b,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let d=g,m=_;d<m;d+=3){const y=d,x=d+1,S=d+2;r=Xs(this,a,t,n,c,u,h,y,x,S),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}}}function mm(i,t,e,n,r,s,a,o){let l;if(t.side===qe?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===_i,o),l===null)return null;Ws.copy(o),Ws.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ws);return c<e.near||c>e.far?null:{distance:c,point:Ws.clone(),object:i}}function Xs(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,ks),i.getVertexPosition(l,Hs),i.getVertexPosition(c,Gs);const u=mm(i,t,e,n,ks,Hs,Gs,nu);if(u){const h=new F;En.getBarycoord(nu,ks,Hs,Gs,h),r&&(u.uv=En.getInterpolatedAttribute(r,o,l,c,h,new Ht)),s&&(u.uv1=En.getInterpolatedAttribute(s,o,l,c,h,new Ht)),a&&(u.normal=En.getInterpolatedAttribute(a,o,l,c,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new F,materialIndex:0};En.getNormal(ks,Hs,Gs,f.normal),u.face=f,u.barycoord=h}return u}class ln extends Jn{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new wn(c,3)),this.setAttribute("normal",new wn(u,3)),this.setAttribute("uv",new wn(h,2));function g(_,d,m,y,x,S,A,w,b,C,L){const v=S/b,E=A/C,B=S/2,N=A/2,X=w/2,$=b+1,z=C+1;let Y=0,V=0;const lt=new F;for(let rt=0;rt<z;rt++){const mt=rt*E-N;for(let St=0;St<$;St++){const Gt=St*v-B;lt[_]=Gt*y,lt[d]=mt*x,lt[m]=X,c.push(lt.x,lt.y,lt.z),lt[_]=0,lt[d]=0,lt[m]=w>0?1:-1,u.push(lt.x,lt.y,lt.z),h.push(St/b),h.push(1-rt/C),Y+=1}}for(let rt=0;rt<C;rt++)for(let mt=0;mt<b;mt++){const St=f+mt+$*rt,Gt=f+mt+$*(rt+1),q=f+(mt+1)+$*(rt+1),Q=f+(mt+1)+$*rt;l.push(St,Gt,Q),l.push(Gt,q,Q),V+=6}o.addGroup(p,V,L),p+=V,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ve(i){const t={};for(let e=0;e<i.length;e++){const n=zr(i[e]);for(const r in n)t[r]=n[r]}return t}function _m(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Uh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const gm={clone:zr,merge:Ve};var vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Ts{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vm,this.fragmentShader=xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zr(t.uniforms),this.uniformsGroups=_m(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ih extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new F,iu=new Ht,ru=new Ht;class we extends Ih{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,iu,ru),e.subVectors(ru,iu)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(as*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const pr=-90,mr=1;class Mm extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new we(pr,mr,t,e);r.layers=this.layers,this.add(r);const s=new we(pr,mr,t,e);s.layers=this.layers,this.add(s);const a=new we(pr,mr,t,e);a.layers=this.layers,this.add(a);const o=new we(pr,mr,t,e);o.layers=this.layers,this.add(o);const l=new we(pr,mr,t,e);l.layers=this.layers,this.add(l);const c=new we(pr,mr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===va)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Nh extends Ye{constructor(t,e,n,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Nr,super(t,e,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sm extends qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Nh(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ln(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:hi});s.uniforms.tEquirect.value=e;const a=new Re(r,s),o=e.minFilter;return e.minFilter===Bi&&(e.minFilter=yn),new Mm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const fo=new F,ym=new F,Em=new Bt;class ai{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=fo.subVectors(n,e).cross(ym.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Em.getNormalMatrix(t),r=this.coplanarPoint(fo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new La,qs=new F;class Oh{constructor(t=new ai,e=new ai,n=new ai,r=new ai,s=new ai,a=new ai){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],g=r[9],_=r[10],d=r[11],m=r[12],y=r[13],x=r[14],S=r[15];if(n[0].setComponents(l-s,f-c,d-p,S-m).normalize(),n[1].setComponents(l+s,f+c,d+p,S+m).normalize(),n[2].setComponents(l+a,f+u,d+g,S+y).normalize(),n[3].setComponents(l-a,f-u,d-g,S-y).normalize(),n[4].setComponents(l-o,f-h,d-_,S-x).normalize(),e===Yn)n[5].setComponents(l+o,f+h,d+_,S+x).normalize();else if(e===va)n[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(qs.x=r.normal.x>0?t.max.x:t.min.x,qs.y=r.normal.y>0?t.max.y:t.min.y,qs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fh(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Tm(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Ua extends Jn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=t/o,f=e/l,p=[],g=[],_=[],d=[];for(let m=0;m<u;m++){const y=m*f-a;for(let x=0;x<c;x++){const S=x*h-s;g.push(S,-y,0),_.push(0,0,1),d.push(x/o),d.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const x=y+c*m,S=y+c*(m+1),A=y+1+c*(m+1),w=y+1+c*m;p.push(x,S,w),p.push(S,A,w)}this.setIndex(p),this.setAttribute("position",new wn(g,3)),this.setAttribute("normal",new wn(_,3)),this.setAttribute("uv",new wn(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.width,t.height,t.widthSegments,t.heightSegments)}}var bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Um=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$m=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Km=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e_="gl_FragColor = linearToOutputTexel( gl_FragColor );",n_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,r_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,s_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,a_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,l_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,d_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,__=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,g_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,v_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,E_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,T_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,b_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,w_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,I_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,H_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,V_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,W_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ug=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,n0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:bm,alphahash_pars_fragment:wm,alphamap_fragment:Am,alphamap_pars_fragment:Rm,alphatest_fragment:Cm,alphatest_pars_fragment:Pm,aomap_fragment:Dm,aomap_pars_fragment:Lm,batching_pars_vertex:Um,batching_vertex:Im,begin_vertex:Nm,beginnormal_vertex:Om,bsdfs:Fm,iridescence_fragment:Bm,bumpmap_pars_fragment:zm,clipping_planes_fragment:km,clipping_planes_pars_fragment:Hm,clipping_planes_pars_vertex:Gm,clipping_planes_vertex:Vm,color_fragment:Wm,color_pars_fragment:Xm,color_pars_vertex:qm,color_vertex:Ym,common:$m,cube_uv_reflection_fragment:jm,defaultnormal_vertex:Km,displacementmap_pars_vertex:Zm,displacementmap_vertex:Jm,emissivemap_fragment:Qm,emissivemap_pars_fragment:t_,colorspace_fragment:e_,colorspace_pars_fragment:n_,envmap_fragment:i_,envmap_common_pars_fragment:r_,envmap_pars_fragment:s_,envmap_pars_vertex:a_,envmap_physical_pars_fragment:g_,envmap_vertex:o_,fog_vertex:l_,fog_pars_vertex:c_,fog_fragment:u_,fog_pars_fragment:h_,gradientmap_pars_fragment:f_,lightmap_pars_fragment:d_,lights_lambert_fragment:p_,lights_lambert_pars_fragment:m_,lights_pars_begin:__,lights_toon_fragment:v_,lights_toon_pars_fragment:x_,lights_phong_fragment:M_,lights_phong_pars_fragment:S_,lights_physical_fragment:y_,lights_physical_pars_fragment:E_,lights_fragment_begin:T_,lights_fragment_maps:b_,lights_fragment_end:w_,logdepthbuf_fragment:A_,logdepthbuf_pars_fragment:R_,logdepthbuf_pars_vertex:C_,logdepthbuf_vertex:P_,map_fragment:D_,map_pars_fragment:L_,map_particle_fragment:U_,map_particle_pars_fragment:I_,metalnessmap_fragment:N_,metalnessmap_pars_fragment:O_,morphinstance_vertex:F_,morphcolor_vertex:B_,morphnormal_vertex:z_,morphtarget_pars_vertex:k_,morphtarget_vertex:H_,normal_fragment_begin:G_,normal_fragment_maps:V_,normal_pars_fragment:W_,normal_pars_vertex:X_,normal_vertex:q_,normalmap_pars_fragment:Y_,clearcoat_normal_fragment_begin:$_,clearcoat_normal_fragment_maps:j_,clearcoat_pars_fragment:K_,iridescence_pars_fragment:Z_,opaque_fragment:J_,packing:Q_,premultiplied_alpha_fragment:tg,project_vertex:eg,dithering_fragment:ng,dithering_pars_fragment:ig,roughnessmap_fragment:rg,roughnessmap_pars_fragment:sg,shadowmap_pars_fragment:ag,shadowmap_pars_vertex:og,shadowmap_vertex:lg,shadowmask_pars_fragment:cg,skinbase_vertex:ug,skinning_pars_vertex:hg,skinning_vertex:fg,skinnormal_vertex:dg,specularmap_fragment:pg,specularmap_pars_fragment:mg,tonemapping_fragment:_g,tonemapping_pars_fragment:gg,transmission_fragment:vg,transmission_pars_fragment:xg,uv_pars_fragment:Mg,uv_pars_vertex:Sg,uv_vertex:yg,worldpos_vertex:Eg,background_vert:Tg,background_frag:bg,backgroundCube_vert:wg,backgroundCube_frag:Ag,cube_vert:Rg,cube_frag:Cg,depth_vert:Pg,depth_frag:Dg,distanceRGBA_vert:Lg,distanceRGBA_frag:Ug,equirect_vert:Ig,equirect_frag:Ng,linedashed_vert:Og,linedashed_frag:Fg,meshbasic_vert:Bg,meshbasic_frag:zg,meshlambert_vert:kg,meshlambert_frag:Hg,meshmatcap_vert:Gg,meshmatcap_frag:Vg,meshnormal_vert:Wg,meshnormal_frag:Xg,meshphong_vert:qg,meshphong_frag:Yg,meshphysical_vert:$g,meshphysical_frag:jg,meshtoon_vert:Kg,meshtoon_frag:Zg,points_vert:Jg,points_frag:Qg,shadow_vert:t0,shadow_frag:e0,sprite_vert:n0,sprite_frag:i0},at={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Cn={basic:{uniforms:Ve([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ve([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new ee(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ve([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ve([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ve([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new ee(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ve([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ve([at.points,at.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ve([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ve([at.common,at.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ve([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ve([at.sprite,at.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Ve([at.common,at.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Ve([at.lights,at.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Cn.physical={uniforms:Ve([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Ys={r:0,b:0,g:0},Ri=new jn,r0=new ve;function s0(i,t,e,n,r,s,a){const o=new ee(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const S=g(y);S===null?m(o,l):S&&S.isColor&&(m(S,1),x=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(y,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===Pa)?(u===void 0&&(u=new Re(new ln(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:zr(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ri.copy(x.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(r0.makeRotationFromEuler(Ri)),u.material.toneMapped=te.getTransfer(S.colorSpace)!==le,(h!==S||f!==S.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,p=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Re(new Ua(2,2),new gi({name:"BackgroundMaterial",uniforms:zr(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=te.getTransfer(S.colorSpace)!==le,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(Ys,Uh(i)),n.buffers.color.setClear(Ys.r,Ys.g,Ys.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:_,addToRenderList:d}}function a0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(v,E,B,N,X){let $=!1;const z=h(N,B,E);s!==z&&(s=z,c(s.object)),$=p(v,N,B,X),$&&g(v,N,B,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,S(v,E,B,N),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,E,B){const N=B.wireframe===!0;let X=n[v.id];X===void 0&&(X={},n[v.id]=X);let $=X[E.id];$===void 0&&($={},X[E.id]=$);let z=$[N];return z===void 0&&(z=f(l()),$[N]=z),z}function f(v){const E=[],B=[],N=[];for(let X=0;X<e;X++)E[X]=0,B[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:B,attributeDivisors:N,object:v,attributes:{},index:null}}function p(v,E,B,N){const X=s.attributes,$=E.attributes;let z=0;const Y=B.getAttributes();for(const V in Y)if(Y[V].location>=0){const rt=X[V];let mt=$[V];if(mt===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(mt=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(mt=v.instanceColor)),rt===void 0||rt.attribute!==mt||mt&&rt.data!==mt.data)return!0;z++}return s.attributesNum!==z||s.index!==N}function g(v,E,B,N){const X={},$=E.attributes;let z=0;const Y=B.getAttributes();for(const V in Y)if(Y[V].location>=0){let rt=$[V];rt===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(rt=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(rt=v.instanceColor));const mt={};mt.attribute=rt,rt&&rt.data&&(mt.data=rt.data),X[V]=mt,z++}s.attributes=X,s.attributesNum=z,s.index=N}function _(){const v=s.newAttributes;for(let E=0,B=v.length;E<B;E++)v[E]=0}function d(v){m(v,0)}function m(v,E){const B=s.newAttributes,N=s.enabledAttributes,X=s.attributeDivisors;B[v]=1,N[v]===0&&(i.enableVertexAttribArray(v),N[v]=1),X[v]!==E&&(i.vertexAttribDivisor(v,E),X[v]=E)}function y(){const v=s.newAttributes,E=s.enabledAttributes;for(let B=0,N=E.length;B<N;B++)E[B]!==v[B]&&(i.disableVertexAttribArray(B),E[B]=0)}function x(v,E,B,N,X,$,z){z===!0?i.vertexAttribIPointer(v,E,B,X,$):i.vertexAttribPointer(v,E,B,N,X,$)}function S(v,E,B,N){_();const X=N.attributes,$=B.getAttributes(),z=E.defaultAttributeValues;for(const Y in $){const V=$[Y];if(V.location>=0){let lt=X[Y];if(lt===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(lt=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(lt=v.instanceColor)),lt!==void 0){const rt=lt.normalized,mt=lt.itemSize,St=t.get(lt);if(St===void 0)continue;const Gt=St.buffer,q=St.type,Q=St.bytesPerElement,vt=q===i.INT||q===i.UNSIGNED_INT||lt.gpuType===Gl;if(lt.isInterleavedBufferAttribute){const ht=lt.data,It=ht.stride,wt=lt.offset;if(ht.isInstancedInterleavedBuffer){for(let Wt=0;Wt<V.locationSize;Wt++)m(V.location+Wt,ht.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Wt=0;Wt<V.locationSize;Wt++)d(V.location+Wt);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let Wt=0;Wt<V.locationSize;Wt++)x(V.location+Wt,mt/V.locationSize,q,rt,It*Q,(wt+mt/V.locationSize*Wt)*Q,vt)}else{if(lt.isInstancedBufferAttribute){for(let ht=0;ht<V.locationSize;ht++)m(V.location+ht,lt.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ht=0;ht<V.locationSize;ht++)d(V.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let ht=0;ht<V.locationSize;ht++)x(V.location+ht,mt/V.locationSize,q,rt,mt*Q,mt/V.locationSize*ht*Q,vt)}}else if(z!==void 0){const rt=z[Y];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(V.location,rt);break;case 3:i.vertexAttrib3fv(V.location,rt);break;case 4:i.vertexAttrib4fv(V.location,rt);break;default:i.vertexAttrib1fv(V.location,rt)}}}}y()}function A(){C();for(const v in n){const E=n[v];for(const B in E){const N=E[B];for(const X in N)u(N[X].object),delete N[X];delete E[B]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const E=n[v.id];for(const B in E){const N=E[B];for(const X in N)u(N[X].object),delete N[X];delete E[B]}delete n[v.id]}function b(v){for(const E in n){const B=n[E];if(B[v.id]===void 0)continue;const N=B[v.id];for(const X in N)u(N[X].object),delete N[X];delete B[v.id]}}function C(){L(),a=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:d,disableUnusedAttributes:y}}function o0(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<f.length;_++)e.update(g,n,f[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function l0(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==bn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const C=b===ys&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==$n&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==qn&&!C)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const b=t.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:A,maxSamples:w}}function c0(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new ai,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,d=h.clipShadows,m=i.get(h);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const y=s?0:n,x=y*4;let S=m.clippingState||null;l.value=S,S=u(g,f,x,p);for(let A=0;A!==x;++A)S[A]=e[A];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let d=null;if(_!==0){if(d=l.value,g!==!0||d===null){const m=p+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(d===null||d.length<m)&&(d=new Float32Array(m));for(let x=0,S=p;x!==_;++x,S+=4)a.copy(h[x]).applyMatrix4(y,o),a.normal.toArray(d,S),d[S+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function u0(i){let t=new WeakMap;function e(a,o){return o===Vo?a.mapping=Nr:o===Wo&&(a.mapping=Or),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Vo||o===Wo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Sm(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class h0 extends Ih{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Sr=4,su=[.125,.215,.35,.446,.526,.582],Ni=20,po=new h0,au=new ee;let mo=null,_o=0,go=0,vo=!1;const Li=(1+Math.sqrt(5))/2,_r=1/Li,ou=[new F(-Li,_r,0),new F(Li,_r,0),new F(-_r,0,Li),new F(_r,0,Li),new F(0,Li,-_r),new F(0,Li,_r),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class lu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){mo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mo,_o,go),this._renderer.xr.enabled=vo,t.scissorTest=!1,$s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Nr||t.mapping===Or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:ys,format:bn,colorSpace:Si,depthBuffer:!1},r=cu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cu(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f0(s)),this._blurMaterial=d0(s,t,e)}return r}_compileMaterial(t){const e=new Re(this._lodPlanes[0],t);this._renderer.compile(e,po)}_sceneToCubeUV(t,e,n,r){const o=new we(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(au),u.toneMapping=fi,u.autoClear=!1;const p=new Ln({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),g=new Re(new ln,p);let _=!1;const d=t.background;d?d.isColor&&(p.color.copy(d),t.background=null,_=!0):(p.color.copy(au),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;$s(r,y*x,m>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Nr||t.mapping===Or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Re(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;$s(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,po)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ou[(r-s-1)%ou.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Re(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ni-1),_=s/g,d=isFinite(s)?1+Math.floor(u*_):Ni;d>Ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ni}`);const m=[];let y=0;for(let b=0;b<Ni;++b){const C=b/_,L=Math.exp(-C*C/2);m.push(L),b===0?y+=L:b<d&&(y+=2*L)}for(let b=0;b<m.length;b++)m[b]=m[b]/y;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const S=this._sizeLods[r],A=3*S*(r>x-Sr?r-x+Sr:0),w=4*(this._cubeSize-S);$s(e,A,w,3*S,2*S),l.setRenderTarget(e),l.render(h,po)}}function f0(i){const t=[],e=[],n=[];let r=i;const s=i-Sr+1+su.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Sr?l=su[a-i+Sr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,d=2,m=1,y=new Float32Array(_*g*p),x=new Float32Array(d*g*p),S=new Float32Array(m*g*p);for(let w=0;w<p;w++){const b=w%3*2/3-1,C=w>2?0:-1,L=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];y.set(L,_*g*w),x.set(f,d*g*w);const v=[w,w,w,w,w,w];S.set(v,m*g*w)}const A=new Jn;A.setAttribute("position",new Un(y,_)),A.setAttribute("uv",new Un(x,d)),A.setAttribute("faceIndex",new Un(S,m)),t.push(A),r>Sr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function cu(i,t,e){const n=new qi(i,t,e);return n.texture.mapping=Pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $s(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function d0(i,t,e){const n=new Float32Array(Ni),r=new F(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function uu(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function hu(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Zl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function p0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Vo||l===Wo,u=l===Nr||l===Or;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new lu(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new lu(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function m0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&aa("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function _0(i,t,e,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let d=0,m=_.length;d<m;d++)t.remove(_[d])}f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let d=0,m=_.length;d<m;d++)t.update(_[d],i.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let x=0,S=y.length;x<S;x+=3){const A=y[x+0],w=y[x+1],b=y[x+2];f.push(A,w,w,b,b,A)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,S=y.length/3-1;x<S;x+=3){const A=x+0,w=x+1,b=x+2;f.push(A,w,w,b,b,A)}}else return;const d=new(wh(f)?Lh:Dh)(f,1);d.version=_;const m=s.get(h);m&&t.remove(m),s.set(h,d)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function g0(i,t,e){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,f*a,g),e.update(p,n,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let d=0;for(let m=0;m<g;m++)d+=p[m];e.update(d,n,1)}function h(f,p,g,_){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<f.length;m++)c(f[m]/a,p[m],_[m]);else{d.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,_,0,g);let m=0;for(let y=0;y<g;y++)m+=p[y];for(let y=0;y<_.length;y++)e.update(m,n,_[y])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function v0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function x0(i,t,e){const n=new WeakMap,r=new ge;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let v=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var p=v;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),d===!0&&(S=3);let A=o.attributes.position.count*S,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const b=new Float32Array(A*w*4*h),C=new Rh(b,A,w,h);C.type=qn,C.needsUpdate=!0;const L=S*4;for(let E=0;E<h;E++){const B=m[E],N=y[E],X=x[E],$=A*w*4*E;for(let z=0;z<B.count;z++){const Y=z*L;g===!0&&(r.fromBufferAttribute(B,z),b[$+Y+0]=r.x,b[$+Y+1]=r.y,b[$+Y+2]=r.z,b[$+Y+3]=0),_===!0&&(r.fromBufferAttribute(N,z),b[$+Y+4]=r.x,b[$+Y+5]=r.y,b[$+Y+6]=r.z,b[$+Y+7]=0),d===!0&&(r.fromBufferAttribute(X,z),b[$+Y+8]=r.x,b[$+Y+9]=r.y,b[$+Y+10]=r.z,b[$+Y+11]=X.itemSize===4?r.w:1)}}f={count:h,texture:C,size:new Ht(A,w)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let d=0;d<c.length;d++)g+=c[d];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function M0(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Bh extends Ye{constructor(t,e,n,r,s,a,o,l,c,u=Ar){if(u!==Ar&&u!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ar&&(n=Xi),n===void 0&&u===Br&&(n=Fr),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const zh=new Ye,fu=new Bh(1,1),kh=new Rh,Hh=new sm,Gh=new Nh,du=[],pu=[],mu=new Float32Array(16),_u=new Float32Array(9),gu=new Float32Array(4);function Yr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=du[r];if(s===void 0&&(s=new Float32Array(r),du[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ia(i,t){let e=pu[t];e===void 0&&(e=new Int32Array(t),pu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function S0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function E0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function T0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function b0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;gu.set(n),i.uniformMatrix2fv(this.addr,!1,gu),Te(e,n)}}function w0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;_u.set(n),i.uniformMatrix3fv(this.addr,!1,_u),Te(e,n)}}function A0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;mu.set(n),i.uniformMatrix4fv(this.addr,!1,mu),Te(e,n)}}function R0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function C0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function D0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function L0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function U0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function I0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function N0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function O0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(fu.compareFunction=bh,s=fu):s=zh,e.setTexture2D(t||s,r)}function F0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Hh,r)}function B0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Gh,r)}function z0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||kh,r)}function k0(i){switch(i){case 5126:return S0;case 35664:return y0;case 35665:return E0;case 35666:return T0;case 35674:return b0;case 35675:return w0;case 35676:return A0;case 5124:case 35670:return R0;case 35667:case 35671:return C0;case 35668:case 35672:return P0;case 35669:case 35673:return D0;case 5125:return L0;case 36294:return U0;case 36295:return I0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return z0}}function H0(i,t){i.uniform1fv(this.addr,t)}function G0(i,t){const e=Yr(t,this.size,2);i.uniform2fv(this.addr,e)}function V0(i,t){const e=Yr(t,this.size,3);i.uniform3fv(this.addr,e)}function W0(i,t){const e=Yr(t,this.size,4);i.uniform4fv(this.addr,e)}function X0(i,t){const e=Yr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function q0(i,t){const e=Yr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Y0(i,t){const e=Yr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $0(i,t){i.uniform1iv(this.addr,t)}function j0(i,t){i.uniform2iv(this.addr,t)}function K0(i,t){i.uniform3iv(this.addr,t)}function Z0(i,t){i.uniform4iv(this.addr,t)}function J0(i,t){i.uniform1uiv(this.addr,t)}function Q0(i,t){i.uniform2uiv(this.addr,t)}function tv(i,t){i.uniform3uiv(this.addr,t)}function ev(i,t){i.uniform4uiv(this.addr,t)}function nv(i,t,e){const n=this.cache,r=t.length,s=Ia(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||zh,s[a])}function iv(i,t,e){const n=this.cache,r=t.length,s=Ia(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Hh,s[a])}function rv(i,t,e){const n=this.cache,r=t.length,s=Ia(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Gh,s[a])}function sv(i,t,e){const n=this.cache,r=t.length,s=Ia(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||kh,s[a])}function av(i){switch(i){case 5126:return H0;case 35664:return G0;case 35665:return V0;case 35666:return W0;case 35674:return X0;case 35675:return q0;case 35676:return Y0;case 5124:case 35670:return $0;case 35667:case 35671:return j0;case 35668:case 35672:return K0;case 35669:case 35673:return Z0;case 5125:return J0;case 36294:return Q0;case 36295:return tv;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return sv}}class ov{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=k0(e.type)}}class lv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=av(e.type)}}class cv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const xo=/(\w+)(\])?(\[|\.)?/g;function vu(i,t){i.seq.push(t),i.map[t.id]=t}function uv(i,t,e){const n=i.name,r=n.length;for(xo.lastIndex=0;;){const s=xo.exec(n),a=xo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){vu(e,c===void 0?new ov(o,i,t):new lv(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new cv(o),vu(e,h)),e=h}}}class oa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);uv(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function xu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const hv=37297;let fv=0;function dv(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function pv(i){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(i);let n;switch(t===e?n="":t===ga&&e===_a?n="LinearDisplayP3ToLinearSRGB":t===_a&&e===ga&&(n="LinearSRGBToLinearDisplayP3"),i){case Si:case Da:return[n,"LinearTransferOETF"];case An:case $l:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Mu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+dv(i.getShaderSource(t),a)}else return r}function mv(i,t){const e=pv(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function _v(i,t){let e;switch(t){case pp:e="Linear";break;case mp:e="Reinhard";break;case _p:e="Cineon";break;case gp:e="ACESFilmic";break;case xp:e="AgX";break;case Mp:e="Neutral";break;case vp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const js=new F;function gv(){te.getLuminanceCoefficients(js);const i=js.x.toFixed(4),t=js.y.toFixed(4),e=js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function xv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function es(i){return i!==""}function Su(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sv=/^[ \t]*#include +<([\w\d./]+)>/gm;function xl(i){return i.replace(Sv,Ev)}const yv=new Map;function Ev(i,t){let e=Ft[t];if(e===void 0){const n=yv.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return xl(e)}const Tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eu(i){return i.replace(Tv,bv)}function bv(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function Av(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Nr:case Or:t="ENVMAP_TYPE_CUBE";break;case Pa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Or:t="ENVMAP_MODE_REFRACTION";break}return t}function Cv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dh:t="ENVMAP_BLENDING_MULTIPLY";break;case fp:t="ENVMAP_BLENDING_MIX";break;case dp:t="ENVMAP_BLENDING_ADD";break}return t}function Pv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Dv(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=wv(e),c=Av(e),u=Rv(e),h=Cv(e),f=Pv(e),p=vv(e),g=xv(s),_=r.createProgram();let d,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(es).join(`
`),d.length>0&&(d+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(es).join(`
`),m.length>0&&(m+=`
`)):(d=[Tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),m=[Tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Ft.tonemapping_pars_fragment:"",e.toneMapping!==fi?_v("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,mv("linearToOutputTexel",e.outputColorSpace),gv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(es).join(`
`)),a=xl(a),a=Su(a,e),a=yu(a,e),o=xl(o),o=Su(o,e),o=yu(o,e),a=Eu(a),o=Eu(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",e.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+d+a,S=y+m+o,A=xu(r,r.VERTEX_SHADER,x),w=xu(r,r.FRAGMENT_SHADER,S);r.attachShader(_,A),r.attachShader(_,w),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(E){if(i.debug.checkShaderErrors){const B=r.getProgramInfoLog(_).trim(),N=r.getShaderInfoLog(A).trim(),X=r.getShaderInfoLog(w).trim();let $=!0,z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,A,w);else{const Y=Mu(r,A,"vertex"),V=Mu(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+B+`
`+Y+`
`+V)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(N===""||X==="")&&(z=!1);z&&(E.diagnostics={runnable:$,programLog:B,vertexShader:{log:N,prefix:d},fragmentShader:{log:X,prefix:m}})}r.deleteShader(A),r.deleteShader(w),C=new oa(r,_),L=Mv(r,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let L;this.getAttributes=function(){return L===void 0&&b(this),L};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,hv)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let Lv=0;class Uv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Iv(t),e.set(t,n)),n}}class Iv{constructor(t){this.id=Lv++,this.code=t,this.usedTimes=0}}function Nv(i,t,e,n,r,s,a){const o=new Ch,l=new Uv,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,E,B,N,X){const $=N.fog,z=X.geometry,Y=v.isMeshStandardMaterial?N.environment:null,V=(v.isMeshStandardMaterial?e:t).get(v.envMap||Y),lt=V&&V.mapping===Pa?V.image.height:null,rt=_[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const mt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,St=mt!==void 0?mt.length:0;let Gt=0;z.morphAttributes.position!==void 0&&(Gt=1),z.morphAttributes.normal!==void 0&&(Gt=2),z.morphAttributes.color!==void 0&&(Gt=3);let q,Q,vt,ht;if(rt){const Ue=Cn[rt];q=Ue.vertexShader,Q=Ue.fragmentShader}else q=v.vertexShader,Q=v.fragmentShader,l.update(v),vt=l.getVertexShaderID(v),ht=l.getFragmentShaderID(v);const It=i.getRenderTarget(),wt=X.isInstancedMesh===!0,Wt=X.isBatchedMesh===!0,Kt=!!v.map,Xt=!!v.matcap,P=!!V,Le=!!v.aoMap,zt=!!v.lightMap,qt=!!v.bumpMap,bt=!!v.normalMap,Zt=!!v.displacementMap,At=!!v.emissiveMap,R=!!v.metalnessMap,M=!!v.roughnessMap,O=v.anisotropy>0,K=v.clearcoat>0,tt=v.dispersion>0,j=v.iridescence>0,xt=v.sheen>0,st=v.transmission>0,ft=O&&!!v.anisotropyMap,Yt=K&&!!v.clearcoatMap,nt=K&&!!v.clearcoatNormalMap,gt=K&&!!v.clearcoatRoughnessMap,Ct=j&&!!v.iridescenceMap,Pt=j&&!!v.iridescenceThicknessMap,_t=xt&&!!v.sheenColorMap,Vt=xt&&!!v.sheenRoughnessMap,Dt=!!v.specularMap,ne=!!v.specularColorMap,D=!!v.specularIntensityMap,ct=st&&!!v.transmissionMap,W=st&&!!v.thicknessMap,Z=!!v.gradientMap,ot=!!v.alphaMap,ut=v.alphaTest>0,kt=!!v.alphaHash,ue=!!v.extensions;let Se=fi;v.toneMapped&&(It===null||It.isXRRenderTarget===!0)&&(Se=i.toneMapping);const $t={shaderID:rt,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:Q,defines:v.defines,customVertexShaderID:vt,customFragmentShaderID:ht,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Wt,batchingColor:Wt&&X._colorsTexture!==null,instancing:wt,instancingColor:wt&&X.instanceColor!==null,instancingMorph:wt&&X.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:It===null?i.outputColorSpace:It.isXRRenderTarget===!0?It.texture.colorSpace:Si,alphaToCoverage:!!v.alphaToCoverage,map:Kt,matcap:Xt,envMap:P,envMapMode:P&&V.mapping,envMapCubeUVHeight:lt,aoMap:Le,lightMap:zt,bumpMap:qt,normalMap:bt,displacementMap:p&&Zt,emissiveMap:At,normalMapObjectSpace:bt&&v.normalMapType===bp,normalMapTangentSpace:bt&&v.normalMapType===Tp,metalnessMap:R,roughnessMap:M,anisotropy:O,anisotropyMap:ft,clearcoat:K,clearcoatMap:Yt,clearcoatNormalMap:nt,clearcoatRoughnessMap:gt,dispersion:tt,iridescence:j,iridescenceMap:Ct,iridescenceThicknessMap:Pt,sheen:xt,sheenColorMap:_t,sheenRoughnessMap:Vt,specularMap:Dt,specularColorMap:ne,specularIntensityMap:D,transmission:st,transmissionMap:ct,thicknessMap:W,gradientMap:Z,opaque:v.transparent===!1&&v.blending===wr&&v.alphaToCoverage===!1,alphaMap:ot,alphaTest:ut,alphaHash:kt,combine:v.combine,mapUv:Kt&&d(v.map.channel),aoMapUv:Le&&d(v.aoMap.channel),lightMapUv:zt&&d(v.lightMap.channel),bumpMapUv:qt&&d(v.bumpMap.channel),normalMapUv:bt&&d(v.normalMap.channel),displacementMapUv:Zt&&d(v.displacementMap.channel),emissiveMapUv:At&&d(v.emissiveMap.channel),metalnessMapUv:R&&d(v.metalnessMap.channel),roughnessMapUv:M&&d(v.roughnessMap.channel),anisotropyMapUv:ft&&d(v.anisotropyMap.channel),clearcoatMapUv:Yt&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:nt&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&d(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&d(v.sheenRoughnessMap.channel),specularMapUv:Dt&&d(v.specularMap.channel),specularColorMapUv:ne&&d(v.specularColorMap.channel),specularIntensityMapUv:D&&d(v.specularIntensityMap.channel),transmissionMapUv:ct&&d(v.transmissionMap.channel),thicknessMapUv:W&&d(v.thicknessMap.channel),alphaMapUv:ot&&d(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(bt||O),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!z.attributes.uv&&(Kt||ot),fog:!!$,useFog:v.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:X.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Gt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,decodeVideoTexture:Kt&&v.map.isVideoTexture===!0&&te.getTransfer(v.map.colorSpace)===le,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Xn,flipSided:v.side===qe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ue&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&v.extensions.multiDraw===!0||Wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function y(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const B in v.defines)E.push(B),E.push(v.defines[B]);return v.isRawShaderMaterial===!1&&(x(E,v),S(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function x(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function S(v,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),v.push(o.mask)}function A(v){const E=_[v.type];let B;if(E){const N=Cn[E];B=gm.clone(N.uniforms)}else B=v.uniforms;return B}function w(v,E){let B;for(let N=0,X=u.length;N<X;N++){const $=u[N];if($.cacheKey===E){B=$,++B.usedTimes;break}}return B===void 0&&(B=new Dv(i,E,v,s),u.push(B)),B}function b(v){if(--v.usedTimes===0){const E=u.indexOf(v);u[E]=u[u.length-1],u.pop(),v.destroy()}}function C(v){l.remove(v)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:A,acquireProgram:w,releaseProgram:b,releaseShaderCache:C,programs:u,dispose:L}}function Ov(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Fv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function bu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wu(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(h,f,p,g,_,d){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:d},i[t]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=d),t++,m}function o(h,f,p,g,_,d){const m=a(h,f,p,g,_,d);p.transmission>0?n.push(m):p.transparent===!0?r.push(m):e.push(m)}function l(h,f,p,g,_,d){const m=a(h,f,p,g,_,d);p.transmission>0?n.unshift(m):p.transparent===!0?r.unshift(m):e.unshift(m)}function c(h,f){e.length>1&&e.sort(h||Fv),n.length>1&&n.sort(f||bu),r.length>1&&r.sort(f||bu)}function u(){for(let h=t,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Bv(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new wu,i.set(n,[a])):r>=s.length?(a=new wu,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function zv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new ee};break;case"SpotLight":e={position:new F,direction:new F,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function kv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Hv=0;function Gv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vv(i){const t=new zv,e=kv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const r=new F,s=new ve,a=new ve;function o(c){let u=0,h=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let p=0,g=0,_=0,d=0,m=0,y=0,x=0,S=0,A=0,w=0,b=0;c.sort(Gv);for(let L=0,v=c.length;L<v;L++){const E=c[L],B=E.color,N=E.intensity,X=E.distance,$=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=B.r*N,h+=B.g*N,f+=B.b*N;else if(E.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(E.sh.coefficients[z],N);b++}else if(E.isDirectionalLight){const z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Y=E.shadow,V=e.get(E);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=E.shadow.matrix,y++}n.directional[p]=z,p++}else if(E.isSpotLight){const z=t.get(E);z.position.setFromMatrixPosition(E.matrixWorld),z.color.copy(B).multiplyScalar(N),z.distance=X,z.coneCos=Math.cos(E.angle),z.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),z.decay=E.decay,n.spot[_]=z;const Y=E.shadow;if(E.map&&(n.spotLightMap[A]=E.map,A++,Y.updateMatrices(E),E.castShadow&&w++),n.spotLightMatrix[_]=Y.matrix,E.castShadow){const V=e.get(E);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=$,S++}_++}else if(E.isRectAreaLight){const z=t.get(E);z.color.copy(B).multiplyScalar(N),z.halfWidth.set(E.width*.5,0,0),z.halfHeight.set(0,E.height*.5,0),n.rectArea[d]=z,d++}else if(E.isPointLight){const z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),z.distance=E.distance,z.decay=E.decay,E.castShadow){const Y=E.shadow,V=e.get(E);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=E.shadow.matrix,x++}n.point[g]=z,g++}else if(E.isHemisphereLight){const z=t.get(E);z.skyColor.copy(E.color).multiplyScalar(N),z.groundColor.copy(E.groundColor).multiplyScalar(N),n.hemi[m]=z,m++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==d||C.hemiLength!==m||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==S||C.numSpotMaps!==A||C.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=d,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=S+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=d,C.hemiLength=m,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=S,C.numSpotMaps=A,C.numLightProbes=b,n.version=Hv++)}function l(c,u){let h=0,f=0,p=0,g=0,_=0;const d=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const x=c[m];if(x.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),h++}else if(x.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),p++}else if(x.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(d),a.identity(),s.copy(x.matrixWorld),s.premultiply(d),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(d),f++}else if(x.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(d),_++}}}return{setup:o,setupView:l,state:n}}function Au(i){const t=new Vv(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Wv(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Au(i),t.set(r,[o])):s>=a.length?(o=new Au(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Xv extends Ts{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qv extends Ts{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$v=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jv(i,t,e){let n=new Oh;const r=new Ht,s=new Ht,a=new ge,o=new Xv({depthPacking:Ep}),l=new qv,c={},u=e.maxTextureSize,h={[_i]:qe,[qe]:_i,[Xn]:Xn},f=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:Yv,fragmentShader:$v}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Jn;g.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Re(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fh;let m=this.type;this.render=function(w,b,C){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;const L=i.getRenderTarget(),v=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),B=i.state;B.setBlending(hi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const N=m!==Gn&&this.type===Gn,X=m===Gn&&this.type!==Gn;for(let $=0,z=w.length;$<z;$++){const Y=w[$],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const lt=V.getFrameExtents();if(r.multiply(lt),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/lt.x),r.x=s.x*lt.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/lt.y),r.y=s.y*lt.y,V.mapSize.y=s.y)),V.map===null||N===!0||X===!0){const mt=this.type!==Gn?{minFilter:pn,magFilter:pn}:{};V.map!==null&&V.map.dispose(),V.map=new qi(r.x,r.y,mt),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const rt=V.getViewportCount();for(let mt=0;mt<rt;mt++){const St=V.getViewport(mt);a.set(s.x*St.x,s.y*St.y,s.x*St.z,s.y*St.w),B.viewport(a),V.updateMatrices(Y,mt),n=V.getFrustum(),S(b,C,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Gn&&y(V,C),V.needsUpdate=!1}m=this.type,d.needsUpdate=!1,i.setRenderTarget(L,v,E)};function y(w,b){const C=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new qi(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(b,null,C,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(b,null,C,p,_,null)}function x(w,b,C,L){let v=null;const E=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(E!==void 0)v=E;else if(v=C.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const B=v.uuid,N=b.uuid;let X=c[B];X===void 0&&(X={},c[B]=X);let $=X[N];$===void 0&&($=v.clone(),X[N]=$,b.addEventListener("dispose",A)),v=$}if(v.visible=b.visible,v.wireframe=b.wireframe,L===Gn?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:h[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const B=i.properties.get(v);B.light=C}return v}function S(w,b,C,L,v){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Gn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const N=t.update(w),X=w.material;if(Array.isArray(X)){const $=N.groups;for(let z=0,Y=$.length;z<Y;z++){const V=$[z],lt=X[V.materialIndex];if(lt&&lt.visible){const rt=x(w,lt,L,v);w.onBeforeShadow(i,w,b,C,N,rt,V),i.renderBufferDirect(C,null,N,rt,w,V),w.onAfterShadow(i,w,b,C,N,rt,V)}}}else if(X.visible){const $=x(w,X,L,v);w.onBeforeShadow(i,w,b,C,N,$,null),i.renderBufferDirect(C,null,N,$,w,null),w.onAfterShadow(i,w,b,C,N,$,null)}}const B=w.children;for(let N=0,X=B.length;N<X;N++)S(B[N],b,C,L,v)}function A(w){w.target.removeEventListener("dispose",A);for(const C in c){const L=c[C],v=w.target.uuid;v in L&&(L[v].dispose(),delete L[v])}}}const Kv={[Oo]:Fo,[Bo]:Ho,[zo]:Go,[Ir]:ko,[Fo]:Oo,[Ho]:Bo,[Go]:zo,[ko]:Ir};function Zv(i){function t(){let D=!1;const ct=new ge;let W=null;const Z=new ge(0,0,0,0);return{setMask:function(ot){W!==ot&&!D&&(i.colorMask(ot,ot,ot,ot),W=ot)},setLocked:function(ot){D=ot},setClear:function(ot,ut,kt,ue,Se){Se===!0&&(ot*=ue,ut*=ue,kt*=ue),ct.set(ot,ut,kt,ue),Z.equals(ct)===!1&&(i.clearColor(ot,ut,kt,ue),Z.copy(ct))},reset:function(){D=!1,W=null,Z.set(-1,0,0,0)}}}function e(){let D=!1,ct=!1,W=null,Z=null,ot=null;return{setReversed:function(ut){ct=ut},setTest:function(ut){ut?vt(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(ut){W!==ut&&!D&&(i.depthMask(ut),W=ut)},setFunc:function(ut){if(ct&&(ut=Kv[ut]),Z!==ut){switch(ut){case Oo:i.depthFunc(i.NEVER);break;case Fo:i.depthFunc(i.ALWAYS);break;case Bo:i.depthFunc(i.LESS);break;case Ir:i.depthFunc(i.LEQUAL);break;case zo:i.depthFunc(i.EQUAL);break;case ko:i.depthFunc(i.GEQUAL);break;case Ho:i.depthFunc(i.GREATER);break;case Go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ut}},setLocked:function(ut){D=ut},setClear:function(ut){ot!==ut&&(i.clearDepth(ut),ot=ut)},reset:function(){D=!1,W=null,Z=null,ot=null}}}function n(){let D=!1,ct=null,W=null,Z=null,ot=null,ut=null,kt=null,ue=null,Se=null;return{setTest:function($t){D||($t?vt(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function($t){ct!==$t&&!D&&(i.stencilMask($t),ct=$t)},setFunc:function($t,Ue,On){(W!==$t||Z!==Ue||ot!==On)&&(i.stencilFunc($t,Ue,On),W=$t,Z=Ue,ot=On)},setOp:function($t,Ue,On){(ut!==$t||kt!==Ue||ue!==On)&&(i.stencilOp($t,Ue,On),ut=$t,kt=Ue,ue=On)},setLocked:function($t){D=$t},setClear:function($t){Se!==$t&&(i.clearStencil($t),Se=$t)},reset:function(){D=!1,ct=null,W=null,Z=null,ot=null,ut=null,kt=null,ue=null,Se=null}}}const r=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],p=null,g=!1,_=null,d=null,m=null,y=null,x=null,S=null,A=null,w=new ee(0,0,0),b=0,C=!1,L=null,v=null,E=null,B=null,N=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,z=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=z>=1):Y.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=z>=2);let V=null,lt={};const rt=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),St=new ge().fromArray(rt),Gt=new ge().fromArray(mt);function q(D,ct,W,Z){const ot=new Uint8Array(4),ut=i.createTexture();i.bindTexture(D,ut),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<W;kt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(ct+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return ut}const Q={};Q[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),vt(i.DEPTH_TEST),s.setFunc(Ir),zt(!1),qt(Ic),vt(i.CULL_FACE),P(hi);function vt(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function ht(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function It(D,ct){return u[D]!==ct?(i.bindFramebuffer(D,ct),u[D]=ct,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ct),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function wt(D,ct){let W=f,Z=!1;if(D){W=h.get(ct),W===void 0&&(W=[],h.set(ct,W));const ot=D.textures;if(W.length!==ot.length||W[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,kt=ot.length;ut<kt;ut++)W[ut]=i.COLOR_ATTACHMENT0+ut;W.length=ot.length,Z=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,Z=!0);Z&&i.drawBuffers(W)}function Wt(D){return p!==D?(i.useProgram(D),p=D,!0):!1}const Kt={[Ii]:i.FUNC_ADD,[jd]:i.FUNC_SUBTRACT,[Kd]:i.FUNC_REVERSE_SUBTRACT};Kt[Zd]=i.MIN,Kt[Jd]=i.MAX;const Xt={[Qd]:i.ZERO,[tp]:i.ONE,[ep]:i.SRC_COLOR,[Io]:i.SRC_ALPHA,[op]:i.SRC_ALPHA_SATURATE,[sp]:i.DST_COLOR,[ip]:i.DST_ALPHA,[np]:i.ONE_MINUS_SRC_COLOR,[No]:i.ONE_MINUS_SRC_ALPHA,[ap]:i.ONE_MINUS_DST_COLOR,[rp]:i.ONE_MINUS_DST_ALPHA,[lp]:i.CONSTANT_COLOR,[cp]:i.ONE_MINUS_CONSTANT_COLOR,[up]:i.CONSTANT_ALPHA,[hp]:i.ONE_MINUS_CONSTANT_ALPHA};function P(D,ct,W,Z,ot,ut,kt,ue,Se,$t){if(D===hi){g===!0&&(ht(i.BLEND),g=!1);return}if(g===!1&&(vt(i.BLEND),g=!0),D!==$d){if(D!==_||$t!==C){if((d!==Ii||x!==Ii)&&(i.blendEquation(i.FUNC_ADD),d=Ii,x=Ii),$t)switch(D){case wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nc:i.blendFunc(i.ONE,i.ONE);break;case Oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,y=null,S=null,A=null,w.set(0,0,0),b=0,_=D,C=$t}return}ot=ot||ct,ut=ut||W,kt=kt||Z,(ct!==d||ot!==x)&&(i.blendEquationSeparate(Kt[ct],Kt[ot]),d=ct,x=ot),(W!==m||Z!==y||ut!==S||kt!==A)&&(i.blendFuncSeparate(Xt[W],Xt[Z],Xt[ut],Xt[kt]),m=W,y=Z,S=ut,A=kt),(ue.equals(w)===!1||Se!==b)&&(i.blendColor(ue.r,ue.g,ue.b,Se),w.copy(ue),b=Se),_=D,C=!1}function Le(D,ct){D.side===Xn?ht(i.CULL_FACE):vt(i.CULL_FACE);let W=D.side===qe;ct&&(W=!W),zt(W),D.blending===wr&&D.transparent===!1?P(hi):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Zt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(D){L!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),L=D)}function qt(D){D!==Xd?(vt(i.CULL_FACE),D!==v&&(D===Ic?i.cullFace(i.BACK):D===qd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),v=D}function bt(D){D!==E&&($&&i.lineWidth(D),E=D)}function Zt(D,ct,W){D?(vt(i.POLYGON_OFFSET_FILL),(B!==ct||N!==W)&&(i.polygonOffset(ct,W),B=ct,N=W)):ht(i.POLYGON_OFFSET_FILL)}function At(D){D?vt(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function R(D){D===void 0&&(D=i.TEXTURE0+X-1),V!==D&&(i.activeTexture(D),V=D)}function M(D,ct,W){W===void 0&&(V===null?W=i.TEXTURE0+X-1:W=V);let Z=lt[W];Z===void 0&&(Z={type:void 0,texture:void 0},lt[W]=Z),(Z.type!==D||Z.texture!==ct)&&(V!==W&&(i.activeTexture(W),V=W),i.bindTexture(D,ct||Q[D]),Z.type=D,Z.texture=ct)}function O(){const D=lt[V];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(D){St.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),St.copy(D))}function _t(D){Gt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Gt.copy(D))}function Vt(D,ct){let W=l.get(ct);W===void 0&&(W=new WeakMap,l.set(ct,W));let Z=W.get(D);Z===void 0&&(Z=i.getUniformBlockIndex(ct,D.name),W.set(D,Z))}function Dt(D,ct){const Z=l.get(ct).get(D);o.get(ct)!==Z&&(i.uniformBlockBinding(ct,Z,D.__bindingPointIndex),o.set(ct,Z))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},V=null,lt={},u={},h=new WeakMap,f=[],p=null,g=!1,_=null,d=null,m=null,y=null,x=null,S=null,A=null,w=new ee(0,0,0),b=0,C=!1,L=null,v=null,E=null,B=null,N=null,St.set(0,0,i.canvas.width,i.canvas.height),Gt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:vt,disable:ht,bindFramebuffer:It,drawBuffers:wt,useProgram:Wt,setBlending:P,setMaterial:Le,setFlipSided:zt,setCullFace:qt,setLineWidth:bt,setPolygonOffset:Zt,setScissorTest:At,activeTexture:R,bindTexture:M,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:tt,texImage2D:gt,texImage3D:Ct,updateUBOMapping:Vt,uniformBlockBinding:Dt,texStorage2D:Yt,texStorage3D:nt,texSubImage2D:j,texSubImage3D:xt,compressedTexSubImage2D:st,compressedTexSubImage3D:ft,scissor:Pt,viewport:_t,reset:ne}}function Ru(i,t,e,n){const r=Jv(n);switch(e){case vh:return i*t;case Mh:return i*t;case Sh:return i*t*2;case yh:return i*t/r.components*r.byteLength;case Xl:return i*t/r.components*r.byteLength;case Eh:return i*t*2/r.components*r.byteLength;case ql:return i*t*2/r.components*r.byteLength;case xh:return i*t*3/r.components*r.byteLength;case bn:return i*t*4/r.components*r.byteLength;case Yl:return i*t*4/r.components*r.byteLength;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ia:case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $o:case Ko:return Math.max(i,16)*Math.max(t,8)/4;case Yo:case jo:return Math.max(i,8)*Math.max(t,8)/2;case Zo:case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case sa:case pl:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Th:case _l:return Math.ceil(i/4)*Math.ceil(t/4)*8;case gl:case vl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Jv(i){switch(i){case $n:case mh:return{byteLength:1,components:1};case ds:case _h:case ys:return{byteLength:2,components:1};case Vl:case Wl:return{byteLength:2,components:4};case Xi:case Gl:case qn:return{byteLength:4,components:1};case gh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Qv(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ht,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return p?new OffscreenCanvas(R,M):xa("canvas")}function _(R,M,O){let K=1;const tt=At(R);if((tt.width>O||tt.height>O)&&(K=O/Math.max(tt.width,tt.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(K*tt.width),xt=Math.floor(K*tt.height);h===void 0&&(h=g(j,xt));const st=M?g(j,xt):h;return st.width=j,st.height=xt,st.getContext("2d").drawImage(R,0,0,j,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+j+"x"+xt+")."),st}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),R;return R}function d(R){return R.generateMipmaps&&R.minFilter!==pn&&R.minFilter!==yn}function m(R){i.generateMipmap(R)}function y(R,M,O,K,tt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=M;if(M===i.RED&&(O===i.FLOAT&&(j=i.R32F),O===i.HALF_FLOAT&&(j=i.R16F),O===i.UNSIGNED_BYTE&&(j=i.R8)),M===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.R8UI),O===i.UNSIGNED_SHORT&&(j=i.R16UI),O===i.UNSIGNED_INT&&(j=i.R32UI),O===i.BYTE&&(j=i.R8I),O===i.SHORT&&(j=i.R16I),O===i.INT&&(j=i.R32I)),M===i.RG&&(O===i.FLOAT&&(j=i.RG32F),O===i.HALF_FLOAT&&(j=i.RG16F),O===i.UNSIGNED_BYTE&&(j=i.RG8)),M===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.RG8UI),O===i.UNSIGNED_SHORT&&(j=i.RG16UI),O===i.UNSIGNED_INT&&(j=i.RG32UI),O===i.BYTE&&(j=i.RG8I),O===i.SHORT&&(j=i.RG16I),O===i.INT&&(j=i.RG32I)),M===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.RGB8UI),O===i.UNSIGNED_SHORT&&(j=i.RGB16UI),O===i.UNSIGNED_INT&&(j=i.RGB32UI),O===i.BYTE&&(j=i.RGB8I),O===i.SHORT&&(j=i.RGB16I),O===i.INT&&(j=i.RGB32I)),M===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),O===i.UNSIGNED_INT&&(j=i.RGBA32UI),O===i.BYTE&&(j=i.RGBA8I),O===i.SHORT&&(j=i.RGBA16I),O===i.INT&&(j=i.RGBA32I)),M===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),M===i.RGBA){const xt=tt?ma:te.getTransfer(K);O===i.FLOAT&&(j=i.RGBA32F),O===i.HALF_FLOAT&&(j=i.RGBA16F),O===i.UNSIGNED_BYTE&&(j=xt===le?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(R,M){let O;return R?M===null||M===Xi||M===Fr?O=i.DEPTH24_STENCIL8:M===qn?O=i.DEPTH32F_STENCIL8:M===ds&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Xi||M===Fr?O=i.DEPTH_COMPONENT24:M===qn?O=i.DEPTH_COMPONENT32F:M===ds&&(O=i.DEPTH_COMPONENT16),O}function S(R,M){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==pn&&R.minFilter!==yn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){const M=R.target;M.removeEventListener("dispose",A),b(M),M.isVideoTexture&&u.delete(M)}function w(R){const M=R.target;M.removeEventListener("dispose",w),L(M)}function b(R){const M=n.get(R);if(M.__webglInit===void 0)return;const O=R.source,K=f.get(O);if(K){const tt=K[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&C(R),Object.keys(K).length===0&&f.delete(O)}n.remove(R)}function C(R){const M=n.get(R);i.deleteTexture(M.__webglTexture);const O=R.source,K=f.get(O);delete K[M.__cacheKey],a.memory.textures--}function L(R){const M=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let tt=0;tt<M.__webglFramebuffer[K].length;tt++)i.deleteFramebuffer(M.__webglFramebuffer[K][tt]);else i.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)i.deleteFramebuffer(M.__webglFramebuffer[K]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=R.textures;for(let K=0,tt=O.length;K<tt;K++){const j=n.get(O[K]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(O[K])}n.remove(R)}let v=0;function E(){v=0}function B(){const R=v;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),v+=1,R}function N(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function X(R,M){const O=n.get(R);if(R.isVideoTexture&&bt(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Gt(O,R,M);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+M)}function $(R,M){const O=n.get(R);if(R.version>0&&O.__version!==R.version){Gt(O,R,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+M)}function z(R,M){const O=n.get(R);if(R.version>0&&O.__version!==R.version){Gt(O,R,M);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+M)}function Y(R,M){const O=n.get(R);if(R.version>0&&O.__version!==R.version){q(O,R,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+M)}const V={[Xo]:i.REPEAT,[Fi]:i.CLAMP_TO_EDGE,[qo]:i.MIRRORED_REPEAT},lt={[pn]:i.NEAREST,[Sp]:i.NEAREST_MIPMAP_NEAREST,[Cs]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[Xa]:i.LINEAR_MIPMAP_NEAREST,[Bi]:i.LINEAR_MIPMAP_LINEAR},rt={[wp]:i.NEVER,[Lp]:i.ALWAYS,[Ap]:i.LESS,[bh]:i.LEQUAL,[Rp]:i.EQUAL,[Dp]:i.GEQUAL,[Cp]:i.GREATER,[Pp]:i.NOTEQUAL};function mt(R,M){if(M.type===qn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===yn||M.magFilter===Xa||M.magFilter===Cs||M.magFilter===Bi||M.minFilter===yn||M.minFilter===Xa||M.minFilter===Cs||M.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,V[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,V[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,V[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,lt[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,lt[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,rt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===pn||M.minFilter!==Cs&&M.minFilter!==Bi||M.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function St(R,M){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));const K=M.source;let tt=f.get(K);tt===void 0&&(tt={},f.set(K,tt));const j=N(M);if(j!==R.__cacheKey){tt[j]===void 0&&(tt[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),tt[j].usedTimes++;const xt=tt[R.__cacheKey];xt!==void 0&&(tt[R.__cacheKey].usedTimes--,xt.usedTimes===0&&C(M)),R.__cacheKey=j,R.__webglTexture=tt[j].texture}return O}function Gt(R,M,O){let K=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=i.TEXTURE_3D);const tt=St(R,M),j=M.source;e.bindTexture(K,R.__webglTexture,i.TEXTURE0+O);const xt=n.get(j);if(j.version!==xt.__version||tt===!0){e.activeTexture(i.TEXTURE0+O);const st=te.getPrimaries(te.workingColorSpace),ft=M.colorSpace===oi?null:te.getPrimaries(M.colorSpace),Yt=M.colorSpace===oi||st===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let nt=_(M.image,!1,r.maxTextureSize);nt=Zt(M,nt);const gt=s.convert(M.format,M.colorSpace),Ct=s.convert(M.type);let Pt=y(M.internalFormat,gt,Ct,M.colorSpace,M.isVideoTexture);mt(K,M);let _t;const Vt=M.mipmaps,Dt=M.isVideoTexture!==!0,ne=xt.__version===void 0||tt===!0,D=j.dataReady,ct=S(M,nt);if(M.isDepthTexture)Pt=x(M.format===Br,M.type),ne&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,Pt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Pt,nt.width,nt.height,0,gt,Ct,null));else if(M.isDataTexture)if(Vt.length>0){Dt&&ne&&e.texStorage2D(i.TEXTURE_2D,ct,Pt,Vt[0].width,Vt[0].height);for(let W=0,Z=Vt.length;W<Z;W++)_t=Vt[W],Dt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,_t.width,_t.height,gt,Ct,_t.data):e.texImage2D(i.TEXTURE_2D,W,Pt,_t.width,_t.height,0,gt,Ct,_t.data);M.generateMipmaps=!1}else Dt?(ne&&e.texStorage2D(i.TEXTURE_2D,ct,Pt,nt.width,nt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,gt,Ct,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Pt,nt.width,nt.height,0,gt,Ct,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Dt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Pt,Vt[0].width,Vt[0].height,nt.depth);for(let W=0,Z=Vt.length;W<Z;W++)if(_t=Vt[W],M.format!==bn)if(gt!==null)if(Dt){if(D)if(M.layerUpdates.size>0){const ot=Ru(_t.width,_t.height,M.format,M.type);for(const ut of M.layerUpdates){const kt=_t.data.subarray(ut*ot/_t.data.BYTES_PER_ELEMENT,(ut+1)*ot/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,ut,_t.width,_t.height,1,gt,kt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,_t.width,_t.height,nt.depth,gt,_t.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Pt,_t.width,_t.height,nt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,_t.width,_t.height,nt.depth,gt,Ct,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Pt,_t.width,_t.height,nt.depth,0,gt,Ct,_t.data)}else{Dt&&ne&&e.texStorage2D(i.TEXTURE_2D,ct,Pt,Vt[0].width,Vt[0].height);for(let W=0,Z=Vt.length;W<Z;W++)_t=Vt[W],M.format!==bn?gt!==null?Dt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Pt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,_t.width,_t.height,gt,Ct,_t.data):e.texImage2D(i.TEXTURE_2D,W,Pt,_t.width,_t.height,0,gt,Ct,_t.data)}else if(M.isDataArrayTexture)if(Dt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Pt,nt.width,nt.height,nt.depth),D)if(M.layerUpdates.size>0){const W=Ru(nt.width,nt.height,M.format,M.type);for(const Z of M.layerUpdates){const ot=nt.data.subarray(Z*W/nt.data.BYTES_PER_ELEMENT,(Z+1)*W/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,nt.width,nt.height,1,gt,Ct,ot)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,gt,Ct,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,nt.width,nt.height,nt.depth,0,gt,Ct,nt.data);else if(M.isData3DTexture)Dt?(ne&&e.texStorage3D(i.TEXTURE_3D,ct,Pt,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,gt,Ct,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,nt.width,nt.height,nt.depth,0,gt,Ct,nt.data);else if(M.isFramebufferTexture){if(ne)if(Dt)e.texStorage2D(i.TEXTURE_2D,ct,Pt,nt.width,nt.height);else{let W=nt.width,Z=nt.height;for(let ot=0;ot<ct;ot++)e.texImage2D(i.TEXTURE_2D,ot,Pt,W,Z,0,gt,Ct,null),W>>=1,Z>>=1}}else if(Vt.length>0){if(Dt&&ne){const W=At(Vt[0]);e.texStorage2D(i.TEXTURE_2D,ct,Pt,W.width,W.height)}for(let W=0,Z=Vt.length;W<Z;W++)_t=Vt[W],Dt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,gt,Ct,_t):e.texImage2D(i.TEXTURE_2D,W,Pt,gt,Ct,_t);M.generateMipmaps=!1}else if(Dt){if(ne){const W=At(nt);e.texStorage2D(i.TEXTURE_2D,ct,Pt,W.width,W.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Ct,nt)}else e.texImage2D(i.TEXTURE_2D,0,Pt,gt,Ct,nt);d(M)&&m(K),xt.__version=j.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function q(R,M,O){if(M.image.length!==6)return;const K=St(R,M),tt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+O);const j=n.get(tt);if(tt.version!==j.__version||K===!0){e.activeTexture(i.TEXTURE0+O);const xt=te.getPrimaries(te.workingColorSpace),st=M.colorSpace===oi?null:te.getPrimaries(M.colorSpace),ft=M.colorSpace===oi||xt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Yt=M.isCompressedTexture||M.image[0].isCompressedTexture,nt=M.image[0]&&M.image[0].isDataTexture,gt=[];for(let Z=0;Z<6;Z++)!Yt&&!nt?gt[Z]=_(M.image[Z],!0,r.maxCubemapSize):gt[Z]=nt?M.image[Z].image:M.image[Z],gt[Z]=Zt(M,gt[Z]);const Ct=gt[0],Pt=s.convert(M.format,M.colorSpace),_t=s.convert(M.type),Vt=y(M.internalFormat,Pt,_t,M.colorSpace),Dt=M.isVideoTexture!==!0,ne=j.__version===void 0||K===!0,D=tt.dataReady;let ct=S(M,Ct);mt(i.TEXTURE_CUBE_MAP,M);let W;if(Yt){Dt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Vt,Ct.width,Ct.height);for(let Z=0;Z<6;Z++){W=gt[Z].mipmaps;for(let ot=0;ot<W.length;ot++){const ut=W[ot];M.format!==bn?Pt!==null?Dt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,0,0,ut.width,ut.height,Pt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,Vt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,0,0,ut.width,ut.height,Pt,_t,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,Vt,ut.width,ut.height,0,Pt,_t,ut.data)}}}else{if(W=M.mipmaps,Dt&&ne){W.length>0&&ct++;const Z=At(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Vt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(nt){Dt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,gt[Z].width,gt[Z].height,Pt,_t,gt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,gt[Z].width,gt[Z].height,0,Pt,_t,gt[Z].data);for(let ot=0;ot<W.length;ot++){const kt=W[ot].image[Z].image;Dt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,0,0,kt.width,kt.height,Pt,_t,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,Vt,kt.width,kt.height,0,Pt,_t,kt.data)}}else{Dt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pt,_t,gt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,Pt,_t,gt[Z]);for(let ot=0;ot<W.length;ot++){const ut=W[ot];Dt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,0,0,Pt,_t,ut.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,Vt,Pt,_t,ut.image[Z])}}}d(M)&&m(i.TEXTURE_CUBE_MAP),j.__version=tt.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Q(R,M,O,K,tt,j){const xt=s.convert(O.format,O.colorSpace),st=s.convert(O.type),ft=y(O.internalFormat,xt,st,O.colorSpace);if(!n.get(M).__hasExternalTextures){const nt=Math.max(1,M.width>>j),gt=Math.max(1,M.height>>j);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,j,ft,nt,gt,M.depth,0,xt,st,null):e.texImage2D(tt,j,ft,nt,gt,0,xt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),qt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,tt,n.get(O).__webglTexture,0,zt(M)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,tt,n.get(O).__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(R,M,O){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){const K=M.depthTexture,tt=K&&K.isDepthTexture?K.type:null,j=x(M.stencilBuffer,tt),xt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=zt(M);qt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,j,M.width,M.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,j,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,j,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,R)}else{const K=M.textures;for(let tt=0;tt<K.length;tt++){const j=K[tt],xt=s.convert(j.format,j.colorSpace),st=s.convert(j.type),ft=y(j.internalFormat,xt,st,j.colorSpace),Yt=zt(M);O&&qt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,ft,M.width,M.height):qt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,ft,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ft,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const K=n.get(M.depthTexture).__webglTexture,tt=zt(M);if(M.depthTexture.format===Ar)qt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(M.depthTexture.format===Br)qt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function It(R){const M=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",tt)};K.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=K}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ht(M.__webglFramebuffer,R)}else if(O){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=i.createRenderbuffer(),vt(M.__webglDepthbuffer[K],R,!1);else{const tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),vt(M.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(R,M,O){const K=n.get(R);M!==void 0&&Q(K.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&It(R)}function Wt(R){const M=R.texture,O=n.get(R),K=n.get(M);R.addEventListener("dispose",w);const tt=R.textures,j=R.isWebGLCubeRenderTarget===!0,xt=tt.length>1;if(xt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=M.version,a.memory.textures++),j){O.__webglFramebuffer=[];for(let st=0;st<6;st++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[st]=[];for(let ft=0;ft<M.mipmaps.length;ft++)O.__webglFramebuffer[st][ft]=i.createFramebuffer()}else O.__webglFramebuffer[st]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let st=0;st<M.mipmaps.length;st++)O.__webglFramebuffer[st]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(xt)for(let st=0,ft=tt.length;st<ft;st++){const Yt=n.get(tt[st]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&qt(R)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let st=0;st<tt.length;st++){const ft=tt[st];O.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[st]);const Yt=s.convert(ft.format,ft.colorSpace),nt=s.convert(ft.type),gt=y(ft.internalFormat,Yt,nt,ft.colorSpace,R.isXRRenderTarget===!0),Ct=zt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,gt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,O.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(O.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),mt(i.TEXTURE_CUBE_MAP,M);for(let st=0;st<6;st++)if(M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)Q(O.__webglFramebuffer[st][ft],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ft);else Q(O.__webglFramebuffer[st],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);d(M)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let st=0,ft=tt.length;st<ft;st++){const Yt=tt[st],nt=n.get(Yt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),mt(i.TEXTURE_2D,Yt),Q(O.__webglFramebuffer,R,Yt,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,0),d(Yt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(st=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,K.__webglTexture),mt(st,M),M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)Q(O.__webglFramebuffer[ft],R,M,i.COLOR_ATTACHMENT0,st,ft);else Q(O.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,st,0);d(M)&&m(st),e.unbindTexture()}R.depthBuffer&&It(R)}function Kt(R){const M=R.textures;for(let O=0,K=M.length;O<K;O++){const tt=M[O];if(d(tt)){const j=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xt=n.get(tt).__webglTexture;e.bindTexture(j,xt),m(j),e.unbindTexture()}}}const Xt=[],P=[];function Le(R){if(R.samples>0){if(qt(R)===!1){const M=R.textures,O=R.width,K=R.height;let tt=i.COLOR_BUFFER_BIT;const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(R),st=M.length>1;if(st)for(let ft=0;ft<M.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ft=0;ft<M.length;ft++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ft]);const Yt=n.get(M[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,tt,i.NEAREST),l===!0&&(Xt.length=0,P.length=0,Xt.push(i.COLOR_ATTACHMENT0+ft),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Xt.push(j),P.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let ft=0;ft<M.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ft]);const Yt=n.get(M[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function zt(R){return Math.min(r.maxSamples,R.samples)}function qt(R){const M=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function bt(R){const M=a.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function Zt(R,M){const O=R.colorSpace,K=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Si&&O!==oi&&(te.getTransfer(O)===le?(K!==bn||tt!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function At(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=E,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=z,this.setTextureCube=Y,this.rebindTextures=wt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=qt}function tx(i,t){function e(n,r=oi){let s;const a=te.getTransfer(r);if(n===$n)return i.UNSIGNED_BYTE;if(n===Vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mh)return i.BYTE;if(n===_h)return i.SHORT;if(n===ds)return i.UNSIGNED_SHORT;if(n===Gl)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===ys)return i.HALF_FLOAT;if(n===vh)return i.ALPHA;if(n===xh)return i.RGB;if(n===bn)return i.RGBA;if(n===Mh)return i.LUMINANCE;if(n===Sh)return i.LUMINANCE_ALPHA;if(n===Ar)return i.DEPTH_COMPONENT;if(n===Br)return i.DEPTH_STENCIL;if(n===yh)return i.RED;if(n===Xl)return i.RED_INTEGER;if(n===Eh)return i.RG;if(n===ql)return i.RG_INTEGER;if(n===Yl)return i.RGBA_INTEGER;if(n===ea||n===na||n===ia||n===ra)if(a===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ea)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ea)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===na)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ia)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ra)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yo||n===$o||n===jo||n===Ko)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Yo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$o)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ko)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zo||n===Jo||n===Qo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Zo||n===Jo)return a===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Qo)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tl||n===el||n===nl||n===il||n===rl||n===sl||n===al||n===ol||n===ll||n===cl||n===ul||n===hl||n===fl||n===dl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===tl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===el)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===al)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ol)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ul)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sa||n===pl||n===ml)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===sa)return a===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ml)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Th||n===_l||n===gl||n===vl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===sa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class ex extends we{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ns extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nx={type:"move"};class Mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const d=e.getJointPose(_,n),m=this._getHandJoint(c,_);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ns;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Ye,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new gi({vertexShader:ix,fragmentShader:rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new Ua(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ax extends Ji{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=new sx,d=e.getContextAttributes();let m=null,y=null;const x=[],S=[],A=new Ht;let w=null;const b=new we;b.layers.enable(1),b.viewport=new ge;const C=new we;C.layers.enable(2),C.viewport=new ge;const L=[b,C],v=new ex;v.layers.enable(1),v.layers.enable(2);let E=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=x[q];return Q===void 0&&(Q=new Mo,x[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=x[q];return Q===void 0&&(Q=new Mo,x[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=x[q];return Q===void 0&&(Q=new Mo,x[q]=Q),Q.getHandSpace()};function N(q){const Q=S.indexOf(q.inputSource);if(Q===-1)return;const vt=x[Q];vt!==void 0&&(vt.update(q.inputSource,q.frame,c||a),vt.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",$);for(let q=0;q<x.length;q++){const Q=S[q];Q!==null&&(S[q]=null,x[q].disconnect(Q))}E=null,B=null,_.reset(),t.setRenderTarget(m),p=null,f=null,h=null,r=null,y=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",X),r.addEventListener("inputsourceschange",$),d.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),r.renderState.layers===void 0){const Q={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,Q),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new qi(p.framebufferWidth,p.framebufferHeight,{format:bn,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let Q=null,vt=null,ht=null;d.depth&&(ht=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=d.stencil?Br:Ar,vt=d.stencil?Fr:Xi);const It={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(It),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new qi(f.textureWidth,f.textureHeight,{format:bn,type:$n,depthTexture:new Bh(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Gt.setContext(r),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(q){for(let Q=0;Q<q.removed.length;Q++){const vt=q.removed[Q],ht=S.indexOf(vt);ht>=0&&(S[ht]=null,x[ht].disconnect(vt))}for(let Q=0;Q<q.added.length;Q++){const vt=q.added[Q];let ht=S.indexOf(vt);if(ht===-1){for(let wt=0;wt<x.length;wt++)if(wt>=S.length){S.push(vt),ht=wt;break}else if(S[wt]===null){S[wt]=vt,ht=wt;break}if(ht===-1)break}const It=x[ht];It&&It.connect(vt)}}const z=new F,Y=new F;function V(q,Q,vt){z.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(vt.matrixWorld);const ht=z.distanceTo(Y),It=Q.projectionMatrix.elements,wt=vt.projectionMatrix.elements,Wt=It[14]/(It[10]-1),Kt=It[14]/(It[10]+1),Xt=(It[9]+1)/It[5],P=(It[9]-1)/It[5],Le=(It[8]-1)/It[0],zt=(wt[8]+1)/wt[0],qt=Wt*Le,bt=Wt*zt,Zt=ht/(-Le+zt),At=Zt*-Le;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(At),q.translateZ(Zt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),It[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const R=Wt+Zt,M=Kt+Zt,O=qt-At,K=bt+(ht-At),tt=Xt*Kt/M*R,j=P*Kt/M*R;q.projectionMatrix.makePerspective(O,K,tt,j,R,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function lt(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let Q=q.near,vt=q.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(vt=_.depthFar)),v.near=C.near=b.near=Q,v.far=C.far=b.far=vt,(E!==v.near||B!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,B=v.far);const ht=q.parent,It=v.cameras;lt(v,ht);for(let wt=0;wt<It.length;wt++)lt(It[wt],ht);It.length===2?V(v,b,C):v.projectionMatrix.copy(b.projectionMatrix),rt(q,v,ht)};function rt(q,Q,vt){vt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(vt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ps*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let mt=null;function St(q,Q){if(u=Q.getViewerPose(c||a),g=Q,u!==null){const vt=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let ht=!1;vt.length!==v.cameras.length&&(v.cameras.length=0,ht=!0);for(let wt=0;wt<vt.length;wt++){const Wt=vt[wt];let Kt=null;if(p!==null)Kt=p.getViewport(Wt);else{const P=h.getViewSubImage(f,Wt);Kt=P.viewport,wt===0&&(t.setRenderTargetTextures(y,P.colorTexture,f.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(y))}let Xt=L[wt];Xt===void 0&&(Xt=new we,Xt.layers.enable(wt),Xt.viewport=new ge,L[wt]=Xt),Xt.matrix.fromArray(Wt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Wt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),wt===0&&(v.matrix.copy(Xt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ht===!0&&v.cameras.push(Xt)}const It=r.enabledFeatures;if(It&&It.includes("depth-sensing")){const wt=h.getDepthInformation(vt[0]);wt&&wt.isValid&&wt.texture&&_.init(t,wt,r.renderState)}}for(let vt=0;vt<x.length;vt++){const ht=S[vt],It=x[vt];ht!==null&&It!==void 0&&It.update(ht,Q,c||a)}mt&&mt(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Gt=new Fh;Gt.setAnimationLoop(St),this.setAnimationLoop=function(q){mt=q},this.dispose=function(){}}}const Ci=new jn,ox=new ve;function lx(i,t){function e(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function n(d,m){m.color.getRGB(d.fogColor.value,Uh(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function r(d,m,y,x,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(d,m):m.isMeshToonMaterial?(s(d,m),h(d,m)):m.isMeshPhongMaterial?(s(d,m),u(d,m)):m.isMeshStandardMaterial?(s(d,m),f(d,m),m.isMeshPhysicalMaterial&&p(d,m,S)):m.isMeshMatcapMaterial?(s(d,m),g(d,m)):m.isMeshDepthMaterial?s(d,m):m.isMeshDistanceMaterial?(s(d,m),_(d,m)):m.isMeshNormalMaterial?s(d,m):m.isLineBasicMaterial?(a(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?l(d,m,y,x):m.isSpriteMaterial?c(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,e(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===qe&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,e(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===qe&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,e(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,e(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const y=t.get(m),x=y.envMap,S=y.envMapRotation;x&&(d.envMap.value=x,Ci.copy(S),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),d.envMapRotation.value.setFromMatrix4(ox.makeRotationFromEuler(Ci)),d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,d.aoMapTransform))}function a(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform))}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function l(d,m,y,x){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*y,d.scale.value=x*.5,m.map&&(d.map.value=m.map,e(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function c(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function u(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function h(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,y){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qe&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,m){m.matcap&&(d.matcap.value=m.matcap)}function _(d,m){const y=t.get(m).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function cx(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const S=x.program;n.uniformBlockBinding(y,S)}function c(y,x){let S=r[y.id];S===void 0&&(g(y),S=u(y),r[y.id]=S,y.addEventListener("dispose",d));const A=x.program;n.updateUBOMapping(y,A);const w=t.render.frame;s[y.id]!==w&&(f(y),s[y.id]=w)}function u(y){const x=h();y.__bindingPointIndex=x;const S=i.createBuffer(),A=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,S),S}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=r[y.id],S=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,b=S.length;w<b;w++){const C=Array.isArray(S[w])?S[w]:[S[w]];for(let L=0,v=C.length;L<v;L++){const E=C[L];if(p(E,w,L,A)===!0){const B=E.__offset,N=Array.isArray(E.value)?E.value:[E.value];let X=0;for(let $=0;$<N.length;$++){const z=N[$],Y=_(z);typeof z=="number"||typeof z=="boolean"?(E.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,B+X,E.__data)):z.isMatrix3?(E.__data[0]=z.elements[0],E.__data[1]=z.elements[1],E.__data[2]=z.elements[2],E.__data[3]=0,E.__data[4]=z.elements[3],E.__data[5]=z.elements[4],E.__data[6]=z.elements[5],E.__data[7]=0,E.__data[8]=z.elements[6],E.__data[9]=z.elements[7],E.__data[10]=z.elements[8],E.__data[11]=0):(z.toArray(E.__data,X),X+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,S,A){const w=y.value,b=x+"_"+S;if(A[b]===void 0)return typeof w=="number"||typeof w=="boolean"?A[b]=w:A[b]=w.clone(),!0;{const C=A[b];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return A[b]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(y){const x=y.uniforms;let S=0;const A=16;for(let b=0,C=x.length;b<C;b++){const L=Array.isArray(x[b])?x[b]:[x[b]];for(let v=0,E=L.length;v<E;v++){const B=L[v],N=Array.isArray(B.value)?B.value:[B.value];for(let X=0,$=N.length;X<$;X++){const z=N[X],Y=_(z),V=S%A,lt=V%Y.boundary,rt=V+lt;S+=lt,rt!==0&&A-rt<Y.storage&&(S+=A-rt),B.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=Y.storage}}}const w=S%A;return w>0&&(S+=A-w),y.__size=S,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function d(y){const x=y.target;x.removeEventListener("dispose",d);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function m(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:m}}class $i{constructor(t={}){const{canvas:e=Kp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,d=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=An,this.toneMapping=fi,this.toneMappingExposure=1;const x=this;let S=!1,A=0,w=0,b=null,C=-1,L=null;const v=new ge,E=new ge;let B=null;const N=new ee(0);let X=0,$=e.width,z=e.height,Y=1,V=null,lt=null;const rt=new ge(0,0,$,z),mt=new ge(0,0,$,z);let St=!1;const Gt=new Oh;let q=!1,Q=!1;const vt=new ve,ht=new ve,It=new F,wt=new ge,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function Xt(){return b===null?Y:1}let P=n;function Le(T,U){return e.getContext(T,U)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hl}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",ut,!1),P===null){const U="webgl2";if(P=Le(U,T),P===null)throw Le(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let zt,qt,bt,Zt,At,R,M,O,K,tt,j,xt,st,ft,Yt,nt,gt,Ct,Pt,_t,Vt,Dt,ne,D;function ct(){zt=new m0(P),zt.init(),Dt=new tx(P,zt),qt=new l0(P,zt,t,Dt),bt=new Zv(P),qt.reverseDepthBuffer&&bt.buffers.depth.setReversed(!0),Zt=new v0(P),At=new Ov,R=new Qv(P,zt,bt,At,qt,Dt,Zt),M=new u0(x),O=new p0(x),K=new Tm(P),ne=new a0(P,K),tt=new _0(P,K,Zt,ne),j=new M0(P,tt,K,Zt),Pt=new x0(P,qt,R),nt=new c0(At),xt=new Nv(x,M,O,zt,qt,ne,nt),st=new lx(x,At),ft=new Bv,Yt=new Wv(zt),Ct=new s0(x,M,O,bt,j,f,l),gt=new jv(x,j,qt),D=new cx(P,Zt,qt,bt),_t=new o0(P,zt,Zt),Vt=new g0(P,zt,Zt),Zt.programs=xt.programs,x.capabilities=qt,x.extensions=zt,x.properties=At,x.renderLists=ft,x.shadowMap=gt,x.state=bt,x.info=Zt}ct();const W=new ax(x,P);this.xr=W,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=zt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=zt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize($,z,!1))},this.getSize=function(T){return T.set($,z)},this.setSize=function(T,U,k=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,z=U,e.width=Math.floor(T*Y),e.height=Math.floor(U*Y),k===!0&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set($*Y,z*Y).floor()},this.setDrawingBufferSize=function(T,U,k){$=T,z=U,Y=k,e.width=Math.floor(T*k),e.height=Math.floor(U*k),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(v)},this.getViewport=function(T){return T.copy(rt)},this.setViewport=function(T,U,k,H){T.isVector4?rt.set(T.x,T.y,T.z,T.w):rt.set(T,U,k,H),bt.viewport(v.copy(rt).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(mt)},this.setScissor=function(T,U,k,H){T.isVector4?mt.set(T.x,T.y,T.z,T.w):mt.set(T,U,k,H),bt.scissor(E.copy(mt).multiplyScalar(Y).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(T){bt.setScissorTest(St=T)},this.setOpaqueSort=function(T){V=T},this.setTransparentSort=function(T){lt=T},this.getClearColor=function(T){return T.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(T=!0,U=!0,k=!0){let H=0;if(T){let I=!1;if(b!==null){const it=b.texture.format;I=it===Yl||it===ql||it===Xl}if(I){const it=b.texture.type,dt=it===$n||it===Xi||it===ds||it===Fr||it===Vl||it===Wl,Mt=Ct.getClearColor(),yt=Ct.getClearAlpha(),Lt=Mt.r,Ut=Mt.g,Et=Mt.b;dt?(p[0]=Lt,p[1]=Ut,p[2]=Et,p[3]=yt,P.clearBufferuiv(P.COLOR,0,p)):(g[0]=Lt,g[1]=Ut,g[2]=Et,g[3]=yt,P.clearBufferiv(P.COLOR,0,g))}else H|=P.COLOR_BUFFER_BIT}U&&(H|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),ft.dispose(),Yt.dispose(),At.dispose(),M.dispose(),O.dispose(),j.dispose(),ne.dispose(),D.dispose(),xt.dispose(),W.dispose(),W.removeEventListener("sessionstart",gc),W.removeEventListener("sessionend",vc),Ei.stop()};function Z(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=Zt.autoReset,U=gt.enabled,k=gt.autoUpdate,H=gt.needsUpdate,I=gt.type;ct(),Zt.autoReset=T,gt.enabled=U,gt.autoUpdate=k,gt.needsUpdate=H,gt.type=I}function ut(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function kt(T){const U=T.target;U.removeEventListener("dispose",kt),ue(U)}function ue(T){Se(T),At.remove(T)}function Se(T){const U=At.get(T).programs;U!==void 0&&(U.forEach(function(k){xt.releaseProgram(k)}),T.isShaderMaterial&&xt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,k,H,I,it){U===null&&(U=Wt);const dt=I.isMesh&&I.matrixWorld.determinant()<0,Mt=qf(T,U,k,H,I);bt.setMaterial(H,dt);let yt=k.index,Lt=1;if(H.wireframe===!0){if(yt=tt.getWireframeAttribute(k),yt===void 0)return;Lt=2}const Ut=k.drawRange,Et=k.attributes.position;let ie=Ut.start*Lt,oe=(Ut.start+Ut.count)*Lt;it!==null&&(ie=Math.max(ie,it.start*Lt),oe=Math.min(oe,(it.start+it.count)*Lt)),yt!==null?(ie=Math.max(ie,0),oe=Math.min(oe,yt.count)):Et!=null&&(ie=Math.max(ie,0),oe=Math.min(oe,Et.count));const de=oe-ie;if(de<0||de===1/0)return;ne.setup(I,H,Mt,k,yt);let tn,Jt=_t;if(yt!==null&&(tn=K.get(yt),Jt=Vt,Jt.setIndex(tn)),I.isMesh)H.wireframe===!0?(bt.setLineWidth(H.wireframeLinewidth*Xt()),Jt.setMode(P.LINES)):Jt.setMode(P.TRIANGLES);else if(I.isLine){let Tt=H.linewidth;Tt===void 0&&(Tt=1),bt.setLineWidth(Tt*Xt()),I.isLineSegments?Jt.setMode(P.LINES):I.isLineLoop?Jt.setMode(P.LINE_LOOP):Jt.setMode(P.LINE_STRIP)}else I.isPoints?Jt.setMode(P.POINTS):I.isSprite&&Jt.setMode(P.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Jt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Tt=I._multiDrawStarts,Pe=I._multiDrawCounts,Qt=I._multiDrawCount,vn=yt?K.get(yt).bytesPerElement:1,tr=At.get(H).currentProgram.getUniforms();for(let en=0;en<Qt;en++)tr.setValue(P,"_gl_DrawID",en),Jt.render(Tt[en]/vn,Pe[en])}else if(I.isInstancedMesh)Jt.renderInstances(ie,de,I.count);else if(k.isInstancedBufferGeometry){const Tt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Pe=Math.min(k.instanceCount,Tt);Jt.renderInstances(ie,de,Pe)}else Jt.render(ie,de)};function $t(T,U,k){T.transparent===!0&&T.side===Xn&&T.forceSinglePass===!1?(T.side=qe,T.needsUpdate=!0,As(T,U,k),T.side=_i,T.needsUpdate=!0,As(T,U,k),T.side=Xn):As(T,U,k)}this.compile=function(T,U,k=null){k===null&&(k=T),d=Yt.get(k),d.init(U),y.push(d),k.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),T!==k&&T.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights();const H=new Set;return T.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const it=I.material;if(it)if(Array.isArray(it))for(let dt=0;dt<it.length;dt++){const Mt=it[dt];$t(Mt,k,I),H.add(Mt)}else $t(it,k,I),H.add(it)}),y.pop(),d=null,H},this.compileAsync=function(T,U,k=null){const H=this.compile(T,U,k);return new Promise(I=>{function it(){if(H.forEach(function(dt){At.get(dt).currentProgram.isReady()&&H.delete(dt)}),H.size===0){I(T);return}setTimeout(it,10)}zt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Ue=null;function On(T){Ue&&Ue(T)}function gc(){Ei.stop()}function vc(){Ei.start()}const Ei=new Fh;Ei.setAnimationLoop(On),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(T){Ue=T,W.setAnimationLoop(T),T===null?Ei.stop():Ei.start()},W.addEventListener("sessionstart",gc),W.addEventListener("sessionend",vc),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,U,b),d=Yt.get(T,y.length),d.init(U),y.push(d),ht.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Gt.setFromProjectionMatrix(ht),Q=this.localClippingEnabled,q=nt.init(this.clippingPlanes,Q),_=ft.get(T,m.length),_.init(),m.push(_),W.enabled===!0&&W.isPresenting===!0){const it=x.xr.getDepthSensingMesh();it!==null&&Ba(it,U,-1/0,x.sortObjects)}Ba(T,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(V,lt),Kt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Kt&&Ct.addToRenderList(_,T),this.info.render.frame++,q===!0&&nt.beginShadows();const k=d.state.shadowsArray;gt.render(k,T,U),q===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=_.opaque,I=_.transmissive;if(d.setupLights(),U.isArrayCamera){const it=U.cameras;if(I.length>0)for(let dt=0,Mt=it.length;dt<Mt;dt++){const yt=it[dt];Mc(H,I,T,yt)}Kt&&Ct.render(T);for(let dt=0,Mt=it.length;dt<Mt;dt++){const yt=it[dt];xc(_,T,yt,yt.viewport)}}else I.length>0&&Mc(H,I,T,U),Kt&&Ct.render(T),xc(_,T,U);b!==null&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(x,T,U),ne.resetDefaultState(),C=-1,L=null,y.pop(),y.length>0?(d=y[y.length-1],q===!0&&nt.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Ba(T,U,k,H){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)k=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Gt.intersectsSprite(T)){H&&wt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ht);const dt=j.update(T),Mt=T.material;Mt.visible&&_.push(T,dt,Mt,k,wt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Gt.intersectsObject(T))){const dt=j.update(T),Mt=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),wt.copy(T.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),wt.copy(dt.boundingSphere.center)),wt.applyMatrix4(T.matrixWorld).applyMatrix4(ht)),Array.isArray(Mt)){const yt=dt.groups;for(let Lt=0,Ut=yt.length;Lt<Ut;Lt++){const Et=yt[Lt],ie=Mt[Et.materialIndex];ie&&ie.visible&&_.push(T,dt,ie,k,wt.z,Et)}}else Mt.visible&&_.push(T,dt,Mt,k,wt.z,null)}}const it=T.children;for(let dt=0,Mt=it.length;dt<Mt;dt++)Ba(it[dt],U,k,H)}function xc(T,U,k,H){const I=T.opaque,it=T.transmissive,dt=T.transparent;d.setupLightsView(k),q===!0&&nt.setGlobalState(x.clippingPlanes,k),H&&bt.viewport(v.copy(H)),I.length>0&&ws(I,U,k),it.length>0&&ws(it,U,k),dt.length>0&&ws(dt,U,k),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Mc(T,U,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new qi(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?ys:$n,minFilter:Bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const it=d.state.transmissionRenderTarget[H.id],dt=H.viewport||v;it.setSize(dt.z,dt.w);const Mt=x.getRenderTarget();x.setRenderTarget(it),x.getClearColor(N),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),Kt&&Ct.render(k);const yt=x.toneMapping;x.toneMapping=fi;const Lt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),q===!0&&nt.setGlobalState(x.clippingPlanes,H),ws(T,k,H),R.updateMultisampleRenderTarget(it),R.updateRenderTargetMipmap(it),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Et=0,ie=U.length;Et<ie;Et++){const oe=U[Et],de=oe.object,tn=oe.geometry,Jt=oe.material,Tt=oe.group;if(Jt.side===Xn&&de.layers.test(H.layers)){const Pe=Jt.side;Jt.side=qe,Jt.needsUpdate=!0,Sc(de,k,H,tn,Jt,Tt),Jt.side=Pe,Jt.needsUpdate=!0,Ut=!0}}Ut===!0&&(R.updateMultisampleRenderTarget(it),R.updateRenderTargetMipmap(it))}x.setRenderTarget(Mt),x.setClearColor(N,X),Lt!==void 0&&(H.viewport=Lt),x.toneMapping=yt}function ws(T,U,k){const H=U.isScene===!0?U.overrideMaterial:null;for(let I=0,it=T.length;I<it;I++){const dt=T[I],Mt=dt.object,yt=dt.geometry,Lt=H===null?dt.material:H,Ut=dt.group;Mt.layers.test(k.layers)&&Sc(Mt,U,k,yt,Lt,Ut)}}function Sc(T,U,k,H,I,it){T.onBeforeRender(x,U,k,H,I,it),T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),I.onBeforeRender(x,U,k,H,T,it),I.transparent===!0&&I.side===Xn&&I.forceSinglePass===!1?(I.side=qe,I.needsUpdate=!0,x.renderBufferDirect(k,U,H,I,T,it),I.side=_i,I.needsUpdate=!0,x.renderBufferDirect(k,U,H,I,T,it),I.side=Xn):x.renderBufferDirect(k,U,H,I,T,it),T.onAfterRender(x,U,k,H,I,it)}function As(T,U,k){U.isScene!==!0&&(U=Wt);const H=At.get(T),I=d.state.lights,it=d.state.shadowsArray,dt=I.state.version,Mt=xt.getParameters(T,I.state,it,U,k),yt=xt.getProgramCacheKey(Mt);let Lt=H.programs;H.environment=T.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(T.isMeshStandardMaterial?O:M).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Lt===void 0&&(T.addEventListener("dispose",kt),Lt=new Map,H.programs=Lt);let Ut=Lt.get(yt);if(Ut!==void 0){if(H.currentProgram===Ut&&H.lightsStateVersion===dt)return Ec(T,Mt),Ut}else Mt.uniforms=xt.getUniforms(T),T.onBeforeCompile(Mt,x),Ut=xt.acquireProgram(Mt,yt),Lt.set(yt,Ut),H.uniforms=Mt.uniforms;const Et=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Et.clippingPlanes=nt.uniform),Ec(T,Mt),H.needsLights=$f(T),H.lightsStateVersion=dt,H.needsLights&&(Et.ambientLightColor.value=I.state.ambient,Et.lightProbe.value=I.state.probe,Et.directionalLights.value=I.state.directional,Et.directionalLightShadows.value=I.state.directionalShadow,Et.spotLights.value=I.state.spot,Et.spotLightShadows.value=I.state.spotShadow,Et.rectAreaLights.value=I.state.rectArea,Et.ltc_1.value=I.state.rectAreaLTC1,Et.ltc_2.value=I.state.rectAreaLTC2,Et.pointLights.value=I.state.point,Et.pointLightShadows.value=I.state.pointShadow,Et.hemisphereLights.value=I.state.hemi,Et.directionalShadowMap.value=I.state.directionalShadowMap,Et.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Et.spotShadowMap.value=I.state.spotShadowMap,Et.spotLightMatrix.value=I.state.spotLightMatrix,Et.spotLightMap.value=I.state.spotLightMap,Et.pointShadowMap.value=I.state.pointShadowMap,Et.pointShadowMatrix.value=I.state.pointShadowMatrix),H.currentProgram=Ut,H.uniformsList=null,Ut}function yc(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=oa.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Ec(T,U){const k=At.get(T);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function qf(T,U,k,H,I){U.isScene!==!0&&(U=Wt),R.resetTextureUnits();const it=U.fog,dt=H.isMeshStandardMaterial?U.environment:null,Mt=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Si,yt=(H.isMeshStandardMaterial?O:M).get(H.envMap||dt),Lt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ut=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Et=!!k.morphAttributes.position,ie=!!k.morphAttributes.normal,oe=!!k.morphAttributes.color;let de=fi;H.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(de=x.toneMapping);const tn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Jt=tn!==void 0?tn.length:0,Tt=At.get(H),Pe=d.state.lights;if(q===!0&&(Q===!0||T!==L)){const hn=T===L&&H.id===C;nt.setState(H,T,hn)}let Qt=!1;H.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Pe.state.version||Tt.outputColorSpace!==Mt||I.isBatchedMesh&&Tt.batching===!1||!I.isBatchedMesh&&Tt.batching===!0||I.isBatchedMesh&&Tt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Tt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Tt.instancing===!1||!I.isInstancedMesh&&Tt.instancing===!0||I.isSkinnedMesh&&Tt.skinning===!1||!I.isSkinnedMesh&&Tt.skinning===!0||I.isInstancedMesh&&Tt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Tt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Tt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Tt.instancingMorph===!1&&I.morphTexture!==null||Tt.envMap!==yt||H.fog===!0&&Tt.fog!==it||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==nt.numPlanes||Tt.numIntersection!==nt.numIntersection)||Tt.vertexAlphas!==Lt||Tt.vertexTangents!==Ut||Tt.morphTargets!==Et||Tt.morphNormals!==ie||Tt.morphColors!==oe||Tt.toneMapping!==de||Tt.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,Tt.__version=H.version);let vn=Tt.currentProgram;Qt===!0&&(vn=As(H,U,I));let tr=!1,en=!1,za=!1;const me=vn.getUniforms(),Qn=Tt.uniforms;if(bt.useProgram(vn.program)&&(tr=!0,en=!0,za=!0),H.id!==C&&(C=H.id,en=!0),tr||L!==T){qt.reverseDepthBuffer?(vt.copy(T.projectionMatrix),Jp(vt),Qp(vt),me.setValue(P,"projectionMatrix",vt)):me.setValue(P,"projectionMatrix",T.projectionMatrix),me.setValue(P,"viewMatrix",T.matrixWorldInverse);const hn=me.map.cameraPosition;hn!==void 0&&hn.setValue(P,It.setFromMatrixPosition(T.matrixWorld)),qt.logarithmicDepthBuffer&&me.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&me.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),L!==T&&(L=T,en=!0,za=!0)}if(I.isSkinnedMesh){me.setOptional(P,I,"bindMatrix"),me.setOptional(P,I,"bindMatrixInverse");const hn=I.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),me.setValue(P,"boneTexture",hn.boneTexture,R))}I.isBatchedMesh&&(me.setOptional(P,I,"batchingTexture"),me.setValue(P,"batchingTexture",I._matricesTexture,R),me.setOptional(P,I,"batchingIdTexture"),me.setValue(P,"batchingIdTexture",I._indirectTexture,R),me.setOptional(P,I,"batchingColorTexture"),I._colorsTexture!==null&&me.setValue(P,"batchingColorTexture",I._colorsTexture,R));const ka=k.morphAttributes;if((ka.position!==void 0||ka.normal!==void 0||ka.color!==void 0)&&Pt.update(I,k,vn),(en||Tt.receiveShadow!==I.receiveShadow)&&(Tt.receiveShadow=I.receiveShadow,me.setValue(P,"receiveShadow",I.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Qn.envMap.value=yt,Qn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Qn.envMapIntensity.value=U.environmentIntensity),en&&(me.setValue(P,"toneMappingExposure",x.toneMappingExposure),Tt.needsLights&&Yf(Qn,za),it&&H.fog===!0&&st.refreshFogUniforms(Qn,it),st.refreshMaterialUniforms(Qn,H,Y,z,d.state.transmissionRenderTarget[T.id]),oa.upload(P,yc(Tt),Qn,R)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(oa.upload(P,yc(Tt),Qn,R),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&me.setValue(P,"center",I.center),me.setValue(P,"modelViewMatrix",I.modelViewMatrix),me.setValue(P,"normalMatrix",I.normalMatrix),me.setValue(P,"modelMatrix",I.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const hn=H.uniformsGroups;for(let Ha=0,jf=hn.length;Ha<jf;Ha++){const Tc=hn[Ha];D.update(Tc,vn),D.bind(Tc,vn)}}return vn}function Yf(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function $f(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,U,k){At.get(T.texture).__webglTexture=U,At.get(T.depthTexture).__webglTexture=k;const H=At.get(T);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const k=At.get(T);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,k=0){b=T,A=U,w=k;let H=!0,I=null,it=!1,dt=!1;if(T){const yt=At.get(T);if(yt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(yt.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(yt.__hasExternalTextures)R.rebindTextures(T,At.get(T.texture).__webglTexture,At.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Et=T.depthTexture;if(yt.__boundDepthTexture!==Et){if(Et!==null&&At.has(Et)&&(T.width!==Et.image.width||T.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Lt=T.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(dt=!0);const Ut=At.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?I=Ut[U][k]:I=Ut[U],it=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?I=At.get(T).__webglMultisampledFramebuffer:Array.isArray(Ut)?I=Ut[k]:I=Ut,v.copy(T.viewport),E.copy(T.scissor),B=T.scissorTest}else v.copy(rt).multiplyScalar(Y).floor(),E.copy(mt).multiplyScalar(Y).floor(),B=St;if(bt.bindFramebuffer(P.FRAMEBUFFER,I)&&H&&bt.drawBuffers(T,I),bt.viewport(v),bt.scissor(E),bt.setScissorTest(B),it){const yt=At.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt.__webglTexture,k)}else if(dt){const yt=At.get(T.texture),Lt=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,yt.__webglTexture,k||0,Lt)}C=-1},this.readRenderTargetPixels=function(T,U,k,H,I,it,dt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=At.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){bt.bindFramebuffer(P.FRAMEBUFFER,Mt);try{const yt=T.texture,Lt=yt.format,Ut=yt.type;if(!qt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-H&&k>=0&&k<=T.height-I&&P.readPixels(U,k,H,I,Dt.convert(Lt),Dt.convert(Ut),it)}finally{const yt=b!==null?At.get(b).__webglFramebuffer:null;bt.bindFramebuffer(P.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(T,U,k,H,I,it,dt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=At.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){const yt=T.texture,Lt=yt.format,Ut=yt.type;if(!qt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-H&&k>=0&&k<=T.height-I){bt.bindFramebuffer(P.FRAMEBUFFER,Mt);const Et=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Et),P.bufferData(P.PIXEL_PACK_BUFFER,it.byteLength,P.STREAM_READ),P.readPixels(U,k,H,I,Dt.convert(Lt),Dt.convert(Ut),0);const ie=b!==null?At.get(b).__webglFramebuffer:null;bt.bindFramebuffer(P.FRAMEBUFFER,ie);const oe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Zp(P,oe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Et),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,it),P.deleteBuffer(Et),P.deleteSync(oe),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,k=0){T.isTexture!==!0&&(aa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const H=Math.pow(2,-k),I=Math.floor(T.image.width*H),it=Math.floor(T.image.height*H),dt=U!==null?U.x:0,Mt=U!==null?U.y:0;R.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,dt,Mt,I,it),bt.unbindTexture()},this.copyTextureToTexture=function(T,U,k=null,H=null,I=0){T.isTexture!==!0&&(aa("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1],U=arguments[2],I=arguments[3]||0,k=null);let it,dt,Mt,yt,Lt,Ut;k!==null?(it=k.max.x-k.min.x,dt=k.max.y-k.min.y,Mt=k.min.x,yt=k.min.y):(it=T.image.width,dt=T.image.height,Mt=0,yt=0),H!==null?(Lt=H.x,Ut=H.y):(Lt=0,Ut=0);const Et=Dt.convert(U.format),ie=Dt.convert(U.type);R.setTexture2D(U,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const oe=P.getParameter(P.UNPACK_ROW_LENGTH),de=P.getParameter(P.UNPACK_IMAGE_HEIGHT),tn=P.getParameter(P.UNPACK_SKIP_PIXELS),Jt=P.getParameter(P.UNPACK_SKIP_ROWS),Tt=P.getParameter(P.UNPACK_SKIP_IMAGES),Pe=T.isCompressedTexture?T.mipmaps[I]:T.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Pe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Pe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Mt),P.pixelStorei(P.UNPACK_SKIP_ROWS,yt),T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,I,Lt,Ut,it,dt,Et,ie,Pe.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,I,Lt,Ut,Pe.width,Pe.height,Et,Pe.data):P.texSubImage2D(P.TEXTURE_2D,I,Lt,Ut,it,dt,Et,ie,Pe),P.pixelStorei(P.UNPACK_ROW_LENGTH,oe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,de),P.pixelStorei(P.UNPACK_SKIP_PIXELS,tn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Tt),I===0&&U.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),bt.unbindTexture()},this.copyTextureToTexture3D=function(T,U,k=null,H=null,I=0){T.isTexture!==!0&&(aa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,T=arguments[2],U=arguments[3],I=arguments[4]||0);let it,dt,Mt,yt,Lt,Ut,Et,ie,oe;const de=T.isCompressedTexture?T.mipmaps[I]:T.image;k!==null?(it=k.max.x-k.min.x,dt=k.max.y-k.min.y,Mt=k.max.z-k.min.z,yt=k.min.x,Lt=k.min.y,Ut=k.min.z):(it=de.width,dt=de.height,Mt=de.depth,yt=0,Lt=0,Ut=0),H!==null?(Et=H.x,ie=H.y,oe=H.z):(Et=0,ie=0,oe=0);const tn=Dt.convert(U.format),Jt=Dt.convert(U.type);let Tt;if(U.isData3DTexture)R.setTexture3D(U,0),Tt=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)R.setTexture2DArray(U,0),Tt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Pe=P.getParameter(P.UNPACK_ROW_LENGTH),Qt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),vn=P.getParameter(P.UNPACK_SKIP_PIXELS),tr=P.getParameter(P.UNPACK_SKIP_ROWS),en=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,de.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,de.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,yt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Lt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ut),T.isDataTexture||T.isData3DTexture?P.texSubImage3D(Tt,I,Et,ie,oe,it,dt,Mt,tn,Jt,de.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Tt,I,Et,ie,oe,it,dt,Mt,tn,de.data):P.texSubImage3D(Tt,I,Et,ie,oe,it,dt,Mt,tn,Jt,de),P.pixelStorei(P.UNPACK_ROW_LENGTH,Pe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Qt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,vn),P.pixelStorei(P.UNPACK_SKIP_ROWS,tr),P.pixelStorei(P.UNPACK_SKIP_IMAGES,en),I===0&&U.generateMipmaps&&P.generateMipmap(Tt),bt.unbindTexture()},this.initRenderTarget=function(T){At.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),bt.unbindTexture()},this.resetState=function(){A=0,w=0,b=null,bt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===$l?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===Da?"display-p3":"srgb"}}class ji extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Vh extends Ts{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ma=new F,Sa=new F,Cu=new ve,Qr=new Kl,Ks=new La,So=new F,Pu=new F;class ux extends $e{constructor(t=new Jn,e=new Vh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ma.fromBufferAttribute(e,r-1),Sa.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ma.distanceTo(Sa);t.setAttribute("lineDistance",new wn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(r),Ks.radius+=s,t.ray.intersectsSphere(Ks)===!1)return;Cu.copy(r).invert(),Qr.copy(t.ray).applyMatrix4(Cu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,d=g-1;_<d;_+=c){const m=u.getX(_),y=u.getX(_+1),x=Zs(this,t,Qr,l,m,y);x&&e.push(x)}if(this.isLineLoop){const _=u.getX(g-1),d=u.getX(p),m=Zs(this,t,Qr,l,_,d);m&&e.push(m)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=p,d=g-1;_<d;_+=c){const m=Zs(this,t,Qr,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=Zs(this,t,Qr,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Zs(i,t,e,n,r,s){const a=i.geometry.attributes.position;if(Ma.fromBufferAttribute(a,r),Sa.fromBufferAttribute(a,s),e.distanceSqToSegment(Ma,Sa,So,Pu)>n)return;So.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(So);if(!(l<t.near||l>t.far))return{distance:l,point:Pu.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Du=new F,Lu=new F;class hx extends ux{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Du.fromBufferAttribute(e,r),Lu.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Du.distanceTo(Lu);t.setAttribute("lineDistance",new wn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Uu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Uu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Uu(){return performance.now()}class Iu{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Oe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class fx extends hx{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Jn;r.setAttribute("position",new wn(e,3)),r.setAttribute("color",new wn(n,3));const s=new Vh({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(t,e,n){const r=new ee,s=this.geometry.attributes.color.array;return r.set(t),r.toArray(s,0),r.toArray(s,3),r.set(e),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class dx extends Ji{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hl);function px(i){let t;return{c(){t=J("main"),t.innerHTML=`<h2>Lesson 3: First Three.js Project</h2> <p>Wee need 4 elements:</p> <ol><li>Scene: like a container in which we put objects, models, particles, 
        lights, etc.</li> <li>Objects: Can be many things like primitive geometries, imported 
        models, particles, lights, etc. Let&#39;s start with a red cube. An
        visible object in ThreeJS is called a Mesh which is a combination of
        geometry (shape) and a material (ex: color)</li> <li>Camera: Theoretical point of view used when rendering. Can have 
        multiple cameras but usually we only use one. Needs two essential 
        parameters: the vertical field of view in degrees and the aspect 
        ratio: the width of canvas divided by height. Adding camera to scene
        is optional but without it we may get bugs.</li> <li>Renderer: Renders the scene from camera pov. The result will be 
        drawn into a canvas. We can create cavnas or let renderer generate
        it and then add it to your page.</li></ol> <p>We can transform objects using position, rotation and scale. We are using
    position to move camera backward. Position has x, y, z. Three.js uses z
    for forward/backward axis. y iz up/down. x is left/right</p> <canvas class="webgl"></canvas>`},m(e,n){Ot(e,t,n)},p:Rt,i:Rt,o:Rt,d(e){e&&Nt(t)}}}function mx(i){const t=new ji,e=new ln(1,1,1),n=new Ln({color:16711680,wireframe:!0}),r=new Re(e,n);t.add(r);const s={width:800,height:600},a=new we(75,s.width/s.height);return a.position.z=3,a.position.y=1,a.position.x=-1,t.add(a),Mi(()=>{const o=document.querySelector("canvas.webgl");console.log(o);const l=new $i({canvas:o});l.setSize(s.width,s.height),l.render(t,a)}),[]}class _x extends He{constructor(t){super(),ke(this,t,mx,px,De,{})}}function gx(i){let t;return{c(){t=J("main"),t.innerHTML=`<h2>Lesson 4: Transform Objects</h2> <p>Four properties to transform objects which can be combined in any order</p> <ol><li>position (to move the object). Inherits from Vector3 which has many 
        useful methods. 
        <ul><li>You can get the length of vector using:<code>mesh.position.length()</code> This represents the distance 
                betweenmesh and the center of the scene. (verify using distance
                formula).</li> <li>You can get the distance from another Object3D or position using <code>mesh.position.distanceTo(camera.position)</code></li> <li><code>normalize()</code> can take length of vector and reduce 
                it to 1. This can be useful for fixing distance of camera or 
                object.</li> <li>Position can be set using <code>position.set(x,y,z)</code></li> <li><a href="https://threejs.org/docs/#api/en/helpers/AxesHelper">AxesHelper</a>
                class can help with adjusting this.</li></ul></li> <li>scale (to resize the object)
        <ul><li>Also has 3 properties: x, y, z. Default values are all 1</li> <li>Can also be used with <code>set()</code></li></ul></li> <li>rotation (to rotate the object)
        <ul><li>Upadting rotation or quaternion will update the other 
                automatically</li> <li>rotation also has x,y,z but it is not a Vector3 but a Euler. So 
                x/y/z is the angle of the x/y/z axis in radians (default is 0).</li> <li>Euler is easy to understand but axis order can be problematic. 
                This is why most engines and 3D software use Quaternion</li></ul></li> <li>quaternion (to also rotate object; more later)
        <ul><li>Express rotation in a more mathematical way. But it is hard to
                imagine. Not covered in this lesson.</li></ul></li></ol> <p>All objects that inherit from Object3D (ex: Mesh and PerspectiveCamera
    from lesson 3) possess these properties. You can see these in
    <a href="https://threejs.org/docs/#api/en/cameras/PerspectiveCamera">docs.</a></p> <p>These properties are compiled in matrices. Which you do not need to 
    understand yet</p> <p>The distance of 1 unit is arbitrary. You should think of 1 according to what
    you are building (1 cm, 1 meter, 1 kilometer, etc.)</p> <p>Object3D instances have a <code>lookAt(...)</code> method which rotates the object that
    its -z faces the farget you provided. The target must be a Vector3</p> <h3>Scene Graph</h3> <p>Sometimes you will create complex objects. For example you can create a
    house with walls, doors, windows, etc. Rather than painfully moving each
    object. What you can do instead is use <code>Group</code> class and just
    apply transformation on entire thing</p> <canvas class="webgl"></canvas>`},m(e,n){Ot(e,t,n)},p:Rt,i:Rt,o:Rt,d(e){e&&Nt(t)}}}function vx(i){const t=new ji,e=new ns;t.add(e);const n=new Re(new ln(1,1,1),new Ln({color:"red",wireframe:!0}));n.position.x=-1,e.add(n);const r=new Re(new ln(1,1,1),new Ln({color:"pink",wireframe:!0}));r.position.x=1,e.add(r);const s=new Re(new ln(1,1,1),new Ln({color:"green",wireframe:!0}));s.position.y=1,e.add(s),e.position.y=1,e.scale.y=.5,e.rotation.y=Math.PI*3/12;const a=new fx(1);t.add(a);const o={width:800,height:600},l=new we(75,o.width/o.height);return l.position.set(-1,-2,3),l.rotation.x=Math.PI/6,l.rotation.y=Math.PI*11/6,t.add(l),Mi(()=>{const c=document.querySelector("canvas.webgl");console.log(c);const u=new $i({canvas:c});u.setSize(o.width,o.height),u.render(t,l)}),[]}class xx extends He{constructor(t){super(),ke(this,t,vx,gx,De,{})}}function Vn(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Xh(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var cn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},kr={duration:.5,overwrite:!1,delay:0},Jl,Be,ce,mn=1e8,ae=1/mn,Ml=Math.PI*2,Mx=Ml/4,Sx=0,qh=Math.sqrt,yx=Math.cos,Ex=Math.sin,Ce=function(t){return typeof t=="string"},pe=function(t){return typeof t=="function"},Kn=function(t){return typeof t=="number"},Ql=function(t){return typeof t>"u"},Nn=function(t){return typeof t=="object"},je=function(t){return t!==!1},tc=function(){return typeof window<"u"},Js=function(t){return pe(t)||Ce(t)},Yh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ze=Array.isArray,Sl=/(?:-?\.?\d|\.)+/gi,$h=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,yr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,yo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,jh=/[+-]=-?[.\d]+/,Kh=/[^,'"\[\]\s]+/gi,Tx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,he,Rn,yl,ec,un={},ya={},Zh,Jh=function(t){return(ya=Ki(t,un))&&Qe},nc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ms=function(t,e){return!e&&console.warn(t)},Qh=function(t,e){return t&&(un[t]=e)&&ya&&(ya[t]=e)||un},_s=function(){return 0},bx={suppressEvents:!0,isStart:!0,kill:!1},la={suppressEvents:!0,kill:!1},wx={suppressEvents:!0},ic={},di=[],El={},tf,sn={},Eo={},Nu=30,ca=[],rc="",sc=function(t){var e=t[0],n,r;if(Nn(e)||pe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=ca.length;r--&&!ca[r].targetTest(e););n=ca[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new bf(t[r],n)))||t.splice(r,1);return t},ki=function(t){return t._gsap||sc(_n(t))[0]._gsap},ef=function(t,e,n){return(n=t[e])&&pe(n)?t[e]():Ql(n)&&t.getAttribute&&t.getAttribute(e)||n},Ke=function(t,e){return(t=t.split(",")).forEach(e)||t},_e=function(t){return Math.round(t*1e5)/1e5||0},Ae=function(t){return Math.round(t*1e7)/1e7||0},Cr=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},Ax=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},Ea=function(){var t=di.length,e=di.slice(0),n,r;for(El={},di.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},nf=function(t,e,n,r){di.length&&!Be&&Ea(),t.render(e,n,r||Be&&e<0&&(t._initted||t._startAt)),di.length&&!Be&&Ea()},rf=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Kh).length<2?e:Ce(t)?t.trim():t},sf=function(t){return t},gn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Rx=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},Ki=function(t,e){for(var n in e)t[n]=e[n];return t},Ou=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Nn(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},Ta=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},ls=function(t){var e=t.parent||he,n=t.keyframes?Rx(ze(t.keyframes)):gn;if(je(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Cx=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},af=function(t,e,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=t[r],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=a,e.parent=e._dp=t,e},Na=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},vi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Hi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Px=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Tl=function(t,e,n,r){return t._startAt&&(Be?t._startAt.revert(la):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},Dx=function i(t){return!t||t._ts&&i(t.parent)},Fu=function(t){return t._repeat?Hr(t._tTime,t=t.duration()+t._rDelay)*t:0},Hr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},ba=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Oa=function(t){return t._end=Ae(t._start+(t._tDur/Math.abs(t._ts||t._rts||ae)||0))},Fa=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ae(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Oa(t),n._dirty||Hi(n,t)),t},of=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ba(t.rawTime(),e),(!e._dur||bs(0,e.totalDuration(),n)-e._tTime>ae)&&e.render(n,!0)),Hi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ae}},Pn=function(t,e,n,r){return e.parent&&vi(e),e._start=Ae((Kn(n)?n:n||t!==he?dn(t,n,e):t._time)+e._delay),e._end=Ae(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),af(t,e,"_first","_last",t._sort?"_start":0),bl(e)||(t._recent=e),r||of(t,e),t._ts<0&&Fa(t,t._tTime),t},lf=function(t,e){return(un.ScrollTrigger||nc("scrollTrigger",e))&&un.ScrollTrigger.create(e,t)},cf=function(t,e,n,r,s){if(oc(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Be&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&tf!==an.frame)return di.push(t),t._lazy=[s,r],1},Lx=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},bl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Ux=function(t,e,n,r){var s=t.ratio,a=e<0||!e&&(!t._start&&Lx(t)&&!(!t._initted&&bl(t))||(t._ts<0||t._dp._ts<0)&&!bl(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=bs(0,t._tDur,e),u=Hr(l,o),t._yoyo&&u&1&&(a=1-a),u!==Hr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Be||r||t._zTime===ae||!e&&t._zTime){if(!t._initted&&cf(t,e,r,n,l))return;for(h=t._zTime,t._zTime=e||(n?ae:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Tl(t,e,n,!0),t._onUpdate&&!n&&on(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&on(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&vi(t,1),!n&&!Be&&(on(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Ix=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Gr=function(t,e,n,r){var s=t._repeat,a=Ae(e)||0,o=t._tTime/t._tDur;return o&&!r&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Ae(a*(s+1)+t._rDelay*s):a,o>0&&!r&&Fa(t,t._tTime=t._tDur*o),t.parent&&Oa(t),n||Hi(t.parent,t),t},Bu=function(t){return t instanceof We?Hi(t):Gr(t,t._dur)},Nx={_start:0,endTime:_s,totalDuration:_s},dn=function i(t,e,n){var r=t.labels,s=t._recent||Nx,a=t.duration()>=mn?s.endTime(!1):t._dur,o,l,c;return Ce(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in r||(r[e]=a),r[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(ze(n)?n[0]:n).totalDuration()),o>1?i(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},cs=function(t,e,n){var r=Kn(e[1]),s=(r?2:1)+(t<2?0:1),a=e[s],o,l;if(r&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=je(l.vars.inherit)&&l.parent;a.immediateRender=je(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Me(e[0],a,e[s+1])},yi=function(t,e){return t||t===0?e(t):e},bs=function(t,e,n){return n<t?t:n>e?e:n},Fe=function(t,e){return!Ce(t)||!(e=Tx.exec(t))?"":e[1]},Ox=function(t,e,n){return yi(n,function(r){return bs(t,e,r)})},wl=[].slice,uf=function(t,e){return t&&Nn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Nn(t[0]))&&!t.nodeType&&t!==Rn},Fx=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return Ce(r)&&!e||uf(r,1)?(s=n).push.apply(s,_n(r)):n.push(r)})||n},_n=function(t,e,n){return ce&&!e&&ce.selector?ce.selector(t):Ce(t)&&!n&&(yl||!Vr())?wl.call((e||ec).querySelectorAll(t),0):ze(t)?Fx(t,n):uf(t)?wl.call(t,0):t?[t]:[]},Al=function(t){return t=_n(t)[0]||ms("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return _n(e,n.querySelectorAll?n:n===t?ms("Invalid scope")||ec.createElement("div"):t)}},hf=function(t){return t.sort(function(){return .5-Math.random()})},ff=function(t){if(pe(t))return t;var e=Nn(t)?t:{each:t},n=Gi(e.ease),r=e.from||0,s=parseFloat(e.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=e.axis,u=r,h=r;return Ce(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],h=r[1]),function(f,p,g){var _=(g||e).length,d=a[_],m,y,x,S,A,w,b,C,L;if(!d){if(L=e.grid==="auto"?0:(e.grid||[1,mn])[1],!L){for(b=-mn;b<(b=g[L++].getBoundingClientRect().left)&&L<_;);L<_&&L--}for(d=a[_]=[],m=l?Math.min(L,_)*u-.5:r%L,y=L===mn?0:l?_*h/L-.5:r/L|0,b=0,C=mn,w=0;w<_;w++)x=w%L-m,S=y-(w/L|0),d[w]=A=c?Math.abs(c==="y"?S:x):qh(x*x+S*S),A>b&&(b=A),A<C&&(C=A);r==="random"&&hf(d),d.max=b-C,d.min=C,d.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(L>_?_-1:c?c==="y"?_/L:L:Math.max(L,_/L))||0)*(r==="edges"?-1:1),d.b=_<0?s-_:s,d.u=Fe(e.amount||e.each)||0,n=n&&_<0?yf(n):n}return _=(d[f]-d.min)/d.max||0,Ae(d.b+(n?n(_):_)*d.v)+d.u}},Rl=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=Ae(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(Kn(n)?0:Fe(n))}},df=function(t,e){var n=ze(t),r,s;return!n&&Nn(t)&&(r=n=t.radius||mn,t.values?(t=_n(t.values),(s=!Kn(t[0]))&&(r*=r)):t=Rl(t.increment)),yi(e,n?pe(t)?function(a){return s=t(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=mn,u=0,h=t.length,f,p;h--;)s?(f=t[h].x-o,p=t[h].y-l,f=f*f+p*p):f=Math.abs(t[h]-o),f<c&&(c=f,u=h);return u=!r||c<=r?t[u]:a,s||u===a||Kn(a)?u:u+Fe(a)}:Rl(t))},pf=function(t,e,n,r){return yi(ze(t)?!e:n===!0?!!(n=0):!r,function(){return ze(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},Bx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,a){return a(s)},r)}},zx=function(t,e){return function(n){return t(parseFloat(n))+(e||Fe(n))}},kx=function(t,e,n){return _f(t,e,0,1,n)},mf=function(t,e,n){return yi(n,function(r){return t[~~e(r)]})},Hx=function i(t,e,n){var r=e-t;return ze(t)?mf(t,i(0,t.length),e):yi(n,function(s){return(r+(s-t)%r)%r+t})},Gx=function i(t,e,n){var r=e-t,s=r*2;return ze(t)?mf(t,i(0,t.length-1),e):yi(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>r?s-a:a)})},gs=function(t){for(var e=0,n="",r,s,a,o;~(r=t.indexOf("random(",e));)a=t.indexOf(")",r),o=t.charAt(r+7)==="[",s=t.substr(r+7,a-r-7).match(o?Kh:Sl),n+=t.substr(e,r-e)+pf(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},_f=function(t,e,n,r,s){var a=e-t,o=r-n;return yi(s,function(l){return n+((l-t)/a*o||0)})},Vx=function i(t,e,n,r){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var a=Ce(t),o={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),a)t={p:t},e={p:e};else if(ze(t)&&!ze(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(i(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=e}else r||(t=Ki(ze(t)?[]:{},t));if(!u){for(l in e)ac.call(o,t,l,"get",e[l]);s=function(g){return uc(g,o)||(a?t.p:t)}}}return yi(n,s)},zu=function(t,e,n){var r=t.labels,s=mn,a,o,l;for(a in r)o=r[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},on=function(t,e,n){var r=t.vars,s=r[e],a=ce,o=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&di.length&&Ea(),o&&(ce=o),u=l?s.apply(c,l):s.call(c),ce=a,u},is=function(t){return vi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Be),t.progress()<1&&on(t,"onInterrupt"),t},Er,gf=[],vf=function(t){if(t)if(t=!t.name&&t.default||t,tc()||t.headless){var e=t.name,n=pe(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:_s,render:uc,add:ac,kill:sM,modifier:rM,rawVars:0},a={targetTest:0,get:0,getSetter:cc,aliases:{},register:0};if(Vr(),t!==r){if(sn[e])return;gn(r,gn(Ta(t,s),a)),Ki(r.prototype,Ki(s,Ta(t,a))),sn[r.prop=e]=r,t.targetTest&&(ca.push(r),ic[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Qh(e,r),t.register&&t.register(Qe,r,Ze)}else gf.push(t)},se=255,rs={aqua:[0,se,se],lime:[0,se,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,se],navy:[0,0,128],white:[se,se,se],olive:[128,128,0],yellow:[se,se,0],orange:[se,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[se,0,0],pink:[se,192,203],cyan:[0,se,se],transparent:[se,se,se,0]},To=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*se+.5|0},xf=function(t,e,n){var r=t?Kn(t)?[t>>16,t>>8&se,t&se]:0:rs.black,s,a,o,l,c,u,h,f,p,g;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),rs[t])r=rs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&se,r&se,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&se,t&se]}else if(t.substr(0,3)==="hsl"){if(r=g=t.match(Sl),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=To(l+1/3,s,a),r[1]=To(l,s,a),r[2]=To(l-1/3,s,a);else if(~t.indexOf("="))return r=t.match($h),n&&r.length<4&&(r[3]=1),r}else r=t.match(Sl)||rs.transparent;r=r.map(Number)}return e&&!g&&(s=r[0]/se,a=r[1]/se,o=r[2]/se,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(a-o)/p+(a<o?6:0):h===a?(o-s)/p+2:(s-a)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Mf=function(t){var e=[],n=[],r=-1;return t.split(pi).forEach(function(s){var a=s.match(yr)||[];e.push.apply(e,a),n.push(r+=a.length+1)}),e.c=n,e},ku=function(t,e,n){var r="",s=(t+r).match(pi),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=xf(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Mf(t),l=n.c,l.join(r)!==u.c.join(r)))for(c=t.replace(pi,"1").split(yr),h=c.length-1;o<h;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(pi),h=c.length-1;o<h;o++)r+=c[o]+s[o];return r+c[h]},pi=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in rs)i+="|"+t+"\\b";return new RegExp(i+")","gi")}(),Wx=/hsl[a]?\(/,Sf=function(t){var e=t.join(" "),n;if(pi.lastIndex=0,pi.test(e))return n=Wx.test(e),t[1]=ku(t[1],n),t[0]=ku(t[0],n,Mf(t[1])),!0},vs,an=function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,h,f,p,g=function _(d){var m=i()-r,y=d===!0,x,S,A,w;if((m>t||m<0)&&(n+=m-e),r+=m,A=r-n,x=A-a,(x>0||y)&&(w=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,a+=x+(x>=s?4:s-x),S=1),y||(l=c(_)),S)for(p=0;p<o.length;p++)o[p](A,f,w,d)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(d){return f/(1e3/(d||60))},wake:function(){Zh&&(!yl&&tc()&&(Rn=yl=window,ec=Rn.document||{},un.gsap=Qe,(Rn.gsapVersions||(Rn.gsapVersions=[])).push(Qe.version),Jh(ya||Rn.GreenSockGlobals||!Rn.gsap&&Rn||{}),gf.forEach(vf)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(d){return setTimeout(d,a-h.time*1e3+1|0)},vs=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),vs=0,c=_s},lagSmoothing:function(d,m){t=d||1/0,e=Math.min(m||33,t)},fps:function(d){s=1e3/(d||240),a=h.time*1e3+s},add:function(d,m,y){var x=m?function(S,A,w,b){d(S,A,w,b),h.remove(x)}:d;return h.remove(d),o[y?"unshift":"push"](x),Vr(),x},remove:function(d,m){~(m=o.indexOf(d))&&o.splice(m,1)&&p>=m&&p--},_listeners:o},h}(),Vr=function(){return!vs&&an.wake()},jt={},Xx=/^[\d.\-M][\d.\-,\s]/,qx=/["']/g,Yx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[r]=isNaN(c)?c.replace(qx,"").trim():+c,r=l.substr(o+1).trim();return e},$x=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},jx=function(t){var e=(t+"").split("("),n=jt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Yx(e[1])]:$x(t).split(",").map(rf)):jt._CE&&Xx.test(t)?jt._CE("",t):n},yf=function(t){return function(e){return 1-t(1-e)}},Ef=function i(t,e){for(var n=t._first,r;n;)n instanceof We?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},Gi=function(t,e){return t&&(pe(t)?t:jt[t]||jx(t))||e},Qi=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},a;return Ke(t,function(o){jt[o]=un[o]=s,jt[a=o.toLowerCase()]=n;for(var l in s)jt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=jt[o+"."+l]=s[l]}),s},Tf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},bo=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Ml*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*Ex((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Tf(o);return s=Ml/s,l.config=function(c,u){return i(t,c,u)},l},wo=function i(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Tf(n);return r.config=function(s){return i(t,s)},r};Ke("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;Qi(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});jt.Linear.easeNone=jt.none=jt.Linear.easeIn;Qi("Elastic",bo("in"),bo("out"),bo());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(o){return o<e?i*o*o:o<n?i*Math.pow(o-1.5/t,2)+.75:o<r?i*(o-=2.25/t)*o+.9375:i*Math.pow(o-2.625/t,2)+.984375};Qi("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Qi("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Qi("Circ",function(i){return-(qh(1-i*i)-1)});Qi("Sine",function(i){return i===1?1:-yx(i*Mx)+1});Qi("Back",wo("in"),wo("out"),wo());jt.SteppedEase=jt.steps=un.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,a=1-ae;return function(o){return((r*bs(0,a,o)|0)+s)*n}}};kr.ease=jt["quad.out"];Ke("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return rc+=i+","+i+"Params,"});var bf=function(t,e){this.id=Sx++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ef,this.set=e?e.getSetter:cc},xs=function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Gr(this,+e.duration,1,1),this.data=e.data,ce&&(this._ctx=ce,ce.data.push(this)),vs||an.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Gr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(Vr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Fa(this,n),!s._dp||s.parent||of(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Pn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ae||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),nf(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Fu(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Fu(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Hr(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-ae?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ba(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ae?0:this._rts,this.totalTime(bs(-Math.abs(this._delay),this._tDur,s),r!==!1),Oa(this),Px(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Vr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ae&&(this._tTime-=ae)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Pn(r,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(je(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ba(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=wx);var r=Be;return Be=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Be=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Bu(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Bu(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(dn(this,n),je(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,je(r))},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ae:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ae,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-ae)},t.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},t.then=function(n){var r=this;return new Promise(function(s){var a=pe(n)?n:sf,o=function(){var c=r.then;r.then=null,pe(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),s(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},t.kill=function(){is(this)},i}();gn(xs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ae,_prom:0,_ps:!1,_rts:1});var We=function(i){Xh(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=je(n.sortChildren),he&&Pn(n.parent||he,Vn(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&lf(Vn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,a){return cs(0,arguments,this),this},e.from=function(r,s,a){return cs(1,arguments,this),this},e.fromTo=function(r,s,a,o){return cs(2,arguments,this),this},e.set=function(r,s,a){return s.duration=0,s.parent=this,ls(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Me(r,s,dn(this,a),1),this},e.call=function(r,s,a){return Pn(this,Me.delayedCall(0,r,s),a)},e.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Me(r,a,dn(this,l)),this},e.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,ls(a).immediateRender=je(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},e.staggerFromTo=function(r,s,a,o,l,c,u,h){return o.startAt=a,ls(o).immediateRender=je(o.immediateRender),this.staggerTo(r,s,o,l,c,u,h)},e.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Ae(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,p,g,_,d,m,y,x,S,A,w,b;if(this!==he&&u>l&&r>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),f=u,S=this._start,x=this._ts,m=!x,h&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,d=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(d*100+r,s,a);if(f=Ae(u%d),u===l?(_=this._repeat,f=c):(_=~~(u/d),_&&_===u/d&&(f=c,_--),f>c&&(f=c)),A=Hr(this._tTime,d),!o&&this._tTime&&A!==_&&this._tTime-A*d-this._dur<=0&&(A=_),w&&_&1&&(f=c-f,b=1),_!==A&&!this._lock){var C=w&&A&1,L=C===(w&&_&1);if(_<A&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(b?0:Ae(_*d)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&on(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,L&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Ef(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Ix(this,Ae(o),Ae(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&f&&!s&&!_&&(on(this,"onStart"),this._tTime!==u))return this;if(f>=o&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&y!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=-ae);break}}p=g}else{p=this._last;for(var v=r<0?r:f;p;){if(g=p._prev,(p._act||v<=p._end)&&p._ts&&y!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(v-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(v-p._start)*p._ts,s,a||Be&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=v?-ae:ae);break}}p=g}}if(y&&!s&&(this.pause(),y.render(f>=o?0:-ae)._zTime=f>=o?1:-1,this._ts))return this._start=S,Oa(this),this.render(r,s,a);this._onUpdate&&!s&&on(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&vi(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(on(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var a=this;if(Kn(s)||(s=dn(this,s,r)),!(r instanceof xs)){if(ze(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Ce(r))return this.addLabel(r,s);if(pe(r))r=Me.delayedCall(0,r);else return this}return this!==r?Pn(this,r,s):this},e.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-mn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Me?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},e.remove=function(r){return Ce(r)?this.removeLabel(r):pe(r)?this.killTweensOf(r):(Na(this,r),r===this._recent&&(this._recent=this._last),Hi(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ae(an.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=dn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,a){var o=Me.delayedCall(0,s||_s,a);return o.data="isPause",this._hasPause=1,Pn(this,o,dn(this,r))},e.removePause=function(r){var s=this._first;for(r=dn(this,r);s;)s._start===r&&s.data==="isPause"&&vi(s),s=s._next},e.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)li!==o[l]&&o[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var a=[],o=_n(r),l=this._first,c=Kn(s),u;l;)l instanceof Me?Ax(l._targets,o)&&(c?(!li||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(r,s){s=s||{};var a=this,o=dn(a,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=Me.to(a,gn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ae,onStart:function(){if(a.pause(),!p){var d=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==d&&Gr(g,d,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(r,s,a){return this.tweenTo(s,gn({startAt:{time:dn(this,r)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),zu(this,dn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),zu(this,dn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ae)},e.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Hi(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Hi(this)},e.totalDuration=function(r){var s=0,a=this,o=a._last,l=mn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Pn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Gr(a,a===he&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(r){if(he._ts&&(nf(he,ba(r,he)),tf=an.frame),an.frame>=Nu){Nu+=cn.autoSleep||120;var s=he._first;if((!s||!s._ts)&&cn.autoSleep&&an._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||an.sleep()}}},t}(xs);gn(We.prototype,{_lock:0,_hasPause:0,_forcing:0});var Kx=function(t,e,n,r,s,a,o){var l=new Ze(this._pt,t,e,0,1,Df,null,s),c=0,u=0,h,f,p,g,_,d,m,y;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=gs(r)),a&&(y=[n,r],a(y,t,e),n=y[0],r=y[1]),f=n.match(yo)||[];h=yo.exec(r);)g=h[0],_=r.substring(c,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(d=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:d,c:g.charAt(1)==="="?Cr(d,g)-d:parseFloat(g)-d,m:p&&p<4?Math.round:0},c=yo.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(jh.test(r)||m)&&(l.e=0),this._pt=l,l},ac=function(t,e,n,r,s,a,o,l,c,u){pe(r)&&(r=r(s||0,t,a));var h=t[e],f=n!=="get"?n:pe(h)?c?t[e.indexOf("set")||!pe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,p=pe(h)?c?eM:Cf:lc,g;if(Ce(r)&&(~r.indexOf("random(")&&(r=gs(r)),r.charAt(1)==="="&&(g=Cr(f,r)+(Fe(f)||0),(g||g===0)&&(r=g))),!u||f!==r||Cl)return!isNaN(f*r)&&r!==""?(g=new Ze(this._pt,t,e,+f||0,r-(f||0),typeof h=="boolean"?iM:Pf,0,p),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!h&&!(e in t)&&nc(e,r),Kx.call(this,t,e,f,r,p,l||cn.stringFilter,c))},Zx=function(t,e,n,r,s){if(pe(t)&&(t=us(t,s,e,n,r)),!Nn(t)||t.style&&t.nodeType||ze(t)||Yh(t))return Ce(t)?us(t,s,e,n,r):t;var a={},o;for(o in t)a[o]=us(t[o],s,e,n,r);return a},wf=function(t,e,n,r,s,a){var o,l,c,u;if(sn[t]&&(o=new sn[t]).init(s,o.rawVars?e[t]:Zx(e[t],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new Ze(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Er))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},li,Cl,oc=function i(t,e,n){var r=t.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,p=r.autoRevert,g=t._dur,_=t._startAt,d=t._targets,m=t.parent,y=m&&m.data==="nested"?m.vars.targets:d,x=t._overwrite==="auto"&&!Jl,S=t.timeline,A,w,b,C,L,v,E,B,N,X,$,z,Y;if(S&&(!f||!s)&&(s="none"),t._ease=Gi(s,kr.ease),t._yEase=h?yf(Gi(h===!0?s:h,kr.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!S&&!!r.runBackwards,!S||f&&!r.stagger){if(B=d[0]?ki(d[0]).harness:0,z=B&&r[B.prop],A=Ta(r,ic),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!p?_.render(-1,!0):_.revert(u&&g?la:bx),_._lazy=0),a){if(vi(t._startAt=Me.set(d,gn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&je(l),startAt:null,delay:0,onUpdate:c&&function(){return on(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Be||!o&&!p)&&t._startAt.revert(la),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(o=!1),b=gn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&je(l),immediateRender:o,stagger:0,parent:m},A),z&&(b[B.prop]=z),vi(t._startAt=Me.set(d,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Be?t._startAt.revert(la):t._startAt.render(-1,!0)),t._zTime=e,!o)i(t._startAt,ae,ae);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&je(l)||l&&!g,w=0;w<d.length;w++){if(L=d[w],E=L._gsap||sc(d)[w]._gsap,t._ptLookup[w]=X={},El[E.id]&&di.length&&Ea(),$=y===d?w:y.indexOf(L),B&&(N=new B).init(L,z||A,t,$,y)!==!1&&(t._pt=C=new Ze(t._pt,L,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(V){X[V]=C}),N.priority&&(v=1)),!B||z)for(b in A)sn[b]&&(N=wf(b,A,t,$,L,y))?N.priority&&(v=1):X[b]=C=ac.call(t,L,b,"get",A[b],$,y,0,r.stringFilter);t._op&&t._op[w]&&t.kill(L,t._op[w]),x&&t._pt&&(li=t,he.killTweensOf(L,X,t.globalTime(e)),Y=!t.parent,li=0),t._pt&&l&&(El[E.id]=1)}v&&Lf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Y,f&&e<=0&&S.render(mn,!0,!0)},Jx=function(t,e,n,r,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,p;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,p=t._targets.length;p--;){if(u=f[p][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Cl=1,t.vars[e]="+=0",oc(t,o),Cl=0,l?ms(e+" not eligible for reset"):1;c.push(u)}for(p=c.length;p--;)h=c[p],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=_e(n)+Fe(h.e)),h.b&&(h.b=u.s+Fe(h.b))},Qx=function(t,e){var n=t[0]?ki(t[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return e;s=Ki({},e);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},tM=function(t,e,n,r){var s=e.ease||r||"power1.inOut",a,o;if(ze(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},us=function(t,e,n,r,s){return pe(t)?t.call(e,n,r,s):Ce(t)&&~t.indexOf("random(")?gs(t):t},Af=rc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Rf={};Ke(Af+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Rf[i]=1});var Me=function(i){Xh(t,i);function t(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:ls(r))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,d=l.scrollTrigger,m=l.yoyoEase,y=r.parent||he,x=(ze(n)||Yh(n)?Kn(n[0]):"length"in r)?[n]:_n(n),S,A,w,b,C,L,v,E;if(o._targets=x.length?sc(x):ms("GSAP target "+n+" not found. https://gsap.com",!cn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||f||Js(c)||Js(u)){if(r=o.vars,S=o.timeline=new We({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:x}),S.kill(),S.parent=S._dp=Vn(o),S._start=0,f||Js(c)||Js(u)){if(b=x.length,v=f&&ff(f),Nn(f))for(C in f)~Af.indexOf(C)&&(E||(E={}),E[C]=f[C]);for(A=0;A<b;A++)w=Ta(r,Rf),w.stagger=0,m&&(w.yoyoEase=m),E&&Ki(w,E),L=x[A],w.duration=+us(c,Vn(o),A,L,x),w.delay=(+us(u,Vn(o),A,L,x)||0)-o._delay,!f&&b===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),S.to(L,w,v?v(A,L,x):0),S._ease=jt.none;S.duration()?c=u=0:o.timeline=0}else if(g){ls(gn(S.vars.defaults,{ease:"none"})),S._ease=Gi(g.ease||r.ease||"none");var B=0,N,X,$;if(ze(g))g.forEach(function(z){return S.to(x,z,">")}),S.duration();else{w={};for(C in g)C==="ease"||C==="easeEach"||tM(C,g[C],w,g.easeEach);for(C in w)for(N=w[C].sort(function(z,Y){return z.t-Y.t}),B=0,A=0;A<N.length;A++)X=N[A],$={ease:X.e,duration:(X.t-(A?N[A-1].t:0))/100*c},$[C]=X.v,S.to(x,$,B),B+=$.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return p===!0&&!Jl&&(li=Vn(o),he.killTweensOf(x),li=0),Pn(y,Vn(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!c&&!g&&o._start===Ae(y._time)&&je(h)&&Dx(Vn(o))&&y.data!=="nested")&&(o._tTime=-ae,o.render(Math.max(0,-u)||0)),d&&lf(Vn(o),d),o}var e=t.prototype;return e.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-ae&&!u?l:r<ae?0:r,f,p,g,_,d,m,y,x,S;if(!c)Ux(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(f=Ae(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===Ae(h/_)&&(f=c,g--),f>c&&(f=c)),m=this._yoyo&&g&1,m&&(S=this._yEase,f=c-f),d=Hr(this._tTime,_),f===o&&!a&&this._initted&&g===d)return this._tTime=h,this;g!==d&&(x&&this._yEase&&Ef(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=a=1,this.render(Ae(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(cf(this,u?r:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==d))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!o&&!s&&!g&&(on(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(y,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Tl(this,r,s,a),on(this,"onUpdate")),this._repeat&&g!==d&&this.vars.onRepeat&&!s&&this.parent&&on(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Tl(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&vi(this,1),!s&&!(u&&!o)&&(h||o||m)&&(on(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,a,o,l){vs||an.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||oc(this,c),u=this._ease(c/this._dur),Jx(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(Fa(this,0),this.parent||af(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?is(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,li&&li.vars.overwrite!==!0)._first||is(this),this.parent&&a!==this.timeline.totalDuration()&&Gr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?_n(r):o,c=this._ptLookup,u=this._pt,h,f,p,g,_,d,m;if((!s||s==="all")&&Cx(o,l))return s==="all"&&(this._pt=0),is(this);for(h=this._op=this._op||[],s!=="all"&&(Ce(s)&&(_={},Ke(s,function(y){return _[y]=1}),s=_),s=Qx(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],s==="all"?(h[m]=s,g=f,p={}):(p=h[m]=h[m]||{},g=s);for(_ in g)d=f&&f[_],d&&((!("kill"in d.d)||d.d.kill(_)===!0)&&Na(this,d,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&is(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return cs(1,arguments)},t.delayedCall=function(r,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(r,s,a){return cs(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,a){return he.killTweensOf(r,s,a)},t}(xs);gn(Me.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ke("staggerTo,staggerFrom,staggerFromTo",function(i){Me[i]=function(){var t=new We,e=wl.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var lc=function(t,e,n){return t[e]=n},Cf=function(t,e,n){return t[e](n)},eM=function(t,e,n,r){return t[e](r.fp,n)},nM=function(t,e,n){return t.setAttribute(e,n)},cc=function(t,e){return pe(t[e])?Cf:Ql(t[e])&&t.setAttribute?nM:lc},Pf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},iM=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Df=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},uc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},rM=function(t,e,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(t,e,n),s=a},sM=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?Na(this,e,"_pt"):e.dep||(n=1),e=r;return!n},aM=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},Lf=function(t){for(var e=t._pt,n,r,s,a;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:a)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:a=e,e=n}t._pt=s},Ze=function(){function i(e,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||Pf,this.d=l||this,this.set=c||lc,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=aM,this.m=n,this.mt=s,this.tween=r},i}();Ke(rc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return ic[i]=1});un.TweenMax=un.TweenLite=Me;un.TimelineLite=un.TimelineMax=We;he=new We({sortChildren:!1,defaults:kr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});cn.stringFilter=Sf;var Vi=[],ua={},oM=[],Hu=0,lM=0,Ao=function(t){return(ua[t]||oM).map(function(e){return e()})},Pl=function(){var t=Date.now(),e=[];t-Hu>2&&(Ao("matchMediaInit"),Vi.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=Rn.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Ao("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Hu=t,Ao("matchMedia"))},Uf=function(){function i(e,n){this.selector=n&&Al(n),this.data=[],this._r=[],this.isReverted=!1,this.id=lM++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){pe(n)&&(s=r,r=n,n=pe);var a=this,o=function(){var c=ce,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Al(s)),ce=a,h=r.apply(a,arguments),pe(h)&&a._r.push(h),ce=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===pe?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var r=ce;ce=null,n(this),ce=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Me&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof We?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Me)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Vi.length;a--;)Vi[a].id===this.id&&Vi.splice(a,1)},t.revert=function(n){this.kill(n||{})},i}(),cM=function(){function i(e){this.contexts=[],this.scope=e,ce&&ce.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){Nn(n)||(n={matches:n});var a=new Uf(0,s||this.scope),o=a.conditions={},l,c,u;ce&&!a.selector&&(a.selector=ce.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=Rn.matchMedia(n[c]),l&&(Vi.indexOf(a)<0&&Vi.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Pl):l.addEventListener("change",Pl)));return u&&r(a,function(h){return a.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),wa={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return vf(r)})},timeline:function(t){return new We(t)},getTweensOf:function(t,e){return he.getTweensOf(t,e)},getProperty:function(t,e,n,r){Ce(t)&&(t=_n(t)[0]);var s=ki(t||{}).get,a=n?sf:rf;return n==="native"&&(n=""),t&&(e?a((sn[e]&&sn[e].get||s)(t,e,n,r)):function(o,l,c){return a((sn[o]&&sn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=_n(t),t.length>1){var r=t.map(function(u){return Qe.quickSetter(u,e,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}t=t[0]||{};var a=sn[e],o=ki(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;Er._pt=0,h.init(t,n?u+n:u,Er,0,[t]),h.render(1,h),Er._pt&&uc(1,Er)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var r,s=Qe.to(t,Ki((r={},r[e]="+=0.1",r.paused=!0,r),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return he.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Gi(t.ease,kr.ease)),Ou(kr,t||{})},config:function(t){return Ou(cn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,a=t.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!sn[o]&&!un[o]&&ms(e+" effect requires "+o+" plugin.")}),Eo[e]=function(o,l,c){return n(_n(o),gn(l||{},s),c)},a&&(We.prototype[e]=function(o,l,c){return this.add(Eo[e](o,Nn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){jt[t]=Gi(e)},parseEase:function(t,e){return arguments.length?Gi(t,e):jt},getById:function(t){return he.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new We(t),r,s;for(n.smoothChildTiming=je(t.smoothChildTiming),he.remove(n),n._dp=0,n._time=n._tTime=he._time,r=he._first;r;)s=r._next,(e||!(!r._dur&&r instanceof Me&&r.vars.onComplete===r._targets[0]))&&Pn(n,r,r._start-r._delay),r=s;return Pn(he,n,0),n},context:function(t,e){return t?new Uf(t,e):ce},matchMedia:function(t){return new cM(t)},matchMediaRefresh:function(){return Vi.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||Pl()},addEventListener:function(t,e){var n=ua[t]||(ua[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ua[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:Hx,wrapYoyo:Gx,distribute:ff,random:pf,snap:df,normalize:kx,getUnit:Fe,clamp:Ox,splitColor:xf,toArray:_n,selector:Al,mapRange:_f,pipe:Bx,unitize:zx,interpolate:Vx,shuffle:hf},install:Jh,effects:Eo,ticker:an,updateRoot:We.updateRoot,plugins:sn,globalTimeline:he,core:{PropTween:Ze,globals:Qh,Tween:Me,Timeline:We,Animation:xs,getCache:ki,_removeLinkedListItem:Na,reverting:function(){return Be},context:function(t){return t&&ce&&(ce.data.push(t),t._ctx=ce),ce},suppressOverwrites:function(t){return Jl=t}}};Ke("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return wa[i]=Me[i]});an.add(We.updateRoot);Er=wa.to({},{duration:0});var uM=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},hM=function(t,e){var n=t._targets,r,s,a;for(r in e)for(s=n.length;s--;)a=t._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=uM(a,r)),a&&a.modifier&&a.modifier(e[r],t,n[s],r))},Ro=function(t,e){return{name:t,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Ce(s)&&(l={},Ke(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}hM(o,s)}}}},Qe=wa.registerPlugin({name:"attr",init:function(t,e,n,r,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Be?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Ro("roundProps",Rl),Ro("modifiers"),Ro("snap",df))||wa;Me.version=We.version=Qe.version="3.12.5";Zh=1;tc()&&Vr();jt.Power0;jt.Power1;jt.Power2;jt.Power3;jt.Power4;jt.Linear;jt.Quad;jt.Cubic;jt.Quart;jt.Quint;jt.Strong;jt.Elastic;jt.Back;jt.SteppedEase;jt.Bounce;jt.Sine;jt.Expo;jt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Gu,ci,Pr,hc,zi,Vu,fc,fM=function(){return typeof window<"u"},Zn={},Ui=180/Math.PI,Dr=Math.PI/180,gr=Math.atan2,Wu=1e8,dc=/([A-Z])/g,dM=/(left|right|width|margin|padding|x)/i,pM=/[\s,\(]\S/,Dn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Dl=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},mM=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},_M=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},gM=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},If=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Nf=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},vM=function(t,e,n){return t.style[e]=n},xM=function(t,e,n){return t.style.setProperty(e,n)},MM=function(t,e,n){return t._gsap[e]=n},SM=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},yM=function(t,e,n,r,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},EM=function(t,e,n,r,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},fe="transform",Je=fe+"Origin",TM=function i(t,e){var n=this,r=this.target,s=r.style,a=r._gsap;if(t in Zn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Dn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Wn(r,o)}):this.tfm[t]=a.x?a[t]:Wn(r,t),t===Je&&(this.tfm.zOrigin=a.zOrigin);else return Dn.transform.split(",").forEach(function(o){return i.call(n,o,e)});if(this.props.indexOf(fe)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Je,e,"")),t=fe}(s||e)&&this.props.push(t,e,s[t])},Of=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},bM=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(dc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=fc(),(!s||!s.isStart)&&!n[fe]&&(Of(n),r.zOrigin&&n[Je]&&(n[Je]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Ff=function(t,e){var n={target:t,props:[],revert:bM,save:TM};return t._gsap||Qe.core.getCache(t),e&&e.split(",").forEach(function(r){return n.save(r)}),n},Bf,Ll=function(t,e){var n=ci.createElementNS?ci.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ci.createElement(t);return n&&n.style?n:ci.createElement(t)},In=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(dc,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,Wr(e)||e,1)||""},Xu="O,Moz,ms,Ms,Webkit".split(","),Wr=function(t,e,n){var r=e||zi,s=r.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Xu[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Xu[a]:"")+t},Ul=function(){fM()&&window.document&&(Gu=window,ci=Gu.document,Pr=ci.documentElement,zi=Ll("div")||{style:{}},Ll("div"),fe=Wr(fe),Je=fe+"Origin",zi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Bf=!!Wr("perspective"),fc=Qe.core.reverting,hc=1)},Co=function i(t){var e=Ll("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,a;if(Pr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),Pr.removeChild(e),this.style.cssText=s,a},qu=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},zf=function(t){var e;try{e=t.getBBox()}catch{e=Co.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Co||(e=Co.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+qu(t,["x","cx","x1"])||0,y:+qu(t,["y","cy","y1"])||0,width:0,height:0}:e},kf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&zf(t))},Zi=function(t,e){if(e){var n=t.style,r;e in Zn&&e!==Je&&(e=fe),n.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(r==="--"?e:e.replace(dc,"-$1").toLowerCase())):n.removeAttribute(e)}},ui=function(t,e,n,r,s,a){var o=new Ze(t._pt,e,n,0,1,a?Nf:If);return t._pt=o,o.b=r,o.e=s,t._props.push(n),o},Yu={deg:1,rad:1,turn:1},wM={grid:1,flex:1},xi=function i(t,e,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=zi.style,l=dM.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",p=r==="%",g,_,d,m;if(r===a||!s||Yu[r]||Yu[a])return s;if(a!=="px"&&!f&&(s=i(t,e,n,"px")),m=t.getCTM&&kf(t),(p||a==="%")&&(Zn[e]||~e.indexOf("adius")))return g=m?t.getBBox()[l?"width":"height"]:t[u],_e(p?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(f?a:r),_=~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===ci||!_.appendChild)&&(_=ci.body),d=_._gsap,d&&p&&d.width&&l&&d.time===an.time&&!d.uncache)return _e(s/d.width*h);if(p&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=h+r,g=t[u],y?t.style[e]=y:Zi(t,e)}else(p||a==="%")&&!wM[In(_,"display")]&&(o.position=In(t,"position")),_===t&&(o.position="static"),_.appendChild(zi),g=zi[u],_.removeChild(zi),o.position="absolute";return l&&p&&(d=ki(_),d.time=an.time,d.width=_[u]),_e(f?g*s/h:g&&s?h/g*s:0)},Wn=function(t,e,n,r){var s;return hc||Ul(),e in Dn&&e!=="transform"&&(e=Dn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Zn[e]&&e!=="transform"?(s=Ss(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ra(In(t,Je))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Aa[e]&&Aa[e](t,e,n)||In(t,e)||ef(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?xi(t,e,s,n)+n:s},AM=function(t,e,n,r){if(!n||n==="none"){var s=Wr(e,t,1),a=s&&In(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=In(t,"borderTopColor"))}var o=new Ze(this._pt,t.style,e,0,1,Df),l=0,c=0,u,h,f,p,g,_,d,m,y,x,S,A;if(o.b=n,o.e=r,n+="",r+="",r==="auto"&&(_=t.style[e],t.style[e]=r,r=In(t,e)||r,_?t.style[e]=_:Zi(t,e)),u=[n,r],Sf(u),n=u[0],r=u[1],f=n.match(yr)||[],A=r.match(yr)||[],A.length){for(;h=yr.exec(r);)d=h[0],y=r.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),d!==(_=f[c++]||"")&&(p=parseFloat(_)||0,S=_.substr((p+"").length),d.charAt(1)==="="&&(d=Cr(p,d)+S),m=parseFloat(d),x=d.substr((m+"").length),l=yr.lastIndex-x.length,x||(x=x||cn.units[e]||S,l===r.length&&(r+=x,o.e+=x)),S!==x&&(p=xi(t,e,_,x)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:p,c:m-p,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=e==="display"&&r==="none"?Nf:If;return jh.test(r)&&(o.e=0),this._pt=o,o},$u={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},RM=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=$u[n]||n,e[1]=$u[r]||r,e.join(" ")},CM=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Zn[o]&&(l=1,o=o==="transformOrigin"?Je:fe),Zi(n,o);l&&(Zi(n,fe),a&&(a.svg&&n.removeAttribute("transform"),Ss(n,1),a.uncache=1,Of(r)))}},Aa={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var a=t._pt=new Ze(t._pt,e,n,0,0,CM);return a.u=r,a.pr=-10,a.tween=s,t._props.push(n),1}}},Ms=[1,0,0,1,0,0],Hf={},Gf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ju=function(t){var e=In(t,fe);return Gf(e)?Ms:e.substr(7).match($h).map(_e)},pc=function(t,e){var n=t._gsap||ki(t),r=t.style,s=ju(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ms:s):(s===Ms&&!t.offsetParent&&t!==Pr&&!n.svg&&(l=r.display,r.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,o=t.nextElementSibling,Pr.appendChild(t)),s=ju(t),l?r.display=l:Zi(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Pr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Il=function(t,e,n,r,s,a){var o=t._gsap,l=s||pc(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,p=l[0],g=l[1],_=l[2],d=l[3],m=l[4],y=l[5],x=e.split(" "),S=parseFloat(x[0])||0,A=parseFloat(x[1])||0,w,b,C,L;n?l!==Ms&&(b=p*d-g*_)&&(C=S*(d/b)+A*(-_/b)+(_*y-d*m)/b,L=S*(-g/b)+A*(p/b)-(p*y-g*m)/b,S=C,A=L):(w=zf(t),S=w.x+(~x[0].indexOf("%")?S/100*w.width:S),A=w.y+(~(x[1]||x[0]).indexOf("%")?A/100*w.height:A)),r||r!==!1&&o.smooth?(m=S-c,y=A-u,o.xOffset=h+(m*p+y*_)-m,o.yOffset=f+(m*g+y*d)-y):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=A,o.smooth=!!r,o.origin=e,o.originIsAbsolute=!!n,t.style[Je]="0px 0px",a&&(ui(a,o,"xOrigin",c,S),ui(a,o,"yOrigin",u,A),ui(a,o,"xOffset",h,o.xOffset),ui(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",S+" "+A)},Ss=function(t,e){var n=t._gsap||new bf(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=In(t,Je)||"0",u,h,f,p,g,_,d,m,y,x,S,A,w,b,C,L,v,E,B,N,X,$,z,Y,V,lt,rt,mt,St,Gt,q,Q;return u=h=f=_=d=m=y=x=S=0,p=g=1,n.svg=!!(t.getCTM&&kf(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[fe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[fe]!=="none"?l[fe]:"")),r.scale=r.rotate=r.translate="none"),b=pc(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),Il(t,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,b)),A=n.xOrigin||0,w=n.yOrigin||0,b!==Ms&&(E=b[0],B=b[1],N=b[2],X=b[3],u=$=b[4],h=z=b[5],b.length===6?(p=Math.sqrt(E*E+B*B),g=Math.sqrt(X*X+N*N),_=E||B?gr(B,E)*Ui:0,y=N||X?gr(N,X)*Ui+_:0,y&&(g*=Math.abs(Math.cos(y*Dr))),n.svg&&(u-=A-(A*E+w*N),h-=w-(A*B+w*X))):(Q=b[6],Gt=b[7],rt=b[8],mt=b[9],St=b[10],q=b[11],u=b[12],h=b[13],f=b[14],C=gr(Q,St),d=C*Ui,C&&(L=Math.cos(-C),v=Math.sin(-C),Y=$*L+rt*v,V=z*L+mt*v,lt=Q*L+St*v,rt=$*-v+rt*L,mt=z*-v+mt*L,St=Q*-v+St*L,q=Gt*-v+q*L,$=Y,z=V,Q=lt),C=gr(-N,St),m=C*Ui,C&&(L=Math.cos(-C),v=Math.sin(-C),Y=E*L-rt*v,V=B*L-mt*v,lt=N*L-St*v,q=X*v+q*L,E=Y,B=V,N=lt),C=gr(B,E),_=C*Ui,C&&(L=Math.cos(C),v=Math.sin(C),Y=E*L+B*v,V=$*L+z*v,B=B*L-E*v,z=z*L-$*v,E=Y,$=V),d&&Math.abs(d)+Math.abs(_)>359.9&&(d=_=0,m=180-m),p=_e(Math.sqrt(E*E+B*B+N*N)),g=_e(Math.sqrt(z*z+Q*Q)),C=gr($,z),y=Math.abs(C)>2e-4?C*Ui:0,S=q?1/(q<0?-q:q):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Gf(In(t,fe)),Y&&t.setAttribute("transform",Y))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(p*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=_e(p),n.scaleY=_e(g),n.rotation=_e(_)+o,n.rotationX=_e(d)+o,n.rotationY=_e(m)+o,n.skewX=y+o,n.skewY=x+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(r[Je]=Ra(c)),n.xOffset=n.yOffset=0,n.force3D=cn.force3D,n.renderTransform=n.svg?DM:Bf?Vf:PM,n.uncache=0,n},Ra=function(t){return(t=t.split(" "))[0]+" "+t[1]},Po=function(t,e,n){var r=Fe(e);return _e(parseFloat(e)+parseFloat(xi(t,"x",n+"px",r)))+r},PM=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Vf(t,e)},Pi="0deg",ts="0px",Di=") ",Vf=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,d=n.transformPerspective,m=n.force3D,y=n.target,x=n.zOrigin,S="",A=m==="auto"&&t&&t!==1||m===!0;if(x&&(h!==Pi||u!==Pi)){var w=parseFloat(u)*Dr,b=Math.sin(w),C=Math.cos(w),L;w=parseFloat(h)*Dr,L=Math.cos(w),a=Po(y,a,b*L*-x),o=Po(y,o,-Math.sin(w)*-x),l=Po(y,l,C*L*-x+x)}d!==ts&&(S+="perspective("+d+Di),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(A||a!==ts||o!==ts||l!==ts)&&(S+=l!==ts||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Di),c!==Pi&&(S+="rotate("+c+Di),u!==Pi&&(S+="rotateY("+u+Di),h!==Pi&&(S+="rotateX("+h+Di),(f!==Pi||p!==Pi)&&(S+="skew("+f+", "+p+Di),(g!==1||_!==1)&&(S+="scale("+g+", "+_+Di),y.style[fe]=S||"translate(0, 0)"},DM=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,d=n.xOffset,m=n.yOffset,y=n.forceCSS,x=parseFloat(a),S=parseFloat(o),A,w,b,C,L;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Dr,c*=Dr,A=Math.cos(l)*h,w=Math.sin(l)*h,b=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=Dr,L=Math.tan(c-u),L=Math.sqrt(1+L*L),b*=L,C*=L,u&&(L=Math.tan(u),L=Math.sqrt(1+L*L),A*=L,w*=L)),A=_e(A),w=_e(w),b=_e(b),C=_e(C)):(A=h,C=f,w=b=0),(x&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(x=xi(p,"x",a,"px"),S=xi(p,"y",o,"px")),(g||_||d||m)&&(x=_e(x+g-(g*A+_*b)+d),S=_e(S+_-(g*w+_*C)+m)),(r||s)&&(L=p.getBBox(),x=_e(x+r/100*L.width),S=_e(S+s/100*L.height)),L="matrix("+A+","+w+","+b+","+C+","+x+","+S+")",p.setAttribute("transform",L),y&&(p.style[fe]=L)},LM=function(t,e,n,r,s){var a=360,o=Ce(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ui:1),c=l-r,u=r+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Wu)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Wu)%a-~~(c/a)*a)),t._pt=f=new Ze(t._pt,e,n,r,c,mM),f.e=u,f.u="deg",t._props.push(n),f},Ku=function(t,e){for(var n in e)t[n]=e[n];return t},UM=function(t,e,n){var r=Ku({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,p,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[fe]=e,o=Ss(n,1),Zi(n,fe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[fe],a[fe]=e,o=Ss(n,1),a[fe]=c);for(l in Zn)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(p=Fe(c),g=Fe(u),h=p!==g?xi(n,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new Ze(t._pt,o,l,h,f-h,Dl),t._pt.u=g||0,t._props.push(l));Ku(o,r)};Ke("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",a=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(o){return t<2?i+o:"border"+o+i});Aa[t>1?"border"+i:i]=function(o,l,c,u,h){var f,p;if(arguments.length<4)return f=a.map(function(g){return Wn(o,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},a.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,p,h)}});var Wf={name:"css",register:Ul,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,h,f,p,g,_,d,m,y,x,S,A,w,b,C;hc||Ul(),this.styles=this.styles||Ff(t),C=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(sn[_]&&wf(_,e,n,r,t,s)))){if(p=typeof u,g=Aa[_],p==="function"&&(u=u.call(n,r,t,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=gs(u)),g)g(this,t,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",pi.lastIndex=0,pi.test(c)||(d=Fe(c),m=Fe(u)),m?d!==m&&(c=xi(t,_,c,m)+m):d&&(u+=d),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,t,s):l[_],Ce(c)&&~c.indexOf("random(")&&(c=gs(c)),Fe(c+"")||c==="auto"||(c+=cn.units[_]||Fe(Wn(t,_))||""),(c+"").charAt(1)==="="&&(c=Wn(t,_))):c=Wn(t,_),f=parseFloat(c),y=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in Dn&&(_==="autoAlpha"&&(f===1&&Wn(t,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,o.visibility),ui(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Dn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Zn,x){if(this.styles.save(_),S||(A=t._gsap,A.renderTransform&&!e.parseTransform||Ss(t,e.parseTransform),w=e.smoothOrigin!==!1&&A.smooth,S=this._pt=new Ze(this._pt,o,fe,0,1,A.renderTransform,A,0,-1),S.dep=1),_==="scale")this._pt=new Ze(this._pt,A,"scaleY",A.scaleY,(y?Cr(A.scaleY,y+h):h)-A.scaleY||0,Dl),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Je,0,o[Je]),u=RM(u),A.svg?Il(t,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&ui(this,A,"zOrigin",A.zOrigin,m),ui(this,o,_,Ra(c),Ra(u)));continue}else if(_==="svgOrigin"){Il(t,u,1,w,0,this);continue}else if(_ in Hf){LM(this,A,_,f,y?Cr(f,y+u):u);continue}else if(_==="smoothOrigin"){ui(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){UM(this,u,t);continue}}else _ in o||(_=Wr(_)||_);if(x||(h||h===0)&&(f||f===0)&&!pM.test(u)&&_ in o)d=(c+"").substr((f+"").length),h||(h=0),m=Fe(u)||(_ in cn.units?cn.units[_]:d),d!==m&&(f=xi(t,_,c,m)),this._pt=new Ze(this._pt,x?A:o,_,f,(y?Cr(f,y+h):h)-f,!x&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?gM:Dl),this._pt.u=m||0,d!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=_M);else if(_ in o)AM.call(this,t,_,c,y?y+u:u);else if(_ in t)this.add(t,_,c||t[_],y?y+u:u,r,s);else if(_!=="parseTransform"){nc(_,u);continue}x||(_ in o?C.push(_,0,o[_]):C.push(_,1,c||t[_])),a.push(_)}}b&&Lf(this)},render:function(t,e){if(e.tween._time||!fc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Wn,aliases:Dn,getSetter:function(t,e,n){var r=Dn[e];return r&&r.indexOf(",")<0&&(e=r),e in Zn&&e!==Je&&(t._gsap.x||Wn(t,"x"))?n&&Vu===n?e==="scale"?SM:MM:(Vu=n||{})&&(e==="scale"?yM:EM):t.style&&!Ql(t.style[e])?vM:~e.indexOf("-")?xM:cc(t,e)},core:{_removeProperty:Zi,_getMatrix:pc}};Qe.utils.checkPrefix=Wr;Qe.core.getStyleSaver=Ff;(function(i,t,e,n){var r=Ke(i+","+t+","+e,function(s){Zn[s]=1});Ke(t,function(s){cn.units[s]="deg",Hf[s]=1}),Dn[r[13]]=i+","+t,Ke(n,function(s){var a=s.split(":");Dn[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ke("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){cn.units[i]="px"});Qe.registerPlugin(Wf);var Nl=Qe.registerPlugin(Wf)||Qe;Nl.core.Tween;function IM(i){let t;return{c(){t=J("main"),t.innerHTML=`<h2>Lesson 5: Animations</h2> <p>Animating is like doing stop motion: move object, take picture, move object,
take picture, move object, etc. Most screens run at 60FPS but not always.
Animation must look the same regardless of framerate. To animate we will put
object movement in a function and call that in
<code>window.requestAnimationFrame(...)</code></p> <h3>requestAnimationFrame(...)</h3> <p>The purpose of requestAnimationFrame is to call the function provided on the
next frame. Unfortunately, the higher the framerate, the faster the animation.
Meaning a 120hz display will show an animation twice as fast as a 60hz display.</p> <h3>Adaption to framerate</h3> <p>We need to know how much time it&#39;s been since the last tick. Use 
<code>Date.now()</code> to get current timestamp.</p> <h3>Using Clock</h3> <p>Three.js has built-in solution named Clock. Another of Clock methods is 
<code>getDelta(...)</code> but do not use it.</p> <canvas id="webgl1"></canvas> <h3>Using a library</h3> <p>If you want to have more control, create tweens (transition from A to B), create
timelines, etc. you can use a library like <code>GSAP</code> (GreenSock library)</p> <p>Create a tween with <code>gsap.to(...)</code>. The first argument is object we
are animating and the second is an object. Object includes attribute of object,
duration, delay.</p> <canvas id="webgl2"></canvas>`},m(e,n){Ot(e,t,n)},p:Rt,i:Rt,o:Rt,d(e){e&&Nt(t)}}}function NM(i){const t=new ji,e=new ln(1,1,1),n=new Ln({color:16711680,wireframe:!0}),r=new Re(e,n);t.add(r);const s={width:800,height:600},a=new we(75,s.width/s.height);a.position.z=3,t.add(a);const o=new ji,l=new Re(e,n);o.add(l);const c=new we(75,s.width/s.height);return c.position.z=3,o.add(c),Mi(()=>{const u=document.querySelector("canvas#webgl1");console.log(u);const h=new $i({canvas:u});h.setSize(s.width,s.height);let f=new Wh;const p=()=>{const m=f.getElapsedTime();a.position.x=Math.sin(m),a.position.y=Math.cos(m),r.position.z=Math.sin(m),r.rotation.x=Math.sin(m),r.rotation.y=Math.cos(m),r.rotation.z=Math.cos(m),a.lookAt(r.position),h.render(t,a),window.requestAnimationFrame(p)};p();const g=document.querySelector("canvas#webgl2");console.log(g);const _=new $i({canvas:g});_.setSize(s.width,s.height),Nl.to(l.position,{duration:1,delay:1,x:2}),Nl.to(l.position,{duration:1,delay:2,x:-2});const d=()=>{_.render(o,c),window.requestAnimationFrame(d)};d()}),[]}class OM extends He{constructor(t){super(),ke(this,t,NM,IM,De,{})}}const Zu={type:"change"},mc={type:"start"},Xf={type:"end"},Qs=new Kl,Ju=new ai,FM=Math.cos(70*jp.DEG2RAD),ye=new F,Xe=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Do=1e-6;class _c extends dx{constructor(t,e=null){super(t,e),this.state=re.NONE,this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:br.ROTATE,MIDDLE:br.DOLLY,RIGHT:br.PAN},this.touches={ONE:Mr.ROTATE,TWO:Mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Yi,this._lastTargetPosition=new F,this._quat=new Yi().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Iu,this._sphericalDelta=new Iu,this._scale=1,this._panOffset=new F,this._rotateStart=new Ht,this._rotateEnd=new Ht,this._rotateDelta=new Ht,this._panStart=new Ht,this._panEnd=new Ht,this._panDelta=new Ht,this._dollyStart=new Ht,this._dollyEnd=new Ht,this._dollyDelta=new Ht,this._dollyDirection=new F,this._mouse=new Ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zM.bind(this),this._onPointerDown=BM.bind(this),this._onPointerUp=kM.bind(this),this._onContextMenu=YM.bind(this),this._onMouseWheel=VM.bind(this),this._onKeyDown=WM.bind(this),this._onTouchStart=XM.bind(this),this._onTouchMove=qM.bind(this),this._onMouseDown=HM.bind(this),this._onMouseMove=GM.bind(this),this._interceptControlDown=$M.bind(this),this._interceptControlUp=jM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zu),this.update(),this.state=re.NONE}update(t=null){const e=this.object.position;ye.copy(e).sub(this.target),ye.applyQuaternion(this._quat),this._spherical.setFromVector3(ye),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Xe:n>Math.PI&&(n-=Xe),r<-Math.PI?r+=Xe:r>Math.PI&&(r-=Xe),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(ye.setFromSpherical(this._spherical),ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ye.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Qs.origin.copy(this.object.position),Qs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qs.direction))<FM?this.object.lookAt(this.target):(Ju.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qs.intersectPlane(Ju,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Do||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Do||this._lastTargetPosition.distanceToSquared(this.target)>Do?(this.dispatchEvent(Zu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xe/60*this.autoRotateSpeed*t:Xe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ye.setFromMatrixColumn(e,0),ye.multiplyScalar(-t),this._panOffset.add(ye)}_panUp(t,e){this.screenSpacePanning===!0?ye.setFromMatrixColumn(e,1):(ye.setFromMatrixColumn(e,0),ye.crossVectors(this.object.up,ye)),ye.multiplyScalar(t),this._panOffset.add(ye)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ye.copy(r).sub(this.target);let s=ye.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function BM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function zM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function kM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xf),this.state=re.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function HM(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case br.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=re.DOLLY;break;case br.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}break;case br.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(mc)}function GM(i){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function VM(i){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(i.preventDefault(),this.dispatchEvent(mc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Xf))}function WM(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function XM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Mr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=re.TOUCH_ROTATE;break;case Mr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case Mr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=re.TOUCH_DOLLY_PAN;break;case Mr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(mc)}function qM(i){switch(this._trackPointer(i),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=re.NONE}}function YM(i){this.enabled!==!1&&i.preventDefault()}function $M(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function KM(i){let t;return{c(){t=J("main"),t.innerHTML=`<h2>Lesson 6: Cameras</h2> <h3>Camera</h3> <p>The <code>Camera</code> class is an abstract class. You don&#39;t use it directly
but you can inherit from it to have access to common properties and methods. The
following classes inherit <code>Camera</code> class.</p> <h3>ArrayCamera</h3> <p>Used to render your scene multiple times by using multiple cameras. Each camera
will render a specific area of the canvas. You can imagine this looking like old
school console multiplayer games where you had to share a split screen.</p> <h3>StereoCamera</h3> <p>Used to render scene through two cameras that mimic eyes to create parallax
effect that will make brain think there is depth. Can use VR headset or 3D
glasses to see result.</p> <h3>CubeCamera</h3> <p>Used to get a render facing each direciton (forward, backward, left, right, up,
down) to create render of surrounding. This can be used to create an environment
map for reflection or a shadow map.</p> <h3>OrthographicCamera</h3> <code>const camera = new THREE.OrthographicCamera(- 1, 1, 1, - 1, 0.1, 100)</code> <p>Used to create orthographic renders of scene <strong>without perspective.</strong> Useful if you make an RTS game like Age of Empire. Elements will have 
same size on screen regardless of distance from camera.</p> <h4>Parameters</h4> <p>Instead of field of view like PerspectiveCamera, we provide how far the camera
can see in each direction (left, right, top, and bottom). Then the near and far.</p> <h3>PerspectiveCamera</h3> <code>const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height,
 1, 100)</code> <p>Used in previous lesson so far. Simulates real-life camera with perspective.</p> <h4>Parameters</h4>
First parameter is vertical field of view in degrees. Second parameter is aspect
ratio dived by the height of the render. Third and fourth params are near and 
far values. Any object or part of the object closer than near or farther than
far will not show up. Do not use extreme near and far values as you will cause 
z-fighting. <a href="https://twitter.com/FreyaHolmer/status/799602767081848832">Example</a> <h3>Custom Controls</h3>
We used OrbitControl in above example

<h3>When to use Built-In vs Custom Controls</h3> <p>Simple, see if built-in controls fit your use case, if not, build your own.</p> <canvas id="webgl1"></canvas>`},m(e,n){Ot(e,t,n)},p:Rt,i:Rt,o:Rt,d(e){e&&Nt(t)}}}function ZM(i){const t={width:800,height:600},e=new ji,n=new Re(new ln(1,1,1,5,5,5),new Ln({color:16711680}));e.add(n);const r=new we(70,t.width/t.height);return r.position.z=3,r.lookAt(n.position),e.add(r),Mi(()=>{const s=document.querySelector("canvas#webgl1"),a=new _c(r,s);a.enableDamping=!0;const o=new $i({canvas:s});o.setSize(t.width,t.height);const l=new Wh,c=()=>{l.getElapsedTime(),a.update(),o.render(e,r),window.requestAnimationFrame(c)};c()}),[]}class JM extends He{constructor(t){super(),ke(this,t,ZM,KM,De,{})}}function QM(i){let t,e,n,r,s,a,o,l,c,u,h,f,p,g,_,d,m,y=window.devicePixelRatio+"",x,S,A,w,b;return{c(){t=J("main"),e=J("h2"),e.textContent="Lesson 7: Fullscreen and Resizing",n=pt(),r=J("h3"),r.textContent="Handling Resize",s=pt(),a=J("p"),a.innerHTML=`Use addEventListener to listen for resize and adjust 
    <code>camera.aspect</code> and <code>render.setSize</code>`,o=pt(),l=J("h3"),l.textContent="Blurry Render",c=pt(),u=J("p"),h=Tn(`Some might see blurry render because you are testing on screen with pixel \r
    ratio greater than 1. You can tell by doing \r
    `),f=J("code"),f.textContent="window.devicePixelRatio",p=Tn(`. Fix blurryness by doing\r
    `),g=J("code"),g.textContent="renderer.setPixelRatio(window.devicePixelRatio)",_=pt(),d=J("br"),m=Tn(`\r
    Your pixel ratio is: window.devicePixelRatio = `),x=Tn(y),S=pt(),A=J("h3"),A.textContent="Handle Full screen",w=pt(),b=J("canvas"),et(b,"id","webgl1")},m(C,L){Ot(C,t,L),G(t,e),G(t,n),G(t,r),G(t,s),G(t,a),G(t,o),G(t,l),G(t,c),G(t,u),G(u,h),G(u,f),G(u,p),G(u,g),G(u,_),G(u,d),G(u,m),G(u,x),G(t,S),G(t,A),G(t,w),G(t,b)},p:Rt,i:Rt,o:Rt,d(C){C&&Nt(t)}}}function tS(i){const t={width:window.innerWidth,height:window.innerHeight},e=new ji,n=new Re(new ln(1,1,1,5,5,5),new Ln({color:16711680}));e.add(n);const r=new we(70,t.width/t.height);return r.position.z=3,r.lookAt(n.position),e.add(r),Mi(()=>{const s=document.querySelector("canvas#webgl1"),a=new _c(r,s);a.enableDamping=!0;const o=new $i({canvas:s,antialias:!0});o.setPixelRatio(Math.min(window.devicePixelRatio),2),o.setSize(t.width,t.height),window.addEventListener("resize",()=>{t.width=window.innerWidth,t.height=window.innerHeight,r.aspect=t.width/t.height,r.updateProjectionMatrix(),o.setPixelRatio(Math.min(window.devicePixelRatio),2),o.setSize(t.width,t.height)}),window.addEventListener("dblclick",()=>{document.fullscreenElement||document.webkitFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():s.requestFullscreen?s.requestFullscreen():s.webkitRequestFullscreen&&s.webkitRequestFullscreen()});const l=()=>{a.update(),o.render(e,r),window.requestAnimationFrame(l)};l()}),[]}class eS extends He{constructor(t){super(),ke(this,t,tS,QM,De,{})}}function nS(i){let t;return{c(){t=J("main"),t.innerHTML='<h2>Lesson 8: Geometries</h2> <canvas id="webgl1"></canvas>'},m(e,n){Ot(e,t,n)},p:Rt,i:Rt,o:Rt,d(e){e&&Nt(t)}}}function iS(i){const t={width:window.innerWidth,height:window.innerHeight},e=new ji,n=new Re(new ln(1,1,1,5,5,5),new Ln({color:16711680}));e.add(n);const r=new we(70,t.width/t.height);return r.position.z=3,r.lookAt(n.position),e.add(r),Mi(()=>{const s=document.querySelector("canvas#webgl1"),a=new _c(r,s);a.enableDamping=!0;const o=new $i({canvas:s,antialias:!0});o.setPixelRatio(Math.min(window.devicePixelRatio),2),o.setSize(t.width,t.height),window.addEventListener("resize",()=>{t.width=window.innerWidth,t.height=window.innerHeight,r.aspect=t.width/t.height,r.updateProjectionMatrix(),o.setPixelRatio(Math.min(window.devicePixelRatio),2),o.setSize(t.width,t.height)}),window.addEventListener("dblclick",()=>{document.fullscreenElement||document.webkitFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():s.requestFullscreen?s.requestFullscreen():s.webkitRequestFullscreen&&s.webkitRequestFullscreen()});const l=()=>{a.update(),o.render(e,r),window.requestAnimationFrame(l)};l()}),[]}class rS extends He{constructor(t){super(),ke(this,t,iS,nS,De,{})}}function Qu(i){let t,e,n,r,s;return{c(){t=J("a"),t.textContent="Home",e=pt(),n=J("a"),n.textContent="threeJS Journey",r=pt(),s=J("a"),s.textContent="Wedding",et(t,"href","#/"),et(t,"class","svelte-141094s"),et(n,"href","#/threeJsJourney"),et(n,"class","svelte-141094s"),et(s,"href","#/wedding"),et(s,"class","svelte-141094s")},m(a,o){Ot(a,t,o),Ot(a,e,o),Ot(a,n,o),Ot(a,r,o),Ot(a,s,o)},d(a){a&&(Nt(t),Nt(e),Nt(n),Nt(r),Nt(s))}}}function th(i){let t,e,n;return{c(){t=J("a"),t.textContent="Home",e=pt(),n=J("a"),n.textContent="threeJS Journey",et(t,"href","#/"),et(t,"class","svelte-141094s"),et(n,"href","#/threeJsJourney"),et(n,"class","svelte-141094s")},m(r,s){Ot(r,t,s),Ot(r,e,s),Ot(r,n,s)},d(r){r&&(Nt(t),Nt(e),Nt(n))}}}function eh(i){let t,e,n,r,s,a,o,l,c;return{c(){t=J("a"),t.textContent="Wedding",e=pt(),n=J("a"),n.textContent="Photos",r=pt(),s=J("a"),s.textContent="Registry",a=pt(),o=J("a"),o.textContent="FAQ",l=pt(),c=J("a"),c.textContent="Style Guide",et(t,"href","#/wedding"),et(t,"class","svelte-141094s"),et(n,"href","#/wedding/photos"),et(n,"class","svelte-141094s"),et(s,"href","#/wedding/registry"),et(s,"class","svelte-141094s"),et(o,"href","#/wedding/FAQ"),et(o,"class","svelte-141094s"),et(c,"href","#/wedding/style-guide"),et(c,"class","svelte-141094s")},m(u,h){Ot(u,t,h),Ot(u,e,h),Ot(u,n,h),Ot(u,r,h),Ot(u,s,h),Ot(u,a,h),Ot(u,o,h),Ot(u,l,h),Ot(u,c,h)},d(u){u&&(Nt(t),Nt(e),Nt(n),Nt(r),Nt(s),Nt(a),Nt(o),Nt(l),Nt(c))}}}function sS(i){let t,e,n=i[0].startsWith("/threeJsJourney"),r,s=i[0].startsWith("/wedding"),a,o,l,c,u=i[0]==="/"&&Qu(),h=n&&th(),f=s&&eh();return l=new xd({props:{routes:i[1]}}),{c(){t=J("nav"),u&&u.c(),e=pt(),h&&h.c(),r=pt(),f&&f.c(),a=pt(),o=J("main"),fs(l.$$.fragment),et(t,"class","svelte-141094s")},m(p,g){Ot(p,t,g),u&&u.m(t,null),G(t,e),h&&h.m(t,null),G(t,r),f&&f.m(t,null),Ot(p,a,g),Ot(p,o,g),Lr(l,o,null),c=!0},p(p,[g]){p[0]==="/"?u||(u=Qu(),u.c(),u.m(t,e)):u&&(u.d(1),u=null),g&1&&(n=p[0].startsWith("/threeJsJourney")),n?h||(h=th(),h.c(),h.m(t,r)):h&&(h.d(1),h=null),g&1&&(s=p[0].startsWith("/wedding")),s?f||(f=eh(),f.c(),f.m(t,null)):f&&(f.d(1),f=null)},i(p){c||(mi(l.$$.fragment,p),c=!0)},o(p){Wi(l.$$.fragment,p),c=!1},d(p){p&&(Nt(t),Nt(a),Nt(o)),u&&u.d(),h&&h.d(),f&&f.d(),Ur(l)}}}function aS(i,t,e){let n;return Qf(i,_d,s=>e(0,n=s)),[n,{"/":yd,"/threeJsJourney":Wd,"/threeJsJourney/chapter3":_x,"/threeJsJourney/chapter4":xx,"/threeJsJourney/chapter5":OM,"/threeJsJourney/chapter6":JM,"/threeJsJourney/chapter7":eS,"/threeJsJourney/chapter8":rS,"/wedding":Pd,"/wedding/photos":Id,"/wedding/registry":Od,"/wedding/FAQ":Bd,"/wedding/RSVP":kd,"/wedding/style-guide":Gd}]}class oS extends He{constructor(t){super(),ke(this,t,aS,sS,De,{})}}new oS({target:document.getElementById("app")});
