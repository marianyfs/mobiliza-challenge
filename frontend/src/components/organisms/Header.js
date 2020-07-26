import React from 'react';
import { shape, string } from 'prop-types';

import { Nav, Navbar } from 'react-bootstrap';

import { withRouter } from 'react-router';

import Mobiliza from '../atoms/Mobiliza';

import variables from '../../styles/_variables.scss';

const Header = ({ location }) => (
  <Navbar bg="light" variant="light" expand="sm">

    <Navbar.Brand href="https://mobiliza.com.br/">
      <Mobiliza
        className="my-auto mx-2 my-auto"
        fill={variables.primary}
        height={24}
      />
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav activeKey={location.pathname} className="my-auto">
        <Nav.Link className="text-uppercase" href="/search">Search</Nav.Link>
        <Nav.Link className="text-uppercase" href="/uau">UAU</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  location: shape({
    pathname: string.isRequired,
  }).isRequired,
};

export default withRouter(Header);
