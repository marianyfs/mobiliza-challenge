/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-return-assign */
import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import UauList from '../../../components/molecules/UauList';

describe('Test UauList Molecule', () => {
  it('Should render UauList', () => {
    const props = {
      actionLabel: 'UAU',
      items: [
        { imdbID: '1', Title: 'Title 1' },
        { imdbID: '2', Title: 'Title 2', Year: '2000' },
      ],
    };

    const { getByText, getByTestId } = render(<UauList {...props} />);

    expect(getByTestId('item-1')).toBeInTheDocument();
    expect(getByText('Title 1')).toBeInTheDocument();

    expect(getByTestId('item-2')).toBeInTheDocument();
    expect(getByText('Title 2 - 2000')).toBeInTheDocument();
  });

  it('Should render UauList with UAU action disabled when id in moviesByIds',
    () => {
      const props = {
        actionLabel: 'UAU',
        items: [
          { imdbID: '1', Title: 'Title 1' },
          { imdbID: '2', Title: 'Title 2', Year: '2000' },
        ],
        moviesByIds: { 1: {}, 5: {} },
        handleItemClick: () => {},
      };

      const { getByTestId } = render(<UauList {...props} />);

      expect(getByTestId('item-1')).toBeInTheDocument();
      expect(getByTestId('action-to-1').closest('button')).toBeDisabled();
    });

  it('Should render UauList and disable UAU button after handleItemClick',
    () => {
      const moviesByIds = { 1: {}, 5: {} };

      const props = {
        actionLabel: 'UAU',
        items: [
          { imdbID: '1', Title: 'Title 1' },
          { imdbID: '2', Title: 'Title 2', Year: '2000' },
        ],
        moviesByIds,
        handleItemClick: (item) => moviesByIds[item.imdbID] = {},
      };

      const { getByTestId, rerender } = render(
        <UauList {...props} />,
      );

      const action2Node = getByTestId('action-to-2');
      // button is enabled
      expect(action2Node.getAttribute('disabled')).toBe(null);

      fireEvent.click(action2Node);

      rerender(<UauList {...props} moviesByIds={moviesByIds} />);
      // button is disabled
      expect(action2Node.closest('button')).toBeDisabled();
    });

  it('Should update moviesByIds after UAU handleItemClick',
    () => {
      const moviesByIds = { 1: {}, 5: {} };

      const props = {
        actionLabel: 'UAU',
        items: [
          { imdbID: '1', Title: 'Title 1' },
          { imdbID: '2', Title: 'Title 2', Year: '2000' },
        ],
        moviesByIds,
        handleItemClick: (item) => moviesByIds[item.imdbID] = {},
      };

      const { getByTestId } = render(
        <UauList {...props} />,
      );

      const action2Node = getByTestId('action-to-2');
      fireEvent.click(action2Node);
      expect(moviesByIds[2]).toBeDefined();
    });
});
