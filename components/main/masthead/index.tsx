import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Title from '@/ui/masthead/title';

import MobileButton from '@/ui/masthead/mobile-button';
import MouseBlur from '@/ui/masthead/mouse-blur';

const Masthead: React.FC = () => {
    return (
        <div className={styles.masthead}>
            <div className={styles.masthead__container}>
                <Title />
            
                <MobileButton />
            </div>
        </div>
    );
};

export default React.memo(Masthead);
