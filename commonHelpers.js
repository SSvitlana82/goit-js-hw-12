import{a as f,S as h,i as p}from"./assets/vendor-527658dd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",y="42369519-035bfcd8f925f02ed856cad4b";function L(i){const r=`?key=${y}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`,o=`${g}${r}`;return f.get(o).then(s=>s.data).catch(s=>{console.log(s)})}const c=document.querySelector(".list-gallery");function b(i){const r=i.map(o=>{const{webformatURL:s,largeImageURL:e,tags:t,likes:l,views:u,comments:d,downloads:m}=o;return` 
    <li class = "gallery-item">
        <a href="${e}"> <img src="${s}" alt="${t}" />
        <ul class = "image-desc">
          <li>
            <h3 class = "image-desc-label">likes</h3>
            <p>${l}</p>
          </li>
          <li>
            <h3 class = "image-desc-label">views</h3>
            <p>${u}</p>
          </li>
          <li>
            <h3 class = "image-desc-label">comments</h3>
            <p>${d}</p>
          </li>
          <li>
            <h3 class = "image-desc-label">downloads</h3>
            <p>${m}</p>
          </li>
        </ul>
        </a>
      </li>
        `}).join("");c.insertAdjacentHTML("beforeend",r)}const $=new h(".list-gallery a",{}),n=document.querySelector(".form-input"),S=document.querySelector("#form"),a=document.querySelector(".loader");S.addEventListener("submit",v);function v(i){i.preventDefault();const r=n.value.trim();if(!r){console.log("заповніть поле");return}console.dir(n),w(),L(r).then(o=>{console.log(o),o.hits.length||p.error({position:"topCenter",backgroundColor:"red",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="",b(o.hits),$.refresh()}).catch(o=>{console.log(o)}).finally(()=>{q()})}function w(){a.classList.remove("hidden")}function q(){a.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
