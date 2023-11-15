import Masthead from '@/components/main/masthead';
import About from '@/components/main/about';
import Image from 'next/image';
import { PageWrapper } from '@/components/page-wrapper/page-wrapper';
import WhiteBg from '@/components/main/white-bg';
import TechStackItem from '@/ui/tech-stack/item';
import TechStack from '@/components/main/tech-stack';
import Intro from '@/components/main/intro';

export default function Home() {
    return (
        <main className=''>
            {/* <Intro /> */}
            <Masthead />
            <WhiteBg />
            <About />
            <TechStack />
        </main>
    );
}
