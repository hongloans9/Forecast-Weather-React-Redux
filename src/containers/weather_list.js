import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityData){
        const cityName = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp),(temp) => temp - 273);
        const press = cityData.list.map(weather => weather.main.pressure);
        const humi = cityData.list.map(weather => weather.main.humidity);
        const {lat, lon} = cityData.city.coord;
        return(
            <tr key={cityName}>
                <td>
                    <GoogleMap lat={lat} lon={lon}/>
                </td>
                <td>
                    <Chart data={temps} color="blue" unit="°C"/>
                </td>
                <td>
                    <Chart data={press} color="green" unit="hPa"/>
                </td>
                <td>
                    <Chart data={humi} color="orange" unit="%"/>
                </td>
            </tr>
        );
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (°C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}
function mapStateToProps(state) {
    return { weather: state.weather};
}
export default connect(mapStateToProps)(WeatherList);
