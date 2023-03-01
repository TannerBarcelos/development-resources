import React, { useState } from 'react';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit(term);
  };
  return (
    <div className='search-bar ui segment' style={{ marginTop: '2rem' }}>
      <form onSubmit={onFormSubmit} className='ui form'>
        <div className='field'>
          <h3>Search for a Video</h3>
          <input
            type='text'
            id='serch-video'
            value={term}
            onChange={(e) => onInputChange(e)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
