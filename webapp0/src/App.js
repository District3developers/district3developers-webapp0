import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from './logo.svg';

//import g_config from 'react-global-configuration';
import g_config from './initAppConfig';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import SelectRAWWebservice from "./components/selectRAW-webservice.component";

//import webservices from "./data/webservices.data";
//import { exit } from 'process';


console.log("src/App.js");

/*
console.log("webservices.default", webservices.default);

var querystring = require('querystring');
// deve esserci & prima di ogni parametro 
//'?f=a&su=ca' non va bene
//'?&f=a&su=ca' va bene
//var q = querystring.parse('?f=a&su=ca'); // { "?f": "a", su: "ca" }
console.log("window.location.search", window.location.search);
var q = querystring.parse(window.location.search);
console.log("q", q);//
console.log("q.ws", q.ws);
let current_ws = q.ws || webservices.default;
if (!webservices.ws_exists(current_ws)) {
  console.log("not webservices.ws_exists ws", current_ws);
  exit(1);
}
console.log("current_ws", current_ws);
g_config.set({ "current_ws": current_ws });
console.log("g_config.get(current_ws)", g_config.get("current_ws"));
console.log("typeof g_config", (typeof g_config));
console.log("g_config", (g_config));
*/
let current_ws = g_config.get("current_ws");


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

  constructor(props) {

    super(props);

    //this.onChangeWebappApi = this.onChangeWebappApi.bind(this);

    this.state = {
      webappApi: null,
    };
  }

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

              {/*
              <li className="nav-item">
                <div className="nav-link">
                  <label>webapi &nbsp;</label>
                  <select className="">
                    <option value="">select webapi</option>
                    <option value="8080">nodejs-express-mysql</option>
                    <option value="8081">nodejs-express-mongoose-mongodb</option>
                    <option value="8082">nodejs-express-mongoose</option>
                  </select>
                </div>
              </li>
*/}

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

            <div className="row">
              <div className="col-md-8">
                {/*<div>.col-md-8</div>*/}
                <Switch>
                  <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
                  <Route exact path="/add" component={AddTutorial} />
                  <Route path="/tutorials/:id" component={Tutorial} />
                </Switch>

              </div>
              <div className="col-md-4">
                {/*<div>.col-md-4</div>*/}
                <SelectRAWWebservice current_ws={current_ws} />
              </div>
            </div>

          </div>
        </div>
      </Router>

    );
  }
}




export default App;
