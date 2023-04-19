import React, { useState } from 'react';

import { BestSellerQuery } from '../types/BestSellerQuery';
import { SITE_URL } from '../utils/siteUrl';

interface Props {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
  setOfImages: BestSellerQuery['products']['data'][0]['attributes']['Product']['photos']['data'];
  currentIndex: number;
}

import { ArrowLeftShort, ArrowRightShort } from 'react-bootstrap-icons';

const PhotoModal = ({ onClick, setOfImages, currentIndex }: Props) => {
  const [photoIndex, setPhotoIndex] = useState(currentIndex);

  return (
    <div
      onClick={(e) => {
        if ((e.target as HTMLDialogElement).id === 'modalImage') {
          onClick(false);
        }
      }}
      id="modalImage"
      className="fixed-top min-vh-100 bg-light d-flex justify-content-center align-items-center"
    >
      <div id="modalImage" className="container position-relative">
        <img
          loading="lazy"
          className="d-block mx-auto rounded-3 shadow-xl"
          style={{ maxHeight: '90vh', maxWidth: '100%' }}
          alt={setOfImages[photoIndex]?.attributes?.alternativeText}
          src={`${SITE_URL}${setOfImages[photoIndex]?.attributes?.url}`}
        />
        <div
          style={{ marginBottom: '5vh' }}
          className="fixed-bottom col-6 col-md-3 col-xl-2 mx-auto"
        >
          <div className="row row-col-3 text-center rounded rounded-5 overflow-hidden border border-dark">
            <button
              onClick={() => {
                photoIndex + 1 === 1
                  ? setPhotoIndex(setOfImages.length - 1)
                  : setPhotoIndex(photoIndex - 1);
              }}
              className="col-3 px-0 py-3 border-0 bg-light"
            >
              <ArrowLeftShort />
            </button>
            <p className="col my-auto px-0 py-3 bg-light rounded-0 border-0 text-center form-control shadow-none">
              {`${photoIndex + 1} / ${setOfImages.length}`}
            </p>
            <button
              onClick={() => {
                photoIndex + 1 === setOfImages.length
                  ? setPhotoIndex(0)
                  : setPhotoIndex(photoIndex + 1);
              }}
              className="col-3 px-0 py-3 border-0 bg-light"
            >
              <ArrowRightShort />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
