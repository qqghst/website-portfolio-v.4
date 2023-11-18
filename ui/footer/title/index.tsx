'use client';

import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

const Title: React.FC = () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef<gsap.core.Timeline | null>(null);

    const firstLineRef = useRef<HTMLSpanElement | null>(null);
    const secondLineRef = useRef<HTMLSpanElement | null>(null);
    const gradientRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        tl.current = gsap.timeline({
            scrollTrigger: {
                trigger: firstLineRef.current,
                start: 'top center',
                // once: true,
                markers: true,
                toggleActions: 'play none none none',
            },
        });

        const span1 = new SplitType(firstLineRef.current!, {
            types: 'chars',
            lineClass: 'lineParent',
        });
        const span2 = new SplitType(secondLineRef.current!, {
            types: 'chars',
            lineClass: 'lineParent',
        });

        tl.current.fromTo(
            [span1.chars, span2.chars],
            { opacity: 0, y: 32 },
            {
                duration: 0.8,
                opacity: 1,
                y: 0,
                stagger: {
                    each: 0.04,
                    amount: 1.6,
                    // start: 0.8,
                },
                ease: 'power3.out',
            }
        );

        tl.current.fromTo(
            gradientRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.2, delay: '-0.6' },
            // '>'
        );

        return () => {
            tl.current?.kill();
        };
    }, []);
    return (
        <>
            <span
                className='h1-footer'
                ref={firstLineRef}>
                wanna create
            </span>
            <br />
            <span
                // className='h1-footer translate-x-10 hidden'
                className={`${styles.margin2} h1-footer`}
                ref={secondLineRef}>
                project together?
            </span>
            <br />
            <span
                className={`${styles.margin3} h1-footer`}
                ref={gradientRef}>
                <Link
                    href='https://t.me/qqghstk'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <span className='gradient'>contact me</span>
                </Link>
            </span>
        </>
    );
};

export default Title;
