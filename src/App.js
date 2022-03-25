import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrentWeather from "./Components/CurrentWeather.js";
var executed = true;

const key = "89c243fef61e74e5f94ace3dfa882baa";
//Base URL http://api.weatherapi.com/v1


class App extends React.Component{
    constructor() {
        super();
        this.state = {
            zip: undefined,
            city: undefined,
            temps: undefined,
            feelslike: undefined,
            tempMax: undefined,
            tempMin: undefined,
        }
        console.log(this.state)

    }

    getCurrent = async () =>{
        console.log(this.state)

        const api_call = await fetch(
            //"http://api.weatherapi.com/v1/current.json?key="+ KEY + "&q="+ location +"&aqi=no"
            "https://api.openweathermap.org/data/2.5/weather?zip="+ this.state.zip + ",us&appid=" + key
        );
        const response = await api_call.json();

        console.log(response);
        console.log("here");

        this.setState({
            city: response.name,
            temps: this.tempAdjustment(response.main),


        })


    }
    componentDidMount() {
        this.getCurrent();
    }


    tempAdjustment(temps){
        console.log(temps)
        let intTemps = {
            feelslike: parseInt(temps.feels_like),
            temp: parseInt(temps.temp),
            tempMax: parseInt(temps.temp_max),
            tempMin: parseInt(temps.temp_min)
        }
        let finalTemps = {
            feelslike: 1.8*(intTemps.feelslike -273)  + 32,
            temp: 1.8*(intTemps.temp -273 )+ 32,
            tempMax: 1.8*(intTemps.tempMax -273) + 32,
            tempMin: 1.8*(intTemps.tempMin -273)+ 32
        }



        return(
            finalTemps

        )


    }
    handleSubmit(e){
        e.preventDefault();
        this.getCurrent();
    }

    //onChange={event => this.setState({zip: event.target.value})}

    render(){
        console.log(this.state)
        return (
            <div className="App">
                <div className="container h-100">
                    <form  >
                        <div className="row">
                            <div className="col-md-3 offset-md-2">
                                <input
                                    onChange={e => this.setState({zip: e.target.value})}
                                    type="text"
                                    className="form-control"
                                    placeholder="Zip code"
                                    name="ZipCode"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="col-md-3">
                                <input
                                    onChange={e => this.setState({zip: e.target.value})}
                                    type="date"
                                    className="form-control"
                                    placeholder="Start date"
                                    name="StartDate"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
                                <button  onClick={e => this.handleSubmit(e)} className="btn btn-warning">Get Weather</button>
                            </div>
                        </div>
                    </form>
                    <CurrentWeather WeatherData = {this.state}/>
                </div>

            </div>
        );
    }
};

//<UserForm WeatherData={this.state}></UserForm>
//
export default App;
