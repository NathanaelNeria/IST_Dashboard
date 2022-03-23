import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom'
import icon from '../assets/ISTicon.png'

function Header() {
  const history = useHistory()
  const {role} = useParams()

  const handleHome = () => {
    history.push('/dashboard/' + role)
  }


  return (
    <>
      <div className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 mb-2 shadow">
        <img src={icon} alt='' width='50px' height='50px' onClick={handleHome}/>
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" onClick={handleHome}>
          IST Dashboard
        </a>
        <button className="navbar-toggler position-absolute d-md-none collapsed" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#sidebarMenu" 
        aria-controls="sidebarMenu" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <Link to="/">
              <a className="nav-link px-3">Sign out</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
