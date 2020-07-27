import React from 'react';
import {
  arrayOf, func, shape, string,
} from 'prop-types';

import {
  Accordion, Button, ListGroup,
} from 'react-bootstrap';

const ListItems = ({ actionLabel, handleItemClick, items }) => {
  if (items.length === 0) {
    return (<p className="text-center"> Não há itens para serem exibidos</p>);
  }

  return (
    <ListGroup variant="primary">
      <Accordion>
        {items.map((item) => (
          <ListGroup.Item
            key={item.imdbID}
          >
            {
              handleItemClick
              && (
              <Button
                className="mr-2"
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
      </Accordion>
    </ListGroup>
  );
};

ListItems.defaultProps = {
  actionLabel: undefined,
  handleItemClick: undefined,
  items: [],
};

ListItems.propTypes = {
  actionLabel: string,
  handleItemClick: func,
  items: arrayOf(shape({
    imdbID: string,
    Title: string,
  })),
};

export default ListItems;
