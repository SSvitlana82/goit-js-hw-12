import{a as T,S as x,i as g}from"./assets/vendor-527658dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const q="https://pixabay.com/api/",I="42369519-035bfcd8f925f02ed856cad4b";async function m(s,e){const r={key:I,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15};return(await T.get(q,{params:r})).data}const h=document.querySelector(".list-gallery");function y(s){const e=s.map(r=>{const{webformatURL:l,largeImageURL:t,tags:o,likes:a,views:w,comments:v,downloads:S}=r;return` 
    <li class = "gallery-item">
        <a href="${t}"> <img class = "gallery-image" src="${l}" alt="${o}" />
        <ul class = "gallery-info">
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">likes</h3>
            <p class="gallery-infoText">${a}</p>
          </li>
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">views</h3>
            <p class="gallery-infoText">${w}</p>
          </li>
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">comments</h3>
            <p class="gallery-infoText">${v}</p>
          </li>
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">downloads</h3>
            <p class="gallery-infoText">${S}</p>
          </li>
        </ul>
        </a>
      </li>
        `}).join("");h.insertAdjacentHTML("beforeend",e)}const p=new x(".list-gallery a",{}),u=document.querySelector(".form-input"),P=document.querySelector("#form"),d=document.querySelector(".loader"),c=document.querySelector(".load-more");P.addEventListener("submit",E);c.addEventListener("click",M);let n,i;async function E(s){if(s.preventDefault(),n=u.value.trim(),!n){console.log("заповніть поле");return}console.dir(u),L(),i=1;try{const e=await m(n,i);console.log(e),e.hits.length||g.error({position:"topCenter",backgroundColor:"red",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),h.innerHTML="",y(e.hits),p.refresh()}catch(e){console.log(e)}b()}console.log(d.classList);console.log(c.classList);async function M(s){i+=1,console.log("hello"),L(),f();try{const e=await m(n,i);console.log(e),y(e.hits),p.refresh()}catch(e){console.log(e)}b(),console.log(f())}function L(){d.classList.remove("hidden")}function b(){d.classList.add("hidden")}function $(){c.classList.remove("load-more")}function O(){c.classList.add("load-more")}function f(){let s=Math.ceil(data.totalHits/data.hits.length);console.log(s),s===data.totalHits?(O(),g.show({position:"topCenter",overlay:!1,color:"White",backgroundColor:"black",message:"We're sorry, but you've reached the end of search results."})):$()}
//# sourceMappingURL=commonHelpers.js.map
