'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Logo from '@/ui/navbar/logo';
import Time from '@/ui/navbar/time';
import Menu from '@/ui/navbar/menu';
import gsap from 'gsap';

const Navbar: React.FC = () => {
    const tl = useRef<gsap.core.Timeline | null>(null);

    const logoRef = useRef<HTMLDivElement>(null);
    const timeRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     tl.current = gsap.timeline();

    //     tl.current.fromTo(
    //         [logoRef.current, timeRef.current, menuRef.current],
    //         { opacity: 0 },
    //         { opacity: 1, duration: 0.8, delay: 2, stagger: 0.45 }
    //     );

    //     return () => {
    //         tl.current?.kill();
    //     };
    // }, []);

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__container}>
                <div ref={logoRef}>
                    <Logo />
                </div>
                <div
                    className='hide-on-mobile -translate-x-[3.274vw]'
                    ref={timeRef}>
                    <Time />
                </div>
                <div ref={menuRef}>
                    <Menu />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
