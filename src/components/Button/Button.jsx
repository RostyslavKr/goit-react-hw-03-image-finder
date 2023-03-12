import { ButtonLoadMore } from './Button.styled';
import PropTypes from 'prop-types';
export const Button = ({ decrementPage }) => {
  return (
    <>
      <ButtonLoadMore onClick={() => decrementPage()} type="button">
        Load more
      </ButtonLoadMore>
    </>
  );
};

Button.propTypes = {
  decrementPage: PropTypes.func,
};
