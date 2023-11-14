'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles.module.scss';

export const PageWrapper = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const [show, setShow] = useState<boolean>(true);
    const [codeState, setCodeState] = useState<
        'entering' | 'loading' | 'error' | 'success'
    >('entering');

    useEffect(() => {
        if (codeState === 'loading') {
            setShow(false);
        }
    }, [codeState, setShow]);

    // useEffect(() => {
    //     if (!show) {
    //         router.push('/next-page');
    //     }
    // }, [show, router, phone]);

    return (
        <AnimatePresence mode='wait'>
            {show && (
                <motion.div>
                    {children}
                    <motion.div
                        className={styles.slideIn}
                        initial={{ scaleY: 1, originY: 0 }}
                        animate={{ scaleY: 0, originY: 0 }}
                        exit={{ scaleY: 0, originY: 0 }}
                        transition={{
                            delay: 1,
                            duration: 1,
                            ease: [0.5, 0, 0.5, 1],
                        }}></motion.div>
                    <motion.div
                        className={styles.slideOut}
                        initial={{ scaleX: 1, originX: 0 }}
                        animate={{ scaleX: 0, originX: 0 }}
                        exit={{ scaleX: 0, originX: 0 }}
                        transition={{
                            duration: 1,
                            ease: [0.5, 0, 0.5, 1],
                        }}></motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
