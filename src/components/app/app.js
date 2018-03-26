import React, { Component } from 'react';
import SearchBar from '../../containers/searchbar/searchbar';
import ListWeather from '../../containers/list_weather/list_weather'
import styles from './app.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <SearchBar />
        <ListWeather />
      </div>
    );
  }
}

export default App;
