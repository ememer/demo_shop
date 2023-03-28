import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import { ResponseObject } from '../types/ResponseTypes';

interface Props {
  props: ResponseObject;
}

const ItemCard = ({ props }: Props) => {
  const { image, price, title, description } = props;
  return (
    <Col role="button">
      <Container fluid className="bg-primary rounded h-100">
        <Row className="h-auto bg-white rounded-top">
          <Col xs={12} className="min-vh-40 d-flex align-items-center">
            <img className="mx-auto d-block w-25" src={image} />
          </Col>
        </Row>
        <Row className=" bg-primary rounded-bottom">
          <Col xs={12} className="h-100">
            <Container fluid className="p-0">
              <Row className="min-vh-10 text-center">
                <Col xs={12} className="align-self-center">
                  <h6 className="d-inline-block text-white">{title}</h6>
                </Col>
              </Row>
              <Row className="text-dark row-cols-2 h-100 py-4">
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
            </Container>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default ItemCard;
