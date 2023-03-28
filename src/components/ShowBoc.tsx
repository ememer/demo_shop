import React from 'react';

const ShowBox = () => {
  return (
    <div className="my-5 p-4">
      <div className="row row-cols-2 my-2 bg-white shadow-sm rounded-4 h-100 min-vh-70 p-4">
        <div className="col-6 p-0">
          <img
            className="img-fluid rounded-4"
            alt="txt"
            src="https://picsum.photos/id/0/1200/1300"
          />
        </div>
        <div className="col-6 py-4 px-5">
          <div className="row">
            <h5 className="col-12 fw-bold fs-1 text-dark">Astronaut Etui na iPhone</h5>
            <div
              style={{
                fontSize: '0.8rem',
              }}
              className="row justify-content-start text-center fw-semilight my-2"
            >
              <div className="col-3 bg-info rounded-5 py-1 mx-2">Bestseller</div>
              <div className="col-3 bg-info rounded-5 py-1 mx-2">Nowość</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 border-bottom fs-5 p-2 pb-4 my-3">
              <span>22,22$</span>
            </div>
            <div className="col-12">
              <select className="form-select cursor-pointer">
                <option selected>Select menu</option>
                <option value="1">Some option 1</option>
                <option value="2">Some option 2</option>
                <option value="3">Some option 3</option>
                <option value="4">Some option 4</option>
                <option value="5">Some option 5</option>
                <option value="6">Some option 6</option>
                <option value="7">Some option 7</option>
                <option value="8">Some option 8</option>
                <option value="9">Some option 9</option>
              </select>
            </div>
            <div className="col-12 my-2">
              <legend className="fw-light fs-6 m-0">Model:</legend>{' '}
              <span className="fw-semibold fs-6">Some model</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBox;
