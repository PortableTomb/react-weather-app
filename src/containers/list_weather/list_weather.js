import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../../components/chart/chart';
import styles from './list_weather.scss';

class ListWeather extends Component {
    renderWeather(data){

    if(!data) {
        let id = Math.round(Math.random() * 100);
        return  (
        <tr key={ id }>
            <td>Please enter a valid US City.</td>
        </tr>
        )
    } else  {
        const temps = data.list.map(weather => weather.main.temp * 9/5 - 459.67);
        const pressures = data.list.map(weather => weather.main.pressure);
        const humidities = data.list.map(weather => weather.main.humidity);
        
        return (
            <tr key={ data.city.id }>
                <td>{ data.city.name }</td>
                <td><Chart color="red" data={temps} /></td>
                <td><Chart color="green" data={humidities} /></td>
                <td><Chart color="blue" data={pressures} /></td>
            </tr>
        )
        }
    }

    render(){
        return (
            <table className={styles.table}>
                <thead className="table_head">
                    <tr className="table_row">
                        <th className="table_head">City</th>
                        <th className="table_head">Temp</th>
                        <th className="table_head">Humidity</th>
                        <th className="table_head">Pressure</th>
                    </tr>
                </thead>
                <tbody className="table_body">
                    
                    
                    { this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function MapStateToProps({ weather }) {
    return { weather }; // weather is WeatherReducer Key
}

export default connect(MapStateToProps)(ListWeather)