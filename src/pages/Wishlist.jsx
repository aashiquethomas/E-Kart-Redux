import React from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCirclePlus, faCartPlus } from '@fortawesome/free-solid-svg-icons';

function Wishlist() {
  return (
    <div className='container my-5'>
      <h1 className='text-center text-primary fw-bold'>User's Wishlist</h1>
      <div className="row">
        {/* Duplicate column according to products */}
        <div className="col-3">
          {/* Cards */}
          <Card >
            <Card.Img style={{ height: '250px' }} variant="top" src="https://imgs.search.brave.com/H0zge1b1vGthnoMkiS40tFMaSr2ZoDL3M069DQ_3Eok/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU4/OTk5NjM2MS9waG90/by9iZWF1dHktcHJv/ZHVjdHMtY29zbWV0/aWNzLXByb2R1Y3Rz/LXBlcmZ1bWUtcHJv/ZHVjdHMtYm9keS1j/YXJlLXByb2R1Y3Rz/LWJhYnktY2FyZS1w/cm9kdWN0cy1hbmQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVlMMHNBSzJ4VFVF/X1pwTW1yTEQ5NldF/LXdDOHlpanoxbHFv/a2Fna011X2c9" />
            <Card.Body className='text-center'>
              <Card.Title>Card Title</Card.Title>
              <div className="d-flex justify-content-evenly">
                <button className="btn btn-danger"><FontAwesomeIcon icon={faHeartCirclePlus}/>
                </button>
                <button className="btn btn-success"><FontAwesomeIcon icon={faCartPlus} /></button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

    </div>
  )
}

export default Wishlist
