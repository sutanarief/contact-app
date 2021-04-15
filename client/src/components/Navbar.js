import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow mb-5">
      <div className="container-fluid">
        <a class="navbar-brand" to="/">Contact List</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center pe-5 me-5" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" to="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/">Pricing</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}