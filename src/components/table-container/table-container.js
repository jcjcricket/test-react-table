import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchDataSuccess,
  setCurrentPage,
  sortTable,
} from '../../actions/actions';

import TableHeader from '../tabel-header';
import TableBody from '../table-body';
import Pagination from '../pagination';

import { Table } from './elements';

const TableContainer = (props) => {
  const state = useSelector((state) => state.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataSuccess());
  }, [dispatch]);

  const { peopleInfo, isLoading, hasError, currentPage, maxPerPage } = state;

  const indexOfListEnd = currentPage * maxPerPage;
  const indexOfListBeggin = indexOfListEnd - maxPerPage;
  const currentList = peopleInfo.slice(indexOfListBeggin, indexOfListEnd);
  const totalItems = peopleInfo.length;

  const paginate = (num) => {
    dispatch(setCurrentPage(num));
  };

  const sortTableBy = (key) => {
    dispatch(sortTable(key));
  };

  return (
    <>
      <Table>
        <TableHeader data={peopleInfo} sortTableBy={sortTableBy} />
        <TableBody data={currentList} isLoading={isLoading} />
      </Table>
      <Pagination
        maxPerPage={maxPerPage}
        totalItems={totalItems}
        paginate={paginate}
        
      />
    </>
  );
};

export default TableContainer;
