import logo from './logo.svg';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='App-header'>
      <div className='App'>
      <Container fluid>
      <Row>
        <Col>Dashboard</Col>
        <Col>Parameter</Col>
      </Row>
    </Container>
    </div>
    </div>
  );
}

export default App;
