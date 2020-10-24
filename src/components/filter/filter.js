import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { filterTableBy } from '../../actions/actions';

import {FilterForm } from './elements'

const Filter = () => {
  const refContainer = useRef(null);
  const dispatch = useDispatch();

  const handleInput = () => {
    console.log(refContainer.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(filterTableBy(refContainer.current.value));
  };

  return (
    <div>
      <FilterForm onSubmit={(e) => handleSubmit(e)}>
        <input ref={refContainer} onKeyUp={handleInput} />
        <button>Найти</button>
      </FilterForm>
    </div>
  );
};

export default Filter;
