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
            <Card.Img style={{height: '250px'}} variant="top" src="holder.js/100px180" />
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
