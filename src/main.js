import { fetchPhotos } from './js/pixabay-api';
import {
  clearGallery,
  fillGallery,
  toggleLoader,
  showErrorMessage,
  showElement,
} from './js/render-functions';

class GalleryController {
  #currentPage;
  #totalPages;
  #query;
  #gallery;
  #loader;
  #pageCounter;

  constructor() {
    this.form = document.querySelector('.form');
    this.leftArrow = document.querySelector('.left');
    this.rightArrow = document.querySelector('.right');
    this.#gallery = document.querySelector('.gallery');
    this.#loader = document.querySelector('.loader');
    this.#pageCounter = document.querySelector('.page');

    this.#currentPage = 0;
    this.#totalPages = 0;
    this.#query = '';
  }

  fetchNext() {
    if (!this.#totalPages) {
      this.#currentPage = 1;
      this.#fetch();
    }

    if (this.#currentPage <= this.#totalPages) {
      this.#currentPage++;
      this.#fetch();
    }
  }

  fetchPrevious() {
    if (!this.#totalPages) {
      return;
    }

    if (this.#currentPage > 1) {
      this.#currentPage--;
      this.#fetch();
    }
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
    showElement(this.leftArrow, false);
    showElement(this.rightArrow, false);
    showElement(this.#pageCounter, false);
    this.#pageCounter.textContent = '';

    this.#query = '';
    this.#currentPage = 0;
    this.#totalPages = 0;
  }

  #fetch() {
    showElement(this.leftArrow, false);
    showElement(this.rightArrow, false);
    showElement(this.#pageCounter, false);
    this.#pageCounter.textContent = '';

    clearGallery(this.#gallery);
    toggleLoader(this.#loader);

    fetchPhotos(this.#query, this.#currentPage)
      .then(photosData => {
        toggleLoader(this.#loader);
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

        this.#pageCounter.textContent = `${this.#currentPage}  of  ${
          this.#totalPages
        }`;
        showElement(this.#pageCounter, true);

        if (this.#totalPages > 1) {
          if (this.#currentPage === this.#totalPages) {
            showElement(this.rightArrow, false);
            showElement(this.leftArrow, true);
          } else if (this.#currentPage === 1) {
            showElement(this.leftArrow, false);
            showElement(this.rightArrow, true);
          } else {
            showElement(this.rightArrow, true);
            showElement(this.leftArrow, true);
          }
        }
      })
      .catch(error => {
        showErrorMessage(error.message);
      });
  }
}

const galleryController = new GalleryController();

galleryController.form.addEventListener('submit', event => {
  event.preventDefault();

  galleryController.reset();
  if (galleryController.setupQuery()) {
    galleryController.fetchNext();
  }
});

galleryController.rightArrow.addEventListener('click', _ => {
  galleryController.fetchNext();
});

galleryController.leftArrow.addEventListener('click', _ => {
  galleryController.fetchPrevious();
});
