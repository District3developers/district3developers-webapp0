/*
SelectCRSWebservice
select CRS
questo componente gestisce un tag html select 
CRS sta per Component React-Select
perché utilizza il componente React-Select per la gestione della select
*/

import React, { Component } from "react";

const options = [
    { value: '', label: 'select webapi' },
    { value: '8080', label: 'nodejs-express-mysql' },
    { value: '8081', label: 'nodejs-express-mongoose-mongodb' },
    { value: '8082', label: 'nodejs-express-mongoose' }
];

export default class SelectCRSWebservice extends Component {

    constructor(props) {
        super(props);
        //this.getWebserviceApi = this.getWebserviceApi.bind(this);
        //this.onChangeWebserviceApi = this.onChangeWebserviceApi.bind(this);

        this.state = {
            currentWebserviceApi: {
                url: "",
                description: ""
            }
        };


    }

    componentDidMount() {
        //this.getTutorial(this.props.match.params.id);
    }

    onChangeWebserviceApi(e) {
        const url = e.target.value;

        this.setState(function (prevState) {
            return {

                currentWebserviceApi: {
                    url: "",
                    description: ""
                }


            };
        });
    }

    getWebserviceApi(url) {
        this.setState({
            currentWebserviceApi: {
                url: "",
                description: ""
            }
        });
    }


    render() {
        //const { currentTutorial } = this.state;

        return (
            <div className="nav-link">
                <label>webapi &nbsp;</label>
                <select className="">
                    <option value="">select webapi</option>
                    <option value="8080">nodejs-express-mysql</option>
                    <option value="8081">nodejs-express-mongoose-mongodb</option>
                    <option value="8082">nodejs-express-mongoose</option>
                </select>
            </div>



        );
    }


}


