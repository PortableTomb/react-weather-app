import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../../actions/index'; //action creator
import styles from './searchbar.scss'; //sass file

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
       this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term : ''});
    }

    render() {
        return (
            <form   onSubmit={this.onFormSubmit}
                    className={styles.search}>
                <div className={styles.wrap}>
                    <input  value={ this.state.term }
                            onChange={ this.onInputChange }
                            placeholder="Enter US cities for a forecast"
                            className={styles.wrap__input}/>
                    <button type="submit" className={styles.wrap__btn}>search</button>
                </div>     
            </form>
        )
    }
}

function MapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, MapDispatchToProps)(SearchBar);