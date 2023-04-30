import React from 'react';

import { useHandleNumberInput } from '../hook/useHandleNumberInput';
import { Order } from '../types/OrderTypes';
import { SITE_URL } from '../utils/siteUrl';

interface Props {
  product: Order;
  // eslint-disable-next-line no-unused-vars
  onClick: (product: Order) => void;
}

const BaskerProduct = ({ product, onClick }: Props) => {
  const { quantity, setQuantity, handleNumberInput } = useHandleNumberInput(
    product?.quantity,
  );

  return (
    <div className="row gap-2 align-items-center mb-4">
      <div className="col-2">
        <img
          className="img-fluid rounded-3"
          alt={product.attributes.Product.photos.data[0].attributes.alternativeText}
          src={`${SITE_URL}${product.attributes.Product.photos.data[0].attributes.url}`}
        />
      </div>
      <div className="col-7">
        <div className="row">
          <h2 className="col-12 fs-6 fw-bold">{product.attributes.Product.title}</h2>
          <p className="fw-bold fs-6 mb-0">{`${
            quantity !== ''
              ? product.attributes.Product.price * (quantity as number)
              : product.attributes.Product.price * (product.quantity as number)
          } PLN`}</p>
          <p style={{ fontSize: '12px' }} className="col-12">
            {product.configuration}
          </p>
        </div>
      </div>
      <div className="col-1 mx-auto">
        <div className="row">
          <input
            className="my-2 border border-light rounded-1 text-center"
            onBlur={(e) =>
              e.target.value.length === 0 ? setQuantity(product.quantity) : null
            }
            value={quantity}
            onChange={(e) => {
              handleNumberInput(e);
            }}
          />
          <button
            onClick={() => onClick(product)}
            style={{ fontSize: '12px' }}
            className="text-decoration-underline border-0 bg-transparent mx-auto my-2 p-0"
          >
            Usuń
          </button>
        </div>
      </div>
    </div>
  );
};

export default BaskerProduct;
