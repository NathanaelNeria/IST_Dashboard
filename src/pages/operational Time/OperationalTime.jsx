import { React, useState, useEffect } from "react";
import Header from "../../component/Header";
import NavBar from "../../component/nav";
import { Row, Col, Card, Button } from "react-bootstrap";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker";
import "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css";
import axios from "axios";

function OperationalTime() {
  const role = localStorage.getItem("ROLE");
  const token = localStorage.getItem("Token");

  const [dataParameter, setdataParameter] = useState({
    background: "",
    box: "",
    button: "",
    title: "",
    attributes: [""],
    operationalEnd: 0,
    operationalStart: 0,
    percentageLiveness: 0,
    percentageSimilarity: 0,
    operationalButton: false,
  });

  const handleConvert = (number) => {
    // Check sign of given number
    var sign = (number >= 0) ? 1 : -1;

    // Set positive value of number of sign negative
    number = number * sign;

    // Separate the int from the decimal part
    var hour = Math.floor(number);
    var decpart = number - hour;

    var min = 1 / 60;
    // Round to nearest minute
    decpart = min * Math.round(decpart / min);

    var minute = Math.floor(decpart * 60) + '';

    // Add padding if need
    if (minute.length < 2) {
    minute = '0' + minute; 
    }

    // Add Sign in final result
    sign = sign == 1 ? '' : '-';

    // Concate hours and minutes
    var time = sign + hour + ':' + minute;
    
    return time
  };

  const [value, setValue] = useState([]);
  const startTime = dataParameter?.operationalStart
  const endTime = dataParameter?.operationalEnd
  const sTime = handleConvert(startTime)
  const eTime = handleConvert(endTime)

  const handleGetBE = async () => {
    const Url = `https://api-portal.herokuapp.com/api/v1/${role}/parameter`;

    await axios
      .get(Url, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setdataParameter(res.data.data[0]);
      })
      .catch((e) => console.log(e));

    
  };

  const handleAPI = () => {
    const Url = `https://api-portal.herokuapp.com/api/v1/${role}/parameter`;

    const startHour = parseFloat(value[0][0] + value[0][1]);
    const startMin = parseFloat((value[0][3] + value[0][4]) / 60);
    const endHour = parseFloat(value[1][0] + value[1][1]);
    const endMin = parseFloat((value[1][3] + value[1][4]) / 60);

    const start = startHour + startMin;
    const end = endHour + endMin;

    console.log(start, end);

    axios
      .post(Url, { operationalEnd: end, operationalStart: start }, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleGetBE()
    console.log(startTime, endTime)
  }, []);

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row " style={{ height: "100vh" }}>
          <div className="col-1 m-0 p-0">
            <NavBar />
          </div>
          <div className="col-11">
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
