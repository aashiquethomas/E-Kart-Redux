import React from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCirclePlus, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

function Wishlist() {
  const userWishlist = useSelector(state => state.WishlistReducer)

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
                  userWishlist?.map(item => (
                    <div className="col-3">
                      {/* Cards */}
                      <Card >
                        <Card.Img style={{ height: '250px' }} variant="top" src={item?.thumbnail}/>
                        <Card.Body className='text-center'>
                          <Card.Title>Card Title</Card.Title>
                          <div className="d-flex justify-content-evenly">
                            <button className="btn btn-danger"><FontAwesomeIcon icon={faHeartCirclePlus} />
                            </button>
                            <button className="btn btn-success"><FontAwesomeIcon icon={faCartPlus} /></button>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  ))
                }
              </div>
            </>
            :
            <div className='d-flex justify-content-center align-items-center flex-coloumn'>
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
