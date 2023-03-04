import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    textSearch: '',
  };

  handleSubmit = textSearch => {
    this.setState({ textSearch });
  };

  render() {
    return (
      <div>
        <Searchbar onSearch={this.handleSubmit} />
        <ImageGallery value={this.state.textSearch} />
        <Modal />
      </div>
    );
  }
}

export default App;
