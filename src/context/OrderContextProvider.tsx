import React, { useState } from 'react';

import { Order } from '../types/OrderTypes';

import { OrderContext } from './OrderContext';

interface Props {
  children: React.ReactNode;
}

const OrderContexProvider = ({ children }: Props) => {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [basket, setBasket] = useState<Order[]>([]);
  return (
    <OrderContext.Provider value={{ isBasketOpen, setIsBasketOpen, basket, setBasket }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContexProvider;
