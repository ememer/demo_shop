import React from 'react';

import { BestSellerQuery } from '../types/BestSellerQuery';
import { SITE_URL } from '../utils/siteUrl';

interface Props {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
  setOfImages: BestSellerQuery['products']['data'][0]['attributes']['Product']['photos']['data'];
  currentIndex: number;
}

const PhotoModal = ({ onClick, setOfImages, currentIndex }: Props) => {
  return (
    <div
      onClick={(e) => {
        if ((e.target as HTMLDialogElement).id !== 'modalImage') {
          onClick(false);
        }
      }}
      className="fixed-top min-vh-100 bg-light d-flex justify-content-center align-items-center"
    >
      <div className="container">
        <img
          id="modalImage"
          loading="lazy"
          className="d-block mx-auto rounded-3 shadow-xl"
          style={{ maxHeight: '90vh', width: 'auto' }}
          alt={setOfImages[currentIndex]?.attributes?.alternativeText}
          src={`${SITE_URL}${setOfImages[currentIndex]?.attributes?.url}`}
        />
      </div>
    </div>
  );
};

export default PhotoModal;
