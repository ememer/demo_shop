import { useEffect, useState } from 'react';

import { gql, useQuery } from '@apollo/react-hooks';
import clsx from 'clsx';
import { ExclamationDiamond, ZoomIn } from 'react-bootstrap-icons';

import { useBasket } from '../hook/useBasket';
import { useHandleNumberInput } from '../hook/useHandleNumberInput';
import { BestSellerQuery } from '../types/BestSellerQuery';
import { SITE_URL } from '../utils/siteUrl';

import PhotoModal from './PhotoModal';

const BestSeller = () => {
  const { data } = useQuery(BESTSELLER_QUERY);
  const products = (data as BestSellerQuery)?.products?.data ?? [];
  const filteredBestSeller = products?.filter(
    (dataElement) => dataElement?.attributes?.Product?.bestseller === true,
  );
  const bestSeller =
    filteredBestSeller[filteredBestSeller.length - 1]?.attributes?.Product ?? [];
  const publishedAt = filteredBestSeller[0]?.attributes?.updatedAt ?? '';
  const modelSelect = bestSeller?.phone_models?.data ?? [];
  const productImages = bestSeller?.photos?.data ?? [];
  const productConfiguration = bestSeller?.configuration ?? [];
  const [selectedModel, setSelectedModel] = useState('Select');
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  const [configurationType, setConfigurationType] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [validateError, setValidateErrror] = useState('');
  const [filteredOtherProducts, setFilteredOtherProducts] = useState<
    BestSellerQuery['products']['data'] | []
  >([]);
  const { quantity, setQuantity, handleNumberInput } = useHandleNumberInput(1);
  const { createBasket } = useBasket();

  const validateBestSellerOrder = (
    quantity: number,
    configurationType: string,
    products: unknown,
    bestSeller: unknown,
    selectedModel: string,
  ) => {
    if (selectedModel === 'Select') {
      setValidateErrror('Choose model');
      return;
    }
    setValidateErrror('');

    createBasket(
      quantity as number,
      configurationType,
      products,
      bestSeller,
      selectedModel,
    );
  };

  // Set default configuration at render

  useEffect(() => {
    setConfigurationType(productConfiguration[0]?.configuration_type);
  }, [productConfiguration[0]?.configuration_type]);

  // Set recent products at render

  useEffect(() => {
    const otherProducts = products
      ?.filter(
        (dataElement) =>
          dataElement.attributes.Product.title !==
          filteredBestSeller[filteredBestSeller.length - 1]?.attributes?.Product?.title,
      )
      .sort(() => 0.5 - Math.random());
    if (otherProducts !== undefined) {
      setFilteredOtherProducts(otherProducts);
    }
  }, [data]);

  const now = new Date();
  const publishDate = new Date(publishedAt);
  const diffTime = Math.floor(Math.abs((now as any) - (publishDate as any)) / 86400000);

  return (
    <>
      {isModalOpen && (
        <PhotoModal
          onClick={setIsModalOpen}
          currentIndex={selectedPhoto}
          setOfImages={productImages}
        />
      )}

      <div className="my-5 p-1">
        <div className="row row-cols-2 my-2 bg-white shadow-lg rounded rounded-5 gap-2 h-100 min-vh-70 p-4">
          <div className="col-12 col-lg-5 p-0">
            <div className=" position-relative">
              <img
                className="img-fluid rounded-4 min-vh-50"
                alt={
                  bestSeller?.photos?.data[selectedPhoto].attributes.alternativeText ??
                  `Zdjęcie produktu ${selectedPhoto + 1}`
                }
                src={`${SITE_URL}${bestSeller?.photos?.data[selectedPhoto].attributes.url}`}
              />

              <button
                onClick={() => setIsModalOpen(true)}
                className="position-absolute end-0 bottom-0 m-4 rounded-5 p-2 d-flex justify-content-center align-items-center border-0 bg-light "
              >
                <ZoomIn className="text-primary fw-bold" size={17} />
              </button>
            </div>

            <div className="row row-cols-5 px-4 py-2 my-2 gap-3">
              {productImages.map((productImage, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPhoto(index)}
                  style={{
                    transition: 'all 0.3s ease-in',
                  }}
                  className={clsx(
                    'col-3 col-lg btn border-0 p-0 bg-transparent mx-auto overflow-hidden p-2',
                    selectedPhoto === index &&
                      'border-5 border-bottom border-end border-secondary',
                    selectedPhoto !== index &&
                      'border-5 border-bottom border-transparent',
                  )}
                >
                  <img
                    className="col-12 img-fluid img-thumbnail p-0 rounded-2 h-100"
                    alt={
                      productImage?.attributes?.alternativeText ?? `Zdjęcie ${index + 1}`
                    }
                    src={`${SITE_URL}${productImage?.attributes?.url}`}
                  />
                </button>
              ))}
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="col-12 col-md-6 py-4 px-3 mx-auto">
            <div className="row">
              <h5 className="col-12 fw-bold fs-1 text-dark">{bestSeller.title}</h5>
              <div
                style={{
                  fontSize: '0.8rem',
                }}
                className="row justify-content-start text-center fw-semilight my-2"
              >
                <div className="col-5 col-lg-3 bg-info rounded-5 py-1 mx-2">
                  Bestseller
                </div>
                {diffTime < 7 ? (
                  <div className="col-5 col-lg-3 bg-info rounded-5 py-1 mx-2">New</div>
                ) : null}
              </div>
            </div>
            <div className="row">
              <div className="col-12 border-bottom fs-5 p-2 pb-4 my-3">
                <span>{bestSeller.price}PLN</span>
              </div>
              <div className="col-12 my-4 mb-1 px-0">
                <legend className="p-0 w-auto fw-light fs-6 m-0">Model:</legend>
              </div>
              <div className="col-12 px-0 my-2 my-lg-0">
                <select
                  value={selectedModel}
                  onChange={(e) =>
                    setSelectedModel((e.target as HTMLSelectElement).value)
                  }
                  className="form-select cursor-pointer"
                >
                  <option value="Select">Select</option>
                  {modelSelect?.map((model) => (
                    <option
                      key={model.attributes.phone_model}
                      value={model.attributes.phone_model}
                    >
                      {model.attributes.phone_model}
                    </option>
                  ))}
                </select>
                {validateError && selectedModel === 'Select' && (
                  <span className="text-danger align-items-center">
                    <ExclamationDiamond className="me-2" />
                    {validateError}
                  </span>
                )}
              </div>
              <div className="col-12 mt-4 mb-1 px-0">
                <legend className="p-0 w-auto fw-light fs-6 m-0">Color:</legend>
                <span className="p-0 ms-2 fs-6">{configurationType}</span>
              </div>
              <div className="col-12 my-2">
                <div className="row row-cols-3 gap-3">
                  {productConfiguration.map((configuration) => (
                    <button
                      style={{
                        transition: 'all 0.5s ease-in-out',
                      }}
                      onClick={() => {
                        setConfigurationType(configuration?.configuration_type);
                      }}
                      key={configuration?.configuration_type}
                      className={clsx(
                        'col-3 btn border-0 p-0 bg-transparent rounded-3 min-vh-10 overflow-hidden',
                        configurationType === configuration?.configuration_type &&
                          'border-5 border-bottom border-end border-secondary',
                        configurationType !== configuration?.configuration_type &&
                          'border-5 border-bottom border-transparent',
                      )}
                      title={configuration?.configuration_type}
                    >
                      {configuration?.configuration_picture?.data?.attributes?.url ? (
                        <img
                          className="col-12 img-fluid img-thumbnail rounded-3 border-0 p-1"
                          alt="jakiestamZdjecie"
                          src={`${SITE_URL}${configuration?.configuration_picture?.data?.attributes?.url}`}
                        />
                      ) : (
                        <legend>{configuration?.configuration_type}</legend>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <div className="col-12 my-2 ">
                <legend className="col-12 p-0 w-auto fw-light fs-6 m-0">Quantity:</legend>
                <div className="row">
                  <div className="col-12 col-md-6 my-3">
                    <div className="row row-col-3 text-center rounded rounded-4  overflow-hidden">
                      <button
                        onClick={() => {
                          (quantity as number) > 1
                            ? setQuantity((prevState) => (+prevState as number) - 1)
                            : null;
                        }}
                        className="col-3 px-0 py-1 bg-primary border-0 text-white"
                      >
                        -
                      </button>
                      <input
                        onBlur={(e) =>
                          e.target.value.length === 0 ? setQuantity(1) : null
                        }
                        autoComplete="off"
                        inputMode="numeric"
                        onFocus={(e) => e.currentTarget.select()}
                        type="text"
                        onChange={(e) => handleNumberInput(e)}
                        className="col px-0 py-1 bg-light border-0 text-center form-control shadow-none"
                        value={quantity}
                      />
                      <button
                        onClick={() =>
                          setQuantity((prevState) => (+prevState as number) + 1)
                        }
                        className="col-3 px-0 py-1 bg-primary border-0 text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row row-cols-1 gy-4 gy-md-0 row-cols-md-2 justify-content-evenly">
                  <button
                    onClick={() =>
                      validateBestSellerOrder(
                        quantity as number,
                        configurationType,
                        products,
                        bestSeller,
                        selectedModel,
                      )
                    }
                    className="col-12 col-md-5 btn btn-primary border-0 rounded-pill py-4 text-white"
                  >
                    Dodaj do koszyka
                  </button>
                  <button className="col-12 col-md-5 btn btn-primary border-0 rounded-pill py-4 text-white">
                    Kup teraz
                  </button>
                </div>
              </div>
              <p className="col-12 my-4 fw-bold p-0">Polecane:</p>
              <div className="col-12 border-top border-light">
                {filteredOtherProducts.slice(0, 3).map((recentProduct, idx) => (
                  <div
                    key={idx}
                    className="row d-flex align-items-center border border-top-0 border-light px-2 py-4 gap-3"
                  >
                    <div className="col-4 col-lg-3 mx-auto">
                      <img
                        className="img-fluid p-0 rounded-2"
                        alt={
                          recentProduct.attributes.Product.photos.data[0].attributes
                            .alternativeText
                        }
                        src={`${SITE_URL}${recentProduct.attributes.Product.photos.data[0].attributes.url}`}
                      />
                    </div>
                    <div className="col-12 col-lg-6 text-center text-lg-start">
                      <div className="row">
                        <h5 className="col-12 fs-6 fw-bold px-0">
                          {recentProduct.attributes.Product.title}
                        </h5>
                        <p className="col-12 fs-semibold text-dark">
                          {recentProduct.attributes.Product.price}PLN
                        </p>
                      </div>
                    </div>
                    <button className="col-10 mx-auto col-lg-2 border-0 rounded-4 h-50 py-2 py-lg-1">
                      + Dodaj
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSeller;

const BESTSELLER_QUERY = gql`
  query bestSeller {
    products {
      data {
        attributes {
          updatedAt
          Product {
            title
            stock
            price
            bestseller
            configuration {
              configuration_type
              configuration_picture {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            phone_models {
              data {
                attributes {
                  phone_model
                }
              }
            }
            category {
              data {
                attributes {
                  name
                }
              }
            }
            photos {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
