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
        <a href="${largeImageURL}"> <img src="${webformatURL}" alt="${tags}" />
        <ul class = "image-desc">
          <li>
            <h3 class = "image-desc-label">likes</h3>
            <p>${likes}</p>
          </li>
          <li>
            <h3 class = "image-desc-label">views</h3>
            <p>${views}</p>
          </li>
          <li>
            <h3 class = "image-desc-label">comments</h3>
            <p>${comments}</p>
          </li>
          <li>
            <h3 class = "image-desc-label">downloads</h3>
            <p>${downloads}</p>
          </li>
        </ul>
        </a>
      </li>
        `;
    })
    .join('');
  galleryList.insertAdjacentHTML('beforeend', markup);
}
