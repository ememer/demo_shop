import React from 'react';

import { Col, Row } from 'react-bootstrap';

import { ResponseObject } from '../types/ResponseTypes';

interface Props {
  props: ResponseObject;
}

const ItemCard = ({ props }: Props) => {
  const { image, price, title, rating } = props;
  return (
    <Col sm={12} role="button">
      <div className="rounded bg-white">
        <div className="px-4">
          <div className="d-flex justify-content-center align-items-center min-vh-40">
            <img className="w-2b6 block m-auto" src={image} />
          </div>
        </div>
        <div className="rounded-bottom bg-primary">
          <Col
            sm={12}
            className="d-flex align-items-center justify-items-center text-white my-4 px-4 min-vh-10 pt-2"
          >
            <h5 className="mx-auto text-center">{title}</h5>
          </Col>
          <Row className="p-4 text-dark text-center">
            <Col sm={8}>{rating.count}</Col>

            <Col className="fs-5 fw-light" sm={4}>
              <Row>
                <Col sm={12}>
                  <h5 className="text-white">Price</h5>
                </Col>
                <Col sm={12}>${price}</Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};

export default ItemCard;
