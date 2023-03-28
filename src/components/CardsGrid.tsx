import React from 'react';

const CardGrids = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-5 my-4">
      <button className="col border-0 bg-transparent">
        <div className="card h-100 border-0 bg-darkBg shadow shadow-sm">
          <img
            className="p-2 rounded-1 mh-40"
            src="https://picsum.photos/seed/picsum/1300/1200"
            alt="someImage"
          />
          <div className="card-body">
            <h3 className="card-title">Some text here</h3>
            <p className="card-text"> Some additional text here about the product</p>
          </div>
        </div>
      </button>
      <button className="col border-0 bg-transparent">
        <div className="card h-100 border-0 bg-darkBg shadow shadow-sm">
          <img
            className="img-responsive p-2 rounded-1 min-vh-40"
            src="https://picsum.photos/seed/picsum/1300/700"
            alt="someImage"
          />
          <div className="card-body">
            <h3 className="card-title">Some text here</h3>
            <p className="card-text"> Some additional text here about the product</p>
          </div>
        </div>
      </button>
      <button className="col border-0 bg-transparent">
        <div className="card h-100 border-0 bg-darkBg shadow shadow-sm">
          <img
            className="img-responsive p-2 rounded-1 min-vh-40"
            src="https://picsum.photos/seed/picsum/1300/700"
            alt="someImage"
          />
          <div className="card-body">
            <h3 className="card-title">Some text here</h3>
            <p className="card-text"> Some additional text here about the product</p>
          </div>
        </div>
      </button>
      <button className="col border-0 bg-transparent">
        <div className="card h-100 border-0 bg-darkBg shadow shadow-sm">
          <img
            className="img-responsive p-2 rounded-1 min-vh-40"
            src="https://picsum.photos/seed/picsum/1300/700"
            alt="someImage"
          />
          <div className="card-body">
            <h3 className="card-title">Some text here</h3>
            <p className="card-text"> Some additional text here about the product</p>
          </div>
        </div>
      </button>
      <button className="col border-0 bg-transparent">
        <div className="card h-100 border-0 bg-darkBg shadow shadow-sm">
          <img
            className="img-responsive p-2 rounded-1 min-vh-40"
            src="https://picsum.photos/seed/picsum/1300/700"
            alt="someImage"
          />
          <div className="card-body">
            <h3 className="card-title">Some text here</h3>
            <p className="card-text"> Some additional text here about the product</p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default CardGrids;
