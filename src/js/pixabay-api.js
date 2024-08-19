import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchPhotos = async (query, page) => {
  const config = {
    params: {
      key: '45271330-704da2140a32d702981ddfad2',
      q: query,
      image_type: 'photo',
      safesearch: true,
      orientation: 'horizontal',
      page: page,
      per_page: 15,
    },
  };

  return axios.get('/', config);
};
