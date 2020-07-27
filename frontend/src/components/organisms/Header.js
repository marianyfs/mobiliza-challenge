import React from 'react';
import { shape, string } from 'prop-types';

import { withRouter, Link } from 'react-router-dom';
import classnames from 'classnames';

import { Nav, Navbar } from 'react-bootstrap';

import Mobiliza from '../atoms/Mobiliza';

import variables from '../../styles/_variables.scss';

const NavLink = ({ location, to, label }) => (
  <Nav.Item
    as={Link}
    to={to}
    className={classnames(
      'text-uppercase mx-4',
      { 'font-weight-bold text-secondary': location.pathname.match(to) },
    )}
  >
    {label}
  </Nav.Item>
);

NavLink.propTypes = {
  location: shape({
    pathname: string.isRequired,
  }).isRequired,
  to: string.isRequired,
  label: string.isRequired,
};

const NavItem = withRouter(NavLink);

const Header = () => (
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
      <Nav className="my-auto">
        <NavItem
          to="/search"
          label="Search"
        />
        <NavItem
          to="/uau"
          label="Uau"
        />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
