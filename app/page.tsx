'use client';

import Masthead from '@/components/main/masthead';
import AboutPrev from '@/components/main/about-prev';
import Image from 'next/image';
import { PageWrapper } from '@/components/page-wrapper/page-wrapper';
import WhiteBg from '@/components/main/white-bg';
import Intro from '@/components/main/intro';
import { useEffect } from 'react';
import Projects from '@/components/main/projects';
import Outro from '@/components/main/outro';
import Footer from '@/components/footer';
import Music from '@/components/music';
import TechStack from '@/components/main/tech-stack';
import About from '@/components/main/about';
import FirstText from '@/ui/about/firstText';
import BigText from '@/ui/about/bigText';

export default function Home() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll'))
                .default;

            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);
    return (
        <main className=''>
            {/* <Intro /> */}
            <div className='h-[900px] bg-red-700'></div>
            <About />
            <TechStack />
            <div className='h-[900px] bg-green-700'></div>
            {/* <Masthead />
            <Footer />
            {/* <BigText /> */}
            {/* <FirstText /> */}
            {/* <Outro /> */}
        </main>
    );
}
