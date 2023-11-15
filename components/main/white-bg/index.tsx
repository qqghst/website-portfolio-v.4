'use client'

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const WhiteBg: React.FC = () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef<gsap.core.Timeline | null>(null);

    const h1Ref = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        tl.current = gsap.timeline();

        tl.current.to(
            h1Ref.current,
            {
                scrollTrigger: {
                    trigger: h1Ref.current,
                    start: '-=400 center',
                    scrub: true,
                    markers: true,
                },
                scale: 2,
            },
            '+=0.2'
        );
    }, []);
    return (
        <div className={styles.whiteBg}>
            <div className={styles.whiteBg__container}>
                <Image
                    data-scroll-speed="20"
                    ref={imgRef}
                    className={styles.image}
                    src='/white-bg/test.jpeg'
                    alt='1'
                    width={1400 / 2}
                    height={1400 / 2}
                />
                <h1
                    className={`${styles.title} h1`}
                    ref={h1Ref}>
                    <span className={styles.gradient}>
                        <Link
                            href='/'
                            target='_blank'
                            rel='noopener noreferrer'>
                            contact me
                        </Link>
                    </span>
                </h1>
            </div>
        </div>
    );
};

export default WhiteBg;
