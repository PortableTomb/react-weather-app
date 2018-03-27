import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesBars, SparklinesReferenceLine } from 'react-sparklines';
import styles from './chart.scss';

export default (props) => {

function average(data) {
    return _.round(_.sum(data)/data.length);
}



    return (
        <div>
            <Sparklines className={styles.svg} height="120" width="180" data={props.data}>
                <SparklinesBars style={{ fill: "#41c3f9" }} color={props.color}/>
                <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
                < SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>{average(props.data)}</div>
        </div> 
    );
}