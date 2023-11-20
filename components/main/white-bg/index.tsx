'use client';

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
                    scrub: 1,
                },
                scale: 2,
            },
            '+=0.2'
        );

        return () => {
            tl.current?.kill();
        };
    }, []);

    return (
        <div className={styles.whiteBg}>
            <div className={styles.whiteBg__container}>
                <Image
                    className={styles.image}
                    ref={imgRef}
                    src='/white-bg/test.jpeg'
                    alt='1'
                    width={1400 / 2}
                    height={1400 / 2}
                    data-scroll
                    data-scroll-speed='0.8'
                />
                <h1
                    className={`${styles.title} h1`}
                    ref={h1Ref}>
                    <Link
                        href='/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <span className='gradient'>contact me?</span>
                    </Link>
                </h1>
                <Link
                    href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
                    target='_blank'
                    rel='noopener noreferrer'
                    data-scroll
                    data-scroll-speed='0.1'>
                    <span className={styles.questionMark}>🗿</span>
                </Link>
            </div>
        </div>
    );
};

// export default WhiteBg;
export default React.memo(WhiteBg);
