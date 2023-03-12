import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import {
  SearchbarWrapper,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLable,
  SearchFormInput,
} from './Searchbar.styled';

import { Component } from 'react';
class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.value.trim() === '') {
      toast.warn('Enter something');
      return;
    }
    this.props.onSearch(this.state.value);
    this.setState({ value: '' });
  };
  render() {
    return (
      <SearchbarWrapper>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLable>Search</SearchFormButtonLable>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarWrapper>
    );
  }
}
Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
export default Searchbar;
