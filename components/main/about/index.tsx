'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';
import ButtonBorder from '@/ui/button-border';
import FirstText from '@/ui/about/firstText';
import SecondText from '@/ui/about/secondText';
import BigText from '@/ui/about/bigText';

const About2: React.FC = () => {
    // const tl = useRef<gsap.core.Timeline | null>(null);

    // const textRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    //     tl.current = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: textRef.current,
    //             start: 'top center',
    //             // toggleActions: 'play none none restart',
    //         },
    //     });

    //     const span = new SplitType(textRef.current!, {
    //         types: 'chars',
    //         lineClass: 'lineParent',
    //     });

    //     tl.current.fromTo(
    //         span.chars,
    //         { y: 32, opacity: 0 },
    //         {
    //             y: 0,
    //             opacity: 1,
    //             duration: 0.8,
    //             stagger: 0.03,
    //             ease: 'power3.out',
    //         }
    //     );

    //     return () => {
    //         tl.current?.kill();
    //     };
    // }, []);
    return (
        <div className={`${styles.secondText}`}>
            <div className={styles.seconeText__container}>
                {/* <FirstText /> */}
                <SecondText />
                {/* <BigText /> */}
            </div>
        </div>
    );
};

// export default About;
export default React.memo(About2);
