import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchWidget() {
	
  React.useEffect(() => {
    const search = document.querySelector('.search');
    const btn = document.querySelector('.btn-search');
    const input = document.querySelector('.input-search');

    btn.addEventListener('click', () => {
      search.classList.toggle('active');
	  input.focus();
	  
	});
  }, []);

  return (
	  <div className="search-container">
		  <div className="search">
			  <input type="text" placeholder="Search..." className="input-search"/>
			  <button className="btn-search">
			  	<FontAwesomeIcon icon={faSearch} />
			  </button>
		  </div>
	  </div>
  )
}
