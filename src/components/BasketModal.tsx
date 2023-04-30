import { useContext } from 'react';

import { BagX } from 'react-bootstrap-icons';

import { OrderContext } from '../context/OrderContext';
import { useHandleNumberInput } from '../hook/useHandleNumberInput';
import { Order, OrderTypes } from '../types/OrderTypes';
import { SITE_URL } from '../utils/siteUrl';
interface Props {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const BaskteModal = ({ onClick }: Props) => {
  const { basket, setBasket } = useContext(OrderContext) as OrderTypes;
  const products = basket.map((product) => product);
  const { quantity, handleNumberInput } = useHandleNumberInput(1);

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
              <div key={idx} className="row gap-2 align-items-center">
                <div className="col-2">
                  <img
                    className="img-fluid rounded-3"
                    alt={
                      product.attributes.Product.photos.data[0].attributes.alternativeText
                    }
                    src={`${SITE_URL}${product.attributes.Product.photos.data[0].attributes.url}`}
                  />
                </div>
                <div className="col-7">
                  <div className="row">
                    <h2 className="col-12 fs-6 fw-bold">
                      {product.attributes.Product.title}
                    </h2>
                    <p className="col-12 fs-6">{product.configuration}</p>
                  </div>
                </div>
                <div className="col-1 mx-auto">
                  <div className="row">
                    <input
                      className="my-2 border border-light rounded-1 text-center"
                      value={quantity}
                      onChange={(e) => handleNumberInput(e)}
                    />
                    <button
                      onClick={() => removeBasketItem(product)}
                      style={{ fontSize: '12px' }}
                      className="text-decoration-underline border-0 bg-transparent mx-auto my-2 p-0"
                    >
                      Usuń
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaskteModal;
