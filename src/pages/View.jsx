import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../redux/Slices/wishlistSlice';
import Swal from 'sweetalert2';

function View() {

  const { id } = useParams()
  console.log(id);

  const { allProducts } = useSelector(state => state.productReducer)
  const [product, setProduct] = useState({})

  const usersWislist = useSelector(state => state.WishlistReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    setProduct(allProducts?.find(item => item.id == id))
  }, [])

  console.log(products);

  const handleWishlist = () => {
    // check the product in the wishlist
    const existingData = usersWislist.find(item => item.id == product.id)
    if (existingItem) {
      Swal.fire({
        title: "Sorry",
        text: "Product already in your Wishlist",
        icon: "error",
        conifrmButtonText: "ok"
      })
    } else {
      dispatc(addToWishlist(product))
    }
  }


  return (
    <>
      <div>
        <Header />
        <div className="container my-5 py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className="img-fluid" src={product?.thumbnail} alt="" />

              <div className="mt-3 d-flex justify-content-evenly">
                <button onClick="" className="btn btn-danger mt-3">Add to Wishlist</button>
                <button onClick="" className="btn btn-success mt-3">Add to Cart</button>

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
                product?.reviews?.map(item,index => {
                  <div key={index} className="border rounded shadow my-5   p-4">
                    <p><span className="fw-bolder">Name : {item?.reviewerName}</span>{item?.comment}</p>
                    <p>Rating: {item?.rating} <FontAwesomeIcon icon={faStar} className="text-warning mx-1" /></p>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default View
