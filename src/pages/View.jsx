import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function View() {
  return (
    <div>
      <div className="container my-5 py-5">
        <div style={{ height: '80vh' }} className="row align-items-center">
          <div className="col-lg-6">
            <img className="img-fluid" src="https://imgs.search.brave.com/H0zge1b1vGthnoMkiS40tFMaSr2ZoDL3M069DQ_3Eok/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU4/OTk5NjM2MS9waG90/by9iZWF1dHktcHJv/ZHVjdHMtY29zbWV0/aWNzLXByb2R1Y3Rz/LXBlcmZ1bWUtcHJv/ZHVjdHMtYm9keS1j/YXJlLXByb2R1Y3Rz/LWJhYnktY2FyZS1w/cm9kdWN0cy1hbmQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVlMMHNBSzJ4VFVF/X1pwTW1yTEQ5NldF/LXdDOHlpanoxbHFv/a2Fna011X2c9" alt="" />

            <div className="mt-3 d-flex justify-content-evenly">
              <button className="btn btn-danger mt-3">Add to Wishlist</button>
              <button className="btn btn-success mt-3">Add to Cart</button>

            </div>

          </div>
          <div className="col-lg-6">
            <h2 className="fw-bold">Title</h2>
            <h3>$ 30.00</h3>
            <h4>Brand :</h4>
            <h4>Category :</h4>
            <h4>Description :</h4>
            <h5>Client Reviews</h5>
            <div className="border rounded shadow my-5   p-4">
              <p><span className="fw-bolder">Name</span>: Review content</p>
              <p>Rating: <FontAwesomeIcon icon={faStar} className="text-warning mx-1" /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View
