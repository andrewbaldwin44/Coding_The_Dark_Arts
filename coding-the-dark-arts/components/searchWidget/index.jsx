import React, { createRef } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { newSearch } from './search.actions';

function SearchWidget({ newSearch, searchValue }) {
  const search = createRef(null);
  React.useEffect(() => {
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
          placeholder='Search...'
          type='text'
          onInput={submitForm}
          defaultValue={searchValue}
        />
        <button className='btn-search' type='submit'>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
}

export default connect(({ search }) => ({ searchValue: search.searchValue }), { newSearch })(
  SearchWidget,
);
