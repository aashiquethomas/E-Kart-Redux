import { Link } from "react-router"
import React from "react"
import Header from "../components/Header"

function Cart() {
  return (
    <>
      <Header />
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
                  <tr>
                    <td>1</td>
                    <td>Eyeshadow Palette with Mirror</td>
                    <td><img width={"50px"} height={"50px"} src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp" alt="no image" /></td>
                    <td>
                      <div className='d-flex'>
                        <button className='btn ts-1'>-</button>
                        <input style={{ width: "40px" }} value={10} type="text" className='form-control' readOnly />
                        <button className='btn ts-1'>+</button>
                      </div>
                    </td>
                    <td>30</td>
                    <td className='text-center'>X</td>
                  </tr>
                </tbody>
              </table>
              <div className='float-end p-3'>
                <button className='btn btn-success'>Empty Cart</button>
                <Link to={"/"} className='btn btn-primary ms-3'>Shop more</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="border border-2 border-primary rounded-3 p-3 shadow-lg text-center">
            <h3>Total Amount: <span className='text-danger'>$300.00</span></h3>
            <hr />
            <button className='btn btn-success w-75'>Checkout</button>
          </div>
          </div>
        </div>
  
      </div>
    </>
  )
}

export default Cart
