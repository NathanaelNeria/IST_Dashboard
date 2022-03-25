import { React, useState } from "react";
import Header from "../../component/Header";
import NavBar from "../../component/nav";
import { Row, Col, Card, Button } from "react-bootstrap";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker";
import "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css";
import axios from "axios";

function OperationalTime() {
  const [value, setValue] = useState(["08:00", "17:00"]);

  const handleAPI = () => {
    const role = localStorage.getItem("ROLE");
    const token = localStorage.getItem("Token");
    const Url = `https://api-portal.herokuapp.com/api/v1/${role}/parameter`;
    const hasil = value[0].replace(":", ".");
    const hasil2 = value[1].replace(":", ".");
    console.log("URL >>>>>>>", Url);

    axios
      .post(
        Url,
        {
          operationalStart: hasil,
          operationalEnd: hasil2,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      });

    // axios
    //   .post(Url, { body: { operationalStart: hasil, operationalEnd: hasil2 } }, { headers: { Authorization: `Bearer ${token}` } })
    //   .then((res) => {
    //     console.log("api>>>>>>>>", res.data);
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row " style={{ height: "100vh" }}>
          <NavBar />
          <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="chartjs-size-monitor">
              <div className="chartjs-size-monitor-expand">
                <div className=""></div>
              </div>
              <div className="chartjs-size-monitor-shrink">
                <div className=""></div>
              </div>
            </div>
            <div className="d-flex justify-content-between flex-column flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Operational Time</h1>
            </div>

            {/* <canvas className="my-4 w-100 chartjs-render-monitor" id="myChart" width="2196" height="926" style="display: block; width: 1098px; height: 463px;"></canvas> */}

            <h2 style={{ paddingInline: "25rem" }}>Set Bank Operational Hour</h2>

            <Row className="align-items-center" style={{ height: "70vh" }}>
              <Col className="justify-content-center" style={{ paddingInline: "30rem" }}>
                <Card border="primary" style={{ width: "20rem", textAlign: "center" }}>
                  <Card.Header>Operational start - end time</Card.Header>
                  <Card.Body>
                    <TimeRangePicker onChange={setValue} value={value} disableClock={true} format="HH:mm" rangeDivider="Until" clearIcon={null} autoFocus={true} />
                    <br />
                    <Button variant="primary" onClick={handleAPI}>
                      Confirm
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default OperationalTime;
