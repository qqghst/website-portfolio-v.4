import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import gsap from 'gsap';
import MobileArrow from '../mobile-arrow';

const MobileButton: React.FC = () => {
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
                <span className='h1'>contact me</span>
                <div className={`${styles.arrow}`}>
                    <MobileArrow />
                </div>
            </Link>
        </div>
    );
};

export default MobileButton;
