import React from 'react';
import styles from './styles.module.scss';

const ScrollCircle2: React.FC = () => {
    return (
        <>
            <div className={styles.scrollContainer}>
                <div
                    className={`${styles.btnOutline} ${styles.btnOutline1}`}></div>
                <div
                    className={`${styles.btnOutline} ${styles.btnOutline2}`}></div>

                <span className={styles.span}>scroll</span>
            </div>
        </>
    );
};

export default ScrollCircle2;
