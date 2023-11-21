'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';
import ButtonBorder from '@/ui/button-border';

const About2: React.FC = () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef<gsap.core.Timeline | null>(null);

    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        tl.current = gsap.timeline({
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top center',
                markers: true,
                // toggleActions: 'play none none restart',
            },
        });

        const span = new SplitType(textRef.current!, {
            types: 'chars',
            lineClass: 'lineParent',
        });

        tl.current.fromTo(
            span.chars,
            { y: 32, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.03,
                ease: 'power3.out',
            }
        );

        return () => {
            tl.current?.kill();
        };
    }, []);
    return (
        <div className={`${styles.about}`}>
            <div
                ref={textRef}
                className={styles.about__container}>
                I create a <span>stylish websites</span> with
                <span>beautiful visuals, </span>
                <span
                    className={`${styles.hero} ${styles.layers} ${styles.glitch}  text-white`}
                    data-text='animations'>
                    <span>animations</span>
                </span>
                <span className='italic'>, fonts</span>
                and so on that makes wow effect.
            </div>
        </div>
    );
};

// export default About;
export default React.memo(About2);
