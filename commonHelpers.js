import{a as P,S as q,i as f}from"./assets/vendor-527658dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const I="https://pixabay.com/api/",E="42369519-035bfcd8f925f02ed856cad4b";async function g(s,e){const r={key:E,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:50};return(await P.get(I,{params:r})).data}const m=document.querySelector(".list-gallery");function h(s){const e=s.map(r=>{const{webformatURL:l,largeImageURL:t,tags:o,likes:a,views:S,comments:x,downloads:T}=r;return` 
    <li class = "gallery-item">
        <a href="${t}"> <img class = "gallery-image" src="${l}" alt="${o}" />
        <ul class = "gallery-info">
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">likes</h3>
            <p class="gallery-infoText">${a}</p>
          </li>
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">views</h3>
            <p class="gallery-infoText">${S}</p>
          </li>
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">comments</h3>
            <p class="gallery-infoText">${x}</p>
          </li>
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">downloads</h3>
            <p class="gallery-infoText">${T}</p>
          </li>
        </ul>
        </a>
      </li>
        `}).join("");m.insertAdjacentHTML("beforeend",e)}const y=new q(".list-gallery a",{}),u=document.querySelector(".form-input"),M=document.querySelector("#form"),d=document.querySelector(".loader"),c=document.querySelector(".load-more");M.addEventListener("submit",$);c.addEventListener("click",O);let i,n;async function $(s){if(s.preventDefault(),i=u.value.trim(),!i){console.log("заповніть поле");return}console.dir(u),p(),n=1;try{const e=await g(i,n);console.log(e),e.hits.length||f.error({position:"topCenter",backgroundColor:"red",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),m.innerHTML="",h(e.hits),y.refresh(),v()}catch(e){console.log(e)}L()}console.log(d.classList);console.log(c.classList);async function O(s){n+=1,console.log("hello"),p(),b();try{const e=await g(i,n);console.log(e),h(e.hits),y.refresh()}catch(e){console.log(e)}L(),w(),v()}function p(){d.classList.remove("hidden")}function L(){d.classList.add("hidden")}function b(){c.classList.remove("load-more")}function w(){c.classList.add("load-more")}function v(){Math.ceil(data.totalHits/data.hits.length)===n?(w(),f.show({position:"topCenter",overlay:!1,color:"White",backgroundColor:"black",message:"We're sorry, but you've reached the end of search results."})):b()}
//# sourceMappingURL=commonHelpers.js.map
