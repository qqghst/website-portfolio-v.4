import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import TechStackItem from '@/ui/tech-stack/tech-stack-item';

const TechStack: React.FC = () => {
    return (
        <div className={styles.techStack2}>
            <TechStackItem title='Frontend.'/>
            <TechStackItem title='Mobile app.'/>
            <TechStackItem title='Animations.'/>
            <TechStackItem title='Web-design.'/>
        </div>
    );
};

export default TechStack;
