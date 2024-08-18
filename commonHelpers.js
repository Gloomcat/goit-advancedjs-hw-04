var L=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var i=(t,e,s)=>(L(t,e,"read from private field"),s?s.call(t):e.get(t)),h=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},a=(t,e,s,r)=>(L(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s);var w=(t,e,s,r)=>({set _(o){a(t,e,o,s)},get _(){return i(t,e,r)}});import{a as q,i as S,S as b}from"./assets/vendor-3b56a289.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function s(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=s(o);fetch(o.href,l)}})();q.defaults.baseURL="https://pixabay.com";const x=async(t,e)=>{const s={params:{key:"45271330-704da2140a32d702981ddfad2",q:t,safesearch:!0,orientation:"horizontal",page:e,per_page:15}};return q.get("/api",s)};let y=null;const v=()=>{y||(y=new b(".gallery a",{captionsData:"alt",captionDelay:250})),y.refresh()},f=(t,e)=>{e&&t.classList.contains("hidden")?t.classList.remove("hidden"):!e&&!t.classList.contains("hidden")&&t.classList.add("hidden")},M=t=>{let e={titleSize:"16px",titleLineHeight:"24px",titleColor:"#FFF",messageSize:"16px",messageLineHeight:"24px",messageColor:"#FFF",theme:"dark",position:"topRight",title:"Error",backgroundColor:"#EF4040",message:t};S.error(e)},E=(t,e)=>{const s=e.map(r=>`
        <div class='gallery-item'>
            <a href="${r.largeImageURL}" class="gallery-link">
                <img src="${r.previewURL}" alt="${r.tags}" loading="lazy" width="360" height="150"/>
            </a>
            <ul class="info">
                <li class="info-item">
                    <p class="info-category">Likes</p>
                    <p class=>${r.likes}</p>
                </li>
                <li class="info-item">
                    <p class="info-category">Views</p>
                    <p class=>${r.views}</p>
                </li>
                <li class="info-item">
                    <p class="info-category">Comments</p>
                    <p class=>${r.comments}</p>
                </li>
                <li class="info-item">
                    <p class="info-category">Downloads</p>
                    <p class=>${r.downloads}</p>
                </li>
            </ul>
        </div>
        `);t.innerHTML+=s.join(`
`),v()},F=t=>{t.innerHTML="",v()},P=t=>{const r={left:0,top:t.querySelector("div").getBoundingClientRect().height*2,behavior:"smooth"};window.scrollBy(r)};var n,c,u,d,g;class B{constructor(){h(this,n,void 0);h(this,c,void 0);h(this,u,void 0);h(this,d,void 0);h(this,g,void 0);this.form=document.querySelector(".form"),this.loadMoreButton=document.querySelector(".load-more"),a(this,d,document.querySelector(".gallery")),a(this,g,document.querySelector(".loader")),a(this,n,0),a(this,c,0),a(this,u,"")}setupQuery(){const e=this.form.querySelector('input[name="query"]').value.trim();return this.form.reset(),e?(a(this,u,e),!0):(M("Search request should not be empty. Please try again!"),!1)}reset(){F(i(this,d)),f(this.loadMoreButton,!1),a(this,u,""),a(this,n,0),a(this,c,0)}async fetchMore(){f(this.loadMoreButton,!1),f(i(this,g),!0),w(this,n)._++;try{const e=await x(i(this,u),i(this,n));if(e.status!==200)throw new Error(`Failed to load images, error code: ${e.status}`);f(i(this,g),!1);const s=e.data;if(!i(this,c)){const r=parseInt(s.totalHits);a(this,c,Math.floor(r/9)+(r%9>0?1:0))}if(i(this,c)>0)E(i(this,d),s.hits);else throw new Error("Sorry, there are no images matching your search query. Please try again!");i(this,n)===i(this,c)?f(this.loadMoreButton,!1):f(this.loadMoreButton,!0),i(this,n)>1&&P(i(this,d))}catch(e){M(e.message)}}}n=new WeakMap,c=new WeakMap,u=new WeakMap,d=new WeakMap,g=new WeakMap;const m=new B;m.form.addEventListener("submit",t=>{t.preventDefault(),m.reset(),m.setupQuery()&&m.fetchMore()});m.loadMoreButton.addEventListener("click",()=>{m.fetchMore()});
//# sourceMappingURL=commonHelpers.js.map
