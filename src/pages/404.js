import React from 'react'
import '../styling/style.css'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <div className="container skinnier taCenter">
    <h2 style={{ marginTop: '200px', textAlign: 'center' }}>
      404 - Page Not Found
    </h2>
    <p style={{ textAlign: 'center', lineHeight: '1.5' }}>
      We can't find the page you are looking for!
      <br />
      Head back to <Link to="/">Home</Link>
    </p>
  </div>
)

export default NotFoundPage
