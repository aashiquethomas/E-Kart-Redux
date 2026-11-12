import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../redux/Slices/wishlistSlice';
import Swal from 'sweetalert2';
import { addCart } from '../redux/Slices/cartSlice';

function View() {

  const { id } = useParams()

  const { allProducts } = useSelector(state => state.productReducer)
  const product = allProducts.find(item => item.id === Number(id)) || {}

  const usersWishlist = useSelector(state => state.WishlistReducer)
  const userCart = useSelector(state => state.cartReducer)

  const dispatch = useDispatch()



  const handleWishlist = () => {
    // check the product in the wishlist
    if (!product?.id) return

    const existingItem = usersWishlist.find(item => item.id === product.id)
    if (existingItem) {
      Swal.fire({
        title: "Sorry",
        text: "Product already in your Wishlist",
        icon: "error",
        confirmButtonText: "ok"
      })
    } else {
      dispatch(addToWishlist(product))
    }
  }

  const handleCart = () => {
    // check the product in the cart
    if (!product?.id) return

    const existingItem = userCart.find(item => item.id === product.id)
    dispatch(addCart(product))
    Swal.fire({
      title: "success",
      text: existingItem ? `${existingItem.title} quantity incremented` : "Product added to your cart",
      icon: "success",
      confirmButtonText: "Ok"
    })
  }


  return (
    <>
      <div>
        <Header />
        <div className="container my-5 py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className="img-fluid" src={product?.image} alt={product?.title || ''} />

              <div className="mt-3 d-flex justify-content-evenly">
                <button onClick={handleWishlist} className="btn btn-danger mt-3">Add to Wishlist</button>
                <button onClick={handleCart} disabled={!product?.id} className="btn btn-success mt-3">Add to Cart</button>

              </div>

            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold">{product?.title}</h2>
              <h3 className="fw-bold">$ {product?.price}</h3>
              <h4 className="fw-bold">Brand : {product?.brand}</h4>
              <h4 className="fw-bold">Category : {product?.category}</h4>
              <h4 className="fw-bold">Description : {product?.description}</h4>
              <h5 className="fw-bold">Client Reviews</h5>
              {
                product?.reviews?.map((item, index) => (
                  <div key={index} className="border rounded shadow my-5   p-4">
                    <p><span className="fw-bolder">Name : {item?.reviewerName}</span>{item?.comment}</p>
                    <p>Rating: {item?.rating} <FontAwesomeIcon icon={faStar} className="text-warning mx-1" /></p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default View
