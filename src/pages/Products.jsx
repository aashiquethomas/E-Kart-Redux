import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';

function Products() {
  return (
    <div className='m-5'>
      <div className="row">
        {/* Duplicate column according to products */}
        <div className="col-3">
          {/* Cards */}
          <Card >
            <Card.Img style={{ height: '250px' }} variant="top" src="https://imgs.search.brave.com/H0zge1b1vGthnoMkiS40tFMaSr2ZoDL3M069DQ_3Eok/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU4/OTk5NjM2MS9waG90/by9iZWF1dHktcHJv/ZHVjdHMtY29zbWV0/aWNzLXByb2R1Y3Rz/LXBlcmZ1bWUtcHJv/ZHVjdHMtYm9keS1j/YXJlLXByb2R1Y3Rz/LWJhYnktY2FyZS1w/cm9kdWN0cy1hbmQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVlMMHNBSzJ4VFVF/X1pwTW1yTEQ5NldF/LXdDOHlpanoxbHFv/a2Fna011X2c9" />
            <Card.Body className='text-center'>
              <Card.Title>Card Title</Card.Title>
              <Link to={`product/:id`} className="btn btn-primary">View</Link>
            </Card.Body>
          </Card>
        </div>
      </div>

    </div>
  )
}

export default Products
