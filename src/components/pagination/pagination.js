import React from 'react';

import { PageList, PageListItem } from './elements';

const Pagination = ({ maxPerPage, totalItems, handlePageClick }) => {
  const pageNums = [];

  for (let i = 1; i <= Math.ceil(totalItems / maxPerPage); i++) {
    pageNums.push(i);
  }

  return (
    <PageList>
      {pageNums.map((num) => {
        return (
          <PageListItem key={num} >
            <button onClick={()=>handlePageClick(num)}>
              {num}
            </button>
          </PageListItem>
        );
      })}
    </PageList>
  );
};

export default Pagination;
