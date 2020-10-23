import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  requestData,
  fetchDataSuccess,
  setCurrentPage,
  sortTable,
} from '../../actions/actions';

import Filter from '../filter/filter';
import TableHeader from '../tabel-header';
import TableBody from '../table-body';
import Pagination from '../pagination';

import { Table } from './elements';

const TableContainer = (props) => {
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestData());
    fetch(
      'http://www.filltext.com/?rows=100&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}'
    )
      .then((response) => response.json())
      .then((data) => dispatch(fetchDataSuccess(data)));
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
      <Filter />
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
