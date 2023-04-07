import { useState } from 'react';

import { ProductsQuery } from '../types/ProductsQuery';
import { SITE_URL } from '../utils/siteUrl';

const ShowBox = ({ products }: ProductsQuery['data']) => {
  const [selectValue, setSelectValue] = useState('Select');
  const modelSelect = products?.model_products?.data ?? [];
  const productImages = products?.product_images?.data ?? [];
  const productConfiguration = products?.product_configurations?.data ?? [];
  console.log(products);

  return (
    <div className="my-5 p-1">
      <div className="row row-cols-2 my-2 bg-white shadow-lg rounded rounded-5 gap-2 h-100 min-vh-70 p-4">
        <div className="col-12 col-lg-5 p-0">
          <img
            className="img-fluid rounded-4 min-vh-70"
            alt={productImages[0]?.attributes?.alternativeText}
            src={`${SITE_URL}${productImages[0]?.attributes?.url}`}
          />

          <div className="row row-cols-5 px-4 my-2">
            {productImages.map((productImage) => (
              <button
                key={productImage?.attributes?.alternativeText}
                className="col-3 col-lg btn border-0 p-0 bg-transparent  min-vh-10 overflow-hidden p-2"
              >
                <img
                  className="col-12 img-fluid p-0 rounded-2"
                  alt={productImage?.attributes?.alternativeText}
                  src={`${SITE_URL}${productImage?.attributes?.formats?.thumbnail?.url}`}
                />
              </button>
            ))}
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="col-12 col-md-6 py-4 px-3 mx-auto">
          <div className="row">
            <h5 className="col-12 fw-bold fs-1 text-dark">{products.name}</h5>
            <div
              style={{
                fontSize: '0.8rem',
              }}
              className="row justify-content-start text-center fw-semilight my-2"
            >
              <div className="col-5 col-lg-3 bg-info rounded-5 py-1 mx-2">Bestseller</div>
              <div className="col-5 col-lg-3 bg-info rounded-5 py-1 mx-2">New</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 border-bottom fs-5 p-2 pb-4 my-3">
              <span>{products.price}$</span>
            </div>
            <div className="col-12 my-4 mb-1 px-0">
              <legend className="p-0 w-auto fw-light fs-6 m-0">Model:</legend>
              <span className="p-0 ms-2 fs-6">Some model</span>
            </div>
            <div className="col-12 px-0 my-2 my-lg-0">
              <select
                value={selectValue}
                onChange={(e) => setSelectValue((e.target as HTMLSelectElement).value)}
                className="form-select cursor-pointer"
              >
                <option value="Select">Select</option>
                {modelSelect?.map((model) => (
                  <option
                    key={model.attributes.product_model}
                    value={model.attributes.product_model}
                  >
                    {model.attributes.product_model}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12 mt-4 mb-1 px-0">
              <legend className="p-0 w-auto fw-light fs-6 m-0">Color:</legend>
              <span className="p-0 ms-2 fs-6">Black</span>
            </div>
            <div className="col-12 my-2">
              <div className="row row-cols-3 gap-3">
                {productConfiguration.map((configuration) => (
                  <button
                    key={configuration?.attributes?.configuration}
                    className="col-3 btn border-0 p-0 bg-transparent rounded-3 min-vh-10 overflow-hidden"
                    title={configuration?.attributes?.configuration}
                  >
                    <img
                      className="col-12 img-fluid p-0"
                      alt="jakiestamZdjecie"
                      src={`${SITE_URL}${configuration?.attributes?.configuration_picture?.data?.attributes?.formats?.thumbnail?.url}`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="col-12 my-2 ">
              <legend className="col-12 p-0 w-auto fw-light fs-6 m-0">Quantity:</legend>
              <div className="row">
                <div className="col-12 col-md-6 my-3">
                  <div className="row row-col-3 text-center rounded rounded-4  overflow-hidden">
                    <button className="col-3 px-0 py-1 bg-primary border-0 text-white">
                      -
                    </button>
                    <div className="col px-0 py-1 bg-light">1</div>
                    <button className="col-3 px-0 py-1 bg-primary border-0 text-white">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row row-cols-1 gy-4 gy-md-0 row-cols-md-2 justify-content-evenly">
                <button className="col-12 col-md-5 btn btn-primary border-0 rounded-5 py-4 text-white">
                  Dodaj do koszyka
                </button>
                <button className="col-12 col-md-5 btn btn-primary border-0 rounded-5 py-4 text-white">
                  Kup teraz
                </button>
              </div>
            </div>
            <p className="col-12 my-4 fw-bold p-0">Polecane:</p>
            {/* <div className="col-12 border-top border-dark">
              {products.map((product, idx) => (
                <div
                  key={idx}
                  className="row d-flex align-items-center border border-top-0 border-dark px-2 py-4 gap-3"
                >
                  <div className="col-4 col-lg-3 mx-auto">
                    <img
                      className="img-fluid p-0 rounded-2"
                      alt="jakiestamZdjecie"
                      src={`${import.meta.env.VITE_APP_BACKEND_URL}${
                        product?.attributes?.restaurant_photo?.data[0]?.attributes?.url
                      }`}
                    />
                  </div>
                  <div className="col-12 col-lg-6 text-center text-lg-start">
                    <div className="row">
                      <h5 className="col-12 fs-6 fw-bold px-0">
                        {product.attributes.Name}
                      </h5>
                      <p className="col-12 fs-semibold text-dark">
                        {product.attributes.Description}
                      </p>
                    </div>
                  </div>
                  <button className="col-10 mx-auto col-lg-2 border-0 rounded-4 h-50 py-2 py-lg-1">
                    + Dodaj
                  </button>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBox;
