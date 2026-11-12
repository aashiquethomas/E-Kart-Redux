import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCircleXmark, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { removeFromWishlist } from '../redux/Slices/wishlistSlice';
import Swal from 'sweetalert2';
import { addCart } from '../redux/Slices/cartSlice';

function Wishlist() {

  const userWishlist = useSelector(state => state.WishlistReducer)
  const userCart = useSelector(state => state.cartReducer)

  const dispatch = useDispatch()

  const handleCart = (product) => {
    // check the product in the cart
    const existingItem = userCart.find(item => item?.id === product?.id)
    dispatch(addCart(product))
    dispatch(removeFromWishlist(product))
    Swal.fire({
      title: "success",
      text: existingItem ? `${existingItem.title} quantity incremented` : "Product added to your cart",
      icon: "Success",
      confirmButtonText: "Ok"
    })
  }

  return (
    <>
      <Header />
      <div className='container my-5'>
        {
          userWishlist?.length > 0 ?
            <>
              <h1 className='text-center text-primary fw-bold'>User's Wishlist</h1>
              <div className="row">
                {/* Duplicate column according to products */}
                {
                  userWishlist.map(item => (
                    <div className="col-3" key={item.id}>
                      {/* Cards */}
                      <Card >
                        <Card.Img style={{ height: '250px' }} variant="top" src={item?.image} alt={item?.title} />
                        <Card.Body className='text-center'>
                          <Card.Title>{item?.title}</Card.Title>
                          <div className="d-flex justify-content-evenly">
                            <button onClick={() => dispatch(removeFromWishlist(item))} className="btn btn-danger"><FontAwesomeIcon icon={faHeartCircleXmark} />
                            </button>
                            <button onClick={() => handleCart(item)} className="btn btn-success"><FontAwesomeIcon icon={faCartPlus} /></button>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  ))
                }
              </div>
            </>
            :
            <div className='d-flex justify-content-center align-items-center flex-column'>
              <img className='img-fluid' src="https://imgs.search.brave.com/5ymUvr7Vls5CH_KsabPnESBgucNKrOuxIVMWjoNX2Wc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tdmVj/dG9yL2VtcHR5LXNo/b3BwaW5nLWNhcnRf/ODU0MDc4LTE3NDcu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MCZxPTgw" alt="" />
              <h1>Your wishlist is empty</h1>
              <Link to={'/'} className='btn'>Add More</Link>
            </div>
        }
      </div>
    </>
  )
}

export default Wishlist
