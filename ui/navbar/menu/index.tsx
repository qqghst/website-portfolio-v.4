'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import CSSRulePlugin from 'gsap/dist/CSSRulePlugin';
import SplitType from 'split-type';
import styles from './styles.module.scss';
import Link from 'next/link';
import useWindowSize from '@/hooks/useWindowSize';

export default function Menu() {
    gsap.registerPlugin(CSSRulePlugin);
    
    const { width } = useWindowSize();
    const isMobile = width < 768;

    const toggleMenuRef = useRef<any>(null);

    const menuSpanRef = useRef<HTMLSpanElement | null>(null);
    const hamburgerSpanRef = useRef<HTMLSpanElement | null>(null);
    const menuItemsRef = useRef<HTMLDivElement | null>(null);

    const pathRef = useRef<SVGPathElement | null>(null);
    const toggleBtnRef = useRef<HTMLDivElement | null>(null);
    const hamburgerRef = useRef<HTMLDivElement | null>(null);

    const homeLinkRef = useRef<HTMLAnchorElement | null>(null);
    const aboutLinkRef = useRef<HTMLAnchorElement | null>(null);
    const projectsLinkRef = useRef<HTMLAnchorElement | null>(null);

    const links = [
        { id: 1, label: 'home.', href: '/', ref: homeLinkRef },
        { id: 2, label: 'about me.', href: '/about', ref: aboutLinkRef },
        { id: 3, label: 'projects.', href: '/projects', ref: projectsLinkRef },
    ];

    useEffect(() => {
        const tl = gsap.timeline({ paused: true });

        const text = new SplitType(homeLinkRef.current!, {
            types: 'lines',
        });
        const text2 = new SplitType(aboutLinkRef.current!, {
            types: 'lines',
        });
        const text3 = new SplitType(projectsLinkRef.current!, {
            types: 'lines',
        });

        //toggle menu

        const showMenuItems = () => {
            const start = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
            const end = 'M0,1005S175,995,500,995s500,5,500,5V0H0Z';

            tl.to(pathRef.current, {
                attr: { d: start },
                ease: 'power2.in',
                duration: 1,
            }).to(
                pathRef.current,

                { attr: { d: end }, ease: 'power2.out', duration: 1 }
            );

            tl.to(
                toggleBtnRef.current,
                {
                    border: '1px solid black',
                    ease: 'power2.inOut',
                    duration: 1,
                },
                '<'
            );

            tl.to(
                menuSpanRef.current,
                {
                    color: '#000',
                    ease: 'power2.inOut',
                    duration: 1,
                },
                '<'
            );

            tl.to(
                hamburgerRef.current,
                {
                    translateY: 0,
                },
                '<'
            );

            tl.to(
                hamburgerSpanRef.current,
                {
                    background: 'black',
                    ease: 'power2.inOut',
                    duration: 1,
                    rotation: 45,
                    transform: 'rotate(45deg)',
                },
                '<'
            );

            tl.to(
                CSSRulePlugin.getRule('span#test::before'),
                {
                    background: 'black',
                    ease: 'power2.inOut',
                    duration: 1,
                    top: 'unset',
                    transform: 'rotate(-90deg)',
                },
                '<'
            );

            tl.to(
                menuItemsRef.current,
                {
                    autoAlpha: 1,
                    display: 'flex',
                    duration: 1,
                },
                '<'
            );

            tl.to('.doesnt-work-without-this-tl', {}).reverse();
        };

        toggleMenuRef.current = () => {
            showMenuItems();

            if (toggleBtnRef.current) {
                toggleBtnRef.current.onclick = function () {
                    if (hamburgerRef.current) {
                        hamburgerRef.current.classList.toggle('active');
                        tl.reversed(!tl.reversed());
                        console.log(1);
                    }
                };
            }
        };

        toggleMenuRef.current();

        let elements = document.querySelectorAll('#text');

        elements.forEach((element) => {
            let innerText = (element as HTMLElement).innerText;
            element.innerHTML = '';

            let textContainer = document.createElement('div');
            textContainer.classList.add(styles.block);

            for (let letter of innerText) {
                let span = document.createElement('span');
                span.innerText = letter.trim() === '' ? '\xa0' : letter;
                span.classList.add(styles.letter);
                textContainer.appendChild(span);
            }

            element.appendChild(textContainer);
            element.appendChild(textContainer.cloneNode(true));
        });

        elements.forEach((element) => {
            element.addEventListener('mouseover', () => {
                element.classList.remove('play');
            });
        });
    }, []);

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
                    {links.map((link) => (
                        <Link
                            key={link.id}
                            href={link.href}
                            ref={link.ref}
                            className={styles.text}
                            id='text'
                            onClick={() => toggleMenuRef.current()}>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
