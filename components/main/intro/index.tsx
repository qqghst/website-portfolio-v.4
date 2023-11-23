'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Masthead from '../masthead';
import WhiteBg from '../white-bg';
import About from '../about';

const Intro: React.FC = () => {
    const tl = useRef<gsap.core.Timeline | null>(null);
    
    const containerRef = useRef<HTMLDivElement>(null);
    const mastheadRef = useRef<HTMLDivElement>(null);
    const whiteBgRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (!containerRef.current || !mastheadRef.current || !aboutRef.current)
            return;

        tl.current = gsap.timeline({ delay: 1 });

        tl.current.fromTo(
            containerRef.current,
            {
                backgroundColor: 'black',
            },
            {
                duration: 1,
                ease: 'none',
                backgroundColor: 'white',
                scrollTrigger: {
                    trigger: mastheadRef.current,
                    start: 'bottom center',
                    // end: '+=1000',
                    scrub: 1,

                },
            }
        );

        tl.current.fromTo(
            containerRef.current,
            {},
            {
                duration: 1,
                ease: 'none',
                backgroundColor: 'black',
                scrollTrigger: {
                    trigger: aboutRef.current,
                    // start: 'top bottom',
                    start: '-=100px bottom',
                    end: '+=500',
                    scrub: 1,

                },
            }
        );

        return () => {
            tl.current?.kill();
        };
    }, []);
    return (
        <div ref={containerRef}>
            <div ref={mastheadRef}>
                <Masthead />
            </div>
            <div ref={whiteBgRef}>
                <WhiteBg />
            </div>
            <div ref={aboutRef}>
                <About />
            </div>
        </div>
    );
};

export default React.memo(Intro);
