import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import BenefitsSection from './BenefitsSection';
import ShowBox from './ShowBox';

import '../sass/custom/MainPage.scss';

const RESTAURANTS_QUERY = gql`
  query Restaurants {
    restaurants {
      data {
        attributes {
          Name
        }
      }
    }
  }
`;

const MainPage = () => {
  const { data } = useQuery(RESTAURANTS_QUERY);
  console.log(data);

  return (
    <>
      <div
        style={{ marginTop: '10rem', height: 'auto' }}
        className="row justify-content-center"
      >
        <div className="col-6 p-0 pe-1">
          <button className="border-0 hover p-0 m-0 position-relative bg-transparent ">
            <img
              alt="randomImg"
              src="https://picsum.photos/seed/picsum/1200/1300"
              className="img-fluid d-block mx-auto rounded-4 shadow"
            />
            <div className="hover-overlay rounded-4" />
            <h5 className="col-12 position-absolute top-50 text-center text-white fw-bold fs-1">
              Some random text here
            </h5>
          </button>
        </div>
        <div className="col-6 p-0 ps-1">
          <button className="border-0 hover p-0 m-0 position-relative bg-transparent ">
            <img
              alt="randomImg"
              src="https://picsum.photos/seed/picsum/1200/1300"
              className="img-fluid d-block mx-auto rounded-4 shadow"
            />
            <div className="hover-overlay rounded-4" />
            <h5 className="col-12 position-absolute top-50 text-center text-white fw-bold fs-1">
              Some random text here
            </h5>
          </button>
        </div>
      </div>
      <ShowBox />
      <BenefitsSection />
    </>
  );
};

export default MainPage;
