import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { filterTableBy } from '../../actions/actions';

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
      <h1>Filter</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input ref={refContainer} onKeyUp={handleInput} />
        <button>FILTER</button>
      </form>
    </div>
  );
};

export default Filter;
