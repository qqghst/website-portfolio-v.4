'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

const BigText: React.FC = () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef<gsap.core.Timeline | null>(null);

    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!textRef.current) {
            return;
        }
        tl.current = gsap.timeline();

        const split = new SplitType(textRef.current, { types: 'lines' });

        split.lines?.forEach((line) => {
            if (tl.current) {
                tl.current.fromTo(
                    line,
                    { opacity: 1, scale: 1 },
                    {
                        backgroundPositionX: 0,
                        ease: 'none',
                        opacity: 1,
                        scale: 1,
                        scrollTrigger: {
                            trigger: line,
                            scrub: 0.9,
                            start: 'top center',
                            end: 'bottom center',
                            // end: "+=100%",
                        },
                    }
                );
            }
        });

        return () => {
            if (tl.current) {
                tl.current.kill();
            }
        };
    }, []);
    return (
        <div className={styles.bigText}>
            <div className={styles.bigText__container}>
                <div className={styles.scrollingText}>
                    <p ref={textRef}>
                        Feel free to contact me, we&apos;ll discuss your future
                        site from design to deployment. Currently free for work.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BigText;
