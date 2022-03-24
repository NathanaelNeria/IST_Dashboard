import React from "react";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory()

  const handleSignout = () =>{
    history.push('/')
  }

  return (
    <>
      <div className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 mb-2 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
         IST Dashboard
        </a>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link px-3" onClick={handleSignout}>
              Sign out
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
