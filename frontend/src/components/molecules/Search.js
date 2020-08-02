import React, { useState } from 'react';
import { func } from 'prop-types';

import {
  Button, FormControl, InputGroup,
} from 'react-bootstrap';


const Search = ({ handleSearch }) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  }

  return (
    <InputGroup className="mb-3">
      <FormControl
        onChange={handleSearchChange}
        placeholder="Digite o termo para pesquisa"
      />
      <InputGroup.Append>
        <Button
          onClick={(event) => {
            event.preventDefault();
            handleSearch(search);
          }}
          type="submit"
        >
          Procurar
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

Search.defaultProps = {
  handleSearch: () => {},
};

Search.propTypes = {
  handleSearch: func,
};

export default Search;
