import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import UserForm from "./Form";
//<UserForm WeatherData={props.WeatherData}></UserForm>

/*

                */
const CurrentWeather = (props) =>{
    console.log(props)
    console.log(props.WeatherData.city)
    console.log(props.WeatherData.temps)
    if(props.WeatherData.city == undefined){
        return(
            <div>Type in a zipcode</div>
        )
    }
    else{
        return(
            <div className="Container">
                <div className="Cards">
                    <h1>{props.WeatherData.city}</h1>
                    <h1>{props.WeatherData.temps.feelslike}</h1>
                    <h1>{props.WeatherData.temps.temp}</h1>
                    <h1>{props.WeatherData.temps.tempMax} {props.WeatherData.temps.tempMin}</h1>



                </div>
            </div>
        )
    }


}
export default CurrentWeather;