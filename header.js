import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
 


export default function header(props) {
  return (
    <div>
        <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">ABOUT</Link>
        </li>
       </ul>
          
      
     
    </div>
  </div>
</nav>
</>
    </div>
  )
}
header.propTypes={
    title: PropTypes.string

}
    


