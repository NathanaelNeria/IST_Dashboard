/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import * as FcIcons from "react-icons/fc";
import { useParams } from "react-router-dom";

function NavBar() {
  const { role } = useParams();

  const handleRoute = (route) => {
    window.location.href = "/" + route + "/" + role;
  };

  return (
    <>
      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
          <ul className="nav flex-column d-flex align-content-center align-item-center">
            <li className="nav-item ">
              <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
                <FcIcons.FcHome style={{ height: "80px", width: "80px" }} />
                <p style={{ color: "#0072A0" }}> Dashboard</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/webTheming"} style={{ textDecoration: "none" }}>
                <FcIcons.FcMindMap style={{ height: "80px", width: "80px" }} />
                <p style={{ color: "#0072A0" }}> WebTheming</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/operationalTime"} style={{ textDecoration: "none" }}>
                <FcIcons.FcClock style={{ height: "80px", width: "80px" }} />
                <p style={{ color: "#0072A0" }}> Operational Time</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/roomVideoCall"} style={{ textDecoration: "none" }}>
                <FcIcons.FcCustomerSupport style={{ height: "80px", width: "80px" }} />
                <p style={{ color: "#0072A0" }}> Rooms Video Call</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/pageLog"} style={{ textDecoration: "none" }}>
                <FcIcons.FcDataConfiguration style={{ height: "80px", width: "80px" }} />
                <p style={{ color: "#0072A0" }}> Admin Log</p>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to={"/adminManagement"} style={{ textDecoration: "none" }}>
                <FcIcons.FcConferenceCall style={{ height: "80px", width: "80px" }} />
                <p style={{ color: "#0072A0" }}> Admin Management</p>
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
