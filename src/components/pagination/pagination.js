import React from 'react';

const Pagination = ({ maxPerPage, totalItems, paginate }) => {
  const pageNums = [];

  for (let i = 1; i <= Math.ceil(totalItems / maxPerPage); i++) {
    pageNums.push(i);
  }

  return (
    <div>
      <ul>
        {pageNums.map((num) => {
          return (
            <li key={num}>
              <a href='!#' onClick={() => paginate(num)}>
                {num}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
