import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sortTable } from '../../actions/actions';

import { THead, TH, TR } from './elements';

const TableHeader = () => {
  const dispatch = useDispatch();
  const sortDir = useSelector((state) => state.data.sortDirection);
  console.log(sortDir)
  const sortTableBy = (key) => {
    dispatch(sortTable(key));
  };

  return (
    <THead>
      <TR onClick={(e) => sortTableBy(e.target.dataset.key)}>
        <TH data-key='id'>ID{sortDir === 'asc' ? <i className='fa fa-sort-up'></i> : <i className='fa fa-sort-down'></i>}</TH>
        <TH data-key='firstName'>
          FIRST NAME {sortDir === 'asc' ? <i className='fa fa-sort-up'></i> : <i className='fa fa-sort-down'></i>}
        </TH>
        <TH data-key='lastName'>LAST NAME{sortDir === 'asc' ? <i className='fa fa-sort-up'></i> : <i className='fa fa-sort-down'></i>}</TH>
        <TH>EMAIL</TH>
        <TH>PHONE</TH>
        <TH>ADDRESS</TH>
        <TH>DESCRITION</TH>
      </TR>
    </THead>
  );
};

export default TableHeader;
