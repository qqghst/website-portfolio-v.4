'use client';

import Masthead from '@/components/main/masthead';
import About from '@/components/main/about';
import Image from 'next/image';
import { PageWrapper } from '@/components/page-wrapper/page-wrapper';
import WhiteBg from '@/components/main/white-bg';
import TechStackItem from '@/ui/tech-stack/item';
import TechStack from '@/components/main/tech-stack';
import Intro from '@/components/main/intro';
import { useEffect } from 'react';
import Projects from '@/components/main/projects';

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
            <Intro />
            <Projects />
            <About />
            {/* <Masthead />
            <WhiteBg />
            <About /> */}
            {/* <TechStack /> */}
        </main>
    );
}
