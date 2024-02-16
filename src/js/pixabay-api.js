import axios from 'axios';
//https://pixabay.com/api/?key=42369519-035bfcd8f925f02ed856cad4b&q=yellow+flowers&image_type=photo&pretty=true
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42369519-035bfcd8f925f02ed856cad4b';

export default function searchImages(q) {
  const params = `?key=${API_KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true`;
  const url = `${BASE_URL}${params}`;
  return axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
}
