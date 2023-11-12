import React from 'react';
import styles from './styles.module.scss';
import Logo from '@/ui/navbar/logo';
import Time from '@/ui/navbar/time';
import Menu from '@/ui/navbar/menu';

const Navbar: React.FC = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__container}>
                <Logo />
                <Time />
                <Menu />
            </div>
        </div>
    );
};

export default Navbar;
