'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Logo from '@/ui/navbar/logo';
import Time from '@/ui/navbar/time';
import Menu from '@/ui/navbar/menu';
import gsap from 'gsap';

const Navbar: React.FC = () => {
    const logoRef = useRef<HTMLDivElement>(null);
    const timeRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        gsap.fromTo(
            [logoRef.current, timeRef.current, menuRef.current],
            { opacity: 0 },
            { opacity: 1, duration: 1, delay: 3, stagger: 0.6 }
        );
    }, []);

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__container}>
                <div ref={logoRef}>
                    <Logo />
                </div>
                <div
                    className='hide-on-mobile'
                    ref={timeRef}>
                    <Time />
                </div>
                <div className='opacity-0 hidden'>
                    <span>Menu</span>
                </div>
                <div ref={menuRef}>
                    <Menu />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
