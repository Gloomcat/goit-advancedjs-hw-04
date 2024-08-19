var w=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var i=(t,e,s)=>(w(t,e,"read from private field"),s?s.call(t):e.get(t)),h=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},a=(t,e,s,r)=>(w(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s);var b=(t,e,s,r)=>({set _(o){a(t,e,o,s)},get _(){return i(t,e,r)}});import{a as M,i as v,S}from"./assets/vendor-3b56a289.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function s(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=s(o);fetch(o.href,l)}})();M.defaults.baseURL="https://pixabay.com/api";const F=async(t,e)=>{const s={params:{key:"45271330-704da2140a32d702981ddfad2",q:t,image_type:"photo",safesearch:!0,orientation:"horizontal",page:e,per_page:15}};return M.get("/",s)};let y=null;const q=()=>{y||(y=new S(".gallery a",{captionsData:"alt",captionDelay:250})),y.refresh()},d=(t,e)=>{e&&t.classList.contains("hidden")?t.classList.remove("hidden"):!e&&!t.classList.contains("hidden")&&t.classList.add("hidden")},L=(t,e)=>{let s={titleSize:"16px",titleLineHeight:"24px",titleColor:"#FFF",messageSize:"16px",messageLineHeight:"24px",messageColor:"#FFF",theme:"dark",position:"topRight",message:t};e=="error"?(s.title="Error",s.backgroundColor="#EF4040",v.error(s)):e=="info"&&(s.title="Info",s.backgroundColor="#4E75FF",v.info(s))},x=(t,e)=>{const s=e.map(r=>`
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
`),q()},E=t=>{t.innerHTML="",q()},P=t=>{const r={left:0,top:t.querySelector("div").getBoundingClientRect().height*2,behavior:"smooth"};window.scrollBy(r)};var n,c,u,f,g;class B{constructor(){h(this,n,void 0);h(this,c,void 0);h(this,u,void 0);h(this,f,void 0);h(this,g,void 0);this.form=document.querySelector(".form"),this.loadMoreButton=document.querySelector(".load-more"),a(this,f,document.querySelector(".gallery")),a(this,g,document.querySelector(".loader")),a(this,n,0),a(this,c,0),a(this,u,"")}setupQuery(){const e=this.form.querySelector('input[name="query"]').value.trim();return this.form.reset(),e?(a(this,u,e),!0):(L("Search request should not be empty. Please try again!","error"),!1)}reset(){E(i(this,f)),d(this.loadMoreButton,!1),a(this,u,""),a(this,n,0),a(this,c,0)}async fetchMore(){d(this.loadMoreButton,!1),d(i(this,g),!0),b(this,n)._++;try{const e=await F(i(this,u),i(this,n));if(e.status!==200)throw new Error(`Failed to load images, error code: ${e.status}`);d(i(this,g),!1);const s=e.data;if(!i(this,c)){const r=parseInt(s.totalHits);a(this,c,Math.floor(r/15)+(r%15>0?1:0))}if(i(this,c)>0)x(i(this,f),s.hits);else throw new Error("Sorry, there are no images matching your search query. Please try again!");i(this,n)===i(this,c)?(d(this.loadMoreButton,!1),L("We're sorry, but you've reached the end of search results.","info")):d(this.loadMoreButton,!0),i(this,n)>1&&P(i(this,f))}catch(e){L(e.message,"error")}}}n=new WeakMap,c=new WeakMap,u=new WeakMap,f=new WeakMap,g=new WeakMap;const m=new B;m.form.addEventListener("submit",t=>{t.preventDefault(),m.reset(),m.setupQuery()&&m.fetchMore()});m.loadMoreButton.addEventListener("click",()=>{m.fetchMore()});
//# sourceMappingURL=commonHelpers.js.map
