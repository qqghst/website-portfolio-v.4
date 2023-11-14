import Masthead from '@/components/main/masthead';
import About from '@/components/main/about';
import Image from 'next/image';
import { PageWrapper } from '@/components/page-wrapper/page-wrapper';

export default function Home() {
    return (
        <main className=''>
            <Masthead />
            <About />
        </main>
    );
}
