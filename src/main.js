import { searchImages, per_page } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { showGalleryMarkup, galleryList } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const simpleLightbox = new SimpleLightbox('.list-gallery a', {
  /* options */
});

const textInput = document.querySelector('.form-input');
const searchForm = document.querySelector('#form');
const loaderElem = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

searchForm.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onShowMore);
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
  } catch (error) {
    console.log(error);
  }
  hideLoader();
}

function showLoader() {
  loaderElem.classList.remove('hidden');
}
function hideLoader() {
  loaderElem.classList.add('hidden');
}
function showBtn() {
  loadMoreBtn.classList.remove('hidden');
}
function hideBtn() {
  loadMoreBtn.classList.add('hidden');
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
