import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { newSearch as newSearchAction } from './search.actions';

function SearchWidget({ newSearch, searchValue }) {
  useEffect(() => {
    const search = document.querySelector('.search');
    const btn = document.querySelector('.btn-search');
    const input = document.querySelector('.input-search');

    btn.addEventListener('click', () => {
      search.classList.toggle('active');
      input.focus();
    });
  }, []);

  const submitForm = ({ target }) => {
    newSearch({ searchValue: target.value });
  };

  return (
    <div className='search-container'>
      <form
        className='search'
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          className='input-search'
          defaultValue={searchValue}
          onInput={submitForm}
          placeholder='Search...'
          type='text'
        />
        <button className='btn-search' type='submit'>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
}

SearchWidget.propTypes = {
  newSearch: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default connect(({ search }) => ({ searchValue: search.searchValue }), {
  newSearch: newSearchAction,
})(SearchWidget);
