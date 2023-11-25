import logo from './logo.svg';
import './App.css';
import Master from './Master';
import Navigation from './Navbar';
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route, Routes
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Master></Master>
    </div>
  );
}



export default App;
