'use client';

import { useEffect } from 'react';
import Intro from '@/components/main/intro';
import Outro from '@/components/main/outro';
import TechStack from '@/components/main/tech-stack';
import Projects from '@/components/main/projects';
import ProjeectItem from '@/ui/projects/item';
import { projects } from '@/components/main/projects/data';
import Link from 'next/link';

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
            <TechStack />
            <Outro />
        </main>
    );
}
