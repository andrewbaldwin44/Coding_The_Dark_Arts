import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { newSearch as newSearchAction, resetSearch as resetSearchAction } from './search.actions';

function SearchWidget({ newSearch, resetSearch }) {
  useEffect(() => {
    const search = document.querySelector('.search');
    const btn = document.querySelector('.btn-search');
    const input = document.querySelector('.input-search');

    btn.addEventListener('click', () => {
      search.classList.toggle('active');
      input.focus();
    });
    resetValue();
  }, []);

  const submitForm = ({ target }) => {
    newSearch({ searchValue: target.value });
  };

  const resetValue = () => {
    resetSearch({ searchValue: '' });
  };

  return (
    <div className='search-container'>
      <form
        className='search'
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input className='input-search' onInput={submitForm} placeholder='Search...' type='text' />

        <button className='btn-search' type='submit'>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
}

SearchWidget.propTypes = {
  newSearch: PropTypes.func,
  resetSearch: PropTypes.func,
};

export default connect(() => ({}), {
  newSearch: newSearchAction,
  resetSearch: resetSearchAction,
})(SearchWidget);
