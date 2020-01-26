import React, { Component } from "react";
import Forms from "./components/form";
import Titles from "./components/title";
import Weather from "./components/weather";

const API_key = "e4148dff8e4d8e4e12ac6081635f0632";

class App extends Component {
  //state is an object that lives within component..that are the users submitting a form,,sum sort of interaction in system that
  //causes data to change

  state = {
    // => : this displayes initial state..they will only change after we click the button,

    temprature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }; //this object contains key-value pair
  //own method getweather()-- this is an array function this is allowed from react 16.. they allow u use the this keyword independenly...class  extends Component {

  getWeather = async e => {
    e.preventDefault(); //used for single page application.... used for preventing the default behaviour of the browser on serice request.
    //await is used for calling http
    //await is used for calling api fetch is use

    const con_city = e.target.elements.city.value;
    const con_country = e.target.elements.country.value;
    console.log(con_city);
    console.log(con_country);
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${con_city},${con_country}&appid=${API_key}`
    ); //it contains a function that make the call to url
    //we need to convert response to JSON format.
    const data = await api_call.json();

    if (con_city && con_country) {
      console.log(data);

      this.setState({
        temprature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description
      });
    } else {
      this.setState({
        temprature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "please enter the value"
      });
    }
  };

  render() {
    //behind scrren... react try to convert this thing to normal code. //built in method that comes..it return jsx....it is js code running in background.. thats why we need bablle...this is jsx..babblle
    return (
      <div>
        <Titles />
        <Forms getWeather={this.getWeather} />
        <Weather
          temprature={this.state.temprature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
        {/* <p>Hello!</p>
        <h1>Yo!</h1> */}
        {/* the purpose of react is have multiple components and they are made one into one file */}
      </div>
    );
  }
}

export default App; //why this line is used..because u r importing this in index.js to make it available in that file u need to export it first
