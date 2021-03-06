import React from "react";
import Header from "../../component/Header";
import NavBar from "../../component/nav";
function AdminManagement() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row " style={{ height: "100vh" }}>
          <div className="col-1 m-0 p-0">
            <NavBar />
          </div>

          <div className="col-11">
            <div className="d-flex justify-content-between flex-column flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Admin Management</h1>
            </div>
            <h2>Admin or Superviser data</h2>
            <div className="row">
              <div className="col">
                <h5>Haloooo</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminManagement;
