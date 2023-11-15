import React from 'react';
import styles from './styles.module.scss'
import TechStackItem from '@/ui/tech-stack/item';

const TechStack: React.FC = () => {
  return (
    <div className={styles.techStack}>
        <div className={styles.techStack__container}>
            <TechStackItem key='1' number='01' title='FRONTEND.'/>
            <TechStackItem key='2' number='02' title='WEB-DESIGN.'/>
            <TechStackItem key='3' number='02' title='MOBILE DEV.'/>
        </div>
    </div>
  )
}

export default TechStack