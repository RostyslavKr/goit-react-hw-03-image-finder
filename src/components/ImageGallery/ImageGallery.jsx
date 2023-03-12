import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryWrapper } from './ImageGallery.styled';

export const ImageGallery = ({ images, openModal, handleView }) => {
  return (
    <ImageGalleryWrapper>
      {images !== null &&
        images.map(({ webformatURL, user, id }) => (
          <ImageGalleryItem
            key={nanoid()}
            id={id}
            openModal={openModal}
            image={webformatURL}
            title={user}
            handleView={handleView}
          />
        ))}
    </ImageGalleryWrapper>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
};
