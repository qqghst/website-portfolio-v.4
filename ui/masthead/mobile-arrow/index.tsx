import React from 'react';
import styles from './styles.module.scss';

interface IMobileArrowProps {
    background?: string;
}

const MobileArrow: React.FC<IMobileArrowProps> = ({ background }) => {
    return (
        <>
            <div
                style={{ background: background }}
                className={`${styles.arrow} ${styles.arrowFirst}`}></div>
            <div
                style={{ background: background }}
                className={`${styles.arrow} ${styles.arrowSecond}`}></div>
        </>
    );
};

export default MobileArrow;
