'use client';

import React, { useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import TechStackItem from '@/ui/tech-stack/tech-stack-item';

const techStackArray = [
    { id: 1, title: 'Frontend.' },
    { id: 2, title: 'Mobile app.' },
    { id: 3, title: 'Animations.' },
    { id: 4, title: 'Web-design.' },
];

const TechStack: React.FC = () => {
    return (
        <div className={styles.techStack2}>
            {techStackArray.map((item, index) => (
                <TechStackItem
                    key={index}
                    title={item.title}
                />
            ))}
        </div>
    );
};

export default TechStack;
