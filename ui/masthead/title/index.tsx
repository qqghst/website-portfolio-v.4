'use client';

import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

const Title: React.FC = () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef<gsap.core.Timeline | null>(null);

    const firstLineRef = useRef<HTMLSpanElement | null>(null);
    const secondLineRef = useRef<HTMLSpanElement | null>(null);
    const thirdLineRef = useRef<HTMLSpanElement | null>(null);
    const gradientRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        tl.current = gsap.timeline();

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

        // tl.current.fromTo(
        //     span1.chars,
        //     {
        //         opacity: 0,
        //         y: 32,
        //     },
        //     {
        //         duration: 0.8,
        //         opacity: 1,
        //         y: 0,
        //         stagger: 0.04,
        //         ease: 'power3.out',
        //     }
        // );

        // tl.current.fromTo(
        //     span2.chars,
        //     {
        //         opacity: 0,
        //         y: 32,
        //         delay: 8,
        //     },
        //     {
        //         duration: 0.8,
        //         opacity: 1,
        //         y: 0,
        //         stagger: 0.04,
        //         ease: 'power3.out',
        //         delay: '-0.8',
        //     }
        // );

        // tl.current.fromTo(
        //     span3.chars,
        //     {
        //         opacity: 0,
        //         y: 32,
        //     },
        //     {
        //         duration: 0.8,
        //         opacity: 1,
        //         y: 0,
        //         stagger: 0.04,
        //         ease: 'power3.out',
        //         delay: '-0.8',
        //     }
        // );
        tl.current.fromTo(
            [span1.chars, span2.chars, span3.chars],
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
            { opacity: 1, duration: 1.8, delay: '-1' }
            // '<'
        );

        tl.current.fromTo(
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
                    // markers: false,
                },
            }
        );
        tl.current.fromTo(
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
                    // markers: false,
                },
            }
        );
        tl.current.fromTo(
            [thirdLineRef.current, gradientRef.current],
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
                    // markers: false,
                },
            }
        );

        return () => {
            tl.current?.kill();
        };
    }, []);
    return (
        <>
            <span
                className='h1'
                ref={firstLineRef}>
                this is a catchy title
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
                keep <span style={{ opacity: 0 }}>scrolling</span>
            </span>
            <span
                className={`${styles.gradient} h1`}
                ref={gradientRef}>
                &nbsp; scrolling.
            </span>
        </>
    );
};

export default Title;
