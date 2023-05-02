import { useContext } from 'react';

import { OrderContext } from '../context/OrderContext';
import { BestSellerQuery } from '../types/BestSellerQuery';
import { Order, OrderTypes } from '../types/OrderTypes';

export const useBasket = () => {
  const { basket, setBasket } = useContext(OrderContext) as OrderTypes;

  const createBasket = async (
    quantity: number,
    configuration: string,
    query: unknown,
    item: unknown,
    model: string,
  ) => {
    const currentQuery = await query;
    const matchItem = (currentQuery as BestSellerQuery['products']['data']).find(
      (element) =>
        (element as BestSellerQuery['products']['data'][0]).attributes.Product === item,
    );

    const newOrder = { ...matchItem, configuration, quantity, model } as Order;

    if (basket.length === 0) {
      setBasket([newOrder]);
      return;
    }
    // find and update existing produckt in basket about quantity
    if (
      basket.find(
        (order) =>
          order.attributes.Product === newOrder.attributes.Product &&
          order.configuration === newOrder.configuration &&
          order.model === newOrder.model &&
          order.quantity !== newOrder.quantity,
      )
    ) {
      const bastekItems = basket.filter(
        (basketItem) =>
          basketItem.attributes.Product === newOrder.attributes.Product &&
          basketItem.model === newOrder.model &&
          basketItem.configuration !== newOrder.configuration,
      );

      setBasket([...bastekItems, newOrder]);

      return;
    }
    //if product, configuration and different quantity exist
    if (
      basket.find(
        (order) =>
          order.attributes.Product === newOrder.attributes.Product &&
          order.model === newOrder.model &&
          order.configuration === newOrder.configuration,
      )
    ) {
      return;
    }
    // if product exist in basket
    if (
      basket.find(
        (order) =>
          order.attributes.Product === newOrder.attributes.Product &&
          order.configuration === newOrder.configuration &&
          order.model === newOrder.model &&
          order.quantity === newOrder.quantity,
      )
    ) {
      return;
    }

    setBasket((prevState) => [...prevState, newOrder]);
  };

  return { createBasket };
};
