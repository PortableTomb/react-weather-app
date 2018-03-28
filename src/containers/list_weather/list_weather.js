import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../../components/chart/chart';
import styles from './list_weather.scss';
// import { log } from 'util';

class ListWeather extends Component {
    renderWeather(data){

    if(!data) {
        let id = Math.round(Math.random() * 100);
        return  (
            <tr key={ id }>
                <td className={styles.table__data_error} colspan="5">Please enter a valid US City.</td>
            </tr>
        )
    } else  {
        const temps = data.list.map(weather => weather.main.temp * 9/5 - 459.67);
        const pressures = data.list.map(weather => weather.main.pressure);
        const humidities = data.list.map(weather => weather.main.humidity);
        const avg = "AVG";
        
            return (
                <tr key={ data.city.id }>
                    <td className={styles.table__data_name}>{ data.city.name }</td>
                    <td><Chart color="red" data={temps} />{avg} Temperature</td>
                    <td><Chart color="green" data={humidities} />{avg} Humidity</td>
                    <td><Chart color="blue" data={pressures} />{avg} Pressure</td>
                </tr>
            )
        }
    }

    render(){
        
        if(!this.props.weather.length) {
            return (
                <div className={styles.start}>Enter a US City to get started.</div>
            )
        } else {
        return (
            <table className={styles.table}>
            <thead className={styles.table__head}>   
                <tr className={styles.table__row}>
                <th className={styles.table__rowhead}>City</th>
                    <th className={styles.table__rowhead}>Temp</th>
                    <th className={styles.table__rowhead}>Humidity</th>
                    <th className={styles.table__rowhead}>Pressure</th>
                </tr>
            </thead>
            <tbody className={styles.table__body}>
                { this.props.weather.map(this.renderWeather)}
            </tbody>
        </table>
        );
        }
    }
}

function MapStateToProps({ weather }) {
    return { weather }; // weather is WeatherReducer Key
}

export default connect(MapStateToProps)(ListWeather)