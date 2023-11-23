'use client';

import React, { useState } from 'react';
import styles from './styles.module.scss';
import TechStackItem from '@/ui/tech-stack/item';
import { techStackData } from './data';

const TechStack: React.FC = () => {
    return (
        <div className={styles.techStack}>
            {techStackData.map((item, index) => (
                <TechStackItem
                    key={index}
                    title={item.title}
                    tools={item.tools}
                />
            ))}
        </div>
    );
};

export default TechStack;
