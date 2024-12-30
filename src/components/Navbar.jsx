import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  const Logout=()=>{
    sessionStorage.clear()
    navigate("/")
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">BlogApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/create">Create a post</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/viewall">Viewall post</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/viewmypost">viewmy post</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">SignIn</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/search">Search </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/delete">Delete</Link>
        </li>
        <li className="nav-item">
          <button onClick={Logout} className="btn btn-success">Logout</button>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar