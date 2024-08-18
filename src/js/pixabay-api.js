import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

export const fetchPhotos = async (query, page) => {
  const config = {
    params: {
      key: '45271330-704da2140a32d702981ddfad2',
      q: query,
      safesearch: true,
      orientation: 'horizontal',
      page: page,
      per_page: 15,
    },
  };

  return axios.get('/api', config);
  // return fetch(
  //   `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
  //     query
  //   )}&orientation=horizontal&safesearch=true&per_page=9&page=${page}`
  // )
};
