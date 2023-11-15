'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Masthead from '../masthead';
import WhiteBg from '../white-bg';
import About from '../about';

const Intro: React.FC = () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        tl.current = gsap.timeline({ delay: 1 });

        tl.current.fromTo(
            '.heroContainer',
            {
                backgroundColor: 'black',
            },
            {
                backgroundColor: 'white',
                scrollTrigger: {
                    trigger: '.firstSection',
                    start: 'bottom +=300',
                    end: '+=1000',
                    scrub: true,
                    markers: true
                },
            }
        );

        tl.current.fromTo(
            '.heroContainer',
            {},
            {
                backgroundColor: 'black',
                duration: 0.1,
                delay: 0.1,
                scrollTrigger: {
                    trigger: '.thirdSection',
                    start: 'top center',
                    end: '+=500',
                    scrub: true,
                    markers: true
                },
            }
        );
    }, []);
    return (
        // <div className={styles.intro}>
        //     <div className={styles.intro__container}></div>
        // </div>
        <>
            <section className='heroContainer'>
                <div className='firstSection'>
                    <Masthead />
                </div>
                <div className='secondSection'>
                    <WhiteBg />
                </div>
                <div className='thirdSection'>
                    <About />
                </div>
            </section>
        </>
    );
};

export default Intro;
