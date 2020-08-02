import React from 'react';
import {
  arrayOf, func, shape, string,
} from 'prop-types';

import {
  Button, ListGroup,
} from 'react-bootstrap';

const ListItems = ({
  actionLabel, handleItemClick, items, moviesByIds,
}) => {
  if (items.length === 0) {
    return (<p className="text-center"> Não há itens para serem exibidos</p>);
  }

  return (
    <ListGroup variant="primary">
      {items.map((item) => (
        <ListGroup.Item
          key={item.imdbID}
        >
          {
              handleItemClick
              && (
              <Button
                className="mr-2"
                disabled={!!moviesByIds[item.imdbID]}
                onClick={() => handleItemClick(item)}
                size="sm"
              >
                {actionLabel}
              </Button>
              )
            }
          {`${item.Title} - ${item.Year}`}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

ListItems.defaultProps = {
  actionLabel: undefined,
  handleItemClick: undefined,
  items: [],
  moviesByIds: {},
};

ListItems.propTypes = {
  actionLabel: string,
  handleItemClick: func,
  items: arrayOf(shape({
    imdbID: string,
    Title: string,
  })),
  moviesByIds: shape({
    imdbID: string,
  }),
};

export default ListItems;
