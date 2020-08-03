/* eslint-disable no-return-assign */
import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Search from '../../../components/molecules/Search';

describe('Test Search Molecule', () => {
  it('Should update Search input value', () => {
    const inputValue = 'Harry Potter';

    const { getByTestId } = render(<Search />);
    const inputNode = getByTestId('search-input');

    fireEvent.change(
      inputNode,
      { target: { value: inputValue } },
    );

    expect(inputNode.value).toEqual(inputValue);
  });

  it('Should handle Search submit', () => {
    const inputValue = 'Harry Potter';
    let result = '';

    const { getByTestId } = render(
      <Search handleSearch={(search) => result = search} />,
    );
    const inputNode = getByTestId('search-input');
    fireEvent.change(
      inputNode,
      { target: { value: inputValue } },
    );

    expect(result).toEqual('');

    const submitNode = getByTestId('search-submit');
    fireEvent.click(submitNode);

    expect(result).toEqual(inputValue);
  });
});
