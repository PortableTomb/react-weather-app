import React, { Component } from 'react';
import SearchBar from '../../containers/searchbar/searchbar';
import styles from './app.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <SearchBar />
      </div>
    );
  }
}

export default App;
