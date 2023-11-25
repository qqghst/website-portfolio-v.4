'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const WhiteBg: React.FC = () => {
    const tl = useRef<gsap.core.Timeline | null>(null);
    
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        tl.current = gsap.timeline();

        tl.current.to(
            h1Ref.current,
            {
                scrollTrigger: {
                    trigger: h1Ref.current,
                    start: '-=400 center',
                    scrub: 1,
                },
                scale: 4,
            }
        );

        return () => {
            tl.current?.kill();
        };
    }, []);

    return (
        <div className={styles.whiteBg}>
            <div className={styles.whiteBg__container}>
                <Image
                    ref={imgRef}
                    src='/white-bg/test.jpeg'
                    alt='1'
                    width={1400 / 2}
                    height={1400 / 2}
                    data-scroll
                    data-scroll-speed='1.2'
                />
                <h1
                    className='h1'
                    ref={h1Ref}>
                    <Link
                        href='https://t.me/qqghstk'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <span className='gradient'>contact me?</span>
                    </Link>
                </h1>
                <div>
                    <Link
                        href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
                        target='_blank'
                        rel='noopener noreferrer'
                        data-scroll
                        data-scroll-speed='1.2'>
                        <span>?</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default React.memo(WhiteBg);
