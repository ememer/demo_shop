import React from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import { Basket } from 'react-bootstrap-icons';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <Navbar bg="primary" className="p-4 rounded-bottom bg-ping-400" expand="lg">
          <Container className="d-flex justify-content-between">
            <Navbar.Brand className="text-white fw-bold">
              <span className="text-white fw-light">Your</span>Shop
            </Navbar.Brand>
            <Button
              className="px-4 py-2 d-flex shadow-sm justify-content-center align-items-center"
              variant="secondary"
            >
              <Basket size={20} className="text-white" />
            </Button>
          </Container>
        </Navbar>
      </header>
      <main style={{ minHeight: '80dvh' }}>
        <Container className="p-2 bg-darkBg my-4 shadow">{children}</Container>
      </main>
      <footer className="bg-dark p-3 text-white text-center">
        <Container>
          <Row>
            <Col className="text-primary ">Copyright &copy; YourShop</Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Layout;
