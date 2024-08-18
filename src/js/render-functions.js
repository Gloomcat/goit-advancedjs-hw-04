import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;

const refreshLightbox = () => {
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }

  lightbox.refresh();
};

export const toggleLoader = loader => {
  if (loader.classList.contains('hidden')) {
    showElement(loader, true);
  } else {
    showElement(loader, false);
  }
};

export const showElement = (el, show) => {
  if (show) {
    el.classList.remove('hidden');
  } else {
    el.classList.add('hidden');
  }
};

export const showErrorMessage = errorMessage => {
  let settings = {
    titleSize: '16px',
    titleLineHeight: '24px',
    titleColor: '#FFF',
    messageSize: '16px',
    messageLineHeight: '24px',
    messageColor: '#FFF',
    theme: 'dark',
    position: 'topRight',
    title: 'Error',
    backgroundColor: '#EF4040',
    message: errorMessage,
  };

  iziToast.error(settings);
};

export const fillGallery = (gallery, photosList) => {
  const galleryItems = photosList.map(photo => {
    return `
        <div class='gallery-item'>
            <a href="${photo.largeImageURL}" class="gallery-link">
                <img src="${photo.previewURL}" alt="${photo.tags}" loading="lazy" width="360" height="150"/>
            </a>
            <ul class="info">
                <li class="info-item">
                    <p class="info-category">Likes</p>
                    <p class=>${photo.likes}</p>
                </li>
                <li class="info-item">
                    <p class="info-category">Views</p>
                    <p class=>${photo.views}</p>
                </li>
                <li class="info-item">
                    <p class="info-category">Comments</p>
                    <p class=>${photo.comments}</p>
                </li>
                <li class="info-item">
                    <p class="info-category">Downloads</p>
                    <p class=>${photo.downloads}</p>
                </li>
            </ul>
        </div>
        `;
  });
  gallery.innerHTML = galleryItems.join('\n');
  refreshLightbox();
};

export const clearGallery = gallery => {
  gallery.innerHTML = '';
  refreshLightbox();
};
