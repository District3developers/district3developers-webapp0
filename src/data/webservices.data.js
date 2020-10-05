
import React from "react";

//export default const webservices = {};
const webservices = {};

webservices.default = '8080';

webservices.options = [
    { value: '', label: 'select webapi' },
    { value: '8080', label: 'nodejs-express-mysql' },
    { value: '8081', label: 'nodejs-express-mongoose' },
    { value: '8082', label: 'nodejs-express-mongodb' }
];
//Boolean({}) true 
webservices.ws_exists = function (ws) {
    //webservices.options.forEach()
    //if (webservices.options.find((opt) => { return opt.value === ws; })) { return true; } else { return false; }
    return Boolean(webservices.options.find((opt) => { return opt.value === ws; }));
}

webservices.descr_html = {};

webservices.descr_html[''] = <div></div>

webservices.descr_html['8080'] = <div data-data_upload="20200917">
    webservice nodejs+express che si connette al database mysql
</div>

webservices.descr_html['8081'] = <div data-data_upload="20200917">
    webservice nodejs+express che
    utilizza l' ODM (Object Document Mapper) Mongoose,
    e si connette al database MongoDB
</div>

webservices.descr_html['8082'] = <div data-data_upload="20201003">
    webservice nodejs+express che utilizza il driver mongodb,
    e si connette al database MongoDB
</div>


export default webservices;
