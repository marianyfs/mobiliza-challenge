import React from 'react';
import { func, number } from 'prop-types';

import { Pagination as BSPagination } from 'react-bootstrap';

import paginationBuilder from './pagination.utils';

const Pagination = ({
  currentPage, handlePageClick, itemsPerPage, numberOfButtons, numberOfItems,
}) => {
  const { numberOfPages, pagination } = paginationBuilder({
    currentPage,
    itemsPerPage,
    numberOfButtons,
    numberOfItems,
  });

  if (!numberOfPages) {
    return null;
  }

  return (
    <BSPagination>
      <BSPagination.First
        data-testid="pagination-first"
        disabled={pagination[0] === currentPage}
        onClick={() => handlePageClick(1)}
      />
      <BSPagination.Prev
        data-testid="pagination-prev"
        disabled={pagination[0] === currentPage}
        onClick={() => handlePageClick(currentPage - 1)}
      />
      {pagination.map((page) => (
        <BSPagination.Item
          data-testid={`pagination-item-${page}`}
          disabled={currentPage === page}
          key={page}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </BSPagination.Item>
      ))}
      <BSPagination.Next
        data-testid="pagination-next"
        disabled={pagination.reverse()[0] === currentPage}
        onClick={() => handlePageClick(currentPage + 1)}
      />
      <BSPagination.Last
        data-testid="pagination-last"
        disabled={numberOfPages === currentPage}
        onClick={() => handlePageClick(numberOfPages)}
      />
    </BSPagination>
  );
};

Pagination.defaultProps = {
  currentPage: 1,
  handlePageClick: () => {},
  itemsPerPage: 10,
  numberOfButtons: 3,
  numberOfItems: 0,
};

Pagination.propTypes = {
  currentPage: number,
  handlePageClick: func,
  itemsPerPage: number,
  numberOfButtons: number,
  numberOfItems: number,
};

export default Pagination;
