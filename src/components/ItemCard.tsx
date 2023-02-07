import React from 'react';

import { Col, Row } from 'react-bootstrap';

import { ResponseObject } from '../types/ResponseTypes';

interface Props {
  props: ResponseObject;
}

const ItemCard = ({ props }: Props) => {
  const { image, price, title, description } = props;
  return (
    <Col role="button">
      <div className="card h-100 border-0">
        <div className="min-vh-40 d-flex justify-content-center align-items-center">
          <img className="mx-auto w-25" src={image} />
        </div>
        <div className="card-body bg-primary rounded-bottom">
          <h5 className="card-title min-vh-10 text-white">{title}</h5>
          <Row className="text-dark">
            <Col sm={8}>
              <p className="card-text">{description}</p>
            </Col>
            <Col className="text-center" sm={4}>
              <Col className="text-white fs-5" sm={12}>
                Price
              </Col>
              <Col className="fs-6" sm={12}>
                {price}
              </Col>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};

export default ItemCard;
