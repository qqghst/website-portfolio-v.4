import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Title from '@/ui/masthead/title';
import MouseBlur from '@/ui/mouse-blur';
import MobileButton from '@/ui/masthead/mobileButton';

const Masthead = () => {
    return (
        <MouseBlur>
            <div className={styles.masthead}>
                <div className={styles.masthead__container}>
                    <Title />
                    {/* <div className={styles.svg}>
                        <Image
                            src='/masthead/rainbow.svg'
                            width={0}
                            height={0}
                            alt='svg'
                        />
                    </div> */}

                    <MobileButton />
                </div>
            </div>
        </MouseBlur>
    );
};

export default Masthead;
