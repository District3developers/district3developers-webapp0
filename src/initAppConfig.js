
import webservices from "./data/webservices.data";
import { exit } from 'process';

import g_config from 'react-global-configuration';

console.log("src/initAppConfig.js");


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

export default g_config;