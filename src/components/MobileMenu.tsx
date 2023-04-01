import React from 'react';

interface Props {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}

import { XCircleFill } from 'react-bootstrap-icons';
const MobileMenu = ({ onClick }: Props) => {
  return (
    <div
      id="transparentBackGround"
      onClick={(e) => {
        if ((e.target as HTMLDivElement).id === 'transparentBackGround') {
          onClick(false);
        }
      }}
      className="container-fluid bg-primary bg-opacity-50 min-vh-100 position-fixed top-0 bottom-0 start-0 z-3 py-0"
    >
      <div className="row">
        <div className="container position-absolute bottom-0 d-block">
          <XCircleFill
            onClick={() => onClick(false)}
            role="button"
            className="mb-5 mx-auto d-block fa-lg text-white"
            size={40}
          />
          <ul className="col-12 bg-white min-vh-60 rounded-top list-unstyled text-start px-4 pt-5 mb-0">
            <li className="mb-3 fw-bold fs-4 text-dark">Link1</li>
            <li className="mb-3 fw-bold fs-4 text-dark">Link2</li>
            <li className="mb-3 fw-bold fs-4 text-dark">Link3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
