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
  console.log("dataLog>>>>>>>>>>>>>>", dataLog?.data);
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
            <div className="row">
              <div className="col ">
                {dataLog?.data?.map((item) => (
                  <Card border="primary" className="mb-5">
                    <Card.Header>Updated by:{item[0]?.editedBy} </Card.Header>
                    <Card.Body>
                      <Card.Title>
                        <p>updatedAt:{item[1]?.updatedAt} </p>
                        <p>background: {item[1]?.background}</p>
                        <p> box: {item[1]?.box}</p>
                        <p> button: {item[1]?.button}</p>
                        <p>title: {item[1]?.title}</p>
                        <p>percentage: {item[1]?.percentage}</p>
                        <p>operationalStart: {item[1]?.operationalStart}</p>
                        <p>operationalEnd: {item[1]?.operationalEnd}</p>
                        <p>percentageLiveness: {item[1]?.percentageLiveness}</p>
                        <p>percentageSimilarity: {item[1]?.percentageSimilarity}</p>
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
