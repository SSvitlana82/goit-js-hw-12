import { loaderElem, loadMoreBtn } from './refs';

export function showLoader() {
  loaderElem.classList.remove('hidden');
}
export function hideLoader() {
  loaderElem.classList.add('hidden');
}
export function showBtn() {
  loadMoreBtn.classList.remove('hidden');
}
export function hideBtn() {
  loadMoreBtn.classList.add('hidden');
}
