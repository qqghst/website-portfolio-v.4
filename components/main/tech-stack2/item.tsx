import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

interface ITechStackItemProps {
    title: string;
}

const TechStack2Item: React.FC<ITechStackItemProps> = ({ title }) => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef<gsap.core.Timeline | null>(null);
    const tl2 = useRef<gsap.core.Timeline | null>(null);

    const textRef = useRef<HTMLElement>(null);
    const textRef1 = useRef<HTMLElement>(null);
    const textRef2 = useRef<HTMLElement>(null);

    const spanRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const split = new SplitType(textRef.current, { types: 'lines' });
        const split2 = new SplitType(textRef1.current, { types: 'lines' });
        const split3 = new SplitType(textRef2.current, { types: 'lines' });
        const splits = [split, split2, split3];

        splits.forEach((split) => {
            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: split.elements[0],
                    scrub: 0.9,
                    start: 'top center',
                    end: 'bottom center',
                    markers: true,
                },
            });

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
                        }
                    );
                }
            });
        });

        tl2.current = gsap.timeline({
            scrollTrigger: {
                trigger: spanRef.current,
                scrub: 0.03,
                start: 'top center',
                end: 'top top',
                markers: true,
            },
        });

        tl2.current.fromTo(
            [spanRef.current, imgRef.current],
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
            }
        );

        return () => {
            tl.current?.kill();
            tl2.current?.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);
    return (
        <div className={styles.techStack2Item}>
            <div className={styles.techStack2Item__container}>
                <div className={styles.scrollingText}>
                    <span ref={textRef}>{title}</span>
                </div>
                <span ref={spanRef}>click me to see tech stack?</span>
                <Image
                    ref={imgRef}
                    className={styles.arrow}
                    src='/tech-stack/arrow.svg'
                    alt='arrow'
                    width={20 / 2}
                    height={20 / 2}
                />
            </div>
        </div>
    );
};

export default TechStack2Item;
