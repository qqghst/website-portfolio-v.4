import Masthead from '@/components/main/masthead';
import About from '@/components/main/about';
import Image from 'next/image';

export default function Home() {
    return (
        <main className=''>
            <Masthead />
            <About />
        </main>
    );
}
