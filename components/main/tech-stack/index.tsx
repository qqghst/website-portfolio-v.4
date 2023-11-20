'use client';

import React, { useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import TechStackItem from '@/ui/tech-stack/item';
import img from '@/public/white-bg/test.jpeg';

const techStackArray = [
    {
        id: 1,
        title: 'Frontend.',
        imageSrcs: [
            '/tech-stack/js.png',
            '/tech-stack/react.png',
            '/tech-stack/nextjs.png',
            '/tech-stack/tailwind.png',
        ],
    },
    { id: 2, title: 'Mobile app.', imageSrcs: ['/white-bg/test.jpeg'] },
    { id: 3, title: 'Animations.', imageSrcs: ['/white-bg/test.jpeg'] },
    { id: 4, title: 'Web-design.', imageSrcs: ['/white-bg/test.jpeg'] },
];

const TechStack: React.FC = () => {
    return (
        <div className={styles.techStack2}>
            {techStackArray.map((item, index) => (
                <TechStackItem
                    key={index}
                    title={item.title}
                    imageSrcs={item.imageSrcs}
                />
            ))}
        </div>
    );
};

export default TechStack;
