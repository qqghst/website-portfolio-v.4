'use client';

import { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import gsap from 'gsap';
import CSSRulePlugin from 'gsap/dist/CSSRulePlugin';
import useWindowSize from '@/hooks/useWindowSize';
import { links } from './data';

const Menu: React.FC = () => {
    gsap.registerPlugin(CSSRulePlugin);
    const tl = useRef<gsap.core.Timeline | null>(null);

    const { width } = useWindowSize();
    const isMobile = width < 768;

    const pathRef = useRef<SVGPathElement | null>(null);

    const toggleBtnRef = useRef<HTMLDivElement | null>(null);
    const menuSpanRef = useRef<HTMLSpanElement | null>(null);
    const hamburgerRef = useRef<HTMLDivElement | null>(null);
    const hamburgerSpanRef = useRef<HTMLSpanElement | null>(null);

    const menuItemsRef = useRef<HTMLDivElement | null>(null);
    const toggleMenuRef = useRef<any>(null);

    useEffect(() => {
        tl.current = gsap.timeline({ paused: true });

        const showMenuItems = () => {
            if (tl.current) {
                const start = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
                const end = 'M0,1005S175,995,500,995s500,5,500,5V0H0Z';

                tl.current
                    .to(pathRef.current, {
                        attr: { d: start },
                        ease: 'power2.in',
                        duration: 1,
                    })
                    .to(
                        pathRef.current,

                        { attr: { d: end }, ease: 'power2.out', duration: 1 }
                    );

                tl.current.to(
                    toggleBtnRef.current,
                    {
                        border: '1px solid #000',
                        ease: 'power2.inOut',
                        duration: 1,
                        // position: 'absolute',
                        // top: 0,
                        // right: 0,
                        // margin: '2.381vw',
                    },
                    '<'
                );

                tl.current.to(
                    menuSpanRef.current,
                    {
                        color: '#000',
                        ease: 'power2.inOut',
                        duration: 1,
                    },
                    '<'
                );

                tl.current.to(
                    hamburgerRef.current,
                    {
                        translateY: 0,
                    },
                    '<'
                );

                tl.current.to(
                    hamburgerSpanRef.current,
                    {
                        background: '#000',
                        ease: 'power2.inOut',
                        duration: 0.6,
                        rotation: 45,
                        transform: 'rotate(45deg)',
                    },
                    '<'
                );

                tl.current.to(
                    CSSRulePlugin.getRule('span#test::before'),
                    {
                        background: '#000',
                        ease: 'power2.inOut',
                        duration: 0.6,
                        top: 'unset',
                        transform: 'rotate(-90deg)',
                    },
                    '<'
                );

                tl.current
                    .to(
                        menuItemsRef.current,
                        {
                            autoAlpha: 1,
                            display: 'flex',
                            duration: 1,
                        },
                        '<'
                    )
                    .reverse();
            }
        };

        toggleMenuRef.current = () => {
            showMenuItems();

            if (toggleBtnRef.current) {
                toggleBtnRef.current.onclick = function () {
                    if (hamburgerRef.current && tl.current) {
                        hamburgerRef.current.classList.toggle('active');
                        tl.current.reversed(!tl.current.reversed());
                        console.log(1);
                    }
                };
            }
        };

        toggleMenuRef.current();

        return () => {
            tl.current?.kill();
        };
    }, []);

    const createLetterSpans = (text: string) => {
        return text.split('').map((char, index) => (
            <span
                key={index}
                className={styles.letter}>
                {char.trim() === '' ? '\xa0' : char}
            </span>
        ));
    };

    return (
        <>
            <div className={styles.overlay}>
                {isMobile ? (
                    <svg
                        viewBox='0 0 100% 100%'
                        style={{ width: '100vw', height: '100vh' }}>
                        <path
                            ref={pathRef}
                            d='M0 2S175 1 500 1s500 1 500 1V0H0Z'></path>
                    </svg>
                ) : (
                    <svg viewBox='0 0 1000 1000'>
                        <path
                            ref={pathRef}
                            d='M0 2S175 1 500 1s500 1 500 1V0H0Z'></path>
                    </svg>
                )}
            </div>

            <div
                className={`${styles.toggleBtn} `}
                ref={toggleBtnRef}>
                <div className={styles.menuSpan}>
                    <span ref={menuSpanRef}>Menu</span>
                </div>
                <div
                    className={styles.hamburger}
                    ref={hamburgerRef}>
                    <span
                        id='test'
                        ref={hamburgerSpanRef}></span>
                </div>
            </div>

            <div
                className={styles.menuItems}
                ref={menuItemsRef}>
                <div className={styles.menuContainer}>
                    {links.map((item, index) => (
                        <div
                            key={item.id}
                            className={`h1 ${styles.text}`}>
                            <Link
                                href={item.href}
                                className={styles.block}
                                onClick={() => toggleMenuRef.current()}>
                                {createLetterSpans(item.label)}
                            </Link>
                            <Link
                                href={item.href}
                                className={styles.block}
                                onClick={() => toggleMenuRef.current()}>
                                {createLetterSpans(item.label)}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Menu;
