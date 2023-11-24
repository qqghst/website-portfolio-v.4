'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';
import ButtonBorder from '@/ui/button-border';

const SecondText: React.FC = () => {
    const tl = useRef<gsap.core.Timeline | null>(null);
    const mm = gsap.matchMedia();

    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        mm.add('(min-width: 769px)', () => {
            const span = new SplitType(textRef.current!, {
                types: 'chars',
                lineClass: 'lineParent',
            });

            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top bottom-=120px',
                    markers: true,
                    // toggleActions: 'play none none restart',
                },
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
        });

        return () => {
            tl.current?.kill();
        };
    }, []);
    return (
        <div className={`${styles.secondText}`}>
            <div className={styles.secondText__container}>
                <div
                    ref={textRef}
                    className={`h3 ${styles.textContainer}`}>
                    <span className={`${styles.numbers}`}>123456789</span>I
                    create a <span>stylish websites</span> with{' '}
                    <br className='hidden md:block' />
                    <span>beautiful visuals,</span>{' '}
                    <span
                        className={`${styles.hero} ${styles.layers} ${styles.glitch}`}
                        data-text='animations'>
                        <span>animations</span>
                    </span>
                    <span className='italic'>, fonts</span> and so on{' '}
                    <br className='hidden md:block' />
                    <span className={`${styles.numbers}`}>12345</span>
                    that makes <span>wow</span> effect.
                </div>
            </div>
        </div>
    );
};

export default React.memo(SecondText);
