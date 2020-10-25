import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sortTable } from '../../actions/actions';

import { THead, TH, TR } from './elements';

const TableHeader = () => {
  const dispatch = useDispatch();
  const sortDir = useSelector((state) => state.data.sortDirection);
  const sortTableBy = (key, e) => {

    dispatch(sortTable(key));
  };
  const sortUp = <i className='fa fa-sort-up'></i>;
  const sortDown =  <i className='fa fa-sort-down'></i>

  return (
    <THead>
      <TR onClickCapture={(e) => sortTableBy(e.target.id, e)}>
        <TH id='id'>ID {sortDir === 'asc' ? sortUp : sortDown} </TH>
        <TH id='firstName'> FIRST NAME {sortDir === 'asc' ? sortUp : sortDown} </TH>
        <TH id='lastName'> LAST NAME{sortDir === 'asc' ? sortUp : sortDown} </TH>
        <TH>EMAIL</TH>
        <TH>PHONE</TH>
        <TH>ADDRESS</TH>
        <TH>DESCRITION</TH>
      </TR>
    </THead>
  );
};

export default TableHeader;
