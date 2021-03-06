import React from "react";
import Header from "../../component/Header";
import NavBar from "../../component/nav";
import ColorPicker from "../../component/ColorPicker";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import AspectRatioRoundedIcon from "@material-ui/icons/AspectRatioRounded";
import FingerprintRoundedIcon from "@material-ui/icons/FingerprintRounded";
import SortByAlphaRoundedIcon from "@material-ui/icons/SortByAlphaRounded";
import CropFreeRoundedIcon from "@material-ui/icons/CropFreeRounded";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`scrollable-force-tabpanel-${index}`} aria-labelledby={`scrollable-force-tab-${index}`} {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

function WebTheming() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    getData();
  };

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
  const role = localStorage.getItem("ROLE");
  const Token = localStorage.getItem("Token");

  const [liveness, setLiveness] = useState();
  const [similarity, setSimilarity] = useState();
  const [backgroundValue, setbackgroundValue] = useState();
  const [boxValue, setboxValue] = useState();
  const [buttonValue, setButtonValue] = useState();
  const [opButtonValue, setopButtonValue] = useState();
  const [title, setTitle] = useState();

  const getOpButton = dataParameter?.operationalButton;
  const getLiveness = dataParameter?.percentageLiveness;
  const getSimilarity = dataParameter?.percentageSimilarity;
  const getBackgroundValue = dataParameter?.background;
  const getBoxValue = dataParameter?.box;
  const getButtonValue = dataParameter?.button;
  const getTitle = dataParameter?.title;

  const handlePercentage = () => {
    const url = `https://api-portal.herokuapp.com/api/v1/${role}/parameter`;
    const Swal = require("sweetalert2");
    console.log(liveness, similarity);

    axios
      .post(url, { percentageLiveness: liveness, percentageSimilarity: similarity }, { headers: { Authorization: `Bearer ${Token}` } })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Done",
          text: "data update",
          footer: "Great!!",
        });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handleOpButton = () => {
    const url = `https://api-portal.herokuapp.com/api/v1/${role}/parameter`;
    const Swal = require("sweetalert2");
    console.log("operational button", opButtonValue);

    axios
      .post(url, { operationalButton: opButtonValue }, { headers: { Authorization: `Bearer ${Token}` } })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Done",
          text: "data update",
          footer: "Great!!",
        });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handleButtonColor = () => {
    const url = `https://api-portal.herokuapp.com/api/v1/${role}/parameter`;
    const Swal = require("sweetalert2");
    axios
      .post(url, { button: buttonValue }, { headers: { Authorization: `Bearer ${Token}` } })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Done",
          text: "data update",
          footer: "Great!!",
        });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handleBox = () => {
    const url = `https://api-portal.herokuapp.com/api/v1/${role}/parameter`;
    const Swal = require("sweetalert2");
    axios
      .post(url, { box: boxValue }, { headers: { Authorization: `Bearer ${Token}` } })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Done",
          text: "data update",
          footer: "Great!!",
        });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handleBackground = () => {
    const url = `https://api-portal.herokuapp.com/api/v1/${role}/parameter`;
    const Swal = require("sweetalert2");
    axios
      .post(url, { background: backgroundValue }, { headers: { Authorization: `Bearer ${Token}` } })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Done",
          text: "data update",
          footer: "Great!!",
        });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handleTitle = () => {
    const url = `https://api-portal.herokuapp.com/api/v1/${role}/parameter`;
    const Swal = require("sweetalert2");
    axios
      .post(url, { title: title }, { headers: { Authorization: `Bearer ${Token}` } })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Done",
          text: "data update",
          footer: "Great!!",
        });

        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getData = async () => {
    await axios
      .get(`https://api-portal.herokuapp.com/api/v1/${role}/parameter`, { headers: { Authorization: `Bearer ${Token}` } })
      .then((result) => {
        setdataParameter(result.data.data[0]);
        // console.log(result.data.data[0])
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, [opButtonValue]);
  console.log("data", dataParameter);
  // console.log("percentage", dataParameter[0]?.percentageLiveness);
  // console.log("background", dataParameter[0]?.background);
  console.log("button", getOpButton);

  console.log("button state", opButtonValue);

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row " style={{ height: "100vh" }}>
          <div className="col-1 m-0 p-0">
            <NavBar />
          </div>

          <div className="col-11">
            <div className="d-flex justify-content-between flex-column flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Web Theming</h1>
            </div>
            <h2 className="mb-5">Theming Console</h2>
            <div className="row ">
              <div className="col">
                <AppBar position="static" color="default">
                  <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="on" indicatorColor="primary" textColor="primary" aria-label="scrollable force tabs example">
                    <Tab label="Background" icon={<AspectRatioRoundedIcon />} {...a11yProps(0)} />
                    <Tab label="Box" icon={<DashboardRoundedIcon />} {...a11yProps(1)} />
                    <Tab label="button Color" icon={<CropFreeRoundedIcon />} {...a11yProps(2)} />
                    <Tab label="Percentage" icon={<FingerprintRoundedIcon />} {...a11yProps(3)} />
                    <Tab label="title" icon={<SortByAlphaRoundedIcon />} {...a11yProps(4)} />
                    <Tab label="Disable Button" icon={<NotInterestedIcon />} {...a11yProps(5)} />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} style={{ display: "flex", justifyContent: "center" }}>
                  <div className="row">
                    <div className="col">
                      <ColorPicker />
                    </div>
                    <div className="col">
                      <Form style={{ marginLeft: "15rem", marginBottom: "2rem" }}>
                        <Form.Group className="mb-3" controlId="liveness">
                          <Form.Label>Background Hexa Color Value</Form.Label>
                          <Form.Control type="string" placeholder={`Current: ${getBackgroundValue}`} style={{ width: "15rem" }} onChange={(e) => setbackgroundValue(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={handleBackground}>
                          Confirm
                        </Button>
                      </Form>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1} style={{ display: "flex", justifyContent: "center" }}>
                  <div className="row">
                    <div className="col">
                      <ColorPicker />
                    </div>
                    <div className="col">
                      <Form style={{ marginLeft: "15rem", marginBottom: "2rem" }}>
                        <Form.Group className="mb-3" controlId="liveness">
                          <Form.Label>Box Hexa Color Value</Form.Label>
                          <Form.Control type="string" placeholder={`Current: ${getBoxValue}`} style={{ width: "15rem" }} onChange={(e) => setboxValue(e.target.value)} value={boxValue} />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={handleBox}>
                          Confirm
                        </Button>
                      </Form>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel value={value} index={2} style={{ display: "flex", justifyContent: "center" }}>
                  <div className="row">
                    <div className="col">
                      <ColorPicker />
                    </div>
                    <div className="col">
                      <Form style={{ marginLeft: "15rem", marginBottom: "1rem" }}>
                        <Form.Group className="mb-2" controlId="liveness">
                          <Form.Label>Button Hexa Color Value</Form.Label>
                          <Form.Control type="string" placeholder={`Current: ${getButtonValue}`} style={{ width: "15rem" }} onChange={(e) => setButtonValue(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={handleButtonColor}>
                          Confirm
                        </Button>
                      </Form>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={3} style={{ display: "flex", justifyContent: "flex-start" }}>
                  <Form>
                    <Form.Group className="mb-3" controlId="liveness">
                      <Form.Label>Face Liveness Percentage</Form.Label>
                      <Form.Control type="number" placeholder={`Current: ${getLiveness}`} style={{ width: "8rem" }} onChange={(e) => setLiveness(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="similarity">
                      <Form.Label>Face Recognition Similarity percentage</Form.Label>
                      <Form.Control type="number" placeholder={`Current: ${getSimilarity}`} style={{ width: "8rem" }} onChange={(e) => setSimilarity(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={handlePercentage}>
                      Confirm
                    </Button>
                  </Form>
                </TabPanel>
                <TabPanel value={value} index={4} style={{ display: "flex", justifyContent: "center" }}>
                  <Form>
                    <Form.Group className="mb-3" controlId="liveness">
                      <Form.Label>Web Title</Form.Label>
                      <Form.Control type="text" placeholder={`Current: ${getTitle}`} style={{ width: "18rem" }} onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={handleTitle}>
                      Confirm
                    </Button>
                  </Form>
                </TabPanel>
                <TabPanel value={value} index={5}>
                  <Form>
                    <label style={{ margin: "1rem" }}>Current value is: {getOpButton?.toString()}</label>
                    <Form.Select defaultValue={!getOpButton} onChange={(e) => setopButtonValue(e.target.value)} style={{ width: "10rem", margin: "1rem" }}>
                      {/* <option>{opButtonValue}</option> */}
                      <option value={true}>True</option>
                      <option value={false}>False</option>
                    </Form.Select>
                    <Button type="button" style={{ margin: "1rem" }} onClick={handleOpButton}>
                      Confirm
                    </Button>
                  </Form>
                </TabPanel>
                <TabPanel value={value} index={6}>
                  Item Seven
                </TabPanel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WebTheming;
