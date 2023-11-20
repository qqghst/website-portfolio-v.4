'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';
import ButtonBorder from '@/ui/button-border';

const About: React.FC = () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef<gsap.core.Timeline | null>(null);
    const tl2 = useRef<gsap.core.Timeline | null>(null);

    const firstSpan = useRef<HTMLSpanElement>(null);
    const secondSpan = useRef<HTMLSpanElement>(null);
    const thirdSpan = useRef<HTMLSpanElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const smallTextRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const span = new SplitType(firstSpan.current!, {
            types: 'chars',
            lineClass: 'lineParent',
        });
        const span2 = new SplitType(secondSpan.current!, {
            types: 'chars',
            lineClass: 'lineParent',
        });
        const span3 = new SplitType(thirdSpan.current!, {
            types: 'chars',
            lineClass: 'lineParent',
        });

        tl.current = gsap.timeline({
            scrollTrigger: {
                trigger: firstSpan.current,
                start: 'top center',
                // once: true,
                toggleActions: 'play none none none',
            },
        });

        tl2.current = gsap.timeline({
            scrollTrigger: {
                trigger: buttonRef.current,
                start: 'top center',
                // once: true,
                toggleActions: 'play none none none',
            },
        });

        tl.current.fromTo(
            [span.chars, span2.chars, span3.chars],
            { y: 32, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.03,
                ease: 'power3.out',
            }
        );

        tl2.current.fromTo(
            [buttonRef.current, smallTextRef.current],
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.8,
                delay: 1.6,
                stagger: 0.5,
            }
        );

        return () => {
            tl.current?.kill();
            tl2.current?.kill();
        };
    }, []);
    return (
        <div className={styles.about}>
            <div className={styles.about__container}>
                <div className='translate-y-6'>
                    <div ref={buttonRef}>
                        <ButtonBorder type='button'>about me</ButtonBorder>
                    </div>
                    <span
                        className={`${styles.styles} h2`}
                        ref={firstSpan}>
                        I <span className='italic'>create</span>{' '}
                        <span className='opacity-40'>good-looking</span>
                    </span>
                </div>
                <br />
                <span
                    className={`${styles.styles} h2`}
                    ref={secondSpan}>
                    websites{' '}
                    <span className='opacity-40'>with beautiful visuals</span>
                </span>
                <br />
                <div>
                    <span ref={smallTextRef}>
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the{' '}
                    </span>
                    <span
                        className={`${styles.styles} h2`}
                        ref={thirdSpan}>
                        that makes <span className={styles.gradient2}>wow</span>{' '}
                        effect
                    </span>
                </div>
            </div>
        </div>
    );
};

export default About;
