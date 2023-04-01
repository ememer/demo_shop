import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark p-3 text-white text-center">
      <div className="container">
        <div className="row my-2">
          <div className="col-12 text-start text-white fw-bold">
            <span className="fw-light">Your</span>Shop
          </div>
        </div>
        <div className="row my-4 gap-4">
          <div className="col-12 col-lg-4 mx-auto">
            <h3 className="col-12  mb-5 fs-3 fw-bold text-start">
              Subscribe our newsletter
            </h3>
            <p className="col-8 fw-light text-start">
              Subscribing newsletter you are agree with our private policy and receive
              marketing content
            </p>
            <input
              type="text"
              placeholder="E-mail"
              className="col-10 my-2 me-auto d-block p-2 border-0 rounded-3"
            />
          </div>
          <div className="col-12 col-lg-3 mx-auto">
            <h3 className="col-12  mb-5 fs-3 fw-bold text-start">Information</h3>
            <ul className="col-10 list-unstyled text-start">
              <li className="my-1">About us</li>
              <li className="my-1">Blog</li>
              <li className="my-1">Return policy</li>
              <li className="my-1">Return and complains</li>
              <li className="my-1">Rules</li>
              <li className="my-1">Privacy policy</li>
              <li className="my-1">RODO</li>
            </ul>
          </div>
          <div className="col-12 col-lg-4 mx-auto">
            <h3 className="col-12 mb-5 fs-3 fw-bold text-start">Our mission</h3>
            <p className="col-8 fw-light text-start">
              Hi, we are a Polish company. Our products are used by thousands of satisfied
              customers. Customer satisfaction is very important to us, which is why we
              offer: free delivery from PLN 50, convenient returns within 30 days and
              friendly service. Buy our products and join the yourShop family
            </p>
          </div>
        </div>
        <div className="row">
          <p className="col text-primary text-start fw-light">
            {new Date().getFullYear()}, Copyright &copy; YourShop
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
