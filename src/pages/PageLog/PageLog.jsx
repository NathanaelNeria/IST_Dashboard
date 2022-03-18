import React from "react";
import Header from "../../component/Header";
import NavBar from "../../component/nav";
import { Card } from "react-bootstrap";
function PageLog() {
  //   const [dataParameter, setdataParameter] = useState({
  //     updatedAt: "2022-03-18T08:44:40.698Z",
  //     background: "asdasd",
  //     box: "asdasd",
  //     button: "asdads",
  //     percentage: 22,
  //     title: "leperasd",
  //     attributes: ["asdasd"],
  //     operationalEnd: 17,
  //     operationalStart: 5,
  //     username: "Nathanael",
  //   });
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
                <Card border="primary">
                  <Card.Header>Updated by: [Admin1]</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <p>updatedAt: '2022-03-18T08:44:40.698Z'</p>
                      <p>background: asdasd</p>
                      <p> box: asdasd</p>
                      <p>title: leperasd</p>
                      <p>operationalEnd: 17.00</p>
                      <p>operationalStart: 09.30</p>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>

              <div className="col">
                <Card border="info">
                  <Card.Header>Updated by: [Admin1]</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <p>updatedAt: '2022-03-18T08:44:40.698Z'</p>
                      <p>background: asdasd</p>
                      <p> box: asdasd</p>
                      <p>title: leperasd</p>
                      <p>operationalEnd: 17.00</p>
                      <p>operationalStart: 09.30</p>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card border="primary">
                  <Card.Header>Updated by: [Admin1]</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <p>updatedAt: '2022-03-18T08:44:40.698Z'</p>
                      <p>background: asdasd</p>
                      <p> box: asdasd</p>
                      <p>title: leperasd</p>
                      <p>operationalEnd: 17.00</p>
                      <p>operationalStart: 09.30</p>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card border="danger">
                  <Card.Header>Updated by: [Admin1]</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <p>updatedAt: '2022-03-18T08:44:40.698Z'</p>
                      <p>background: asdasd</p>
                      <p> box: asdasd</p>
                      <p>title: leperasd</p>
                      <p>operationalEnd: 17.00</p>
                      <p>operationalStart: 09.30</p>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card border="info">
                  <Card.Header>Updated by: [Admin1]</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <p>updatedAt: '2022-03-18T08:44:40.698Z'</p>
                      <p>background: asdasd</p>
                      <p> box: asdasd</p>
                      <p>title: leperasd</p>
                      <p>operationalEnd: 17.00</p>
                      <p>operationalStart: 09.30</p>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card border="warning">
                  <Card.Header>Updated by: [Admin1]</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <p>updatedAt: '2022-03-18T08:44:40.698Z'</p>
                      <p>background: asdasd</p>
                      <p> box: asdasd</p>
                      <p>title: leperasd</p>
                      <p>operationalEnd: 17.00</p>
                      <p>operationalStart: 09.30</p>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageLog;
