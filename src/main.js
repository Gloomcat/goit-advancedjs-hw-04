import { fetchPhotos } from './js/pixabay-api';
import {
  clearGallery,
  fillGallery,
  scrollGallery,
  showErrorMessage,
  showElement,
} from './js/render-functions';

class GalleryController {
  #currentPage;
  #totalPages;
  #query;
  #gallery;
  #loader;

  constructor() {
    this.form = document.querySelector('.form');
    this.loadMoreButton = document.querySelector('.load-more');
    this.#gallery = document.querySelector('.gallery');
    this.#loader = document.querySelector('.loader');

    this.#currentPage = 0;
    this.#totalPages = 0;
    this.#query = '';
  }

  setupQuery() {
    const q = this.form.querySelector('input[name="query"]').value.trim();
    this.form.reset();
    if (!q) {
      showErrorMessage('Search request should not be empty. Please try again!');
      return false;
    }

    this.#query = q;
    return true;
  }

  reset() {
    clearGallery(this.#gallery);

    showElement(this.loadMoreButton, false);

    this.#query = '';
    this.#currentPage = 0;
    this.#totalPages = 0;
  }

  async fetchMore() {
    showElement(this.loadMoreButton, false);
    showElement(this.#loader, true);

    this.#currentPage++;

    try {
      const data = await fetchPhotos(this.#query, this.#currentPage);
      if (data.status !== 200) {
        throw new Error(`Failed to load images, error code: ${data.status}`);
      }

      showElement(this.#loader, false);

      const photosData = data.data;
      if (!this.#totalPages) {
        const total = parseInt(photosData.totalHits);
        this.#totalPages = Math.floor(total / 9) + (total % 9 > 0 ? 1 : 0);
      }

      if (this.#totalPages > 0) {
        fillGallery(this.#gallery, photosData.hits);
      } else {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }

      if (this.#currentPage === this.#totalPages) {
        showElement(this.loadMoreButton, false);
      } else {
        showElement(this.loadMoreButton, true);
      }

      if (this.#currentPage > 1) {
        scrollGallery(this.#gallery);
      }
    } catch (error) {
      showErrorMessage(error.message);
    }
  }
}

const galleryController = new GalleryController();

galleryController.form.addEventListener('submit', event => {
  event.preventDefault();

  galleryController.reset();
  if (galleryController.setupQuery()) {
    galleryController.fetchMore();
  }
});

galleryController.loadMoreButton.addEventListener('click', () => {
  galleryController.fetchMore();
});
