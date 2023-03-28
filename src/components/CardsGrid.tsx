import React from 'react';

const arr = [1, 2, 3, 4, 5, 6, 7];

const CardGrids = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 px-4 g-5 my-4">
      {arr.map((el) => (
        <button key={el} className="col border-0 bg-transparent">
          <div className="card h-100 border-0 shadow">
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
      ))}
    </div>
  );
};

export default CardGrids;
