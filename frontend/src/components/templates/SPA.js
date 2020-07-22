import React from 'react';
import { node, element } from 'prop-types';

import { Container } from 'react-bootstrap';

const SPA = ({ children, header }) => (
  <>
    {header && header}
    <Container fluid>{children && children}</Container>
  </>
);

SPA.propTypes = {
  children: node,
  header: element,
};

SPA.defaultProps = {
  children: undefined,
  header: undefined,
};

export default SPA;
