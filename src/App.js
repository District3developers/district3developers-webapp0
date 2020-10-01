import React, { Component }  from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from './logo.svg';
import './App.css';

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";


/*
///ok!!
///var/www/prjs_studio/react/prj_switch_app/createreactapp_default_sources/src/App.js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

class App extends Component {
  render() {
  return (

    <Router>
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="http://reabiagioblog.it/react/index_app_demo.html" className="navbar-brand">
          React demo index
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

{/* 
      <div className="prova">
        process.env.REACT_APP_WEB_API_BASEURL = {process.env.REACT_APP_WEB_API_BASEURL}
        process.env.NODE_ENV = {process.env.NODE_ENV}
      </div>
      <div className="prova">
        process.env.REACT_APP_NOT_SECRET_CODE = {process.env.REACT_APP_NOT_SECRET_CODE}
      </div>
*/}


{/* A JSX comment */}
{/* si fa riferimeto a dei componneti: TutorialsList, AddTutorial, Tutorial */}
{/* quindi è necessario che siano definiti ed esportati, altrimenti vinee generato un messaggio di eerore (difficilmente decifrabile) */}

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} />
        </Switch>
      </div>
    </div>
  </Router>

  );
  }
}




export default App;
