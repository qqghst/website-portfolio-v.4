import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Title from '@/ui/masthead/title';

import MobileButton from '@/ui/masthead/mobile-button';
import MouseBlur from '@/ui/masthead/mouse-blur';

const Masthead: React.FC = () => {
    return (
        <MouseBlur>
            <div className={styles.masthead}>
                <div className={styles.masthead__container}>
                    <Title />
                    {/* <div className={`hide-on-mobile ${styles.svg}`}>
                        <Image
                            src='/masthead/rainbow.svg'
                            width={0}
                            height={0}
                            alt='svg'
                        />
                    </div>
                    <MobileButton /> */}
                </div>
            </div>
        </MouseBlur>
    );
};

export default React.memo(Masthead);
