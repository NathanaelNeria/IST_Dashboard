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
    operationalButton: false
  });
  
  const [value, setValue] = useState();

  const handleGetBE = async () => {
    const Url = `https://api-portal.herokuapp.com/api/v1/${role}/parameter`

    await axios.get(Url, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      setdataParameter(res.data.data)
    })
    .catch((e)=>console.log(e))
  }

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
  }, [])

  console.log('operational start', dataParameter[0]?.operationalStart)
  console.log('operational end', dataParameter[0]?.operationalEnd)

  const handleConvert = () => {
    let startTime
    let endTime

    startTime = dataParameter[0]?.operationalStart
    endTime = dataParameter[0]?.operationalEnd

    const stringStart = startTime.toString()
    const stringEnd = endTime.toString()

    const startTimeLength = stringStart.length
    const endTimeLength = stringEnd.length

    if(startTimeLength === 1 && endTimeLength === 2){
      const startHour = stringStart[0]
      const startMin = ':00'
      const sTime = startHour + startMin

      const endHour = stringEnd[0] + stringEnd[1]
      const endMin = ':00'
      const eTime = endHour + endMin

      // setValue(sTime, eTime)
      console.log(sTime, eTime)
    }
    else if(startTimeLength === 3 && endTimeLength === 4){
      const startHour = stringStart[0]
      const floatEnd = parseFloat(stringStart[2] + stringStart[3] * 60)
      const sTime = startHour + ':'

      const endHour = stringEnd[0] + stringEnd[1]
      const endMin = stringEnd[3]
      const eTime = endHour + ':' + endMin

      // setValue(sTime, eTime)
      console.log(sTime, eTime)
    }
  }

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
                    <Button variant="primary" onClick={handleConvert}>
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
