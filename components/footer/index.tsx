import React from 'react';
import styles from './styles.module.scss';
import Title from '@/ui/footer/title';
import PostFooter from '@/ui/footer/post-footer';

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__container}>
                <Title />
                <div className='absolute bottom-0'>
                    <PostFooter />
                </div>
            </div>
        </div>
    );
};

export default Footer;
