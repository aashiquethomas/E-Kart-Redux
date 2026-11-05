import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="gy-4">
          <Col md={6} lg={8}>
            <Link to="/" className="fs-4 fw-bold text-decoration-none text-light">
              E-cart
            </Link>
            <p className="mt-2 mb-0 text-white-50">
              Find what you need and enjoy a simple, convenient shopping experience.
            </p>
          </Col>
          <Col md={6} lg={4}>
            <h2 className="h6 text-uppercase">Explore</h2>
            <nav aria-label="Footer navigation" className="d-flex flex-column align-items-start">
              <Link to="/" className="link-light link-underline-opacity-0 link-underline-opacity-75-hover">Shop</Link>
              <Link to="/cart" className="link-light link-underline-opacity-0 link-underline-opacity-75-hover">Cart</Link>
              <Link to="/wishlist" className="link-light link-underline-opacity-0 link-underline-opacity-75-hover">Wishlist</Link>
            </nav>
          </Col>
        </Row>
        <hr className="border-secondary my-4" />
        <p className="small text-white-50 mb-0">
          &copy; {new Date().getFullYear()} E-cart. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
