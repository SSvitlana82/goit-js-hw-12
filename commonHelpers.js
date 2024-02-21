import{a as T,S as x,i as u}from"./assets/vendor-527658dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const P="https://pixabay.com/api/",q="42369519-035bfcd8f925f02ed856cad4b",f=15;async function m(o,e){const s={key:q,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:f};return(await T.get(P,{params:s})).data}const c=document.querySelector(".list-gallery");function I(o){const{webformatURL:e,largeImageURL:s,tags:l,likes:t,views:r,comments:a,downloads:S}=o;return` 
    <li class = "gallery-item">
        <a href="${s}"> <img class = "gallery-image" src="${e}" alt="${l}" />
        <ul class = "gallery-info">
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">likes</h3>
            <p class="gallery-infoText">${t}</p>
          </li>
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">views</h3>
            <p class="gallery-infoText">${r}</p>
          </li>
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">comments</h3>
            <p class="gallery-infoText">${a}</p>
          </li>
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">downloads</h3>
            <p class="gallery-infoText">${S}</p>
          </li>
        </ul>
        </a>
      </li>
        `}function g(o){const e=o.map(I).join("");c.insertAdjacentHTML("beforeend",e)}const h=new x(".list-gallery a",{}),E=document.querySelector(".form-input"),B=document.querySelector("#form"),y=document.querySelector(".loader"),d=document.querySelector(".load-more");B.addEventListener("submit",M);d.addEventListener("click",$);let n,i,p;async function M(o){if(o.preventDefault(),n=E.value.trim(),!!n){L(),i=1;try{const e=await m(n,i);p=e.totalHits,e.hits.length||u.error({position:"topCenter",backgroundColor:"red",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),w(),c.innerHTML="",g(e.hits),h.refresh(),v()}catch(e){console.log(e)}b()}}async function $(){i+=1,L(),v();try{const o=await m(n,i);console.log(o),g(o.hits),h.refresh();const e=c.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:e*2})}catch(o){console.log(o)}b()}function L(){y.classList.remove("hidden")}function b(){y.classList.add("hidden")}function w(){d.classList.remove("hidden")}function O(){d.classList.add("hidden")}function v(){Math.ceil(p/f)<=i?(O(),u.info({position:"topCenter",overlay:!1,message:"We're sorry, but you've reached the end of search results."})):w()}
//# sourceMappingURL=commonHelpers.js.map
