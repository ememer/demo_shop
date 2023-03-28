import React, { useEffect, useState } from 'react';

import { Row } from 'react-bootstrap';

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
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      } catch (err) {
        return console.warn((err as Error).message);
      }
    };
    getItemsList();
  }, []);

  const add = () => {
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify({
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  return (
    <>
      {isLoading ? (
        <div className="col-12 min-vh-100 d-flex justify-content-center align-items-center">
          <span className="spinner-grow spinner-grow-sm m-1" role="status" />
          <span className="spinner-grow spinner-grow-sm m-1" role="status" />
          <span className="spinner-grow spinner-grow-sm m-1" role="status" />
        </div>
      ) : (
        <>
          <Row>
            <button onClick={() => add()}>TEST</button>
          </Row>
          <Row className="row row-cols-1 row-cols-md-2 g-4">
            {itemsList.map((productItem, index) => (
              <ItemCard key={index} props={productItem} />
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default ItemsList;
