'use client';

import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

const FirstText: React.FC = () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef<gsap.core.Timeline | null>(null);

    const firstTextRef = useRef<HTMLDivElement>(null);
    const secondTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        tl.current = gsap.timeline({});

        tl.current.fromTo(
            firstTextRef.current,
            { opacity: 0, y: 80 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 1,
                ease: 'power3.out',
                stagger: 0.04,
                scrollTrigger: {
                    trigger: firstTextRef.current,
                    start: 'top 90%',
                    scrub: true,
                },
            }
        );

        tl.current.fromTo(
            secondTextRef.current,
            { opacity: 0, y: 120 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                stagger: 0.04,
                scrollTrigger: {
                    trigger: secondTextRef.current,
                    start: 'top 90%',
                    scrub: true,
                },
            },
            '<'
        );

        return () => {
            tl.current?.kill()
        }
    }, []);
    return (
        <div className={styles.firstText}>
            <div className={styles.firstText__container}>
                <div ref={firstTextRef}>
                    <h3>Small chip. Giant leap.</h3>
                    <p>
                        M1 is our first chip designed specifically for Mac.
                        Apple silicon integrates the CPU, GPU, Neural Engine,
                        I/O, and so much more onto a single tiny chip. Packed
                        with an astonishing 16 billion transistors, M1 delivers
                        exceptional performance, custom technologies, and
                        unbelievable power efficiency — a major breakthrough for
                        Mac.
                    </p>
                </div>
                <div ref={secondTextRef}>
                    <p className='text-[28px] text-white font-normal'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo ipsam modi dicta repellendus harum? Sequi esse
                        facere, odio quod voluptas asperiores numquam eligendi
                        totam facilis rerum, error, cupiditate officia aut.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FirstText;
