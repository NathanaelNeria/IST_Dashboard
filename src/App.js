import logo from './logo.svg';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './component/nav';

function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavBar/>
    </nav>
    </>
  );
}

export default App;
