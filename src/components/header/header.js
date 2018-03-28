import React from 'react';
import styles from './header.scss';

export default (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
            <div className={styles.header__logo_box}>5DayAVG</div>
            </div>
            <div className={styles.header__about}>about</div>
        </header>
    )
}