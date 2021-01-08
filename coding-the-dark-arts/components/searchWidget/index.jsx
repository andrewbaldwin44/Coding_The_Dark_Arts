import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { newSearch, resetSearch } from './search.actions';

function SearchWidget({ newSearch, searchValue, resetSearch }) {
  // const search = createRef(null);
  React.useEffect(() => {
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
        <input className='input-search' placeholder='Search...' type='text' onInput={submitForm} />

        <button className='btn-search' type='submit'>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
}

export default connect(({ search }) => ({ searchValue: search.searchValue }), {
  newSearch,
  resetSearch,
})(SearchWidget);
