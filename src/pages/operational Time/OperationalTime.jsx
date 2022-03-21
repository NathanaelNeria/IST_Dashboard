import {React, useState} from "react";
import Header from "../../component/Header";
import NavBar from "../../component/nav";
import {Row, Col, Card} from 'react-bootstrap'
import TimeRangePicker from "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker";
import './operational.css'

function OperationalTime() {
  const [value, setValue] = useState('08:00', '17:00')

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

            <h2>Set Bank Operational Hour</h2>
            
            <Row className="justify-content-center">
             <Col className="justify-content-center">
             <Card border="primary">
               <Card.Header>Time</Card.Header>
               <Card.Body>
                 <TimeRangePicker onChange={setValue} value={value} disableClock={true} />
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
