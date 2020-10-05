/*
SelectRAWWebservice
select raw
questo componente gestisce un tag html select 
raw perché non utilizza nessun componente esterno per la gestione della select
*/
import React, { Component } from "react";
import webservices from "../data/webservices.data";

export default class SelectRAWWebservice extends Component {



    constructor(props) {
        console.log("SelectRAWWebservice::constructor(props)");
        console.log("props", props);
        super(props);
        //this.getWebserviceApi = this.getWebserviceApi.bind(this);
        this.onChangeWebservice = this.onChangeWebservice.bind(this);

        console.log("SelectRAWWebservice::constructor(props) props", props);

        this.state = {
            currentWebservice: ""
        };

    }

    componentDidMount() {
        console.log("SelectRAWWebservice::componentDidMount()");
        console.log("this.props", this.props);
        this.setState((prevState) => {
            return {
                currentWebservice: this.props.current_ws
            };
        });
    }


    onChangeWebservice(event) {
        //let selectedIndex = event.target.selectedIndex;
        //let webservice_port = webservices.options[selectedIndex].value;
        let webservice_port = event.target.value;

        this.setState(function (prevState) {
            return {
                currentWebservice: webservice_port
            };
        });
    }


    render() {

        return (
            <div className="">
                <div className="">
                    {/*"SelectRAWWebservice::render() props:" + this.props.current_ws<br />*/}
                    <label>webserviceapi : &nbsp;</label>
                    {/*<select name="webapi" className="" onChange={this.onChangeWebservice} value="8081">*/}
                    <select name="webapi" className="" onChange={this.onChangeWebservice} value={this.state.currentWebservice}>
                        {webservices.options.map(arr => {

                            //let myselected = (arr.value == this.props.current_ws) ? 'selected' : '';
                            //syntax error on JSX compilation 
                            //return <option {myselected} value={arr.value}>{arr.label}</option>

                            return <option value={arr.value}>{arr.label}</option>
                        })}
                    </select>
                </div>
                <div className="" style={{ padding: "10px 0px", fontSize: "0.8em" }}>
                    {/*descrizione<br />
                    currentWebservice: {this.state.currentWebservice}<br /> currentWebservice descr: */}
                    {webservices.descr_html[this.state.currentWebservice]}
                </div>
                <div className="">
                    <a class="btn btn-primary" target="_self" href={'/?&ws=' + this.state.currentWebservice}>Connetti Webservice</a>
                </div>

            </div >

        );
    }


}


