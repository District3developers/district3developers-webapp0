import axios from "axios";

// baseURL: "http://localhost:8080/api",
// baseURL: process.env.REACT_APP_WEB_API_BASEURL,

export default axios.create({
  baseURL: process.env.REACT_APP_WEB_API_BASEURL,
  headers: {
    "Content-type": "application/json"
  }
});