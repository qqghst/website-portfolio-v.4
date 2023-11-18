import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import { IProjectsItemProps } from './interface';

const ProjeectItem: React.FC<IProjectsItemProps> = ({
    title,
    description,
    src,
}) => {
    return (
        <>
            <div className={styles.projeectItem}>
                <div className={styles.projeectItem__container}>
                    <div className={styles.imageContainer}>
                        <figure>
                            <Image
                                className={styles.img}
                                src={src}
                                alt={`${title} - ${description}`}
                                layout='responsive'
                                width={1800 / 2}
                                height={1200 / 2}
                            />
                        </figure>
                    </div>
                    <div className={styles.textContainer}>
                        <span>{title}</span>
                        <span>{description}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjeectItem;
