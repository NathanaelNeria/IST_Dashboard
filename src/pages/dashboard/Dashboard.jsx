import {React, useEffect, useState} from "react";
import Header from "../../component/Header";
<<<<<<< HEAD
import firebase from "firebase";
// import {initializeApp} from 'firebase/app'


=======
import NavBar from "../../component/nav";
>>>>>>> cea4889b3adb7dd17f416fce4d428517a30ee1f8
function Dashboard() {
  if(firebase.apps.length === 0){
    firebase.initializeApp({
      apiKey: "AIzaSyBK4_ckiJfuDrGH2naN07SmruemW2EjRPM",
      authDomain: "webrtc-dd6e4.firebaseapp.com",
      databaseURL: "https://webrtc-dd6e4-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "webrtc-dd6e4",
      storageBucket: "webrtc-dd6e4.appspot.com",
      messagingSenderId: "143154930393",
      appId: "1:143154930393:web:1465b41294f95cb5f8d4c8",
      measurementId: "G-XV6LN18P27"
    })
  }

  var db = firebase.firestore()
  var scheduleRoom
  var roomAgent1
  var roomAgent2
  

  const agentActive = async () =>{
    await db.collection('isActive').onSnapshot((doc) =>{
      const agentDoc = doc.docs.map((doc) => {
        return{ id: doc.id, ...doc.data()}
      })

      console.log('agent status', agentDoc);
    })
  }

  const schedule = async () => {
    db.collection("rooms").doc('scheduledRoom').collection('scheduledRoomID')
    .onSnapshot((doc) => {
      scheduleRoom = doc.size

      console.log('schedule room ', scheduleRoom);
    })

    
  }

  const agent1 = async () => {
    db.collection('rooms').doc("roomAgent1").collection('roomIDAgent1')
    .onSnapshot((doc) => {
      roomAgent1 = doc.size

      console.log('room agent1', roomAgent1)
    })
  }

  const agent2 = async () => {
    db.collection('rooms').doc("roomAgent2").collection('roomIDAgent2')
    .onSnapshot((doc) => {
      roomAgent2 = doc.size

      console.log('room agent1', roomAgent2)
    })
  }

  useEffect(() => {
    agentActive()
    schedule()
    agent1()
    agent2()
  }, [])
  

  return (
    <>
      {/* <div className="container"> */}
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

            <h2>Section title</h2>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,002</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>
                    <td>visual</td>
                    <td>layout</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>data</td>
                    <td>rich</td>
                    <td>dashboard</td>
                    <td>tabular</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>information</td>
                    <td>placeholder</td>
                    <td>illustrative</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,004</td>
                    <td>text</td>
                    <td>random</td>
                    <td>layout</td>
                    <td>dashboard</td>
                  </tr>
                  <tr>
                    <td>1,005</td>
                    <td>dashboard</td>
                    <td>irrelevant</td>
                    <td>text</td>
                    <td>placeholder</td>
                  </tr>
                  <tr>
                    <td>1,006</td>
                    <td>dashboard</td>
                    <td>illustrative</td>
                    <td>rich</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,007</td>
                    <td>placeholder</td>
                    <td>tabular</td>
                    <td>information</td>
                    <td>irrelevant</td>
                  </tr>
                  <tr>
                    <td>1,008</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,009</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>
                    <td>visual</td>
                    <td>layout</td>
                  </tr>
                  <tr>
                    <td>1,010</td>
                    <td>data</td>
                    <td>rich</td>
                    <td>dashboard</td>
                    <td>tabular</td>
                  </tr>
                  <tr>
                    <td>1,011</td>
                    <td>information</td>
                    <td>placeholder</td>
                    <td>illustrative</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,012</td>
                    <td>text</td>
                    <td>placeholder</td>
                    <td>layout</td>
                    <td>dashboard</td>
                  </tr>
                  <tr>
                    <td>1,013</td>
                    <td>dashboard</td>
                    <td>irrelevant</td>
                    <td>text</td>
                    <td>visual</td>
                  </tr>
                  <tr>
                    <td>1,014</td>
                    <td>dashboard</td>
                    <td>illustrative</td>
                    <td>rich</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,015</td>
                    <td>random</td>
                    <td>tabular</td>
                    <td>information</td>
                    <td>text</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Dashboard;
