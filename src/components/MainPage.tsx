import React from 'react';

import CardGrids from './CardsGrid';
import ShowBox from './ShowBox';

import '../sass/custom/MainPage.scss';

const MainPage = () => {
  return (
    <>
      <div style={{ marginTop: '10rem' }} className="p-4 row justify-content-center">
        <div className="col-6 p-1">
          <button className="border-0 hover p-0 m-0 position-relative">
            <img
              alt="randomImg"
              src="https://picsum.photos/seed/picsum/1200/1300"
              className="img-fluid  d-block mx-auto rounded-1"
            />
            <div className="hover-overlay" />
            <h5 className="col-12 position-absolute top-50 text-center text-white fw-bold fs-1">
              Some random text here
            </h5>
          </button>
        </div>
        <div className="col-6 p-1">
          <button className="hover border-0 p-0 m-0 position-relative">
            <img
              alt="randomImg"
              src="https://picsum.photos/seed/picsum/1200/1300"
              className="img-fluid  d-block mx-auto rounded-1"
            />
            <div className="hover-overlay" />
            <h5 className="col-12 position-absolute top-50 text-center text-white fw-bold fs-1">
              Some random text here
            </h5>
          </button>
        </div>
      </div>
      <CardGrids />
      <ShowBox />
    </>
  );
};

export default MainPage;
