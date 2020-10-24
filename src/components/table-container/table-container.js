import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchDataSuccess,
  setCurrentPage,
  sortTable,
  setPersonId,
} from '../../actions/actions';

import Filter from '../filter/filter';
import TableHeader from '../tabel-header';
import TableBody from '../table-body';
import Pagination from '../pagination';
import PersonInfo from '../person-info';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'

import { Table } from './elements';

const TableContainer = (props) => {
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataSuccess());
  }, [dispatch]);

  const {
    peopleInfo,
    isLoading,
    hasError,
    currentPage,
    maxPerPage,
    isSorted,
    isFiltered,
  } = state;
  const indexOfListEnd = currentPage * maxPerPage;
  const indexOfListBeggin = indexOfListEnd - maxPerPage;
  const currentList = peopleInfo.slice(indexOfListBeggin, indexOfListEnd);
  const totalItems = peopleInfo.length;

  const handlePageClick = (num) => {
    dispatch(setCurrentPage(num));
  };

  
  const infoClick = (e) => {
    e.persist();
    e.stopPropagation();
    dispatch(setPersonId(e.currentTarget.id));
  };

  if (hasError) {
    return <ErrorIndicator />;
  }

  if (isLoading) {
    return <Spinner/>
  }

  return (
    <>
      
      <Filter />
      <Table>
        <TableHeader data={peopleInfo}/>
        <TableBody
          data={currentList}
          isLoading={isLoading}
          infoClick={infoClick}
        />
      </Table>
      <PersonInfo />
      <Pagination
        maxPerPage={maxPerPage}
        totalItems={totalItems}
        handlePageClick={handlePageClick}
      />
    </>
  );
};

export default TableContainer;
