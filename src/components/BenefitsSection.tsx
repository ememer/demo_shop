import React from 'react';

import { gql, useQuery } from '@apollo/react-hooks';
import { BoxSeamFill, Headset, TagFill } from 'react-bootstrap-icons';

const BenefitsSection = () => {
  const { data } = useQuery(BENEFITS_QUERY);
  const benefits = data?.benefitsSections?.data[0]?.attributes ?? [];
  return (
    <div className="row">
      <div className="col-12 min-vh-30 d-flex align-items-center justify-content-center">
        <div className="row row-cols-1 row-cols-lg-3 text-center">
          <div className="col">
            <BoxSeamFill className="col-12 fs-2 my-4" />
            <h5 className="col-12 fw-bold my-2">{benefits?.Shipping.title}</h5>
            <p className="col-12">{benefits?.Shipping.description}</p>
          </div>
          <div className="col">
            <Headset className="col-12 fs-2 my-4" />
            <h5 className="col-12 fw-bold my-2">{benefits?.Support.title}</h5>
            <p className="col-12">{benefits?.Support.description}</p>
          </div>
          <div className="col">
            <TagFill className="col-12 fs-2 my-4" />
            <h5 className="col-12 fw-bold my-2">{benefits?.Returns.title}</h5>
            <p className="col-12">{benefits?.Returns.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;

const BENEFITS_QUERY = gql`
  query Benefits {
    benefitsSections {
      data {
        attributes {
          Shipping {
            title
            description
          }
          Support {
            title
            description
          }
          Returns {
            title
            description
          }
        }
      }
    }
  }
`;
