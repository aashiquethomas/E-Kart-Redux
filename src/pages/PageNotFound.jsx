import React from 'react'
import { Link } from 'react-router'

function PageNotFound() {
  return (
      <div style={{ minHeight: "90vh" }} className="d-flex justify-content-center align-items-center flex-column">
      <img src="https://imgs.search.brave.com/Ioj5ovoZrUZS7qJ6ODhj-n007Zt0z7nABhAOlqGstqU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjUx/MDgzODE4L3ZlY3Rv/ci9lcnJvci00MDQt/cGFnZS13aXRoLWEt/cGFpbnRlci12ZWN0/b3ItaWxsdXN0cmF0/aW9uLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz11NnNmeEth/OGhaX0V3OTVXSXJa/S2tKU0ZYbllpT2tX/NHBhTXFzcWJEZXVR/PQ" alt="image not found" />
      <Link to={"/"} className='btn btn-primary mt-3'>Back to Home</Link>
    </div>
  )
}

export default PageNotFound

