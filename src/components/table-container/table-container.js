import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchDataSuccess, fetching, setCurrentPage } from '../../actions/actions';

import TableHeader from '../tabel-header';
import TableBody from '../table-body';
import Pagination from '../pagination';

import { Table } from './elements';

const TableContainer = (props) => {
  const state = useSelector((state) => state.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetching());
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
  // currentPage: 1,
  // maxPerPage: 10,
  return (
    <Table>
      <TableHeader />
      <TableBody data={currentList} isLoading={isLoading} />
      <Pagination
        maxPerPage={maxPerPage}
        totalItems={totalItems}
        paginate={paginate}
      />
    </Table>
  );
};

export default TableContainer;
