import { Link } from "react-router"
import Header from "../components/Header"
import { useDispatch, useSelector } from "react-redux"
import { decrementCart, emptyCart, incrementCart, removeCartItem } from "../redux/Slices/cartSlice"
import { useState,useEffect } from "react"
import Swal from "sweetalert2"

function Cart() {

  const userCart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  const [cartTotal,setCartTotal]= useState(0)

  useEffect(()=>{
    setCartTotal(userCart?.reduce((acc,curr)=>acc+curr.totalPrice,0))
  },{userCart})


  const handleDecrementCart = (product)=>{
    if(product.quantity>1){
      dispatch(decrementCart(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }

  const handleCheckout = () =>{
    dispatch(emptyCart())
    Swal.fire({
      title:"Order placed succesfully",
      text:"Thank you for pusrchasing from us",
      icon:"success",
      confirmButtonText:"ok"
    })
    Navigate('/')
  }

  return (
    <>
      <Header />
      {
      userCart.length > 0 ? 
        <div className='container my-5 py-5'>
          <h1 className='text-center text-primary fw-bold'>User's Cart</h1>
          <div className="row">
            <div className="col-lg-8 border border-2 border-primary rounded-3 p-3 shadow-lg">
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Image</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                   {
                    userCart.map((item, index) => (
                       <tr key={item?.id}>
                      <td>{index+1}</td>
                      <td>{item?.title}</td>
                      <td><img  src={item?.thumbnail} alt="no image" /></td>
                      <td>{item?.quantity}</td>
                      <td>
                        <div className='d-flex'>
                          <button className='btn ts-1'>-</button>
                          <input style={{ width: "40px" }} value={item?.quantity} type="text" className='form-control ' readOnly />
                          <button onClick={()=>dispatch(incrementCart)} className='btn ts-1'>+</button>
                        </div>
                      </td>
                      <td>$ {item?.totalPrice}</td>
                      <td onClick={()=>dispatch(removeCartItem(item?.id))} className='text-center'>X</td>
                    </tr>
                    ))
                   }
                  </tbody>
                </table>
                <div className='float-end p-3'>
                  <button onClick={()=>dispatch(emptyCart())} className='btn btn-success'>Empty Cart</button>
                  <Link to={"/"} className='btn btn-primary ms-3'>Shop more</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="border border-2 border-primary rounded-3 p-3 shadow-lg text-center">
                <h3>Total Amount: <span className='text-danger'>$300.00</span></h3>
                <hr />
                <button onClick={()=>dispatch(emptyCart())}className='btn btn-success w-75'>Checkout</button>
              </div>
            </div>
          </div>
        </div>
       : 
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <img className='img-fluid' src="https://imgs.search.brave.com/5ymUvr7Vls5CH_KsabPnESBgucNKrOuxIVMWjoNX2Wc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tdmVj/dG9yL2VtcHR5LXNo/b3BwaW5nLWNhcnRf/ODU0MDc4LTE3NDcu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MCZxPTgw" alt="" />
          <h1>Your wishlist is empty</h1>
          <Link to={'/'} className='btn'>Add More</Link>
        </div>
      
      }
    </>
  )
}

export default Cart
