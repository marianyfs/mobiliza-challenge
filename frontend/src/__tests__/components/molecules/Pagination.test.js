/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Pagination from '../../../components/molecules/Pagination';

describe('Test Pagination Molecule', () => {
  it('Should render Pagination buttons', () => {
    const props = {
      currentPage: 1,
      itemsPerPage: 2,
      numberOfButtons: 8,
      numberOfItems: 15,
    };

    // render: << < 1 2 3 4 5 6 7 8 > >>
    const { getByTestId } = render(
      <Pagination {...props} />,
    );

    expect(getByTestId('pagination-first')).toBeInTheDocument();
    expect(getByTestId('pagination-prev')).toBeInTheDocument();

    new Array(props.numberOfButtons).forEach((element, index) => expect(
      getByTestId(`pagination-item-${index + 1}`),
    ).toBeInTheDocument());

    expect(getByTestId('pagination-next')).toBeInTheDocument();
    expect(getByTestId('pagination-last')).toBeInTheDocument();
  });

  it('Should render Pagination buttons according to properties', () => {
    const props = {
      currentPage: 6,
      itemsPerPage: 2,
      numberOfItems: 15,
    };

    // render: << < 5 6 7 > >>
    const { getByTestId, queryByText } = render(
      <Pagination {...props} />,
    );

    expect(getByTestId('pagination-first')).toBeInTheDocument();
    expect(getByTestId('pagination-prev')).toBeInTheDocument();

    ['5', '6', '7'].forEach((element) => expect(
      getByTestId(`pagination-item-${element}`),
    ).toBeInTheDocument());

    ['1', '2', '3'].forEach((element) => {
      const elementNode = queryByText(`pagination-item-${element}`);
      expect(elementNode).not.toBeInTheDocument();
    });

    expect(getByTestId('pagination-next')).toBeInTheDocument();
    expect(getByTestId('pagination-last')).toBeInTheDocument();
  });

  it('Should handle first Page click', () => {
    let currentPage = 5;
    const props = {
      currentPage,
      itemsPerPage: 2,
      numberOfItems: 15,
      handlePageClick: (page) => currentPage = page,
    };

    // render: << < 7 5 6 > >>
    const { getByTestId } = render(
      <Pagination {...props} />,
    );

    const firstNode = getByTestId('pagination-first');
    fireEvent.click(firstNode);

    expect(currentPage).toBe(1);
  });

  it('Should handle prev Page click', () => {
    let currentPage = 3;
    const props = {
      currentPage,
      itemsPerPage: 2,
      numberOfItems: 15,
      handlePageClick: (page) => currentPage = page,
    };

    // render: << < 2 3 4 > >>
    const { getByTestId } = render(
      <Pagination {...props} />,
    );

    const prevNode = getByTestId('pagination-prev');
    fireEvent.click(prevNode);

    expect(currentPage).toBe(2);
  });

  it('Should handle next Page click', () => {
    let currentPage = 3;
    const props = {
      currentPage,
      itemsPerPage: 2,
      numberOfItems: 15,
      handlePageClick: (page) => currentPage = page,
    };

    // render: << < 2 3 4 > >>
    const { getByTestId } = render(
      <Pagination {...props} />,
    );

    const nextNode = getByTestId('pagination-next');
    fireEvent.click(nextNode);

    expect(currentPage).toBe(4);
  });

  it('Should handle last Page click', () => {
    let currentPage = 1;
    const props = {
      currentPage,
      itemsPerPage: 2,
      numberOfItems: 15,
      handlePageClick: (page) => currentPage = page,
    };

    // render: << < 1 2 3 > >>
    const { getByTestId, rerender } = render(<Pagination {...props} />);

    fireEvent.click(getByTestId('pagination-last'));

    expect(currentPage).toBe(8);

    // render: << < 6 7 8 > >>
    rerender(<Pagination {...props} currentPage={currentPage} />);
    expect(getByTestId('pagination-item-8')).toBeInTheDocument();
  });

  it('Should handle page click and rerender page options', () => {
    let currentPage = 1;
    const props = {
      currentPage,
      itemsPerPage: 2,
      numberOfItems: 15,
      handlePageClick: (page) => currentPage = page,
    };

    // render: << < 1 2 3 > >>
    const { getByTestId, rerender } = render(<Pagination {...props} />);

    const page = 3;
    fireEvent.click(getByTestId(`pagination-item-${page}`));

    expect(currentPage).toBe(page);

    // render: << < 2 3 4 > >>
    rerender(<Pagination {...props} currentPage={currentPage} />);

    ['2', '3', '4'].forEach((element) => {
      expect(getByTestId(`pagination-item-${element}`)).toBeInTheDocument();
    });
  });
});
