import { useContext } from 'react';

import { BagX } from 'react-bootstrap-icons';

import { OrderContext } from '../context/OrderContext';
import { Order, OrderTypes } from '../types/OrderTypes';

import BaskerProduct from './BaskerProduct';
interface Props {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const BaskteModal = ({ onClick }: Props) => {
  const { basket, setBasket } = useContext(OrderContext) as OrderTypes;
  const products = basket.map((product) => product);

  const removeBasketItem = (product: Order) => {
    setBasket(
      basket.filter(
        (item) =>
          item.attributes.Product.title === product.attributes.Product.title &&
          item.configuration !== product.configuration,
      ),
    );
  };

  return (
    <div
      onClick={(e) => {
        if ((e.target as HTMLDialogElement).id === 'basketModal') {
          onClick(false);
        }
      }}
      id="basketModal"
      style={{ transition: 'all 0.3s ease-in' }}
      className="containter-fluid fixed-top d-flex justify-content-end align-items-center min-vh-100 bg-dark bg-opacity-50 z-3"
    >
      <div className="col-5 min-vh-90 bg-white mx-3 d-block rounded-2 shadow-lg p-4">
        <div className="row">
          <div className="col-12 mb-4">
            <button
              onClick={() => {
                onClick(false);
              }}
              className="ms-auto d-block border-0 bg-transparent"
            >
              <BagX />
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {products.map((product, idx) => (
              <BaskerProduct key={idx} product={product} onClick={removeBasketItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaskteModal;
