import React, { useContext, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Basket, List, Person, Search } from 'react-bootstrap-icons';

import { OrderContext } from '../context/OrderContext';
import { OrderTypes } from '../types/OrderTypes';

import BaskteModal from './BasketModal';
import Footer from './Footer';
import MobileMenu from './MobileMenu';

import '../sass/custom/Layout.scss';
interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const { basket, isBasketOpen, setIsBasketOpen } = useContext(
    OrderContext,
  ) as OrderTypes;
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {isBasketOpen && <BaskteModal onClick={setIsBasketOpen} />}
      {mobileMenu && <MobileMenu onClick={setMobileMenu} />}
      <header>
        <div className="p-4 rounded-bottom bg-primary navbar fixed-top z-1 d-block">
          <div className="container text-white">
            <div className="col-12">
              <div className="row justify-content-between">
                <div className="col-2 d-lg-none ">
                  <button
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className="btn btn-primary text-white"
                    type="button"
                  >
                    <List size={20} />
                  </button>
                </div>

                <ul className="d-none col-3 d-lg-flex list-unstyled align-items-center justify-content-between m-0">
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                </ul>
                <Navbar.Brand className="col-4 col-md-4 text-center text-white fw-bold">
                  <span className="fw-light">Your</span>Shop
                </Navbar.Brand>
                <div className="col-5 col-md-4">
                  <Button className="mx-1">
                    <Search size={18} className="text-white" />
                  </Button>
                  <Button className="d-none d-md-inline-block position-relative mx-1">
                    <Person size={20} className="text-white" />
                    <span
                      style={{
                        fontSize: '0.5rem',
                        height: '1rem',
                        width: '1rem',
                        zIndex: '1',
                      }}
                      className="position-absolute d-flex justify-content-center align-items-center text-center top-0 fw-normal start-100 translate-middle badge rounded-circle bg-danger"
                    >
                      <span>3</span>
                    </span>
                  </Button>
                  <Button
                    onClick={() => setIsBasketOpen(true)}
                    className="position-relative mx-1"
                  >
                    <Basket size={18} className="text-white" />
                    {basket.length > 0 && (
                      <span
                        style={{
                          fontSize: '0.5rem',
                          height: '1rem',
                          width: '1rem',
                          zIndex: '1',
                        }}
                        className="position-absolute d-flex justify-content-center align-items-center text-center top-0 fw-normal start-100 translate-middle badge rounded-circle bg-danger"
                      >
                        <span>{basket.length}</span>
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main style={{ minHeight: '80dvh' }}>
        <Container className="p-2">{children}</Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
