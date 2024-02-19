import searchImages from './js/pixabay-api';
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
async function onSearch(event) {
  event.preventDefault();
  query = textInput.value.trim();
  if (!query) {
    console.log('заповніть поле');
    return;
  }
  console.dir(textInput);
  showLoader();
  page = 1;
  try {
    const data = await searchImages(query, page);
    console.log(data);
    if (!data.hits.length) {
      iziToast.error({
        position: 'topCenter',
        backgroundColor: 'red',
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }
    galleryList.innerHTML = '';
    showGalleryMarkup(data.hits);
    simpleLightbox.refresh();
  } catch (error) {
    console.log(error);
  }
  hideLoader();
}
console.log(loadMoreBtn);
async function onShowMore(event) {
  page += 1;
  console.log('hello');
  showLoader();
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
  loadMoreBtn.remove('hidden');
}
function hideBtn() {
  loadMoreBtn.add('hidden');
}

function updateVisibleBtnStatus() {
  let maxPages = Math.ceil(data.hits / page);

  let lastPage = maxPages === data.hits;
  if (!lastPage) {
    showBtn();
  } else {
    hideBtn();
    /*  iziToast.info {
      position: 'topCenter',
      overlay: false,
      color: 'White',
      backgroundColor: 'black'
      message: "We're sorry, but you've reached the end of search results.",
    } */
  }
  updateVisibleBtnStatus();
}
