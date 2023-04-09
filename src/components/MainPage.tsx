import React from 'react';

import { gql, useQuery } from '@apollo/react-hooks';

import { ProductStoresQuery } from '../types/ProductsStores';
import { SITE_URL } from '../utils/siteUrl';

import BenefitsSection from './BenefitsSection';
import BestSeller from './BestSeller';

import '../sass/custom/MainPage.scss';

const MainPage = () => {
  const { data } = useQuery(PRODUCT_STORES);
  const stores = (data as ProductStoresQuery)?.productsStores?.data[0]?.attributes ?? [];
  const leftColumn = stores?.leftImage;
  const rightColumn = stores?.rightImage;
  return (
    <>
      <div
        style={{ marginTop: '10rem', height: 'auto' }}
        className="row justify-content-center"
      >
        {/* LEFT COLUMN */}
        <div className="col-6 p-0 pe-1">
          <button className="border-0 hover p-0 m-0 position-relative bg-transparent h-100">
            <img
              alt="Kategoria obudowy iPhone"
              src={`${SITE_URL}${leftColumn?.image?.data?.attributes?.url}`}
              className="img-fluid img-thumbnail d-block mx-auto rounded-4 shadow h-100"
            />
            <div className="hover-overlay rounded-4" />
            <h5 className="col-12 position-absolute top-50 text-center text-white fw-bold fs-1">
              {leftColumn?.title}
            </h5>
          </button>
        </div>
        {/* RIGHT COLUMN */}
        <div className="col-6 p-0 ps-1">
          <button className="border-0 hover p-0 m-0 position-relative bg-transparent h-100">
            <img
              alt="Kategoria opaski na zegarek iWatch"
              src={`${SITE_URL}${rightColumn?.image?.data?.attributes?.url}`}
              className="img-fluid img-thumbnail d-block mx-auto rounded-4 shadow h-100"
            />
            <div className="hover-overlay rounded-4" />
            <h5 className="col-12 position-absolute top-50 text-center text-white fw-bold fs-1">
              {rightColumn?.title}
            </h5>
          </button>
        </div>
      </div>
      <BestSeller />
      <BenefitsSection />
    </>
  );
};

export default MainPage;

const PRODUCT_STORES = gql`
  query ProductsStores {
    productsStores {
      data {
        attributes {
          leftImage {
            title
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          rightImage {
            title
            image {
              data {
                attributes {
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
