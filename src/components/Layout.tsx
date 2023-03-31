import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Basket, Person, Search } from 'react-bootstrap-icons';

import Foother from './Footer';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <div className="p-4 rounded-bottom bg-primary navbar fixed-top d-block">
          <div className="container text-white">
            <div className="col-12">
              <div className="row">
                <ul className="col-3 d-flex list-unstyled align-items-center justify-content-between m-0">
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                </ul>
                <Navbar.Brand className="col text-center text-white fw-bold">
                  <span className="fw-light">Your</span>Shop
                </Navbar.Brand>
                <div className="col-2">
                  <Button className="mx-1">
                    <Search size={18} className="text-white" />
                  </Button>
                  <Button className="position-relative mx-1">
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
                  <Button className="position-relative mx-1">
                    <Basket size={18} className="text-white" />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main style={{ minHeight: '80dvh' }}>
        <Container className="p-2">{children}</Container>
      </main>
      <Foother />
    </>
  );
};

export default Layout;
