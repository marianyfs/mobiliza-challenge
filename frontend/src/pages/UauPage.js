import React from 'react';
import {
  arrayOf, shape, string,
} from 'prop-types';

import ListItems from '../components/molecules/ListItems';

import ItemsTemplate from '../components/templates/ItemsTemplate';

// preencher com o redux
function UauPage({ items }) {
  return (
    <ItemsTemplate
      title="Lista de filmes UAU"
      items={(
        <ListItems
          buttonLabel="Remover"
          // Remover do Redux
          handleItemClick={() => {}}
          items={items}
        />
      )}
    />
  );
}

UauPage.defaultProps = {
  items: [],
};

UauPage.propTypes = {
  items: arrayOf(shape({
    imdbID: string,
    Title: string,
  })),
};

export default UauPage;
