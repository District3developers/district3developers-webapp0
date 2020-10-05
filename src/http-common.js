import axios from "axios";
import g_config from 'react-global-configuration';

console.log("src/http-common.js");

// baseURL: "http://localhost:8080/api",
// baseURL: process.env.REACT_APP_WEB_API_BASEURL,


//let ws_port = g_config.get("current_ws", "123456");
let ws_port = g_config.get("current_ws");
console.log("ws_port", ws_port);

console.log("typeof g_config", (typeof g_config));
console.log("g_config", (g_config));

// le variabili in ,env devono iniziare con REACT_APP_
let webservice_api_baseurl = process.env.REACT_APP_WEBSERVICE_API_BASEURL;
console.log("webservice_api_baseurl", webservice_api_baseurl);
webservice_api_baseurl = webservice_api_baseurl.replace('%PORT%', ws_port);
console.log("webservice_api_baseurl", webservice_api_baseurl);

const http_axios_config = {
  baseURL: webservice_api_baseurl,
  headers: {
    "Content-type": "application/json"
  }
};

export default axios.create(http_axios_config);