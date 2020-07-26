import React from 'react';
import {
  arrayOf, func, shape, string,
} from 'prop-types';

import {
  Accordion, Button, ListGroup,
} from 'react-bootstrap';

const ListItems = ({ buttonLabel, handleItemClick, items }) => {
  if (items.length === 0) {
    return (<p className="text-center"> Não há itens para serem exibidos</p>);
  }

  return (
    <ListGroup variant="primary">
      <Accordion>
        {items.map(({
          imdbID, Title,
        }) => (
          <ListGroup.Item
            key={imdbID}
          >
            {
              handleItemClick
              && (
              <Button
                className="mr-2"
                onClick={handleItemClick}
                size="sm"
              >
                {buttonLabel}
              </Button>
              )
            }
            {Title}
          </ListGroup.Item>
        ))}
      </Accordion>
    </ListGroup>
  );
};

ListItems.defaultProps = {
  buttonLabel: undefined,
  handleItemClick: undefined,
  items: [],
};

ListItems.propTypes = {
  buttonLabel: string,
  handleItemClick: func,
  items: arrayOf(shape({
    imdbID: string,
    Title: string,
  })),
};

export default ListItems;
