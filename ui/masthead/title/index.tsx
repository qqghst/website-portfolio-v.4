'use client';

import React, { useRef, useEffect, useLayoutEffect } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import useWindowSize from '@/hooks/useWindowSize';

const Title: React.FC = () => {
    const tl = useRef<gsap.core.Timeline | null>(null);

    const firstLineRef = useRef<HTMLSpanElement | null>(null);
    const secondLineRef = useRef<HTMLSpanElement | null>(null);
    const thirdLineRef = useRef<HTMLSpanElement | null>(null);
    const gradientRef = useRef<HTMLSpanElement | null>(null);

    const { width } = useWindowSize();
    const isMobile = width < 768;

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        tl.current = gsap.timeline();

        // const span1 = new SplitType(firstLineRef.current!, {
        //     types: 'chars',
        //     lineClass: 'lineParent',
        // });
        // const span2 = new SplitType(secondLineRef.current!, {
        //     types: 'chars',
        //     lineClass: 'lineParent',
        // });
        // const span3 = new SplitType(thirdLineRef.current!, {
        //     types: 'chars',
        //     lineClass: 'lineParent',
        // });

        const splitParent1 = new SplitType(firstLineRef.current!, {
            types: 'chars',
            lineClass: 'lineParent',
        });
        const splitParent2 = new SplitType(secondLineRef.current!, {
            types: 'chars',
            lineClass: 'lineParent',
        });
        const splitParent3 = new SplitType(thirdLineRef.current!, {
            types: 'chars',
            lineClass: 'lineParent',
        });

        const split1 = new SplitType(splitParent1?.chars ?? [], {
            types: 'chars',
        });
        const split2 = new SplitType(splitParent2?.chars ?? [], {
            types: 'chars',
        });
        const split3 = new SplitType(splitParent3?.chars ?? [], {
            types: 'chars',
        });

        tl.current.fromTo(
            [split1.chars, split2.chars, split3.chars],
            { opacity: 0, y: 32 },
            {
                duration: 0.8,
                opacity: 1,
                autoAlpha: 1,
                y: 0,
                stagger: 0.04,
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

                    start: isMobile ? 'top 8%' : '-64% 16%',
                    end: 'bottom top',
                    scrub: 1,
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
                    // start: '-64% 24%',
                    start: isMobile ? 'top 6%' : '-64% 24%',
                    end: 'bottom top',
                    scrub: 1,
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
                    // start: '-64% 32%',
                    start: isMobile ? 'top 4%' : '-64% 32%',
                    end: 'bottom top',
                    scrub: 1,
                },
            }
        );

        return () => {
            tl.current?.kill();
        };
    }, [isMobile]);
    return (
        <>
            <span
                ref={firstLineRef}
                className='h1 '>
                this is a catchy title
            </span>
            <span
                ref={secondLineRef}
                className={`h1  ${styles.margin2}`}>
                all the fun below
            </span>
            <span
                ref={thirdLineRef}
                className={`h1  ${styles.margin3}`}>
                keep <span style={{ opacity: 0 }}>scrolling</span>
            </span>
            <span
                ref={gradientRef}
                className={`h1  gradient ${styles.scrolling}`}>
                scrolling.
            </span>
        </>
    );
};

export default Title;
