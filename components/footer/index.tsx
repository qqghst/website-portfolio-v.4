import React from 'react';
import styles from './styles.module.scss';
import Title from '@/ui/footer/title';
import PostFooter from '@/ui/footer/post-footer';
import MobileButton from '@/ui/masthead/mobile-button';

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__container}>
                <Title />
                <MobileButton
                    color='black'
                    background='black'
                />
                <div className={`hide-on-mobile ${styles.postFooter}`}>
                    <span>&copy; DMITRY O. All Rights Reserved˝</span>
                    <span>&copy; 2023</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
