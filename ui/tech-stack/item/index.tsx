'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import Marquee from 'react-fast-marquee';

interface ITechStackItemProps {
    number: string;
    title: string;
    key: string;
}

const TechStackItem: React.FC<ITechStackItemProps> = ({
    number,
    title,
    key,
}) => {
    const tl = useRef<gsap.core.Timeline | null>(null);

    const titleRef = useRef(null);
    const nextImgRef = useRef(null);

    useEffect(() => {
        tl.current = gsap.timeline();
    }, []);

    const handleHoverEnter = () => {
        if (tl.current) {
            // gsap.to(containerRef.current, { duration: 0.8, y: 120 });
            tl.current.to(nextImgRef.current, {
                width: '200px',
                duration: 0.3,
                ease: 'power2.easeOut',
                // transform: 'scale(1.1)',
                // ease: Power4.easeOut, // Добавляем плавное замедление
                // duration: 0.4,
            });
            tl.current.to(titleRef.current, {
                x: 160,
                duration: 0.3,
                ease: 'power2.easeOut',
            });
        }
    };

    const handleHoverLeave = () => {
        if (tl.current) {
            // gsap.to(containerRef.current, { duration: 0.8, y: 0 });
            tl.current.to(nextImgRef.current, {
                width: '0px',
                transform: 'scale(1)',
                duration: 0.3,
                ease: 'power2.easeOut',
                // ease: Power4.easeOut,
                // duration: 0.4,
            });
            tl.current.to(titleRef.current, {
                x: 0,
                duration: 0.3,
                ease: 'power2.easeOut',
            });
        }
    };

    return (
        <div className={styles.techStackItem}>
            <div className={styles.techStackItem__container}>
                <div
                    className={styles.textWrapper}
                    onMouseEnter={handleHoverEnter}
                    onMouseLeave={handleHoverLeave}>
                    <hr />
                    <div className={styles.text}>
                        <div
                            className={styles.imageContainer}
                            ref={nextImgRef}>
                            <img
                                src='https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp'
                                alt='Ваше изображение'
                            />
                        </div>
                        <span>{number}</span>
                        <span ref={titleRef}>{title}</span>
                        <span>click to see teck stack</span>
                        <Image
                            className={styles.arrow}
                            src='/tech-stack/arrow.svg'
                            alt='arrow'
                            width={20 / 2}
                            height={20 / 2}
                        />
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default TechStackItem;
