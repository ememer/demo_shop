import React from 'react';

import { Col, Image, Row } from 'react-bootstrap';

import { ResponseObject } from '../types/ResponseTypes';

interface Props {
  props: ResponseObject;
}

const ItemCard = ({ props }: Props) => {
  const { image, price, title, rating } = props;
  return (
    <Col role="button">
      <Row className="justify-content-center bg-white rounded-top p-4">
        <Col className="col-5">
          <Image className="ratio ratio-1x1" fluid rounded={true} src={image} />
        </Col>
      </Row>
      <Row className="bg-primary rounded-bottom py-4 card-footer">
        <Col className="col-12">
          <h2 className="fs-6 text-white text-center">{title}</h2>
        </Col>
        <Col className="col-12 text-dark mt-4">
          <Row className="justify-content-center align-items-center">
            <Col className="col-8 my-2 text-center">{rating.rate}</Col>
            <Col className="col-4 text-center">
              <h3 className="fs-4">${price}</h3>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default ItemCard;
