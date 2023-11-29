'use client';
import { useEffect } from 'react';
import Intro from '@/components/main/intro';
import Outro from '@/components/main/outro';
import TechStack from '@/components/main/tech-stack';
import Masthead from '@/components/main/masthead';

export default function Home() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll'))
                .default;

            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);

    return (
        <main className='overflow-x-hidden'>
            {/* <Masthead /> */}
            <Intro />
            <TechStack />
            <Outro />
        </main>
    );
}
