import { searchImages, per_page } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { showGalleryMarkup, galleryList } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { showLoader, hideLoader, showBtn, hideBtn } from './js/helpers';
import { loadMoreBtn } from './js/refs';

const simpleLightbox = new SimpleLightbox('.list-gallery a', {
  /* options */
});

searchForm.addEventListener('submit', onSearch);
/* loadMoreBtn.addEventListener('click', onShowMore); */
let query;
let page;
let totalHits;

async function onSearch(event) {
  event.preventDefault();

  query = textInput.value.trim();
  if (!query) {
    return;
  }

  showLoader();
  page = 1;
  try {
    const data = await searchImages(query, page);

    totalHits = data.totalHits;
    if (!data.hits.length) {
      iziToast.error({
        position: 'topCenter',
        backgroundColor: 'red',
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }
    showBtn();
    galleryList.innerHTML = '';
    showGalleryMarkup(data.hits);
    simpleLightbox.refresh();
    updateVisibleBtnStatus();
  } catch (error) {
    console.log(error);
  }
  hideLoader();
}

async function onShowMore() {
  page += 1;

  showLoader();
  updateVisibleBtnStatus();
  try {
    const data = await searchImages(query, page);
    console.log(data);

    showGalleryMarkup(data.hits);
    simpleLightbox.refresh();
    const height = galleryList.firstElementChild.getBoundingClientRect().height;
    scrollBy({
      behavior: 'smooth',
      top: height * 2,
    });
  } catch (error) {
    console.log(error);
  }
  hideLoader();
}

function updateVisibleBtnStatus() {
  let maxPages = Math.ceil(totalHits / per_page);

  let lastPage = maxPages <= page;
  if (!lastPage) {
    showBtn();
  } else {
    hideBtn();
    iziToast.info({
      position: 'topCenter',
      overlay: false,
      message: "We're sorry, but you've reached the end of search results.",
    });
  }
}

let callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      onShowMore();
    }
  });
};
let observer = new IntersectionObserver(callback, {
  rootMargin: '500px',
  threshold: 1.0,
});
observer.observe(loadMoreBtn);
