import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/Slices/productSlice';
import Header from '../components/Header';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Products() {

  const { loading, allProducts, error } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  //Pagination simple logic

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(allProducts.length / productsPerPage);
  const currentPageLastIndex = currentPage * productsPerPage;
  const currentPageFirstIndex = currentPageLastIndex - productsPerPage;
  const currentProducts = allProducts.slice(currentPageFirstIndex, currentPageLastIndex);

  const navigateNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  }
  const navigatePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  }
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      <Header insideProduct={true} />
      <div className='m-5'>
        {loading ? (
          <div className="text-center py-5 font-weight-bold">Loading...</div>
        ) :
          allProducts.length > 0 ? (
            <div className="row">
              {
                currentProducts.map((product) => (
                  <div className="col-3" key={product.id}>
                    <Card>
                      <Card.Img style={{ height: '250px' }} variant="top" src={product.image} />
                      <Card.Body className='text-center'>
                        <Card.Title>{product.title}</Card.Title>
                        <Link to={`/product/${product.id}`} className="btn btn-primary">View</Link>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-center py-5 font-weight-bold">
              {error || 'No products found.'}
            </div>
          )}
        <div className="text-center py-3 fs-2 font-weight-bold">
          <button className="btn btn-outline-primary" onClick={navigatePrevPage} disabled={currentPage === 1}>
            <FontAwesomeIcon icon={faBackward} />
          </button>
          {currentPage} of {totalPages}
          <button className="btn btn-outline-primary" onClick={navigateNextPage} disabled={currentPage === totalPages}>
            <FontAwesomeIcon icon={faForward} />
          </button>

        </div>
      </div>
    </>
  );
}

export default Products
