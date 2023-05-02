import { useContext } from 'react';

import { motion } from 'framer-motion';
import { BagX } from 'react-bootstrap-icons';

import { OrderContext } from '../context/OrderContext';
import { OrderTypes } from '../types/OrderTypes';

import BaskerProduct from './BaskerProduct';
interface Props {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const BaskteModal = ({ onClick }: Props) => {
  const { basket, setBasket } = useContext(OrderContext) as OrderTypes;
  const products = basket.map((product) => product);

  const removeBasketItem = (productIndex: number) => {
    setBasket(basket.filter((item, index) => index !== productIndex));
  };

  const summaryPrice = () => {
    const basketItemsPrice = basket.map(
      (basketItem) => basketItem.attributes.Product.price * basketItem.quantity,
    );
    let summaryPrice = 0;

    for (const item of basketItemsPrice) {
      summaryPrice += item;
    }

    return summaryPrice.toFixed(2);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key="basketModal"
      onClick={(e) => {
        if ((e.target as HTMLDialogElement).id === 'basketModal') {
          onClick(false);
        }
      }}
      id="basketModal"
      style={{ transition: 'all 0.3s ease-in' }}
      className="containter-fluid fixed-top d-flex justify-content-end align-items-center min-vh-100 bg-dark bg-opacity-50 z-3"
    >
      <motion.div
        initial={{ x: 800 }}
        animate={{ x: 0 }}
        key="basketModalContent"
        transition={{ type: 'spring', stiffness: 50 }}
        style={{ height: ' 90vh' }}
        className="col-12 col-md-7 col-lg-5 bg-white mx-md-3 d-block rounded-2 shadow-lg p-4"
      >
        <motion.div
          key="basketModalList"
          className="row align-items-center justify-content-between"
        >
          <div className="col-12 mb-4">
            <h2 className="col-10 col-md-11 d-inline-block fw-bold fs-5">Koszyk </h2>
            <button
              onClick={() => {
                onClick(false);
              }}
              className="col col-md-1 w-auto d-inline-block border-0 bg-transparent"
            >
              <BagX />
            </button>
          </div>
        </motion.div>
        <div className="row">
          <div className="col-12" style={{ overflowY: 'scroll', height: '60vh' }}>
            {products.map((product, idx) => (
              <BaskerProduct
                key={idx}
                product={product}
                onClick={removeBasketItem}
                index={idx}
              />
            ))}
          </div>
        </div>
        <div className="row my-4">
          <div className="col-12">
            <div className="row aling-items-center px-4">
              <h2 className="col-7 fw-bold fs-6 mb-0">Łączna kwota:</h2>
              <p className="col-5 text-end">{summaryPrice()} PLN</p>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center my-4">
            <button className="bg-primary border-0 rounded-4 px-4 py-2 ms-auto text-light">
              Przejdź dalej
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BaskteModal;
