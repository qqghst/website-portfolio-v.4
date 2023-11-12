'use client';

import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

const Title: React.FC = () => {
    gsap.registerPlugin(ScrollTrigger);

    const firstLineRef = useRef<HTMLSpanElement | null>(null);
    const secondLineRef = useRef<HTMLSpanElement | null>(null);
    const thirdLineRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        const span1 = new SplitType(firstLineRef.current!, {
            types: 'chars',
            lineClass: 'lineParent',
        });
        const span2 = new SplitType(secondLineRef.current!, {
            types: 'chars',
            lineClass: 'lineParent',
        });
        const span3 = new SplitType(thirdLineRef.current!, {
            types: 'chars',
            lineClass: 'lineParent',
        });

        tl.fromTo(
            span1.chars,
            {
                opacity: 0,
                y: 32,
            },
            {
                duration: 0.8,
                opacity: 1,
                y: 0,
                stagger: 0.04,
                ease: 'power3.out',
            }
        );

        tl.fromTo(
            span2.chars,
            {
                opacity: 0,
                y: 32,
                delay: 8,
            },
            {
                duration: 0.8,
                opacity: 1,
                y: 0,
                stagger: 0.04,
                ease: 'power3.out',
                delay: '-0.8',
            }
        );

        tl.fromTo(
            span3.chars,
            {
                opacity: 0,
                y: 32,
            },
            {
                duration: 0.8,
                opacity: 1,
                y: 0,
                stagger: 0.04,
                ease: 'power3.out',
                delay: '-0.8',
            }
        );

        tl.fromTo(
            firstLineRef.current,
            { x: 0 },
            {
                x: 500,
                ease: 'power1.out',
                duration: 1,
                scrollTrigger: {
                    trigger: firstLineRef.current,
                    start: '-64% 16%',
                    end: 'bottom top',
                    scrub: 1,
                    markers: true,
                },
            }
        );
        tl.fromTo(
            secondLineRef.current,
            { x: 0 },
            {
                x: -500,
                ease: 'power1.out',
                duration: 1,
                scrollTrigger: {
                    trigger: secondLineRef.current,
                    start: '-64% 24%',
                    end: 'bottom top',
                    scrub: 1,
                    markers: true,
                },
            }
        );
        tl.fromTo(
            thirdLineRef.current,
            { x: 0 },
            {
                x: 500,
                ease: 'power1.out',
                duration: 1,
                scrollTrigger: {
                    trigger: thirdLineRef.current,
                    start: '-64% 32%',
                    end: 'bottom top',
                    scrub: 1,
                    markers: true,
                },
            }
        );
    }, []);
    return (
        <>
            <span
                className='h1'
                ref={firstLineRef}>
                this is a <span className={styles.gradient}>catchy</span> title
            </span>
            <br />
            <span
                className={`${styles.margin2} h1`}
                ref={secondLineRef}>
                all the fun below
            </span>
            <br />
            <span
                className={`${styles.margin3} h1`}
                ref={thirdLineRef}>
                keep scrolling.
            </span>
        </>
    );
};

export default Title;