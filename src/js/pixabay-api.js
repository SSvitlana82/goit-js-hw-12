import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42369519-035bfcd8f925f02ed856cad4b';
export const per_page = 15;

export async function searchImages(q, page) {
  const params = {
    key: API_KEY,
    q: q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page,
  };
  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
