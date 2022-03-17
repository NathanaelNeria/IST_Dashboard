import {React, useEffect, useState} from "react";
import Header from "../../component/Header";
import NavBar from "../../component/nav";
import {Card} from 'react-bootstrap'
import firebase from "firebase";

function Rooms() {
  const [roomAgent1, setRoomAgent1] = useState(0)
  const [scheduleRoom, setScheduleRoom] = useState(0)
  const [roomAgent2, setRoomAgent2] = useState(0)
  var db = firebase.firestore()

  const schedule = async () => {
    db.collection("rooms").doc('scheduledRoom').collection('scheduledRoomID')
    .onSnapshot((doc) => {
      setScheduleRoom(doc.size)

      console.log('schedule room ', scheduleRoom);
    })

    
  }

  const agent1 = async () => {
    db.collection('rooms').doc("roomAgent1").collection('roomIDAgent1')
    .onSnapshot((doc) => {
      setRoomAgent1(doc.size)

      console.log('room agent1', roomAgent1)
    })
  }

  const agent2 = async () => {
    db.collection('rooms').doc("roomAgent2").collection('roomIDAgent2')
    .onSnapshot((doc) => {
      setRoomAgent2(doc.size)

      console.log('room agent1', roomAgent2)
    })
  }

  useEffect(() => {
    schedule()
    agent1()
    agent2()
  }, [])
  

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
              <h1 className="h2">Room Video Call</h1>
            </div>

            {/* <canvas className="my-4 w-100 chartjs-render-monitor" id="myChart" width="2196" height="926" style="display: block; width: 1098px; height: 463px;"></canvas> */}

            <h2 style={{marginBottom: "10rem"}}>Rooms in queue</h2>
            <div className="row d-flex">
              <div className="col">
                <Card border='primary'>
                  <Card.Header>Schedule active room</Card.Header>
                  <Card.Body>
                    <Card.Title>{scheduleRoom}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card border = 'primary'>
                  <Card.Header>Agent 1 customer queue</Card.Header>
                  <Card.Body>
                  <Card.Title>{roomAgent1}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card border = 'primary'>
                  <Card.Header>Agent 2 customer queue</Card.Header>
                  <Card.Body>
                  <Card.Title>{roomAgent2}</Card.Title>
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

export default Rooms;
