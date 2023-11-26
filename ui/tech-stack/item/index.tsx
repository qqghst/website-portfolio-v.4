import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';
import { ITechStackItemProps } from './interface';
import useWindowSize from '@/hooks/useWindowSize';
import Line from '../line';

const TechStackItem: React.FC<ITechStackItemProps> = ({ title, tools, showLine }) => {
    gsap.registerPlugin(ScrollTrigger);

    const { width } = useWindowSize();
    const isMobile = width !== undefined && width < 768;

    const [showTechStack, setShowTechStack] = useState<boolean>(false);

    const tl = useRef<gsap.core.Timeline | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);

    const titleRef = useRef<HTMLSpanElement>(null);
    const clickMeRef = useRef<HTMLSpanElement>(null);
    const arrowRef = useRef<HTMLImageElement>(null);

    const toolsRef = useRef<HTMLDivElement>(null);

    const toggleTechStackTools = () => {
        setShowTechStack(!showTechStack);

        gsap.to(arrowRef.current, {
            rotation: !showTechStack ? 180 : 0,
            duration: 0.6,
            ease: 'power2.out',
        });

        gsap.to(containerRef.current, {
            paddingBottom: !showTechStack ? (isMobile ? '20vw' : '6vw') : '2vw', //96px, 32px; 1600
            duration: 0.6,
            ease: 'power2.out',
        });

        // gsap.to(techStackTextRef.current, {
        //     opacity: !showTechStack ? 1 : 0,
        //     duration: 1,
        //     ease: 'power2.out',
        //     delay: 3,
        //     stagger: 0.7,
        // });
    };

    //использую здесь, а не в функции toggleTechStack, потому что опасити указано в scss и чтобы оно меняло опасити нужен useeffect
    useEffect(() => {
        gsap.to(toolsRef.current, {
            opacity: showTechStack ? 1 : 0,
            duration: 1,
            ease: 'power2.out',
            delay: 0.6,
            stagger: 0.7,
        });
    }, [showTechStack]);

    useEffect(() => {
        if (!titleRef.current || !clickMeRef.current || !arrowRef.current) return;
        tl.current = gsap.timeline();

        const split = new SplitType(titleRef.current, { types: 'lines' });

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
                            trigger: titleRef.current,
                            scrub: 0.9,
                            start: 'top center',
                            end: 'bottom center',
                        },
                    }
                );
            }
        });

        tl.current.fromTo(
            [clickMeRef.current, arrowRef.current],
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: clickMeRef.current,
                    scrub: 0.03,
                    start: 'top center',
                    end: 'top top',
                },
            }
        );

        return () => {
            tl.current?.kill();
        };
    }, []);
    return (
        <div
            className={styles.techStackItem}
            onClick={toggleTechStackTools}>
            {showLine && <Line />}
            <div
                className={styles.techStackItem__container}
                ref={containerRef}>
                <div className='scrolling-text'>
                    <span
                        className='h1'
                        ref={titleRef}>
                        {title}
                    </span>
                </div>
                <span
                    ref={clickMeRef}
                    className='hide-on-mobile px13'>
                    {' '}
                    {showTechStack
                        ? 'click me to close tech stack'
                        : 'click me to see tech stack'}
                </span>
                <Image
                    ref={arrowRef}
                    className={styles.arrow}
                    src='/tech-stack/arrow.svg'
                    alt='arrow'
                    width={20 / 2}
                    height={20 / 2}
                />
            </div>
            <Line />
            {showTechStack && (
                <div
                    className={styles.tools}
                    ref={toolsRef}>
                    <ul>
                        {tools.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default React.memo(TechStackItem);
