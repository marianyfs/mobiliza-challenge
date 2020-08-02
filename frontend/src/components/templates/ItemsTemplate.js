import React from 'react';
import { element, string } from 'prop-types';

import { Col, Row } from 'react-bootstrap';

const ItemsTemplate = ({
  error, loading, items, pagination, search, title,
}) => (
  <>
    { title && (
      <Row className="my-4">
        <Col>
          <h3 className="text-uppercase">{title}</h3>
        </Col>
      </Row>
    ) }
    { search && (
    <Row className="my-4">
      <Col>
        {search}
      </Col>
    </Row>
    ) }
    { loading && (
    <Row className="my-4">
      <Col className="text-center">
        {loading}
      </Col>
    </Row>
    ) }
    { error && (
      <Row className="my-1">
        <Col className="text-center">
          {error}
        </Col>
      </Row>
    ) }
    { !(loading || error) && items && (
    <Row className="my-2">
      <Col>
        {items}
      </Col>
    </Row>
    ) }
    { pagination && (
      <Row className="my-1">
        <Col className="d-md-flex justify-content-md-center">
          {pagination}
        </Col>
      </Row>
    ) }
  </>
);

ItemsTemplate.defaultProps = {
  title: undefined,
  search: undefined,
  loading: undefined,
  error: undefined,
  items: undefined,
  pagination: undefined,
};

ItemsTemplate.propTypes = {
  title: string,
  search: element,
  loading: element,
  error: element,
  items: element,
  pagination: element,
};

export default ItemsTemplate;
