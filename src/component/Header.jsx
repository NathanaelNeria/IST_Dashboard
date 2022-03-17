import React from "react";
<<<<<<< HEAD
import {useHistory} from 'react-router-dom'
=======
import { Link } from "react-router-dom";
>>>>>>> cea4889b3adb7dd17f416fce4d428517a30ee1f8

function Header() {
  const history = useHistory()

  const handleSignOut = () => {
    history.push('/')
  }

  return (
    <>
      <div className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 mb-2 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          Bank
        </a>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
<<<<<<< HEAD
            <a className="nav-link px-3" onClick={handleSignOut}>
              Sign out
            </a>
=======
            <Link to="/">
              <a className="nav-link px-3">Sign out</a>
            </Link>
>>>>>>> cea4889b3adb7dd17f416fce4d428517a30ee1f8
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
