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

searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  const value = textInput.value.trim();
  if (!value) {
    console.log('заповніть поле');
    return;
  }
  console.dir(textInput);
  showLoader();
  searchImages(value)
    .then(data => {
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
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });
}
function showLoader() {
  loaderElem.classList.remove('hidden');
}
function hideLoader() {
  loaderElem.classList.add('hidden');
}
