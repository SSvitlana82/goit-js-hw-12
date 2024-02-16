export const galleryList = document.querySelector('.list-gallery');
export function showGalleryMarkup(dataArray) {
  const markup = dataArray
    .map(item => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = item;
      return ` 
    <li class = "gallery-item">
        <a href="${largeImageURL}"> <img class = "gallery-image" src="${webformatURL}" alt="${tags}" />
        <ul class = "gallery-info">
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">likes</h3>
            <p class="gallery-infoText">${likes}</p>
          </li>
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">views</h3>
            <p class="gallery-infoText">${views}</p>
          </li>
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">comments</h3>
            <p class="gallery-infoText">${comments}</p>
          </li>
          <li class = "gallery-infoItem">
            <h3 class = "gallery-infoTitle">downloads</h3>
            <p class="gallery-infoText">${downloads}</p>
          </li>
        </ul>
        </a>
      </li>
        `;
    })
    .join('');
  galleryList.insertAdjacentHTML('beforeend', markup);
}
