import React from "react";
import Header from "../../component/Header";
import NavBar from "../../component/nav";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
function PageLog() {
  const [dataLog, setdataLog] = useState([]);

  const getData = async () => {
    await axios
      .get(`https://api-portal.herokuapp.com/api/v1/log`)
      .then((result) => setdataLog(result.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  console.log("dataLog>>>>>>>>>>>>>>", dataLog);
  //   [danger, primary];

  //   setdataColor(random);

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row " style={{ height: "100vh" }}>
          <NavBar />
          <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-column flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Logs Data</h1>
            </div>
            <h2>Log Admin</h2>
            <div className="row d-flex">
              <div className="col">
                {dataLog.map((item) => (
                  <Card border="primary">
                    <Card.Header>Updated by: {item.editedBy}</Card.Header>
                    <Card.Body>
                      <Card.Title>
                        {/* <p>updatedAt: {item.updatedAt}</p>
                        <p>background: {item.background}</p>
                        <p> box: {item.box}</p>
                        <p>title: {item.title}</p>
                        <p>percentage: {item.percentage}</p>
                        <p>percentageLiveness: {item.percentageLiveness}</p>
                        <p>percentageSimilarity: {item.percentageSimilarity}</p> */}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageLog;
