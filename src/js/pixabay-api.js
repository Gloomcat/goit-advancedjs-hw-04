import { showErrorMessage } from './render-functions';

const API_KEY = '45271330-704da2140a32d702981ddfad2';

export const fetchPhotos = (query, page) => {
  return fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
      query
    )}&orientation=horizontal&safesearch=true&per_page=9&page=${page}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(
          `Failed to load images, error code: ${response.status}`
        );
      }

      return response.json();
    })
    .catch(error => {
      showErrorMessage(error.message);
    });
};
