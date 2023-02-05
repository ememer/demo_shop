import React, { useEffect, useState } from 'react';

import { Col, Image, Row } from 'react-bootstrap';

const ItemsList = () => {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    const getItemsList = async () => {
      const URL = 'https://fakestoreapi.com/products';
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          if (`${response.status}`.startsWith('3')) {
            console.log('Błędne wykonane żądanie:', response.status);
          }
          if (`${response.status}`.startsWith('4')) {
            console.log('Nie znaleziono wyników:', response.status);
          }
          if (`${response.status}`.startsWith('5')) {
            console.log('Błąd połączenia z serwerem:', response.status);
          }
        }
        const json = await response.json();
        setItemsList(json);
      } catch (err) {
        return console.warn((err as Error).message);
      }
    };
    getItemsList();
  }, []);

  console.log(itemsList);
  return (
    <div>
      {itemsList[0]?.image && (
        <Row md={4}>
          <Col>
            <Image fluid rounded={true} src={itemsList[0].image} />
          </Col>
          <Col>
            <Image fluid rounded={true} src={itemsList[1].image} />
          </Col>
          <Col>
            <Image fluid rounded={true} src={itemsList[2].image} />
          </Col>
          <Col>
            <Image fluid rounded={true} src={itemsList[3].image} />
          </Col>
          <Col>
            <Image fluid rounded={true} src={itemsList[3].image} />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ItemsList;
