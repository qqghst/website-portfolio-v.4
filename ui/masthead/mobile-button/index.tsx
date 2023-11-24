import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import gsap from 'gsap';
import MobileArrow from '../mobile-arrow';
import { IMobileButtonProps } from './interface';

const MobileButton: React.FC<IMobileButtonProps> = ({ color, background }) => {
    const tl = useRef<gsap.core.Timeline | null>(null);
    const mobileButtonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        tl.current = gsap.timeline({});

        tl.current.fromTo(
            mobileButtonRef.current,
            { opacity: 0, x: -32 },
            { opacity: 1, x: 0, duration: 1, delay: 1.8 }
        );

        return () => {
            tl.current?.kill();
        };
    }, []);

    return (
        <div
            ref={mobileButtonRef}
            className={`hide-on-desktop ${styles.mobileButton}`}>
            <Link
                href='https://t.me/qqghstk'
                target='_blank'
                rel='noopener noreferrer'>
                <span
                    className='h1'
                    style={{ color: color }}>
                    contact me
                </span>
                <div className={`${styles.arrowContainer}`}>
                    <div
                        style={{ '--background-color': background } as React.CSSProperties} 
                        className={`${styles.arrow} ${styles.arrowFirst}`}></div>
                    <div
                        style={{ background: background }}
                        className={`${styles.arrow} ${styles.arrowSecond}`}></div>
                </div>
            </Link>
        </div>
    );
};

export default MobileButton;
