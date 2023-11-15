import Masthead from '@/components/main/masthead';
import About from '@/components/main/about';
import Image from 'next/image';
import { PageWrapper } from '@/components/page-wrapper/page-wrapper';
import WhiteBg from '@/components/main/white-bg';

export default function Home() {
    return (
        <main className=''>
            <Masthead />
            <WhiteBg />
            <About />
            <WhiteBg />
        </main>
    );
}
