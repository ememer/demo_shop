import React from 'react';

import { BoxSeamFill, Headset, TagFill } from 'react-bootstrap-icons';

const BenefitsSection = () => {
  return (
    <div className="row">
      <div className="col-12 min-vh-30 d-flex align-items-center justify-content-center">
        <div className="row row-cols-1 row-cols-lg-3 text-center">
          <div className="col">
            <BoxSeamFill className="col-12 fs-2 my-4" />
            <h5 className="col-12 fw-bold my-2">Free shipment</h5>
            <p className="col-12">Order to 19 pm to deliver Your package next day!</p>
          </div>
          <div className="col">
            <Headset className="col-12 fs-2 my-4" />
            <h5 className="col-12 fw-bold my-2">Support 24/7</h5>
            <p className="col-12">We waiting and answer! 😊</p>
          </div>
          <div className="col">
            <TagFill className="col-12 fs-2 my-4" />
            <h5 className="col-12 fw-bold my-2">30 day return</h5>
            <p className="col-12">Don&apos;t risk! You have 30days for return</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
