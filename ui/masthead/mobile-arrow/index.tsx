import React from 'react';
import styles from './styles.module.scss'

const MobileArrow: React.FC = () => {
    return (
        <>
            <div className={`${styles.arrow} ${styles.arrowFirst}`}></div>
            <div className={`${styles.arrow} ${styles.arrowSecond}`}></div>
        </>
    );
};

export default MobileArrow;
