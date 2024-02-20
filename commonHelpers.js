import{a as S,S as T,i as v}from"./assets/vendor-527658dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(o){if(o.ep)return;o.ep=!0;const t=s(o);fetch(o.href,t)}})();const q="https://pixabay.com/api/",x="42369519-035bfcd8f925f02ed856cad4b";async function f(r,e){const s={key:x,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15};return(await S.get(q,{params:s})).data}const u=document.querySelector(".list-gallery");function g(r){const e=r.map(s=>{const{webformatURL:l,largeImageURL:o,tags:t,likes:a,views:L,comments:w,downloads:b}=s;return` 
    <li class = "gallery-item">
        <a href="${o}"> <img class = "gallery-image" src="${l}" alt="${t}" />
        <ul class = "gallery-info">
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">likes</h3>
            <p class="gallery-infoText">${a}</p>
          </li>
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">views</h3>
            <p class="gallery-infoText">${L}</p>
          </li>
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">comments</h3>
            <p class="gallery-infoText">${w}</p>
          </li>
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">downloads</h3>
            <p class="gallery-infoText">${b}</p>
          </li>
        </ul>
        </a>
      </li>
        `}).join("");u.insertAdjacentHTML("beforeend",e)}const m=new T(".list-gallery a",{}),d=document.querySelector(".form-input"),I=document.querySelector("#form"),c=document.querySelector(".loader"),y=document.querySelector(".load-more");I.addEventListener("submit",E);y.addEventListener("click",$);let n,i;async function E(r){if(r.preventDefault(),n=d.value.trim(),!n){console.log("заповніть поле");return}console.dir(d),p(),i=1;try{const e=await f(n,i);console.log(e),e.hits.length||v.error({position:"topCenter",backgroundColor:"red",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),u.innerHTML="",g(e.hits),m.refresh()}catch(e){console.log(e)}h()}console.log(c.classList);console.log(y.classList);async function $(r){i+=1,console.log("hello"),p();try{const e=await f(n,i);console.log(e),g(e.hits),m.refresh()}catch(e){console.log(e)}h()}function p(){c.classList.remove("hidden")}function h(){c.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
