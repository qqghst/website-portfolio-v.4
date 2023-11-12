'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import CSSRulePlugin from 'gsap/dist/CSSRulePlugin';
import SplitType from 'split-type';
import styles from './styles.module.scss';
import Link from 'next/link';

export default function Menu() {
    // const [links2Initialized, setLinks2Initialized] = useState(false);
    gsap.registerPlugin(CSSRulePlugin);

    const menuSpanRef = useRef(null);
    const hamburgerSpanRef = useRef(null);
    const menuItemsRef = useRef(null);
    const textRef = useRef(null);

    const pathRef = useRef(null);
    const toggleBtnRef = useRef<HTMLDivElement | null>(null);
    const hamburgerRef = useRef<HTMLDivElement | null>(null);

    const homeLinkRef = useRef<HTMLAnchorElement | null>(null);
    const aboutLinkRef = useRef<HTMLAnchorElement | null>(null);
    const projectsLinkRef = useRef<HTMLAnchorElement | null>(null);

    const links2 = [
        { ref: homeLinkRef, text: 'home.', href: '/' },
        { ref: aboutLinkRef, text: 'about me.', href: 'about' },
        { ref: projectsLinkRef, text: 'projects.', href: 'project' },
    ];

    useEffect(() => {
        const tl = gsap.timeline({ paused: true });
        const tl2 = gsap.timeline();

        const text = new SplitType(homeLinkRef.current!, {
            types: 'lines',
            // lineClass: styles['lineParent'],
            // lineClass: 'lineParent',
        });
        const text2 = new SplitType(aboutLinkRef.current!, {
            types: 'lines',
            // lineClass: styles['lineParent'],
            // lineClass: 'lineParent',
        });
        const text3 = new SplitType(projectsLinkRef.current!, {
            types: 'lines',
            // lineClass: styles['lineParent'],
            // lineClass: 'lineParent',
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
                hamburgerSpanRef.current,
                {
                    background: 'black',
                    ease: 'power2.inOut',
                    duration: 1,
                },
                '<'
            );

            tl.to(
                CSSRulePlugin.getRule('span.test::before'),
                {
                    background: 'black',
                    ease: 'power2.inOut',
                    duration: 1,
                },
                '<'
            );

            tl.to(
                menuItemsRef.current,
                {
                    autoAlpha: 1,

                    // visibility: 'visible',
                    display: 'flex',
                    duration: 1,
                },
                '<'
            );

            tl2.fromTo(
                text.lines,
                {
                    opacity: 0,
                    y: 32,
                },
                {
                    delay: 1,
                    duration: 0.8,
                    opacity: 1,
                    y: 0,
                    stagger: 0.04,
                    ease: 'power3.out',
                },
                '<'
            );

            tl2.fromTo(
                text2.lines,
                {
                    opacity: 0,
                    y: 32,
                },
                {
                    delay: 1,
                    duration: 0.8,
                    opacity: 1,
                    y: 0,
                    stagger: 0.04,
                    ease: 'power3.out',
                },
                '<'
            );

            tl2.fromTo(
                text3.lines,
                {
                    opacity: 0,
                    y: 32,
                },
                {
                    delay: 1,
                    duration: 0.8,
                    opacity: 1,
                    y: 0,
                    stagger: 0.04,
                    ease: 'power3.out',
                },
                '<'
            );

            tl.to('.doesnt-work-without-this-tl', {}).reverse();
        };

        const openMenu = () => {
            showMenuItems();

            if (toggleBtnRef.current) {
                toggleBtnRef.current.onclick = function () {
                    if (hamburgerRef.current) {
                        hamburgerRef.current.classList.toggle('active');
                        tl.reversed(!tl.reversed());
                    }
                };
            }
        };

        openMenu();

        let elements = document.querySelectorAll('#text');

        elements.forEach((element) => {
            let innerText = (element as HTMLElement).innerText;
            element.innerHTML = '';

            let textContainer = document.createElement('div');
            textContainer.classList.add('block');

            for (let letter of innerText) {
                let span = document.createElement('span');
                span.innerText = letter.trim() === '' ? '\xa0' : letter;
                span.classList.add('letter');
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
                <svg viewBox='0 0 1000 1000'>
                    <path
                        ref={pathRef}
                        d='M0 2S175 1 500 1s500 1 500 1V0H0Z'></path>
                </svg>
            </div>

            <div
                className='toggle-btn'
                ref={toggleBtnRef}>
                <div className='menu-span'>
                    <span ref={menuSpanRef}>menu</span>
                </div>
                <div
                    className='hamburger'
                    ref={hamburgerRef}>
                    <span
                        className='test'
                        ref={hamburgerSpanRef}></span>
                </div>
            </div>

            <div
                className='menu-items'
                ref={menuItemsRef}>
                <div className='menu-container'>
                    {links2.map(({ ref, text, href }) => (
                        <Link
                            key={text}
                            ref={ref}
                            href={href}
                            id='text'
                            className='text'>
                            {text}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
