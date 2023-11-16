import React from 'react';
import styles from './styles.module.scss';
import Title from '@/ui/masthead/title';
import ScrollCircle from '@/ui/masthead/scroll-circle';
import s from '@/public/masthead/rainbow.svg';
import Image from 'next/image';
import ScrollCircle2 from '@/ui/masthead/scroll-circle2';

const Masthead = () => {
    return (
        <div className={styles.masthead}>
            <div className={styles.masthead__container}>
                <div className={styles.svg}>
                    <Image
                        src={s}
                        alt='svg'
                    />
                </div>
                <Title />
                <div className={styles.scrollCircle}>
                    <ScrollCircle2 />
                    {/* <ScrollCircle /> */}
                </div>
            </div>
        </div>
    );
};

export default Masthead;
