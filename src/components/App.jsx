import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { getImages } from 'services/getImages';
import { ToastContainer, toast } from 'react-toastify';

class App extends Component {
  state = {
    textSearch: '',
    images: [],
    error: null,
    status: 'idle',
    page: 1,
    showModal: false,
    largeImage: '',
  };
  componentDidUpdate(_, prevState) {
    if (prevState.textSearch !== this.state.textSearch) {
      this.setState({ status: 'pending' });
      getImages(this.state.textSearch, this.state.page)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(
              'There are no images for this request, please try another one!!!'
            )
          );
        })
        .then(images => {
          if (images.hits.length !== 0) {
            this.setState({
              images: [...this.state.images, ...images.hits],
              status: 'resolved',
            });
          } else {
            toast.warn(
              'There are no images for this request, please try another one!!!',
              { autoClose: 8000 }
            );
            this.setState({ status: 'idle' });
            return;
          }
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  onLoadMore = () => {
    const { page } = this.state;
    getImages(this.state.textSearch, page + 1)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          new Error(
            'There are no images for this request, please try another one!!!'
          )
        );
      })
      .then(images => {
        if (images.hits.length !== 0) {
          this.setState({
            images: [...this.state.images, ...images.hits],
            status: 'resolved',
            page: page + 1,
          });
        } else {
          toast.warn(
            'There are no images for this request, please try another one!!!',
            { autoClose: 8000 }
          );
          this.setState({ status: 'idle' });
          return;
        }
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  handleSubmit = textSearch => {
    this.setState({ textSearch, page: 1, images: [] });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };
  showModal = id => {
    const image = this.state.images.find(image => image.id === id);
    this.setState({
      largeImage: image.largeImageURL,
    });
  };
  render() {
    const { images, error, status, showModal, textSearch } = this.state;

    return (
      <div>
        <Searchbar onSearch={this.handleSubmit} />
        {status === 'idle' && <></>}
        {status === 'pending' && <Loader />}
        {status === 'resolved' && (
          <ImageGallery
            giveImage={this.giveLargeImage}
            openModal={this.toggleModal}
            handleView={this.showModal}
            images={images}
          />
        )}
        {status === 'rejected' && <div>{error.message}</div>}

        {images.length > 0 && <Button decrementPage={this.onLoadMore} />}
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img
              src={this.state.largeImage}
              alt={textSearch}
              width={800}
              height={500}
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
