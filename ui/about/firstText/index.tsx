'use client';

import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

const FirstText: React.FC = () => {
    const tl = useRef<gsap.core.Timeline | null>(null);

    const firstTextRef = useRef<HTMLDivElement>(null);
    const secondTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
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
                    // start: 'top 90%',
                    start: 'top bottom',
                    scrub: 1,
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
                    // start: 'top 90%',
                    start: 'top bottom',
                    scrub: 1,
                },
            },
            '<'
        );

        return () => {
            tl.current?.kill();
        };
    }, []);
    return (
        <div className={styles.firstText}>
            <div className={styles.firstText__container}>
                <div ref={firstTextRef}>
                    <h3 className='h2'>
                        Hello mate. <br className='hide-on-desktop' /> Guero
                        solo.
                    </h3>

                    <p className='h4'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Exercitationem assumenda velit in doloribus ex
                        eius alias ducimus eum accusantium ipsa. Vitae adipisci
                        obcaecati, blanditiis nisi maiores neque et quas ut!
                        Vitae adipisci obcaecati, blanditiis nisi maiores neque
                        et quas ut, blanditiis nisi maiores 
                    </p>
                </div>
                <div ref={secondTextRef}>
                    <p className='h5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo ipsam modi dicta repellendus harum? Sequi esse
                        facere, odio quod voluptas asperioressdadas
                        adasdjaskdjask
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FirstText;
