import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';
import Marquee from 'react-fast-marquee';
import { ITechStackItemProps } from './interface';
import img from '@/public/projects/1.png';

const TechStackItem: React.FC<ITechStackItemProps> = ({ title, tools }) => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef<gsap.core.Timeline | null>(null);
    const tl2 = useRef<gsap.core.Timeline | null>(null);

    const textRef = useRef<HTMLSpanElement>(null);
    const textRef1 = useRef<HTMLSpanElement>(null);
    const textRef2 = useRef<HTMLSpanElement>(null);

    const spanRef = useRef<HTMLSpanElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const techStackTextRef = useRef<HTMLDivElement>(null);
    const techStackImgRef = useRef(null);
    const toolRefs = useRef(null);

    const [showTechStack, setShowTechStack] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const toggleTechStack = () => {
        setShowTechStack(!showTechStack);

        if (imgRef.current) {
            gsap.to(imgRef.current, {
                ease: 'power2.out',
                duration: 0.6,
                rotation: !showTechStack ? 180 : 0,
            });
        }

        if (containerRef.current) {
            gsap.to(containerRef.current, {
                paddingBottom: !showTechStack ? 100 : 30,

                duration: 0.5,
                ease: 'power1.out',
            });
        }
    };

    useEffect(() => {
        if (techStackTextRef.current) {
            gsap.to(techStackTextRef.current, {
                opacity: showTechStack ? 1 : 0,
                delay: 0.6,
                duration: 1,
                ease: 'power2.out',
                stagger: 0.7,
            });
        }
    }, [showTechStack]);

    useEffect(() => {
        const split = new SplitType(textRef.current, { types: 'lines' });
        const split2 = new SplitType(textRef1.current, { types: 'lines' });
        const split3 = new SplitType(textRef2.current, { types: 'lines' });

        const splits = [split, split2, split3];

        splits.forEach((split) => {
            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: textRef.current,
                    scrub: 0.9,
                    start: 'top center',
                    end: 'bottom center',
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
        <div
            className={styles.techStackItem}
            onClick={toggleTechStack}>
            <div
                className={styles.techStackItem__container}
                ref={containerRef}>
                <div className={styles.scrollingText}>
                    <span ref={textRef}>{title}</span>
                </div>
                <span ref={spanRef}>
                    {' '}
                    {showTechStack
                        ? 'click me to close tech stack'
                        : 'click me to see tech stack'}
                </span>
                <Image
                    ref={imgRef}
                    className={styles.arrow}
                    src='/tech-stack/arrow.svg'
                    alt='arrow'
                    width={20 / 2}
                    height={20 / 2}
                />
            </div>
            {showTechStack && (
                <div
                    className={styles.techStackText}
                    ref={techStackTextRef}>
                    <ul className={styles.techStackTools}>
                        {tools.map((item, index) => (
                            <li
                                ref={toolRefs}
                                key={index}
                                className={`${styles.tools}`}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default React.memo(TechStackItem);
