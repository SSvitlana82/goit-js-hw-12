import{a as T,S as x,i as d}from"./assets/vendor-527658dd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const P="https://pixabay.com/api/",q="42369519-035bfcd8f925f02ed856cad4b",u=15;async function f(o,t){const s={key:q,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:u};return(await T.get(P,{params:s})).data}const m=document.querySelector(".list-gallery");function I(o){const{webformatURL:t,largeImageURL:s,tags:a,likes:e,views:r,comments:l,downloads:v}=o;return` 
    <li class = "gallery-item">
        <a href="${s}"> <img class = "gallery-image" src="${t}" alt="${a}" />
        <ul class = "gallery-info">
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">likes</h3>
            <p class="gallery-infoText">${e}</p>
          </li>
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">views</h3>
            <p class="gallery-infoText">${r}</p>
          </li>
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">comments</h3>
            <p class="gallery-infoText">${l}</p>
          </li>
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">downloads</h3>
            <p class="gallery-infoText">${v}</p>
          </li>
        </ul>
        </a>
      </li>
        `}function g(o){const t=o.map(I).join("");m.insertAdjacentHTML("beforeend",t)}const y=new x(".list-gallery a",{}),E=document.querySelector(".form-input"),M=document.querySelector("#form"),h=document.querySelector(".loader"),c=document.querySelector(".load-more");M.addEventListener("submit",$);c.addEventListener("click",O);let n,i,p;async function $(o){if(o.preventDefault(),n=E.value.trim(),!!n){L(),i=1;try{const t=await f(n,i);p=t.totalHits,t.hits.length||d.error({position:"topCenter",backgroundColor:"red",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),w(),m.innerHTML="",g(t.hits),y.refresh(),S()}catch(t){console.log(t)}b()}}async function O(){i+=1,L(),S();try{const o=await f(n,i);console.log(o),g(o.hits),y.refresh()}catch(o){console.log(o)}b()}function L(){h.classList.remove("hidden")}function b(){h.classList.add("hidden")}function w(){c.classList.remove("hidden")}function B(){c.classList.add("hidden")}function S(){Math.ceil(p/u)<=i?(B(),d.info({position:"topCenter",overlay:!1,message:"We're sorry, but you've reached the end of search results."})):w()}
//# sourceMappingURL=commonHelpers.js.map
