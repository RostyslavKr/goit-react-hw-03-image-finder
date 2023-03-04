import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { getImages } from 'services/getImages';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.value !== this.props.value ||
      prevState.page !== this.state.page
    ) {
      getImages(this.props.value, this.state.page)
        .then(response => response.json())
        .then(images => {
          this.setState({ images: [...this.state.images, ...images.hits] });
        });
    }
  }

  render() {
    console.log(this.state.images);
    const images = this.state.images;
    return (
      <ul>
        {this.state.images !== null &&
          images.map(image => (
            <ImageGalleryItem
              id={image.id}
              image={image.webformatURL}
              title={image.user}
            />
          ))}
      </ul>
    );
  }
}

export default ImageGallery;
