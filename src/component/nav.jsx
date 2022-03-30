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
      <nav id="sidebarMenu " className="h-100">
        <div className="position-sticky shadow h-100">
          <ul className="nav flex-column ps-3 ">
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
