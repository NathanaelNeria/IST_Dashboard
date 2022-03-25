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
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import axios from "axios";
import { useEffect, useState } from "react";
import reactRouterDom from "react-router-dom";
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

function WebTheming() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [dataParameter, setdataParameter] = useState({
    background: "",
    box: "",
    button: "",
    percentage: 0,
    title: "",
    attributes: [""],
    operationalEnd: 0,
    operationalStart: 0,
    percentageLiveness: 0,
    percentageSimilarity: 0,
  });
  const role = localStorage.getItem("ROLE");
  const Token = localStorage.getItem("Token");

  const switchValue = [0,1]

  const handleSwitch = () => {
    console.log(switchValue);
  }

  const getData = async () => {
    await axios
      .get(`https://api-portal.herokuapp.com/api/v1/${role}/parameter`, { headers: { Authorization: `Bearer ${Token}` } })
      .then((result) => setdataParameter(result.data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  console.log("data", dataParameter);
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row " style={{ height: "100vh" }}>
          <NavBar />
          <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-column flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Web Theming</h1>
            </div>
            <h2 className="mb-5">Theming Console</h2>
            <div className="row">
              <div className="col">
                <AppBar position="static" color="default">
                  <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="on" indicatorColor="primary" textColor="primary" aria-label="scrollable force tabs example">
                    <Tab label="Background" icon={<AspectRatioRoundedIcon />} {...a11yProps(0)} />
                    <Tab label="Box" icon={<DashboardRoundedIcon />} {...a11yProps(1)} />
                    <Tab label="Percentage" icon={<FingerprintRoundedIcon />} {...a11yProps(2)} />
                    <Tab label="title" icon={<SortByAlphaRoundedIcon />} {...a11yProps(3)} />
                    <Tab label="button" icon={<CropFreeRoundedIcon />} {...a11yProps(4)} />
                    <Tab label="Disable Button" icon={<NotInterestedIcon/>} {...a11yProps(5)} />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} style={{ display: "flex", justifyContent: "center" }}>
                  <ColorPicker />
                </TabPanel>
                <TabPanel value={value} index={1} style={{ display: "flex", justifyContent: "center" }}>
                  <ColorPicker />
                </TabPanel>
                <TabPanel value={value} index={2}>
                <Form>
                  <Form.Group className="mb-3" controlId="liveness">
                    <Form.Label>Face Liveness Percentage</Form.Label>
                    <Form.Control type="number" placeholder="75" style={{width: '5rem'}}/>                
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="similarity">
                    <Form.Label>Face Recognition Similarity percentage</Form.Label>
                    <Form.Control type="number" placeholder="75" style={{width: '5rem'}}/>
                  </Form.Group>
                  <Button variant="primary" type="button">
                    Confirm
                  </Button>
                </Form>
                </TabPanel>
                <TabPanel value={value} index={3} style={{ display: "flex", justifyContent: "center" }}>
                  <label htmlFor="Button">Web Title :</label>
                  <input style={{ border: "2px solid #E9001C", boxShadow: "0px 2px 2px FF001E" }} type="text" id="background" name="color" />
                </TabPanel>
                <TabPanel value={value} index={4} style={{ display: "flex", justifyContent: "center" }}>
                  <ColorPicker />
                </TabPanel>
                <TabPanel value={value} index={5}>
                <Form>
                  <Form.Check 
                    type="switch"
                    id="create-call-switch"
                    label="Disable Agent Create Call Button"
                  />
                  <Form.Check 
                    type="switch"
                    label="Disable Mobile End Call Button"
                    id="end-call-switch"
                    // checked={}
                  />
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
