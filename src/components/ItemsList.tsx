import React, { useEffect, useState } from 'react';

import { Col, Row } from 'react-bootstrap';

import { ResponseObject } from '../types/ResponseTypes';

import ItemCard from './ItemCard';

const ItemsList = () => {
  const [itemsList, setItemsList] = useState<ResponseObject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getItemsList = async () => {
      const URL = 'https://fakestoreapi.com/products';
      try {
        const response: Response = await fetch(URL);
        if (!response.ok) {
          if (`${response.status}`.startsWith('3')) {
            alert(`Błędne wykonane żądanie: ${response.status}`);
          }
          if (`${response.status}`.startsWith('4')) {
            alert(`Nie znaleziono wyników: ${response.status}`);
          }
          if (`${response.status}`.startsWith('5')) {
            alert(`Błąd połączenia z serwerem: ${response.status}`);
          }
        }
        const json: ResponseObject[] = await response.json();
        setItemsList(json);
        setIsLoading(false);
      } catch (err) {
        return console.warn((err as Error).message);
      }
    };
    getItemsList();
  }, []);

  console.log(itemsList);
  return (
    <div>
      {isLoading ? (
        <Row md={4}>
          <Col className="placeholder-glow border-dark rounded-lg p-4">
            <span className="placeholder col-4" />
          </Col>
          <Col className="placeholder-glow border-dark rounded-lg p-4">
            <span className="placeholder col-4" />
          </Col>
          <Col className="placeholder-glow border-dark rounded-lg p-4">
            <span className="placeholder col-4" />
          </Col>
          <Col className="placeholder-glow border-dark rounded-lg p-4">
            <span className="placeholder col-4" />
          </Col>
          <Col className="placeholder-glow border-dark rounded-lg p-4">
            <span className="placeholder col-4" />
          </Col>
        </Row>
      ) : (
        <Row className="px-4 g-4" sm={1} md={2}>
          {itemsList.map((productItem, index) => (
            <ItemCard key={index} props={productItem} />
          ))}
        </Row>
      )}
    </div>
  );
};

export default ItemsList;
