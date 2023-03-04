import React from 'react';
export const ImageGalleryItem = ({ id, image, title }) => {
  return (
    <li key={id}>
      <img src={image} alt={title} />
    </li>
  );
};
