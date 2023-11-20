import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import TechStack2Item from './item';

const TechStack2: React.FC = () => {
    return (
        <div className={styles.techStack2}>
            {/* <TechStack2Item /> */}
            <TechStack2Item title='Frontend.'/>
            <TechStack2Item title='Mobile app.'/>
            <TechStack2Item title='Animations.'/>
            <TechStack2Item title='Web-design.'/>
        </div>
    );
};

export default TechStack2;
