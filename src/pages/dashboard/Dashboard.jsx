import { React, useEffect, useState } from "react";
import Header from "../../component/Header";
import firebase from "firebase";
import NavBar from "../../component/nav";
import { Card, Row, Col } from "react-bootstrap";
import {useParams} from 'react-router-dom'

function Dashboard() {
  if (firebase.apps.length === 0) {
    firebase.initializeApp({
      apiKey: "AIzaSyBK4_ckiJfuDrGH2naN07SmruemW2EjRPM",
      authDomain: "webrtc-dd6e4.firebaseapp.com",
      databaseURL: "https://webrtc-dd6e4-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "webrtc-dd6e4",
      storageBucket: "webrtc-dd6e4.appspot.com",
      messagingSenderId: "143154930393",
      appId: "1:143154930393:web:1465b41294f95cb5f8d4c8",
      measurementId: "G-XV6LN18P27",
    });
  }

  var db = firebase.firestore()
  const [data, setData] = useState([])
  const {role} = useParams()
  
  const agentActive = async () =>{
    await db.collection('isActive').onSnapshot((doc) =>{
      const agentDoc = doc.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      console.log('agent status', agentDoc);
      setData(agentDoc)
    })
  }

  useEffect(() => {
    agentActive();
    console.log(role)
  }, []);

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
              <h1 className="h2">Dashboard</h1>
            </div>

            {/* <canvas className="my-4 w-100 chartjs-render-monitor" id="myChart" width="2196" height="926" style="display: block; width: 1098px; height: 463px;"></canvas> */}

            <h2>Agent Overview</h2>

            <Row className="align-items-center" style={{height:'70vh'}}>
              {data?.map((item) => (
                <>
                <Col className="justify-content-center" style={{padding:'6rem'}}>
                <Card border="primary" style={{width:'25rem', textAlign:'center'}}>
                  <Card.Header>Agent Status {item?.agentNo}</Card.Header>
                  <Card.Body style={{alignItems:'center'}}>
                    <h4>Video Call Handled: {item?.VCHandled}</h4>
                    <h4>In Call: {item?.inCall.toString()}</h4>
                    <h4>Logged In: {item?.loggedIn.toString()}</h4>
                  </Card.Body>
                </Card>
                </Col>
                </>
              ))}
            </Row>

          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
