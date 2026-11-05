import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { faCartPlus, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';



function Header() {
  return (
    <Navbar expand="lg" className="bg-body-warning" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-dark fw-bold"><FontAwesomeIcon icon={faTruckFast} className="me-2" /> E-cart</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <input type="text" className="form-control" placeholder="Search your products" />
            </Nav.Item>
            <Link to="/wishlist" className="nav-link"><FontAwesomeIcon icon={faHeart} className="me-2 btn btn-danger" /> Wishlist
             <Badge pill bg="danger">New</Badge></Link>
             <Link to="/cart" className="nav-link"> <FontAwesomeIcon icon={faCartPlus} className="me-2 btn btn-success" /> Cart
             <Badge pill bg="success">New</Badge></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header
