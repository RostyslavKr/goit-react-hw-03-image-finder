import React from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryItemImage, GalleryImage } from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({
  image,
  title,
  openModal,
  handleView,
  id,
}) => {
  return (
    <ImageGalleryItemImage onClick={openModal}>
      <GalleryImage onClick={() => handleView(id)} src={image} alt={title} />
    </ImageGalleryItemImage>
  );
};
ImageGalleryItem.propTypes = {
  handleView: PropTypes.func.isRequired,
};
